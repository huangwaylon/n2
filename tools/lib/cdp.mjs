// Minimal Chrome DevTools Protocol helper shared by tools/shot.mjs and tools/overflow.mjs.
// Launches headless Chrome, opens a page with real device emulation (mobile:true below 700 px,
// which plain `--window-size` cannot do: desktop Chrome refuses windows narrower than ~500 px).
// Requires Node >= 22 (global WebSocket/fetch) and the local server on :8765 (python3 -m http.server 8765).
import { spawn } from "node:child_process";
import { rmSync } from "node:fs";

export const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
export const BASE = process.env.N2_BASE || "http://localhost:8765/";
export const sleep = ms => new Promise(r => setTimeout(r, ms));

// open({route, width, height, scheme, wait, mobile, touch}) -> {send, evaluate, logs, close}
// mobile defaults to width < 700; touch (pointer:coarse, hover:none) defaults to mobile.
// logs collects console messages, uncaught exceptions and failed-load log entries.
export async function open({ route = "", width = 1280, height = 900, scheme = "light", wait = 2500, mobile, touch } = {}) {
  mobile = mobile ?? width < 700; touch = touch ?? mobile;
  // launch Chrome on a random debugging port; retry on a fresh port if it doesn't come up (port clash, slow start)
  let ch, prof, tabs;
  for (let attempt = 0; attempt < 3 && !tabs; attempt++) {
    const port = 9300 + Math.floor(Math.random() * 600);
    prof = `/tmp/n2-cdp-prof-${port}-${process.pid}`;
    ch = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`,
      `--user-data-dir=${prof}`, "about:blank"], { stdio: "ignore" });
    for (let i = 0; i < 60; i++) {
      try { const t = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (t.find(x => x.type === "page")) { tabs = t; break; } } catch (e) {}
      await sleep(250);
    }
    if (!tabs) { ch.kill(); rmSync(prof, { recursive: true, force: true }); }
  }
  if (!tabs) throw new Error("headless Chrome did not start (tried 3 ports)");
  const ws = new WebSocket(tabs.find(t => t.type === "page").webSocketDebuggerUrl);
  await new Promise(r => (ws.onopen = r));
  let id = 0; const pend = {}; const logs = [];
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if (m.id && pend[m.id]) { pend[m.id](m.result || { error: m.error }); delete pend[m.id]; return; }
    if (m.method === "Runtime.consoleAPICalled")
      logs.push(`console.${m.params.type}: ` + m.params.args.map(a => a.value ?? a.description ?? "").join(" "));
    else if (m.method === "Runtime.exceptionThrown") {
      const d = m.params.exceptionDetails; logs.push("exception: " + (d.exception?.description || d.text));
    } else if (m.method === "Log.entryAdded") logs.push(`log.${m.params.entry.level}: ${m.params.entry.text} ${m.params.entry.url || ""}`);
  };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile });
  if (touch) await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: scheme }] });
  await send("Runtime.enable"); await send("Log.enable"); await send("Page.enable");
  // "n1:ch/1" → the N1 book page (BASE + "n1/#/ch/1"); plain routes are the N2 book at the site root
  const bm = /^(n\d):(.*)$/.exec(route);
  await send("Page.navigate", { url: bm && bm[1] !== "n2" ? `${BASE}${bm[1]}/#/${bm[2]}` : BASE + "#/" + (bm ? bm[2] : route) });
  await sleep(wait);
  const evaluate = async expr => (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result?.value;
  const close = async () => {
    try { ws.close(); } catch (e) {}
    const exited = new Promise(r => ch.once("exit", r)); ch.kill(); await Promise.race([exited, sleep(3000)]);
    try { rmSync(prof, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch (e) {}
  };
  return { send, evaluate, logs, close };
}
