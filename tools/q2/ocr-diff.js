// Quartet transcription vs OCR (tools/<q1|q2>/ocr/NNN.txt, PDF pages; the book is the data file's, data/q1 or data/q2). Every book string (Japanese, and the book's
// English `en`) is fuzzy-matched against the OCR of the given PDF pages; strings scoring below the threshold are listed
// and must be checked on the scan by eye. OCR is empty for 縦書き pages — those are checked on the images only.
// usage: node tools/q2/ocr-diff.js data/q2/vocab07.js 289-293 [threshold 0.85]
const path = require("path");
const { load, walkBook, bookArg, ocrText } = require("./lib");
const { pageList, ocrCorpus, bestScore } = require("../lib/fuzzy");
const [B, [file, range, thr = "0.85"]] = bookArg(process.argv.slice(2));
const pages = pageList(range);
const TRY = load([path.resolve(file)], B);
const data = [...TRY.lessons, ...TRY.vocab, ...TRY.kanji, ...TRY.units, ...(TRY.front || [])];
const plain = (s) => String(s || "").replace(/\{\{|\}\}/g, "").replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\[\[(.+?)\|[0-9a-z]*\]\]/g, "$1")
  .replace(/\*\*|~~|__|!!|%%|''/g, "").replace(/\[#\d+\]|\[普\]/g, "").replace(/\[#([^\]]+)\]/g, "$1").replace(/^[¶#@=]/, "");
const norm = (s) => plain(s).normalize("NFKC").replace(/[\s　「」『』（）()［］\[\]、。・，．,.!！?？:：;；~〜～…‥\-－ー—―/／"“”'’＿_＋+【】〈〉《》★☆*＊→↔◆◇○×△❶-❿①-⑳▶▸•]/g, "").toLowerCase();
const corpus = ocrCorpus(pages.map((p) => ocrText(B, p)), norm);
const out = [];
data.forEach((d) => walkBook(d, (s, p) => { const n = norm(s); if (n.length < 2) return; const sc = bestScore(n, corpus); if (sc < +thr) out.push([sc, p, s]); }));
out.forEach(([sc, p, s]) => console.log(`${sc.toFixed(2)}  ${p}\n      ${s.slice(0, 120)}`));
console.log(`${out.length} strings below ${thr} (OCR pages ${range})`);
