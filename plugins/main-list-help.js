const imglist = 'https://telegra.ph/file/8bd4816b5ed78b2da5bc5.jpg'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => conn.sendFile(m.chat, imglist, 'darkman.jpg', `
❆╼━━❆ •﹝📜﹞• ❆━━╾❆

*❮ توضیح اوامر بوت'رافـاييـل'🤖 ❯*

*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏👑˹ قـسـم الـمـجـمـوعـات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.منشن* مع کتابة رساله ، هو ان المشرف یکتب الامر و البوت یمنشن جمیع الأعضاء في الجروب مع قائمة المناشن
•
*مثال :* .منشن ( الرسالة )
───── • ◈ • ─────
❦┇امر *.لمنشن* هو ان المشرف یرد علی رسالة *نصية - فيديو - صورة و ...* و البوت یعید الارسال الرساله و یجعله منشن جماعي للاعضاء
───── • ◈ • ─────
❦┇امر *.مخفي* مع کتابة رساله ، هو ان المشرف یکتب الامر *مع رساله او بدون رساله* و البوت یمنشن منشن جماعي للاعضاء  بدون قائمة المنشن 
•
*مثال :* .مخفي ( الرسالة )
───── • ◈ • ─────
❦┇امر *.الاداره* یمنشن مشرفي المجموعة
───── • ◈ • ─────
❦┇امر *.طرد* مع منشن العضو ، طرد العضو من الجروب الا مؤسس الجروب ... *الا اذا کان البوت مشرفا اولا*  ...
•
*مثال :* .طرد @...
───── • ◈ • ─────
❦┇امر *.ترقیة* مع منشن العضو ، هو ان المشرف یمنشن العضو و البوت یخلیه مشرف المجموعه ... *الا اذا کان البوت مشرفا اولا*  ...
•
*مثال :* .ترقية @...
───── • ◈ • ─────
❦┇امر *.خفض* مع منشن العضو ، هو ان المشرف یمنشن المشرف التاني و البوت یشیل الاشراف منه ... *الا اذا کان البوت مشرفا اولا*  ...
•
*مثال :*  .خفض @...
───── • ◈ • ─────
❦┇امر *.حذف* مع الرد علی رساله ، البوت یحذف الرسالة من قبل المشرف في الجروب عن الاعضاء و لازم ترد علی رسالة *نصية - فيديو - صورة و...* ... *الا اذا کان البوت مشرفا اولا*  ...
───── • ◈ • ─────
❦┇امر *.جروب* ، هو ان البوب یغلق شات الجروب و یفتحه ... *الا اذا کان البوت مشرفا اولا*  ...
•
*مثال :* .جروب فتح╎.جروب اغلاق
───── • ◈ • ─────
❦┇امر *.جروبي* هو ان المشرف یکتب هذا الامر و البوت یرسل معلومات الجروب مع الوصف
───── • ◈ • ─────
❦┇امر *.انذار* مع کتابة السبب ، هو ان المشرف یکتب الامر مع کتابة السبب للعضو و بعد تلقي العضو *خمس انذار* الانذار *السادس* یطرد العضو من الجروب ، الرد بالامر علی *رساله او منشن العضو*
•
*مثال :* .انذار ( السبب ) ╎.انذار @... سبام
───── • ◈ • ─────
❦┇امر *.رفع-انذار* مع منشن العضو ، هو ان المشرف بعد ما اعطی العضو انذار *واحد او ...* من اصل *خمس* یمکن کتابة هذا الامر لحذف الانذار
•
*مثال :* .رفع-انذار @...
───── • ◈ • ─────
❦┇امر *.الانذارات* هو ان العضو او المشرف یشوف عدد تلقي انذاراته من قبل المشرف بکتابته هذا الامر
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🎴˹ قـسـم الـتحـويـل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.ملصق* مع الرد علی *صوره و ...* ، هو ان العضو یستخدم هذا الامر بالرد علی *صوره - فيديو* و البوت یحوله لملصق
───── • ◈ • ─────
❦┇امر *.حقوق* مع الرد علی *ملصق* ، هو ان العضو یستخدم هذا الامر لتغییر حقوق الملصقات
•
*مثال :* .حقوق دارك مان| dark man 
───── • ◈ • ─────
❦┇امر *.لفيديو* هو ان العضو یستخدم هذا الامر بالرد علی *ملصق متحرك* و البوت یرسل الملصق علی شکل فيديو
───── • ◈ • ─────
❦┇امر *.لصوت* هو ان العضو یرد علی *فيديو* باستخدام هذا الامر و البوت یسحب الصوت من الفيديو ویرسل للعضو *صوت الفيديو او mp3*
───── • ◈ • ─────
❦┇امر *.لصوره* هو ان العضو یرد علی *ملصق ثابت* باستخدام هذا الامر و البوت یحول الملصق لصوره
───── • ◈ • ─────
❦┇امر *.دائري* مع الرد علی *صوره* ، هو ان العضو یستخدم هذا الامر بالرد علی صوره و البوت یحوله لملصق دائري الشكل
───── • ◈ • ─────
❦┇امر *.اکتب* هو ان العضو یکتب الامر و امامه *النص* و یحوله البوت الی ملصق علی شکل رساله مع النص
*( ملاحظه : کتابة النص بالعربي یجعل النص في الملصق رأسا على عقب╎الحد الاقصی للنص 30 احرف )*
•
*مثال :* .اكتب dark man 
───── • ◈ • ─────
❦┇امر *.اتتب* هو ان العضو یکتب الامر و امامه *النص* و یحوله البوت الی ملصق کتابه متحرکه
*( ملاحظه : الحد الاقصی للنص 30 احرف )*
•
*مثال :* .اكتب دارك مان
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🔧˹ قـسـم الـأداوات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.خط* مع کتابة رساله ، هو ان العضو یکتب الامر و *النص باللغة الإنجلزیة* و یرسل البوت قائمة الخطوط النص علی فونتات متنوعة
•
*مثال :* .خط dark man
───── • ◈ • ─────
❦┇امر *.باركود* مع کتابة رساله ، هو ان العضو یکت *نص او رابط و ...* والبوت یرسل علی شکل باركود *Qr*
───── • ◈ • ─────
❦┇امر *.لرابط* هو ان العضو یرد علی *صوره - فيديو* باستخدام هذا الامر و البوت یرسله علی شکل رابط
───── • ◈ • ─────
❦┇امر *.انطق* مع کتابة النص ، هو ان العضو یکتب الامر و امام الامر النص و البوت یرسل النص علی شكل رسالة صوتیه
•
*مثال :* .انطق دارك مان
───── • ◈ • ─────
❦┇امر *.دائم* هو اذا ارسل احد *صوره او فيديو* یفتح *لمرة واحده* ، العضو یستخدم الامر بالرد علی ذاك الرساله و البوت یرسل الصوره او الفیدیو بشکل عادي
───── • ◈ • ─────
❦┇امر *.المزید* هو ان العضو یکتب الامر و امامه النص و البوت یخلیه لرساله *قراءة المزید*
•
*مثال :* .المزيد دارك مان
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🕹️˹ قـسـم التـرفـیــه╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.إكس* هو ان العضو یکتب الامر *مع کتابة رقم او اسم للغرفة* و العضو التالي یکتب نفس الامر و اسم او رقم الغرفة لبدأ لعبة (❎⭕)
•
*مثال :*
العضو الاول ( .إكس 1 )╎العضو التاني ( .إكس 1 )
───── • ◈ • ─────
❦┇امر *.حذفإكس* هو عندما اذا بدأ العضو بکتابة امر اللعبة *إكس* یمکنه حذف اللعبة باستخدامه هذا الامر
───── • ◈ • ─────
❦┇امر *.البینغ* لتشوف سرعة الاینترنت البوت
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🔍˹ قـسـم البـحـث╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.یوتیوب* بحث في الیوتیوب
•
*مثال :* .يوتيوب edit one piece 
───── • ◈ • ─────
❦┇امر *.بینترست* بحث صور من بينترست
•
*مثال :* .بينترست Luffy 
───── • ◈ • ─────
❦┇امر *.صورة* بحث صور من جوجل
•
*مثال :* .صورة Luffy 
───── • ◈ • ─────
❦┇امر *.جوجل* بحث في جوجل
•
*مثال :* .جوجل متی اخترع اول كمبيوتر
───── • ◈ • ─────
❦┇امر *. ويكيبيديا* بحث من ويكيبيديا
•
*مثال :* .ويكيبيديا سلطنة عمان
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏📥˹ قـسـم التحـمـيل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.درايف* تحمیل من جوجل درایف مع ارسال رابط
•
*مثال :* .درایف ( رابط )
───── • ◈ • ─────
❦┇امر *.يوتيوب2* تحمیل الفيديوهات من الیوتيوب مع ارسال رابط
•
*مثال :* .يوتيوب2 ( رابط )
───── • ◈ • ─────
❦┇امر *.تيكتوك* تحمیل الفيديوهات من تیك توك مع ارسال رابط
•
*مثال :* .تيكتوك ( رابط )
───── • ◈ • ─────
❦┇امر *.انستا* تحمیل الفيديوهات من انستاغرام مع ارسال رابط
•
*مثال :* .انستا ( رابط )
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏👥˹ قـسـم الاعـضــاء╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
❦┇امر *.قرآن* هو ان العضو یکتب رقم السوره  القرآن من *1 سورة الفاتحة* حتی *114 سورة الناس* و البوت يرسل دليل السورة و توضیحها ومع ارسال رساله صوتیه
•
*مثال :* قرآن 1╎.قرآن 100
───── • ◈ • ─────
❦┇امر *.بوت* ,هو ذكاء اصطناعي *بـChatGPT*
•
*مثال :* .بوت انجازات رونالدو
───── • ◈ • ─────
❦┇امر *.المطور* یرسل البوت رقم مطور البوت *رافـاييـل*
───── • ◈ • ─────
❦┇امر *.بروفايل* البوت یرسل معلومات ملفك الشخصي
───── • ◈ • ─────
❦┇امر *.اختفاء* هو ان العضو یکتب الامر مع کتابة السبب لإختفائه انه راح یختفي لدقائق او ساعات من الجروب ومن یمنشنه او یرد احد علی رسالته راح یرسل البوت للشخص الي منشنه انه في وضع الاختفاء و مع سبب عدم وجوده والوقت الي غاب من وجوده في الجروب
•
*مثال:* .اختفاء رایح اصلي
───── • ◈ • ─────
❦┇امر *.اقتباس* یرسل البوت رساله معبرة
───── • ◈ • ─────
❦┇امر *.تسجيل* ، تسجیل اسم و العمر في البوت
•
*مثال :* .تسجيل دارك مان.18
───── • ◈ • ─────
❦┇امر *.الدعم* یرسل البوت رابط جروب البوتات للتحدیثات
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*

*بــــــℝ𝔸ℙℍ𝔸𝔼𝕃ــــــوت*

❆╼━━❆ •﹝📜﹞• ❆━━╾❆
`.trim(), m)
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['المساعده','المساعدة','مساعدة','مساعده'] 

export default handler
