// Book meta for Quartet II (served at /q2/, q2/index.html). See data/Q2-SCHEMA.md.
// kind "quartet": lessons of four skills (読む・書く・話す・聞く) instead of TRY chapters of grammar points; the data files
// to load are listed here (every file registers itself, so they load in parallel).
TRY.registerBook({
  id: "q2",
  kind: "quartet",
  level: "中級",
  lessons: [7, 8, 9, 10, 11, 12],
  files: ["front.js", "challenge.js"].concat(["07", "08", "09", "10", "11", "12"].flatMap((n) => [`l${n}.js`, `vocab${n}.js`, `kanji${n}.js`])),
  bookLang: "en",
  // names used by the Quartet renderer (assets/js/q2/): page title, hero, and the ブラッシュアップ unit kinds in book order
  shortTitle: "Quartet II",
  titleJa: "中級日本語カルテット II",
  accent: ["青い", "blue"], // the colour of the book's grammar-note underlines (使い方)
  unitKinds: [["challenge", "上級へのチャレンジ"], ["kanji", "漢字チャレンジ"]],
  bookTitle: "4技能でひろがる 中級日本語カルテット II",
  bookTitleEn: "Quartet II: Intermediate Japanese Across the Four Language Skills",
  credit: "The Japan Times Publishing, 2020",
  footer: "Personal study edition of <em>4技能でひろがる 中級日本語カルテット II / Quartet: Intermediate Japanese Across the Four Language Skills II</em> (Tadashi Sakamoto, Akemi Yasui, Yuriko Ide, Miyuki Doi, Hideki Hamada; The Japan Times Publishing, 2020). Book content is transcribed for private use; English marked “generated” is supplementary. Audio is the browser’s speech synthesis, not the book’s recordings. Not for distribution.",
});
