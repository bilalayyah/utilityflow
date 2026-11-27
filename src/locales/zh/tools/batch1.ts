import type { ToolLocaleOverride } from '../../types';

/**
 * Simplified Chinese overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are Hanyu Pinyin transliterations, unique, lowercase, hyphenated,
 * and do not collide with English slugs or reserved paths.
 */
export const ZH_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'danci-jishuqi',
    name: '单词计数器',
    shortDescription:
      '即时统计单词数、字符数、句子数、段落数、阅读时间以及最常出现的单词。',
    keywords: [
      '单词计数器',
      '在线统计单词数',
      '文章单词数统计',
      '阅读时间计算器',
      '字符数统计',
      '句子数统计',
      '段落数统计',
      '免费单词数检查',
      '演讲时间计算器',
    ],
    seo: {
      title: '单词计数器｜在线免费统计文章单词数、字符数与阅读时间，无需注册立即使用，随时可用 | UtilityFlow',
      description:
        '即时统计单词、字符、句子和段落数量，并显示基于每分钟 225 词与 130 词的阅读和演讲时间估算，还能查看最常出现的 6 个单词。所有计算都在浏览器本地完成，无需上传文本，无需注册，在手机和平板浏览器上也能随时使用，写论文、演讲稿和博客文章都很方便，支持任意语言的空白分隔单词统计。随时免费使用，操作简单直观。',
      primaryKeyword: '单词计数器',
      secondaryKeywords: ['在线单词计数器', '单词数统计工具', '阅读时间计算器', '段落数统计'],
      longTailKeywords: ['在线免费统计单词和字符数', '根据文章计算阅读与演讲时间', '无需上传的浏览器单词计数器', '在线检查论文单词数'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '实时测量准确的单词数、字符总数、句子密度，以及阅读和演讲时间的估算，全程无需把草稿上传到任何服务器。',
  },
  'character-counter': {
    slug: 'zifu-jishuqi',
    name: '字符计数器',
    shortDescription:
      '准确测量带空格与不带空格的字符数、UTF-8 字节数，以及社交媒体和搜索引擎的字符限制。',
    keywords: [
      '字符计数器',
      '字符数统计',
      '字符数测量',
      '元描述字符数',
      'UTF-8 字节数',
      '字符限制检查',
      '标题字符数 SEO',
      '在线统计字符数',
      '短信字符数统计',
    ],
    seo: {
      title: '字符计数器｜在线统计字符数与 UTF-8 字节数，检查标题与元描述长度，免费使用 | UtilityFlow',
      description:
        '统计带空格与不带空格的字符数、字母、数字和 UTF-8 字节数，并用进度条对照搜索引擎与社交媒体的限制。适合调整元标题、短信和社交媒体帖子的长度，所有计算都在浏览器本地完成，无需注册，在手机或平板浏览器上也能随时查看同样的限制进度条。支持任意语言的字符统计，粘贴长文档也能瞬间出结果，界面简洁直观，随时免费使用。',
      primaryKeyword: '字符计数器',
      secondaryKeywords: ['在线统计字符数', '字符数测量工具', '元标题字符数', '文本长度检查'],
      longTailKeywords: ['在线统计不带空格的字符数', '按 SEO 检查元描述字符数限制', '统计文本的 UTF-8 字节数', '在线检查推文字符数限制'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '追踪准确的字符数、字母、数字、空格和 UTF-8 字节大小，同时通过实时进度条查看搜索引擎摘要、短信和社交媒体帖子的限制进度。',
  },
  'case-converter': {
    slug: 'daxiaoxie-zhuanhuan',
    name: '大小写转换工具',
    shortDescription:
      '把文本转换为大写、小写、标题格式、句首大写、camelCase、snake_case 和 kebab-case。',
    keywords: [
      '大小写转换',
      '标题格式转换',
      '大写转小写',
      '驼峰命名转换',
      '下划线命名转换',
      '大写转换工具',
      '小写转换工具',
      '句首大写转换',
      '帕斯卡命名转换',
    ],
    seo: {
      title: '大小写转换工具｜一键转换为标题格式、句首大写与 camelCase，免费在线使用 | UtilityFlow',
      description:
        '一键把文本转换为大写、小写、标题格式、句首大写、camelCase、PascalCase、snake_case 和 kebab-case。适合整理标题和转换变量名，所有处理都在浏览器本地完成，在手机浏览器上也能使用同样的转换按钮，无需注册，随时免费使用。粘贴文本后一键转换，结果即时显示，复制方便，操作简单直观。',
      primaryKeyword: '大小写转换',
      secondaryKeywords: ['标题格式转换工具', '句首大写转换', '文本大写转换', '大写转小写'],
      longTailKeywords: ['把大写文本转换为句首大写', '把字符串转换为驼峰与下划线命名', '在线标题格式大写转换工具', '在线免费把大写转为小写'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '修正不小心按住 Caps Lock 输入的文本，把文章标题统一为标题格式，或把变量名整理为 camelCase、PascalCase、snake_case、kebab-case，全部一键完成。',
  },
  'remove-duplicate-lines': {
    slug: 'shanchu-chongfu-hang',
    name: '删除重复行工具',
    shortDescription:
      '删除列表和日志中的重复行，可选择区分大小写、去除空格和按字母顺序排序。',
    keywords: [
      '删除重复行',
      '在线去重列表',
      '唯一行筛选',
      '删除重复行工具',
      '列表去重',
      '邮箱去重',
      '重复删除工具',
      '删除相同行',
      '清理重复条目',
    ],
    seo: {
      title: '删除重复行｜在线免费去除列表、邮箱与网址中的重复行，保留原有顺序，一键去重 | UtilityFlow',
      description:
        '即时删除列表、邮箱、网址和日志中的重复行，可选择去除空格、区分大小写和按字母顺序排序，同时保留原有顺序。所有处理都在浏览器本地完成，无需注册，在手机或平板浏览器上也能随时整理列表，适合清理关键词导出和客户邮箱列表。支持数千行的大列表，处理快速稳定，原始顺序默认保留，也可一键按字母排序，操作简单，随时免费使用。',
      primaryKeyword: '删除重复行',
      secondaryKeywords: ['重复行删除工具', '列表去重工具', '唯一行工具', '删除重复条目'],
      longTailKeywords: ['保留原有顺序删除重复行', '不区分大小写删除邮箱列表重复项', '在线整理文本中的重复行', '在线免费删除邮箱列表重复项'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '整理杂乱的列表、关键词导出、邮箱地址或服务器日志。删除重复条目，同时控制空格去除、大小写区分和输出顺序。',
  },
  'text-diff-checker': {
    slug: 'wenben-chayi-bijiao',
    name: '文本差异比较工具',
    shortDescription:
      '逐行比较两个文本块，找出新增、删除和未更改的行。',
    keywords: [
      '文本差异比较',
      '比较两个文本',
      '在线差异工具',
      '文章比较工具',
      '比较文本文件',
      '差异检查工具',
      '找出文章差异',
      '在线文本比较',
      '差异确认工具',
    ],
    seo: {
      title: '文本差异比较工具｜在线免费逐行比较两段文字，快速找出新增与删除内容，一目了然 | UtilityFlow',
      description:
        '并排比较两个版本的文章、代码或配置文件，用高亮标出新增与删除的行，还可选择忽略空格和大小写，并按行号查看更改位置。无需上传，无需注册，在手机或平板浏览器上也能随时免费使用同样的比较界面，适合核对合同修订与配置变更。支持文章、代码与配置文件的比较，新增与删除一目了然，行号对照清晰，操作简单直观，随时免费使用。',
      primaryKeyword: '文本差异比较',
      secondaryKeywords: ['在线比较文本', '差异检查工具', '文章差异工具', '在线差异工具'],
      longTailKeywords: ['在线逐行比较两个文本文件', '忽略空格与大小写的差异检查工具', '客户端文本比较工具', '在线免费比较文档的两个版本'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '使用最长公共子序列（LCS）逐行差异引擎，找出文章两个版本、合同条款或配置文件片段之间的所有插入、删除和编辑。',
  },
  'whitespace-remover': {
    slug: 'kongbai-qingchu',
    name: '空白与换行清除工具',
    shortDescription:
      '删除从 PDF 或网页复制的文本中多余的空格、制表符、空行和不必要的换行。',
    keywords: [
      '清除空白',
      '删除多余空格',
      '删除换行',
      '删除空行',
      '整理 PDF 复制文本',
      '删除尾随空格',
      '修复 PDF 换行',
      '合并连续空格',
      '在线整理文本',
    ],
    seo: {
      title: '空白与换行清除工具｜在线免费清除多余空格、空行与换行，快速整理复制文本，一键清理 | UtilityFlow',
      description:
        '在浏览器内删除多余空格、制表符、尾随空格、空行和 PDF 中断裂的换行，可选择保留段落、只删空行或合并为一行，快速免费，无需注册。适合整理从 PDF 和邮件复制的杂乱文本，在手机浏览器上也能随时免费使用，处理过程完全在本地完成。支持中文与英文文本，段落结构可以保留，整理前后的字符数一目了然，操作简单，随时免费使用。',
      primaryKeyword: '清除空白',
      secondaryKeywords: ['删除多余空格', '删除换行', '整理文本空白', '删除空行'],
      longTailKeywords: ['在线删除多余空格和空行', '修复从 PDF 复制时的换行', '把制表符与连续空格合并为一个空格', '删除复制文本的尾随空格'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '整理从 PDF、邮件、电子表格或网页复制的杂乱文本。可以合并重复空格、转换制表符、修剪行首行尾，并规范换行。',
  },
  'sort-lines': {
    slug: 'hang-paixu',
    name: '行排序工具',
    shortDescription:
      '按字母顺序、逆序、数字顺序和自然顺序排列行，还可删除重复项或随机打乱。',
    keywords: [
      '行排序',
      '行排序工具',
      '按字母顺序排序',
      '行逆序',
      '自然顺序排序',
      '按数字排序',
      '列表排序',
      '行随机打乱',
      '文本行排序',
    ],
    seo: {
      title: '行排序工具｜在线免费按字母顺序与自然顺序排序行，支持去重与打乱，快速整理列表 | UtilityFlow',
      description:
        '把行按字母顺序、逆序、数字顺序和自然顺序排列，还支持删除重复项与随机打乱，含数字的条目也能按正确顺序排列。所有处理都在浏览器本地免费完成，适合整理关键词、名单和库存列表，无需注册，在手机浏览器上也能随时免费使用，数千行的列表也能处理。支持中文按拼音排序，含数字的条目也能正确排列，界面简洁直观，随时免费使用。',
      primaryKeyword: '行排序',
      secondaryKeywords: ['行排序工具', '按字母顺序排序', '列表排序工具', '自然顺序排序'],
      longTailKeywords: ['在线按字母顺序排列文本行', '按自然顺序排序含数字的行', '去重并排序行', '在线按逆序排列行的工具'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '整理杂乱的列表。支持按字母顺序、逆序、数字顺序和自然顺序排序，还可删除重复项或随机打乱。',
  },
  'find-and-replace': {
    slug: 'chazhao-tihuan',
    name: '查找替换工具',
    shortDescription:
      '批量替换文本中的单词或短语，支持正则表达式、分组引用和大小写区分。',
    keywords: [
      '查找替换',
      '文本替换工具',
      '批量替换在线',
      '字符串替换',
      '正则表达式替换',
      '单词替换',
      '文本查找替换',
      '批量修正错字',
      '替换工具免费',
    ],
    seo: {
      title: '查找替换工具｜在线免费批量替换文本，支持正则表达式与分组引用，批量修正错字 | UtilityFlow',
      description:
        '一次替换文本中某个单词或短语的全部出现，支持正则表达式与分组引用（$1），并显示替换次数。适合批量修正错字和统一术语，在浏览器本地免费处理。长文档的错字修正与术语统一都很方便，无需注册，在手机浏览器上也能随时免费使用，还会显示替换次数。支持整篇文档一次替换，匹配次数实时显示，原始文本保留在输入框中，随时免费使用。',
      primaryKeyword: '查找替换',
      secondaryKeywords: ['文本替换工具', '批量替换在线', '正则表达式替换', '字符串替换工具'],
      longTailKeywords: ['在线批量修正文本错字', '用正则表达式分组引用进行替换', '区分大小写替换文本', '免费在线替换全部单词的工具'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '一次修正长文档中反复出现的错字或旧术语。除了简单字符串替换，还支持正则表达式与分组引用（$1）的高级替换。',
  },
  'text-reverser': {
    slug: 'wenben-fanzhuan',
    name: '文本反转工具',
    shortDescription:
      '按字符、单词或行反转文本，还有只反转每个单词内字符的模式。',
    keywords: [
      '文本反转',
      '字符反转工具',
      '字符串反向',
      '单词反转',
      '行反转',
      '文本逆转',
      '文章反转工具',
      '字符顺序反转',
      '反向文本',
    ],
    seo: {
      title: '文本反转工具｜在线免费按字符、单词与行反转文本，适合谜题与列表，再转一次即可恢复 | UtilityFlow',
      description:
        '按字符、单词或行反转文本，还有只反转每个单词内字符的模式，也可用于反转列表顺序。所有处理都在浏览器本地免费完成，适合制作谜题、测验和反转列表，无需注册，在手机浏览器上也能随时免费使用，再反转一次即可恢复原文。支持中文、英文与表情符号，字符、单词、行四种模式自由切换，原始文本保留在输入框中，操作简单，随时免费使用。',
      primaryKeyword: '文本反转',
      secondaryKeywords: ['字符反转工具', '字符串反向', '单词反转工具', '行反转工具'],
      longTailKeywords: ['在线按字符反转文本', '反转单词顺序的免费工具', '反转列表行的顺序', '只反转每个单词内的字符'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '把文本的排列顺序反过来。支持按字符、单词和行反转，还有保持单词顺序不变、只反转每个单词内字符的模式。',
  },
  'lorem-ipsum-generator': {
    slug: 'zhanwei-wenben-shengchengqi',
    name: 'Lorem Ipsum 生成工具',
    shortDescription:
      '为设计模型生成 Lorem Ipsum 占位文本，可按段落、句子或单词生成。',
    keywords: [
      'Lorem Ipsum 生成',
      '占位文本生成',
      'Lorem Ipsum',
      'lorem ipsum 中文',
      '占位符文本',
      '虚拟文章生成',
      '模型文本',
      'lorem ipsum 生成工具',
      '示例文本生成',
    ],
    seo: {
      title: 'Lorem Ipsum 生成工具｜在线免费生成占位文本，支持段落、句子与单词数量 | UtilityFlow',
      description:
        '为设计模型生成 Lorem Ipsum 占位文本，可按段落、句子或单词数量生成，还支持用 HTML 的 <p> 标签包裹输出，数量可以准确指定，免费且无需注册。适合网站与应用模型制作，在手机浏览器上也能使用，生成过程在浏览器本地完成。经典拉丁语占位文本，段落、句子与单词数量准确，生成即时完成，操作简单，随时免费使用。',
      primaryKeyword: 'Lorem Ipsum 生成',
      secondaryKeywords: ['占位文本生成', 'Lorem Ipsum', '占位符文本', 'lorem ipsum 生成工具'],
      longTailKeywords: ['为设计模型生成占位文本', '按段落生成 Lorem Ipsum', '生成带 HTML 标签的占位文本', '在线生成 100 个单词的占位文本'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '为网站或应用设计生成占位文本。可以选择按段落、句子或单词生成并指定数量，还能用 HTML 的 <p> 标签包裹输出。',
  },
  'readability-checker': {
    slug: 'keyuexing-jiance',
    name: '文章可读性检测工具',
    shortDescription:
      '用 Flesch、Flesch-Kincaid、Gunning Fog 和 SMOG 四项指标测量文章可读性。',
    keywords: [
      '可读性检测',
      '文章可读性',
      'Flesch 分数',
      '可读性检查',
      '文章难度测量',
      '可读性测量工具',
      '英文可读性',
      '文章水平检查',
      '可读性分数',
    ],
    seo: {
      title: '文章可读性检测工具｜在线免费测量 Flesch 分数，分析句子与难词，免费使用 | UtilityFlow',
      description:
        '用 Flesch、Flesch-Kincaid、Gunning Fog 和 SMOG 四项指标测量文章可读性，还会列出难词，帮助发现句子长度与词汇方面的改进点。处理在浏览器本地免费完成，适合改善博客文章与教材的文字，无需注册，在手机浏览器上也能同样使用。样本越长结果越可靠，修改后再次粘贴即可对比分数，随时免费使用。',
      primaryKeyword: '可读性检测',
      secondaryKeywords: ['文章可读性', 'Flesch 分数', '可读性检查', '文章难度测量'],
      longTailKeywords: ['用 Flesch 分数测量英文可读性', '在线免费检查文章难度', '用 Gunning Fog 指数确认文章水平', '列出难词的可读性工具'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '用四项成熟的指标测量文章的可读性。根据句子长度和难词比例计算分数，并显示有助于改进的难词列表。',
  },
  'word-frequency-counter': {
    slug: 'ciping-tongji',
    name: '词频统计工具',
    shortDescription:
      '统计1词、2词和3词短语的频率，支持停用词过滤，一键导出CSV用于电子表格。',
    keywords: [
      '词频统计',
      '单词出现次数',
      '短语频率统计',
      '高频词分析',
      '单词数分析工具',
      '短语频率',
      '单词出现频率',
      '文本单词分析',
      '高频短语统计',
    ],
    seo: {
      title: '词频统计工具｜短语频率分析与CSV导出 | UtilityFlow',
      description:
        '统计任意文本中1词、2词和3词短语的出现频率，支持停用词过滤，一键导出CSV用于电子表格，还可以按频率排序查看最常出现的表达，支持复制结果并在手机浏览器上同样使用，生成的表格干净直观，操作简单，全部在浏览器本地免费完成，无需注册，随时免费。',
      primaryKeyword: '词频统计',
      secondaryKeywords: ['单词出现次数', '短语频率统计', '高频词分析', '单词数分析工具'],
      longTailKeywords: ['在线分析文章高频词', '免费分析高频短语', '统计单词与短语的出现次数', '找出用得过多的单词的工具'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '统计文章中每个单词和短语出现了多少次。除了单词频率，还显示多词短语的频率，有助于分析关键词密度和发现重复表达。',
  },
  'text-to-slug': {
    slug: 'wenben-zhuan-lianjie',
    name: '文本转链接工具',
    shortDescription:
      '把任意文本转换为可用于代码、文件名和数据库键的整洁网址链接，支持重音字符规范化和批量转换。',
    keywords: [
      '链接转换',
      '文本转链接在线',
      '文本转链接',
      '标题转链接',
      '链接生成器',
      '网址生成工具',
      '固定链接生成',
      '链接创建',
      '中文转链接',
    ],
    seo: {
      title: '文本转链接工具｜开发者免费在线转换 | UtilityFlow',
      description:
        '把任意文本转换为可用于代码、文件名和数据库键的整洁网址链接，支持重音字符规范化、下划线分隔符和多行批量转换，全部在浏览器本地免费完成，无需注册，生成的链接干净易读，可直接粘贴到代码或文件系统中使用，适合博客、电商与文档网站，随时免费使用，操作简单。',
      primaryKeyword: '链接转换',
      secondaryKeywords: ['文本转链接在线', '文本转链接', '链接生成器', '标题转链接'],
      longTailKeywords: ['在线把标题转换为网址链接形式', '把重音字符规范化为链接形式', '批量把多个标题转换为链接', '免费生成博客文章链接'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '把文章标题转换为适合网址的干净链接形式。重音字符会被规范化，“&”会展开为“and”，符号会被去除，最终生成由连字符连接的小写链接。',
  },
  'markdown-previewer': {
    slug: 'markdown-yulan',
    name: 'Markdown 预览工具',
    shortDescription:
      '输入 Markdown 即可实时显示 HTML 预览，支持标题、列表和代码块。',
    keywords: [
      'Markdown 预览',
      'Markdown 预览工具',
      'Markdown 转 HTML',
      'Markdown 检查',
      'Markdown 编辑器',
      'Markdown 显示',
      'Markdown 转换工具',
      '在线 Markdown',
      'README 预览',
    ],
    seo: {
      title: 'Markdown 预览工具｜在线免费把 Markdown 转为 HTML 并实时预览 | UtilityFlow',
      description:
        '输入 Markdown 即可实时显示 HTML 预览，支持标题、列表、粗体、链接、代码块和表格，还能复制生成的 HTML。处理在浏览器本地免费完成，适合在发布前确认 README 和博客草稿，无需注册，在手机浏览器上也能同样使用。支持标题、列表、粗体与代码块，输入即时渲染，生成的 HTML 可以复制导出，随时免费使用。',
      primaryKeyword: 'Markdown 预览',
      secondaryKeywords: ['Markdown 预览工具', 'Markdown 转 HTML', 'Markdown 检查', 'Markdown 编辑器'],
      longTailKeywords: ['实时预览 Markdown', '在线把 Markdown 转换为 HTML', '发布前预览 README', '确认 Markdown 标题与列表'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '输入 Markdown 后，会实时显示渲染为 HTML 的预览。标题、列表、粗体、链接和代码块都会按发布后的样子呈现。',
  },
  'line-prefix-suffix': {
    slug: 'hang-qianzhui-houzhui',
    name: '行首行尾添加工具',
    shortDescription:
      '在每行开头和结尾添加文本，适合加引号、编号和整理 SQL 的 IN 子句。',
    keywords: [
      '行首添加',
      '行尾添加',
      '每行前缀',
      '行前缀',
      '行后缀',
      '行首添加文字',
      'SQL IN 子句整理',
      '行编号',
      '多行添加工具',
    ],
    seo: {
      title: '行首行尾添加工具｜在线免费为每行添加文字与编号，整理 SQL 与代码，免费使用 | UtilityFlow',
      description:
        '在每行开头和结尾添加文本，支持添加引号、补零编号和整理 SQL 的 IN 子句，还能转换为 HTML 列表项。处理在浏览器本地免费完成，适合整理 SQL 与代码，无需注册，在手机浏览器上也能同样使用，编号分隔符也可以自由选择。支持引号、逗号与补零编号，空行可以跳过处理，原始列表保留在输入框中，随时免费使用。',
      primaryKeyword: '行首添加',
      secondaryKeywords: ['行尾添加', '每行前缀', '行前缀', 'SQL IN 子句整理'],
      longTailKeywords: ['在线为每行开头添加文本', '在行尾添加逗号制作 SQL 的 IN 子句', '为每行添加补零编号', '批量为多行添加引号'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '一次为列表每行添加行首和行尾文本。加引号、编号、用逗号制作 SQL 的 IN 子句等重复工作瞬间完成。',
  },
  'alphabets-to-word-generator': {
    slug: 'zimu-shengcheng-danci',
    name: '字母生成单词',
    shortDescription: '用您的字母即时生成单词：变位词、短词和长词以及可能的组合，浏览器中免费使用。',
    keywords: [
      '字母生成单词',
      '用字母生成单词',
      '字母变单词',
      '变位词生成器',
      '变位词求解器',
      '字母重组',
      '用字母查找单词',
      '英语单词生成器',
      '用给定字母组词',
    ],
    seo: {
      title: '字母生成单词｜免费在线生成单词 | UtilityFlow',
      description: '使用我们的免费字母生成单词工具，即时用字母生成单词。查找短词和长词、变位词和可能的组合。',
      primaryKeyword: '字母生成单词',
      secondaryKeywords: ['变位词生成器', '变位词求解器', '字母重组', '用字母查找单词'],
      longTailKeywords: ['用这些字母能组成哪些单词', '在线免费通过字母生成单词', '用字母查找最长单词', '用一个单词创建变位词'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: '输入您的字母，发现所有可以组成的单词：精确的变位词、短词和长词，配合长度和字母筛选器，直接在浏览器中使用。',
  },
};
