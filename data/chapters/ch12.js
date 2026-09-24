N2.register({
  id: 12,
  genre: { ja: "ビジネス{場面|ばめん}の{会話|かいわ}", en: "Conversation in a Business Setting" },
  title: { ja: "ウォーキングシューズの{開発|かいはつ}", en: "Developing Walking Shoes" },
  canDo: [
    { ja: "{会議|かいぎ}で{説明|せつめい}したり、{意見|いけん}を{言|い}ったりできる。", en: "Give explanations and state your opinion in a meeting." },
  ],
  parts: [
    // ───────────────────────────── Part (1) ─────────────────────────────
    {
      label: "(1)",
      canDo: [
        { ja: "{会議|かいぎ}で{説明|せつめい}したり、{意見|いけん}を{言|い}ったりできる。", en: "Give explanations and state your opinion in a meeting." },
      ],
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{森|もり}", v: "f", ja: "{部長|ぶちょう}、{聞|き}いた{話|はなし}では、{来年|らいねん}の{春|はる}、{北川|きたがわ}{製靴|せいか}が{通勤用|つうきんよう}のウォーキングシューズを{出|だ}す**とか**。", en: "Sir, I've heard that Kitagawa Shoes is apparently bringing out walking shoes for commuting next spring." },
          { sp: "{佐藤|さとう}", v: "m", ja: "ええ。{最近|さいきん}はオフィスの{服装|ふくそう}がどんどん{自由|じゆう}になっていますから、どの{会社|かいしゃ}もその{変化|へんか}**にそって**{商品|しょうひん}を{見直|みなお}しているんでしょう。", en: "Yes. Office dress codes have been getting more and more relaxed lately, so I suppose every company is reviewing its products in line with that change." },
          { sp: "{佐藤|さとう}", v: "m", ja: "{当社|とうしゃ}も{登山靴|とざんぐつ}**にかけては**{長|なが}い{歴史|れきし}がありますが、{街|まち}で{履|は}く{靴|くつ}となると{話|はなし}は{別|べつ}です。{若|わか}い{会社員|かいしゃいん}の{毎日|まいにち}をよく{知|し}ら**ないことには**、{選|えら}ばれる{商品|しょうひん}は{作|つく}れませんね。", en: "When it comes to mountain boots, our company has a long history too, but shoes for walking around town are another matter. Unless we really know the daily lives of young office workers, we can't make products they'll choose." },
          { sp: "{森|もり}", v: "f", ja: "そうですね。{機能性|きのうせい}の{高|たか}い{靴|くつ}というと、どうしても{重|おも}たい{見|み}た{目|め}になり**がち**ですが、{私|わたし}の{周|まわ}りでは、デザインを{気|き}にする{人|ひと}がとても{多|おお}いんです。", en: "That's right. Highly functional shoes tend to end up looking heavy, but among the people around me, a lot of them care about the design." },
          { sp: "{森|もり}", v: "f", ja: "{足|あし}に{優|やさ}しい{靴|くつ}を{選|えら}ぶべきだと{分|わ}かり**つつも**、{結局|けっきょく}{見|み}た{目|め}で{決|き}めてしまう、という{声|こえ}をよく{聞|き}きます。", en: "I often hear people say that, even though they know they should choose shoes that are kind to their feet, they end up deciding on looks after all." },
          { sp: "{佐藤|さとう}", v: "m", ja: "なるほど。{毎日|まいにち}{履|は}くものだからこそ、ということですね。", en: "I see. It's precisely because they wear them every day, then." },
        ],
      },
      points: [
        // ── 107 ──
        {
          no: 107,
          pattern: "〜とか",
          phrase: "ウォーキングシューズを{出|だ}す**とか**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜とか{言|い}っていた」などの{形|かたち}で、{人|ひと}から{聞|き}いた{情報|じょうほう}を{伝|つた}えるときに{使|つか}う。「はっきりした{情報|じょうほう}ではないが」という{気持|きも}ちが{含|ふく}まれることが{多|おお}い。「{言|い}っていた」などの{部分|ぶぶん}は{省略|しょうりゃく}されることもある。",
            en: "Used, often as 〜とか言っていた, to pass on information you heard from someone. It usually carries the feeling “I'm not 100% sure, but…”. The 言っていた part is often left out.",
          },
          forms: ["[Pl] + とか"],
          examples: [
            { ja: "{課長|かちょう}、{来月|らいげつ}からまたお{忙|いそが}しくなる**とか**。{無理|むり}なさらないでくださいね。", en: "I hear you'll be busy again from next month. Please don't overdo it." },
            { ja: "{駅前|えきまえ}の{古|ふる}い{本屋|ほんや}、{今月|こんげつ}で{閉店|へいてん}する**とか**。さびしくなるね。", en: "Apparently the old bookshop by the station is closing at the end of this month. It'll be sad." },
            { ja: "A：{田中|たなか}さん、まだ{来|き}ませんね。\nB：{電車|でんしゃ}が{止|と}まっている**とか**で、{少|すこ}し{遅|おく}れるそうです。", en: "A: Tanaka still isn't here.\nB: Something about the trains being stopped — he says he'll be a little late." },
            { ja: "{新|あたら}しい{部長|ぶちょう}は{海外|かいがい}{勤務|きんむ}が{長|なが}かった**とか**{言|い}ってたよ。", en: "Someone said the new department head spent a long time working overseas." },
            { ja: "この{冬|ふゆ}は{灯油|とうゆ}がかなり{値上|ねあ}がりする**とか**。{早|はや}めに{買|か}っておこう。", en: "Apparently kerosene is going to get a lot more expensive this winter. I'd better buy some early." },
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
            "Don't confuse it with the N3 listing **とか** (*things like A or B*): 数学とか物理とか. Listing とか follows nouns (or verbs) as *examples*; hearsay とか follows a whole clause of information and usually closes the sentence. The test likes to mix the two, so ask: is the speaker giving *examples*, or *reporting news*?",
          see: [],
          index: ["〜とか（伝聞）", "〜とか言っていた", "〜とかで"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "**とか**の{使|つか}い{方|かた}は、A（{聞|き}いた{情報|じょうほう}を{伝|つた}える）とB（{例|れい}を{挙|あ}げる）のどちらですか。", en: "Is the bold とか (A) passing on something heard, or (B) giving examples?" },
              items: [
                { q: "{隣|となり}の{奥|おく}さん、{来月|らいげつ}{赤|あか}ちゃんが{生|う}まれる**とか**。{楽|たの}しみですね。", options: ["A（聞いた情報）", "B（例を挙げる）"], answer: 0, en: "I hear the lady next door is having a baby next month. How exciting." },
                { q: "{週末|しゅうまつ}は{掃除|そうじ}**とか**{洗濯|せんたく}で{忙|いそが}しくて、どこにも{行|い}けない。", options: ["A（聞いた情報）", "B（例を挙げる）"], answer: 1, en: "On weekends I'm busy with cleaning, laundry and so on, so I can't go anywhere." },
                { q: "{課長|かちょう}：{鈴木|すずき}さん、{今日|きょう}は{遅|おそ}いね。\n{同僚|どうりょう}：ええ、バスが{事故|じこ}で{遅|おく}れている**とか**。", options: ["A（聞いた情報）", "B（例を挙げる）"], answer: 0, en: "Manager: Suzuki's late today.\nColleague: Yes — apparently her bus is delayed because of an accident." },
                { q: "{疲|つか}れたときは、{温泉|おんせん}**とか**に{行|い}ってのんびりしたいなあ。", options: ["A（聞いた情報）", "B（例を挙げる）"], answer: 1, en: "When I'm tired, I'd like to go somewhere like a hot spring and relax." },
                { q: "{林|はやし}さん、{故郷|こきょう}に{帰|かえ}って{実家|じっか}の{店|みせ}を{継|つ}ぐ**とか**{言|い}ってたよ。{店|みせ}の{名前|なまえ}とか、{変|か}えるのかな。", options: ["A（聞いた情報）", "B（例を挙げる）"], answer: 0, en: "Hayashi said something about going back home to take over the family shop. I wonder if he'll change things like the shop's name." },
                { q: "{林|はやし}さん、{故郷|こきょう}に{帰|かえ}って{実家|じっか}の{店|みせ}を{継|つ}ぐとか{言|い}ってたよ。{店|みせ}の{名前|なまえ}**とか**、{変|か}えるのかな。", options: ["A（聞いた情報）", "B（例を挙げる）"], answer: 1, en: "(Same sentence — the second とか.) …I wonder if he'll change things like the shop's name.", why: { en: "The first とか follows a whole clause of news (継ぐとか言ってた) → hearsay. The second follows a noun given as one example of what might change → listing." } },
              ],
            },
          ],
        },
        // ── 108 ──
        {
          no: 108,
          pattern: "〜にそって",
          phrase: "その{変化|へんか}**にそって**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜の{通|とお}りに」「〜に{合|あ}わせて」という{意味|いみ}で{使|つか}われる。{川|かわ}や{道|みち}のように{長|なが}く{続|つづ}くものに「{沿|そ}って」という{意味|いみ}もある。",
            en: "Means “in line with / in accordance with / following ~”. With long things such as rivers or roads it also means physically “along ~”.",
          },
          forms: ["[N] + にそって", "[N] + にそう + [N]", "[N] + にそった + [N]"],
          formNotes: [
            {
              ja: "「マニュアル・{方針|ほうしん}・{案内|あんない}・{道順|みちじゅん}」などの{言葉|ことば}といっしょに{使|つか}われることが{多|おお}い。また、「{希望|きぼう}・{要望|ようぼう}・{意向|いこう}・{期待|きたい} + にそうよう」という{言い方|いいかた}もある。",
              en: "It often goes with words like マニュアル (manual), 方針 (policy), 案内 (guidance), 道順 (route). There is also the expression 希望・要望・意向・期待 + にそうよう “so as to meet (someone's) wishes / requests / intentions / expectations”.",
            },
          ],
          examples: [
            { ja: "{線路|せんろ}**にそって**、{桜|さくら}の{木|き}がずっと{並|なら}んでいる。", en: "Cherry trees stand in a long row along the railway line." },
            { ja: "{本日|ほんじつ}の{会議|かいぎ}は、{事前|じぜん}にお{送|おく}りした{議題|ぎだい}**にそって**{進|すす}めます。", en: "Today's meeting will proceed according to the agenda we sent in advance." },
            { ja: "{会社|かいしゃ}の{方針|ほうしん}**にそった**{予算|よさん}{案|あん}を{作|つく}り{直|なお}してください。", en: "Please redo the budget proposal so that it follows company policy." },
            { ja: "お{客様|きゃくさま}のご{希望|きぼう}**にそう**よう、{精一杯|せいいっぱい}{努|つと}めてまいります。", en: "We will do our very best to meet our customers' wishes." },
          ],
          deepDive:
            "**〜にそって** comes from the verb 沿う (*to run alongside, to follow*). The kanji form 〜に沿って is common in writing; the book and most JLPT materials write it in hiragana.\n\n" +
            "Two meanings:\n" +
            "- **Physical — along a line**: 線路にそって走る, 海岸にそって道が続く. The noun is something long (川, 道, 線路, 壁).\n" +
            "- **Abstract — in line with a standard**: 手順書にそって作業する, 計画にそって進める, 目的にそった内容. The noun is a plan, rule, procedure, theme or someone's wishes; the action *follows* it faithfully.\n\n" +
            "Forms: にそって (adverbial), **にそう + N / にそった + N** (modifying a noun: 方針にそった内容). **〜にそうよう（に）** + 努力します / 努めます is a polite set phrase: ご要望にそうよう、検討いたします *we will consider it so as to meet your request*.\n\n" +
            "Neighbours:\n" +
            "- **〜にしたがって** — *following, obeying* (instructions, rules); also *as X changes*. Very close in the abstract meaning, but にそって emphasises *keeping along the line* of something laid out.\n" +
            "- **〜に基づいて** — *based on* (data, facts, laws) — the source, not the path.\n" +
            "- **〜にこたえて** (#118) — *in response to* a request or expectation.\n\n" +
            "Pitfall: にそって describes doing something *according to* the standard, so the main clause must be an action that follows it. ✗計画にそって費用が足りなくなった makes no sense — running short of money isn't something you do *following* the plan.",
          see: [118],
          index: ["Nにそって", "Nに沿って", "Nにそった", "Nにそうよう"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{新|あたら}しい{安全|あんぜん}{基準|きじゅん}にそって、（　）。", options: ["{工場|こうじょう}の{設備|せつび}が{改善|かいぜん}された", "{社員|しゃいん}から{不満|ふまん}の{声|こえ}が{上|あ}がった"], answer: 0, en: "The factory equipment was improved in line with the new safety standards.", why: { en: "にそって needs an action carried out according to the standard. Complaints aren't something done ‘following’ a standard." } },
                { q: "{説明書|せつめいしょ}にそって{組|く}み{立|た}てれば{誰|だれ}でも{完成|かんせい}できますから、（　）。", options: ["{説明書|せつめいしょ}は{読|よ}まなくてもかまいません", "{手順|てじゅん}を{飛|と}ばさずに{進|すす}めてください"], answer: 1, en: "Anyone can finish it if they assemble it following the instructions, so please don't skip any steps." },
                { q: "ガイドさんの{案内|あんない}にそって、（　）。", options: ["{館内|かんない}を{順番|じゅんばん}に{見|み}て{回|まわ}った", "{自分|じぶん}の{好|す}きな{順|じゅん}に{見|み}て{回|まわ}った"], answer: 0, en: "Following the guide's directions, we looked around the building in order." },
              ],
            },
          ],
        },
        // ── 109 ──
        {
          no: 109,
          pattern: "〜にかけては",
          phrase: "{登山靴|とざんぐつ}**にかけては**",
          stars: 2,
          marks: ["praise"],
          usage: {
            ja: "「〜の{分野|ぶんや}では」と{範囲|はんい}を{限定|げんてい}して、その{分野|ぶんや}については「{最高|さいこう}のレベルだ」「{自信|じしん}がある」などと{言|い}いたいときに{使|つか}う。",
            en: "Used to narrow the scope to one field — “when it comes to ~” — and say that in that field someone or something is top-class or has real confidence.",
          },
          forms: ["[N] + にかけては"],
          examples: [
            { ja: "{料理|りょうり}の{手際|てぎわ}のよさ**にかけては**、{母|はは}にかなう{人|ひと}はいない。", en: "When it comes to cooking efficiently, nobody can match my mother." },
            { ja: "{彼女|かのじょ}は{数字|すうじ}の{正確|せいかく}さ**にかけては**、{社内|しゃない}で{一番|いちばん}{信頼|しんらい}されている。", en: "When it comes to accuracy with numbers, she's the most trusted person in the company." },
            { ja: "{弟|おとうと}は{勉強|べんきょう}は{苦手|にがて}だが、{虫|むし}の{名前|なまえ}を{覚|おぼ}えること**にかけては**{天才|てんさい}{的|てき}だ。", en: "My little brother isn't good at studying, but when it comes to memorising insect names he's a genius." },
            { ja: "{当社|とうしゃ}は{防水|ぼうすい}{技術|ぎじゅつ}**にかけては**、三十{年|ねん}{以上|いじょう}の{実績|じっせき}があります。", en: "When it comes to waterproofing technology, our company has a track record of over thirty years." },
            { ja: "この{店|みせ}はパンの{種類|しゅるい}の{多|おお}さ**にかけても**、{町|まち}のどこにも{負|ま}けない。", en: "This shop can't be beaten anywhere in town in the variety of its bread, either." },
          ],
          deepDive:
            "**〜にかけては** singles out one area and makes a strong positive claim about it: *when it comes to ~, (X) is the best / second to none / confident*. It is typically praise (of others) or self-confidence (of oneself or one's company) — hence the smiling-face mark.\n\n" +
            "Typical second halves: 誰にも負けない, 右に出る者はいない (*nobody surpasses*), 〜が一番だ, 自信がある, 実績がある, プロ並みだ, 天才的だ. Neutral or negative statements sound wrong: ✗歌にかけては興味がある, ✗料理にかけては下手だ.\n\n" +
            "The noun is a skill or quality; with verbs, nominalise with こと: 人の名前を覚えることにかけては. **〜にかけても** (*in ~ too*) adds one more area of excellence: 料理もうまいが、掃除にかけてもプロ並みだ.\n\n" +
            "Don't mix it up with **AからBにかけて** (#32), *from A through to B* (a range of time or area): 関東から東北にかけて雪. Same verb かける, totally different meaning. The は/ても after にかけて is the clue for #109.\n\n" +
            "Compare **〜に関しては / 〜については** (*as for / regarding*): neutral topic markers that can be followed by anything. にかけては is only for *excellence*.\n\n" +
            "JLPT tip: if the options include にかけては and the sentence ends with 負けない / 一番 / 右に出る者はいない, that's your answer.",
          see: [32],
          index: ["Nにかけては", "Nにかけても"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{姉|あね}は{人|ひと}の{顔|かお}を{覚|おぼ}えることにかけては（　）。", options: ["{誰|だれ}にも{負|ま}けない", "{毎日|まいにち}{練習|れんしゅう}している"], answer: 0, en: "When it comes to remembering faces, my older sister is second to none." },
                { q: "この{町|まち}は{温泉|おんせん}の{数|かず}にかけては（　）。", options: ["{観光客|かんこうきゃく}にあまり{知|し}られていない", "{県内|けんない}で{一番|いちばん}だ"], answer: 1, en: "When it comes to the number of hot springs, this town is the top in the prefecture." },
                { q: "{彼|かれ}は{営業|えいぎょう}{担当|たんとう}だが、パソコンの{修理|しゅうり}にかけても（　）。", options: ["{興味|きょうみ}があるらしい", "プロ{並|な}みの{腕|うで}を{持|も}っている"], answer: 1, en: "He's in sales, but when it comes to repairing computers he has professional-level skill too.", why: { en: "にかけては/ても needs a claim of excellence; merely being interested isn't one." } },
                { q: "{仕事|しごと}の{正確|せいかく}さにかけては（　）。", options: ["{田村|たむら}さんが{部署|ぶしょ}で{一番|いちばん}だ", "{時間|じかん}を{守|まも}ることも{大事|だいじ}だ"], answer: 0, en: "When it comes to accuracy at work, Tamura is the best in the department." },
              ],
            },
          ],
        },
        // ── 110 ──
        {
          no: 110,
          pattern: "〜ないことには",
          phrase: "{毎日|まいにち}をよく{知|し}ら**ないことには**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜ないことには…」は、「〜なければ（…できない・わからない）」と{言|い}いたいときに{使|つか}う。",
            en: "〜ないことには… means “unless / if (you) don't ~, (you) can't … / won't know …”.",
          },
          forms: ["[V-~~ない~~] + ないことには"],
          formNotes: [
            { ja: "「[N] + が + ないことには」の{形|かたち}も{使|つか}われる。", en: "The form N + が + ないことには (“unless there is ~”) is also used." },
          ],
          examples: [
            { ja: "{実物|じつぶつ}を{見|み}**ないことには**、{買|か}うかどうか{決|き}められません。", en: "I can't decide whether to buy it without seeing the real thing." },
            { ja: "{社長|しゃちょう}の{許可|きょか}が{出|で}**ないことには**、この{計画|けいかく}は{進|すす}められない。", en: "Unless the president gives permission, we can't move ahead with this plan." },
            { ja: "{一度|いちど}{会|あ}って{話|はな}してみ**ないことには**、どんな{人|ひと}かわからないよ。", en: "You won't know what kind of person they are until you meet and talk once." },
            { ja: "{現場|げんば}での{経験|けいけん}が**ないことには**、この{仕事|しごと}は{任|まか}せられない。", en: "Without on-site experience, we can't entrust this job to you." },
            { ja: "{雨|あめ}がやま**ないことには**、{外壁|がいへき}の{工事|こうじ}は{始|はじ}められない。", en: "Until the rain stops, we can't start work on the outer walls." },
          ],
          deepDive:
            "**〜ないことには** sets up a necessary condition: *unless ~ (happens), … (can't happen)*. It's essentially 〜なければ, but heavier: it stresses that the condition is **indispensable** and that without it, nothing else can move.\n\n" +
            "The second half is almost always **negative or impossible**: 〜できない, 〜わからない, 〜始まらない, 〜ようがない, 〜ないだろう. A positive second half is wrong: ✗練習しないことには上手になる. If you want a positive result, rephrase with 〜てはじめて or 〜てこそ (#139).\n\n" +
            "Connection:\n" +
            "- **V-ない + ことには**: やってみないことには, 聞かないことには.\n" +
            "- **N + が + ないことには**: お金がないことには, 証拠がないことには.\n" +
            "- Adjectives are also possible in natural speech (安くないことには売れない), though the book focuses on verbs.\n\n" +
            "Very common in business talk when explaining why a step can't be skipped: 取引先の了承が得られないことには契約は結べない, データを集めないことには提案書は書けない.\n\n" +
            "It belongs to the big family of こと patterns (see the list): 〜こと。 (#8, rules), 〜ことなく (#20), 〜ことに (#40), 〜ことか (#42), 〜ことはない (#49), 〜ないことはない (#54 — *it's not that I can't*), 〜ことから (#62), 〜ことだ (#87), 〜たことにする (#119). Be especially careful with **〜ないことはない** (#54): it is a hedge (*I could, if I had to*), not a condition.",
          see: [8, 20, 40, 42, 49, 54, 62, 87, 119],
          index: ["Vないことには", "Nがないことには"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{十分|じゅうぶん}な{人数|にんずう}が{集|あつ}まらないことには、",
                "{毎日|まいにち}{少|すこ}しずつでも{練習|れんしゅう}しないことには、",
                "{実際|じっさい}に{住|す}んでみないことには、",
                "{故障|こしょう}の{原因|げんいん}がはっきりしないことには、",
              ],
              right: [
                "その{町|まち}の{本当|ほんとう}のよさはわからない。",
                "{修理|しゅうり}の{方法|ほうほう}も{決|き}められない。",
                "{楽器|がっき}は{上手|じょうず}にならない。",
                "ツアーは{実施|じっし}できない。",
              ],
              answer: [3, 2, 0, 1],
              en: [
                "Unless enough people sign up, the tour can't go ahead.",
                "Unless you practise at least a little every day, you won't get good at an instrument.",
                "You can't know the real appeal of that town until you actually live there.",
                "Until the cause of the breakdown is clear, we can't decide how to repair it either.",
              ],
            },
          ],
        },
        // ── 111 ──
        {
          no: 111,
          pattern: "〜がち",
          phrase: "{重|おも}たい{見|み}た{目|め}になり**がち**です",
          stars: 2,
          marks: ["regret"],
          usage: {
            ja: "「{忘|わす}れがち」「{病気|びょうき}がち」のように、「〜になることが{多|おお}い」と{言|い}いたいときに{使|つか}う。{状態|じょうたい}や{様子|ようす}を{表|あらわ}す{慣用的|かんようてき}な{言い方|いいかた}もある。",
            en: "Used, as in 忘れがち or 病気がち, to say that someone “often does / often is ~” (it often ends up ~). There are also idiomatic uses that describe a state or appearance.",
          },
          forms: ["[V-~~ます~~] + がち", "[N] + がち"],
          formNotes: [
            { ja: "「{休|やす}む・{思|おも}う・{考|かんが}える・{心配|しんぱい}する・{留守|るす}」などの{言葉|ことば}といっしょに{使|つか}われることが{多|おお}い。", en: "Often used with words such as 休む (be absent), 思う・考える (think), 心配する (worry), 留守 (being away): 休みがち, 思いがち, 考えがち, 心配しがち, 留守がち." },
          ],
          examples: [
            { ja: "{冬|ふゆ}は{運動|うんどう}{不足|ぶそく}になり**がち**なので、{意識|いしき}して{歩|ある}くようにしている。", en: "In winter I tend to get too little exercise, so I make a point of walking." },
            { ja: "{忙|いそが}しいと、{食事|しょくじ}がつい{簡単|かんたん}なものになり**がち**だ。", en: "When I'm busy, my meals tend to become simple things." },
            { ja: "{彼|かれ}は{子|こ}どものころ{病気|びょうき}**がち**で、よく{学校|がっこう}を{休|やす}んでいた。", en: "He was sickly as a child and often missed school." },
            { ja: "{一人暮|ひとりぐ}らしを{始|はじ}めると、{掃除|そうじ}を{後回|あとまわ}しにし**がち**だ。", en: "When you start living alone, you tend to put off cleaning." },
            { ja: "{今週|こんしゅう}は{曇|くも}り**がち**の{天気|てんき}が{続|つづ}くでしょう。", en: "This week the weather will probably stay mostly cloudy." },
          ],
          notes: [
            {
              ja: "「{遠慮|えんりょ}がちに」「ためらいがちに」のように、{人|ひと}の{様子|ようす}や{態度|たいど}を{表|あらわ}す{慣用的|かんようてき}な{使い方|つかいかた}もある。この{場合|ばあい}は「{何度|なんど}も〜する」という{意味|いみ}ではなく、「〜する{様子|ようす}で」という{意味|いみ}になる。",
              en: "In idiomatic expressions like 遠慮がちに (hesitantly, reservedly) or ためらいがちに (hesitatingly), がち describes someone's manner or attitude. Here it doesn't mean “often does ~” but “in a ~ manner”.",
              examples: [
                { ja: "{新人|しんじん}の{山口|やまぐち}さんは、{遠慮|えんりょ}**がち**に{手|て}を{挙|あ}げて{質問|しつもん}した。", en: "Yamaguchi, the new employee, raised her hand a little shyly and asked a question." },
                { ja: "{彼女|かのじょ}はためらい**がち**に、{本当|ほんとう}の{理由|りゆう}を{話|はな}し{始|はじ}めた。", en: "Hesitatingly, she began to explain the real reason." },
              ],
            },
          ],
          deepDive:
            "**〜がち** means *tend to ~ / be prone to ~*. It expresses a tendency that happens easily or often, and almost always one the speaker sees as **undesirable** (hence the frowning mark): 忘れがち, 遅れがち, 休みがち, なまけがち, 病気がち. ✗よく勉強しがち sounds strange because studying hard isn't a bad habit.\n\n" +
            "Connection: **V-ます stem + がち** (なりがち, 考えがち, 見落としがち) or **N + がち** (病気がち, 留守がち, 曇りがち, 遠慮がち). It behaves like a な-adjective: 〜がちだ, 〜がちな + N (忘れがちなこと), 〜がちに.\n\n" +
            "Compare with similar tendency words:\n" +
            "- **〜がち** — happens often/easily (frequency); natural for habits and recurring situations.\n" +
            "- **〜気味（ぎみ）** — *slightly, a touch of*: 風邪気味, 疲れ気味 — about a mild degree of a state, not frequency.\n" +
            "- **〜っぽい** — *-ish, easily* (casual): 忘れっぽい, 怒りっぽい — a character trait.\n" +
            "- **〜やすい** — neutral *easy to ~* (can be positive: 使いやすい).\n\n" +
            "In business conversation it is a handy, soft way to point out a common pitfall without blaming anyone: 〜を重視しがちですが… *we tend to focus on ~, but…* — then the speaker offers another view.\n\n" +
            "Idioms to learn as vocabulary: 遠慮がちに (*reservedly*), ためらいがちに (*hesitantly*), 伏し目がちに (*with downcast eyes*), 曇りがち (*mostly cloudy*).",
          see: [],
          index: ["Vがち", "Nがち", "遠慮がちに"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{会議|かいぎ}が{長|なが}くなると{話|はなし}がそれがちなので、",
                "{若|わか}いうちは{収入|しゅうにゅう}のことばかり{考|かんが}えがちだが、",
                "{休日|きゅうじつ}は{生活|せいかつ}のリズムが{乱|みだ}れがちなので、",
                "{上司|じょうし}は{部下|ぶか}のミスを{責|せ}めがちだが、",
              ],
              right: [
                "{仕事|しごと}のやりがいも{大切|たいせつ}にしたい。",
                "{平日|へいじつ}と{同|おな}じ{時間|じかん}に{起|お}きるようにしている。",
                "{最初|さいしょ}に{議題|ぎだい}と{終了|しゅうりょう}{時刻|じこく}を{決|き}めておく。",
                "それでは{部下|ぶか}が{育|そだ}たない。",
              ],
              answer: [2, 0, 1, 3],
              en: [
                "Long meetings tend to get off topic, so we decide the agenda and finishing time at the start.",
                "When you're young you tend to think only about income, but I want to value job satisfaction too.",
                "My daily rhythm tends to get disrupted on days off, so I try to get up at the same time as on weekdays.",
                "Bosses tend to blame their staff for mistakes, but that way the staff won't grow.",
              ],
            },
          ],
        },
        // ── 112 ──
        {
          no: 112,
          pattern: "〜つつも",
          phrase: "{分|わ}かり**つつも**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「{甘|あま}いものは{控|ひか}えようと{思|おも}いつつも、つい{食|た}べてしまう」のように、「〜けれども（{控|ひか}えようと{思|おも}うけれども）、{実際|じっさい}はよくないこと（{食|た}べる）をしてしまう」という{気持|きも}ちを{表|あらわ}す。",
            en: "As in “I mean to cut down on sweets, yet I end up eating them anyway”, 〜つつも expresses “although ~ (I intend / know it), in reality I do something undesirable”.",
          },
          forms: ["[V-~~ます~~] + つつも"],
          formNotes: [
            { ja: "「も」を{省略|しょうりゃく}して、「〜つつ」の{形|かたち}でもよく{使|つか}われる。", en: "It is often used without も, as 〜つつ." },
          ],
          examples: [
            { ja: "{体|からだ}によくないと{分|わ}かり**つつも**、{夜中|よなか}にラーメンを{食|た}べてしまう。", en: "Even though I know it's bad for me, I end up eating ramen in the middle of the night." },
            { ja: "{返事|へんじ}を{書|か}かなければと{思|おも}い**つつ**、もう{一週間|いっしゅうかん}もたってしまった。", en: "I kept thinking I had to write back, and a whole week has already gone by." },
            { ja: "{少|すこ}し{高|たか}いと{感|かん}じ**つつも**、{店員|てんいん}に{勧|すす}められて{契約|けいやく}してしまった。", en: "Although I felt it was a bit expensive, the salesperson talked me into signing the contract." },
            { ja: "{危険|きけん}だと{知|し}り**つつも**、{彼|かれ}は{一人|ひとり}で{冬|ふゆ}の{山|やま}に{向|む}かった。", en: "Knowing full well it was dangerous, he set off alone for the winter mountains." },
          ],
          deepDive:
            "**〜つつも** is a written/formal *although ~ / while ~ing (knowing/thinking…)*. It's close to 〜ながらも and 〜けれども, but it has a characteristic flavour: the first half is usually an **awareness or intention** (思う, 知る, 分かる, 感じる, 気にする), and the second half is an action that **goes against it** — often with しまう, つい, 結局. The speaker is admitting a small weakness: 悪いと知りつつも、つい….\n\n" +
            "- Connection: V-ます stem + つつも: 思いつつも, 知りつつも, 分かりつつも.\n" +
            "- **〜つつ** without も means the same in this concessive use (思いつつ、行けなかった), but 〜つつ alone can also mean *while doing* (#30), so context decides.\n\n" +
            "The つつ family (see the list):\n" +
            "- **Vつつ** (#30): *while doing* (simultaneous action, formal ながら): 景色を楽しみつつ歩く.\n" +
            "- **Vつつも** (#112): *although* (concession, this point).\n" +
            "- **Vつつある** (#71): *is in the process of ~ing* (ongoing change): 広がりつつある.\n\n" +
            "Compare **〜ながらも**: also *although*, and can follow adjectives/nouns (狭いながらも, 子どもながらも). つつも is limited to verbs and sounds more literary.\n\n" +
            "JLPT tip: 〜と思いつつも / 〜と知りつつも + つい / 〜てしまった is the textbook pattern. If a sentence has 思い（　）、つい…てしまう, choose つつ(も).",
          see: [30, 71],
          index: ["Vつつも", "Vつつ（逆接）"],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["にかけては", "つつも", "とか", "にそって", "ないことには", "がち"],
        items: [
          { q: "{最近|さいきん}、{佐藤|さとう}さん、{遅刻|ちこく}＿＿だね。{何|なに}かあったのかな。", answer: "がち", en: "Sato has been late a lot recently. I wonder if something happened." },
          { q: "この{工房|こうぼう}は{革|かわ}{製品|せいひん}の{修理|しゅうり}＿＿、{県内|けんない}で{一番|いちばん}{評判|ひょうばん}がいい。", answer: "にかけては", en: "When it comes to repairing leather goods, this workshop has the best reputation in the prefecture." },
          { q: "A：{部長|ぶちょう}、{来月|らいげつ}から{海外|かいがい}に{赴任|ふにん}なさる＿＿。\nB：ええ、{急|きゅう}に{決|き}まったんですよ。", answer: "とか", en: "A: I hear you're being posted overseas from next month.\nB: Yes, it was decided suddenly." },
          { q: "{実際|じっさい}に{試|ため}してみ＿＿、{効果|こうか}があるかどうかはわからない。", answer: "ないことには", en: "You can't tell whether it works until you actually try it." },
          { q: "{地図|ちず}の{順路|じゅんろ}＿＿{歩|ある}けば、{迷|まよ}わずに{城|しろ}に{着|つ}けます。", answer: "にそって", en: "If you walk following the route on the map, you'll reach the castle without getting lost." },
          { q: "{早|はや}く{寝|ね}なければと{思|おも}い＿＿、つい{動画|どうが}を{見|み}てしまう。", answer: "つつも", en: "Even though I think I should go to bed early, I end up watching videos." },
        ],
      },
    },
    // ───────────────────────────── Part (2) ─────────────────────────────
    {
      label: "(2)",
      canDo: [
        { ja: "{会議|かいぎ}で{説明|せつめい}したり、{意見|いけん}を{言|い}ったりできる。", en: "Give explanations and state your opinion in a meeting." },
      ],
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{佐藤|さとう}", v: "m", ja: "では、{当社|とうしゃ}が{通勤用|つうきんよう}の{靴|くつ}を{作|つく}る**としたら**、{軽|かる}さと{見|み}た{目|め}の{両立|りょうりつ}が{欠|か}かせませんね。", en: "Well then, if our company were to make commuting shoes, we'd need to combine lightness with good looks." },
          { sp: "{森|もり}", v: "f", ja: "ええ。スーツにもジーンズにも{合|あ}う{形|かたち}が{理想|りそう}だと{思|おも}います。", en: "Yes. I think the ideal would be a shape that goes with both a suit and jeans." },
          { sp: "{佐藤|さとう}", v: "m", ja: "{売|う}れるかどうかは、{素材|そざい}{選|えら}び**{次第|しだい}**ですね。", en: "Whether it sells will depend on the choice of materials." },
          { sp: "{森|もり}", v: "f", ja: "はい。ただ、この{分野|ぶんや}には{海外|かいがい}ブランドも{次々|つぎつぎ}に{参入|さんにゅう}していて、{価格|かかく}{競争|きょうそう}は{激|はげ}しくなる**{一方|いっぽう}**です。", en: "Yes. But foreign brands keep entering this field, and price competition just keeps getting fiercer." },
          { sp: "{佐藤|さとう}", v: "m", ja: "そうですね。では、{試作品|しさくひん}づくり**に{先立|さきだ}って**、まず{通勤者|つうきんしゃ}へのインタビューを{行|おこな}いましょう。", en: "Right. Then, before making a prototype, let's first interview commuters." },
          { sp: "{森|もり}", v: "f", ja: "{承知|しょうち}しました。{実際|じっさい}の{声|こえ}を{集|あつ}めた**{上|うえ}で**、デザイン{案|あん}を{三|みっ}つほどまとめます。", en: "Understood. After gathering real opinions, I'll put together about three design proposals." },
          { sp: "{佐藤|さとう}", v: "m", ja: "よろしく{頼|たの}みます。「{一日中|いちにちじゅう}{歩|ある}いても{疲|つか}れにくく、きちんと{見|み}える」という{要望|ようぼう}**にこたえた**{一足|いっそく}にしましょう。", en: "I'm counting on you. Let's make a pair that meets the demand for shoes that “don't tire you out even after walking all day, and still look smart”." },
        ],
      },
      points: [
        // ── 113 ──
        {
          no: 113,
          pattern: "〜としたら／〜とすると／〜とすれば",
          phrase: "{靴|くつ}を{作|つく}る**としたら**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜としたら…」は、「〜だと{考|かんが}えれば…」という{意味|いみ}で、{自分|じぶん}の{意見|いけん}や{予想|よそう}を{言|い}いたいときに{使|つか}う。",
            en: "〜としたら… means “if we suppose ~ / if ~ were the case, …” and is used to state one's own opinion or prediction on that assumption.",
          },
          forms: ["[Pl] + としたら", "[Pl] + とすると", "[Pl] + とすれば"],
          examples: [
            { ja: "もし一か{月|げつ}{休|やす}みが{取|と}れる**としたら**、{南米|なんべい}をゆっくり{旅|たび}してみたい。", en: "If I could take a month off, I'd like to travel slowly around South America." },
            { ja: "{車|くるま}を{買|か}う**とすれば**、{燃費|ねんぴ}のいい{小型車|こがたしゃ}がいいな。", en: "If I were to buy a car, I'd want a small, fuel-efficient one." },
            { ja: "A：{会議|かいぎ}の{資料|しりょう}、まだ{印刷|いんさつ}できていないそうです。\nB：{資料|しりょう}がない**とすると**、{口頭|こうとう}で{説明|せつめい}するしかないですね。", en: "A: Apparently the meeting documents still haven't been printed.\nB: If there are no documents, we'll just have to explain orally." },
            { ja: "その{話|はなし}が{本当|ほんとう}だ**としたら**、{計画|けいかく}を{最初|さいしょ}から{見直|みなお}す{必要|ひつよう}がある。", en: "If that story is true, we need to rethink the plan from the start." },
          ],
          deepDive:
            "**〜としたら / とすると / とすれば** all mean *supposing that ~ / if we assume ~*. The と here is the quotative と plus する (*to take as*), so literally *if we take it that ~*. The speaker lays down an assumption and then gives a **judgment, opinion, preference or inference** based on it.\n\n" +
            "Two main uses:\n" +
            "- **Pure hypothesis**: もし宝くじが当たったとしたら… / 家を建てるとしたら… — often with もし, and often followed by 〜たい, 〜がいい, 何がいいか.\n" +
            "- **Inference from given information**: 電車が止まっているとすると、会議は遅れて始まるだろう *if (as I hear) the trains have stopped, then the meeting will start late*. Here the condition is new information someone just gave you.\n\n" +
            "The three variants are largely interchangeable. としたら is the most conversational; とすれば is slightly more logical/written; とすると is often used for the *inference* sense (*in that case…*). Also: **だとしたら / だとすると** at the start of a sentence = *if that's so*.\n\n" +
            "How it differs from **〜たら** — the key test point:\n" +
            "- たら can describe actual past events (駅に着いたら雨が降っていた) — としたら **cannot**.\n" +
            "- たら is used for realistic conditions leading to instructions or actions (5時になっても連絡がなかったら、こちらから電話します). としたら sounds odd here because it treats the condition as a mere supposition.\n" +
            "- としたら suits *choosing under a hypothesis*: お土産を買うとしたら何がいい? (*if we were to buy a souvenir, what would be good?*).\n\n" +
            "Connection is plain form: 行くとしたら, 高いとしたら, 本当だとしたら, 学生だとしたら (note だ with nouns/な-adjectives).",
          see: [],
          index: ["〜としたら", "〜とすると", "〜とすれば", "だとしたら"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{来年|らいねん}{引|ひ}っ{越|こ}す（　）、{駅|えき}から{近|ちか}いところがいいな。", options: ["としたら", "たら"], answer: 0, en: "If I move next year, I'd like somewhere close to the station.", why: { en: "The speaker states a preference under a supposition → としたら. 引っ越したら would mean ‘after moving, a place near the station is good’, which doesn't make sense." } },
                { q: "{昨日|きのう}{家|いえ}に（　）、{玄関|げんかん}の{前|まえ}に{大|おお}きな{荷物|にもつ}が{届|とど}いていた。", options: ["帰るとしたら", "帰ったら"], answer: 1, en: "When I got home yesterday, a big package had been delivered in front of the door.", why: { en: "An actual past discovery needs たら. としたら can't describe something that really happened." } },
                { q: "{会議|かいぎ}が（　）、すぐに{私|わたし}に{電話|でんわ}をください。", options: ["終わるとしたら", "終わったら"], answer: 1, en: "Please call me as soon as the meeting ends.", why: { en: "A realistic condition followed by a request → たら. としたら treats the meeting ending as a mere hypothesis." } },
                { q: "{外国語|がいこくご}を{一|ひと}つだけ（　）、{何語|なにご}がいいと{思|おも}いますか。", options: ["習うとしたら", "習ったら"], answer: 0, en: "If you were to learn just one foreign language, which do you think would be good?" },
              ],
            },
          ],
        },
        // ── 114 ──
        {
          no: 114,
          pattern: "〜{次第|しだい}",
          phrase: "{素材|そざい}{選|えら}び**{次第|しだい}**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「ツアーの{料金|りょうきん}は{季節|きせつ}{次第|しだい}で{大|おお}きく{変|か}わる」のように、「〜（{季節|きせつ}）によって{決|き}まる」ということを{表|あらわ}す。",
            en: "As in “The price of the tour varies greatly depending on the season”, it expresses that something is decided according to ~ (the season).",
          },
          forms: ["[N] + {次第|しだい}"],
          examples: [
            { ja: "{料理|りょうり}の{味|あじ}は{素材|そざい}の{質|しつ}**{次第|しだい}**だ。", en: "The taste of a dish depends on the quality of the ingredients." },
            { ja: "{練習|れんしゅう}**{次第|しだい}**で、{大人|おとな}になってからでも{泳|およ}げるようになります。", en: "Depending on how you practise, you can learn to swim even as an adult." },
            { ja: "{参加|さんか}できるかどうかは、{来週|らいしゅう}の{仕事|しごと}の{状況|じょうきょう}**{次第|しだい}**です。", en: "Whether I can take part depends on how work goes next week." },
            { ja: "{気持|きも}ちの{持|も}ち{方|かた}**{次第|しだい}**で、{毎日|まいにち}はもっと{楽|たの}しくなる。", en: "Depending on your attitude, every day can become more enjoyable." },
            { ja: "{部屋|へや}の{料金|りょうきん}は、{時期|じき}**{次第|しだい}**では{倍|ばい}{近|ちか}くになることもある。", en: "Depending on the season, room rates can nearly double." },
          ],
          deepDive:
            "**N + 次第** means *depending on N / it's up to N*: the outcome is **determined by** N. It comes in three shapes:\n" +
            "- **N次第だ** — end of sentence: 合格できるかは努力次第だ *passing depends on effort*.\n" +
            "- **N次第で** — adverbial: 使い方次第で便利にも危険にもなる *depending on how it's used, it can be handy or dangerous*.\n" +
            "- **N次第では** — *in some cases, depending on N* — hints at a particular (often unwelcome) possibility: 参加者数次第では中止になります.\n\n" +
            "The noun is something that can vary and decides the result: 天気, 予算, 結果, 努力, やる気, 考え方, あなた (あなた次第 *it's up to you*). 世の中は金次第 *money talks* is a well-known saying.\n\n" +
            "Compare:\n" +
            "- **〜によって** — *depending on*, but more neutral and descriptive; 次第 stresses that N is the *deciding factor*, often with a sense of ‘so it's up to N’.\n" +
            "- **〜に応じて** (#4) — *adjusting to match* N.\n\n" +
            "Don't confuse it with **V-ます + 次第** (#36), *as soon as ~*: 情報が入り次第、お知らせします. That one attaches to a verb stem and is about timing; #114 attaches to a noun and is about dependence. Nouns made from verbs can look similar (到着次第 = *as soon as it arrives* — #36), so check whether the meaning is *timing* or *determined by*.",
          see: [36, 4],
          index: ["N次第", "N次第で", "N次第では", "N次第だ"],
        },
        // ── 115 ──
        {
          no: 115,
          pattern: "〜{一方|いっぽう}だ",
          phrase: "{激|はげ}しくなる**{一方|いっぽう}**です",
          stars: 2,
          marks: ["regret"],
          usage: {
            ja: "「{物価|ぶっか}が{上|あ}がる{一方|いっぽう}だ」のように、「〜の{状態|じょうたい}がどんどん{進|すす}んでいく」と{言|い}いたいときに{使|つか}う。",
            en: "Used, as in “prices just keep going up”, to say that a situation keeps moving further and further in one direction.",
          },
          forms: ["[V-る] + {一方|いっぽう}"],
          formNotes: [
            { ja: "{変化|へんか}を{表|あらわ}す{動詞|どうし}が{使|つか}われる。", en: "A verb that expresses change is used (増える, 減る, 高まる, 〜くなる, 〜になる, 進む…)." },
          ],
          examples: [
            { ja: "{郊外|こうがい}に{大型|おおがた}{店|てん}ができてから、{商店街|しょうてんがい}の{客|きゃく}は{減|へ}る**{一方|いっぽう}**だ。", en: "Since the big store opened in the suburbs, customers at the shopping street have just kept decreasing." },
            { ja: "{薬|くすり}を{飲|の}んでいるのに、{痛|いた}みはひどくなる**{一方|いっぽう}**で、{不安|ふあん}になってきた。", en: "Even though I'm taking medicine, the pain keeps getting worse, and I'm starting to worry." },
            { ja: "{仕事|しごと}は{増|ふ}える**{一方|いっぽう}**なのに、{人|ひと}は{少|すこ}しも{増|ふ}えない。", en: "The work keeps increasing, but we don't get a single extra person." },
            { ja: "{高齢化|こうれいか}が{進|すす}み、{介護|かいご}の{担|にな}い{手|て}の{不足|ふそく}は{深刻|しんこく}になる**{一方|いっぽう}**だ。", en: "As society ages, the shortage of care workers keeps getting more serious." },
          ],
          plus: [
            {
              pattern: "〜ばかりだ",
              stars: 2,
              marks: ["regret"],
              usage: {
                ja: "「[V-る] + ばかり」も{同|おな}じ{意味|いみ}で{使|つか}われる。",
                en: "V-る + ばかり is also used with the same meaning: “just keeps ~ing (in a bad direction)”.",
              },
              forms: ["[V-る] + ばかり"],
              examples: [
                { ja: "{雨|あめ}が{降|ふ}らず、ダムの{水|みず}は{減|へ}る**ばかり**だ。", en: "With no rain, the water in the dam just keeps going down." },
                { ja: "{薬|くすり}を{変|か}えても、{症状|しょうじょう}は{悪|わる}くなる**ばかり**だった。", en: "Even after changing medicine, the symptoms only got worse." },
                { ja: "{節約|せつやく}しようと{思|おも}っているのに、{出費|しゅっぴ}はかさむ**ばかり**だ。", en: "I'm trying to save, but my expenses just keep piling up." },
              ],
            },
          ],
          deepDive:
            "**V-る + 一方だ** says that a change **keeps going in one direction** and shows no sign of stopping: 増える一方, 減る一方, 悪くなる一方, 高まる一方. The verb must express change — ✗食べる一方 or ✗ある一方 don't work in this sense.\n\n" +
            "It is usually (not always) used for unwelcome trends — hence the frowning mark: 物価は上がる一方だ, 不安は大きくなる一方だ. Neutral trends are possible (需要は高まる一方だ), but you'll rarely see it for clearly happy changes.\n\n" +
            "Grammar: 一方だ at the end, 一方で / 一方なので mid-sentence, 一方の + N is rare.\n\n" +
            "**Plus: V-る + ばかりだ** means the same (*just keeps ~ing*) and is even more strongly negative: 悪くなるばかりだ. ばかり has many other uses, though (see the list): 〜たばかり (*just did*), Nばかり (*nothing but*), 〜ばかりか (*not only*), 〜ばかりに (#48, *simply because ~, something bad happened*).\n\n" +
            "The big trap is **〜一方（で）** (#61), *while / on the other hand*: 駅前はにぎやかな一方、裏通りは静かだ. How to tell them apart:\n" +
            "- **#115**: change verb + 一方**だ** (sentence end), or + 一方で followed by a *consequence* (患者が増える一方で、病院は人手が足りない).\n" +
            "- **#61**: 一方（で）links two **contrasting** facts or two parallel activities (教師として働く一方、小説も書いている). The part after it is a different, contrasting fact.\n\n" +
            "JLPT tip: 〜一方だ at the end of the sentence is almost always #115.",
          see: [61, 48],
          index: ["V一方だ", "Vばかりだ"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "**{一方|いっぽう}**の{使|つか}い{方|かた}は、A（「〜する{一方|いっぽう}で、{別|べつ}の{面|めん}では」）とB（「どんどん〜していく」）のどちらですか。", en: "Is the bold 一方 (A) “while / on the other hand” (#61) or (B) “keeps ~ing more and more” (#115)?" },
              items: [
                { q: "{少子化|しょうしか}で、{地方|ちほう}の{小学校|しょうがっこう}の{数|かず}は{減|へ}る**{一方|いっぽう}**だ。", options: ["A", "B"], answer: 1, en: "With the falling birthrate, the number of rural elementary schools keeps decreasing." },
                { q: "{兄|あに}は{昼間|ひるま}は{会社|かいしゃ}で{働|はたら}く**{一方|いっぽう}**、{夜|よる}は{大学院|だいがくいん}で{研究|けんきゅう}を{続|つづ}けている。", options: ["A", "B"], answer: 0, en: "My brother works at a company during the day, while at night he continues his research at graduate school." },
                { q: "{円安|えんやす}が{進|すす}んで、{輸入|ゆにゅう}{食品|しょくひん}の{値段|ねだん}は{上|あ}がる**{一方|いっぽう}**で、{家計|かけい}が{苦|くる}しい。", options: ["A", "B"], answer: 1, en: "With the weak yen, prices of imported food just keep rising, and household budgets are tight.", why: { en: "Although it's 一方で, the verb (上がる) expresses change and the second half is a consequence, not a contrasting fact → B." } },
              ],
            },
          ],
        },
        // ── 116 ──
        {
          no: 116,
          pattern: "〜に{先立|さきだ}って",
          phrase: "{試作品|しさくひん}づくり**に{先立|さきだ}って**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜に{先立|さきだ}って」は、「〜の{前|まえ}に、{何|なに}かが{行|おこな}われる」と{言|い}いたいときに{使|つか}う。",
            en: "〜に先立って is used to say that something is done beforehand, “prior to ~”.",
          },
          forms: ["[N] + に{先立|さきだ}って", "[N] + に{先立|さきだ}ち", "[N] + に{先立|さきだ}つ + [N]"],
          examples: [
            { ja: "{新|あたら}しい{駅|えき}ビルのオープン**に{先立|さきだ}って**、{地元|じもと}の{人|ひと}{向|む}けの{見学会|けんがくかい}が{開|ひら}かれた。", en: "Ahead of the opening of the new station building, a tour was held for local residents." },
            { ja: "{試合|しあい}{開始|かいし}**に{先立|さきだ}ち**、{選手|せんしゅ}{全員|ぜんいん}で{黙祷|もくとう}を{捧|ささ}げた。", en: "Before the start of the match, all the players observed a moment of silence." },
            { ja: "{映画|えいが}の{公開|こうかい}**に{先立|さきだ}つ**{試写会|ししゃかい}に{招待|しょうたい}された。", en: "I was invited to a preview screening held before the film's release." },
            { ja: "{契約|けいやく}**に{先立|さきだ}って**、{担当者|たんとうしゃ}から{詳|くわ}しい{説明|せつめい}がございます。", en: "Before the contract is signed, the person in charge will give a detailed explanation." },
          ],
          deepDive:
            "**〜に先立って** (先立つ = *to go first, to precede*) means *prior to ~ / ahead of ~*. It's a formal version of 〜の前に, used when **preparations or preliminary events** take place before an important occasion: 発売に先立って記者会見, 着工に先立って住民説明会, 開幕に先立つ記念式典.\n\n" +
            "- Forms: に先立って (neutral formal), **に先立ち** (more written, typical in announcements), **に先立つ + N** (noun-modifying).\n" +
            "- The noun is usually an event noun: 開店, 発売, 開催, 着工, 出発, 来日, 選挙.\n" +
            "- Register: news, announcements, speeches, business meetings. Saying 食事に先立って手を洗う sounds comically stiff — use 食事の前に.\n\n" +
            "Compare with other ‘time’ patterns that the test uses as distractors:\n" +
            "- **〜に際して** (Plus to #7) / **〜にあたって** (#135): *on the occasion of, when* — the time of the event itself, not beforehand.\n" +
            "- **〜にともなって / 〜につれて / 〜とともに**: *along with, as ~ changes* — a change that accompanies another. ✗気温の上昇に先立って電気の使用量が増えた — use にともなって.\n" +
            "- **〜にわたって / にわたる**: *over a span of* (time, area) — needs a range: 3日間にわたる会議.\n\n" +
            "A simple check: if you can replace it with 〜より前に and the first event is a big occasion, に先立って fits.",
          see: [],
          index: ["Nに先立って", "Nに先立ち", "Nに先立つ"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{新|しん}システムの{運用|うんよう}{開始|かいし}（　）、{全社員|ぜんしゃいん}を{対象|たいしょう}に{研修|けんしゅう}が{行|おこな}われた。", options: ["に先立って", "につれて"], answer: 0, en: "Prior to the new system going live, training was held for all employees." },
                { q: "{工場|こうじょう}{見学|けんがく}（　）{安全|あんぜん}{説明|せつめい}を{受|う}けた。", options: ["に先立つ", "にわたる"], answer: 0, en: "We received a safety briefing before the factory tour.", why: { en: "にわたる needs a span of time or space (3時間にわたる). 工場見学 isn't a span." } },
                { q: "{気温|きおん}の{上昇|じょうしょう}（　）、{電気|でんき}の{使用量|しようりょう}が{増|ふ}えた。", options: ["に先立って", "にともなって"], answer: 1, en: "Along with the rise in temperature, electricity use went up." },
                { q: "{年齢|ねんれい}を{重|かさ}ねる（　）、{物|もの}の{考|かんが}え{方|かた}も{変|か}わってきた。", options: ["に先立って", "とともに"], answer: 1, en: "As I've grown older, my way of thinking has changed too." },
              ],
            },
          ],
        },
        // ── 117 ──
        {
          no: 117,
          pattern: "〜{上|うえ}で",
          phrase: "{声|こえ}を{集|あつ}めた**{上|うえ}で**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「〜{上|うえ}で」は、「〜してから」と{同|おな}じ{意味|いみ}で{使|つか}う。ただし、{日常的|にちじょうてき}な{話題|わだい}には{使|つか}わない。",
            en: "〜上で means the same as 〜てから “after doing ~ (and on that basis)”. However, it is not used for everyday, casual topics.",
          },
          forms: ["[V-た] + {上|うえ}で", "[N] の + {上|うえ}で", "[V-た] + {上|うえ}（で）の + [N]", "[N] の + {上|うえ}（で）の + [N]"],
          examples: [
            { ja: "{利用|りよう}{規約|きやく}をよく{読|よ}んだ**{上|うえ}で**、{申|もう}し{込|こ}みボタンを{押|お}してください。", en: "Please press the application button after reading the terms of use carefully." },
            { ja: "{部長|ぶちょう}と{相談|そうだん}した**{上|うえ}で**、{改|あらた}めてご{連絡|れんらく}いたします。", en: "I'll get back to you after consulting with my manager." },
            { ja: "{結果|けっか}は、{社内|しゃない}で{検討|けんとう}の**{上|うえ}**、{来週|らいしゅう}お{知|し}らせします。", en: "We will discuss it internally and let you know the result next week." },
            { ja: "{両親|りょうしん}の{了解|りょうかい}を{得|え}た**{上|うえ}で**の{留学|りゅうがく}ですから、ご{心配|しんぱい}なく。", en: "I'm going abroad to study with my parents' consent, so please don't worry." },
            { ja: "{説明|せつめい}をお{聞|き}きになった**{上|うえ}で**、ご{購入|こうにゅう}をお{決|き}めください。", en: "Please decide on your purchase after hearing the explanation." },
          ],
          notes: [
            {
              ja: "「ご{確認|かくにん}の{上|うえ}」「ご{記入|きにゅう}の{上|うえ}」のように、「ご + [N] + の{上|うえ}」の{形|かたち}で「で」を{付|つ}けずに{使|つか}うことも{多|おお}い。{丁寧|ていねい}な{依頼|いらい}の{文|ぶん}によく{見|み}られる。",
              en: "It is often used without で in the form ご + N + の上, as in ご確認の上 or ご記入の上. This is typical of polite written requests.",
              examples: [
                { ja: "{必要|ひつよう}{事項|じこう}をご{記入|きにゅう}の**{上|うえ}**、{窓口|まどぐち}にお{出|だ}しください。", en: "Please fill in the required items and hand it in at the counter." },
                { ja: "{日時|にちじ}をご{確認|かくにん}の**{上|うえ}**、お{越|こ}しください。", en: "Please check the date and time before coming." },
              ],
            },
          ],
          deepDive:
            "**V-た上で / Nの上で** means *after doing ~ (and on that basis)*. The important nuance: the first action is a **necessary step** — a check, a discussion, a consideration — and the second action (a decision, a signature, a reply) is done **based on its result**. 検討した上で方針を決める = *decide on a policy after (and based on) careful consideration*.\n\n" +
            "That's why it sounds wrong for casual sequences: ✗買い物をした上で昼ごはんにしよう → 買い物をした後で / してから. Use it for decisions, procedures and formal business talk.\n\n" +
            "Forms:\n" +
            "- V-た + 上で: 相談した上で, 確認した上で.\n" +
            "- N（する-noun）+ の + 上で: 検討の上で, 相談の上で.\n" +
            "- ご + N + の上 (without で) in polite requests: ご確認の上, ご了承の上.\n" +
            "- **上での + N**: 十分に話し合った上での決定 *a decision made after thorough discussion*.\n\n" +
            "The 上 family (see the list) is a classic trap:\n" +
            "- **V-る上で** (#14): *in doing ~, for the purpose of ~* — note V-**る**: 就職活動をする上で大切なこと.\n" +
            "- **V-た上で** (#117): *after doing ~* — note V-**た**.\n" +
            "- **〜上は** (#18): *now that ~, since ~* (determination/obligation).\n" +
            "- **〜上（に）** (#102): *on top of ~, in addition*.\n" +
            "- **N上（じょう）** (#70): *from the standpoint of N*: 歴史上, 教育上.\n\n" +
            "Other distractors: **〜あげく** (after a lot of trouble, a bad result), **〜きり** (since then, nothing more), **〜限り** (as far as ~: 調べた限り *as far as I've checked*). 調べた上で would be followed by a decision; 調べた限り by a statement of what you found.",
          see: [14, 18, 70, 102],
          index: ["Vた上で", "Nの上で", "ご〜の上", "上での"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "A：{晩|ばん}ご{飯|はん}、{先|さき}に{食|た}べる？\nB：ううん、お{風呂|ふろ}に{入|はい}った（　）{食|た}べるよ。", options: ["上で", "後で"], answer: 1, en: "A: Are you going to eat dinner first?\nB: No, I'll eat after I've had a bath.", why: { en: "An everyday sequence of actions → 後で. 上で is for formal decisions based on a preceding step." } },
                { q: "{家|いえ}を{買|か}うかどうかは、{資金|しきん}{計画|けいかく}をしっかり{立|た}てた（　）{判断|はんだん}するべきだ。", options: ["上で", "あげく"], answer: 0, en: "Whether or not to buy a house should be decided after making a solid financial plan." },
                { q: "{複数|ふくすう}の{見積|みつ}もりを{比較|ひかく}した（　）、{工事|こうじ}を{頼|たの}む{業者|ぎょうしゃ}を{選|えら}びましょう。", options: ["上で", "きり"], answer: 0, en: "Let's choose the contractor after comparing several estimates." },
                { q: "{私|わたし}が{聞|き}いた（　）、{彼|かれ}はその{計画|けいかく}に{反対|はんたい}していないようだ。", options: ["上で", "限り"], answer: 1, en: "As far as I've heard, he doesn't seem to be against the plan.", why: { en: "The second half reports what the speaker knows, not a decision made after hearing → 聞いた限り (as far as)." } },
              ],
            },
          ],
        },
        // ── 118 ──
        {
          no: 118,
          pattern: "〜にこたえて",
          phrase: "{要望|ようぼう}**にこたえた**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜にこたえて」は、「{相手|あいて}からの{期待|きたい}や{要請|ようせい}の{通|とお}りに」と{言|い}いたいときに{使|つか}う。",
            en: "〜にこたえて is used to say “in response to / so as to meet another person's expectation or request”.",
          },
          forms: ["[N] + にこたえて", "[N] + にこたえた + [N]"],
          formNotes: [
            { ja: "「{期待|きたい}・{要望|ようぼう}・{要請|ようせい}・アンコール・リクエスト・{声援|せいえん}・{声|こえ}」などの{言葉|ことば}といっしょに{使|つか}われる。", en: "Used with words like 期待 (expectation), 要望 (request), 要請 (formal request), アンコール (encore), リクエスト (request), 声援 (cheering), 声 (voices, opinions)." },
            { ja: "「ご + [N] + におこたえして」の{形|かたち}もある。", en: "There is also the humble form ご + N + におこたえして." },
          ],
          examples: [
            { ja: "{利用者|りようしゃ}の{要望|ようぼう}**にこたえて**、{図書館|としょかん}に{自習|じしゅう}スペースが{設|もう}けられた。", en: "In response to users' requests, a self-study space was set up in the library." },
            { ja: "リスナーのリクエスト**にこたえて**、{番組|ばんぐみ}の{最後|さいご}に{懐|なつ}かしい{曲|きょく}が{流|なが}された。", en: "In response to listeners' requests, a nostalgic song was played at the end of the programme." },
            { ja: "{彼|かれ}は{両親|りょうしん}の{期待|きたい}**にこたえ**ようと、{必死|ひっし}に{勉強|べんきょう}した。", en: "He studied desperately to live up to his parents' expectations." },
            { ja: "お{客様|きゃくさま}の{声|こえ}**におこたえして**、{甘|あま}さ{控|ひか}えめの{新|あたら}しい{味|あじ}を{発売|はつばい}いたしました。", en: "In response to our customers' feedback, we have launched a new, less sweet flavour." },
            { ja: "{住民|じゅうみん}の{声|こえ}**にこたえた**{広|ひろ}い{公園|こうえん}が、{駅|えき}の{近|ちか}くに{完成|かんせい}した。", en: "A spacious park that answers residents' wishes has been completed near the station." },
          ],
          deepDive:
            "**〜にこたえて** (応える, *to respond to, to live up to*) means *in response to someone's expectation or request — and satisfying it*. The noun is always something **coming from other people** that asks for or hopes for something: 期待, 要望, 要請, 希望, 声, リクエスト, アンコール, 声援, ニーズ.\n\n" +
            "- Forms: にこたえて (adverbial), **にこたえた + N** (ニーズにこたえた商品), にこたえ (written), **ご〜におこたえして** (humble business language — very common in ads and shop notices: ご要望におこたえして、駐車場を拡張いたしました).\n" +
            "- 期待にこたえる is also a set verb phrase: *to live up to expectations*.\n\n" +
            "Compare with **〜に応じて** (#4):\n" +
            "- に応じて = *in accordance with, adjusting to* a variable condition (size, level, season, amount): 大きさに応じて料金が変わる. It's about **matching** a scale.\n" +
            "- にこたえて = *responding to* a wish/expectation and **fulfilling** it. ✗期待に応じて活躍した / ✓期待にこたえて活躍した.\n" +
            "- With 要望 both can appear (要望に応じて = *according to what's requested*), so on the test look at the noun: 期待・声援・アンコール → にこたえて; 大きさ・季節・量・レベル → に応じて.\n\n" +
            "Compare also **〜にそって** (#108): *following* a plan/wish faithfully, and **〜に基づいて** (*based on* data). にこたえて has the warmest nuance: someone asked, and we delivered.",
          see: [4, 108],
          index: ["Nにこたえて", "Nに応えて", "Nにこたえた", "ごNにおこたえして"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{監督|かんとく}の{期待|きたい}（　）、{彼|かれ}は{決勝|けっしょう}ゴールを{決|き}めた。", options: ["にこたえて", "に応じて"], answer: 0, en: "Living up to the coach's expectations, he scored the winning goal.", why: { en: "期待 (expectation) pairs with にこたえる. に応じて is for adjusting to a variable condition." } },
                { q: "{荷物|にもつ}の{大|おお}きさ（　）、{送料|そうりょう}が{変|か}わります。", options: ["にこたえて", "に応じて"], answer: 1, en: "Shipping charges vary according to the size of the package." },
                { q: "この{店|みせ}では{季節|きせつ}（　）、{店内|てんない}の{飾|かざ}りを{変|か}えている。", options: ["にこたえて", "に応じて"], answer: 1, en: "This shop changes its interior decorations according to the season." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["に先立って", "次第", "一方", "としたら", "上で", "にこたえて"],
        items: [
          { q: "{新|あたら}しい{勤務|きんむ}{制度|せいど}は、{社員|しゃいん}の{意見|いけん}を{十分|じゅうぶん}に{聞|き}いた＿＿{導入|どうにゅう}を{決|き}めたい。", answer: "上で", en: "We want to decide on introducing the new work system after fully hearing employees' opinions." },
          { q: "このアプリは、「もっと{簡単|かんたん}に{使|つか}いたい」という{利用者|りようしゃ}の{声|こえ}＿＿、{画面|がめん}を{新|あたら}しくしました。", answer: "にこたえて", en: "In response to users who said they wanted it to be easier to use, we redesigned the app's screens." },
          { q: "{新店舗|しんてんぽ}の{開店|かいてん}＿＿、{近所|きんじょ}の{方々|かたがた}を{招|まね}いて{説明会|せつめいかい}を{開|ひら}いた。", answer: "に先立って", en: "Ahead of the new store's opening, we invited local residents to an information session." },
          { q: "もし{転職|てんしょく}する＿＿、{今|いま}より{自由|じゆう}な{時間|じかん}が{多|おお}い{会社|かいしゃ}がいい。", answer: "としたら", en: "If I were to change jobs, I'd want a company that gives me more free time than now." },
          { q: "{合格|ごうかく}できるかどうかは、これからの{努力|どりょく}＿＿だ。", answer: "次第", en: "Whether you pass depends on your efforts from now on." },
          { q: "{新|あたら}しいビルが{次々|つぎつぎ}に{建|た}って、{町|まち}の{景色|けしき}は{変|か}わる＿＿だ。", answer: "一方", en: "With new buildings going up one after another, the townscape just keeps changing." },
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
          { q: "{忙|いそが}しい{時期|じき}は{睡眠|すいみん}{時間|じかん}が{短|みじか}くなり（　）なので、{体調|たいちょう}{管理|かんり}に{気|き}をつけている。", options: ["がち", "げ", "ぶり", "だらけ"], answer: 0, en: "During busy periods my sleep tends to get shorter, so I'm careful about my health." },
          { q: "{新|あたら}しい{上司|じょうし}がどんな{人|ひと}か、しばらく{一緒|いっしょ}に（　）ことにはわからない。", options: ["{働|はたら}いてみる", "{働|はたら}いてみない", "{働|はたら}いたら", "{働|はたら}くなら"], answer: 1, en: "I won't know what my new boss is like until I've worked with them for a while." },
          { q: "{新製品|しんせいひん}の{発表|はっぴょう}（　）、{社内|しゃない}で{最終|さいしゅう}{確認|かくにん}の{会議|かいぎ}が{開|ひら}かれた。", options: ["に先立って", "にわたって", "につけ", "において"], answer: 0, en: "Prior to the new product announcement, a final review meeting was held within the company.", why: { en: "The meeting was held internally before the announcement. において would place the meeting at the announcement itself, which conflicts with 社内で." } },
          { q: "{一週間|いっしゅうかん}だけ{好|す}きなことができる（　）、{何|なに}をしたいですか。", options: ["としたら", "にしては", "ばかりに", "くせに"], answer: 0, en: "If you could do whatever you liked for just one week, what would you want to do?" },
          { q: "{祖父|そふ}は{魚|さかな}の{目利|めき}き（　）、{市場|いちば}のプロにも{負|ま}けない。", options: ["に対して", "にかけては", "にそって", "につれて"], answer: 1, en: "When it comes to judging fish, my grandfather can hold his own even against the market professionals." },
          { q: "{本日|ほんじつ}の{研修|けんしゅう}は、お{手元|てもと}のスケジュール（　）{進|すす}めてまいります。", options: ["にこたえて", "に先立って", "にそって", "にとって"], answer: 2, en: "Today's training will proceed according to the schedule you have in front of you." },
          { q: "{引|ひ}っ{越|こ}し{先|さき}は、{通勤|つうきん}{時間|じかん}や{家賃|やちん}を{比較|ひかく}した（　）{決|き}めるつもりだ。", options: ["としたら", "上で", "ばかりか", "わりに"], answer: 1, en: "I plan to decide where to move after comparing commuting times and rents." },
          { q: "ネット{通販|つうはん}の{普及|ふきゅう}で、{町|まち}の{小|ちい}さな{書店|しょてん}は{減|へ}る（　）。", options: ["ことはない", "一方だ", "わけがない", "ものではない"], answer: 1, en: "With the spread of online shopping, small local bookshops just keep decreasing.", why: { en: "The cause (spread of online shopping) leads to a continuing trend → 一方だ. 減るわけがない would contradict the cause." } },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "この{店|みせ}は", after: "と{評判|ひょうばん}だ。", pieces: ["にかけては", "どこにも{負|ま}けない", "パンの", "{種類|しゅるい}の{多|おお}さ"], order: [2, 3, 0, 1], star: 2, en: "This shop has a reputation for being unbeatable when it comes to the variety of its bread." },
          { before: "{新|あたら}しい{企画|きかく}は、", after: "{何|なに}も{始|はじ}められない。", pieces: ["ないことには", "{許可|きょか}が", "{部長|ぶちょう}の", "{下|お}り"], order: [2, 1, 3, 0], star: 2, en: "With the new project, nothing can start until the department head's approval comes through." },
          { before: "{新|あたら}しい{制度|せいど}については、{関係者|かんけいしゃ}{全員|ぜんいん}で", after: "{決|き}めるべきだ。", pieces: ["{方針|ほうしん}を", "{上|うえ}で", "{話|はな}し{合|あ}った", "{十分|じゅうぶん}に"], order: [3, 2, 1, 0], star: 2, en: "As for the new system, the policy should be decided only after everyone involved has discussed it thoroughly." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[4]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage, think about its overall content, and choose the best option for each of blanks [1]–[4]." },
        title: "{座|すわ}りすぎの{時代|じだい}",
        text: [
          "{在宅|ざいたく}{勤務|きんむ}が{広|ひろ}がり、{一日|いちにち}の{歩数|ほすう}が{千歩|せんぽ}に{届|とど}かないという{人|ひと}も{珍|めずら}しくなくなりました。{家|いえ}で{仕事|しごと}をしていると、{通勤|つうきん}も{移動|いどう}もないため、どうしても{一日中|いちにちじゅう}{座|すわ}ったままになり[1]です。「{週末|しゅうまつ}にジムでまとめて{運動|うんどう}すれば{大丈夫|だいじょうぶ}」と{考|かんが}える{人|ひと}もいるでしょう。しかし、{平日|へいじつ}に{体|からだ}をほとんど{動|うご}かしていない[2]、{週|しゅう}に{一度|いちど}の{運動|うんどう}だけで{取|と}り{戻|もど}すのは{難|むずか}しいと{言|い}われています。",
          "{最近|さいきん}は、{運動|うんどう}{不足|ぶそく}を{気|き}にする{人|ひと}たちの{声|こえ}[3]、{机|つくえ}の{前|まえ}で{数分|すうふん}でできる{体操|たいそう}の{動画|どうが}や、{一定|いってい}{時間|じかん}{座|すわ}り{続|つづ}けると{知|し}らせてくれるアプリも{増|ふ}えています。ただ{流行|りゅうこう}に{飛|と}びつくのではなく、{自分|じぶん}の{生活|せいかつ}リズムをよく{考|かんが}えた[4]、{無理|むり}なく{続|つづ}けられる{方法|ほうほう}を{選|えら}びたいものです。",
        ],
        en: [
          "With the spread of remote work, it's no longer unusual for people to take fewer than a thousand steps a day. When you work from home there's no commute and no moving around, so you inevitably tend to stay seated all day. Some people may think, “It's fine if I do all my exercise at the gym on the weekend.” However, it's said that if you barely move your body on weekdays, it's hard to make up for it with just one workout a week.",
          "Recently, in response to people worried about lack of exercise, there are more and more videos of exercises you can do at your desk in a few minutes, and apps that tell you when you've been sitting for a certain length of time. Rather than just jumping on a trend, we should choose a method we can keep up without strain, after carefully considering our own daily rhythm.",
        ],
        blanks: [
          { options: ["がち", "げ", "かけ", "ぶり"], answer: 0, why: { en: "座ったままになりがち — ‘tend to end up sitting all day’, an undesirable tendency." } },
          { options: ["としたら", "ばかりで", "かのように", "だけあって"], answer: 0, why: { en: "としたら sets up the supposition ‘if you barely move on weekdays’, followed by a judgment." } },
          { options: ["にかけては", "にこたえて", "に先立って", "に比べて"], answer: 1 },
          { options: ["次第で", "かと思うと", "上で", "としたら"], answer: 2, why: { en: "考えた上で — choose a method after (and based on) careful consideration." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉1", en: "Q4 Listening, part 1" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}では、まず{話|はなし}を{聞|き}いてください。それから{二|ふた}つの{質問|しつもん}を{聞|き}いて、それぞれ1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the talk. Then listen to the two questions and choose the best answer to each from 1–4." },
        items: [
          {
            question: "{男|おとこ}の{人|ひと}は、{自分|じぶん}の{会社|かいしゃ}の{何|なに}に{自信|じしん}があると{言|い}っていますか。",
            script: [
              { sp: "{女|おんな}", v: "f", ja: "{文房具|ぶんぼうぐ}メーカーの{社員|しゃいん}が、{新|あたら}しいノートについて{話|はな}しています。" },
              { sp: "{男|おとこ}", v: "m", ja: "{私|わたし}どもは{創業|そうぎょう}{以来|いらい}、{紙|かみ}の{書|か}き{心地|ごこち}にかけては、どこにも{負|ま}けないと{自負|じふ}してまいりました。しかし、スマートフォンが{普及|ふきゅう}して、{手|て}で{字|じ}を{書|か}く{機会|きかい}は{減|へ}る{一方|いっぽう}です。" },
              { sp: "{男|おとこ}", v: "m", ja: "ノートを{使|つか}わない{方|かた}が{増|ふ}えているとしたら、ただ「{紙|かみ}がいい」というだけでは{選|えら}んでいただけません。そこで、{新商品|しんしょうひん}の{開発|かいはつ}に{先立|さきだ}って、{学生|がくせい}や{会社員|かいしゃいん}の{方|かた}、{三百人|さんびゃくにん}にアンケートを{行|おこな}いました。" },
              { sp: "{男|おとこ}", v: "m", ja: "その{結果|けっか}、{一番|いちばん}{多|おお}かったのは「{書|か}いたものをスマホにも{残|のこ}しておきたい」という{声|こえ}でした。この{声|こえ}にこたえて{作|つく}ったのが、{専用|せんよう}アプリで{撮影|さつえい}すると、ページが{自動|じどう}で{整理|せいり}されるノートです。{紙|かみ}の{書|か}きやすさはそのままに、デジタルの{便利|べんり}さも{取|と}り{入|い}れました。" },
            ],
            en: [
              "An employee of a stationery maker is talking about a new notebook.",
              "Since our founding, we have prided ourselves on being second to none when it comes to how nicely our paper writes. However, with the spread of smartphones, opportunities to write by hand just keep decreasing.",
              "If more and more people aren't using notebooks, simply saying “our paper is good” won't make them choose us. So, before developing the new product, we surveyed three hundred students and office workers.",
              "The most common response was, “I'd like to keep what I write on my smartphone too.” What we made in response is a notebook whose pages are automatically organised when you photograph them with a dedicated app. We kept the ease of writing on paper and added the convenience of digital.",
            ],
            options: ["{紙|かみ}の{書|か}き{心地|ごこち}", "アプリの{技術|ぎじゅつ}", "アンケートの{方法|ほうほう}", "{商品|しょうひん}の{安|やす}さ"],
            answer: 0,
          },
          {
            question: "この{会社|かいしゃ}が{新|あたら}しいノートを{作|つく}ったのは、なぜですか。",
            options: [
              "{紙|かみ}の{値段|ねだん}が{上|あ}がっているため",
              "{手|て}で{字|じ}を{書|か}く{人|ひと}が{増|ふ}えているため",
              "{書|か}いたものをスマホにも{残|のこ}したい{人|ひと}が{多|おお}かったため",
              "アプリを{使|つか}う{学生|がくせい}が{減|へ}っているため",
            ],
            answer: 2,
            why: { en: "The survey's most common answer was wanting to keep handwritten notes on a smartphone; the notebook was made にこたえて (in response to) that." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉2", en: "Q4 Listening, part 2 (summary)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。この{問題|もんだい}は、{全体|ぜんたい}としてどんな{内容|ないよう}かを{聞|き}く{問題|もんだい}です。{話|はなし}の{前|まえ}に{質問|しつもん}はありません。まず{話|はなし}を{聞|き}いてください。それから、{質問|しつもん}と{選択肢|せんたくし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. It asks about the overall content. There is no question before the talk. Listen to the talk, then the question and the options, and choose the best answer from 1–4." },
        items: [
          {
            script: [
              { sp: "{女|おんな}", v: "f", ja: "{会社|かいしゃ}の{会議|かいぎ}で、{男|おとこ}の{人|ひと}が{話|はな}しています。" },
              { sp: "{男|おとこ}", v: "m", ja: "{来月|らいげつ}{発売|はつばい}{予定|よてい}の{保温|ほおん}ボトルですが、{試作品|しさくひん}を{社員|しゃいん}に{使|つか}ってもらったところ、「ふたが{開|あ}けにくい」という{意見|いけん}がかなり{出|で}ました。{色|いろ}や{形|かたち}はとても{好評|こうひょう}でした。" },
              { sp: "{男|おとこ}", v: "m", ja: "ただ、{毎日|まいにち}{使|つか}うものですから、{少|すこ}しでも{使|つか}いにくいと、{売|う}れ{行|ゆ}きに{影響|えいきょう}しがちです。ふたの{形|かたち}を{改善|かいぜん}しないことには、{自信|じしん}を{持|も}ってお{客様|きゃくさま}に{勧|すす}められません。{発売|はつばい}が{少|すこ}し{遅|おく}れることになっても、まずはふたの{改良|かいりょう}を{優先|ゆうせん}するべきではないでしょうか。" },
              { sp: "{質問|しつもん}", v: "f", ja: "{男|おとこ}の{人|ひと}が{一番|いちばん}{言|い}いたいことは{何|なん}ですか。" },
            ],
            en: [
              "A man is speaking at a company meeting.",
              "About the insulated bottle due to go on sale next month: when we had employees try the prototype, quite a few said the lid was hard to open. The colour and shape were very well received.",
              "But since it's something people use every day, even slight inconvenience tends to affect sales. Unless we improve the shape of the lid, we can't recommend it to customers with confidence. Even if it means the launch is delayed a little, shouldn't we give priority to improving the lid?",
              "What does the man most want to say?",
            ],
            options: [
              "{色|いろ}と{形|かたち}を{変|か}えるべきだ",
              "ふたを{改良|かいりょう}してから{発売|はつばい}するべきだ",
              "{予定|よてい}{通|どお}りに{発売|はつばい}するべきだ",
              "もう{一度|いちど}{社員|しゃいん}に{試|ため}してもらうべきだ",
            ],
            answer: 1,
            why: { en: "His conclusion: even with a delay, improving the lid should come first. The colour and shape were praised, so option 1 is wrong." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉3", en: "Q4 Listening, part 3 (quick response)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. Listen to the sentence, then to the replies, and choose the best reply from 1–3." },
        items: [
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{部長|ぶちょう}、{例|れい}の{件|けん}ですが、{先方|せんぽう}とよく{相談|そうだん}した{上|うえ}で、{改|あらた}めてご{報告|ほうこく}いたします。" }],
            en: ["About that matter, sir — I'll report back to you after discussing it thoroughly with the other party."],
            options: [
              "わかりました。{結果|けっか}が{出|で}たら{知|し}らせてください。",
              "え、もう{報告|ほうこく}してしまったんですか。",
              "{相談|そうだん}しないことには、{報告|ほうこく}してもらえませんね。",
            ],
            answer: 0,
            why: { en: "相談した上で報告する = she'll consult first, then report. The natural reply is to ask her to let him know the result." },
          },
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{駅前|えきまえ}に{大|おお}きなスーパーができるとか。" }],
            en: ["I hear a big supermarket is opening in front of the station."],
            options: [
              "へえ、いつオープンするんですか。",
              "ええ、{野菜|やさい}とか{肉|にく}とかですね。",
              "じゃあ、{作|つく}ってみましょうか。",
            ],
            answer: 0,
            why: { en: "とか here passes on something heard. Option 2 treats it as the listing とか." },
          },
        ],
      },
    },
  ],
});
