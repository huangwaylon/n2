// Furigana / collision probe that runs INSIDE the page (same source for Chrome via cdp.mjs and iOS Safari via wd.mjs).
// PROBE is the source of a function body; evaluate it as `return (PROBE_FN)(opts)` (WebDriver) or `(PROBE_FN)(opts)` (CDP).
// Reports, for every visible reading (.rt of fmt()'s horizontal furigana, or native <rt> in 縦書き):
//   off     reading not centred on its kanji (|centre offset| > 0.3 of the base font size)
//   hit     reading's em box overlaps another glyph's em box (other text, other reading) or a box (badge, blank,
//           input, button, option label, underline element) — i.e. furigana covering something
//   clip    reading cut off by an ancestor with overflow != visible, or outside the viewport
// and for every text block with furigana: uneven  line pitch differs by > 2 px between lines of one block.
export const PROBE_FN = String(function probe(opts) {
  opts = opts || {};
  const root = document.querySelector(opts.root || "main") || document.body;
  const out = { off: [], hit: [], clip: [], uneven: [], n: 0 };
  const vw = document.documentElement.clientWidth;
  // checkVisibility() also excludes content of closed <details> (WebKit still reports rects for it)
  const vis = (el) => (el.checkVisibility ? el.checkVisibility({ visibilityProperty: true, opacityProperty: true }) : getComputedStyle(el).display !== "none") && el.getClientRects().length > 0;
  const emBox = (r, f, vert) => vert
    ? { l: (r.left + r.right) / 2 - f / 2, r: (r.left + r.right) / 2 + f / 2, t: r.top, b: r.bottom }
    : { l: r.left, r: r.right, t: (r.top + r.bottom) / 2 - f / 2, b: (r.top + r.bottom) / 2 + f / 2 };
  const ov = (a, b, tol) => Math.min(a.r, b.r) - Math.max(a.l, b.l) > tol && Math.min(a.b, b.b) - Math.max(a.t, b.t) > tol;
  const ctx = (el) => { const p = el.closest("[id], .gp, section, .ex, .sample, li, p") || el; return (p.id ? "#" + p.id + " " : "") + (p.className || p.tagName).toString().slice(0, 40) + " | " + (el.closest(".rb, ruby") || el).textContent.slice(0, 16); };
  const isRt = (n) => n.parentElement && n.parentElement.closest(".rt, rt");
  // all glyph runs (text nodes) in root, with em boxes per line fragment
  const glyphs = [];
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n; (n = tw.nextNode());) {
    if (!n.nodeValue.trim()) continue;
    const el = n.parentElement; if (!vis(el) || el.closest(".sr-only")) continue;
    const cs = getComputedStyle(el); const f = parseFloat(cs.fontSize);
    const vert = cs.writingMode.startsWith("vertical");
    const rg = document.createRange(); rg.selectNodeContents(n);
    for (const r of rg.getClientRects()) if (r.width > 0.5 && r.height > 0.5) glyphs.push({ n, el, rt: !!isRt(n), box: emBox(r, f, vert), f, vert });
  }
  // boxes that furigana must not cover
  const boxes = Array.from(root.querySelectorAll(".badge, .blank, input, select, button, .opt-n, .qn, .b-slot, .ob-slot, .fill-blank, .cd-badge"))
    .filter(vis).flatMap((el) => Array.from(el.getClientRects()).map((r) => ({ el, box: { l: r.left, r: r.right, t: r.top, b: r.bottom } })));
  const rts = Array.from(root.querySelectorAll(".rt, rt")).filter(vis);
  for (const rt of rts) {
    out.n++;
    const rb = rt.closest(".rb, ruby");
    const cs = getComputedStyle(rt); const vert = getComputedStyle(rb).writingMode.startsWith("vertical");
    const rr = rt.getBoundingClientRect();
    // base rect: union of the base's text (not the reading)
    const baseRects = glyphs.filter((g) => !g.rt && rb.contains(g.n));
    if (!baseRects.length) continue;
    const bf = baseRects[0].f;
    const bx = { l: Math.min(...baseRects.map((g) => g.box.l)), r: Math.max(...baseRects.map((g) => g.box.r)), t: Math.min(...baseRects.map((g) => g.box.t)), b: Math.max(...baseRects.map((g) => g.box.b)) };
    const lines = new Set(baseRects.map((g) => Math.round(vert ? g.box.l : g.box.t)));
    if (lines.size === 1) {
      const d = vert ? (rr.top + rr.bottom) / 2 - (bx.t + bx.b) / 2 : (rr.left + rr.right) / 2 - (bx.l + bx.r) / 2;
      if (Math.abs(d) > 0.3 * bf) out.off.push({ at: ctx(rt), d: Math.round(d * 10) / 10, f: bf });
    }
    const myBox = emBox(rr, parseFloat(cs.fontSize), vert);
    for (const g of glyphs) {
      if (rt.contains(g.n) || (!g.rt && rb.contains(g.n))) continue;
      if (ov(myBox, g.box, 0.75)) { out.hit.push({ at: ctx(rt), what: (g.rt ? "reading " : "text ") + JSON.stringify(g.n.nodeValue.slice(0, 12)), me: opts.dbg ? myBox : undefined, it: opts.dbg ? g.box : undefined }); break; }
    }
    for (const b of boxes) if (!b.el.contains(rt) && ov(myBox, b.box, 0.75)) { out.hit.push({ at: ctx(rt), what: "box ." + String(b.el.className).split(" ")[0] + " " + b.el.tagName }); break; }
    // clipping
    if (!vert && (rr.left < -0.5 || rr.right > vw + 0.5)) out.clip.push({ at: ctx(rt), why: "viewport" });
    for (let a = rt.parentElement; a && a !== document.body; a = a.parentElement) {
      const s = getComputedStyle(a);
      if (s.overflowX !== "visible" || s.overflowY !== "visible") {
        const ar = a.getBoundingClientRect();
        const sx = a.scrollWidth > a.clientWidth + 1 || a.scrollHeight > a.clientHeight + 1; // scrollers: content may be out of view by design
        if (!sx && (rr.top < ar.top - 0.5 || rr.bottom > ar.bottom + 0.5 || rr.left < ar.left - 0.5 || rr.right > ar.right + 0.5)) { out.clip.push({ at: ctx(rt), why: "overflow of " + (a.className || a.tagName) }); break; }
      }
    }
  }
  // uneven line pitch in blocks that carry furigana (horizontal only)
  const blocks = new Set(rts.map((rt) => rt.closest("p, li, dd, .ja, .ex-q, .ln, td, h1, h2, h3")).filter(Boolean));
  for (const bl of blocks) {
    if (getComputedStyle(bl).writingMode.startsWith("vertical")) continue;
    const gs = glyphs.filter((g) => !g.rt && bl.contains(g.n) && !g.el.closest(".badge, button, .en, .rt, rt, .qn, sup, sub"));
    const fs = parseFloat(getComputedStyle(bl).fontSize);
    const ys = [...new Set(gs.filter((g) => Math.abs(g.f - fs) < 0.5).map((g) => Math.round((g.box.t + g.box.b) / 2)))].sort((a, b) => a - b);
    const cl = []; for (const y of ys) if (!cl.length || y - cl[cl.length - 1] > fs * 0.6) cl.push(y);
    if (cl.length < 3) continue;
    const d = cl.slice(1).map((y, i) => y - cl[i]);
    if (Math.max(...d) - Math.min(...d) > 2) out.uneven.push({ at: ctx(bl.querySelector(".rt, rt") || bl), pitch: d });
  }
  return out;
});
