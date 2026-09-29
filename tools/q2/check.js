// Structural validator for Quartet data (q1, q2; data/Q2-SCHEMA.md): block types and required fields, answers in range,
// well-formed markup, our English (tr) present where required, no Chinese.
// usage: node tools/q2/check.js [q1|q2] [data/q2/l07.js …]      (default q2, every file of data/<book>/book.js)
const path = require("path");
const { load, allFiles, bookArg } = require("./lib");
const [B, args] = bookArg(process.argv.slice(2));
const files = args.map((f) => path.resolve(f));
const list = files.length ? files : allFiles(B);
const TRY = load(list, B);
const errs = [];
const E = (w, m) => errs.push(`${w}: ${m}`);

const BLOCKS = new Set(["head", "p", "hr", "list", "qs", "box", "table", "words", "figure", "chart", "reading", "dialogue", "roles", "flow", "bubbles", "note", "sub", "key", "examples", "conn", "strategy", "tf", "choice", "match", "script", "compose"]);
const norm = (t) => (t == null ? null : typeof t === "string" ? { ja: t } : t);
const hasJa = (t) => { const o = norm(t); return o && o.ja; };
// a Japanese sentence needs our translation unless the book prints one
const needTr = (t, w) => { const o = norm(t); if (o && o.ja && /[ぁ-んァ-ヶ一-龯]/.test(o.ja) && !o.tr && !o.en) E(w, `no tr: ${String(o.ja).slice(0, 40)}`); };

function strings(o, w) {
  (function walk(v, p) {
    if (typeof v === "string") {
      const s = v;
      if (s.includes("�")) E(w + p, "U+FFFD");
      // furigana first (as fmt() does), then the {{slot}} marks
      const noRuby = s.replace(/\{[^{}|]+\|[^{}|]+\}/g, "").replace(/\{\{|\}\}/g, "");
      if (/[{}]/.test(noRuby)) E(w + p, "bad ruby/braces: " + s.slice(0, 70));
      // a kana base is only allowed for a printed gloss in katakana (the French readings of L11 読み物2: {だめ|ノン})
      if (/\{[ぁ-んー]+\|[^}]*[ぁ-ん]/.test(s)) E(w + p, "ruby base is kana: " + s.slice(0, 50));
      for (const m of ["**", "__", "~~", "!!"]) if (s.split(m).length % 2 === 0) E(w + p, `unbalanced ${m}: ` + s.slice(0, 70));
      if ((s.match(/\[\[/g) || []).length !== (s.match(/\]\]/g) || []).length) E(w + p, "unbalanced [[ ]]: " + s.slice(0, 70));
      if (/[一-鿿]/.test(s) && /(^|\.)(en|tr)$/.test(p) && /[这们说时对么]/.test(s)) E(w + p, "Chinese?");
      return;
    }
    if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${p}.${i}`));
    else if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => { if (k === "zh") E(w + p, "zh field"); walk(x, `${p}.${k}`); });
  })(o, "");
}

function blockList(list, w) {
  (list || []).forEach((b, i) => block(b, `${w}/${i}:${b && b.t}`));
}
function block(b, w) {
  if (!b || !BLOCKS.has(b.t)) return E(w, `unknown block type ${b && b.t}`);
  const T = b.t;
  if (T === "head" && !b.text) E(w, "head without text");
  if (T === "p") needTr(b.text, w);
  if (T === "list") (b.items || []).forEach((it, k) => { const o = it && it.text !== undefined ? it : { text: it }; needTr(o.text, `${w}.${k}`); blockList(o.blocks, `${w}.${k}`); });
  if (T === "qs") (b.items || []).forEach((it, k) => { if (it.n == null) E(`${w}.${k}`, "qs item without n"); needTr(it.text, `${w}.${k}`); blockList(it.blocks, `${w}.${k}`); });
  if (T === "box") blockList(b.blocks, w);
  if (T === "words") (b.items || []).forEach((x, k) => { if (!x.ja || !x.en) E(`${w}.${k}`, "word needs ja and en"); });
  if (T === "reading") {
    const lines = b.lines || [];
    if (!lines.length) E(w, "reading without lines");
    lines.forEach((l, k) => {
      if (l && typeof l === "object") { if (l.fig) block(l.fig, `${w}.line${k}.fig`); else E(`${w}.line${k}`, "object line needs fig"); }
      else if (typeof l !== "string" && typeof l !== "number") E(`${w}.line${k}`, "line must be a string, a page number or { fig }");
    });
    const paras = lines.filter((l) => typeof l === "string" && (l[0] === "¶")).length;
    const firstBody = lines.findIndex((l) => typeof l === "string" && !/^[#@=]/.test(l));
    if (firstBody >= 0 && lines[firstBody][0] !== "¶") E(w, "first body line must start a paragraph (¶)");
    if (!b.tr || b.tr.length !== paras) E(w, `tr: ${b.tr ? b.tr.length : 0} entries for ${paras} ¶ paragraphs`);
    if (b.roles) b.roles.forEach((r, k) => { if (!(r.from > 0) || !(r.to >= r.from)) E(`${w}.role${k}`, "bad line range"); });
  }
  if (T === "dialogue" || T === "script") {
    (b.lines || []).forEach((l, k) => { if (!l.ja) E(`${w}.${k}`, "line without ja"); needTr(l, `${w}.${k}`); if (l.sp && !l.v) E(`${w}.${k}`, "speaker without v"); });
    if (T === "script" && !(b.key && b.key.length)) E(w, "script without key (■解答)");
  }
  if (T === "roles") (b.cards || []).forEach((c, k) => { if (!c.tag || !c.text) E(`${w}.${k}`, "card needs tag, text"); needTr(c.text, `${w}.${k}`); });
  if (T === "flow") (b.steps || []).forEach((s, k) => { if (!s.text) E(`${w}.${k}`, "step without text"); needTr(s.text, `${w}.${k}`); });
  if (T === "bubbles") (b.items || []).forEach((it, k) => {
    const n = (String(norm(it.text).ja).match(/＿＿/g) || []).length;
    if (!Array.isArray(it.answer) || it.answer.length !== n) E(`${w}.${k}`, `${n} blanks but ${(it.answer || []).length} answers`);
  });
  if (T === "note") {
    ["no", "pattern"].forEach((k) => { if (b[k] == null) E(w, `note without ${k}`); });
    blockList(b.blocks, `${w}#${b.no}`);
    if (!(b.blocks || []).some((x) => x.t === "examples")) E(w, `note ${b.no}: no examples`);
  }
  if (T === "key") (b.items || []).forEach((it, k) => (it.lines || [it]).forEach((l, j) => { if (!l.ja) E(`${w}.${k}.${j}`, "key without ja"); if (!l.en && !l.tr) E(`${w}.${k}.${j}`, "key without en (book) / tr"); }));
  if (T === "examples") (b.items || []).forEach((it, k) => (it.lines || [it]).forEach((l, j) => { if (!l.ja) E(`${w}.${k}.${j}`, "example without ja"); needTr(l, `${w}.${k}.${j}`); }));
  if (T === "conn") blockList(b.blocks, w);
  if (T === "strategy") { if (b.no == null || !b.title) E(w, "strategy needs no, title"); blockList(b.blocks, `${w}#${b.no}`); }
  if (T === "tf") (b.items || []).forEach((it, k) => { if (!["○", "×"].includes(it.answer)) E(`${w}.${k}`, "tf answer must be ○ or ×"); needTr(it.text, `${w}.${k}`); });
  if (T === "choice") (b.items || []).forEach((it, k) => { if (!Array.isArray(it.options) || !(it.answer >= 0 && it.answer < it.options.length)) E(`${w}.${k}`, "bad answer index"); });
  if (T === "match") { if (!b.left || !b.right || !b.answer || b.answer.length !== b.left.length) E(w, "match needs left, right, answer[left.length]"); }
  if (T === "table") (b.rows || []).forEach((r, k) => { if (!Array.isArray(r)) E(`${w}.row${k}`, "row must be an array"); });
  if (T === "chart" && !(b.rows && b.rows.length)) E(w, "chart without rows");
}

TRY.lessons.forEach((l) => {
  const w = `L${l.id}`;
  if (!Array.isArray(l.pages)) E(w, "pages");
  (l.opener || []).forEach((g, k) => (g.canDo || []).forEach((c, j) => needTr(c, `${w} opener${k}.canDo${j}`)));
  l.sections.forEach((s) => { if (!["read", "write", "speak", "listen"].includes(s.skill)) E(w, `bad skill ${s.skill}`); blockList(s.blocks, `${w} ${s.skill}`); });
  const notes = []; (function walk(bs) { (bs || []).forEach((b) => { if (b && b.t === "note") notes.push(b.no); else if (b) walk(b.blocks); }); })(l.sections.flatMap((s) => s.blocks));
  notes.forEach((n, i) => { if (n !== i + 1) E(w, `notes out of sequence: ${notes.join(",")}`); });
  strings(l, w);
  console.log(`${w}: sections ${l.sections.map((s) => s.skill).join(",")} · notes ${notes.length}`);
});
TRY.vocab.forEach((v) => {
  const w = `vocab L${v.lesson}`;
  v.lists.forEach((L, li) => {
    L.rows.forEach((r, k) => { if (!r.w || !r.yomi || !r.en) E(`${w} ${L.sec} row${k}`, "row needs w, yomi, en"); if (r.k && !["◆", "◇"].includes(r.k)) E(`${w} row${k}`, "k must be ◆ or ◇"); });
    const nums = L.rows.filter((r) => r.n).map((r) => r.n);
    nums.forEach((n, i) => { if (i && n !== nums[i - 1] + 1) E(`${w} ${L.sec}`, `row numbers jump ${nums[i - 1]}→${n}`); });
    const T = L.targets;
    if (T) { if (T.items.length !== nums.length) E(`${w} ${L.sec}`, `${nums.length} numbered rows but ${T.items.length} target sentences`); T.items.forEach((it, k) => { if (!it.w || !it.ex) E(`${w} target${k}`, "needs w, ex"); if (!it.tr) E(`${w} target${k}`, "no tr"); }); }
  });
  strings(v, w);
  console.log(`${w}: ${v.lists.map((L) => `${L.sec} ${L.rows.length} rows / ${(L.targets && L.targets.items.length) || 0} targets`).join(" · ")}`);
});
TRY.kanji.forEach((K) => {
  const w = `kanji L${K.lesson}`;
  K.kanji.forEach((k, i) => {
    if (!k.k || [...k.k].length !== 1) E(`${w} #${k.no}`, "k must be one kanji");
    // the 漢字チャレンジ kanji (598–657) follow the lesson's reading kanji with a gap in the numbering
    const newGroup = /漢字チャレンジ/.test(k.sec || "") && !/漢字チャレンジ/.test(K.kanji[i - 1] ? K.kanji[i - 1].sec || "" : "");
    if (i && !newGroup && k.no !== K.kanji[i - 1].no + 1) E(`${w} #${k.no}`, `numbers jump from ${K.kanji[i - 1].no}`);
    if (!k.meaning || !(k.on || k.kun) || !(k.strokes > 0) || !(k.words && k.words.length)) E(`${w} #${k.no}`, "needs meaning, on/kun, strokes, words");
    (k.words || []).forEach((x, j) => { if (!x.w || !x.yomi || !x.en) E(`${w} #${k.no} word${j}`, "needs w, yomi, en"); });
  });
  strings(K, w);
  console.log(`${w}: #${K.kanji[0] && K.kanji[0].no}–${K.kanji.length && K.kanji[K.kanji.length - 1].no} (${K.kanji.length})`);
});
TRY.units.forEach((u) => { blockList(u.blocks, `unit ${u.id}`); strings(u, `unit ${u.id}`); console.log(`unit ${u.id}: ${u.blocks.length} blocks`); });
(TRY.front || []).forEach((s) => { blockList(s.blocks, `front ${s.id}`); strings(s, `front ${s.id}`); });
console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "OK");
process.exit(errs.length ? 1 : 0);
