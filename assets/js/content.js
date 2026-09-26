// Chapter content (docs/LAYOUT.md C1–C17): chapter opener, can-do, mini table of contents, 見本文, grammar points.
import { ACT, BOOK, CIRCLED, TRY, $, $$, chapterPoints, esc, findChapter, pointRange, progress, settings, saveSettings, WIDE, isWide } from "./core.js";
import { bi, biInner, cdBadge, en, enScopeBtn, enSrc, enToggle, fmt, gpLink, pill, plain, prose, scenes, speakBtn, stars } from "./markup.js";
import { checkHtml, renderExercise, reviewHtml } from "./exercises.js";

// ---------- chapter ----------
const fwLabel = (label) => String(label || "").replace(/\(/g, "（").replace(/\)/g, "）");
const tocTab = (id, range, cls) => `<a class="ch-tab ${cls}" href="#/ch/${id}" data-act="toc" aria-label="この章の文法 ${range}">${range}</a>`;
function bannerHtml(ch, part, pi, range) {
  const lab = part && part.label ? part.label : "", h = pi ? "h2" : "h1";
  return `<header class="ch-banner${pi ? " ch-banner--part" : ""}"${pi ? "" : ` id="ch${ch.id}-top"`}>
      <div class="ch-banner__num" aria-hidden="true">${ch.id}</div>
      <div class="ch-banner__body">
        <p class="ch-banner__genre"><span class="ja">${fmt(ch.genre.ja)}</span> <span class="ch-banner__en">${esc(ch.genre.en)}</span></p>
        <${h} class="ch-banner__title"><span class="ja"><span class="sr-only">第${ch.id}章 </span>${fmt(ch.title.ja)}${lab ? `<span class="ch-banner__part">${esc(fwLabel(lab))}</span>` : ""}</span>
          <span class="ch-banner__en ch-banner__en--title">${esc(ch.title.en)}${lab ? " " + esc(lab) : ""}</span></${h}>
      </div>
      ${range ? tocTab(ch.id, range, "ch-tab--inline") : ""}
    </header>`;
}
const canDoHtml = (list) => (!list || !list.length ? "" : `<section class="cando" data-en-scope>
    <h2 class="cando__label">${pill("できること")}<span class="cando__tools">${enScopeBtn()}</span></h2>
    <ul class="cando__list">${list.map((c) => `<li class="bi">${biInner(c, { book: true, enTag: "span" })}</li>`).join("")}</ul>
  </section>`);
export function chapterView(id) {
  const ch = findChapter(id);
  if (!ch) return null;
  const idx = TRY.chapters.indexOf(ch), prev = TRY.chapters[idx - 1], next = TRY.chapters[idx + 1];
  const pts = chapterPoints(ch), range = pointRange(pts);
  const chips = ch.parts
    .map((p) => `${p.label && ch.parts.length > 1 ? `<span class="mt-part">${esc(p.label)}</span>` : ""}${p.points.map((g) => `<a href="#/gp/${g.no}" class="mt-gp"><span class="mt-gp__n">${g.no}</span><span class="mt-gp__t">${fmt(g.pattern)}</span></a>`).join("")}`)
    .join("") + (ch.review && ch.review.length ? `<a href="#/ch/${id}/review" class="mt-gp mt-review">まとめの問題</a>` : "");
  const miniToc = `<details class="mini-toc"${matchMedia("(min-width: 601px)").matches ? " open" : ""}><summary class="mini-toc__sum">この章の文法 ${range}<span class="mini-toc__n">（${pts.length}）</span></summary><nav class="mini-toc__chips" aria-label="この章の文法">${chips}</nav></details>`;
  const parts = ch.parts
    .map((p, pi) => `<section class="part" id="ch${id}-part${pi}">
        ${pi ? bannerHtml(ch, p, pi) : ""}
        ${canDoHtml(p.canDo)}
        ${sampleHtml(p.sample, id, pi)}
        ${p.points.map(gpCard).join("")}
        ${p.check ? checkHtml(p.check, `ch${id}-part${pi}-check`) : ""}
      </section>`)
    .join("");
  const pg = (c, dir, cls) => (c ? `<a class="${cls}" href="#/ch/${c.id}"><span class="pager__dir">${dir}</span><span class="pager__t">${c.id} ${fmt(c.title.ja)}</span></a>` : "<span></span>");
  return `<div class="chapter" style="--ch:${id}">
      ${bannerHtml(ch, ch.parts[0], 0, range)}
      ${range ? tocTab(id, range, "ch-tab--edge") : ""}
      ${canDoHtml(ch.canDo)}
      ${miniToc}
      ${parts}
      ${reviewHtml(ch)}
      <nav class="pager">${pg(prev, "← 前の章", "pager__prev")}${pg(next, "次の章 →", "pager__next")}</nav>
    </div>`;
}
ACT.toc = (t, e) => {
  const toc = $(".mini-toc");
  if (!toc) return;
  e.preventDefault();
  toc.open = true;
  toc.scrollIntoView({ block: "start", behavior: "smooth" });
};

// ---------- grammar point ----------
const CLIP_SVG = '<svg class="clip__icon" viewBox="0 0 22 40" aria-hidden="true" focusable="false"><path d="M15 12v17a5 5 0 0 1-10 0V8a3.5 3.5 0 0 1 7 0v19a1.8 1.8 0 0 1-3.6 0V11"/></svg>';
const IDIOM_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 14a4 4 0 0 0 5.7 0l3.2-3.2a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3.2 3.2a4 4 0 0 0 5.7 5.7l1-1"/></svg>';
const TRY_IT = "やってみよう！";
// ☞ line: only the book's own reference (p.xxx 〜…) is printed in the book's ☞ style, right-aligned. Our links (related
// points, the similar-pattern group) go on a separate small "関連 Related" line so they don't pass for book text.
const cmpGroupOf = (no) => TRY.compare.findIndex((gr) => (gr.items || []).some((it) => it.no === no));
function xrefHtml(book, see, no) {
  const gi = no != null ? cmpGroupOf(no) : -1;
  const links = (see || []).map(gpLink).join("");
  const b = book ? `<p class="xref"><span class="xref__hand" aria-hidden="true">☞</span><span class="xref__book">${fmt(String(book).replace(/^☞\s*/, ""))}</span></p>` : "";
  const cmp = gi >= 0 ? `<a href="#/compare/${gi}" class="gp-link xref__cmp">似ている文型 ${fmt(TRY.compare[gi].key)}</a>` : "";
  return b + (links || cmp ? `<p class="gp-rel"><span class="gp-rel__l">関連 <span class="en-inline">Related</span></span>${cmp}${links}</p>` : "");
}
const practiceHtml = (list, id, title = TRY_IT) => (list || []).map((ex, j) => renderExercise(ex, `${id}-p${j}`, title) + (ex.xref ? xrefHtml(ex.xref) : "")).join("");
// 📎 clip notes before or after やってみよう: N2 prints them after the practice, N1 before (book meta notesFirst);
// a point can override with g.notesFirst
const notesFirst = (g) => (g.notesFirst != null ? g.notesFirst : !!BOOK().notesFirst);
function gpCard(g) {
  const gid = `gp${g.no}`;
  const plusHtml = (g.plus || []).map((p, k) => `<section class="plus" data-en-scope>
        <span class="plus__tag"><span class="plus__cross" aria-hidden="true"></span>Plus</span>
        <header class="plus__head"><h4 class="plus__title">${fmt(p.pattern)}</h4>${stars(p.stars)}${scenes(p.marks)}${enScopeBtn()}</header>
        ${bi(p.usage, "p", "usage", { book: true })}
        ${formsHtml(p.forms, p.formNotes)}
        ${examplesHtml(p.examples)}
        ${notesHtml(p.notes, `${gid}-plus${k}`)}
        ${practiceHtml(p.practice, `${gid}-plus${k}`)}
        ${p.xref ? xrefHtml(p.xref) : ""}
      </section>`).join("");
  const notes = notesHtml(g.notes, gid);
  return `<article class="gp" id="gp-${g.no}" data-en-scope>
      <header class="gp-bar">
        <span class="gp-bar__no">${g.no}</span>
        <h3 class="gp-bar__title">${fmt(g.phrase || g.pattern)}</h3>
        ${stars(g.stars)}
      </header>
      ${g.phrase ? `<p class="gp-pattern"><span class="sr-only">文型 </span>${fmt(g.pattern)}</p>` : ""}
      <div class="gp-use"><h4 class="gp-use__pill">${pill("どう使う？")}</h4><span class="gp-use__tools">${scenes(g.marks)}${enScopeBtn()}</span></div>
      ${bi(g.usage, "p", "usage", { book: true })}
      ${formsHtml(g.forms, g.formNotes)}
      ${examplesHtml(g.examples)}
      ${g.deepDive ? `<details class="deep"><summary>📘 English deep-dive <span class="dim">nuance · comparisons · pitfalls</span><span class="gen-tag">generated</span></summary><div class="deep-body">${prose(g.deepDive)}</div></details>` : ""}
      ${notesFirst(g) ? notes : ""}
      ${practiceHtml(g.practice, gid, `${TRY_IT} <span class='en-inline'>Try it out</span>`)}
      ${notesFirst(g) ? "" : notes}
      ${plusHtml}
      ${xrefHtml(g.xref, g.see, g.no)}
      <footer class="gp-foot">
        <label class="studied"><input type="checkbox" data-act="studied" data-no="${g.no}" ${progress.studied[g.no] ? "checked" : ""}><span class="studied__box" aria-hidden="true"></span>学習済み <span class="en-inline">Studied</span></label>
      </footer>
    </article>`;
}

// ---------- connection formula, ＊ notes, keigo tables ----------
const FX_ALTS = /^［(.+)］$/;
// split s on sep only outside ［…］ and （…） (so a "+" or "　" inside a bracketed stack or a parenthesis stays in its token)
function splitTop(s, sep) {
  const out = []; let depth = 0, cur = "";
  for (const c of String(s)) {
    if (c === "［" || c === "（") depth++;
    else if ((c === "］" || c === "）") && depth) depth--;
    if (!depth && sep.test(c)) { out.push(cur); cur = ""; continue; }
    cur += c;
  }
  out.push(cur);
  return out.map((x) => x.trim()).filter((x, i, a) => x || a.length === 1);
}
const PLUS = /\+/, FWSP = /　/;
const PLUS_HTML = '<span class="fx-plus">+</span>';
// one formula token: "［A　B］" (alternatives printed stacked in the book) → bracket stack; otherwise inline
function fxTok(t, side) {
  const m = t.match(FX_ALTS);
  if (m && splitTop(m[1], FWSP).length > 1) return fxBr(splitTop(m[1], FWSP), side);
  return `<span class="fx-t">${fmt(t)}</span>`;
}
const fxBr = (alts, side) => `<span class="fx-br fx-br--${side}">${alts.map((a) => `<span class="fx-alt">${splitTop(a, PLUS).map((x) => fxTok(x, "r")).join(PLUS_HTML)}</span>`).join("")}</span>`;
const fxJoin = (toks, lastSide = "l") => toks.map((t, i) => fxTok(t, i === toks.length - 1 && toks.length > 1 ? lastSide : "r")).join(PLUS_HTML);
// top-level ［…］ groups of a sub-line ("［A　B］　　［C］" or "［A］［B］"); null if it holds anything else
function bracketGroups(x) {
  const out = []; let depth = 0, cur = "";
  for (const c of x) {
    if (!depth && /[ 　]/.test(c)) continue;
    if (!depth && c !== "［") return null;
    cur += c;
    if (c === "［") depth++; else if (c === "］" && !--depth) { out.push(cur); cur = ""; }
  }
  return depth ? null : out;
}
function formulaHtml(forms) {
  const main = [], subs = [];
  forms.forEach((f) => {
    const [head, ...rest] = String(f).split("\n");
    if (FX_ALTS.test(head.trim()) && splitTop(head, PLUS).length === 1) subs.push(head.trim()); else main.push(head);
    rest.forEach((r) => subs.push(r.trim()));
  });
  const T = main.map((f) => splitTop(f, PLUS));
  let body = "";
  // one formula whose sub-lines hold one bracket per [Pl]-type badge ("Pl₁ + といおうか + Pl₂ + といおうか" /
  // "［なAだ　Nだ］　　［なAだ　Nだ］"): print each sub bracket under its badge, as the book does
  const badgeIdx = T.length === 1 ? T[0].map((t, i) => (/^\[[^\]]+\]$/.test(t) ? i : -1)).filter((i) => i >= 0) : [];
  const uLines = T.length === 1 && badgeIdx.length > 1 ? subs.filter((x) => { const g = bracketGroups(x); return g && g.length === badgeIdx.length; }) : [];
  if (uLines.length) {
    const G = uLines.map(bracketGroups);
    subs.splice(0, subs.length, ...subs.filter((x) => !uLines.includes(x)));
    body = `<div class="fx fx--under">${T[0].map((t, i) => {
      const k = badgeIdx.indexOf(i);
      // the bracket hangs to the right under the "+" (book p.74) unless the next token carries its own bracket
      const hang = k >= 0 && !badgeIdx.includes(i + 1) ? " fx-col--hang" : "";
      return `${i ? PLUS_HTML : ""}<span class="fx-col${hang}">${fxTok(t, "r")}${k >= 0 ? G.map((g) => `<span class="fx-u">${fmt(g[k].replace(/　/g, " "))}</span>`).join("") : ""}</span>`;
    }).join("")}</div>`;
  } else if (T.length === 1) body = `<div class="fx">${fxJoin(T[0])}</div>`;
  else if (T.length > 1) {
    const n = T.length, minLen = Math.min(...T.map((t) => t.length));
    let pre = 0; while (pre < minLen - 1 && T.every((t) => t[pre] === T[0][pre])) pre++;
    let suf = 0; while (suf < minLen - 1 && T.every((t) => t[t.length - 1 - suf] === T[0][T[0].length - 1 - suf])) suf++;
    // every head × every tail ("V-る／V-た + の | N" × "を皮切りに（して）| を皮切りとして", N1 p.17): two stacks
    const alt = (toks) => toks.join(" + ");
    const hd = (t) => alt(t.slice(0, -1)), tl = (t) => t[t.length - 1];
    const heads = [...new Set(T.map(hd))], tails = [...new Set(T.map(tl))];
    const cross = T.every((t) => t.length >= 2) && heads.length > 1 && tails.length > 1 && heads.length * tails.length === n &&
      heads.every((h) => tails.every((x) => T.some((t) => hd(t) === h && tl(t) === x)));
    if (cross) body = `<div class="fx fx--x">${fxBr(heads, "r")}${PLUS_HTML}${fxBr(tails, "l")}</div>`;
    else if (pre >= 1) body = `<div class="fx fx--pre">${fxJoin(T[0].slice(0, pre), "r")}${PLUS_HTML}${fxBr(T.map((t) => alt(t.slice(pre))), "l")}</div>`;
    else if (suf >= 1) body = `<div class="fx fx--suf">${fxBr(T.map((t) => alt(t.slice(0, t.length - suf))), "r")}${PLUS_HTML}${fxJoin(T[0].slice(T[0].length - suf))}</div>`;
    else body = T.map((t) => `<div class="fx">${fxJoin(t)}</div>`).join("");
  }
  return body + subs.map((s) => `<div class="fx-sub">${fmt(s)}</div>`).join("");
}
function fnotesHtml(notes) {
  return (notes || []).map((n) => {
    const o = typeof n === "string" ? { ja: n } : n;
    const m = String(o.ja).match(/^＊(\d*)/);
    const mark = m ? "＊" + m[1] : "＊", ja = m ? o.ja.slice(m[0].length) : o.ja;
    return `<p class="fnote bi">${o.en ? enToggle() : ""}<span class="fnote__m">${mark}</span><span class="ja">${fmt(ja)}</span>${en(o.en, enSrc(o, true), "span")}</p>`;
  }).join("");
}
function kvTableHtml(forms, notes) {
  const tables = [];
  forms.forEach((f) => {
    const [k, v] = String(f).split(/\s*→\s*/);
    if (!tables.length || /^意味$/.test(plain(k).trim())) tables.push({ head: [k, v], rows: [] });
    else tables[tables.length - 1].rows.push([k, v]);
  });
  const cell = (s) => String(s || "").split("／").map((x) => fmt(x.trim()).replace(/＊(\d)$/, '<sup class="kv-ref">＊$1</sup>')).join("<br>");
  return `<div class="kv-wrap"><div class="kv-tables">${tables.map((t) => `<table class="kv"><thead><tr><th scope="col">${fmt(t.head[0])}</th><th scope="col">${fmt(t.head[1])}</th></tr></thead>
      <tbody>${t.rows.map((r) => `<tr><td>${cell(r[0])}</td><td>${cell(r[1])}</td></tr>`).join("")}</tbody></table>`).join("")}</div>
      ${notes && notes.length ? `<div class="kv-notes">${fnotesHtml(notes)}</div>` : ""}</div>`;
}
function formsHtml(forms, notes) {
  if ((!forms || !forms.length) && (!notes || !notes.length)) return "";
  if (forms && forms.some((f) => / → /.test(f))) return `<div class="forms forms--kv"><h5 class="sr-only">接続</h5>${kvTableHtml(forms, notes)}</div>`;
  return `<div class="forms"><h5 class="sr-only">接続</h5>${formulaHtml(forms || [])}${fnotesHtml(notes)}</div>`;
}

// ---------- examples ①② ----------
function exText(ja) {
  const lines = String(ja).split("\n");
  if (lines.length > 1 && lines.every((l) => /^[A-ZＡ-Ｚ]：/.test(l)))
    return lines.map((l) => `<span class="exs__turn"><span class="exs__who">${esc(l.slice(0, 2))}</span><span class="exs__say">${fmt(l.slice(2))}</span></span>`).join("");
  return fmt(ja);
}
function examplesHtml(exs) {
  if (!exs || !exs.length) return "";
  return `<ol class="exs ja-book">${exs
    .map((e, i) => `<li class="exs__i bi${e.nonum ? " exs__i--nonum" : ""}"><span class="exs__n" aria-hidden="true">${e.nonum ? "" : CIRCLED[i] || i + 1}</span>
        <div class="exs__t"><span class="ja">${exText(e.ja)}${e.idiom ? `<span class="idiom" role="img" aria-label="慣用表現 idiom" title="慣用表現 — idiomatic expression">${IDIOM_SVG}</span>` : ""}</span>${e.foot ? `<span class="exs__foot">${fmt(e.foot)}</span>` : ""}${en(e.en)}</div>
        <span class="exs__tools">${speakBtn(e.ja, "data-small")}${e.en ? enToggle() : ""}</span></li>`)
    .join("")}</ol>`;
}

// ---------- 📎 clip note ----------
function notesHtml(notes, base) {
  return (notes || [])
    .map((n, k) => `<aside class="clip" data-en-scope>${CLIP_SVG}<div class="clip__body">
        <div class="clip__tools">${stars(n.stars)}${enScopeBtn()}</div>
        ${bi(n, "p", "clip__text", { book: true })}
        ${n.xref ? xrefHtml(n.xref) : ""}
        ${examplesHtml(n.examples)}
        ${(n.practice || []).map((ex, j) => renderExercise(ex, `${base}-n${k}-p${j}`, TRY_IT)).join("")}
      </div></aside>`)
    .join("");
}

// ---------- 見本文 ----------
const isSep = (l) => l.style === "sep" || /^[〜～]{3,}$/.test(plain(l.ja).trim());
const isCredit = (l) => l.style === "credit" || /^（文：.*）$/.test(plain(l.ja).trim());
// group sample lines into the book's paragraphs (line.cont = continues the previous paragraph)
function paragraphs(lines) {
  const out = [];
  lines.forEach((l) => {
    const last = out[out.length - 1];
    if (isSep(l)) out.push({ sep: true, lines: [l] });
    else if (isCredit(l)) out.push({ credit: true, lines: [l] });
    else if (l.cont && last && !last.sep && !last.credit) last.lines.push(l);
    else out.push({ lines: [l] });
  });
  return out;
}
const paraEn = (p) => p.lines.map((l) => l.en).filter(Boolean).join(" ");
const quoteStart = (p) => /^「/.test(plain(p.lines[0].ja));
const isNote = (l) => l.style === "note";
function proseHtml(s) {
  const body = paragraphs(s.lines).map((p) => {
    if (p.sep) return `<p class="prose__sep" aria-hidden="true">${fmt(p.lines[0].ja)}</p>`;
    const e = paraEn(p), ja = p.lines.map((l) => fmt(l.ja)).join("");
    if (p.credit) return `<p class="credit">${ja}</p>`;
    return `<div class="prose__para bi">${e ? enToggle() : ""}<p class="ja prose__p${quoteStart(p) ? " prose__p--q" : ""}${isNote(p.lines[0]) ? " prose__p--note" : ""}">${ja}</p>${en(e, "gen", "div", "prose__en")}</div>`;
  }).join("");
  return `<div class="prose ja-book">${body}</div>`;
}
function dialogueHtml(s) {
  const spw = Math.max(2, ...s.lines.map((l) => plain(l.sp || "").length));
  const body = (l) => `<div class="dlg__body"><span class="ja">${fmt(l.ja)}</span>${en(l.en)}</div>`;
  return `<div class="dlg ja-book${spw > 4 ? " dlg--wide" : ""}" style="--spw:${spw}em">${s.lines.map((l) => l.sp
    ? `<div class="dlg__row bi">${l.en ? enToggle() : ""}<span class="dlg__sp">${fmt(l.sp)}</span><span class="dlg__colon" aria-hidden="true">：</span>${body(l)}</div>`
    : `<div class="dlg__row dlg__row--narr${isNote(l) ? " dlg__row--note" : ""} bi">${l.en ? enToggle() : ""}${body(l)}</div>`).join("")}</div>`;
}
// English of a whole sample in one block, one paragraph per entry
const enBlock = (list, cls) => (list.length ? `<div class="en en--gen ${cls}">${list.map((e) => `<p>${fmt(e)}</p>`).join("")}</div>` : "");
// notice: lead line, key▶value rows, tabular pay cells, contact block
function noticeHtml(s) {
  const L = s.lines;
  let contactFrom = L.findIndex((l) => l.style === "contact" || /☎|https?:|E-mail/.test(l.ja));
  if (contactFrom < 0) contactFrom = L.length;
  const rows = [];
  let seenRow = false, prevCells = 0;
  // pay table: a value with ≥2 full-width spaces becomes cells; following lines with a full-width space continue it,
  // right-aligned to the previous row's columns (時給 | 7時〜 9時 | 1,000円〜 / · | 9時〜22時 | 900円)
  const cells = (parts, start) => `<span class="nt-cells">${parts.map((p, i) => `<span${i === 0 && start > 1 ? ` style="grid-column-start:${start}"` : ""}>${fmt(p)}</span>`).join("")}</span>`;
  for (let i = 0; i < contactFrom; i++) {
    const l = L[i], st = l.style, m = l.ja.match(/^(.{1,12}?)▶(.*)$/);
    if (st === "center" || st === "lead" || (!st && !m && !seenRow)) { rows.push(`<p class="nt-lead">${fmt(l.ja)}</p>`); continue; }
    if (st === "right") { rows.push(`<p class="nt-right">${fmt(l.ja)}</p>`); continue; }
    const isRow = m && st !== "cont";
    const val = isRow ? m[2] : l.ja, parts = val.split(/　+/);
    let v;
    if (isRow && parts.length >= 3) { prevCells = parts.length; v = cells(parts, 1); }
    else if (!isRow && prevCells && parts.length >= 2 && parts.length <= prevCells) v = cells(parts, prevCells - parts.length + 1);
    else { prevCells = 0; v = fmt(val); }
    if (isRow) { seenRow = true; rows.push(`<div class="nt-row"><span class="nt-key">${fmt(m[1])}▶</span><div class="nt-val">${v}</div></div>`); }
    else rows.push(`<div class="nt-row nt-cont${/^＊/.test(l.ja) ? " nt-star" : ""}"><span class="nt-key"></span><div class="nt-val">${v}</div></div>`);
  }
  const contact = L.slice(contactFrom).map((l, i) => {
    const parts = l.ja.split(/　+/);
    if (i === 0 && parts.length > 1) return `<span class="nt-org">${fmt(parts[0])}</span><span class="nt-c">${fmt(parts.slice(1).join("　"))}</span>`;
    return `<span class="nt-org"></span><span class="nt-c">${fmt(l.ja).replace(/^(E-mail)　/, "$1 ")}</span>`;
  }).join("");
  return `<div class="notice">
      ${s.heading ? `<h3 class="nt-heading">${fmt(s.heading)}</h3>` : ""}
      <div class="nt-body ja-book">${rows.join("")}</div>
      ${contact ? `<div class="nt-contact">${contact}</div>` : ""}
      ${enBlock(L.filter((l) => l.en).map((l) => l.en), "sample__en")}
    </div>`;
}
// 縦書き texts: vertical at ≥901 (or when the reader chose 縦), horizontal otherwise
const verticalOn = () => settings.vertical === "v" || (settings.vertical !== "h" && isWide());
function verticalHtml(s) {
  const v = verticalOn(), V = { vertical: true };
  let label = "", title = s.heading || "";
  if (s.kind === "editorial" && title.includes("　")) { const k = title.indexOf("　"); label = title.slice(0, k); title = title.slice(k + 1); }
  const mast = title ? `<header class="vt-mast">${label ? `<span class="vt-label">${fmt(label, { vertical: v })}</span>` : ""}<h3 class="vt-title">${fmt(title, { vertical: v })}</h3></header>` : "";
  const paras = paragraphs(s.lines);
  const dlg = s.kind === "dialogue";
  if (!v) return `<div class="vt vt--h">${mast}${dlg ? dialogueHtml(s) : proseHtml(s)}</div>`;
  // drama script (N1 ch5): the speaker name heads each column, the lines hang under it; lines without sp are
  // scene headings / stage directions
  const body = dlg ? s.lines.map((l) => l.sp
    ? `<p class="vt-dlg"><span class="vt-sp">${fmt(l.sp, V)}</span><span class="vt-say">${fmt(l.ja, V)}</span></p>`
    : `<p class="vt-dir${isNote(l) ? " vt-note" : ""}">${fmt(l.ja, V)}</p>`).join("")
    : paras.map((p) => p.sep ? `<p class="vt-sep" aria-hidden="true">${fmt(p.lines[0].ja)}</p>`
    : `<p class="${quoteStart(p) ? "vt-q" : ""}${isNote(p.lines[0]) ? " vt-note" : ""}">${p.lines.map((l) => fmt(l.ja, V)).join("")}</p>`).join("");
  const enPs = dlg ? s.lines.filter((l) => l.en).map((l) => (l.sp ? `${plain(l.sp)}: ` : "") + l.en) : paras.filter((p) => !p.sep).map(paraEn).filter(Boolean);
  return `<div class="vt-scroll" tabindex="0" role="region" aria-label="見本文（縦書き）"><div class="vt ja-book">${mast}${body}</div></div>
      ${enBlock(enPs, "vt-en")}`;
}
function sampleHtml(s, chId, pi) {
  if (!s) return "";
  const queue = s.lines.filter((l) => !isSep(l)).map((l) => ({ text: plain(l.ja), v: l.v || "f" }));
  if (s.heading) queue.unshift({ text: plain(s.heading), v: "f" });
  const rings = s.rings !== false && s.kind !== "article";
  const vert = !!s.vertical, vOn = vert && verticalOn();
  let body;
  if (vert) body = verticalHtml(s);
  else if (s.kind === "notice") body = noticeHtml(s);
  else if (s.kind === "dialogue") body = dialogueHtml(s);
  else body = (s.heading ? `<h3 class="sample__headline">${fmt(s.heading)}</h3>` : "") + proseHtml(s);
  const seg = vert ? `<div class="seg" role="group" aria-label="縦書き・横書き">${[["v", "縦", "Vertical"], ["h", "横", "Horizontal"]].map(([m, j, e]) =>
    `<button type="button" class="seg__b" data-act="vmode" data-v="${m}" aria-pressed="${(m === "v") === vOn}" title="${e}">${j}</button>`).join("")}</div>` : "";
  return `<section class="sample${rings ? " sample--rings" : ""}${vert ? " sample--vertical" : ""}${vert && !vOn ? " is-h" : ""} kind-${esc(s.kind)}" data-en-scope data-ch="${chId}" data-pi="${pi}" aria-labelledby="s${chId}-${pi}">
      <h2 id="s${chId}-${pi}" class="sr-only">見本文</h2>
      <div class="sample__tools">${seg}${enScopeBtn()}${cdBadge(queue, "見本文を聞く")}</div>
      ${body}
    </section>`;
}
// 縦/横: persist the mode, then rebuild every vertical 見本文 on the page in place
export function setVertical(mode) {
  settings.vertical = mode;
  saveSettings();
  $$(".sample--vertical").forEach((sec) => {
    const ch = findChapter(+sec.dataset.ch), pi = +sec.dataset.pi, p = ch && ch.parts[pi];
    if (!p) return;
    const enAll = sec.classList.contains("en-all");
    sec.outerHTML = sampleHtml(p.sample, ch.id, pi);
    if (enAll) $(`.sample--vertical[data-ch="${ch.id}"][data-pi="${pi}"]`).classList.add("en-all");
  });
  const sel = $("#vmode-set"); if (sel) sel.value = settings.vertical;
  vtScrollInit();
}
// pressing the mode that "auto" already gives keeps auto; otherwise pin the choice
ACT.vmode = (t) => setVertical((t.dataset.v === "v") === isWide() ? "auto" : t.dataset.v);
// vertical scrollers: a text only a little wider than the frame gets taller columns instead of a sideways scroll (up to
// 80vh / 44em: the last columns were hidden behind the scroll fade, N1 ch4 (2)); the fade shows while more is hidden
export function vtScrollInit(refit) {
  $$(".vt-scroll").forEach((sc) => {
    if (refit) { delete sc.dataset.fitH; sc.style.height = ""; }
    if (!sc.dataset.fitH && sc.clientWidth) {
      sc.dataset.fitH = 1;
      const fs = parseFloat(getComputedStyle(sc).fontSize), max = Math.min(innerHeight * 0.8, 44 * fs);
      let h = sc.clientHeight;
      while (sc.scrollWidth > sc.clientWidth + 1 && h + 2 * fs <= max) { h += 2 * fs; sc.style.height = `${h}px`; }
    }
    const upd = () => sc.classList.toggle("has-more", sc.scrollWidth - sc.clientWidth + sc.scrollLeft > 4 && Math.abs(sc.scrollLeft) < sc.scrollWidth - sc.clientWidth - 4);
    if (!sc.dataset.hint) { sc.dataset.hint = 1; sc.addEventListener("scroll", upd, { passive: true }); }
    upd();
  });
}
// auto mode follows the width
matchMedia(WIDE).addEventListener("change", () => { if (settings.vertical === "auto" && $(".sample--vertical")) setVertical("auto"); });
