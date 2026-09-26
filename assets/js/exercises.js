// Exercises (docs/LAYOUT.md C18–C29): やってみよう, Check, まとめの問題, the random drill. Rendering, grading, input actions.
import { ACT, LETTERS, $, $$, esc, progress, saveProgress } from "./core.js";
import { cw } from "./ruby.js";
import { BLANK_HTML, cdBadge, en, enScopeBtn, fmt, pill, plain, speakBtn } from "./markup.js";

// Exercise numbers: "1）" in practice / Check (paren), a boxed "1" in まとめの問題 (box), none for single listening items
const qnHtml = (n, style) => (style === "none" ? "" : style === "box" ? `<span class="qn qn--box">${n}</span>` : `<span class="qn qn--paren">${n}）</span>`);
const exCount = (ex) => (ex.items || ex.blanks || ex.left || []).length;
// feedback shown after grading: our translation of the item and the why-explanation
const whyHtml = (w) => (w ? `<div class="why">${w.ja ? `<p>${fmt(w.ja)}</p>` : ""}${w.en ? `<p class="why-en en--gen">${fmt(w.en)}</p>` : ""}</div>` : "");
const feedback = (it, before = "") => `<div class="feedback">${before}${en(it.en, "gen", "p")}${whyHtml(it.why)}</div>`;

// option-grid columns (the book's 4 / 2 / 1) from the real width, so a short option never breaks inside a word
// ("にあるまじ／き"): data-w is the widest option in em
const optW = (options) => Math.round(Math.max(0, ...options.map((o) => cw(plain(o)))) * 100) / 100;
export function fitOptionCols(root) {
  $$(".opts--grid[data-w]:not(.opts--list)", root).forEach((g) => {
    const o = g.querySelector(".opt--grid"), t = o && o.querySelector(".opt-t");
    if (!t || !g.clientWidth) return;
    const fs = parseFloat(getComputedStyle(t).fontSize), gap = parseFloat(getComputedStyle(g).columnGap) || 0;
    const need = +g.dataset.w * fs + o.getBoundingClientRect().width - t.getBoundingClientRect().width + 2;
    g.style.setProperty("--cols", [4, 2].find((c) => c * need + (c - 1) * gap <= g.clientWidth) || 1);
  });
}

// id: the key of the saved score. title: HTML for the pill (null = no header). opts: bare (no frame; inside Check /
// review), numOffset (first item number − 1: Check groups continue numbering), review (boxed numbers; the instruction
// is rendered by reviewHtml)
export function renderExercise(ex, id, title, opts = {}) {
  if (!ex) return "";
  const o = Object.assign({ bare: false, numOffset: 0, review: false }, opts);
  const sc = progress.scores[id];
  const score = sc ? `<span class="score-chip ${sc.c === sc.t ? "full" : ""}">${sc.c}/${sc.t}</span>` : `<span class="score-chip" hidden></span>`;
  const c = { labels: ex.labels, num: o.review ? "box" : "paren", off: o.numOffset };
  const BODY = {
    choice: () => ex.items.map((it, i) => choiceItem(it, i, c)).join(""),
    write: () => ex.items.map((it, i) => writeItem(it, i, c)).join("") + (ex.bank ? `<div class="bank bank--static ja-book" aria-label="語群">${ex.bank.map((b) => `<span class="chip">${fmt(b)}</span>`).join("")}</div>` : ""),
    match: () => matchBody(ex, c),
    fill: () => fillBody(ex, c),
    order: () => ex.items.map((it, i) => orderItem(it, i, c)).join(""),
    passage: () => passageBody(ex, c),
    reading: () => readingBody(ex, c),
    listening: () => listeningBody(ex, c),
  };
  const body = BODY[ex.type] ? BODY[ex.type]() : `<p class="err">Unknown exercise type ${esc(ex.type)}</p>`;
  const p = ex.prompt;
  const showPrompt = p && !o.review && (!o.bare || !o.numOffset || (typeof p === "string" ? p : p.ja));
  const head = title ? `<div class="ex-head"><h4 class="ex-title">${pill(title)}</h4><span class="ex-ref">${score}${enScopeBtn()}</span></div>` : "";
  return `<section class="exercise ex-${ex.type}${o.bare ? " ex--bare" : ""}${o.review ? " ex--review" : ""}" data-ex="${id}"${title ? " data-en-scope" : ""}>
      ${head}
      ${showPrompt ? promptHtml(p) : ""}
      <div class="ex-body">${body}</div>
      <div class="ex-actions"><button class="btn primary" data-act="grade">答え合わせ <span class="en-inline">Check answers</span></button>
      <button class="btn" data-act="reset">リセット <span class="en-inline">Reset</span></button><span class="ex-result" aria-live="polite"></span>${title ? "" : score}</div>
    </section>`;
}

// instruction line; its English is shown by the container's EN button (no per-line button)
const promptHtml = (p) => (typeof p === "string" ? `<div class="ex-prompt"><p class="ja">${fmt(p)}</p></div>`
  : `<div class="ex-prompt">${p.ja ? `<p class="ja">${fmt(p.ja)}</p>` : ""}${en(p.en)}</div>`);

// labels: "abc" | "ab" | "123" | "ABC" | undefined (auto: 4+ options → numbers, else letters)
function optLabel(n, j, labels) {
  if (labels === "abc" || labels === "ab") return LETTERS[j];
  if (labels === "123") return j + 1;
  if (labels === "ABC") return LETTERS[j].toUpperCase();
  return n > 3 ? j + 1 : LETTERS[j];
}
const letterLabels = (n, labels) => /^(abc|ab|ABC)$/.test(labels || "") || (!labels && n <= 3);
const tagHtml = (tag) => (tag ? `<span class="opt-tag">${fmt(tag)}</span>` : "");
// a row of round label buttons (choices that are just "A" / "B", matching answers)
const letterRow = (n, label, answer, attrs = "", tag = "") =>
  `<div class="opts opts--letters" data-answer="${answer}"${attrs}>${tagHtml(tag)}${Array.from({ length: n }, (_, j) => `<button class="opt opt--let" data-act="pick" data-j="${j}"><span class="opt-n">${label(j)}</span></button>`).join("")}</div>`;
// mode: "inline" (a. … b. … inside the sentence's parentheses) | "grid" (4 / 2 / 1 columns by width) | "list" (1 column)
function optGroup(options, answer, labels, mode = "grid", tag) {
  const n = options.length;
  // inline options are spans with role="button", not <button>s: a button is always an atomic inline-block, so each
  // option was an unbreakable box that wrapped as a whole and stretched the sentence's line spacing
  if (mode === "inline") {
    return `<span class="opts opts--inline" data-answer="${answer}">（${options
      .map((o, j) => `<span class="opt opt--inl" role="button" tabindex="0" data-act="pick" data-j="${j}"><span class="opt-n">${optLabel(n, j, labels)}.</span>\u2060${fmt(o)}</span>`)
      .join('<span class="opt-sep">　</span>')}）</span>`;
  }
  if (options.every((o) => o === "")) return letterRow(n, (j) => optLabel(n, j, labels), answer, "", tag);
  return `<div class="opts opts--grid${mode === "list" ? " opts--list" : ""}" data-w="${optW(options)}" data-answer="${answer}">${tagHtml(tag)}${options
    .map((o, j) => {
      const L = optLabel(n, j, labels), isLetter = typeof L === "string";
      // letters are printed "a." as in the book's practice (N2 p.19); numbers stay in the round 1 2 3 4 of the review
      return `<button class="opt opt--grid" data-act="pick" data-j="${j}"><span class="opt-n${isLetter ? " opt-n--let" : ""}">${L}${isLetter ? "." : ""}</span><span class="opt-t">${fmt(o)}</span></button>`;
    })
    .join("")}</div>`;
}
const reEsc = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const PH_RE = /（[ 　]+）/g;
// c: { labels, num, off, mode } — mode "list" forces one column, "noinline" keeps the options out of the sentence
function choiceItem(it, i, c) {
  const labels = it.labels || c.labels; // an item drawn into the drill carries its own labels
  let qHtml = fmt(it.q || "");
  let inline = false;
  const opts0 = it.parts ? it.parts[0].options : it.options;
  if (it.q && c.mode !== "list" && c.mode !== "noinline" && letterLabels(opts0.length, labels) && (it.parts || it.options).length) {
    if (it.parts) {
      const res = it.parts.map((p) => new RegExp(`（[ 　]*${reEsc(p.tag)}[ 　]*）`, "g"));
      if (it.parts.every((p, k) => p.options.every((x) => x !== "") && (qHtml.match(res[k]) || []).length === 1)) {
        it.parts.forEach((p, k) => (qHtml = qHtml.replace(res[k], () => optGroup(p.options, p.answer, labels, "inline"))));
        inline = true;
      }
    } else if ((qHtml.match(PH_RE) || []).length === 1 && it.options.every((x) => x !== "")) {
      qHtml = qHtml.replace(PH_RE, () => optGroup(it.options, it.answer, labels, "inline"));
      inline = true;
    }
  }
  const mode = c.mode === "list" ? "list" : "grid";
  const groups = inline ? "" : it.parts ? it.parts.map((p, k) => optGroup(p.options, p.answer, labels, mode, p.tag || `(${k + 1})`)).join("") : optGroup(it.options, it.answer, labels, mode);
  const n = c.off + i + 1;
  return `<div class="q choice-q${inline ? " q--inline" : ""}" data-i="${i}">
      ${it.q ? `<div class="q-line">${qnHtml(n, c.num)}<div class="q-text ja-book">${qHtml}</div>${speakBtn(it.q, "data-small")}</div>` : qnHtml(n, c.num)}
      ${groups}
      ${feedback(it)}
    </div>`;
}

// matching halves: left items are choice questions answered with letter buttons; the right column mirrors the book
function matchBody(ex, c) {
  const L = (j) => (ex.labels === "ABC" ? LETTERS[j].toUpperCase() : LETTERS[j]);
  const ref = `<ol class="match__ref ja-book" aria-label="選択肢">${ex.right.map((r, j) => `<li><span class="opt-n">${L(j)}）</span><span class="match__rt">${fmt(r)}</span></li>`).join("")}</ol>`;
  const rows = Array.from({ length: Math.max(ex.left.length, ex.right.length) }, (_, i) => {
    const l = ex.left[i], r = ex.right[i], n = c.off + i + 1;
    const left = l == null ? `<div></div>` : `<div class="q choice-q match-q" data-i="${i}">
          <div class="q-line">${qnHtml(n, c.num)}<div class="q-text ja-book">${fmt(l)}</div><span class="match__dot" aria-hidden="true">・</span></div>
          ${letterRow(ex.right.length, L, ex.answer[i], ` role="group" aria-label="${n}の答え"`)}
          ${feedback({ en: ex.en && ex.en[i] }, `<p class="full ja-book">${fmt(l)}${fmt(ex.right[ex.answer[i]])}</p>`)}
        </div>`;
    const right = r == null ? "" : `<div class="match__r ja-book"><span class="match__dot" aria-hidden="true">・</span><span class="opt-n">${L(i)}）</span><span class="match__rt">${fmt(r)}</span></div>`;
    return `<div class="match__row">${left}<span class="match__gap" aria-hidden="true"></span>${right}</div>`;
  }).join("");
  return `<div class="match">${ref}${rows}</div>`;
}

// word bank: tap a blank to make it active, tap a bank word to fill it; items first, the bank box below them
function fillBody(ex, c) {
  const bank = `<div class="bank ja-book" role="group" aria-label="語群">${ex.bank.map((b, j) => `<button class="chip" data-act="bank" data-j="${j}">${fmt(b)}</button>`).join("")}</div>`;
  const items = ex.items.map((it, i) => {
    // answer: a string (one ＿＿, or a paired bank entry like "やら・やら" covering several ＿＿) or an array (one per ＿＿)
    const nBlanks = (it.q.match(/＿＿/g) || []).length;
    const paired = !Array.isArray(it.answer) && nBlanks > 1;
    const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
    let k = 0, full = it.q;
    const q = fmt(it.q).replaceAll(BLANK_HTML, () => {
      if (paired && k++ > 0) return '<span class="blank blank--mirror" aria-hidden="true"></span>';
      const n = paired ? 1 : ++k;
      return `<button class="blank" data-act="blank" data-answer="${ex.bank.indexOf(answers[paired ? 0 : n - 1])}" aria-label="空欄${nBlanks > 1 && !paired ? n : ""}"></button>`;
    });
    (paired ? it.answer.split("・") : answers).forEach((a) => (full = full.replace("＿＿", "**" + a + "**")));
    return `<div class="q fill-q" data-i="${i}"><div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book">${q}</div></div>
          ${feedback(it, `<p class="full ja-book">${fmt(full)}</p>`)}</div>`;
  }).join("");
  return items + bank;
}

// free-text answer; it.answer = accepted strings
const normAns = (s) => plain(s).replace(/[\s　、。・]/g, "");
function writeItem(it, i, c) {
  const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
  const inp = `<input class="write" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="答え">`;
  const q = fmt(it.q).replaceAll(BLANK_HTML, inp);
  return `<div class="q write-q" data-i="${i}" data-accept="${esc(JSON.stringify(answers.map(normAns)))}"><div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book">${q.includes("<input") ? q : q + " " + inp}</div></div>
      ${feedback(it, `<p class="full">答え：${answers.map(fmt).join(" ／ ")}</p>`)}</div>`;
}

// ★ ordering: four underline slots in the sentence, pieces in the option grid
function orderItem(it, i, c) {
  const slots = [0, 1, 2, 3].map((k) => `<button class="slot${k === it.star ? " slot--star" : ""}" data-act="unslot" data-k="${k}" aria-label="空欄${k + 1}${k === it.star ? "（★）" : ""}"></button>`).join("");
  const pieces = `<div class="opts opts--grid pieces" data-w="${optW(it.pieces)}">${it.pieces
    .map((p, j) => `<button class="opt opt--grid piece" data-act="piece" data-j="${j}"><span class="opt-n">${j + 1}</span><span class="opt-t">${fmt(p)}</span></button>`).join("")}</div>`;
  const starJ = it.order[it.star];
  const full = fmt(it.before) + it.order.map((j, k) => (k === it.star ? `<strong class="star-ans">${fmt(it.pieces[j])}</strong>` : fmt(it.pieces[j]))).join("") + fmt(it.after);
  return `<div class="q order-q" data-i="${i}" data-answer="${starJ}">
      <div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book order-line">${fmt(it.before)}<span class="slots">${slots}</span>${fmt(it.after)}</div></div>
      ${pieces}
      ${feedback(it, `<p class="full ja-book">${full}</p><p class="star-note">★ = ${starJ + 1}（${fmt(it.pieces[starJ])}）</p>`)}
    </div>`;
}

// passage in a dashed frame; [n] blanks become boxed numbers
function textBlock(title, paras, enParas) {
  return `<div class="passage ja-book" data-en-scope>
      <div class="passage__tools">${speakBtn(paras.join("\n"))}${enParas ? enScopeBtn("passage__en") : ""}</div>
      ${title ? `<h4 class="passage__title">${fmt(title)}</h4>` : ""}
      <div class="ja">${paras.map((p) => `<p${/^[「『]/.test(plain(p)) ? ' class="p--q"' : ""}>${fmt(p).replace(/[\[［](\d+)[\]］]([、。，．」』）！？…]*)/g, (m, n, pu) => `${pu ? '<span class="nobr">' : ""}<span class="pblank" data-b="${n}">${n}</span>${pu ? pu + "</span>" : ""}`)}</p>`).join("")}</div>
      ${enParas ? `<div class="en en--gen">${enParas.map((p) => `<p>${fmt(p)}</p>`).join("")}</div>` : ""}</div>`;
}
function passageBody(ex, c) {
  const num = c.num === "paren" ? "box" : c.num;
  const rows = ex.blanks
    .map((b, i) => `<div class="q choice-q pq-row" data-i="${i}" data-b="${i + 1}">${qnHtml(c.off + i + 1, num)}${optGroup(b.options, b.answer, ex.labels, "grid")}
        ${feedback(b)}</div>`)
    .join("");
  return textBlock(ex.title, ex.text, ex.en) + `<div class="pq">${rows}</div>`;
}
// options never go inline here; short ones sit in columns as in the book (N1 p.57: "1 店長が…　2 客が…")
const readingBody = (ex, c) => textBlock(ex.title, ex.text, ex.en) + ex.items.map((it, i) => choiceItem(it, i, Object.assign({}, c, { mode: "noinline" }))).join("");

// listening: the question isn't printed (it's heard); it opens the transcript and shows in the feedback.
// modes: task (question before and after the talk) · summary (question only after) · gist (nothing printed; question
// and choices heard after the talk) · response (one line, three spoken replies)
function listeningBody(ex, c) {
  let lastScript = [], lastEn = [];
  const resp = ex.mode === "response", gist = ex.mode === "gist";
  const spoken = resp || gist, summary = ex.mode === "summary" || gist;
  const num = ex.items.length === 1 && spoken ? "none" : c.num === "paren" ? "box" : c.num;
  return ex.items.map((it0, i) => {
    // an item without its own script reuses the previous one (one talk → several questions)
    const it = Object.assign({}, it0, { script: it0.script || lastScript, en: it0.script ? it0.en : it0.en || lastEn });
    lastScript = it.script; lastEn = it.en || [];
    const tEn = (k) => (it.en && it.en[k] ? en(it.en[k], "gen", "span") : "");
    const queue = [];
    if (it.question && !summary) queue.push({ text: plain(it.question), v: "f" });
    // don't re-speak a script line that just repeats the question (it's spoken before/after already)
    const qPlain = it.question ? plain(it.question).replace(/\s/g, "") : null;
    it.script.forEach((l) => { if (!(qPlain && !resp && plain(l.ja).replace(/\s/g, "") === qPlain)) queue.push({ text: plain(l.ja), v: l.v }); });
    if (it.question && !resp) queue.push({ text: (summary ? "しつもん。" : "") + plain(it.question), v: "f" });
    if (spoken) it.options.forEach((o, j) => queue.push({ text: `${j + 1}、${plain(o)}`, v: it.replyV || (it.script[0] && it.script[0].v === "m" ? "f" : "m") }));
    const script = it.script.map((l, k) => `<div class="sline">${l.sp ? `<span class="sp">${fmt(l.sp)}：</span>` : "<span></span>"}<span>${fmt(l.ja)}${tEn(k)}</span></div>`).join("");
    const qEn = en(it.questionEn, "gen", "span");
    const qLine = it.question && !resp ? `<div class="sline sline--q"><span class="sp">質問：</span><span>${fmt(it.question)}${qEn}</span></div>` : "";
    // en entries beyond the script lines translate the spoken choices
    const optsForScript = spoken ? `<div class="sline resp"><span></span><div>${it.options.map((o, j) => `<div>${j + 1}. ${fmt(o)}${tEn(it.script.length + j)}</div>`).join("")}</div></div>` : "";
    const opts = spoken
      ? `<div class="opts opts--resp" data-answer="${it.answer}">${it.options.map((_, j) => `<button class="opt opt--resp" data-act="pick" data-i="${i}" data-j="${j}" aria-label="${j + 1}"><span class="opt-n">${j + 1}</span></button>`).join("")}</div>`
      : optGroup(it.options, it.answer, "123", "grid");
    return `<div class="q choice-q listen-q${spoken ? " listen-q--resp" : ""}" data-i="${i}">
          <div class="lq-row${num === "none" ? " lq-row--nonum" : ""}">${qnHtml(c.off + i + 1, num) || "<span></span>"}${opts}${cdBadge(queue, `問題${c.off + i + 1}を聞く`)}</div>
          <details class="script"><summary>スクリプト <span class="en-inline">Transcript</span></summary><div class="dlg ja-book">${summary ? "" : qLine}${script}${summary ? qLine : ""}${optsForScript}</div></details>
          <div class="feedback">${it.question && !resp ? `<p class="lq-q">質問：${fmt(it.question)}${qEn}</p>` : ""}${whyHtml(it.why)}</div>
        </div>`;
  }).join("");
}

// Check frame: one dashed frame; each exercise inside is bare, numbering continues across the groups.
// Exercise ids (the keys of saved scores): idBase, idBase-1, idBase-2, …
export function checkHtml(checks, idBase) {
  const list = [].concat(checks || []).filter(Boolean);
  if (!list.length) return "";
  let off = 0;
  const inner = list.map((ex, k) => { const h = renderExercise(ex, `${idBase}${k ? "-" + k : ""}`, null, { bare: true, numOffset: off }); off += exCount(ex); return h; }).join("");
  return `<section class="check" data-en-scope>
      <span class="check__tag">Check<span class="check__book" aria-hidden="true"></span></span>
      <div class="check__tools">${enScopeBtn()}</div>
      ${inner}
    </section>`;
}

// review instruction: fmt() plus the book's inline visuals — boxed [1] and the ＿★＿ blank
const fmtInstr = (s) => fmt(s).replace(/[\[［](\d+)[\]］]/g, '<span class="pblank">$1</span>').replace(/(?:＿|__)★(?:＿|__)/g, '<span class="star-blank">★</span>');
function instrHtml(p) {
  const o = typeof p === "string" ? { ja: p } : p || {};
  if (!o.ja && !o.en) return "";
  return `<div class="rv__instr">${o.ja ? `<p class="ja">${fmtInstr(o.ja)}</p>` : ""}${en(o.en)}</div>`;
}
// まとめの問題. Sections repeating the same 問題N ("問題4 〈聴解〉 1/2") share one header and get numbered
// sub-instructions. Exercise ids: ch{id}-review-{k}
export function reviewHtml(ch) {
  if (!ch.review || !ch.review.length) return "";
  const secs = [];
  let cur = null;
  ch.review.forEach((r, k) => {
    const t = (r.title && r.title.ja) || "";
    const m = t.match(/^(問題\d+)\s*(〈.+?〉)\s*(\d)?\s*$/);
    const n = m ? m[1] : t, sub = m && m[3];
    const tEn = (r.title && r.title.en) || "";
    if (!cur || !m || cur.n !== n) {
      cur = { n, body: [], head: `<h3 class="rv__head">${pill(fmt(n))}<span class="rv__name">${fmt(m ? m[2] : "")}</span>${tEn ? `<span class="rv__en en-inline">${esc(sub ? tEn.replace(/\s*(—|\().*$/, "") : tEn)}</span>` : ""}<span class="rv__tools">${enScopeBtn()}</span></h3>` };
      secs.push(cur);
    }
    const exHtml = renderExercise(r.ex, `ch${ch.id}-review-${k}`, null, { bare: true, review: true });
    const instr = instrHtml(r.ex.prompt);
    cur.body.push(sub ? `<div class="rv-sub"><div class="rv-sub__line"><span class="rv-sub__n">${sub}</span>${instr}</div>${exHtml}</div>` : instr + exHtml);
  });
  return `<section class="review" id="review-${ch.id}">
      <div class="review__panel">
        <h2 class="review__title">まとめの問題 <span class="review__en">Review questions</span></h2>
        ${secs.map((s) => `<section class="rv" data-en-scope>${s.head}${s.body.join("")}</section>`).join("")}
      </div>
    </section>`;
}

// ---------- grading ----------
function gradeItem(q) {
  if (q.classList.contains("choice-q")) {
    return $$(".opts", q).map((g) => {
      const ans = g.dataset.answer, p = $(".opt.picked", g);
      $$(".opt", g).forEach((o) => {
        o.classList.toggle("right", o.dataset.j === ans);
        o.classList.toggle("wrong", o.classList.contains("picked") && o.dataset.j !== ans);
      });
      return !!p && p.dataset.j === ans;
    }).every(Boolean);
  }
  if (q.classList.contains("fill-q")) {
    const bs = $$("button.blank", q);
    bs.forEach((b) => { b.classList.toggle("right", b.dataset.v === b.dataset.answer); b.classList.toggle("wrong", b.dataset.v !== b.dataset.answer); });
    return bs.every((b) => b.dataset.v === b.dataset.answer);
  }
  if (q.classList.contains("write-q")) {
    const acc = JSON.parse(q.dataset.accept), vals = $$("input.write", q).map((x) => normAns(x.value));
    return vals.join("／") === acc[0] || acc.includes(vals.join(""));
  }
  if (q.classList.contains("order-q")) {
    const star = $(".slot--star", q);
    return star.dataset.j != null && star.dataset.j === String(q.dataset.answer);
  }
  return false;
}
function grade(sec) {
  const qs = $$(".q", sec);
  let c = 0;
  qs.forEach((q) => {
    const ok = gradeItem(q);
    if (ok) c++;
    q.classList.remove("ok", "ng");
    q.classList.add(ok ? "ok" : "ng", "graded");
  });
  $$("button.blank.active", sec).forEach((b) => b.classList.remove("active"));
  const full = c === qs.length;
  const res = $(".ex-result", sec);
  res.textContent = `${c} / ${qs.length}` + (full ? " 🎉" : "");
  res.className = "ex-result " + (full ? "full" : "");
  const chip = $(".score-chip", sec);
  if (chip) { chip.hidden = false; chip.textContent = `${c}/${qs.length}`; chip.classList.toggle("full", full); }
  // the random drill is not scored
  if (!sec.dataset.ex.startsWith("drill")) { progress.scores[sec.dataset.ex] = { c, t: qs.length }; saveProgress(); }
}
function clearSlot(s) {
  delete s.dataset.j;
  s.innerHTML = "";
  s.classList.remove("filled");
}
function clearBlank(b) {
  delete b.dataset.v;
  b.innerHTML = "";
  b.classList.remove("filled", "active", "right", "wrong");
}
function resetEx(sec) {
  $$(".q", sec).forEach((q) => q.classList.remove("ok", "ng", "graded"));
  $$(".opt", sec).forEach((o) => o.classList.remove("picked", "right", "wrong"));
  $$("input.write", sec).forEach((s) => (s.value = ""));
  $$("button.blank, .blank--mirror", sec).forEach(clearBlank);
  $$(".chip", sec).forEach((ch) => ch.classList.remove("used"));
  $$(".match__gap", sec).forEach((g) => (g.textContent = ""));
  $$(".pblank[data-b]", sec).forEach((b) => { b.textContent = b.dataset.b; b.classList.remove("filled"); });
  $$(".slot", sec).forEach(clearSlot);
  $$(".piece", sec).forEach((p) => (p.disabled = false));
  $(".ex-result", sec).textContent = "";
}
// mark bank words that are in use (a word can still be used again)
function syncChips(sec) {
  const used = new Set($$("button.blank[data-v]", sec).map((b) => b.dataset.v));
  $$(".chip", sec).forEach((ch) => ch.classList.toggle("used", used.has(ch.dataset.j)));
}
const graded = (t) => t.closest(".q").classList.contains("graded");

ACT.pick = (t) => {
  if (graded(t)) return;
  const q = t.closest(".q");
  $$(".opt", t.closest(".opts")).forEach((o) => o.classList.toggle("picked", o === t));
  // echo the choice where the book leaves room for it: matching gutter, passage blank
  const row = q.closest(".match__row");
  if (row) { const g = $(".match__gap", row); if (g) g.textContent = $(".opt-n", t).textContent; }
  if (q.dataset.b) {
    const pb = $(`.pblank[data-b="${q.dataset.b}"]`, q.closest(".exercise"));
    const txt = $(".opt-t", t);
    if (pb && txt) { pb.innerHTML = `${q.dataset.b}<span class="pblank__t">${txt.innerHTML}</span>`; pb.classList.add("filled"); }
  }
};
ACT.piece = (t) => {
  if (graded(t)) return;
  const slot = $$(".slot", t.closest(".q")).find((s) => s.dataset.j == null);
  if (!slot) return;
  slot.dataset.j = t.dataset.j;
  slot.innerHTML = `<span class="opt-n">${+t.dataset.j + 1}</span><span class="slot__t">${$(".opt-t", t).innerHTML}</span>`;
  slot.classList.add("filled");
  t.disabled = true;
};
ACT.unslot = (t) => {
  if (graded(t) || t.dataset.j == null) return;
  $(`.piece[data-j="${t.dataset.j}"]`, t.closest(".q")).disabled = false;
  clearSlot(t);
};
ACT.blank = (t) => {
  if (graded(t)) return;
  const sec = t.closest(".exercise");
  if (t.dataset.v != null) {
    clearBlank(t);
    $$(".blank--mirror", t.closest(".q")).forEach(clearBlank);
    syncChips(sec);
    return;
  }
  const was = t.classList.contains("active");
  $$("button.blank.active", sec).forEach((b) => b.classList.remove("active"));
  if (!was) t.classList.add("active");
};
ACT.bank = (t) => {
  const sec = t.closest(".exercise");
  const open = $$("button.blank", sec).filter((b) => !graded(b));
  const target = open.find((b) => b.classList.contains("active")) || open.find((b) => b.dataset.v == null);
  if (!target) return;
  const mirrors = $$(".blank--mirror", target.closest(".q"));
  const parts = t.innerHTML.split("・");
  target.dataset.v = t.dataset.j;
  // a paired entry ("やら・やら") fills the interactive blank and its mirrors part by part
  if (mirrors.length && parts.length === mirrors.length + 1) {
    target.innerHTML = parts[0];
    mirrors.forEach((m, k) => { m.innerHTML = parts[k + 1]; m.classList.add("filled"); });
  } else target.innerHTML = t.innerHTML;
  target.classList.add("filled");
  target.classList.remove("active");
  syncChips(sec);
};
ACT.grade = (t) => grade(t.closest(".exercise"));
ACT.reset = (t) => resetEx(t.closest(".exercise"));
