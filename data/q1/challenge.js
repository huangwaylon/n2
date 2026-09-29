// Quartet I ブラッシュアップ: 初級文法チェック ①–⑦ (pp.206–229), 漢字チャレンジ ①–⑫ (pp.230–241). data/Q2-SCHEMA.md "Units".
// Assembled by tools/q2/merge-units.js; edit this file directly from now on.
TRY.registerUnits([
 {
  "id": "g1",
  "kind": "grammar",
  "no": 1,
  "title": "書き{言葉|ことば}の{文体|ぶんたい}",
  "en": "Styles in written Japanese",
  "page": 206,
  "blocks": [
   {
    "t": "p",
    "page": 206,
    "text": {
     "en": "Written and spoken Japanese differ in styles. Written Japanese is further divided into two subcategories: です・ます style and だ・である style. These two styles are used in different contexts, and need to be used appropriately according to their form and function."
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g1-ex",
    "title": {
     "ja": "次の (1) 〜 (3) はどのような{文章|ぶんしょう}に使いますか。\na. レポート、b. 先生へのメール、c. {友達|ともだち}へのメールの中から{選|えら}んでください。",
     "tr": "What kind of writing is each of (1)–(3) below used in? Choose from a. a report, b. an email to a teacher, c. an email to a friend."
    },
    "blocks": [
     {
      "t": "choice",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "インターンシップをするためには、{推薦状|すいせんじょう}が{必要|ひつよう}です。",
         "tr": "A letter of recommendation is necessary in order to do an internship."
        },
        "options": [
         "a",
         "b",
         "c"
        ],
        "answer": 1
       },
       {
        "n": "(2)",
        "text": {
         "ja": "インターンシップをするためには、推薦状が必要である。",
         "tr": "A letter of recommendation is required in order to do an internship."
        },
        "options": [
         "a",
         "b",
         "c"
        ],
        "answer": 0
       },
       {
        "n": "(3)",
        "text": {
         "ja": "インターンシップをするためには、推薦状が必要だよ。",
         "tr": "You need a letter of recommendation to do an internship, you know."
        },
        "options": [
         "a",
         "b",
         "c"
        ],
        "answer": 2
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g1-1",
    "text": {
     "ja": "です・ます{体|たい}／だ体／である体",
     "en": "Polite style / Plain style / Literary style"
    }
   },
   {
    "t": "table",
    "cols": [
     "auto",
     "1fr",
     "1fr",
     "1fr"
    ],
    "head": [
     [
      "",
      {
       "ja": "です・ます{体|たい}",
       "en": "Polite Style"
      },
      {
       "ja": "だ{体|たい}",
       "en": "Plain Style"
      },
      {
       "ja": "である{体|たい}",
       "en": "Literary Style"
      }
     ]
    ],
    "rows": [
     [
      {
       "text": {
        "ja": "{名詞|めいし}",
        "en": "Nouns"
       },
       "head": true,
       "rowspan": 4
      },
      "学生です",
      "学生だ",
      "学生である"
     ],
     [
      "学生ではありません",
      "学生ではない",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      "学生でした",
      "学生だった",
      "学生であった"
     ],
     [
      "学生ではありませんでした",
      "学生ではなかった",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      {
       "text": {
        "ja": "な{形容詞|けいようし}",
        "en": "な-adjectives"
       },
       "head": true,
       "rowspan": 4
      },
      "{便利|べんり}です",
      "便利だ",
      "便利である"
     ],
     [
      "便利ではありません",
      "便利ではない",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      "便利でした",
      "便利だった",
      "便利であった"
     ],
     [
      "便利ではありませんでした",
      "便利ではなかった",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      {
       "text": {
        "ja": "い{形容詞|けいようし}",
        "en": "い-adjectives"
       },
       "head": true,
       "rowspan": 2
      },
      "いいです",
      "いい",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      "よくありません",
      "よくない",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      {
       "text": {
        "ja": "{動詞|どうし}",
        "en": "Verbs"
       },
       "head": true,
       "rowspan": 2
      },
      "話します",
      "話す",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      "話しません",
      "話さない",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      {
       "text": {
        "ja": "その{他|た}",
        "en": "Other expressions"
       },
       "head": true,
       "rowspan": 4
      },
      "大変なのです",
      "大変なのだ",
      "大変なのである"
     ],
     [
      "問題ではありませんか",
      "問題ではないか",
      {
       "text": "-",
       "style": "center"
      }
     ],
     [
      "できるでしょう",
      "できるだろう",
      "できるであろう"
     ],
     [
      "見ましょう",
      "見よう",
      {
       "text": "-",
       "style": "center"
      }
     ]
    ]
   },
   {
    "t": "p",
    "page": 207,
    "text": {
     "en": "です・ます style (polite style) refers to the style in which nouns and adjectives are followed by です and verbs are written in ます form. This style shows respect towards the audience, while conveying a soft tone of voice (as if the writer is speaking to the reader). It is often used in letters and e-mail messages addressed to someone superior to the writer."
    }
   },
   {
    "t": "p",
    "style": "indent",
    "text": {
     "en": "On the other hand, だ style (plain style) takes nouns/ な-adjectives followed by だ and verbs/い-adjectives in plain forms. The plain style in written language is considered more formal than です・ます style, and is often used in written reports, theses, articles in newspaper, and other compositions in which the writer may need to convey ideas in a concise and assertive manner."
    }
   },
   {
    "t": "list",
    "mark": "・",
    "items": [
     {
      "en": "In casual writing addressed to the general publice (such as blog articles and essays), either です・ます style or だ style may be used."
     },
     {
      "en": "In each writing, the same style should be used consistently; です・ます style and だ style are not to be mixed."
     },
     {
      "en": "In だ style, だ after nouns/な-adjectives can be replaced by である style (literary style). である style is used only when emphatic expression is needed."
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g1-2",
    "text": {
     "ja": "話し{言葉|ことば}と書き言葉",
     "en": "Spoken vs. written Japanese"
    }
   },
   {
    "t": "p",
    "text": {
     "en": "The plain form is also used in spoken Japanese, but this usage is considered casual. Expressions specific to speech, such as the examples in the table below, should not be used for the plain style in writing, as they differ significantly in the level of formality."
    }
   },
   {
    "t": "head",
    "style": "plain",
    "text": {
     "en": "❖ Differences between spoken language and だ style in written language"
    }
   },
   {
    "t": "table",
    "cols": [
     "auto",
     "1fr",
     "1fr"
    ],
    "head": [
     [
      "",
      {
       "ja": "話し{言葉|ことば}",
       "en": "Spoken Language"
      },
      {
       "ja": "書き{言葉|ことば}の「だ{体|たい}」",
       "en": "だ Style in Written Language"
      }
     ]
    ],
    "rows": [
     [
      {
       "text": {
        "ja": "{文末表現|ぶんまつひょうげん}",
        "en": "Sentence-final Expressions"
       },
       "head": true
      },
      "・{便利|べんり}**だよ**\n・来て**ください**",
      "・便利**だ**\n・来て**ほしい**／来て**もらいたい**"
     ],
     [
      {
       "text": {
        "ja": "{縮約形|しゅくやくけい}",
        "en": "Contracted Forms"
       },
       "head": true
      },
      "・しなく**ちゃ**いけない\n・しな**きゃ**いけない\n・食べ**ちゃった**\n・おい**といた**\n・作っ**てる**",
      "・しなく**ては**いけない\n・しな**ければ**いけない\n・食べ**てしまった**\n・おい**ておいた**\n・作っ**ている**"
     ],
     [
      {
       "text": {
        "ja": "{接続詞|せつぞくし}・{副詞|ふくし}など",
        "en": "Conjunctions, Adverbs, etc."
       },
       "head": true
      },
      {
       "ja": "・日本語の授業は楽しい。\n**でも**、{難|むずか}しい。\n・このパソコンはいい**けど**、高い。\n・{京都|きょうと}の{桜|さくら}はきれいだ**って**聞いた。\n・今年の夏は**すごく**／**とっても**{暑|あつ}い。",
       "tr": "Japanese class is fun. But it's hard. / This computer is good, but it's expensive. / I heard the cherry blossoms in Kyoto are beautiful. / This summer is super / really hot."
      },
      {
       "ja": "・日本語の授業は楽しい。\n**しかし**、難しい。\n・このパソコンはいい**が**、高い。\n・京都の桜はきれいだ**と**聞いた。\n・今年の夏は**大変**／**とても**暑い。",
       "tr": "Japanese class is enjoyable. However, it is difficult. / This computer is good, but it is expensive. / I heard that the cherry blossoms in Kyoto are beautiful. / This summer is very / extremely hot."
      }
     ]
    ]
   },
   {
    "t": "p",
    "style": "right",
    "text": {
     "ja": "✎答え▶ (1) b　(2) a　(3) c",
     "tr": "Answers: (1) b (2) a (3) c"
    }
   }
  ]
 },
 {
  "id": "g2",
  "kind": "grammar",
  "no": 2,
  "title": "そうだ／らしい／ようだ／みたいだ",
  "lesson": 1,
  "page": 208,
  "blocks": [
   {
    "t": "p",
    "page": 208,
    "text": {
     "en": "Listed below are four expressions of conjecture that are often confused. Note that some of these expressions also have functions other than conjecture."
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g2-ex",
    "title": {
     "ja": "一番いい答えを{選|えら}んでください。",
     "tr": "Choose the best answer."
    },
    "blocks": [
     {
      "t": "choice",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "A：（本を読みながら）あははははは……。\nB：その本、【a. おもしろい　b. おもしろ】そうだね。\nA：うん。すごくおもしろいよ。貸してあげようか。",
         "tr": "A: (reading a book) Ha ha ha ha ha...\nB: That book looks funny.\nA: Yeah. It's really funny. Want me to lend it to you?"
        },
        "options": [
         "a. おもしろい",
         "b. おもしろ"
        ],
        "answer": 1
       },
       {
        "n": "(2)",
        "text": {
         "ja": "ニュースによると、{沖縄|おきなわ}に{台風|たいふう}が近づいている【a. そう　b. よう】ですよ。",
         "tr": "According to the news, a typhoon is approaching Okinawa."
        },
        "options": [
         "a. そう",
         "b. よう"
        ],
        "answer": 0
       },
       {
        "n": "(3)",
        "text": {
         "ja": "{田中|たなか}さんの弟さんは{背|せ}が{低|ひく}くて{髪|かみ}が長いから、\n後ろから見ると女の人【a. そう　b. らしい　c. のよう】です。",
         "tr": "Tanaka-san's younger brother is short and has long hair, so from behind he looks like a woman."
        },
        "options": [
         "a. そう",
         "b. らしい",
         "c. のよう"
        ],
        "answer": 2
       },
       {
        "n": "(4)",
        "text": {
         "ja": "私の妹は髪が長くて、女【a. そう　b. らしい　c. のよう】です。",
         "tr": "My younger sister has long hair and is very feminine."
        },
        "options": [
         "a. そう",
         "b. らしい",
         "c. のよう"
        ],
        "answer": 1
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g2-1",
    "text": "〜そうだ"
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g2-1a",
    "text": {
     "ja": "{伝聞|でんぶん}",
     "en": "Hearsay"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "A",
        "ja": "サラさんが言っていたけど、この本は{難|むずか}しい**そうだ**よ。",
        "tr": "Sara was saying that this book is supposed to be hard."
       },
       {
        "sp": "B",
        "ja": "そうなんだ。{今学期|こんがっき}は大変かもしれないね。",
        "tr": "Really? This semester might be tough, then."
       }
      ]
     },
     {
      "n": 2,
      "ja": "キムさんによると、ワンさんはとてもまじめだ**そうです**。",
      "tr": "According to Kim-san, Wang-san is very serious."
     },
     {
      "n": 3,
      "ja": "ニュースによると、{昨日|きのう}{九州|きゅうしゅう}で雪が{降|ふ}った**そうだ**。",
      "tr": "According to the news, it snowed in Kyushu yesterday."
     },
     {
      "n": 4,
      "ja": "サラさんはフランス人だ**そうだ**。",
      "tr": "I hear Sara is French."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: a woman tells a man about a book, and a thought bubble above them shows Sara holding up the book and talking.",
    "labels": [
     "1"
    ]
   },
   {
    "t": "conn",
    "forms": [
     "[普] !!そうだ!!"
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "This structure is used when the speaker directly quotes information acquired from someone else."
       },
       {
        "en": "Unlike the function listed below (B), そうだ for this function (i.e., hearsay) can be used only at the end of the sentence."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g2-1b",
    "text": {
     "ja": "{直感|ちょっかん}による{推量|すいりょう}",
     "en": "Conjecture based on intuition"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "A",
        "ja": "見て！　この本、{難|むずか}し**そう**。",
        "tr": "Look! This book looks hard."
       },
       {
        "sp": "B",
        "ja": "本当だ。漢字が多くて難し**そうな**本だね。",
        "tr": "You're right. It has a lot of kanji. It looks like a hard book."
       }
      ]
     },
     {
      "n": 2,
      "ja": "今日の宿題は難しく**なさそうだ**。",
      "tr": "Today's homework doesn't look hard."
     },
     {
      "n": 3,
      "ja": "ワンさんはまじめ**そうです**。",
      "tr": "Wang-san looks serious."
     },
     {
      "n": 4,
      "ja": "雨が{降|ふ}り**そうだ**。",
      "tr": "It looks like it's going to rain."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustrations: [#1] an open book whose pages are full of dense vertical text; [#3] a woman in glasses reading a book attentively; [#4] a woman under dark clouds, thinking of an umbrella.",
    "labels": [
     "1",
     "3",
     "4"
    ]
   },
   {
    "t": "conn",
    "page": 209,
    "forms": [
     {
      "stack": [
       "いA~~い~~",
       "なA",
       "V~~ます~~",
       "＊〜ない → 〜なさ"
      ],
      "join": "!!そうだ／そうな!! N"
     }
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "This structure is used to express the speaker’s impression of something based on what was heard, seen, etc."
       },
       {
        "en": "そうだ here is used to state the speaker’s conjecture or judgment (rather than direct observation) that is based on the appearance of the subject being discussed. As such, this structure cannot be used with words describing qualities that are obvious just by looking at the person, thing, etc. (e.g., きれい , かわいい)"
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "items": [
       {
        "mark": "×",
        "ja": "（あの人は）きれいそうだ。",
        "tr": "(Incorrect) Intended: \"(That person) looks pretty.\""
       }
      ]
     },
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "そうだ conjugates in the same pattern as な-adjectives."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g2-2",
    "text": "〜らしい"
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g2-2a",
    "text": {
     "ja": "{伝聞|でんぶん}による{推量|すいりょう}",
     "en": "Conjecture based on hearsay"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "A",
        "ja": "この宿題、3時間もかかったよ。\n1ページだけだったのに……。",
        "tr": "This homework took me three whole hours. And it was only one page..."
       },
       {
        "sp": "B",
        "ja": "ええっ、そんなに！",
        "tr": "What? That long!"
       },
       {
        "sp": "→ C",
        "ja": "あの宿題はとても{難|むずか}しい**らしい**。",
        "tr": "That homework is apparently very hard."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "sp": "A",
        "ja": "来学期は{寮|りょう}に住もうと思っているんだ。",
        "tr": "I'm thinking of living in the dorm next semester."
       },
       {
        "sp": "B",
        "ja": "Cさんから聞いたんだけど、あそこは毎週パーティーがあって、にぎやか**らしい**よ。",
        "tr": "I heard from C that they have parties there every week, so it's apparently pretty lively."
       }
      ]
     },
     {
      "n": 3,
      "ja": "うわさでは、あの二人は結婚する**らしい**。",
      "tr": "Rumor has it that those two are getting married."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: A, holding the homework, complains; B reacts in surprise; C, overhearing with a hand cupped to her ear, has a light-bulb idea.",
    "labels": [
     "1",
     "A",
     "B",
     "C"
    ]
   },
   {
    "t": "conn",
    "forms": [
     {
      "stack": [
       "[普]",
       "＊なA~~だ~~",
       "＊N~~だ~~"
      ],
      "join": "!!らしい!!"
     }
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "This structure is used when stating conjecture based on information the speaker obtained through hearsay or reading. This does not directly quote someone else’s statement, so it can be used when referring to information that is not definitive (as shown in [#2] and [#3])."
       },
       {
        "en": "Unlike function B below, らしい for this function can only be used at the end of the sentence."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g2-2b",
    "text": {
     "ja": "{典型的|てんけいてき}な{性質|せいしつ}やイメージを表す",
     "en": "Stereotypical N"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "A",
        "ja": "今日はいい天気ですね。",
        "tr": "It's nice weather today, isn't it?"
       },
       {
        "sp": "B",
        "ja": "本当に。{暖|あたた}かくて春**らしい**ですね。",
        "en": "(It’s warm today just how spring should be.)"
       }
      ]
     },
     {
      "n": 2,
      "ja": "今日は暖かくて冬**らしくない**天気だ。",
      "en": "(It’s warm today even though it’s winter.)"
     },
     {
      "n": 3,
      "ja": "うちの犬はさんぽが{嫌|きら}いで、犬**らしくない**。",
      "tr": "Our dog hates walks. He's not very doglike."
     },
     {
      "n": 4,
      "lines": [
       {
        "sp": "子",
        "ja": "いってきます。",
        "tr": "I'm heading out."
       },
       {
        "sp": "母",
        "ja": "またバイト？　学生なら学生**らしく**勉強しなさい。",
        "tr": "Your part-time job again? If you're a student, study like a student should."
       }
      ]
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: butterflies flutter over a bush of blooming flowers.",
    "labels": [
     "1"
    ]
   },
   {
    "t": "p",
    "style": "right",
    "text": {
     "ja": "✎答え▶ (1) b　(2) a　(3) c　(4) b",
     "tr": "Answers: (1) b (2) a (3) c (4) b"
    }
   },
   {
    "t": "conn",
    "page": 210,
    "forms": [
     "N !!らしい!!",
     "N !!らしい!! N",
     "N !!らしく!! V"
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "X は N らしい expresses that X is a perfect example of N, as it has qualities that are considered stereotypical of N."
       },
       {
        "en": "らしい conjugates the same way as い-adjectives."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "3.",
    "id": "g2-3",
    "text": "〜ようだ"
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g2-3a",
    "text": {
     "ja": "経験による{推量|すいりょう}",
     "en": "Conjecture based on experience"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "あの本は{難|むずか}しい**ようだ**。",
      "en": "Seeing a smart person struggling with a book, the speaker speculates:",
      "tr": "That book seems to be hard."
     },
     {
      "n": 2,
      "ja": "あの授業は{楽|らく}な**ようだ**。スケジュールには宿題も試験もない。",
      "tr": "That class seems to be easy. There's no homework or exams on the schedule."
     },
     {
      "n": 3,
      "ja": "駅前の店は11時になっても、シャッターが{開|あ}かない。今日は休みの**ようだ**。",
      "tr": "The shutter of the shop in front of the station still isn't open even though it's eleven o'clock. It seems to be closed today."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: a man frowns in confusion over a thick book while a woman watching him looks surprised.",
    "labels": [
     "1"
    ]
   },
   {
    "t": "conn",
    "forms": [
     {
      "stack": [
       "[普]",
       "＊なA~~だ~~ → な",
       "＊N~~だ~~ → の"
      ],
      "join": "!!ようだ!!"
     }
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "〜ようだ is used to express conjecture based on the speaker’s experience or knowledge. This structure expresses conjecture derived from logical thinking rather than intuition."
       },
       {
        "en": "Unlike ようだ for functions B and C below, ようだ for conjecture is used only at the end of the sentence."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g2-3b",
    "text": {
     "ja": "{例示|れいじ}",
     "en": "Example"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "私は!![!!タイ料理の**ような**!!]!!{辛|から}い料理が好きだ。",
      "tr": "I like spicy food, like Thai food."
     },
     {
      "n": 2,
      "ja": "日本では!![!!キティの**ような**!!]!!かわいいキャラクターが人気です。",
      "tr": "In Japan, cute characters like Kitty are popular."
     }
    ]
   },
   {
    "t": "conn",
    "forms": [
     "N₁ の !!ような!! N₂"
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "“N₁ のような N₂” presents N₁ as an example of N₂."
       },
       {
        "en": "ようだ here conjugates in the same way as な-adjectives."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "C",
    "id": "g2-3c",
    "text": {
     "ja": "たとえ",
     "en": "Simile"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "{田中|たなか}さんは50歳だが、子どもの**ような**人だ。",
      "en": "(Tanaka is not a child.)",
      "tr": "Tanaka-san is 50, but he's like a child."
     },
     {
      "n": 2,
      "ja": "田中さんは子どもの**ように**よく{泣|な}く。",
      "tr": "Tanaka-san cries a lot, like a child."
     }
    ]
   },
   {
    "t": "p",
    "text": {
     "en": "cf. らしい would be used if Tanaka is actually a child."
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "ja": "3歳のマコトくんはいつも元気で、子ども**らしい**。",
      "en": "(Makoto is a child.)",
      "tr": "Three-year-old Makoto is always full of energy, just like a child should be."
     }
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 3,
      "ja": "ジョージはモデルの**ように**かっこいい。",
      "en": "(George is not a model.)",
      "tr": "George is as good-looking as a model."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1] and [#2]: a middle-aged man in a suit bawling with tears flying, rubbing his eyes like a child.",
    "labels": [
     "1",
     "2"
    ]
   },
   {
    "t": "conn",
    "forms": [
     "N の !!ようだ!!",
     "N の !!ような!! N",
     "N の !!ように!! V/A"
    ],
    "blocks": [
     {
      "t": "p",
      "text": {
       "en": "This is an expression used to compare the subject to someone/something else."
      }
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "4.",
    "id": "g2-4",
    "page": 211,
    "text": "〜みたいだ"
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "ja": "あの本は{難|むずか}しい**みたいだ**。",
        "tr": "That book seems to be hard."
       },
       {
        "ja": "あの本は難しい__ようだ__。(3-A-[#1])",
        "tr": "That book seems to be hard. (3-A-1)"
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "ja": "私はタイ料理**みたいな**{辛|から}い料理が好きだ。",
        "tr": "I like spicy food, like Thai food."
       },
       {
        "ja": "私はタイ料理の__ような__辛い料理が好きだ。(3-B-[#1])",
        "tr": "I like spicy food, like Thai food. (3-B-1)"
       }
      ]
     },
     {
      "n": 3,
      "lines": [
       {
        "ja": "ジョージはモデル**みたいに**かっこいい。",
        "tr": "George is as good-looking as a model."
       },
       {
        "ja": "ジョージはモデルの__ように__かっこいい。(3-C-[#3])",
        "tr": "George is as good-looking as a model. (3-C-3)"
       }
      ]
     }
    ]
   },
   {
    "t": "conn",
    "forms": [
     {
      "stack": [
       "[普]",
       "＊なA~~だ~~",
       "＊N~~だ~~"
      ],
      "join": "!!みたいだ!!"
     }
    ],
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "みたいだ is a colloquial equivalent of ようだ ."
       },
       {
        "en": "みたいだ conjugates in the same way as な-adjectives."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "id": "g2-matome",
    "text": {
     "ja": "❖ まとめ",
     "tr": "Summary"
    }
   },
   {
    "t": "figure",
    "desc": "A young man, thumb up, tells two women about a cake (\"It's good\"); one of them passes it on to a third woman (\"I hear it's good\").",
    "labels": [
     "おいしいよ",
     "へー",
     "おいしいそうだよ"
    ]
   },
   {
    "t": "p",
    "style": "center",
    "text": {
     "ja": "おいしい**そうだ** (1-A)",
     "tr": "I hear it's good. (1-A)"
    }
   },
   {
    "t": "figure",
    "desc": "A woman, fork in hand, licks her lips at a sparkling strawberry cake in front of her.",
    "labels": []
   },
   {
    "t": "p",
    "style": "center",
    "text": {
     "ja": "おいし**そうだ** (1-B)",
     "tr": "It looks good. (1-B)"
    }
   },
   {
    "t": "figure",
    "desc": "Two women chat about a cake (\"It's good, isn't it?\" \"Yeah, yeah\"); a third woman overhears with her hand to her ear and has a light-bulb idea.",
    "labels": [
     "そうそう",
     "おいしいよね"
    ]
   },
   {
    "t": "p",
    "style": "center",
    "text": {
     "ja": "おいしい**らしい** (2-A)",
     "tr": "Apparently it's good. (2-A)"
    }
   },
   {
    "t": "figure",
    "desc": "A woman points at a long line of customers outside a cake shop, where a chef stands at the door, and has a light-bulb idea.",
    "labels": []
   },
   {
    "t": "p",
    "style": "center",
    "text": {
     "ja": "おいしい**ようだ** (3-A)\nおいしい**みたいだ** (4)",
     "tr": "It seems to be good. (3-A)\nIt seems to be good. (4)"
    }
   }
  ]
 },
 {
  "id": "g3",
  "kind": "grammar",
  "no": 3,
  "title": "{敬語|けいご}",
  "en": "Polite style",
  "lesson": 2,
  "page": 212,
  "blocks": [
   {
    "t": "p",
    "page": 212,
    "text": {
     "en": "Below is a review of the polite style, including honorific and humble forms. Pay closer attention to the use of polite style when making a statement about someone in your in-group."
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g3-ex",
    "title": {
     "ja": "正しい答えを{選|えら}んでください。",
     "tr": "Choose the correct answer."
    },
    "blocks": [
     {
      "t": "choice",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "部下：部長、今朝のニュースを【a. ご{覧|らん}になり　b. {拝見|はいけん}し】ましたか。",
         "tr": "Subordinate: Did you see the news this morning, sir?"
        },
        "options": [
         "a. ご覧になり",
         "b. 拝見し"
        ],
        "answer": 0
       },
       {
        "n": "",
        "text": {
         "ja": "部長：ああ、【a. ご覧になった　b. 見た　c. 拝見した】よ。",
         "tr": "Manager: Yeah, I saw it."
        },
        "options": [
         "a. ご覧になった",
         "b. 見た",
         "c. 拝見した"
        ],
        "answer": 1
       },
       {
        "n": "(2)",
        "text": {
         "ja": "社員A：社長が今日何時に【a. いらっしゃる　b. {参|まい}る】か知ってる？\n社員B：9時の{予定|よてい}だよ。",
         "tr": "Employee A: Do you know what time the president is coming today?\nEmployee B: He's scheduled for nine."
        },
        "options": [
         "a. いらっしゃる",
         "b. 参る"
        ],
        "answer": 0
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g3-1",
    "text": {
     "ja": "{尊敬語|そんけいご}",
     "en": "Honorific form"
    }
   },
   {
    "t": "p",
    "text": {
     "en": "Honorific forms are used when making statements about someone who is of higher status than the speaker. They express that the speaker regards the person highly."
    }
   },
   {
    "t": "figure",
    "desc": "Diagram: a person stands on a line looking up (dotted arrow) at a crowned figure; a pink arrow lifts the crowned figure above the line, labeled 尊敬語.",
    "labels": [
     "Regard someone highly",
     "{尊敬語|そんけいご}"
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g3-1a",
    "text": {
     "ja": "{尊敬動詞|そんけいどうし}の3つの{形|かたち}",
     "en": "Three subcategories of honorific verbs"
    }
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "①",
    "text": {
     "en": "Special verbs"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "先生は今オフィスに__いらっしゃいます__。（います）",
      "tr": "The teacher is in the office now. (います)"
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "②",
    "text": {
     "ja": "お＋V~~ます~~＋になる／ご〜になる",
     "tr": "お + V-stem + になる / ご〜になる"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例1）",
    "items": [
     {
      "ja": "先生は日本の文化について__お話しになりました__。（話しました）",
      "tr": "The teacher spoke about Japanese culture. (話しました)"
     }
    ]
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例2）",
    "items": [
     {
      "ja": "一度__ご{使用|しよう}になった__ものは{返品|へんぴん}できません。（使用した）",
      "tr": "Items that have been used once cannot be returned. (使用した)"
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "③",
    "text": {
     "ja": "れる／られる",
     "en": "(Same form as passive)"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "先生は来年日本文化のクラスを__教えられる__そうです。（教える）",
      "tr": "I hear the teacher will be teaching a Japanese culture class next year. (教える)"
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "When special verbs are available, use them instead of other honorific forms. See p. 215 for a list of special verbs."
       },
       {
        "en": "When special verbs are not available, use “お＋V~~ます~~＋になる.” When the verb is a Sino-Japanese word (i.e., kango), use “ご＋V (without する) ＋になる.”"
       },
       {
        "en": "れる／られる is considered slightly less respectful than the first or second form, but is nevertheless an honorific form."
       },
       {
        "en": "The three subcategories of honorific forms should not be used simultaneously in one verb."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "label": "話す →",
      "items": [
       {
        "mark": "×",
        "ja": "お話しになられる（②③を使用 Combined use of forms ② and ③）",
        "tr": "(Incorrect: forms ② and ③ used together)"
       },
       {
        "mark": "○",
        "ja": "お話しになる（②を使用 Use of form ② alone）",
        "tr": "(Form ② only)"
       },
       {
        "mark": "○",
        "ja": "話される（③を使用 Use of form ③ alone）",
        "tr": "(Form ③ only)"
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "right",
    "text": {
     "ja": "✎答え▶ (1) a, b　(2) a",
     "tr": "Answers: (1) a, b (2) a"
    }
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g3-1b",
    "page": 213,
    "text": {
     "ja": "{形容詞|けいようし}・{名詞|めいし}・{副詞|ふくし}の{尊敬表現|そんけいひょうげん}",
     "en": "Honorific forms of adjectives/nouns/adverbs"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "忙しい → お忙しい　　家族 → ご家族",
      "tr": "busy → busy (honorific); family → (your) family (honorific)"
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "お or ご is attached to adjectives/nouns/adverbs when describing people of higher status, their objects, or people who belong to their group  (e.g., family members)."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "C",
    "id": "g3-1c",
    "text": {
     "ja": "その{他|た}の{尊敬表現|そんけいひょうげん}",
     "en": "Other honorific expressions"
    }
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "①",
    "text": {
     "ja": "お＋V~~ます~~＋ください／ご〜ください",
     "en": "(Honorific form of Vてください)"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "待ってください → お待ちください　　{相談|そうだん}してください → ご相談ください",
      "tr": "Please wait → Please wait (honorific); Please consult → Please consult (honorific)"
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "②",
    "text": {
     "ja": "お＋V~~ます~~＋ですか／ご〜ですか",
     "en": "(Honorific form of Vていますか／Vますか)"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "急いでいますか → お急ぎですか　　{帰宅|きたく}しますか → ご帰宅ですか",
      "tr": "Are you in a hurry? → Are you in a hurry? (honorific); Are you going home? → Are you going home? (honorific)"
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "③",
    "text": {
     "en": "Other special expressions of honorific form"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "人 → {方|かた}　　家 → お{宅|たく}　　どう → いかが　　だれ → どなた　　あれ → あちら",
      "tr": "person → person (honorific); house → home (honorific); how → how (polite); who → who (polite); that → that (polite)"
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g3-2",
    "text": {
     "ja": "{謙譲語|けんじょうご}",
     "en": "Humble form"
    }
   },
   {
    "t": "p",
    "text": {
     "en": "The humble form lowers the speaker, thereby elevating the person of higher status. It is used to make statements about the speaker’s own action or objects related to the speaker."
    }
   },
   {
    "t": "p",
    "style": "indent",
    "text": {
     "en": "There are two types in humble form: Type I is a rather typical humble expression used to show respect for the person at the receiving end of speaker's action, while Type II is used to show respect for the listener."
    }
   },
   {
    "t": "figure",
    "desc": "Diagram: a crowned figure stands on a line; a pink arrow pushes a person down below the line (labeled 謙譲語), and that person looks up at the crowned figure (dotted arrow).",
    "labels": [
     "{謙譲語|けんじょうご}",
     "Humble oneself"
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g3-2a",
    "text": {
     "ja": "{謙譲語|けんじょうご}タイプⅠ",
     "en": "Humble form Type I"
    }
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "①",
    "text": {
     "en": "Special verbs"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "items": [
     {
      "ja": "授業の後、先生のオフィスに__{伺|うかが}いました__。（行きました）",
      "tr": "After class, I went to the teacher's office. (行きました)"
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "tag": "②",
    "text": {
     "ja": "お＋V~~ます~~＋する／ご〜する",
     "tr": "お + V-stem + する / ご〜する"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例1）",
    "items": [
     {
      "ja": "試験の時、先生のペンを__お借りしました__。（借りました）",
      "tr": "During the exam, I borrowed the teacher's pen. (借りました)"
     }
    ]
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例2）",
    "items": [
     {
      "ja": "先生を駅まで__ご案内しました__。（案内しました）",
      "tr": "I showed the teacher the way to the station. (案内しました)"
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "Humble form Type I is used when the speaker’s action somehow affects or relates to a person of higher status."
       },
       {
        "en": "When special verbs are available, use them instead of the humble form in ②. See p. 215 for a list of special verbs."
       },
       {
        "en": "When special verbs are not available, use “お＋V~~ます~~＋する.” When the verb is a Sino-Japanese word (i.e., kango), use ご＋V する."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g3-2b",
    "text": {
     "ja": "{謙譲語|けんじょうご}タイプⅡ",
     "en": "Humble form Type II（Also called {丁重語|ていちょうご}）"
    }
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例1）",
    "items": [
     {
      "ja": "ユと__{申|もう}します__。{中国|ちゅうごく}から__{参|まい}りました__。A社で働いて__おります__。",
      "en": "(self-introduction)",
      "tr": "My name is Yu. I came here from China. I work at Company A."
     }
    ]
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例2）",
    "items": [
     {
      "ja": "メニューで__ございます__。メインのお料理は肉と魚が__ございます__。",
      "en": "(at a restaurant)",
      "tr": "Here is the menu. For the main course, we have meat and fish."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "page": 214,
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "Humble form Type II is used when the speaker’s action does not directly affect people of higher status, but the speaker still needs to show respect to the listener. It is commonly used in formal settings such as self-introduction, or by people working in a customer service industry. です・ます style is always used with this form. Only special verbs are available for Humble Type II."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "3.",
    "id": "g3-3",
    "text": {
     "ja": "ウチ／ソトと{敬語|けいご}",
     "en": "In-group/out-group and polite style"
    }
   },
   {
    "t": "figure",
    "desc": "Diagram: a pink box of three people including 私 (the in-group) and a grey box of three people (the out-group), with arrows of respect (敬意) going both ways between the boxes.",
    "labels": [
     "ウチ (in-group)",
     "ソト (out-group)",
     "私",
     "{敬意|けいい}"
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "The polite style is used not only for people of higher status, but also for people in an out-group, meaning people outside of the speaker’s social circle or people who are not in familiar relationships with the speaker. Honorific forms are used to make statements about people in an out-group, whereas the humble form or です・ます style is used to talk about people within the speaker’s in-group or people who are in familiar relationships with the speaker."
       }
      ]
     }
    ]
   },
   {
    "t": "figure",
    "desc": "例1）: inside Company X, both 私 and a coworker (同僚) direct respect (敬意) upward to Department Manager Kawamura (川村部長). 例2）: Company X (in-group: 川村部長 and 私) and an employee (社員) of Company Y (out-group), with respect (敬意) going both ways between the companies.",
    "labels": [
     "例1）",
     "X社",
     "川村部長",
     "{敬意|けいい}",
     "私",
     "{同僚|どうりょう}",
     "例2）",
     "X社 In-group",
     "Y社 Out-group",
     "社員"
    ]
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例1）",
    "items": [
     {
      "ja": "会社の中で話す時",
      "tr": "When talking inside the company"
     },
     {
      "lines": [
       {
        "sp": "{同僚|どうりょう}",
        "ja": "{川村|かわむら}部長はいらっしゃいますか。",
        "tr": "Is Manager Kawamura in?"
       },
       {
        "sp": "私",
        "ja": "今日は**いらっしゃいません**よ。",
        "tr": "He isn't in today."
       }
      ]
     }
    ]
   },
   {
    "t": "examples",
    "style": "rei",
    "label": "例2）",
    "items": [
     {
      "ja": "他の会社の人と話す時",
      "tr": "When talking with someone from another company"
     },
     {
      "lines": [
       {
        "sp": "Y社の社員",
        "ja": "川村部長はいらっしゃいますか。",
        "tr": "Is Manager Kawamura in?"
       },
       {
        "sp": "私 (X社の社員)",
        "ja": "**川村**はただいま、外出して**おります**。",
        "tr": "Kawamura is out of the office at the moment."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "When speaking about people of higher status who are in your in-group, the appropriate style to use in a conversation can change depending on the situation."
       },
       {
        "en": "If you are having a conversation with people in your in-group, honorific forms should be used to talk about people of higher status (e.g., 川村部長 in example 1). On the contrary, when your conversation partner is in an out-group (e.g., people who work for other companies), then humble forms should be used when referring to people in your in-group, even when the referents hold higher statuses. In such cases, titles (e.g., 部長 , さん ) should also be omitted."
       },
       {
        "en": "Who belongs in the speaker’s in-group or out-group is not fixed, and it depends on the situation and who the conversation partner is."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "id": "g3-list",
    "page": 215,
    "text": {
     "ja": "❖ 特別な{形|かたち}の{動詞|どうし}",
     "en": "List of Special Verbs"
    }
   },
   {
    "t": "table",
    "cols": [
     "auto",
     "1fr",
     "1fr",
     "1fr"
    ],
    "head": [
     [
      {
       "text": "",
       "rowspan": 2
      },
      {
       "text": {
        "ja": "{尊敬語|そんけいご}（{目上|めうえ}の人がする）",
        "en": "**Honorific Form**\nActions done by people of higher status"
       },
       "rowspan": 2
      },
      {
       "text": {
        "ja": "{謙譲語|けんじょうご}（私がする）",
        "en": "**Humble Form**\nActions done by the speaker"
       },
       "colspan": 2
      }
     ],
     [
      {
       "text": {
        "ja": "タイプⅠ\n（目上の人に{関係|かんけい}がある{動作|どうさ}）",
        "en": "**Type I**\nActions related to people of higher status"
       }
      },
      {
       "text": {
        "ja": "タイプⅡ\n（聞き手への{敬意|けいい}［{丁重語|ていちょうご}］）",
        "en": "**Type II**\nShow respect for the listener"
       }
      }
     ]
    ],
    "rows": [
     [
      {
       "text": "行く・来る",
       "head": true
      },
      "いらっしゃる\nいらっしゃいます",
      "{伺|うかが}う\n伺います",
      "{参|まい}ります"
     ],
     [
      {
       "text": "いる",
       "head": true
      },
      "いらっしゃる\nいらっしゃいます",
      "",
      "おります"
     ],
     [
      {
       "text": "［Vて］いる",
       "head": true
      },
      "［Vて］いらっしゃる\n［Vて］いらっしゃいます",
      "",
      "［Vて］おります"
     ],
     [
      {
       "text": "言う",
       "head": true
      },
      "おっしゃる\nおっしゃいます",
      "",
      "{申|もう}します"
     ],
     [
      {
       "text": "ある",
       "head": true
      },
      "（おありだ）\n（おありです）",
      "",
      "ございます"
     ],
     [
      {
       "text": "Nだ",
       "head": true
      },
      "Nでいらっしゃる\nNでいらっしゃいます",
      "",
      "Nでございます"
     ],
     [
      {
       "text": "する",
       "head": true
      },
      "なさる\nなさいます",
      "（お／ご〜いたします）",
      "いたします"
     ],
     [
      {
       "text": "食べる・飲む",
       "head": true
      },
      "めしあがる\nめしあがります",
      "",
      "いただきます"
     ],
     [
      {
       "text": "見る",
       "head": true
      },
      "ご{覧|らん}になる\nご覧になります",
      "{拝見|はいけん}する\n拝見します",
      ""
     ],
     [
      {
       "text": "聞く",
       "head": true
      },
      "",
      "{伺|うかが}う\n伺います\n※お聞きする can also be used",
      ""
     ],
     [
      {
       "text": "会う",
       "head": true
      },
      "",
      "お目にかかる\nお目にかかります\n※お会いする can also be used",
      ""
     ],
     [
      {
       "text": "{寝|ね}る",
       "head": true
      },
      "お休みになる\nお休みになります",
      "",
      ""
     ],
     [
      {
       "text": "知っている",
       "head": true
      },
      "ご{存|ぞん}じだ\nご存じです",
      "",
      ""
     ],
     [
      {
       "text": "あげる",
       "head": true
      },
      "",
      "さしあげる\nさしあげます",
      ""
     ],
     [
      {
       "text": "もらう",
       "head": true
      },
      "",
      "いただく\nいただきます",
      ""
     ],
     [
      {
       "text": "くれる",
       "head": true
      },
      "くださる\nくださいます",
      "",
      ""
     ]
    ]
   }
  ]
 },
 {
  "id": "g4",
  "kind": "grammar",
  "no": 4,
  "title": "あげる／くれる／もらう",
  "page": 216,
  "blocks": [
   {
    "t": "p",
    "page": 216,
    "text": {
     "en": "In this section we will review expressions of giving and receiving. Pay special attention to the directions of giving/receiving, as particles（は／が／に）are often omitted especially when the subject is 私 ."
    }
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g4-1",
    "text": {
     "ja": "あげる／くれる／もらう（物の{授受|じゅじゅ}）",
     "en": "Giving and receiving things"
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g4-ex1",
    "title": {
     "ja": "「あげる／くれる／もらう」のどれを使いますか。a・bの{言葉|ことば}に続けて文を言ってください。\n（{必要|ひつよう}なら{敬語|けいご}を使ってください。）",
     "tr": "Which of あげる, くれる, or もらう do you use? Continue from the words in a and b and say a sentence. (Use polite language if necessary.)"
    },
    "blocks": [
     {
      "t": "figure",
      "desc": "Three pictures, each with an arrow pointing from the giver on the right to the receiver on the left: (1) a friend hands a teddy bear to a delighted \"me\"; (2) George hands a bouquet of flowers to a delighted Eri; (3) a teacher hands a box of sweets to \"me\", saying \"Please share these with everyone in the class.\"",
      "labels": [
       "(1)",
       "私",
       "友達",
       "(2)",
       "絵理",
       "ジョージ",
       "(3)",
       "私",
       "先生",
       "クラスのみんなで食べてください"
      ]
     },
     {
      "t": "qs",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "a. 私は……\nb. {友達|ともだち}は……",
         "tr": "a. I ...\nb. My friend ..."
        },
        "answer": "a. 友達にぬいぐるみをもらいました。　b. 私にぬいぐるみをくれました。"
       },
       {
        "n": "(2)",
        "text": {
         "ja": "a. {絵理|えり}は……\nb. ジョージは……",
         "tr": "a. Eri ...\nb. George ..."
        },
        "answer": "a. ジョージに花をもらいました。　b. 絵理に花をあげました。"
       },
       {
        "n": "(3)",
        "text": {
         "ja": "a. 私は……\nb. 先生は……",
         "tr": "a. I ...\nb. The teacher ..."
        },
        "answer": "a. 先生におみやげをいただきました。　b. 私におみやげをくださいました。"
       }
      ]
     }
    ]
   },
   {
    "t": "table",
    "cols": [
     "auto",
     "auto",
     "auto",
     "auto",
     "auto",
     "auto",
     "auto"
    ],
    "rows": [
     [
      {
       "text": {
        "ja": "**あげる**",
        "en": "(to give)"
       },
       "head": true
      },
      "［Giver",
      "**は / が**",
      "Receiver（×私）",
      "**に**",
      "〈物〉**を**",
      "**あげる**］"
     ],
     [
      {
       "text": {
        "ja": "**くれる**",
        "en": "(to give to me)"
       },
       "head": true
      },
      "［Giver",
      "**は / が**",
      "Receiver（私）",
      "**に**",
      "〈物〉**を**",
      "**くれる**］"
     ],
     [
      {
       "text": {
        "ja": "**もらう**",
        "en": "(to receive)"
       },
       "head": true
      },
      "［Receiver",
      "**は / が**",
      "Giver（×私）",
      "**に**",
      "〈物〉**を**",
      "**もらう**］"
     ]
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g4-1a",
    "text": {
     "ja": "あげる",
     "en": "to give"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "（私は）　リサ**に**　プレゼント**を**　あげました。",
      "en": "I gave a present to Lisa."
     },
     {
      "n": 2,
      "ja": "{研|けん}は　リサ**に**　プレゼント**を**　あげました。",
      "en": "Ken gave a present to Lisa."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: \"I\" (seen from behind) hand a wrapped present to Lisa; an arrow points toward Lisa.",
    "labels": [
     "1",
     "リサ",
     "私"
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "When the subject of the sentence is the giver and the speaker is the receiver, you cannot say, “Giver は私に〜をあげる .” くれる should be used instead of あげる ."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "items": [
       {
        "mark": "×",
        "ja": "研は私にプレゼントを__あげました__。→ くれました",
        "tr": "(Incorrect) \"Ken gave me a present\" with あげました; use くれました instead."
       }
      ]
     },
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "The humble form of the verb あげる is さしあげる ."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g4-1b",
    "page": 217,
    "text": {
     "ja": "くれる",
     "en": "to give to me"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "サラは　（私**に**）　プレゼント**を**　くれました。",
      "en": "Sarah gave me a present."
     },
     {
      "n": 2,
      "ja": "{田中|たなか}部長は　（私の）子ども**に**　プレゼント**を**　くださいました。",
      "tr": "Manager Tanaka kindly gave my child a present."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: Sara hands a wrapped present to \"me\" (seen from behind); an arrow points from Sara toward me. The caption 「サラは」 has は underlined.",
    "labels": [
     "1",
     "サラ",
     "「サラ__は__」",
     "私"
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "くれる is used when someone gives something to the speaker (私)."
       },
       {
        "en": "くれる can also be used when the receiver is someone who belongs in the same social group as the speaker (e.g., 私の子ども)."
       },
       {
        "en": "The honorific form of the verb くれる is くださる ."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "C",
    "id": "g4-1c",
    "text": {
     "ja": "もらう",
     "en": "to receive"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "（私は）サラ**に**　プレゼント**を**　もらいました。",
      "en": "I received a present from Sarah."
     },
     {
      "n": 2,
      "ja": "{研|けん}は　サラ**に**　プレゼント**を**　もらいました。",
      "en": "Ken received a present from Sarah."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: the same scene of Sara handing a present to \"me\"; the caption 「サラに」 has に underlined.",
    "labels": [
     "1",
     "サラ",
     "「サラ__に__」",
     "私"
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "When the speaker is the giver, you cannot describe the action from the perspective of the receiver (e.g., “Receiver は私に〜をもらう”). The speaker should be the subject of the sentence and あげる should be used instead of もらう ."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "label": "　",
      "items": [
       {
        "mark": "×",
        "ja": "研は私にプレゼントを__もらいました__。",
        "tr": "(Incorrect) Intended: \"Ken received a present from me.\""
       },
       {
        "mark": "→",
        "ja": "私は研にプレゼントを__あげました__。",
        "tr": "I gave Ken a present."
       }
      ]
     },
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "The humble form of もらう is いただく ."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g4-2",
    "text": {
     "ja": "〜てあげる／〜てくれる／〜てもらう（{行為|こうい}の{授受|じゅじゅ}）",
     "en": "Giving and receiving an action"
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g4-ex2",
    "title": {
     "ja": "「〜てあげる／くれる／もらう」を使って文を{完成|かんせい}させてください。",
     "tr": "Complete the sentences using 〜てあげる, 〜てくれる, or 〜てもらう."
    },
    "blocks": [
     {
      "t": "figure",
      "desc": "(1) George pays a shop clerk at a register for a ring while Eri, beside him, is delighted. (2) A Japanese friend points to a page of a book and explains it to \"me\"; an arrow points from the friend to me.",
      "labels": [
       "(1)",
       "ジョージ",
       "絵理",
       "(2)",
       "私",
       "日本人の友達"
      ]
     },
     {
      "t": "qs",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "a. ジョージは{絵理|えり}に{指輪|ゆびわ}をあげました。\n→ ジョージは絵理に指輪を買＿＿。\nb. 絵理はジョージに指輪をもらいました。\n→ 絵理はジョージに指輪を買＿＿。",
         "tr": "a. George gave Eri a ring. → George bought a ring for Eri.\nb. Eri got a ring from George. → Eri had George buy her a ring."
        },
        "answer": "a. ってあげました　b. ってもらいました"
       },
       {
        "n": "(2)",
        "text": {
         "ja": "a. 日本人の{友達|ともだち}に日本語を教え＿＿。\nb. 日本人の友達は日本語を教え＿＿。",
         "tr": "a. I had my Japanese friend teach me Japanese.\nb. My Japanese friend taught me Japanese."
        },
        "answer": "a. てもらいました　b. てくれました"
       }
      ]
     }
    ]
   },
   {
    "t": "table",
    "page": 218,
    "cols": [
     "auto",
     "auto",
     "auto",
     "auto",
     "auto",
     "auto"
    ],
    "rows": [
     [
      {
       "text": {
        "ja": "**〜てあげる**",
        "en": "(to give)"
       },
       "head": true
      },
      "［Giver",
      "**は / が**",
      "Receiver（×私）",
      "＋**{助詞|じょし}**",
      "**［Vて］あげる**］"
     ],
     [
      {
       "text": {
        "ja": "**〜てくれる**",
        "en": "(to give to me)"
       },
       "head": true
      },
      "［Giver",
      "**は / が**",
      "Receiver（私）",
      "＋**助詞**",
      "**［Vて］くれる**］"
     ],
     [
      {
       "text": {
        "ja": "**〜てもらう**",
        "en": "(to receive)"
       },
       "head": true
      },
      "［Reciever",
      "**は / が**",
      "Giver（×私）",
      "**に**",
      "**［Vて］もらう**］"
     ]
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "To express giving or receiving of an action (e.g., favor) rather than an object, use て-form ＋あげる／くれる／もらう ."
       },
       {
        "en": "Pay attention to the context and the structure of the sentence, as particles（は／が or に）are often omitted, especially when the sentence involves 私 ."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g4-2a",
    "text": "〜てあげる"
   },
   {
    "t": "figure",
    "desc": "Illustrations: [#1] a mother decorating a cake while her daughter watches; [#2] \"I\" walk my little brother to school; [#3] \"I\" wash the car while my father waves.",
    "labels": [
     "1",
     "2",
     "私",
     "3",
     "父",
     "私"
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "ja": "［お母さんは子どもにケーキを作った。］",
        "tr": "[The mother made a cake for her child.]"
       },
       {
        "ja": "→ お母さんは子ども**に**ケーキを作っ__てあげました__。",
        "tr": "→ The mother made a cake for her child."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "ja": "［私は弟を学校に連れていった。］",
        "tr": "[I took my little brother to school.]"
       },
       {
        "ja": "→（私は）弟**を**学校に連れていっ__てあげました__。",
        "tr": "→ (I) took my little brother to school (for him)."
       }
      ]
     },
     {
      "n": 3,
      "lines": [
       {
        "ja": "［（私は）父の車を{洗|あら}った。］",
        "tr": "[(I) washed my father's car.]"
       },
       {
        "ja": "→（私は）父の車**を**洗っ__てあげました__。",
        "tr": "→ (I) washed my father's car for him."
       }
      ]
     },
     {
      "n": 4,
      "lines": [
       {
        "ja": "［（母が{忙|いそが}しいので、）私がスーパーに行った。］",
        "tr": "[(Because my mother was busy,) I went to the supermarket.]"
       },
       {
        "ja": "→ 私は母**のために**スーパーに行っ__てあげました__。",
        "tr": "→ I went to the supermarket for my mother."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "［Vて］あげる expresses that the action done by the agent would benefit the receiver. The receiver of the action should be someone other than 私 , and when 私 is the receiver, ［Vて］くれる would be used."
       },
       {
        "en": "In this construction using ［Vて］あげる , the particle following the receiver is the same particle that would be used with the original verb, as shown in [#1], [#2] and [#3]."
       },
       {
        "en": "As in [#4] (スーパーに行く), when the verb does not take the receiver as its object, 〜のために would be used to specify the receiver."
       },
       {
        "en": "When the agent of the verb is the speaker (i.e., 私), using ［Vて］あげる may sound like the speaker is emphasizing the favor he/she has done; it may be perceived as self-approval. When the receiver is of higher social status than the speaker, it would come off as rude, even if you use ［Vて］さしあげる ."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g4-2b",
    "text": "〜てくれる"
   },
   {
    "t": "figure",
    "desc": "Illustration for [#2]: a teacher in a suit walks a little girl to her house, where her mother (\"me\") waits at the door.",
    "labels": [
     "2",
     "先生",
     "私"
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "ja": "［ホストファミリーは私に日本語を教えた。］",
        "tr": "[My host family taught me Japanese.]"
       },
       {
        "ja": "→ ホストファミリーは（私**に**）日本語を教え__てくれました__。",
        "tr": "→ My host family taught (me) Japanese."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "ja": "［{田中|たなか}先生は（私の）子どもを家まで送った。］",
        "tr": "[Tanaka-sensei took (my) child home.]"
       },
       {
        "ja": "→ 田中先生は（私の）子ども**を**家まで送っ__てくださいました__。",
        "tr": "→ Tanaka-sensei kindly took (my) child home."
       }
      ]
     },
     {
      "n": 3,
      "page": 219,
      "lines": [
       {
        "ja": "［ホストファミリーは（私の）部屋を{掃除|そうじ}した。］",
        "tr": "[My host family cleaned (my) room.]"
       },
       {
        "ja": "→ ホストファミリーは（私の）部屋**を**掃除し__てくれました__。",
        "tr": "→ My host family cleaned (my) room for me."
       }
      ]
     },
     {
      "n": 4,
      "lines": [
       {
        "ja": "［（私が{忙|いそが}しいので、）姉が{郵便局|ゆうびんきょく}に行った。］",
        "tr": "[(Because I was busy,) my older sister went to the post office.]"
       },
       {
        "ja": "→ 姉が（私**のために**）郵便局に行っ__てくれました__。",
        "tr": "→ My older sister went to the post office (for me)."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "［Vて］くれる conveys that the action (V) done by someone else would benefit the speaker. It also expresses the speaker’s gratitude for the action."
       },
       {
        "en": "In this construction using ［Vて］くれる , the particle following the receiver (i.e., the speaker) is the same particle used with the original verb, as shown in [#1], [#2] and [#3]."
       },
       {
        "en": "As in [#4] ({郵便局|ゆうびんきょく}に行く), when the verb does not take the receiver as its object, 〜のために may be used to denote the receiver (which is 私 , in the case of this example)."
       },
       {
        "en": "私に , 私の , and 私のために are often omitted."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "C",
    "id": "g4-2c",
    "text": "〜てもらう"
   },
   {
    "t": "figure",
    "desc": "Illustration for [#1]: a father drives his daughter (\"me\") in a car toward a train station (a sign reads ○△駅), with a curved arrow toward the station.",
    "labels": [
     "1",
     "○△駅",
     "父"
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "私",
        "ja": "お父さん、駅まで送って！",
        "tr": "Dad, give me a ride to the station!"
       },
       {
        "sp": "父",
        "ja": "いいよ。",
        "tr": "Sure."
       },
       {
        "ja": "↓\n［父は私を駅まで送りました。］",
        "tr": "[My father drove me to the station.]"
       },
       {
        "ja": "→（私は）父に駅まで送っ__てもらいました__。",
        "tr": "→ (I) got my father to drive me to the station."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "sp": "私",
        "ja": "一人じゃさびしいから、{一緒|いっしょ}にパーティーに行って。",
        "tr": "It'll be lonely going by myself, so come to the party with me."
       },
       {
        "sp": "{友達|ともだち}",
        "ja": "いいよ。",
        "tr": "Sure."
       },
       {
        "ja": "↓\n［友達は私と一緒にパーティーに行きました。］",
        "tr": "[My friend went to the party with me.]"
       },
       {
        "ja": "→ 私は友達に一緒にパーティーに行っ__てもらいました__。",
        "tr": "→ I got my friend to go to the party with me."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "Sentences using ［Vて］くれる can be rephrased by using ［Vて］もらう ."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "items": [
       {
        "ja": "__友達__は!!(giver)!!　__私__に!!(receiver)!!　おいしい店を教え__てくれました__。",
        "tr": "My friend told me about a good restaurant."
       },
       {
        "ja": "__私__は!!(receiver)!!　__友達__に!!(giver)!!　おいしい店を教え__てもらいました__。",
        "tr": "I had my friend tell me about a good restaurant."
       }
      ]
     },
     {
      "t": "list",
      "mark": "・",
      "items": [
       {
        "en": "In the ［Vて］もらう structure, the giver always takes the particle に ."
       },
       {
        "en": "Similar to the sentence using ［Vて］くれる , ［Vて］もらう can be used to show the speaker’s gratitude for the action, when 私 is the subject (receiver). The difference between ［Vて］くれる and ［Vて］もらう is that ［Vて］もらう implies that the action was done as a favor specifically requested by the speaker."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "right",
    "text": {
     "ja": "✎1. 答え▶ (1) a. 友達にぬいぐるみをもらいました。　b. 私にぬいぐるみをくれました。\n(2) a. ジョージに花をもらいました。　b. 絵理に花をあげました。\n(3) a. 先生におみやげをいただきました。　b. 私におみやげをくださいました。",
     "tr": "1. Answers: (1) a. I got a stuffed animal from my friend. b. My friend gave me a stuffed animal. (2) a. Eri got flowers from George. b. George gave Eri flowers. (3) a. I received a souvenir from my teacher. b. My teacher gave me a souvenir."
    }
   },
   {
    "t": "p",
    "style": "right",
    "text": {
     "ja": "2. 答え▶ (1) a. ってあげました　b. ってもらいました\n(2) a. てもらいました　b. てくれました",
     "tr": "2. Answers: (1) a. ってあげました b. ってもらいました (2) a. てもらいました b. てくれました"
    }
   }
  ]
 },
 {
  "id": "g5",
  "kind": "grammar",
  "no": 5,
  "title": "{受身形|うけみけい}／{使役形|しえきけい}／{使役受身形|しえきうけみけい}",
  "en": "Passive/Causative/Causative-passive",
  "lesson": 4,
  "lessons": [
   4
  ],
  "page": 220,
  "blocks": [
   {
    "t": "p",
    "page": 220,
    "text": {
     "en": "Below is a review of the passive, causative, and causative-passive forms of verbs, as well as the structures 〜てあげる／くれる／もらう and 〜させてあげる／くれる／もらう. Read the sentences below to see if you can distinguish these forms."
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g5-ex",
    "title": {
     "ja": "下の(1)〜(3)の問題に答えなさい。",
     "tr": "Answer questions (1)–(3) below."
    },
    "blocks": [
     {
      "t": "table",
      "cols": [
       "auto",
       "1fr",
       "auto",
       "auto",
       "auto"
      ],
      "rows": [
       [
        "a.",
        {
         "ja": "{森|もり}さんに写真を__{撮|と}られた__。",
         "tr": "I had my picture taken by Mori."
        },
        "（　　）",
        "［私・森］",
        "〈☺・☹〉"
       ],
       [
        "b.",
        {
         "ja": "森さんに写真を__撮ってもらった__。",
         "tr": "I had Mori take my picture."
        },
        "（　　）",
        "［私・森］",
        "〈☺・☹〉"
       ],
       [
        "c.",
        {
         "ja": "森さんに写真を__撮らせた__。",
         "tr": "I made Mori take a picture."
        },
        "（　　）",
        "［私・森］",
        ""
       ],
       [
        "d.",
        {
         "ja": "森さんに写真を__撮らせてあげた__。",
         "tr": "I let Mori take a picture."
        },
        "（　　）",
        "［私・森］",
        ""
       ],
       [
        "e.",
        {
         "ja": "森さんに写真を__撮らされた__。",
         "tr": "I was made to take a picture by Mori."
        },
        "（　　）",
        "［私・森］",
        "〈☺・☹〉"
       ],
       [
        "f.",
        {
         "ja": "森さんが写真を__撮らせてくれた__。",
         "tr": "Mori let me take a picture."
        },
        "（　　）",
        "［私・森］",
        "〈☺・☹〉"
       ]
      ]
     },
     {
      "t": "qs",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "a〜fの{下線|かせん}部分は、①Vてあげる／くれる／もらう、②{受身形|うけみけい}、③{使役形|しえきけい}、④使役形＋てあげる／くれる／もらう、⑤{使役受身形|しえきうけみけい}のどれですか。{番号|ばんごう}を（　　）に書いてください。",
         "tr": "Which of these is each underlined part of a–f: ① V-te ageru / kureru / morau, ② the passive form, ③ the causative form, ④ the causative form + te ageru / kureru / morau, ⑤ the causative-passive form? Write the number in the (　)."
        },
        "answer": "a. ②　b. ①　c. ③　d. ④　e. ⑤　f. ④"
       },
       {
        "n": "(2)",
        "text": {
         "ja": "写真を{撮|と}った人を［　　］から{選|えら}んでください。",
         "tr": "Choose the person who took the picture from the [　]."
        },
        "answer": "a. 森　b. 森　c. 森　d. 森　e. 私　f. 私"
       },
       {
        "n": "(3)",
        "text": {
         "ja": "a・b・e・fの文は、{話者|わしゃ} (speaker) がHappy ☺かUnhappy ☹か、選んでください。",
         "tr": "For sentences a, b, e and f, choose whether the speaker is Happy ☺ or Unhappy ☹."
        },
        "answer": "a. ☹　b. ☺　e. ☹　f. ☺"
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g5-1",
    "text": {
     "ja": "{受身形|うけみけい}",
     "en": "Passive"
    }
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g5-1a",
    "text": {
     "ja": "{迷惑|めいわく}の{受身|うけみ}",
     "en": "Adverse passive"
    }
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "When the subject is a person, passive voice sentences express more or less the same idea as the active voice counterparts (sentences where the subject performs the action). The difference between them is that the passive voice expresses the subject’s feeling of annoyance, dissatisfaction, etc. caused by someone’s action."
       }
      ]
     }
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "ja": "{友達|ともだち}は**私**をばかにしました。",
        "tr": "My friend made fun of me."
       },
       {
        "ja": "→（**私**は）友達**に**ばかに__されました__。",
        "tr": "→ (I) was made fun of by my friend."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "ja": "どろぼうが**私**のさいふをとりました。",
        "tr": "A thief took my wallet."
       },
       {
        "ja": "→（**私**は）どろぼう**に**さいふを__とられました__。",
        "tr": "→ (I) had my wallet taken by a thief."
       },
       {
        "ja": "？私のさいふは、どろぼうにとられました。",
        "tr": "? My wallet was taken by a thief."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ Using “my wallet ( 私のさいふ )” as the subject of a passive voice sentence sounds unnatural in Japanese; 私 (the owner of the object) should be the subject instead."
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 3,
      "lines": [
       {
        "ja": "だれかが**私**の足をふみました。",
        "tr": "Someone stepped on my foot."
       },
       {
        "ja": "→（**私**は）だれか**に**足を__ふまれました__。",
        "tr": "→ (I) had my foot stepped on by someone."
       },
       {
        "ja": "？私の足は、だれかにふまれました。",
        "tr": "? My foot was stepped on by someone."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ Similar to [#2], “my foot” should not be the subject of the passive voice sentence, as it sounds unnatural in Japanese; 私 should be the subject instead."
    }
   },
   {
    "t": "examples",
    "page": 221,
    "items": [
     {
      "n": 4,
      "lines": [
       {
        "ja": "試験の前に友達が{遊|あそ}びに来ました。(Simply stating the fact.)",
        "tr": "My friend came over to hang out before the exam."
       },
       {
        "ja": "→（**私**は）試験の前に友達**に**遊びに__来られました__。(The speaker is unhappy.)",
        "tr": "→ My friend came over to hang out before the exam (and I was bothered by it)."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ The passive voice expresses the speaker’s annoyance, etc. even when the active voice counterpart does not explicitly mention 私 in the sentence."
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 5,
      "lines": [
       {
        "ja": "雨が{降|ふ}りました。(Simply stating the fact.)",
        "tr": "It rained."
       },
       {
        "ja": "→（**私**は）雨**に**__降られました__。(The speaker is unhappy because he/she didn’t have an umbrella.)",
        "tr": "→ (I) got caught in the rain."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ It is also possible to express annoyance caused by inanimate objects (e.g., 雨 in this case)."
    }
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g5-1b",
    "text": {
     "ja": "{中立|ちゅうりつ}の{受身|うけみ}",
     "en": "Neutral passive"
    }
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "When the subject is a person, passive voice sentences often imply the subject’s annoyance. However, the passive voice can also be used to simply state the fact without implying annoyance. Below are some examples of such cases."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "text": {
     "ja": "{肯定的|こうていてき}な意味を持つ{動詞|どうし}の{場合|ばあい}",
     "en": "Using verbs with positive connotations"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "先生に作文を__ほめられました__。",
      "tr": "My essay was praised by my teacher."
     },
     {
      "n": 2,
      "ja": "{山中|やまなか}教授は医学研究者に__{尊敬|そんけい}されている__。",
      "tr": "Professor Yamanaka is respected by medical researchers."
     }
    ]
   },
   {
    "t": "head",
    "style": "plain",
    "text": {
     "ja": "社会的{事実|じじつ}を{述|の}べる場合",
     "en": "Stating simple facts"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 3,
      "ja": "（多くの人が）世界中で**英語**を使っています。→ **英語**は世界中で__使われています__。",
      "tr": "(Many people) use English all over the world. → English is used all over the world."
     },
     {
      "n": 4,
      "ja": "コンサートは7時からAホールで__{行|おこな}われます__。",
      "tr": "The concert will be held in Hall A from 7:00."
     },
     {
      "n": 5,
      "lines": [
       {
        "ja": "{村上春樹|むらかみはるき}が**『ノルウェーの{森|もり}』という本**を書きました。",
        "tr": "Haruki Murakami wrote a book called Norwegian Wood."
       },
       {
        "ja": "→**『ノルウェーの森』という本**は村上春樹__によって　書かれました__。",
        "tr": "→ The book Norwegian Wood was written by Haruki Murakami."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ The passive voice can be used when stating simple facts (e.g., who wrote a book that is fairly well-known). In such cases, the agents of the verbs (author of the book, in this case) are marked by 〜によって , rather than 〜に ."
    }
   },
   {
    "t": "box",
    "style": "blue",
    "id": "g5-box1",
    "title": {
     "ja": "▸ {迷惑|めいわく}の{受身|うけみ} (adverse passive) and 〜てもらう",
     "tr": "▸ The adverse passive and 〜てもらう"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "en": "To state the fact that a stranger took a picture of the speaker, use the adverse passive if the speaker felt annoyed by it (as in [#1]), and use 〜てもらう if the speaker requested it (as in [#2])."
      }
     },
     {
      "t": "p",
      "text": {
       "ja": "Fact:「知らない人が私の写真を{撮|と}った」",
       "tr": "Fact: \"A stranger took my picture.\""
      }
     },
     {
      "t": "examples",
      "items": [
       {
        "n": 1,
        "ja": "私は知らない人に写真を__撮られました__。",
        "tr": "I had my picture taken by a stranger (and didn't like it)."
       },
       {
        "n": 2,
        "lines": [
         {
          "sp": "私",
          "ja": "すみません、写真を撮ってもらえませんか。",
          "tr": "Excuse me, could you take my picture?"
         },
         {
          "sp": "知らない人",
          "ja": "いいですよ。",
          "tr": "Sure."
         },
         {
          "ja": "→ 私は知らない人に写真を__撮ってもらいました__。",
          "tr": "→ I had a stranger take my picture."
         }
        ]
       }
      ]
     },
     {
      "t": "figure",
      "desc": "[1] A man in a hat and sunglasses photographs a woman, who crosses her arms in front of her face in protest. [2] A woman takes a picture of a smiling man, who makes peace signs with both hands.",
      "labels": [
       "1",
       "2"
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "small",
    "text": {
     "ja": "✎答え▶ (1) a. ②　b. ①　c. ③　d. ④　e. ⑤　f. ④\n(2) a. 森　b. 森　c. 森　d. 森　e. 私　f. 私\n(3) a. ☹　b. ☺　e. ☹　f. ☺",
     "tr": "Answers: (1) a. ② b. ① c. ③ d. ④ e. ⑤ f. ④ (2) a. Mori b. Mori c. Mori d. Mori e. me f. me (3) a. ☹ b. ☺ e. ☹ f. ☺"
    }
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g5-2",
    "page": 222,
    "text": {
     "ja": "{使役形|しえきけい}",
     "en": "Causative"
    }
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g5-2a",
    "text": {
     "ja": "{強制|きょうせい}",
     "en": "Compulsion"
    }
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "Verbs in the causative form generally express that the action was done under compulsion. The subject of the sentence is the person who forced someone else to do the action."
       }
      ]
     }
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "お母さん",
        "ja": "{野菜|やさい}を食べなさい！",
        "tr": "Eat your vegetables!"
       },
       {
        "sp": "子ども",
        "ja": "（本当は食べたくないけど…）はい……。",
        "tr": "(I really don't want to eat them, but...) Okay..."
       },
       {
        "ja": "→ お母さんは子ども**に**野菜**を**__食べさせました__。",
        "tr": "→ The mother made her child eat vegetables."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ As shown in [#1] above, when the original verb takes an object followed by the particle を (e.g., 野菜を), then the person who was forced to do the action (e.g., 子ども) should take the particle に. This is a grammatical rule called double を constraint, which limits the use of particle を to once per verb."
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 2,
      "lines": [
       {
        "sp": "先生",
        "ja": "立ちなさい！",
        "tr": "Stand up!"
       },
       {
        "sp": "学生",
        "ja": "はい……。",
        "tr": "Yes..."
       },
       {
        "ja": "→ 先生は学生**を**__立たせました__。",
        "tr": "→ The teacher made the student stand up."
       }
      ]
     },
     {
      "n": 3,
      "lines": [
       {
        "sp": "部長",
        "ja": "来週の{出張|しゅっちょう}に{森|もり}が行きたがっていますが、どうしましょう？",
        "tr": "Mori wants to go on next week's business trip. What should we do?"
       },
       {
        "sp": "社長",
        "ja": "じゃあ、今回は森**に**__行かせよう__。",
        "tr": "Well then, let's let Mori go this time."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ If the original verb is an intransitive verb, the causee (the person who was forced to do the action) is followed by the particle を, as in [#2]. Use of the particle に is not prohibited, as shown in [#3], but in this case the sentence has the connotations that the subject (causer) considered the feeling of the person who does the action (causee). As such, example [#3] implies that 社長 is showing consideration for 森’s desire to go on the business trip."
    }
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g5-2b",
    "text": {
     "ja": "感情の{誘発|ゆうはつ}",
     "en": "Induction"
    }
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "Causative forms of intransitive verbs expressing emotions (e.g., 笑う , {泣|な}く , 怒る , びっくりする , 心配する , {困|こま}る ) do not mean that the emotions were “forced” by the causer; rather, they convey that the emotions were induced by the causer. In such cases, the causee should take the particle を."
       }
      ]
     }
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "兄は弟**を**__{泣|な}かせました__。",
      "tr": "The older brother made his younger brother cry."
     },
     {
      "n": 2,
      "ja": "親**を**__{喜|よろこ}ばせる__ために、いい会社に{就職|しゅうしょく}したい。",
      "tr": "I want to get a job at a good company to make my parents happy."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "[1] An older boy holds his fist over a younger boy's head; the younger boy cries.",
    "labels": [
     "1"
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "C",
    "id": "g5-2c",
    "text": {
     "ja": "{許可|きょか}",
     "en": "Permission〈{使役形|しえきけい} (causative) ＋てあげる／くれる／もらう〉"
    }
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "Causative verbs followed by てあげる／くれる／もらう express giving or receiving of permission to do the action."
       }
      ]
     }
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "弟",
        "ja": "お兄ちゃんの新しいギター、かっこいいね。ちょっと{弾|ひ}いてみてもいい？",
        "tr": "Your new guitar is really cool. Can I try playing it a little?"
       },
       {
        "sp": "私（兄）",
        "ja": "いいよ。",
        "tr": "Sure."
       },
       {
        "ja": "→ 私は弟に（私の）ギターを__弾かせてあげました__。",
        "tr": "→ I let my younger brother play (my) guitar."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ When the speaker (私) gives someone else permission to do something, then てあげる is used with the causative form. In [#1] above, 私 is the person who gives permission, and 弟 is the person who receives the permission (to play the speaker’s guitar)."
    }
   },
   {
    "t": "examples",
    "page": 223,
    "items": [
     {
      "n": 2,
      "lines": [
       {
        "ja": "［{喫茶店|きっさてん}で］",
        "tr": "[At a café]"
       },
       {
        "sp": "私",
        "ja": "わあ、お母さんのケーキ、おいしそう。ちょっと食べてもいい？",
        "tr": "Wow, your cake looks delicious, Mom. Can I have a little?"
       },
       {
        "sp": "母",
        "ja": "いいよ。ちょっとだけね。",
        "tr": "Sure. Just a little, though."
       },
       {
        "ja": "→ 母は私に（母の）ケーキを__食べさせてくれました__。",
        "tr": "→ My mother let me eat some of (her) cake."
       }
      ]
     },
     {
      "n": 3,
      "lines": [
       {
        "sp": "私",
        "ja": "お母さん、ちょっとパソコンを使ってもいいですか。",
        "tr": "Mom, may I use the computer for a bit?"
       },
       {
        "sp": "ホストマザー",
        "ja": "どうぞ。",
        "tr": "Go ahead."
       },
       {
        "ja": "→ 私はホストマザーにパソコンを__使わせてもらいました__。",
        "tr": "→ My host mother let me use the computer."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "note",
    "text": {
     "en": "＊ When the speaker receives a permission to do something, either 〜てくれる or 〜てもらう can be used with the causative form, depending on who the subject is. If the person giving the permission is the subject, then 〜てくれる is used (see [#2]); if the person receiving the permission is the subject, then 〜てもらう is used (see [#3]). In both cases, the speaker’s gratitude is expressed."
    }
   },
   {
    "t": "head",
    "style": "num",
    "tag": "3.",
    "id": "g5-3",
    "text": {
     "ja": "{使役受身形|しえきうけみけい}",
     "en": "Causative-passive"
    }
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "The causative-passive form is used to state that the subject of the sentence was forced to do something."
       }
      ]
     }
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "先生",
        "ja": "3000字の作文を書いてください。",
        "tr": "Please write a 3,000-character essay."
       },
       {
        "sp": "学生",
        "ja": "（本当は書きたくないけど…）はい……。",
        "tr": "(I really don't want to write it, but...) Okay..."
       },
       {
        "ja": "→ **学生**は先生**に**長い作文を__書かされました__（__書かせられました__）。",
        "tr": "→ The student was made to write a long essay by the teacher."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "sp": "{先輩|せんぱい}",
        "ja": "3年生は先に帰るから、1、2年生は{掃除|そうじ}をしてから、帰ってね。",
        "tr": "The third-years are heading home first, so you first- and second-years clean up before you go home, okay?"
       },
       {
        "sp": "{後輩|こうはい}",
        "ja": "はい……。",
        "tr": "Okay..."
       },
       {
        "ja": "→ **後輩**は先輩**に**掃除を__させられました__。",
        "tr": "→ The juniors were made to clean by the seniors."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "blue",
    "id": "g5-box2",
    "title": {
     "ja": "▸ {使役形|しえきけい}と{使役受身形|しえきうけみけい}",
     "tr": "▸ The causative and the causative-passive"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "en": "There are two ways to express the idea that someone (causer) forced someone else (causee) to do something: (1) Subject (causer) + verb in causative form, and (2) Subject (causee) + verb in causative-passive form."
      }
     },
     {
      "t": "examples",
      "items": [
       {
        "n": "母→子",
        "lines": [
         {
          "sp": "母",
          "ja": "{野菜|やさい}を食べなさい！",
          "tr": "Eat your vegetables!"
         },
         {
          "sp": "子",
          "ja": "（本当は食べたくないけど…）はい……。",
          "tr": "(I really don't want to eat them, but...) Okay..."
         }
        ]
       }
      ]
     },
     {
      "t": "examples",
      "items": [
       {
        "n": "(1)",
        "ja": "**お母さん**は子どもに野菜を__食べさせました__。(causative)",
        "tr": "The mother made her child eat vegetables."
       },
       {
        "n": "(2)",
        "ja": "**子ども**はお母さんに野菜を__食べさせられました__。(causative-passive)",
        "tr": "The child was made to eat vegetables by the mother."
       }
      ]
     },
     {
      "t": "p",
      "text": {
       "en": "When the speaker (私) is either the causer or causee, then 私 should generally be used as the subject of the sentence."
      }
     },
     {
      "t": "examples",
      "items": [
       {
        "n": "私→子",
        "lines": [
         {
          "ja": "**私**は子どもに野菜を__食べさせました__。(causative)",
          "tr": "I made my child eat vegetables."
         },
         {
          "ja": "（？__子ども__は私に野菜を食べさせられました。）",
          "tr": "(? My child was made to eat vegetables by me.)"
         }
        ]
       },
       {
        "n": "母→私",
        "lines": [
         {
          "ja": "**私**は母に野菜を__食べさせられました__。(causative-passive)",
          "tr": "I was made to eat vegetables by my mother."
         },
         {
          "ja": "（？__母__は私に野菜を食べさせました。）",
          "tr": "(? My mother made me eat vegetables.)"
         }
        ]
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "g6",
  "kind": "grammar",
  "no": 6,
  "title": "{条件文|じょうけんぶん}　〜たら／〜と／〜ば／〜なら",
  "en": "Conditional sentences",
  "lesson": 5,
  "lessons": [
   5
  ],
  "page": 224,
  "blocks": [
   {
    "t": "p",
    "page": 224,
    "text": {
     "en": "たら／と／ば／なら in “X たら／と／ば／なら Y” state that X is a condition for Y to occur. These forms express slightly different connotations and are not always interchangeable; read below to review the conditional forms and their differences."
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g6-ex",
    "title": {
     "ja": "正しい答えを{選|えら}んでください。",
     "tr": "Choose the correct answer."
    },
    "blocks": [
     {
      "t": "choice",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "冬に【a. なると　b. なったら】スキーをしましょう。",
         "tr": "When winter comes, let's go skiing."
        },
        "options": [
         "a. なると",
         "b. なったら"
        ],
        "answer": 1
       },
       {
        "n": "(2)",
        "text": {
         "ja": "{頭|あたま}が痛いが、少し【a. 休むなら　b. 休めば】よくなると思う。",
         "tr": "I have a headache, but I think it'll get better if I rest a little."
        },
        "options": [
         "a. 休むなら",
         "b. 休めば"
        ],
        "answer": 1
       },
       {
        "n": "(3)",
        "text": {
         "ja": "A：ちょっとコンビニに行ってくるね。\nB：{寒|さむ}いから【a. 出かけるなら　b. 出かけたら】コートを着ていきなさい。",
         "tr": "A: I'm just going to run to the convenience store.\nB: It's cold, so if you're going out, wear a coat."
        },
        "options": [
         "a. 出かけるなら",
         "b. 出かけたら"
        ],
        "answer": 0
       },
       {
        "n": "(4)",
        "text": {
         "ja": "ドアの前に【a. 立つと　b. 立つなら】ドアが開きます。",
         "tr": "When you stand in front of the door, it opens."
        },
        "options": [
         "a. 立つと",
         "b. 立つなら"
        ],
        "answer": 0
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g6-1",
    "text": "〜たら"
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g6-1a",
    "text": {
     "ja": "XたらY",
     "en": "(Y in present tense)"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "宿題が終わっ**たら**、{寝|ね}ようと思います。",
      "tr": "When I finish my homework, I'm going to go to bed."
     },
     {
      "n": 2,
      "ja": "明日{晴|は}れ**たら**、テニスがしたいです。",
      "tr": "If it's sunny tomorrow, I want to play tennis."
     },
     {
      "n": 3,
      "ja": "{寒|さむ}かっ**たら**、ヒーターをつけてください。",
      "tr": "If it's cold, please turn on the heater."
     },
     {
      "n": 4,
      "ja": "{熱|ねつ}が出**たら**、学校を休んだほうがいい。",
      "tr": "If you get a fever, you should stay home from school."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "This form states that Y will occur after the condition X is completed/realized."
       },
       {
        "en": "Y often uses structures that express the speaker’s subjective opinion, volition or desire, such as 〜(よ)う and 〜たい ."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "items": [
       {
        "ja": "{寝|ね}る → 寝__よう__ (volition)／寝__たい__ (desire)／寝て__ください__ (request)／\n寝た__ほうがいい__ (advice)",
        "tr": "寝る (to sleep) → 寝よう (let's sleep / I'll sleep) / 寝たい (I want to sleep) / 寝てください (please sleep) / 寝たほうがいい (you should sleep)"
       }
      ]
     },
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "〜たら is less restrictive and can be used in more situations compared to 〜と , 〜ば , and 〜なら . However, in cases where Y would be realized before X is, 〜なら should be used instead of 〜たら."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g6-1b",
    "text": {
     "ja": "XたらY",
     "en": "(Y in past tense)"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "朝起き**たら**、{雪|ゆき}が{降|ふ}っていました。",
      "tr": "When I got up in the morning, it was snowing."
     },
     {
      "n": 2,
      "ja": "図書館に行っ**たら**、{閉|し}まっていました。",
      "tr": "When I went to the library, it was closed."
     }
    ]
   },
   {
    "t": "figure",
    "desc": "[1] A woman sits up in bed and looks in surprise at a window through which snow is falling on the mountains.",
    "labels": [
     "1"
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "When Y is in the past tense, X たら Y expresses that the speaker learned of Y when X was done. This usage has the connotations that the speaker was surprised to learn Y, or that Y was an unexpected event."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "small",
    "text": {
     "ja": "✎答え▶ (1) b　(2) b　(3) a　(4) a",
     "tr": "Answers: (1) b (2) b (3) a (4) a"
    }
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g6-2",
    "page": 225,
    "text": "〜と"
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "春になる**と**、{桜|さくら}が{咲|さ}きます。",
      "tr": "When spring comes, the cherry blossoms bloom."
     },
     {
      "n": 2,
      "ja": "スイッチを{押|お}す**と**、電気がつきます。",
      "tr": "When you press the switch, the light comes on."
     },
     {
      "n": 3,
      "ja": "毎朝起きる**と**、（いつも）コーヒーを飲みます。",
      "tr": "Every morning when I get up, I (always) drink coffee."
     },
     {
      "n": 4,
      "lines": [
       {
        "sp": "A",
        "ja": "これ、おみやげです。\n気に入っていただける**といい**んですが……。",
        "tr": "This is a souvenir for you.\nI hope you like it..."
       },
       {
        "sp": "B",
        "ja": "ありがとうございます。",
        "tr": "Thank you very much."
       }
      ]
     }
    ]
   },
   {
    "t": "figure",
    "desc": "[4] A young man hands a wrapped box to a smiling young woman.",
    "labels": [
     "4"
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "The conditional form 〜と used in “X と Y” (Y in present tense) expresses that Y always happens when X occurs. This structure is often used for a natural phenomenon ([#1]), something that occurs automatically ([#2]), and habitual routines ([#3])."
       },
       {
        "en": "Unlike 〜たら , forms that express the speaker’s subjective opinion, volition or desire (e.g., 〜(よ)う and 〜たい ) cannot be used in Y when using the conditional form 〜と ."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "items": [
       {
        "mark": "○",
        "ja": "あの{喫茶店|きっさてん}に行くと、いつもケーキを食べてしまう。",
        "tr": "Whenever I go to that café, I end up eating cake."
       },
       {
        "mark": "×",
        "ja": "あの喫茶店に行くと、ケーキを食べ__よう__と思います。",
        "tr": "(Incorrect) Intended: \"When I go to that café, I'm going to eat cake.\""
       }
      ]
     },
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "X といいんですが and X といいですね are set phrases used to express the speaker’s hope ([#4])."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "3.",
    "id": "g6-3",
    "text": "〜ば"
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "{教科書|きょうかしょ}の{単語|たんご}を全部{覚|おぼ}えれ**ば**、単語テストでいい{点|てん}が{取|と}れます。",
      "tr": "If you memorize all the vocabulary in the textbook, you can get a good score on the vocabulary test."
     },
     {
      "n": 2,
      "ja": "{薬|くすり}を飲め**ば**、{風邪|かぜ}がよくなります。",
      "tr": "If you take medicine, your cold will get better."
     },
     {
      "n": 3,
      "ja": "薬を飲ま**なければ**、風邪がよくなりません。",
      "tr": "If you don't take medicine, your cold won't get better."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "X ば Y (Y in present tense) conveys that a desirable result (Y) would be achieved if the condition X is met."
       },
       {
        "en": "As in [#3], when the construction “X なければ Y ない” is used,  X is considered a prerequisite for Y to happen."
       },
       {
        "en": "When X uses a verb that expresses an action or change, then Y cannot use expressions that convey the speaker’s subjective opinion or wish (e.g., 〜たい , 〜(よ)う , 〜てください , 〜たほうがいい). However, when X uses an adjective or a verb that describes a state, Y can have expressions of the speaker’s subjective opinion or wish."
       }
      ]
     }
    ]
   },
   {
    "t": "table",
    "cols": [
     "auto",
     "1fr",
     "auto",
     "1fr"
    ],
    "head": [
     [
      "",
      {
       "text": "Xば",
       "colspan": 2
      },
      "Y"
     ]
    ],
    "rows": [
     [
      {
       "text": "(a)",
       "style": "hl"
      },
      "{動作動詞|どうさどうし} Action verb",
      "＋ば",
      {
       "text": "話し手の{主観|しゅかん}の{表現|ひょうげん}：　×\nSpeaker’s subjective opinion",
       "rowspan": 2
      }
     ],
     [
      {
       "text": "(b)",
       "style": "hl"
      },
      "{変化|へんか}動詞 Verb expressing change",
      "＋ば"
     ],
     [
      {
       "text": "(c)",
       "style": "hl"
      },
      {
       "ja": "{状態|じょうたい}動詞 Verbs describing state\n（ある、わかるなど）",
       "tr": "Verbs describing state (ある, わかる, etc.)"
      },
      "＋ば",
      {
       "text": "話し手の主観の表現：　○",
       "rowspan": 2
      }
     ],
     [
      {
       "text": "(d)",
       "style": "hl"
      },
      "{形容詞|けいようし} Adjectives",
      "＋ば"
     ]
    ]
   },
   {
    "t": "examples",
    "items": [
     {
      "n": "(a)",
      "lines": [
       {
        "ja": "○ 大学に行けば、様々なことが__学べます__。",
        "tr": "○ If you go to college, you can learn all sorts of things."
       },
       {
        "ja": "× 大学に行けば、様々なことが__学びたいです__。",
        "tr": "× (Incorrect) Intended: \"If I go to college, I want to learn all sorts of things.\""
       }
      ]
     },
     {
      "n": "(b)",
      "page": 226,
      "lines": [
       {
        "ja": "○ {給料|きゅうりょう}が{増|ふ}えれば、新しいアパートに__{引|ひ}っ{越|こ}せます__。",
        "tr": "○ If my salary goes up, I can move to a new apartment."
       },
       {
        "ja": "× 給料が増えれば、新しいアパートに__引っ越したほうがいい__。",
        "tr": "× (Incorrect) Intended: \"If your salary goes up, you should move to a new apartment.\""
       }
      ]
     },
     {
      "n": "(c)",
      "ja": "時間があれば、{一緒|いっしょ}に旅行に__行きましょう__。",
      "tr": "If we have time, let's go on a trip together."
     },
     {
      "n": "(d)",
      "ja": "今日{忙|いそが}しければ、明日オフィスに__来てください__。",
      "tr": "If you're busy today, please come to the office tomorrow."
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "4.",
    "id": "g6-4",
    "text": "〜なら"
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "A",
        "ja": "{将来|しょうらい}は日本で働くつもりです。",
        "tr": "I plan to work in Japan in the future."
       },
       {
        "sp": "B",
        "ja": "日本で働く**なら**、{敬語|けいご}を勉強しておいたほうがいいですよ。",
        "tr": "If you are going to work in Japan, you should study keigo (honorific language) ahead of time."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "sp": "A",
        "ja": "この本、すごくおもしろくて、すぐ読み終わっちゃった。",
        "tr": "This book was so interesting that I finished it right away."
       },
       {
        "sp": "B",
        "ja": "もう読み終わった**なら**、私に貸してくれない？",
        "tr": "If you've already finished it, would you lend it to me?"
       }
      ]
     },
     {
      "n": 3,
      "lines": [
       {
        "ja": "(Your subordinate looks tired.)"
       },
       {
        "ja": "{疲|つか}れている**なら**、早く帰ってもいいよ。",
        "tr": "If you're tired, you can go home early."
       }
      ]
     },
     {
      "n": 4,
      "lines": [
       {
        "sp": "A",
        "ja": "{単語|たんご}を{覚|おぼ}えても、すぐに忘れちゃうんだ……。",
        "tr": "Even when I memorize vocabulary, I forget it right away..."
       },
       {
        "sp": "B",
        "ja": "それ**なら**、このアプリを使ってみたら？　楽しみながら何度も勉強できるよ。",
        "tr": "In that case, why don't you try this app? You can study over and over while having fun."
       }
      ]
     },
     {
      "n": 5,
      "lines": [
       {
        "ja": "(On a travel agency flyer)"
       },
       {
        "ja": "古い町を見たい**なら**、{京都|きょうと}や{奈良|なら}がおすすめ！",
        "tr": "If you want to see old towns, we recommend Kyoto and Nara!"
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "X なら means “if X is the case.” X in “X なら Y” rephrases/reiterates something that was discussed previously or something that is known in the context (e.g., a statement made by the conversation partner). Y expresses the speaker’s judgment, command, desire, or volition regarding the matter mentioned in X."
       },
       {
        "en": "Unlike other types of conditional sentences, 〜なら can be used for a situation in which X is achieved after Y occurred (see [#1])."
       },
       {
        "en": "As in [#4], それなら “in that case” is used as a set phrase to refer to the previous statement made by the conversation partner."
       }
      ]
     }
    ]
   },
   {
    "t": "table",
    "cols": [
     "auto",
     "auto",
     "1fr",
     "1fr"
    ],
    "head": [
     [
      "",
      {
       "text": {
        "en": "Meaning"
       },
       "colspan": 2
      },
      {
       "en": "Can Y use expressions for the speaker’s subjective opinion?"
      }
     ]
    ],
    "rows": [
     [
      {
       "text": "XたらY",
       "rowspan": 2,
       "style": "hl"
      },
      "XたらY\n(present)",
      {
       "en": "If X occurs (or after X occurs),\nY will happen."
      },
      "○"
     ],
     [
      "XたらY\n(past)",
      {
       "en": "The speaker discovered Y when X occurred. Y in this case is considered something that was unexpected."
      },
      "×"
     ],
     [
      {
       "text": "XとY",
       "style": "hl"
      },
      {
       "text": {
        "en": "• If X occurs, Y always happens.\n• Used to describe natural phenomena and things that occur automatically or habitually."
       },
       "colspan": 2
      },
      "×"
     ],
     [
      {
       "text": "XばY",
       "rowspan": 2,
       "style": "hl"
      },
      {
       "text": {
        "en": "Used to describe a prerequisite (X) for a desirable result (Y) to happen."
       },
       "colspan": 2,
       "rowspan": 2
      },
      {
       "en": "Not when X includes either action verbs or verbs expressing change."
      }
     ],
     [
      {
       "en": "Opinion can be expressed when X uses stative verbs or adjectives."
      }
     ],
     [
      {
       "text": "XならY",
       "style": "hl"
      },
      {
       "text": {
        "en": "Used to state the speaker’s opinion (Y) in the case of X."
       },
       "colspan": 2
      },
      "○"
     ]
    ]
   }
  ]
 },
 {
  "id": "g7",
  "kind": "grammar",
  "no": 7,
  "title": "{助詞|じょし}「は」と「が」",
  "en": "Particles は and が",
  "page": 227,
  "blocks": [
   {
    "t": "p",
    "page": 227,
    "text": {
     "en": "In Japanese, the particle は marks the topic of the sentence, whereas が marks the nominative case. Both are often considered the equivalent of subjects of the sentences, but the two particles are not always interchangeable. Below is a review of differences between は and が ."
    }
   },
   {
    "t": "box",
    "style": "task",
    "id": "g7-ex",
    "title": {
     "ja": "正しい答えを{選|えら}んでください。",
     "tr": "Choose the correct answer."
    },
    "blocks": [
     {
      "t": "qs",
      "items": [
       {
        "n": "(1)",
        "text": {
         "ja": "A：テスト　a.【は・が】いつですか。\nB：金曜日です。\nA：何　b.【は・が】出ますか。\nB：6{課|か}の文法と{助詞|じょし}の問題が出ます。漢字　c.【は・が】出ません。",
         "tr": "A: When is the test?\nB: It's on Friday.\nA: What's going to be on it?\nB: There will be questions on the grammar and particles from Lesson 6. There won't be any kanji."
        },
        "answer": "a. は　b. が　c. は"
       },
       {
        "n": "(2)",
        "text": {
         "ja": "ジョージは{背|せ}【は・が】高くて、やせています。",
         "tr": "George is tall and thin."
        },
        "answer": "が"
       },
       {
        "n": "(3)",
        "text": {
         "ja": "ジョージ【は・が】住んでいる{寮|りょう}は大学の近くにあります。",
         "tr": "The dorm George lives in is near the university."
        },
        "answer": "が"
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "1.",
    "id": "g7-1",
    "text": {
     "ja": "「は」と「が」の違い",
     "en": "Differences between は and が"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "A",
        "ja": "すみません。{受付|うけつけ}**は**どこですか。",
        "tr": "Excuse me. Where is the reception desk?"
       },
       {
        "sp": "B",
        "ja": "受付**は**あちらです。",
        "tr": "Reception is over there."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "sp": "A",
        "ja": "あの建物の中に何**が**ありますか。",
        "tr": "What's inside that building?"
       },
       {
        "sp": "B",
        "ja": "食堂や学生ラウンジ**が**あります。",
        "tr": "There's a cafeteria, a student lounge, and so on."
       }
      ]
     },
     {
      "n": 3,
      "lines": [
       {
        "sp": "ジョージ",
        "ja": "初めまして。私**は**ジョージ・テイラーと{申|もう}します。",
        "tr": "Nice to meet you. My name is George Taylor."
       }
      ]
     },
     {
      "n": 4,
      "lines": [
       {
        "sp": "A",
        "ja": "{昨日|きのう}のパーティーにリーさん**が**来ましたよ。",
        "tr": "Lee came to the party yesterday, you know."
       },
       {
        "sp": "B",
        "ja": "ああ、リーさん**は**元気でしたか。",
        "tr": "Oh, how was Lee doing?"
       },
       {
        "sp": "A",
        "ja": "はい。（リーさん**は**）元気でしたよ。",
        "tr": "Yes. (Lee) was doing well."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "は in “X は” marks X as the topic of the sentence, thereby signaling that the sentence will be a statement about X. が , on the other hand, marks the subject of the sentence."
       },
       {
        "en": "は places focus on the part of the sentence that follows は ; therefore, main points of the sentence (e.g., interrogative words, important information) come after は (see [#1]). は is also used to mark the subject of the sentence that is already made clear in the context and shared between the speaker and the listener."
       },
       {
        "en": "On the contrary, が places focus on the part of the sentence that precedes が . As such, important information is mentioned before the particle が (see [#2]). Also in contrast to は , が is used to mark a subject that is considered to be new information for one of the speakers."
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "blue",
    "blocks": [
     {
      "t": "table",
      "cols": [
       "auto",
       "auto",
       "auto",
       "auto"
      ],
      "rows": [
       [
        {
         "text": "**は**：",
         "style": "hl"
        },
        {
         "en": "topic"
        },
        "**は**",
        {
         "text": {
          "en": "important information"
         },
         "style": "frame"
        }
       ],
       [
        {
         "text": "**が**：",
         "style": "hl"
        },
        {
         "text": {
          "en": "important information"
         },
         "style": "frame"
        },
        "**が**",
        {
         "en": "statement"
        }
       ]
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "2.",
    "id": "g7-2",
    "page": 228,
    "text": {
     "ja": "「は」の{特徴的|とくちょうてき}な使い方：{対比|たいひ}",
     "en": "Specific use of は: Making a contrast"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "サッカー**は**よく見ますが、{野球|やきゅう}**は**あまり見ません。",
      "tr": "I watch soccer a lot, but I don't watch baseball much."
     },
     {
      "n": 2,
      "ja": "{喫茶店|きっさてん}で**は**コーヒーをあまり飲みません。",
      "tr": "I don't drink much coffee at cafés (though I do elsewhere)."
     },
     {
      "n": 3,
      "ja": "喫茶店でコーヒー**は**あまり飲みません。",
      "tr": "At cafés, I don't drink much coffee (though I drink other things)."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "The particle は has a contrastive function as well. In [#1] above, は is used to make contrast between soccer and baseball. Because of this contrastive function of the particle, conjunctions for reverse conditions (e.g., でも , 〜が) are often used with them."
       },
       {
        "en": "In negative sentences, は is often used to mark the specific item that is being negated. In [#2], {喫茶店|きっさてん}で is being negated specifically, implying that the speaker may drink coffee at other places, just not at the café. On the contrary, in [#3], コーヒー is being negated, meaning that the speaker may drink other types of beverages but not coffee."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "3.",
    "id": "g7-3",
    "text": {
     "ja": "「が」の{特徴的|とくちょうてき}な使い方",
     "en": "Specific uses of が"
    }
   },
   {
    "t": "head",
    "style": "step",
    "tag": "A",
    "id": "g7-3a",
    "text": {
     "ja": "{中立叙述|ちゅうりつじょじゅつ}を表す「が」",
     "en": "が for neutral statement"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "あ、バス**が**来た！",
      "tr": "Oh, the bus is here!"
     },
     {
      "n": 2,
      "ja": "あ、雪**が**やんだ。",
      "tr": "Oh, the snow has stopped."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "が is used to simply state a fact or to describe something objectively."
       }
      ]
     }
    ]
   },
   {
    "t": "figure",
    "desc": "[1] A girl standing at a bus stop waves as a bus approaches.",
    "labels": [
     "1"
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "B",
    "id": "g7-3b",
    "text": {
     "ja": "{総記|そうき}を表す「が」",
     "en": "が for exhaustive listing"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "lines": [
       {
        "sp": "{客|きゃく}",
        "ja": "どの色**が**おすすめですか。",
        "tr": "Which color do you recommend?"
       },
       {
        "sp": "店員",
        "ja": "黒**が**おすすめです。",
        "tr": "I recommend the black one."
       }
      ]
     },
     {
      "n": 2,
      "lines": [
       {
        "sp": "A",
        "ja": "そのお{弁当|べんとう}、おいしそうですね。自分で作ったんですか。",
        "tr": "That boxed lunch looks delicious. Did you make it yourself?"
       },
       {
        "sp": "B",
        "ja": "いえ、ホストマザー**が**作ってくれたんです。",
        "tr": "No, my host mother made it for me."
       }
      ]
     },
     {
      "n": 3,
      "ja": "だれも運転できないなら、私**が**運転します。",
      "tr": "If nobody else can drive, I'll drive."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "“X が Y” places emphasis on X; it has the connotation that it is X (and not others) that Y applies to."
       },
       {
        "en": "Interrogative words and answers to questions are marked with が (e.g., どの色が and 黒が in [#1])."
       },
       {
        "en": "[#3] emphasizes that it is 私 (and not anyone else) who will drive; therefore, が is used with 私 to place emphasis on it."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "step",
    "tag": "C",
    "id": "g7-3c",
    "text": {
     "ja": "{節|せつ}の中の「が」",
     "en": "が within a clause"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "母**が**家族の{誕生日|たんじょうび}に作るケーキはおいしい。",
      "tr": "The cakes my mother makes for family birthdays are delicious."
     },
     {
      "n": 2,
      "ja": "リーさん**が**住んでいるアパートは学校の近くにある。",
      "tr": "The apartment Lee lives in is near the school."
     },
     {
      "n": 3,
      "ja": "{娘|むすめ}**が**{風邪|かぜ}をひいた時、私は会社を休みました。",
      "tr": "When my daughter caught a cold, I took time off from work."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "page": 229,
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "In general, the particle が is used within a noun-modifying clause (i.e., a clause that precedes a noun and describes the noun). See examples (a) and (b) below."
       }
      ]
     },
     {
      "t": "examples",
      "items": [
       {
        "n": "(a)",
        "ja": "母は家族の{誕生日|たんじょうび}にケーキを作る。そのケーキはおいしい。",
        "tr": "My mother makes a cake for family birthdays. That cake is delicious."
       },
       {
        "n": "(b)",
        "ja": "!!［!!母**が**家族の誕生日に作る!!］!!ケーキはおいしい。（[#1]）",
        "tr": "The cakes [my mother makes for family birthdays] are delicious. ([1])"
       }
      ]
     },
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "In a sentence with both an independent clause and a dependent clause, if the subject of the dependent clause is different from the subject of the independent clause, then the subject of the dependent clause should take the particle が (see [#3])."
       },
       {
        "en": "Within a quote (e.g., 〜と思う , 〜と言う), the subject does not always have to take the particle が. Whether to use は or が depends on the original particle used."
       }
      ]
     },
     {
      "t": "examples",
      "style": "rei",
      "items": [
       {
        "ja": "ジョージ「日本のコンビニ**は**{便利|べんり}だね。」",
        "tr": "George: \"Convenience stores in Japan are convenient, aren't they?\""
       },
       {
        "ja": "→ ジョージは日本のコンビニ**は**便利だと言いました。",
        "tr": "→ George said that convenience stores in Japan are convenient."
       }
      ]
     }
    ]
   },
   {
    "t": "head",
    "style": "num",
    "tag": "4.",
    "id": "g7-4",
    "text": {
     "ja": "「XはYが〜」のパターン",
     "en": "Sentences using both は and が"
    }
   },
   {
    "t": "examples",
    "items": [
     {
      "n": 1,
      "ja": "サラ**は**{髪|かみ}**が**長いです。",
      "tr": "Sarah has long hair."
     },
     {
      "n": 2,
      "ja": "{東京|とうきょう}**は**{物価|ぶっか}**が**高いです。",
      "tr": "Prices are high in Tokyo."
     },
     {
      "n": 3,
      "ja": "私**は**日本のアニメ**が**好きです。",
      "tr": "I like Japanese anime."
     },
     {
      "n": 4,
      "ja": "ジョージ**は**テニス**が**上手です。",
      "tr": "George is good at tennis."
     }
    ]
   },
   {
    "t": "box",
    "style": "gray",
    "blocks": [
     {
      "t": "list",
      "mark": "•",
      "items": [
       {
        "en": "“X は Y が〜” is a structure in which both は and が are used. This structure can be roughly translated as: “Speaking of X, Y is/does . . . ”"
       },
       {
        "en": "There are two patterns for this construction: (a) Y is a part of X ( [#1] and [#2]), and (b) Y is an object that triggers certain feelings for X, or a specific ability of X ( [#3] and [#4])."
       }
      ]
     }
    ]
   },
   {
    "t": "p",
    "style": "small",
    "text": {
     "ja": "✎答え▶ (1) a. は　b. が　c. は　(2) が　(3) が",
     "tr": "Answers: (1) a. は b. が c. は (2) が (3) が"
    }
   }
  ]
 },
 {
  "id": "k1",
  "kind": "kanji",
  "no": 1,
  "title": "{形|かたち}が{似|に}ている漢字",
  "en": "Kanji with similar shapes",
  "lesson": 1,
  "page": 230,
  "blocks": [
   {
    "t": "p",
    "page": 230,
    "text": {
     "ja": "「大」「犬」「太」という漢字は、{形|かたち}がよく{似|に}ていて間違いやすいです。\n他にもたくさんあるので見てみましょう。",
     "tr": "The kanji 大, 犬, and 太 look very much alike and are easy to confuse. There are many more like them, so let's take a look."
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "{似|に}ている漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji that look alike."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)"
         ]
        ],
        "rows": [
         [
          "人 vs. 入る",
          "土 vs. 上",
          "体 vs. 休み",
          "木 vs. 本"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "似ている漢字を使った単語を考えよう。",
       "tr": "Think of words that use kanji that look alike."
      },
      "blocks": [
       {
        "t": "p",
        "text": {
         "ja": "(例)　牛 vs. 午",
         "tr": "(Example) 牛 vs. 午"
        }
       },
       {
        "t": "figure",
        "desc": "A woman in glasses thinks of words for the example pair: her speech bubbles say 牛肉 (gyūniku, beef) and 午前 (gozen, morning), with 牛 and 午 in pink.",
        "labels": [
         "!!{牛|ぎゅう}!!{肉|にく}",
         "!!{午|ご}!!{前|ぜん}"
        ]
       },
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)"
         ]
        ],
        "rows": [
         [
          "続 vs. 読",
          "待 vs. 持",
          "旅 vs. 族",
          "動 vs. 働",
          "全 vs. 金"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "{似|に}ている漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji that look alike."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "水",
        "［!!水!!曜日］",
        "氷",
        "［!!{氷|こおり}!!］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "ice"
        }
       ],
       [
        "②",
        "千",
        "［五!!千!!円］",
        "干",
        "［!!{干|ほ}!!す］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "to dry"
        }
       ],
       [
        "③",
        "手",
        "［!!手!!紙］",
        "毛",
        "［!!{毛|け}!!］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "hair"
        }
       ],
       [
        "④",
        "考",
        "［!!考!!える］",
        "老",
        "［!!{老|ろう}!!{人|じん}］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "old person"
        }
       ]
      ]
     },
     {
      "t": "p",
      "style": "right",
      "text": {
       "ja": "※新しい漢字：　①__氷__　②__干__す　③__毛__　④__老__人",
       "tr": "*New kanji: ① 氷 ② 干す ③ 毛 ④ 老人"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "k2",
  "kind": "kanji",
  "no": 2,
  "title": "{音|おん}{符|ぷ}",
  "en": "Phonetic indicators",
  "lesson": 1,
  "page": 231,
  "blocks": [
   {
    "t": "p",
    "page": 231,
    "text": {
     "ja": "「生」（学__生__）と「性」（女__性__ female）という漢字は、同じ「生」というパーツ (part) が使われていて、どちらも音読みは「せい」です。このように音読みを表すパーツを「{音|おん}{符|ぷ}」と言い、漢字の音読みがわからない時のヒントになります。",
     "tr": "The kanji 生 (as in 学生, student) and 性 (as in 女性, female) both use the same part, 生, and both have the on-reading sei. A part like this that shows the on-reading is called an onpu (phonetic indicator), and it gives you a hint when you don't know a kanji's on-reading."
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "(1)〜(4)の{音|おん}{符|ぷ}が使われている単語を下のa〜hから{探|さが}して（　　）に記号を書こう。",
       "tr": "Find words below (a–h) that use the phonetic indicators in (1)–(4), and write their letters in the parentheses."
      }
     },
     {
      "n": "2.",
      "text": {
       "ja": "その単語を読んでみよう。",
       "tr": "Read those words."
      },
      "blocks": [
       {
        "t": "figure",
        "desc": "A woman gestures toward the example; her speech bubble gives the readings of the two example words, with せい underlined in grey.",
        "labels": [
         "a. がく__せい__　b. __せい__かく"
        ]
       },
       {
        "t": "p",
        "text": {
         "ja": "(例)　{生|せい}（ !!a!! ）（ !!b!! ）",
         "tr": "(Example) 生 (sei): (a) (b)"
        }
       },
       {
        "t": "table",
        "rows": [
         [
          "(1)",
          "{五|ご}",
          "（　　）（　　）",
          "(2)",
          "{受|じゅ}",
          "（　　）（　　）"
         ],
         [
          "(3)",
          "{間|かん}",
          "（　　）（　　）",
          "(4)",
          "{安|あん}",
          "（　　）（　　）"
         ]
        ]
       },
       {
        "t": "box",
        "style": "frame",
        "blocks": [
         {
          "t": "table",
          "rows": [
           [
            "~~a.~~ 学生",
            "~~b.~~ 性格",
            "c. 受賞",
            "d. 案内",
            "e. 日本語"
           ],
           [
            "f. 時間",
            "g. 安心",
            "h. 簡単",
            "i. 授業",
            "j. 五回"
           ]
          ]
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "［　　］の単語を読んでみよう。",
       "tr": "Read the words in the brackets."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "生",
        "［",
        "男性",
        "姓名",
        "］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "full name"
        },
        ""
       ],
       [
        "②",
        "工",
        "［",
        "工学",
        "紅{葉|よう}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "engineering"
        },
        {
         "en": "autumn leaves"
        },
        ""
       ],
       [
        "③",
        "長",
        "［",
        "部長",
        "手帳",
        "］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "pocket diary"
        },
        ""
       ],
       [
        "④",
        "交",
        "［",
        "学校",
        "郊外",
        "］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "suburbs"
        },
        ""
       ],
       [
        "⑤",
        "東",
        "［",
        "東京",
        "凍{結|けつ}",
        "］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "freezing"
        },
        ""
       ],
       [
        "⑥",
        "召",
        "［",
        "紹介",
        "招{待|たい}",
        "］"
       ],
       [
        "",
        "",
        "",
        "",
        {
         "en": "invitation"
        },
        ""
       ]
      ]
     },
     {
      "t": "p",
      "style": "right",
      "text": {
       "ja": "※新しい漢字：　①__姓__名　②__紅__葉　③手__帳__　④__郊__外　⑤__凍__結　⑥__招__待",
       "tr": "*New kanji: ① 姓名 ② 紅葉 ③ 手帳 ④ 郊外 ⑤ 凍結 ⑥ 招待"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "k3",
  "kind": "kanji",
  "no": 3,
  "title": "{部首|ぶしゅ}「にんべん（亻）・ひとやね（𠆢）」",
  "lesson": 2,
  "page": 232,
  "blocks": [
   {
    "t": "box",
    "style": "gray",
    "page": 232,
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「{部首|ぶしゅ}」とは、いろいろな漢字に使われているパーツです。部首にはそれぞれ意味があります。",
       "tr": "Radicals (bushu) are parts used in many different kanji. Each radical has its own meaning."
      }
     },
     {
      "t": "p",
      "text": {
       "ja": "（部首の例）　氵　辶　扌　宀　貝　言　忄　糹　木　口　日",
       "tr": "(Examples of radicals) 氵 辶 扌 宀 貝 言 忄 糹 木 口 日"
      }
     }
    ]
   },
   {
    "t": "p",
    "text": {
     "ja": "「にんべん（亻）」と「ひとやね（𠆢）」は「人」の意味を表す部首です。",
     "tr": "Ninben (亻) and hitoyane (𠆢) are radicals that mean \"person.\""
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "「にんべん」と「ひとやね」の漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji with ninben and hitoyane."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)"
         ]
        ],
        "rows": [
         [
          "!!働!!く",
          "!!住!!む",
          "時!!代!!",
          "紹!!介!!",
          "!!信!!じる"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "(1)〜(11)の漢字を使った単語をできるだけたくさん考えよう。",
       "tr": "Think of as many words as you can that use the kanji (1)–(11)."
      },
      "blocks": [
       {
        "t": "p",
        "text": {
         "ja": "(例)　作",
         "tr": "(Example) 作"
        }
       },
       {
        "t": "figure",
        "desc": "A woman in glasses thinks of words with the example kanji 作: her speech bubbles say 作る (to make) and 作文 (composition).",
        "labels": [
         "作る",
         "作文"
        ]
       },
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)",
          "(6)",
          "(7)",
          "(8)",
          "(9)",
          "(10)",
          "(11)"
         ]
        ],
        "rows": [
         [
          "食",
          "今",
          "会",
          "金",
          "例",
          "体",
          "休",
          "仕",
          "借",
          "使",
          "優"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「にんべん」の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji with ninben."
      }
     },
     {
      "t": "table",
      "cols": [
       "auto",
       "auto",
       "auto",
       "1fr"
      ],
      "rows": [
       [
        "①",
        "倍",
        "［二!!{倍|ばい}!!］",
        {
         "en": "double"
        }
       ],
       [
        "②",
        "伺",
        "［!!{伺|うかが}!!う］",
        {
         "en": "to ask/visit [a superior]"
        }
       ],
       [
        "③",
        "億",
        "［一!!{億|おく}!!］",
        {
         "en": "one hundred million"
        }
       ],
       [
        "④",
        "停",
        "［バス!!{停|てい}!!］",
        {
         "en": "bus stop"
        }
       ],
       [
        "⑤",
        "健",
        "［!!{健|けん}!!{康|こう}］",
        {
         "en": "health"
        }
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "k4",
  "kind": "kanji",
  "no": 4,
  "title": "{部首|ぶしゅ}「きへん（木）・き（木）」",
  "lesson": 2,
  "page": 233,
  "blocks": [
   {
    "t": "p",
    "page": 233,
    "text": {
     "ja": "「きへん（木）」と「き（木）」は「木」の意味を表す{部首|ぶしゅ}です。",
     "tr": "Kihen (木) and ki (木) are radicals that mean \"tree.\""
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "「きへん」と「き」の漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji with kihen and ki."
      },
      "blocks": [
       {
        "t": "table",
        "rows": [
         [
          "(1)",
          "二!!枚!!",
          "(2)",
          "目!!標!!",
          "(3)",
          "!!案!!内",
          "(4)",
          "!!横!!"
         ],
         [
          "(5)",
          "性!!格!!",
          "(6)",
          "授!!業!!",
          "(7)",
          "山田!!様!!"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "［　　　］から漢字を{選|えら}んでミニクロスワードを{完成|かんせい}させ、「!!A↓!!」と「!!B→!!」の単語を読んでみよう。",
       "tr": "Choose kanji from the box to complete the mini crosswords, then read the A↓ and B→ words."
      },
      "words": [
       "①果",
       "②楽",
       "③相",
       "④本",
       "⑤校"
      ],
      "blocks": [
       {
        "t": "p",
        "text": {
         "ja": "(例)　!!A↓!!…結!!果!!（けっか）　!!B→!!…!!果!!物（くだもの）",
         "tr": "(Example) A↓: 結果 (kekka, result); B→: 果物 (kudamono, fruit)"
        }
       },
       {
        "t": "p",
        "text": { "ja": "(例)", "tr": "(Example)" }
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "",
          "結",
          ""
         ],
         [
          "!!B→!!",
          "!!果!!",
          "物"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(1)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "",
          "!!A↓!!"
         ]
        ],
        "rows": [
         [
          "",
          "",
          "高"
         ],
         [
          "!!B→!!",
          "学",
          "＿＿"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(2)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "!!B→!!",
          "＿＿",
          "談"
         ],
         [
          "",
          "手",
          ""
         ]
        ]
       },
       {
        "t": "p",
        "text": "(3)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "",
          "音",
          ""
         ],
         [
          "!!B→!!",
          "＿＿",
          "しい"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(4)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "",
          "日",
          ""
         ],
         [
          "!!B→!!",
          "＿＿",
          "当"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「きへん」と「き」の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji with kihen and ki."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "林",
        "［",
        "!!{林|はやし}!!",
        "",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "small woods"
        },
        "",
        ""
       ],
       [
        "②",
        "森",
        "［",
        "!!{森|もり}!!",
        "",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "forest"
        },
        "",
        ""
       ],
       [
        "③",
        "杯",
        "［",
        "三!!{杯|ばい}!!",
        "",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "three cups"
        },
        "",
        ""
       ],
       [
        "④",
        "柔",
        "［",
        "!!{柔|じゅう}!!{道|どう}",
        "!!{柔|やわ}!!らかい",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "judo"
        },
        {
         "en": "soft"
        },
        ""
       ],
       [
        "⑤",
        "植",
        "［",
        "!!{植|う}!!える",
        "!!{植|しょく}!!{物|ぶつ}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "to plant"
        },
        {
         "en": "plant"
        },
        ""
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "k5",
  "kind": "kanji",
  "no": 5,
  "title": "{接|せっ}{頭|とう}{辞|じ}",
  "en": "Prefixes",
  "lesson": 3,
  "page": 234,
  "blocks": [
   {
    "t": "p",
    "page": 234,
    "text": {
     "ja": "「毎日」「毎週」の「毎」はよく単語の最初に使われて、every という意味を表します。\nこのように単語の最初につく漢字を「{接|せっ}{頭|とう}{辞|じ}」と言い、単語を覚える時や単語の意味を{推測|すいそく}する (to guess) 時に役に立ちます。",
     "tr": "The 毎 in 毎日 (every day) and 毎週 (every week) is often used at the beginning of words and means \"every.\" A kanji attached to the beginning of a word like this is called a settōji (prefix), and knowing them helps when you memorize words or guess what a word means."
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "接頭辞の意味を考えて、（　　）に書こう。",
       "tr": "Think about what each prefix means and write it in the parentheses."
      }
     },
     {
      "n": "2.",
      "text": {
       "ja": "a〜cの単語を読んで、意味を考えよう。",
       "tr": "Read words a–c and think about what they mean."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "",
          "",
          "意味",
          ""
         ]
        ],
        "rows": [
         [
          "(例)",
          "新〜",
          "（＝　　　　　）",
          "［a. !!新!!人　b. !!新!!入生　c. !!新!!{品|ぴん}］"
         ]
        ]
       },
       {
        "t": "figure",
        "desc": "A young man points to his speech bubble, which answers the example.",
        "labels": [
         "1. 新＝あたらしい",
         "2. a. しんじん（新しい人）",
         "b. しんにゅうせい（新しく入った学生）",
         "c. しんぴん（新しい物）"
        ]
       },
       {
        "t": "table",
        "rows": [
         [
          "(1)",
          "最〜",
          "（＝　　　　　）",
          "［a. !!最!!初　b. !!最!!高　c. !!最!!悪］"
         ],
         [
          "(2)",
          "全〜",
          "（＝　　　　　）",
          "［a. !!全!!部　b. !!全!!員　c. !!全!!額］"
         ],
         [
          "(3)",
          "予〜",
          "（＝　　　　　）",
          "［a. !!予!!約　b. !!予!!習　c. （天気）!!予!!報］"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "単語の最初につく漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji that attach to the beginning of words."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "無〜（＝無い）",
        "［",
        "!!無!!計画",
        "!!無!!職",
        "!!無!!{糖|とう}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "unplanned"
        },
        {
         "en": "unemployed"
        },
        {
         "en": "sugarless"
        },
        ""
       ],
       [
        "②",
        "不〜（＝〜ない）",
        "［",
        "!!不!!必要",
        "!!不!!{都|つ}{合|ごう}",
        "!!不!!{平|びょう}{等|どう}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "unnecessary"
        },
        {
         "en": "inconvenient"
        },
        {
         "en": "inequality"
        },
        ""
       ],
       [
        "③",
        "好〜（＝いい）",
        "［",
        "!!{好|こう}!!調",
        "!!好!!都合",
        "!!好!!{印|いん}{象|しょう}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "excellent condition"
        },
        {
         "en": "convenient"
        },
        {
         "en": "good impression"
        },
        ""
       ],
       [
        "④",
        "再〜（＝もう一度）",
        "［",
        "!!{再|さい}!!会",
        "!!再!!就職",
        "!!再!!{検|けん}{査|さ}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "reunion"
        },
        {
         "en": "re-employment"
        },
        {
         "en": "re-examination"
        },
        ""
       ],
       [
        "⑤",
        "未〜（＝まだ）",
        "［",
        "!!{未|み}!!{来|らい}",
        "!!未!!婚",
        "!!未!!{熟|じゅく}",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "future"
        },
        {
         "en": "unmarried"
        },
        {
         "en": "immature"
        },
        ""
       ]
      ]
     },
     {
      "t": "p",
      "style": "right",
      "text": {
       "ja": "※新しい漢字：　①無__糖__　②不平__等__　③好__印__象　④__再検__査　⑤未__熟__",
       "tr": "*New kanji: ① 無糖 ② 不平等 ③ 好印象 ④ 再検査 ⑤ 未熟"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "k6",
  "kind": "kanji",
  "no": 6,
  "title": "{接|せつ}{尾|び}{辞|じ}",
  "en": "Suffixes",
  "lesson": 3,
  "page": 235,
  "blocks": [
   {
    "t": "p",
    "page": 235,
    "text": {
     "ja": "「作家」「画家」の「家」は単語の最後について、「人」という意味を表します。\nこのように単語の最後につく漢字を「{接|せつ}{尾|び}{辞|じ}」といい、単語を覚える時や単語の意味を{推測|すいそく}する時に役に立ちます。",
     "tr": "The 家 in 作家 (writer) and 画家 (painter) attaches to the end of words and means \"person.\" A kanji attached to the end of a word like this is called a setsubiji (suffix), and knowing them helps when you memorize words or guess what a word means."
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "接尾辞の意味を考えて、（　　）に書こう。",
       "tr": "Think about what each suffix means and write it in the parentheses."
      }
     },
     {
      "n": "2.",
      "text": {
       "ja": "a〜cの単語を読んで、意味を考えよう。",
       "tr": "Read words a–c and think about what they mean."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "",
          "",
          "意味",
          ""
         ]
        ],
        "rows": [
         [
          "(例)",
          "〜館",
          "（＝　　　　　）",
          "［a. 図書!!館!!　b. 映画!!館!!　c. 美術!!館!!］"
         ]
        ]
       },
       {
        "t": "figure",
        "desc": "A young woman, hand on her cheek, answers the example in her speech bubble.",
        "labels": [
         "1. 館＝建物",
         "2. a. としょかん（本を借りたり、読んだりするところ）",
         "b. えいがかん（映画を見るところ）",
         "c. びじゅつかん（絵などを見るところ）"
        ]
       },
       {
        "t": "table",
        "rows": [
         [
          "(1)",
          "〜員",
          "（＝　　　　　）",
          "［a. 駅!!員!!　b. 会社!!員!!　c. 店!!員!!］"
         ],
         [
          "(2)",
          "〜料",
          "（＝　　　　　）",
          "［a. 授業!!料!!　b. {給|きゅう}!!料!!　c. 送!!料!!］"
         ],
         [
          "(3)",
          "〜屋",
          "（＝　　　　　）",
          "［a. 本!!屋!!　b. 花!!屋!!　c. 肉!!屋!!］"
         ],
         [
          "(4)",
          "〜性",
          "（＝　　　　　）",
          "［a. 将来!!性!!　b. 安全!!性!!　c. {多|た}{様|よう}!!性!!］"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "単語の最後につく漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji that attach to the end of words."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "〜者（＝人）",
        "［",
        "記!!者!!",
        "科学!!者!!",
        "{筆|ひっ}!!者!!",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "reporter"
        },
        {
         "en": "scientist"
        },
        {
         "en": "author"
        },
        ""
       ],
       [
        "②",
        "〜場（＝場所）",
        "［",
        "キャンプ!!場!!",
        "運動!!場!!",
        "{駐|ちゅう}{車|しゃ}!!場!!",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "campsite"
        },
        {
         "en": "athletic field"
        },
        {
         "en": "parking lot"
        },
        ""
       ],
       [
        "③",
        "〜書（＝本）",
        "［",
        "教科!!書!!",
        "{参|さん}{考|こう}!!書!!",
        "{辞|じ}!!書!!",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "textbook"
        },
        {
         "en": "study-aid book"
        },
        {
         "en": "dictionary"
        },
        ""
       ],
       [
        "④",
        "〜化（＝〜になる）",
        "［",
        "国際!!化!!",
        "少子!!化!!",
        "{書|しょ}{籍|せき}!!化!!",
        "］"
       ],
       [
        "",
        "",
        "",
        {
         "en": "internationalization"
        },
        {
         "en": "declining birthrate"
        },
        {
         "en": "turning into a book"
        },
        ""
       ]
      ]
     },
     {
      "t": "p",
      "style": "right",
      "text": {
       "ja": "※新しい漢字：　①__筆__者　②__駐__車場　③__辞__書　④書__籍__化",
       "tr": "*New kanji: ① 筆者 ② 駐車場 ③ 辞書 ④ 書籍化"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "k7",
  "kind": "kanji",
  "no": 7,
  "title": "{部首|ぶしゅ}「くちへん（口）・くち（口）」",
  "lesson": 4,
  "page": 236,
  "blocks": [
   {
    "t": "box",
    "style": "gray",
    "page": 236,
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「{部首|ぶしゅ}」とは、いろいろな漢字に使われているパーツです。部首にはそれぞれ意味があります。",
       "tr": "Radicals (bushu) are parts used in many different kanji. Each radical has its own meaning."
      }
     },
     {
      "t": "p",
      "text": {
       "ja": "（部首の例）　氵　辶　扌　宀　貝　言　忄　糹　木　口　日",
       "tr": "(Examples of radicals) 氵 辶 扌 宀 貝 言 忄 糹 木 口 日"
      }
     }
    ]
   },
   {
    "t": "p",
    "text": {
     "ja": "「くちへん（口）」と「くち（口）」は「口」の意味を表す部首です。",
     "tr": "Kuchihen (口) and kuchi (口) are radicals that mean \"mouth.\""
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "「くちへん」と「くち」の漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji with kuchihen and kuchi."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)"
         ]
        ],
        "rows": [
         [
          "!!右!!",
          "!!同!!じ",
          "作!!品!!",
          "!!古!!い",
          "!!吹!!く"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "(1)〜(10)の漢字を使った単語をできるだけたくさん考えよう。",
       "tr": "Think of as many words as you can that use the kanji (1)–(10)."
      },
      "blocks": [
       {
        "t": "p",
        "text": {
         "ja": "(例)　口",
         "tr": "(Example) 口"
        }
       },
       {
        "t": "figure",
        "desc": "A young man raises his fist, thinking of words with the example kanji 口: his speech bubbles say 入口 (entrance) and 出口 (exit).",
        "labels": [
         "入口",
         "出口"
        ]
       },
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)",
          "(6)",
          "(7)",
          "(8)",
          "(9)",
          "(10)"
         ]
        ],
        "rows": [
         [
          "名",
          "員",
          "味",
          "問",
          "台",
          "古",
          "和",
          "合",
          "同",
          "品"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「くちへん」と「くち」の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji with kuchihen and kuchi."
      }
     },
     {
      "t": "table",
      "cols": [
       "auto",
       "auto",
       "auto",
       "1fr"
      ],
      "rows": [
       [
        "①",
        "含",
        "［!!{含|ふく}!!む］",
        {
         "en": "to include"
        }
       ],
       [
        "②",
        "告",
        "［!!{告|こく}!!{白|はく}］",
        {
         "en": "confession"
        }
       ],
       [
        "③",
        "命",
        "［!!{命|いのち}!!］",
        {
         "en": "life"
        }
       ],
       [
        "④",
        "叫",
        "［!!{叫|さけ}!!ぶ］",
        {
         "en": "to shout"
        }
       ],
       [
        "⑤",
        "喫",
        "［!!{喫|きっ}!!{茶|さ}店］",
        {
         "en": "coffee shop"
        }
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "k8",
  "kind": "kanji",
  "no": 8,
  "title": "{部首|ぶしゅ}「ひへん（日）・ひ（日）」",
  "lesson": 4,
  "page": 237,
  "blocks": [
   {
    "t": "p",
    "page": 237,
    "text": {
     "ja": "「ひへん（日）」と「ひ（日）」は「日」の意味を表す{部首|ぶしゅ}です。",
     "tr": "Hihen (日) and hi (日) are radicals that mean \"sun\" or \"day.\""
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "「ひへん」と「ひ」の漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji with hihen and hi."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)"
         ]
        ],
        "rows": [
         [
          "!!映!!画館",
          "!!昔!!",
          "!!春!!",
          "!!暑!!い",
          "!!普!!通"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "［　　　］から漢字を選んでミニクロスワードを{完成|かんせい}させ、「!!A↓!!」と「!!B→!!」の単語を読んでみよう。",
       "tr": "Choose kanji from the box to complete the mini crosswords, then read the A↓ and B→ words."
      },
      "words": [
       "①時",
       "②明",
       "③早",
       "④書",
       "⑤昼"
      ],
      "blocks": [
       {
        "t": "p",
        "text": "(1)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "",
          "図",
          ""
         ],
         [
          "!!B→!!",
          "＿＿",
          "く"
         ],
         [
          "",
          "館",
          ""
         ]
        ]
       },
       {
        "t": "p",
        "text": "(2)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "!!B→!!",
          "＿＿",
          "食"
         ],
         [
          "",
          "休",
          ""
         ],
         [
          "",
          "み",
          ""
         ]
        ]
       },
       {
        "t": "p",
        "text": "(3)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "!!B→!!",
          "＿＿",
          "日"
         ],
         [
          "",
          "る",
          ""
         ],
         [
          "",
          "い",
          ""
         ]
        ]
       },
       {
        "t": "p",
        "text": "(4)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "",
          "四",
          ""
         ],
         [
          "!!B→!!",
          "＿＿",
          "々"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(5)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "!!B→!!",
          "＿＿",
          "い"
         ],
         [
          "",
          "朝",
          ""
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「ひへん」と「ひ」の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji with hihen and hi."
      }
     },
     {
      "t": "table",
      "cols": [
       "auto",
       "auto",
       "auto",
       "1fr"
      ],
      "rows": [
       [
        "①",
        "晴",
        "［!!{晴|は}!!れ］",
        {
         "en": "fine weather"
        }
       ],
       [
        "②",
        "曇",
        "［!!{曇|くも}!!り］",
        {
         "en": "cloudiness"
        }
       ],
       [
        "③",
        "星",
        "［!!{星|ほし}!!］",
        {
         "en": "star"
        }
       ],
       [
        "④",
        "暖",
        "［!!{暖|あたた}!!かい］",
        {
         "en": "warm"
        }
       ],
       [
        "⑤",
        "替",
        "［{両|りょう}!!{替|がえ}!!］",
        {
         "en": "currency exchange"
        }
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "k9",
  "kind": "kanji",
  "no": 9,
  "title": "{反対|はんたい}{語|ご}",
  "en": "Antonyms",
  "lesson": 5,
  "page": 238,
  "blocks": [
   {
    "t": "p",
    "page": 238,
    "text": {
     "ja": "「高い」と「安い」のように{反対|はんたい}の意味を持つ言葉を「反対語」と言います。\n反対語のペアを見てみましょう。",
     "tr": "Words with opposite meanings, like 高い (expensive) and 安い (cheap), are called hantaigo (antonyms). Let's look at some pairs of antonyms."
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "(1)〜(7)と反対の意味の単語をb〜hから選んでペアにしよう。",
       "tr": "Choose the word from b–h with the opposite meaning of each of (1)–(7) to make pairs."
      }
     },
     {
      "n": "2.",
      "text": {
       "ja": "それぞれのペアを読んでみよう。",
       "tr": "Read each pair."
      },
      "blocks": [
       {
        "t": "table",
        "rows": [
         [
          "(例)",
          "高い",
          "●!!━━━━!!●",
          "a.",
          "安い"
         ],
         [
          "(1)",
          "熱い",
          "●　　　　●",
          "b.",
          "寒い"
         ],
         [
          "(2)",
          "長い",
          "●　　　　●",
          "c.",
          "短い"
         ],
         [
          "(3)",
          "早い",
          "●　　　　●",
          "d.",
          "冷たい"
         ],
         [
          "(4)",
          "強い",
          "●　　　　●",
          "e.",
          "借りる"
         ],
         [
          "(5)",
          "暑い",
          "●　　　　●",
          "f.",
          "買う"
         ],
         [
          "(6)",
          "売る",
          "●　　　　●",
          "g.",
          "遅い"
         ],
         [
          "(7)",
          "貸す",
          "●　　　　●",
          "h.",
          "弱い"
         ]
        ]
       },
       {
        "t": "figure",
        "desc": "A young man raises a finger; his speech bubble answers the example: 高い is joined to a. 安い by a pink line, then the readings.",
        "labels": [
         "1. 高い !!──!! a. 安い",
         "2. たかい／やすい"
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "{反対|はんたい}{語|ご}をもっと勉強しよう。",
       "tr": "Let's study more antonyms."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "増える",
        "",
        "↔",
        "{減|へ}る",
        {
         "en": "to decrease"
        }
       ],
       [
        "②",
        "結婚",
        "",
        "↔",
        "{離|り}婚",
        {
         "en": "divorce"
        }
       ],
       [
        "③",
        "{具|ぐ}{体|たい}的",
        {
         "en": "concrete"
        },
        "↔",
        "{抽|ちゅう}{象|しょう}的",
        {
         "en": "abstract"
        }
       ],
       [
        "④",
        "{冷|れい}{房|ぼう}",
        {
         "en": "air conditioning"
        },
        "↔",
        "{暖|だん}房",
        {
         "en": "heating"
        }
       ]
      ]
     },
     {
      "t": "p",
      "style": "right",
      "text": {
       "ja": "※新しい漢字：　①__減__る　②__離__婚　③__抽__象的　④暖__房__",
       "tr": "*New kanji: ① 減る ② 離婚 ③ 抽象的 ④ 暖房"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "k10",
  "kind": "kanji",
  "no": 10,
  "title": "{同音|どうおん}{異|い}{義|ぎ}{語|ご}",
  "en": "Homonyms",
  "lesson": 5,
  "page": 239,
  "blocks": [
   {
    "t": "p",
    "page": 239,
    "text": {
     "ja": "「紙」と「髪」は読み方が同じですが、意味も漢字もまったく違います。このような単語を「{同音|どうおん}{異|い}{義|ぎ}{語|ご}」と言います。漢字を書く時に間違えないように気をつけましょう。",
     "tr": "紙 (paper) and 髪 (hair) are read the same way, but their meanings and kanji are completely different. Words like these are called dōon igigo (homonyms). Be careful not to mix them up when you write kanji."
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "aとbの単語を読んでみよう。",
       "tr": "Read words a and b."
      }
     },
     {
      "n": "2.",
      "text": {
       "ja": "意味や使い方の違いを考えてみよう。",
       "tr": "Think about how they differ in meaning and use."
      },
      "blocks": [
       {
        "t": "table",
        "rows": [
         [
          "(例)",
          "a. 化学",
          "b. 科学"
         ]
        ]
       },
       {
        "t": "figure",
        "desc": "A young man answers the example in his speech bubble: the reading, then the meanings of a and b.",
        "labels": [
         "1. かがく",
         "2. a. chemistry　b. science"
        ]
       },
       {
        "t": "table",
        "rows": [
         [
          "(1)",
          "a. 物",
          "b. 者"
         ],
         [
          "(2)",
          "a. 三課",
          "b. 参加"
         ],
         [
          "(3)",
          "a. 量",
          "b. 寮"
         ],
         [
          "(4)",
          "a. 自信",
          "b. 自身"
         ],
         [
          "(5)",
          "a. 暖かい",
          "b. 温かい"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "同じ読み方の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji that are read the same way."
      }
     },
     {
      "t": "table",
      "rows": [
       [
        "①",
        "とる：",
        "［",
        "取る",
        {
         "en": "to take"
        },
        "撮る",
        {
         "en": "to take pictures"
        },
        "］"
       ],
       [
        "②",
        "なく：",
        "［",
        "泣く",
        {
         "en": "to cry"
        },
        "鳴く",
        {
         "en": "[an animal] makes a sound"
        },
        "］"
       ],
       [
        "③",
        "かわ：",
        "［",
        "皮",
        {
         "en": "skin"
        },
        "革",
        {
         "en": "leather"
        },
        "］"
       ],
       [
        "④",
        "せいか：",
        "［",
        "成果",
        {
         "en": "achievement"
        },
        "聖歌",
        {
         "en": "sacred song"
        },
        "］"
       ],
       [
        "⑤",
        "こうい：",
        "［",
        "好意",
        {
         "en": "affection"
        },
        "行為",
        {
         "en": "act"
        },
        "］"
       ]
      ]
     },
     {
      "t": "p",
      "style": "right",
      "text": {
       "ja": "※新しい漢字：　①__撮__る　②__泣__く・__鳴__く　③__革__　④__聖__歌　⑤行__為__",
       "tr": "*New kanji: ① 撮る ② 泣く・鳴く ③ 革 ④ 聖歌 ⑤ 行為"
      }
     }
    ]
   }
  ]
 },
 {
  "id": "k11",
  "kind": "kanji",
  "no": 11,
  "title": "{部首|ぶしゅ}「しんにょう（辶）」",
  "lesson": 6,
  "page": 240,
  "blocks": [
   {
    "t": "box",
    "style": "gray",
    "page": 240,
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「{部首|ぶしゅ}」とは、いろいろな漢字に使われているパーツです。部首にはそれぞれ意味があります。",
       "tr": "Radicals (bushu) are parts used in many different kanji. Each radical has its own meaning."
      }
     },
     {
      "t": "p",
      "text": {
       "ja": "（部首の例）　氵　辶　扌　宀　貝　言　忄　糹　木　口　日",
       "tr": "(Examples of radicals) 氵 辶 扌 宀 貝 言 忄 糹 木 口 日"
      }
     }
    ]
   },
   {
    "t": "p",
    "text": {
     "ja": "「しんにょう（辶）」は「行く」「進む」の意味を表す部首です。",
     "tr": "Shinnyō (辶) is a radical that means \"go\" or \"advance.\""
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "「しんにょう」の漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji with shinnyō."
      },
      "blocks": [
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)"
         ]
        ],
        "rows": [
         [
          "!!道!!",
          "!!連!!れていく",
          "!!過!!ごす",
          "友!!達!!",
          "!!違!!う"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "(1)〜(10)の漢字を使った単語をできるだけたくさん考えよう。",
       "tr": "Think of as many words as you can that use the kanji (1)–(10)."
      },
      "blocks": [
       {
        "t": "p",
        "text": {
         "ja": "(例)　道",
         "tr": "(Example) 道"
        }
       },
       {
        "t": "figure",
        "desc": "A woman with long wavy hair raises a finger, thinking of words with the example kanji 道: her speech bubbles say 道 (road) and 北海道 (Hokkaido).",
        "labels": [
         "道",
         "北海道"
        ]
       },
       {
        "t": "table",
        "head": [
         [
          "(1)",
          "(2)",
          "(3)",
          "(4)",
          "(5)",
          "(6)",
          "(7)",
          "(8)",
          "(9)",
          "(10)"
         ]
        ],
        "rows": [
         [
          "運",
          "週",
          "返",
          "通",
          "込",
          "近",
          "遠",
          "選",
          "遅",
          "送"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「しんにょう」の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji with shinnyō."
      }
     },
     {
      "t": "table",
      "cols": [
       "auto",
       "auto",
       "auto",
       "1fr"
      ],
      "rows": [
       [
        "①",
        "追",
        "［!!{追|お}!!う］",
        {
         "en": "to chase"
        }
       ],
       [
        "②",
        "逃",
        "［!!{逃|に}!!げる］",
        {
         "en": "to run away"
        }
       ],
       [
        "③",
        "途",
        "［!!{途|と}!!{中|ちゅう}］",
        {
         "en": "on the way"
        }
       ],
       [
        "④",
        "退",
        "［!!{退|たい}!!{学|がく}］",
        {
         "en": "leaving school"
        }
       ],
       [
        "⑤",
        "適",
        "［!!{適|てき}!!{当|とう}な］",
        {
         "en": "appropriate"
        }
       ]
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "k12",
  "kind": "kanji",
  "no": 12,
  "title": "{部首|ぶしゅ}「ごんべん（訁）」",
  "lesson": 6,
  "page": 241,
  "blocks": [
   {
    "t": "p",
    "page": 241,
    "text": {
     "ja": "「ごんべん（訁）」は「言う」や「言葉」の意味を表す{部首|ぶしゅ}です。",
     "tr": "Gonben (訁) is a radical that means \"say\" or \"word.\""
    }
   },
   {
    "t": "qs",
    "items": [
     {
      "n": "1.",
      "text": {
       "ja": "「ごんべん」の漢字を使った単語を読んでみよう。",
       "tr": "Read these words that use kanji with gonben."
      },
      "blocks": [
       {
        "t": "table",
        "rows": [
         [
          "(1)",
          "日!!記!!",
          "(2)",
          "外国!!語!!",
          "(3)",
          "!!試!!験",
          "(4)",
          "!!説!!明"
         ],
         [
          "(5)",
          "!!計!!画",
          "(6)",
          "!!誘!!う",
          "(7)",
          "!!講!!演",
          "(8)",
          "第一!!課!!"
         ]
        ]
       }
      ]
     },
     {
      "n": "2.",
      "text": {
       "ja": "［　　　］から漢字を選んでミニクロスワードを完成させ、「!!A↓!!」と「!!B→!!」の単語を読んでみよう。",
       "tr": "Choose kanji from the box to complete the mini crosswords, then read the A↓ and B→ words."
      },
      "words": [
       "①訪",
       "②読",
       "③調",
       "④談",
       "⑤訳"
      ],
      "blocks": [
       {
        "t": "p",
        "text": "(1)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "",
          "!!A↓!!"
         ]
        ],
        "rows": [
         [
          "",
          "",
          "座"
         ],
         [
          "!!B→!!",
          "相",
          "＿＿"
         ],
         [
          "",
          "",
          "会"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(2)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "",
          "!!A↓!!"
         ]
        ],
        "rows": [
         [
          "",
          "",
          "申し"
         ],
         [
          "!!B→!!",
          "通",
          "＿＿"
         ],
         [
          "",
          "",
          "ない"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(3)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "!!B→!!",
          "＿＿",
          "問"
         ],
         [
          "",
          "れ",
          ""
         ],
         [
          "",
          "る",
          ""
         ]
        ]
       },
       {
        "t": "p",
        "text": "(4)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "",
          "体",
          ""
         ],
         [
          "!!B→!!",
          "＿＿",
          "査"
         ]
        ]
       },
       {
        "t": "p",
        "text": "(5)"
       },
       {
        "t": "table",
        "head": [
         [
          "",
          "!!A↓!!",
          ""
         ]
        ],
        "rows": [
         [
          "!!B→!!",
          "＿＿",
          "む"
         ],
         [
          "",
          "書",
          ""
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "t": "box",
    "style": "challenge",
    "title": {
     "ja": "チャレンジ！",
     "tr": "Challenge!"
    },
    "blocks": [
     {
      "t": "p",
      "text": {
       "ja": "「ごんべん」の漢字をもっと勉強しよう。",
       "tr": "Let's study more kanji with gonben."
      }
     },
     {
      "t": "table",
      "cols": [
       "auto",
       "auto",
       "auto",
       "1fr"
      ],
      "rows": [
       [
        "①",
        "許",
        "［!!{許|ゆる}!!す］",
        {
         "en": "to forgive; to allow"
        }
       ],
       [
        "②",
        "訓",
        "［!!{訓|くん}!!{練|れん}］",
        {
         "en": "training; drill"
        }
       ],
       [
        "③",
        "詞",
        "［{歌|か}!!{詞|し}!!］",
        {
         "en": "lyrics"
        }
       ],
       [
        "④",
        "誤",
        "［!!{誤|ご}!!{解|かい}］",
        {
         "en": "misunderstanding"
        }
       ],
       [
        "⑤",
        "警",
        "［!!{警|けい}!!{察|さつ}］",
        {
         "en": "police"
        }
       ]
      ]
     }
    ]
   }
  ]
 }
]);
