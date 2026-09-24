N2F({
  ch: 2,
  part: 0,
  head: {
    genre: { ja: "スピーチをする", en: "Giving a Speech" },
    title: { ja: "{転任|てんにん}のあいさつ", en: "Addressing Co-workers after Receiving a Transfer Order" },
    canDo: [
      { ja: "{改|あらた}まった形で思い出{話|ばなし}などをして、お別れのスピーチができる。", en: "Give a farewell speech with memorable stories and the like in a formal setting." },
    ],
  },
  label: "(1)",
  sample: {
    kind: "speech",
    lines: [
      { ja: "皆様、本日は、{私|わたくし}のためにこのような会を開いていただき、ありがとうございます。", en: "Everyone, thank you for holding this gathering for me today." },
      { ja: "入社して**{以来|いらい}**、この{営業部|えいぎょうぶ}において、部長**をはじめ**{先輩方|せんぱいがた}のご{指導|しどう}**のもとで**、{営業|えいぎょう}について{一|いち}から学ぶことができ、たいへん{幸運|こううん}でした。", en: "Ever since I joined the company, I have been very fortunate to learn sales from scratch here in the Sales Department, under the guidance of the department manager and all my seniors." },
      { ja: "仕事の進め方**はもとより**、{取引先|とりひきさき}との付き合い方など本当に{様々|さまざま}なことを{教|おし}えていただき、心から{感謝|かんしゃ}いたしております。", en: "You taught me so many things — how to go about the work, of course, and also how to deal with our clients — and I am grateful from the bottom of my heart." },
      { ja: "特に部長の、「人は{失敗|しっぱい}から学ぶ**ものだ**」という言葉は忘れられません。", en: "In particular, I will never forget the manager's words: “People learn from their mistakes.”" },
      { ja: "仕事をする**{上|うえ}で**大切なことを、まだまだたくさん学びたかったのですが、このたび{大阪支社勤務|おおさかししゃきんむ}を{命|めい}じられ、{残念|ざんねん}**ながら**この{職場|しょくば}を{離|はな}れることになりました。", en: "I wanted to learn many more of the things that matter in doing this job, but I have now been ordered to work at the Osaka branch, and unfortunately I will be leaving this workplace." },
    ],
  },
  points: [
    // ───────── 9
    {
      no: 9,
      pattern: "〜{以来|いらい}",
      phrase: "入社して**{以来|いらい}**",
      stars: 3,
      marks: [],
      usage: {
        ja: "「〜{以来|いらい}」は、「〜」のときから今までずっと同じ{状態|じょうたい}が続いているときに使う。",
        en: "Use \"〜{以来|いらい}\" when a condition has continued from \"〜\" until now.",
      },
      forms: ["[V-て] + {以来|いらい}", "[N] + {以来|いらい}"],
      examples: [
        { ja: "母が入院して{以来|いらい}、{家事|かじ}はすべて私がしています。", en: "Ever since my mother went into hospital, I have been doing all the housework." },
        { ja: "3年前の夏休みに帰国して{以来|いらい}、長い間家族に会っていません。", en: "Since I went home during the summer vacation three years ago, I haven't seen my family for a long time." },
        { ja: "こちらに{引|ひ}っ{越|こ}して{以来|いらい}、{散歩|さんぽ}を{日課|にっか}にしているんです。", en: "Ever since I moved here, I've made a walk part of my daily routine." },
        { ja: "{山野|やまの}君とは卒業{以来|いらい}、まったく{連絡|れんらく}が取れない。", en: "I haven't been able to get in touch with Yamano at all since graduation." },
        { ja: "彼は2000年4月{以来|いらい}、1日も休まず{遺伝子|いでんし}の研究を続けている。", en: "Since April 2000 he has continued his genetic research without taking a single day off." },
      ],
      deepDive:
        "**〜以来** means *ever since ~*. The kanji say it all: 以 (from) + 来 (coming up to now). It marks a starting point in the past and says that **a state or habit has continued from then until the present**.\n\n" +
        "Connection:\n" +
        "- **V-て + 以来**: 入社して以来, 日本に来て以来 (never ✗来た以来).\n" +
        "- **N + 以来**: event nouns and dates — 卒業以来, 結婚以来, 創業以来, 2000年4月以来, 先日以来.\n" +
        "- It can also stand alone: **それ以来** *since then*: 一度彼に会った。それ以来、連絡はない.\n\n" +
        "The key restriction: the second half must describe **something ongoing** — 〜ている, 〜ていない, ずっと〜, 一度も〜ない, a habit, or a change that keeps going (増え続けている). A single one-off event is wrong: ✗日本に来て以来、富士山に登った. Use **〜てから** for that: 日本に来てから、富士山に登った.\n\n" +
        "Also, 以来 implies a fairly long, significant stretch of time. ✗今朝起きて以来 sounds odd; say 今朝起きてから.\n\n" +
        "- 〜てから (N4): neutral *after/since*; can be followed by a single event.\n" +
        "- 〜以来: *ever since*; the result is a continuing state; slightly formal, very common in speeches and writing (入社以来…, 創業以来…).\n" +
        "- 〜以来の + N works with an event: 創業以来の危機 *the biggest crisis since the company was founded*. With a length of time use 〜来 instead: 10年来の友人 *a friend of ten years* (✗10年以来の友人).\n\n" +
        "JLPT tip: when 以来 appears in a question, check the ending of the sentence. The correct option almost always ends in 〜ている / 〜ていない / 〜続けている.",
      see: [],
      index: ["V-て以来", "N以来", "それ以来"],
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the option that correctly completes each sentence." },
          items: [
            { q: "1990年に{来日|らいにち}して{以来|いらい}、（　）。", options: ["ずっと{京都|きょうと}に住んでいます", "2000年に帰国しました"], answer: 0, en: "Since coming to Japan in 1990, I have lived in Kyoto the whole time.", why: { en: "以来 needs a continuing state afterwards; “returned home in 2000” is a one-off event." } },
            { q: "彼は3年前にプロの{選手|せんしゅ}になって{以来|いらい}、（　）。", options: ["1{億|おく}円の{契約金|けいやくきん}をもらった", "今まで以上に食事に気を{遣|つか}うようになった"], answer: 1, en: "Since becoming a professional player three years ago, he has become more careful about his diet than ever." },
            { q: "この村に工場ができて{以来|いらい}、（　）。", options: ["{事故|じこ}が起きた", "人口が増え続けている"], answer: 1, en: "Ever since a factory was built in this village, the population has kept on growing." },
            { q: "子どものとき川に落ちて{以来|いらい}、（　）。", options: ["水が{怖|こわ}くて今も泳げない", "大けがをした"], answer: 0, en: "Ever since I fell into a river as a child, I've been afraid of water and still can't swim." },
          ],
        },
      ],
    },
    // ───────── 10
    {
      no: 10,
      pattern: "〜をはじめ",
      phrase: "部長**をはじめ**",
      stars: 3,
      marks: [],
      usage: {
        ja: "「〜をはじめ」は、{代表的|だいひょうてき}な例を出して、「〜だけでなくほかにもたくさん」と言いたいときに使う。",
        en: "Use \"〜をはじめ\" when you want to say \"not just 〜, but many others\" by giving a typical examples.",
      },
      forms: ["[N] + をはじめ", "[N] + をはじめとして", "[N] + をはじめとする + [N]"],
      examples: [
        { ja: "日本には{富士山|ふじさん}をはじめ、たくさんの美しい山がある。", en: "Japan has many beautiful mountains, Mt. Fuji first among them." },
        { ja: "アジアには中国をはじめとして、約40の{国々|くにぐに}がある。", en: "In Asia there are about forty countries, starting with China." },
        { ja: "{首相|しゅしょう}をはじめ、多くの{政治家|せいじか}が{大統領|だいとうりょう}の{歓迎会|かんげいかい}に{出席|しゅっせき}した。", en: "Many politicians, including the prime minister, attended the president's welcome reception." },
        { ja: "{健康|けんこう}のためには{食生活|しょくせいかつ}をはじめとする生活{習慣|しゅうかん}の{見直|みなお}しが{必要|ひつよう}です。", en: "For your health, you need to review your lifestyle habits, starting with your diet." },
      ],
      deepDive:
        "**〜をはじめ** comes from 始める *to begin*: literally *beginning with ~*. You name the **most typical, most important or highest-ranking member** of a group, and the rest of the sentence tells us there are many more: 富士山をはじめ、たくさんの美しい山.\n\n" +
        "Forms:\n" +
        "- **をはじめ、** / **をはじめとして、** link clauses (the second is a little more formal).\n" +
        "- **をはじめとする + N** modifies a noun: 食生活をはじめとする生活習慣 *lifestyle habits such as diet*.\n\n" +
        "Typical partners in the second half: 多くの〜, さまざまな〜, 〜など, 〜たち, 各〜, 一同. That's why it is a favorite in **speeches and formal thank-yous**: 部長をはじめ、皆様には大変お世話になりました — you mention the top person first out of respect, then everyone else.\n\n" +
        "Pitfalls:\n" +
        "- The item must belong to the group that follows. ✗セーターをはじめ、多くの家具 is wrong because a sweater isn't furniture.\n" +
        "- Choose a representative item, not an odd one: 日本料理には寿司をはじめ… ✓, ✗日本料理には漬物の一種をはじめ… sounds strange.\n" +
        "- It is not used for a single thing alone; there must be *others*.\n\n" +
        "Compare:\n" +
        "- **〜はもとより** (#12): *not only A (obviously) but also B* — A and B are two separate things set side by side.\n" +
        "- **〜を中心に** (#16): *centered on ~* — describes a core with things around it, not a list.\n" +
        "- **〜に限らず** (#72): *not limited to ~*.",
      see: [12, 16, 72],
      index: ["Nをはじめ", "Nをはじめとして", "Nをはじめとする"],
      practice: [
        {
          type: "match",
          labels: "abc",
          prompt: { ja: "", en: "Match each beginning with the ending that completes it. (Item 3 is illustrated with a woman surrounded by a TV, laptop, microwave, fridge and washing machine.)" },
          left: [
            "この映画専門学校は、校長をはじめ、",
            "このスパイスはタイをはじめ、",
            "一人{暮|ぐ}らしには{電子|でんし}レンジをはじめ、",
            "ジャケットをはじめ、",
          ],
          right: [
            "この春の{新作|しんさく}が{入荷|にゅうか}いたしましたので、ぜひご来店ください。",
            "{様々|さまざま}な電気{製品|せいひん}が{必要|ひつよう}だ。",
            "多くの{著名人|ちょめいじん}が{講師|こうし}をしている。",
            "{東南|とうなん}アジアなどで広く使われている。",
          ],
          answer: [2, 3, 1, 0],
          en: [
            "At this film school, many well-known people, starting with the principal, work as instructors.",
            "This spice is widely used in Thailand and elsewhere in Southeast Asia.",
            "When living alone, you need all sorts of electrical appliances, a microwave first of all.",
            "This spring's new items, jackets among them, have arrived, so please do come and visit our store.",
          ],
        },
      ],
    },
    // ───────── 11
    {
      no: 11,
      pattern: "〜のもとで",
      phrase: "{先輩方|せんぱいがた}のご{指導|しどう}**のもとで**",
      stars: 2,
      marks: ["formal"],
      usage: {
        ja: "「{教授|きょうじゅ}のもと」のように、「何か大きい{影響力|えいきょうりょく}のあるものの下で」というときや「{協力|きょうりょく}のもと」のように、「その{条件|じょうけん}や{状況|じょうきょう}の中で」と言いたいときに使う。",
        en: "Use this expression when you want to say that something is \"under someone with some great influence\" as in \"{教授|きょうじゅ}のもと\", or when you want to say that something is \"under certain conditions or a situation\" as in \"{協力|きょうりょく}のもと\".",
      },
      forms: ["[N] + のもと（で／に）"],
      examples: [
        { ja: "最近は明るい太陽のもとで、元気に遊ぶ子どもが少なくなった。", en: "These days there are fewer children playing energetically under the bright sun." },
        { ja: "彼はすばらしい{自然環境|しぜんかんきょう}のもとでこの作品を作り上げた。", en: "He created this work in a wonderful natural environment." },
        { ja: "{子育|こそだ}ては{夫婦|ふうふ}の{協力|きょうりょく}のもとで{行|おこな}われるべきだ。", en: "Child-rearing should be done with husband and wife cooperating." },
        { ja: "{合理化|ごうりか}の{名|な}のもとに{多数|たすう}の{従業員|じゅうぎょういん}が{解雇|かいこ}された。", en: "A large number of employees were dismissed in the name of rationalization." },
      ],
      deepDive:
        "**〜のもとで** uses もと (下/元 *beneath, at the base of*). It is a formal, written-style way to say *under*.\n\n" +
        "Three kinds of noun come before it:\n" +
        "- **A person with authority or influence**: 教授のもとで研究する, 名監督のもとで練習する, 祖父母のもとで育つ. You are protected, guided or controlled by them.\n" +
        "- **A condition, agreement or principle**: 協力のもとで, 同意のもとに, 監督（supervision）のもとで, 法律のもとで, 〜という条件のもとで.\n" +
        "- **Something physical overhead** (poetic): 太陽のもとで, 青空のもとで, 星空のもとで.\n\n" +
        "Variations: **のもとに** is even more written (契約のもとに); **のもと、** with just a comma appears in news and headlines. The set phrase **〜の名のもとに** *in the name of ~* is often used critically: 合理化の名のもとに多数の従業員が解雇された.\n\n" +
        "Pitfalls:\n" +
        "- For a concrete location below something, use の下（した）: 机の下に猫がいる, not ✗机のもとで. もと is abstract.\n" +
        "- Don't confuse with **〜をもとに** *based on ~* (実話をもとにした映画). のもとで = *under*; をもとに = *using as a basis*.\n\n" +
        "In farewell speeches and thank-you letters, 〜様のご指導のもとで is a standard way to show gratitude to superiors: it frames your success as happening *under their guidance*.",
      see: [],
      index: ["Nのもとで", "Nのもとに", "Nのもと", "〜の名のもとに"],
      practice: [
        {
          type: "fill",
          prompt: { ja: "", en: "Choose the word from the box that fills each blank." },
          bank: ["両親の{同意|どうい}", "{祖父母|そふぼ}", "{協力|きょうりょく}", "社長"],
          items: [
            { q: "彼は両親と{離|はな}れ、＿＿のもとで、育てられた。", answer: "{祖父母|そふぼ}", en: "He was separated from his parents and brought up by his grandparents." },
            { q: "みきは16歳だが、＿＿のもとに{結婚|けっこん}が{認|みと}められた。", answer: "両親の{同意|どうい}", en: "Miki is 16, but with her parents' consent she was allowed to marry." },
            { q: "私はこの会社で、{尊敬|そんけい}する＿＿のもとで40年間働いてきた。", answer: "社長", en: "I have worked at this company for forty years under a president I respect." },
            { q: "{海岸|かいがん}の{清掃活動|せいそうかつどう}は多くの市民の＿＿のもとに{行|おこな}われている。", answer: "{協力|きょうりょく}", en: "The beach clean-up is carried out with the cooperation of many citizens." },
          ],
        },
      ],
    },
    // ───────── 12
    {
      no: 12,
      pattern: "〜はもとより",
      phrase: "仕事の進め方**はもとより**",
      stars: 2,
      marks: ["formal"],
      usage: {
        ja: "「〜はもとより」は、スピーチ・プレゼンテーションなどで「〜はもちろん、〜だけでなくそのほかにも」と説明したいときに使う。",
        en: "Use \"〜はもとより\" when you want to explain in a speech, presentation or the like that \"〜\" is obvious, or that it is not only \"〜\" but also something more.",
      },
      forms: ["[N] + はもとより"],
      examples: [
        { ja: "この{温泉|おんせん}は、日本人はもとより、外国人にもたいへん人気があります。", en: "This hot spring is very popular not only with Japanese people, of course, but with foreigners too." },
        { ja: "子どもの{成長|せいちょう}のためには、食事はもとより、{睡眠|すいみん}や運動にも気をつけてください。", en: "For your child's growth, pay attention not only to meals, obviously, but also to sleep and exercise." },
        { ja: "{優秀|ゆうしゅう}な{人材|じんざい}の{確保|かくほ}は{中小企業|ちゅうしょうきぎょう}はもとより、{大企業|だいきぎょう}にとっても大きな問題です。", en: "Securing talented staff is a major issue not only for small and medium-sized businesses but for large companies as well." },
        { ja: "{犯罪防止|はんざいぼうし}はもとより、{地域|ちいき}の交通安全も{警察|けいさつ}の大切な仕事です。", en: "Preventing crime goes without saying, but local traffic safety is also an important job for the police." },
      ],
      deepDive:
        "**〜はもとより** is the formal twin of **〜はもちろん** (N3). もとより is an old adverb meaning *from the beginning / as a matter of course*, so AはもとよりB も = *A goes without saying, and B too*.\n\n" +
        "Structure: **A はもとより、B も / B まで / B でさえ**. A is the obvious case; B is the case the listener might not expect. Getting the order right matters: 日本人はもとより、外国人にも人気 ✓ (Japanese people obviously like it; foreigners too). Reversing it makes the listener wonder why the second group is the obvious case.\n\n" +
        "Register: はもちろん is fine in conversation; はもとより sounds like a speech, presentation, company brochure or written explanation. In a farewell speech it lets you list what you learned elegantly: 仕事の進め方はもとより、取引先との付き合い方など….\n\n" +
        "Compare with close neighbors:\n" +
        "- **〜はもちろん**: same meaning, more everyday.\n" +
        "- **〜のみならず** (#63): *not only… but also*, formal, focuses on extending the scope, without the “obviously” feeling.\n" +
        "- **〜に限らず** (#72): *not limited to ~*.\n" +
        "- **〜をはじめ** (#10): names a representative example of a group rather than two separate items.\n\n" +
        "Note that もとより alone also works as an adverb: もとより承知しております *I was aware of that from the start*.\n\n" +
        "JLPT tip: if the second half contains も / まで / さえ and the first item is the obvious one, はもとより (or はもちろん) is the answer.",
      see: [10, 63, 72],
      index: ["Nはもとより", "〜はもとより〜も"],
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the correct option." },
          items: [
            { q: "すしは日本（　）いろいろな国で人気がある食べ物です。", options: ["はもとより", "においては"], answer: 0, en: "Sushi is a food that is popular in many countries, not to mention Japan." },
            { q: "{事前|じぜん}に予約した場合（　）{無料|むりょう}で{参加|さんか}できます。", options: ["はもとより", "に{限|かぎ}り"], answer: 1, en: "Only if you book in advance can you take part free of charge." },
            { q: "スペイン語はスペイン（　）{南米|なんべい}の{国々|くにぐに}でも使われています。", options: ["はもとより", "にもかかわらず"], answer: 0, en: "Spanish is used not only in Spain but also in the countries of South America." },
            { q: "子どもは家族（　）生活しながら、社会{習慣|しゅうかん}を{身|み}につけるべきだ。", options: ["はもとより", "のもとで"], answer: 1, en: "Children should acquire social customs while living with (under the care of) their family." },
            { q: "今後、{両国間|りょうこくかん}では{経済|けいざい}（　）文化の{交流|こうりゅう}も{活発|かっぱつ}になるだろう。", options: ["はもとより", "のもとで"], answer: 0, en: "From now on, exchanges between the two countries will probably become active not only in the economy but in culture as well." },
          ],
        },
      ],
    },
    // ───────── 13
    {
      no: 13,
      pattern: "〜ものだ",
      phrase: "人は{失敗|しっぱい}から学ぶ**ものだ**",
      stars: 1,
      marks: [],
      usage: {
        ja: "{誰|だれ}でもそう思う、{絶対|ぜったい}正しいと思っている{話者|わしゃ}の{判断|はんだん}を表す。注意や{命令|めいれい}になることもある。{偉|えら}そうな感じがするので、{目上|めうえ}の人には使わないほうがいい。親しい人との会話では、「もんだ」が使われる。",
        en: "This expresses the speaker's judgment that anyone would think so or that the speaker thinks it is absolutely correct. You should not use this when speaking to a higher ranking person as it can sound bossy. \"もんだ\" is used in conversation with a familiar person.",
      },
      forms: ["[V-る]／[V-ない] + ものだ", "[V-る]／[V-ない] + もんだ"],
      examples: [
        { ja: "A：うちの息子は最近{口答|くちごた}えばかりして、ちっとも言うことを聞かないんですよ。\nB：子どもは親に{反抗|はんこう}するものですから、それも{成長|せいちょう}のひとつですよ。", en: "A: My son keeps talking back lately and never listens to a word I say.\nB: Children do rebel against their parents, so that's just part of growing up." },
        { ja: "A：今まで自由に生きてきたけど、最近さびしさを感じるんだ。\nB：それはそうさ。人は一人では生きられないものだから。", en: "A: I've lived freely up to now, but lately I've been feeling lonely.\nB: Well, of course. People can't live on their own." },
        { ja: "{誰|だれ}でもほめられればやる気になるものですから、新入社員を{指導|しどう}するときはぜひいいところを探してください。", en: "Anyone gets motivated when they're praised, so when you train new employees, please do look for their good points." },
        { ja: "{失恋|しつれん}したら、めいっぱいおしゃれをして出かけましょう。おしゃれをすると気分が明るくなるものです。", en: "When you've had your heart broken, dress up as much as you can and go out. Dressing up does lift your mood." },
        { ja: "さっきのお前の{態度|たいど}は何だ。人が話しているときには、ちゃんと聞くもんだぞ。", en: "What was that attitude of yours just now? When someone is talking, you listen properly." },
      ],
      notes: [
        { ja: "☞ p.224　〜もの／もん", en: "See p.224: 〜もの／もん." },
      ],
      deepDive:
        "**〜ものだ** presents something as **the natural way of things** — a general truth about people, society or the world, not a personal opinion about one case. もの here means *the nature of things*: 人は失敗から学ぶものだ *people (by nature) learn from failure*.\n\n" +
        "Two main uses:\n" +
        "- **General truth / tendency**: 人は一人では生きられないものだ. Often used to comfort or reassure: 子どもは親に反抗するものですから….\n" +
        "- **Social norm → advice or rebuke**: 人が話しているときには、ちゃんと聞くもんだ *you listen properly when someone is talking*. The negative 〜ないものだ tells people what *not* to do: 人の悪口は言わないものだ.\n\n" +
        "Register: because it sounds like a rule handed down from above, using it *to* a superior (✗部長、会議には遅れないものですよ) is rude. In casual speech it becomes **もんだ / もんだよ / もんだぞ**; ぞ is strong and masculine.\n\n" +
        "Compare:\n" +
        "- **〜べきだ**: *should*, based on the speaker's own sense of duty; more direct and personal.\n" +
        "- **〜はずだ**: *should be (I expect)*, a logical guess, not a norm.\n" +
        "- The ものだ family in this book is large: ものだ② (#132) is the nostalgic *used to* (昔はよく遊んだものだ — note V-た); 〜ものではない (#46) *you shouldn't*; 〜というものだ (#52) *that's what ~ is*; 〜というものではない (#25) *it's not necessarily the case*; 〜ものがある (#92); 〜ものの (#39) *although*; 〜ものなら (#122); 〜ものか (#51) *no way*; 〜もん (#56) *because*.\n\n" +
        "JLPT tip: V-る/V-ない + ものだ = general truth or norm; V-た + ものだ = nostalgic recollection. Look at the verb form first.",
      see: [25, 39, 46, 51, 52, 56, 92, 122, 132],
      index: ["V-るものだ", "V-ないものだ", "もんだ"],
    },
    // ───────── 14
    {
      no: 14,
      pattern: "〜{上|うえ}で",
      phrase: "仕事をする**{上|うえ}で**",
      stars: 3,
      marks: ["formal"],
      usage: {
        ja: "「〜{上|うえ}で…」は、「〜をするとき（…が{重要|じゅうよう}だ・{必要|ひつよう}だ）」と言いたいときに使われる。",
        en: "\"〜{上|うえ}で…\" is used when you want to say that \"(something is important or required) when doing something\".",
      },
      forms: ["[V-る] + {上|うえ}で"],
      examples: [
        { ja: "この本は{就職活動|しゅうしょくかつどう}をする{上|うえ}での{重要|じゅうよう}なポイントが書かれています。", en: "This book sets out the important points for job hunting." },
        { ja: "{国際関係|こくさいかんけい}を考える{上|うえ}で、{宗教|しゅうきょう}問題は{避|さ}けられない。", en: "When thinking about international relations, religious issues cannot be avoided." },
        { ja: "{新店舗|しんてんぽ}を{開設|かいせつ}する{上|うえ}で、{周辺|しゅうへん}のマーケティング{調査|ちょうさ}は{欠|か}かせない。", en: "When opening a new store, marketing research of the surrounding area is indispensable." },
        { ja: "会社を{経営|けいえい}していく{上|うえ}でコストパフォーマンスは{重要|じゅうよう}な{課題|かだい}だ。", en: "In running a company, cost-effectiveness is an important issue." },
      ],
      notes: [
        { ja: "☞ p.220　〜{上|うえ}／{上|じょう}", en: "See p.220: 〜上（うえ）／上（じょう）." },
      ],
      deepDive:
        "**V-る + 上で** means *in (the process of) doing ~ / for the purpose of doing ~*. It sets up an activity and the rest of the sentence says **what matters, what is needed, or what to watch out for** in it. Typical endings: 大切だ・重要だ・必要だ・欠かせない・避けられない・役に立つ・問題になる.\n\n" +
        "- To modify a noun, use **上での + N**: 就職活動をする上での重要なポイント, 生活する上での悩み.\n" +
        "- With nouns there is **Nの上で** (仕事の上で), which is close to **N上（じょう）** (#70): 仕事上, 法律上.\n\n" +
        "It is not simply *when*. ✗ご飯を食べる上でテレビを見た is wrong — you need an evaluative or necessary element in the second half. Compare 留学生が生活する上で円高は大きな問題だ ✓.\n\n" +
        "The 上 family is a classic JLPT trap — look at what precedes it:\n" +
        "- **V-る上で** (this point): *in doing ~, …is important*.\n" +
        "- **V-た上で** (#117): *after doing ~ (and then)*: よく考えた上で決めます.\n" +
        "- **V-る/V-た上は** (Plus of #18): *now that ~*: 引き受けた上は.\n" +
        "- **〜上（に）** (#102): *in addition to ~*: 安い上においしい.\n" +
        "- **N上（じょう）** (#70): *from the standpoint of ~*: 歴史上, 健康上.\n\n" +
        "Register: fairly formal; common in essays, reports and speeches. In a farewell speech, 仕事をする上で大切なこと is a natural phrase for “the things that matter at work”.",
      see: [18, 70, 102, 117],
      index: ["V-る上で", "V-る上での", "Nの上で"],
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the option that correctly completes each sentence." },
          items: [
            { q: "留学生が生活する{上|うえ}で（　）。", options: ["{円高|えんだか}は大きな問題だ", "高いものは買わない"], answer: 0, en: "For international students living here, the strong yen is a big problem." },
            { q: "この{講座|こうざ}はボランティア{活動|かつどう}をする{上|うえ}で（　）。", options: ["難しいです", "{必要|ひつよう}な{知識|ちしき}を学びます"], answer: 1, en: "In this course you learn the knowledge needed for doing volunteer work." },
            { q: "{進学先|しんがくさき}を選ぶ{上|うえ}で（　）。", options: ["{就職率|しゅうしょくりつ}は{重要|じゅうよう}なポイントだ", "この大学は{簡単|かんたん}に入れました"], answer: 0, en: "In choosing where to continue your studies, the employment rate is an important point." },
            { q: "日本の{農業|のうぎょう}を{理解|りかい}する{上|うえ}で（　）。", options: ["{農村|のうそん}に見学に行くつもりだ", "{気候|きこう}や{地形|ちけい}に対する{理解|りかい}も{必要|ひつよう}だ"], answer: 1, en: "To understand Japanese agriculture, an understanding of the climate and terrain is also necessary." },
          ],
        },
      ],
    },
    // ───────── 15
    {
      no: 15,
      pattern: "〜ながら（も）",
      phrase: "{残念|ざんねん}**ながら**",
      stars: 2,
      marks: [],
      usage: {
        ja: "「〜ながら」は、「〜の{状態|じょうたい}だが、けれども」と言いたいときに使う。",
        en: "Use \"〜ながら\" when you want to say \"this is the situation, but...\"",
      },
      forms: [
        "[V-~~ます~~]／[V-ない] + ながら（も）",
        "[いA] + ながら（も）",
        "[なA] + ながら（も）",
        "[N] + ながら（も）",
      ],
      formNotes: [
        { ja: "「[なA]／[N] であり + ながら」の形もある。", en: "The form “なA / N + でありながら” also exists." },
      ],
      examples: [
        { ja: "彼とは同じ{寮|りょう}に住んでいながら、ほとんど話をしたことがなかった。", en: "Although he and I lived in the same dormitory, we had hardly ever talked." },
        { ja: "留学生たちは、難しい言葉はわからないながら、日本人のボランティアと楽しそうにおしゃべりしている。", en: "Though they don't understand difficult words, the international students are chatting happily with the Japanese volunteers." },
        { ja: "彼は若いながらも、{立派|りっぱ}なプロジェクトリーダーだ。", en: "Young as he is, he is a fine project leader." },
        { ja: "{練習試合|れんしゅうじあい}ながら、去年の{優勝|ゆうしょう}チームに{勝|か}ったのは大きな自信になる。", en: "Although it was only a practice match, beating last year's champions gives us a lot of confidence." },
        { ja: "このICレコーダーは{小型|こがた}でありながら、{連続|れんぞく}24時間の{録音|ろくおん}が{可能|かのう}だ。", en: "Although this IC recorder is compact, it can record for 24 hours continuously." },
      ],
      deepDive:
        "You already know **V-ます stem + ながら** as *while doing* (two simultaneous actions: 音楽を聞きながら勉強する). At N2 the same ながら has a second job: **contrast** — *although / despite*. 住んでいながら = *although (we) lived*.\n\n" +
        "How to tell them apart:\n" +
        "- The concessive ながら usually follows **states**, not actions: 〜ていながら, 知りながら, 思いながら, 〜ないながら, adjectives (若いながら, 小さいながら), nouns (練習試合ながら, 旧型ながら), and でありながら.\n" +
        "- The second half runs against expectation: 若いながらも、立派なプロジェクトリーダーだ *young as he is, he is a fine project leader*.\n" +
        "- Adding **も** (ながらも) makes the contrast unmistakable.\n\n" +
        "The subject is normally the same in both clauses. ✗私が何度も頼みながら、彼は断った sounds off; use のに or にもかかわらず (#21).\n\n" +
        "Many fixed expressions use it — good for speeches and polite writing:\n" +
        "- **残念ながら** *unfortunately*, **恥ずかしながら** *embarrassing as it is*, **勝手ながら** *we apologize, but (for our own convenience)*, **陰ながら** *(support you) from the sidelines*, **我ながら** *if I say so myself*, **狭いながらも楽しい我が家** *humble but happy home*.\n\n" +
        "Compare: **〜つつも** (#112) is very close and more literary (知りつつも); **〜ものの** (#39) *although* concedes a fact then states a different result; **〜のに** adds the speaker's surprise or complaint.",
      see: [21, 39, 112],
      index: ["Vながら（も）", "いAながら", "なAながら", "Nながら", "でありながら", "残念ながら"],
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the option that correctly completes each sentence. (Item 2 is illustrated with a hiker walking toward a mountain peak.)" },
          items: [
            { q: "ぜひ{北海道|ほっかいどう}へ行きたいと思いながら、（　）。", options: ["何度も行った", "まだ行ったことがない"], answer: 1, en: "Although I really want to go to Hokkaido, I still haven't been there." },
            { q: "山の{頂上|ちょうじょう}がすぐ近くに見えていながら、（　）。", options: ["なかなか{頂上|ちょうじょう}につかない", "もうすぐ{頂上|ちょうじょう}につきそうだ"], answer: 0, en: "Although the summit looks very close, we just can't seem to reach it." },
            { q: "この{美術館|びじゅつかん}は小さいながら（　）。", options: ["多くのすばらしい作品を{展示|てんじ}している", "休日でも{入場者|にゅうじょうしゃ}は少ない"], answer: 0, en: "Although this art museum is small, it exhibits many wonderful works." },
            { q: "この{洗濯機|せんたくき}は、{旧型|きゅうがた}ながらとても（　）。", options: ["使いにくい", "使いやすい"], answer: 1, en: "Although this washing machine is an old model, it is very easy to use." },
          ],
        },
      ],
    },
  ],
  check: [
    {
      type: "fill",
      prompt: { ja: "", en: "Choose the expression from the box that fills each blank." },
      bank: ["ながら", "のもとで", "はもとより", "をはじめとする"],
      items: [
        { q: "{当社|とうしゃ}はチョコレート＿＿お{菓子|かし}の{総合|そうごう}メーカーです。", answer: "をはじめとする", en: "Our company is a general confectionery maker, producing chocolate and much more." },
        { q: "このアニメは、子ども＿＿、大人でも十分楽しめる作品になっている。", answer: "はもとより", en: "This anime is a work that adults as well as children can fully enjoy." },
        { q: "たまにはゆっくり映画を見たいと思い＿＿、なかなか時間がとれない。", answer: "ながら", en: "Although I'd like to relax and watch a movie once in a while, I just can't find the time." },
        { q: "がんの{疑|うたが}いがあるときは{専門医|せんもんい}＿＿{早期|そうき}に{診断|しんだん}、{治療|ちりょう}されることをおすすめします。", answer: "のもとで", en: "When cancer is suspected, we recommend being diagnosed and treated early under a specialist." },
      ],
    },
    {
      type: "fill",
      prompt: { ja: "", en: "Choose the expression from the box that fills each blank." },
      bank: ["ものだ", "{上|うえ}で", "{以来|いらい}"],
      items: [
        { q: "仕事をする＿＿いちばん大切なのは{報告|ほうこく}・{連絡|れんらく}・{相談|そうだん}だと言われている。", answer: "{上|うえ}で", en: "It is said that the most important things in doing a job are reporting, keeping in touch and consulting." },
        { q: "ジョギングを始めて＿＿体の{調子|ちょうし}もいいし、夜もよく寝られるようになった。", answer: "{以来|いらい}", en: "Ever since I started jogging, I've been in good shape and have been sleeping well at night." },
        { q: "{誰|だれ}でも{後輩|こうはい}の前ではいいところを見せたい＿＿。", answer: "ものだ", en: "Everyone wants to show their best side in front of their juniors." },
      ],
    },
  ],
});
