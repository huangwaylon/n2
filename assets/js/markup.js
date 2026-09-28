// Inline markup → HTML (data/SCHEMA.md "Inline markup") and the small shared pieces of markup: bilingual lines, EN
// buttons, pills, play buttons, stars, usage-scene marks, links to grammar points.
import { BOOK, bookEnglish, esc, findPoint } from "./core.js";
import { RUBY_RE, rubyMarkup } from "./ruby.js";

// POS badge: [N] [V] [いA] [なA] [A] [Pl] [Po] [文] [数], optional subscript/digit ([N₁] [いA₂]), optional "-form"
// ([V-る] [V-Pl] [V-~~ます~~])
const BADGE_RE = /\[((?:N|V|いA|なA|A|Pl|Po|文|数)[₀-₉0-9]?(?:-[^\]\s]*)?|(?:N|V|いA|なA|A)[₀-₉0-9]?~~[^\]]*~~)\]/g;
// shape: b-round (bare N/V/A), b-pill (has "-"), b-sq (Pl/Po); colour hooks b-n b-i b-na b-pl b-s b-v are unstyled
function badgeHtml(m, inner) {
  const cls = /^N/.test(inner) ? "b-n" : /^いA/.test(inner) ? "b-i" : /^なA/.test(inner) ? "b-na" : /^P/.test(inner) ? "b-pl" : /^[文数]/.test(inner) ? "b-s" : "b-v";
  const shape = /^P/.test(inner) ? "b-sq" : inner.includes("-") ? "b-pill" : "b-round";
  return `<span class="badge ${cls} ${shape}">${inner.replace(/~~(.+?)~~/g, "<s>$1</s>")}</span>`;
}
// standalone 1–2 digit runs, set upright in 縦書き (縦中横)
const TCY_RE = /(?<![\d,.])\d{1,2}(?![\d,.])/g;
function tateChuYoko(html) {
  let inRuby = 0;
  return html.split(/(<[^>]*>)/).map((seg) => {
    if (seg[0] === "<") { if (/^<ruby\b/.test(seg)) inRuby++; else if (seg === "</ruby>") inRuby--; return seg; }
    return inRuby ? seg : seg.replace(TCY_RE, '<span class="tcy">$&</span>');
  }).join("");
}
export const BLANK_HTML = '<span class="blank">　　　</span>';
// Quartet II markup (data/Q2-SCHEMA.md): [[text|7]] numbered underline → grammar note 7 ([[text|a]] lettered, [[text|]]
// continued), {{slot}} practice-pattern slot, !!accent!!, [#3] boxed example number, ❶ step marks, [普] plain-form badge.
// None of these occur in the TRY data.
const refHtml = (m, text, tag) => {
  if (!tag) return `<u class="ref">${text}</u>`;
  const lab = /^\d+$/.test(tag) ? tag : `(${tag})`;
  // the underline starts on a kanji with a reading: the label goes before the reading, as printed ("(c)こどく", p.082)
  const rb = /^<ruby\b/.test(text) ? " ref--rb" : "";
  return /^\d+$/.test(tag) ? `<a class="ref${rb}" href="#gn-${tag}" data-act="jump" title="文型・表現ノート ${tag}"><u>${text}</u><span class="ref-n">${lab}</span></a>`
    : `<u class="ref ref--let${rb}">${text}<span class="ref-n">${lab}</span></u>`;
};
const q2Markup = (t) => t
  .replace(/\[\[(.+?)\|([0-9a-z]*)\]\]/g, refHtml)
  .replace(/\{\{(.+?)\}\}/g, '<span class="pslot">$1</span>')
  .replace(/!!(.+?)!!/g, '<span class="acc">$1</span>')
  .replace(/\^\^(.+?)\^\^/g, '<em class="bouten">$1</em>')
  .replace(/==(.+?)==/g, '<u class="ul2">$1</u>')
  .replace(/\[#(\d+)\]/g, '<span class="exno" aria-label="例$1">$1</span>')
  .replace(/\[普\]/g, '<span class="futsu" title="普通形 plain form">普</span>')
  .replace(/[❶-❿]/g, '<span class="step">$&</span>')
  // "［　　　］のパターンを使って": the book prints a grey swatch, the colour of the practice box below (pp.024, 030)
  .replace(/［　+］(?=の?パターン)/g, '<span class="swatch" role="img" aria-label="灰色の部分"></span>')
  // 書くポイント "…… (a) (b)": the pointer to the model composition's letters, blue as printed (pp.018, 050)
  .replace(/……((?:\s*\([a-z]\))+)/g, '……<span class="acc">$1</span>');
// opts.vertical: 縦中横 for standalone numbers (outside tags and ruby)
export function fmt(s, opts = {}) {
  if (s == null) return "";
  let t = q2Markup(rubyMarkup(esc(s).replace(BADGE_RE, badgeHtml)))
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, '<u class="ul">$1</u>')
    .replace(/~~(.+?)~~/g, "<s>$1</s>")
    .replace(/＿＿/g, BLANK_HTML)
    .replace(/\n/g, "<br>");
  return opts.vertical ? tateChuYoko(t) : t;
}
// plain text: readings, markup and badges dropped (speech, search, titles)
export const plain = (s) => String(s || "").replace(RUBY_RE, "$1").replace(/\[\[(.+?)\|[0-9a-z]*\]\]/g, "$1").replace(/\{\{|\}\}|!!|\^\^|==|[❶-❿]/g, "").replace(/\[普\]/g, "普").replace(/\*\*|__/g, "").replace(/~~.+?~~/g, "")
  .replace(/＿＿|（　）/g, "、なになに、").replace(/\[(\d+)\]/g, "、").replace(/\[[^\]]+\]/g, "");
// English long-form (deepDive): paragraphs separated by a blank line; a block of "- " lines is a bullet list
export const prose = (s) => (!s ? "" : String(s).split(/\n\s*\n/).map((block) => {
  const lines = block.split("\n");
  if (lines.every((l) => /^\s*- /.test(l))) return "<ul>" + lines.map((l) => "<li>" + fmt(l.replace(/^\s*- /, "")) + "</li>").join("") + "</ul>";
  return "<p>" + lines.map(fmt).join("<br>") + "</p>";
}).join(""));

// ---------- English layer ----------
// Three kinds of English, told apart by class:
//   en--book  English the book itself prints (N2 usage, notes, can-do, titles, front matter): grey Gothic
//   en--gen   English generated for this site (translations and explanations the book doesn't print): blue, with a
//             "generated" tag (base.css)
//   (neither) English that is part of the site's own interface text (guide, home)
// src: "book" | "gen" | "ui". A {ja, en, gen: true} object in a book field is our English where the book prints none.
export const enSrc = (o, book) => (book && bookEnglish() && !(o && o.gen) ? "book" : "gen");
export const en = (s, src = "gen", tag = "div", cls = "") => (s ? `<${tag} class="en${src === "ui" ? "" : " en--" + src}${cls ? " " + cls : ""}">${fmt(s)}</${tag}>` : "");
export const enToggle = () => `<button class="en-btn" data-act="en" title="Show / hide English">EN</button>`;
// one EN button for a whole container: put data-en-scope on the container, this button in its header row
export const enScopeBtn = (cls = "") => `<button class="en-btn en-btn--scope${cls ? " " + cls : ""}" data-act="en-scope" title="Show / hide English">EN</button>`;
// the inside of a bilingual line: EN button, Japanese, English. o: {ja, en[, gen]}
export const biInner = (o, opts = {}) => {
  const src = opts.src || enSrc(o, opts.book);
  return `${o.en ? enToggle() : ""}<${opts.jaTag || "span"} class="ja">${fmt(o.ja, opts)}</${opts.jaTag || "span"}>${en(o.en, src, opts.enTag || "div", opts.enCls)}`;
};
// bilingual block. o: a string (Japanese only) or {ja, en}. opts: book (the English is the book's where the book prints
// English), src (force "book" | "gen" | "ui"), vertical (passed to fmt)
export const bi = (o, tag = "p", cls = "", opts = {}) => {
  if (!o) return "";
  if (typeof o === "string") return `<${tag} class="${cls}">${fmt(o, opts)}</${tag}>`;
  // a block with no Japanese (N1 front matter the book prints only in Chinese) shows its English without the EN switch
  if (!o.ja) return `<div class="bi bi--en-only ${cls}">${en(o.en, opts.src || enSrc(o, opts.book))}</div>`;
  return `<div class="bi ${cls}">${biInner(o, Object.assign({ jaTag: tag }, opts))}</div>`;
};

// ---------- small shared pieces ----------
// dark rounded label (できること / どう使う？ / やってみよう！ / 問題N); html is inserted as-is
export const pill = (html, cls = "") => `<span class="pill ${cls}">${html}</span>`;
// headphone "CD ▶" play button for a speech queue [{ text, v }] (v: "m" | "f")
export const cdBadge = (queue, label = "音声を聞く") =>
  `<button class="cd-badge" data-act="listen" data-q='${esc(JSON.stringify(queue)).replace(/'/g, "&#39;")}' aria-label="${esc(label)}" title="${esc(label)}"><span class="cd-badge__cd">CD</span><span class="cd-badge__play">▶</span></button>`;
// the same speech queue as cdBadge, as a plain 🔊 button: for texts the book has no recording of (no CD mark to imitate)
export const listenBtn = (queue, label = "音声を聞く") =>
  `<button class="speak" data-act="listen" data-q='${esc(JSON.stringify(queue)).replace(/'/g, "&#39;")}' aria-label="${esc(label)}" title="Listen">🔊</button>`;
export const speakBtn = (text, extra = "") => `<button class="speak" data-act="speak" data-text="${esc(plain(text))}" ${extra} title="Listen">🔊</button>`;
// the book prints only filled stars, in black
export const stars = (n) => (!n ? "" : `<span class="stars gp-bar__stars" role="img" aria-label="重要度 ${n}/3" title="Importance ${n}/3">${"★".repeat(n)}</span>`);
export const gpLink = (no) => {
  const f = findPoint(no);
  return f ? `<a class="gp-link" href="#/gp/${no}">${no} ${fmt(f.g.pattern)}</a>` : `<span class="gp-link">${no}</span>`;
};

// usage-scene marks: [English label, Japanese label, 24×24 line-icon SVG body]
export const MARKS = {
  casual: ["Casual — used with friends & family", "くだけた会話",
    '<circle cx="8" cy="10" r="4.2"/><circle cx="16.5" cy="13.5" r="4.2"/><path d="M6.6 9.4h.01M9.4 9.4h.01M15.1 12.9h.01M17.9 12.9h.01"/><path d="M6.8 11.4q1.2 1 2.4 0M15.3 15q1.2 1 2.4 0"/>'],
  formal: ["Formal / written — not used chatting with friends", "かたい表現",
    '<circle cx="8" cy="10" r="4.2"/><circle cx="16.5" cy="13.5" r="4.2"/><path d="M6.6 9.4h.01M9.4 9.4h.01M15.1 12.9h.01M17.9 12.9h.01"/><path d="M3 21 21 3" stroke-width="2.4"/>'],
  polite: ["Polite — to superiors, strangers, customers", "目上・初対面・客に",
    '<circle cx="12" cy="7.5" r="3.6"/><path d="M10.6 7h.01M13.4 7h.01M10.8 9q1.2.8 2.4 0"/><path d="M7 21v-6.5q0-3.3 5-3.3t5 3.3V21M9.6 12.3 12 16l2.4-3.7"/>'],
  regret: ["Regret, disappointment, or criticism", "後悔・残念・批判",
    '<circle cx="11" cy="13" r="7"/><path d="M8.3 11.6l1.6.8M13.7 11.6l-1.6.8M8.6 17q2.4-1.8 4.8 0"/><path d="M19.2 3.5q-1.9 2.6 0 3.6 1.9-1 0-3.6z"/>'],
  praise: ["High evaluation / praise", "高い評価",
    '<circle cx="12" cy="13.5" r="5.8"/><path d="M9.8 12.6h.01M14.2 12.6h.01M9.6 15.2q2.4 1.8 4.8 0"/><path d="M12 2.5v2.6M4.4 5.6l1.8 1.8M19.6 5.6l-1.8 1.8M2 13h2.2M20 13h2.2"/>'],
};
// icon-only marks; the label is in aria-label / title. The trailing .mark-l label is hidden inside chapter content
// (.scenes) and visible elsewhere (guide legend, about page)
export const marks = (arr) => (arr || []).filter((m) => MARKS[m]).map((m) => {
  const [enL, jaL, svg] = MARKS[m], label = esc(jaL + " — " + enL);
  return `<span class="scene scene--${m}" role="img" aria-label="${label}" title="${label}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${svg}</svg></span><span class="mark-l">${esc(jaL)}</span>`;
}).join("");
export const scenes = (arr) => (arr && arr.length ? `<span class="scenes">${marks(arr)}</span>` : "");
