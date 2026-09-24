// Independent check of a transcription against OCR of the scanned book (macOS Vision, see tools/ocr/).
// usage: node tools/ocr-diff.js data/chapters/ch01.js 18-29 [threshold]
// Every Japanese string (and book-English field) in the chapter is fuzzy-matched against the OCR text
// of the given pages plus the answer/script supplement (PDF 233–252). Strings whose best match
// scores below the threshold are listed — each must be re-checked against the scan by eye.
const fs = require("fs"), path = require("path");
const OCR_DIR = process.env.OCR_DIR || path.join(__dirname, "ocr/txt");
const [file, range, thr = "0.9"] = process.argv.slice(2);
const threshold = +thr;
const [a, b] = range.split("-").map(Number);
const pages = [];
for (let p = a; p <= (b || a); p++) pages.push(p);
for (let p = 233; p <= 252; p++) if (!pages.includes(p)) pages.push(p);

let data;
global.window = global;
global.N2 = { register: (c) => (data = c), registerCompare: (g) => (data = g) };
global.N2F = (f) => (data = f);
require(path.resolve(file));

// ruby → base, drop markup, badges → their text, unify punctuation/width
const plain = (s) => String(s || "")
  .replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\*\*/g, "").replace(/~~/g, "")
  .replace(/\[(N|V|いA|なA|Pl|Po)(-[^\]]*)?\]/g, "").replace(/\[(\d+)\]/g, "");
const norm = (s) => plain(s).normalize("NFKC")
  .replace(/[\s　「」『』（）()、。・，．,.!！?？:：;；~〜～…‥\-－ー—―/／"“”'’＿_＋+\[\]【】〈〉《》★☆*＊→↔①-⑳]/g, "")
  .toLowerCase();

const corpus = pages.map((p) => {
  const f = path.join(OCR_DIR, String(p).padStart(3, "0") + ".txt");
  return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
}).join("\n");
// OCR puts furigana on their own short all-kana lines; drop those so kanji lines join cleanly
const corpusNorm = norm(corpus.split("\n").filter((l) => !/^[ぁ-ゖー\s]{1,12}$/.test(l.trim())).join(""));

// best similarity of needle against any window of the corpus (edit distance, banded search)
function bestScore(needle) {
  if (!needle) return 1;
  if (corpusNorm.includes(needle)) return 1;
  const n = needle.length;
  // seed candidate positions from 3-gram hits to keep this fast
  const cand = new Set();
  for (let i = 0; i + 3 <= n; i += 2) {
    const g = needle.slice(i, i + 3);
    let pos = corpusNorm.indexOf(g);
    let guard = 0;
    while (pos !== -1 && guard++ < 40) { cand.add(Math.max(0, pos - i)); pos = corpusNorm.indexOf(g, pos + 1); }
  }
  let best = 0;
  for (const st of cand) {
    const hay = corpusNorm.slice(Math.max(0, st - 4), st + n + 4);
    best = Math.max(best, 1 - editWindow(needle, hay) / n);
    if (best === 1) break;
  }
  return best;
}
// min edit distance of needle vs any substring of hay (semi-global alignment)
function editWindow(nd, hay) {
  let prev = new Array(hay.length + 1).fill(0);
  for (let i = 1; i <= nd.length; i++) {
    const cur = [i];
    for (let j = 1; j <= hay.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (nd[i - 1] === hay[j - 1] ? 0 : 1));
    prev = cur;
  }
  return Math.min(...prev);
}

// collect strings with their location; skip our own English translations and deepDives
const out = [];
const SKIP_KEYS = new Set(["deepDive", "why", "v", "kind", "type", "mode", "labels", "note", "see", "index", "no", "stars", "marks", "answer", "order", "star", "id", "intro", "pattern"]);
// English printed in the book: usage/formNotes/notes/can-do/titles. All other `en` strings are our translations.
const BOOK_EN = /(^|\.)(usage|formNotes\.\d+|notes\.\d+|canDo\.\d+|title|genre)\.en$/;
(function walk(o, p) {
  if (typeof o === "string") {
    if (/(^|\.)en(\.\d+)?$/.test(p) && !BOOK_EN.test(p)) return;
    const n = norm(o);
    if (n.length >= 4) out.push({ p, s: o, n });
    return;
  }
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) if (!SKIP_KEYS.has(k)) walk(v, p ? p + "." + k : k);
})(data, "");

let bad = 0;
out.forEach((x) => {
  const sc = bestScore(x.n);
  x.score = sc;
  if (sc < threshold) bad++;
});
out.filter((x) => x.score < threshold).sort((u, v) => u.score - v.score)
  .forEach((x) => console.log(`${x.score.toFixed(2)}  ${x.p}\n      ${plain(x.s).slice(0, 110)}`));
console.log(`\n${out.length} strings checked against OCR of pages ${range} + supplement; ${bad} below ${threshold}.`);
