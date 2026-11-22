import type { ToolLocaleOverride } from '../../types';

/**
 * Arabic overrides — Batch 2: Developer tools (14 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Original Arabic copy, SEO-optimized for Arabic search intent.
 * Slugs are romanized Arabic, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const AR_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-tashfir-wa-fakk',
    name: 'مشفّر Base64 وفاكّ التشفير',
    shortDescription:
      'حوّل النص إلى Base64 قياسي أو آمن للروابط، وفكّ تشفير سلاسل Base64 UTF-8 بأمان داخل متصفحك.',
    keywords: [
      'تشفير base64 أونلاين',
      'فك تشفير base64',
      'تحويل النص إلى base64',
      'تحويل base64 إلى نص',
      'مشفّر base64 مجاني',
      'فك تشفير base64 أونلاين',
      'تشفير base64 آمن للروابط',
      'أداة base64 أونلاين',
      'تشفير الإيموجي base64',
    ],
    seo: {
      title: 'مشفّر وفاكّ Base64 أونلاين مجانًا بسهولة | UtilityFlow',
      description:
        'حوّل نص UTF-8 إلى Base64 أو فكّ تشفير Base64 إلى نص مقروء، مع خيار آمن للروابط، وكل ذلك داخل متصفحك دون إرسال بياناتك إلى أي خادم. جرّبه الآن مجانًا اليوم.',
      primaryKeyword: 'تشفير base64 أونلاين',
      secondaryKeywords: ['فك تشفير base64', 'تحويل النص إلى base64', 'تحويل base64 إلى نص', 'مشفّر base64 مجاني'],
      longTailKeywords: ['كيفية تشفير نص فيه إيموجي إلى base64', 'فك تشفير base64 آمن للروابط بدون حشو', 'محول base64 مجاني داخل المتصفح', 'كيفية فك تشفير سلسلة base64 فيها إيموجي'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'حوّل سلاسل UTF-8، بما فيها الحروف المُشكَّلة والإيموجي، إلى Base64 قياسي أو آمن للروابط وفق RFC 4648، أو فكّ تشفير Base64 إلى نص عادي مع التحقق الفوري.',
  },
  'url-encoder-decoder': {
    slug: 'url-tashfir-wa-fakk',
    name: 'مشفّر / فاكّ روابط URL',
    shortDescription:
      'شفّر قيم الاستعلام أو الرابط الكامل بترميز النسبة المئوية، وفكّ تشفيرها مع عرض المضيف والمسار ومعاملات الاستعلام.',
    keywords: [
      'تشفير الروابط أونلاين',
      'فك تشفير الروابط',
      'ترميز url أونلاين',
      'فك ترميز url',
      'محلل الروابط أونلاين',
      'ترميز النسبة المئوية',
      'أداة تشفير url مجانية',
      'تشفير معاملات الاستعلام',
      'فك تشفير رابط أونلاين',
    ],
    seo: {
      title: 'مشفّر وفاكّ روابط URL أونلاين مجانًا | UtilityFlow',
      description:
        'شفّر الروابط أو فكّ تشفيرها بوضعي encodeURIComponent وencodeURI، واعرض تفصيل البروتوكول والمضيف والمسار ومعاملات الاستعلام كاملة. احصل على النتيجة فورًا.',
      primaryKeyword: 'تشفير الروابط أونلاين',
      secondaryKeywords: ['فك تشفير الروابط', 'ترميز url أونلاين', 'ترميز النسبة المئوية', 'محلل الروابط أونلاين'],
      longTailKeywords: ['ما الفرق بين encodeuri وencodeuricomponent', 'كيفية فك تشفير معاملات الاستعلام في الرابط', 'تشفير الأحرف الخاصة في الرابط بالنسبة المئوية', 'كيفية تشفير قيمة استعلام دون كسر علامة &'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'شفّر قيمة معامل استعلام أو رابطًا كاملًا بأمان، وفكّ تشفير السلاسل المُرمَّزة بالنسبة المئوية (%20 و%3A و+)، واعرض تفصيل كل معامل استعلام في جدول مباشر.',
  },
  'uuid-generator': {
    slug: 'muwallid-uuid',
    name: 'مولّد UUID (v4 وv7)',
    shortDescription:
      'أنشئ UUID v4 عشوائية مشفّرة وUUID v7 مرتبة زمنيًا وفق RFC 9562، واحدًا أو دفعات كثيرة دفعة واحدة.',
    keywords: [
      'مولد uuid أونلاين',
      'إنشاء uuid مجاني',
      'مولد guid أونلاين',
      'uuid v4 أونلاين',
      'ما هو uuid v7',
      'توليد uuid عشوائي',
      'مولد uuid بالجملة',
      'أداة uuid مجانية',
      'إنشاء معرف فريد أونلاين',
    ],
    seo: {
      title: 'مولّد UUID v4 وv7 أونلاين مجانًا وبسهولة | UtilityFlow',
      description:
        'أنشئ حتى 100 معرف UUID v4 عشوائي أو UUID v7 مرتب زمنيًا وفق RFC 9562، مع خيارات الأحرف الكبيرة والشرطات والأقواس، مجانًا. احصل على النتيجة فورًا اليوم.',
      primaryKeyword: 'مولد uuid أونلاين',
      secondaryKeywords: ['إنشاء uuid مجاني', 'مولد guid أونلاين', 'uuid v4 أونلاين', 'ما هو uuid v7'],
      longTailKeywords: ['كيفية إنشاء عدة uuid v4 وv7 دفعة واحدة', 'ما هو uuid v7 المرتب زمنيًا وفق rfc 9562', 'مولد uuid بأحرف كبيرة وبدون شرطات', 'أداة مجانية لإنشاء 100 uuid دفعة واحدة'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'أنشئ معرفًا واحدًا أو عدة معرفات دفعة واحدة — UUID v4 عشوائية مشفّرة وUUID v7 مرتبة حسب الطابع الزمني، مباشرة من Web Crypto API، مع خيارات تنسيق متعددة.',
  },
  'regex-tester': {
    slug: 'mukhtabir-regex',
    name: 'مختبِر التعبيرات النمطية Regex',
    shortDescription:
      'اختبر تعبيرات JavaScript النمطية مع تمييز المطابقات المباشر والمجموعات الملتقطة والأعلام ومعاينة الاستبدال.',
    keywords: [
      'مختبر regex أونلاين',
      'اختبار التعبيرات النمطية',
      'مختبر regex جافاسكربت',
      'فاحص regex أونلاين',
      'تصحيح regex أونلاين',
      'أداة regex مجانية',
      'اختبار نمط regex',
      'ما هي مجموعات الالتقاط',
      'تعلم regex للمبتدئين',
    ],
    seo: {
      title: 'مختبِر Regex: اختبر تعبيرات جافاسكربت | UtilityFlow',
      description:
        'اختبر التعبيرات النمطية مباشرة مع الأعلام g وi وm وs، مع تمييز المطابقات وفحص المجموعات الملتقطة ومعاينة الاستبدال، مجانًا وبدون تسجيل. نتيجة فورية ودقيقة.',
      primaryKeyword: 'مختبر regex أونلاين',
      secondaryKeywords: ['اختبار التعبيرات النمطية', 'مختبر regex جافاسكربت', 'فاحص regex أونلاين', 'تصحيح regex أونلاين'],
      longTailKeywords: ['كيفية اختبار مجموعات الالتقاط في regex جافاسكربت أونلاين', 'أداة تمييز مطابقات regex المباشرة', 'معاينة استبدال regex مع مجموعات الالتقاط', 'كيفية تصحيح regex مع التمييز المباشر'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'صحّح تعبيرات JavaScript النمطية تفاعليًا — تمييز مباشر للمطابقات، ومواضع المطابقة، والمجموعات الملتقطة المرقّمة، ومفاتيح الأعلام، ومعاينة الاستبدال.',
  },
  'jwt-decoder': {
    slug: 'fakk-tashfir-jwt',
    name: 'فاكّ تشفير JWT',
    shortDescription:
      'فكّ تشفير رأس رمز JSON Web Token ومطالب الحمولة ووقت الانتهاء بأمان داخل متصفحك.',
    keywords: [
      'فك تشفير jwt أونلاين',
      'فك تشفير رمز jwt',
      'عارض jwt أونلاين',
      'فحص رمز jwt',
      'التحقق من انتهاء jwt',
      'ما هي مطالب jwt',
      'قراءة رمز jwt',
      'أداة jwt مجانية',
      'فك تشفير التوكن أونلاين',
    ],
    seo: {
      title: 'فاكّ تشفير JWT: افحص الرمز والانتهاء | UtilityFlow',
      description:
        'فكّ تشفير رأس JWT ومطالب الحمولة داخل متصفحك، دون إرسال الرمز إلى أي خادم، واعرض iat وnbf وexp بتاريخ UTC واضح — مجانًا وخاص تمامًا. احصل على النتيجة فورًا.',
      primaryKeyword: 'فك تشفير jwt أونلاين',
      secondaryKeywords: ['فك تشفير رمز jwt', 'عارض jwt أونلاين', 'فحص رمز jwt', 'التحقق من انتهاء jwt'],
      longTailKeywords: ['فك تشفير رمز jwt محليًا دون إرساله إلى خادم', 'كيفية التحقق من تاريخ انتهاء exp في jwt أونلاين', 'كيفية عرض رأس jwt ومطالبه بصيغة base64url', 'كيفية قراءة مطالب حمولة jwt في المتصفح'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'افحص رمز JSON Web Token (JWT) بأمان في الذاكرة المحلية لمتصفحك — اعرض كائني Header وPayload منسّقين، وحالة انتهاء iat وnbf وexp المقروءة.',
  },
  'hash-generator': {
    slug: 'muwallid-hash',
    name: 'مولّد الهاش (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'أنشئ هاشات SHA-1 وSHA-256 وSHA-384 وSHA-512 للنصوص أو الملفات المحلية باستخدام Web Crypto.',
    keywords: [
      'مولد هاش أونلاين',
      'مولد sha256 أونلاين',
      'إنشاء هاش sha512',
      'حساب checksum للملف',
      'مولد sha1 أونلاين',
      'هاش sha384 أونلاين',
      'حاسبة checksum مجانية',
      'التحقق من checksum الملف',
      'مولد هاش آمن أونلاين',
    ],
    seo: {
      title: 'مولّد هاش SHA-256 وSHA-512 أونلاين مجانًا | UtilityFlow',
      description:
        'أنشئ هاشات SHA-1 وSHA-256 وSHA-384 وSHA-512 للنصوص والملفات المحلية بصيغة سداسية عشرية أو Base64، مباشرة في متصفحك دون رفع ملفاتك، مجانًا وآمنًا. جرّبه الآن.',
      primaryKeyword: 'مولد هاش أونلاين',
      secondaryKeywords: ['مولد sha256 أونلاين', 'حساب checksum للملف', 'إنشاء هاش sha512', 'حاسبة checksum مجانية'],
      longTailKeywords: ['كيفية استخراج sha256 لملف محلي في المتصفح', 'إنشاء هاش sha256 سداسي عشري وbase64', 'مولد هاش أونلاين عبر web crypto api', 'كيفية التحقق من checksum لملف تم تنزيله'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'استخرج هاشات SHA-1 وSHA-256 وSHA-384 وSHA-512 دفعة واحدة من Web Crypto API الأصلية في المتصفح (`crypto.subtle.digest`) — لنصوص UTF-8 والملفات المحلية.',
  },
  'html-entity-encoder': {
    slug: 'tashfir-kayanat-html',
    name: 'مشفّر وفاكّ كيانات HTML',
    shortDescription:
      'هرّب أحرف HTML المحجوزة (< و> و& وعلامات الاقتباس) والرموز غير ASCII، أو فكّ تشفير كيانات HTML بوضوح.',
    keywords: [
      'مشفر كيانات html أونلاين',
      'كيفية الهروب من html',
      'فك تشفير كيانات html',
      'ترميز الأحرف الخاصة html',
      'أداة هروب html أونلاين',
      'محول كيانات html',
      'فك تشفير html أونلاين',
      'الهروب من علامات الاقتباس html',
      'مشفر html مجاني',
    ],
    seo: {
      title: 'مشفّر كيانات HTML أونلاين: هرّب الرموز | UtilityFlow',
      description:
        'حوّل أحرف HTML المحجوزة والرموز غير ASCII إلى كيانات HTML، أو فكّ تشفير الكيانات المسماة والرقمية إلى نص عادي مقروء، مباشرة في متصفحك. جرّبه مجانًا الآن.',
      primaryKeyword: 'مشفر كيانات html أونلاين',
      secondaryKeywords: ['كيفية الهروب من html', 'فك تشفير كيانات html', 'ترميز الأحرف الخاصة html', 'أداة هروب html أونلاين'],
      longTailKeywords: ['كيفية الهروب من وسوم html لمقتطف برمجي', 'فك تشفير كيانات html المسماة والرقمية', 'تحويل الأحرف الخاصة إلى كيانات html', 'الهروب من علامات الاقتباس وعلامة & في html'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'هرّب `<` و`>` و`&` وعلامات الاقتباس ورموز Unicode الدولية إلى كيانات HTML بأمان لإدراج مقتطفات برمجية في صفحة ويب، أو فكّ تشفير سلسلة HTML مهرّبة إلى نص مقروء.',
  },
  'json-csv-converter': {
    slug: 'tahwil-json-ila-csv',
    name: 'محوّل JSON إلى CSV وCSV إلى JSON',
    shortDescription:
      'حوّل مصفوفات JSON إلى جداول CSV وفق RFC 4180، وحلّل ملفات CSV المُقتبسة إلى JSON نظيف.',
    keywords: [
      'محول json إلى csv أونلاين',
      'محول csv إلى json',
      'تحويل json إلى csv مجاني',
      'كيفية تحويل json إلى csv',
      'كيفية تحويل csv إلى json',
      'محول json csv مجاني أونلاين',
      'تحويل مصفوفة json إلى csv',
      'تحويل csv إلى json أونلاين',
      'محول json tsv أونلاين',
    ],
    seo: {
      title: 'محوّل JSON إلى CSV وCSV إلى JSON مجانًا | UtilityFlow',
      description:
        'حوّل مصفوفة JSON إلى ورقة CSV نظيفة مع تسطيح الكائنات المتداخلة، أو حلّل ملفات CSV وTSV إلى JSON منظّم — مجانًا ومحليًا. احصل على النتيجة فورًا اليوم.',
      primaryKeyword: 'محول json إلى csv أونلاين',
      secondaryKeywords: ['محول csv إلى json', 'كيفية تحويل json إلى csv', 'كيفية تحويل csv إلى json', 'تحويل json إلى csv مجاني'],
      longTailKeywords: ['تحويل كائن json متداخل إلى أعمدة csv', 'تحويل csv مقتبسة بفواصل إلى مصفوفة json', 'أداة تحويل json إلى csv مع التنزيل في المتصفح', 'تحويل مصفوفة json إلى ورقة csv مجانًا'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'حوّل مصفوفات JSON من واجهات API إلى جداول CSV نظيفة — تُسطَّح مفاتيح الكائنات المتداخلة تلقائيًا — أو حلّل ملفات CSV وTSV المقتبسة بالفواصل إلى JSON منسّق.',
  },
  'unix-timestamp-converter': {
    slug: 'muhawwil-unix-timestamp',
    name: 'محوّل طابع Unix الزمني',
    shortDescription:
      'حوّل ثواني أو ميلي ثواني Unix epoch إلى تواريخ ISO 8601 وUTC ومحلية — والعكس أيضًا.',
    keywords: [
      'محول طابع unix الزمني أونلاين',
      'محول epoch إلى تاريخ',
      'ما هو وقت unix',
      'كيفية استخراج epoch',
      'تحويل الطابع الزمني إلى تاريخ',
      'تحويل التاريخ إلى unix',
      'ما هو وقت unix الحالي',
      'محول ميلي ثواني epoch',
      'محول unix أونلاين',
    ],
    seo: {
      title: 'محوّل طابع Unix الزمني: حوّل التاريخ | UtilityFlow',
      description:
        'حوّل طابع Unix الزمني بالثواني أو الميلي ثواني إلى ISO 8601 وUTC وRFC 2822 والوقت المحلي، أو استخرج وقت Unix من أي تاريخ — مجانًا. النتيجة فورية اليوم.',
      primaryKeyword: 'محول طابع unix الزمني أونلاين',
      secondaryKeywords: ['محول epoch إلى تاريخ', 'ما هو وقت unix', 'تحويل الطابع الزمني إلى تاريخ', 'تحويل التاريخ إلى unix'],
      longTailKeywords: ['تحويل ميلي ثواني epoch إلى تاريخ iso 8601', 'عرض وقت unix الحالي بالثواني مباشرة', 'تحويل التاريخ والوقت المحلي إلى epoch unix', 'تحويل طابع unix الزمني إلى تاريخ utc مجانًا'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'حوّل عدد Unix epoch الصحيح (بالثواني أو الميلي ثواني) إلى سلاسل ISO 8601 وUTC والمنطقة الزمنية المحلية — مع الإزاحة النسبية — أو حوّل أي تاريخ تقويمي إلى طابع Unix الزمني.',
  },
  'sql-formatter': {
    slug: 'munsaq-sql',
    name: 'منسّق SQL',
    shortDescription:
      'نسّق استعلامات SQL وبدّل مسافاتها ووحّدها — بأحرف كبيرة أو صغيرة للكلمات المفتاحية، أو اضغط الاستعلام في سطر واحد.',
    keywords: [
      'منسق sql أونلاين',
      'كيفية تنسيق استعلام sql',
      'محسن sql أونلاين',
      'مصغر sql أونلاين',
      'أداة تنسيق sql',
      'تجميل استعلام sql',
      'كيفية إزاحة sql',
      'منسق sql مجاني',
      'تنسيق sql أونلاين مجاني',
    ],
    seo: {
      title: 'منسّق SQL: جمّل استعلامك أونلاين مجانًا | UtilityFlow',
      description:
        'نسّق استعلام SQL بفواصل جمل واضحة وكلمات مفتاحية كبيرة أو صغيرة وإزاحة بمسافتين أو أربع، أو اضغطه في سطر واحد — مجانًا وبدون تسجيل. احصل على النتيجة فورًا.',
      primaryKeyword: 'منسق sql أونلاين',
      secondaryKeywords: ['كيفية تنسيق استعلام sql', 'محسن sql أونلاين', 'مصغر sql أونلاين', 'أداة تنسيق sql'],
      longTailKeywords: ['تنسيق استعلام sql فيه select وjoin وgroup by أونلاين', 'تحويل الكلمات المفتاحية في sql إلى أحرف كبيرة دون أخطاء', 'تصغير استعلام sql مع الحفاظ على السلاسل النصية', 'تنسيق استعلام sql بإزاحة مسافتين أو أربع'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'حوّل استعلام SQL مكتظًا في سطر واحد إلى عبارة مقروءة ومنظّمة — بمحاذاة واضحة لـ `SELECT` و`FROM` و`JOIN` و`WHERE` و`GROUP BY` و`ORDER BY` — مع الحفاظ على السلاسل المقتبسة والتعليقات.',
  },
  'css-minifier': {
    slug: 'daghit-css',
    name: 'مصغّر CSS ومنسّقها',
    shortDescription:
      'صغّر أوراق أنماط CSS لتقليل حجم الحزمة، أو جمّل قواعد CSS المضغوطة بإزاحة نظيفة.',
    keywords: [
      'مصغر css أونلاين',
      'منسق css أونلاين',
      'كيفية ضغط css',
      'أداة تنسيق css',
      'تصغير css أونلاين',
      'كيفية تصغير css',
      'تصغير css مجاني أونلاين',
      'فك تصغير css',
      'كيفية تقليل حجم ملف css',
    ],
    seo: {
      title: 'مصغّر CSS ومنسّقها أونلاين مجانًا وبسهولة | UtilityFlow',
      description:
        'صغّر CSS بحذف التعليقات والمسافات الزائدة — مع إحصاءات حية للبايتات الموفَّرة — أو افتح ورقة مضغوطة في قواعد نظيفة، مجانًا تمامًا وبدون تسجيل. جرّبه الآن.',
      primaryKeyword: 'مصغر css أونلاين',
      secondaryKeywords: ['منسق css أونلاين', 'كيفية ضغط css', 'أداة تنسيق css', 'تصغير css أونلاين'],
      longTailKeywords: ['تصغير css مع الحفاظ على السلاسل المقتبسة وmedia query', 'فك تصغير ورقة css مضغوطة أونلاين', 'حساب نسبة ضغط css في المتصفح', 'تقليل حجم ملف css قبل النشر'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'اضغط أوراق أنماط CSS بحذف التعليقات والمسافات البيضاء غير الضرورية والفاصلة المنقوطة الأخيرة قبل قوس الإغلاق، أو افتح CSS مضغوطًا في سطر واحد إلى كتل مقروءة ومزاحة.',
  },
  'js-formatter': {
    slug: 'munsaq-javascript',
    name: 'مصغّر JavaScript / TypeScript ومنسّقها',
    shortDescription:
      'صغّر مقتطفات JavaScript بحذف التعليقات والمسافات الزائدة، أو جمّل كتل الشيفرة المضغوطة.',
    keywords: [
      'مصغر جافاسكربت أونلاين',
      'منسق js أونلاين',
      'محسن js أونلاين',
      'كيفية ضغط جافاسكربت',
      'أداة تنسيق js',
      'تصغير جافاسكربت أونلاين',
      'تجميل شيفرة js',
      'مصغر typescript أونلاين',
      'منسق شيفرة js مجاني',
    ],
    seo: {
      title: 'مصغّر JavaScript ومنسّقها أونلاين مجانًا | UtilityFlow',
      description:
        'صغّر JavaScript وTypeScript بحذف التعليقات والمسافات الزائدة بأمان، أو افتح الشيفرة المضغوطة بإزاحة مسافتين أو أربع — مجانًا. احصل على النتيجة فورًا اليوم.',
      primaryKeyword: 'مصغر جافاسكربت أونلاين',
      secondaryKeywords: ['منسق js أونلاين', 'محسن js أونلاين', 'كيفية ضغط جافاسكربت', 'أداة تنسيق js'],
      longTailKeywords: ['تصغير js مع الحفاظ على السلاسل النصية وقوالبها', 'فتح شيفرة جافاسكربت مضغوطة مع الإزاحة', 'أداة تنسيق وتصغير js في المتصفح', 'تجميل شيفرة جافاسكربت بإزاحة مسافتين أو أربع'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'اضغط مقتطفات JavaScript للبوكماركلت والسكربتات المضمّنة — بحذف التعليقات والمسافات الزائدة مع الحفاظ على السلاسل النصية — أو أعد إزاحة الشيفرة المضغوطة.',
  },
  'cron-expression-parser': {
    slug: 'muhallil-cron',
    name: 'محلّل تعبيرات Cron ومعاينة الجدولة',
    shortDescription:
      'افهم تعبير cron من 5 حقول بلغة بسيطة، واعرض الإعدادات المسبقة، وعاين أوقات التشغيل الثمانية التالية.',
    keywords: [
      'محلل تعبير cron أونلاين',
      'مولد crontab أونلاين',
      'مختبر جدولة cron',
      'كيفية فهم تعبير cron',
      'ما هي مهمة cron',
      'مختبر تعبير cron أونلاين',
      'بديل crontab guru',
      'أداة معاينة جدولة cron',
      'شرح cron بالعربية',
    ],
    seo: {
      title: 'محلّل تعبيرات Cron: افهم الجدولة بسهولة | UtilityFlow',
      description:
        'افهم تعبير cron من 5 حقول بلغة بسيطة، وافحص كل حقل، وجرّب الإعدادات المسبقة الشائعة، واعرض أوقات التشغيل الثمانية التالية — مجانًا. بياناتك لا تغادر جهازك.',
      primaryKeyword: 'محلل تعبير cron أونلاين',
      secondaryKeywords: ['مولد crontab أونلاين', 'مختبر جدولة cron', 'كيفية فهم تعبير cron', 'ما هي مهمة cron'],
      longTailKeywords: ['فهم تعبير cron من 5 حقول بلغة بسيطة', 'استخراج أوقات التشغيل الثمانية التالية لتعبير cron', 'اختبار تعبير cron فيه أيام أسبوع وخطوات أونلاين', 'مثال تعبير cron يعمل كل صباح يوم عمل الساعة 9'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'فكّ تشفير تعبيرات crontab في Unix من 5 حقول (دقيقة ساعة يوم-الشهر شهر يوم-الأسبوع) إلى ملخص واضح ومقروء، وافحص نطاقات الحقول، واعرض أوقات التشغيل الثمانية المجدولة التالية.',
  },
  'color-converter': {
    slug: 'muhawwil-alwan',
    name: 'محوّل الألوان (HEX / RGB / HSL وتباين WCAG)',
    shortDescription:
      'حوّل الألوان بين HEX وRGB وHSL مع منتقي ألوان مباشر وفحص تباين WCAG 2.1.',
    keywords: [
      'محول الألوان أونلاين',
      'محول hex إلى rgb',
      'كيفية تحويل rgb إلى hex',
      'فاحص تباين wcag',
      'محول hex إلى hsl',
      'تحويل rgb إلى hsl',
      'منتقي الألوان أونلاين',
      'أداة تحويل ألوان hex',
      'محول hsl إلى rgb',
    ],
    seo: {
      title: 'محوّل الألوان HEX وRGB وHSL أونلاين مجانًا | UtilityFlow',
      description:
        'حوّل الألوان بين HEX وRGB وHSL فورًا، وافحص تباين النص والخلفية وفق WCAG 2.1 AA وAAA — مجانًا وبدون تسجيل، مباشرة في متصفحك. احصل على النتيجة فورًا اليوم.',
      primaryKeyword: 'محول الألوان أونلاين',
      secondaryKeywords: ['محول hex إلى rgb', 'كيفية تحويل rgb إلى hex', 'فاحص تباين wcag', 'محول hex إلى hsl'],
      longTailKeywords: ['تحويل لون hex إلى قيم css rgb وhsl', 'فحص تباين النص وفق wcag 2.1 aa وaaa', 'أداة ألوان hex وrgb وhsl للمطورين', 'تحويل hex إلى hsl لمتغيرات css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'بدّل الألوان بسهولة بين صيغ CSS HEX وRGB وHSL مع عينة حية وفاحص نسبة تباين WCAG 2.1 — لتصميم واجهات سهلة الوصول.',
  },
};
