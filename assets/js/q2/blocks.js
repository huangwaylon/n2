// Quartet II blocks (data/Q2-SCHEMA.md "Blocks"): every lesson section, brush-up unit and front-matter section is a list
// of typed blocks, rendered in book order. Interactive pieces (○×, choices, fill-in bubbles, compose) grade and save here.
import { ACT, $, $$, esc, isWide, progress, saveProgress, settings } from "../core.js";
import { cdBadge, en, enScopeBtn, enToggle, fmt, listenBtn, plain, speakBtn } from "../markup.js";
import { vtScrollInit } from "../content.js";

// ---------- text ----------
const norm = (t) => (t == null || t === "" ? null : typeof t === "string" ? { ja: t } : t);
// circled numbers ①–⑳ ㉑–㉟ (strategy and challenge numbers, printed circled)
export const circ = (n) => (n >= 1 && n <= 20 ? String.fromCodePoint(0x245f + n) : n >= 21 && n <= 35 ? String.fromCodePoint(0x3250 + n - 20) : String(n));
// the English under a Japanese line: the book's translation (grey) and ours (blue, "generated"); hidden until EN
const enLines = (o, tag = "div") => (o.ja ? en(o.en, "book", tag) : "") + en(o.tr, "gen", tag);
// a bilingual line in a .bi container with its EN button. English-only book text (explanations) is always visible.
export function line(t, cls = "", jaTag = "p") {
  const o = norm(t);
  if (!o) return "";
  if (!o.ja) return o.en ? `<div class="bk-en ${cls}">${fmt(o.en)}</div>` : `<div class="bi ${cls}">${enToggle()}${en(o.tr, "gen")}</div>`;
  const has = o.en || o.tr;
  return `<div class="bi ${cls}">${has ? enToggle() : ""}<${jaTag} class="ja">${fmt(o.ja)}</${jaTag}>${enLines(o)}</div>`;
}
// inline Text (headings, labels, cells): Japanese, then its English hidden until EN; English-only shows as is
export function inl(t) {
  const o = norm(t);
  if (!o) return "";
  if (!o.ja) return `<span class="bk-en">${fmt(o.en || o.tr)}</span>`;
  return `<span class="ja">${fmt(o.ja)}</span>${o.en ? en(o.en, "book", "span", "en-under") : ""}${o.tr ? en(o.tr, "gen", "span", "en-under") : ""}`;
}
const jaOf = (t) => (t == null ? "" : typeof t === "string" ? t : t.ja || "");
// POS letters of connection formulas in bold (V, N, いA, なA, A — as printed)
const POS_RE = /(^|[\s　＊*（(／/→]|\n)(いA|なA|V|N|A)(?![A-Za-z])/g;
const posFmt = (s) => fmt(String(s).replace(POS_RE, "$1⟦$2⟧")).replace(/⟦(.+?)⟧/g, '<b class="pos">$1</b>');

// ---------- speech queues ----------
// a track label ("1.Yomimono_L7-1") plays, with the browser's voice, the text that carries the same label
export const QUEUES = new Map();
const sayLines = (lines, dv = "f") => lines.filter((l) => l && jaOf(l)).map((l) => ({ text: plain(jaOf(l)).replace(/[❶-❿]/g, ""), v: l.v || dv }));
const audioBadge = (label) => (label ? `<span class="trk" data-trk="${esc(label)}"><span class="trk__i" aria-hidden="true">🎧</span>${esc(label)}</span>` : "");
// after a render: turn every track label whose text is on the page into a play button
export function wireTracks(root) {
  $$(".trk[data-trk]", root).forEach((t) => {
    const q = QUEUES.get(t.dataset.trk);
    if (!q || t.dataset.wired) return;
    t.dataset.wired = 1;
    t.outerHTML = `<span class="trk-w">${cdBadge(q, `${t.dataset.trk} を聞く`)}<span class="trk trk--l">${esc(t.dataset.trk)}</span></span>`;
  });
}

// ---------- block dispatch ----------
// ctx: { id: unique prefix for interactive items and anchors }
let seq = 0;
export function blocks(list, ctx = {}) {
  return (list || []).map((b) => block(b, ctx)).join("");
}
function block(b, ctx) {
  const f = B[b && b.t];
  if (!f) return `<p class="err">Unknown block ${esc(b && b.t)}</p>`;
  // a page marker where a block starts a new book page (once per page)
  const mark = b.page != null && !b.nopage && ctx.lastPage !== b.page;
  if (mark) ctx.lastPage = b.page;
  const html = f(b, ctx);
  return mark ? `<span class="pg" aria-hidden="true" data-p="${esc(b.page)}"></span>${html}` : html;
}
const idAttr = (b) => (b.id ? ` id="${esc(b.id)}"` : "");

export const SKILLS = {
  read: ["読む", "Reading", '<path d="M3 5.5q4.5-2 9 0v14q-4.5-2-9 0zM21 5.5q-4.5-2-9 0v14q4.5-2 9 0z"/>'],
  write: ["書く", "Writing", '<path d="M5 4h9M5 4v16h14V11"/><path d="M19.5 3.5l1 1-8 8-2 .6.6-2z"/>'],
  speak: ["話す", "Speaking", '<path d="M4 5h16v11H10l-4 4v-4H4z"/><path d="M8 9h8M8 12h6"/>'],
  listen: ["聞く", "Listening", '<path d="M7 9a5 5 0 0 1 10 0c0 3-2 4-3 5.5S13 18 11 19a3 3 0 0 1-3-2"/><path d="M10 9.5a2 2 0 0 1 4 0c0 1.2-1.3 1.6-1.3 2.8"/>'],
};
export const skillIcon = (s, cls = "") => (SKILLS[s] ? `<svg class="sk-ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SKILLS[s][2]}</svg>` : "");

const B = {
  // ----- structure -----
  head(b) {
    const s = b.style === "sq" && /^☛/.test(plain(typeof b.text === "object" && b.text ? b.text.ja || b.text.en : b.text)) ? "sq hd--pt" : b.style || "plain", tag = b.tag ? `<span class="hd-tag">${fmt(b.tag)}</span>` : "";
    const h = s === "band" ? "h2" : s === "label" ? "h4" : "h3";
    // a heading's printed English (p.041 上位語と下位語 Hypernyms and hyponyms) is part of the heading: always shown
    const o = b.text && typeof b.text === "object" && b.text.ja && b.text.en ? b.text : null;
    const t = o ? `<span class="ja">${fmt(o.ja)}</span> <span class="hd-en">${fmt(o.en)}</span>${o.tr ? en(o.tr, "gen", "span", "en-under") : ""}` : inl(b.text);
    return `<${h} class="hd hd--${s}"${idAttr(b)}>${b.icon ? skillIcon(b.icon) : ""}${tag}<span class="hd-t">${t}</span>${audioBadge(b.audio)}</${h}>`;
  },
  p: (b) => line(b.text, `qp${b.style ? " qp--" + b.style : ""}`),
  hr: () => `<hr class="q-hr">`,
  list(b) {
    const mark = b.mark || "・";
    return `<ul class="qlist" style="--mk:'${esc(mark)}'">${(b.items || []).map((it) => {
      const o = it && it.text !== undefined ? it : { text: it };
      return `<li>${line(o.text, "qlist__t")}${blocks(o.blocks)}</li>`;
    }).join("")}</ul>`;
  },
  qs(b, ctx) {
    return `<ol class="qs">${(b.items || []).map((it) => `<li class="qs__i">
        <span class="qs__n">${fmt(it.n || "")}</span>
        <div class="qs__b">${line(it.text, "qs__t")}
          ${it.words ? `<p class="qs__words ja-book">［${it.words.map((w) => `<span>${fmt(w)}</span>`).join("")}］</p>` : ""}
          ${blocks(it.blocks, ctx)}
          ${it.answer ? `<details class="ans"><summary>解答 <span class="en-inline">Answer</span></summary>${line(it.answer, "ans__t")}</details>` : ""}
        </div></li>`).join("")}</ol>`;
  },
  box(b, ctx) {
    const s = b.style || "gray";
    const icon = s === "attention" ? '<span class="qbox__ic" aria-hidden="true">💡</span>' : s === "task" ? '<span class="qbox__ic" aria-hidden="true">✎</span>' : "";
    const title = b.title ? `<div class="qbox__title">${icon}${inl(b.title)}${b.ref ? `<span class="qbox__ref">${fmt(b.ref)}</span>` : ""}</div>` : "";
    return `<div class="qbox qbox--${s}"${idAttr(b)}>${title}${blocks(b.blocks, ctx)}</div>`;
  },
  table(b) {
    const cell = (c, th) => {
      const o = c && typeof c === "object" && c.text !== undefined ? c : { text: c };
      const tag = th || o.head ? "th" : "td";
      return `<${tag}${o.colspan ? ` colspan="${o.colspan}"` : ""}${o.rowspan ? ` rowspan="${o.rowspan}"` : ""}${o.style ? ` class="c--${esc(o.style)}"` : ""}>${inl(o.text)}</${tag}>`;
    };
    return `<div class="qtbl-wrap"><table class="qtbl">${b.caption ? `<caption>${inl(b.caption)}</caption>` : ""}${b.head ? `<thead>${b.head.map((r) => `<tr>${r.map((c) => cell(c, true)).join("")}</tr>`).join("")}</thead>` : ""}
      <tbody>${(b.rows || []).map((r) => `<tr>${r.map((c) => cell(c)).join("")}</tr>`).join("")}</tbody></table></div>`;
  },
  words(b) {
    return `<div class="words"><span class="words__l">${fmt(b.label || "単語")}</span><span class="words__list">${(b.items || []).map((w) => `<span class="w"><span class="w__ja">${fmt(w.ja)}</span> <span class="w__en">${fmt(w.en || "")}</span></span>`).join("")}</span></div>`;
  },
  figure(b) {
    return `<figure class="qfig"><span class="qfig__tag">図 <span class="en-inline">figure</span></span>${b.labels && b.labels.length ? `<p class="qfig__labels ja">${b.labels.map((l) => `<span>${fmt(l)}</span>`).join("")}</p>` : ""}${b.desc ? `<figcaption class="gen-note">${fmt(b.desc)}<span class="gen-tag">generated</span></figcaption>` : ""}</figure>`;
  },
  chart(b) {
    return `<figure class="qchart">${b.title ? `<figcaption class="qchart__t">${inl(b.title)}${b.unit ? ` <span class="qchart__u">（${fmt(b.unit)}）</span>` : ""}</figcaption>` : ""}
      ${B.table({ head: b.head ? [b.head] : null, rows: b.rows })}${b.note ? line(b.note, "qchart__note") : ""}${b.desc ? `<p class="gen-note">${fmt(b.desc)}<span class="gen-tag">generated</span></p>` : ""}</figure>`;
  },

  // ----- texts -----
  reading: readingHtml,
  dialogue(b) {
    const q = sayLines(b.lines);
    if (b.audio) QUEUES.set(b.audio, q);
    const spw = Math.max(1, ...b.lines.map((l) => plain(l.sp || "").length));
    return `<div class="qdlg${b.style ? " qdlg--" + b.style : ""}"${idAttr(b)} data-en-scope>
      <div class="qdlg__tools">${enScopeBtn()}${b.audio ? cdBadge(q, "会話を聞く") : listenBtn(q, "会話を聞く")}</div>
      ${styleLab(b)}
      ${b.title ? `<h4 class="qdlg__title">${inl(b.title)}</h4>` : ""}
      ${b.setting ? line(b.setting, "qdlg__set") : ""}
      <div class="qdlg__rows ja-book" style="--spw:${spw + 0.5}em">${dlgRows(b.lines)}</div></div>`;
  },

  // ----- 話す -----
  roles(b) {
    return `<div class="roles">${styleLab(b)}<div class="roles__cards">${(b.cards || []).map((c, i) => `<div class="role${i ? "" : " role--a"}">
        <div class="role__h"><span class="role__tag">${fmt(c.tag)}</span><span class="role__who">${fmt(c.who)}</span></div>${roleText(c.text)}</div>`).join("")}</div></div>`;
  },
  flow(b) {
    return `<div class="flow">${b.head ? `<div class="flow__head"><span>${inl(b.head[0])}</span><span>${inl(b.head[1])}</span></div>` : ""}
      <ol class="flow__steps">${(b.steps || []).map((s) => `${s.phase ? `<li class="flow__phase">${inl(s.phase)}</li>` : ""}<li class="flow__s flow__s--${s.side === "b" ? "b" : "a"}">
        ${s.who || s.act ? `<p class="flow__who">${s.who ? `<b>${fmt(s.who)}</b>` : ""}${s.act ? `${s.who ? "：" : ""}${inl(s.act)}` : ""}</p>` : ""}
        ${s.label ? `<p class="flow__l">${s.n ? `<span class="step">${String.fromCodePoint(0x2775 + s.n)}</span>` : ""}${inl(s.label)}</p>` : ""}${line(s.text, "flow__t")}</li>`).join("")}</ol></div>`;
  },
  bubbles(b, ctx) {
    const id = `${ctx.id || "q"}-bb${seq++}`;
    return `<div class="bubbles" data-ex="${id}">${(b.items || []).map((it, i) => {
      let k = 0;
      const body = fmt(jaOf(it.text)).replace(/<span class="blank">[^<]*<\/span>/g, () => `<input class="bb-in" type="text" data-k="${k++}" aria-label="空欄${k}" autocomplete="off" autocapitalize="off" spellcheck="false">`);
      return `<div class="bubble" data-i="${i}" data-answer="${esc(JSON.stringify(it.answer || []))}">
        ${it.label ? `<p class="bubble__l">${inl(it.label)}</p>` : ""}<div class="bubble__b ja-book">${body}</div>${it.text && it.text.tr ? en(it.text.tr, "gen") : ""}
        <p class="bubble__ans" hidden>${(it.answer || []).map((a) => `<span>${fmt(a)}</span>`).join(" ／ ")}${it.choice ? `　｛${fmt(it.choice)}｝` : ""}</p></div>`;
    }).join("")}
      <div class="ex-actions"><button class="btn primary" data-act="bb-check">答え合わせ <span class="en-inline">Check</span></button><button class="btn" data-act="bb-show">答えを見る <span class="en-inline">Show answers</span></button>${b.from ? `<span class="dim small">（${fmt(b.from)}より）</span>` : ""}</div></div>`;
  },

  // ----- grammar notes, strategies -----
  note: noteHtml,
  sub: (b) => `<h4 class="gn-sub"${idAttr(b)}><span class="gn-sub__n">${fmt(String(b.n))}</span><span class="gn-sub__p">${fmt(b.pattern)}</span>${b.gloss ? `<span class="gn-gloss">〈${fmt(b.gloss)}〉</span>` : ""}${b.ref ? `<span class="gn-sub__r"><span class="gn-ref">${fmt(b.ref)}</span></span>` : ""}</h4>`,
  key(b) {
    return `<div class="gn-key ja-book">${(b.items || []).map((it) => exBody(it, "gn-key__i")).join("")}</div>`;
  },
  examples(b) {
    if (b.style === "rei") return `<div class="rei"><span class="rei__l">${fmt(b.label || "例）")}</span><div class="rei__items ja-book">${(b.items || []).map((it) => `<div class="rei__i"><span class="rei__m${it.mark === "×" ? " ng" : it.mark === "○" ? " ok" : ""}">${esc(it.mark || "")}</span>${exBody(it, "rei__b")}</div>`).join("")}</div></div>`;
    return `<ol class="gn-exs ja-book">${(b.items || []).map((it) => `<li class="gn-ex">${it.n != null ? `<span class="exno">${esc(it.n)}</span>` : ""}${exBody(it, "gn-ex__b")}<span class="gn-ex__tools">${speakBtn(it.lines ? it.lines.map((l) => l.ja).join("。") : it.ja, "data-small")}</span></li>`).join("")}</ol>`;
  },
  conn(b, ctx) {
    const forms = (b.forms || []).map((f) => (typeof f === "string" ? `<div class="fx1">${posFmt(f)}</div>`
      : `<div class="fxs"><span class="fxs__stack">${f.stack.map((l) => `<span>${posFmt(l)}</span>`).join("")}</span><span class="fxs__br" aria-hidden="true"></span><span class="fxs__join">${posFmt(f.join || "")}</span></div>`)).join("");
    return `<div class="gn-conn">${forms ? `<div class="gn-forms">${forms}</div>` : ""}<div class="gn-conn__b">${blocks(b.blocks, ctx)}</div></div>`;
  },
  strategy(b, ctx) {
    return `<section class="strat" id="st-${esc(b.no)}" data-en-scope>
      <header class="strat__h"><span class="strat__tag">読みのストラテジー ${circ(+b.no)}</span><span class="strat__tools">${enScopeBtn()}</span>
        <h3 class="strat__t"><span class="ja">${fmt(b.title)}</span> <span class="strat__en">${fmt(b.en || "")}</span></h3></header>
      ${blocks(b.blocks, ctx)}</section>`;
  },

  // ----- questions with the book's answers -----
  tf(b, ctx) {
    const id = `${ctx.id || "q"}-tf${seq++}`;
    return exWrap(id, (b.items || []).map((it, i) => `<div class="q tf-q" data-i="${i}">
        <div class="q-line"><span class="qs__n">${fmt(it.n || "")}</span>
          <span class="opts opts--tf" data-answer="${it.answer === "○" ? 0 : 1}"><button class="opt opt--tf" data-act="pick" data-j="0" aria-label="○ 合う">○</button><button class="opt opt--tf" data-act="pick" data-j="1" aria-label="× 合わない">×</button></span>
          ${line(it.text, "q-text")}</div></div>`).join(""));
  },
  choice(b, ctx) {
    const id = `${ctx.id || "q"}-ch${seq++}`;
    return exWrap(id, (b.items || []).map((it, i) => `<div class="q choice-q" data-i="${i}">
        ${it.text || it.n ? `<div class="q-line"><span class="qs__n">${fmt(it.n || "")}</span>${line(it.text, "q-text")}</div>` : ""}
        <div class="opts opts--row" data-answer="${it.answer}">${it.options.map((o, j) => `<button class="opt opt--row" data-act="pick" data-j="${j}">${fmt(o)}</button>`).join("")}</div></div>`).join(""));
  },
  match(b, ctx) {
    const id = `${ctx.id || "q"}-mt${seq++}`;
    const labs = b.rightLabels || b.right.map((_, j) => String(j + 1));
    return exWrap(id, `<ol class="mt-r ja-book">${b.right.map((r, j) => `<li><span class="qs__n">${fmt(labs[j])}</span>${line(r, "q-text")}</li>`).join("")}</ol>` +
      b.left.map((l, i) => `<div class="q choice-q" data-i="${i}"><div class="q-line"><span class="qs__n">${fmt((b.leftLabels || [])[i] || "")}</span>${line(l, "q-text")}</div>
        <div class="opts opts--row" data-answer="${b.answer[i]}">${labs.map((x, j) => `<button class="opt opt--row" data-act="pick" data-j="${j}">${fmt(x)}</button>`).join("")}</div></div>`).join(""));
  },
  script(b) {
    const q = sayLines(b.lines, b.v || "f");
    if (b.audio) QUEUES.set(b.audio, q);
    return `<details class="script"${idAttr(b)} data-en-scope><summary><span class="script__t">解答・スクリプト <span class="en-inline">Answers &amp; script</span></span>${b.audio ? `<span class="trk trk--l">${esc(b.audio)}</span>` : ""}</summary>
      <div class="script__tools">${enScopeBtn()}${cdBadge(q, "スクリプトを聞く")}</div>
      ${b.key ? `<div class="script__key"><p class="script__kh">■解答</p>${b.key.map((k) => `<p class="ja">${fmt(k)}</p>`).join("")}</div>` : ""}
      ${b.intro ? line(b.intro, "script__intro") : ""}
      <div class="qdlg__rows ja-book" style="--spw:${Math.max(1, ...b.lines.map((l) => plain(l.sp || "").length)) + 0.5}em">${dlgRows(b.lines)}</div></details>`;
  },
  compose(b, ctx) {
    const id = `${ctx.id || "q"}-cp`;
    progress.texts = progress.texts || {};
    const v = progress.texts[id] || "";
    return `<div class="compose"><label class="compose__l" for="${id}">作文 <span class="en-inline">Your composition (saved in this browser)</span></label>
      <textarea id="${id}" class="compose__ta ja-book" data-compose="${id}" data-min="${b.min || 0}" data-max="${b.max || 0}" rows="10" lang="ja">${esc(v)}</textarea>
      <p class="compose__n" aria-live="polite"><span data-count="${id}">${countChars(v)}</span> 字${b.min || b.max ? `（${b.min || ""}〜${b.max || ""}字）` : ""}</p></div>`;
  },
};

// casual / formal marker of a conversation (styleLabel: the book's own wording, e.g. フォーマルなディスカッション)
const styleLab = (b) => (b.style || b.styleLabel ? `<p class="qdlg__style">${b.style === "casual" ? "👕" : "👔"} ${fmt(b.styleLabel || (b.style === "casual" ? "カジュアルな会話" : "フォーマルな会話"))}</p>` : "");

// ---------- dialogue rows, example bodies ----------
// a role card's instructions are centred; a ［状況］ part after them is set flush left, its ・ items with a hanging indent (p.084)
const roleText = (t) => line(t, "role__t").replace(/<br>(［状況］)(.*?)<\/(span|p)>/s, (m, h, rest, tag) =>
  `</${tag}><${tag} class="ja role__sit"><span class="role__sh">${h}</span>${rest.split("<br>").filter(Boolean).map((x) => `<span class="role__li">${x}</span>`).join("")}</${tag}>`);
function dlgRows(lines) {
  return (lines || []).map((l) => {
    const o = norm(l) || {};
    const body = `<div class="qdlg__say"><span class="ja">${fmt(o.ja)}</span>${enLines(o)}</div>`;
    return l.sp ? `<div class="qdlg__row bi">${o.en || o.tr ? enToggle() : ""}<span class="qdlg__sp">${fmt(l.sp)}</span><span class="qdlg__c" aria-hidden="true">：</span>${body}</div>`
      : `<div class="qdlg__row qdlg__row--narr${/^＊[　 ]＊/.test(o.ja || "") ? " qdlg__row--sep" : ""} bi">${o.en || o.tr ? enToggle() : ""}${body}</div>`;
  }).join("");
}
// an example: one sentence, or lines with speakers
function exBody(it, cls) {
  if (it.lines) return `<div class="${cls} exd">${it.lines.map((l) => `<div class="exd__row bi">${l.en || l.tr ? enToggle() : ""}${l.sp ? `<span class="exd__sp">${fmt(l.sp)}</span><span class="exd__c">：</span>` : ""}<div class="exd__say"><span class="ja">${fmt(l.ja)}</span>${enLines(l)}</div></div>`).join("")}</div>`;
  const o = norm(it);
  if (it.sp) return `<div class="${cls} exd"><div class="exd__row bi">${o.en || o.tr ? enToggle() : ""}<span class="exd__sp">${fmt(it.sp)}</span><span class="exd__c">：</span><div class="exd__say"><span class="ja">${fmt(o.ja)}</span>${enLines(o)}</div></div></div>`;
  return `<div class="${cls} bi">${o.en || o.tr ? enToggle() : ""}<span class="ja">${fmt(o.ja)}</span>${enLines(o)}</div>`;
}

// ---------- grammar note ----------
function noteHtml(b, ctx) {
  const k = `n${ctx.lesson}-${b.no}`;
  return `<article class="gn" id="gn-${esc(b.no)}" data-en-scope>
    <header class="gn-h">${b.star ? '<span class="gn-star" title="★ 使えるようになるべき文型・表現 (items to master for output)" aria-label="★">★</span>' : ""}<span class="gn-no">${esc(b.no)}.</span>
      <h3 class="gn-pat">${fmt(b.pattern)}</h3>${b.gloss ? `<span class="gn-gloss">〈${fmt(b.gloss)}〉</span>` : ""}
      <span class="gn-h__r">${b.ref ? `<span class="gn-ref">${fmt(b.ref)}</span>` : ""}${enScopeBtn()}</span></header>
    ${blocks(b.blocks, ctx)}
    <footer class="gp-foot"><label class="studied"><input type="checkbox" data-act="studied" data-no="${k}" ${progress.studied[k] ? "checked" : ""}><span class="studied__box" aria-hidden="true"></span>学習済み <span class="en-inline">Studied</span></label></footer>
  </article>`;
}

// ---------- reading texts ----------
// lines: one string per printed line (column); ¶ paragraph start, # title, @ byline, = centred; a number = page break
const verticalOn = () => settings.vertical === "v" || (settings.vertical !== "h" && isWide());
function readingHtml(b, ctx) {
  const nums = b.numbers !== false, V = !!b.vertical && verticalOn();
  const paras = [];
  let n = (b.start || 1) - 1, cur = null, pg = null; // start: first line number (a profile box continues the text's)
  const mark = (no) => (nums ? `<span class="ln" data-n="${no}"></span>` : "");
  const open = (kind) => { cur = { kind, html: "", first: n }; paras.push(cur); };
  (b.lines || []).forEach((raw) => {
    if (typeof raw === "number") { pg = raw; return; }
    // a figure / chart / table printed between paragraphs (not a text line)
    if (raw && typeof raw === "object") { paras.push({ kind: "fig", html: blocks([raw.fig || raw], ctx), first: n }); cur = null; return; }
    n++;
    let s = String(raw), kind = null, centred = false;
    const pm = pg != null ? `<span class="pg" aria-hidden="true" data-p="${pg}"></span>` : "";
    pg = null;
    if (s[0] === "¶") { kind = "p"; s = s.slice(1); }
    else if (s[0] === "#") { kind = "title"; s = s.slice(1); if (s[0] === "=") { s = s.slice(1); centred = true; } } // #= centred title
    else if (s[0] === "@") { kind = "by"; s = s.slice(1); }
    else if (s[0] === "=") { kind = "center"; s = s.slice(1); }
    if (kind || !cur) { open(kind || "p"); cur.q = /^(\*\*)?──/.test(s); cur.c = centred; } // interviewer's ── line: set flush, no indent
    let html;
    if (kind === "title" && s.includes("@")) { const [t, by] = s.split("@"); html = `${fmt(t, { vertical: V })}<span class="rd-by rd-by--in">${fmt(by, { vertical: V })}</span>`; }
    else html = fmt(s, { vertical: V });
    if (kind === "title") html = html.replace(/^◆/, '<span class="acc">◆</span>'); // the book's blue ◆ heading mark (pp.100–107)
    // each printed line in a .bl span, with a break before continuation lines: kept where the screen holds the book's
    // lines (placeLineNos checks), so lines and line numbers are the book's; phones reflow the paragraph
    cur.html += (kind || !cur.html ? "" : '<br class="bl-br">') + pm + mark(n) + `<span class="bl">${html}</span>`;
    cur.last = n;
  });
  // paragraph translations, one per ¶ paragraph
  let pi = 0;
  const roleAt = new Map((b.roles || []).map((r) => [r.from, r]));
  const say = [];
  const html = paras.map((p) => {
    if (p.kind !== "fig") say.push({ text: plain(p.html.replace(/<rt>.*?<\/rt>/g, "").replace(/<[^>]+>/g, "")), v: b.v || "f" });
    if (p.kind === "fig") return `<div class="rd-fig">${p.html}</div>`;
    if (p.kind === "title") return `<p class="rd-title${p.c ? " rd-title--c" : ""}">${p.html}</p>`;
    if (p.kind === "by") return `<p class="rd-by">${p.html}</p>`;
    if (p.kind === "center") return `<p class="rd-center">${p.html}</p>`;
    const tr = b.tr && b.tr[pi++];
    return `<div class="rd-p${p.q ? " rd-p--q" : ""} bi">${tr ? enToggle() : ""}<p class="ja">${p.html}</p>${en(tr, "gen", "div", "rd-en")}</div>`;
  });
  // roles: the bracketed paragraph labels beside a model composition (p.017: a bracket over lines from–to, the label
  // beside it); on phones the label sits above its paragraphs
  let body = "";
  for (let i = 0; i < paras.length; i++) {
    const role = roleAt.get(paras[i].first);
    if (!role) { body += html[i]; continue; }
    let inner = "";
    for (; i < paras.length; i++) { inner += html[i]; if ((paras[i].last || paras[i].first) >= role.to || roleAt.has(paras[i + 1] && paras[i + 1].first)) break; }
    body += `<div class="rd-grp"><div class="rd-grp__t">${inner}</div><div class="rd-role"><span class="rd-role__l">${fmt(role.label)}</span>${role.sub ? `<span class="rd-role__s">${fmt(role.sub)}</span>` : ""}</div></div>`;
  }
  if (b.audio) QUEUES.set(b.audio, say);
  const credit = (b.credit || []).map((c) => `<p class="rd-credit">${fmt(c, { vertical: V })}</p>`).join("");
  const seg = b.vertical ? `<div class="seg" role="group" aria-label="縦書き・横書き">${[["v", "縦", "Vertical"], ["h", "横", "Horizontal"]].map(([m, j, e]) =>
    `<button type="button" class="seg__b" data-act="q2vmode" data-v="${m}" aria-pressed="${(m === "v") === V}" title="${e}">${j}</button>`).join("")}</div>` : "";
  const head = b.style === "profile" ? (b.title ? `<header class="rd-h rd-h--profile"><span class="rd-h__t">${inl(b.title)}</span></header>` : "") : b.title || b.tag ? `<header class="rd-h">${b.tag !== false && b.n ? `<span class="rd-h__tag">${skillIcon("read")}読み物${esc(b.n)}</span>` : ""}${b.title ? `<span class="rd-h__t">${inl(b.title)}${b.titleTr ? en(b.titleTr, "gen", "span", "en-under") : ""}</span>` : ""}${b.author ? `<span class="rd-h__by">${fmt(b.author)}</span>` : ""}${audioBadge(b.audio)}</header>` : "";
  const text = `<div class="rd-body ja-book${nums ? " rd-body--nums" : ""}">${body}${V ? credit : ""}</div>`;
  return `<section class="rd${V ? " rd--v" : ""}${b.style ? " rd--" + esc(b.style) : ""}${b.roles ? " rd--model" : ""}"${idAttr(b)} data-en-scope>
    ${head}<div class="rd-tools">${seg}${enScopeBtn()}${b.audio && head ? "" : b.audio ? cdBadge(say, "音声を聞く") : listenBtn(say)}</div>
    ${V ? `<div class="vt-scroll rd-scroll" tabindex="0" role="region" aria-label="本文（縦書き）">${text}</div>` : text}
    ${V ? "" : credit}
  </section>`;
}
ACT.q2vmode = (t) => {
  settings.vertical = (t.dataset.v === "v") === isWide() ? "auto" : t.dataset.v;
  document.dispatchEvent(new Event("try:setting-vertical"));
};

// book line breaks where they fit: every printed line on one line (one column in 縦書き) → .rd-body--book; a 縦書き text
// then gets a scroller exactly as tall as its longest column. Otherwise (narrow screens) the paragraphs reflow.
const lineCount = (el, vert) => new Set([...el.getClientRects()].map((r) => Math.round((vert ? r.right : r.top) / 8))).size;
function fitBookLines(body) {
  const sc = body.closest(".rd-scroll"), vert = getComputedStyle(body).writingMode.startsWith("vertical");
  body.classList.add("rd-body--book");
  body.style.fontSize = "";
  if (sc) sc.style.height = `${Math.max(innerHeight * 0.8, sc.clientHeight)}px`;
  const lines = $$(".bl", body), fits = () => lines.length && !lines.some((l) => lineCount(l, vert) > 1);
  // a text printed in small type (interviews) may need a slightly smaller size to keep the book's lines (not below 15px)
  for (let fs = parseFloat(getComputedStyle(body).fontSize); !fits() && !vert && fs * 0.95 >= 15; ) body.style.fontSize = `${(fs *= 0.95)}px`;
  if (!fits()) {
    body.classList.remove("rd-body--book");
    body.style.fontSize = "";
    if (sc) { sc.style.height = ""; delete sc.dataset.fitH; vtScrollInit(false); }
    return;
  }
  if (sc && vert) {
    // the scroller as tall as the longest column; lines set flush with the column end (bylines, credits) count by length
    const top = body.getBoundingClientRect().top, pad = parseFloat(getComputedStyle(body).paddingTop), rg = document.createRange();
    let end = 0;
    [...lines, ...$$(".rd-credit", body)].forEach((el) => {
      rg.selectNodeContents(el);
      const r = rg.getBoundingClientRect();
      end = Math.max(end, el.closest(".rd-by, .rd-credit, .rd-center") ? r.height + pad : r.bottom - top);
    });
    sc.style.height = `${Math.ceil(end + parseFloat(getComputedStyle(body).fontSize))}px`;
  }
}

// line numbers (every 5th, and 1) and page marks in the gutter, at the height (column) where the book's line starts
export function placeLineNos(root) {
  $$(".rd-body", root).forEach((body) => { if (body.getClientRects().length) fitBookLines(body); });
  $$(".rd-body--nums", root).forEach((body) => {
    $$(".ln-no", body).forEach((x) => x.remove());
    if (!body.getClientRects().length) return;
    const vert = getComputedStyle(body).writingMode.startsWith("vertical");
    const R = body.getBoundingClientRect();
    let last = -1e9;
    $$(".ln", body).forEach((m) => {
      const k = +m.dataset.n;
      if (k !== 1 && k % 5) return;
      const r = m.getClientRects()[0];
      if (!r) return;
      const pos = vert ? r.left + r.width / 2 - R.left : r.top - R.top;
      if (Math.abs(pos - last) < 8) return;
      last = pos;
      const el = document.createElement("span");
      el.className = "ln-no";
      el.textContent = k;
      el.setAttribute("aria-hidden", "true");
      if (vert) el.style.left = `${pos + body.scrollLeft}px`; else el.style.top = `${pos}px`;
      body.append(el);
    });
  });
}

// ---------- interactive: ○× and choices (graded like the TRY exercises), bubbles, compose ----------
function exWrap(id, body) {
  const sc = progress.scores[id];
  return `<section class="exercise q2ex" data-ex="${id}"><div class="ex-body">${body}</div>
    <div class="ex-actions"><button class="btn primary" data-act="grade">答え合わせ <span class="en-inline">Check answers</span></button>
    <button class="btn" data-act="reset">リセット <span class="en-inline">Reset</span></button><span class="ex-result" aria-live="polite"></span>
    <span class="score-chip${sc && sc.c === sc.t ? " full" : ""}"${sc ? "" : " hidden"}>${sc ? `${sc.c}/${sc.t}` : ""}</span></div></section>`;
}
// lenient comparison for typed answers: no spaces, punctuation or furigana
const loose = (s) => plain(s).normalize("NFKC").replace(/[\s、。，．,.!！?？「」『』（）()…・〜～ー-]/g, "");
ACT["bb-check"] = (t) => {
  const box = t.closest(".bubbles");
  $$(".bubble", box).forEach((bb) => {
    const ans = JSON.parse(bb.dataset.answer);
    $$(".bb-in", bb).forEach((inp) => {
      const a = ans[+inp.dataset.k];
      const ok = a != null && loose(inp.value) && loose(a).includes(loose(inp.value)) && loose(inp.value).length >= loose(a).length * 0.6;
      inp.classList.toggle("ok", !!ok); inp.classList.toggle("ng", !ok);
    });
    $(".bubble__ans", bb).hidden = false;
  });
};
ACT["bb-show"] = (t) => $$(".bubble__ans", t.closest(".bubbles")).forEach((x) => (x.hidden = false));
const countChars = (s) => String(s || "").replace(/\s/g, "").length;
document.addEventListener("input", (e) => {
  const ta = e.target.closest && e.target.closest("[data-compose]");
  if (!ta) return;
  progress.texts = progress.texts || {};
  progress.texts[ta.dataset.compose] = ta.value;
  const c = countChars(ta.value), n = $(`[data-count="${ta.dataset.compose}"]`);
  if (n) { n.textContent = c; n.parentNode.classList.toggle("over", +ta.dataset.max > 0 && c > +ta.dataset.max); }
  clearTimeout(ta._t); ta._t = setTimeout(saveProgress, 400);
});
