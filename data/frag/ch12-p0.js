N2F({
  ch: 12,
  part: 0,
  head: {
    genre: { ja: "ビジネス場面の会話", en: "Conversation in a Business Setting" },
    title: { ja: "ウォーキングシューズの{開発|かいはつ}", en: "Developing Walking Shoes" },
    canDo: [
      { ja: "会議で説明したり、意見を言ったりできる。", en: "Give explanations and state your opinion in a meeting." },
    ],
  },
  label: "(1)",
  sample: {
    kind: "dialogue",
    lines: [
      { sp: "{川口|かわぐち}", v: "f", ja: "今度、ミズノから「{軽|かる}くて{疲|つか}れない{靴|くつ}」が{発売|はつばい}される**とか**…。", en: "I hear Mizuno is going to release \"light shoes that don't tire you out\"..." },
      { sp: "{山下|やました}", v: "m", ja: "{軽量化|けいりょうか}という{業界|ぎょうかい}の{流|なが}れ**にそって**、{新製品|しんせいひん}が{開発|かいはつ}されていますからね。わが社もウォーキングシューズ**にかけては**、{実績|じっせき}がありますが、違った{視|し}{点|てん}で{開発|かいはつ}し**ないことには**新しいお客さんは{獲得|かくとく}できないですよね。", en: "New products are being developed in line with the industry trend toward lighter weight, after all. Our company has a proven track record when it comes to walking shoes, but unless we develop them from a different perspective, we won't be able to win new customers." },
      { sp: "川口", v: "f", ja: "ウォーキングシューズというと、{見|み}た{目|め}より歩きやすさを{重視|じゅうし}し**がち**ですけど、女性としては、やっぱり買うときの{決|き}め{手|て}はデザインですね。歩きやすい{靴|くつ}がほしいと思い**つつも**、デザインを{優先|ゆうせん}してしまう人が多いと思うんです。", en: "When it comes to walking shoes, people tend to put comfort ahead of looks, but for women, the deciding factor when buying is design, after all. I think there are a lot of people who, even though they want shoes that are easy to walk in, end up putting design first." },
      { sp: "山下", v: "m", ja: "女性ですからね。", en: "Well, women are like that, aren't they." },
    ],
  },
  points: [
    {
      no: 107,
      pattern: "〜とか",
      phrase: "{発売|はつばい}される**とか**",
      stars: 2,
      marks: [],
      usage: {
        ja: "「〜とか言っていた」などの形で、聞いた{情報|じょうほう}を言うときに使われる。{確|たし}かな{情報|じょうほう}ではないがという気持ちで使うことが多い。「言っていた」などの言葉を{省略|しょうりゃく}することもある。",
        en: "This is used in forms such as \"〜とか言っていた\" when you state information you have heard. It is often used with the nuance that the information may not be solid. You can also omit words such as \"言っていた\".",
      },
      forms: ["[Pl] + とか"],
      examples: [
        { ja: "{息子|むすこ}さんが今度{結婚|けっこん}なさるとか。おめでとうございます。", en: "I hear your son is getting married soon. Congratulations." },
        { ja: "A：{山田|やまだ}さん、今日休み？\nB：さっき電話があって、{熱|ねつ}があるとか。大丈夫でしょうか。", en: "A: Is Yamada off today?\nB: He called a little while ago — something about having a fever. I wonder if he's all right." },
        { ja: "今年は花火大会、中止だとか。本当ですか。", en: "I hear the fireworks festival is canceled this year. Is that true?" },
        { ja: "え！　今日ハイキングに行くの!?　テレビで{台風|たいふう}が来るとか言ってたよ。", en: "What! You're going hiking today!? They were saying on TV that a typhoon is coming." },
        { ja: "天気{予報|よほう}によると、来週は暑さが{厳|きび}しいとか。{熱中症|ねっちゅうしょう}に注意が{必要|ひつよう}ですね。", en: "According to the weather forecast, it's supposed to be severely hot next week. We'll need to watch out for heatstroke." },
      ],
      deepDive:
        "**〜とか** at the end of a clause (plain form + とか) is a soft *hearsay* marker: *I hear that ~ / apparently ~ / something about ~*. It's a shortened version of 〜とか言っていた / 〜とか聞いた, and the vagueness of とか (*or something like that*) is exactly what gives it its nuance: the speaker is passing the information on without taking full responsibility for its accuracy.\n\n" +
        "- Connection: plain form of verbs, adjectives and nouns: 閉店するとか, 忙しいとか, 雨だとか, 中止だとか.\n" +
        "- It often ends the sentence (…するとか。) and is followed by the speaker's reaction: おめでとうございます / 大変ですね / 心配ですね.\n" +
        "- **〜とかで** gives a reason you heard second-hand: 用事があるとかで休みです *he's off — something about an errand*.\n\n" +
        "Register: friendly and conversational, but perfectly acceptable in polite small talk at work (…なさるとか。おめでとうございます). In formal writing use 〜そうだ or 〜とのことだ instead.\n\n" +
        "Compare other hearsay forms:\n" +
        "- **〜そうだ** — neutral, the standard hearsay form.\n" +
        "- **〜って / 〜んだって** — casual.\n" +
        "- **〜とのことだ** — formal, used in business reports.\n" +
        "- **〜とか** — casual–polite, vaguer; implies *I'm not sure of the details*.\n\n" +
        "Don't confuse it with the N3 listing **とか** (*things like A or B*): チョコレートとか、甘いもの. Listing とか follows nouns (or verbs) as *examples*; hearsay とか follows a whole clause of information and usually closes the sentence. The practice below mixes the two (☞ p.223 〜とか), so ask: is the speaker giving *examples*, or *reporting news*?",
      see: [],
      index: ["〜とか（伝聞）", "〜とか言っていた", "〜とかで"],
      practice: [
        {
          type: "choice",
          labels: "ABC",
          prompt: {
            ja: "（A）今年のゴールデンウィークは{円高|えんだか}の{影響|えいきょう}で海外に行く人が多いとか。うらやましいですね。\n（B）彼女はチョコレートとか、{甘|あま}いものが大好きです。\n例）今年の冬は寒さが{厳|きび}しいとか。{嫌|いや}ですね。　（　A　）",
            en: "Decide whether each underlined とか is used like (A) (hearsay: \"I hear that ~\") or like (B) (listing an example: \"things like ~\"). (A) I hear that a lot of people are going abroad this Golden Week because of the strong yen. I'm jealous. (B) She loves sweet things like chocolate. Example: I hear this winter will be severely cold. How awful. → A",
          },
          xref: "☞ p.223 〜とか",
          items: [
            { q: "{佐藤|さとう}さんのおばあちゃんは75歳で山登りがご{趣味|しゅみ}だとか。お元気ですね。", options: ["", ""], answer: 0, en: "I hear Sato's grandmother is 75 and her hobby is mountain climbing. She's so energetic." },
            { q: "駅前にうちと同じような{焼|や}き{肉屋|にくや}ができるとか聞いたんですけど、うち、大丈夫ですかね。", options: ["", ""], answer: 0, en: "I heard that a yakiniku restaurant just like ours is opening in front of the station — will we be all right?" },
            { q: "休みの日にスポーツをするなら、ゴルフよりジョギングとかのほうがいいですよ。お金もかからないし。", options: ["", ""], answer: 1, en: "If you're going to play a sport on your days off, something like jogging is better than golf. It doesn't cost money, either." },
            { q: "部長：{吉田|よしだ}君はまだ来てないの？\n{小林|こばやし}：さっき電話があって、今日は{取引先|とりひきさき}に{寄|よ}ってから来るとか。", options: ["", ""], answer: 0, en: "Manager: Yoshida isn't here yet?\nKobayashi: He called a little while ago — he said he'd be coming in after stopping by a client today." },
            {
              q: "{中村|なかむら}君、アメリカに{転勤|てんきん}するとか言ってたけど、{引|ひ}っ{越|こ}しとか大変だろうね。",
              parts: [
                { tag: "転勤するとか", options: ["", ""], answer: 0 },
                { tag: "引っ越しとか", options: ["", ""], answer: 1 },
              ],
              en: "Nakamura was saying he's being transferred to America — things like the move must be tough.",
            },
          ],
        },
      ],
    },
  ],
});
