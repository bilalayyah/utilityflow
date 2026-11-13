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
  'json-formatter': {
    slug: 'json-geshihua',
    name: 'JSON 格式化与验证工具',
    shortDescription:
      '格式化、压缩、按键排序并验证 JSON 语法，精确显示错误的行号与列号。',
    keywords: [
      'JSON 格式化',
      'JSON 验证',
      'JSON 美化',
      'JSON 压缩',
      'JSON 在线格式化',
      'JSON 语法检查',
      'JSON 解析工具',
      'JSON 校验',
      'JSON 排版',
    ],
    seo: {
      title: 'JSON 格式化与验证工具：免费在线美化、验证、压缩、排序 JSON 数据 | UtilityFlow',
      description:
        '在浏览器中即时格式化、验证、压缩 JSON 数据，并按字母顺序排列键名，精确显示语法错误的行号与列号，调试更快速。无需注册，适合检查 API 响应与配置文件，手机浏览器同样可用。支持 2 空格、4 空格、制表符与压缩四种模式，键名可按字母排序，输出可直接复制或下载为文件使用，适合日常开发、调试与接口联调。',
      primaryKeyword: 'JSON 格式化',
      secondaryKeywords: ['JSON 验证工具', 'JSON 美化工具', 'JSON 压缩工具', 'JSON 语法检查'],
      longTailKeywords: ['免费在线格式化并验证 JSON', '按字母顺序排列 JSON 键名', '不上传服务器压缩 JSON', '在线格式化嵌套 JSON 并缩进'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '通过行号与列号反馈验证损坏的 JSON 数据，将嵌套结构按 2 空格、4 空格或制表符格式化，按字母顺序排列键名，或压缩后用于生产环境传输。',
    instructions: [
      {
        title: '粘贴原始 JSON',
        description:
          '将任意 JSON 对象或数组粘贴到原始 JSON 输入框中，或点击“加载示例”查看示例数据。',
      },
      {
        title: '选择格式化模式',
        description:
          '在 2 空格、4 空格、制表符或压缩之间切换，并可按需开启“按键名 A–Z 排序”。',
      },
      {
        title: '根据行号与列号提示修复语法错误',
        description:
          '如果验证器报告错误，请查看显示的准确行号与列号，修正输入中多余的逗号、引号或括号问题，状态横幅会立即更新。',
      },
      {
        title: '查看格式化结果与统计信息',
        description:
          '确认“JSON 有效”横幅显示的键总数、嵌套深度与字节数，并浏览格式化后的输出，检查嵌套结构是否正确显示。',
      },
      {
        title: '复制或下载结果',
        description:
          '点击“复制”将格式化后的 JSON 放入剪贴板，或点击“下载”保存为 .json 文件，供项目使用。',
      },
      {
        title: '小贴士：比较大小并让差异更清晰',
        description:
          '压缩后再次粘贴同一数据比较字节数，或在 git diff 之前开启“按键名 A–Z 排序”，这样只会显示真实的改动。',
      },
    ],
    examples: [
      {
        title: '格式化压缩的 API 响应',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation: '将压缩为一行的 API 数据展开为易读的带缩进 JSON。',
      },
      {
        title: '按键名按字母顺序排序',
        input: '{"z": 1, "a": 2}',
        output: '{\n  "a": 2,\n  "z": 1\n}',
        explanation: '递归排列键名，让 git diff 更清晰。',
      },
    ],
    benefits: [
      '报告语法错误的位置，并附带行号与列号上下文',
      '递归地按字母顺序排列嵌套对象的键名，让差异更清晰',
      '统计键总数、最大嵌套深度与输出字节数',
      'API 响应与私人令牌完全保留在浏览器内存中',
    ],
    useCases: [
      '开发过程中调试 REST 与 GraphQL 的 API 数据',
      '在 git diff 之前规范 package.json 或配置文件',
      '压缩 JSON 测试数据与静态数据集',
      '编写解析器之前验证 webhook 内容',
    ],
    faqs: [
      {
        question: '按键名排序会改变数组元素的顺序吗？',
        answer:
          '不会。“按键名 A–Z 排序”只会重新排列 JSON 对象内部的键名，数组元素的顺序会原样保留。',
      },
      {
        question: '为什么带尾随逗号的 JSON 会显示语法错误？',
        answer:
          '严格的 JSON（RFC 8259）不允许尾随逗号或单引号键名。验证器会指出准确的行号与列号，方便你在部署前修正。',
      },
      {
        question: '我的 JSON 数据会被记录到任何地方吗？',
        answer:
          '不会。解析与格式化完全在浏览器标签页内的 JavaScript 中运行。',
      },
      {
        question: 'JSON 格式化工具免费吗？',
        answer:
          '是的，JSON 格式化工具完全免费，无需注册，没有使用次数限制，输出也没有水印。',
      },
      {
        question: '格式化 JSON 与压缩 JSON 有什么区别？',
        answer:
          '格式化会添加缩进与换行，让 JSON 更易阅读；压缩会删除所有不必要的空白，让数据尽可能小，便于传输。',
      },
      {
        question: 'JSON 格式化工具能处理大型 JSON 文件吗？',
        answer:
          '可以。由于所有处理都在浏览器本地进行，没有服务器上传限制，不过超大数据的处理速度取决于浏览器内存。',
      },
      {
        question: 'JSON 格式化工具提供哪些缩进选项？',
        answer:
          '可以使用 2 空格、4 空格或制表符进行格式化，让输出符合代码库的风格。',
      },
      {
        question: 'JSON 格式化工具支持顶层 JSON 数组吗？',
        answer:
          '支持。顶层数组也是合法的 JSON，可以像对象一样粘贴并格式化。',
      },
      {
        question: '如何修复 JSON 的“Unexpected token”错误？',
        answer:
          '请查看验证器报告的行号与列号。最常见的原因是缺少逗号、括号未闭合，或在需要双引号的地方用了单引号。',
      },
      {
        question: '可以格式化带注释或尾随逗号的 JSON 吗？',
        answer:
          '不可以。注释与尾随逗号不属于严格 JSON 的一部分，请先删除它们，格式化工具才能接受清理后的输入。',
      },
      {
        question: 'JSON 格式化工具中的嵌套深度统计是什么意思？',
        answer:
          '嵌套深度是指最深的值位于对象与数组中的层数，有助于了解数据的复杂程度。',
      },
      {
        question: 'JSON 格式化工具会保留对象键名的顺序吗？',
        answer:
          '会，除非你开启“按键名 A–Z 排序”。默认情况下，格式化工具会原样保留你粘贴的键名顺序。',
      },
      {
        question: '嵌套 JSON 对象中的键名也可以排序吗？',
        answer:
          '可以。排序会递归应用，因此每个嵌套对象内部的键名都会按字母顺序排列，而数组顺序保持不变。',
      },
      {
        question: 'JSON 格式化工具下载的文件是什么格式？',
        answer:
          '下载会将格式化或压缩后的结果保存为标准的 .json 文本文件，可用任意编辑器打开。',
      },
      {
        question: 'JSON 格式化工具可以离线使用吗？',
        answer:
          '可以。页面加载一次后，格式化与验证完全在浏览器内运行，不会发起网络请求。',
      },
      {
        question: '为什么合法的 JavaScript 对象会被当作 JSON 拒绝？',
        answer:
          'JSON 比 JavaScript 更严格：键名必须用双引号，值不能是 undefined 或函数，也不允许尾随逗号。',
      },
      {
        question: 'JSON 格式化工具可以验证 API 响应的 JSON 吗？',
        answer:
          '可以。将原始响应内容粘贴到输入框中，验证器会确认它是否为合法 JSON，并指出语法错误。',
      },
      {
        question: 'JSON 格式化工具最多可以粘贴多大的 JSON？',
        answer:
          '没有固定的大小限制，因为数据不会上传到服务器。实际限制只来自浏览器内存与文本框能流畅处理的大小。',
      },
      {
        question: '压缩 JSON 会改变它的含义吗？',
        answer:
          '不会。压缩只会删除空白字符，数据、键名与值完全不变，只是文件变小了。',
      },
      {
        question: '如何复制没有多余空白的格式化 JSON？',
        answer:
          '先切换到压缩模式，再点击“复制”。剪贴板中将是没有多余空格与换行的单行紧凑 JSON。',
      },
    ],
  },
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
    instructions: [
      {
        title: '选择编码或解码',
        description:
          '在工作区顶部选择“编码为 Base64”或“解码 Base64”。',
      },
      {
        title: '粘贴文本或 Base64 字符串',
        description:
          '在输入框中输入要编码的 UTF-8 文本，或要解码的 Base64 字符串。',
      },
      {
        title: '设置 Base64 选项',
        description:
          '在编码模式下，可按需开启 URL 安全输出（- 与 _）或去掉末尾的 = 填充字符。',
      },
      {
        title: '检查输出与验证结果',
        description:
          '立即查看转换结果。如果解码失败，请检查是否缺少填充，或是否包含 Base64 字母表之外的字符。',
      },
      {
        title: '复制或互换',
        description:
          '将结果复制到剪贴板，或点击“互换”把当前输出移入输入框并反转方向。',
      },
      {
        title: '小贴士：处理 URL 安全令牌',
        description:
          '从 URL 粘贴令牌时，请使用 URL 安全模式，以便正确处理 - 与 _。请记住，Base64 只是编码而非加密，不要把它当作安全的存储方式。',
      },
    ],
    examples: [
      {
        title: '编码 UTF-8 字符串',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation: '在转换为 Base64 之前，先用 TextEncoder 将文本序列化为 UTF-8 字节。',
      },
      {
        title: '将 Base64 解码回文本',
        input: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        output: 'UtilityFlow: UTF-8 ✓',
        explanation: '将 Base64 字符串还原为原始的 UTF-8 文本。',
      },
    ],
    benefits: [
      'UTF-8 安全的编码与解码，避免旧版 btoa/atob 的 Unicode 崩溃问题',
      '支持 RFC 4648 的 URL 安全字符（- 与 _）与无填充解码',
      '一键互换，可将输出移入输入框并反转模式',
      'API 密钥与 Basic 认证头也在本地安全执行',
    ],
    useCases: [
      '在本地编码 HTTP Basic 认证的凭据',
      '检查 Base64 编码的 JSON 数据或 data URI',
      '为查询参数准备 URL 安全的 Base64 令牌',
      '解码邮件或 webhook 中的 Base64 内容',
    ],
    faqs: [
      {
        question: '为什么标准 btoa() 在 Unicode 字符上会失败？',
        answer:
          '内置的 btoa() 函数只接受单字节的 Latin-1 码位。本工具先用 TextEncoder 将文本转换为 UTF-8 字节，因此所有国际字符与表情符号都能干净地编码。',
      },
      {
        question: '解码器支持无“=”填充的 URL 安全 Base64 吗？',
        answer:
          '支持。解码器会自动把 - 与 _ 规范化回 + 与 /，并在解码前补齐缺失的 = 填充。',
      },
      {
        question: 'Base64 是加密吗？',
        answer:
          '不是。Base64 是一种用 ASCII 表示二进制或文本数据的编码格式，不是密码学加密。',
      },
      {
        question: 'Base64 编码工具免费吗？',
        answer:
          '是的，Base64 编码工具完全免费，无需注册，转换字符串的数量没有上限。',
      },
      {
        question: 'Base64 字符串中可以使用哪些字符？',
        answer:
          '标准 Base64 使用 A–Z、a–z、0–9 以及 + 与 /，用 = 作为填充。URL 安全版本把 + 与 / 替换为 - 与 _。',
      },
      {
        question: '为什么 Base64 输出比输入更长？',
        answer:
          'Base64 用 4 个 ASCII 字符表示每 3 个字节的输入，因此编码后的输出比原始文本大约长三分之一。',
      },
      {
        question: '可以把表情符号与非英文文本编码为 Base64 吗？',
        answer:
          '可以。本工具先把文本编码为 UTF-8 字节，因此表情符号、重音字母与非拉丁文字都能正确编码与解码。',
      },
      {
        question: '什么是 URL 安全 Base64？什么时候应该使用它？',
        answer:
          'URL 安全 Base64 把 + 与 / 替换为 - 与 _，因此编码后的字符串无需百分号编码即可放入 URL 或文件名中。请在通过查询参数传递令牌时使用它。',
      },
      {
        question: '如何解码没有填充的 Base64 字符串？',
        answer:
          '直接粘贴即可。解码器会检测缺失的 = 填充并自动补齐，然后再解码。',
      },
      {
        question: 'Base64 编码器可以处理二进制文件吗？',
        answer:
          '不可以，本工具仅编码文本。要编码文件需要先读取其字节，而这个基于文本的工具不做这件事。',
      },
      {
        question: 'Base64 与 Base64URL 有什么区别？',
        answer:
          'Base64URL 是 Base64 的 URL 安全版本：把 + 换成 -，把 / 换成 _，通常还会省略 = 填充，因此在 URL 与文件名中使用是安全的。',
      },
      {
        question: '为什么解码后的 Base64 文本会出现乱码？',
        answer:
          '原始文本可能是用 UTF-8 以外的字节编码进行编码的，或者 Base64 字符串已损坏。请用 UTF-8 重新编码原始来源并对比。',
      },
      {
        question: '可以用 Base64 编码密码或机密信息吗？',
        answer:
          '可以，但不要把它当作安全措施。Base64 很容易还原，任何看到编码字符串的人都能立即解码。',
      },
      {
        question: '如何为 Basic 认证头编码文本？',
        answer:
          '将用户名与密码连接为“用户名:密码”的形式，把该字符串编码为 Base64，并在请求中使用“Authorization: Basic <编码值>”。',
      },
      {
        question: 'Base64 编码器可以离线使用吗？',
        answer:
          '可以。页面加载一次后，编码与解码完全在浏览器内运行，不会发起网络请求。',
      },
      {
        question: '把无效的 Base64 字符串粘贴到解码器中会怎样？',
        answer:
          '解码器会报告错误而非猜测结果。请检查是否存在 Base64 字母表之外的字符、缺失的填充，或混入的空格与换行。',
      },
      {
        question: '可以用这个工具解码 Base64 的 data URI 吗？',
        answer:
          '可以，只要粘贴逗号后面的 Base64 部分。请先去掉“data:...;base64,”前缀，因为它不是编码数据的一部分。',
      },
      {
        question: '为什么有些 Base64 字符串以“=”结尾？',
        answer:
          '= 是当输入长度不是 3 字节的倍数时添加的填充。它准确告诉解码器最后一组代表多少字节。',
      },
      {
        question: '编码时文本会上传到服务器吗？',
        answer:
          '不会。编码与解码在浏览器本地运行，因此像 API 密钥这样的敏感字符串不会离开你的设备。',
      },
      {
        question: '如何把 Base64 还原为原始文本？',
        answer:
          '切换到解码模式，粘贴 Base64 字符串，工具会返回原始的 UTF-8 文本，复制后即可使用。',
      },
    ],
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
    instructions: [
      {
        title: '选择编码或解码',
        description:
          '在编码与解码之间切换，并选择 encodeURIComponent（用于单个参数值）或 encodeURI（保留 ://?& 分隔符）。',
      },
      {
        title: '粘贴 URL 或参数字符串',
        description:
          '将任意 URL 或百分号编码的片段输入“输入字符串或 URL”。',
      },
      {
        title: '查看编码或解码结果',
        description:
          '检查输出框，确认空格、&、= 等特殊字符已按预期编码或解码。',
      },
      {
        title: '查看解析后的参数',
        description:
          '当检测到有效的完整 URL 时，可在下方的“解析后的 URL 详情”表格中查看解码后的查询键值对。',
      },
      {
        title: '复制结果',
        description:
          '点击“复制”，将编码后的 URL 用于代码、链接或 API 请求，无需重新输入。',
      },
      {
        title: '故障排查：损坏的 % 序列',
        description:
          '如果出现关于损坏 % 序列的错误，请查找后面没有跟两位十六进制数字的单个 %（例如 %2），修正后再重新解码。',
      },
    ],
    examples: [
      {
        title: '编码查询值',
        input: 'json formatter & validator',
        output: 'json%20formatter%20%26%20validator',
        explanation: '使用 encodeURIComponent 会转义“&”，因此不会拆分查询字符串。',
      },
      {
        title: '解码查询字符串',
        input: 'json%20formatter%20%26%20validator',
        output: 'json formatter & validator',
        explanation: '将百分号编码的值还原为易读的文本。',
      },
    ],
    benefits: [
      '并排说明 encodeURIComponent 与 encodeURI 的行为差异',
      '自动将有效 URL 解析为协议、主机、路径、哈希与查询行',
      '解码表单查询字符串时干净地处理表示空格的“+”',
      '清晰报告损坏的 % 序列',
    ],
    useCases: [
      '调试 OAuth 重定向 URI 与回调参数',
      '转义通过查询参数传递的搜索查询或 JSON 字符串',
      '审计带多个跟踪参数的 UTM 推广链接',
      '解码服务器访问日志中的 URL 以便人工查看',
    ],
    faqs: [
      {
        question: '应该使用 encodeURIComponent 还是 encodeURI？',
        answer:
          '编码单个查询参数值时请使用 encodeURIComponent（& 与 = 等字符会被转义）。编码整个 URL 并希望保留 https://、/、?、& 时，请使用 encodeURI。',
      },
      {
        question: '为什么解码后的 URL 中“+”变成了空格？',
        answer:
          '在 application/x-www-form-urlencoded 查询字符串中，“+”代表空格。组件解码会自动把“+”规范化为空格。',
      },
      {
        question: 'URL 解析器会验证域名是否可以访问吗？',
        answer:
          '不会。解析使用浏览器 URL API 在本地进行，不会向目标主机发送任何网络请求。',
      },
      {
        question: 'URL 编码工具免费吗？',
        answer:
          '是的，URL 编码工具完全免费，无需注册，编码或解码的 URL 数量没有上限。',
      },
      {
        question: 'URL 编码会转换哪些字符？',
        answer:
          'URL 编码会把空格、&、=、?、# 与非 ASCII 字母等保留字符与不安全字符转换为 % 加两位十六进制数字的形式。',
      },
      {
        question: 'URL 中空格的 %20 与 + 有什么区别？',
        answer:
          '两者都可以在查询字符串中表示空格，但 %20 是标准的百分号编码，而 + 仅在表单编码的查询字符串中表示空格，在路径中则不是。',
      },
      {
        question: 'URL 编码器可以在保留 https:// 的情况下编码整个 URL 吗？',
        answer:
          '可以。选择 encodeURI 模式后，协议、斜杠与分隔符保持不变，只有不安全的字符会被编码。',
      },
      {
        question: '如何编码查询值中的与号？',
        answer:
          '请仅对值使用 encodeURIComponent 模式。它会把 & 转换为 %26，让与号被当作数据处理，不会拆分查询字符串。',
      },
      {
        question: '为什么解码后的 URL 中仍然有 %？',
        answer:
          '% 后跟两位十六进制数字时只会解码一次，因此双重编码的值（如 %2520）在一次解码后会变成 %20。如需完全解码的形式，请再解码一次。',
      },
      {
        question: '可以解码带多个查询参数的 URL 吗？',
        answer:
          '可以。解码器会处理整个查询字符串，解析后的详情表会分别列出每个键值对，方便检查。',
      },
      {
        question: 'URL 编码器支持 Unicode 字符吗？',
        answer:
          '支持。非 ASCII 字符会先转换为 UTF-8 字节再进行百分号编码，因此重音字母与其他文字体系都能正确编码。',
      },
      {
        question: '什么是 URL 的百分号编码？',
        answer:
          '百分号编码是把字符替换为 % 加其字节值的两位十六进制数字，让包含空格或特殊符号的 URL 保持有效。',
      },
      {
        question: '如何编码用于邮件或文档的 URL？',
        answer:
          '粘贴 URL，选择 encodeURI 模式并复制结果。编码后的链接仍可点击，也不会因纯文本换行而损坏。',
      },
      {
        question: 'URL 解码器会验证 URL 吗？',
        answer:
          '本工具会检查输入是否为结构正确的 URL，以及所有 % 序列是否有效，但不会检查域名是否存在或页面能否加载。',
      },
      {
        question: '可以把空格编码为 %20 而不是 + 吗？',
        answer:
          '可以。编码器始终用 %20 表示空格。+ 的形式只在解码表单编码的输入时出现，那时 + 本来就表示空格。',
      },
      {
        question: '编码已经编码过的 URL 会怎样？',
        answer:
          '% 本身会被编码为 %25，产生如 %2520 的双重编码。解码一次即可回到单次编码的形式。',
      },
      {
        question: '编码时 URL 会上传到服务器吗？',
        answer:
          '不会。编码、解码与解析全部在浏览器本地进行，因此私人链接与令牌不会离开你的设备。',
      },
      {
        question: '如何编码 URL 的片段或哈希？',
        answer:
          '仅用 encodeURIComponent 编码片段值，然后自己在 # 后面加上它，这样哈希分隔符不会被编码。',
      },
      {
        question: '为什么编码后的 URL 看起来长得多？',
        answer:
          '每个特殊字符或非 ASCII 字符都会变成 3 个字符（% 加两位十六进制数字），因此含大量空格或 Unicode 字符的 URL 会明显变长。',
      },
      {
        question: 'URL 编码器能处理非常长的 URL 吗？',
        answer:
          '可以。处理在本地进行，没有服务器上传限制，只要浏览器能容纳文本，长 URL 也可以编码与解码。',
      },
    ],
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
    instructions: [
      {
        title: '选择 UUID v4 或 v7',
        description:
          '需要标准随机标识符时选择 v4，需要按时间戳前缀排序的数据库主键时选择 v7。',
      },
      {
        title: '设置数量与格式',
        description:
          '输入 1 到 100 之间的 ID 数量，并可按需开启“大写”“包含连字符”“用 {花括号} 包裹”。',
      },
      {
        title: '生成新的批次',
        description:
          '点击“生成 UUID”创建新批次。每次点击都会生成一组全新的随机标识符。',
      },
      {
        title: '检查生成的 ID',
        description:
          '查看列表，确认版本、大小写与连字符格式符合数据库或代码的预期。',
      },
      {
        title: '复制或下载列表',
        description:
          '点击“全部复制”将所有 ID 放入剪贴板，或将批次下载为 .txt 文件，用于填充记录或测试数据。',
      },
      {
        title: '小贴士：数据库请选 v7',
        description:
          '如果把 ID 作为主键保存，请选择 v7，新行会按时间顺序排列，保持索引高效。顺序不重要时请使用 v4。',
      },
    ],
    examples: [
      {
        title: '标准小写 UUID v4',
        input: '版本：v4 · 连字符：开 · 大写：关',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation: '适合分布式主键的 RFC 4122 128 位标识符。',
      },
      {
        title: '无连字符大写 UUID v4',
        input: '版本：v4 · 连字符：关 · 大写：开',
        output: '550E8400E29B41D4A716446655440000',
        explanation: '适合常量与紧凑令牌的 32 字符十六进制字符串。',
      },
    ],
    benefits: [
      '使用浏览器 Web Crypto API（crypto.randomUUID / crypto.getRandomValues）',
      '支持带 48 位毫秒时间戳前缀的最新 RFC 9562 UUID v7',
      '一次最多批量生成 100 个唯一 ID',
      '可格式化为大写、无连字符的紧凑十六进制或带花括号的 GUID 字符串',
    ],
    useCases: [
      '填充数据库测试数据与迁移测试记录',
      '生成关联 ID、API 密钥与 webhook 测试 ID',
      '比较适合 B-tree 索引的 UUID v7 与随机 UUID v4',
      '创建带花括号的 Windows/C# GUID 常量',
    ],
    faqs: [
      {
        question: 'UUID v7 比 UUID v4 好在哪里？',
        answer:
          'UUID v7 在最高位编码 Unix 毫秒时间戳，因此 ID 可以按时间顺序排序，并减少 SQL 数据库 B-tree 索引的碎片。',
      },
      {
        question: 'UUID 是用 Math.random() 生成的吗？',
        answer:
          '不是。所有 UUID 都使用 Web Crypto API 的密码学强随机数生成。',
      },
      {
        question: '如何获得无连字符的 32 字符十六进制 ID？',
        answer:
          '取消勾选“包含连字符”，整个生成批次中的连字符会立即被去掉。',
      },
      {
        question: 'UUID 生成器免费吗？',
        answer:
          '是的，UUID 生成器完全免费，无需注册，想生成多少批次都可以。',
      },
      {
        question: '什么是 UUID？它用来做什么？',
        answer:
          'UUID 是 128 位唯一标识符，通常写成分为 5 组的 32 位十六进制数字。用于数据库主键、关联 ID、会话令牌与文件名。',
      },
      {
        question: '生成的两个 UUID 会相同吗？',
        answer:
          '实际上不会。UUID v4 有 122 位随机数，碰撞的可能性极低，因此生成的 ID 可以视为唯一。',
      },
      {
        question: 'UUID v4 与 UUID v7 有什么区别？',
        answer:
          'UUID v4 完全随机，而 UUID v7 以毫秒时间戳开头，因此较新的 ID 会排在较旧的 ID 之后。两者都是 128 位标识符。',
      },
      {
        question: '一次最多可以生成多少个 UUID？',
        answer:
          '一个批次可以生成 1 到 100 个 UUID。再点击一次“生成”，会生成另一个同样大小的全新批次。',
      },
      {
        question: 'UUID v7 的“时间排序”是什么意思？',
        answer:
          '时间排序是指 UUID 的第一部分是 Unix 毫秒时间戳，因此按字母顺序排列 ID 时，也会按创建时间排序。',
      },
      {
        question: '可以生成无连字符的 UUID 吗？',
        answer:
          '可以。关闭“包含连字符”后，批次中的所有 UUID 都会显示为 32 字符的紧凑十六进制字符串。',
      },
      {
        question: '什么是带花括号的 GUID？什么时候需要它？',
        answer:
          '带花括号的 GUID 是用花括号包裹的 UUID，例如 {550e8400-...}。一些 Microsoft 工具与 C# 代码要求 GUID 常量使用这种格式。',
      },
      {
        question: '这里生成的 UUID 可以在生产环境中使用吗？',
        answer:
          '可以。UUID 使用浏览器 Web Crypto API 生成，提供密码学强随机数，适合用作生产环境标识符。',
      },
      {
        question: '可以生成大写 UUID 吗？',
        answer:
          '可以。开启“大写”开关后，整个批次都会以大写十六进制 A–F 显示。',
      },
      {
        question: '生成 UUID 需要联网吗？',
        answer:
          '只需加载页面时联网。加载后，生成完全在浏览器内进行，不会发起网络请求。',
      },
      {
        question: '生成的 UUID 列表会被保存或上传吗？',
        answer:
          '不会。生成在浏览器本地进行，因此 ID 不会被发送到服务器，也不会保存在任何地方。',
      },
      {
        question: '可以把 UUID 用作 API 密钥吗？',
        answer:
          '可以把它用作不透明令牌，但 UUID 是标识符，不是为认证设计的机密信息。真正的 API 密钥请使用带轮换机制的正规机密信息系统。',
      },
      {
        question: 'UUID 与 GUID 有什么区别？',
        answer:
          '两者是相同的 128 位格式。GUID 是 Microsoft 使用的名称，而 UUID 是其他地方使用的开放标准名称。',
      },
      {
        question: '为什么数据库主键要选 UUID v7？',
        answer:
          '因为 v7 的 ID 按创建时间排序，新行在 B-tree 索引中会落在相邻位置，插入更快，与随机 v4 ID 相比，索引碎片更少。',
      },
      {
        question: '同一个 UUID 可以生成两次吗？',
        answer:
          '不可以。每次生成都使用全新的密码学随机数，因此同一个 UUID 不会再次生成。需要重复使用的 ID 请保存好。',
      },
      {
        question: '如何一次复制所有生成的 UUID？',
        answer:
          '点击“全部复制”，整个批次会以每行一个 UUID 的形式进入剪贴板，可粘贴到代码、电子表格或 SQL 脚本中。',
      },
    ],
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
    instructions: [
      {
        title: '输入模式与标志',
        description:
          '在斜杠之间输入正则表达式模式，并开启 g、i、m 或 s 标志。',
      },
      {
        title: '提供测试文本',
        description:
          '将测试字符串粘贴到“测试字符串”中，匹配的子字符串会在右侧高亮显示。',
      },
      {
        title: '查看高亮的匹配',
        description:
          '检查高亮的子字符串与匹配数量，确认模式找到的正是你期望的内容，不多也不少。',
      },
      {
        title: '检查分组与替换',
        description:
          '查看准确的匹配索引与 $1/$2 捕获组，或在下方测试替换模板。',
      },
      {
        title: '修复模式错误',
        description:
          '如果出现语法错误，请阅读提示信息，检查未闭合的方括号或圆括号，调整模式直到出现匹配。',
      },
      {
        title: '小贴士：发布前测试边界情况',
        description:
          '在生产环境使用模式之前，请尝试空字符串、特殊字符与多行输入，并切换 i 标志检查大小写敏感性。',
      },
    ],
    examples: [
      {
        title: '提取邮箱的本地部分与域名',
        input: '模式：([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · 文本：support@utilityflow.online',
        output: '匹配 #1 · $1="support" · $2="utilityflow.online"',
        explanation: '括号分组可以分别暴露捕获的子字符串。',
      },
      {
        title: '验证日期格式',
        input: '模式：^\\d{4}-\\d{2}-\\d{2}$ · 文本：2026-11-13',
        output: '匹配 #1 · 匹配内容："2026-11-13"',
        explanation: '锚点 ^ 与 $ 确保整个字符串都符合 YYYY-MM-DD 格式。',
      },
    ],
    benefits: [
      '自动防止零长度匹配导致的无限循环',
      '显示每个匹配的准确字符索引与捕获组值',
      '包含使用 $1、$2 与 $& 的实时替换模板预览',
      '干净地报告正则表达式语法错误，不会崩溃',
    ],
    useCases: [
      '发布前验证邮箱、slug 或表单输入模式',
      '从日志行或 HTML 片段中提取结构化标记',
      '测试带捕获模板的查找与替换',
      '验证多行（^ / $）与不区分大小写标志的行为',
    ],
    faqs: [
      {
        question: '这个测试器使用哪种正则表达式引擎？',
        answer:
          '它使用浏览器原生的 ECMAScript（JavaScript）RegExp 引擎，因此行为与客户端 JS 和 Node.js 代码完全一致。',
      },
      {
        question: '为什么全局模式（g）很重要？',
        answer:
          '没有 g 标志时，RegExp 在第一次匹配后就会停止。启用 g 后，会查找并高亮测试字符串中的所有匹配。',
      },
      {
        question: '如何让“.”匹配换行符？',
        answer:
          '启用 s（dotAll）标志后，点元字符“.”也可以匹配换行符。',
      },
      {
        question: '正则表达式测试工具免费吗？',
        answer:
          '是的，正则表达式测试工具完全免费，无需注册，尝试的模式与测试字符串数量没有限制。',
      },
      {
        question: '正则表达式测试工具使用哪种正则语法？',
        answer:
          '它使用 JavaScript（ECMAScript）正则语法，即在浏览器与 Node.js 中运行的同一引擎，因此模式在代码中的行为相同。',
      },
      {
        question: '如何测试邮箱验证的正则表达式？',
        answer:
          '粘贴类似 ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) 的模式，并在测试字符串中尝试有效与无效的地址，查看哪些能匹配。',
      },
      {
        question: '正则表达式测试工具中的 g、i、m、s 标志有什么作用？',
        answer:
          'g 标志查找所有匹配，i 让匹配不区分大小写，m 让 ^ 与 $ 在行边界处匹配，s 让 . 匹配换行符。',
      },
      {
        question: '捕获组在正则表达式测试工具中如何工作？',
        answer:
          '括号内的文本构成带编号的捕获组。匹配后，每个组会以 $1、$2 等形式列出，并显示它捕获的准确子字符串。',
      },
      {
        question: '正则表达式中的 .* 与 .*? 有什么区别？',
        answer:
          '.* 量词是贪婪的，会尽可能多地匹配；而 .*? 是懒惰的，会尽可能少地匹配。需要最短匹配时请使用懒惰形式。',
      },
      {
        question: '如何在正则表达式中匹配字面意义的点或括号？',
        answer:
          '用反斜杠转义，例如 \\. 表示点，\\( 表示括号，这样字符会被当作字面文本而非元字符处理。',
      },
      {
        question: '为什么我的正则表达式匹配了太多文本？',
        answer:
          '你可能用了像 .* 这样的贪婪量词，它会一直吞到最后一个可能的匹配。请改用懒惰量词 .*? 或缩小字符类。',
      },
      {
        question: '如何在替换中使用 $1 与 $2？',
        answer:
          '输入类似 $2@$1 的替换模板，测试器会用每个编号分组捕获的文本替换每个 $n。',
      },
      {
        question: '正则表达式测试工具可以跨多行匹配吗？',
        answer:
          '可以。启用 m 标志后 ^ 与 $ 可按行工作；如果需要 . 跨越换行，请启用 s 标志。',
      },
      {
        question: '什么是正则表达式中的前瞻？',
        answer:
          '像 (?=...) 这样的前瞻会检查当前位置后面是否符合某种模式，但不消耗字符，因此可以在不把条件包含进匹配的情况下要求它，例如要求后面有数字。',
      },
      {
        question: '为什么我的模式没有显示匹配？',
        answer:
          '请检查是否存在语法错误、未转义的特殊字符，或排除了输入内容的字符类。尝试简化模式，一次添加一部分。',
      },
      {
        question: '如何一次用正则表达式测试多行文本？',
        answer:
          '将整个多行示例粘贴到测试字符串中并启用 g 标志。每个匹配的行都会高亮显示并附带索引列出。',
      },
      {
        question: '正则表达式测试工具支持 Unicode 字符吗？',
        answer:
          '支持。JavaScript 正则可以处理 Unicode 文本，你还可以使用 \\u{1F600} 等转义或 u 标志进行完整的 Unicode 感知匹配。',
      },
      {
        question: '我的正则表达式或测试文本会被上传到任何地方吗？',
        answer:
          '不会。测试完全在浏览器内运行，因此你的模式与示例数据不会离开设备。',
      },
      {
        question: '什么是灾难性回溯？如何避免？',
        answer:
          '当 (a+)+ 这样的嵌套量词迫使引擎尝试极其庞大的组合时就会发生。请避免重叠的量词，改用原子风格的模式或更简单的字符类。',
      },
      {
        question: '可以保存或分享我的正则表达式模式吗？',
        answer:
          '没有内置的保存功能，请把模式与测试字符串复制到代码片段文件或代码注释中。也可以直接把模式粘贴到源代码里。',
      },
    ],
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
    instructions: [
      {
        title: '粘贴 JWT 字符串',
        description:
          '将标准三段式令牌（头部.载荷.签名）粘贴到输入框中，或点击“加载示例 JWT”尝试演示令牌。',
      },
      {
        title: '查看头部与载荷 JSON',
        description:
          '在格式化后的 JSON 面板中检查算法元数据（alg、typ）与解码后的声明字段。',
      },
      {
        title: '检查时间戳声明',
        description:
          '验证 iat、nbf 与 exp 的 UTC 日期转换结果，以及有效或已过期的状态。',
      },
      {
        title: '检查 sub、角色与权限范围等声明',
        description:
          '查找 sub、iss、aud、roles 与 scope 等身份与权限声明，确认令牌包含 API 期望的内容。',
      },
      {
        title: '复制解码后的 JSON 或单个声明',
        description:
          '复制完整的格式化头部或载荷 JSON，或复制单个声明值，粘贴到代码、测试或支持工单中。',
      },
      {
        title: '排查无法解码的令牌',
        description:
          '删除令牌周围多余的空格、换行或引号。五段式令牌是加密的 JWE 而非 JWT，没有解密密钥无法解码。',
      },
    ],
    examples: [
      {
        title: '检查令牌过期时间',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: '头部：{ "alg": "HS256", "typ": "JWT" } · exp：2027-01-15 UTC',
        explanation: '解码 Base64Url 段，并将数字形式的纪元声明转换为 UTC 日期。',
      },
      {
        title: '检查角色声明',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsInJvbGVzIjpbImFkbWluIl0sImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: '载荷：{ "sub": "usr_1", "roles": ["admin"], "exp": 1800000000 }',
        explanation: '解码后的载荷会以 JSON 形式显示 roles 等自定义声明。',
      },
    ],
    benefits: [
      '零网络传输——令牌永不离开浏览器标签页',
      '将数字形式的 iat、nbf 与 exp 声明转换为可读的 UTC 日期',
      '高亮显示令牌过期时间戳是否已经过去',
      '明确说明密码学签名验证需要你的签名密钥',
    ],
    useCases: [
      '在 API 集成过程中调试 OAuth2 / OIDC 访问令牌与 ID 令牌',
      '验证认证提供方签发的角色、权限范围与租户声明',
      '检查 API 拒绝过期持有者令牌的原因',
      '在集成测试中验证 JWT 结构',
    ],
    faqs: [
      {
        question: '这个 JWT 解码器会验证令牌签名是否真实吗？',
        answer:
          '不会。解码 JWT 只是解析其 Base64Url 头部与载荷段。验证签名需要服务器密钥或公开的 JWKS 密钥，并且应始终在后端进行。',
      },
      {
        question: '在这里粘贴认证令牌安全吗？',
        answer:
          '所有解码都在客户端 JavaScript 本地运行，不会记录或传输令牌。不过，仍请避免在不受信任的共享计算机上粘贴生产环境凭据。',
      },
      {
        question: '为什么我的令牌有 5 段而不是 3 段时会失败？',
        answer:
          '5 段式令牌是加密的 JWE（JSON Web Encryption），而非签名的 JWS/JWT，因此没有解密密钥就无法解码其载荷。',
      },
      {
        question: '什么是 JWT？这个解码器会显示什么？',
        answer:
          'JSON Web Token 是由头部、载荷与签名三个 Base64Url 段组成的紧凑字符串。本解码器显示头部 JSON、载荷声明，以及时间戳声明的人类可读日期。',
      },
      {
        question: 'JWT 解码器免费吗？',
        answer:
          '是的，JWT 解码器完全免费，无需注册，没有使用限制，也不需要账号。它完全在浏览器中运行。',
      },
      {
        question: '没有签名密钥可以解码 JWT 吗？',
        answer:
          '可以。解码只读取未经加密的 Base64Url 头部与载荷。签名密钥只在验证签名真实性时才需要。',
      },
      {
        question: 'JWT 头部字段 alg 与 typ 是什么意思？',
        answer:
          'alg 字段表示签名算法，例如 HS256 或 RS256；typ 通常写 JWT，用于标识令牌类型。这两个字段都在头部段中。',
      },
      {
        question: 'JWT 载荷中通常有哪些声明？',
        answer:
          '常见的载荷声明包括：sub（主体或用户 ID）、iss（签发方）、aud（受众）、iat（签发时间）、nbf（生效时间）与 exp（过期时间），以及 roles 或 scopes 等自定义声明。',
      },
      {
        question: '如何知道我的 JWT 是否已过期？',
        answer:
          '将 exp 声明与当前时间比较。本解码器会把 exp 转换为清晰的 UTC 日期，并标记令牌仍然有效还是已经过期。',
      },
      {
        question: 'JWT 中的 iat、nbf 与 exp 有什么区别？',
        answer:
          'iat 记录令牌签发的时间，nbf 记录令牌最早生效的时间，exp 记录令牌失效的时间。这三者都是以秒为单位的 Unix 时间戳。',
      },
      {
        question: '为什么解码后的 JWT 载荷看起来与原始 JSON 不同？',
        answer:
          '解码只是还原 Base64Url 编码，因此载荷应与原始声明一致。如果看起来乱码，令牌可能被截断、跨行换行，或复制时带入了多余字符。',
      },
      {
        question: '可以解码没有签名的 JWT 吗？',
        answer:
          '可以。无签名令牌使用 alg none，第三段为空，其头部与载荷仍可正常解码。无签名令牌绝不应在生产环境中被信任。',
      },
      {
        question: '如果我的令牌只有两段，意味着什么？',
        answer:
          '两段式令牌格式错误或不完整，通常是复制时截断了部分内容。合法的签名 JWT 始终有三个用点分隔的段。',
      },
      {
        question: 'JWT 解码器会存储或发送我的令牌吗？',
        answer:
          '不会。解码完全在浏览器标签页内进行，不会上传、记录或存储在服务器上。关闭标签页后，令牌会从内存中清除。',
      },
      {
        question: '为什么我的 JWT 完全无法解码？',
        answer:
          '请检查令牌周围是否有多余的空格、换行或引号，并确认它恰好有三个用点分隔的段。从日志输出复制的令牌常带有破坏解码的尾随标点。',
      },
      {
        question: '这个 JWT 解码器可以用于 OAuth2 访问令牌吗？',
        answer:
          '可以，只要访问令牌是 JWT。许多 OAuth2 与 OpenID Connect 提供方签发 JWT 访问令牌与 ID 令牌，本工具会以同样方式解码它们的声明。',
      },
      {
        question: '什么是 JWE？为什么不能在这里解码它？',
        answer:
          'JWE 是加密的 JSON Web Encryption 令牌，有五个段。它的载荷已加密，只有持有解密密钥的预期接收方才能读取。',
      },
      {
        question: '如何检查 JWT 中的角色与权限范围声明？',
        answer:
          '粘贴令牌并阅读解码后的载荷面板。角色、权限范围、权限与租户声明会作为常规 JSON 字段显示在那里，可以检查或复制。',
      },
      {
        question: '解码 JWT 能证明令牌有效吗？',
        answer:
          '不能。解码只显示令牌包含的内容。任何人都可以创建包含任意声明的令牌，因此必须在服务器上检查签名与 exp 声明来确认有效性。',
      },
      {
        question: '可以在共享或公共计算机上解码 JWT 吗？',
        answer:
          '可以，因为解码在本地进行，不会上传任何内容，但最好还是避免在你无法控制的计算机上粘贴实时的生产环境令牌。',
      },
    ],
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
    instructions: [
      {
        title: '选择文本输入或本地文件校验和',
        description:
          '选择“文本输入”来哈希字符串，或选择“本地文件校验和”来验证下载的二进制文件，无需上传。',
      },
      {
        title: '输入文本或选择本地文件',
        description:
          '在输入框中输入或粘贴文本，或从设备中选择文件。文件仅在浏览器内读取，永不上传。',
      },
      {
        title: '选择输出编码',
        description:
          '在十六进制（小写或大写）与 Base64 摘要格式之间切换。',
      },
      {
        title: '一次查看全部四种摘要',
        description:
          'SHA-1、SHA-256、SHA-384 与 SHA-512 会同时计算，无需重新运行工具即可并排比较各算法。',
      },
      {
        title: '复制任意摘要',
        description:
          '点击 SHA-1、SHA-256、SHA-384 或 SHA-512 旁边的“复制”，复制计算出的哈希值。',
      },
      {
        title: '排查不匹配的校验和',
        description:
          '如果文件校验和与发布值不符，请重新下载文件，并检查文本输入中是否有尾随换行或空白，因为哪怕多一个字符也会让哈希完全不同。',
      },
    ],
    examples: [
      {
        title: '“UtilityFlow”的 SHA-256',
        input: 'UtilityFlow',
        output: 'add08e8a98d7c6eab5960b60a34ebe020497dc0334bd314cf5e4b45aae39e90e',
        explanation: '64 个十六进制字符的确定性摘要（256 位）。哪怕只改一个字符，摘要也会完全不同。',
      },
      {
        title: '验证下载文件的校验和',
        input: '模式：本地文件校验和 · 文件：installer.zip',
        output: '文件的 SHA-256 会与软件厂商发布的校验和进行比较',
        explanation: '数值一致说明文件完整无损；不一致则说明下载已损坏或被篡改。',
      },
    ],
    benefits: [
      '使用原生硬件加速的 Web Crypto SubtleCrypto',
      '无需上传文件即可验证本地文件的 SHA-256 校验和',
      '同时输出十六进制（大写/小写）与 Base64 格式',
      '同时计算全部四种 SHA 算法',
    ],
    useCases: [
      '验证下载的软件安装包或压缩包的 SHA-256 校验和',
      '为脚本与样式生成子资源完整性（SRI）的 Base64 哈希',
      '测试 webhook 的 HMAC 或载荷摘要预期值',
      '创建确定性的内容指纹',
    ],
    faqs: [
      {
        question: '可以把 SHA-256 哈希还原为原始文本吗？',
        answer:
          '不可以。密码学哈希函数是单向的数学摘要，设计上就无法从哈希推导出原始输入。',
      },
      {
        question: '为什么 SHA-256 与 SHA-512 比 SHA-1 更受推荐？',
        answer:
          'SHA-1 已知存在碰撞弱点，在安全签名方面已被弃用；SHA-256 与 SHA-512 属于更强的 SHA-2 家族。',
      },
      {
        question: '上传的文件会被传输到服务器吗？',
        answer:
          '不会。选择的文件会在浏览器标签页内读入 ArrayBuffer 并在本地哈希。',
      },
      {
        question: '哈希生成器是用来做什么的？',
        answer:
          '哈希生成器把文本或文件转换为固定长度的指纹，称为摘要。开发者用摘要来验证下载、检查数据完整性，并构建子资源完整性值。',
      },
      {
        question: '哈希生成器免费吗？',
        answer:
          '是的，哈希生成器完全免费，无需注册，没有使用限制。所有哈希都在浏览器本地运行。',
      },
      {
        question: 'SHA-1、SHA-256、SHA-384 与 SHA-512 有什么区别？',
        answer:
          '它们是 SHA 家族的成员，摘要长度不同：SHA-1 产生 160 位，SHA-256 产生 256 位，SHA-384 产生 384 位，SHA-512 产生 512 位。摘要越长通常越强。',
      },
      {
        question: '如何用这个工具验证下载文件的校验和？',
        answer:
          '切换到“本地文件校验和”模式，选择下载的文件，并将计算出的 SHA-256 值与软件厂商发布的校验和比较。数值一致说明文件完整。',
      },
      {
        question: '如果文件校验和不匹配，应该怎么办？',
        answer:
          '请勿安装或运行该文件。请从官方来源重新下载并再次哈希，因为不匹配可能意味着下载已损坏或被篡改。',
      },
      {
        question: '哈希的十六进制与 Base64 输出有什么区别？',
        answer:
          '十六进制输出把摘要显示为十六进制字符，而 Base64 输出把同一摘要显示为更短的 Base64 字符串。两者代表完全相同的哈希字节。',
      },
      {
        question: '改变一个字符真的会让整个哈希都变吗？',
        answer:
          '是的。哈希函数具有雪崩效应，因此改变一个字母、空格或换行都会产生一个完全不同、看不出规律的摘要。',
      },
      {
        question: '两个不同的文件会产生相同的 SHA-256 哈希吗？',
        answer:
          '理论上碰撞是可能的，但对 SHA-256 来说，实际发生的可能性极低，因此哈希一致会被视为文件相同的证明。',
      },
      {
        question: '可以不上传文件就哈希文件吗？',
        answer:
          '可以。本工具把文件读入浏览器内存，并用 Web Crypto API 进行哈希。文件永不离开你的设备。',
      },
      {
        question: '什么是子资源完整性哈希？如何生成？',
        answer:
          '子资源完整性（SRI）哈希是添加到 script 或 link 标签中的 Base64 SHA 摘要，让浏览器拒绝被篡改的文件。在此选择 Base64 输出，并把 SHA-256 或 SHA-384 摘要复制到 integrity 属性中。',
      },
      {
        question: '为什么相同的文本总是产生相同的哈希？',
        answer:
          '哈希函数是确定性的：相同的输入总是产生相同的摘要。这正是哈希可用于验证文件与检测改动的原因。',
      },
      {
        question: 'SHA-1 现在还安全吗？',
        answer:
          'SHA-1 用于非敏感数据的简单校验和还可以，但不应再用于安全签名或证书，因为针对它的实际碰撞攻击已经存在。',
      },
      {
        question: 'SHA-256 哈希用十六进制表示有多长？',
        answer:
          'SHA-256 摘要是 256 位，显示为 64 个十六进制字符。SHA-1 显示 40 个十六进制字符，SHA-384 显示 96 个，SHA-512 显示 128 个。',
      },
      {
        question: '哈希生成器可以离线使用吗？',
        answer:
          '可以，页面加载后即可。哈希使用浏览器内置的 Web Crypto API，因此哈希文本或文件时不需要网络连接。',
      },
      {
        question: '可以哈希带特殊字符或表情符号的文本吗？',
        answer:
          '可以。文本在哈希前会编码为 UTF-8，因此重音字母、符号与表情符号都能得到一致的处理。',
      },
      {
        question: '哈希与加密有什么区别？',
        answer:
          '加密可以用密钥还原，而哈希是无法还原的单向摘要。哈希用于验证完整性，加密用于保护机密性。',
      },
      {
        question: '可以用哈希生成器检查密码吗？',
        answer:
          '你可以哈希密码并与存储的摘要比较，但在真实应用中，密码应该用 bcrypt 或 Argon2 等慢速密码算法哈希，而不是单纯的 SHA-256。',
      },
    ],
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
    instructions: [
      {
        title: '选择编码或解码',
        description:
          '选择“编码实体”来转义 HTML 标记，或选择“解码实体”来取消转义已有的实体。',
      },
      {
        title: '粘贴 HTML 或文本',
        description:
          '将代码片段、属性值或转义后的字符串粘贴到输入框中。大段代码会原样粘贴。',
      },
      {
        title: '切换非 ASCII 编码',
        description:
          '在编码模式下，决定是否把高于 ASCII 127 的字符也转换为数字形式的 &#...; 实体。',
      },
      {
        title: '查看转换后的输出',
        description:
          '检查标签、引号与符号是否按预期转换，并确认代码片段中没有任何内容被更改或丢失。',
      },
      {
        title: '复制或互换',
        description:
          '复制转换后的文本，或点击“互换”来反转工作流程。',
      },
      {
        title: '排查双重编码的实体',
        description:
          '如果输出中出现 &amp;lt;，说明文本被编码了两次。解码一次恢复为正常实体，然后只编码一次。',
      },
    ],
    examples: [
      {
        title: '为文档转义 HTML 片段',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation: '防止浏览器把示例标签解释为真实的 DOM 元素。',
      },
      {
        title: '把 HTML 实体解码回文本',
        input: '&lt;div&gt;你好 &amp; 欢迎&lt;/div&gt;',
        output: '<div>你好 & 欢迎</div>',
        explanation: '把转义后的实体还原为真实字符，便于阅读。',
      },
    ],
    benefits: [
      '转义全部五个 XML/HTML 保留字符（&、<、>、"、\'）',
      '可为国际符号与标点选择数字实体编码',
      '同时解码命名实体（&mdash;、&copy;）与数字实体（&#8212;、&#x2014;）',
      '解码时使用安全的 DOMParser 文本提取',
    ],
    useCases: [
      '为博客文章与文档准备 HTML 代码示例',
      '清理从 RSS 源或 XML API 抓取的 HTML 编码文本',
      '转义静态 HTML 模板中的属性值',
      '检查特殊符号在 UTF-8 或 ASCII 页面中的安全渲染',
    ],
    faqs: [
      {
        question: 'HTML 文本与属性中必须转义的五个字符是哪些？',
        answer:
          '与号（&）、小于号（<）、大于号（>）、双引号（"）与单引号（\'）都应转义，以防止标记歧义或 XSS 问题。',
      },
      {
        question: '什么时候应该关闭非 ASCII 编码？',
        answer:
          '如果你的网页使用 <meta charset="UTF-8">，标准国际字符与符号可以直接渲染，无需数字形式的 &#...; 实体。',
      },
      {
        question: '解码器支持像 &#x27; 这样的十六进制实体吗？',
        answer:
          '支持。十进制（&#39;）与十六进制（&#x27;）实体，以及标准命名实体（&amp;、&nbsp;、&copy;）都能正确解码。',
      },
      {
        question: '什么是 HTML 实体？',
        answer:
          'HTML 实体是表示特殊字符的文本代码，例如 &lt; 表示 <，&amp; 表示 &。实体可以显示保留字符，而不会让浏览器把它们当作标记处理。',
      },
      {
        question: 'HTML 实体编码器免费吗？',
        answer:
          '是的，HTML 实体编码器完全免费，无需注册，没有使用限制。所有编码与解码都在浏览器本地运行。',
      },
      {
        question: '为什么需要转义 HTML 字符？',
        answer:
          '浏览器会把 <、> 与 & 解释为标记。转义它们可以让这些字符显示为可见文本，这对代码示例、用户内容与安全模板至关重要。',
      },
      {
        question: '命名 HTML 实体与数字 HTML 实体有什么区别？',
        answer:
          '命名实体使用易读的名称，例如 &copy; 表示版权符号；数字实体使用码位，例如 &#169; 或 &#xA9;。两者渲染的字符相同。',
      },
      {
        question: '什么时候应该把非 ASCII 字符编码为实体？',
        answer:
          '当页面或邮件系统不能可靠支持 UTF-8，或需要纯 ASCII 输出时请编码。在现代 UTF-8 页面上，重音字母与符号可以直接保留为纯字符。',
      },
      {
        question: '双重编码的 HTML 是什么样子？',
        answer:
          '双重编码会把 &lt; 变成 &amp;lt;，浏览器会显示字面文本 &lt; 而不是 <。解码一次即可修复，然后只编码一次。',
      },
      {
        question: '可以解码从抓取的网页中得到的 HTML 实体吗？',
        answer:
          '可以。粘贴来自 RSS 源、XML API 或抓取页面的转义文本并解码，即可恢复为带真实字符的可读纯文本。',
      },
      {
        question: '编码 HTML 实体能防止 XSS 攻击吗？',
        answer:
          '转义用户输入是 XSS 防御的重要一层，但单靠它并不完整。请始终结合正确的输出编码、验证与内容安全策略。',
      },
      {
        question: '不间断空格的 HTML 实体是什么？',
        answer:
          '不间断空格是 &nbsp; 或 &#160;。它可以让两个单词保持在同一行，常用于在 HTML 布局中保留间距。',
      },
      {
        question: '如何转义 HTML 属性中的引号？',
        answer:
          '双引号用 &quot;，单引号用 &#39; 或 &apos;。转义引号可以防止属性值提前结束并破坏标记。',
      },
      {
        question: '这个工具可以编码表情符号与其他 Unicode 符号吗？',
        answer:
          '可以。开启非 ASCII 编码后，表情符号与国际符号会变成数字实体，例如 &#128512;。关闭时，它们会保留为纯 Unicode 字符。',
      },
      {
        question: '转义 HTML 与 URL 编码有什么区别？',
        answer:
          'HTML 转义把保留的标记字符转换为实体以便在页面中显示，而 URL 编码把字符转换为 %20 等百分号代码以便在链接与查询字符串中使用。',
      },
      {
        question: '编码器会改变普通字母与数字吗？',
        answer:
          '不会。普通字母、数字与大多数标点会原样通过。只有保留字符与（可选的）非 ASCII 符号会被转换。',
      },
      {
        question: '为什么解码后的文本会出现乱码？',
        answer:
          '源文本可能是用不同的字符集编码的，或者某个实体格式错误。请从原始转义文本重新解码，并检查页面是否声明了 UTF-8。',
      },
      {
        question: '可以用这个工具编码整个 HTML 文档吗？',
        answer:
          '可以。你可以粘贴完整文档并编码，但结果是用于显示为代码示例，而不是保存为可用的网页。',
      },
      {
        question: '我粘贴的 HTML 会发送到服务器吗？',
        answer:
          '不会。编码与解码完全在浏览器内进行，因此你的代码与文本永不离开设备。',
      },
      {
        question: '与号字符的 HTML 实体是什么？',
        answer:
          '与号本身是 &amp; 或 &#38;。请始终先编码字面意义的 &，因为未编码的与号可能让浏览器误读后面的实体。',
      },
    ],
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
    instructions: [
      {
        title: '选择转换方向',
        description:
          '选择“JSON → CSV”或“CSV → JSON”，并选择逗号（,）、分号（;）或制表符（TSV）作为分隔符。',
      },
      {
        title: '粘贴 JSON 或 CSV 数据',
        description:
          '将数据插入左侧编辑器，或点击“加载示例”测试带引号的字段。',
      },
      {
        title: '检查列标题',
        description:
          '转换前请查看生成的标题。嵌套对象会变成 address.city 这样的点分隔列，缺失的键会留下空单元格。',
      },
      {
        title: '转换数据',
        description:
          '运行转换并检查预览。带引号的逗号、嵌入的引号与单元格内的换行会按 RFC 4180 的要求原样保留。',
      },
      {
        title: '复制或下载结果',
        description:
          '复制转换后的输出，或直接下载为 .csv 或 .json 文件。',
      },
      {
        title: '排查转换错误',
        description:
          '如果转换失败，请先验证 JSON 语法：检查尾随逗号、缺失的引号与不匹配的括号。对于 CSV，请确认你选择的分隔符与文件实际使用的分隔符一致。',
      },
    ],
    examples: [
      {
        title: '处理 CSV 值中的逗号',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation: '按 RFC 4180 自动为包含分隔符或双引号的字段加引号。',
      },
      {
        title: '把 CSV 转换回 JSON',
        input: 'id,name,role\n102,"Marcus, Jr.",Designer',
        output: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        explanation: '首行成为对象键名，每一行成为一个 JSON 对象。',
      },
    ],
    benefits: [
      '在一个工作区中双向转换 JSON ↔ CSV',
      '使用点表示法列标题扁平化嵌套 JSON 对象',
      '符合 RFC 4180 的解析器可保留带引号的逗号与嵌入的换行',
      '支持逗号、分号（欧洲 Excel）与制表符分隔符',
    ],
    useCases: [
      '将 REST API 的 JSON 列表导出到 Excel 或 Google 表格',
      '将电子表格导出的数据转换为 Web 应用的 JSON 种子文件',
      '为数据科学与 SQL 导入准备 TSV 数据集',
      '干净地检查分号分隔的 CSV 导出',
    ],
    faqs: [
      {
        question: 'JSON 转 CSV 如何处理带嵌套属性的对象？',
        answer:
          '嵌套对象会被扁平化为点分隔的列名（例如 address.city），数组会被序列化为紧凑的 JSON 字符串。',
      },
      {
        question: '如果不同的 JSON 对象键名略有不同怎么办？',
        answer:
          '转换器会扫描数组中的所有对象，构建列标题的并集，并在某个键缺失的地方留出空单元格。',
      },
      {
        question: '如果单元格中的引号内包含逗号，CSV 解析器会出错吗？',
        answer:
          '不会。状态机解析器会准确跟踪双引号单元格与转义的 "" 引号。',
      },
      {
        question: 'JSON 转 CSV 转换器是用来做什么的？',
        answer:
          '它把来自 API 与应用的 JSON 数据转换为可在 Excel 或 Google 表格中打开的 CSV 电子表格，也可以把 CSV 文件转换回 JSON，供代码与数据库使用。',
      },
      {
        question: 'JSON 转 CSV 转换器免费吗？',
        answer:
          '是的，JSON 转 CSV 转换器完全免费，无需注册，没有使用限制。所有转换都在浏览器本地运行。',
      },
      {
        question: '可以转换单个 JSON 对象而不是数组吗？',
        answer:
          '可以。单个对象会被视为一行，其键名作为列标题，因此仍可得到一个带一行数据的有效 CSV 文件。',
      },
      {
        question: 'JSON 对象中的数组如何转换为 CSV？',
        answer:
          '数组值会被序列化为单个单元格内的紧凑 JSON 字符串，因此数据会被保留，之后也可以解析回数组。',
      },
      {
        question: '应该为 CSV 文件选择哪种分隔符？',
        answer:
          '标准 CSV 请用逗号；欧洲 Excel 导出（逗号是小数分隔符）请用分号；数据工具中使用的 TSV 文件请用制表符。',
      },
      {
        question: '转换器能正确保留数字与布尔值吗？',
        answer:
          '可以。数字与布尔值在 CSV 中会写为纯值。转换回 JSON 时，看起来像数字或布尔值的内容会被解析为对应的 JSON 类型。',
      },
      {
        question: 'JSON 转 CSV 时空值或 null 会怎样？',
        answer:
          '空字符串、null 值与缺失的键在 CSV 中都会变成空单元格，这样各行会与列标题保持对齐。',
      },
      {
        question: '可以用这个工具把 CSV 转换回 JSON 吗？',
        answer:
          '可以。切换到“CSV 转 JSON”模式，粘贴 CSV 或 TSV 数据并选择分隔符。首行成为对象键名，之后的每一行成为一个 JSON 对象。',
      },
      {
        question: '为什么我的 CSV 在 Excel 中打开后所有数据都在一列？',
        answer:
          'Excel 可能期望的分隔符与文件实际使用的不同。请用逗号分隔符重新导出，或在欧洲区域设置下使用分号选项。',
      },
      {
        question: 'JSON 转 CSV 转换器能处理大文件吗？',
        answer:
          '可以，在浏览器内存限制内。转换在本地运行，因此超大数据集可能需要几秒钟，但你的数据永不上传到服务器。',
      },
      {
        question: '我的 JSON 或 CSV 数据会发送到服务器吗？',
        answer:
          '不会。转换完全在浏览器标签页内进行，因此你的数据会保留在设备上，关闭标签页后即被清除。',
      },
      {
        question: '什么是 RFC 4180？它对 CSV 为什么重要？',
        answer:
          'RFC 4180 是 CSV 文件的标准格式。它规定了含逗号、引号或换行的字段必须用双引号包裹，这样电子表格应用才能正确读取文件。',
      },
      {
        question: '可以把 TSV 文件转换为 JSON 吗？',
        answer:
          '可以。在“CSV 转 JSON”模式下选择制表符（TSV）分隔符并粘贴制表符分隔的数据。制表符在数据导出中很常见，用法与逗号相同。',
      },
      {
        question: '为什么我的 JSON 转 CSV 转换失败了？',
        answer:
          '最常见的原因是 JSON 无效，例如尾随逗号或缺失引号，或者粘贴的 JSON 对象不是对象数组。请修正语法后重试。',
      },
      {
        question: '如何把 API 的 JSON 数据导出到 Excel？',
        answer:
          '从 API 响应中复制 JSON 数组，粘贴到这里，转换为 CSV 并下载文件。下载的 CSV 可以直接在 Excel 中打开，或导入 Google 表格。',
      },
      {
        question: '转换器会保留我原始 JSON 键名的顺序吗？',
        answer:
          '列顺序遵循键名首次出现的顺序。第一个对象决定初始顺序，后面对象的新键会被追加。',
      },
      {
        question: '可以下载转换后的文件而不复制吗？',
        answer:
          '可以。使用下载按钮将结果保存为设备上的 .csv 或 .json 文件，可在电子表格中打开或导入应用。',
      },
    ],
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
    instructions: [
      {
        title: '查看或复制当前 Unix 时间',
        description:
          '使用顶部实时跳动的计数器，获取当前以秒为单位的 Unix 纪元时间。',
      },
      {
        title: '转换 Unix 时间戳 → 人类可读日期',
        description:
          '输入任意数字纪元时间；自动模式会自动检测秒与毫秒，或强制指定单位。',
      },
      {
        title: '查看 ISO、UTC 与本地格式',
        description:
          '并排比较 ISO 8601、UTC、RFC 2822 与本地时间输出，以及“2 小时前”这样的相对时间，选择你需要的格式。',
      },
      {
        title: '转换本地日期与时间 → Unix 时间戳',
        description:
          '在下方选择日期与时间，即可获得准确的秒、毫秒与 ISO 8601 输出。',
      },
      {
        title: '复制你需要的时间戳',
        description:
          '为 API 与数据库复制秒值，为 JavaScript Date 对象复制毫秒值，或为日志与 JSON 复制 ISO 字符串。',
      },
      {
        title: '排查看起来错误的日期',
        description:
          '如果日期落在 1970 年或 5000 年，你可能混淆了秒与毫秒。请将单位选择器从“自动”切换到正确的单位并重新转换。',
      },
    ],
    examples: [
      {
        title: '检测秒与毫秒',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z（秒）',
        explanation: '10 位数字会被解释为秒；13 位数字会被解释为毫秒。',
      },
      {
        title: '把日期转换为 Unix 时间戳',
        input: '2026-11-13 04:40:00 UTC',
        output: '1794544800（秒）/ 1794544800000（毫秒）',
        explanation: '使用下方日期选择器可获得同一时刻的秒与毫秒值。',
      },
    ],
    benefits: [
      '实时跳动的 Unix 时钟，与系统时间同步',
      '自动检测秒与毫秒，并可手动覆盖',
      '同时输出 ISO 8601、本地时间、RFC 2822 GMT 与相对时间',
      '包含双向的日期选择器转 Unix 秒/毫秒转换器',
    ],
    useCases: [
      '检查 JWT 的 iat / exp 声明与 API 的 created_at 时间戳',
      '调试 PostgreSQL 或 SQLite 数据库中的整数时间戳',
      '为缓存 TTL 或测试生成未来的纪元时间戳',
      '把日志文件中的纪元标记转换为本地可读时间',
    ],
    faqs: [
      {
        question: '自动模式如何区分秒与毫秒？',
        answer:
          '数值大小 ≥ 100,000,000,000（1e11，约 1973 年的毫秒值或 5138 年的秒值）会被视为毫秒；较小的数值会被视为秒。',
      },
      {
        question: 'Unix 时间受时区影响吗？',
        answer:
          '不受影响。Unix 纪元时间始终度量自 1970-01-01T00:00:00Z（UTC）以来经过的秒数，与本地时区无关。',
      },
      {
        question: '可以转换 1970 年之前的时间戳吗？',
        answer:
          '可以。输入负的 Unix 时间戳（例如 -86400 表示 1969 年 12 月 31 日）即可查看 1970 年之前的日期。',
      },
      {
        question: '什么是 Unix 时间戳？',
        answer:
          'Unix 时间戳也叫纪元时间，是自 1970 年 1 月 1 日 00:00:00 UTC 以来经过的秒数。它是计算机用单个数字存储日期的简单方式。',
      },
      {
        question: 'Unix 时间戳转换器免费吗？',
        answer:
          '是的，Unix 时间戳转换器完全免费，无需注册，没有使用限制。所有转换都在浏览器本地运行。',
      },
      {
        question: 'Unix 秒与毫秒有什么区别？',
        answer:
          'Unix 秒以整秒计数，自 1970 年以来通常为 10 位数字；毫秒以千分之一秒计数，通常为 13 位数字。JavaScript 的 Date 对象使用毫秒。',
      },
      {
        question: '现在的 Unix 时间戳是多少？',
        answer:
          '本工具顶部的实时计数器每秒跳动一次，显示当前以秒为单位的 Unix 时间。需要测试或记录时随时复制。',
      },
      {
        question: '如何把 Unix 时间戳转换为可读日期？',
        answer:
          '将纪元数字粘贴到转换器中，它会以 ISO 8601、UTC、RFC 2822 与本地时区显示对应的日期，并附带“3 天前”这样的相对时间。',
      },
      {
        question: '如何把日期转换为 Unix 时间戳？',
        answer:
          '使用下方日期与时间选择器，然后读取你所选日期在本地时区的准确 Unix 秒数与毫秒数。',
      },
      {
        question: '为什么我的时间戳显示为 1970 年的日期？',
        answer:
          '你可能在工具期望秒的时候输入了毫秒值，或输入了一个很小的数字。很小的数值意味着纪元起点 1970 年之后仅几秒。',
      },
      {
        question: '为什么我的时间戳显示为 5000 年的日期？',
        answer:
          '你可能在工具按毫秒处理时输入了秒值，或在秒字段中输入了毫秒。请将单位选择器切换到正确的单位并重新转换。',
      },
      {
        question: 'Unix 时间戳的 ISO 8601 格式是什么？',
        answer:
          'ISO 8601 把日期写为 YYYY-MM-DDTHH:MM:SS，例如 2026-11-13T04:40:00.000Z。末尾的 Z 表示时间为 UTC。',
      },
      {
        question: 'Unix 时间戳包含闰秒吗？',
        answer:
          '不包含。Unix 时间把每天都算作恰好 86,400 秒，并忽略闰秒，因此在很长时期内会与真实天文时间略有偏差。',
      },
      {
        question: '可以用 Unix 时间戳表示未来日期吗？',
        answer:
          '可以。在日期选择器中输入未来日期即可获得其 Unix 时间戳，便于设置缓存过期时间、定时任务与测试数据。',
      },
      {
        question: 'Unix 时间戳的最大值是多少？',
        answer:
          '在 32 位系统上，经典上限是 2,147,483,647 秒，即 2038 年 1 月 19 日。现代 64 位系统可处理大得多的数值，本工具也接受它们。',
      },
      {
        question: '如何用这个转换器检查 JWT 的过期时间戳？',
        answer:
          '从解码后的 JWT 中复制 exp 声明并粘贴到这里。转换器会显示令牌过期的准确 UTC 日期与时间。',
      },
      {
        question: 'Unix 时间戳转换器可以离线使用吗？',
        answer:
          '可以，页面加载后即可。转换只是浏览器中的简单算术，实时时钟读取系统时间，因此不需要网络连接。',
      },
      {
        question: '结果中的 UTC 与本地时间有什么区别？',
        answer:
          'UTC 是没有偏移的通用参考时间，本地时间会应用你的时区偏移。两者描述的是同一时刻，只是显示的时区不同。',
      },
      {
        question: '可以转换数据库或日志文件中的 Unix 时间戳吗？',
        answer:
          '可以。从数据库行或日志行复制整数时间戳并粘贴到这里，即可看到人类可读的日期，调试会快得多。',
      },
      {
        question: '我的时间戳数据会发送到服务器吗？',
        answer:
          '不会。转换完全在浏览器内进行，因此你输入的时间戳与日期永不离开设备。',
      },
    ],
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
    instructions: [
      {
        title: '粘贴 SQL 查询',
        description:
          '将任意 SELECT、INSERT、UPDATE、DELETE 或 DDL 查询插入“原始 SQL 查询”，包括多行或单行语句。',
      },
      {
        title: '选择美化或压缩模式',
        description:
          '选择“美化”将查询展开为易读的缩进子句，或选择“压缩”将其折叠为一行，用于日志与代码。',
      },
      {
        title: '设置关键字大小写与缩进',
        description:
          '选择大写或小写 SQL 关键字，并选择 2 空格或 4 空格缩进，以符合团队风格指南。',
      },
      {
        title: '查看格式化后的输出',
        description:
          '检查子句换行、JOIN 与子查询是否按预期对齐，字符串与注释是否未被改动。',
      },
      {
        title: '复制或复用格式化后的 SQL',
        description:
          '使用“复制 SQL”将标准化后的查询传回编辑器、迁移文件或拉取请求。',
      },
      {
        title: '修复格式化问题',
        description:
          '如果输出看起来不对，请检查输入中是否存在不平衡的引号或缺失的分号，然后重新粘贴并格式化。',
      },
    ],
    examples: [
      {
        title: '格式化多表 JOIN 查询',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: '将主要 SQL 子句拆分到各自的行，并规范关键字大小写。',
      },
      {
        title: '把查询压缩为一行',
        input: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        output: 'SELECT u.id, count(o.id) FROM users u LEFT JOIN orders o ON o.user_id = u.id WHERE u.active = 1;',
        explanation: '压缩模式会去掉多余空白并保留字符串字面量，适合嵌入代码或日志。',
      },
    ],
    benefits: [
      '保留单引号字符串字面量与 SQL 注释，原样不动',
      '支持 LEFT OUTER JOIN、GROUP BY 与 ORDER BY 等多词子句',
      '在美化与压缩模式之间轻松切换',
      '在本地运行，专有的表名与架构名保持私密',
    ],
    useCases: [
      '清理 ORM 生成的 SQL 日志以便进行性能调试',
      '在拉取请求评审前标准化 SQL 脚本',
      '把多行查询压缩为单行字符串，用于 CLI 脚本',
      '统一团队 SQL 风格指南中的关键字大小写',
    ],
    faqs: [
      {
        question: 'SQL 格式化工具会改变表名或引号内的文本吗？',
        answer:
          '不会。分词器会隔离字符串字面量与注释，因此大写/小写关键字格式化只应用于已识别的 SQL 关键字。',
      },
      {
        question: '支持哪些 SQL 方言？',
        answer:
          '支持标准 ANSI SQL 子句（PostgreSQL、MySQL、SQLite、SQL Server），包括 SELECT、JOIN、WHERE、GROUP BY、HAVING、ORDER BY、LIMIT、INSERT、UPDATE 与 DELETE。',
      },
      {
        question: '可以把格式化后的查询重新压缩为一行吗？',
        answer:
          '可以。将模式切换到“压缩”，即可去掉注释并安全地折叠多余空白。',
      },
      {
        question: 'SQL 格式化工具免费吗？',
        answer:
          '是的，SQL 格式化工具完全免费，无需注册，完全在浏览器中运行。',
      },
      {
        question: 'SQL 格式化工具会把我的查询发送到服务器吗？',
        answer:
          '不会。所有格式化都在浏览器本地进行，因此查询中的表名、架构详情与数据值永不离开设备。',
      },
      {
        question: '可以格式化带子查询与 CTE 的 SQL 吗？',
        answer:
          '可以。嵌套的 SELECT 语句与公用表表达式（WITH ... AS）会以各自的缩进级别格式化，结构保持易读。',
      },
      {
        question: 'SQL 格式化工具能处理 INSERT、UPDATE 与 DELETE 语句吗？',
        answer:
          '可以。INSERT、UPDATE 与 DELETE 语句会与 SELECT 查询一起格式化，其子句会被拆分到各自的行。',
      },
      {
        question: '可以格式化 CREATE TABLE 这样的 DDL 语句吗？',
        answer:
          '可以。CREATE TABLE、ALTER TABLE 与 DROP TABLE 等 DDL 语句可以粘贴进来，并用相同的关键字大小写与缩进规则格式化。',
      },
      {
        question: 'SQL 格式化工具提供哪些缩进选项？',
        answer:
          '美化后的查询可以选择 2 空格或 4 空格缩进，让输出符合你的编辑器或团队风格指南。',
      },
      {
        question: '格式化会改变 SQL 查询的作用吗？',
        answer:
          '不会。格式化只改变空白与关键字大小写，不会添加、删除或重新排列查询逻辑的任何部分。',
      },
      {
        question: '可以一次格式化多个 SQL 查询吗？',
        answer:
          '可以。你可以粘贴多个用分号分隔的语句，一次格式化完成。',
      },
      {
        question: 'SQL 格式化工具支持 MySQL、PostgreSQL 与 SQL Server 语法吗？',
        answer:
          '支持。它处理 MySQL、PostgreSQL、SQLite 与 SQL Server 使用的标准 ANSI SQL，包括它们常见的子句关键字。',
      },
      {
        question: '格式化时 SQL 中的注释会被保留吗？',
        answer:
          '会。单行与块注释会被分词器保留，不过压缩模式会去掉注释以产生最小的输出。',
      },
      {
        question: '如果我的 SQL 有语法错误会怎样？',
        answer:
          '格式化工具仍会尽力处理文本，因为它基于词法单元而非执行查询，但你应在数据库中运行 SQL 之前修正错误。',
      },
      {
        question: '可以压缩 SQL 以便在应用代码或日志中使用吗？',
        answer:
          '可以。压缩模式会把查询折叠为一行，同时保留字符串字面量，非常适合嵌入代码或紧凑记录日志。',
      },
      {
        question: 'SQL 格式化工具支持窗口函数吗？',
        answer:
          '支持。ROW_NUMBER() OVER (PARTITION BY ...) 等窗口函数会作为 SELECT 列表的一部分格式化，其 OVER 子句保持完整。',
      },
      {
        question: '我可以格式化的 SQL 有大小限制吗？',
        answer:
          '本工具没有固定的字符限制，因为它在浏览器中运行，不过非常长的查询在较慢的设备上可能需要一点时间。',
      },
      {
        question: '可以在手机上使用 SQL 格式化工具吗？',
        answer:
          '可以。它适用于任何现代移动浏览器，因此可以在手机或平板上粘贴并格式化 SQL，无需安装任何东西。',
      },
      {
        question: 'SQL 格式化工具会保留字符串字面量内的换行吗？',
        answer:
          '会。单引号字符串字面量内的文本会原样保留，因此多行字符串会保持原来的换行。',
      },
      {
        question: '如何用 SQL 格式化工具统一团队的关键字大小写？',
        answer:
          '先约定一种大小写风格，例如大写关键字，并在提交到仓库之前，用该设置对每个查询运行格式化工具。',
      },
    ],
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
    instructions: [
      {
        title: '选择压缩或美化',
        description:
          '选择“压缩 CSS”以减小生产环境的文件体积，或选择“美化 CSS”恢复压缩样式表的缩进。',
      },
      {
        title: '粘贴样式表',
        description:
          '在“输入 CSS”中输入 CSS 规则、自定义属性或 @media 代码块，包括完整样式表或单个片段。',
      },
      {
        title: '运行工具并检查统计信息',
        description:
          '输出会随输入实时更新；在压缩模式下，请检查准确的输入字节数、输出字节数与节省百分比。',
      },
      {
        title: '仔细检查输出',
        description:
          '确认 @media 代码块、引用字符串与 url(...) 值完整保留，并且嵌套规则在美化模式下正确缩进。',
      },
      {
        title: '复制或下载 CSS',
        description:
          '点击“复制 CSS”，将结果粘贴到样式表、内联 <style> 代码块或部署构建步骤中。',
      },
      {
        title: '修复扁平或损坏的输出',
        description:
          '如果美化后的输出看起来扁平或规则合并在一起，请检查输入中是否缺少右花括号，补上后再重试。',
      },
    ],
    examples: [
      {
        title: '压缩卡片规则',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: '删除换行、标点周围的空格与代码块内的最后一个分号。',
      },
      {
        title: '美化压缩后的 CSS',
        input: '.card{padding:16px;border:1px solid #e2e8f0}',
        output: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        explanation: '把压缩的规则展开为带缩进的易读代码块，便于调试。',
      },
    ],
    benefits: [
      '分词器会保留引用字符串（例如 content: "..." 或 url(...)）',
      '安全地删除 /* ... */ 注释与不必要的空白',
      '显示准确的输入字节数、输出字节数与节省百分比',
      '包含美化模式，可检查第三方的压缩 CSS',
    ],
    useCases: [
      '压缩 HTML 邮件与着陆页的内联 <style> 片段',
      '在视觉调试期间解压缩生产环境的 CSS 包',
      '在部署前检查样式表的体积节省',
      '清理旧样式表中的间距不一致问题',
    ],
    faqs: [
      {
        question: 'CSS 压缩会破坏 content: "..." 字符串内的空格吗？',
        answer:
          '不会。单引号与双引号字符串字面量会被分词器原样保留。',
      },
      {
        question: '为什么压缩会删除“}”前的最后一个分号？',
        answer:
          '在 CSS 语法中，右花括号前的最后一个声明不需要尾随分号，每个规则块可节省 1 个字节。',
      },
      {
        question: '美化模式支持嵌套的 @media 代码块吗？',
        answer:
          '支持。花括号深度会在 @media 与 @supports 代码块之间跟踪，因此内部规则会正确缩进。',
      },
      {
        question: 'CSS 压缩工具免费吗？',
        answer:
          '是的，CSS 压缩工具完全免费，无需注册，完全在浏览器中运行。',
      },
      {
        question: 'CSS 压缩工具会把我的样式表上传到任何地方吗？',
        answer:
          '不会。所有压缩与美化都在浏览器本地进行，因此你的 CSS 永不离开设备。',
      },
      {
        question: '压缩后我的 CSS 会小多少？',
        answer:
          '这取决于样式表中包含多少注释与多余空格；工具会显示你输入的准确字节数与节省百分比。',
      },
      {
        question: 'CSS 压缩会删除 @media 查询吗？',
        answer:
          '不会。@media 查询及其条件会被原样保留，因为删除它们会改变页面对屏幕尺寸的响应方式。',
      },
      {
        question: '可以压缩使用自定义属性（变量）的 CSS 吗？',
        answer:
          '可以。--brand-color 等自定义属性及其 var() 引用会被视为普通声明并完整保留。',
      },
      {
        question: 'CSS 压缩工具会保留 url(...) 与 content 字符串吗？',
        answer:
          '会。url(...) 与 content 属性内的引用字符串会被原样保留，因此图片路径与生成文本保持正确。',
      },
      {
        question: '压缩后的 CSS 在所有浏览器中还能正常工作吗？',
        answer:
          '可以。压缩只删除注释与不必要的空白，而浏览器本来就会忽略这些内容，因此渲染结果完全相同。',
      },
      {
        question: '可以美化生产环境的 CSS 包吗？',
        answer:
          '可以。将任意压缩样式表粘贴到美化模式，即可展开为带缩进的易读规则，便于调试。',
      },
      {
        question: 'CSS 压缩工具能处理 @keyframes 与 @font-face 吗？',
        answer:
          '可以。@keyframes、@font-face 与 @import 等 at 规则会被保留，其内部代码块在美化模式下会正确缩进。',
      },
      {
        question: 'CSS 压缩工具中的压缩与美化有什么区别？',
        answer:
          '压缩通过删除注释与空白来缩小 CSS 以便用于生产环境，而美化把压缩后的 CSS 展开为易读的带缩进规则以便编辑与调试。',
      },
      {
        question: '可以一次压缩多个样式表吗？',
        answer:
          '可以。你可以把多个样式表一起粘贴到一个输入框中，不过分开管理相关文件会让输出更易处理。',
      },
      {
        question: 'CSS 压缩工具会删除未使用的 CSS 规则吗？',
        answer:
          '不会。它只删除注释与空白，不会分析 HTML 使用了哪些选择器，因此未使用的规则会保留在输出中。',
      },
      {
        question: 'CSS 压缩工具显示的节省字节百分比准确吗？',
        answer:
          '准确。它是根据输入与输出的实际字节数计算的，因此百分比反映的是你真实的节省。',
      },
      {
        question: 'CSS 压缩工具可以用于内联 <style> 片段吗？',
        answer:
          '可以。小片段与完整样式表的压缩方式相同，这对带内联样式的 HTML 邮件与着陆页很有用。',
      },
      {
        question: 'CSS 压缩工具支持网格与嵌套等现代 CSS 吗？',
        answer:
          '支持。网格与弹性盒子等现代属性会原样通过，嵌套规则在美化模式下会按花括号深度缩进。',
      },
      {
        question: '如果我的 CSS 有语法错误会怎样？',
        answer:
          '工具仍会处理文本，但缺失的花括号或未闭合的字符串可能让输出混乱，因此在为生产环境压缩之前请修正语法错误。',
      },
      {
        question: '可以在手机上压缩 CSS 吗？',
        answer:
          '可以。CSS 压缩工具适用于任何现代移动浏览器，因此可以粘贴并压缩样式表，无需安装任何东西。',
      },
    ],
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
    instructions: [
      {
        title: '选择压缩 JS 或美化 JS',
        description:
          '选择“压缩 JS”删除注释与空白以获得紧凑输出，或选择“美化 JS”（2 或 4 空格）恢复可读的缩进。',
      },
      {
        title: '粘贴代码片段',
        description:
          '将 JavaScript 或 TypeScript 代码插入左侧编辑器，从单个函数到完整脚本块都可以。',
      },
      {
        title: '为美化模式设置缩进',
        description:
          '选择 2 空格或 4 空格缩进，让美化后的代码符合你的编辑器或项目风格。',
      },
      {
        title: '查看节省的字节数与输出',
        description:
          '在压缩模式下验证字节减少量，并扫描输出，确认字符串、模板字面量与正则表达式模式完整无损。',
      },
      {
        title: '复制处理后的代码',
        description:
          '使用复制按钮，将压缩或美化后的代码移入编辑器、书签工具或内联脚本。',
      },
      {
        title: '修复压缩问题',
        description:
          '如果压缩后的代码行为异常，请先给输入添加缺失的分号，因为删除空白后自动分号插入可能产生歧义。',
      },
    ],
    examples: [
      {
        title: '删除注释与空白',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: '删除注释与花括号周围的空白，不触及逻辑。',
      },
      {
        title: '美化紧凑的代码',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation: '把单行代码展开为带缩进的易读代码块，便于调试。',
      },
    ],
    benefits: [
      '词法分词器可保护单引号、双引号与反引号模板字符串',
      '在压缩模式下删除 // 单行注释与 /* */ 块注释',
      '报告实时的字节减少百分比',
      '快速的纯浏览器执行，代码绝不对外发送',
    ],
    useCases: [
      '准备紧凑的内联脚本或书签工具',
      '解包压缩的单行代码片段以便阅读',
      '在分享代码示例前删除开发者注释',
      '快速重新缩进粘贴的 JS 函数',
    ],
    faqs: [
      {
        question: '这个工具会像 Terser 或 esbuild 那样重命名变量吗？',
        answer:
          '不会。它只进行安全的空白与注释压缩，不重命名标识符，也不改变 AST 语义，因此输出易于检查。',
      },
      {
        question: '包含“//”的字符串字面量（例如 URL）安全吗？',
        answer:
          '安全。引用字符串与模板字面量会在注释检测之前被分词，因此引号内的 URL 绝不会被当作注释。',
      },
      {
        question: '压缩多语句 JS 时应该使用分号吗？',
        answer:
          '建议在压缩任何 JavaScript 代码片段之前使用标准分号，以避免自动分号插入（ASI）带来的歧义。',
      },
      {
        question: 'JavaScript 压缩工具免费吗？',
        answer:
          '是的，JavaScript 压缩工具完全免费，无需注册，完全在浏览器中运行。',
      },
      {
        question: 'JavaScript 压缩工具会把我的代码上传到服务器吗？',
        answer:
          '不会。所有压缩与格式化都在浏览器本地进行，因此你的代码永不离开设备。',
      },
      {
        question: 'JavaScript 压缩工具支持 TypeScript 代码吗？',
        answer:
          '支持。TypeScript 代码片段可以粘贴进来并以同样方式压缩或美化，因为分词器可处理标准 JS 与 TS 语法。',
      },
      {
        question: '压缩会破坏我的 JavaScript 吗？',
        answer:
          '只要代码使用标准分号就不会。只删除注释与多余空白，因此逻辑完全相同。',
      },
      {
        question: 'JavaScript 压缩工具会删除 console.log 语句吗？',
        answer:
          '不会。它只删除注释与空白，因此 console.log 调用与其他语句会保留在输出中。',
      },
      {
        question: '可以美化生产环境包中的压缩代码吗？',
        answer:
          '可以。将紧凑的单行代码粘贴到美化模式，即可重新缩进为易读的代码行，便于调试。',
      },
      {
        question: 'JavaScript 压缩工具能处理带 ${} 表达式的模板字面量吗？',
        answer:
          '可以。反引号模板字面量（包括 ${} 插值）会被分词为字符串并原样保留。',
      },
      {
        question: 'JavaScript 压缩工具中的压缩与美化有什么区别？',
        answer:
          '压缩会删除注释与空白以缩小代码，便于内联使用；美化会把紧凑代码重新缩进为易读的代码行，便于编辑。',
      },
      {
        question: '可以压缩带箭头函数与类的 ES6 代码吗？',
        answer:
          '可以。箭头函数、类、解构与其他现代 ES6 语法都会由分词器处理，不会改变代码。',
      },
      {
        question: 'JavaScript 压缩工具支持 JSX 或 React 代码吗？',
        answer:
          'JSX 不受专门支持，因为 JSX 中的尖括号可能被分词器误读。请将它用于纯 JavaScript 或 TypeScript，JSX 请使用专门的格式化工具。',
      },
      {
        question: '压缩后我的 JavaScript 会小多少？',
        answer:
          '这取决于代码片段中有多少注释与换行；工具会显示你代码片段的准确字节数与节省百分比。',
      },
      {
        question: '可以一次压缩多个 JavaScript 文件吗？',
        answer:
          '本工具一次处理一个代码片段，因此请分别粘贴每个文件。对于整个项目，请改用 esbuild 或 Terser 等打包工具。',
      },
      {
        question: 'JavaScript 压缩工具会保留正则表达式吗？',
        answer:
          '会。正则表达式字面量会被分词器识别并完整保留，包括模式内的 // 字符。',
      },
      {
        question: '如果我的 JavaScript 有语法错误会怎样？',
        answer:
          '工具仍会处理文本，但不平衡的花括号或未闭合的字符串可能产生奇怪的输出，因此压缩前请修正语法错误。',
      },
      {
        question: 'JavaScript 压缩工具可以用于书签工具吗？',
        answer:
          '可以。压缩模式非常适合书签工具，因为它会把代码片段折叠为紧凑的单行，可粘贴到书签 URL 中。',
      },
      {
        question: '压缩后的输出可以安全粘贴到 HTML 的 script 标签中吗？',
        answer:
          '一般可以，但请避免字符串中出现字面意义的“</script>”序列，因为浏览器会把它当作脚本块的结束。',
      },
      {
        question: '可以在手机上格式化 JavaScript 吗？',
        answer:
          '可以。JavaScript 压缩工具适用于任何现代移动浏览器，因此可以粘贴并格式化代码，无需安装任何东西。',
      },
    ],
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
    instructions: [
      {
        title: '输入 5 字段 cron 表达式或选择预设',
        description:
          '输入任意 cron 表达式，例如 `0 9 * * 1-5`，或点击常用计划预设按钮，从已知模式开始。',
      },
      {
        title: '检查通俗英文摘要与字段分解',
        description:
          '在信任该计划之前，验证分、时、日、月与星期字段是否符合你的意图。',
      },
      {
        title: '验证接下来的 8 次运行时间',
        description:
          '查看计算出的即将到来的本地执行时间戳，确认任务会在你期望的时间运行。',
      },
      {
        title: '用步进、范围与列表调整字段',
        description:
          '使用 */15 这样的步进值、1-5 这样的范围或 1,15 这样的列表微调计划，然后重新检查摘要与运行时间。',
      },
      {
        title: '复制表达式供调度器使用',
        description:
          '将验证后的表达式复制到 crontab、GitHub Actions 工作流或 Cloudflare Worker 的 cron 触发器中。',
      },
      {
        title: '注意日与星期的区别',
        description:
          '如果日字段与星期字段都受限，标准 cron 会在任一条件匹配时运行。如果只想让一个条件生效，请在另一个字段中使用 *。',
      },
    ],
    examples: [
      {
        title: '工作日上午任务',
        input: '0 9 * * 1-5',
        output: '每天 09:00，在星期 1-5（周一至周五）运行。',
        explanation: '每周一至周五上午 09:00 运行。',
      },
      {
        title: '每 15 分钟运行一次的任务',
        input: '*/15 * * * *',
        output: '每 15 分钟运行一次。',
        explanation: '在每小时的 :00、:15、:30 与 :45 运行。',
      },
    ],
    benefits: [
      '支持通配符（*）、步进（*/5）、范围（1-5）、列表（1,15）与名称（MON-FRI）',
      '计算接下来的 8 个具体执行时间戳（本地时区）',
      '立即标记超范围的值或缺失的字段',
      '包含常用间隔的一键预设',
    ],
    useCases: [
      '验证 GitHub Actions 的 schedule.cron 与 Cloudflare Workers 的 Cron 触发器',
      '调试 Linux crontab 的备份或清理计划',
      '复核星期（0–6）与日期（1–31）的逻辑',
      '为运维手册记录周期性任务计划',
    ],
    faqs: [
      {
        question: '这个解析器支持带秒的 6 字段 cron 表达式吗？',
        answer:
          '本工具解析标准的 5 字段 Unix crontab 表达式（分、时、日、月、星期），Linux cron、GitHub Actions 与 Cloudflare Workers 都使用这种格式。',
      },
      {
        question: '如果日字段与星期字段都不是通配符，会怎样？',
        answer:
          '遵循标准 Vixie/Unix cron 行为，当两个日期字段都受限时，日或星期任一匹配都会触发运行。',
      },
      {
        question: '支持 MON–FRI 与 JAN–DEC 名称吗？',
        answer:
          '支持。标准的 3 字母英文月份与星期缩写都受支持，星期日用数字 0 或 7 都可以。',
      },
      {
        question: 'Cron 表达式解析工具免费吗？',
        answer:
          '是的，Cron 表达式解析工具完全免费，无需注册，完全在浏览器中运行。',
      },
      {
        question: '什么是 cron 表达式？',
        answer:
          'cron 表达式是一种紧凑的 5 字段计划字符串，告诉系统何时自动运行任务，例如每小时一次或每个工作日上午 9 点。',
      },
      {
        question: 'cron 表达式中的 5 个字段是什么意思？',
        answer:
          '从左到右依次是：分（0-59）、时（0-23）、日（1-31）、月（1-12）与星期（0-7，其中 0 与 7 都表示星期日）。',
      },
      {
        question: '如何让 cron 任务每 5 分钟运行一次？',
        answer:
          '在分字段中使用步进语法：*/5 * * * * 会每 5 分钟运行一次，分别在 :00、:05、:10 等时间。',
      },
      {
        question: '如何安排工作日上午 9 点的 cron 任务？',
        answer:
          '使用 0 9 * * 1-5，表示 0 分、9 点、任意日期、任意月份，以及周一至周五。',
      },
      {
        question: 'cron 表达式中的 */15 是什么意思？',
        answer:
          '*/15 步进语法表示该字段每隔 15 个单位，因此分字段中的 */15 表示任务每 15 分钟运行一次。',
      },
      {
        question: 'cron 中星期日的 0 与 7 有什么区别？',
        answer:
          '没有区别；0 与 7 在星期字段中都表示星期日，可以任选其一。',
      },
      {
        question: '这个 Cron 表达式解析工具可以用于 GitHub Actions 计划吗？',
        answer:
          '可以。GitHub Actions 使用相同的 5 字段 cron 语法，因此可以在粘贴到工作流文件之前在这里验证计划。',
      },
      {
        question: 'Cron 表达式解析工具会考虑我的时区吗？',
        answer:
          '接下来的 8 次运行时间以你的本地浏览器时区显示，但请记住 cron 本身在服务器时区运行，因此也要检查服务器设置。',
      },
      {
        question: '如果输入无效的 cron 表达式会怎样？',
        answer:
          '解析器会立即标记超范围的值或缺失的字段，方便你在部署前修正表达式。',
      },
      {
        question: '可以把 cron 任务安排在每月最后一天吗？',
        answer:
          '标准的 5 字段 cron 没有最后一天的语法。常见的变通方法是安排在 28-31 日运行，并让任务自己检查是否为当月最后一天。',
      },
      {
        question: 'cron 表达式中的 L 与 W 是什么意思？',
        answer:
          'L（最后）与 W（工作日）是 Quartz 风格的扩展，不是标准 Unix cron 的一部分，因此本解析器不支持。',
      },
      {
        question: '如何让 cron 任务每天运行两次？',
        answer:
          '在时字段中列出两个小时，例如 0 6,18 * * * 表示任务每天上午 6 点与下午 6 点运行。',
      },
      {
        question: 'Cron 表达式解析工具支持秒或 6 字段表达式吗？',
        answer:
          '不支持。它只支持标准的 5 字段 Unix 表达式；需要秒的调度器使用不同的 6 字段格式。',
      },
      {
        question: '可以预览特定日期范围内的 cron 运行吗？',
        answer:
          '本工具会预览从现在起接下来的 8 次运行时间。它不提供自定义日期范围视图，但接下来的 8 次运行通常足以发现计划错误。',
      },
      {
        question: '为什么我的 cron 任务会在意外的日子运行？',
        answer:
          '最常见的原因是同时限制了日与星期，任一匹配都会触发运行。将其中一个设为 * 即可修复。',
      },
      {
        question: '可以使用 cron 预设来安排常用计划吗？',
        answer:
          '可以。本工具包含每小时、每天、每周与每月等常用间隔的一键预设，之后可以自定义。',
      },
    ],
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
    instructions: [
      {
        title: '选择或输入颜色',
        description:
          '使用颜色选择器，输入 3 位或 6 位 HEX 代码，或调整 R/G/B 或 H/S/L 各通道来设置前景色。',
      },
      {
        title: '查看 HEX、RGB 与 HSL 值',
        description:
          '检查三种表示法中同步的值，并确认实时色块与你想要的颜色一致。',
      },
      {
        title: '复制 CSS 颜色值',
        description:
          '点击“复制 HEX”“复制 RGB”或“复制 HSL”，获取可直接用于样式表或设计令牌的 CSS 字符串。',
      },
      {
        title: '选择背景色',
        description:
          '在下方选择背景色，与前景色进行对比度检查。',
      },
      {
        title: '查看 WCAG 对比度结果',
        description:
          '在发布配色之前，阅读准确的对比度与 AA 常规、AAA 常规、AA 大号文本的通过/失败状态。',
      },
      {
        title: '修复未通过的对比度组合',
        description:
          '如果组合未通过，请在 HSL 中降低明度以加深文本（或调亮背景），直到对比度达到常规文本至少 4.5:1 的要求。',
      },
    ],
    examples: [
      {
        title: '白色背景上的无障碍钴蓝色',
        input: '前景：#2563EB · 背景：#FFFFFF',
        output: 'RGB：rgb(37, 99, 235) · HSL：hsl(221, 83%, 53%) · 对比度：5.17:1（AA 通过）',
        explanation: '满足标准正文文本 4.5:1 的 WCAG AA 要求。',
      },
      {
        title: '白色与黑色的最大对比度',
        input: '前景：#000000 · 背景：#FFFFFF',
        output: '对比度：21:1（AAA 通过）',
        explanation: '黑白组合达到理论上的最大对比度，符合所有 WCAG 级别。',
      },
    ],
    benefits: [
      '实时双向同步 HEX、RGB 与 HSL 通道',
      '内置 WCAG 2.1 相对亮度对比度计算器',
      '测试 AA 常规（4.5:1）、AAA 常规（7.0:1）与 AA 大号（3.0:1）阈值',
      '一键复制有效的 CSS 颜色字符串',
    ],
    useCases: [
      '在实现界面时验证按钮与链接文本的对比度',
      '把品牌 HEX 色板转换为 HSL，用于 Tailwind 或 CSS 变量',
      '在浏览器内微调明度与饱和度',
      '在设计交接前审计无障碍合规性',
    ],
    faqs: [
      {
        question: 'WCAG 2.1 AA 正文本需要的对比度是多少？',
        answer:
          'WCAG 2.1 AA 要求常规文本至少 4.5:1，大号文本至少 3.0:1（18pt / 24px 常规，或 14pt / 18.66px 粗体）。',
      },
      {
        question: '可以输入像 #09f 这样的 3 位简写 HEX 代码吗？',
        answer:
          '可以。3 字符 HEX 代码会自动扩展为对应的 6 字符形式。',
      },
      {
        question: '为什么 HSL 比 RGB 更容易调整主题？',
        answer:
          'HSL 把色相、饱和度与明度分开，只需改变明度百分比即可加深或调亮品牌颜色。',
      },
      {
        question: '颜色转换器免费吗？',
        answer:
          '是的，颜色转换器完全免费，无需注册，完全在浏览器中运行。',
      },
      {
        question: '颜色转换器会存储我的颜色吗？',
        answer:
          '不会。转换与对比度检查都在浏览器本地进行，因此你的配色选择永不上传或存储。',
      },
      {
        question: '如何用颜色转换器把 HEX 转换为 RGB？',
        answer:
          '输入 HEX 代码（例如 #2563EB），RGB 值会立即出现，可复制为 CSS 的 rgb() 字符串。',
      },
      {
        question: '如何把 RGB 转换为 HSL？',
        answer:
          '输入 RGB 值或调整 R、G、B 通道，匹配的 HSL 值会在同一面板中实时更新。',
      },
      {
        question: 'HEX、RGB 与 HSL 有什么区别？',
        answer:
          'HEX 是颜色的紧凑代码，RGB 用红、绿、蓝的量定义颜色，HSL 用色相、饱和度与明度定义颜色。它们用不同的表示法描述同一种颜色。',
      },
      {
        question: 'WCAG AAA 需要的对比度是多少？',
        answer:
          'WCAG AAA 要求常规文本至少 7.0:1，大号文本至少 4.5:1，比 AA 级别更严格。',
      },
      {
        question: 'WCAG 对比度中的大号文本是指什么？',
        answer:
          '大号文本是指 18pt（24px）或更大的常规字重，或 14pt（18.66px）或更大的粗体字重。大号文本在 AA 级别下只需 3.0:1 的对比度。',
      },
      {
        question: '颜色转换器可以转换带透明度（alpha）的颜色吗？',
        answer:
          '本转换器处理不带 alpha 通道的纯色。如需透明度，请取转换后的 RGB 值并在 rgba() 函数中使用。',
      },
      {
        question: '颜色转换器支持带 alpha 的 8 位 HEX 代码吗？',
        answer:
          '不支持。本转换器接受标准的 3 位与 6 位 HEX 代码；如需透明度，请用 RGB 输出并在 rgba() 中添加 alpha 值。',
      },
      {
        question: '可以用颜色转换器从图片中取色吗？',
        answer:
          '不可以。本工具不从图片取样；请输入想要颜色的 HEX 值，或使用内置颜色选择器选择。',
      },
      {
        question: 'WCAG 对比度是如何计算的？',
        answer:
          '它根据 WCAG 2.1 规范定义的公式，由前景色与背景色的相对亮度计算得出。',
      },
      {
        question: '为什么我的品牌颜色在白色上未通过 AA 对比度？',
        answer:
          '浅色或中等色调的品牌颜色在白色上的对比度常低于 4.5:1 阈值。请加深颜色，或仅将其用于大号文本与装饰元素。',
      },
      {
        question: '可以从颜色转换器复制颜色作为 CSS 变量吗？',
        answer:
          '可以。复制 HEX、RGB 或 HSL 值并粘贴到 CSS 自定义属性中，例如 --brand: #2563EB，然后用 var(--brand) 引用它。',
      },
      {
        question: 'HSL 与 HSV 有什么区别？',
        answer:
          'HSL 用色相、饱和度与明度描述颜色，HSV 用色相、饱和度与明度值（亮度）描述颜色。HSL 通常更易于创建无障碍的浅色与深色主题变体。',
      },
      {
        question: '颜色转换器可以转换像“red”这样的命名 CSS 颜色吗？',
        answer:
          '请改为输入命名颜色的 HEX 值，例如 red 是 #FF0000。本工具接受 HEX、RGB 与 HSL 输入。',
      },
      {
        question: '如何找到品牌颜色的深色版本？',
        answer:
          '将颜色转换为 HSL，保持色相与饱和度不变，降低明度百分比，直到达到想要的色调。',
      },
      {
        question: '可以在手机上使用颜色转换器吗？',
        answer:
          '可以。颜色转换器适用于任何现代移动浏览器，因此可以转换颜色并检查对比度，无需安装任何东西。',
      },
    ],
  },
};
