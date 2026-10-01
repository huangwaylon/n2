// Book meta for Quartet I (served at /q1/, q1/index.html). See data/Q2-SCHEMA.md (the schema of both Quartet books)
// and docs/Q1-TRANSCRIPTION.md. kind "quartet": rendered by assets/js/q2/ like Quartet II.
// files + lazy: only the data files that exist — add each file here as it is merged (a listed file that is missing shows a
// load error on the page). Full set: front.js, challenge.js, lNN.js, vocabNN.js, kanjiNN.js for lessons 01–06.
TRY.registerBook({
  id: "q1",
  kind: "quartet",
  level: "中級",
  lessons: [1, 2, 3, 4, 5, 6],
  files: ["challenge.js"].concat(["01", "02", "03", "04", "05", "06"].map((n) => `l${n}.js`)),
  // loaded by the routes that show them (assets/js/q2/nav.js needs): the 別冊 lists, the indexes, the drill, about
  lazy: ["front.js"].concat(["01", "02", "03", "04", "05", "06"].flatMap((n) => [`vocab${n}.js`, `kanji${n}.js`])),
  bookLang: "en",
  shortTitle: "Quartet I",
  titleJa: "中級日本語カルテット I",
  accent: ["ピンクの", "pink"], // the colour of the book's grammar-note underlines (使い方)
  unitKinds: [["grammar", "初級文法チェック"], ["kanji", "漢字チャレンジ"]],
  // the readings printed under 第 and 課 on each lesson opener (pp.001, 031: だい, か; pp.067, 099, 133, 169: だい only)
  openerRuby: { 1: ["だい", "か"], 2: ["だい", "か"], 3: ["だい"], 4: ["だい"], 5: ["だい"], 6: ["だい"] },
  // the section titles of each lesson (もくじ, PDF 10–13; read · write · speak · listen), shown on the home page while
  // the lesson's file is not there yet
  toc: {
    1: ["日本を代表する有名人", "私が尊敬する有名人", "新しい出会い", "アメリカ人留学生から見た日本"],
    2: ["メールと手紙", "お礼の手紙", "先生とのやりとり", "フランス人留学生から見た日本"],
    3: ["日本を楽しむ", "私の好きな町", "友人との集まり", "イタリア人留学生から見た日本"],
    4: ["外国での経験", "座談会の記事", "困った時には", "ドイツ人留学生から見た日本"],
    5: ["和食のすすめ", "私のおすすめ料理", "週末の予定", "韓国人留学生から見た日本"],
    6: ["日本社会への声", "投書文を書く", "寮生活でのトラブル", "中国人留学生から見た日本"],
  },
  bookTitle: "4技能でひろがる 中級日本語カルテット I",
  bookTitleEn: "Quartet I: Intermediate Japanese Across the Four Language Skills",
  credit: "The Japan Times Publishing, 2019",
  footer: "Personal study edition of <em>4技能でひろがる 中級日本語カルテット I / Quartet: Intermediate Japanese Across the Four Language Skills I</em> (Tadashi Sakamoto, Akemi Yasui, Yuriko Ide, Miyuki Doi, Hideki Hamada; The Japan Times Publishing, 2019). Book content is transcribed for private use; English marked “generated” is supplementary. Audio is the browser’s speech synthesis, not the book’s recordings. Not for distribution.",
});
