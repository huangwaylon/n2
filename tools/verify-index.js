// Asserts that every form in the book's index (tools/<book>/index-manifest.txt) is represented
// under the right grammar-point number, and that all points sit in the right chapters and parts.
// usage: node tools/verify-index.js [n1|n2]   (default n2)
const fs = require("fs"), path = require("path");
const { bookArg, loadBook, root } = require("./lib/books");
const [book] = bookArg(process.argv.slice(2));
const { chapters } = loadBook(book);
const { TOC, PARTS } = book; // PARTS[ch] = first point of part (2), (3) …
const plain = (s) => String(s || "").replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\[[^\]]*\]/g, "").replace(/\*\*/g, "");
const norm = (s) => plain(s).replace(/（[^）]*）|\([^)]*\)/g, "").replace(/[〜～A-Za-z①②③。…+＋\s・、／/「」]/g, "");
const errs = [], seen = {};
chapters.forEach((ch) => {
  const [a, b] = TOC[ch.id];
  const nos = ch.parts.flatMap((p) => p.points.map((g) => g.no));
  const want = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  if (nos.join() !== want.join()) errs.push(`ch${ch.id}: points ${nos.join()} ≠ expected ${want.join()}`);
  const starts = PARTS[ch.id] || [];
  if (ch.parts.length !== starts.length + 1) errs.push(`ch${ch.id}: expected ${starts.length + 1} part(s), got ${ch.parts.length}`);
  else starts.forEach((no, k) => { if (ch.parts[k + 1].points[0].no !== no) errs.push(`ch${ch.id}: part (${k + 2}) should start at ${no}`); });
  ch.parts.forEach((p) => p.points.forEach((g) => {
    const blob = [g.pattern, g.phrase, ...(g.index || []), ...(g.forms || []),
      ...(g.plus || []).flatMap((x) => [x.pattern, ...(x.forms || [])]),
      ...(g.notes || []).map((n) => n.ja), ...(g.formNotes || []).map((n) => n.ja)].map(norm).join("|");
    seen[g.no] = blob;
  }));
});
const present = new Set(chapters.map((c) => c.id));
const lines = fs.readFileSync(path.join(root, "tools", book.id, "index-manifest.txt"), "utf8").split("\n").filter((l) => l && !l.startsWith("#"));
let checked = 0;
lines.forEach((l) => {
  const [form, noS] = l.split("\t"); const no = +noS;
  const chId = +Object.keys(TOC).find((k) => no >= TOC[k][0] && no <= TOC[k][1]);
  if (!present.has(chId)) return;
  checked++;
  const core = norm(form);
  if (!seen[no]) errs.push(`#${no} missing entirely (index form ${form})`);
  else if (!seen[no].includes(core)) errs.push(`#${no}: index form 「${form}」 (core 「${core}」) not found in pattern/index/forms/plus/notes`);
});
console.log(`chapters loaded: ${[...present].sort((a, b) => a - b).join(",")} | index forms checked: ${checked}/${lines.length}`);
console.log(errs.length ? "MISMATCHES:\n" + errs.join("\n") : "OK — all index forms and chapter assignments match");
process.exit(errs.length ? 1 : 0);
