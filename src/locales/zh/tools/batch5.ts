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
    instructions: [
      {
        title: "输入页面标题和元描述",
        description:
          "填写页面标题（建议30–60个字符）和元描述（建议120–160个字符），同时查看实时长度提示。",
      },
      {
        title: "设置规范链接和抓取指令",
        description:
          "输入页面的完整规范链接，并选择是否允许搜索引擎抓取该页面以及跟踪其中的链接。",
      },
      {
        title: "添加Open Graph标签",
        description:
          "填写Open Graph标题、描述、类型和图片链接（建议1200×630像素），让链接在分享时显示得更美观。",
      },
      {
        title: "配置Twitter/X卡片",
        description:
          "选择summary或summary_large_image卡片类型，确认X平台将显示的卡片标题、描述和图片。",
      },
      {
        title: "查看实时社交卡片预览",
        description:
          "在预览面板中查看链接在社交动态中的实际显示效果，发布前修正被截断的文字或缺失的图片。",
      },
      {
        title: "复制或下载HTML代码片段",
        description:
          "将已转义的HTML代码复制到页面<head>中，或下载meta-tags.html文件，在多个模板中重复使用。",
      },
    ],
    examples: [
      {
        title: "标准网站的Open Graph与规范链接代码块",
        input: "标题：UtilityFlow · 类型：website · 卡片：summary_large_image",
        output: "<title>...</title>、<meta name=\"description\" ...>、<link rel=\"canonical\" ...>、og:*与twitter:*",
        explanation: "正确转义属性值中的双引号和&符号。",
      },
      {
        title: "博客文章的article类型标签组合",
        input: "标题：新手SEO指南 · og:type：article · 卡片：summary",
        output: "包含<title>新手SEO指南</title>、og:type「article」和twitter:card「summary」的完整标签组合",
        explanation: "将og:type设为article后，博客文章会以正确的预览格式显示。",
      },
    ],
    benefits: [
      "自动对标签属性中的&、\"、<、>进行HTML转义",
      "将SEO头部标签、Open Graph标签和Twitter/X卡片整合为一段统一代码",
      "发布前即可预览分享链接在社交动态中的显示效果",
      "支持下载为独立的meta-tags.html代码片段文件",
    ],
    useCases: [
      "发布上线页面、营销微型网站和SaaS产品页面",
      "统一所有文章的Open Graph图片尺寸和卡片类型",
      "正式发布前核对index/noindex指令和规范链接",
      "将整洁的<head>模板从营销团队交给前端工程师",
    ],
    faqs: [
      {
        question: "Open Graph标签和Twitter/X标签都需要吗？",
        answer:
          "X平台在需要时会用Open Graph的标题和描述来补全，但同时明确声明twitter:card（summary_large_image）和og:*，才能在任何平台都获得可预测的宽幅图片预览。",
      },
      {
        question: "og:image应该用多大的尺寸？",
        answer:
          "请使用1200×630像素（宽高比1.91:1）的图片，并放在未被robots.txt屏蔽的HTTPS链接上。",
      },
      {
        question: "添加<meta name=\"keywords\">现在还能提升谷歌排名吗？",
        answer:
          "由于历史上的垃圾信息问题，主流搜索引擎都会忽略元关键词，因此本生成器只生成真正有效的标题、描述、规范链接和社交标签，让<head>保持整洁。",
      },
      {
        question: "元标签生成器免费吗？",
        answer:
          "是的，完全免费，而且全部在浏览器内运行，您的标题、描述和链接不会被上传到任何服务器。",
      },
      {
        question: "使用元标签生成器需要安装什么软件吗？",
        answer:
          "不需要。无需安装，在任何现代浏览器中都能使用，在电脑或手机上都可以生成标签。",
      },
      {
        question: "元标题的理想长度是多少？",
        answer:
          "建议30–60个字符，这样完整标题能在搜索结果和社交卡片中完整显示，不会被省略号截断。",
      },
      {
        question: "元描述的理想长度是多少？",
        answer:
          "保持在120–160个字符之间，摘要内容在电脑和手机的搜索结果中都能完整显示。",
      },
      {
        question: "元标签生成器如何处理标题中的特殊字符？",
        answer:
          "它会自动对属性值中的&、\"、<、>进行HTML转义，因此引号和&符号不会破坏页面标记。",
      },
      {
        question: "什么是规范链接？为什么生成器里包含它？",
        answer:
          "当存在多个相似页面时，规范链接会告诉搜索引擎哪个是原始页面，从而避免重复内容造成的混淆。",
      },
      {
        question: "Open Graph标签和Twitter卡片标签有什么区别？",
        answer:
          "Open Graph标签控制链接在Facebook、LinkedIn和聊天应用中的预览效果，Twitter卡片标签则控制同一链接在X平台上的显示方式。",
      },
      {
        question: "在元标签生成器中应该选择哪种Twitter卡片类型？",
        answer:
          "以图片为主的页面（如文章和产品页）使用summary_large_image，纯文本页面使用小缩略图的summary就足够了。",
      },
      {
        question: "可以预览分享后链接的样子吗？",
        answer:
          "可以。实时社交卡片预览会在发布前准确展示标题、描述和图片在社交动态中的显示效果。",
      },
      {
        question: "元标签生成器会把我的页面内容上传到别处吗？",
        answer:
          "不会。所有处理都在浏览器本地完成，您输入的任何内容都不会离开您的设备。",
      },
      {
        question: "如何把生成的元标签添加到网站上？",
        answer:
          "复制代码片段并粘贴到页面模板的<head>部分，或下载meta-tags.html文件，在多个页面中重复使用。",
      },
      {
        question: "什么时候应该在元标签生成器中使用robots的noindex指令？",
        answer:
          "只对绝对不希望出现在搜索结果中的页面使用noindex，例如感谢页面、站内搜索结果页或正式页面的测试副本。",
      },
      {
        question: "元标签生成器能用于博客文章或产品页面吗？",
        answer:
          "可以。博客文章将og:type设为article，商店页面设为product，各平台就会显示正确的预览格式。",
      },
      {
        question: "如果og:image链接错误或图片缺失会怎样？",
        answer:
          "社交平台会显示没有图片或损坏的预览，因此请务必使用直接的HTTPS图片链接，并在发布前检查预览效果。",
      },
      {
        question: "元标签生成器支持多语言页面吗？",
        answer:
          "它一次只为一个页面生成标签，请根据页面语言设置og:locale，并为每个翻译版本单独生成一套标签。",
      },
      {
        question: "能把生成的元标签下载为文件吗？",
        answer:
          "可以。点击下载按钮，即可保存包含完整已转义代码片段的独立meta-tags.html文件。",
      },
      {
        question: "只用元标签生成器就能提升谷歌排名吗？",
        answer:
          "没有任何工具能保证排名，但准确的标题、描述和社交标签可以提高点击率，并改善页面在搜索结果中的呈现方式。",
      },
    ],
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
    instructions: [
      {
        title: "输入标题、描述和链接",
        description:
          "输入候选SEO标题、元描述、页面链接，以及可选的网站名称或发布日期。",
      },
      {
        title: "测量像素宽度",
        description:
          "查看SEO标题旁边的实时像素读数——W和M这类宽字母比l和i占用更多横向像素。",
      },
      {
        title: "查看桌面端预览",
        description:
          "在桌面端搜索卡片中查看完整标题、面包屑链接和描述，效果与桌面用户看到的完全一致。",
      },
      {
        title: "切换到移动端预览",
        description:
          "切换到移动端视图，查看更短的截断位置，确保关键信息在小屏幕上依然可见。",
      },
      {
        title: "测试关键词加粗匹配",
        description:
          "在“加粗关键词”栏中输入目标搜索词，查看谷歌会在摘要中高亮哪些词。",
      },
      {
        title: "复制完成后的标签",
        description:
          "预览效果满意后，将可直接粘贴的<title>和<meta name=\"description\">标签复制到页面中。",
      },
    ],
    examples: [
      {
        title: "发现宽字母导致的标题截断",
        input: "由大写W和M字母填满的60个字符标题",
        output: "即使不到60个字符，超过580像素时也会发出警告，让您在被省略号截断前先缩短标题。",
        explanation: "Canvas文本度量可以近似真实搜索结果的字体渲染宽度。",
      },
      {
        title: "检查移动端描述是否会被截断",
        input: "标题55个字符，描述170个字符",
        output: "桌面端完整显示，移动端则提示描述约在120个字符处折叠。",
        explanation: "移动端描述约在120个字符处折叠，因此重要文案要放在开头。",
      },
    ],
    benefits: [
      "除字符数外，还使用Canvas measureText()测量像素宽度",
      "自动将域名与路径整理为整洁的面包屑导航显示",
      "模拟元描述中搜索词的加粗显示，便于评估点击率",
      "一键复制可直接粘贴的<title>和<meta name=\"description\">标签",
    ],
    useCases: [
      "调整博客标题和产品页标题，避免中间出现“...”截断",
      "在移动端约120个字符的折叠范围内撰写高点击率的元描述",
      "查看发布日期对可见描述长度的影响",
      "在编辑质量检查环节审核落地页的搜索摘要",
    ],
    faqs: [
      {
        question: "为什么像素宽度比严格的字符数更重要？",
        answer:
          "搜索引擎按容器像素宽度（桌面端约580–600像素）截断标题，而不是按固定字符数。大写字母和W、M这类宽字母占用的宽度几乎是i或l的两倍。",
      },
      {
        question: "谷歌会在真实搜索结果中改写我的标题或元描述吗？",
        answer:
          "会的。谷歌有时会根据具体搜索词或H1标题动态改写摘要，不过简洁准确的标题可以减少不必要的改写。",
      },
      {
        question: "这个工具会从谷歌获取实时排名吗？",
        answer:
          '不会。它是纯粹在浏览器内运行的离线 SERP 摘要模拟器，不会连接谷歌，也不会获取任何实时排名数据。工具只根据您输入的标题、网址与描述，用字体度量模拟搜索结果卡片的显示效果。',
      },
      {
        question: "SERP摘要预览工具免费吗？",
        answer:
          "是的，完全免费，而且全部在浏览器内运行，您输入的任何内容都不会被上传到别处。",
      },
      {
        question: "谷歌搜索结果中标题的理想长度是多少？",
        answer:
          "桌面端建议控制在约580像素以内，根据字母宽度不同，通常相当于50–60个字符。",
      },
      {
        question: "SERP摘要预览工具如何测量像素宽度？",
        answer:
          "它使用浏览器Canvas的measureText()接口，按搜索结果相同的字体样式计算标题的实际渲染宽度。",
      },
      {
        question: "为什么我的标题不到60个字符还是被截断了？",
        answer:
          "搜索引擎按像素宽度而不是字符数截断，W和M这类宽字母比i和l这类窄字母占用多得多的空间。",
      },
      {
        question: "桌面端和移动端元描述的理想长度分别是多少？",
        answer:
          "桌面端约显示155–160个字符，移动端约在120个字符处折叠，因此请把最重要的词和关键词放在最前面。",
      },
      {
        question: "可以同时预览桌面端和移动端搜索结果吗？",
        answer:
          "可以。在桌面端视图与移动端视图之间切换，即可查看同一标题和描述在不同屏幕尺寸下的显示效果。",
      },
      {
        question: "SERP摘要预览工具的关键词加粗功能是做什么的？",
        answer:
          "输入目标搜索词后，预览会在标题和描述中加粗匹配的词，就像谷歌在真实搜索结果中高亮搜索词一样。",
      },
      {
        question: "SERP摘要预览工具会显示我的真实谷歌排名吗？",
        answer:
          "不会。它是离线的可视化模拟器，只展示摘要可能呈现的样子，不提供谷歌的实时排名数据。",
      },
      {
        question: "SERP摘要预览工具会把我的标题或链接上传到别处吗？",
        answer:
          '不会。所有预览与像素宽度测量都在浏览器本地完成，标题、网址与描述不会上传到任何服务器。您可以放心输入未发布的页面标题来检查显示效果。',
      },
      {
        question: "预览后如何复制标题和元描述？",
        answer:
          "使用一键复制按钮，即可获取可直接粘贴的<title>和<meta name=\"description\">标签，用于您的页面。",
      },
      {
        question: "为什么谷歌有时会在真实搜索结果中改写我的标题？",
        answer:
          "当谷歌认为H1标题或页面中的其他文字更符合搜索词时，可能会替换原标题，简洁准确的标题可以减少这类改写。",
      },
      {
        question: "标题里应该包含品牌名或网站名吗？",
        answer:
          "多数情况下应该包含。放在分隔符之后的末尾位置，既能让主要关键词保持在前，又能在搜索结果中展示品牌。",
      },
      {
        question: "标题标签和H1标题有什么区别？",
        answer:
          "标题标签显示在搜索结果和浏览器标签页中，而H1是页面本身可见的大标题。",
      },
      {
        question: "能在SERP摘要预览工具中快速测试多个标题吗？",
        answer:
          "可以。编辑标题栏时，预览、像素宽度和截断警告都会随着输入实时更新。",
      },
      {
        question: "SERP摘要预览工具会考虑发布日期吗？",
        answer:
          "会的。添加日期后可以看到可见描述缩短了多少，这对新闻和博客文章很重要。",
      },
      {
        question: "如果描述在移动端被截断了怎么办？",
        answer:
          "把关键信息和目标关键词移到描述的最前面，这样即使移动端折叠显示，意思依然完整。",
      },
      {
        question: "SERP摘要预览工具的像素宽度检查对所有语言都准确吗？",
        answer:
          "它根据浏览器字体近似真实搜索渲染效果，因此对拉丁字母最准确，其他文字体系的结果可能有所差异。",
      },
    ],
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
    instructions: [
      {
        title: "粘贴规范链接",
        description:
          "在编辑器中每行输入一个完整的https://（或http://）链接，格式错误的行会被清楚标出。",
      },
      {
        title: "检查被标记的无效行",
        description:
          "查看高亮显示的行，修正拼写错误或缺失的https://前缀，因为无效链接会被排除在XML之外。",
      },
      {
        title: "配置可选标签",
        description:
          "可选设置<lastmod>日期、<changefreq>提示和<priority>（也可以省略可选标签，让文件更简洁）。",
      },
      {
        title: "确认去重结果",
        description:
          "确认工具显示的重复数量，确保最终网站地图中每个规范链接只出现一次。",
      },
      {
        title: "预览生成的XML",
        description:
          "检查XML输出，确认urlset、<loc>条目和可选的<lastmod>值都正确无误。",
      },
      {
        title: "复制或下载sitemap.xml",
        description:
          "点击“复制XML”或“下载.xml”，将文件直接放到网站根目录或public/文件夹中。",
      },
    ],
    examples: [
      {
        title: "为Cloudflare Pages静态网站生成网站地图",
        input: "5个规范链接 · lastmod：2026-11-12 · 去重：开启",
        output: "有效的<?xml version=\"1.0\"?> <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">...</urlset>",
        explanation: "在每个<loc>元素内整洁地转义XML实体（&、<、>、引号）。",
      },
      {
        title: "整理包含重复链接的列表",
        input: "8行链接列表（含2个重复链接）· 无lastmod",
        output: "去重后仅含6个<url>条目的sitemap.xml",
        explanation: "重复链接会自动合并为一条，网站地图不会因此膨胀。",
      },
    ],
    benefits: [
      "生成XML前用浏览器原生链接解析验证每一行",
      "自动转义<loc>链接中的&符号和查询字符串特殊字符",
      "自动去除相同链接，防止网站地图臃肿",
      "需要时可整洁地省略谷歌会忽略的<priority>与<changefreq>",
    ],
    useCases: [
      "为静态落地页或文档微型网站制作初始网站地图",
      "网站迁移后准备整洁的链接提交文件",
      "为小型企业网站生成不含图片与新闻的补充网站地图",
      "导出格式规范的XML，与robots.txt一起部署",
    ],
    faqs: [
      {
        question: "网站地图里应该包含非规范链接、重定向链接或noindex页面吗？",
        answer:
          "不应该。网站地图只应列出返回HTTP 200状态、且希望搜索引擎收录的规范链接。",
      },
      {
        question: "谷歌现在还使用<priority>和<changefreq>吗？",
        answer:
          "谷歌搜索会忽略<priority>和<changefreq>标签，主要关注<loc>，以及在确实更新时提供的准确<lastmod>日期。",
      },
      {
        question: "这个生成器会自动抓取我的 live 网站吗？",
        answer:
          "不会。由于浏览器跨域安全限制，客户端页面无法抓取任意网站；请将导出的路由列表粘贴到这里，即可立即生成有效的XML。",
      },
      {
        question: "XML网站地图生成器免费吗？",
        answer:
          "是的，完全免费，而且全部在浏览器内运行，您的链接列表不会被上传到任何服务器。",
      },
      {
        question: "一个网站地图最多可以包含多少个链接？",
        answer:
          "网站地图协议规定每个文件最多50,000个链接或未压缩50MB，大型网站应拆分为多个网站地图或使用网站地图索引文件。",
      },
      {
        question: "网站地图和robots.txt有什么区别？",
        answer:
          "网站地图列出希望搜索引擎发现的链接，robots.txt则是告诉抓取程序哪些路径可以访问、哪些不可以的规则。",
      },
      {
        question: "sitemap.xml文件应该上传到哪里？",
        answer:
          "放在网站根目录，例如https://example.com/sitemap.xml，这样抓取程序就能在标准位置找到它。",
      },
      {
        question: "需要把网站地图提交给谷歌吗？",
        answer:
          "建议提交。在Google Search Console中提交，同时在robots.txt中用Sitemap:行注明，方便其他抓取程序发现。",
      },
      {
        question: "XML网站地图生成器接受哪些链接格式？",
        answer:
          "每行输入一个包含域名的完整https://或http://链接，无效链接的行会被标出。",
      },
      {
        question: "网站地图中的重复链接会怎样处理？",
        answer:
          "重复链接会被自动去除，最终网站地图中每个规范链接只出现一次。",
      },
      {
        question: "XML网站地图生成器如何处理无效或格式错误的链接？",
        answer:
          "无效行会被清楚标出并排除在XML之外，因此一行拼写错误不会破坏整个文件。",
      },
      {
        question: "XML网站地图生成器如何处理链接中的特殊字符？",
        answer:
          "它会对<loc>元素内的&及其他特殊字符进行XML转义，因此查询字符串和编码路径依然有效。",
      },
      {
        question: "普通网站地图里应该包含图片或视频链接吗？",
        answer:
          "标准网站地图只列出页面链接。如果希望图片和视频链接被单独收录，需要使用专门的网站地图扩展。",
      },
      {
        question: "分页或筛选链接应该列入网站地图吗？",
        answer:
          "不应该。只列出规范且可收录的页面，排除分页、排序参数和站内搜索结果页。",
      },
      {
        question: "什么是<lastmod>？应该在网站地图中设置它吗？",
        answer:
          "它记录页面最后一次更改的日期。只有当日期准确时才设置，因为谷歌会用它来判断页面的新鲜程度。",
      },
      {
        question: "XML网站地图生成器可以离线使用吗？",
        answer:
          "可以。它完全在浏览器内运行，无需上传，页面加载后即使没有网络也能制作网站地图。",
      },
      {
        question: "添加新页面后可以重新生成网站地图吗？",
        answer:
          "可以。粘贴更新后的链接列表，下载新的sitemap.xml，再重新上传到网站根目录即可。",
      },
      {
        question: "什么是网站地图索引文件？",
        answer:
          "它是列出多个网站地图文件的文件，大型网站用它来按栏目或语言整理数千个链接。",
      },
      {
        question: "有了网站地图，谷歌就一定会收录我的页面吗？",
        answer:
          "不一定。网站地图帮助搜索引擎发现链接，但是否收录仍取决于页面质量、外部链接和抓取预算。",
      },
      {
        question: "XML网站地图生成器能用于WordPress或Shopify网站吗？",
        answer:
          "可以。从任何平台导出或复制规范链接列表并粘贴到这里，工具就会生成标准的sitemap.xml。",
      },
    ],
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
    instructions: [
      {
        title: "选择入门预设或编辑规则",
        description:
          "点击“全部允许”“标准网站应用/SaaS”“WordPress整洁版”或“测试环境（全部屏蔽）”，加载常用规则。",
      },
      {
        title: "自定义User-agent和路径",
        description:
          "为*或Googlebot、Bingbot、GPTBot等特定抓取程序添加Allow或Disallow路径。",
      },
      {
        title: "按需设置Crawl-delay",
        description:
          "为支持该指令的抓取程序（如Bingbot）添加Crawl-delay值，减缓对小型或共享服务器的请求频率。",
      },
      {
        title: "附加网站地图链接",
        description:
          "输入完整的XML网站地图链接，让抓取程序能从robots.txt发现它；使用多个网站地图时可以添加多行。",
      },
      {
        title: "检查分组输出",
        description:
          "确认每个User-agent区块分组正确，Disallow规则没有误屏蔽CSS、JavaScript或公开页面。",
      },
      {
        title: "复制、下载并测试",
        description:
          "复制或下载robots.txt，放到域名根目录，并用Google Search Console中的robots.txt测试工具验证。",
      },
    ],
    examples: [
      {
        title: "屏蔽/api/与/admin/的SaaS网站应用",
        input: "User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/",
        output: "以Sitemap: https://example.com/sitemap.xml结尾的分组robots.txt文件",
        explanation: "将匹配的User-agent整洁地归入同一个区块。",
      },
      {
        title: "上线前屏蔽整个测试环境",
        input: "预设“测试环境（全部屏蔽）”",
        output: "仅含User-agent: *与Disallow: /的robots.txt",
        explanation: "让整个未上线网站不被抓取。",
      },
    ],
    benefits: [
      "按RFC 9309最佳实践，自动按匹配的User-agent区块分组规则",
      "提供经过验证的入门模板，避免误屏蔽CSS/JS资源",
      "支持多个Sitemap:声明，适用于网站地图索引或多语言文件",
      "一键下载即可获得可直接部署的robots.txt文件",
    ],
    useCases: [
      "防止抓取程序把预算浪费在/api/、/admin/或站内搜索查询链接上",
      "在域名根目录告知XML网站地图的位置",
      "为AdsBot或AI爬虫等特殊机器人添加规则",
      "在DNS上线前配置测试环境",
    ],
    faqs: [
      {
        question: "robots.txt中的Disallow: /admin/能让页面不出现在谷歌搜索中或保护机密信息吗？",
        answer:
          "有一个重要区别：robots.txt阻止的是抓取，如果其他网站直接链接到该链接，页面仍可能被收录；而且robots.txt是公开可读的。敏感路径请用身份验证保护，并用<meta name=\"robots\" content=\"noindex\">防止收录。",
      },
      {
        question: "robots.txt必须放在哪里？",
        answer:
          'robots.txt 必须放在网站主机的根路径，例如 https://yourdomain.com/robots.txt，并且访问时要返回 HTTP 200 状态。放在子目录里的 robots.txt 不会被抓取程序读取，因此一定要确认根路径可以访问。',
      },
      {
        question: "谷歌会遵守Crawl-delay吗？",
        answer:
          "Googlebot会忽略Crawl-delay（需要时请使用Search Console中的设置），而Bing和其他抓取程序仍会遵守数字形式的Crawl-delay间隔。",
      },
      {
        question: "robots.txt生成器免费吗？",
        answer:
          "是的，完全免费，而且全部在浏览器内运行，您的网站规则不会被上传到任何地方。",
      },
      {
        question: "robots.txt和元robots的noindex标签有什么区别？",
        answer:
          "robots.txt告诉抓取程序不要访问某个路径，noindex标签则告诉搜索引擎不要在搜索结果中显示已被抓取的页面，两者解决的问题不同。",
      },
      {
        question: "robots.txt能屏蔽GPTBot这类AI抓取程序吗？",
        answer:
          "可以。添加User-agent: GPTBot分组并设置Disallow: /，即可屏蔽该抓取程序，对其他想屏蔽的AI机器人重复同样做法即可。",
      },
      {
        question: "robots.txt中的“User-agent: *”是什么意思？",
        answer:
          "意思是该分组的规则适用于访问您网站的所有抓取程序，除非更具体的User-agent分组覆盖了它们。",
      },
      {
        question: "robots.txt中的Allow和Disallow有什么区别？",
        answer:
          "Allow允许抓取某个路径，Disallow则屏蔽它。规则重叠时，最具体的匹配规则优先。",
      },
      {
        question: "能用robots.txt生成器屏蔽单个页面或文件夹吗？",
        answer:
          "可以。单个页面添加Disallow: /page/，整个目录添加Disallow: /folder/，即可屏蔽该目录及其全部内容。",
      },
      {
        question: "应该在robots.txt中屏蔽CSS和JavaScript文件吗？",
        answer:
          "不应该。搜索引擎需要CSS和JavaScript才能正确渲染页面，屏蔽它们可能损害排名。",
      },
      {
        question: "robots.txt生成器包含哪些入门预设？",
        answer:
          "包含“全部允许”“标准网站应用/SaaS”“WordPress整洁版”和“测试环境（全部屏蔽）”，可以从经过验证的模板开始，而不是空白文件。",
      },
      {
        question: "如何在robots.txt中添加网站地图？",
        answer:
          "在文件末尾添加一行，如Sitemap: https://example.com/sitemap.xml，抓取程序就能从根目录找到您的网站地图。",
      },
      {
        question: "一个robots.txt文件可以写多行Sitemap吗？",
        answer:
          "可以。可以列出多个网站地图链接，这对网站地图索引或按语言、栏目划分的网站地图很有用。",
      },
      {
        question: "robots.txt生成器会把我的规则上传到别处吗？",
        answer:
          "不会。所有处理都在浏览器本地完成，文件在您的设备上生成。",
      },
      {
        question: "发布后如何测试robots.txt？",
        answer:
          "上传到域名根目录，然后用Google Search Console中的robots.txt测试工具检查，或以Googlebot身份抓取验证。",
      },
      {
        question: "如果不小心用robots.txt屏蔽了整个网站怎么办？",
        answer:
          "搜索引擎会停止抓取您的页面。删除Disallow: /这一行，重新上传文件，并在Search Console中请求重新抓取。",
      },
      {
        question: "robots.txt能把管理页面藏起来不让黑客看到吗？",
        answer:
          "不能。robots.txt是公开可读的，任何人都能看到您屏蔽了哪些路径。敏感页面请用密码或身份验证保护。",
      },
      {
        question: "什么是Crawl-delay？应该在robots.txt中使用它吗？",
        answer:
          "Crawl-delay要求抓取程序在两次请求之间等待指定的秒数。Googlebot会忽略它，但Bing和部分其他抓取程序会遵守。",
      },
      {
        question: "能为Googlebot和Bingbot写不同的robots.txt规则吗？",
        answer:
          '可以。为 Googlebot 和 Bingbot 各自创建一个 User-agent 分组，在每个分组里分别写上 Allow 和 Disallow 行。不同抓取程序会只遵守与自己名字匹配的分组，因此可以为它们设置不同的抓取范围。',
      },
      {
        question: "在Cloudflare Pages或静态网站上，robots.txt放在哪里？",
        answer:
          "把文件放在public/文件夹或构建输出的根目录，这样它就会在https://yourdomain.com/robots.txt下提供服务。",
      },
    ],
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
    instructions: [
      {
        title: "选择Schema.org类型",
        description:
          "在顶部切换器中选择Article、FAQPage、Product、Organization或BreadcrumbList。",
      },
      {
        title: "填写实体属性",
        description:
          "输入标题、问答对、价格信息、组织详情或面包屑导航路径。",
      },
      {
        title: "为列表添加行",
        description:
          "为FAQPage添加问答对，为BreadcrumbList添加导航项，并删除不需要的行。",
      },
      {
        title: "检查生成的JSON-LD",
        description:
          "查看实时JSON输出，确认字段名称和值正确，并确认空白的可选属性已被自动省略。",
      },
      {
        title: "复制<script>标签或导出.jsonld",
        description:
          "将完整的<script type=\"application/ld+json\">代码块复制到页面<head>中，或下载.jsonld文件。",
      },
      {
        title: "发布前验证",
        description:
          "将输出粘贴到富媒体搜索结果测试工具或Schema验证器中检查语法错误，因为无效的JSON-LD会被搜索引擎忽略。",
      },
    ],
    examples: [
      {
        title: "创建动态FAQPage结构化数据",
        input: "FAQPage结构化数据下的2组问答对",
        output: "有效的@context https://schema.org FAQPage JSON-LD脚本块",
        explanation: "使用安全的JSON序列化，将<转义为\\u003c，防止</script>提前终止脚本。",
      },
      {
        title: "为产品页面创建Product结构化数据",
        input: "产品名称“无线耳机”· 价格9800日元 · 有库存",
        output: "包含offers（价格、货币、库存状态）的Product类型JSON-LD",
        explanation: "价格、货币和库存状态是搜索引擎用于购物结果的核心字段。",
      },
    ],
    benefits: [
      "支持5种影响最大的Schema.org结构化数据类型",
      "在JSON-LD内整洁地转义<字符，防止HTML脚本损坏",
      "自动省略空白的可选属性，保持语法整洁",
      "与JSON格式化与验证工具自然搭配，用于自定义扩展",
    ],
    useCases: [
      "为编辑类博客模板添加Article作者信息与发布元数据",
      "为商家信息流结构化产品价格、货币与库存状态",
      "声明全站Organization品牌信息与标志链接",
      "在分类页与工具页嵌入BreadcrumbList层级导航",
    ],
    faqs: [
      {
        question: "JSON-LD结构化数据应该放在网页的什么位置？",
        answer:
          "可以将<script type=\"application/ld+json\">放在<head>内或<body>内，整洁地放在<head>中是标准做法。",
      },
      {
        question: "为什么生成器在JSON输出中把<转义为\\u003c？",
        answer:
          "如果用户的FAQ回答中包含</script>，浏览器会提前终止HTML脚本块；将<转义为\\u003c后仍是100%有效的JSON，可以避免这个问题。",
      },
      {
        question: "添加结构化数据标记能保证在谷歌显示富摘要吗？",
        answer:
          "不能。有效的结构化数据只是让页面有资格获得增强搜索展示，是否显示由搜索引擎根据页面整体质量和指南决定。",
      },
      {
        question: "结构化数据标记生成器免费吗？",
        answer:
          "是的，完全免费，而且全部在浏览器内运行，您的内容不会被上传到任何服务器。",
      },
      {
        question: "结构化数据标记生成器支持哪些Schema.org类型？",
        answer:
          '支持 Article、FAQPage、Product、Organization 和 BreadcrumbList 五种类型，覆盖了最常见的富媒体搜索结果使用场景。选好类型后按提示填写字段，工具会生成对应的 JSON-LD 代码块。',
      },
      {
        question: "JSON-LD和Microdata有什么区别？",
        answer:
          "JSON-LD是粘贴到页面中的独立<script>代码块，而Microdata是直接在可见HTML元素上添加属性的方式。",
      },
      {
        question: "如何把生成的JSON-LD添加到网站上？",
        answer:
          '复制工具生成的完整 <script type="application/ld+json"> 代码块，粘贴到对应页面的 <head> 中。保存并发布页面后，可以用谷歌的富媒体搜索结果测试工具检查标记是否被正确识别。',
      },
      {
        question: "生成后如何测试结构化数据标记？",
        answer:
          "将页面链接或代码粘贴到富媒体搜索结果测试工具或Schema.org验证器中，检查错误和可获得的增强展示。",
      },
      {
        question: "一个页面可以组合多种结构化数据类型吗？",
        answer:
          "可以。单个页面可以同时包含Article、BreadcrumbList和FAQPage标记，作为各自独立的JSON-LD代码块。",
      },
      {
        question: "什么是FAQPage结构化数据？什么时候应该使用它？",
        answer:
          "在以可见形式展示问题与回答列表的页面（如帮助页面）上使用，搜索引擎可以将它们显示为可展开的搜索结果。",
      },
      {
        question: "生成器支持Product结构化数据的哪些字段？",
        answer:
          "支持产品名称、价格、货币和库存状态，这些是搜索引擎用于购物结果的核心字段。",
      },
      {
        question: "BreadcrumbList结构化数据有什么用？",
        answer:
          "它描述页面的导航层级，例如“首页 > 指南 > 主题”，让搜索引擎可以在搜索结果中显示面包屑导航。",
      },
      {
        question: "Organization结构化数据有什么用？",
        answer:
          "它声明品牌信息，包括名称、标志和官方网站，让搜索引擎能够显示一致的知识面板。",
      },
      {
        question: "结构化数据标记生成器会把我的内容上传到别处吗？",
        answer:
          "不会。所有标记都在浏览器本地生成，您输入的任何内容都不会离开您的设备。",
      },
      {
        question: "能把结构化数据导出为.jsonld文件吗？",
        answer:
          "可以。点击导出按钮即可下载独立的.jsonld文件，方便保存、版本管理或交给开发人员。",
      },
      {
        question: "如果JSON-LD有语法错误会怎样？",
        answer:
          "整个代码块可能被搜索引擎忽略，因此发布前务必用富媒体搜索结果测试工具验证输出。",
      },
      {
        question: "结构化数据标记生成器能用于食谱或活动页面吗？",
        answer:
          "生成器只支持五种类型，因此Recipe和Event页面需要手写JSON-LD，同样可以用这些工具验证。",
      },
      {
        question: "结构化数据中的FAQ答案应该与页面可见文字一致吗？",
        answer:
          "是的。谷歌要求结构化数据与用户在页面上实际看到的内容一致，否则标记可能被忽略。",
      },
      {
        question: "能手动编辑生成的JSON-LD吗？",
        answer:
          "可以。它是标准的JSON，可以在任何编辑器中添加或修改字段，发布前重新验证结果即可。",
      },
      {
        question: "结构化数据标记生成器可以离线使用吗？",
        answer:
          "可以。它完全在浏览器内运行，无需上传，页面加载后即使没有网络也能制作结构化数据标记。",
      },
    ],
  },
  "url-slug-generator": {
    slug: "url-bieming-shengchengqi",
    name: "URL别名与SEO路径优化工具",
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
    instructions: [
      {
        title: "输入标题或页面名称",
        description:
          "在“页面标题”文本框中每行粘贴一个标题（可粘贴多个）。",
      },
      {
        title: "设置别名格式规则",
        description:
          "输入基础域名，选择连字符（-）或下划线（_），设置别名最大长度，并切换停用词或尾部斜杠选项。",
      },
      {
        title: "预览生成的别名",
        description:
          "查看结果表格，检查重音字符转写、停用词去除情况，以及长别名在单词边界处的截断位置。",
      },
      {
        title: "调整长度或停用词设置",
        description:
          "如果别名失去原意或截断得不自然，可以提高最大长度或关闭停用词去除，然后重新生成。",
      },
      {
        title: "单独或批量复制别名",
        description:
          "从表格中单独复制别名，或一键导出全部别名或完整链接。",
      },
      {
        title: "已上线别名不要在无重定向时更改",
        description:
          "如果更改已收录页面的别名，请从旧链接添加301重定向，让外链权重和排名顺利转移到新链接。",
      },
    ],
    examples: [
      {
        title: "从标题中去除停用词和重音符号",
        input: "10 Best Café & Productivity Tools in 2026",
        output: "10-best-cafe-and-productivity-tools-2026",
        explanation: "将é转写为e，把&展开为and，去除“in”，并用连字符连接小写单词。",
      },
      {
        title: "从英文标题生成去除停用词的别名",
        input: "The Ultimate Guide to Remote Work in 2026",
        output: "ultimate-guide-remote-work-2026",
        explanation: "去除“the”“to”“in”等停用词，只保留核心意义的单词。",
      },
    ],
    benefits: [
      "同时批量处理数十个编辑日历标题",
      "过长的别名在连字符或单词边界处截断，不会切断单词",
      "即使开启停用词去除，短别名也会保持完整，保留核心意义",
      "遵循谷歌URL结构建议（使用UTF-8 ASCII连字符而非下划线）",
    ],
    useCases: [
      "在上线博客分类或CMS合集前规划整洁的URL结构",
      "将带重音的国际产品标题整理为ASCII安全的别名",
      "审核过长的CMS固定链接，精简为4–6个单词的清晰路径",
      "准备规范链接目标列表，供XML网站地图生成器使用",
    ],
    faqs: [
      {
        question: "SEO的URL别名应该用连字符（-）还是下划线（_）？",
        answer:
          "谷歌建议在URL中使用连字符（-）作为单词分隔符，因为搜索解析器把连字符当作空格，而下划线会把相邻单词连接在一起。",
      },
      {
        question: "去除停用词会损害可读性吗？",
        answer:
          "去除“a”“the”“of”这类短填充词可以让很长的博客别名更简洁。如果去除后改变了核心意义（例如“how to”），请保留停用词。",
      },
      {
        question: "应该更改已收录的在线链接的别名吗？",
        answer:
          "只有在能部署从旧别名到新别名的永久301重定向时才更改（可使用我们的规范与301重定向生成器），这样外链权重和排名才能顺利转移。",
      },
      {
        question: "URL别名生成器免费吗？",
        answer:
          "是的，完全免费，无需注册，一次会话中转换的标题数量也没有限制。",
      },
      {
        question: "能一次为多个标题生成别名吗？",
        answer:
          "可以。每行粘贴一个标题，工具会在一张表格中批量转换，因此可以一次为整个编辑日历生成别名。",
      },
      {
        question: "别名中的重音字符如何处理？",
        answer:
          "重音符号会被转写为纯ASCII字符——é变成e，ü变成u，ñ变成n，因此链接在任何浏览器和服务器上都易读且安全。",
      },
      {
        question: "别名中的&和@等符号会怎样处理？",
        answer:
          "与号（&）会展开为“and”，其他大多数标点会被去除，因为链接中的符号可能破坏链接，或在分享时显得杂乱。",
      },
      {
        question: "什么是停用词？为什么要去除它们？",
        answer:
          "停用词是“a”“the”“of”“in”这类短填充词。去除它们可以在不改变核心意义的前提下缩短很长的博客别名。",
      },
      {
        question: "能在别名中保留停用词吗？",
        answer:
          "可以。关闭停用词去除开关后，生成器会保留标题中的每个单词，包括短填充词。",
      },
      {
        question: "SEO别名的理想长度是多少？",
        answer:
          "建议使用3–6个有意义的单词。通过别名最大长度设置保持简短，工具会在单词边界处截断，单词永远不会被切断。",
      },
      {
        question: "URL别名应该用小写吗？",
        answer:
          "是的。小写别名可以避免重复内容问题，因为某些服务器会把/Blog-Post和/blog-post当作不同页面。",
      },
      {
        question: "能在别名中使用下划线代替连字符吗？",
        answer:
          "可以在设置中选择下划线，但建议使用连字符，因为搜索引擎把连字符当作单词分隔符，把下划线当作连接符。",
      },
      {
        question: "我的标题会被上传到别处吗？",
        answer:
          "不会。URL别名生成器完全在浏览器内运行，您的标题不会离开您的设备。",
      },
      {
        question: "如何用我的域名预览完整链接？",
        answer:
          "在“基础域名”栏中输入域名，结果表格会把每个别名显示为可复制的完整链接。",
      },
      {
        question: "别名应该以尾部斜杠结尾吗？",
        answer:
          "可选，但要保持一致：使用尾部斜杠开关匹配网站已有的URL风格，避免产生重复版本。",
      },
      {
        question: "这个工具能用于产品页和分类页吗？",
        answer:
          "可以。适用于任何页面名称——产品标题、分类名称、落地页和文档标题都以同样方式转换。",
      },
      {
        question: "为什么我的别名比设置的最大长度截得更短？",
        answer:
          "工具会在限制之前最近的连字符处截断，而不是切断单词，因此别名可能比最大长度短几个字符。",
      },
      {
        question: "用非拉丁文字写的标题会怎样处理？",
        answer:
          "只有拉丁重音符号会被转写，其他文字体系的字符会被去除，因此完全用其他文字写的标题可能生成很短的别名。想获得最佳效果，请添加关键词的拉丁文字版本。",
      },
      {
        question: "能一次导出所有别名吗？",
        answer:
          "可以。使用批量复制按钮，一键复制全部别名或全部完整链接，无需逐个复制。",
      },
      {
        question: "别名和固定链接有什么区别？",
        answer:
          "别名是URL末尾易读的部分，例如“best-cafe-tools”，而固定链接是包含域名和文件夹的完整链接。",
      },
    ],
  },
  "keyword-density-checker": {
    slug: "guanjianzi-midu-jianchaqi",
    name: "关键词密度与内容分析工具",
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
    instructions: [
      {
        title: "粘贴文章草稿或HTML",
        description:
          "插入纯文本或原始HTML（保持“去除HTML标签”开启，可忽略标记标签和script/style代码块）。",
      },
      {
        title: "输入目标短语和N元词组大小",
        description:
          "指定可选的目标关键词/短语，并在1词、2词和3词短语分析之间切换。",
      },
      {
        title: "查看频率表",
        description:
          "查看出现频率最高的词及其占比（%），确认主题焦点，删减不自然的短语重复。",
      },
      {
        title: "检查字数、阅读时长和词汇量",
        description:
          "用总字数、唯一词占比和阅读时长判断草稿是太单薄、太长还是太重复。",
      },
      {
        title: "自然地改写过度使用的短语",
        description:
          "当同一个2词或3词短语占据频率表时，用同义词和代词替换，而不是把主题关键词整个删掉。",
      },
      {
        title: "先修正异常数字再相信结果",
        description:
          "如果数字看起来不对，请确认“去除HTML标签”已开启，并且导航菜单、代码块或页脚没有和正文一起粘贴进来。",
      },
    ],
    examples: [
      {
        title: "在500词草稿中发现无意的短语重复",
        input: "草稿文章 + 目标：“technical seo”+ 2词短语",
        output: "按占比（%）列出排名最高的二元词组（“technical seo”“meta descriptions”“canonical tags”）。",
        explanation: "既能突出主要主题的一致性，也能发现可以自然变化的重复表达。",
      },
      {
        title: "在600词文章中测量目标关键词密度",
        input: "600词草稿 + 目标“on-page SEO”出现6次",
        output: "密度1.0%（6 ÷ 600），处于自然范围，主题表达充分。",
        explanation: "密度等于出现次数除以总字数，600词中出现6次正好是1.0%。",
      },
    ],
    benefits: [
      "不仅分析单个词，还分析多词短语（二元词组和三元词组）",
      "计数前安全去除<script>、<style>和HTML标签",
      "包含诚实的使用指导，提醒不要机械地堆砌关键词",
      "未发布的草稿和客户文案严格保存在浏览器内存中",
    ],
    useCases: [
      "编辑长篇指南，确保主要主题清晰呈现且没有生硬堆砌",
      "审核草稿的主题词汇平衡（无需参考竞争对手）",
      "检查从导出HTML中整洁剥离的落地页文案",
      "结合字数统计器和可读性检查器查看平均阅读时长",
    ],
    faqs: [
      {
        question: "谷歌有理想的关键词密度百分比吗？",
        answer:
          "没有。谷歌明确表示不存在固定的关键词密度阈值。请为读者自然写作，密度审核只用来检查主题覆盖面和避免不自然的重复。",
      },
      {
        question: "“去除HTML标签”如何处理<script>和<style>元素？",
        answer:
          "它会在去除其余HTML标签之前，先完整删除<script>和<style>代码块，因此JavaScript或CSS代码不会污染字数统计。",
      },
      {
        question: "输入域名就能分析竞争对手的在线页面吗？",
        answer:
          "不能。请直接粘贴文本或HTML源代码——没有服务器代理时，浏览器应用无法跨域抓取第三方网站。",
      },
      {
        question: "关键词密度检查器免费吗？",
        answer:
          '是的，完全免费，无需注册。您可以粘贴任意数量的内容草稿进行分析，工具会在浏览器本地统计目标短语的出现次数与 N 元词组频率，帮助发现无意中的过度重复。',
      },
      {
        question: "关键词密度到底是什么？",
        answer:
          "关键词密度是指某个词或短语的出现次数占文本总字数的百分比。500词中出现5次的短语，密度就是1%。",
      },
      {
        question: "什么是关键词堆砌？",
        answer:
          "关键词堆砌是指仅为提升排名而不自然地反复使用某个短语。访客读起来会觉得别扭，还可能损害排名，因此请用这个工具发现重复，而不是追求某个目标数字。",
      },
      {
        question: "什么是N元词组？为什么要检查2词和3词短语？",
        answer:
          "N元词组是由n个词组成的序列——二元词组是2词短语，三元词组是3词短语。检查它们可以发现单字计数完全遗漏的重复短语。",
      },
      {
        question: "有意义的密度检查需要多少词？",
        answer:
          "短文本的百分比波动很大，因此建议至少300词才能获得稳定的结果。非常短的片段仍会显示原始出现次数，但百分比要谨慎看待。",
      },
      {
        question: "工具会统计标题和列表中的词吗？",
        answer:
          "会的。您粘贴的所有可见文本都会被统计，包括标题、项目符号列表和图片说明，因为搜索引擎同样会看到这些内容。",
      },
      {
        question: "为什么我的目标短语显示为0%？",
        answer:
          "请检查拼写和措辞是否完全一致——复数形式、连字符和词序都必须匹配。如果粘贴的是HTML，还要确认“去除HTML标签”已开启。",
      },
      {
        question: "能一次检查多个关键词的密度吗？",
        answer:
          "每次运行只跟踪一个目标短语。要检查另一个关键词，请更改目标短语，对同一文本再次运行分析。",
      },
      {
        question: "检查器会统计“the”和“and”这类停用词吗？",
        answer:
          "会的，它们会出现在1词频率表中，但请关注主题词和短语——停用词在任何文本中都自然高频，对SEO几乎没有参考价值。",
      },
      {
        question: "我的草稿会被上传到别处吗？",
        answer:
          "不会。关键词密度检查器完全在浏览器内运行，未发布的草稿和客户文案不会离开您的设备。",
      },
      {
        question: "博客文章的阅读时长多少比较合适？",
        answer:
          "取决于主题，工具会显示阅读时长，方便您判断文章是否符合读者预期——简短指南可能约3分钟，深入教程可能10分钟以上。",
      },
      {
        question: "能粘贴从CMS复制的HTML吗？",
        answer:
          "可以。粘贴原始HTML并保持“去除HTML标签”开启，标签、脚本和样式会在计数前被去除。",
      },
      {
        question: "检查器支持非英文文本吗？",
        answer:
          "支持。字数统计适用于任何用空格分隔单词的语言，N元词组表会列出该语言中出现频率最高的短语。",
      },
      {
        question: "如何在不删除主题的前提下降低密度？",
        answer:
          "用同义词、代词和不同表达方式代替反复出现的原关键词。主题依然清晰，文本读起来也更自然。",
      },
      {
        question: "什么是词汇多样性？",
        answer:
          "它是唯一词占总字数的比例。比例越高通常意味着写作更丰富、更多变，比例非常低则可能表示文案重复过多。",
      },
      {
        question: "能分析PDF或Word文档吗？",
        answer:
          "工具接受粘贴的文本，因此请从PDF或Word文件中复制文本并粘贴进来——密度检查不需要格式。",
      },
      {
        question: "为什么切换N元词组大小后百分比会变化？",
        answer:
          "每种N元词组大小都有各自的总数：500词的文本有500个单词，但只有499个2词短语，因此同样的出现次数会产生略有不同的百分比。",
      },
    ],
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
    instructions: [
      {
        title: "选择Hreflang或301重定向",
        description:
          "为国际SEO选择“规范与Hreflang标签”，为链接迁移选择“301重定向规则生成器”。",
      },
      {
        title: "输入语言地区或链接迁移对",
        description:
          "添加ISO语言-地区代码（en-US、en-GB、x-default）和链接，或粘贴旧路径到新路径的对应关系。",
      },
      {
        title: "检查生成的标签或规则",
        description:
          "复制前逐一检查每个语言代码、链接和重定向对是否有拼写错误——一个错误的代码可能破坏整套hreflang标注。",
      },
      {
        title: "添加x-default与自引用规范链接",
        description:
          "添加x-default回退语言，并确保每个页面都把自身列为自己的规范链接。",
      },
      {
        title: "复制适用于各平台的配置",
        description:
          "直接复制HTML <link>标签、<xhtml:link> XML行，或_redirects / .htaccess / nginx规则。",
      },
      {
        title: "部署后验证",
        description:
          "上线后查看页面源代码或使用hreflang验证工具，确认标签存在、相互对应，并指向正确的链接。",
      },
    ],
    examples: [
      {
        title: "Cloudflare Pages 301迁移规则",
        input: "/old-blog-post, /blog/new-post/",
        output: "/old-blog-post /blog/new-post/ 301",
        explanation: "输出精确的Cloudflare Pages _redirects语法，并明确标注301永久状态。",
      },
      {
        title: "英美双语页面的hreflang标签组合",
        input: "en-US: https://example.com/us/page · en-GB: https://example.com/uk/page · x-default: https://example.com/page",
        output: "<link rel=\"alternate\" hreflang=\"en-US\" href=\"...\">、hreflang=\"en-GB\"与hreflang=\"x-default\"标签组合",
        explanation: "每个语言版本都相互引用，并包含x-default回退页面。",
      },
    ],
    benefits: [
      "一致输出HTML <link rel=\"alternate\">和XML <xhtml:link>两种格式",
      "支持Cloudflare Pages _redirects、Apache .htaccess和Nginx服务器语法",
      "鼓励使用自引用规范链接和x-default回退语言",
      "自动规范化重定向源路径的前导斜杠",
    ],
    useCases: [
      "整洁上线英文/西班牙文/法文本地化页面，避免重复内容惩罚",
      "改版期间重命名别名时保留外链权重",
      "几秒内生成Cloudflare Pages /public/_redirects部署文件",
      "提交国际网站地图前验证相互对应的hreflang组合",
    ],
    faqs: [
      {
        question: "hreflang标签必须是双向/相互对应的吗？",
        answer:
          "是的。如果页面A用hreflang=\"es\"链接到页面B，页面B必须用hreflang=\"en\"（以及指向自身）链接回页面A，否则搜索引擎会忽略该标注。",
      },
      {
        question: "什么时候应该在hreflang中使用x-default？",
        answer:
          "当访客的浏览器语言/地区与任何具体备用版本都不匹配时，用hreflang=\"x-default\"指定回退的国际页面。",
      },
      {
        question: "规范链接应该跨语言指向吗（例如西语版指向英语版）？",
        answer:
          "不应该。每个翻译版本都应声明指向自身的自引用规范链接，而hreflang负责连接各个本地化版本。",
      },
      {
        question: "Hreflang生成器免费吗？",
        answer:
          "是的，完全免费，无需注册，可以生成任意数量的hreflang组合和重定向规则。",
      },
      {
        question: "什么是hreflang？为什么它很重要？",
        answer:
          "hreflang是HTML或XML标注，告诉搜索引擎向每位访客展示哪个语言和地区版本的页面，这样英语用户看到英文页面，西班牙语用户看到西班牙语页面。",
      },
      {
        question: "语言-地区代码应该用什么格式？",
        answer:
          "使用ISO语言代码加可选的ISO地区代码，如en、es、fr-CA或en-GB。语言在前，然后是连字符，地区用大写字母。",
      },
      {
        question: "网站只有一种语言时需要hreflang吗？",
        answer:
          "不需要。hreflang只在同一内容存在多种语言或地区版本时才有用。",
      },
      {
        question: "能把hreflang放在XML网站地图而不是HTML中吗？",
        answer:
          "可以。工具会输出两种格式：页面head用的HTML链接标签和XML网站地图用的xhtml:link代码块。选择一处并保持一致即可。",
      },
      {
        question: "什么是自引用规范链接？",
        answer:
          "它是页面上指向页面自身的规范标签。每个版本的页面都应包含一个，包括每个翻译版本。",
      },
      {
        question: "什么时候应该用301重定向而不是规范标签？",
        answer:
          "当页面永久迁移到新链接时使用301重定向；当两个相似页面必须同时存在、只希望搜索引擎优先选择其中一个时使用规范标签。",
      },
      {
        question: "301重定向和302重定向有什么区别？",
        answer:
          "301是永久重定向，会把大部分排名信号传递给新链接；302是临时重定向，告诉搜索引擎旧链接可能恢复，因此不适合永久迁移。",
      },
      {
        question: "Cloudflare Pages的_redirects如何工作？",
        answer:
          "在网站public文件夹中放置_redirects文件，每行一条规则——旧路径、新路径和状态码——网站部署时Cloudflare会应用这些重定向。",
      },
      {
        question: "能用一条规则重定向整个文件夹吗？",
        answer:
          "工具按链接对输出一条规则。如需整体迁移文件夹，请在Cloudflare Pages或Apache中使用通配符规则，或在这里生成完整的链接对列表。",
      },
      {
        question: "301重定向会把排名信号传递给新页面吗？",
        answer:
          "会的。301重定向会把旧页面的大部分排名信号和链接价值传递给新链接，因此它是永久迁移的标准选择。",
      },
      {
        question: "301重定向后，旧链接应该留在网站地图中吗？",
        answer:
          "不应该。从网站地图中删除已重定向的链接，只列出新的目标链接，让搜索引擎抓取当前页面。",
      },
      {
        question: "301重定向应该保留多久？",
        answer:
          "至少保留一年，最好永久保留。过早删除可能破坏仍指向旧链接的外链和书签。",
      },
      {
        question: "hreflang能解决重复内容问题吗？",
        answer:
          "单靠它不能。hreflang告诉搜索引擎向不同受众展示哪个版本，但同一语言中真正重复的页面仍需要规范标签或内容合并。",
      },
      {
        question: "使用错误的语言地区代码会怎样？",
        answer:
          "搜索引擎会忽略无效代码，因此像en-UK（应为en-GB）这样的拼写错误会悄悄破坏对应的语言版本。部署前请仔细检查每个代码。",
      },
      {
        question: "我的链接列表会被上传到别处吗？",
        answer:
          "不会。规范链接、Hreflang与301重定向生成器完全在浏览器内运行，您的链接和迁移计划不会离开您的设备。",
      },
      {
        question: "能为两种以上的语言生成hreflang标签吗？",
        answer:
          "可以。添加任意数量的语言地区行，工具会生成覆盖您输入的所有语言版本的完整相互对应组合。",
      },
    ],
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
    instructions: [
      {
        title: "从页面复制HTML源代码",
        description:
          "打开“查看页面源代码”（或检查构建后的dist/index.html），将HTML粘贴到源代码文本框中。",
      },
      {
        title: "查看DOM审核评分与检查清单",
        description:
          "检查标题、元描述、唯一H1、规范链接、alt文本和结构化数据的通过/警告提示。",
      },
      {
        title: "验证标题大纲与链接",
        description:
          "浏览提取的H1–H4结构树和内部/外部链接统计，修正跳过的层级或缺失的标签。",
      },
      {
        title: "按优先级修复警告",
        description:
          "先处理缺失或过长的标题和元描述，再处理重复的H1标签，最后处理缺失的图片alt文本。",
      },
      {
        title: "修复后重新粘贴并重新审核",
        description:
          "粘贴更新后的HTML并再次运行审核，确认评分提高且没有出现新的警告。",
      },
      {
        title: "用正确方式审核JavaScript渲染的页面",
        description:
          "如果React或单页应用页面的元标签在原始“查看源代码”中缺失，请从浏览器开发者工具Elements面板复制实时的outerHTML。",
      },
    ],
    examples: [
      {
        title: "审核渲染后的静态HTML导出文件",
        input: "包含<title>、<meta description>、H1/H2和JSON-LD的完整<html>文档",
        output: "6/6项检查通过 · H1–H4大纲 + 内部/外部链接明细",
        explanation: "使用浏览器原生DOMParser整洁解析，不执行不可信脚本。",
      },
      {
        title: "发现缺失alt文本与重复H1的博客模板",
        input: "CMS博客模板的HTML源代码（含2个H1和3张无alt图片）",
        output: "审核报告：重复H1警告1项，缺失alt文本警告3项，评分降低",
        explanation: "检查清单逐项标出需要修复的问题，便于按优先级处理。",
      },
    ],
    benefits: [
      "使用原生DOMParser（绝不执行粘贴的<script>标签或外部内容）",
      "坦诚说明浏览器跨域限制——绝不假装可以抓取被屏蔽的远程链接",
      "整洁提取完整的H1–H4文档大纲",
      "在检查经典SEO标签的同时验证Open Graph和JSON-LD",
    ],
    useCases: [
      "上线前对测试版本和静态HTML导出文件进行质量检查",
      "检查CMS博客模板是否意外出现重复<h1>标签或空alt属性",
      "验证服务器渲染页面是否整洁输出规范链接和元标签",
      "检查云端抓取程序无法访问的需登录页面或本地HTML页面",
    ],
    faqs: [
      {
        question: "为什么这个工具让我粘贴HTML源代码，而不是输入网站链接？",
        answer:
          "浏览器执行跨域资源共享（CORS）策略，阻止客户端JavaScript读取任意外部网站，而且本地或私有测试链接也无法从公共服务器访问。粘贴“查看页面源代码”的内容可以让本地审核100%可靠且私密。",
      },
      {
        question: "用原始“查看页面源代码”能正确审核JavaScript渲染的单页应用吗？",
        answer:
          "对于React在运行时注入元标签的客户端渲染单页应用，请从Chrome/Firefox开发者工具Elements面板复制实时的outerHTML，而不是原始的查看源代码。",
      },
      {
        question: "DOMParser会执行粘贴HTML中的脚本吗？",
        answer:
          "不会。DOMParser.parseFromString(..., \"text/html\")只构建用于检查的惰性DOM树，不运行JavaScript，也不加载外部图片。",
      },
      {
        question: "页面SEO检查器免费吗？",
        answer:
          '是的，完全免费，无需注册。您可以粘贴任意数量页面的 HTML 源代码进行审核，工具会在浏览器本地检查标题、元描述、标题层级与链接，文件不会上传。',
      },
      {
        question: "标题标签的理想长度是多少？",
        answer:
          "建议50–60个字符。过长的标题会在搜索结果中被截断，过短的标题则浪费了清晰描述页面的机会。",
      },
      {
        question: "元描述的理想长度是多少？",
        answer:
          "建议150–160个字符。这个长度通常能在搜索结果中完整显示，不会被截断。",
      },
      {
        question: "一个页面应该有几个H1标签？",
        answer:
          "一个。单个H1说明页面的主要主题，子主题应放在其下的H2和H3标题中。",
      },
      {
        question: "可以跳过标题层级吗，例如H1之后直接用H3？",
        answer:
          "请避免。保持层级顺序——H1、然后H2、然后H3——这样搜索引擎和屏幕阅读器才能理解页面结构。",
      },
      {
        question: "如果页面没有规范标签会怎样？",
        answer:
          "搜索引擎会自行选择一个规范链接，可能不是您希望的版本。明确添加规范标签可以消除这种猜测。",
      },
      {
        question: "图片alt文本为什么对SEO重要？",
        answer:
          "alt文本向搜索引擎和屏幕阅读器描述图片内容，帮助图片在图片搜索中获得排名，并在图片加载失败时保持页面可用。",
      },
      {
        question: "什么是JSON-LD？为什么要检查它？",
        answer:
          "JSON-LD是向搜索引擎描述页面内容的结构化数据块，可驱动评分、FAQ和面包屑等富媒体搜索结果。检查器会确认它是否存在。",
      },
      {
        question: "检查器会审核Open Graph标签吗？",
        answer:
          "会的。它会报告og:title和og:image等Open Graph标签是否存在，确保页面在社交媒体分享时能正确预览。",
      },
      {
        question: "能审核需要登录的页面吗？",
        answer:
          "可以。因为由您自己粘贴HTML，所以可以审核公共抓取程序无法访问的私有页面、测试页面和本地页面。",
      },
      {
        question: "我的HTML会被上传到别处吗？",
        answer:
          "不会。页面SEO检查器完全在浏览器内运行，您的页面源代码不会离开您的设备。",
      },
      {
        question: "审核评分很低——应该先修复什么？",
        answer:
          "按这个顺序修复：缺失或过长的标题、缺失的元描述、重复的H1标签，然后是缺失的图片alt文本。",
      },
      {
        question: "检查器会统计内部链接和外部链接吗？",
        answer:
          "会的。它会分别统计内部链接和外部链接，让您了解页面外链是否足够、内部导航是否存在。",
      },
      {
        question: "能用同一个工具审核首页和博客文章吗？",
        answer:
          "可以。逐个粘贴每个页面的HTML源代码并分别审核——每个页面都有自己的评分和检查清单。",
      },
      {
        question: "为什么有些检查显示警告而不是失败？",
        answer:
          "警告标记的是值得修复但并非严重错误的最佳实践问题，例如标题略长或标题层级被跳过。",
      },
      {
        question: "它适用于WordPress页面吗？",
        answer:
          "适用。在任何WordPress页面上打开“查看页面源代码”，复制HTML并粘贴进来即可——检查器适用于任何CMS输出的页面。",
      },
      {
        question: "应该多久运行一次页面SEO审核？",
        answer:
          "每次更改模板、发布新页面类型或改版后都运行一次，修复后重新审核，确认评分有所提高。",
      },
    ],
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
    instructions: [
      {
        title: "选择收录与链接指令",
        description:
          "设置index/noindex、follow/nofollow，以及noarchive、nosnippet或noimageindex等可选限制。",
      },
      {
        title: "调整摘要与预览上限",
        description:
          "配置max-snippet（-1表示不限）、max-image-preview（large适用于谷歌Discover）和max-video-preview。",
      },
      {
        title: "复制HTML标签或HTTP响应头",
        description:
          "在<head>内使用HTML元标签，或为PDF和非HTML下载文件部署X-Robots-Tag响应头代码块。",
      },
      {
        title: "选择正确的输出格式",
        description:
          "普通页面使用HTML元标签，PDF及其他非HTML文件使用X-Robots-Tag，Cloudflare路径规则使用_headers代码块。",
      },
      {
        title: "把输出放在正确位置",
        description:
          "将元标签放入页面<head>，或把响应头规则添加到服务器配置或Cloudflare _headers文件，然后部署。",
      },
      {
        title: "页面仍显示在搜索结果中？",
        description:
          "noindex只有在搜索引擎重新抓取页面后才生效，可能需要几天时间。请确认robots.txt没有阻止抓取，然后在Search Console中确认。",
      },
    ],
    examples: [
      {
        title: "通过Cloudflare Pages _headers排除私有PDF下载",
        input: "noindex, nofollow · 路径：/private/*",
        output: "/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1",
        explanation: "HTTP X-Robots-Tag适用于没有<head>元素的PDF、图片和非HTML文件。",
      },
      {
        title: "为文章页面设置max-snippet与大图预览",
        input: "index, follow · max-snippet: 160 · max-image-preview: large",
        output: "<meta name=\"robots\" content=\"index, follow, max-snippet:160, max-image-preview:large\">",
        explanation: "限制摘要长度的同时允许大图预览，适合争取谷歌Discover展示。",
      },
    ],
    benefits: [
      "同时输出HTML <meta>、通用HTTP X-Robots-Tag和Cloudflare Pages _headers",
      "包含谷歌Discover推荐的max-image-preview:large默认值",
      "自动防止冲突组合（启用nosnippet/noimageindex时禁用摘要/图片滑块）",
      "通过HTTP响应头轻松实现非HTML格式PDF/资源的取消收录",
    ],
    useCases: [
      "防止感谢页面、站内搜索结果或会员门户进入谷歌索引",
      "通过X-Robots-Tag响应头取消托管的PDF宣传册或白皮书的收录",
      "为面向谷歌Discover的编辑文章启用max-image-preview:large",
      "为付费或敏感文档添加严格的noarchive或摘要长度上限",
    ],
    faqs: [
      {
        question: "什么时候应该用X-Robots-Tag而不是<meta name=\"robots\">？",
        answer:
          "对非HTML文件（如PDF、电子表格或图片）使用X-Robots-Tag HTTP响应头，或者通过CDN规则对整个文件夹路径应用收录规则时也使用它。",
      },
      {
        question: "应该把robots.txt的Disallow和<meta name=\"robots\" content=\"noindex\">一起用吗？",
        answer:
          "不应该！如果某个链接在robots.txt中被屏蔽，搜索机器人就无法抓取页面，也就读不到其中的HTML <meta name=\"robots\" content=\"noindex\">标签。如果依赖元noindex，请允许抓取。",
      },
      {
        question: "max-snippet:-1是什么意思？",
        answer:
          "值为-1时，搜索引擎可以自行选择认为有帮助的任意摘要长度；0表示不显示文本摘要，正整数（如160）则限制摘要字符长度。",
      },
      {
        question: "Robots元标签生成器免费吗？",
        answer:
          "是的，完全免费，无需注册，可以生成任意数量的标签和响应头规则。",
      },
      {
        question: "noindex是做什么的？",
        answer:
          "noindex告诉搜索引擎不要把页面包含在搜索结果中。页面仍然在线且可以访问，但不会出现在谷歌或必应上。",
      },
      {
        question: "nofollow是做什么的？",
        answer:
          "nofollow告诉搜索引擎不要跟踪页面上的链接，也不要通过它们传递排名信号，适用于包含不可信或付费链接的页面。",
      },
      {
        question: "robots.txt和robots元标签有什么区别？",
        answer:
          "robots.txt阻止抓取某个链接，而robots元标签控制已被抓取的页面是否被收录。两者解决的问题不同，不能随意组合使用。",
      },
      {
        question: "noindex需要多久才能生效？",
        answer:
          "只有在搜索引擎重新抓取页面后才生效，根据页面被访问的频率，可能需要几天或几周。",
      },
      {
        question: "什么是max-image-preview:large？",
        answer:
          "它允许搜索引擎为您的页面显示大图预览，谷歌推荐面向Google Discover的页面使用它。",
      },
      {
        question: "nosnippet是做什么的？",
        answer:
          "nosnippet阻止搜索引擎在搜索结果中为页面显示任何文本摘要，只显示标题和链接。",
      },
      {
        question: "noarchive是做什么的？",
        answer:
          "noarchive阻止搜索引擎提供页面的缓存副本，适用于时效性强或频繁变化的内容。",
      },
      {
        question: "noimageindex是做什么的？",
        answer:
          "noimageindex告诉搜索引擎不要收录页面上的图片，而页面本身仍可出现在普通搜索结果中。",
      },
      {
        question: "能对PDF文件设置noindex吗？",
        answer:
          "可以。PDF没有HTML head，因此请使用X-Robots-Tag HTTP响应头——本工具会为您生成准确的响应头代码块。",
      },
      {
        question: "应该对感谢页和结账页设置noindex吗？",
        answer:
          "应该。感谢页、结账步骤、站内搜索结果和会员专区通常没有搜索价值，一般都会设为noindex。",
      },
      {
        question: "能在同一页面上同时使用noindex和nofollow吗？",
        answer:
          "可以。它们控制的内容不同——收录与链接跟踪——常在私有页面或功能页面上一起使用。",
      },
      {
        question: "什么是Cloudflare _headers文件？",
        answer:
          "它是网站public文件夹中的文件，将URL路径映射到HTTP响应头。工具会为您选择的任意路径输出可直接粘贴的代码块。",
      },
      {
        question: "robots元标签在必应和其他搜索引擎上有效吗？",
        answer:
          "有效。大多数主流搜索引擎都遵守标准的robots指令，不过少数只支持其中一部分——使用常见指令可以获得最广泛的覆盖。",
      },
      {
        question: "我的配置会被上传到别处吗？",
        answer:
          "不会。Robots元标签生成器完全在浏览器内运行，您的设置不会离开您的设备。",
      },
      {
        question: "如果选择了冲突的指令会怎样？",
        answer:
          "工具会自动防止冲突组合——例如启用nosnippet或noimageindex时，会禁用摘要和图片预览滑块。",
      },
      {
        question: "应该用noindex还是直接删除页面？",
        answer:
          "如果页面应该永久消失，请删除它并让它返回404或410状态。当页面必须保持在线但不应出现在搜索结果中时，使用noindex。",
      },
    ],
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
    instructions: [
      {
        title: "选择源图片",
        description:
          "从设备中选择任意PNG、JPG、WebP或GIF图片，读取其尺寸和原始字节大小。",
      },
      {
        title: "选择目标格式、宽度上限和质量",
        description:
          "选择WebP或JPG可大幅节省字节，可选设置最大宽度上限（如1920像素或1280像素），并将质量滑块从10%调整到100%。",
      },
      {
        title: "运行压缩",
        description:
          "点击“压缩”，在浏览器本地重新编码图片，并立即查看新的字节大小。",
      },
      {
        title: "对比压缩前后效果",
        description:
          "查看并排预览和精确的字节与百分比节省量，确认画质仍然符合要求。",
      },
      {
        title: "下载压缩后的文件",
        description:
          "点击“下载”将优化后的图片保存到设备，需要时可重复处理另一张图片。",
      },
      {
        title: "提示：输出比输入更大？",
        description:
          "如果小的PNG压缩后反而变大，请将输出格式切换为WebP或JPG，或略微降低质量滑块，然后重新压缩。",
      },
    ],
    examples: [
      {
        title: "为博客文章优化2.4 MB的主视觉照片",
        input: "3840×2160 JPG · 输出：WebP · 最大宽度：1280像素 · 质量：80%",
        output: "1280×720 WebP通常约85–140 KB（体积减少约94%）",
        explanation: "结合尺寸上限与现代WebP压缩，可以大幅加快最大内容绘制（LCP）速度。",
      },
      {
        title: "把手机截图压缩到100 KB以下用于邮件发送",
        input: "3 MB PNG截图 · 输出：WebP · 最大宽度：1280像素 · 质量：75%",
        output: "压缩后约80–95 KB，可直接作为邮件附件发送",
        explanation: "先限制宽度再降低质量，是快速把大图压到附件限制以下的做法。",
      },
    ],
    benefits: [
      "零服务器上传，未发布的产品图和私人照片完全保留在本地",
      "支持WebP、JPEG（透明区域自动填充白色）和PNG重新编码",
      "即时显示压缩前后的真实字节大小与节省百分比",
      "可选最大宽度上限，一次处理即可缩小超大的相机照片",
    ],
    useCases: [
      "缩小主视觉横幅和截图，改善核心网页指标与LCP",
      "为邮件、门户和CMS上传准备更轻的附件",
      "将体积庞大的原始截图转换为轻量WebP网页资源",
      "快速比较最佳质量与视觉保真度的平衡点",
    ],
    faqs: [
      {
        question: "为什么把小的PNG压缩为PNG有时反而会变大？",
        answer:
          "浏览器Canvas使用标准无损DEFLATE流重新编码PNG，没有pngquant这类专门的调色板量化工具。将输出格式切换为WebP或JPG通常能大幅减小文件体积。",
      },
      {
        question: "我的照片会被上传到外部压缩服务器吗？",
        answer:
          "不会。所有解码、调整尺寸和Canvas重新编码都在浏览器内存中严格本地运行。",
      },
      {
        question: "选择JPG后透明背景会怎样？",
        answer:
          "由于JPEG不支持透明通道，透明区域会在编码前被整洁地填充为纯白色（#ffffff）。",
      },
      {
        question: "图片压缩器免费吗？",
        answer:
          "是的，完全免费，无需注册，没有水印，压缩图片的数量也没有限制。",
      },
      {
        question: "可以压缩哪些格式的图片？",
        answer:
          '可以压缩 PNG、JPG、WebP 和 GIF 图片，并将结果下载为 WebP、JPG 或 PNG。压缩在浏览器本地完成，您可以调整质量滑块，在文件大小与画质之间找到合适的平衡。',
      },
      {
        question: "图片压缩器能把我的照片缩小多少？",
        answer:
          "节省幅度取决于原始格式和质量设置，但以80%质量转换为WebP的照片通常能缩小50–90%。",
      },
      {
        question: "压缩图片会降低画质吗？",
        answer:
          "WebP和JPG这类有损格式会用少量细节换取小得多的文件。用质量滑块和预览找到您喜欢的平衡点，或保留PNG以获得无损效果。",
      },
      {
        question: "图片压缩器会调整图片尺寸吗？",
        answer:
          "只有在您设置最大宽度上限时才会调整。否则像素尺寸保持不变，只改变文件大小。",
      },
      {
        question: "能压缩图片用于邮件附件吗？",
        answer:
          "可以，先压缩可以让大照片小到符合邮件附件限制，无需拆分到多封邮件发送。",
      },
      {
        question: "网站图片应该选择什么质量设置？",
        answer:
          "WebP格式下75–85%的质量通常看起来与原图几乎相同，同时文件足够小，页面加载速度快。",
      },
      {
        question: "压缩时为什么要把JPG转换为WebP？",
        answer:
          "WebP的压缩效率高于JPG，因此同一张照片在相同视觉质量下通常小得多。",
      },
      {
        question: "能一次压缩多张图片吗？",
        answer:
          "压缩器一次处理一张图片，这样您可以在下载前为每张照片精细调整质量、宽度和格式。",
      },
      {
        question: "压缩可以离线使用吗？",
        answer:
          "可以，页面加载后所有压缩都在浏览器本地运行，因此无需网络连接也能使用。",
      },
      {
        question: "压缩后的图片会有水印吗？",
        answer:
          '不会。下载的图片绝不包含水印或品牌标识，压缩只会减小文件体积，不会在图片上叠加任何标记。处理后的图片可以直接用在网站、邮件或社交媒体上。',
      },
      {
        question: "压缩截图的最佳格式是什么？",
        answer:
          "WebP通常能为截图生成最小的文件。只有在需要像素级完美的无损质量时才使用PNG。",
      },
      {
        question: "能压缩图片而不改变尺寸吗？",
        answer:
          "可以，不设置最大宽度上限，工具会保持原始宽高不变，只减小文件大小。",
      },
      {
        question: "图片压缩器会保留图片元数据吗？",
        answer:
          "浏览器Canvas重新编码通常会丢弃EXIF元数据，如相机设置和位置信息，这也有助于减小文件体积。",
      },
      {
        question: "能在手机上使用图片压缩器吗？",
        answer:
          "可以，在任何现代手机浏览器中都能使用。从相册中选择图片，并以同样方式下载压缩结果。",
      },
      {
        question: "我能压缩的最大图片有多大？",
        answer:
          "由于没有任何内容被上传，因此没有固定的服务器限制。超大图片仅受设备内存和浏览器Canvas尺寸的限制。",
      },
      {
        question: "如何把图片压缩到100 KB以下？",
        answer:
          "选择WebP输出，设置最大宽度（如1280像素），然后逐步降低质量滑块，直到显示的文件大小降到100 KB以下。",
      },
    ],
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
    instructions: [
      {
        title: "加载图片",
        description:
          "上传任意PNG、JPG、WebP或GIF图片，读取原始像素宽高。",
      },
      {
        title: "设置宽度、高度和适配模式",
        description:
          "输入自定义像素（可选择锁定宽高比）或选择社交预设，然后选择居中覆盖裁剪或精确拉伸/缩放。",
      },
      {
        title: "选择输出格式",
        description:
          "需要透明背景选PNG，照片选JPG，文件最小选WebP，然后再渲染。",
      },
      {
        title: "渲染调整后的图片",
        description:
          "点击“渲染调整后的图片”，按精确像素尺寸生成新版本。",
      },
      {
        title: "检查结果并下载",
        description:
          "检查预览的清晰度和裁剪效果，查看文件大小，然后点击“下载”保存。",
      },
      {
        title: "提示：图片看起来拉伸或模糊？",
        description:
          "开启锁定宽高比或切换到居中覆盖裁剪以避免变形，并避免把图片放大到远超原始尺寸。",
      },
    ],
    examples: [
      {
        title: "将竖版截图裁剪为1200×630 Open Graph卡片",
        input: "1440×1600截图 · 预设：OG分享（1200×630）· 适配：居中覆盖裁剪",
        output: "清晰的1200×630卡片，垂直居中，无挤压或变形。",
        explanation: "覆盖裁剪按比例缩放，直到填满目标画面，并均匀裁剪多余边缘。",
      },
      {
        title: "为Instagram头像制作512×512正方形图片",
        input: "竖版人像照片 · 预设：头像（512×512）· 适配：居中覆盖裁剪",
        output: "居中裁剪的512×512正方形头像，面部完整无变形",
        explanation: "居中覆盖裁剪会保留画面中央的主体，均匀裁掉上下多余部分。",
      },
    ],
    benefits: [
      "一键使用Open Graph、YouTube高清、正方形和头像像素预设",
      "更改宽高比时，居中覆盖裁剪可防止尴尬的拉伸",
      "高质量Canvas imageSmoothingQuality保持文字和线条清晰",
      "直接导出PNG、JPG或WebP，并显示真实文件大小",
    ],
    useCases: [
      "为博客文章和落地页制作1200×630的og:image卡片",
      "准备1080×1080产品照片和512×512头像",
      "在加入文档前缩小高分辨率截图",
      "生成与CMS模板要求完全一致的主视觉尺寸",
    ],
    faqs: [
      {
        question: "居中覆盖裁剪和拉伸/精确缩放有什么区别？",
        answer:
          "居中覆盖裁剪保持自然比例，在新宽高比不同时对称裁剪溢出的边缘。精确缩放则强制把整张原图塞进目标宽高。",
      },
      {
        question: "能把小照片干净地放大到4K吗？",
        answer:
          "Canvas插值可以导出更大的像素网格，但放大超过原始分辨率无法凭空创造缺失的细节。",
      },
      {
        question: "支持的最大输出尺寸是多少？",
        answer:
          "输入每边上限为8000像素，以安全保持在浏览器Canvas内存限制内。",
      },
      {
        question: "图片尺寸调整工具免费吗？",
        answer:
          "是的，免费使用，无需注册，没有水印，调整图片的数量也没有限制。",
      },
      {
        question: "调整大小和裁剪图片有什么区别？",
        answer:
          "调整大小改变整张图片的像素尺寸，裁剪则切掉图片的一部分。本工具两者都能做，包括居中覆盖裁剪。",
      },
      {
        question: "图片尺寸调整工具能把图片做成1200x630用于社交分享吗？",
        answer:
          "可以，选择Open Graph预设（1200×630），工具会把图片精确调整为适合社交平台链接预览的尺寸。",
      },
      {
        question: "如何调整图片大小而不拉伸？",
        answer:
          "保持锁定宽高比开启，或使用居中覆盖裁剪，工具会按比例缩放，而不是压扁图片。",
      },
      {
        question: "能把图片调整为1080x1080正方形吗？",
        answer:
          "可以，选择正方形预设，或将宽高都输入1080并开启居中覆盖裁剪。",
      },
      {
        question: "调整图片大小会减小文件体积吗？",
        answer:
          "通常会，因为像素越少数据越少，尤其是在同时导出为WebP或JPG时。",
      },
      {
        question: "可以调整哪些格式的图片？",
        answer:
          '可以调整 PNG、JPG、WebP 和 GIF 图片，并导出为 PNG、JPG 或 WebP。调整在浏览器本地通过 Canvas 高质量重采样完成，导出格式可以在下载前自由选择。',
      },
      {
        question: "调整大小会让图片变模糊吗？",
        answer:
          "缩小通常因高质量Canvas平滑处理而保持清晰。放大超过原始尺寸可能会让细节变柔和。",
      },
      {
        question: "能为头像调整图片大小吗？",
        answer:
          "可以，使用头像预设（512×512）并开启居中覆盖裁剪，即可获得完美的正方形头像。",
      },
      {
        question: "图片尺寸调整工具中的居中覆盖裁剪是什么？",
        answer:
          "它先缩放图片直到填满目标画面，再从中心均匀裁剪溢出的边缘，因此图片看起来不会被拉伸。",
      },
      {
        question: "图片尺寸调整工具会把我的照片上传到别处吗？",
        answer:
          "不会，所有调整都在浏览器本地完成，图片不会离开您的设备。",
      },
      {
        question: "能在手机上调整图片大小吗？",
        answer:
          "可以，在手机浏览器中同样可用。上传照片，输入新尺寸，然后下载结果。",
      },
      {
        question: "调整PNG大小后透明背景会怎样？",
        answer:
          "只要导出为PNG或WebP，透明背景就会保留。导出为JPG时透明区域会被填充为白色。",
      },
      {
        question: "能把多张图片调整为同一尺寸吗？",
        answer:
          "工具一次调整一张图片。为每张图片重复使用同一预设或尺寸，即可保持一致。",
      },
      {
        question: "图片尺寸调整工具能处理的最大图片有多大？",
        answer:
          '输入的图片每边上限为 8000 像素，这是为了保持在浏览器 Canvas 的内存限制内，避免标签页崩溃。如果图片超过这个尺寸，请先用其他工具缩小，再上传调整。',
      },
      {
        question: "如何为YouTube缩略图调整图片大小？",
        answer:
          '选择 YouTube 高清预设（1280×720），图片就会按 16:9 的比例调整为 YouTube 推荐的缩略图尺寸。预设会自动设置好宽高，您只需上传图片并下载结果即可。',
      },
      {
        question: "为什么调整后的图片文件仍然很大？",
        answer:
          "像素尺寸只是因素之一。请改用WebP或JPG导出（而非PNG），或之后再用图片压缩器进一步缩小文件。",
      },
    ],
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
    instructions: [
      {
        title: "选择目标格式和选项",
        description:
          "选择PNG、JPG或WebP输出，设置有损质量（如适用），并在把透明图片转换为JPG时选择背景填充颜色。",
      },
      {
        title: "选择一张或多张图片",
        description:
          "加载单个文件或多文件批次，以完整原始分辨率整洁渲染每张图片。",
      },
      {
        title: "检查每张图片的预览",
        description:
          "下载前查看每张转换后图片的尺寸和预估大小。",
      },
      {
        title: "转换批次",
        description:
          "工具会在浏览器内以您选择的格式、完整原始分辨率渲染每张图片。",
      },
      {
        title: "下载转换后的图片",
        description:
          "比较每个文件的尺寸和新字节大小，然后逐个下载转换后的图片。",
      },
      {
        title: "提示：透明区域变黑了？",
        description:
          "如果PNG转换为JPG后透明处变黑，请用白色或品牌颜色等填充色重新转换。",
      },
    ],
    examples: [
      {
        title: "将透明SVG/PNG标志压平到品牌深蓝背景上转为JPG",
        input: "透明logo.png · 目标：JPG（90%）· 填充：#FFFFFF",
        output: "背景为干净白色的logo.jpg，没有黑色透明伪影",
        explanation: "在绘制前明确填充Canvas底色，可防止透明PNG转JPEG时出现黑色光晕。",
      },
      {
        title: "批量将下载的WebP图片转回PNG",
        input: "12张WebP截图 · 目标：PNG",
        output: "12张完整分辨率的PNG文件，可在旧版软件中打开",
        explanation: "批量转换一次处理多张图片，每张都保持原始分辨率。",
      },
    ],
    benefits: [
      "以完整分辨率批量处理多张图片，无需服务器排队",
      "可配置的JPEG背景填充颜色，避免难看的黑色透明填充",
      "将下载的WebP文件转换回通用PNG或JPG文件",
      "直接将矢量SVG文件渲染为清晰的光栅PNG或WebP图片",
    ],
    useCases: [
      "将下载的.webp文件转换为.png或.jpg，用于旧版软件",
      "为静态网站和CDN批量制作现代.webp资源",
      "从SVG品牌图标导出清晰PNG，用于幻灯片或社交帖子",
      "并排比较PNG、JPG和WebP的格式大小差异",
    ],
    faqs: [
      {
        question: "能转换苹果HEIC照片吗？",
        answer:
          "HEIC解码取决于浏览器底层支持（Safari原生支持HEIC，而Chrome/Firefox通常需要PNG、JPG、WebP、SVG或GIF输入）。",
      },
      {
        question: "把JPG转换为PNG能恢复丢失的照片细节吗？",
        answer:
          "不能。将已压缩的JPG转换为PNG后会以无损方式保存，但无法恢复此前的JPEG压缩伪影。",
      },
      {
        question: "有文件大小限制吗？",
        answer:
          "只受设备内存限制；所有编码都在本地完成，没有服务器文件大小上限。",
      },
      {
        question: "图片格式转换器免费吗？",
        answer:
          "是的，免费使用，无需账号，没有水印，转换次数也没有限制。",
      },
      {
        question: "可以转换哪些格式？输出哪些格式？",
        answer:
          '可以将 PNG、JPG、WebP、GIF 和 SVG 文件转换为 PNG、JPG 或 WebP 输出。转换在浏览器本地批量完成，转成 JPEG 时透明区域会按您选择的背景色填充。',
      },
      {
        question: "为什么要把PNG转换为WebP？",
        answer:
          "在相似视觉质量下，WebP文件通常比PNG小得多，网页加载速度更快。",
      },
      {
        question: "为什么要把WebP转换为JPG或PNG？",
        answer:
          "一些旧版应用、打印机和上传表单不支持WebP，转换回JPG或PNG可以恢复通用兼容性。",
      },
      {
        question: "能一次转换多张图片吗？",
        answer:
          "可以，加载一批图片，一次全部转换为相同的目标格式。",
      },
      {
        question: "转换为JPG会去除透明度吗？",
        answer:
          "会的，JPG没有透明通道，因此透明区域会用您选择的填充色填充，例如白色。",
      },
      {
        question: "把透明PNG转换为JPG时应该用什么填充色？",
        answer:
          "白色是最安全的默认值。匹配网站或幻灯片的背景色可以获得无缝效果。",
      },
      {
        question: "能把照片转换为WebP并保持画质吗？",
        answer:
          "可以，85–90%质量的WebP通常看起来与原始JPG完全相同，同时文件明显更小。",
      },
      {
        question: "能把SVG标志转换为PNG吗？",
        answer:
          "可以，工具会以原始尺寸将SVG文件光栅化为清晰的PNG或WebP图片。",
      },
      {
        question: "图片格式转换器会上传我的图片吗？",
        answer:
          "不会，所有转换都在浏览器本地运行，文件不会离开您的设备。",
      },
      {
        question: "转换为JPG时应该用什么质量？",
        answer:
          "85–90%的质量能让照片看起来清晰，同时比PNG小得多。想要更小的文件可以再降低。",
      },
      {
        question: "能转换动态GIF吗？",
        answer:
          "可以加载GIF文件，但转换会渲染单帧静态画面，而不会保留动画。",
      },
      {
        question: "为什么转换后的PNG比原始JPG更大？",
        answer:
          "PNG是无损格式，因此从压缩JPG转换来的照片会无压缩地存储每个像素，体积通常会变大。",
      },
      {
        question: "转换器会保持原始图片尺寸吗？",
        answer:
          "会的，转换后的图片保持完整原始分辨率，除非您另外用图片尺寸调整工具调整大小。",
      },
      {
        question: "能在手机上使用图片格式转换器吗？",
        answer:
          "可以，在手机浏览器中同样可用。从设备中选择图片并下载转换后的文件。",
      },
      {
        question: "网站图片的最佳格式是什么？",
        answer:
          "网页上的照片和图形通常首选WebP，需要透明或无损质量时PNG更好。",
      },
      {
        question: "转换后的图片包含水印吗？",
        answer:
          "不包含，转换后的文件是干净的副本，不会添加水印或品牌标识。",
      },
    ],
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
    instructions: [
      {
        title: "上传图片",
        description:
          "选择任意PNG、JPG、WebP或GIF图片，加载到交互式Canvas预览中。",
      },
      {
        title: "旋转、翻转或应用滤镜",
        description:
          "使用向左/向右旋转按钮、水平/垂直翻转开关、灰度开关，以及亮度/对比度滑块。",
      },
      {
        title: "实时预览结果",
        description:
          "每次更改后查看Canvas预览，确认方向和滤镜强度符合要求。",
      },
      {
        title: "需要时重置",
        description:
          "使用“重置”按钮撤销所有旋转、翻转和滤镜更改，从原始图片重新开始。",
      },
      {
        title: "选择输出格式",
        description:
          "需要保留透明背景选PNG，照片选JPG，文件更小选WebP，然后再导出。",
      },
      {
        title: "导出编辑后的图片",
        description:
          "点击“下载”，将旋转、翻转或滤镜处理后的图片保存到设备。",
      },
    ],
    examples: [
      {
        title: "修正横向手机照片并提高亮度",
        input: "3024×4032照片顺时针旋转90° · 亮度：110% · 对比度：105%",
        output: "4032×3024的竖版图片干净导出，EXIF方向已写入像素",
        explanation: "Canvas在旋转90°和270°时会自动交换宽高。",
      },
      {
        title: "把自拍照水平镜像并转为黑白",
        input: "镜像自拍照 · 水平翻转 · 灰度：开启",
        output: "方向正确的黑白照片，导出为PNG",
        explanation: "水平翻转像照镜子一样左右镜像，灰度开关一键去除色彩。",
      },
    ],
    benefits: [
      "实时像素预览立即更新，零上传延迟",
      "将方向整洁写入实际像素坐标，而不是脆弱的EXIF标记",
      "在一个整洁的工作区结合旋转、镜像和色彩/色调调整",
      "无损“重置”按钮可随时恢复默认设置",
    ],
    useCases: [
      "校正横向拍摄的扫描文档或收据",
      "取消反向网络摄像头画面或翻转截图的镜像",
      "为印刷或文档制作高对比度灰度图片",
      "上架前快速提亮曝光不足的产品照片",
    ],
    faqs: [
      {
        question: "旋转图片会重新编码像素吗？",
        answer:
          "会的。在HTML5 Canvas上绘制会把新方向和滤镜调整永久写入每个像素，因此所有应用都会正确显示为正向。",
      },
      {
        question: "旋转或翻转时能保留透明背景吗？",
        answer:
          "可以——将输出格式保持为PNG或WebP，即可在旋转/翻转图形周围保留完整的透明通道。",
      },
      {
        question: "编辑内容会保存在服务器上吗？",
        answer:
          "不会。所有处理都在您自己的浏览器标签页内运行，关闭页面后即被丢弃。",
      },
      {
        question: "旋转图片工具免费吗？",
        answer:
          '是的，完全免费，无需注册，也没有水印与数量限制。所有旋转、翻转与滤镜处理都通过浏览器本地的 Canvas 完成，图片不会上传，您可以处理任意多张照片。',
      },
      {
        question: "如何把图片旋转90度？",
        answer:
          "上传图片后点击“向右旋转”或“向左旋转”，每次点击旋转90度。",
      },
      {
        question: "能把图片旋转180度吗？",
        answer:
          "可以，沿同一方向点击两次旋转，即可把图片上下翻转。",
      },
      {
        question: "如何水平翻转图片？",
        answer:
          "使用水平翻转开关可将图片左右镜像，适合修正镜像自拍。",
      },
      {
        question: "翻转和旋转图片有什么区别？",
        answer:
          "旋转是围绕中心转动图片，翻转则是像照镜子一样镜像图片。",
      },
      {
        question: "旋转照片会损失画质吗？",
        answer:
          "工具会通过Canvas重新编码图片，因此导出为PNG可保持无损，导出为JPG会应用轻微压缩。",
      },
      {
        question: "旋转图片会改变尺寸吗？",
        answer:
          '旋转 90 度或 270 度会交换图片的宽与高，例如横向照片会变成竖向；旋转 180 度则宽高不变，只是上下颠倒。工具会按您选择的角度实时预览，确认后再导出。',
      },
      {
        question: "能把照片变成黑白吗？",
        answer:
          '可以。开启灰度开关，照片会立即转换为黑白效果，预览中可以直接看到结果。灰度处理在本地 Canvas 中完成，原始文件不会被修改，确认效果后再导出即可。',
      },
      {
        question: "如何提亮较暗的照片？",
        answer:
          "将亮度滑块调到100%以上，并适当增加对比度，避免图片看起来发灰。",
      },
      {
        question: "旋转PNG后能保留透明度吗？",
        answer:
          '可以。导出为 PNG 或 WebP 即可在旋转或翻转后保留透明区域，因为这两种格式支持透明通道。如果导出为 JPG，透明部分会被填充为背景色，透明度就无法保留。',
      },
      {
        question: "编辑后的照片会被上传到服务器吗？",
        answer:
          "不会，所有旋转、翻转和滤镜处理都在浏览器本地运行，没有任何内容被上传。",
      },
      {
        question: "能在手机上旋转图片吗？",
        answer:
          "可以，在手机浏览器中同样可用。上传横向照片，旋转为正向并下载修正后的版本。",
      },
      {
        question: "为什么上传后我的照片是横着的？",
        answer:
          "有些手机把方向存储为EXIF标记，并非所有应用都会读取。本工具把正确方向写入像素，因此在任何地方都会正向显示。",
      },
      {
        question: "能撤销旋转或滤镜吗？",
        answer:
          "可以，“重置”按钮可随时恢复原始图片和默认滤镜设置。",
      },
      {
        question: "工具能修正歪斜或倾斜的照片吗？",
        answer:
          "它以90度为步进旋转，因此能修正横向或倒置的照片，小角度倾斜修正暂不支持。",
      },
      {
        question: "可以旋转和翻转哪些格式的图片？",
        answer:
          '可以编辑 PNG、JPG、WebP 和 GIF 图片，并导出为 PNG、JPG 或 WebP。编辑通过浏览器本地的 Canvas 变换完成，导出前可以选择想要的格式，透明图片建议导出为 PNG 或 WebP。',
      },
      {
        question: "能一次完成旋转和翻转吗？",
        answer:
          "可以，在导出最终图片前，可以组合旋转、水平或垂直翻转以及滤镜。",
      },
    ],
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
    instructions: [
      {
        title: "选择编码或解码模式",
        description:
          "编码文件使用“图片 → Base64 Data URI”，渲染粘贴的Base64数据使用“Base64 → 图片预览”。",
      },
      {
        title: "加载图片或粘贴Base64文本",
        description:
          "选择任意PNG、JPG、WebP、SVG、GIF或ICO文件（或粘贴完整的data:image/...字符串或原始Base64文本）。",
      },
      {
        title: "查看大小对比",
        description:
          "比较原始文件大小与Base64字符串大小，嵌入前了解约33%的额外开销。",
      },
      {
        title: "选择需要的输出格式",
        description:
          "选择完整的Data URI、原始Base64字符串、HTML <img>标签或CSS background-image代码片段。",
      },
      {
        title: "复制代码片段或下载预览图",
        description:
          "复制Data URI、原始Base64、HTML <img>标签或CSS背景代码片段，或下载解码后的预览图片。",
      },
      {
        title: "提示：粘贴的Base64不起作用？",
        description:
          "请确认粘贴了不含换行符的完整字符串，并检查解码器是否为您的格式添加了正确的data:image/...前缀。",
      },
    ],
    examples: [
      {
        title: "在CSS内联2 KB的SVG对勾图标",
        input: "check.svg（2,048字节）",
        output: "data:image/svg+xml;base64,...（约2.7 KB）+ 可直接粘贴的CSS background-image规则",
        explanation: "为微小UI图标和离线单文件HTML邮件节省一次额外的HTTP请求。",
      },
      {
        title: "解码API返回的Base64图片数据",
        input: "无前缀的原始Base64字符串",
        output: "渲染的图片预览 + 可下载的PNG文件",
        explanation: "解码器会自动补全data:image/png;base64,前缀，无需手动添加。",
      },
    ],
    benefits: [
      "即时比较二进制文件大小与约33%的Base64字符串开销",
      "同时生成Data URI、原始Base64、HTML <img>和CSS背景代码片段",
      "粘贴无头部的原始Base64时自动补全PNG Data URI前缀",
      "专有资源和API响应数据保留在浏览器内离线处理",
    ],
    useCases: [
      "将微小图标嵌入CSS包或自包含HTML报告",
      "调试JSON API或Webhook返回的图片Data URI",
      "在交易类HTML邮件模板中内联小型品牌徽标",
      "检查从浏览器开发者工具复制的编码图片数据",
    ],
    faqs: [
      {
        question: "什么时候应该用Base64图片而不是普通图片链接？",
        answer:
          "仅对非常小的图标（通常小于5–10 KB）或单文件HTML导出谨慎使用Base64 Data URI。Base64会使数据增大约33%，而且无法像普通链接那样跨页面独立缓存。",
      },
      {
        question: "解码器能预览不带“data:image/png;base64,”前缀的原始Base64字符串吗？",
        answer:
          "可以！切换到“Base64 → 图片预览”后，工具会自动去除空白，并在缺失时补全标准的PNG Data URI头部。",
      },
      {
        question: "支持矢量SVG吗？",
        answer:
          "支持。上传.svg文件会生成有效的data:image/svg+xml;base64,... URI，同时附带HTML和CSS代码片段。",
      },
      {
        question: "图片转Base64转换器免费吗？",
        answer:
          "是的，免费使用，无需注册，没有水印，编码或解码的图片数量也没有限制。",
      },
      {
        question: "什么是Base64 Data URI？",
        answer:
          "Data URI以文本形式把图片直接嵌入网页、样式表或邮件中，以data:image/...;base64,开头，后面是编码数据。",
      },
      {
        question: "为什么Base64字符串比图片大？",
        answer:
          "Base64编码用文本字符表示二进制数据，会给原始文件大小增加约33%的开销。",
      },
      {
        question: "Base64编码适合多大的图片？",
        answer:
          "Base64图片请保持小巧，通常小于5–10 KB，例如图标和标志。大图片会让HTML或CSS臃肿，且无法单独缓存。",
      },
      {
        question: "能把JPG转换为Base64吗？",
        answer:
          '可以。JPG、PNG、WebP、SVG、GIF 和 ICO 文件都可以编码为 Base64 Data URI。编码在浏览器本地完成，生成的结果可以直接复制为 HTML 的 <img> 标签或 CSS 背景图使用。',
      },
      {
        question: "如何在HTML中使用Base64图片？",
        answer:
          "复制生成的HTML <img>标签并粘贴到页面中，src属性已包含完整的Data URI。",
      },
      {
        question: "如何在CSS中使用Base64图片？",
        answer:
          "复制CSS background-image代码片段并粘贴到样式表中，无需单独的文件请求即可显示图片。",
      },
      {
        question: "能把Base64字符串解码回图片吗？",
        answer:
          "可以，切换到“Base64 → 图片预览”，粘贴字符串，工具会渲染图片供您预览或下载。",
      },
      {
        question: "解码时需要data:image/png;base64,前缀吗？",
        answer:
          "不需要，如果粘贴的是无头部的原始Base64，工具会自动添加标准的PNG Data URI前缀。",
      },
      {
        question: "图片转Base64工具会上传我的文件吗？",
        answer:
          "不会，编码和解码完全在浏览器内运行，图片不会离开您的设备。",
      },
      {
        question: "能把SVG编码为Base64吗？",
        answer:
          "可以，SVG文件会生成有效的data:image/svg+xml;base64,... URI，同时附带匹配的HTML和CSS代码片段。",
      },
      {
        question: "原始Base64和Data URI有什么区别？",
        answer:
          "原始Base64只是编码文本，而Data URI添加了data:image/...;base64,头部，让浏览器知道图片类型。",
      },
      {
        question: "能在邮件中使用Base64图片吗？",
        answer:
          "可以，小型Base64图片很适合自包含HTML邮件，不过部分邮件客户端对Data URI的支持有限，发送前请先测试。",
      },
      {
        question: "编码有文件大小限制吗？",
        answer:
          "没有服务器限制，因为没有任何内容被上传。超大图片仅受浏览器内存限制，而且巨大的Base64字符串本身也不便于粘贴。",
      },
      {
        question: "能把Base64图片转换为可下载的文件吗？",
        answer:
          "可以，在“Base64 → 图片预览”模式下解码字符串，使用下载选项将其保存为常规图片文件。",
      },
      {
        question: "Base64编码会改变图片质量吗？",
        answer:
          "不会，Base64是完全相同字节的无损文本表示，因此解码后的图片与原图完全一致。",
      },
      {
        question: "能在手机上使用图片转Base64转换器吗？",
        answer:
          "可以，在手机浏览器中同样可用。从相册中编码图片，或粘贴Base64字符串进行预览。",
      },
    ],
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
    instructions: [
      {
        title: "选择前景色和背景色",
        description:
          "使用颜色选择器、HEX输入或单独的R/G/B输入——也可以从无障碍预设开始，一键交换颜色。",
      },
      {
        title: "调整色调直到对比度通过",
        description:
          "微调亮度或单独的RGB通道，实时查看对比度更新，直到配色达到所需的AA或AAA阈值。",
      },
      {
        title: "查看WCAG 2.1评分卡",
        description:
          "查看精确对比度（例如12.63 : 1），以及AA常规、AA大号/UI、AAA常规和AAA大号四项标准的即时通过/未通过状态。",
      },
      {
        title: "在真实界面文字中预览配色",
        description:
          "通过实时排版和带边框的界面控件卡片预览，查看颜色作为正文、标题和按钮时的实际效果。",
      },
      {
        title: "从图片中提取色卡（可选）",
        description:
          "在底部上传任意截图或品牌标志，提取最多8种不同的主导颜色，并直接应用到前景色或背景色。",
      },
      {
        title: "复制颜色并修复未通过的配色",
        description:
          "将同步的HEX、RGB或HSL值复制到CSS中。如果配色未通过，请加深文字颜色或调亮背景，直到评分卡变绿。",
      },
    ],
    examples: [
      {
        title: "审核主CTA按钮的可读性",
        input: "前景色：#FFFFFF · 背景色：#4F46E5",
        output: "对比度6.29 : 1——通过WCAG AA常规、AA大号与AAA大号标准",
        explanation: "使用官方sRGB伽马线性化相对亮度公式（0.2126R + 0.7152G + 0.0722B）。",
      },
      {
        title: "从品牌标志提取配色并测试正文对比度",
        input: "上传品牌标志 · 提取8个主导色卡 · 前景色：深蓝色卡 · 背景色：#FFFFFF",
        output: "对比度8.14 : 1——通过WCAG AA与AAA常规文字标准",
        explanation: "提取的色卡可一键送入前景色或背景色位置，立即测试对比度。",
      },
    ],
    benefits: [
      "精确的WCAG 2.1 sRGB相对亮度公式——零近似",
      "实时排版和带边框的界面控件卡片预览当前配色",
      "内置Canvas图片颜色量化器，无需其他工具即可提取品牌色卡",
      "同步显示HEX、RGB和HSL字符串，可直接粘贴到CSS",
    ],
    useCases: [
      "审核设计系统、SaaS仪表盘和深色模式主题的WCAG AA/AAA合规性",
      "直接从客户标志中提取主导品牌色，融入无障碍界面配色",
      "上线前修复低对比度的徽章、占位符或按钮标签配色",
      "用实时的大号与常规文字预览教学无障碍视觉层级",
    ],
    faqs: [
      {
        question: "WCAG AA级与AAA级分别要求多少对比度？",
        answer:
          "WCAG 2.1 AA级要求常规正文至少4.5:1，大号文字（18pt以上或加粗14pt以上）和界面组件至少3.0:1。AAA级则提高到常规文字7.0:1、大号文字4.5:1。",
      },
      {
        question: "图片配色提取器是如何工作的？",
        answer:
          "它把上传的图片绘制到离屏HTML5 Canvas上，忽略透明像素，对相近的RGB区间聚类，并按面积占比呈现最多8个视觉上不同的主导色卡。",
      },
      {
        question: "颜色对比度检查器也能在HEX、RGB和HSL之间转换吗？",
        answer:
          "可以。更新任何颜色选择器、HEX输入或R/G/B字段后，HEX、rgb()和hsl()表示都会自动重新计算。",
      },
      {
        question: "按WCAG对比度规则，什么算大号文字？",
        answer:
          "大号文字是18pt（24px）或更大，或加粗14pt（18.66px）或更大。大号文字AA级只需3.0:1、AAA级4.5:1，而常规文字AA级需要4.5:1、AAA级需要7.0:1。",
      },
      {
        question: "颜色对比度检查器免费吗？",
        answer:
          "是的，完全免费，无需注册。所有检查都在浏览器本地运行，可以测试任意数量的颜色组合。",
      },
      {
        question: "我上传的图片会离开我的设备吗？",
        answer:
          "不会。配色提取完全在浏览器中使用离屏Canvas进行，图片不会上传到任何服务器。",
      },
      {
        question: "对比度是如何计算的？",
        answer:
          "使用官方WCAG 2.1公式：每个颜色的相对亮度由伽马线性化sRGB值计算得出，对比度为(L1 + 0.05) / (L2 + 0.05)，其中L1是较亮的颜色。",
      },
      {
        question: "能检查深色模式设计的对比度吗？",
        answer:
          "可以。同样输入深色背景和浅色文字，评分卡会显示该配色在常规和大号文字下是否通过AA和AAA标准。",
      },
      {
        question: "为什么我的颜色组合看起来易读，却未通过AA级？",
        answer:
          "感知上的易读性与测量的亮度对比度是两回事。您觉得区别明显的颜色在亮度上可能仍然接近，尤其是中间色调，因此请相信对比度数值，调整亮度直到通过。",
      },
      {
        question: "如果品牌色未通过对比度测试怎么办？",
        answer:
          "将品牌色保留给大标题或装饰元素，正文则使用其较深的色调。也可以调亮背景，或在文字后添加半透明遮罩。",
      },
      {
        question: "检查器适用于按钮和图标等界面组件吗？",
        answer:
          "适用。WCAG 2.1要求按钮边框、输入框轮廓和有意义图标等非文字界面组件达到3.0:1，评分卡中的AA大号/UI列正好涵盖这一项。",
      },
      {
        question: "能用这个工具测试占位符文字和禁用状态吗？",
        answer:
          "可以，将占位符或禁用状态的颜色作为前景色输入。请注意，禁用控件不受WCAG对比度要求约束，但传达信息的占位符文字不在豁免之列。",
      },
      {
        question: "配色提取器能从图片中提取多少种颜色？",
        answer:
          "最多8种不同的主导颜色。相似色调会被聚类在一起，因此色卡代表图片中最突出的颜色，而不是其中每一种色调。",
      },
      {
        question: "能把提取的色卡直接用作前景色或背景色吗？",
        answer:
          "可以。每个提取的色卡都有按钮，可直接送入前景色或背景色位置，立即与另一种颜色测试对比度。",
      },
      {
        question: "配色提取器支持哪些图片格式？",
        answer:
          "浏览器能显示的任何图片格式都支持，包括PNG、JPG、WebP和SVG截图或标志。聚类颜色时会忽略透明像素。",
      },
      {
        question: "颜色对比度检查器会测试色盲吗？",
        answer:
          "不会，它只测量亮度对比度。对比度只是无障碍的一部分；为保障色盲安全，还应避免仅靠颜色传达含义，并用色盲模拟器检查配色。",
      },
      {
        question: "能在CSS中使用HEX、RGB和HSL值吗？",
        answer:
          "可以。三种格式在编辑时会保持同步，可以直接复制到样式表、设计变量或Tailwind配置中。",
      },
      {
        question: "AA和AAA在实际应用中有什么区别？",
        answer:
          "AA是大多数网站追求的法律与实践标准，AAA更严格，品牌色正文往往难以达到。能达到AAA时尽量达到，但文字绝不要低于AA标准。",
      },
      {
        question: "工具会保存我的颜色选择或图片吗？",
        answer:
          "不会。所有处理都在浏览器标签页本地运行，没有任何内容被上传，关闭或刷新页面后颜色和图片都会消失。",
      },
      {
        question: "能一次检查多组颜色吗？",
        answer:
          "检查器一次测试一组前景色/背景色，但一键即可交换颜色，几秒内可以重新测试任意多组配色。",
      },
    ],
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
    instructions: [
      {
        title: "上传二维码图片或启用摄像头扫描",
        description:
          "拖放或选择任意PNG、JPG、WebP或SVG二维码截图，或想实时读取打印二维码时点击“启动摄像头扫描”。",
      },
      {
        title: "让扫描器解码二维码",
        description:
          "工具在浏览器本地运行多尺度、反色感知解码，因此即使深色模式或反色二维码也能读取，无需上传任何内容。",
      },
      {
        title: "检查并复制解码文本",
        description:
          "查看解码后的载荷、检测到的载荷类型和安全链接预览（只有http/https链接会变成可点击链接），然后一键复制。",
      },
      {
        title: "操作前检查载荷类型",
        description:
          "查看二维码包含的是链接、Wi-Fi凭据、vCard联系人还是纯文本，访问或连接前确认目标无误。",
      },
      {
        title: "切换到vCard联系人二维码制作器（可选）",
        description:
          "制作可扫描的VCF 3.0电子名片二维码，包含姓名、组织、电话、邮箱和网站，并下载为PNG或SVG。",
      },
      {
        title: "下载、打印或排查扫描失败",
        description:
          "下载您的vCard二维码；如果解码失败，请重新上传更清晰、光线更好的截图——裁剪过紧、模糊或过小的二维码是最常见的原因。",
      },
    ],
    examples: [
      {
        title: "下单印刷前验证营销传单截图",
        input: "上传flyer-qr.png（600×600 PNG）",
        output: "解码载荷 · 网站链接：https://example.com/?utm_source=print",
        explanation: "在本地运行多尺度反色感知解码，反色深色模式二维码也能可靠解码。",
      },
      {
        title: "制作简历用的vCard联系人二维码",
        input: "姓名：张伟 · 电话：+86 138 0000 0000 · 邮箱：zhang@example.com",
        output: "可下载的PNG与SVG格式vCard 3.0二维码，手机扫描后可直接保存联系人",
        explanation: "标准VCF 3.0格式可被iPhone和安卓内置相机识别。",
      },
    ],
    benefits: [
      "无需手机应用即可整洁解码普通与反色二维码截图",
      "可选摄像头画面在解码成功或离开标签页时立即停止",
      "整洁分类解码后的载荷，不会自动跳转离开",
      "包含完整的vCard 3.0 PNG与SVG二维码生成功能，适用于数字名片",
    ],
    useCases: [
      "打印海报前再次核对二维码资源中的UTM目标链接",
      "从桌面截图中提取Wi-Fi字符串或文本令牌",
      "用笔记本内置摄像头扫描实体二维码",
      "为简历、徽章和演示文稿制作可扫描的vCard联系人二维码",
    ],
    faqs: [
      {
        question: "如果设备没有摄像头或拒绝了摄像头权限怎么办？",
        answer:
          "使用这个工具完全不需要摄像头——只需截图或拍照，并通过“上传二维码图片”上传，效果与摄像头完全相同，无需摄像头权限。",
      },
      {
        question: "扫描二维码会自动打开恶意网站吗？",
        answer:
          "不会。解码后的文本会先安全显示在只读文本框中，您可以先检查任何链接，再决定是否访问。",
      },
      {
        question: "想要链接、Wi-Fi或自定义颜色二维码生成器，而不是vCard吗？",
        answer:
          "请试试社交媒体工具中的专用二维码生成器，支持自定义前景/背景颜色、纠错级别和链接/文本二维码。",
      },
      {
        question: "二维码扫描器免费吗？",
        answer:
          "是的，完全免费，无需注册，扫描和vCard二维码生成都在浏览器本地运行。",
      },
      {
        question: "我上传的二维码图片会被发送到服务器吗？",
        answer:
          "不会。解码完全在浏览器内使用jsQR进行，截图和照片不会离开您的设备。",
      },
      {
        question: "二维码扫描器能读取哪些图片格式？",
        answer:
          "PNG、JPG、WebP和SVG图片都可以。手机或电脑上截取的截图是最常见的二维码来源。",
      },
      {
        question: "为什么我的二维码扫描失败？",
        answer:
          "常见原因是图片模糊或分辨率低、二维码裁剪过紧、打印二维码上有反光，或二维码在画面中太小。请重新上传更清晰、更大、光线更好的图片。",
      },
      {
        question: "扫描器能读取反色或深色模式二维码吗？",
        answer:
          "可以。解码器支持反色感知，因此深色背景上的浅色模块二维码与标准黑白二维码一样可靠。",
      },
      {
        question: "能检测哪些类型的二维码载荷？",
        answer:
          "它会自动分类解码内容，包括网站链接、Wi-Fi网络凭据、vCard联系人和纯文本，让您在操作前了解二维码的作用。",
      },
      {
        question: "扫描公共场合发现的二维码安全吗？",
        answer:
          "在这里扫描是安全的，因为没有任何内容会自动打开——您会先看到解码文本。请仔细阅读链接，避免在随机二维码指向的页面上输入密码或支付信息。",
      },
      {
        question: "能用笔记本摄像头扫描二维码吗？",
        answer:
          "可以。点击“启动摄像头扫描”，在浏览器询问时允许摄像头访问，然后把打印的二维码放在摄像头前。解码成功或离开标签页时，画面会自动停止。",
      },
      {
        question: "扫描后摄像头会继续录制吗？",
        answer:
          "不会。解码成功后摄像头画面会立即停止，切换标签页或关闭扫描器时也会停止。",
      },
      {
        question: "什么是vCard二维码？",
        answer:
          "vCard二维码以标准VCF 3.0格式存储联系方式——姓名、组织、电话、邮箱和网站——手机扫描后会提示直接保存联系人。",
      },
      {
        question: "能把vCard二维码下载为PNG和SVG吗？",
        answer:
          "可以。vCard制作器支持导出两种格式：PNG用于文档和演示文稿，SVG用于任意尺寸的清晰打印。",
      },
      {
        question: "vCard二维码在iPhone和安卓上都能用吗？",
        answer:
          "可以。两个平台都能识别标准VCF 3.0 vCard二维码，用内置相机扫描时会提示添加联系人。",
      },
      {
        question: "能扫描视频或录屏中的二维码吗？",
        answer:
          "不能直接扫描，但可以暂停视频，截取显示二维码的那一帧截图，再上传截图到扫描器。",
      },
      {
        question: "二维码扫描器能离线使用吗？",
        answer:
          "页面加载后，解码完全在浏览器内运行，无需网络请求，因此即使没有网络也能扫描上传的图片。",
      },
      {
        question: "能一次扫描一张图片中的多个二维码吗？",
        answer:
          "扫描器一次只解码一个二维码。如果图片中有多个二维码，请裁剪图片，让每个二维码单独上传。",
      },
      {
        question: "在传单上打印二维码前应该检查什么？",
        answer:
          "上传完成设计的截图并在这里扫描，确认目标链接、UTM参数和载荷完全正确，然后再下单印刷。",
      },
      {
        question: "工具会保存我扫描的二维码或摄像头图像吗？",
        answer:
          "不会。没有任何内容被上传、记录或保存。解码结果只存在于当前浏览器标签页中，关闭后即消失。",
      },
    ],
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
    instructions: [
      {
        title: "选择随机密码或Diceware口令",
        description:
          "随机密码的字符集密度最高，Diceware口令则更容易手动输入，同时具备多词强熵值。",
      },
      {
        title: "自定义长度、字符集和批量数量",
        description:
          "调整长度（8–64个字符），切换大写/小写/数字/符号，可选择排除易混淆字符（0/O/1/l/I），或选择3–8个Diceware单词。",
      },
      {
        title: "生成密码或口令",
        description:
          "点击生成，使用浏览器硬件支持的密码学安全随机数生成器配合拒绝采样创建全新结果，每个字符的出现概率完全相等。",
      },
      {
        title: "检查熵值评分",
        description:
          "查看精确的香农熵值比特数（建议约72–118+比特），了解结果代表多大的猜测难度，再决定使用。",
      },
      {
        title: "重新生成并安全复制",
        description:
          "对结果不满意？重新生成一个全新的密码，然后一键复制单个密码或整个批次。",
      },
      {
        title: "保存到密码管理器并刷新清除",
        description:
          "立即把结果粘贴到密码管理器中。刷新页面会从内存中清除生成的密码，因此不要依赖标签页来记住它们。",
      },
    ],
    examples: [
      {
        title: "18字符混合密码（完整字符池）",
        input: "长度：18 · 大写 + 小写 + 数字 + 符号（字符池：88个字符）",
        output: "约116.3比特加密熵值 · 保证每个启用的字符类别至少出现1个字符",
        explanation: "使用拒绝采样（丢弃大于等于floor(2^32 / 字符池) * 字符池的uint32样本）实现严格均匀分布。",
      },
      {
        title: "6词Diceware口令（易于手动输入）",
        input: "6个随机单词 · 词表：7776个单词",
        output: "约77.5比特熵值 · 易于记忆和手动输入",
        explanation: "每个单词提供约12.9比特熵值，6个单词合计约77.5比特，适合作为主密码。",
      },
    ],
    benefits: [
      "严格避免不安全的Math.random()——使用硬件播种的window.crypto.getRandomValues",
      "通过真正的拒绝采样和无偏Fisher-Yates洗牌消除取模偏差",
      "保证每个选定字符类别至少出现一个字符，且位置不固定",
      "没有任何内容被记录、存储或通过网络传输",
    ],
    useCases: [
      "保护云账号、SSH密钥、数据库凭据和密码管理器主保险库",
      "为磁盘加密或Wi-Fi访客密钥生成便于手动输入的Diceware口令",
      "批量发放临时入职凭据（一次最多生成10个）",
      "比较12字符、18字符与24字符的熵值差异",
    ],
    faqs: [
      {
        question: "为什么crypto.getRandomValues的拒绝采样很重要？",
        answer:
          "直接计算randomUint32 % 字符池大小时，当2^32不能被字符池大小整除，低位字符会被略微偏爱（取模偏差）。拒绝采样会丢弃超范围的抽取结果，让字符池中每个字符的出现概率在数学上完全相等。",
      },
      {
        question: "应该用随机密码还是口令？",
        answer:
          "两者在足够长时都非常优秀：16个以上混合字符适用于密码管理器中的所有场景，而5–6个单词的口令在电视、手机或磁盘解密提示中手动输入要容易得多。",
      },
      {
        question: "生成的密码会被存储在任何地方吗？",
        answer:
          "绝不会。密码只存在于标签页的临时React内存中，刷新后即消失。",
      },
      {
        question: "密码生成器免费吗？",
        answer:
          "是的，完全免费，无需注册。可以在浏览器中生成任意数量的密码和口令。",
      },
      {
        question: "密码是如何生成的？",
        answer:
          "在浏览器本地使用window.crypto.getRandomValues创建——这是浏览器硬件支持的密码学安全随机数生成器，并配合拒绝采样消除取模偏差。",
      },
      {
        question: "我生成的密码会被发送到服务器吗？",
        answer:
          "不会。生成完全在您的设备上进行，没有任何内容被存储、记录或通过网络传输。",
      },
      {
        question: "密码应该多长？",
        answer:
          "重要账号请使用至少16个字符的混合字符密码，熵值约100+比特。较短的密码只适用于低价值账号，长度比复杂度更重要。",
      },
      {
        question: "什么是密码熵值？需要多少比特？",
        answer:
          "熵值衡量密码代表多大的猜测难度。大多数账号约70–80比特已足够强，主密码、加密密钥和高价值账号建议100+比特。",
      },
      {
        question: "什么是Diceware口令？",
        answer:
          "Diceware口令是由固定词表随机选取的多个单词组成的口令，例如“correct horse battery staple”。5或6个随机单词可提供强熵值，同时比随机字符更容易输入和记忆。",
      },
      {
        question: "应该排除0、O、1、l、I这类易混淆字符吗？",
        answer:
          "如果需要手动输入或口头读出密码，应该排除。排除易混淆字符可以防止登录时输错，只要密码足够长，熵值损失微乎其微。",
      },
      {
        question: "能一次生成多个密码吗？",
        answer:
          "可以。一次点击最多批量生成10个密码，适合发放账号或为新团队成员入职准备。",
      },
      {
        question: "生成器能保证每个选定字符类别至少出现一个字符吗？",
        answer:
          "可以。每个生成的密码都至少包含您启用的每个字符类别中的一个字符，且这些字符不会出现在固定、可预测的位置。",
      },
      {
        question: "这些密码能用作密码管理器主密码吗？",
        answer:
          "长口令很适合做主密码，因为必须凭记忆输入。生成一个6词Diceware口令并记住它，其他密码存入密码管理器。",
      },
      {
        question: "为什么不用Math.random()生成密码？",
        answer:
          "Math.random()在密码学上不安全：如果攻击者了解其内部状态，就可以预测其输出。本工具只使用专为安全敏感随机性设计的window.crypto.getRandomValues。",
      },
      {
        question: "生成的密码在每个网站上都能用吗？",
        answer:
          "几乎都能用。如果某个网站拒绝符号或限制长度，请缩短长度或禁用符号类别并重新生成，直到网站接受为止。",
      },
      {
        question: "能在多个网站上重复使用生成的密码吗？",
        answer:
          "不应该。重复使用密码意味着一次泄露会暴露所有使用同一密码的账号，因此请为每个网站生成唯一密码并存入密码管理器。",
      },
      {
        question: "刷新页面后我的密码会怎样？",
        answer:
          "它们会消失。生成的密码只存在于标签页的临时内存中，因此请在刷新或关闭页面前复制或保存到密码管理器。",
      },
      {
        question: "密码生成器能离线使用吗？",
        answer:
          "可以。页面加载后，生成完全在浏览器内运行，无需网络请求，因此可以离线使用。",
      },
      {
        question: "Wi-Fi密码应该选密码还是口令？",
        answer:
          "需要在多台设备上输入的Wi-Fi密钥请使用口令，因为单词更容易正确输入；密码管理器自动填写时则使用随机字符密码。",
      },
      {
        question: "生成的密码能保证绝对无法破解吗？",
        answer:
          "没有任何密码能保证绝对无法破解——网站仍可能被入侵或钓鱼欺骗。不过，存入密码管理器中的长、唯一、随机生成的密码，是实际可用的最强防御手段之一。",
      },
    ],
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
    instructions: [
      {
        title: "从设备中选择文件",
        description:
          "选择压缩包、安装程序、PDF或二进制文件。文件仅读入本地浏览器内存（建议小于500 MB），绝不上传。",
      },
      {
        title: "等待摘要计算完成",
        description:
          "浏览器使用硬件加速的Web Crypto并行计算SHA-256、SHA-512、SHA-384和SHA-1，较大文件需要几秒钟。",
      },
      {
        title: "查看计算出的加密摘要",
        description:
          "查看SHA-256、SHA-512、SHA-384和旧版SHA-1十六进制哈希值以及文件元数据，需要时可下载标准的.sha256文本文件。",
      },
      {
        title: "与已发布的校验和比对验证",
        description:
          "粘贴预期的SHA-256/512/384/1字符串，或粘贴.sha256sum文件中整行“<哈希值>  文件名”，确认完全匹配或发现损坏/篡改。",
      },
      {
        title: "复制或导出哈希值",
        description:
          "一键复制任意摘要，或下载标准的.sha256文本文件，随发布版本一起提供或作为验证记录保存。",
      },
      {
        title: "处理不匹配或大文件",
        description:
          "如果哈希值不匹配，请删除文件并从官方来源重新下载。超过约500 MB的文件请改用shasum -a 256或certutil，因为浏览器会把整个文件加载到内存中。",
      },
    ],
    examples: [
      {
        title: "对照厂商.sha256sum验证下载的发布版本二进制文件",
        input: "文件：app-v2.tar.gz · 预期：“e3b0c442...  app-v2.tar.gz”",
        output: "校验和已验证！与计算出的SHA-256摘要完全匹配。",
        explanation: "自动提取开头的哈希标记，忽略大小写，并与全部4种已计算算法比对。",
      },
      {
        title: "为自己的发布版本生成.sha256清单文件",
        input: "文件：my-app-v1.0.zip",
        output: "标准my-app-v1.0.zip.sha256文本文件，可随下载一起发布",
        explanation: "导出的.sha256文件格式标准，用户可用任何校验工具验证。",
      },
    ],
    benefits: [
      "使用浏览器原生C++/硬件加速Web Crypto SubtleCrypto",
      "支持粘贴.sha256sum发布清单中的完整“<哈希值>  文件名”行",
      "一键导出标准的filename.sha256验证文件",
      "零文件上传，机密构建与合同保持私密",
    ],
    useCases: [
      "无需打开终端即可验证Linux ISO、命令行二进制文件或开源压缩包",
      "确认法律或财务档案逐字节完整送达",
      "为小型客户交付物生成.sha256发布清单",
      "在解压前检测被截断或损坏的下载文件",
    ],
    faqs: [
      {
        question: "有最大文件大小限制吗？",
        answer:
          "由于浏览器File.arrayBuffer()会把整个文件一次性加载到客户端内存中，约300–500 MB以内的文件可以流畅处理，而多GB的ISO可能超出浏览器内存配额——多GB文件建议使用原生命令行工具（shasum -a 256或certutil）。",
      },
      {
        question: "为什么SHA-1只标注为旧版兼容？",
        answer:
          "SHA-1存在已知的实际碰撞弱点，不应被信任用于对抗性安全保证；请尽可能优先使用SHA-256或SHA-512。",
      },
      {
        question: "想对原始文本字符串而不是二进制文件求哈希？",
        answer:
          "请查看开发工具中的哈希生成器，可即时对UTF-8文本求哈希。",
      },
      {
        question: "文件哈希验证器免费吗？",
        answer:
          '是的，完全免费，无需注册。您可以验证任意数量的文件，工具会在本地用 Web Crypto 计算 SHA-256 等摘要，并即时与您提供的预期校验和比对，文件不会上传。',
      },
      {
        question: "验证时我的文件会被上传到别处吗？",
        answer:
          "不会。哈希计算完全在浏览器内使用Web Crypto API进行，文件不会离开您的设备——这正是它对机密构建与合同安全的原因。",
      },
      {
        question: "什么是文件哈希？为什么要检查它？",
        answer:
          "哈希是根据文件的精确字节计算出的固定长度指纹。即使只有一个字节变化，哈希值也会完全改变，因此比对哈希值可以证明下载文件完整无损、未经修改。",
      },
      {
        question: "应该用哪种哈希算法：SHA-256、SHA-512还是SHA-1？",
        answer:
          "一般验证请使用SHA-256——它是发布者提供的标准。SHA-512同样强，在64位系统上更快，而SHA-1仅作旧版兼容，不应被信任用于安全验证。",
      },
      {
        question: "在哪里能找到用于比对的官方校验和？",
        answer:
          "发布者通常会在下载页面或下载文件旁的.sha256 / .sha256sum文件中列出。请务必从厂商自己的网站复制，绝不要从镜像站或论坛帖子复制。",
      },
      {
        question: "如果哈希值不匹配怎么办？",
        answer:
          "不要运行或解压该文件。请删除它并从官方来源重新下载；不匹配意味着下载已损坏、被截断或可能被篡改。",
      },
      {
        question: "能粘贴整行.sha256sum内容而不只是哈希值吗？",
        answer:
          "可以。验证器接受发布清单中完整的“<哈希值>  文件名”行——它会自动提取开头的哈希标记，忽略大小写，并与全部四种已计算算法比对。",
      },
      {
        question: "哈希值取决于文件名吗？",
        answer:
          "不取决于。摘要仅根据文件内容计算，因此重命名文件永远不会改变其哈希值。字节相同的两个文件总会产生相同的哈希值。",
      },
      {
        question: "能用这个工具验证Linux ISO或大型安装程序吗？",
        answer:
          "可以，上限约300–500 MB。多GB的ISO请使用原生工具，如macOS/Linux上的shasum -a 256或Windows上的certutil -hashfile，因为浏览器会把整个文件加载到内存中。",
      },
      {
        question: "SHA-256和SHA-512有什么区别？",
        answer:
          "两者都是SHA-2家族的安全成员；SHA-256生成64个字符的十六进制摘要，SHA-512生成128个字符。SHA-512略强且在64位硬件上更快，但SHA-256是更广泛发布的校验和。",
      },
      {
        question: "这个工具能检测文件中的病毒或恶意软件吗？",
        answer:
          "不能。匹配的哈希值只证明文件与发布者发布的文件完全相同。如果发布者自己的文件就是恶意的，哈希值仍会匹配，因此只验证来自可信来源的下载文件。",
      },
      {
        question: "如何为自己的发布版本下载.sha256文件？",
        answer:
          "在这里对发布文件求哈希，然后下载工具生成的标准filename.sha256文本文件，随下载文件一起发布，供用户验证。",
      },
      {
        question: "为什么大文件求哈希需要几秒钟？",
        answer:
          "浏览器必须读取并处理文件的每个字节。文件越大耗时越长，时间随文件大小增长，而与选择的算法无关。",
      },
      {
        question: "文件哈希验证器能离线使用吗？",
        answer:
          "可以。页面加载后，所有哈希计算都在浏览器本地运行，无需网络请求，因此无需网络连接也能验证文件。",
      },
      {
        question: "能一次验证多个文件吗？",
        answer:
          "工具一次验证一个文件。请逐个对每个文件求哈希，并与各自已发布的校验和比对。",
      },
      {
        question: "匹配的哈希值能证明文件真实吗？",
        answer:
          "它证明文件与发布者求哈希的文件逐字节相同，但不能证明发布者就是其声称的身份，因此请从发布者的官方渠道获取预期哈希值。",
      },
      {
        question: "工具会存储我的文件或哈希值吗？",
        answer:
          "不会。没有任何内容被上传或存储，计算出的哈希值只存在于当前浏览器标签页中，关闭或刷新后即消失。",
      },
    ],
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
    instructions: [
      {
        title: "选择字母徽章或上传标志",
        description:
          "输入1–3个品牌首字母并自定义背景/文字颜色，或切换到“上传标志图片”，居中裁剪现有的PNG/SVG/JPG标志。",
      },
      {
        title: "设置图标样式",
        description:
          "选择字母组合字母和颜色，或调整上传标志的裁剪，让标志居中且四周留白均匀。",
      },
      {
        title: "选择边角形状",
        description:
          "选择圆角方形（iOS/macOS风格）、圆形或直角方形边框。",
      },
      {
        title: "预览每种尺寸",
        description:
          "仔细检查16×16和32×32预览——大尺寸好看的标志在标签页尺寸下可能变得模糊，必要时简化字母或细节。",
      },
      {
        title: "下载favicon.ico、PNG和HTML代码片段",
        description:
          "下载多帧favicon.ico包以及各尺寸PNG，并将<head>链接标签复制到项目中。",
      },
      {
        title: "安装图标并清除缓存",
        description:
          "把文件放入/public/文件夹，将链接标签粘贴到index.html，然后硬刷新或清除浏览器缓存——浏览器会强缓存网站图标，旧图标通常只是缓存未更新。",
      },
    ],
    examples: [
      {
        title: "为新的React或Cloudflare Pages应用准备图标",
        input: "字母组合“UH”· 背景#4F46E5 · 形状：圆角方形",
        output: "二进制favicon.ico（16+32+48像素PNG帧）+ 6种PNG尺寸 + HTML <link>代码片段",
        explanation: "直接在Uint8Array缓冲区内构建有效的ICONDIR和ICONDIRENTRY二进制头。",
      },
      {
        title: "从品牌标志生成PWA图标集",
        input: "上传512×512正方形透明背景PNG标志",
        output: "192×192与512×512 PWA PNG + 180×180苹果触摸图标 + favicon.ico",
        explanation: "正方形源图片裁剪整洁，生成的图标可直接用于网页清单。",
      },
    ],
    benefits: [
      "构建真正的多帧二进制.ico文件（16×16、32×32和48×48），而不是改名的PNG",
      "覆盖桌面标签页、苹果触摸图标（180×180）和网页清单图标（192/512像素）",
      "即时字母组合模式无需任何设计软件，适合副业项目和MVP",
      "生成整洁的HTML5 <link rel=\"icon\">样板代码，可直接粘贴到index.html",
    ],
    useCases: [
      "在SaaS或微型网站上线前补齐缺失的网站图标和苹果触摸图标",
      "为测试版与正式版仪表盘制作高对比度标签页图标",
      "将正方形品牌SVG/PNG标志转换为完整的PWA图标集",
      "生成清晰的16×16和32×32预览，验证小尺寸下的可读性",
    ],
    faqs: [
      {
        question: "下载的favicon.ico是真正的ICO二进制文件吗？",
        answer:
          "是的。它写入标准的Windows ICO ICONDIR头和目录项，包含三帧清晰的PNG编码帧（16×16、32×32和48×48），所有现代浏览器和操作系统都支持。",
      },
      {
        question: "现代网站实际需要哪些图标尺寸？",
        answer:
          "一个favicon.ico加上32×32 PNG、180×180苹果触摸图标和192×192 / 512×512网页清单PNG，几乎覆盖所有桌面、移动iOS和安卓浏览器。",
      },
      {
        question: "在React + Vite项目中应该把这些文件放在哪里？",
        answer:
          "把favicon.ico和PNG图标放在项目的/public/文件夹内，并将HTML <link>标签粘贴到index.html的<head>中。",
      },
      {
        question: "网站图标生成器免费吗？",
        answer:
          "是的，完全免费，无需注册，所有图标都在浏览器本地生成。",
      },
      {
        question: "我上传的标志会被发送到服务器吗？",
        answer:
          "不会。标志完全在浏览器内处理，绝不上传，因此品牌资产保持私密。",
      },
      {
        question: "favicon.ico和PNG网站图标有什么区别？",
        answer:
          "favicon.ico是一个容器，在一个二进制文件中包含多种图标尺寸，浏览器已支持数十年。PNG网站图标是单尺寸图片；现代浏览器两者都接受，但.ico仍是最安全的默认选择。",
      },
      {
        question: "什么是苹果触摸图标？",
        answer:
          "它是iOS用户将网站添加到主屏幕时使用的180×180 PNG图标。没有它，iOS会截取页面截图代替，效果通常很差。",
      },
      {
        question: "192×192和512×512 PWA图标是做什么的？",
        answer:
          "它们是网页应用清单中列出的图标，用于可安装的渐进式网页应用。安卓和Chrome用它们作为主屏幕图标、启动画面和应用启动器图标。",
      },
      {
        question: "没有标志也能用文字制作网站图标吗？",
        answer:
          "可以。字母组合模式将1–3个字母（如品牌首字母）变成整洁的徽章，可自选背景色、文字颜色和边角形状——无需设计软件。",
      },
      {
        question: "为获得最佳效果应该上传什么样的标志文件？",
        answer:
          "上传512×512或更大的正方形透明背景PNG或SVG。正方形源图片裁剪整洁；过宽或过高的标志会被居中裁剪，可能切掉边缘。",
      },
      {
        question: "为什么部署后新的网站图标不显示？",
        answer:
          "浏览器会强缓存网站图标。请用Ctrl+Shift+R（Mac上为Cmd+Shift+R）硬刷新，清除网站缓存，或在隐私窗口中测试查看新图标。",
      },
      {
        question: "网站图标应该与标志完全一致吗？",
        answer:
          "大尺寸下应该一致，但在16×16时精细细节会消失。请为最小尺寸简化标志——粗体首字母或单个粗体形状比精细标志易读得多。",
      },
      {
        question: "应该选择哪种边角形状？",
        answer:
          "圆角方形匹配iOS和macOS应用图标风格，圆形适合头像和社交风格标志，直角方形最适合几何或技术类品牌标志。",
      },
      {
        question: "需要为图标添加HTML链接标签吗？",
        answer:
          "为获得可靠效果，需要添加。浏览器默认会查找/favicon.ico，但苹果触摸图标和PWA图标只有在页面<head>中用<link>标签声明后才会加载，本工具会为您生成这些标签。",
      },
      {
        question: "生成的图标也能用于移动应用吗？",
        answer:
          "192×192和512×512 PNG适用于PWA安装，但原生iOS和安卓应用需要各自特定尺寸和格式的图标集，本工具（面向网页）不生成这些。",
      },
      {
        question: "网站图标生成器能离线使用吗？",
        answer:
          "可以。页面加载后，图标生成完全在浏览器内运行，无需网络请求。",
      },
      {
        question: "字母组合网站图标用什么背景色最好？",
        answer:
          "纯色高对比品牌色配白色或近白色字母效果最好，在16×16下依然清晰。请避免浅色文字配浅色背景和杂乱渐变。",
      },
      {
        question: "更改品牌颜色后能重新生成图标吗？",
        answer:
          "可以。只需更新颜色或上传新标志并下载全新图标集——工具不会保留上一次会话的任何内容，每次运行都从干净状态开始。",
      },
      {
        question: "网站图标在深色模式浏览器标签页中能正常显示吗？",
        answer:
          "纯色背景的网站图标在浅色和深色标签页中显示相同。如果标志是深色透明底，请添加浅色背景或描边，让它在深色浏览器界面上依然可见。",
      },
      {
        question: "工具会存储我的标志或生成的图标吗？",
        answer:
          "不会。所有处理都在浏览器标签页本地运行，没有任何内容被上传或存储，关闭或刷新页面后文件即消失。",
      },
    ],
  },
};
