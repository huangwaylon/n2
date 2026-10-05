TRY.registerCompare([
  {
    key: "〜{一方|いっぽう}",
    intro: {
      ja: "どちらも「{一方|いっぽう}」を{使|つか}いますが、①は二つのことを{対比|たいひ}し、②は{変化|へんか}が一つの{方向|ほうこう}に{進|すす}み{続|つづ}けることを{表|あらわ}します。",
      en: "Both use 一方, but ① contrasts two things, while ② says a change keeps moving in one direction."
    },
    items: [
      { pattern: "〜{一方|いっぽう}①", level: "N2", no: 61,
        ex: { ja: "仕事を{求|もと}めて{都会|とかい}に出る{若者|わかもの}がいる**{一方|いっぽう}**、{故郷|こきょう}に{戻|もど}って{就職|しゅうしょく}する{若者|わかもの}もいる。", en: "While some young people move to the city in search of work, others return to their hometowns to find jobs." },
        note: "A一方（で）B: \"while A, (on the other hand) B\". Sets two contrasting situations side by side; attaches to the plain form (なA + な, N + の, or formal である) and says nothing about change over time." },
      { pattern: "V{一方|いっぽう}②", level: "N2", no: 115,
        ex: { ja: "ここは静かな町だったのに、テレビで{紹介|しょうかい}されて{以来|いらい}、{観光客|かんこうきゃく}が増える**{一方|いっぽう}だ**。", en: "This used to be a quiet town, but ever since it was featured on TV, the number of tourists has just kept increasing." },
        note: "V-る + 一方だ: \"just keeps ~ing / only gets more and more ~\". Only with change verbs (増える, 減る, 悪くなる; ✗食べる一方だ), mostly for an unwelcome trend with no sign of stopping; same as V-るばかりだ." }
    ]
  },
  {
    key: "〜{上|うえ}／{上|じょう}",
    intro: {
      ja: "「{上|うえ}」を{使|つか}った{文型|ぶんけい}は{意味|いみ}がさまざまです。{前|まえ}に{来|く}る{形|かたち}（る{形|けい}・た{形|けい}・{名詞|めいし}）と{後|うし}ろの{助詞|じょし}で{見分|みわ}けましょう。",
      en: "Patterns with 上 have a wide range of meanings. Tell them apart by the form that comes before (dictionary form, ta-form, noun) and the particle that follows."
    },
    items: [
      { pattern: "V{上|うえ}で①", level: "N2", no: 14,
        ex: { ja: "この本は{就職活動|しゅうしょくかつどう}をする**{上|うえ}で**の{重要|じゅうよう}なポイントが書かれています。", en: "This book covers the key points to keep in mind when job hunting." },
        note: "V-る + 上で: \"in doing V / when it comes to V\". The rest of the sentence says what is important, necessary or a problem for that activity (重要だ, 必要だ, 欠かせない); 上での + N modifies a noun, as here." },
      { pattern: "〜{上|うえ}で②", level: "N2", no: 117,
        ex: { ja: "駅前の{再開発|さいかいはつ}については、住民の皆さんの意見をまとめた**{上|うえ}で**、市に{要望書|ようぼうしょ}を{提出|ていしゅつ}したいと思います。", en: "Regarding the redevelopment in front of the station, we'd like to compile the opinions of all the residents and then submit a written request to the city." },
        note: "V-た / Nの + 上で: \"after (first) doing V, and on that basis\". A necessary step (checking, compiling) comes before a decision or action; formal, not for everyday sequences (✗映画を見た上で食事しよう). The V-た form separates it from ①." },
      { pattern: "〜{上|うえ}は", level: "N2", no: 18,
        ex: { ja: "{税金|ぜいきん}を使って研究を{行|おこな}う**{上|うえ}は**、社会に役立つ研究をしなければならない。", en: "Since we are doing research with taxpayers' money, it must be research that benefits society." },
        note: "V + 上は: \"now that / since\", a stiff, formal variant of からには (Plus under #18). The second half states a duty, resolve or firm conclusion (〜なければならない, 〜べきだ)." },
      { pattern: "〜{上|うえ}（に）", level: "N2", no: 102,
        ex: { ja: "先週は{熱|ねつ}が40度も出た**{上|うえ}に**、{下痢|げり}が止まらず、本当に大変でした。", en: "Last week I had a fever as high as 40°C, and on top of that I had diarrhea that wouldn't stop. It was really awful." },
        note: "Plain form (なA + な, N + の) + 上（に）: \"on top of / not only A but also B\". Adds a second circumstance pointing the same way (both good or both bad), often with も; never a contrast (✗安い上にまずい)." },
      { pattern: "N{上|じょう}", level: "N2", no: 70,
        ex: { ja: "お{札|さつ}にはその国の{歴史|れきし}**{上|じょう}**の{人物|じんぶつ}の顔が{描|えが}かれていることが多い。", en: "A country's banknotes often bear the faces of figures from its history." },
        note: "N + 上 (read じょう), directly after a Sino-Japanese noun: \"from the standpoint of N / in terms of N\" (歴史上, 法律上, 健康上). A written-style suffix, not a clause connector like the うえ patterns; 上の + N modifies a noun." }
    ]
  },
  {
    key: "〜うちに",
    intro: {
      ja: "「うちに」は{時間|じかん}の{範囲|はんい}を{表|あらわ}します。その{間|あいだ}に{変化|へんか}が{起|お}きるのか、{状態|じょうたい}が{変|か}わる{前|まえ}にするのか、すぐ{後|あと}なのかがポイントです。",
      en: "うちに marks a span of time. The key is whether a change happens during it, whether you act before a state changes, or whether one thing follows immediately after another."
    },
    items: [
      { pattern: "Vうちに①", level: "N3",
        ex: { ja: "今はまだ上手じゃなくても、練習を{重|かさ}ねる**うちに**できるようになるよ。", en: "Even if you're not good at it yet, you'll be able to do it as you keep practicing." },
        note: "V-る / V-ている + うちに: \"while (doing V) / in the course of\". Over the span of repeated or ongoing action, a change comes about naturally, often unnoticed; the result is typically 〜ようになる / 〜てくる." },
      { pattern: "〜うちに②", level: "N3",
        ex: { ja: "アイスクリームが{溶|と}けない**うちに**食べよう。", en: "Let's eat the ice cream before it melts." },
        note: "V-ない / いA / Nの + うちに: \"before (it stops being) ~ / while still ~\". Do something while the favorable state lasts, before it changes (冷めないうちに, 若いうちに)." },
      { pattern: "VかVかのうちに", level: "N2", no: 96,
        ex: { ja: "{早食|はやぐ}い{選手権|せんしゅけん}を見ていたら、{選手|せんしゅ}たちは食べ物を口に**入れたか入れないかのうちに**、次の料理に手を{伸|の}ばしていた。", en: "I was watching a speed-eating championship, and the contestants were reaching for the next dish almost before they'd put the food in their mouths." },
        note: "V-る/V-た + か + V-ない + かのうちに (the same verb twice): \"barely had ~ when\". The next event follows before the first has quite finished; it reports a fact, usually past, never a request or intention." }
    ]
  },
  {
    key: "〜{得|う}る／{得|え}る",
    intro: {
      ja: "どちらも「{得|え}る」を{使|つか}いますが、「V{得|う}る」は{可能性|かのうせい}、「ざるを{得|え}ない」は{仕方|しかた}なくすることを{表|あらわ}します。",
      en: "Both use 得る, but V得る expresses possibility, while ざるを得ない means doing something reluctantly because there is no other way."
    },
    items: [
      { pattern: "V{得|う}る", level: "N2", no: 66,
        ex: { ja: "{凶器|きょうき}がどこにあるか、考え**{得|う}る**場所はすべて{捜|さが}したが、まったく手がかりがつかめなかった。", en: "We searched every conceivable place for the weapon, but couldn't find a single clue." },
        note: "V-ます stem + 得る (うる or える): \"can / could conceivably\". Logical possibility (考え得る, あり得る), not personal ability; formal and written. Only the dictionary form can be read うる; the negative 得ない (えない) means \"cannot / impossible\"." },
      { pattern: "Vざるを{得|え}ない", level: "N2", no: 24,
        ex: { ja: "{台風接近|たいふうせっきん}のため、{野外|やがい}コンサートは中止せ**ざるを{得|え}なく**なった。", en: "Because a typhoon was approaching, they had no choice but to cancel the open-air concert." },
        note: "V-ない stem + ざるを得ない (する → せざるを得ない): \"have no choice but to\". A reluctant necessity forced by circumstances, not the speaker's wish; formal. Despite the shared 得, it has nothing to do with possibility." }
    ]
  },
  {
    key: "〜から",
    intro: {
      ja: "「から」を{含|ふく}む{文型|ぶんけい}です。{理由|りゆう}を{強|つよ}める、{理由|りゆう}を{否定|ひてい}する、{条件|じょうけん}・{決意|けつい}を{表|あらわ}す、{判断|はんだん}の{根拠|こんきょ}を{示|しめ}すなど、{働|はたら}きが{違|ちが}います。",
      en: "These patterns all contain から, but they work differently: emphasizing a reason, rejecting a reason, stating a precondition or resolve, or giving the basis for a judgment."
    },
    items: [
      { pattern: "〜からこそ", level: "N3",
        ex: { ja: "大変なときだ**からこそ**、{協力|きょうりょく}することが大切なんです。", en: "It is precisely because times are hard that working together is so important." },
        note: "Plain form + からこそ: \"precisely because\". Insists that this is the real reason, often one that might seem to point the other way (hard times → cooperate); everyday register." },
      { pattern: "〜からといって", level: "N3",
        ex: { ja: "A：あんなにがんばって練習したんだから、今度の大会は{絶対優勝|ぜったいゆうしょう}ですね。\nB：練習した**からといって**、{簡単|かんたん}には{優勝|ゆうしょう}できませんよ。", en: "A: After all that hard practice, you're sure to win the next tournament.\nB: Just because I practiced doesn't mean I can win that easily." },
        note: "Plain form + からといって: \"just because ~ doesn't mean\". Rejects the conclusion one would draw from the reason; followed by a negative (〜とは限らない, 〜わけではない, できない) or a prohibition." },
      { pattern: "Vてからでなければ", level: "N3",
        ex: { ja: "この会社では、3か月の{研修|けんしゅう}を受け**てからでなければ**正社員になれません。", en: "At this company, you can't become a full-time employee until you've completed three months of training." },
        note: "V-て + からでなければ: \"not until after V / unless you first V\". The first action is a required precondition, and the second half is negative or impossible (なれない, できない)." },
      { pattern: "Vからには", level: "N2", no: 18,
        ex: { ja: "日本での{就職|しゅうしょく}を{希望|きぼう}する**からには**、しっかり{企業|きぎょう}研究をしておいたほうがいい。", en: "Since you want to find a job in Japan, you had better research companies thoroughly." },
        note: "V-る / V-た + からには: \"now that / since (it's decided or done)\". The second half must carry resolve, duty, advice or a command (〜べきだ, 〜つもりだ, 〜ほうがいい), not a neutral fact; 上は is its formal Plus variant." },
      { pattern: "〜から見て", level: "N2", no: 60,
        ex: { ja: "便利さという点**から見ると**、やはり{田舎|いなか}より{都会|とかい}のほうが{暮|く}らしやすい。", en: "In terms of convenience, the city is, as you'd expect, an easier place to live than the countryside." },
        note: "N + から見て / から見ると / から見れば: \"judging from / from the viewpoint of N\". N is the vantage point or evidence for a judgment (〜という点から見ると, as here), not a reason." }
    ]
  },
  {
    key: "〜きる／きり",
    intro: {
      ja: "「きる」は{最後|さいご}までする{完了|かんりょう}、「たきり」はそれを{最後|さいご}に{次|つぎ}のことが{起|お}きないことを{表|あらわ}します。",
      en: "きる means doing something completely, to the end; たきり means that after one thing happened, nothing further followed."
    },
    items: [
      { pattern: "Vきる", level: "N3",
        ex: { ja: "この{目薬|めぐすり}は2週間で使い**きって**ください。{残|のこ}ったら使わないで{捨|す}ててください。", en: "Please use up these eye drops within two weeks. If any is left over, throw it away without using it." },
        note: "V-ます stem + きる: \"do completely / to the end\" (使いきる, 食べきる, 読みきる). The focus is on finishing all of it; not about what happens afterward." },
      { pattern: "Vたきり", level: "N2", no: 37,
        ex: { ja: "彼は「ごめん」と言った**きり**、{黙|だま}ってしまった。", en: "He said “sorry” and then didn't say another word." },
        note: "V-た + きり (casual っきり): \"did V, and that was the last of it\". Nothing further followed, so the rest is usually negative or an unchanged state (〜ていない, 〜ままだ)." }
    ]
  },
  {
    key: "〜くらい",
    intro: {
      ja: "「くらい」は{程度|ていど}を{表|あらわ}しますが、「Vくらいなら」は{望|のぞ}ましくない{選択|せんたく}と{比|くら}べて、{別|べつ}の{方|ほう}がいいと{言|い}う{表現|ひょうげん}です。",
      en: "くらい expresses degree, but Vくらいなら compares against an undesirable option and says another choice would be better."
    },
    items: [
      { pattern: "〜くらい", level: "N3",
        ex: { ja: "昨日の{地震|じしん}は、{座|すわ}っていられない**くらい**強くゆれた。", en: "Yesterday's earthquake shook so hard that you couldn't stay seated." },
        note: "Plain form + くらい: \"so ~ that / to the point that\". Shows the degree of something through an illustrative (often exaggerated) example." },
      { pattern: "Vくらいなら", level: "N2", no: 90,
        ex: { ja: "A：カメラが{壊|こわ}れちゃって、{修理代|しゅうりだい}が15,000円もするんだ。\nB：15,000円も{払|はら}う**くらいなら**、新しいのを買ったほうがいいね。", en: "A: My camera broke, and fixing it costs a whopping 15,000 yen.\nB: Rather than pay 15,000 yen, you'd be better off buying a new one." },
        note: "V-る + くらいなら: \"rather than (do A)\". The speaker finds A so unacceptable that B, though not ideal, is better; B is a choice, advice or preference (〜ほうがいい, 〜ほうがましだ, 〜（よ）う)." }
    ]
  },
  {
    key: "〜こそ",
    intro: {
      ja: "「こそ」は{強調|きょうちょう}です。{理由|りゆう}を{強調|きょうちょう}する「からこそ・ばこそ」と、{条件|じょうけん}を{強調|きょうちょう}する「てこそ」があります。",
      en: "こそ adds emphasis. からこそ and ばこそ emphasize a reason, while てこそ emphasizes a condition."
    },
    items: [
      { pattern: "〜からこそ", level: "N3",
        ex: { ja: "大変なときだ**からこそ**、{協力|きょうりょく}することが大切なんです。", en: "It is precisely because times are hard that working together is so important." },
        note: "Plain form + からこそ: \"precisely because\". The everyday way to insist that this is the real reason." },
      { pattern: "〜ばこそ", level: "N2", no: 53,
        ex: { ja: "この山の{自然|しぜん}を{愛|あい}すれ**ばこそ**、{観光客|かんこうきゃく}の数を{厳|きび}しく{制限|せいげん}しているのです。", en: "It is precisely because we love the nature of this mountain that we strictly limit the number of tourists." },
        note: "V-ば / なA・N + であれば + こそ: \"precisely because\", but formal and somewhat literary. Often explains a motive behind an action that might seem harsh; usually ends in 〜のだ." },
      { pattern: "Vてこそ", level: "N2", no: 139,
        ex: { ja: "どんな{健康法|けんこうほう}も、続け**てこそ**{効果|こうか}がある。", en: "Any health regimen only works if you keep it up." },
        note: "V-て + こそ: \"only by doing V / only when V\". Presents an indispensable condition (≈ 〜なければ…ない), followed by something of value (効果がある, 意味がある); a condition, not a reason like the other two." }
    ]
  },
  {
    key: "〜こと",
    intro: {
      ja: "「こと」を{使|つか}った{文型|ぶんけい}はとても{多|おお}いです。{前後|ぜんご}の{形|かたち}（た{形|けい}・ない{形|けい}・「に」「から」など）によって{意味|いみ}が{大|おお}きく{変|か}わります。",
      en: "There are many patterns built on こと. Their meaning changes greatly depending on the forms around them (ta-form, nai-form, に, から, etc.)."
    },
    items: [
      { pattern: "Vことができる", level: "N4",
        ex: { ja: "私はギターを{弾|ひ}く**ことができます**。", en: "I can play the guitar." },
        note: "V-る + ことができる: \"can / be able to\". Ability or possibility; a slightly more formal alternative to the potential form." },
      { pattern: "Vたことがある", level: "N4",
        ex: { ja: "私は一度アフリカへ行った**ことがあります**。", en: "I have been to Africa once." },
        note: "V-た + ことがある: \"have (ever) done\". Past experience; the tense before こと is what separates it from the next item." },
      { pattern: "Vことがある", level: "N3",
        ex: { ja: "この地方は4月でも雪が降る**ことがある**。", en: "In this region it sometimes snows even in April." },
        note: "V-る + ことがある: \"sometimes / there are times when\". An occasional occurrence, not experience." },
      { pattern: "Aことといったら", level: "N3",
        ex: { ja: "{花見客|はなみきゃく}の多い**ことといったら**、ゆっくり{桜|さくら}も見られないほどでしたよ。", en: "You wouldn't believe how many people were out for cherry-blossom viewing; there were so many you couldn't even enjoy the blossoms in peace." },
        note: "Adjective + ことといったら: \"you wouldn't believe how ~\". An exclamation of an extreme degree, often followed by the result (〜ほどだ)." },
      { pattern: "Nのことだから", level: "N3",
        ex: { ja: "{鈴木|すずき}選手**のことだから**、本番ではさらにすばらしい{演技|えんぎ}を見せてくれることでしょう。", en: "Knowing Suzuki, we'll surely see an even more wonderful performance in the actual competition." },
        note: "Person + のことだから: \"knowing N / N being N\". A confident guess based on that person's well-known character or habits; followed by conjecture (〜だろう, 〜に違いない)." },
      { pattern: "〜こと。", level: "N2", no: 8,
        ex: { ja: "{願書|がんしょ}は1月28日{必着|ひっちゃく}の**こと**。{窓口|まどぐち}での受け付けは{行|おこな}っておりません。", en: "Applications must arrive by January 28. We do not accept them at the counter." },
        note: "Sentence-final V-る / V-ない / Nの + こと: \"must / do not\". An impersonal written rule or instruction on notices, application guidelines and regulations; not used in conversation." },
      { pattern: "〜ことか", level: "N2", no: 42,
        ex: { ja: "人は私のことを頭がいいと言うけど、この試験に{合格|ごうかく}するために、どれだけ勉強した**ことか**。私の{努力|どりょく}は{誰|だれ}も知らないでしょうね。", en: "People say I'm smart, but you have no idea how much I studied to pass this exam. I don't suppose anyone knows how hard I worked." },
        note: "どれだけ / どんなに / なんと + plain form + ことか: \"you have no idea how ~!\". An emotional exclamation about the degree of what the speaker did or felt; somewhat literary." },
      { pattern: "〜ことから", level: "N2", no: 62,
        ex: { ja: "このサツマイモは中が赤い**ことから**、{紅|べに}イモと呼ばれています。", en: "This sweet potato is called a beni-imo (\"crimson potato\") because it is red inside." },
        note: "Plain form + ことから: \"from the fact that\". An objective, written reason based on an observable fact, typically the origin of a name (〜と呼ばれている), grounds for a judgment, or a cause." },
      { pattern: "〜ということだ", level: "N3",
        ex: { ja: "ニュースでは、今回の{地震|じしん}による{津波|つなみ}の{心配|しんぱい}はない**ということです**。", en: "According to the news, there is no danger of a tsunami from this earthquake." },
        note: "Plain form + ということだ: \"I hear / it's reported that\". Passes on information from another source such as the news." },
      { pattern: "Vことだ", level: "N2", no: 87,
        ex: { ja: "仕事でも何でも自分一人で{悩|なや}まないで、{誰|だれ}かに{相談|そうだん}する**ことです**よ。", en: "Whether it's work or anything else, don't agonize over it alone; the thing to do is talk to someone." },
        note: "V-る / V-ない + ことだ: \"the thing to do is / you should (not)\". Confident, slightly authoritative advice to the listener or to people in general, never about the speaker's own plans." },
      { pattern: "〜ことにする", level: "N4",
        ex: { ja: "最近、目が悪くなったので、めがねをかける**ことにしました**。", en: "My eyesight has gotten worse lately, so I've decided to wear glasses." },
        note: "V-る / V-ない + ことにする: \"decide to\". The speaker's own decision (ことにした for one just made)." },
      { pattern: "Vたことにする", level: "N2", no: 119,
        ex: { ja: "私が日本にいる間に、家族がドイツへ旅行に行ったなんて、聞かなかった**ことにしたい**なあ。", en: "My family went on a trip to Germany while I was in Japan? I'd rather pretend I never heard that." },
        note: "V-た / V-なかった + ことにする: \"pretend / treat it as if\" something did (not) happen. A deliberate fiction, usually for convenience; the past tense is what separates it from ことにする \"decide\"." },
      { pattern: "〜ことになる", level: "N4",
        ex: { ja: "来月ニューヨークへ行く**ことになりました**。", en: "It's been decided that I'll go to New York next month." },
        note: "V-る / V-ない + ことになる: \"it has been decided that / it turns out that\". The decision comes from others or from circumstances, not the speaker." },
      { pattern: "〜ことになっている", level: "N4",
        ex: { ja: "来週の月曜日、友達と映画を見る**ことになっています**。", en: "I'm supposed to see a movie with a friend next Monday." },
        note: "V-る / V-ない + ことになっている: \"be scheduled to / be the rule that\". An arrangement, plan or rule already in place." },
      { pattern: "〜ことに", level: "N2", no: 40,
        ex: { ja: "ホテルの部屋に入ったら、{驚|おどろ}いた**ことに**、バラの{花束|はなたば}とホテルマネージャーからの{歓迎|かんげい}メッセージがテーブルの上に置いてあった。", en: "When I walked into my hotel room, to my surprise, there was a bouquet of roses and a welcome message from the hotel manager on the table." },
        note: "V-た / いA / なAな + ことに: \"surprisingly / fortunately / sadly\". Leads with the speaker's own feeling, then states the fact that caused it; the main clause is a statement of fact, not a request or intention." },
      { pattern: "Vことなく", level: "N2", no: 20,
        ex: { ja: "今回は{優勝|ゆうしょう}することができましたが、これで{満足|まんぞく}する**ことなく**、さらに{努力|どりょく}を続けます。これからも、{応援|おうえん}よろしくお願いします。", en: "We were able to win this time, but we won't rest on that; we'll keep working even harder. Please continue to support us." },
        note: "V-る + ことなく: \"without doing V\". The formal, written counterpart of 〜ないで / 〜ずに, used for something continuing uninterrupted, a feared event not happening, or a resolution (満足することなく)." },
      { pattern: "〜ないことには", level: "N2", no: 110,
        ex: { ja: "A：ここに{若干名募集|じゃっかんめいぼしゅう}って書いてあるけど、何人ぐらい{採用|さいよう}するのかなあ。\nB：{問|と}い{合|あ}わせてみ**ないことには**、{詳|くわ}しいことはわからないよ。", en: "A: It says here they're hiring \"a few people,\" but I wonder roughly how many they'll actually take on.\nB: Unless you ask them, you won't know the details." },
        note: "V-ない + ことには: \"unless (you) ~, (you can't)\". Stresses an indispensable first step; the second half must be negative or impossible (わからない, できない)." },
      { pattern: "Vことはない", level: "N2", no: 49,
        ex: { ja: "{君|きみ}が{謝|あやま}る**ことはない**よ。悪いのは{向|む}こうなんだから。", en: "There's no need for you to apologize. They're the ones in the wrong." },
        note: "V-る + ことはない: \"there's no need to\". Advice or reassurance to the listener, close to 〜なくてもいい." },
      { pattern: "〜ないことはない", level: "N2", no: 54,
        ex: { ja: "A：お酒、お好きですか。\nB：そんなに好きではありませんが、飲め**ないことはありません**。", en: "A: Do you like alcohol?\nB: I'm not that fond of it, but it's not that I can't drink." },
        note: "V-ない + ことはない: \"it's not that ~ not\". A double negative giving a hesitant, partial yes; unlike ことはない, it is not advice." }
    ]
  },
  {
    key: "〜さえ",
    intro: {
      ja: "「さえ」は{極端|きょくたん}な{例|れい}を{挙|あ}げる{表現|ひょうげん}ですが、「さえ〜ば」になると、それだけで{十分|じゅうぶん}だという{条件|じょうけん}を{表|あらわ}します。",
      en: "さえ gives an extreme example (\"even\"), but in さえ〜ば it marks a condition that is enough on its own (\"as long as\")."
    },
    items: [
      { pattern: "〜さえ", level: "N3",
        ex: { ja: "来週から出張に行くのに、ホテルの予約はもちろん、{航空券|こうくうけん}の予約**さえ**してない。", en: "I'm going on a business trip next week, but I haven't even booked my plane ticket, let alone the hotel." },
        note: "N (+ particle) + さえ: \"even\". Presents an extreme case, implying that everything else is (or isn't) so as well." },
      { pattern: "〜さえ〜ば", level: "N2", no: 43,
        ex: { ja: "A：レポート終わった？\nB：もう少し。あと、最後のまとめ**さえ**書け**ば**終わりだよ。", en: "A: Have you finished your report?\nB: Almost. All I have to do now is write the final summary and I'm done." },
        note: "N + さえ + V-ば / V-ます stem + さえすれば: \"as long as / if only\". That one minimal condition is all it takes for the result; with 〜のに it expresses regret." }
    ]
  },
  {
    key: "〜{次第|しだい}",
    intro: {
      ja: "「{次第|しだい}」は、{動詞|どうし}につくと「〜したらすぐ」、{名詞|めいし}につくと「〜によって{決|き}まる」という{意味|いみ}になります。",
      en: "Attached to a verb stem, 次第 means \"as soon as ~\"; attached to a noun, it means \"depending on ~\" or \"it's up to ~\"."
    },
    items: [
      { pattern: "〜{次第|しだい}①", level: "N2", no: 36,
        ex: { ja: "ただ今、{全線|ぜんせん}で運転を{見合|みあ}わせておりますが、{情報|じょうほう}が入り**{次第|しだい}**、お伝えいたします。", en: "Service is currently suspended along the entire line; we will let you know as soon as we receive information." },
        note: "V-ます stem / する-noun + 次第: \"as soon as\". Formal; the main clause is a future action, request or plan (お伝えいたします), never a past fact (✗着き次第電話した)." },
      { pattern: "N{次第|しだい}②", level: "N2", no: 114,
        ex: { ja: "{登山|とざん}ルートは{天候|てんこう}**{次第|しだい}**で{変更|へんこう}する場合もありますので、ご{了承|りょうしょう}ください。", en: "Please note that the climbing route may be changed depending on the weather." },
        note: "N + 次第だ / 次第で（は）: \"depends on N / is up to N\". N determines the outcome; ① follows a verb stem, this one a noun." }
    ]
  },
  {
    key: "〜だけ",
    intro: {
      ja: "「だけ」を{使|つか}って、「とりあえずしてみる」「できる{限|かぎ}り」「〜なので{当然|とうぜん}」という{違|ちが}う{意味|いみ}を{表|あらわ}します。",
      en: "Patterns with だけ express three different meanings: \"at least give it a try\", \"as much as possible\", and \"naturally, because ~\"."
    },
    items: [
      { pattern: "Vだけ①", level: "N2", no: 47,
        ex: { ja: "今から行っても間に合わないかもしれないけど、行く**だけ**行ってみようよ。", en: "We might not make it even if we go now, but let's at least go and see." },
        note: "V-る + だけ + the same V (usually 〜てみる): \"at least do V anyway\". The speaker admits it may not work out, but trying costs little." },
      { pattern: "Vだけ②", level: "N2", no: 55,
        ex: { ja: "{春節|しゅんせつ}を前にリンさんはお{土産|みやげ}を持てる**だけ**持って、帰国した。", en: "With Chinese New Year coming up, Lin went home with as many gifts as they could carry." },
        note: "Potential verb (or V-たい / 好きな) + だけ + V: \"as much as one can (or wants)\". だけ marks the full extent, not \"only\"." },
      { pattern: "〜だけに", level: "N2", no: 105,
        ex: { ja: "この町は文化{遺産|いさん}に{登録|とうろく}されている**だけあって**、住民の{環境保護|かんきょうほご}に対する{意識|いしき}も高い。", en: "As you'd expect of a town registered as a cultural heritage site, its residents are also highly conscious of environmental protection." },
        note: "Plain form + だけあって / だけに: \"as you'd expect of\". The result lives up to the status, price or effort in the first half; だけあって is usually praise, だけに also allows bad results and \"all the more because\"." }
    ]
  },
  {
    key: "〜つつ",
    intro: {
      ja: "「つつ」は{書|か}き{言葉|ことば}的な{表現|ひょうげん}で、{同時|どうじ}の{動作|どうさ}、{逆接|ぎゃくせつ}、{進行中|しんこうちゅう}の{変化|へんか}を{表|あらわ}します。",
      en: "つつ is a written-style expression for simultaneous actions, contrast (\"although\"), and a change in progress."
    },
    items: [
      { pattern: "Vつつ", level: "N2", no: 30,
        ex: { ja: "クリスマスを前におもちゃ{売|う}り{場|ば}には、{喜|よろこ}ぶ子どもの顔を{思|おも}い{浮|う}かべ**つつ**、プレゼントを選ぶお父さんの{姿|すがた}が増えています。", en: "With Christmas approaching, more and more fathers can be seen in toy departments choosing presents while picturing their children's happy faces." },
        note: "V-ます stem + つつ: \"while\". A written, formal equivalent of ながら for two actions by the same subject; no noun or adjective forms." },
      { pattern: "Vつつも", level: "N2", no: 112,
        ex: { ja: "チョコレートを食べたらにきびが増えると知り**つつも**、つい手が{伸|の}びてしまうんです。", en: "Even though I know I'll get more pimples if I eat chocolate, I just can't help reaching for it." },
        note: "V-ます stem + つつも: \"although / even while\". Concessive: typically 思う / 知る followed by an action that goes against it (つい〜てしまう); も can be dropped, leaving つつ with this meaning." },
      { pattern: "Vつつある", level: "N2", no: 71,
        ex: { ja: "{異常気象|いじょうきしょう}の{影響|えいきょう}が世界{各地|かくち}に広がり**つつある**。", en: "The effects of extreme weather are gradually spreading around the world." },
        note: "V-ます stem + つつある: \"is in the process of ~ing\". Only with change verbs, for a change that is under way but not complete; not for ordinary actions (✗食べつつある)." }
    ]
  },
  {
    key: "〜つもり",
    intro: {
      ja: "「つもり」は{意志|いし}を{表|あらわ}すほか、{事実|じじつ}とは{違|ちが}う「そう{思|おも}って・そのように{考|かんが}えて」という{意味|いみ}でも{使|つか}われます。",
      en: "Besides intention, つもり is also used to mean \"feeling or believing that something is so\", when that differs from the facts."
    },
    items: [
      { pattern: "〜つもり", level: "N4",
        ex: { ja: "私は来年日本に留学する**つもりです**。", en: "I plan to go to Japan to study next year." },
        note: "V-る / V-ない + つもりだ: \"intend / plan to\"." },
      { pattern: "〜つもり①", level: "N2", no: 59,
        ex: { ja: "旅行に行った**つもりで**、この「{列車|れっしゃ}の旅」のDVDを見て、楽しみましょう。", en: "Let's enjoy this \"Train Journey\" DVD as though we'd actually gone on a trip." },
        note: "V-た / Nの + つもりで: \"imagining that / in the frame of mind of\". The speaker knows it isn't true but deliberately adopts that attitude (旅行に行ったつもりで, 本番のつもりで)." },
      { pattern: "〜つもり②", level: "N2", no: 120,
        ex: { ja: "説明書通りにやっている**つもり**なのに、どうしてもうまくできない。", en: "I think I'm doing it exactly as the instructions say, but I just can't get it to work." },
        note: "V-た / V-ている / V-る / Nの + つもりだ: \"believe that one has done / is ~\". Self-perception that often proves wrong, hence 〜つもりなのに / 〜つもりだったが; unlike ①, the person really believes it." }
    ]
  },
  {
    key: "〜とか",
    intro: {
      ja: "{同|おな}じ「とか」でも、{例|れい}を{並|なら}べる{使|つか}い{方|かた}と、{聞|き}いた{話|はなし}を{伝|つた}える{使|つか}い{方|かた}があります。",
      en: "The same とか can be used to list examples or to pass on something one has heard."
    },
    items: [
      { pattern: "〜とか", level: "N3",
        ex: { ja: "私の学校では{数学|すうがく}**とか**{物理|ぶつり}**とか**、{理科系|りかけい}の{科目|かもく}の時間数が多くて、いい先生がたくさんいる。", en: "At my school there are lots of class hours for science subjects like math and physics, and there are many good teachers." },
        note: "AとかBとか: \"things like A and B\". Lists examples; a casual version of や〜など." },
      { pattern: "〜とか", level: "N2", no: 107,
        ex: { ja: "{息子|むすこ}さんが今度{結婚|けっこん}なさる**とか**。おめでとうございます。", en: "I hear your son is getting married soon. Congratulations." },
        note: "Sentence-final plain form + とか: \"I hear that\". Passes on hearsay vaguely, without vouching for the details (softer than 〜そうだ); fine in polite small talk, as here." }
    ]
  },
  {
    key: "〜ところ／どころ",
    intro: {
      ja: "「ところ」は{動作|どうさ}の{段階|だんかい}を{表|あらわ}し、「どころ」は「それどころではない」「それとは{反対|はんたい}に」という{強|つよ}い{否定|ひてい}を{表|あらわ}します。",
      en: "ところ marks the stage of an action; どころ expresses strong negation: \"this is no time for that\" or \"quite the opposite\"."
    },
    items: [
      { pattern: "〜ところ", level: "N4",
        ex: { ja: "今から友達と出かける**ところです**。", en: "I'm just about to go out with a friend." },
        note: "V-る / V-ている / V-た + ところだ: \"be about to / be in the middle of / have just\"." },
      { pattern: "〜ところ", level: "N3",
        ex: { ja: "あくびした**ところ**を写真に{撮|と}られたって、{佐藤|さとう}さん、{怒|おこ}ってたよ。", en: "Sato was mad that someone snapped a photo of them mid-yawn." },
        note: "V-ている / V-た + ところを + 見る, 撮る, 見つかる, etc.: the moment in which someone is seen or caught doing something." },
      { pattern: "Vところだった", level: "N2", no: 89,
        ex: { ja: "{今朝|けさ}は30分も{寝坊|ねぼう}しちゃって、{危|あや}うく{遅刻|ちこく}する**ところだった**よ。", en: "I overslept by a whole 30 minutes this morning and was very nearly late." },
        note: "V-る + ところだった: \"almost / very nearly\" (but it didn't happen). Usually something bad narrowly escaped, often with 危うく or もう少しで." },
      { pattern: "〜どころじゃない", level: "N2", no: 38,
        ex: { ja: "A：学校が終わったらカラオケ行かない？\nB：カラオケ**どころじゃない**よ！　レポート、書かなきゃ。明日{締|し}め{切|き}りなんだ。", en: "A: Want to go to karaoke after school?\nB: Karaoke's out of the question! I have to write my report. It's due tomorrow." },
        note: "N / V-る + どころではない (casual どころじゃない): \"this is no time for / out of the question\". Circumstances are so pressing that the activity is impossible right now." },
      { pattern: "〜どころか", level: "N2", no: 83,
        ex: { ja: "A：旅行、どうだった？　{沖縄|おきなわ}はもう暑いんでしょうね。\nB：ううん。雨に降られて、暑い**どころか**すごく寒くて、{風邪|かぜ}ひきそうだったよ。", en: "A: How was your trip? I guess it's already hot in Okinawa.\nB: Nope. We got caught in the rain, and far from being hot, it was really cold. I nearly caught a cold." },
        note: "AどころかB: \"far from A (actually the opposite)\" or \"let alone A, not even B\". A is usually what the other person or the speaker expected; B contradicts it or goes further (with も / さえ)." }
    ]
  },
  {
    key: "〜にかかわらず",
    intro: {
      ja: "{形|かたち}は{似|に}ていますが、「にかかわらず」は「{関係|かんけい}なく」、「にもかかわらず」は「〜のに」という{逆接|ぎゃくせつ}です。",
      en: "They look alike, but にかかわらず means \"regardless of\", while にもかかわらず is a contrast meaning \"despite\"."
    },
    items: [
      { pattern: "〜にかかわらず", level: "N2", no: 5,
        ex: { ja: "{区民|くみん}センターの利用料金が{変更|へんこう}になりました。{和室|わしつ}は、{人数|にんずう}**にかかわらず**、2時間1,000円になります。", en: "The fees for the ward community center have changed. The Japanese-style room is now ¥1,000 for two hours, regardless of the number of people." },
        note: "N (a range or a pair of opposites: 人数, 天候, 好き嫌い) / V-る V-ない + にかかわらず: \"regardless of\". The rule or result holds in every case." },
      { pattern: "〜にもかかわらず", level: "N2", no: 21,
        ex: { ja: "彼の{努力|どりょく}**にもかかわらず**、{業績|ぎょうせき}はよくならなかった。", en: "Despite his efforts, the company's performance didn't improve." },
        note: "Plain form / N + にもかかわらず: \"despite / even though\". A formal のに: the actual outcome contradicts what the situation would lead one to expect." }
    ]
  },
  {
    key: "〜に{限|かぎ}る／{限|かぎ}り",
    intro: {
      ja: "「{限|かぎ}る」を{使|つか}った{文型|ぶんけい}は、{限定|げんてい}・{範囲|はんい}・「〜が{一番|いちばん}だ」など{意味|いみ}が{分|わ}かれます。{肯定|こうてい}か{否定|ひてい}か、{後|うし}ろに{何|なに}が{来|く}るかに{注意|ちゅうい}しましょう。",
      en: "Patterns with 限る divide into limitation, scope, \"~ is best\", and more. Pay attention to whether the form is affirmative or negative and to what follows it."
    },
    items: [
      { pattern: "Nに{限|かぎ}り", level: "N2", no: 3,
        ex: { ja: "本日**に{限|かぎ}り**、{通常価格|つうじょうかかく}100グラム1,500円の牛肉を{半額|はんがく}でご{提供|ていきょう}いたしております。", en: "Today only, we are offering beef that normally costs ¥1,500 per 100 grams at half price." },
        note: "N + に限り (or …に限ります): \"only / limited to N\". Official wording on notices and ads, usually for a benefit that only that group gets (半額, 無料)." },
      { pattern: "Nに{限|かぎ}って〜ない", level: "N2", no: 3,
        ex: { ja: "うちの子**に{限|かぎ}って**、{万引|まんび}きなんてするはずがありません。", en: "My child, of all people, would never shoplift." },
        note: "Trusted person + に限って + negative (〜はずがない, 〜わけがない): \"N, of all people, would never\". Strong trust that N is the exception (the 📎 note of #3)." },
      { pattern: "V{限|かぎ}り", level: "N2", no: 23,
        ex: { ja: "{高齢者|こうれいしゃ}でも、働ける**{限|かぎ}り**は働きたいと思っている人が多い。", en: "Even among the elderly, many people want to keep working as long as they can." },
        note: "V-る / V-ている + 限り: \"as long as\". The result holds while the condition lasts (V-ない限り = \"unless\"); also 知る限り, \"as far as I know\"." },
      { pattern: "Nに{限|かぎ}らず", level: "N2", no: 72, printedNo: 71, // the book prints 71 here (misprint); #72 is Nに限らず
        ex: { ja: "{環境対策|かんきょうたいさく}のためにも、夏**に{限|かぎ}らず**、{年間|ねんかん}を通して{節電|せつでん}を心がけるべきだ。", en: "For the environment's sake as well, we should make a point of saving electricity all year round, not just in summer." },
        note: "N + に限らず: \"not only N (but others too)\". Widens the scope, usually with も / でも / あらゆる in the second half; the opposite of Nに限り." },
      { pattern: "Nに{限|かぎ}って", level: "N2", no: 86,
        ex: { ja: "よく知らないやつ**に{限|かぎ}って**、{偉|えら}そうなことを言う。", en: "It's precisely the guys who don't know much who talk as if they're so important." },
        note: "N + に限って: \"it's precisely N (of all) that\". Critically points out a tendency of a type of person, or bad luck at the worst moment (急いでいるときに限って); unlike the 〜ない use, it expresses no trust." },
      { pattern: "〜に{限|かぎ}る②", level: "N2", no: 104,
        ex: { ja: "運動の後は、はちみつとレモンのジュース**に{限|かぎ}る**。", en: "After exercise, nothing beats honey-and-lemon juice." },
        note: "N / V-る / V-ない + に限る: \"nothing beats / the best thing is\". A confident personal opinion or piece of life wisdom; conversational, and not a restriction like Nに限り." }
    ]
  },
  {
    key: "〜にかけて",
    intro: {
      ja: "「NからNにかけて」は{時間|じかん}や{場所|ばしょ}の{範囲|はんい}、「Nにかけては」は{得意|とくい}な{分野|ぶんや}を{表|あらわ}します。",
      en: "NからNにかけて marks a span of time or space; Nにかけては marks a field in which someone excels."
    },
    items: [
      { pattern: "NからNにかけて", level: "N2", no: 32,
        ex: { ja: "本日、{九州|きゅうしゅう}**から**{四国地方|しこくちほう}**にかけて**、{梅雨|つゆ}{入|い}りしました。", en: "Today the rainy season began in the area from Kyushu to Shikoku." },
        note: "N₁ + から + N₂ + にかけて: \"from N₁ through N₂\". A rough span of time or area with fuzzy edges, unlike exact から〜まで; common in weather reports." },
      { pattern: "Nにかけては", level: "N2", no: 109,
        ex: { ja: "{日本酒|にほんしゅ}{造|づく}り**にかけては**彼の右に出る者はいない。", en: "When it comes to brewing sake, no one can beat him." },
        note: "N + にかけては: \"when it comes to N\". Narrows to one skill or field and makes a strong positive claim (誰にも負けない, 右に出る者はいない)." }
    ]
  },
  {
    key: "〜につき",
    intro: {
      ja: "{同|おな}じ「Nにつき」でも、「〜ごとに（{割合|わりあい}）」と「〜のため（{理由|りゆう}）」の{二|ふた}つの{意味|いみ}があります。",
      en: "The same Nにつき can mean \"per\" (a rate) or \"because of\" (a reason)."
    },
    items: [
      { pattern: "Nにつき", level: "N3",
        ex: { ja: "{当|とう}スポーツクラブ会員以外の方でも、1回**につき**2,000円で{施設|しせつ}をご利用いただけます。", en: "Even non-members of our sports club can use the facilities for 2,000 yen per visit." },
        note: "Number or unit + につき: \"per / for each\" (1回につき, 1人につき)." },
      { pattern: "Nにつき", level: "N2", no: 1,
        ex: { ja: "{清掃|せいそう}中**につき**、お{足元|あしもと}にご注意ください。", en: "Cleaning in progress — please watch your step." },
        note: "N + につき: \"due to N\". A stiff reason on notices and signs (清掃中, 雨天), followed by an announcement or request; no clause can come before it." }
    ]
  },
  {
    key: "〜のみ",
    intro: {
      ja: "「のみ」は「だけ」の{硬|かた}い{言|い}い{方|かた}で、「のみならず」は「だけでなく」の{意味|いみ}になります。",
      en: "のみ is a formal way of saying だけ, and のみならず means \"not only\" (だけでなく)."
    },
    items: [
      { pattern: "〜のみ", level: "N2", no: 58,
        ex: { ja: "お薬**のみ**ご{希望|きぼう}の方は、こちらの{箱|はこ}に{診察券|しんさつけん}をお入れください。", en: "If you only need your medication, please put your patient card in this box." },
        note: "N / V-る + のみ: \"only\". The formal, written だけ, common in notices (会員のみ, 現金のみ); also V-るのみだ, \"all that's left is to\"." },
      { pattern: "〜のみならず", level: "N2", no: 63,
        ex: { ja: "{現在|げんざい}、日本のコンビニは{若者|わかもの}**のみならず**、あらゆる{世代|せだい}の{人々|ひとびと}に{様々|さまざま}な{目的|もくてき}で利用されている。", en: "Today, convenience stores in Japan are used not only by young people but by people of every generation, for all sorts of purposes." },
        note: "Plain form (なA / N + である) + のみならず: \"not only ~ (but also)\". The formal だけでなく: widens the scope rather than restricting it, with も in the second half." }
    ]
  },
  {
    key: "〜ばかり",
    intro: {
      ja: "「ばかり」は「〜したばかり（{直後|ちょくご}）」「〜だけ（{偏|かたよ}り）」「どんどん〜」「だけでなく」「〜のせいで」など、{形|かたち}によって{意味|いみ}がいろいろ{変|か}わります。",
      en: "Depending on its form, ばかり can mean \"just did\", \"nothing but\", \"more and more\", \"not only\", \"because of (with a bad result)\", and so on."
    },
    items: [
      { pattern: "Vたばかり", level: "N3",
        ex: { ja: "父は昨日退院した**ばかり**なのに、今日から会社に出ている。", en: "My father only got out of the hospital yesterday, but he's already back at work as of today." },
        note: "V-た + ばかり: \"have just done\". Feels recent to the speaker even if some time has passed; often with のに for a contrast." },
      { pattern: "〜ばかり", level: "N3",
        ex: { ja: "最近雨**ばかり**で、{洗濯物|せんたくもの}が{乾|かわ}かなくて困っています。", en: "It's been nothing but rain lately, and it's a pain because the laundry won't dry." },
        note: "N / V-て + ばかり: \"nothing but / only\". Implies too much of one thing, often as a complaint." },
      { pattern: "〜ばかり", level: "N2", no: 115,
        ex: { ja: "{円高|えんだか}が進んで、{景気|けいき}が悪くなる**ばかりだ**。", en: "With the yen getting stronger, the economy just keeps getting worse." },
        note: "V-る + ばかりだ: \"just keeps getting ~\". A change moving steadily in one (usually bad) direction; the Plus of #115, same meaning as V-る一方だ." },
      { pattern: "〜ばかりか", level: "N3",
        ex: { ja: "今日は電車で足を{踏|ふ}まれた**ばかりか**、かばんに入れておいたサンドイッチもつぶされてしまった。", en: "Today on the train, not only did someone step on my foot, but the sandwich I had in my bag got squashed, too." },
        note: "Plain form + ばかりか: \"not only ~ but even\". Adds a second, more extreme fact, with も / まで / さえ." },
      { pattern: "〜ばかりでなく…も", level: "N3",
        ex: { ja: "{落語|らくご}は最近、お{年寄|としよ}り**ばかりでなく**若い女性**にも**人気が出てきた。", en: "Recently rakugo has become popular not only with elderly people but also with young women." },
        note: "〜ばかりでなく…も: \"not only ~ but also\". A neutral addition, like だけでなく." },
      { pattern: "〜ばかりに", level: "N2", no: 48,
        ex: { ja: "本当のことを言った**ばかりに**、彼を{怒|おこ}らせてしまった。", en: "Just because I told the truth, I ended up making him angry." },
        note: "Plain form (なA + な, N + である) + ばかりに: \"just because (of that one thing)\". Singles out one cause, often a small one, for a bad, regrettable result; a good result takes おかげで. V-たいばかりに (*just because one wanted ~ so badly*) is the exception, followed by the lengths someone went to." }
    ]
  },
  {
    key: "〜まい",
    intro: {
      ja: "「まい」は{否定|ひてい}の{推量|すいりょう}や{意志|いし}を{表|あらわ}し、「VかVまいか」は「するかしないか」{迷|まよ}う{様子|ようす}を{表|あらわ}します。",
      en: "まい expresses negative conjecture or negative will; VかVまいか describes wavering over whether or not to do something."
    },
    items: [
      { pattern: "Vまい", level: "N2", no: 93,
        ex: { ja: "世界{経済|けいざい}は{状況|じょうきょう}から見て、すぐに{好転|こうてん}することはある**まい**。わが社も{早急|さっきゅう}に{対策|たいさく}を考えなければならない。", en: "Judging by the current situation, the world economy is unlikely to recover any time soon. Our company, too, needs to work out countermeasures right away." },
        note: "V-る + まい: \"surely won't / there's little chance that\". A formal negative conjecture based on the situation (≈ 〜ないだろう), often 〜ことはあるまい; the same form also expresses firm negative resolve (\"I will never\")." },
      { pattern: "VかVまいか", level: "N2", no: 123,
        ex: { ja: "彼は夏休みに国へ**帰ろうか帰るまいか**と{悩|なや}んでいるらしい。", en: "Apparently he's agonizing over whether or not to go back to his country for summer vacation." },
        note: "V-（よ）う + か + V-る + まいか: \"whether to do it or not\". The same verb twice, followed by 迷う / 悩む; literary (in speech, 〜しようかどうか)." }
    ]
  },
  {
    key: "〜もの／もん",
    intro: {
      ja: "「もの」を{使|つか}った{文型|ぶんけい}には、{理由|りゆう}・{本質|ほんしつ}・{回想|かいそう}・{忠告|ちゅうこく}・{感情|かんじょう}・{逆接|ぎゃくせつ}など{多|おお}くの{意味|いみ}があります。「もん」は{話|はな}し{言葉|ことば}の{形|かたち}です。",
      en: "Patterns with もの have many meanings: reason, the nature of things, reminiscence, advice, feelings, contrast and more. もん is the spoken form."
    },
    items: [
      { pattern: "〜もので", level: "N3",
        ex: { ja: "{慣|な}れない**ものですから**、ご{迷惑|めいわく}をおかけするかもしれませんが、どうぞよろしくお願いします。", en: "I'm not used to this yet, so I may cause you some trouble, but I hope you'll bear with me." },
        note: "Plain form + もので / ものですから: \"because (I'm afraid)\". Offers a reason as a polite excuse or apology; casual もんで." },
      { pattern: "Vものだ①", level: "N2", no: 13,
        ex: { ja: "A：うちの{息子|むすこ}は最近{口答|くちごた}えばかりして、ちっとも言うことを聞かないんですよ。\nB：子どもは親に{反抗|はんこう}する**ものです**から、それも{成長|せいちょう}のひとつですよ。", en: "A: My son keeps talking back lately and never listens to a word I say.\nB: Kids naturally rebel against their parents, so that's just part of growing up." },
        note: "V-る / V-ない + ものだ: \"that's how people are / one should\". A general truth about human nature or a common-sense norm; can sound preachy to superiors." },
      { pattern: "〜ものだ②", level: "N2", no: 132,
        ex: { ja: "昔はよく友達と近くの川で{泳|およ}いだ**ものだ**。", en: "I often used to swim in the nearby river with my friends." },
        note: "V-た + ものだ: \"used to (fondly)\". Nostalgic recollection of a repeated past habit (with よく, 昔は); unlike ①, it's about the speaker's own past." },
      { pattern: "〜ものではない", level: "N2", no: 46,
        ex: { ja: "{楽|らく}をしてお金をもうけようなんて考える**もんじゃない**。", en: "You shouldn't even think about trying to make easy money." },
        note: "V-る + ものではない (もんじゃない): \"one shouldn't\". A warning grounded in common sense or social norms — the negative of ものだ①." },
      { pattern: "Nというものだ", level: "N2", no: 52,
        ex: { ja: "A：先生、{山下|やました}君のせいで私たちのグループだけ、作品が{完成|かんせい}していないんです。\nB：困ったときに助け合うのが友達**というものだ**ろ。手伝ってあげなさい。", en: "A: Because of Yamashita, our group is the only one that hasn't finished its project.\nB: Helping each other out when someone's in trouble — that's what friends are for, isn't it? Go and help out." },
        note: "N + というものだ: \"that's what N is (really about)\". Presents the speaker's view as common sense or the essence of N (それが友達というものだ), not a personal opinion." },
      { pattern: "〜というものではない", level: "N2", no: 25,
        ex: { ja: "勉強は今日やれば明日やらなくていい**というものではない**。", en: "It's not as if studying today means you don't have to study tomorrow." },
        note: "Plain form + というものではない: \"it's not necessarily the case that\". Rejects an easy formula people tend to believe (〜ばいいというものではない); a partial, not total, denial." },
      { pattern: "〜ものがある", level: "N2", no: 92,
        ex: { ja: "A：この町、ずいぶん変わりましたね。\nB：ええ、便利にはなったんですが、違う町になってしまったみたいで、さびしい**ものがあります**よ。", en: "A: This town has really changed, hasn't it?\nB: Yes. It's become more convenient, but it feels like it's turned into a different town, and there's something sad about that." },
        note: "Plain form (present only) + ものがある: \"there's something ~ about it\". The speaker's strong impression, without pinning down its cause (さびしいものがある)." },
      { pattern: "〜ものの", level: "N2", no: 39,
        ex: { ja: "水泳教室に通ってはいる**ものの**、いまだに25メートルしか泳げない。", en: "Although I do go to swimming classes, I still can't swim more than 25 meters." },
        note: "Plain form + ものの: \"although / it's true that ~, but\". Admits a fact, then says the expected follow-up didn't happen; more written and emphatic than けど, often with は (通ってはいるものの)." },
      { pattern: "Vものなら", level: "N2", no: 122,
        ex: { ja: "子どものころから{星|ほし}が好きだったので、行ける**ものなら**{宇宙|うちゅう}旅行に行ってみたいと思っています。", en: "I've loved the stars since I was a child, so if I possibly could, I'd love to go on a trip into space." },
        note: "Potential verb + ものなら: \"if I possibly could\". A longing for something the speaker thinks is nearly impossible, followed by 〜たい (often the same verb: 行けるものなら行きたい)." },
      { pattern: "〜ものか", level: "N2", no: 51,
        ex: { ja: "こんなサービスの悪い店には二度と来る**もんか**。", en: "I'm never coming back to a store with service this bad!" },
        note: "V-る / いA / なAな + ものか (casual もんか): \"never! / as if!\". A rhetorical question used as a fierce refusal or flat denial." },
      { pattern: "〜もん", level: "N2", no: 56,
        ex: { ja: "A：そんなにたくさんお{土産|みやげ}買うの？\nB：だって、この{人形|にんぎょう}もこのお{菓子|かし}も日本じゃなきゃ、買えないんだ**もん**。", en: "A: You're buying that many souvenirs?\nB: But you can't get these dolls or these sweets anywhere but Japan!" },
        note: "Sentence-final plain form + もん (もの): \"but ~, you know\". A casual, self-justifying or childlike excuse, often with だって (〜んだもん)." }
    ]
  },
  {
    key: "〜よう",
    intro: {
      ja: "「よう」は{推量|すいりょう}・{比喩|ひゆ}・{例示|れいじ}を{表|あらわ}すほか、「ようなら」「ようでは」「ようがない」のような{形|かたち}で{条件|じょうけん}や{方法|ほうほう}の{意味|いみ}にもなります。",
      en: "よう expresses inference, resemblance and examples, and in forms like ようなら, ようでは and ようがない it also takes on meanings of condition or method."
    },
    items: [
      { pattern: "〜ようだ", level: "N4",
        ex: { ja: "A：教室の電気がついていますよ。\nB：{誰|だれ}かいる**ようです**ね。", en: "A: The lights in the classroom are on.\nB: It seems someone is there." },
        note: "Plain form + ようだ: \"it seems / appears\". An inference from what the speaker observes." },
      { pattern: "〜ようだ", level: "N3",
        ex: { ja: "あのえんぴつの**ような**形をしている建物は、電話会社のビルです。", en: "That pencil-shaped building is the telephone company's building." },
        note: "Nのようだ / Nのような + N: \"like / resembling\". A simile; here ような describes the building's shape." },
      { pattern: "〜ような", level: "N3",
        ex: { ja: "インフルエンザの**ような**ほかの人にうつる病気になったら、治るまで学校へ来てはいけないことになっています。", en: "If you catch an illness that spreads to other people, such as influenza, you're not allowed to come to school until you've recovered." },
        note: "N + のような + N: \"such as N\". Gives an example of a category." },
      { pattern: "Vかのようだ", level: "N3",
        ex: { ja: "リンさんの部屋はまるで{泥棒|どろぼう}が入った**かのように**{散|ち}らかっている。", en: "Lin's room is such a mess, it's as if a burglar had broken in." },
        note: "Plain form + かのようだ / かのように: \"as if\". Compares with something that isn't actually true, often with まるで." },
      { pattern: "〜ようなら", level: "N3",
        ex: { ja: "A：すみません。仕事がまだ終わらなくて、ちょっと遅くなりそうなんです。\nB：そうですか。じゃあ、6時過ぎる**ようなら**先に行ってますね。", en: "A: Sorry. My work isn't finished yet, and it looks like I'll be a bit late.\nB: I see. Well then, if it looks like it'll be past six, I'll go on ahead." },
        note: "Plain form + ようなら: \"if it looks like / if it turns out that\". A condition that depends on how things develop; the second half is the speaker's plan or advice." },
      { pattern: "Vようでは", level: "N2", no: 84,
        ex: { ja: "おしゃれに{全然|ぜんぜん}気を使わない**ようじゃ**、社会人としてまずいんじゃない？", en: "If you don't pay any attention to how you dress, that's a problem for a working adult, isn't it?" },
        note: "V-る / V-ない + ようでは (casual ようじゃ): \"if you're (still) the kind who ~\". Criticizes a current state by predicting a bad result (まずい, やっていけない)." },
      { pattern: "Vようがない", level: "N2", no: 44,
        ex: { ja: "出張の予定だったが、{大雪|おおゆき}で{飛行機|ひこうき}が{欠航|けっこう}してしまったので行き**ようがない**。", en: "I was supposed to go on a business trip, but the flight was canceled because of heavy snow, so there's no way I can go." },
        note: "V-ます stem + ようがない: \"there's no way to\". The means (information, transportation, contact) are missing, so the action is impossible." }
    ]
  },
  {
    key: "〜ように",
    intro: {
      ja: "「ように」は{目的|もくてき}・{努力|どりょく}・{間接的|かんせつてき}な{命令|めいれい}・{変化|へんか}・{仕組|しく}みなどを{表|あらわ}します。",
      en: "ように expresses purpose, effort, indirect commands, change, and how something is designed to work."
    },
    items: [
      { pattern: "〜ように", level: "N4",
        ex: { ja: "{約束|やくそく}の時間に遅れない**ように**、早く家を出ました。", en: "I left home early so that I wouldn't be late for my appointment." },
        note: "V-る / V-ない / potential verb + ように: \"so that\". Purpose, usually with non-volitional verbs, potential verbs or ない-forms." },
      { pattern: "〜ようにする", level: "N4",
        ex: { ja: "A：{健康|けんこう}のために、少し運動したほうがいいですよ。\nB：じゃ、これから毎日1時間くらい歩く**ようにします**。", en: "A: You should get a little exercise for your health.\nB: Then from now on I'll try to walk for about an hour every day." },
        note: "V-る / V-ない + ようにする: \"try to / make a point of\". A conscious, ongoing effort." },
      { pattern: "Vように言う", level: "N3",
        ex: { ja: "お母さんからも勉強する**ように言って**ください。", en: "Could you please also tell your child to study?" },
        note: "V-る / V-ない + ように言う: \"tell someone to\". Reports an instruction or request indirectly (also ように頼む / 注意する)." },
      { pattern: "〜ようになる①", level: "N4",
        ex: { ja: "日本へ来たときは、{納豆|なっとう}が食べられませんでしたが、今は食べられる**ようになりました**。", en: "When I came to Japan I couldn't eat natto, but now I can." },
        note: "Potential verb + ようになる: \"become able to\". A newly acquired ability." },
      { pattern: "〜ようになる②", level: "N4",
        ex: { ja: "日本へ来てから、自分で料理を作る**ようになりました**。", en: "Since coming to Japan, I've started cooking for myself." },
        note: "Non-potential verb + ようになる: \"come to / start to\". A change in habit or behavior." },
      { pattern: "Vようになっている", level: "N2", no: 81,
        ex: { ja: "ほこりが{鼻|はな}に入るとくしゃみが出て、{自然|しぜん}にそれを外へ出す**ようになっています**。", en: "When dust gets into your nose, you sneeze; the body is built to expel it naturally that way." },
        note: "V-る / V-ない + ようになっている: \"is designed so that\". How a machine, system or the body works automatically when something happens; not a change over time like ようになる." }
    ]
  },
  {
    key: "〜わけ",
    intro: {
      ja: "「わけ」は{理由|りゆう}や{当然|とうぜん}の{結論|けつろん}を{表|あらわ}し、{否定|ひてい}の{形|かたち}によって「ありえない」「〜とは{限|かぎ}らない」「できない」と{意味|いみ}が{変|か}わります。",
      en: "わけ expresses a reason or a natural conclusion, and its negative forms change the meaning to \"impossible\", \"not necessarily\" or \"can't\"."
    },
    items: [
      { pattern: "〜わけがない", level: "N3",
        ex: { ja: "相手は世界でトップのチームだし、がんばったって、{勝|か}てる**わけがない**。", en: "Our opponent is the top team in the world, so there's no way we can win no matter how hard we try." },
        note: "Plain form + わけがない: \"there's no way that\". A firm, total denial of possibility (≈ はずがない)." },
      { pattern: "〜わけではない", level: "N2", no: 19,
        ex: { ja: "退院しても、病気が{完全|かんぜん}に治った**わけではありません**から、{無理|むり}をしないでください。", en: "Even though you've been discharged, that doesn't mean you're completely cured, so please don't overdo it." },
        note: "Plain form + わけではない: \"it's not (necessarily) that\". A partial or soft denial correcting an assumption, unlike the total denial of わけがない." },
      { pattern: "〜わけにはいかない", level: "N2", no: 57,
        ex: { ja: "A：Bさん、{顔色|かおいろ}悪いよ。今日は{無理|むり}しないで{早退|そうたい}したら？\nB：でも、午後から大事な会議があるから、帰る**わけにはいかなくて**…。", en: "A: You look pale. Why don't you take it easy and go home early today?\nB: But I have an important meeting this afternoon, so I can't very well go home…" },
        note: "V-る + わけにはいかない: \"can't (very well)\". Possible in principle but ruled out by social, moral or situational reasons; V-ない + わけにはいかない = \"have to\"." },
      { pattern: "〜わけだ①", level: "N2", no: 82,
        ex: { ja: "A：このチョコ、1{粒|つぶ}1,000円もするんだよ。\nB：え！　本当？　じゃあ、おいしい**わけ**よね。", en: "A: This chocolate costs 1,000 yen per piece.\nB: What? Really? No wonder it's delicious, then." },
        note: "Plain form + わけだ: \"no wonder / so that's why\". The speaker learns the reason for something already known and is convinced (often with どうりで, なるほど)." },
      { pattern: "〜わけだ②", level: "N2", no: 134,
        ex: { ja: "食生活の{改善|かいぜん}と{適度|てきど}な運動によって{免疫力|めんえきりょく}が高まり、病気にかかりにくくなる**わけです**。", en: "Improving your diet and getting moderate exercise strengthens your immune system, which is why you become less likely to get sick." },
        note: "Plain form + わけだ: \"which means / so naturally\". Explains to others that a result follows logically from the stated causes; common in explanations and essays, with no sudden realization as in ①." }
    ]
  }
]);
