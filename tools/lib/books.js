// Per-book tool configuration and a Node loader for the data files (the same registry the page uses: assets/js/boot.js).
// A book id is "n2" or "n1"; data lives in data/<id>/, book-specific tool files in tools/<id>/ (index manifest, text
// baseline, OCR of every page).
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "../..");

const BOOKS = {
  n2: {
    id: "n2",
    pdf: "n2.pdf",
    // grammar-point range of each chapter, and the first point of each later part ((2), (3))
    TOC: { 1: [1, 8], 2: [9, 21], 3: [22, 29], 4: [30, 36], 5: [37, 47], 6: [48, 59], 7: [60, 72], 8: [73, 77], 9: [78, 91], 10: [92, 99], 11: [100, 106], 12: [107, 118], 13: [119, 131], 14: [132, 139] },
    PARTS: { 2: [16], 5: [43], 6: [53], 7: [66], 9: [85], 10: [96], 12: [113], 13: [125] },
    supplement: [233, 252], // PDF pages of the 別冊 (answers, scripts): supplement page N = PDF page 232 + N
  },
  n1: {
    id: "n1",
    pdf: "n1.pdf",
    TOC: { 1: [1, 6], 2: [7, 15], 3: [16, 34], 4: [35, 45], 5: [46, 64], 6: [65, 71], 7: [72, 87], 8: [88, 106], 9: [107, 110], 10: [111, 123] },
    PARTS: { 3: [26], 4: [41], 5: [54, 61], 7: [83], 8: [96] },
    supplement: [193, 207], // supplement page N = PDF page 192 + N
  },
};
for (const b of Object.values(BOOKS)) b.ocr = `tools/${b.id}/ocr`;

// "n1" | "n2" from an explicit argument, or from a path like data/n1/ch01.js
function bookOf(x) {
  if (BOOKS[x]) return BOOKS[x];
  const m = String(x || "").match(/(?:^|[\\/])data[\\/](n\d)[\\/]/);
  if (m && BOOKS[m[1]]) return BOOKS[m[1]];
  throw new Error(`unknown book for ${x} (expected n1 | n2 or a path under data/n1|n2/)`);
}
// strip a leading book id from argv: node tool.js [n1|n2] rest… (default n2)
function bookArg(argv) {
  const a = argv.slice();
  return [BOOKS[a[0]] ? BOOKS[a.shift()] : BOOKS.n2, a];
}

const dataDir = (b) => path.join(root, "data", b.id);
const chapterFiles = (b) => fs.readdirSync(dataDir(b)).filter((f) => /^ch\d\d\.js$/.test(f)).sort().map((f) => path.join(dataDir(b), f));
// run data files through a fresh registry → { book, chapters, compare, front }
function load(files) {
  delete globalThis.TRY;
  const boot = path.join(root, "assets/js/boot.js");
  for (const f of [boot, ...files]) { delete require.cache[require.resolve(f)]; require(f); }
  return globalThis.TRY;
}
const loadBook = (b) => load(["book.js", "compare.js", "front.js"].map((f) => path.join(dataDir(b), f)).concat(chapterFiles(b)));
// one data file (a chapter, compare.js or front.js) with its book's meta
const loadFile = (file) => load([path.join(dataDir(bookOf(path.resolve(file))), "book.js"), path.resolve(file)]);

// English the book itself prints (N2): usage, ＊ notes, 📎 notes, can-do and titles — unless marked `gen: true`
// (English we wrote where the book prints none). Every other `en` (and all English in N1) is generated.
const BOOK_EN_PATH = /(^|\.)(usage|formNotes\.\d+|notes\.\d+|canDo\.\d+|title|genre)$/;
const isBookEnglish = (TRY, parentPath, parent) => TRY.book.bookLang === "en" && BOOK_EN_PATH.test(parentPath) && !parent.gen;

module.exports = { BOOKS, bookOf, bookArg, root, dataDir, chapterFiles, loadBook, loadFile, isBookEnglish };
