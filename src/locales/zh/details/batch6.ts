// Detail content for ZH tools — split out of
// src/locales/zh/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
  'serp-snippet-preview': {
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
  'xml-sitemap-generator': {
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
  'robots-txt-generator': {
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
  'schema-markup-generator': {
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
  'url-slug-generator': {
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
  'keyword-density-checker': {
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
  'canonical-hreflang-generator': {
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
  'on-page-seo-checker': {
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
  'robots-meta-tag-generator': {
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
};
