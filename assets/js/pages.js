// The pages outside the chapters: home, guide, about (front matter), index, similar patterns, can-do list, drill.
import { BOOK, TRY, allPoints, bookEnglish, chapterPoints, esc, pointRange, progress } from "./core.js";
import { bi, biInner, en, enScopeBtn, enToggle, fmt, gpLink, marks, MARKS, plain, stars } from "./markup.js";
import { rubyMarkup } from "./ruby.js";
import { renderExercise } from "./exercises.js";

// page title row with one container-scoped EN button (per-line EN buttons are hidden at ≤600)
const pageHead = (h1) => `<div class="page-head"><h1>${h1}</h1>${enScopeBtn()}</div>`;
// the site's own interface text (not book content): bilingual, but not marked as generated
const ui = (o, tag = "p", cls = "") => bi(o, tag, cls, { src: "ui" });
const studiedCount = (pts) => pts.filter((g) => progress.studied[g.no]).length;
const bar = (done, total, cls = "") => `<span class="bar${cls}"><span style="width:${total ? (100 * done) / total : 0}%"></span></span>`;
export const notFound = () => `<div class="page"><h1>Not found</h1><p><a href="#/">Home</a></p></div>`;

export function homeView() {
  const B = BOOK(), pts = allPoints().map((x) => x.g), done = studiedCount(pts);
  const cards = TRY.chapters.map((ch) => {
    const cp = chapterPoints(ch);
    return `<a class="ch-card" href="#/ch/${ch.id}"><div class="cc-num">${ch.id}</div><div class="cc-body">
          <div class="cc-genre">${fmt(ch.genre.ja)}</div><div class="cc-title">${fmt(ch.title.ja)}</div><div class="cc-en">${esc(ch.title.en)}</div>
          <div class="cc-foot"><span>文法 ${pointRange(cp, "–")}</span>${bar(studiedCount(cp), cp.length)}</div></div></a>`;
  }).join("");
  const source = bookEnglish()
    ? { ja: "{英語|えいご}のうち、{本|ほん}に{印刷|いんさつ}されているものは{灰色|はいいろ}、このサイトで{作成|さくせい}した{訳|やく}と{説明|せつめい}には「generated」と{表示|ひょうじ}されています。", en: "English printed in the book is shown in grey. Translations and explanations the book doesn't print were generated for this site and are tagged “generated”." }
    : { ja: "この本は{中国語版|ちゅうごくごばん}をもとにしています。英語の訳と説明はすべてこのサイトで{作成|さくせい}したもので、「generated」と{表示|ひょうじ}されています。", en: "This edition is based on the Chinese edition of the book; its Chinese translations are not reproduced. All English on this site (translations and explanations) was generated for this site and is tagged “generated”." };
  return `<div class="home">
      <section class="hero">
        <h1>JLPT ${esc(B.level)} 文法 <span class="hero-sub">Interactive Grammar Textbook</span></h1>
        <p class="lead">An interactive edition of <em>${esc(B.bookTitle)}</em> (${esc(B.credit)}): all ${TRY.chapters.length} chapters and ${pts.length} grammar points with the book’s sample texts, explanations, examples, practice and review questions, plus listening via text-to-speech.</p>
        <div class="bi hero-bi" data-en-scope>${biInner(source, { src: "ui", jaTag: "p" })}</div>
        <div class="bi hero-bi" data-en-scope>${enToggle()}${enScopeBtn()}<p class="ja">日本語で読むことに慣れるため、説明は日本語が中心です。英語の説明・訳は最初は隠れています。右上の「EN」で表示できます。</p>
        ${en("To get you used to reading Japanese, explanations are primarily in Japanese. English translations and detailed English explanations are hidden by default — use the **EN** switch at the top (or the small EN button next to any line) to reveal them.", "ui")}</div>
        <div class="stats"><div><b>${done}</b> / ${pts.length} studied</div>${bar(done, pts.length, " big")}</div>
        <div class="hero-links"><a class="btn primary" href="#/ch/1">第1章から始める <span class="en-inline">Start Chapter 1</span></a><a class="btn" href="#/guide">使い方 <span class="en-inline">How to use</span></a><a class="btn" href="#/drill">ランダム練習 <span class="en-inline">Random drill</span></a></div>
      </section>
      <section class="ch-grid">${cards}</section>
    </div>`;
}

const FORM_ROWS = [
  ["[N]", "名詞 <span class=\"en-inline\">noun</span>", "{雨|あめ}、{会議|かいぎ}"],
  ["[いA]", "い形容詞 <span class=\"en-inline\">i-adjective</span>", "{高|たか}い、おいしい"],
  ["[なA]", "な形容詞 <span class=\"en-inline\">na-adjective</span>", "{静|しず}か、{便利|べんり}"],
  ["[V]", "動詞 <span class=\"en-inline\">verb</span>", "{書|か}く、{食|た}べる、する"],
  ["[V-ます] / [V-~~ます~~]", "ます形 / ます形の語幹 <span class=\"en-inline\">masu form / masu stem</span>", "{書|か}きます / {書|か}き"],
  ["[V-る]", "辞書形 <span class=\"en-inline\">dictionary form</span>", "{書|か}く"],
  ["[V-て]", "て形", "{書|か}いて"],
  ["[V-た]", "た形", "{書|か}いた"],
  ["[V-ない] / [V-~~ない~~]", "ない形 / ない形の語幹", "{書|か}かない / {書|か}か"],
  ["[V-できる]", "可能形 <span class=\"en-inline\">potential</span>", "{書|か}ける"],
  ["[V-られる]", "受身形 <span class=\"en-inline\">passive</span>", "{書|か}かれる"],
  ["[V-させる]", "使役形 <span class=\"en-inline\">causative</span>", "{書|か}かせる"],
  ["[V-よう]", "意向形 <span class=\"en-inline\">volitional</span>", "{書|か}こう"],
  ["[V-ば]", "条件形 <span class=\"en-inline\">conditional</span>", "{書|か}けば"],
  ["[Pl]", "普通形 <span class=\"en-inline\">plain form (all four: non-past/past × aff./neg.)</span>", "{書|か}く・{書|か}かない・{書|か}いた・{書|か}かなかった"],
  ["[いA~~い~~] [なA~~な~~] [N~~だ~~]", "語尾を取る <span class=\"en-inline\">drop the ending</span>", "{高|たか}(い)、{静|しず}か(な)"],
];
const PLAIN_ROWS = [
  ["V", "{読|よ}む", "{読|よ}まない", "{読|よ}んだ", "{読|よ}まなかった"],
  ["いA", "{寒|さむ}い", "{寒|さむ}くない", "{寒|さむ}かった", "{寒|さむ}くなかった"],
  ["なA", "{静|しず}かだ", "{静|しず}かじゃない", "{静|しず}かだった", "{静|しず}かじゃなかった"],
  ["N", "{雨|あめ}だ", "{雨|あめ}じゃない", "{雨|あめ}だった", "{雨|あめ}じゃなかった"],
];
export function guideView() {
  const li = (label, o) => `<li><b>${label}</b> — ${ui(o, "span")}</li>`;
  return `<div class="page guide" data-en-scope>
      ${pageHead("この教材の使い方 <span class=\"en-inline\">How to use this site</span>")}
      ${ui({ ja: "各章は「できること → 見本文 → 文法項目 → Check → まとめの問題」の順に進みます。まず見本文を読んで（聞いて）、太字の文法が実際にどう使われているかを確認しましょう。", en: "Each chapter goes: Can-do goals → Sample text → Grammar points → Check → Review questions. Start by reading (and listening to) the sample text to see how the bold grammar is used in context." })}
      <h2>各文法項目の中身 <span class="en-inline">Inside a grammar point</span></h2>
      <ul class="legend">
        <li>${stars(3)} ${ui({ ja: "★が多いほど重要な項目です。", en: "More stars = more important / more likely on the test." }, "span")}</li>
        ${Object.keys(MARKS).map((k) => `<li class="legend-mark">${marks([k])} ${esc(MARKS[k][0])}</li>`).join("")}
        ${li("どう使う？", { ja: "どんな場面・気持ちで使うか", en: "When and with what feeling the pattern is used" })}
        ${li("接続", { ja: "どの品詞のどの形につながるか", en: "Which part of speech / conjugated form it attaches to" })}
        ${li("📎", { ja: "ほかの言葉との違い・追加の使い方", en: "Differences from similar words, extra uses" })}
        ${li("＋Plus", { ja: "同じような意味で使われる別の表現", en: "Other expressions with a similar meaning" })}
        <li><b>📘 English deep-dive</b> — detailed English explanation: nuance, comparisons, common mistakes, test tips.</li>
        ${li("やってみよう！ / Check / まとめの問題", { ja: "練習問題。「答え合わせ」を押すと採点されます。結果はブラウザに保存されます。", en: "Practice. Press “Check answers” to grade; scores are saved in your browser." })}
        ${li("🔊 / ▶", { ja: "ブラウザの音声合成で読み上げます（聴解問題も）。", en: "Read aloud with your browser's Japanese text-to-speech (also used for the listening questions). Adjust speed in the settings." })}
      </ul>
      <h2>英語 <span class="en-inline">English</span></h2>
      <ul class="legend">
        ${bookEnglish() ? `<li><span class="en en--book legend-en">Printed in the book</span> — ${ui({ ja: "本に印刷されている英語（使い方・注・できること）。", en: "English the book itself prints (usage explanations, notes, can-do lists)." }, "span")}</li>` : ""}
        <li><span class="en en--gen legend-en">Our translation</span> — ${ui({ ja: "このサイトで作成した訳と説明。本には印刷されていません。", en: "Translations and explanations generated for this site; the book doesn't print them." }, "span")}</li>
      </ul>
      <h2>品詞と活用形のマーク <span class="en-inline">Part-of-speech & conjugation marks</span></h2>
      <table class="tbl">
        <tr><th>マーク</th><th>意味</th><th>例</th></tr>
        ${FORM_ROWS.map(([m, meaning, ex]) => `<tr><td>${fmt(m)}</td><td>${meaning}</td><td>${rubyMarkup(ex)}</td></tr>`).join("")}
      </table>
      <h3>普通形 <span class="en-inline">Plain forms</span></h3>
      <table class="tbl">
        <tr><th></th>${["{非過去|ひかこ} {肯定|こうてい}", "{非過去|ひかこ} {否定|ひてい}", "{過去|かこ} {肯定|こうてい}", "{過去|かこ} {否定|ひてい}"].map((h) => `<th>${rubyMarkup(h)}</th>`).join("")}</tr>
        ${PLAIN_ROWS.map((r) => `<tr>${r.map((c) => `<td>${rubyMarkup(c)}</td>`).join("")}</tr>`).join("")}
      </table>
      ${ui({ ja: "「[Pl] + 〜 [なAだ→な　Nだ→な]」のような書き方は、普通形につながるが、な形容詞と名詞の「だ」は「な」になる、という意味です。論文など硬い文章では「じゃ」の代わりに「では」を使います。", en: "A note like “[Pl] + … (なAだ→な, Nだ→な)” means the pattern attaches to plain forms, except that the non-past だ of na-adjectives/nouns changes to な (e.g. {静|しず}かなんです, {病気|びょうき}なんです). In formal writing, では replaces じゃ." }, "p", "tbl-note")}
    </div>`;
}

// front matter of the book (はじめに / この本をお使いになる皆さんへ / 先生方へ). N2 prints it in Japanese and English
export function aboutView() {
  const src = bookEnglish() ? "book" : "gen";
  const b2 = (o, tag, cls) => bi(o, tag, cls, { src });
  const block = (b) => {
    if (b.h) return `<h3 class="bi">${b.h.en ? enToggle() : ""}<span class="ja">${fmt(b.h.ja)}</span> <span class="en-inline">${fmt(b.h.en || "")}</span></h3>`;
    if (b.table) return `<table class="tbl">${b.table.head ? `<tr>${b.table.head.map((c) => `<th>${fmt(c)}</th>`).join("")}</tr>` : ""}${b.table.rows.map((r, i) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>${b.table.en && b.table.en[i] ? `<tr class="tbl-en"><td colspan="${r.length}">${en(b.table.en[i], src)}</td></tr>` : ""}`).join("")}</table>`;
    if (b.list) return `<ul class="front-list">${b.list.map((x) => `<li class="bi">${biInner(x, { src })}</li>`).join("")}</ul>`;
    if (b.mark) return `<div class="front-mark">${marks([b.mark])} ${b2(b.p)}</div>`;
    if (b.p) return b2(b.p, "p", "front-p");
    return "";
  };
  return `<div class="page about" data-en-scope><div class="page-tools">${enScopeBtn()}</div>${TRY.front.map((sec) => `<section class="front-sec" id="front-${esc(sec.id)}"><h1>${fmt(sec.title.ja)} <span class="en-inline">${fmt(sec.title.en || "")}</span></h1>${(sec.blocks || []).map(block).join("")}</section>`).join("")}</div>`;
}

export function indexView() {
  const rows = [];
  allPoints().forEach(({ g, ch }) => {
    const forms = [g.pattern].concat(g.index || [], (g.plus || []).map((p) => p.pattern));
    [...new Set(forms)].forEach((f) => rows.push({ f, g, ch }));
  });
  const key = (s) => plain(s).replace(/^[〜～\s]+/, "").replace(/^[NVAいな]+/, "");
  rows.sort((a, b) => key(a.f).localeCompare(key(b.f), "ja"));
  const meaning = (g) => g.usage && g.usage.en;
  return `<div class="page index-page">
      <h1>さくいん <span class="en-inline">Index</span></h1>
      <input class="search" id="idx-search" type="search" enterkeyhint="search" aria-label="検索 Search" placeholder="検索 Search: 〜につき, regardless, 限り …">
      <table class="tbl idx stack"><thead><tr><th>文型</th><th>番号</th><th>章</th><th class="en-col">Meaning${bookEnglish() ? "" : ' <span class="gen-tag">generated</span>'}</th></tr></thead><tbody>
      ${rows.map((r) => `<tr data-s="${esc((plain(r.f) + " " + plain(r.g.pattern) + " " + meaning(r.g) + " " + (r.g.index || []).join(" ")).toLowerCase())}">
        <td><a href="#/gp/${r.g.no}">${fmt(r.f)}</a></td><td data-h="番号">${r.g.no}</td><td data-h="章"><a href="#/ch/${r.ch.id}">${r.ch.id}</a></td><td class="en-col">${fmt(meaning(r.g))}</td></tr>`).join("")}
      </tbody></table></div>`;
}

export function compareView() {
  const intro = BOOK().id === "n2"
    ? { ja: "形が似ている文型を、N4・N3の文型も含めて並べました。違いに注意しましょう。", en: "Patterns that look alike — including related N4/N3 patterns you should already know — side by side. Pay attention to how they differ." }
    : { ja: "形が似ている文型を並べました。違いに注意しましょう。", en: "Patterns that look alike, side by side. Pay attention to how they differ." };
  return `<div class="page compare" data-en-scope>
      ${pageHead(`${fmt("{似|に}ている{文型|ぶんけい}リスト")} <span class="en-inline">Similar sentence patterns</span>`)}
      ${ui(intro)}
      ${TRY.compare.map((gr, gi) => `<section class="cmp-group" id="cmp-${gi}"><h2>${fmt(gr.key)}</h2>${gr.intro ? bi(gr.intro) : ""}<table class="tbl cmp stack">
        <thead><tr><th>文型</th><th>例文</th><th>レベル</th><th>番号</th></tr></thead><tbody>
        ${gr.items.map((it) => `<tr><td class="cmp-pat">${fmt(it.pattern)}</td><td class="bi">${it.ex ? biInner(it.ex) : ""}${en(it.note, "gen", "div", "cmp-note")}</td>
          <td><span class="lvl lvl-${esc(it.level)}">${esc(it.level)}</span></td><td ${it.no ? 'data-h="番号"' : ""}>${it.no ? `<a href="#/gp/${it.no}">${it.no}</a>` : ""}</td></tr>`).join("")}
        </tbody></table></section>`).join("")}
    </div>`;
}

export function canDoView() {
  return `<div class="page cando-page" data-en-scope>${pageHead("「できること」リスト <span class=\"en-inline\">Can-do list</span>")}
      <table class="tbl cando-tbl stack"><thead><tr><th>章</th><th>できること</th><th>文法項目</th></tr></thead><tbody>
      ${TRY.chapters.map((ch) => {
        const cds = (ch.canDo || []).concat(ch.parts.flatMap((p) => p.canDo || []));
        return `<tr><td><a href="#/ch/${ch.id}" class="cd-ch"><span class="cd-ch-n">${ch.id}</span></a><div class="small">${fmt(ch.genre.ja)}</div><b class="cd-ch-t">${fmt(ch.title.ja)}</b></td>
        <td>${cds.map((c) => `<div class="bi">${biInner(Object.assign({}, c, { ja: "● " + c.ja }), { book: true })}</div>`).join("")}</td>
        <td class="small">${chapterPoints(ch).map((g) => `<a class="cd-gp" href="#/gp/${g.no}"><b>${g.no}</b>${fmt(g.phrase || g.pattern)}</a>`).join("")}</td></tr>`;
      }).join("")}</tbody></table></div>`;
}

// ten choice items drawn from every practice and review; each links back to its point (or chapter)
let drillSeq = 0;
export function drillView() {
  const pool = [];
  // drawn items carry their source exercise's option labels (e.g. A/B judgement items)
  const add = (ex, g, ch) => ex.type === "choice" && ex.items.forEach((it) => pool.push({ it: ex.labels ? Object.assign({ labels: ex.labels }, it) : it, g, ch }));
  allPoints().forEach(({ g, ch }) => (g.practice || []).concat((g.plus || []).flatMap((p) => p.practice || []), (g.notes || []).flatMap((n) => n.practice || [])).forEach((ex) => add(ex, g, ch)));
  TRY.chapters.forEach((ch) => (ch.review || []).forEach((r) => add(r.ex, null, ch)));
  for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
  const ex = { type: "choice", items: pool.slice(0, 10).map((p) => Object.assign({}, p.it, { why: Object.assign({}, p.it.why, { ja: ((p.it.why && p.it.why.ja) || "") + (p.g ? ` ☞ [#${p.g.no}]` : ` ☞ 第${p.ch.id}章`) }) })) };
  const html = renderExercise(ex, "drill-" + ++drillSeq, "ランダム10問 <span class='en-inline'>10 random questions</span>").replace(/☞ \[#(\d+)\]/g, (m, n) => "☞ " + gpLink(+n));
  return `<div class="page drill" data-en-scope>${pageHead("ランダム練習 <span class=\"en-inline\">Random drill</span>")}
      ${ui({ ja: "全章の選択問題からランダムに10問出題します。", en: "Ten multiple-choice questions drawn at random from every chapter." })}
      ${pool.length ? html : "<p>No questions yet.</p>"}<p><a class="btn" href="#/drill" data-act="redrill">もう一度 <span class="en-inline">New set</span></a></p></div>`;
}
