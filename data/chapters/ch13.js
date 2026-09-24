N2.register({
  id: 13,
  genre: { ja: "ストーリーを{読|よ}む", en: "Reading a Story" },
  title: { ja: "{人生|じんせい}の{転機|てんき}", en: "A Turning Point in One's Life" },
  canDo: [
    { ja: "ストーリーの{展開|てんかい}を{追|お}って{読|よ}める。", en: "Follow the plot and read a story." },
    { ja: "{登場|とうじょう}{人物|じんぶつ}の{心情|しんじょう}や{決意|けつい}{表明|ひょうめい}などを{理解|りかい}できる。", en: "Understand how the characters feel, their expressions of determination and the like." },
  ],
  parts: [
    // ───────────────────────────── PART (1) ─────────────────────────────
    {
      label: "(1)",
      canDo: [
        { ja: "ストーリーの{展開|てんかい}を{追|お}って{読|よ}める。", en: "Follow the plot and read a story." },
        { ja: "{登場|とうじょう}{人物|じんぶつ}の{心情|しんじょう}が{理解|りかい}できる。", en: "Understand how the characters feel." },
      ],
      sample: {
        kind: "story",
        heading: "{海辺|うみべ}の{和菓子屋|わがしや}（1）",
        lines: [
          { ja: "「{新|あたら}しいプロジェクトのリーダーを{君|きみ}に{任|まか}せるという{話|はなし}だが、あれはなかった**ことにして**くれ」――{課長|かちょう}にそう{言|い}われたのは、{去年|きょねん}の{秋|あき}のことだった。", en: "“About putting you in charge of the new project — let's just say that conversation never happened.” It was last autumn that my section chief told me that." },
          { ja: "{自分|じぶん}では{準備|じゅんび}を{完璧|かんぺき}に{進|すす}めた**つもり**だったが、{大事|だいじ}なプレゼンで{数字|すうじ}を{間違|まちが}え、{取引先|とりひきさき}を{怒|おこ}らせてしまったのだ。", en: "I thought I had prepared everything perfectly, but I got the figures wrong in an important presentation and made our client angry." },
          { ja: "それからは、{会社|かいしゃ}にいる{間|あいだ}じゅう、{周|まわ}りの{目|め}が{気|き}になって**ならなかった**。", en: "After that, the whole time I was at the office, I couldn't stop worrying about how people were looking at me." },
          { ja: "やり{直|なお}せる**ものなら**、あの{日|ひ}に{戻|もど}ってやり{直|なお}したい。そんなことばかり{考|かんが}えながら、{僕|ぼく}はただ{毎日|まいにち}をやり{過|す}ごしていた。", en: "If only I could, I'd go back to that day and do it all over again. Thinking only about that, I just got through one day after another." },
          { ja: "{年末|ねんまつ}の{休|やす}みに、{久|ひさ}しぶりに{海辺|うみべ}の{町|まち}に{住|す}む{祖母|そぼ}を{訪|たず}ねた。", en: "During the year-end holidays, I visited my grandmother, who lives in a seaside town, for the first time in a long while." },
          { ja: "{商店街|しょうてんがい}の{外|はず}れにある{祖母|そぼ}の{和菓子屋|わがしや}は、シャッターが{半分|はんぶん}{下|お}りていた。", en: "My grandmother's Japanese sweets shop, at the edge of the shopping street, had its shutter half down." },
          { ja: "「もう{年|とし}だからね。{春|はる}には{店|みせ}をたたもうと{思|おも}って」と{祖母|そぼ}は{寂|さび}しそうに{笑|わら}った。", en: "“I'm getting old, you know. I'm thinking of closing the shop in spring,” my grandmother said with a lonely smile." },
          { ja: "{帰|かえ}りの{電車|でんしゃ}の{中|なか}で、{僕|ぼく}は{会社|かいしゃ}を{辞|や}めて{店|みせ}を{継|つ}ごう**か**{継|つ}ぐ**まいか**、ずっと{考|かんが}えていた。", en: "On the train home, I kept thinking about whether or not to quit my job and take over the shop." },
          { ja: "そして{一週間|いっしゅうかん}{迷|まよ}った**{末|すえ}**、{僕|ぼく}は{祖母|そぼ}に{電話|でんわ}をかけた。「おばあちゃん、{僕|ぼく}にあの{店|みせ}を{継|つ}がせてくれないか」", en: "Then, after a week of agonizing, I called my grandmother. “Grandma, would you let me take over the shop?”" },
        ],
      },
      points: [
        // ───────── 119 ─────────
        {
          no: 119,
          pattern: "〜たことにする",
          phrase: "なかった**ことにして**くれ",
          stars: 2,
          marks: [],
          usage: {
            ja: "{自分|じぶん}に{都合|つごう}のいいように{事実|じじつ}を{変|か}えて{言|い}うときに{使|つか}われる。",
            en: "Used when you alter the facts to suit your own situation — saying that something happened (or didn't) when that isn't true.",
          },
          forms: ["[V-た] + ことにする", "[V-な~~い~~]かった + ことにする"],
          examples: [
            { ja: "ケーキを{食|た}べたのは{僕|ぼく}だけど、{母|はは}には{弟|おとうと}が{食|た}べた**ことにして**おいてね。", en: "I'm the one who ate the cake, but tell Mom my little brother ate it, OK?" },
            { ja: "さっきの{失礼|しつれい}な{発言|はつげん}は、{聞|き}かなかった**ことにして**ください。", en: "Please pretend you didn't hear that rude remark just now." },
            { ja: "{寝坊|ねぼう}した{彼|かれ}は、{電車|でんしゃ}が{遅|おく}れた**ことにして**{遅刻|ちこく}をごまかした。", en: "He overslept, but covered up his lateness by claiming the train had been delayed." },
            { ja: "{会議|かいぎ}でみんなで{決|き}めたことを、{社長|しゃちょう}の{一言|ひとこと}でなかった**ことにする**なんて、ひどすぎる。", en: "Wiping out what we all decided in the meeting, as if it never happened, just because of one word from the president — that's too much." },
            { ja: "{本当|ほんとう}は{自分|じぶん}で{作|つく}ったのではないが、{料理|りょうり}は{全部|ぜんぶ}{手作|てづく}りした**ことにして**{友達|ともだち}に{出|だ}した。", en: "I didn't actually make it myself, but I served the food to my friends pretending it was all homemade." },
          ],
          deepDive:
            "**V-た / V-なかった + ことにする** means *to treat something as having happened (or not happened)* — a deliberate fiction. The speaker knows the real facts but decides to present, record or behave as if the facts were different, usually because it's convenient.\n\n" +
            "The tense before ことにする is the whole point:\n" +
            "- **V-る + ことにする** (N4) = *decide to do*: 来月から禁煙することにした.\n" +
            "- **V-た + ことにする** (#119) = *pretend that ~ happened*: 禁煙したことにする = act as if you'd quit.\n" +
            "- **V-なかった + ことにする** = *pretend that ~ didn't happen*: 聞かなかったことにする, 見なかったことにする, なかったことにする (*act as if it never existed*, e.g. cancelling an agreement or an offer).\n\n" +
            "Typical endings: **〜ことにしてください / 〜ことにしてくれ / 〜ことにしておいて** (asking someone to go along with the fiction), **〜ことにしよう** (let's agree to pretend), **〜ことにした** (I pretended). The fixed phrase **その話はなかったことにしてください** is a common, soft way of withdrawing an offer or cancelling a plan in business.\n\n" +
            "Don't confuse it with **〜ことになる** (it has been decided, by others/circumstances) or **〜ことにしている** (a personal rule). And note that the nuance is often slightly negative (dishonesty, cover-ups), though it can also be kind: 聞かなかったことにするね = *I'll forget I heard that*.\n\n" +
            "JLPT tip: in multiple choice, check whether the context is a real decision (→ V-る) or a pretence that contradicts the facts (→ V-た / V-なかった). In practice items, ask yourself which version is the *false* one the person wants others to believe.",
          see: [8, 20, 40, 42, 49, 54, 62, 87, 110],
          index: ["Vたことにする", "Vなかったことにする", "なかったことにする"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{弟|おとうと}は{親|おや}に{叱|しか}られないように、{悪|わる}い{点|てん}のテストを（　）ことにして、{机|つくえ}の{奥|おく}に{隠|かく}した。", options: ["返してもらった", "返してもらわなかった"], answer: 1, en: "So as not to be scolded by our parents, my little brother pretended he hadn't got back the test with the bad score, and hid it at the back of his desk.", why: { en: "He did get the test back; the pretence is that he didn't → V-なかったことにする." } },
                { q: "{友達|ともだち}にお{金|かね}を{借|か}りたのに、（　）ことにするなんて、{信用|しんよう}をなくすよ。", options: ["借りた", "借りなかった"], answer: 1, en: "You borrowed money from your friend and now you're acting as if you didn't? You'll lose their trust." },
                { q: "{電話|でんわ}に{出|で}たくなかったので、{寝|ね}て（　）ことにした。", options: ["いた", "いなかった"], answer: 0, en: "I didn't want to answer the phone, so I pretended I'd been asleep." },
                { q: "{選挙|せんきょ}の{前|まえ}にした{約束|やくそく}を、{当選|とうせん}したとたんに（　）ことにする{政治家|せいじか}は{信用|しんよう}できない。", options: ["した", "しなかった"], answer: 1, en: "You can't trust politicians who act as if they never made their pre-election promises the moment they win." },
              ],
            },
          ],
        },
        // ───────── 120 ─────────
        {
          no: 120,
          pattern: "〜つもり（だ）",
          phrase: "{完璧|かんぺき}に{進|すす}めた**つもり**だった",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜つもり」は、{周囲|しゅうい}の{評価|ひょうか}や{事実|じじつ}はともかく、「{本人|ほんにん}は〜と{思|おも}っている」と{言|い}いたいときに{使|つか}う。",
            en: "〜つもり here expresses what the person *thinks* — “I thought I had ~ / he thinks he is ~” — regardless of what others think or what the facts are.",
          },
          forms: ["[V-る] / [V-た] + つもり", "[V-て]いる + つもり", "[N]の + つもり"],
          examples: [
            { ja: "{鍵|かぎ}をかけた**つもり**だったのに、{帰|かえ}ったらドアが{開|あ}いていた。", en: "I thought I'd locked the door, but when I got home it was open." },
            { ja: "{毎日|まいにち}{気|き}をつけている**つもり**なのに、{体重|たいじゅう}がなかなか{減|へ}らない。", en: "I believe I'm being careful every day, but my weight just won't go down." },
            { ja: "{褒|ほ}めた**つもり**だったが、{彼女|かのじょ}は{嫌|いや}な{顔|かお}をした。", en: "I meant it as a compliment, but she made a face." },
            { ja: "{彼|かれ}はリーダーの**つもり**らしいが、だれも{彼|かれ}の{指示|しじ}に{従|したが}わない。", en: "He seems to think he's the leader, but nobody follows his instructions." },
            { ja: "{自分|じぶん}ではわかりやすく{説明|せつめい}する**つもり**でも、{相手|あいて}に{伝|つた}わらなければ{意味|いみ}がない。", en: "Even if you think you're explaining clearly, it's meaningless if the other person doesn't understand." },
          ],
          deepDive:
            "This **〜つもり** is not about intention (*I plan to*) but about **self-perception**: what someone believes they did, are doing, or are. The gap between belief and reality is usually the point, so it's typically followed by contrast words: **〜つもりだったが / 〜つもりなのに / 〜つもりでも / 〜つもりらしいが**.\n\n" +
            "Connections and their meanings:\n" +
            "- **V-た + つもり**: *I thought I had done ~*: 送ったつもりだった (but it wasn't sent).\n" +
            "- **V-ている + つもり**: *I believe I'm doing ~*: 努力しているつもりだ.\n" +
            "- **V-る + つもり**: with this meaning, usually about a state or ability: わかるつもりでいた.\n" +
            "- **N + の + つもり**: *thinks of oneself as N*: 冗談のつもり *meant as a joke*, 親切のつもり *meant as kindness*, 若いつもり / プロのつもり. (い-adjectives can also be used directly: 若いつもり.)\n\n" +
            "Compare the three つもり in the book:\n" +
            "- **N4 つもり** = plan/intention: 来年留学するつもりです.\n" +
            "- **つもり① (#59)** = *imagine you've done ~ and act on it*: 旅行に行ったつもりで貯金する (*save money as if you'd gone on a trip*). It's a conscious, positive pretence.\n" +
            "- **つもり② (#120)** = the speaker genuinely believes it, but may be wrong.\n\n" +
            "Also compare **〜たことにする** (#119): there you *know* it's false and pretend; with つもり you *think* it's true.\n\n" +
            "Common mistake: using つもり for other people's intentions without evidence. For a third person add らしい / ようだ: 彼は冗談のつもりらしい.\n\n" +
            "JLPT tip: if the sentence goes “I did X (つもり) … but actually Y”, つもり② is the answer; if it goes “imagine X and do Y”, it's #59.",
          see: [59],
          index: ["〜つもり②", "Vたつもり", "Vているつもり", "Nのつもり"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{駅|えき}までの{道|みち}を{詳|くわ}しく{教|おし}えたつもりだったのに、",
                "スープに{砂糖|さとう}を{入|い}れたつもりだったが、",
                "{親切|しんせつ}のつもりでしたことが、",
                "まだまだ{体力|たいりょく}があるつもりだったが、",
              ],
              right: [
                "{少|すこ}し{階段|かいだん}を{上|のぼ}っただけで{息|いき}が{切|き}れてしまった。",
                "{相手|あいて}にはありがた{迷惑|めいわく}だったようだ。",
                "{友達|ともだち}は{反対|はんたい}の{方向|ほうこう}へ{行|い}ってしまったらしい。",
                "{実|じつ}は{塩|しお}だったので、しょっぱくて{飲|の}めなかった。",
              ],
              answer: [2, 3, 1, 0],
              en: [
                "I thought I'd given detailed directions to the station, but my friend apparently went the opposite way.",
                "I thought I'd put sugar in the soup, but it was actually salt, so it was too salty to drink.",
                "What I did out of what I thought was kindness seems to have been an unwelcome favor to the other person.",
                "I thought I still had plenty of stamina, but I got out of breath after climbing just a few stairs.",
              ],
            },
          ],
        },
        // ───────── 121 ─────────
        {
          no: 121,
          pattern: "〜てならない",
          phrase: "{気|き}になって**ならなかった**",
          stars: 2,
          marks: ["regret"],
          usage: {
            ja: "「〜てならない」は、「{非常|ひじょう}に〜だ」と{言|い}いたいときに{使|つか}われる。",
            en: "〜てならない is used when you want to say something is *extremely* ~: “I can't help feeling ~ / I'm terribly ~”.",
          },
          forms: ["[V-て] + ならない", "[いA~~い~~]くて + ならない", "[なA~~な~~]で + ならない"],
          formNotes: [
            { ja: "「{残念|ざんねん}・{不安|ふあん}・{心配|しんぱい}・つらい・くやしい」など、{感情|かんじょう}を{表|あらわ}す{言葉|ことば}と{一緒|いっしょ}に{使|つか}う。", en: "It is used with words expressing feelings, such as 残念 (disappointing), 不安 (uneasy), 心配 (worried), つらい (painful) and くやしい (frustrating)." },
            { ja: "「きれい・{下手|へた}」など、{評価|ひょうか}を{表|あらわ}す{言葉|ことば}とは{一緒|いっしょ}に{使|つか}わない。", en: "It is NOT used with words that evaluate something, such as きれい (pretty) or 下手 (bad at). ✗きれいでならない." },
          ],
          examples: [
            { ja: "{入試|にゅうし}の{結果|けっか}が{気|き}になって**ならない**。", en: "I can't stop worrying about my entrance exam results." },
            { ja: "{一人|ひとり}で{暮|く}らしている{父|ちち}のことが{心配|しんぱい}で**ならない**。", en: "I'm terribly worried about my father, who lives alone." },
            { ja: "{卒業|そつぎょう}して{仲間|なかま}と{別|わか}れるのが、{寂|さび}しくて**ならない**。", en: "I'm so sad about graduating and parting from my friends." },
            { ja: "あと{一点|いってん}で{優勝|ゆうしょう}を{逃|のが}したことが、{今|いま}でも{残念|ざんねん}で**ならない**。", en: "Even now I deeply regret missing the championship by a single point." },
            { ja: "どうも{彼|かれ}が{何|なに}かを{隠|かく}しているように{思|おも}えて**ならない**。", en: "I can't shake the feeling that he's hiding something." },
          ],
          deepDive:
            "**〜てならない** expresses a feeling so strong that it seems to arise *by itself* and can't be suppressed. The ならない here is not *must not*; it's closer to *it's unbearable / it can't be helped*.\n\n" +
            "What goes before it:\n" +
            "- **Emotion words**: 心配で, 不安で, 残念で, 悲しくて, くやしくて, 寂しくて, つらくて, 腹が立って.\n" +
            "- **Spontaneous verbs** (things that happen in your mind without your will): 気になる, 思える, 思い出される, 感じられる, 悔やまれる. 〜ように思えてならない *I can't help thinking that ~* is extremely common.\n" +
            "- NOT evaluation words: ✗きれいでならない, ✗上手でならない, ✗高くてならない (for price). It must be an internal feeling, not an assessment of something.\n\n" +
            "Compare its close relatives:\n" +
            "- **〜てたまらない** (N3): same meaning, more colloquial and emotional, and also fine for physical sensations: 暑くてたまらない, 足が痛くてたまらない. 〜てならない sounds more written and is less natural with pure bodily sensations.\n" +
            "- **〜てしかたがない / 〜てしょうがない**: also *extremely*, conversational.\n\n" +
            "Person: it describes the speaker's own feelings. For someone else, add らしい / ようだ / と言っている: 彼は将来が不安でならないらしい.\n\n" +
            "JLPT tip: distractors often include **〜かねない** (#27, *might (do something bad)*) and **〜はずがない** (*can't possibly*). If the blank describes the speaker's strong feeling, pick てならない; if it predicts a bad outcome, pick かねない.",
          see: [27],
          index: ["〜てならない", "Vてならない", "Aくてならない", "Aでならない"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "あのとき{別|べつ}の{大学|だいがく}を{選|えら}んでいたら、{人生|じんせい}が{大|おお}きく{変|か}わっていたように（　）。", options: ["思えてならない", "思いかねない"], answer: 0, en: "I can't help thinking that my life would have been very different if I had chosen another university back then." },
                { q: "あんなにスピードを{出|だ}して{運転|うんてん}していたら、いつか{大|おお}きな{事故|じこ}に（　）。", options: ["なってならない", "なりかねない"], answer: 1, en: "If he keeps driving that fast, he could end up in a serious accident one day.", why: { en: "This predicts a possible bad outcome → なりかねない (#27). てならない describes a feeling, not a prediction." } },
                { q: "A：{僕|ぼく}のこと、もう{嫌|きら}いになったんでしょう？\nB：そんなこと、（　）でしょう。", options: ["思えてならない", "思うはずがない"], answer: 1, en: "A: You don't like me anymore, do you? B: There's no way I'd think that!" },
                { q: "{新|あたら}しい{仕事|しごと}はおもしろいが、{毎朝|まいあさ}5{時|じ}{起|お}きなので、{昼|ひる}ごろになると（　）。", options: ["眠くてならない", "眠いはずがない"], answer: 0, en: "My new job is interesting, but since I get up at five every morning, I get terribly sleepy around noon." },
              ],
            },
          ],
        },
        // ───────── 122 ─────────
        {
          no: 122,
          pattern: "〜ものなら",
          phrase: "やり{直|なお}せる**ものなら**",
          stars: 2,
          marks: [],
          usage: {
            ja: "{現実|げんじつ}には{無理|むり}だ・{難|むずか}しいと{思|おも}っていることを、「もしできるなら」と{強|つよ}く{希望|きぼう}するときに{使|つか}う。{会話|かいわ}では「もんなら」になる。",
            en: "Used when you strongly wish for something that you actually think is impossible or very unlikely — “if only I could ~”. In casual conversation it becomes もんなら.",
          },
          forms: ["[V-できる] + ものなら", "[V-できる] + もんなら"],
          formNotes: [
            { ja: "「かなう・{治|なお}る」など、{可能|かのう}の{意味|いみ}を{持|も}つ{動詞|どうし}の{辞書形|じしょけい}も{使|つか}われる。", en: "The dictionary form of verbs that already carry a sense of possibility (e.g. かなう “come true”, 治る “get better”) is also used." },
          ],
          examples: [
            { ja: "{戻|もど}れる**ものなら**、{学生|がくせい}{時代|じだい}に{戻|もど}ってもう一度{勉強|べんきょう}したい。", en: "If only I could, I'd go back to my student days and study all over again." },
            { ja: "{代|か}われる**ものなら**、{入院|にゅういん}している{娘|むすめ}と{代|か}わってやりたい。", en: "If it were possible, I'd gladly take my hospitalized daughter's place." },
            { ja: "{休|やす}める**もんなら**{休|やす}みたいけど、{今週|こんしゅう}は{締|し}め{切|き}りが{三|みっ}つもあるんだよ。", en: "I'd take a day off if I could, but I've got three deadlines this week." },
            { ja: "この{腰|こし}の{痛|いた}みが{治|なお}る**ものなら**、どんな{治療|ちりょう}でも{受|う}けたい。", en: "If this back pain could be cured, I'd undergo any treatment." },
            { ja: "{願|ねが}いがかなう**ものなら**、{亡|な}くなった{祖父|そふ}にもう一度{会|あ}いたい。", en: "If wishes could come true, I'd like to meet my late grandfather once more." },
          ],
          deepDive:
            "**Potential verb + ものなら** = *if it were at all possible to ~ (though I doubt it)*. The speaker assumes the condition is hard or impossible, and the second clause expresses a longing: **〜たい / 〜たいと思う / 〜てみたい / 〜てやりたい**. Very often the same verb is repeated: 行けるものなら行きたい, 帰れるものなら帰りたい.\n\n" +
            "Two structural points:\n" +
            "- It follows the **potential form** (行ける, 戻れる, やり直せる, 代われる), or a verb that already means *can happen* (治る, かなう, 間に合う).\n" +
            "- In speech: **〜もんなら** (帰れるもんなら帰りたいよ).\n\n" +
            "A challenge use also exists: **やれるものならやってみろ** *go ahead, try it if you think you can* — the speaker is sure the other can't.\n\n" +
            "Don't confuse it with **V-(よ)うものなら** *if you (dare to) do ~, something terrible will happen* (遅刻しようものなら、先生にひどく怒られる). Different connection (volitional form), different meaning — not a wish but a warning.\n\n" +
            "Other もの / もん patterns you must keep apart: **ものだ** (#13, #132), **ものではない** (#46), **ものか** (#51), **というものだ** (#52), **というものではない** (#25), **もん** (#56), **ものがある** (#92), and especially **ものの** (#39, *although*). ものの looks similar but means *even though X, Y (contrary)*: 練習はしたものの、本番では失敗した.\n\n" +
            "JLPT tip: if the clause after the blank is a wish (〜たい) and the thing wished for is unrealistic, ものなら is the answer. If the second clause contradicts the first, it's ものの.",
          see: [13, 25, 39, 46, 51, 52, 56, 92, 132],
          index: ["Vものなら", "Vもんなら", "Vれるものなら"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{時間|じかん}を{巻|ま}き{戻|もど}せる（　）、{昨日|きのう}の{面接|めんせつ}をやり{直|なお}したい。", options: ["ものなら", "ものの"], answer: 0, en: "If only I could turn back time, I'd redo yesterday's interview." },
                { q: "{頭|あたま}ではわかっている（　）、なかなか{行動|こうどう}に{移|うつ}せない。", options: ["ものなら", "ものの"], answer: 1, en: "Although I understand it in my head, I just can't put it into action.", why: { en: "The second clause contrasts with the first (understand, but can't act) → ものの (#39)." } },
                { q: "{父|ちち}は{一日|いちにち}も{休|やす}む（　）、40{年間|ねんかん}{同|おな}じ{工場|こうじょう}で{働|はたら}き{続|つづ}けた。", options: ["ものなら", "ことなく"], answer: 1, en: "My father worked at the same factory for 40 years without taking a single day off." },
                { q: "{若|わか}いころに{戻|もど}れる（　）{戻|もど}りたいが、それは{無理|むり}な{話|はなし}だ。", options: ["ものなら", "だけあって"], answer: 0, en: "I'd go back to my youth if I could, but that's impossible." },
              ],
            },
          ],
        },
        // ───────── 123 ─────────
        {
          no: 123,
          pattern: "〜（よ）うか〜まいか",
          phrase: "{継|つ}ごう**か**{継|つ}ぐ**まいか**",
          stars: 1,
          marks: [],
          usage: {
            ja: "どうしようか{迷|まよ}っていると{言|い}いたいときに{使|つか}う。",
            en: "Used to say you are uncertain about what to do (whether to do something or not).",
          },
          forms: ["[V-よう] + か + [V-る] + まいか"],
          examples: [
            { ja: "{新|あたら}しいスマホを{買|か}おう**か**{買|か}う**まいか**、もう一か{月|げつ}も{悩|なや}んでいる。", en: "I've been agonizing for a whole month over whether or not to buy a new smartphone." },
            { ja: "{親友|しんゆう}に{本当|ほんとう}のことを{話|はな}そう**か**{話|はな}す**まいか**、{迷|まよ}っている。", en: "I can't decide whether to tell my best friend the truth." },
            { ja: "{熱|ねつ}があったので、{試合|しあい}に{出|で}よう**か**{出|で}る**まいか**{迷|まよ}ったが、{結局|けっきょく}{出|で}ることにした。", en: "I had a fever, so I hesitated over whether to play in the match, but in the end I decided to play." },
            { ja: "{同窓会|どうそうかい}に{参加|さんか}しよう**か**する**まいか**{考|かんが}えているうちに、{申|もう}し{込|こ}みの{締|し}め{切|き}りが{過|す}ぎてしまった。", en: "While I was still deciding whether to go to the class reunion, the registration deadline passed." },
          ],
          deepDive:
            "**V-(よ)うか + V-る + まいか** literally sets two wills side by side: *shall I do it? / shall I not do it?* (まい is the negative volitional, #93). The whole phrase is almost always followed by a verb of hesitation: **迷う, 悩む, 考える, ためらう, 決めかねる**.\n\n" +
            "Form it carefully:\n" +
            "- The **same verb** appears twice: first in volitional form (行こう, 食べよう, しよう), then + まい.\n" +
            "- まい normally attaches to the dictionary form: 行くまい, 話すまい. For ru-verbs you may also see the stem (食べまい), for する → するまい / しまい, for 来る → 来るまい / 来まい (こまい).\n" +
            "- The か after each half is required: ✗行こう行くまいか.\n\n" +
            "Register: it's a literary, slightly old-fashioned expression, used in novels, essays and narration — perfect for a story like this chapter's. In conversation people say **〜しようかどうか（迷う）** or **〜するかしないか（迷う）**: 行こうかどうか迷ってる.\n\n" +
            "Compare with the other まい (#93): **〜まい** alone means *probably won't* (conjecture) or *will never* (strong negative will): 二度と行くまい. #123 embeds that negative will in a choice.\n\n" +
            "JLPT tip: in ordering questions (問題2), look for the pair **〜ようか** and **〜まいか** with the same verb, then place 迷う / 悩む right after.",
          see: [93],
          index: ["VかVまいか", "Vようか Vまいか"],
        },
        // ───────── 124 ─────────
        {
          no: 124,
          pattern: "〜{末|すえ}（に）",
          phrase: "{迷|まよ}った**{末|すえ}**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{長|なが}い{間|あいだ}〜をして、{最後|さいご}に…という{結果|けっか}になった」と{言|い}いたいときに{使|つか}う。{実際|じっさい}には{長|なが}くなくても、{話者|わしゃ}にとって「{長|なが}く{感|かん}じられた」という{場合|ばあい}にも{使|つか}う。",
            en: "Used to say “after doing ~ for a long time, in the end the result was …”. It can also be used when it didn't actually take long, but *felt* long to the speaker.",
          },
          forms: ["[V-た] + {末|すえ}（に）", "[N]の + {末|すえ}（に）"],
          examples: [
            { ja: "{三時間|さんじかん}の{話|はな}し{合|あ}いの**{末|すえ}**、{新|あたら}しい{店|みせ}の{名前|なまえ}がようやく{決|き}まった。", en: "After three hours of discussion, the name of the new shop was finally decided." },
            { ja: "{何度|なんど}も{失敗|しっぱい}を{重|かさ}ねた**{末|すえ}に**、{研究|けんきゅう}チームは{新|あたら}しい{薬|くすり}の{開発|かいはつ}に{成功|せいこう}した。", en: "After failing many times, the research team succeeded in developing a new drug." },
            { ja: "{延長戦|えんちょうせん}の**{末|すえ}**、{地元|じもと}のチームが{勝|か}った。", en: "After extra time, the local team won." },
            { ja: "よく{考|かんが}えた**{末|すえ}**、{大学院|だいがくいん}には{進|すす}まずに{就職|しゅうしょく}することにした。", en: "After thinking it over carefully, I decided to get a job instead of going on to graduate school." },
            { ja: "{激|はげ}しい{議論|ぎろん}の**{末|すえ}**、その{計画|けいかく}は{見送|みおく}られることになった。", en: "After heated debate, it was decided to shelve the plan." },
          ],
          deepDive:
            "**〜末（に）** comes from 末 *end, tip*. It frames a result as the end point of a long process — effort, discussion, hesitation, struggle: 苦労の末, 検討の末, 話し合いの末, 悩んだ末, 迷った末. It's a written, somewhat formal expression (news, narratives, speeches).\n\n" +
            "Forms:\n" +
            "- **V-た末（に）**: 考えた末に決めた.\n" +
            "- **Nの末（に）**: 努力の末に合格した. The noun is usually an action noun (交渉, 議論, 検討, 熟慮).\n" +
            "- **〜末の + N**: 苦労の末の成功 *success that came after hardship*.\n\n" +
            "The result after 末 can be **positive, neutral or negative** — it's just the outcome of a long process. That's the main difference from:\n" +
            "- **〜あげく（に）** (#45): also *after a long ~*, but the process was troublesome and the result is usually **bad or disappointing**, often with a feeling of exasperation: さんざん迷ったあげく、何も買わなかった. You wouldn't use あげく for a happy success like 合格した.\n" +
            "- **〜際（に）** (#7): simply *when / on the occasion of*; no idea of a long process: 契約する際に説明を受けた.\n\n" +
            "Don't confuse it with 末 as a time word: 今月末 (*end of this month*), 年末 (*year end*), 学期末.\n\n" +
            "Common mistakes: ✗考える末に (needs V-た); ✗苦労な末 (needs の).\n\n" +
            "JLPT tip: the classic choice is 末に vs あげく(に). Look at the result: good or neutral → 末; bad or ‘in the end nothing came of it’ → あげく (though 末 is also possible with bad results, あげく is not possible with good ones).",
          see: [7, 45],
          index: ["〜末（に）", "Vた末", "Nの末"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいものを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{祖父|そふ}は{何年|なんねん}も{研究|けんきゅう}を{続|つづ}けた（　）、ついに{寒|さむ}さに{強|つよ}い{米|こめ}を{作|つく}り{出|だ}した。", options: ["際に", "末に", "あげくに"], answer: 1, en: "After years of research, my grandfather finally produced a variety of rice that tolerates cold.", why: { en: "A long process with a successful result → 末に. あげく is not used for good results." } },
                { q: "{飛行機|ひこうき}に{乗|の}る（　）、パスポートと{搭乗券|とうじょうけん}を{見|み}せてください。", options: ["際に", "末に", "あげくに"], answer: 0, en: "When boarding the plane, please show your passport and boarding pass." },
                { q: "{彼|かれ}は{店員|てんいん}にさんざん{文句|もんく}を{言|い}った（　）、{何|なに}も{買|か}わずに{帰|かえ}ってしまった。", options: ["際に", "末に", "あげくに"], answer: 2, en: "After complaining at length to the shop assistant, he left without buying anything.", why: { en: "A troublesome process followed by an annoying, fruitless result — the typical territory of あげく (#45)." } },
                { q: "{家族|かぞく}と{何度|なんど}も{相談|そうだん}した（　）、{地元|じもと}に{戻|もど}って{就職|しゅうしょく}することに{決|き}めた。", options: ["際に", "末に", "あげくに"], answer: 1, en: "After talking it over with my family many times, I decided to go back to my hometown and work there." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["でならない", "末", "ことにして", "まいか", "つもり", "ものなら"],
        items: [
          { q: "{明日|あした}の{母|はは}の{手術|しゅじゅつ}がうまくいくかどうか、{心配|しんぱい}＿＿。", answer: "でならない", en: "I'm terribly worried about whether my mother's operation tomorrow will go well." },
          { q: "{生|う}まれ{変|か}われる＿＿、{次|つぎ}は{鳥|とり}になって{自由|じゆう}に{空|そら}を{飛|と}びたい。", answer: "ものなら", en: "If I could be reborn, next time I'd like to be a bird and fly freely in the sky." },
          { q: "{一年|いちねん}{近|ちか}く{就職|しゅうしょく}{活動|かつどう}を{続|つづ}けた＿＿、やっと{希望|きぼう}の{会社|かいしゃ}から{内定|ないてい}をもらった。", answer: "末", en: "After nearly a year of job hunting, I finally got an offer from the company I wanted." },
          { q: "{兄|あに}は{母|はは}に{頼|たの}まれた{買|か}い{物|もの}を{忘|わす}れたのに、{店|みせ}が{閉|し}まっていた＿＿ごまかした。", answer: "ことにして", en: "My brother forgot the shopping Mom had asked him to do, but covered it up by pretending the shop was closed." },
          { q: "{全部|ぜんぶ}{覚|おぼ}えた＿＿だったのに、テストでは{半分|はんぶん}も{書|か}けなかった。", answer: "つもり", en: "I thought I'd memorized everything, but in the test I couldn't write even half." },
          { q: "{会社|かいしゃ}を{辞|や}めようか{辞|や}める＿＿、{誰|だれ}にも{相談|そうだん}できずに{一人|ひとり}で{悩|なや}んでいる。", answer: "まいか", en: "I'm agonizing alone, unable to talk to anyone about whether or not to quit my job." },
        ],
      },
    },
    // ───────────────────────────── PART (2) ─────────────────────────────
    {
      label: "(2)",
      canDo: [
        { ja: "ストーリーの{展開|てんかい}を{追|お}って{読|よ}める。", en: "Follow the plot and read a story." },
        { ja: "{登場|とうじょう}{人物|じんぶつ}の{心情|しんじょう}や{決意|けつい}{表明|ひょうめい}などを{理解|りかい}できる。", en: "Understand how the characters feel, their expressions of determination and the like." },
      ],
      sample: {
        kind: "story",
        heading: "{海辺|うみべ}の{和菓子屋|わがしや}（2）",
        lines: [
          { ja: "「**たとえ**どんなに{苦労|くろう}することになって**も**、{後悔|こうかい}しないかい？」{祖母|そぼ}は{何度|なんど}もそう{聞|き}いた。", en: "“Even if it turns out to be really hard, you won't regret it?” my grandmother asked again and again." },
          { ja: "{会社|かいしゃ}に{辞表|じひょう}を{出|だ}すと、{課長|かちょう}は「{今|いま}の{安定|あんてい}を{捨|す}てるなんて、{理解|りかい}し**がたい**ね」と{首|くび}をかしげた。", en: "When I handed in my resignation, my section chief tilted his head and said, “Throwing away the security you have now — I find that hard to understand.”" },
          { ja: "{両親|りょうしん}が{止|と}めるの**もかまわず**、{僕|ぼく}は{春|はる}に{海辺|うみべ}の{町|まち}へ{引|ひ}っ{越|こ}した。", en: "Ignoring my parents' attempts to stop me, I moved to the seaside town in spring." },
          { ja: "{初|はじ}めて{一人|ひとり}で{店番|みせばん}をした{日|ひ}、{常連|じょうれん}のお{客|きゃく}さんに{話|はな}しかけられた{僕|ぼく}は、{緊張|きんちょう}の**あまり**、お{釣|つ}りを{床|ゆか}にばらまいてしまった。", en: "The first day I minded the shop on my own, a regular customer spoke to me, and I was so nervous that I scattered the change all over the floor." },
          { ja: "{祖母|そぼ}はあんを{炊|た}きながら、いつもこう{言|い}う。「お{菓子|かし}はね、{食|た}べる{人|ひと}の{顔|かお}を{思|おも}い{浮|う}かべて、{心|こころ}**を{込|こ}めて**{作|つく}るんだよ」", en: "While simmering the sweet bean paste, my grandmother always says, “You make sweets by picturing the faces of the people who'll eat them, and putting your heart into it.”" },
          { ja: "{小|ちい}さな{店|みせ}なので、{僕|ぼく}は{菓子|かし}{作|づく}り**も**すれ**ば**{配達|はいたつ}**も**する。", en: "It's a small shop, so I both make the sweets and do the deliveries." },
          { ja: "{給料|きゅうりょう}は{会社員|かいしゃいん}{時代|じだい}の{半分|はんぶん}{以下|いか}になったが、{毎日|まいにち}がこんなに{楽|たの}しいとは{思|おも}わなかった。", en: "My income is less than half of what it was when I was a company employee, but I never imagined every day could be so enjoyable." },
          { ja: "この{店|みせ}と{祖母|そぼ}の{味|あじ}を、{僕|ぼく}がこれからも{守|まも}り**ぬく**ぞ。", en: "I'm going to protect this shop and my grandmother's flavors, no matter what, from here on." },
        ],
      },
      points: [
        // ───────── 125 ─────────
        {
          no: 125,
          pattern: "たとえ〜ても",
          phrase: "**たとえ**どんなに{苦労|くろう}することになって**も**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「たとえ〜ても」は「もし〜ても」という{意味|いみ}で、「どんな{場合|ばあい}でも」と{強|つよ}く{言|い}いたいときに{使|つか}う。",
            en: "たとえ〜ても means “even if ~”, and is used when you want to say strongly “no matter what the situation”.",
          },
          forms: ["たとえ + [V-て]も", "たとえ + [いA~~い~~]くても", "たとえ + [なA~~な~~]でも", "たとえ + [N]でも"],
          examples: [
            { ja: "**たとえ**{親|おや}に{反対|はんたい}され**ても**、{私|わたし}は{音楽|おんがく}の{道|みち}に{進|すす}みたい。", en: "Even if my parents oppose it, I want to pursue a career in music." },
            { ja: "**たとえ**{小|ちい}さな{店|みせ}**でも**、いつか{自分|じぶん}の{店|みせ}を{持|も}つのが{夢|ゆめ}だ。", en: "Even if it's only a small one, my dream is to have my own shop someday." },
            { ja: "**たとえ**{値段|ねだん}が{高|たか}く**ても**、{子|こ}どもには{安全|あんぜん}な{食品|しょくひん}を{食|た}べさせたい。", en: "Even if it costs more, I want to give my children safe food." },
            { ja: "**たとえ**{冗談|じょうだん}**でも**、{人|ひと}を{傷|きず}つけるようなことを{言|い}ってはいけない。", en: "Even as a joke, you mustn't say things that hurt people." },
            { ja: "**たとえ**どんなに{大変|たいへん}**でも**、{一度|いちど}{引|ひ}き{受|う}けた{仕事|しごと}は{最後|さいご}までやる。", en: "However tough it is, I finish any job I've accepted." },
          ],
          deepDive:
            "**たとえ** is an adverb that announces a concessive condition in advance: *even if (hypothetically) ~*. It doesn't change the grammar of 〜ても; it strengthens it and tells the listener early that “whatever happens, the conclusion stands”.\n\n" +
            "Forms after たとえ: **V-ても** (反対されても), **いA-くても** (高くても), **なA-でも** (大変でも), **N-でも** (冗談でも, 子どもでも). たとえ is often combined with question words for maximum emphasis: **たとえどんなに〜ても / たとえ何があっても / たとえだれが〜ても**.\n\n" +
            "The second clause is usually a firm decision, a strong feeling, a rule or a judgment: 〜たい, 〜するつもりだ, 〜てはいけない, 〜べきだ, 〜ない.\n\n" +
            "Points to watch:\n" +
            "- **もし** is mainly for conditions (ば / たら / なら): もし雨が降ったら. もし〜ても does exist (the book glosses たとえ〜ても as もし〜ても), but たとえ is the adverb that specifically signals a concession, and only たとえ combines naturally with どんなに / 何が: たとえどんなに〜ても, not ✗もしどんなに〜ても.\n" +
            "- **いくら〜ても** (*no matter how much*) is close but focuses on degree: いくら練習しても上手にならない. It doesn't combine with どんなに: ✗いくらどんなに.\n" +
            "- **たとえ〜としても / たとえ〜としたって** (#137): same idea, a bit more hypothetical.\n" +
            "- Don't confuse **たとえ** with **たとえば** (*for example*).\n\n" +
            "Register: neutral; fine in both speech and writing.\n\n" +
            "JLPT tip: in a passage-grammar blank before どんな〜ても, the answer is たとえ. And whenever you see たとえ in a question, check that the end of the clause is ても / でも.",
          see: [137],
          index: ["たとえ〜ても", "たとえ〜でも", "たとえどんなに〜ても"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "たとえ{雨|あめ}が{降|ふ}っても、",
                "たとえ{家族|かぞく}に{頼|たの}まれても、",
                "たとえ{一日|いちにち}10{分|ぷん}でも、",
                "たとえ{結果|けっか}が{悪|わる}くても、",
              ],
              right: [
                "{毎日|まいにち}{続|つづ}ければ{必|かなら}ず{力|ちから}になる。",
                "{全力|ぜんりょく}を{出|だ}したのなら{後悔|こうかい}はない。",
                "マラソン{大会|たいかい}は{予定|よてい}どおり{行|おこな}われる。",
                "{他人|たにん}の{秘密|ひみつ}を{話|はな}すわけにはいかない。",
              ],
              answer: [2, 3, 0, 1],
              en: [
                "Even if it rains, the marathon will be held as planned.",
                "Even if my family asks me, I can't reveal other people's secrets.",
                "Even if it's only ten minutes a day, it will definitely pay off if you keep it up every day.",
                "Even if the result is bad, if you gave it everything, you'll have no regrets.",
              ],
            },
          ],
        },
        // ───────── 126 ─────────
        {
          no: 126,
          pattern: "〜がたい",
          phrase: "{理解|りかい}し**がたい**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜がたい」は、「〜するのは{難|むずか}しい、なかなか〜することができない」という{意味|いみ}で{使|つか}う。",
            en: "〜がたい means “it is difficult to ~ / one can hardly ~”.",
          },
          forms: ["[V-~~ます~~] + がたい"],
          formNotes: [
            { ja: "「{信|しん}じる・{理解|りかい}する・{納得|なっとく}する・{認|みと}める・{得|え}る・{許|ゆる}す・{忘|わす}れる」などの{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "It is used with words such as 信じる (believe), 理解する (understand), 納得する (accept), 認める (admit), 得る (obtain), 許す (forgive) and 忘れる (forget)." },
          ],
          examples: [
            { ja: "あの{優|やさ}しい{先輩|せんぱい}が{会社|かいしゃ}のお{金|かね}を{使|つか}い{込|こ}んでいたなんて、{信|しん}じ**がたい**。", en: "It's hard to believe that kind senior colleague had been embezzling company money." },
            { ja: "{十分|じゅうぶん}な{説明|せつめい}もないまま{料金|りょうきん}が{上|あ}がるのは、{納得|なっとく}し**がたい**。", en: "It's hard to accept the fee going up without any proper explanation." },
            { ja: "{初|はじ}めての{一人旅|ひとりたび}で{見|み}た{景色|けしき}は、{忘|わす}れ**がたい**{思|おも}い{出|で}になった。", en: "The scenery I saw on my first solo trip became an unforgettable memory." },
            { ja: "{弱|よわ}い{立場|たちば}の{人|ひと}をだましてお{金|かね}を{取|と}るのは、{許|ゆる}し**がたい**{行為|こうい}だ。", en: "Cheating vulnerable people out of their money is an unforgivable act." },
            { ja: "この{映画|えいが}は{話題|わだい}にはなったが、{完成度|かんせいど}が{高|たか}いとは{言|い}い**がたい**。", en: "This film got people talking, but it can hardly be called a polished work." },
          ],
          deepDive:
            "**V-stem + がたい** (from 難い *difficult*) means that doing something is hard — but almost always in a **psychological or moral** sense: you can't bring yourself to believe, accept, forgive or forget it. It's written and formal; in conversation people would say 信じられない, 許せない, 納得できない.\n\n" +
            "Typical verbs: **信じがたい, 理解しがたい, 納得しがたい, 認めがたい, 許しがたい, 忘れがたい, 受け入れがたい, 耐えがたい, 近寄りがたい** (*unapproachable*), **得がたい** (えがたい, *hard to come by, precious*), **言いがたい** (〜とは言いがたい *can hardly be called ~*), **動かしがたい事実** (*an undeniable fact*).\n\n" +
            "Compare with the other *difficult to* suffixes:\n" +
            "- **〜にくい** (N4): physical or practical difficulty — この道は歩きにくい, 字が小さくて読みにくい. ✗歩きがたい.\n" +
            "- **〜づらい**: difficulty that causes discomfort or reluctance — 言いづらい, 読みづらい; conversational.\n" +
            "- **〜かねる**: *I'm unable to (for circumstantial/politeness reasons)* — 賛成しかねます; a polite refusal, not an assessment.\n" +
            "- **〜ようがない** (#44): *there's no way to ~* (no means exists) — 連絡の取りようがない.\n\n" +
            "Grammar: がたい conjugates like an い-adjective (がたく, がたかった) and often modifies a noun: 許しがたい行為, 忘れがたい経験. The everyday word ありがたい originally meant *rare, hard to exist* — the same がたい.\n\n" +
            "JLPT tip: if the verb is about belief, acceptance or emotion and the tone is formal, がたい is correct. If the difficulty is physical (walk, read, use), choose にくい.",
          see: [44],
          index: ["Vがたい", "信じがたい", "〜とは言いがたい"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{会議|かいぎ}で{決|き}まった{新|あたら}しいルールは、{現場|げんば}の{社員|しゃいん}には（　）ものだった。", options: ["受け入れがたい", "受け入れるおそれがある"], answer: 0, en: "The new rule decided at the meeting was hard for the staff on site to accept." },
                { q: "この{箸|はし}は{先|さき}が{太|ふと}くて、{豆|まめ}が（　）。", options: ["つかみがたい", "つかみにくい"], answer: 1, en: "These chopsticks have thick tips, so beans are hard to pick up.", why: { en: "Physical difficulty → にくい. がたい is for psychological difficulty (believe, accept, forgive…)." } },
                { q: "{彼|かれ}の{実力|じつりょく}が{本物|ほんもの}であることは、だれにも（　）。", options: ["否定しがたい", "否定するにすぎない"], answer: 0, en: "Nobody can deny that his ability is genuine." },
                { q: "{電話番号|でんわばんごう}も{住所|じゅうしょ}もわからないので、{連絡|れんらく}の（　）。", options: ["取りがたい", "取りようがない"], answer: 1, en: "I don't know his phone number or address, so there's no way to contact him.", why: { en: "There is no means of contact at all → 〜ようがない (#44). Also, 連絡の + がたい is ungrammatical." } },
              ],
            },
          ],
        },
        // ───────── 127 ─────────
        {
          no: 127,
          pattern: "〜もかまわず",
          phrase: "{両親|りょうしん}が{止|と}めるの**もかまわず**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜もかまわず…」は、「{普通|ふつう}は{気|き}にしたほうがいいことを、{無視|むし}して（{気|き}にしないで）…する」と{言|い}いたいときに{使|つか}う。{批判的|ひはんてき}に{使|つか}うことが{多|おお}い。",
            en: "〜もかまわず… means “do … while ignoring ~, something one would normally be concerned about”. It is often used critically.",
          },
          forms: ["[N] + もかまわず"],
          examples: [
            { ja: "{隣|となり}の{人|ひと}たちの{迷惑|めいわく}**もかまわず**、{彼|かれ}らは{夜遅|よるおそ}くまでベランダで{騒|さわ}いでいた。", en: "With no regard for the trouble they caused the neighbors, they made noise on the balcony until late at night." },
            { ja: "{雨|あめ}に{濡|ぬ}れるの**もかまわず**、{子|こ}どもたちは{校庭|こうてい}を{走|はし}り{回|まわ}っていた。", en: "Not caring that they were getting wet in the rain, the children ran around the schoolyard." },
            { ja: "{医者|いしゃ}が{注意|ちゅうい}するの**もかまわず**、{父|ちち}はまたタバコを{吸|す}い{始|はじ}めた。", en: "Despite the doctor's warnings, my father started smoking again." },
            { ja: "{母|はは}は{自分|じぶん}の{体調|たいちょう}**もかまわず**、{毎晩|まいばん}{遅|おそ}くまで{祖父|そふ}の{看病|かんびょう}を{続|つづ}けた。", en: "Paying no heed to her own health, my mother kept nursing my grandfather late into every night." },
            { ja: "{駅|えき}のホームで、ところ**かまわず**{座|すわ}り{込|こ}んでスマホを{見|み}ている{若者|わかもの}がいる。", en: "On station platforms, you see young people who sit down just anywhere and look at their phones.", idiom: true },
          ],
          deepDive:
            "**〜もかまわず** comes from かまう *to mind, to care about* (cf. かまわない *it doesn't matter*). So N もかまわず = *not minding even N*. The も signals that N is something one *should* normally care about — other people's trouble, being seen, getting dirty, one's own health, a warning.\n\n" +
            "Connection:\n" +
            "- **N + もかまわず**: 迷惑もかまわず, 人目もかまわず, 周囲の視線もかまわず.\n" +
            "- A clause is turned into a noun with **の**: **V-る / V-ている + の + もかまわず**: 靴が濡れるのもかまわず, 人が見ているのもかまわず, 親が止めるのもかまわず.\n" +
            "- Idiomatic expressions (the book marks ところかまわず with its idiom sign): **ところかまわず** (no も) *anywhere at all, without caring where* — ところかまわずつばを吐く; **人目もかまわず** *without caring who is watching* — 人目もかまわず抱き合って泣いた.\n\n" +
            "Nuance: most often **critical** — the speaker disapproves of someone's thoughtlessness (公園で人目もかまわず大声で電話する). But it can also describe devotion or intensity in a neutral or even admiring way (自分の体調もかまわず看病した), or, as in this chapter's story, determination.\n\n" +
            "Contrast with the other *regardless of* expressions:\n" +
            "- **〜を問わず** (#2) and **〜にかかわらず** (#5) are objective and neutral: a rule or fact applies regardless of a range (年齢を問わず). They don't describe anyone's attitude.\n" +
            "- **〜もかまわず** describes a person's attitude: they *ignore* something they should consider. So ✗年齢もかまわず参加できる is wrong; ✓年齢を問わず参加できる.\n" +
            "- Paraphrase: **〜も気にせず / 〜を無視して**.\n\n" +
            "JLPT tip: when the sentence criticizes someone's behavior in public (noise, manners) and the blank follows a noun like 迷惑 or 人目, もかまわず is the answer.",
          see: [2, 5],
          index: ["Nもかまわず", "Vのもかまわず", "ところかまわず", "人目もかまわず"],
        },
        // ───────── 128 ─────────
        {
          no: 128,
          pattern: "〜あまり",
          phrase: "{緊張|きんちょう}の**あまり**",
          stars: 2,
          marks: ["regret"],
          usage: {
            ja: "「〜あまり…」は、「{非常|ひじょう}に〜で（…という{結果|けっか}になった）」と{言|い}いたいときに{使|つか}う。よくない{結果|けっか}のときに{使|つか}うことが{多|おお}い。",
            en: "〜あまり… is used to say “(someone) was so extremely ~ that … happened”. It is often used when the result is not good.",
          },
          forms: ["[V-る] + あまり", "[なA]な + あまり", "[N]の + あまり"],
          formNotes: [
            { ja: "「{心配|しんぱい}・うれしさ・{悲|かな}しさ・{緊張|きんちょう}」などの{感情|かんじょう}を{表|あらわ}す{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "It is often used together with words that express feelings, such as 心配 (worry), うれしさ (joy), 悲しさ (sadness) and 緊張 (nervousness)." },
          ],
          examples: [
            { ja: "{娘|むすめ}の{将来|しょうらい}を{心配|しんぱい}する**あまり**、{父親|ちちおや}は{何|なに}にでも{口|くち}を{出|だ}してしまう。", en: "Worrying so much about his daughter's future, the father ends up meddling in everything." },
            { ja: "{合格|ごうかく}の{知|し}らせを{聞|き}いた{彼女|かのじょ}は、うれしさの**あまり**{泣|な}き{出|だ}した。", en: "When she heard she had passed, she burst into tears of joy." },
            { ja: "{完璧|かんぺき}を{求|もと}める**あまり**、{作業|さぎょう}がなかなか{先|さき}に{進|すす}まない。", en: "Because he's such a perfectionist, the work hardly moves forward." },
            { ja: "{彼|かれ}は{慎重|しんちょう}な**あまり**、せっかくのチャンスを{逃|のが}してしまった。", en: "He was so cautious that he missed a golden opportunity." },
            { ja: "{怒|いか}りの**あまり**、{言|い}ってはいけないことまで{口|くち}にしてしまった。", en: "I was so angry that I even said things I shouldn't have." },
          ],
          deepDive:
            "**〜あまり** (余り *excess*) means *because of too much ~*: an emotion or attitude goes beyond normal and causes a result — usually an unintended, uncontrolled and often unwelcome one: crying, freezing, forgetting, failing, being unable to speak.\n\n" +
            "Connections:\n" +
            "- **Nの + あまり**: 緊張のあまり, 喜びのあまり, 悲しみのあまり, 怒りのあまり.\n" +
            "- **い-adjectives** can't attach directly, so they become nouns with **-さ**: うれしさのあまり, 痛さのあまり, 忙しさのあまり, 恥ずかしさのあまり.\n" +
            "- **なA + な + あまり**: 慎重なあまり, 熱心なあまり, 真面目なあまり.\n" +
            "- **V-る + あまり**: mostly verbs of feeling or attitude: 心配するあまり, 気にするあまり, 急ぐあまり, 期待するあまり.\n\n" +
            "Restrictions on the result clause:\n" +
            "- It is a **fact** (usually past) that happened as a consequence, not something the person chose. ✗心配のあまり電話してください (no requests/commands/intentions).\n" +
            "- Deliberate, sensible actions sound odd: ✗緊張のあまり、資料をもう一度確認した. You'd expect 手が震えた, 声が出なかった, 頭が真っ白になった.\n\n" +
            "Related forms:\n" +
            "- **あまりの + N + に**: あまりの暑さに倒れそうになった *the heat was so extreme that…* (another common N2 pattern).\n" +
            "- **あまり〜ない** (N4) *not very* and **あまりに(も)** *too, excessively* are different uses of the same word.\n\n" +
            "JLPT tip: questions often give two possible results — one uncontrolled/negative (dropped the cup, forgot the anniversary, did nothing) and one deliberate/neutral. Choose the uncontrolled one.",
          see: [],
          index: ["〜あまり", "Nのあまり", "Vあまり", "なAなあまり"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{久|ひさ}しぶりに{孫|まご}に{会|あ}った{祖母|そぼ}は、うれしさのあまり（　）。", options: ["涙を流した", "孫と公園へ出かけた"], answer: 0, en: "Seeing her grandchild for the first time in a long while, the grandmother cried with joy." },
                { q: "スピーチの{前|まえ}、{緊張|きんちょう}のあまり（　）。", options: ["話す内容をメモにまとめた", "手が震えて止まらなかった"], answer: 1, en: "Before my speech, I was so nervous that my hands wouldn't stop shaking.", why: { en: "あまり needs an uncontrolled consequence. Summarizing notes is a sensible, deliberate action." } },
                { q: "{子|こ}どものけがを{心配|しんぱい}するあまり、{母親|ははおや}は（　）。", options: ["子どもを外で遊ばせなくなった", "子どもの傷に薬を塗った"], answer: 0, en: "Worrying excessively that her child might get hurt, the mother stopped letting him play outside." },
                { q: "{決勝|けっしょう}で{負|ま}けたくやしさのあまり、{彼|かれ}は（　）。", options: ["その夜、一睡もできなかった", "次の大会に向けて計画を立てた"], answer: 0, en: "He was so frustrated at losing the final that he couldn't sleep a wink that night." },
              ],
            },
          ],
        },
        // ───────── 129 ─────────
        {
          no: 129,
          pattern: "〜を{込|こ}めて",
          phrase: "{心|こころ}**を{込|こ}めて**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜を{込|こ}めて…」は、「{愛情|あいじょう}、{思|おも}いなどの{気持|きも}ちを{入|い}れて（…する）」という{意味|いみ}で{使|つか}う。",
            en: "〜を込めて… means “to do … putting in (a lot of) love, thought or some other feeling”.",
          },
          forms: ["[N] + を{込|こ}めて"],
          formNotes: [
            { ja: "「{心|こころ}・{愛|あい}・{親|した}しみ・{祈|いの}り・{恨|うら}み・{怒|いか}り」などの{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "It is used with words such as 心 (heart), 愛 (love), 親しみ (affection), 祈り (prayer), 恨み (grudge) and 怒り (anger)." },
          ],
          examples: [
            { ja: "{感謝|かんしゃ}の{気持|きも}ち**を{込|こ}めて**、{担任|たんにん}の{先生|せんせい}に{手紙|てがみ}を{書|か}いた。", en: "I wrote a letter to my homeroom teacher, full of gratitude." },
            { ja: "{祖母|そぼ}は{心|こころ}**を{込|こ}めて**、{孫|まご}の{誕生日|たんじょうび}のケーキを{焼|や}いた。", en: "My grandmother lovingly baked a birthday cake for her grandchild." },
            { ja: "{子|こ}どもたちの{健康|けんこう}への{祈|いの}り**を{込|こ}めて**、{毎年|まいとし}{神社|じんじゃ}に{絵馬|えま}を{奉納|ほうのう}している。", en: "Every year we offer a votive tablet at the shrine, with a prayer for our children's health." },
            { ja: "{彼|かれ}は{怒|いか}り**を{込|こ}めて**、{机|つくえ}を{強|つよ}くたたいた。", en: "He slammed the desk in anger." },
            { ja: "{店長|てんちょう}は{親|した}しみ**を{込|こ}めて**、{常連|じょうれん}の{客|きゃく}一人一人に{声|こえ}をかけている。", en: "The manager warmly greets each of the regular customers." },
          ],
          deepDive:
            "**Nを込めて** (込める *to load, to put into*) describes the feeling that is poured into an action: 心を込めて作る *make with care*, 愛を込めて贈る *give with love*. It's the adverbial form; the noun-modifying form is **Nを込めた + N**: 感謝を込めた手紙, 願いを込めた歌.\n\n" +
            "What can be 込めた: 心, 愛（情）, 気持ち, 思い, 感謝, 願い, 祈り, 親しみ, 皮肉 (irony), 恨み, 怒り. So it's not only positive — 恨みを込めてにらむ *glare with hatred*. Physical force too: **力を込めて押す** *push with all one's strength*.\n\n" +
            "- **心を込めて** is almost a set phrase: 心を込めてお作りしました (restaurant/shop language), 心を込めて歌います.\n" +
            "- Often preceded by **〜への**: 平和への願いを込めて, 故郷への思いを込めて.\n\n" +
            "Grammar distractors seen with it on the test:\n" +
            "- **〜にこたえて** (#118): *in response to (a request, expectation)*: ファンの声援にこたえて.\n" +
            "- **〜に先立って** (#116): *prior to*.\n" +
            "- **〜につれて** (#65): *as ~ changes*.\n" +
            "- **〜にそって** (#108): *in line with (a plan, policy)*.\n\n" +
            "Quick test: if the noun is a **feeling** and the action is done *with* that feeling, choose を込めて. If the noun is a request/expectation, it's にこたえて; if it's a plan/manual, it's にそって.\n\n" +
            "Note the kanji: 込める (こめる) — the same 込 as 込む (こむ, *be crowded*). In many texts it's written in hiragana: 心をこめて.",
          see: [65, 108, 116, 118],
          index: ["Nを込めて", "Nを込めた", "心を込めて"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{父|ちち}の{還暦|かんれき}の{祝|いわ}いに、{家族|かぞく}みんなで{感謝|かんしゃ}（　）{花束|はなたば}を{贈|おく}った。", options: ["を込めて", "にこたえて"], answer: 0, en: "For my father's 60th birthday, the whole family gave him a bouquet with our gratitude." },
                { q: "{大人|おとな}になる（　）、{父|ちち}の{苦労|くろう}がわかるようになった。", options: ["を込めて", "につれて"], answer: 1, en: "As I grew up, I came to understand the hardships my father went through." },
                { q: "{開会式|かいかいしき}（　）、{選手|せんしゅ}たちの{入場|にゅうじょう}{行進|こうしん}が{行|おこな}われた。", options: ["を込めて", "に先立って"], answer: 1, en: "Before the opening ceremony, the athletes' entrance parade was held." },
                { q: "{被災地|ひさいち}の{一日|いちにち}も{早|はや}い{復興|ふっこう}への{願|ねが}い（　）、{子|こ}どもたちが{大|おお}きな{絵|え}を{描|か}いた。", options: ["を込めて", "にそって"], answer: 0, en: "The children painted a large picture, filled with the wish that the disaster-hit area would recover as quickly as possible." },
              ],
            },
          ],
        },
        // ───────── 130 ─────────
        {
          no: 130,
          pattern: "〜も〜ば〜も",
          phrase: "{菓子|かし}{作|づく}り**も**すれ**ば**{配達|はいたつ}**も**する",
          stars: 2,
          marks: [],
          usage: {
            ja: "プラスイメージの{言葉|ことば}を{重|かさ}ねて「よい{点|てん}が{多|おお}くある」と{言|い}うときと、マイナスイメージの{言葉|ことば}を{重|かさ}ねて「{悪|わる}い{点|てん}が{多|おお}くある」と{言|い}うときに{使|つか}われる。「{晴|は}れの{日|ひ}もあれば{雨|あめ}の{日|ひ}もある」のように、「いろいろある」という{意味|いみ}を{表|あらわ}すこともある。",
            en: "Used to stack up positive words to say something has many good points, or negative words to say it has many bad points. It can also express variety — “there's this and there's also that” — as in 晴れの日もあれば雨の日もある.",
          },
          forms: ["[N] + も + [V-ば] + [N] + も", "[N] + も + [いA~~い~~]ければ + [N] + も", "[N] + も + [なA~~な~~]なら + [N] + も"],
          examples: [
            { ja: "{新|あたら}しいアパートは{駅|えき}**も**{近|ちか}けれ**ば**、{家賃|やちん}**も**{安|やす}い。", en: "My new apartment is close to the station, and the rent is cheap too." },
            { ja: "{彼女|かのじょ}は{英語|えいご}**も**{話|はな}せれ**ば**、{中国語|ちゅうごくご}**も**{話|はな}せる。", en: "She can speak English, and Chinese as well." },
            { ja: "あの{店|みせ}は{店員|てんいん}の{態度|たいど}**も**{悪|わる}けれ**ば**、{料理|りょうり}**も**おいしくない。", en: "At that restaurant the staff are rude, and the food isn't good either." },
            { ja: "{兄|あに}はスポーツ**も**{得意|とくい}なら、{勉強|べんきょう}**も**よくできる。", en: "My older brother is good at sports and does well at his studies too." },
            { ja: "{旅|たび}には{楽|たの}しいこと**も**あれ**ば**、{大変|たいへん}なこと**も**ある。", en: "On a trip there are fun moments, and there are hard ones too." },
          ],
          deepDive:
            "**A も 〜ば B も 〜** lists two facts in the same direction to emphasize *not only this but also that*. The conditional ば here has nothing to do with *if*; it just links the two clauses.\n\n" +
            "Rules of thumb:\n" +
            "- **Same direction**: both good (駅も近ければ家賃も安い) or both bad (態度も悪ければ料理もまずい). Mixing sounds wrong: ✗駅も近ければ家賃も高い (use けど / が for contrast).\n" +
            "- **Forms**: V-ば (話せれば, あれば, すれば), いA-ければ (近ければ, よければ), なA-なら / N-なら (得意なら, 上手なら, 学生なら).\n" +
            "- **Negatives** fit too: 新聞も読まなければテレビも見ない *reads no newspapers and watches no TV*.\n\n" +
            "The **variety** use: **〜もあれば〜もある / 〜もいれば〜もいる** *some ~, others ~*: 賛成する人もいれば反対する人もいる, 5月は暑い日もあれば寒い日もある. Here the two parts can be opposites — that's the point (there's a mix).\n\n" +
            "Compare other listing patterns:\n" +
            "- **〜し、〜し** (N4): casual, often giving reasons: 安いし、近いし.\n" +
            "- **〜やら〜やら** (#98): lists a chaotic mix of things, usually with a feeling of hassle.\n" +
            "- **〜にしても〜にしても** (#106): *whether A or B*.\n\n" +
            "Common mistake: using たら instead of ば (✗駅も近かったら家賃も安い) — only ば (or なら) makes this listing pattern.\n\n" +
            "JLPT tip: this pattern is a favorite in 問題2 (sentence ordering). Look for two も-pieces and one ば-piece: the order is always **N1も → 〜ば → N2も → predicate**. Then check which predicate matches which ば-form.",
          see: [98, 106],
          index: ["NもVばNも", "〜も〜ば〜も", "〜もあれば〜もある", "〜もいれば〜もいる"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいものを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{町|まち}は{空気|くうき}も（　）、{水|みず}も（　）ので、{都会|とかい}から{移|うつ}り{住|す}む{人|ひと}が{増|ふ}えている。", options: ["きれいなら／おいしい", "きれいなら／まずい", "汚ければ／おいしい", "汚ければ／まずい"], answer: 0, en: "The air in this town is clean and the water tastes good, so more and more people are moving here from the city.", why: { en: "Both parts must point the same way, and the result (people moving in) shows they're positive." } },
                { q: "{駅前|えきまえ}の{新|あたら}しいホテルは、{部屋|へや}も（　）、{朝食|ちょうしょく}も（　）ので、{不満|ふまん}の{声|こえ}が{多|おお}い。", options: ["広ければ／豪華だ", "広ければ／付いていない", "狭ければ／豪華だ", "狭ければ／付いていない"], answer: 3, en: "The new hotel by the station has small rooms and doesn't even include breakfast, so there are lots of complaints." },
                { q: "{祖父|そふ}はもう90{歳|さい}だが、{眼鏡|めがね}なしで{新聞|しんぶん}も（　）ば、パソコンも（　）。", options: ["読めれ／使える", "読めれ／使えない", "読めなけれ／使える", "読めなけれ／使えない"], answer: 0, en: "My grandfather is already 90, but he can read the newspaper without glasses and use a computer too.", why: { en: "が (but) after 90歳 signals something impressive, so both parts are positive." } },
                { q: "{同|おな}じクラスでも、{数学|すうがく}が{好|す}きな{学生|がくせい}もいれば、{嫌|きら}いな{学生|がくせい}も（　）。", options: ["いる", "いない"], answer: 0, en: "Even in the same class, some students like math and others dislike it." },
              ],
            },
          ],
        },
        // ───────── 131 ─────────
        {
          no: 131,
          pattern: "〜ぬく",
          phrase: "{守|まも}り**ぬく**ぞ",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜ぬく」は、「{苦|くる}しくても{最後|さいご}までがんばって〜をする」という{意味|いみ}で{使|つか}われる。また、「{非常|ひじょう}に〜する」という{意味|いみ}を{表|あらわ}すこともある。",
            en: "〜ぬく is used to mean “do ~ to the very end, sticking with it even when it's hard”. It can also mean “do ~ to an extreme degree / thoroughly”.",
          },
          forms: ["[V-~~ます~~] + ぬく"],
          formNotes: [
            { ja: "「やる・{生|い}きる・がんばる」「{考|かんが}える・{悩|なや}む・{困|こま}る・{苦|くる}しむ」などの{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "It is used with words like やる, 生きる, がんばる (→ “to the end”) and 考える, 悩む, 困る, 苦しむ (→ “thoroughly, extremely”)." },
          ],
          examples: [
            { ja: "{途中|とちゅう}で{足|あし}が{痛|いた}くなったが、42キロを{最後|さいご}まで{走|はし}り**ぬいた**。", en: "My legs started hurting partway, but I ran the full 42 kilometers to the end." },
            { ja: "{一度|いちど}{始|はじ}めたことは、{最後|さいご}までやり**ぬき**なさい。", en: "Once you've started something, see it through to the end." },
            { ja: "{戦後|せんご}の{苦|くる}しい{時代|じだい}を{生|い}き**ぬいた**{祖母|そぼ}の{言葉|ことば}には{重|おも}みがある。", en: "The words of my grandmother, who survived the hard postwar years, carry real weight." },
            { ja: "{何日|なんにち}も{考|かんが}え**ぬいて**{出|だ}した{結論|けつろん}だから、もう{迷|まよ}わない。", en: "It's a conclusion I reached after thinking it through for days, so I won't waver now." },
            { ja: "{悩|なや}み**ぬいた**{末|すえ}に、{彼女|かのじょ}は{海外|かいがい}の{大学|だいがく}に{進|すす}むことを{選|えら}んだ。", en: "After agonizing over it, she chose to go to a university abroad." },
          ],
          deepDive:
            "**V-stem + ぬく** (抜く *to pull through, to go all the way*) has two related meanings:\n\n" +
            "- **Doing something to the end despite hardship**: やりぬく, がんばりぬく, 走りぬく, 戦いぬく, 生きぬく, 守りぬく, 耐えぬく. It carries determination and endurance — perfect for declarations: 最後までやりぬくぞ！ 必ず守りぬく.\n" +
            "- **Doing something thoroughly / to the extreme**, with verbs of thinking or suffering: 考えぬく, 悩みぬく, 困りぬく, 苦しみぬく, 選びぬく (選びぬかれた素材 *carefully selected ingredients*). 悩みぬいた末 (#124) is a very natural combination.\n\n" +
            "Grammar: ぬく conjugates as a normal godan verb: ぬいた, ぬいて, ぬける (potential: やりぬける *can see it through*), ぬこう.\n\n" +
            "Compare:\n" +
            "- **〜きる** (N3): *completely* — focuses on finishing a quantity or reaching a limit: 使いきる, 食べきる, 疲れきる. ぬく focuses on perseverance through difficulty. 走りきる and 走りぬく are both possible, but ぬく emphasizes the struggle.\n" +
            "- **〜通す**: *keep doing without change*: 貫き通す, 黙り通す.\n\n" +
            "Distractors on the test: **〜がち** (#111, *tend to*), **〜つつ** (#30, *while*), **〜がたい** (#126, *hard to*). Remember: 生きがちには ✗, but 生きぬくには ✓.\n\n" +
            "Common mistake: attaching ぬく to verbs with no sense of effort (✗寝ぬく, ✗見ぬく in the sense of ‘watch to the end’ — 見抜く actually means *to see through (a lie)*, a separate word).",
          see: [30, 111, 124, 126],
          index: ["Vぬく", "やりぬく", "考えぬく"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{重|おも}い{病気|びょうき}と{闘|たたか}い（　）{選手|せんしゅ}の{姿|すがた}に、{多|おお}くの{人|ひと}が{勇気|ゆうき}をもらった。", options: ["ぬいた", "がちな"], answer: 0, en: "Many people drew courage from the athlete who fought a serious illness to the end." },
                { q: "{会社|かいしゃ}の{仕事|しごと}を{続|つづ}け（　）、{夜|よる}は{大学院|だいがくいん}に{通|かよ}って{学位|がくい}を{取|と}った。", options: ["ぬき", "つつ"], answer: 1, en: "While continuing to work at the company, I attended graduate school at night and earned a degree.", why: { en: "Two actions going on at the same time → つつ (#30)." } },
                { q: "{何週間|なんしゅうかん}も{迷|まよ}い（　）{末|すえ}に{選|えら}んだ{道|みち}だから、{後悔|こうかい}はない。", options: ["ぬいた", "に比べた"], answer: 0, en: "It's the path I chose after weeks of agonizing, so I have no regrets." },
                { q: "このチームなら、どんなに{苦|くる}しい{試合|しあい}でも{最後|さいご}まで{戦|たたか}い（　）と{信|しん}じている。", options: ["ぬける", "がたい"], answer: 0, en: "I believe this team can fight to the very end, however tough the match." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。（6・7は「も〜ば〜も」と「たとえ〜ても」の{区別|くべつ}）", en: "Choose the word that fills each blank. (Items 6–7 test the difference between も〜ば〜も and たとえ〜ても.)" },
        bank: ["を込めて", "もかまわず", "ぬく", "あまり", "がたい", "ば", "ても"],
        items: [
          { q: "{彼|かれ}は{医者|いしゃ}に{止|と}められているの＿＿、{毎晩|まいばん}お{酒|さけ}を{飲|の}んでいる。", answer: "もかまわず", en: "He drinks every night, ignoring the fact that his doctor has told him to stop." },
          { q: "{旅先|たびさき}で{世話|せわ}になった{人|ひと}たちに、{感謝|かんしゃ}＿＿{手紙|てがみ}を{送|おく}った。", answer: "を込めて", en: "I sent a letter full of gratitude to the people who looked after me on my trip." },
          { q: "{初|はじ}めてのデートで、{彼|かれ}は{緊張|きんちょう}の＿＿ほとんど{何|なに}も{話|はな}せなかった。", answer: "あまり", en: "On their first date, he was so nervous that he could hardly say anything." },
          { q: "{苦|くる}しい{時期|じき}もあったが、{仲間|なかま}に{支|ささ}えられて{最後|さいご}まで{走|はし}り＿＿ことができた。", answer: "ぬく", en: "There were hard times, but supported by my teammates, I was able to run all the way to the end." },
          { q: "{事故|じこ}の{原因|げんいん}が{単純|たんじゅん}な{確認|かくにん}ミスだったとは、{信|しん}じ＿＿ことだ。", answer: "がたい", en: "It's hard to believe that the cause of the accident was a simple checking error." },
          { q: "この{部屋|へや}は{日当|ひあ}たりもよけれ＿＿、{窓|まど}からの{眺|なが}めもいい。", answer: "ば", en: "This room gets plenty of sun, and the view from the window is nice too." },
          { q: "たとえ{給料|きゅうりょう}が{下|さ}がっ＿＿、{今|いま}の{仕事|しごと}を{続|つづ}けたい。", answer: "ても", en: "Even if my salary goes down, I want to keep doing my current job." },
        ],
      },
    },
  ],
  // ───────────────────────────── まとめの問題 ─────────────────────────────
  review: [
    {
      title: { ja: "問題1 〈{文法|ぶんぽう}{形式|けいしき}の{判断|はんだん}〉", en: "Q1 Choosing the grammar form" },
      ex: {
        type: "choice",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の（　）に{入|い}れるのに{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Choose the best option (1–4) to fill the ( )." },
        items: [
          { q: "{十年|じゅうねん}{一緒|いっしょ}に{暮|く}らした{犬|いぬ}が{死|し}んでしまい、（　）。", options: ["悲しいわけがなかった", "悲しくなりかねなかった", "悲しくてならなかった", "悲しいつもりでいた"], answer: 2, en: "The dog I'd lived with for ten years died, and I was overwhelmed with sadness." },
          { q: "{彼女|かのじょ}は{雨|あめ}で{服|ふく}が{濡|ぬ}れるの（　）、いなくなった{猫|ねこ}を{探|さが}し{続|つづ}けた。", options: ["もかまわず", "をめぐって", "に応じて", "にこたえて"], answer: 0, en: "Not caring that her clothes were getting soaked in the rain, she kept looking for her missing cat." },
          { q: "{何度|なんど}も{試作|しさく}を{繰|く}り{返|かえ}した（　）、ようやく{満足|まんぞく}できる{味|あじ}のパンが{完成|かんせい}した。", options: ["あげく", "以上", "末に", "ついでに"], answer: 2, en: "After making trial batches again and again, I finally completed a bread with a taste I was satisfied with.", why: { en: "The result is a success, so あげく (used for bad outcomes) doesn't fit; 末に does." } },
          { q: "たとえ{周|まわ}りの{人|ひと}に（　）、{自分|じぶん}で{決|き}めた{道|みち}を{進|すす}みたい。", options: ["笑われても", "笑われるから", "笑われなければ", "笑われたとたん"], answer: 0, en: "Even if the people around me laugh at me, I want to follow the path I chose myself." },
          { q: "{証拠|しょうこ}が{何|なに}もない{以上|いじょう}、{彼|かれ}の{話|はなし}をそのまま{信|しん}じ（　）。", options: ["ぬく", "がたい", "がちだ", "かけだ"], answer: 1, en: "As long as there is no evidence at all, it's hard to take his story at face value." },
          { q: "{結婚式|けっこんしき}で、{新婦|しんぷ}は{両親|りょうしん}への{感謝|かんしゃ}（　）{手紙|てがみ}を{読|よ}み{上|あ}げた。", options: ["に応じた", "を込めた", "にわたる", "を通じた"], answer: 1, en: "At the wedding, the bride read aloud a letter full of gratitude to her parents." },
          { q: "{宝|たから}くじが{当|あ}たったと{知|し}った{彼|かれ}は、（　）{電車|でんしゃ}の{中|なか}で{大声|おおごえ}を{出|だ}してしまい、{周|まわ}りの{人|ひと}に{笑|わら}われた。", options: ["喜ぶくせに", "喜んだ末に", "喜びのあまり", "喜ぶかわりに"], answer: 2, en: "When he found out he'd won the lottery, he was so overjoyed that he shouted out loud on the train and people around him laughed." },
          { q: "{苦|くる}しい{生活|せいかつ}の{中|なか}、{母|はは}は{一人|ひとり}で{三人|さんにん}の{子|こ}どもを{立派|りっぱ}に{育|そだ}て（　）。", options: ["ぬいた", "がちだった", "かけた", "っぱなしだった"], answer: 0, en: "In the midst of a hard life, my mother raised three children on her own, and raised them well." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "この{店|みせ}は", after: "ので、いつも{混|こ}んでいる。", pieces: ["{安|やす}ければ", "{量|りょう}も", "{多|おお}い", "{値段|ねだん}も"], order: [3, 0, 1, 2], star: 2, en: "This restaurant is cheap and the portions are big, so it's always crowded." },
          { before: "{彼|かれ}は", after: "{上司|じょうし}に{言|い}い{訳|わけ}をした。", pieces: ["{寝坊|ねぼう}した", "のに", "ことにして", "{電車|でんしゃ}が{遅|おく}れた"], order: [0, 1, 3, 2], star: 2, en: "Even though he had overslept, he made excuses to his boss, pretending that the train had been delayed." },
          { before: "{新人|しんじん}に{仕事|しごと}の{手順|てじゅん}を", after: "、あとで{聞|き}いてみると、ほとんど{伝|つた}わっていなかった。", pieces: ["つもり", "{丁寧|ていねい}に", "だったが", "{説明|せつめい}した"], order: [1, 3, 0, 2], star: 2, en: "I thought I had explained the work procedure to the new employee carefully, but when I asked later, hardly any of it had got through." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[4]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage and, considering its overall content, choose the best option for each of blanks [1]–[4]." },
        title: "{町|まち}の{映画館|えいがかん}「さくら{座|ざ}」",
        text: [
          "{駅前|えきまえ}の「さくら{座|ざ}」は、七十年{続|つづ}く{小|ちい}さな{映画館|えいがかん}だ。三代目の{館主|かんしゅ}である{村井|むらい}さんは、{客|きゃく}が{減|へ}って{経営|けいえい}が{苦|くる}しい{時期|じき}も、この{映画館|えいがかん}を{守|まも}り[1]きた。{館内|かんない}には、{昔|むかし}の{名作|めいさく}を{楽|たの}しむお{年寄|としよ}り[2]いれば、{話題|わだい}の{新作|しんさく}を{見|み}に{来|く}る{高校生|こうこうせい}もいる。",
          "ところが{昨年|さくねん}、{建物|たてもの}が{古|ふる}くなったため、{映画館|えいがかん}を{閉|し}めなければならなくなった。「できる[3]、もう{一度|いちど}この{場所|ばしょ}で{映画|えいが}を{上映|じょうえい}したい」と、{村井|むらい}さんはインターネットで{修理|しゅうり}{費用|ひよう}の{寄付|きふ}を{呼|よ}びかけた。",
          "すると、{全国|ぜんこく}から{寄付|きふ}が{集|あつ}まり、「[4]どんなに{時間|じかん}がかかっても、さくら{座|ざ}を{残|のこ}してほしい」というメッセージもたくさん{届|とど}いた。{工事|こうじ}は{順調|じゅんちょう}に{進|すす}んでおり、この{春|はる}、さくら{座|ざ}は{再|ふたた}び{幕|まく}を{開|あ}ける{予定|よてい}だ。",
        ],
        en: [
          "Sakura-za, in front of the station, is a small cinema with a seventy-year history. Mr. Murai, the third-generation owner, has kept the cinema going even through hard times when audiences fell and business was tough. Inside, there are elderly people enjoying old classics, and also high-school students coming to see the latest hits.",
          "Last year, however, because the building had grown old, the cinema had to close. “If it's at all possible, I want to show films in this place once again,” Mr. Murai said, calling online for donations toward the repair costs.",
          "Then donations poured in from all over the country, along with many messages saying, “However long it takes, please keep Sakura-za alive.” The work is progressing smoothly, and this spring Sakura-za is scheduled to raise its curtain once again.",
        ],
        blanks: [
          { options: ["ぬいて", "がたくて", "かねて", "ようがなく"], answer: 0, why: { en: "守りぬいてきた = has protected it through hardship all this time (#131)." } },
          { options: ["は", "しか", "も", "まで"], answer: 2, why: { en: "〜もいれば〜もいる: the variety use of も〜ば〜も (#130)." } },
          { options: ["ものだから", "ことなく", "わけで", "ものなら"], answer: 3, why: { en: "できるものなら〜たい: a strong wish for something difficult (#122)." } },
          { options: ["せめて", "たとえ", "まさか", "なるべく"], answer: 1, why: { en: "たとえどんなに〜ても (#125): the concessive adverb that matches 〜ても. せめて (at least), まさか (surely not) and なるべく (as much as possible) don't fit with どんなに〜ても." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 1（{概要|がいよう}{理解|りかい}）", en: "Q4 Listening 1 (Summary comprehension)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。この{問題|もんだい}は、{全体|ぜんたい}としてどんな{内容|ないよう}かを{聞|き}く{問題|もんだい}です。{話|はなし}の{前|まえ}に{質問|しつもん}はありません。まず{話|はなし}を{聞|き}いてください。それから、{質問|しつもん}と{選択肢|せんたくし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. It asks about the overall content. There is no question before the talk. First listen to the talk. Then listen to the question and choices, and choose the best one from 1–4." },
        items: [
          {
            script: [
              { sp: "{女|おんな}", v: "f", ja: "{今日|きょう}は、{東京|とうきょう}の{会社|かいしゃ}を{辞|や}めて、{山梨|やまなし}でぶどう{農家|のうか}になった{川島|かわしま}さんにお{話|はなし}を{伺|うかが}います。{川島|かわしま}さん、{農業|のうぎょう}を{始|はじ}めて{五年|ごねん}になるそうですね。" },
              { sp: "{男|おとこ}", v: "m", ja: "はい。{会社員|かいしゃいん}{時代|じだい}は{毎日|まいにち}{終電|しゅうでん}まで{働|はたら}いていて、{自分|じぶん}では{会社|かいしゃ}のためにがんばっているつもりでした。でも、ある{日|ひ}、{体|からだ}を{壊|こわ}して{入院|にゅういん}してしまったんです。" },
              { sp: "{女|おんな}", v: "f", ja: "そうだったんですか。" },
              { sp: "{男|おとこ}", v: "m", ja: "{病院|びょういん}のベッドで、{子|こ}どものころに{祖父|そふ}の{畑|はたけ}を{手伝|てつだ}ったことが{懐|なつ}かしく{思|おも}い{出|だ}されてならなかったんです。それで、{退院|たいいん}してから{半年|はんとし}ほど{悩|なや}んだ{末|すえ}に、{会社|かいしゃ}を{辞|や}めることにしました。" },
              { sp: "{女|おんな}", v: "f", ja: "ご{家族|かぞく}は{反対|はんたい}されませんでしたか。" },
              { sp: "{男|おとこ}", v: "m", ja: "{妻|つま}には「{理解|りかい}しがたい」と{言|い}われましたよ。でも、たとえ{収入|しゅうにゅう}が{減|へ}っても、{本当|ほんとう}にやりたいことをやろうと{決|き}めたんです。" },
              { sp: "{質問|しつもん}", v: "f", ja: "{男|おとこ}の{人|ひと}は{主|おも}に{何|なに}について{話|はな}していますか。" },
            ],
            en: [
              "Today we're talking to Mr. Kawashima, who quit his job at a Tokyo company and became a grape farmer in Yamanashi. Mr. Kawashima, I hear it's been five years since you started farming.",
              "Yes. When I was an office worker, I worked until the last train every day, and I believed I was doing my best for the company. But one day, my health broke down and I ended up in hospital.",
              "Oh, I see.",
              "Lying in the hospital bed, I couldn't stop fondly remembering helping on my grandfather's fields as a child. So after about six months of agonizing after I left the hospital, I decided to quit my job.",
              "Didn't your family object?",
              "My wife told me she found it hard to understand. But I'd decided that, even if my income went down, I'd do what I really wanted to do.",
              "What is the man mainly talking about?",
            ],
            options: [
              "{農業|のうぎょう}の{仕事|しごと}の{大変|たいへん}さ",
              "{会社|かいしゃ}を{辞|や}めて{農家|のうか}になったきっかけと{決心|けっしん}",
              "{会社員|かいしゃいん}{時代|じだい}の{仕事|しごと}の{内容|ないよう}",
              "ぶどうのおいしい{育|そだ}て{方|かた}",
            ],
            answer: 1,
            why: { en: "He explains what led him to quit (illness, memories of his grandfather's fields), how he agonized, and his resolve (たとえ収入が減っても). He says nothing about the hardships of farming or how to grow grapes." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 2（{即時|そくじ}{応答|おうとう}）", en: "Q4 Listening 2 (Quick response)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. First listen to the sentence. Then listen to the replies and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "ごめん、さっきの{話|はなし}、{聞|き}かなかったことにしてくれない？" }],
            options: ["うん、じゃあもう{一回|いっかい}{話|はな}して。", "わかった。だれにも{言|い}わないよ。", "え、{聞|き}こえなかったの？"],
            answer: 1,
            en: ["Sorry, could you pretend you didn't hear what I said just now?", "OK, then tell me again.", "Got it. I won't tell anyone.", "Huh, you didn't hear it?"],
            why: { en: "聞かなかったことにして = please act as if you never heard it; the natural reply promises to keep it secret." },
          },
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{行|い}けるものなら、{私|わたし}もその{旅行|りょこう}に{行|い}きたかったなあ。" }],
            options: ["じゃあ、{一緒|いっしょ}に{行|い}こうよ。{行|い}けるんでしょう？", "そうか、{仕事|しごと}が{忙|いそが}しくて{無理|むり}なんだね。", "もう{行|い}ったことがあるんだね。"],
            answer: 1,
            en: ["If only I could have, I'd have liked to go on that trip too.", "Then let's go together. You can go, right?", "I see — you can't because you're busy with work, right?", "So you've already been there, huh?"],
            why: { en: "〜ものなら implies she can't actually go, so option 1 (assuming she can) misreads it." },
          },
        ],
      },
    },
  ],
});
