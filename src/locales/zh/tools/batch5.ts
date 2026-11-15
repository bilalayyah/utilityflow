import type { ToolLocaleOverride } from "../../types";

/**
 * Chinese (Simplified) overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Same shape as src/locales/ja/tools/batch5.ts.
 * Slugs are Hanyu Pinyin transliterations of the Chinese tool names.
 */
export const ZH_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  "meta-tag-generator": {
    slug: "yuan-biaoqian-shengchengqi",
    name: "元标签与Open Graph生成器",
    shortDescription:
      "生成HTML标题、元描述、规范链接、robots指令、Open Graph和Twitter/X卡片标签，并实时预览社交卡片效果。",
    keywords: [
      "元标签生成器",
      "Open Graph生成器",
      "Twitter卡片生成器",
      "HTML SEO头部标签",
      "Open Graph元标签",
      "SEO元标签生成器",
      "元描述生成器",
      "HTML元标签制作",
      "社交媒体元标签",
    ],
    seo: {
      title: "免费元标签生成器 – Open Graph与Twitter/X卡片在线工具 | UtilityFlow",
      description:
        "免费在线生成整洁的标题、元描述、规范链接、Open Graph和Twitter卡片标签，附带实时长度检查与社交卡片预览，发布前确认分享效果，所有处理均在浏览器本地完成，无需注册即可复制代码或下载文件重复使用，支持Open Graph与Twitter卡片类型选择，复制代码后可粘贴到页面头部使用，适合博客与产品页面。",
      primaryKeyword: "元标签生成器",
      secondaryKeywords: [
        "Open Graph标签生成器",
        "社交分享元标签生成器",
        "HTML头部SEO制作工具",
        "Twitter卡片元标签生成器",
      ],
      longTailKeywords: [
        "免费在线生成Open Graph和Twitter卡片HTML元标签",
        "通过社交卡片预览检查元标题与元描述长度",
        "下载可直接粘贴的SEO元标签HTML代码",
        "使用Open Graph预览免费为网站创建元标签",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "创建符合标准的HTML <head>元数据，涵盖<title>、<meta name=\"description\">、规范链接、抓取指令、Open Graph标签（og:*）和Twitter/X卡片标记，自动转义属性值，并提供实时社交卡片预览。",
  },
  "serp-snippet-preview": {
    slug: "serp-zhaiyao-yulan",
    name: "SERP摘要预览工具",
    shortDescription:
      "模拟谷歌桌面端与移动端搜索结果，通过真实的Canvas像素宽度检查标题，并支持关键词加粗匹配。",
    keywords: [
      "SERP预览工具",
      "谷歌摘要模拟器",
      "SEO标题像素宽度检查器",
      "元描述预览",
      "谷歌SERP预览",
      "搜索结果预览工具",
      "SEO摘要检查器",
      "谷歌标题检查器",
      "元描述长度检查器",
    ],
    seo: {
      title: "SERP摘要预览工具 – 桌面端与移动端谷歌搜索结果像素宽度免费在线检查工具 | UtilityFlow",
      description:
        "在桌面端与移动端预览谷歌搜索摘要，通过Canvas真实像素宽度检查标题、关键词加粗匹配和截断警告，发布前调整标题与描述，提高点击率，全部免费且在浏览器本地运行，实时测量标题像素宽度并在桌面端与移动端切换预览，输入关键词即可查看加粗匹配效果，发布前避免标题被截断，帮助您免费写出点击率更高的搜索摘要，免费使用。",
      primaryKeyword: "SERP摘要预览",
      secondaryKeywords: [
        "谷歌SERP模拟器",
        "SEO标题像素宽度检查器",
        "移动端搜索结果预览",
        "桌面端SERP预览工具",
      ],
      longTailKeywords: [
        "在线检查谷歌SEO标题580像素宽度",
        "预览桌面端与移动端搜索摘要的截断位置",
        "测试元描述中关键词的加粗匹配效果",
        "发布页面前预览谷歌搜索结果摘要",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "不只依赖字符数估算，而是通过HTML5 Canvas字体度量实时计算，判断SEO标题是否在谷歌约580像素的显示宽度内，并以桌面端与移动端搜索卡片形式预览，支持关键词加粗匹配。",
  },
  "xml-sitemap-generator": {
    slug: "xml-wangzhan-ditu-shengchengqi",
    name: "XML网站地图生成器",
    shortDescription:
      "从链接列表生成符合Sitemaps.org规范的有效XML文件，支持去重、<lastmod>与<changefreq>，可下载为.xml文件。",
    keywords: [
      "XML网站地图生成器",
      "网站地图XML制作工具",
      "在线创建XML网站地图",
      "SEO网站地图制作",
      "免费网站地图生成器",
      "XML网站地图创建在线",
      "生成网站地图XML",
      "网站地图制作工具",
      "网站sitemap生成器",
    ],
    seo: {
      title: "XML网站地图生成器 – 免费在线快速创建sitemap.xml文件生成工具 | UtilityFlow",
      description:
        "将规范链接列表转换为有效的sitemap.xml，支持去重、lastmod日期、changefreq提示和XML转义，免费在浏览器本地运行，放在网站根目录即可帮助搜索引擎更快发现新页面，设置lastmod日期与changefreq提示，下载后放到网站根目录即可提交给搜索引擎，帮助新页面更快被发现，全部免费使用。",
      primaryKeyword: "XML网站地图生成器",
      secondaryKeywords: [
        "网站地图XML制作工具",
        "免费创建sitemap.xml",
        "规范链接网站地图工具",
        "sitemap.xml文件生成器",
      ],
      longTailKeywords: [
        "离线从链接列表生成有效的XML网站地图",
        "创建带lastmod与changefreq标签的网站地图XML",
        "转义XML网站地图链接中的特殊字符",
        "免费在线为小型网站创建XML网站地图",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "将规范的https://链接列表转换为符合Sitemaps 0.9规范的有效sitemap.xml，支持无效链接过滤、自动去重、XML字符转义和.xml文件导出。",
  },
  "robots-txt-generator": {
    slug: "robots-txt-shengchengqi",
    name: "robots.txt生成器",
    shortDescription:
      "按User-agent分组创建有效的robots.txt抓取规则，支持Allow/Disallow路径、Crawl-delay和Sitemap声明。",
    keywords: [
      "robots.txt生成器",
      "创建robots.txt",
      "抓取程序Allow Disallow制作工具",
      "网站地图声明生成器",
      "在线创建robots.txt",
      "robots.txt文件生成器",
      "屏蔽搜索抓取程序",
      "Allow Disallow robots.txt",
      "robots.txt检查制作工具",
    ],
    seo: {
      title: "robots.txt生成器 – 免费在线快速创建网站抓取程序规则文件生成工具 | UtilityFlow",
      description:
        "使用入门预设创建有效的robots.txt，包含User-agent分组、Allow与Disallow规则、crawl-delay和网站地图链接，免费在浏览器内运行，精细控制网站抓取，发布前请先检查规则，避免误屏蔽公开页面，支持多个网站地图声明与常用预设，部署前请用谷歌搜索控制台测试验证，避免误屏蔽重要页面。",
      primaryKeyword: "robots.txt生成器",
      secondaryKeywords: [
        "robots.txt制作工具",
        "屏蔽抓取程序路径",
        "WordPress与单页应用robots.txt",
        "robots.txt文件创建器",
      ],
      longTailKeywords: [
        "为React、Vite和Cloudflare Pages生成整洁的robots.txt",
        "在robots.txt文件中添加多个网站地图声明",
        "用robots.txt屏蔽测试环境不被搜索抓取",
        "创建robots.txt屏蔽AI抓取程序访问网站",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "使用面向公开网站、SaaS应用、WordPress或测试环境锁定的入门预设，创建分组整洁的robots.txt规则，支持自定义User-agent行、Allow/Disallow、Crawl-delay和Sitemap:声明。",
  },
  "schema-markup-generator": {
    slug: "schema-biaoji-shengchengqi",
    name: "结构化数据标记（JSON-LD）生成器",
    shortDescription:
      "为Article、FAQPage、Product、Organization和BreadcrumbList生成有效的Schema.org JSON-LD脚本。",
    keywords: [
      "结构化数据标记生成器",
      "JSON-LD生成器",
      "FAQ结构化数据生成器",
      "结构化数据制作工具",
      "结构化数据生成器",
      "Schema.org JSON-LD工具",
      "富摘要结构化数据生成器",
      "FAQPage结构化数据生成器",
      "产品结构化数据标记",
    ],
    seo: {
      title: "结构化数据标记生成器 – JSON-LD结构化数据免费在线高效快速生成工具 | UtilityFlow",
      description:
        "为Article、FAQPage、Product、Organization和BreadcrumbList创建有效的Schema.org JSON-LD，支持安全的HTML转义、脚本复制与.jsonld导出，帮助页面获得富媒体搜索结果展示资格，全部免费且在浏览器本地运行，可复制脚本标签或导出.jsonld文件。",
      primaryKeyword: "结构化数据标记生成器",
      secondaryKeywords: [
        "JSON-LD在线生成器",
        "FAQPage结构化数据工具",
        "产品结构化数据制作工具",
        "结构化数据标记工具",
      ],
      longTailKeywords: [
        "免费生成有效的Schema.org JSON-LD脚本标签",
        "创建动态FAQPage与面包屑结构化数据",
        "为HTML脚本标签安全转义JSON-LD",
        "为文章与产品页面创建JSON-LD结构化数据标记",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "为Article、FAQPage、Product、Organization和BreadcrumbList创建整洁的Schema.org JSON-LD结构化数据块，支持动态行编辑器、在脚本标签内对<进行HTML安全转义，以及.jsonld文件导出。",
  },
  "url-slug-generator": {
    slug: "url-bieming-shengchengqi",
    name: "URL别名生成器",
    shortDescription:
      "将文章标题批量转换为整洁的SEO友好型URL别名，支持带重音字符转写和停用词过滤。",
    keywords: [
      "URL别名生成器",
      "SEO别名制作工具",
      "整洁固定链接生成器",
      "批量别名转换",
      "SEO友好链接生成器",
      "博客标题转别名",
      "固定链接别名制作工具",
      "URL停用词去除",
      "重音字符转ASCII别名",
    ],
    seo: {
      title: "URL别名生成器 – 把文章标题快速批量转为SEO友好固定链接的免费在线工具 | UtilityFlow",
      description:
        "将文章标题批量转换为小写SEO别名，支持重音字符转写、停用词去除和按单词边界截断，全部在浏览器内免费完成，粘贴标题即可批量生成连字符连接的易读别名，并预览完整链接一键复制，支持重音字符转写与停用词过滤，按单词边界截断长别名，批量生成后可一键复制全部别名或完整链接，让网站链接更整洁易读，提升搜索引擎友好度。",
      primaryKeyword: "URL别名生成器",
      secondaryKeywords: [
        "SEO友好链接生成器",
        "标题批量转别名",
        "停用词别名清理工具",
        "固定链接别名制作工具",
      ],
      longTailKeywords: [
        "批量将博客标题转换为整洁的SEO友好型URL别名",
        "将带重音字符转换为ASCII格式的URL别名",
        "在整洁的单词边界处截断过长的URL别名",
        "批量将博客标题转换为SEO友好型URL别名",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "无论是单篇文章还是批量内容日历，都能统一为易读的连字符固定链接。重音符号可整洁转写（Café → cafe），可选择去除填充类停用词，按单词边界截断到最大长度而不切断单词，并可预览完整链接。",
  },
  "keyword-density-checker": {
    slug: "guanjianzi-midu-jianchaqi",
    name: "关键词密度检查器",
    shortDescription:
      "在本地审核字数、目标关键词密度、阅读时长，以及出现频率最高的1词、2词和3词短语。",
    keywords: [
      "关键词密度检查器",
      "SEO内容分析器",
      "N元词组频率分析器",
      "短语重复审核",
      "在线检查关键词密度",
      "内容关键词频率工具",
      "免费SEO文本分析器",
      "目标关键词密度计算器",
      "二元三元词组分析器",
    ],
    seo: {
      title: "关键词密度检查器 – 在线快速分析文章关键词密度、阅读时长与内容质量的免费工具 | UtilityFlow",
      description:
        "粘贴文章草稿或HTML，检查字数、阅读时长、目标关键词密度和出现频率最高的1词、2词与3词短语，全部在浏览器内私密运行，发现不自然的重复，帮助您写出自然流畅的文章，免费使用无需注册，支持1词、2词与3词短语频率分析，自动去除HTML标签与脚本代码，全部在浏览器本地私密运行，帮助您发现重复表达，写出自然流畅的文章。",
      primaryKeyword: "关键词密度检查器",
      secondaryKeywords: [
        "SEO文案频率分析器",
        "2词3词N元词组计数器",
        "在线检查关键词重复",
        "目标关键词密度计算器",
      ],
      longTailKeywords: [
        "无需上传即可分析粘贴HTML内容的关键词密度",
        "找出博客草稿中过度使用的2词与3词短语",
        "在浏览器内整洁地检查目标关键词出现频率",
        "在线检查博客草稿关键词密度的方法",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "按词汇深度、阅读时长、目标短语的精确出现次数，以及出现频率最高的1词、2词和3词N元词组，检查内容草稿或粘贴的HTML文案——旨在发现无意中的过度重复，而不是追逐过时的关键词配额。",
  },
  "canonical-hreflang-generator": {
    slug: "canonical-hreflang-shengchengqi",
    name: "规范链接、Hreflang与301重定向生成器",
    shortDescription:
      "生成HTML/XML格式的hreflang与规范标签，或为Cloudflare Pages _redirects、Apache和Nginx编写301重定向规则。",
    keywords: [
      "hreflang生成器",
      "规范标签制作工具",
      "301重定向生成器",
      "Cloudflare _redirects制作工具",
      "规范链接生成器",
      "hreflang标签生成器",
      "多语言SEO标签",
      "301重定向规则生成器",
      "Apache htaccess重定向制作工具",
    ],
    seo: {
      title: "规范链接、Hreflang与301重定向生成器 – 多语言SEO免费在线生成工具 | UtilityFlow",
      description:
        "为多语言页面生成hreflang与规范标签，并为Cloudflare Pages、Apache和Nginx生成301重定向规则，复制后即可部署，全部免费且在浏览器本地运行，支持x-default回退语言与自引用规范链接，支持HTML标签与XML网站地图两种格式，复制后即可部署使用，让国际SEO更轻松，免费使用。",
      primaryKeyword: "hreflang生成器",
      secondaryKeywords: [
        "规范链接标签生成器",
        "301重定向配置制作工具",
        "Cloudflare Pages重定向生成器",
        "规范链接生成器",
      ],
      longTailKeywords: [
        "生成hreflang HTML标签与XML网站地图xhtml链接",
        "将旧链接列表转换为Cloudflare Pages _redirects 301规则",
        "在线制作Apache htaccess与Nginx 301重定向",
        "为国际页面生成x-default hreflang标签",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "在一个地方处理两项重要的技术SEO迁移工作：生成多地区hreflang + 规范链接标注（适用于HTML <head>和XML网站地图），或将链接映射列表转换为可直接部署的301重定向配置，适用于Cloudflare Pages、Apache和Nginx。",
  },
  "on-page-seo-checker": {
    slug: "ye-mian-seo-jianchaqi",
    name: "HTML页面SEO审核检查器",
    shortDescription:
      "用DOMParser在本地审核粘贴的HTML源代码，检查标题长度、元描述、H1–H4层级、图片alt文本和JSON-LD。",
    keywords: [
      "页面SEO检查器",
      "HTML SEO分析器",
      "标题层级检查器",
      "图片alt审核工具",
      "免费SEO审核工具",
      "元描述长度检查器",
      "标题标签长度检查器",
      "HTML SEO标签检查器",
      "JSON-LD检查器",
    ],
    seo: {
      title: "页面SEO检查器 – 粘贴HTML源代码快速全面审核页面SEO的免费在线工具 | UtilityFlow",
      description:
        "粘贴任意页面HTML源代码，即可审核标题、元描述、标题层级、规范链接、图片alt文本、链接和JSON-LD，即时免费，全部在浏览器本地完成，支持静态HTML导出与各类CMS页面，检查标题层级、图片alt文本与内外链情况，支持静态HTML导出与各类CMS页面，修复后可重新审核确认评分提升，全部免费使用，无需注册。",
      primaryKeyword: "页面SEO检查器",
      secondaryKeywords: [
        "HTML源代码SEO审核",
        "H1 H2标题结构检查器",
        "检查缺失的图片alt属性",
        "元描述长度检查器",
      ],
      longTailKeywords: [
        "离线审核粘贴HTML源代码的页面SEO标签",
        "检查H1到H4标题大纲与HTML中的规范链接",
        "无需外部抓取的客户端SEO DOM检查器",
        "粘贴HTML源代码检查标题、元描述与标题层级",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "直接在浏览器内对粘贴的任意HTML源代码（“查看页面源代码”）进行即时DOM级别技术与页面SEO检查——检查<title>、元描述、规范链接、H1–H4标题层级、缺失的图片alt文本、内部/外部链接、Open Graph和JSON-LD。",
  },
  "robots-meta-tag-generator": {
    slug: "robots-yuan-biaoqian-shengchengqi",
    name: "Robots元标签与X-Robots-Tag生成器",
    shortDescription:
      "生成精细的noindex、nofollow、noarchive、max-snippet、max-image-preview和Cloudflare _headers规则。",
    keywords: [
      "robots元标签生成器",
      "X-Robots-Tag制作工具",
      "noindex nofollow元标签",
      "max-image-preview large标签",
      "noindex标签生成器",
      "元robots标签制作工具",
      "robots响应头生成器",
      "Cloudflare _headers生成器",
      "nosnippet元标签",
    ],
    seo: {
      title: "Robots元标签与X-Robots-Tag生成器 – noindex免费在线生成工具 | UtilityFlow",
      description:
        "创建带noindex、nofollow、max-snippet和max-image-preview的HTML robots元标签与X-Robots-Tag响应头，并输出适用于任意路径的Cloudflare _headers规则，全部免费且在浏览器本地运行，输出HTML标签、HTTP响应头与Cloudflare规则。",
      primaryKeyword: "robots元标签生成器",
      secondaryKeywords: [
        "X-Robots-Tag响应头生成器",
        "noindex元标签制作工具",
        "谷歌max-image-preview large",
        "noindex标签生成器",
      ],
      longTailKeywords: [
        "为Cloudflare Pages上的PDF文件生成X-Robots-Tag noindex响应头",
        "创建带max-snippet与max-image-preview large的元robots标签",
        "robots.txt与元robots noindex的区别",
        "制作带noindex、nofollow和max-snippet的robots元标签",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "生成精确的页面级抓取指令——包括index/noindex、follow/nofollow、noarchive、nosnippet、max-snippet和max-image-preview:large——同时输出为HTML <meta name=\"robots\">标签、HTTP X-Robots-Tag响应头和Cloudflare Pages _headers代码块。",
  },
  "image-compressor": {
    slug: "tupian-yasuoqi",
    name: "图片压缩器",
    shortDescription:
      "通过HTML5 Canvas在本地压缩PNG、JPG和WebP图片，支持自定义质量滑块、最大宽度上限和即时节省字节数统计。",
    keywords: [
      "图片压缩器",
      "在线压缩图片",
      "减小图片文件大小",
      "WebP图片优化器",
      "把PNG压缩得更小",
      "在线减小JPG文件大小",
      "免费图片体积缩小工具",
      "为网站优化图片",
      "缩小照片文件大小",
    ],
    seo: {
      title: "图片压缩器 – 在浏览器本地快速免费压缩PNG、JPG与WebP图片的工具 | UtilityFlow",
      description:
        "在浏览器中使用图片压缩器压缩图片，调整质量、限制最大宽度，对比压缩前后的大小并下载，无需上传，全部在浏览器本地完成，支持PNG、JPG与WebP格式，免费使用，支持WebP、JPG与PNG输出，可设置最大宽度上限与质量滑块，对比压缩前后大小，下载后可直接用于网站与邮件附件，全部免费且无需上传，安全私密。",
      primaryKeyword: "图片压缩器",
      secondaryKeywords: [
        "在线压缩PNG JPG WebP",
        "免费减小照片文件大小",
        "客户端图片优化器",
        "为网站缩小图片体积",
      ],
      longTailKeywords: [
        "无需上传服务器即可压缩大图以优化网站核心指标",
        "将JPG照片转换并压缩为轻量WebP格式",
        "离线调整最大宽度并优化图片质量",
        "在邮件附件发送前减小图片文件大小",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "直接在浏览器内缩小体积庞大的PNG、JPG和WebP图片，让页面加载更快、邮件附件更轻——调整有损压缩质量、设置可选宽度上限，并精确对比节省的字节数，全程不上传任何文件。",
  },
  "image-resizer": {
    slug: "tupian-chicun-tiaozhengqi",
    name: "图片尺寸调整与裁剪工具",
    shortDescription:
      "将图片调整为精确像素尺寸或社交/Open Graph预设，支持锁定宽高比、智能居中覆盖裁剪，并导出PNG/JPG/WebP。",
    keywords: [
      "图片尺寸调整工具",
      "按像素调整图片大小",
      "在线图片裁剪工具",
      "OG图片1200x630调整工具",
      "免费在线调整图片大小",
      "更改图片尺寸",
      "为Instagram调整照片大小",
      "按尺寸裁剪图片",
      "把图片调整为1200x630",
    ],
    seo: {
      title: "图片尺寸调整工具 – 一键快速高效按精确像素调整照片大小与裁剪的免费在线工具 | UtilityFlow",
      description:
        "使用图片尺寸调整工具按精确像素调整照片大小，可使用预设、锁定宽高比、居中覆盖裁剪，并以PNG、JPG或WebP格式导出，全部在浏览器本地私密完成，免费使用，提供Open Graph、YouTube高清、正方形与头像预设，支持锁定宽高比与居中覆盖裁剪，导出PNG、JPG或WebP并显示真实文件大小，免费使用。",
      primaryKeyword: "图片尺寸调整工具",
      secondaryKeywords: [
        "按精确像素调整照片大小",
        "宽高比覆盖裁剪工具",
        "社交图片尺寸预设调整工具",
        "为社交媒体调整图片大小",
      ],
      longTailKeywords: [
        "将图片调整为1200x630 Open Graph尺寸且不变形",
        "本地居中覆盖裁剪照片为1080x1080正方形",
        "在浏览器中免费更改图片像素宽高",
        "将竖版照片调整为1080x1080正方形用于Instagram",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "将图片和照片缩放到精确像素尺寸，或一键使用Open Graph（1200×630）、YouTube高清（1280×720）、正方形（1080×1080）和头像（512×512）内置预设，采用高质量Canvas重采样，并可选择居中覆盖裁剪以避免变形。",
  },
  "image-format-converter": {
    slug: "tupian-geshi-zhuanhuanqi",
    name: "图片格式转换器（PNG / JPG / WebP）",
    shortDescription:
      "在本地批量将PNG、JPG、WebP、GIF和SVG图片转换为PNG、JPG或WebP，支持质量控制和自定义JPEG背景填充。",
    keywords: [
      "图片格式转换器",
      "PNG转WebP转换器",
      "WebP转PNG转换器",
      "浏览器SVG转PNG转换器",
      "JPG转PNG",
      "PNG转JPG",
      "批量图片转换器",
      "WebP转JPG转换器",
      "免费在线图片转换器",
    ],
    seo: {
      title: "图片格式转换器 – 免费在线快速高效批量转换PNG、JPG与WebP图片格式 | UtilityFlow",
      description:
        "使用图片格式转换器在PNG、JPG与WebP之间转换图片，支持批量转换、设置JPG质量，导出前填充透明背景，全部在浏览器本地完成，免费使用无需上传，支持PNG、JPG、WebP、GIF与SVG输入，可批量转换并设置JPG质量，透明图片转JPG时可自定义背景填充颜色，转换后保持原始分辨率，全部免费使用，无需上传。",
      primaryKeyword: "图片格式转换器",
      secondaryKeywords: [
        "WebP转JPG或PNG",
        "批量PNG转WebP转换器",
        "透明PNG转JPG背景填充",
        "免费JPG转PNG",
      ],
      longTailKeywords: [
        "离线批量将多张PNG与JPG图片转换为WebP",
        "无需上传即可将WebP截图转换为标准PNG",
        "转换为JPG时填充透明PNG的背景颜色",
        "在浏览器中把图片格式从PNG改为JPG",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "完全在浏览器内将PNG、JPG、WebP、GIF和SVG文件批量转换为适合网页的WebP、通用JPG或无损透明PNG，转换为JPEG压平透明度时支持自定义背景填充颜色。",
  },
  "image-rotate-flip": {
    slug: "tupian-xuanzhuan-fanzhuan",
    name: "图片旋转、翻转与滤镜工具",
    shortDescription:
      "在浏览器内将图片旋转90°/180°/270°、水平或垂直翻转，并实时应用灰度、亮度和对比度滤镜。",
    keywords: [
      "在线旋转图片",
      "水平翻转图片",
      "灰度图片滤镜",
      "调整图片亮度对比度",
      "旋转照片90度",
      "在线翻转照片",
      "在线镜像图片",
      "在线校正图片",
      "在线照片滤镜编辑器",
    ],
    seo: {
      title: "图片旋转翻转工具 – 快速一键免费在线旋转90度翻转照片与调整滤镜的效果 | UtilityFlow",
      description:
        "在线将图片旋转90、180或270度，水平或垂直翻转照片，调整亮度、对比度和灰度效果，全部免费且在浏览器本地完成，无需上传，导出为PNG、JPG或WebP，支持旋转90度、180度与270度，水平或垂直翻转照片，实时调整亮度、对比度与灰度效果，导出为PNG、JPG或WebP格式，全部在浏览器本地运行，免费使用。",
      primaryKeyword: "在线旋转图片",
      secondaryKeywords: [
        "水平垂直翻转图片",
        "在线把照片转为灰度",
        "浏览器调整亮度与对比度",
        "在线旋转照片90度",
      ],
      longTailKeywords: [
        "在浏览器离线修正横向照片旋转90度",
        "无需Photoshop即可水平镜像自拍照",
        "应用黑白灰度滤镜并导出PNG",
        "旋转扫描文档图片到正确方向",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "使用本地HTML5 Canvas 2D变换修正横向照片方向，水平或垂直镜像自拍，将照片转为黑白灰度，并实时微调亮度和对比度。",
  },
  "image-to-base64": {
    slug: "tupian-zhuan-base64",
    name: "图片转Base64与Data URI转换器",
    shortDescription:
      "将PNG、JPG、WebP、SVG和ICO图片编码为Base64 Data URI、HTML <img>标签和CSS规则，或将Base64字符串解码回预览图。",
    keywords: [
      "图片转Base64",
      "Base64图片解码器",
      "Data URI生成器",
      "CSS背景Base64图片",
      "图片转Data URI",
      "Base64图片编码器",
      "免费在线图片转Base64",
      "PNG编码为Base64",
      "Base64转图片转换器",
    ],
    seo: {
      title: "图片转Base64转换器 – Data URI编码与解码高效快速免费在线工具 | UtilityFlow",
      description:
        "使用图片转Base64转换器创建Data URI、原始Base64、HTML img标签和CSS背景代码片段，或将Base64解码回图片预览，全部免费且在浏览器本地运行，支持Data URI、原始Base64、HTML img标签与CSS背景代码片段，也可将Base64解码回图片预览并下载，全部免费使用，无需上传。",
      primaryKeyword: "图片转Base64",
      secondaryKeywords: [
        "Data URI图片编码器",
        "Base64转图片预览",
        "在CSS中内联SVG或PNG",
        "免费在线图片转Base64",
      ],
      longTailKeywords: [
        "离线将PNG图标转换为CSS背景Data URI",
        "将原始Base64字符串解码为可下载的图片预览",
        "比较图片二进制字节大小与Base64字符串大小",
        "为HTML邮件将小标志图片编码为Base64",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "将小图标、标志和邮件图片转换为自包含的data:image/...;base64,... URI、可直接复制的HTML <img>标签和CSS background-image声明，或切换模式检查并下载原始Base64图片数据。",
  },
  "color-contrast-checker": {
    slug: "yanse-duibidu-jianchaqi",
    name: "颜色对比度检查器与配色提取器",
    shortDescription:
      "测试WCAG 2.1 AA/AAA颜色对比度，转换HEX/RGB/HSL颜色值，并从上传的图片中提取主导配色。",
    keywords: [
      "WCAG颜色对比度检查器",
      "无障碍对比度",
      "图片配色提取器",
      "HEX RGB HSL颜色选择器",
      "WCAG AA对比度计算器",
      "在线AAA对比度检查器",
      "无障碍配色组合",
      "文字背景对比度测试",
      "设计无障碍检查器",
    ],
    seo: {
      title: "颜色对比度检查器 – WCAG 2.1 AA/AAA无障碍免费在线检查工具 | UtilityFlow",
      description:
        "检查文字与背景颜色组合的WCAG 2.1 AA与AAA对比度，转换HEX、RGB和HSL颜色值，并从图片中提取配色，全部免费且在浏览器本地运行，适用于网页与深色模式界面设计，按WCAG 2.1标准检查AA与AAA对比度，同步转换HEX、RGB与HSL颜色值，并从截图或标志中提取最多8种主导颜色，免费使用，无需注册。",
      primaryKeyword: "颜色对比度检查器",
      secondaryKeywords: [
        "WCAG AA AAA对比度计算器",
        "从图片提取配色",
        "无障碍文字背景颜色检查器",
        "常规与大号文字WCAG对比度",
      ],
      longTailKeywords: [
        "在线测试WCAG 2.1常规与大号文字对比度",
        "从截图中提取主导HEX色卡到对比度检查器",
        "检查深色模式界面前景与背景颜色无障碍",
        "正文文字通过WCAG AA需要多少对比度",
      ],
      schemaApplicationCategory: "DesignApplication",
    },
    intro:
      "根据官方WCAG 2.1相对亮度和对比度阈值（AA 4.5:1、AA大号文字3.0:1、AAA 7.0:1）验证界面配色，编辑同步的HEX/RGB/HSL值，并上传截图或标志，直接提取主导HEX色卡到前景色或背景色位置。",
  },
  "qr-code-scanner": {
    slug: "erweima-saomiaoyi",
    name: "二维码扫描器与vCard二维码制作工具",
    shortDescription:
      "在浏览器内私密解码上传图片或设备摄像头中的二维码，或制作可下载的PNG/SVG格式vCard联系人二维码。",
    keywords: [
      "在线二维码扫描器",
      "从图片解码二维码",
      "vCard二维码生成器",
      "浏览器摄像头二维码读取器",
      "从截图扫描二维码",
      "无需应用的二维码读取器",
      "解码二维码PNG JPG",
      "WiFi二维码扫描器",
      "二维码内容读取器",
    ],
    seo: {
      title: "二维码扫描器 – 快速高效解码二维码图片与vCard联系人免费在线扫码工具 | UtilityFlow",
      description:
        "直接在浏览器中扫描并解码截图、照片或网络摄像头中的二维码，或制作可下载的PNG与SVG格式vCard联系人二维码，全部免费且本地运行，解码前可安全检查链接目标，支持从截图、照片或网络摄像头解码二维码，自动分类链接、Wi-Fi、vCard与文本载荷，解码前可安全检查链接目标，也可制作vCard联系人二维码，免费使用。",
      primaryKeyword: "二维码扫描器",
      secondaryKeywords: [
        "在线二维码图片读取器",
        "免费从截图扫描二维码",
        "生成vCard联系人二维码",
        "浏览器网络摄像头二维码读取器",
      ],
      longTailKeywords: [
        "离线解码上传的PNG或JPG截图中的二维码",
        "用笔记本摄像头扫描二维码无需安装应用",
        "创建可下载的vCard 3.0联系人二维码SVG与PNG",
        "从截图读取反色深色模式二维码",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "直接在浏览器内读取截图、照片或可选实时摄像头画面中的二维码内容，自动分类载荷类型（链接、Wi-Fi、vCard、文本），另附vCard联系人二维码制作器，可导出清晰的PNG和SVG联系人卡片。",
  },
  "password-generator": {
    slug: "mima-shengchengqi",
    name: "加密密码与口令生成器",
    shortDescription:
      "使用crypto.getRandomValues拒绝采样生成无偏随机密码和Diceware风格口令，并精确计算熵值。",
    keywords: [
      "加密密码生成器",
      "安全随机密码生成器",
      "Diceware口令生成器",
      "crypto getrandomvalues密码",
      "在线强密码制作工具",
      "随机口令生成器",
      "密码熵值检查器",
      "免费生成安全密码",
      "无偏随机密码工具",
    ],
    seo: {
      title: "密码生成器 – 免费在线快速生成超高强度加密安全随机密码与易记口令的工具 | UtilityFlow",
      description:
        "在浏览器本地使用Web Crypto生成强随机密码和易记的Diceware口令，精确计算熵值，不存储、不上传，全部免费，支持排除易混淆字符与批量生成，使用浏览器硬件支持的密码学安全随机数生成器，精确计算熵值，支持排除易混淆字符与批量生成，不存储不上传，全部免费且在本地运行，适合保护重要账号，安全可靠。",
      primaryKeyword: "密码生成器",
      secondaryKeywords: [
        "加密安全密码生成器",
        "在线易记口令生成器",
        "密码熵值计算器",
        "带符号的随机密码制作工具",
      ],
      longTailKeywords: [
        "使用crypto getrandomvalues无取模偏差生成随机密码",
        "本地离线创建5词Diceware口令",
        "密码生成器排除易混淆字符0 o 1 l i",
        "18字符密码有多少熵值比特",
      ],
      schemaApplicationCategory: "SecurityApplication",
    },
    intro:
      "100%在本地使用浏览器硬件支持的密码学安全随机数生成器（window.crypto.getRandomValues），通过拒绝采样消除取模偏差，并用Fisher-Yates洗牌防止字符位置可预测，生成高熵密码和易记的多词口令。",
  },
  "file-hash-verifier": {
    slug: "wenjian-hash-yanzhengqi",
    name: "文件哈希与校验和验证器",
    shortDescription:
      "通过Web Crypto SubtleCrypto在本地计算SHA-256、SHA-512、SHA-384和SHA-1二进制文件校验和，并与已发布的哈希值比对验证下载文件。",
    keywords: [
      "文件哈希验证器",
      "SHA256文件校验和检查器",
      "在线验证下载文件哈希",
      "SHA512文件哈希生成器",
      "SHA256校验和计算器",
      "在线检查文件完整性",
      "比较文件校验和",
      "SHA384 SHA1哈希检查器",
      "浏览器验证ISO校验和",
    ],
    seo: {
      title: "文件哈希验证器 – 在浏览器本地快速计算SHA-256校验和的免费在线工具 | UtilityFlow",
      description:
        "在浏览器中为任意本地文件计算SHA-256、SHA-512、SHA-384和SHA-1摘要，并与已发布的校验和比对，无需上传，免费使用，适合验证安装程序、ISO镜像与压缩包的完整性，用Web Crypto计算SHA-256、SHA-512、SHA-384与SHA-1摘要，粘贴预期校验和比对，可导出.sha256文件。",
      primaryKeyword: "文件哈希验证器",
      secondaryKeywords: [
        "SHA256校验和计算器文件",
        "在线验证SHA256文件",
        "浏览器SubtleCrypto文件摘要",
        "SHA512校验和验证器",
      ],
      longTailKeywords: [
        "无需终端即可检查下载安装程序的SHA-256哈希",
        "将文件二进制校验和与预期SHA256字符串比对",
        "本地计算SHA256与SHA512且零文件上传",
        "在浏览器中验证Linux ISO的SHA256校验和",
      ],
      schemaApplicationCategory: "SecurityApplication",
    },
    intro:
      "在本地验证软件安装程序、压缩包、数据集和文档的完整性与真实性——通过硬件加速的Web Crypto subtle.digest计算SHA-256、SHA-512、SHA-384和SHA-1摘要，并即时与预期校验和比对。",
  },
  "favicon-generator": {
    slug: "favicon-shengchengqi",
    name: "网站图标与应用图标生成器（.ico与PNG）",
    shortDescription:
      "从自定义字母徽章或上传的标志生成清晰的多尺寸PNG图标（16×16至512×512）和真正的多帧二进制favicon.ico。",
    keywords: [
      "网站图标生成器",
      "在线创建favicon.ico",
      "苹果触摸图标生成器",
      "文字转网站图标字母组合",
      "免费favicon ico制作工具",
      "PWA图标生成器192 512",
      "网站favicon制作工具",
      "PNG转网站图标转换器",
      "在线应用图标生成器",
    ],
    seo: {
      title: "网站图标生成器 – 免费在线快速高效创建多尺寸.ico与PNG应用图标的工具 | UtilityFlow",
      description:
        "从标志或自定义字母徽章生成真正的多帧favicon.ico，以及16–512像素PNG、苹果触摸图标和PWA图标，全部免费且在浏览器本地完成，附带可直接粘贴的HTML链接标签，支持自定义字母徽章或上传标志，生成16×16至512×512多尺寸PNG、苹果触摸图标与PWA图标，附带可直接粘贴的HTML链接标签。",
      primaryKeyword: "网站图标生成器",
      secondaryKeywords: [
        "PNG转多尺寸ICO转换器",
        "字母组合网站图标制作工具",
        "PWA与苹果触摸图标生成器",
        "免费在线favicon ico制作工具",
      ],
      longTailKeywords: [
        "免费创建含16x16、32x32、48x48帧的真正二进制favicon.ico",
        "从文字首字母生成网站图标与HTML链接标签",
        "将正方形标志裁剪为圆角180x180苹果触摸图标",
        "为网页清单生成192x192与512x512 PWA图标",
      ],
      schemaApplicationCategory: "DesignApplication",
    },
    intro:
      "几秒内设计一个整洁的字母组合图标——或上传现有品牌标志——渲染像素锐利的16×16、32×32、48×48、180×180苹果触摸图标和192×192 / 512×512 PWA PNG资源，以及符合标准的二进制多图favicon.ico和可直接粘贴的HTML <link>标记。",
  },
};
