// Front matter of "TRY! 日本語能力試験 N1" (Chinese edition, PDF pp. 3–10), transcribed verbatim.
// `ja` / `zh` are the book's text (furigana as printed); every `en` is our own translation.
// Blocks with only `zh` (no `ja`) are Chinese-only in the book (the 全体编者 signature, the whole 写给老师们的话 page).
// Tables keep the book's cells (Japanese and Chinese as printed); `table.en` is our English, one line per row.
N2.registerFront([
  {
    id: "intro",
    title: { ja: "はじめに", zh: "前言", en: "Introduction" },
    blocks: [
      { p: {
        ja: "この本は、日本語能力試験のN1に対応した文法の問題集で、ABK（{財団法人|ざいだんほうじん}　アジア学生文化{協会|きょうかい}）の30年の日本語教育の経験を{生|い}かして、学内で使いながら作られたものです。日本語を勉強している皆さんが、文法をきちんと整理して、日本語が上手に使えるようになることを願って作りました。",
        zh: "本书是应对新日语能力考试N1级别的语法问题集，是ABK（财团法人　亚洲学生文化协会）基于30年日语教学经验编写而成。本书在编写的同时就已经作为日语培训学校内部教材得到了充分的使用和验证。编写本书，目的是希望学习日语的各位同学能够把语法考点整理清楚，有效地提高日语运用能力。",
        en: "This book is a collection of grammar exercises for level N1 of the Japanese-Language Proficiency Test. It draws on the 30 years of Japanese-language teaching experience of ABK (the Asian Students Cultural Association, a public-interest foundation) and was developed while being used in our own school's classes. We wrote it in the hope that all of you studying Japanese will put your grammar knowledge properly in order and become able to use Japanese well."
      } },
      { p: {
        ja: "文法は「聞く・話す・読む・書く」の{基礎|きそ}になるものです。この本では次のプロセスで勉強が進められるように工夫しました。",
        zh: "语法是“听·说·读·写”的基础。为了便于学习掌握，本书精心安排了以下学习步骤。",
        en: "Grammar is the foundation of listening, speaking, reading and writing. We designed this book so that you can study by going through the following process:"
      } },
      { list: [
        { ja: "1．実際にその文法がどのように使われているかを知る。", zh: "1. 了解语法考点在实际生活中是怎样运用的。", en: "1. Learn how the grammar is actually used." },
        { ja: "2．基本的な練習で使い慣れる。", zh: "2. 通过基础练习熟练掌握语法考点。", en: "2. Get used to using it through basic practice." },
        { ja: "3．まとめの問題で話を聞いたり日本語の文章を読んだりする{運用|うんよう}練習をする。", zh: "3. 通过小结练习听听力、读文章，进行实际运用的训练。", en: "3. Practise applying it in the review questions by listening to talks and reading Japanese texts." }
      ] },
      { p: {
        ja: "まとめの問題は日本語能力試験の{出題|しゅつだい}形式に合わせてありますので、試験を受ける皆さんは、この本1冊で文法{対策|たいさく}と{読解|どっかい}、{聴解|ちょうかい}の試験の練習ができるようになっています。",
        zh: "小结练习采取新日语能力考试的出题形式，大家可以利用本书同时备考语法、读解、听力三大部分。可谓一箭三雕！",
        en: "The review questions follow the question formats of the Japanese-Language Proficiency Test, so those of you taking the test can prepare for grammar and practise for the reading and listening sections, all with this one book."
      } },
      { p: {
        ja: "「TRY!」という名前には、{気軽|きがる}にやってみようという意味と、ラグビーのトライのようにがんばったことが{得点|とくてん}につながるという意味を込めました。皆さんがこの本で勉強して、日本語能力試験N1に合格し、さらに日本語を使って楽しく{自己|じこ}表現ができるようになりますよう、お祈りしています。",
        zh: "“TRY！”是本系列的名称，意在希望大家轻装上阵，更高效地掌握语法考点，同时也想告诉大家，就像橄榄球一样，尝试了、努力了，就能够提高分数。衷心期待大家利用本书好好备考，顺利通过新日语能力考试N1级别，进而能够更愉快地用日语来表达自我、展示自我。",
        en: "The name \"TRY!\" carries two meanings: \"just give it a go\", and, like a try in rugby, the idea that your hard work turns into points. We hope that you will study with this book, pass level N1 of the Japanese-Language Proficiency Test, and go on to enjoy expressing yourself in Japanese."
      } },
      { p: { zh: "全体编者\n2013年5月", en: "The Authors\nMay 2013" } }
    ]
  },
  {
    id: "learners",
    title: { ja: "この本をお使いになる皆さんへ", zh: "写给学习者的话", en: "To Learners Using This Book" },
    blocks: [
      { p: {
        ja: "この本は、本冊、別冊「答え・スクリプト」とMP3 1枚があります。",
        zh: "本书包含正文、插页（答案·听力原文）以及MP3（一张）。",
        en: "This book consists of the main volume, a separate booklet \"Answers & Scripts\", and one MP3 disc."
      } },

      // p.4
      { h: { ja: "1. 本冊", zh: "正文", en: "Main volume" }, level: 2 },
      { p: {
        ja: "全部で14章に分かれており、それぞれ次のような{構成|こうせい}になっています。",
        zh: "正文部分一共分为14章，各章结构如下。",
        en: "It is divided into 14 chapters in all, each organized as follows. (Sic: the N1 book has 10 chapters; the text is carried over from the N2 edition.)"
      } },
      { h: { ja: "各章の{構成|こうせい}", zh: "各章构成", en: "Structure of each chapter" }, level: 3 },
      { h: { ja: "1）できること　Can Do", en: "Can-do" }, level: 4 },
      { p: {
        ja: "その章を学習すると、何ができるようになるかが書いてあります。",
        zh: "这部分写明通过本章的学习，可以用日语做到什么事情。",
        en: "This states what you will be able to do once you have studied the chapter."
      } },
      { h: { ja: "2）{見本文|みほんぶん}", zh: "范文", en: "Sample text" }, level: 4 },
      { p: {
        ja: "その章で勉強する文法{項目|こうもく}が、{実際|じっさい}にどのように使われているかわかるような文章になっています。１つの章が(1)(2)に分かれている場合、(1)(2)の{見本文|みほんぶん}はストーリーがつながっています。勉強する文法{項目|こうもく}は、すぐわかるように太字で書いてあります。",
        zh: "范文中包含了本章将要学习的全部语法点，让大家明白这些语法点在实际生活中是怎么运用的。有的范文分成（1）、（2）等若干部分，但情节上是前后相连的。语法点均加粗显示，一目了然。",
        en: "This is a text that shows how the grammar points studied in the chapter are actually used. When a chapter is divided into (1) and (2), the sample texts of (1) and (2) form one continuous story. The grammar points to be studied are printed in bold so that you can spot them at once."
      } },
      { h: { ja: "3）文法{項目|こうもく}", zh: "语法点", en: "Grammar points" }, level: 4 },
      { p: {
        ja: "その章で勉強する{項目|こうもく}を{順番|じゅんばん}に並べてあります。探すときに便利なように、１章から14章まで通し番号になっています。それぞれの中には、使い方、{接続|せつぞく}、例文、{補足|ほそく}説明、練習問題などがあります（くわしい内容は☞p.6）。",
        zh: "按顺序列出本章将要学习的语法点。为方便检索，从第1章到第14章，语法点的序号是贯通到底的。每一个语法点都配有用法、接续、例句、补充说明、练习题等（详见p.6）。",
        en: "The points studied in the chapter are listed in order. To make them easy to look up, they are numbered consecutively from chapter 1 through chapter 14 (sic; the N1 book has 10 chapters). Each point contains its usage, connection, example sentences, supplementary explanations, practice questions and so on (for details ☞ p.6)."
      } },
      { h: { ja: "4）Check" }, level: 4 },
      { p: {
        ja: "各章の(1)の最後と(2)の最後に、{簡単|かんたん}な練習問題があります。ここで、学習した文法{項目|こうもく}がわかるかどうかチェックします。間違えたら、その{項目|こうもく}のところに戻ってもう一度{確認|かくにん}しましょう。",
        zh: "各章的（1）后和（2）后配有一些简单的练习题。通过这些练习题，大家可以确认一下刚刚学过的语法点是不是已经掌握了。如果做错了，可以再回到那个语法点，复习、巩固。",
        en: "At the end of (1) and at the end of (2) of each chapter there are some simple practice questions. Use them to check whether you understand the grammar points you have learned. If you get something wrong, go back to that point and review it once more."
      } },
      // p.5
      { h: { ja: "5）まとめの問題", zh: "复习题", en: "Review questions" }, level: 4 },
      { p: {
        ja: "その章で勉強した文法を中心にした、文法、{読解|どっかい}、{聴解|ちょうかい}の問題です。日本語能力試験の{出題形式|しゅつだいけいしき}に合わせた形になっていますから、文法{項目|こうもく}の{再確認|さいかくにん}をしながら、試験{対策|たいさく}ができます。",
        zh: "复习题以本章学过的语法点为主，题型涵盖语法、读解、听力。复习题采用了新日语能力考试的出题形式，以便大家再次确认自己对语法点的掌握情况，同时进行备考训练。",
        en: "These are grammar, reading and listening questions centred on the grammar studied in the chapter. They follow the question formats of the Japanese-Language Proficiency Test, so you can prepare for the test while re-checking the grammar points."
      } },

      { h: { ja: "2. 別冊", zh: "插页", en: "Separate booklet" }, level: 2 },
      { list: [
        { ja: "1）「やってみよう！」「Check」の答え", zh: "“やってみよう！”和“Check”的答案", en: "1) Answers to \"Let's try!\" and \"Check\"" },
        { ja: "2）「まとめの問題」の答え・スクリプト", zh: "“まとめの問題（复习题）”的答案及听力原文", en: "2) Answers and scripts for the \"Review questions\"" }
      ] },

      { h: { ja: "3. MP3" }, level: 2 },
      { p: {
        ja: "「{見本文|みほんぶん}」と、「まとめの問題」の{聴解|ちょうかい}問題の{音声|おんせい}",
        zh: "“見本文（范文）”和“まとめの問題（复习题）”的听力题音频",
        en: "Audio for the sample texts and for the listening questions in the review questions."
      } },

      // p.6
      { h: { ja: "〈文法{項目|こうもく}の中にあるもの〉", zh: "语法点部分符号说明", en: "What you will find in each grammar point" }, level: 2 },
      { h: { ja: "★★★" }, level: 3 },
      { p: {
        ja: "文法{項目|こうもく}の{右端|みぎはし}に、★のマークがあります。★が多いほど、重要な{項目|こうもく}という意味です。★は理解できればいい{項目|こうもく}なので、基本的に練習問題はありません。まとめの問題にも入っていないものがあります。",
        zh: "语法点右侧标有星号★。星号越多，表示这个语法点越重要。一星语法点只要求大家理解，基本上不配练习题。个别语法点并未出现在复习题当中。",
        en: "At the right-hand end of each grammar point there are ★ marks. The more ★ marks, the more important the point. A one-★ point only needs to be understood, so as a rule it has no practice questions. Some of them do not appear in the review questions either."
      } },
      { h: { ja: "使う場面のマーク", zh: "表示使用场景的符号", en: "Usage-situation marks" }, level: 3 },
      { mark: "casual", p: {
        ja: "友だちや家族など、{身近|みぢか}な人とおしゃべりをするときに使われる表現です。",
        zh: "用于和朋友、家人等亲近的人说话时。",
        en: "An expression used when chatting with people close to you, such as friends and family."
      } },
      { mark: "formal", p: {
        ja: "友だちや家族とおしゃべりをするときには使われない、{硬|かた}い表現です。",
        zh: "比较生硬，不能用于和朋友、家人说话时。",
        en: "A stiff, formal expression that is not used when chatting with friends or family."
      } },
      { mark: "praise", p: {
        ja: "対象を高く評価したり、一般的に評価が高いことを認めたりするときに使われる表現です。",
        zh: "用于高度评价话题对象或者认同该话题对象普遍评价都很高的时候。",
        en: "An expression used when you rate something highly, or acknowledge that it is generally highly regarded."
      } },
      { mark: "regret", p: {
        ja: "{後悔|こうかい}や残念な気持ちを表したり、相手を批判したりするときに使われる表現です。",
        zh: "用于表达后悔或遗憾的心情、指责对方时。",
        en: "An expression used to convey regret or disappointment, or to criticize the other person."
      } },

      { h: { ja: "どう使う？" }, level: 3 },
      { p: {
        ja: "次のことが書いてあります。",
        zh: "这部分包括以下几个内容：",
        en: "This section contains the following."
      } },
      { h: { ja: "1．使い方の説明", zh: "用法", en: "Explanation of usage" }, level: 4 },
      { p: {
        ja: "どんなことを言いたいときに使うか、どんな気持ちで使うかが書いてあります。中国語の{翻訳|ほんやく}もついています。",
        zh: "告诉大家想说什么样的事情时，以及在什么样的心情下可以使用这个语法点。配有中文翻译。",
        en: "This explains what you use the pattern to say and what feeling it carries. A Chinese translation is included."
      } },
      { h: { ja: "2．{接続|せつぞく}の説明", zh: "接续", en: "Explanation of connection" }, level: 4 },
      { p: {
        ja: "どんな{品詞|ひんし}のどんな形のものと一緒に使われるか、記号を使って示しました。\n例：[N] ＋ で",
        zh: "用符号来表示这个语法点要和什么词性、什么形式的词一起使用。",
        en: "Symbols show which part of speech, in which form, the pattern is used with.\nExample: [N] ＋ で"
      } },
      { p: {
        ja: "＊は、{接続|せつぞく}で気をつけることです。",
        zh: "＊表示接续中要注意的地方。",
        en: "＊ marks a point to watch out for in the connection."
      } },
      // p.7
      { h: { ja: "3．例文", zh: "例句", en: "Example sentences" }, level: 4 },
      { p: {
        ja: "①②のように番号がついています。例文は日常生活でよく使われるものを選びました。理解の助けになるように一部イラストをつけました。また、🔗のマークは、{慣用的|かんようてき}に使われる表現を表します。",
        zh: "标有序号①、②等。选用的例句都是日常生活中经常要用到的。为了便于大家理解，特别添加了一些插图。另外，🔗表示这是惯用表达方式。",
        en: "They are numbered ①, ②, and so on. We chose example sentences of the kind often used in everyday life, and added illustrations to some of them to help understanding. The 🔗 mark indicates an expression used idiomatically."
      } },

      { h: { ja: "❗", en: "Caution box" }, level: 3 },
      { p: {
        ja: "その文法{項目|こうもく}を使うときに、気をつけることが書いてあります。",
        zh: "告诉大家使用这个语法点时要注意的地方。",
        en: "This box tells you what to watch out for when using the grammar point."
      } },

      { h: { ja: "やってみよう！" }, level: 3 },
      { p: {
        ja: "その文法{項目|こうもく}を確認するための練習問題です。「どう使う？」と例文で勉強したことができるかどうか、実際に問題に答える形でチェックしてみてください。",
        zh: "请大家动手练习，看看大家通过“どう使う？”和例句的学习，是不是已经掌握这个语法点了。",
        en: "Practice questions for checking the grammar point. By actually answering questions, check whether you can do what you learned in \"How is it used?\" and the example sentences."
      } },

      { h: { ja: "📎" }, level: 3 },
      { p: {
        ja: "ほかの言葉との使い方の違いや追加で説明が必要なことなどが書いてあります。練習が必要なものは「やってみよう！」がついています。",
        zh: "这里告诉大家这个语法点和其他词语的不同用法或需要补充说明的事情。必要的时候还配有“やってみよう！”练习。",
        en: "This covers differences in usage from other expressions and anything that needs further explanation. Where practice is needed, a \"Let's try!\" exercise is attached."
      } },

      { h: { ja: "＋Plus" }, level: 3 },
      { p: {
        ja: "違う言葉で、同じような意味で使われるものが書いてあります。練習が必要なものは「やってみよう！」がついています。",
        zh: "告诉大家相同的意思还可以用其他不同的词语表达出来。必要的时候还配有“やってみよう！”练习。",
        en: "This gives different expressions used with a similar meaning. Where practice is needed, a \"Let's try!\" exercise is attached."
      } },

      { h: { ja: "☞" }, level: 3 },
      { p: {
        ja: "その文法{項目|こうもく}と関係がある{項目|こうもく}があるときは、番号が書いてあります。",
        zh: "告诉大家和这个语法点相关的语法点的序号。",
        en: "When there are grammar points related to this one, their numbers are given."
      } },

      // p.8
      { h: { ja: "〈{品詞|ひんし}と{活用形|かつようけい}のマーク〉", zh: "词性和活用形符号说明", en: "Marks for parts of speech and conjugated forms" }, level: 2 },
      { h: { ja: "1）{品詞|ひんし}", zh: "词性", en: "Parts of speech" }, level: 3 },
      { table: {
        rows: [
          ["{名詞|めいし}", "名词", "[N]", "えんぴつ、日本語、病気"],
          ["い{形容詞|けいようし}", "い形容词", "[いA]", "大きい、小さい、おいしい"],
          ["な{形容詞|けいようし}", "な形容词", "[なA]", "元気、便利、しずか"],
          ["{動詞|どうし}", "动词", "[V]", "行く、食べる、勉強する"]
        ],
        en: ["Noun (pencil, Japanese, illness)", "い-adjective (big, small, tasty)", "な-adjective (healthy, convenient, quiet)", "Verb (go, eat, study)"]
      } },
      { h: { ja: "2）{動詞|どうし}の{活用形|かつようけい}", zh: "动词的活用形", en: "Verb conjugated forms" }, level: 3 },
      { table: {
        rows: [
          ["ます形", "ます形", "[V-ます]", "行きます"],
          ["辞書形", "辞典形", "[V-る]", "行く"],
          ["て形", "て形", "[V-て]", "行って"],
          ["た形", "た形", "[V-た]", "行った"],
          ["ない形", "ない形", "[V-ない]", "行かない"],
          ["{動詞|どうし}の普通形", "动词普通形", "[V-Pl]", "行く・行かない・行った・行かなかった"],
          ["可能形", "可能形", "[V-できる]", "行ける"],
          ["{受身形|うけみけい}", "被动形", "[V-られる]", "行かれる"],
          ["{使役形|しえきけい}", "使役形", "[V-させる]", "行かせる"],
          ["{意向形|いこうけい}", "意向形", "[V-よう]", "行こう"],
          ["条件形", "条件形", "[V-ば]", "行けば"]
        ],
        en: ["ます-form", "Dictionary form", "て-form", "た-form", "ない-form", "Plain form of verbs", "Potential form", "Passive form", "Causative form", "Volitional form", "Conditional form"]
      } },
      { h: { ja: "3）普通形・{丁寧形|ていねいけい}", zh: "简体·礼貌体", en: "Plain form and polite form" }, level: 3 },
      { h: { ja: "普通形　[Pl]", zh: "简体", en: "Plain form" }, level: 4 },
      { table: {
        rows: [
          ["{動詞|どうし}\n动词", "行く\n行かない\n行った\n行かなかった", "い{形容詞|けいようし}\nい形容词", "大きい\n大きくない\n大きかった\n大きくなかった"],
          ["な{形容詞|けいようし}\nな形容词", "元気だ\n元気じゃない／元気ではない\n元気だった\n元気じゃなかった\n／元気ではなかった", "{名詞|めいし}\n名词", "病気だ\n病気じゃない／病気ではない\n病気だった\n病気じゃなかった\n／病気ではなかった"]
        ],
        en: ["Verb: non-past affirmative / non-past negative / past affirmative / past negative. い-adjective: the same four forms.", "な-adjective and noun: the same four forms; じゃ and では are both used in the negatives."]
      } },
      // p.9
      { h: { ja: "{丁寧形|ていねいけい}　[Po]", zh: "礼貌体", en: "Polite form" }, level: 4 },
      { table: {
        rows: [
          ["{動詞|どうし}\n动词", "行きます\n行きません\n行きました\n行きませんでした", "い{形容詞|けいようし}\nい形容词", "大きいです\n大きくないです\n／大きくありません\n大きかったです\n大きくなかったです\n／大きくありませんでした"],
          ["な{形容詞|けいようし}\nな形容词", "元気です\n元気じゃないです＊\n／元気じゃありません＊\n元気でした\n元気じゃなかったです＊\n／元気じゃありませんでした＊", "{名詞|めいし}\n名词", "病気です\n病気じゃないです＊\n／病気じゃありません＊\n病気でした\n病気じゃなかったです＊\n／病気じゃありませんでした＊"]
        ],
        en: ["Verb: non-past affirmative / non-past negative / past affirmative / past negative. い-adjective: the same four forms (negatives with ないです or ありません).", "な-adjective and noun: the same four forms (negatives with じゃないです or じゃありません; ＊ see the note below)."]
      } },

      { h: { ja: "〈{接続|せつぞく}の{示|しめ}し方〉", zh: "接续的表示方法", en: "How connections are shown" }, level: 2 },
      { p: {
        ja: "それぞれの文法{項目|こうもく}は、次のように表します。",
        zh: "每个语法点的接续都按下面的方法来表示：",
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
          ["[Pl] ＋ ら\n［過去形だけ　仅过去时］", "行ったら　行かなかったら\n大きかったら　大きくなかったら\n元気だったら　元気じゃなかったら＊\n病気だったら　病気じゃなかったら＊"]
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
    title: { ja: "この本をお使いになる先生方へ", zh: "写给老师们的话", en: "To Teachers Using This Book" },
    blocks: [
      { p: { zh: "首先感谢老师们选用本书。", en: "First of all, thank you for choosing this book." } },
      { p: {
        zh: "本书的编写目的是，让学生置身于日常生活中能碰到的各种场景，亲眼看一看、亲身感受一下日语是怎么用的，然后在这个基础上掌握语法。通过这样的过程，我们相信，学生可以自然而然地熟悉对话、演讲、读解中出现的语法点，顺利地进行新日语能力考试的备考学习，进而运用到自己的发言、写作当中去。",
        en: "The aim of this book is to place learners in the various situations they meet in everyday life, let them see and feel for themselves how Japanese is used, and then have them master the grammar on that basis. We believe that through this process learners will naturally become familiar with the grammar points that appear in conversations, speeches and reading passages, prepare smoothly for the Japanese-Language Proficiency Test, and go on to apply them in their own speaking and writing."
      } },
      { p: {
        zh: "随着网络的普及，日本国外的学习者也能有越来越多的机会直接接触日语，而这些机会无疑会帮助他们学得一口自然的日语。我们以为，在重视运用能力的日语教学发展趋势下，语法的定位也在逐渐发生着改变。",
        en: "With the spread of the internet, learners outside Japan have more and more opportunities to come into direct contact with Japanese, and these opportunities no doubt help them acquire natural Japanese. We feel that, as Japanese-language teaching increasingly emphasizes practical ability, the place of grammar is gradually changing too."
      } },
      { p: {
        zh: "但是，语法点是句子的基本框架，掌握好语法点对于日语运用能力来说至关重要。同时，有意识地根据自己和对方的位置关系、使用场景选择恰当的日语也是非常重要的。",
        en: "Grammar, however, is the basic framework of the sentence, and a firm grasp of it is essential to being able to use Japanese. It is also very important to choose, consciously, Japanese that suits your relationship with the other person and the situation."
      } },
      { p: {
        zh: "考虑到上述这几点，本书的范文选取了多种多样的文章类型，详见下表。这些范文中所使用的词汇也都是生活中广泛使用的高频词汇。",
        en: "With these points in mind, the sample texts in this book cover a wide variety of text types, as shown in the table below. The vocabulary used in them is also high-frequency vocabulary in wide everyday use."
      } },
      { table: {
        head: ["章", "标题", "范文类型"],
        rows: [
          ["1", "ニュースを読む\nオクトーバーフェスト", "新闻报道"],
          ["2", "スピーチを聞く\n産業医を増やそう", "演讲稿"],
          ["3", "昔話を読む\n飯食わぬ女房", "传说故事"],
          ["4", "実用書を読む\n上司との付き合い方", "实用类图书"],
          ["5", "ドラマのシナリオを読む\n転職", "电视剧剧本"],
          ["6", "スピーチをする\n研修を終えて", "演讲稿"],
          ["7", "社内で話す\nさすが本田君", "职场对话"],
          ["8", "小説を読む\n楽園の萌花", "小说"],
          ["9", "講演を聞く\nトリアージ", "讲座"],
          ["10", "論説文を読む\n前衛書道", "议论文"]
        ],
        en: [
          "Ch. 1 — Reading the news: Oktoberfest — news report",
          "Ch. 2 — Listening to a speech: Let's have more company doctors — speech",
          "Ch. 3 — Reading a folk tale: The Wife Who Doesn't Eat — folk tale",
          "Ch. 4 — Reading a practical book: How to get along with your boss — practical book",
          "Ch. 5 — Reading a TV drama script: Changing jobs — TV drama script",
          "Ch. 6 — Giving a speech: After finishing the training — speech",
          "Ch. 7 — Talking at work: That's Honda for you — workplace conversation",
          "Ch. 8 — Reading a novel: Moeka of Paradise — novel",
          "Ch. 9 — Listening to a lecture: Triage — lecture",
          "Ch. 10 — Reading an editorial essay: Avant-garde calligraphy — argumentative essay"
        ]
      } },
      { p: {
        zh: "本校在实际教学中使用了本书，学生们说，即便不用专门解释，也能够大概感觉到语法点的意思和用法。我们衷心希望，使用本书的老师们能和学生们一起感受到范文的故事性。",
        en: "When the book was used in actual teaching at our school, learners said they could get a rough feel for the meaning and use of the grammar points even without special explanation. We sincerely hope that teachers using this book will enjoy the stories of the sample texts together with their learners."
      } },
      { p: {
        zh: "关于本书，各位老师如果有什么意见和建议，还请不吝赐教。",
        en: "If you have any comments or suggestions about this book, please do not hesitate to let us know."
      } }
    ]
  }
]);
