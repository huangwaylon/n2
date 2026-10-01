// Quartet tool helpers (both books: q1 = Quartet I, q2 = Quartet II; the tools stay in tools/q2/): per-book config,
// load data/<book> files through the page's registry, walk every string with its path, and tell book text (Japanese,
// the book's English `en`) from ours (`tr`, figure descriptions). See data/Q2-SCHEMA.md.
const fs = require("fs"), path = require("path");
const { root, load: loadFiles } = require("../lib/books");

// PDF page ranges are the scan's (book page = PDF − offset, 別冊 page = PDF − suppOffset)
const BOOKS = {
  q1: {
    id: "q1", name: "Quartet I", offset: 26, suppOffset: 288,
    scripts: "pp.242–248", front: "pp.[03]–[20]",
    units: "初級文法チェック ①–⑦ (pp.206–229), 漢字チャレンジ ①–⑫ (pp.230–241)",
    kanji: [1, 327], // 別冊 漢字リスト (supp pp.027–063)
    wordIndex: [276, 284], // 単語さくいん pp.250–258
  },
  q2: {
    id: "q2", name: "Quartet II", offset: 27, suppOffset: 287,
    scripts: "pp.238–245", front: "pp.[03]–[20]",
    units: "上級へのチャレンジ ①–⑧ (pp.200–225), 漢字チャレンジ ⑬–㉔ (pp.226–237)",
    kanji: [328, 657],
    wordIndex: [275, 284],
  },
};
for (const b of Object.values(BOOKS)) {
  b.dir = path.join(root, "data", b.id);
  b.ocr = path.join(root, "tools", b.id, "ocr");
  b.parts = process.env.QPARTS || (b.id === "q2" && process.env.Q2PARTS) || `/tmp/${b.id}parts`; // transcription fragments
}
// the book of a data path (data/q1/…), else null
const bookOfPath = (f) => { const m = String(f || "").match(/(?:^|[\\/])data[\\/](q\d)[\\/]/); return m && BOOKS[m[1]] ? BOOKS[m[1]] : null; };
// strip a leading book id from argv: node tool.js [q1|q2] rest… — else the book of the first data path, else q2
function bookArg(argv) {
  const a = argv.slice();
  if (BOOKS[a[0]]) return [BOOKS[a.shift()], a];
  return [bookOfPath(a[0] && path.resolve(a[0])) || BOOKS.q2, a];
}
const ocrText = (b, p) => { const f = path.join(b.ocr, String(p).padStart(3, "0") + ".txt"); return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : ""; };

// book: a BOOKS entry; default the book of the first file, else q2
function load(files, book) {
  const b = book || bookOfPath(files[0]) || BOOKS.q2;
  return loadFiles([path.join(b.dir, "book.js"), ...files]);
}
// every data file book.js lists (files and lazy) that exists
const allFiles = (b = BOOKS.q2) => {
  const B = load([], b).book;
  return B.files.concat(B.lazy || []).map((f) => path.join(b.dir, f)).filter((f) => fs.existsSync(f));
};
// keys whose strings are ours (generated English) or not text at all
const OURS = new Set(["tr", "titleTr", "headTr", "desc", "deepDive"]);
const META = new Set(["t", "style", "id", "icon", "audio", "v", "mark", "side", "kind", "skill", "sec", "k", "m", "hl", "page", "pages", "no", "n", "ln", "lesson", "star", "strokes", "numbers", "vertical", "from", "to", "answer", "cols", "colspan", "rowspan", "tag", "unit", "start", "min", "max", "nopage", "align", "headAlign", "stripe", "speakers", "indent", "list"]);
// visit(str, path, key, parent) for every string that is book text
function walkBook(o, visit, p = "", key = "", parent = null) {
  if (typeof o === "string") { if (!OURS.has(key)) visit(o, p, key, parent); return; }
  if (Array.isArray(o)) { o.forEach((v, i) => walkBook(v, visit, `${p}.${i}`, key, parent)); return; }
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) {
    if (OURS.has(k) || (META.has(k) && k !== "answer")) continue;
    walkBook(v, visit, p ? `${p}.${k}` : k, k, o);
  }
}
module.exports = { BOOKS, root, bookArg, ocrText, load, allFiles, walkBook };
