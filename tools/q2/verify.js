// Cross-checks the Quartet data against the book's own lists (docs/Q2-TRANSCRIPTION.md, docs/Q1-TRANSCRIPTION.md);
// page and number ranges per book in tools/q2/lib.js (BOOKS):
// - the 文型・表現ノート一覧 (front.js "notelist"; Q2 PDF 8): every lesson's notes in number order, ★ and pattern as listed
// - the 漢字リスト: kanji numbers contiguous across kanjiNN.js (Q1 #1–327, Q2 #328–657), none missing or doubled
// - the 単語さくいん (OCR of Q1 PDF 276–284, Q2 PDF 275–284): every vocab-list word is in the book's word index
// usage: node tools/q2/verify.js [q1|q2]      (default q2)
const { load, allFiles, bookArg, ocrText } = require("./lib");
const [B] = bookArg(process.argv.slice(2));
const TRY = load(allFiles(B), B);
const errs = [], warn = [];
const plain = (s) => String(s || "").replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\[\[(.+?)\|[0-9a-z]*\]\]/g, "$1").replace(/\*\*|__|!!|~~|\{\{|\}\}/g, "");
const core = (s) => plain(s).normalize("NFKC").replace(/[〜～~\s（）()・／/…、。]/g, "");
const cellText = (c) => (c && typeof c === "object" ? (c.text && (c.text.ja || c.text.en || c.text)) || c.ja || "" : c || "");

// 1. notes vs the note list
const list = (TRY.front || []).find((s) => s.id === "notelist");
TRY.lessons.forEach((l) => {
  const notes = [];
  (function walk(bs) { (bs || []).forEach((b) => { if (b && b.t === "note") notes.push(b); else if (b) walk(b.blocks); }); })(l.sections.flatMap((s) => s.blocks));
  const tbl = list && list.blocks.find((b) => b.t === "table" && (b.id || "").endsWith(`-${l.id}`));
  if (!tbl) { warn.push(`L${l.id}: no note list table`); return; }
  const rows = tbl.rows.map((r) => r.map(cellText));
  if (rows.length !== notes.length) errs.push(`L${l.id}: ${notes.length} notes, the book's list has ${rows.length}`);
  rows.forEach((r, i) => {
    const n = notes[i]; if (!n) return;
    const star = r.some((c) => String(c).includes("★"));
    if (!!n.star !== star) errs.push(`L${l.id} #${n.no}: star ${!!n.star} but the list says ${star}`);
    const pat = r.find((c) => /[ぁ-んァ-ン一-龯]/.test(c) && !/^第/.test(c)) || "";
    if (pat && !core(n.pattern).includes(core(pat)) && !core(pat).includes(core(n.pattern))) warn.push(`L${l.id} #${n.no}: note 「${plain(n.pattern)}」 vs list 「${plain(pat)}」`);
  });
});
// 2. kanji numbers
const nos = TRY.kanji.flatMap((K) => K.kanji.map((k) => k.no)).sort((a, b) => a - b);
// while some lessons' kanji lists are not transcribed yet, the gaps are only counted
const kanjiDone = TRY.book.lessons.every((id) => TRY.kanji.some((K) => K.lesson === id));
const gaps = [];
for (let n = B.kanji[0]; n <= B.kanji[1]; n++) if (!nos.includes(n)) gaps.push(n);
if (kanjiDone) gaps.forEach((n) => errs.push(`kanji #${n} missing`));
else if (gaps.length) warn.push(`kanji: ${gaps.length} of #${B.kanji.join("–")} not transcribed yet (kanjiNN.js missing for some lessons)`);
nos.forEach((n, i) => { if (nos[i + 1] === n) errs.push(`kanji #${n} twice`); });
// 3. vocab words vs the 単語さくいん OCR
const idx = [];
for (let p = B.wordIndex[0]; p <= B.wordIndex[1]; p++) idx.push(ocrText(B, p));
const corpus = idx.join("\n").normalize("NFKC").replace(/\s/g, "");
let words = 0, missing = [];
TRY.vocab.forEach((v) => v.lists.forEach((L) => L.rows.forEach((r) => {
  const w = plain(r.w).normalize("NFKC").replace(/\[[^\]]*\]|（する）|\(する\)|\s/g, "").replace(/[〜～~]/g, "");
  if (!w) return; words++;
  if (!corpus.includes(w) && !corpus.includes(plain(r.yomi).replace(/\s/g, ""))) missing.push(`L${v.lesson} ${L.sec}: ${plain(r.w)}`);
})));
console.log(`notes: ${TRY.lessons.map((l) => `L${l.id}`).join(" ")} checked against the note list · kanji ${nos.length} (#${nos[0]}–${nos[nos.length - 1]}) · vocab ${words} words, ${words - missing.length} found in the 単語さくいん OCR`);
if (missing.length) console.log(`not found in the index OCR (check on PDF ${B.wordIndex.join("–")}; OCR is noisy):\n  ${missing.join("\n  ")}`);
if (warn.length) console.log("CHECK BY EYE:\n  " + warn.join("\n  "));
console.log(errs.length ? "ERRORS:\n  " + errs.join("\n  ") : "OK");
process.exit(errs.length ? 1 : 0);
