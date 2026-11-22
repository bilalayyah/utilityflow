import type { ToolLocaleOverride } from '../../types';

/**
 * Bengali overrides — Batch 5: SEO tools (10) + Image & File tools (10).
 * Source: src/registry/batches/batch6SeoTools.ts,
 *         src/registry/batches/batch7ImageFileTools.ts.
 * Original Bengali, SEO-optimized for Bengali search intent. Slugs are
 * romanized (Latin) — what Bengali speakers actually type into Google.
 */
export const BN_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'meta-tag-banano',
    name: 'মেটা ট্যাগ জেনারেটর',
    shortDescription:
      'টাইটেল, মেটা বিবরণ, ক্যানোনিক্যাল, রোবটস, ওপেন গ্রাফ ও টুইটার/এক্স কার্ড ট্যাগ বানান, লাইভ কার্ড প্রিভিউসহ।',
    keywords: [
      'meta tag generator',
      'মেটা ট্যাগ কিভাবে বানাবো',
      'open graph generator',
      'twitter card generator',
      'seo meta tags',
      'মেটা ডেসক্রিপশন জেনারেটর',
      'ওয়েবসাইট মেটা ট্যাগ',
      'og tags generator',
      'ফ্রি মেটা ট্যাগ টুল',
    ],
    seo: {
      title: 'মেটা ট্যাগ জেনারেটর – ওপেন গ্রাফ ও এসইও ট্যাগ | UtilityFlow',
      description:
        'টাইটেল, বিবরণ ও ক্যানোনিক্যাল ইউআরএলসহ ওপেন গ্রাফ ও টুইটার কার্ড ট্যাগ বানান। লাইভ দৈর্ঘ্য যাচাই ও সোশ্যাল প্রিভিউসহ — ফ্রি, ব্রাউজারেই, সাইন-আপ ছাড়া।',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'মেটা ট্যাগ কিভাবে বানাবো',
        'open graph generator',
        'twitter card generator',
        'মেটা ডেসক্রিপশন জেনারেটর',
      ],
      longTailKeywords: [
        'ওয়েবসাইটের জন্য মেটা ট্যাগ কিভাবে বানাবো ফ্রি',
        'ওপেন গ্রাফ ও টুইটার কার্ড ট্যাগ কিভাবে বানাবো',
        'মেটা টাইটেল বিবরণের দৈর্ঘ্য কিভাবে যাচাই করব',
        'এইচটিএমএল হেড এসইও ট্যাগ কপি পেস্ট কিভাবে করব',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'মান অনুযায়ী সঠিক HTML <head> মেটাডেটা বানান — <title>, <meta name="description">, ক্যানোনিক্যাল ইউআরএল, ইনডেক্সিং নিয়ম, ওপেন গ্রাফ (og:*) ট্যাগ ও টুইটার/এক্স কার্ড মার্কআপ, অ্যাট্রিবিউট এস্কেপিং ও লাইভ সোশ্যাল কার্ড প্রিভিউসহ।',
  },
  'serp-snippet-preview': {
    slug: 'google-serp-purbabhas',
    name: 'গুগল SERP স্নিপেট প্রিভিউ',
    shortDescription:
      'ডেস্কটপ ও মোবাইলে গুগল সার্চ রেজাল্টের প্রিভিউ দেখুন — টাইটেলের আসল পিক্সেল-প্রস্থ যাচাই ও কীওয়ার্ড হাইলাইটসহ।',
    keywords: [
      'serp preview',
      'google serp preview tool',
      'গুগল সার্চ রেজাল্ট প্রিভিউ',
      'seo title length checker',
      'মেটা ডেসক্রিপশন প্রিভিউ',
      'google snippet preview',
      'serp checker online',
      'গুগলে টাইটেল কেমন দেখাবে',
      'seo snippet preview tool',
    ],
    seo: {
      title: 'গুগল SERP প্রিভিউ – সার্চ রেজাল্ট দেখুন | UtilityFlow',
      description:
        'প্রকাশের আগে ডেস্কটপ ও মোবাইলে আপনার গুগল সার্চ স্নিপেট দেখুন। টাইটেলের পিক্সেল-প্রস্থ ও কাটা যাওয়ার সতর্কতাসহ, বোল্ড কীওয়ার্ড হাইলাইটও — ফ্রি, সাইন-আপ ছাড়া।',
      primaryKeyword: 'serp preview',
      secondaryKeywords: [
        'google serp preview tool',
        'গুগল সার্চ রেজাল্ট প্রিভিউ',
        'seo title length checker',
        'মেটা ডেসক্রিপশন প্রিভিউ',
      ],
      longTailKeywords: [
        'গুগলে আমার টাইটেল কেমন দেখাবে যাচাই করুন',
        'এসইও টাইটেল ৫৮০ পিক্সেল প্রস্থে আসবে কিনা',
        'মোবাইল ও ডেস্কটপ সার্প প্রিভিউ কিভাবে দেখব',
        'মেটা বিবরণ গুগলে কাটা যাবে কিনা যাচাই করুন',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'আন্দাজে নয় — HTML5 ক্যানভাসের লাইভ ফন্ট পরিমাপ দিয়ে যাচাই করুন আপনার এসইও টাইটেল গুগলের প্রায় ৫৮০ পিক্সেলের ডিসপ্লে সীমায় আসে কিনা, আর ডেস্কটপ ও মোবাইল সার্চ কার্ডের প্রিভিউ বোল্ড কীওয়ার্ড হাইলাইটসহ দেখুন।',
  },
  'xml-sitemap-generator': {
    slug: 'sitemap-banano',
    name: 'এক্সএমএল সাইটম্যাপ জেনারেটর',
    shortDescription:
      'ইউআরএলের তালিকা থেকে Sitemaps.org মানের সঠিক sitemap.xml ফাইল বানান — ডুপ্লিকেট সরান, lastmod ও changefreq সহ।',
    keywords: [
      'sitemap generator',
      'xml sitemap generator',
      'সাইটম্যাপ কিভাবে বানাবো',
      'sitemap.xml কিভাবে বানাবো',
      'ওয়েবসাইট সাইটম্যাপ জেনারেটর',
      'ফ্রি সাইটম্যাপ জেনারেটর',
      'sitemap maker online',
      'সাইটম্যাপ এক্সএমএল ফাইল',
      'seo sitemap tool',
    ],
    seo: {
      title: 'এক্সএমএল সাইটম্যাপ জেনারেটর – ফ্রি টুল | UtilityFlow',
      description:
        'ক্যানোনিক্যাল ইউআরএলের তালিকাকে মুহূর্তেই সঠিক sitemap.xml-এ বদলান — ডুপ্লিকেট সরান, lastmod তারিখ ও changefreq পরামর্শসহ, ব্রাউজারেই, সম্পূর্ণ ফ্রি, এখনই।',
      primaryKeyword: 'sitemap generator',
      secondaryKeywords: [
        'xml sitemap generator',
        'সাইটম্যাপ কিভাবে বানাবো',
        'sitemap.xml কিভাবে বানাবো',
        'ওয়েবসাইট সাইটম্যাপ জেনারেটর',
      ],
      longTailKeywords: [
        'ওয়েবসাইটের জন্য সাইটম্যাপ এক্সএমএল কিভাবে বানাবো ফ্রি',
        'ইউআরএল তালিকা থেকে সাইটম্যাপ এক্সএমএল বানান',
        'সাইটম্যাপে lastmod ও changefreq কিভাবে দেব',
        'ছোট ওয়েবসাইটের জন্য সাইটম্যাপ কিভাবে বানাবো অনলাইন',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'যেকোনো ক্যানোনিক্যাল https:// ইউআরএল তালিকাকে Sitemaps 0.9 স্কিমা অনুযায়ী সঠিক sitemap.xml-এ বদলান — ভুল ইউআরএল ছাঁটুন, ডুপ্লিকেট নিজে থেকেই সরান, এক্সএমএল অক্ষর এস্কেপ করুন ও .xml ফাইল এক্সপোর্ট করুন।',
  },
  'robots-txt-generator': {
    slug: 'robots-txt-banano',
    name: 'রোবটস টিএক্সটি জেনারেটর',
    shortDescription:
      'ইউজার-এজেন্ট অনুযায়ী গ্রুপ করা সঠিক robots.txt নিয়ম বানান — Allow/Disallow পাথ, Crawl-delay ও Sitemap নির্দেশনাসহ।',
    keywords: [
      'robots.txt generator',
      'robots txt কিভাবে বানাবো',
      'robots.txt ফাইল কিভাবে বানাবো',
      'allow disallow robots txt',
      'robots txt generator free',
      'robots.txt কি',
      'sitemap robots txt',
      'robots txt maker',
      'ওয়েবসাইট robots txt বানান',
    ],
    seo: {
      title: 'রোবটস.টিএক্সটি জেনারেটর – ক্রলার নিয়ম বানান | UtilityFlow',
      description:
        'ইউজার-এজেন্ট গ্রুপ, Allow/Disallow নিয়ম, crawl-delay ও সাইটম্যাপ লিংকসহ সঠিক robots.txt বানান। তৈরি টেমপ্লেটসহ — ফ্রি, ব্রাউজারেই, সাইন-আপ ছাড়া। এখনই বানান।',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'robots txt কিভাবে বানাবো',
        'robots.txt ফাইল কিভাবে বানাবো',
        'allow disallow robots txt',
        'robots txt generator free',
      ],
      longTailKeywords: [
        'ওয়েবসাইটের জন্য robots txt ফাইল কিভাবে বানাবো',
        'robots txt-এ সাইটম্যাপ কিভাবে যোগ করব',
        'robots txt দিয়ে ক্রলার কিভাবে ব্লক করব',
        'ওয়ার্ডপ্রেসের জন্য robots txt কিভাবে বানাবো',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'খোলা ওয়েবসাইট, সাস অ্যাপ, ওয়ার্ডপ্রেস বা টেস্টিং ব্লক করার জন্য তৈরি টেমপ্লেট থেকে পরিষ্কার robots.txt নির্দেশনা বানান — User-agent, Allow/Disallow, Crawl-delay ও Sitemap: লাইনসহ।',
  },
  'schema-markup-generator': {
    slug: 'json-ld-schema-banano',
    name: 'জেসন-এলডি স্কিমা মার্কআপ জেনারেটর',
    shortDescription:
      'Article, FAQPage, Product, Organization ও BreadcrumbList-এর জন্য Schema.org-এর সঠিক JSON-LD স্ক্রিপ্ট বানান।',
    keywords: [
      'schema markup generator',
      'json ld generator',
      'structured data generator',
      'faq schema generator',
      'schema.org json ld',
      'rich snippet schema',
      'json ld কিভাবে বানাবো',
      'structured data কি',
      'breadcrumb schema generator',
    ],
    seo: {
      title: 'জেসন-এলডি স্কিমা জেনারেটর – স্ট্রাকচার্ড ডেটা | UtilityFlow',
      description:
        'Article, FAQPage, Product, Organization ও BreadcrumbList-এর জন্য সঠিক Schema.org JSON-LD বানান। নিরাপদ এইচটিএমএল এস্কেপ, স্ক্রিপ্ট কপি ও .jsonld এক্সপোর্টসহ।',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json ld generator',
        'structured data generator',
        'faq schema generator',
        'schema.org json ld',
      ],
      longTailKeywords: [
        'ওয়েবসাইটের জন্য json ld স্কিমা কিভাবে বানাবো ফ্রি',
        'faqpage স্ট্রাকচার্ড ডেটা কিভাবে বানাবো',
        'আর্টিকেল ও প্রোডাক্ট স্কিমা কিভাবে বানাবো',
        'json ld স্ক্রিপ্ট এইচটিএমএলে কিভাবে লাগাবো',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Article, FAQPage, Product, Organization ও BreadcrumbList-এর জন্য Schema.org-এর পরিষ্কার JSON-LD ব্লক বানান — ডায়নামিক রো বিল্ডার, স্ক্রিপ্ট ট্যাগে < চিহ্নের নিরাপদ এস্কেপ ও .jsonld এক্সপোর্টসহ।',
  },
  'url-slug-generator': {
    slug: 'slug-banano',
    name: 'ইউআরএল স্লাগ জেনারেটর',
    shortDescription:
      'আর্টিকেলের টাইটেলকে পরিষ্কার, এসইও-বান্ধব ইউআরএল স্লাগে বদলান — অ্যাকসেন্ট ট্রান্সলিটারেশন, ব্যাচ মোড ও স্টপ ওয়ার্ড সরানোসহ।',
    keywords: [
      'slug generator',
      'ইউআরএল স্লাগ কিভাবে বানাবো',
      'seo friendly url কিভাবে বানাবো',
      'blog title to slug',
      'permalink generator',
      'slug maker online',
      'url slug generator free',
      'এসইও ইউআরএল কিভাবে বানাবো',
      'টাইটেল থেকে স্লাগ বানান',
    ],
    seo: {
      title: 'ইউআরএল স্লাগ জেনারেটর – এসইও পারমালিংক | UtilityFlow',
      description:
        'টাইটেলকে একসাথে অনেক এসইও স্লাগে বদলান — অ্যাকসেন্ট ASCII-তে বদলান, স্টপ ওয়ার্ড সরান ও শব্দের সীমায় সঠিক দৈর্ঘ্যে কাটুন, সম্পূর্ণ ফ্রি, ব্রাউজারেই, এখনই।',
      primaryKeyword: 'slug generator',
      secondaryKeywords: [
        'ইউআরএল স্লাগ কিভাবে বানাবো',
        'seo friendly url কিভাবে বানাবো',
        'blog title to slug',
        'permalink generator',
      ],
      longTailKeywords: [
        'ব্লগ টাইটেলকে এসইও স্লাগে কিভাবে বদলাবো',
        'একসাথে অনেক স্লাগ কিভাবে বানাবো অনলাইন',
        'বাংলা টাইটেলের ইউআরএল স্লাগ কিভাবে বানাবো',
        'স্লাগ থেকে স্টপ ওয়ার্ড কিভাবে সরাবো',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'একটি পোস্ট বা পুরো কনটেন্ট ক্যালেন্ডারের জন্য পড়তে সহজ, হাইফেনযুক্ত পারমালিংক মানসম্মত করুন। অ্যাকসেন্টকে পরিষ্কার ASCII-তে বদলান (Café → cafe), চাইলে অপ্রয়োজনীয় স্টপ ওয়ার্ড সরান, শব্দের মাঝে না কেটে দৈর্ঘ্য সীমিত করুন ও পুরো ইউআরএলের প্রিভিউ দেখুন।',
  },
  'keyword-density-checker': {
    slug: 'keyword-density-jachai',
    name: 'কীওয়ার্ড ডেনসিটি চেকার',
    shortDescription:
      'শব্দ গণনা, টার্গেট কীওয়ার্ড ডেনসিটি, পড়ার সময় ও ১, ২ ও ৩ শব্দের শীর্ষ ফ্রেজের ফ্রিকোয়েন্সি — সবকিছু লোকালি যাচাই করুন।',
    keywords: [
      'keyword density checker',
      'কীওয়ার্ড ডেনসিটি কিভাবে চেক করব',
      'keyword density কি',
      'seo content analyzer',
      'keyword density tool free',
      'keyword frequency checker',
      'কীওয়ার্ড ডেনসিটি কিভাবে বের করব',
      'কনটেন্ট এসইও চেক কিভাবে করব',
      'keyword stuffing check',
    ],
    seo: {
      title: 'কীওয়ার্ড ডেনসিটি চেকার – এসইও কনটেন্ট যাচাই | UtilityFlow',
      description:
        'ড্রাফট বা এইচটিএমএল পেস্ট করে শব্দ গণনা, পড়ার সময়, টার্গেট কীওয়ার্ড ডেনসিটি ও ১, ২ ও ৩ শব্দের ফ্রেজ মুহূর্তেই যাচাই করুন — ব্রাউজারেই, সম্পূর্ণ ফ্রি।',
      primaryKeyword: 'keyword density checker',
      secondaryKeywords: [
        'কীওয়ার্ড ডেনসিটি কিভাবে চেক করব',
        'keyword density কি',
        'seo content analyzer',
        'keyword density tool free',
      ],
      longTailKeywords: [
        'ব্লগের কীওয়ার্ড ডেনসিটি কিভাবে চেক করব অনলাইন',
        'কীওয়ার্ড স্টাফিং কিভাবে চেক করব ফ্রি',
        'এইচটিএমএল পেস্ট করে কীওয়ার্ড ডেনসিটি কিভাবে বের করব',
        'এসইওর জন্য কীওয়ার্ড ডেনসিটি কত হওয়া উচিত',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'কনটেন্ট ড্রাফট বা পেস্ট করা এইচটিএমএল যাচাই করুন — শব্দভাণ্ডারের গভীরতা, পড়ার সময়, টার্গেট ফ্রেজের নির্ভুল মিল ও ১, ২ ও ৩ শব্দের শীর্ষ n-gram ফ্রিকোয়েন্সি দেখুন। এটি পুরনো কীওয়ার্ড কোটার পেছনে ছোটার বদলে অনিচ্ছায় বারবার আসা শব্দ ধরার জন্য তৈরি।',
  },
  'canonical-hreflang-generator': {
    slug: 'hreflang-banano',
    name: 'ক্যানোনিক্যাল ও হ্রেফল্যাং জেনারেটর',
    shortDescription:
      'বহুভাষিক পেজের জন্য hreflang ও ক্যানোনিক্যাল ট্যাগ বানান, আর Cloudflare Pages, Apache ও Nginx-এর জন্য ৩০১ রিডাইরেক্ট তৈরি করুন।',
    keywords: [
      'hreflang generator',
      'canonical tag generator',
      '301 redirect generator',
      'hreflang ট্যাগ কিভাবে বানাবো',
      'canonical url কিভাবে বানাবো',
      'cloudflare redirect rules',
      'multilingual seo tags',
      'hreflang কি',
      '301 redirect কিভাবে বানাবো',
    ],
    seo: {
      title: 'হ্রেফল্যাং জেনারেটর – ক্যানোনিক্যাল ও ৩০১ | UtilityFlow',
      description:
        'বহুভাষিক পেজের জন্য hreflang ও ক্যানোনিক্যাল ট্যাগ বানান, আর Cloudflare Pages, Apache ও Nginx-এর জন্য ৩০১ রিডাইরেক্ট নিয়ম তৈরি করুন — ফ্রি, ব্রাউজারেই।',
      primaryKeyword: 'hreflang generator',
      secondaryKeywords: [
        'canonical tag generator',
        '301 redirect generator',
        'hreflang ট্যাগ কিভাবে বানাবো',
        'canonical url কিভাবে বানাবো',
      ],
      longTailKeywords: [
        'বহুভাষিক ওয়েবসাইটের জন্য hreflang ট্যাগ কিভাবে বানাবো',
        'cloudflare pages-এর জন্য ৩০১ রিডাইরেক্ট কিভাবে বানাবো',
        'ক্যানোনিক্যাল ট্যাগ কি ও কিভাবে লাগাবো',
        'hreflang x-default ট্যাগ কিভাবে বানাবো',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'টেকনিক্যাল এসইওর দুটি জরুরি কাজ এক জায়গায় — একাধিক অঞ্চলের hreflang + ক্যানোনিক্যাল অ্যানোটেশন (HTML <head> ও এক্সএমএল সাইটম্যাপ দুটোর জন্যই) বানান, বা পুরনো ইউআরএলের তালিকাকে Cloudflare Pages, Apache ও Nginx-এর জন্য তৈরি ৩০১ রিডাইরেক্ট নিয়মে বদলান।',
  },
  'on-page-seo-checker': {
    slug: 'on-page-seo-jachai',
    name: 'অন-পেজ এসইও চেকার',
    shortDescription:
      'পেস্ট করা এইচটিএমএল সোর্স ব্রাউজারেই অডিট করুন — টাইটেলের দৈর্ঘ্য, মেটা বিবরণ, H1–H4 ক্রম, alt টেক্সট ও JSON-LD।',
    keywords: [
      'on page seo checker',
      'অন পেজ এসইও কিভাবে চেক করব',
      'seo audit tool free',
      'html seo checker',
      'seo checker online free',
      'ওয়েবসাইট এসইও চেক কিভাবে করব',
      'on page seo কি',
      'meta title length checker',
      'seo audit কিভাবে করব',
    ],
    seo: {
      title: 'অন-পেজ এসইও চেকার – এইচটিএমএল অডিট টুল ফ্রি | UtilityFlow',
      description:
        'যেকোনো পেজের এইচটিএমএল পেস্ট করে টাইটেল, মেটা বিবরণ, হেডিং, ক্যানোনিক্যাল, alt টেক্সট ও JSON-LD মুহূর্তেই অডিট করুন — ফ্রি, ব্রাউজারেই, সাইন-আপ ছাড়া।',
      primaryKeyword: 'on page seo checker',
      secondaryKeywords: [
        'অন পেজ এসইও কিভাবে চেক করব',
        'seo audit tool free',
        'html seo checker',
        'seo checker online free',
      ],
      longTailKeywords: [
        'ওয়েবসাইটের অন পেজ এসইও কিভাবে চেক করব ফ্রি',
        'এইচটিএমএল পেস্ট করে এসইও অডিট কিভাবে করব',
        'h1 h2 হেডিং কাঠামো কিভাবে চেক করব',
        'মেটা টাইটেল ও বিবরণের দৈর্ঘ্য কিভাবে চেক করব',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'যেকোনো পেজের এইচটিএমএল সোর্স (View Page Source) সরাসরি আপনার ব্রাউজারে DOM স্তরে অডিট করুন — <title>, মেটা বিবরণ, ক্যানোনিক্যাল, H1–H4 হেডিং ক্রম, ছবিতে অনুপস্থিত alt টেক্সট, ইন্টারনাল/এক্সটারনাল লিংক, ওপেন গ্রাফ ও JSON-LD, সবকিছু একসাথে।',
  },
  'robots-meta-tag-generator': {
    slug: 'robots-meta-tag-banano',
    name: 'রোবটস মেটা ট্যাগ জেনারেটর',
    shortDescription:
      'noindex, nofollow, noarchive, max-snippet ও max-image-preview সহ রোবটস ট্যাগ ও Cloudflare _headers নিয়ম বানান।',
    keywords: [
      'robots meta tag generator',
      'noindex ট্যাগ কিভাবে লাগাবো',
      'nofollow meta tag',
      'x-robots-tag generator',
      'max-image-preview large',
      'robots meta tag কি',
      'noindex nofollow কিভাবে লাগাবো',
      'cloudflare headers robots',
      'meta robots tag generator',
    ],
    seo: {
      title: 'রোবটস মেটা ট্যাগ জেনারেটর – Noindex ও X-Robots | UtilityFlow',
      description:
        'noindex, nofollow, max-snippet ও max-image-preview সহ এইচটিএমএল রোবটস ট্যাগ ও X-Robots-Tag হেডার বানান, Cloudflare _headers আউটপুটসহ — ফ্রি, ব্রাউজারেই।',
      primaryKeyword: 'robots meta tag generator',
      secondaryKeywords: [
        'noindex ট্যাগ কিভাবে লাগাবো',
        'nofollow meta tag',
        'x-robots-tag generator',
        'max-image-preview large',
      ],
      longTailKeywords: [
        'পিডিএফের জন্য x-robots-tag noindex কিভাবে বানাবো',
        'noindex nofollow মেটা ট্যাগ কিভাবে লাগাবো',
        'max-snippet ও max-image-preview large কিভাবে সেট করব',
        'robots txt ও মেটা রোবটসের মধ্যে পার্থক্য কি',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'পেজ স্তরে ক্রলারের সঠিক নির্দেশনা বানান — index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet ও max-image-preview:large — একসাথে HTML <meta name="robots"> ট্যাগ, HTTP X-Robots-Tag হেডার ও Cloudflare Pages _headers ব্লক হিসেবে।',
  },
  'image-compressor': {
    slug: 'chhobi-compress-korun',
    name: 'ছবি কমপ্রেসর',
    shortDescription:
      'পিএনজি, জেপিজি ও ওয়েবপি ছবি ব্রাউজারেই ছোট করুন — কোয়ালিটি নিয়ন্ত্রণ, সর্বোচ্চ প্রস্থ ও মুহূর্তেই বাইট সাশ্রয়সহ।',
    keywords: [
      'image compressor',
      'ছবি কমপ্রেস কিভাবে করব',
      'photo compress online',
      'jpg compress কিভাবে করব',
      'ছবির সাইজ কমাবো কিভাবে',
      'ফটোর সাইজ কমান অনলাইন',
      'png compress online free',
      'ছবি ছোট করব কিভাবে',
      'webp compressor',
    ],
    seo: {
      title: 'ছবি কমপ্রেস করুন – পিএনজি, জেপিজি, ওয়েবপি | UtilityFlow',
      description:
        'ছবি ব্রাউজারেই কমপ্রেস করুন — কোয়ালিটি ঠিক করুন, সর্বোচ্চ প্রস্থ সীমিত করুন, আগের-পরের সাইজ দেখুন ও ডাউনলোড করুন। আপলোড নেই, সম্পূর্ণ ফ্রি। এখনই চেষ্টা করুন।',
      primaryKeyword: 'image compressor',
      secondaryKeywords: [
        'ছবি কমপ্রেস কিভাবে করব',
        'photo compress online',
        'jpg compress কিভাবে করব',
        'ছবির সাইজ কমাবো কিভাবে',
      ],
      longTailKeywords: [
        'আপলোড ছাড়া ওয়েবসাইটের ছবির সাইজ কিভাবে কমাবো',
        'জেপিজি ছবিকে ওয়েবপিতে কমপ্রেস কিভাবে করব',
        'বড় ছবি ছোট করব কিভাবে অনলাইন ফ্রি',
        'ইমেইলের জন্য ফটোর সাইজ কিভাবে কমাবো',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'ভারী পিএনজি, জেপিজি ও ওয়েবপি ছবি দ্রুত পেজ লোড ও হালকা ইমেইল অ্যাটাচমেন্টের জন্য সরাসরি ব্রাউজারে ছোট করুন — লসি কমপ্রেশনের কোয়ালিটি ঠিক করুন, প্রস্থের সীমা দিন ও বাইটে আসল সাশ্রয় দেখুন, কোনো ফাইল সার্ভারে না পাঠিয়ে।',
  },
  'image-resizer': {
    slug: 'chhobi-resize-korun',
    name: 'ছবি রিসাইজার',
    shortDescription:
      'ছবিকে একদম সঠিক পিক্সেল সাইজে বদলান — সোশ্যাল ও ওজি প্রিসেট, অ্যাসপেক্ট রেশিও লক, সেন্টার ক্রপ ও পিএনজি/জেপিজি/ওয়েবপি এক্সপোর্টসহ।',
    keywords: [
      'image resizer',
      'ছবি রিসাইজ কিভাবে করব',
      'photo resize online',
      'ছবির সাইজ পরিবর্তন কিভাবে করব',
      'ফটো 1200x630 কিভাবে করব',
      'ছবি স্কয়ার কিভাবে করব',
      'instagram photo resize',
      'image resizer online free',
      'ফটোর সাইজ কিভাবে বদলাবো',
    ],
    seo: {
      title: 'ছবি রিসাইজ করুন – সঠিক পিক্সেল সাইজে | UtilityFlow',
      description:
        'ফটোকে একদম সঠিক পিক্সেলে রিসাইজ করুন — প্রিসেট বেছে নিন, অ্যাসপেক্ট রেশিও লক করুন, সেন্টার ক্রপ করুন ও পিএনজি, জেপিজি বা ওয়েবপিতে এক্সপোর্ট করুন, ফ্রি।',
      primaryKeyword: 'image resizer',
      secondaryKeywords: [
        'ছবি রিসাইজ কিভাবে করব',
        'photo resize online',
        'ছবির সাইজ পরিবর্তন কিভাবে করব',
        'ফটো 1200x630 কিভাবে করব',
      ],
      longTailKeywords: [
        'ছবিকে 1200x630 ওপেন গ্রাফ সাইজে কিভাবে করব',
        'ফটোকে 1080x1080 স্কয়ার কিভাবে করব ইনস্টাগ্রামের জন্য',
        'ছবির প্রস্থ উচ্চতা পিক্সেলে কিভাবে বদলাবো',
        'টানা ছাড়া ফটো রিসাইজ কিভাবে করব',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'গ্রাফিক্স ও ফটোকে একদম সঠিক পিক্সেল সাইজে বদলান — ওপেন গ্রাফ (1200×630), ইউটিউব এইচডি (1280×720), স্কয়ার (1080×1080) ও অবতার (512×512) তৈরি প্রিসেট থেকে, উচ্চমানের ক্যানভাস রিস্যাম্পলিং ও টানা ছাড়া সেন্টার কভার ক্রপসহ।',
  },
  'image-format-converter': {
    slug: 'chhobi-format-bodlan',
    name: 'ছবি ফরম্যাট কনভার্টার (পিএনজি / জেপিজি / ওয়েবপি)',
    shortDescription:
      'পিএনজি, জেপিজি, ওয়েবপি, জিআইএফ ও এসভিজি ছবি একসাথে অন্য ফরম্যাটে বদলান — কোয়ালিটি নিয়ন্ত্রণ ও জেপিজির জন্য ব্যাকগ্রাউন্ড রঙসহ।',
    keywords: [
      'image format converter',
      'png to jpg',
      'jpg to png',
      'webp to jpg',
      'png to webp converter',
      'ছবির ফরম্যাট কিভাবে বদলাবো',
      'webp to png',
      'jpg to webp converter',
      'image converter online free',
    ],
    seo: {
      title: 'ছবির ফরম্যাট বদলান – পিএনজি, জেপিজি, ওয়েবপি | UtilityFlow',
      description:
        'ছবিকে পিএনজি, জেপিজি ও ওয়েবপির মধ্যে মুহূর্তেই বদলান — একসাথে অনেক ফাইল, জেপিজি কোয়ালিটি ঠিক করুন ও স্বচ্ছ ব্যাকগ্রাউন্ড ভরুন, ব্রাউজারেই, সম্পূর্ণ ফ্রি।',
      primaryKeyword: 'image format converter',
      secondaryKeywords: [
        'png to jpg',
        'jpg to png',
        'webp to jpg',
        'png to webp converter',
      ],
      longTailKeywords: [
        'অনেক ছবি একসাথে ওয়েবপিতে কিভাবে বদলাবো',
        'ওয়েবপি স্ক্রিনশটকে পিএনজি কিভাবে বানাবো',
        'স্বচ্ছ পিএনজিকে জেপিজিতে কিভাবে বদলাবো ব্যাকগ্রাউন্ডসহ',
        'পিএনজি থেকে জেপিজি ফরম্যাট কিভাবে বদলাবো অনলাইন',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'পিএনজি, জেপিজি, ওয়েবপি, জিআইএফ ও এসভিজি ফাইল একসাথে ওয়েবের জন্য তৈরি ওয়েবপি, সর্বজনীন জেপিজি বা লস ছাড়া স্বচ্ছ পিএনজিতে বদলান — সম্পূর্ণ ব্রাউজারে, আর স্বচ্ছতা জেপিজিতে বদলানোর সময় নিজের পছন্দের ব্যাকগ্রাউন্ড রঙ ভরার বিকল্পসহ।',
  },
  'image-rotate-flip': {
    slug: 'chhobi-ghoran-ulta',
    name: 'ছবি ঘোরান ও উল্টান',
    shortDescription:
      'ছবিকে ৯০°/১৮০°/২৭০° ঘোরান, অনুভূমিক বা উল্লম্বভাবে উল্টান ও গ্রেস্কেল, ব্রাইটনেস ও কনট্রাস্ট ফিল্টার লাইভ লাগান।',
    keywords: [
      'ছবি ঘোরাবো কিভাবে',
      'image rotate online',
      'ফটো উল্টাবো কিভাবে',
      'ছবি উল্টা কিভাবে করব',
      'photo mirror কিভাবে করব',
      'ছবি গ্রেস্কেল কিভাবে করব',
      'ফটোর ব্রাইটনেস কিভাবে বাড়াবো',
      'image rotate 90 degree',
      'ছবি সোজা কিভাবে করব',
    ],
    seo: {
      title: 'ছবি ঘোরান – ঘোরান ও উল্টান অনলাইন ফ্রি | UtilityFlow',
      description:
        'ছবি অনলাইনে ৯০, ১৮০ বা ২৭০ ডিগ্রি ঘোরান, ফটো অনুভূমিক বা উল্লম্বভাবে উল্টান ও ব্রাইটনেস, কনট্রাস্ট ও গ্রেস্কেল ঠিক করুন — ফ্রি, ব্রাউজারেই। কোনো অ্যাপ লাগবে না।',
      primaryKeyword: 'ছবি ঘোরাবো কিভাবে',
      secondaryKeywords: [
        'image rotate online',
        'ফটো উল্টাবো কিভাবে',
        'ছবি উল্টা কিভাবে করব',
        'photo mirror কিভাবে করব',
      ],
      longTailKeywords: [
        'বাঁকা ছবি ৯০ ডিগ্রি সোজা কিভাবে করব অনলাইন',
        'অ্যাপ ছাড়া সেলফি মিরর ফ্লিপ কিভাবে করব',
        'ফটোকে সাদা-কালো গ্রেস্কেল কিভাবে করব',
        'স্ক্যান করা ছবি সোজা কিভাবে করব',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'বাঁকা ছবির ওরিয়েন্টেশন ঠিক করুন, সেলফিকে অনুভূমিক বা উল্লম্বভাবে মিরর করুন, ফটোকে সাদা-কালো গ্রেস্কেলে বদলান ও ব্রাইটনেস ও কনট্রাস্ট লাইভ ঠিক করুন — HTML5 Canvas 2D-এর লোকাল ট্রান্সফর্ম দিয়ে।',
  },
  'image-to-base64': {
    slug: 'chhobi-base64-korun',
    name: 'ছবি থেকে বেস৬৪ কনভার্টার',
    shortDescription:
      'পিএনজি, জেপিজি, ওয়েবপি, এসভিজি ও আইসিও ছবিকে বেস৬৪ ডেটা ইউআরআই, এইচটিএমএল <img> ট্যাগ ও সিএসএস নিয়মে বদলান, বা বেস৬৪-কে আবার ছবিতে দেখুন।',
    keywords: [
      'image to base64',
      'base64 image converter',
      'ছবি বেস৬৪ কিভাবে করব',
      'base64 to image',
      'data uri generator',
      'base64 encoder online',
      'image base64 css',
      'png to base64',
      'base64 decode image',
    ],
    seo: {
      title: 'ছবি থেকে বেস৬৪ বানান – ডেটা ইউআরআই টুল | UtilityFlow',
      description:
        'ছোট আইকন ও লোগোকে বেস৬৪ ডেটা ইউআরআই, এইচটিএমএল img ট্যাগ বা সিএসএস ব্যাকগ্রাউন্ডে বদলান, বা বেস৬৪ স্ট্রিংকে আবার ছবির প্রিভিউতে মুহূর্তেই দেখুন — ফ্রি।',
      primaryKeyword: 'image to base64',
      secondaryKeywords: [
        'base64 image converter',
        'ছবি বেস৬৪ কিভাবে করব',
        'base64 to image',
        'data uri generator',
      ],
      longTailKeywords: [
        'পিএনজি আইকনকে সিএসএস ডেটা ইউআরআই কিভাবে বানাবো',
        'বেস৬৪ স্ট্রিংকে ছবির প্রিভিউতে কিভাবে দেখব',
        'ছোট লোগোকে বেস৬৪-এ কিভাবে বদলাবো এইচটিএমএল ইমেইলের জন্য',
        'ছবির বাইনারি ও বেস৬৪ সাইজে পার্থক্য কি',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'ছোট আইকন, লোগো ও ইমেইল গ্রাফিক্সকে নিজে থেকেই সম্পূর্ণ data:image/...;base64,... ইউআরআই, কপি করার মতো এইচটিএমএল <img> ট্যাগ ও সিএসএস background-image নিয়মে বদলান — বা অন্য মোড বেছে প্রসেস না করা বেস৬৪ ছবির স্ট্রিং দেখে ডাউনলোড করুন।',
  },
  'color-contrast-checker': {
    slug: 'rong-contrast-jachai',
    name: 'রঙের কনট্রাস্ট চেকার',
    shortDescription:
      'WCAG 2.1 AA/AAA অনুযায়ী রঙের কনট্রাস্ট রেশিও যাচাই করুন, HEX/RGB/HSL বদলান ও আপলোড করা ছবি থেকে রঙের প্যালেট বের করুন।',
    keywords: [
      'color contrast checker',
      'wcag contrast checker',
      'color contrast ratio check',
      'accessible color combinations',
      'hex to rgb converter',
      'color palette extractor',
      'contrast checker online',
      'টেক্সট রঙের কনট্রাস্ট কিভাবে চেক করব',
      'wcag aa contrast ratio',
    ],
    seo: {
      title: 'রঙের কনট্রাস্ট চেকার – WCAG AA/AAA যাচাই | UtilityFlow',
      description:
        'টেক্সট ও ব্যাকগ্রাউন্ডের WCAG 2.1 AA ও AAA কনট্রাস্ট রেশিও যাচাই করুন, HEX, RGB ও HSL বদলান ও ছবি থেকে প্যালেট বের করুন — ফ্রি, ব্রাউজারেই, সাইন-আপ ছাড়া।',
      primaryKeyword: 'color contrast checker',
      secondaryKeywords: [
        'wcag contrast checker',
        'color contrast ratio check',
        'accessible color combinations',
        'hex to rgb converter',
      ],
      longTailKeywords: [
        'wcag 2.1 কনট্রাস্ট রেশিও অনলাইনে কিভাবে চেক করব',
        'টেক্সট ও ব্যাকগ্রাউন্ডের কনট্রাস্ট কত হওয়া উচিত',
        'ছবি থেকে প্রধান রঙের প্যালেট কিভাবে বের করব',
        'ডার্ক মোড ইউআইয়ের কনট্রাস্ট কিভাবে চেক করব',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'WCAG 2.1-এর অফিসিয়াল নিয়ম (AA 4.5:1, AA লার্জ 3.0:1, AAA 7.0:1) অনুযায়ী ইউআই রঙের জোড়া যাচাই করুন, সিঙ্ক করা HEX/RGB/HSL মান বদলান ও স্ক্রিনশট বা লোগো আপলোড করে সেখান থেকে প্রধান HEX রঙ সরাসরি আপনার ফোরগ্রাউন্ড বা ব্যাকগ্রাউন্ডে নিন।',
  },
  'qr-code-scanner': {
    slug: 'qr-code-scan-korun',
    name: 'কিউআর কোড স্ক্যানার',
    shortDescription:
      'আপলোড করা ছবি বা ডিভাইস ক্যামেরা থেকে কিউআর কোড পড়ে ডিকোড করুন — ব্রাউজারেই, প্রাইভেট; সাথে vCard কিউআর বিল্ডারও।',
    keywords: [
      'qr code scanner',
      'কিউআর কোড স্ক্যান কিভাবে করব',
      'qr code scanner online',
      'কিউআর কোড কিভাবে স্ক্যান করব',
      'scan qr code from image',
      'qr code reader online',
      'কিউআর কোড ডিকোড কিভাবে করব',
      'ল্যাপটপে কিউআর কোড স্ক্যান',
      'vcard qr code generator',
    ],
    seo: {
      title: 'কিউআর কোড স্ক্যান করুন – অনলাইন রিডার ফ্রি | UtilityFlow',
      description:
        'স্ক্রিনশট, ফটো বা ওয়েবক্যাম থেকে কিউআর কোড স্ক্যান করে ডিকোড করুন — ব্রাউজারেই, প্রাইভেট। সাথে vCard কনট্যাক্ট কিউআর কোডও বানান, পিএনজি ও এসভিজিতে, ফ্রি।',
      primaryKeyword: 'qr code scanner',
      secondaryKeywords: [
        'কিউআর কোড স্ক্যান কিভাবে করব',
        'qr code scanner online',
        'কিউআর কোড কিভাবে স্ক্যান করব',
        'scan qr code from image',
      ],
      longTailKeywords: [
        'স্ক্রিনশট থেকে কিউআর কোড কিভাবে স্ক্যান করব অনলাইন',
        'অ্যাপ ছাড়া ল্যাপটপ ওয়েবক্যামে কিউআর কোড কিভাবে স্ক্যান করব',
        'পিএনজি জেপিজি ছবি থেকে কিউআর কোড কিভাবে ডিকোড করব',
        'vcard কনট্যাক্ট কিউআর কোড কিভাবে বানাবো ফ্রি',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'স্ক্রিনশট, ফটো বা লাইভ ক্যামেরা ফিড থেকে কিউআর কোডের কনটেন্ট সরাসরি আপনার ব্রাউজারে পড়ুন — লোড নিজে থেকেই চেনা যায় (ইউআরএল, ওয়াই-ফাই, vCard, টেক্সট) — আর সাথে vCard কনট্যাক্ট কিউআর বিল্ডার থেকে পরিষ্কার পিএনজি ও এসভিজি কনট্যাক্ট কার্ডও এক্সপোর্ট করুন।',
  },
  'password-generator': {
    slug: 'password-banano',
    name: 'নিরাপদ পাসওয়ার্ড জেনারেটর',
    shortDescription:
      'crypto.getRandomValues দিয়ে বায়াস ছাড়া র‍্যান্ডম পাসওয়ার্ড ও Diceware-ধাঁচের মনে রাখার মতো পাসফ্রেজ বানান, নির্ভুল এনট্রপিসহ।',
    keywords: [
      'password generator',
      'শক্ত পাসওয়ার্ড কিভাবে বানাবো',
      'secure password generator',
      'random password generator',
      'পাসওয়ার্ড বানানোর নিয়ম',
      'passphrase generator',
      'strong password generator online',
      'নিরাপদ পাসওয়ার্ড কিভাবে বানাবো',
      'password entropy checker',
    ],
    seo: {
      title: 'পাসওয়ার্ড জেনারেটর – শক্ত ও নিরাপদ ফ্রি | UtilityFlow',
      description:
        'ব্রাউজারেই শক্ত র‍্যান্ডম পাসওয়ার্ড ও মনে রাখার মতো Diceware পাসফ্রেজ বানান। ওয়েব ক্রিপ্টো ও নির্ভুল এনট্রপি স্কোরসহ — কিছুই সেভ হয় না, ফ্রি। এখনই বানান।',
      primaryKeyword: 'password generator',
      secondaryKeywords: [
        'শক্ত পাসওয়ার্ড কিভাবে বানাবো',
        'secure password generator',
        'random password generator',
        'পাসওয়ার্ড বানানোর নিয়ম',
      ],
      longTailKeywords: [
        'crypto getrandomvalues দিয়ে নিরাপদ পাসওয়ার্ড কিভাবে বানাবো',
        '৫ শব্দের diceware পাসফ্রেজ কিভাবে বানাবো',
        '১৮ অক্ষরের পাসওয়ার্ডে কত এনট্রপি থাকে',
        'অস্পষ্ট অক্ষর ছাড়া পাসওয়ার্ড কিভাবে বানাবো',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'ব্রাউজারের হার্ডওয়্যার-সমর্থিত CSPRNG (window.crypto.getRandomValues) দিয়ে ১০০% লোকাল উচ্চ-এনট্রপি পাসওয়ার্ড ও একাধিক শব্দের মনে রাখার মতো পাসফ্রেজ বানান — মডুলো বায়াস দূর করতে রিজেকশন স্যাম্পলিং ও আন্দাজ করা যায় এমন অক্ষরের অবস্থান এড়াতে Fisher-Yates শাফলসহ।',
  },
  'file-hash-verifier': {
    slug: 'file-hash-jachai',
    name: 'ফাইল হ্যাশ ভেরিফায়ার',
    shortDescription:
      'ওয়েব ক্রিপ্টো দিয়ে যেকোনো ফাইলের SHA-256, SHA-512, SHA-384 ও SHA-1 হ্যাশ লোকালি বের করুন ও ডাউনলোডের সত্যতা যাচাই করুন।',
    keywords: [
      'file hash checker',
      'sha256 checker online',
      'ফাইল হ্যাশ কিভাবে চেক করব',
      'sha256 verify কিভাবে করব',
      'hash verifier online',
      'ফাইল ইন্টিগ্রিটি চেক কিভাবে করব',
      'sha256sum check',
      'ডাউনলোড ফাইল ভেরিফাই কিভাবে করব',
      'sha512 hash generator',
    ],
    seo: {
      title: 'ফাইল হ্যাশ ভেরিফায়ার – SHA-256 যাচাই করুন | UtilityFlow',
      description:
        'যেকোনো লোকাল ফাইলের SHA-256, SHA-512, SHA-384 ও SHA-1 হ্যাশ ব্রাউজারেই বের করুন ও প্রকাশিত হ্যাশের সাথে মুহূর্তেই মেলান — আপলোড নেই, সম্পূর্ণ ফ্রি। এখনই।',
      primaryKeyword: 'file hash checker',
      secondaryKeywords: [
        'sha256 checker online',
        'ফাইল হ্যাশ কিভাবে চেক করব',
        'sha256 verify কিভাবে করব',
        'hash verifier online',
      ],
      longTailKeywords: [
        'ডাউনলোড করা ইনস্টলারের sha256 হ্যাশ কিভাবে চেক করব',
        'টার্মিনাল ছাড়া ফাইলের sha256 কিভাবে বের করব',
        'আইএসও ফাইলের sha256 ভেরিফাই কিভাবে করব ব্রাউজারে',
        'ফাইল হ্যাশকে প্রত্যাশিত চেকসামের সাথে কিভাবে মেলাবো',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'সফটওয়্যার ইনস্টলার, ফাইল, ডেটাসেট ও নথির ইন্টিগ্রিটি ও আসলত্ব লোকালেই যাচাই করুন — ওয়েব ক্রিপ্টোর হার্ডওয়্যার-সমর্থিত subtle.digest দিয়ে SHA-256, SHA-512, SHA-384 ও SHA-1 হ্যাশ বের করে প্রত্যাশিত চেকসামের সাথে মুহূর্তেই মেলান।',
  },
  'favicon-generator': {
    slug: 'favicon-banano',
    name: 'ফ্যাভিকন জেনারেটর',
    shortDescription:
      'মনোগ্রাম ব্যাজ বা আপলোড করা লোগো থেকে একাধিক সাইজের পিএনজি আইকন (১৬×১৬ থেকে ৫১২×৫১২) ও আসল মাল্টি-ফ্রেম favicon.ico বানান।',
    keywords: [
      'favicon generator',
      'ফ্যাভিকন কিভাবে বানাবো',
      'favicon.ico কিভাবে বানাবো',
      'website favicon generator',
      'favicon maker online free',
      'png to favicon',
      'apple touch icon generator',
      'pwa icon generator',
      'ফ্যাভিকন বানানোর নিয়ম',
    ],
    seo: {
      title: 'ফ্যাভিকন জেনারেটর – .ico ও পিএনজি আইকন বানান | UtilityFlow',
      description:
        'আপনার লোগো বা মনোগ্রাম থেকে মাল্টি-ফ্রেম favicon.ico ও ১৬–৫১২ পিক্সেল পিএনজি, অ্যাপল টাচ ও পিডব্লিউএ আইকন বানান — ফ্রি, ব্রাউজারেই, সাইন-আপ ছাড়া, ডাউনলোড।',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'ফ্যাভিকন কিভাবে বানাবো',
        'favicon.ico কিভাবে বানাবো',
        'website favicon generator',
        'favicon maker online free',
      ],
      longTailKeywords: [
        'ওয়েবসাইটের জন্য favicon ico কিভাবে বানাবো ফ্রি',
        'লোগো থেকে 16x16 32x32 48x48 ফ্যাভিকন কিভাবে বানাবো',
        'পিডব্লিউএর জন্য 192x192 ও 512x512 আইকন কিভাবে বানাবো',
        'টেক্সট আদ্যক্ষর থেকে ফ্যাভিকন কিভাবে বানাবো অনলাইন',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'সেকেন্ডের মধ্যে পরিষ্কার মনোগ্রাম আইকন ডিজাইন করুন বা নিজের ব্র্যান্ড লোগো আপলোড করুন — ১৬×১৬, ৩২×৩২, ৪৮×৪৮, অ্যাপল টাচ ১৮০×১৮০ ও পিডব্লিউএ ১৯২×১৯২ / ৫১২×৫১২ পরিষ্কার পিএনজি আইকন ও মানসম্মত আসল মাল্টি-ইমেজ favicon.ico, পেস্ট করার মতো এইচটিএমএল <link> মার্কআপসহ।',
  },
};
