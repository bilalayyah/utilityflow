import type { UiStrings } from '../ui';

/**
 * Chinese (Simplified) chrome dictionary — same UiStrings shape and key
 * order as src/locales/en/ui.ts. Natural modern Simplified Chinese;
 * brand names, URLs, email addresses and code values kept identical
 * to English.
 */
export const zhStrings: UiStrings = {
  nav: {
    tools: '工具',
    categories: '分类',
    about: '关于我们',
    contact: '联系我们',
    blog: '博客',
    allTools: '全部工具',
    searchPlaceholder: '搜索 83 个工具...',
    searchTools: '搜索工具',
    closeSearch: '关闭搜索',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    skipToContent: '跳到正文',
    language: '语言',
    chooseLanguage: '选择语言',
  },
  footer: {
    tagline:
      '为作家、工程师、营销人员与分析师打造的快速、浏览器优先的日常工具合集。本地运行，开销极小。',
    categories: '分类',
    explore: '探索',
    trustLegal: '信任与法律信息',
    home: '首页',
    allToolsDirectory: '全部工具目录',
    blog: '博客',
    aboutUs: '关于我们',
    contact: '联系我们',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    xmlSitemap: 'XML 站点地图',
    rightsReserved: '版权所有。',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: '我们使用 Cookie 和分析来了解网站的使用情况并加以改进。您可以接受或拒绝。',
    accept: '接受',
    decline: '拒绝',
    cookieSettings: 'Cookie 设置',
  },
  common: {
    copy: '复制',
    copied: '已复制',
    download: '下载',
    clear: '清空',
    loadSample: '加载示例',
    reset: '重置',
    search: '搜索',
    close: '关闭',
    cancel: '取消',
    save: '保存',
    submit: '提交',
    loading: '加载中...',
    processing: '处理中...',
    upload: '上传',
    chooseFile: '选择文件',
    dragDrop: '将文件拖放到此处',
    tryAgain: '再试一次',
    openTool: '打开工具',
    browserSide: '浏览器端',
    externalApi: '外部 API',
  },
  home: {
    seoTitle: 'UtilityFlow——免费快速的浏览器在线实用工具平台，83个工具',
    seoDescription:
      '免费、快速、注重隐私的在线实用工具平台，提供83个工具，涵盖文本分析、开发者排版、计算器、PDF、SEO检查与图片处理流程，全部在浏览器中运行，无需上传文件、无需注册账号，打开即用，支持中文在内的11种语言，数据不出设备，安全又方便。',
    seoKeywords: [
      '在线实用工具',
      '浏览器工具',
      '文本工具',
      '开发者工具',
      '在线计算器',
      'PDF 工具',
      'SEO 工具',
    ],
    eyebrow: '{count} 个免费在线工具 · 无需注册 · 100% 隐私',
    h1Lead: '免费在线工具',
    h1Rest: '，快速又私密。',
    heroDescription:
      '{count} 个浏览器优先工具，覆盖文本、开发者、计算器、社交媒体、PDF、SEO 与图片处理——无需注册、无需安装，一切都在浏览器内私密运行。',
    exploreCategories: '浏览分类',
    openDirectory: '打开完整目录',
    metrics: {
      toolCategories: '工具分类',
      browserUtilities: '浏览器工具',
      liveTools: '已上线工具',
      accountRequired: '需要账号',
      none: '无需账号',
    },
    popular: {
      title: '热门工具',
      description: '写作、开发与计算中最常用的日常工具。',
      viewDirectory: '查看工具目录',
    },
    categories: {
      title: '工具分类',
      description:
        '七个专业工具套件，涵盖写作、编程、数学、发布、文档、搜索优化与媒体处理流程。',
      includes: '包含：{names}',
    },
    directory: {
      title: '全部工具目录',
      description:
        '按分类或关键词筛选，直接跳转到任意已上线工具或分类中心。',
      filterPlaceholder: '筛选分类或工具...',
      allCategories: '全部分类',
      noMatch: '没有与“{query}”匹配的分类或工具。',
      resetFilters: '重置筛选',
      upcomingUtilities: '即将上线：{names}',
      toolsActive: '已有 {count} 个工具上线',
      openCategory: '打开分类页面',
    },
    why: {
      title: '为什么选择 UtilityFlow',
      description: '作为广告泛滥的工具网站的干净、可靠替代品而打造。',
      items: [
        {
          title: '浏览器优先的隐私保护',
          description:
            '核心计算、字符串转换与排版直接在客户端内存中运行，敏感草稿与 JSON 数据始终保留在您的设备上。',
        },
        {
          title: '快速轻量的加载体验',
          description:
            '按需加载的工具模块与极少的运行时依赖，让初始页面加载保持轻盈，在任何网络下都能保持良好的 Core Web Vitals 表现。',
        },
        {
          title: '永久干净的网址',
          description:
            '每个工具都有自己专属的网址，附带结构化元数据、使用示例，刷新浏览器后深层链接依然可靠。',
        },
        {
          title: '可预期、可验证的结果',
          description:
            '工具专注于确定的输出、透明的操作说明与无障碍控件，没有杂乱的弹窗或误导性提示。',
        },
      ],
    },
    howItWorks: {
      title: 'How It Works',
      description: 'Three simple steps — no account, no install, no waiting.',
      steps: [
        {
          title: 'Find your tool',
          description: 'Search or browse the directory to find the tool you need.',
        },
        {
          title: 'Use it right in your browser',
          description: 'Open the tool and start working instantly — nothing to install.',
        },
        {
          title: 'Copy or download the result',
          description: 'Copy your output or download it as a file, ready to use.',
        },
      ],
    },
    faq: {
      title: '常见问题',
      description:
        '关于 UtilityFlow 如何运作，以及新工具有哪些值得期待的内容。',
    },
    faqs: [
      {
        question: 'UtilityFlow 的工具无需创建账号即可免费使用吗？',
        answer:
          '是的。UtilityFlow 的全部 83 个浏览器工具均可免费使用，无需注册、登录墙、点数或订阅。',
      },
      {
        question: 'UtilityFlow 会把我的文本、代码或文件上传到服务器吗？',
        answer:
          '全部 83 个核心浏览器工具都在您的网页浏览器本地运行，不会上传输入内容。',
      },
      {
        question: '83 个工具在平台上是如何组织的？',
        answer:
          'UtilityFlow 涵盖七大核心分类（文本与写作、开发者、计算器、社交媒体、PDF、SEO、图片与文件工具），共 83 个浏览器工具，全部集成在平台中。',
      },
      {
        question: '我可以收藏或分享某个具体工具的直接链接吗？',
        answer:
          '可以。每个工具与分类都有自己永久、干净的网址（例如 /word-counter/ 或 /category/developer-tools/），可直接打开，刷新浏览器后依然有效。',
      },
      {
        question: 'UtilityFlow 在手机与平板上运行流畅吗？',
        answer:
          '是的。包括浅色模式与深色模式在内的所有布局、导航控件与交互工作区均采用移动优先设计，触摸目标易于点击，网格布局可自适应屏幕。',
      },
    ],
    trustLine: '所有工具均免费 • 无需注册 • 直接在浏览器中使用',
  },
  directory: {
    seoTitle: '全部在线实用工具目录 | UtilityFlow',
    seoDescription:
      '浏览并搜索 UtilityFlow 上所有基于浏览器的工具与分类，涵盖写作、开发、计算器、PDF、SEO 与图片处理。',
    seoKeywords: ['实用工具目录', '全部在线工具', '免费浏览器工具'],
    title: '全部工具目录',
    description:
      '浏览 UtilityFlow 上注册的全部 {count} 个已上线工具，或探索七个分类中心。',
    searchPlaceholder: '按工具名称、关键词或分类搜索...',
    showing: '共 {categories} 个分类、{tools} 个已上线工具',
    all: '全部',
    availableTools: '可用工具',
    categorySuites: '分类套件',
    visitHub: '访问 {name} 中心',
    plannedToolsInclude: '此类别中的工具包括：{names}',
    noMatch: '没有与您的筛选条件匹配的分类或工具。',
    clearFilters: '清除筛选',
  },
  category: {
    plannedCount: '{count} 个工具',
    toolsCount: '{count} 个工具',
    toolsLive: '已有 {count} 个工具上线',
    ofToolsLive: '共 {total} 个工具，已上线 {count} 个',
    availableTools: '可用的 {name}',
    exploreOther: '浏览其他分类',
    scheduledTitle: '更多工具即将推出',
    scheduledDescription:
      '该分类中心已在 {name} 架构中上线并收录。具备浏览器端功能的专属工具页面即将在此添加。',
    plannedToolsTitle: '该分类的工具：',
  },
  toolPage: {
    howToUse: '{name} 使用方法',
    practicalExamples: '实用示例',
    faqs: '常见问题',
    keyBenefits: '主要优势',
    commonUseCases: '常见使用场景',
    runsLocally: '在您的浏览器本地运行',
    externalApi: '外部 API 集成',
    loadingWorkspace: '正在加载 {name} 工作区...',
    input: '输入',
    output: '输出',
    relatedTitle: '相关工具',
    relatedDescription: '使用互补工具继续您的工作流程。',
    browseAll: '浏览全部 {name}',
    moreToolsIn: '更多工具',
    willAppear: '即将在此显示。',
    bylineAuthor: '作者：Bilal',
    lastUpdated: '最后更新：2026年11月',
  },
  blog: {
    seoTitle: '指南、教程与资源 | UtilityFlow 博客',
    seoDescription:
      '为每个 UtilityFlow 工具提供的实用指南、分步教程和资源——文本、开发、计算器、PDF、SEO、社交媒体和图片工具。',
    title: '指南、教程与资源',
    description:
      '为每个 UtilityFlow 工具提供的实用指南和分步教程。了解每个工具的用途、正确使用方法以及如何获得最佳效果。',
    searchPlaceholder: '搜索文章...',
    searchArticles: '搜索文章',
    noResults: '未找到文章。',
    featured: '精选文章',
    latest: '最新文章',
    browseByCategory: '按分类浏览',
    relatedArticles: '相关文章',
    relatedTools: '相关工具',
    readingTime: '阅读时长 {minutes} 分钟',
    publishedOn: '发布于 {date}',
    updatedOn: '更新于 {date}',
    byEditorial: 'UtilityFlow 编辑团队',
    tableOfContents: '目录',
    prevArticle: '上一篇文章',
    nextArticle: '下一篇文章',
    share: '分享',
    tryTool: '试用工具',
    guidesInCategory: '该分类下的指南',
    categoryGuidesWord: '指南',
    noArticlesYet: '暂无文章',
    noArticlesYetDescription: '本栏目的指南即将推出，敬请期待。',
    backToBlog: '返回博客',
    allArticles: '全部文章',
    notAvailableInLanguage: '本文暂不支持当前语言。',
    minRead: '分钟阅读',
  },
  search: {
    placeholder:
      '搜索工具或分类（例如：字数统计、JSON、PDF、计算器）...',
    search: '搜索',
    tools: '工具',
    categories: '分类',
    noResults: '没有找到与“{query}”匹配的工具或分类。',
    viewDirectory: '查看完整目录',
    clearSearch: '清除搜索',
    ariaLabel: '搜索工具或分类',
  },
  notFound: {
    seoTitle: '页面未找到（404）| UtilityFlow',
    seoDescription:
      '在 UtilityFlow 上找不到请求的工具或页面。请搜索工具目录或浏览分类。',
    eyebrow: '404 · 未找到页面',
    title: '我们找不到该页面。',
    description:
      '该网址可能已移动，或此工具尚未发布。请在下方搜索，或浏览分类找到您需要的内容。',
    returnHome: '返回首页',
    browseDirectory: '浏览目录',
    browseCategories: '浏览分类',
  },
  about: {
    seoTitle: '关于 UtilityFlow——浏览器优先的在线工具平台',
    seoDescription:
      '了解 UtilityFlow 如何在七大分类中打造快速、注重隐私的浏览器工具，无需账号、杂乱内容或不必要的数据上传。',
    title: '关于 UtilityFlow',
    intro:
      'UtilityFlow 是一个独立的网络平台，致力于打造 83 个专注、可靠的工具，服务日常数字工作。',
    whyTitle: '我们为什么打造 UtilityFlow',
    whyP1:
      '日常在线任务——统计字数、验证 JSON、检查字符限制、计算贷款还款或压缩图片——常常迫使人们使用缓慢的网站，上面布满侵入式弹窗、令人困惑的下载或强制注册。',
    whyP2:
      '我们的目标很简单：为每个工具提供一个干净的专属页面，加载快速、清楚说明工具的工作方式，并在网络标准允许的情况下直接在浏览器内执行。',
    orgTitle: '谁在运营 UtilityFlow',
    orgP1:
      'UtilityFlow 是由 Bilal 创建并维护的独立项目，他利用业余时间开发免费网络工具。网站背后没有公司，没有投资者资金，也没有员工团队——每一个工具、指南和帮助页面都由一个人设计、开发和测试。全部 83 个工具无需注册或订阅即可免费使用。页脚的署名是 Shaheen，正是他的鼓励启发了这个项目，他的名字出现在每一页上，提醒人们这个想法从何而来。',
    orgP2:
      '正因为项目规模小且独立，决策保持简单：如果某个工具运行缓慢、令人困惑或出错，就会得到修复。通过联系页面发送的反馈会直接到达能够修改代码的人手中，访客的建议已经催生了新的工具和全站的改进。',
    howTitle: '我们的工具如何开发与测试',
    howP1:
      '每个工具都从一个明确的单一任务出发——统计字数、合并 PDF、格式化 JSON——并被打造成专注做好这项任务的页面。只要网络标准允许，所有处理都在您的浏览器内完成，您的文本和文件无需离开设备。每个工具页面都用简短指南说明操作步骤、展示实际示例，并回答人们最常问的问题，让您可以自行判断结果，而不必盲目信任一个黑盒。',
    howP2:
      '工具上线之前，会在桌面浏览器和手机浏览器中使用真实输入进行测试，包括空输入、超长文本和不常见文件类型等边界情况。如果出现故障或计算结果有误，修复会随网站更新发布，页面也会重新检查。所有工具都在您的浏览器内完整运行，您输入的任何内容都不会发送到服务器。',
    whoTitle: 'UtilityFlow 适合谁',
    whoP1:
      'UtilityFlow 面向所有需要快速获得工具结果、而不想安装软件或创建账号的人：检查论文字数的学生、排版草稿的作者、验证 JSON 或编码 URL 的开发者、检查字符限制的营销人员，以及计算贷款或折扣的小企业主。如果一项任务不到一分钟就能完成，相应的工具也应该不到一分钟就能完成——这是本站每个页面都要达到的标准。',
    principlesTitle: '核心工程原则',
    principles: [
      {
        title: '客户端执行',
        description:
          '文本、代码、数学与本地文件工具在浏览器内存中处理输入，因此您的工作数据不会发送到远程服务器。',
      },
      {
        title: '透明的 API 说明',
        description:
          '如果某个专业工具需要外部查询或服务器调用，我们会在您运行之前，在该工具页面上明确说明。',
      },
      {
        title: '无障碍界面',
        description:
          '键盘导航、清晰的对比度、明确的错误反馈与自适应的移动控件已内置于每个模板中。',
      },
      {
        title: '模块化发布',
        description:
          '工具按分类发布与验证，确保每个工具都经过充分的功能测试并配有完善的文档。',
      },
    ],
    categoriesTitle: '七大工具分类',
    feedbackTitle: '有反馈或建议吗？',
    feedbackBefore:
      '如果您发现计算的边界情况、无障碍问题，或想推荐某个新工具，请通过我们的',
    feedbackLink: '联系页面',
    feedbackAfter: '与我们联系。',
  },
  contact: {
    seoTitle: '联系 UtilityFlow——支持、错误报告与建议',
    seoDescription:
      '联系 UtilityFlow 团队，报告问题、建议新的实用工具，或咨询隐私与条款相关问题。',
    title: '联系我们',
    intro:
      '发送错误报告、工具建议或一般咨询。我们会阅读每一份提交，并优先修复影响工具准确性与无障碍体验的问题。',
    aboutTitle: '您可以写些什么',
    aboutP1:
      '这份表单可用于与网站相关的任何事项。报告错误时，请告诉我们您当时使用的工具、输入了什么内容，以及您期望发生什么——细节越充分，问题复现和修复的速度就越快。建议新工具时，请描述它应完成的工作；许多访客都提出的需求会优先处理。您还可以指出错误的计算、令人困惑的说明，或任何页面上的翻译错误。',
    aboutP2:
      '隐私与法律问题也欢迎咨询。如果您发布的评论需要删除，请附上工具页面和您使用的名字，我们会将其删除。其他事项——合作想法、媒体咨询，或对网站的一般意见——同样可以使用这份表单，也可以直接使用本页上的邮箱地址联系我们。',
    responseTitle: '发送消息后会发生什么',
    responseP1:
      '每条消息都会由开发和维护 UtilityFlow 的本人亲自阅读——这里没有客服部门，也没有自动回复队列。错误报告和错误结果会优先处理，因为损坏的工具会影响每一位使用者。工具建议会被收集起来，并根据使用人数以及与本站浏览器优先理念的契合程度进行权衡。',
    responseP2:
      '联系我们无需注册账号，我们只会使用您的邮箱地址来回复您的消息。如果您不想使用表单，本页上的直接邮箱地址通向同一个收件箱。',
    name: '姓名',
    email: '邮箱地址',
    topic: '主题',
    message: '留言',
    submit: '提交留言',
    sending: '发送中…',
    sendError: '无法发送您的留言。请重试。',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: '请详细描述相关工具、错误或问题...',
    topics: [
      '工具建议',
      '错误报告',
      'SEO 或内容更正',
      '隐私或法律咨询',
      '一般问题',
    ],
    errors: {
      name: '请输入您的姓名。',
      emailEmpty: '请输入您的邮箱地址。',
      emailInvalid: '请输入有效的邮箱地址。',
      subject: '请选择或输入主题。',
      message: '留言请至少包含 10 个字符。',
    },
    successTitle: '消息已发送',
    successThanks:
      '谢谢您，{name}。您的消息已发送，我们会尽快回复您。',
    successNote:
      '如果您需要补充任何内容，也可以通过以下邮箱直接联系我们',
    sendAnother: '再发一条留言',
    directEmail: '直接发送邮件',
    directEmailText: '想直接写信？请通过以下邮箱联系我们的团队：',
  },
  privacy: {
    seoTitle: '隐私政策 | UtilityFlow',
    seoDescription:
      '阅读 UtilityFlow 隐私政策，了解浏览器端工具执行、Cookie、服务器日志与数据分析的相关内容。',
    title: '隐私政策',
    lastUpdated: '最后更新：2026 年 11 月',
    sections: [
      {
        title: '1. 概述',
        paragraphs: [
          'UtilityFlow 以客户端浏览器处理为核心设计。本隐私政策说明您访问本网站时处理的信息、我们的工具如何处理输入内容，以及 Cookie 与数据分析如何运作。',
        ],
      },
      {
        title: '2. 工具输入与浏览器处理',
        paragraphs: [
          '在我们 83 个基于浏览器的工具中输入的文本、数字、代码片段与文件，均在您的浏览器会话内本地处理，不会离开您的设备。',
          '在我们的工具下方发表评论时，只需提供名字和评论文本。您提交的名字和文本会存储在我们的托管平台上，并与日期一起公开展示在相应工具页面上。评论无需提供邮箱地址或注册账号，我们也不会将评论数据用于广告。如果您希望删除某条评论，请联系我们并提供页面和所用名字，我们会将其删除。',
        ],
      },
      {
        title: '3. 托管日志与技术遥测',
        paragraphs: [
          'UtilityFlow 托管于 Cloudflare Pages。与标准网络托管服务商一样，我们的边缘网络可能会自动处理标准 HTTP 请求元数据（如 IP 地址、浏览器用户代理、请求网址与时间戳），以可靠地提供页面、防范滥用并维护安全。',
          '我们不会将托管日志与其他数据结合来识别个别访客，也不会向广告商出售或分享日志数据。日志仅用于保障服务的正常运行与安全。',
        ],
      },
      {
        title: '4. Cookie 与数据分析',
        paragraphs: [
          'UtilityFlow 目前不展示任何第三方广告。',
          '我们还使用 Google Analytics 4 以汇总方式了解网站的使用情况；它仅在您于横幅中接受 Cookie 后才会运行。',
        ],
      },
      {
        title: '5. 外部链接',
        paragraphs: [
          '我们的文档或工具页面可能会链接到外部网站。我们对第三方网站的隐私做法或内容不承担责任。',
          '外部链接会尽可能在新标签页中打开。在任何链接网站上输入个人信息之前，请先查看该网站自身的隐私政策。',
        ],
      },
      {
        title: '6. 数据保留',
        paragraphs: [
          '在浏览器中处理的信息从不会发送给我们，因此无从保留。评论会一直保留，直到被我们删除或应您的要求删除。托管日志与安全记录仅在托管服务商运营和保护服务所需的有限期限内保留。',
        ],
      },
      {
        title: '7. 您的权利与选择',
        paragraphs: [
          '您可以在浏览器设置中随时阻止或删除 Cookie。如果您发布过评论，可以联系我们要求删除。由于我们的工具在您的浏览器中运行，且我们不保留账号或个人资料，因此没有可供下载或更正的个人数据文件——但如果您对自己的数据有任何疑问，写信给我们都会得到答复。',
        ],
      },
      {
        title: '8. 儿童隐私',
        paragraphs: [
          'UtilityFlow 是通用网站，并非面向 13 岁以下儿童。我们不会有意收集儿童的个人信息。如果您是家长或监护人，并认为孩子曾在本站发表评论，请联系我们，我们会将其删除。',
        ],
      },
      {
        title: '9. 本政策的变更',
        paragraphs: [
          '当我们新增工具、更换服务商或调整网站运作方式时，可能会更新本隐私政策。本页顶部的“最后更新”日期显示了最近一次修订时间。在变更后继续使用本站，即表示您接受更新后的政策。',
        ],
      },
    ],
    contactTitle: '10. 联系方式',
    contactBefore:
      '如果您对本隐私政策有任何疑问，请通过我们的',
    contactLink: '联系页面',
    contactMiddle: '联系我们，或发送邮件至',
  },
  terms: {
    seoTitle: '服务条款 | UtilityFlow',
    seoDescription:
      '查看管理 UtilityFlow 浏览器工具使用的服务条款，包括知识产权、准确性免责声明与责任限制。',
    title: '服务条款',
    lastUpdated: '最后更新：2026 年 11 月',
    sections: [
      {
        title: '2. 允许的使用方式',
        paragraphs: [
          '您可以将 UtilityFlow 用于个人、教育与商业生产力任务。您同意不自动产生滥用流量、不试图干扰网站提供服务、不对安全防护进行逆向工程，也不将任何工具用于非法活动。',
          '您可以链接到我们的工具并分享其结果。您不得将我们的工具冒充为自己的产品，不得复制本站的设计或内容并作为竞争服务重新发布，也不得以误导他人关于结果来源的方式使用本站。',
        ],
      },
      {
        title: '3. 准确性与信息免责声明',
        paragraphs: [
          '虽然我们会认真测试每个工具，但所有工具、计算、转换与 SEO 检查均按“现状”与“可用状态”提供。在做出财务、法律、医疗或生产工程决策之前，请独立验证输出结果。',
          '贷款还款、税费估算和货币换算等计算结果只是规划辅助工具，并非专业建议。数字会随费率、规则和四舍五入而变化，因此在据此采取重要行动之前，请向合格专业人士或官方来源确认重要数字。',
        ],
      },
      {
        title: '4. 知识产权',
        paragraphs: [
          'UtilityFlow 的界面、品牌资产、文档与源代码受相关知识产权法保护。您对使用我们客户端工具处理的任何文本、代码、文档或图片保留完整所有权。',
          'UtilityFlow 是一个独立项目，与本网站提及的 YouTube、Instagram、Google 或任何其他第三方品牌均无关联，也未获得其认可或与之存在合作关系。',
        ],
      },
      {
        title: '5. 责任限制',
        paragraphs: [
          '在法律允许的最大范围内，UtilityFlow 及其贡献者不对因您使用或无法使用本平台而产生的任何间接、附带、特殊或后果性损害承担责任。',
        ],
      },
      {
        title: '6. 用户内容与评论',
        paragraphs: [
          '您在我们工具中输入的任何内容或发表的评论，其完整所有权归您所有。发表评论即表示您授权我们在相关工具页面上公开展示该评论。请勿发布任何违法、误导或伤害他人的内容，也不要发布他人的个人信息。我们可能会在不另行通知的情况下删除违反这些规则或被举报的评论。',
        ],
      },
      {
        title: '7. 第三方服务',
        paragraphs: [
          '部分功能依赖独立的第三方服务：联系表单由 FormSubmit 投递，网站托管于 Cloudflare。每项服务都有各自的条款与隐私政策，您的使用受这些文件约束。UtilityFlow 不对第三方服务的可用性或做法负责。',
        ],
      },
      {
        title: '8. 服务可用性',
        paragraphs: [
          'UtilityFlow 是免费服务，我们不保证每个工具始终可用。工具可能会变更、改进或下线，网站也可能因维护而暂时无法访问。我们会努力保持服务平稳运行，但不对中断或因停机造成的任何损失承担责任。',
        ],
      },
    ],
    acceptanceTitle: '1. 接受条款',
    acceptanceBefore:
      '访问或使用 UtilityFlow，即表示您同意遵守本服务条款与我们的',
    acceptanceLink: '隐私政策',
    acceptanceAfter:
      '。如果您不同意其中任何部分，请停止使用本网站。',
    changesTitle: '9. 变更与联系方式',
    changesBefore:
      '随着新工具的发布，我们可能会更新本服务条款。如有疑问，可通过我们的',
    changesLink: '联系页面',
    changesAfter: '联系我们。',
  },
};
