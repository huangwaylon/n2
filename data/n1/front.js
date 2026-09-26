// Front matter of "TRY! 日本語能力試験 N1" (PDF pp. 3–10; the 目次 pp. 11–15 is the site's sidebar). `ja` is the book's Japanese (furigana as printed);
// every `en` is our own translation. The book's Chinese translations are not reproduced: blocks the book prints only
// in Chinese (the authors' signature, the whole "To teachers" page) are given in English only (`en`, no `ja`).
// Tables keep the book's Japanese cells; `table.en` is our English, one line per row (not rendered yet). The book's
// Chinese-only header and "text type" column of the table on p.10 are given in English as `head` and a third column.
N2.registerFront([
  {
    id: "intro",
    title: { ja: "はじめに", en: "Introduction" },
    blocks: [
      { p: {
        ja: "この本は、日本語能力試験のN1に対応した文法の問題集で、ABK（{財団法人|ざいだんほうじん}　アジア学生文化{協会|きょうかい}）の30年の日本語教育の経験を{生|い}かして、学内で使いながら作られたものです。日本語を勉強している皆さんが、文法をきちんと整理して、日本語が上手に使えるようになることを願って作りました。",
        en: "This book is a collection of grammar exercises for level N1 of the Japanese-Language Proficiency Test. It draws on the 30 years of Japanese-language teaching experience of ABK (the Asian Students Cultural Association, a public-interest foundation) and was developed while being used in our own school's classes. We wrote it in the hope that all of you studying Japanese will put your grammar knowledge properly in order and become able to use Japanese well."
      } },
      { p: {
        ja: "文法は「聞く・話す・読む・書く」の{基礎|きそ}になるものです。この本では次のプロセスで勉強が進められるように工夫しました。",
        en: "Grammar is the foundation of listening, speaking, reading and writing. We designed this book so that you can study by going through the following process:"
      } },
      { list: [
        { ja: "1．実際にその文法がどのように使われているかを知る。", en: "1. Learn how the grammar is actually used." },
        { ja: "2．基本的な練習で使い慣れる。", en: "2. Get used to using it through basic practice." },
        { ja: "3．まとめの問題で話を聞いたり日本語の文章を読んだりする{運用|うんよう}練習をする。", en: "3. Practise applying it in the review questions by listening to talks and reading Japanese texts." }
      ] },
      { p: {
        ja: "まとめの問題は日本語能力試験の{出題|しゅつだい}形式に合わせてありますので、試験を受ける皆さんは、この本1冊で文法{対策|たいさく}と{読解|どっかい}、{聴解|ちょうかい}の試験の練習ができるようになっています。",
        en: "The review questions follow the question formats of the Japanese-Language Proficiency Test, so those of you taking the test can prepare for grammar and practise for the reading and listening sections, all with this one book."
      } },
      { p: {
        ja: "「TRY!」という名前には、{気軽|きがる}にやってみようという意味と、ラグビーのトライのようにがんばったことが{得点|とくてん}につながるという意味を込めました。皆さんがこの本で勉強して、日本語能力試験N1に合格し、さらに日本語を使って楽しく{自己|じこ}表現ができるようになりますよう、お祈りしています。",
        en: "The name \"TRY!\" carries two meanings: \"just give it a go\", and, like a try in rugby, the idea that your hard work turns into points. We hope that you will study with this book, pass level N1 of the Japanese-Language Proficiency Test, and go on to enjoy expressing yourself in Japanese."
      } },
      { p: { en: "The Authors\nMay 2013" } }
    ]
  },
  {
    id: "learners",
    title: { ja: "この本をお使いになる皆さんへ", en: "To Learners Using This Book" },
    blocks: [
      { p: {
        ja: "この本は、本冊、別冊「答え・スクリプト」とMP3 1枚があります。",
        en: "This book consists of the main volume, a separate booklet \"Answers & Scripts\", and one MP3 disc."
      } },

      // p.4
      { h: { ja: "1. 本冊", en: "Main volume" }, level: 2 },
      { p: {
        ja: "全部で14章に分かれており、それぞれ次のような{構成|こうせい}になっています。",
        en: "It is divided into 14 chapters in all, each organized as follows. [So printed; this N1 book actually has 10 chapters. 14 is the number of chapters in the N2 book of the same series.]"
      } },
      { h: { ja: "各章の{構成|こうせい}", en: "Structure of each chapter" }, level: 3 },
      { h: { ja: "1）できること　Can Do", en: "Can-do" }, level: 4 },
      { p: {
        ja: "その章を学習すると、何ができるようになるかが書いてあります。",
        en: "This states what you will be able to do once you have studied the chapter."
      } },
      { h: { ja: "2）{見本文|みほんぶん}", en: "Sample text" }, level: 4 },
      { p: {
        ja: "その章で勉強する文法{項目|こうもく}が、{実際|じっさい}にどのように使われているかわかるような文章になっています。1つの章が(1)(2)に分かれている場合、(1)(2)の{見本文|みほんぶん}はストーリーがつながっています。勉強する文法{項目|こうもく}は、すぐわかるように太字で書いてあります。",
        en: "This is a text that shows how the grammar points studied in the chapter are actually used. When a chapter is divided into (1) and (2), the sample texts of (1) and (2) form one continuous story. The grammar points to be studied are printed in bold so that you can spot them at once."
      } },
      { h: { ja: "3）文法{項目|こうもく}", en: "Grammar points" }, level: 4 },
      { p: {
        ja: "その章で勉強する{項目|こうもく}を{順番|じゅんばん}に並べてあります。探すときに便利なように、1章から14章まで通し番号になっています。それぞれの中には、使い方、{接続|せつぞく}、例文、{補足|ほそく}説明、練習問題などがあります（くわしい内容は☞p.6）。",
        en: "The points studied in the chapter are listed in order. To make them easy to look up, they are numbered consecutively from chapter 1 through chapter 14 [so printed; in this N1 book, points 1–123 run through chapters 1–10]. Each point contains its usage, connection, example sentences, supplementary explanations, practice questions and so on (for details ☞ p.6)."
      } },
      { h: { ja: "4）Check" }, level: 4 },
      { p: {
        ja: "各章の(1)の最後と(2)の最後に、{簡単|かんたん}な練習問題があります。ここで、学習した文法{項目|こうもく}がわかるかどうかチェックします。間違えたら、その{項目|こうもく}のところに戻ってもう一度{確認|かくにん}しましょう。",
        en: "At the end of (1) and at the end of (2) of each chapter there are some simple practice questions. Use them to check whether you understand the grammar points you have learned. If you get something wrong, go back to that point and review it once more."
      } },
      // p.5
      { h: { ja: "5）まとめの問題", en: "Review questions" }, level: 4 },
      { p: {
        ja: "その章で勉強した文法を中心にした、文法、{読解|どっかい}、{聴解|ちょうかい}の問題です。日本語能力試験の{出題形式|しゅつだいけいしき}に合わせた形になっていますから、文法{項目|こうもく}の{再確認|さいかくにん}をしながら、試験{対策|たいさく}ができます。",
        en: "These are grammar, reading and listening questions centred on the grammar studied in the chapter. They follow the question formats of the Japanese-Language Proficiency Test, so you can prepare for the test while re-checking the grammar points."
      } },

      { h: { ja: "2. 別冊", en: "Separate booklet" }, level: 2 },
      { list: [
        { ja: "1）「やってみよう！」「Check」の答え", en: "1) Answers to \"Let's try!\" and \"Check\"" },
        { ja: "2）「まとめの問題」の答え・スクリプト", en: "2) Answers and scripts for the \"Review questions\"" }
      ] },

      { h: { ja: "3. MP3" }, level: 2 },
      { p: {
        ja: "「{見本文|みほんぶん}」と、「まとめの問題」の{聴解|ちょうかい}問題の{音声|おんせい}",
        en: "Audio for the sample texts and for the listening questions in the review questions."
      } },

      // p.6
      { h: { ja: "〈文法{項目|こうもく}の中にあるもの〉", en: "What you will find in each grammar point" }, level: 2 },
      { h: { ja: "★★★" }, level: 3 },
      { p: {
        ja: "文法{項目|こうもく}の{右端|みぎはし}に、★のマークがあります。★が多いほど、重要な{項目|こうもく}という意味です。★は理解できればいい{項目|こうもく}なので、基本的に練習問題はありません。まとめの問題にも入っていないものがあります。",
        en: "At the right-hand end of each grammar point there are ★ marks. The more ★ marks, the more important the point. A one-★ point only needs to be understood, so as a rule it has no practice questions. Some of them do not appear in the review questions either."
      } },
      { h: { ja: "使う場面のマーク", en: "Usage-situation marks" }, level: 3 },
      { mark: "casual", p: {
        ja: "友だちや家族など、{身近|みぢか}な人とおしゃべりをするときに使われる表現です。",
        en: "An expression used when chatting with people close to you, such as friends and family."
      } },
      { mark: "formal", p: {
        ja: "友だちや家族とおしゃべりをするときには使われない、{硬|かた}い表現です。",
        en: "A stiff, formal expression that is not used when chatting with friends or family."
      } },
      { mark: "praise", p: {
        ja: "対象を高く評価したり、一般的に評価が高いことを認めたりするときに使われる表現です。",
        en: "An expression used when you rate something highly, or acknowledge that it is generally highly regarded."
      } },
      { mark: "regret", p: {
        ja: "{後悔|こうかい}や残念な気持ちを表したり、相手を批判したりするときに使われる表現です。",
        en: "An expression used to convey regret or disappointment, or to criticize the other person."
      } },

      { h: { ja: "どう使う？" }, level: 3 },
      { p: {
        ja: "次のことが書いてあります。",
        en: "This section contains the following."
      } },
      { h: { ja: "1．使い方の説明", en: "Explanation of usage" }, level: 4 },
      { p: {
        ja: "どんなことを言いたいときに使うか、どんな気持ちで使うかが書いてあります。中国語の{翻訳|ほんやく}もついています。",
        en: "This explains what you use the pattern to say and what feeling it carries. A Chinese translation is included (in the book; not reproduced on this site)."
      } },
      { h: { ja: "2．{接続|せつぞく}の説明", en: "Explanation of connection" }, level: 4 },
      { p: {
        ja: "どんな{品詞|ひんし}のどんな形のものと一緒に使われるか、記号を使って示しました。\n例：[N] ＋ で",
        en: "Symbols show which part of speech, in which form, the pattern is used with.\nExample: [N] ＋ で"
      } },
      { p: {
        ja: "＊は、{接続|せつぞく}で気をつけることです。",
        en: "＊ marks a point to watch out for in the connection."
      } },
      // p.7
      { h: { ja: "3．例文", en: "Example sentences" }, level: 4 },
      { p: {
        ja: "①②のように番号がついています。例文は日常生活でよく使われるものを選びました。理解の助けになるように一部イラストをつけました。また、🔗のマークは、{慣用的|かんようてき}に使われる表現を表します。",
        en: "They are numbered ①, ②, and so on. We chose example sentences of the kind often used in everyday life, and added illustrations to some of them to help understanding. The 🔗 mark indicates an expression used idiomatically."
      } },

      { h: { ja: "❗", en: "Caution box" }, level: 3 },
      { p: {
        ja: "その文法{項目|こうもく}を使うときに、気をつけることが書いてあります。",
        en: "This box tells you what to watch out for when using the grammar point."
      } },

      { h: { ja: "やってみよう！" }, level: 3 },
      { p: {
        ja: "その文法{項目|こうもく}を確認するための練習問題です。「どう使う？」と例文で勉強したことができるかどうか、実際に問題に答える形でチェックしてみてください。",
        en: "Practice questions for checking the grammar point. By actually answering questions, check whether you can do what you learned in \"How is it used?\" and the example sentences."
      } },

      { h: { ja: "📎" }, level: 3 },
      { p: {
        ja: "ほかの言葉との使い方の違いや追加で説明が必要なことなどが書いてあります。練習が必要なものは「やってみよう！」がついています。",
        en: "This covers differences in usage from other expressions and anything that needs further explanation. Where practice is needed, a \"Let's try!\" exercise is attached."
      } },

      { h: { ja: "＋Plus" }, level: 3 },
      { p: {
        ja: "違う言葉で、同じような意味で使われるものが書いてあります。練習が必要なものは「やってみよう！」がついています。",
        en: "This gives different expressions used with a similar meaning. Where practice is needed, a \"Let's try!\" exercise is attached."
      } },

      { h: { ja: "☞" }, level: 3 },
      { p: {
        ja: "その文法{項目|こうもく}と関係がある{項目|こうもく}があるときは、番号が書いてあります。",
        en: "When there are grammar points related to this one, their numbers are given."
      } },

      // p.8
      { h: { ja: "〈{品詞|ひんし}と{活用形|かつようけい}のマーク〉", en: "Marks for parts of speech and conjugated forms" }, level: 2 },
      { h: { ja: "1）{品詞|ひんし}", en: "Parts of speech" }, level: 3 },
      { table: {
        rows: [
          ["{名詞|めいし}", "[N]", "えんぴつ、日本語、病気"],
          ["い{形容詞|けいようし}", "[いA]", "大きい、小さい、おいしい"],
          ["な{形容詞|けいようし}", "[なA]", "元気、便利、しずか"],
          ["{動詞|どうし}", "[V]", "行く、食べる、勉強する"]
        ],
        en: ["Noun (pencil, Japanese, illness)", "い-adjective (big, small, tasty)", "な-adjective (healthy, convenient, quiet)", "Verb (go, eat, study)"]
      } },
      { h: { ja: "2）{動詞|どうし}の{活用形|かつようけい}", en: "Verb conjugated forms" }, level: 3 },
      { table: {
        rows: [
          ["ます形", "[V-ます]", "行きます"],
          ["辞書形", "[V-る]", "行く"],
          ["て形", "[V-て]", "行って"],
          ["た形", "[V-た]", "行った"],
          ["ない形", "[V-ない]", "行かない"],
          ["{動詞|どうし}の普通形", "[V-Pl]", "行く・行かない・行った・行かなかった"],
          ["可能形", "[V-できる]", "行ける"],
          ["{受身形|うけみけい}", "[V-られる]", "行かれる"],
          ["{使役形|しえきけい}", "[V-させる]", "行かせる"],
          ["{意向形|いこうけい}", "[V-よう]", "行こう"],
          ["条件形", "[V-ば]", "行けば"]
        ],
        en: ["ます-form", "Dictionary form", "て-form", "た-form", "ない-form", "Plain form of verbs", "Potential form", "Passive form", "Causative form", "Volitional form", "Conditional form"]
      } },
      { h: { ja: "3）普通形・{丁寧形|ていねいけい}", en: "Plain form and polite form" }, level: 3 },
      { h: { ja: "普通形　[Pl]", en: "Plain form" }, level: 4 },
      { table: {
        rows: [
          ["{動詞|どうし}", "行く\n行かない\n行った\n行かなかった", "い{形容詞|けいようし}", "大きい\n大きくない\n大きかった\n大きくなかった"],
          ["な{形容詞|けいようし}", "元気だ\n元気じゃない／元気ではない\n元気だった\n元気じゃなかった\n／元気ではなかった", "{名詞|めいし}", "病気だ\n病気じゃない／病気ではない\n病気だった\n病気じゃなかった\n／病気ではなかった"]
        ],
        en: ["Verb: non-past affirmative / non-past negative / past affirmative / past negative. い-adjective: the same four forms.", "な-adjective and noun: the same four forms; じゃ and では are both used in the negatives."]
      } },
      // p.9
      { h: { ja: "{丁寧形|ていねいけい}　[Po]", en: "Polite form" }, level: 4 },
      { table: {
        rows: [
          ["{動詞|どうし}", "行きます\n行きません\n行きました\n行きませんでした", "い{形容詞|けいようし}", "大きいです\n大きくないです\n／大きくありません\n大きかったです\n大きくなかったです\n／大きくありませんでした"],
          ["な{形容詞|けいようし}", "元気です\n元気じゃないです＊\n／元気じゃありません＊\n元気でした\n元気じゃなかったです＊\n／元気じゃありませんでした＊", "{名詞|めいし}", "病気です\n病気じゃないです＊\n／病気じゃありません＊\n病気でした\n病気じゃなかったです＊\n／病気じゃありませんでした＊"]
        ],
        en: ["Verb: non-past affirmative / non-past negative / past affirmative / past negative. い-adjective: the same four forms (negatives with ないです or ありません).", "な-adjective and noun: the same four forms (negatives with じゃないです or じゃありません; ＊ see the note below)."]
      } },

      { h: { ja: "〈{接続|せつぞく}の{示|しめ}し方〉", en: "How connections are shown" }, level: 2 },
      { p: {
        ja: "それぞれの文法{項目|こうもく}は、次のように表します。",
        en: "Each grammar point is shown as follows."
      } },
      { p: { ja: "例）", en: "Examples" } },
      { table: {
        rows: [
          ["[V-て] ＋ ください", "食べてください"],
          ["[V-~~ます~~] ＋ たい", "会いたい"],
          ["[V-~~ない~~] ＋ ないでください", "行かないでください"],
          ["[いA]~~い~~く", "大きく"],
          ["[なA]な", "しずかな"],
          ["[なA]~~な~~に", "しずかに"],
          ["[Pl] ＋ んです\n［[なA]~~だ~~な　[N]~~だ~~な］", "行くんです　行かないんです\n行ったんです　行かなかったんです\n大きいんです　大きくないんです\n大きかったんです　大きくなかったんです\n元気なんです　元気じゃないんです＊\n元気だったんです　元気じゃなかったんです＊\n病気なんです　病気じゃないんです＊\n病気だったんです　病気じゃなかったんです＊"],
          ["[Pl] ＋ ら\n［過去形だけ］", "行ったら　行かなかったら\n大きかったら　大きくなかったら\n元気だったら　元気じゃなかったら＊\n病気だったら　病気じゃなかったら＊"]
        ],
        en: [
          "て-form + ください",
          "ます-stem (drop ます) + たい",
          "ない-stem (drop ない) + ないでください",
          "い-adjective: drop い, add く",
          "な-adjective + な",
          "な-adjective: drop な, add に",
          "Plain form + んです; for な-adjectives and nouns, the non-past だ becomes な",
          "Plain form + ら; past forms only"
        ]
      } },
      { p: {
        ja: "＊な{形容詞|けいようし}・{名詞|めいし}の「じゃ」は、{論文|ろんぶん}などを書くときは「では」が使われる。",
        en: "＊ For な-adjectives and nouns, では is used instead of じゃ when writing theses and other formal texts."
      } }
    ]
  },
  {
    id: "teachers",
    title: { ja: "この本をお使いになる先生方へ", en: "To Teachers Using This Book" },
    blocks: [
      { p: { en: "First of all, thank you for choosing this book." } },
      { p: {
        en: "The aim of this book is to place learners in the various situations they meet in everyday life, let them see and feel for themselves how Japanese is used, and then have them master the grammar on that basis. We believe that through this process learners will naturally become familiar with the grammar points that appear in conversations, speeches and reading passages, prepare smoothly for the Japanese-Language Proficiency Test, and go on to apply them in their own speaking and writing."
      } },
      { p: {
        en: "With the spread of the internet, learners outside Japan have more and more opportunities to come into direct contact with Japanese, and these opportunities no doubt help them acquire natural Japanese. We feel that, as Japanese-language teaching increasingly emphasizes practical ability, the place of grammar is gradually changing too."
      } },
      { p: {
        en: "Grammar, however, is the basic framework of the sentence, and a firm grasp of it is essential to being able to use Japanese. It is also very important to choose, consciously, Japanese that suits your relationship with the other person and the situation."
      } },
      { p: {
        en: "With these points in mind, the sample texts in this book cover a wide variety of text types, as shown in the table below. The vocabulary used in them is also high-frequency vocabulary in wide everyday use."
      } },
      { table: {
        head: ["Ch.", "Genre / title", "Text type"],
        rows: [
          ["1", "ニュースを読む\nオクトーバーフェスト", "News report"],
          ["2", "スピーチを聞く\n産業医を増やそう", "Speech"],
          ["3", "昔話を読む\n飯食わぬ女房", "Folk tale"],
          ["4", "実用書を読む\n上司との付き合い方", "Practical guidebook"],
          ["5", "ドラマのシナリオを読む\n転職", "TV drama script"],
          ["6", "スピーチをする\n研修を終えて", "Speech"],
          ["7", "社内で話す\nさすが本田君", "Workplace conversation"],
          ["8", "小説を読む\n楽園の萌花", "Novel"],
          ["9", "講演を聞く\nトリアージ", "Lecture"],
          ["10", "論説文を読む\n前衛書道", "Argumentative essay"]
        ]
      } },
      { p: {
        en: "When the book was used in actual teaching at our school, learners said they could get a rough feel for the meaning and use of the grammar points even without special explanation. We sincerely hope that teachers using this book will enjoy the stories told in the sample texts together with their learners."
      } },
      { p: {
        en: "If you have any comments or suggestions about this book, please do not hesitate to let us know."
      } }
    ]
  }
]);
