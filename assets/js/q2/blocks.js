// Quartet blocks, both books (q1, q2; data/Q2-SCHEMA.md "Blocks"): every lesson section, brush-up unit and front-matter section is a list
// of typed blocks, rendered in book order. Interactive pieces (○×, choices, fill-in bubbles, compose) grade and save here.
import { ACT, BOOK, $, $$, esc, isWide, progress, saveProgress, settings, viewH } from "../core.js";
import { cdBadge, en, enScopeBtn, enToggle, fmt, listenBtn, otherBooksHtml, plain, speakBtn } from "../markup.js";
import { deepHtml, vtScrollInit } from "../content.js";

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
// ctx: { id: unique prefix for interactive items and anchors }; the exercise number counts per view, so an exercise
// keeps its id (the key of its saved score) whichever page was shown before
const seq = (ctx) => (ctx.seq = (ctx.seq || 0) + 1) - 1;
export function blocks(list, ctx = {}) {
  // a run of memo boxes (the outlines a–d of Q2 p.095) sits two to a row as printed
  let out = "", memo = "";
  for (const b of list || []) {
    if (b && b.t === "box" && b.style === "memo") { memo += block(b, ctx); continue; }
    if (memo) out += `<div class="qmemos">${memo}</div>`, memo = "";
    out += block(b, ctx);
  }
  return memo ? out + `<div class="qmemos">${memo}</div>` : out;
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
// the book's flowchart icon: a zigzag of three nodes on an accent tile
const FLOW_IC = '<svg class="hd-flow-ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="1" y="1" width="22" height="22" rx="4"/><path d="M7 17V8l10 8V7"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="7" r="2"/></svg>';
export const skillIcon = (s, cls = "") => (SKILLS[s] ? `<svg class="sk-ic ${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${SKILLS[s][2]}</svg>` : "");

// question numbers: "1）" "1." in the accent, circled ①–⑳ in ink and regular weight (Q1 p.018, Q2 pp.020–021), a bare
// "1" in a box (the brush-up units' items, Q2 pp.202, 212, 214)
const qn = (n) => `<span class="qs__n${/^[\u2460-\u2473]$/.test(n || "") ? " qs__n--c" : /^\d+$/.test(n || "") ? " qs__n--box" : ""}">${fmt(n || "")}</span>`;

const B = {
  // ----- structure -----
  head(b, ctx) {
    if (b.audio) (ctx.trks ||= new Set()).add(b.audio);
    const s = b.style === "sq" && /^☛/.test(plain(typeof b.text === "object" && b.text ? b.text.ja || b.text.en : b.text)) ? "sq hd--pt" : b.style || "plain", tag = b.tag ? `<span class="hd-tag">${fmt(b.tag)}</span>` : "";
    const h = s === "band" || s === "rule" ? "h2" : s === "label" ? "h4" : "h3";
    // a heading's printed English (p.041 上位語と下位語 Hypernyms and hyponyms) is part of the heading: always shown
    const o = b.text && typeof b.text === "object" && b.text.ja && b.text.en ? b.text : null;
    const t = o ? `<span class="ja">${fmt(o.ja)}</span> <span class="hd-en">${fmt(o.en)}</span>${o.tr ? en(o.tr, "gen", "span", "en-under") : ""}` : inl(b.text);
    // flow: the フローチャート heading, the same in 会話1 and 会話2 of every lesson of both books (Q1 pp.021, 027; Q2 pp.023, 029)
    const ic = s === "flow" ? FLOW_IC : b.icon ? skillIcon(b.icon) : "";
    return `<${h} class="hd hd--${s}"${idAttr(b)}>${ic}${tag}<span class="hd-t">${t}</span>${audioBadge(b.audio)}</${h}>`;
  },
  p: (b) => line(b.text, `qp${b.style ? " qp--" + b.style : ""}`),
  hr: () => `<hr class="q-hr">`,
  list(b, ctx) {
    const mark = b.mark || "・";
    return `<ul class="qlist" style="--mk:'${esc(mark)}'">${(b.items || []).map((it) => {
      const o = it && it.text !== undefined ? it : { text: it };
      return `<li>${line(o.text, "qlist__t")}${blocks(o.blocks, ctx)}</li>`;
    }).join("")}</ul>`;
  },
  qs(b, ctx) {
    return `<ol class="qs">${(b.items || []).map((it) => `<li class="qs__i">
        ${qn(it.n)}
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
    // memo: its label a.（　） above a dog-eared sheet (Q2 p.095)
    if (s === "memo") return `<div class="qmemo"${idAttr(b)}>${title}<div class="qmemo__b">${blocks(b.blocks, ctx)}</div></div>`;
    return `<div class="qbox qbox--${s}"${idAttr(b)}>${title}${blocks(b.blocks, ctx)}</div>`;
  },
  table(b) {
    // align / headAlign: the book's alignment of body / head cells, one value for all or one per column (p.107 centres
    // only its last two columns); a cell's own style overrides it. Columns are counted through colspan / rowspan.
    const al = (a, i) => (Array.isArray(a) ? a[i] : a) || "";
    const grid = (rows, a) => {
      const taken = [];
      return rows.map((r, ri) => {
        let col = 0;
        return r.map((c) => {
          const o = c && typeof c === "object" && c.text !== undefined ? c : { text: c };
          while ((taken[ri] || [])[col]) col++;
          const at = col, span = o.colspan || 1;
          for (let k = 1; k < (o.rowspan || 1); k++) for (let j = 0; j < span; j++) (taken[ri + k] ||= [])[at + j] = true;
          col += span;
          return { o, align: al(a, at) };
        });
      });
    };
    const cell = ({ o, align }, th) => {
      const tag = th || o.head ? "th" : "td";
      const st = (o.style || "").split(/\s+/).filter(Boolean);
      if (align && !st.some((x) => /^(center|right|left)$/.test(x))) st.push(align);
      return `<${tag}${o.colspan ? ` colspan="${o.colspan}"` : ""}${o.rowspan ? ` rowspan="${o.rowspan}"` : ""}${st.length ? ` class="${st.map((x) => "c--" + esc(x)).join(" ")}"` : ""}>${inl(o.text)}</${tag}>`;
    };
    const tr = (rows, a, th) => grid(rows, a).map((r) => `<tr>${r.map((c) => cell(c, th)).join("")}</tr>`).join("");
    return `<div class="qtbl-wrap"><table class="qtbl${b.stripe ? " qtbl--stripe" : ""}">${b.caption ? `<caption>${inl(b.caption)}</caption>` : ""}${b.head ? `<thead>${tr(b.head, b.headAlign, true)}</thead>` : ""}
      <tbody>${tr(b.rows || [], b.align)}</tbody></table></div>`;
  },
  words(b) {
    return `<div class="words"><span class="words__l">${fmt(b.label || "単語")}</span><span class="words__list">${(b.items || []).map((w) => `<span class="w"><span class="w__ja">${fmt(w.ja)}</span> <span class="w__en">${fmt(w.en || "")}</span></span>`).join("")}</span></div>`;
  },
  figure(b) {
    // a run of item labels "a.　チームワークを…" (a bar chart's rows, Q2 p.197) one per line; the other labels run on
    const item = (l) => /^[a-z][.．]　/.test(l), labs = (b.labels || []).map((l, i, a) => item(l) ? `${item(a[i - 1] || "") ? "" : '<span class="qfig__items">'}<span>${fmt(l)}</span>${item(a[i + 1] || "") ? "" : "</span>"}` : `<span>${fmt(l)}</span>`).join("");
    return `<figure class="qfig"><span class="qfig__tag">図 <span class="en-inline">figure</span></span>${labs ? `<p class="qfig__labels ja">${labs}</p>` : ""}${b.desc ? `<figcaption class="gen-note">${fmt(b.desc)}<span class="gen-tag">generated</span></figcaption>` : ""}</figure>`;
  },
  chart(b) {
    return `<figure class="qchart">${b.title ? `<figcaption class="qchart__t">${inl(b.title)}${b.unit ? ` <span class="qchart__u">（${fmt(b.unit)}）</span>` : ""}</figcaption>` : ""}
      ${B.table({ head: b.head ? [b.head] : null, rows: b.rows })}${b.note ? line(b.note, "qchart__note") : ""}${b.desc ? `<p class="gen-note">${fmt(b.desc)}<span class="gen-tag">generated</span></p>` : ""}</figure>`;
  },

  // ----- texts -----
  reading: readingHtml,
  dialogue(b, ctx) {
    // the track label is printed once, on the heading (1-3 モデル会話 3.Kaiwa_L1-1): a dialogue under a heading with the
    // same track has no second CD button
    const q = sayLines(b.lines);
    if (b.audio) QUEUES.set(b.audio, q);
    const spw = Math.max(1, ...b.lines.map((l) => plain(l.sp || "").length));
    return `<div class="qdlg${b.style ? " qdlg--" + b.style : ""}"${idAttr(b)} data-en-scope>
      <div class="qdlg__tools">${enScopeBtn()}${!b.audio ? listenBtn(q, "会話を聞く") : ctx.trks && ctx.trks.has(b.audio) ? "" : cdBadge(q, "会話を聞く")}</div>
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
    // one bubble per step; a lead's name / action ("あなた：できごとを話す") as a pill above its first bubble; bracketed
    // phases (話し始める / できごとを話す / 話をまとめる) as a bracket with a vertical tab on the right (p.093); labels: several
    // label-only steps printed in one bubble (Q1 p.027 ❸ コメントをする / ❹ くわしく聞く)
    const one = !(b.steps || []).some((s) => s.side === "b");
    const step = (s) => `${s.who || s.act ? `<li class="flow__pill flow__pill--${s.side === "b" ? "b" : "a"}">${s.who ? `<b>${fmt(s.who)}</b>` : ""}${s.act ? `${s.who ? "：" : ""}${inl(s.act)}` : ""}</li>` : ""}<li class="flow__s flow__s--${s.side === "b" ? "b" : "a"}">
        ${(s.labels || (s.label ? [s] : [])).map((x) => `<p class="flow__l">${x.n ? `<span class="step">${String.fromCodePoint(0x2775 + x.n)}</span>\u2060` : ""}${inl(x.label)}</p>`).join("")}${line(s.text, "flow__t")}</li>`;
    const groups = [];
    (b.steps || []).forEach((s) => { if (s.phase || !groups.length) groups.push({ phase: s.phase, steps: [] }); groups[groups.length - 1].steps.push(s); });
    const body = groups.some((g) => g.phase)
      ? groups.map((g) => g.phase ? `<li class="flow__g"><ol class="flow__gs">${g.steps.map(step).join("")}</ol><div class="flow__ph"><span>${inl(g.phase)}</span></div></li>` : g.steps.map(step).join("")).join("")
      : groups.map((g) => g.steps.map(step).join("")).join("");
    return `<div class="flow${one ? " flow--one" : ""}">${b.head ? `<div class="flow__head"><span>${inl(b.head[0])}</span><span>${inl(b.head[1])}</span></div>` : ""}
      <ol class="flow__steps">${body}</ol></div>`;
  },
  bubbles(b, ctx) {
    const id = `${ctx.id || "q"}-bb${seq(ctx)}`;
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
    // a join that wraps on phones keeps "（だろう）か" together (word joiner; p.180). side: a bullet begun beside the formula
    // box keeps its column below the box (Q1 p.009, p.142); otherwise its lines run on under the box (Q1 p.010, Q2 p.009)
    // a stack: alternatives in a brace, after a shared lead ("N から｛みると／すると／いうと｝", p.179: the brace opens
    // towards the stack) and / or before a shared join ("｛Vる／Nの｝たび（に）": the brace closes towards the join)
    const forms = (b.forms || []).map((f) => (typeof f === "string" ? `<div class="fx1">${posFmt(f)}</div>`
      : `<div class="fxs${f.lead ? " fxs--lead" : ""}">${f.lead ? `<span class="fxs__lead">${posFmt(f.lead)}</span><span class="fxs__br fxs__br--open" aria-hidden="true"></span>` : ""}<span class="fxs__stack">${f.stack.map((l) => `<span>${posFmt(l)}</span>`).join("")}</span>${f.join || !f.lead ? `<span class="fxs__br" aria-hidden="true"></span><span class="fxs__join">${posFmt(f.join || "").replace(/）(?=[ぁ-ん])/g, "）\u2060")}</span>` : ""}</div>`)).join("");
    return `<div class="gn-conn${b.side ? " gn-conn--side" : ""}">${forms ? `<div class="gn-forms">${forms}</div>` : ""}<div class="gn-conn__b">${blocks(b.blocks, ctx)}</div></div>`;
  },
  strategy(b, ctx) {
    return `<section class="strat" id="st-${esc(b.no)}" data-en-scope>
      <header class="strat__h"><span class="strat__tag">読みのストラテジー ${circ(+b.no)}</span><span class="strat__tools">${enScopeBtn()}</span>
        <h3 class="strat__t"><span class="ja">${fmt(b.title)}</span> <span class="strat__en">${fmt(b.en || "")}</span></h3></header>
      ${blocks(b.blocks, ctx)}</section>`;
  },

  // ----- questions with the book's answers -----
  tf(b, ctx) {
    const id = `${ctx.id || "q"}-tf${seq(ctx)}`;
    return exWrap(id, (b.items || []).map((it, i) => `<div class="q tf-q" data-i="${i}">
        <div class="q-line">${qn(it.n)}
          <span class="opts opts--tf" data-answer="${it.answer === "○" ? 0 : 1}"><button class="opt opt--tf" data-act="pick" data-j="0" aria-label="○ 合う">○</button><button class="opt opt--tf" data-act="pick" data-j="1" aria-label="× 合わない">×</button></span>
          ${line(it.text, "q-text")}</div></div>`).join(""));
  },
  choice(b, ctx) {
    const id = `${ctx.id || "q"}-ch${seq(ctx)}`;
    return exWrap(id, (b.items || []).map((it, i) => inlineChoice(it, i) || `<div class="q choice-q" data-i="${i}">
        ${it.text || it.n ? `<div class="q-line">${qn(it.n)}${line(it.text, "q-text")}</div>` : ""}
        <div class="opts opts--row${b.list ? " opts--list" : ""}${b.list === "grid" ? " opts--2x2" : ""}" data-answer="${it.answer}">${it.options.map((o, j) => `<button class="opt opt--row" data-act="pick" data-j="${j}">${fmt(o)}</button>`).join("")}</div></div>`).join(""));
  },
  match(b, ctx) {
    const id = `${ctx.id || "q"}-mt${seq(ctx)}`;
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
      : `<div class="qdlg__row qdlg__row--narr${/^＊[　 ]?＊/.test(o.ja || "") ? " qdlg__row--sep" : ""} bi">${o.en || o.tr ? enToggle() : ""}${body}</div>`;
  }).join("");
}
// an example: one sentence, or lines with speakers
function exBody(it, cls) {
  // sub: the a) b) c) label of a line inside one numbered example (p.047); a speaker continuing with the next sub-label
  // is printed once (B: a) … / b) … p.111), so a repeated sp keeps its column but not its name
  if (it.lines) return `<div class="${cls} exd">${it.lines.map((l, i) => {
    const again = l.sub && i && it.lines[i - 1].sp === l.sp;
    return `<div class="exd__row bi">${l.en || l.tr ? enToggle() : ""}${l.sp ? `<span class="exd__sp">${again ? "" : fmt(l.sp)}</span><span class="exd__c">${again ? "" : "："}</span>` : ""}${l.sub ? `<span class="exd__sub">${esc(l.sub)})</span>` : ""}<div class="exd__say"><span class="ja">${fmt(l.ja)}</span>${enLines(l)}</div></div>`;
  }).join("")}</div>`;
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
    ${deepHtml(b.deepDive)}
    ${otherBooksHtml(`${BOOK().id}:${ctx.lesson}-${b.no}`)}
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
    if (kind || !cur) { open(kind || "p"); cur.q = /^(\*\*)?──/.test(s); cur.c = centred; cur.sec = /^(\*\*)?◆/.test(s); } // interviewer's ── line: set flush, no indent
    // speakers: true — a ¶ line "ゴミス：…" starts a speaker's turn; the name hangs left of the text, flush left (p.116);
    // speakers: "right" — the names set flush right, their colons in one column (p.102)
    let sp = "";
    if (b.speakers && kind === "p") { const m = s.match(/^([^：]{1,8})：/); if (m) { cur.sp = true; sp = `<span class="rd-sp">${fmt(m[1])}：</span>`; s = s.slice(m[0].length); } }
    let html;
    if (kind === "title" && s.includes("@")) { const [t, by] = s.split("@"); html = `${fmt(t, { vertical: V })}<span class="rd-by rd-by--in">${fmt(by, { vertical: V })}</span>`; }
    else html = fmt(s, { vertical: V });
    if (kind === "title") html = html.replace(/^◆/, '<span class="acc">◆</span>'); // the book's blue ◆ heading mark (pp.100–107)
    // each printed line in a .bl span, with a break before continuation lines: kept where the screen holds the book's
    // lines (placeLineNos checks), so lines and line numbers are the book's; phones reflow the paragraph
    cur.html += (kind || !cur.html ? "" : '<br class="bl-br">') + sp + pm + mark(n) + `<span class="bl">${html}</span>`;
    cur.last = n;
  });
  // paragraph translations, one per ¶ paragraph
  // headTr: our translation of each # title line, in order ("" = a title's continuation line, translated with the line before)
  let pi = 0, hi = 0;
  const roleAt = new Map((b.roles || []).map((r) => [r.from, r]));
  const say = [];
  let tt = "", ttr = ""; // a title and its translation, held while its continuation lines follow
  const html = paras.map((p, i) => {
    if (p.kind !== "fig") say.push({ text: plain(p.html.replace(/<rt>.*?<\/rt>/g, "").replace(/<[^>]+>/g, "")), v: b.v || "f" });
    if (p.kind === "fig") return `<div class="rd-fig">${p.html}</div>`;
    if (p.kind === "title") {
      const t = `<p class="rd-title${p.c ? " rd-title--c" : ""}${p.sec ? " rd-title--sec" : ""}">${p.html}</p>`, tr = b.headTr && b.headTr[hi++];
      if (tr) { tt = t; ttr = tr; } else if (ttr && tr === "") tt += t; else return t;
      if (paras[i + 1] && paras[i + 1].kind === "title" && b.headTr && b.headTr[hi] === "") return "";
      const out = `<div class="rd-t bi">${enToggle()}${tt}${en(ttr, "gen", "div", "rd-en rd-en--t")}</div>`;
      tt = ttr = "";
      return out;
    }
    if (p.kind === "by") return `<p class="rd-by">${p.html}</p>`;
    if (p.kind === "center") return `<p class="rd-center">${p.html}</p>`;
    const tr = b.tr && b.tr[pi++];
    // indent: false — the text's paragraphs start flush as printed (Q1 p.116 座談会 intro)
    return `<div class="rd-p${p.q ? " rd-p--q" : ""}${p.sp ? " rd-p--sp" : ""}${b.indent === false ? " rd-p--flush" : ""} bi">${tr ? enToggle() : ""}<p class="ja">${p.html}</p>${en(tr, "gen", "div", "rd-en")}</div>`;
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
  // style "email" (pp.034–035): the 差出人／宛先／件名／添付 lines on the window's grey header band, the rest in its framed body
  if (b.style === "email") {
    const isH = (p) => p.kind === "p" && /^(差出人|宛先|件名|添付)：/.test(plain(p.html.replace(/<rt>.*?<\/rt>/g, "").replace(/<[^>]+>/g, "")));
    const first = paras.findIndex(isH);
    let last = first;
    while (first >= 0 && last + 1 < paras.length && isH(paras[last + 1])) last++;
    if (first >= 0) body = html.slice(0, first).join("") + `<div class="rd-mail"><div class="rd-mail__h">${html.slice(first, last + 1).join("")}</div><div class="rd-mail__b">${html.slice(last + 1).join("")}</div></div>`;
  }
  if (b.audio) QUEUES.set(b.audio, say);
  const credit = (b.credit || []).map((c) => `<p class="rd-credit">${fmt(c, { vertical: V })}</p>`).join("");
  const seg = b.vertical ? `<div class="seg" role="group" aria-label="縦書き・横書き">${[["v", "縦", "Vertical"], ["h", "横", "Horizontal"]].map(([m, j, e]) =>
    `<button type="button" class="seg__b" data-act="q2vmode" data-v="${m}" aria-pressed="${(m === "v") === V}" title="${e}">${j}</button>`).join("")}</div>` : "";
  const head = b.style === "profile" ? (b.title ? `<header class="rd-h rd-h--profile"><span class="rd-h__t">${inl(b.title)}</span></header>` : "") : b.title || b.tag ? `<header class="rd-h">${b.tag !== false && b.n ? `<span class="rd-h__tag">${skillIcon("read")}読み物${esc(b.n)}</span>` : ""}${b.title ? `<span class="rd-h__t">${inl(b.title)}${b.titleTr ? en(b.titleTr, "gen", "span", "en-under") : ""}</span>` : ""}${b.author ? `<span class="rd-h__by">${fmt(b.author)}</span>` : ""}${audioBadge(b.audio)}</header>` : "";
  const text = `<div class="rd-body ja-book${nums ? " rd-body--nums" : ""}">${body}${V ? credit : ""}</div>`;
  const spw = b.speakers ? Math.max(...(b.lines || []).map((l) => (typeof l === "string" && l[0] === "¶" && (l.match(/^¶([^：]{1,8})：/) || [])[1]) || "").map((x) => plain(x).length)) + 1.4 : 0;
  return `<section class="rd${V ? " rd--v" : ""}${b.vertical ? " rd--tate" : ""}${b.style ? " rd--" + esc(b.style) : ""}${b.roles ? " rd--model" : ""}${spw ? " rd--sp" : ""}${b.speakers === "right" ? " rd--sp-r" : ""}"${idAttr(b)}${spw ? ` style="--spw:${spw}em"` : ""} data-en-scope>
    ${head}<div class="rd-tools">${seg}${enScopeBtn()}${b.audio && head ? "" : b.audio ? cdBadge(say, "音声を聞く") : listenBtn(say)}</div>
    ${V ? `<div class="vt-scroll rd-scroll" tabindex="0" role="region" aria-label="本文（縦書き）">${text}</div>` : text}
    ${V ? "" : credit}
  </section>`;
}
ACT.q2vmode = (t) => {
  settings.vertical = (t.dataset.v === "v") === isWide() ? "auto" : t.dataset.v;
  document.dispatchEvent(new CustomEvent("try:setting-vertical", { detail: t }));
};

// book line breaks where they fit: every printed line on one line (one column in 縦書き) → .rd-body--book; a 縦書き text
// then gets a scroller exactly as tall as its longest column. Otherwise (narrow screens) the paragraphs reflow.
const lineCount = (el, vert) => new Set([...el.getClientRects()].map((r) => Math.round((vert ? r.right : r.top) / 8))).size;
function fitBookLines(body) {
  const sc = body.closest(".rd-scroll"), vert = getComputedStyle(body).writingMode.startsWith("vertical");
  // a 縦書き text read 横: its printed lines are columns of ~15 characters, a narrow strip in a wide box, so it reflows
  if (!vert && body.closest(".rd--tate")) { body.classList.remove("rd-body--book"); body.style.fontSize = ""; return; }
  body.classList.add("rd-body--book");
  body.style.fontSize = "";
  if (sc) sc.style.height = `${Math.max(viewH() * 0.8, sc.clientHeight)}px`;
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

// an underline that wraps: its number goes under the start of the first line (p.009), not under the last line — an
// absolute box in a split inline is placed from the first fragment's left but the whole box's bottom (horizontal only)
export function placeRefNos(root) {
  $$(".ref > .ref-n", root).forEach((n) => {
    n.style.top = "";
    const u = n.parentElement, rs = u.getClientRects();
    if (rs.length < 2 || getComputedStyle(u).writingMode.startsWith("vertical")) return;
    const box = u.getBoundingClientRect();
    if (rs[0].bottom < box.bottom - 2) n.style.top = `${rs[0].bottom - box.top}px`;
  });
}
// line numbers (every 5th, and 1) and page marks in the gutter, at the height (column) where the book's line starts.
// all = false (the layout pass after a click, main.js queueFit): a reading whose box has the size it had after its last
// fit keeps its lines and numbers, since every fit test forces a layout of the whole page (~50 ms a click on a phone)
const fitSize = new WeakMap();
const sizeOf = (body) => `${body.offsetWidth}x${body.offsetHeight} ${body.parentElement.clientWidth}x${body.parentElement.clientHeight}`;
export function placeLineNos(root, all = true) {
  const todo = $$(".rd-body", root).filter((body) => all || !body.getClientRects().length || fitSize.get(body) !== sizeOf(body));
  // the fit test sets the book's breaks for a moment: scroll anchoring must not follow that transient layout (it moved
  // the reader's place when furigana were toggled on a phone)
  const html = document.documentElement, y = scrollY;
  html.style.overflowAnchor = "none";
  todo.forEach((body) => { if (body.getClientRects().length) fitBookLines(body); });
  if (Math.abs(scrollY - y) > 1) scrollTo(0, y);
  html.style.overflowAnchor = "";
  todo.filter((body) => body.classList.contains("rd-body--nums")).forEach((body) => {
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
  todo.forEach((body) => (body.getClientRects().length ? fitSize.set(body, sizeOf(body)) : fitSize.delete(body)));
}

// "【a. ぺらぺら　b. すらすら　c. ぼそぼそ】" in the sentence (brush-up units, Q1 p.208, Q2 p.210): the printed options
// are the buttons, tapped in place (spans with role="button" as TRY's inline choices, so the sentence wraps as text);
// null when the sentence has no such group of as many options, a. b. c. in order
function inlineChoice(it, i) {
  const o = norm(it.text), m = o && o.ja && o.ja.match(/【([^】]*)】/);
  if (!m) return null;
  const labs = [...m[1].matchAll(/(?:^|[\s　])([a-e])\.\s*/g)];
  if (labs.length !== it.options.length || labs.some((l, j) => l[1] !== "abcde"[j])) return null;
  const at = (l) => l.index + (/[\s　]/.test(l[0][0]) ? 1 : 0);
  const lead = m[1].slice(0, at(labs[0])), tail = m[1].slice(m[1].trimEnd().length);
  const opts = labs.map((l, j) => {
    const t = m[1].slice(l.index + l[0].length, j + 1 < labs.length ? labs[j + 1].index : m[1].trimEnd().length).replace(/[\s　]+$/, "");
    return `<span class="opt opt--inl${plain(t).length <= 8 ? " opt--nw" : ""}" role="button" tabindex="0" data-act="pick" data-j="${j}"><span class="opt-n">${l[1]}.</span>\u2060${fmt(t)}</span>`;
  });
  const grp = `【${esc(lead)}<span class="opts opts--inline" data-answer="${it.answer}">${opts.join('<span class="opt-sep">　</span>')}</span>${esc(tail)}】`;
  const html = line({ ...o, ja: o.ja.replace(m[0], "\uE000") }, "q-text").replace("\uE000", grp);
  return `<div class="q choice-q" data-i="${i}"><div class="q-line">${qn(it.n)}${html}</div></div>`;
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
