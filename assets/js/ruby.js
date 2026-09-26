// Furigana (docs/LAYOUT.md "Furigana"): native <ruby>base<rt>reading</rt></ruby>, horizontal and vertical alike.
// Native ruby keeps every reading centred on its kanji and the line pitch even (WebKit and Blink), provided the block's
// line-height leaves room for the reading (≥ 1.9, base.css) and the Japanese font has CJK metrics (Hiragino first in the
// font stacks: with Noto webfonts WebKit makes every line that carries ruby taller).
// A reading wider than its base would push the neighbours apart ("集　客　が"); as in the book (JIS X 4051) it may instead
// overhang a neighbouring kana or punctuation mark — never a kanji or another reading — by up to one furigana character
// (.5em) per side. rubyHtml() records the excess and sets a first-guess margin; fitRubies() measures and corrects it.
import { $$, settings } from "./core.js";

export const RUBY_RE = /\{([^{}|]+)\|([^{}]+)\}/g;
const RT_K = 0.5; // furigana size / text size (ruby rt font-size in base.css)
const OVERHANG_OK = /[ぁ-ゖゝゞァ-ヺーヽヾ、。，．・：；！？「」『』（）〈〉《》…‥〜～]/;
// width in em: full-width characters 1, ASCII ≈ .55
export const cw = (s) => Array.from(s).reduce((n, c) => n + (/[\x20-\x7e]/.test(c) ? 0.55 : 1), 0);
const excess = (base, rd) => cw(rd) * RT_K - cw(base);

// index of the next visible character before (dir −1) / after (+1) position i, skipping inline markup (** __ ~~) and tags
function neighbourAt(str, i, dir) {
  while (i >= 0 && i < str.length) {
    const c = str[i];
    if (c === "*" || c === "_" || c === "~") { i += dir; continue; }
    if (c === ">" && dir < 0) { const k = str.lastIndexOf("<", i); if (k < 0) break; i = k - 1; continue; }
    if (c === "<" && dir > 0) { const k = str.indexOf(">", i); if (k < 0) break; i = k + 1; continue; }
    return i;
  }
  return -1;
}
// how far (em) the reading may overhang the neighbour at index i: one furigana character onto kana / punctuation, but
// only .375em when that single kana also carries another reading's overhang ("軽傷者で救急": the readings stay apart)
function overhangRoom(str, i, dir) {
  if (i < 0 || !OVERHANG_OK.test(str[i])) return 0;
  const j = neighbourAt(str, i + dir, dir);
  return j >= 0 && str[j] === (dir > 0 ? "{" : "}") ? 0.75 * RT_K : RT_K;
}
// String.replace callback for RUBY_RE: (match, base, reading, offset, whole string)
export function rubyHtml(m, base, rd, off, str) {
  const e = excess(base, rd);
  if (!(e > 0.01) || typeof str !== "string") return `<ruby>${base}<rt>${rd}</rt></ruby>`;
  const r2 = (x) => Math.round(x * 100) / 100;
  const ol = overhangRoom(str, neighbourAt(str, off - 1, -1), -1), or = overhangRoom(str, neighbourAt(str, off + m.length, 1), 1);
  const data = `data-e="${r2(e)}" data-ol="${ol}" data-or="${or}"`;
  // nothing to overhang on the left (another reading "ご{観覧}{誠}に", a kanji "来月{初旬}に", the start of the text):
  // a centred reading would leave a gap there, so it starts at the base and overhangs the kana on the right instead
  if (ol === 0 && or > 0) return `<ruby class="r-s" ${data}>${base}<rt>${rd}</rt></ruby>`;
  // WebKit and Blink usually let a centred reading overhang both neighbours by half a furigana character (.25em)
  const side = (room) => r2(Math.max(0, Math.min(e / 2, room) - RT_K / 2));
  const l = side(ol), r = side(or);
  return `<ruby ${data}${l || r ? ` style="margin-inline:${-l}em ${-r}em"` : ""}>${base}<rt>${rd}</rt></ruby>`;
}
// a compound written as adjacent readings ("{国際|こくさい}{交流|こうりゅう}{会|かい}") where one reading is wider than its
// kanji can't overhang the neighbouring kanji, so its base would be spaced apart ("国際 交流 会"). The book sets such a
// compound as one group reading over the whole word (熟語ルビ), so the run is merged into one ruby
const RUBY_RUN_RE = /(?:\{[^{}|]+\|[^{}]+\}){2,}/g;
function mergeRubyRun(run) {
  const parts = [...run.matchAll(RUBY_RE)];
  if (!parts.some((p) => excess(p[1], p[2]) > 0.01)) return run;
  return `{${parts.map((p) => p[1]).join("")}|${parts.map((p) => p[2]).join("")}}`;
}
// {漢字|かな} markup (already HTML-escaped) → <ruby>
export const rubyMarkup = (html) => html.replace(RUBY_RUN_RE, mergeRubyRun).replace(RUBY_RE, rubyHtml);

// ---------- measure-and-correct pass for readings wider than their base ----------
// For each side the target overhang is min(e/2, room) (start-aligned .r-s: 0 on the left, min(e, room) on the right);
// the actual one is measured against the neighbouring glyph on the same line (or the neighbouring reading, which must
// never be overlapped), and the margin on that side absorbs the difference. The engines differ (WebKit skips a kana that
// touches another reading, Blink doesn't), hence measuring. Rubies without layout (hidden) keep the first guess until shown.
// inline wrappers only: a grid / flex item or inline-block (option label, badge, blank) is a different box, not a neighbour
const isInline = (el) => el.nodeType === 1 && el.tagName !== "RUBY" && getComputedStyle(el).display === "inline";
// previous / next glyph run in the same line box: a text node or another ruby, crossing inline wrappers
function sideNeighbour(r, dir) {
  let n = r, depth = 0;
  for (;;) {
    let sib = dir < 0 ? n.previousSibling : n.nextSibling;
    while (sib && sib.nodeType === 3 && !sib.nodeValue.trim()) sib = dir < 0 ? sib.previousSibling : sib.nextSibling;
    if (sib) {
      while (isInline(sib) && sib.lastChild) sib = dir < 0 ? sib.lastChild : sib.firstChild; // descend into inline wrappers
      if (sib.nodeType === 3) return { text: sib };
      if (sib.tagName === "RUBY") return { ruby: sib };
      if (sib.tagName === "BR") return null;
      return { el: sib };
    }
    n = n.parentNode;
    if (!n || !isInline(n) || ++depth > 4) return null;
  }
}
function neighbourRect(nb, dir) {
  if (!nb) return null;
  if (nb.text) {
    const t = nb.text, g = document.createRange(), i = dir < 0 ? t.length - 1 : 0;
    g.setStart(t, i); g.setEnd(t, i + 1);
    const rs = g.getClientRects(); return rs.length ? rs[rs.length - 1] : null;
  }
  if (nb.ruby) { const rt = nb.ruby.querySelector("rt"); return rt ? { rt: rt.getBoundingClientRect(), box: nb.ruby.getBoundingClientRect() } : null; }
  return null;
}
export function fitRubies(root, all, depth = 0) {
  if (!settings.furigana || !root) return;
  // line-start alignment (below) depends on the line breaks: undo it before a full refit
  if (all) $$("ruby[data-ls]", root).forEach((r) => { r.classList.remove("r-s"); delete r.dataset.ls; });
  const rs = $$(all ? "ruby[data-e]" : "ruby[data-e]:not([data-fit])", root).filter((r) => r.getClientRects().length);
  if (!rs.length) return;
  const lineStart = [];
  // correct from the current margins (the first guess or the last fit): resetting them first would move line breaks
  const plan = rs.map((r) => {
    const rt = r.querySelector("rt"), T = rt.getBoundingClientRect(), B = r.getBoundingClientRect();
    if (!T.width) return null;
    const cs = getComputedStyle(r), fs = parseFloat(cs.fontSize), vert = cs.writingMode.startsWith("vertical");
    // inline axis start/end and the cross-axis centre of the base line
    const s0 = (q) => (vert ? q.top : q.left), s1 = (q) => (vert ? q.bottom : q.right), cross = (q) => (vert ? (q.left + q.right) / 2 : (q.top + q.bottom) / 2);
    const e = +r.dataset.e * fs, st = r.classList.contains("r-s");
    const want = [st ? 0 : Math.min(e / 2, +r.dataset.ol * fs), Math.min(st ? e : e / 2, +r.dataset.or * fs)];
    const out = vert ? [parseFloat(cs.marginTop) || 0, parseFloat(cs.marginBottom) || 0] : [parseFloat(cs.marginLeft) || 0, parseFloat(cs.marginRight) || 0];
    [-1, 1].forEach((dir, k) => {
      const q = neighbourRect(sideNeighbour(r, dir), dir);
      // first on its line: a centred reading would leave an indent before the base, so start it at the base
      // (as the book does) and let it overhang the kana on the right
      const first = () => {
        if (dir > 0) return;
        out[0] = Math.max(0, out[0]); // never pull a line's first ruby out past the start of the line
        if (!st && +r.dataset.or > 0) lineStart.push(r);
      };
      if (!q) return first();
      if (q.rt) {
        // another reading: never overlap it (gap ≥ 0)
        if (Math.abs(cross(q.rt) - cross(T)) > fs * 0.4) return;
        const ov = dir < 0 ? s1(q.rt) - s0(T) : s1(T) - s0(q.rt);
        if (ov > 0.5) out[k] += ov;
        return;
      }
      if (vert ? Math.abs((q.left + q.right) / 2 - (B.left + B.right) / 2) > fs * 0.6 : Math.abs(q.bottom - B.bottom) > fs * 0.6) return first(); // other line
      if (Math.abs(dir < 0 ? s0(B) - s1(q) : s0(q) - s1(B)) > fs) return first(); // not adjacent (wrapped, or a float between)
      const d = (dir < 0 ? s1(q) - s0(T) : s1(T) - s0(q)) - want[k];
      if (Math.abs(d) > 0.5) out[k] += d;
    });
    return out;
  });
  rs.forEach((r, i) => {
    const m = plan[i];
    r.dataset.fit = 1;
    if (!m) return;
    // a margin only ever absorbs part of the excess (or keeps two readings apart): anything beyond is a bad measurement
    const fs = parseFloat(getComputedStyle(r).fontSize), e = +r.dataset.e * fs;
    m[0] = Math.max(-RT_K * fs, Math.min(e, m[0])); m[1] = Math.max(-RT_K * fs, Math.min(e, m[1]));
    r.style.marginInlineStart = `${Math.round(m[0] * 10) / 10}px`;
    r.style.marginInlineEnd = `${Math.round(m[1] * 10) / 10}px`;
  });
  if (lineStart.length && !depth) {
    lineStart.forEach((r) => { r.classList.add("r-s"); r.dataset.ls = 1; r.style.marginInlineStart = "0px"; delete r.dataset.fit; });
    fitRubies(root, false, 1);
  }
}
