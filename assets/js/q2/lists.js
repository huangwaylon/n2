// Quartet II lists: 単語リスト / 覚える単語と例文 (vocabNN.js), 漢字リスト (kanjiNN.js), the generated indexes
// (文型・表現さくいん, 単語さくいん — the book's pp.246–259 list the same entries) and the vocab / kanji drill.
import { ACT, TRY, $$, esc } from "../core.js";
import { flashcards, redraw } from "../flash.js";
import { en, enScopeBtn, enToggle, fmt, plain, speakBtn } from "../markup.js";

const vocabOf = (id) => TRY.vocab.find((v) => v.lesson === +id);
const kanjiOf = (id) => TRY.kanji.find((k) => k.lesson === +id);
const lessonNav = (id, kind) => `<nav class="sk-tabs">${TRY.book.lessons.map((n) => `<a href="#/l/${n}/${kind}"${n === +id ? ' aria-current="page"' : ""}><span>第${n}課</span></a>`).join("")}</nav>`;
const empty = (what) => `<p class="dim">${what} — not transcribed yet.</p>`;

// ---------- 単語リスト ----------
export function vocabView(id) {
  const v = vocabOf(id);
  const body = !v ? empty("単語リスト") : v.lists.map((L, li) => {
    const rows = L.rows.map((r) => `<tr${r.n ? ' class="vl-target"' : ""}>
        <td class="vl-n">${r.n ? `${r.n}.` : ""}</td><td class="vl-k">${esc(r.k || "")}</td><td class="vl-ln">${r.ln != null ? esc(r.ln) : ""}</td>
        <td class="vl-w ja">${fmt(r.w)}</td><td class="vl-y ja">${fmt(r.yomi || "")}</td><td class="vl-en">${fmt(r.en || "")}</td></tr>`).join("");
    const T = L.targets;
    const targets = T && T.items && T.items.length ? `<section class="vt-targets" data-en-scope>
        <h3 class="vl-sub">▶ 第${v.lesson}課・${fmt(L.sec)} ▸▸▸ 覚える単語と例文 <span class="en-inline">Target words with sample sentences</span>${T.audio ? `<span class="trk trk--l">🎧 ${esc(T.audio)}</span>` : ""}<span class="vl-tools">${enScopeBtn()}</span></h3>
        <ol class="tw">${T.items.map((it) => `<li class="tw__i bi">${it.tr ? enToggle() : ""}<span class="tw__n">${esc(it.n)}.</span><span class="tw__w ja">${fmt(it.w)}</span>
          <span class="tw__ex"><span class="ja">${fmt(it.ex)}</span>${en(it.tr, "gen")}</span>${speakBtn(it.ex, "data-small")}</li>`).join("")}</ol></section>` : "";
    return `<section class="vl" id="vl-${li}">
      <h2 class="vl-h"><span class="vl-h__l">第${v.lesson}課</span><span class="vl-h__s">${fmt(L.sec)}</span><span class="vl-h__t">${fmt(L.title || "")}</span></h2>
      <div class="qtbl-wrap"><table class="vl-t"><thead><tr><th></th><th>漢</th><th>行</th><th>単語</th><th>読み</th><th>意味</th></tr></thead><tbody>${rows}</tbody></table></div>
      ${targets}</section>`;
  }).join("");
  return `<div class="page q2 vocab">
    <div class="page-head"><h1>単語リスト <span class="en-inline">Vocabulary lists — 第${esc(id)}課</span></h1></div>
    ${lessonNav(id, "vocab")}
    <p class="vl-legend">◆ 新出漢字がある単語（読み書き）　◇ 新出漢字がある単語（読みだけ）　<u class="ul">＿</u> 新出漢字 <span class="en-inline">◆ words with new kanji to read and write · ◇ to read only · underlined: the new kanji</span></p>
    ${body}</div>`;
}

// ---------- 漢字リスト ----------
const kanjiCard = (k) => `<article class="kj${k.hl ? " kj--hl" : ""}" id="kj-${k.no}">
    <div class="kj__big"><span class="kj__no">${k.no}</span><span class="kj__k">${esc(k.k)}</span></div>
    <div class="kj__m">${fmt(k.meaning || "")}</div>
    <div class="kj__r ja"><span class="kj__on">${(k.on || []).map(esc).join("<br>")}</span><span class="kj__kun">${(k.kun || []).map(esc).join("<br>")}</span></div>
    <ul class="kj__w">${(k.words || []).map((w) => `<li>${w.m ? `<span class="kj__mk">${esc(w.m)}</span>` : ""}<span class="ja">${fmt(w.w)}</span>（<span class="ja">${fmt(w.yomi)}</span>）<span class="kj__en">${fmt(w.en || "")}</span></li>`).join("")}</ul>
    <div class="kj__s">${k.strokes ? `（${k.strokes}）画 <span class="en-inline">strokes</span>` : ""}</div>
  </article>`;
function kanjiGroups(K) {
  let last = null;
  return K.kanji.map((k) => {
    const head = k.sec && k.sec !== last ? `<h3 class="kj-sec">${fmt(k.sec)}</h3>` : "";
    last = k.sec || last;
    return head + kanjiCard(k);
  }).join("");
}
export function kanjiView(id) {
  const K = kanjiOf(id);
  const range = K && K.kanji.length ? `${K.kanji[0].no}…${K.kanji[K.kanji.length - 1].no}` : "";
  return `<div class="page q2 kanji">
    <div class="page-head"><h1>漢字リスト <span class="en-inline">Kanji list — 第${esc(id)}課 ${range}</span></h1></div>
    ${lessonNav(id, "kanji")}
    ${K ? `<p class="vl-legend">◆ 読み書きを覚える単語　◇ 読みだけ覚える単語 <span class="en-inline">◆ words to learn to read and write · ◇ to read only · stroke-order diagrams are not reproduced</span></p><div class="kj-grid">${kanjiGroups(K)}</div>` : empty("漢字リスト")}</div>`;
}
export function kanjiAllView() {
  const all = TRY.kanji.flatMap((K) => K.kanji.map((k) => ({ k, l: K.lesson })));
  return `<div class="page q2 kanji">
    <div class="page-head"><h1>漢字 <span class="en-inline">All kanji (${all.length})</span></h1></div>
    <input class="search" id="kj-search" type="search" aria-label="検索 Search" placeholder="検索 Search: 似, ジ, resemble …">
    <div class="kj-mini">${all.map(({ k, l }) => `<a class="kj-chip" href="#/l/${l}/kanji" data-kj="${k.no}" data-s="${esc([k.k, ...(k.on || []), ...(k.kun || []), plain(k.meaning || "")].join(" ").toLowerCase())}"><span class="kj-chip__k">${esc(k.k)}</span><span class="kj-chip__n">${k.no}</span></a>`).join("")}</div></div>`;
}
ACT.kjgo = () => {};

// ---------- indexes (generated) ----------
import { allNotes } from "./nav.js";
export function indexView() {
  const notes = allNotes().map(({ l, b }) => `<tr data-s="${esc((plain(b.pattern) + " " + (b.gloss || "")).toLowerCase())}"><td><a href="#/gn/${l.id}-${b.no}">${fmt(b.pattern)}</a></td><td class="bk-en">${fmt(b.gloss || "")}</td><td>L${l.id}-${b.no}</td></tr>`).join("");
  const words = TRY.vocab.flatMap((v) => v.lists.flatMap((L) => L.rows.map((r) => ({ r, v, L }))));
  words.sort((a, b) => plain(a.r.yomi).localeCompare(plain(b.r.yomi), "ja"));
  const wrows = words.map(({ r, v, L }) => `<tr data-s="${esc((plain(r.w) + " " + plain(r.yomi) + " " + plain(r.en)).toLowerCase())}"><td class="ja">${esc(r.k || "")}${fmt(r.w)}</td><td class="ja">${fmt(r.yomi)}</td><td>${fmt(r.en || "")}</td><td><a href="#/l/${v.lesson}/vocab">L${v.lesson}-${fmt(L.sec)}</a></td></tr>`).join("");
  return `<div class="page index-page q2">
    <h1>さくいん <span class="en-inline">Index</span></h1>
    <input class="search" id="idx-search" type="search" enterkeyhint="search" aria-label="検索 Search" placeholder="検索 Search: 〜つつある, 壁, barrier …">
    <h2>文型・表現さくいん <span class="en-inline">Sentence patterns &amp; expressions</span></h2>
    <table class="tbl idx"><thead><tr><th>文型・表現</th><th>Meaning</th><th>課</th></tr></thead><tbody>${notes}</tbody></table>
    <h2>単語さくいん <span class="en-inline">Words (${words.length})</span></h2>
    <table class="tbl idx"><thead><tr><th>単語</th><th>読み</th><th>意味</th><th>課</th></tr></thead><tbody>${wrows}</tbody></table></div>`;
}
document.addEventListener("input", (e) => {
  if (e.target.id !== "kj-search") return;
  const q = e.target.value.trim().toLowerCase();
  $$(".kj-chip").forEach((a) => (a.style.display = !q || a.dataset.s.includes(q) ? "" : "none"));
});

// ---------- drill: flashcards over the 覚える単語 and the kanji of chosen lessons ----------
const drill = { mode: "vocab", lessons: null };
function deckOf() {
  const ls = drill.lessons || TRY.lessons.map((l) => l.id);
  if (drill.mode === "kanji") return TRY.kanji.filter((K) => ls.includes(K.lesson)).flatMap((K) => K.kanji.map((k) => ({ front: k.k, back: `${[...(k.on || []), ...(k.kun || [])].join("・")}<br>${fmt(k.meaning || "")}`, sub: (k.words || []).slice(0, 2).map((w) => `${fmt(w.w)}（${fmt(w.yomi)}）`).join("　"), key: "k" + k.no })));
  return TRY.vocab.filter((v) => ls.includes(v.lesson)).flatMap((v) => v.lists.flatMap((L) => L.rows.filter((r) => r.n).map((r) => ({ front: fmt(r.w), back: `${fmt(r.yomi)}<br>${fmt(r.en)}`, sub: "", key: `v${v.lesson}-${plain(r.w)}` }))));
}
export function drillView() {
  return `<div class="page q2 drill">
    <div class="page-head"><h1>練習 <span class="en-inline">Flashcards</span></h1></div>
    <div class="dr-opts"><div class="seg">${[["vocab", "覚える単語"], ["kanji", "漢字"]].map(([m, l]) => `<button class="seg__b" data-act="dr-mode" data-m="${m}" aria-pressed="${drill.mode === m}">${l}</button>`).join("")}</div>
      <div class="seg">${[null, ...TRY.lessons.map((l) => l.id)].map((id) => `<button class="seg__b" data-act="dr-les" data-l="${id || ""}" aria-pressed="${String(drill.lessons ? drill.lessons[0] === id : id === null)}">${id ? `L${id}` : "全部"}</button>`).join("")}</div></div>
    ${flashcards(`${drill.mode}:${drill.lessons}`, deckOf)}</div>`;
}
ACT["dr-mode"] = (t) => { drill.mode = t.dataset.m; redraw(); };
ACT["dr-les"] = (t) => { drill.lessons = t.dataset.l ? [+t.dataset.l] : null; redraw(); };
