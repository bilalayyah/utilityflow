import type { CategoryLocaleOverride } from "../types";

/**
 * Chinese (Simplified) overrides for the 7 categories, keyed by category id.
 * Every category: slug (fixed Chinese slugs), name, shortName, description,
 * longDescription, seo, sampleToolNames (5 — exactly the Chinese tool names).
 * Fixed Chinese category slugs:
 * wenben-gongju, kaifazhe-gongju, jisuanqi, shejiao-meiti-gongju,
 * pdf-gongju, seo-gongju, tuxiang-wenjian-gongju.
 * Sample tool ids per category (first 5 in registry order): text-writing:
 * word-counter, character-counter, case-converter, remove-duplicate-lines,
 * text-diff-checker; developer: json-formatter, base64-encoder-decoder,
 * url-encoder-decoder, uuid-generator, regex-tester; calculators:
 * age-calculator, percentage-calculator, loan-emi-calculator,
 * discount-margin-calculator, date-difference-calculator; social-media:
 * qr-code-generator, utm-link-builder, social-character-limit-checker,
 * unicode-fancy-text-formatter, bio-line-break-formatter; pdf: merge-pdf,
 * split-pdf, images-to-pdf, pdf-page-rotator, pdf-metadata-editor; seo:
 * meta-tag-generator, serp-snippet-preview, url-slug-generator,
 * robots-txt-generator, schema-markup-generator; image-file:
 * image-compressor, image-resizer, image-format-converter,
 * color-contrast-checker, password-generator.
 * NOTE: the registry id for the social character limit tool is
 * "social-character-limit-checker" (no "media" in the id).
 */
export const ZH_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  "text-writing": {
    slug: "wenben-gongju",
    name: "文本与写作工具",
    shortName: "文本与写作",
    description:
      "在浏览器中直接统计字数、排版文案、清理空白、转换大小写、检查可读性。",
    longDescription:
      "为作家、编辑、内容团队与学生打造的精准写作与字符串处理工具。每次文本操作都在您的设备上即时完成，草稿不会上传到远程服务器。",
    seo: {
      title: "文本与写作工具——免费在线字数统计、字符计数、大小写转换、文本清理与可读性检查工具 | UtilityFlow",
      description:
        "在浏览器中使用文本与写作工具：字数统计、字符计数、大小写转换、行排序与文本清理，全部本地处理、即时可用，完全免费。所有工具都在浏览器内本地运行，草稿与输入内容不会发送到服务器，写作、编辑与学习都能安心使用。无论是写文章、改论文还是整理笔记，都能快速得到准确结果，提高写作效率。一站式满足日常写作需求。",
      keywords: [
        "文本工具",
        "写作工具",
        "字数统计",
        "字符计数",
        "大小写转换",
      ],
    },
    sampleToolNames: [
      "单词计数器",
      "字符计数器",
      "大小写转换工具",
      "删除重复行工具",
      "文本差异比较工具",
    ],
  },
  developer: {
    slug: "kaifazhe-gongju",
    name: "开发者工具",
    shortName: "开发者工具",
    description:
      "格式化 JSON、编码 Base64、测试正则表达式、解码 JWT、生成哈希，无需服务器往返。",
    longDescription:
      "为快速调试与干净数据转换打造的日常工程工具。粘贴数据、查看结构化格式、在本地验证语法，敏感令牌与配置片段不会离开您的设备。",
    seo: {
      title: "开发者工具——免费在线 JSON 格式化、正则表达式测试、编码与哈希处理工具 | UtilityFlow",
      description:
        "在浏览器内安全地格式化 JSON、测试正则表达式、编码 Base64 与 URL、检查 JWT、生成 UUID，全部是客户端开发者工具，免费使用。数据与敏感令牌保留在设备内，不会上传到服务器，日常调试与数据转换都更安心、更高效。无论是格式化接口返回的数据，还是验证一段正则表达式，都能在几秒钟内完成。",
      keywords: [
        "开发者工具",
        "JSON 格式化工具",
        "Base64 编码工具",
        "正则表达式测试工具",
        "JWT 解码工具",
      ],
    },
    sampleToolNames: [
      "JSON 格式化与验证工具",
      "Base64 编码与解码工具",
      "URL 编码与解码工具",
      "UUID 生成器（v4 与 v7）",
      "正则表达式测试工具",
    ],
  },
  calculators: {
    slug: "jisuanqi",
    name: "计算器工具",
    shortName: "计算器",
    description:
      "以确定的精度计算年龄、百分比、贷款还款计划、BMI、单位换算与业务利润率。",
    longDescription:
      "准确的金融、日期、健康与数学计算器，注重清晰易懂。可以查看分步解析、整洁的结果表格，调整输入后结果即时重新计算。",
    seo: {
      title: "计算器工具——金融、日期、贷款还款、单位换算、健康与数学计算的免费在线计算器 | UtilityFlow",
      description:
        "使用快速透明的在线计算器计算年龄、百分比、贷款还款、利润率与单位换算，结果即时显示，还可查看分步解析。调整输入后结果立即重新计算，涵盖金融、日期、健康与数学等多种计算场景，全部免费使用。无论是规划贷款、核算折扣，还是计算两个日期之间相差的天数，都能快速得到准确答案。让每一次计算都清楚透明、有据可查。",
      keywords: [
        "在线计算器",
        "年龄计算器",
        "百分比计算器",
        "贷款计算器",
        "单位换算工具",
      ],
    },
    sampleToolNames: [
      "年龄计算器",
      "百分比计算器",
      "贷款月供计算器",
      "折扣与利润计算器",
      "日期差计算器",
    ],
  },
  "social-media": {
    slug: "shejiao-meiti-gongju",
    name: "社交媒体工具",
    shortName: "社交媒体",
    description:
      "创建 UTM 跟踪链接、预览帖子长度、生成二维码、为现代社交渠道排版标题。",
    longDescription:
      "为创作者、增长团队与社区管理员打造的实用营销与发布助手。统一广告活动跟踪参数、检查平台字符限制、按需生成可扫描的二维码。",
    seo: {
      title: "社交媒体工具——二维码生成、UTM 链接、字符检查与帖子助手的免费在线工具 | UtilityFlow",
      description:
        "创建 UTM 链接、生成二维码、检查社交媒体字符数限制、排版标签与个人简介，干净快速的免费浏览器工具，无需注册。统一广告活动跟踪参数，检查帖子字符限制，轻松准备高效的社交媒体帖子，提升发布效果。无论是推广新品、运营账号还是准备活动海报，都能快速完成发布前的各项准备工作。让每一次发布都更有把握、效果更好。",
      keywords: [
        "社交媒体工具",
        "二维码生成器",
        "UTM 链接生成器",
        "标签格式化工具",
        "标题字数统计",
      ],
    },
    sampleToolNames: [
      "二维码生成器",
      "UTM 链接生成器",
      "社媒字数检查工具",
      "花样文字转换器",
      "简介换行排版工具",
    ],
  },
  pdf: {
    slug: "pdf-gongju",
    name: "PDF 工具",
    shortName: "PDF 工具",
    description:
      "在浏览器内合并、拆分、重排、添加水印与转换 PDF 文档，无需上传私人文件。",
    longDescription:
      "以保密为核心设计的工作流程。使用 WebAssembly 与浏览器画布 API，直接在客户端内存中处理合同、发票与学习资料，而不是通过远程文件服务器。",
    seo: {
      title: "PDF 工具——在浏览器内合并、拆分、旋转与转换的免费私密 PDF 工具集，无需上传文件 | UtilityFlow",
      description:
        "在浏览器内本地合并、拆分、旋转与转换 PDF 文件，无需把敏感文档上传到第三方服务器，完全免费的私密 PDF 工具集。合同与发票等机密文档均使用 WebAssembly 与浏览器画布 API 在客户端内存中安全处理，保护您的隐私。无论是整理合同、合并报告还是提取某一页内容，都能在浏览器内快速完成，无需安装软件。",
      keywords: [
        "PDF 工具",
        "合并 PDF",
        "拆分 PDF",
        "图片转 PDF",
        "浏览器 PDF 编辑器",
      ],
    },
    sampleToolNames: [
      "PDF 合并工具",
      "PDF 拆分工具",
      "图片转 PDF 工具",
      "PDF 页面旋转工具",
      "PDF 元数据编辑器",
    ],
  },
  seo: {
    slug: "seo-gongju",
    name: "SEO 工具",
    shortName: "SEO 工具",
    description:
      "预览 SERP 摘要、生成 OpenGraph 标签、创建 robots.txt 与 XML 站点地图、检查关键词密度。",
    longDescription:
      "为出版商、独立创业者与 SEO 专家打造的技术与页面搜索优化工具。几秒钟内验证标题长度、编写结构化元数据、制作干净的 URL 别名。",
    seo: {
      title: "SEO 工具——SERP 预览、元标签生成、别名优化与站点地图的免费工具集 | UtilityFlow",
      description:
        "使用免费 SEO 工具优化网站：SERP 摘要预览、元标签生成器、robots.txt 生成器与关键词密度检查工具，在浏览器内安全运行。验证标题长度、编写结构化数据、几秒钟制作干净的 URL 别名，让您的页面更容易被搜索引擎收录。无论是发布新文章、优化产品页面还是检查网站结构，都能快速发现问题并加以改进。",
      keywords: [
        "SEO 工具",
        "元标签生成器",
        "SERP 预览",
        "robots.txt 生成器",
        "别名生成器",
      ],
    },
    sampleToolNames: [
      "元标签与Open Graph生成器",
      "SERP摘要预览工具",
      "URL别名与SEO路径优化工具",
      "robots.txt生成器",
      "结构化数据标记（JSON-LD）生成器",
    ],
  },
  "image-file": {
    slug: "tuxiang-wenjian-gongju",
    name: "图片与文件工具",
    shortName: "图片与文件",
    description:
      "在本地压缩图片、调整尺寸、转换 PNG/JPG/WebP、测试 WCAG 对比度、扫描二维码、计算文件哈希、制作网站图标。",
    longDescription:
      "基于 HTML5 Canvas、Web Crypto API 与浏览器文件 API 的高速媒体、加密与文件工具。为 Core Web Vitals 优化网站资源、验证文件 SHA-256 校验和、提取图片配色、生成网站图标，无需上传文件。",
    seo: {
      title: "图片与文件工具——图片压缩、尺寸调整、格式转换、对比度检查与文件管理的免费工具 | UtilityFlow",
      description:
        "在本地压缩、调整、旋转与转换 PNG、JPG、WebP 图片，验证文件校验和、扫描二维码、检查对比度、制作网站图标，全部免费。针对 Core Web Vitals 优化网站资源，验证文件完整性，让网站保持快速，给访客更好的体验。无论是优化网站图片、准备社交媒体配图还是校验下载文件的完整性，都能在本地快速完成。",
      keywords: [
        "图片工具",
        "图片压缩工具",
        "图片尺寸调整",
        "WebP 转换工具",
        "颜色对比度检查工具",
      ],
    },
    sampleToolNames: [
      "图片压缩器",
      "图片尺寸调整与裁剪工具",
      "图片格式转换器（PNG / JPG / WebP）",
      "颜色对比度检查器与配色提取器",
      "加密密码与口令生成器",
    ],
  },
};
