N2.register({
  id: 6,
  genre: { ja: "{友達|ともだち}{同士|どうし}の{会話|かいわ}", en: "A Conversation with a Friend" },
  title: { ja: "{苦労|くろう}した5{年間|ねんかん}", en: "A Tough Five Years" },
  canDo: [
    { ja: "{自分|じぶん}の{困|こま}った{状況|じょうきょう}、{気持|きも}ちを{友達|ともだち}に{説明|せつめい}できる。", en: "Explain to a friend a difficult situation you are in or how you feel." },
    { ja: "{友達|ともだち}の{状況|じょうきょう}に{共感|きょうかん}して{励|はげ}ますことができる。", en: "Sympathize with a friend's situation and offer encouragement." },
    { ja: "{自分|じぶん}の{状況|じょうきょう}や{決意|けつい}したことを{友達|ともだち}に{話|はな}せる。", en: "Tell a friend about your situation or what you have resolved to do." },
  ],
  parts: [
    {
      label: "(1)",
      canDo: [
        { ja: "{自分|じぶん}の{困|こま}った{状況|じょうきょう}、{気持|きも}ちを{友達|ともだち}に{説明|せつめい}できる。", en: "Explain to a friend a difficult situation you are in or how you feel." },
        { ja: "{友達|ともだち}の{状況|じょうきょう}に{共感|きょうかん}して{励|はげ}ますことができる。", en: "Sympathize with a friend's situation and offer encouragement." },
      ],
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{美咲|みさき}", v: "f", ja: "いよいよ{明日|あした}だね。{健太|けんた}が{開発|かいはつ}したお{菓子|かし}の{発売日|はつばいび}。", en: "So tomorrow's finally the day — the release of the snack you developed, Kenta." },
          { sp: "{健太|けんた}", v: "m", ja: "うん。{開発部|かいはつぶ}に{来|き}て5{年|ねん}。{化学|かがく}の{知識|ちしき}がなかった**ばかりに**、{最初|さいしょ}はずいぶん{恥|はじ}をかいたよ。でも、「{文系|ぶんけい}だからって{引|ひ}け{目|め}を{感|かん}じる**ことはない**」って{美咲|みさき}が{言|い}ってくれたからさ。", en: "Yeah. Five years since I joined the development department. Just because I didn't know any chemistry, I embarrassed myself a lot at first. But you told me, “There's no need to feel inferior just because you studied humanities.”" },
          { sp: "{美咲|みさき}", v: "f", ja: "あのころは、よく{落|お}ち{込|こ}んでたよね。", en: "You used to get really down back then, didn't you." },
          { sp: "{健太|けんた}", v: "m", ja: "{大学|だいがく}で{化学|かがく}を{勉強|べんきょう}してきた{同期|どうき}**に{比|くら}べて**、{覚|おぼ}えることが{山|やま}ほどあったからね。", en: "Compared with the people who joined with me, who'd studied chemistry at university, I had a mountain of things to learn." },
          { sp: "{美咲|みさき}", v: "f", ja: "そうだったね。", en: "That's right." },
          { sp: "{健太|けんた}", v: "m", ja: "{試作品|しさくひん}を{出|だ}すたびに、{山口|やまぐち}さんに「これじゃ{売|う}れない」って{言|い}われてさ。でも、「このまま{終|お}わる**もんか**」って、{毎晩|まいばん}{勉強|べんきょう}したんだ。", en: "Every time I handed in a prototype, Ms. Yamaguchi would say, “This won't sell.” But I told myself, “I'm not going to end like this,” and studied every night." },
          { sp: "{美咲|みさき}", v: "f", ja: "{山口|やまぐち}さん、{口|くち}では{厳|きび}しくても、ちゃんと{健太|けんた}のこと{見|み}てたんだと{思|おも}うよ。{期待|きたい}してる{後輩|こうはい}ほど{厳|きび}しくする。それが{先輩|せんぱい}**というもの**でしょ。", en: "Even if Ms. Yamaguchi was harsh in what she said, I think she was really keeping an eye on you. The more you expect of a junior, the stricter you are with them. That's what being a senior is all about, isn't it?" },
        ],
      },
      points: [
        {
          no: 48,
          pattern: "〜ばかりに",
          phrase: "{知識|ちしき}がなかった**ばかりに**",
          stars: 2,
          marks: ["regret"],
          usage: {
            ja: "「ただ〜ということだけが{原因|げんいん}で、{悪|わる}い{結果|けっか}になってしまった。{残念|ざんねん}だ」という{気持|きも}ちを{表|あらわ}すときに{使|つか}う。",
            en: "Used to express “simply because of ~ (and nothing else), things turned out badly — what a pity.” The single cause led to an unfortunate result.",
          },
          forms: ["[Pl] + ばかりに", "[なA~~だ~~] な + ばかりに", "[N~~だ~~] な + ばかりに"],
          formNotes: [
            {
              ja: "「[なA]／[N] である + ばかりに」の{形|かたち}もある。",
              en: "The form “な-adjective / noun + である + ばかりに” is also used.",
            },
          ],
          examples: [
            { ja: "{新人|しんじん}のころ、{敬語|けいご}をうまく{使|つか}えなかった**ばかりに**、お{客様|きゃくさま}を{怒|おこ}らせてしまった。", en: "When I was new, I made a customer angry just because I couldn't use honorific language properly." },
            { ja: "{目覚|めざ}まし{時計|どけい}の{電池|でんち}が{切|き}れていた**ばかりに**、{大事|だいじ}な{試験|しけん}に{遅刻|ちこく}した。", en: "All because the battery in my alarm clock had died, I was late for an important exam." },
            { ja: "{兄|あに}は{正直|しょうじき}な**ばかりに**、{損|そん}をすることが{多|おお}い。", en: "My brother often loses out simply because he's so honest." },
            { ja: "{彼女|かのじょ}は{社長|しゃちょう}の{娘|むすめ}である**ばかりに**、{実力|じつりょく}で{評価|ひょうか}してもらえないと{悩|なや}んでいる。", en: "She worries that, just because she's the president's daughter, people won't judge her on her ability." },
            { ja: "{一言|ひとこと}{多|おお}かった**ばかりに**、{友達|ともだち}と{気|き}まずくなってしまった。", en: "Just because I said one word too many, things got awkward with my friend." },
          ],
          deepDive:
            "**〜ばかりに** means *simply because ~ / all because ~*, and the result is **always negative or regrettable**. ばかり carries its core meaning of *only*: the speaker singles out one cause and laments that this one thing led to a bad outcome. There is a strong feeling of *if only that hadn't been the case…*\n\n" +
            "Connection: plain forms. With な-adjectives and nouns, だ becomes な (正直なばかりに, 学生なばかりに), and the more formal **である** is common: 社長の娘であるばかりに.\n\n" +
            "Things to watch:\n" +
            "- The second half must be a bad result. ✗よく勉強したばかりに合格した is wrong — for a good result use おかげで or から.\n" +
            "- The second half is usually a fact that already happened (past tense) or a habitual situation. You can't put a request, intention or command after it: ✗雨が降ったばかりに、家にいよう.\n" +
            "- A very common set phrase is **V-たいばかりに** *just because one wanted to ~* (often with a sacrifice): 彼女に会いたいばかりに、毎日その店に通った.\n\n" +
            "Don't confuse it with:\n" +
            "- **V-たばかり** (N3) *just did ~*: 入社したばかりだ.\n" +
            "- **〜ばかりだ** (#115) *keeps getting (worse)*: 悪くなるばかりだ.\n" +
            "- **〜せいで** — also a cause of a bad result, but it blames someone/something; ばかりに adds regret that such a small thing mattered.\n\n" +
            "JLPT tip: if the first half is a small or single cause and the second half ends in 〜てしまった / できなかった, ばかりに is the natural answer.",
          see: [115],
          index: ["Plばかりに", "〜であるばかりに", "Vたいばかりに"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{地図|ちず}アプリだけを{信|しん}じた**ばかりに**、（　）。", options: ["{山|やま}の{中|なか}で{道|みち}に{迷|まよ}ってしまった", "{予定|よてい}より{早|はや}く{目的地|もくてきち}に{着|つ}けた"], answer: 0, en: "All because I trusted only the map app, I got lost in the mountains." },
                { q: "{試験|しけん}の{前|まえ}の{晩|ばん}に{夜|よ}ふかしをした**ばかりに**、（　）。", options: ["{朝|あさ}すっきり{目|め}が{覚|さ}めた", "{試験中|しけんちゅう}に{眠|ねむ}くなってしまった"], answer: 1, en: "Just because I stayed up late the night before the exam, I got sleepy during it." },
                { q: "{有名|ゆうめい}な{歌手|かしゅ}と{同|おな}じ{名前|なまえ}な**ばかりに**、（　）。", options: ["{自己紹介|じこしょうかい}のたびにからかわれる", "{歌手|かしゅ}のサインがもらえてうれしい"], answer: 0, en: "Just because I have the same name as a famous singer, I get teased every time I introduce myself." },
                { q: "{会議|かいぎ}で{一言|ひとこと}{余計|よけい}なことを{言|い}った**ばかりに**、（　）。", options: ["{新|あたら}しい{企画|きかく}が{通|とお}った", "{面倒|めんどう}な{仕事|しごと}を{任|まか}されてしまった"], answer: 1, en: "All because I said one unnecessary thing in the meeting, I got stuck with a troublesome job.", why: { en: "ばかりに must be followed by a bad result. 企画が通った is a good outcome." } },
              ],
            },
          ],
        },
        {
          no: 49,
          pattern: "〜ことはない",
          phrase: "{引|ひ}け{目|め}を{感|かん}じる**ことはない**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜する{必要|ひつよう}はない」「〜しなくてもいい」と{言|い}いたいときに{使|つか}う。アドバイスに{使|つか}うことが{多|おお}い。",
            en: "Used to say “there's no need to ~ / you don't have to ~”. It is often used when giving advice.",
          },
          forms: ["[V-る] + ことはない", "[V-る] + こともない"],
          examples: [
            { ja: "まだ{時間|じかん}は{十分|じゅうぶん}あるから、そんなに{急|いそ}ぐ**ことはない**よ。", en: "There's still plenty of time, so there's no need to rush like that." },
            { ja: "{一度|いちど}{落|お}ちたぐらいで、{夢|ゆめ}をあきらめる**ことはない**。{来年|らいねん}また{受|う}ければいい。", en: "No need to give up your dream just because you failed once. You can just take it again next year." },
            { ja: "{他人|たにん}の{評価|ひょうか}なんて、いちいち{気|き}にする**ことはない**よ。", en: "You don't have to worry about every little thing other people think of you." },
            { ja: "{資料|しりょう}はメールでお{送|おく}りしますので、わざわざ{取|と}りにいらっしゃる**ことはありません**。", en: "We'll send the documents by email, so there's no need for you to come all the way to pick them up." },
            { ja: "{駅|えき}に{着|つ}いたら{電話|でんわ}して。{雨|あめ}の{中|なか}を{歩|ある}いてくる**こともない**よ。{車|くるま}で{迎|むか}えに{行|い}くから。", en: "Call me when you get to the station. There's no need to walk here in the rain — I'll come and pick you up by car." },
          ],
          deepDive:
            "**V-る + ことはない** literally says *there is no such thing as doing ~* → *there's no need to ~*. It's typically said **to someone else** to reassure them or advise them not to bother: 心配することはないよ *no need to worry*. With わざわざ (*going out of your way*) and そんなに it becomes especially natural: わざわざ買うことはない.\n\n" +
            "Register: the plain form ことはない is fine among friends; in polite speech use ことはありません. The variant **こともない** adds も (*even*) — *there isn't even any need to ~* — and sounds a bit softer.\n\n" +
            "Don't mix it up with look-alikes in the こと family:\n" +
            "- **V-たことがない** = *have never done* (experience). 謝ることはない (*no need to apologize*) vs 謝ったことがない (*have never apologized*). Note は vs が and the tense.\n" +
            "- **〜ないことはない** (#54) = *it's not that ~ not* (a hedged yes). Double negative!\n" +
            "- **〜ことだ** (#87) = *you should ~* (advice to DO something). ことはない is advice NOT to do something.\n" +
            "- **〜までもない** = *it goes without saying / no need to go as far as*; close in meaning but more formal.\n\n" +
            "Common mistake: using it about yourself as a statement of fact. ことはない is about necessity, so 私は明日行くことはない sounds like *there's no need for me to go* — fine — but not *I won't go*.\n\n" +
            "JLPT tip: look for a reassuring context (大丈夫だから, 〜んだから) before or after the blank.",
          see: [8, 20, 40, 42, 54, 62, 87, 110, 119],
          index: ["Vることはない", "Vこともない", "〜ことはありません"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{一回|いっかい}ミスしたぐらいで、そんなに{自分|じぶん}を{責|せ}める**ことはない**よ。",
                "{駅|えき}までなら、タクシーを{呼|よ}ぶ**ことはない**でしょう。",
                "{新|あたら}しい{電子|でんし}{辞書|じしょ}なんて{買|か}う**こともない**よ。",
                "{私|わたし}に{謝|あやま}る**ことはありません**よ。",
              ],
              right: [
                "{使|つか}っていないのが{一台|いちだい}あるから、あげる。",
                "{謝|あやま}るなら、{迷惑|めいわく}をかけたお{客様|きゃくさま}にでしょう。",
                "{誰|だれ}だって{最初|さいしょ}はうまくいかないんだから。",
                "{歩|ある}いても10{分|ぷん}かからないんですから。",
              ],
              answer: [2, 3, 0, 1],
              en: [
                "No need to blame yourself so much just because you made one mistake. Nobody gets it right at first.",
                "There's no need to call a taxi just to the station. It's less than ten minutes on foot.",
                "No need to buy a new electronic dictionary. I've got one I'm not using — I'll give it to you.",
                "You don't need to apologize to me. If you're going to apologize, it should be to the customer you inconvenienced.",
              ],
            },
          ],
        },
        {
          no: 50,
          pattern: "〜に{比|くら}べて",
          phrase: "{同期|どうき}**に{比|くら}べて**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜より」と{同|おな}じ{意味|いみ}で、2つ{以上|いじょう}のものを{比|くら}べて、{程度|ていど}がどう{違|ちが}うかを{言|い}いたいときに{使|つか}う。",
            en: "Means the same as 〜より “compared with ~”. Used to compare two or more things and say how they differ in degree.",
          },
          forms: ["[N] + に{比|くら}べて"],
          examples: [
            { ja: "{今年|ことし}の{冬|ふゆ}は{去年|きょねん}**に{比|くら}べて**、ずいぶん{暖|あたた}かい。", en: "This winter is much warmer than last year." },
            { ja: "{新|あたら}しいスマホは{前|まえ}の{機種|きしゅ}**に{比|くら}べて**、バッテリーが{長|なが}くもつ。", en: "Compared with the previous model, the new smartphone's battery lasts longer." },
            { ja: "{新幹線|しんかんせん}で{行|い}くの**に{比|くら}べて**、{高速|こうそく}バスは{時間|じかん}はかかるが{料金|りょうきん}が{半分|はんぶん}だ。", en: "Compared with going by bullet train, the highway bus takes longer but costs half as much." },
            { ja: "{都市部|としぶ}は{地方|ちほう}**に{比|くら}べ**、{若|わか}い{世代|せだい}の{人口|じんこう}が{多|おお}い。", en: "Urban areas have a larger young population than rural areas." },
            { ja: "{兄|あに}**に{比|くら}べて**、{弟|おとうと}は{人見知|ひとみし}りをしない{性格|せいかく}だ。", en: "Compared with his older brother, the younger brother isn't shy with strangers." },
          ],
          deepDive:
            "**〜に比べて** (比べる *to compare*) = *compared with ~*. It works like より but sounds a little more deliberate and is common in both speech and writing. Aに比べて、Bは… sets up A as the standard and then describes how B differs: 去年に比べて、今年は暖かい = 今年は去年より暖かい.\n\n" +
            "Variants:\n" +
            "- **に比べ** — the written, clause-linking form: 前年に比べ、売上が10%増加した.\n" +
            "- **と比べて** — almost the same; と feels like a mutual comparison, に like measuring against a standard.\n" +
            "- **V-るのに比べて** — compare actions: 電車で行くのに比べて….\n" +
            "- **〜に比べると** — a little softer, often in speech.\n\n" +
            "The second half should express a **difference in degree** (more/less, higher/lower, easier/harder). It can't be used for simple differences in kind without degree.\n\n" +
            "Contrast with two particles often offered as distractors:\n" +
            "- **〜に対して** — *toward / against* (an attitude or action directed at someone): 住民は計画に対して反対している. It also has a contrast use (*whereas*), but not a comparison of degree with a standard.\n" +
            "- **〜によって** — *depending on / by means of*: 地域によって習慣が違う. It says results vary across cases, not that one thing is more than another.\n\n" +
            "JLPT tip: if you see a comparative word (多い, 少ない, 高い, 〜くなった) in the second half and a time or thing as the standard, に比べて is the answer.",
          see: [],
          index: ["Nに比べて", "Nに比べ", "Nと比べて", "Vのに比べて", "〜に比べると"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいものを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{東京|とうきょう}は{大阪|おおさか}（　）、{家賃|やちん}が{高|たか}いと{言|い}われている。", options: ["に比べて", "に対して", "によって"], answer: 0, en: "Tokyo is said to have higher rents than Osaka." },
                { q: "{学生|がくせい}たちは{学校|がっこう}の{新|あたら}しい{規則|きそく}（　）、{強|つよ}く{反対|はんたい}している。", options: ["に比べて", "に対して", "によって"], answer: 1, en: "The students are strongly opposed to the school's new rules.", why: { en: "The rules are the target of the students' opposition, so に対して." } },
                { q: "{同|おな}じレシピでも、{作|つく}る{人|ひと}（　）{味|あじ}がずいぶん{変|か}わる。", options: ["に比べて", "に対して", "によって"], answer: 2, en: "Even with the same recipe, the taste changes a lot depending on who makes it." },
                { q: "{今年|ことし}の{夏|なつ}は{去年|きょねん}（　）、{雨|あめ}の{日|ひ}が{多|おお}かった{気|き}がする。", options: ["に比べて", "に対して", "によって"], answer: 0, en: "I feel there were more rainy days this summer than last year." },
              ],
            },
          ],
        },
        {
          no: 51,
          pattern: "〜ものか",
          phrase: "このまま{終|お}わる**もんか**",
          stars: 2,
          marks: [],
          usage: {
            ja: "{独|ひと}り{言|ごと}などで「{決|けっ}して〜しない」と{自分|じぶん}の{強|つよ}い{気持|きも}ちを{言|い}うときに{使|つか}う。また、{相手|あいて}の{言|い}ったことを「{絶対|ぜったい}に〜ではない」「〜なんて{違|ちが}う」と{強|つよ}く{否定|ひてい}するときにも{使|つか}う。{話|はな}し{言葉|ことば}では「〜もんか」「〜もんですか」になる。",
            en: "Used, often when talking to yourself, to state a strong feeling: “I'll never ~ / no way will I ~”. It is also used to flatly reject what someone else has said: “It's definitely not ~ / that's not true at all.” In casual speech it becomes 〜もんか or 〜もんですか.",
          },
          forms: ["[V-る]／[いA] + ものか／もんか", "[なA] な／[N] な + ものか／もんか", "[V-る]／[いA]／[なA] な／[N] な + ものですか／もんですか"],
          examples: [
            { ja: "{二回|にかい}も{約束|やくそく}を{破|やぶ}られたんだ。あいつの{言|い}うことなんか、もう{信|しん}じる**もんか**。", en: "He's broken his promise twice. I'm never believing anything he says again." },
            { ja: "{今度|こんど}こそ{兄|あに}に{勝|か}ってみせる。{二回|にかい}{続|つづ}けて{負|ま}ける**ものか**。", en: "This time I'll definitely beat my brother. No way am I losing twice in a row." },
            { ja: "A：あの{映画|えいが}、{怖|こわ}かった？\nB：{怖|こわ}い**もんか**。{途中|とちゅう}で{寝|ね}ちゃったよ。", en: "A: Was that film scary?\nB: Scary? Not at all. I fell asleep halfway through." },
            { ja: "A：{一人暮|ひとりぐ}らしって{気楽|きらく}でいいでしょう。\nB：{気楽|きらく}な**もんですか**。{料理|りょうり}も{洗濯|せんたく}も{全部|ぜんぶ}{自分|じぶん}でやらなきゃいけないのよ。", en: "A: Living alone must be nice and carefree.\nB: Carefree? Hardly. I have to do all the cooking and laundry myself." },
            { ja: "A：{彼|かれ}って{天才|てんさい}だね。\nB：{天才|てんさい}な**もんか**。{毎晩|まいばん}{遅|おそ}くまで{練習|れんしゅう}してるんだよ。", en: "A: He's a genius, isn't he?\nB: A genius? No way. He practises until late every night." },
          ],
          deepDive:
            "**〜ものか** is a *rhetorical question* used as a strong negative: *would I ever ~? — of course not!* 負けるものか = *am I going to lose? — never!* It is pronounced with a falling intonation, not a rising question intonation.\n\n" +
            "Two main uses:\n" +
            "- **Determination** (often muttered to oneself): 二度と来るものか *I'm never coming back*, 負けるもんか *I won't lose*.\n" +
            "- **Flat rejection** of what someone just said, often repeating their word: A: 楽でしょう？ B: 楽なもんか *Easy? Not a chance.*\n\n" +
            "Forms and register:\n" +
            "- **もんか** is the colloquial version, very common among friends.\n" +
            "- **ものですか / もんですか** are the polite versions; ものですか in particular often sounds feminine.\n" +
            "- Connection: な-adjectives and nouns take **な**: 静かなものか, 天才なもんか. Don't say ✗天才だもんか.\n\n" +
            "Related patterns:\n" +
            "- **〜もん** (#56) (*because*, an excuse) — no か, completely different meaning.\n" +
            "- **〜ものではない** (#46) — *one shouldn't ~* (social advice), not personal refusal.\n" +
            "- **〜わけがない** — *there's no way that ~*; objective reasoning. ものか is emotional and subjective.\n" +
            "- **V-るまい** (#93) — written, *I will never ~*.\n\n" +
            "Common mistake: using ものか to politely decline to a superior. It is emotional and can sound rude; 部長の誘いを断るもんか would mean *as if I'd refuse!*. Use it with care.",
          see: [13, 25, 39, 46, 52, 56, 92, 122, 132],
          index: ["〜ものか", "〜もんか", "〜ものですか", "〜もんですか"],
          practice: [
            {
              type: "match",
              prompt: { ja: "（　）に{入|はい}るものを{選|えら}びなさい。", en: "Choose what goes in each ( )." },
              left: [
                "A：{部長|ぶちょう}にあんなにひどいことを{言|い}われて、まだあの{会社|かいしゃ}で{働|はたら}くの？\nB：{当|あ}たり{前|まえ}だよ。（　）。",
                "A：{店員|てんいん}さんが「すごくお{似合|にあ}いです」って{言|い}ってたから、この{服|ふく}、{買|か}っちゃおうかな。\nB：（　）。{自分|じぶん}の{目|め}で{決|き}めなよ。",
                "A：{高橋|たかはし}さん、{最近|さいきん}{一人|ひとり}でいることが{多|おお}いけど、{寂|さび}しいのかな。\nB：（　）。{一人|ひとり}の{時間|じかん}を{楽|たの}しんでるだけだよ。",
              ],
              right: [
                "あの{人|ひと}が{寂|さび}しいもんか",
                "あんなことぐらいで{辞|や}めるもんか",
                "{店員|てんいん}の「お{似合|にあ}いです」なんて、あてになるもんか",
              ],
              answer: [1, 2, 0],
              en: [
                "A: After the manager said such awful things to you, you're still going to work at that company?\nB: Of course. I'm not quitting over something like that.",
                "A: The shop assistant said it really suits me, so maybe I'll buy this outfit.\nB: A shop assistant's “It suits you!” — as if you can rely on that. Decide with your own eyes.",
                "A: Takahashi's been on her own a lot lately. Maybe she's lonely.\nB: Her, lonely? No way. She's just enjoying some time to herself.",
              ],
            },
          ],
        },
        {
          no: 52,
          pattern: "〜というものだ",
          phrase: "それが{先輩|せんぱい}**というもの**でしょ",
          stars: 1,
          marks: [],
          usage: {
            ja: "{話|はな}し{手|て}の{考|かんが}えを、{個人的|こじんてき}な{意見|いけん}としてではなく、「{一般的|いっぱんてき}にそういうものだ」と{言|い}いたいときに{使|つか}う。",
            en: "Used when the speaker wants to present their view not as a personal opinion but as a general truth: “that's just how ~ is / that's what ~ is all about.”",
          },
          forms: ["[N] + というものだ"],
          formNotes: [
            {
              ja: "[Pl]（[なA~~だ~~]）の{場合|ばあい}もある。",
              en: "Plain forms can also come before it (with な-adjectives, drop だ): 早すぎるというものだ, 無理というものだ.",
            },
          ],
          examples: [
            { ja: "{子|こ}どもは{親|おや}の{思|おも}いどおりには{育|そだ}たない。それが{子育|こそだ}て**というものだ**。", en: "Children don't grow up the way their parents want. That's what raising kids is like." },
            { ja: "{初|はじ}めての{海外|かいがい}{出張|しゅっちょう}で{完璧|かんぺき}な{仕事|しごと}をしろなんて、それは{無理|むり}**というものです**よ。", en: "Telling someone to do a perfect job on their first overseas business trip — that's simply asking the impossible." },
            { ja: "{人|ひと}の{日記|にっき}を{勝手|かって}に{読|よ}むのは、{失礼|しつれい}**というものだ**。", en: "Reading someone's diary without permission is just plain rude." },
            { ja: "{一回|いっかい}{会|あ}っただけで{結婚|けっこん}を{決|き}めるなんて、それは{早|はや}すぎる**というものだ**。", en: "Deciding to marry someone after meeting them once — that's surely too hasty." },
            { ja: "{長|なが}い{行列|ぎょうれつ}に{並|なら}んでやっと{食|た}べられる。それが{人気店|にんきてん}の{楽|たの}しみ**というもの**でしょう。", en: "You finally get to eat after waiting in a long queue. That's the whole fun of a popular restaurant, isn't it?" },
          ],
          deepDive:
            "**〜というものだ** presents a statement as **common sense or the nature of things**, not just the speaker's view. それが人生というものだ = *that's life (that's how life is)*. The speaker steps back and speaks as if quoting a general truth.\n\n" +
            "Typical shapes:\n" +
            "- **それが N というものだ** — after describing something, sum it up: 助け合う。それが家族というものだ.\n" +
            "- **それは 〜というものだ** — a critical judgment: それはわがままというものだ *that's just selfish*, それは期待しすぎというものだろう *that's expecting too much*. This use often follows なんて (*such a thing as*).\n\n" +
            "The softened versions **というものだろう / というものでしょう** are very common, especially when advising someone.\n\n" +
            "Connection: usually a noun, but plain forms also appear (早すぎるというものだ), and な-adjectives drop だ (無理というもの, 失礼というもの).\n\n" +
            "Don't confuse it with:\n" +
            "- **〜というものではない** (#25) — *it's not (necessarily) the case that ~*: 高ければいいというものではない. The negative is a separate pattern with a different meaning.\n" +
            "- **〜ものだ** (#13) — *by nature ~ / one should ~*: 子どもは親に反抗するものだ. Similar ‘general truth’ flavour, but attaches to verbs/adjectives directly without という.\n" +
            "- **Nというものは** — *~ as such* (topic): 時間というものは大切だ.\n\n" +
            "Register: neutral; among friends women often say 〜というものよ, men 〜というもんだ.",
          see: [13, 25, 39, 46, 51, 56, 92, 122, 132],
          index: ["Nというものだ", "Plというものだ", "それがNというものだ", "〜というものでしょう"],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["ことはない", "ばかりに", "に比べ", "ものか", "というものだ"],
        items: [
          { q: "{駅前|えきまえ}の{新|あたら}しいスーパーは、{前|まえ}の{店|みせ}＿＿{品数|しなかず}がずっと{多|おお}い。", answer: "に比べ", en: "The new supermarket in front of the station has far more products than the old shop." },
          { q: "A：{初|はじ}めてのマラソンで、{途中|とちゅう}から{歩|ある}いちゃった。もう{二度|にど}と{出|で}る＿＿。", answer: "ものか", en: "A: In my first marathon I ended up walking partway. I'm never entering again." },
          { q: "B：そんなに{落|お}ち{込|こ}む＿＿よ。ゴールできただけでもすごいじゃない。", answer: "ことはない", en: "B: There's no need to be so down about it. Just finishing is amazing." },
          { q: "{計画|けいかく}どおりに{進|すす}まないこともある。それが{旅|たび}＿＿。", answer: "というものだ", en: "Sometimes things don't go according to plan. That's what travel is all about." },
          { q: "{傘|かさ}を{持|も}たずに{出|で}かけた＿＿、{帰|かえ}り{道|みち}でずぶぬれになってしまった。", answer: "ばかりに", en: "All because I went out without an umbrella, I got soaked on the way home." },
        ],
      },
    },
    {
      label: "(2)",
      canDo: [
        { ja: "{自分|じぶん}の{状況|じょうきょう}や{決意|けつい}したことを{友達|ともだち}に{話|はな}せる。", en: "Tell a friend about your situation or what you have resolved to do." },
      ],
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{健太|けんた}", v: "m", ja: "うん。{山口|やまぐち}さんも、ぼくに{期待|きたい}していれ**ばこそ**、あそこまで{厳|きび}しくしてくれたんだよね。{正直|しょうじき}、{会社|かいしゃ}を{辞|や}めようと{思|おも}わ**ないこともなかった**けど。", en: "Yeah. It was precisely because she had high hopes for me that Ms. Yamaguchi was that strict with me, right? Honestly, it's not as if I never thought about quitting, though." },
          { sp: "{美咲|みさき}", v: "f", ja: "うん、あのころは{電話|でんわ}の{声|こえ}も{暗|くら}かったよね。", en: "Yeah, back then even your voice on the phone sounded gloomy." },
          { sp: "{健太|けんた}", v: "m", ja: "でも、{自分|じぶん}で{選|えら}んだ{道|みち}だし、やれる**だけ**やってみようって{決|き}めたんだ。", en: "But it was the path I chose myself, so I decided to do as much as I possibly could." },
          { sp: "{美咲|みさき}", v: "f", ja: "{知|し}ってるよ。{休|やす}みの{日|ひ}も{図書館|としょかん}で{専門書|せんもんしょ}を{読|よ}んでたんだ**もん**。いつか{結果|けっか}が{出|で}るって{信|しん}じてた。", en: "I know. I mean, you were reading technical books at the library even on your days off. I always believed it would pay off someday." },
          { sp: "{健太|けんた}", v: "m", ja: "{今回|こんかい}はチームのみんなも{力|ちから}を{貸|か}してくれたし、ここで{弱気|よわき}になる**わけにはいかない**。あとは、お{客|きゃく}さんの{反応|はんのう}を{待|ま}つ**のみ**だ。{明日|あした}は、{初|はじ}めてお{菓子|かし}を{買|か}う{子|こ}どもになった**つもりで**、{朝|あさ}いちばんにお{店|みせ}に{並|なら}んでみるよ。", en: "This time the whole team lent me a hand, so I can't afford to lose my nerve now. All that's left is to wait and see how customers react. Tomorrow I'm going to line up at a shop first thing in the morning, pretending I'm a kid buying the snack for the first time." },
          { sp: "{美咲|みさき}", v: "f", ja: "いいね。わたしも{一緒|いっしょ}に{並|なら}ぶ！", en: "Sounds great. I'll line up with you!" },
        ],
      },
      points: [
        {
          no: 53,
          pattern: "〜ばこそ",
          phrase: "{期待|きたい}していれ**ばこそ**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜からこそ」と{同|おな}じように「〜だから」という{意味|いみ}で、その{理由|りゆう}を{強|つよ}く{言|い}いたいときに{使|つか}う。",
            en: "Like 〜からこそ, it means “because ~” and is used to strongly emphasize that reason: “precisely because ~ / it is only because ~ that…”.",
          },
          forms: ["[V-ば] + こそ", "[なA]／[N] であれば + こそ"],
          examples: [
            { ja: "{選手|せんしゅ}を{信頼|しんらい}していれ**ばこそ**、{監督|かんとく}は{最後|さいご}まで{交代|こうたい}させなかったのだ。", en: "It was precisely because he trusted the player that the coach didn't substitute him right to the end." },
            { ja: "{親|おや}は{子|こ}どもを{愛|あい}すれ**ばこそ**、ときには{厳|きび}しいことも{言|い}う。", en: "It is precisely because they love their children that parents sometimes say harsh things." },
            { ja: "{健康|けんこう}であれ**ばこそ**、{好|す}きな{仕事|しごと}を{続|つづ}けられるのだ。", en: "It's only because you're healthy that you can keep doing the work you love." },
            { ja: "{地元|じもと}の{人|ひと}たちの{協力|きょうりょく}があれ**ばこそ**、この{祭|まつ}りは100{年|ねん}も{続|つづ}いてきた。", en: "It is only thanks to the cooperation of the locals that this festival has continued for 100 years." },
            { ja: "{専門家|せんもんか}であれ**ばこそ**、{彼|かれ}は{安易|あんい}に「{大丈夫|だいじょうぶ}だ」とは{言|い}わなかったのだ。", en: "It was precisely because he was an expert that he didn't carelessly say “It'll be fine.”" },
          ],
          deepDive:
            "**〜ばこそ** is the conditional ば + the emphatic particle こそ. Although it looks like *if*, it actually means ***because*** — and strongly so: *it is precisely because ~ (and for no other reason) that…*. It is essentially a more literary, emotional version of **〜からこそ** (N3).\n\n" +
            "Connection: V-ば (愛すれば, していれば, あれば), and for な-adjectives/nouns **であれば** (健康であれば, 親であれば). い-adjectives take -ければこそ (厳しければこそ), though this is rarer.\n\n" +
            "Typical feel:\n" +
            "- It often explains a **seemingly negative action by a positive motive**: 愛すればこそ厳しくする (*strict because they love*), 期待していればこそ叱る.\n" +
            "- The sentence frequently ends with **のだ / のです / んだ**, giving an explanatory tone.\n" +
            "- Register: somewhat literary/emotional. In everyday conversation からこそ is more common; ばこそ appears in speeches, essays, and heartfelt statements like the one in the sample dialogue.\n\n" +
            "Common mistakes:\n" +
            "- Reading it as a condition. 健康であればこそ does *not* mean *if you're healthy* — it asserts that you are, and that this is the reason.\n" +
            "- Using it for trivial reasons (✗お腹がすいていればこそ、パンを食べた). It needs a meaningful, emphasized reason.\n\n" +
            "Related: **V-てこそ** (#139) *only by doing ~ (does something become possible)*: 続けてこそ効果がある.",
          see: [139],
          index: ["Vばこそ", "Nであればこそ", "なAであればこそ", "〜からこそ"],
        },
        {
          no: 54,
          pattern: "〜ないことはない",
          phrase: "{思|おも}わ**ないこともなかった**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「{絶対|ぜったい}に〜だ」とはっきり{言|い}えないときや、{自信|じしん}がなくてはっきり{言|い}いたくないときに{使|つか}う。",
            en: "Used when you can't say flatly that something is definitely so, or when you lack confidence and don't want to commit to a clear statement: “it's not that ~ not / I suppose I could ~.”",
          },
          forms: ["[V-~~ない~~] + ないことはない／ないこともない", "[いA~~い~~] く + ないことはない／ないこともない", "[なA~~な~~] で + ないことはない／ないこともない"],
          examples: [
            { ja: "A：{辛|から}い{料理|りょうり}、{大丈夫|だいじょうぶ}？\nB：{食|た}べられ**ないことはない**けど、{得意|とくい}じゃないんだ。", en: "A: Are you OK with spicy food?\nB: It's not that I can't eat it, but I'm not great with it." },
            { ja: "{駅|えき}から{歩|ある}け**ないこともない**が、{荷物|にもつ}が{多|おお}いのでタクシーにしよう。", en: "It's not impossible to walk from the station, but we have a lot of luggage, so let's take a taxi." },
            { ja: "この{服|ふく}、{少|すこ}し{高|たか}く**ないこともない**けど、{長|なが}く{着|き}られそうだから{買|か}うことにした。", en: "This outfit is a bit on the expensive side, I suppose, but it looks like I'll be able to wear it for a long time, so I've decided to buy it." },
            { ja: "{一人|ひとり}の{生活|せいかつ}は{気楽|きらく}で**ないことはない**が、ときどき{寂|さび}しくなる。", en: "Living alone isn't without its freedom, but sometimes I get lonely." },
            { ja: "{言|い}われてみれば、{彼|かれ}の{意見|いけん}にも{一理|いちり}ある。{賛成|さんせい}でき**ないことはない**。", en: "Now that you mention it, his opinion has a point. I suppose I could agree with it." },
          ],
          deepDive:
            "**〜ないことはない** is a double negative: *there is no such thing as not ~* → *it's not that ~ not* → a **weak, hesitant yes**. 飲めないことはない = *I can drink (a bit), but don't expect much*. The speaker admits the possibility while signalling reluctance or doubt.\n\n" +
            "The sentence very often continues with **けど / が** and a reservation: 行けないことはないけど、ちょっと遠い. The listener should hear *yes, but…*.\n\n" +
            "Connection (take the negative form first, then add ことはない):\n" +
            "- Verb: 行かない → 行か**ないことはない**; potential verbs are extremely common: できないことはない, 食べられないことはない.\n" +
            "- い-adj: 高くない → 高く**ないことはない**.\n" +
            "- な-adj: 派手でない → 派手で**ないことはない**; in speech 派手じゃないこともない.\n\n" +
            "**ないこともない** (with も) is the same pattern and sounds even more indirect and soft.\n\n" +
            "Don't confuse:\n" +
            "- **V-ることはない** (#49) — *no need to ~*. One negative (ことはない) vs two negatives (ないことはない)! 心配することはない = *no need to worry*; 心配しないことはない = *it's not that I'm not worried*.\n" +
            "- **〜わけではない** (#19) — *it doesn't mean that ~* (partial denial of a conclusion). Similar hedging, but わけではない denies an inference, while ないことはない grudgingly admits a possibility.\n" +
            "- **〜ないことには** (#110) — *unless ~*.\n\n" +
            "JLPT tip: in a response-type listening question, 〜ないことはないけど… usually signals a lukewarm or reluctant answer.",
          see: [8, 19, 20, 40, 42, 49, 62, 87, 110, 119],
          index: ["Vないことはない", "Vないこともない", "いAくないことはない", "なAでないことはない", "〜じゃないこともない"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "A：ピアノ、{弾|ひ}けるんだって？\nB：{弾|ひ}けないことはないけど、（　）。", options: ["もう10{年|ねん}も{触|さわ}ってないから{自信|じしん}ないな", "{毎日|まいにち}{練習|れんしゅう}してるから{任|まか}せて"], answer: 0, en: "A: I hear you can play the piano?\nB: I suppose I can, but I haven't touched one in ten years, so I'm not confident." },
                { q: "A：この{仕事|しごと}、{今日中|きょうじゅう}に{終|お}わりそう？\nB：{終|お}わらないこともないですが、（　）。", options: ["もう{半分|はんぶん}{以上|いじょう}できていますから{楽勝|らくしょう}です", "{明日|あした}の{朝|あさ}までいただけると{助|たす}かります"], answer: 1, en: "A: Do you think you can finish this job today?\nB: It's not impossible, but I'd be grateful if you could give me until tomorrow morning.", why: { en: "ないこともない signals a reluctant, hedged ‘yes’, so it must be followed by a reservation, not confident agreement." } },
                { q: "A：{駅|えき}まで{歩|ある}いて{行|い}ける？\nB：{歩|ある}けないことはないけど、（　）。", options: ["すぐ{近|ちか}くだから{歩|ある}こうよ", "30{分|ぷん}はかかるからバスにしよう"], answer: 1, en: "A: Can we walk to the station?\nB: We could, but it takes a good 30 minutes, so let's take the bus." },
              ],
            },
          ],
        },
        {
          no: 55,
          pattern: "〜だけ",
          phrase: "やれる**だけ**やってみよう",
          stars: 2,
          marks: [],
          usage: {
            ja: "「{飲|の}み{放題|ほうだい}だったので{飲|の}めるだけ{飲|の}んだ」のように、「{限界|げんかい}まで〜する」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say you do something “as much as possible / to the limit”, as in 飲み放題だったので飲めるだけ飲んだ “It was all-you-can-drink, so I drank as much as I could.”",
          },
          forms: ["[V-できる] + だけ"],
          formNotes: [
            {
              ja: "「[V-~~ます~~]たい／ほしい／{好|す}きな + だけ」の{形|かたち}もある。",
              en: "It also appears as “V-たい / ほしい / 好きな + だけ” — “as much as you want / like”.",
            },
          ],
          examples: [
            { ja: "{試験|しけん}が{終|お}わったら、{寝|ね}られる**だけ**{寝|ね}たい。", en: "Once the exams are over, I want to sleep as much as I can." },
            { ja: "{無料|むりょう}のサンプルだったので、もらえる**だけ**もらってきた。", en: "They were free samples, so I took as many as they'd give me." },
            { ja: "{言|い}いたい**だけ**{言|い}ったら、{気持|きも}ちがすっきりした。", en: "After saying everything I wanted to say, I felt refreshed." },
            { ja: "{試食|ししょく}コーナーのパンは、{好|す}きな**だけ**{召|め}し{上|あ}がってください。", en: "Please help yourself to as much of the bread at the tasting corner as you like." },
            { ja: "やれる**だけ**のことはやった。あとは{結果|けっか}を{待|ま}つしかない。", en: "I've done everything I could. All I can do now is wait for the result." },
          ],
          deepDive:
            "Here **だけ** does not mean *only*; it expresses an **amount or extent** — *as much as (one can / wants)*. The key structure repeats the verb: **V-できる + だけ + V**: 食べられるだけ食べる *eat as much as one can*, 持てるだけ持つ *carry as much as one can*.\n\n" +
            "Variants:\n" +
            "- **V-たいだけ V**: 泣きたいだけ泣けばいい *cry as much as you want*.\n" +
            "- **ほしいだけ / 好きなだけ**: 好きなだけ取ってください *take as much as you like* — very common in hospitality and on signs.\n" +
            "- **V-できるだけの N**: やれるだけのことはやった *I did everything I could*.\n" +
            "- The fixed expression **できるだけ** (*as ~ as possible*) comes from the same pattern: できるだけ早く.\n\n" +
            "Nuance: the pattern often implies reaching one's limit, sometimes with a result: 食べられるだけ食べたら、お腹が痛くなった. With たい/好きな it emphasizes freedom: *there's no limit but your own wish*.\n\n" +
            "Don't confuse:\n" +
            "- **V-るだけV-てみる** (#47) — *just try doing ~ (even if it might not work)*: 行くだけ行ってみよう. Same だけ, different idea: minimum effort rather than maximum.\n" +
            "- **〜だけに** (#105) — *precisely because ~ (as expected)*.\n" +
            "- **〜だけ = only** (N5): 一つだけ.\n\n" +
            "Tip: the potential form (やれるだけ, 食べられるだけ) makes the *to the limit* meaning explicit. Without it, 〜るだけ〜てみる shifts toward #47 (*just give it a try*): やるだけやってみる. (The set phrase やるだけやった *I did all I could* is also common.)",
          see: [47, 105],
          index: ["Vできるだけ", "Vたいだけ", "ほしいだけ", "好きなだけ", "Vできるだけのこと", "できるだけ"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{旅行先|りょこうさき}では、{見|み}たいところを{見|み}たい**だけ**{見|み}て、",
                "{試験|しけん}までにやれる**だけ**のことはやったから、",
                "{食|た}べ{放題|ほうだい}だからと{食|た}べられる**だけ**{食|た}べたら、",
                "アルバイトで{貯|た}められる**だけ**{貯|た}めて、",
              ],
              right: [
                "{結果|けっか}がどうでも{後悔|こうかい}はない。",
                "{帰|かえ}りの{電車|でんしゃ}でおなかが{痛|いた}くなった。",
                "{大満足|だいまんぞく}で{帰|かえ}ってきた。",
                "{来年|らいねん}は{海外|かいがい}に{留学|りゅうがく}するつもりだ。",
              ],
              answer: [2, 0, 1, 3],
              en: [
                "On the trip I saw as many places as I wanted to, and came home completely satisfied.",
                "I did everything I could before the exam, so whatever the result, I have no regrets.",
                "Because it was all-you-can-eat, I ate as much as I could, and then my stomach hurt on the train home.",
                "I'm going to save as much as I can from my part-time job and study abroad next year.",
              ],
            },
          ],
        },
        {
          no: 56,
          pattern: "〜もん",
          phrase: "{読|よ}んでたんだ**もん**",
          stars: 2,
          marks: ["casual"],
          usage: {
            ja: "{理由|りゆう}を{説明|せつめい}したり、{言|い}い{訳|わけ}をしたりするときに{使|つか}う。「もの」の{形|かたち}は{主|おも}に{女性|じょせい}が{使|つか}う。",
            en: "Used when explaining a reason or making an excuse. The fuller form もの is used mainly by women.",
          },
          forms: ["[Pl] + もん"],
          formNotes: [
            {
              ja: "です・ます{形|けい}（{丁寧形|ていねいけい}）が{使|つか}われることもある。",
              en: "Polite forms (です / ます) can also come before it: 〜なんですもの, 〜ますもん.",
            },
          ],
          examples: [
            { ja: "A：どうして{電話|でんわ}に{出|で}なかったの？\nB：だって、{電車|でんしゃ}の{中|なか}だったんだ**もん**。", en: "A: Why didn't you answer the phone?\nB: Well, I was on the train." },
            { ja: "A：もう{食|た}べないの？\nB：うん。さっきおやつを{食|た}べすぎちゃった**もん**。", en: "A: You're not eating any more?\nB: No. I had too many snacks earlier." },
            { ja: "まだ{片付|かたづ}けたくない。だって、まだ{遊|あそ}んでるんだ**もん**。", en: "I don't want to tidy up yet. I'm still playing!" },
            { ja: "あの{店|みせ}、いつも{混|こ}んでるよね。{安|やす}くておいしい**もん**ね。", en: "That restaurant is always packed, isn't it? Well, it's cheap and tasty, after all." },
            { ja: "A：{日曜日|にちようび}も{出勤|しゅっきん}するんですか。\nB：ええ。{締|し}め{切|き}りが{月曜日|げつようび}なんです**もの**。", en: "A: You're going to work on Sunday too?\nB: Yes. The deadline is Monday, you see." },
          ],
          deepDive:
            "Sentence-final **〜もん / 〜もの** gives a reason, usually in a slightly **self-justifying, childlike or pleading** tone: *but ~ / because ~, you know*. It very often pairs with **だって** at the start: だって、知らなかったんだもん *but I didn't know!*\n\n" +
            "Register and speakers:\n" +
            "- **もん** is casual and used by children, young people and women; men use it too among close friends, but it can sound cute or sulky.\n" +
            "- **もの** sounds more feminine and a little more refined: 仕方ないですもの.\n" +
            "- Never use it in formal or business situations with superiors — it sounds like making excuses.\n\n" +
            "Connection: plain forms; the explanatory **んだ + もん** (〜んだもん) is extremely common. With nouns and な-adjectives, use だ: 子どもだもん, 好きだもん. Polite forms also occur: 〜ですもの.\n\n" +
            "Two nuances:\n" +
            "- **Excuse/justification** (to someone questioning you): A: なんで遅れたの？ B: 道が混んでたんだもん.\n" +
            "- **Reason shared with the listener**, often with ね: 人気あるもんね *well, it is popular, after all*.\n\n" +
            "Don't confuse:\n" +
            "- **〜ものか / もんか** (#51) — strong refusal/denial: 行くもんか *no way I'm going*. Only the final か differs!\n" +
            "- **〜もので / 〜もんで** (N3) — mid-sentence reason, used in apologies: 慣れないもので….\n" +
            "- **〜ものだ** (#13, #132) — nature / nostalgia.",
          see: [13, 25, 39, 46, 51, 52, 92, 122, 132],
          index: ["〜もん", "〜もの", "〜んだもん", "だって〜もん", "〜ですもの"],
          practice: [
            {
              type: "match",
              prompt: { ja: "（　）に{入|はい}るものを{選|えら}びなさい。", en: "Choose what goes in each ( )." },
              left: [
                "A：まだ{起|お}きてたの？\nB：（　）。",
                "A：その{靴|くつ}、{高|たか}かったんじゃない？\nB：（　）。",
                "A：{傘|かさ}、{持|も}っていかないの？\nB：（　）。",
                "A：{最近|さいきん}、よくジムに{行|い}ってるね。\nB：（　）。",
              ],
              right: [
                "だって、ひと{目|め}で{気|き}に{入|い}っちゃったんだもん",
                "{天気|てんき}{予報|よほう}で{一日中|いちにちじゅう}{晴|は}れるって{言|い}ってたもん",
                "{夏|なつ}までに5キロやせたいんだもん",
                "{明日|あした}のテストの{勉強|べんきょう}が{終|お}わってないんだもん",
              ],
              answer: [3, 0, 1, 2],
              en: [
                "A: You're still up?\nB: I haven't finished studying for tomorrow's test.",
                "A: Weren't those shoes expensive?\nB: Well, I fell in love with them at first sight.",
                "A: Aren't you taking an umbrella?\nB: The weather forecast said it'd be sunny all day.",
                "A: You've been going to the gym a lot lately.\nB: I want to lose 5 kilos by summer.",
              ],
            },
          ],
        },
        {
          no: 57,
          pattern: "〜わけにはいかない",
          phrase: "{弱気|よわき}になる**わけにはいかない**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「{休|やす}むわけにはいかない」のように、「{理由|りゆう}があってできない」と{言|い}いたいときに{使|つか}う。また、「{働|はたら}かないわけにはいかない」のように、「しなければならない」と{言|い}いたいときにも{使|つか}う。",
            en: "Used to say “I can't ~ (because there is a reason I shouldn't)”, as in 休むわけにはいかない. It is also used to say “I have to ~”, as in 働かないわけにはいかない “I can't not work.”",
          },
          forms: ["[V-る]／[V-ない] + わけにはいかない"],
          examples: [
            { ja: "{明日|あした}は{大切|たいせつ}な{面接|めんせつ}があるので、{今夜|こんや}は{飲|の}みに{行|い}く**わけにはいかない**。", en: "I have an important interview tomorrow, so I can't go out drinking tonight." },
            { ja: "お{世話|せわ}になった{先輩|せんぱい}の{頼|たの}みだから、{断|ことわ}る**わけにはいかない**。", en: "It's a request from a senior who has done a lot for me, so I can't turn it down." },
            { ja: "{子|こ}どもが{熱|ねつ}を{出|だ}したので、{会社|かいしゃ}を{休|やす}まない**わけにはいかなかった**。", en: "My child had a fever, so I had no choice but to take the day off work." },
            { ja: "{会員|かいいん}でない{方|かた}に、この{情報|じょうほう}をお{教|おし}えする**わけにはいきません**。", en: "I'm afraid we can't give this information to non-members." },
            { ja: "{彼|かれ}の{事情|じじょう}もわかるが、{一人|ひとり}だけ{特別|とくべつ}{扱|あつか}いする**わけにもいかない**。", en: "I understand his situation, but I can't very well give just him special treatment either." },
          ],
          deepDive:
            "**〜わけにはいかない** means *I can't (very well) ~* — not because it's physically impossible, but because of **social, moral or situational reasons**. 休むわけにはいかない = *I can't take the day off (there's an important meeting / people are counting on me)*. Compare できない, which is about ability.\n\n" +
            "Two forms:\n" +
            "- **V-る + わけにはいかない** = *can't do* (though I might want to): 帰るわけにはいかない.\n" +
            "- **V-ない + わけにはいかない** = *can't not do* → *have to*, reluctantly, because of circumstances: 出席しないわけにはいかない *I have no choice but to attend*.\n\n" +
            "Variants: **わけにもいかない** (*can't very well ~ either*) is used when rejecting an option among several; polite **わけにはいきません** is common in business when refusing: 規則ですので、お受けするわけにはいきません.\n\n" +
            "Don't confuse the わけ family:\n" +
            "- **〜わけではない** (#19) — *it's not that ~*: 嫌いなわけではない *it's not that I dislike it*. Partial denial, no obligation involved.\n" +
            "- **〜わけがない** (N3) — *there's no way ~*: 彼が来るわけがない.\n" +
            "- **〜わけだ** (#82, #134) — *so that's why / it follows that*.\n\n" +
            "Common mistake: using わけにはいかない for simple inability. ✗泳げないので、海に入るわけにはいかない sounds odd; say 入れない. Use わけにはいかない when there's a reason rooted in duty, relationships or rules.\n\n" +
            "JLPT tip: look for a reason clause (〜ので, 〜から, 大事な〜がある) before the blank.",
          see: [19, 82, 134],
          index: ["Vるわけにはいかない", "Vないわけにはいかない", "〜わけにもいかない", "〜わけにはいきません"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{大事|だいじ}なお{客様|きゃくさま}との{約束|やくそく}なので、{遅|おく}れる（　）。", options: ["わけにはいかない", "わけではない"], answer: 0, en: "It's an appointment with an important client, so I can't be late." },
                { q: "{料理|りょうり}が{嫌|きら}いな（　）が、{忙|いそが}しくてつい{外食|がいしょく}してしまう。", options: ["わけにはいかない", "わけではない"], answer: 1, en: "It's not that I dislike cooking, but I'm busy and end up eating out.", why: { en: "わけにはいかない needs a verb and means ‘can't’. Here the speaker is partially denying an assumption (‘you must hate cooking’), so わけではない." } },
                { q: "{親友|しんゆう}の{結婚式|けっこんしき}なので、どんなに{忙|いそが}しくても{出席|しゅっせき}しない（　）。", options: ["わけにはいかない", "わけではない"], answer: 0, en: "It's my best friend's wedding, so however busy I am, I have to attend." },
              ],
            },
          ],
        },
        {
          no: 58,
          pattern: "〜のみ",
          phrase: "{反応|はんのう}を{待|ま}つ**のみ**だ",
          stars: 1,
          marks: ["formal"],
          usage: {
            ja: "「〜だけ」と{言|い}いたいときに{使|つか}う。お{知|し}らせなどでよく{使|つか}われる。",
            en: "Used to mean “only / just” (≈ だけ). It is often used in notices and announcements.",
          },
          forms: ["[V-る] + のみ", "[N] + のみ"],
          formNotes: [
            {
              ja: "「ただ〜のみ」という{言|い}い{方|かた}もある。",
              en: "It is also used in the form ただ〜のみ “nothing but ~ / simply ~”.",
            },
          ],
          examples: [
            { ja: "{当日|とうじつ}のチケットは、{窓口|まどぐち}**のみ**での{販売|はんばい}となります。", en: "Same-day tickets are sold at the ticket counter only." },
            { ja: "この{奨学金|しょうがくきん}の{対象|たいしょう}は{一年生|いちねんせい}**のみ**です。", en: "This scholarship is open to first-year students only." },
            { ja: "{火曜日|かようび}は{午前|ごぜん}**のみ**{診察|しんさつ}いたします。", en: "On Tuesdays we see patients in the morning only." },
            { ja: "{準備|じゅんび}はすべて{終|お}わった。あとは{本番|ほんばん}で{力|ちから}を{出|だ}す**のみ**だ。", en: "All the preparations are done. All that remains is to give it everything on the day." },
            { ja: "{失敗|しっぱい}しても{振|ふ}り{返|かえ}らない。ただ{前進|ぜんしん}ある**のみ**だ。", en: "Even if I fail, I won't look back. There is nothing to do but move forward.", idiom: true },
          ],
          deepDive:
            "**〜のみ** is the written, formal equivalent of **だけ** (*only*). You'll see it everywhere in notices, forms and rules: 会員のみ (*members only*), 現金のみ (*cash only*), 平日のみ営業, 太枠内のみご記入ください.\n\n" +
            "Connection: nouns directly (平日のみ), verbs in the dictionary form (待つのみ), and it can sit before particles: 窓口のみでの販売, 日本のみならず.\n\n" +
            "A second, very common use is **V-るのみだ** = *all that is left is to ~ / there's nothing to do but ~*. It sounds resolute and dramatic, so people use it even in casual speech when declaring a resolution, as in the sample dialogue: あとは待つのみだ. Set phrases: **ただ〜のみ**, **〜あるのみ** (前進あるのみ *nothing but forward*, 努力あるのみ, 練習あるのみ).\n\n" +
            "Compare:\n" +
            "- **だけ** — neutral, everyday. のみ = だけ in formal writing.\n" +
            "- **〜しかない** — *have no choice but to*; emphasizes lack of options. 待つのみだ is more about resolve than resignation.\n" +
            "- **〜のみならず** (#63) — *not only ~ (but also)*: 若者のみならず高齢者も.\n" +
            "- **〜ばかり** — *nothing but* (often with a complaint about quantity), unlike the neutral のみ.\n\n" +
            "Common mistake: using のみ for everyday casual limitation (✗ちょっとのみ食べた). Keep だけ for normal conversation; use のみ for notices or for the resolute あとは〜のみだ pattern.",
          see: [63],
          index: ["Nのみ", "Vるのみ", "ただ〜のみ", "〜あるのみ", "あとは〜のみだ"],
        },
        {
          no: 59,
          pattern: "〜つもりで",
          phrase: "{子|こ}どもになった**つもりで**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「{本当|ほんとう}はそうではないが、そうなったような{気持|きも}ちで」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “it isn't really so, but (doing something) with the feeling that it is” — as if / pretending that ~.",
          },
          forms: ["[V-た] + つもり", "[いA] + つもり", "[なA] な + つもり", "[N] の + つもり"],
          examples: [
            { ja: "{世界|せかい}{一周|いっしゅう}をした**つもりで**、{旅|たび}の{番組|ばんぐみ}を{見|み}ている。", en: "I watch travel shows, imagining I've gone around the world." },
            { ja: "{先生|せんせい}になった**つもりで**{説明|せつめい}してみると、{自分|じぶん}がどこを{理解|りかい}していないかがわかる。", en: "When you try explaining something as if you were the teacher, you find out which parts you don't understand." },
            { ja: "{祖父|そふ}はまだ{若|わか}い**つもりで**、{重|おも}い{荷物|にもつ}を{一人|ひとり}で{運|はこ}ぼうとする。", en: "My grandfather thinks he's still young and tries to carry heavy loads by himself." },
            { ja: "ボーナスはもらわなかった**つもりで**、{全部|ぜんぶ}{貯金|ちょきん}することにした。", en: "I decided to put my whole bonus into savings, acting as if I'd never received it." },
            { ja: "{遊|あそ}び**のつもりで**{始|はじ}めたギターが、いつの{間|ま}にか{仕事|しごと}になった。", en: "The guitar I took up just for fun somehow ended up becoming my job." },
          ],
          deepDive:
            "The N4 **つもり** means *intention* (V-るつもり: 行くつもりだ *I intend to go*). This N2 use is different: **V-たつもりで / Nのつもりで** = *with the feeling that ~ / as if ~ / pretending ~*. 旅行に行ったつもりで = *imagining I'd gone on a trip*. The speaker knows it isn't true but acts in that frame of mind.\n\n" +
            "Common patterns:\n" +
            "- **〜になったつもりで** — role-play: 社長になったつもりで考える *think as if you were the president*.\n" +
            "- **本番のつもりで / 試合のつもりで** — treat practice as the real thing.\n" +
            "- **〜たつもりで貯金する** — a classic money-saving trick: 買ったつもりで貯金.\n" +
            "- **〜つもりになる** — *come to feel as if*: わかったつもりになる *feel as if you understand (but don't)*.\n\n" +
            "Connection: V-た (行ったつもり), い-adj (若いつもり), な-adj + な (元気なつもり), N + の (家族のつもり).\n\n" +
            "Contrast with the other N2 つもり (#120): **V-たつもりだ / V-ているつもりだ** = *I believe I did ~ (but actually…)*: 鍵をかけたつもりだったのに… In #120 the speaker genuinely believes it; in #59 the speaker knows it's make-believe and chooses that attitude. Context — often a following action with で — tells you which.\n\n" +
            "Common mistake: using V-る: ✗旅行に行くつもりでDVDを見る means *intending to go on a trip*. For ‘as if’, you need the past: 行ったつもりで.",
          see: [120],
          index: ["Vたつもりで", "Nのつもりで", "いAつもりで", "〜つもりになる", "〜になったつもりで"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{本番|ほんばん}まであと{一週間|いっしゅうかん}だ。{練習|れんしゅう}でも{本番|ほんばん}の**つもりで**、",
                "{父|ちち}は{退職|たいしょく}した{今|いま}も{社長|しゃちょう}の**つもりで**、",
                "{海外|かいがい}{旅行|りょこう}に{行|い}った**つもりで**、",
                "{自分|じぶん}がお{客|きゃく}になった**つもりで**{店内|てんない}を{見直|みなお}してみたら、",
              ],
              right: [
                "{改善|かいぜん}すべき{点|てん}がたくさん{見|み}つかった。",
                "{一回|いっかい}{一回|いっかい}{真剣|しんけん}にやろう。",
                "{家族|かぞく}に{命令|めいれい}ばかりしている。",
                "{家|いえ}でタイ{料理|りょうり}を{作|つく}って{楽|たの}しんだ。",
              ],
              answer: [1, 2, 3, 0],
              en: [
                "One week left until the real performance. Let's treat every practice as the real thing and take each one seriously.",
                "Even now that he's retired, my father still acts like he's the company president and keeps giving the family orders.",
                "Pretending we'd gone on a trip abroad, we made Thai food at home and enjoyed it.",
                "When I looked over the shop again as if I were a customer, I found lots of things that needed improving.",
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["わけにはいかない", "もの", "のみ", "ないこともない", "つもり", "だけ", "こそ"],
        items: [
          { q: "{日曜日|にちようび}なら{手伝|てつだ}いに{行|い}け＿＿けど、{平日|へいじつ}は{無理|むり}だよ。", answer: "ないこともない", en: "I suppose I could come and help on Sunday, but weekdays are impossible." },
          { q: "A：どうしてそんなに{怒|おこ}ってるの？\nB：だって、{約束|やくそく}の{時間|じかん}に1{時間|じかん}も{遅|おく}れてきたんだ＿＿。", answer: "もの", en: "A: Why are you so angry?\nB: Well, he turned up a whole hour late!" },
          { q: "{熱|ねつ}があっても、キャプテンとして{今日|きょう}の{試合|しあい}を{休|やす}む＿＿。", answer: "わけにはいかない", en: "Even with a fever, as captain I can't miss today's match." },
          { q: "このバイキングは、90{分間|ぷんかん}{食|た}べたい＿＿{食|た}べて、お{一人様|ひとりさま}2,000{円|えん}です。", answer: "だけ", en: "At this buffet you can eat as much as you like for 90 minutes, for ¥2,000 per person." },
          { q: "{今日|きょう}はみなさん、{新聞|しんぶん}{記者|きしゃ}になった＿＿で、{町|まち}の{人|ひと}にインタビューしてみましょう。", answer: "つもり", en: "Today, everyone, let's pretend we're newspaper reporters and interview people in town." },
          { q: "{家族|かぞく}を{大切|たいせつ}に{思|おも}えば＿＿、{父|ちち}は{毎日|まいにち}{遅|おそ}くまで{働|はたら}いていたのだろう。", answer: "こそ", en: "It must have been precisely because he cared about his family that my father worked late every day." },
          { q: "{本日|ほんじつ}の{説明会|せつめいかい}は、{事前|じぜん}にお{申|もう}し{込|こ}みいただいた{方|かた}＿＿ご{参加|さんか}いただけます。", answer: "のみ", en: "Only those who applied in advance may attend today's information session." },
        ],
      },
    },
  ],
  review: [
    {
      title: { ja: "問題1 〈{文法|ぶんぽう}{形式|けいしき}の{判断|はんだん}〉", en: "Q1 Choosing the grammar form" },
      ex: {
        type: "choice",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の（　）に{入|い}れるのに{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Choose the best option (1–4) to fill the ( )." },
        items: [
          { q: "{駅|えき}で{財布|さいふ}を{落|お}とした（　）、{友人|ゆうじん}の{結婚式|けっこんしき}に{遅|おく}れてしまった。", options: ["からには", "ばかりに", "ものの", "にもかかわらず"], answer: 1, en: "All because I dropped my wallet at the station, I was late for my friend's wedding.", why: { en: "One cause → a regrettable result: ばかりに. ものの / にもかかわらず would need a contrast (‘although’), which the sentence doesn't have." } },
          { q: "コーヒーはおかわり{自由|じゆう}ですので、（　）{飲|の}んでください。", options: ["飲みたいから", "飲みたいのに", "飲みたいだけ", "飲みたいほど"], answer: 2, en: "Coffee refills are free, so please drink as much as you like." },
          { q: "A：{田中|たなか}さんの{息子|むすこ}さん、おとなしそうだね。\nB：おとなしい（　）。{家|いえ}ではいつも{大声|おおごえ}で{騒|さわ}いでいるよ。", options: ["ものだ", "もんか", "ことだ", "わけだ"], answer: 1, en: "A: The Tanakas' son seems quiet, doesn't he?\nB: Quiet? Not at all. At home he's always shouting and making a racket.", why: { en: "B flatly rejects A's word (おとなしい) and then gives the opposite fact — the refuting use of もんか." } },
          { q: "A：{会議|かいぎ}の{資料|しりょう}、{今|いま}からコピーしましょうか。\nB：まだ30{分|ぷん}ありますから、そんなにあわてる（　）よ。", options: ["わけにはいきません", "ことはありません", "どころではありません", "おそれがあります"], answer: 1, en: "A: Shall I copy the meeting materials now?\nB: We still have 30 minutes, so there's no need to rush like that." },
          { q: "A：{今度|こんど}の{土曜日|どようび}の{飲|の}み{会|かい}、{来|く}るよね？\nB：ごめん。その{日|ひ}は{母|はは}の{誕生日|たんじょうび}で、{家族|かぞく}で{食事|しょくじ}をする{約束|やくそく}なんだ。{約束|やくそく}を{破|やぶ}る（　）んだ。", options: ["わけではない", "ものではない", "わけにはいかない", "ことはない"], answer: 2, en: "A: You're coming to the drinks on Saturday, right?\nB: Sorry. That day is my mother's birthday and I've promised to have dinner with my family. I can't break that promise.", why: { en: "B explains a personal reason why he can't do something → わけにはいかない. ものではない states a general rule of conduct and doesn't fit ‘I can't come’." } },
          { q: "A：この{駅|えき}、{前|まえ}（　）ずいぶん{便利|べんり}になりましたね。\nB：ええ。エレベーターもできましたしね。", options: ["に応じて", "につれて", "にわたって", "に比べて"], answer: 3, en: "A: This station has become much more convenient than it used to be, hasn't it?\nB: Yes. They've even put in an elevator." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "{急|いそ}いでいて", after: "、{反対|はんたい}{方向|ほうこう}に{行|い}ってしまった。", pieces: ["{行|い}き{先|さき}を", "ばかりに", "{確|たし}かめなかった", "{電車|でんしゃ}の"], order: [3, 0, 2, 1], star: 2, en: "I was in a hurry, and all because I didn't check where the train was going, I ended up going the opposite way." },
          { before: "{今|いま}の{子|こ}どもは", after: "{時間|じかん}が{短|みじか}いそうだ。", pieces: ["{外|そと}で", "{遊|あそ}ぶ", "に{比|くら}べて", "{昔|むかし}の{子|こ}ども"], order: [3, 2, 0, 1], star: 2, en: "Children today apparently spend less time playing outside than children in the past." },
          { before: "{面接|めんせつ}の{練習|れんしゅう}は、{本物|ほんもの}の", after: "、{本番|ほんばん}と{同|おな}じ{服装|ふくそう}でやってみよう。", pieces: ["{座|すわ}った", "つもりで", "{面接官|めんせつかん}の", "{前|まえ}に"], order: [2, 3, 0, 1], star: 2, en: "For interview practice, let's do it in the same clothes as on the day, imagining we're sitting in front of real interviewers." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{読解|どっかい}〉", en: "Q3 Reading comprehension" },
      ex: {
        type: "reading",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで{問題|もんだい}に{答|こた}えなさい。{後|あと}の{問|と}いに{対|たい}する{答|こた}えとして{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage and answer the questions. Choose the best answer (1–4) for each." },
        title: "{伝統|でんとう}を{守|まも}るということ",
        text: [
          "{地方|ちほう}の{伝統|でんとう}{工芸|こうげい}は、{今|いま}、{厳|きび}しい{状況|じょうきょう}にある。{安|やす}い{輸入品|ゆにゅうひん}に{比|くら}べて{値段|ねだん}が{高|たか}く、{若|わか}い{世代|せだい}の{暮|く}らしにも{合|あ}わないと{思|おも}われているからだ。しかし、{何百年|なんびゃくねん}も{受|う}け{継|つ}がれてきた{技術|ぎじゅつ}を、{売|う}れないという{理由|りゆう}だけで{消|け}してしまうわけにはいかない。",
          "ある{町|まち}の{和紙|わし}{工房|こうぼう}は、{十年|じゅうねん}{前|まえ}、{店|みせ}を{閉|と}じる{寸前|すんぜん}だった。{昔|むかし}ながらの{障子紙|しょうじがみ}しか{作|つく}っていなかったばかりに、{家|いえ}から{障子|しょうじ}が{消|き}えていくとともに、{注文|ちゅうもん}も{減|へ}っていったのだ。そこで{工房|こうぼう}の{若|わか}い{職人|しょくにん}は、{和紙|わし}を「{昔|むかし}の{道具|どうぐ}」ではなく「{光|ひかり}を{美|うつく}しく{見|み}せる{素材|そざい}」として{考|かんが}え{直|なお}した。{和紙|わし}で{作|つく}ったランプシェードは{海外|かいがい}のデザイナーの{目|め}に{留|と}まり、{今|いま}ではヨーロッパのホテルでも{使|つか}われている。",
          "{職人|しょくにん}は{言|い}う。「{技術|ぎじゅつ}は{何|なに}も{変|か}えていません。{変|か}えたのは{使|つか}い{道|みち}のみです。」{伝統|でんとう}を{守|まも}りたいと{思|おも}えばこそ、{伝統|でんとう}の{形|かたち}にこだわらなかったのだろう。{守|まも}るべきものを{守|まも}りながら、{時代|じだい}に{合|あ}わせて{変|か}わっていく。それが{本当|ほんとう}の{伝統|でんとう}というものではないだろうか。",
        ],
        en: [
          "Traditional regional crafts are in a difficult situation today, because they are thought to be expensive compared with cheap imports and not to suit the lifestyles of younger generations. However, we cannot simply let techniques handed down for hundreds of years disappear just because they don't sell.",
          "Ten years ago, a washi paper workshop in one town was on the verge of closing. All because it made nothing but traditional paper for shōji screens, its orders fell as shōji disappeared from homes. So a young craftsman at the workshop rethought washi — not as an ‘old-fashioned household item’ but as ‘a material that makes light look beautiful’. Lampshades made of washi caught the eye of designers abroad, and today they are used even in hotels in Europe.",
          "The craftsman says, “We haven't changed our technique at all. The only thing we changed is what it's used for.” Precisely because he wanted to protect the tradition, he probably didn't cling to its traditional form. Protecting what must be protected while changing with the times — isn't that what true tradition is?",
        ],
        items: [
          { q: "{和紙|わし}{工房|こうぼう}の{注文|ちゅうもん}が{減|へ}っていったのはなぜか。", options: ["{輸入品|ゆにゅうひん}に{比|くら}べて{値段|ねだん}が{高|たか}かったから", "{障子紙|しょうじがみ}しか{作|つく}っておらず、{障子|しょうじ}のある{家|いえ}が{少|すく}なくなったから", "{工房|こうぼう}に{若|わか}い{職人|しょくにん}がいなかったから", "{和紙|わし}を{作|つく}る{技術|ぎじゅつ}を{変|か}えてしまったから"], answer: 1, en: "Why did the washi workshop's orders decrease?", why: { en: "The price problem in paragraph 1 is about regional crafts in general. For this workshop, the text says 障子紙しか作っていなかったばかりに…注文も減っていった." } },
          { q: "{筆者|ひっしゃ}が{最|もっと}も{言|い}いたいことは{何|なに}か。", options: ["{伝統|でんとう}{工芸|こうげい}は、{輸入品|ゆにゅうひん}に{負|ま}けないように{値段|ねだん}を{下|さ}げるべきだ。", "{和紙|わし}のランプシェードは、ヨーロッパで{人気|にんき}を{集|あつ}めている。", "{伝統|でんとう}を{守|まも}るには、{技術|ぎじゅつ}を{大切|たいせつ}にしながら、{使|つか}い{方|かた}を{時代|じだい}に{合|あ}わせて{変|か}えることが{必要|ひつよう}だ。", "{伝統|でんとう}{工芸|こうげい}は、{昔|むかし}の{形|かたち}のまま{守|まも}らなければならない。"], answer: 2, en: "What does the writer most want to say?", why: { en: "Option 2 is a fact from the example, not the main point. The conclusion is in the last paragraph: 守るべきものを守りながら、時代に合わせて変わっていく." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 1", en: "Q4 Listening, part 1 (point comprehension)" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}では、まず{質問|しつもん}を{聞|き}いてください。そのあと、{選択肢|せんたくし}を{読|よ}んでください。それから{話|はなし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the question, then read the options. Then listen to the conversation and choose the best answer from 1–4." },
        items: [
          {
            question: "{男|おとこ}の{人|ひと}は、マラソンを{完走|かんそう}するために{一番|いちばん}{大切|たいせつ}なことは{何|なん}だと{言|い}っていますか。",
            script: [
              { sp: "{女|おんな}", v: "f", ja: "{田中|たなか}さん、フルマラソン{完走|かんそう}したんだって？すごいね。わたしも{来年|らいねん}{出|で}てみたいんだけど、{毎日|まいにち}{何十|なんじゅっ}キロも{走|はし}らなきゃだめなんでしょう？" },
              { sp: "{男|おとこ}", v: "m", ja: "いや、そんなに{走|はし}ることはないよ。ぼくも{週|しゅう}に3{回|かい}、10キロぐらいだったし。" },
              { sp: "{女|おんな}", v: "f", ja: "へえ。じゃあ、いいシューズを{買|か}うとか？" },
              { sp: "{男|おとこ}", v: "m", ja: "シューズも{大事|だいじ}だけど、{高|たか}いのを{買|か}えばいいってものでもないし。{一番|いちばん}{大事|だいじ}なのは、{周|まわ}りの{人|ひと}に{比|くら}べて{自分|じぶん}が{遅|おそ}くても、{気|き}にしないことかな。ぼく、{最初|さいしょ}の{大会|たいかい}で「{前|まえ}の{人|ひと}に{負|ま}けるもんか」って{飛|と}ばしたばかりに、20キロで{足|あし}が{動|うご}かなくなっちゃったんだ。" },
              { sp: "{女|おんな}", v: "f", ja: "あ、じゃあ、{無理|むり}しないで{自分|じぶん}のペースで{走|はし}るってこと？" },
              { sp: "{男|おとこ}", v: "m", ja: "そう。それさえ{守|まも}れば、だれでも{完走|かんそう}できないことはないと{思|おも}うよ。" },
            ],
            en: [
              "W: Tanaka, I heard you finished a full marathon! Amazing. I'd like to try one next year, but you have to run dozens of kilometres every day, right?",
              "M: No, there's no need to run that much. I only did about 10 km three times a week.",
              "W: Really? Then is it about buying good shoes?",
              "M: Shoes matter, but it's not like buying expensive ones is enough. The most important thing is not to worry even if you're slower than the people around you. In my first race I told myself ‘I'm not losing to the guy in front’ and went all out — and because of that my legs stopped working at 20 km.",
              "W: Oh, so you mean running at your own pace without pushing too hard?",
              "M: Right. As long as you stick to that, I think pretty much anyone can finish.",
            ],
            options: ["{毎日|まいにち}{長|なが}い{距離|きょり}を{走|はし}ること", "{自分|じぶん}のペースを{守|まも}ること", "{高|たか}いシューズを{買|か}うこと", "{前|まえ}の{人|ひと}に{負|ま}けないように{走|はし}ること"],
            answer: 1,
            why: { en: "He denies 1 (走ることはない) and 3 (高いのを買えばいいってものでもない), and 4 is what he did wrong. He agrees that the key is 自分のペースで走る." },
          },
          {
            question: "{女|おんな}の{人|ひと}は{昨日|きのう}、{何|なに}をしましたか。",
            script: [
              { sp: "{男|おとこ}", v: "m", ja: "{昨日|きのう}の{映画|えいが}、{来|こ}なかったね。みんなで{待|ま}ってたんだよ。" },
              { sp: "{女|おんな}", v: "f", ja: "ごめんね。{行|い}きたかったんだけど、バイト{先|さき}の{店長|てんちょう}から{急|きゅう}に{電話|でんわ}があって。" },
              { sp: "{男|おとこ}", v: "m", ja: "え、じゃあバイトに{行|い}ったの？" },
              { sp: "{女|おんな}", v: "f", ja: "ううん。{人|ひと}が{足|た}りないから{来|き}てほしいって{言|い}われたんだけど、{月曜日|げつようび}に{試験|しけん}があるでしょう？{今回|こんかい}は{行|い}くわけにはいかないって{断|ことわ}ったの。" },
              { sp: "{男|おとこ}", v: "m", ja: "そうか。じゃあ、ずっと{家|いえ}で{勉強|べんきょう}してたんだ。" },
              { sp: "{女|おんな}", v: "f", ja: "それがね、そのあと{友達|ともだち}から{引|ひ}っ{越|こ}しを{手伝|てつだ}ってって{頼|たの}まれちゃって。{断|ことわ}れなくて、{結局|けっきょく}{一日中|いちにちじゅう}{荷物|にもつ}を{運|はこ}んでたんだ。{勉強|べんきょう}は{全然|ぜんぜん}できなかったよ。" },
            ],
            en: [
              "M: You didn't come to the film yesterday. We were all waiting for you.",
              "W: Sorry. I wanted to go, but the manager at my part-time job suddenly called me.",
              "M: Oh, so you went to work?",
              "W: No. He asked me to come in because they were short-staffed, but I've got an exam on Monday, you know? I told him I couldn't go this time.",
              "M: I see. So you were studying at home the whole time.",
              "W: Well, actually, after that a friend asked me to help her move. I couldn't say no, so in the end I spent the whole day carrying boxes. I didn't get any studying done.",
            ],
            options: ["{友達|ともだち}の{引|ひ}っ{越|こ}しを{手伝|てつだ}った", "{家|いえ}で{試験|しけん}{勉強|べんきょう}をした", "{映画|えいが}を{見|み}に{行|い}った", "アルバイトに{行|い}った"],
            answer: 0,
            why: { en: "She turned down the part-time job and never studied — she spent the day helping a friend move." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 2", en: "Q4 Listening, part 2 (quick response)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. First listen to the sentence, then to the replies, and choose the best reply from 1–3." },
        items: [
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{明日|あした}の{発表|はっぴょう}、{準備|じゅんび}が{全然|ぜんぜん}{終|お}わってないんだ。もうだめかもしれない。" }],
            options: ["そんなにあきらめることはないよ。{今夜|こんや}{手伝|てつだ}うから。", "{準備|じゅんび}が{終|お}わったばかりに、うまくいったんだね。", "{発表|はっぴょう}なんか、するもんか。"],
            answer: 0,
            en: ["M: I haven't finished preparing for tomorrow's presentation at all. It might be hopeless.", "1: No need to give up like that. I'll help you tonight.", "2: So it went well all because you'd finished preparing.", "3: As if I'd ever give a presentation!"],
          },
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{山本|やまもと}さん、この{資料|しりょう}の{翻訳|ほんやく}、{今日中|きょうじゅう}にお{願|ねが}いできる？" }],
            options: ["はい、{昨日|きのう}できたつもりです。", "できないことはないですが、{少|すこ}し{遅|おそ}くなるかもしれません。", "いえ、{今日中|きょうじゅう}にするわけではありません。"],
            answer: 1,
            en: ["W: Mr. Yamamoto, could you translate these documents by the end of today?", "1: Yes, I believe I finished it yesterday.", "2: I suppose I can, but it might be a bit late.", "3: No, it's not that I'll do it today."],
            why: { en: "できないことはないですが… is a hedged ‘yes’ that fits a request. Option 1 is about the past and doesn't answer the request." },
          },
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{部長|ぶちょう}、{顔色|かおいろ}が{悪|わる}いですよ。{今日|きょう}は{早|はや}めにお{帰|かえ}りになったらどうですか。" }],
            options: ["いや、{帰|かえ}らないこともないんだ。", "そうだね。{帰|かえ}るわけではないよ。", "ありがとう。でも、{夕方|ゆうがた}の{会議|かいぎ}があるから、{帰|かえ}るわけにはいかないんだ。"],
            answer: 2,
            en: ["W: Sir, you look pale. Why don't you go home early today?", "1: No, it's not that I won't go home.", "2: That's right. It's not that I'm going home.", "3: Thanks. But I have a meeting this evening, so I can't go home."],
            why: { en: "The manager gives a reason why he can't leave → わけにはいかない. The other two are hedges that don't respond to the suggestion." },
          },
        ],
      },
    },
  ],
});
