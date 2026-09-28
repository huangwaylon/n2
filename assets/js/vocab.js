// 単語 Vocabulary (TRY books): our list of the N2/N1-level words each chapter uses (data/<book>/vocab/chNN.js, loaded by
// main.js on the first vocab route; data/SCHEMA.md "Vocabulary"), the list page and the drill (flashcards and 4択).
// Routes: vocab (every word, one row each) · vocab/N (chapter N as study cards) · vocab/N/i (… scrolled to its word i) ·
// vocab/drill. All English here is generated.
import { ACT, TRY, $, $$, esc, progress, saveProgress, shuffle } from "./core.js";
import { biInner, enScopeBtn, fmt, fmtEm, gpLink, plain, speakBtn } from "./markup.js";
import { RUBY_RE } from "./ruby.js";
import { renderExercise } from "./exercises.js";
import { flashcards, redraw } from "./flash.js";

const reading = (w) => String(w).replace(RUBY_RE, "$2");
const words = () => TRY.vocab.flatMap((v) => v.words.map((x, i) => Object.assign({ ch: v.ch, i, key: `w${v.ch}-${plain(x.w)}` }, x)));
const short = (en) => String(en).split(";")[0];
// what the level and search filters look at (cards and rows alike)
const filterAttrs = (x) => `data-lv="${x.lv}" data-k="${esc(x.key)}" data-s="${esc([plain(x.w), reading(x.w), x.en, x.pos].join(" ").toLowerCase())}"`;
const known = () => (progress.known = progress.known || {});
const LEVELS = [[null, "全レベル"], ["N2", "N2"], ["N1", "N1"]];
const uiLine = (ja, en) => `<div class="bi" data-en-scope>${biInner({ ja, en }, { src: "ui", jaTag: "p" })}</div>`;
// segmented control of links (routes) or buttons (data-act)
const segLinks = (list) => `<nav class="seg vc-seg">${list.map(([href, l, on]) => `<a class="seg__b" href="${href}"${on ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav>`;
const segBtns = (act, list, cur) => `<div class="seg vc-seg">${list.map(([v, l]) => `<button class="seg__b" data-act="${act}" data-v="${v == null ? "" : v}" aria-pressed="${v === cur}">${l}</button>`).join("")}</div>`;
const chapterSeg = (base, cur) => segLinks([[`#/${base}`, "全部", cur == null], ...TRY.chapters.map((c) => [`#/${base}/${c.id}`, c.id, cur === c.id])]);

// where the book sentence comes from: a grammar point or the chapter (its sample text) / its review
const atLink = (at) => {
  const [p0, n, p2] = String(at).split("/");
  return p0 === "gp" ? gpLink(+n) : `<a class="gp-link" href="#/${esc(at)}">第${+n}章${p2 === "review" ? " まとめの問題" : ""}</a>`;
};
const exLine = (o, extra = "", cls = "") => `<li class="bi vc-ex${cls}">${biInner(o, { src: o.src })}${speakBtn(o.ja, "data-small")}${extra}</li>`;
const card = (x) => `<article class="vc vc-f" id="vc-${x.ch}-${x.i}" ${filterAttrs(x)} data-en-scope>
    <header class="vc__h"><span class="vc__w ja">${esc(plain(x.w))}</span><span class="vc__r ja">${esc(reading(x.w))}</span>${speakBtn(reading(x.w), "data-small")}
      <span class="vc__lv">${esc(x.lv)}</span><span class="vc__pos">${esc(x.pos || "")}</span>
      <span class="vc__tools"><label class="studied"><input type="checkbox" data-act="known" data-k="${esc(x.key)}"${known()[x.key] ? " checked" : ""}><span class="studied__box" aria-hidden="true"></span>覚えた <span class="en-inline">Known</span></label>${enScopeBtn()}</span></header>
    <p class="vc__def">${fmt(x.en)}</p>
    ${x.note ? `<p class="vc__note">${fmtEm(x.note)}</p>` : ""}
    <ul class="vc__exs">${(x.ex || []).map((e) => exLine(e)).join("")}${x.book ? exLine(x.book, `<span class="vc__at">本の文 <span class="en-inline">from the book</span> ☞ ${atLink(x.book.at)}</span>`, " vc-ex--book") : ""}</ul>
  </article>`;
// the whole book at a glance: one light row per word, linking to its card (every card at once is ~50 000 nodes)
const row = (x) => `<a class="vc-row vc-f" href="#/vocab/${x.ch}/${x.i}" ${filterAttrs(x)}><span class="vc-row__w ja">${esc(plain(x.w))}</span><span class="vc-row__r ja">${esc(reading(x.w))}</span><span class="vc__lv">${esc(x.lv)}</span><span class="vc-row__en">${fmt(short(x.en))}</span><span class="vc-row__ch">第${x.ch}章</span></a>`;

export function vocabView(h) {
  const arg = h.split("/")[1];
  if (arg === "drill") return drillView();
  const ch = arg ? +arg : null, all = words(), list = ch ? all.filter((x) => x.ch === ch) : all;
  if (ch && !TRY.chapters.some((c) => c.id === ch)) return null;
  return `<div class="page vocab-page">
    <div class="page-head"><h1>単語 <span class="en-inline">Vocabulary${ch ? ` — 第${ch}章` : ""}</span></h1><a class="btn" href="#/vocab/drill">練習 <span class="en-inline">Drill</span></a></div>
    ${uiLine("各章の文章に出てくるN2・N1レベルの言葉です。意味・説明・例文（本の文を除く）はこのサイトで作成したものです。", "The N2- and N1-level words used in each chapter's texts. Definitions, notes and example sentences (other than the book's own sentence, marked ☞) were generated for this site.")}
    ${chapterSeg("vocab", ch)}
    <div class="vc-filter">${segBtns("vlv", LEVELS, vf.lv)}<input class="search" id="vc-search" type="search" enterkeyhint="search" aria-label="検索 Search" placeholder="検索 Search: 募集, ぼしゅう, recruit …"></div>
    <p class="dim vc-count"></p>
    <div class="vc-list${ch ? "" : " vc-rows"}">${list.map(ch ? card : row).join("") || `<p class="dim">No words yet.</p>`}</div></div>`;
}
// level and search filters (kept across chapters), applied in place
const vf = { lv: null, q: "" };
export function filterVocab() {
  const cards = $$(".vc-f");
  if (!cards.length) return;
  const input = $("#vc-search");
  if (input && input.value !== vf.q) input.value = vf.q;
  let n = 0, k = 0;
  cards.forEach((c) => {
    const on = (!vf.lv || c.dataset.lv === vf.lv) && (!vf.q || c.dataset.s.includes(vf.q) || c.dataset.s.includes(vf.q.toLowerCase()));
    c.hidden = !on;
    if (on) { n++; if (known()[c.dataset.k]) k++; }
  });
  $(".vc-count").textContent = `${n} words · 覚えた ${k}`;
}
ACT.vlv = (t) => { vf.lv = t.dataset.v || null; $$(".vc-filter .seg__b").forEach((b) => b.setAttribute("aria-pressed", String(b === t))); filterVocab(); };
ACT.known = (t) => { if (t.checked) known()[t.dataset.k] = 1; else delete known()[t.dataset.k]; saveProgress(); filterVocab(); };
document.addEventListener("input", (e) => { if (e.target.id === "vc-search") { vf.q = e.target.value.trim(); filterVocab(); } });

// ---------- drill ----------
// mode: card (flashcards; dir je = Japanese → English, ej = English → Japanese) | quiz (10 four-way questions: meaning,
// reading, and the word that fits a sentence). Scope: chapter, level, and optionally only the words not yet known.
const dr = { mode: "card", dir: "je", ch: null, lv: null, fresh: false };
const pool = () => words().filter((x) => (!dr.ch || x.ch === dr.ch) && (!dr.lv || x.lv === dr.lv) && (!dr.fresh || !known()[x.key]));
const cardOf = (x) => {
  const jp = `${esc(plain(x.w))}<span class="card-fc__r">${esc(reading(x.w))}</span>`, def = `<span class="card-fc__def">${fmt(x.en)}</span>`;
  const sub = x.ex && x.ex[0] ? fmt(x.ex[0].ja) : "";
  return dr.dir === "je" ? { key: x.key, front: esc(plain(x.w)), back: `${esc(reading(x.w))}<br>${def}`, sub } : { key: x.key, front: def, back: jp, sub };
};
// three wrong answers drawn from the other words (same part of speech first)
const others = (x, all, f) => {
  const rest = shuffle(all.filter((y) => y !== x && f(y) !== f(x)));
  return rest.filter((y) => y.pos === x.pos).concat(rest.filter((y) => y.pos !== x.pos)).map(f).filter((v, i, a) => a.indexOf(v) === i).slice(0, 3);
};
// mute: no 🔊 on the question (reading it aloud would give the reading away)
const item = (q, right, wrong, en, x, mute) => {
  const options = shuffle([right, ...wrong]);
  return { q, options, answer: options.indexOf(right), en, mute, why: { en: `${plain(x.w)}（${reading(x.w)}）: ${x.en}` } };
};
function quizItems() {
  const all = words();
  return shuffle(pool()).slice(0, 10).map((x) => {
    const kinds = ["meaning"];
    if (x.rx && x.rx.length >= 3) kinds.push("reading");
    const e = x.ex && x.ex[0];
    if (e && e.alt && e.alt.length >= 3 && /\*\*.+?\*\*/.test(e.ja)) kinds.push("context");
    const k = kinds[Math.floor(Math.random() * kinds.length)];
    if (k === "reading") return item(`**${plain(x.w)}**　の読み方は？`, reading(x.w), x.rx.slice(0, 3), `How is ${plain(x.w)} read?`, x, true);
    if (k === "context") return item(e.ja.replace(/\*\*.+?\*\*/, "（　）"), e.ja.match(/\*\*(.+?)\*\*/)[1], e.alt.slice(0, 3), e.en, x);
    return item(`**${plain(x.w)}**　の意味は？`, short(x.en), others(x, all, (y) => short(y.en)), `What does ${plain(x.w)} mean?`, x, true);
  });
}
let quizSeq = 0;
function drillView() {
  const scope = `${dr.mode}:${dr.dir}:${dr.ch}:${dr.lv}:${dr.fresh}`, n = pool().length;
  const body = !n ? `<p class="dim">No words in this selection.</p>` : dr.mode === "card" ? flashcards(scope, () => pool().map(cardOf))
    : renderExercise({ type: "choice", items: quizItems() }, `vquiz-${++quizSeq}`, "10問 <span class='en-inline'>10 questions</span>") + `<p><a class="btn" href="#/vocab/drill" data-act="redrill">もう一度 <span class="en-inline">New set</span></a></p>`;
  return `<div class="page drill vocab-drill" data-en-scope>
    <div class="page-head"><h1>単語の練習 <span class="en-inline">Vocabulary drill</span></h1><a class="btn" href="#/vocab">単語 <span class="en-inline">Word list</span></a></div>
    <div class="dr-opts">${segBtns("vdr-mode", [["card", "カード"], ["quiz", "4択"]], dr.mode)}
      ${dr.mode === "card" ? segBtns("vdr-dir", [["je", "日→英"], ["ej", "英→日"]], dr.dir) : ""}
      ${segBtns("vdr-lv", LEVELS, dr.lv)}${segBtns("vdr-fresh", [[false, "全部"], [true, "未習のみ"]], dr.fresh)}
      ${segBtns("vdr-ch", [[null, "全章"], ...TRY.chapters.map((c) => [c.id, c.id])], dr.ch)}</div>
    <p class="dim">${n} words <span class="en-inline">${dr.fresh ? "not yet marked known" : "in this selection"}</span></p>
    ${body}</div>`;
}
const set = (k, f) => (ACT[`vdr-${k}`] = (t) => { dr[k] = f(t.dataset.v); redraw(); });
set("mode", (v) => v); set("dir", (v) => v); set("lv", (v) => v || null); set("fresh", (v) => v === "true"); set("ch", (v) => (v ? +v : null));
