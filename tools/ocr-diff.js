// Independent check of a transcription against OCR of the scanned book (macOS Vision, see tools/ocr/).
// usage: node tools/ocr-diff.js data/<book>/ch01.js 18-29[,31,40-42] [threshold]   (also data/<book>/compare.js, front.js)
// Every Japanese string (and the book's own English translations in N2) is fuzzy-matched
// against the OCR text of the given pages plus the answer/script supplement. Strings whose best match
// scores below the threshold are listed — each must be re-checked against the scan by eye.
const fs = require("fs"), path = require("path");
const { bookOf, root, loadFile, isBookEnglish } = require("./lib/books");
const { pageList, ocrCorpus, bestScore } = require("./lib/fuzzy");
const [file, range, thr = "0.9"] = process.argv.slice(2);
const book = bookOf(path.resolve(file));
const threshold = +thr;
// range: "18-29" or several comma-separated ranges/pages, e.g. "55-57,202"
const pages = pageList(range);
for (let p = book.supplement[0]; p <= book.supplement[1]; p++) if (!pages.includes(p)) pages.push(p);

const TRY = loadFile(file);
const data = TRY.chapters[0] || (/compare\.js$/.test(file) ? TRY.compare : TRY.front);

// ruby → base, drop markup, badges → their text, unify punctuation/width
const plain = (s) => String(s || "")
  .replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\*\*/g, "").replace(/~~/g, "").replace(/__/g, "")
  .replace(/\[(N|V|いA|なA|Pl|Po)(-[^\]]*)?\]/g, "").replace(/\[(\d+)\]/g, "");
const norm = (s) => plain(s).normalize("NFKC")
  .replace(/[\s　「」『』（）()、。・，．,.!！?？:：;；~〜～…‥\-－ー—―/／"“”'’＿_＋+\[\]【】〈〉《》★☆*＊→↔①-⑳]/g, "")
  .toLowerCase();

const ocr = (dir) => pages.map((p) => { const f = path.join(root, dir, String(p).padStart(3, "0") + ".txt"); return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : ""; });
const CORPUS = { ja: ocrCorpus(ocr(process.env.OCR_DIR || book.ocr), norm) };

// collect strings with their location; skip our own English translations and deepDives
const out = [];
const SKIP_KEYS = new Set(["deepDive", "why", "v", "kind", "type", "mode", "labels", "note", "see", "index", "no", "stars", "marks", "answer", "order", "star", "id", "intro", "pattern"]);
// English is checked only where the book prints it (N2 usage, notes, can-do, titles); the rest is ours
(function walk(o, p, parent) {
  if (typeof o === "string") {
    if (/(^|\.)en(\.\d+)?$/.test(p) && !(/(^|\.)en$/.test(p) && isBookEnglish(TRY, p.replace(/\.?en$/, ""), parent))) return;
    if (/(^|\.)questionEn$/.test(p)) return;
    const n = norm(o);
    if (n.length >= 4) out.push({ p, s: o, n, c: "ja" });
    return;
  }
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!SKIP_KEYS.has(k)) walk(v, p ? p + "." + k : k, o);
})(data, "", null);

let bad = 0;
out.forEach((x) => {
  const sc = bestScore(x.n, CORPUS[x.c]);
  x.score = sc;
  if (sc < threshold) bad++;
});
out.filter((x) => x.score < threshold).sort((u, v) => u.score - v.score)
  .forEach((x) => console.log(`${x.score.toFixed(2)}  ${x.p}\n      ${plain(x.s).slice(0, 110)}`));
console.log(`\n${out.length} strings checked against OCR of pages ${range} + supplement; ${bad} below ${threshold}.`);
