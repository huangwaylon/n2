// Minimal Chrome DevTools Protocol helper shared by tools/shot.mjs and tools/overflow.mjs.
// Launches headless Chrome, opens a page with real device emulation (mobile:true below 700 px,
// which plain `--window-size` cannot do: desktop Chrome refuses windows narrower than ~500 px).
// Requires Node >= 22 (global WebSocket/fetch) and the local server on :8765 (python3 -m http.server 8765).
import { spawn } from "node:child_process";
import { rmSync } from "node:fs";

export const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
export const BASE = process.env.N2_BASE || "http://localhost:8765/";
export const sleep = ms => new Promise(r => setTimeout(r, ms));

// open({route, width, height, scheme, wait}) -> {send, eval, logs, close}
// logs collects console messages, uncaught exceptions and failed-load log entries.
export async function open({ route = "", width = 1280, height = 900, scheme = "light", wait = 2500, mobile } = {}) {
  const port = 9300 + Math.floor(Math.random() * 500);
  const prof = `/tmp/n2-cdp-prof-${port}`;
  const ch = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`,
    `--user-data-dir=${prof}`, "about:blank"], { stdio: "ignore" });
  let tabs;
  for (let i = 0; i < 60; i++) {
    try { tabs = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); if (tabs.find(t => t.type === "page")) break; } catch (e) {}
    await sleep(250);
  }
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
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: mobile ?? width < 700 });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: scheme }] });
  await send("Runtime.enable"); await send("Log.enable"); await send("Page.enable");
  await send("Page.navigate", { url: BASE + "#/" + route });
  await sleep(wait);
  const evaluate = async expr => (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result?.value;
  const close = async () => {
    try { ws.close(); } catch (e) {}
    const exited = new Promise(r => ch.once("exit", r)); ch.kill(); await Promise.race([exited, sleep(3000)]);
    try { rmSync(prof, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch (e) {}
  };
  return { send, evaluate, logs, close };
}
