import type { ToolLocaleOverride } from '../../types';

/**
 * Bengali overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Original Bengali copy, SEO-optimized for Bengali search intent.
 * Slugs are romanized Bengali, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const BN_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'shobdo-gonona',
    name: 'শব্দ গণনা',
    shortDescription:
      'শব্দ, অক্ষর, বাক্য, অনুচ্ছেদ, পড়ার সময় ও সবচেয়ে বেশি ব্যবহৃত শব্দ মুহূর্তে গুনুন।',
    keywords: [
      'শব্দ গণনা',
      'word counter online bangla',
      'শব্দ গোনার টুল',
      'অনলাইনে শব্দ গুনুন',
      'শব্দ গণনা করার টুল',
      'reading time calculator bangla',
      'বাক্য গোনার টুল',
      'word count kivabe korbo',
      'শব্দ ও অক্ষর গুনুন',
    ],
    seo: {
      title: 'শব্দ গণনা: অনলাইনে শব্দ ও পড়ার সময় গুনুন | UtilityFlow',
      description:
        'শব্দ, অক্ষর, বাক্য ও অনুচ্ছেদ মুহূর্তে গুনুন এবং পড়া ও বলার আনুমানিক সময় জানুন — রচনা, প্রবন্ধ ও অ্যাসাইনমেন্টের জন্য, কিছু আপলোড না করেই। এখনই ফলাফল পান।',
      primaryKeyword: 'শব্দ গণনা',
      secondaryKeywords: ['word counter online bangla', 'শব্দ গোনার টুল', 'পড়ার সময় ক্যালকুলেটর', 'শব্দ গণনা করার টুল'],
      longTailKeywords: ['অনলাইনে শব্দ ও অক্ষর গোনার টুল', 'প্রবন্ধে কত শব্দ আছে কিভাবে জানব', 'reading time kivabe ber korbo bangla', 'আপলোড ছাড়া শব্দ গোনার টুল'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'আপনার লেখার শব্দ, অক্ষর, বাক্যের সংখ্যা এবং পড়া ও বলার আনুমানিক সময় রিয়েল-টাইমে দেখুন — আপনার লেখা কোনো সার্ভারে যায় না, সবকিছু আপনার ব্রাউজারেই হয়।',
  },
  'character-counter': {
    slug: 'okkhor-gonona',
    name: 'অক্ষর গণনা',
    shortDescription:
      'স্পেসসহ ও স্পেস ছাড়া অক্ষরের নির্ভুল দৈর্ঘ্য, UTF-8 বাইট এবং সোশ্যাল মিডিয়া ও SEO-র অক্ষরসীমা দেখুন।',
    keywords: [
      'অক্ষর গণনা',
      'character counter online',
      'অক্ষর গোনার টুল',
      'অক্ষর গণনা করার টুল',
      'meta description length checker',
      'character count kivabe korbo',
      'কত অক্ষর আছে গুনুন',
      'sms character counter bangla',
      'seo title length checker',
    ],
    seo: {
      title: 'অক্ষর গণনা: অক্ষর ও বাইট অনলাইনে গুনুন | UtilityFlow',
      description:
        'স্পেসসহ ও স্পেস ছাড়া অক্ষর, শব্দ, সংখ্যা ও UTF-8 বাইট গুনুন এবং SEO, SMS ও সোশ্যাল মিডিয়ার অক্ষরসীমার বিপরীতে আপনার অগ্রগতি লাইভ দেখুন। এখনই ফলাফল পান।',
      primaryKeyword: 'অক্ষর গণনা',
      secondaryKeywords: ['character counter online', 'অক্ষর গোনার টুল', 'অক্ষর গণনা করার টুল', 'meta description length checker'],
      longTailKeywords: ['স্পেস ছাড়া অক্ষর কিভাবে গুনব', 'seo meta description এর দৈর্ঘ্য কিভাবে দেখব', 'utf 8 byte kivabe ber korbo online', 'twitter character limit দেখার টুল'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'অক্ষর, সংখ্যা, স্পেস ও UTF-8 বাইটের নির্ভুল গণনা দেখুন এবং SEO স্নিপেট, SMS ও সোশ্যাল মিডিয়া পোস্টের অক্ষরসীমার বিপরীতে আপনার অগ্রগতি লাইভ অনুসরণ করুন।',
  },
  'case-converter': {
    slug: 'boro-chhoto-okkhor-converter',
    name: 'কেস কনভার্টার',
    shortDescription:
      'লেখাকে UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case ও kebab-case-এ বদলান।',
    keywords: [
      'case converter online',
      'capital small converter',
      'upper to lower case converter',
      'টেক্সট ক্যাপিটাল কিভাবে করব',
      'title case converter bangla',
      'camelcase converter online',
      'snake case generator',
      'বড় অক্ষর ছোট কিভাবে করব',
      'sentence case converter',
    ],
    seo: {
      title: 'কেস কনভার্টার: অনলাইনে বড় ছোট অক্ষর বদলান | UtilityFlow',
      description:
        'লেখাকে UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case ও kebab-case-এ এক ক্লিকে বদলান — বিনামূল্যে, দ্রুত ও ব্যক্তিগত। এখনই চেষ্টা করুন।',
      primaryKeyword: 'case converter online',
      secondaryKeywords: ['capital small converter', 'upper to lower case converter', 'title case converter bangla', 'camelcase converter online'],
      longTailKeywords: ['লেখা ক্যাপিটাল থেকে ছোট কিভাবে করব অনলাইনে', 'title case এ লেখা কিভাবে বদলাব', 'camelcase ও snake case converter ফ্রি', 'caps lock এ লেখা টেক্সট কিভাবে ঠিক করব'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'ভুলে Caps Lock-এ লেখা টেক্সট ঠিক করুন, প্রবন্ধের শিরোনাম Title Case-এ বদলান অথবা ভেরিয়েবলের নাম camelCase, PascalCase, snake_case ও kebab-case-এ এক ক্লিকে ফরম্যাট করুন।',
  },
  'remove-duplicate-lines': {
    slug: 'duplicate-line-soran',
    name: 'ডুপ্লিকেট লাইন সরান',
    shortDescription:
      'কেস-সেনসিটিভ, স্পেস ট্রিম ও বর্ণানুক্রমিক সাজানোর অপশনসহ তালিকা ও লগ থেকে ডুপ্লিকেট লাইন সরান।',
    keywords: [
      'duplicate line soran tool',
      'remove duplicate lines online',
      'তালিকা থেকে ডুপ্লিকেট সরান',
      'duplicate line remover bangla',
      'ডুপ্লিকেট লাইন সরানোর টুল',
      'unique lines filter online',
      'ডুপ্লিকেট সরানোর উপায়',
      'তালিকা পরিষ্কার করার টুল',
      'duplicate entries remove korun',
    ],
    seo: {
      title: 'ডুপ্লিকেট লাইন সরান: তালিকা পরিষ্কার করুন | UtilityFlow',
      description:
        'তালিকা, ইমেইল, URL বা লগ থেকে পুনরাবৃত্ত লাইন মুহূর্তে সরান — স্পেস ট্রিম, কেস-সেনসিটিভ ও সাজানোর অপশনসহ, বিনামূল্যে, সরাসরি আপনার ব্রাউজারে। এখনই ফলাফল পান।',
      primaryKeyword: 'duplicate line soran tool',
      secondaryKeywords: ['remove duplicate lines online', 'তালিকা থেকে ডুপ্লিকেট সরান', 'duplicate line remover bangla', 'unique lines filter online'],
      longTailKeywords: ['তালিকা থেকে ডুপ্লিকেট লাইন কিভাবে সরাব অনলাইনে', 'ইমেইল তালিকা থেকে ডুপ্লিকেট ইমেইল সরানোর টুল', 'ক্রম একই রেখে ডুপ্লিকেট সরান', 'ডুপ্লিকেট লাইন সরানোর ফ্রি টুল'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'এলোমেলো তালিকা, কিওয়ার্ড এক্সপোর্ট, ইমেইল ঠিকানা বা সার্ভার লগ থেকে ডুপ্লিকেট এন্ট্রি সরিয়ে পরিষ্কার করুন — স্পেস ট্রিম, কেস-সেনসিটিভ ও আউটপুটের ক্রমের ওপর পূর্ণ নিয়ন্ত্রণ রাখুন।',
  },
  'text-diff-checker': {
    slug: 'du-text-tulona',
    name: 'টেক্সট তুলনা টুল',
    shortDescription:
      'দুটি টেক্সট ব্লকের লাইন-বাই-লাইন তুলনা করে যোগ করা, মুছে ফেলা ও অপরিবর্তিত লাইন চিনুন।',
    keywords: [
      'text compare online',
      'du text compare korun',
      'text difference checker bangla',
      'দুটি টেক্সটের পার্থক্য দেখুন',
      'text diff tool online',
      'compare two texts online',
      'টেক্সটে পার্থক্য কিভাবে বুঝব',
      'diff checker bangla',
      'দুটি ফাইলের তুলনা করুন',
    ],
    seo: {
      title: 'টেক্সট তুলনা টুল: দুটি টেক্সটের পার্থক্য দেখুন | UtilityFlow',
      description:
        'দুটি টেক্সট, কোড বা কনফিগ ফাইলের লাইন-বাই-লাইন তুলনা করুন এবং যোগ ও মুছে ফেলা লাইন পরিষ্কারভাবে দেখুন — কিছু আপলোড না করে, সম্পূর্ণ বিনামূল্যে। এখনই ফলাফল পান।',
      primaryKeyword: 'text compare online',
      secondaryKeywords: ['du text compare korun', 'text difference checker bangla', 'দুটি টেক্সটের পার্থক্য দেখুন', 'text diff tool online'],
      longTailKeywords: ['দুটি টেক্সট ফাইলের পার্থক্য কিভাবে বের করব অনলাইনে', 'দুই সংস্করণের মধ্যে পরিবর্তন কিভাবে দেখব', 'টেক্সট তুলনা করার ফ্রি টুল বাংলা', 'ডকুমেন্টের দুই সংস্করণ তুলনা করুন'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'প্রবন্ধ, চুক্তি বা কনফিগের দুই সংস্করণের মধ্যে যোগ করা, মুছে ফেলা ও বদলে যাওয়া প্রতিটি লাইন চিনুন — লাইন-বাই-লাইন তুলনা ইঞ্জিন দিয়ে, মুহূর্তে ও ব্যক্তিগতভাবে।',
  },
  'whitespace-remover': {
    slug: 'otirikto-space-soran',
    name: 'অতিরিক্ত স্পেস সরান',
    shortDescription:
      'PDF বা ওয়েব থেকে কপি করা লেখার অতিরিক্ত স্পেস, ট্যাব, ফাঁকা লাইন ও অনাকাঙ্ক্ষিত লাইন ব্রেক সরান।',
    keywords: [
      'extra space soran tool',
      'remove extra spaces online',
      'pdf থেকে কপি করা টেক্সট পরিষ্কার করুন',
      'ফাঁকা লাইন সরানোর টুল',
      'whitespace remover bangla',
      'line break soran online',
      'টেক্সট পরিষ্কার করার টুল',
      'অতিরিক্ত স্পেস কিভাবে সরাব',
      'pdf টেক্সটের লাইন ভাঙা ঠিক করুন',
    ],
    seo: {
      title: 'অতিরিক্ত স্পেস সরান: টেক্সট পরিষ্কার করুন | UtilityFlow',
      description:
        'PDF থেকে কপি করা লেখার অতিরিক্ত স্পেস, ট্যাব, ফাঁকা লাইন ও ভাঙা লাইন ব্রেক সরান — দ্রুত, সম্পূর্ণ বিনামূল্যে ও ব্যক্তিগত, রেজিস্ট্রেশন ছাড়াই। এখনই ফলাফল পান।',
      primaryKeyword: 'extra space soran tool',
      secondaryKeywords: ['remove extra spaces online', 'pdf থেকে কপি করা টেক্সট পরিষ্কার করুন', 'ফাঁকা লাইন সরানোর টুল', 'whitespace remover bangla'],
      longTailKeywords: ['pdf থেকে কপি করা লেখার অতিরিক্ত স্পেস কিভাবে সরাব', 'ফাঁকা লাইন ও অতিরিক্ত স্পেস একসাথে সরান', 'ট্যাব ও একাধিক স্পেস এক স্পেসে বদলান', 'কপি করা লেখা পরিষ্কার করার টুল'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF, ইমেইল, স্প্রেডশিট বা ওয়েবপেজ থেকে কপি করা এলোমেলো লেখা পরিষ্কার করুন — পুনরাবৃত্ত স্পেস সংকুচিত করুন, ট্যাব বদলান, লাইনের দুই প্রান্ত ট্রিম করুন ও লাইন ব্রেক স্বাভাবিক করুন।',
  },
  'sort-lines': {
    slug: 'line-sajan',
    name: 'লাইন সাজান',
    shortDescription:
      'তালিকাকে A–Z, Z–A, স্বাভাবিক ক্রম (1, 2, 10), অক্ষর-দৈর্ঘ্য, উল্টো বা এলোমেলো শাফলে সাজান।',
    keywords: [
      'line sort korar tool',
      'sort lines alphabetically online',
      'তালিকা a to z করুন',
      'বর্ণানুক্রমিক সাজানোর টুল',
      'লাইন সাজানো কিভাবে করব',
      'natural sort online bangla',
      'তালিকা shuffle করার টুল',
      'লাইন উল্টে সাজান',
      'a to z sort korar tool',
    ],
    seo: {
      title: 'লাইন সাজান: তালিকা A–Z-এ সাজান অনলাইনে | UtilityFlow',
      description:
        'লাইনগুলোকে A–Z, Z–A, স্বাভাবিক সংখ্যাক্রম, দৈর্ঘ্য, উল্টো বা এলোমেলো শাফলে সাজান — ডুপ্লিকেট ও ফাঁকা লাইন সরিয়ে তালিকা পরিষ্কার রাখুন। এখনই ফলাফল পান।',
      primaryKeyword: 'line sort korar tool',
      secondaryKeywords: ['sort lines alphabetically online', 'তালিকা a to z করুন', 'বর্ণানুক্রমিক সাজানোর টুল', 'natural sort online bangla'],
      longTailKeywords: ['তালিকা বর্ণানুক্রমে কিভাবে সাজাব অনলাইনে', 'সংখ্যাযুক্ত তালিকা স্বাভাবিক ক্রমে সাজান', 'লাইন দৈর্ঘ্য অনুযায়ী সাজান', 'তালিকা উল্টো ও শাফল করার টুল'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'তালিকা, গ্রন্থপঞ্জি, ইনভেন্টরি SKU বা কোড ইমপোর্টকে বর্ণানুক্রমিক, স্বাভাবিক সংখ্যাক্রম, অক্ষর-দৈর্ঘ্য বা উল্টো ক্রমে সাজান — এক ক্লিকে।',
  },
  'find-and-replace': {
    slug: 'khujun-o-bodlan',
    name: 'খুঁজুন ও বদলান',
    shortDescription:
      'কেস-সেনসিটিভ, পূর্ণ শব্দ মেলানো ও RegExp সাপোর্টসহ লেখায় শব্দ খুঁজে বদলান।',
    keywords: [
      'find and replace online',
      'টেক্সটে শব্দ বদলান',
      'খুঁজুন ও বদলান টুল',
      'bulk text replace online',
      'find replace regex bangla',
      'শব্দ বদলানোর টুল',
      'text replace korar tool',
      'একসাথে অনেক শব্দ বদলান',
      'regex find replace online',
    ],
    seo: {
      title: 'খুঁজুন ও বদলান: অনলাইনে টেক্সটে শব্দ বদলান | UtilityFlow',
      description:
        'ম্যাচ সংখ্যা, কেস-সেনসিটিভ, পূর্ণ শব্দ ও RegExp ক্যাপচার গ্রুপসহ লেখায় খুঁজুন-বদলান করুন — সরাসরি ব্রাউজারে, বিনামূল্যে, রেজিস্ট্রেশন ছাড়াই। এখনই ফলাফল পান।',
      primaryKeyword: 'find and replace online',
      secondaryKeywords: ['টেক্সটে শব্দ বদলান', 'খুঁজুন ও বদলান টুল', 'bulk text replace online', 'find replace regex bangla'],
      longTailKeywords: ['লেখায় একসাথে অনেক শব্দ কিভাবে বদলাব', 'শুধু পূর্ণ শব্দ বদলানোর টুল', 'regex দিয়ে টেক্সট find replace কিভাবে করব', 'বড় লেখায় শব্দ বদলানোর ফ্রি টুল'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'প্রবন্ধ, CSV বা কোড ব্লকে একসাথে বড় পরিসরে খুঁজুন-বদলান করুন — নির্ভুল টেক্সট ম্যাচ, পূর্ণ শব্দের সীমা বা রেগুলার এক্সপ্রেশনের ক্যাপচার গ্রুপসহ।',
  },
  'text-reverser': {
    slug: 'text-ulta-korun',
    name: 'টেক্সট উল্টান',
    shortDescription:
      'পুরো টেক্সট উল্টান, শব্দের ক্রম বদলান, প্রতিটি শব্দের অক্ষর পাল্টান বা লাইনের ক্রম উল্টান।',
    keywords: [
      'text ulta korar tool',
      'reverse text online bangla',
      'টেক্সট উল্টান',
      'শব্দের ক্রম উল্টান',
      'উল্টো টেক্সট জেনারেটর',
      'mirror text generator bangla',
      'লাইন উল্টানোর টুল',
      'text reverse kivabe korbo',
      'উল্টো লেখার টুল',
    ],
    seo: {
      title: 'টেক্সট উল্টান: অনলাইনে শব্দ ও লাইন পাল্টান | UtilityFlow',
      description:
        'অক্ষর উল্টান, শব্দের ক্রম বদলান, প্রতিটি শব্দ পাল্টান বা লাইনের ক্রম উল্টান — Unicode-নিরাপদ, বিনামূল্যে, ব্যক্তিগত ও মুহূর্তে কাজ করে। এখনই চেষ্টা করুন।',
      primaryKeyword: 'text ulta korar tool',
      secondaryKeywords: ['reverse text online bangla', 'টেক্সট উল্টান', 'শব্দের ক্রম উল্টান', 'উল্টো টেক্সট জেনারেটর'],
      longTailKeywords: ['পুরো টেক্সট উল্টো কিভাবে করব অনলাইনে', 'বাক্যের শব্দের ক্রম উল্টান', 'প্রতিটি শব্দের অক্ষর উল্টানোর টুল', 'লাইন নিচ থেকে উপরে উল্টান'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'অক্ষরের ক্রম পাল্টান, প্রতিটি লাইনে শব্দের ক্রম বদলান, প্রতিটি শব্দের অক্ষর উল্টান অথবা অনেক লাইনের তালিকা নিচ থেকে উপরে উল্টে দিন — Unicode-সহ সম্পূর্ণ নিরাপদ।',
  },
  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-text-generator',
    name: 'লোরেম ইপসাম জেনারেটর',
    shortDescription:
      'ডিজাইনের জন্য অনুচ্ছেদ, বাক্য বা পছন্দের শব্দসংখ্যায় ডামি টেক্সট তৈরি করুন, ঐচ্ছিক HTML <p> ট্যাগসহ।',
    keywords: [
      'lorem ipsum generator bangla',
      'dummy text generator online',
      'lorem ipsum text kivabe banabo',
      'ডামি টেক্সট জেনারেটর',
      'placeholder text generator',
      'lorem ipsum bangla te',
      'filler text generator online',
      'lorem ipsum paragraphs',
      'ডিজাইনের জন্য ডামি টেক্সট',
    ],
    seo: {
      title: 'লোরেম ইপসাম জেনারেটর: ডামি টেক্সট তৈরি করুন | UtilityFlow',
      description:
        'অনুচ্ছেদ, বাক্য বা নির্ভুল শব্দসংখ্যায় লোরেম ইপসাম ডামি টেক্সট তৈরি করুন — ঐচ্ছিক HTML ট্যাগসহ, ডিজাইন মকআপের জন্য সম্পূর্ণ বিনামূল্যে। এখনই ফলাফল পান।',
      primaryKeyword: 'lorem ipsum generator bangla',
      secondaryKeywords: ['dummy text generator online', 'lorem ipsum text kivabe banabo', 'ডামি টেক্সট জেনারেটর', 'placeholder text generator'],
      longTailKeywords: ['শব্দসংখ্যা অনুযায়ী lorem ipsum কিভাবে বানাব', 'html p tag সহ lorem ipsum জেনারেটর', 'ডিজাইন মকআপের জন্য ডামি টেক্সট বানান', 'ওয়েবসাইট ডিজাইনের জন্য filler text জেনারেটর'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'ওয়্যারফ্রেম, টাইপোগ্রাফি পরীক্ষা ও ডিজাইন প্রোটোটাইপের জন্য নির্ভুল অনুচ্ছেদ, বাক্য বা শব্দসংখ্যায় পরিষ্কার ডামি টেক্সট তৈরি করুন — ঐচ্ছিক HTML অনুচ্ছেদ ট্যাগসহ।',
  },
  'readability-checker': {
    slug: 'pathjoggota-jachai',
    name: 'পাঠযোগ্যতা যাচাই টুল',
    shortDescription:
      'Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog ও SMOG পাঠযোগ্যতা স্কোর বের করুন।',
    keywords: [
      'readability checker online',
      'flesch reading ease bangla',
      'পাঠযোগ্যতা যাচাই টুল',
      'readability score kivabe check korbo',
      'flesch kincaid grade level',
      'gunning fog calculator bangla',
      'টেক্সট readability যাচাই করুন',
      'লেখা কত সহজ যাচাই করুন',
      'readability score checker bangla',
    ],
    seo: {
      title: 'পাঠযোগ্যতা যাচাই টুল: Flesch স্কোর বের করুন | UtilityFlow',
      description:
        'Flesch Reading Ease, Flesch-Kincaid, Gunning Fog ও SMOG স্কোরসহ লেখার পাঠযোগ্যতা যাচাই করুন — বিনামূল্যে, ব্যক্তিগত, সরাসরি আপনার ব্রাউজারে। এখনই ফলাফল পান।',
      primaryKeyword: 'readability checker online',
      secondaryKeywords: ['flesch reading ease bangla', 'পাঠযোগ্যতা যাচাই টুল', 'readability score kivabe check korbo', 'flesch kincaid grade level'],
      longTailKeywords: ['flesch kincaid grade level কিভাবে বের করব অনলাইনে', 'gunning fog ও smog readability স্কোর কিভাবে দেখব', 'প্রবন্ধের readability কিভাবে উন্নত করব', 'ভালো flesch reading ease স্কোর কত হয়'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'আপনার লেখা বোঝা কতটা সহজ, তা চারটি পরিচিত সূত্র দিয়ে যাচাই করুন — Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog ও SMOG — কঠিন শব্দ চিহ্নিতকরণসহ।',
  },
  'word-frequency-counter': {
    slug: 'shobdo-frequency-gonona',
    name: 'শব্দ ফ্রিকোয়েন্সি গণনা',
    shortDescription:
      'স্টপ-ওয়ার্ড ফিল্টার ও এক ক্লিকে CSV এক্সপোর্টসহ ১, ২ ও ৩ শব্দের বাক্যাংশের ফ্রিকোয়েন্সি গুনুন।',
    keywords: [
      'word frequency counter online',
      'শব্দ কতবার এসেছে গুনুন',
      'শব্দ ফ্রিকোয়েন্সি গণনা',
      'keyword density checker bangla',
      'phrase frequency counter',
      'word repeat count kivabe korbo',
      'ngram counter bangla',
      'টেক্সটে শব্দ গোনার টুল',
      'keyword frequency যাচাই করুন',
    ],
    seo: {
      title: 'শব্দ ফ্রিকোয়েন্সি গণনা: কিওয়ার্ড ঘনত্ব দেখুন | UtilityFlow',
      description:
        'যেকোনো লেখায় দ্রুত ও সহজে ১, ২ ও ৩ শব্দের বাক্যাংশের ফ্রিকোয়েন্সি গুনুন — স্টপ-ওয়ার্ড ফিল্টার ও এক ক্লিকে CSV এক্সপোর্টসহ, বিনামূল্যে। এখনই ফলাফল পান।',
      primaryKeyword: 'word frequency counter online',
      secondaryKeywords: ['শব্দ কতবার এসেছে গুনুন', 'শব্দ ফ্রিকোয়েন্সি গণনা', 'keyword density checker bangla', 'phrase frequency counter'],
      longTailKeywords: ['লেখায় কিওয়ার্ড কতবার এসেছে কিভাবে গুনব', '২ ও ৩ শব্দের phrase এর ফ্রিকোয়েন্সি যাচাই করুন', 'word frequency টেবিল csv তে ডাউনলোড করুন', 'কনটেন্টে keyword density কিভাবে দেখব'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'কনটেন্ট ড্রাফটে কিওয়ার্ডের ভারসাম্য, বেশি ব্যবহৃত বাক্যাংশ ও একাধিক শব্দের n-gram প্যাটার্ন যাচাই করুন — মুহূর্তে ফ্রিকোয়েন্সি টেবিল, স্টপ-ওয়ার্ড ফিল্টার ও ডাউনলোডযোগ্য CSV রিপোর্টসহ।',
  },
  'text-to-slug': {
    slug: 'text-theke-slug',
    name: 'টেক্সট থেকে স্লাগ',
    shortDescription:
      'কোড, ফাইল নাম ও ডেটাবেস কির জন্য যেকোনো লেখাকে পরিষ্কার URL স্লাগে বদলান, অ্যাকসেন্ট ট্রান্সলিটারেশন ও ব্যাচ মোডসহ।',
    keywords: [
      'text to slug converter bangla',
      'slug kivabe banabo online',
      'url slug generator bangla',
      'slugify text online',
      'seo friendly url kivabe banabo',
      'শিরোনাম থেকে স্লাগ বানানোর টুল',
      'স্লাগ বানানোর উপায়',
      'clean url slug generator',
      'slug generator online bangla',
    ],
    seo: {
      title: 'টেক্সট থেকে স্লাগ: SEO URL স্লাগ টুল | UtilityFlow',
      description:
        'ব্লগ শিরোনাম বা পণ্যের নামকে পরিষ্কার, SEO-বান্ধব URL স্লাগে বদলান — অ্যাকসেন্ট ট্রান্সলিটারেশন ও ব্যাচ মোডসহ, সম্পূর্ণ বিনামূল্যে। ফলাফল মুহূর্তে ও নির্ভুল।',
      primaryKeyword: 'text to slug converter bangla',
      secondaryKeywords: ['slug kivabe banabo online', 'url slug generator bangla', 'slugify text online', 'seo friendly url kivabe banabo'],
      longTailKeywords: ['ব্লগ শিরোনাম থেকে seo friendly স্লাগ কিভাবে বানাব', 'অনেক শিরোনাম একসাথে স্লাগে কিভাবে বদলাব', 'অ্যাকসেন্টযুক্ত অক্ষর স্লাগে কিভাবে বদলাব', 'hyphen নাকি underscore স্লাগ সেপারেটর কিভাবে বাছব'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'ব্লগ শিরোনাম, পণ্যের নাম ও অনেক লাইনের কনটেন্ট তালিকাকে পরিষ্কার, ASCII, URL-নিরাপদ স্লাগে বদলান — অ্যাকসেন্ট নিজে থেকেই বদলে যায়, ডিলিমিটার ও স্টপ-ওয়ার্ড সরানোর নিয়ন্ত্রণসহ।',
  },
  'markdown-previewer': {
    slug: 'markdown-preview-tool',
    name: 'মার্কডাউন প্রিভিউয়ার',
    shortDescription:
      'লাইভ স্প্লিট এডিটরে Markdown লিখুন, নিরাপদে রেন্ডার করা ফরম্যাট দেখুন এবং পরিষ্কার HTML কপি বা এক্সপোর্ট করুন।',
    keywords: [
      'markdown previewer online bangla',
      'markdown to html converter',
      'markdown editor online',
      'মার্কডাউন প্রিভিউ টুল',
      'markdown live preview করুন',
      'readme preview online',
      'markdown থেকে html কিভাবে বানাব',
      'markdown editor bangla te',
      'markdown html export করুন',
    ],
    seo: {
      title: 'মার্কডাউন প্রিভিউয়ার: লাইভ প্রিভিউ ও HTML | UtilityFlow',
      description:
        'Markdown লিখুন ও লাইভ রেন্ডার দেখুন, কম্পাইল করা HTML দেখুন এবং পরিষ্কার HTML ডকুমেন্ট কপি বা ডাউনলোড করুন — বিনামূল্যে, দ্রুত ও ব্যক্তিগত। এখনই ফলাফল পান।',
      primaryKeyword: 'markdown previewer online bangla',
      secondaryKeywords: ['markdown to html converter', 'markdown editor online', 'মার্কডাউন প্রিভিউ টুল', 'markdown live preview করুন'],
      longTailKeywords: ['markdown live preview সহ html এক্সপোর্ট করুন', 'readme markdown কে html এ কিভাবে বদলাব', 'আপলোড ছাড়া ব্রাউজারে markdown এডিটর', 'github readme প্রকাশের আগে প্রিভিউ করুন'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'README, ডকুমেন্টেশন ও ফরম্যাট করা নোট একটি রেসপন্সিভ Markdown এডিটরে লিখুন — লাইভ রেন্ডার প্রিভিউ, নিরাপদ HTML এস্কেপ, কাঁচা HTML যাচাই ও এক ক্লিকে HTML এক্সপোর্টসহ।',
  },
  'line-prefix-suffix': {
    slug: 'line-prefix-suffix-jog-korun',
    name: 'লাইন নম্বর ও প্রিফিক্স/সাফিক্স যোগ করুন',
    shortDescription:
      'তালিকা, SQL ক্লজ ও কোডের জন্য প্রতিটি লাইনে লাইন নম্বর, কাস্টম প্রিফিক্স ও সাফিক্স যোগ করুন।',
    keywords: [
      'line prefix suffix জোড়ার টুল',
      'line number যোগ করার টুল',
      'প্রতিটি লাইনে prefix যোগ করুন',
      'লাইন নম্বর যোগ করার টুল',
      'sql in clause formatter bangla',
      'লাইনকে quotes এ কিভাবে মুড়ব',
      'প্রতিটি লাইনের আগে পরে টেক্সট যোগ করুন',
      'লাইনে কমা যোগ করার টুল',
      'prefix suffix generator online',
    ],
    seo: {
      title: 'লাইন নম্বর, প্রিফিক্স ও সাফিক্স যোগ করুন | UtilityFlow',
      description:
        'প্রতিটি লাইনে লাইন নম্বর, কাস্টম প্রিফিক্স ও সাফিক্স যোগ করুন — তালিকা, SQL কোয়েরি ও কোড অ্যারের জন্য, বিনামূল্যে, রেজিস্ট্রেশন ছাড়াই। এখনই ফলাফল পান।',
      primaryKeyword: 'line prefix suffix জোড়ার টুল',
      secondaryKeywords: ['line number যোগ করার টুল', 'প্রতিটি লাইনে prefix যোগ করুন', 'লাইন নম্বর যোগ করার টুল', 'sql in clause formatter bangla'],
      longTailKeywords: ['প্রতিটি লাইন single quotes ও কমায় কিভাবে মুড়ব', 'sql এর জন্য প্রতিটি লাইনে quotes জোড়ার টুল', 'লাইনের আগে পরে টেক্সট একসাথে কিভাবে যোগ করব', 'লাইন নম্বর শূন্য থেকে শুরু করে কিভাবে যোগ করব'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'যেকোনো তালিকার প্রতিটি লাইনের আগে ক্রমিক লাইন নম্বর, বুলেট বা শুরুর কোট যোগ করুন এবং শেষে কমা, সেমিকোলন বা ক্লোজিং ট্যাগ লাগান — সেকেন্ডের মধ্যে।',
  },
  'alphabets-to-word-generator': {
    slug: 'akkhar-diye-shobdo-generator',
    name: 'অক্ষর দিয়ে শব্দ জেনারেটর',
    shortDescription: 'আপনার অক্ষর দিয়ে মুহূর্তে শব্দ তৈরি করুন: অ্যানাগ্রাম, ছোট ও লম্বা শব্দ এবং সম্ভাব্য সংমিশ্রণ — ব্রাউজারে বিনামূল্যে।',
    keywords: [
      'অক্ষর দিয়ে শব্দ জেনারেটর',
      'অক্ষর থেকে শব্দ তৈরি',
      'অক্ষর থেকে শব্দ',
      'অ্যানাগ্রাম জেনারেটর',
      'অ্যানাগ্রাম সলভার',
      'অক্ষর সাজান',
      'অক্ষর দিয়ে শব্দ খুঁজুন',
      'ইংরেজি শব্দ জেনারেটর',
      'দেওয়া অক্ষর দিয়ে শব্দ',
    ],
    seo: {
      title: 'অক্ষর দিয়ে শব্দ জেনারেটর: শব্দ তৈরি করুন | UtilityFlow',
      description: 'আমাদের বিনামূল্যের অক্ষর দিয়ে শব্দ জেনারেটর দিয়ে মুহূর্তে শব্দ তৈরি করুন। ছোট ও লম্বা শব্দ, অ্যানাগ্রাম এবং সম্ভাব্য সংমিশ্রণ খুঁজুন।',
      primaryKeyword: 'অক্ষর দিয়ে শব্দ জেনারেটর',
      secondaryKeywords: ['অ্যানাগ্রাম জেনারেটর', 'অ্যানাগ্রাম সলভার', 'অক্ষর সাজান', 'অক্ষর দিয়ে শব্দ খুঁজুন'],
      longTailKeywords: ['এই অক্ষরগুলো দিয়ে কী কী শব্দ বানাতে পারি', 'অক্ষর দিয়ে শব্দ অনলাইনে বিনামূল্যে তৈরি করুন', 'অক্ষর দিয়ে সবচেয়ে লম্বা শব্দ খুঁজুন', 'শব্দ থেকে অ্যানাগ্রাম তৈরি করুন'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'আপনার অক্ষর লিখুন এবং সেগুলো দিয়ে তৈরি করা যায় এমন সব শব্দ আবিষ্কার করুন: সঠিক অ্যানাগ্রাম, ছোট ও লম্বা শব্দ, দৈর্ঘ্য ও অক্ষর ফিল্টার সহ — সরাসরি আপনার ব্রাউজারে।',
  },
};
