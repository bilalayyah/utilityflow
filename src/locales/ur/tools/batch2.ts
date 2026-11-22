import type { ToolLocaleOverride } from '../../types';

/**
 * Urdu overrides — Batch 2: Developer tools (14 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Original Urdu copy, SEO-optimized for Urdu search intent.
 * Slugs are romanized Urdu, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const UR_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-inkoder-aur-decoder',
    name: 'بیس 64 انکوڈر / ڈیکوڈر',
    shortDescription:
      'متن کو معیاری یا یو آر ایل محفوظ بیس 64 میں بدلیں اور یو ٹی ایف 8 بیس 64 سٹرنگز کو اپنے براؤزر میں محفوظ طریقے سے ڈی کوڈ کریں۔',
    keywords: [
      'بیس 64 انکوڈر آن لائن',
      'بیس 64 ڈیکوڈر',
      'متن کو بیس 64 میں بدلیں',
      'بیس 64 سے متن حاصل کریں',
      'مفت بیس 64 ٹول',
      'base64 encode online',
      'base64 decode kaise karein',
      'یو آر ایل سیف بیس 64',
      'بیس 64 کنورٹر آن لائن',
    ],
    seo: {
      title: 'بیس 64 انکوڈر اور ڈیکوڈر مفت آن لائن | UtilityFlow',
      description:
        'یو ٹی ایف 8 متن کو بیس 64 میں بدلیں یا بیس 64 کو پڑھنے کے قابل متن میں ڈی کوڈ کریں، یو آر ایل سیف آپشن کے ساتھ، سب کچھ آپ کے براؤزر میں۔ ابھی مفت آزمائیں۔',
      primaryKeyword: 'بیس 64 انکوڈر آن لائن',
      secondaryKeywords: ['بیس 64 ڈیکوڈر', 'متن کو بیس 64 میں بدلیں', 'بیس 64 سے متن حاصل کریں', 'مفت بیس 64 ٹول'],
      longTailKeywords: ['ایموجی والے متن کو بیس 64 میں کیسے بدلیں', 'یو آر ایل سیف بیس 64 بغیر پیڈنگ کے ڈی کوڈ کریں', 'براؤزر میں مفت بیس 64 کنورٹر', 'بیس 64 سٹرنگ کو آن لائن ڈی کوڈ کرنے کا طریقہ'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'یو ٹی ایف 8 سٹرنگز، بشمول اعراب والے حروف اور ایموجی، کو معیاری یا آر ایف سی 4648 کے مطابق یو آر ایل سیف بیس 64 میں بدلیں، یا بیس 64 کو فوری جانچ کے ساتھ سادہ متن میں ڈی کوڈ کریں۔',
  },
  'url-encoder-decoder': {
    slug: 'url-inkoder-aur-decoder',
    name: 'یو آر ایل انکوڈر / ڈیکوڈر',
    shortDescription:
      'کوئری ویلیوز یا مکمل یو آر ایل کو فیصد انکوڈنگ سے انکوڈ کریں اور ڈی کوڈ کرتے ہوئے ہوسٹ، پاتھ اور کوئری پیرامیٹرز دیکھیں۔',
    keywords: [
      'یو آر ایل انکوڈر آن لائن',
      'یو آر ایل ڈیکوڈر',
      'url encode online',
      'url decode kaise karein',
      'یو آر ایل پارسر آن لائن',
      'فیصد انکوڈنگ کیا ہے',
      'مفت یو آر ایل انکوڈر ٹول',
      'کوئری سٹرنگ انکوڈ کریں',
      'لنک ڈی کوڈ کریں آن لائن',
    ],
    seo: {
      title: 'یو آر ایل انکوڈر اور ڈیکوڈر مفت آن لائن | UtilityFlow',
      description:
        'یو آر ایل کو انکوڈ یا ڈی کوڈ کریں، encodeURIComponent اور encodeURI طریقوں سے، اور پروٹوکول، ہوسٹ، پاتھ اور کوئری پیرامیٹرز کی تفصیل دیکھیں۔ نتیجہ حاصل کریں۔',
      primaryKeyword: 'یو آر ایل انکوڈر آن لائن',
      secondaryKeywords: ['یو آر ایل ڈیکوڈر', 'url encode online', 'فیصد انکوڈنگ کیا ہے', 'یو آر ایل پارسر آن لائن'],
      longTailKeywords: ['encodeuri اور encodeuricomponent میں کیا فرق ہے', 'یو آر ایل کے کوئری پیرامیٹرز کو ڈی کوڈ کیسے کریں', 'یو آر ایل میں خاص حروف کو فیصد انکوڈنگ سے بدلیں', 'ایمپرسینڈ توڑے بغیر کوئری ویلیو انکوڈ کریں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'کوئری پیرامیٹر کی ویلیو یا مکمل یو آر ایل کو محفوظ طریقے سے انکوڈ کریں، فیصد انکوڈ شدہ سٹرنگز کو ڈی کوڈ کریں، اور ہر کوئری پیرامیٹر کی تفصیل براہ راست جدول میں دیکھیں۔',
  },
  'uuid-generator': {
    slug: 'uuid-muwallid',
    name: 'یو یو آئی ڈی جنریٹر (v4 اور v7)',
    shortDescription:
      'آر ایف سی 9562 کے مطابق خفیہ طور پر بے ترتیب یو یو آئی ڈی v4 اور وقت کے مطابق ترتیب شدہ یو یو آئی ڈی v7 ایک ساتھ بڑی تعداد میں بنائیں۔',
    keywords: [
      'uuid generator online',
      'uuid بنانے کا طریقہ',
      'مفت uuid جنریٹر',
      'guid generator online',
      'uuid v4 آن لائن',
      'uuid v7 کیا ہے',
      'بے ترتیب uuid بنائیں',
      'ایک ساتھ کئی uuid بنائیں',
      'منفرد شناختی نمبر بنائیں',
    ],
    seo: {
      title: 'یو یو آئی ڈی جنریٹر v4 اور v7 مفت آن لائن | UtilityFlow',
      description:
        'ایک ساتھ 100 تک یو یو آئی ڈی v4 یا وقت کے مطابق ترتیب شدہ یو یو آئی ڈی v7 بنائیں، بڑے حروف، ہائفن اور بریکٹ کے آپشنز کے ساتھ، مکمل مفت۔ ابھی نتیجہ حاصل کریں۔',
      primaryKeyword: 'uuid generator online',
      secondaryKeywords: ['uuid بنانے کا طریقہ', 'مفت uuid جنریٹر', 'guid generator online', 'uuid v4 آن لائن'],
      longTailKeywords: ['ایک ساتھ کئی uuid v4 اور v7 کیسے بنائیں', 'وقت کے مطابق ترتیب شدہ uuid v7 کیا ہے', 'بغیر ہائفن کے بڑے حروف میں uuid بنائیں', 'ایک ساتھ 100 uuid بنانے کا مفت ٹول'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ایک یا کئی شناختی نمبر ایک ساتھ بنائیں — خفیہ طور پر بے ترتیب یو یو آئی ڈی v4 اور ٹائم اسٹیمپ کے مطابق ترتیب شدہ یو یو آئی ڈی v7، براہ راست ویب کرپٹو اے پی آئی سے، کئی فارمیٹ آپشنز کے ساتھ۔',
  },
  'regex-tester': {
    slug: 'regex-jaanch',
    name: 'ریجیکس ٹیسٹر',
    shortDescription:
      'جاوا اسکرپٹ ریگولر ایکسپریشنز کو براہ راست میچ ہائی لائٹ، کیپچر گروپس، فلیگز اور ریپلیسمنٹ پیش نظارہ کے ساتھ جانچیں۔',
    keywords: [
      'regex tester online',
      'ریگولر ایکسپریشن ٹیسٹ کریں',
      'جاوا اسکرپٹ regex ٹیسٹر',
      'regex چیکر آن لائن',
      'regex ڈی بگ کریں',
      'مفت regex ٹول',
      'regex پیٹرن ٹیسٹ کریں',
      'کیپچر گروپ کیا ہے',
      'regex سیکھیں آسان طریقہ',
    ],
    seo: {
      title: 'ریجیکس ٹیسٹر: جاوا اسکرپٹ regex جانچیں | UtilityFlow',
      description:
        'ریگولر ایکسپریشنز کو g اور i اور m اور s فلیگز کے ساتھ جانچیں، میچ ہائی لائٹ، کیپچر گروپس کی جانچ اور ریپلیسمنٹ پیش نظارہ کے ساتھ، مفت اور بغیر رجسٹریشن۔',
      primaryKeyword: 'regex tester online',
      secondaryKeywords: ['ریگولر ایکسپریشن ٹیسٹ کریں', 'جاوا اسکرپٹ regex ٹیسٹر', 'regex چیکر آن لائن', 'regex ڈی بگ کریں'],
      longTailKeywords: ['جاوا اسکرپٹ regex میں کیپچر گروپس کیسے جانچیں', 'regex میچ ہائی لائٹ والا آن لائن ٹول', 'کیپچر گروپ کے ساتھ regex ریپلیسمنٹ پیش نظارہ', 'براہ راست ہائی لائٹ کے ساتھ regex ڈی بگ کریں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'جاوا اسکرپٹ ریگولر ایکسپریشنز کو انٹرایکٹو طریقے سے ڈی بگ کریں — براہ راست میچ ہائی لائٹ، میچ کی جگہ، نمبر والے کیپچر گروپس، فلیگ کے بٹن اور ریپلیسمنٹ پیش نظارہ۔',
  },
  'jwt-decoder': {
    slug: 'jwt-decode-karein',
    name: 'جے ڈبلیو ٹی ڈیکوڈر',
    shortDescription:
      'جے ایس او این ویب ٹوکن کے ہیڈر، پے لوڈ کلیمز اور ختم ہونے کا وقت اپنے براؤزر میں محفوظ طریقے سے ڈی کوڈ کریں۔',
    keywords: [
      'jwt decoder online',
      'jwt ٹوکن ڈی کوڈ کریں',
      'jwt دیکھنے والا ٹول',
      'jwt ٹوکن چیک کریں',
      'jwt کب ختم ہوگا',
      'jwt کلیمز کیا ہیں',
      'jwt ٹوکن پڑھیں',
      'مفت jwt ٹول',
      'ٹوکن ڈی کوڈ کریں آن لائن',
    ],
    seo: {
      title: 'جے ڈبلیو ٹی ڈیکوڈر: ٹوکن اور ختم ہونے کا وقت | UtilityFlow',
      description:
        'جے ڈبلیو ٹی ہیڈر اور پے لوڈ کلیمز کو براؤزر میں ڈی کوڈ کریں، ٹوکن کو کسی سرور پر بھیجے بغیر، اور iat اور nbf اور exp کو یو ٹی سی تاریخ میں دیکھیں۔ مفت اور نجی۔',
      primaryKeyword: 'jwt decoder online',
      secondaryKeywords: ['jwt ٹوکن ڈی کوڈ کریں', 'jwt دیکھنے والا ٹول', 'jwt ٹوکن چیک کریں', 'jwt کب ختم ہوگا'],
      longTailKeywords: ['jwt ٹوکن کو سرور پر بھیجے بغیر مقامی طور پر ڈی کوڈ کریں', 'jwt میں exp ختم ہونے کی تاریخ کیسے چیک کریں', 'jwt ہیڈر اور کلیمز کو base64url میں کیسے دیکھیں', 'براؤزر میں jwt پے لوڈ کلیمز پڑھنے کا طریقہ'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'جے ایس او این ویب ٹوکن کو اپنے براؤزر کی مقامی میموری میں محفوظ طریقے سے جانچیں — ہیڈر اور پے لوڈ کو ترتیب شدہ شکل میں دیکھیں اور iat اور nbf اور exp کی ختم ہونے کی حالت پڑھیں۔',
  },
  'hash-generator': {
    slug: 'hash-bananay-wala',
    name: 'ہیش جنریٹر (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'ویب کرپٹو کے ذریعے متن یا مقامی فائلوں کے لیے SHA-1 اور SHA-256 اور SHA-384 اور SHA-512 ہیش بنائیں۔',
    keywords: [
      'hash generator online',
      'sha256 جنریٹر آن لائن',
      'sha512 ہیش بنائیں',
      'فائل کا checksum معلوم کریں',
      'sha1 ہیش جنریٹر',
      'sha384 ہیش آن لائن',
      'مفت checksum کیلکولیٹر',
      'فائل کا checksum چیک کریں',
      'محفوظ ہیش جنریٹر آن لائن',
    ],
    seo: {
      title: 'ہیش جنریٹر SHA-256 اور SHA-512 مفت آن لائن | UtilityFlow',
      description:
        'متن اور مقامی فائلوں کے لیے SHA-1 اور SHA-256 اور SHA-384 اور SHA-512 ہیش ہیکس یا بیس 64 شکل میں بنائیں، اپنے براؤزر میں، فائل اپ لوڈ کیے بغیر، مفت اور محفوظ۔',
      primaryKeyword: 'hash generator online',
      secondaryKeywords: ['sha256 جنریٹر آن لائن', 'فائل کا checksum معلوم کریں', 'sha512 ہیش بنائیں', 'مفت checksum کیلکولیٹر'],
      longTailKeywords: ['براؤزر میں مقامی فائل کا sha256 کیسے نکالیں', 'ہیکس اور بیس 64 میں sha256 ہیش بنائیں', 'ویب کرپٹو اے پی آئی سے آن لائن ہیش جنریٹر', 'ڈاؤن لوڈ شدہ فائل کا checksum کیسے چیک کریں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'براؤزر کی اصل ویب کرپٹو اے پی آئی سے SHA-1 اور SHA-256 اور SHA-384 اور SHA-512 ہیش ایک ساتھ نکالیں — یو ٹی ایف 8 متن اور مقامی فائلوں دونوں کے لیے۔',
  },
  'html-entity-encoder': {
    slug: 'html-entity-inkoder',
    name: 'ایچ ٹی ایم ایل اینٹٹی انکوڈر اور ڈیکوڈر',
    shortDescription:
      'ایچ ٹی ایم ایل کے محفوظ حروف اور غیر ASCII علامات کو اینٹٹی میں بدلیں یا ایچ ٹی ایم ایل اینٹٹیز کو صاف طریقے سے ڈی کوڈ کریں۔',
    keywords: [
      'html entity encoder online',
      'html escape کیسے کریں',
      'html اینٹٹی ڈی کوڈ کریں',
      'خاص حروف کو html میں بدلیں',
      'html escape ٹول آن لائن',
      'html اینٹٹی کنورٹر',
      'html ڈی کوڈ کریں آن لائن',
      'html میں کوٹس escape کریں',
      'مفت html انکوڈر',
    ],
    seo: {
      title: 'ایچ ٹی ایم ایل اینٹٹی انکوڈر: علامات بدلیں | UtilityFlow',
      description:
        'ایچ ٹی ایم ایل کے محفوظ حروف اور غیر ASCII علامات کو اینٹٹیز میں بدلیں، یا نام والی اور عددی اینٹٹیز کو پڑھنے کے قابل متن میں ڈی کوڈ کریں، براؤزر میں۔',
      primaryKeyword: 'html entity encoder online',
      secondaryKeywords: ['html escape کیسے کریں', 'html اینٹٹی ڈی کوڈ کریں', 'خاص حروف کو html میں بدلیں', 'html escape ٹول آن لائن'],
      longTailKeywords: ['کوڈ سنیپٹ کے لیے html ٹیگز کو escape کیسے کریں', 'نام والی اور عددی html اینٹٹیز ڈی کوڈ کریں', 'خاص حروف کو html اینٹٹیز میں تبدیل کریں', 'html میں کوٹس اور ایمپرسینڈ کو escape کریں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ویب صفحے میں کوڈ سنیپٹ ڈالنے کے لیے محفوظ طریقے سے حروف اور کوٹس اور بین الاقوامی یونیکوڈ علامات کو ایچ ٹی ایم ایل اینٹٹیز میں بدلیں، یا escape شدہ ایچ ٹی ایم ایل سٹرنگ کو پڑھنے کے قابل متن میں ڈی کوڈ کریں۔',
  },
  'json-csv-converter': {
    slug: 'json-ko-csv-mein-badlein',
    name: 'جے ایس او این سے سی ایس وی / سی ایس وی سے جے ایس او این کنورٹر',
    shortDescription:
      'جے ایس او این صفوں کو آر ایف سی 4180 سی ایس وی شیٹس میں بدلیں اور کوٹس والی سی ایس وی فائلوں کو صاف جے ایس او این میں واپس لائیں۔',
    keywords: [
      'json to csv converter online',
      'csv to json converter',
      'json کو csv میں بدلیں مفت',
      'json to csv kaise karein',
      'csv to json kaise karein',
      'مفت json csv کنورٹر',
      'json صف کو csv میں بدلیں',
      'csv کو json میں بدلیں آن لائن',
      'json tsv کنورٹر آن لائن',
    ],
    seo: {
      title: 'جے ایس او این سے سی ایس وی کنورٹر مفت آن لائن | UtilityFlow',
      description:
        'جے ایس او این صف کو سی ایس وی شیٹ میں بدلیں، اندرونی آبجیکٹس کو فلیٹ کرتے ہوئے، یا سی ایس وی اور ٹی ایس وی فائلوں کو جے ایس او این میں بدلیں۔ مفت اور مقامی۔',
      primaryKeyword: 'json to csv converter online',
      secondaryKeywords: ['csv to json converter', 'json کو csv میں بدلیں مفت', 'json to csv kaise karein', 'csv to json kaise karein'],
      longTailKeywords: ['اندرونی json آبجیکٹ کو csv کالمز میں تبدیل کریں', 'کوما والی کوٹس شدہ csv کو json صف میں بدلیں', 'براؤزر میں ڈاؤن لوڈ کے ساتھ json سے csv ٹول', 'json صف کو مفت csv شیٹ میں تبدیل کریں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'اے پی آئی کی جے ایس او این صفوں کو صاف سی ایس وی شیٹس میں بدلیں — اندرونی آبجیکٹس کی چابیاں خودکار طریقے سے فلیٹ ہو جاتی ہیں — یا کوٹس والے کوما والی سی ایس وی اور ٹی ایس وی فائلوں کو ترتیب شدہ جے ایس او این میں بدلیں۔',
  },
  'unix-timestamp-converter': {
    slug: 'unix-waqt-badalne-wala',
    name: 'یونکس ٹائم اسٹیمپ کنورٹر',
    shortDescription:
      'یونکس ایپاک سیکنڈز یا ملی سیکنڈز کو آئی ایس او 8601 اور یو ٹی سی اور مقامی تاریخوں میں بدلیں — اور اس کے برعکس بھی۔',
    keywords: [
      'unix timestamp converter online',
      'epoch کو تاریخ میں بدلیں',
      'unix time کیا ہے',
      'epoch کیسے نکالیں',
      'ٹائم اسٹیمپ کو تاریخ میں بدلیں',
      'تاریخ کو unix میں بدلیں',
      'موجودہ unix time کیا ہے',
      'epoch ملی سیکنڈ کنورٹر',
      'unix کنورٹر آن لائن',
    ],
    seo: {
      title: 'یونکس ٹائم اسٹیمپ کنورٹر: تاریخ بدلیں | UtilityFlow',
      description:
        'یونکس ٹائم اسٹیمپ کو سیکنڈز یا ملی سیکنڈز میں آئی ایس او 8601 اور یو ٹی سی اور مقامی وقت میں بدلیں، یا کسی بھی تاریخ سے یونکس وقت نکالیں۔ مفت اور فوری نتیجہ۔',
      primaryKeyword: 'unix timestamp converter online',
      secondaryKeywords: ['epoch کو تاریخ میں بدلیں', 'unix time کیا ہے', 'ٹائم اسٹیمپ کو تاریخ میں بدلیں', 'تاریخ کو unix میں بدلیں'],
      longTailKeywords: ['epoch ملی سیکنڈز کو iso 8601 تاریخ میں بدلیں', 'موجودہ unix وقت سیکنڈز میں براہ راست دیکھیں', 'مقامی تاریخ اور وقت کو unix epoch میں بدلیں', 'یونکس ٹائم اسٹیمپ کو مفت utc تاریخ میں بدلیں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'یونکس ایپاک نمبر کو سیکنڈز یا ملی سیکنڈز میں آئی ایس او 8601 اور یو ٹی سی اور مقامی ٹائم زون کی سٹرنگز میں بدلیں — متعلقہ فرق کے ساتھ — یا کسی بھی کیلنڈر تاریخ کو یونکس ٹائم اسٹیمپ میں واپس بدلیں۔',
  },
  'sql-formatter': {
    slug: 'sql-sajane-wala',
    name: 'ایس کیو ایل فارمیٹر',
    shortDescription:
      'ایس کیو ایل کوئریز کو ترتیب دیں، انڈینٹ کریں اور معیاری بنائیں — کی ورڈز بڑے یا چھوٹے حروف میں، یا کوئری کو ایک لائن میں چھوٹا کریں۔',
    keywords: [
      'sql formatter online',
      'sql کوئری ترتیب دیں',
      'sql بہتر بنانے والا ٹول',
      'sql منی فائر آن لائن',
      'sql ترتیب دینے کا ٹول',
      'sql کوئری خوبصورت بنائیں',
      'sql انڈینٹ کیسے کریں',
      'مفت sql فارمیٹر',
      'sql فارمیٹ کریں آن لائن مفت',
    ],
    seo: {
      title: 'ایس کیو ایل فارمیٹر: کوئری آن لائن ترتیب دیں | UtilityFlow',
      description:
        'ایس کیو ایل کوئری کو کلاز بریکس، بڑے یا چھوٹے کی ورڈز اور دو یا چار اسپیس انڈینٹ کے ساتھ ترتیب دیں، یا اسے ایک لائن میں چھوٹا کریں۔ مفت اور بغیر رجسٹریشن۔',
      primaryKeyword: 'sql formatter online',
      secondaryKeywords: ['sql کوئری ترتیب دیں', 'sql بہتر بنانے والا ٹول', 'sql منی فائر آن لائن', 'sql ترتیب دینے کا ٹول'],
      longTailKeywords: ['select اور join اور group by والی sql کوئری ترتیب دیں', 'sql کی ورڈز کو بغیر غلطی کے بڑے حروف میں بدلیں', 'سٹرنگز محفوظ رکھتے ہوئے sql کوئری چھوٹی کریں', 'دو یا چار اسپیس انڈینٹ کے ساتھ sql کوئری ترتیب دیں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ایک لائن میں گھسی ہوئی ایس کیو ایل کوئری کو پڑھنے کے قابل، ترتیب شدہ جملے میں بدلیں — SELECT اور FROM اور JOIN اور WHERE اور GROUP BY اور ORDER BY کی واضح ترتیب کے ساتھ — کوٹس والی سٹرنگز اور کمنٹس محفوظ رکھتے ہوئے۔',
  },
  'css-minifier': {
    slug: 'css-chhota-karne-wala',
    name: 'سی ایس ایس منی فائر اور بیوٹی فائر',
    shortDescription:
      'سی ایس ایس اسٹائل شیٹس کو چھوٹا کر کے بنڈل کا سائز کم کریں یا کمپریس شدہ سی ایس ایس کو صاف انڈینٹ کے ساتھ خوبصورت بنائیں۔',
    keywords: [
      'css minifier online',
      'css بیوٹی فائر آن لائن',
      'css کمپریس کیسے کریں',
      'css ترتیب دینے کا ٹول',
      'css چھوٹا کریں آن لائن',
      'css منی فائی کیسے کریں',
      'مفت css منی فائر',
      'css ان منی فائی کریں',
      'css فائل کا سائز کم کریں',
    ],
    seo: {
      title: 'سی ایس ایس منی فائر اور بیوٹی فائر مفت آن لائن | UtilityFlow',
      description:
        'سی ایس ایس کو کمنٹس اور اضافی اسپیس ہٹا کر چھوٹا کریں، بچائے گئے بائٹس کے اعداد کے ساتھ، یا کمپریس شدہ شیٹ کو صاف رولز میں کھولیں۔ مکمل مفت اور بغیر رجسٹریشن۔',
      primaryKeyword: 'css minifier online',
      secondaryKeywords: ['css بیوٹی فائر آن لائن', 'css کمپریس کیسے کریں', 'css ترتیب دینے کا ٹول', 'css چھوٹا کریں آن لائن'],
      longTailKeywords: ['کوٹس والی سٹرنگز اور میڈیا کوئری محفوظ رکھتے ہوئے css چھوٹا کریں', 'کمپریس شدہ css شیٹ کو آن لائن کھولیں', 'براؤزر میں css کمپریشن فیصد معلوم کریں', 'ڈیپلائمنٹ سے پہلے css فائل کا سائز کم کریں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'سی ایس ایس اسٹائل شیٹس کو کمنٹس، غیر ضروری اسپیس اور بند بریکٹ سے پہلے آخری سیمی کولن ہٹا کر کمپریس کریں، یا ایک لائن میں کمپریس شدہ سی ایس ایس کو پڑھنے کے قابل انڈینٹ شدہ بلاکس میں کھولیں۔',
  },
  'js-formatter': {
    slug: 'js-code-sajane-wala',
    name: 'جاوا اسکرپٹ / ٹائپ اسکرپٹ منی فائر اور فارمیٹر',
    shortDescription:
      'جاوا اسکرپٹ سنیپٹس کو کمنٹس اور اضافی اسپیس ہٹا کر چھوٹا کریں یا کمپریس شدہ کوڈ بلاکس کو خوبصورت بنائیں۔',
    keywords: [
      'javascript minifier online',
      'js فارمیٹر آن لائن',
      'js بیوٹی فائر آن لائن',
      'جاوا اسکرپٹ کمپریس کیسے کریں',
      'js ترتیب دینے کا ٹول',
      'جاوا اسکرپٹ چھوٹا کریں',
      'js کوڈ خوبصورت بنائیں',
      'typescript منی فائر آن لائن',
      'مفت js کوڈ فارمیٹر',
    ],
    seo: {
      title: 'جاوا اسکرپٹ منی فائر اور فارمیٹر مفت آن لائن | UtilityFlow',
      description:
        'جاوا اسکرپٹ اور ٹائپ اسکرپٹ کو کمنٹس اور اضافی اسپیس ہٹا کر چھوٹا کریں، یا کمپریس شدہ کوڈ کو دو یا چار اسپیس انڈینٹ کے ساتھ کھولیں۔ مفت اور فوری نتیجہ پائیں۔',
      primaryKeyword: 'javascript minifier online',
      secondaryKeywords: ['js فارمیٹر آن لائن', 'js بیوٹی فائر آن لائن', 'جاوا اسکرپٹ کمپریس کیسے کریں', 'js ترتیب دینے کا ٹول'],
      longTailKeywords: ['سٹرنگز اور ٹیمپلیٹ لٹریلز محفوظ رکھتے ہوئے js چھوٹا کریں', 'انڈینٹ کے ساتھ کمپریس شدہ جاوا اسکرپٹ کوڈ کھولیں', 'براؤزر میں js فارمیٹر اور منی فائر ٹول', 'دو یا چار اسپیس انڈینٹ کے ساتھ جاوا اسکرپٹ خوبصورت بنائیں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'بک مارکلیٹس اور ان لائن اسکرپٹس کے لیے جاوا اسکرپٹ سنیپٹس کو کمپریس کریں — کمنٹس اور اضافی اسپیس ہٹاتے ہوئے سٹرنگ لٹریلز محفوظ رکھیں — یا کمپریس شدہ کوڈ کو دوبارہ انڈینٹ کریں۔',
  },
  'cron-expression-parser': {
    slug: 'cron-expression-samajhne-wala',
    name: 'کرون ایکسپریشن پارسر اور شیڈول پیش نظارہ',
    shortDescription:
      'پانچ فیلڈ والے کرون ایکسپریشنز کو سادہ زبان میں سمجھیں، پہلے سے تیار شیڈول آزمائیں اور اگلے 8 رن ٹائم دیکھیں۔',
    keywords: [
      'cron expression parser online',
      'crontab جنریٹر آن لائن',
      'cron شیڈول ٹیسٹر',
      'cron ایکسپریشن سمجھنے کا طریقہ',
      'cron جاب کیا ہے',
      'cron ایکسپریشن ٹیسٹر آن لائن',
      'crontab guru کا متبادل',
      'cron شیڈول پیش نظارہ ٹول',
      'cron اردو میں سمجھیں',
    ],
    seo: {
      title: 'کرون ایکسپریشن پارسر: شیڈول آسانی سے سمجھیں | UtilityFlow',
      description:
        'پانچ فیلڈ والے کرون ایکسپریشن کو سادہ زبان میں سمجھیں، پہلے سے تیار شیڈول آزمائیں اور اگلے 8 رن ٹائم دیکھیں۔ مفت اور آپ کا ڈیٹا آپ کے آلے سے باہر نہیں جاتا۔',
      primaryKeyword: 'cron expression parser online',
      secondaryKeywords: ['crontab جنریٹر آن لائن', 'cron شیڈول ٹیسٹر', 'cron ایکسپریشن سمجھنے کا طریقہ', 'cron جاب کیا ہے'],
      longTailKeywords: ['پانچ فیلڈ والے کرون ایکسپریشن کو سادہ زبان میں سمجھیں', 'کرون ایکسپریشن کے اگلے 8 رن ٹائم نکالیں', 'ہفتے کے دنوں اور اسٹیپ والے کرون ایکسپریشن آن لائن ٹیسٹ کریں', 'ہر کام والے دن صبح 9 بجے چلنے والا کرون ایکسپریشن'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'یونکس کرون ٹیب کے پانچ فیلڈ والے ایکسپریشنز کو واضح اور پڑھنے کے قابل خلاصے میں ڈی کوڈ کریں، فیلڈ کی حدود چیک کریں اور اگلے 8 شیڈول شدہ رن ٹائم دیکھیں۔',
  },
  'color-converter': {
    slug: 'rang-badalne-wala',
    name: 'رنگ کنورٹر (HEX / RGB / HSL اور WCAG کنٹراسٹ)',
    shortDescription:
      'رنگوں کو HEX اور RGB اور HSL کے درمیان بدلیں، براہ راست کلر پکر اور WCAG 2.1 کنٹراسٹ جانچ کے ساتھ۔',
    keywords: [
      'color converter online',
      'hex کو rgb میں بدلیں',
      'rgb کو hex میں کیسے بدلیں',
      'wcag کنٹراسٹ چیکر',
      'hex کو hsl میں بدلیں',
      'rgb کو hsl میں بدلیں',
      'کلر پکر آن لائن',
      'hex رنگ تبدیل کرنے کا ٹول',
      'hsl کو rgb میں بدلیں',
    ],
    seo: {
      title: 'رنگ کنورٹر HEX اور RGB اور HSL مفت آن لائن | UtilityFlow',
      description:
        'رنگوں کو HEX اور RGB اور HSL کے درمیان فوراً بدلیں اور متن اور پس منظر کے کنٹراسٹ کو WCAG 2.1 AA اور AAA کے مطابق جانچیں۔ مفت، بغیر رجسٹریشن، براؤزر میں۔',
      primaryKeyword: 'color converter online',
      secondaryKeywords: ['hex کو rgb میں بدلیں', 'rgb کو hex میں کیسے بدلیں', 'wcag کنٹراسٹ چیکر', 'hex کو hsl میں بدلیں'],
      longTailKeywords: ['hex رنگ کو css rgb اور hsl ویلیوز میں تبدیل کریں', 'wcag 2.1 aa اور aaa کے مطابق متن کا کنٹراسٹ چیک کریں', 'ڈویلپرز کے لیے hex اور rgb اور hsl رنگوں کا ٹول', 'css ویری ایبلز کے لیے hex کو hsl میں بدلیں'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'سی ایس ایس کی HEX اور RGB اور HSL شکلوں کے درمیان رنگوں کو آسانی سے بدلیں، براہ راست نمونے اور WCAG 2.1 کنٹراسٹ تناسب چیکر کے ساتھ — قابل رسائی یوزر انٹرفیس ڈیزائن کے لیے۔',
  },
};
