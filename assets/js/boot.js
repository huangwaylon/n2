/* Classic script loaded first by every book page (and required by the Node tools, tools/lib/books.js).
   - TRY: the data registry that data/<book>/*.js call — TRY books (n2, n1): registerBook / registerChapter /
     registerCompare / registerFront / registerVocab (単語); Quartet II (q2, data/Q2-SCHEMA.md): registerLesson / registerVocab / registerKanji /
     registerUnits (ブラッシュアップ) / registerFront; all books: registerLinks (data/links.js).
   - Data loading: registerBook (data/<book>/book.js, the next script on the page) starts the book's data files at once,
     so they download while the modules (assets/js/main.js and its imports) are still loading; main.js awaits TRY.ready.
   - Colour theme: applied to <html data-theme> before the first paint, so the page never flashes the wrong theme. */
(function (root) {
  "use strict";
  const TRY = (root.TRY = root.TRY || { book: null, chapters: [], compare: [], front: [], lessons: [], vocab: [], kanji: [], units: [], links: [] });
  // data files load in parallel, so every list is kept sorted as files register
  const add = (list, x, key) => { list.push(x); list.sort((a, b) => key(a) - key(b)); };
  TRY.registerBook = (b) => { TRY.book = b; if (TRY.loadBook) TRY.ready = TRY.loadBook(); };
  TRY.registerChapter = (ch) => add(TRY.chapters, ch, (c) => c.id);
  TRY.registerCompare = (groups) => (TRY.compare = groups);
  TRY.registerFront = (sections) => (TRY.front = sections);
  TRY.registerLesson = (l) => add(TRY.lessons, l, (x) => x.id);
  TRY.registerVocab = (v) => add(TRY.vocab, v, (x) => x.lesson || x.ch); // Quartet: lesson; TRY books: ch (vocab/chNN.js)
  TRY.registerKanji = (k) => add(TRY.kanji, k, (x) => x.lesson);
  // units: ブラッシュアップ pages (上級へのチャレンジ c1–c8, 漢字チャレンジ k13–k24), sorted by book page
  // links: groups of the same grammar in the three books (data/links.js, loaded by every book page)
  TRY.registerLinks = (groups) => (TRY.links = groups);
  TRY.registerUnits = (list) => list.forEach((u) => add(TRY.units, u, (x) => x.page));
  if (!root.document) return;

  // TRY.load(files): <script> per file, relative to data/<book>/ (every file registers itself, so they load in parallel);
  // resolves to the messages of the files that failed (reported on the page, the rest of the book still renders)
  const site = new URL("../../", document.currentScript.src);
  const loadScript = (src) => new Promise((ok, fail) => {
    const s = document.createElement("script");
    s.src = src; s.onload = ok; s.onerror = () => fail(new Error("could not load " + src));
    document.head.append(s);
  });
  TRY.load = (files) => {
    const dir = new URL(`data/${TRY.book.id}/`, site);
    return Promise.allSettled(files.map((f) => loadScript(new URL(f, dir)))).then((rs) => rs.filter((r) => r.status === "rejected").map((r) => r.reason.message));
  };
  // chapter files ch01.js … (TRY books; dir "vocab/" for the vocabulary lists)
  TRY.chapterFiles = (dir = "") => Array.from({ length: TRY.book.chapters }, (_, i) => `${dir}ch${String(i + 1).padStart(2, "0")}.js`);
  // the book's own files (Quartet lists them in book.js), and the cross-book links shared by all three books
  TRY.loadBook = () => TRY.load((TRY.book.files || TRY.chapterFiles().concat("compare.js", "front.js")).concat("../links.js"));

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
