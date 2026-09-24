N2.register({
  id: 5,
  genre: { ja: "{友達|ともだち}{同士|どうし}の{会話|かいわ}", en: "A Conversation with a Friend" },
  title: { ja: "{就職|しゅうしょく}{活動|かつどう}", en: "Job Hunting" },
  canDo: [
    { ja: "{自分|じぶん}の{困|こま}った{状況|じょうきょう}が{友達|ともだち}に{説明|せつめい}できる。", en: "Explain a difficult situation you are in to a friend." },
    { ja: "{友達|ともだち}の{話|はなし}に{共感|きょうかん}して{励|はげ}ますことができる。", en: "Sympathize with what a friend says and encourage them." },
  ],
  parts: [
    // ───────────────────────────── PART (1) ─────────────────────────────
    {
      label: "(1)",
      canDo: [
        { ja: "{自分|じぶん}の{困|こま}った{状況|じょうきょう}が{友達|ともだち}に{説明|せつめい}できる。", en: "Explain a difficult situation you are in to a friend." },
      ],
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{中野|なかの}", v: "f", ja: "{石井|いしい}くん、{久|ひさ}しぶり！　{今度|こんど}の{週末|しゅうまつ}、ゼミのみんなでバーベキューするんだけど、{来|こ}ない？　{春|はる}に{一度|いちど}{集|あつ}まった**きり**、{全然|ぜんぜん}{会|あ}えてないし。", en: "Ishii, long time no see! We're having a barbecue with everyone from the seminar this weekend — want to come? We've hardly seen each other since that one get-together in spring." },
          { sp: "{石井|いしい}", v: "m", ja: "ごめん、{今|いま}はバーベキュー**どころじゃない**んだ。まだ{内定|ないてい}が{一|ひと}つもなくてさ。", en: "Sorry, I'm in no state for a barbecue right now. I still haven't got a single job offer." },
          { sp: "{中野|なかの}", v: "f", ja: "そっか……。{出版社|しゅっぱんしゃ}を{受|う}けてるんだっけ。どんな{感|かん}じ？", en: "I see… You're applying to publishers, right? How's it going?" },
          { sp: "{石井|いしい}", v: "m", ja: "{説明会|せつめいかい}には{毎週|まいしゅう}{行|い}ってはいる**ものの**、なかなか{面接|めんせつ}まで{進|すす}めなくて。{困|こま}った**ことに**、{今年|ことし}は{採用|さいよう}を{減|へ}らしてる{会社|かいしゃ}が{多|おお}いんだよ。", en: "I do go to information sessions every week, but I just can't make it through to the interviews. And the annoying thing is, lots of companies are hiring fewer people this year." },
          { sp: "{中野|なかの}", v: "f", ja: "えっ、そうなの？　あれだけ{希望者|きぼうしゃ}が{多|おお}い{業界|ぎょうかい}**にしては**、{意外|いがい}と{採用|さいよう}{枠|わく}が{狭|せま}いんだね。", en: "Really? For an industry with that many applicants, they have surprisingly few openings." },
          { sp: "{石井|いしい}", v: "m", ja: "うん。エントリーシートなんて、{夜中|よなか}まで{何枚|なんまい}{書|か}き{直|なお}した**ことか**。", en: "Yeah. You have no idea how many application forms I've rewritten until the middle of the night." },
        ],
      },
      points: [
        {
          no: 37,
          pattern: "〜きり",
          phrase: "{一度|いちど}{集|あつ}まった**きり**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜（した）あと、そのままの{状態|じょうたい}が{続|つづ}いている（{次|つぎ}のことが{起|お}きていない）」と{言|い}いたいときに{使|つか}う。{後|うし}ろには「〜ていない」「〜ない」などが{来|く}ることが{多|おお}い。",
            en: "Used to say “since (doing) ~, things have stayed that way” — the expected next step has not happened. It is usually followed by a negative such as 〜ていない / 〜ない.",
          },
          forms: ["[V-た] + きり"],
          formNotes: [
            { ja: "{話|はな}し{言葉|ことば}では「[V-た] + っきり」も{使|つか}われる。", en: "In speech, [V-た] + っきり is also used (会ったっきり)." },
          ],
          examples: [
            { ja: "{父|ちち}は{朝|あさ}「ちょっと{出|で}かけてくる」と{言|い}って{出|で}た**きり**、まだ{帰|かえ}ってこない。", en: "My father went out this morning saying “I'm just popping out,” and he still hasn't come back." },
            { ja: "この{辞書|じしょ}は{一度|いちど}{引|ひ}いた**きり**で、ずっと{本棚|ほんだな}に{置|お}いたままだ。", en: "I've only looked something up in this dictionary once; it's just been sitting on the shelf ever since." },
            { ja: "{姉|あね}は{自分|じぶん}の{部屋|へや}にこもった**きり**、{夕飯|ゆうはん}にも{出|で}てこない。", en: "My sister shut herself in her room and hasn't even come out for dinner." },
            { ja: "{中学|ちゅうがく}の{同窓会|どうそうかい}で{会|あ}った**っきり**、あいつとは{連絡|れんらく}{取|と}ってないなあ。", en: "I haven't been in touch with him since we met at the junior-high reunion." },
            { ja: "{買|か}った**きり**{一度|いちど}も{着|き}ていない{服|ふく}が、クローゼットにたくさんある。", en: "My closet is full of clothes that I bought and have never worn." },
          ],
          notes: [
            {
              ja: "「[V-~~ます~~] + （っ）きり」の{形|かたち}で、「ずっと〜が{続|つづ}いている{状態|じょうたい}だ」と{言|い}いたいときにも{使|つか}う。「つきっきり」「かかりきり」などがよく{使|つか}われる。",
              en: "In the form [V-~~ます~~] + (っ)きり it means “doing nothing but ~ / constantly ~”, describing a state that continues. Common words: つきっきり (staying by someone's side the whole time), かかりきり (being fully occupied with).",
              examples: [
                { ja: "{母|はは}は{祖父|そふ}の{介護|かいご}にかかり**きり**で、{自分|じぶん}の{時間|じかん}がほとんどない。", en: "My mother is completely taken up with caring for my grandfather and has almost no time for herself." },
                { ja: "{子|こ}どもが{熱|ねつ}を{出|だ}した{夜|よる}、{妻|つま}は{一晩中|ひとばんじゅう}つき**っきり**で{看病|かんびょう}していた。", en: "The night our child had a fever, my wife stayed by the bedside all night looking after him." },
              ],
            },
            {
              ja: "「〜だけ」の{意味|いみ}で「{数|かず}の{言葉|ことば} + きり」の{形|かたち}でも{使|つか}われる。「{一人|ひとり}きり」「{二人|ふたり}きり」「{一度|いちど}きり」「{一回|いっかい}きり」など。",
              en: "It is also used after a number word to mean “only”: 一人きり (all alone), 二人きり (just the two of us), 一度きり / 一回きり (only once).",
              examples: [
                { ja: "ちょっと{二人|ふたり}**きり**で{話|はな}したいことがあるんだけど。", en: "There's something I'd like to talk about with just the two of us." },
                { ja: "チャンスは{一回|いっかい}**きり**だと{思|おも}って、{全力|ぜんりょく}で{試合|しあい}に{臨|のぞ}んだ。", en: "I went into the match giving it everything, thinking I'd only get one chance." },
                { ja: "{夜|よる}のエレベーターに{一人|ひとり}**きり**で{閉|と}じ{込|こ}められて、{本当|ほんとう}に{怖|こわ}かった。", en: "I got trapped alone in an elevator at night, and it was really frightening." },
              ],
            },
          ],
          deepDive:
            "**〜きり** comes from 切り, *a cut-off point*. V-たきり marks the last thing that happened — and says that the story **stopped there**. 行ったきり帰らない = *went and never came back*; 一度会ったきり = *met once and that was it*. That's why the rest of the sentence is almost always negative or describes an unchanged state (〜ていない, 〜ない, 〜ままだ).\n\n" +
            "The casual variant **っきり** (会ったっきり, 言ったっきり) is very common in conversation. Ending a sentence with **〜きりだ / っきりだよ** is also natural: 去年一回行ったっきりだよ.\n\n" +
            "Contrast with **〜まま**, the classic trap:\n" +
            "- **V-たまま** = *with ~ still in that state* while you do something else: 眼鏡をかけたまま寝た (slept with my glasses on). The first action and the second happen **at the same time**.\n" +
            "- **V-たきり** = *since ~, nothing further*: 眼鏡を買ったきり、かけていない (bought glasses and never wore them). There is **no follow-up**.\n" +
            "Quick test: if you can translate with *with ~ on / still ~*, use まま; if you can say *and since then, not…*, use きり.\n\n" +
            "The two clip-note uses:\n" +
            "- **V-ます + (っ)きり** describes a continuous state: 看病につきっきり, 仕事にかかりきり. (Note that 寝たきり *bedridden* uses the V-た form but has become a fixed noun.)\n" +
            "- **Number + きり** ≈ だけ: 二人きり, 一度きりの人生. 一人きり sounds more emotional and lonely than 一人だけ.\n\n" +
            "Don't confuse this with **思いっきり** (*with all your might*) or **はっきり / すっきり**, which are unrelated adverbs.",
          see: [],
          index: ["V-たきり", "V-たっきり", "Vますきり", "つきっきり", "かかりきり", "二人きり", "一度きり"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{窓|まど}を{開|あ}けた（　）{寝|ね}てしまって、{風邪|かぜ}をひいた。", options: ["まま", "きり"], answer: 0, en: "I fell asleep with the window open and caught a cold.", why: { en: "The window was open *while* I slept — same time, so まま. きり would mean nothing happened after opening it." } },
                { q: "{兄|あに}は{去年|きょねん}の{夏|なつ}に{一度|いちど}{電話|でんわ}をくれた（　）、それから{一度|いちど}も{連絡|れんらく}してこない。", options: ["まま", "きり"], answer: 1, en: "My brother called me once last summer, and he hasn't contacted me once since." },
                { q: "{靴|くつ}を{履|は}いた（　）{部屋|へや}に{上|あ}がらないでください。", options: ["まま", "きり"], answer: 0, en: "Please don't come into the room with your shoes on." },
                { q: "あのレストランには{開店|かいてん}したときに{行|い}った（　）で、その{後|あと}は{行|い}っていない。", options: ["まま", "きり"], answer: 1, en: "I went to that restaurant when it opened, and I haven't been back since." },
              ],
            },
          ],
        },
        {
          no: 38,
          pattern: "〜どころではない／〜どころじゃない",
          phrase: "バーベキュー**どころじゃない**",
          stars: 3,
          marks: ["regret"],
          usage: {
            ja: "「{今|いま}は〜ができるような{状態|じょうたい}ではない（だからできない）」と、{自分|じぶん}の{状況|じょうきょう}を{説明|せつめい}したいときに{使|つか}う。",
            en: "Used to explain your own situation: “I'm in no position to ~ right now (so I can't).”",
          },
          forms: ["[N] + どころではない／どころじゃない", "[V-る] + どころではない／どころじゃない"],
          examples: [
            { ja: "A：{今夜|こんや}、{飲|の}みに{行|い}かない？\nB：ごめん、{明日|あした}プレゼンなんだ。{飲|の}み{会|かい}**どころじゃない**よ。", en: "A: Want to go for a drink tonight?\nB: Sorry, I've got a presentation tomorrow. Drinking is out of the question." },
            { ja: "{引|ひ}っ{越|こ}したばかりで{部屋|へや}が{段|だん}ボールだらけだから、{友達|ともだち}を{呼|よ}ぶ**どころではない**。", en: "I've only just moved and the room is full of boxes, so I'm in no position to invite friends over." },
            { ja: "{花粉症|かふんしょう}がひどくて、せっかくのお{花見|はなみ}も{桜|さくら}を{楽|たの}しむ**どころじゃなかった**。", en: "My hay fever was so bad that I couldn't enjoy the cherry blossoms at all, even though it was a cherry-blossom picnic." },
            { ja: "{締|し}め{切|き}り{前|まえ}は{忙|いそが}しすぎて、ゆっくり{食事|しょくじ}をする**どころではありません**。", en: "Before a deadline I'm far too busy to sit down and eat properly." },
            { ja: "{来週|らいしゅう}{試験|しけん}なのに、ゲーム**どころじゃない**でしょう！", en: "You've got an exam next week — this is no time for video games!" },
          ],
          deepDive:
            "**〜どころではない** literally says *this is not the place for ~*: the circumstances are so pressing (busy, ill, in trouble) that the activity is simply **impossible right now**. It carries a tone of frustration or regret — hence the frowning-face mark. The spoken form **どころじゃない** is what you'll hear most among friends; polite versions are どころではありません / どころじゃないんです.\n\n" +
            "Typical pattern: [problem] + て/ので, + [pleasant or normal activity] + どころではない.\n" +
            "- 歯が痛くて、食事どころではない.\n" +
            "- The noun is often an activity noun: 旅行・勉強・仕事・花見・休暇.\n\n" +
            "Although the book frames it as describing *your own* situation, it's also used to **scold** someone, telling them their situation doesn't allow something: 試験前なのに、遊んでいるどころじゃないだろう. The past form どころではなかった looks back on a missed experience.\n\n" +
            "Don't confuse it with:\n" +
            "- **〜どころか** (#83): *far from ~, actually the opposite*: 涼しいどころか寒かった. That's about contradicting a statement, not about being unable to do something.\n" +
            "- **V-るところだった** (#89): *almost happened*.\n" +
            "- **〜わけにはいかない** (#57): can't do it for social/moral reasons; どころではない is about the situation making it impossible.\n\n" +
            "Common mistake: putting the *problem* before どころ. ✗忙しいどころではない (when you mean you can't travel). The thing before どころ is the activity you **can't** do: 旅行どころではない.\n\n" +
            "JLPT tip: look for the two-part logic *trouble → can't enjoy X*; the blank takes the X that is being ruled out.",
          see: [83, 89],
          index: ["Nどころではない", "Vるどころではない", "どころじゃない", "どころではなかった"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{週末|しゅうまつ}は{引|ひ}っ{越|こ}しの{準備|じゅんび}に{追|お}われて、（　）どころではなかった。", options: ["荷造り", "花見"], answer: 1, en: "I was so busy getting ready to move at the weekend that cherry-blossom viewing was out of the question.", why: { en: "The thing before どころではない is what you *couldn't* do. Packing (荷造り) is exactly what you *were* doing." } },
                { q: "{試験|しけん}の{前|まえ}の{日|ひ}に{歯|は}が{痛|いた}くなって、（　）どころではなかった。", options: ["勉強する", "歯医者に行く"], answer: 0, en: "My tooth started hurting the day before the exam, so studying was impossible." },
                { q: "{子|こ}どもが{急|きゅう}に{熱|ねつ}を{出|だ}して、（　）どころではなかった。", options: ["看病", "仕事"], answer: 1, en: "My child suddenly got a fever, so I was in no state to work." },
              ],
            },
          ],
        },
        {
          no: 39,
          pattern: "〜ものの",
          phrase: "{行|い}ってはいる**ものの**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜は{事実|じじつ}だ。けれども…」という{気持|きも}ちを{強|つよ}く{言|い}いたいときに{使|つか}う。{後|うし}ろには、{前|まえ}から{予想|よそう}されることとは{違|ちが}う{結果|けっか}が{来|く}る。{事実|じじつ}を{強調|きょうちょう}するために「は」を{使|つか}うことが{多|おお}い。",
            en: "Used to say strongly “~ is true, but…”. What follows is different from what you would expect from the first part. The particle は is often inserted to emphasize the fact.",
          },
          forms: ["[Pl] + ものの", "[なA~~だ~~]な + ものの"],
          formNotes: [
            { ja: "「[なA]／[N] + で（は）ある + ものの」の{形|かたち}もある。[N] に{直接|ちょくせつ}「だ」をつけた「Nだものの」は{使|つか}わない。", en: "なA / N + で(は)ある + ものの is also used (困難ではあるものの). N + だ + ものの is not used — with nouns, use である." },
            { ja: "「〜ている」「〜てみる」などは「〜てはいる」「〜てはみた」のように「は」が{入|はい}ることが{多|おお}い。", en: "With 〜ている / 〜てみる, は is often added: 〜てはいるものの, 〜てはみたものの." },
          ],
          examples: [
            { ja: "ダイエットを{始|はじ}めた**ものの**、{甘|あま}いものがどうしてもやめられない。", en: "I started a diet, but I just can't give up sweet things." },
            { ja: "{英会話|えいかいわ}スクールに{通|かよ}ってはいる**ものの**、なかなか{話|はな}せるようにならない。", en: "I am going to an English conversation school, but I'm just not getting any better at speaking." },
            { ja: "{国産|こくさん}の{野菜|やさい}は{安心|あんしん}な**ものの**、{値段|ねだん}が{少|すこ}し{高|たか}い。", en: "Domestic vegetables give you peace of mind, but they're a bit expensive." },
            { ja: "この{計画|けいかく}は{理想的|りそうてき}では**あるものの**、{実現|じつげん}するのは{難|むずか}しいだろう。", en: "This plan is ideal, but it will probably be hard to carry out." },
            { ja: "{春|はる}になった**とはいうものの**、{朝晩|あさばん}はまだかなり{寒|さむ}い。", en: "Spring has come, they say, but mornings and evenings are still pretty cold." },
          ],
          deepDive:
            "**〜ものの** is a concessive *although / it's true that ~, but*. It's more written and more emphatic than けど/が: the speaker first **admits a fact**, then says the expected result **didn't follow**. Typical second halves: まだ〜ない, なかなか〜ない, 〜かどうか不安だ, 実際は….\n\n" +
            "Two structural features the book highlights:\n" +
            "- **は insertion**: 通ってはいるものの, 買ってはみたものの, 決めてはいるものの. The は stresses *I do do that much…*.\n" +
            "- **Nouns**: you can't say ✗学生だものの. Use **である**: 学生であるものの, 困難ではあるものの. な-adjectives take な (便利なものの) or であるものの.\n\n" +
            "The fixed expression **とはいうものの** (*that said / although it's said that*) can open a sentence on its own: とはいうものの、やはり不安だ.\n\n" +
            "Compared with similar patterns:\n" +
            "- **〜のに**: carries surprise or complaint (高いのにおいしくない!). ものの is calmer and more objective.\n" +
            "- **〜けれども / 〜が**: neutral; ものの adds the nuance that the first fact *should* have led somewhere but didn't.\n" +
            "- **〜あげく** (#45): *after a long process, (bad) end result*. ものの = *X is true, but Y*; no sense of a long struggle. The practice for #45 tests exactly this pair.\n\n" +
            "Restriction: the second clause can't be a request, command or intention. ✗高いものの、買ってください / ✗難しいものの、やってみよう. Use けど/が for those.\n\n" +
            "Don't mix it up with other もの patterns (#13 ものだ, #46 ものではない, #122 ものなら, #51 ものか).",
          see: [13, 25, 46, 51, 52, 56, 92, 122, 132],
          index: ["Plものの", "なAなものの", "Nであるものの", "〜てはいるものの", "とはいうものの"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{毎朝|まいあさ}ジョギングしようと{決|き}めたものの、（　）。", options: ["三日しか続かなかった", "体の調子がよくなってきた"], answer: 0, en: "I decided to go jogging every morning, but it only lasted three days.", why: { en: "ものの needs a result that goes against expectation. Feeling healthier is the expected result." } },
                { q: "{料理|りょうり}{教室|きょうしつ}に{申|もう}し{込|こ}んではみたものの、（　）。", options: ["毎週楽しみにしている", "仕事が忙しくてまだ一回も行けていない"], answer: 1, en: "I did sign up for a cooking class, but I've been so busy with work that I haven't been once." },
                { q: "この{部屋|へや}は{駅|えき}から{近|ちか}くて{便利|べんり}なものの、（　）。", options: ["家賃がかなり高い", "買い物にも困らない"], answer: 0, en: "This apartment is convenient, being close to the station, but the rent is quite high." },
              ],
            },
          ],
        },
        {
          no: 40,
          pattern: "〜ことに",
          phrase: "{困|こま}った**ことに**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「お{金|かね}がなくて{困|こま}った」ことを「{困|こま}ったことにお{金|かね}がなかった」のように{順番|じゅんばん}を{逆|ぎゃく}にして、{話者|わしゃ}の{気持|きも}ち・{感情|かんじょう}を{先|さき}に{強|つよ}く{表|あらわ}したいときに{使|つか}う。",
            en: "Used to put the speaker's feeling first and express it strongly — instead of “I had no money and it was a problem,” you say “To my dismay, I had no money.” (“To my surprise / Unfortunately / Thankfully, …”)",
          },
          forms: ["[V-た] + ことに", "[いA] + ことに", "[なA~~だ~~]な + ことに"],
          formNotes: [
            { ja: "「{驚|おどろ}いた・{困|こま}った・うれしい・{悲|かな}しい・{不思議|ふしぎ}な・{残念|ざんねん}な・ありがたい」など、{気持|きも}ちを{表|あらわ}す{言葉|ことば}といっしょに{使|つか}う。", en: "Used with words expressing feelings: 驚いた (surprised), 困った (troubled), うれしい (happy), 悲しい (sad), 不思議な (strange), 残念な (unfortunate), ありがたい (grateful)." },
          ],
          examples: [
            { ja: "ありがたい**ことに**、{近所|きんじょ}の{人|ひと}たちが{引|ひ}っ{越|こ}しを{手伝|てつだ}ってくれた。", en: "Thankfully, the people in the neighborhood helped me move." },
            { ja: "{驚|おどろ}いた**ことに**、10{年|ねん}ぶりに{会|あ}った{先生|せんせい}がわたしの{名前|なまえ}を{覚|おぼ}えていてくださった。", en: "To my surprise, the teacher I met for the first time in ten years remembered my name." },
            { ja: "{悲|かな}しい**ことに**、{子|こ}どものころよく{遊|あそ}んだ{公園|こうえん}がなくなってしまった。", en: "Sadly, the park where I often played as a child is gone." },
            { ja: "{不思議|ふしぎ}な**ことに**、この{村|むら}では{毎年|まいとし}ほぼ{同|おな}じ{日|ひ}に{初雪|はつゆき}が{降|ふ}るそうだ。", en: "Strangely, they say the first snow falls on almost the same day every year in this village." },
            { ja: "{困|こま}った**ことに**、パスワードを{忘|わす}れてログインできなくなってしまった。", en: "The trouble is, I've forgotten my password and can't log in." },
          ],
          deepDive:
            "**〜ことに** works like an English sentence adverb: *surprisingly, sadly, fortunately, annoyingly*. Instead of stating a fact and then commenting on it, the speaker leads with the emotion: 残念なことに、雨で中止になった = *unfortunately, it was cancelled because of rain*.\n\n" +
            "The word before ことに must be a **feeling/evaluation word** — the formNote list (驚いた・困った・うれしい・悲しい・不思議な・残念な・ありがたい) covers most of what you'll see, plus a few others like 意外な, 情けない, 腹立たしい, 恐ろしい. Note the forms: verbs in **た** (驚いたことに, not ✗驚くことに), い-adjectives plain, な-adjectives with **な**.\n\n" +
            "Things to watch:\n" +
            "- The emotion belongs to the **speaker**. You can't use it for someone else's feelings: ✗彼はうれしいことに合格した (unless *you* are glad).\n" +
            "- The second half is a statement of fact, not a request or intention: ✗困ったことに、手伝ってください.\n" +
            "- It's slightly formal/written; in chat people also say 驚いたんだけど、… or びっくりしたのが、…. Among friends it still appears, often for mild humor: 困ったことに、財布忘れた.\n\n" +
            "Contrast with other こと-patterns in the book: **〜ことか** (#42, *how very ~!*), **〜こと。** (#8, written rule), **〜ことから** (#62, *from the fact that*), **〜ことなく** (#20, *without*), **〜ことだ** (#87, advice). The particle に is the key: 〜ことに + comma + fact.\n\n" +
            "JLPT tip: if the blank follows 驚いた / 残念な / うれしい at the very start of a sentence, the answer is ことに.",
          see: [8, 20, 42, 49, 54, 62, 87, 110, 119],
          index: ["〜ことに", "驚いたことに", "残念なことに", "困ったことに", "うれしいことに"],
        },
        {
          no: 41,
          pattern: "〜にしては",
          phrase: "{希望者|きぼうしゃ}が{多|おお}い{業界|ぎょうかい}**にしては**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜から{予想|よそう}することとは{違|ちが}う」と{言|い}いたいときに{使|つか}う。「{小学|しょうがく}1{年生|ねんせい}にしては{背|せ}が{高|たか}い」のように、{基準|きじゅん}と{比|くら}べて{意外|いがい}だという{気持|きも}ちを{表|あらわ}す。",
            en: "Used to say that something is “different from what you would expect from ~” — e.g. tall *for* a first-grader. It expresses that the result is surprising compared with a standard.",
          },
          forms: ["[N] + にしては"],
          formNotes: [
            { ja: "[Pl]（[なA~~だ~~]）+ にしては の{場合|ばあい}もある。", en: "It can also follow plain forms [Pl] (with なA dropping だ): 初めて作ったにしては, 値段が高いにしては." },
          ],
          examples: [
            { ja: "{日本|にほん}に{来|き}てまだ{半年|はんとし}**にしては**、{彼|かれ}の{日本語|にほんご}はとても{自然|しぜん}だ。", en: "For someone who's only been in Japan for six months, his Japanese is very natural." },
            { ja: "このホテルは{一泊|いっぱく}5{千|せん}{円|えん}**にしては**、{部屋|へや}が{広|ひろ}くてきれいだ。", en: "For ¥5,000 a night, the rooms in this hotel are spacious and clean." },
            { ja: "{今日|きょう}は7{月|がつ}**にしては**{涼|すず}しいね。", en: "It's cool today for July, isn't it?" },
            { ja: "{初|はじ}めて{焼|や}いた**にしては**、このケーキ、よくできてるじゃない。", en: "For your first time baking, this cake has turned out really well!" },
            { ja: "A：{田中|たなか}さん、プロの{歌手|かしゅ}なんだって。\nB：へえ、それ**にしては**あまり{知|し}られてないね。", en: "A: Apparently Tanaka is a professional singer.\nB: Really? For that, she's not very well known." },
          ],
          deepDive:
            "**〜にしては** means *for (a/an) ~ / considering ~*. The speaker takes X as a standard and says the actual situation **doesn't match what X would lead you to expect**. The deviation can be positive (上手, 安い) or negative (下手, 少ない).\n\n" +
            "- 3歳にしては言葉をよく知っている — *knows a lot of words for a 3-year-old*.\n" +
            "- プロにしては下手だ — *bad, for a professional*.\n\n" +
            "Important restrictions:\n" +
            "- X is something concrete that sets an expectation (age, price, experience, profession, season). You can't use it for a general category the subject obviously belongs to without a contrast.\n" +
            "- **それにしては** = *considering that*; don't confuse it with **それにしても** (*even so / anyway*), which just changes the topic or emphasizes.\n\n" +
            "Similar patterns:\n" +
            "- **〜わりに（は）** (#95): very close, but わりに can follow adjectives/degree words directly (値段のわりに, 高いわりに) and is slightly more casual. にしては tends to take a single specific standard (千円にしては).\n" +
            "- **〜として** (*as ~, in the capacity of*): no idea of unexpectedness — 代表として挨拶した.\n" +
            "- **〜に応じて** (#4): *in accordance with* — totally different meaning, but a favorite distractor.\n\n" +
            "JLPT tip: when the sentence says something surprising compared with a fixed yardstick (年齢, 値段, 季節, 初めて), にしては is the answer.",
          see: [4],
          index: ["Nにしては", "Plにしては", "それにしては"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{子|こ}はまだ3{歳|さい}（　）、{言葉|ことば}をたくさん{知|し}っている。", options: ["にしては", "として"], answer: 0, en: "This child knows a lot of words for a three-year-old." },
                { q: "{山本|やまもと}さんはチームの{代表|だいひょう}（　）{表彰式|ひょうしょうしき}に{出席|しゅっせき}した。", options: ["にしては", "として"], answer: 1, en: "Yamamoto attended the awards ceremony as the team's representative.", why: { en: "No unexpectedness here — he attended in the role of representative, so として." } },
                { q: "{保険料|ほけんりょう}は{年齢|ねんれい}（　）{決|き}まる。", options: ["に応じて", "にしては"], answer: 0, en: "Insurance premiums are decided according to age." },
                { q: "{今年|ことし}の{冬|ふゆ}は、12{月|がつ}（　）{暖|あたた}かい{日|ひ}が{多|おお}かった。", options: ["というより", "にしては"], answer: 1, en: "This winter there were a lot of warm days for December." },
              ],
            },
          ],
        },
        {
          no: 42,
          pattern: "〜ことか",
          phrase: "{何枚|なんまい}{書|か}き{直|なお}した**ことか**",
          stars: 1,
          marks: [],
          usage: {
            ja: "{自分|じぶん}がこれまでしてきたことや{感|かん}じていることについて、{気持|きも}ちを{込|こ}めて{言|い}うときに{使|つか}う。「どんなに・どれだけ・どれほど・{何度|なんど}」などの{言葉|ことば}と{一緒|いっしょ}に、{独|ひと}り{言|ごと}のように{言|い}うことが{多|おお}い。",
            en: "Used to say with deep feeling what you have done or felt so far. It is often said almost to oneself, together with words like どんなに, どれだけ, どれほど or 何度 — “How very ~! / You have no idea how ~.”",
          },
          forms: ["[Pl] + ことか", "[なA~~だ~~]な + ことか"],
          formNotes: [
            { ja: "「[なA]／[N] + である + ことか」も{使|つか}われることがある。[N] に{直接|ちょくせつ}「だ」をつけた{形|かたち}は{使|つか}わない。", en: "なA / N + である + ことか is also sometimes used (どれほど幸せであることか). N + だ + ことか is not used." },
          ],
          examples: [
            { ja: "{合格|ごうかく}の{知|し}らせを{聞|き}いたとき、どれほどうれしかった**ことか**。", en: "You can't imagine how happy I was when I heard I'd passed." },
            { ja: "{一人|ひとり}で{海外|かいがい}に{住|す}み{始|はじ}めたころ、{何度|なんど}{家族|かぞく}に{会|あ}いたいと{思|おも}った**ことか**。", en: "When I first started living abroad on my own, I can't tell you how many times I wanted to see my family." },
            { ja: "この{論文|ろんぶん}を{仕上|しあ}げるまでに、{何回|なんかい}{書|か}き{直|なお}した**ことか**。", en: "I've lost count of how many times I rewrote this thesis before finishing it." },
            { ja: "{子|こ}どもが{無事|ぶじ}に{見|み}つかったと{聞|き}いて、{両親|りょうしん}はどれだけ{安心|あんしん}した**ことか**。", en: "How relieved the parents must have been to hear their child had been found safe." },
            { ja: "{毎日|まいにち}{元気|げんき}に{過|す}ごせるのが、どんなに{幸|しあわ}せな**ことか**。", en: "How lucky we are to be able to spend every day in good health." },
          ],
          deepDive:
            "**〜ことか** is an exclamation disguised as a question: どれだけ泣いたことか literally *how much I cried — (who could say)?* → *I cried so much!* It's the speaker's emotional sigh about the **degree** of something, usually looking back on hardship, joy, worry or relief.\n\n" +
            "It almost always comes with a **degree/question word**: どんなに, どれほど, どれだけ, 何度, 何回, 何時間, いかに. Without one, the sentence usually sounds incomplete.\n\n" +
            "Forms: plain forms of verbs and い-adjectives (待ったことか, うれしかったことか); な-adjectives with な (静かなことか / 幸せなことか); nouns can't take だ directly — use である or rephrase.\n\n" +
            "Register and nuance:\n" +
            "- Somewhat literary and emotional; in casual speech people also use it with a sigh (何回書いたことか…), or say どれだけ〜たか！/〜たかわからない.\n" +
            "- **〜ことか ≈ 〜ものか?** No! **〜ものか** (#51) is a strong refusal/denial: 二度と行くもんか *I'll never go again*. Mixing them up flips the meaning.\n" +
            "- Don't confuse with **〜ことに** (#40), which also expresses emotion but leads the sentence (驚いたことに、…).\n" +
            "- **〜かわからない** is the neutral paraphrase: 何度書き直したかわからない.\n\n" +
            "It can also be used about **imagined** future feelings: 中止になったら、娘がどんなにがっかりすることか.\n\n" +
            "JLPT tip: if you see どんなに/どれほど/何度 early in the sentence and the blank is at the end, ことか is very likely.",
          see: [8, 20, 40, 49, 54, 62, 87, 110, 119],
          index: ["Plことか", "どんなに〜ことか", "どれだけ〜ことか", "何度〜ことか"],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["ことか", "にしては", "どころじゃない", "ことに", "ものの", "きり"],
        items: [
          { q: "A：{今週末|こんしゅうまつ}、{映画|えいが}{見|み}に{行|い}かない？\nB：{来週|らいしゅう}{試験|しけん}だから、{映画|えいが}＿＿よ。", answer: "どころじゃない", en: "A: Want to go see a movie this weekend?\nB: I've got exams next week, so a movie is out of the question." },
          { q: "{新|あたら}しいカメラを{買|か}ってはみた＿＿、{使|つか}い{方|かた}が{難|むずか}しくてまだほとんど{使|つか}っていない。", answer: "ものの", en: "I did buy a new camera, but it's hard to use and I've hardly used it yet." },
          { q: "このワインは{千円|せんえん}＿＿なかなかおいしい。", answer: "にしては", en: "For ¥1,000, this wine is pretty good." },
          { q: "{残念|ざんねん}な＿＿、{楽|たの}しみにしていた{花火|はなび}{大会|たいかい}が{中止|ちゅうし}になった。", answer: "ことに", en: "Unfortunately, the fireworks display I'd been looking forward to was cancelled." },
          { q: "A：{佐藤|さとう}さんと{最近|さいきん}{会|あ}ってる？\nB：ううん、{卒業式|そつぎょうしき}で{会|あ}った＿＿だよ。", answer: "きり", en: "A: Have you seen Sato lately?\nB: No, not since the graduation ceremony." },
          { q: "{無事|ぶじ}に{着|つ}いたって{聞|き}いて、どれだけほっとした＿＿。", answer: "ことか", en: "You have no idea how relieved I was to hear you'd arrived safely." },
        ],
      },
    },
    // ───────────────────────────── PART (2) ─────────────────────────────
    {
      label: "(2)",
      canDo: [
        { ja: "{自分|じぶん}の{困|こま}った{状況|じょうきょう}が{友達|ともだち}に{説明|せつめい}できる。", en: "Explain a difficult situation you are in to a friend." },
        { ja: "{友達|ともだち}の{話|はなし}に{共感|きょうかん}して{励|はげ}ますことができる。", en: "Sympathize with what a friend says and encourage them." },
      ],
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{中野|なかの}", v: "f", ja: "{大変|たいへん}だね。でも、{熱意|ねつい}**さえ**{伝|つた}われ**ば**、きっとわかってくれる{会社|かいしゃ}があるよ。", en: "That's tough. But as long as your enthusiasm comes across, I'm sure there'll be a company that understands." },
          { sp: "{石井|いしい}", v: "m", ja: "だといいんだけど。{書類|しょるい}で{落|お}とされたら、{面接|めんせつ}でがんばり**ようがない**し……。{出版社|しゅっぱんしゃ}ばかり{何十社|なんじっしゃ}も{受|う}け{続|つづ}けた**あげく**、{全部|ぜんぶ}{落|お}ちたらって{考|かんが}えると、{夜|よる}も{眠|ねむ}れなくてさ。", en: "I hope so. But if they cut me at the paperwork stage, there's no way I can even try hard in an interview… When I think that after applying to dozens of publishers I might fail every one, I can't sleep at night." },
          { sp: "{中野|なかの}", v: "f", ja: "まだ{結果|けっか}も{出|で}てないのに、{弱気|よわき}になる**もんじゃない**よ。わたしのいとこもね、「どうせ{無理|むり}だろうけど」って{言|い}いながら、{大手|おおて}の{出版社|しゅっぱんしゃ}を{受|う}ける**だけ**{受|う}けてみたら、{最終|さいしゅう}{面接|めんせつ}まで{進|すす}めたんだって。", en: "You shouldn't lose heart when the results aren't even out yet. My cousin said “I probably won't make it anyway,” but applied to a major publisher just to give it a go — and made it all the way to the final interview." },
          { sp: "{石井|いしい}", v: "m", ja: "へえ、すごいね。", en: "Wow, that's impressive." },
          { sp: "{中野|なかの}", v: "f", ja: "でしょ？　だから、まだ{締|し}め{切|き}りが{来|き}てないところは、{全部|ぜんぶ}{出|だ}してみなよ。{応援|おうえん}してるから。", en: "Right? So send applications to every place whose deadline hasn't passed yet. I'm rooting for you." },
          { sp: "{石井|いしい}", v: "m", ja: "ありがとう。なんだか{元気|げんき}が{出|で}てきた。", en: "Thanks. Somehow I'm feeling better already." },
        ],
      },
      points: [
        {
          no: 43,
          pattern: "〜さえ…ば",
          phrase: "{熱意|ねつい}**さえ**{伝|つた}われ**ば**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜だけが{必要|ひつよう}な{条件|じょうけん}だ（それさえあれば、ほかのことは{問題|もんだい}ではない）」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “~ is the only condition needed” — as long as that one thing holds, nothing else matters.",
          },
          forms: [
            "[N] + さえ + …ば",
            "[V-~~ます~~] + さえ + すれば／しなければ",
            "[なA~~な~~]で + さえ + あれば／なければ",
            "[N]で + さえ + あれば／なければ",
          ],
          examples: [
            { ja: "{天気|てんき}**さえ**よけれ**ば**、ここから{富士山|ふじさん}が{見|み}えるんですが。", en: "As long as the weather's good, you can see Mt. Fuji from here." },
            { ja: "{毎日|まいにち}{少|すこ}しずつ{練習|れんしゅう}し**さえすれば**、{必|かなら}ず{上手|じょうず}になるよ。", en: "As long as you practice a little every day, you're sure to improve." },
            { ja: "{住所|じゅうしょ}**さえ**わかれ**ば**、{地図|ちず}アプリで{行|い}けるよ。", en: "If I just know the address, I can get there with a map app." },
            { ja: "{体|からだ}が{丈夫|じょうぶ}で**さえあれば**、どんな{仕事|しごと}でもやっていける。", en: "As long as you're physically strong, you can manage any kind of job." },
            { ja: "{寝坊|ねぼう}**さえしなければ**、{始発|しはつ}に{間|ま}に{合|あ}ったのに。", en: "If only I hadn't overslept, I'd have made the first train." },
          ],
          deepDive:
            "**〜さえ…ば** means *if only ~ / as long as ~ (nothing else is needed)*. さえ singles out **one minimal condition**, and the ば-clause says that condition is enough: お金さえあれば = *as long as there's money (that's all it takes)*.\n\n" +
            "Getting the connection right is the main challenge:\n" +
            "- **Noun + さえ + verb-ば**: 時間さえあれば, 薬さえ飲めば. With a noun object, さえ replaces を/が.\n" +
            "- **Verb**: put さえ between the ます-stem and すれば: 練習しさえすれば, 食べさえすれば, 謝りさえすれば. (✗練習すればさえ). With て-form: 見てさえいれば.\n" +
            "- **Adjectives**: い-adj → 〜くさえあれば (安くさえあれば); な-adj/noun → 〜でさえあれば (静かでさえあれば, 健康でさえあれば).\n" +
            "- The negative versions **さえしなければ / さえなければ** express *if only ~ hadn't happened* — often regret with のに: 雨さえ降らなければ….\n\n" +
            "Differences from other さえ:\n" +
            "- N3 **〜さえ (〜ない)** = *even*: 名前さえ書けない *can't even write his name*. No ば, and the meaning is extreme example, not minimal condition.\n" +
            "- **〜だけ〜ば** is similar but plainer; さえ〜ば stresses *that's the only thing that matters*.\n" +
            "- **〜ば〜ほど** / **〜さえも** are unrelated.\n\n" +
            "Common mistake: putting さえ after the ば-form or using さえ with a non-conditional second half. The typical second half is a positive outcome (大丈夫, 十分だ, 〜できる) or, with past/のに, a regret.\n\n" +
            "JLPT tip: in 文の組み立て questions, look for the chain N + さえ + あれば/すれば — pieces like 〜さえ and あれば almost always sit side by side.",
          see: [],
          index: ["Nさえ〜ば", "Vますさえすれば", "〜でさえあれば", "〜さえなければ", "〜くさえあれば"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{雨|あめ}さえ{降|ふ}らなければ、",
                "{部屋|へや}が{静|しず}かでさえあれば、",
                "この{薬|くすり}さえ{飲|の}めば、",
                "パソコンとネットさえあれば、",
              ],
              right: [
                "{家賃|やちん}が{少|すこ}し{高|たか}くてもかまいません。",
                "{旅行先|りょこうさき}でも{仕事|しごと}ができる。",
                "{明日|あした}は{予定|よてい}どおり{試合|しあい}ができる。",
                "{熱|ねつ}はすぐに{下|さ}がるでしょう。",
              ],
              answer: [2, 0, 3, 1],
              en: [
                "As long as it doesn't rain, the match can go ahead as planned tomorrow.",
                "As long as the room is quiet, I don't mind if the rent is a bit high.",
                "If you just take this medicine, your fever should go down soon.",
                "As long as I have a computer and the internet, I can work even while traveling.",
              ],
            },
          ],
        },
        {
          no: 44,
          pattern: "〜ようがない",
          phrase: "がんばり**ようがない**",
          stars: 3,
          marks: ["regret"],
          usage: {
            ja: "「{理由|りゆう}があって、〜をする{方法|ほうほう}がない（〜することができない）」と{言|い}いたいときに{使|つか}う。「どうしようもない」は「できることが{何|なに}もない」という{意味|いみ}。",
            en: "Used to say that, for some reason, there is no way to do ~ (you simply can't). どうしようもない means “there's nothing at all that can be done.”",
          },
          forms: ["[V-~~ます~~] + ようがない"],
          examples: [
            { ja: "{名前|なまえ}も{知|し}らない{人|ひと}を{探|さが}せと{言|い}われても、{探|さが}し**ようがない**よ。", en: "You tell me to find someone whose name I don't even know — there's no way I can look for them." },
            { ja: "{橋|はし}が{流|なが}されてしまい、{向|む}こう{岸|ぎし}の{村|むら}へは{渡|わた}り**ようがなかった**。", en: "The bridge had been washed away, so there was no way to cross to the village on the other bank." },
            { ja: "ここまで{壊|こわ}れてしまったら、もう{直|なお}し**ようがありません**ね。", en: "Once it's broken this badly, there's no way to repair it." },
            { ja: "{説明書|せつめいしょ}がないから、{使|つか}い{方|かた}を{確|たし}かめ**ようがない**んだ。", en: "There's no manual, so I have no way of checking how to use it." },
            { ja: "{電車|でんしゃ}が{全部|ぜんぶ}{止|と}まってしまったのだから、もう**どうしようもない**よ。", en: "All the trains have stopped, so there's nothing we can do about it.", idiom: true },
          ],
          deepDive:
            "**〜ようがない** is made of よう (様, *way/method*) + が + ない: literally *there is no way of ~ing*. It says an action is **impossible because the means are missing** — no information, no materials, no access. That's why the sentence usually gives a reason first: 連絡先を知らないので、連絡しようがない.\n\n" +
            "Connection: ます-stem + ようがない: 書きようがない, 答えようがない, 直しようがない. With a する-noun you can say either 連絡しようがない or **連絡のしようがない** (Nの + しようがない) — both are common on the test. Polite: 〜ようがありません.\n\n" +
            "The set phrase **どうしようもない** (*nothing can be done / hopeless*; marked as an idiomatic example in the book) is extremely common — it can also describe a person: どうしようもない人 *a hopeless case*, and **しょうがない / しようがない** (*it can't be helped*) comes from the same pattern.\n\n" +
            "Comparisons (all tested in the practice below):\n" +
            "- **〜きれない**: *can't do completely* (食べきれない = can't finish). ようがない = can't even start because there's no method.\n" +
            "- **〜ざるを得ない** (#24): *have no choice but to do* — the opposite direction: you *must* do it.\n" +
            "- **〜わけではない** (#19): partial denial, *it's not that ~*.\n" +
            "- **〜はずがない**: *it can't be that ~* — a judgment about likelihood, not about method.\n" +
            "- **〜ようでは** (#84) shares the よう but means *if you're the kind who ~ (it's bad)*.\n\n" +
            "Nuance: ようがない sounds resigned — the frowning-face mark reflects that the speaker regrets or is frustrated that nothing can be done.\n\n" +
            "Common mistake: ✗書けようがない (don't use the potential form) and ✗書くようがない (use the ます-stem).",
          see: [84],
          index: ["Vますようがない", "Nのしようがない", "どうしようもない", "しようがない"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{住所|じゅうしょ}も{電話|でんわ}{番号|ばんごう}もわからないので、（　）。", options: ["連絡しようがない", "連絡しきれない"], answer: 0, en: "I don't know the address or the phone number, so there's no way to contact them." },
                { q: "{上司|じょうし}の{命令|めいれい}なので、{行|い}きたくなくても（　）。", options: ["行きようがない", "行かざるを得ない"], answer: 1, en: "It's an order from my boss, so even if I don't want to, I have no choice but to go.", why: { en: "The situation forces you to go — ざるを得ない. ようがない would mean there is no way to get there." } },
                { q: "A：{週末|しゅうまつ}はいつも{家|いえ}にいるの？\nB：ううん、{毎週|まいしゅう}{家|いえ}で（　）よ。たまには{出|で}かけるよ。", options: ["過ごしようがない", "過ごすわけじゃない"], answer: 1, en: "A: Are you always at home on weekends?\nB: No, it's not like I spend every weekend at home. I go out sometimes." },
                { q: "{正直|しょうじき}な{田中|たなか}さんが、そんなうそを（　）。", options: ["つきようがない", "つくはずがない"], answer: 1, en: "Honest Tanaka would never tell a lie like that.", why: { en: "This is a judgment about what is likely (はずがない), not about lacking the means to lie." } },
              ],
            },
          ],
        },
        {
          no: 45,
          pattern: "〜あげく（に）",
          phrase: "{受|う}け{続|つづ}けた**あげく**",
          stars: 2,
          marks: ["regret"],
          usage: {
            ja: "{長|なが}い{時間|じかん}がかかったり、いろいろしたりして{大変|たいへん}だった{後|あと}で、どうなったかという{結果|けっか}を{言|い}いたいときに{使|つか}う。よくない{結果|けっか}になったことを{言|い}うことが{多|おお}い。",
            en: "Used to state the final result after a long or troublesome process that took a lot of time or effort. The result is often a bad one — “after all that, in the end ~.”",
          },
          forms: ["[V-た] + あげく（に）"],
          examples: [
            { ja: "{何度|なんど}も{話|はな}し{合|あ}った**あげく**、{二人|ふたり}は{別|わか}れることにした。", en: "After talking it over again and again, the two of them decided to split up." },
            { ja: "1{時間|じかん}も{道|みち}に{迷|まよ}った**あげく**、{結局|けっきょく}タクシーを{呼|よ}ぶことになった。", en: "After being lost for a whole hour, I ended up calling a taxi." },
            { ja: "その{客|きゃく}はさんざん{文句|もんく}を{言|い}った**あげく**、{料金|りょうきん}を{半額|はんがく}にしろと{言|い}い{出|だ}した。", en: "That customer complained on and on and in the end demanded we halve the price." },
            { ja: "{半年|はんとし}{悩|なや}んだ**あげく**、{会社|かいしゃ}を{辞|や}めて{留学|りゅうがく}することに{決|き}めた。", en: "After agonizing over it for six months, I decided to quit my job and study abroad." },
            { ja: "{無理|むり}を{重|かさ}ねた**あげくに**、とうとう{体|からだ}を{壊|こわ}してしまった。", en: "After pushing himself too hard for so long, he finally ruined his health." },
          ],
          deepDive:
            "**〜あげく** (挙げ句) originally meant the closing verse of a linked poem — *the very end*. As grammar it means *after a long/tiring process of ~, in the end…*. The first half describes effort, hesitation or trouble (さんざん, 何度も, 長い間, 悩んだ, 迷った); the second half gives the outcome, usually **disappointing or unwelcome**: 結局〜なかった, 〜てしまった.\n\n" +
            "Forms: **V-たあげく（に）**. With nouns you'll also see **Nのあげく**: 口論のあげく、つかみ合いになった. The idiom **あげくの果て（に）** means *on top of all that, to cap it all*: 遅刻して、あげくの果てに宿題も忘れた.\n\n" +
            "The result can be neutral (a decision after long thought: 悩んだあげく、留学することにした), but it's still framed as *finally, after a struggle*.\n\n" +
            "Contrast with similar patterns:\n" +
            "- **〜末（に）** (#124): *after (much) ~*, similar but more neutral or positive and more formal: 努力の末に合格した. For a happy ending, 末に sounds more natural than あげく.\n" +
            "- **〜ものの** (#39): *although ~ is true*. No sense of a long process; it simply concedes a fact. This is the contrast drilled in the practice below.\n" +
            "- **〜ばかりに** (#48): *just because ~, (something bad)*; focuses on a single cause rather than a long process.\n\n" +
            "Restriction: the second half is a past fact or a fixed result, not a wish or request. ✗悩んだあげく、決めてください.\n\n" +
            "JLPT tip: words like さんざん, あれこれ, 長時間, 何度も before the blank + a let-down result after it → あげく.",
          see: [39, 48],
          index: ["V-たあげく", "Nのあげく", "あげくに", "あげくの果てに"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{何度|なんど}も{同|おな}じミスを{繰|く}り{返|かえ}した（　）、とうとうチームから{外|はず}されてしまった。", options: ["あげく", "ものの"], answer: 0, en: "After making the same mistake again and again, he was finally dropped from the team.", why: { en: "Being dropped is the natural outcome of repeated mistakes, not a contrast — ものの doesn't fit; あげく marks the bad end of a long process." } },
                { q: "{大学|だいがく}には{合格|ごうかく}した（　）、{学費|がくひ}が{払|はら}えるかどうか{心配|しんぱい}だ。", options: ["あげく", "ものの"], answer: 1, en: "I got into university, but I'm worried about whether I can pay the tuition.", why: { en: "There's no long, tiring process leading to this worry — it's simply “X is true, but…”, so ものの." } },
                { q: "{何日|なんにち}も{徹夜|てつや}で{働|はたら}き{続|つづ}けた（　）、とうとう{倒|たお}れて{入院|にゅういん}することになった。", options: ["あげく", "ものの"], answer: 0, en: "After working through the night for days on end, he finally collapsed and had to be hospitalized." },
                { q: "{頭|あたま}では{分|わ}かっている（　）、なかなか{実行|じっこう}できない。", options: ["あげく", "ものの"], answer: 1, en: "I understand it in my head, but I just can't put it into practice." },
              ],
            },
          ],
        },
        {
          no: 46,
          pattern: "〜ものではない／〜もんじゃない",
          phrase: "{弱気|よわき}になる**もんじゃない**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜してはいけない」「〜するべきではない」と{注意|ちゅうい}するときに{使|つか}う。",
            en: "Used to warn or admonish someone: “you mustn't / you shouldn't do ~.”",
          },
          forms: ["[V-る] + ものではない／もんじゃない"],
          examples: [
            { ja: "{人|ひと}の{失敗|しっぱい}を{笑|わら}う**もんじゃない**よ。", en: "You shouldn't laugh at other people's mistakes." },
            { ja: "{食事中|しょくじちゅう}にスマホばかり{見|み}る**ものではありません**。", en: "You shouldn't keep looking at your phone during a meal." },
            { ja: "{他人|たにん}{宛|あ}ての{手紙|てがみ}を{勝手|かって}に{開|あ}ける**ものではない**。", en: "One must not open letters addressed to other people without permission." },
            { ja: "{一度|いちど}{失敗|しっぱい}したくらいで、あきらめる**もんじゃない**。", en: "You shouldn't give up just because you failed once." },
            { ja: "{目上|めうえ}の{人|ひと}に、そんな{口|くち}のきき{方|かた}をする**ものではない**。", en: "You mustn't speak to your seniors like that." },
          ],
          deepDive:
            "**〜ものではない** is the negative of the *nature/norm* **ものだ** (#13 〜ものだ①: 人は年を取ると忘れっぽくなるものだ). If ものだ says *that's how things (should) be*, ものではない says *that's not something one does*. So it's a warning or reprimand grounded in **common sense or social norms**, not in a specific rule.\n\n" +
            "- Often said by someone older/senior: a parent to a child, a boss to a junior, or a friend giving firm advice (like 中野 in the sample: 弱気になるもんじゃないよ).\n" +
            "- **もんじゃない** is the casual contraction; add よ to soften it among friends. Polite forms: ものではありません / もんじゃありません.\n" +
            "- Connection is simple: dictionary form only (✗考えたものではない).\n\n" +
            "Compare with close expressions:\n" +
            "- **〜べきではない**: *should not* — a more logical, personal judgment; ものではない appeals to general norms.\n" +
            "- **〜てはいけない**: direct prohibition, stronger and more rule-like.\n" +
            "- **〜というものではない** (#25): *it's not (necessarily) the case that ~*: 高ければいいというものではない. Totally different meaning — a denial of a generalization, not a warning.\n" +
            "- **〜ものか / もんか** (#51): *no way I'll ~*: 負けるもんか. A refusal, not advice.\n" +
            "- **〜ものではない** can also appear in the non-admonishing sense *can't easily ~*: この味はなかなか出せるものではない (this flavor is not something you can easily produce). That's closer to *it's not possible*.\n\n" +
            "JLPT tip: if the sentence is scolding someone for bad manners or poor attitude, ものではない is the answer; if it's denying an assumption (〜ばいい), look for というものではない.",
          see: [13, 25, 39, 51, 52, 56, 92, 122, 132],
          index: ["Vるものではない", "Vるもんじゃない", "ものではありません"],
        },
        {
          no: 47,
          pattern: "V-るだけV",
          phrase: "{受|う}ける**だけ**{受|う}けてみたら",
          stars: 1,
          marks: [],
          usage: {
            ja: "「だめかもしれないが、とにかく〜してみる」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “it might not work out, but I'll (at least) try ~.”",
          },
          forms: ["[V-る] + だけ + [V]"],
          examples: [
            { ja: "{当|あ}たらないかもしれないけど、{応募|おうぼ}する**だけ**{応募|おうぼ}してみよう。", en: "I might not win, but I'll enter anyway." },
            { ja: "{返品|へんぴん}できるかどうかわからないけど、お{店|みせ}に{聞|き}く**だけ**{聞|き}いてみたら？", en: "I don't know if you can return it, but why not at least ask the shop?" },
            { ja: "{採用|さいよう}されるとは{思|おも}えないが、{企画書|きかくしょ}を{出|だ}す**だけ**{出|だ}してみた。", en: "I don't expect it to be accepted, but I submitted the proposal anyway." },
            { ja: "もう{古|ふる}いから{動|うご}かないと{思|おも}うけど、{電源|でんげん}を{入|い}れる**だけ**{入|い}れてみよう。", en: "It's so old I doubt it works, but let's at least try switching it on." },
            { ja: "{断|ことわ}られてもともとだと{思|おも}って、{部長|ぶちょう}に{頼|たの}む**だけ**{頼|たの}んでみました。", en: "I figured I had nothing to lose if he said no, so I asked the department manager anyway." },
          ],
          deepDive:
            "**V-るだけV** repeats the same verb around だけ: 言うだけ言ってみる, 行くだけ行ってみる. The feeling is *I'll at least do the ~ part, whatever the outcome*. The speaker expects the result may be negative but thinks trying costs little. It's very common in encouraging a friend: 聞くだけ聞いてみたら？ / 出すだけ出してみなよ.\n\n" +
            "- The second verb is usually in the **〜てみる** form (〜てみよう, 〜てみたら？, 〜てみた), matching the idea of *giving it a try*.\n" +
            "- Same verb both times: ✗応募するだけ出してみる.\n" +
            "- A near-synonym is **ダメもとで〜** (*nothing to lose*) or **一応〜てみる** (*just in case*).\n\n" +
            "Don't confuse it with **V-るだけV-た** (#55) in the sense *as much as possible*: 食べられるだけ食べた (*ate as much as I could*). There the first verb is usually in the **potential** form and the idea is *to the limit*, not *just try*. Compare:\n" +
            "- 頼むだけ頼んでみる — *I'll ask, at least (it may not work)*.\n" +
            "- 頼めるだけ頼んだ — *I asked as many people as I could*.\n\n" +
            "Also distinct from **〜だけに** (#105, *precisely because*) and the plain だけ *only*.\n\n" +
            "JLPT tip: in ordering questions, if you see two pieces with the same verb, one of them plus だけ, they go together: 出す＋だけ＋出して.",
          see: [55, 105],
          index: ["VるだけVてみる", "〜だけ〜てみる", "言うだけ言ってみる"],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["さえ", "あげく", "ものではない", "だけ", "ようがない"],
        items: [
          { q: "{何軒|なんけん}も{店|みせ}を{回|まわ}った＿＿、{結局|けっきょく}{最初|さいしょ}の{店|みせ}で{買|か}うことにした。", answer: "あげく", en: "After going round shop after shop, I ended up buying it at the first one." },
          { q: "A：{明日|あした}の{発表|はっぴょう}、{大丈夫|だいじょうぶ}かな。\nB：この{資料|しりょう}＿＿あれば、{何|なん}とかなるよ。", answer: "さえ", en: "A: I wonder if tomorrow's presentation will be OK.\nB: As long as you've got these materials, you'll manage." },
          { q: "{地図|ちず}もスマホもないので、{道|みち}を{調|しら}べ＿＿。", answer: "ようがない", en: "I have no map and no phone, so there's no way to look up the route." },
          { q: "{食|た}べ{物|もの}を{粗末|そまつ}にする＿＿。", answer: "ものではない", en: "You shouldn't waste food." },
          { q: "{優勝|ゆうしょう}は{無理|むり}だと{思|おも}うけど、{大会|たいかい}に{出|で}る＿＿{出|で}てみようと{思|おも}う。", answer: "だけ", en: "I don't think I can win, but I'm going to enter the tournament anyway." },
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
          { q: "{彼|かれ}は2{時間|じかん}も{迷|まよ}い{続|つづ}けた（　）、{結局|けっきょく}{何|なに}も{決|き}められなかった。", options: ["にしては", "かわりに", "あげく", "ついでに"], answer: 2, en: "He kept going back and forth for two whole hours and in the end couldn't decide anything." },
          { q: "あと1{点|てん}（　）{取|と}れていれば、{合格|ごうかく}できたのに……。", options: ["さえ", "こそ", "だけに", "として"], answer: 0, en: "If only I'd got just one more point, I would have passed…" },
          { q: "{電話|でんわ}{番号|ばんごう}を{聞|き}いていなかったので、（　）。", options: ["連絡のしようがない", "連絡するものだ", "連絡しないわけではない", "連絡せずにはいられない"], answer: 0, en: "I didn't ask for their phone number, so there's no way to contact them." },
          { q: "{隣|となり}の{部屋|へや}の{工事|こうじ}がうるさくて、{昼寝|ひるね}（　）。", options: ["どころではなかった", "に限らなかった", "ばかりではなかった", "ものではなかった"], answer: 0, en: "The construction work next door was so noisy that napping was out of the question." },
          { q: "このマンションは{駅前|えきまえ}（　）{周|まわ}りがとても{静|しず}かだ。", options: ["にしては", "をはじめ", "にこたえて", "さえ"], answer: 0, en: "For a building right in front of the station, the surroundings of this apartment are very quiet." },
          { q: "{留学|りゅうがく}したい{気持|きも}ちはある（　）、なかなか{決心|けっしん}がつかない。", options: ["あげく", "ものの", "とたん", "ばかりか"], answer: 1, en: "I do want to study abroad, but I just can't make up my mind.", why: { en: "あげく needs a long process leading to a result; here it's a simple “X is true, but Y” → ものの." } },
          { q: "{祖父|そふ}とは3{年前|ねんまえ}のお{正月|しょうがつ}に{会|あ}った（　）、{一度|いちど}も{会|あ}っていない。", options: ["ところに", "きり", "とおり", "うちに"], answer: 1, en: "I haven't seen my grandfather once since New Year's three years ago." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "{兄|あに}は", after: "、{料理|りょうり}がとても{上手|じょうず}だ。", pieces: ["にしては", "{始|はじ}めた", "{一人暮|ひとりぐ}らしを", "ばかり"], order: [2, 1, 3, 0], star: 2, en: "For someone who's only just started living on his own, my brother is a very good cook." },
          { before: "わたしの{仕事|しごと}は、", after: "、どこでもできる。", pieces: ["さえ", "あれば", "パソコン", "{一台|いちだい}"], order: [2, 3, 0, 1], star: 1, en: "As long as I have a single computer, I can do my job anywhere." },
          { before: "{人|ひと}が", after: "ものではない。", pieces: ["{口|くち}をはさむ", "ときに", "{話|はな}して", "いる"], order: [2, 3, 1, 0], star: 3, en: "You shouldn't butt in when someone is talking." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[4]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage, think about its overall content, and choose the best option for each of blanks [1]–[4]." },
        title: "{学園祭|がくえんさい}のカレー",
        text: [
          "{今年|ことし}の{学園祭|がくえんさい}で、わたしたちのサークルはカレーの{店|みせ}を{出|だ}すことになった。{去年|きょねん}は{準備|じゅんび}が{遅|おく}れて、{当日|とうじつ}はお{客|きゃく}さんの{相手|あいて}に{追|お}われ、ほかの{店|みせ}を{見|み}て{回|まわ}る[1]。",
          "そこで{今年|ことし}は、{一か月|いっかげつ}{前|まえ}から{準備|じゅんび}を{始|はじ}めた。メニューは{何度|なんど}も{話|はな}し{合|あ}った[2]、{結局|けっきょく}{去年|きょねん}と{同|おな}じカレーに{決|き}まった。",
          "ところが、{一週間|いっしゅうかん}{前|まえ}になって、{予約|よやく}していた{大|おお}きな{鍋|なべ}が{借|か}りられないことがわかった。{店|みせ}に{問|と}い{合|あ}わせてはみた[3]、ほかに{貸|か}せる{鍋|なべ}はないと{言|い}われた。{鍋|なべ}がなければ、カレーは[4]。みんなで{頭|あたま}を{抱|かか}えていたところ、{先輩|せんぱい}が{実家|じっか}の{鍋|なべ}を{持|も}ってきてくれることになり、{無事|ぶじ}に{当日|とうじつ}を{迎|むか}えることができた。",
        ],
        en: [
          "At this year's school festival, our club decided to run a curry stall. Last year our preparations were late, and on the day we were so busy dealing with customers that looking around the other stalls was out of the question.",
          "So this year we started preparing a month in advance. We discussed the menu over and over, and in the end settled on the same curry as last year.",
          "However, a week before, we found out that we couldn't borrow the big pot we had reserved. We did contact the shop, but they told us they had no other pots to lend. Without a pot, there was no way to make curry. As we were all at our wits' end, one of our seniors offered to bring a pot from his family home, and we were able to get to the day safely.",
        ],
        blanks: [
          { options: ["どころではなかった", "さえすればよかった", "わけではなかった", "ほかなかった"], answer: 0 },
          { options: ["ばかりに", "あげく", "ついでに", "うちに"], answer: 1 },
          { options: ["とたん", "からには", "おかげで", "ものの"], answer: 3 },
          { options: ["作りようがない", "作らざるを得ない", "作るわけにはいかない", "作るに違いない"], answer: 0, why: { en: "Without a pot, the means to cook are missing — ようがない. わけにはいかない is about social/moral reasons, and ざるを得ない means you are forced to cook." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 1", en: "Q4 Listening, part 1" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}では、まず{質問|しつもん}を{聞|き}いてください。そのあと、{選択肢|せんたくし}を{読|よ}んでください。それから{話|はなし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the question, then read the options. Then listen to the conversation and choose the best answer from 1–4." },
        items: [
          {
            question: "{女|おんな}の{人|ひと}がアルバイトをやめた{一番|いちばん}の{理由|りゆう}は{何|なん}ですか。",
            script: [
              { sp: "{男|おとこ}", v: "m", ja: "{最近|さいきん}、カフェのバイト{行|い}ってないみたいだね。" },
              { sp: "{女|おんな}", v: "f", ja: "うん、{先月|せんげつ}やめたんだ。" },
              { sp: "{男|おとこ}", v: "m", ja: "え、どうして？　{時給|じきゅう}よかったんじゃないの？" },
              { sp: "{女|おんな}", v: "f", ja: "{時給|じきゅう}はよかったものの、{家|いえ}から{遠|とお}くて、{片道|かたみち}1{時間|じかん}もかかってたの。でも、それはまあ{我慢|がまん}できたんだけど……。" },
              { sp: "{男|おとこ}", v: "m", ja: "うん。" },
              { sp: "{女|おんな}", v: "f", ja: "{店長|てんちょう}が{変|か}わってね、{新|あたら}しい{店長|てんちょう}がシフトを{前|まえ}の{日|ひ}に{変|か}えちゃうことが{多|おお}くて。{困|こま}ったことに、{授業|じゅぎょう}のある{日|ひ}にも{入|い}れられちゃうの。それで{授業|じゅぎょう}に{全然|ぜんぜん}{出|で}られなくなって、{試験|しけん}どころじゃなくなっちゃって。" },
              { sp: "{男|おとこ}", v: "m", ja: "それは{困|こま}るね。{店長|てんちょう}とは{話|はな}してみた？" },
              { sp: "{女|おんな}", v: "f", ja: "{言|い}うだけ{言|い}ってはみたんだけど、{変|か}わらなくて。{勉強|べんきょう}が{一番|いちばん}{大事|だいじ}だから、やめるしかなかったんだ。" },
            ],
            en: [
              "M: Looks like you haven't been going to your café job lately.",
              "F: Yeah, I quit last month.",
              "M: What? Why? Wasn't the hourly pay good?",
              "F: The pay was good, but it was far from home — an hour each way. Still, I could put up with that…",
              "M: Uh-huh.",
              "F: The manager changed, and the new manager kept changing the shifts the day before. And the problem was, he'd even put me on days when I had classes. So I couldn't go to my classes at all, and I was in no state to prepare for exams.",
              "M: That's a problem. Did you talk to the manager?",
              "F: I did at least tell him, but nothing changed. Studying matters most, so I had no choice but to quit.",
            ],
            options: [
              "{時給|じきゅう}が{安|やす}かったから",
              "{家|いえ}から{遠|とお}かったから",
              "シフトのせいで{授業|じゅぎょう}に{出|で}られなかったから",
              "{店長|てんちょう}とけんかしたから",
            ],
            answer: 2,
            why: { en: "The pay was good (ものの…), and the distance was bearable. The decisive reason was being put on shifts during class time. She talked to the manager but didn't fight with him." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 2", en: "Q4 Listening, part 2 (quick response)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、まず{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the sentence. Then listen to the replies and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{山田|やまだ}くんも{誘|さそ}ったんだけど、{今週|こんしゅう}は{引|ひ}っ{越|こ}しで、それどころじゃないんだって。" }],
            options: [
              "じゃあ、また{今度|こんど}{誘|さそ}ってみようか。",
              "よかった。じゃあ、みんなで{行|い}けるね。",
              "えっ、そんなに{暇|ひま}なの？",
            ],
            answer: 0,
            en: [
              "F: I invited Yamada too, but he says he's moving this week, so he's in no position to come.",
              "1: Then shall we try inviting him another time?",
              "2: Great. So we can all go together.",
              "3: What, he's that free?",
            ],
            why: { en: "それどころじゃない = he can't come because he's busy. Only reply 1 fits." },
          },
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{無理|むり}かもしれないけど、{先生|せんせい}に{締|し}め{切|き}りを{延|の}ばしてもらえないか、{頼|たの}むだけ{頼|たの}んでみたら？" }],
            options: [
              "うん、もう{頼|たの}まなくていいよね。",
              "そうだね、だめもとで{聞|き}いてみる。",
              "{先生|せんせい}には{頼|たの}んだきり{会|あ}ってないよ。",
            ],
            answer: 1,
            en: [
              "M: It might not work, but why don't you at least ask the teacher if they could extend the deadline?",
              "1: Yeah, I don't need to ask anymore, right?",
              "2: You're right — I've got nothing to lose, I'll ask.",
              "3: I haven't seen the teacher since I asked.",
            ],
            why: { en: "頼むだけ頼んでみたら？ = “at least try asking.” Reply 2 accepts the suggestion; 3 doesn't fit, since the listener hasn't asked yet." },
          },
        ],
      },
    },
  ],
});
