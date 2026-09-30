// Guard for layout work: proves that no book text changed.
// Dumps every Japanese string (sample text, points, exercises, reviews, compare, front matter) in order,
// ignoring our own English, deepDive, why, and any layout-only fields.
//   node tools/text-snapshot.js [n1|n2|q1|q2] > /tmp/before.txt      (before editing; default n2)
//   node tools/text-snapshot.js [n1|n2|q1|q2] | diff tools/<book>/text-baseline.txt -   (after — must print nothing)
// Paragraph re-grouping is allowed: sample lines are compared as one concatenated string per sample.
// Quartet (q1, q2): every book string (Japanese and the book's English, not `tr`) with its path, via tools/q2/lib.js.
if (/^q\d$/.test(process.argv[2])) {
  const q = require("./q2/lib"), B = q.BOOKS[process.argv[2]];
  const T = q.load(q.allFiles(B), B), out = [];
  const dump = (o, p) => q.walkBook(o, (s, path) => out.push(path + "\t" + s), p);
  T.lessons.forEach((l) => dump(l, "l" + l.id));
  T.vocab.forEach((v) => dump(v, "vocab" + v.lesson));
  T.kanji.forEach((k) => dump(k, "kanji" + k.lesson));
  T.units.forEach((u) => dump(u, u.id));
  dump(T.front, "front");
  process.stdout.write(out.join("\n") + "\n");
  return;
}
const { bookArg, loadBook, isBookEnglish } = require("./lib/books");
const [book] = bookArg(process.argv.slice(2));
const TRY = loadBook(book);

const SKIP = new Set(["en", "optionsEn", "questionEn", "deepDive", "why", "see", "index", "v", "kind", "mode", "labels", "vertical", "rings", "cont", "style", "align", "headAlign", "note", "intro"]);
const lines = [];
function walk(o, p) {
  if (typeof o === "string") { lines.push(p + "\t" + o); return; }
  if (typeof o === "number" || typeof o === "boolean") { lines.push(p + "\t" + o); return; }
  if (Array.isArray(o)) { o.forEach((v, i) => walk(v, p + "." + i)); return; }
  if (o && typeof o === "object") {
    for (const k of Object.keys(o).sort()) {
      // the book's own English is protected too (usage / notes / can-do / titles); other `en` is our translation
      if (k === "en" && isBookEnglish(TRY, p, o)) { walk(o[k], p + ".en"); continue; }
      if (SKIP.has(k)) continue;
      if (k === "lines" && Array.isArray(o.lines)) {
        // sample text: compare the concatenated Japanese (and speakers) so re-grouping lines into paragraphs is allowed
        lines.push(p + ".lines\t" + o.lines.map((l) => (l.sp ? "[" + l.sp + "]" : "") + l.ja).join(""));
        continue;
      }
      walk(o[k], p + "." + k);
    }
  }
}
TRY.chapters.forEach((c) => walk(c, "ch" + c.id));
walk(TRY.compare, "compare");
walk(TRY.front, "front");
process.stdout.write(lines.join("\n") + "\n");
