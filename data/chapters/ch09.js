N2.register({
  id: 9,
  genre: { ja: "{友達|ともだち}{同士|どうし}の{会話|かいわ}", en: "A Conversation with a Friend" },
  title: { ja: "{食|た}べ{放題|ほうだい}", en: "All-You-Can-Eat" },
  canDo: [
    { ja: "{身近|みぢか}な{話題|わだい}について、{友達|ともだち}と{自然|しぜん}な{表現|ひょうげん}を{使|つか}って{話|はな}せる。", en: "Use natural expressions to talk to a friend about a familiar topic." },
  ],
  parts: [
    // ───────────────────────────── Part (1) ─────────────────────────────
    {
      label: "(1)",
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{翔太|しょうた}", v: "m", ja: "{先週|せんしゅう}{行|い}ったホテルのランチビュッフェ、よかったよ。とにかく{料理|りょうり}の{種類|しゅるい}が{多|おお}い**のなんのって**、{和食|わしょく}からカレー、ピザ、スイーツまで{全部|ぜんぶ}そろってて、{選|えら}ぶだけで{疲|つか}れちゃった。", en: "The hotel lunch buffet I went to last week was great. The variety of dishes was just insane — everything from Japanese food to curry, pizza and sweets. I got tired just choosing." },
          { sp: "{翔太|しょうた}", v: "m", ja: "{特|とく}にオムレツ。シェフが{目|め}の{前|まえ}で{作|つく}ってくれるから、いつでも{焼|や}き**たて**が{食|た}べられるんだ。", en: "Especially the omelets. The chef makes them right in front of you, so you can always get one fresh off the pan." },
          { sp: "{由佳|ゆか}", v: "f", ja: "いいなあ。{私|わたし}も{行|い}きたい！", en: "Lucky you. I want to go too!" },
          { sp: "{翔太|しょうた}", v: "m", ja: "じゃあ、{今度|こんど}{一緒|いっしょ}に{行|い}こうよ。ぼく、その{日|ひ}は{朝|あさ}から{何|なに}も{食|た}べないで、おなかを{空|から}っぽにしていくつもり。", en: "Then let's go together next time. On that day I'm going to eat nothing from the morning and go with a completely empty stomach." },
          { sp: "{由佳|ゆか}", v: "f", ja: "{翔太|しょうた}**ったら**、また{極端|きょくたん}なこと{言|い}って。{人|ひと}の{体|からだ}って、{食|た}べ{始|はじ}めて20{分|ぷん}くらいたつと、{脳|のう}が「おなかいっぱい」って{感|かん}じる**ようになっている**んだよ。", en: "Oh, Shota, there you go saying extreme things again. The human body is built so that about 20 minutes after you start eating, your brain feels “I'm full.”" },
          { sp: "{翔太|しょうた}", v: "m", ja: "へえ、そうなんだ。それでこの{前|まえ}、デザートまでたどり{着|つ}けなかった**わけだ**。{最初|さいしょ}にサラダをのんびり{食|た}べてたら、{急|きゅう}におなかいっぱいになっちゃって。", en: "Huh, really? So that's why I never made it to dessert last time. I was taking my time with salad at first, and suddenly I was full." },
          { sp: "{由佳|ゆか}", v: "f", ja: "でしょ？ それに、おなかがすきすぎた{状態|じょうたい}で{行|い}くと、たくさん{食|た}べられる**どころか**、{気持|きも}ち{悪|わる}くなって{全然|ぜんぜん}{入|はい}らないこともあるんだから。", en: "See? Besides, if you go when you're way too hungry, far from eating a lot, you can end up feeling sick and not being able to get anything down at all." },
          { sp: "{由佳|ゆか}", v: "f", ja: "{一日|いちにち}{何|なに}も{食|た}べないで{行|い}こうなんて{考|かんが}えてる**ようじゃ**、{元|もと}は{取|と}れないよ。", en: "If you're thinking of going without eating anything all day, you'll never get your money's worth." },
        ],
      },
      points: [
        {
          no: 78,
          pattern: "〜のなんのって",
          phrase: "{種類|しゅるい}が{多|おお}い**のなんのって**",
          stars: 1,
          marks: ["casual"],
          usage: {
            ja: "「{言葉|ことば}ではうまく{説明|せつめい}できないほど、とても〜だ」という{気持|きも}ちを{表|あらわ}す。",
            en: "Expresses the feeling that something is “so extremely ~ that I can't explain it well in words.”",
          },
          forms: ["[Pl] + のなんのって"],
          formNotes: [
            {
              ja: "[なA]は「だ」をとって「な」をつける（{静|しず}かなのなんのって）。[N]には{使|つか}わない。",
              en: "With な-adjectives, drop だ and add な (静かなのなんのって). It is not used with nouns.",
            },
          ],
          examples: [
            { ja: "{昨日|きのう}の{雷|かみなり}、{音|おと}が{大|おお}きい**のなんのって**、{犬|いぬ}がベッドの{下|した}から{出|で}てこなかったよ。", en: "The thunder yesterday was so unbelievably loud that the dog wouldn't come out from under the bed." },
            { ja: "{初|はじ}めてのスピーチ、{緊張|きんちょう}した**のなんのって**。{手|て}がずっと{震|ふる}えてたよ。", en: "My first speech — I was so nervous you wouldn't believe it. My hands were shaking the whole time." },
            { ja: "A：{北海道|ほっかいどう}の{冬|ふゆ}、どうだった？\nB：{寒|さむ}い**のなんのって**、まつげまで{凍|こお}ったよ。", en: "A: How was winter in Hokkaido?\nB: Cold beyond words — even my eyelashes froze." },
            { ja: "{引|ひ}っ{越|こ}しの{日|ひ}は{大変|たいへん}だった**のなんのって**、{夜中|よなか}までかかっても{荷物|にもつ}が{片付|かたづ}かなかった。", en: "Moving day was a nightmare — even working until midnight, we couldn't get everything put away." },
            { ja: "あの{店|みせ}の{店員|てんいん}さん、{親切|しんせつ}な**のなんのって**、{駅|えき}まで{道|みち}を{案内|あんない}してくれたんだ。", en: "The clerk at that shop was ridiculously kind — she walked me all the way to the station." },
          ],
          deepDive:
            "**〜のなんのって** is a lively, spoken way to say *so ~ you wouldn't believe it*. Literally it is something like *“~, or what, or whatever you want to call it…”* — the speaker gives up on finding the right words, which signals that the degree was extreme.\n\n" +
            "Typical shape: **[adjective/verb] + のなんのって, [concrete result/episode]**. The second half usually illustrates *how* extreme it was: 痛いのなんのって、声も出なかった. The sentence can also simply stop after のなんのって, leaving the listener to imagine: 驚いたのなんのって。\n\n" +
            "- It attaches to the plain form of い-adjectives, な-adjectives (with な) and verbs (often V-た: 驚いたのなんのって, 疲れたのなんのって).\n" +
            "- It does **not** follow nouns: ✗人気なのなんのって is avoided; say 人気があるのなんのって.\n" +
            "- It usually describes the speaker's own experience or impression, often something negative or overwhelming (痛い, うるさい, 寒い, 疲れた), but positive things work too (おいしいのなんのって).\n\n" +
            "Register: strictly casual. In an essay or business email use とても／非常に or 〜ほど／〜くらい: 言葉にできないほど寒かった.\n\n" +
            "Compare **〜といったらない** (*it's indescribably ~*), which is similar but a bit more literary. JLPT tip: if a blank comes right after an adjective and the rest of the sentence gives an exaggerated consequence in casual speech, のなんのって is a strong candidate.",
          see: [],
          index: ["〜のなんのって", "いAのなんのって", "なAなのなんのって"],
        },
        {
          no: 79,
          pattern: "〜たて",
          phrase: "{焼|や}き**たて**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜」が{終|お}わって、「〜」になったばかりの{状態|じょうたい}だと{言|い}うときに{使|つか}う。",
            en: "Used to say that something has only just been done, or has only just reached a state — “freshly ~ / newly ~”.",
          },
          forms: ["[V-~~ます~~] + たて"],
          formNotes: [
            {
              ja: "「{作|つく}る・できる・{焼|や}く・{炊|た}く・なる」などの{動詞|どうし}といっしょに{使|つか}われることが{多|おお}い。",
              en: "It is mostly used with verbs like 作る (make), できる (be finished), 焼く (bake/grill), 炊く (cook rice) and なる (become).",
            },
          ],
          examples: [
            { ja: "{炊|た}き**たて**のご{飯|はん}に{生卵|なまたまご}をかけて{食|た}べるのが{好|す}きだ。", en: "I love eating freshly cooked rice with a raw egg on top." },
            { ja: "{社会人|しゃかいじん}になり**たて**のころは、{敬語|けいご}がうまく{使|つか}えなくて{苦労|くろう}した。", en: "When I had just started working, I struggled because I couldn't use keigo properly." },
            { ja: "A：このクッキー、まだ{温|あたた}かいね。\nB：うん、でき**たて**をもらってきたんだ。", en: "A: These cookies are still warm.\nB: Yeah, I got them straight out of the oven." },
            { ja: "{注意|ちゅうい}：ペンキ{塗|ぬ}り**たて**。{触|さわ}らないでください。", en: "Caution: wet paint. Please do not touch." },
            { ja: "{覚|おぼ}え**たて**の{日本語|にほんご}を{使|つか}ってみたくて、{店員|てんいん}さんに{話|はな}しかけた。", en: "I wanted to try out the Japanese I'd just learned, so I started talking to the shop clerk." },
          ],
          deepDive:
            "**〜たて** attaches to the ます-stem and means *just ~ed, freshly ~ed*. It usually works as a noun, so it is followed by の + noun (焼きたてのパン) or だ／です (このパンは焼きたてです).\n\n" +
            "Where you meet it:\n" +
            "- **Food**: 焼きたて, 炊きたて, 揚げたて, 搾りたて, 取れたて (freshly harvested), いれたて (freshly brewed), できたて, 作りたて.\n" +
            "- **New status**: 社会人になりたて, 結婚したて, 免許を取りたて — the person is still a beginner.\n" +
            "- **Signs**: ペンキ塗りたて *wet paint*.\n\n" +
            "The feeling is usually positive (freshness), but with people it can hint at inexperience: 入社したての新人 *a brand-new recruit*.\n\n" +
            "Contrast with neighbors:\n" +
            "- **〜かけ** = *half-done, started but not finished*: 読みかけの本, 食べかけのケーキ. たて is *just finished*; かけ is *not finished yet*. This pair is a classic test item.\n" +
            "- **V-たばかり** (N4) can follow almost any verb and is a full clause: 昨日買ったばかりの傘. たて is limited to a small set of verbs: ✗行きたて sounds wrong, and 買いたて is heard only colloquially (買ったばかり is the standard way).\n\n" +
            "Common mistake: attaching たて to the dictionary form (✗焼くたて) or to the た-form (✗焼いたて). Always use the stem: 焼き＋たて.",
          see: [],
          index: ["V-ますたて", "〜たての + N", "焼きたて", "できたて"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "A：このお{餅|もち}、すごくやわらかいね。\nB：うん、つき（　）なんだって。", options: ["かけ", "たて"], answer: 1, en: "A: This mochi is really soft.\nB: Yeah, apparently it was just pounded." },
                { q: "A：その{本|ほん}、もう{読|よ}み{終|お}わった？\nB：ううん、まだ{読|よ}み（　）なんだ。{半分|はんぶん}くらいかな。", options: ["かけ", "たて"], answer: 0, en: "A: Have you finished that book?\nB: No, I'm still partway through. About halfway, I guess.", why: { en: "The book is unfinished, so 読みかけ (half-read) — たて would mean “just finished reading”." } },
                { q: "{塗|ぬ}り（　）の{壁|かべ}に{触|さわ}ったら、{手|て}が{真|ま}っ{白|しろ}になった。", options: ["たて", "かけ"], answer: 0, en: "I touched the freshly painted wall and my hands turned completely white." },
                { q: "{机|つくえ}の{上|うえ}に{食|た}べ（　）のサンドイッチが{置|お}いてあるけど、{誰|だれ}の？", options: ["たて", "かけ"], answer: 1, en: "There's a half-eaten sandwich on the desk — whose is it?" },
              ],
            },
          ],
        },
        {
          no: 80,
          pattern: "〜ったら",
          phrase: "{翔太|しょうた}**ったら**",
          stars: 1,
          marks: ["regret", "casual"],
          usage: {
            ja: "{家族|かぞく}や{友達|ともだち}など{身近|みぢか}な{相手|あいて}について、{批判的|ひはんてき}なこと（あきれた{気持|きも}ち・{不満|ふまん}）を{言|い}いたいときに{使|つか}う。",
            en: "Used when you want to say something critical about someone (or something) close to you, such as family or friends — expressing exasperation or mild annoyance.",
          },
          forms: ["[N] + ったら"],
          examples: [
            { ja: "うちの{父|ちち}**ったら**、{眼鏡|めがね}を{頭|あたま}にのせたまま{眼鏡|めがね}を{探|さが}してるのよ。", en: "My dad, honestly — he's looking for his glasses while they're sitting on his head." },
            { ja: "{妹|いもうと}**ったら**、{私|わたし}のワンピースを{勝手|かって}に{着|き}て{出|で}かけちゃったの。", en: "My little sister went out wearing my dress without even asking!" },
            { ja: "A：このプリンター**ったら**、{急|いそ}いでいるときに{限|かぎ}って{紙|かみ}が{詰|つ}まるんだから。\nB：そろそろ{新|あたら}しいのにしたら？", en: "A: This printer! It always jams just when I'm in a hurry.\nB: Maybe it's time to get a new one?" },
            { ja: "{田中|たなか}さん**ったら**、また{傘|かさ}を{電車|でんしゃ}に{忘|わす}れてきたんだって。", en: "Tanaka left his umbrella on the train again, can you believe it." },
          ],
          plus: [
            {
              pattern: "〜ってば",
              marks: ["regret", "casual"],
              usage: {
                ja: "「[N] + ってば」も「ったら」と{同|おな}じように、{身近|みぢか}な{人|ひと}への{批判|ひはん}やあきれた{気持|きも}ちを{表|あらわ}す。",
                en: "N + ってば is used in the same way as ったら, to express criticism of, or exasperation with, someone close to you.",
              },
              forms: ["[N] + ってば"],
              examples: [
                { ja: "{兄|あに}**ってば**、いつも{私|わたし}のお{菓子|かし}を{黙|だま}って{食|た}べるんだから。", en: "My brother always eats my snacks without saying a word — typical." },
                { ja: "うちの{母|はは}**ってば**、スマホの{使|つか}い{方|かた}を{毎日|まいにち}{同|おな}じことばかり{聞|き}いてくるのよ。", en: "My mom asks me the same question about how to use her smartphone every single day." },
                { ja: "{部長|ぶちょう}**ってば**、{会議|かいぎ}が{終|お}わる5{分|ふん}{前|まえ}に{新|あたら}しい{話|はなし}を{始|はじ}めるんだよ。", en: "Our manager starts a brand-new topic five minutes before the meeting is supposed to end." },
              ],
            },
          ],
          deepDive:
            "**Nったら** (and its twin **Nってば**) puts a person or thing in the spotlight and signals *“honestly, that ~…!”* — a mixture of exasperation, complaint and, often, affection. It is the sort of thing you say about your own family, friends, pets, coworkers or even your appliances: うちの犬ったら…, このパソコンったら….\n\n" +
            "Key points:\n" +
            "- It replaces the topic marker は: 弟ったら全部食べちゃった ≈ 弟は（困ったことに）全部食べちゃった.\n" +
            "- The target is someone **close** to the speaker. Using it about a superior to their face would be rude; complaining about 部長ったら to a colleague is fine.\n" +
            "- It can be said directly to the person, often with a gentle scolding tone: もう、お父さんったら！\n" +
            "- It is mostly used by women and in family talk, but anyone can use it in casual speech.\n\n" +
            "Don't confuse it with the conditional **〜たら** or with **〜といったら** (*speaking of ~ / when it comes to ~*, e.g. 京都といったら寺だ). ったら here follows a noun directly and carries emotion, not a condition.\n\n" +
            "**ってば** has one more common use: repeating something with irritation — だから、行かないってば！ (*I told you I'm not going!*). In the Plus box, though, it is the same *N + ってば* complaint pattern as ったら.\n\n" +
            "JLPT tip: when a casual sentence starts with a person/thing and is followed by a complaint about their behavior, ったら／ってば fits the blank.",
          see: [],
          index: ["Nったら", "Nってば"],
        },
        {
          no: 81,
          pattern: "〜ようになっている",
          phrase: "{感|かん}じる**ようになっている**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「{泥棒|どろぼう}が{窓|まど}を{割|わ}ると{警報|けいほう}が{鳴|な}るようになっている」のように、{機械|きかい}のしくみや{体|からだ}のメカニズムなどで、{何|なに}かをしたり{何|なに}かが{起|お}こったりすると、{自動的|じどうてき}に{次|つぎ}のことが{起|お}こると{説明|せつめい}するときに{使|つか}う。",
            en: "Used to explain that, in a mechanical system or a bodily mechanism, when something is done or happens, the next thing happens automatically — e.g. “it's set up so that an alarm goes off if a burglar breaks a window.”",
          },
          forms: ["[V-る] + ようになっている", "[V-ない] + ようになっている"],
          examples: [
            { ja: "この{電気|でんき}ポットは、お{湯|ゆ}がわくと{自動的|じどうてき}に{電源|でんげん}が{切|き}れる**ようになっている**。", en: "This electric kettle is designed to switch off automatically when the water boils." },
            { ja: "{目|め}にごみが{入|はい}ると、{涙|なみだ}が{出|で}てそれを{流|なが}す**ようになっています**。", en: "When dust gets in your eye, tears come out and wash it away — that's how the body works." },
            { ja: "この{駐車場|ちゅうしゃじょう}は、{料金|りょうきん}を{払|はら}わないとバーが{上|あ}がらない**ようになっています**。", en: "In this parking lot, the barrier won't lift unless you pay." },
            { ja: "{最近|さいきん}のエレベーターは、{地震|じしん}を{感|かん}じると{近|ちか}くの{階|かい}に{止|と}まる**ようになっている**そうだ。", en: "Apparently modern elevators are designed to stop at the nearest floor when they detect an earthquake." },
            { ja: "このアプリは、{3回|さんかい}パスワードを{間違|まちが}えるとロックされる**ようになっています**のでご{注意|ちゅうい}ください。", en: "Please note that this app is set to lock if you enter the wrong password three times." },
          ],
          deepDive:
            "**〜ようになっている** describes *how something is built or set up to work*: given condition A, result B happens automatically. You'll hear it in product explanations, museum guides, science talk and when friends explain how something works.\n\n" +
            "Typical frame: **[A]と／[A]たら, [B] ようになっている**. The subject is a machine, system, rule-like mechanism or the body — not a person's decision.\n\n" +
            "Contrast with the ように family (see the ～ように list on p.226):\n" +
            "- **〜ようにしている** = a person's conscious habit/effort: 毎日野菜を食べるようにしている *I make a point of eating vegetables*. If a human is deliberately doing it, it's ようにしている.\n" +
            "- **〜ようになる** = a change over time (*come to ~*): 泳げるようになった.\n" +
            "- **〜ことになっている** = a rule or official arrangement: 社員は8時に出社することになっている. It's about decisions/regulations, whereas ようになっている is about mechanisms.\n\n" +
            "Learner trap: 毎朝ストレッチをするようになっています ✗ → ようにしています ✓ (it's your effort, not a mechanism). Conversely この金庫はふたを閉めるとロックされるようにしています sounds like *I* am doing it; use ようになっています.\n\n" +
            "The negative version **V-ないようになっている** is common for safety features: 子どもが開けられないようになっている.",
          see: [],
          index: ["Vようになっている", "Vないようになっている"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{洗濯機|せんたくき}は、{洗濯|せんたく}が{終|お}わるとメロディーが{鳴|な}る（　）。", options: ["ようにしています", "ようになっています"], answer: 1, en: "This washing machine plays a melody when the wash is finished." },
                { q: "{夜|よる}はできるだけ11{時|じ}までに{寝|ね}る（　）。", options: ["ようにしています", "ようになっています"], answer: 0, en: "I try to go to bed by 11 p.m. as much as possible.", why: { en: "It is the speaker's own conscious habit, not a mechanism, so ようにしている." } },
                { q: "{人間|にんげん}の{体|からだ}は、{暑|あつ}くなると{汗|あせ}をかいて{体温|たいおん}を{下|さ}げる（　）。", options: ["ようにしています", "ようになっています"], answer: 1, en: "When the human body gets hot, it sweats to lower its temperature." },
                { q: "{体|からだ}のために、{甘|あま}いものはなるべく{食|た}べない（　）。", options: ["ようにしています", "ようになっています"], answer: 0, en: "For my health, I try not to eat sweets as much as possible." },
              ],
            },
          ],
        },
        {
          no: 82,
          pattern: "〜わけだ",
          phrase: "たどり{着|つ}けなかった**わけだ**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「{寒|さむ}いわけだ、{窓|まど}が{開|あ}いているよ」のように、{感|かん}じていたこと（{寒|さむ}い）の{理由|りゆう}（{窓|まど}が{開|あ}いている）がわかって、「やっぱり」「なるほど」と{納得|なっとく}したときに{使|つか}う。{理由|りゆう}がわからないときは「どういうわけか」を{使|つか}う。",
            en: "As in 寒いわけだ、窓が開いているよ (“No wonder it's cold — the window's open”), used when you learn the reason for something you'd noticed and think “ah, I see / that explains it.” When you don't know the reason, use どういうわけか (“for some reason”).",
          },
          forms: ["[Pl] + わけだ", "[なA~~だ~~] な + わけだ", "[N~~だ~~] の + わけだ"],
          formNotes: [
            {
              ja: "「〜というわけだ」の{形|かたち}もある。",
              en: "The form 〜というわけだ is also used.",
            },
          ],
          examples: [
            { ja: "A：{駅前|えきまえ}のパン{屋|や}、{有名|ゆうめい}なシェフの{店|みせ}なんだって。\nB：どうりで、いつも{行列|ぎょうれつ}ができている**わけだ**。", en: "A: The bakery in front of the station is run by a famous chef, apparently.\nB: No wonder there's always a line." },
            { ja: "{部屋|へや}が{暗|くら}い**わけだ**。{電球|でんきゅう}が{一|ひと}つ{切|き}れてるよ。", en: "No wonder the room is dark — one of the bulbs has gone out." },
            { ja: "A：{彼|かれ}、10{年|ねん}もアメリカに{住|す}んでいたそうだよ。\nB：なるほど、{英語|えいご}が{上手|じょうず}な**わけだ**。", en: "A: I heard he lived in America for ten years.\nB: Ah, that explains why his English is so good." },
            { ja: "A：{明日|あした}から{店|みせ}が{改装|かいそう}で1か{月|げつ}{休|やす}みになるんです。\nB：それで{今日|きょう}は{全品|ぜんぴん}{半額|はんがく}という**わけ**ですね。", en: "A: Starting tomorrow the shop will be closed for a month for renovation.\nB: So that's why everything is half price today." },
          ],
          notes: [
            {
              ja: "{理由|りゆう}がわからないときは「どういうわけか」を{使|つか}う。",
              en: "When the reason is unknown, use どういうわけか “for some reason / somehow.”",
              examples: [
                { ja: "どういう**わけ**か、{雨|あめ}の{日|ひ}に{限|かぎ}ってこの{店|みせ}は{混|こ}む。", en: "For some reason, this shop is crowded precisely on rainy days." },
                { ja: "{昨日|きのう}は、どういう**わけ**か{全然|ぜんぜん}{眠|ねむ}れなかった。", en: "For some reason I couldn't sleep at all last night." },
              ],
            },
          ],
          deepDive:
            "**〜わけだ** (★★★) is one of the most useful N2 sentence-enders. In this chapter's use, it expresses **realization + acceptance**: you already noticed a situation (it's cold, he's good at English), then you learn the cause, and the pieces click: *no wonder / that's why / so that explains it*.\n\n" +
            "It often comes with **どうりで** (*no wonder*), **なるほど**, **それで**, **だから**: どうりで高いわけだ.\n\n" +
            "Connection: plain form + わけだ. なA takes な (静かなわけだ). The book gives N + の; in everyday speech you'll most often hear **Nなわけだ** or **Nというわけだ** (学生というわけだ). 〜というわけだ also serves to sum up: つまり、明日は休みというわけだ.\n\n" +
            "Contrast (see the ～わけ list, p.226):\n" +
            "- **はずだ** = expectation based on reasoning *before* confirming: 9時に出たなら、もう着いたはずだ *should have arrived*. わけだ = the result is already known and you've just found the reason.\n" +
            "- **べきだ** = obligation/advice: *should do*. Unrelated in meaning but a standard distractor.\n" +
            "- **わけではない** (#19) = *it's not that ~*; **わけにはいかない** (#57) = *can't (for social/moral reasons)*.\n" +
            "- **わけだ②** (#134) = logical conclusion in explanations (*that's how/why ~*), common in formal writing.\n\n" +
            "Mistake to avoid: using わけだ for your own plans or predictions (✗明日は雨が降るわけだ). Use it when the fact is established and you're connecting it to a reason.",
          see: [19, 57, 134],
          index: ["〜わけだ", "〜というわけだ", "どういうわけか", "どうりで〜わけだ"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいものを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "A：{駅前|えきまえ}の{道|みち}、{今日|きょう}から{工事中|こうじちゅう}なんだって。\nB：ああ、それでバスがこんなに{遅|おく}れている（　）だ。", options: ["わけ", "はず", "べき"], answer: 0, en: "A: I heard the road in front of the station is under construction from today.\nB: Oh, so that's why the bus is so late." },
                { q: "A：{田中|たなか}さん、まだ{来|こ}ないね。\nB：9{時|じ}の{電車|でんしゃ}に{乗|の}ったって{連絡|れんらく}があったから、そろそろ{着|つ}く（　）だよ。", options: ["わけ", "はず", "べき"], answer: 1, en: "A: Tanaka still isn't here.\nB: She messaged that she got on the 9 o'clock train, so she should arrive soon.", why: { en: "It's a prediction based on information, not yet confirmed → はず. わけ is for a known result whose reason you now understand." } },
                { q: "{自分|じぶん}と{違|ちが}う{意見|いけん}にも、もっと{耳|みみ}を{傾|かたむ}ける（　）だ。", options: ["わけ", "はず", "べき"], answer: 2, en: "You should listen more to opinions that differ from your own." },
                { q: "A：この{部屋|へや}、{南向|みなみむ}きなんです。\nB：なるほど、それで{冬|ふゆ}でも{暖|あたた}かい（　）ですね。", options: ["わけ", "はず", "べき"], answer: 0, en: "A: This room faces south.\nB: I see, so that's why it's warm even in winter." },
              ],
            },
          ],
        },
        {
          no: 83,
          pattern: "〜どころか",
          phrase: "{食|た}べられる**どころか**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「AどころかB」の{形|かたち}で、「{雨|あめ}が{降|ふ}るどころか、{雲|くも}ひとつない{天気|てんき}になった」のように、A（{雨|あめ}）ではなく{反対|はんたい}のB（いい{天気|てんき}）だと{強|つよ}く{言|い}う{気持|きも}ちを{表|あらわ}す。また、「{漢字|かんじ}どころかひらがなも{読|よ}めない」のように、A（{漢字|かんじ}が{読|よ}めない）よりもっと{程度|ていど}がすごいB（ひらがなも{読|よ}めない）と{言|い}うときにも{使|つか}う。Aには{相手|あいて}が{言|い}ったことや、{自分|じぶん}が{最初|さいしょ}に{思|おも}ったことなどが{入|はい}ることが{多|おお}い。",
            en: "In the form “A どころか B”, it strongly says that the reality is not A but the opposite, B (e.g. far from raining, it turned out to be a cloudless day). It is also used to say that the reality is B, which goes even further than A (e.g. “I can't read kanji — I can't even read hiragana”). A is often something the other person said or something the speaker first assumed.",
          },
          forms: ["[Pl] + どころか"],
          formNotes: [
            {
              ja: "[なA]と[N]は「だ」をとってつける（{静|しず}かどころか／{漢字|かんじ}どころか）。",
              en: "With な-adjectives and nouns, drop だ (静かどころか, 漢字どころか).",
            },
          ],
          examples: [
            { ja: "A：{温泉|おんせん}でゆっくりできた？\nB：ゆっくり**どころか**、{団体|だんたい}{客|きゃく}がいて{大騒|おおさわ}ぎだったよ。", en: "A: Did you get to relax at the hot spring?\nB: Relax? Far from it — there was a tour group and it was total chaos." },
            { ja: "ダイエットのつもりで{始|はじ}めた{水泳|すいえい}だけど、おなかがすいて、やせる**どころか**{太|ふと}ってしまった。", en: "I started swimming to lose weight, but it made me hungry, and far from getting thinner, I put on weight." },
            { ja: "{入学|にゅうがく}したばかりのころは、{友達|ともだち}を{作|つく}る**どころか**、{教室|きょうしつ}の{場所|ばしょ}もわからなかった。", en: "When I had just started school, forget making friends — I didn't even know where the classrooms were." },
            { ja: "A：おばあさん、お{元気|げんき}？\nB：{元気|げんき}**どころか**、90{歳|さい}なのに{毎朝|まいあさ}5キロも{歩|ある}いてるよ。", en: "A: Is your grandmother well?\nB: Well? She's more than that — she's 90 and still walks 5 km every morning." },
            { ja: "{今月|こんげつ}は{忙|いそが}しくて、{旅行|りょこう}**どころか**{近所|きんじょ}の{公園|こうえん}に{行|い}く{時間|じかん}もない。", en: "I'm so busy this month that I don't even have time to go to the park in my neighborhood, let alone travel." },
          ],
          deepDive:
            "**AどころかB** literally means *it's no place for A* — i.e. *far from A / let alone A*. It has two directions, and telling them apart is the key:\n\n" +
            "- **Opposite** (*far from A, actually B*): 暑いどころか寒かった; やせるどころか太った. B contradicts the expectation A.\n" +
            "- **Further in the same direction** (*not just A, even B* / *let alone A, not even B*): 漢字どころかひらがなも読めない; 英語どころか3か国語も話せる. B is a more extreme case, often marked by **も／さえ／まで**.\n\n" +
            "A is typically a word the other person just used (A：暇でしょう？ B：暇どころか…) or the speaker's first assumption, which is why it's so common in conversation.\n\n" +
            "Contrast (see the ～ところ／どころ list, p.223):\n" +
            "- **〜どころじゃない／どころではない** (#38) = *this is no time for ~ / I can't possibly ~*: 忙しくて旅行どころじゃない. It ends the thought; どころか links to a second clause.\n" +
            "- **〜ところだった** (#89) = *almost ~* — only looks similar.\n" +
            "- **〜ばかりか** (*not only… but also*) only goes in the “further” direction and has no “opposite” reading.\n\n" +
            "Common pitfall in exercises: after 〜どころか, B must be **stronger**, not weaker. 10ページどころか1ページも読めなかった ✓ (1 page is easier than 10, and even that was impossible); ✗10ページどころか100ページも読めなかった doesn't escalate logically.",
          see: [38, 89],
          index: ["〜どころか", "NどころかNも〜ない"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "A：{新|あたら}しい{仕事|しごと}、もう{慣|な}れた？\nB：{慣|な}れるどころか、（　）。", options: ["{毎日|まいにち}{失敗|しっぱい}ばかりだよ", "もうすっかり{慣|な}れたよ"], answer: 0, en: "A: Have you gotten used to your new job yet?\nB: Far from it — I mess up every single day." },
                { q: "{熱|ねつ}が{高|たか}くて、{会社|かいしゃ}に{行|い}くどころか（　）に{行|い}くのもつらかった。", options: ["{海外|かいがい}{出張|しゅっちょう}", "{近所|きんじょ}のコンビニ"], answer: 1, en: "My fever was so high that going to work was out of the question — even going to the convenience store nearby was hard.", why: { en: "B must be a more extreme case: if even an easy thing (the nearby store) was hard, work was certainly impossible." } },
                { q: "{彼女|かのじょ}は{英語|えいご}どころか、（　）{話|はな}せるそうだ。", options: ["{簡単|かんたん}なあいさつだけ", "フランス{語|ご}も{中国語|ちゅうごくご}も"], answer: 1, en: "Apparently she can speak not only English but French and Chinese too." },
              ],
            },
          ],
        },
        {
          no: 84,
          pattern: "〜ようでは／〜ようじゃ",
          phrase: "{考|かんが}えてる**ようじゃ**",
          stars: 1,
          marks: ["regret"],
          usage: {
            ja: "{今|いま}の{状態|じょうたい}が{続|つづ}くと、いい{結果|けっか}にならないと{判断|はんだん}して、{批判|ひはん}する{気持|きも}ちを{表|あらわ}す。",
            en: "Expresses a critical judgment that if the current situation continues, the result will not be good — “if you're going to ~ (like this), then …(no good).”",
          },
          forms: ["[V-る] + ようでは／ようじゃ", "[V-ない] + ようでは／ようじゃ"],
          examples: [
            { ja: "{毎朝|まいあさ}{遅刻|ちこく}している**ようじゃ**、アルバイトもクビになっちゃうよ。", en: "If you keep turning up late every morning, you're going to get fired from your part-time job." },
            { ja: "A：{一週間|いっしゅうかん}で{3回|さんかい}も{寝坊|ねぼう}しちゃった。\nB：そんなに{寝坊|ねぼう}している**ようじゃ**、{社会人|しゃかいじん}になってから{困|こま}るよ。", en: "A: I overslept three times this week.\nB: If you keep oversleeping like that, you'll be in trouble once you start working." },
            { ja: "{自分|じぶん}のミスを{人|ひと}のせいにする**ようでは**、リーダーとして{信頼|しんらい}されない。", en: "If you blame others for your own mistakes, you won't be trusted as a leader." },
            { ja: "コピー{一枚|いちまい}{取|と}るのにこんなに{時間|じかん}がかかる**ようじゃ**、{仕事|しごと}にならないよ。", en: "If it takes you this long to make a single copy, you'll never get any work done." },
            { ja: "{説明書|せつめいしょ}を{読|よ}まない**ようでは**、この{機械|きかい}は{安全|あんぜん}に{使|つか}えませんよ。", en: "If you don't read the manual, you can't use this machine safely." },
          ],
          deepDive:
            "**〜ようでは（ようじゃ）** is a conditional with a built-in verdict: *if (you're in a state where) ~, then [bad result]*. The second half is almost always negative — ダメだ, 無理だ, 困る, 〜できない, 〜ないよ, 〜んじゃない？ — so the whole sentence works as a criticism or warning.\n\n" +
            "Structure: [V-る / V-ない / V-ている] + ようでは, [negative evaluation]. A close relative is the standalone scolding **そんなことでは／そんなことじゃ**: そんなことじゃ、合格できないぞ.\n\n" +
            "Register: ようじゃ is conversational (friends, parents to kids, a coach to players); ようでは is neutral-to-formal and common in writing or advice from teachers and bosses. Both carry a critical tone, so don't use them to describe neutral conditions.\n\n" +
            "Contrast (see the ～よう list, p.225):\n" +
            "- **〜ようなら** (N3) = neutral condition: 6時を過ぎるようなら先に行って. No criticism.\n" +
            "- **〜ようがない** (#44) = *there's no way to ~*: 連絡しようがない. Different meaning entirely.\n" +
            "- Plain **〜ては** / **〜では** (…ては困る) is close in feeling; ようでは adds *if it's the case that…*, softening the direct accusation a little.\n\n" +
            "JLPT tip: if the second half is a negative judgment like やっていけない or 〜として失格だ and the first half describes someone's bad habit, choose ようでは／ようじゃ.",
          see: [44],
          index: ["Vようでは", "Vようじゃ", "Vないようでは"],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["のなんのって", "ようになっている", "わけです", "どころか", "ったら", "たて", "ようじゃ"],
        items: [
          { q: "A：{田中|たなか}さん、{昨日|きのう}は{徹夜|てつや}だったそうですよ。\nB：それで{会議|かいぎ}{中|ちゅう}ずっと{眠|ねむ}そうだった＿＿ね。", answer: "わけです", en: "A: I heard Tanaka stayed up all night yesterday.\nB: So that's why he looked sleepy all through the meeting." },
          { q: "{昨日|きのう}の{花火|はなび}{大会|たいかい}、{人|ひと}が{多|おお}い＿＿、{駅|えき}から{会場|かいじょう}まで1{時間|じかん}もかかったよ。", answer: "のなんのって", en: "The crowds at yesterday's fireworks show were unbelievable — it took a whole hour to get from the station to the venue." },
          { q: "この{自動|じどう}ドアは、{人|ひと}が{近|ちか}づくと{開|ひら}く＿＿。", answer: "ようになっている", en: "This automatic door is designed to open when someone approaches." },
          { q: "お{兄|にい}ちゃん＿＿、また{私|わたし}のプリンを{勝手|かって}に{食|た}べたでしょ！", answer: "ったら", en: "Big brother, honestly — you ate my pudding again without asking, didn't you!" },
          { q: "{入社|にゅうしゃ}し＿＿のころは、{電話|でんわ}に{出|で}るだけで{緊張|きんちょう}した。", answer: "たて", en: "When I had just joined the company, I got nervous just answering the phone." },
          { q: "{朝|あさ}ちゃんと{起|お}きられない＿＿、{早番|はやばん}のアルバイトは{無理|むり}だよ。", answer: "ようじゃ", en: "If you can't get up properly in the morning, an early-shift job is out of the question." },
          { q: "A：{週末|しゅうまつ}はゆっくり{休|やす}めた？\nB：{休|やす}む＿＿、{引|ひ}っ{越|こ}しの{手伝|てつだ}いで{前|まえ}より{疲|つか}れたよ。", answer: "どころか", en: "A: Did you get some rest over the weekend?\nB: Rest? Far from it — helping with a move left me more tired than before." },
        ],
      },
    },
    // ───────────────────────────── Part (2) ─────────────────────────────
    {
      label: "(2)",
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{翔太|しょうた}", v: "m", ja: "えっ、じゃあ、どうすればいいの？", en: "Huh? Then what am I supposed to do?" },
          { sp: "{由佳|ゆか}", v: "f", ja: "まず、ご{飯|はん}やパンでおなかをふくらませないこと。それから、{高|たか}そうな{料理|りょうり}を{少|すこ}しずつ{取|と}るの。", en: "First, don't fill yourself up with rice or bread. Then, take the expensive-looking dishes a little at a time." },
          { sp: "{翔太|しょうた}", v: "m", ja: "{少|すこ}しずつ？ {食|た}べ{放題|ほうだい}なんだから、お{上品|じょうひん}**ぶって**ちょこちょこ{取|と}ってもしょうがないよ。{山盛|やまも}りでいかなきゃ。", en: "A little at a time? It's all-you-can-eat — there's no point acting all refined and taking tiny portions. You've got to pile it high." },
          { sp: "{由佳|ゆか}", v: "f", ja: "そう{言|い}う{人|ひと}**に{限|かぎ}って**、{最初|さいしょ}の{一皿|ひとさら}でギブアップするんだよね。", en: "It's always the people who say that who give up after the first plate." },
          { sp: "{由佳|ゆか}", v: "f", ja: "{元|もと}を{取|と}りたいなら、{時間|じかん}を{目|め}いっぱい{使|つか}って、{少|すこ}しずつ{味|あじ}わう**ことだ**よ。", en: "If you want to get your money's worth, the thing to do is use every minute and savor things bit by bit." },
          { sp: "{翔太|しょうた}", v: "m", ja: "やけに{詳|くわ}しいね。{研究|けんきゅう}でもしてるの？", en: "You know an awful lot about this. Have you been doing research or something?" },
          { sp: "{由佳|ゆか}", v: "f", ja: "まあね。{駅前|えきまえ}のホテルのビュッフェ**という**ビュッフェは、もう{制覇|せいは}したから。", en: "Sort of. I've already conquered every single hotel buffet around the station." },
          { sp: "{由佳|ゆか}", v: "f", ja: "でも、{失敗|しっぱい}もあったんだ。{前|まえ}に{友達|ともだち}とケーキバイキングに{行|い}ったとき、{調子|ちょうし}に{乗|の}って{取|と}りすぎちゃって。{残|のこ}すと{追加|ついか}{料金|りょうきん}がかかる{店|みせ}で、{危|あや}うく2,000{円|えん}も{余分|よぶん}に{払|はら}わされる**ところだった**の。", en: "But I've had failures too. Once when I went to an all-you-can-eat cake place with a friend, I got carried away and took too much. It was a place that charges extra if you leave food, and I very nearly got made to pay an extra 2,000 yen." },
          { sp: "{翔太|しょうた}", v: "m", ja: "で、どうなったの？", en: "So what happened?" },
          { sp: "{由佳|ゆか}", v: "f", ja: "{涙目|なみだめ}で{全部|ぜんぶ}{食|た}べたよ。{余分|よぶん}なお{金|かね}を{払|はら}う**くらいなら**、{苦|くる}しくても{食|た}べたほうがずっと**まし**だと{思|おも}って。", en: "I ate it all with tears in my eyes. I figured that rather than pay extra money, it would be much better to eat it, even if it hurt." },
          { sp: "{翔太|しょうた}", v: "m", ja: "さすが。じゃあ、{今度|こんど}は{由佳|ゆか}コーチの{作戦|さくせん}でいこう。{土曜日|どようび}のランチ、{予約|よやく}しとくね。", en: "Impressive. Then next time we'll go with Coach Yuka's strategy. I'll book the Saturday lunch." },
        ],
      },
      points: [
        {
          no: 85,
          pattern: "〜ぶる",
          phrase: "お{上品|じょうひん}**ぶって**",
          stars: 1,
          marks: ["regret"],
          usage: {
            ja: "{本当|ほんとう}はそうではないのに、そのように{見|み}せていることを{表|あらわ}す。",
            en: "Expresses that someone acts as if they were something, although in reality they are not — “putting on airs of ~ / pretending to be ~”.",
          },
          forms: ["[N] + ぶる", "[なA] + ぶる", "[いA~~い~~] + ぶる"],
          formNotes: [
            {
              ja: "「{優等生|ゆうとうせい}・{悪者|わるもの}・{大人|おとな}・{上品|じょうひん}・いい{子|こ}・{偉|えら}い」などの{言葉|ことば}といっしょに{使|つか}う。",
              en: "It is used with words such as 優等生 (model student), 悪者 (bad guy), 大人 (adult), 上品 (refined), いい子 (good kid) and 偉い (important).",
            },
            {
              ja: "「ぶる」は「ぶらない」「ぶって」のように、Iグループの{動詞|どうし}と{同|おな}じ{活用|かつよう}をする。",
              en: "ぶる conjugates like a Group I (godan) verb: ぶらない, ぶって, ぶった.",
            },
          ],
          examples: [
            { ja: "{弟|おとうと}は{彼女|かのじょ}の{前|まえ}だと{大人|おとな}**ぶって**コーヒーをブラックで{飲|の}むけど、{本当|ほんとう}は{苦|にが}いのが{苦手|にがて}なんだ。", en: "My little brother acts all grown-up and drinks his coffee black in front of his girlfriend, but he actually can't stand bitter things." },
            { ja: "A：あの{子|こ}、{親戚|しんせき}が{集|あつ}まるとすぐいい{子|こ}**ぶる**んだよね。\nB：お{年玉|としだま}がもらえるからでしょ。", en: "A: That kid always starts acting like a little angel whenever the relatives get together.\nB: That's because she gets New Year's money." },
            { ja: "{田中|たなか}{先生|せんせい}は{有名|ゆうめい}な{学者|がくしゃ}なのに、ちっとも{偉|えら}**ぶら**ない。", en: "Professor Tanaka is a famous scholar, yet she never acts self-important." },
            { ja: "{物知|ものし}り**ぶって**ごまかすより、わからないときは{素直|すなお}に{聞|き}いたほうがいい。", en: "Rather than acting like a know-it-all to cover up, it's better to just ask honestly when you don't understand." },
            { ja: "{彼|かれ}はクラスでは{悪者|わるもの}**ぶって**いるけど、{本当|ほんとう}は{困|こま}っている{人|ひと}を{放|ほう}っておけない{優|やさ}しい{人|ひと}だ。", en: "He acts like a tough guy in class, but in reality he's a kind person who can't leave anyone in trouble alone." },
          ],
          deepDive:
            "**〜ぶる** turns a noun or adjective into a verb meaning *to put on airs of ~, to act as if one were ~*. The speaker implies the act is fake or unjustified, so the tone is critical or mocking.\n\n" +
            "Common combinations: 大人ぶる, 偉ぶる (偉い → 偉ぶる), 上品ぶる, いい子ぶる, 優等生ぶる, 悪者ぶる, 物知りぶる, 先輩ぶる, 通ぶる (acting like a connoisseur). Many more are possible, but these are the ones you'll actually meet.\n\n" +
            "Grammar:\n" +
            "- It's a godan verb: ぶらない, ぶって, ぶった, ぶっている.\n" +
            "- い-adjectives drop い: 偉い → 偉ぶる. な-adjectives attach directly: 上品ぶる.\n" +
            "- **〜ぶった + N** / **〜ぶったところ** describe manner: 偉ぶったところがない *has no airs*.\n" +
            "- The chapter phrase **〜ぶってもしょうがない** = *there's no point acting ~*.\n\n" +
            "Compare:\n" +
            "- **〜ふりをする** is neutral pretending: 寝たふりをする *pretend to be asleep*. ぶる is about image/status and is judgmental; you can't say ✗寝ぶる.\n" +
            "- **〜ぶり**, as in 久しぶり or 仕事ぶり, is a different suffix entirely.\n" +
            "- **〜がる** (寒がる, 欲しがる) describes someone showing feelings, not faking a status.\n\n" +
            "Register: casual and somewhat negative. Saying 偉ぶらない about someone is actually praise (*down-to-earth*).",
          see: [],
          index: ["Nぶる", "なAぶる", "いAぶる", "偉ぶる", "大人ぶる"],
        },
        {
          no: 86,
          pattern: "〜に{限|かぎ}って",
          phrase: "そう{言|い}う{人|ひと}**に{限|かぎ}って**",
          stars: 1,
          marks: ["regret"],
          usage: {
            ja: "「〜に{限|かぎ}って…」は、「〜の{立場|たちば}の{人|ひと}は{一般的|いっぱんてき}に（…する{傾向|けいこう}がある）」と{批判的|ひはんてき}に{言|い}いたいときに{使|つか}う。",
            en: "〜に限って… is used when you want to say critically that “people of that type / in that position generally tend to …”.",
          },
          forms: ["[N] + に{限|かぎ}って"],
          examples: [
            { ja: "{時間|じかん}にうるさい{人|ひと}**に{限|かぎ}って**、{自分|じぶん}は{遅|おく}れてくる。", en: "It's always the people who are fussy about punctuality who show up late themselves." },
            { ja: "「{簡単|かんたん}だよ」と{言|い}う{人|ひと}**に{限|かぎ}って**、{説明|せつめい}が{下手|へた}なんだよね。", en: "The people who say “It's easy!” are always the worst at explaining it." },
            { ja: "{自信|じしん}がなさそうな{人|ひと}**に{限|かぎ}って**、{実|じつ}はよく{準備|じゅんび}していたりする。", en: "Often it's exactly the people who look unsure of themselves who have actually prepared well." },
            { ja: "{口|くち}では「{節約|せつやく}しなきゃ」と{言|い}う{人|ひと}**に{限|かぎ}って**、コンビニで{無駄|むだ}{遣|づか}いをしている。", en: "It's always the people who go on about needing to save money who waste it at convenience stores." },
          ],
          notes: [
            {
              ja: "「{答|こた}えがわからないときに{限|かぎ}って{先生|せんせい}に{指|さ}される」のように、「〜のときに、{運悪|うんわる}く…」と{言|い}いたいときにも{使|つか}う。",
              en: "It is also used to say “just when ~, unluckily …” (bad luck at the worst moment), as in 答えがわからないときに限って先生に指される (the teacher calls on me precisely when I don't know the answer).",
              examples: [
                { ja: "{傘|かさ}を{持|も}ってこなかった{日|ひ}**に{限|かぎ}って**、{夕方|ゆうがた}から{雨|あめ}が{降|ふ}り{出|だ}す。", en: "It always starts raining in the evening on exactly the day I didn't bring an umbrella." },
                { ja: "{早|はや}く{帰|かえ}りたい{日|ひ}**に{限|かぎ}って**、{急|きゅう}な{仕事|しごと}を{頼|たの}まれる。", en: "On precisely the days I want to go home early, I get handed some urgent job." },
                { ja: "{大事|だいじ}な{電話|でんわ}を{待|ま}っているとき**に{限|かぎ}って**、スマホの{電池|でんち}が{切|き}れる。", en: "Just when I'm waiting for an important call, my phone battery dies." },
              ],
            },
          ],
          deepDive:
            "**Nに限って** narrows the focus to one type of person or one moment and says *precisely that one, of all* — and the thing that happens is annoying or ironic.\n\n" +
            "Two uses covered in this chapter:\n" +
            "- **Tendency of a type of person** (main use): 〜人に限って、… *It's always the people who ~ who …*. The speaker criticizes a pattern: 偉そうに言う人に限って何もしない. The noun is usually a person described by a relative clause (そう言う人, 知らない人, お金持ち).\n" +
            "- **Bad luck at the worst moment** (clip note): 〜ときに限って／〜日に限って／今日に限って. 急いでいるときに限って信号が全部赤 *every light is red precisely when I'm in a hurry*.\n\n" +
            "Don't confuse with the other 限る forms (see the ～に限る／限り list, p.223–224):\n" +
            "- **Nに限り** (#3) = *only N* (notices: 本日に限り半額).\n" +
            "- **Nに限って〜ない** (#3 note) = *N of all people would never ~* (trust-based denial: うちの子に限ってそんなことはしない). This one ends in a negative and defends N; #86 criticizes N.\n" +
            "- **Vかぎり** (#23) = *as long as ~*.\n" +
            "- **Nに限らず** (#72) = *not only N*.\n" +
            "- **〜に限る** (#104) = *~ is the best*.\n\n" +
            "How to tell #86 from the #3 note: look at the ending. If it's a negative *denial* (はずがない, わけがない, ありえない) about someone trusted → #3. If it's a complaint about what *tends to* happen → #86.",
          see: [3, 23, 72, 104],
          index: ["Nに限って", "〜ときに限って", "〜日に限って", "今日に限って"],
        },
        {
          no: 87,
          pattern: "〜ことだ",
          phrase: "{味|あじ}わう**ことだ**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜ことだ」は、「〜すべきだ、〜したほうがいい」という{話者|わしゃ}の{判断|はんだん}を{表|あらわ}す。アドバイスに{使|つか}われることが{多|おお}い。",
            en: "〜ことだ expresses the speaker's judgment that “you should / ought to ~”. It is often used when giving advice.",
          },
          forms: ["[V-る] + ことだ", "[V-ない] + ことだ"],
          examples: [
            { ja: "{風邪|かぜ}を{早|はや}く{治|なお}したかったら、{温|あたた}かくしてゆっくり{寝|ね}る**ことだ**。", en: "If you want to get over your cold quickly, the best thing is to keep warm and get plenty of sleep." },
            { ja: "{面接|めんせつ}で{緊張|きんちょう}しないためには、{何度|なんど}も{練習|れんしゅう}しておく**ことです**よ。", en: "To avoid getting nervous in the interview, you should practice many times beforehand." },
            { ja: "{嫌|いや}なことがあった{日|ひ}は、あまり{考|かんが}えすぎない**ことだ**ね。", en: "On days when something unpleasant happens, it's best not to think about it too much." },
            { ja: "{会話|かいわ}が{上手|じょうず}になりたいなら、{間違|まちが}いを{気|き}にしないでどんどん{話|はな}す**ことです**。", en: "If you want to get better at conversation, don't worry about mistakes — just keep talking." },
          ],
          deepDive:
            "**V-る／V-ない + ことだ** gives advice in the form of a judgment: *the thing to do is ~ / you'd better (not) ~*. It sounds confident and a little authoritative, like an experienced person or someone senior advising a junior.\n\n" +
            "Typical frame: **[goal: 〜たいなら／〜たかったら／〜には／〜ためには], [advice]ことだ**. 合格したいなら毎日単語を覚えることだ.\n\n" +
            "Nuance and register:\n" +
            "- It is directed at the listener (or people in general), not the speaker's own intention.\n" +
            "- Because it's evaluative, using it to a superior can sound presumptuous. To a boss, prefer 〜たほうがいいと思います or 〜てはいかがでしょうか.\n" +
            "- Adding よ／ね (ことだよ, ことですね) softens it in conversation.\n\n" +
            "Contrast with other こと patterns (see the ～こと list, p.221–222):\n" +
            "- **〜こと。** (#8) = written rule/instruction on notices: 9時までに提出すること. No だ, impersonal.\n" +
            "- **〜ものだ** = general truth or social norm: 人の話は最後まで聞くものだ. ことだ = advice for this situation; ものだ = how things (should) generally be.\n" +
            "- **〜べきだ** = obligation; stronger and more moral.\n" +
            "- **〜ことか** (#42) exclamation, **〜ことに** (#40) emotion, **〜ことから** (#62) reason, **〜ことなく** (#20), **〜ないことには** (#110), **〜ことはない** (#49), **〜ないことはない** (#54), **〜たことにする** (#119) — all different.\n\n" +
            "JLPT tip: if the sentence starts with 〜たいなら／〜には and the blank follows a verb in the dictionary or ない form, ことだ is very likely.",
          see: [8, 20, 40, 42, 49, 54, 62, 110, 119],
          index: ["Vことだ", "Vないことだ"],
        },
        {
          no: 88,
          pattern: "〜という〜",
          phrase: "ビュッフェ**という**ビュッフェ",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜という〜」は、「{会場|かいじょう}の{客|きゃく}という{客|きゃく}が{立|た}ち{上|あ}がって{拍手|はくしゅ}した」のように、すべての「〜（{客|きゃく}）」を{表|あらわ}す。「〜」の{部分|ぶぶん}には{同|おな}じ{言葉|ことば}をくり{返|かえ}す。",
            en: "〜という〜 refers to *every single* ~, as in 会場の客という客が立ち上がって拍手した (every last person in the audience stood up and applauded). The same word is repeated in both slots.",
          },
          forms: ["[N] + という + [N]"],
          examples: [
            { ja: "{大雪|おおゆき}で、{駐車場|ちゅうしゃじょう}の{車|くるま}**という**{車|くるま}が{雪|ゆき}に{埋|う}もれてしまった。", en: "Because of the heavy snow, every single car in the parking lot was buried." },
            { ja: "{試験|しけん}の{前|まえ}の{日|ひ}、{図書館|としょかん}の{席|せき}**という**{席|せき}が{学生|がくせい}でうまっていた。", en: "The day before the exam, every seat in the library was taken by students." },
            { ja: "{連休|れんきゅう}{中|ちゅう}は、{観光地|かんこうち}のホテル**という**ホテルが{満室|まんしつ}だった。", en: "During the long holiday, every hotel in the tourist area was fully booked." },
            { ja: "{台風|たいふう}のあと、{窓|まど}**という**{窓|まど}に{葉|は}っぱがはりついていた。", en: "After the typhoon, leaves were stuck to every window." },
          ],
          deepDive:
            "**N という N** repeats a noun to mean *every single N, all the N without exception*. It's emphatic and slightly dramatic — used when the scale is surprising: 家という家がシャッターを閉めていた *every house, without exception, had its shutters closed*.\n\n" +
            "Points to note:\n" +
            "- The **same noun** must appear twice: 木という木, 窓という窓, 道という道. ✗木という植物 doesn't work.\n" +
            "- Usually the noun is a concrete, countable thing (店, 家, 窓, 席, 車, 道, 本). Abstract nouns are rare.\n" +
            "- The predicate often describes a complete, sweeping state: すべて〜ていた, 1つ残らず, 全部. You can reinforce it with 全部／すべて, but not with a word that limits it (✗店という店のいくつかが…, ✗ほとんど).\n" +
            "- It is used both in conversation and in writing (news, novels), so it's not strictly casual.\n\n" +
            "Contrast:\n" +
            "- **Nというのは／Nというもの** — defining or explaining (友達というものは…). Different structure.\n" +
            "- **NというN** with *different* nouns (田中という人) means *a N called ~*. The repetition is what gives the “every” meaning.\n" +
            "- **どの〜も／何もかも** (どの店も閉まっていた) is the neutral way to say the same thing; という is more vivid.\n\n" +
            "JLPT tip: in 問題2 ordering questions, if you see the same noun twice among the pieces plus という, they almost certainly form N+という+N.",
          see: [],
          index: ["NというN"],
        },
        {
          no: 89,
          pattern: "〜ところだった",
          phrase: "{払|はら}わされる**ところだった**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜ところだった」は、「もう{少|すこ}しで{階段|かいだん}から{落|お}ちるところだった」のように、「〜の{状況|じょうきょう}になりそうだったが、{実際|じっさい}にはそうならなかった」と{言|い}いたいときに{使|つか}う。",
            en: "〜ところだった is used to say “it looked as if ~ was going to happen, but in fact it didn't” — “almost ~ / nearly ~”, as in もう少しで階段から落ちるところだった (I nearly fell down the stairs).",
          },
          forms: ["[V-る] + ところだった"],
          formNotes: [
            {
              ja: "「〜なければならない」「〜ざるを{得|え}ない」などといっしょに{使|つか}うこともある。",
              en: "It can also be combined with forms such as 〜なければならない (have to) and 〜ざるを得ない (have no choice but to): 〜なければならないところだった (I would have had to ~).",
            },
          ],
          examples: [
            { ja: "スマホを{見|み}ながら{歩|ある}いていて、{危|あや}うく{自転車|じてんしゃ}とぶつかる**ところだった**。", en: "I was walking while looking at my phone and nearly collided with a bicycle." },
            { ja: "{友達|ともだち}がメッセージをくれなかったら、{申|もう}し{込|こ}みの{締|し}め{切|き}りを{忘|わす}れる**ところだった**。", en: "If my friend hadn't messaged me, I would have forgotten the application deadline." },
            { ja: "{台風|たいふう}の{進路|しんろ}がもう{少|すこ}し{西|にし}だったら、{旅行|りょこう}を{中止|ちゅうし}せざるを{得|え}ない**ところだった**。", en: "If the typhoon's path had been a little further west, we would have had no choice but to cancel the trip." },
            { ja: "A：そのチケット、{最後|さいご}の1{枚|まい}だったんだって。\nB：{危|あぶ}なかった。{買|か}えなかったら、{別|べつ}の{日|ひ}にもう{一度|いちど}{来|こ}なきゃならない**ところだった**よ。", en: "A: Apparently that was the very last ticket.\nB: That was close. If I hadn't gotten it, I would have had to come back another day." },
          ],
          deepDive:
            "**V-る + ところだった** looks back at a near miss: *I was on the verge of ~ (but it didn't happen)*. The event didn't occur — that's the whole point, and it's usually something bad you escaped.\n\n" +
            "Common companions:\n" +
            "- **もう少しで／危うく（あやうく）** + V-るところだった: 危うく転ぶところだった.\n" +
            "- A counterfactual condition: 〜なかったら／〜ていたら, V-るところだった — *if not for X, Y would have happened*.\n" +
            "- With obligation forms: 払わなければならないところだった, 諦めざるを得ないところだった (as the ＊ note says).\n\n" +
            "Contrast (see the ～ところ／どころ list, p.223):\n" +
            "- **V-るところだ** (N4) = *about to ~* (present): 今から出かけるところです. ところだった in the past tense usually means a near miss, not just “was about to.”\n" +
            "- **〜はずだった** = *was supposed to ~ (but didn't)* — a plan or expectation that fell through: 3時に着くはずだったのに遅れた. ところだった is about a bad event you narrowly avoided; はずだった is about a plan that didn't happen.\n" +
            "- **〜どころか** (#83), **〜どころじゃない** (#38) — look similar, unrelated meaning.\n\n" +
            "Mistake to avoid: ✗週末は友達とキャンプに行くところだったのに、台風で中止になった. A cancelled plan is はずだった (or 予定だった). If you're relieved something *didn't* happen, it's ところだった.",
          see: [38, 83],
          index: ["Vるところだった", "危うく〜ところだった", "もう少しで〜ところだった"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{信号|しんごう}を{見|み}ていなくて、もう{少|すこ}しで{車|くるま}にひかれる（　）。", options: ["ところだった", "はずだった"], answer: 0, en: "I wasn't watching the signal and was nearly hit by a car." },
                { q: "{荷物|にもつ}は{昨日|きのう}{届|とど}く（　）のに、まだ{来|こ}ない。", options: ["ところだった", "はずだった"], answer: 1, en: "The package was supposed to arrive yesterday, but it still hasn't come." },
                { q: "{目覚|めざ}まし{時計|どけい}が{鳴|な}らなくて、{危|あや}うく{面接|めんせつ}に{遅|おく}れる（　）。", options: ["ところだった", "はずだった"], answer: 0, en: "My alarm didn't go off and I very nearly ended up late for my interview." },
                { q: "{今日|きょう}は{友達|ともだち}と{映画|えいが}を{見|み}る（　）けど、{友達|ともだち}が{熱|ねつ}を{出|だ}して{行|い}けなくなった。", options: ["ところだった", "はずだった"], answer: 1, en: "I was supposed to see a movie with a friend today, but my friend came down with a fever and we couldn't go.", why: { en: "It's a plan that fell through, not a bad event narrowly avoided → はずだった." } },
              ],
            },
          ],
        },
        {
          no: 90,
          pattern: "〜くらいなら",
          phrase: "{払|はら}う**くらいなら**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「{満員|まんいん}{電車|でんしゃ}に{乗|の}るくらいなら{歩|ある}いて{行|い}こう」のように、「AくらいならB」の{形|かたち}で、「Aするのは{嫌|いや}だから、Bも{一番|いちばん}いいとは{言|い}えないがBを{選|えら}ぶ」と{言|い}いたいときに{使|つか}う。「{最初|さいしょ}から{歩|ある}けばよかった」のように{後悔|こうかい}するときにも{使|つか}う。",
            en: "As in 満員電車に乗るくらいなら歩いて行こう (rather than ride a packed train, let's walk), “A くらいなら B” says “I don't want to do A, so I choose B — even though B isn't ideal either.” It is also used to express regret, e.g. “I should have walked from the start.”",
          },
          forms: ["[V-る] + くらいなら"],
          examples: [
            { ja: "{人気|にんき}のラーメン{屋|や}で2{時間|じかん}も{並|なら}ぶ**くらいなら**、{家|いえ}でインスタントラーメンを{食|た}べたほうがいい。", en: "Rather than line up for two hours at the popular ramen shop, I'd rather eat instant ramen at home." },
            { ja: "{嘘|うそ}をついてごまかす**くらいなら**、{正直|しょうじき}に{謝|あやま}ったほうがずっといいよ。", en: "Rather than lie your way out of it, it's much better to apologize honestly." },
            { ja: "A：{毎日|まいにち}{残業|ざんぎょう}で、もう{限界|げんかい}だよ。\nB：{体|からだ}を{壊|こわ}す**くらいなら**、{転職|てんしょく}を{考|かんが}えたら？", en: "A: I'm doing overtime every day. I'm at my limit.\nB: Rather than wreck your health, why not think about changing jobs?" },
            { ja: "こんなに{後悔|こうかい}する**くらいなら**、あのとき{思|おも}い{切|き}って{言|い}えばよかった。", en: "If I was going to regret it this much, I should have just said it back then." },
          ],
          notes: [
            {
              ja: "{後悔|こうかい}を{表|あらわ}すときは、{後|うし}ろに「〜ばよかった」「〜なければよかったのに」などが{来|く}ることが{多|おお}い。",
              en: "When expressing regret, the second half is often 〜ばよかった or 〜なければよかったのに (“should have / shouldn't have”).",
              examples: [
                { ja: "すぐやめる**くらいなら**、{高|たか}い{道具|どうぐ}なんか{買|か}わなければよかったのに。", en: "If you were going to quit so soon, you shouldn't have bought such expensive equipment." },
                { ja: "こんなに{混|こ}む**くらいなら**、{朝早|あさはや}く{来|く}ればよかった。", en: "If it was going to be this crowded, we should have come early in the morning." },
              ],
            },
          ],
          deepDive:
            "**AくらいならB** means *rather than A, B* — with a strong dislike of A. The speaker isn't saying B is great; they're saying A is so unacceptable that even B is preferable. くらい here belittles A (*something like A*).\n\n" +
            "Typical B endings: **〜たほうがいい／〜たほうがましだ** (#91), **〜よう**, **〜なさい**, **〜たら？**, **〜ばよかった**. The combination **〜くらいなら〜たほうがましだ** is extremely common and appears in this chapter's sample.\n\n" +
            "The regret use: when A already happened (or is happening) and the speaker looks back — こんなに疲れるくらいなら、来なければよかった *if it was going to be this exhausting, I shouldn't have come*.\n\n" +
            "Contrast (see the ～くらい list, p.221):\n" +
            "- **〜くらい** (N3) = degree: 座っていられないくらい揺れた *shook so much I couldn't stay seated*.\n" +
            "- **〜より（も）〜ほうがいい** is a neutral comparison; くらいなら carries emotional rejection of A.\n" +
            "- **〜ぐらいなら** is the same thing; くらい／ぐらい are interchangeable.\n\n" +
            "Mistakes:\n" +
            "- Using it when A is desirable: ✗おいしいものを食べるくらいなら… makes no sense unless you really hate A.\n" +
            "- Forgetting that B is the speaker's choice/advice, so B can't be a simple fact: ✗雨が降るくらいなら、晴れる.\n\n" +
            "JLPT tip: a blank followed by 〜ほうがましだ／〜ばよかった after an unpleasant action → くらいなら.",
          see: [91],
          index: ["Vくらいなら", "Vぐらいなら"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{毎朝|まいあさ}{渋滞|じゅうたい}で1{時間|じかん}もかかるくらいなら、",
                "{古|ふる}いパソコンを{何度|なんど}も{修理|しゅうり}に{出|だ}すくらいなら、",
                "すぐにやめるくらいなら、",
                "{告白|こくはく}しないであとで{後悔|こうかい}するくらいなら、",
              ],
              right: [
                "{最初|さいしょ}から{入部|にゅうぶ}しなければよかったのに。",
                "{電車|でんしゃ}で{通|かよ}ったほうがいいんじゃない？",
                "{今|いま}{気持|きも}ちを{伝|つた}えたほうがいいよ。",
                "{思|おも}い{切|き}って{買|か}い{替|か}えたほうがいい。",
              ],
              answer: [1, 3, 0, 2],
              en: [
                "Rather than spend an hour in traffic every morning, wouldn't it be better to commute by train?",
                "Rather than keep sending your old computer in for repairs, you'd be better off just replacing it.",
                "If you were going to quit right away, you shouldn't have joined the club in the first place.",
                "Rather than not confess and regret it later, you should tell them how you feel now.",
              ],
            },
          ],
        },
        {
          no: 91,
          pattern: "〜ほうがましだ",
          phrase: "{食|た}べたほうがずっと**まし**だ",
          stars: 2,
          marks: [],
          usage: {
            ja: "「まし」は、「ほかのものと{比|くら}べてみて、いいとは{言|い}えないが、{一番|いちばん}{悪|わる}いわけではない」と{言|い}いたいときに{使|つか}う。「〜ほうが・〜より・〜だけ・まだ・ずっと」などといっしょに{使|つか}われることが{多|おお}い。",
            en: "まし is used to say “compared with something else, it can't be called good, but it isn't the worst” — “(it's) better / less bad”. It is often used together with 〜ほうが, 〜より, 〜だけ, まだ and ずっと.",
          },
          forms: ["[V-た] / [V-る] / [いA] + ほうがましだ", "[N] の + ほうがましだ", "[V-る] / [V-ない] / [いA] / [N] + よりましだ", "[Pl] + だけましだ"],
          formNotes: [
            {
              ja: "{本|ほん}にはこの{項目|こうもく}の{接続|せつぞく}の{形|かたち}は{示|しめ}されていない。ここの{形|かたち}は、よく{使|つか}われる{組|く}み{合|あ}わせをこのサイトでまとめたもの。「だけまし」の{前|まえ}では、[なA]・[N]は「な」の{形|かたち}になる（{軽|かる}いけがなだけまし）。",
              en: "The book gives no connection formula for this point; the lines above are this site's summary of the common combinations. Before だけまし, な-adjectives and nouns take な (軽いけがなだけまし).",
            },
          ],
          examples: [
            { ja: "A：{今日|きょう}、{雨|あめ}だって。\nB：でも、{風|かぜ}がない**だけまし**だよ。{昨日|きのう}は{傘|かさ}が{壊|こわ}れたもん。", en: "A: It's supposed to rain today.\nB: Well, at least there's no wind. Yesterday my umbrella broke." },
            { ja: "{味|あじ}はいまいちだけど、{何|なに}も{食|た}べない**よりまし**でしょ。", en: "It doesn't taste great, but it's better than eating nothing, right?" },
            { ja: "{知|し}らない{人|ひと}ばかりのパーティーで{気|き}を{遣|つか}うくらいなら、{家|いえ}で{一人|ひとり}で{過|す}ごした**ほうがずっとまし**だ。", en: "Rather than wear myself out being polite at a party full of strangers, I'd much rather spend the time alone at home." },
            { ja: "{新|あたら}しいソフト、{使|つか}いにくいけど、{前|まえ}のよりは**まだまし**かな。", en: "The new software is hard to use, but I guess it's still better than the old one." },
          ],
          deepDive:
            "**まし（だ）** is a な-adjective meaning *less bad, preferable (by comparison)*. The key nuance: **neither option is good**; one is just less bad. If you say 電車よりバスのほうがましだ, you're not praising the bus — you just dislike the train more.\n\n" +
            "The book gives no single connection formula; instead, まし appears in fixed combinations:\n" +
            "- **〜たほうがましだ** — *I'd rather ~ / it would be better to ~*: 嘘をつくくらいなら、黙っていたほうがましだ.\n" +
            "- **〜よりましだ** — *better than ~*: ないよりましだ *better than nothing*.\n" +
            "- **〜だけましだ** — *at least ~*: けががなかっただけましだ. The だけ clause names the one small positive point.\n" +
            "- **まだましだ／ずっとましだ** — degree: *still better / far better*.\n" +
            "- As a noun modifier: **ましな + N**: もう少しましな服はないの？ *Don't you have any decent clothes?*\n\n" +
            "Contrast:\n" +
            "- **〜ほうがいい** gives positive advice; ほうがましだ grudgingly picks the lesser evil.\n" +
            "- **〜くらいなら** (#90) often pairs with it: A くらいなら B ほうがましだ.\n\n" +
            "Common mistakes:\n" +
            "- Using まし for something genuinely good: ✗このレストランは最高にましだ.\n" +
            "- Mixing up what goes before だけ／より: in 〜だけまし the clause is the *good* fact (出ただけまし); in 〜よりまし the clause is the *worse* alternative (出ないよりまし). This is exactly what the practice below tests.",
          see: [90],
          index: ["〜ほうがましだ", "〜よりましだ", "〜だけましだ", "ましな + N"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "A：{今年|ことし}のボーナス、{去年|きょねん}の{半分|はんぶん}だったよ。\nB：でも、（　）だけましじゃない？ うちの{会社|かいしゃ}は{全然|ぜんぜん}{出|で}なかったよ。", options: ["{出|で}なかった", "{出|で}た"], answer: 1, en: "A: My bonus this year was half of last year's.\nB: But at least you got one, right? At my company we got nothing at all.", why: { en: "〜だけまし names the small good point: at least it was paid (出た)." } },
                { q: "{味|あじ}はいまいちだけど、{何|なに}も（　）よりはましだ。", options: ["{食|た}べない", "{食|た}べる"], answer: 0, en: "It doesn't taste great, but it's better than eating nothing.", why: { en: "〜よりまし names the worse alternative: eating nothing." } },
                { q: "{無理|むり}して{出席|しゅっせき}して{倒|たお}れるくらいなら、{今日|きょう}は（　）ほうがましだ。", options: ["{休|やす}んだ", "{出席|しゅっせき}した"], answer: 0, en: "Rather than force myself to attend and collapse, it's better to take today off." },
                { q: "{試験|しけん}には{落|お}ちたけど、（　）だけましだと{考|かんが}えよう。", options: ["{全然|ぜんぜん}{勉強|べんきょう}しなかった", "{苦手|にがて}な{文法|ぶんぽう}がわかるようになった"], answer: 1, en: "I failed the exam, but let's look at it this way: at least I came to understand the grammar I was weak at." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["ことだ", "ところだった", "ましだ", "くらいなら", "ぶって", "に限って", "という"],
        items: [
          { q: "{財布|さいふ}を{電車|でんしゃ}に{忘|わす}れて、もう{少|すこ}しでなくす＿＿。{駅員|えきいん}さんが{見|み}つけてくれて{助|たす}かった。", answer: "ところだった", en: "I left my wallet on the train and nearly lost it. Luckily a station attendant found it." },
          { q: "{毎日|まいにち}{満員|まんいん}{電車|でんしゃ}に{乗|の}るより、{時間|じかん}がかかってもバスで{行|い}ったほうが＿＿と{思|おも}う。", answer: "ましだ", en: "I think going by bus, even if it takes longer, is better than riding a packed train every day." },
          { q: "{日本語|にほんご}が{上手|じょうず}になりたかったら、{日本人|にほんじん}の{友達|ともだち}をたくさん{作|つく}る＿＿よ。", answer: "ことだ", en: "If you want to get good at Japanese, the thing to do is make lots of Japanese friends." },
          { q: "あの{店|みせ}で2{時間|じかん}も{並|なら}ぶ＿＿、コンビニのおにぎりでいいよ。", answer: "くらいなら", en: "Rather than wait in line for two hours at that place, I'm fine with convenience-store rice balls." },
          { q: "{傘|かさ}を{持|も}っていない{日|ひ}＿＿、{夕方|ゆうがた}から{雨|あめ}が{降|ふ}り{出|だ}す。", answer: "に限って", en: "It always starts raining in the evening on precisely the days I don't have an umbrella." },
          { q: "{年末|ねんまつ}のセールで、{売|う}り{場|ば}の{棚|たな}＿＿{棚|たな}から{商品|しょうひん}が{消|き}えた。", answer: "という", en: "At the year-end sale, the goods vanished from every single shelf in the store." },
          { q: "{彼|かれ}はよく{知|し}らないくせに、{専門家|せんもんか}＿＿いろいろ{説明|せつめい}していた。", answer: "ぶって", en: "Even though he didn't really know anything, he was explaining all sorts of things as if he were an expert." },
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
          { q: "この{店|みせ}では、{揚|あ}げ（　）の{天|てん}ぷらを{一|ひと}つずつお{客様|きゃくさま}の{前|まえ}にお{出|だ}ししています。", options: ["かけ", "たて", "ぎみ", "がち"], answer: 1, en: "At this restaurant, we serve freshly fried tempura to customers one piece at a time." },
          { q: "このエアコンは、{部屋|へや}に{誰|だれ}もいなくなると{自動的|じどうてき}に{止|と}まる（　）。", options: ["ようにしています", "ようになっています", "ことにしています", "かのようです"], answer: 1, en: "This air conditioner is designed to stop automatically when no one is left in the room.", why: { en: "A machine's built-in mechanism → ようになっている. ようにしている／ことにしている describe a person's habit or decision." } },
          { q: "{薬|くすり}を{飲|の}んだのに、{熱|ねつ}が{下|さ}がる（　）、かえって{上|あ}がってしまった。", options: ["どころか", "くらいなら", "ばかりに", "ものの"], answer: 0, en: "I took medicine, but far from going down, my fever actually went up." },
          { q: "A：{雨|あめ}で{花火|はなび}{大会|たいかい}が{中止|ちゅうし}だって。\nB：{中止|ちゅうし}じゃなくて{延期|えんき}になっただけ（　）よ。{来週|らいしゅう}{見|み}られるんだから。", options: ["ことだ", "ましだ", "わけだ", "ものだ"], answer: 1, en: "A: I heard the fireworks show was cancelled because of rain.\nB: It's not cancelled, just postponed — that's something, at least. We can see it next week." },
          { q: "{駅|えき}の{階段|かいだん}で{足|あし}を{滑|すべ}らせて、もう{少|すこ}しで{転|ころ}ぶ（　）。", options: ["はずだった", "わけだった", "ところだった", "ことだった"], answer: 2, en: "I slipped on the station stairs and nearly fell." },
          { q: "あとでそんなに{文句|もんく}を{言|い}う（　）、{最初|さいしょ}から{自分|じぶん}でやればよかったのに。", options: ["のなんのって", "どころか", "に限って", "くらいなら"], answer: 3, en: "If you were going to complain that much afterward, you should have done it yourself from the start.", why: { en: "〜くらいなら + 〜ばよかった expresses regret: A (complaining later) is so undesirable that B would have been better." } },
          { q: "A：{新|あたら}しくできたラーメン{屋|や}、どうだった？\nB：{辛|から}い（　）、{一口|ひとくち}{食|た}べただけで{汗|あせ}が{止|と}まらなくなったよ。", options: ["のなんのって", "に限って", "どころか", "ようじゃ"], answer: 0, en: "A: How was the new ramen place?\nB: It was so incredibly spicy that I couldn't stop sweating after just one bite." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "{料理|りょうり}が{苦手|にがて}な{兄|あに}は、{魚|さかな}を", after: "{焦|こ}がしてしまった。", pieces: ["{真|ま}っ{黒|くろ}に", "どころか", "{焼|や}く", "{上手|じょうず}に"], order: [3, 2, 1, 0], star: 1, en: "My brother, who is bad at cooking, far from grilling the fish nicely, burned it black." },
          { before: "この{炊飯器|すいはんき}は、", after: "ので{便利|べんり}だ。", pieces: ["ようになっている", "と", "ご{飯|はん}が{炊|た}ける", "{保温|ほおん}に{切|き}り{替|か}わる"], order: [2, 1, 3, 0], star: 2, en: "This rice cooker is handy because it switches to keep-warm mode when the rice is done." },
          { before: "{満員|まんいん}{電車|でんしゃ}に", after: "ほうがましだ。", pieces: ["{乗|の}る", "くらいなら", "{歩|ある}いた", "30{分|ぷん}{早|はや}く{起|お}きて"], order: [0, 1, 3, 2], star: 3, en: "Rather than ride a packed train, I'd rather get up 30 minutes early and walk." },
          { before: "うちの{子|こ}は、", after: "{熱|ねつ}を{出|だ}す。", pieces: ["{日|ひ}", "に{限|かぎ}って", "{休|やす}めない", "{仕事|しごと}を"], order: [3, 2, 0, 1], star: 1, en: "My child always runs a fever on exactly the days I can't take off work." },
          { before: "{弟|おとうと}は{彼女|かのじょ}の{前|まえ}では", after: "、{家|いえ}ではゲームばかりしている。", pieces: ["{話|はな}す", "けれど", "{大人|おとな}", "ぶって"], order: [2, 3, 0, 1], star: 2, en: "My little brother talks all grown-up in front of his girlfriend, but at home he does nothing but play games." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[4]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage, think about the overall content, and choose the best option for each of blanks [1]–[4]." },
        title: "キャンプ{便|だよ}り",
        text: [
          "{今|いま}、{友達|ともだち}と{北海道|ほっかいどう}のキャンプ{場|じょう}に{来|き}ています。",
          "{昨日|きのう}の{夜|よる}は{寒|さむ}い[1]、{寝袋|ねぶくろ}に{入|はい}っても{全然|ぜんぜん}{眠|ねむ}れませんでした。{朝|あさ}ご{飯|はん}は、キャンプ{場|じょう}の{売店|ばいてん}で{焼|や}き[2]のパンを{買|か}うつもりだったけど、{行|い}ってみたら{今日|きょう}は{臨時|りんじ}{休業|きゅうぎょう}。しかたがないので、{持|も}ってきたカップラーメンを{食|た}べました。お{湯|ゆ}さえあればすぐ{食|た}べられるし、おなかをすかせたまま{我慢|がまん}するよりは[3]。",
          "{午後|ごご}は{湖|みずうみ}でカヌーに{乗|の}る{予定|よてい}だったのに、{風|かぜ}が{強|つよ}くて{中止|ちゅうし}。{寒|さむ}い{中|なか}、いつ{再開|さいかい}するかわからないのを{待|ま}ち{続|つづ}ける[4]、{温泉|おんせん}に{行|い}ったほうがいいと{思|おも}って、みんなで{近|ちか}くの{日帰|ひがえ}り{温泉|おんせん}へ{行|い}きました。{温泉|おんせん}は{最高|さいこう}だったよ！",
        ],
        en: [
          "I'm at a campsite in Hokkaido with some friends right now.",
          "Last night it was so unbelievably cold that I couldn't sleep at all, even inside my sleeping bag. For breakfast I was planning to buy freshly baked bread at the campsite shop, but when I went there it was closed for the day. There was nothing for it, so I ate the cup noodles I'd brought. All you need is hot water, and it was better than putting up with an empty stomach.",
          "In the afternoon we were supposed to go canoeing on the lake, but it was cancelled because of strong winds. Rather than keep waiting in the cold without knowing when it would restart, we thought it'd be better to go to a hot spring, so we all went to a day-trip hot spring nearby. The hot spring was the best!",
        ],
        blanks: [
          { options: ["のなんのって", "からこそ", "ものの", "くせに"], answer: 0, why: { en: "The second half (couldn't sleep at all) is an extreme consequence of the cold → のなんのって. ものの would need a contrast." } },
          { options: ["かけ", "たて", "がち", "ぎみ"], answer: 1 },
          { options: ["ましだった", "かぎりだった", "おかげだった", "せいだった"], answer: 0, why: { en: "〜よりはまし: cup noodles weren't great, but better than staying hungry." } },
          { options: ["くらいなら", "ついでに", "どころか", "ばかりに"], answer: 0, why: { en: "A くらいなら B ほうがいい: waiting in the cold is rejected in favor of the hot spring." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉1", en: "Q4 Listening (1)" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}では、まず{質問|しつもん}を{聞|き}いてください。そのあと、{選択肢|せんたくし}を{読|よ}んでください。それから{話|はなし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the question, then read the options. Then listen to the conversation and choose the best answer from 1–4." },
        items: [
          {
            question: "{女|おんな}の{人|ひと}はどうしてケーキバイキングの{店|みせ}に{入|はい}れなかったのですか。",
            script: [
              { sp: "{男|おとこ}", v: "m", ja: "{昨日|きのう}、{駅前|えきまえ}のケーキバイキングに{行|い}ったんでしょ？ どうだった？" },
              { sp: "{女|おんな}", v: "f", ja: "それがね、{入|はい}れなかったの。" },
              { sp: "{男|おとこ}", v: "m", ja: "え、{遅刻|ちこく}したとか？" },
              { sp: "{女|おんな}", v: "f", ja: "ううん、{時間|じかん}には{間|ま}に{合|あ}ったのよ。{電車|でんしゃ}が{止|と}まって、{危|あや}うく{遅|おく}れるところだったけど、{駅|えき}から{走|はし}ったから。" },
              { sp: "{女|おんな}", v: "f", ja: "で、お{店|みせ}の{人|ひと}に{名前|なまえ}を{言|い}ったら、「ご{予約|よやく}は{来週|らいしゅう}の{日曜日|にちようび}になっております」って。" },
              { sp: "{男|おとこ}", v: "m", ja: "え？" },
              { sp: "{女|おんな}", v: "f", ja: "{予約|よやく}してくれたのは{妹|いもうと}なんだけど、{妹|いもうと}ったら、{日|ひ}にちを1{週間|しゅうかん}{間違|まちが}えてたのよ。しかもその{日|ひ}は{予約|よやく}のお{客|きゃく}さんしか{入|はい}れない{日|ひ}で。" },
              { sp: "{男|おとこ}", v: "m", ja: "ああ、それで{入|はい}れなかったわけか。" },
              { sp: "{女|おんな}", v: "f", ja: "そう。{走|はし}って{行|い}ったのが{全部|ぜんぶ}{無駄|むだ}になっちゃった。" },
            ],
            en: [
              "Man: You went to the all-you-can-eat cake place by the station yesterday, right? How was it?",
              "Woman: Well, actually, we couldn't get in.",
              "Man: Huh, were you late or something?",
              "Woman: No, we made it on time. The train stopped and we very nearly were late, but we ran from the station.",
              "Woman: Then when I gave my name to the staff, they said, “Your reservation is for next Sunday.”",
              "Man: What?",
              "Woman: It was my sister who made the booking, and honestly — she got the date wrong by a week. And on top of that, that day only people with reservations could get in.",
              "Man: Ah, so that's why you couldn't get in.",
              "Woman: Yep. All that running was for nothing.",
            ],
            options: ["{予約|よやく}の{時間|じかん}に{遅|おく}れたから", "{店|みせ}が{休|やす}みだったから", "{予約|よやく}の{日|ひ}が{違|ちが}っていたから", "{妹|いもうと}が{来|こ}なかったから"],
            answer: 2,
            why: { en: "She nearly was late (危うく遅れるところだった) but actually made it. The problem was that her sister booked the wrong date." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉2", en: "Q4 Listening (2)" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. First listen to the statement, then listen to the replies and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{駅前|えきまえ}の{新|あたら}しいパン{屋|や}、{焼|や}きたてのクロワッサンがおいしいのなんのって。" }],
            options: [
              "へえ、そんなにおいしいの？ {今度|こんど}{行|い}ってみる。",
              "え、まだ{焼|や}いてなかったの？",
              "おいしくないなら、やめておくよ。",
            ],
            answer: 0,
            en: [
              "Man: The new bakery by the station — their fresh-baked croissants are unbelievably good.",
              "1: Really? That good? I'll go try it next time.",
              "2: Huh, they hadn't baked them yet?",
              "3: If they're not good, I'll skip it.",
            ],
          },
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{山田|やまだ}{君|くん}ったら、また{待|ま}ち{合|あ}わせに30{分|ぷん}も{遅|おく}れてきたのよ。" }],
            options: [
              "え、{山田|やまだ}{君|くん}、{時間|じかん}{通|どお}りに{来|き}たんだ。",
              "またか。{困|こま}ったもんだね。",
              "{山田|やまだ}{君|くん}ならきっと{早|はや}く{来|く}るよ。",
            ],
            answer: 1,
            en: [
              "Woman: Yamada, honestly — he turned up 30 minutes late to meet us again.",
              "1: Oh, so Yamada came on time.",
              "2: Again? He's hopeless.",
              "3: Yamada will surely come early.",
            ],
            why: { en: "ったら signals a complaint; the natural reply sympathizes with her annoyance." },
          },
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "こんな{簡単|かんたん}なミスをしてるようじゃ、{試験|しけん}には{受|う}からないぞ。" }],
            options: [
              "はい、もっと{気|き}をつけます。",
              "え、{受|う}かってよかったです。",
              "{簡単|かんたん}なミスがなくて{安心|あんしん}しました。",
            ],
            answer: 0,
            en: [
              "Man: If you're making simple mistakes like this, you'll never pass the exam.",
              "1: Yes, I'll be more careful.",
              "2: Oh, I'm glad I passed.",
              "3: I'm relieved there were no simple mistakes.",
            ],
          },
        ],
      },
    },
  ],
});
