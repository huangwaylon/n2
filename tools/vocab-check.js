// Checks the vocabulary lists (data/<book>/vocab/chNN.js, data/SCHEMA.md "Vocabulary"): fields, ruby markup and kana
// readings, the quiz distractors, the book sentence (verbatim from the chapter it names), one entry per word, and
// warns when a word already appears in an earlier chapter's text (a warning is for a person to judge: 見合い vs 見合わせる).
//   node tools/vocab-check.js [n2|n1] [chNN …]
const fs = require("fs"), path = require("path");
const { bookArg, dataDir, loadBook, isBookEnglish } = require("./lib/books.js");
const [B, only] = bookArg(process.argv.slice(2));
const T = loadBook(B);
const dir = path.join(dataDir(B), "vocab");
const files = fs.readdirSync(dir).filter((f) => /^ch\d\d\.js$/.test(f) && (!only.length || only.some((o) => f.startsWith(o)))).sort();
for (const f of files) require(path.join(dir, f));

const RUBY = /\{([^{}|]+)\|([^{}]+)\}/g;
const bare = (s) => String(s || "").replace(RUBY, "$1").replace(/\*\*/g, "");
const kanaOf = (s) => String(s || "").replace(RUBY, "$2");
// the same sound spelled differently: づ/ず, ぢ/じ, and long お written おう or おお (とうり / とおり)
const same = (k) => k.replace(/づ/g, "ず").replace(/ぢ/g, "じ").replace(/([おこごそぞとどのほぼぽもよょろを])う/g, "$1お");
const KANA = /^[ぁ-ゖァ-ヺー～〜・]+$/u, KANJI = /[㐀-鿿々〆]/u;
// every Japanese string in a chapter (sample, points, exercises, review), and per grammar point
const strings = (o, out = []) => { if (typeof o === "string") out.push(o); else if (o && typeof o === "object") Object.entries(o).forEach(([k, v]) => { if (!/^(en|why|deepDive|optionsEn|questionEn|note)$/.test(k)) strings(v, out); }); return out; };
const chText = new Map(T.chapters.filter(Boolean).map((c) => [c.id, strings(c).map(bare)]));
const chRaw = new Map(T.chapters.filter(Boolean).map((c) => [c.id, strings(c)]));
const gpText = new Map();
T.chapters.filter(Boolean).forEach((c) => c.parts.forEach((p) => p.points.forEach((g) => gpText.set(g.no, { ch: c.id, s: strings(g).map(bare) }))));

// lines whose English the book prints (N2 titles, can-do, usage, notes): a book sentence quoted from one keeps it
// and our translations of the other lines: a quoted line keeps the chapter's English (copies drifted as it was revised)
const bookEn = new Map(), lineEn = new Map();
T.chapters.filter(Boolean).forEach((c) => (function walk(o, p) {
  if (!o || typeof o !== "object") return;
  if (typeof o.ja === "string" && o.en) (isBookEnglish(T, p, o) ? bookEn : lineEn).set(bare(o.ja), o.en);
  Object.entries(o).forEach(([k, v]) => walk(v, p ? `${p}.${k}` : k));
})(c, ""));

// earlier occurrences a person judged to be another word, where the text gives no reading to tell them apart
const JUDGED = {
  n2: { "手数（てすう）": "ch1 has only 手数料 (fee), a word of its own" },
  n1: { "今日（こんにち）": "ch1 今日 is きょう (今日は夏休み最初の日曜, 今日にもまして)",
    "人気（ひとけ）": "ch1 人気 is にんき (人気シリーズ)" },
};

let errs = 0, warns = 0, n = 0;
const seen = new Map();
for (const v of T.vocab) {
  const E = (w, m) => { errs++; console.log(`ERR ch${v.ch} ${w}: ${m}`); };
  const W = (w, m) => { warns++; console.log(`warn ch${v.ch} ${w}: ${m}`); };
  if (!chText.has(v.ch)) E("-", "no such chapter");
  (v.words || []).forEach((x) => {
    n++;
    if (JSON.stringify(x).includes("\uFFFD")) E(plain(x.w), "broken character (U+FFFD)");
    const w = bare(x.w), r = kanaOf(x.w), id = `${w}（${r}）`;
    ["w", "lv", "pos", "en"].forEach((k) => { if (!x[k]) E(id, `missing ${k}`); });
    if (!/^N[12]$/.test(x.lv)) E(id, `lv ${x.lv}`);
    if (/\{[^}]*$|^[^{]*\}/.test(x.w) || !KANA.test(r)) E(id, `reading not kana: ${r}`);
    if (KANJI.test(r)) E(id, "kanji left in the reading");
    if (seen.has(id)) E(id, `also listed in ch${seen.get(id)}`); else seen.set(id, v.ch);
    // the same word spelled with fewer kanji (静まり返る / 静まりかえる): same reading, one's kanji a subset of the other's
    const kj = (t) => [...t].filter((c) => KANJI.test(c));
    for (const [o, c] of seen) if (o !== id && o.endsWith(`（${r}）`)) {
      const a = kj(w), b = kj(o.slice(0, o.indexOf("（")));
      if ((a.every((k) => b.includes(k)) || b.every((k) => a.includes(k))) && a.length && b.length) E(id, `same word as ${o} in ch${c}?`);
    }
    if (KANJI.test(w)) {
      if (!x.rx || x.rx.length !== 3 || new Set(x.rx).size !== 3) E(id, "rx needs 3 different wrong readings");
      // a wrong reading that is only another spelling of the same sound (きづく / きずく) can't be told apart by ear
      else x.rx.forEach((y) => { if (y === r || same(y) === same(r) || !KANA.test(y)) E(id, `bad rx ${y}`); });
    }
    const ex = x.ex || [];
    if (!ex.length) E(id, "no example sentence");
    ex.forEach((e, i) => {
      if (!e.ja || !e.en) E(id, `ex${i} needs ja and en`);
      if (!/\*\*.+?\*\*/.test(e.ja || "")) E(id, `ex${i}: word not in **bold**`);
      if ((e.ja || "").split("{").length !== (e.ja || "").split("}").length) E(id, `ex${i}: unbalanced ruby`);
    });
    const e0 = ex[0] || {}, ans = ((e0.ja || "").match(/\*\*(.+?)\*\*/) || [])[1];
    if (!e0.alt || e0.alt.length !== 3) E(id, "ex[0].alt needs 3 distractors");
    else e0.alt.forEach((a) => { if (bare(a) === bare(ans)) E(id, `alt equals the answer: ${a}`); });
    if (!x.book) E(id, "no book sentence");
    else {
      const [p0, num] = String(x.book.at || "").split("/"), plainJa = bare(x.book.ja);
      if (!/\*\*.+?\*\*/.test(x.book.ja || "")) E(id, "book: word not in **bold**");
      if (!x.book.en) E(id, "book: no English");
      const pool = p0 === "gp" ? (gpText.get(+num) || {}).s : chText.get(+num);
      if (p0 === "gp" && (gpText.get(+num) || {}).ch !== v.ch) E(id, `book.at ${x.book.at} is not in chapter ${v.ch}`);
      if (p0 === "ch" && +num !== v.ch) E(id, `book.at ${x.book.at} is not chapter ${v.ch}`);
      if (!pool) E(id, `book.at ${x.book.at}: no such place`);
      else if (!pool.some((s) => s.includes(plainJa))) E(id, `book sentence not found verbatim at ${x.book.at}: ${plainJa.slice(0, 40)}`);
      const be = bookEn.get(plainJa);
      if (be != null && (x.book.src !== "book" || x.book.en !== be)) E(id, `book sentence is a line the book translates: src: "book", en: ${JSON.stringify(be)}`);
      const le = lineEn.get(plainJa);
      if (le != null && x.book.en !== le.replace(/\*\*/g, "")) E(id, `book.en differs from the chapter's translation: ${JSON.stringify(le)}`);
      if (be == null && x.book.src === "book") E(id, "src: \"book\" but the book prints no English for this line");
    }
    // the kanji part of the headword in an earlier chapter's text → it belongs to that chapter's list; an occurrence
    // whose furigana gives another reading is a different word (人気 にんき / ひとけ); so is one where the kana after the
    // kanji differ from the headword's first okurigana, unless that kana inflects (見合い / 見合わせる, 立ち上げる / 立ち上がる,
    // 無理やり / 無理は; but 働く / 働いて)
    const stem = w.replace(/[ぁ-ゖ]+$/u, ""), oku = w.slice(stem.length), hr = [...x.w.matchAll(RUBY)].map((m) => m[2]).join("");
    const inflects = oku.length === 1 && /godan|ichidan|ru-verb|irregular|い adjective|i-adjective|(^|\()verb/.test(x.pos || "");
    const key = oku && !inflects ? stem + oku[0] : stem;
    const other = (t) => t.replace(RUBY, (m, b, rd) => (b.includes(stem) && !rd.includes(hr) && !hr.includes(rd) ? "" : m));
    const judged = (JUDGED[B.id] || {})[id];
    if (KANJI.test(stem) && stem.length >= 2 && !judged) for (const [c, s] of chRaw) if (c < v.ch && s.some((t) => bare(other(t)).includes(key))) { W(id, `appears in ch${c}`); break; }
  });
}
console.log(`${B.id}: ${T.vocab.length} files, ${n} words, ${errs} errors, ${warns} warnings`);
process.exitCode = errs ? 1 : 0;
