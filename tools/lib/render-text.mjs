#!/usr/bin/env node
// Rendered-text dump: the text the RENDERER puts on every route (tools/text-snapshot.js only dumps the data files).
// Readings are kept as base《reading》, whitespace is collapsed, one line per block-ish element. Use it to prove that a
// layout change did not add, drop or reorder text: dump with the old and the new assets over the same data and diff.
// usage: node tools/lib/render-text.mjs n1|n2 [BASE=http://localhost:8765/] > /tmp/new.txt
//   old side, e.g.: mkdir -p /tmp/old/n1 && git show HEAD:assets/app.js > … (copy assets + index pages, symlink data),
//   serve it on another port, then  N2_BASE=http://localhost:8767/ node tools/lib/render-text.mjs n1 > /tmp/old.txt
import { open, sleep } from "./cdp.mjs";

const [book = "n2"] = process.argv.slice(2);
const pg = await open({ route: book === "n2" ? "" : `${book}:`, width: 1280, height: 900, wait: 3000 });
const routes = await pg.evaluate(`(() => {
  const r = ["", "guide", "about", "index", "compare", "cando"];
  N2.chapters.forEach((c) => { r.push("ch/" + c.id); });
  return r;
})()`);
const DUMP = `(() => {
  const m = document.querySelector("#main").cloneNode(true);
  m.querySelectorAll("rt, .rt").forEach((e) => e.replaceWith("《" + e.textContent + "》"));
  m.querySelectorAll(".rb-b").forEach((e) => e.replaceWith(e.textContent));
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
for (const r of routes) {
  await pg.evaluate(`location.hash = "#/${r}"`);
  await sleep(r.startsWith("ch/") ? 700 : 300);
  console.log("=== " + (r || "home"));
  console.log(await pg.evaluate(DUMP));
}
await pg.close();
