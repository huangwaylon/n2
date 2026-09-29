// Cross-reference check: every "#N" in a deepDive / compare note must point at a grammar point whose pattern (or a Plus
// pattern / index form) matches the Japanese written just before it, and every see: number must exist.
//   node tools/xref.js [n2|n1] [--all]    (--all also lists the references that match)
const { bookArg, loadBook } = require("./lib/books.js");
const [B, rest] = bookArg(process.argv.slice(2));
const all = rest.includes("--all");
const T = loadBook(B);
const pts = new Map();
for (const ch of T.chapters.filter(Boolean)) for (const p of ch.parts) for (const g of p.points) pts.set(g.no, { g, ch: ch.id });
// form markers (V-る, V-た, circled sense numbers) are dropped too, so "Vだけ①" matches "V-るだけV"
const bare = (s) => String(s || "").replace(/\{([^|}]+)\|[^}]*\}/g, "$1").replace(/-[るたてないます]+|[①-⑳]/g, "").replace(/\*\*|__|~~.*?~~|\[[^\]]*\]|[〜~（）()＋+・／/…\s、。「」]/g, "");
// the forms a point can be referred to by
const namesOf = (g) => [g.pattern, g.phrase, ...(g.index || []), ...(g.plus || []).map((x) => x.pattern)].filter(Boolean).map(bare).filter(Boolean);
// Japanese run right before "(#N)" / "#N": the last **bold** or the last Japanese word
function cue(text, at) {
  const before = text.slice(Math.max(0, at - 80), at);
  const bold = before.match(/\*\*([^*]+)\*\*[^*]{0,12}$/);
  if (bold) return bold[1];
  const ja = before.match(/([^\sA-Za-z*(),.;:!?'"“”‘’—–-]+)[^　-鿿＀-￯]{0,6}$/);
  return ja ? ja[1] : "";
}
const matches = (c, g) => {
  const b = bare(c);
  if (!b) return null;
  return namesOf(g).some((n) => n.includes(b) || b.includes(n) || overlap(n, b) >= Math.min(3, n.length));
};
const overlap = (a, b) => { let best = 0; for (let i = 0; i < a.length; i++) for (let j = i + 1; j <= a.length; j++) if (b.includes(a.slice(i, j))) best = Math.max(best, j - i); return best; };
let bad = 0, n = 0;
const report = (where, N, c, ok, ctx) => { n++; if (!ok) bad++; if (!ok || all) console.log(`${ok ? "ok " : ok === null ? "?? " : "BAD"} ${where} → #${N} ${pts.has(N) ? bare(pts.get(N).g.pattern) : "(no such point)"}   cue: ${c || "—"}${ctx ? `\n      …${ctx}…` : ""}`); };
for (const [no, { g }] of pts) {
  for (const s of g.see || []) if (!pts.has(s) || s === no) { bad++; console.log(`BAD #${no} see: ${s} ${s === no ? "(itself)" : "(no such point)"}`); }
  const texts = [["deepDive", g.deepDive], ...(g.plus || []).map((p, i) => [`plus${i}.deepDive`, p.deepDive])];
  for (const [k, t] of texts) for (const m of String(t || "").matchAll(/#(\d+)/g)) {
    const N = +m[1], c = cue(t, m.index);
    report(`#${no} ${k}`, N, c, pts.has(N) ? (N === no ? true : matches(c, pts.get(N).g)) : false, t.slice(Math.max(0, m.index - 70), m.index + 8).replace(/\n/g, " "));
  }
}
// compare groups: each item's no must be the point its pattern names
(T.compare || []).forEach((gr, i) => (gr.items || []).forEach((it) => {
  if (it.no == null) return;
  const ok = pts.has(it.no) && matches(String(it.pattern).replace(/[①-⑩]/g, ""), pts.get(it.no).g);
  report(`compare[${i}] ${bare(gr.key)}`, it.no, it.pattern, ok);
}));
console.log(`${B.id}: ${n} #N references, ${bad} to check`);
