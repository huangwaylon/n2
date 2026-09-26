N2.register({
  id: 8,
  genre: { ja: "ビジネス場面の会話", en: "Conversation in a Business Setting" },
  title: { ja: "{取引先|とりひきさき}で", en: "At a Client" },
  canDo: [
    { ja: "ビジネス場面で{社外|しゃがい}の人との{簡単|かんたん}な受け答えができる。", en: "Give simple responses in a business setting to people not from your company." },
  ],
  parts: [
    {
      label: "",
      sample: {
        kind: "dialogue",
        lines: [
          { sp: "{加藤|かとう}", v: "f", ja: "{田中|たなか}さん、{安田|やすだ}{製作所|せいさくしょ}の{佐々木|ささき}様が**お見えになりました**。", en: "Mr. Tanaka, Mr. Sasaki from Yasuda Manufacturing has arrived." },
          { sp: "佐々木", v: "m", ja: "本日はご{依頼|いらい}のサンプルを持ってまいりました。", en: "Today I've brought the samples you requested." },
          { sp: "田中", v: "m", ja: "あ、わざわざありがとうございます。", en: "Oh, thank you for taking the trouble." },
          { sp: "佐々木", v: "m", ja: "前回、ご{希望|きぼう}を{承|うけたまわ}りましたので、それに合わせて作り直しをさせていただきました。**ご**{確認|かくにん}**{願|ねが}えます**でしょうか。", en: "Last time we received your requests, so we remade the samples to match them. Could I ask you to check them?" },
          { sp: "田中", v: "m", ja: "はい、わかりました。", en: "Yes, certainly." },
          { sp: "佐々木", v: "m", ja: "よろしくお願いいたします。それから、これは前回{拝借|はいしゃく}した{資料|しりょう}と、サンプルに{関|かん}する{資料|しりょう}でございます。", en: "Thank you. Also, these are the materials I borrowed from you last time, and some materials about the samples." },
          { sp: "田中", v: "m", ja: "ああ、どうも。お{手数|てすう}をおかけしました。", en: "Ah, thanks. Sorry for the trouble." },
          { sp: "佐々木", v: "m", ja: "今度お時間がありましたら、ぜひ{当社|とうしゃ}の工場へお{越|こ}しになってください。新しい{機械|きかい}もご{覧|らん}いただきながら、**ご**説明**{申|もう}し{上|あ}げ**たいと思いますので…。", en: "Next time you have some time, please do come to our factory. I'd like to explain things to you while you look at our new machines too, so..." },
          { sp: "田中", v: "m", ja: "ええ、{私|わたくし}も一度{伺|うかが}いたいと思っておりました。", en: "Yes, I'd been hoping to visit once myself." },
          { sp: "佐々木", v: "m", ja: "お待ちしております。おいでくださるときは、ご{連絡|れんらく}いただけれ**ばと思います**。{私|わたくし}がご案内させていただきますので…。", en: "We'll be expecting you. When you come, I'd appreciate it if you would let me know. I'll show you around myself, so..." },
          { sp: "田中", v: "m", ja: "ありがとうございます。じゃ、{日程|にってい}**につきまして**は、{後|のち}ほど…。", en: "Thank you. Well then, about the schedule, I'll get back to you later..." },
        ],
      },
      points: [
        {
          no: 73,
          pattern: "{特別|とくべつ}な{尊敬語|そんけいご}・{謙譲語|けんじょうご}（お{見|み}えになる・{承|うけたまわ}る など）",
          phrase: "{佐々木|ささき}様が**お見えになりました**",
          stars: 2,
          marks: ["polite"],
          usage: {
            ja: "ビジネスなどの場面では、下の表のような特別な{敬語|けいご}の言葉も使われる。",
            en: "The following kinds of special honorific words in the tables below are also used in business and other settings.",
          },
          forms: [
            "意味 → {尊敬語|そんけいご}",
            "来る → お見えになる＊1／お{越|こ}しになる＊2",
            "行く・来る・いる → おいでになる＊3",
            "Vている → Vておいでになる",
            "意味 → {謙譲語|けんじょうご}",
            "見せる → ご{覧|らん}に{入|い}れる",
            "聞く・引き受ける → {承|うけたまわ}る",
            "借りる → {拝借|はいしゃく}する",
            "思う（知っている） → {存|ぞん}じる",
            "{伝言|でんごん}する → {申|もう}し{伝|つた}える",
            "Vていく・Vてくる → Vてまいる",
          ],
          formNotes: [
            { ja: "＊1「お見えです」も使われる。", en: "*1 お見えです is also used." },
            { ja: "＊2「お{越|こ}しの{方|かた}」「お{越|こ}しです」「お{越|こ}しいただく／くださる」「お{越|こ}しください」などの使い方もある。", en: "*2 There are also uses such as お越しの方 (the person coming), お越しです (is coming / has come), お越しいただく／くださる (have someone come / someone kindly comes) and お越しください (please come)." },
            { ja: "＊3「おいでの{際|さい}」「おいでです」「おいでいただく／くださる」「おいでください」などの使い方もある。", en: "*3 There are also uses such as おいでの際 (when you come), おいでです (is here / is coming), おいでいただく／くださる and おいでください (please come)." },
          ],
          examples: [
            { ja: "{横浜|よこはま}からお{越|こ}しの{大山|おおやま}様、{佐藤|さとう}様がお待ちですので、1階の{受付|うけつけ}までお{越|こ}しください。", en: "Mr. Oyama from Yokohama, Mr. Sato is waiting for you, so please come to the reception desk on the first floor." },
            { ja: "本日のご予約は{山本|やまもと}が{承|うけたまわ}りました。ありがとうございました。", en: "Your reservation for today was taken by Yamamoto. Thank you very much." },
            { ja: "この{資料|しりょう}、長い間{拝借|はいしゃく}したままお返しもせず、たいへん{申|もう}し{訳|わけ}ありませんでした。", en: "I'm terribly sorry for borrowing these materials for so long without returning them." },
            { ja: "A：こちらまで、お{車|くるま}でおいでになりましたか。\nB：いいえ、電車でまいりました。", en: "A: Did you come here by car?\nB: No, I came by train." },
            { ja: "A：休みの日はいつも何をしておいでになりますか。\nB：{趣味|しゅみ}のゴルフをしております。", en: "A: What do you usually do on your days off?\nB: I play golf, which is my hobby." },
            { ja: "{田中|たなか}はただ今、席を{外|はず}しておりますので、{後|のち}ほどこちらからご{連絡|れんらく}するように{申|もう}し{伝|つた}えます。", en: "Tanaka is away from his desk at the moment, so I'll tell him to get back to you later." },
          ],
          deepDive:
            "Point 73 is really a **vocabulary list**: special keigo verbs that replace an ordinary verb entirely, instead of being built by rule (お〜になる / お〜する). The whole skill is knowing which *direction* each word points.\n\n" +
            "**Sonkeigo (尊敬語) — raise the other person** (clients, customers, superiors; never yourself, and never your own colleagues when speaking to outsiders):\n" +
            "- **お見えになる / お越しになる** = 来る. Polished alternatives to いらっしゃる, very common in business and service settings. Short versions お見えです / お越しです are very common; **お越しください / お越しいただく** are the standard way to invite someone (example ①: 1階の受付までお越しください).\n" +
            "- **おいでになる** = 行く・来る・いる. Because it covers three verbs, read the context: お車でおいでになりましたか (come). Fixed phrases: おいでの際, おいでください.\n" +
            "- **Vておいでになる** = Vている: 何をしておいでになりますか ≈ 何をしていらっしゃいますか.\n\n" +
            "**Kenjōgo (謙譲語) — lower yourself / your side**:\n" +
            "- **ご覧に入れる** = 見せる. Don't mix it up with ご覧になる (honorific 見る — *they* look) or 拝見する (humble 見る — *I* look). Also distinct from お目にかかる (humble 会う).\n" +
            "- **承る** = 聞く / 引き受ける: ご予約は山本が承りました, ご注文を承りました.\n" +
            "- **拝借する** = 借りる.\n" +
            "- **存じる** = 思う / 知っている: 〜と存じます (I think), 存じております (I know). For knowing a *person*, 存じ上げる is used. The honorific counterpart is **ご存じだ** (*you* know).\n" +
            "- **申し伝える** = relay a message to someone on your side: 田中に申し伝えます.\n" +
            "- **Vてまいる** = Vていく／Vてくる: 持ってまいりました, 電車でまいりました.\n\n" +
            "Pitfalls:\n" +
            "- Direction errors: to a client, ✗うちの部長がお見えになります → ✓部長の○○がまいります / 伺います.\n" +
            "- Double keigo: ✗お見えになられる / ✗おいでになられる. The base word is already honorific; adding れる is heard but marked as excessive on tests.\n\n" +
            "JLPT tip: in 文法形式 questions, first find the subject of the verb. Other person → pick the sonkeigo option; me / my company → kenjōgo. Distractors are usually the opposite-direction twin (ご覧になる vs ご覧に入れる, ご存じ vs 存じる, おいでになる vs まいる).",
          index: [
            "お見えになる", "お越しになる", "おいでになる", "Vておいでになる",
            "ご覧に入れる", "承る", "拝借する", "存じる", "申し伝える", "Vてまいる",
          ],
          practice: [
            {
              type: "choice",
              labels: "abc",
              prompt: { ja: "", en: "Choose the correct option (a or b)." },
              items: [
                { q: "ただ今から皆様に（　）のは、イルカのショーでございます。", options: ["ご{覧|らん}に{入|い}れます", "お目にかかります"], answer: 0, en: "What we will now show you all is the dolphin show.", why: { en: "We show it to you → humble ご覧に入れる (= 見せる). お目にかかる is humble 会う (meet)." } },
                { q: "プレゼント用のラッピングは、あちらのカウンターで（　）おります。", options: ["申して", "{承|うけたまわ}って"], answer: 1, en: "Gift wrapping is handled at the counter over there.", why: { en: "承る = humble 引き受ける (accept/handle a request)." } },
                { q: "この{資料|しりょう}をコピーして（　）ので、{少々|しょうしょう}お待ちください。", options: ["まいります", "おいでになります"], answer: 0, en: "I'll go and copy these materials, so please wait a moment.", why: { en: "The speaker is the one going → humble Vてまいる (= Vてくる)." } },
                { q: "こちらの{商品|しょうひん}はきっとご{満足|まんぞく}いただけると（　）。", options: ["{存|ぞん}じます", "ご{存|ぞん}じです"], answer: 0, en: "I'm sure you will be satisfied with this product.", why: { en: "The speaker's own thought → humble 存じます (= 思います). ご存じ is honorific 知っている." } },
              ],
            },
          ],
        },
        {
          no: 74,
          pattern: "お／ご〜{願|ねが}う",
          phrase: "**ご**{確認|かくにん}**{願|ねが}えます**でしょうか",
          stars: 2,
          marks: ["polite"],
          usage: {
            ja: "「お／ご〜{願|ねが}います」は、「お／ご〜いただく／ください」と同じ意味で、ビジネス場面などで相手に{丁寧|ていねい}に{頼|たの}むときに使われる。",
            en: "\"お／ご〜{願|ねが}います\" is used when making a polite request to someone in a business or other similar setting and has the same meaning as \"お／ご〜いただく／ください\".",
          },
          forms: ["お[V-~~ます~~] + {願|ねが}う", "ご[N] + {願|ねが}う"],
          examples: [
            { ja: "{事故|じこ}の{状況|じょうきょう}をもう一度{詳|くわ}しくお話し{願|ねが}えますか。", en: "Could you tell us about the circumstances of the accident in detail once more?" },
            { ja: "こちらで{少々|しょうしょう}お待ち{願|ねが}えますか。", en: "Could you please wait here a moment?" },
            { ja: "{緊急|きんきゅう}の{際|さい}はこちらにご{連絡|れんらく}{願|ねが}います。", en: "In an emergency, please contact us here." },
            { ja: "見学ご{希望|きぼう}の方は、この{書類|しょるい}にご{記入|きにゅう}{願|ねが}います。", en: "Those who wish to take the tour, please fill in this form." },
          ],
          deepDive:
            "**お／ご〜願う** is a formal request: the *listener* does the action, and the speaker humbly asks for it. Structurally it is just お＋verb stem / ご＋Sino-Japanese noun, followed by 願う *to request*. Notice there is no を and no お on 願う: ご確認願います (≈ ご確認をお願いします).\n\n" +
            "Common shapes:\n" +
            "- **〜願います** — firm and official; typical of signs, announcements and instructions: ご遠慮願います (*please refrain* — a polite prohibition), ご注意願います, ご記入願います.\n" +
            "- **〜願えますか / 願えますでしょうか** — potential 願える + question, *could I ask you to…?* Softer, used face-to-face or in email (お話し願えますか, お待ち願えますか).\n" +
            "- **〜願いたい（のですが）** — *I would like to ask you to…*: ご連絡願いたいのですが….\n\n" +
            "Choosing お or ご: native verb stems take お (お待ち, お話し, お集まり); Sino-Japanese nouns take ご (ご確認, ご連絡, ご記入, ご遠慮, ご用意).\n\n" +
            "Nuance and pitfalls:\n" +
            "- 〜願います can sound slightly commanding to a superior, since it's the language of notices. In an email to a client, ご確認いただけますでしょうか or ご確認願えますでしょうか is safer.\n" +
            "- ✗ご確認願ってください (double request). ✗お確認 (wrong prefix).\n" +
            "- Contrast with **#75 お／ご〜申し上げる**: 申し上げる is *my* action done for you (ご説明申し上げます); 願う asks for *your* action (ご説明願えますか = could you explain?). Getting this direction right is what the test checks.\n\n" +
            "JLPT tip: when a notice-style sentence ends in ご遠慮（　）/ ご注意（　）, the answer is almost always 願います.",
          index: ["おV願う", "ごN願う"],
          practice: [
            {
              type: "match",
              prompt: { ja: "", en: "Match each beginning (1–4) with the correct ending (a–d)." },
              left: [
                "レストラン、ホールなどでの",
                "会議の{日時|にちじ}を",
                "安全にご使用いただくために、",
                "会場は{無料|むりょう}でご利用{可能|かのう}ですが、",
              ],
              right: [
                "お食事はついておりませんので、{各自|かくじ}でご用意{願|ねが}います。",
                "スリッパのご使用はご{遠慮|えんりょ}{願|ねが}います。",
                "{下記|かき}の点にご注意{願|ねが}います。",
                "ご{連絡|れんらく}{願|ねが}いたいのですが…。",
              ],
              answer: [1, 3, 2, 0],
              en: [
                "Please refrain from wearing slippers in the restaurant, hall and similar areas.",
                "I'd like to ask you to let us know the date and time of the meeting...",
                "To use this product safely, please pay attention to the points below.",
                "The venue can be used free of charge, but meals are not included, so please arrange your own.",
              ],
            },
          ],
        },
        {
          no: 75,
          pattern: "お／ご〜{申|もう}し{上|あ}げる",
          phrase: "**ご**説明**{申|もう}し{上|あ}げ**たい",
          stars: 2,
          marks: ["polite"],
          usage: {
            ja: "「お／ご〜{申|もう}し{上|あ}げる」は、「言う」ではなく、「する」の意味で、自分が相手のために何かをするときに使う。「お／ご〜する」のもっと{丁寧|ていねい}な言い方。",
            en: "\"お／ご〜{申|もう}し{上|あ}げる\" means \"do,\" not \"say.\" Use it when you do something for someone. It is more polite speech than \"お／ご〜する\".",
          },
          forms: ["お[V-~~ます~~] + {申|もう}し{上|あ}げる", "ご[N] + {申|もう}し{上|あ}げる"],
          formNotes: [
            { ja: "＊「{喜|よろこ}ぶ・{祈|いの}る・答える・案内・{相談|そうだん}・{紹介|しょうかい}」などの言葉と一緒に使われる。", en: "* It is used together with words such as 喜ぶ (be glad), 祈る (pray, wish), 答える (answer), 案内 (guidance), 相談 (consultation) and 紹介 (introduction)." },
          ],
          examples: [
            { ja: "{新|しん}{校舎|こうしゃ}{建設|けんせつ}のため、ご{寄付|きふ}をお願い{申|もう}し{上|あ}げます。", en: "We respectfully ask for your donations for the construction of the new school building." },
            { ja: "ただ今より今回のプロジェクトについて、{私|わたくし}のほうからお話し{申|もう}し{上|あ}げます。", en: "I will now speak to you about this project." },
            { ja: "{被害|ひがい}に{遭|あ}われた方に心からお{見舞|みま}い{申|もう}し{上|あ}げます。", en: "We offer our heartfelt sympathy to those who have suffered damage." },
            { ja: "ただ今ご{報告|ほうこく}{申|もう}し{上|あ}げた{件|けん}について、ご質問のある方はいらっしゃいますでしょうか。", en: "Does anyone have questions about the matter I have just reported?" },
          ],
          deepDive:
            "**お／ご〜申し上げる** is the top rung of the humble ladder for *doing something for someone*:\n" +
            "- 説明する → ご説明する → ご説明いたします → **ご説明申し上げます**\n\n" +
            "Although 申し上げる on its own is the humble verb for 言う (先生に申し上げる), inside this pattern it is an auxiliary meaning *do (humbly, for you)* — which is exactly what the book stresses: 「言う」ではなく「する」の意味. So お待ち申し上げております = *we are (humbly) waiting for you*, nothing to do with speaking.\n\n" +
            "Who is raised / lowered: the subject is always the speaker or the speaker's side, and the action must be directed at, or benefit, the respected person. That's why you can't say ✗お食べ申し上げる or ✗お歩き申し上げる — eating or walking doesn't affect the listener.\n\n" +
            "Where you meet it: speeches, ceremonies, announcements and formal letters. Set phrases worth memorizing:\n" +
            "- 心よりお喜び申し上げます / お祝い申し上げます\n" +
            "- 深くおわび申し上げます\n" +
            "- ご健康とご活躍をお祈り申し上げます\n" +
            "- お見舞い申し上げます\n" +
            "- ご案内申し上げます / ご報告申し上げます / ご連絡申し上げます\n\n" +
            "Pitfalls:\n" +
            "- Never for the other person's action: ✗(to a client) お客様がご説明申し上げます, ✗ご説明申し上げてください.\n" +
            "- Contrast **#74 お／ご〜願う**: 願う asks *you* to act; 申し上げる is *me* acting for you. ご連絡願います (please contact us) vs ご連絡申し上げます (we will contact you).\n" +
            "- Don't confuse it with plain 申す (humble 言う toward outsiders: 佐藤と申します).\n\n" +
            "JLPT tip: in a letter/speech context, if the blank follows お祈り / お喜び / おわび / お願い, the answer is often 申し上げます.",
          index: ["おV申し上げる", "ごN申し上げる"],
          practice: [
            {
              type: "match",
              prompt: { ja: "", en: "Match each beginning (1–4) with the correct ending (a–d)." },
              left: [
                "ご{迷惑|めいわく}をおかけいたしましたことを",
                "お{問|と}い{合|あ}わせの{件|けん}については、",
                "皆様のご{健康|けんこう}とご{活躍|かつやく}を",
                "またのご来店を心より",
              ],
              right: [
                "お待ち{申|もう}し{上|あ}げております。",
                "深くおわび{申|もう}し{上|あ}げます。",
                "今日中にご{連絡|れんらく}{申|もう}し{上|あ}げます。",
                "お{祈|いの}り{申|もう}し{上|あ}げます。",
              ],
              answer: [1, 2, 3, 0],
              en: [
                "We deeply apologize for the trouble we have caused.",
                "Regarding your inquiry, we will contact you before the end of today.",
                "We wish you all good health and success.",
                "We sincerely look forward to your next visit to our store.",
              ],
            },
          ],
        },
        {
          no: 76,
          pattern: "〜ばと{思|おも}う",
          phrase: "ご{連絡|れんらく}いただけれ**ばと思います**",
          stars: 2,
          marks: ["polite"],
          usage: {
            ja: "「〜ばと思います」は、「{至急|しきゅう}ご{連絡|れんらく}いただければと思います」のように、相手に「できれば〜してほしい」とちょっと{遠慮|えんりょ}しながら言うときに使われる。「もう少し{価格|かかく}が安ければと思います」のように、自分の{希望|きぼう}を言うときにも使われる。",
            en: "\"〜ばと思います\" is used when you say modestly to someone \"if you can, I'd like you to 〜\" as in \"{至急|しきゅう}ご{連絡|れんらく}いただければと思います\". It is also used when you express a desire of yours as in \"もう少し{価格|かかく}が安ければと思います\".",
          },
          forms: ["[V-ば] + と思う"],
          formNotes: [
            { ja: "＊「[いA~~い~~]ければ／[なA]であれば + と思う」の形もある。", en: "* The forms い-adj. (stem) + ければ／な-adj. + であれば + と思う also exist." },
          ],
          examples: [
            { ja: "こちらの{事情|じじょう}をご{理解|りかい}いただければと思います。", en: "I'd be grateful if you could understand our circumstances." },
            { ja: "この仕事を{山田|やまだ}さんにお願いできればと思っているんですが…。", en: "I was hoping I could ask Mr. Yamada to do this job..." },
            { ja: "皆さんのご意見をお聞かせくださればと思います。", en: "I'd be grateful if you would all let me hear your opinions." },
            { ja: "スピーチコンテストで{入賞|にゅうしょう}できればと思って、がんばっています。", en: "I'm working hard, hoping to win a prize in the speech contest." },
            { ja: "A：こちらのお部屋はいかがでしょうか。\nB：そうですね。もう少し広ければと思うんですが…。", en: "A: How about this room?\nB: Well... I was hoping for something a little bigger." },
          ],
          deepDive:
            "**〜ばと思う** is an ellipsis: the evaluation いい has been dropped from 〜ば**いい**と思う (*I think it would be good if ~*). Leaving the main clause unsaid is exactly what makes it sound modest — the speaker only hints at the wish.\n\n" +
            "Two uses:\n" +
            "- **Request** (with a receiving/giving verb): ご連絡いただければと思います, ご理解いただければと思います, お聞かせくだされば… Here いただければ is the ば-form of the potential いただける, so literally *if I could receive (your contacting me)*. It's softer than ご連絡ください and more indirect than ご連絡いただけますか.\n" +
            "- **Own hope**: 入賞できればと思う, 伝えられればと思う (often with a potential verb), and mild dissatisfaction: もう少し広ければと思うんですが… (*I was hoping for a bit bigger*) — a tactful way to complain or negotiate.\n\n" +
            "Variations by politeness: 〜ばと思います → 〜ばと思っております → **〜ばと存じます** (most humble, very common in business email). Trailing off with 〜ばと思うのですが… softens further. Written equivalents: 〜ば幸いです.\n\n" +
            "Pitfalls:\n" +
            "- Use the ば-form correctly: ✓いただければ ✗いただくばと思う.\n" +
            "- Adjectives: 安ければ, 静かであれば (the forms given in the book's ＊ note).\n" +
            "- 〜たらと思う exists too (来てくれたらと思う) but is more conversational.\n\n" +
            "JLPT tip: if the blank is followed by と思います／と存じます and the options include いただけて / いただければ / さしあげれば, pick the ば-form of the *receiving* verb (いただければ).",
          index: ["Vばと思う"],
          practice: [
            {
              type: "match",
              prompt: { ja: "", en: "Match each beginning (1–4) with the correct ending (a–d)." },
              left: [
                "この作品を通して、",
                "{当社|とうしゃ}の{新製品|しんせいひん}について",
                "私の{新曲|しんきょく}を",
                "近いうちにこちらへ",
              ],
              right: [
                "お{越|こ}しいただければと思います。",
                "{平和|へいわ}へのメッセージを伝えられればと思います。",
                "お時間のあるときにご説明させていただければと思います。",
                "たくさんの方にお聞きいただければと思います。",
              ],
              answer: [1, 2, 3, 0],
              en: [
                "Through this work, I hope I can convey a message of peace.",
                "I would like to explain our company's new product to you when you have time.",
                "I hope many people will listen to my new song.",
                "I would be glad if you could come here sometime soon.",
              ],
            },
          ],
        },
        {
          no: 77,
          pattern: "〜につきまして／〜にとりまして／〜におきまして／〜としまして／〜といたしまして",
          phrase: "{日程|にってい}**につきまして**は",
          stars: 1,
          marks: [],
          usage: {
            ja: "「〜について・〜にとって・〜において・〜として・〜に{関|かん}して」は、{丁寧|ていねい}に話したいときは「〜まして」の形を使う。",
            en: "Use the \"〜まして\" form when you want to speak politely using \"〜について・〜にとって・〜において・〜として・〜{関|かん}して\".",
          },
          forms: [],
          formNotes: [
            { ja: "＊「〜として」は、「〜としまして」のほか「〜といたしまして」も使われる。", en: "* For 〜として, besides 〜としまして, 〜といたしまして is also used." },
          ],
          examples: [
            { ja: "{発売|はつばい}の{時期|じき}につきましては、{現在|げんざい}{検討中|けんとうちゅう}でございます。", en: "As for the release date, it is currently under consideration." },
            { ja: "今回のプロジェクトは{私|わたくし}にとりましても、{貴重|きちょう}な{経験|けいけん}になると思います。", en: "I think this project will be a valuable experience for me as well." },
            { ja: "{本日|ほんじつ}1時より{中央|ちゅうおう}{広場|ひろば}におきまして、{抽選会|ちゅうせんかい}を{行|おこな}います。", en: "A prize drawing will be held in the Central Plaza from 1 o'clock today." },
            { ja: "わが社といたしましては、今回の{契約|けいやく}はぜひ進めたいと考えております。", en: "As a company, we very much want to go ahead with this contract." },
          ],
          notes: [
            {
              ja: "{丁寧|ていねい}に話したいときには、次のような{丁寧形|ていねいけい}を使った言い方もよく使われる。",
              en: "When one wants to speak politely, one often speaks using the following kinds of polite forms.",
              examples: [
                { ja: "こちらはアンケート結果をまとめました資料でございます。", en: "This is a document summarizing the results of the questionnaire." },
                { ja: "ご質問などがありましたら、いつでもお{問|と}い{合|あ}わせください。", en: "If you have any questions, please feel free to contact us at any time." },
                { ja: "1日も早くお元気になられますよう、お{祈|いの}りしております。", en: "I'm praying that you get well as soon as possible." },
                { ja: "こちらの{商品|しょうひん}は{品質|ひんしつ}は最高で、お{値段|ねだん}も{手|て}ごろですし、きっとご{満足|まんぞく}いただけると思います。", en: "This product is of the highest quality and reasonably priced, so I'm sure you will be satisfied." },
              ],
            },
          ],
          deepDive:
            "Many compound particles are built on a verb in て-form: について (つく), にとって (とる), において (おく), として (する), に関して (関する). In very polite speech, that hidden verb is simply put into its **ます-stem + まして** form — the same way 〜て becomes 〜まして in formal speech (遅れまして申し訳ございません).\n\n" +
            "- について → **につきまして(は)**: 発売の時期につきましては… *regarding the release date*.\n" +
            "- にとって → **にとりまして**: 私にとりましても… *for me too*.\n" +
            "- において → **におきまして**: 中央広場におきまして… *in the Central Plaza* (announcements, ceremonies).\n" +
            "- として → **としまして / といたしまして**: わが社といたしましては… *as a company, we…*.\n" +
            "- に関して → **に関しまして**.\n" +
            "The same process applies to other て-based expressions: に対しまして, によりまして.\n\n" +
            "Nuance: といたしまして contains humble いたす, so it is best used for yourself or your own organization (わが社といたしましては). For the other party, plain としましては is safer.\n\n" +
            "The clip note extends the idea: in careful business speech, polite forms appear **even inside subordinate clauses** — まとめました資料, ありましたら, なられますよう, 手ごろですし. In ordinary Japanese those slots take plain forms (まとめた資料, あったら), so hearing ます inside a clause is a strong register signal.\n\n" +
            "Pitfalls: don't overuse まして forms in casual conversation — it sounds like a speech. And it doesn't change the meaning: につきまして still means *about*.\n\n" +
            "JLPT tip: if the blank sits after a topic noun and the options are につきましては / にとりましては / におきましては, decide by the underlying particle (about / for / at). 私にとりましては = *for me* — as in the Check.",
          index: ["〜につきまして", "〜にとりまして", "〜におきまして", "〜としまして", "〜といたしまして"],
        },
      ],
      check: {
        type: "passage",
        labels: "abc",
        prompt: { ja: "", en: "Choose the correct option (a or b) for each blank." },
        text: [
          "新入社員の{佐藤|さとう}と[1]ます。このたび、{第|だい}2{営業部|えいぎょうぶ}に{配属|はいぞく}されることに[2]。この{場|ば}をお借りして、{一言|ひとこと}、ごあいさつ[3]。",
          "{私|わたくし}[4]はなにぶん初めてのことばかりで、ご{迷惑|めいわく}をおかけすることもあるかと[5]が、皆様にご{指導|しどう}[6]、1日も早く皆様のお役に立てるよう、{努力|どりょく}して[7]。",
          "どうぞよろしくお願い[8]ます。",
        ],
        en: [
          "I'm Sato, a new employee. I have been assigned to Sales Department No. 2. I'd like to take this opportunity to say a few words of greeting.",
          "Everything is new to me, so I may cause you some trouble, but I will work hard, with your guidance, so that I can be useful to you all as soon as possible.",
          "I look forward to working with you.",
        ],
        blanks: [
          { options: ["申し伝え", "申し"], answer: 1, why: { en: "Giving your own name: 〜と申します (humble 言う). 申し伝える means to pass on a message." } },
          { options: ["いたしました", "なりました"], answer: 1, why: { en: "Being assigned is not the speaker's own decision → 〜ことになりました." } },
          { options: ["申し上げます", "願います"], answer: 0, why: { en: "The speaker gives the greeting → ごあいさつ申し上げます (#75). 願います would ask the listeners to do it." } },
          { options: ["につきまして", "にとりまして"], answer: 1, why: { en: "*For me* → にとって → にとりまして (#77)." } },
          { options: ["{存|ぞん}じます", "{存|ぞん}じ{上|あ}げます"], answer: 0, why: { en: "〜かと存じます = humble 〜かと思います. 存じ上げる is used for knowing a person." } },
          { options: ["いただいて", "うけたまわって"], answer: 0, why: { en: "The speaker receives guidance from everyone → ご指導いただいて." } },
          { options: ["まいります", "おります"], answer: 0, why: { en: "努力してまいります = humble 努力していきます (will keep working hard from now on)." } },
          { options: ["申し上げ", "申し伝え"], answer: 0, why: { en: "Fixed phrase: よろしくお願い申し上げます." } },
        ],
      },
    },
  ],
  review: [
    {
      title: { ja: "問題1 〈{文法形式|ぶんぽうけいしき}の{判断|はんだん}〉", en: "Question 1: Grammar form" },
      ex: {
        type: "choice",
        labels: "123",
        prompt: { ja: "次の文の（　）に入れるのに最もよいものを1・2・3・4から一つ選びなさい。", en: "Choose the best option (1–4) to fill the ( )." },
        items: [
          { q: "{特別展|とくべつてん}を（　）皆様は{入館|にゅうかん}前に入口の注意{事項|じこう}をお読みください。", options: ["ご{覧|らん}になる", "ご{覧|らん}に{入|い}れる", "{拝見|はいけん}する", "{拝見|はいけん}なさる"], answer: 0, en: "Those who will be viewing the special exhibition, please read the notes at the entrance before entering.", why: { en: "The visitors look → honorific ご覧になる. ご覧に入れる is humble 見せる; 拝見する is humble 見る (wrong direction); 拝見なさる mixes humble and honorific." } },
          { q: "ご{注文|ちゅうもん}を（　）。ご利用ありがとうございます。", options: ["いたしました", "うけたまわりました", "なさいました", "されました"], answer: 1, en: "We have received your order. Thank you for using our service.", why: { en: "The shop receives the order → humble 承る (うけたまわる)." } },
          { q: "先生から{貴重|きちょう}な{資料|しりょう}を（　）ことは、私の研究の大きな助けになりました。本当にありがとうございました。", options: ["{拝見|はいけん}できました", "{拝借|はいしゃく}できました", "お貸しになりました", "お見えになりました"], answer: 1, en: "Being able to borrow valuable materials from you was a great help to my research. Thank you very much.", why: { en: "先生から〜を借りる → humble 拝借する." } },
          { q: "先生は{新内閣|しんないかく}についてどう（　）か。", options: ["{存|ぞん}じます", "おわかりです", "お考えです", "{存|ぞん}じ{上|あ}げます"], answer: 2, en: "What do you think about the new cabinet, professor?", why: { en: "どう + 思う/考える of a superior → honorific お考えです. 存じる forms are humble." } },
          { q: "A：{山本|やまもと}先生、今度の日曜日はお{宅|たく}に（　）か。\nB：あいにく日曜日はちょっと…。", options: ["おこしになります", "おいでになります", "お見えになります", "おります"], answer: 1, en: "A: Professor Yamamoto, will you be at home this Sunday?\nB: Unfortunately, Sunday is a bit...", why: { en: "お宅に（いる）→ honorific おいでになる, which also covers いる. お越しになる / お見えになる are honorific for coming (来る), not for being somewhere; おります is humble, so it can't be used for the teacher." } },
          { q: "こちらの{商品|しょうひん}はセール{品|ひん}でございますので、{交換|こうかん}はご{遠慮|えんりょ}（　）。", options: ["願います", "{存|ぞん}じます", "いたしません", "うけたまわりません"], answer: 0, en: "This item is a sale item, so we ask you to refrain from requesting an exchange.", why: { en: "ご遠慮願います = please refrain (#74)." } },
          { q: "お忙しいところ{恐縮|きょうしゅく}ですが、{貴社|きしゃ}{主催|しゅさい}のツアーについて、{詳細|しょうさい}を教えて（　）と{存|ぞん}じます。どうぞよろしくお願いします。", options: ["さしあげて", "さしあげれば", "いただけて", "いただければ"], answer: 3, en: "I'm sorry to trouble you when you're busy, but I would be grateful if you could tell me the details of the tour your company is organizing.", why: { en: "〜ばと存じます (#76) with the receiving verb: 教えていただければと存じます." } },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Question 2: Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "次の文の＿★＿に入る最もよいものを1・2・3・4から一つ選びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "お客様が", after: "ください。", pieces: ["2階の", "お見えになったら", "ご案内して", "{応接室|おうせつしつ}に"], order: [1, 0, 3, 2], star: 2, en: "When the customer arrives, please show them to the reception room on the second floor." },
          { before: "この{機会|きかい}にぜひ", after: "申し上げます。", pieces: ["ご案内", "お{試|ため}し", "{新商品|しんしょうひん}を", "くださいますよう"], order: [2, 1, 3, 0], star: 2, en: "We invite you to take this opportunity to try our new products." },
          { before: "{商品|しょうひん}が", after: "と思います。", pieces: ["{入荷|にゅうか}するまで", "いただければ", "お待ち", "しばらく"], order: [0, 3, 2, 1], star: 2, en: "I'd be grateful if you could wait a while until the product comes in." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Question 3: Text grammar" },
      ex: {
        type: "passage",
        labels: "123",
        prompt: { ja: "次の文章を読んで、文章全体の内容を考えて、[1]から[4]の中に入る最もよいものを、1・2・3・4から一つ選びなさい。", en: "Read the passage, consider its overall content, and choose the best option (1–4) for each of blanks [1]–[4]." },
        text: [
          "お買い上げ{誠|まこと}にありがとうございます。お届け[1]{商品|しょうひん}の{品質|ひんしつ}{管理|かんり}には{万全|ばんぜん}を{期|き}して[2]が、{万一|まんいち}{不良品|ふりょうひん}などが[3]、お{手数|てすう}ですが、{当社|とうしゃ}までご{連絡|れんらく}くださいますようお願い[4]。",
        ],
        en: [
          "Thank you very much for your purchase. We take every care over the quality control of the products we deliver, but should there be any chance be a defective item or the like, we apologize for the inconvenience and ask that you contact our company.",
        ],
        blanks: [
          { options: ["なさいました", "いたしました", "ございました", "まいりました"], answer: 1, why: { en: "The company delivers (届ける) → humble お届けいたしました." } },
          { options: ["おります", "いたします", "{存|ぞん}じます", "申し上げます"], answer: 0, why: { en: "万全を期しております = humble 期しています (ongoing state)." } },
          { options: ["{存|ぞん}じましたら", "ございましたら", "ご{覧|らん}に{入|い}れましたら", "いたしましたら"], answer: 1, why: { en: "不良品などがありましたら → polite ございましたら (the clip note of #77)." } },
          { options: ["ございます", "おります", "まいります", "申し上げます"], answer: 3, why: { en: "Fixed phrase: 〜くださいますようお願い申し上げます (#75)." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 1", en: "Question 4: Listening (1) — overall gist" },
      ex: {
        type: "listening",
        mode: "gist",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。この{問題|もんだい}は、{全体|ぜんたい}としてどんな{内容|ないよう}かを{聞|き}く{問題|もんだい}です。{話|はなし}の{前|まえ}に{質問|しつもん}はありません。まず{話|はなし}を{聞|き}いてください。それから、{質問|しつもん}と{選択肢|せんたくし}を{聞|き}いて、1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed on the question sheet for this question. This question asks about the overall content. There is no question before the talk. First listen to the talk. Then listen to the question and the choices, and choose the best one from 1–4." },
        items: [
          {
            question: "男の人が電話で一番したかったことは何ですか。",
          questionEn: "What did the man most want to do on the phone?",
          script: [
              { sp: "", v: "f", ja: "男の人と女の人が電話で話しています。" },
              { sp: "M", v: "m", ja: "もしもし、{高橋|たかはし}様のお{宅|たく}でしょうか。" },
              { sp: "F", v: "f", ja: "はい。" },
              { sp: "M", v: "m", ja: "私、{小林|こばやし}と申します。" },
              { sp: "F", v: "f", ja: "ああ、{小林|こばやし}さん。先日はわざわざお{越|こ}しいただいて、ありがとうございました。" },
              { sp: "M", v: "m", ja: "いえ。せっかくご{招待|しょうたい}いただきましたのに、とんだことをいたしまして、本当に{申|もう}し{訳|わけ}ございませんでした。" },
              { sp: "F", v: "f", ja: "いいえ、どうぞお気になさらず…。" },
              { sp: "M", v: "m", ja: "いえ、あのー、たいへん失礼ですが、あの{花瓶|かびん}と同じ物があれば買い{求|もと}めてお返しさせていただきたいと{存|ぞん}じますので、ぜひお店を教えていただきたいと思いまして…。" },
            ],
            en: [
              "A man and a woman are talking on the phone.",
              "Hello, is this the Takahashi residence?",
              "Yes.",
              "My name is Kobayashi.",
              "Oh, Mr. Kobayashi. Thank you for taking the trouble to come the other day.",
              "Not at all. You were kind enough to invite me, and then I did such a terrible thing. I'm truly sorry.",
              "No, please don't worry about it...",
              "No, um, this is very rude of me, but if I can find the same vase, I would like to buy it and give it back to you, so I'd really like you to tell me the name of the shop...",
              "To thank her for inviting him the other day",
              "To tell her that he broke the vase",
              "To return a vase he bought",
              "To ask which shop the vase was bought at",
            ],
            options: [
              "先日{招待|しょうたい}してもらったお礼を言うこと",
              "{花瓶|かびん}を{割|わ}ったことを伝えること",
              "買った{花瓶|かびん}を返すこと",
              "{花瓶|かびん}を買った店を聞くこと",
            ],
            answer: 3,
            why: { en: "He apologizes for breaking the vase (とんだこと), but his real purpose is the last line: ぜひお店を教えていただきたい — he wants to find out where the vase was bought so he can replace it." },
          },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉 2", en: "Question 4: Listening (2) — quick response" },
      ex: {
        type: "listening",
        mode: "response",
        prompt: { ja: "この{問題|もんだい}では、{問題|もんだい}{用紙|ようし}に{何|なに}も{印刷|いんさつ}されていません。まず、{文|ぶん}を{聞|き}いてください。それから、それに{対|たい}する{返事|へんじ}を{聞|き}いて、1から3の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "Nothing is printed on the question sheet for this question. First listen to the sentence. Then listen to the replies and choose the best one from 1–3." },
        items: [
          {
            script: [{ sp: "M", v: "m", ja: "では、{明日|あす}3時に{当社|とうしゃ}へお{越|こ}しください。" }],
            options: [
              "はい、{明日|あす}3時にお{伺|うかが}いいたします。",
              "はい、{明日|あす}3時にいらっしゃいます。",
              "はい、{明日|あす}3時にお待ちしています。",
            ],
            answer: 0,
            en: ["Then please come to our company at 3 o'clock tomorrow.", "Yes, I will visit you at 3 tomorrow.", "Yes, (someone) will come at 3 tomorrow.", "Yes, I'll be waiting for you at 3 tomorrow."],
            why: { en: "The listener is the one going, so she uses humble お伺いいたします. いらっしゃる is honorific (can't be used for oneself); お待ちしています would mean she is the host." },
          },
          {
            script: [{ sp: "F", v: "f", ja: "部長、トニー{株式会社|かぶしきがいしゃ}の{山本|やまもと}様が{受付|うけつけ}にお見えです。" }],
            options: [
              "トニー{株式会社|かぶしきがいしゃ}の部長は{山本|やまもと}さんじゃないよ。",
              "あ、そう。{受付|うけつけ}に見えるよ。",
              "あ、そう。じゃ、すぐ行くよ。",
            ],
            answer: 2,
            en: ["Sir, Mr. Yamamoto from Tony Corporation has arrived at reception.", "The department head at Tony Corporation isn't Mr. Yamamoto.", "Oh, really? I can see him at reception.", "Oh, really? I'll go right away, then."],
            why: { en: "お見えです = honorific 来ています (#73 ＊1). The 部長 in the sentence is the listener, addressed by title, not part of the visitor's name; 見える here isn't 'can be seen'." },
          },
        ],
      },
    },
  ],
});
