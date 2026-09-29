#!/usr/bin/env node
// Load and route-change timings of the local site in headless Chrome (server on :8765), cold cache, CPU throttled.
// Per route: requests and bytes, first contentful paint, time until #main has content and the next frame, scripting /
// layout / style time, long tasks, DOM nodes, and the CPU time inside the layout-measuring functions (fitRubies …, from
// a sampling profile). Then chapter → chapter route changes.
// usage: node tools/perf.mjs [--cpu=4] [--width=390] [--runs=3] [--net=RTT,KBPS] [--files] [ROUTE …]
//   routes as in shot.mjs ("", ch/1, n1:ch/1, q2:l/7/read); --net emulates a network (e.g. --net=150,10000: 150 ms round
//   trip, 10 Mbit/s). python3 -m http.server speaks HTTP/1.0 without compression, GitHub Pages HTTP/2 with gzip: with
//   --net the waterfall (how many round trips before the data arrives) is what carries over, not the absolute times.
import { open, sleep, BASE } from "./lib/cdp.mjs";

const flags = process.argv.slice(2).filter((a) => a.startsWith("--"));
const num = (k, d) => +((flags.find((f) => f.startsWith(`--${k}=`)) || "").split("=")[1] || d);
const CPU = num("cpu", 4), W = num("width", 390), RUNS = num("runs", 3);
const NET = (flags.find((f) => f.startsWith("--net=")) || "").slice(6).split(",").filter(Boolean).map(Number);
const pos = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const ROUTES = pos.length ? pos : ["", "ch/1", "ch/14", "vocab", "n1:ch/1", "q2:", "q2:l/7/read"];
const HOT = ["fitRubies", "fitOptionCols", "vtScrollInit", "filterVocab", "placeLineNos", "wireTracks", "fitReading", "route", "sidebar", "loadData"];
const url = (r) => { const m = /^(n\d|q2):(.*)$/.exec(r); return m ? `${BASE}${m[1]}/#/${m[2]}` : `${BASE}#/${r}`; };

// in the page, before any script: paint / long-task observers and the moment #main first gets content
const PROBE = `(() => {
  const P = (window.__perf = { lt: [], fcp: 0, main: 0, frame: 0 });
  try { new PerformanceObserver((l) => l.getEntries().forEach((e) => P.lt.push(e.duration))).observe({ type: "longtask", buffered: true }); } catch (e) {}
  try { new PerformanceObserver((l) => l.getEntries().forEach((e) => { if (e.name === "first-contentful-paint") P.fcp = e.startTime; })).observe({ type: "paint", buffered: true }); } catch (e) {}
  const mo = new MutationObserver(() => {
    const m = document.getElementById("main");
    if (m && m.children.length && !P.main) { P.main = performance.now(); mo.disconnect(); requestAnimationFrame(() => setTimeout(() => (P.frame = performance.now()))); }
  });
  mo.observe(document, { childList: true, subtree: true });
})()`;

// inclusive CPU ms per function name in a Profiler profile
function hot(profile) {
  const byId = new Map(profile.nodes.map((n) => [n.id, n])), parent = new Map();
  profile.nodes.forEach((n) => (n.children || []).forEach((c) => parent.set(c, n.id)));
  const out = {};
  profile.samples.forEach((s, i) => {
    const dt = (profile.timeDeltas[i + 1] ?? 0) / 1000, seen = new Set();
    for (let id = s; id != null; id = parent.get(id)) {
      const f = byId.get(id).callFrame.functionName;
      if (HOT.includes(f) && !seen.has(f)) { seen.add(f); out[f] = (out[f] || 0) + dt; }
    }
  });
  return out;
}
const metrics = async (pg) => Object.fromEntries((await pg.send("Performance.getMetrics")).metrics.map((m) => [m.name, m.value]));
const r0 = (x) => Math.round(x);
const med = (xs) => { const s = [...xs].sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; };

const pg = await open({ route: "", width: W, height: 800, wait: 500, furigana: false });
await pg.send("Network.enable");
await pg.send("Performance.enable");
await pg.send("Profiler.enable");
await pg.send("Profiler.setSamplingInterval", { interval: 200 });
await pg.send("Page.addScriptToEvaluateOnNewDocument", { source: PROBE });
await pg.send("Emulation.setCPUThrottlingRate", { rate: CPU });
if (NET.length) await pg.send("Network.emulateNetworkConditions", { offline: false, latency: NET[0], downloadThroughput: (NET[1] || 1e5) * 128, uploadThroughput: (NET[1] || 1e5) * 128 });

async function load(r) {
  await pg.send("Page.navigate", { url: "about:blank" });
  await sleep(300);
  await pg.send("Network.clearBrowserCache");
  await pg.send("Network.setCacheDisabled", { cacheDisabled: true });
  const reqs = new Map();
  const ws = pg.ws;
  const on = (e) => {
    const m = JSON.parse(e.data);
    if (m.method === "Network.responseReceived") reqs.set(m.params.requestId, { url: m.params.response.url, bytes: 0 });
    if (m.method === "Network.loadingFinished" && reqs.has(m.params.requestId)) reqs.get(m.params.requestId).bytes = m.params.encodedDataLength;
  };
  ws.addEventListener("message", on);
  const m0 = await metrics(pg);
  await pg.send("Profiler.start");
  await pg.send("Page.navigate", { url: url(r) });
  for (let i = 0; i < 600 && !(await pg.evaluate("window.__perf && __perf.frame")); i++) await sleep(50);
  await sleep(1500); // fonts.ready refit, late tasks
  const prof = (await pg.send("Profiler.stop")).profile;
  const m1 = await metrics(pg);
  ws.removeEventListener("message", on);
  const P = await pg.evaluate("JSON.stringify(__perf)").then(JSON.parse);
  const local = [...reqs.values()].filter((q) => q.url.startsWith(BASE));
  return {
    reqs: local.length, kb: local.reduce((n, q) => n + q.bytes, 0) / 1024, ext: reqs.size - local.length,
    fcp: P.fcp, main: P.main, frame: P.frame, lt: P.lt.length, ltMs: P.lt.reduce((a, b) => a + b, 0), ltMax: Math.max(0, ...P.lt),
    script: (m1.ScriptDuration - m0.ScriptDuration) * 1000, layout: (m1.LayoutDuration - m0.LayoutDuration) * 1000,
    style: (m1.RecalcStyleDuration - m0.RecalcStyleDuration) * 1000, nodes: await pg.evaluate("document.getElementsByTagName('*').length"),
    hot: hot(prof), local,
  };
}
// chapter → chapter (or lesson → lesson) inside the loaded page: hash change until the next frame
async function hop(to) {
  await pg.send("Profiler.start");
  const t = await pg.evaluate(`new Promise((ok) => { const t0 = performance.now(); location.hash = ${JSON.stringify("#/" + to)};
    requestAnimationFrame(() => setTimeout(() => ok(performance.now() - t0))); })`);
  const prof = (await pg.send("Profiler.stop")).profile;
  await sleep(600);
  return { t, hot: hot(prof), nodes: await pg.evaluate("document.getElementsByTagName('*').length") };
}

const fmtHot = (h) => Object.entries(h).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${r0(v)}`).join(", ");
console.log(`CPU ${CPU}x, ${W}px, cold cache${NET.length ? `, network ${NET[0]} ms RTT ${NET[1] || "∞"} kbit/s` : ""}, median of ${RUNS} (ms)`);
for (const r of ROUTES) {
  const runs = [];
  for (let i = 0; i < RUNS; i++) runs.push(await load(r));
  const M = (k) => r0(med(runs.map((x) => x[k])));
  const H = {}; HOT.forEach((k) => { const v = med(runs.map((x) => x.hot[k] || 0)); if (v >= 1) H[k] = v; });
  console.log(`\n${r || "(n2 home)"}: ${runs[0].reqs} req ${r0(runs[0].kb)} KB (+${runs[0].ext} external) · FCP ${M("fcp")} · content ${M("main")} · +frame ${M("frame")} · ` +
    `script ${M("script")} layout ${M("layout")} style ${M("style")} · long tasks ${M("lt")} (${M("ltMs")} total, max ${M("ltMax")}) · DOM ${M("nodes")}`);
  console.log(`  hot: ${fmtHot(H)}`);
  if (flags.includes("--files")) runs[0].local.forEach((q) => console.log(`    ${r0(q.bytes / 1024)} KB ${q.url.slice(BASE.length)}`));
}
// route changes
const hops = [["ch/1", ["ch/2", "ch/3", "ch/14", "ch/1"]], ["n1:ch/1", ["ch/2", "ch/5"]], ["q2:l/7/read", ["l/8/read", "l/10/read", "l/7/listen"]]];
if (!pos.length) for (const [start, list] of hops) {
  await load(start);
  for (const to of list) { const h = await hop(to); console.log(`hop ${start.split(":")[0]} → ${to}: ${r0(h.t)} ms, DOM ${h.nodes} · ${fmtHot(h.hot)}`); }
}
pg.logs.filter((l) => !/favicon/.test(l)).forEach((l) => console.error(l));
await pg.close();
