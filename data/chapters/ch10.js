N2.register({
  id: 10,
  genre: { ja: "エッセーを{読|よ}む", en: "Reading an Essay" },
  title: { ja: "{満員|まんいん}{電車|でんしゃ}", en: "A Full Train" },
  canDo: [
    { ja: "エッセーを{読|よ}んで、{筆者|ひっしゃ}の{考|かんが}え{方|かた}や{感|かん}じ{方|かた}が{理解|りかい}できる。", en: "Read an essay and understand the author's thoughts and feelings." },
  ],
  parts: [
    {
      label: "(1)",
      sample: {
        kind: "essay",
        lines: [
          { ja: "{毎朝|まいあさ}、7{時|じ}{半|はん}の{快速|かいそく}{電車|でんしゃ}で{会社|かいしゃ}に{通|かよ}っている。", en: "Every morning I commute to work on the 7:30 rapid train." },
          { ja: "{片道|かたみち}50{分|ぷん}、{身動|みうご}きもできないまま{立|た}ち{続|つづ}けるのは、{正直|しょうじき}なところ、{体|からだ}にこたえる**ものがある**。", en: "Fifty minutes each way, standing the whole time without being able to move — honestly, there's something about it that really wears on the body." },
          { ja: "この{混雑|こんざつ}を{毎日|まいにち}{経験|けいけん}して、{疲|つか}れを{感|かん}じない{人|ひと}はいる**まい**。", en: "Surely there is no one who goes through this crush every day and doesn't feel tired." },
          { ja: "それでも、{押|お}されても{文句|もんく}ひとつ{言|い}わずに{窓|まど}の{外|そと}を{眺|なが}めている{人|ひと}たちの{顔|かお}を{見|み}る**につけ**、よく{黙|だま}って{耐|た}えていられるものだと{感心|かんしん}させられる。", en: "Even so, whenever I look at the faces of people gazing out of the window without a word of complaint as they get pushed around, I can't help being impressed at how they endure it in silence." },
          { ja: "{私|わたし}はいつも、{前|まえ}から3{両目|りょうめ}の{車両|しゃりょう}に{乗|の}ることにしている。{理由|りゆう}はひとつ。", en: "I always make a point of riding in the third car from the front. There's one reason." },
          { ja: "3{両目|りょうめ}はいつも{混雑|こんざつ}している**わりには**、{冷房|れいぼう}がよく{効|き}いていて、{意外|いがい}と{快適|かいてき}なのだ。", en: "Although the third car is always packed, the air conditioning works well, so it's surprisingly comfortable — more than you'd expect." },
          { ja: "{今朝|けさ}も{背中|せなか}を{押|お}されながら{乗|の}り{込|こ}み、{座席|ざせき}の{前|まえ}のつり{革|かわ}につかまった。", en: "This morning, too, I squeezed on with people pushing at my back and grabbed a strap in front of the seats." },
        ],
      },
      points: [
        {
          no: 92,
          pattern: "〜ものがある",
          phrase: "{体|からだ}にこたえる**ものがある**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜{感|かん}じがする」と{言|い}いたいときに{使|つか}う。「はっきりと{何|なに}とは{言|い}えないが、そう{感|かん}じさせる{何|なに}かがある」と{言|い}うときにも{使|つか}われる。",
            en: "Used to say something “feels ~ / seems ~”. It's also used when something gives you a certain impression, even though you can't say exactly what it is — “there's something ~ about it”.",
          },
          forms: ["[Pl] + ものがある"],
          formNotes: [
            { ja: "な{形容詞|けいようし}は「[なA~~だ~~]な + ものがある」の{形|かたち}になる。{名詞|めいし}にはつかない。", en: "な-adjectives take な (静かなものがある). It does not attach to nouns (✗Nだものがある / ✗Nのものがある)." },
            { ja: "{現在形|げんざいけい}だけで{使|つか}う。", en: "Only the present (non-past) form comes before it — ✗つらかったものがある." },
          ],
          examples: [
            { ja: "{子|こ}どものころ{遊|あそ}んだ{公園|こうえん}がなくなると{聞|き}いて、さびしい**ものがある**。", en: "Hearing that the park I played in as a child is going to disappear makes me feel a little sad." },
            { ja: "{新人|しんじん}とはいえ、{彼|かれ}の{発想|はっそう}にはきらりと{光|ひか}る**ものがある**。", en: "He may be a newcomer, but there's something brilliant about the way he thinks." },
            { ja: "{毎朝|まいあさ}5{時|じ}に{起|お}きて{弁当|べんとう}を{作|つく}り{続|つづ}けるのは、なかなかつらい**ものがある**。", en: "Getting up at five every morning to keep making packed lunches is pretty hard going." },
            { ja: "{被災地|ひさいち}の{子|こ}どもたちが{歌|うた}う{姿|すがた}には、{胸|むね}に{迫|せま}る**ものがあった**。", en: "There was something deeply moving about the sight of the children from the disaster area singing." },
          ],
          deepDive:
            "**〜ものがある** lets you express an impression or emotion that something evokes, without claiming to know exactly why: *there is something ~ about it*. It is softer and more reflective than a plain statement. Compare 寂しい (*it's lonely*) with 寂しいものがある (*there's a certain loneliness to it / it makes me feel a bit lonely*).\n\n" +
            "Typical words before it are evaluative or emotional: つらい, さびしい, 厳しい, すばらしい, 感慨深い, 胸に迫る, 心を打つ, 目を見張る, 光る. Verbs also appear in fixed collocations: 胸に迫るものがある, 見るべきものがある, 共通するものがある (*they have something in common*).\n\n" +
            "Connection pitfalls:\n" +
            "- Only the non-past form: ✗厳しかったものがある. If you want past, change ある: 厳しいものがあった.\n" +
            "- な-adjectives take な (見事なものがある); nouns can't be used (✗問題だものがある).\n" +
            "- The subject is usually the thing/situation, marked with には or は: 彼女の歌声には人を引きつけるものがある.\n\n" +
            "The もの family is huge — see the similar-pattern list: 〜ものだ (nature/common sense #13, reminiscence #132), 〜ものではない (#46), 〜というものだ (#52), 〜というものではない (#25), 〜ものの (#39), 〜ものなら (#122), 〜ものか (#51), 〜もん (#56). ものがある is the only one whose core meaning is *an impression that something gives off*.\n\n" +
            "JLPT tip: if the blank follows an emotional/evaluative adjective at the end of the sentence and the options include ものがある, check that the adjective is in the present form — that's usually the clue.",
          see: [13, 25, 39, 46, 51, 52, 56, 122, 132],
          index: ["〜ものがある", "〜ものがあった"],
        },
        {
          no: 93,
          pattern: "〜まい",
          phrase: "いる**まい**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "{状況|じょうきょう}などから{判断|はんだん}して、「〜の{可能性|かのうせい}は{非常|ひじょう}に{少|すく}ないだろう」と{言|い}いたいときに{使|つか}われる。",
            en: "Used when, judging from the situation etc., you want to say “there is very little possibility of ~” — i.e. “surely ~ won't / probably not ~”.",
          },
          forms: ["[V-る] + まい"],
          formNotes: [
            {
              ja: "{動詞|どうし}のⅡグループとⅢグループには、{複数|ふくすう}の{接続|せつぞく}のし{方|かた}がある。\n{食|た}べる → {食|た}べるまい／{食|た}べまい\nする → するまい／すまい／しまい\n{来|く}る → {来|く}るまい／{来|こ}まい／{来|き}まい",
              en: "Group II and Group III verbs have more than one possible connection:\n食べる → 食べるまい / 食べまい\nする → するまい / すまい / しまい\n来る → くるまい / こまい / きまい",
            },
          ],
          examples: [
            { ja: "この{渋滞|じゅうたい}では、{約束|やくそく}の{時間|じかん}に{間|ま}に{合|あ}う**まい**。", en: "With this traffic jam, we surely won't make it in time for the appointment." },
            { ja: "あれほど{慎重|しんちょう}な{彼|かれ}が、{同|おな}じミスを{繰|く}り{返|かえ}すことはある**まい**。", en: "Someone as careful as he is would hardly make the same mistake twice." },
            { ja: "{景気|けいき}が{回復|かいふく}しない{限|かぎ}り、{給料|きゅうりょう}が{上|あ}がることはある**まい**。", en: "Unless the economy recovers, there's little chance salaries will go up." },
            { ja: "{人口|じんこう}が{減|へ}り{続|つづ}ける{中|なか}、{地方|ちほう}の{路線|ろせん}を{今|いま}のまま{維持|いじ}するのは{難|むずか}しいのではある**まいか**。", en: "With the population continuing to fall, isn't it likely to be difficult to keep regional lines running as they are?" },
          ],
          notes: [
            {
              ja: "「{絶対|ぜったい}〜するのはやめよう」という{強|つよ}い{意志|いし}を{表|あらわ}すこともある。",
              en: "It can also express a strong determination: “I will absolutely not ~ / I'll never ~ again”.",
              examples: [
                { ja: "あの{映画|えいが}は{途中|とちゅう}で{眠|ねむ}ってしまうほど{退屈|たいくつ}だったので、あの{監督|かんとく}の{作品|さくひん}はもう{見|み}る**まい**と{思|おも}った。", en: "That film was so boring I fell asleep halfway through, so I decided never to watch that director's work again." },
                { ja: "{夜更|よふ}かしして{試験|しけん}に{遅刻|ちこく}してから、{前|まえ}の{晩|ばん}は{遅|おそ}くまで{起|お}きている**まい**と{決|き}めている。", en: "Ever since I stayed up late and was late for an exam, I've made a rule never to stay up late the night before." },
                { ja: "{人|ひと}の{悪口|わるぐち}だけは{言|い}う**まい**と、{自分|じぶん}に{言|い}い{聞|き}かせている。", en: "I keep telling myself that, whatever else, I will never speak ill of others." },
              ],
            },
          ],
          deepDive:
            "**〜まい** is the old negative counterpart of 〜う/〜よう. Like 〜よう, it has two faces:\n" +
            "- **Negative conjecture** (main use in this point): ないだろう / ないに違いない. この雨では試合は行われまい = *the match surely won't be held in this rain*.\n" +
            "- **Negative volition** (clip note): ないつもりだ, a firm resolution, usually in the first person: 二度と行くまい.\n\n" +
            "Register: written and rather stiff. In conversation it sounds old-fashioned or dramatic; people say 〜ないだろう or 〜ないと思う instead. It is at home in essays, editorials and commentary — exactly where the JLPT uses it.\n\n" +
            "Connections are the main trap:\n" +
            "- Group I: V-る + まい → 行くまい, あるまい.\n" +
            "- Group II: 食べるまい or 食べまい (stem + まい).\n" +
            "- する: するまい / すまい / しまい. 来る: くるまい / こまい / きまい.\n" +
            "- ✗行かないまい — まい already contains the negation.\n\n" +
            "Useful chunks:\n" +
            "- **〜ことはあるまい** = *there's no way ~ / there's no need to ~*: 心配することはあるまい.\n" +
            "- **〜のではあるまいか** = a formal ではないだろうか (*isn't it the case that…?*).\n" +
            "- **子どもじゃあるまいし** = *you're not a child, so…* (spoken, with あるまいし).\n" +
            "- **VかVまいか** (#123) = *whether to do or not* (迷う・悩む).\n\n" +
            "Contrast: 〜かねない (*might well happen* — bad possibility is HIGH) vs まい (possibility is LOW). 〜わけではない (*it's not that ~*) is a partial denial of an assumption, not a prediction. JLPT tip: if the sentence reasons from a situation (この天気では, 状況から見て, あれほど〜な彼が) to an unlikely outcome, まい fits.",
          see: [123],
          index: ["Vまい", "〜ことはあるまい", "〜のではあるまいか", "二度と〜まい"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{彼女|かのじょ}は{口|くち}が{堅|かた}いから、{人|ひと}の{秘密|ひみつ}をほかの{人|ひと}に（　）。", options: ["話すまい", "話しかねない"], answer: 0, en: "She knows how to keep a secret, so she surely won't tell other people's secrets to anyone.", why: { en: "〜かねない means a bad outcome is quite possible, which contradicts 口が堅い (discreet). まい = very unlikely." } },
                { q: "{終電|しゅうでん}を{逃|のが}してしまった。こうなったら、{駅前|えきまえ}のホテルに{泊|と}まる（　）。", options: ["しかあるまい", "わけではない"], answer: 0, en: "I've missed the last train. In that case, I suppose there's nothing for it but to stay at a hotel by the station." },
                { q: "{実力|じつりょく}から{見|み}て、{決勝|けっしょう}でうちのチームが{負|ま}けることは（　）と、{監督|かんとく}は{自信|じしん}を{見|み}せている。", options: ["あるまい", "あるわけではない"], answer: 0, en: "Judging from ability, there's no way our team will lose in the final — the coach is showing confidence." },
                { q: "{料理|りょうり}が（　）が、{仕事|しごと}が{忙|いそが}しくて{毎日|まいにち}{外食|がいしょく}している。", options: ["できまい", "できないわけではない"], answer: 1, en: "It's not that I can't cook, but I'm busy with work, so I eat out every day.", why: { en: "The speaker is explaining their own situation, not predicting. 〜わけではない (“it's not that…”) + が sets up the real reason." } },
              ],
            },
          ],
        },
        {
          no: 94,
          pattern: "〜につけ",
          phrase: "{顔|かお}を{見|み}る**につけ**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「{何|なに}かを{見|み}たり{聞|き}いたりするたびに（いつも…と{思|おも}う）」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “whenever I see or hear something, (I always think / feel …)”.",
          },
          forms: ["[V-る] + につけ"],
          formNotes: [
            { ja: "「{暑|あつ}いにつけ{寒|さむ}いにつけ」のような{慣用|かんよう}{表現|ひょうげん}で、「どんなときも」という{気持|きも}ちを{表|あらわ}すこともある。", en: "In idiomatic expressions like 暑いにつけ寒いにつけ it can also express a feeling of “whatever the situation / in any case”." },
          ],
          examples: [
            { ja: "{駅|えき}の{階段|かいだん}で{重|おも}い{荷物|にもつ}を{運|はこ}ぶお{年寄|としよ}りを{見|み}る**につけ**、エレベーターを{増|ふ}やしてほしいと{思|おも}う。", en: "Whenever I see elderly people carrying heavy bags up the station stairs, I wish they'd install more elevators." },
            { ja: "{留学|りゅうがく}している{友人|ゆうじん}の{話|はなし}を{聞|き}く**につけ**、{自分|じぶん}も{外国|がいこく}で{学|まな}んでみたくなる。", en: "Every time I hear my friend talk about studying abroad, I start wanting to study in another country myself." },
            { ja: "{海|うみ}に{流|なが}れ{着|つ}いたプラスチックごみの{写真|しゃしん}を{見|み}る**につけ**、{自分|じぶん}の{生活|せいかつ}を{見直|みなお}さなければと{考|かんが}えさせられる。", en: "Whenever I see photos of plastic waste washed up on the shore, it makes me think I need to rethink my own lifestyle." },
            { ja: "うれしい**につけ**{悲|かな}しい**につけ**、{音楽|おんがく}はいつも{私|わたし}のそばにあった。", en: "In happy times and sad times alike, music was always there for me.", idiom: true },
            { ja: "{上司|じょうし}は**{何|なに}かにつけ**{昔|むかし}の{自慢|じまん}{話|ばなし}を{始|はじ}めるので、みんな{困|こま}っている。", en: "Our boss starts bragging about the old days at every opportunity, which bothers everyone.", idiom: true },
          ],
          deepDive:
            "**〜につけ** links a repeated trigger (usually seeing, hearing or thinking about something) to a feeling or thought that arises naturally each time: 写真を見るにつけ、故郷を思い出す = *every time I look at the photo, I'm reminded of home*.\n\n" +
            "Typical verbs before につけ: 見る, 聞く, 思う, 考える, 触れる (ニュースに触れるにつけ). Typical second halves are spontaneous mental reactions: 思い出す, 感じる, 心配になる, 〜と思う, 〜させられる. A deliberate action or request does not fit: ✗写真を見るにつけ、手紙を書いてください.\n\n" +
            "Compare with **〜たびに** (N3). たびに is neutral and can connect any repeated event to any result (この店に来るたびに、同じものを注文する). につけ is literary and narrower — it's about what the experience makes you *feel or think*. In an essay like this chapter's, につけ gives a reflective tone.\n\n" +
            "Idiomatic uses (the ＊ note):\n" +
            "- **何かにつけ（て）** = *at every opportunity, on the slightest pretext*: 何かにつけ文句を言う. Often has a slightly critical or weary tone.\n" +
            "- **AにつけBにつけ** with opposite pairs = *whether A or B, in any case*: うれしいにつけ悲しいにつけ, 暑いにつけ寒いにつけ, 雨につけ風につけ. Nouns and い-adjectives can appear here.\n" +
            "- **〜につけても** = *speaking of ~ / in connection with ~* (それにつけても, literary).\n\n" +
            "Don't confuse it with **〜につき** (#1, *because of*, on notices) — one kana difference, completely different meaning. JLPT tip: 見る/聞く + blank + a feeling at the end → につけ.",
          see: [1],
          index: ["Vにつけ", "何かにつけ", "AにつけBにつけ", "よいにつけ悪いにつけ"],
        },
        {
          no: 95,
          pattern: "〜わりに（は）",
          phrase: "{混雑|こんざつ}している**わりには**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「このスーツケースは{大|おお}きいわりに{軽|かる}い」のように「〜わりに…」の{形|かたち}で、「〜から{当然|とうぜん}{考|かんが}えられる{程度|ていど}（{大|おお}きければ{重|おも}い）と{比|くら}べれば…である（{軽|かる}い）」と{言|い}いたいときに{使|つか}う。",
            en: "In the form 〜わりに…, as in このスーツケースは大きいわりに軽い, it's used to say that compared with the degree one would naturally expect from ~ (a big suitcase would be heavy), the reality is more or less so (it's light).",
          },
          forms: ["[Pl] + わりに"],
          formNotes: [
            { ja: "な{形容詞|けいようし}は「[なA~~だ~~]な + わりに」、{名詞|めいし}は「[N~~だ~~]の + わりに」になる。", en: "な-adjectives take な (簡単なわりに) and nouns take の (年齢のわりに)." },
          ],
          examples: [
            { ja: "この{店|みせ}のパスタは、{量|りょう}が{多|おお}い**わりに**{値段|ねだん}が{安|やす}い。", en: "The pasta at this place is cheap considering how big the portions are." },
            { ja: "{弟|おとうと}は{毎日|まいにち}{遅|おそ}くまで{勉強|べんきょう}している**わりには**、{成績|せいせき}があまり{上|あ}がらない。", en: "My younger brother studies late every day, but his grades aren't improving as much as you'd expect." },
            { ja: "このアパートは{駅|えき}からの{距離|きょり}の**わりに**{家賃|やちん}が{高|たか}い。", en: "This apartment's rent is high considering how far it is from the station." },
            { ja: "{姉|あね}は「もう{食|た}べられない」と{言|い}った**わりに**、デザートはしっかり{全部|ぜんぶ}{食|た}べた。", en: "For someone who said she couldn't eat another bite, my sister certainly finished every bit of her dessert." },
            { ja: "{有名|ゆうめい}な**わりに**、その{美術館|びじゅつかん}は{平日|へいじつ}だとすいている。", en: "Although it's famous, that museum isn't crowded on weekdays." },
          ],
          deepDive:
            "**〜わりに（は）** (割に, from 割 *ratio, proportion*) compares reality with the level you'd expect from X: *considering X / for X, (it's surprisingly…)*. The result can be better or worse than expected: 安いわりにおいしい (pleasant surprise), 高いわりにおいしくない (disappointment). は adds emphasis/contrast.\n\n" +
            "What comes before わりに usually implies a **degree or amount** — price, age, size, effort, reputation, time spent: 値段のわりに, 年齢のわりに, 練習したわりに, 有名なわりに. The pattern **〜と言うわりに（は）** (*for someone who says ~*) is very common for pointing out that someone's words and actions don't match.\n\n" +
            "Contrasts:\n" +
            "- **〜のに**: simple contradiction, often with the speaker's frustration. わりに is more measured — it's about degree. 練習したのに負けた (*I practiced, but lost!*) vs 練習したわりにはうまくならない (*I'm not as good as the amount of practice would suggest*).\n" +
            "- **〜にしては**: *for a ~* based on a category or status: 子どもにしては上手だ, 初めてにしてはよくできた. わりに needs something with degree; にしては works with a category. Both are sometimes possible (年のわりに ≈ 年にしては).\n" +
            "- **〜だけあって**: the opposite — the result is *as expected* from X: 有名なだけあって、おいしい.\n\n" +
            "Don't confuse it with the adverb **わりに / わりと** (*relatively, fairly*): 今日はわりに暖かい.\n\n" +
            "JLPT tip: when the two halves are in an “unexpected degree” relationship (big but light, cheap but good, famous but few people), わりに is the answer; if they are consistent (famous → delicious), look for だけあって.",
          see: [41],
          index: ["〜わりに", "〜わりには", "Nのわりに", "〜と言うわりに"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "このパソコンは{値段|ねだん}が{安|やす}いわりに、",
                "ほとんど{練習|れんしゅう}しなかったわりには、",
                "この{本|ほん}は{分厚|ぶあつ}いわりに、",
                "{毎日|まいにち}{残業|ざんぎょう}したわりに、",
              ],
              right: [
                "{一晩|ひとばん}で{読|よ}めるほどやさしい{内容|ないよう}だった。",
                "{動作|どうさ}が{速|はや}くて{使|つか}いやすい。",
                "{給料|きゅうりょう}はあまり{増|ふ}えなかった。",
                "{発表会|はっぴょうかい}でうまくピアノが{弾|ひ}けた。",
              ],
              answer: [1, 3, 0, 2],
              en: [
                "This computer is fast and easy to use, considering how cheap it is.",
                "Considering I hardly practiced, I played the piano well at the recital.",
                "For such a thick book, the content was easy enough to read in one night.",
                "Considering I worked overtime every day, my pay didn't go up much.",
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["まい", "ものがある", "わりに", "につけ"],
        items: [
          { q: "{学生|がくせい}のころから{通|かよ}っていた{喫茶店|きっさてん}が{閉店|へいてん}すると{聞|き}いて、さびしい＿＿。", answer: "ものがある", en: "Hearing that the café I've gone to since my student days is closing makes me feel rather sad." },
          { q: "この{町|まち}は{人口|じんこう}が{少|すく}ない＿＿、おしゃれなカフェが{多|おお}い。", answer: "わりに", en: "For a town with such a small population, this place has a lot of stylish cafés." },
          { q: "この{程度|ていど}の{雨|あめ}なら、{試合|しあい}が{中止|ちゅうし}になることはある＿＿。", answer: "まい", en: "With rain this light, there's surely no chance the match will be called off." },
          { q: "{海外|かいがい}で{活躍|かつやく}している{同級生|どうきゅうせい}のニュースを{聞|き}く＿＿、{自分|じぶん}ももっとがんばろうと{思|おも}う。", answer: "につけ", en: "Whenever I hear news of my classmate doing great things abroad, it makes me want to try harder too." },
        ],
      },
    },
    {
      label: "(2)",
      sample: {
        kind: "essay",
        lines: [
          { ja: "2つ{目|め}の{駅|えき}が{近|ちか}づいてきた。{目|め}の{前|まえ}の{席|せき}に{座|すわ}っていた{男性|だんせい}が、{網棚|あみだな}のかばんに{手|て}を{伸|の}ばした。よし、{次|つぎ}はきっと{座|すわ}れる。", en: "We were approaching the second station. The man sitting in the seat in front of me reached for his bag on the luggage rack. Great — this time I'd definitely get a seat." },
          { ja: "{電車|でんしゃ}が{止|と}まる**か**{止|と}まら**ないかのうちに**、{男性|だんせい}はさっと{立|た}ち{上|あ}がり、{人|ひと}の{間|あいだ}をすり{抜|ぬ}けて{降|お}りていった。", en: "The train had barely come to a stop when the man sprang to his feet, slipped through the crowd and got off." },
          { ja: "ところが、{私|わたし}が{腰|こし}を{下|お}ろそうとしたとき、{杖|つえ}をついたおばあさんが{乗|の}ってくるのが{見|み}えた。{少|すこ}し{迷|まよ}ったが、{私|わたし}は{席|せき}を{譲|ゆず}ることにした。", en: "But just as I was about to sit down, I saw an elderly woman with a cane getting on. I hesitated a little, but decided to give her the seat." },
          { ja: "おばあさんは{何度|なんど}も{頭|あたま}を{下|さ}げてから、うれし**げ**に{目|め}を{細|ほそ}めて{座|すわ}った。", en: "The old woman bowed her head several times, then sat down, her eyes crinkling with visible happiness." },
          { ja: "いいことをしたはずなのに、{座|すわ}りたかった{気持|きも}ちも{残|のこ}っていて、{誇|ほこ}らしい**やら**もったいない**やら**、{自分|じぶん}でもよくわからない{気分|きぶん}だった。", en: "I'd supposedly done a good deed, yet part of me still wanted to sit — I felt proud, and also like I'd thrown away a chance; I couldn't really tell what I felt." },
          { ja: "そのとき、{電車|でんしゃ}が{大|おお}きく{揺|ゆ}れた**かと{思|おも}うと**、トンネルの{手前|てまえ}で{急|きゅう}に{止|と}まってしまった。「{信号|しんごう}{確認|かくにん}のため、しばらく{停車|ていしゃ}いたします」というアナウンスが{流|なが}れる。", en: "Just then, the train gave a big lurch and then suddenly stopped just before a tunnel. An announcement came on: “We will be stopping for a while to check the signals.”" },
          { ja: "{会社|かいしゃ}に{着|つ}く{前|まえ}に、{今日|きょう}も{一日分|いちにちぶん}の{体力|たいりょく}を{使|つか}い{果|は}たしてしまいそうだ。", en: "Once again today, it looks like I'll use up a whole day's worth of energy before I even get to the office." },
        ],
      },
      points: [
        {
          no: 96,
          pattern: "〜か〜ないかのうちに",
          phrase: "{止|と}まる**か**{止|と}まら**ないかのうちに**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜か〜ないかのうちに…」は、「〜の{動作|どうさ}が{完全|かんぜん}に{完了|かんりょう}しないくらい{短|みじか}い{時間|じかん}の{間|あいだ}に」と{言|い}いたいときに{使|つか}う。",
            en: "〜か〜ないかのうちに… is used to say “in so short a time that the action ~ hasn't even been fully completed” — “no sooner / barely … than …”.",
          },
          forms: ["[V-る] / [V-た] + か + [V-ない] + かのうちに"],
          formNotes: [
            { ja: "{同|おな}じ{動詞|どうし}を{使|つか}う。", en: "The same verb is used in both slots (止まるか止まらないか, 言ったか言わないか)." },
          ],
          examples: [
            { ja: "{娘|むすめ}は「いただきます」と{言|い}う**か**{言|い}わ**ないかのうちに**、{唐揚|からあ}げに{箸|はし}を{伸|の}ばした。", en: "My daughter had barely finished saying “itadakimasu” before she reached for the fried chicken with her chopsticks." },
            { ja: "{合図|あいず}の{笛|ふえ}が{鳴|な}った**か**{鳴|な}ら**ないかのうちに**、{選手|せんしゅ}たちは{一斉|いっせい}に{走|はし}り{出|だ}した。", en: "The whistle had barely sounded when the players all started running at once." },
            { ja: "{夜|よる}が{明|あ}ける**か**{明|あ}け**ないかのうちに**、{漁師|りょうし}たちは{船|ふね}を{出|だ}した。", en: "The fishermen set out in their boats just as day was breaking." },
            { ja: "{横|よこ}になる**か**なら**ないかのうちに**、{疲|つか}れていた{父|ちち}はいびきをかき{始|はじ}めた。", en: "My exhausted father started snoring almost the moment he lay down." },
          ],
          deepDive:
            "**〜か〜ないかのうちに** paints an action as happening so fast that the previous one had not quite finished: *before ~ was even done / the instant ~*. Literally: *within the time when it's unclear whether ~ has happened or not*.\n\n" +
            "Form rules:\n" +
            "- The **same verb** appears twice: 着くか着かないか, 言ったか言わないか. ✗着くか降りないかのうちに.\n" +
            "- The first verb can be dictionary form or た-form with little difference in meaning: 鳴るか鳴らないか / 鳴ったか鳴らないか.\n" +
            "- The second half is a past or habitual **fact** that the writer observed — usually someone else's quick action. It can't be a request, command or intention: ✗ドアが開くか開かないかのうちに乗ってください.\n\n" +
            "Neighbors meaning *as soon as*:\n" +
            "- **〜たとたん（に）** (N3): *the moment ~, (unexpectedly)*; second half is often a surprise, not always someone's deliberate action.\n" +
            "- **〜かと思うと／かと思ったら** (#99): *no sooner had A happened than B (a sudden change)*.\n" +
            "- **〜次第** (*as soon as, I will…*) — used for future plans and requests, the opposite of this pattern.\n" +
            "- **〜や否や / 〜なり** (N1): very literary equivalents.\n\n" +
            "Related うちに patterns (see list p.220): Vうちに (*while ~, gradually*) and Vないうちに (*before ~ happens*) are N3; this is the only N2 member of the group.\n\n" +
            "JLPT tip: in ordering questions, look for pieces like ○○か / ○○ない / かのうちに — the verb must repeat and か appears twice.",
          see: [99],
          index: ["VかVないかのうちに", "VたかVないかのうちに"],
        },
        {
          no: 97,
          pattern: "〜げ",
          phrase: "うれし**げ**に",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜げ」は、「〜そうだ」と{同|おな}じように、{見|み}て{感|かん}じた{印象|いんしょう}を{言|い}うときに{使|つか}われる。{気持|きも}ちを{表|あらわ}す{言葉|ことば}と{一緒|いっしょ}に{使|つか}われることが{多|おお}い。",
            en: "〜げ, like 〜そうだ, is used to state an impression you get from what you see. It's often used with words that express feelings.",
          },
          forms: ["[いA~~い~~] + げ", "[なA] + げ"],
          formNotes: [
            { ja: "「〜げ」は、な{形容詞|けいようし}になる（〜げな + N、〜げに + V、〜げだ）。", en: "〜げ itself behaves as a な-adjective: 〜げなN, 〜げにV, 〜げだ." },
            { ja: "「さびしい・{悲|かな}しい・{楽|たの}しい・{不安|ふあん}・{得意|とくい}・{満足|まんぞく}・〜たい」などの{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "It's used with words such as さびしい, 悲しい, 楽しい, 不安, 得意, 満足 and 〜たい (言いたげ)." },
          ],
          examples: [
            { ja: "{金|きん}メダルを{取|と}った{選手|せんしゅ}は、{誇|ほこ}らし**げ**に{観客|かんきゃく}に{手|て}を{振|ふ}った。", en: "The athlete who won the gold medal proudly waved to the crowd." },
            { ja: "{初|はじ}めて{一人|ひとり}で{留守番|るすばん}をする{息子|むすこ}は、{少|すこ}し{不安|ふあん}**げ**な{顔|かお}をしていた。", en: "My son, staying home alone for the first time, looked a little anxious." },
            { ja: "{猫|ねこ}がこちらを{見|み}て、{何|なに}か{言|い}いた**げ**に「ニャー」と{鳴|な}いた。", en: "The cat looked at me and meowed as if it wanted to say something." },
            { ja: "{彼|かれ}は{自信|じしん}あり**げ**な{口調|くちょう}で、{新|あたら}しい{企画|きかく}を{説明|せつめい}した。", en: "He explained the new project in a confident-sounding tone." },
          ],
          deepDive:
            "**〜げ** (気, *air, appearance*) describes how someone's feelings look from the outside: 悲しげな目 *sad-looking eyes*, 得意げに話す *talk with a triumphant air*. It is close to 〜そう (looks ~) but more literary and descriptive, typical of essays and novels.\n\n" +
            "Form and grammar:\n" +
            "- いA drops い: さびしい → さびしげ, 楽しい → 楽しげ. なA attaches directly: 不安げ, 満足げ, 得意げ.\n" +
            "- 〜たい → 〜たげ: 言いたげ, 聞きたげ, 何か言いたげな顔.\n" +
            "- Fixed forms with ある: 自信ありげ, 意味ありげ (*meaningful, suggestive*), 用ありげ.\n" +
            "- It works as a な-adjective: 〜げなN / 〜げにV / 〜げだ.\n\n" +
            "げ vs そう:\n" +
            "- そう is much wider: 雨が降りそうだ, おいしそうだ, 倒れそうだ. げ mostly describes **feelings and attitudes** visible in a person (or animal), plus a few fixed impressions of things such as 涼しげ (*cool-looking*). ✗雨が降りげ, ✗おいしげ (sounds odd).\n" +
            "- げ is used about others, not about yourself.\n" +
            "- Colloquial よさげ (*seems good*) is slang built on this suffix; don't use it in writing.\n\n" +
            "Don't mix it up with **〜ぎみ** (気味, *slightly, a tendency to*), which is tested in the practice below. ぎみ attaches to nouns and verb stems and describes a slight (usually negative) condition or tendency, not an outward look: 風邪ぎみ, 疲れぎみ, 太りぎみ, 遅れぎみ. げ = *looks ~ (emotion)*; ぎみ = *a bit ~ (condition)*.\n\n" +
            "JLPT tip: if the word before the blank is an emotion adjective (さびし, 不満, 得意, 満足) and the sentence describes someone's face/manner, choose げ.",
          see: [],
          index: ["いAげ", "なAげ", "〜たげ", "自信ありげ", "意味ありげ"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{最近|さいきん}{少|すこ}し{太|ふと}り（　）なので、エレベーターを{使|つか}わずに{階段|かいだん}を{上|のぼ}るようにしている。", options: ["げ", "ぎみ"], answer: 1, en: "I've been putting on a bit of weight lately, so I try to take the stairs instead of the elevator.", why: { en: "太り is a verb stem describing a slight tendency → ぎみ. げ doesn't attach to ordinary verb stems (only fixed forms like 〜たげ, ありげ)." } },
                { q: "{合格|ごうかく}の{知|し}らせを{受|う}け{取|と}った{弟|おとうと}は、{得意|とくい}（　）な{顔|かお}で{家族|かぞく}に{報告|ほうこく}した。", options: ["げ", "ぎみ"], answer: 0, en: "When my brother got the news that he'd passed, he told the family with a triumphant look on his face." },
                { q: "{睡眠|すいみん}{不足|ぶそく}（　）の{人|ひと}は、{寝|ね}る{前|まえ}にスマホを{見|み}ないようにしましょう。", options: ["げ", "ぎみ"], answer: 1, en: "People who tend to be short on sleep should avoid looking at their phones before bed." },
                { q: "{一人|ひとり}で{公園|こうえん}のベンチに{座|すわ}っていたおじいさんは、どこかさびし（　）な{様子|ようす}だった。", options: ["げ", "ぎみ"], answer: 0, en: "The old man sitting alone on the park bench looked somehow lonely." },
              ],
            },
          ],
        },
        {
          no: 98,
          pattern: "〜やら〜やら",
          phrase: "{誇|ほこ}らしい**やら**もったいない**やら**",
          stars: 1,
          marks: ["casual"],
          usage: {
            ja: "「AやらBやら」は、「AやBなど」「AたりBたり」と{同|おな}じ{意味|いみ}で、{例|れい}をあげて、いろいろあって{大変|たいへん}だったり{驚|おどろ}いたりした{気持|きも}ちを{表|あらわ}す。どちらかはっきりわからないことを{表|あらわ}す{場合|ばあい}もある。",
            en: "AやらBやら has the same meaning as AやBなど or AたりBたり: it gives examples and expresses the feeling that there were many things going on, so it was hard or surprising. It can also express that you can't tell clearly which of the two it is.",
          },
          forms: ["[V-る] / [いA] / [N] + やら + [V-る] / [いA] / [N] + やら"],
          examples: [
            { ja: "{引|ひ}っ{越|こ}しの{前|まえ}は、{荷造|にづく}り**やら**{住所|じゅうしょ}{変更|へんこう}の{手続|てつづ}き**やら**で、{寝|ね}る{暇|ひま}もなかった。", en: "Before the move, what with packing and doing the change-of-address paperwork, I had no time even to sleep." },
            { ja: "{久|ひさ}しぶりに{会|あ}った{孫|まご}たちは、{走|はし}り{回|まわ}る**やら**{歌|うた}う**やら**で、{家|いえ}の{中|なか}が{大騒|おおさわ}ぎになった。", en: "The grandchildren I hadn't seen in ages ran around, sang and so on — the house was in an uproar." },
            { ja: "{思|おも}いがけず{優勝|ゆうしょう}して、{驚|おどろ}く**やら**うれしい**やら**で、しばらく{言葉|ことば}が{出|で}なかった。", en: "I won unexpectedly, and what with the shock and the joy, I couldn't speak for a while." },
            { ja: "{兄|あに}は{毎晩|まいばん}{遅|おそ}く{帰|かえ}ってくるが、{仕事|しごと}なの**やら**{遊|あそ}びなの**やら**、{家族|かぞく}にもわからない。", en: "My brother comes home late every night, but even the family can't tell whether it's work or fun." },
          ],
          deepDive:
            "**AやらBやら** lists two representative items out of a larger, rather messy set: *what with A and B (and all sorts of things)*. The flavor is that there was **a lot going on** — busy, chaotic, overwhelming — or that the speaker is flooded with **mixed emotions**: うれしいやら悲しいやら, 驚くやらあきれるやら.\n\n" +
            "Connection: V-る, い-adjectives and nouns can all be used (荷造りやら掃除やら, 笑うやら泣くやら, 痛いやらかゆいやら). The two parts are often of the same type. Common continuations:\n" +
            "- **〜やら〜やらで** (reason): 仕事やら家事やらで忙しい.\n" +
            "- **〜やら〜やらの + N**: 本やら雑誌やらの山.\n" +
            "- Stand-alone at the end of a sentence with feelings: 悔しいやら情けないやら…\n\n" +
            "Second meaning — uncertainty: やら comes from an old question particle, so **〜のやら〜のやら** means *whether A or B, I can't tell*: 本気なのやら冗談なのやら. The same origin shows in 何やら (*something or other*), どこやら, 誰やら.\n\n" +
            "Compare:\n" +
            "- **〜とか〜とか**: neutral, conversational listing.\n" +
            "- **〜たり〜たり**: neutral listing of actions.\n" +
            "- **〜やら〜やら**: adds the nuance of confusion, burden or emotional overload. You wouldn't use it for a calm, orderly list (✗趣味は読書やら映画やらです sounds odd).\n\n" +
            "The book marks it as a conversational pattern, but it also appears in light essays (like this chapter's). JLPT tip: a pair of contrasting feelings followed by 、or … strongly suggests やら〜やら.",
          see: [],
          index: ["〜やら〜やら", "〜のやら〜のやら"],
        },
        {
          no: 99,
          pattern: "〜かと{思|おも}うと／〜かと{思|おも}ったら",
          phrase: "{揺|ゆ}れた**かと{思|おも}うと**",
          stars: 3,
          marks: [],
          usage: {
            ja: "{状況|じょうきょう}が{急|きゅう}に{変|か}わったことを{強調|きょうちょう}して{説明|せつめい}するときに{使|つか}う。{自分|じぶん}のことを{説明|せつめい}するときには{使|つか}わない。",
            en: "Used to emphasize that a situation suddenly changed. It is not used to describe your own actions.",
          },
          forms: ["[V-た] + かと{思|おも}うと", "[V-た] + かと{思|おも}ったら"],
          examples: [
            { ja: "{赤|あか}ちゃんは{大声|おおごえ}で{泣|な}き{出|だ}した**かと{思|おも}うと**、すぐにまたにこにこ{笑|わら}い{始|はじ}めた。", en: "The baby burst out crying, and then almost immediately started smiling again." },
            { ja: "{遠|とお}くで{雷|かみなり}が{鳴|な}った**かと{思|おも}うと**、{激|はげ}しい{雨|あめ}が{降|ふ}ってきた。", en: "No sooner had thunder rumbled in the distance than a heavy rain began to fall." },
            { ja: "{部長|ぶちょう}は{会議室|かいぎしつ}に{入|はい}った**かと{思|おも}ったら**、{書類|しょるい}を{持|も}ってすぐに{出|で}てきた。", en: "The department manager had just gone into the meeting room when he came right back out with some documents." },
            { ja: "{新|あたら}しいスマホが{発売|はつばい}された**かと{思|おも}ったら**、もう{次|つぎ}のモデルのうわさが{出|で}ている。", en: "A new smartphone has only just come out, and there are already rumors about the next model." },
          ],
          deepDive:
            "**V-たかと思うと / V-たかと思ったら** describes a rapid switch: *A happened and then, almost immediately, B*. Literally: *just as I thought A had happened…*. It emphasizes the speed and often the surprise of the change, so it's frequent with sudden weather, sounds, moods and restless people.\n\n" +
            "Key restrictions:\n" +
            "- It describes things the speaker **observes** — other people or events. You can't use it for your own deliberate actions: ✗私は家に帰ったかと思うと、すぐ寝た.\n" +
            "- The second half is a fact (past, or present for habits), not an intention, request or command: ✗雨がやんだかと思うと、出かけよう.\n" +
            "- The two events usually contrast or are unexpected in sequence (泣いた → 笑った, 静かになった → また騒ぎ出した).\n\n" +
            "かと思うと vs かと思ったら: nearly the same. かと思ったら is a little more conversational and more often carries the speaker's surprise; かと思うと can also describe alternating states (笑ったかと思うと泣き、泣いたかと思うと笑う). The variant **かと思えば** is similar.\n\n" +
            "Don't confuse it with the look-alike meaning of a mistaken assumption: 〜（の）かと思ったら, *I thought ~, but actually…*: 寝ているのかと思ったら、勉強していた. Here the form before か is a plain form with の, not necessarily V-た, and it expresses a mistaken assumption rather than a quick change.\n\n" +
            "Compare **〜か〜ないかのうちに** (#96): focuses on B starting before A is even complete; かと思うと focuses on the sudden change after A. **〜たとたん** (N3) is close but often about accidental results.\n\n" +
            "JLPT tip: in completion questions, reject options that express the speaker's wish, a judgment about a person, or a natural consequence (お腹がいっぱいになった); the right answer is a new, surprising development.",
          see: [96],
          index: ["Vたかと思うと", "Vたかと思ったら", "〜かと思えば"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{弟|おとうと}は{宿題|しゅくだい}を{始|はじ}めたかと{思|おも}ったら、（　）。", options: ["もうゲームをしている", "宿題が得意なようだ"], answer: 0, en: "My brother had only just started his homework, and he's already playing games.", why: { en: "The second half must be a sudden new development, not a judgment about him." } },
                { q: "{夕方|ゆうがた}、{空|そら}が{急|きゅう}に{暗|くら}くなったかと{思|おも}うと、（　）。", options: ["早く家に帰りたくなった", "激しい雷雨になった"], answer: 1, en: "In the evening, the sky suddenly went dark, and then a violent thunderstorm broke out.", why: { en: "かと思うと describes an observed change; it can't be followed by the speaker's own feelings or wishes." } },
                { q: "{娘|むすめ}は「{行|い}ってきます」と{家|いえ}を{出|で}たかと{思|おも}ったら、（　）。", options: ["忘れ物を取りに戻ってきた", "学校が楽しいらしい"], answer: 0, en: "My daughter had just said “I'm off!” and left, when she came back to get something she'd forgotten." },
                { q: "{駅前|えきまえ}に{新|あたら}しいカフェができたかと{思|おも}ったら、（　）。", options: ["一度行ってみたいと思う", "3か月でもう閉店してしまった"], answer: 1, en: "A new café had only just opened in front of the station, and it's already closed after three months." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。（{後|うし}ろの「やら」「か」は{書|か}いてあります。）", en: "Choose the word that fills each blank. (Where a pattern repeats, the second やら / か is already given.)" },
        bank: ["げ", "やら", "かと思ったら", "か"],
        items: [
          { q: "{引|ひ}っ{越|こ}しの{準備|じゅんび}で、{荷造|にづく}り＿＿{役所|やくしょ}の{手続|てつづ}きやらで、{休|やす}む{暇|ひま}もなかった。", answer: "やら", en: "Getting ready for the move, what with packing and paperwork at the city office, I had no time to rest." },
          { q: "やっと{春|はる}になった＿＿、もう{夏|なつ}のような{暑|あつ}さだ。{季節|きせつ}の{変|か}わり{方|かた}が{早|はや}すぎる。", answer: "かと思ったら", en: "It had only just become spring, and already it's as hot as summer. The seasons are changing too fast." },
          { q: "{面接|めんせつ}を{終|お}えて{出|で}てきた{友人|ゆうじん}は、{自信|じしん}あり＿＿な{表情|ひょうじょう}をしていた。", answer: "げ", en: "My friend came out of the interview with a confident look on his face." },
          { q: "チャイムが{鳴|な}る＿＿{鳴|な}らないかのうちに、{生徒|せいと}たちは{教室|きょうしつ}を{飛|と}び{出|だ}した。", answer: "か", en: "The bell had barely rung when the students rushed out of the classroom." },
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
          { q: "{空|そら}が{急|きゅう}に{暗|くら}くなった（　）、{大粒|おおつぶ}の{雨|あめ}が{降|ふ}り{出|だ}した。", options: ["からには", "かのように", "かと思うと", "にしても"], answer: 2, en: "The sky suddenly went dark, and then big drops of rain started to fall." },
          { q: "あの{人|ひと}とはもう{口|くち}をきく（　）と{思|おも}っていたが、{謝|あやま}られて{結局|けっきょく}{許|ゆる}してしまった。", options: ["わけだ", "べきだ", "まいか", "まい"], answer: 3, en: "I'd resolved never to speak to him again, but he apologized and in the end I forgave him.", why: { en: "〜まい here expresses a firm resolution (I will never ~). まいか is used in VかVまいか (whether or not), which needs the verb twice." } },
          { q: "{彼|かれ}は{宝|たから}くじの1{等|とう}が{当|あ}たった（　）はしゃいでいるが、{実際|じっさい}は3,000{円|えん}{当|あ}たっただけだ。", options: ["わりに", "かのように", "ばかりに", "以上"], answer: 1, en: "He's carrying on as if he'd won first prize in the lottery, but in fact he only won ¥3,000." },
          { q: "{雑誌|ざっし}で{人気|にんき}{店|てん}だと{紹介|しょうかい}されていた（　）、{料理|りょうり}の{味|あじ}はごく{普通|ふつう}だった。", options: ["からこそ", "だけあって", "わりには", "につけ"], answer: 2, en: "For a place that had been featured in a magazine as a popular restaurant, the food tasted pretty ordinary.", why: { en: "だけあって would require a result consistent with the reputation (e.g. delicious). The result falls short of expectations → わりには." } },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "あれだけ{丁寧|ていねい}に{説明|せつめい}したのだから、{彼|かれ}が", after: "。", pieces: ["あるまい", "ことは", "{手順|てじゅん}を", "{間違|まちが}える"], order: [2, 3, 1, 0], star: 2, en: "I explained it so carefully that there's surely no way he'll get the steps wrong." },
          { before: "{兄|あに}は", after: "ので、{小|ちい}さな{虫|むし}を{見|み}ただけで{大声|おおごえ}を{上|あ}げる。", pieces: ["気が", "わりに", "小さい", "体が大きい"], order: [3, 1, 0, 2], star: 2, en: "My older brother is timid for someone so big, so he screams just at the sight of a little bug." },
          { before: "{姉|あね}が", after: "ので、{何|なに}があったのか{聞|き}いてみた。", pieces: ["言いたげな", "何か", "顔を", "している"], order: [1, 0, 2, 3], star: 2, en: "My sister looked as if she wanted to say something, so I asked her what had happened." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[4]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage, think about the overall content, and choose the best option for each of blanks [1]–[4]." },
        title: "{朝|あさ}のジョギング",
        text: [
          "{運動|うんどう}が{苦手|にがて}な{私|わたし}[1]、{毎朝|まいあさ}のジョギングは{最初|さいしょ}、{苦痛|くつう}でしかなかった。{医者|いしゃ}に{勧|すす}められて{始|はじ}めたものの、どうせ{三日坊主|みっかぼうず}で{終|お}わるだろうと{自分|じぶん}でも{思|おも}っていた。",
          "それが{半年|はんとし}も{続|つづ}いているのは、{公園|こうえん}で{毎朝|まいあさ}{見|み}かける70{代|だい}の{男性|だんせい}のおかげだ。{初|はじ}めて{会|あ}ったとき、つえを{持|も}ってゆっくり{歩|ある}く{姿|すがた}を{見|み}て、あの{年|とし}で{走|はし}ることなどできる[2]と{思|おも}っていた。ところがある{朝|あさ}、{私|わたし}の{横|よこ}をのんびり{歩|ある}いていた[3]、{急|きゅう}につえを{置|お}いて{若者|わかもの}のような{速|はや}さで{走|はし}り{出|だ}し、あっという{間|ま}に{見|み}えなくなった。",
          "{今|いま}では、その{男性|だんせい}とあいさつを{交|か}わすのが{毎朝|まいあさ}の{楽|たの}しみだ。{体重|たいじゅう}はまだそれほど{減|へ}っていないが、{朝|あさ}の{空気|くうき}の{中|なか}で{汗|あせ}をかく{気持|きも}ちよさには、{言葉|ことば}では{言|い}い{表|あらわ}せない[4]。",
        ],
        en: [
          "For someone like me who's bad at sports, jogging every morning was nothing but torture at first. I started because my doctor recommended it, but even I assumed I'd give up after a few days.",
          "The reason I've kept it up for half a year is a man in his seventies I see in the park every morning. When I first met him, seeing him walk slowly with a cane, I assumed there was no way he could run at his age. But one morning, he was strolling along beside me when suddenly he set down his cane, took off running as fast as a young man, and was out of sight in no time.",
          "Now exchanging greetings with him is what I look forward to each morning. I haven't lost much weight yet, but there's something indescribable about how good it feels to work up a sweat in the morning air.",
        ],
        blanks: [
          { options: ["について", "にかけては", "にとって", "によって"], answer: 2, why: { en: "〜にとって = from the standpoint of: for me (bad at sports), jogging was torture." } },
          { options: ["はずだ", "まい", "ものがある", "に違いない"], answer: 1, why: { en: "The dismissive など and the following ところが show the writer judged it very unlikely → できるまい (surely can't). はずだ / に違いない would mean the opposite." } },
          { options: ["ばかりに", "かと思ったら", "につけ", "わりに"], answer: 1, why: { en: "A sudden change in someone else's behavior (strolling → suddenly sprinting) → かと思ったら. につけ needs V-る and a recurring feeling; ばかりに marks the cause of a bad result; わりに compares degree." } },
          { options: ["ものか", "にすぎない", "ものがある", "わけだ"], answer: 2, why: { en: "A feeling the writer can't quite put into words → 言い表せないものがある (there's something indescribable about it)." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 1", en: "Q4 Listening (1)" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}では、まず{質問|しつもん}を{聞|き}いてください。そのあと、{選択肢|せんたくし}を{読|よ}んでください。それから{話|はなし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the question, then read the options. Then listen to the conversation and choose the best answer from 1–4." },
        items: [
          {
            question: "{女|おんな}の{人|ひと}は、2{種類|しゅるい}のバラは{何|なに}がいちばん{違|ちが}うと{言|い}っていますか。",
            script: [
              { sp: "{女|おんな}", v: "f", ja: "ねえ、このバラ、「つき」と「ほし」っていう2{種類|しゅるい}があるんだって。どっちにする？" },
              { sp: "{男|おとこ}", v: "m", ja: "{色|いろ}も{花|はな}の{大|おお}きさも、ほとんど{同|おな}じに{見|み}えるけど。{値段|ねだん}も{同|おな}じだし。" },
              { sp: "{女|おんな}", v: "f", ja: "うん。{香|かお}りも{大差|たいさ}ないって、{店員|てんいん}さんが{言|い}ってた。いちばん{違|ちが}うのは{育|そだ}て{方|かた}なんだって。" },
              { sp: "{女|おんな}", v: "f", ja: "「つき」は、{水|みず}やりを1{日|にち}{忘|わす}れただけで{元気|げんき}がなくなるらしいの。でも「ほし」は、1{週間|しゅうかん}くらい{水|みず}をやらなくても、まず{枯|か}れることはあるまいって。" },
              { sp: "{男|おとこ}", v: "m", ja: "それなら、{出張|しゅっちょう}が{多|おお}いうちには「ほし」のほうがよさそうだね。" },
            ],
            en: [
              "Hey, it says this rose comes in two varieties, “Tsuki” and “Hoshi”. Which shall we get?",
              "They look almost the same — the color, and the size of the flowers. And they're the same price.",
              "Yeah. The shop assistant said the scent isn't very different either. Apparently the biggest difference is how you look after them.",
              "“Tsuki” apparently starts drooping if you forget to water it for even a day. But “Hoshi”, she said, is very unlikely to wither even if you don't water it for about a week.",
              "In that case, “Hoshi” seems better for us, since we travel for work a lot.",
            ],
            options: ["{花|はな}の{色|いろ}", "{花|はな}の{大|おお}きさ", "{香|かお}りの{強|つよ}さ", "{育|そだ}て{方|かた}"],
            answer: 3,
            why: { en: "Color, size, price and scent are all said to be (almost) the same; the woman says いちばん違うのは育て方." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 2", en: "Q4 Listening (2)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、まず{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the sentence. Then listen to the responses and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{山田|やまだ}さん、{会議室|かいぎしつ}に{入|はい}ったかと{思|おも}ったら、すぐ{出|で}てきたね。" }],
            options: ["{何|なに}か{忘|わす}れ{物|もの}でもしたのかな。", "{会議|かいぎ}、ずいぶん{長引|ながび}いてるみたいだね。", "じゃあ、{私|わたし}も{入|はい}ってみようかな。"],
            answer: 0,
            en: ["Yamada-san went into the meeting room and came right back out, didn't he?", "Maybe he forgot something.", "The meeting seems to be dragging on quite a bit.", "Well then, maybe I'll go in too."],
            why: { en: "He left almost immediately, so guessing he forgot something is the natural reaction; a long meeting contradicts what was said." },
          },
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "あの{店|みせ}のケーキ、{値段|ねだん}のわりには{小|ちい}さいですね。" }],
            options: ["ええ、{安|やす}いのにたっぷりありますね。", "そうですね、ちょっと{物足|ものた}りないかも。", "{大|おお}きいから、{二人|ふたり}で{分|わ}けましょう。"],
            answer: 1,
            en: ["The cakes at that shop are small for the price, aren't they?", "Yes, they're cheap but there's plenty.", "True, they might be a bit unsatisfying.", "They're big, so let's share one between us."],
          },
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{部長|ぶちょう}、さっき{何|なに}か{言|い}いたげだったけど、どうしたんだろう。" }],
            options: ["{部長|ぶちょう}ならもう{全部|ぜんぶ}{話|はな}してくれたよ。", "さっきの{報告|ほうこく}に{不満|ふまん}があったのかもね。", "うん、はっきり{言|い}ってくれて{助|たす}かったね。"],
            answer: 1,
            en: ["The manager looked like he wanted to say something just now — I wonder what's up.", "The manager already told us everything.", "Maybe he wasn't happy with the report earlier.", "Yeah, it was helpful that he said it clearly."],
            why: { en: "言いたげ = looked as if he wanted to say something (but didn't). Options 1 and 3 assume he actually spoke." } },
        ],
      },
    },
  ],
});
