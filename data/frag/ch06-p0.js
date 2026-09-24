N2F({
  ch: 6,
  part: 0,
  head: {
    genre: { ja: "友達{同士|どうし}の会話", en: "A Conversation with a Friend" },
    title: { ja: "{苦労|くろう}した5年間", en: "A Tough Five Years" },
    canDo: [
      { ja: "自分の困った{状況|じょうきょう}、気持ちを友達に説明できる。", en: "Explain a problematic situation or feeling you have to a friend." },
      { ja: "友達の{状況|じょうきょう}に{共感|きょうかん}して{励|はげ}ますことができる。", en: "Sympathize with a friend's situation and offer encouragement." },
    ],
  },
  label: "(1)",
  sample: {
    kind: "dialogue",
    lines: [
      { sp: "{渡辺|わたなべ}", v: "f", ja: "とうとう明日ね。初めてのプレゼン。", en: "So tomorrow's finally the day. Your first presentation." },
      { sp: "{木山|きやま}", v: "m", ja: "うん。会社に入って5年、{経験|けいけん}がなかった**ばかりに**{苦労|くろう}したよ。でも、自分の{夢|ゆめ}をあきらめる**ことはない**って{君|きみ}が言ってくれたから。", en: "Yeah. Five years since I joined the company, and I had a hard time just because I had no experience. But you told me there was no need to give up on my dream." },
      { sp: "渡辺", v: "f", ja: "ほんとに大変そうだったけどね。", en: "It really did look tough, though." },
      { sp: "木山", v: "m", ja: "初めは{同期|どうき}の人**に{比|くら}べて**、{知識|ちしき}も{技術|ぎじゅつ}も足りなかったからね。", en: "At first I was short on both knowledge and skills compared with the people who joined the same year as me." },
      { sp: "渡辺", v: "f", ja: "そう。", en: "Right." },
      { sp: "木山", v: "m", ja: "部長に何度もやり直しさせられたけど、{負|ま}ける**ものか**と思って、がんばってきたんだ。", en: "The department head made me redo things over and over, but I kept at it, thinking, \"I'm not going to lose!\"" },
      { sp: "渡辺", v: "f", ja: "部長は、1日も早くあなたにプロの仕事ができるようになってほしかったのよ。それが{上司|じょうし}**というものよ**。", en: "The department head wanted you to be able to do professional-level work as soon as possible. That's what a boss is like." },
    ],
  },
  points: [
    {
      no: 48,
      pattern: "〜ばかりに",
      phrase: "{経験|けいけん}がなかった**ばかりに**",
      stars: 2,
      marks: ["regret"],
      usage: {
        ja: "「〜ばかりに」は、「〜だけが{原因|げんいん}で（悪い{結果|けっか}になってしまって{残念|ざんねん}だ）」と言いたいときに使う。",
        en: "Use \"〜ばかりに\" when you want to say \"(it's unfortunate that things turned out badly) just because of 〜\".",
      },
      forms: ["[Pl] + ばかりに\n［[なA~~だ~~]な　[N~~だ~~]な］"],
      formNotes: [
        { ja: "「[なA]／[N] である + ばかりに」の形もある。", en: "The form なA／N + である + ばかりに also exists." },
      ],
      examples: [
        { ja: "本当のことを言ったばかりに、彼を{怒|おこ}らせてしまった。", en: "Just because I told the truth, I ended up making him angry." },
        { ja: "{背|せ}が2センチ足りないばかりに、{警察官|けいさつかん}になれなかった。", en: "Just because I was two centimeters too short, I couldn't become a police officer." },
        { ja: "今年のリンゴは{台風|たいふう}で{傷|きず}がついたばかりに、{市場|しじょう}{価値|かち}が下がってしまった。", en: "This year's apples got damaged by the typhoon, and because of that alone their market value dropped." },
        { ja: "彼は両親が有名人であるばかりに、いつもからかわれてかわいそうだ。", en: "Just because his parents are celebrities, he's always teased. I feel sorry for him." },
      ],
      deepDive:
        "**〜ばかりに** means *simply because ~ / all because ~*, and the result is **always negative or regrettable**. ばかり carries its core meaning of *only*: the speaker singles out one cause and laments that this one thing led to a bad outcome. There is a strong feeling of *if only that hadn't been the case…*\n\n" +
        "Connection: plain forms. With な-adjectives and nouns, だ becomes な (正直なばかりに, 学生なばかりに), and the more formal **である** is common: 社長の娘であるばかりに.\n\n" +
        "Things to watch:\n- The second half must be a bad result. ✗よく勉強したばかりに合格した is wrong — for a good result use おかげで or から.\n- The second half is usually a fact that already happened (past tense) or a habitual situation. You can't put a request, intention or command after it: ✗雨が降ったばかりに、家にいよう.\n- A very common set phrase is **V-たいばかりに** *just because one wanted to ~* (often with a sacrifice): 彼女に会いたいばかりに、毎日その店に通った.\n\n" +
        "Don't confuse it with:\n- **V-たばかり** (N3) *just did ~*: 入社したばかりだ.\n- **〜ばかりだ** (#115) *keeps getting (worse)*: 悪くなるばかりだ.\n- **〜せいで** — also a cause of a bad result, but it blames someone/something; ばかりに adds regret that such a small thing mattered.\n\n" +
        "JLPT tip: if the first half is a small or single cause and the second half ends in 〜てしまった / できなかった, ばかりに is the natural answer.",
      see: [115],
      index: ["Plばかりに", "〜であるばかりに", "Vたいばかりに"],
      xref: "☞ p.224　〜ばかり",
      practice: [
        {
          type: "choice",
          labels: "ab",
          prompt: { ja: "", en: "Choose the correct option." },
          items: [
            { q: "けがをして入院したばかりに、（　）。", options: ["{親友|しんゆう}の{結婚式|けっこんしき}に出られなかった", "{治療|ちりょう}を受けて元気になった"], answer: 0, en: "Just because I got injured and was hospitalized, I couldn't attend my best friend's wedding." },
            { q: "フリーマーケットに{出店|しゅってん}したが、{途中|とちゅう}で雨が降ってきたばかりに、（　）。", options: ["すぐうちへ帰った", "たくさん{売|う}れ{残|のこ}ってしまった"], answer: 1, en: "I set up a stall at the flea market, but just because it started raining partway through, a lot of things went unsold." },
            { q: "{課長|かちょう}と部長の{仲|なか}が悪いばかりに、（　）。", options: ["仕事がしにくい", "{仲|なか}よくしてほしいものだ"], answer: 0, en: "Just because the section chief and the department head don't get along, it's hard to get work done." },
            { q: "{審判|しんぱん}に{抗議|こうぎ}したばかりに、（　）。", options: ["{退場|たいじょう}させられてしまった", "{審判|しんぱん}に{謝|あやま}ってしまった"], answer: 0, en: "Just because he protested to the referee, he got sent off." },
          ],
        },
      ],
    },
    {
      no: 49,
      pattern: "〜ことはない",
      phrase: "あきらめる**ことはない**",
      stars: 3,
      marks: [],
      usage: {
        ja: "「〜ことはない」は、「〜する{必要|ひつよう}はない・〜しなくてもいい」と言いたいときに使う。アドバイスに使うことが多い。",
        en: "Use \"〜ことはない\" when you want to say \"there's no need to do 〜; you don't have to do 〜\". It is often used to give advice.",
      },
      forms: ["[V-る] + ことはない", "[V-る] + こともない"],
      examples: [
        { ja: "{君|きみ}が{謝|あやま}ることはないよ。悪いのは{向|む}こうなんだから。", en: "There's no need for you to apologize. They're the ones in the wrong." },
        { ja: "{虫|むし}に{刺|さ}されたくらいで病院に行くことはないよ。2、3日で治るから。", en: "There's no need to go to the hospital just for an insect bite. It'll heal in two or three days." },
        { ja: "A：{先輩|せんぱい}、{面接|めんせつ}に行くのに、かばんやコートも買わなきゃいけませんか。\nB：わざわざ買うことはないよ。{普段|ふだん}は使わないんだから、とりあえずぼくのを使ったら？", en: "A: For the interview, do I have to buy a bag and a coat too?\nB: No need to go out of your way to buy them. You won't use them normally, so why not just use mine for now?" },
      ],
      deepDive:
        "**V-る + ことはない** literally says *there is no such thing as doing ~* → *there's no need to ~*. It's typically said **to someone else** to reassure them or advise them not to bother: 心配することはないよ *no need to worry*. With わざわざ (*going out of your way*) and そんなに it becomes especially natural: わざわざ買うことはない.\n\n" +
        "Register: the plain form ことはない is fine among friends; in polite speech use ことはありません. The variant **こともない** adds も (*even*) — *there isn't even any need to ~* — and sounds a bit softer.\n\n" +
        "Don't mix it up with look-alikes in the こと family:\n- **V-たことがない** = *have never done* (experience). 謝ることはない (*no need to apologize*) vs 謝ったことがない (*have never apologized*). Note は vs が and the tense.\n- **〜ないことはない** (#54) = *it's not that ~ not* (a hedged yes). Double negative!\n- **〜ことだ** (#87) = *you should ~* (advice to DO something). ことはない is advice NOT to do something.\n- **〜までもない** = *it goes without saying / no need to go as far as*; close in meaning but more formal.\n\n" +
        "Common mistake: using it about yourself as a statement of fact. ことはない is about necessity, so 私は明日行くことはない sounds like *there's no need for me to go* — fine — but not *I won't go*.\n\n" +
        "JLPT tip: look for a reassuring context (大丈夫だから, 〜んだから) before or after the blank.",
      see: [8, 20, 40, 42, 54, 62, 87, 110, 119],
      index: ["Vることはない", "Vこともない", "〜ことはありません"],
      xref: "☞ p.221　〜こと",
      practice: [
        {
          type: "match",
          prompt: { ja: "", en: "Match each beginning (1–4) with the correct ending (a–d)." },
          left: [
            "今回のけがはそんなに{心配|しんぱい}することはありませんよ。",
            "インターネットで会議をすれば出張することはないだろう。",
            "わざわざノートを貸してあげることはないよ。",
            "{遊園地|ゆうえんち}にお{弁当|べんとう}を持っていくことはないんじゃない？",
          ],
          right: [
            "{売店|ばいてん}で何でも売っているんだから。",
            "サボって遊びに行ったんだから、自分で調べればいいんだよ。",
            "ただのねんざで、{骨|ほね}は{折|お}れていませんから。",
            "そうすれば、時間も{経費|けいひ}も{節約|せつやく}できるよ。",
          ],
          answer: [2, 3, 1, 0],
          en: [
            "There's no need to worry so much about this injury. It's just a sprain; no bones are broken.",
            "If we hold the meeting over the internet, there'll probably be no need to go on a business trip. That way we can save both time and expenses.",
            "There's no need to go out of your way to lend him your notes. He skipped class to go have fun, so he should look it up himself.",
            "Isn't there no need to bring a packed lunch to the amusement park? They sell everything at the stalls.",
          ],
        },
      ],
    },
    {
      no: 50,
      pattern: "〜に{比|くら}べて",
      phrase: "{同期|どうき}の人**に{比|くら}べて**",
      stars: 2,
      marks: [],
      usage: {
        ja: "「〜に{比|くら}べて」は、「〜より」と同じ意味で、2つ以上のものを{比較|ひかく}し、{程度|ていど}の違いを言いたいときに使う。",
        en: "Use \"〜に{比|くら}べて\" when you want to compare two or more things and say how much they differ. It has the same meaning as \"〜より\".",
      },
      forms: ["[N] + に{比|くら}べて"],
      examples: [
        { ja: "いちごはレモンに{比|くら}べて、ビタミンＣが多いんだって。ほんとかな？", en: "I heard strawberries have more vitamin C than lemons. I wonder if that's true." },
        { ja: "どこの国でも{田舎|いなか}の人は{都会|とかい}の人に{比|くら}べて、{親切|しんせつ}で{世話|せわ}{好|ず}きな人が多いという{印象|いんしょう}がある。", en: "I have the impression that in every country, compared with city people, more country people are kind and like to look after others." },
        { ja: "日本では冬は夏に{比|くら}べ、2時間以上{日照|にっしょう}時間が短い。", en: "In Japan, hours of sunshine are more than two hours shorter in winter than in summer." },
      ],
      deepDive:
        "**〜に比べて** (比べる *to compare*) = *compared with ~*. It works like より but sounds a little more deliberate and is common in both speech and writing. Aに比べて、Bは… sets up A as the standard and then describes how B differs: 去年に比べて、今年は暖かい = 今年は去年より暖かい.\n\n" +
        "Variants:\n- **に比べ** — the written, clause-linking form: 前年に比べ、売上が10%増加した.\n- **と比べて** — almost the same; と feels like a mutual comparison, に like measuring against a standard.\n- **V-るのに比べて** — compare actions: 電車で行くのに比べて….\n- **〜に比べると** — a little softer, often in speech.\n\n" +
        "The second half should express a **difference in degree** (more/less, higher/lower, easier/harder). It can't be used for simple differences in kind without degree.\n\n" +
        "Contrast with two particles often offered as distractors:\n- **〜に対して** — *toward / against* (an attitude or action directed at someone): 住民は計画に対して反対している. It also has a contrast use (*whereas*), but not a comparison of degree with a standard.\n- **〜によって** — *depending on / by means of*: 地域によって習慣が違う. It says results vary across cases, not that one thing is more than another.\n\n" +
        "JLPT tip: if you see a comparative word (多い, 少ない, 高い, 〜くなった) in the second half and a time or thing as the standard, に比べて is the answer.",
      see: [],
      index: ["Nに比べて", "Nに比べ", "Nと比べて", "Vのに比べて", "〜に比べると"],
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the correct option." },
          items: [
            { q: "日本は私の国（　）おしゃれな人が多いように思います。", options: ["に{比|くら}べて", "に対して", "によって"], answer: 0, en: "I think there are more fashionable people in Japan than in my country." },
            { q: "私の国は日本（　）{技術|ぎじゅつ}{援助|えんじょ}を{要請|ようせい}している。", options: ["に{比|くら}べて", "に対して", "によって"], answer: 1, en: "My country is requesting technical assistance from Japan." },
            { q: "今年は去年（　）{庭|にわ}の{桜|さくら}の花が少ない気がする。", options: ["に{比|くら}べて", "に対して", "によって"], answer: 0, en: "I feel there are fewer cherry blossoms in the garden this year than last year." },
            { q: "日本では{季節|きせつ}（　）{咲|さ}く花の{種類|しゅるい}が{大|おお}きく変わる。", options: ["に{比|くら}べて", "に対して", "によって"], answer: 2, en: "In Japan, the kinds of flowers that bloom change greatly depending on the season." },
          ],
        },
      ],
    },
    {
      no: 51,
      pattern: "〜ものか",
      phrase: "負ける**ものか**",
      stars: 2,
      marks: [],
      usage: {
        ja: "「〜ものか」は、{独|ひと}り{言|ごと}などで、「{決|けっ}して〜しない」と自分の気持ちを強く言いたいときに使う。相手の言ったことを、「{絶対|ぜったい}〜ではない・〜は違う」と否定するときにも使う。話し言葉では「〜もんか」「〜もんですか」を使う。",
        en: "Use \"〜ものか\" when you want to strongly state, to yourself or someone else, a feeling you have that \"it's definitely not 〜\". You can also use it to refute what another person has said, as in \"it's absolutely not 〜; 〜 is wrong.\" In colloquial speech use \"〜もんか\" or \"〜もんですか\".",
      },
      forms: ["[V-る]／[いA]／[なA] な／[N] な + ものか／もんか", "[V-る]／[いA]／[なA] な／[N] な + ものですか／もんですか"],
      examples: [
        { ja: "こんなサービスの悪い店には二度と来るもんか。", en: "I'm never coming back to a shop with such bad service." },
        { ja: "会社が{業績|ぎょうせき}{不振|ふしん}で{給料|きゅうりょう}が30%カットされるなんて、そんなばかなことがあるものか。", en: "Our salaries cut by 30% because the company's business is doing poorly? That's absurd!" },
        { ja: "A：ちゃんと{断|ことわ}ったから、もう金貸してくれなんて言ってこないよね。\nB：一度{断|ことわ}られたぐらいで、あいつがあきらめるものか。きっとまた来るに決まってるよ。", en: "A: I turned him down properly, so he won't come asking me to lend him money again, right?\nB: As if that guy would give up just because he got turned down once. He's bound to come again." },
        { ja: "A：本当ですか。そんな話とても信じられませんよ。\nB：本当ですよ。うそなんかつくもんですか。", en: "A: Really? I just can't believe a story like that.\nB: It's true. Why would I lie?" },
        { ja: "A：今度のアルバイト、それを{袋|ふくろ}に入れるだけ？　楽そうね。\nB：楽なもんか。1日に何千個も入れるんだよ。", en: "A: Your new part-time job is just putting those into bags? Sounds easy.\nB: Easy? No way. I have to bag thousands of them a day." },
      ],
      deepDive: "**〜ものか** is a *rhetorical question* used as a strong negative: *would I ever ~? — of course not!* 負けるものか = *am I going to lose? — never!* It is pronounced with a falling intonation, not a rising question intonation.\n\nTwo main uses:\n- **Determination** (often muttered to oneself): 二度と来るものか *I'm never coming back*, 負けるもんか *I won't lose*.\n- **Flat rejection** of what someone just said, often repeating their word: A: 楽でしょう？ B: 楽なもんか *Easy? Not a chance.*\n\nForms and register:\n- **もんか** is the colloquial version, very common among friends.\n- **ものですか / もんですか** are the polite versions; ものですか in particular often sounds feminine.\n- Connection: な-adjectives and nouns take **な**: 静かなものか, 天才なもんか. Don't say ✗天才だもんか.\n\nRelated patterns:\n- **〜もん** (#56) (*because*, an excuse) — no か, completely different meaning.\n- **〜ものではない** (#46) — *one shouldn't ~* (social advice), not personal refusal.\n- **〜わけがない** — *there's no way that ~*; objective reasoning. ものか is emotional and subjective.\n- **V-るまい** (#93) — written, *I will never ~*.\n\nCommon mistake: using ものか to politely decline to a superior. It is emotional and can sound rude; 部長の誘いを断るもんか would mean *as if I'd refuse!*. Use it with care.",
      see: [13, 25, 39, 46, 52, 56, 92, 122, 132],
      index: ["〜ものか", "〜もんか", "〜ものですか", "〜もんですか"],
      xref: "☞ p.224　〜もの／もん",
      practice: [
        {
          type: "choice",
          labels: "abc",
          prompt: { ja: "", en: "Choose the phrase from the box (a–c) that fills each blank." },
          items: [
            { q: "A：そんなにがっかりしないで、元気出せよ。またいい人に{出会|であ}うチャンスもあるよ。\nB：{失恋|しつれん}のつらさは、（　）。", options: ["お父さんの言うことなんか、聞くもんか","どんなにくやしくたって、泣くものかっていう気持ちはないのかね","{経験|けいけん}のないお前にわかるものか"], answer: 2, en: "A: Don't be so down, cheer up. You'll have other chances to meet someone nice.\nB: How could someone with no experience like you understand the pain of heartbreak?" },
            { q: "A：どうして言う通りにしないんだ。\nB：ぼくの気持ちをわかってくれないなら、（　）。", options: ["お父さんの言うことなんか、聞くもんか","どんなにくやしくたって、泣くものかっていう気持ちはないのかね","{経験|けいけん}のないお前にわかるものか"], answer: 0, en: "A: Why won't you do as I say?\nB: If you won't understand how I feel, I'm not going to listen to anything you say, Dad." },
            { q: "A：{新人|しんじん}の{木村|きむら}、男のくせにちょっとしかっただけですぐ{泣|な}くんですよ。\nB：{情|なさ}けない。（　）。", options: ["お父さんの言うことなんか、聞くもんか","どんなにくやしくたって、泣くものかっていう気持ちはないのかね","{経験|けいけん}のないお前にわかるものか"], answer: 1, en: "A: Kimura, the new guy, bursts into tears the moment I scold him even a little, even though he's a man.\nB: How pathetic. Doesn't he have the attitude of \"I won't cry, no matter how frustrated I am\"?" },
          ],
        },
      ],
    },
    {
      no: 52,
      pattern: "〜というものだ",
      phrase: "それが{上司|じょうし}**というものよ**",
      stars: 1,
      marks: [],
      usage: {
        ja: "{話者|わしゃ}の考えを、{個人的|こじんてき}な意見ではなく{一般的|いっぱんてき}にそうだと言いたいときに使う。",
        en: "Use this when you want to say you think that \"this isn't what I think, but generally it's like this.\"",
      },
      forms: ["[N] + というものだ"],
      formNotes: [
        { ja: "[Pl]［[なA~~だ~~]］の場合もある。", en: "Plain forms (with なA dropping だ) are also possible." },
      ],
      examples: [
        { ja: "A：先生、{山下|やました}君のせいで私たちのグループだけ、作品が{完成|かんせい}していないんです。\nB：困ったときに助け合うのが友達というものだろ。手伝ってあげなさい。", en: "A: Sir, because of Yamashita, our group is the only one whose piece isn't finished.\nB: Helping each other when you're in trouble — that's what friends are for, isn't it? Go and help him." },
        { ja: "A：日本チーム、{優勝|ゆうしょう}できますよね。\nB：{優勝|ゆうしょう}!?　それは{期待|きたい}しすぎというものだろう。", en: "A: The Japanese team can win the championship, right?\nB: The championship!? That's expecting too much." },
        { ja: "{貧|まず}しくても家族が{仲|なか}よく{暮|く}らせるのが{幸|しあわ}せというものですよ。", en: "Being able to live together happily as a family, even if you're poor — that's what happiness is." },
        { ja: "私が社長を{批判|ひはん}したなんて、とんでもない。それは{誤解|ごかい}というものですよ。", en: "Me, criticizing the president? Absolutely not. That's a misunderstanding." },
        { ja: "どんなに大変な仕事でも、人の役に立つと思えばがんばれるというものだ。", en: "No matter how hard the job, if you think it helps people, you can keep going." },
      ],
      deepDive: "**〜というものだ** presents a statement as **common sense or the nature of things**, not just the speaker's view. それが人生というものだ = *that's life (that's how life is)*. The speaker steps back and speaks as if quoting a general truth.\n\nTypical shapes:\n- **それが N というものだ** — after describing something, sum it up: 助け合う。それが家族というものだ.\n- **それは 〜というものだ** — a critical judgment: それはわがままというものだ *that's just selfish*, それは期待しすぎというものだろう *that's expecting too much*. This use often follows なんて (*such a thing as*).\n\nThe softened versions **というものだろう / というものでしょう** are very common, especially when advising someone.\n\nConnection: usually a noun, but plain forms also appear (早すぎるというものだ), and な-adjectives drop だ (無理というもの, 失礼というもの).\n\nDon't confuse it with:\n- **〜というものではない** (#25) — *it's not (necessarily) the case that ~*: 高ければいいというものではない. The negative is a separate pattern with a different meaning.\n- **〜ものだ** (#13) — *by nature ~ / one should ~*: 子どもは親に反抗するものだ. Similar ‘general truth’ flavour, but attaches to verbs/adjectives directly without という.\n- **Nというものは** — *~ as such* (topic): 時間というものは大切だ.\n\nRegister: neutral; among friends women often say 〜というものよ, men 〜というもんだ.",
      see: [13, 25, 39, 46, 51, 56, 92, 122, 132],
      index: ["Nというものだ", "Plというものだ", "それがNというものだ", "〜というものでしょう"],
      xref: "☞ p.224　〜もの／もん",
      practice: [],
    },
  ],
  check: {
    type: "fill",
    prompt: { ja: "", en: "Choose the word that fills each blank from the box." },
    bank: ["ことはない", "ばかりに", "に{比|くら}べ", "ものか", "というものだ"],
    items: [
      { q: "今年は{例年|れいねん}＿＿雨が少ないので、{水不足|みずぶそく}が{心配|しんぱい}だ。", answer: "に{比|くら}べ", en: "There's been less rain this year than in an average year, so I'm worried about a water shortage." },
      { q: "A：毎日部長にしかられているおれの気持ちなんて{誰|だれ}にもわかる＿＿。\nB：気にする＿＿よ。部長は最近{機嫌|きげん}が悪いだけなんだから。", answer: ["ものか", "ことはない"], en: "A: Nobody could possibly understand how I feel, getting scolded by the department head every day.\nB: There's no need to let it bother you. He's just been in a bad mood lately." },
      { q: "いいときもあるし、悪いときもある。それが人生＿＿。", answer: "というものだ", en: "There are good times and bad times. That's life." },
      { q: "12月26日に生まれた＿＿バースデーケーキはいつも{売|う}れ{残|のこ}りのクリスマスケーキだった。", answer: "ばかりに", en: "Just because I was born on December 26, my birthday cake was always a leftover Christmas cake." },
    ],
  },
});
