// Guard for layout work: proves that no book text changed.
// Dumps every Japanese string (sample text, points, exercises, reviews, compare, front matter) in order,
// ignoring our own English, deepDive, why, and any layout-only fields.
//   node tools/text-snapshot.js [n1|n2] > /tmp/before.txt      (before editing; default n2)
//   node tools/text-snapshot.js [n1|n2] | diff tools/<book>/text-baseline.txt -   (after — must print nothing)
// Paragraph re-grouping is allowed: sample lines are compared as one concatenated string per sample.
const fs = require("fs"), path = require("path");
const { bookArg, chapterFile, dataDir } = require("./books");
const [book] = bookArg(process.argv.slice(2));
const out = [];
global.window = global;
const chapters = [];
global.N2 = { register: (c) => chapters.push(c), registerCompare: (g) => out.push(["compare", g]), registerFront: (f) => out.push(["front", f]) };
global.N2.registerBook = () => {};
for (let i = 1; i <= book.chapters; i++) if (fs.existsSync(chapterFile(book, i))) require(chapterFile(book, i));
for (const f of ["compare.js", "front.js"]) if (fs.existsSync(dataDir(book, f))) require(dataDir(book, f));

const SKIP = new Set(["en", "deepDive", "why", "see", "index", "v", "kind", "mode", "labels", "vertical", "rings", "cont", "style", "note", "intro"]);
const lines = [];
function walk(o, p) {
  if (typeof o === "string") { lines.push(p + "\t" + o); return; }
  if (typeof o === "number" || typeof o === "boolean") { lines.push(p + "\t" + o); return; }
  if (Array.isArray(o)) { o.forEach((v, i) => walk(v, p + "." + i)); return; }
  if (o && typeof o === "object") {
    for (const k of Object.keys(o).sort()) {
      // the book's own English is protected too (usage / notes / can-do / titles); other `en` is our translation
      if (k === "en" && book.bookLang === "en" && /(usage|formNotes\.\d+|notes\.\d+|canDo\.\d+|title|genre)$/.test(p)) { walk(o[k], p + ".en"); continue; }
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
chapters.forEach((c) => walk(c, "ch" + c.id));
out.forEach(([name, v]) => walk(v, name));
process.stdout.write(lines.join("\n") + "\n");
