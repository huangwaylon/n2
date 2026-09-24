N2.register({
  id: 2,
  genre: { ja: "スピーチをする", en: "Giving a Speech" },
  title: { ja: "{転任|てんにん}のあいさつ", en: "Addressing Co-workers after Receiving a Transfer Order" },
  canDo: [
    { ja: "{改|あらた}まった{場|ば}で、{思|おも}い{出|で}を{交|まじ}えながらお{別|わか}れのスピーチができる。", en: "Give a farewell speech in a formal setting, weaving in memories." },
    { ja: "{改|あらた}まった{場|ば}で、これからの{抱負|ほうふ}を{述|の}べ、お{礼|れい}のあいさつができる。", en: "Talk about your plans for the future and express your thanks in a formal setting." },
  ],
  parts: [
    // ───────────────────────────── Part (1)
    {
      label: "(1)",
      canDo: [
        { ja: "{改|あらた}まった{場|ば}で、{思|おも}い{出|で}を{交|まじ}えながらお{別|わか}れのスピーチができる。", en: "Give a farewell speech in a formal setting, weaving in memories." },
      ],
      sample: {
        kind: "speech",
        lines: [
          { ja: "{皆様|みなさま}、{本日|ほんじつ}はお{忙|いそが}しい{中|なか}、{私|わたくし}のためにこのような{送別会|そうべつかい}を{開|ひら}いてくださり、{心|こころ}よりお{礼|れい}{申|もう}し{上|あ}げます。", en: "Everyone, thank you from the bottom of my heart for holding this farewell party for me today, busy as you all are." },
          { ja: "5{年前|ねんまえ}、{新入|しんにゅう}{社員|しゃいん}としてこの{商品|しょうひん}{開発部|かいはつぶ}に{配属|はいぞく}されて**{以来|いらい}**、{毎日|まいにち}が{勉強|べんきょう}の{連続|れんぞく}でした。", en: "Ever since I was assigned to this Product Development Department as a new employee five years ago, every day has been one lesson after another." },
          { ja: "{右|みぎ}も{左|ひだり}もわからなかった{私|わたくし}が{何|なん}とかここまでやってこられたのは、{課長|かちょう}**をはじめ**、チームの{皆様|みなさま}が{支|ささ}えてくださったおかげです。", en: "That someone as clueless as I was could make it this far is thanks to the support of everyone on the team, starting with our section chief." },
          { ja: "{特|とく}に{試作品|しさくひん}づくりについては、ベテランの{佐藤|さとう}さん**のもとで**、{一|ひと}つ{一|ひと}つ{丁寧|ていねい}に{教|おし}えていただきました。", en: "Prototype-making in particular I learned under Mr. Sato, our veteran, who taught me each step carefully." },
          { ja: "{企画書|きかくしょ}の{書|か}き{方|かた}**はもとより**、{工場|こうじょう}の{方々|かたがた}との{交渉|こうしょう}の{仕方|しかた}まで、{本当|ほんとう}に{多|おお}くのことを{身|み}につけることができました。", en: "Not only how to write a proposal but even how to negotiate with the people at the factory — I was able to learn a great many things." },
          { ja: "{初|はじ}めて{担当|たんとう}した{商品|しょうひん}がまったく{売|う}れずに{落|お}ち{込|こ}んでいたとき、{課長|かちょう}が「{若|わか}いうちの{失敗|しっぱい}は、{必|かなら}ず{次|つぎ}に{生|い}きる**ものだ**」と{声|こえ}をかけてくださったことは、{一生|いっしょう}{忘|わす}れません。", en: "When the first product I was in charge of didn't sell at all and I was feeling down, the section chief told me, “Mistakes you make while you're young always pay off next time.” I will never forget that." },
          { ja: "また、お{客様|きゃくさま}の{声|こえ}に{耳|みみ}を{傾|かたむ}けることが、{商品|しょうひん}を{開発|かいはつ}する**{上|うえ}で**{何|なに}より{大切|たいせつ}だということも、この{部署|ぶしょ}で{学|まな}びました。", en: "It was also in this department that I learned that listening to customers is more important than anything when developing a product." },
          { ja: "まだまだ{皆様|みなさま}と{一緒|いっしょ}に{仕事|しごと}を{続|つづ}けたかったのですが、{来月|らいげつ}から{札幌|さっぽろ}{支店|してん}で{新|あたら}しい{仕事|しごと}に{就|つ}くことになり、{残念|ざんねん}**ながら**、{皆様|みなさま}とご{一緒|いっしょ}できるのは{今日|きょう}が{最後|さいご}となります。", en: "I would have loved to keep working with you all for much longer, but I'm taking up a new job at the Sapporo branch next month, and, sadly, today is the last day I get to work alongside you." },
        ],
      },
      points: [
        {
          no: 9,
          pattern: "〜{以来|いらい}",
          phrase: "{配属|はいぞく}されて**{以来|いらい}**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜」のときから{今|いま}まで、ずっと{同|おな}じ{状態|じょうたい}が{続|つづ}いていると{言|い}いたいときに{使|つか}う。",
            en: "Used to say that the same situation has continued without a break from the time of “~” up to now — “ever since ~”.",
          },
          forms: ["[V-て] + {以来|いらい}", "[N] + {以来|いらい}"],
          examples: [
            { ja: "{去年|きょねん}の{冬|ふゆ}にスキーで{膝|ひざ}を{痛|いた}めて**{以来|いらい}**、{階段|かいだん}を{上|のぼ}るのがつらい。", en: "Ever since I hurt my knee skiing last winter, climbing stairs has been painful." },
            { ja: "{就職|しゅうしょく}して**{以来|いらい}**、{自分|じぶん}で{料理|りょうり}をする{時間|じかん}がほとんどない。", en: "Since I started working, I've had almost no time to cook for myself." },
            { ja: "{祖父|そふ}は{定年|ていねん}{退職|たいしょく}**{以来|いらい}**、{毎朝|まいあさ}{近所|きんじょ}の{公園|こうえん}を{掃除|そうじ}している。", en: "Since retiring, my grandfather has been cleaning the neighborhood park every morning." },
            { ja: "この{店|みせ}は{開店|かいてん}**{以来|いらい}**、{一度|いちど}も{値上|ねあ}げをしていないそうだ。", en: "I hear this shop hasn't raised its prices once since it opened." },
            { ja: "{先月|せんげつ}の{会議|かいぎ}**{以来|いらい}**、{二人|ふたり}はほとんど{口|くち}をきいていない。", en: "The two of them have hardly spoken to each other since last month's meeting." },
          ],
          deepDive:
            "**〜以来** means *ever since ~*. The kanji say it all: 以 (from) + 来 (coming up to now). It marks a starting point in the past and says that **a state or habit has continued from then until the present**.\n\n" +
            "Connection:\n" +
            "- **V-て + 以来**: 入社して以来, 日本に来て以来 (never ✗来た以来).\n" +
            "- **N + 以来**: event nouns and dates — 卒業以来, 結婚以来, 創業以来, 2015年以来, 先日以来.\n" +
            "- It can also stand alone: **それ以来** *since then*: 一度彼に会った。それ以来、連絡はない.\n\n" +
            "The key restriction: the second half must describe **something ongoing** — 〜ている, 〜ていない, ずっと〜, 一度も〜ない, a habit, or a change that keeps going (増え続けている). A single one-off event is wrong: ✗日本に来て以来、富士山に登った. Use **〜てから** for that: 日本に来てから、富士山に登った.\n\n" +
            "Also, 以来 implies a fairly long, significant stretch of time. ✗今朝起きて以来 sounds odd; say 今朝起きてから.\n\n" +
            "- 〜てから (N4): neutral *after/since*; can be followed by a single event.\n" +
            "- 〜以来: *ever since*; the result is a continuing state; slightly formal, very common in speeches and writing (入社以来…, 創業以来…).\n" +
            "- 〜以来の + N works with an event: 創業以来の危機 *the biggest crisis since the company was founded*. With a length of time use 〜来 instead: 10年来の友人 *a friend of ten years* (✗10年以来の友人).\n\n" +
            "JLPT tip: when 以来 appears in a question, check the ending of the sentence. The correct option almost always ends in 〜ている / 〜ていない / 〜続けている.",
          see: [],
          index: ["V-て以来", "N以来", "それ以来"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "3{年前|ねんまえ}にこの{町|まち}に{引|ひ}っ{越|こ}して{以来|いらい}、（　）。", options: ["{一度|いちど}だけ{町|まち}のお{祭|まつ}りを{見|み}に{行|い}きました", "{毎年|まいとし}{町|まち}のお{祭|まつ}りに{参加|さんか}しています"], answer: 1, en: "Since moving to this town three years ago, I've taken part in the town festival every year.", why: { en: "以来 needs a continuing state or habit afterwards; “went once” is a one-off event." } },
                { q: "{彼女|かのじょ}は{大学|だいがく}に{入|はい}って{以来|いらい}、（　）。", options: ["{毎日|まいにち}{図書館|としょかん}に{通|かよ}っている", "{最初|さいしょ}の{授業|じゅぎょう}で{先生|せんせい}に{質問|しつもん}した"], answer: 0, en: "Ever since she entered university, she has been going to the library every day." },
                { q: "{駅前|えきまえ}に{大型|おおがた}スーパーができて{以来|いらい}、（　）。", options: ["{市長|しちょう}がテープカットをした", "{近|ちか}くの{商店街|しょうてんがい}の{客|きゃく}が{減|へ}り{続|つづ}けている"], answer: 1, en: "Ever since the big supermarket opened in front of the station, the nearby shopping street has kept losing customers." },
                { q: "{若|わか}いころに{一度|いちど}{山|やま}で{道|みち}に{迷|まよ}って{以来|いらい}、（　）。", options: ["{地図|ちず}を{持|も}たずに{山|やま}に{入|はい}ったことはない", "{次|つぎ}の{日|ひ}の{朝|あさ}に{助|たす}けられた"], answer: 0, en: "Since I once got lost in the mountains when I was young, I have never gone into the mountains without a map." },
              ],
            },
          ],
        },
        {
          no: 10,
          pattern: "〜をはじめ",
          phrase: "{課長|かちょう}**をはじめ**",
          stars: 3,
          marks: [],
          usage: {
            ja: "{代表的|だいひょうてき}な{例|れい}を{一|ひと}つ{挙|あ}げて、「〜だけでなく、ほかにもたくさんある」と{言|い}いたいときに{使|つか}う。",
            en: "Used to give one representative example and say “not just ~, but many others too” — “starting with ~ / including ~”.",
          },
          forms: ["[N] + をはじめ", "[N] + をはじめとして", "[N] + をはじめとする + [N]"],
          examples: [
            { ja: "{奈良|なら}には{東大寺|とうだいじ}**をはじめ**、{歴史|れきし}のある{寺|てら}がたくさんある。", en: "Nara has many historic temples, Todaiji being the best-known." },
            { ja: "{今日|きょう}の{式典|しきてん}には、{社長|しゃちょう}**をはじめとして**、{各|かく}{支店|してん}の{支店長|してんちょう}が{出席|しゅっせき}した。", en: "Today's ceremony was attended by the president and the managers of every branch." },
            { ja: "{当店|とうてん}では、ラーメン**をはじめとする**{中華|ちゅうか}{料理|りょうり}を{幅広|はばひろ}くご{用意|ようい}しております。", en: "Our restaurant offers a wide range of Chinese dishes, ramen first and foremost." },
            { ja: "この{地域|ちいき}は、リンゴ**をはじめ**、さまざまな{果物|くだもの}の{産地|さんち}として{知|し}られている。", en: "This region is known for producing all kinds of fruit, apples above all." },
          ],
          deepDive:
            "**〜をはじめ** comes from 始める *to begin*: literally *beginning with ~*. You name the **most typical, most important or highest-ranking member** of a group, and the rest of the sentence tells us there are many more: 京都をはじめ、多くの観光地.\n\n" +
            "Forms:\n" +
            "- **をはじめ、** / **をはじめとして、** link clauses (the second is a little more formal).\n" +
            "- **をはじめとする + N** modifies a noun: 東京をはじめとする大都市 *big cities such as Tokyo*.\n\n" +
            "Typical partners in the second half: 多くの〜, さまざまな〜, 〜など, 〜たち, 各〜, 一同. That's why it is a favorite in **speeches and formal thank-yous**: 部長をはじめ、皆様には大変お世話になりました — you mention the top person first out of respect, then everyone else.\n\n" +
            "Pitfalls:\n" +
            "- The item must belong to the group that follows. ✗セーターをはじめ、多くの家具 is wrong because a sweater isn't furniture.\n" +
            "- Choose a representative item, not an odd one: 日本料理には寿司をはじめ… ✓, ✗日本料理には漬物の一種をはじめ… sounds strange.\n" +
            "- It is not used for a single thing alone; there must be *others*.\n\n" +
            "Compare:\n" +
            "- **〜はもとより** (#12): *not only A (obviously) but also B* — A and B are two separate things set side by side.\n" +
            "- **〜を中心に** (#16): *centered on ~* — describes a core with things around it, not a list.\n" +
            "- **〜に限らず** (#72): *not limited to ~*.",
          see: [12, 16, 72],
          index: ["Nをはじめ", "Nをはじめとして", "Nをはじめとする"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "この{料理|りょうり}{教室|きょうしつ}では、{和食|わしょく}をはじめ、",
                "{今年|ことし}の{文化祭|ぶんかさい}には、{市長|しちょう}をはじめ、",
                "{引|ひ}っ{越|こ}しの{準備|じゅんび}には、{段|だん}ボール{箱|ばこ}をはじめ、",
                "この{島|しま}では、ウミガメをはじめ、",
              ],
              right: [
                "{珍|めずら}しい{生|い}き{物|もの}を{数多|かずおお}く{見|み}ることができる。",
                "{世界|せかい}{各国|かっこく}の{家庭|かてい}{料理|りょうり}が{学|まな}べる。",
                "{多|おお}くの{来賓|らいひん}が{訪|おとず}れた。",
                "さまざまな{物|もの}をそろえる{必要|ひつよう}がある。",
              ],
              answer: [1, 2, 3, 0],
              en: [
                "At this cooking school you can learn home cooking from around the world, starting with Japanese food.",
                "Many guests, including the mayor, visited this year's school festival.",
                "To prepare for a move you need to get all sorts of things together, cardboard boxes first of all.",
                "On this island you can see many rare creatures, sea turtles among them.",
              ],
            },
          ],
        },
        {
          no: 11,
          pattern: "〜のもとで",
          phrase: "{佐藤|さとう}さん**のもとで**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{恩師|おんし}のもと」のように「{大|おお}きな{影響力|えいきょうりょく}を{持|も}つ{人|ひと}・ものの{下|もと}で」と{言|い}うときや、「{合意|ごうい}のもと」のように「その{条件|じょうけん}・{状況|じょうきょう}の{中|なか}で」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “under someone / something with great influence” (e.g. 恩師のもと “under my mentor”), or “under certain conditions or circumstances” (e.g. 合意のもと “with (under) mutual agreement”).",
          },
          forms: ["[N] + のもと（で／に）"],
          examples: [
            { ja: "{秋|あき}の{青空|あおぞら}**のもとで**、{運動会|うんどうかい}が{行|おこな}われた。", en: "The sports day was held under a clear autumn sky." },
            { ja: "{私|わたし}は{大学院|だいがくいん}で、{中村|なかむら}{教授|きょうじゅ}**のもとで**{海洋|かいよう}{生物|せいぶつ}の{研究|けんきゅう}をしている。", en: "At graduate school I'm researching marine life under Professor Nakamura." },
            { ja: "{新|あたら}しい{社長|しゃちょう}**のもと**、{会社|かいしゃ}は{大|おお}きく{生|う}まれ{変|か}わろうとしている。", en: "Under the new president, the company is about to be transformed." },
            { ja: "{両国|りょうこく}の{合意|ごうい}**のもとに**、{共同|きょうどう}{調査|ちょうさ}が{始|はじ}まった。", en: "A joint investigation began with the agreement of both countries." },
          ],
          deepDive:
            "**〜のもとで** uses もと (下/元 *beneath, at the base of*). It is a formal, written-style way to say *under*.\n\n" +
            "Three kinds of noun come before it:\n" +
            "- **A person with authority or influence**: 教授のもとで研究する, 名監督のもとで練習する, 祖父母のもとで育つ. You are protected, guided or controlled by them.\n" +
            "- **A condition, agreement or principle**: 協力のもとで, 合意のもとに, 監督（supervision）のもとで, 法律のもとで, 〜という条件のもとで.\n" +
            "- **Something physical overhead** (poetic): 太陽のもとで, 青空のもとで, 星空のもとで.\n\n" +
            "Variations: **のもとに** is even more written (契約のもとに); **のもと、** with just a comma appears in news and headlines. The set phrase **〜の名のもとに** *in the name of ~* is often used critically: 自由の名のもとに他人を傷つけてはいけない *you must not hurt others in the name of freedom*.\n\n" +
            "Pitfalls:\n" +
            "- For a concrete location below something, use の下（した）: 机の下に猫がいる, not ✗机のもとで. もと is abstract.\n" +
            "- Don't confuse with **〜をもとに** *based on ~* (実話をもとにした映画). のもとで = *under*; をもとに = *using as a basis*.\n\n" +
            "In farewell speeches and thank-you letters, 〜様のご指導のもとで is a standard way to show gratitude to superiors: it frames your success as happening *under their guidance*.",
          see: [],
          index: ["Nのもとで", "Nのもとに", "Nのもと", "〜の名のもとに"],
          practice: [
            {
              type: "fill",
              prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
              bank: ["{料理人|りょうりにん}", "{医師|いし}の{指導|しどう}", "{住民|じゅうみん}の{協力|きょうりょく}", "{保護者|ほごしゃ}の{同意|どうい}"],
              items: [
                { q: "{彼|かれ}は{若|わか}いころ、{京都|きょうと}の{有名|ゆうめい}な＿＿のもとで10{年間|ねんかん}{修業|しゅぎょう}をした。", answer: "{料理人|りょうりにん}", en: "When he was young, he trained for ten years under a famous chef in Kyoto." },
                { q: "{薬|くすり}の{量|りょう}を{減|へ}らすときは、{必|かなら}ず＿＿のもとで{行|おこな}ってください。", answer: "{医師|いし}の{指導|しどう}", en: "When reducing the dose of your medicine, always do it under a doctor's guidance." },
                { q: "{町|まち}の{花火|はなび}{大会|たいかい}は、{地元|じもと}＿＿のもとに{無事|ぶじ}{開催|かいさい}された。", answer: "{住民|じゅうみん}の{協力|きょうりょく}", en: "The town fireworks festival was held without incident, thanks to the cooperation of local residents." },
                { q: "{高校生|こうこうせい}がアルバイトをする{場合|ばあい}は、＿＿のもとでなければ{契約|けいやく}できない。", answer: "{保護者|ほごしゃ}の{同意|どうい}", en: "High school students who want a part-time job cannot sign a contract without a parent's or guardian's consent." },
              ],
            },
          ],
        },
        {
          no: 12,
          pattern: "〜はもとより",
          phrase: "{企画書|きかくしょ}の{書|か}き{方|かた}**はもとより**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "スピーチやプレゼンテーションなどで、「〜はもちろん、〜だけでなくそのほかにも」と{説明|せつめい}したいときに{使|つか}う。",
            en: "Used in speeches, presentations and the like to explain “~ goes without saying, and not only ~ but other things as well”.",
          },
          forms: ["[N] + はもとより"],
          examples: [
            { ja: "この{祭|まつ}りには、{地元|じもと}の{人|ひと}**はもとより**、{遠|とお}くの{県|けん}からも{大勢|おおぜい}の{見物客|けんぶつきゃく}が{訪|おとず}れる。", en: "Not only local people, of course, but crowds of spectators from distant prefectures come to this festival." },
            { ja: "{彼|かれ}は{英語|えいご}**はもとより**、スペイン{語|ご}やポルトガル{語|ご}も{話|はな}せる。", en: "He speaks English, naturally, and Spanish and Portuguese as well." },
            { ja: "{運転|うんてん}するときは、スピード**はもとより**、{周|まわ}りの{歩行者|ほこうしゃ}の{動|うご}きにも{目|め}を{配|くば}らなければならない。", en: "When driving, you must keep an eye not only on your speed, obviously, but also on the movements of pedestrians around you." },
            { ja: "この{辞書|じしょ}は、{学生|がくせい}**はもとより**、{翻訳|ほんやく}を{仕事|しごと}にしている{人|ひと}にも{役立|やくだ}つ。", en: "This dictionary is useful not just for students but for professional translators as well." },
          ],
          deepDive:
            "**〜はもとより** is the formal twin of **〜はもちろん** (N3). もとより is an old adverb meaning *from the beginning / as a matter of course*, so AはもとよりB も = *A goes without saying, and B too*.\n\n" +
            "Structure: **A はもとより、B も / B まで / B でさえ**. A is the obvious case; B is the case the listener might not expect. Getting the order right matters: 子どもはもとより大人も楽しめる ✓ (children obviously enjoy it; adults too, surprisingly). Reversing it (大人はもとより子どもも) makes the listener wonder why adults are the obvious case.\n\n" +
            "Register: はもちろん is fine in conversation; はもとより sounds like a speech, presentation, company brochure or written explanation. In a farewell speech it lets you list what you learned elegantly: 仕事の進め方はもとより、社会人としての心構えまで….\n\n" +
            "Compare with close neighbors:\n" +
            "- **〜はもちろん**: same meaning, more everyday.\n" +
            "- **〜のみならず** (#63): *not only… but also*, formal, focuses on extending the scope, without the “obviously” feeling.\n" +
            "- **〜に限らず** (#72): *not limited to ~*.\n" +
            "- **〜をはじめ** (#10): names a representative example of a group rather than two separate items.\n\n" +
            "Note that もとより alone also works as an adverb: もとより承知しております *I was aware of that from the start*.\n\n" +
            "JLPT tip: if the second half contains も / まで / さえ and the first item is the obvious one, はもとより (or はもちろん) is the answer.",
          see: [10, 63, 72],
          index: ["Nはもとより", "〜はもとより〜も"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{公園|こうえん}には、{子|こ}ども（　）{大人|おとな}も{楽|たの}しめる{遊具|ゆうぐ}がそろっている。", options: ["はもとより", "をはじめとする"], answer: 0, en: "This park has play equipment that adults as well as children can enjoy.", why: { en: "をはじめとする must be followed by a noun that includes the example (子どもをはじめとする人々). Here も follows, so はもとより fits." } },
                { q: "{会員|かいいん}の{方|かた}（　）、{割引|わりびき}{価格|かかく}でご{購入|こうにゅう}いただけます。", options: ["はもとより", "に限り"], answer: 1, en: "Only members can purchase at the discount price." },
                { q: "この{作家|さっか}の{小説|しょうせつ}は、{国内|こくない}（　）{海外|かいがい}でも{多|おお}くの{読者|どくしゃ}に{読|よ}まれている。", options: ["はもとより", "において"], answer: 0, en: "This author's novels are read by many readers not only at home but abroad as well." },
                { q: "{新人|しんじん}は{先輩|せんぱい}の{指導|しどう}（　）{少|すこ}しずつ{仕事|しごと}を{覚|おぼ}えていく。", options: ["はもとより", "のもとで"], answer: 1, en: "New staff gradually learn the job under the guidance of their seniors." },
                { q: "{地震|じしん}に{備|そな}えて、{水|みず}や{食料|しょくりょう}（　）、{懐中|かいちゅう}{電灯|でんとう}も{用意|ようい}しておこう。", options: ["はもとより", "以来"], answer: 0, en: "To prepare for earthquakes, let's get not only water and food ready but a flashlight as well." },
              ],
            },
          ],
        },
        {
          no: 13,
          pattern: "〜ものだ",
          phrase: "{次|つぎ}に{生|い}きる**ものだ**",
          stars: 1,
          marks: [],
          usage: {
            ja: "「だれでもそう{思|おも}う」「{絶対|ぜったい}に{正|ただ}しい」と{考|かんが}えている{話|はな}し{手|て}の{判断|はんだん}を{表|あらわ}す。{注意|ちゅうい}や{命令|めいれい}になることもある。{偉|えら}そうな{感|かん}じがするので、{目上|めうえ}の{人|ひと}には{使|つか}わないほうがいい。{親|した}しい{人|ひと}との{会話|かいわ}では「もんだ」が{使|つか}われる。",
            en: "Expresses the speaker's judgment that “anyone would think so / this is absolutely right”. It can also work as advice or a command. Because it can sound lecturing, avoid using it to superiors. In conversation with people close to you, もんだ is used.",
          },
          forms: ["[V-る] + ものだ／もんだ", "[V-ない] + ものだ／もんだ"],
          examples: [
            { ja: "{年|とし}を{取|と}ると、{朝|あさ}{早|はや}く{目|め}が{覚|さ}める**ものだ**。", en: "When you get older, you tend to wake up early." },
            { ja: "A：{新|あたら}しい{職場|しょくば}、まだ{慣|な}れなくて……。\nB：{最初|さいしょ}はだれでも{緊張|きんちょう}する**もんだ**よ。", en: "A: I'm still not used to my new workplace…\nB: Everyone's nervous at first, you know." },
            { ja: "{時間|じかん}がたてば、つらい{思|おも}い{出|で}も{少|すこ}しずつ{薄|うす}れていく**ものです**。", en: "As time passes, even painful memories gradually fade." },
            { ja: "お{世話|せわ}になった{人|ひと}には、きちんとお{礼|れい}を{言|い}う**ものだ**。", en: "You should properly thank people who have helped you." },
            { ja: "{借|か}りた{物|もの}はすぐに{返|かえ}す**もんだ**。いつまで{持|も}っているつもりだ。", en: "You give back what you borrow right away. How long are you planning to hang on to it?" },
          ],
          deepDive:
            "**〜ものだ** presents something as **the natural way of things** — a general truth about people, society or the world, not a personal opinion about one case. もの here means *the nature of things*: 子どもはすぐに大きくなるものだ *children (by nature) grow up fast*.\n\n" +
            "Two main uses:\n" +
            "- **General truth / tendency**: 健康のありがたさは病気になって初めてわかるものだ. Often used to comfort or reassure: 失敗は誰にでもあるものですよ.\n" +
            "- **Social norm → advice or rebuke**: 目上の人には敬語を使うものだ *one uses honorifics to superiors*. The negative 〜ないものだ tells people what *not* to do: 人の悪口は言わないものだ.\n\n" +
            "Register: because it sounds like a rule handed down from above, using it *to* a superior (✗部長、会議には遅れないものですよ) is rude. In casual speech it becomes **もんだ / もんだよ / もんだぞ**; ぞ is strong and masculine.\n\n" +
            "Compare:\n" +
            "- **〜べきだ**: *should*, based on the speaker's own sense of duty; more direct and personal.\n" +
            "- **〜はずだ**: *should be (I expect)*, a logical guess, not a norm.\n" +
            "- The ものだ family in this book is large: ものだ② (#132) is the nostalgic *used to* (昔はよく遊んだものだ — note V-た); 〜ものではない (#46) *you shouldn't*; 〜というものだ (#52) *that's what ~ is*; 〜というものではない (#25) *it's not necessarily the case*; 〜ものがある (#92); 〜ものの (#39) *although*; 〜ものなら (#122); 〜ものか (#51) *no way*; 〜もん (#56) *because*.\n\n" +
            "JLPT tip: V-る/V-ない + ものだ = general truth or norm; V-た + ものだ = nostalgic recollection. Look at the verb form first.",
          see: [25, 39, 46, 51, 52, 56, 92, 122, 132],
          index: ["V-るものだ", "V-ないものだ", "もんだ"],
        },
        {
          no: 14,
          pattern: "〜{上|うえ}で",
          phrase: "{開発|かいはつ}する**{上|うえ}で**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「〜をするとき（…が{重要|じゅうよう}だ・{必要|ひつよう}だ）」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “when doing ~ / in doing ~ (… is important / necessary)”.",
          },
          forms: ["[V-る] + {上|うえ}で"],
          examples: [
            { ja: "{外国|がいこく}で{暮|く}らす**{上|うえ}で**、その{国|くに}の{習慣|しゅうかん}を{知|し}っておくことは{欠|か}かせない。", en: "When living abroad, it's essential to know the customs of that country." },
            { ja: "{家|いえ}を{選|えら}ぶ**{上|うえ}で**、{私|わたし}がいちばん{重視|じゅうし}したのは{駅|えき}からの{距離|きょり}だ。", en: "In choosing a house, what I valued most was the distance from the station." },
            { ja: "チームで{働|はたら}く**{上|うえ}での**{基本|きほん}は、{報告|ほうこく}を{忘|わす}れないことだ。", en: "The basic rule for working in a team is not forgetting to report." },
            { ja: "{論文|ろんぶん}を{書|か}く**{上|うえ}で**{注意|ちゅうい}すべき{点|てん}を{説明|せつめい}します。", en: "I'll explain the points you should be careful about when writing a thesis." },
          ],
          deepDive:
            "**V-る + 上で** means *in (the process of) doing ~ / for the purpose of doing ~*. It sets up an activity and the rest of the sentence says **what matters, what is needed, or what to watch out for** in it. Typical endings: 大切だ・重要だ・必要だ・欠かせない・役に立つ・問題になる・注意する.\n\n" +
            "- To modify a noun, use **上での + N**: 仕事をする上での注意点, 生活する上での悩み.\n" +
            "- With nouns there is **Nの上で** (仕事の上で), which is close to **N上（じょう）** (#70): 仕事上, 法律上.\n\n" +
            "It is not simply *when*. ✗ご飯を食べる上でテレビを見た is wrong — you need an evaluative or necessary element in the second half. Compare 旅行する上で大切なのは健康だ ✓.\n\n" +
            "The 上 family is a classic JLPT trap — look at what precedes it:\n" +
            "- **V-る上で** (this point): *in doing ~, …is important*.\n" +
            "- **V-た上で** (#117): *after doing ~ (and then)*: よく考えた上で決めます.\n" +
            "- **V-る/V-た上は** (Plus of #18): *now that ~*: 引き受けた上は.\n" +
            "- **〜上（に）** (#102): *in addition to ~*: 安い上においしい.\n" +
            "- **N上（じょう）** (#70): *from the standpoint of ~*: 歴史上, 健康上.\n\n" +
            "Register: fairly formal; common in essays, reports and speeches. In a farewell speech, 仕事をする上で大切なこと is a natural phrase for “the things that matter at work”.",
          see: [18, 70, 102, 117],
          index: ["V-る上で", "V-る上での", "Nの上で"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{海外|かいがい}で{働|はたら}く{上|うえ}で（　）。", options: ["{現地|げんち}の{言葉|ことば}ができることは{大|おお}きな{強|つよ}みになる", "{来月|らいげつ}からシンガポールに{行|い}く"], answer: 0, en: "When working overseas, being able to speak the local language is a big advantage." },
                { q: "{自分|じぶん}の{店|みせ}を{持|も}つ{上|うえ}で（　）。", options: ["{去年|きょねん}{駅前|えきまえ}に{小|ちい}さなカフェを{開|ひら}いた", "{資金|しきん}の{計画|けいかく}をしっかり{立|た}てることが{大切|たいせつ}だ"], answer: 1, en: "When opening your own shop, it's important to plan your finances carefully." },
                { q: "{車|くるま}を{選|えら}ぶ{上|うえ}で（　）。", options: ["{先週|せんしゅう}{新|あたら}しい{車|くるま}が{届|とど}いた", "{燃費|ねんぴ}を{重視|じゅうし}する{人|ひと}が{増|ふ}えている"], answer: 1, en: "More and more people put fuel efficiency first when choosing a car." },
                { q: "{子|こ}どもを{育|そだ}てる{上|うえ}で（　）。", options: ["{家族|かぞく}の{協力|きょうりょく}は{欠|か}かせない", "{子|こ}どもが3{人|にん}いる"], answer: 0, en: "Family support is essential when raising children." },
              ],
            },
          ],
        },
        {
          no: 15,
          pattern: "〜ながら（も）",
          phrase: "{残念|ざんねん}**ながら**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜という{状態|じょうたい}だが、けれども」と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “it is ~, but…” — “although / despite being ~”.",
          },
          forms: [
            "[V-~~ます~~] + ながら（も）",
            "[V-ない] + ながら（も）",
            "[いA] + ながら（も）",
            "[なA] + ながら（も）",
            "[N] + ながら（も）",
          ],
          formNotes: [
            { ja: "「[なA]／[N] であり + ながら」の{形|かたち}もある。", en: "The form “なA / N + でありながら” is also used." },
          ],
          examples: [
            { ja: "{彼|かれ}は{事情|じじょう}を{知|し}ってい**ながら**、{何|なに}も{教|おし}えてくれなかった。", en: "Although he knew the circumstances, he didn't tell me anything." },
            { ja: "{夜|よる}は{十分|じゅうぶん}に{眠|ねむ}れない**ながらも**、{彼女|かのじょ}は{毎日|まいにち}{明|あか}るく{働|はたら}いている。", en: "Even though she can't get enough sleep at night, she works cheerfully every day." },
            { ja: "{狭|せま}い**ながらも**、{日当|ひあ}たりのいいこの{部屋|へや}が{気|き}に{入|い}っている。", en: "Though it's small, I love this sunny room." },
            { ja: "{彼女|かのじょ}は{社長|しゃちょう}**でありながら**、{毎朝|まいあさ}{自分|じぶん}で{店|みせ}の{掃除|そうじ}をしている。", en: "Although she is the company president, she cleans the shop herself every morning." },
            { ja: "{残念|ざんねん}**ながら**、{今回|こんかい}は{参加|さんか}を{見送|みおく}ることになりました。", en: "Unfortunately, I've decided not to take part this time.", idiom: true },
          ],
          deepDive:
            "You already know **V-ます stem + ながら** as *while doing* (two simultaneous actions: 音楽を聞きながら勉強する). At N2 the same ながら has a second job: **contrast** — *although / despite*. 知っていながら = *although (s)he knew*.\n\n" +
            "How to tell them apart:\n" +
            "- The concessive ながら usually follows **states**, not actions: 〜ていながら, 知りながら, 思いながら, 〜ないながら, adjectives (狭いながら, 不便ながら), nouns (子どもながら, 素人ながら), and でありながら.\n" +
            "- The second half runs against expectation: 子どもながら、しっかりしている *though just a child, (s)he is very responsible*.\n" +
            "- Adding **も** (ながらも) makes the contrast unmistakable.\n\n" +
            "The subject is normally the same in both clauses. ✗私が何度も頼みながら、彼は断った sounds off; use のに or にもかかわらず (#21).\n\n" +
            "Many fixed expressions use it — good for speeches and polite writing:\n" +
            "- **残念ながら** *unfortunately*, **恥ずかしながら** *embarrassing as it is*, **勝手ながら** *we apologize, but (for our own convenience)*, **陰ながら** *(support you) from the sidelines*, **我ながら** *if I say so myself*, **狭いながらも楽しい我が家** *humble but happy home*.\n\n" +
            "Compare: **〜つつも** (#112) is very close and more literary (知りつつも); **〜ものの** (#39) *although* concedes a fact then states a different result; **〜のに** adds the speaker's surprise or complaint.",
          see: [21, 39, 112],
          index: ["Vながら（も）", "いAながら", "なAながら", "Nながら", "でありながら", "残念ながら"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{毎日|まいにち}{運動|うんどう}しようと{思|おも}いながら、（　）。", options: ["なかなか{続|つづ}けられない", "{毎朝|まいあさ}{公園|こうえん}を{走|はし}っている"], answer: 0, en: "Although I mean to exercise every day, I just can't keep it up." },
                { q: "{答|こた}えがわかっていながら、（　）。", options: ["{彼|かれ}はすぐに{手|て}を{挙|あ}げた", "{彼|かれ}はわざと{黙|だま}っていた"], answer: 1, en: "Even though he knew the answer, he deliberately kept quiet." },
                { q: "この{旅館|りょかん}は{古|ふる}いながらも、（　）。", options: ["{雨漏|あまも}りがする", "{隅々|すみずみ}まで{掃除|そうじ}が{行|い}き{届|とど}いている"], answer: 1, en: "Though this inn is old, it is spotless in every corner.", why: { en: "A leak is what you'd expect from an old inn — no contrast. ながらも needs an unexpected result." } },
                { q: "{彼女|かのじょ}はまだ{新人|しんじん}ながら、（　）。", options: ["{仕事|しごと}の{覚|おぼ}えがとても{早|はや}い", "{仕事|しごと}にまだ{慣|な}れていない"], answer: 0, en: "Although she's still new, she picks up the work very quickly." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["ながら", "のもとで", "はもとより", "をはじめとする", "ものだ", "上で", "以来"],
        items: [
          { q: "この{美術館|びじゅつかん}では、{浮世絵|うきよえ}＿＿{江戸|えど}{時代|じだい}の{美術品|びじゅつひん}を{数多|かずおお}く{展示|てんじ}している。", answer: "をはじめとする", en: "This museum displays many Edo-period works of art, ukiyo-e prints first and foremost." },
          { q: "この{店|みせ}の{料理|りょうり}は、{味|あじ}＿＿、{見|み}た{目|め}の{美|うつく}しさでも{評判|ひょうばん}だ。", answer: "はもとより", en: "This restaurant's food is famous not only for its taste but also for how beautiful it looks." },
          { q: "{行|い}かなければと{思|おも}い＿＿、つい{歯医者|はいしゃ}の{予約|よやく}を{先延|さきの}ばしにしている。", answer: "ながら", en: "Although I know I have to go, I keep putting off making a dentist appointment." },
          { q: "{新入|しんにゅう}{社員|しゃいん}は、3か{月間|げつかん}、{先輩|せんぱい}{社員|しゃいん}の{指導|しどう}＿＿{研修|けんしゅう}を{受|う}ける。", answer: "のもとで", en: "New employees receive three months of training under the guidance of senior staff." },
          { q: "{外国語|がいこくご}を{学|まな}ぶ＿＿{大切|たいせつ}なのは、{間違|まちが}いを{恐|おそ}れずに{話|はな}すことだ。", answer: "上で", en: "What matters in learning a foreign language is speaking without fear of making mistakes." },
          { q: "この{町|まち}に{引|ひ}っ{越|こ}して＿＿、{近所|きんじょ}の{人|ひと}たちにいろいろ{助|たす}けてもらっている。", answer: "以来", en: "Ever since I moved to this town, my neighbors have been helping me in all sorts of ways." },
          { q: "{親|おや}というのは、いくつになっても{子|こ}どものことが{心配|しんぱい}になる＿＿。", answer: "ものだ", en: "Parents worry about their children no matter how old they get." },
        ],
      },
    },
    // ───────────────────────────── Part (2)
    {
      label: "(2)",
      canDo: [
        { ja: "{改|あらた}まった{場|ば}で、これからの{抱負|ほうふ}を{述|の}べ、お{礼|れい}のあいさつができる。", en: "Talk about your plans for the future and express your thanks in a formal setting." },
      ],
      sample: {
        kind: "speech",
        lines: [
          { ja: "{札幌|さっぽろ}で{私|わたくし}が{担当|たんとう}するのは、{北海道|ほっかいどう}の{食材|しょくざい}を{生|い}かした{新|しん}ブランドの{立|た}ち{上|あ}げです。{地元|じもと}の{生産者|せいさんしゃ}との{連携|れんけい}**を{目的|もくてき}とした**チームも、{新|あら}たに{作|つく}られると{聞|き}いております。", en: "In Sapporo, I'll be in charge of launching a new brand that makes the most of Hokkaido ingredients. I hear a team aimed at working with local producers is also being newly set up." },
          { ja: "{今回|こんかい}の{異動|いどう}**をきっかけに**、{北海道|ほっかいどう}の{暮|く}らしや{食文化|しょくぶんか}についても{一|いち}から{勉強|べんきょう}してみるつもりです。", en: "I plan to take this transfer as an opportunity to study Hokkaido's way of life and food culture from scratch as well." },
          { ja: "{任|まか}された**からには**、{必|かなら}ず{目|め}に{見|み}える{成果|せいか}を{出|だ}すつもりです。", en: "Now that I've been entrusted with this, I fully intend to produce visible results." },
          { ja: "{勤務地|きんむち}は{変|か}わりますが、{皆様|みなさま}とのご{縁|えん}がこれで{切|き}れてしまう**わけではありません**。{新|あたら}しいブランドの{商品|しょうひん}は、こちらの{開発部|かいはつぶ}と{協力|きょうりょく}しながら{作|つく}っていくことになります。", en: "My workplace is changing, but that doesn't mean my ties with all of you end here. The new brand's products will be developed in cooperation with this department." },
          { ja: "{札幌|さっぽろ}に{行|い}っても、この{部署|ぶしょ}で{学|まな}んだことを{忘|わす}れる**ことなく**、{努力|どりょく}を{続|つづ}けてまいります。", en: "Even in Sapporo, I will keep working hard without forgetting what I learned in this department." },
          { ja: "{最後|さいご}になりましたが、{年度末|ねんどまつ}のお{忙|いそが}しい{時期|じき}**にもかかわらず**、{今日|きょう}はたくさんの{方|かた}に{足|あし}を{運|はこ}んでいただきました。{本当|ほんとう}にありがとうございました。", en: "Last but not least, despite this being the busy end of the fiscal year, so many of you took the trouble to come today. Thank you very much." },
        ],
      },
      points: [
        {
          no: 16,
          pattern: "〜を〜とする",
          phrase: "{連携|れんけい}**を{目的|もくてき}とした**チーム",
          stars: 3,
          marks: [],
          usage: {
            ja: "「{観光客|かんこうきゃく}の{誘致|ゆうち}を{目的|もくてき}として」「{店長|てんちょう}を{中心|ちゅうしん}に」のように、「AをBにする」「AがBだ」と{言|い}うときに{使|つか}う。「として」のかわりに「に」を{使|つか}うこともある。",
            en: "Used to say “make A (into) B / A is B”, as in 観光客の誘致を目的として “with attracting tourists as the aim” or 店長を中心に “with the store manager at the center”. に can be used in place of として.",
          },
          forms: ["[N₁] + を + [N₂] + とした + [N]", "[N₁] + を + [N₂] + とする", "[N₁] + を + [N₂] + として／に"],
          formNotes: [
            { ja: "「{目的|もくてき}・{中心|ちゅうしん}・{対象|たいしょう}・{手本|てほん}・{前提|ぜんてい}」などの{言葉|ことば}と{一緒|いっしょ}に{使|つか}われる。", en: "Used with nouns such as 目的 (purpose), 中心 (center), 対象 (target), 手本 (model) and 前提 (premise)." },
          ],
          examples: [
            { ja: "この{講座|こうざ}は、{社会人|しゃかいじん}**を{対象|たいしょう}とした**{夜間|やかん}の{日本語|にほんご}クラスです。", en: "This course is an evening Japanese class aimed at working adults." },
            { ja: "{駅|えき}**を{中心|ちゅうしん}に**、{新|あたら}しいマンションが{次々|つぎつぎ}と{建|た}っている。", en: "New apartment buildings are going up one after another around the station." },
            { ja: "{新人|しんじん}のころは、{先輩|せんぱい}の{仕事|しごと}ぶり**を{手本|てほん}として**、{少|すこ}しずつ{仕事|しごと}を{覚|おぼ}えた。", en: "When I was new, I gradually learned the job by taking my seniors' way of working as my model." },
            { ja: "{両社|りょうしゃ}は{合併|がっぺい}**を{前提|ぜんてい}とした**{話|はな}し{合|あ}いを{始|はじ}めた。", en: "The two companies have begun talks on the assumption that they will merge." },
            { ja: "{来月|らいげつ}の{講演会|こうえんかい}では、「{子育|こそだ}てと{仕事|しごと}」**をテーマに**、3{人|にん}の{専門家|せんもんか}が{話|はなし}をする。", en: "At next month's lecture, three experts will speak on the theme of “raising children and working”." },
          ],
          deepDive:
            "**A を B とする** literally means *to make A into B / to treat A as B*. The pattern is a formal way of saying **A が B だ**: 利益を目的とする企業 = 目的が利益である企業 *a company whose aim is profit*.\n\n" +
            "B is almost always one of a small set of nouns, so learn them as chunks:\n" +
            "- **〜を目的とする** *aimed at ~*\n" +
            "- **〜を中心とする / 〜を中心に** *centered on ~*\n" +
            "- **〜を対象とする** *targeted at ~*\n" +
            "- **〜を手本とする** *modeled on ~*\n" +
            "- **〜を前提とする / 〜を前提に** *on the premise of ~*\n" +
            "- also: 〜をテーマとする, 〜を条件とする, 〜を基本とする, 〜を理由とする.\n\n" +
            "Forms by position:\n" +
            "- Before a noun: **とした / とする + N** (目的とした活動).\n" +
            "- Linking to the rest of the sentence: **として** or the shorter **に** (中心として ≈ 中心に, 目的として ≈ 目的に). In very formal writing: **とし、**.\n" +
            "- At the end: **〜とする / 〜としている**.\n\n" +
            "Common mistakes:\n" +
            "- Swapping the particles: ✗目的を研究とする. The *content* takes を, the *role word* takes とする.\n" +
            "- Using に directly before a noun: ✗高校生を対象にのアンケート. Before a noun you need **とした / とする** (or **にした**): 高校生を対象としたアンケート.\n\n" +
            "Compare **〜を中心に** with **〜をはじめ** (#10): を中心に describes a core that other things gather around (駅を中心に店が並ぶ); をはじめ names the first item of a list. And **〜をきっかけに** (#17) uses the same を〜に shape, but with a cause.",
          see: [10, 17],
          index: ["Nを目的とする", "Nを中心に", "Nを対象とした", "Nを手本として", "Nを前提に", "NをNとする", "NをNとした", "NをNとして", "NをNに"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{奨学金|しょうがくきん}は、{留学生|りゅうがくせい}の{生活|せいかつ}を{支|ささ}えることを{目的|もくてき}（　）{作|つく}られた{制度|せいど}だ。", options: ["として", "とする"], answer: 0, en: "This scholarship is a system created for the purpose of supporting international students' daily lives.", why: { en: "A verb (作られた) follows, so the adverbial として is needed; とする would have to be followed by a noun." } },
                { q: "これは、{市|し}が{地元|じもと}の{高校生|こうこうせい}を{対象|たいしょう}（　）アンケートの{結果|けっか}です。", options: ["として", "とした"], answer: 1, en: "These are the results of a survey the city conducted targeting local high school students.", why: { en: "A noun (アンケート) follows directly, so the noun-modifying とした fits." } },
                { q: "{本日|ほんじつ}の{講演|こうえん}では、「{働|はたら}き{方|かた}」をテーマ（　）お{話|はな}しいたします。", options: ["とする", "に"], answer: 1, en: "In today's lecture, I will talk on the theme of “ways of working”." },
                { q: "{秋|あき}の{祭|まつ}りは、{商店街|しょうてんがい}の{人|ひと}たちを{中心|ちゅうしん}（　）{準備|じゅんび}が{進|すす}められている。", options: ["とする", "に"], answer: 1, en: "Preparations for the autumn festival are being led by the people of the shopping street." },
              ],
            },
          ],
        },
        {
          no: 17,
          pattern: "〜をきっかけに",
          phrase: "{今回|こんかい}の{異動|いどう}**をきっかけに**",
          stars: 1,
          marks: [],
          usage: {
            ja: "{何|なに}かが{始|はじ}まったり{変|か}わったりしたときに、その{原因|げんいん}・{理由|りゆう}になった{出来事|できごと}を{表|あらわ}すときに{使|つか}う。",
            en: "Used to express the event that caused or triggered something to start or change — “with ~ as the trigger / prompted by ~”.",
          },
          forms: ["[N] + をきっかけに", "[N] + をきっかけとして", "[N] + がきっかけで", "〜のは + [N] + がきっかけだ"],
          formNotes: [
            { ja: "この{項目|こうもく}には{本|ほん}に{接続|せつぞく}の{図|ず}がない。{上|うえ}の{形|かたち}は、{例文|れいぶん}に{出|で}てくる{使|つか}い{方|かた}をまとめたもの。", en: "The book gives no connection formula for this point; the forms above summarize how きっかけ is used in its example sentences." },
          ],
          examples: [
            { ja: "{友人|ゆうじん}に{誘|さそ}われたこと**をきっかけに**、{週末|しゅうまつ}にボランティア{活動|かつどう}を{始|はじ}めた。", en: "Being invited by a friend got me started volunteering on weekends." },
            { ja: "{一冊|いっさつ}の{絵本|えほん}**がきっかけで**、{絵|え}を{描|か}くことが{好|す}きになった。", en: "A single picture book was what made me fall in love with drawing." },
            { ja: "{祖父|そふ}の{入院|にゅういん}**をきっかけとして**、{家族|かぞく}で{健康|けんこう}について{話|はな}し{合|あ}うようになった。", en: "My grandfather's hospitalization prompted our family to start talking together about our health." },
            { ja: "{二人|ふたり}が{親|した}しくなった**きっかけ**は、{同|おな}じ{電車|でんしゃ}で{毎朝|まいあさ}{顔|かお}を{合|あ}わせていたことだ。", en: "What brought the two of them together was seeing each other on the same train every morning." },
          ],
          plus: [
            {
              pattern: "〜を{契機|けいき}に",
              stars: 1,
              marks: ["praise", "formal"],
              usage: {
                ja: "{同|おな}じ{意味|いみ}・{使|つか}い{方|かた}で、{社会的|しゃかいてき}・{歴史的|れきしてき}に{大|おお}きな{出来事|できごと}について{言|い}うときは、「{契機|けいき}」という{言葉|ことば}を{使|つか}うこともある。よい{意味|いみ}の{文|ぶん}に{使|つか}うことが{多|おお}い。",
                en: "With the same meaning and usage, the word 契機 is used when talking about something socially or historically significant. It is mostly used in sentences with a positive meaning.",
              },
              forms: ["[N] + を{契機|けいき}に", "[N] + を{契機|けいき}として", "[N] + を{契機|けいき}にして"],
              formNotes: [
                { ja: "{本|ほん}には{接続|せつぞく}の{図|ず}がない。{上|うえ}の{形|かたち}は{例文|れいぶん}から{整理|せいり}したもの。", en: "No connection formula is given in the book; the forms above are taken from its example sentences." },
              ],
              examples: [
                { ja: "オリンピックの{開催|かいさい}**を{契機|けいき}に**、{市内|しない}の{道路|どうろ}や{駅|えき}が{整備|せいび}された。", en: "Hosting the Olympics prompted the city to improve its roads and stations." },
                { ja: "{新駅|しんえき}の{開業|かいぎょう}**を{契機|けいき}として**、{周辺|しゅうへん}の{人口|じんこう}が{急増|きゅうぞう}した。", en: "The opening of the new station triggered a rapid rise in the surrounding population." },
                { ja: "{大|おお}きな{災害|さいがい}**を{契機|けいき}に**、{地域|ちいき}の{防災|ぼうさい}{意識|いしき}が{高|たか}まった。", en: "The major disaster served as a turning point that raised the community's awareness of disaster prevention." },
                { ja: "{新|あたら}しい{法律|ほうりつ}の{施行|しこう}**を{契機|けいき}にして**、{在宅|ざいたく}{勤務|きんむ}を{導入|どうにゅう}する{企業|きぎょう}が{増|ふ}えた。", en: "The new law coming into force led more companies to introduce working from home." },
              ],
            },
          ],
          deepDive:
            "**きっかけ** is a noun meaning *trigger, cue, the thing that got something started*. **Nをきっかけに（して）/ をきっかけとして** = *taking N as the trigger*; the second half describes a **new beginning or a change**: 始めた, 〜ようになった, 変わった, 知り合った.\n\n" +
            "Because きっかけ is a noun, it's flexible:\n" +
            "- **Nがきっかけで**: 旅行がきっかけで写真を始めた.\n" +
            "- **〜のは Nがきっかけだ**: 料理を始めたのは、一人暮らしがきっかけだった.\n" +
            "- **きっかけは〜だ / 〜きっかけになる / きっかけを作る**.\n" +
            "- Clauses need こと: ✗友人に誘われたをきっかけに → ✓誘われた**こと**をきっかけに.\n\n" +
            "きっかけ is neutral and works for personal, everyday events (a book, a meeting, a trip). The trigger is usually small compared to the result.\n\n" +
            "**〜を契機に** (Plus) has the same grammar but is a Sino-Japanese, formal word. It suits **socially or historically important events** — an anniversary, an election, the Olympics, a disaster, a new law — and appears in news, speeches and company documents. It usually introduces a positive development (発展した, 見直された, 高まった). Saying ✗漫画を読んだのを契機に日本語を始めた sounds overblown; use きっかけ.\n\n" +
            "Compare **〜を機に** (*on the occasion of*), which is similar to 契機 but also used for personal milestones: 結婚を機に退職した.\n\n" +
            "In a transfer speech, この異動をきっかけに / 転勤を機に + a resolution (挑戦したい, 心機一転がんばりたい) is a stock phrase.",
          see: [16],
          index: ["Nをきっかけに", "Nをきっかけとして", "Nがきっかけで", "Nを契機に", "Nを契機として"],
        },
        {
          no: 18,
          pattern: "〜からには",
          phrase: "{任|まか}された**からには**",
          stars: 2,
          marks: [],
          usage: {
            ja: "「〜は{決|き}めたこと・{事実|じじつ}なのだから、{当然|とうぜん}…するべきだ・するつもりだ・しろ」という{強|つよ}い{気持|きも}ちを{言|い}いたいときに{使|つか}う。",
            en: "Used to express a strong feeling: “since ~ has been decided / is a fact, naturally one should… / I intend to… / (you must) do…”.",
          },
          forms: ["[V-る] + からには", "[V-た] + からには"],
          formNotes: [
            { ja: "「〜というからには」「[N] である + からには」の{形|かたち}もある。", en: "The forms 〜というからには and N + であるからには are also used." },
          ],
          examples: [
            { ja: "{引|ひ}き{受|う}けた**からには**、{最後|さいご}まで{責任|せきにん}を{持|も}ってやり{遂|と}げたい。", en: "Now that I've accepted it, I want to see it through responsibly to the end." },
            { ja: "{試合|しあい}に{出|で}る**からには**、{勝|か}つつもりで{戦|たたか}おう。", en: "If we're going to play in the match, let's fight to win." },
            { ja: "{自分|じぶん}で{決|き}めた**からには**、{途中|とちゅう}で{文句|もんく}を{言|い}ってはいけないよ。", en: "Since you decided it yourself, you can't complain halfway through." },
            { ja: "プロである**からには**、どんな{状況|じょうきょう}でも{言|い}い{訳|わけ}はできない。", en: "As a professional, you can't make excuses whatever the situation." },
            { ja: "「{絶対|ぜったい}においしい」という**からには**、よほど{自信|じしん}があるのだろう。", en: "If he says it's “absolutely delicious”, he must be very confident." },
          ],
          plus: [
            {
              pattern: "〜{以上|いじょう}は",
              stars: 2,
              marks: [],
              usage: {
                ja: "「[V] + {以上|いじょう}（は）」という{言|い}い{方|かた}もある。「からには」と{同|おな}じように、「〜のだから、当然…」という{意味|いみ}になる。",
                en: "You can also say V + 以上（は）. Like からには, it means “since ~, naturally…”.",
              },
              forms: ["[V] + {以上|いじょう}（は）"],
              examples: [
                { ja: "{会社|かいしゃ}の{代表|だいひょう}として{出席|しゅっせき}する**{以上|いじょう}は**、{失礼|しつれい}のないようにしなければならない。", en: "Since you'll be attending as the company's representative, you mustn't be rude in any way." },
                { ja: "{契約書|けいやくしょ}にサインした**{以上|いじょう}**、{途中|とちゅう}でやめることはできない。", en: "Now that you've signed the contract, you can't quit partway." },
                { ja: "{代表|だいひょう}に{選|えら}ばれた**{以上|いじょう}は**、{応援|おうえん}してくれる{人|ひと}たちの{期待|きたい}に{応|こた}えたい。", en: "Now that I've been chosen as a representative, I want to live up to the expectations of the people supporting me." },
              ],
            },
            {
              pattern: "〜{上|うえ}は",
              stars: 1,
              marks: ["formal"],
              usage: {
                ja: "「[V] + {上|うえ}は」という{言|い}い{方|かた}もある。{意味|いみ}は「からには」と{同|おな}じだが、{硬|かた}い{言|い}い{方|かた}。",
                en: "There is also V + 上は. It means the same as からには but is stiffer and more formal.",
              },
              forms: ["[V] + {上|うえ}は"],
              examples: [
                { ja: "{会社|かいしゃ}の{許可|きょか}を{得|え}た**{上|うえ}は**、{計画|けいかく}をすぐに{実行|じっこう}に{移|うつ}すべきだ。", en: "Now that we have the company's permission, we should put the plan into action immediately." },
                { ja: "{親元|おやもと}を{離|はな}れて{留学|りゅうがく}する**{上|うえ}は**、{自分|じぶん}のことは{全部|ぜんぶ}{自分|じぶん}でやる{覚悟|かくご}が{必要|ひつよう}だ。", en: "Since you're leaving home to study abroad, you need to be prepared to do everything for yourself." },
                { ja: "**かくなる{上|うえ}は**、{社長|しゃちょう}に{直接|ちょくせつ}お{願|ねが}いするしかない。", en: "Things having come to this, the only option is to appeal to the president directly.", idiom: true },
              ],
            },
          ],
          deepDive:
            "**〜からには** = *since / now that ~ (it's a fact or a decision), naturally…*. The first half states something already decided or undeniable; the second half gives the **resulting duty, determination, command or strong conclusion**: 〜べきだ, 〜なければならない, 〜つもりだ, 〜たい, 〜てください, 〜しろ, 〜はずだ, 〜だろう.\n\n" +
            "- **V-る からには**: about a decision for the future (出場するからには *since I'm going to compete*).\n" +
            "- **V-た からには**: about something already done (引き受けたからには).\n" +
            "- **Nであるからには** / **〜というからには** (form note): プロであるからには; 専門家というからには *if (s)he calls herself an expert*.\n\n" +
            "The second half can't be a neutral fact: ✗日本に来たからには、寿司を食べた. It must carry the speaker's will or judgment.\n\n" +
            "Don't confuse it with other から patterns (☞ 〜から list):\n" +
            "- **〜からといって** (N3): *just because ~ doesn't mean…* — usually followed by a negative: 高いからといっておいしいとは限らない.\n" +
            "- **〜てからでなければ** (N3): *not until after ~*: 許可を取ってからでなければ入れない.\n" +
            "- **〜からこそ** (N3): *precisely because ~*.\n" +
            "- **〜から見て** (#60): *judging from ~*.\n\n" +
            "The two Plus forms:\n" +
            "- **〜以上（は）**: same meaning, slightly more logical/objective; very common in writing and in rules (契約した以上、守るべきだ). It also appears as **Nである以上**.\n" +
            "- **〜上は**: the stiffest version, found in formal speech and writing.\n- The book writes both connections simply as **V + 以上（は）** / **V + 上は**; in practice V is the dictionary form (出席する以上は) or, very often, the た-form (引き受けた以上は). **かくなる上は** (*now that things have come to this*) is a fixed, somewhat dramatic idiom. Don't mix it up with **V-る上で** (#14) or **V-た上で** (#117).",
          see: [14, 60, 70, 102, 117],
          index: ["V-るからには", "V-たからには", "Nであるからには", "〜というからには", "V以上は", "V上は", "かくなる上は"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{高|たか}いお{金|かね}を{払|はら}って{塾|じゅく}に{通|かよ}う（　）、{成績|せいせき}を{上|あ}げなければ{意味|いみ}がない。", options: ["からには", "からといって"], answer: 0, en: "If you're paying a lot to go to cram school, there's no point unless your grades go up." },
                { q: "{日本|にほん}に{住|す}んでいる（　）、{日本語|にほんご}が{上手|じょうず}だとは{限|かぎ}らない。", options: ["からには", "からといって"], answer: 1, en: "Just because someone lives in Japan doesn't mean they're good at Japanese.", why: { en: "〜とは限らない (not necessarily) pairs with からといって." } },
                { q: "{医師|いし}の{許可|きょか}が（　）、{退院|たいいん}することはできない。", options: ["{出|で}たからには", "{出|で}てからでなければ"], answer: 1, en: "You can't be discharged until the doctor gives permission." },
                { q: "{一度|いちど}{引|ひ}き{受|う}けると（　）、{最後|さいご}までやり{通|とお}すべきだ。", options: ["{言|い}ったからには", "{言|い}ってからでなければ"], answer: 0, en: "Once you've said you'll take it on, you should see it through to the end." },
                { q: "せっかく{遠|とお}くから{見|み}に{来|き}た（　）、いちばんいい{席|せき}で{見|み}たいね。", options: ["からには", "からといって"], answer: 0, en: "Since we've come all this way to see it, we want to watch from the best seats." },
              ],
            },
          ],
        },
        {
          no: 19,
          pattern: "〜わけではない",
          phrase: "{切|き}れてしまう**わけではありません**",
          stars: 3,
          marks: [],
          usage: {
            ja: "「〜という{状況|じょうきょう}・{気持|きも}ち・{理由|りゆう}ではない」と{否定|ひてい}するときに{使|つか}う。「{全部|ぜんぶ}{終|お}わったわけではない」のように、{相手|あいて}の{考|かんが}えや{一般的|いっぱんてき}な{判断|はんだん}を{否定|ひてい}するときに{使|つか}う。「{嫌|きら}いなわけではない」のように、100%そうだと{言|い}いたくないときにも{使|つか}う。",
            en: "Used to deny that something is the situation, feeling or reason — “it's not that ~”. It refutes the other person's idea or a common assumption, as in 全部終わったわけではない “it's not as if everything is finished”. It's also used when you don't want to say something is 100% so, as in 嫌いなわけではない “it's not that I dislike it”.",
          },
          forms: ["[Pl] + わけではない", "[Pl] + わけじゃない", "[なA~~だ~~]な／[N~~だ~~]の + わけではない"],
          examples: [
            { ja: "{肉|にく}が{嫌|きら}いな**わけではない**が、{最近|さいきん}はあまり{食|た}べていない。", en: "It's not that I dislike meat, but I haven't been eating much of it lately." },
            { ja: "{値段|ねだん}の{高|たか}い{店|みせ}が、いつもおいしい**わけではない**。", en: "Expensive restaurants aren't always good." },
            { ja: "{別|べつ}に{怒|おこ}っている**わけじゃない**よ。ちょっと{疲|つか}れているだけ。", en: "I'm not angry or anything. I'm just a bit tired." },
            { ja: "{全員|ぜんいん}が{賛成|さんせい}した**わけではありません**ので、もう{少|すこ}し{話|はな}し{合|あ}いましょう。", en: "Not everyone agreed, so let's discuss it a little more." },
          ],
          deepDive:
            "**わけ** means *reason, logic, what follows*. **〜わけではない** therefore says *it doesn't follow that ~ / it's not (the case) that ~*. It's a **partial or soft denial**: it corrects an assumption rather than flatly saying *no*.\n\n" +
            "Three common jobs:\n" +
            "- **Correcting a natural assumption**: 試験には合格したが、これで勉強が終わったわけではない *I passed the exam, but that doesn't mean my studying is over*.\n" +
            "- **Partial negation** with 全部・みんな・いつも・必ずしも: 必ずしも正しいわけではない *not necessarily right*.\n" +
            "- **Softening your own statement**: 行きたくないわけじゃないけど… *it's not that I don't want to go, but…*. Very common with けど / が.\n\n" +
            "Connection: plain form. なA takes な (好きなわけではない) and N takes の (or more commonly **というわけではない**: 病気というわけではない). わけじゃない is the casual version; わけではありません the polite one. 別に〜わけじゃない is a set casual combination.\n\n" +
            "Don't confuse it with the other わけ patterns:\n" +
            "- **〜わけがない** (N3): *there's no way ~* — a strong, 100% denial. 彼が犯人のわけがない.\n" +
            "- **〜わけにはいかない** (#57): *can't (for social/moral reasons)*.\n" +
            "- **〜わけだ** (#82, #134): *no wonder / that means ~*.\n" +
            "- **〜んじゃない？**: *isn't it that ~?* (a guess), not a denial.\n\n" +
            "In the speech, 縁が切れてしまうわけではありません reassures the listeners by denying an assumption they might make (that the transfer ends the relationship).",
          see: [57, 82, 134],
          index: ["〜わけではない", "〜わけじゃない", "〜というわけではない", "必ずしも〜わけではない"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{店|みせ}はいつも{混|こ}んでいるが、{特別|とくべつ}{安|やす}い（　）。", options: ["わけではない", "に{違|ちが}いない"], answer: 0, en: "This shop is always crowded, but it's not as if it's especially cheap." },
                { q: "あんなに{練習|れんしゅう}したんだから、{本番|ほんばん}で{失敗|しっぱい}する（　）よ。{自信|じしん}を{持|も}って！", options: ["わけではない", "わけがない"], answer: 1, en: "You practiced so hard — there's no way you'll fail on the day. Be confident!", why: { en: "The speaker is reassuring strongly (100%): わけがない. わけではない would only mean “it's not the case that you'll fail”, which doesn't fit the encouragement." } },
                { q: "A：{田中|たなか}さん、{今日|きょう}も{飲|の}み{会|かい}に{来|こ}ないね。お{酒|さけ}が{嫌|きら}い（　）？", options: ["なわけじゃない", "なんじゃない"], answer: 1, en: "A: Tanaka isn't coming to the drinks party again today. Maybe he doesn't like alcohol?", why: { en: "A is making a guess (“isn't it that…?”), so んじゃない is right." } },
                { q: "B：ううん、{嫌|きら}いな（　）けど、{明日|あした}{朝|あさ}が{早|はや}いんだって。", options: ["わけじゃない", "しかない"], answer: 0, en: "B: No, it's not that he dislikes it — apparently he has an early start tomorrow." },
              ],
            },
          ],
        },
        {
          no: 20,
          pattern: "〜ことなく",
          phrase: "{忘|わす}れる**ことなく**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{休|やす}むことなく{走|はし}り{続|つづ}けた」のように、{何|なに}かをしない{状態|じょうたい}で、{後|うし}ろの{動作|どうさ}が{続|つづ}いたり、{完了|かんりょう}したりするときに{使|つか}う。",
            en: "Used when the following action continues or is completed without something being done, as in 休むことなく走り続けた “kept running without resting”.",
          },
          forms: ["[V-る] + ことなく"],
          examples: [
            { ja: "{祖母|そぼ}は40{年間|ねんかん}、{一日|いちにち}も{休|やす}む**ことなく**{店|みせ}を{開|あ}け{続|つづ}けた。", en: "My grandmother kept her shop open for forty years without taking a single day off." },
            { ja: "{彼|かれ}は{迷|まよ}う**ことなく**、その{場|ば}で{契約|けいやく}を{決|き}めた。", en: "He signed the contract on the spot without hesitating." },
            { ja: "{彼女|かのじょ}は{周|まわ}りの{目|め}を{気|き}にする**ことなく**、{自分|じぶん}の{意見|いけん}をはっきり{述|の}べた。", en: "She stated her opinion clearly without worrying about what others thought." },
            { ja: "{荷物|にもつ}は、{途中|とちゅう}で{一度|いちど}も{開|あ}けられる**ことなく**、{無事|ぶじ}{相手|あいて}に{届|とど}いた。", en: "The package reached the recipient safely without being opened once along the way." },
          ],
          deepDive:
            "**V-る + ことなく** means *without doing ~*. It is the formal, written equivalent of **〜ないで** / **〜ずに**: 休むことなく = 休まずに = 休まないで.\n\n" +
            "Typical uses:\n" +
            "- **Something continues uninterrupted**: 一日も休むことなく, 一度もやむことなく, 途切れることなく. Often paired with 一度も / 少しも / 一日も for emphasis, and with 〜続ける.\n" +
            "- **Something is completed without a (feared) event happening**: 遅れることなく到着した, 誰にも気づかれることなく部屋を出た.\n" +
            "- **Resolutions and requests in speeches**: 初心を忘れることなく努力します; 恐れることなく挑戦してください.\n\n" +
            "Register: it sounds serious and dignified. For everyday small actions it's out of place: ✗歯を磨くことなく寝てしまった sounds oddly literary — say 歯を磨かないで寝てしまった.\n\n" +
            "Connection: only the dictionary form of the verb (plus passive, e.g. 開けられることなく). Adjectives and nouns don't use ことなく.\n\n" +
            "Compare with other こと patterns (☞ 〜こと list):\n" +
            "- **〜ことはない** (#49): *there's no need to ~*.\n" +
            "- **〜ないことはない** (#54): *it's not that I can't/don't*.\n" +
            "- **〜ないことには** (#110): *unless ~*.\n" +
            "- **〜こと。** (#8), **〜ことか** (#42), **〜ことに** (#40), **〜ことから** (#62), **〜ことだ** (#87), **〜たことにする** (#119).",
          see: [8, 40, 42, 49, 54, 62, 87, 110, 119],
          index: ["V-ることなく", "〜ことなく"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{彼|かれ}は{疲|つか}れた{顔|かお}を{見|み}せることなく、（　）。", options: ["{最後|さいご}まで{笑顔|えがお}で{働|はたら}いた", "{疲|つか}れたと{何度|なんど}も{文句|もんく}を{言|い}った"], answer: 0, en: "Without showing any sign of tiredness, he worked with a smile until the very end." },
                { q: "この{工場|こうじょう}の{機械|きかい}は{止|と}まることなく、（　）。", options: ["よく{故障|こしょう}する", "24{時間|じかん}{動|うご}き{続|つづ}けている"], answer: 1, en: "The machines in this factory keep running 24 hours a day without stopping." },
                { q: "{彼女|かのじょ}は{周|まわ}りの{反対|はんたい}に{負|ま}けることなく、（　）。", options: ["{夢|ゆめ}をあきらめた", "{夢|ゆめ}をかなえた"], answer: 1, en: "Without giving in to the opposition around her, she made her dream come true." },
                { q: "その{作家|さっか}は80{歳|さい}を{過|す}ぎても{筆|ふで}を{置|お}くことなく、（　）。", options: ["{新|あたら}しい{作品|さくひん}を{書|か}き{続|つづ}けた", "{作家|さっか}を{引退|いんたい}した"], answer: 0, en: "Even past eighty, the writer never laid down his pen and kept writing new works." },
              ],
            },
          ],
        },
        {
          no: 21,
          pattern: "〜にもかかわらず",
          phrase: "お{忙|いそが}しい{時期|じき}**にもかかわらず**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「〜なのに」という{意味|いみ}で、その{状態|じょうたい}から{予想|よそう}されることと、{実際|じっさい}のことが{違|ちが}うというときに{使|つか}う。",
            en: "Means “although / despite ~”. Used when what actually happens differs from what you would expect from the situation.",
          },
          forms: ["[V-て]いる + にもかかわらず", "[V-た] + にもかかわらず", "[N] + にもかかわらず"],
          formNotes: [
            { ja: "「[なA]／[N] である + にもかかわらず」「[いA] + にもかかわらず」の{形|かたち}もある。", en: "The forms なA / N + であるにもかかわらず and いA + にもかかわらず are also used." },
          ],
          examples: [
            { ja: "{何度|なんど}も{注意|ちゅうい}した**にもかかわらず**、{彼|かれ}はまた{同|おな}じミスをした。", en: "Despite being warned many times, he made the same mistake again." },
            { ja: "{平日|へいじつ}**にもかかわらず**、{会場|かいじょう}は{大勢|おおぜい}の{客|きゃく}でにぎわっていた。", en: "Even though it was a weekday, the venue was bustling with visitors." },
            { ja: "{熱|ねつ}が{下|さ}がっていない**にもかかわらず**、{彼女|かのじょ}は{会議|かいぎ}に{出席|しゅっせき}した。", en: "Although her fever hadn't gone down, she attended the meeting." },
            { ja: "この{店|みせ}は{値段|ねだん}が{安|やす}い**にもかかわらず**、{料理|りょうり}の{質|しつ}が{高|たか}い。", en: "Despite its low prices, this restaurant serves high-quality food." },
            { ja: "{彼|かれ}はベテランである**にもかかわらず**、{基本的|きほんてき}な{確認|かくにん}を{怠|おこた}った。", en: "Although he's a veteran, he neglected a basic check." },
            { ja: "{大雪|おおゆき}だった。**それにもかかわらず**、{電車|でんしゃ}は{時間|じかん}どおりに{動|うご}いていた。", en: "There was heavy snow. Even so, the trains were running on time." },
          ],
          deepDive:
            "**〜にもかかわらず** = *in spite of / even though*. It's the formal, objective counterpart of **〜のに**: 雨なのに → 雨にもかかわらず. The first half sets up an expectation; the second half reports a result that **contradicts** it.\n\n" +
            "Connection:\n" +
            "- Verbs: plain form, very often 〜ている / 〜た (注意したにもかかわらず, 知っているにもかかわらず).\n" +
            "- Nouns directly (悪天候にもかかわらず) or with である (経験者であるにもかかわらず).\n" +
            "- なA with である (不便であるにもかかわらず); いA directly (高いにもかかわらず).\n" +
            "- Sentence-initial: **それにもかかわらず** *nevertheless*.\n\n" +
            "Two nuances to remember:\n" +
            "- It is more formal and less emotional than のに. のに often carries complaint or regret (せっかく来たのに…) and can end a sentence; にもかかわらず cannot end a sentence that way.\n" +
            "- In speeches it's a staple of polite thanks: お忙しいにもかかわらず / 悪天候にもかかわらず、お集まりいただき… *thank you for coming despite…*.\n\n" +
            "The big trap is **〜にかかわらず** (#5), without も: *regardless of*. Test yourself: 天候にかかわらず開催 = held whatever the weather; 悪天候にもかかわらず開催された = held despite the bad weather. If the sentence reports a surprising actual result, you need も.\n\n" +
            "Also different from **〜ながら（も）** (#15), which prefers the same subject and states in the first half, and **〜からといって** (*just because*).",
          see: [5, 15],
          index: ["〜にもかかわらず", "Nにもかかわらず", "それにもかかわらず", "であるにもかかわらず"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{薬|くすり}を{飲|の}んだ（　）、{頭痛|ずつう}はまったく{治|おさ}まらなかった。", options: ["にもかかわらず", "によって"], answer: 0, en: "Although I took medicine, my headache didn't ease at all." },
                { q: "このホテルは{季節|きせつ}（　）{料金|りょうきん}が{同|おな}じだ。", options: ["にもかかわらず", "にかかわらず"], answer: 1, en: "This hotel charges the same regardless of the season.", why: { en: "“Regardless of” (no contradiction) → にかかわらず, without も." } },
                { q: "{台風|たいふう}が{近|ちか}づいている（　）、{彼|かれ}は{海|うみ}へ{釣|つ}りに{出|で}かけた。", options: ["にもかかわらず", "に限り"], answer: 0, en: "Even though a typhoon was approaching, he went out to sea fishing." },
                { q: "{何度|なんど}も{説明|せつめい}した（　）、まだ{理解|りかい}してもらえない。", options: ["からといって", "にもかかわらず"], answer: 1, en: "Despite explaining it many times, I still can't get them to understand." },
                { q: "{彼女|かのじょ}は{日本語|にほんご}（　）、フランス{語|ご}も{話|はな}せる。", options: ["にもかかわらず", "はもちろん"], answer: 1, en: "She speaks French as well as Japanese, of course." },
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["からには", "ことなく", "にもかかわらず", "わけではない", "として", "きっかけ"],
        items: [
          { q: "{自分|じぶん}から{立候補|りっこうほ}した＿＿、{責任|せきにん}を{持|も}ってクラス{委員|いいん}の{仕事|しごと}をやるつもりだ。", answer: "からには", en: "Since I volunteered myself, I intend to do the class representative's job responsibly." },
          { q: "{本日|ほんじつ}の{見学会|けんがくかい}は、{市内|しない}の{小学生|しょうがくせい}を{対象|たいしょう}＿＿{行|おこな}われます。", answer: "として", en: "Today's tour is being held for elementary school children in the city." },
          { q: "{彼|かれ}は{一度|いちど}も{後|うし}ろを{振|ふ}り{返|かえ}る＿＿、{駅|えき}の{方|ほう}へ{歩|ある}いていった。", answer: "ことなく", en: "He walked off toward the station without looking back once." },
          { q: "{安|やす}いからといって、{品質|ひんしつ}が{悪|わる}い＿＿。", answer: "わけではない", en: "Just because something is cheap doesn't mean its quality is poor." },
          { q: "{事前|じぜん}に{予約|よやく}していた＿＿、{店|みせ}に{行|い}ったら{席|せき}がなかった。", answer: "にもかかわらず", en: "Even though I'd booked in advance, there was no table when I got to the restaurant." },
          { q: "{友達|ともだち}に{誘|さそ}われたのが＿＿で、ヨガを{始|はじ}めた。", answer: "きっかけ", en: "I took up yoga after a friend invited me." },
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
          { q: "{兄|あに}は{医者|いしゃ}になりたいと（　）、{結局|けっきょく}は{父|ちち}の{会社|かいしゃ}を{継|つ}いだ。", options: ["{思|おも}いながらも", "{思|おも}って{以来|いらい}", "{思|おも}ったからには", "{思|おも}うことなく"], answer: 0, en: "Although my brother wanted to become a doctor, he ended up taking over our father's company." },
          { q: "{甘|あま}いものが{嫌|きら}いな（　）けど、{今日|きょう}はケーキはやめておくよ。", options: ["わけじゃない", "はずがない", "ものだ", "ようだ"], answer: 0, en: "It's not that I dislike sweets, but I'll skip the cake today." },
          { q: "この{工場|こうじょう}では、{自動車|じどうしゃ}の{部品|ぶひん}（　）、さまざまな{金属|きんぞく}{製品|せいひん}を{生産|せいさん}している。", options: ["をはじめ", "のもとで", "を{目的|もくてき}に", "ほど"], answer: 0, en: "This factory produces all kinds of metal products, car parts first and foremost." },
          { q: "「{一度|いちど}{引|ひ}き{受|う}けた（　）、{途中|とちゅう}で{投|な}げ{出|だ}すな」と{父|ちち}によく{言|い}われた。", options: ["ことなく", "からには", "ように", "おかげで"], answer: 1, en: "My father often told me, “Once you've taken something on, don't give up halfway.”" },
          { q: "{祖母|そぼ}は{足|あし}の{骨|ほね}を{折|お}ったの（　）、{毎朝|まいあさ}{散歩|さんぽ}をするようになった。", options: ["はもとより", "をきっかけに", "をはじめとして", "を{中心|ちゅうしん}として"], answer: 1, en: "Breaking her leg prompted my grandmother to start taking a walk every morning." },
          { q: "{駅|えき}（　）{半径|はんけい}1キロ{以内|いない}に、スーパーが5つもある。", options: ["を{問|と}わず", "を{通|つう}じて", "を{中心|ちゅうしん}として", "をもとにして"], answer: 2, en: "There are as many as five supermarkets within a one-kilometer radius of the station." },
          { q: "{彼女|かのじょ}は{周|まわ}りの{人|ひと}に{頼|たよ}る（　）、{一人|ひとり}で{問題|もんだい}を{解決|かいけつ}した。", options: ["ことなく", "からには", "ものだから", "とおり"], answer: 0, en: "She solved the problem on her own without relying on the people around her." },
          { q: "{天気|てんき}{予報|よほう}では{晴|は}れると{言|い}っていた（　）、{午後|ごご}から{激|はげ}しい{雨|あめ}が{降|ふ}り{出|だ}した。", options: ["ほうが", "からには", "ことなく", "にもかかわらず"], answer: 3, en: "Even though the forecast said it would be sunny, heavy rain started in the afternoon." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "{値段|ねだん}が{高|たか}い", after: "わけではない。", pieces: ["{品質|ひんしつ}が", "いい", "からといって", "という"], order: [2, 0, 1, 3], star: 2, en: "Just because something is expensive doesn't mean its quality is good." },
          { before: "{入社|にゅうしゃ}", after: "{手紙|てがみ}を{書|か}いた。", pieces: ["なった", "{部長|ぶちょう}に", "{以来|いらい}", "お{世話|せわ}に"], order: [2, 3, 0, 1], star: 2, en: "I wrote a letter to the department manager who has looked after me ever since I joined the company." },
          { before: "{新|あたら}しい{店|みせ}の", after: "のは{駅|えき}からの{距離|きょり}だ。", pieces: ["{上|うえ}で", "{場所|ばしょ}を", "{選|えら}ぶ", "{大切|たいせつ}な"], order: [1, 2, 0, 3], star: 2, en: "What matters when choosing the location for a new shop is the distance from the station." },
          { before: "{彼|かれ}は{厳|きび}しい", after: "ことなく{練習|れんしゅう}を{続|つづ}けた。", pieces: ["{一日|いちにち}も", "{休|やす}む", "もとで", "{監督|かんとく}の"], order: [3, 2, 0, 1], star: 2, en: "Under a strict coach, he kept training without missing a single day." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{読解|どっかい}〉", en: "Q3 Reading comprehension" },
      ex: {
        type: "reading",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで{問題|もんだい}に{答|こた}えなさい。{答|こた}えとして{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage and answer the questions. Choose the best answer from 1–4." },
        title: "「ひまわり{読|よ}み{聞|き}かせの{会|かい}」10{周年|しゅうねん}{記念|きねん}の{集|つど}いで",
        text: [
          "{皆様|みなさま}、{本日|ほんじつ}は{私|わたくし}たち「ひまわり{読|よ}み{聞|き}かせの{会|かい}」の10{周年|しゅうねん}{記念|きねん}の{集|つど}いにお{越|こ}しいただき、ありがとうございます。",
          "{私|わたくし}たちの{会|かい}は10{年前|ねんまえ}、{子|こ}どもたちに{本|ほん}の{楽|たの}しさを{伝|つた}えることを{目的|もくてき}として、{近所|きんじょ}に{住|す}む5{人|にん}の{母親|ははおや}で{始|はじ}めました。それ{以来|いらい}、{毎週|まいしゅう}{土曜日|どようび}に{市立|しりつ}{図書館|としょかん}で{絵本|えほん}の{読|よ}み{聞|き}かせを{続|つづ}けてまいりました。{始|はじ}めたころは、{準備|じゅんび}をして{待|ま}っていたにもかかわらず、{聞|き}きに{来|き}てくれる{子|こ}どもが{一人|ひとり}もいない{日|ひ}もありました。",
          "それでも、{図書館|としょかん}の{職員|しょくいん}の{皆様|みなさま}をはじめ、{多|おお}くの{方々|かたがた}のご{協力|きょうりょく}のもとで、{少|すこ}しずつ{参加者|さんかしゃ}が{増|ふ}え、{今|いま}では{毎回|まいかい}30{人|にん}{以上|いじょう}の{子|こ}どもたちが{集|あつ}まってくれるようになりました。",
          "この10{周年|しゅうねん}をきっかけに、{来年|らいねん}からは{病院|びょういん}に{入院|にゅういん}している{子|こ}どもたちのところへも{絵本|えほん}を{届|とど}ける{活動|かつどう}を{始|はじ}めることになりました。{始|はじ}めるからには、{一人|ひとり}でも{多|おお}くの{子|こ}どもたちに{笑顔|えがお}を{届|とど}けたいと{思|おも}っております。{今後|こんご}とも、どうぞよろしくお{願|ねが}いいたします。",
        ],
        en: [
          "Everyone, thank you for coming today to the gathering celebrating the 10th anniversary of our Himawari Storytelling Group.",
          "Our group was started ten years ago by five mothers living in the neighborhood, with the aim of passing on the joy of books to children. Since then, we have continued reading picture books aloud at the city library every Saturday. When we first began, there were days when not a single child came to listen, even though we had prepared and were waiting.",
          "Even so, with the cooperation of many people, the library staff first among them, the number of participants gradually grew, and now more than thirty children come every time.",
          "Taking this 10th anniversary as an opportunity, from next year we will also start bringing picture books to children who are in hospital. Now that we're starting this, we want to bring smiles to as many children as possible. We ask for your continued support.",
        ],
        items: [
          {
            q: "この{会|かい}について{正|ただ}しいものはどれですか。",
            options: [
              "10{年前|ねんまえ}から{病院|びょういん}で{読|よ}み{聞|き}かせをしている。",
              "{始|はじ}めたころから{多|おお}くの{子|こ}どもが{集|あつ}まっていた。",
              "{来年|らいねん}から{新|あたら}しい{活動|かつどう}を{始|はじ}める{予定|よてい}だ。",
              "{図書館|としょかん}の{職員|しょくいん}が{中心|ちゅうしん}になって{始|はじ}めた{会|かい}だ。",
            ],
            answer: 2,
            en: "Which statement about this group is correct?",
            why: { en: "The hospital visits start next year (来年からは…始めることになりました). The group was founded by five mothers, not library staff, and at first there were days with no children." },
          },
          {
            q: "この{会|かい}で、{誰|だれ}が{誰|だれ}に{話|はな}していますか。",
            options: [
              "{図書館|としょかん}の{職員|しょくいん}が{会|かい}のメンバーに{話|はな}している。",
              "{会|かい}のメンバーが{集|あつ}まった{人|ひと}たちに{話|はな}している。",
              "{子|こ}どもたちが{会|かい}のメンバーに{話|はな}している。",
              "{病院|びょういん}の{人|ひと}が{会|かい}のメンバーに{話|はな}している。",
            ],
            answer: 1,
            en: "At this gathering, who is speaking to whom?",
            why: { en: "The speaker says 私たちの会 and thanks the audience for coming, so a member of the group is addressing the guests." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉1 {概要|がいよう}{理解|りかい}", en: "Q4 Listening 1: Summary comprehension" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "この{問題|もんだい}は、{全体|ぜんたい}としてどんな{内容|ないよう}かを{聞|き}く{問題|もんだい}です。{話|はなし}の{前|まえ}に{質問|しつもん}はありません。まず{話|はなし}を{聞|き}いてください。それから、{質問|しつもん}と{選択肢|せんたくし}を{見|み}て、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "This question asks about the overall content. There is no question before the talk. First listen, then look at the question and options and choose the best one from 1–4." },
        items: [
          {
            script: [
              { sp: "{課長|かちょう}", v: "m", ja: "{皆|みな}さん、おはようございます。もう{聞|き}いている{人|ひと}もいると{思|おも}いますが、{鈴木|すずき}さんが{来月|らいげつ}から{名古屋|なごや}{支店|してん}に{異動|いどう}することになりました。{鈴木|すずき}さんは{入社|にゅうしゃ}{以来|いらい}7{年間|ねんかん}、このチームで{海外|かいがい}の{取引先|とりひきさき}を{担当|たんとう}してくれました。" },
              { sp: "{課長|かちょう}", v: "m", ja: "{鈴木|すずき}さんが{担当|たんとう}していた{取引先|とりひきさき}は、{来月|らいげつ}から{林|はやし}さんが{引|ひ}き{継|つ}ぎます。ただ、{鈴木|すずき}さんとまったく{連絡|れんらく}が{取|と}れなくなるわけではありませんので、わからないことがあれば、{名古屋|なごや}に{確認|かくにん}してもかまいません。{引|ひ}き{継|つ}ぎは{今月|こんげつ}{中|ちゅう}に{終|お}わらせてください。{送別会|そうべつかい}については、あとで{幹事|かんじ}からメールが{届|とど}きます。" },
              { sp: "{質問|しつもん}", v: "f", ja: "{課長|かちょう}が{一番|いちばん}{伝|つた}えたいことは{何|なん}ですか。" },
            ],
            en: [
              "Good morning, everyone. Some of you may have heard already, but Ms. Suzuki is being transferred to the Nagoya branch from next month. Since joining the company, she has handled our overseas clients on this team for seven years.",
              "From next month, Mr. Hayashi will take over the clients Ms. Suzuki was in charge of. However, that doesn't mean we won't be able to contact her at all, so if there's anything you don't understand, feel free to check with Nagoya. Please finish the handover within this month. As for the farewell party, the organizer will send an email later.",
              "What does the section chief most want to communicate?",
            ],
            options: [
              "{鈴木|すずき}さんが{名古屋|なごや}{支店|してん}でする{仕事|しごと}の{内容|ないよう}",
              "{鈴木|すずき}さんの{異動|いどう}と{仕事|しごと}の{引|ひ}き{継|つ}ぎについて",
              "{送別会|そうべつかい}の{日時|にちじ}と{場所|ばしょ}",
              "{海外|かいがい}の{取引先|とりひきさき}との{新|あたら}しい{契約|けいやく}について",
            ],
            answer: 1,
            why: { en: "Most of the talk is about Suzuki's transfer and who takes over her clients. Her new job in Nagoya and the party details are not explained." },
          },
          {
            script: [
              { sp: "{女|おんな}", v: "f", ja: "{私|わたし}がこの{和菓子|わがし}の{店|みせ}を{開|ひら}いたのは、ちょうど20{年前|ねんまえ}です。もともとは{銀行|ぎんこう}に{勤|つと}めていて、お{菓子|かし}{作|づく}りとはまったく{関係|かんけい}のない{仕事|しごと}をしていました。" },
              { sp: "{女|おんな}", v: "f", ja: "ところが、ある{日|ひ}、{祖母|そぼ}が{作|つく}ってくれた{豆大福|まめだいふく}を{食|た}べて、{子|こ}どものころのことを{思|おも}い{出|だ}したんです。それをきっかけに、この{味|あじ}を{残|のこ}したいと{思|おも}うようになりました。{銀行|ぎんこう}を{辞|や}めてから、{和菓子|わがし}{職人|しょくにん}のもとで5{年間|ねんかん}{修業|しゅぎょう}をして、この{店|みせ}を{開|ひら}いたんです。" },
              { sp: "{女|おんな}", v: "f", ja: "やるからには{祖母|そぼ}の{味|あじ}を{超|こ}えたいと{思|おも}ってきましたが、それはまだまだですね。" },
              { sp: "{質問|しつもん}", v: "m", ja: "{女|おんな}の{人|ひと}は{主|おも}に{何|なに}について{話|はな}していますか。" },
            ],
            en: [
              "It was exactly twenty years ago that I opened this Japanese sweets shop. I originally worked at a bank, in a job that had nothing to do with making sweets.",
              "But one day I ate a mame-daifuku my grandmother had made, and it brought back memories of my childhood. That made me want to preserve that taste. After quitting the bank, I trained for five years under a wagashi craftsman and then opened this shop.",
              "Since I was going to do it, I always wanted to surpass my grandmother's taste — but I've still got a long way to go.",
              "What is the woman mainly talking about?",
            ],
            options: [
              "{店|みせ}を{始|はじ}めたきっかけ",
              "{新|あたら}しい{和菓子|わがし}の{作|つく}り{方|かた}",
              "{銀行|ぎんこう}の{仕事|しごと}を{選|えら}んだ{理由|りゆう}",
              "{店|みせ}の{客|きゃく}を{増|ふ}やす{方法|ほうほう}",
            ],
            answer: 0,
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉2 {即時|そくじ}{応答|おうとう}", en: "Q4 Listening 2: Quick response" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the sentence. Then listen to the replies and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "{女|おんな}", v: "f", ja: "{山田|やまだ}さん、{雨|あめ}にもかかわらず、わざわざ{来|き}てくださって、ありがとうございます。" }],
            options: [
              "いえいえ、お{招|まね}きいただいてありがとうございます。",
              "ええ、{雨|あめ}が{降|ふ}らなくてよかったですね。",
              "{雨|あめ}だったら{来|こ}なかったと{思|おも}います。",
            ],
            answer: 0,
            en: [
              "Mr. Yamada, thank you for taking the trouble to come despite the rain.",
              "Not at all, thank you for inviting me.",
              "Yes, it's good that it didn't rain.",
              "If it had rained, I don't think I'd have come.",
            ],
            why: { en: "The host thanks the guest for coming in the rain; the natural reply is a polite “not at all, thank you for inviting me”. Options 2 and 3 contradict the fact that it is raining." },
          },
          {
            script: [{ sp: "{男|おとこ}", v: "m", ja: "{来月|らいげつ}から{大阪|おおさか}だって？ じゃあ、もうなかなか{会|あ}えなくなるね。" }],
            options: [
              "うん、{会|あ}えなくなるわけじゃないよ。{東京|とうきょう}にもよく{出張|しゅっちょう}で{来|く}るから。",
              "うん、{大阪|おおさか}には{行|い}ったことがないんだ。",
              "そうだね、{会|あ}えてよかったね。",
            ],
            answer: 0,
            en: [
              "You're moving to Osaka next month? Then we won't be able to see each other much anymore.",
              "Yeah, but it's not like we won't be able to meet. I'll often come to Tokyo on business trips.",
              "Yeah, I've never been to Osaka.",
              "Right, it was good that we met.",
            ],
            why: { en: "Reply 1 reassures the friend by denying the assumption with 〜わけじゃない. The others don't respond to the worry about not meeting." },
          },
        ],
      },
    },
  ],
});
