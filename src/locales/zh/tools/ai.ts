import type { ToolLocaleOverride } from "../../types";

/**
 * Chinese (Simplified) overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/ja/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 * Fixed Chinese slugs (STATIC_PATHS):
 * ai-xiezuo-zhushou, ai-wenben-zhaiyao, ai-gongju-chazhao.
 */
export const ZH_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  "ai-writing-assistant": {
    slug: "ai-xiezuo-zhushou",
    name: "AI 写作助手",
    shortDescription:
      "免费修正语法、改写句子、调整语气、改写措辞、扩展思路、起草清晰邮件，无需注册。",
    keywords: [
      "AI 写作助手",
      "免费语法检查工具",
      "句子改写工具",
      "文本改写工具",
      "语气转换工具",
      "邮件写作助手",
      "拼写纠错工具",
      "句子简化工具",
      "免费 AI 写作工具",
    ],
    seo: {
      title: "AI 写作助手——免费修正语法、改写句子、调整语气与起草邮件的在线 AI 工具 | UtilityFlow",
      description:
        "免费修正语法、改写句子、调整语气、精简或扩展段落、改写文本、撰写清晰邮件，无需注册或创建账号。每天最多 5 次请求，由 Groq 的 AI 推理驱动。从 10 种写作任务和 7 种语气中任选其一，对照原文逐一确认修改内容，轻松写出专业的文章。支持并排对照与逐词修改高亮，复制前逐条确认每一处编辑，用起来更放心。",
      primaryKeyword: "AI 写作助手",
      secondaryKeywords: [
        "免费语法检查 AI",
        "AI 句子改写工具",
        "AI 文本改写工具",
        "AI 邮件写作助手",
      ],
      longTailKeywords: [
        "无需登录的免费 AI 写作助手",
        "用 AI 工具让文本更专业",
        "保留原意免费改写段落",
        "在线免费修正语法与拼写",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "无需创建账号，几秒钟就能把草稿打磨得干净利落。从语法修正、改写措辞、转换语气、简化句子、起草邮件等 10 种写作任务中任选其一，同时严格保留原文的含义与事实。",
    apiNotice:
      "完全免费，无需登录、订阅或点数。免费额度：每位访客每天最多 5 次写作请求（每次最多 12,000 个字符），由 Groq 免费层推理驱动，不保存您的文本。",
  },
  "ai-text-summarizer": {
    slug: "ai-wenben-zhaiyao",
    name: "AI 文本摘要工具",
    shortDescription:
      "把文章、报告与笔记浓缩为短、中、长三种摘要，附带要点列表与关键要点，免费使用。",
    keywords: [
      "AI 文本摘要工具",
      "免费文章摘要工具",
      "要点列表摘要",
      "关键要点提取",
      "段落摘要工具",
      "通俗语言摘要",
      "阅读时间计算",
      "在线摘要长文本",
      "免费 AI 摘要生成器",
    ],
    seo: {
      title: "AI 文本摘要工具——把长文章浓缩为短、中、长摘要的免费在线 AI 工具 | UtilityFlow",
      description:
        "把长文章、研究笔记与报告浓缩为简短段落、要点列表或关键要点，免费、快速，无需注册。每天最多 5 次，由 Groq 的 AI 在保留姓名、数字与日期的前提下生成摘要。只需选择长度与格式，就能把长篇内容整理为清晰的摘要，大幅节省阅读时间。支持段落、要点列表、关键要点与通俗语言四种格式，满足笔记、报告与学习等不同场景。",
      primaryKeyword: "AI 文本摘要工具",
      secondaryKeywords: [
        "免费文章摘要工具",
        "要点列表文本摘要工具",
        "AI 关键要点提取",
        "段落摘要生成器",
      ],
      longTailKeywords: [
        "无需登录的免费 AI 文本摘要工具",
        "保留数字与事实摘要长文章",
        "在线短中长文本摘要工具",
        "把研究论文摘要为要点列表",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "无需创建账号，即可把长文章、报告、论文与会议记录整理为简洁的摘要。选择短（10–20%）、中（30–40%）或长（50–60%）三种长度，以及段落、要点列表、关键要点、通俗语言四种格式，同时保留姓名、数字与日期。",
    apiNotice:
      "完全免费，无需登录、订阅或点数。免费额度：每位访客每天最多 5 次摘要（每次请求最多 25,000 个字符），由 Groq 免费层推理驱动，不保存您的文本。",
  },
  "ai-tool-finder": {
    slug: "ai-gongju-chazhao",
    name: "AI 智能工具查找器",
    shortDescription:
      "用通俗语言描述您的任务，即使有错别字或口语化表达，也能立即找到最合适的 UtilityFlow 工具。",
    keywords: [
      "AI 工具查找器",
      "智能工具搜索",
      "查找实用工具",
      "在线工具推荐",
      "自然语言工具搜索",
      "在线查找免费工具",
      "实用工具推荐器",
      "按任务搜索工具",
      "免费 AI 工具搜索",
    ],
    seo: {
      title: "AI 智能工具查找器——用一句话描述任务，快速找到最合适工具的免费在线工具 | UtilityFlow",
      description:
        "用通俗语言描述您的需求，即可从 UtilityFlow 的 88 个工具中找到合适的浏览器或 AI 实用工具，快速、免费，且不会出现编造的链接。关键词搜索无限制，AI 搜索每天最多 10 次免费。只需描述任务，即可看到最合适的工具及其推荐理由。每条推荐都附带一句话理由与备选方案，点击即可打开真实可用的工具页面。",
      primaryKeyword: "AI 智能工具查找器",
      secondaryKeywords: [
        "在线工具查找器",
        "查找合适的实用工具",
        "AI 工具推荐",
        "UtilityFlow 工具搜索",
      ],
      longTailKeywords: [
        "为我的任务查找免费在线工具",
        "用通俗语言描述问题搜索实用工具",
        "无需登录的 AI 工具发现",
        "处理 PDF 需要哪个在线工具",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "不确定哪个工具能处理您的任务时可以使用它。即使有拼写错误或口语化表达，只要用通俗语言描述目标，混合关键词与 Groq AI 的匹配器就会从 UtilityFlow 的实时工具库中推荐经过验证的工具，并给出明确的推荐理由。",
    apiNotice:
      "完全免费，无需登录、订阅或点数。可搜索我们经过验证的 84 个浏览器工具、3 个 AI 工具与货币计算器（每天最多 10 次 AI 搜索，即时关键词匹配无限制）。",
  },
};
