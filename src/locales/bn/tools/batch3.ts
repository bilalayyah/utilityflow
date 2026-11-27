import type { ToolLocaleOverride } from '../../types';

/**
 * Bengali overrides — Batch 3: Calculators (14 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Original Bengali copy, SEO-optimized for Bengali search intent.
 * Slugs are romanized Bengali, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const BN_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'boyos-calculator',
    name: 'বয়স ক্যালকুলেটর',
    shortDescription:
      'বছর, মাস ও দিনে নির্ভুল বয়স বের করুন, সঙ্গে মোট সপ্তাহ, দিন ও পরের জন্মদিনের কাউন্টডাউন দেখুন।',
    keywords: [
      'boyos calculator bangla',
      'age calculator online bangla',
      'amar boyos koto',
      'jonmo tarikh diye boyos ber korun',
      'বয়স ক্যালকুলেটর',
      'age in years months days',
      'birthday countdown calculator',
      'boyos kivabe ber korbo online',
      'exact age calculator bangla',
    ],
    seo: {
      title: 'বয়স ক্যালকুলেটর: বছর, মাস ও দিন গুনুন | UtilityFlow',
      description:
        'জন্ম তারিখ দিয়ে আপনার নির্ভুল বয়স বছর, মাস, দিন, সপ্তাহ ও মোট দিনে বের করুন — পরের জন্মদিনের কাউন্টডাউনসহ, সম্পূর্ণ ফ্রি। এখনই ফলাফল পান। আজই চেষ্টা করুন।',
      primaryKeyword: 'boyos calculator bangla',
      secondaryKeywords: ['age calculator online bangla', 'amar boyos koto', 'jonmo tarikh diye boyos ber korun', 'বয়স ক্যালকুলেটর'],
      longTailKeywords: ['jonmo tarikh diye nirbhul boyos bochhor mash din e kivabe ber korbo', 'amar porer jonmodine koto din baki ache', 'jekono purono ba agami tarikhe boyos kivabe dekhbo', 'aaj amar boyos koto calculator'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'জন্ম তারিখ থেকে আজ পর্যন্ত — বা যেকোনো পুরনো বা আগামী তারিখ পর্যন্ত — নির্ভুল বয়স বের করুন, মাসের আলাদা দৈর্ঘ্য ও লিপ ইয়ার হিসেবে ধরে।',
  },
  'percentage-calculator': {
    slug: 'shotokora-calculator',
    name: 'শতকরা ক্যালকুলেটর',
    shortDescription:
      'কোনো সংখ্যার শতকরা হার, X, Y-এর কত শতাংশ, এবং শতকরা বৃদ্ধি বা হ্রাস মুহূর্তে বের করুন।',
    keywords: [
      'percentage calculator bangla',
      'shotokora kivabe ber korbo',
      'শতকরা ক্যালকুলেটর',
      'percentage increase decrease kivabe ber korbo',
      'x percent of y kivabe ber korbo',
      'shotokora ber korar niyom',
      'percentage ber korar tool',
      'percent kivabe calculate korbo',
      'percentage formula bangla',
    ],
    seo: {
      title: 'শতকরা ক্যালকুলেটর: % মুহূর্তে বের করুন | UtilityFlow',
      description:
        'X% of Y বের করুন, জানুন কোনো সংখ্যা আরেকটির কত শতাংশ এবং শতকরা বৃদ্ধি বা হ্রাস মাপুন — একই জায়গায়, ফ্রি ও মুহূর্তে, অনলাইনে। ফলাফল এখনই পান। আজই চেষ্টা করুন।',
      primaryKeyword: 'percentage calculator bangla',
      secondaryKeywords: ['shotokora kivabe ber korbo', 'শতকরা ক্যালকুলেটর', 'percentage increase decrease kivabe ber korbo', 'x percent of y kivabe ber korbo'],
      longTailKeywords: ['dui songkhar modhye percentage briddhi ba hrash kivabe ber korbo', 'x y er koto percent ta kivabe janbo', 'browser e turonto percentage ber korar tool', 'y er x percent koto hoy calculator online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'শতকরার তিনটি সবচেয়ে সাধারণ প্রশ্ন একসঙ্গে মেটান — কোনো মানের X% বের করা, X, Y-এর কত শতাংশ তা জানা এবং শতকরা বৃদ্ধি বা হ্রাস মাপা।',
  },
  'loan-emi-calculator': {
    slug: 'rin-emi-calculator',
    name: 'ঋণ ও EMI ক্যালকুলেটর',
    shortDescription:
      'মাসিক EMI কিস্তি, মোট সুদ এবং বার্ষিক বা মাসিক অ্যামর্টাইজেশন তালিকা বের করুন।',
    keywords: [
      'emi calculator bangla',
      'loan emi calculator online',
      'emi kivabe ber korbo',
      'loan emi kivabe calculate korbo',
      'personal loan emi calculator',
      'car loan emi calculator bangla',
      'home loan emi calculator',
      'emi calculator loan bangla te',
      'loan interest calculator bangla',
    ],
    seo: {
      title: 'ঋণ EMI ক্যালকুলেটর: মাসিক কিস্তি বের করুন | UtilityFlow',
      description:
        'মাসিক EMI, মোট সুদের খরচ এবং আসল-সুদের সম্পূর্ণ অ্যামর্টাইজেশন টেবিল অনলাইনে বের করুন — ঋণের নির্ভুল কিস্তি জানুন, সম্পূর্ণ ফ্রি। তথ্য সার্ভারে যায় না।',
      primaryKeyword: 'emi calculator bangla',
      secondaryKeywords: ['loan emi calculator online', 'emi kivabe ber korbo', 'loan emi kivabe calculate korbo', 'personal loan emi calculator'],
      longTailKeywords: ['loan er monthly emi o moat interest online kivabe ber korbo', 'loan er asol vs sud er table kivabe dekhbo', 'personal o car loan emi calculator bangla', 'home loan emi kivabe calculate korbo online'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'আপনার নির্ভুল মাসিক EMI, ঋণের মেয়াদে মোট সুদ, আসল-সুদের অনুপাত এবং বছর-বছর বা মাস-মাসের স্বচ্ছ অ্যামর্টাইজেশন টেবিল বের করুন।',
  },
  'mortgage-calculator': {
    slug: 'griho-rin-calculator',
    name: 'গৃহঋণ ক্যালকুলেটর',
    shortDescription:
      'ডাউন পেমেন্ট, সুদের হার, সম্পত্তি কর, বীমা ও PMI সহ মাসিক PITI গৃহঋণ পেমেন্টের হিসাব করুন।',
    keywords: [
      'home loan calculator bangla',
      'mortgage calculator bangla',
      'home loan emi kivabe ber korbo',
      'গৃহঋণ ক্যালকুলেটর',
      'home loan monthly payment calculator',
      'piti calculator bangla',
      'home loan interest calculator',
      '15 vs 30 year home loan',
      'home loan pmi calculator',
    ],
    seo: {
      title: 'গৃহঋণ ক্যালকুলেটর: মাসিক EMI ও PMI ফ্রি | UtilityFlow',
      description:
        'ডাউন পেমেন্ট, কর, বাড়ির বীমা, HOA ফি ও PMI সহ মাসিক গৃহঋণ পেমেন্টের হিসাব করুন — ফ্রি, সরাসরি আপনার ব্রাউজারে। ফলাফল মুহূর্তে ও নির্ভুল পান। আজই দেখুন।',
      primaryKeyword: 'home loan calculator bangla',
      secondaryKeywords: ['mortgage calculator bangla', 'home loan emi kivabe ber korbo', 'গৃহঋণ ক্যালকুলেটর', 'home loan monthly payment calculator'],
      longTailKeywords: ['tax o insurance soho monthly home loan payment kivabe ber korbo', '15 bochhor vs 30 bochhor home loan payment tulona korun', 'somoyer sathe home loan balance kivabe kome ta dekhun', 'mashe koto home loan dite parbo kivabe janbo'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'আপনার আসল মাসিক আবাসন দায় মডেল করুন — আসল ও সুদের সঙ্গে সম্পত্তি কর, বাড়ির বীমা, HOA ফি ও প্রাইভেট মর্গেজ বীমা (PMI) — মোট সুদ ও বার্ষিক ঋণ হ্রাসসহ।',
  },
  'compound-interest-calculator': {
    slug: 'chokrobriddhi-sud-calculator',
    name: 'চক্রবৃদ্ধি সুদ ক্যালকুলেটর',
    shortDescription:
      'প্রাথমিক জমা, মাসিক অবদান, চক্রবৃদ্ধির হার ও মুদ্রাস্ফীতি সমন্বয়সহ বিনিয়োগের বৃদ্ধির হিসাব করুন।',
    keywords: [
      'compound interest calculator bangla',
      'chokrobriddhi sud kivabe ber korbo',
      'চক্রবৃদ্ধি সুদ ক্যালকুলেটর',
      'investment growth calculator bangla',
      'compound interest formula bangla',
      'monthly contribution compound interest',
      'sip return calculator bangla',
      'future value calculator bangla',
      'sonchoyer upor sud kivabe ber korbo',
    ],
    seo: {
      title: 'চক্রবৃদ্ধি সুদ ক্যালকুলেটর: সঞ্চয় বাড়ান | UtilityFlow',
      description:
        'প্রাথমিক অর্থ, মাসিক জমা এবং দৈনিক, মাসিক, ত্রৈমাসিক বা বার্ষিক চক্রবৃদ্ধিসহ বিনিয়োগের ভবিষ্যৎ মূল্য জানুন — বছরভিত্তিক টেবিলসহ, ফ্রি। এখনই দেখুন। আজই করুন।',
      primaryKeyword: 'compound interest calculator bangla',
      secondaryKeywords: ['chokrobriddhi sud kivabe ber korbo', 'চক্রবৃদ্ধি সুদ ক্যালকুলেটর', 'investment growth calculator bangla', 'compound interest formula bangla'],
      longTailKeywords: ['monthly contribution er sathe compound interest online kivabe ber korbo', 'monthly vs daily compounding growth tulona korun', 'bochhor bochhor compound interest table kivabe dekhbo', '20 bochhore amar sonchoy koto barbe kivabe janbo'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'দেখুন প্রাথমিক অর্থ ও প্রতি মাসের নিয়মিত জমা চক্রবৃদ্ধি সুদে বছরের পর বছর কীভাবে বাড়ে — চক্রবৃদ্ধির হার বেছে নেওয়ার সুযোগ ও আসল বনাম সুদের বছরভিত্তিক টেবিলসহ।',
  },
  'discount-margin-calculator': {
    slug: 'chhar-margin-calculator',
    name: 'ছাড় ও মার্জিন ক্যালকুলেটর',
    shortDescription:
      'স্তরে স্তরে ছাড়সহ বিক্রয়মূল্য বের করুন বা খরচ থেকে লাভের মার্জিন, মার্কআপ % ও মোট লাভ বের করুন।',
    keywords: [
      'discount calculator bangla',
      'margin calculator bangla',
      'ছাড় ক্যালকুলেটর',
      'markup vs margin ki',
      'sale price kivabe ber korbo',
      'profit margin kivabe ber korbo',
      'discount percent calculator bangla',
      'mrp te discount kivabe ber korbo',
      'gross profit calculator bangla',
    ],
    seo: {
      title: 'ছাড় ও মার্জিন ক্যালকুলেটর: বিক্রয়মূল্য | UtilityFlow',
      description:
        'স্তরে স্তরে ছাড় ও করসহ চূড়ান্ত বিক্রয়মূল্য বের করুন, বা খরচ ও বিক্রয়মূল্য থেকে মোট মার্জিন বনাম মার্কআপ তুলনা করুন — ফ্রি, মুহূর্তে। এখনই চেষ্টা করুন।',
      primaryKeyword: 'discount calculator bangla',
      secondaryKeywords: ['margin calculator bangla', 'ছাড় ক্যালকুলেটর', 'markup vs margin ki', 'sale price kivabe ber korbo'],
      longTailKeywords: ['double discount o tax er sathe final price kivabe ber korbo', 'profit margin o markup percentage er parthokko ki', 'ecommerce er jonno margin o profit calculator', 'cost o selling price diye margin percent kivabe ber korbo'],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'দুটি মোডের মধ্যে সহজে বদলান — খুচরা ছাড় মোড (স্তরে স্তরে কুপন ছাড় ও ঐচ্ছিক বিক্রয় কর) এবং মার্জিন-মার্কআপ মোড — যাতে মার্জিনকে মার্কআপের সঙ্গে গুলিয়ে না ফেলে পণ্যের সঠিক দাম ঠিক করতে পারেন।',
  },
  'vat-tax-calculator': {
    slug: 'gst-vat-tax-calculator',
    name: 'GST, VAT ও ট্যাক্স ক্যালকুলেটর',
    shortDescription:
      'নেট মূল্যে VAT, GST বা বিক্রয় কর যোগ করুন বা করসহ মোট ইনভয়েস থেকে কর আলাদা করে বের করুন।',
    keywords: [
      'gst calculator bangla',
      'vat calculator bangla',
      'gst kivabe ber korbo online',
      'জিএসটি ক্যালকুলেটর',
      'tax calculator bangla',
      'reverse gst calculator',
      'gst included price theke gst ber korun',
      'net price e gst jog korun',
      'sales tax calculator bangla',
    ],
    seo: {
      title: 'GST, VAT ও ট্যাক্স ক্যালকুলেটর: নেট ও মোট | UtilityFlow',
      description:
        'নেট সাবটোটালে GST, VAT বা বিক্রয় কর যোগ করুন, বা করসহ মোট থেকে কর ও কর-পূর্ব নেট মূল্য আলাদা করুন — মুহূর্তে, ফ্রি, রেজিস্ট্রেশন ছাড়া। এখনই দেখুন। আজই করুন।',
      primaryKeyword: 'gst calculator bangla',
      secondaryKeywords: ['vat calculator bangla', 'gst kivabe ber korbo online', 'জিএসটি ক্যালকুলেটর', 'reverse gst calculator'],
      longTailKeywords: ['gross price theke gst kivabe ber korbo online', 'dam e 18 percent gst ba custom rate kivabe jog korbo', 'invoice er net tax o gross breakdown kivabe dekhbo', 'moat dam theke reverse gst kivabe calculate korbo'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'নেট মূল্য, করের পরিমাণ ও মোট — দুই দিকেই বের করুন — কর-পূর্ব সাবটোটালে GST, VAT বা বিক্রয় কর যোগ করুন, বা করসহ রসিদ থেকে নির্ভুল কর-পূর্ব পরিমাণ আলাদা করুন।',
  },
  'salary-calculator': {
    slug: 'beton-calculator',
    name: 'বেতন ক্যালকুলেটর',
    shortDescription:
      'নিজের মতো ঘণ্টা ও বছরের সপ্তাহ দিয়ে ঘণ্টা, দিন, সপ্তাহ, পাক্ষিক, মাস ও বার্ষিক বেতন বদলে নিন।',
    keywords: [
      'salary calculator bangla',
      'বেতন ক্যালকুলেটর',
      'hourly to annual salary bangla',
      'monthly salary calculator bangla',
      'salary per hour kivabe ber korbo',
      'annual salary to monthly bangla',
      'pay converter online bangla',
      'salary koto hoy calculator',
      'gross salary calculator bangla',
    ],
    seo: {
      title: 'বেতন ক্যালকুলেটর: ঘণ্টা থেকে বার্ষিক | UtilityFlow',
      description:
        'ঘণ্টা, দিন, সপ্তাহ, পাক্ষিক, মাস ও বার্ষিক মোট বেতন বদলে নিন — সপ্তাহের ঘণ্টা ও বছরের বেতনভুক্ত সপ্তাহ নিজের মতো করে, ফ্রি। এখনই দেখুন। আজই চেষ্টা করুন।',
      primaryKeyword: 'salary calculator bangla',
      secondaryKeywords: ['বেতন ক্যালকুলেটর', 'hourly to annual salary bangla', 'monthly salary calculator bangla', 'salary per hour kivabe ber korbo'],
      longTailKeywords: ['50 taka per hour ke annual salary te kivabe bodlabo', 'betonhin saptaho soho gross salary breakdown', 'proti saptaher ghonta diye salary converter', 'annual salary ke monthly o biweekly te kivabe bodlabo'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'যেকোনো বেতনের হারকে — ঘণ্টা, দিন, সপ্তাহ, পাক্ষিক, মাস বা বছর — সব পেমেন্ট ফ্রিকোয়েন্সিতে বদলে নিন, সপ্তাহে কাজের ঘণ্টা ও বছরের বেতনভুক্ত সপ্তাহ ঠিক করার সুযোগসহ।',
  },
  'tip-calculator': {
    slug: 'tip-bill-calculator',
    name: 'টিপ ও বিল ভাগের ক্যালকুলেটর',
    shortDescription:
      'টিপের পরিমাণ, টিপের আগে কর বাদ দেওয়ার সুযোগ, প্রতিজনের বিল ভাগ ও পরিষ্কার রাউন্ডিং বের করুন।',
    keywords: [
      'tip calculator bangla',
      'bill split calculator bangla',
      'টিপ ক্যালকুলেটর',
      'restaurant bill split kivabe korbo',
      'tip percent kivabe ber korbo',
      'bill bhag korar calculator',
      'tip koto dite hoy',
      'bill per person kivabe ber korbo',
      'restaurant tip calculator bangla',
    ],
    seo: {
      title: 'টিপ ক্যালকুলেটর: বিল ভাগ করুন ও টিপ বের করুন | UtilityFlow',
      description:
        'রেস্তোরাঁয় টিপ শতাংশসহ বের করুন, করমুক্ত সাবটোটালে টিপ লাগান, বিল সমান ভাগ করুন ও রাউন্ড করুন — ফ্রি ও সহজ। আপনার তথ্য সার্ভারে যায় না। আজই চেষ্টা করুন।',
      primaryKeyword: 'tip calculator bangla',
      secondaryKeywords: ['bill split calculator bangla', 'টিপ ক্যালকুলেটর', 'restaurant bill split kivabe korbo', 'tip percent kivabe ber korbo'],
      longTailKeywords: ['tax er age 18 ba 20 percent tip kivabe ber korbo', 'bondhuder modhye dinner bill o tip kivabe bhag korbo', 'per person total round korar tip calculator', 'tip o tax er sathe restaurant bill kivabe bhag korbo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'রেস্তোরাঁ, ডেলিভারি বা দলগত আড্ডার সঠিক টিপ মুহূর্তে বের করুন এবং বিল যেকোনো সংখ্যক মানুষের মধ্যে সমান ভাগ করুন — কর বাদ দেওয়ার সুযোগ ও বিল রাউন্ডিংসহ।',
  },
  'bmi-calculator': {
    slug: 'bmi-hisab-online',
    name: 'BMI ক্যালকুলেটর',
    shortDescription:
      'মেট্রিক বা ইম্পেরিয়াল এককে বডি মাস ইনডেক্স (BMI) বের করুন, WHO ওজনের শ্রেণি ও স্বাস্থ্যকর সীমাসহ।',
    keywords: [
      'bmi calculator bangla',
      'bmi kivabe ber korbo',
      'বিএমআই ক্যালকুলেটর',
      'body mass index bangla',
      'healthy weight range calculator',
      'bmi chart bangla',
      'amar bmi koto',
      'bmi normal range ki',
      'weight height diye bmi ber korun',
    ],
    seo: {
      title: 'BMI ক্যালকুলেটর: বডি মাস ইনডেক্স বের করুন | UtilityFlow',
      description:
        'মেট্রিক বা ইম্পেরিয়াল এককে আপনার BMI বের করুন, WHO ওজনের শ্রেণি দেখুন ও আপনার উচ্চতার জন্য স্বাস্থ্যকর ওজনের সীমা জানুন — ফ্রি, মুহূর্তে। এখনই দেখুন।',
      primaryKeyword: 'bmi calculator bangla',
      secondaryKeywords: ['bmi kivabe ber korbo', 'বিএমআই ক্যালকুলেটর', 'body mass index bangla', 'healthy weight range calculator'],
      longTailKeywords: ['feet inch o pound e bmi kivabe ber korbo', 'who er bmi category praptoboyoskoder jonno ki', 'amar uchchotar jonno healthy weight range kivabe janbo', 'amar uchchotar jonno sothik bmi range ki'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'প্রাপ্তবয়স্কদের বডি মাস ইনডেক্স (BMI) মেট্রিক (সেমি/কেজি) বা ইম্পেরিয়াল (ফুট, ইঞ্চি/পাউন্ড) মাপে বের করুন, বিশ্ব স্বাস্থ্য সংস্থার শ্রেণিবিভাগ দেখুন ও আপনার উচ্চতার জন্য 18.5 থেকে 24.9-এর স্বাস্থ্যকর ওজনের সীমা দেখুন।',
  },
  'calorie-calculator': {
    slug: 'calorie-tdee-calculator',
    name: 'ক্যালরি ও TDEE ক্যালকুলেটর',
    shortDescription:
      'ওজনের লক্ষ্যসহ বেসাল মেটাবলিক রেট (BMR) ও মোট দৈনিক শক্তি ব্যয় (TDEE)-এর হিসাব করুন।',
    keywords: [
      'calorie calculator bangla',
      'tdee calculator bangla',
      'bmr calculator bangla',
      'daily calorie intake kivabe ber korbo',
      'ক্যালরি ক্যালকুলেটর',
      'weight loss calorie calculator',
      'calorie deficit kivabe ber korbo',
      'dine koto calorie dorkar',
      'macro calculator bangla',
    ],
    seo: {
      title: 'ক্যালরি ও TDEE ক্যালকুলেটর: BMR ও ম্যাক্রো | UtilityFlow',
      description:
        'Mifflin-St Jeor সূত্রে BMR ও TDEE জানুন, ওজন কমানো বা বাড়ানোর লক্ষ্য ঠিক করুন ও ম্যাক্রো পরিকল্পনা বানান — ফ্রি, অনলাইনে। তথ্য সার্ভারে যায় না। এখনই দেখুন।',
      primaryKeyword: 'calorie calculator bangla',
      secondaryKeywords: ['tdee calculator bangla', 'bmr calculator bangla', 'daily calorie intake kivabe ber korbo', 'ক্যালরি ক্যালকুলেটর'],
      longTailKeywords: ['maintenance calorie o weight loss deficit online kivabe ber korbo', 'mifflin st jeor diye daily calorie khoroch kivabe ber korbo', 'metric o imperial tdee macro calculator', 'ojon komate dine koto calorie khabo'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'চিকিৎসাবিজ্ঞানে স্বীকৃত Mifflin-St Jeor সমীকরণে আপনার বেসাল মেটাবলিক রেট (BMR) ও মোট দৈনিক শক্তি ব্যয় (TDEE) জানুন — হালকা ঘাটতি, সাধারণ ফ্যাট লস, লিন গেইন ও মেইনটেন্যান্স লক্ষ্য ও ম্যাক্রোসহ।',
  },
  'date-difference-calculator': {
    slug: 'tarikh-parthokko-calculator',
    name: 'তারিখের পার্থক্য ক্যালকুলেটর',
    shortDescription:
      'দুটি তারিখের মধ্যে নির্ভুল বছর, মাস, দিন, কর্মদিবস ও সাপ্তাহিক ছুটির দিন বের করুন, বা ক্যালেন্ডার পার্থক্য যোগ-বিয়োগ করুন।',
    keywords: [
      'date difference calculator bangla',
      'dui tarikher modhye din gunun',
      'তারিখের পার্থক্য ক্যালকুলেটর',
      'days between two dates bangla',
      'working days calculator bangla',
      'tarikhe din jog korar tool',
      'koto din baki ache calculator',
      'tarikh theke din kivabe gunbo',
      'age days calculator bangla',
    ],
    seo: {
      title: 'তারিখের পার্থক্য ক্যালকুলেটর: দিন গুনুন | UtilityFlow',
      description:
        'দুটি তারিখের মধ্যে নির্ভুল বছর, মাস, দিন, কর্মদিবস ও ছুটির দিন গুনুন, বা কোনো তারিখে ক্যালেন্ডার পার্থক্য যোগ-বিয়োগ করুন — ফ্রি। তথ্য সার্ভারে যায় না।',
      primaryKeyword: 'date difference calculator bangla',
      secondaryKeywords: ['dui tarikher modhye din gunun', 'তারিখের পার্থক্য ক্যালকুলেটর', 'days between two dates bangla', 'working days calculator bangla'],
      longTailKeywords: ['dui tarikher modhye working days o weekend din kivabe gunbo', 'dui tarikher modhye nirbhul mash o din kivabe ber korbo', 'kono tarikhe bochhor mash din kivabe jog ba biyog korbo', 'dui tarikher modhye koto working days ache online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'যেকোনো দুটি তারিখের মধ্যে নির্ভুল ক্যালেন্ডার পার্থক্য মাপুন — কর্মদিবস বনাম সাপ্তাহিক ছুটির দিনের গণনা ও শেষ তারিখ গোনার সুযোগসহ — বা কোনো রেফারেন্স তারিখে বছর, মাস ও দিন যোগ-বিয়োগ করুন।',
  },
  'time-duration-calculator': {
    slug: 'somoy-meyad-calculator',
    name: 'সময়কাল ক্যালকুলেটর',
    shortDescription:
      'ঘড়ির সময়ের মধ্যে কেটে যাওয়া সময় HH:MM:SS-এ বের করুন (বিরতি ও রাতের শিফটসহ) বা একাধিক সারির টাইমশিট যোগ করুন।',
    keywords: [
      'time duration calculator bangla',
      'somoy meyad calculator',
      'ঘণ্টা গোনার ক্যালকুলেটর',
      'hours calculator bangla',
      'dui somoyer modhye parthokko ber korun',
      'timesheet calculator bangla',
      'kaj er ghonta kivabe gunbo',
      'hours minutes jog korar tool',
      'shift hours calculator bangla',
    ],
    seo: {
      title: 'সময়কাল ক্যালকুলেটর: ঘণ্টা, টাইমশিট ফ্রি | UtilityFlow',
      description:
        'ঘণ্টা, মিনিট ও সেকেন্ডে কেটে যাওয়া সময় বের করুন, বেতনহীন বিরতি বাদ দিন, রাতের শিফট সামলান বা টাইমশিটের সারি যোগ করুন — সম্পূর্ণ ফ্রি, তথ্য আপনার কাছেই থাকে।',
      primaryKeyword: 'time duration calculator bangla',
      secondaryKeywords: ['somoy meyad calculator', 'ঘণ্টা গোনার ক্যালকুলেটর', 'hours calculator bangla', 'timesheet calculator bangla'],
      longTailKeywords: ['betonhin break o night shift er sathe kete jawa somoy kivabe ber korbo', 'hh mm ss duration ke decimal ghontay kivabe bodlabo', 'ekadhik ghonta minute second er row kivabe jog korbo', 'break er sathe kaj er ghonta online kivabe ber korbo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'ঘড়ির দুটি সময়ের মধ্যে কেটে যাওয়া নির্ভুল ঘণ্টা, মিনিট ও সেকেন্ড জানুন — বেতনহীন বিরতির কাটা ও মধ্যরাত পেরিয়ে যাওয়া রাতের শিফটসহ — বা সীমাহীন মেয়াদের সারি যোগ করে পে-রোলের দশমিক ঘণ্টা পান।',
  },
  'unit-converter': {
    slug: 'ekok-converter',
    name: 'একক কনভার্টার',
    shortDescription:
      'সম্পূর্ণ রেফারেন্স টেবিলসহ দৈর্ঘ্য, ওজন, তাপমাত্রা, ক্ষেত্রফল, আয়তন, গতি ও ডিজিটাল স্টোরেজের একক বদলে নিন।',
    keywords: [
      'unit converter bangla',
      'একক কনভার্টার',
      'metric to imperial converter bangla',
      'meter to feet converter bangla',
      'kg to pound converter bangla',
      'celsius to fahrenheit kivabe bodlabo',
      'liter to gallon converter',
      'km to miles converter bangla',
      'unit bodlanor tool',
    ],
    seo: {
      title: 'একক কনভার্টার: দৈর্ঘ্য, ওজন ও ডেটা ফ্রি | UtilityFlow',
      description:
        'দৈর্ঘ্য, ওজন, তাপমাত্রা, ক্ষেত্রফল, আয়তন, গতি ও ডিজিটাল স্টোরেজকে মেট্রিক ও ইম্পেরিয়াল এককে বদলে নিন — সম্পূর্ণ রেফারেন্স টেবিলসহ, ফ্রি। এখনই দেখুন।',
      primaryKeyword: 'unit converter bangla',
      secondaryKeywords: ['একক কনভার্টার', 'metric to imperial converter bangla', 'meter to feet converter bangla', 'kg to pound converter bangla'],
      longTailKeywords: ['kilometer ke miles o kg ke pound e online kivabe bodlabo', 'gigabyte decimal vs gibibyte storage converter', 'science o engineering unit converter table soho', 'celsius ke fahrenheit o kelvin e online kivabe bodlabo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'সাতটি পরিমাপ পরিবারে মুহূর্তে বদলে নিন — দৈর্ঘ্য, ওজন ও ভর, তাপমাত্রা, ক্ষেত্রফল, আয়তন, গতি ও ডিজিটাল স্টোরেজ — বিভাগের প্রতিটি একক দেখানো স্বয়ংক্রিয় পাশাপাশি টেবিলসহ।',
  },
  'roman-numeral-converter': {
    slug: 'roman-sankhya-converter',
    name: 'রোমান সংখ্যা কনভার্টার',
    shortDescription:
      'সংখ্যাকে রোমান সংখ্যায় আর রোমান সংখ্যাকে সংখ্যায় মুহূর্তে বদলে নিন — তারিখও রোমান সংখ্যায় বদলান।',
    keywords: [
      'roman numeral converter bangla',
      'roman sankhya kivabe ber korbo',
      'রোমান সংখ্যা কনভার্টার',
      'roman numerals to numbers bangla',
      'roman sankhya date converter',
      'roman numeral calculator bangla',
      'roman sankhya 1 theke 3999',
      'saal ke roman sankhya te bodlan',
      'roman sankhya chart bangla',
    ],
    seo: {
      title: 'রোমান সংখ্যা কনভার্টার: সংখ্যা ও তারিখ | UtilityFlow',
      description:
        'সংখ্যাকে রোমান সংখ্যায় আর রোমান সংখ্যাকে সংখ্যায় মুহূর্তে বদলান। সাল, জন্মদিন ও তারিখের জন্য ফ্রি রোমান সংখ্যা কনভার্টার অনলাইনে আজই চেষ্টা করে দেখুন।',
      primaryKeyword: 'roman numeral converter bangla',
      secondaryKeywords: [
        'roman sankhya kivabe ber korbo',
        'রোমান সংখ্যা কনভার্টার',
        'roman numerals to numbers bangla',
        'roman sankhya date converter',
      ],
      longTailKeywords: [
        'number ke roman sankhya te kivabe bodlabo',
        '2026 roman sankhya te ki hoy',
        'amar jonmodin roman sankhya te bodlan',
        'saal ke roman sankhya te bodlanor tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '১ থেকে ৩৯৯৯ পর্যন্ত যেকোনো পূর্ণ সংখ্যাকে রোমান সংখ্যায় বদলান, বা রোমান সংখ্যাকে সাধারণ সংখ্যার মতো পড়ুন — আর পুরো তারিখও রোমান সংখ্যায় বদলান, সবকিছু আপনার ব্রাউজারে মুহূর্তে।',
  },
  'online-hourly-calculator': {
    slug: 'online-ghanta-calculator',
    name: 'অনলাইন ঘণ্টা ক্যালকুলেটর',
    shortDescription:
      'দুই সময়ের মধ্যে ঘণ্টা, বিরতিসহ কাজের ঘণ্টা, দশমিক ঘণ্টা ও ঘণ্টাভিত্তিক বেতন হিসাব করুন — ব্রাউজারে বিনামূল্যে।',
    keywords: [
      'অনলাইন ঘণ্টা ক্যালকুলেটর',
      'কাজের ঘণ্টা ক্যালকুলেটর',
      'দুই সময়ের মধ্যে ঘণ্টা',
      'ঘণ্টাভিত্তিক বেতন ক্যালকুলেটর',
      'দশমিক ঘণ্টা ক্যালকুলেটর',
      'ওভারটাইম বেতন',
      'সময় যোগ বিয়োগ',
      'কত ঘণ্টা কাজ করলাম',
    ],
    seo: {
      title: 'অনলাইন ঘণ্টা ক্যালকুলেটর – ঘণ্টা ও বেতন হিসাব করুন | UtilityFlow',
      description:
        'বিনামূল্যের অনলাইন ঘণ্টা ক্যালকুলেটর দিয়ে কাজের ঘণ্টা, সময়ের পার্থক্য, বিরতি, দশমিক ঘণ্টা ও ঘণ্টাভিত্তিক আয় মুহূর্তে হিসাব করুন।',
      primaryKeyword: 'অনলাইন ঘণ্টা ক্যালকুলেটর',
      secondaryKeywords: [
        'কাজের ঘণ্টা ক্যালকুলেটর',
        'দুই সময়ের মধ্যে ঘণ্টা',
        'ঘণ্টাভিত্তিক বেতন ক্যালকুলেটর',
        'দশমিক ঘণ্টা ক্যালকুলেটর',
      ],
      longTailKeywords: [
        'দুই সময়ের মধ্যে কত ঘণ্টা',
        'বিরতিসহ কাজের ঘণ্টা কীভাবে হিসাব করব',
        'ঘণ্টা মিনিটকে দশমিক ঘণ্টায় বদলান',
        'ওভারটাইমসহ ঘণ্টাভিত্তিক বেতন হিসাব',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '১২ বা ২৪ ঘণ্টার ফরম্যাটে দুই সময়ের মধ্যে ঘণ্টা বের করুন, নির্দিষ্ট বিরতিসহ শিফটের হিসাব রাখুন, সময় যোগ বা বিয়োগ করুন, ঘণ্টা ও মিনিটকে দশমিক ঘণ্টায় বদলান, আর কাজের ঘণ্টাকে বেতনে রূপান্তর করুন — ওভারটাইম, বিরতি ও আপনার মুদ্রাসহ, সবকিছু ব্রাউজারে মুহূর্তে।',
  },
  'heat-index-calculator': {
    slug: 'tap-suchak-calculator',
    name: 'তাপ সূচক ক্যালকুলেটর',
    shortDescription: 'বাতাসের তাপমাত্রা ও আপেক্ষিক আর্দ্রতা থেকে তাপ সূচক বের করুন — আসলে কতটা গরম লাগছে জানুন, ফারেনহাইট ও সেলসিয়াসে, ব্রাউজারে বিনামূল্যে।',
    keywords: ['তাপ সূচক ক্যালকুলেটর', 'তাপ সূচক', 'তাপ সূচক হিসাব', 'অনুভূত তাপমাত্রা ক্যালকুলেটর', 'তাপমাত্রা ও আর্দ্রতা ক্যালকুলেটর', 'হিট ইনডেক্স ফারেনহাইট', 'হিট ইনডেক্স সেলসিয়াস', 'তাপ সূচক কী', 'তাপ সূচক চার্ট'],
    seo: {
      title: 'তাপ সূচক ক্যালকুলেটর – অনুভূত তাপমাত্রা হিসাব করুন | UtilityFlow',
      description: 'বাতাসের তাপমাত্রা ও আর্দ্রতা ব্যবহার করে তাপ সূচক হিসাব করুন। আমাদের বিনামূল্যের ফারেনহাইট ও সেলসিয়াস তাপ সূচক ক্যালকুলেটর দিয়ে জানুন আসলে কতটা গরম লাগছে।',
      primaryKeyword: 'তাপ সূচক ক্যালকুলেটর',
      secondaryKeywords: ['অনুভূত তাপমাত্রা ক্যালকুলেটর', 'তাপমাত্রা ও আর্দ্রতা ক্যালকুলেটর', 'হিট ইনডেক্স ফারেনহাইট', 'হিট ইনডেক্স সেলসিয়াস'],
      longTailKeywords: ['তাপমাত্রা ও আর্দ্রতা থেকে তাপ সূচক কীভাবে হিসাব করবেন', '৯০ ডিগ্রিতে তাপ সূচক কত', 'আর্দ্রতা কীভাবে অনুভূত তাপমাত্রা বদলায়', 'অনলাইনে আপাত তাপমাত্রা হিসাব করুন'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'বাতাসের তাপমাত্রা ও আপেক্ষিক আর্দ্রতা লিখে জানুন আসলে কতটা গরম লাগছে — ফারেনহাইট ও সেলসিয়াসে তাপ সূচক, মাপা তাপমাত্রা থেকে পার্থক্য, আর তাপ-ঝুঁকির স্তর, সবকিছু ব্রাউজারে মুহূর্তে।',
  },
};
