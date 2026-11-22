import type { ToolLocaleOverride } from '../../types';

/**
 * Bengali overrides — Batch 2: Developer tools (14 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Original Bengali copy, SEO-optimized for Bengali search intent.
 * Slugs are romanized Bengali, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const BN_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-encode-decode-korun',
    name: 'বেস৬৪ এনকোডার / ডিকোডার',
    shortDescription:
      'টেক্সটকে স্ট্যান্ডার্ড বা URL-নিরাপদ বেস৬৪-এ এনকোড করুন আর UTF-8 বেস৬৪ স্ট্রিং ব্রাউজারে নিরাপদে ডিকোড করুন।',
    keywords: [
      'base64 encoder decoder online',
      'বেস৬৪ এনকোডার অনলাইন',
      'বেস৬৪ ডিকোড কিভাবে করব',
      'base64 to text converter',
      'টেক্সট থেকে বেস৬৪ অনলাইন',
      'base64 url safe কী',
      'বেস৬৪ ডিকোডার টুল বাংলা',
      'base64 কনভার্টার ফ্রি',
      'utf8 base64 এনকোড করুন',
    ],
    seo: {
      title: 'বেস৬৪ এনকোডার ও ডিকোডার অনলাইন ফ্রি টুল | UtilityFlow',
      description:
        'UTF-8 টেক্সটকে বেস৬৪-এ এনকোড করুন বা বেস৬৪-কে পড়ার মতো টেক্সটে ডিকোড করুন — URL-নিরাপদ অপশনসহ, সবকিছু আপনার ব্রাউজারেই। এখনই ব্যবহার করুন — সম্পূর্ণ ফ্রি।',
      primaryKeyword: 'base64 encoder decoder online',
      secondaryKeywords: ['বেস৬৪ এনকোডার অনলাইন', 'বেস৬৪ ডিকোড কিভাবে করব', 'base64 to text converter', 'টেক্সট থেকে বেস৬৪ অনলাইন'],
      longTailKeywords: ['ইমোজিসহ utf8 টেক্সট বেস৬৪-এ কিভাবে এনকোড করব', 'url নিরাপদ বেস৬৪ প্যাডিং ছাড়া ডিকোড করুন', 'ব্রাউজারে ফ্রি বেস৬৪ কনভার্টার টুল', 'ইমোজিযুক্ত বেস৬৪ স্ট্রিং কিভাবে ডিকোড করব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'অ্যাকসেন্টযুক্ত অক্ষর ও ইমোজিসহ UTF-8 স্ট্রিং RFC 4648 অনুযায়ী স্ট্যান্ডার্ড বা URL-নিরাপদ বেস৬৪-এ বদলান, অথবা বেস৬৪ স্ট্রিং যাচাইসহ সঙ্গে সঙ্গে সাধারণ টেক্সটে ডিকোড করুন।',
  },
  'url-encoder-decoder': {
    slug: 'url-encode-decode-korun',
    name: 'ইউআরএল এনকোডার / ডিকোডার',
    shortDescription:
      'কোয়েরি ভ্যালু বা পুরো ইউআরএল পারসেন্ট-এনকোড করুন আর হোস্ট, পাথ ও কোয়েরি প্যারামিটার ভেঙে দেখুন।',
    keywords: [
      'url encoder decoder online',
      'ইউআরএল এনকোড কিভাবে করব',
      'ইউআরএল ডিকোড কিভাবে করব',
      'percent encoding কী',
      'ইউআরএল পার্সার অনলাইন বাংলা',
      'encodeuricomponent online',
      'ইউআরএল ডিকোড টুল বাংলা',
      'কোয়েরি স্ট্রিং এনকোড করুন',
      'ইউআরএলে বিশেষ অক্ষর এনকোড',
    ],
    seo: {
      title: 'ইউআরএল এনকোডার ও ডিকোডার অনলাইন টুল ফ্রি | UtilityFlow',
      description:
        'encodeURIComponent ও encodeURI মোডে ইউআরএল এনকোড বা ডিকোড করুন আর প্রোটোকল, হোস্ট, পাথ ও কোয়েরি প্যারামিটারের পুরো বিশ্লেষণ দেখুন। এখনই ফ্রি ফলাফল পান।',
      primaryKeyword: 'url encoder decoder online',
      secondaryKeywords: ['ইউআরএল এনকোড কিভাবে করব', 'ইউআরএল ডিকোড কিভাবে করব', 'percent encoding কী', 'ইউআরএল পার্সার অনলাইন বাংলা'],
      longTailKeywords: ['encodeuri ও encodeuricomponent-এর মধ্যে পার্থক্য কী', 'ইউআরএলের কোয়েরি প্যারামিটার কিভাবে ডিকোড করব', 'ইউআরএলের জন্য বিশেষ অক্ষর পারসেন্ট এনকোড করুন', 'অ্যাম্পারস্যান্ড না ভেঙে কোয়েরি ভ্যালু এনকোড কিভাবে করব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'কোয়েরি প্যারামিটারের ভ্যালু বা পুরো ইউআরএল নিরাপদে এনকোড করুন, পারসেন্ট-এনকোড করা স্ট্রিং (%20, %3A, +) ডিকোড করুন আর প্রতিটি কোয়েরি প্যারামিটারের লাইভ বিশ্লেষণ টেবিলে দেখুন।',
  },
  'uuid-generator': {
    slug: 'uuid-toiri-korun',
    name: 'ইউইউআইডি জেনারেটর (v4 ও v7)',
    shortDescription:
      'RFC 9562 অনুযায়ী ক্রিপ্টোগ্রাফিকভাবে র‍্যান্ডম ইউইউআইডি v4 ও সময়-ক্রমিক ইউইউআইডি v7 একসঙ্গে অনেকগুলো তৈরি করুন।',
    keywords: [
      'uuid generator online',
      'ইউইউআইডি কিভাবে বানাব',
      'guid জেনারেটর বাংলা',
      'uuid v4 জেনারেটর ফ্রি',
      'uuid v7 কী',
      'র‍্যান্ডম uuid তৈরি করুন',
      'ইউইউআইডি জেনারেটর বাংলা',
      'bulk uuid জেনারেটর',
      'অনলাইন uuid বানানোর টুল',
    ],
    seo: {
      title: 'ইউইউআইডি জেনারেটর v4 ও v7 ফ্রি অনলাইন | UtilityFlow',
      description:
        'RFC 9562 অনুযায়ী ১০০টি পর্যন্ত ক্রিপ্টোগ্রাফিক ইউইউআইডি v4 বা সময়-ক্রমিক ইউইউআইডি v7 বানান — আপারকেস, হাইফেন ও ব্রেস অপশনসহ, সম্পূর্ণ ফ্রি। এখনই ফলাফল পান।',
      primaryKeyword: 'uuid generator online',
      secondaryKeywords: ['ইউইউআইডি কিভাবে বানাব', 'guid জেনারেটর বাংলা', 'uuid v4 জেনারেটর ফ্রি', 'uuid v7 কী'],
      longTailKeywords: ['একসঙ্গে অনেক uuid v4 ও v7 কিভাবে বানাব', 'সময়-ক্রমিক uuid v7 rfc 9562 কী', 'হাইফেন ছাড়া আপারকেস uuid জেনারেটর', 'একসঙ্গে ১০০ uuid বানানোর ফ্রি টুল'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'একটি বা একসঙ্গে অনেক ইউইউআইডি বানান — ক্রিপ্টোগ্রাফিকভাবে র‍্যান্ডম ইউইউআইডি v4 ও টাইমস্ট্যাম্প-ক্রমিক ইউইউআইডি v7, সরাসরি Web Crypto API থেকে, ফরম্যাটের অপশনসহ।',
  },
  'regex-tester': {
    slug: 'regex-porikkha-korun',
    name: 'রেগেক্স টেস্টার',
    shortDescription:
      'লাইভ ম্যাচ হাইলাইট, ক্যাপচার গ্রুপ, ফ্ল্যাগ ও রিপ্লেসমেন্ট আউটপুটসহ জাভাস্ক্রিপ্ট রেগুলার এক্সপ্রেশন পরীক্ষা করুন।',
    keywords: [
      'regex tester online',
      'রেগেক্স টেস্ট কিভাবে করব',
      'regular expression টেস্টার বাংলা',
      'javascript regex টেস্টার',
      'regex ম্যাচ চেকার অনলাইন',
      'রেগেক্স ডিবাগ কিভাবে করব',
      'রেগেক্স টেস্টার বাংলা',
      'রেগেক্স প্যাটার্ন টেস্ট করুন',
      'regex ক্যাপচার গ্রুপ কী',
    ],
    seo: {
      title: 'রেগেক্স টেস্টার: জাভাস্ক্রিপ্ট রেগেক্স যাচাই | UtilityFlow',
      description:
        'g, i, m ও s ফ্ল্যাগসহ রেগুলার এক্সপ্রেশন লাইভ টেস্ট করুন — ম্যাচ হাইলাইট, ক্যাপচার গ্রুপ যাচাই ও রিপ্লেস প্রিভিউসহ, ফ্রি। ফলাফল সঙ্গে সঙ্গে ও নিখুঁত পান।',
      primaryKeyword: 'regex tester online',
      secondaryKeywords: ['রেগেক্স টেস্ট কিভাবে করব', 'regular expression টেস্টার বাংলা', 'javascript regex টেস্টার', 'regex ম্যাচ চেকার অনলাইন'],
      longTailKeywords: ['জাভাস্ক্রিপ্ট রেগেক্স ক্যাপচার গ্রুপ অনলাইনে কিভাবে টেস্ট করব', 'লাইভ রেগেক্স ম্যাচ হাইলাইট করার টুল', 'ক্যাপচার গ্রুপসহ রেগেক্স রিপ্লেস প্রিভিউ', 'লাইভ হাইলাইটসহ রেগেক্স কিভাবে ডিবাগ করব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'জাভাস্ক্রিপ্ট রেগুলার এক্সপ্রেশন ইন্টার‍্যাক্টিভভাবে ডিবাগ করুন — লাইভ ম্যাচ হাইলাইট, ম্যাচের ইনডেক্স অবস্থান, নম্বরযুক্ত ক্যাপচার গ্রুপ, ফ্ল্যাগ সুইচ ও রিপ্লেসমেন্ট প্রিভিউসহ।',
  },
  'jwt-decoder': {
    slug: 'jwt-decode-korun',
    name: 'জেডব্লিউটি ডিকোডার',
    shortDescription:
      'JSON Web Token-এর হেডার, পেলোড ক্লেইম ও মেয়াদের টাইমস্ট্যাম্প আপনার ব্রাউজারেই নিরাপদে ডিকোড করুন।',
    keywords: [
      'jwt decoder online',
      'jwt ডিকোড কিভাবে করব',
      'json web token ডিকোড বাংলা',
      'jwt টোকেন চেক করুন',
      'jwt মেয়াদ চেক কিভাবে করব',
      'jwt পেলোড ভিউয়ার অনলাইন',
      'jwt টোকেন কিভাবে দেখব',
      'jwt ক্লেইম কী',
      'jwt টোকেন মেয়াদ চেক করুন',
    ],
    seo: {
      title: 'জেডব্লিউটি ডিকোডার: টোকেন ও মেয়াদ যাচাই | UtilityFlow',
      description:
        'জেডব্লিউটির হেডার ও পেলোড ক্লেইম আপনার ব্রাউজারেই ডিকোড করুন আর iat, nbf ও exp পরিষ্কার UTC তারিখে দেখুন — ফ্রি, নিরাপদ ও সম্পূর্ণ প্রাইভেট। এখনই ফলাফল পান।',
      primaryKeyword: 'jwt decoder online',
      secondaryKeywords: ['jwt ডিকোড কিভাবে করব', 'json web token ডিকোড বাংলা', 'jwt টোকেন চেক করুন', 'jwt মেয়াদ চেক কিভাবে করব'],
      longTailKeywords: ['সার্ভারে না পাঠিয়ে লোকালি jwt টোকেন ডিকোড করুন', 'jwt-র exp মেয়াদের তারিখ অনলাইনে কিভাবে চেক করব', 'jwt হেডার ও ক্লেইম base64url কিভাবে দেখব', 'ব্রাউজারে jwt পেলোড ক্লেইম কিভাবে পড়ব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JSON Web Token (JWT) ব্রাউজারের লোকাল মেমরিতে নিরাপদে যাচাই করুন — ফরম্যাট করা Header ও Payload JSON অবজেক্ট দেখুন আর `iat`, `nbf` ও `exp`-এর পড়ার মতো মেয়াদের অবস্থা দেখুন।',
  },
  'hash-generator': {
    slug: 'hash-toiri-korun',
    name: 'হ্যাশ জেনারেটর (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Web Crypto দিয়ে টেক্সট বা লোকাল ফাইলের জন্য SHA-1, SHA-256, SHA-384 ও SHA-512 ক্রিপ্টোগ্রাফিক হ্যাশ বানান।',
    keywords: [
      'hash generator online',
      'sha256 জেনারেটর বাংলা',
      'sha512 হ্যাশ কিভাবে বানাব',
      'ফাইলের চেকসাম কিভাবে বের করব',
      'sha1 হ্যাশ জেনারেটর',
      'sha384 হ্যাশ অনলাইন',
      'চেকসাম ক্যালকুলেটর বাংলা',
      'ফাইল চেকসাম যাচাই কিভাবে করব',
      'নিরাপদ হ্যাশ জেনারেটর অনলাইন',
    ],
    seo: {
      title: 'হ্যাশ জেনারেটর SHA-256 ও SHA-512 অনলাইন | UtilityFlow',
      description:
        'টেক্সট ও লোকাল ফাইলের জন্য SHA-1, SHA-256, SHA-384 ও SHA-512 হ্যাশ হেক্স বা বেস৬৪-এ বানান — সরাসরি ব্রাউজারে, সম্পূর্ণ ফ্রি ও নিরাপদ। এখনই ফলাফল পান — আজই।',
      primaryKeyword: 'hash generator online',
      secondaryKeywords: ['sha256 জেনারেটর বাংলা', 'ফাইলের চেকসাম কিভাবে বের করব', 'sha512 হ্যাশ কিভাবে বানাব', 'চেকসাম ক্যালকুলেটর বাংলা'],
      longTailKeywords: ['লোকাল ফাইলের sha256 চেকসাম ব্রাউজারে কিভাবে বের করব', 'sha256 হ্যাশ হেক্সাডেসিমেল ও বেস৬৪-এ কিভাবে বানাব', 'web crypto api দিয়ে হ্যাশ জেনারেটর অনলাইন', 'ডাউনলোড করা ফাইলের চেকসাম কিভাবে যাচাই করব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ব্রাউজারের নেটিভ Web Crypto API (`crypto.subtle.digest`) দিয়ে SHA-1, SHA-256, SHA-384 ও SHA-512 হ্যাশ একসঙ্গে বের করুন — UTF-8 টেক্সট ও লোকাল ফাইলের চেকসাম, দুটোর জন্যই।',
  },
  'html-entity-encoder': {
    slug: 'html-entity-encode-korun',
    name: 'এইচটিএমএল এনটিটি এনকোডার ও ডিকোডার',
    shortDescription:
      'সংরক্ষিত HTML অক্ষর (<, >, &, কোট) ও নন-ASCII প্রতীক এস্কেপ করুন বা HTML এনটিটি পরিষ্কারভাবে ডিকোড করুন।',
    keywords: [
      'html entity encoder online',
      'html এস্কেপ কিভাবে করব',
      'html এনটিটি ডিকোডার বাংলা',
      'html বিশেষ অক্ষর এনকোড',
      'escape html অনলাইন টুল',
      'html এনটিটি কনভার্টার বাংলা',
      'html ডিকোড কিভাবে করব',
      'html-এ কোট এস্কেপ করুন',
      'html এনটিটি এনকোড ডিকোডার',
    ],
    seo: {
      title: 'এইচটিএমএল এনটিটি এনকোডার অনলাইন ফ্রি | UtilityFlow',
      description:
        'সংরক্ষিত HTML অক্ষর ও নন-ASCII প্রতীক এনটিটিতে এনকোড করুন, বা নামযুক্ত ও সংখ্যাযুক্ত এনটিটি সাধারণ টেক্সটে ডিকোড করুন — সম্পূর্ণ ফ্রি। এখনই ব্যবহার করুন।',
      primaryKeyword: 'html entity encoder online',
      secondaryKeywords: ['html এস্কেপ কিভাবে করব', 'html এনটিটি ডিকোডার বাংলা', 'html বিশেষ অক্ষর এনকোড', 'escape html অনলাইন টুল'],
      longTailKeywords: ['কোড স্নিপেটের জন্য html ট্যাগ এস্কেপ কিভাবে করব', 'নামযুক্ত ও সংখ্যাযুক্ত html এনটিটি ডিকোড কিভাবে করব', 'বিশেষ অক্ষরকে html এনটিটিতে কিভাবে বদলাব', 'html-এ কোট ও অ্যাম্পারস্যান্ড এস্কেপ কিভাবে করব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ওয়েবপেজে কোড স্নিপেট বসাতে `<`, `>`, `&`, কোট ও আন্তর্জাতিক Unicode প্রতীক HTML এনটিটিতে নিরাপদে এস্কেপ করুন, অথবা এস্কেপ করা HTML স্ট্রিং আবার পড়ার মতো টেক্সটে ডিকোড করুন।',
  },
  'json-csv-converter': {
    slug: 'json-theke-csv-korun',
    name: 'JSON থেকে CSV ও CSV থেকে JSON কনভার্টার',
    shortDescription:
      'JSON অ্যারেকে RFC 4180 CSV স্প্রেডশিটে বদলান আর কোট করা CSV ফাইল আবার পরিষ্কার JSON-এ পার্স করুন।',
    keywords: [
      'json to csv converter online',
      'csv to json কনভার্টার বাংলা',
      'json csv কনভার্টার ফ্রি',
      'json-কে csv-তে কিভাবে বদলাব',
      'csv-কে json-এ কিভাবে বদলাব',
      'json to csv অনলাইন ফ্রি বাংলা',
      'json অ্যারে থেকে csv কিভাবে করব',
      'csv to json কিভাবে কনভার্ট করব',
      'json tsv কনভার্টার অনলাইন',
    ],
    seo: {
      title: 'JSON থেকে CSV ও CSV থেকে JSON কনভার্টার | UtilityFlow',
      description:
        'JSON অ্যারেকে নেস্টেড অবজেক্ট ফ্ল্যাট করে পরিষ্কার CSV শিটে বদলান, বা CSV ও TSV ফাইল স্ট্রাকচার্ড JSON-এ পার্স করুন — ফ্রি, লোকাল। এখনই ফলাফল পান — ফ্রি।',
      primaryKeyword: 'json to csv converter online',
      secondaryKeywords: ['csv to json কনভার্টার বাংলা', 'json-কে csv-তে কিভাবে বদলাব', 'csv-কে json-এ কিভাবে বদলাব', 'json to csv অনলাইন ফ্রি বাংলা'],
      longTailKeywords: ['নেস্টেড json অবজেক্ট csv কলামে কিভাবে বদলাব', 'কমাযুক্ত কোট করা csv json অ্যারেতে কিভাবে বদলাব', 'ব্রাউজারে json to csv ডাউনলোড করার টুল', 'json অ্যারেকে csv শিটে ফ্রিতে কিভাবে কনভার্ট করব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'API-র JSON অ্যারেকে পরিষ্কার CSV স্প্রেডশিটে বদলান — নেস্টেড অবজেক্টের কীগুলো নিজে থেকেই ফ্ল্যাট হয়ে যায় — অথবা কোট করা কমাযুক্ত CSV ও TSV ফাইল ফরম্যাট করা JSON-এ আবার পার্স করুন।',
  },
  'unix-timestamp-converter': {
    slug: 'unix-somoy-converter',
    name: 'ইউনিক্স টাইমস্ট্যাম্প কনভার্টার',
    shortDescription:
      'ইউনিক্স epoch সেকেন্ড বা মিলিসেকেন্ডকে ISO 8601, UTC ও লোকাল তারিখে বদলান — আর উল্টোটাও।',
    keywords: [
      'unix timestamp converter online',
      'epoch থেকে তারিখ কনভার্টার বাংলা',
      'unix time কী',
      'epoch time কিভাবে বের করব',
      'টাইমস্ট্যাম্প থেকে তারিখ অনলাইন',
      'তারিখ থেকে unix টাইমস্ট্যাম্প বাংলা',
      'বর্তমান unix time কী',
      'epoch মিলিসেকেন্ড কনভার্টার',
      'ইউনিক্স টাইমস্ট্যাম্প কনভার্টার বাংলা',
    ],
    seo: {
      title: 'ইউনিক্স টাইমস্ট্যাম্প কনভার্টার অনলাইন | UtilityFlow',
      description:
        'ইউনিক্স টাইমস্ট্যাম্পকে সেকেন্ড বা মিলিসেকেন্ডে ISO 8601, UTC, RFC 2822 ও লোকাল সময়ে বদলান, বা যেকোনো তারিখ থেকে ইউনিক্স সময় পান — ফ্রি। এখনই ফলাফল পান।',
      primaryKeyword: 'unix timestamp converter online',
      secondaryKeywords: ['epoch থেকে তারিখ কনভার্টার বাংলা', 'unix time কী', 'টাইমস্ট্যাম্প থেকে তারিখ অনলাইন', 'তারিখ থেকে unix টাইমস্ট্যাম্প বাংলা'],
      longTailKeywords: ['epoch মিলিসেকেন্ড iso 8601 তারিখে কিভাবে বদলাব', 'বর্তমান unix time লাইভ সেকেন্ডে কিভাবে দেখব', 'লোকাল তারিখ সময়কে epoch unix-এ কিভাবে বদলাব', 'ইউনিক্স টাইমস্ট্যাম্প utc তারিখে অনলাইন ফ্রিতে কিভাবে বদলাব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ইউনিক্স epoch সংখ্যা (সেকেন্ড বা মিলিসেকেন্ড) ISO 8601, UTC ও লোকাল টাইমজোনের স্ট্রিংয়ে বদলান — আপেক্ষিক অফসেটসহ — অথবা যেকোনো ক্যালেন্ডার তারিখ আবার epoch টাইমস্ট্যাম্পে বদলান।',
  },
  'sql-formatter': {
    slug: 'sql-format-korun',
    name: 'এসকিউএল ফরম্যাটার',
    shortDescription:
      'এসকিউএল কোয়েরি ফরম্যাট, ইনডেন্ট ও স্ট্যান্ডার্ডাইজ করুন — কীওয়ার্ড আপারকেস/লোয়ারকেসে, বা কোয়েরি এক লাইনে মিনিফাই করুন।',
    keywords: [
      'sql formatter online',
      'sql কোয়েরি ফরম্যাট কিভাবে করব',
      'sql বিউটিফায়ার বাংলা',
      'sql মিনিফায়ার অনলাইন',
      'sql ফরম্যাট করার টুল',
      'sql কোয়েরিকে সুন্দর কিভাবে বানাব',
      'sql ইনডেন্ট কিভাবে করব',
      'sql ফরম্যাটার বাংলা',
      'অনলাইন sql ফরম্যাটার ফ্রি',
    ],
    seo: {
      title: 'এসকিউএল ফরম্যাটার: কোয়েরি সাজান অনলাইন | UtilityFlow',
      description:
        'এসকিউএল কোয়েরি পরিষ্কার ক্লজ ব্রেক, কীওয়ার্ড আপারকেস/লোয়ারকেস ও ২ বা ৪ স্পেস ইনডেন্টসহ ফরম্যাট করুন, বা এক লাইনে মিনিফাই করুন — ফ্রি। এখনই ফলাফল পান।',
      primaryKeyword: 'sql formatter online',
      secondaryKeywords: ['sql কোয়েরি ফরম্যাট কিভাবে করব', 'sql বিউটিফায়ার বাংলা', 'sql মিনিফায়ার অনলাইন', 'sql ফরম্যাট করার টুল'],
      longTailKeywords: ['select join group by-যুক্ত sql কোয়েরি অনলাইনে কিভাবে ফরম্যাট করব', 'sql কীওয়ার্ড ভুল ছাড়া আপারকেসে কিভাবে বদলাব', 'স্ট্রিং লিটারেল বাঁচিয়ে sql কোয়েরি কিভাবে মিনিফাই করব', '২ বা ৪ স্পেস ইনডেন্টসহ sql কোয়েরি ফরম্যাট করুন'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'এক লাইনে ঘন এসকিউএল কোয়েরিকে পড়ার মতো, গোছানো স্টেটমেন্টে বদলান — `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` ও `ORDER BY`-এর পরিষ্কার সাজানিসহ, কোট করা স্ট্রিং ও কমেন্ট বাঁচিয়ে।',
  },
  'css-minifier': {
    slug: 'css-minify-korun',
    name: 'সিএসএস মিনিফায়ার ও বিউটিফায়ার',
    shortDescription:
      'বান্ডেল সাইজ কমাতে সিএসএস স্টাইলশিট মিনিফাই করুন বা কম্প্রেস করা সিএসএস রুল পরিষ্কার ইনডেন্টেশনে বিউটিফাই করুন।',
    keywords: [
      'css minifier online',
      'css বিউটিফায়ার বাংলা',
      'css কম্প্রেস কিভাবে করব',
      'css ফরম্যাট করার টুল',
      'css মিনিফাই কিভাবে করব',
      'css-কে ছোট কিভাবে করব',
      'minify css অনলাইন ফ্রি',
      'css আনমিনিফাই কিভাবে করব',
      'css ফাইল সাইজ কম কিভাবে করব',
    ],
    seo: {
      title: 'সিএসএস মিনিফায়ার ও বিউটিফায়ার ফ্রি | UtilityFlow',
      description:
        'কমেন্ট ও বাড়তি স্পেস সরিয়ে সিএসএস মিনিফাই করুন — লাইভ বাইট-সাশ্রয়ের পরিসংখ্যানসহ — বা মিনিফাইড শিট পরিষ্কার রুলে খুলুন, সম্পূর্ণ ফ্রি। এখনই ফলাফল পান।',
      primaryKeyword: 'css minifier online',
      secondaryKeywords: ['css বিউটিফায়ার বাংলা', 'css কম্প্রেস কিভাবে করব', 'css ফরম্যাট করার টুল', 'css মিনিফাই কিভাবে করব'],
      longTailKeywords: ['কোট করা স্ট্রিং ও মিডিয়া কোয়েরি বাঁচিয়ে css মিনিফাই করুন', 'কম্প্রেস করা css শিট অনলাইনে আনমিনিফাই কিভাবে করব', 'ব্রাউজারে css কম্প্রেশনের শতাংশ কিভাবে বের করব', 'ডেপ্লয়ের আগে css ফাইল সাইজ কিভাবে কমাব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'কমেন্ট, অপ্রয়োজনীয় হোয়াইটস্পেস ও ক্লোজিং ব্রেসের আগের শেষ সেমিকোলন সরিয়ে সিএসএস স্টাইলশিট কম্প্রেস করুন, অথবা এক লাইনে মিনিফাইড সিএসএস আবার ইনডেন্ট করা পড়ার মতো ব্লকে খুলুন।',
  },
  'js-formatter': {
    slug: 'javascript-format-korun',
    name: 'জাভাস্ক্রিপ্ট / টাইপস্ক্রিপ্ট মিনিফায়ার ও ফরম্যাটার',
    shortDescription:
      'কমেন্ট ও বাড়তি হোয়াইটস্পেস সরিয়ে জাভাস্ক্রিপ্ট স্নিপেট মিনিফাই করুন বা কমপ্যাক্ট কোড ব্লক বিউটিফাই করুন।',
    keywords: [
      'javascript minifier online',
      'js ফরম্যাটার বাংলা',
      'js বিউটিফায়ার অনলাইন',
      'জাভাস্ক্রিপ্ট কম্প্রেস কিভাবে করব',
      'js ফরম্যাট করার টুল',
      'জাভাস্ক্রিপ্ট মিনিফাই কিভাবে করব',
      'js কোড বিউটিফাই করুন',
      'typescript মিনিফায়ার অনলাইন',
      'js কোড ফরম্যাটার ফ্রি',
    ],
    seo: {
      title: 'জাভাস্ক্রিপ্ট মিনিফায়ার ও ফরম্যাটার ফ্রি | UtilityFlow',
      description:
        'কমেন্ট ও বাড়তি স্পেস নিরাপদে সরিয়ে জাভাস্ক্রিপ্ট ও টাইপস্ক্রিপ্ট মিনিফাই করুন, বা কমপ্যাক্ট কোড ২ বা ৪ স্পেস ইনডেন্টে খুলুন — ফ্রি। এখনই ফলাফল পান — ফ্রি।',
      primaryKeyword: 'javascript minifier online',
      secondaryKeywords: ['js ফরম্যাটার বাংলা', 'js বিউটিফায়ার অনলাইন', 'জাভাস্ক্রিপ্ট কম্প্রেস কিভাবে করব', 'js ফরম্যাট করার টুল'],
      longTailKeywords: ['স্ট্রিং ও টেমপ্লেট লিটারেল বাঁচিয়ে js মিনিফাই করুন', 'কমপ্যাক্ট জাভাস্ক্রিপ্ট কোড ইনডেন্টসহ কিভাবে খুলব', 'ব্রাউজারে js ফরম্যাটার ও মিনিফায়ার টুল', '২ বা ৪ স্পেস ইনডেন্টে জাভাস্ক্রিপ্ট কোড বিউটিফাই করুন'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'বুকমার্কলেট ও ইনলাইন স্ক্রিপ্টের জন্য জাভাস্ক্রিপ্ট স্নিপেট কম্প্রেস করুন — কমেন্ট ও বাড়তি স্পেস সরিয়ে, স্ট্রিং লিটারেল নিরাপদ রেখে — অথবা কম্প্রেস করা কোড আবার ইনডেন্ট করুন।',
  },
  'cron-expression-parser': {
    slug: 'cron-expression-bujhun',
    name: 'ক্রন এক্সপ্রেশন পার্সার ও শিডিউল প্রিভিউ',
    shortDescription:
      '৫-ফিল্ড ক্রন এক্সপ্রেশন সহজ ভাষায় বুঝুন, প্রিসেট দেখুন আর পরের ৮ রান টাইমের প্রিভিউ পান।',
    keywords: [
      'cron expression parser online',
      'crontab জেনারেটর বাংলা',
      'cron শিডিউল টেস্টার',
      'cron এক্সপ্রেশন কিভাবে বুঝব',
      'cron job কী বাংলা',
      'cron এক্সপ্রেশন টেস্টার অনলাইন',
      'crontab guru বিকল্প বাংলা',
      'cron শিডিউল প্রিভিউ টুল',
      'cron এক্সপ্রেশন বাংলা',
    ],
    seo: {
      title: 'ক্রন এক্সপ্রেশন পার্সার: শিডিউল বুঝুন | UtilityFlow',
      description:
        '৫-ফিল্ড ক্রন এক্সপ্রেশন সহজ ভাষায় বুঝুন, প্রতিটি ফিল্ড যাচাই করুন, সাধারণ প্রিসেট চেষ্টা করুন আর পরের ৮ রান টাইম দেখুন — ফ্রি। আপনার ডেটা সার্ভারে যায় না।',
      primaryKeyword: 'cron expression parser online',
      secondaryKeywords: ['crontab জেনারেটর বাংলা', 'cron শিডিউল টেস্টার', 'cron এক্সপ্রেশন কিভাবে বুঝব', 'cron job কী বাংলা'],
      longTailKeywords: ['৫ ফিল্ডের cron এক্সপ্রেশন সহজ ভাষায় কিভাবে বুঝব', 'cron-এর পরের ৮ রান টাইম কিভাবে বের করব', 'সপ্তাহের দিন ও স্টেপযুক্ত cron এক্সপ্রেশন অনলাইনে টেস্ট করুন', 'প্রতি সপ্তাহের দিন সকাল ৯টার cron এক্সপ্রেশন উদাহরণ'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ইউনিক্স crontab-এর ৫-ফিল্ড এক্সপ্রেশন (`মিনিট ঘণ্টা মাসের-দিন মাস সপ্তাহের-দিন`) পরিষ্কার, পড়ার মতো সারাংশে ডিকোড করুন, ফিল্ডের রেঞ্জ যাচাই করুন আর পরের ৮ শিডিউল করা রান টাইম দেখুন।',
  },
  'color-converter': {
    slug: 'rong-converter-hex-rgb',
    name: 'কালার কনভার্টার (HEX / RGB / HSL ও WCAG কনট্রাস্ট)',
    shortDescription:
      'লাইভ কালার পিকার ও WCAG 2.1 AA/AAA কনট্রাস্ট যাচাইসহ কালার HEX, RGB ও HSL-এ বদলান।',
    keywords: [
      'color converter online',
      'hex to rgb কনভার্টার বাংলা',
      'rgb to hex কিভাবে করব',
      'wcag কনট্রাস্ট চেকার বাংলা',
      'hex to hsl কনভার্টার',
      'rgb to hsl কিভাবে বদলাব',
      'কালার পিকার অনলাইন বাংলা',
      'hex কালার কনভার্টার টুল',
      'hsl to rgb কনভার্টার',
    ],
    seo: {
      title: 'কালার কনভার্টার HEX, RGB, HSL অনলাইন ফ্রি | UtilityFlow',
      description:
        'কালার HEX, RGB ও HSL-এ সঙ্গে সঙ্গে বদলান আর টেক্সট-ব্যাকগ্রাউন্ড কনট্রাস্ট WCAG 2.1 AA ও AAA-র জন্য যাচাই করুন — ফ্রি, সরাসরি ব্রাউজারে। এখনই ফলাফল পান।',
      primaryKeyword: 'color converter online',
      secondaryKeywords: ['hex to rgb কনভার্টার বাংলা', 'rgb to hex কিভাবে করব', 'wcag কনট্রাস্ট চেকার বাংলা', 'hex to hsl কনভার্টার'],
      longTailKeywords: ['hex কালার css rgb ও hsl ভ্যালুতে কিভাবে বদলাব', 'টেক্সট কনট্রাস্ট wcag 2.1 aa ও aaa কিভাবে চেক করব', 'ডেভেলপারের জন্য hex rgb hsl কালার টুল', 'css ভেরিয়েবলের জন্য hex-কে hsl-এ কিভাবে বদলাব'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'লাইভ সোয়াচ ও WCAG 2.1 কনট্রাস্ট-রেশিও চেকারসহ CSS HEX, RGB ও HSL নোটেশনের মধ্যে কালার সহজে বদলান — অ্যাক্সেসিবল ইন্টারফেস ডিজাইনের জন্য।',
  },
};
