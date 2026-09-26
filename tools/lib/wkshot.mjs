#!/usr/bin/env node
// Real iOS Safari (WebKit) screenshots + furigana probe, driven through safaridriver (see wd.mjs).
// usage: node tools/lib/wkshot.mjs DEVICE ROUTE[,ROUTE…] [OUTDIR=/tmp/wk] [--pages=N] [--probe] [--en] [--nofuri]
//          [--sel=CSS] [--dark|--light] [--wait=MS]
//   Saves OUTDIR/<device>-<route>-<k>.png for k = 1..N viewport pages scrolled from the top (or from --sel's element),
//   --pages=0 for none; --probe prints the furigana probe (tools/lib/furi-probe.mjs) for each route as JSON.
//   e.g. node tools/lib/wkshot.mjs "iPhone 17e" n1:ch/3,n1:gp/20 /tmp/wk --pages=3 --probe
import { execSync } from "node:child_process";
import { open, sleep } from "./wd.mjs";
import { PROBE_FN } from "./furi-probe.mjs";

const flags = process.argv.slice(2).filter((a) => a.startsWith("--"));
const pos = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const [device = "iPhone 17e", routesArg = "", outDir = "/tmp/wk"] = pos;
const flag = (k, d) => { const f = flags.find((x) => x === "--" + k || x.startsWith("--" + k + "=")); return f ? (f.includes("=") ? f.split("=").slice(1).join("=") : true) : d; };
const pages = +flag("pages", 1), wait = +flag("wait", 2500), sel = flag("sel", "");
const udid = () => { const l = execSync("xcrun simctl list devices available").toString().split("\n").find((x) => x.includes(device + " (")); return l && /\(([0-9A-F-]{36})\)/.exec(l)[1]; };
if (flag("dark") || flag("light")) { const u = udid(); execSync(`xcrun simctl boot ${u} 2>/dev/null || true`); execSync(`xcrun simctl ui ${u} appearance ${flag("dark") ? "dark" : "light"}`); }

const routes = routesArg.split(",");
const pg = await open({ device, route: routes[0], wait });
const setup = async () => {
  await pg.evaluate(`const s = JSON.parse(localStorage.getItem("n2.settings") || "{}"); s.furigana = ${!flag("nofuri")}; s.english = ${!!flag("en")};
    const old = localStorage.getItem("n2.settings"); localStorage.setItem("n2.settings", JSON.stringify(s)); return old !== JSON.stringify(s);`);
};
await setup();
const report = {};
for (const r of routes) {
  await pg.go(r, wait);
  const tag = `${device}-${r}`.replace(/[ /:()]/g, "_");
  if (sel) await pg.evaluate(`const e = document.querySelector(arguments[0]); if (e) e.scrollIntoView(); return !!e;`, sel);
  else await pg.evaluate("window.scrollTo(0, 0)");
  await sleep(300);
  if (flag("probe")) report[r] = await pg.evaluate(`return (${PROBE_FN})(arguments[0])`, {});
  const vh = await pg.evaluate("return innerHeight");
  for (let k = 1; k <= pages; k++) {
    const f = `${outDir}/${tag}-${k}.png`;
    await pg.screenshot(f); console.log(f);
    const done = await pg.evaluate(`const y = scrollY; window.scrollBy(0, innerHeight - 60); return scrollY === y;`);
    if (done) break;
    await sleep(350);
  }
  void vh;
}
if (flag("probe")) console.log(JSON.stringify(report, null, 1));
await pg.close();
