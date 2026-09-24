#!/usr/bin/env node
// Screenshot a route of the local site with true device emulation (works at any width, incl. 320–499 px
// phone widths that tools/shot.sh cannot do). Needs Node >= 22 and the server on :8765.
//
// usage: node tools/shot.mjs ROUTE [WIDTH=1280] [HEIGHT=900] [OUT] [light|dark] [--full] [--en] [--wait=MS]
//   ROUTE   hash route without "#/", e.g. ""  ch/1  ch/2/review  gp/12  compare   (quote "" for home)
//   WIDTH   390 = iPhone 14, 375 = iPhone SE/mini, 320 = smallest; < 700 turns on mobile emulation
//   --full  capture the whole page height instead of just the viewport (from the current scroll position's top: 0)
//   --en    turn the global English layer on (body.show-en) before capturing
//   --touch emulate a touch screen (pointer:coarse) at any width (always on below 700 px)
//   --drawer open the sidebar drawer (☰) before capturing
// Prints the PNG path; console messages / JS exceptions from the page are printed to stderr.
//   e.g. node tools/shot.mjs ch/1 390 2400 /tmp/ch1-390.png
//        node tools/shot.mjs ch/2/review 375 900 /tmp/rev.png dark --en
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { open, sleep } from "./lib/cdp.mjs";

const flags = process.argv.slice(2).filter(a => a.startsWith("--"));
const pos = process.argv.slice(2).filter(a => !a.startsWith("--"));
const [route = "", W = "1280", H = "900", outArg, scheme = "light"] = pos;
const width = +W, height = +H;
const OUT = outArg || `/tmp/n2shot/${route.replace(/\//g, "_") || "home"}-${width}.png`;
const wait = +((flags.find(f => f.startsWith("--wait=")) || "").split("=")[1] || 2500);

const pg = await open({ route, width, height, scheme, wait, touch: flags.includes("--touch") || undefined });
if (flags.includes("--en")) { await pg.evaluate("document.body.classList.add('show-en')"); await sleep(300); }
if (flags.includes("--drawer")) { await pg.evaluate("document.querySelector('.sb-toggle').click()"); await sleep(400); }
const params = { format: "png" };
if (flags.includes("--full")) {
  const h = await pg.evaluate("document.documentElement.scrollHeight");
  params.captureBeyondViewport = true;
  params.clip = { x: 0, y: 0, width, height: h, scale: 1 };
}
const s = await pg.send("Page.captureScreenshot", params);
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, Buffer.from(s.data, "base64"));
pg.logs.forEach(l => console.error(l));
console.log(OUT);
await pg.close();
