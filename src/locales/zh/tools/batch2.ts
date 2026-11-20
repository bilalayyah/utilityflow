import type { ToolLocaleOverride } from '../../types';

/**
 * Simplified Chinese overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are Hanyu Pinyin transliterations, unique, lowercase, hyphenated, and
 * do not collide with English slugs or reserved paths.
 */
export const ZH_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-bianma-jie-ma',
    name: 'Base64 编码与解码工具',
    shortDescription:
      '将文本编码为标准 Base64 或 URL 安全 Base64，并安全地解码 UTF-8 的 Base64 字符串。',
    keywords: [
      'Base64 编码',
      'Base64 解码',
      'Base64 在线',
      'Base64 转换',
      'UTF-8 Base64',
      'URL 安全 Base64',
      'Base64 编码器',
      'Base64 解码器',
      '文本转 Base64',
    ],
    seo: {
      title: 'Base64 编码与解码工具：支持 UTF-8 与 URL 安全编码的免费工具 | UtilityFlow',
      description:
        '将 UTF-8 文本编码为 Base64，或把 Base64 还原为可读文本，支持 URL 安全与无填充选项，全部在本地处理。适合处理 API 密钥与 Basic 认证头，无需注册，手机浏览器同样可用。支持标准与 URL 安全两种字母表，可去掉末尾填充，编码与解码结果可一键复制或互换方向使用，方便又快捷。',
      primaryKeyword: 'Base64 编码',
      secondaryKeywords: ['Base64 在线解码', 'Base64 UTF-8 编码', 'URL 安全 Base64', 'Base64 文本转换'],
      longTailKeywords: ['在线编码含表情符号的 UTF-8 文本为 Base64', '解码无填充的 URL 安全 Base64', '客户端 Base64 转换工具', '在线解码含表情符号的 Base64 字符串'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '将包含重音字符与表情符号的 UTF-8 字符串转换为标准 Base64 或 RFC 4648 的 URL 安全 Base64，或把 Base64 字符串还原为纯文本，并即时验证。',
  },
  'url-encoder-decoder': {
    slug: 'url-bianma-jie-ma',
    name: 'URL 编码与解码工具',
    shortDescription:
      '对查询值或完整 URL 进行百分号编码，并解析查看主机、路径与查询参数。',
    keywords: [
      'URL 编码',
      'URL 解码',
      '百分号编码',
      'URL 解析',
      'URL 在线编码',
      'URL 在线解码',
      'URL 编码工具',
      'encodeURIComponent',
      '查询字符串编码',
    ],
    seo: {
      title: 'URL 编码与解码工具：免费在线百分号编码、解码与解析 URL 地址，快速准确 | UtilityFlow',
      description:
        '使用 encodeURIComponent 与 encodeURI 模式编码或解码 URL，解析显示协议、主机、路径与查询参数，全部在浏览器内处理。适合调试 OAuth 重定向 URI 与 UTM 链接，无需注册，手机浏览器同样可用。支持两种编码模式，解析结果以表格展示，方便逐一检查每一个查询参数，快速又准确。',
      primaryKeyword: 'URL 编码',
      secondaryKeywords: ['百分号编码在线', 'URL 解码工具', '查询字符串解析', 'encodeURIComponent 在线'],
      longTailKeywords: ['encodeURI 与 encodeURIComponent 的区别', '用表格解码 URL 查询参数', '为 URL 百分号编码特殊字符', '不破坏与号编码查询值'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '安全地编码查询参数值或完整 URL，解码百分号编码的字符串（%20、%3A、+），并在表格中直接查看解析后的每个查询参数。',
  },
  'uuid-generator': {
    slug: 'uuid-shengchengqi',
    name: 'UUID 生成器（v4 与 v7）',
    shortDescription:
      '批量生成密码学随机的 UUID v4 与按时间排序的 RFC 9562 UUID v7 标识符。',
    keywords: [
      'UUID 生成器',
      'GUID 生成器',
      'UUID v4',
      'UUID v7 生成器',
      'UUID v4 生成',
      'UUID 在线生成',
      '随机 UUID 生成',
      'UUID 批量生成',
      'UUID 免费生成',
    ],
    seo: {
      title: 'UUID 生成器：免费在线批量生成 v4 与 v7 标识符，安全快速可复制 | UtilityFlow',
      description:
        '一次最多生成 100 个密码学随机的 UUID v4 或按时间排序的 RFC 9562 UUID v7，支持大写、连字符与花括号选项，全部在浏览器内处理。适合生成数据库测试数据与测试 ID，无需注册，手机浏览器同样可用，ID 不会被保存。一次最多生成 100 个 ID，支持大写、无连字符与花括号格式，一键复制全部结果。',
      primaryKeyword: 'UUID 生成器',
      secondaryKeywords: ['GUID 在线生成器', 'UUID v4 生成', 'UUID v7 生成', 'UUID 批量生成'],
      longTailKeywords: ['在线批量生成 UUID v4 与 v7', 'RFC 9562 时间排序 UUID v7 生成器', '生成无连字符大写 UUID', '一次免费在线生成 100 个 UUID'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '使用 Web Crypto API 生成密码学随机的 UUID v4 与带时间戳前缀的 RFC 9562 UUID v7，可单个或批量生成，并附带格式设置按钮。',
  },
  'regex-tester': {
    slug: 'zhengze-biaodashi-ceshi',
    name: '正则表达式测试工具',
    shortDescription:
      '使用实时匹配高亮、捕获组、标志与替换输出测试 JavaScript 正则表达式。',
    keywords: [
      '正则表达式测试',
      '正则测试工具',
      'JavaScript 正则',
      '正则匹配高亮',
      '正则在线测试',
      '正则表达式检查',
      '正则调试器',
      '正则匹配',
      '正则表达式验证',
    ],
    seo: {
      title: '正则表达式测试工具：免费在线实时测试 JavaScript 正则表达式，快速准确 | UtilityFlow',
      description:
        '实时测试正则表达式，支持 g/i/m/s 标志、内联匹配高亮、捕获组检查与替换预览，全部在浏览器内处理。适合验证邮箱与表单输入模式，无需注册，手机浏览器同样可用，模式仅在浏览器内测试。支持 g、i、m、s 四种标志，匹配结果实时高亮并列出捕获组，替换模板可以直接用 $1、$2 引用分组捕获的内容，便于调试。',
      primaryKeyword: '正则表达式测试',
      secondaryKeywords: ['正则表达式检查工具', '正则表达式调试器', '正则捕获组', '正则替换测试'],
      longTailKeywords: ['在线测试 JavaScript 捕获组', '实时高亮正则表达式匹配', '用 $1 分组引用预览正则替换', '在线调试带高亮的 JavaScript 正则'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '交互式调试 JavaScript 正则表达式：实时高亮匹配、匹配位置索引、带编号的捕获组检查、标志开关与替换预览。',
  },
  'jwt-decoder': {
    slug: 'jwt-jie-ma-qi',
    name: 'JWT 解码器',
    shortDescription:
      '在浏览器内安全解码 JSON Web Token 的头部、载荷声明与过期时间戳。',
    keywords: [
      'JWT 解码',
      'JWT 解码器',
      '解码 JWT 令牌',
      'JWT 载荷查看',
      'JWT 过期检查',
      'JWT 声明查看',
      'JSON Web Token',
      'JWT 在线解码',
      '检查 JWT 过期',
    ],
    seo: {
      title: 'JWT 解码器：免费在线解码令牌、查看声明并检查过期时间，安全私密又快速准确 | UtilityFlow',
      description:
        '在浏览器中解码 JWT 头部与载荷声明，并以清晰的 UTC 日期查看 iat、nbf 与 exp 时间戳。免费、私密、永不上传，快速易用，手机浏览器同样可用，令牌不会离开设备。解码后的头部与载荷以格式化 JSON 显示，时间戳声明转换为 UTC 日期并标记是否过期，令牌永不离开你的浏览器，安全又私密。',
      primaryKeyword: 'JWT 解码',
      secondaryKeywords: ['在线解码 JWT', 'JWT 载荷查看器', 'JSON Web Token 检查', 'JWT 过期检查'],
      longTailKeywords: ['本地解码 JWT 令牌无需上传服务器', '在线检查 JWT exp 过期时间戳', '检查 Base64Url JWT 头部与声明', '在浏览器中读取 JWT 载荷声明'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '在本地浏览器内存中安全检查 JSON Web Token（JWT）：查看格式化后的头部与载荷 JSON 对象，并检查人类可读的 iat、nbf 与 exp 过期状态。',
  },
  'hash-generator': {
    slug: 'hash-shengchengqi',
    name: '哈希生成器（SHA-1 / SHA-256 / SHA-512）',
    shortDescription:
      '通过 Web Crypto 为文本或本地文件计算 SHA-1、SHA-256、SHA-384 与 SHA-512 密码学哈希。',
    keywords: [
      '哈希生成器',
      'SHA-256 生成',
      'SHA-512 哈希',
      '文件校验和',
      'SHA-1 哈希生成',
      'SHA-384 哈希',
      '校验和计算器',
      '验证文件校验和',
      '在线哈希生成',
    ],
    seo: {
      title: '哈希生成器：免费在线计算 SHA-1、SHA-256 与 SHA-512 的工具 | UtilityFlow',
      description:
        '在浏览器中为文本与本地文件生成 SHA-1、SHA-256、SHA-384 与 SHA-512 摘要，支持十六进制或 Base64 输出。免费、私密、永不上传，快速易用，手机浏览器同样可用。四种算法同时计算，支持十六进制与 Base64 两种输出，本地文件校验无需上传，适合快速验证下载文件的完整性，方便又可靠。',
      primaryKeyword: '哈希生成器',
      secondaryKeywords: ['SHA-256 在线哈希', '文件校验和验证', 'SHA-512 生成器', '校验和计算器'],
      longTailKeywords: ['在浏览器中计算本地文件的 SHA-256 校验和', '生成十六进制与 Base64 的 SHA-256 哈希', 'Web Crypto API 在线哈希生成器', '验证下载文件的 SHA-256 校验和'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '使用浏览器原生的 Web Crypto API（crypto.subtle.digest），同时为 UTF-8 文本与本地文件计算 SHA-1、SHA-256、SHA-384 与 SHA-512 摘要。',
  },
  'html-entity-encoder': {
    slug: 'html-shiti-bianma',
    name: 'HTML 实体编码与解码工具',
    shortDescription:
      '转义保留的 HTML 字符（<、>、&、引号）与非 ASCII 符号，或干净地解码 HTML 实体。',
    keywords: [
      'HTML 实体编码',
      'HTML 解码',
      'HTML 转义在线',
      'HTML 实体解码',
      'HTML 字符编码',
      'HTML 转义工具',
      '转为 HTML 实体',
      '在线解码 HTML 实体',
      '转义 HTML 特殊字符',
    ],
    seo: {
      title: 'HTML 实体编码工具：免费在线转义与解码 HTML 字符的工具，快速准确 | UtilityFlow',
      description:
        '将保留的 HTML 字符与非 ASCII 符号编码为实体，或把命名与数字实体解码回纯文本。免费、本地、即时，无需注册，手机浏览器同样可用，代码永不离开设备。支持命名实体与十进制、十六进制数字实体，可选择是否编码非 ASCII 字符，适合编写文档与博客代码示例，也可清理从 RSS 或 API 抓取的文本。',
      primaryKeyword: 'HTML 实体编码',
      secondaryKeywords: ['HTML 转义工具', 'HTML 实体解码器', '取消转义 HTML', '编码 HTML 字符'],
      longTailKeywords: ['在线转义 HTML 标签用于代码片段', '解码命名与数字 HTML 实体', '把特殊字符转换为 HTML 实体', '在线转义 HTML 引号与和号'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '安全地把 <、>、&、引号与国际 Unicode 符号转义为 HTML 实体，以便在网页中嵌入代码片段；或把 HTML 转义的字符串解码回可读文本。',
  },
  'json-csv-converter': {
    slug: 'json-csv-zhuanhuan',
    name: 'JSON 转 CSV / CSV 转 JSON 转换器',
    shortDescription:
      '将 JSON 数组转换为符合 RFC 4180 的 CSV 电子表格，并把带引号的 CSV 文件解析回干净的 JSON。',
    keywords: [
      'JSON 转 CSV',
      'CSV 转 JSON',
      'JSON CSV 转换器',
      'JSON 数组转 CSV',
      '导出 JSON 为 CSV',
      'JSON 转 CSV 免费',
      'CSV 转 JSON 转换器',
      'JSON 转 TSV',
      'CSV 转 JSON 数组',
    ],
    seo: {
      title: 'JSON 转 CSV 转换器：免费在线转换 JSON 与 CSV 数据的工具 | UtilityFlow',
      description:
        '将 JSON 数组转换为干净的 CSV 电子表格，支持嵌套对象扁平化；或把 CSV 与 TSV 文件解析回结构化 JSON。免费、本地处理，无需注册，手机浏览器同样可用。支持逗号、分号与制表符三种分隔符，嵌套对象会扁平化为点分隔列，带引号的逗号与换行都会原样保留，结果也可以直接下载为文件使用，快速又准确。',
      primaryKeyword: 'JSON 转 CSV 转换器',
      secondaryKeywords: ['CSV 转 JSON 转换器', '导出 JSON 为 CSV', 'TSV 转 JSON', 'JSON 转 CSV 免费在线'],
      longTailKeywords: ['在线转换嵌套 JSON 对象为 CSV 列', '解析带逗号的引用 CSV 为 JSON 数组', '客户端 JSON 转 CSV 下载器', '免费转换 JSON 数组为 CSV 电子表格'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '将 API 的 JSON 数组转换为干净的 CSV 电子表格——自动扁平化嵌套对象的键名；或把带引用逗号的分隔 CSV/TSV 文件解析回格式化 JSON。',
  },
  'unix-timestamp-converter': {
    slug: 'unix-shijianchuo-zhuanhuan',
    name: 'Unix 时间戳转换器',
    shortDescription:
      '将 Unix 纪元秒或毫秒转换为 ISO 8601、UTC 与本地日期，反之亦然。',
    keywords: [
      'Unix 时间戳转换',
      '纪元转换器',
      '纪元转日期',
      '时间戳转 ISO 8601',
      'Unix 时间转换',
      '纪元转日期在线',
      '日期转 Unix 时间戳',
      '当前 Unix 时间',
      '纪元毫秒转换',
    ],
    seo: {
      title: 'Unix 时间戳转换器：免费在线把纪元时间转换为可读日期的工具，快速准确 | UtilityFlow',
      description:
        '将秒或毫秒为单位的 Unix 纪元时间戳转换为 ISO 8601、UTC、RFC 2822 与本地时间，或把任意日期转回 Unix 时间。免费、快速易用，手机浏览器同样可用。支持秒与毫秒自动检测，可查看 ISO 8601、UTC、RFC 2822 与本地时间，顶部实时时钟每秒更新，方便测试与记录日志。',
      primaryKeyword: 'Unix 时间戳转换',
      secondaryKeywords: ['纪元转换器', 'Unix 时间转日期', '日期转 Unix 时间戳', '纪元毫秒转换器'],
      longTailKeywords: ['把 Unix 纪元毫秒转换为 ISO 8601 日期', '实时当前 Unix 时间戳（秒）', '把本地日期时间转换为 Unix 纪元', '免费在线把 Unix 时间戳转换为 UTC 日期'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '将 Unix 纪元整数（秒或毫秒）转换为 ISO 8601、UTC 与本地时区字符串，并附带相对时间偏移；或把任意日历日期与时间转回纪元时间戳。',
  },
  'sql-formatter': {
    slug: 'sql-geshihua',
    name: 'SQL 格式化工具',
    shortDescription:
      '格式化、缩进并标准化 SQL 查询，支持大写/小写关键字，或将查询压缩为一行。',
    keywords: [
      'SQL 格式化',
      'SQL 美化',
      '格式化 SQL 查询',
      'SQL 压缩',
      'SQL 在线格式化',
      'SQL 查询美化',
      'SQL 排版',
      'SQL 在线美化',
      '缩进 SQL 查询',
    ],
    seo: {
      title: 'SQL 格式化工具：免费在线美化、压缩与标准化 SQL 查询的工具，快速准确 | UtilityFlow',
      description:
        '用清晰的子句换行、关键字大小写与 2/4 空格缩进格式化杂乱的 SQL 查询，或将其压缩为一行。无需注册，免费，在浏览器中运行，手机浏览器同样可用。支持美化与压缩两种模式，关键字可切换大写或小写，缩进可选 2 空格或 4 空格，字符串与注释原样保留，适合团队统一 SQL 代码风格，无需安装任何软件，快速又准确。',
      primaryKeyword: 'SQL 格式化',
      secondaryKeywords: ['SQL 在线美化', 'SQL 排版工具', 'SQL 压缩工具', '在线格式化 SQL 查询'],
      longTailKeywords: ['在线格式化含 JOIN 与 GROUP BY 的 SQL 查询', '干净地转换 SQL 关键字为大写', '压缩 SQL 查询并保留字符串字面量', '用 2 或 4 空格缩进 SQL 查询'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '将密集的单行 SQL 查询转换为易读的结构化语句，SELECT、FROM、JOIN、WHERE、GROUP BY 与 ORDER BY 清晰对齐，同时保留带引号的字符串与注释。',
  },
  'css-minifier': {
    slug: 'css-yasuo',
    name: 'CSS 压缩与美化工具',
    shortDescription:
      '压缩 CSS 样式表以减小体积，或用干净的缩进美化压缩后的 CSS 规则。',
    keywords: [
      'CSS 压缩',
      'CSS 美化',
      '在线压缩 CSS',
      '格式化 CSS',
      'CSS 压缩器',
      'CSS 在线压缩',
      '解压缩 CSS',
      'CSS 格式化工具',
      '减小 CSS 文件体积',
    ],
    seo: {
      title: 'CSS 压缩与美化工具：免费在线压缩 CSS 并查看节省字节的工具，快速准确 | UtilityFlow',
      description:
        '通过删除注释与多余空白压缩 CSS，并实时显示节省的字节数；或把压缩后的样式表美化为干净的规则。免费，在浏览器中运行，手机浏览器同样可用。压缩会删除注释与多余空白并显示节省的字节数与百分比，美化可把压缩样式表展开为带缩进的规则，媒体查询与引用字符串完整保留，适合在部署前检查体积与调试生产环境的样式。',
      primaryKeyword: 'CSS 压缩',
      secondaryKeywords: ['CSS 美化工具', '压缩 CSS', 'CSS 在线格式化', 'CSS 压缩器'],
      longTailKeywords: ['压缩 CSS 并保留引用字符串与媒体查询', '在线解压缩已压缩的 CSS 样式表', '在浏览器中计算 CSS 压缩百分比', '部署前减小 CSS 文件体积'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '通过删除注释、多余空白与右花括号前的尾随分号来压缩 CSS 样式表；或把一行的压缩 CSS 重新展开为易读的带缩进代码块。',
  },
  'js-formatter': {
    slug: 'js-geshihua',
    name: 'JavaScript / TypeScript 压缩与格式化工具',
    shortDescription:
      '通过删除注释与多余空白压缩 JavaScript 代码片段，或美化紧凑的代码块。',
    keywords: [
      'JavaScript 压缩',
      'JS 格式化',
      'JS 美化',
      '在线压缩 JavaScript',
      'JavaScript 格式化',
      'JS 在线压缩',
      '美化 JavaScript',
      'TypeScript 压缩',
      'JS 代码格式化',
    ],
    seo: {
      title: 'JavaScript 压缩与格式化工具：免费在线压缩 JS 代码的工具，快速准确 | UtilityFlow',
      description:
        '安全地删除注释与多余空格来压缩 JavaScript 与 TypeScript，或用 2/4 空格缩进美化紧凑代码。免费，在浏览器中运行，手机浏览器同样可用，代码永不离开设备。压缩会删除注释与多余空白并显示节省的字节数，美化支持 2 或 4 空格缩进，字符串、模板字面量与正则表达式都会被原样保留下来。',
      primaryKeyword: 'JavaScript 压缩',
      secondaryKeywords: ['JS 美化工具', '在线格式化 JavaScript', 'JS 压缩器', 'JavaScript 格式化工具'],
      longTailKeywords: ['压缩 JavaScript 片段并保留字符串与模板字面量', '用缩进解压缩紧凑的 JavaScript 代码', '客户端 JS 格式化与压缩工具', '用 2 或 4 空格缩进美化 JavaScript 代码'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '通过删除注释与多余间距压缩 JavaScript 代码片段，用于书签工具与内联脚本，同时保持字符串字面量完整；或干净地重新缩进压缩后的代码。',
  },
  'cron-expression-parser': {
    slug: 'cron-biaodashi-jiexi',
    name: 'Cron 表达式解析与计划预览工具',
    shortDescription:
      '将 5 字段 cron 表达式翻译为通俗英文，浏览预设，并预览接下来的 8 次运行时间。',
    keywords: [
      'Cron 表达式解析',
      'Crontab 生成器',
      'Cron 计划测试',
      '下次 Cron 运行时间',
      'Crontab 解析器',
      'Cron 表达式测试',
      'Cron 计划预览',
      'Cron 转通俗英文',
      'Cron 任务调度',
    ],
    seo: {
      title: 'Cron 表达式解析工具：免费在线翻译为通俗英文并预览运行时间，快速准确 | UtilityFlow',
      description:
        '将 5 字段 cron 表达式解析为通俗易懂的计划说明，检查每个字段，尝试常用预设，并预览接下来的 8 次运行时间。免费，在浏览器中运行，手机浏览器同样可用。支持通配符、步进、范围、列表与英文名称，可查看通俗英文摘要与字段分解，并预览接下来的 8 次运行时间，方便提前验证计划，避免任务在错误时间运行，快速又准确。',
      primaryKeyword: 'Cron 表达式解析',
      secondaryKeywords: ['Crontab 替代工具', 'Cron 计划预览', 'Cron 构建器', 'Cron 表达式测试'],
      longTailKeywords: ['把 5 字段 Cron 表达式翻译为通俗英文', '计算接下来的 8 个 Cron 执行时间戳', '在线测试工作日与步进 Cron 表达式', '每个工作日上午 9 点的 Cron 表达式示例'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '将 5 字段 Unix crontab 表达式（分 时 日 月 星期）解码为清晰的人类可读摘要，验证字段范围，并查看接下来的 8 个计划运行时间戳。',
  },
  'color-converter': {
    slug: 'yanse-zhuanhuan',
    name: '颜色转换器（HEX / RGB / HSL 与 WCAG 对比度）',
    shortDescription:
      '在 HEX、RGB 与 HSL 之间转换颜色，附带实时颜色选择器与 WCAG 2.1 AA/AAA 对比度检查。',
    keywords: [
      '颜色转换器',
      'HEX 转 RGB',
      'RGB 转 HSL',
      'WCAG 对比度检查',
      'HEX 转 HSL',
      'RGB 转 HEX',
      '颜色选择器在线',
      'HEX 颜色转换',
      'HSL 转 RGB',
    ],
    seo: {
      title: '颜色转换器：免费在线转换 HEX、RGB、HSL 并检查 WCAG 对比度 | UtilityFlow',
      description:
        '即时在 HEX、RGB 与 HSL 之间转换颜色，然后测试前景与背景的对比度是否符合 WCAG 2.1 AA 与 AAA 标准。免费，在浏览器中运行，手机浏览器同样可用。支持 HEX、RGB 与 HSL 三种表示法实时同步，可一键复制 CSS 颜色值，并检查 AA 与 AAA 对比度是否达标，适合无障碍设计。',
      primaryKeyword: '颜色转换器',
      secondaryKeywords: ['HEX 转 RGB 转换器', 'HSL 颜色选择器', 'WCAG 对比度检查器', 'RGB 转 HEX 转换器'],
      longTailKeywords: ['把 HEX 颜色转换为 RGB 与 HSL 的 CSS 值', '检查 WCAG 2.1 AA 与 AAA 文本对比度', '为开发者提供的交互式 HEX RGB HSL 颜色工具', '把 HEX 转换为 HSL 用于 CSS 变量'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '通过实时色块与内置的 WCAG 2.1 对比度检查器，在 HEX、RGB 与 HSL 这三种 CSS 表示法之间无缝转换颜色，打造无障碍界面设计。',
  },
};
