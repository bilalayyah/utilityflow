import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the zh locale.
 * Translated from the per-component STRINGS_EN tables; mirrors the
 * structure of jaComponentStrings exactly (same top-level keys, same
 * nesting, same `tables` entries). Loaded only when the zh locale is
 * selected.
 */
export const zhComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "要转换大小写的文本",
      "placeholder": "输入或粘贴文本，然后点击下方的大小写转换按钮……",
      "copyResult": "复制结果"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "撰写清晰简洁的文案，符合各平台的字符数限制，避免在搜索结果或社交动态中被生硬截断。",
      "withSpaces": "含空格",
      "withoutSpaces": "不含空格",
      "words": "单词",
      "letters": "字母",
      "digits": "数字",
      "utf8Bytes": "UTF-8 字节",
      "copyText": "复制文本",
      "textToMeasure": "要测量字符数的文本",
      "placeholder": "输入或粘贴文本，查看精确的字符数、字节大小和各平台限制……",
      "whitespaceChars": "空白字符",
      "lines": "行",
      "platformLimitsTitle": "各平台与 SEO 字符数限制",
      "over": "超出",
      "left": "剩余",
      "platformLimits": [
        {
          "name": "SEO 元标题",
          "note": "建议的 Google 搜索结果标题长度"
        },
        {
          "name": "SEO 元描述",
          "note": "桌面端摘要的标准阈值"
        },
        {
          "name": "短信分段",
          "note": "一条 GSM-7 短信"
        },
        {
          "name": "X / Twitter 帖子",
          "note": "标准帖子长度"
        },
        {
          "name": "Instagram 标题预览",
          "note": "在“更多”折叠前可见的部分"
        },
        {
          "name": "LinkedIn 帖子",
          "note": "标准动态的最大长度"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "查找",
      "replaceWith": "替换为",
      "findPlaceholder": "要搜索的文本……",
      "replacePlaceholder": "替换后的文本……",
      "caseSensitive": "区分大小写",
      "wholeWordOnly": "仅整词",
      "useRegex": "使用正则表达式 (RegExp)",
      "regexError": "正则表达式错误：",
      "invalidRegex": "无效的正则表达式。",
      "sourceText": "源文本",
      "updatedOutput": "更新后的输出",
      "match": "个匹配",
      "matches": "个匹配",
      "replaced": "已替换",
      "sourcePlaceholder": "粘贴要查找和替换的文本……",
      "outputPlaceholder": "替换后的文本预览将显示在这里……",
      "copyResult": "复制结果"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "行前缀",
      "lineSuffix": "行后缀",
      "startNumber": "起始编号",
      "numberSeparator": "编号分隔符",
      "addLineNumbers": "添加行号",
      "zeroPad": "补零编号（01、02）",
      "skipEmptyLines": "跳过空行",
      "inputLines": "输入行",
      "formattedLines": "格式化后的行",
      "copyResult": "复制结果",
      "inputPlaceholder": "每行粘贴一个值或项目……",
      "outputPlaceholder": "编号或包裹后的行将显示在这里……"
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "数量",
      "unit": "单位",
      "unitLabels": {
        "paragraphs": "段落",
        "sentences": "句子",
        "words": "单词"
      },
      "startClassic": "以“Lorem ipsum”开头",
      "wrapHtml": "用 <p> 标签包裹",
      "words": "单词",
      "characters": "字符",
      "regenerate": "重新生成",
      "copyPlaceholder": "复制占位文本",
      "generatedText": "生成的占位文本"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow 发布说明\n\n欢迎使用 **Markdown 预览器**，一款快速的客户端编辑器，支持实时 *HTML* 导出。\n\n## 主要功能\n\n- 标题、列表和链接即时格式化\n- 安全的 HTML 转义，零远程上传\n- 一键复制和下载原始 HTML\n\n> 让文档贴近工作内容，发布前预览结构。\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\n在 [UtilityFlow](/tools/) 了解更多。",
      "renderedPreview": "已渲染预览",
      "rawHtml": "原始 HTML",
      "exportHtml": "导出 HTML",
      "copyHtml": "复制 HTML",
      "markdownSource": "Markdown 源码",
      "livePreview": "实时预览",
      "compiledHtml": "编译后的 HTML",
      "compiledHtmlAria": "编译后的 HTML 源码",
      "inputPlaceholder": "输入 Markdown（# 标题、**粗体**、- 列表、[链接](https://...)）……",
      "emptyPreview": "输入 Markdown 后将显示预览……"
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "清晰的技术写作尊重读者的时间。尽可能使用具体名词和主动动词，让复杂的说明易于理解。\n\n长句中塞满嵌套从句，会迫使读者重读段落。将密集的解释拆成更短的步骤，文档会更易浏览、更易应用。",
      "level": "级别：",
      "textToCheck": "要检查可读性的文本",
      "placeholder": "粘贴文章、随笔或着陆页文案，计算 Flesch 阅读易读度和年级水平得分……",
      "fleschEase": "Flesch 阅读易读度",
      "fleschKincaid": "Flesch-Kincaid 年级水平",
      "usGrade": "美国学校年级水平",
      "gunningFog": "Gunning Fog 指数",
      "yearsEducation": "受教育年限",
      "smog": "SMOG 指数",
      "polysyllable": "多音节词复杂度",
      "structuralBreakdown": "结构分析",
      "wordsSentences": "单词 / 句子",
      "avgSentenceLength": "平均句长",
      "words": "单词",
      "avgSyllablesPerWord": "平均每词音节数",
      "complexWords": "复杂单词（3 个以上音节）",
      "longWordsDetected": "检测到的长单词（3 个以上音节）",
      "noLongWords": "本段中未发现 3 个以上音节的单词。",
      "emptyState": "请在上方至少输入一句话，以查看可读性公式和结构比例。",
      "levels": [
        {
          "level": "非常简单",
          "audience": "5 年级（10–11 岁）"
        },
        {
          "level": "简单",
          "audience": "6 年级（11–12 岁）"
        },
        {
          "level": "较简单",
          "audience": "7 年级（12–13 岁）"
        },
        {
          "level": "标准",
          "audience": "8–9 年级（13–15 岁）"
        },
        {
          "level": "较难",
          "audience": "10–12 年级"
        },
        {
          "level": "困难",
          "audience": "大学水平"
        },
        {
          "level": "非常困难",
          "audience": "大学毕业 / 专业水平"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "区分大小写",
      "trimWhitespace": "去除空白",
      "removeEmptyLines": "删除空行",
      "sortAlphabetically": "按字母顺序排序",
      "originalLines": "原始行数",
      "lines": "行",
      "uniqueLines": "去重后行数",
      "unique": "去重后",
      "removed": "已删除",
      "inputPlaceholder": "每行粘贴一个项目……",
      "outputPlaceholder": "去重后的输出将显示在这里……"
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "区分大小写",
      "ignoreBlankLines": "忽略空行",
      "removeDuplicates": "删除重复项",
      "inputLines": "输入行",
      "sortedLines": "排序后的行",
      "copySorted": "复制排序结果",
      "inputPlaceholder": "每行输入一个项目……",
      "outputPlaceholder": "排序后的输出将显示在这里……",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "自然排序（1、2、10）"
        },
        {
          "id": "length-asc",
          "label": "最短在前"
        },
        {
          "id": "length-desc",
          "label": "最长在前"
        },
        {
          "id": "reverse-order",
          "label": "倒序"
        },
        {
          "id": "shuffle",
          "label": "随机打乱"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "忽略空白",
      "ignoreCase": "忽略大小写",
      "originalText": "原始文本",
      "modifiedText": "修改后文本",
      "originalPlaceholder": "粘贴原始文本……",
      "modifiedPlaceholder": "粘贴更新后的文本……",
      "lineComparison": "按行比较",
      "added": "已添加",
      "removed": "已删除",
      "unchanged": "未更改",
      "emptyState": "请在上方两个框中都输入文本，以比较行的添加和删除。"
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "第一行文本\n第二行文本\n第三行文本",
      "originalText": "原始文本",
      "reversedOutput": "反转后输出",
      "inputPlaceholder": "输入要反转的文本或行……",
      "outputPlaceholder": "反转后的文本将显示在这里……",
      "modes": [
        {
          "id": "characters",
          "label": "反转字符"
        },
        {
          "id": "words",
          "label": "反转单词顺序"
        },
        {
          "id": "each-word",
          "label": "反转每个单词"
        },
        {
          "id": "lines",
          "label": "反转行顺序"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "在线格式化 JSON 的 10 种最佳方法！\n咖啡与奶油：2026 年指南\n如何在 Cloudflare Pages 上搭建快速静态网站",
      "hyphen": "连字符（-）",
      "underscore": "下划线（_）",
      "forceLowercase": "强制小写",
      "stripStopWords": "去除常见停用词",
      "titlesLabel": "标题或短语（批量处理时每行一个）",
      "inputPlaceholder": "输入博客标题、产品名称或标题列表……",
      "generatedSlugs": "生成的 URL 别名",
      "copySlugs": "复制别名",
      "outputPlaceholder": "简洁的 URL 别名将显示在这里"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   第一行   带有   多余   空格。   \n\n   第二行   带有   制表符\t和   空隙。\n\n\n   第三行在这里。   ",
      "collapseSpaces": "合并多个空格",
      "trimEdges": "修剪行首行尾",
      "tabsToSpaces": "将制表符转换为空格",
      "lineBreaks": "换行：",
      "keepBreaks": "保留换行",
      "removeBlankLines": "删除空行",
      "replaceWithSpaces": "替换为空格",
      "removeAllBreaks": "删除所有换行",
      "inputText": "输入文本",
      "chars": "字符",
      "cleanedText": "清理后的文本",
      "removed": "已删除",
      "inputPlaceholder": "粘贴包含多余空格、制表符或空行的杂乱文本……",
      "outputPlaceholder": "清理后的输出将自动显示……"
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow 在浏览器内直接处理所有文本计算。无论是起草博客文章、打磨产品公告，还是对照严格的字数限制检查学术论文，即时计数都能帮助您清晰地组织信息。\n\n短句便于浏览。变换句长可以让较长的指南在桌面端和移动端都吸引读者。",
      "words": "单词",
      "characters": "字符",
      "noSpaces": "不含空格",
      "sentences": "句子",
      "paragraphs": "段落",
      "readingTime": "阅读时间",
      "downloadTxt": "下载 .txt",
      "copyText": "复制文本",
      "textToCount": "要计数的文本",
      "placeholder": "在此粘贴或输入文本，统计单词数、字符数、句子数和阅读时间……",
      "deliveryTimingLines": "朗读时间与行数",
      "speakingTime": "朗读时间（130 词/分钟）",
      "totalLines": "总行数",
      "avgWordLength": "平均词长",
      "chars": "字符",
      "mostFrequentWords": "最常用单词",
      "emptyKeywords": "请在上方输入文本，以查看最常重复的单词。"
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "技术 SEO 审计检查可抓取性、内部链接和页面速度。快速页面能提升用户参与度和移动搜索中的页面速度信号。内部链接连接相关指南，强化技术 SEO 结构。",
      "ngramLabels": {
        "1": "1 词",
        "2": "2 词短语",
        "3": "3 词短语"
      },
      "excludeStopWords": "排除常见停用词",
      "minLength": "最小长度：",
      "textForAnalysis": "要进行词频分析的文本",
      "placeholder": "粘贴文章文案、产品描述或笔记，统计重复词和关键词密度……",
      "totalWords": "总单词数：",
      "uniqueTerms": "独特词条：",
      "exportCsv": "导出 CSV",
      "copyCsv": "复制 CSV",
      "rank": "#",
      "termPhrase": "词条 / 短语",
      "count": "次数",
      "density": "密度",
      "emptyState": "请在上方输入文本，以查看单词数和关键词密度百分比。"
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "请输入有效的日历日期。",
      "errorDobAfterTarget": "出生日期不能晚于目标日期。",
      "dobLabel": "出生日期",
      "targetLabel": "计算年龄的日期",
      "exactAge": "精确周岁年龄",
      "yearsWord": "年",
      "monthsWord": "个月",
      "daysWord": "天",
      "nextBirthday": "下一个生日",
      "turning": "满",
      "inWord": "还有",
      "totalMonths": "总月数",
      "totalWeeks": "总周数",
      "totalDays": "总天数",
      "totalHours": "总小时数（约）",
      "monthsAbbr": "个月",
      "weeksAbbr": "周",
      "daysAbbr": "天",
      "hoursAbbr": "小时"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "体重过轻",
      "normalWeight": "体重正常",
      "overweight": "超重",
      "obesity": "肥胖",
      "errorHeightMetric": "请输入 50 厘米至 280 厘米之间的身高。",
      "errorWeightMetric": "请输入 15 千克至 500 千克之间的体重。",
      "errorHeightImperial": "请输入 2 英尺至 9 英尺之间的有效身高。",
      "errorWeightImperial": "请输入 30 磅至 1100 磅之间的体重。",
      "metricTab": "公制（厘米 / 千克）",
      "imperialTab": "英制（英尺、英寸 / 磅）",
      "heightCmLabel": "身高（厘米）",
      "weightKgLabel": "体重（千克）",
      "heightFtLabel": "身高（英尺）",
      "heightInLabel": "身高（英寸）",
      "weightLbsLabel": "体重（磅）",
      "bmiLabel": "身体质量指数（BMI）",
      "whoCategory": "WHO 分类",
      "healthyRange": "健康 BMI 体重范围（18.5–24.9）",
      "disclaimer": "BMI 是通用筛查指标，不能区分肌肉量和体脂。"
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "请输入 15 至 100 岁之间的年龄。",
      "errorHeightMetric": "请输入 100 厘米至 250 厘米之间的身高。",
      "errorWeightMetric": "请输入 30 千克至 350 千克之间的体重。",
      "errorHeightImperial": "请输入 3 英尺 4 英寸至 8 英尺 2 英寸之间的身高。",
      "errorWeightImperial": "请输入 66 磅至 770 磅之间的体重。",
      "metricTab": "公制（厘米 / 千克）",
      "imperialTab": "英制（英尺、英寸 / 磅）",
      "maleTab": "男性",
      "femaleTab": "女性",
      "ageLabel": "年龄（岁）",
      "heightCmLabel": "身高（厘米）",
      "weightKgLabel": "体重（千克）",
      "heightFtLabel": "身高（英尺）",
      "heightInLabel": "身高（英寸）",
      "weightLbsLabel": "体重（磅）",
      "activityLabel": "活动水平",
      "activitySedentary": "久坐不动（1.2×）",
      "activitySedentaryDetail": "办公室工作，几乎不运动",
      "activityLight": "轻度活动（1.375×）",
      "activityLightDetail": "每周 1–3 天轻度运动",
      "activityModerate": "中度活动（1.55×）",
      "activityModerateDetail": "每周 3–5 天中度运动",
      "activityVery": "非常活跃（1.725×）",
      "activityVeryDetail": "每周 6–7 天高强度运动",
      "activityExtra": "极度活跃（1.9×）",
      "activityExtraDetail": "体力劳动或每日两次训练",
      "maintenance": "维持热量（TDEE）",
      "mildLoss": "轻度减重（-0.25 千克/周）",
      "mildLossNote": "每日约 250 千卡缺口",
      "weightLoss": "减重（-0.5 千克/周）",
      "weightLossNote": "每日约 500 千卡缺口",
      "leanGain": "精益增重",
      "leanGainNote": "每日 +250 千卡盈余",
      "macroHeading": "维持热量参考宏量营养素分配（蛋白质 30% · 碳水化合物 40% · 脂肪 30%）",
      "protein": "蛋白质",
      "carbs": "碳水化合物",
      "fat": "膳食脂肪",
      "gramsPerDay": "克/天",
      "disclaimer": "采用 Mifflin-St Jeor 基础代谢率公式计算。个人能量需求因身体成分和健康状况而异；开始限制性饮食前，请咨询合格的医疗专业人员。"
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "初始存款不能为负。",
      "errorMonthly": "每月供款不能为负。",
      "errorRate": "年收益率必须在 0% 至 100% 之间。",
      "errorYears": "投资期限必须在 1 至 100 年之间。",
      "initialLabel": "初始本金（$）",
      "monthlyLabel": "每月追加（$）",
      "rateLabel": "年收益率（%）",
      "yearsLabel": "年数",
      "compoundingLabel": "复利频率",
      "dailyOption": "每日（365 次/年）",
      "monthlyOption": "每月（12 次/年）",
      "quarterlyOption": "每季度（4 次/年）",
      "annualOption": "每年（1 次/年）",
      "futureBalance": "未来余额",
      "totalContributed": "本金 + 存款总额",
      "totalInterest": "复利总额",
      "yearHeader": "年份",
      "totalContributedHeader": "累计投入",
      "cumulativeInterestHeader": "累计利息",
      "endingBalanceHeader": "期末余额",
      "yearPrefix": "第"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "请输入大于或等于 0 的金额。",
      "errorRate": "请输入大于 0 的正汇率。",
      "errorFee": "请输入 0% 至 50% 之间的兑换手续费。",
      "fetchErrorWithMessage": "无法获取外部汇率（{message}）。请在上方手动输入汇率。",
      "fetchErrorGeneric": "无法连接外部汇率 API。请在上方手动输入汇率。",
      "fetchErrorNoPair": "所选货币对未由参考 API 返回。",
      "currencyNames": {
        "USD": "美元",
        "EUR": "欧元",
        "GBP": "英镑",
        "JPY": "日元",
        "CAD": "加元",
        "AUD": "澳元",
        "CHF": "瑞士法郎",
        "INR": "印度卢比",
        "SGD": "新加坡元",
        "NZD": "新西兰元",
        "MXN": "墨西哥比索",
        "CNY": "人民币"
      },
      "rateSourceManualDefault": "手动输入汇率（离线默认值）",
      "rateSourceManual": "手动输入汇率",
      "rateSourceIdentity": "相同货币的基准汇率（1.0000）",
      "rateSourceEcb": "通过 Frankfurter API 获取的外部 ECB 参考汇率（日期：{date}）",
      "rateSourceInverted": "由先前汇率反推",
      "disclosureTitle": "汇率来源披露：",
      "disclosureBody": "实时市场汇率绝不会离线编造。请手动输入您的确切报价汇率，或点击",
      "disclosureBodyAfter": "从外部 Frankfurter API 请求参考汇率。",
      "activeRateSource": "当前汇率来源：",
      "amountLabel": "金额",
      "fromLabel": "源货币",
      "toLabel": "目标货币",
      "swapAria": "交换货币",
      "swapTitle": "交换货币并反转汇率",
      "rateLabel": "汇率",
      "feeLabel": "银行/卡外汇手续费（%）",
      "fetchButton": "获取 ECB 参考汇率",
      "fetchingButton": "正在获取 ECB 汇率……",
      "netConverted": "扣除手续费后的兑换金额",
      "grossBeforeFee": "扣除外汇手续费前的总额",
      "feeLabelShort": "手续费",
      "inverseRate": "反向汇率",
      "perOne": "每 1",
      "amountHeaderSuffix": "金额",
      "netHeaderPrefix": "净额",
      "netHeaderSuffix": "（按输入的汇率和手续费计算）"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "请选择有效的开始日期和结束日期。",
      "errorInvalidBase": "请输入有效的开始日期。",
      "errorNonNegative": "年、月、日请输入非负整数。",
      "differenceTab": "日期之差",
      "addSubtractTab": "加/减时间",
      "startLabel": "开始日期",
      "endLabel": "结束日期",
      "swapTitle": "交换日期",
      "swapAria": "交换开始日期和结束日期",
      "includeEnd": "包含结束日期（+1 个日历日）",
      "calendarDuration": "日历时长",
      "reversedRange": "（倒置区间）",
      "totalSpan": "总跨度：",
      "calendarDays": "个日历日",
      "weeksDays": "周和天",
      "weekdays": "工作日（周一至周五）",
      "weekendDays": "周末（周六至周日）",
      "totalHours": "总小时数",
      "yearsWord": "年",
      "monthsWord": "个月",
      "daysWord": "天",
      "weeksAbbr": "周",
      "daysAbbr": "天",
      "hoursAbbr": "小时",
      "referenceLabel": "基准日期",
      "operationLabel": "操作",
      "addOption": "加（+）",
      "subtractOption": "减（-）",
      "yearsLabel": "年",
      "monthsLabel": "月",
      "daysLabel": "日",
      "resultingDate": "结果日期",
      "isoPrefix": "ISO 8601："
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "原价不能为负。",
      "errorDiscount": "折扣必须在 0% 至 100% 之间。",
      "errorTax": "销售税必须在 0% 至 100% 之间。",
      "errorCost": "成本不能为负。",
      "errorSelling": "售价必须大于 0。",
      "discountTab": "折扣促销",
      "marginTab": "利润率与加价率",
      "originalPriceLabel": "原价（$）",
      "discountLabel": "折扣率（%）",
      "salesTaxLabel": "销售税（%）",
      "costLabel": "单件成本（$）",
      "sellingLabel": "售价（$）",
      "finalPrice": "最终价格",
      "beforeTax": "税前：",
      "youSave": "您节省",
      "taxAdded": "已加税金",
      "grossProfit": "毛利润",
      "profitMargin": "利润率",
      "profitDivSelling": "（利润 ÷ 售价）",
      "markup": "加价率",
      "profitDivCost": "（利润 ÷ 成本）"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "请输入大于 0 的贷款本金。",
      "errorRate": "请输入 0% 至 100% 之间的年利率。",
      "errorDuration": "贷款期限必须在 1 至 600 个月之间。",
      "principalLabel": "贷款本金（$）",
      "rateLabel": "年利率（% APR）",
      "termLabel": "贷款期限",
      "termUnitAria": "贷款期限单位",
      "yearsOption": "年",
      "monthsOption": "个月",
      "monthlyPayment": "月供（EMI）",
      "forPrefix": "共",
      "monthlyPayments": "期月供",
      "totalInterest": "利息总额",
      "ofTotalCost": "占总成本",
      "totalRepayment": "还款总额",
      "principalWord": "本金",
      "principalLabelShort": "本金",
      "interestLabelShort": "利息",
      "showSchedule": "显示还款计划表",
      "hideSchedule": "隐藏还款计划表",
      "monthHeader": "月份",
      "paymentHeader": "还款额",
      "principalHeader": "本金",
      "interestHeader": "利息",
      "balanceHeader": "余额"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "房价必须大于 0。",
      "errorDownPayment": "首付比例必须在 0% 至 99.9% 之间。",
      "errorRate": "利率必须在 0% 至 50% 之间。",
      "errorTerm": "贷款期限必须在 1 至 50 年之间。",
      "homePriceLabel": "房价（$）",
      "downPaymentLabel": "首付（%）",
      "rateLabel": "利率（% APR）",
      "termLabel": "贷款期限（年）",
      "yearsWord": "年",
      "taxLabel": "房产税（$/年）",
      "insuranceLabel": "房屋保险（$/年）",
      "hoaLabel": "业主协会费（$/月）",
      "estimatedMonthly": "预估月供",
      "loanAmount": "贷款金额",
      "downPayment": "首付",
      "lifetimeInterest": "整个贷款期利息总额",
      "breakdownHeading": "月供明细",
      "principalInterest": "本金与利息（P&I）",
      "propertyTaxes": "房产税",
      "homeownersInsurance": "房屋保险",
      "hoaDues": "业主协会费",
      "pmiLabel": "预估 PMI（首付低于 20% 时，年利率 0.5%）"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "请输入有效数字。",
      "errorTotalZero": "总数（Y）不能为 0。",
      "errorStartZero": "起始值不能为 0。",
      "heading1": "1. 求某数的百分之几",
      "heading2": "2. 部分占整体的百分比",
      "heading3": "3. 增长或减少的百分比",
      "whatIs": "求",
      "percentOf": "% 的",
      "isWhatPercentOf": "占",
      "fromWord": "从",
      "toWord": "到",
      "result": "结果：",
      "change": "变化：",
      "formula": "公式",
      "difference": "差值",
      "ariaPctX": "百分比 X",
      "ariaBaseY": "基数 Y",
      "ariaPartX": "部分值 X",
      "ariaWholeY": "整体值 Y",
      "ariaInitialA": "初始值 A",
      "ariaFinalB": "最终值 B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "薪酬金额不能为负。",
      "errorHours": "每周工作时间必须在 1 至 168 小时之间。",
      "errorWeeks": "每年周数必须在 1 至 52 周之间。",
      "errorTax": "预估税率必须在 0% 至 99% 之间。",
      "amountLabel": "薪酬金额（$）",
      "frequencyLabel": "发放频率",
      "hourlyOption": "按小时",
      "dailyOption": "按日",
      "weeklyOption": "按周",
      "biweeklyOption": "每两周",
      "monthlyOption": "按月",
      "annualOption": "按年",
      "hoursLabel": "每周工作小时数",
      "weeksLabel": "每年周数",
      "taxLabel": "预估税率（%）",
      "rowHourly": "时薪",
      "rowDaily": "日薪（每周 5 天）",
      "rowWeekly": "周薪",
      "rowBiweekly": "双周薪",
      "rowMonthly": "月薪",
      "rowAnnual": "年薪",
      "payPeriodHeader": "薪资周期",
      "grossPayHeader": "税前工资",
      "estNetPay": "预估税后工资",
      "taxWord": "税"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "请输入有效的开始时间和结束时间。",
      "errorBreakRange": "请输入 0 至 1,440 分钟之间的休息扣除时间。",
      "errorEndEarlier": "结束时间早于开始时间。如跨越午夜，请启用隔夜结转。",
      "errorBreakExceeds": "休息扣除时间超过总耗时。",
      "errorSumFields": "所有时长字段必须为非负数。",
      "betweenTab": "两个时刻之间的耗时",
      "sumTab": "累加工时",
      "startLabel": "开始时间",
      "endLabel": "结束时间",
      "breakLabel": "无薪休息（分钟）",
      "overnightLabel": "结束时间早于开始时间时视为次日（夜班）",
      "netDuration": "净时长",
      "overnightTag": "（夜班）",
      "decimalHours": "小时（十进制）",
      "totalMinutes": "总分钟数",
      "totalSeconds": "总秒数",
      "hoursAbbr": "小时",
      "minutesAbbr": "分钟",
      "secondsAbbr": "秒",
      "labelHeader": "名称",
      "hoursHeader": "小时",
      "minutesHeader": "分钟",
      "secondsHeader": "秒",
      "removeButton": "删除",
      "removeAria": "删除",
      "addRowButton": "添加时长行",
      "morningSession": "上午时段",
      "afternoonSession": "下午时段",
      "segmentPrefix": "时段",
      "combinedTime": "合计时间（HH:MM:SS）",
      "dayEquivalent": "折合 24 小时天数",
      "daysAbbr": "天"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "账单金额不能为负。",
      "errorTip": "小费比例必须在 0% 至 200% 之间。",
      "errorPeople": "人数必须在 1 至 100 人之间。",
      "billLabel": "账单小计（$）",
      "tipLabel": "小费比例（%）",
      "peopleLabel": "分摊人数",
      "presetsLabel": "小费预设：",
      "roundingLabel": "四舍五入：",
      "exactOption": "精确到分",
      "totalUpOption": "总额向上取整（$）",
      "perPersonUpOption": "每人金额向上取整（$）",
      "perPersonTotal": "每人总计",
      "includes": "包含",
      "tipEach": "每人小费",
      "totalTip": "小费总额",
      "effectiveRate": "实际费率：",
      "totalBill": "账单总额"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "请输入要转换的有效数值。",
      "errorAbsoluteZero": "温度不能低于绝对零度（-273.15 °C / 0 K）。",
      "categoryNames": {
        "length": "长度",
        "weight": "重量与质量",
        "temperature": "温度",
        "area": "面积",
        "volume": "体积",
        "speed": "速度",
        "storage": "数字存储"
      },
      "unitLabels": {
        "mm": "毫米",
        "cm": "厘米",
        "m": "米",
        "km": "千米",
        "in": "英寸",
        "ft": "英尺",
        "yd": "码",
        "mi": "英里",
        "mg": "毫克",
        "g": "克",
        "kg": "千克",
        "t": "公吨",
        "oz": "盎司",
        "lb": "磅",
        "st": "英石",
        "C": "摄氏度",
        "F": "华氏度",
        "K": "开尔文",
        "cm2": "平方厘米",
        "m2": "平方米",
        "ha": "公顷",
        "km2": "平方千米",
        "ft2": "平方英尺",
        "yd2": "平方码",
        "acre": "英亩",
        "mi2": "平方英里",
        "mL": "毫升",
        "L": "升",
        "m3": "立方米",
        "floz": "液量盎司（美制）",
        "cup": "杯（美制）",
        "pt": "品脱（美制）",
        "qt": "夸脱（美制）",
        "gal": "加仑（美制）",
        "ms": "米/秒",
        "kmh": "千米/小时",
        "mph": "英里/小时",
        "knot": "节",
        "fts": "英尺/秒",
        "B": "字节",
        "KB": "千字节 (10³)",
        "MB": "兆字节 (10⁶)",
        "GB": "吉字节 (10⁹)",
        "TB": "太字节 (10¹²)",
        "KiB": "千比字节 (2¹⁰)",
        "MiB": "兆比字节 (2²⁰)",
        "GiB": "吉比字节 (2³⁰)"
      },
      "valueLabel": "值",
      "fromLabel": "源单位",
      "toLabel": "目标单位",
      "swapAria": "交换单位",
      "swapTitle": "交换单位",
      "toWord": "＝",
      "copyResult": "复制结果",
      "unitHeader": "单位",
      "symbolHeader": "符号",
      "equivalentHeader": "等值"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "金额不能为负。",
      "errorRate": "税率必须在 0% 至 100% 之间。",
      "addTab": "加税（不含税 → 含税）",
      "removeTab": "扣税（含税 → 不含税）",
      "commonRates": "常见税率：",
      "netAmountLabel": "不含税金额（$）",
      "grossAmountLabel": "含税金额（$）",
      "rateLabel": "增值税/销售税率（%）",
      "netPrice": "不含税价格",
      "taxAmount": "税额",
      "grossPrice": "含税价格"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "编码为 Base64",
      "decodeTab": "解码 Base64",
      "urlSafe": "URL 安全（- 和 _）",
      "omitPadding": "省略末尾的 = 填充",
      "swap": "交换",
      "decodeError": "解码错误：",
      "inputLabelEncode": "纯文本（UTF-8）",
      "inputLabelDecode": "Base64 字符串",
      "inputPlaceholderEncode": "输入要编码的文本或 JSON……",
      "inputPlaceholderDecode": "粘贴标准或 URL 安全的 Base64 字符串……",
      "outputLabelEncode": "Base64 输出",
      "outputLabelDecode": "解码后文本",
      "outputPlaceholder": "转换后的输出将显示在这里……",
      "copyOutput": "复制输出",
      "invalidLength": "无效的 Base64 字符串长度。",
      "invalidInput": "无效的 Base64 输入或损坏的 UTF-8 字节序列。"
    },
    "tables": {
      "samplePlain": "UtilityFlow：UTF-8 安全的 Base64 编码 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "选择颜色",
      "colorPickerAria": "颜色选择器",
      "copyHex": "复制 HEX",
      "copyRgb": "复制 RGB",
      "copyHsl": "复制 HSL",
      "contrastTitle": "WCAG 2.1 对比度检查",
      "contrastDesc": "在任意背景色上预览前景色（{color}）。",
      "backgroundLabel": "背景：",
      "bgAria": "用于对比的背景色",
      "sampleTitle": "正文与界面文本示例",
      "sampleSentence": "敏捷的棕色狐狸跳过了懒狗。",
      "aaNormal": "AA 标准文本（≥ 4.5:1）",
      "aaaNormal": "AAA 标准文本（≥ 7.0:1）",
      "aaLarge": "AA 大号文本（≥ 3.0:1）",
      "pass": "通过",
      "fail": "未通过"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "5 字段 Cron 表达式",
      "copyCron": "复制 Cron",
      "humanTitle": "人类可读的计划",
      "breakdownTitle": "字段明细",
      "fieldMinute": "分钟（0–59）",
      "fieldHour": "小时（0–23）",
      "fieldDom": "月中的日（1–31）",
      "fieldMonth": "月（1–12）",
      "fieldDow": "星期（0–6）",
      "nextRuns": "接下来 {count} 次计划运行（本地时间）",
      "noRuns": "未来 366 天内未找到匹配的运行。",
      "fieldsError": "标准 Cron 需要 5 个字段（分钟 小时 月中的日 月 星期）。实际为 {count} 个。",
      "emptySegment": "“{token}”中有空段",
      "invalidStep": "“{token}”中的步长“{step}”无效",
      "outOfRange": "“{token}”中的值超出范围（{min}–{max}）",
      "invalidCron": "无效的 Cron 表达式。",
      "everyMinutes": "每 {n} 分钟",
      "minuteZeroHour": "每小时的第 0 分钟",
      "atTime": "在 {time}",
      "atFields": "在 {a}、{b}",
      "dayEveryDay": "每天",
      "dayWeekdays": "工作日（周一至周五）",
      "dayOfMonth": "每月第 {day} 日",
      "dayDow": "在 {dow}",
      "dayBoth": "在 {day} 日或 {dow}",
      "monthIn": "在 {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "每 5 分钟",
          "expr": "*/5 * * * *"
        },
        {
          "label": "每小时",
          "expr": "0 * * * *"
        },
        {
          "label": "每日午夜",
          "expr": "0 0 * * *"
        },
        {
          "label": "工作日 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "每月 1 日 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ],
      "monthLabels": [
        "",
        "1 月",
        "2 月",
        "3 月",
        "4 月",
        "5 月",
        "6 月",
        "7 月",
        "8 月",
        "9 月",
        "10 月",
        "11 月",
        "12 月"
      ],
      "unitWords": {
        "minute": "分钟",
        "hour": "小时",
        "day": "天",
        "month": "月",
        "weekday": "星期"
      },
      "unitPlurals": {
        "minute": "分钟",
        "hour": "小时",
        "day": "天",
        "month": "月",
        "weekday": "星期"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "压缩 CSS",
      "beautifyTab": "美化 CSS",
      "inputLabel": "输入 CSS",
      "bytesLabel": "字节",
      "inputPlaceholder": "在此粘贴 CSS 规则或样式表……",
      "outputLabelMinify": "压缩后的 CSS",
      "outputLabelBeautify": "美化后的 CSS",
      "outputPlaceholder": "处理后的 CSS 将显示在这里……",
      "copyCss": "复制 CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "文本输入",
      "fileTab": "本地文件校验和",
      "uppercaseHex": "大写十六进制",
      "inputLabel": "输入字符串（UTF-8）",
      "inputPlaceholder": "输入文本以计算 SHA-1、SHA-256、SHA-384 和 SHA-512 哈希值……",
      "chooseFileLabel": "选择要哈希的本地文件",
      "fileNoteDefault": "文件在浏览器内存中本地读取，绝不会上传。",
      "bytesLabel": "字节",
      "cryptoUnavailable": "Web Crypto 哈希不可用。",
      "sampleText": "你好，UtilityFlow！"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "编码实体",
      "decodeTab": "解码实体",
      "encodeNonAscii": "编码非 ASCII 字符（&#...;）",
      "swap": "交换",
      "inputLabelEncode": "原始 HTML / 文本",
      "inputLabelDecode": "HTML 编码字符串",
      "inputPlaceholderEncode": "<p>在此输入 HTML 标签或特殊字符……</p>",
      "inputPlaceholderDecode": "&lt;p&gt;在此粘贴编码后的实体……&lt;/p&gt;",
      "outputLabelEncode": "编码后的实体",
      "outputLabelDecode": "解码后文本",
      "outputPlaceholder": "转换后的实体将显示在这里……"
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "压缩 JS",
      "beautifyTab": "美化 JS",
      "indentLabel": "缩进：",
      "indent2": "2 个空格",
      "indent4": "4 个空格",
      "inputLabel": "JavaScript / TypeScript 输入",
      "bytesLabel": "字节",
      "inputPlaceholder": "粘贴 JavaScript 或 TypeScript 代码片段……",
      "outputLabelMinify": "压缩后输出",
      "outputLabelBeautify": "美化后输出",
      "outputPlaceholder": "格式化后的 JavaScript 将显示在这里……",
      "copyCode": "复制代码"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "分隔符：",
      "commaOpt": "逗号（,）",
      "semicolonOpt": "分号（;）",
      "tabOpt": "制表符（TSV）",
      "conversionError": "转换错误：",
      "inputLabelJson": "JSON 输入",
      "inputLabelCsv": "CSV 输入",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"示例\"}]",
      "inputPlaceholderCsv": "id,name\n1,示例",
      "outputLabelCsv": "CSV 输出",
      "outputLabelJson": "JSON 输出",
      "outputPlaceholder": "转换后的数据将显示在这里……",
      "parseFallback": "无法解析输入格式。"
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 个空格",
      "indent4": "4 个空格",
      "indentTab": "制表符",
      "indentMinify": "压缩",
      "sortKeys": "按 A–Z 排序键",
      "validJson": "有效的 JSON",
      "keysLabel": "键",
      "depthLabel": "深度",
      "bytesLabel": "字节",
      "invalidJson": "无效的 JSON：",
      "invalidJsonSyntax": "无效的 JSON 语法",
      "lineCol": "第 {line} 行，第 {col} 列",
      "inputLabel": "原始 JSON 输入",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "格式化后输出",
      "outputPlaceholder": "格式化并验证后的 JSON 将显示在这里……",
      "copyJson": "复制 JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "在浏览器内存中本地解码 Base64Url 头部和载荷。不验证加密签名。",
      "loadSampleJwt": "加载示例 JWT",
      "inputLabel": "编码后的 JWT 令牌",
      "inputPlaceholder": "粘贴 JWT 令牌（eyJhbGciOi...）以查看其头部和声明……",
      "invalidJwt": "无效的 JWT：",
      "headerLabel": "头部（算法与类型）",
      "payloadLabel": "载荷（声明）",
      "copyHeader": "复制头部",
      "copyPayload": "复制载荷",
      "timestampTitle": "时间戳声明",
      "iatLabel": "签发时间（iat）",
      "nbfLabel": "生效时间（nbf）",
      "expLabel": "过期时间（exp）",
      "expired": "已过期",
      "active": "有效（未过期）",
      "signatureLabel": "签名段（Base64Url）",
      "invalidB64Url": "无效的 Base64Url 段长度。",
      "segmentCount": "JWT 需要 3 个以点分隔的段（头部.载荷.签名），实际找到 {count} 个。",
      "parseFallback": "无法解析 JWT 的 Base64Url JSON 段。"
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "正则表达式模式",
      "patternPlaceholder": "输入正则表达式模式……",
      "flagsLabel": "标志：",
      "syntaxError": "语法错误：",
      "testStringLabel": "测试字符串",
      "testPlaceholder": "粘贴示例文本以测试您的模式……",
      "highlightedMatches": "高亮匹配",
      "matchSingular": "个匹配",
      "matchPlural": "个匹配",
      "highlightEmpty": "匹配项将在这里实时高亮……",
      "capturedTitle": "捕获的匹配",
      "matchLabel": "匹配",
      "indexLabel": "索引",
      "groupsLabel": "分组：",
      "noMatches": "未找到匹配。",
      "replaceLabel": "替换模板预览",
      "replacePlaceholder": "例如：$1 [at] $2",
      "invalidRegex": "无效的正则表达式。"
    },
    "tables": {
      "sampleText": "主要联系人：support@utilityflow.online\n账单团队：billing@example.org\n无效邮箱：not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g（全局）"
        },
        {
          "flag": "i",
          "label": "i（忽略大小写）"
        },
        {
          "flag": "m",
          "label": "m（多行）"
        },
        {
          "flag": "s",
          "label": "s（dotAll）"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "美化",
      "minify": "压缩",
      "uppercaseKw": "大写关键字",
      "lowercaseKw": "小写",
      "indentLabel": "缩进：",
      "indent2": "2 个空格",
      "indent4": "4 个空格",
      "inputLabel": "原始 SQL 查询",
      "inputPlaceholder": "粘贴 SQL 查询（SELECT、INSERT、UPDATE、JOIN……）……",
      "outputLabel": "格式化后 SQL",
      "outputPlaceholder": "格式化后 SQL 将显示在这里……",
      "copySql": "复制 SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "当前 Unix 时间戳（秒）",
      "useCurrent": "使用当前时间",
      "copyEpoch": "复制时间戳",
      "converter1Label": "Unix 时间戳 → 易读日期",
      "epochPlaceholder": "例如：1794544800",
      "unitAuto": "自动",
      "unitSeconds": "秒",
      "unitMilliseconds": "毫秒",
      "errorNotNumeric": "请输入有效的数字 Unix 时间戳。",
      "errorOutOfRange": "时间戳超出有效 JavaScript 日期范围。",
      "isoLabel": "ISO 8601（UTC）",
      "localLabel": "本地时区",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "相对时间",
      "converter2Label": "本地日期和时间 → Unix 时间戳",
      "secondsLabel": "秒",
      "millisecondsLabel": "毫秒",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "编码",
      "decode": "解码",
      "encodeUriPreserve": "encodeURI（保留 ://?&）",
      "swap": "交换",
      "urlError": "URL 错误：",
      "inputLabel": "输入字符串或 URL",
      "inputPlaceholder": "粘贴 URL、查询字符串或参数值……",
      "outputLabelEncode": "编码后输出",
      "outputLabelDecode": "解码后输出",
      "outputPlaceholder": "编码或解码后的 URL 将显示在这里……",
      "parsedTitle": "解析后 URL 明细",
      "protocol": "协议",
      "host": "主机",
      "pathname": "路径",
      "hash": "哈希",
      "noneValue": "（无）",
      "queryParam": "查询参数",
      "decodedValue": "解码后值",
      "malformed": "错误的百分号编码序列。"
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID 版本",
      "v4": "v4（随机）",
      "v7": "v7（按时间排序）",
      "quantity": "数量（1–100）",
      "generate": "生成 UUID",
      "uppercase": "大写",
      "includeHyphens": "包含连字符",
      "wrapBraces": "用 {花括号}包裹",
      "generatedLabel": "生成的 UUID",
      "copyAll": "全部复制"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "白底靛蓝",
      "presetSlate": "石板墨色",
      "presetEmerald": "翡翠徽章",
      "presetDark": "深色模式",
      "swapColors": "交换颜色",
      "fgTitle": "前景色 / 文本色",
      "bgTitle": "背景色",
      "copyHex": "复制 HEX",
      "pickerSuffix": "选择器",
      "hexInputSuffix": "HEX 输入",
      "contrastRatioLabel": "WCAG 2.1 对比度",
      "checkAaNormal": "WCAG AA 标准文本",
      "checkAaLarge": "WCAG AA 大号文本 / 界面",
      "checkAaaNormal": "WCAG AAA 标准文本",
      "checkAaaLarge": "WCAG AAA 大号文本",
      "pass": "通过",
      "fail": "未通过",
      "livePreviewLabel": "无障碍实时预览",
      "previewHeading": "清晰的排版在任何屏幕尺寸下都轻松易读。",
      "previewBody": "普通正文（14–16 px）在 WCAG AA 级别至少需要 4.5:1 的对比度，AAA 级别需要 7.0:1。大标题（18 pt 以上，或粗体 14 pt 以上）至少需要 3.0:1。",
      "outlinedControl": "带边框的界面元素",
      "hexOnHex": "{fg} 在 {bg} 上",
      "extractTitle": "从图片中提取调色板",
      "extractBody": "上传截图、徽标或照片，将主要 HEX 色板直接提取到对比度检查中。",
      "appliesToLabel": "点击色板应用于：",
      "foregroundBtn": "前景",
      "backgroundBtn": "背景",
      "selectImage": "选择图片以提取色板",
      "loadedReplace": "已加载：{name}（上传另一张图片）",
      "selectImageError": "请选择 PNG、JPG、WebP 或 GIF 图片。",
      "unableToRead": "无法读取“{name}”。",
      "canvasUnavailable": "Canvas 2D 上下文不可用。",
      "transparentImage": "图片似乎完全透明。",
      "unableToExtract": "无法提取调色板。",
      "areaPercent": "约 {n}% 面积"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 浏览器标签页",
        "taskbar": "32×32 任务栏 / HiDPI",
        "desktopShortcut": "48×48 桌面快捷方式",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA 启动屏"
      },
      "monogramMode": "字母徽章生成器",
      "imageMode": "上传徽标图片",
      "lettersLabel": "文本 / 首字母（1–3 个字符）",
      "cornerShapeLabel": "边角形状",
      "roundedSquare": "圆角正方形",
      "circle": "圆形",
      "sharpSquare": "直角正方形",
      "square": "正方形",
      "bgColorLabel": "背景色",
      "textColorLabel": "文本色",
      "chooseLogo": "选择 PNG、JPG、WebP 或 SVG 徽标",
      "loadedReplace": "已加载：{name}（点击替换）",
      "cropMaskLabel": "裁剪遮罩",
      "unableToRead": "无法读取“{name}”。",
      "canvasUnavailable": "Canvas 2D 上下文不可用。",
      "failedEncode": "无法编码 favicon PNG。",
      "unableToGenerate": "无法生成 favicon。",
      "icoBundleTitle": "多尺寸 favicon.ico 套装（16px + 32px + 48px）",
      "icoBundleBody": "符合标准的二进制 .ico 文件，可放置在网站根目录的 /public/ 文件夹中",
      "downloadIco": "下载 favicon.ico",
      "faviconPreviewAlt": "32×32 favicon 预览",
      "iconAlt": "{size}×{size} 图标",
      "htmlTagsLabel": "HTML <head> 链接标签",
      "copyHtml": "复制 HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "选择任意文件以计算加密校验和",
      "fileWithSize": "{name}（{size}）",
      "hashedLocally": "通过 Web Crypto API 本地哈希 · 零文件上传（建议小于 500 MB）",
      "cryptoUnavailable": "Web Crypto SubtleCrypto API 在此浏览器环境中不可用。",
      "hashFailed": "无法在浏览器内存中对文件进行哈希（数百 MB 以上的文件可能超出内存限制）。",
      "computing": "正在本地计算 SHA-1、SHA-256、SHA-384 和 SHA-512 校验和……",
      "fileLabel": "文件：",
      "sizeLabel": "大小：",
      "mimeLabel": "MIME：",
      "modifiedLabel": "修改时间：",
      "bytesSuffix": "{n} 字节",
      "downloadSha256": "下载 .sha256",
      "sha256Label": "SHA-256（推荐）",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1（仅旧版兼容）",
      "verifyLabel": "与预期校验和核对",
      "expectedPlaceholder": "粘贴已发布的 SHA-256、SHA-512、SHA-384 或 SHA-1 校验和（或 .sha256sum 行）……",
      "verified": "校验和已验证！文件与预期的 {algorithm} 摘要完全一致。",
      "mismatch": "校验和不匹配！计算出的摘要均与预期值不符。"
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "选择要压缩的图片（PNG / JPG / WebP）",
      "fileWithDims": "{name}（{w}×{h} · {size}）",
      "processedLocally": "通过 HTML5 Canvas 本地处理 · 绝不上传到远程服务器",
      "uploadImageError": "请上传 PNG、JPG、WebP 或 GIF 图片文件。",
      "unableToDecode": "无法解码“{name}”。",
      "canvasUnavailable": "Canvas 2D 上下文不可用。",
      "compressionFailed": "在浏览器 Canvas 中压缩失败。",
      "unableToCompress": "无法压缩图片。",
      "unableToRead": "无法读取“{name}”。",
      "invalidImage": "无效的图片文件。",
      "outputFormatLabel": "输出格式",
      "webpOption": "WebP（最小的现代网页尺寸）",
      "jpgOption": "JPG（兼容性最广）",
      "pngOption": "PNG（无损透明度）",
      "maxWidthLabel": "最大宽度上限",
      "keepOriginalWidth": "保持原始宽度",
      "max1920": "最大 1920px（全高清）",
      "max1280": "最大 1280px（博客 / 主视觉）",
      "max800": "最大 800px（缩略图）",
      "qualityLabel": "质量： ",
      "losslessPng": "无损 PNG",
      "originalLabel": "原图",
      "compressedLabel": "压缩后",
      "changeLabel": "变化",
      "outputSummary": "输出：{w} × {h} px · {ext}",
      "compressing": "压缩中……",
      "downloadExt": "下载 .{ext}",
      "previewAlt": "压缩后图片预览"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "选择一张或多张要转换的图片",
      "imagesLoaded": "已加载 {n} 张图片 — 点击添加或替换",
      "batchNote": "在本地批量将 PNG、JPG、WebP、SVG 或 GIF 转换为 PNG、JPG 或 WebP",
      "convertToLabel": "转换为格式",
      "pngOption": "PNG（.png — 保留透明度）",
      "qualityLabel": "有损质量： ",
      "lossless": "无损",
      "alphaFillLabel": "Alpha 填充",
      "converting": "转换中……",
      "reconvert": "重新转换",
      "selectFilesError": "请选择一个或多个图片文件（PNG、JPG、WebP、SVG、GIF）。",
      "couldNotDecode": "无法解码“{name}”。",
      "canvasUnavailable": "Canvas 2D 不可用。",
      "conversionFailed": "“{name}”转换失败。",
      "batchFailed": "批量图片转换失败。",
      "downloadExt": "下载 .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "选择要调整大小或裁剪为预设尺寸的图片",
      "fileWithDims": "{name}（原图：{w} × {h} px）",
      "supportsNote": "支持按像素调整大小、锁定长宽比和居中裁剪的社交媒体预设",
      "selectImageError": "请选择 PNG、JPG、WebP 或 GIF 图片。",
      "unableToDecode": "无法解码“{name}”。",
      "unableToRead": "无法读取图片。",
      "failedLoading": "加载图片以调整大小失败。",
      "canvasUnavailable": "Canvas 2D 不可用。",
      "failedGenerating": "生成调整大小后的图片失败。",
      "resizeFailed": "调整大小失败。",
      "quickPresets": "快捷预设：",
      "presetOg": "OG 分享（1200×630）",
      "presetYoutube": "YouTube 高清（1280×720）",
      "presetSquare": "正方形（1080×1080）",
      "presetAvatar": "头像（512×512）",
      "widthLabel": "宽度（px）",
      "heightLabel": "高度（px）",
      "fitModeLabel": "适配模式",
      "coverCropOption": "居中覆盖裁剪（不变形）",
      "exactOption": "按精确尺寸缩放",
      "outputFormatLabel": "输出格式",
      "lockAspect": "输入尺寸时锁定原始长宽比",
      "resizeButton": "调整为 {w} × {h} px",
      "readySummary": "就绪：{w} × {h} px（{ext}）",
      "downloadResized": "下载调整大小后的图片（.{ext}）",
      "previewAlt": "调整大小后图片输出"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "选择要旋转、翻转或滤镜处理的图片",
      "loadedReplace": "{name}（点击替换）",
      "previewNote": "实时 HTML5 Canvas 预览与像素导出",
      "selectImageError": "请选择 PNG、JPG、WebP 或 GIF 图片。",
      "failedLoading": "加载“{name}”失败。",
      "rotateLeft": "向左旋转 90°",
      "rotateRight": "向右旋转 90°",
      "flipHorizontal": "水平翻转",
      "flipVertical": "垂直翻转",
      "brightnessLabel": "亮度： ",
      "contrastLabel": "对比度： ",
      "grayscaleLabel": "黑白（灰度）",
      "resetAll": "全部重置",
      "exportFormatLabel": "导出格式",
      "livePreview": "实时 Canvas 预览"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "图片 → Base64 数据 URI",
      "decodeMode": "Base64 → 图片预览",
      "selectImageError": "请选择图片文件（PNG、JPG、WebP、SVG、GIF、ICO）。",
      "unableToRead": "无法读取“{name}”。",
      "chooseImage": "选择要编码的图片文件",
      "fileWithSize": "{name}（{size}）",
      "generatesNote": "生成数据 URI、原始 Base64、HTML <img> 和 CSS 背景代码片段",
      "binarySizeLabel": "二进制文件大小",
      "base64SizeLabel": "Base64 URI 大小（约大 33%）",
      "fullDataUriLabel": "完整数据 URI",
      "copyDataUri": "复制数据 URI",
      "copyRawBase64": "复制原始 Base64",
      "copyImg": "复制 <img>",
      "copyCss": "复制 CSS",
      "encodedAria": "编码后的 Base64 数据 URI",
      "encodedAlt": "编码后预览",
      "pasteLabel": "粘贴 Base64 图片字符串或数据 URI",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... 或原始 Base64 字符串",
      "invalidPayload": "粘贴的 Base64 文本不是有效的编码图片载荷。",
      "decodedAlt": "解码后 Base64 预览",
      "downloadExt": "下载 .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "非常强",
        "strong": "强",
        "moderate": "中等",
        "weak": "弱"
      },
      "randomPasswordMode": "随机密码",
      "passphraseMode": "Diceware 密码短语",
      "regenerate": "重新生成",
      "passwordLengthLabel": "密码长度： ",
      "charsSuffix": " 个字符",
      "batchCountLabel": "批量生成数量： ",
      "uppercaseLabel": "大写字母（A–Z）",
      "lowercaseLabel": "小写字母（a–z）",
      "numbersLabel": "数字（0–9）",
      "symbolsLabel": "符号（!@#$%...）",
      "excludeAmbiguousLabel": "排除易混淆字符（0、O、1、l、I）",
      "wordCountLabel": "单词数： ",
      "wordSeparatorLabel": "单词分隔符",
      "hyphenOption": "连字符（-）",
      "underscoreOption": "下划线（_）",
      "periodOption": "句点（.）",
      "spaceOption": "空格（ ）",
      "capitalizeWordsLabel": "单词首字母大写",
      "appendDigitLabel": "附加 2 位数字",
      "selectGroupWarning": "请至少选择一个字符组以生成密码。",
      "entropyBits": "约 {n} 位熵",
      "poolSizeSuffix": " · 字符池 {n}",
      "wordListSuffix": " · {n} 词单词表",
      "copyAll": "全部复制"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "网站 URL",
        "text": "文本",
        "wifi": "Wi-Fi 配置",
        "vcard": "vCard 联系人",
        "email": "电子邮件地址",
        "phone": "电话号码",
        "plainText": "纯文本"
      },
      "liveCameraCapture": "实时摄像头拍摄",
      "scanMode": "扫描 / 解码 QR 图片",
      "vcardMode": "vCard 联系人 QR 生成器",
      "uploadQr": "上传二维码图片",
      "uploadQrNote": "PNG、JPG、WebP 或 SVG 截图 · 100% 客户端处理",
      "liveCameraTitle": "设备摄像头实时扫描",
      "liveCameraNote": "仅在获得许可时使用本地摄像头画面",
      "startCamera": "启动摄像头扫描器",
      "stopCamera": "停止摄像头",
      "cameraHint": "将摄像头对准二维码，解码后自动停止。",
      "uploadImageError": "请上传包含二维码的 PNG、JPG、WebP 或 SVG 图片。",
      "unableToLoad": "无法加载“{name}”。",
      "noQrDetected": "在此图片中未检测到二维码。请确保对焦清晰、保留静区边距并提高对比度。",
      "unableToScan": "无法扫描图片。",
      "cameraUnsupported": "此浏览器环境不支持摄像头扫描。",
      "cameraDenied": "摄像头权限被拒绝或无可用摄像头设备。请改为上传二维码图片。",
      "decodedPayload": "解码后的载荷 · {kind}",
      "sourceLabel": "来源： ",
      "copyPayload": "复制载荷",
      "decodedAria": "解码后的二维码文本",
      "detectedLink": "检测到的网页链接： ",
      "uploadedPreviewAlt": "上传的二维码预览",
      "firstNameLabel": "名",
      "lastNameLabel": "姓",
      "orgLabel": "组织",
      "jobTitleLabel": "职位",
      "defaultJobTitle": "产品设计师",
      "phoneLabel": "电话号码",
      "emailLabel": "电子邮件地址",
      "websiteLabel": "网站 URL",
      "rawVcardLabel": "原始 vCard 3.0 载荷",
      "copyVcard": "复制 vCard",
      "vcardQrAlt": "生成的 vCard 二维码",
      "downloadPng": "下载 PNG",
      "downloadSvg": "下载 SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "短",
          "ratio": "原长约 10–20%"
        },
        "medium": {
          "label": "中等",
          "ratio": "原长约 30–40%"
        },
        "detailed": {
          "label": "长（详细）",
          "ratio": "原长约 50–60%"
        }
      },
      "loadingLengthLabels": {
        "short": "短",
        "medium": "中等",
        "detailed": "长"
      },
      "formatOptions": {
        "paragraph": {
          "label": "段落摘要",
          "hint": "流畅连贯的文章"
        },
        "bullets": {
          "label": "要点摘要",
          "hint": "清晰易读的要点"
        },
        "key-points": {
          "label": "要点提取",
          "hint": "编号要点"
        },
        "simple": {
          "label": "简单语言",
          "hint": "日常简单用语"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "段落",
        "bullets": "要点列表",
        "key-points": "要点",
        "simple": "简单语言"
      },
      "languageLabels": {
        "Same as original language": "与原文相同",
        "English (US)": "英语（美国）",
        "English (UK)": "英语（英国）",
        "Spanish": "西班牙语",
        "French": "法语",
        "German": "德语",
        "Portuguese": "葡萄牙语",
        "Italian": "意大利语",
        "Dutch": "荷兰语",
        "Arabic": "阿拉伯语",
        "Hindi": "印地语",
        "Urdu": "乌尔都语",
        "Turkish": "土耳其语",
        "Japanese": "日语",
        "Korean": "韩语",
        "Chinese (Simplified)": "简体中文"
      },
      "sampleArticle": "2026 年，分布式产品工程团队越来越多地依靠异步书面更新而非每日站会，来保护深度专注的开发时间。在一项为期六个月、针对分布在伦敦、柏林和多伦多的 140 名工程师的内部研究中，将每周三次同步电话改为周二和周四结构化书面摘要的团队报告称，日历碎片化减少了 28%，冲刺里程碑交付速度提高了 14%。关键在于，只有当工程师遵循三条一致的规则时，书面更新才有效：在顶部写明具体的阻碍、直接链接到拉取请求或问题 ID，并记录确切的目标日期，而不是使用“很快”等模糊措辞。管理者仍保留每周一次 25 分钟的实时会议，专门讨论开放的架构权衡和团队签到，在不打断编码时间的情况下保持人际交流。",
      "secUnit": "秒",
      "minUnit": "分钟",
      "title": "免费 AI 文本摘要工具",
      "noAccount": "无需账号、积分或登录",
      "allowanceBefore": "每日免费额度：",
      "allowanceAfter": "今日剩余",
      "allowanceFallback": "每日最多 5 次免费摘要",
      "backendTitle": "此环境中的 AI 后端密钥尚未激活。",
      "backendEnsureBefore": "请确保",
      "backendEnsureAfter": "已配置，以便运行实时 AI 摘要。",
      "stepLength": "1. 摘要长度",
      "stepFormat": "2. 摘要格式",
      "stepLanguage": "3. 输出语言",
      "stepText": "4. 要摘要的源文本",
      "lengthAria": "摘要长度",
      "paste": "粘贴",
      "clipboardUnavailable": "此处无法读取浏览器剪贴板，请在编辑器内使用 Ctrl/Cmd + V。",
      "clipboardEmpty": "剪贴板中目前没有文本。",
      "clipboardBlocked": "剪贴板权限被阻止，请直接使用 Ctrl/Cmd + V 粘贴。",
      "placeholder": "在此粘贴文章、研究笔记、会议记录或随笔（最少 25 个单词 / 120 个字符，最多 25,000 个字符）……",
      "word": "个单词",
      "words": "个单词",
      "chars": "个字符",
      "estRead": "预计阅读时间： ",
      "stop": "停止",
      "summarizing": "摘要生成中……",
      "summarizeButton": "摘要文本",
      "addMoreBefore": "请至少再添加 ",
      "addMoreMiddle": " 个单词（最少 ",
      "addMoreAnd": " 个单词和 ",
      "addMoreAfter": " 个字符），以便 AI 生成有意义的摘要。",
      "generatingSummary": "正在生成{length}摘要（{format}格式）……",
      "errorDailyLimit": "已达到每日免费摘要上限",
      "errorRateLimited": "请稍后再试",
      "errorGlobal": "已达到平台每日容量",
      "errorGeneric": "目前无法摘要",
      "retry": "重试",
      "emptyError": "摘要之前，请粘贴或输入文章、报告或笔记。",
      "tooShortErrorBefore": "文本太短，无法生成有意义的摘要（",
      "tooShortErrorMiddle": " 个单词）。请输入至少 ",
      "tooShortErrorAnd": " 个单词和 ",
      "tooShortErrorAfter": " 个字符。",
      "overLimitBefore": "输入超出 ",
      "overLimitMiddle": " 字符上限。请将文本缩短 ",
      "overLimitAfter": " 个字符后重试。",
      "connectionError": "摘要时出现临时连接问题。请重试。",
      "resultTitle": "摘要结果",
      "shorterSuffix": "% 更短",
      "copySummary": "复制摘要",
      "downloadTxt": "下载 TXT",
      "originalRead": "原文阅读时间",
      "summaryRead": "摘要阅读时间",
      "compressionSaved": "压缩率与节省时间",
      "savesPrefix": "节省约",
      "tabCompare": "原文与摘要对比",
      "tabSummary": "仅摘要",
      "resultAria": "生成的摘要与对比",
      "originalText": "原文",
      "summaryOutput": "摘要输出",
      "summarizedWith": "使用免费版 Groq 模型摘要",
      "fallbackNote": "（自动模型回退）",
      "preservedNote": "。重要的人名、日期和数字将严格按照您的输入保留。"
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "将图片缩小到 100KB 以下",
          "query": "我想把图片大小缩小到 100KB。",
          "categoryId": "image-file"
        },
        {
          "label": "将 PDF 转换为图片",
          "query": "我需要把 PDF 转换为图片。",
          "categoryId": "pdf"
        },
        {
          "label": "统计文章单词数",
          "query": "我想统计文章中的单词数。",
          "categoryId": "text-writing"
        },
        {
          "label": "生成二维码",
          "query": "我需要生成一个二维码。",
          "categoryId": "social-media"
        },
        {
          "label": "更改图片尺寸",
          "query": "我想更改图片的尺寸。",
          "categoryId": "image-file"
        },
        {
          "label": "修正语法并重写邮件",
          "query": "我想让 AI 修正语法错误，并以专业方式重写一封邮件。",
          "categoryId": "text-writing"
        },
        {
          "label": "摘要长文章",
          "query": "我需要把一篇长文章摘要为要点列表。",
          "categoryId": "text-writing"
        },
        {
          "label": "PDF 转 Word 检查",
          "query": "我需要把 PDF 转换为 Word。",
          "categoryId": "all"
        }
      ],
      "title": "AI 智能工具查找器",
      "searchesLine": "搜索 {count} 个真实的 UtilityFlow 工具（85 个浏览器工具 + 2 个 AI 工具）",
      "aiSearchesToday": "今日 AI 搜索：",
      "leftUnlimited": "剩余 · 即时本地搜索无限制",
      "quotaFallback": "每日最多 10 次免费 AI 搜索 · 本地搜索无限制",
      "backendBefore": "AI 语义排序需要在服务器上配置 ",
      "backendAfter": "，而即时本地关键词搜索可直接在全部 {count} 个工具中使用。",
      "queryLabel": "请描述您想做什么（日常语言或关键词均可）",
      "queryPlaceholder": "例如：“我想把图片大小缩小到 100KB”或“将 PDF 转换为 PNG”",
      "categoryLabel": "可选任务类别",
      "allCategories": "所有类别（{count} 个工具）",
      "characters": "个字符",
      "findButton": "查找匹配工具",
      "findingButton": "正在查找最佳工具……",
      "tryTask": "尝试真实任务或从常见问题中选择",
      "loadingLine": "正在将您的请求与 UtilityFlow 的 {count} 个已验证工具匹配……",
      "errorTitle": "AI 语义排序不可用",
      "retryAi": "重试 AI",
      "describeError": "请描述您想解决的任务或问题（至少 2 个字符）。",
      "queryTooLongBefore": "查询超过 ",
      "queryTooLongAfter": " 个字符。请简短描述。",
      "unexpectedFormat": "AI 返回了意外格式。下方显示来自真实库存的快速关键词匹配。",
      "contactError": "连接 AI 排序时出现临时问题。下方关键词搜索结果仍然有效。",
      "bestTool": "最佳推荐工具",
      "noExact": "目前没有完全匹配的工具",
      "noMatchFallback": "UtilityFlow 目前没有可直接执行“{query}”的专用工具。我们绝不会编造虚假工具或链接。",
      "relevantAlt": "相关替代工具",
      "relatedTools": "相关现有工具（仅部分工作流）",
      "supportedPrefix": "支持： ",
      "openName": "打开 {name}",
      "matchedWith": "使用免费版 Groq 模型在已验证的 UtilityFlow 库存中匹配",
      "fallbackNote": "（自动回退）",
      "instantMatches": "即时关键词匹配（{count}）",
      "matchedLocally": "已从 {count} 个工具中本地匹配",
      "matchedPrefix": "匹配： ",
      "suggestionsTitle": "智能建议",
      "suggestionsAll": "来自热门任务",
      "suggestionsCategory": "在所选类别内",
      "clickOpen": "点击任意工具直接打开",
      "openToolArrow": "打开工具 →",
      "recommendationsAria": "AI 工具推荐",
      "instantAria": "即时关键词匹配",
      "suggestionsAria": "页面加载时的智能推荐工具"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "修正语法",
          "hint": "纠正语法与标点"
        },
        "rewrite-text": {
          "label": "重写文本",
          "hint": "语句流畅、措辞自然"
        },
        "improve-writing": {
          "label": "改进写作",
          "hint": "打磨清晰度与用词"
        },
        "make-professional": {
          "label": "改为专业风格",
          "hint": "职场与管理层的清晰表达"
        },
        "make-casual": {
          "label": "改为随意风格",
          "hint": "轻松日常语气"
        },
        "simplify-text": {
          "label": "简化文本",
          "hint": "清晰易读的句子"
        },
        "expand-text": {
          "label": "扩展文本",
          "hint": "根据输入添加有用细节"
        },
        "paraphrase": {
          "label": "改写",
          "hint": "措辞新颖、含义相同"
        },
        "fix-spelling": {
          "label": "修正拼写",
          "hint": "仅修正拼写错误与大小写"
        },
        "write-email": {
          "label": "撰写邮件",
          "hint": "带主题行的结构化邮件"
        }
      },
      "tones": {
        "professional": "专业",
        "friendly": "友好",
        "formal": "正式",
        "casual": "随意",
        "academic": "学术",
        "persuasive": "有说服力",
        "simple": "简单"
      },
      "languageLabels": {
        "English (US)": "英语（美国）",
        "English (UK)": "英语（英国）",
        "Spanish": "西班牙语",
        "French": "法语",
        "German": "德语",
        "Portuguese": "葡萄牙语",
        "Italian": "意大利语",
        "Dutch": "荷兰语",
        "Arabic": "阿拉伯语",
        "Hindi": "印地语",
        "Urdu": "乌尔都语",
        "Turkish": "土耳其语",
        "Japanese": "日语",
        "Korean": "韩语",
        "Chinese (Simplified)": "简体中文",
        "Same as original language": "与原文相同"
      },
      "samples": {
        "default": "大家好，我想跟进昨天的会议，并分享我们第四季度产品发布的最新时间表。周五之前仍有两项需要审核，如果出现任何阻碍，请告诉我。",
        "write-email": "需要向客户 Daniel 更新移动应用发布进展。测试已于今天完成，明天上午还需修复 2 个小的 UI 错误，周五下午即可提交 App Store。请问周一上午 10 点的交接电话是否方便。",
        "fix-spelling": "我们很高兴地宣布，本季度维护窗口顺利完成，所有服务器均无计划外停机。",
        "expand-text": "远程异步站会节省了工程时间，让全球团队成员无需频繁查看日历也能深度专注。"
      },
      "title": "免费 AI 写作助手",
      "noLogin": "无需登录或银行卡",
      "allowanceBefore": "每日免费额度：",
      "allowanceAfter": "今日剩余",
      "allowanceFallback": "每日最多 5 次免费请求",
      "backendTitle": "此环境中的 AI 后端密钥尚未激活。",
      "backendSet": "请在服务器或 Worker 上设置",
      "backendRest": "以启用实时 AI 写作生成。",
      "stepTask": "1. 选择写作任务（10 种模式）",
      "stepTone": "2. 语气",
      "stepLanguage": "3. 输出语言",
      "stepText": "4. 您的原文",
      "taskSelectorAria": "写作任务选择器",
      "placeholder": "在此输入或粘贴段落、消息、笔记或邮件草稿（最多 12,000 个字符）……",
      "word": "个单词",
      "words": "个单词",
      "characters": "个字符",
      "chars": "个字符",
      "tip": "提示：按 Ctrl + Enter 生成",
      "stop": "停止",
      "generating": "生成中……",
      "applying": "正在应用",
      "tonePhrase": "{tone}语气",
      "applyingIn": "于",
      "errorDailyLimit": "已达到每日免费上限",
      "errorRateLimited": "请稍后再试",
      "errorGlobal": "已达到平台每日容量",
      "errorGeneric": "无法完成写作请求",
      "retry": "重试",
      "emptyError": "点击生成之前，请输入或粘贴一些文本。",
      "overLimitBefore": "输入超出 ",
      "overLimitMiddle": " 字符上限。请将草稿缩短 ",
      "overLimitAfter": " 个字符后重试。",
      "connectionError": "生成时出现临时连接问题。请重试。",
      "resultTitle": "改进后的输出",
      "copyResult": "复制结果",
      "downloadTxt": "下载 TXT",
      "editOutput": "进一步编辑输出",
      "tabCompare": "原文与改进版对比",
      "tabDiff": "高亮更改",
      "tabResult": "仅结果",
      "resultAria": "改进后的写作结果与对比",
      "originalText": "原文",
      "improvedText": "改进后文本",
      "removed": "已删除",
      "added": "已添加 / 已更新",
      "processedWith": "使用免费版 Groq 模型处理",
      "fallbackNote": "（自动模型回退）",
      "reviewNote": "。发送前请务必检查最终文案。"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "规范标签与 Hreflang 标签",
      "redirectsMode": "301 重定向规则生成器",
      "canonicalLabel": "自引用规范 URL",
      "alternatesLabel": "语言与地区替代页面",
      "addLocale": "添加语言版本",
      "langCodeAria": "语言代码",
      "alternateUrlAria": "替代 URL",
      "removeLocaleAria": "删除语言版本行",
      "htmlTagsLabel": "HTML <head> 链接标签",
      "copyHtml": "复制 HTML",
      "xmlSnippetLabel": "XML 网站地图 <xhtml:link> 代码片段",
      "copyXml": "复制 XML",
      "cloudflareFormat": "Cloudflare Pages（_redirects）",
      "htaccessFormat": "Apache（.htaccess）",
      "nginxFormat": "Nginx（服务器块）",
      "copyRules": "复制 {n} 条规则",
      "pairsLabel": "来源 → 目标配对（用逗号、制表符或“ -> ”分隔）",
      "generatedConfigLabel": "生成的 301 重定向配置",
      "skippedInvalid": "已跳过 {n} 行（缺少目标）。"
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "技术 SEO 始于干净、可抓取的 URL、准确的规范标签和结构化的 XML 网站地图。当发布者撰写以用户意图为中心的有用内容，而非堆砌关键词时，搜索引擎会自然理解主题深度。请定期检查标题、元描述和内部链接。",
      "defaultTargetKeyword": "技术 SEO",
      "guidanceTitle": "编辑指南：",
      "guidanceBody": "现代搜索引擎不会因达到固定的关键词密度配额而给予奖励。请使用此分布检查来发现意外的重复，或确认主要概念在文案中清晰出现。",
      "targetLabel": "目标关键词 / 短语（可选）",
      "targetPlaceholder": "例如：技术 SEO",
      "phraseLengthLabel": "短语长度",
      "oneWord": "1 词",
      "twoWord": "2 词短语",
      "threeWord": "3 词短语",
      "stripHtml": "去除 HTML 标签",
      "ignoreStopWords": "忽略停用词",
      "textLabel": "文章草稿或粘贴的 HTML 文案",
      "totalWords": "总单词数",
      "uniqueVocabulary": "独特词汇",
      "readingTime": "预计阅读时间",
      "targetPrefix": "目标： ",
      "hits": "{n} 次命中（{d}%）",
      "rankHeader": "排名",
      "termHeader": "词条 / N 元语法",
      "occurrencesHeader": "出现次数",
      "shareHeader": "占比（%）"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – 快速的浏览器端在线实用工具",
      "defaultDescription": "探索 85 款快速、注重隐私的浏览器工具，涵盖文本编辑、开发者编码、金融计算、PDF 工作流和 SEO。",
      "pageTitleLabel": "页面标题（<title> / og:title）",
      "titleChars": "{n} 个字符（理想 30–60）",
      "metaDescriptionLabel": "元描述",
      "descChars": "{n} 个字符（理想 120–160）",
      "canonicalUrlLabel": "规范 URL",
      "ogImageLabel": "Open Graph 图片 URL（建议 1200×630）",
      "siteNameLabel": "网站名称（og:site_name）",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter 卡片",
      "robotsLabel": "Robots：",
      "robotsFollowAria": "Robots follow 指令",
      "includeViewportLabel": "包含 charset 与 viewport 标签",
      "generatedTagsLabel": "生成的 HTML <head> 标签",
      "copyHtml": "复制 HTML",
      "downloadHtml": "下载 .html",
      "socialPreviewLabel": "社交分享卡片预览",
      "socialPreviewFallback": "社交分享预览",
      "untitledPage": "无标题页面",
      "metaSnippetFallback": "元描述片段将显示在这里。"
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "客户端 HTML 源码检查：",
      "auditBody": "浏览器会阻止对任意第三方网站的跨域抓取（CORS），且无法访问非公开搜索分析数据。请在下方粘贴页面 HTML 源码（查看页面源码），在本地检查 DOM 标签。",
      "pastedHtmlLabel": "粘贴的 HTML 源码",
      "loadSampleHtml": "加载示例 HTML",
      "htmlPlaceholder": "在此粘贴原始 <html>...</html> 源码……",
      "scoreLabel": "DOM 检查得分",
      "checksPassed": "{passed} / {total} 项检查通过",
      "linksSummary": "链接：{total} 个（内部 {internal} 个 / 外部 {external} 个）",
      "robotsMetaLabel": "Robots 元标签： ",
      "robotsDefault": "默认（index, follow）",
      "headingOutline": "标题大纲（H1–H4）",
      "emptyState": "请在左侧粘贴 HTML 源码，以检查标题、描述、标题层级、规范标签和 alt 标签。",
      "checkTitle": "Title 标签（<title>）",
      "checkMetaDesc": "元描述",
      "checkH1": "恰好一个 <h1> 标题",
      "checkCanonical": "规范 URL（<link rel=\"canonical\">）",
      "checkAlt": "图片 Alt 属性",
      "checkOgJsonLd": "Open Graph 与 JSON-LD 结构化数据",
      "titleDetail": "{n} 个字符：“{title}”",
      "titleMissing": "<head> 中缺少 <title> 标签。",
      "descDetail": "{n} 个字符（目标 120–160）。",
      "descMissing": "缺少 <meta name=\"description\">。",
      "h1Detail": "找到 {n} 个 <h1> 元素。",
      "canonicalMissing": "未声明规范标签。",
      "noImages": "标记中没有 <img> 元素。",
      "altDetail": "{with}/{total} 张图片包含描述性 alt 文本。",
      "ogDetail": "og:title {presence} · {n} 个 JSON-LD 块。",
      "present": "有",
      "missing": "无"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "索引指令",
      "indexOption": "index（允许搜索引擎索引）",
      "noindexOption": "noindex（从搜索结果中排除）",
      "linkCrawlingLabel": "链接抓取",
      "followOption": "follow（传递链接信号）",
      "nofollowOption": "nofollow（不跟踪链接）",
      "largeOption": "large（允许发现）",
      "htmlTagLabel": "HTML <head> 元标签",
      "copyHtmlTag": "复制 HTML 标签",
      "httpHeaderLabel": "HTTP 响应头（PDF / 非 HTML）",
      "copyHeader": "复制标头",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Cloudflare _headers 路径模式",
      "copyBlock": "复制代码块"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "入门模板：",
      "allowAll": "允许所有爬虫",
      "standardWebApp": "标准 Web 应用 / SaaS",
      "wordpressClean": "WordPress（简洁）",
      "stagingBlockAll": "暂存环境（全部阻止）",
      "crawlerRules": "爬虫路径规则",
      "addRule": "添加规则",
      "directiveAria": "指令",
      "pathAria": "路径",
      "deleteRuleAria": "删除规则",
      "crawlDelayLabel": "抓取延迟（秒，可选）",
      "crawlDelayPlaceholder": "无",
      "sitemapUrlsLabel": "网站地图 URL（每行一个）",
      "generatedLabel": "生成的 robots.txt"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "如何构建快速浏览器实用工具",
      "defaultFaqQ1": "UtilityFlow 的工具是否在浏览器本地运行？",
      "defaultFaqA1": "是的。几乎所有实用工具都直接在浏览器内存中执行，不会将输入发送到外部服务器。",
      "defaultFaqQ2": "结构化 JSON-LD 对 SEO 有帮助吗？",
      "defaultFaqA2": "是的。有效的 Schema.org JSON-LD 可帮助搜索爬虫理解实体上下文和富媒体结果资格。",
      "defaultProductName": "专业人体工学机械键盘",
      "defaultProductDesc": "专为软件开发者设计的超薄无线键盘。",
      "defaultCrumbHome": "首页",
      "defaultCrumbSeo": "SEO 工具",
      "defaultCrumbSchema": "结构化数据标记生成器",
      "headlineLabel": "标题",
      "authorNameLabel": "作者姓名",
      "publisherNameLabel": "发布者名称",
      "datePublishedLabel": "发布日期",
      "articleUrlLabel": "文章 URL",
      "featuredImageLabel": "特色图片 URL",
      "questionLabel": "问题 {n}",
      "removeQuestionAria": "删除问题 {n}",
      "questionPlaceholder": "问题",
      "acceptedAnswerPlaceholder": "已采纳答案",
      "addFaqRow": "添加 FAQ 行",
      "productNameLabel": "产品名称",
      "descriptionLabel": "描述",
      "priceLabel": "价格",
      "currencyLabel": "货币",
      "availabilityLabel": "库存状态",
      "orgNameLabel": "组织名称",
      "websiteUrlLabel": "网站 URL",
      "logoUrlLabel": "徽标 URL",
      "breadcrumbLabelAria": "面包屑 {n} 标签",
      "breadcrumbUrlAria": "面包屑 {n} URL",
      "labelPlaceholder": "标签",
      "addLevel": "添加层级",
      "jsonLdOutputLabel": "JSON-LD <script> 输出",
      "copyScriptTag": "复制脚本标签"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "JSON 格式化工具与验证器 – 美化与压缩 | UtilityFlow",
      "defaultDescription": "在浏览器中即时格式化、验证、压缩 JSON 数据并排序键，按行/列显示语法错误详情。",
      "desktopSerp": "桌面搜索结果（标题约 580px）",
      "mobileSerp": "移动搜索结果（描述约 120 字符）",
      "copyTitleMeta": "复制标题与元数据",
      "seoTitleLabel": "SEO 标题",
      "titleMetrics": "{chars} 个字符 · 约 {px}px / 最大 580px",
      "metaDescriptionLabel": "元描述",
      "descMetrics": "{chars} 个字符 · 约 {px}px",
      "pageUrlLabel": "页面 URL（用于面包屑预览）",
      "siteNameLabel": "网站名称",
      "boldKeywordLabel": "加粗关键词",
      "optionalPlaceholder": "可选",
      "datePrefixLabel": "日期前缀",
      "datePlaceholder": "例如：2025 年 11 月 12 日",
      "desktopSimulation": "桌面搜索结果模拟",
      "mobileSimulation": "移动搜索结果模拟",
      "titleFallback": "您的 SEO 标题将显示在这里",
      "descFallback": "您的元描述预览将显示在这里。"
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "如何为技术 SEO 构建简洁的 URL 别名！\n2026 年 10 款最佳咖啡馆与生产力工具\nXML 网站地图与 robots.txt 完整清单",
      "domainLabel": "基础域名 / 子文件夹（用于完整 URL 预览）",
      "separatorLabel": "单词分隔符",
      "hyphenOption": "连字符（-）— Google 推荐",
      "underscoreOption": "下划线（_）",
      "maxLengthLabel": "别名最大长度（{n} 个字符）",
      "stripStopWords": "去除可选英文停用词（a, the, and, of, in, to）",
      "trailingSlash": "包含末尾斜杠（/）",
      "titlesLabel": "页面标题（批量生成时每行一个）",
      "generatedLabel": "生成的 SEO 别名（{n}）",
      "copyAllSlugs": "复制全部别名",
      "copyAllUrls": "复制全部完整 URL",
      "originalTitleHeader": "原标题",
      "slugUrlHeader": "SEO 别名与完整 URL",
      "copyHeader": "复制"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod> 日期（可选）",
      "changefreqLabel": "<changefreq> 提示",
      "priorityLabel": "默认 <priority>",
      "omitTag": "省略标签",
      "deduplicateLabel": "去除重复的 URL",
      "urlsLabel": "规范 URL（每行一个完整的 https:// URL）",
      "skippedInvalid": "已跳过 {n} 行无效 URL： ",
      "generatedLabel": "生成的 sitemap.xml（{n} 个 URL）",
      "copyXml": "复制 XML",
      "downloadXml": "下载 .xml",
      "generatedAria": "生成的 XML 网站地图"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "为创作者和团队开发快速浏览器工具。   \n\n每周二发布新的工作流技巧。\n\n点击下方链接试用免费实用工具！",
      "modeBraille": "隐形间隔符（⠀ U+2800）",
      "modeDot": "最小圆点间隔符（.）",
      "modeClean": "仅行尾干净空格",
      "collapse": "合并意外的双空格",
      "labelRaw": "草稿文案或简介",
      "phRaw": "在需要段落分隔的地方空行来写文案……",
      "tip": "提示：当上一行末尾没有空格时，社交应用常常会折叠空白段落。",
      "labelOut": "可直接粘贴的输出",
      "copyFormatted": "复制格式化后的文案",
      "charsLabel": "字符数：",
      "linesLabel": "行数：",
      "blankLabel": "保留的空行：",
      "fitsBio": "符合 Instagram 150 字符简介",
      "captionLength": "文案长度（超过 150 字符简介上限）"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "问题 → 激化 → 解决（PAS）",
        "tutorial": "3 步实用拆解",
        "bab": "之前 → 之后 → 桥梁",
        "checklist": "发布 / 审核清单",
        "myth": "常见误区与实用现实"
      },
      "frameworkDescriptions": {
        "pas": "在给出工作流解决方案之前，突出具体的痛点。",
        "tutorial": "编号操作指南结构，适合 LinkedIn 轮播图和收藏帖。",
        "bab": "对比过去的阻力与改进后的结果。",
        "checklist": "创作者可以收藏的高清晰度检查清单。",
        "myth": "以直接简洁的替代方案质疑过时的建议。"
      },
      "frameworkLabels": {
        "fixesHeading": "真正有效的方法：",
        "beforeLabel": "之前： ",
        "afterLabel": "之后： ",
        "bridgeHeading": "桥梁：",
        "mythLabel": "常见误区： ",
        "worksHeading": "实际有效的方法："
      },
      "sampleHook": "别再花几个小时手动格式化推广链接了。",
      "sampleContext": "不一致的 UTM 参数和错乱的简介换行正在悄悄扭曲分析报告。",
      "samplePoints": "将 utm_source 和 utm_medium 的 UTM 标签统一为小写\n发布前检查换行\n使用无行尾空格的干净段落分隔",
      "sampleCta": "为下一次产品发布收藏这份清单。",
      "infoTitle": "确定性模板组装：",
      "infoBody": "此工具直接在浏览器中使用结构化文案框架，不使用也不暗示使用任何 AI 模型或外部 API。",
      "labelHook": "开场钩子（前 1–2 行）",
      "labelContext": "背景 / 问题陈述",
      "labelPoints": "关键要点（每行一个）",
      "labelCta": "行动号召（CTA）",
      "labelTags": "话题标签",
      "previewTitle": "格式化后文案预览",
      "copyCaption": "复制文案",
      "charsLabel": "字符数：",
      "wordsLabel": "单词数：",
      "fits": "符合",
      "threadNeeded": "需要发帖串",
      "tooLong": "太长"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "格式与无障碍大小写",
      "optCamel": "帕斯卡命名法（#CamelCase — 对屏幕阅读器友好）",
      "optLower": "全部小写（#小写）",
      "optPreserve": "保留原始大小写",
      "outLabel": "输出布局",
      "optInline": "单行（空格分隔）",
      "optNewline": "每行一个话题标签",
      "optDots": "文案折叠分隔符（.\n.\n.）",
      "dedupe": "删除重复话题标签",
      "labelRaw": "关键词或杂乱的话题标签（用逗号、空格或换行分隔）",
      "labelResult": "干净的话题标签组",
      "copyHashtags": "复制话题标签",
      "statClean": "干净的话题标签",
      "statDupes": "已删除重复",
      "statIgMax": "Instagram 上限（30）",
      "statWithin": "在 IG 30 个上限内",
      "statExceeds": "超过 30 个上限",
      "statChars": "输出字符数"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 个字符 · 字母、数字、下划线",
        "instagram": "1–30 个字符 · 字母、数字、句点、下划线",
        "tiktok": "2–24 个字符 · 字母、数字、下划线、句点",
        "youtube": "3–30 个字符 · 字母、数字、_、-、.",
        "threads": "1–30 个字符 · 与 Instagram 共享命名空间",
        "github": "1–39 个字符 · 字母数字与单个连字符"
      },
      "infoTitle": "规则验证器与直接检查链接：",
      "infoBodyBefore": "在线下验证用户名语法和字符限制，不猜测可用性。点击任意平台的",
      "infoEm": "打开个人主页 URL",
      "infoBodyAfter": "链接以直接验证实时占用状态。",
      "labelBrand": "品牌、项目或创作者名称",
      "phBrand": "例如：Utility Hub",
      "labelActive": "要验证的有效用户名",
      "copyAt": "复制 @",
      "variationsTitle": "统一的用户名变体：",
      "thPlatform": "平台",
      "thRules": "格式规则",
      "thStatus": "语法状态",
      "thCheck": "手动检查",
      "valid": "格式有效",
      "invalid": "语法/长度无效",
      "checkUrl": "检查 URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "粗体（无衬线）",
        "sans-italic": "斜体（无衬线）",
        "sans-bold-italic": "粗斜体（无衬线）",
        "serif-bold": "粗体（衬线）",
        "monospace": "等宽",
        "double-struck": "双线（黑板粗体）",
        "script-bold": "手写粗体",
        "fraktur-bold": "哥特粗体",
        "small-caps": "小型大写",
        "fullwidth": "全角美学"
      },
      "styleNotes": {
        "sans-bold": "简介标题和帖子钩子的高可读性",
        "sans-italic": "文案中微妙的强调",
        "sans-bold-italic": "强烈的标注与分隔",
        "serif-bold": "编辑风格的强调",
        "monospace": "代码用户名、日期与技术标签",
        "double-struck": "展示用装饰",
        "script-bold": "装饰性简介签名",
        "fraktur-bold": "哥特式展示字体",
        "small-caps": "简洁的大写风格个人资料标签",
        "fullwidth": "宽间距复古社交标题"
      },
      "sampleText": "全新创作者工具包 2025",
      "accessibilityTitle": "无障碍提示：",
      "accessibilityBody": "装饰性 Unicode 字符属于数学符号区块，屏幕阅读器可能会逐字朗读或跳过，某些搜索索引会忽略它们。请仅谨慎用于简短高亮，而非整段文字。",
      "labelInput": "要美化的文本",
      "placeholder": "输入简短标题、简介行或 CTA……",
      "previewEmpty": "预览"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Instagram 简介",
        "linkedinPost": "LinkedIn 帖子",
        "newsletter": "订阅邮件",
        "youtubeDescription": "YouTube 描述"
      },
      "presetsLabel": "快捷渠道预设：",
      "errorEmpty": "请输入目标网站 URL。",
      "errorInvalid": "请输入有效的目标 URL（例如 https://example.com/landing）。",
      "labelUrl": "网站目标 URL *",
      "labelSource": "推广来源（utm_source）*",
      "phSource": "例如：instagram, newsletter, google",
      "labelMedium": "推广媒介（utm_medium）*",
      "phMedium": "例如：social, cpc, email, video",
      "labelCampaign": "推广活动名称（utm_campaign）",
      "phCampaign": "例如：spring_launch",
      "labelContent": "推广内容（utm_content）",
      "phContent": "例如：hero_banner, bio_button",
      "labelTerm": "推广词条（utm_term）",
      "phTerm": "可选付费关键词或受众标签",
      "normalizeLabel": "强制小写并将空格转换为下划线（`_`）",
      "generatedTitle": "生成的推广 URL",
      "copyUtm": "复制 UTM URL",
      "thParam": "查询参数",
      "thValue": "规范化后的值"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "起始页码必须是大于或等于 1 的整数。",
      "stampedSuccess": (n: number, size: string) => `已在 ${n} 页上加盖页码（${size}）。`,
      "pageOfLabel": (cur: number, total: number) => `第 ${cur} 页 / 共 ${total} 页`,
      "dropTitleEmpty": "选择要添加页码的 PDF 文件",
      "dropTitleFile": (name: string, pages: number) => `${name}（${pages} 页）`,
      "dropSub": "为报告、合同和资料添加清晰的矢量页码标签",
      "labelPos": "位置",
      "optBottomCenter": "底部居中",
      "optBottomRight": "底部靠右",
      "optBottomLeft": "底部靠左",
      "optTopRight": "顶部靠右",
      "labelFmt": "标签格式",
      "optPageOf": "第 1 页 / 共 N 页",
      "optSlash": "1 / N",
      "optNumberOnly": "1、2、3...",
      "labelStart": "起始编号",
      "labelSize": "字体大小（pt）",
      "opt9": "9pt（小巧）",
      "opt11": "11pt（标准）",
      "opt14": "14pt（较大）",
      "skipCover": "跳过封面（从第 2 页开始编号）",
      "numbering": "正在添加页码……",
      "addBtn": "添加页码并下载"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `无法解码图片“${name}”。`,
      "errCanvas": "Canvas 2D 上下文不可用。",
      "errConvert": (name: string) => `无法将“${name}”转换为 PNG。`,
      "errNotImage": (name: string) => `“${name}”不是支持的图片文件（PNG、JPG、WebP）。`,
      "errRead": (name: string) => `无法读取“${name}”。`,
      "errLoad": "无法加载图片。",
      "errEmpty": "请先添加至少一张图片。",
      "errBuild": "将图片转换为 PDF 失败。",
      "createdSuccess": (n: number, size: string) => `已创建 ${n} 页 PDF（${size}）。`,
      "dropTitle": "选择 PNG、JPG 或 WebP 图片",
      "dropSub": "将截图、扫描件或照片在本地转换为单个 PDF",
      "labelSize": "PDF 页面尺寸",
      "optA4": "A4 纵向（210 × 297 mm）",
      "optLetter": "US Letter（8.5 × 11 英寸）",
      "optFit": "图片精确尺寸",
      "labelMargin": "页面边距",
      "optMargin0": "无边距（0pt）",
      "optMargin24": "标准边距（24pt）",
      "optMargin48": "宽边距（48pt）",
      "labelOut": "输出文件名",
      "moveUp": (name: string) => `将 ${name} 上移`,
      "moveDown": (name: string) => `将 ${name} 下移`,
      "removeFile": (name: string) => `删除 ${name}`,
      "building": "正在生成 PDF……",
      "convertBtn": (n: number) => `将 ${n} 张图片转换为 PDF`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "无法读取所选的 PDF 文件。",
      "errMin2": "请添加至少两个 PDF 文件进行合并。",
      "mergedSuccess": (n: number, pages: number, size: string) => `已合并 ${n} 个 PDF（${pages} 页，${size}）。`,
      "dropValidating": "正在验证 PDF 文件……",
      "dropTitle": "选择或拖放多个 PDF 文件",
      "dropSub": "100% 基于浏览器通过 pdf-lib 合并 · 仅限未加密 PDF · 永不上传",
      "filesQueued": "个文件已排队",
      "totalPagesLabel": "总页数",
      "combinedSize": "输入总大小",
      "clearQueue": "清空队列",
      "pageSingular": "页",
      "pagePlural": "页",
      "moveUp": (name: string) => `将 ${name} 上移`,
      "moveDown": (name: string) => `将 ${name} 下移`,
      "removeFile": (name: string) => `删除 ${name}`,
      "outName": "输出文件名",
      "merging": "正在合并 PDF……",
      "mergeBtn": (n: number) => `合并 ${n} 个 PDF 并下载`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "已清除可编辑的元数据字段。点击“保存元数据并下载 PDF”以应用更改。",
      "savedSuccess": (size: string) => `已保存更新后的 PDF 元数据（${size}）。`,
      "dropTitleEmpty": "选择要查看或编辑元数据的 PDF 文件",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name}（${pages} 页 · ${size}）`,
      "dropSub": "查看文档属性、清理作者/软件标签，或设置干净的 SEO 标题",
      "labelTitle": "文档标题",
      "labelAuthor": "作者",
      "labelSubject": "主题 / 摘要",
      "labelKeywords": "关键词（用逗号分隔）",
      "labelCreator": "创建应用",
      "labelProducer": "PDF 制作者",
      "saving": "正在保存 PDF……",
      "saveBtn": "保存元数据并下载 PDF",
      "stripBtn": "删除所有元数据字段"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "未找到要旋转的页面。",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `已将 ${b} 页中的 ${a} 页顺时针旋转 ${deg}°（${size}）。`,
      "dropTitleEmpty": "选择要旋转页面的 PDF 文件",
      "dropTitleFile": (name: string, pages: number) => `${name}（${pages} 页）`,
      "dropSub": "在本地旋转全部页面或指定页面范围，无需上传服务器",
      "labelAngle": "旋转角度",
      "opt90": "顺时针 90°（向右）",
      "opt270": "逆时针 90°（向左 / 270°）",
      "opt180": "180°（上下颠倒）",
      "labelScope": "应用范围",
      "optAll": (n: number) => `全部页面（${n} 页）`,
      "optRange": "指定页面范围",
      "optOdd": "仅奇数页",
      "optEven": "仅偶数页",
      "labelRangeInput": (n: number) => `页码 / 范围（1–${n}）`,
      "phRange": "例如：1, 3-5",
      "rotating": "正在旋转页面……",
      "rotateBtn": "应用旋转并下载 PDF"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- 第 ${n} 页 ---`,
      "dropExtracting": "正在提取 PDF 文本层……",
      "dropTitleFile": (name: string, pages: number) => `${name}（${pages} 页）`,
      "dropTitleEmpty": "选择要提取文本的文本型 PDF",
      "dropSub": "通过 PDF.js 在本地提取嵌入的 Unicode 文本 · 零服务器上传",
      "noTextTitle": "未找到可选文本层：",
      "noTextBody": "此 PDF 似乎包含扫描图片或轮廓化矢量路径，而非嵌入文本层。客户端光学字符识别（OCR）不会离线执行。",
      "markersLabelBefore": "插入页面标题标记（",
      "markersCode": "--- 第 N 页 ---",
      "markersLabelAfter": "）",
      "copyText": "复制文本",
      "downloadTxt": "下载 .txt",
      "outputAria": "提取的 PDF 文本（输出）",
      "pagesScanned": "已扫描页面：",
      "wordsExtracted": "已提取单词：",
      "textSize": "文本大小："
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "每批最多渲染 20 页，以保持浏览器 Canvas 内存快速响应。",
      "errCanvas": "Canvas 2D 上下文不可用。",
      "dropTitleEmpty": "选择要渲染为图片的 PDF",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name}（${pages} 页 · ${size}）`,
      "dropSub": "通过 PDF.js Canvas 在本地渲染 · 以 PNG 或 JPG 输出",
      "labelRange": "页面（“全部”或类似 1-4, 6 的范围）",
      "labelFormat": "图片格式",
      "optPng": "PNG（无损 / 文字清晰）",
      "optJpg": "JPG（紧凑 / 适合照片）",
      "labelScale": "渲染分辨率",
      "optScale1": "1.0×（72 DPI 快速预览）",
      "optScale15": "1.5×（108 DPI 标准）",
      "optScale2": "2.0×（144 DPI 高清）",
      "rendering": "正在渲染 PDF 页面……",
      "renderBtn": "将 PDF 页面渲染为图片",
      "pageAlt": (n: number) => `第 ${n} 页预览`,
      "pageLabel": (n: number, w: number, h: number) => `第 ${n} 页 · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "中性灰",
        "indigo": "品牌靛蓝",
        "red": "印章红"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "生成 PDF 之前，请先输入水印文本。",
      "appliedSuccess": (text: string, n: number, size: string) => `已将水印“${text}”应用于 ${n} 页（${size}）。`,
      "dropTitleEmpty": "选择要添加水印的 PDF 文件",
      "dropTitleFile": (name: string, pages: number) => `${name}（${pages} 页）`,
      "dropSub": "通过 pdf-lib 在本地嵌入清晰的矢量文本印章",
      "labelText": "水印文本",
      "phText": "机密 / 草稿 / 仅供内部使用",
      "labelColor": "印章颜色",
      "firstPageOnly": "仅第一页",
      "labelSize": "字体大小：",
      "ptSuffix": (n: number) => `${n} pt`,
      "labelOpacity": "不透明度：",
      "labelAngle": "旋转：",
      "applying": "正在添加水印……",
      "applyBtn": "应用水印并下载"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "PDF 必须至少保留 1 页。",
      "savedSuccess": (n: number, size: string) => `已保存更新后的 PDF（${n} 页）（${size}）。`,
      "loading": "正在加载 PDF 页面与预览……",
      "dropTitleFile": (name: string, n: number) => `${name}（${n} 页有效）`,
      "dropTitleEmpty": "选择要重新排序或删除页面的 PDF 文件",
      "dropSub": "在本地移动页面、复制页面或删除不需要的页面",
      "outCount": "输出页数：",
      "saving": "正在保存 PDF……",
      "saveBtn": "保存重新排序后的 PDF",
      "thumbAlt": (n: number) => `原始第 ${n} 页`,
      "thumbFallback": (n: number) => `原第 ${n} 页`,
      "posLabel": (n: number) => `位置 #${n}`,
      "origLabel": (n: number) => `（原 ${n}）`,
      "moveEarlierTitle": "向前移动",
      "moveEarlierAria": (n: number) => `将位置 ${n} 向前移动`,
      "moveLaterTitle": "向后移动",
      "moveLaterAria": (n: number) => `将位置 ${n} 向后移动`,
      "dupTitle": "复制页面",
      "dupAria": (n: number) => `复制位置 ${n} 的页面`,
      "delTitle": "删除页面",
      "delAria": (n: number) => `删除位置 ${n} 的页面`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `逐页拆分会每页下载一个文件。对于超过 25 页的文档（此处为 ${n} 页），请改为提取范围，以免浏览器阻止批量下载。`,
      "exportedAll": (n: number) => `已导出 ${n} 个单页 PDF 文件。`,
      "errNoMatch": "没有页面符合此选择（例如，“仅偶数页”至少需要 2 页）。",
      "extractedSuccess": (a: number, b: number, size: string) => `已提取 ${b} 页中的 ${a} 页（${size}）。`,
      "dropTitleEmpty": "选择要拆分或提取的 PDF 文件",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name}（${pages} 页 · ${size}）`,
      "dropSub": "在内存中本地处理 · 点击替换文档",
      "modeRange": "提取页面范围",
      "modeOdd": "仅奇数页",
      "modeEven": "仅偶数页",
      "modeBurst": "提取全部单页",
      "labelRange": (n: number) => `要提取的页面（1–${n}）`,
      "phRange": "例如：1-3, 5, 8-10",
      "rangeHintBefore": "请使用逗号和连字符（例如：",
      "rangeHintAfter": "）。",
      "extracting": "正在提取 PDF……",
      "splitBtn": "拆分并下载 PDF"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "网站 URL",
      "tabText": "纯文本",
      "tabWifi": "Wi-Fi 网络",
      "tabEmail": "邮件链接",
      "tabPhone": "电话号码",
      "labelUrl": "目标 URL",
      "labelText": "文本内容",
      "labelSsid": "网络名称（SSID）",
      "labelSecurity": "安全类型",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "开放（无密码）",
      "labelWifiPass": "Wi-Fi 密码",
      "hiddenSsid": "隐藏 SSID 网络",
      "labelEmailTo": "收件人邮箱",
      "labelEmailSubject": "主题（可选）",
      "labelPhone": "电话号码（建议使用 E.164 格式）",
      "sizeLabel": (size: number) => `尺寸（${size}px）`,
      "labelEc": "纠错级别",
      "labelFg": "前景色",
      "labelBg": "背景色",
      "quietZone": "静区边距：",
      "modulesLabel": (margin: number) => `${margin} 个模块`,
      "encodedPayload": "编码后的载荷字符串",
      "copyPayload": "复制载荷",
      "emptyError": "请在上方输入内容以生成可扫描的二维码。",
      "encodeError": "无法编码 QR 载荷。",
      "qrAlt": "生成的可扫描二维码",
      "downloadPng": "下载 PNG",
      "downloadSvg": "下载 SVG",
      "copySvg": "复制 SVG",
      "sampleText": "欢迎使用 UtilityFlow！"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "标准帖子",
        "profileBio": "个人简介",
        "caption": "标题",
        "feedPost": "动态帖子",
        "videoCaption": "视频说明",
        "post": "帖子",
        "videoTitle": "视频标题",
        "description": "描述"
      },
      "sampleText": "更快交付始于每天的小改进。\n\n请访问 https://utilityflow.online/tools/ 试用无需注册的浏览器端创作者工具。\n\n#CreatorTools #Workflow",
      "labelInput": "社交帖子 / 简介草稿",
      "copyDraft": "复制草稿",
      "placeholder": "撰写或粘贴社交文案、帖子、简介或 YouTube 标题……",
      "charsLabel": "字符数：",
      "wordsLabel": "单词数：",
      "hashtagsLabel": "话题标签：",
      "mentionsLabel": "提及：",
      "urlsLabel": "检测到的 URL：",
      "urlsWeighted": "（在 X 上按 23 个字符计算）",
      "overLimit": (n: number, loc: string) => `${n.toLocaleString(loc)} 字符超出上限`,
      "left": (n: number, loc: string) => `${n.toLocaleString(loc)} 字符剩余`,
      "foldLabel": (n: number) => `折叠位置 约 ${n} 字符`,
      "foldTitle": "动态截断 / “查看更多”折叠预览",
      "foldDesc": (limit: number, platform: string, surface: string) => `读者在点击“查看更多”之前看到的内容预览（${platform} 的 ${surface} 为 ${limit} 个字符）。`,
      "selectAria": "选择截断预览平台",
      "previewEmpty": "预览将显示在这里……"
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "我们如何在不追踪的情况下构建 85 个快速浏览器实用工具",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "2.4 万次观看 · 2 天前",
      "errNotImage": "请选择 PNG、JPG 或 WebP 图片文件。",
      "errDecode": "无法在浏览器中解码此图片文件。",
      "previewEyebrow": "1280 × 720 预览",
      "emptyThumb": "上传缩略图以检查动态中的可读性",
      "thumbAlt": "上传的缩略图预览",
      "safeZoneTitle": "时间戳徽章重叠区域",
      "chooseThumb": "选择本地缩略图（PNG / JPG / WebP）",
      "replaceThumb": (name: string) => `替换：${name}`,
      "recommended": "建议 1280×720（16:9），小于 2MB · 永不上传",
      "diagTitle": "图片规格诊断",
      "dimLabel": "尺寸",
      "dimHdOk": "（HD 合格）",
      "dimUnder": "（小于 1280px）",
      "aspectLabel": "长宽比",
      "aspectMatch": "符合 16:9",
      "aspectNo": "不符合 16:9（可能被裁剪或加黑边）",
      "sizeLabel": "文件大小",
      "sizeOk": "（小于 2MB 合格）",
      "sizeOver": "（超过 2MB 上限）",
      "titleLabel": (len: number) => `视频标题（${len}/100 字符 · 移动端约显示 60 字符）`,
      "channelLabel": "频道名称",
      "durationLabel": "时长",
      "darkMode": "深色模式动态预览",
      "safeZone": "高亮时间戳角落区域",
      "desktopCard": "桌面端首页动态卡片",
      "sidebar": "桌面端观看页侧边栏（紧凑推荐）",
      "untitled": "无标题视频"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "简介与概述"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "核心架构设置"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "实时演示与常见陷阱"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "总结与下一步"
        }
      ],
      "newChapter": (n: number) => `第 ${n} 章`,
      "defaultChapterTitle": "章节",
      "warnInvalid": "一个或多个时间戳格式无效（请使用 MM:SS 或 HH:MM:SS）。",
      "warnMin3": "YouTube 需要至少 3 个按升序排列的时间戳才能启用视频章节。",
      "warnFirst": "第一章必须从 00:00 开始，YouTube 才能识别章节。",
      "warnOrder": "章节未按时间顺序排列（请点击“按时间顺序排序”）。",
      "warnShort": (title: string) => `章节“${title}”距上一章不足 10 秒（YouTube 最小间隔为 10 秒）。`,
      "labelUrl": "YouTube 视频 URL 或视频 ID（用于直接 ?t= 深度链接）",
      "heading": "视频章节",
      "sortBtn": "按时间顺序排序",
      "addBtn": "添加章节",
      "tsAria": (n: number) => `第 ${n} 章的时间戳`,
      "titleAria": (n: number) => `第 ${n} 章的标题`,
      "phTitle": "章节标题",
      "removeAria": (n: number) => `删除第 ${n} 章`,
      "specTitle": "YouTube 章节规格检查：",
      "descBlock": "描述章节块",
      "copyChapters": "复制章节",
      "emptyChapters": "请在上方添加章节以生成描述块。",
      "shareTitle": "带时间戳的分享链接",
      "videoIdLabel": (id: string) => `（视频 ID：${id}）`,
      "noVideoId": "（请在上方输入有效的 YouTube URL）",
      "noVideoHint": "粘贴有效的 youtube.com 或 youtu.be URL，即可为每个章节创建可点击的 ?t= 跳转链接。"
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "未选择文件。",
      "notPdf": (name: string) => `“${name}”似乎不是 PDF 文件。`,
      "empty": (name: string) => `“${name}”为空或已损坏。`,
      "noHeader": (name: string) => `“${name}”缺少有效的 %PDF 文件头，无法处理。`,
      "enterRanges": "请输入页码或范围，例如“1-3, 5”。",
      "rangeOutside": (token: string, total: number) => `范围“${token}”超出文档的页码范围（1–${total}）。`,
      "rangeReversed": (token: string) => `范围“${token}”的起始页大于结束页。`,
      "pageMissing": (page: number, total: number) => `第 ${page} 页不存在（文档共 ${total} 页）。`,
      "invalidSyntax": (token: string) => `页码语法“${token}”无效。请使用“1-3, 5”这样的数字和范围。`,
      "encrypted": "此 PDF 已加密或受密码保护。请在本地处理之前解锁。",
      "unable": "无法处理 PDF 文件。",
      "allKeywords": [
        "all",
        "全部"
      ]
    }
  }
};
