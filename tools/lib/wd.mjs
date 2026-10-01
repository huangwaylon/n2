// Minimal W3C WebDriver client for REAL mobile Safari in the iOS Simulator (safaridriver, WebKit).
// Chrome emulation (cdp.mjs) does not reproduce WebKit ruby / line-box behaviour, so furigana checks need this.
// Needs Xcode simulators and `safaridriver -p 4444` running (tools/lib/wkshot.mjs starts it if it isn't).
// open({device, route, wait, scheme}) -> {evaluate(fnSource or expr), screenshot(path), scrollTo(y), close()}
import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { routeUrl } from "./route.mjs";

export const WD = process.env.WD || "http://localhost:4444";
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function req(method, path, body) {
  const r = await fetch(WD + path, { method, headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json();
  if (j.value && j.value.error) throw new Error(`${path}: ${j.value.error} ${j.value.message || ""}`);
  return j.value;
}

export async function ensureDriver() {
  try { await fetch(WD + "/status"); return; } catch (e) {}
  const p = spawn("safaridriver", ["-p", String(new URL(WD).port || 4444)], { stdio: "ignore", detached: true });
  p.unref();
  for (let i = 0; i < 40; i++) { await sleep(250); try { await fetch(WD + "/status"); return; } catch (e) {} }
  throw new Error("safaridriver did not start");
}

export async function open({ device = "iPhone 17e", route = "", wait = 2500 } = {}) {
  await ensureDriver();
  const caps = { capabilities: { alwaysMatch: { browserName: "safari", platformName: "iOS", "safari:useSimulator": true, "safari:deviceName": device } } };
  let s;
  // pairing with a (re)starting Safari fails now and then: retry
  for (let i = 0; ; i++) { try { s = await req("POST", "/session", caps); break; } catch (e) { if (i >= 3) throw e; await sleep(4000); } }
  const sid = s.sessionId, P = `/session/${sid}`;
  const evaluate = async (src, ...args) => req("POST", `${P}/execute/sync`, { script: src, args });
  const go = async (r, w = wait) => { await req("POST", `${P}/url`, { url: /^https?:/.test(r) ? r : routeUrl(r, `?t=${Date.now()}`) }); await sleep(w); };
  const screenshot = async (out) => {
    const b64 = await req("GET", `${P}/screenshot`);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, Buffer.from(b64, "base64"));
    return out;
  };
  const close = async () => { try { await req("DELETE", P); } catch (e) {} };
  await go(route);
  return { sid, evaluate, go, screenshot, close };
}
