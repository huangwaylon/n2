#!/usr/bin/env node
// Horizontal-overflow / clipping probe (docs/LAYOUT.md Appendix A) with true device emulation.
// Needs Node >= 22 and the server on :8765.
//
// usage: node tools/overflow.mjs ROUTE [WIDTH=390] [--en] [--touch] [--dark] [--furi]
//   prints JSON: { vw, docW, vp: [...], clip: [...] }
//     docW > vw   -> the page scrolls sideways (bad)
//     vp          -> outermost elements whose right edge is past the viewport ("name +px text")
//     clip        -> elements poking out of a component frame (.gp .sample .exercise .check .tbl …),
//                    counted even when the frame hides the overflow
//   --en     turn on the global English layer first (English lines are longer)
//   --touch  emulate a touch screen (pointer:coarse) and report visible tap targets smaller than 44×44
//            (box, widened by an absolute ::after). Widths < 700 are always emulated as touch phones.
//   --furi   also run the furigana probe (tools/lib/furi-probe.mjs: readings off-centre, covering text/boxes, clipped,
//            uneven line pitch) -> "furi": {n, off, hit, clip, uneven}. Same probe in real iOS Safari: tools/lib/wkshot.mjs --probe
//   e.g. node tools/overflow.mjs ch/1 375
//        for w in 320 375 390; do node tools/overflow.mjs ch/2/review $w --en; done
import { open, sleep } from "./lib/cdp.mjs";
import { PROBE_FN } from "./lib/furi-probe.mjs";

const flags = process.argv.slice(2).filter(a => a.startsWith("--"));
const [route = "", W = "390"] = process.argv.slice(2).filter(a => !a.startsWith("--"));
const width = +W;

const PROBE = `(() => {
  const vw = document.documentElement.clientWidth, docW = document.documentElement.scrollWidth;
  const name = el => el.tagName.toLowerCase() + (el.classList.length ? "." + [...el.classList].join(".") : "");
  const txt = el => (el.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 24);
  const vp = [];
  document.querySelectorAll("body *").forEach(el => { const r = el.getBoundingClientRect();
    if (r.width && r.right > vw + 1) { const p = el.parentElement;
      if (p && p.getBoundingClientRect().right > vw + 1 && p.id !== "main" && p.tagName !== "BODY") return;
      vp.push(name(el) + " +" + Math.round(r.right - vw) + " " + txt(el)); } });
  const clip = [];
  document.querySelectorAll(".gp, .sample, .exercise, .cando, .plus, .clip, .passage, .check, .tbl, .gp-bar").forEach(box => {
    const br = box.getBoundingClientRect();
    box.querySelectorAll("*").forEach(el => { const r = el.getBoundingClientRect();
      if (r.width && r.right > br.right + 1) { const p = el.parentElement;
        if (p !== box && p.getBoundingClientRect().right > br.right + 1) return;
        clip.push(name(box) + " > " + name(el) + " +" + Math.round(r.right - br.right) + " " + txt(el)); } }); });
  const out = { vw, docW, vp: [...new Set(vp)].slice(0, 10), clip: [...new Set(clip)].slice(0, 12) };
  if (${flags.includes("--touch")}) {
    const small = [];
    document.querySelectorAll("button, a, summary, label, input, select, [data-act]").forEach(el => {
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height || r.right <= 0 || r.left >= vw || getComputedStyle(el).visibility === "hidden") return; // skip closed drawer
      if (r.width <= 1 && r.height <= 1) return;   // visually hidden control (its <label> is the target)
      const d = el.closest("details:not([open])"); if (d && !el.closest("summary")) return;   // collapsed <details> content
      let w = r.width, h = r.height;
      const a = getComputedStyle(el, "::after");
      if (a.content !== "none" && a.position === "absolute") { w = Math.max(w, parseFloat(a.width) || 0); h = Math.max(h, parseFloat(a.height) || 0); }
      if (w < 44 || h < 44) small.push(name(el) + " " + Math.round(w) + "x" + Math.round(h) + " " + txt(el));
    });
    const counts = {}; small.forEach(s => { const k = s.split(" ")[0]; counts[k] = (counts[k] || 0) + 1; });
    out.touch = { total: small.length, byElement: counts, examples: [...new Set(small)].slice(0, 15) };
  }
  return JSON.stringify(out, null, 1);
})()`;

const pg = await open({ route, width, height: 900, scheme: flags.includes("--dark") ? "dark" : "light", touch: flags.includes("--touch") || undefined });
if (flags.includes("--en")) { await pg.evaluate("document.body.classList.add('show-en')"); await sleep(300); }
const res = JSON.parse(await pg.evaluate(PROBE));
if (flags.includes("--furi")) res.furi = await pg.evaluate(`(${PROBE_FN})({})`);
console.log(JSON.stringify(res, null, 1));
pg.logs.forEach(l => console.error(l));
await pg.close();
