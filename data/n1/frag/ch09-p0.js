N2F({
  ch: 9,
  part: 0,
  head: {
    genre: { ja: "講演を聞く", en: "Listening to a Lecture" },
    title: { ja: "トリアージ", en: "Triage" },
    canDo: [
      { ja: "やや専門的な説明を聞いて、その内容や{発話者|はつわしゃ}の意見が理解できる。", zh: "听一段有点儿专业的解释，理解其内容及发言人的观点。", en: "Listen to a somewhat specialized explanation and understand its content and the speaker's opinion." },
    ],
  },
  label: "",
  sample: {
    kind: "dialogue",
    lines: [
      { sp: "司会者", v: "f", ja: "{本日|ほんじつ}は「トリアージ」について、{救命救急|きゅうめいきゅうきゅう}がご専門の医師の{森|もり}先生にお話を{伺|うかが}います。{森|もり}先生、よろしくお願いします。",
        en: "Today we will hear about “triage” from Dr. Mori, a physician who specializes in emergency and critical care medicine. Dr. Mori, thank you for being here." },
      { sp: "{森|もり}", v: "m", ja: "{森|もり}です。「トリアージ」と言いますのは、{患者|かんじゃ}の{治療|ちりょう}について{優先順位|ゆうせんじゅんい}を決めることです。例えば、大きな{災害|さいがい}や事故で{多数|たすう}のけが{人|にん}が出たとしましょう。病院は1{カ|か}所、対応できる医者が2人しかいないとしたら、どんな{治療|ちりょう}ができるでしょうか。{医療|いりょう}設備やスタッフの数からして、対応に限界があるでしょう。100人**からいる**けが{人|にん}の中には、命**にかかわる**{重傷者|じゅうしょうしゃ}もいます。このような{緊急時|きんきゅうじ}**にあって**、医師は{速|すみ}やかな{決断|けつだん}を{迫|せま}られます。\nまず専門家が、{一目|ひとめ}でわかるように、けが{人|にん}に色分けされたタグを付けていきます。タグの赤色は、{一刻|いっこく}も早い{処置|しょち}が必要で{救命|きゅうめい}の可能性がある{者|もの}。黄色は、今すぐ命にかかわるほどのけがではないが、早い{処置|しょち}が必要な{者|もの}。緑色は、{軽傷者|けいしょうしゃ}で{救急|きゅうきゅう}に{搬送|はんそう}の必要のない{者|もの}。\nそして、黒色のタグは、すでに死亡が認められたか、あるいは今この段階では{救命|きゅうめい}が不可能な{者|もの}という分け方です。",
        en: "I'm Mori. “Triage” means deciding the order of priority for treating patients. Suppose, for example, that a major disaster or accident has left a large number of people injured. If there is only one hospital and only two doctors able to deal with them, what kind of treatment can be given? Given the medical equipment and the number of staff alone, there will be limits to what can be done. Among as many as a hundred injured people, there will also be seriously injured people whose lives are at stake. In an emergency like this, doctors are forced to make quick decisions.\nFirst, specialists attach color-coded tags to the injured so that their condition can be seen at a glance. A red tag means a person who needs treatment as soon as possible and whose life can be saved. Yellow means a person whose injuries are not immediately life-threatening but who needs early treatment. Green means a person with minor injuries who does not need to be taken to emergency care.\nAnd a black tag is for someone who has already been confirmed dead, or whose life cannot be saved at this stage. That is how people are sorted." },
      { sp: "司会者", v: "f", ja: "う〜ん、確かに必要な判断だとはいえ、もし目の前で黒のタグを付けられたとしたら、そのけが{人|にん}の家族は頭では理解しつつも、あきらめきれないのではないでしょうか。",
        en: "Hmm. It is certainly a necessary judgment, but if a black tag were attached right in front of them, wouldn't the injured person's family, even while understanding it in their heads, find it impossible to give up?" },
      { sp: "{森|もり}", v: "m", ja: "確かに、見**ようによっては**{非情|ひじょう}な{行為|こうい}かもしれません。ですが、このような{緊急時|きんきゅうじ}には、助けられる命を{優先|ゆうせん}するのが最も良い方法なのです。",
        en: "Certainly, depending on how you look at it, it may seem a heartless act. But in an emergency like this, giving priority to the lives that can be saved is the best approach." },
      { sp: "司会者", v: "f", ja: "{医療現場|いりょうげんば}で{究極|きゅうきょく}の{選択|せんたく}が必要になるということですね。私たちも{冷静|れいせい}に受け止めなければならないことがよくわかりました。",
        en: "So in medical settings, the ultimate choice sometimes has to be made. I now understand well that this is something we too must accept calmly." },
    ],
  },
  points: [
    // ───────── 107
    {
      no: 107,
      pattern: "〜からいる／〜からある／〜からの",
      phrase: "100人**からいる**けが{人|にん}",
      stars: 1,
      marks: [],
      usage: {
        ja: "「〜からいる」は、普通よりはるかに多い数であることを表す。「〜からある」「〜からの」も同じ意味で使われる。",
        zh: "表示数量远远多出通常情况。",
        en: "“〜からいる” expresses that a number is far larger than usual. “〜からある” and “〜からの” are also used with the same meaning.",
      },
      forms: ["[数] + （{助数詞|じょすうし}） + ［からいる　からある　からの］ + [N]"],
      examples: [
        { ja: "{災害時|さいがいじ}、3,000人からいる観客を、安全に{退出|たいしゅつ}させるには{人手|ひとで}が足りない。", en: "In a disaster, there aren't enough staff to get an audience of as many as 3,000 people out safely." },
        { ja: "小さな子どもが、10kgからある旅行かばんを{一生懸命|いっしょうけんめい}運ぼうとしている。", en: "A small child is trying with all his might to carry a suitcase that weighs a good 10 kg." },
        { ja: "{伊藤氏|いとうし}は、個人で1億円からの{寄付|きふ}を申し出た。", en: "Mr. Ito offered a donation of no less than 100 million yen out of his own pocket." },
      ],
      notes: [
        {
          ja: "「〜からする」は、値段が非常に高いということを表す。",
          zh: "表示价格非常高。",
          en: "“〜からする” expresses that a price is extremely high.",
          examples: [
            { ja: "2,000万円からする宝石が{何者|なにもの}かに盗まれて、{大騒|おおさわ}ぎになっている。", en: "A jewel worth as much as 20 million yen has been stolen by someone, and it has caused a huge uproar." },
            { ja: "この切手は{発行|はっこう}枚数が少なかったこともあり、今では1枚50万円からの{値|ね}がついているそうだ。", en: "Partly because so few of these stamps were issued, I hear they now fetch as much as 500,000 yen apiece." },
          ],
        },
      ],
      deepDive:
        "**Number (+ counter) + からいる／からある／からの + N** means *as many as / a good ~ / no less than ~*. The speaker presents the number as **surprisingly large**, and から here has the sense *starting from ~ (and possibly more)*: 100人からいるけが人 = *injured people numbering a hundred or more*.\n\n" +
        "Which verb follows から depends on what is being counted or measured:\n" +
        "- **からいる**: people and animals (things that いる): 3,000人からいる観客, 100人からいるけが人.\n" +
        "- **からある**: size, weight, length, distance, quantity of things (ある): 10kgからあるかばん, 200kmからある道のり, 100キロからある金庫.\n" +
        "- **からする**: price, value (as the 📎 note says): 2,000万円からする宝石. Compare 値段がする *to cost*.\n" +
        "- **からの**: works for any of these and is the most flexible: 1億円からの寄付, 50万円からの値, 1万人からの人出.\n\n" +
        "The pattern normally modifies a noun directly (からある + N). It can also end a sentence in speech (その魚は1メートルからある), but the noun-modifying use is what the JLPT tests.\n\n" +
        "Pitfalls:\n" +
        "- It only works with a **concrete number** and a meaning of *large*. ✗3人からいる客 sounds odd unless three is somehow a lot; ✗少しからある is impossible.\n" +
        "- Don't confuse it with from-to から: 100人から200人 *from 100 to 200*, or 1,000円から *starting at 1,000 yen* on a price list (a minimum, not an emphasis).\n" +
        "- Pick the right verb: ✗10kgからいるかばん, ✗5億円からいるヨット.\n\n" +
        "Similar emphatic ways to stress a big number: **〜も** (100人もいる), **優に〜** (優に100人を超える), **〜に上る** (死者は100人に上る). からいる／からある is more written and slightly literary.\n\n" +
        "JLPT tip: look at the counter. People → からいる; kg/km/メートル → からある; 円 → からする; any of them → からの. Distractors such as からくる (*stemming from*, as in ストレスからくる病気) or からあって do not express a large number.",
      see: [],
      index: ["〜からいるN", "〜からあるN", "〜からのN", "〜からするN", "からいる", "からある", "からする", "からの"],
    },
    // ───────── 108
    {
      no: 108,
      pattern: "〜にかかわる",
      phrase: "命**にかかわる**",
      stars: 3,
      marks: [],
      usage: {
        ja: "「〜にかかわる」は「命にかかわるけが」のように「〜に重大な{影響|えいきょう}がある」と言いたいときに使う。「教育にかかわる仕事」のように「〜に関係がある」と言いたいときにも使う。",
        zh: "用于想说“对……有重大影响”时，如“关系到性命的伤”。也用于想说“与……相关”时，如“教育相关的工作”。",
        en: "Use “〜にかかわる” when you want to say that something “has a serious effect on 〜”, as in “命にかかわるけが” (a life-threatening injury). It is also used when you want to say “is related to 〜”, as in “教育にかかわる仕事” (work related to education).",
      },
      forms: ["[N] + にかかわる"],
      examples: [
        { ja: "家庭での教育は子どもの発達や人間{形成|けいせい}にかかわる大きな問題だ。", en: "Education at home is a major issue that affects children's development and the formation of their character." },
        { ja: "政府は、国民の安全にかかわる情報はすぐに公表すべきだ。", en: "The government should immediately make public any information that concerns the safety of the people." },
        { ja: "{少子高齢|しょうしこうれい}社会にどう対応するかは、国の将来にかかわる問題だ。", en: "How to deal with a society with a falling birthrate and an aging population is a question that bears on the nation's future." },
        { ja: "日本に留学して、将来貿易にかかわる仕事に{就|つ}きたいと思っています。", en: "I want to study in Japan and, in the future, get a job related to trade." },
      ],
      deepDive:
        "**N + にかかわる** comes from the verb かかわる (関わる／係わる) *to be involved with, to concern*. It has two strengths of meaning:\n\n" +
        "- **Seriously affects / puts at stake**: 命にかかわるけが *a life-threatening injury*, 会社の存続にかかわる問題 *a problem that threatens the company's survival*, 名誉にかかわる *a matter of honor*. The noun before it is something important (命, 将来, 存続, 安全, 評判, 名誉), and the phrase says it is **at stake**.\n" +
        "- **Is related to / involved in**: 教育にかかわる仕事, 貿易にかかわる仕事, 事件の真相にかかわる人物. Here it is close to 〜に関係する／〜に関する.\n\n" +
        "Forms: most often **にかかわる + N** (noun modifier), but also **〜にかかわります／〜にかかわることだ** at the end of a sentence (それは命にかかわります), and the verb itself: 事件にかかわっている *be involved in the case*. The noun form is **かかわり**: 〜とのかかわり.\n\n" +
        "Compare:\n" +
        "- **〜に関する** (N3): neutral *about, regarding* — a topic label (環境に関する本). にかかわる adds a sense of real involvement or seriousness.\n" +
        "- **〜にかかわらず／〜にかかわりなく** (N2): *regardless of* — same verb, opposite effect. Don't mix them up: 年齢にかかわらず = *regardless of age*; 年齢にかかわる問題 = *an age-related problem*.\n" +
        "- **〜を左右する**: *to sway, to determine* — similar to the “serious effect” meaning.\n\n" +
        "Collocations worth memorizing: 命にかかわる, 生死にかかわる, 存続にかかわる, 沽券（こけん）にかかわる *beneath one's dignity*, 名誉にかかわる, プライバシーにかかわる.\n\n" +
        "JLPT tip: if the noun is 命・存続・将来・安全・評判 and the blank is followed by a noun such as 問題／事態／けが, にかかわる is almost always the answer.",
      see: [],
      index: ["Nにかかわる", "にかかわる"],
      practice: [
        {
          type: "fill",
          prompt: { ja: "", en: "Choose the word from the box that fills each blank." },
          bank: ["{真相|しんそう}", "{福祉|ふくし}", "命", "{存続|そんぞく}"],
          items: [
            { q: "小さな{医療|いりょう}ミスでも、{患者|かんじゃ}の＿＿にかかわる{事態|じたい}を引き起こす場合もある。", answer: "命", en: "Even a small medical error can sometimes cause a situation that endangers a patient's life." },
            { q: "警察は、ついに事件の＿＿にかかわる人物を{特定|とくてい}した。", answer: "{真相|しんそう}", en: "The police have finally identified a person connected with the truth behind the case." },
            { q: "データは{厳重|げんじゅう}に管理すべきだ。もし{流出|りゅうしゅつ}すれば、{企業|きぎょう}の＿＿にかかわる{大|だい}問題になる。", answer: "{存続|そんぞく}", en: "Data should be managed strictly. If it leaked, it would become a major problem threatening the company's survival." },
            { q: "今後{高齢者|こうれいしゃ}が増え、＿＿にかかわる仕事の{需要|じゅよう}がますます高まっていくだろう。", answer: "{福祉|ふくし}", en: "As the number of elderly people grows, demand for work related to welfare will probably keep rising." },
          ],
        },
      ],
    },
    // ───────── 109
    {
      no: 109,
      pattern: "〜にあって",
      phrase: "{緊急時|きんきゅうじ}**にあって**",
      stars: 2,
      marks: ["formal"],
      usage: {
        ja: "「〜にあって」は「〜の状況で」という意味で、「〜という{厳|きび}しい／普通とは違う、特別な状況で」と言いたいときに使われることが多い。",
        zh: "表示“……的状况下”，多用于想说“在……严峻/不同于平常的特殊状况下”时。",
        en: "“〜にあって” means “in the situation of 〜”, and is often used when you want to say “in the harsh / unusual, special situation of 〜”.",
      },
      forms: ["[N] + にあって"],
      examples: [
        { ja: "{火災|かさい}などの{非常時|ひじょうじ}にあっては、落ち着いて行動することがまず大事だ。", en: "In an emergency such as a fire, the first important thing is to act calmly." },
        { ja: "当時は高度経済成長期にあって、政府は高速道路の整備に力を入れていた。", en: "At the time, in the midst of the period of rapid economic growth, the government was putting great effort into building expressways." },
        { ja: "{不況下|ふきょうか}にあっても順調に{業績|ぎょうせき}を伸ばしている{企業|きぎょう}がある。", en: "There are companies that are steadily improving their results even in a recession." },
      ],
      xref: "☞ 2. ビールの{本場|ほんば}**とあって**",
      deepDive:
        "**N + にあって** is a formal, written way to say *in (the situation of) ~*. It comes from 〜にある *to be in/at ~*, and it frames the circumstances as **special** — usually harsh, critical or out of the ordinary — before saying how someone acts or what happens in them: 緊急時にあって, 非常時にあって, 不況下にあって, 高度経済成長期にあって.\n\n" +
        "Typical nouns: 時 words (緊急時, 非常時, 災害時, 〜期, 時代, 現代), situations (不況下, 悪天候下, 逆境, 混乱の中), and positions or roles (社長という立場にあって, 指導者の地位にあって).\n\n" +
        "Variations:\n" +
        "- **〜にあっては**: puts the situation up as a topic — *in such a situation, (what applies is) …*: 非常時にあっては、落ち着いて行動することが大事だ.\n" +
        "- **〜にあっても**: *even in ~* — the result goes against what you'd expect: 不況下にあっても業績を伸ばしている.\n\n" +
        "Compare:\n" +
        "- **〜において** (N2): neutral *in, at* (place, time, field). にあって adds the nuance of a special, often difficult, situation and sounds more literary.\n" +
        "- **〜とあって** (#2): *because it is ~ (a special circumstance), naturally …*: 全品半額セールとあって、客が押し寄せている. It gives a **reason** and the result is a natural consequence. にあって just sets the **situation**, often followed by how one should or does act. This is exactly the contrast drilled in the やってみよう! and cross-referenced by the book's ☞ 2.\n" +
        "- **〜に際して／〜にあたって**: *on the occasion of, when about to do ~* — they point to a moment of action (実施にあたって), not an ongoing state.\n\n" +
        "Pitfall: にあって is not used for everyday, neutral circumstances (✗雨の日にあって傘を持っていった). The situation must feel weighty.\n\n" +
        "JLPT tip: if the blank follows a word such as 〜時／〜下／〜期／時代 and the rest describes behavior in a tough situation, choose にあって; if it follows an event noun and gives a natural result (crowds, popularity), choose とあって.",
      see: [2],
      index: ["Nにあって", "にあって", "にあっては", "にあっても"],
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the correct option." },
          items: [
            { q: "キャラクターグッズは、消費が{低迷|ていめい}している中（　）、なお{根強|ねづよ}い人気を保っている。", options: ["とあって", "にあって"], answer: 1, en: "Even amid sluggish consumer spending, character goods still keep their enduring popularity.", why: { en: "消費が低迷している中 is a hard situation in which something happens — にあって, not a reason for a natural result." } },
            { q: "{全品|ぜんぴん}半額セール（　）、{遠方|えんぽう}からも客が押し寄せている。", options: ["とあって", "にあって"], answer: 0, en: "Because it's a half-price sale on everything, customers are flocking in even from far away.", why: { en: "The sale is the reason and the crowds are the natural result — とあって (#2)." } },
            { q: "{悪天候下|あくてんこうか}（　）、性能が低下しないブレーキの開発を目指している。", options: ["にあっても", "にあっては"], answer: 0, en: "They are aiming to develop brakes whose performance does not drop even in bad weather.", why: { en: "“Even in bad weather” — にあっても." } },
          ],
        },
      ],
    },
    // ───────── 110
    {
      no: 110,
      pattern: "〜ようによって（は）",
      phrase: "見**ようによっては**",
      stars: 1,
      marks: [],
      usage: {
        ja: "「〜ようによって（は）」は「〜のしかた{次第|しだい}で変わる」と言いたいときに使われる。",
        zh: "用于想说“根据……做法而变”。",
        en: "“〜ようによって（は）” is used when you want to say that something “changes depending on how 〜 is done”.",
      },
      forms: ["[V-~~ます~~] + ようによって（は）"],
      examples: [
        { ja: "その{企画|きかく}、取り上げようによっては、{面白|おもしろ}い番組が作れるんじゃないの？", en: "Depending on how you handle that idea, couldn't you make an interesting program out of it?" },
        { ja: "説明{不足|ぶそく}だと、受け取りようによっては、{誤解|ごかい}を招くおそれがあるよ。", en: "If the explanation is insufficient, then depending on how people take it, it could cause misunderstandings." },
        { ja: "同じ{境遇|きょうぐう}でも考えようによって、幸せだと感じることができるものだよ。", en: "Even in the same circumstances, depending on how you think about it, you can feel happy." },
      ],
      deepDive:
        "**V-ます stem + ようによって（は）** means *depending on how you ~*. よう here is the noun 様 *way, manner* attached to a verb stem (見よう *way of looking*, 考えよう *way of thinking*, やりよう *way of doing*), and によって is *depending on*.\n\n" +
        "Meaning and nuance: the outcome **is not fixed; it changes with the way something is done or seen**. With **は** (ようによっては) it is the most common form and implies *in some ways of doing/seeing it, a (possibly surprising) result is possible*: 見ようによっては非情な行為かもしれない *seen a certain way, it might be heartless*. Without は it states the dependence more generally: 考えようによって、幸せだと感じることができる.\n\n" +
        "Frequent verbs: 見る → 見ようによっては; 考える → 考えようによっては; やる → やりようによっては; 言う → 言いようによっては; 取る／受け取る → 取りようによっては; 使う → 使いようによっては. The result clause often contains かもしれない, 〜こともある, 〜できる, or a warning (誤解を招くおそれがある).\n\n" +
        "Related expressions:\n" +
        "- **〜次第で** (N2): *depending on ~* — attaches to nouns: 努力次第で, やり方次第で. ようによって is the verb-stem equivalent of 〜のしかた次第で (as the book's explanation says).\n" +
        "- **〜によっては** (N2): *in some cases of ~*: 人によっては, 場合によっては.\n" +
        "- **〜ようがない** (N2): *there is no way to ~* — same よう, but negative: 連絡のしようがない.\n" +
        "- Set phrase: **ものは考えよう** *it all depends on how you look at it*.\n\n" +
        "Pitfall: the verb must be a stem (✗見るようによっては, ✗見たようによっては). Don't confuse it with the volitional ～よう (見よう *let's look*) or with 〜ように *so that*.\n\n" +
        "JLPT tip: when an option pairs a verb stem with ようによっては and the sentence expresses a result that *could* happen, it is usually correct; in ordering questions, the stem + ようによっては chunk stays together.",
      see: [],
      index: ["Vようによって（は）", "ようによって", "ようによっては", "見ようによっては", "考えようによっては"],
    },
  ],
  check: {
    type: "fill",
    prompt: { ja: "", en: "Choose the expression from the box that fills each blank." },
    bank: ["からある", "にかかわる", "にあって", "ようによっては"],
    items: [
      { q: "{短|たん}時間の勉強でも、やり＿＿、{成果|せいか}が上げられるはずだ。", answer: "ようによっては", en: "Even with a short time of study, you should be able to get results depending on how you go about it." },
      { q: "情報化が進む現代＿＿、いかに個人情報を守るかは大切な{課題|かだい}の1つとなっている。", answer: "にあって", en: "In the present age, as the information society advances, how to protect personal information has become one of the important issues." },
      { q: "その犬は200km＿＿長い道のりを旅して、{飼|か}い{主|ぬし}のもとへたどり着いた。", answer: "からある", en: "The dog traveled a long way of a good 200 km and made it back to its owner." },
      { q: "このスキャンダルは、会社の評判＿＿から、適切な対応が必要です。", answer: "にかかわる", en: "This scandal affects the company's reputation, so it needs to be handled appropriately." },
    ],
  },
});
