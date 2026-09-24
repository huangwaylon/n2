N2.register({
  id: 4,
  genre: { ja: "ニュースを{聞|き}く", en: "Listening to the News" },
  title: { ja: "{台風|たいふう}{情報|じょうほう}", en: "Typhoon Information" },
  canDo: [
    { ja: "{天気|てんき}{予報|よほう}、{台風|たいふう}{情報|じょうほう}などのニュースを{聞|き}いて{理解|りかい}できる。", en: "Listen to and understand news such as weather forecasts and typhoon information." },
  ],
  parts: [
    {
      label: "",
      sample: {
        kind: "news",
        heading: "{台風|たいふう}12{号|ごう}の{最新|さいしん}{情報|じょうほう}",
        lines: [
          { ja: "こんばんは。まず、{台風|たいふう}に{関|かん}するニュースです。", en: "Good evening. First, news about the typhoon." },
          { ja: "{大型|おおがた}で{強|つよ}い{台風|たいふう}12{号|ごう}は、{今夜|こんや}9{時|じ}{現在|げんざい}、{沖縄|おきなわ}の{南|みなみ}の{海上|かいじょう}を、1{時間|じかん}におよそ20キロの{速|はや}さで{北西|ほくせい}に{進|すす}んでいます。", en: "Large and powerful Typhoon No. 12 is, as of 9 p.m. tonight, over the sea south of Okinawa, moving northwest at about 20 km per hour." },
          { ja: "{台風|たいふう}はこのあと{勢力|せいりょく}を{保|たも}ち**つつ**{北上|ほくじょう}し、あさっての{朝|あさ}には{九州|きゅうしゅう}に{近|ちか}づく{見込|みこ}みです。", en: "The typhoon is expected to move north while maintaining its strength, approaching Kyushu on the morning of the day after tomorrow." },
          { ja: "{沖縄|おきなわ}{本島|ほんとう}では{昨夜|さくや}から、ほぼ{全域|ぜんいき}**にわたって**{激|はげ}しい{雨|あめ}が{降|ふ}り{続|つづ}いています。", en: "On the main island of Okinawa, heavy rain has been falling over almost the entire area since last night." },
          { ja: "また、{奄美|あまみ}{地方|ちほう}**から**{九州|きゅうしゅう}{南部|なんぶ}**にかけて**の{海上|かいじょう}では、{波|なみ}がだんだん{高|たか}くなっています。", en: "Also, on the sea from the Amami region to southern Kyushu, the waves are gradually getting higher." },
          { ja: "{台風|たいふう}の{北上|ほくじょう}**にともない**、{鹿児島|かごしま}{県|けん}を{中心|ちゅうしん}に{大雨|おおあめ}{警報|けいほう}が{出|だ}されています。", en: "As the typhoon moves north, heavy-rain warnings have been issued, centred on Kagoshima Prefecture." },
          { ja: "{明日|あした}の{夜|よる}までに、{所|ところ}によって1{時間|じかん}に80ミリの{非常|ひじょう}に{激|はげ}しい{雨|あめ}が{降|ふ}る**おそれがあります**。", en: "By tomorrow night, extremely heavy rain of 80 mm per hour may fall in some places." },
          { ja: "{沿岸部|えんがんぶ}では、{高波|たかなみ}**とともに**、{高潮|たかしお}による{浸水|しんすい}にも{警戒|けいかい}してください。", en: "In coastal areas, please be on guard against flooding from storm surges as well as high waves." },
          { ja: "なお、{那覇|なは}{市内|しない}の{映像|えいぞう}が{届|とど}き**次第**、{改|あらた}めてお{伝|つた}えします。", en: "In addition, as soon as footage from inside Naha City reaches us, we will bring it to you." },
        ],
      },
      points: [
        {
          no: 30,
          pattern: "〜つつ",
          phrase: "{勢力|せいりょく}を{保|たも}ち**つつ**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜つつ」は「〜ながら」と{同|おな}じ{意味|いみ}で、{一|ひと}つの{動作|どうさ}をしながら、{同時|どうじ}にもう{一|ひと}つの{動作|どうさ}をすることを{表|あらわ}す。{書|か}き{言葉|ことば}や{改|あらた}まった{話|はな}し{言葉|ことば}で{使|つか}う。",
            en: "〜つつ has the same meaning as 〜ながら: doing one action while at the same time doing another. It is used in writing and formal speech.",
          },
          forms: ["[V-~~ます~~] + つつ"],
          examples: [
            { ja: "{地図|ちず}を{確認|かくにん}し**つつ**、{山道|やまみち}を{慎重|しんちょう}に{進|すす}んだ。", en: "We made our way carefully along the mountain path, checking the map as we went." },
            { ja: "{社員|しゃいん}の{意見|いけん}を{聞|き}き**つつ**、{新|あたら}しい{制度|せいど}を{作|つく}っていく{予定|よてい}です。", en: "We plan to build the new system while listening to employees' opinions." },
            { ja: "{窓|まど}の{外|そと}の{雪景色|ゆきげしき}を{眺|なが}め**つつ**、{熱|あつ}いお{茶|ちゃ}を{味|あじ}わった。", en: "I savoured a cup of hot tea while gazing at the snowy scenery outside the window." },
            { ja: "{選手|せんしゅ}たちは{互|たが}いに{声|こえ}を{掛|か}け{合|あ}い**つつ**、{最後|さいご}まで{守|まも}り{抜|ぬ}いた。", en: "Calling out to each other, the players held on to their defence until the very end." },
            { ja: "{台風|たいふう}は{勢力|せいりょく}を{弱|よわ}め**つつ**、{日本海|にほんかい}を{北東|ほくとう}へ{進|すす}んでいます。", en: "The typhoon is moving northeast over the Sea of Japan while weakening." },
          ],
          deepDive:
            "**〜つつ** is the literary twin of **〜ながら**: both link two actions performed at the same time by the same person (or thing). 音楽を聞きながら勉強する ≈ 音楽を聞きつつ勉強する. The difference is register — つつ sounds written, formal or slightly literary, so you meet it in news reports (台風は勢力を保ちつつ北上), speeches, business documents and essays. In a chat with friends, ながら is the natural choice.\n\n" +
            "Connection: the ます-stem, exactly like ながら — 見つつ, 考えつつ, 確認しつつ. There is no noun or adjective form.\n\n" +
            "Points to watch:\n" +
            "- **Same subject.** Both actions belong to one subject. ✗母が料理を作りつつ、私はテレビを見た — two different people → use 間（に） or 一方で instead.\n" +
            "- **The main action is the second one.** 地図を確認しつつ進んだ: the point is *moving forward*; checking the map is the accompanying action.\n" +
            "- Like ながら, つつ can also be used for a gradual process in news style: 勢力を弱めつつ進む *moving while weakening*.\n\n" +
            "Don't confuse it with its two relatives from the similar-pattern list:\n" +
            "- **〜つつも** (#112): concession, *although / while (knowing)…* — 体に悪いと知りつつも、やめられない. This corresponds to the concessive ながら(も).\n" +
            "- **〜つつある** (#71): *is in the process of ~* — a change that is steadily progressing: 景気は回復しつつある.\n\n" +
            "JLPT tip: when つつ appears in 問題1, the options often include ます-stem forms of the same verb with other patterns (〜次第, 〜かねない). Ask yourself: are two simultaneous actions described? If so, pick つつ.",
          see: [71, 112],
          index: ["Vつつ", "V-ますつつ"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{参考書|さんこうしょ}を{読|よ}み**つつ**、",
                "{故郷|こきょう}の{家族|かぞく}を{思|おも}い**つつ**、",
                "{雨|あめ}に{濡|ぬ}れ**つつ**、",
                "{親|おや}の{介護|かいご}をし**つつ**、",
              ],
              right: [
                "{自宅|じたく}で{仕事|しごと}を{続|つづ}けている。",
                "{傘|かさ}も{差|さ}さずに{駅|えき}まで{歩|ある}いた。",
                "{遠|とお}い{町|まち}で{一人|ひとり}{働|はたら}いている。",
                "{自分|じぶん}で{問題|もんだい}を{解|と}いてみた。",
              ],
              answer: [3, 2, 1, 0],
              en: [
                "I tried solving the problems myself while reading the study guide.",
                "Thinking of my family back home, I work alone in a distant town.",
                "Getting wet in the rain, I walked to the station without even putting up an umbrella.",
                "While caring for my parents, I continue working from home.",
              ],
            },
          ],
        },
        {
          no: 31,
          pattern: "〜にわたって",
          phrase: "{全域|ぜんいき}**にわたって**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「{3日間|みっかかん}にわたって{会議|かいぎ}が{続|つづ}いた」「{線路|せんろ}が5キロにわたって{水|みず}につかった」のように、ある{時間|じかん}や{場所|ばしょ}の{範囲|はんい}{全体|ぜんたい}で、と{言|い}いたいときに{使|つか}う。",
            en: "Used to say that something extends over the whole of a (long) period of time or (wide) area, as in 3日間にわたって会議が続いた “the meeting went on for three whole days” or 線路が5キロにわたって水につかった “the tracks were under water for five kilometres”.",
          },
          forms: ["[N] + にわたって", "[N] + にわたり", "[N] + にわたる + [N]", "[N] + にわたった + [N]"],
          examples: [
            { ja: "{大雪|おおゆき}のため、{山沿|やまぞ}いの{県道|けんどう}が15キロ**にわたって**{通行止|つうこうど}めになった。", en: "Because of heavy snow, the prefectural road along the mountains was closed for 15 kilometres." },
            { ja: "{国際|こくさい}{会議|かいぎ}は{4日間|よっかかん}**にわたり**、{横浜|よこはま}で{開|ひら}かれた。", en: "The international conference was held in Yokohama over four days." },
            { ja: "{半世紀|はんせいき}**にわたる**{研究|けんきゅう}の{成果|せいか}が、ついに{一冊|いっさつ}の{本|ほん}にまとめられた。", en: "The results of half a century of research were finally compiled into a single book." },
            { ja: "10{年|ねん}**にわたった**{駅|えき}の{改修|かいしゅう}{工事|こうじ}が、ようやく{終|お}わった。", en: "The station renovation work, which went on for ten years, has finally been completed." },
            { ja: "{社長|しゃちょう}は{経営|けいえい}から{人事|じんじ}まで、{多|た}{方面|ほうめん}**にわたって**{改革|かいかく}を{進|すす}めている。", en: "The president is pushing reforms across many areas, from management to personnel." },
          ],
          deepDive:
            "**〜にわたって** comes from the verb 渡る *to cross over, to extend across*. The image is of something stretching from one end of a span to the other and covering all of it: 3日間にわたって = *for the full three days*; 30キロにわたって = *along a full 30 km*.\n\n" +
            "What goes before it: nouns expressing a **duration, distance, area or range** — 数時間, 長年, 10年間, 全域, 広範囲, 全国, 多方面, 各分野, 3回. It emphasises that the extent is large, so it sounds odd with something tiny: ✗1分にわたって, ✗1メートルにわたって.\n\n" +
            "The forms:\n" +
            "- **にわたって** — the standard adverbial form.\n" +
            "- **にわたり** — the written, clause-linking form (news, reports): 5日間にわたり開催された.\n" +
            "- **にわたる + N** — modifies a noun: 長年にわたる努力.\n" +
            "- **にわたった + N** — modifies a noun and stresses that the span is over: 3年にわたった工事が終わった.\n\n" +
            "Contrast with **AからBにかけて** (#32): にかけて marks a rough range between two points and says something happened *somewhere/sometime in that range*; にわたって says it covered *the whole span*. 午後から夜にかけて雨 = rain at some point in that period; 5時間にわたって雨 = it rained for five hours straight. Note also that にわたって usually takes a single noun of extent (10年間), not an A-to-B pair — although 〜から〜にわたって does occur.\n\n" +
            "Common mistake: choosing にわたる before a verb or にわたって before a noun. In 問題1 and in the やってみよう below, look at what comes right after the blank: a noun → にわたる/にわたった; a verb or clause → にわたって/にわたり.",
          see: [32],
          index: ["Nにわたって", "Nにわたり", "Nにわたる", "Nにわたった"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{市|し}の{料理|りょうり}{講座|こうざ}は、{全|ぜん}8{回|かい}（　）{公民館|こうみんかん}で{開|ひら}かれる。", options: ["にわたり", "にわたる"], answer: 0, en: "The city's cooking course will be held at the community centre over eight sessions.", why: { en: "A verb phrase (公民館で開かれる) follows, so the adverbial にわたり is needed." } },
                { q: "3{年|ねん}（　）{橋|はし}の{工事|こうじ}が、{先月|せんげつ}ようやく{終|お}わった。", options: ["にわたって", "にわたった"], answer: 1, en: "The bridge construction, which lasted three years, finally ended last month.", why: { en: "The blank modifies the noun 工事, so the noun-modifying にわたった is needed." } },
                { q: "{停電|ていでん}のため、{約|やく}5{時間|じかん}（　）{町|まち}の{信号|しんごう}が{消|き}えていた。", options: ["にわたり", "にわたる"], answer: 0, en: "Because of the power cut, the town's traffic lights were out for about five hours." },
                { q: "{祖父|そふ}は40{年|ねん}（　）{教師|きょうし}{生活|せいかつ}を{終|お}えて、{退職|たいしょく}した。", options: ["にわたり", "にわたる"], answer: 1, en: "My grandfather retired, bringing to an end a teaching career of forty years." },
              ],
            },
          ],
        },
        {
          no: 32,
          pattern: "AからBにかけて",
          phrase: "{奄美|あまみ}{地方|ちほう}**から**{九州|きゅうしゅう}{南部|なんぶ}**にかけて**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「{夕方|ゆうがた}から{夜|よる}にかけて{風|かぜ}が{強|つよ}まる」「{駅|えき}から{公園|こうえん}にかけて{桜並木|さくらなみき}が{続|つづ}く」のように、AからBまでの{間|あいだ}という{意味|いみ}で、{時間|じかん}や{場所|ばしょ}のだいたいの{範囲|はんい}を{言|い}うときに{使|つか}う。",
            en: "Used to give the approximate range of a time or place — “between A and B / from A through B” — as in 夕方から夜にかけて風が強まる “the wind will pick up from the evening into the night” or 駅から公園にかけて桜並木が続く “a row of cherry trees runs from the station to the park”.",
          },
          forms: ["[N₁] + から + [N₂] + にかけて"],
          examples: [
            { ja: "{今夜|こんや}**から**{明日|あした}の{朝|あさ}**にかけて**、{関東|かんとう}{地方|ちほう}では{雪|ゆき}が{降|ふ}るでしょう。", en: "Snow is expected in the Kanto region from tonight through tomorrow morning." },
            { ja: "この{花|はな}は{北海道|ほっかいどう}**から**{東北|とうほく}**にかけて**{多|おお}く{見|み}られる。", en: "This flower is commonly seen from Hokkaido through the Tohoku region." },
            { ja: "{連休|れんきゅう}の{初日|しょにち}は、{朝|あさ}**から**{昼|ひる}**にかけて**{下|くだ}りの{道路|どうろ}が{混|こ}み{合|あ}う{見込|みこ}みです。", en: "On the first day of the holiday, outbound roads are expected to be congested from morning to midday." },
            { ja: "{転|ころ}んで、{膝|ひざ}**から**{足首|あしくび}**にかけて**すりむいてしまった。", en: "I fell over and scraped my leg from the knee down to the ankle." },
          ],
          deepDive:
            "**AからBにかけて** marks a **rough span** between two points in time or space. The boundaries are fuzzy: 九州から四国にかけて雨 means rain *in the area between Kyushu and Shikoku, more or less* — not necessarily everywhere, and not necessarily stopping exactly at the edges. This vagueness is exactly why weather reports love it: 夜から明け方にかけて, 東北から北陸にかけて.\n\n" +
            "Compare:\n" +
            "- **AからBまで**: precise start and end points. 9時から5時まで営業 (opening hours — you'd never say 9時から5時にかけて営業).\n" +
            "- **〜にわたって** (#31): covers the *entire* span, emphasising its length or size. 1週間にわたって雨 = it rained for a whole week.\n" +
            "- **AからBにかけて**: something happens *somewhere/sometime within* the span. 月曜から水曜にかけて雨 = rainy spells during Mon–Wed.\n\n" +
            "Grammar notes: both A and B are nouns (time words, place names, body parts). The phrase can modify a noun with の: 夕方から夜にかけての雨. It is common in news and forecasts but is also perfectly normal in everyday speech (肩から背中にかけて痛い), so it is not limited to formal registers even though the book marks the scene as formal.\n\n" +
            "Don't confuse it with **Nにかけては** (#109), *when it comes to N (nobody beats ~)*: 料理の腕にかけては彼女が一番. That use has no から and is about skill.\n\n" +
            "JLPT tip: if から appears earlier in the sentence and the blank follows a second time/place noun, にかけて is almost always the answer; にわたって rarely pairs with から on the test.",
          see: [31, 109],
          index: ["NからNにかけて", "〜にかけての"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{毎年|まいとし}6{月|がつ}から7{月|がつ}にかけて、",
                "{昨夜|さくや}から{今朝|けさ}にかけて、",
                "{肩|かた}から{背中|せなか}にかけて、",
                "この{地方|ちほう}では{山|やま}のふもとから{中腹|ちゅうふく}にかけて、",
              ],
              right: [
                "{重|おも}い{痛|いた}みを{感|かん}じる。",
                "{茶畑|ちゃばたけ}が{広|ひろ}がっている。",
                "{梅雨|つゆ}で{雨|あめ}の{日|ひ}が{続|つづ}く。",
                "{市内|しない}で{火事|かじ}が3{件|けん}{相次|あいつ}いだ。",
              ],
              answer: [2, 3, 0, 1],
              en: [
                "Every year from June into July, rainy days continue because of the rainy season.",
                "Between last night and this morning, there were three fires in a row in the city.",
                "I feel a dull pain from my shoulders down to my back.",
                "In this region, tea fields spread from the foot of the mountains to halfway up.",
              ],
            },
          ],
        },
        {
          no: 33,
          pattern: "〜にともない",
          phrase: "{台風|たいふう}の{北上|ほくじょう}**にともない**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{新|しん}{校舎|こうしゃ}の{建設|けんせつ}にともなう{移転|いてん}」のように、{中心|ちゅうしん}になること（{新|しん}{校舎|こうしゃ}の{建設|けんせつ}）が{起|お}きると、それといっしょにほかのこと（{移転|いてん}）も{起|お}きる、と{言|い}うときに{使|つか}う。{変化|へんか}を{表|あらわ}すときにも{使|つか}う。",
            en: "Used when a main event (e.g. building a new school building) brings about something else at the same time (e.g. a relocation), as in 新校舎の建設にともなう移転. It is also used to describe a change that follows another change.",
          },
          forms: ["[N] + にともなって", "[N] + にともない", "[N] + にともなう + [N]"],
          examples: [
            { ja: "{人口|じんこう}の{減少|げんしょう}**にともなって**、{地方|ちほう}の{鉄道|てつどう}の{利用者|りようしゃ}も{減|へ}っている。", en: "As the population declines, the number of people using local railways is falling too." },
            { ja: "{新|しん}{駅|えき}の{開業|かいぎょう}**にともない**、{周辺|しゅうへん}の{道路|どうろ}が{整備|せいび}された。", en: "With the opening of the new station, the surrounding roads were improved." },
            { ja: "{経済|けいざい}の{発展|はってん}**にともなう**{環境|かんきょう}{問題|もんだい}について{話|はな}し{合|あ}った。", en: "We discussed the environmental problems that come with economic development." },
            { ja: "{店舗|てんぽ}の{改装|かいそう}**にともない**、{営業|えいぎょう}{時間|じかん}を{変更|へんこう}いたします。", en: "Due to the store renovation, we will be changing our business hours." },
            { ja: "{部長|ぶちょう}の{退職|たいしょく}が{決|き}まり、それ**にともなって**{組織|そしき}も{見直|みなお}されることになった。", en: "The department head's retirement has been decided, and along with it the organisation will be reviewed." },
          ],
          deepDive:
            "**〜にともない / にともなって** comes from 伴う *to accompany, to go along with*. X にともなって Y = *Y happens as a consequence of / along with X*. X is the main event or change; Y is the side effect that comes with it.\n\n" +
            "Two typical uses:\n" +
            "- **An event and its consequence**: 工事にともなう通行止め, 移転にともない電話番号が変わります. Very common in official notices and news.\n" +
            "- **Change linked to change**: 気温の上昇にともなって電気の使用量が増える. Here it is close to **〜につれて** (#65), but につれて is more everyday and focuses on gradual proportional change, while にともなって is formal and can also mark a one-off event.\n\n" +
            "Forms: にともなって (standard), にともない (written, news — as in 台風の接近にともない), にともなう + N (noun modifier). A common news formula is **それにともない、…** *and accordingly…*. Verbs can also be used with の: 気温が上がるのにともなって, though N + にともない is by far the most frequent.\n\n" +
            "Compare with **〜とともに** (#35): both can express linked change (時代の変化とともに / にともなって). But only とともに can mean *together with a person*: ✓家族とともに暮らす, ✗家族にともなって暮らす. にともなって always implies cause–effect between events.\n\n" +
            "Also don't mix it up with **〜に応じて** (#4, adjusting deliberately to a condition) — 収入に応じて税金が決まる is a rule of matching, not a side effect.\n\n" +
            "JLPT tip: as with #31, check what follows the blank — a noun (手続き, 変更, 問題) requires にともなう.",
          see: [35, 65, 4],
          index: ["Nにともなって", "Nにともない", "Nにともなう", "それにともない", "伴って"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{技術|ぎじゅつ}の{進歩|しんぽ}（　）、{人々|ひとびと}の{働|はたら}き{方|かた}も{変|か}わってきた。", options: ["にともなって", "にともなう"], answer: 0, en: "Along with advances in technology, the way people work has changed too." },
                { q: "{引|ひ}っ{越|こ}し（　）{手続|てつづ}きは、{思|おも}ったより{多|おお}くて{大変|たいへん}だった。", options: ["にともなって", "にともなう"], answer: 1, en: "The paperwork that came with moving house was more than I expected and a real hassle.", why: { en: "The blank modifies the noun 手続き, so にともなう is needed." } },
                { q: "{円高|えんだか}（　）、{海外|かいがい}{旅行|りょこう}に{出|で}かける{人|ひと}が{増|ふ}えた。", options: ["にともない", "にともなう"], answer: 0, en: "With the strong yen, more people are travelling abroad." },
                { q: "{地震|じしん}（　）{火災|かさい}に{備|そな}えて、{消火器|しょうかき}を{用意|ようい}しておこう。", options: ["にともなって", "にともなう"], answer: 1, en: "Let's keep a fire extinguisher ready in case of fires caused by an earthquake." },
              ],
            },
          ],
        },
        {
          no: 34,
          pattern: "〜おそれがある",
          phrase: "{雨|あめ}が{降|ふ}る**おそれがあります**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "{客観的|きゃっかんてき}なデータなどに{基|もと}づいて、{危険|きけん}な{状態|じょうたい}やよくないことになる{可能性|かのうせい}が{高|たか}いと{伝|つた}えるときに{使|つか}う。ニュース・{新聞|しんぶん}・{報告書|ほうこくしょ}などでよく{使|つか}われる。",
            en: "Used to report that, based on objective data or similar evidence, there is a high possibility of something dangerous or undesirable happening. Common in TV news, newspapers and reports.",
          },
          forms: ["[V-る] + おそれがある", "[V-ない] + おそれがある", "[N] の + おそれがある"],
          examples: [
            { ja: "{明日|あした}は{大雪|おおゆき}のため、{列車|れっしゃ}が{大幅|おおはば}に{遅|おく}れる**おそれがあります**。", en: "Because of heavy snow tomorrow, trains may be seriously delayed." },
            { ja: "この{建物|たてもの}は{古|ふる}く、{大|おお}きな{地震|じしん}で{倒|たお}れる**おそれがある**。", en: "This building is old and could collapse in a big earthquake." },
            { ja: "{土砂|どしゃ}{崩|くず}れ**のおそれがある**ため、{山沿|やまぞ}いの{道|みち}は{通行止|つうこうど}めになっています。", en: "Because of the risk of landslides, the mountain road is closed." },
            { ja: "このままのペースでは、{工事|こうじ}が{期限|きげん}までに{終|お}わらない**おそれがある**。", en: "At this rate, there is a risk that the construction won't be finished by the deadline." },
            { ja: "{専門家|せんもんか}によると、{今回|こんかい}の{大雨|おおあめ}でダムが{決壊|けっかい}する**おそれはない**ということだ。", en: "According to experts, there is no risk of the dam bursting in this heavy rain." },
          ],
          deepDive:
            "**おそれ** (恐れ) literally means *fear, dread*. 〜おそれがある = *there is fear that ~* → *there is a risk / danger that ~*. Because of this origin it is used **only for bad outcomes**: 事故が起きるおそれ, 被害が広がるおそれ. You cannot say ✗合格するおそれがある or ✗晴れるおそれがある — for neutral or good possibilities use 〜可能性がある or 〜かもしれない.\n\n" +
            "Register: it is the language of forecasts, warnings, official reports and product labels (…を引き起こすおそれがあります). It sounds objective, as if based on data, rather than a personal worry. In conversation people say 〜かもしれない or 〜んじゃないか.\n\n" +
            "Connection:\n" +
            "- **V-る**: 川が氾濫するおそれ.\n" +
            "- **V-ない**: 間に合わないおそれ, 電話がつながらないおそれ — the negative form is common when the *failure* of something is the danger.\n" +
            "- **N + の**: 噴火のおそれ, 津波のおそれ, 感染のおそれ.\n\n" +
            "Variations: **おそれがあります** (polite), **おそれがございます** (very polite, e.g. airline or station announcements), **おそれはない / おそれはありません** (*there is no risk*), and as a noun modifier: 倒壊のおそれがある建物.\n\n" +
            "Compare with **〜かねない** (#27): also *could (lead to something bad)*, but it expresses the speaker's own judgment that a bad result is possible, often as a warning about someone's behaviour (そんな運転では事故を起こしかねない). おそれがある is more impersonal and report-like.\n\n" +
            "Typical trap in やってみよう-type questions: deciding between the affirmative and negative verb. Read for what the *danger* is — if the danger is the machine breaking, use 故障する; if the danger is not being in time, use 間に合わない.",
          see: [27, 33],
          index: ["Vおそれがある", "Nのおそれがある", "おそれがあります", "おそれはない", "恐れがある"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{冷蔵庫|れいぞうこ}に{入|い}れておかないと、{食品|しょくひん}が（　）おそれがある。", options: ["{傷|いた}む", "{傷|いた}まない"], answer: 0, en: "If you don't keep it in the refrigerator, the food may go bad." },
                { q: "{今年|ことし}のように{雨|あめ}が{少|すく}ないと、{夏|なつ}に{水|みず}が（　）おそれがある。", options: ["{足|た}りる", "{足|た}りない"], answer: 1, en: "With as little rain as this year, there is a risk of a water shortage in summer." },
                { q: "{説明書|せつめいしょ}を{読|よ}まずに{使|つか}うと、{機械|きかい}が（　）おそれがあります。", options: ["{故障|こしょう}する", "{故障|こしょう}しない"], answer: 0, en: "If you use it without reading the manual, the machine may break down." },
                { q: "{道路|どうろ}が{大変|たいへん}{混|こ}んでおりますので、{開演|かいえん}{時間|じかん}に（　）おそれがございます。", options: ["{間|ま}に{合|あ}う", "{間|ま}に{合|あ}わない"], answer: 1, en: "As the roads are very congested, you may not make it in time for the start of the performance.", why: { en: "おそれ is only for undesirable outcomes; the bad outcome here is not arriving in time." } },
              ],
            },
          ],
        },
        {
          no: 35,
          pattern: "〜とともに",
          phrase: "{高波|たかなみ}**とともに**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「〜とともに…」は、「〜といっしょに」「〜だけでなく…も」と{言|い}うときに{使|つか}う。また、「〜といっしょに…が{起|お}きる・{生|しょう}じる」と{言|い}うときや、{変化|へんか}を{表|あらわ}すときにも{使|つか}う。",
            en: "〜とともに… is used to say “together with ~” or “not only ~ but also …”. It is also used to say that “… happens together with ~”, or to express a change that goes hand in hand with another.",
          },
          forms: ["[V-る] + とともに", "[N] + とともに"],
          examples: [
            { ja: "{卒業式|そつぎょうしき}では、{先生|せんせい}や{友人|ゆうじん}**とともに**{校歌|こうか}を{歌|うた}った。", en: "At the graduation ceremony, I sang the school song together with my teachers and friends." },
            { ja: "{彼女|かのじょ}は{歌手|かしゅ}である**とともに**、{小説家|しょうせつか}としても{活躍|かつやく}している。", en: "She is a singer and, at the same time, active as a novelist." },
            { ja: "{地震|じしん}の{揺|ゆ}れ**とともに**、{棚|たな}の{本|ほん}が{一斉|いっせい}に{落|お}ちてきた。", en: "As the earthquake shook, the books on the shelves all fell down at once." },
            { ja: "{年|とし}をとる**とともに**、{朝|あさ}{早|はや}く{目|め}が{覚|さ}めるようになった。", en: "As I've got older, I've started waking up early in the morning." },
            { ja: "{社会|しゃかい}の{変化|へんか}**とともに**、{家族|かぞく}の{形|かたち}も{多様|たよう}になってきた。", en: "Along with changes in society, family structures have become more diverse." },
          ],
          deepDive:
            "**〜とともに** (と共に, *together with*) is the formal version of 〜といっしょに, but it covers more ground. There are four related uses, all of which appear on the N2:\n\n" +
            "- **Together with (a person/group)**: 仲間とともに戦う, 地域の皆様とともに歩む. Formal いっしょに — speeches, company slogans, news.\n" +
            "- **A and also B (addition)**: 〜であるとともに / V-るとともに … も. 奈良は観光地であるとともに学生の町でもある. Here it means *not only ~ but also*; the second half often contains も.\n" +
            "- **At the same moment**: N + とともに + an event. 雷鳴とともに雨が降り出した *with a clap of thunder, the rain began*. The sample text uses this idea: 高波とともに高潮による浸水にも警戒 (*high waves and, together with them, flooding*).\n" +
            "- **Linked change**: N / V-る + とともに + change verb (増える, 変わる, 〜ようになる). 年をとるとともに体力が落ちる.\n\n" +
            "Compared with **〜にともなって** (#33): in the change-linked-to-change use they are often interchangeable (技術の進歩とともに / にともなって). But とともに can take a person as its partner, which にともなって cannot, and にともなって strongly implies cause and effect, whereas とともに may express mere simultaneity or addition.\n\n" +
            "Connection pitfalls: nouns attach directly (友人とともに); verbs use the dictionary form (成長するとともに); for a noun predicate in the addition use, you need である: ✓都市であるとともに / ✗都市とともに (that would mean *together with a city*).\n\n" +
            "JLPT tip: in 問題1, if the blank follows a person or organisation (市民の皆様、家族), とともに is almost certainly the answer among options like にともない or にかけて.",
          see: [33],
          index: ["Nとともに", "Vるとともに", "Nであるとともに", "と共に"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{金沢|かなざわ}は{歴史|れきし}のある{観光|かんこう}{都市|とし}であるとともに、",
                "{優勝|ゆうしょう}したチームの{選手|せんしゅ}たちは、{監督|かんとく}とともに",
                "スマートフォンの{普及|ふきゅう}とともに、",
                "{気温|きおん}が{下|さ}がるとともに、",
              ],
              right: [
                "{山|やま}の{紅葉|こうよう}も{色|いろ}が{濃|こ}くなってきた。",
                "{大学|だいがく}の{多|おお}い{学生|がくせい}の{町|まち}でもある。",
                "{市長|しちょう}を{訪問|ほうもん}した。",
                "{紙|かみ}の{地図|ちず}を{使|つか}う{人|ひと}が{減|へ}った。",
              ],
              answer: [1, 2, 3, 0],
              en: [
                "Kanazawa is a historic tourist city and also a student town with many universities.",
                "The players of the winning team visited the mayor together with their coach.",
                "With the spread of smartphones, fewer people use paper maps.",
                "As the temperature drops, the autumn leaves on the mountains are getting deeper in colour.",
              ],
            },
          ],
        },
        {
          no: 36,
          pattern: "〜{次第|しだい}",
          phrase: "{映像|えいぞう}が{届|とど}き**{次第|しだい}**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「（{今|いま}はまだできないが）〜たら、すぐ…する」と{言|い}うときに{使|つか}う。",
            en: "Used to say “(I can't do it yet, but) as soon as ~ happens, I will do … right away.”",
          },
          forms: ["[V-~~ます~~] + {次第|しだい}", "[N] + {次第|しだい}"],
          examples: [
            { ja: "{詳|くわ}しい{結果|けっか}がわかり**{次第|しだい}**、{担当者|たんとうしゃ}からご{連絡|れんらく}いたします。", en: "As soon as the detailed results are known, the person in charge will contact you." },
            { ja: "{雨|あめ}がやみ**{次第|しだい}**、{試合|しあい}を{再開|さいかい}します。", en: "The match will resume as soon as the rain stops." },
            { ja: "{新|しん}{商品|しょうひん}は{入荷|にゅうか}**{次第|しだい}**、ホームページでお{知|し}らせします。", en: "We will announce the new products on our website as soon as they arrive in stock." },
            { ja: "{会場|かいじょう}の{設営|せつえい}が{終|お}わり**{次第|しだい}**、{受付|うけつけ}を{始|はじ}めます。", en: "We will open reception as soon as the venue has been set up." },
            { ja: "{駅|えき}に{着|つ}き**{次第|しだい}**、お{電話|でんわ}しますね。", en: "I'll call you as soon as I get to the station." },
          ],
          deepDive:
            "**〜次第** (V-ます stem / N + 次第) means *as soon as ~, (I/we will) immediately…*. It announces a future action that is waiting for a condition: 情報が入り次第お伝えします — *we don't have the information yet, but the moment we do, we'll tell you*. It is the everyday language of news desks, customer service and business email.\n\n" +
            "Connection:\n" +
            "- **V-ます stem**: わかり次第, 決まり次第, 届き次第, 終わり次第.\n" +
            "- **N (mostly する-nouns)**: 到着次第, 入荷次第, 確認次第, 完成次第.\n\n" +
            "Key restrictions — these are what the test checks:\n" +
            "- **The second half is a future intention, request or plan**: 〜します / 〜してください / 〜する予定です. It can't describe a past fact: ✗駅に着き次第、電話した. For past events use 〜てすぐ or 〜たとたん.\n" +
            "- **Not for natural consequences you don't control**: ✗春になり次第、桜が咲く. The main clause is something a person deliberately does.\n" +
            "- It differs from **〜て以来** (#9, *ever since ~*), which describes a continuing state from a past point: 日本に来て以来、ずっとこの町に住んでいる.\n" +
            "- It differs from **〜際** (#7, *on the occasion of*): 出発の際 describes the time of an action; 出発次第 means *immediately after departure, (we'll do something)*.\n\n" +
            "Don't confuse it with **N次第（だ）** (#114), *depends on N*: 結果は努力次第だ *the result depends on your effort*; 天候次第で中止 *may be cancelled depending on the weather*. Tell them apart by what comes next: an action → *as soon as*; a result that varies → *depends on*.\n\n" +
            "Register: the book gives no scene icon for this point — it is neutral-polite and appears in both business and ordinary conversation (着き次第連絡するね).",
          see: [114, 9, 7],
          index: ["V-ます次第", "N次第", "〜次第、…します"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{部長|ぶちょう}が（　）、{打|う}ち{合|あ}わせを{始|はじ}めましょう。", options: ["{戻|もど}り{次第|しだい}", "{戻|もど}って{以来|いらい}"], answer: 0, en: "Let's start the meeting as soon as the department head gets back." },
                { q: "{新|あたら}しい{店長|てんちょう}が（　）、{売|う}り{上|あ}げが{少|すこ}しずつ{伸|の}びている。", options: ["{来|き}{次第|しだい}", "{来|き}て{以来|いらい}"], answer: 1, en: "Ever since the new manager came, sales have been growing little by little.", why: { en: "The main clause is an ongoing state that started in the past, not a planned action, so 次第 is impossible; 〜て以来 (#9) fits." } },
                { q: "{書類|しょるい}の{確認|かくにん}が（　）、{許可証|きょかしょう}を{発行|はっこう}いたします。", options: ["{済|す}み{次第|しだい}", "{済|す}むとともに"], answer: 0, en: "We will issue the permit as soon as the documents have been checked." },
                { q: "ご{入会|にゅうかい}（　）、{本人|ほんにん}{確認|かくにん}のため{身分|みぶん}{証明書|しょうめいしょ}が{必要|ひつよう}です。", options: ["{次第|しだい}", "の{際|さい}"], answer: 1, en: "When joining, you need ID to confirm your identity.", why: { en: "The ID is needed at the time of joining, not immediately after it, and 必要です is not an action triggered by the joining — so の際." } },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。（1〜4と5〜8は、それぞれ{一|ひと}つのニュースです。1〜4は{前|まえ}の4つ、5〜8は{後|うし}ろの4つの{言葉|ことば}を1{回|かい}ずつ{使|つか}います。）", en: "Choose the word that fills each blank. (Items 1–4 and 5–8 each form one news story. Items 1–4 use the first four words and items 5–8 the last four, each once.)" },
        bank: ["について", "にわたって", "つつ", "ための", "にかけて", "にともない", "おそれがあり", "次第"],
        items: [
          { q: "{県|けん}は、{高齢|こうれい}ドライバーの{運転|うんてん}＿＿どう{思|おも}うか、{県民|けんみん}にアンケートを{行|おこな}った。", answer: "について", en: "The prefecture surveyed residents on what they think about elderly people driving." },
          { q: "アンケートは{県内|けんない}のすべての{市町村|しちょうそん}で、3か{月|げつ}＿＿{行|おこな}われた。", answer: "にわたって", en: "The survey was carried out in every municipality in the prefecture over three months.", why: { en: "3か月 is a length of time with no から, so にわたって (not にかけて) fits." } },
          { q: "{県|けん}は、{免許|めんきょ}を{返納|へんのう}した{人|ひと}の{声|こえ}に{耳|みみ}を{傾|かたむ}け＿＿、{支援|しえん}{策|さく}を{考|かんが}えていく{方針|ほうしん}だ。", answer: "つつ", en: "The prefecture intends to work out support measures while listening to the voices of people who have given up their licences." },
          { q: "また、{車|くるま}のない{人|ひと}が{病院|びょういん}やスーパーに{通|かよ}う＿＿{新|あたら}しいバス{路線|ろせん}も{検討|けんとう}する。", answer: "ための", en: "It will also consider new bus routes so that people without cars can get to hospitals and supermarkets." },
          { q: "{今夜|こんや}{遅|おそ}くから{明日|あした}の{昼前|ひるまえ}＿＿、{県|けん}の{南部|なんぶ}では{激|はげ}しい{雨|あめ}が{降|ふ}る{見込|みこ}みです。", answer: "にかけて", en: "Heavy rain is expected in the south of the prefecture from late tonight until just before noon tomorrow.", why: { en: "A fuzzy span between two time points (AからB) takes にかけて; にわたって needs a single noun of extent (e.g. 3か月) and stresses a long, complete span." } },
          { q: "{前線|ぜんせん}の{北上|ほくじょう}＿＿、{雨|あめ}の{範囲|はんい}は{県|けん}の{北部|ほくぶ}にも{広|ひろ}がるでしょう。", answer: "にともない", en: "As the front moves north, the rain will spread to the north of the prefecture as well." },
          { q: "{低|ひく}い{土地|とち}では{浸水|しんすい}する＿＿ますので、{早|はや}めの{避難|ひなん}を{心|こころ}がけてください。", answer: "おそれがあり", en: "Low-lying land may be flooded, so please make sure to evacuate early." },
          { q: "{避難所|ひなんじょ}の{場所|ばしょ}は、{市|し}から{連絡|れんらく}があり＿＿、この{番組|ばんぐみ}でお{知|し}らせします。", answer: "次第", en: "We will announce the locations of the evacuation shelters on this programme as soon as we hear from the city." },
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
          { q: "{大雨|おおあめ}の{影響|えいきょう}で、{国道|こくどう}は{約|やく}10キロ（　）{通行止|つうこうど}めになっている。", options: ["にともなって", "について", "にわたって", "を中心に"], answer: 2, en: "Because of the heavy rain, the national highway is closed for about 10 km." },
          { q: "{当社|とうしゃ}は{地元|じもと}の{農家|のうか}の{皆様|みなさま}（　）、{新|あたら}しい{商品|しょうひん}の{開発|かいはつ}を{進|すす}めています。", options: ["にともない", "とともに", "にかけて", "次第で"], answer: 1, en: "Our company is developing new products together with local farmers.", why: { en: "The noun before the blank is a group of people; only とともに can mean “together with (people)”." } },
          { q: "{明日|あした}の{朝|あさ}まで{雨|あめ}が{降|ふ}り{続|つづ}くと、{川|かわ}が{氾濫|はんらん}する（　）ので、{早|はや}めに{避難|ひなん}してください。", options: ["はずがない", "ものがある", "ことにする", "おそれがある"], answer: 3, en: "If the rain keeps falling until tomorrow morning, the river may overflow, so please evacuate early." },
          { q: "{毎年|まいとし}7{月|がつ}の{終|お}わりから8{月|がつ}の{初|はじ}め（　）、この{川|かわ}では{花火|はなび}{大会|たいかい}が{何度|なんど}も{開|ひら}かれる。", options: ["にともない", "にかけて", "にとって", "とともに"], answer: 1, en: "Every year from the end of July into early August, fireworks displays are held on this river several times." },
          { q: "{高齢化|こうれいか}（　）、{医療|いりょう}や{介護|かいご}にかかる{費用|ひよう}が{年々|ねんねん}{増|ふ}えている。", options: ["にともなって", "にわたって", "にとって", "にかけて"], answer: 0, en: "With the ageing of the population, medical and nursing-care costs are increasing year by year." },
          { q: "{会議|かいぎ}の{資料|しりょう}ができ（　）、{皆様|みなさま}にメールでお{送|おく}りします。", options: ["ながら", "そうに", "次第", "かねないので"], answer: 2, en: "As soon as the meeting materials are ready, I'll email them to everyone." },
          { q: "{祖母|そぼ}は{古|ふる}いアルバムを（　）、{若|わか}いころの{話|はなし}を{聞|き}かせてくれた。", options: ["{眺|なが}め{次第|しだい}", "{眺|なが}めつつ", "{眺|なが}めるおそれがあって", "{眺|なが}めかねないので"], answer: 1, en: "Looking through an old album, my grandmother told me stories of when she was young." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "{古|ふる}い{電池|でんち}を{長|なが}い{間|あいだ}{入|い}れたままにしておくと、", after: "ので、ご{注意|ちゅうい}ください。", pieces: ["おそれが", "{液|えき}が{漏|も}れたり", "あります", "{発火|はっか}したりする"], order: [1, 3, 0, 2], star: 2, en: "If you leave old batteries inside for a long time, they may leak or catch fire, so please be careful." },
          { before: "{工事|こうじ}の{担当者|たんとうしゃ}が", after: "{予定|よてい}です。", pieces: ["{確認|かくにん}し{次第|しだい}", "{作業|さぎょう}を", "{安全|あんぜん}を", "{再開|さいかい}する"], order: [2, 0, 1, 3], star: 2, en: "Work is scheduled to resume as soon as the person in charge of the construction has confirmed it is safe." },
          { before: "{円安|えんやす}の", after: "、{家計|かけい}の{負担|ふたん}が{大|おお}きくなっている。", pieces: ["{輸入品|ゆにゅうひん}の", "{進行|しんこう}に", "{値段|ねだん}が{上|あ}がり", "ともなって"], order: [1, 3, 0, 2], star: 2, en: "As the yen weakens, the prices of imported goods are rising and the burden on household budgets is growing." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[4]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage, think about its overall content, and choose the best option for each of blanks [1]–[4]." },
        title: "{新|しん}{市立|しりつ}{図書館|としょかん}{開館|かいかん}{式|しき}での{市長|しちょう}のあいさつ",
        text: [
          "{本日|ほんじつ}は{新|しん}{市立|しりつ}{図書館|としょかん}の{開館|かいかん}{式|しき}にお{集|あつ}まりいただき、{誠|まこと}にありがとうございます。{市|し}の{人口|じんこう}の{増加|ぞうか}[1]、{以前|いぜん}の{図書館|としょかん}は{手狭|てぜま}になっておりました。そこで{市|し}では、5{年|ねん}[2]{市民|しみん}の{皆様|みなさま}と{話|はな}し{合|あ}いを{重|かさ}ね、ようやく{本日|ほんじつ}の{開館|かいかん}を{迎|むか}えることができました。",
          "{新|あたら}しい{図書館|としょかん}は、{本|ほん}を{借|か}りる{場所|ばしょ}であるだけでなく、{地域|ちいき}の{交流|こうりゅう}の{拠点|きょてん}[3]、さまざまな{講座|こうざ}やイベントも{開|ひら}いていく{予定|よてい}です。これからも{市民|しみん}の{皆様|みなさま}[4]、この{図書館|としょかん}を{大切|たいせつ}に{育|そだ}てていきたいと{考|かんが}えております。",
        ],
        en: [
          "Thank you very much for gathering here today for the opening ceremony of the new city library. As the city's population grew, the old library had become too small. So over five years the city held repeated discussions with residents, and at last we have been able to celebrate today's opening.",
          "The new library will not only be a place to borrow books; as a centre for community exchange, it will also host a variety of courses and events. We intend to continue nurturing this library with care, together with all of you, the citizens.",
        ],
        blanks: [
          { options: ["のもとで", "を問わず", "にともない", "においては"], answer: 2, why: { en: "The growth in population brought about a consequence (the library became cramped) → にともない." } },
          { options: ["につき", "にわたり", "とともに", "にともなって"], answer: 1, why: { en: "5年 is a length of time over which the discussions continued → にわたり." } },
          { options: ["として", "に限り", "はもとより", "をはじめ"], answer: 0, why: { en: "The library will serve in the role of a community hub → として, “as”." } },
          { options: ["をきっかけに", "に応じ", "とともに", "はともかく"], answer: 2, why: { en: "The partner is a group of people (市民の皆様) → とともに, “together with”." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉1", en: "Q4 Listening, part 1 (point comprehension)" },
      ex: {
        type: "listening",
        mode: "point",
        prompt: { ja: "この{問題|もんだい}では、まず{質問|しつもん}を{聞|き}いてください。そのあと、{選択肢|せんたくし}を{読|よ}んでください。{読|よ}む{時間|じかん}があります。それから{話|はなし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the question, then read the options (there is time to read them). Then listen to the talk and choose the best option from 1–4." },
        items: [
          {
            question: "{高速|こうそく}バスは{今|いま}、どうなっていますか。",
            script: [
              { sp: "アナウンサー", v: "f", ja: "{交通|こうつう}{情報|じょうほう}です。{大雨|おおあめ}の{影響|えいきょう}で、{山田|やまだ}{交通|こうつう}の{高速|こうそく}バスは、{今朝|けさ}6{時|じ}から{全線|ぜんせん}で{運転|うんてん}を{見合|みあ}わせていました。" },
              { sp: "アナウンサー", v: "f", ja: "その{後|ご}、{午前|ごぜん}10{時|じ}に、{東市|ひがしし}から{中央|ちゅうおう}{駅|えき}までの{区間|くかん}で{運転|うんてん}を{再開|さいかい}しました。" },
              { sp: "アナウンサー", v: "f", ja: "ただし、{中央|ちゅうおう}{駅|えき}から{西|にし}{港|みなと}にかけての{区間|くかん}は、{道路|どうろ}が{冠水|かんすい}するおそれがあるため、{引|ひ}き{続|つづ}き{運休|うんきゅう}しています。{再開|さいかい}の{見通|みとお}しが{立|た}ち{次第|しだい}、お{伝|つた}えします。" },
            ],
            en: [
              "Here is the traffic information. Because of heavy rain, Yamada Kotsu's express buses had been suspended on all routes since 6 a.m. this morning.",
              "After that, at 10 a.m., service resumed on the section from Higashi City to Central Station.",
              "However, the section from Central Station to Nishi Port remains suspended because of the risk of the road flooding. We will let you know as soon as there is an outlook for resumption.",
            ],
            options: ["{全線|ぜんせん}で{運休|うんきゅう}している", "{一部|いちぶ}の{区間|くかん}だけ{運休|うんきゅう}している", "{遅|おく}れながら{全線|ぜんせん}で{走|はし}っている", "いつも{通|どお}り{走|はし}っている"],
            answer: 1,
            why: { en: "Service was suspended on all routes this morning, but it has since resumed between Higashi City and Central Station; only the Central Station–Nishi Port section is still suspended." },
          },
          {
            question: "{明日|あした}、{特|とく}に{気|き}をつけなければならないのは{何|なん}ですか。",
            script: [
              { sp: "{気象|きしょう}{予報士|よほうし}", v: "m", ja: "{明日|あした}の{天気|てんき}です。{寒冷|かんれい}{前線|ぜんせん}の{通過|つうか}にともない、{明日|あした}は{朝|あさ}から{昼|ひる}にかけて、{激|はげ}しい{雨|あめ}が{降|ふ}るでしょう。{雷|かみなり}をともなうおそれもあります。" },
              { sp: "{気象|きしょう}{予報士|よほうし}", v: "m", ja: "{一方|いっぽう}、{風|かぜ}はそれほど{強|つよ}くならず、{海|うみ}の{波|なみ}も{穏|おだ}やかな{見込|みこ}みです。{午後|ごご}は{次第|しだい}に{晴|は}れてきますが、{気温|きおん}は{平年|へいねん}{並|な}みでしょう。" },
            ],
            en: [
              "Here is tomorrow's weather. As a cold front passes, heavy rain will fall tomorrow from morning to midday. It may be accompanied by thunder.",
              "On the other hand, the wind will not become very strong, and the sea is expected to stay calm. It will gradually clear up in the afternoon, and temperatures will be about normal for the season.",
            ],
            options: ["{激|はげ}しい{雨|あめ}だけ", "{激|はげ}しい{雨|あめ}と{雷|かみなり}", "{激|はげ}しい{雨|あめ}と{強|つよ}い{風|かぜ}", "{雷|かみなり}と{高|たか}い{波|なみ}"],
            answer: 1,
            why: { en: "Heavy rain with possible thunder is forecast; the wind won't be strong and the sea will be calm." },
          },
          {
            question: "{車|くるま}を{運転|うんてん}する{人|ひと}は、どうするように{言|い}われていますか。",
            script: [
              { sp: "アナウンサー", v: "m", ja: "{国道|こくどう}5{号線|ごうせん}の{緑|みどり}{大橋|おおはし}で、{来週|らいしゅう}の{月曜日|げつようび}から2{週間|しゅうかん}にわたって、{補修|ほしゅう}{工事|こうじ}が{行|おこな}われます。" },
              { sp: "アナウンサー", v: "m", ja: "{工事|こうじ}は{毎日|まいにち}{夜|よる}10{時|じ}から{翌朝|よくあさ}5{時|じ}にかけて{行|おこな}われ、その{間|あいだ}、{橋|はし}は{片側|かたがわ}{交互|こうご}{通行|つうこう}となります。{通行止|つうこうど}めにはなりません。" },
              { sp: "アナウンサー", v: "m", ja: "ただ、{橋|はし}の{周辺|しゅうへん}では{渋滞|じゅうたい}が{発生|はっせい}するおそれがありますので、この{時間|じかん}に{通|とお}る{方|かた}は、{時間|じかん}に{余裕|よゆう}をもってお{出|で}かけください。" },
            ],
            en: [
              "Repair work will be carried out on Midori Ohashi Bridge on National Route 5 for two weeks starting next Monday.",
              "The work will take place every day from 10 p.m. to 5 a.m. the next morning, and during that time the bridge will operate with alternating one-lane traffic. It will not be closed.",
              "However, there may be traffic jams around the bridge, so if you pass through during these hours, please leave with plenty of time to spare.",
            ],
            options: ["{夜|よる}の{間|あいだ}は{国道|こくどう}5{号線|ごうせん}を{通|とお}らない", "{工事|こうじ}の{前|まえ}に{届|とど}けを{出|だ}す", "{時間|じかん}に{余裕|よゆう}をもって{出発|しゅっぱつ}する", "{工事|こうじ}の{時間|じかん}を{問|と}い{合|あ}わせる"],
            answer: 2,
            why: { en: "The road will not be closed (通行止めにはなりません), so option 1 is wrong; drivers are asked to leave with time to spare." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉2", en: "Q4 Listening, part 2 (quick response)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. First listen to the sentence, then listen to the replies and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{台風|たいふう}が{近|ちか}づいてるから、{明日|あした}の{試合|しあい}、{中止|ちゅうし}になるおそれがあるって。" }],
            options: [
              "そうなんだ。じゃあ、{中止|ちゅうし}かどうか{決|き}まり{次第|しだい}、{教|おし}えてくれる？",
              "よかった。じゃあ、{中止|ちゅうし}にはならないんだね。",
              "えっ、もう{中止|ちゅうし}に{決|き}まったの？　{残念|ざんねん}だなあ。",
            ],
            answer: 0,
            en: [
              "Man: The typhoon's getting closer, so they say tomorrow's game might be cancelled.",
              "1. Really? Then could you let me know as soon as they decide whether it's cancelled?",
              "2. Great. So it won't be cancelled, then.",
              "3. What, it's already been decided that it's cancelled? That's a shame.",
            ],
            why: { en: "おそれがある means cancellation is possible but not yet decided, so 2 (it won't be cancelled) and 3 (it's already decided) are wrong." },
          },
        ],
      },
    },
  ],
});
