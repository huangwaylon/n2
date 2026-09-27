/* Classic script loaded first by every book page (and required by the Node tools, tools/lib/books.js).
   - TRY: the data registry that data/<book>/*.js call — TRY books (n2, n1): registerBook / registerChapter /
     registerCompare / registerFront; Quartet II (q2, data/Q2-SCHEMA.md): registerLesson / registerVocab / registerKanji /
     registerUnits (ブラッシュアップ) / registerFront.
   - Colour theme: applied to <html data-theme> before the first paint, so the page never flashes the wrong theme. */
(function (root) {
  "use strict";
  const TRY = (root.TRY = root.TRY || { book: null, chapters: [], compare: [], front: [], lessons: [], vocab: [], kanji: [], units: [] });
  // data files load in parallel, so every list is kept sorted as files register
  const add = (list, x, key) => { list.push(x); list.sort((a, b) => key(a) - key(b)); };
  TRY.registerBook = (b) => (TRY.book = b);
  TRY.registerChapter = (ch) => add(TRY.chapters, ch, (c) => c.id);
  TRY.registerCompare = (groups) => (TRY.compare = groups);
  TRY.registerFront = (sections) => (TRY.front = sections);
  TRY.registerLesson = (l) => add(TRY.lessons, l, (x) => x.id);
  TRY.registerVocab = (v) => add(TRY.vocab, v, (x) => x.lesson);
  TRY.registerKanji = (k) => add(TRY.kanji, k, (x) => x.lesson);
  // units: ブラッシュアップ pages (上級へのチャレンジ c1–c8, 漢字チャレンジ k13–k24), sorted by book page
  TRY.registerUnits = (list) => list.forEach((u) => add(TRY.units, u, (x) => x.page));
  if (!root.document) return;

  // settings.theme: "auto" (follow the system) | "light" | "dark"; data-theme always holds the effective "light" | "dark"
  const dark = root.matchMedia("(prefers-color-scheme: dark)");
  TRY.applyTheme = (pref) => {
    document.documentElement.dataset.theme = pref === "light" || pref === "dark" ? pref : dark.matches ? "dark" : "light";
  };
  let pref = "auto";
  try { pref = JSON.parse(localStorage.getItem("n2.settings") || "{}").theme || "auto"; } catch (e) {}
  TRY.themePref = pref;
  TRY.applyTheme(pref);
  dark.addEventListener("change", () => TRY.applyTheme(TRY.themePref));
})(typeof window !== "undefined" ? window : globalThis);
