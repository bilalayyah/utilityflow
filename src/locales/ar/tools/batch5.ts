import type { ToolLocaleOverride } from '../../types';

/**
 * Arabic overrides — Batch 5: SEO tools (10) + Image & File tools (10).
 * Source: src/registry/batches/batch6SeoTools.ts,
 *         src/registry/batches/batch7ImageFileTools.ts.
 * Original Arabic, SEO-optimized for Arabic search intent. Slugs are
 * romanized (Latin) — what Arabic speakers actually type into Google.
 */
export const AR_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'mulid-meta-tag',
    name: 'مولّد وسوم ميتا',
    shortDescription:
      'أنشئ وسوم العنوان والوصف والرابط الأساسي وOpen Graph وبطاقة تويتر/إكس، مع معاينة مباشرة للبطاقة.',
    keywords: [
      'مولد ميتا تاج',
      'meta tag generator',
      'إنشاء وسوم ميتا',
      'open graph generator',
      'مولد وسوم Open Graph',
      'مولد وصف ميتا',
      'وسوم html للموقع',
      'twitter card generator',
      'وسوم seo للموقع',
    ],
    seo: {
      title: 'مولّد وسوم ميتا — وسوم SEO وOpen Graph | UtilityFlow',
      description:
        'أنشئ وسوم العنوان والوصف والرابط الأساسي وOpen Graph وبطاقة تويتر بسهولة، مع فحص الطول ومعاينة اجتماعية مباشرة — مجاني، يعمل في المتصفح دون تسجيل وبنقرة واحدة.',
      primaryKeyword: 'مولد ميتا تاج',
      secondaryKeywords: [
        'meta tag generator',
        'إنشاء وسوم ميتا',
        'open graph generator',
        'مولد وصف ميتا',
      ],
      longTailKeywords: [
        'كيفية إنشاء وسوم ميتا لموقعك مجانًا',
        'إنشاء وسوم Open Graph وبطاقة تويتر',
        'فحص طول عنوان ووصف ميتا',
        'نسخ وسوم html جاهزة لموقعك',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'أنشئ بيانات <head> صحيحة وفق المعايير — <title> و<meta name="description"> والرابط الأساسي وقواعد الفهرسة ووسوم Open Graph (og:*) وبطاقة تويتر/إكس، مع ترميز آمن للخصائص ومعاينة مباشرة للبطاقة الاجتماعية.',
  },
  'serp-snippet-preview': {
    slug: 'muayinat-natayij-google',
    name: 'معاينة مقتطف نتائج بحث جوجل',
    shortDescription:
      'شاهد كيف يظهر موقعك في نتائج بحث جوجل على الحاسوب والجوال، مع فحص العرض الحقيقي للعنوان بالبكسل وتمييز الكلمات.',
    keywords: [
      'معاينة serp',
      'google serp preview',
      'معاينة نتائج بحث جوجل',
      'فاحص طول عنوان seo',
      'معاينة وصف ميتا',
      'serp checker',
      'كيف يظهر موقعي في جوجل',
      'فاحص مقتطف جوجل',
      'معاينة snippet مجانًا',
    ],
    seo: {
      title: 'معاينة نتائج بحث جوجل — SERP على الجوال | UtilityFlow',
      description:
        'شاهد مقتطف البحث الخاص بك قبل النشر على الحاسوب والجوال، مع فحص عرض العنوان بالبكسل وتنبيه الاقتطاع وتمييز الكلمات المفتاحية — مجاني بالكامل وبنقرة واحدة.',
      primaryKeyword: 'معاينة serp',
      secondaryKeywords: [
        'معاينة نتائج بحث جوجل',
        'فاحص طول عنوان seo',
        'معاينة وصف ميتا',
        'google serp preview',
      ],
      longTailKeywords: [
        'كيف سيظهر عنوان موقعي في جوجل',
        'فحص عرض عنوان seo بالبكسل 580',
        'معاينة serp للجوال والحاسوب',
        'هل سيُقتطع وصف ميتا في جوجل',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'لا تعتمد على التخمين — تحقق بقياس خط مباشر عبر HTML5 Canvas مما إذا كان عنوان SEO الخاص بك يناسب مساحة عرض جوجل البالغة نحو 580 بكسل، وشاهد بطاقة البحث على الحاسوب والجوال مع تمييز الكلمات المفتاحية.',
  },
  'xml-sitemap-generator': {
    slug: 'mulid-sitemap-xml',
    name: 'مولّد خريطة موقع XML',
    shortDescription:
      'حوّل قائمة روابط إلى ملف sitemap.xml صحيح وفق Sitemaps.org، مع إزالة التكرار وتواريخ lastmod وchangefreq.',
    keywords: [
      'مولد خريطة الموقع',
      'xml sitemap generator',
      'إنشاء sitemap لموقعك',
      'ملف sitemap.xml',
      'مولد sitemap مجاني',
      'خريطة موقع seo',
      'إنشاء خريطة موقع أونلاين',
      'sitemap generator',
      'أداة خريطة الموقع',
    ],
    seo: {
      title: 'مولّد خريطة موقع XML — لموقعك مجانًا | UtilityFlow',
      description:
        'حوّل قائمة روابطك إلى ملف sitemap.xml صحيح فورًا — أزل الروابط المكررة وأضف تواريخ lastmod واقتراحات changefreq، في المتصفح، مجاني بالكامل وبنقرة واحدة.',
      primaryKeyword: 'مولد خريطة الموقع',
      secondaryKeywords: [
        'xml sitemap generator',
        'إنشاء sitemap لموقعك',
        'ملف sitemap.xml',
        'مولد sitemap مجاني',
      ],
      longTailKeywords: [
        'كيفية إنشاء خريطة موقع xml مجانًا',
        'تحويل قائمة روابط إلى sitemap.xml',
        'إضافة lastmod وchangefreq في الخريطة',
        'إنشاء sitemap لموقع صغير أونلاين',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'حوّل أي قائمة روابط https:// أساسية إلى ملف sitemap.xml صحيح وفق مخطط Sitemaps 0.9 — استبعد الروابط غير الصالحة وأزل التكرار تلقائيًا وشفّر أحرف XML وصدّر ملف .xml جاهزًا.',
  },
  'robots-txt-generator': {
    slug: 'mulid-robots-txt',
    name: 'مولّد ملف robots.txt',
    shortDescription:
      'أنشئ قواعد robots.txt صحيحة مجمّعة حسب وكيل المستخدم، مع مسارات Allow وDisallow وCrawl-delay وSitemap.',
    keywords: [
      'مولد robots.txt',
      'إنشاء ملف robots.txt',
      'robots txt للموقع',
      'قواعد allow disallow',
      'مولد robots txt مجاني',
      'ما هو ملف robots.txt',
      'إضافة sitemap في robots',
      'إنشاء robots.txt',
      'أداة robots txt',
    ],
    seo: {
      title: 'مولّد ملف robots.txt — قواعد الزاحف مجانًا | UtilityFlow',
      description:
        'أنشئ ملف robots.txt صحيحًا بمجموعات وكلاء المستخدم وقواعد Allow وDisallow وcrawl-delay ورابط الخريطة، مع قوالب جاهزة — مجاني في المتصفح دون تسجيل وبنقرة واحدة.',
      primaryKeyword: 'مولد robots.txt',
      secondaryKeywords: [
        'إنشاء ملف robots.txt',
        'robots txt للموقع',
        'قواعد allow disallow',
        'مولد robots txt مجاني',
      ],
      longTailKeywords: [
        'كيفية إنشاء ملف robots.txt لموقعك',
        'إضافة sitemap في ملف robots.txt',
        'منع الزاحف من صفحة في robots.txt',
        'إنشاء robots.txt لووردبريس',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'أنشئ توجيهات robots.txt نظيفة من قوالب جاهزة لموقع مفتوح أو تطبيق SaaS أو ووردبريس أو حظر بيئة اختبار — مع وكلاء المستخدم وAllow وDisallow وCrawl-delay وسطر Sitemap:.',
  },
  'schema-markup-generator': {
    slug: 'mulid-schema-json-ld',
    name: 'مولّد ترميز Schema بصيغة JSON-LD',
    shortDescription:
      'أنشئ نصوص JSON-LD صحيحة وفق Schema.org لأنواع Article وFAQPage وProduct وOrganization وBreadcrumbList.',
    keywords: [
      'مولد schema markup',
      'json ld generator',
      'مولد بيانات منظمة',
      'مولد schema للأسئلة الشائعة',
      'schema.org json ld',
      'ترميز rich snippet',
      'إنشاء json ld',
      'ما هي البيانات المنظمة',
      'مولد breadcrumb schema',
    ],
    seo: {
      title: 'مولّد ترميز JSON-LD — بيانات منظمة مجانًا | UtilityFlow',
      description:
        'أنشئ ترميز JSON-LD صحيحًا وفق Schema.org لأنواع Article وFAQPage وProduct وOrganization وBreadcrumbList، مع ترميز HTML آمن ونسخ السكربت وتصدير .jsonld.',
      primaryKeyword: 'مولد schema markup',
      secondaryKeywords: [
        'json ld generator',
        'مولد بيانات منظمة',
        'مولد schema للأسئلة الشائعة',
        'schema.org json ld',
      ],
      longTailKeywords: [
        'كيفية إنشاء schema بصيغة json ld مجانًا',
        'إنشاء بيانات منظمة لصفحة الأسئلة الشائعة',
        'توليد schema للمقال والمنتج',
        'إضافة سكربت json ld في html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'أنشئ كتل JSON-LD نظيفة وفق Schema.org لأنواع Article وFAQPage وProduct وOrganization وBreadcrumbList — مع منشئ صفوف ديناميكي وترميز آمن لعلامة < داخل وسوم السكربت وتصدير .jsonld.',
  },
  'url-slug-generator': {
    slug: 'mulid-slug-url',
    name: 'مولّد روابط URL (Slug)',
    shortDescription:
      'حوّل عنوان المقال إلى رابط URL نظيف وصديق لمحركات البحث، مع تحويل الأحرف والوضع الجماعي وحذف كلمات التوقف.',
    keywords: [
      'مولد slug',
      'إنشاء رابط url صديق لـ seo',
      'رابط seo للمقال',
      'تحويل العنوان إلى slug',
      'مولد permalink',
      'مولد slug أونلاين',
      'مولد روابط مجاني',
      'رابط url صديق لمحركات البحث',
      'إنشاء slug من العنوان',
    ],
    seo: {
      title: 'مولّد روابط URL — روابط صديقة لـ SEO | UtilityFlow',
      description:
        'حوّل العناوين إلى روابط slug نظيفة دفعة واحدة — حوّل الأحرف إلى ASCII واحذف كلمات التوقف واقطع الطول عند حد الكلمة، مجاني بالكامل في المتصفح وبنقرة واحدة.',
      primaryKeyword: 'مولد slug',
      secondaryKeywords: [
        'إنشاء رابط url صديق لـ seo',
        'رابط seo للمقال',
        'تحويل العنوان إلى slug',
        'مولد permalink',
      ],
      longTailKeywords: [
        'كيفية تحويل عنوان المقال إلى رابط seo',
        'إنشاء عدة روابط slug دفعة واحدة',
        'تحويل عنوان عربي إلى رابط url',
        'حذف كلمات التوقف من الرابط',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'وحّد الروابط الدائمة لمقالة واحدة أو تقويم محتوى كامل بروابط سهلة القراءة مفصولة بشرطات — حوّل الأحرف إلى ASCII نظيف (مثل Café ← cafe) واحذف كلمات التوقف غير الضرورية وحدّد الطول دون قطع منتصف كلمة وشاهد معاينة للرابط الكامل.',
  },
  'keyword-density-checker': {
    slug: 'fahs-kathafat-al-kalimat',
    name: 'فاحص كثافة الكلمات المفتاحية',
    shortDescription:
      'افحص عدد الكلمات وكثافة الكلمة المستهدفة ووقت القراءة وتكرار العبارات المكوّنة من كلمة وكلمتين وثلاث كلمات، محليًا.',
    keywords: [
      'فاحص كثافة الكلمات المفتاحية',
      'keyword density checker',
      'كيفية فحص كثافة الكلمة',
      'ما هي كثافة الكلمات',
      'محلل محتوى seo',
      'أداة كثافة كلمات مجانية',
      'فاحص تكرار الكلمات',
      'فحص محتوى seo',
      'فحص حشو الكلمات',
    ],
    seo: {
      title: 'فاحص كثافة الكلمات المفتاحية — SEO مجاني | UtilityFlow',
      description:
        'الصق مسودة أو HTML لفحص عدد الكلمات ووقت القراءة وكثافة الكلمة المستهدفة وتكرار العبارات من كلمة إلى ثلاث كلمات فورًا — في المتصفح، مجاني بالكامل وبنقرة واحدة.',
      primaryKeyword: 'فاحص كثافة الكلمات المفتاحية',
      secondaryKeywords: [
        'كيفية فحص كثافة الكلمة',
        'ما هي كثافة الكلمات',
        'محلل محتوى seo',
        'أداة كثافة كلمات مجانية',
      ],
      longTailKeywords: [
        'كيفية فحص كثافة الكلمات في المقال أونلاين',
        'فحص حشو الكلمات المفتاحية مجانًا',
        'استخراج كثافة الكلمة من html',
        'ما نسبة كثافة الكلمة المناسبة لـ seo',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'افحص مسودة محتوى أو HTML ملصوقًا — عمق المفردات ووقت القراءة والمطابقات الدقيقة للعبارة المستهدفة وتكرار أهم العبارات من كلمة وكلمتين وثلاث كلمات، لالتقاط التكرار غير المقصود بدلًا من مطاردة حصص كلمات قديمة.',
  },
  'canonical-hreflang-generator': {
    slug: 'mulid-hreflang-canonical',
    name: 'مولّد Canonical وHreflang',
    shortDescription:
      'أنشئ وسوم hreflang وcanonical للصفحات متعددة اللغات، وجهّز قواعد إعادة توجيه 301 لـ Cloudflare Pages وApache وNginx.',
    keywords: [
      'مولد hreflang',
      'مولد canonical tag',
      'مولد إعادة توجيه 301',
      'إنشاء وسوم hreflang',
      'إنشاء رابط canonical',
      'قواعد إعادة توجيه cloudflare',
      'وسوم seo متعددة اللغات',
      'ما هو hreflang',
      'إنشاء إعادة توجيه 301',
    ],
    seo: {
      title: 'مولّد Hreflang — Canonical وإعادة توجيه 301 | UtilityFlow',
      description:
        'أنشئ وسوم hreflang وcanonical للصفحات متعددة اللغات، وجهّز قواعد إعادة توجيه 301 لـ Cloudflare Pages وApache وNginx — مجاني، في المتصفح، وبنقرة واحدة فقط.',
      primaryKeyword: 'مولد hreflang',
      secondaryKeywords: [
        'مولد canonical tag',
        'مولد إعادة توجيه 301',
        'إنشاء وسوم hreflang',
        'إنشاء رابط canonical',
      ],
      longTailKeywords: [
        'كيفية إنشاء وسوم hreflang لموقع متعدد اللغات',
        'إنشاء إعادة توجيه 301 في Cloudflare Pages',
        'ما هو الرابط canonical وكيفية إضافته',
        'إنشاء وسم hreflang x-default',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'أمران أساسيان في SEO التقني في مكان واحد — أنشئ تعليقات hreflang وcanonical متعددة المناطق (لوسم <head> في HTML ولخريطة موقع XML معًا)، أو حوّل قائمة روابط قديمة إلى قواعد إعادة توجيه 301 جاهزة لـ Cloudflare Pages وApache وNginx.',
  },
  'on-page-seo-checker': {
    slug: 'fahs-seo-al-safha',
    name: 'فاحص SEO داخل الصفحة',
    shortDescription:
      'دقّق مصدر HTML الملصوق في المتصفح — طول العنوان والوصف وتسلسل العناوين H1–H4 ونص alt وJSON-LD.',
    keywords: [
      'فاحص seo داخل الصفحة',
      'on page seo checker',
      'كيفية فحص seo الصفحة',
      'أداة تدقيق seo مجانية',
      'فاحص html seo',
      'فحص seo الموقع أونلاين',
      'ما هو seo داخل الصفحة',
      'فاحص طول عنوان ميتا',
      'كيفية تدقيق seo',
    ],
    seo: {
      title: 'فاحص SEO داخل الصفحة — تدقيق HTML مجاني | UtilityFlow',
      description:
        'الصق HTML أي صفحة لتدقيق العنوان والوصف والعناوين والرابط الأساسي ونص alt وJSON-LD فورًا، واحصل على تقرير كامل بالأخطاء — مجاني، في المتصفح، دون تسجيل.',
      primaryKeyword: 'فاحص seo داخل الصفحة',
      secondaryKeywords: [
        'كيفية فحص seo الصفحة',
        'أداة تدقيق seo مجانية',
        'فاحص html seo',
        'فحص seo الموقع أونلاين',
      ],
      longTailKeywords: [
        'كيفية فحص seo داخل الصفحة مجانًا',
        'تدقيق seo بلصق كود html',
        'فحص بنية عناوين h1 وh2',
        'فحص طول عنوان ووصف ميتا',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'دقّق مصدر HTML لأي صفحة (عرض مصدر الصفحة) مباشرة في متصفحك على مستوى DOM — <title> والوصف والرابط الأساسي وتسلسل العناوين H1–H4 ونص alt المفقود في الصور والروابط الداخلية والخارجية وOpen Graph وJSON-LD، كل ذلك معًا.',
  },
  'robots-meta-tag-generator': {
    slug: 'mulid-robots-meta-tag',
    name: 'مولّد وسوم Robots Meta',
    shortDescription:
      'أنشئ وسوم robots بقيم noindex وnofollow وnoarchive وmax-snippet وmax-image-preview، وقواعد _headers لـ Cloudflare.',
    keywords: [
      'مولد robots meta tag',
      'إضافة وسم noindex',
      'وسم nofollow',
      'مولد x-robots-tag',
      'max-image-preview large',
      'ما هو وسم robots meta',
      'إضافة noindex وnofollow',
      'قواعد headers في cloudflare',
      'مولد وسوم robots',
    ],
    seo: {
      title: 'مولّد وسوم Robots Meta — Noindex وX-Robots | UtilityFlow',
      description:
        'أنشئ وسوم robots في HTML بقيم noindex وnofollow وmax-snippet وmax-image-preview، وترويسات X-Robots-Tag مع مخرجات _headers لـ Cloudflare — مجاني في المتصفح.',
      primaryKeyword: 'مولد robots meta tag',
      secondaryKeywords: [
        'إضافة وسم noindex',
        'وسم nofollow',
        'مولد x-robots-tag',
        'max-image-preview large',
      ],
      longTailKeywords: [
        'كيفية إضافة x-robots-tag noindex لملف pdf',
        'إضافة وسم noindex وnofollow',
        'ضبط max-snippet وmax-image-preview large',
        'الفرق بين robots.txt وmeta robots',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'أنشئ تعليمات زاحف دقيقة على مستوى الصفحة — index/noindex وfollow/nofollow وnoarchive وnosnippet وmax-snippet وmax-image-preview:large — دفعة واحدة كوسم <meta name="robots"> في HTML وترويسة X-Robots-Tag في HTTP وكتلة _headers لـ Cloudflare Pages.',
  },
  'image-compressor': {
    slug: 'daght-al-suwar',
    name: 'ضاغط الصور',
    shortDescription:
      'صغّر صور PNG وJPG وWebP في المتصفح — مع التحكم في الجودة والحد الأقصى للعرض وعرض التوفير بالبايت فورًا.',
    keywords: [
      'ضاغط صور',
      'ضغط الصور أونلاين',
      'ضغط الصور مجانًا',
      'ضغط jpg أونلاين',
      'تصغير حجم الصورة',
      'تقليل حجم الصورة',
      'ضغط png أونلاين مجانًا',
      'تصغير الصور',
      'ضاغط webp',
    ],
    seo: {
      title: 'ضغط الصور — PNG وJPG وWebP مجانًا أونلاين | UtilityFlow',
      description:
        'اضغط الصور في متصفحك — حدّد الجودة والحد الأقصى للعرض وشاهد الحجم قبل وبعد ثم نزّل الصورة المضغوطة فورًا. لا رفع للملفات، وكل شيء مجاني بالكامل أونلاين.',
      primaryKeyword: 'ضاغط صور',
      secondaryKeywords: [
        'ضغط الصور أونلاين',
        'ضغط jpg أونلاين',
        'تصغير حجم الصورة',
        'تقليل حجم الصورة',
      ],
      longTailKeywords: [
        'كيفية تصغير حجم الصور للموقع دون رفعها',
        'ضغط صورة jpg وتحويلها إلى webp',
        'تصغير صورة كبيرة أونلاين مجانًا',
        'تقليل حجم الصورة للمرفقات',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'صغّر صور PNG وJPG وWebP الثقيلة لصفحات أسرع ومرفقات بريد أخف، مباشرة في المتصفح — اضبط جودة الضغط الفاقد وحدّد العرض وشاهد التوفير الحقيقي بالبايت، دون إرسال أي ملف إلى خادم.',
  },
  'image-resizer': {
    slug: 'taghyir-hajm-al-suwar',
    name: 'مُغيّر حجم الصور',
    shortDescription:
      'غيّر حجم الصورة إلى أبعاد بكسل دقيقة — مع إعدادات جاهزة للتواصل الاجتماعي وOpen Graph وقفل نسبة الأبعاد والقص المركزي وتصدير PNG/JPG/WebP.',
    keywords: [
      'مغير حجم الصور',
      'تغيير حجم الصورة',
      'تغيير حجم الصور أونلاين',
      'تغيير أبعاد الصورة',
      'تحويل الصورة إلى 1200x630',
      'تحويل الصورة إلى مربع',
      'تغيير حجم صورة انستقرام',
      'مغير حجم صور مجاني',
      'تغيير حجم الصورة أونلاين',
    ],
    seo: {
      title: 'تغيير حجم الصور — بأبعاد بكسل دقيقة مجانًا | UtilityFlow',
      description:
        'غيّر حجم الصور إلى أبعاد بكسل دقيقة — اختر إعدادًا جاهزًا واقفل نسبة الأبعاد واقصص من المنتصف وصدّر بصيغ PNG أو JPG أو WebP، خاص ومجاني وبنقرة واحدة فقط.',
      primaryKeyword: 'مغير حجم الصور',
      secondaryKeywords: [
        'تغيير حجم الصورة',
        'تغيير حجم الصور أونلاين',
        'تغيير أبعاد الصورة',
        'تحويل الصورة إلى 1200x630',
      ],
      longTailKeywords: [
        'كيفية تحويل صورة إلى مقاس 1200x630',
        'تحويل صورة إلى مربع 1080x1080 لانستقرام',
        'تغيير عرض وطول الصورة بالبكسل',
        'تغيير حجم الصورة دون تمديدها',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'غيّر حجم الرسوم والصور إلى أبعاد بكسل دقيقة — بإعدادات جاهزة لـ Open Graph (1200×630) ويوتيوب HD (1280×720) والمربع (1080×1080) والصورة الرمزية (512×512)، مع إعادة تحجيم عالية الجودة عبر Canvas وقص تغطية مركزي دون تمديد.',
  },
  'image-format-converter': {
    slug: 'tahwil-sighat-al-suwar',
    name: 'محوّل صيغ الصور (PNG / JPG / WebP)',
    shortDescription:
      'حوّل صور PNG وJPG وWebP وGIF وSVG دفعة واحدة إلى صيغة أخرى، مع التحكم في الجودة ولون خلفية لصور JPEG.',
    keywords: [
      'محول صيغ الصور',
      'تحويل png إلى jpg',
      'تحويل jpg إلى png',
      'تحويل webp إلى jpg',
      'تحويل png إلى webp',
      'تغيير صيغة الصورة',
      'تحويل webp إلى png',
      'تحويل jpg إلى webp',
      'محول صور أونلاين مجاني',
    ],
    seo: {
      title: 'تحويل صيغ الصور — PNG وJPG وWebP مجانًا | UtilityFlow',
      description:
        'حوّل الصور بين PNG وJPG وWebP فورًا — ملفات متعددة دفعة واحدة واضبط جودة JPG واملأ الخلفية الشفافة، في المتصفح، مجاني بالكامل وبنقرة واحدة دون أي تسجيل.',
      primaryKeyword: 'محول صيغ الصور',
      secondaryKeywords: [
        'تحويل png إلى jpg',
        'تحويل jpg إلى png',
        'تحويل webp إلى jpg',
        'تحويل png إلى webp',
      ],
      longTailKeywords: [
        'كيفية تحويل عدة صور إلى webp دفعة واحدة',
        'تحويل لقطة webp إلى png',
        'تحويل png شفاف إلى jpg مع خلفية',
        'تغيير صيغة png إلى jpg أونلاين',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'حوّل ملفات PNG وJPG وWebP وGIF وSVG دفعة واحدة إلى WebP جاهز للويب أو JPG شامل أو PNG شفاف دون فقدان — بالكامل في المتصفح، مع خيار ملء لون خلفية من اختيارك عند تحويل الشفافية إلى JPEG.',
  },
  'image-rotate-flip': {
    slug: 'tadwir-wa-qalb-al-suwar',
    name: 'تدوير الصور وقلبها',
    shortDescription:
      'أدر الصورة 90° أو 180° أو 270°، واقلبها أفقيًا أو عموديًا، وطبّق فلاتر التدرج الرمادي والسطوع والتباين مباشرة.',
    keywords: [
      'كيفية تدوير الصورة',
      'تدوير الصور أونلاين',
      'كيفية قلب الصورة',
      'قلب الصورة أونلاين',
      'عكس الصورة',
      'تحويل الصورة إلى رمادي',
      'زيادة سطوع الصورة',
      'تدوير صورة 90 درجة',
      'تعديل الصورة المائلة',
    ],
    seo: {
      title: 'تدوير الصور — أدرها واقلبها أونلاين مجانًا | UtilityFlow',
      description:
        'أدر الصور أونلاين 90 أو 180 أو 270 درجة، واقلبها أفقيًا أو عموديًا، واضبط السطوع والتباين والتدرج الرمادي — مجاني، في المتصفح، دون أي تسجيل وبنقرة واحدة.',
      primaryKeyword: 'كيفية تدوير الصورة',
      secondaryKeywords: [
        'تدوير الصور أونلاين',
        'كيفية قلب الصورة',
        'قلب الصورة أونلاين',
        'عكس الصورة',
      ],
      longTailKeywords: [
        'كيفية تعديل صورة مائلة 90 درجة أونلاين',
        'قلب صورة سيلفي دون تطبيق',
        'تحويل الصورة إلى أبيض وأسود',
        'تعديل صورة ممسوحة ضوئيًا مائلة',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'صحّح اتجاه صورة مائلة، واعكس السيلفي أفقيًا أو عموديًا، وحوّل الصورة إلى تدرج رمادي بالأبيض والأسود، واضبط السطوع والتباين مباشرة — بتحويلات Canvas 2D المحلية.',
  },
  'image-to-base64': {
    slug: 'tahwil-al-suwar-ila-base64',
    name: 'محوّل الصور إلى Base64',
    shortDescription:
      'حوّل صور PNG وJPG وWebP وSVG وICO إلى روابط Data URI بصيغة Base64 ووسوم <img> في HTML وقواعد CSS، أو أعد Base64 إلى صورة.',
    keywords: [
      'تحويل الصورة إلى base64',
      'محول base64 للصور',
      'تحويل base64 إلى صورة',
      'مولد data uri',
      'مشفر base64 أونلاين',
      'base64 للصور في css',
      'تحويل png إلى base64',
      'فك base64 إلى صورة',
      'محول صور base64',
    ],
    seo: {
      title: 'تحويل الصور إلى Base64 — محوّل Data URI | UtilityFlow',
      description:
        'حوّل الأيقونات والشعارات الصغيرة إلى روابط Data URI بصيغة Base64 أو وسم img في HTML أو خلفية CSS، أو شاهد سلسلة Base64 كمعاينة صورة فورًا — مجاني وبنقرة واحدة.',
      primaryKeyword: 'تحويل الصورة إلى base64',
      secondaryKeywords: [
        'محول base64 للصور',
        'تحويل base64 إلى صورة',
        'مولد data uri',
        'مشفر base64 أونلاين',
      ],
      longTailKeywords: [
        'كيفية تحويل أيقونة png إلى data uri في css',
        'مشاهدة سلسلة base64 كصورة',
        'تحويل شعار صغير إلى base64 لبريد html',
        'الفرق بين حجم الصورة الثنائية وbase64',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'حوّل الأيقونات والشعارات ورسوم البريد الصغيرة إلى روابط data:image/...;base64,... مكتفية بذاتها ووسوم HTML <img> جاهزة للنسخ وقواعد background-image في CSS — أو اختر الوضع الآخر لعرض سلسلة Base64 وتنزيلها كصورة.',
  },
  'color-contrast-checker': {
    slug: 'fahs-tabayun-al-alwan',
    name: 'فاحص تباين الألوان',
    shortDescription:
      'افحص نسبة تباين الألوان وفق WCAG 2.1 لمستويات AA وAAA، وحوّل بين HEX وRGB وHSL، واستخرج لوحة ألوان من صورة مرفوعة.',
    keywords: [
      'فاحص تباين الألوان',
      'فاحص تباين wcag',
      'فحص نسبة تباين الألوان',
      'تركيبات ألوان ميسرة',
      'محول hex إلى rgb',
      'مستخرج لوحة ألوان',
      'فاحص تباين أونلاين',
      'فحص تباين لون النص',
      'نسبة تباين wcag aa',
    ],
    seo: {
      title: 'فاحص تباين الألوان — WCAG AA وAAA مجاني | UtilityFlow',
      description:
        'افحص نسب تباين النص والخلفية وفق WCAG 2.1 لمستويات AA وAAA، وحوّل بين HEX وRGB وHSL، واستخرج لوحة ألوان من صورة — مجاني، في المتصفح، دون أي تسجيل وبنقرة واحدة.',
      primaryKeyword: 'فاحص تباين الألوان',
      secondaryKeywords: [
        'فاحص تباين wcag',
        'فحص نسبة تباين الألوان',
        'تركيبات ألوان ميسرة',
        'محول hex إلى rgb',
      ],
      longTailKeywords: [
        'كيفية فحص نسبة تباين wcag 2.1 أونلاين',
        'ما نسبة التباين المطلوبة بين النص والخلفية',
        'استخراج لوحة ألوان سائدة من صورة',
        'فحص تباين ألوان الوضع الداكن',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'افحص أزواج ألوان واجهتك وفق قواعد WCAG 2.1 الرسمية (AA 4.5:1 وAA الكبير 3.0:1 وAAA 7.0:1)، وحوّل بين قيم HEX وRGB وHSL المتزامنة، وارفع لقطة شاشة أو شعارًا لتأخذ ألوان HEX الرئيسية مباشرة إلى لون المقدمة أو الخلفية.',
  },
  'qr-code-scanner': {
    slug: 'masah-qr-code',
    name: 'ماسح رمز QR',
    shortDescription:
      'اقرأ رموز QR وفكّ ترميزها من صورة مرفوعة أو كاميرا جهازك — في المتصفح، بخصوصية، مع منشئ رمز QR لبطاقة vCard.',
    keywords: [
      'ماسح رمز qr',
      'كيفية مسح رمز qr',
      'ماسح qr أونلاين',
      'مسح رمز qr من صورة',
      'قارئ رمز qr أونلاين',
      'فك ترميز رمز qr',
      'مسح qr من اللابتوب',
      'مولد رمز qr لبطاقة vcard',
      'قراءة رمز qr',
    ],
    seo: {
      title: 'مسح رمز QR — قارئ QR أونلاين مجاني وسريع | UtilityFlow',
      description:
        'امسح رمز QR من لقطة شاشة أو صورة أو كاميرا وفكّ ترميزه — في المتصفح، بخصوصية. وأنشئ أيضًا رمز QR لبطاقة vCard بصيغتي PNG وSVG، مجاني دون تسجيل وبنقرة واحدة.',
      primaryKeyword: 'ماسح رمز qr',
      secondaryKeywords: [
        'كيفية مسح رمز qr',
        'ماسح qr أونلاين',
        'مسح رمز qr من صورة',
        'قارئ رمز qr أونلاين',
      ],
      longTailKeywords: [
        'كيفية مسح رمز qr من لقطة شاشة أونلاين',
        'مسح رمز qr بكاميرا اللابتوب دون تطبيق',
        'فك ترميز رمز qr من صورة png أو jpg',
        'إنشاء رمز qr لبطاقة vcard مجانًا',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'اقرأ محتوى رمز QR من لقطة شاشة أو صورة أو بث كاميرا مباشر في متصفحك — مع التعرّف التلقائي على نوع الحمولة (رابط أو Wi-Fi أو vCard أو نص) — وأنشئ أيضًا بطاقات اتصال QR نظيفة بصيغتي PNG وSVG من منشئ vCard.',
  },
  'password-generator': {
    slug: 'mulid-kalimat-al-murur',
    name: 'مولّد كلمات المرور الآمنة',
    shortDescription:
      'أنشئ كلمات مرور عشوائية غير منحازة عبر crypto.getRandomValues وعبارات مرور سهلة التذكر بأسلوب Diceware، مع إنتروبيا دقيقة.',
    keywords: [
      'مولد كلمات المرور',
      'إنشاء كلمة مرور قوية',
      'مولد كلمات مرور آمنة',
      'مولد كلمات مرور عشوائية',
      'طريقة إنشاء كلمة مرور',
      'مولد عبارات المرور',
      'مولد كلمات مرور قوية أونلاين',
      'كلمة مرور آمنة',
      'فاحص إنتروبيا كلمة المرور',
    ],
    seo: {
      title: 'مولّد كلمات المرور — قوية وآمنة مجانًا | UtilityFlow',
      description:
        'أنشئ كلمات مرور عشوائية قوية وعبارات مرور Diceware سهلة التذكر في المتصفح، باستخدام Web Crypto ونتيجة إنتروبيا دقيقة — لا يُحفظ شيء، مجاني وبنقرة واحدة.',
      primaryKeyword: 'مولد كلمات المرور',
      secondaryKeywords: [
        'إنشاء كلمة مرور قوية',
        'مولد كلمات مرور آمنة',
        'مولد كلمات مرور عشوائية',
        'طريقة إنشاء كلمة مرور',
      ],
      longTailKeywords: [
        'كيفية إنشاء كلمة مرور آمنة عبر crypto getrandomvalues',
        'إنشاء عبارة مرور diceware من 5 كلمات',
        'كم إنتروبيا كلمة مرور من 18 حرفًا',
        'إنشاء كلمة مرور دون أحرف ملتبسة',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'أنشئ كلمات مرور عالية الإنتروبيا وعبارات مرور من عدة كلمات سهلة التذكر، محليًا بالكامل، باستخدام مولّد الأرقام العشوائية الآمن للأجهزة في المتصفح (window.crypto.getRandomValues) — مع أخذ عينات بالرفض لإزالة انحياز الباقي وخلط Fisher-Yates لتجنب مواضع الأحرف المتوقعة.',
  },
  'file-hash-verifier': {
    slug: 'fahs-hash-al-malafat',
    name: 'مدقّق بصمة الملفات (Hash)',
    shortDescription:
      'استخرج بصمة SHA-256 وSHA-512 وSHA-384 وSHA-1 لأي ملف محليًا عبر Web Crypto، وتحقق من سلامة التنزيلات.',
    keywords: [
      'فاحص بصمة الملف',
      'فاحص sha256 أونلاين',
      'كيفية فحص بصمة الملف',
      'التحقق من sha256',
      'مدقق hash أونلاين',
      'فحص سلامة الملف',
      'فحص sha256sum',
      'التحقق من ملف منزّل',
      'مولد بصمة sha512',
    ],
    seo: {
      title: 'مدقّق بصمة الملفات — تحقق من SHA-256 | UtilityFlow',
      description:
        'استخرج بصمة SHA-256 وSHA-512 وSHA-384 وSHA-1 لأي ملف محلي في المتصفح، وقارنها بالبصمة المنشورة فورًا — دون رفع، مجاني بالكامل دون أي تسجيل وبنقرة واحدة.',
      primaryKeyword: 'فاحص بصمة الملف',
      secondaryKeywords: [
        'فاحص sha256 أونلاين',
        'كيفية فحص بصمة الملف',
        'التحقق من sha256',
        'مدقق hash أونلاين',
      ],
      longTailKeywords: [
        'كيفية فحص بصمة sha256 لبرنامج منزّل',
        'استخراج sha256 لملف دون طرفية',
        'التحقق من sha256 لملف iso في المتصفح',
        'مطابقة بصمة الملف مع checksum المتوقع',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'تحقق من سلامة وأصالة برامج التثبيت والملفات ومجموعات البيانات والمستندات محليًا — باستخراج بصمات SHA-256 وSHA-512 وSHA-384 وSHA-1 عبر subtle.digest الآمن للأجهزة في Web Crypto ومطابقتها فورًا مع checksum المتوقع.',
  },
  'favicon-generator': {
    slug: 'mulid-favicon',
    name: 'مولّد أيقونة الموقع (Favicon)',
    shortDescription:
      'أنشئ أيقونات PNG متعددة الأحجام (من 16×16 إلى 512×512) وملف favicon.ico حقيقي متعدد الإطارات من شارة أحرف أو شعار مرفوع.',
    keywords: [
      'مولد favicon',
      'إنشاء favicon للموقع',
      'إنشاء ملف favicon.ico',
      'مولد أيقونة موقع',
      'صانع favicon أونلاين مجاني',
      'تحويل png إلى favicon',
      'مولد أيقونة apple touch',
      'مولد أيقونات pwa',
      'طريقة إنشاء favicon',
    ],
    seo: {
      title: 'مولّد أيقونة الموقع — ملف .ico وأيقونات PNG | UtilityFlow',
      description:
        'أنشئ ملف favicon.ico متعدد الإطارات وأيقونات PNG من 16 إلى 512 بكسل وأيقونات Apple Touch وPWA من شعارك أو أحرفك — مجاني، في المتصفح، دون أي تسجيل وبنقرة واحدة.',
      primaryKeyword: 'مولد favicon',
      secondaryKeywords: [
        'إنشاء favicon للموقع',
        'إنشاء ملف favicon.ico',
        'مولد أيقونة موقع',
        'صانع favicon أونلاين مجاني',
      ],
      longTailKeywords: [
        'كيفية إنشاء ملف favicon ico لموقعك مجانًا',
        'إنشاء favicon بمقاسات 16 و32 و48 من شعار',
        'إنشاء أيقونات pwa بمقاسي 192 و512',
        'إنشاء favicon من الأحرف الأولى أونلاين',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'صمّم أيقونة أحادية اللون نظيفة في ثوانٍ أو ارفع شعار علامتك — أيقونات PNG نظيفة بمقاسات 16×16 و32×32 و48×48 وApple Touch 180×180 وPWA 192×192 / 512×512 وملف favicon.ico حقيقي متعدد الصور وفق المعيار، مع وسوم HTML <link> جاهزة للصق.',
  },
};
