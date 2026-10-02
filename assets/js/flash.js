// Flashcards shared by the vocabulary drills (Quartet II 覚える単語・漢字, TRY 単語): a shuffled deck; "again" moves the
// card to the end (the deck keeps its size), "got it" marks it known (progress.known, per book).
import { ACT, progress, saveProgress, shuffle } from "./core.js";

const fc = { key: null, cards: [], i: 0, show: false };
// key names the deck (a new mode or scope reshuffles); build() → [{ key, front, back, sub }]
export function flashcards(key, build) {
  if (fc.key !== key) Object.assign(fc, { key, cards: shuffle(build()), i: 0, show: false });
  const c = fc.cards[fc.i], known = progress.known || {};
  if (!c) return `<p class="dim">No cards yet.</p>`;
  return `<div class="card-fc${fc.show ? " is-open" : ""}" data-act="fc-flip" role="button" tabindex="0" aria-label="カードをめくる Flip">
      <div class="card-fc__f ja">${c.front}</div>${fc.show ? `<div class="card-fc__b ja">${c.back}</div>${c.sub ? `<div class="card-fc__s ja">${c.sub}</div>` : ""}` : `<div class="card-fc__hint dim">タップして答えを見る <span class="en-inline">tap to reveal</span></div>`}</div>
    <div class="dr-act"><button class="btn" data-act="fc-next" data-k="0">もう一度 <span class="en-inline">Again</span></button><button class="btn primary" data-act="fc-next" data-k="1">覚えた <span class="en-inline">Got it</span></button></div>
    <p class="dim dr-count">${fc.i + 1} / ${fc.cards.length} · 覚えた ${fc.cards.filter((x) => known[x.key]).length}</p>`;
}
// the drill pages keep their state here and in their modules, so a redraw is a re-render of the route (main.js)
// The control that had focus gets it back in the new markup (same data-* attributes): keyboard users kept losing their
// place to <body> after every card, so Enter flipped a card once and Space then scrolled the page
const sel = (el) => el && el.dataset && el.dataset.act ? Object.entries(el.dataset).map(([k, v]) => `[data-${k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase())}="${CSS.escape(v)}"]`).join("") : "";
export const redraw = () => {
  const s = sel(document.activeElement);
  document.dispatchEvent(new Event("try:rerender"));
  const el = s && document.querySelector("#main " + s);
  if (el) el.focus({ preventScroll: true });
};
ACT["fc-flip"] = () => { fc.show = !fc.show; redraw(); };
ACT["fc-next"] = (t) => {
  const c = fc.cards[fc.i];
  progress.known = progress.known || {};
  const again = c && t.dataset.k !== "1";
  if (c) { if (again) { delete progress.known[c.key]; fc.cards.splice(fc.i, 1); fc.cards.push(c); } else progress.known[c.key] = 1; saveProgress(); }
  if (!again) fc.i = (fc.i + 1) % Math.max(1, fc.cards.length);
  fc.show = false; redraw();
};
