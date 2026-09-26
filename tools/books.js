// Per-book configuration shared by the tools. A book id is "n2" or "n1"; data lives in data/<id>/,
// book-specific tool files (index manifest, text baseline, OCR) in tools/<id>/.
const path = require("path");
const root = path.resolve(__dirname, "..");

const BOOKS = {
  n2: {
    id: "n2",
    pdf: "n2.pdf",
    chapters: 14,
    points: 139,
    // grammar-point range of each chapter, and the first point of each later part ((2), (3))
    TOC: { 1: [1, 8], 2: [9, 21], 3: [22, 29], 4: [30, 36], 5: [37, 47], 6: [48, 59], 7: [60, 72], 8: [73, 77], 9: [78, 91], 10: [92, 99], 11: [100, 106], 12: [107, 118], 13: [119, 131], 14: [132, 139] },
    PARTS: { 2: [16], 5: [43], 6: [53], 7: [66], 9: [85], 10: [96], 12: [113], 13: [125] },
    supplement: [233, 252], // PDF pages of the 別冊 (answers, scripts): supplement page N = PDF page 232 + N
    ocr: { ja: "tools/n2/ocr" },
    bookLang: "en", // language of the translations printed in the book (usage, notes, can-do …)
  },
  n1: {
    id: "n1",
    pdf: "n1.pdf",
    chapters: 10,
    points: 123,
    TOC: { 1: [1, 6], 2: [7, 15], 3: [16, 34], 4: [35, 45], 5: [46, 64], 6: [65, 71], 7: [72, 87], 8: [88, 106], 9: [107, 110], 10: [111, 123] },
    PARTS: { 3: [26], 4: [41], 5: [54, 61], 7: [83], 8: [96] },
    supplement: [193, 207], // supplement page N = PDF page 192 + N
    ocr: { ja: "tools/n1/ocr/ja" },
    bookLang: "ja", // the Chinese edition; its Chinese is not reproduced, every `en` is ours
  },
};

// "n1" | "n2" from an explicit argument, or from a path like data/n1/chapters/ch01.js
function bookOf(x) {
  if (BOOKS[x]) return BOOKS[x];
  const m = String(x || "").match(/(?:^|[\\/])data[\\/](n\d)[\\/]/);
  if (m && BOOKS[m[1]]) return BOOKS[m[1]];
  throw new Error(`unknown book for ${x} (expected n1 | n2 or a path under data/n1|n2/)`);
}
// strip a leading book id from argv: node tool.js [n1|n2] rest… (default n2)
function bookArg(argv) {
  const a = argv.slice();
  const b = BOOKS[a[0]] ? BOOKS[a.shift()] : BOOKS.n2;
  return [b, a];
}
const dataDir = (b, ...p) => path.join(root, "data", b.id, ...p);
const chapterFile = (b, n) => dataDir(b, "chapters", `ch${String(n).padStart(2, "0")}.js`);

module.exports = { BOOKS, bookOf, bookArg, dataDir, chapterFile, root };
