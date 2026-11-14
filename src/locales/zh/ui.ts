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
    aiTools: 'AI 工具',
    about: '关于我们',
    contact: '联系我们',
    allTools: '全部工具',
    freeAiTools: '免费 AI 工具',
    viewAiSection: '在首页查看 AI 专区 →',
    searchPlaceholder: '搜索 88 个工具...',
    searchTools: '搜索工具',
    closeSearch: '关闭搜索',
    openMenu: '打开导航菜单',
    closeMenu: '关闭导航菜单',
    skipToContent: '跳到正文',
    language: '语言',
    chooseLanguage: '选择语言',
    aiWriting: {
      label: 'AI 写作助手',
      desc: '语法、改写、语气与邮件起草',
    },
    aiSummarizer: {
      label: 'AI 文本摘要工具',
      desc: '短、中、要点式摘要',
    },
    aiFinder: {
      label: 'AI 智能工具查找器',
      desc: '用通俗语言找到合适的工具',
    },
  },
  footer: {
    tagline:
      '为作家、工程师、营销人员与分析师打造的快速、浏览器优先的日常工具合集。本地运行，开销极小。',
    categories: '分类',
    platformAi: '平台与 AI',
    legal: '法律信息',
    home: '首页',
    allToolsDirectory: '全部工具目录',
    aboutUs: '关于我们',
    contact: '联系我们',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    xmlSitemap: 'XML 站点地图',
    rightsReserved: '版权所有。',
    deployedNote: 'Crafted with ❤️ by Bilal, inspired by Shaheen.',
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
    freeAiTool: '免费 AI 工具',
    externalApi: '外部 API',
  },
  home: {
    seoTitle: 'UtilityFlow——快速的浏览器在线实用工具平台',
    seoDescription:
      '免费、快速、注重隐私的在线实用工具，涵盖文本分析、开发者排版、计算器、PDF、SEO 检查与图片处理流程。',
    seoKeywords: [
      '在线实用工具',
      '浏览器工具',
      '文本工具',
      '开发者工具',
      '在线计算器',
      'PDF 工具',
      'SEO 工具',
    ],
    eyebrow: 'UtilityFlow 平台 · 7 大核心分类 · {count} 个已上线工具',
    h1: '为速度与隐私而生的实用在线工具。',
    heroDescription:
      'UtilityFlow 汇集了 85 个浏览器优先的工具，以及免费的 AI 写作、摘要与智能工具发现功能，覆盖文本、开发者、计算器、社交媒体、PDF、SEO 与图片处理流程。',
    exploreCategories: '浏览分类',
    openDirectory: '打开完整目录',
    aiWriting: 'AI 写作',
    aiSummarizer: 'AI 摘要',
    aiFinder: 'AI 工具查找器',
    metrics: {
      toolCategories: '工具分类',
      browserUtilities: '浏览器工具',
      liveTools: '已上线工具',
      accountRequired: '需要账号',
      none: '无需账号',
    },
    aiSpotlight: {
      badge: '免费 AI 套件 · 无需登录',
      title: '免费 AI 工具',
      description:
        '无需注册，几秒钟即可改进草稿、摘要长文档或找到合适的工具。',
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
      scheduledInBatch: '计划于第 {batch} 批上线',
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
    faq: {
      title: '常见问题',
      description:
        '关于 UtilityFlow 如何运作，以及后续批次有哪些值得期待的内容。',
    },
    faqs: [
      {
        question: 'UtilityFlow 的工具无需创建账号即可免费使用吗？',
        answer:
          '是的。UtilityFlow 的全部 85 个浏览器工具与 3 个 AI 工具均可免费使用，无需注册、登录墙、点数或订阅。',
      },
      {
        question: 'UtilityFlow 会把我的文本、代码或文件上传到服务器吗？',
        answer:
          '全部 85 个核心浏览器工具都在您的网页浏览器本地运行，不会上传输入内容。3 个可选的免费 AI 工具（AI 写作助手、AI 文本摘要工具与 AI 智能工具查找器）会通过服务器端 Groq 推理安全处理您的提示，且不会保存您的文本。',
      },
      {
        question: '88 个工具在平台上是如何组织的？',
        answer:
          'UtilityFlow 涵盖七大核心分类（文本与写作、开发者、计算器、社交媒体、PDF、SEO、图片与文件工具），共 85 个浏览器工具，以及集成在平台中的 3 个免费 AI 工具。',
      },
      {
        question: '我可以收藏或分享某个具体工具的直接链接吗？',
        answer:
          '可以。每个工具与分类都有自己永久、干净的网址（例如 /word-counter/、/ai-writing-assistant/ 或 /category/developer-tools/），可直接打开，刷新浏览器后依然有效。',
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
      '浏览 UtilityFlow 上注册的全部 {count} 个已上线工具，或探索涵盖浏览器与免费 AI 流程的七个分类中心。',
    searchPlaceholder: '按工具名称、关键词或分类搜索...',
    showing: '共 {categories} 个分类、{tools} 个已上线工具',
    all: '全部',
    availableTools: '可用工具',
    categorySuites: '分类套件',
    visitHub: '访问 {name} 中心',
    plannedToolsInclude: '计划中的工具包括：{names}',
    noMatch: '没有与您的筛选条件匹配的分类或工具。',
    clearFilters: '清除筛选',
  },
  category: {
    batchLabel: '第 {batch} 批',
    plannedCount: '计划 {count} 个工具',
    toolsCount: '{count} 个工具',
    toolsLive: '已有 {count} 个工具上线',
    ofToolsLive: '共 {total} 个工具，已上线 {count} 个',
    availableTools: '可用的 {name}',
    exploreOther: '浏览其他分类',
    scheduledTitle: '计划于第 {batch} 批实施',
    scheduledDescription:
      '该分类中心已在 {name} 架构中上线并收录。具备浏览器端功能的专属工具页面将于第 {batch} 批期间在此添加。',
    plannedToolsTitle: '该分类计划中的工具：',
  },
  toolPage: {
    howToUse: '{name} 使用方法',
    practicalExamples: '实用示例',
    faqs: '常见问题',
    keyBenefits: '主要优势',
    commonUseCases: '常见使用场景',
    runsLocally: '在您的浏览器本地运行',
    externalApi: '外部 API 集成',
    freeAiTool: '免费 AI 工具 · 无需登录',
    loadingWorkspace: '正在加载 {name} 工作区...',
    input: '输入',
    output: '输出',
    relatedTitle: '相关工具',
    relatedDescription: '使用互补工具继续您的工作流程。',
    browseAll: '浏览全部 {name}',
    moreToolsIn: '更多工具',
    willAppear: '将于第 {batch} 批发布时在此显示。',
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
      'UtilityFlow 是一个独立的网络平台，致力于打造 85 个专注、可靠的浏览器工具，服务日常数字工作。',
    whyTitle: '我们为什么打造 UtilityFlow',
    whyP1:
      '日常在线任务——统计字数、验证 JSON、检查字符限制、计算贷款还款或压缩图片——常常迫使人们使用缓慢的网站，上面布满侵入式弹窗、令人困惑的下载或强制注册。',
    whyP2:
      '我们的目标很简单：为每个工具提供一个干净的专属页面，加载快速、清楚说明工具的工作方式，并在网络标准允许的情况下直接在浏览器内执行。',
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
          '工具按七个分类批次发布与验证，确保每个工具都经过充分的功能测试并配有完善的文档。',
      },
    ],
    categoriesTitle: '计划中的七大工具分类',
    feedbackTitle: '有反馈或建议吗？',
    feedbackBefore:
      '如果您发现计算的边界情况、无障碍问题，或想为后续批次推荐某个工具，请通过我们的',
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
      '阅读 UtilityFlow 隐私政策，了解浏览器端工具执行、Cookie、服务器日志与第三方广告披露的相关内容。',
    title: '隐私政策',
    lastUpdated: '最后更新：2026 年 11 月',
    sections: [
      {
        title: '1. 概述',
        paragraphs: [
          'UtilityFlow 以客户端浏览器处理为核心设计。本隐私政策说明您访问本网站时处理的信息、我们的工具如何处理输入内容，以及 Cookie 或广告技术如何运作。',
        ],
      },
      {
        title: '2. 工具输入、浏览器处理与免费 AI 工具',
        paragraphs: [
          '在我们 85 个基于浏览器的工具中输入的文本、数字、代码片段与文件，均在您的浏览器会话内本地处理，不会离开您的设备。',
          '我们提供的三个可选免费 AI 工具（AI 写作助手、AI 文本摘要工具与 AI 智能工具查找器）会把提交的文本通过受保护的后端发送至 Groq 进行实时推理。我们不会保存或记录您的提示，免费每日限流仅使用带 UTC 日期标记的 SHA-256 哈希值，因此绝不会保存访客的原始 IP 地址。',
        ],
      },
      {
        title: '3. 托管日志与技术遥测',
        paragraphs: [
          'UtilityFlow 托管于 Cloudflare Pages。与标准网络托管服务商一样，我们的边缘网络可能会自动处理标准 HTTP 请求元数据（如 IP 地址、浏览器用户代理、请求网址与时间戳），以可靠地提供页面、防范滥用并维护安全。',
        ],
      },
      {
        title: '4. Cookie 与第三方广告',
        paragraphs: [
          '为支持免费使用工具，我们可能会展示来自第三方广告网络（例如 Google AdSense）的广告。包括 Google 在内的第三方供应商可能会使用 Cookie 或网络信标，根据用户此前访问本网站或其他网站的情况投放广告。',
          '您可以访问 Google 广告设置，或直接在浏览器设置中管理 Cookie 偏好，以选择退出个性化广告。',
        ],
      },
      {
        title: '5. 外部链接',
        paragraphs: [
          '我们的文档或工具页面可能会链接到外部网站。我们对第三方网站的隐私做法或内容不承担责任。',
        ],
      },
    ],
    contactTitle: '6. 联系方式',
    contactBefore:
      '如果您对本隐私政策有任何疑问，请通过我们的',
    contactLink: '联系页面',
    contactMiddle: '联系我们，或发送邮件至',
    optOutGoogleAds: 'Google 广告设置',
    optOutAboutAds: 'AboutAds.info 选择退出',
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
        ],
      },
      {
        title: '3. 准确性与信息免责声明',
        paragraphs: [
          '虽然我们会认真测试每个工具，但所有工具、计算、转换与 SEO 检查均按“现状”与“可用状态”提供。在做出财务、法律、医疗或生产工程决策之前，请独立验证输出结果。',
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
    ],
    acceptanceTitle: '1. 接受条款',
    acceptanceBefore:
      '访问或使用 UtilityFlow，即表示您同意遵守本服务条款与我们的',
    acceptanceLink: '隐私政策',
    acceptanceAfter:
      '。如果您不同意其中任何部分，请停止使用本网站。',
    changesTitle: '6. 变更与联系方式',
    changesBefore:
      '随着新工具批次的发布，我们可能会更新本服务条款。如有疑问，可通过我们的',
    changesLink: '联系页面',
    changesAfter: '联系我们。',
  },
};
