N2.register({
  id: 7,
  genre: { ja: "{論説文|ろんせつぶん}を{読|よ}む", en: "Reading an Essay" },
  title: { ja: "オオカミと{生態系|せいたいけい}", en: "Wolves and the Ecosystem" },
  canDo: [
    { ja: "レポートや{論説文|ろんせつぶん}の、これまでの{経緯|けいい}や{状況|じょうきょう}の{説明|せつめい}が{理解|りかい}できる。", en: "Understand explanations of the background and current situation of a topic in a report or essay." },
    { ja: "レポートや{論説文|ろんせつぶん}の{説明|せつめい}が{理解|りかい}できる。", en: "Understand the explanations given in a report or essay." },
  ],
  parts: [
    // ───────────────────────────── PART (1) ─────────────────────────────
    {
      label: "(1)",
      canDo: [
        { ja: "レポートや{論説文|ろんせつぶん}の、これまでの{経緯|けいい}や{状況|じょうきょう}の{説明|せつめい}が{理解|りかい}できる。", en: "Understand an explanation of the background and situation of a topic described in a report or essay." },
      ],
      sample: {
        kind: "essay",
        heading: "ダムとサケと{森|もり}（1）",
        lines: [
          { ja: "{川|かわ}にダムが{造|つく}られるようになって{久|ひさ}しい。{電力|でんりょく}を{得|え}るという{点|てん}**から{見|み}ると**、ダムは{今|いま}も{欠|か}かせない{施設|しせつ}である。", en: "It has been a long time since dams began to be built on rivers. From the point of view of generating electricity, dams are still indispensable facilities today." },
          { ja: "{洪水|こうずい}を{防|ふせ}ぎ、{農業|のうぎょう}{用水|ようすい}を{確保|かくほ}する{役割|やくわり}も{果|は}たしてきた。", en: "They have also played the role of preventing floods and securing water for agriculture." },
          { ja: "**その{一方|いっぽう}で**、ダムが{川|かわ}の{生|い}き{物|もの}に{与|あた}える{影響|えいきょう}は、{長|なが}い{間|あいだ}あまり{注目|ちゅうもく}されてこなかった。", en: "On the other hand, the effect that dams have on the creatures living in rivers went largely unnoticed for a long time." },
          { ja: "{北海道|ほっかいどう}のある{川|かわ}では、ダムができてから{釣|つ}れるサケが{年々|ねんねん}{減|へ}っている**ことから**、{地元|じもと}の{漁協|ぎょきょう}が{大学|だいがく}に{調査|ちょうさ}を{依頼|いらい}した。", en: "On one river in Hokkaido, because the number of salmon caught has been falling year after year since a dam was built, the local fishing cooperative asked a university to carry out a survey." },
          { ja: "{調査|ちょうさ}によると、サケが{戻|もど}らなくなったことは{漁師|りょうし}の{収入|しゅうにゅう}を{減|へ}らした**のみならず**、{森|もり}の{木々|きぎ}の{成長|せいちょう}にまで{関係|かんけい}していた。", en: "According to the survey, the salmon no longer returning had not only reduced the fishermen's income but was even connected to the growth of the trees in the forest." },
          { ja: "{川|かわ}を{上|のぼ}ったサケは、クマやキツネ**といった**{動物|どうぶつ}に{食|た}べられ、その{食|た}べ{残|のこ}しが{森|もり}の{土|つち}の{栄養|えいよう}になっていたのである。", en: "Salmon that swam up the river were eaten by animals such as bears and foxes, and the leftovers had been nourishing the forest soil." },
          { ja: "さらに、ダムの{底|そこ}に{土砂|どしゃ}がたまる**にしたがって**、{海|うみ}まで{届|とど}く{砂|すな}が{減|へ}り、{河口|かこう}の{砂浜|すなはま}も{狭|せま}くなっていった。", en: "Furthermore, as sediment built up at the bottom of the dam, less sand reached the sea, and the beaches at the river mouth grew narrower." },
        ],
      },
      points: [
        // ── 60 ──
        {
          no: 60,
          pattern: "〜から{見|み}ると／〜から{見|み}れば／〜から{見|み}て",
          phrase: "{得|え}るという{点|てん}**から{見|み}ると**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「{専門家|せんもんか}から{見|み}ると」「{値段|ねだん}の{面|めん}から{見|み}ると」「{調査|ちょうさ}{結果|けっか}から{見|み}て」のように、「〜」の{立場|たちば}・{視点|してん}・{判断|はんだん}の{材料|ざいりょう}をもとにして{考|かんが}えたことを{言|い}うときに{使|つか}う。",
            en: "Used to state a view or judgment based on the standpoint, perspective or evidence of “~”, as in 専門家から見ると (from an expert's point of view), 値段の面から見ると (in terms of price) or 調査結果から見て (judging from the survey results).",
          },
          forms: ["[N] + から{見|み}ると", "[N] + から{見|み}れば", "[N] + から{見|み}て"],
          examples: [
            { ja: "{通勤|つうきん}{時間|じかん}という{点|てん}**から{見|み}ると**、{今|いま}の{部屋|へや}のほうが{便利|べんり}だ。", en: "In terms of commuting time, my current apartment is more convenient." },
            { ja: "{親|おや}**から{見|み}れば**、{子|こ}どもはいくつになっても{子|こ}どもなのだろう。", en: "From a parent's point of view, a child probably stays a child no matter how old they get." },
            { ja: "{空|そら}の{様子|ようす}**から{見|み}て**、{午後|ごご}は{雨|あめ}になりそうだ。", en: "Judging from the look of the sky, it's likely to rain in the afternoon." },
            { ja: "{外国人|がいこくじん}**から{見|み}ると**、{日本|にほん}の{駅|えき}の{正確|せいかく}さは{驚|おどろ}きだそうだ。", en: "Apparently, from a foreigner's perspective, the punctuality of Japanese stations is astonishing." },
            { ja: "{売上|うりあげ}の{数字|すうじ}**から{見|み}て**、この{企画|きかく}は{成功|せいこう}だったと{言|い}える。", en: "Judging from the sales figures, this project can be called a success." },
          ],
          plus: [
            {
              pattern: "〜からいうと／〜からいえば／〜からいって",
              stars: 3,
              marks: [],
              examples: [
                { ja: "{利用者|りようしゃ}の{立場|たちば}**からいうと**、{窓口|まどぐち}は{土日|どにち}も{開|あ}いていてほしい。", en: "From the users' standpoint, we'd like the service counter to be open on weekends too." },
                { ja: "{経験|けいけん}**からいえば**、{彼|かれ}より{適任|てきにん}な{人|ひと}はいないだろう。", en: "In terms of experience, there is probably nobody better suited than him." },
                { ja: "{今|いま}の{成績|せいせき}**からいって**、{第一|だいいち}{志望|しぼう}の{合格|ごうかく}は{十分|じゅうぶん}{可能|かのう}だ。", en: "Judging from your current grades, passing for your first-choice school is quite possible." },
              ],
            },
            {
              pattern: "〜からすると／〜からすれば／〜からして",
              stars: 3,
              marks: [],
              examples: [
                { ja: "{店長|てんちょう}の{性格|せいかく}**からすると**、{値下|ねさ}げはまずしないだろう。", en: "Given the manager's personality, he is very unlikely to lower prices." },
                { ja: "{小|ちい}さい{子|こ}どもを{持|も}つ{親|おや}**からすれば**、{公園|こうえん}の{遊具|ゆうぐ}の{安全性|あんぜんせい}は{何|なに}より{大切|たいせつ}だ。", en: "For parents of small children, the safety of playground equipment matters more than anything." },
                { ja: "{足跡|あしあと}の{大|おお}きさ**からして**、かなり{大|おお}きな{動物|どうぶつ}が{通|とお}ったようだ。", en: "Judging from the size of the footprints, quite a large animal seems to have passed by." },
                { ja: "{話|はな}し{方|かた}**からして**、あの{人|ひと}は{関西|かんさい}の{出身|しゅっしん}だろう。", en: "Judging by the way he talks, that person is probably from the Kansai region." },
              ],
            },
          ],
          deepDive:
            "**〜から見ると / 見れば / 見て** literally mean *looking from ~*. The noun before them is the **vantage point**: a person or group (親から見ると), an aspect or criterion (値段の面から見ると, 使いやすさという点から見れば), or a piece of evidence (データから見て). The second half is the speaker's judgment or evaluation from that point.\n\n" +
            "- **から見ると / から見れば** are conditional in form (*if you look from ~*) and are the most common in essays.\n" +
            "- **から見て** is often used with evidence and a conclusion: 状況から見て、〜だろう/と言える.\n" +
            "- Typical frames: 〜という点から見ると, 〜の面から見ると, 〜の立場から見れば.\n\n" +
            "The two Plus boxes (the book gives only examples for them, no separate explanation) are near-synonyms, all attaching directly to a noun:\n" +
            "- **からいうと / いえば / いって** (from 言う): *speaking in terms of ~*. Especially natural for criteria or categories: 価格からいえば, 経験からいって. It is not normally used with a single person as the viewpoint (✗私からいうと sounds odd; use 私から見ると / 私としては).\n" +
            "- **からすると / すれば / して**: close to から見ると, used both for a person's standpoint (利用者からすれば) and for clues (足跡の大きさからして). **からして** also has a separate use — *to begin with, even ~*: タイトルからしてつまらない (*even the title is boring*). Don't confuse the two.\n\n" +
            "Contrast with **〜にしては** (*for / considering ~, unexpectedly*): 初心者にしては上手だ = *good for a beginner*. にしては signals a gap between expectation and reality; から見ると simply names the viewpoint. This is exactly the contrast drilled in the practice.\n\n" +
            "Also compare **〜からには** (#18, *now that / since ~ (you must)*), which looks similar but expresses resolve or obligation.\n\n" +
            "JLPT tip: when the blank follows 点・面・立場・観点・データ and the sentence gives an evaluation, choose から見ると/からいうと/からすると.",
          see: [18],
          index: ["Nから見ると", "Nから見れば", "Nから見て", "Nからいうと", "Nからいえば", "Nからいって", "Nからすると", "Nからすれば", "Nからして"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{兄|あに}は{料理|りょうり}の{初心者|しょしんしゃ}（　）{手際|てぎわ}がいい。", options: ["から見ると", "にしては"], answer: 1, en: "For a beginner cook, my older brother is quite deft.", why: { en: "The sentence expresses a gap between expectation (beginner) and reality (skilful) → にしては." } },
                { q: "{子|こ}どもの{目|め}（　）、{大人|おとな}の{世界|せかい}はずいぶん{不思議|ふしぎ}なものだろう。", options: ["から見れば", "にしては"], answer: 0, en: "Through a child's eyes, the adult world must seem very strange." },
                { q: "{費用|ひよう}の{面|めん}（　）、{新幹線|しんかんせん}より{高速|こうそく}バスのほうが{得|とく}だ。", options: ["から見ると", "にしては"], answer: 0, en: "In terms of cost, the highway bus is a better deal than the shinkansen." },
                { q: "このホテルは{駅前|えきまえ}にある（　）、{静|しず}かで{落|お}ち{着|つ}いている。", options: ["から見れば", "にしては"], answer: 1, en: "For a hotel right in front of the station, it's quiet and calm." },
              ],
            },
          ],
        },
        // ── 61 ──
        {
          no: 61,
          pattern: "〜{一方|いっぽう}（で）／その{一方|いっぽう}で",
          phrase: "その**{一方|いっぽう}で**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「{休日|きゅうじつ}に{混|こ}む{観光地|かんこうち}がある{一方|いっぽう}、{人|ひと}がほとんど{来|こ}ない{観光地|かんこうち}もある」のように、1つのことに{関|かん}して、{大|おお}きく{違|ちが}う{状況|じょうきょう}があることを{説明|せつめい}するときに{使|つか}う。",
            en: "Used to explain that, regarding one matter, there are very different situations side by side — e.g. “while some tourist spots are crowded on holidays, there are others that almost nobody visits.”",
          },
          forms: ["[Pl] + {一方|いっぽう}", "[なA~~だ~~] な + {一方|いっぽう}", "[N~~だ~~] の + {一方|いっぽう}"],
          formNotes: [
            { ja: "「[なA]／[N] である + {一方|いっぽう}」という{形|かたち}も{使|つか}われる。", en: "The form なA / N + である + 一方 is also used." },
          ],
          examples: [
            { ja: "{都会|とかい}で{暮|く}らしたい{若者|わかもの}がいる**{一方|いっぽう}**、{地方|ちほう}での{生活|せいかつ}にあこがれる{若者|わかもの}も{増|ふ}えている。", en: "While some young people want to live in the city, more and more are also drawn to life in the countryside." },
            { ja: "この{薬|くすり}はよく{効|き}く**{一方|いっぽう}で**、{眠|ねむ}くなるという{副作用|ふくさよう}がある。", en: "This medicine works well, but on the other hand it has the side effect of making you drowsy." },
            { ja: "{観光客|かんこうきゃく}の{増加|ぞうか}は{地元|じもと}の{経済|けいざい}にとってプラスである**{一方|いっぽう}**、ごみや{騒音|そうおん}の{問題|もんだい}も{生|う}んでいる。", en: "The increase in tourists is a plus for the local economy, while at the same time it is creating problems such as litter and noise." },
            { ja: "{新|あたら}しい{駅|えき}ができて{町|まち}は{便利|べんり}になった。**その{一方|いっぽう}で**、{昔|むかし}ながらの{商店街|しょうてんがい}は{客|きゃく}が{減|へ}ってしまった。", en: "The town became more convenient when the new station opened. On the other hand, the old-fashioned shopping street lost customers." },
            { ja: "{父|ちち}は{仕事|しごと}には{厳|きび}しい**{一方|いっぽう}で**、{家|いえ}では{冗談|じょうだん}ばかり{言|い}っている。", en: "My father is strict about work, but at home he is always cracking jokes." },
          ],
          deepDive:
            "**一方** means *one side*. **Aする一方（で）、B** puts two contrasting situations next to each other: *while A, (on the other hand) B*. The two sides can be:\n\n" +
            "- two groups or things in contrast: 賛成する人がいる一方、反対する人もいる;\n" +
            "- two sides of one thing (merit vs. demerit): 便利な一方で、危険もある;\n" +
            "- two roles performed by one person: 医師として働く一方、小説も書いている (*while working as a doctor, she also writes novels*).\n\n" +
            "**その一方で** is the sentence-initial version (*on the other hand*). It is very common in essays to turn from one point to its contrast — exactly how the sample essay moves from the benefits of dams to their costs.\n\n" +
            "Connection (the book lists 一方; 一方で with で is equally common): plain form; なA takes な (便利な一方), N takes の or である (黒字の一方で / 学生である一方). である is the more formal essay style.\n\n" +
            "Don't confuse with **V-る一方だ** (#115), a completely different pattern meaning *keeps on ~ing (in one direction, usually bad)*: 物価は上がる一方だ. Key difference: #115 comes at the **end** of the sentence with だ; #61 links two clauses.\n\n" +
            "Similar contrast patterns: **〜反面** (#69) focuses on two opposite aspects of *one* thing and cannot be used for two different subjects; 一方 is broader. **〜に対して** marks a direct comparison of two subjects (兄は背が高いのに対して、弟は低い).\n\n" +
            "JLPT tip: 一方 frequently appears in 問題1 and in the passage-grammar section as a connector (その一方で). Look for a second clause that describes a contrasting situation, often ending in 〜もある / 〜もいる.",
          see: [115],
          index: ["〜一方", "〜一方で", "その一方で", "Nである一方"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{駅前|えきまえ}の{再開発|さいかいはつ}に{賛成|さんせい}する{住民|じゅうみん}がいる{一方|いっぽう}、",
                "{都市部|としぶ}で{保育所|ほいくしょ}が{足|た}りない{一方|いっぽう}、",
                "{電子|でんし}{書籍|しょせき}を{好|この}む{人|ひと}が{増|ふ}えている{一方|いっぽう}、",
                "{彼女|かのじょ}は{医師|いし}として{働|はたら}く{一方|いっぽう}、",
              ],
              right: [
                "{小説家|しょうせつか}としても{作品|さくひん}を{発表|はっぴょう}している。",
                "{古|ふる}い{町並|まちな}みを{残|のこ}したいという{声|こえ}もある。",
                "{紙|かみ}の{本|ほん}の{手触|てざわ}りを{大切|たいせつ}にする{人|ひと}も{少|すく}なくない。",
                "{地方|ちほう}では{子|こ}どもが{減|へ}って{閉園|へいえん}する{保育所|ほいくしょ}もある。",
              ],
              answer: [1, 3, 2, 0],
              en: [
                "While some residents support the redevelopment in front of the station, there are also voices wanting to preserve the old townscape.",
                "While there are not enough daycare centers in urban areas, in rural areas some are closing because the number of children has fallen.",
                "While more and more people prefer e-books, quite a few still value the feel of paper books.",
                "While she works as a doctor, she also publishes works as a novelist.",
              ],
            },
          ],
        },
        // ── 62 ──
        {
          no: 62,
          pattern: "〜ことから",
          phrase: "{減|へ}っている**ことから**",
          stars: 2,
          marks: [],
          usage: {
            ja: "{物|もの}や{土地|とち}がその{名前|なまえ}になった{理由|りゆう}や、{何|なに}かを{判断|はんだん}した{理由|りゆう}や、そうなった{原因|げんいん}を{言|い}いたいときに{使|つか}う。",
            en: "Used to give the reason why a thing or place got its name, the grounds on which a judgment was made, or the cause that led to a situation.",
          },
          forms: ["[Pl] + ことから", "[なA~~だ~~] な + ことから"],
          formNotes: [
            { ja: "「[なA]／[N] である + ことから」の{形|かたち}もある。", en: "The form なA / N + である + ことから is also used." },
          ],
          examples: [
            { ja: "この{池|いけ}は{上|うえ}から{見|み}るとひょうたんの{形|かたち}をしている**ことから**、「ひょうたん{池|いけ}」と{呼|よ}ばれている。", en: "This pond is called “Hyōtan-ike” (Gourd Pond) because it is shaped like a gourd when seen from above." },
            { ja: "{部屋|へや}の{電気|でんき}がついていた**ことから**、{彼|かれ}はもう{帰宅|きたく}していると{思|おも}った。", en: "Since the light in his room was on, I thought he had already come home." },
            { ja: "この{地域|ちいき}は{日照|にっしょう}{時間|じかん}が{長|なが}い**ことから**、{屋根|やね}に{太陽光|たいようこう}パネルを{付|つ}ける{家|いえ}が{多|おお}い。", en: "Because this region gets long hours of sunshine, many houses have solar panels on their roofs." },
            { ja: "{駅|えき}から{遠|とお}く{不便|ふべん}である**ことから**、そのアパートは{家賃|やちん}が{安|やす}く{設定|せってい}されている。", en: "Because it is far from the station and inconvenient, that apartment's rent has been set low." },
            { ja: "{同|おな}じ{症状|しょうじょう}の{患者|かんじゃ}が{相次|あいつ}いだ**ことから**、{保健所|ほけんじょ}が{調査|ちょうさ}に{乗|の}り{出|だ}した。", en: "Because patients with the same symptoms appeared one after another, the public health center launched an investigation." },
          ],
          deepDive:
            "**〜ことから** = *from the fact that ~* → *because / since ~*. It is an objective, written way of giving a reason, and it has three characteristic uses:\n\n" +
            "- **Origin of a name**: 〜ことから、〇〇と呼ばれている / 〇〇という名前がついた. This is by far the most frequent JLPT context.\n" +
            "- **Grounds for a judgment or inference**: 玄関の鍵が開いていたことから、家族の誰かが先に帰ったとわかった. The second half is often 〜と考えられる / 〜とわかる / 〜と思われる.\n" +
            "- **Cause of a later development**: 事故が相次いだことから、規則が変わった.\n\n" +
            "Nuance: ことから presents the reason as an observable **fact** from which a conclusion or development follows. So it is unnatural with the speaker's personal requests, invitations or commands: ✗雨が降っていることから、傘を持って行きなさい → 雨が降っているから/ので.\n\n" +
            "Connection pitfalls: なA keeps な (静かなことから) or uses である; nouns **must** use である (有名な観光地であることから). ✗観光地のことから / ✗観光地だことから.\n\n" +
            "Compare with the other こと patterns in the book (similar-pattern list): 〜こと。 (#8, written rule), 〜ことか (#42, exclamation), 〜ことに (#40, emotion), 〜ことだ (#87, advice), Vたことにする (#119), 〜ことなく (#20), 〜ないことには (#110), 〜ことはない (#49), 〜ないことはない (#54). Only ことから expresses a reason.\n\n" +
            "Also compare **〜ところから** (similar meaning, less common) and the neutral reason markers 〜ので / 〜ため. In the review test, a sentence ending in と呼ばれている / という名前がついた is a strong signal for ことから.",
          see: [8, 20, 40, 42, 49, 54, 87, 110, 119],
          index: ["〜ことから", "Nであることから", "なAなことから"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{彼|かれ}はいつも{笑顔|えがお}を{絶|た}やさないことから、",
                "{現場|げんば}に{泥|どろ}のついた{足跡|あしあと}が{残|のこ}っていたことから、",
                "この{地方|ちほう}は{昔|むかし}からよい{水|みず}に{恵|めぐ}まれていたことから、",
                "{祖母|そぼ}は{若|わか}いころ{体|からだ}が{弱|よわ}かったことから、",
              ],
              right: [
                "{酒造|さけづく}りが{盛|さか}んになった。",
                "{健康|けんこう}のために{毎朝|まいあさ}{散歩|さんぽ}を{始|はじ}めたそうだ。",
                "「ひまわり」というあだ{名|な}で{呼|よ}ばれている。",
                "{犯人|はんにん}は{雨|あめ}の{中|なか}を{歩|ある}いてきたと{考|かんが}えられる。",
              ],
              answer: [2, 3, 0, 1],
              en: [
                "Because he is always smiling, he's called by the nickname “Sunflower”.",
                "Since muddy footprints were left at the scene, the culprit is thought to have walked there in the rain.",
                "Because this region has been blessed with good water since long ago, sake brewing flourished here.",
                "Because my grandmother was physically weak when she was young, she apparently started taking a walk every morning for her health.",
              ],
            },
          ],
        },
        // ── 63 ──
        {
          no: 63,
          pattern: "〜のみならず",
          phrase: "{打撃|だげき}を{与|あた}えた**のみならず**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜のみならず」は、「〜だけでなく」と{同|おな}じように{使|つか}う。",
            en: "〜のみならず is used in the same way as 〜だけでなく: “not only ~ (but also …)”.",
          },
          forms: ["[Pl] + のみならず", "[N~~だ~~] + のみならず"],
          formNotes: [
            { ja: "「[なA]／[N] である + のみならず」の{形|かたち}もある。", en: "The form なA / N + である + のみならず also exists." },
            { ja: "「ただ〜のみならず」「ひとり〜のみならず」という{言|い}い{方|かた}もある。", en: "It can also be strengthened as ただ〜のみならず or ひとり〜のみならず (“not merely ~”)." },
          ],
          examples: [
            { ja: "この{祭|まつ}りには{地元|じもと}の{人|ひと}**のみならず**、{海外|かいがい}からも{多|おお}くの{見物客|けんぶつきゃく}が{訪|おとず}れる。", en: "Not only local people but also many spectators from overseas visit this festival." },
            { ja: "{森林|しんりん}は{木材|もくざい}を{生|う}み{出|だ}す**のみならず**、{水|みず}をたくわえ、{土砂|どしゃ}{災害|さいがい}を{防|ふせ}ぐ{働|はたら}きもしている。", en: "Forests not only produce timber but also store water and help prevent landslides." },
            { ja: "{彼|かれ}の{提案|ていあん}は{斬新|ざんしん}である**のみならず**、{費用|ひよう}の{面|めん}でも{現実的|げんじつてき}だった。", en: "His proposal was not only novel but also realistic in terms of cost." },
            { ja: "{高齢化|こうれいか}は**ひとり**{日本|にほん}**のみならず**、{多|おお}くの{先進国|せんしんこく}が{抱|かか}える{課題|かだい}だ。", en: "Population ageing is a challenge not for Japan alone but for many developed countries." },
            { ja: "その{作家|さっか}は**ただ**{筆|ふで}が{速|はや}い**のみならず**、{一作|いっさく}ごとに{新|あたら}しい{文体|ぶんたい}に{挑戦|ちょうせん}している。", en: "That writer not merely writes fast but also tries a new style with every work." },
          ],
          deepDive:
            "**のみ** is a formal word for *only* (≈ だけ, see #58), so **〜のみならず** (*if it is not only ~*) is the written counterpart of **〜だけでなく / 〜ばかりでなく**. The second half usually contains **も** or **まで/さえ**, adding a further item in the **same direction**: 東京のみならず、地方の町でも人気がある.\n\n" +
            "Connection: plain form of verbs/い-adjectives; nouns attach directly (若者のみならず) or via である (重要な課題であるのみならず). な-adjectives **cannot** attach directly (✗便利のみならず) — use である (便利であるのみならず). The である versions are common in essays.\n\n" +
            "Intensified forms: **ただ〜のみならず** and **ひとり〜のみならず** (*not just / not merely ~ alone*). ひとり here is the adverb 独り/一人 meaning *solely*; ひとり日本のみならず = *not Japan alone*.\n\n" +
            "The key test point: the added information must **build on** the first, not contrast with it or give a conclusion. In the practice, one option adds another point of the same kind (✓), while the other states an obligation, a result or an unrelated fact (✗). For example, ✗この映画は大ヒットしたのみならず、続編を急がなければならない mixes an achievement with a duty.\n\n" +
            "Related patterns:\n" +
            "- **〜に限らず** (#72): *not limited to ~* — also widens the scope; mostly with nouns.\n" +
            "- **〜はもちろん / 〜はもとより**: *not to mention ~*; the first item is the obvious one.\n" +
            "- **〜ばかりか**: similar, sometimes adds something surprising or worse.\n\n" +
            "Register: stiff and written; in conversation use だけじゃなくて.",
          see: [58],
          index: ["〜のみならず", "ただ〜のみならず", "ひとり〜のみならず", "Nであるのみならず"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "よい{教師|きょうし}とは、{知識|ちしき}が{豊富|ほうふ}であるのみならず、（　）。", options: ["{生徒|せいと}{一人一人|ひとりひとり}の{気持|きも}ちを{理解|りかい}できる{人|ひと}だ", "{生徒|せいと}の{質問|しつもん}にはあまり{答|こた}えない{人|ひと}だ"], answer: 0, en: "A good teacher is someone who not only has abundant knowledge but can also understand each student's feelings.", why: { en: "のみならず adds a further merit of the same kind. Not answering students' questions is a flaw, so it cannot be added with のみならず." } },
                { q: "この{映画|えいが}は{国内|こくない}で{大|だい}ヒットしたのみならず、（　）。", options: ["{続編|ぞくへん}の{制作|せいさく}を{急|いそ}がなければならない", "{海外|かいがい}の{映画祭|えいがさい}でも{高|たか}い{評価|ひょうか}を{受|う}けた"], answer: 1, en: "This film not only was a big hit in Japan but also received high praise at overseas film festivals.", why: { en: "The second half must add another achievement, not an obligation." } },
                { q: "{自転車|じてんしゃ}は{今|いま}や{通勤|つうきん}の{手段|しゅだん}のみならず、（　）。", options: ["{健康|けんこう}づくりや{趣味|しゅみ}としても{楽|たの}しまれている", "{駅|えき}まで{乗|の}っていく{人|ひと}が{多|おお}い"], answer: 0, en: "Bicycles are now enjoyed not only as a means of commuting but also for fitness and as a hobby." },
                { q: "その{台風|たいふう}の{被害|ひがい}は{沿岸部|えんがんぶ}のみならず（　）。", options: ["{復旧|ふっきゅう}にはまだ{時間|じかん}がかかる", "{内陸|ないりく}の{町|まち}にまで{及|およ}んだ"], answer: 1, en: "The damage from the typhoon extended not only to the coastal areas but even to inland towns." },
              ],
            },
          ],
        },
        // ── 64 ──
        {
          no: 64,
          pattern: "〜といった",
          phrase: "クマやキツネ**といった**",
          stars: 1,
          marks: [],
          usage: {
            ja: "{代表的|だいひょうてき}な{例|れい}をあげて{説明|せつめい}するときの{言い方|いいかた}で、「〜など」と{同|おな}じ{意味|いみ}を{表|あらわ}す。",
            en: "A way of explaining by giving typical examples; it has the same meaning as 〜など (“such as ~”).",
          },
          forms: ["[N] + といった"],
          examples: [
            { ja: "ほうれん{草|そう}や{小松菜|こまつな}**といった**{緑|みどり}の{野菜|やさい}には、{鉄分|てつぶん}が{多|おお}く{含|ふく}まれている。", en: "Green vegetables such as spinach and komatsuna contain a lot of iron." },
            { ja: "{駅|えき}の{案内|あんない}は{英語|えいご}、{中国語|ちゅうごくご}、{韓国語|かんこくご}**といった**{言語|げんご}でも{表示|ひょうじ}されている。", en: "Station information is also displayed in languages such as English, Chinese and Korean." },
            { ja: "{地震|じしん}や{台風|たいふう}**といった**{自然|しぜん}{災害|さいがい}に{備|そな}えて、{水|みず}や{食料|しょくりょう}を{用意|ようい}しておこう。", en: "Let's keep water and food ready in case of natural disasters such as earthquakes and typhoons." },
            { ja: "{将棋|しょうぎ}や{囲碁|いご}**といった**{頭|あたま}を{使|つか}うゲームは、{年齢|ねんれい}に{関係|かんけい}なく{楽|たの}しめる。", en: "Games that use your head, such as shogi and go, can be enjoyed regardless of age." },
          ],
          deepDive:
            "**〜といった** (from という + た) links **examples** to the category noun that follows: **A や B といった C** = *C such as A and B*. It is a little more formal and written than 〜などの, and it signals that the list is **not exhaustive** — A and B are representative members of C.\n\n" +
            "Shape: the examples are typically joined with や or listed with commas (東京、大阪、福岡といった大都市), and the pattern is followed by a noun. ✗ネズミやビーバーといった。 is incomplete; if the list ends the sentence, use 〜など.\n\n" +
            "Nuance and contrasts:\n" +
            "- **〜などの**: the everyday equivalent; can also be used with a single example.\n" +
            "- **〜という + N**: names or defines *one* thing (田中という人 = *a person called Tanaka*). といった is about a *group* represented by examples.\n" +
            "- **〜をはじめ（とする）**: *starting with ~* — puts the most important example first.\n" +
            "- **〜など**, **〜とか**: casual listing.\n\n" +
            "Common mistake: putting the category **before** といった. ✓りんごやみかんといった果物; ✗果物といったりんご. The examples come first, the category after.\n\n" +
            "JLPT tip: in 問題2 (sentence order), といった is a strong clue — the piece before it must be a list of examples and the piece after it a general noun.",
          see: [],
          index: ["AやBといったN", "〜といった"],
        },
        // ── 65 ──
        {
          no: 65,
          pattern: "〜にしたがって／〜にしたがい",
          phrase: "たまる**にしたがって**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「〜にしたがって」は、「〜の{変化|へんか}に{合|あ}わせて、ほかのことも{変化|へんか}する」と{言|い}いたいときに{使|つか}う。「〜にあわせて」と{言|い}いたいときにも{使|つか}う。",
            en: "Used to say “something else changes along with a change in ~”. It is also used when you want to say “in line with ~”.",
          },
          forms: ["[V-る] + にしたがって", "[V-る] + にしたがい", "[N] + にしたがって", "[N] + にしたがい"],
          examples: [
            { ja: "{日|ひ}が{短|みじか}くなる**にしたがって**、{朝|あさ}{起|お}きるのがつらくなってきた。", en: "As the days get shorter, getting up in the morning has become harder." },
            { ja: "{町|まち}の{人口|じんこう}の{減少|げんしょう}**にしたがい**、{商店街|しょうてんがい}の{店|みせ}も{少|すく}なくなった。", en: "With the town's population decline, the number of shops in the shopping street has fallen too." },
            { ja: "{経験|けいけん}を{積|つ}む**にしたがって**、{仕事|しごと}の{全体|ぜんたい}が{見|み}えるようになった。", en: "As I gained experience, I came to see the job as a whole." },
            { ja: "{係員|かかりいん}の{指示|しじ}**にしたがって**、{落|お}ち{着|つ}いて{避難|ひなん}してください。", en: "Please evacuate calmly, following the instructions of the staff." },
          ],
          plus: [
            {
              pattern: "〜につれて／〜につれ",
              stars: 3,
              marks: ["formal"],
              usage: {
                ja: "「[V-る] + につれて／につれ」も、「〜」と{一緒|いっしょ}に{変化|へんか}することを{表|あらわ}す。",
                en: "V-る + につれて / につれ also expresses that something changes together with “~”.",
              },
              forms: ["[V-る] + につれて", "[V-る] + につれ"],
              examples: [
                { ja: "{試合|しあい}が{進|すす}む**につれて**、{観客|かんきゃく}の{声援|せいえん}も{大|おお}きくなっていった。", en: "As the match went on, the spectators' cheering grew louder." },
                { ja: "{子|こ}どもが{成長|せいちょう}する**につれ**、{家族|かぞく}で{出|で}かける{機会|きかい}は{減|へ}っていった。", en: "As the children grew up, there were fewer chances to go out as a family." },
                { ja: "{雨|あめ}が{強|つよ}くなる**につれて**、{川|かわ}の{水位|すいい}もどんどん{上|あ}がっていった。", en: "As the rain grew heavier, the river level kept rising." },
              ],
            },
          ],
          deepDive:
            "**〜にしたがって** comes from 従う *to follow / obey*. It has two meanings, and the practice tests both:\n\n" +
            "- **Proportional change**: *as A changes, B changes too*. A is a verb or noun of change (増える, 進む, 近づく, 変化, 普及) and B must also express **change** — 〜くなる, 〜ようになる, 減った, 上昇した, 〜ていく. ✗秋が深まるにしたがって、木々は赤い is wrong; ✓赤く色づいていく.\n" +
            "- **Following / in accordance with**: *following a rule, instructions, advice*: 医師の助言にしたがって食事を見直した, ごみは市の規則にしたがって処理される. Here B is an action done according to A.\n\n" +
            "**にしたがい** is the written, clause-linking form.\n\n" +
            "Plus **〜につれて / につれ** covers only the first meaning (proportional change) — you cannot say ✗指示につれて避難する. It feels slightly more natural for gradual, natural change and in narratives (時間がたつにつれて). The book gives V-る + につれて; nouns of change (時代の変化につれて) are also seen.\n\n" +
            "Related patterns of proportional change:\n" +
            "- **〜とともに**: *along with ~*, also *together with* (a person) and *at the same time as*.\n" +
            "- **〜に伴って**: formal, often for large-scale social change (高齢化に伴って).\n" +
            "- **〜ば〜ほど**: *the more ~, the more ~*.\n" +
            "- **〜に応じて** (#4): *adjusting to fit* rather than changing together.\n\n" +
            "Common mistake: using a one-time event before にしたがって (✗結婚するにしたがって). A must be a process that can progress gradually.\n\n" +
            "JLPT tip: if the second half contains a change expression and the first half a gradual process, にしたがって / につれて / とともに are all candidates; eliminate by checking the “following instructions” meaning, which only にしたがって has.",
          see: [],
          index: ["Vるにしたがって", "Nにしたがって", "〜にしたがい", "Vるにつれて", "〜につれ"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{説明書|せつめいしょ}の{手順|てじゅん}にしたがって、（　）。", options: ["{棚|たな}を{組|く}み{立|た}てた", "{組|く}み{立|た}ては{難|むずか}しかった"], answer: 0, en: "Following the steps in the manual, I assembled the shelf.", why: { en: "In the “following ~” meaning, the second half must be an action carried out according to the instructions." } },
                { q: "{秋|あき}が{深|ふか}まるにしたがって、{山|やま}の{木々|きぎ}は（　）。", options: ["{赤|あか}い", "{赤|あか}く{色|いろ}づいていく"], answer: 1, en: "As autumn deepens, the trees on the mountain gradually turn red.", why: { en: "The second half must express a change, not a static state." } },
                { q: "{機械化|きかいか}が{進|すす}むにしたがい、{工場|こうじょう}で{働|はたら}く{人|ひと}の{数|かず}は（　）。", options: ["{大幅|おおはば}に{減|へ}った", "{昔|むかし}より{少|すく}ない"], answer: 0, en: "As mechanization advanced, the number of people working in factories fell sharply.", why: { en: "昔より少ない describes a comparison/state; にしたがって needs a change verb such as 減った." } },
                { q: "{標高|ひょうこう}が{高|たか}くなるにしたがって、{空気|くうき}が（　）。", options: ["{薄|うす}い", "{薄|うす}くなる"], answer: 1, en: "As the altitude rises, the air becomes thinner." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["から見ると", "ことから", "のみならず", "にしたがって", "といった", "一方"],
        items: [
          { q: "{駅前|えきまえ}の{商店街|しょうてんがい}は{年々|ねんねん}{活気|かっき}を{失|うしな}っている＿＿、{郊外|こうがい}の{大型|おおがた}{店|てん}は{休日|きゅうじつ}になると{客|きゃく}でにぎわう。", answer: "一方", en: "While the shopping street in front of the station is losing its liveliness year by year, the large stores in the suburbs are crowded with customers on holidays." },
          { q: "{年|とし}を{重|かさ}ねる＿＿、{親|おや}の{言葉|ことば}の{意味|いみ}がわかるようになってきた。", answer: "にしたがって", en: "As I've grown older, I've come to understand what my parents' words meant." },
          { q: "{彼女|かのじょ}の{歌|うた}は{若者|わかもの}＿＿、{年配|ねんぱい}の{人|ひと}たちの{心|こころ}もつかんだ。", answer: "のみならず", en: "Her songs captured the hearts not only of young people but of older people too." },
          { q: "この{橋|はし}は{形|かたち}が{眼鏡|めがね}に{似|に}ている＿＿、「めがね{橋|ばし}」と{呼|よ}ばれている。", answer: "ことから", en: "This bridge is called “Megane-bashi” (Spectacles Bridge) because its shape resembles a pair of glasses." },
          { q: "{毎日|まいにち}{満員|まんいん}{電車|でんしゃ}に{乗|の}っている{私|わたし}＿＿、{車|くるま}で{通勤|つうきん}できる{人|ひと}がうらやましい。", answer: "から見ると", en: "From the point of view of someone like me who rides packed trains every day, people who can commute by car are enviable." },
          { q: "{俳句|はいく}や{短歌|たんか}＿＿{短|みじか}い{詩|し}は、{外国|がいこく}でも{楽|たの}しまれている。", answer: "といった", en: "Short poems such as haiku and tanka are enjoyed abroad as well." },
        ],
      },
    },
    // ───────────────────────────── PART (2) ─────────────────────────────
    {
      label: "(2)",
      canDo: [
        { ja: "レポートや{論説文|ろんせつぶん}の{説明|せつめい}が{理解|りかい}できる。", en: "Understand an explanation in a report or essay." },
      ],
      sample: {
        kind: "essay",
        heading: "ダムとサケと{森|もり}（2）",
        lines: [
          { ja: "こうした{問題|もんだい}を{受|う}けて、{役目|やくめ}を{終|お}えた{古|ふる}いダムを{取|と}り{除|のぞ}く{動|うご}きが{各地|かくち}で{出|で}てきた。ダムを{取|と}り{除|のぞ}くことで、{失|うしな}われた{川|かわ}の{環境|かんきょう}を{再生|さいせい}し**{得|う}る**という{研究|けんきゅう}{結果|けっか}も{出|で}ている。", en: "In response to these problems, moves to remove old dams that have outlived their purpose have appeared in various places. There are also research findings that removing a dam can restore a river environment that had been lost." },
          { ja: "ところが、{実際|じっさい}の{撤去|てっきょ}は、{多|おお}くの{関係者|かんけいしゃ}の{予想|よそう}**に{反|はん}して**{難航|なんこう}した。", en: "Contrary to what many of those involved had predicted, however, the actual removal ran into great difficulties." },
          { ja: "ダム{湖|こ}が{観光|かんこう}{資源|しげん}になっている{地域|ちいき}も{多|おお}く、{住民|じゅうみん}の{間|あいだ}では{撤去|てっきょ}**に{関|かん}して**{慎重|しんちょう}な{意見|いけん}が{少|すく}なくなかったのだ。", en: "In many areas the dam lake had become a tourist attraction, and among residents there were quite a few cautious opinions concerning the removal." },
          { ja: "ダムがなくなれば{川|かわ}の{生|い}き{物|もの}が{戻|もど}ってくる**{反面|はんめん}**、{大雨|おおあめ}のときの{安全|あんぜん}をどう{守|まも}るかという{課題|かだい}も{残|のこ}る。{計算|けいさん}**{上|じょう}**は{問題|もんだい}がなくても、{住民|じゅうみん}が{不安|ふあん}を{感|かん}じるのは{当然|とうぜん}だろう。", en: "Without the dam, the river's creatures come back, but on the other hand the question of how to keep people safe during heavy rain remains. Even if there is no problem on paper, it is natural for residents to feel uneasy." },
          { ja: "{説明会|せつめいかい}が{何度|なんど}も{開|ひら}かれ、{工事|こうじ}が{始|はじ}まるまでには{長|なが}い{年月|ねんげつ}がかかった。", en: "Briefing sessions were held again and again, and it took many years before construction began." },
          { ja: "{現在|げんざい}、その{川|かわ}ではサケの{姿|すがた}が{再|ふたた}び{見|み}られるようになり、{河口|かこう}の{砂浜|すなはま}も{少|すこ}しずつ{回復|かいふく}し**つつある**という。", en: "Today, salmon can be seen in that river again, and the beach at the river mouth is said to be gradually recovering." },
          { ja: "{川|かわ}の{再生|さいせい}を{目指|めざ}す{動|うご}きは、{大|おお}きな{川|かわ}**に{限|かぎ}らず**、{町|まち}の{中|なか}を{流|なが}れる{小|ちい}さな{水路|すいろ}にまで{広|ひろ}がっている。", en: "Efforts aimed at reviving rivers are spreading not only to large rivers but even to the small waterways that run through towns." },
          { ja: "{人間|にんげん}の{便利|べんり}さと{自然|しぜん}のバランスをどう{両立|りょうりつ}させるか。ダムの{撤去|てっきょ}は、その{答|こた}えを{探|さが}すための{一|ひと}つの{試|こころ}みだと{言|い}えるだろう。", en: "How can human convenience and the balance of nature be made compatible? Dam removal can be called one attempt to search for the answer." },
        ],
      },
      points: [
        // ── 66 ──
        {
          no: 66,
          pattern: "〜{得|う}る／〜{得|え}る／〜{得|え}ない",
          phrase: "{再生|さいせい}し**{得|う}る**",
          stars: 1,
          marks: ["formal"],
          usage: {
            ja: "「〜{得|う}る／〜{得|え}る」は「〜ができる・{可能性|かのうせい}がある」と{言|い}うときに{使|つか}い、「〜{得|え}ない」は「〜できない・{可能性|かのうせい}がない」と{言|い}うときに{使|つか}う。{論文|ろんぶん}などでよく{使|つか}う。",
            en: "〜得る / 〜得る (uru / eru) is used to say “it is possible / there is a possibility that ~”, and 〜得ない (enai) to say “it is impossible / there is no possibility”. Often used in essays and academic writing.",
          },
          forms: ["[V-~~ます~~] + {得|う}る／{得|え}る", "[V-~~ます~~] + {得|え}ない"],
          formNotes: [
            { ja: "「{考|かんが}える・{想像|そうぞう}する・ある・{知|し}る・{予測|よそく}する・{解決|かいけつ}する・{理解|りかい}する」などと{一緒|いっしょ}に{使|つか}われる。", en: "Typically used with verbs such as 考える, 想像する, ある, 知る, 予測する, 解決する, 理解する (考え得る, 想像し得る, あり得る, 知り得る …)." },
            { ja: "「ありえない」は、{信|しん}じられないという{気持|き}ちで、{会話|かいわ}でよく{使|つか}われる。", en: "ありえない is often used in conversation to say that something is unbelievable (see the idiomatic example)." },
          ],
          examples: [
            { ja: "{機械|きかい}が{止|と}まった{原因|げんいん}として{考|かんが}え**{得|う}る**ものを、{一|ひと}つずつ{調|しら}べていった。", en: "We checked, one by one, everything that could conceivably have caused the machine to stop." },
            { ja: "{小|ちい}さなミスが{大|おお}きな{事故|じこ}につながることも、{十分|じゅうぶん}あり**{得|う}る**。", en: "It is quite possible for a small mistake to lead to a major accident." },
            { ja: "わずか{数年|すうねん}でこれほど{技術|ぎじゅつ}が{進歩|しんぽ}するとは、{誰|だれ}も{予測|よそく}し**{得|え}なかった**。", en: "Nobody could have predicted that technology would advance this much in just a few years." },
            { ja: "その{日記|にっき}には、{本人|ほんにん}でなければ{知|し}り**{得|え}ない**{出来事|できごと}が{細|こま}かく{書|か}かれていた。", en: "That diary described in detail events that nobody but the writer could have known." },
            { ja: "A：{駅前|えきまえ}のパン{屋|や}、{来月|らいげつ}{閉店|へいてん}するんだって。\nB：えっ、うそ！　あんなに{人気|にんき}があるのに、**ありえない**よ。", en: "A: I heard the bakery by the station is closing next month.\nB: What, no way! It's so popular — that's unbelievable.", idiom: true },
          ],
          deepDive:
            "**得る** (*to obtain*) attached to a verb stem gives the classical-flavoured potential *can ~ / it is possible that ~*. It is the language of essays, reports and news analysis.\n\n" +
            "Reading trap: the affirmative dictionary form has **two** readings — **うる** and **える** (あり得る = ありうる / ありえる). うる is more common in the dictionary/attributive form, but うる has **no other forms**: the negative, past and ます forms always use え: **得ない (えない), 得た, 得ます**. ✗うない never occurs.\n\n" +
            "Connection is to the ます-stem: 考え得る, 起こり得る, 理解し得る, 予測し得ない.\n\n" +
            "Meaning points:\n" +
            "- It usually expresses **possibility / conceivability** (起こり得る事態 *a situation that could happen*) rather than personal ability. ✗私は泳ぎ得る sounds wrong — use 泳げる.\n" +
            "- It is most natural with verbs of thinking, knowing, existing and solving (see the ＊ note).\n" +
            "- **あり得る / あり得ない** are the everyday members. The book marks the ありえない example as idiomatic and adds a ＊ note: **ありえない** is a common conversational exclamation meaning *no way, unbelievable* (三時間も待たされるなんて、ありえない！). Young speakers even say ありえなくない (*not impossible*).\n\n" +
            "Don't confuse with **V-ざるを得ない** (#24, *can't help but ~*): 中止せざるを得ない = *we have no choice but to cancel*. Both contain 得ない, but #24 attaches to the ない-stem + ざる and expresses unavoidable obligation, while 〜得ない attaches to the ます-stem and expresses impossibility.\n\n" +
            "Related: **〜かねない** (*might (unfortunately) ~*) is for undesirable possibilities; 〜得る is neutral. **〜かねる** (*find it hard to ~*) is a polite refusal.\n\n" +
            "JLPT tip: know both readings and that 得ない is always えない.",
          see: [24],
          index: ["V得る（うる）", "V得る（える）", "V得ない", "あり得る", "ありえない"],
        },
        // ── 67 ──
        {
          no: 67,
          pattern: "〜に{反|はん}して／〜に{反|はん}する",
          phrase: "{予想|よそう}**に{反|はん}して**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{予想|よそう}したことや{期待|きたい}したこととは{反対|はんたい}の{結果|けっか}や{状態|じょうたい}になった」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “the result or situation turned out opposite to what was predicted or expected.”",
          },
          forms: ["[N] + に{反|はん}して", "[N] + に{反|はん}し", "[N] + に{反|はん}する + [N]", "[N] + に{反|はん}した + [N]"],
          formNotes: [
            { ja: "「{予想|よそう}・{期待|きたい}・{意向|いこう}」などと{一緒|いっしょ}に{使|つか}われる。", en: "Used with nouns such as 予想 (prediction), 期待 (expectation), 意向 (intention / wishes)." },
          ],
          examples: [
            { ja: "{専門家|せんもんか}の{予測|よそく}**に{反|はん}して**、{今年|ことし}の{冬|ふゆ}は{雪|ゆき}が{少|すく}なかった。", en: "Contrary to the experts' forecasts, there was little snow this winter." },
            { ja: "チームの{期待|きたい}**に{反|はん}し**、{新|あたら}しく{入|はい}った{選手|せんしゅ}はほとんど{活躍|かつやく}できなかった。", en: "Contrary to the team's expectations, the newly signed player hardly made any contribution." },
            { ja: "{住民|じゅうみん}の{意向|いこう}**に{反|はん}する**{計画|けいかく}は、{見直|みなお}すべきだ。", en: "A plan that goes against the wishes of the residents should be reconsidered." },
            { ja: "{新製品|しんせいひん}は{予想|よそう}**に{反|はん}した**{売|う}れ{行|ゆ}きで、{会社|かいしゃ}は{生産|せいさん}を{減|へ}らすことにした。", en: "The new product sold contrary to expectations, so the company decided to cut production." },
          ],
          deepDive:
            "**反する** means *to go against / be contrary to*. **Nに反して** = *contrary to N*, where N is almost always an expectation-type noun: 予想, 予測, 期待, 意向, 意思, 願い.\n\n" +
            "Forms and their jobs — this is exactly what the practice tests:\n" +
            "- **に反して / に反し** link to a **clause or predicate**: 予想に反して、雨が降らなかった / 予想に反して早く完成した. に反し is the written form.\n" +
            "- **に反する + N / に反した + N** modify a **noun**: 期待に反する結果, 予想に反した展開. The noun must follow immediately.\n\n" +
            "Direction: the result can be better **or** worse than expected. 予想に反して優勝した (a pleasant surprise) is just as correct as 期待に反して負けた.\n\n" +
            "Second meaning: with rules or norms, 〜に反する means *to violate*: 法律に反する行為 (*an act that breaks the law*), ルールに反する. The third practice item uses 意思 in this sense of acting against someone's will.\n\n" +
            "Compare:\n" +
            "- **〜に対して**: *toward / in contrast to*, a neutral comparison, not about expectations.\n" +
            "- **〜にもかかわらず** (#21): *despite ~*; the premise is a fact (雨にもかかわらず), whereas に反して takes an expectation noun.\n" +
            "- **〜どおり / 〜とおりに**: the opposite — *as expected*.\n\n" +
            "Common mistake: using an ordinary noun: ✗天気に反して → ✓天気予報に反して.",
          see: [],
          index: ["Nに反して", "Nに反し", "Nに反する", "Nに反した"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{新|あたら}しい{橋|はし}は{大方|おおかた}の{予想|よそう}（　）{半年|はんとし}も{早|はや}く{完成|かんせい}した。", options: ["に反して", "に反した"], answer: 0, en: "Contrary to most people's predictions, the new bridge was completed a full six months early.", why: { en: "What follows is an adverbial phrase + verb (半年も早く完成した), not a noun, so the linking form に反して is needed." } },
                { q: "{会議|かいぎ}は{社長|しゃちょう}の{意向|いこう}（　）{結論|けつろん}で{終|お}わった。", options: ["に反して", "に反する"], answer: 1, en: "The meeting ended with a conclusion that went against the president's wishes.", why: { en: "A noun (結論) follows directly, so the noun-modifying form に反する is needed." } },
                { q: "{住民|じゅうみん}の{意思|いし}（　）、ダムの{建設|けんせつ}を{進|すす}めるべきではない。", options: ["に反して", "に反する"], answer: 0, en: "The dam should not be built against the will of the residents.", why: { en: "A clause (ダムの建設を進める…) follows, not a noun, so に反して." } },
              ],
            },
          ],
        },
        // ── 68 ──
        {
          no: 68,
          pattern: "〜に{関|かん}して／〜に{関|かん}する",
          phrase: "{撤去|てっきょ}**に{関|かん}して**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「〜について」と{同|おな}じように、{話題|わだい}にしたり、{調|しら}べたりする{内容|ないよう}を{言|い}うときに{使|つか}う。{調査|ちょうさ}や{研究|けんきゅう}、{通知|つうち}などでよく{使|つか}う。",
            en: "Like 〜について, used to introduce a topic or to state what is being investigated. Common in surveys, research and official notices.",
          },
          forms: ["[N] + に{関|かん}して", "[N] + に{関|かん}する + [N]"],
          examples: [
            { ja: "この{図書館|としょかん}では、{郷土|きょうど}の{歴史|れきし}**に{関|かん}する**{資料|しりょう}を{集|あつ}めている。", en: "This library collects materials on local history." },
            { ja: "{個人|こじん}{情報|じょうほう}の{扱|あつか}い**に{関|かん}して**は、{社内|しゃない}で{細|こま}かいルールが{決|き}められている。", en: "Detailed in-house rules have been set regarding the handling of personal information." },
            { ja: "{市|し}は{高齢者|こうれいしゃ}の{買|か}い{物|もの}{事情|じじょう}**に{関|かん}して**、アンケート{調査|ちょうさ}を{行|おこな}った。", en: "The city conducted a questionnaire survey about the shopping situation of elderly people." },
            { ja: "{彼女|かのじょ}は{海洋|かいよう}プラスチック**に{関|かん}する**{論文|ろんぶん}で{賞|しょう}を{受|う}けた。", en: "She received an award for her paper on marine plastic." },
            { ja: "{事故|じこ}の{原因|げんいん}**に{関|かん}しても**、{現在|げんざい}{調査|ちょうさ}を{進|すす}めております。", en: "We are currently investigating the cause of the accident as well." },
          ],
          deepDive:
            "**〜に関して** (関する *to be related to*) = *about, concerning, with regard to*. It is the formal counterpart of **〜について**, preferred in official notices, questionnaires, research papers and business communication: 〜に関するお問い合わせ, 〜に関する調査, 〜に関して検討する.\n\n" +
            "Form choice (tested in the practice):\n" +
            "- **に関して** (+ は / も) links to a predicate: 〜に関して調査した, その件に関しては担当者から説明します.\n" +
            "- **に関する + N** directly modifies a noun: 環境に関する研究, 料金に関する質問. ✗に関して情報 is wrong; if you want a て-form before a noun you need の: **に関しての + N** (less formal but common).\n\n" +
            "Nuance vs. について:\n" +
            "- Largely interchangeable, but に関して sounds more official and can feel a little broader (*matters related to ~*), whereas について points more directly at the content (日本の歴史について話す).\n" +
            "- In casual speech, について (or just 〜のこと) is more natural.\n" +
            "- ～に関しては often highlights a topic in contrast: 値段に関しては問題ないが…\n\n" +
            "Related: **〜をめぐって** (*over / surrounding ~*) — used when there is debate or conflict around the topic (予算をめぐって議論が続く). **〜に対して** is about the target of an action or attitude, not a topic.\n\n" +
            "JLPT tip: if a noun follows the blank, choose に関する; if a verb or 、 follows, choose に関して. When the topic is marked as a contrast (…は), に関しては.",
          see: [],
          index: ["Nに関して", "Nに関する", "Nに関しては", "Nに関しての"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{料金|りょうきん}の{支払|しはら}い（　）ご{質問|しつもん}は、「よくある{質問|しつもん}」のページをご{覧|らん}ください。", options: ["に関して", "に関する"], answer: 1, en: "For questions about paying fees, please see the FAQ page." },
                { q: "{地域|ちいき}の{防災|ぼうさい}{意識|いしき}（　）、{市|し}が{住民|じゅうみん}{調査|ちょうさ}を{実施|じっし}した。", options: ["に関して", "に関する"], answer: 0, en: "The city carried out a residents' survey on awareness of disaster preparedness in the community." },
                { q: "{来年度|らいねんど}の{予算|よさん}（　）、{次回|じかい}の{会議|かいぎ}で{話|はな}し{合|あ}う{予定|よてい}です。", options: ["に関しては", "に関する"], answer: 0, en: "As for next year's budget, we plan to discuss it at the next meeting." },
              ],
            },
          ],
        },
        // ── 69 ──
        {
          no: 69,
          pattern: "〜{反面|はんめん}／〜{半面|はんめん}",
          phrase: "{戻|もど}ってくる**{反面|はんめん}**",
          stars: 1,
          marks: [],
          usage: {
            ja: "あることに{関|かん}して、2つの{反対|はんたい}の{面|めん}や{視点|してん}があることを{説明|せつめい}するときに{使|つか}う。",
            en: "Used to explain that one thing has two opposite aspects or can be seen from two opposite perspectives.",
          },
          forms: ["[Pl] + {反面|はんめん}／{半面|はんめん}", "[なA~~だ~~] な + {反面|はんめん}／{半面|はんめん}"],
          formNotes: [
            { ja: "「[なA]／[N] である + {反面|はんめん}」の{形|かたち}もある。", en: "The form なA / N + である + 反面 also exists." },
          ],
          examples: [
            { ja: "{一人暮|ひとりぐ}らしは{自由|じゆう}な**{反面|はんめん}**、{病気|びょうき}のときなどは{心細|こころぼそ}い。", en: "Living alone gives you freedom, but on the other hand it's lonely when you're sick." },
            { ja: "この{仕事|しごと}は{収入|しゅうにゅう}が{安定|あんてい}している**{反面|はんめん}**、{休|やす}みが{取|と}りにくい。", en: "This job has a stable income, but on the other hand it's hard to take time off." },
            { ja: "{格安|かくやす}{航空|こうくう}{会社|がいしゃ}は{運賃|うんちん}が{安|やす}い**{反面|はんめん}**、{荷物|にもつ}や{座席|ざせき}{指定|してい}に{追加|ついか}{料金|りょうきん}がかかる。", en: "Budget airlines have cheap fares, but on the other hand there are extra charges for baggage and seat selection." },
            { ja: "この{町|まち}は{有名|ゆうめい}な{観光地|かんこうち}である**{反面|はんめん}**、{住民|じゅうみん}にとっては{毎日|まいにち}の{生活|せいかつ}の{場|ば}でもある。", en: "While this town is a famous tourist destination, for its residents it is also the place where they live their daily lives." },
            { ja: "SNSは{情報|じょうほう}がすぐに{広|ひろ}まる**{半面|はんめん}**、{間違|まちが}った{情報|じょうほう}も{拡散|かくさん}しやすい。", en: "Social media spreads information quickly, but on the flip side, false information also spreads easily." },
          ],
          deepDive:
            "**反面** literally means *the opposite side*; **半面** means *one half / one side*. Both are read はんめん and are used in the same way: **A反面、B** = *while A, on the other hand B*, where A and B are **two contrasting aspects of the same thing**. Typically one is positive and the other negative: 安い反面、壊れやすい.\n\n" +
            "Connection: plain form; なA + な (便利な反面) or である; nouns are crossed out in the book's bracket, so N needs である (学生である反面). ✗学生の反面 / ✗学生だ反面.\n\n" +
            "How it differs from **〜一方（で）** (#61):\n" +
            "- 反面 requires the **same subject/topic** with two faces. ✗兄は背が高い反面、弟は低い (two different people) → ✓兄は背が高い一方、弟は低い / 〜のに対して.\n" +
            "- 一方 can contrast two different things, and also express two parallel roles (働く一方、勉強もしている). 反面 cannot express neutral parallel activities; it implies **opposition**.\n\n" +
            "Other relatives: **〜ものの** (#39, *although ~*) concedes a fact and then states something unexpected; **〜が / 〜けれども** are general contrast; **その反面** can open a new sentence, just like その一方で.\n\n" +
            "Style: written, analytical; perfect for essays that weigh pros and cons, as in the sample (the river's creatures come back, *but* flood safety remains a concern).\n\n" +
            "JLPT tip: in 問題2, 反面 is usually followed by a clause introducing a disadvantage (〜という問題もある, 〜という欠点もある). Put the advantage before it.",
          see: [],
          index: ["〜反面", "〜半面", "その反面", "Nである反面"],
        },
        // ── 70 ──
        {
          no: 70,
          pattern: "〜{上|じょう}",
          phrase: "{計算|けいさん}**{上|じょう}**は",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜{上|じょう}」は、「〜の{点|てん}から{考|かんが}えて」という{意味|いみ}で、{視点|してん}を{示|しめ}す{言葉|ことば}と{一緒|いっしょ}に{使|つか}う。",
            en: "〜上 (jō) means “in view of ~ / from the standpoint of ~” and is used together with words that indicate a perspective.",
          },
          forms: ["[N] + {上|じょう}"],
          formNotes: [
            { ja: "「{理論|りろん}・{職業|しょくぎょう}・{教育|きょういく}・{法律|ほうりつ}・{歴史|れきし}・{表面|ひょうめん}」などの{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "Used with nouns such as 理論 (theory), 職業 (occupation), 教育 (education), 法律 (law), 歴史 (history), 表面 (surface)." },
          ],
          examples: [
            { ja: "この{計画|けいかく}は{理論|りろん}**{上|じょう}**は{可能|かのう}だが、{実際|じっさい}には{予算|よさん}が{足|た}りない。", en: "This plan is possible in theory, but in reality the budget is insufficient." },
            { ja: "{法律|ほうりつ}**{上|じょう}**、18{歳|さい}になれば{親|おや}の{同意|どうい}なしで{契約|けいやく}ができる。", en: "Legally, once you turn 18 you can sign contracts without parental consent." },
            { ja: "この{城|しろ}は{歴史|れきし}**{上|じょう}**{重要|じゅうよう}な{戦|たたか}いの{舞台|ぶたい}となった。", en: "This castle was the setting of a historically important battle." },
            { ja: "その{会社|かいしゃ}は{表面|ひょうめん}**{上|じょう}**は{順調|じゅんちょう}に{見|み}えるが、{実|じつ}は{多|おお}くの{借金|しゃっきん}を{抱|かか}えている。", en: "On the surface that company looks to be doing well, but in fact it is carrying a lot of debt." },
            { ja: "{健康|けんこう}**{上|じょう}**の{理由|りゆう}で、{来月|らいげつ}{退職|たいしょく}することになった。", en: "For health reasons, I'll be leaving the company next month." },
          ],
          deepDive:
            "**N上（じょう）** is a Sino-Japanese suffix meaning *from the standpoint of N / in terms of N / as far as N is concerned*. It turns a noun into an adverbial (理論上は可能) or, with の, an adjective-like modifier (健康上の理由, 安全上の問題).\n\n" +
            "Common collocations you should simply learn as vocabulary:\n" +
            "- 理論上 *in theory*, 事実上 *in effect / de facto*, 形式上 *formally*, 表面上 *on the surface*\n" +
            "- 法律上 *legally*, 歴史上 *historically*, 職業上 *professionally*, 教育上 *educationally*, 健康上 *health-wise*, 安全上 *for safety reasons*, 立場上 *because of one's position*, 計算上 *by calculation*\n\n" +
            "Typical shapes: **〜上は（…が、実際は）** — contrasting appearance/theory with reality (表面上は順調だが…); **〜上の + N** (歴史上の出来事); **〜上、…** as a reason (職業上、秘密を守らなければならない).\n\n" +
            "Reading pitfall: it is **じょう**, not うえ. Compare the other 上 patterns in the similar-pattern list, all read **うえ**:\n" +
            "- **V上で** (#14, *when/for doing ~*) and **〜上で** (#117, *after ~*)\n" +
            "- **〜上は** (#18, *now that ~*)\n" +
            "- **〜上（に）** (#102, *on top of ~, in addition*)\n" +
            "N上 (#70) attaches straight to a Sino-Japanese noun without の or a verb, which is the easiest way to tell it apart.\n\n" +
            "Not every noun works: it is limited to nouns naming a field, viewpoint or criterion. ✗先生上, ✗りんご上.\n\n" +
            "JLPT tip: 立場上 and 健康上の理由 appear constantly; also 事実上 in news (事実上の決定).",
          see: [14, 18, 102, 117],
          index: ["N上（じょう）", "理論上", "事実上", "表面上", "〜上の理由"],
          practice: [
            {
              type: "fill",
              prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
              bank: ["事実上", "理論上", "教育上", "職業上"],
              items: [
                { q: "この{計算|けいさん}{方法|ほうほう}は＿＿は{正|ただ}しいが、{実際|じっさい}のデータには{当|あ}てはまらないことがある。", answer: "理論上", en: "This calculation method is correct in theory, but sometimes it doesn't fit the actual data." },
                { q: "{看護師|かんごし}の{姉|あね}は＿＿、{夜勤|やきん}のある{不規則|ふきそく}な{生活|せいかつ}を{送|おく}っている。", answer: "職業上", en: "Because of her job, my older sister, a nurse, lives an irregular life that includes night shifts." },
                { q: "{両社|りょうしゃ}の{合併|がっぺい}はまだ{正式|せいしき}に{発表|はっぴょう}されていないが、＿＿は{決定|けってい}したと{言|い}ってよい。", answer: "事実上", en: "The merger of the two companies hasn't been officially announced yet, but it can be said to have been effectively decided." },
                { q: "{学校|がっこう}の{近|ちか}くに{娯楽|ごらく}{施設|しせつ}を{作|つく}ることは、＿＿の{配慮|はいりょ}から{制限|せいげん}されている。", answer: "教育上", en: "Building entertainment facilities near schools is restricted out of educational considerations." },
              ],
            },
          ],
        },
        // ── 71 ──
        {
          no: 71,
          pattern: "〜つつある",
          phrase: "{回復|かいふく}し**つつある**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{町|まち}の{書店|しょてん}は{減|へ}りつつある」のように、{少|すこ}しずつ{変化|へんか}していると{説明|せつめい}するときに{使|つか}う。",
            en: "Used to explain that something is changing little by little, as in 町の書店は減りつつある (neighbourhood bookshops are steadily decreasing).",
          },
          forms: ["[V-~~ます~~] + つつある"],
          examples: [
            { ja: "キャッシュレス{決済|けっさい}は、{高齢者|こうれいしゃ}の{間|あいだ}にも{広|ひろ}まり**つつある**。", en: "Cashless payment is gradually spreading among elderly people too." },
            { ja: "{温暖化|おんだんか}の{影響|えいきょう}で、{桜|さくら}の{開花|かいか}{時期|じき}が{早|はや}まり**つつある**。", en: "Due to global warming, the cherry blossoms are blooming earlier and earlier." },
            { ja: "{台風|たいふう}は{勢力|せいりょく}を{弱|よわ}めながら、{北|きた}へ{遠|とお}ざかり**つつある**。", en: "The typhoon is moving away to the north while weakening." },
            { ja: "{人口|じんこう}が{減|へ}り**つつある**{地方|ちほう}の{町|まち}では、バスの{本数|ほんすう}も{少|すく}なくなっている。", en: "In rural towns where the population is steadily shrinking, the number of buses is also falling." },
          ],
          deepDive:
            "**V-ます + つつある** describes a change that is **in progress and moving toward a goal or end state**: *is (gradually) ~ing, is in the process of ~ing*. It is formal and written — news, reports, essays.\n\n" +
            "The crucial difference from **〜ている**:\n" +
            "- つつある is only used with **change verbs** (増える, 減る, 広がる, 回復する, 変わる, 失われる, 近づく). It stresses that the change is not complete yet: 取り壊しは終わりつつあるが、まだ壁が残っている.\n" +
            "- With change verbs, 〜ている often means the **result state**: 失われている = *has been lost*; 回復している = *has recovered*. So 消えつつある方言 (*dialects that are disappearing*) ≠ 消えている方言.\n" +
            "- つつある **cannot** be used for ordinary ongoing actions: ✗遊びつつある, ✗食べつつある, ✗歌いつつある. For *is running / eating*, use 〜ている. This is exactly what the practice checks.\n\n" +
            "Compare with other つつ patterns in the similar-pattern list:\n" +
            "- **Vつつ** (#30): *while ~ing* (two actions at once, formal ながら).\n" +
            "- **Vつつも** (#112): *although ~* (concession: 知りつつも).\n\n" +
            "Similar expressions: 〜てきている / 〜ていく (gradual change, neutral), 〜一方だ (#115, only one direction, often negative).\n\n" +
            "JLPT tip: when you see 徐々に, 少しずつ, 次第に, 年々 plus a change verb in formal writing, つつある is a strong candidate.",
          see: [30, 112],
          index: ["Vつつある"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{子|こ}どもたちが{公園|こうえん}で{楽|たの}しそうに（　）。", options: ["{遊|あそ}んでいる", "{遊|あそ}びつつある"], answer: 0, en: "The children are playing happily in the park.", why: { en: "つつある is only for gradual change toward an end state, not for everyday ongoing actions like playing." } },
                { q: "{電話|でんわ}が{鳴|な}ったとき、{私|わたし}はちょうど{夕飯|ゆうはん}を（　）ところだった。", options: ["{作|つく}っている", "{作|つく}りつつある"], answer: 0, en: "When the phone rang, I was right in the middle of making dinner." },
                { q: "{過疎化|かそか}で{消|き}え（　）{方言|ほうげん}を、{録音|ろくおん}して{残|のこ}す{取|と}り{組|く}みが{始|はじ}まった。", options: ["ている", "つつある"], answer: 1, en: "An initiative has begun to record and preserve dialects that are gradually disappearing due to depopulation.", why: { en: "消えている would mean the dialects have already vanished. つつある shows they are in the process of disappearing — which is why they can still be recorded." } },
                { q: "{古|ふる}い{校舎|こうしゃ}の{取|と}り{壊|こわ}しは（　）が、まだ{一部|いちぶ}の{壁|かべ}が{残|のこ}っている。", options: ["{終|お}わっている", "{終|お}わりつつある"], answer: 1, en: "The demolition of the old school building is nearly finished, but part of the walls is still standing.", why: { en: "終わっている would mean the demolition is already complete, which contradicts まだ一部の壁が残っている. つつある shows it is still in progress." } },
              ],
            },
          ],
        },
        // ── 72 ──
        {
          no: 72,
          pattern: "〜に{限|かぎ}らず",
          phrase: "{大|おお}きな{川|かわ}**に{限|かぎ}らず**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜に{限|かぎ}らず」は、「〜だけでなく、ほかにも」と{言|い}いたいときに{使|つか}う。",
            en: "〜に限らず is used to say “not just ~, but also others”.",
          },
          forms: ["[N] + に{限|かぎ}らず"],
          examples: [
            { ja: "{熱中症|ねっちゅうしょう}は{屋外|おくがい}**に{限|かぎ}らず**、{室内|しつない}でも{起|お}こるので{注意|ちゅうい}が{必要|ひつよう}だ。", en: "Heatstroke happens not only outdoors but also indoors, so you need to be careful." },
            { ja: "この{店|みせ}は{週末|しゅうまつ}**に{限|かぎ}らず**、{平日|へいじつ}も{行列|ぎょうれつ}ができる。", en: "This shop has a queue not only on weekends but on weekdays as well." },
            { ja: "{言葉|ことば}の{乱|みだ}れは{若者|わかもの}**に{限|かぎ}らず**、どの{世代|せだい}にも{見|み}られる。", en: "Sloppy use of language is not limited to young people; it's seen in every generation." },
            { ja: "{食品|しょくひん}**に{限|かぎ}らず**、{日用品|にちようひん}の{値段|ねだん}も{次々|つぎつぎ}に{上|あ}がっている。", en: "Not only food but also the prices of daily necessities are going up one after another." },
          ],
          deepDive:
            "**〜に限らず** is the negative of 〜に限る (*to be limited to*): *not limited to ~* → *not only ~ (but others too)*. It **widens** the scope: the noun before it is one example, and the second half usually says the same holds for others, often with **も / でも / どんな〜でも / あらゆる〜**.\n\n" +
            "- 平日に限らず、週末も… (*not just on weekdays but at weekends too*)\n" +
            "- 日本に限らず、欧米でも… (*not only in Japan but also in the West*)\n\n" +
            "It attaches directly to a noun. For verbs and adjectives use 〜のみならず (#63) or 〜だけでなく.\n\n" +
            "Distinguish it from look-alikes (the practice pits these against each other):\n" +
            "- **〜を問わず** (#2): *regardless of* — needs a noun with a range of values or a pair (年齢を問わず, 男女を問わず). 春の桜を問わず is wrong because it doesn't express a range.\n" +
            "- **〜にもかかわらず** (#21): *despite ~* — a completely different meaning (concession).\n" +
            "- **〜において** (#6): *in / at (a field)* — just a location marker.\n" +
            "- **〜にしたがって** (#65): proportional change.\n\n" +
            "And other members of the 限る family from the similar-pattern list: **Nに限り** (#3, *only N*), **Nに限って〜ない** (#3, *N of all people would never*), **Vかぎり** (#23, *as long as*), **Nに限って** (#86, *just when / of all times*), **〜に限る** (#104, *~ is best*). Notice the neat opposition: 会員に限り (only members) vs. 会員に限らず (not only members).\n\n" +
            "JLPT tip: if the second half contains も or でも and adds more members to the group, に限らず is likely correct.",
          see: [3, 23, 86, 104],
          index: ["Nに限らず"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{公園|こうえん}は{春|はる}の{桜|さくら}（　）、{秋|あき}の{紅葉|こうよう}も{見事|みごと}だ。", options: ["に限らず", "を問わず"], answer: 0, en: "This park is splendid not only for its cherry blossoms in spring but also for its autumn leaves.", why: { en: "を問わず needs a noun with a range of values (季節を問わず). 春の桜 is one example, so use に限らず to add another." } },
                { q: "{急|いそ}いで{駅|えき}まで{走|はし}った（　）、{電車|でんしゃ}に{間|ま}に{合|あ}わなかった。", options: ["に限らず", "にもかかわらず"], answer: 1, en: "Even though I ran to the station, I didn't make the train." },
                { q: "この{図書館|としょかん}は{本|ほん}（　）、{映画|えいが}や{音楽|おんがく}のソフトも{充実|じゅうじつ}している。", options: ["に限らず", "において"], answer: 0, en: "This library is well stocked not only with books but also with films and music." },
                { q: "{語学|ごがく}（　）、{何|なに}かを{身|み}につけるには{毎日|まいにち}の{積|つ}み{重|かさ}ねが{欠|か}かせない。", options: ["に限らず", "にしたがって"], answer: 0, en: "Not just with languages — to master anything, daily steady effort is indispensable." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["つつある", "得る", "に限らず", "に関する", "上", "反面", "に反して"],
        items: [
          { q: "「{晴|は}れるでしょう」という{天気|てんき}{予報|よほう}＿＿、{運動会|うんどうかい}の{日|ひ}は{朝|あさ}から{大雨|おおあめ}だった。", answer: "に反して", en: "Contrary to the forecast saying it would be sunny, it rained heavily from the morning on the day of the sports festival." },
          { q: "{規則|きそく}＿＿、この{寮|りょう}では{夜|よる}10{時|じ}{以降|いこう}の{来客|らいきゃく}は{認|みと}められていない。", answer: "上", en: "According to the rules, visitors are not allowed in this dormitory after 10 p.m." },
          { q: "{山|やま}の{天気|てんき}は{急|きゅう}に{変|か}わるので、{夏|なつ}でも{雪|ゆき}が{降|ふ}ることはあり＿＿。", answer: "得る", en: "Mountain weather changes suddenly, so it can snow even in summer." },
          { q: "{市|し}は{新|あたら}しいごみの{分別|ぶんべつ}{方法|ほうほう}＿＿{説明会|せつめいかい}を{開|ひら}いた。", answer: "に関する", en: "The city held an information session about the new way of sorting garbage." },
          { q: "{駅|えき}の{周辺|しゅうへん}では{古|ふる}い{建物|たてもの}が{次々|つぎつぎ}に{取|と}り{壊|こわ}され、{町|まち}の{風景|ふうけい}が{変|か}わり＿＿。", answer: "つつある", en: "Around the station, old buildings are being torn down one after another, and the townscape is gradually changing." },
          { q: "{在宅|ざいたく}{勤務|きんむ}は{通勤|つうきん}の{負担|ふたん}がなくなる＿＿、{仕事|しごと}と{生活|せいかつ}の{区別|くべつ}がつけにくい。", answer: "反面", en: "Working from home removes the burden of commuting, but on the other hand it makes it hard to separate work and private life." },
          { q: "{野菜|やさい}＿＿、{食品|しょくひん}の{値段|ねだん}が{全体的|ぜんたいてき}に{上|あ}がっている。", answer: "に限らず", en: "Not just vegetables — food prices overall are rising." },
        ],
      },
    },
  ],
  // ───────────────────────────── REVIEW ─────────────────────────────
  review: [
    {
      title: { ja: "問題1 〈{文法|ぶんぽう}{形式|けいしき}の{判断|はんだん}〉", en: "Q1 Choosing the grammar form" },
      ex: {
        type: "choice",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の（　）に{入|い}れるのに{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Choose the best option (1–4) to fill the ( )." },
        items: [
          { q: "{今年|ことし}の{夏|なつ}は{涼|すず}しくなるという{予報|よほう}（　）、{記録的|きろくてき}な{暑|あつ}さが{続|つづ}いた。", options: ["に関して", "に反して", "のみならず", "からいうと"], answer: 1, en: "Contrary to the forecast that this summer would be cool, record-breaking heat continued." },
          { q: "{売上|うりあげ}のグラフ（　）、この{商品|しょうひん}は{冬|ふゆ}によく{売|う}れることがわかる。", options: ["から見ると", "に関して", "にしたがって", "のみならず"], answer: 0, en: "Looking at the sales graph, you can see that this product sells well in winter." },
          { q: "{父|ちち}は{健康|けんこう}（　）の{理由|りゆう}で、{予定|よてい}より{早|はや}く{仕事|しごと}を{辞|や}めた。", options: ["において", "に反して", "上", "にしたがって"], answer: 2, en: "My father quit his job earlier than planned for health reasons." },
          { q: "{新|あたら}しい{薬|くすり}の{開発|かいはつ}によって、{治|なお}らないとされてきた{病気|びょうき}も{治|なお}るようになり（　）。", options: ["つつある", "かねない", "得ない", "っぽい"], answer: 0, en: "Thanks to the development of new drugs, even diseases once thought incurable are gradually becoming curable.", why: { en: "かねない is for undesirable outcomes; 得ない would mean “impossible”, contradicting the positive context; っぽい doesn't fit formal writing or the meaning." } },
          { q: "{子犬|こいぬ}は{大|おお}きくなる（　）、{体|からだ}の{模様|もよう}がはっきりしてくる。", options: ["にしたがって", "どころか", "ものの", "だけ"], answer: 0, en: "As a puppy grows, the markings on its body become clearer." },
          { q: "{奨学金|しょうがくきん}の{申請|しんせい}（　）ご{相談|そうだん}は、{学生課|がくせいか}の{窓口|まどぐち}で{受|う}け{付|つ}けています。", options: ["からいうと", "に限る", "に関する", "にわたる"], answer: 2, en: "Consultations about scholarship applications are accepted at the Student Affairs counter." },
          { q: "この{講座|こうざ}は{学生|がくせい}（　）、{社会人|しゃかいじん}や{退職|たいしょく}した{方|かた}も{受講|じゅこう}できます。", options: ["に反して", "に比べて", "のみならず", "にもかかわらず"], answer: 2, en: "This course can be taken not only by students but also by working people and retirees." },
          { q: "{彼|かれ}は{会社員|かいしゃいん}として{働|はたら}く（　）、{週末|しゅうまつ}は{地域|ちいき}のサッカーチームのコーチも{務|つと}めている。", options: ["一方", "次第", "際", "限り"], answer: 0, en: "While working as a company employee, he also serves as coach of a local soccer team on weekends." },
          { q: "この{町|まち}は{昔|むかし}から{銅|どう}がたくさん{採|と}れた（　）、「{銅山町|どうざんまち}」と{呼|よ}ばれるようになった。", options: ["のみならず", "ことから", "にもかかわらず", "ものの"], answer: 1, en: "Because a lot of copper was mined here since long ago, this town came to be called “Dōzan-machi” (Copper Mine Town)." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "この{図書館|としょかん}では", after: "{館内|かんない}での{飲食|いんしょく}を{禁止|きんし}している。", pieces: ["{上|じょう}の", "{本|ほん}の", "{保存|ほぞん}", "{理由|りゆう}から"], order: [1, 2, 0, 3], star: 2, en: "This library prohibits eating and drinking inside for reasons of book preservation." },
          { before: "{味|あじ}だけでなく{栄養|えいよう}の{面|めん}からも、", after: "のは{喜|よろこ}ばしいことだ。", pieces: ["つつある", "{食文化|しょくぶんか}が", "{見直|みなお}され", "{和食|わしょく}の"], order: [3, 1, 2, 0], star: 2, en: "It is gratifying that the food culture of washoku is being reappraised, not only for its taste but also from the standpoint of nutrition." },
          { before: "{新|あたら}しい{制度|せいど}は", after: "{利用者|りようしゃ}の{負担|ふたん}が{増|ふ}えるという{問題|もんだい}もある。", pieces: ["{反面|はんめん}", "{手続|てつづ}きが", "{便利|べんり}になる", "{簡単|かんたん}で"], order: [1, 3, 2, 0], star: 2, en: "The new system makes procedures simple and convenient, but on the other hand it has the problem of increasing the burden on users." },
          { before: "{記者|きしゃ}に{囲|かこ}まれた{俳優|はいゆう}は、", after: "と{繰|く}り{返|かえ}した。", pieces: ["{一切|いっさい}", "その{件|けん}", "{話|はな}せない", "に{関|かん}しては"], order: [1, 3, 0, 2], star: 2, en: "Surrounded by reporters, the actor repeatedly said that he could say nothing at all about that matter." },
          { before: "{最初|さいしょ}は{緊張|きんちょう}していた{新入生|しんにゅうせい}も、", after: "{笑顔|えがお}を{見|み}せるようになった。", pieces: ["たつ", "につれて", "{日|ひ}が", "{次第|しだい}に"], order: [2, 0, 1, 3], star: 2, en: "The new students, who were nervous at first, gradually began to smile as the days went by." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、{文章|ぶんしょう}{全体|ぜんたい}の{内容|ないよう}を{考|かんが}えて、[1]から[6]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage, think about its overall content, and choose the best option for each of blanks [1]–[6]." },
        title: "インターネットと{言葉|ことば}",
        text: [
          "インターネットの{普及|ふきゅう}により、{情報|じょうほう}を{得|え}るという{点|てん}[1]、{私|わたし}たちの{生活|せいかつ}は{大|おお}きく{便利|べんり}になった。そして、{言葉|ことば}の{使|つか}い{方|かた}[2]、{大|おお}きな{変化|へんか}が{起|お}きている。",
          "{例|たと}えば、{以前|いぜん}は{一部|いちぶ}の{若者|わかもの}しか{使|つか}わなかった{言葉|ことば}が、SNSで{一気|いっき}に{広|ひろ}まった[3]、{今|いま}では{辞書|じしょ}に{載|の}るようになった。また、{利用者|りようしゃ}が{増|ふ}える[4]、{新|あたら}しい{言葉|ことば}が{生|う}まれるスピードも{速|はや}くなっている。そうした{言葉|ことば}は{今|いま}や{若者|わかもの}[5]、{中高年|ちゅうこうねん}の{間|あいだ}でも{普通|ふつう}に{使|つか}われている。",
          "しかし、{言葉|ことば}が{手軽|てがる}に{広|ひろ}まる[6]、{誤|あやま}った{使|つか}い{方|かた}も{一緒|いっしょ}に{広|ひろ}がってしまうという{問題|もんだい}もある。{変化|へんか}を{楽|たの}しみながらも、{言葉|ことば}を{大切|たいせつ}にする{姿勢|しせい}を{忘|わす}れないようにしたい。",
        ],
        en: [
          "With the spread of the internet, our lives have become much more convenient in terms of obtaining information. And big changes are also taking place with regard to the way we use language.",
          "For example, words once used only by some young people spread rapidly on social media, and as a result they now appear in dictionaries. Also, as the number of users increases, the speed at which new words are born is getting faster. Such words are now commonly used not only among young people but among the middle-aged and elderly too.",
          "However, while words spread easily, there is also the problem that incorrect usages spread along with them. While enjoying the changes, I want to not forget an attitude of treasuring language.",
        ],
        blanks: [
          { options: ["から見ると", "からといって", "につれて", "に応じて"], answer: 0 },
          { options: ["につれて", "ばかりで", "に関しても", "のみならず"], answer: 2, why: { en: "The topic “the way we use language” is introduced as another area (も) where change is happening → に関しても." } },
          { options: ["反面", "ことから", "ばかりに", "ものの"], answer: 1, why: { en: "Spreading on SNS is the reason/origin for being listed in dictionaries — a neutral cause → ことから. ばかりに implies a regrettable result." } },
          { options: ["ことから", "にしては", "一方で", "にしたがって"], answer: 3 },
          { options: ["限り", "のみならず", "にもかかわらず", "につれて"], answer: 1 },
          { options: ["一方で", "ことから", "際", "からには"], answer: 0, why: { en: "The sentence contrasts a benefit with a problem (〜という問題もある) → 一方で." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉1 {概要|がいよう}{理解|りかい}", en: "Q4 Listening — 1: Summary comprehension" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}は、{全体|ぜんたい}としてどんな{内容|ないよう}かを{聞|き}く{問題|もんだい}です。{話|はなし}の{前|まえ}に{質問|しつもん}はありません。まず{話|はなし}を{聞|き}いてください。それから、{質問|しつもん}と{選択肢|せんたくし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "This question asks about the overall content. There is no question before the talk. First listen, then hear the question and the choices, and choose the best one from 1–4." },
        items: [
          {
            question: "{先生|せんせい}は{何|なに}について{話|はな}していますか。",
            script: [
              { sp: "{先生|せんせい}", v: "m", ja: "{皆|みな}さんは、{街路樹|がいろじゅ}を{邪魔|じゃま}だと{思|おも}ったことはありませんか。{秋|あき}の{落|お}ち{葉|ば}の{掃除|そうじ}が{大変|たいへん}だという{点|てん}から{見|み}ると、たしかに{困|こま}った{存在|そんざい}かもしれません。" },
              { sp: "{先生|せんせい}", v: "m", ja: "しかし、その{一方|いっぽう}で、{街路樹|がいろじゅ}は{夏|なつ}の{強|つよ}い{日差|ひざ}しをさえぎり、{道路|どうろ}の{温度|おんど}を{下|さ}げる{働|はたら}きをしています。ある{調査|ちょうさ}では、{木陰|こかげ}の{路面|ろめん}は{日向|ひなた}より10{度|ど}{以上|いじょう}{低|ひく}かったそうです。" },
              { sp: "{先生|せんせい}", v: "m", ja: "{木|き}が{大|おお}きく{育|そだ}つにしたがって、その{効果|こうか}も{大|おお}きくなります。{街路樹|がいろじゅ}は{景色|けしき}のためだけではなく、{町|まち}の{暑|あつ}さを{和|やわ}らげる{大切|たいせつ}な{役割|やくわり}を{持|も}っているのです。" },
            ],
            en: [
              "Have you ever thought that roadside trees are a nuisance? From the standpoint of how hard it is to clean up the fallen leaves in autumn, they may indeed be a bother.",
              "On the other hand, however, roadside trees block the strong summer sunlight and work to lower the temperature of the road. According to one survey, the road surface in the shade of trees was more than 10 degrees cooler than in the sun.",
              "As the trees grow bigger, that effect becomes greater too. Roadside trees are not just for the scenery — they play an important role in easing the heat of the city.",
            ],
            options: ["{街路樹|がいろじゅ}の{落|お}ち{葉|ば}を{掃除|そうじ}する{方法|ほうほう}", "{街路樹|がいろじゅ}が{町|まち}で{果|は}たしている{役割|やくわり}", "{街路樹|がいろじゅ}を{植|う}える{場所|ばしょ}の{選|えら}び{方|かた}", "{木|き}が{大|おお}きく{育|そだ}つための{条件|じょうけん}"],
            answer: 1,
            why: { en: "The leaf-clearing problem is only the lead-in; after その一方で the talk focuses on how trees cool the city — their role." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉2 {統合|とうごう}{理解|りかい}", en: "Q4 Listening — 2: Integrated comprehension" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}では、まず{話|はなし}を{聞|き}いてください。それから{二|ふた}つの{質問|しつもん}を{聞|き}いて、それぞれ{問題|もんだい}{用紙|ようし}の1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the talk. Then answer the two questions, choosing the best option from 1–4 for each." },
        items: [
          {
            question: "{専門家|せんもんか}によると、{夏|なつ}の{水|みず}やりはいつするのが{一番|いちばん}いいですか。",
            script: [
              { sp: "ラジオ", v: "f", ja: "{今日|きょう}は{夏|なつ}の{庭|にわ}の{水|みず}やりについてです。{気温|きおん}の{高|たか}い{昼間|ひるま}に{水|みず}をやると、{土|つち}の{中|なか}の{水|みず}がお{湯|ゆ}のように{温|あたた}まって、{根|ね}を{傷|いた}めるおそれがあります。" },
              { sp: "ラジオ", v: "f", ja: "{夕方|ゆうがた}の{水|みず}やりは、{理論|りろん}{上|じょう}は{蒸発|じょうはつ}が{少|すく}なく{効率的|こうりつてき}ですが、{夜|よる}まで{土|つち}が{湿|しめ}ったままになり、{病気|びょうき}や{虫|むし}が{発生|はっせい}しやすいという{問題|もんだい}もあります。{専門家|せんもんか}から{見|み}ると、{最|もっと}もよいのは、{気温|きおん}が{上|あ}がる{前|まえ}の{早朝|そうちょう}だそうです。" },
              { sp: "{男|おとこ}", v: "m", ja: "へえ。ぼく、いつも{会社|かいしゃ}から{帰|かえ}ってきてから、{夜|よる}にやってたよ。" },
              { sp: "{女|おんな}", v: "f", ja: "わたしは{朝|あさ}やってるけど、{出勤|しゅっきん}{前|まえ}だから8{時|じ}ごろ。もうけっこう{暑|あつ}いんだよね。" },
              { sp: "{男|おとこ}", v: "m", ja: "{早起|はやお}きは{苦手|にがて}だけど、{植物|しょくぶつ}のためなら{仕方|しかた}ないか。{明日|あした}から、{出勤|しゅっきん}{前|まえ}にやってみるよ。" },
              { sp: "{女|おんな}", v: "f", ja: "じゃあ、わたしはもう{少|すこ}し{早|はや}く{起|お}きて、6{時|じ}ごろにしようかな。" },
            ],
            en: [
              "Today's topic is watering the garden in summer. If you water during the hot daytime, the water in the soil warms up like hot water and may damage the roots.",
              "Watering in the evening is efficient in theory because there's less evaporation, but the soil stays damp until night, so there's also the problem that diseases and insects appear easily. From an expert's point of view, the best time is early morning, before the temperature rises.",
              "Huh. I always did it at night after getting home from work.",
              "I do it in the morning, but it's before work, so around eight. It's already pretty hot by then.",
              "I'm not good at getting up early, but I guess it can't be helped if it's for the plants. From tomorrow I'll try doing it before work.",
              "Then maybe I'll get up a bit earlier and do it around six.",
            ],
            options: ["{朝|あさ}、{気温|きおん}が{上|あ}がる{前|まえ}", "{昼|ひる}、{気温|きおん}が{高|たか}いとき", "{夕方|ゆうがた}、{日|ひ}が{沈|しず}むころ", "{夜|よる}、{寝|ね}る{前|まえ}"],
            answer: 0,
          },
          {
            question: "{男|おとこ}の{人|ひと}は、これからいつ{水|みず}やりをすることにしましたか。",
            options: ["これからも{夜|よる}にすることにした", "これからは{朝|あさ}、{出勤|しゅっきん}する{前|まえ}にすることにした", "これからは{夕方|ゆうがた}にすることにした", "{水|みず}やりをしないことにした"],
            answer: 1,
            why: { en: "The man says 明日から、出勤前にやってみるよ. It's the woman who decides on around 6 a.m." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉3 {即時|そくじ}{応答|おうとう}", en: "Q4 Listening — 3: Quick response" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed for this question. First listen to the sentence, then to the replies, and choose the best reply from 1–3." },
        items: [
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{部長|ぶちょう}の{予想|よそう}に{反|はん}して、{新商品|しんしょうひん}、ぜんぜん{売|う}れなかったね。" }],
            options: ["うん、みんなが{驚|おどろ}くほど{売|う}れたよね。", "うん、{期待|きたい}してたのに{残念|ざんねん}だね。", "うん、{予想|よそう}どおりの{結果|けっか}だったね。"],
            answer: 1,
            en: ["Contrary to the manager's prediction, the new product didn't sell at all, did it?", "Yeah, it sold so well that everyone was surprised.", "Yeah, it's a shame, since we'd had high hopes.", "Yeah, it was just the result we predicted."],
            why: { en: "に反して = contrary to the prediction; the product didn't sell, so a sympathetic reply fits. Option 3 contradicts に反して." },
          },
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{駅前|えきまえ}のビル、{工事|こうじ}が{終|お}わりつつあるみたいですよ。" }],
            options: ["じゃあ、もうすぐ{完成|かんせい}ですね。", "えっ、まだ{工事|こうじ}が{始|はじ}まっていないんですか。", "{完成|かんせい}してからもう{長|なが}いですね。"],
            answer: 0,
            en: ["It looks like the construction on the building in front of the station is nearly finished.", "Then it'll be completed soon, won't it?", "What, the construction hasn't started yet?", "It's been a long time since it was completed, hasn't it?"],
            why: { en: "終わりつつある = in the process of finishing, not yet complete → “it'll be done soon”." },
          },
        ],
      },
    },
  ],
});
