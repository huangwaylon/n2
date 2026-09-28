// Flashcards shared by the vocabulary drills (Quartet II 覚える単語・漢字, TRY 単語): a shuffled deck; "again" puts the
// card back at the end, "got it" marks it known (progress.known, per book).
import { ACT, progress, saveProgress, shuffle } from "./core.js";

const fc = { key: null, cards: [], i: 0, show: false };
// key names the deck (a new mode or scope reshuffles); build() → [{ key, front, back, sub }]
export function flashcards(key, build) {
  if (fc.key !== key) Object.assign(fc, { key, cards: shuffle(build()), i: 0, show: false });
  const c = fc.cards[fc.i], known = progress.known || {};
  if (!c) return `<p class="dim">No cards yet.</p>`;
  return `<div class="card-fc${fc.show ? " is-open" : ""}" data-act="dr-flip" role="button" tabindex="0" aria-label="カードをめくる Flip">
      <div class="card-fc__f ja">${c.front}</div>${fc.show ? `<div class="card-fc__b ja">${c.back}</div>${c.sub ? `<div class="card-fc__s ja">${c.sub}</div>` : ""}` : `<div class="card-fc__hint dim">タップして答えを見る <span class="en-inline">tap to reveal</span></div>`}</div>
    <div class="dr-act"><button class="btn" data-act="dr-next" data-k="0">もう一度 <span class="en-inline">Again</span></button><button class="btn primary" data-act="dr-next" data-k="1">覚えた <span class="en-inline">Got it</span></button></div>
    <p class="dim dr-count">${fc.i + 1} / ${fc.cards.length} · 覚えた ${fc.cards.filter((x) => known[x.key]).length}</p>`;
}
// the drill pages keep their state here and in their modules, so a redraw is a re-render of the route (main.js)
export const redraw = () => document.dispatchEvent(new Event("try:rerender"));
ACT["dr-flip"] = () => { fc.show = !fc.show; redraw(); };
ACT["dr-next"] = (t) => {
  const c = fc.cards[fc.i];
  progress.known = progress.known || {};
  if (c) { if (t.dataset.k === "1") progress.known[c.key] = 1; else { delete progress.known[c.key]; fc.cards.push(c); } saveProgress(); }
  fc.i = (fc.i + 1) % Math.max(1, fc.cards.length); fc.show = false; redraw();
};
