#!/usr/bin/env node
// Dump what the RENDERER puts on every route of a book (tools/text-snapshot.js dumps only the data files), to prove that
// a renderer or layout change did not add, drop or reorder anything: dump before and after the change, then diff.
//   --text (default): the text, one line per block, readings as base《reading》
//   --html: the markup, with the layout-dependent attributes (ruby margins, option columns, scroller heights) removed
// usage: node tools/render-dump.mjs n1|n2 [--html] > /tmp/after.txt      (server on :8765, or N2_BASE=…)
import { open, sleep } from "./lib/cdp.mjs";

const html = process.argv.includes("--html");
const [book = "n2"] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const pg = await open({ route: book === "n2" ? "" : `${book}:`, width: 1280, height: 900, wait: 3000 });
const routes = await pg.evaluate(`["", "guide", "about", "index", "compare", "cando"].concat(TRY.chapters.map((c) => "ch/" + c.id))`);
const TEXT = `(() => {
  const m = document.querySelector("#main").cloneNode(true);
  m.querySelectorAll("rt").forEach((e) => e.replaceWith("《" + e.textContent + "》"));
  const B = /^(P|DIV|LI|H[1-6]|TR|SECTION|ARTICLE|HEADER|FOOTER|ASIDE|DETAILS|SUMMARY|OL|UL|TD|TH|BR|NAV|BUTTON)$/;
  const out = []; let cur = "";
  (function walk(n) {
    for (const c of n.childNodes) {
      if (c.nodeType === 3) cur += c.nodeValue;
      else if (c.nodeType === 1) {
        const blk = B.test(c.tagName);
        if (blk) { out.push(cur); cur = ""; }
        walk(c);
        if (blk) { out.push(cur); cur = ""; }
      }
    }
  })(m);
  out.push(cur);
  return out.map((s) => s.replace(/\\s+/g, " ").trim()).filter(Boolean).join("\\n");
})()`;
const HTML = `(() => {
  const m = document.querySelector("#main").cloneNode(true);
  m.querySelectorAll("ruby").forEach((r) => { r.removeAttribute("style"); delete r.dataset.fit; if (r.dataset.ls) { r.classList.remove("r-s"); delete r.dataset.ls; } if (!r.classList.length) r.removeAttribute("class"); });
  m.querySelectorAll("[style]").forEach((e) => { e.style.removeProperty("--cols"); e.style.removeProperty("height"); if (!e.getAttribute("style")) e.removeAttribute("style"); });
  m.querySelectorAll("[data-fit-h],[data-hint]").forEach((e) => { delete e.dataset.fitH; delete e.dataset.hint; });
  m.querySelectorAll(".has-more").forEach((e) => e.classList.remove("has-more"));
  return m.innerHTML.replace(/>\\s+</g, ">\\n<").replace(/[ \\t]+/g, " ");
})()`;
for (const r of routes) {
  await pg.evaluate(`location.hash = "#/${r}"`);
  await sleep(r.startsWith("ch/") ? 700 : 300);
  console.log("=== " + (r || "home"));
  console.log(await pg.evaluate(html ? HTML : TEXT));
}
pg.logs.forEach((l) => console.error(l));
await pg.close();
