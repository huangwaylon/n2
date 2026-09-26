/* Classic script loaded first by both book pages (and required by the Node tools, tools/lib/books.js).
   - TRY: the data registry that data/<book>/*.js call (registerBook / registerChapter / registerCompare / registerFront).
   - Colour theme: applied to <html data-theme> before the first paint, so the page never flashes the wrong theme. */
(function (root) {
  "use strict";
  const TRY = (root.TRY = root.TRY || { book: null, chapters: [], compare: [], front: [] });
  TRY.registerBook = (b) => (TRY.book = b);
  TRY.registerChapter = (ch) => { TRY.chapters.push(ch); TRY.chapters.sort((a, b) => a.id - b.id); };
  TRY.registerCompare = (groups) => (TRY.compare = groups);
  TRY.registerFront = (sections) => (TRY.front = sections);
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
