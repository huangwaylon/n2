// Quartet II adapter for main.js (book kind "quartet"): page links, sidebar, routes and the views.
// Routes: "" home · l/7 lesson opener · l/7/read|write|speak|listen · gn/7-12 → note 12 of lesson 7 · st/11 strategy ·
// l/7/vocab · l/7/kanji · u/c1 (上級へのチャレンジ ①) · u/k13 (漢字チャレンジ ⑬) · about · guide · index · kanji · drill
import { ACT, BOOK, TRY, $, esc, progress } from "../core.js";
import { enScopeBtn, fmt, plain } from "../markup.js";
import { blocks, circ, inl, line, placeLineNos, SKILLS, skillIcon, wireTracks } from "./blocks.js";
import { vocabView, kanjiView, kanjiAllView, drillView, indexView } from "./lists.js";

const SK = ["read", "write", "speak", "listen"];
const lessonOf = (id) => TRY.lessons.find((l) => l.id === +id);
const secOf = (l, s) => l && l.sections.find((x) => x.skill === s);
const unitOf = (id) => TRY.units.find((u) => u.id === id);
const pageHead = (h1) => `<div class="page-head"><h1>${h1}</h1>${enScopeBtn()}</div>`;

// every grammar note / strategy with its lesson (note numbers restart in each lesson; strategies are book-wide)
function findIn(l, pred) {
  for (const s of (l ? l.sections : [])) {
    let hit = null;
    (function walk(list) { (list || []).forEach((b) => { if (hit || !b) return; if (pred(b)) hit = { b, sec: s }; else walk(b.blocks); }); })(s.blocks);
    if (hit) return hit;
  }
  return null;
}
export const allNotes = () => TRY.lessons.flatMap((l) => l.sections.flatMap((s) => {
  const out = [];
  (function walk(list) { (list || []).forEach((b) => { if (b && b.t === "note") out.push({ l, s, b }); else if (b) walk(b.blocks); }); })(s.blocks);
  return out;
}));

// ---------- sidebar ----------
function sidebar() {
  const items = TRY.lessons.map((l) => `<li class="sb-ch" data-ch="${l.id}"><a href="#/l/${l.id}" class="sb-ch-link"><span class="sb-num">${l.id}</span><span class="sb-t">第${l.id}課</span><span class="sb-prog" data-prog="${l.id}"></span></a>
      <ul class="sb-gps">${l.sections.map((s) => `<li><a href="#/l/${l.id}/${s.skill}"><span class="sb-gpn sb-sk">${skillIcon(s.skill)}</span><span class="sb-gpt">${SKILLS[s.skill][0]}　${esc(plain(s.title.ja || s.title))}</span></a></li>`).join("")}
        <li><a href="#/l/${l.id}/vocab"><span class="sb-gpn sb-sk">語</span><span class="sb-gpt">単語リスト</span></a></li>
        <li><a href="#/l/${l.id}/kanji"><span class="sb-gpn sb-sk">漢</span><span class="sb-gpt">漢字リスト</span></a></li></ul></li>`).join("");
  const units = (kind, label) => TRY.units.filter((u) => u.kind === kind).map((u) => `<li><a href="#/u/${u.id}"><span class="sb-gpn">${circ(u.no)}</span><span class="sb-gpt">${esc(plain(u.title))}</span></a></li>`).join("");
  $("#sb-nav").innerHTML = `<ul class="sb-list">${items}
    ${TRY.units.length ? `<li class="sb-ch sb-bu" data-ch="u"><a href="#/u/${TRY.units[0].id}" class="sb-ch-link"><span class="sb-num">＋</span><span class="sb-t">ブラッシュアップ</span></a>
      <ul class="sb-gps"><li class="sb-sub">上級へのチャレンジ</li>${units("challenge")}<li class="sb-sub">漢字チャレンジ</li>${units("kanji")}</ul></li>` : ""}</ul>`;
  updateProgress();
}
function updateProgress() {
  TRY.lessons.forEach((l) => {
    const ns = allNotes().filter((x) => x.l === l), d = ns.filter((x) => progress.studied[`n${l.id}-${x.b.no}`]).length;
    const el = $(`[data-prog="${l.id}"]`);
    if (el) { el.textContent = d ? `${d}/${ns.length}` : ""; el.classList.toggle("done", d === ns.length && d > 0); }
  });
}

// ---------- routes ----------
function target(h) {
  const [p0, p1] = h.split("/");
  if (p0 === "l") return { ch: String(+p1), scrollTo: null };
  // gn/7-12: lesson 7, note 12 (note numbers restart in every lesson)
  if (p0 === "gn") { const [l, no] = String(p1).split("-").map(Number); return { ch: String(l), scrollTo: `#gn-${no}` }; }
  if (p0 === "st") { const x = strategyAt(+p1); return x ? { ch: String(x.l.id), scrollTo: `#st-${+p1}` } : {}; }
  if (p0 === "u") return { ch: "u" };
  return {};
}
// strategies are numbered book-wide (⑪–⑳)
function strategyAt(no) {
  for (const l of TRY.lessons) { const hit = findIn(l, (b) => b.t === "strategy" && b.no === no); if (hit) return { l, sec: hit.sec }; }
  return null;
}
function viewHtml(h) {
  const [p0, p1, p2] = h.split("/");
  if (!h) return homeView();
  if (p0 === "l") {
    // the 別冊 lists stand on their own (a lesson's list shows even while its lesson file is missing)
    if (p2 === "vocab") return vocabView(+p1);
    if (p2 === "kanji") return kanjiView(+p1);
    const l = lessonOf(p1);
    if (!l) return null;
    if (!p2) return openerView(l);
    return sectionView(l, p2);
  }
  if (p0 === "gn") { const [lid, no] = String(p1).split("-").map(Number); const x = allNotes().find((n) => n.b.no === no && n.l.id === lid); return x ? sectionView(x.l, x.s.skill) : null; }
  if (p0 === "st") { const x = strategyAt(+p1); return x ? sectionView(x.l, x.sec.skill) : null; }
  if (p0 === "u") return unitView(p1);
  const V = { about: aboutView, guide: guideView, index: indexView, kanji: kanjiAllView, drill: drillView }[p0];
  return V ? V() : null;
}
function docTitle(main) {
  const l = main.dataset.ch && lessonOf(main.dataset.ch);
  return (l ? `第${l.id}課 – ` : "") + "Quartet II 中級日本語 Interactive";
}
const layout = (root) => { placeLineNos(root); wireTracks(root); };

export const QUARTET = {
  pages: [["about", "本書について", "About"], ["guide", "使い方", "Guide"], ["index", "さくいん", "Index"], ["kanji", "漢字", "Kanji"], ["drill", "練習", "Drill"]],
  sidebar, updateProgress, target, viewHtml, docTitle, layout,
};

// ---------- views ----------
function homeView() {
  const B = BOOK();
  const cards = TRY.lessons.map((l) => `<a class="ch-card q-card" href="#/l/${l.id}"><div class="cc-num">${l.id}</div><div class="cc-body">
      ${l.sections.map((s) => `<div class="q-card__s">${skillIcon(s.skill)}<span>${fmt(s.title.ja || s.title)}</span></div>`).join("")}</div></a>`).join("");
  return `<div class="home">
    <section class="hero">
      <h1>中級日本語カルテット II <span class="hero-sub">Quartet II — Interactive Edition</span></h1>
      <p class="lead">An interactive edition of <em>${esc(B.bookTitle)}</em> / <em>${esc(B.bookTitleEn)}</em> (${esc(B.credit)}): lessons 7–12 with every reading, grammar note, reading strategy, model composition, conversation and listening task, the vocabulary and kanji lists, and the brush-up section.</p>
      ${line({ ja: "{英語|えいご}のうち、{本|ほん}に{印刷|いんさつ}されているものは{灰色|はいいろ}、このサイトで{作成|さくせい}した{訳|やく}と{説明|せつめい}には「generated」と{表示|ひょうじ}されています。{音声|おんせい}はブラウザの{音声合成|おんせいごうせい}です。", tr: "English printed in the book is shown in grey. Translations the book doesn't print were generated for this site and are tagged “generated”. Audio is your browser's speech synthesis, not the book's recordings." }, "hero-bi")}
      <div class="hero-links"><a class="btn primary" href="#/l/${TRY.lessons.length ? TRY.lessons[0].id : 7}">第${TRY.lessons.length ? TRY.lessons[0].id : 7}課から始める <span class="en-inline">Start</span></a><a class="btn" href="#/guide">使い方 <span class="en-inline">How to use</span></a><a class="btn" href="#/drill">単語・漢字の練習 <span class="en-inline">Vocab &amp; kanji drill</span></a></div>
    </section>
    <section class="ch-grid">${cards}</section>
  </div>`;
}

function openerView(l) {
  const groups = (l.opener || []).map((g) => `<div class="op-g">
      ${g.skills.map((s) => `<a class="op-sk" href="#/l/${l.id}/${s.skill}">${skillIcon(s.skill)}<span class="op-sk__l">${SKILLS[s.skill][0]}</span><span class="op-sk__t">${fmt(s.title)}</span></a>`).join("")}
      <ul class="op-cando">${(g.canDo || []).map((c) => `<li>${line(c)}</li>`).join("")}</ul></div>`).join("");
  const units = TRY.units.filter((u) => u.lesson === l.id);
  return `<div class="lesson q2" data-en-scope>
    <header class="op-banner"><span class="op-dai">第</span><span class="op-n">${l.id}</span><span class="op-ka">課</span><span class="op-tools">${enScopeBtn()}</span></header>
    ${groups}
    <nav class="op-more"><a class="btn" href="#/l/${l.id}/vocab">単語リスト <span class="en-inline">Vocabulary</span></a><a class="btn" href="#/l/${l.id}/kanji">漢字リスト <span class="en-inline">Kanji</span></a>
      ${units.map((u) => `<a class="btn" href="#/u/${u.id}">${u.kind === "kanji" ? "漢字チャレンジ" : "上級へのチャレンジ"} ${circ(u.no)}</a>`).join("")}</nav>
    ${pager(l, null)}</div>`;
}

// prev / next section across lessons
function pager(l, skill) {
  const seq = TRY.lessons.flatMap((x) => [{ l: x, s: null }, ...x.sections.map((s) => ({ l: x, s: s.skill }))]);
  const i = seq.findIndex((x) => x.l === l && x.s === skill);
  const lab = (x) => (x.s ? `${x.l.id} ${SKILLS[x.s][0]}　${fmt(secOf(x.l, x.s).title.ja || secOf(x.l, x.s).title)}` : `第${x.l.id}課`);
  const a = (x, dir, cls) => (x ? `<a class="${cls}" href="#/l/${x.l.id}${x.s ? "/" + x.s : ""}"><span class="pager__dir">${dir}</span><span class="pager__t">${lab(x)}</span></a>` : "<span></span>");
  return `<nav class="pager">${a(seq[i - 1], "← 前へ", "pager__prev")}${a(seq[i + 1], "次へ →", "pager__next")}</nav>`;
}

// headings with an id (and notes, strategies, readings) make the section's mini table of contents
function tocOf(list) {
  const out = [];
  (function walk(bs) {
    (bs || []).forEach((b) => {
      if (!b) return;
      if (b.t === "head" && b.id && (b.style === "band" || b.style === "num" || b.style === "step")) out.push(`<a href="#${esc(b.id)}" data-act="jump" class="mt-gp">${b.tag ? `<span class="mt-gp__n">${fmt(b.tag)}</span>` : ""}<span class="mt-gp__t">${fmt(jaT(b.text))}</span></a>`);
      else if (b.t === "reading" && b.id && b.n) out.push(`<a href="#${esc(b.id)}" data-act="jump" class="mt-gp"><span class="mt-gp__n">読${b.n}</span><span class="mt-gp__t">${fmt(jaT(b.title))}</span></a>`);
      else if (b.t === "strategy") out.push(`<a href="#st-${b.no}" data-act="jump" class="mt-gp"><span class="mt-gp__n">${circ(b.no)}</span><span class="mt-gp__t">${fmt(b.title)}</span></a>`);
      else if (b.t === "note") out.push(`<a href="#gn-${b.no}" data-act="jump" class="mt-gp mt-gn"><span class="mt-gp__n">${b.no}</span><span class="mt-gp__t">${fmt(b.pattern)}</span></a>`);
      else if (b.t !== "note") walk(b.blocks);
    });
  })(list);
  return out;
}
const jaT = (t) => (t == null ? "" : typeof t === "string" ? t : t.ja || t.en || "");

function sectionView(l, skill) {
  const s = secOf(l, skill);
  if (!s) return null;
  const toc = tocOf(s.blocks);
  const tabs = `<nav class="sk-tabs" aria-label="セクション">${l.sections.map((x) => `<a href="#/l/${l.id}/${x.skill}"${x.skill === skill ? ' aria-current="page"' : ""}>${skillIcon(x.skill)}<span>${SKILLS[x.skill][0]}</span></a>`).join("")}</nav>`;
  return `<div class="lesson q2 sk--${skill}" style="--ch:${l.id}">
    <header class="sk-banner"${""}>
      <div class="sk-banner__ic">${skillIcon(skill)}<span>${SKILLS[skill][0]}</span></div>
      <div class="sk-banner__b"><p class="sk-banner__l">第${l.id}課 · ${SKILLS[skill][1]}</p><h1 class="sk-banner__t">${inl(s.title)}</h1></div>
    </header>
    ${tabs}
    ${toc.length > 1 ? `<details class="mini-toc"${matchMedia("(min-width: 601px)").matches ? " open" : ""}><summary class="mini-toc__sum">このセクションの内容<span class="mini-toc__n">（${toc.length}）</span></summary><nav class="mini-toc__chips">${toc.join("")}</nav></details>` : ""}
    <div class="sec-body" data-en-scope>${blocks(s.blocks, { id: `l${l.id}-${skill}`, lesson: l.id, lastPage: null })}</div>
    ${pager(l, skill)}</div>`;
}

function unitView(id) {
  const u = unitOf(id);
  if (!u) return null;
  const list = TRY.units, i = list.indexOf(u);
  const lab = (x) => `${x.kind === "kanji" ? "漢字チャレンジ" : "上級へのチャレンジ"} ${circ(x.no)} ${fmt(x.title)}`;
  const a = (x, dir, cls) => (x ? `<a class="${cls}" href="#/u/${x.id}"><span class="pager__dir">${dir}</span><span class="pager__t">${lab(x)}</span></a>` : "<span></span>");
  return `<div class="lesson q2 unit">
    <header class="unit-h"><span class="unit-h__tag">${u.kind === "kanji" ? "漢字チャレンジ" : "上級へのチャレンジ"} ${circ(u.no)}</span>
      <h1 class="unit-h__t"><span class="ja">${fmt(u.title)}</span> ${u.en ? `<span class="strat__en">${fmt(u.en)}</span>` : ""}</h1>
      ${u.lesson ? `<a class="unit-h__l" href="#/l/${u.lesson}">☛ 第${u.lesson}課</a>` : ""}</header>
    <div class="sec-body" data-en-scope>${blocks(u.blocks, { id: `u-${u.id}` })}</div>
    <nav class="pager">${a(list[i - 1], "← 前へ", "pager__prev")}${a(list[i + 1], "次へ →", "pager__next")}</nav></div>`;
}

function aboutView() {
  return `<div class="page about q2" data-en-scope><div class="page-tools">${enScopeBtn()}</div>${(TRY.front || []).map((sec) => `<section class="front-sec" id="front-${esc(sec.id)}"><h1>${inl(sec.title)}</h1>${blocks(sec.blocks, { id: "front-" + sec.id })}</section>`).join("")}</div>`;
}

function guideView() {
  const ui = (ja, e) => line({ ja, tr: e });
  return `<div class="page guide" data-en-scope>
    ${pageHead("この教材の使い方 <span class=\"en-inline\">How to use this site</span>")}
    ${ui("各課は「読む・書く・話す・聞く」の4つのセクションに分かれています。左のメニュー（スマートフォンでは☰）から選んでください。", "Each lesson has four sections — Reading, Writing, Speaking, Listening. Pick one from the menu on the left (☰ on phones).")}
    <h2>読む <span class="en-inline">Reading</span></h2>
    <ul class="legend">
      <li>${ui("本文の行番号は本と同じです。青い下線と番号は「文型・表現ノート」の項目を表します。番号を押すと説明に移動します。", "Line numbers are the book's. A blue underline with a number marks a grammar note — tap the number to jump to it.")}</li>
      <li>${ui("縦書きの文章は、広い画面では縦書きで、スマートフォンでは横書きで表示されます（⚙で変更できます）。", "Vertical texts are shown vertically on wide screens and horizontally on phones (change it in ⚙).")}</li>
      <li>${ui("★の付いた文型は、ワークブックで練習する項目です。", "Notes marked ★ are practised in the workbook.")}</li>
    </ul>
    <h2>英語 <span class="en-inline">English</span></h2>
    <ul class="legend">
      <li><span class="en en--book legend-en">Printed in the book</span> — ${ui("本に印刷されている英語。説明の英語はいつも表示され、例文の訳は EN で表示されます。", "English printed in the book. Explanations are always shown; translations of sentences appear with EN.")}</li>
      <li><span class="en en--gen legend-en">Our translation</span> — ${ui("このサイトで作成した訳。本には印刷されていません。", "Translations generated for this site; the book doesn't print them.")}</li>
    </ul>
    <h2>音声 <span class="en-inline">Audio</span></h2>
    ${ui("🎧のラベルは本の音声トラックの名前です。▶はブラウザの音声合成で読み上げます（本の録音ではありません）。聴解のスクリプトと解答は「解答・スクリプト」を開くと見られます。", "🎧 labels name the book's audio tracks. ▶ reads the text with your browser's speech synthesis (not the book's recordings). Listening scripts and answers are behind “解答・スクリプト”.")}
    <h2>記号 <span class="en-inline">Symbols</span></h2>
    ${ui("接続の記号（Vる、いA、なA、N、普 など）は「本書について」の記号の表を見てください。", "For the connection symbols (Vる, いA, なA, N, 普 …) see the symbol tables under “About”.")}
  </div>`;
}

// in-page jumps (mini TOC, numbered underlines → notes): the hash stays the section's
ACT.jump = (t, e) => {
  const el = document.getElementById(t.getAttribute("href").slice(1));
  if (!el) return;
  e.preventDefault();
  if (el.closest("details") && !el.closest("details").open) el.closest("details").open = true;
  el.scrollIntoView({ block: "start", behavior: "smooth" });
};
