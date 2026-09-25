// Book meta for TRY! N1 (served at /n1/, n1/index.html). See data/SCHEMA.md "Books".
// The source is the Chinese edition (TRY! 新日语能力考试N1语法必备): the book's printed translations are Chinese
// (`zh` fields); every `en` string is our own translation.
N2.registerBook({
  id: "n1",
  level: "N1",
  chapters: 10,
  points: 123,
  bookLang: "zh",
  notesFirst: true, // 📎 clip notes are printed before やってみよう (point-level `notesFirst: false` where the book differs)
  bookTitle: "TRY! 日本語能力試験 N1",
  credit: "ABK; Chinese edition 新日语能力考试N1语法必备, 世界图书出版公司, 2013",
  books: [
    { id: "n2", label: "N2", href: "../", title: "TRY! N2 文法" },
    { id: "n1", label: "N1", href: "./", title: "TRY! N1 文法" },
  ],
  footer: "Personal study edition of <em>TRY! 新日语能力考试N1语法必备</em> (Chinese edition of <em>TRY! 日本語能力試験 N1</em>, ABK; 世界图书出版公司北京公司, 2013). Book content, including its Chinese translations, is transcribed for private use; all English (translations and “deep-dive” explanations) is supplementary. Not for distribution.",
});
