N2.register({
  id: 1,
  genre: { ja: "お{知|し}らせを{読|よ}む", en: "Reading an Announcement" },
  title: { ja: "スタッフ{募集|ぼしゅう}のお{知|し}らせ", en: "A Job Ad" },
  canDo: [
    { ja: "お{知|し}らせなどの{文章|ぶんしょう}が{読|よ}める。", en: "Read announcements, notices and similar texts." },
    { ja: "{求人|きゅうじん}の{条件|じょうけん}が{理解|りかい}できる。", en: "Understand the conditions in a job opening." },
  ],
  parts: [
    {
      label: "",
      sample: {
        kind: "notice",
        heading: "ブックカフェ「こもれび」　アルバイトスタッフ{募集|ぼしゅう}",
        lines: [
          { ja: "{秋|あき}のブックフェア{開催|かいさい}**につき**、{期間|きかん}{限定|げんてい}のアルバイトスタッフを{募集|ぼしゅう}しています。", en: "Because we are holding our autumn book fair, we are looking for part-time staff for a limited period." },
          { ja: "【{仕事|しごと}】カフェでの{接客|せっきゃく}、{書籍|しょせき}の{整理|せいり}・{販売|はんばい}、イベントの{準備|じゅんび}", en: "[Job] Serving customers in the café, arranging and selling books, preparing events" },
          { ja: "【{応募|おうぼ}{資格|しかく}】{学生|がくせい}・{社会人|しゃかいじん}**を{問|と}わず**、{本|ほん}が{好|す}きな{方|かた}{大歓迎|だいかんげい}！　ただし、{平日|へいじつ}の{夕方|ゆうがた}に{週|しゅう}3日{以上|いじょう}{勤務|きんむ}できる{方|かた}**に{限|かぎ}り**ます。", en: "[Qualifications] Students and working adults alike — people who love books are very welcome! However, applicants are limited to those who can work at least three weekday evenings a week." },
          { ja: "【{時給|じきゅう}】1,050{円|えん}〜　※{勤務|きんむ}{時間帯|じかんたい}**に{応|おう}じて**{決|き}めます。", en: "[Hourly wage] From ¥1,050 — decided according to the hours (time slot) you work." },
          { ja: "【{応募|おうぼ}{方法|ほうほう}】ホームページの{応募|おうぼ}フォームからお{申|もう}し{込|こ}みください。お{送|おく}りいただいた{書類|しょるい}は、{選考|せんこう}の{結果|けっか}**にかかわらず**、お{返|かえ}しいたしません。", en: "[How to apply] Please apply through the form on our website. Documents you send us will not be returned, whatever the result of the selection." },
          { ja: "【{面接|めんせつ}】{本店|ほんてん}2{階|かい}の{会議室|かいぎしつ}**において**{行|おこな}います。{日時|にちじ}はメールでご{連絡|れんらく}します。{面接|めんせつ}**の{際|さい}**は、{学生証|がくせいしょう}などの{身分証明書|みぶんしょうめいしょ}をお{持|も}ちください。", en: "[Interview] Held in the meeting room on the 2nd floor of the main store; we will email you the date and time. When you come to the interview, please bring ID such as a student card." },
          { ja: "※{面接|めんせつ}{当日|とうじつ}は、{開始|かいし}{時刻|じこく}の10{分|ぷん}{前|まえ}までに{受付|うけつけ}を{済|す}ませる**こと**。", en: "* On the day of the interview, check in at reception at least 10 minutes before the start time." },
        ],
      },
      points: [
        {
          no: 1,
          pattern: "〜につき",
          phrase: "{開催|かいさい}**につき**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "お{知|し}らせ・{掲示|けいじ}・{貼|は}り{紙|がみ}などで、「〜ので」と{理由|りゆう}を{言|い}うときに{使|つか}う。「{雨天|うてん}につき{中止|ちゅうし}」のような{形|かたち}でよく{見|み}る。",
            en: "Used in notices, signs and announcements to give a reason — “because of / due to ~”. You often see it in set phrases like 雨天につき中止 “cancelled due to rain”.",
          },
          forms: ["[N] + につき"],
          examples: [
            { ja: "{本日|ほんじつ}は{祝日|しゅくじつ}**につき**、{窓口|まどぐち}での{受付|うけつけ}はお{休|やす}みです。", en: "Because today is a national holiday, the service counter is closed." },
            { ja: "{工事中|こうじちゅう}**につき**、{正面|しょうめん}{入口|いりぐち}はご{利用|りよう}いただけません。", en: "Due to construction, the front entrance cannot be used." },
            { ja: "{数量|すうりょう}{限定|げんてい}{商品|しょうひん}**につき**、お{一人様|ひとりさま}2{点|てん}までとさせていただきます。", en: "As this is a limited-quantity item, purchases are limited to two per customer." },
            { ja: "{台風|たいふう}{接近|せっきん}**につき**、{本日|ほんじつ}の{営業|えいぎょう}は{午後|ごご}3{時|じ}までといたします。", en: "Due to the approaching typhoon, today we will be open only until 3 p.m." },
          ],
          deepDive:
            "**〜につき** is a stiff, written way of saying *because of ~*. It belongs to the world of signs, posters, notices on shop doors and official letters — you would sound odd saying 雨につき、行かない to a friend (just say 雨だから).\n\n" +
            "Structure: it attaches directly to a noun, very often a Sino-Japanese noun that describes a state or event: 工事中・清掃中・準備中・祝日・雨天・改装・品切れ. The second half is typically a notice, request or apology: …休業します / …ご注意ください / …ご遠慮ください.\n\n" +
            "Don't confuse it with the N3 **〜につき = “per”** (1人につき500円 “¥500 per person”, 1回につき “per time”). Context makes it clear: a number/unit before につき → *per*; a situation before につき → *because of*.\n\n" +
            "- Similar reason words: 〜ため（に） (neutral, written), 〜により (formal, cause), 〜ので (neutral, spoken & written).\n" +
            "- JLPT tip: if the sentence looks like a sign or notice and the blank follows a situation noun (清掃中, 改装工事中), につき is almost always the answer.",
          see: [],
          index: ["Nにつき"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{館内|かんない}{清掃|せいそう}**につき**、",
                "{新年|しんねん}セール{期間中|きかんちゅう}**につき**、",
                "{冷凍|れいとう}{食品|しょくひん}**につき**、",
                "{駐車場|ちゅうしゃじょう}{工事中|こうじちゅう}**につき**、",
              ],
              right: [
                "{到着|とうちゃく}{後|ご}すぐに{冷凍庫|れいとうこ}に{入|い}れてください。",
                "{全品|ぜんぴん}20%{引|び}きです。",
                "お{車|くるま}でのご{来店|らいてん}はご{遠慮|えんりょ}ください。",
                "{本日|ほんじつ}は{午後|ごご}から{閉館|へいかん}いたします。",
              ],
              answer: [3, 1, 0, 2],
              en: [
                "Because the building is being cleaned, we will close from the afternoon today.",
                "Because it's the New Year sale period, everything is 20% off.",
                "Because this is frozen food, please put it in the freezer as soon as it arrives.",
                "Because the parking lot is under construction, please refrain from coming by car.",
              ],
            },
          ],
        },
        {
          no: 2,
          pattern: "〜を{問|と}わず",
          phrase: "{学生|がくせい}・{社会人|しゃかいじん}**を{問|と}わず**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "お{知|し}らせや{紹介|しょうかい}{文|ぶん}などで、「〜に{関係|かんけい}なく、だれでも・いつでも・どこでも」と{言|い}いたいときに{使|つか}う。",
            en: "Used in announcements and introductions to say “regardless of ~ / no matter ~” — i.e. anyone, any time, anywhere.",
          },
          forms: ["[N] + を{問|と}わず"],
          formNotes: [
            {
              ja: "「{昼夜|ちゅうや}・{国|くに}の{内外|ないがい}・{男女|だんじょ}・〜の{有無|うむ}」などの{言葉|ことば}といっしょに{使|つか}われる。",
              en: "It is used with words such as 昼夜 (day and night), 国の内外 (at home and abroad), 男女 (men and women) and 〜の有無 (whether or not there is ~).",
            },
          ],
          examples: [
            { ja: "{最近|さいきん}は{男女|だんじょ}**を{問|と}わず**、{育児|いくじ}{休暇|きゅうか}を{取|と}る{人|ひと}が{増|ふ}えている。", en: "These days more and more people, men and women alike, are taking childcare leave." },
            { ja: "{駅|えき}の{周辺|しゅうへん}は{昼夜|ちゅうや}**を{問|と}わず**{人通|ひとどお}りが{多|おお}い。", en: "The area around the station is busy with people day and night." },
            { ja: "この{写真|しゃしん}コンテストには、プロ・アマ**を{問|と}わず**、だれでも{作品|さくひん}を{応募|おうぼ}できる。", en: "Anyone, professional or amateur, can submit work to this photo contest." },
            { ja: "このゲームは{年齢|ねんれい}**を{問|と}わず**、{家族|かぞく}みんなで{楽|たの}しめる。", en: "The whole family can enjoy this game, whatever their age." },
          ],
          notes: [
            {
              ja: "{動詞|どうし}「{問|と}う」の{否定形|ひていけい}として、{文|ぶん}の{最後|さいご}で「〜は{問|と}いません」と{使|つか}うこともある。",
              en: "Because it comes from the verb 問う (to ask about / to make an issue of), you can also end a sentence with 〜は問いません “~ is not a condition / doesn't matter”.",
              examples: [
                { ja: "{参加|さんか}{資格|しかく}：{国籍|こくせき}は{問|と}いません。{日本語|にほんご}で{簡単|かんたん}な{会話|かいわ}ができれば{大丈夫|だいじょうぶ}です。", en: "Eligibility: nationality doesn't matter. It's fine as long as you can hold a simple conversation in Japanese." },
              ],
            },
          ],
          deepDive:
            "**〜を問わず** literally means *without asking about ~* (問う = to question, to make something an issue). So 年齢を問わず = *we don't ask about age* → *regardless of age*.\n\n" +
            "The noun before it must describe something that **varies** — a category with several possible values (年齢, 国籍, 季節, 天候) or a pair of opposites (男女, 昼夜, 内外, 有無, 経験の有無, プロ・アマ). You can't say ✗田中さんを問わず, because “Tanaka” doesn't have values to choose among.\n\n" +
            "Compare the close relatives:\n" +
            "- **〜にかかわらず** (#5): also *regardless of*; can follow opposite pairs of verbs/adjectives too (行く行かないにかかわらず). を問わず only takes nouns.\n" +
            "- **〜に限らず** (#72): *not only ~ (but also others)* — widens the range: 若者に限らず、お年寄りも.\n" +
            "- **〜もかまわず** (#127): *without caring about ~* — describes someone's attitude, often critical.\n\n" +
            "JLPT tip: を問わず appears constantly in 求人 (job ads), 募集 (calls for participants) and shop information — exactly the texts in this chapter.",
          see: [5, 72, 127],
          index: ["Nを問わず", "〜は問いません"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "この{講演会|こうえんかい}は{学生|がくせい}・{社会人|しゃかいじん}（　）、{無料|むりょう}で{聴講|ちょうこう}できる。", options: ["に対して", "によって", "を問わず"], answer: 2, en: "Anyone, student or working adult, can attend this lecture for free." },
                { q: "この{病院|びょういん}の{救急|きゅうきゅう}{外来|がいらい}は、{平日|へいじつ}（　）{土日|どにち}も{診察|しんさつ}している。", options: ["はもちろん", "によって", "を問わず"], answer: 0, en: "This hospital's emergency department sees patients not only on weekdays but on weekends too.", why: { en: "「平日を問わず土日も」 is ungrammatical — を問わず needs a noun covering a range or pair (曜日を問わず). With 平日 … 土日も, use はもちろん." } },
                { q: "{天候|てんこう}（　）、{試合|しあい}は{予定|よてい}{通|どお}り{行|おこな}います。", options: ["について", "を問わず", "というと"], answer: 1, en: "Regardless of the weather, the match will be held as scheduled." },
                { q: "このスポーツは（　）を{問|と}わず、だれでも{楽|たの}しめる。", options: ["男性", "男女", "女性"], answer: 1, en: "Anyone, male or female, can enjoy this sport.", why: { en: "を問わず needs a word covering a range or a pair: 男女 (men and women). 男性 or 女性 alone has no contrast." } },
              ],
            },
          ],
        },
        {
          no: 3,
          pattern: "〜に{限|かぎ}り／〜に{限|かぎ}る",
          phrase: "{勤務|きんむ}できる{方|かた}**に{限|かぎ}り**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜だけ」という{意味|いみ}で、お{知|し}らせや{広告|こうこく}でよく{使|つか}われる。{対象|たいしょう}・{期間|きかん}・{条件|じょうけん}を{限定|げんてい}するときの{言|い}い{方|かた}。",
            en: "Means “only / limited to ~”. Very common in notices and advertisements to restrict the target, period or condition of something.",
          },
          forms: ["[N] + に{限|かぎ}り", "[N] + に{限|かぎ}る"],
          examples: [
            { ja: "{日曜日|にちようび}の{朝|あさ}9{時|じ}から10{時|じ}**に{限|かぎ}り**、{焼|や}きたてパンが1{個|こ}100{円|えん}です。", en: "On Sundays from 9 to 10 a.m. only, freshly baked bread is ¥100 each." },
            { ja: "{駐車場|ちゅうしゃじょう}のご{利用|りよう}は、{当館|とうかん}にお{泊|と}まりのお{客様|きゃくさま}**に{限|かぎ}ります**。", en: "Use of the parking lot is limited to guests staying at this hotel." },
            { ja: "{先着|せんちゃく}50{名様|めいさま}**に{限|かぎ}り**、{記念品|きねんひん}を{差|さ}し{上|あ}げます。", en: "A commemorative gift will be given to the first 50 people only." },
            { ja: "{雨|あめ}の{日|ひ}**に{限|かぎ}り**、ポイントが2{倍|ばい}になります。", en: "On rainy days only, you get double points." },
          ],
          notes: [
            {
              ja: "「[N] + に{限|かぎ}って〜ない」の{形|かたち}で、「あの{人|ひと}（ところ）だけは、そんな{悪|わる}いことをするはずがない」と{強|つよ}く{否定|ひてい}したいときに{使|つか}う。{信|しん}じている{人|ひと}について、{予想|よそう}していなかった{悪|わる}いことやうわさを{聞|き}いたときの{言|い}い{方|かた}。",
              en: "In the form “N + に限って〜ない”, it expresses a strong denial: “*that* person (place) of all people would never do such a bad thing.” It's used when you hear an unexpected bad rumor about someone you trust.",
              examples: [
                { ja: "まじめな{山田|やまだ}さん**に{限|かぎ}って**、{約束|やくそく}を{破|やぶ}ることはない。", en: "Yamada is so serious — he of all people would never break a promise." },
                { ja: "うちの{犬|いぬ}**に{限|かぎ}って**、{人|ひと}をかむなんてありえません。", en: "Our dog, of all dogs, would never bite anyone." },
                { ja: "あの{老舗|しにせ}**に{限|かぎ}って**、{古|ふる}い{材料|ざいりょう}を{使|つか}うわけがない。", en: "That long-established shop of all places would never use stale ingredients." },
              ],
            },
          ],
          deepDive:
            "**〜に限り / 〜に限る** come from 限る *to limit*. The noun before them is the *only* target: 本日に限り = *today only*; 女性に限る = *women only*.\n\n" +
            "- **に限り** is used mid-sentence (like a conjunction): 本日に限り、半額です.\n" +
            "- **に限る / に限ります** ends the sentence: 参加は会員に限ります.\n" +
            "- In speech you'd usually say だけ: 今日だけ半額. に限り sounds official, like an advertisement.\n\n" +
            "Be careful — the 限る family has several N2 uses in this book:\n" +
            "- **Nに限って〜ない** (note above): *X of all people would never…* (strong denial, based on trust).\n" +
            "- **Nに限って** (#86): *of all times, just when ~ (something bad happens)*: 急いでいる日に限って電車が遅れる.\n" +
            "- **Vかぎり** (#23): *as long as ~*.\n" +
            "- **〜に限る** (#104): *~ is the best*: 夏はビールに限る.\n" +
            "- **〜に限らず** (#72): *not only ~*.\n\n" +
            "Common mistake: confusing に限り with にとって (*for, from the viewpoint of*). 子どもにとって大切 = *important for children*; 子どもに限り無料 = *free for children only*.",
          see: [23, 72, 86, 104],
          index: ["Nに限り", "Nに限る", "Nに限って〜ない"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "ご{来店|らいてん}{日|び}が{誕生日|たんじょうび}のお{客様|きゃくさま}（　）、ケーキを1つサービスいたします。", options: ["に限り", "にとって"], answer: 0, en: "Only for customers whose birthday is the day of their visit, we offer one free cake." },
                { q: "お{年寄|としよ}り（　）、{段差|だんさ}のない{道|みち}はとても{助|たす}かる。", options: ["に限り", "にとって"], answer: 1, en: "For elderly people, roads without steps are a great help." },
                { q: "この{割引|わりびき}は、{会員|かいいん}の{方|かた}（　）ご{利用|りよう}いただけます。", options: ["に限り", "につき"], answer: 0, en: "This discount can be used by members only." },
                { q: "{地域|ちいき}（　）、{配達|はいたつ}にかかる{日数|にっすう}が{違|ちが}います。", options: ["に限り", "によって"], answer: 1, en: "The number of days for delivery differs depending on the region." },
                { q: "インターネットでご{予約|よやく}いただいた{方|かた}（　）、{入館料|にゅうかんりょう}が1{割|わり}{引|び}きになります。", options: ["に限り", "によって"], answer: 0, en: "Only for those who book online, admission is 10% off." },
              ],
            },
          ],
        },
        {
          no: 4,
          pattern: "〜に{応|おう}じ（て）",
          phrase: "{勤務|きんむ}{時間帯|じかんたい}**に{応|おう}じて**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「{希望|きぼう}・{変化|へんか}・{地域|ちいき}・{状況|じょうきょう}・{年齢|ねんれい}・{能力|のうりょく}・{経験|けいけん}」などの{条件|じょうけん}に{合|あ}わせて、{何|なに}かを{変|か}える・{決|き}めると{言|い}いたいときに{使|つか}う。",
            en: "Used to say that something is changed or decided *in accordance with / depending on* a condition such as wishes, changes, region, situation, age, ability or experience.",
          },
          forms: ["[N] + に{応|おう}じ", "[N] + に{応|おう}じて", "[N] + に{応|おう}じた + [N]"],
          examples: [
            { ja: "ボーナスは{会社|かいしゃ}の{業績|ぎょうせき}**に{応|おう}じて**{決|き}まる。", en: "Bonuses are decided according to the company's performance." },
            { ja: "このジムでは、{体力|たいりょく}**に{応|おう}じた**トレーニングメニューを{作|つく}ってくれる。", en: "At this gym, they make you a training plan suited to your fitness level." },
            { ja: "お{客様|きゃくさま}のご{要望|ようぼう}**に{応|おう}じ**、{部屋|へや}のタイプをお{選|えら}びいただけます。", en: "You can choose the room type according to your preferences." },
            { ja: "この{店|みせ}では{季節|きせつ}**に{応|おう}じて**、{店内|てんない}の{飾|かざ}りつけを{変|か}えている。", en: "At this shop, they change the interior decorations according to the season." },
          ],
          deepDive:
            "**〜に応じて** means *in response to / in proportion to / in accordance with*. The key idea: **when X changes, Y changes to match it**. 収入に応じて税金が変わる — as income varies, tax varies.\n\n" +
            "- **に応じ** is the written, clause-linking form (like 〜て → 連用形): 能力に応じ、給与を決定します.\n" +
            "- **に応じた + N** modifies a noun: 年齢に応じた運動 *exercise suited to one's age*.\n\n" +
            "How it differs from its neighbors:\n" +
            "- **〜によって** (*depending on*) simply says results differ: 国によって習慣が違う. に応じて adds the idea of *deliberately adjusting to fit*: 相手に応じて話し方を変える. So 国に応じて習慣が違う sounds wrong — nobody adjusts customs to fit the country.\n" +
            "- **〜に合わせて** is very close, but more everyday: 相手のペースに合わせる.\n" +
            "- **〜にこたえて** (#118) = *in response to (a request/expectation)* and implies trying to satisfy it.\n\n" +
            "The verb 応じる alone is also N2 vocabulary: 質問に応じる *to answer questions*, 取材に応じる *to agree to an interview*.",
          see: [118],
          index: ["Nに応じ", "Nに応じて", "Nに応じた"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいものを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{植物|しょくぶつ}は{光|ひかり}の{量|りょう}（　）{葉|は}の{向|む}きを{変|か}える。", options: ["に応じて", "に限って", "について"], answer: 0, en: "Plants change the direction of their leaves according to the amount of light." },
                { q: "この{塾|じゅく}では、{生徒|せいと}のレベル（　）クラスが{分|わ}けられています。", options: ["にとって", "に応じて", "向きに"], answer: 1, en: "At this cram school, classes are divided according to the students' level." },
                { q: "{同|おな}じ{料理|りょうり}でも、{味付|あじつ}けは{家庭|かてい}（　）ずいぶん{違|ちが}う。", options: ["によって", "に応じて", "に対して"], answer: 0, en: "Even for the same dish, the seasoning varies a lot from household to household.", why: { en: "Just stating that things differ → によって. に応じて would imply someone deliberately adjusts to each household." } },
                { q: "このアプリでは、{歩|ある}いた{距離|きょり}（　）、もらえるメダルの{数|かず}が{増|ふ}える。", options: ["に応じて", "に限って", "向きに"], answer: 0, en: "In this app, the number of medals you get increases according to the distance you walk." },
              ],
            },
          ],
        },
        {
          no: 5,
          pattern: "〜にかかわらず",
          phrase: "{結果|けっか}**にかかわらず**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「{天気|てんき}・{好|この}み・{立場|たちば}」や「あるかないか・するかしないか」などの{条件|じょうけん}に{関係|かんけい}なく、…と{言|い}いたいときに{使|つか}う。",
            en: "Used to say “regardless of ~ / whether or not ~” — the outcome doesn't depend on conditions such as weather, preference, position, or whether something is/isn't done.",
          },
          forms: ["[N] + にかかわらず", "[V-る] + [V-ない] + にかかわらず"],
          formNotes: [
            {
              ja: "「{好|す}き{嫌|きら}い」「いい{悪|わる}い」「{善悪|ぜんあく}」など、{形容詞|けいようし}や{名詞|めいし}の{対立|たいりつ}する2{語|ご}を{合|あ}わせた{言葉|ことば}といっしょに{使|つか}われることもある。",
              en: "It is also used with combinations of two opposing adjectives or nouns, such as 好き嫌い (likes and dislikes), いい悪い (good or bad) and 善悪 (right and wrong).",
            },
          ],
          examples: [
            { ja: "この{店|みせ}のコーヒーは、サイズ**にかかわらず**{全部|ぜんぶ}300{円|えん}です。", en: "Coffee at this shop is ¥300 regardless of size." },
            { ja: "{参加|さんか}する**しない****にかかわらず**、{来週|らいしゅう}までに{返事|へんじ}をください。", en: "Whether you'll take part or not, please reply by next week." },
            { ja: "{試合|しあい}の{結果|けっか}の**いかん****にかかわらず**、{参加者|さんかしゃ}{全員|ぜんいん}に{記念品|きねんひん}を{差|さ}し{上|あ}げます。", en: "Whatever the result of the match, every participant will receive a souvenir." },
            { ja: "{父|ちち}は{天候|てんこう}**にかかわらず**、{毎朝|まいあさ}30{分|ぷん}{散歩|さんぽ}をしている。", en: "My father takes a 30-minute walk every morning whatever the weather." },
          ],
          deepDive:
            "**〜にかかわらず** (関わらず, from 関わる *to be related to*) literally means *without being related to ~*, so: *regardless of, irrespective of*.\n\n" +
            "Its most characteristic shape is **[V-る] + [V-ない] + にかかわらず**: 行く行かないにかかわらず, 出席するしないにかかわらず, 好む好まないにかかわらず. The same A-or-not-A idea appears with nouns: 有無, 大小, 多少, 好き嫌い, 晴雨. The phrase **〜のいかんにかかわらず** (*whatever the ~ may be*) is a formal fixed expression.\n\n" +
            "Comparing with **〜を問わず** (#2):\n" +
            "- Both mean *regardless of*, and are often interchangeable with nouns: 年齢を問わず ≈ 年齢にかかわらず.\n" +
            "- Only にかかわらず takes verb/adjective pairs: ✓参加するしないにかかわらず / ✗参加するしないを問わず.\n\n" +
            "The big trap is **にもかかわらず** (#21) — one extra も changes the meaning to *in spite of*. On the test, read the sentence: if the second half contradicts expectations, you need にもかかわらず.",
          see: [2, 21],
          index: ["〜にかかわらず", "VるVないにかかわらず", "〜のいかんにかかわらず"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{経験|けいけん}があるないにかかわらず、",
                "ご{注文|ちゅうもん}{金額|きんがく}にかかわらず、",
                "{参加|さんか}{人数|にんずう}の{多少|たしょう}にかかわらず、",
                "{症状|しょうじょう}の{有無|うむ}にかかわらず、",
              ],
              right: [
                "{年|ねん}に1{回|かい}は{健康|けんこう}{診断|しんだん}を{受|う}けましょう。",
                "イベントは{予定|よてい}{通|どお}り{行|おこな}います。",
                "{研修|けんしゅう}を{受|う}けていただきます。",
                "{送料|そうりょう}は{一律|いちりつ}500{円|えん}です。",
              ],
              answer: [2, 3, 1, 0],
              en: [
                "Whether or not you have experience, you will receive training.",
                "Regardless of the order amount, shipping is a flat ¥500.",
                "Whether many or few people take part, the event will go ahead as planned.",
                "Whether or not you have symptoms, get a health check once a year.",
              ],
            },
          ],
        },
        {
          no: 6,
          pattern: "〜において／〜における",
          phrase: "{会議室|かいぎしつ}**において**",
          stars: 3,
          marks: ["formal"],
          usage: {
            ja: "「{東京|とうきょう}において」「{明治|めいじ}{時代|じだい}においては」「{医学|いがく}における」のように、「（{場所|ばしょ}・{時代|じだい}・{分野|ぶんや}など）で」と{言|い}いたいときに{使|つか}う。お{知|し}らせ・ニュース・{論文|ろんぶん}などで{使|つか}われることが{多|おお}い。",
            en: "A formal “in / at” for a place, time period or field — e.g. 東京において, 明治時代においては, 医学における. Common in announcements, news and academic writing.",
          },
          forms: ["[N] + において", "[N] + における + [N]"],
          examples: [
            { ja: "{新製品|しんせいひん}の{発���会|はっぴょ��かい}は、{本社|ほんしゃ}ビルの{大会議室|だいかいぎしつ}**において**{開催|かいさい}される{予定|よてい}です。", en: "The new product launch is scheduled to be held in the large conference room of the head office building." },
            { ja: "{現代|げんだい}の{社会|しゃかい}**において**、スマートフォンは{欠|か}かせないものになった。", en: "In modern society, smartphones have become indispensable." },
            { ja: "{教育|きょういく}**における**ICTの{活用|かつよう}について{発表|はっぴょう}します。", en: "I will give a presentation on the use of ICT in education." },
            { ja: "{医療|いりょう}の{分野|ぶんや}**においても**、AIの{研究|けんきゅう}が{進|すす}んでいる。", en: "Research into AI is advancing in the medical field as well." },
          ],
          deepDive:
            "**〜において** is the formal counterpart of the particle **で** (location/time/field of an event) and sometimes of **に** (existence in a domain). **〜における + N** is its noun-modifying form, replacing での: 日本における外国人労働者 = 日本での外国人労働者.\n\n" +
            "Three typical uses:\n" +
            "- **Place of an official event**: 式典は本館ホールにおいて行われます. (Very common with 行われる/開催される.)\n" +
            "- **Time/era**: 江戸時代において, 現代において.\n" +
            "- **Field/situation**: 経済において, ビジネスにおいて, 人生における.\n\n" +
            "With は and も: **においては** contrasts (*as for Japan…*), **においても** adds (*in ~ too*).\n\n" +
            "Pitfall: において sounds pompous for trivial actions. Keep で for “ate lunch in the classroom”. On the test, if the sentence is newsy/official and talks about where an event is held, において is right; if it's a casual action, で is right.",
          see: [],
          index: ["Nにおいて", "Nにおける"],
          practice: [
            {
              type: "choice",
              prompt: { ja: "{正|ただ}しいほうを{選|えら}びなさい。", en: "Choose the correct option." },
              items: [
                { q: "{市|し}の{防災|ぼうさい}{訓練|くんれん}が、{中央|ちゅうおう}{公園|こうえん}（　）{実施|じっし}された。", options: ["において", "における"], answer: 0, en: "The city's disaster drill was carried out in Central Park." },
                { q: "{子育|こそだ}て（　）{父親|ちちおや}の{役割|やくわり}が{見直|みなお}されている。", options: ["において", "における"], answer: 1, en: "The role of fathers in child-rearing is being reconsidered.", why: { en: "A noun (役割) follows, so the noun-modifying form における is needed." } },
                { q: "{高齢化|こうれいか}は{地方|ちほう}だけでなく、{都市|とし}（　）{深刻|しんこく}な{問題|もんだい}になっている。", options: ["においては", "においても"], answer: 1, en: "Population ageing has become a serious problem not only in rural areas but in cities too." },
                { q: "{日曜日|にちようび}は{家|いえ}の{近|ちか}くのカフェ（　）のんびり{本|ほん}を{読|よ}んだ。", options: ["で", "において"], answer: 0, en: "On Sunday I relaxed and read a book at a café near my house.", why: { en: "For a small everyday action, use で; において sounds overly formal." } },
              ],
            },
          ],
        },
        {
          no: 7,
          pattern: "〜{際|さい}（に）",
          phrase: "{面接|めんせつ}**の{際|さい}**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "「〜とき」「〜{場合|ばあい}」という{意味|いみ}で、{説明書|せつめいしょ}・{案内|あんない}・お{知|し}らせなどで{使|つか}われる。{後|うし}ろに「〜てください」「{必要|ひつよう}です」「お{願|ねが}いします」などが{来|く}ることが{多|おお}い。",
            en: "A formal “when ~ / on the occasion of ~” (≈ とき, 場合), used in manuals, guides and notices. It's usually followed by instructions such as 〜てください, 必要です, お願いします.",
          },
          forms: ["[V-る] + {際|さい}（に）", "[V-た] + {際|さい}（に）", "[N] の + {際|さい}（に）"],
          examples: [
            { ja: "お{帰|かえ}りの**{際|さい}は**、{忘|わす}れ{物|もの}のないようご{注意|ちゅうい}ください。", en: "When leaving, please make sure you don't forget anything." },
            { ja: "{部屋|へや}を{退出|たいしゅつ}する**{際|さい}に**は、{電気|でんき}を{消|け}してください。", en: "When you leave the room, please turn off the lights." },
            { ja: "{口座|こうざ}を{開|ひら}く**{際|さい}**、{印鑑|いんかん}と{身分|みぶん}{証明書|しょうめいしょ}が{必要|ひつよう}です。", en: "When opening an account, you need your personal seal and ID." },
            { ja: "{前回|ぜんかい}お{会|あ}いした**{際|さい}に**お{話|はな}しした{件|けん}ですが……", en: "About the matter I mentioned when we last met…" },
          ],
          plus: [
            {
              pattern: "〜に{際|さい}して",
              stars: 2,
              marks: ["formal"],
              usage: {
                ja: "「[N] + に{際|さい}して」の{形|かたち}もある。{注意|ちゅうい}・おわび・{説明|せつめい}などの{文|ぶん}に{使|つか}われる。",
                en: "There is also the form N + に際して. It is used in sentences giving warnings, apologies, explanations and the like.",
              },
              forms: ["[N] + に{際|さい}して"],
              examples: [
                { ja: "{会場|かいじょう}の{利用|りよう}**に{際|さい}して**は、{火気|かき}の{使用|しよう}を{禁止|きんし}いたします。", en: "When using the venue, the use of open flames is prohibited." },
                { ja: "{工事|こうじ}の{実施|じっし}**に{際|さい}して**、ご{迷惑|めいわく}をおかけすることをおわび{申|もう}し{上|あ}げます。", en: "We apologize for any inconvenience caused during the construction work." },
                { ja: "{留学|りゅうがく}**に{際|さい}して**、{先生|せんせい}から{励|はげ}ましの{言葉|ことば}をいただいた。", en: "When I went abroad to study, my teacher gave me words of encouragement." },
              ],
            },
          ],
          deepDive:
            "**〜際（に）** is a formal *when / at the time of*. Think of it as a dressed-up とき. You'll meet it constantly on signs (お降りの際は…), in manuals (ご使用の際は…) and business email (お越しの際は…).\n\n" +
            "- Connection: **V-る際** (before/while doing), **V-た際** (after doing, *when I did*), **Nの際** (note: の, not な).\n" +
            "- With particles: 際に, 際は (topic, contrast), 際には (emphasis).\n\n" +
            "**〜に際して** (Plus) is narrower: it marks a **significant, one-off occasion** (入学, 開店, 出発, 契約) and the sentence usually says what is done *on that occasion* — preparation, apologies, formal greetings. You wouldn't use に際して for a routine action like ✗電気を消すに際して. Its even more formal cousin **〜にあたって** (#135) is used for the start of an important undertaking.\n\n" +
            "Common mistake: 地震のとき → 地震の際 ✓, but ✗地震な際. Remember の.",
          see: [135],
          index: ["V際（に）", "Nの際（に）", "Nに際して"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "このアプリを{初|はじ}めて{使|つか}う{際|さい}は、",
                "{機内|きない}に{持|も}ち{込|こ}む{荷物|にもつ}の{検査|けんさ}の{際|さい}には、",
                "{火災|かさい}が{起|お}きた{際|さい}には、",
                "{住所|じゅうしょ}{変更|へんこう}の{手続|てつづ}きの{際|さい}は、",
                "{強風|きょうふう}の{際|さい}、",
              ],
              right: [
                "ロープウェイの{運転|うんてん}を{中止|ちゅうし}することがあります。",
                "パソコンをかばんから{出|だ}してください。",
                "{新|あたら}しい{住所|じゅうしょ}がわかるものをお{持|も}ちください。",
                "{最初|さいしょ}にメールアドレスを{登録|とうろく}してください。",
                "エレベーターを{使|つか}わず、{階段|かいだん}で{避難|ひなん}してください。",
              ],
              answer: [3, 1, 4, 2, 0],
              en: [
                "When using this app for the first time, register your email address first.",
                "During the inspection of carry-on baggage, please take your computer out of your bag.",
                "In the event of a fire, evacuate by the stairs, not the elevator.",
                "When changing your address, please bring something showing your new address.",
                "In strong winds, the ropeway may be suspended.",
              ],
            },
          ],
        },
        {
          no: 8,
          pattern: "〜こと",
          phrase: "{受付|うけつけ}を{済|す}ませる**こと**",
          stars: 2,
          marks: ["formal"],
          usage: {
            ja: "{規則|きそく}や{注意|ちゅうい}{事項|じこう}を{書|か}くときに、{文|ぶん}の{最後|さいご}に{使|つか}う。「〜しなさい」「〜してはいけない」という{意味|いみ}になる。",
            en: "Used at the end of a sentence when writing rules or instructions. It works like a written command: “(you must) do ~ / don't do ~”.",
          },
          forms: ["[V-る] + こと", "[V-ない] + こと", "[N] の + こと"],
          examples: [
            { ja: "レポートは{金曜日|きんようび}{正午|しょうご}までに{提出|ていしゅつ}する**こと**。", en: "Reports must be submitted by noon on Friday." },
            { ja: "{図書館|としょかん}の{中|なか}では{携帯|けいたい}{電話|でんわ}で{話|はな}さない**こと**。", en: "Do not talk on your mobile phone inside the library." },
            { ja: "{参加者|さんかしゃ}は{運動|うんどう}しやすい{服装|ふくそう}で{集合|しゅうごう}の**こと**。", en: "Participants must assemble in clothes suitable for exercise." },
            { ja: "{使|つか}った{道具|どうぐ}は{必|かなら}ず{元|もと}の{場所|ばしょ}に{戻|もど}す**こと**。", en: "Always return the tools you used to where they were." },
          ],
          deepDive:
            "Ending a sentence with **こと** turns it into a rule or instruction — the kind printed on dorm notices, exam instructions, school rules or a teacher's handout. It's impersonal and firm; it doesn't say who gives the order.\n\n" +
            "- **V-る + こと** = *must do*: 9時までに帰ること.\n" +
            "- **V-ない + こと** = *must not do*: 廊下を走らないこと.\n" +
            "- **Nの + こと**: with action nouns: 集合のこと, 持参のこと, 厳守のこと (*strictly observe*).\n\n" +
            "Register: fine in writing, but saying it to a colleague's face sounds bossy. Teachers and parents do use it orally as a strict instruction (明日までにやってくること！).\n\n" +
            "Don't confuse this sentence-final **こと** with other こと patterns: 〜ことだ (#87, advice: *you should*), 〜ことか (#42, exclamation), 〜ことに (#40, emotion: *to my surprise*), 〜ことから (#62, reason). See the comparison list under 〜こと.",
          see: [20, 40, 42, 49, 54, 62, 87, 110, 119],
          index: ["〜こと。", "Nのこと。"],
          practice: [
            {
              type: "match",
              prompt: { ja: "{正|ただ}しい{組|く}み{合|あ}わせを{選|えら}びなさい。", en: "Choose the correct pairs." },
              left: [
                "{申込書|もうしこみしょ}は、",
                "{試験|しけん}{中|ちゅう}は、",
                "{寮|りょう}のキッチンを{使|つか}ったあとは、",
                "{図書館|としょかん}で{借|か}りた{本|ほん}は、",
              ],
              right: [
                "{期限|きげん}までに{返却|へんきゃく}すること。",
                "コンロの{火|ひ}が{消|き}えているか{確認|かくにん}すること。",
                "{辞書|じしょ}を{使|つか}わないこと。",
                "{楷書|かいしょ}で{丁寧|ていねい}に{記入|きにゅう}のこと。",
              ],
              answer: [3, 2, 1, 0],
              en: [
                "Fill in the application form neatly in block style.",
                "Do not use a dictionary during the exam.",
                "After using the dorm kitchen, check that the stove is turned off.",
                "Return books borrowed from the library by the due date.",
              ],
            },
          ],
        },
      ],
      check: {
        type: "fill",
        prompt: { ja: "＿＿に{入|はい}る{言葉|ことば}を{下|した}から{選|えら}びなさい。", en: "Choose the word that fills each blank." },
        bank: ["に限り", "を問わず", "において", "に応じて", "際", "こと", "にかかわらず", "につき"],
        items: [
          { q: "この{地域|ちいき}では{昼夜|ちゅうや}＿＿、{交通|こうつう}{事故|じこ}に{注意|ちゅうい}が{必要|ひつよう}だ。", answer: "を問わず", en: "In this area you need to watch out for traffic accidents day and night.", why: { en: "昼夜を問わず is the set expression (from the book's list 昼夜・国の内外・男女・〜の有無). にかかわらず belongs in item 7, the V-る + V-ない pair." } },
          { q: "{料金|りょうきん}はご{利用|りよう}{時間|じかん}＿＿{計算|けいさん}いたします。", answer: "に応じて", en: "The fee is calculated according to the time used." },
          { q: "{今年|ことし}の{総会|そうかい}は、{本社|ほんしゃ}の{大|だい}ホール＿＿{開催|かいさい}されます。", answer: "において", en: "This year's general meeting will be held in the main hall at head office." },
          { q: "{平日|へいじつ}の{午前中|ごぜんちゅう}＿＿、{施設|しせつ}{使用料|しようりょう}が{無料|むりょう}になります。", answer: "に限り", en: "On weekday mornings only, facility fees are free." },
          { q: "{機械|きかい}を{修理|しゅうり}する＿＿は、{必|かなら}ず{電源|でんげん}を{切|き}ってください。", answer: "際", en: "When repairing the machine, always switch off the power." },
          { q: "{実験|じっけん}{中|ちゅう}は{白衣|はくい}と{保護|ほご}メガネを{着用|ちゃくよう}する＿＿。", answer: "こと", en: "Lab coats and safety glasses must be worn during experiments." },
          { q: "イベントに{参加|さんか}するしない＿＿、アンケートへのご{回答|かいとう}をお{願|ねが}いします。", answer: "にかかわらず", en: "Whether or not you take part in the event, please answer the questionnaire.", why: { en: "Only にかかわらず can follow a V-る + V-ない pair (参加するしない); を問わず takes nouns only." } },
          { q: "{店内|てんない}{改装|かいそう}＿＿、しばらく{休業|きゅうぎょう}いたします。", answer: "につき", en: "We will be closed for a while due to interior renovation." },
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
          { q: "このエアコンは{部屋|へや}の{温度|おんど}（　）、{自動的|じどうてき}に{風|かぜ}の{強|つよ}さを{変|か}える。", options: ["にとって", "に応じて", "に限り", "において"], answer: 1, en: "This air conditioner automatically changes the strength of the airflow according to the room temperature." },
          { q: "この{祭|まつ}りには、{国籍|こくせき}（　）{毎年|まいとし}たくさんの{人|ひと}が{集|あつ}まる。", options: ["を問わず", "に限って", "に対して", "にとって"], answer: 0, en: "Every year lots of people of every nationality gather for this festival." },
          { q: "{本日|ほんじつ}ご{来店|らいてん}のお{客様|きゃくさま}（　）、{全品|ぜんぴん}10%{引|び}きとさせていただきます。", options: ["において", "に応じて", "に限り", "を問わず"], answer: 2, en: "For customers visiting today only, everything is 10% off." },
          { q: "お{支払|しはら}いの（　）は、{会員|かいいん}カードをご{提示|ていじ}ください。", options: ["うち", "際", "ほど", "まま"], answer: 1, en: "When paying, please show your membership card." },
          { q: "{実験室|じっけんしつ}では{飲食|いんしょく}をしない（　）。", options: ["わけ", "はず", "こと", "もの"], answer: 2, en: "No eating or drinking in the laboratory.", why: { en: "Sentence-final こと states a rule. わけ/はず/もの would need だ and don't give an instruction." } },
          { q: "{雨|あめ}が{降|ふ}る{降|ふ}らない（　）、{運動会|うんどうかい}の{準備|じゅんび}は{朝|あさ}7{時|じ}から{始|はじ}めます。", options: ["につき", "に限り", "にかかわらず", "に応じて"], answer: 2, en: "Whether it rains or not, preparations for sports day will start at 7 a.m." },
        ],
      },
    },
    {
      title: { ja: "問題2 〈{文|ぶん}の{組|く}み{立|た}て〉", en: "Q2 Sentence composition" },
      ex: {
        type: "order",
        prompt: { ja: "{次|つぎ}の{文|ぶん}の ★ に{入|はい}る{最|もっと}もよいものを1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Put the four pieces in order and choose the one that goes in ★." },
        items: [
          { before: "{次回|じかい}の{会議|かいぎ}は", after: "{予定|よてい}です。", pieces: ["{本社|ほんしゃ}の", "において", "{行|おこな}われる", "{大会議室|だいかいぎしつ}"], order: [0, 3, 1, 2], star: 2, en: "The next meeting is scheduled to be held in the large conference room at head office." },
          { before: "", after: "{必|かなら}ずお{読|よ}みください。", pieces: ["{際|さい}は", "ご{使用|しよう}の", "この{説明書|せつめいしょ}を", "{製品|せいひん}を"], order: [3, 1, 0, 2], star: 2, en: "When using the product, be sure to read this manual." },
          { before: "この{町|まち}の{祭|まつ}りは", after: "、{毎年|まいとし}{多|おお}くの{観光客|かんこうきゃく}が{訪|おとず}れる。", pieces: ["{内外|ないがい}", "を{問|と}わず", "{国|くに}の", "{人気|にんき}で"], order: [2, 0, 1, 3], star: 2, en: "This town's festival is popular at home and abroad, and many tourists visit every year." },
          { before: "{当店|とうてん}の{料金|りょうきん}は、", after: "{変|か}わります。", pieces: ["{季節|きせつ}", "{時間帯|じかんたい}や", "に{応|おう}じて", "{細|こま}かく"], order: [1, 0, 2, 3], star: 2, en: "Our prices vary in detail according to the time of day and the season." },
        ],
      },
    },
    {
      title: { ja: "問題3 〈{文章|ぶんしょう}の{文法|ぶんぽう}〉", en: "Q3 Grammar in a passage" },
      ex: {
        type: "passage",
        prompt: { ja: "{次|つぎ}の{文章|ぶんしょう}を{読|よ}んで、[1]から[5]の{中|なか}に{入|はい}る{最|もっと}もよいものを、1・2・3・4から{一|ひと}つ{選|えら}びなさい。", en: "Read the passage and choose the best option for each of blanks [1]–[5]." },
        title: "{市立|しりつ}{図書館|としょかん}からのお{知|し}らせ",
        text: [
          "{当館|とうかん}は、{市内|しない}にお{住|す}まいかどうか**にかかわらず**、どなたでもご{利用|りよう}いただけます。{本|ほん}を{借|か}りるには{利用|りよう}カードが{必要|ひつよう}です。カードを{作|つく}る[1]、{住所|じゅうしょ}が{確認|かくにん}できるものをお{持|も}ちください。",
          "{毎月|まいつき}{第|だい}2{土曜日|どようび}には、{年齢|ねんれい}**を{問|と}わず**{参加|さんか}できる「{読書会|どくしょかい}」を{開|ひら}いています。{読書会|どくしょかい}は{本館|ほんかん}2{階|かい}の{多目的室|たもくてきしつ}[2]{行|おこな}います。[3]、{取|と}り{上|あ}げる{本|ほん}は{参加者|さんかしゃ}の{希望|きぼう}[4]{選|えら}びますので、{初|はじ}めての{方|かた}も{安心|あんしん}してご{参加|さんか}ください。",
          "{毎週|まいしゅう}{月曜日|げつようび}は{休館日|きゅうかんび}です。[5]、{月曜日|げつようび}が{祝日|しゅくじつ}の{場合|ばあい}は{開館|かいかん}し、{翌日|よくじつ}の{火曜日|かようび}を{休館|きゅうかん}とします。",
        ],
        en: [
          "The library can be used by anyone, whether or not they live in the city. You need a library card to borrow books. When making a card, please bring something that shows your address.",
          "On the second Saturday of every month we hold a reading circle that people of any age can join. It takes place in the multipurpose room on the 2nd floor of the main building. Also, the books we read are chosen according to participants' wishes, so first-timers can join without worry.",
          "The library is closed every Monday. However, when Monday is a national holiday, we open and close on the following Tuesday instead.",
        ],
        blanks: [
          { options: ["際は", "��ちに", "最中���", "ところ"], answer: 0 },
          { options: ["に限り", "において", "に応じて", "につき"], answer: 1 },
          { options: ["ところが", "それとも", "また", "すると"], answer: 2 },
          { options: ["について", "に限って", "を問わず", "に応じて"], answer: 3 },
          { options: ["さらに", "ただし", "それで", "つまり"], answer: 1, why: { en: "ただし introduces an exception to what was just said — the library is normally closed on Mondays, but not on holiday Mondays." } },
        ],
      },
    },
    {
      title: { ja: "問題4 〈{聴解|ちょうかい}〉", en: "Q4 Listening" },
      ex: {
        type: "listening",
        mode: "task",
        prompt: { ja: "まず{話|はなし}を{聞|き}いてください。それから{二|ふた}つの{質問|しつもん}を{聞|き}いて、それぞれ1から4の{中|なか}から、{最|もっと}もよいものを{一|ひと}つ{選|えら}んでください。", en: "First listen to the talk. Then answer the two questions, choosing the best option from 1–4." },
        items: [
          {
            question: "{市|し}の{国際|こくさい}センターで{今月|こんげつ}{新|あたら}しく{始|はじ}まるのは{何|なん}ですか。",
            script: [
              { sp: "{放送|ほうそう}", v: "f", ja: "{国際|こくさい}センターからのお{知|し}らせです。{今月|こんげつ}から、{留学生|りゅうがくせい}が{先生|せんせい}になって、{自分|じぶん}の{国|くに}の{家庭|かてい}{料理|りょうり}を{紹介|しょうかい}する{教室|きょうしつ}が{始|はじ}まります。{料理|りょうり}の{経験|けいけん}を{問|と}わず、どなたでも{参加|さんか}できます。" },
              { sp: "{放送|ほうそう}", v: "f", ja: "{材料|ざいりょう}{費|ひ}は{毎回|まいかい}500{円|えん}ですが、{市内|しない}の{大学|だいがく}に{通|かよ}う{学生|がくせい}の{方|かた}に{限|かぎ}り、{無料|むりょう}です。{定員|ていいん}は20{名|めい}で、{申|もう}し{込|こ}みが{多|おお}い{場合|ばあい}は、{年齢|ねんれい}にかかわらず{抽選|ちゅうせん}となります。" },
              { sp: "{男|おとこ}", v: "m", ja: "へえ、おもしろそう。ぼく、{料理|りょうり}は{全然|ぜんぜん}できないけど、{大丈夫|だいじょうぶ}みたいだね。{申|もう}し{込|こ}んでみようかな。" },
              { sp: "{女|おんな}", v: "f", ja: "わたしも{行|い}きたいけど、その{日|ひ}はアルバイトが{入|はい}ってるんだ。{材料|ざいりょう}{費|ひ}は{払|はら}ってもいいんだけど……。{今回|こんかい}はやめておく。" },
            ],
            en: [
              "This is an announcement from the International Center. Starting this month, we will hold classes in which international students become the teachers and introduce home cooking from their countries. Anyone can join, with or without cooking experience.",
              "Ingredients cost ¥500 each time, but for students attending universities in the city only, it's free. The class is limited to 20 people; if there are many applications, a lottery will be held regardless of age.",
              "Oh, that sounds fun. I can't cook at all, but it seems that's OK. Maybe I'll apply.",
              "I'd like to go too, but I've got a part-time shift that day. I wouldn't mind paying for the ingredients, but… I'll pass this time.",
            ],
            options: ["{留学生|りゅうがくせい}に{日本|にほん}の{料理|りょうり}を{教|おし}える{教室|きょうしつ}", "{留学生|りゅうがくせい}が{国|くに}の{料理|りょうり}を{教|おし}える{教室|きょうしつ}", "{留学生|りゅうがくせい}と{料理|りょうり}を{食|た}べるパーティー", "{留学生|りゅうがくせい}が{日本語|にほんご}を{習|なら}う{教室|きょうしつ}"],
            answer: 1,
          },
          {
            question: "{女|おんな}の{人|ひと}は、どうして{今回|こんかい}{申|もう}し{込|こ}まないのですか。",
            options: ["{料理|りょうり}が{苦手|にがて}だから", "{材料|ざいりょう}{費|ひ}が{高|たか}いから", "アルバイトがあるから", "{抽選|ちゅうせん}に{外|はず}れたから"],
            answer: 2,
            why: { en: "She says その日はアルバイトが入ってる and that she wouldn't mind paying the ingredients fee; the man is the one who can't cook." },
          },
        ],
      },
    },
  ],
});
