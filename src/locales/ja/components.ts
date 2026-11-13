import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the ja locale.
 * Translated from the per-component STRINGS_EN tables; mirrors the
 * structure of deComponentStrings exactly (same top-level keys, same
 * nesting, same `tables` entries). Loaded only when the ja locale is
 * selected.
 */
export const jaComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "大文字・小文字を変換するテキスト",
      "placeholder": "テキストを入力または貼り付けて、下の変換ボタンをクリックしてください...",
      "copyResult": "結果をコピー"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "プラットフォームの文字数制限を守りながら、検索結果やソーシャルフィードで不自然に途切れることのない、明確で簡潔な文章を書きましょう。",
      "withSpaces": "スペースを含む",
      "withoutSpaces": "スペースを除く",
      "words": "単語",
      "letters": "文字",
      "digits": "数字",
      "utf8Bytes": "UTF-8バイト",
      "copyText": "テキストをコピー",
      "textToMeasure": "文字数を測るテキスト",
      "placeholder": "テキストを入力または貼り付けて、正確な文字数、バイトサイズ、プラットフォームの制限を確認...",
      "whitespaceChars": "空白文字",
      "lines": "行",
      "platformLimitsTitle": "プラットフォームとSEOの文字数制限",
      "over": "超過",
      "left": "残り",
      "platformLimits": [
        {
          "name": "SEOメタタイトル",
          "note": "Google検索結果に推奨されるタイトルの長さ"
        },
        {
          "name": "SEOメタディスクリプション",
          "note": "デスクトップ版スニペットの標準的なしきい値"
        },
        {
          "name": "SMSセグメント",
          "note": "1通のGSM-7 SMSメッセージ"
        },
        {
          "name": "X / Twitter投稿",
          "note": "標準的な投稿の長さ"
        },
        {
          "name": "Instagramキャプション（プレビュー）",
          "note": "「もっと見る」で省略される前に表示される部分"
        },
        {
          "name": "LinkedIn投稿",
          "note": "標準的なフィード投稿の最大長"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "検索",
      "replaceWith": "置換後の文字列",
      "findPlaceholder": "検索するテキスト...",
      "replacePlaceholder": "置換後のテキスト...",
      "caseSensitive": "大文字と小文字を区別する",
      "wholeWordOnly": "単語単位のみ",
      "useRegex": "正規表現（RegExp）を使う",
      "regexError": "正規表現エラー:",
      "invalidRegex": "無効な正規表現です。",
      "sourceText": "元のテキスト",
      "updatedOutput": "更新後の出力",
      "match": "件",
      "matches": "件",
      "replaced": "置換済み",
      "sourcePlaceholder": "検索・置換するテキストを貼り付けてください...",
      "outputPlaceholder": "置換後のテキストのプレビューがここに表示されます...",
      "copyResult": "結果をコピー"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "行の接頭辞",
      "lineSuffix": "行の接尾辞",
      "startNumber": "開始番号",
      "numberSeparator": "番号の区切り文字",
      "addLineNumbers": "行番号を追加",
      "zeroPad": "ゼロ埋めする（01、02）",
      "skipEmptyLines": "空行をスキップ",
      "inputLines": "入力行",
      "formattedLines": "整形後の行",
      "copyResult": "結果をコピー",
      "inputPlaceholder": "1行に1つの値または項目を貼り付けてください...",
      "outputPlaceholder": "番号付きまたは囲み付きの行がここに表示されます..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "数",
      "unit": "単位",
      "unitLabels": {
        "paragraphs": "段落",
        "sentences": "文",
        "words": "単語"
      },
      "startClassic": "「Lorem ipsum」から始める",
      "wrapHtml": "<p>タグで囲む",
      "words": "単語",
      "characters": "文字",
      "regenerate": "再生成",
      "copyPlaceholder": "プレースホルダーテキストをコピー",
      "generatedText": "生成されたプレースホルダーテキスト"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow リリースノート\n\n**Markdownプレビューアー**へようこそ。ライブ*HTML*エクスポート付きの高速なクライアントサイドエディタです。\n\n## 主な機能\n\n- 見出し、リスト、リンクの即時フォーマット\n- リモートアップロードなしの安全なHTMLエスケープ\n- 生のHTMLをワンクリックでコピー＆ダウンロード\n\n> ドキュメントは作業の近くに置き、公開前に構造を確認しましょう。\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\n詳しくは[UtilityFlow](/tools/)をご覧ください。",
      "renderedPreview": "レンダリング済みプレビュー",
      "rawHtml": "生のHTML",
      "exportHtml": "HTMLをエクスポート",
      "copyHtml": "HTMLをコピー",
      "markdownSource": "Markdownソース",
      "livePreview": "ライブプレビュー",
      "compiledHtml": "コンパイル済みHTML",
      "compiledHtmlAria": "コンパイル済みHTMLソース",
      "inputPlaceholder": "Markdownを入力（# 見出し、**太字**、- リスト、[リンク](https://...)）...",
      "emptyPreview": "Markdownを入力するとプレビューが表示されます..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "明確な技術文書は読者の時間を大切にします。具体的な名詞と能動態の動詞をできるだけ使い、複雑な手順も簡単に追えるようにしましょう。\n\n従属節を重ねた長い文は、読者に段落の読み直しを強います。密度の高い説明を短いステップに分けることで、ドキュメントが読みやすく、実践しやすくなります。",
      "level": "レベル:",
      "textToCheck": "読みやすさをチェックするテキスト",
      "placeholder": "記事、エッセイ、ランディングページのテキストを貼り付けて、Flesch読みやすさ指標と学年レベルを計算...",
      "fleschEase": "Flesch読みやすさ指標",
      "fleschKincaid": "Flesch-Kincaid学年レベル",
      "usGrade": "米国の学年レベル",
      "gunningFog": "Gunning-Fog指数",
      "yearsEducation": "教育年数",
      "smog": "SMOG指数",
      "polysyllable": "多音節語の複雑さ",
      "structuralBreakdown": "構造の内訳",
      "wordsSentences": "単語 / 文",
      "avgSentenceLength": "平均文長",
      "words": "単語",
      "avgSyllablesPerWord": "単語あたりの平均音節数",
      "complexWords": "複雑な単語（3音節以上）",
      "longWordsDetected": "検出された長い単語（3音節以上）",
      "noLongWords": "この文章には3音節以上の単語は見つかりませんでした。",
      "emptyState": "読みやすさの公式と構造比率を表示するには、少なくとも1文を上に入力してください。",
      "levels": [
        {
          "level": "非常にやさしい",
          "audience": "小学5年生（10〜11歳）"
        },
        {
          "level": "やさしい",
          "audience": "小学6年生（11〜12歳）"
        },
        {
          "level": "やややさしい",
          "audience": "中学1年生（12〜13歳）"
        },
        {
          "level": "標準",
          "audience": "中学2〜3年生（13〜15歳）"
        },
        {
          "level": "やや難しい",
          "audience": "高校生"
        },
        {
          "level": "難しい",
          "audience": "大学レベル"
        },
        {
          "level": "非常に難しい",
          "audience": "大学院・専門レベル"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "大文字と小文字を区別する",
      "trimWhitespace": "空白を除去",
      "removeEmptyLines": "空行を削除",
      "sortAlphabetically": "アルファベット順に並べ替え",
      "originalLines": "元の行数",
      "lines": "行",
      "uniqueLines": "重複のない行数",
      "unique": "件が重複なし",
      "removed": "件を削除",
      "inputPlaceholder": "リストを1行に1項目ずつ貼り付けてください...",
      "outputPlaceholder": "重複を除いた出力がここに表示されます..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "大文字と小文字を区別する",
      "ignoreBlankLines": "空行を無視",
      "removeDuplicates": "重複を削除",
      "inputLines": "入力行",
      "sortedLines": "並べ替え後の行",
      "copySorted": "並べ替え結果をコピー",
      "inputPlaceholder": "1行に1項目ずつ入力...",
      "outputPlaceholder": "並べ替え後の出力がここに表示されます...",
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
          "label": "自然順（1、2、10）"
        },
        {
          "id": "length-asc",
          "label": "短い順"
        },
        {
          "id": "length-desc",
          "label": "長い順"
        },
        {
          "id": "reverse-order",
          "label": "逆順"
        },
        {
          "id": "shuffle",
          "label": "シャッフル"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "空白を無視",
      "ignoreCase": "大文字と小文字を無視",
      "originalText": "元のテキスト",
      "modifiedText": "変更後のテキスト",
      "originalPlaceholder": "元のテキストを貼り付けてください...",
      "modifiedPlaceholder": "更新後のテキストを貼り付けてください...",
      "lineComparison": "行単位の比較",
      "added": "追加",
      "removed": "削除",
      "unchanged": "変更なし",
      "emptyState": "追加・削除された行を比較するには、上の両方の欄にテキストを入力してください。"
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "1行目のテキスト\n2行目のテキスト\n3行目のテキスト",
      "originalText": "元のテキスト",
      "reversedOutput": "反転後の出力",
      "inputPlaceholder": "反転するテキストや行を入力...",
      "outputPlaceholder": "反転したテキストがここに表示されます...",
      "modes": [
        {
          "id": "characters",
          "label": "文字を反転"
        },
        {
          "id": "words",
          "label": "単語の順序を反転"
        },
        {
          "id": "each-word",
          "label": "各単語を反転"
        },
        {
          "id": "lines",
          "label": "行の順序を反転"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "JSONをオンラインで整形するベストな方法10選！\nカフェとクリーム：2026年ガイド\nCloudflare Pagesで高速な静的サイトを作る方法",
      "hyphen": "ハイフン（-）",
      "underscore": "アンダースコア（_）",
      "forceLowercase": "小文字に統一する",
      "stripStopWords": "一般的なストップワードを除去",
      "titlesLabel": "タイトルやフレーズ（まとめて処理する場合は1行に1つ）",
      "inputPlaceholder": "ブログタイトル、商品名、見出しのリストを入力...",
      "generatedSlugs": "生成されたURLスラッグ",
      "copySlugs": "スラッグをコピー",
      "outputPlaceholder": "クリーンなURLスラッグがここに表示されます"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   余分な   スペースのある   1行目。   \n\n   タブ\tと   すき間のある   2行目。\n\n\n   3行目はこちら。   ",
      "collapseSpaces": "連続するスペースを1つにまとめる",
      "trimEdges": "行の端をトリミング",
      "tabsToSpaces": "タブをスペースに変換",
      "lineBreaks": "改行:",
      "keepBreaks": "改行を保持",
      "removeBlankLines": "空行を削除",
      "replaceWithSpaces": "スペースに置換",
      "removeAllBreaks": "すべての改行を削除",
      "inputText": "入力テキスト",
      "chars": "文字",
      "cleanedText": "整形後のテキスト",
      "removed": "件を削除",
      "inputPlaceholder": "余分なスペース、タブ、空行のある乱れたテキストを貼り付けてください...",
      "outputPlaceholder": "整形後の出力が自動的に表示されます..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlowは、すべての文字数計算をブラウザ上で直接処理します。ブログ記事の下書き、製品紹介文の調整、厳しい文字数制限のある学術論文のチェックなど、即座に表示されるカウントがメッセージを明確に組み立てる手助けをします。\n\n短い文は読みやすさを高めます。文の長さに変化をつけることで、長い説明文もデスクトップとモバイルの両方で読み手を引きつけます。",
      "words": "単語",
      "characters": "文字",
      "noSpaces": "スペースを除く",
      "sentences": "文",
      "paragraphs": "段落",
      "readingTime": "読了時間",
      "downloadTxt": ".txtでダウンロード",
      "copyText": "テキストをコピー",
      "textToCount": "数えるテキスト",
      "placeholder": "テキストをここに貼り付けるか入力して、単語数、文字数、文数、読了時間を数えます...",
      "deliveryTimingLines": "話す時間と行数",
      "speakingTime": "話す時間（130語/分）",
      "totalLines": "総行数",
      "avgWordLength": "平均単語長",
      "chars": "文字",
      "mostFrequentWords": "最も頻出する単語",
      "emptyKeywords": "最も繰り返し使われている単語を表示するには、上にテキストを入力してください。"
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "テクニカルSEOの監査では、クロール可能性、内部リンク、読み込み速度をチェックします。高速なページはユーザーの滞在時間とモバイル検索での読み込み速度シグナルを改善します。内部リンクは関連するガイド同士をつなぎ、テクニカルSEOの構造を強化します。",
      "ngramLabels": {
        "1": "1単語",
        "2": "2単語フレーズ",
        "3": "3単語フレーズ"
      },
      "excludeStopWords": "一般的なストップワードを除外",
      "minLength": "最小の長さ:",
      "textForAnalysis": "頻度分析するテキスト",
      "placeholder": "記事のテキスト、商品説明、メモを貼り付けて、繰り返し使われる用語とキーワード密度を数えます...",
      "totalWords": "総単語数:",
      "uniqueTerms": "ユニークな用語:",
      "exportCsv": "CSVをエクスポート",
      "copyCsv": "CSVをコピー",
      "rank": "#",
      "termPhrase": "用語 / フレーズ",
      "count": "回数",
      "density": "密度",
      "emptyState": "単語数とキーワード密度（%）を表示するには、上にテキストを入力してください。"
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "有効な日付を入力してください。",
      "errorDobAfterTarget": "生年月日は対象日より後にできません。",
      "dobLabel": "生年月日",
      "targetLabel": "年齢を計算する日",
      "exactAge": "正確な暦年齢",
      "yearsWord": "年",
      "monthsWord": "か月",
      "daysWord": "日",
      "nextBirthday": "次の誕生日",
      "turning": "で",
      "inWord": "あと",
      "totalMonths": "合計月数",
      "totalWeeks": "合計週数",
      "totalDays": "合計日数",
      "totalHours": "合計時間（概算）",
      "monthsAbbr": "か月",
      "weeksAbbr": "週",
      "daysAbbr": "日",
      "hoursAbbr": "時間"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "低体重",
      "normalWeight": "普通体重",
      "overweight": "過体重",
      "obesity": "肥満",
      "errorHeightMetric": "身長は50cm〜280cmの範囲で入力してください。",
      "errorWeightMetric": "体重は15kg〜500kgの範囲で入力してください。",
      "errorHeightImperial": "身長は2フィート〜9フィートの範囲で有効な値を入力してください。",
      "errorWeightImperial": "体重は30ポンド〜1100ポンドの範囲で入力してください。",
      "metricTab": "メートル法（cm / kg）",
      "imperialTab": "ヤード・ポンド法（ft, in / lbs）",
      "heightCmLabel": "身長（cm）",
      "weightKgLabel": "体重（kg）",
      "heightFtLabel": "身長（ft）",
      "heightInLabel": "身長（in）",
      "weightLbsLabel": "体重（lbs）",
      "bmiLabel": "体格指数（BMI）",
      "whoCategory": "WHO分類",
      "healthyRange": "BMIによる健康的な体重範囲（18.5〜24.9）",
      "disclaimer": "BMIは一般的なスクリーニング指標であり、筋肉量と体脂肪を区別しません。"
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "年齢は15歳〜100歳の範囲で入力してください。",
      "errorHeightMetric": "身長は100cm〜250cmの範囲で入力してください。",
      "errorWeightMetric": "体重は30kg〜350kgの範囲で入力してください。",
      "errorHeightImperial": "身長は3フィート4インチ〜8フィート2インチの範囲で入力してください。",
      "errorWeightImperial": "体重は66ポンド〜770ポンドの範囲で入力してください。",
      "metricTab": "メートル法（cm / kg）",
      "imperialTab": "ヤード・ポンド法（ft, in / lbs）",
      "maleTab": "男性",
      "femaleTab": "女性",
      "ageLabel": "年齢（歳）",
      "heightCmLabel": "身長（cm）",
      "weightKgLabel": "体重（kg）",
      "heightFtLabel": "身長（ft）",
      "heightInLabel": "身長（in）",
      "weightLbsLabel": "体重（lbs）",
      "activityLabel": "活動レベル",
      "activitySedentary": "座りがち（1.2倍）",
      "activitySedentaryDetail": "デスクワーク、運動はほとんどなし",
      "activityLight": "軽い活動（1.375倍）",
      "activityLightDetail": "週1〜3日の軽い運動",
      "activityModerate": "中程度の活動（1.55倍）",
      "activityModerateDetail": "週3〜5日の中程度の運動",
      "activityVery": "活発（1.725倍）",
      "activityVeryDetail": "週6〜7日の激しい運動",
      "activityExtra": "非常に活発（1.9倍）",
      "activityExtraDetail": "肉体労働または1日2回のトレーニング",
      "maintenance": "維持カロリー（TDEE）",
      "mildLoss": "ゆるやかな減量（-0.25 kg/週）",
      "mildLossNote": "1日あたり約250 kcalの不足",
      "weightLoss": "減量（-0.5 kg/週）",
      "weightLossNote": "1日あたり約500 kcalの不足",
      "leanGain": "無理のない増量",
      "leanGainNote": "1日あたり+250 kcalの余剰",
      "macroHeading": "維持カロリーの参考マクロ配分（タンパク質30%・炭水化物40%・脂質30%）",
      "protein": "タンパク質",
      "carbs": "炭水化物",
      "fat": "脂質",
      "gramsPerDay": "g/日",
      "disclaimer": "Mifflin-St Jeor式で基礎代謝を計算しています。個人のエネルギー必要量は体組成や健康状態によって異なります。制限的な食事を始める前に、資格のある医療専門家に相談してください。"
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "初期預金額をマイナスにすることはできません。",
      "errorMonthly": "毎月の積立額をマイナスにすることはできません。",
      "errorRate": "年利は0%〜100%の範囲で入力してください。",
      "errorYears": "運用期間は1年〜100年の範囲で入力してください。",
      "initialLabel": "初期預金額（$）",
      "monthlyLabel": "毎月の積立額（$）",
      "rateLabel": "年利（%）",
      "yearsLabel": "年数",
      "compoundingLabel": "複利の間隔",
      "dailyOption": "毎日（年365回）",
      "monthlyOption": "毎月（年12回）",
      "quarterlyOption": "四半期ごと（年4回）",
      "annualOption": "毎年（年1回）",
      "futureBalance": "将来の残高",
      "totalContributed": "元本＋積立金の合計",
      "totalInterest": "複利の合計",
      "yearHeader": "年",
      "totalContributedHeader": "累計積立額",
      "cumulativeInterestHeader": "累計利息",
      "endingBalanceHeader": "期末残高",
      "yearPrefix": "年"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "0以上の金額を入力してください。",
      "errorRate": "0より大きい正の為替レートを入力してください。",
      "errorFee": "換算手数料は0%〜50%の範囲で入力してください。",
      "fetchErrorWithMessage": "外部レートを取得できませんでした（{message}）。上の欄に為替レートを手動で入力してください。",
      "fetchErrorGeneric": "外部レートAPIに接続できませんでした。上の欄に為替レートを手動で入力してください。",
      "fetchErrorNoPair": "選択した通貨ペアは参照APIから返されませんでした。",
      "currencyNames": {
        "USD": "米ドル",
        "EUR": "ユーロ",
        "GBP": "英ポンド",
        "JPY": "日本円",
        "CAD": "カナダドル",
        "AUD": "オーストラリアドル",
        "CHF": "スイスフラン",
        "INR": "インドルピー",
        "SGD": "シンガポールドル",
        "NZD": "ニュージーランドドル",
        "MXN": "メキシコペソ",
        "CNY": "中国人民元"
      },
      "rateSourceManualDefault": "手動入力レート（オフラインの既定値）",
      "rateSourceManual": "手動入力レート",
      "rateSourceIdentity": "同一通貨の基準レート（1.0000）",
      "rateSourceEcb": "Frankfurter API経由の外部ECB参照レート（日付：{date}）",
      "rateSourceInverted": "以前のレートから反転",
      "disclosureTitle": "レート出典の開示:",
      "disclosureBody": "最新の市場レートをオフラインで作り出すことは決してありません。正確な提示レートを手動で入力するか、",
      "disclosureBodyAfter": "をクリックして外部Frankfurter APIから参照レートを取得してください。",
      "activeRateSource": "現在のレート出典:",
      "amountLabel": "金額",
      "fromLabel": "換算元の通貨",
      "toLabel": "換算先の通貨",
      "swapAria": "通貨を入れ替える",
      "swapTitle": "通貨を入れ替えてレートを反転",
      "rateLabel": "為替レート",
      "feeLabel": "銀行・カード手数料（%）",
      "fetchButton": "ECB参照レートを取得",
      "fetchingButton": "ECBレートを取得中...",
      "netConverted": "手数料控除後の換算額",
      "grossBeforeFee": "手数料控除前の総額",
      "feeLabelShort": "手数料",
      "inverseRate": "逆為替レート",
      "perOne": "1あたり",
      "amountHeaderSuffix": "金額",
      "netHeaderPrefix": "正味",
      "netHeaderSuffix": "（入力したレートと手数料で計算）"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "有効な開始日と終了日を選択してください。",
      "errorInvalidBase": "有効な開始日を入力してください。",
      "errorNonNegative": "年、月、日には0以上の整数を入力してください。",
      "differenceTab": "日付の差",
      "addSubtractTab": "時間を加算 / 減算",
      "startLabel": "開始日",
      "endLabel": "終了日",
      "swapTitle": "日付を入れ替える",
      "swapAria": "開始日と終了日を入れ替える",
      "includeEnd": "終了日を含める（+1暦日）",
      "calendarDuration": "暦上の期間",
      "reversedRange": "（逆向きの期間）",
      "totalSpan": "合計期間:",
      "calendarDays": "暦日",
      "weeksDays": "週と日",
      "weekdays": "平日（月〜金）",
      "weekendDays": "週末（土〜日）",
      "totalHours": "合計時間",
      "yearsWord": "年",
      "monthsWord": "か月",
      "daysWord": "日",
      "weeksAbbr": "週",
      "daysAbbr": "日",
      "hoursAbbr": "時間",
      "referenceLabel": "基準日",
      "operationLabel": "操作",
      "addOption": "加算（+）",
      "subtractOption": "減算（-）",
      "yearsLabel": "年",
      "monthsLabel": "月",
      "daysLabel": "日",
      "resultingDate": "結果の日付",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "元の価格をマイナスにすることはできません。",
      "errorDiscount": "割引率は0%〜100%の範囲で入力してください。",
      "errorTax": "消費税は0%〜100%の範囲で入力してください。",
      "errorCost": "コストをマイナスにすることはできません。",
      "errorSelling": "販売価格は0より大きくする必要があります。",
      "discountTab": "割引セール",
      "marginTab": "利益率と値入率",
      "originalPriceLabel": "元の価格（$）",
      "discountLabel": "割引率（%）",
      "salesTaxLabel": "消費税（%）",
      "costLabel": "単価コスト（$）",
      "sellingLabel": "販売価格（$）",
      "finalPrice": "最終価格",
      "beforeTax": "税抜き:",
      "youSave": "お得な金額",
      "taxAdded": "追加された税金",
      "grossProfit": "粗利益",
      "profitMargin": "利益率",
      "profitDivSelling": "（利益 ÷ 販売価格）",
      "markup": "値入率",
      "profitDivCost": "（利益 ÷ コスト）"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "0より大きい借入額を入力してください。",
      "errorRate": "年利は0%〜100%の範囲で入力してください。",
      "errorDuration": "借入期間は1か月〜600か月の範囲で入力してください。",
      "principalLabel": "借入額（$）",
      "rateLabel": "年利（%実質年率）",
      "termLabel": "借入期間",
      "termUnitAria": "借入期間の単位",
      "yearsOption": "年",
      "monthsOption": "か月",
      "monthlyPayment": "月々の返済額（EMI）",
      "forPrefix": "全",
      "monthlyPayments": "回の月払い",
      "totalInterest": "利息の合計",
      "ofTotalCost": "総コストの",
      "totalRepayment": "返済総額",
      "principalWord": "元本",
      "principalLabelShort": "元本",
      "interestLabelShort": "利息",
      "showSchedule": "返済スケジュールを表示",
      "hideSchedule": "返済スケジュールを非表示",
      "monthHeader": "月",
      "paymentHeader": "返済額",
      "principalHeader": "元本",
      "interestHeader": "利息",
      "balanceHeader": "残高"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "購入価格は0より大きくする必要があります。",
      "errorDownPayment": "頭金は0%〜99.9%の範囲で入力してください。",
      "errorRate": "金利は0%〜50%の範囲で入力してください。",
      "errorTerm": "借入期間は1年〜50年の範囲で入力してください。",
      "homePriceLabel": "購入価格（$）",
      "downPaymentLabel": "頭金（%）",
      "rateLabel": "金利（%実質年率）",
      "termLabel": "借入期間（年）",
      "yearsWord": "年",
      "taxLabel": "固定資産税（$/年）",
      "insuranceLabel": "住宅保険（$/年）",
      "hoaLabel": "管理組合費（$/月）",
      "estimatedMonthly": "月々の推定返済額",
      "loanAmount": "借入額",
      "downPayment": "頭金",
      "lifetimeInterest": "期間中の利息合計",
      "breakdownHeading": "月々の返済額の内訳",
      "principalInterest": "元本と利息（P&I）",
      "propertyTaxes": "固定資産税",
      "homeownersInsurance": "住宅保険",
      "hoaDues": "管理組合費",
      "pmiLabel": "推定PMI（頭金20%未満の場合、年0.5%）"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "有効な数値を入力してください。",
      "errorTotalZero": "全体の値（Y）を0にすることはできません。",
      "errorStartZero": "開始値を0にすることはできません。",
      "heading1": "1. 数値に対するパーセント値",
      "heading2": "2. 全体に対する割合（%）",
      "heading3": "3. 増減率（%）",
      "whatIs": "の",
      "percentOf": "%は",
      "isWhatPercentOf": "は、の何%か",
      "fromWord": "開始値",
      "toWord": "終了値",
      "result": "結果:",
      "change": "変化:",
      "formula": "計算式",
      "difference": "差",
      "ariaPctX": "パーセントX",
      "ariaBaseY": "基準値Y",
      "ariaPartX": "部分の値X",
      "ariaWholeY": "全体の値Y",
      "ariaInitialA": "初期値A",
      "ariaFinalB": "最終値B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "報酬額をマイナスにすることはできません。",
      "errorHours": "週の労働時間は1時間〜168時間の範囲で入力してください。",
      "errorWeeks": "年間の週数は1週〜52週の範囲で入力してください。",
      "errorTax": "推定税率は0%〜99%の範囲で入力してください。",
      "amountLabel": "報酬額（$）",
      "frequencyLabel": "頻度",
      "hourlyOption": "時給",
      "dailyOption": "日給",
      "weeklyOption": "週給",
      "biweeklyOption": "隔週給",
      "monthlyOption": "月給",
      "annualOption": "年給",
      "hoursLabel": "週の労働時間",
      "weeksLabel": "年間の週数",
      "taxLabel": "推定税率（%）",
      "rowHourly": "時給",
      "rowDaily": "日給（週5日）",
      "rowWeekly": "週給",
      "rowBiweekly": "隔週給",
      "rowMonthly": "月給",
      "rowAnnual": "年給",
      "payPeriodHeader": "給与期間",
      "grossPayHeader": "総支給額",
      "estNetPay": "推定手取り額",
      "taxWord": "税金"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "有効な開始時刻と終了時刻を入力してください。",
      "errorBreakRange": "休憩時間は0分〜1,440分の範囲で入力してください。",
      "errorEndEarlier": "終了時刻が開始時刻より前です。深夜をまたぐ場合は夜勤の繰り越しを有効にしてください。",
      "errorBreakExceeds": "休憩時間が合計経過時間を超えています。",
      "errorSumFields": "すべての期間の欄には0以上の数値を入力してください。",
      "betweenTab": "時刻間の経過時間",
      "sumTab": "勤務時間の合計",
      "startLabel": "開始時刻",
      "endLabel": "終了時刻",
      "breakLabel": "無給の休憩（分）",
      "overnightLabel": "終了時刻が開始時刻より前の場合、翌日として扱う（夜勤）",
      "netDuration": "正味の時間",
      "overnightTag": "（夜勤）",
      "decimalHours": "10進数の時間",
      "totalMinutes": "合計分数",
      "totalSeconds": "合計秒数",
      "hoursAbbr": "時間",
      "minutesAbbr": "分",
      "secondsAbbr": "秒",
      "labelHeader": "名称",
      "hoursHeader": "時間",
      "minutesHeader": "分",
      "secondsHeader": "秒",
      "removeButton": "削除",
      "removeAria": "削除",
      "addRowButton": "期間の行を追加",
      "morningSession": "午前のセッション",
      "afternoonSession": "午後のセッション",
      "segmentPrefix": "区間",
      "combinedTime": "合計時間（HH:MM:SS）",
      "dayEquivalent": "24時間換算の日数",
      "daysAbbr": "日"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "請求額をマイナスにすることはできません。",
      "errorTip": "チップ率は0%〜200%の範囲で入力してください。",
      "errorPeople": "人数は1人〜100人の範囲で入力してください。",
      "billLabel": "請求額（$）",
      "tipLabel": "チップ率（%）",
      "peopleLabel": "割り勘する人数",
      "presetsLabel": "チップのプリセット:",
      "roundingLabel": "端数処理:",
      "exactOption": "正確なセント単位",
      "totalUpOption": "合計額を切り上げ（$）",
      "perPersonUpOption": "1人あたりの金額を切り上げ（$）",
      "perPersonTotal": "1人あたりの合計",
      "includes": "含む",
      "tipEach": "1人あたりのチップ",
      "totalTip": "チップの合計",
      "effectiveRate": "実質レート:",
      "totalBill": "請求総額"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "換算する有効な数値を入力してください。",
      "errorAbsoluteZero": "温度は絶対零度未満にはできません（-273.15 °C / 0 K）。",
      "categoryNames": {
        "length": "長さ",
        "weight": "重さ・質量",
        "temperature": "温度",
        "area": "面積",
        "volume": "体積",
        "speed": "速度",
        "storage": "デジタルストレージ"
      },
      "unitLabels": {
        "mm": "ミリメートル",
        "cm": "センチメートル",
        "m": "メートル",
        "km": "キロメートル",
        "in": "インチ",
        "ft": "フィート",
        "yd": "ヤード",
        "mi": "マイル",
        "mg": "ミリグラム",
        "g": "グラム",
        "kg": "キログラム",
        "t": "トン",
        "oz": "オンス",
        "lb": "ポンド",
        "st": "ストーン",
        "C": "摂氏",
        "F": "華氏",
        "K": "ケルビン",
        "cm2": "平方センチメートル",
        "m2": "平方メートル",
        "ha": "ヘクタール",
        "km2": "平方キロメートル",
        "ft2": "平方フィート",
        "yd2": "平方ヤード",
        "acre": "エーカー",
        "mi2": "平方マイル",
        "mL": "ミリリットル",
        "L": "リットル",
        "m3": "立方メートル",
        "floz": "米液量オンス",
        "cup": "米カップ",
        "pt": "米パイント",
        "qt": "米クォート",
        "gal": "米ガロン",
        "ms": "メートル/秒",
        "kmh": "キロメートル/時",
        "mph": "マイル/時",
        "knot": "ノット",
        "fts": "フィート/秒",
        "B": "バイト",
        "KB": "キロバイト (10³)",
        "MB": "メガバイト (10⁶)",
        "GB": "ギガバイト (10⁹)",
        "TB": "テラバイト (10¹²)",
        "KiB": "キビバイト (2¹⁰)",
        "MiB": "メビバイト (2²⁰)",
        "GiB": "ギビバイト (2³⁰)"
      },
      "valueLabel": "値",
      "fromLabel": "換算元の単位",
      "toLabel": "換算先の単位",
      "swapAria": "単位を入れ替える",
      "swapTitle": "単位を入れ替える",
      "toWord": "＝",
      "copyResult": "結果をコピー",
      "unitHeader": "単位",
      "symbolHeader": "記号",
      "equivalentHeader": "換算値"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "金額をマイナスにすることはできません。",
      "errorRate": "税率は0%〜100%の範囲で入力してください。",
      "addTab": "税金を加算（税抜き → 税込み）",
      "removeTab": "税金を差し引く（税込み → 税抜き）",
      "commonRates": "よくある税率:",
      "netAmountLabel": "税抜き金額（$）",
      "grossAmountLabel": "税込み金額（$）",
      "rateLabel": "VAT・消費税率（%）",
      "netPrice": "税抜き価格",
      "taxAmount": "税額",
      "grossPrice": "税込み価格"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Base64にエンコード",
      "decodeTab": "Base64をデコード",
      "urlSafe": "URLセーフ（- と _）",
      "omitPadding": "末尾の = パディングを省略",
      "swap": "入れ替える",
      "decodeError": "デコードエラー:",
      "inputLabelEncode": "プレーンテキスト（UTF-8）",
      "inputLabelDecode": "Base64文字列",
      "inputPlaceholderEncode": "エンコードするテキストやJSONを入力...",
      "inputPlaceholderDecode": "標準またはURLセーフのBase64文字列を貼り付け...",
      "outputLabelEncode": "Base64出力",
      "outputLabelDecode": "デコードされたテキスト",
      "outputPlaceholder": "変換後の出力がここに表示されます...",
      "copyOutput": "出力をコピー",
      "invalidLength": "Base64文字列の長さが無効です。",
      "invalidInput": "無効なBase64入力、または壊れたUTF-8バイト列です。"
    },
    "tables": {
      "samplePlain": "UtilityFlow：UTF-8対応の安全なBase64エンコード ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "色を選択",
      "colorPickerAria": "カラーピッカー",
      "copyHex": "HEXをコピー",
      "copyRgb": "RGBをコピー",
      "copyHsl": "HSLをコピー",
      "contrastTitle": "WCAG 2.1コントラストチェック",
      "contrastDesc": "任意の背景色の上に前景色（{color}）を表示するプレビュー。",
      "backgroundLabel": "背景:",
      "bgAria": "コントラスト用の背景色",
      "sampleTitle": "本文とUIテキストのサンプル",
      "sampleSentence": "素早い茶色のキツネが怠け者の犬を飛び越える。",
      "aaNormal": "AA 通常テキスト（4.5:1以上）",
      "aaaNormal": "AAA 通常テキスト（7.0:1以上）",
      "aaLarge": "AA 大きなテキスト（3.0:1以上）",
      "pass": "合格",
      "fail": "不合格"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "5フィールドのCron式",
      "copyCron": "Cronをコピー",
      "humanTitle": "わかりやすい言葉でのスケジュール",
      "breakdownTitle": "フィールド別の内訳",
      "fieldMinute": "分（0〜59）",
      "fieldHour": "時（0〜23）",
      "fieldDom": "日（1〜31）",
      "fieldMonth": "月（1〜12）",
      "fieldDow": "曜日（0〜6）",
      "nextRuns": "次の{count}回の予定実行（現地時間）",
      "noRuns": "今後366日以内に一致する実行は見つかりませんでした。",
      "fieldsError": "標準のCronは5フィールド（分 時 日 月 曜日）が必要です。見つかったのは{count}フィールドです。",
      "emptySegment": "「{token}」に空のセグメントがあります",
      "invalidStep": "「{token}」のステップ「{step}」が無効です",
      "outOfRange": "「{token}」の値が範囲外です（{min}〜{max}）",
      "invalidCron": "無効なCron式です。",
      "everyMinutes": "{n}分ごと",
      "minuteZeroHour": "毎時0分",
      "atTime": "{time}に",
      "atFields": "{a}、{b}に",
      "dayEveryDay": "毎日",
      "dayWeekdays": "平日（月〜金）",
      "dayOfMonth": "毎月{day}日",
      "dayDow": "{dow}",
      "dayBoth": "{day}日または{dow}",
      "monthIn": "{months}に"
    },
    "tables": {
      "presets": [
        {
          "label": "5分ごと",
          "expr": "*/5 * * * *"
        },
        {
          "label": "毎時",
          "expr": "0 * * * *"
        },
        {
          "label": "毎日深夜0時",
          "expr": "0 0 * * *"
        },
        {
          "label": "平日の9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "毎月1日の8:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "日曜日",
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日"
      ],
      "monthLabels": [
        "",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      "unitWords": {
        "minute": "分",
        "hour": "時間",
        "day": "日",
        "month": "月",
        "weekday": "曜日"
      },
      "unitPlurals": {
        "minute": "分",
        "hour": "時間",
        "day": "日",
        "month": "月",
        "weekday": "曜日"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSSを最小化",
      "beautifyTab": "CSSを整形",
      "inputLabel": "入力CSS",
      "bytesLabel": "バイト",
      "inputPlaceholder": "CSSルールやスタイルシートをここに貼り付けてください...",
      "outputLabelMinify": "最小化されたCSS",
      "outputLabelBeautify": "整形されたCSS",
      "outputPlaceholder": "処理後のCSSがここに表示されます...",
      "copyCss": "CSSをコピー"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "テキスト入力",
      "fileTab": "ローカルファイルのチェックサム",
      "uppercaseHex": "16進数を大文字で表示",
      "inputLabel": "入力文字列（UTF-8）",
      "inputPlaceholder": "テキストを入力してSHA-1、SHA-256、SHA-384、SHA-512ハッシュを計算...",
      "chooseFileLabel": "ハッシュ化するローカルファイルを選択",
      "fileNoteDefault": "ファイルはブラウザのメモリ上でローカルに読み込まれ、アップロードされることはありません。",
      "bytesLabel": "バイト",
      "cryptoUnavailable": "Web Cryptoハッシュは利用できません。",
      "sampleText": "こんにちは、UtilityFlow！"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "エンティティにエンコード",
      "decodeTab": "エンティティをデコード",
      "encodeNonAscii": "非ASCII文字をエンコード（&#...;）",
      "swap": "入れ替える",
      "inputLabelEncode": "生のHTML / テキスト",
      "inputLabelDecode": "HTMLエンコードされた文字列",
      "inputPlaceholderEncode": "<p>HTMLタグや特殊文字をここに入力...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;エンコードされたエンティティをここに貼り付け...&lt;/p&gt;",
      "outputLabelEncode": "エンコードされたエンティティ",
      "outputLabelDecode": "デコードされたテキスト",
      "outputPlaceholder": "変換されたエンティティがここに表示されます..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JSを最小化",
      "beautifyTab": "JSを整形",
      "indentLabel": "インデント:",
      "indent2": "スペース2つ",
      "indent4": "スペース4つ",
      "inputLabel": "JavaScript / TypeScript入力",
      "bytesLabel": "バイト",
      "inputPlaceholder": "JavaScriptまたはTypeScriptのスニペットを貼り付けてください...",
      "outputLabelMinify": "最小化された出力",
      "outputLabelBeautify": "整形された出力",
      "outputPlaceholder": "整形されたJavaScriptがここに表示されます...",
      "copyCode": "コードをコピー"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "区切り文字:",
      "commaOpt": "カンマ（,）",
      "semicolonOpt": "セミコロン（;）",
      "tabOpt": "タブ（TSV）",
      "conversionError": "変換エラー:",
      "inputLabelJson": "JSON入力",
      "inputLabelCsv": "CSV入力",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"サンプル\"}]",
      "inputPlaceholderCsv": "id,name\n1,サンプル",
      "outputLabelCsv": "CSV出力",
      "outputLabelJson": "JSON出力",
      "outputPlaceholder": "変換されたデータがここに表示されます...",
      "parseFallback": "入力形式を解析できませんでした。"
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "スペース2つ",
      "indent4": "スペース4つ",
      "indentTab": "タブ",
      "indentMinify": "最小化",
      "sortKeys": "キーをA〜Z順に並べ替え",
      "validJson": "有効なJSON",
      "keysLabel": "キー",
      "depthLabel": "深さ",
      "bytesLabel": "バイト",
      "invalidJson": "無効なJSON:",
      "invalidJsonSyntax": "無効なJSON構文",
      "lineCol": "行{line}、列{col}",
      "inputLabel": "生JSON入力",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "整形された出力",
      "outputPlaceholder": "整形・検証済みのJSONがここに表示されます...",
      "copyJson": "JSONをコピー"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Base64Urlヘッダーとペイロードをブラウザのメモリ上でローカルにデコードします。暗号署名の検証は行いません。",
      "loadSampleJwt": "サンプルJWTを読み込む",
      "inputLabel": "エンコードされたJWTトークン",
      "inputPlaceholder": "JWTトークンを貼り付けて（eyJhbGciOi...）、ヘッダーとクレームを確認...",
      "invalidJwt": "無効なJWT:",
      "headerLabel": "ヘッダー（アルゴリズムとタイプ）",
      "payloadLabel": "ペイロード（クレーム）",
      "copyHeader": "ヘッダーをコピー",
      "copyPayload": "ペイロードをコピー",
      "timestampTitle": "タイムスタンプクレーム",
      "iatLabel": "発行日時（iat）",
      "nbfLabel": "有効開始日時（nbf）",
      "expLabel": "有効期限（exp）",
      "expired": "期限切れ",
      "active": "有効（未期限切れ）",
      "signatureLabel": "署名セグメント（Base64Url）",
      "invalidB64Url": "Base64Urlセグメントの長さが無効です。",
      "segmentCount": "JWTはドットで区切られた3つのセグメント（ヘッダー.ペイロード.署名）が必要です。{count}個見つかりました。",
      "parseFallback": "JWTのBase64Url JSONセグメントを解析できませんでした。"
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "正規表現パターン",
      "patternPlaceholder": "正規表現パターンを入力...",
      "flagsLabel": "フラグ:",
      "syntaxError": "構文エラー:",
      "testStringLabel": "テスト文字列",
      "testPlaceholder": "パターンをテストするサンプルテキストをここに貼り付けてください...",
      "highlightedMatches": "ハイライトされた一致",
      "matchSingular": "件の一致",
      "matchPlural": "件の一致",
      "highlightEmpty": "一致がここにリアルタイムでハイライトされます...",
      "capturedTitle": "キャプチャされた一致",
      "matchLabel": "一致",
      "indexLabel": "インデックス",
      "groupsLabel": "グループ:",
      "noMatches": "一致が見つかりませんでした。",
      "replaceLabel": "置換テンプレートのプレビュー",
      "replacePlaceholder": "例：$1 [at] $2",
      "invalidRegex": "無効な正規表現です。"
    },
    "tables": {
      "sampleText": "メイン連絡先: support@utilityflow.online\n請求チーム: billing@example.org\n無効なメール: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g（グローバル）"
        },
        {
          "flag": "i",
          "label": "i（大文字と小文字を区別しない）"
        },
        {
          "flag": "m",
          "label": "m（複数行）"
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
      "beautify": "整形",
      "minify": "最小化",
      "uppercaseKw": "キーワードを大文字に",
      "lowercaseKw": "小文字",
      "indentLabel": "インデント:",
      "indent2": "スペース2つ",
      "indent4": "スペース4つ",
      "inputLabel": "生のSQLクエリ",
      "inputPlaceholder": "SQLクエリを貼り付けてください（SELECT、INSERT、UPDATE、JOIN...）...",
      "outputLabel": "整形されたSQL",
      "outputPlaceholder": "整形されたSQLがここに表示されます...",
      "copySql": "SQLをコピー"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "現在のUnixタイムスタンプ（秒）",
      "useCurrent": "現在の時刻を使う",
      "copyEpoch": "エポックをコピー",
      "converter1Label": "Unixタイムスタンプ → 読みやすい日付",
      "epochPlaceholder": "例：1794544800",
      "unitAuto": "自動",
      "unitSeconds": "秒",
      "unitMilliseconds": "ミリ秒",
      "errorNotNumeric": "有効な数値のUnixタイムスタンプを入力してください。",
      "errorOutOfRange": "タイムスタンプが有効なJavaScript日付の範囲外です。",
      "isoLabel": "ISO 8601（UTC）",
      "localLabel": "現地時間",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "相対時間",
      "converter2Label": "現地の日付と時刻 → Unixタイムスタンプ",
      "secondsLabel": "秒",
      "millisecondsLabel": "ミリ秒",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "エンコード",
      "decode": "デコード",
      "encodeUriPreserve": "encodeURI（://?& を保持）",
      "swap": "入れ替える",
      "urlError": "URLエラー:",
      "inputLabel": "入力文字列またはURL",
      "inputPlaceholder": "URL、クエリ文字列、パラメータ値を貼り付けてください...",
      "outputLabelEncode": "エンコードされた出力",
      "outputLabelDecode": "デコードされた出力",
      "outputPlaceholder": "エンコードまたはデコードされたURLがここに表示されます...",
      "parsedTitle": "解析されたURLの内訳",
      "protocol": "プロトコル",
      "host": "ホスト",
      "pathname": "パス",
      "hash": "ハッシュ",
      "noneValue": "（なし）",
      "queryParam": "クエリパラメータ",
      "decodedValue": "デコードされた値",
      "malformed": "不正なパーセントエンコーディングです。"
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUIDバージョン",
      "v4": "v4（ランダム）",
      "v7": "v7（時刻順）",
      "quantity": "数量（1〜100）",
      "generate": "UUIDを生成",
      "uppercase": "大文字",
      "includeHyphens": "ハイフンを含める",
      "wrapBraces": "{波括弧}で囲む",
      "generatedLabel": "生成されたUUID",
      "copyAll": "すべてコピー"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "白地にインディゴ",
      "presetSlate": "スレートのインク",
      "presetEmerald": "エメラルドのバッジ",
      "presetDark": "ダークモード",
      "swapColors": "色を入れ替える",
      "fgTitle": "前景色 / テキスト色",
      "bgTitle": "背景色",
      "copyHex": "HEXをコピー",
      "pickerSuffix": "カラーピッカー",
      "hexInputSuffix": "HEX入力",
      "contrastRatioLabel": "WCAG 2.1コントラスト比",
      "checkAaNormal": "WCAG AA 通常テキスト",
      "checkAaLarge": "WCAG AA 大きなテキスト / UI",
      "checkAaaNormal": "WCAG AAA 通常テキスト",
      "checkAaaLarge": "WCAG AAA 大きなテキスト",
      "pass": "合格",
      "fail": "不合格",
      "livePreviewLabel": "アクセシビリティのライブプレビュー",
      "previewHeading": "明確なタイポグラフィは、どんな画面サイズでも楽に読めます。",
      "previewBody": "通常の本文（14〜16px）はWCAGレベルAAで最低4.5:1、AAAで7.0:1のコントラスト比が必要です。大きな見出し（18pt以上、または太字14pt以上）は最低3.0:1が必要です。",
      "outlinedControl": "枠線付きUI要素",
      "hexOnHex": "{bg}上の{fg}",
      "extractTitle": "画像からカラーパレットを抽出",
      "extractBody": "スクリーンショット、ロゴ、写真をアップロードすると、主要なHEXカラースウォッチをコントラストチェックに直接取り込めます。",
      "appliesToLabel": "スウォッチのクリック対象:",
      "foregroundBtn": "前景",
      "backgroundBtn": "背景",
      "selectImage": "スウォッチ抽出用の画像を選択",
      "loadedReplace": "読み込み済み: {name}（他の画像をアップロード）",
      "selectImageError": "PNG、JPG、WebP、GIFの画像を選択してください。",
      "unableToRead": "「{name}」を読み取れませんでした。",
      "canvasUnavailable": "Canvas 2Dコンテキストが利用できません。",
      "transparentImage": "画像が完全に透明のようです。",
      "unableToExtract": "パレットを抽出できませんでした。",
      "areaPercent": "約{n}%の面積"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 ブラウザタブ",
        "taskbar": "32×32 タスクバー / HiDPI",
        "desktopShortcut": "48×48 デスクトップショートカット",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWAスプラッシュ"
      },
      "monogramMode": "モノグラムバッジビルダー",
      "imageMode": "ロゴ画像をアップロード",
      "lettersLabel": "テキスト / イニシャル（1〜3文字）",
      "cornerShapeLabel": "角の形状",
      "roundedSquare": "角丸の正方形",
      "circle": "円",
      "sharpSquare": "角のある正方形",
      "square": "正方形",
      "bgColorLabel": "背景色",
      "textColorLabel": "テキスト色",
      "chooseLogo": "PNG、JPG、WebP、SVGのロゴを選択",
      "loadedReplace": "読み込み済み: {name}（クリックして置き換え）",
      "cropMaskLabel": "切り抜きマスク",
      "unableToRead": "「{name}」を読み取れませんでした。",
      "canvasUnavailable": "Canvas 2Dコンテキストが利用できません。",
      "failedEncode": "ファビコンPNGをエンコードできませんでした。",
      "unableToGenerate": "ファビコンを作成できませんでした。",
      "icoBundleTitle": "マルチサイズfavicon.icoパッケージ（16px + 32px + 48px）",
      "icoBundleBody": "標準準拠のバイナリ.icoファイル。ウェブサイトの/public/フォルダ直下に配置できます",
      "downloadIco": "favicon.icoをダウンロード",
      "faviconPreviewAlt": "32×32ファビコンプレビュー",
      "iconAlt": "アイコン {size}×{size}",
      "htmlTagsLabel": "HTMLの<head>リンクタグ",
      "copyHtml": "HTMLをコピー"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "暗号チェックサムを計算する任意のファイルを選択",
      "fileWithSize": "{name}（{size}）",
      "hashedLocally": "Web Crypto APIでローカルにハッシュ化 ・ ファイルのアップロードなし（500MB未満を推奨）",
      "cryptoUnavailable": "Web CryptoのSubtleCrypto APIはこのブラウザ環境では利用できません。",
      "hashFailed": "ファイルをブラウザのメモリ上でハッシュ化できませんでした（数百MBを超えるファイルはメモリ制限を超える場合があります）。",
      "computing": "SHA-1、SHA-256、SHA-384、SHA-512チェックサムをローカルで計算中...",
      "fileLabel": "ファイル:",
      "sizeLabel": "サイズ:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "更新日時:",
      "bytesSuffix": "{n}バイト",
      "downloadSha256": ".sha256をダウンロード",
      "sha256Label": "SHA-256（推奨）",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1（旧式互換性のみ）",
      "verifyLabel": "想定されるチェックサムと照合",
      "expectedPlaceholder": "公開されているSHA-256、SHA-512、SHA-384、SHA-1チェックサムを貼り付けてください（または.sha256sumの行）...",
      "verified": "チェックサムが確認されました！ファイルは想定される{algorithm}ダイジェストと完全に一致します。",
      "mismatch": "チェックサムが一致しません！計算されたダイジェストはどれも想定値と一致しません。"
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "圧縮する画像を選択（PNG / JPG / WebP）",
      "fileWithDims": "{name}（{w}×{h}・{size}）",
      "processedLocally": "HTML5 Canvasでローカルに処理 ・ リモートサーバーへのアップロードは一切なし",
      "uploadImageError": "PNG、JPG、WebP、GIFの画像ファイルをアップロードしてください。",
      "unableToDecode": "「{name}」をデコードできませんでした。",
      "canvasUnavailable": "Canvas 2Dコンテキストが利用できません。",
      "compressionFailed": "ブラウザCanvasでの圧縮に失敗しました。",
      "unableToCompress": "画像を圧縮できませんでした。",
      "unableToRead": "「{name}」を読み取れませんでした。",
      "invalidImage": "無効な画像ファイルです。",
      "outputFormatLabel": "出力形式",
      "webpOption": "WebP（最も小さい最新のWebサイズ）",
      "jpgOption": "JPG（最も広い互換性）",
      "pngOption": "PNG（ロスレスの透明度）",
      "maxWidthLabel": "最大幅",
      "keepOriginalWidth": "元の幅を保持",
      "max1920": "最大1920px（フルHD）",
      "max1280": "最大1280px（ブログ / ヒーロー）",
      "max800": "最大800px（サムネイル）",
      "qualityLabel": "品質: ",
      "losslessPng": "ロスレスPNG",
      "originalLabel": "元画像",
      "compressedLabel": "圧縮後",
      "changeLabel": "変化",
      "outputSummary": "出力: {w} × {h} px・{ext}",
      "compressing": "圧縮中...",
      "downloadExt": ".{ext}をダウンロード",
      "previewAlt": "圧縮後の画像プレビュー"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "変換する画像を1枚以上選択",
      "imagesLoaded": "{n}枚の画像を読み込みました — クリックして追加または置き換え",
      "batchNote": "PNG、JPG、WebP、SVG、GIFをローカルでまとめてPNG、JPG、WebPに変換",
      "convertToLabel": "変換先の形式",
      "pngOption": "PNG（.png — 透明度を保持）",
      "qualityLabel": "品質（非可逆）: ",
      "lossless": "ロスレス",
      "alphaFillLabel": "アルファ塗りつぶし",
      "converting": "変換中...",
      "reconvert": "再変換",
      "selectFilesError": "画像ファイルを1つ以上選択してください（PNG、JPG、WebP、SVG、GIF）。",
      "couldNotDecode": "「{name}」をデコードできませんでした。",
      "canvasUnavailable": "Canvas 2Dが利用できません。",
      "conversionFailed": "「{name}」の変換に失敗しました。",
      "batchFailed": "画像の一括変換に失敗しました。",
      "downloadExt": ".{ext}をダウンロード"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "サイズ変更やプリセット寸法への切り抜きをする画像を選択",
      "fileWithDims": "{name}（元画像: {w} × {h} px）",
      "supportsNote": "ピクセル単位のサイズ変更、アスペクト比の固定、中央切り抜きのソーシャルメディア用プリセットに対応",
      "selectImageError": "PNG、JPG、WebP、GIFの画像を選択してください。",
      "unableToDecode": "「{name}」をデコードできませんでした。",
      "unableToRead": "画像を読み取れませんでした。",
      "failedLoading": "サイズ変更のために画像を読み込めませんでした。",
      "canvasUnavailable": "Canvas 2Dが利用できません。",
      "failedGenerating": "サイズ変更後の画像を生成できませんでした。",
      "resizeFailed": "サイズ変更に失敗しました。",
      "quickPresets": "クイックプリセット:",
      "presetOg": "OGシェア（1200×630）",
      "presetYoutube": "YouTube HD（1280×720）",
      "presetSquare": "正方形（1080×1080）",
      "presetAvatar": "アバター（512×512）",
      "widthLabel": "幅（px）",
      "heightLabel": "高さ（px）",
      "fitModeLabel": "フィットモード",
      "coverCropOption": "中央カバー切り抜き（歪みなし）",
      "exactOption": "正確な寸法に拡大縮小",
      "outputFormatLabel": "出力形式",
      "lockAspect": "寸法の入力時に元のアスペクト比を固定",
      "resizeButton": "{w} × {h} pxにサイズ変更",
      "readySummary": "完了: {w} × {h} px（{ext}）",
      "downloadResized": "サイズ変更した画像（.{ext}）をダウンロード",
      "previewAlt": "サイズ変更後の画像の出力"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "回転、反転、フィルターを適用する画像を選択",
      "loadedReplace": "{name}（クリックして置き換え）",
      "previewNote": "リアルタイムHTML5 Canvasプレビュー＆ピクセルエクスポート",
      "selectImageError": "PNG、JPG、WebP、GIFの画像を選択してください。",
      "failedLoading": "「{name}」を読み込めませんでした。",
      "rotateLeft": "左に90°回転",
      "rotateRight": "右に90°回転",
      "flipHorizontal": "左右反転",
      "flipVertical": "上下反転",
      "brightnessLabel": "明るさ: ",
      "contrastLabel": "コントラスト: ",
      "grayscaleLabel": "白黒（グレースケール）",
      "resetAll": "すべてリセット",
      "exportFormatLabel": "エクスポート形式",
      "livePreview": "ライブCanvasプレビュー"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "画像 → Base64データURI",
      "decodeMode": "Base64 → 画像プレビュー",
      "selectImageError": "画像ファイルを選択してください（PNG、JPG、WebP、SVG、GIF、ICO）。",
      "unableToRead": "「{name}」を読み取れませんでした。",
      "chooseImage": "エンコードする画像ファイルを選択",
      "fileWithSize": "{name}（{size}）",
      "generatesNote": "データURI、生のBase64、HTML <img>、CSS背景スニペットを生成",
      "binarySizeLabel": "バイナリファイルサイズ",
      "base64SizeLabel": "Base64 URIサイズ（約33%大きい）",
      "fullDataUriLabel": "完全なデータURI",
      "copyDataUri": "データURIをコピー",
      "copyRawBase64": "生のBase64をコピー",
      "copyImg": "<img>をコピー",
      "copyCss": "CSSをコピー",
      "encodedAria": "エンコードされたBase64データURI",
      "encodedAlt": "エンコードされたプレビュー",
      "pasteLabel": "Base64画像文字列またはデータURIを貼り付け",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... または生のBase64文字列",
      "invalidPayload": "貼り付けたBase64テキストは有効なエンコード済み画像ペイロードではありません。",
      "decodedAlt": "デコードされたBase64プレビュー",
      "downloadExt": ".{ext}をダウンロード"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "非常に強い",
        "strong": "強い",
        "moderate": "普通",
        "weak": "弱い"
      },
      "randomPasswordMode": "ランダムパスワード",
      "passphraseMode": "Dicewareパスフレーズ",
      "regenerate": "再生成",
      "passwordLengthLabel": "パスワードの長さ: ",
      "charsSuffix": " 文字",
      "batchCountLabel": "一括生成数: ",
      "uppercaseLabel": "大文字（A–Z）",
      "lowercaseLabel": "小文字（a–z）",
      "numbersLabel": "数字（0–9）",
      "symbolsLabel": "記号（!@#$%...）",
      "excludeAmbiguousLabel": "紛らわしい文字を除外（0、O、1、l、I）",
      "wordCountLabel": "単語数: ",
      "wordSeparatorLabel": "単語の区切り文字",
      "hyphenOption": "ハイフン（-）",
      "underscoreOption": "アンダースコア（_）",
      "periodOption": "ピリオド（.）",
      "spaceOption": "スペース（ ）",
      "capitalizeWordsLabel": "単語の頭文字を大文字にする",
      "appendDigitLabel": "2桁の数字を追加",
      "selectGroupWarning": "パスワードを生成するには、少なくとも1つの文字グループを選択してください。",
      "entropyBits": "約{n}ビットのエントロピー",
      "poolSizeSuffix": " ・ 文字プール{n}",
      "wordListSuffix": " ・ {n}語の単語リスト",
      "copyAll": "すべてコピー"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "ウェブサイトURL",
        "text": "テキスト",
        "wifi": "Wi-Fi設定",
        "vcard": "vCard連絡先",
        "email": "メールアドレス",
        "phone": "電話番号",
        "plainText": "プレーンテキスト"
      },
      "liveCameraCapture": "ライブカメラ撮影",
      "scanMode": "QR画像をスキャン / デコード",
      "vcardMode": "vCard連絡先QRビルダー",
      "uploadQr": "QRコード画像をアップロード",
      "uploadQrNote": "PNG、JPG、WebP、SVGスクリーンショット ・ 100%クライアントサイド",
      "liveCameraTitle": "デバイスカメラによるライブスキャン",
      "liveCameraNote": "許可された場合のみローカルカメラフィードを使用",
      "startCamera": "カメラスキャナーを開始",
      "stopCamera": "カメラを停止",
      "cameraHint": "カメラをQRコードにかざしてください。デコードされると自動的に停止します。",
      "uploadImageError": "QRコードを含むPNG、JPG、WebP、SVG画像をアップロードしてください。",
      "unableToLoad": "「{name}」を読み込めませんでした。",
      "noQrDetected": "この画像ではQRコードを検出できませんでした。ピントを合わせ、クワイエットゾーンの余白を確保し、コントラストを高くしてください。",
      "unableToScan": "画像をスキャンできませんでした。",
      "cameraUnsupported": "このブラウザ環境ではカメラスキャンはサポートされていません。",
      "cameraDenied": "カメラの許可が拒否されたか、カメラデバイスが利用できません。代わりにQRコード画像をアップロードしてください。",
      "decodedPayload": "デコードされたペイロード ・ {kind}",
      "sourceLabel": "出典: ",
      "copyPayload": "ペイロードをコピー",
      "decodedAria": "デコードされたQRテキスト",
      "detectedLink": "検出されたウェブリンク: ",
      "uploadedPreviewAlt": "アップロードされたQRコードのプレビュー",
      "firstNameLabel": "名",
      "lastNameLabel": "姓",
      "orgLabel": "組織",
      "jobTitleLabel": "役職",
      "defaultJobTitle": "プロダクトデザイナー",
      "phoneLabel": "電話番号",
      "emailLabel": "メールアドレス",
      "websiteLabel": "ウェブサイトURL",
      "rawVcardLabel": "生のvCard 3.0ペイロード",
      "copyVcard": "vCardをコピー",
      "vcardQrAlt": "生成されたvCard QRコード",
      "downloadPng": "PNGをダウンロード",
      "downloadSvg": "SVGをダウンロード"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "短い",
          "ratio": "元の長さの約10〜20%"
        },
        "medium": {
          "label": "中程度",
          "ratio": "元の長さの約30〜40%"
        },
        "detailed": {
          "label": "長い（詳細）",
          "ratio": "元の長さの約50〜60%"
        }
      },
      "loadingLengthLabels": {
        "short": "短い",
        "medium": "中程度の",
        "detailed": "長い"
      },
      "formatOptions": {
        "paragraph": {
          "label": "段落要約",
          "hint": "流れるような一続きの文章"
        },
        "bullets": {
          "label": "箇条書き要約",
          "hint": "見やすい箇条書き"
        },
        "key-points": {
          "label": "要点を抽出",
          "hint": "番号付きの重要なポイント"
        },
        "simple": {
          "label": "やさしい言葉",
          "hint": "日常的でシンプルな言葉"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "段落",
        "bullets": "箇条書き",
        "key-points": "要点",
        "simple": "やさしい言葉"
      },
      "languageLabels": {
        "Same as original language": "原文と同じ言語",
        "English (US)": "英語（米国）",
        "English (UK)": "英語（英国）",
        "Spanish": "スペイン語",
        "French": "フランス語",
        "German": "ドイツ語",
        "Portuguese": "ポルトガル語",
        "Italian": "イタリア語",
        "Dutch": "オランダ語",
        "Arabic": "アラビア語",
        "Hindi": "ヒンディー語",
        "Urdu": "ウルドゥー語",
        "Turkish": "トルコ語",
        "Japanese": "日本語",
        "Korean": "韓国語",
        "Chinese (Simplified)": "中国語（簡体字）"
      },
      "sampleArticle": "2026年、分散型のプロダクト開発チームは、集中して開発に取り組む時間を守るため、毎日の進捗ミーティングの代わりに非同期の書面による更新をますます採用しています。ロンドン、ベルリン、トロントに拠点を置く140人のエンジニアを対象とした6か月間の社内調査では、週3回の同期ミーティングを火曜日と木曜日の構造化された書面要約に置き換えたチームが、カレンダーの断片化を28%削減し、スプリントのマイルストーンを14%速く達成したと報告しました。重要なのは、書面による更新が機能したのは、エンジニアが3つの一貫したルールを守った場合に限られたことです。つまり、具体的なブロッカーを一番上に記載し、プルリクエストや課題IDに直接リンクし、「まもなく」といった曖昧な表現ではなく正確な目標日を記載することです。マネージャーは、オープンなアーキテクチャの検討とチームのチェックインのみを目的とした週1回25分のライブセッションを維持し、コーディングの集中時間を妨げることなく対面でのやり取りを保ちました。",
      "secUnit": "秒",
      "minUnit": "分",
      "title": "無料AIテキスト要約ツール",
      "noAccount": "アカウント不要、クレジット不要、登録不要",
      "allowanceBefore": "1日の無料枠:",
      "allowanceAfter": "本日残り",
      "allowanceFallback": "1日あたり最大5回の無料要約",
      "backendTitle": "この環境ではAIバックエンドキーがまだ有効になっていません。",
      "backendEnsureBefore": "ライブAI要約を実行するには、",
      "backendEnsureAfter": "が設定されていることを確認してください。",
      "stepLength": "1. 要約の長さ",
      "stepFormat": "2. 要約の形式",
      "stepLanguage": "3. 出力言語",
      "stepText": "4. 要約する元のテキスト",
      "lengthAria": "要約の長さ",
      "paste": "貼り付け",
      "clipboardUnavailable": "ブラウザのクリップボード読み取りはここでは利用できません。エディタでCtrl/Cmd + Vを使ってください。",
      "clipboardEmpty": "クリップボードにテキストがありません。",
      "clipboardBlocked": "クリップボードの許可がブロックされました。Ctrl/Cmd + Vでテキストを直接貼り付けてください。",
      "placeholder": "記事、調査メモ、会議の議事録、エッセイをここに貼り付けてください（最低25単語 / 120文字、最大25,000文字）...",
      "word": "単語",
      "words": "単語",
      "chars": "文字",
      "estRead": "推定読了時間: ",
      "stop": "停止",
      "summarizing": "要約中...",
      "summarizeButton": "テキストを要約",
      "addMoreBefore": "あと",
      "addMoreMiddle": "単語以上追加してください（最低",
      "addMoreAnd": "単語と",
      "addMoreAfter": "文字）。AIが意味のある要約を作成できるようになります。",
      "generatingSummary": "{length}の要約を{format}形式で作成中...",
      "errorDailyLimit": "1日の無料要約の上限に達しました",
      "errorRateLimited": "少しゆっくりお試しください",
      "errorGlobal": "1日のプラットフォーム容量に達しました",
      "errorGeneric": "現在要約できません",
      "retry": "再試行",
      "emptyError": "要約する前に、記事、レポート、メモを貼り付けるか入力してください。",
      "tooShortErrorBefore": "テキストが短すぎて意味のある要約を作成できません（",
      "tooShortErrorMiddle": "単語）。最低",
      "tooShortErrorAnd": "単語と",
      "tooShortErrorAfter": "文字を入力してください。",
      "overLimitBefore": "入力が",
      "overLimitMiddle": "文字の上限を超えています。テキストを",
      "overLimitAfter": "文字短くして、もう一度お試しください。",
      "connectionError": "要約中の一時的な接続の問題です。もう一度お試しください。",
      "resultTitle": "要約結果",
      "shorterSuffix": "%短縮",
      "copySummary": "要約をコピー",
      "downloadTxt": "TXTをダウンロード",
      "originalRead": "元の読了時間",
      "summaryRead": "要約の読了時間",
      "compressionSaved": "圧縮率と節約時間",
      "savesPrefix": "約",
      "tabCompare": "原文と要約の比較",
      "tabSummary": "要約のみ",
      "resultAria": "生成された要約と比較",
      "originalText": "原文",
      "summaryOutput": "要約の出力",
      "summarizedWith": "無料のGroqモデルで要約",
      "fallbackNote": "（自動モデルフォールバック）",
      "preservedNote": "。重要な名前、日付、数字は入力内容から厳密に引き継がれます。"
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "画像を100KB以下に縮小",
          "query": "画像サイズを100KBに縮小したいです。",
          "categoryId": "image-file"
        },
        {
          "label": "PDFを画像に変換",
          "query": "PDFを画像に変換する必要があります。",
          "categoryId": "pdf"
        },
        {
          "label": "エッセイの単語数を数える",
          "query": "エッセイの単語数を数えたいです。",
          "categoryId": "text-writing"
        },
        {
          "label": "QRコードを生成",
          "query": "QRコードを生成する必要があります。",
          "categoryId": "social-media"
        },
        {
          "label": "画像の寸法を変更",
          "query": "画像の寸法を変更したいです。",
          "categoryId": "image-file"
        },
        {
          "label": "文法を修正してメールを書き直す",
          "query": "AIに文法ミスを修正して、メールをプロフェッショナルに書き直してほしいです。",
          "categoryId": "text-writing"
        },
        {
          "label": "長い記事を要約",
          "query": "長い記事を箇条書きで要約する必要があります。",
          "categoryId": "text-writing"
        },
        {
          "label": "PDFからWordへの変換チェック",
          "query": "PDFをWordに変換する必要があります。",
          "categoryId": "all"
        }
      ],
      "title": "AI搭載ツールファインダー",
      "searchesLine": "{count}件の実際のUtilityFlowツールから検索（ブラウザツール85件 + AIツール2件）",
      "aiSearchesToday": "本日のAI検索:",
      "leftUnlimited": "残り ・ 即時ローカル検索は無制限",
      "quotaFallback": "1日最大10回の無料AI検索 ・ ローカル検索は無制限",
      "backendBefore": "AIによるセマンティックランキングには、サーバー上の",
      "backendAfter": "が必要です。一方、即時のローカルキーワード検索は{count}件すべてのツールで直接機能します。",
      "queryLabel": "やりたいことを説明してください（日常的な言葉でもキーワードでも可）",
      "queryPlaceholder": "例:「画像サイズを100KBに縮小したいです」または「PDFをPNGに変換」",
      "categoryLabel": "任意のタスクカテゴリ",
      "allCategories": "すべてのカテゴリ（{count}件のツール）",
      "characters": "文字",
      "findButton": "ぴったりのツールを見つける",
      "findingButton": "最適なツールを検索中...",
      "tryTask": "実際のタスクを試すか、よくある質問から選んでください",
      "loadingLine": "{count}件の検証済みUtilityFlowツールと照合しています...",
      "errorTitle": "AIセマンティックランキングは利用できません",
      "retryAi": "AIを再試行",
      "describeError": "解決したいタスクや問題を説明してください（最低2文字）。",
      "queryTooLongBefore": "クエリが",
      "queryTooLongAfter": "文字を超えています。説明を短くしてください。",
      "unexpectedFormat": "AIが予期しない形式を返しました。下に実際の在庫からの高速キーワード一致を表示します。",
      "contactError": "AIランキングへの接続に一時的な問題が発生しました。下のキーワード検索結果は引き続き有効です。",
      "bestTool": "最適な推奨ツール",
      "noExact": "現在、完全に一致するツールはありません",
      "noMatchFallback": "UtilityFlowには現在、「{query}」を直接実行する専用ツールはありません。偽のツールやリンクを作ることは決してありません。",
      "relevantAlt": "関連する代替ツール",
      "relatedTools": "関連する既存ツール（部分的なワークフローのみ）",
      "supportedPrefix": "対応: ",
      "openName": "{name}を開く",
      "matchedWith": "無料のGroqモデルで検証済みUtilityFlow在庫と照合",
      "fallbackNote": "（自動フォールバック）",
      "instantMatches": "即時キーワード一致（{count}件）",
      "matchedLocally": "{count}件のツールからローカルで照合",
      "matchedPrefix": "一致: ",
      "suggestionsTitle": "スマートな提案",
      "suggestionsAll": "人気のタスクから",
      "suggestionsCategory": "選択したカテゴリ内",
      "clickOpen": "ツールをクリックして直接開く",
      "openToolArrow": "ツールを開く →",
      "recommendationsAria": "AIツールのおすすめ",
      "instantAria": "即時キーワード一致",
      "suggestionsAria": "ページ読み込み時のスマートな提案ツール"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "文法を修正",
          "hint": "文法と句読点を修正"
        },
        "rewrite-text": {
          "label": "テキストを書き直す",
          "hint": "流れをスムーズにし、自然な表現に"
        },
        "improve-writing": {
          "label": "文章を改善",
          "hint": "明確さと言葉選びを磨く"
        },
        "make-professional": {
          "label": "プロフェッショナルな表現に",
          "hint": "仕事や経営層向けの明確さ"
        },
        "make-casual": {
          "label": "カジュアルな表現に",
          "hint": "リラックスした日常の言葉"
        },
        "simplify-text": {
          "label": "テキストをシンプルに",
          "hint": "明確で読みやすい文に"
        },
        "expand-text": {
          "label": "テキストを拡張",
          "hint": "入力内容から役立つ詳細を追加"
        },
        "paraphrase": {
          "label": "言い換える",
          "hint": "同じ意味で新しい表現に"
        },
        "fix-spelling": {
          "label": "スペルを修正",
          "hint": "タイプミスと大文字のみを修正"
        },
        "write-email": {
          "label": "メールを書く",
          "hint": "件名付きの構造化されたメール"
        }
      },
      "tones": {
        "professional": "プロフェッショナル",
        "friendly": "フレンドリー",
        "formal": "フォーマル",
        "casual": "カジュアル",
        "academic": "アカデミック",
        "persuasive": "説得力のある",
        "simple": "シンプル"
      },
      "languageLabels": {
        "English (US)": "英語（米国）",
        "English (UK)": "英語（英国）",
        "Spanish": "スペイン語",
        "French": "フランス語",
        "German": "ドイツ語",
        "Portuguese": "ポルトガル語",
        "Italian": "イタリア語",
        "Dutch": "オランダ語",
        "Arabic": "アラビア語",
        "Hindi": "ヒンディー語",
        "Urdu": "ウルドゥー語",
        "Turkish": "トルコ語",
        "Japanese": "日本語",
        "Korean": "韓国語",
        "Chinese (Simplified)": "中国語（簡体字）",
        "Same as original language": "原文と同じ言語"
      },
      "samples": {
        "default": "こんにちは、チームの皆さん。昨日のミーティングについて連絡し、第4四半期のプロダクトローンチのスケジュールを共有したいと思います。金曜日までに確認すべき点がまだ2つありますので、ブロッカーがあれば教えてください。",
        "write-email": "モバイルアプリのローンチについてクライアントのダニエルに最新情報を伝える必要があります。テストは本日完了し、明日朝に修正すべき小さなUIバグがあと2つあります。金曜日の午後にApp Storeへ提出する準備ができています。月曜日10時のハンドオーバーコールで問題ないか確認したいです。",
        "fix-spelling": "四半期のメンテナンスウィンドウが滞りなく完了し、すべてのサーバーで予期しないダウンタイムがなかったことをお知らせできて大変うれしく思います。",
        "expand-text": "リモートでの非同期スタンドアップはエンジニアリングの時間を節約し、グローバルなチームメンバーがカレンダーの中断なしに深く集中できるようにします。"
      },
      "title": "無料AIライティングアシスタント",
      "noLogin": "ログインやカードは不要です",
      "allowanceBefore": "1日の無料枠:",
      "allowanceAfter": "本日残り",
      "allowanceFallback": "1日あたり最大5回の無料リクエスト",
      "backendTitle": "この環境ではAIバックエンドキーがまだ有効になっていません。",
      "backendSet": "ライブAIテキスト生成を有効にするには、",
      "backendRest": "をサーバーまたはワーカーに設定してください。",
      "stepTask": "1. ライティングタスクを選択（10モード）",
      "stepTone": "2. トーン",
      "stepLanguage": "3. 出力言語",
      "stepText": "4. 元のテキスト",
      "taskSelectorAria": "ライティングタスクの選択",
      "placeholder": "段落、メッセージ、メモ、メールの下書きをここに入力または貼り付けてください（最大12,000文字）...",
      "word": "単語",
      "words": "単語",
      "characters": "文字",
      "chars": "文字",
      "tip": "ヒント: Ctrl + Enterで生成できます",
      "stop": "停止",
      "generating": "生成中...",
      "applying": "適用中:",
      "tonePhrase": "{tone}のトーン",
      "applyingIn": "を",
      "errorDailyLimit": "1日の無料上限に達しました",
      "errorRateLimited": "少しゆっくりお試しください",
      "errorGlobal": "1日のプラットフォーム容量に達しました",
      "errorGeneric": "ライティングリクエストを完了できませんでした",
      "retry": "再試行",
      "emptyError": "生成する前にテキストを入力または貼り付けてください。",
      "overLimitBefore": "入力が",
      "overLimitMiddle": "文字の上限を超えています。下書きを",
      "overLimitAfter": "文字短くして、もう一度お試しください。",
      "connectionError": "生成中の一時的な接続の問題です。もう一度お試しください。",
      "resultTitle": "改善された出力",
      "copyResult": "結果をコピー",
      "downloadTxt": "TXTをダウンロード",
      "editOutput": "出力をさらに編集",
      "tabCompare": "原文と改善版の比較",
      "tabDiff": "変更箇所をハイライト",
      "tabResult": "結果のみ",
      "resultAria": "改善されたライティング結果と比較",
      "originalText": "原文",
      "improvedText": "改善されたテキスト",
      "removed": "削除",
      "added": "追加 / 更新",
      "processedWith": "無料のGroqモデルで処理",
      "fallbackNote": "（自動モデルフォールバック）",
      "reviewNote": "。送信前に最終テキストを必ず確認してください。"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "カノニカル＆hreflangタグ",
      "redirectsMode": "301リダイレクトルールジェネレーター",
      "canonicalLabel": "自己参照カノニカルURL",
      "alternatesLabel": "言語・地域の代替ページ",
      "addLocale": "言語バージョンを追加",
      "langCodeAria": "言語コード",
      "alternateUrlAria": "代替URL",
      "removeLocaleAria": "言語バージョンの行を削除",
      "htmlTagsLabel": "HTMLの<head>リンクタグ",
      "copyHtml": "HTMLをコピー",
      "xmlSnippetLabel": "XMLサイトマップの<xhtml:link>スニペット",
      "copyXml": "XMLをコピー",
      "cloudflareFormat": "Cloudflare Pages（_redirects）",
      "htaccessFormat": "Apache（.htaccess）",
      "nginxFormat": "Nginx（サーバーブロック）",
      "copyRules": "{n}件のルールをコピー",
      "pairsLabel": "送信元 → 送信先のペア（カンマ、タブ、または「 -> 」で区切る）",
      "generatedConfigLabel": "生成された301リダイレクト設定",
      "skippedInvalid": "{n}行をスキップしました（送信先なし）。"
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "テクニカルSEOは、クリーンでクロール可能なURL、正確なカノニカルタグ、構造化されたXMLサイトマップから始まります。キーワードの詰め込みではなく、ユーザーの検索意図に焦点を当てた役立つコンテンツを公開すれば、検索エンジンはコンテンツの深さを自然に理解します。見出し、メタディスクリプション、内部リンクを定期的に確認しましょう。",
      "defaultTargetKeyword": "テクニカルSEO",
      "guidanceTitle": "編集上のガイダンス:",
      "guidanceBody": "現代の検索エンジンは、特定のキーワード密度を報酬としません。この分布分析を使って、意図しない繰り返しを見つけたり、中心的な用語がテキストに明確に含まれていることを確認したりしてください。",
      "targetLabel": "ターゲットキーワード / フレーズ（任意）",
      "targetPlaceholder": "例：テクニカルSEO",
      "phraseLengthLabel": "フレーズの長さ",
      "oneWord": "1単語",
      "twoWord": "2単語フレーズ",
      "threeWord": "3単語フレーズ",
      "stripHtml": "HTMLタグを除去",
      "ignoreStopWords": "ストップワードを無視",
      "textLabel": "記事の下書きまたは貼り付けたHTMLテキスト",
      "totalWords": "総単語数",
      "uniqueVocabulary": "ユニークな単語",
      "readingTime": "推定読了時間",
      "targetPrefix": "ターゲット: ",
      "hits": "{n}件のヒット（{d}%）",
      "rankHeader": "順位",
      "termHeader": "用語 / Nグラム",
      "occurrencesHeader": "出現回数",
      "shareHeader": "割合（%）"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – 高速なブラウザベースのオンラインユーティリティツール",
      "defaultDescription": "テキスト編集、開発者向けコーディング、金融計算、PDFワークフロー、SEOのための85の高速でプライバシーに配慮したブラウザツールを発見。",
      "pageTitleLabel": "ページタイトル（<title> / og:title）",
      "titleChars": "{n}文字（理想は30〜60文字）",
      "metaDescriptionLabel": "メタディスクリプション",
      "descChars": "{n}文字（理想は120〜160文字）",
      "canonicalUrlLabel": "カノニカルURL",
      "ogImageLabel": "Open Graph画像URL（1200×630を推奨）",
      "siteNameLabel": "サイト名（og:site_name）",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitterカード",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robotsのfollow指示",
      "includeViewportLabel": "CharsetタグとViewportタグを含める",
      "generatedTagsLabel": "生成されたHTMLの<head>タグ",
      "copyHtml": "HTMLをコピー",
      "downloadHtml": ".htmlをダウンロード",
      "socialPreviewLabel": "ソーシャル共有カードのプレビュー",
      "socialPreviewFallback": "ソーシャル共有プレビュー",
      "untitledPage": "タイトルなしのページ",
      "metaSnippetFallback": "メタディスクリプションのスニペットがここに表示されます。"
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "クライアントサイドのHTMLソースチェック:",
      "auditBody": "ブラウザはサードパーティサイトのクロスオリジン・スクレイピング（CORS）をブロックし、非公開の検索分析にアクセスできません。下にページのHTMLソース（「ページのソースを表示」）を貼り付けて、DOMタグをローカルでチェックしてください。",
      "pastedHtmlLabel": "貼り付けたHTMLソース",
      "loadSampleHtml": "サンプルHTMLを読み込む",
      "htmlPlaceholder": "生の<html>...</html>ソースをここに貼り付けてください...",
      "scoreLabel": "DOMチェック結果",
      "checksPassed": "{passed} / {total}件のチェックに合格",
      "linksSummary": "リンク: {total}件（内部{internal}件 / 外部{external}件）",
      "robotsMetaLabel": "Robotsメタ: ",
      "robotsDefault": "既定（index, follow）",
      "headingOutline": "見出し構造（H1〜H4）",
      "emptyState": "タイトル、説明、見出し、カノニカル、altタグをチェックするには、左にHTMLソースを貼り付けてください。",
      "checkTitle": "Titleタグ（<title>）",
      "checkMetaDesc": "メタディスクリプション",
      "checkH1": "<h1>がちょうど1つ",
      "checkCanonical": "カノニカルURL（<link rel=\"canonical\">）",
      "checkAlt": "画像のalt属性",
      "checkOgJsonLd": "Open Graphと構造化JSON-LDデータ",
      "titleDetail": "{n}文字:「{title}」",
      "titleMissing": "<head>内に<title>タグがありません。",
      "descDetail": "{n}文字（目標120〜160文字）。",
      "descMissing": "<meta name=\"description\">がありません。",
      "h1Detail": "{n}個の<h1>要素が見つかりました。",
      "canonicalMissing": "カノニカルタグが指定されていません。",
      "noImages": "マークアップ内に<img>要素がありません。",
      "altDetail": "{with}/{total}枚の画像に説明的なaltテキストがあります。",
      "ogDetail": "og:title {presence} ・ JSON-LDブロック{n}個。",
      "present": "あり",
      "missing": "なし"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "インデックス指示",
      "indexOption": "index（検索インデックスへの登録を許可）",
      "noindexOption": "noindex（検索結果から除外）",
      "linkCrawlingLabel": "リンククロール",
      "followOption": "follow（リンクシグナルを渡す）",
      "nofollowOption": "nofollow（リンクをたどらない）",
      "largeOption": "large（発見を許可）",
      "htmlTagLabel": "HTMLの<head>メタタグ",
      "copyHtmlTag": "HTMLタグをコピー",
      "httpHeaderLabel": "HTTPレスポンスヘッダー（PDF / 非HTML）",
      "copyHeader": "ヘッダーをコピー",
      "cloudflareHeadersLabel": "Cloudflare Pagesの_headers",
      "cloudflarePathAria": "Cloudflareの_headersパスパターン",
      "copyBlock": "ブロックをコピー"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "スターターテンプレート:",
      "allowAll": "すべてのクローラーを許可",
      "standardWebApp": "標準的なウェブアプリ / SaaS",
      "wordpressClean": "WordPress（クリーン）",
      "stagingBlockAll": "ステージング（すべてブロック）",
      "crawlerRules": "クローラーのパスルール",
      "addRule": "ルールを追加",
      "directiveAria": "ディレクティブ",
      "pathAria": "パス",
      "deleteRuleAria": "ルールを削除",
      "crawlDelayLabel": "クロール遅延（秒、任意）",
      "crawlDelayPlaceholder": "なし",
      "sitemapUrlsLabel": "サイトマップURL（1行に1つ）",
      "generatedLabel": "生成されたrobots.txt"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "高速なブラウザユーティリティの作り方",
      "defaultFaqQ1": "UtilityFlowのツールはブラウザ上でローカルに動作しますか？",
      "defaultFaqA1": "はい。ほぼすべてのユーティリティはブラウザのメモリ上で直接動作し、入力内容を外部サーバーに送信しません。",
      "defaultFaqQ2": "構造化されたJSON-LDはSEOに役立ちますか？",
      "defaultFaqA2": "はい。有効なSchema.orgのJSON-LDにより、検索クローラーはエンティティの文脈やリッチリザルトへの適合性を理解しやすくなります。",
      "defaultProductName": "プロ仕様のエルゴノミクス・メカニカルキーボード",
      "defaultProductDesc": "ソフトウェア開発者向けに設計された薄型ワイヤレスキーボード。",
      "defaultCrumbHome": "ホーム",
      "defaultCrumbSeo": "SEOツール",
      "defaultCrumbSchema": "スキーママークアップジェネレーター",
      "headlineLabel": "見出し",
      "authorNameLabel": "著者名",
      "publisherNameLabel": "発行者名",
      "datePublishedLabel": "公開日",
      "articleUrlLabel": "記事URL",
      "featuredImageLabel": "アイキャッチ画像URL",
      "questionLabel": "質問{n}",
      "removeQuestionAria": "質問{n}を削除",
      "questionPlaceholder": "質問",
      "acceptedAnswerPlaceholder": "承認された回答",
      "addFaqRow": "FAQの行を追加",
      "productNameLabel": "商品名",
      "descriptionLabel": "説明",
      "priceLabel": "価格",
      "currencyLabel": "通貨",
      "availabilityLabel": "在庫状況",
      "orgNameLabel": "組織名",
      "websiteUrlLabel": "ウェブサイトURL",
      "logoUrlLabel": "ロゴURL",
      "breadcrumbLabelAria": "パンくず{n}のラベル",
      "breadcrumbUrlAria": "パンくず{n}のURL",
      "labelPlaceholder": "ラベル",
      "addLevel": "レベルを追加",
      "jsonLdOutputLabel": "JSON-LDの<script>出力",
      "copyScriptTag": "スクリプトタグをコピー"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "JSONフォーマッター＆バリデーター – 整形＆最小化 | UtilityFlow",
      "defaultDescription": "ブラウザ上でJSONペイロードを即座に整形、検証、最小化し、キーを並べ替え — 行と列の単位でシンタックスエラーの詳細を表示します。",
      "desktopSerp": "デスクトップ検索結果（タイトル約580px）",
      "mobileSerp": "モバイル検索結果（説明約120文字）",
      "copyTitleMeta": "タイトルとメタをコピー",
      "seoTitleLabel": "SEOタイトル",
      "titleMetrics": "{chars}文字 ・ 約{px}px / 最大580px",
      "metaDescriptionLabel": "メタディスクリプション",
      "descMetrics": "{chars}文字 ・ 約{px}px",
      "pageUrlLabel": "ページURL（パンくずプレビュー用）",
      "siteNameLabel": "サイト名",
      "boldKeywordLabel": "太字キーワード",
      "optionalPlaceholder": "任意",
      "datePrefixLabel": "日付プレフィックス",
      "datePlaceholder": "例：2025年11月12日",
      "desktopSimulation": "デスクトップ検索結果シミュレーション",
      "mobileSimulation": "モバイル検索結果シミュレーション",
      "titleFallback": "SEOタイトルがここに表示されます",
      "descFallback": "メタディスクリプションのプレビューがここに表示されます。"
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "テクニカルSEOのためのクリーンなURLスラッグの作り方！\n2026年のベストなカフェ＆生産性ツール10選\nXMLサイトマップとrobots.txtの完全チェックリスト",
      "domainLabel": "ベースドメイン / サブフォルダ（完全なURLプレビュー用）",
      "separatorLabel": "単語の区切り文字",
      "hyphenOption": "ハイフン（-）— Google推奨",
      "underscoreOption": "アンダースコア（_）",
      "maxLengthLabel": "スラッグの最大長（{n}文字）",
      "stripStopWords": "任意の英語ストップワードを除去（a, the, and, of, in, to）",
      "trailingSlash": "末尾にスラッシュを追加（/）",
      "titlesLabel": "ページ見出し / タイトル（まとめて処理する場合は1行に1つ）",
      "generatedLabel": "生成されたSEOスラッグ（{n}件）",
      "copyAllSlugs": "すべてのスラッグをコピー",
      "copyAllUrls": "すべての完全なURLをコピー",
      "originalTitleHeader": "元のタイトル",
      "slugUrlHeader": "SEOスラッグと完全なURL",
      "copyHeader": "コピー"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod>日付（任意）",
      "changefreqLabel": "<changefreq>ヒント",
      "priorityLabel": "既定の<priority>",
      "omitTag": "タグを省略",
      "deduplicateLabel": "重複するURLを除去",
      "urlsLabel": "カノニカルURL（1行に1つの完全なhttps:// URL）",
      "skippedInvalid": "{n}行の無効なURLをスキップしました: ",
      "generatedLabel": "生成されたsitemap.xml（{n}件のURL）",
      "copyXml": "XMLをコピー",
      "downloadXml": ".xmlをダウンロード",
      "generatedAria": "生成されたXMLサイトマップ"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "メーカーやチーム向けの高速ブラウザツールを開発しています。   \n\n毎週火曜日に新しいワークフローのヒントをお届けします。\n\n無料ユーティリティは下のリンクからお試しください！",
      "modeBraille": "見えないスペーサー（⠀ U+2800）",
      "modeDot": "最小のドットスペーサー（.）",
      "modeClean": "行末のクリーンなスペースのみ",
      "collapse": "誤って入った二重スペースを1つにまとめる",
      "labelRaw": "キャプションまたは自己紹介の下書き",
      "phRaw": "段落区切りを入れたい場所に空行を入れてキャプションを書いてください...",
      "tip": "ヒント: ソーシャルアプリでは、上の行の末尾にスペースがないと、空の段落が消えてしまうことがよくあります。",
      "labelOut": "貼り付け可能な出力",
      "copyFormatted": "整形されたキャプションをコピー",
      "charsLabel": "文字数:",
      "linesLabel": "行数:",
      "blankLabel": "保持された空行:",
      "fitsBio": "Instagramの自己紹介（150文字）に収まります",
      "captionLength": "キャプションの長さ（自己紹介の150文字制限を超えています）"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "問題 → 煽り → 解決（PAS）",
        "tutorial": "実践的な3ステップ解説",
        "bab": "ビフォー → アフター → ブリッジ",
        "checklist": "ローンチ / 監査チェックリスト",
        "myth": "よくある誤解と実践的な現実"
      },
      "frameworkDescriptions": {
        "pas": "ワークフローの解決策を示す前に、具体的な悩みを浮き彫りにします。",
        "tutorial": "LinkedInカルーセルや保存される投稿に最適な、番号付きのハウツー構成。",
        "bab": "以前の摩擦と改善後の結果を対比させます。",
        "checklist": "クリエイターが覚えやすい明確なチェックリスト。",
        "myth": "直接的で簡潔な代替案で、時代遅れのアドバイスに疑問を投げかけます。"
      },
      "frameworkLabels": {
        "fixesHeading": "本当に役立つこと:",
        "beforeLabel": "ビフォー: ",
        "afterLabel": "アフター: ",
        "bridgeHeading": "ブリッジ:",
        "mythLabel": "よくある誤解: ",
        "worksHeading": "実際に効果があること:"
      },
      "sampleHook": "キャンペーンリンクの手動フォーマットに何時間も費やすのはやめましょう。",
      "sampleContext": "一貫性のないUTMパラメータや崩れた自己紹介の改行が、分析レポートを静かに歪めています。",
      "samplePoints": "utm_sourceとutm_mediumのUTMタグを小文字で標準化する\n公開前に改行を確認する\n行末のスペースなしでクリーンな段落区切りを使う",
      "sampleCta": "次のプロダクトローンチのために、このチェックリストを保存しましょう。",
      "infoTitle": "決定論的なテンプレート作成:",
      "infoBody": "このツールは、ブラウザ上で直接動作する構造化されたコピーライティングフレームワークを使用します。AIモデルや外部APIは使用せず、そのように示唆することもありません。",
      "labelHook": "冒頭のフック（最初の1〜2行）",
      "labelContext": "背景 / 問題提起",
      "labelPoints": "主なポイント（1行に1つ）",
      "labelCta": "行動喚起（CTA）",
      "labelTags": "ハッシュタグ",
      "previewTitle": "整形されたキャプションのプレビュー",
      "copyCaption": "キャプションをコピー",
      "charsLabel": "文字数:",
      "wordsLabel": "単語数:",
      "fits": "収まる",
      "threadNeeded": "スレッドが必要",
      "tooLong": "長すぎる"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "アクセシビリティのためのフォーマットと大文字・小文字",
      "optCamel": "パスカルケース（#CamelCase — スクリーンリーダーにやさしい）",
      "optLower": "すべて小文字（#すべて小文字）",
      "optPreserve": "元の大文字・小文字を保持",
      "outLabel": "出力レイアウト",
      "optInline": "1行（スペース区切り）",
      "optNewline": "1行に1ハッシュタグ",
      "optDots": "キャプション区切り文字（.\n.\n.）",
      "dedupe": "重複するハッシュタグを削除",
      "labelRaw": "キーワードや乱れたハッシュタグ（カンマ、スペース、改行で区切る）",
      "labelResult": "クリーンなハッシュタグ群",
      "copyHashtags": "ハッシュタグをコピー",
      "statClean": "クリーンなハッシュタグ",
      "statDupes": "削除された重複",
      "statIgMax": "Instagramの上限（30）",
      "statWithin": "IGの30件制限内",
      "statExceeds": "30件の制限を超えています",
      "statChars": "出力の文字数"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4〜15文字 ・ 英字、数字、アンダースコア",
        "instagram": "1〜30文字 ・ 英字、数字、ドット、アンダースコア",
        "tiktok": "2〜24文字 ・ 英字、数字、アンダースコア、ドット",
        "youtube": "3〜30文字 ・ 英字、数字、_、-、.",
        "threads": "1〜30文字 ・ Instagramと共通の名前空間",
        "github": "1〜39文字 ・ 英数字と単一のハイフン"
      },
      "infoTitle": "ルールチェッカーと直接チェックリンク:",
      "infoBodyBefore": "ハンドルの構文と文字数制限をオフラインでチェックし、利用可能性を推測しません。各プラットフォームの",
      "infoEm": "プロフィールURLを開く",
      "infoBodyAfter": "リンクをクリックして、ライブステータスを直接確認してください。",
      "labelBrand": "ブランド名、プロジェクト名、クリエイター名",
      "phBrand": "例：Utility Hub",
      "labelActive": "チェックする有効なハンドル",
      "copyAt": "@をコピー",
      "variationsTitle": "統一されたハンドルのバリエーション:",
      "thPlatform": "プラットフォーム",
      "thRules": "フォーマットルール",
      "thStatus": "構文ステータス",
      "thCheck": "手動チェック",
      "valid": "有効な形式",
      "invalid": "無効な構文 / 長さ",
      "checkUrl": "URLをチェック"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "太字（サンセリフ）",
        "sans-italic": "斜体（サンセリフ）",
        "sans-bold-italic": "太字斜体（サンセリフ）",
        "serif-bold": "太字（セリフ）",
        "monospace": "等幅",
        "double-struck": "二重線（黒板太字）",
        "script-bold": "筆記体太字",
        "fraktur-bold": "フラクトゥーア太字",
        "small-caps": "スモールキャップス",
        "fullwidth": "全角（エステティック）"
      },
      "styleNotes": {
        "sans-bold": "自己紹介の見出しや投稿のフックに最適な読みやすさ",
        "sans-italic": "キャプションでのさりげない強調",
        "sans-bold-italic": "強いコールアウトと区切り",
        "serif-bold": "エディトリアル風の強調",
        "monospace": "コードハンドル、データ、技術タグ",
        "double-struck": "ディスプレイ用アクセント",
        "script-bold": "装飾的な自己紹介の署名",
        "fraktur-bold": "ゴシック体のディスプレイフォント",
        "small-caps": "大文字風のすっきりしたプロフィールラベル",
        "fullwidth": "幅広に組まれたレトロなソーシャル見出し"
      },
      "sampleText": "新しいクリエイターツールキット2025",
      "accessibilityTitle": "アクセシビリティに関する注意:",
      "accessibilityBody": "装飾されたUnicode文字は数学記号ブロックに属するため、スクリーンリーダーが1文字ずつ読み上げたり、読み飛ばしたりする場合があり、一部の検索インデックスでは無視されます。段落全体ではなく、短いハイライトに控えめに使ってください。",
      "labelInput": "装飾するテキスト",
      "placeholder": "短い見出し、自己紹介の1行、CTAを入力...",
      "previewEmpty": "プレビュー"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Instagramの自己紹介",
        "linkedinPost": "LinkedIn投稿",
        "newsletter": "ニュースレター",
        "youtubeDescription": "YouTubeの説明文"
      },
      "presetsLabel": "クイックチャネルプリセット:",
      "errorEmpty": "リンク先のウェブサイトURLを入力してください。",
      "errorInvalid": "有効なリンク先URLを入力してください（例：https://example.com/landing）。",
      "labelUrl": "ウェブサイトのリンク先URL *",
      "labelSource": "キャンペーンソース（utm_source）*",
      "phSource": "例：instagram, newsletter, google",
      "labelMedium": "キャンペーンメディア（utm_medium）*",
      "phMedium": "例：social, cpc, email, video",
      "labelCampaign": "キャンペーン名（utm_campaign）",
      "phCampaign": "例：spring_launch",
      "labelContent": "キャンペーン内容（utm_content）",
      "phContent": "例：hero_banner, bio_button",
      "labelTerm": "キャンペーン用語（utm_term）",
      "phTerm": "任意の有料キーワードまたはオーディエンスタグ",
      "normalizeLabel": "小文字に統一し、スペースをアンダースコア（_）に変換",
      "generatedTitle": "生成されたキャンペーンURL",
      "copyUtm": "UTM URLをコピー",
      "thParam": "クエリパラメータ",
      "thValue": "正規化された値"
    }
  },
  'add-pdf-page-numbers': {
    strings: {
      errStart: '開始ページ番号は1以上の整数にしてください。',
      stampedSuccess: (n: number, size: string) => `ページ番号を${n}ページにスタンプしました（${size}）。`,
      pageOfLabel: (cur: number, total: number) => `${cur}ページ / 全${total}ページ`,
      dropTitleEmpty: 'ページ番号を追加するPDFファイルを選択',
      dropTitleFile: (name: string, pages: number) => `${name}（${pages}ページ）`,
      dropSub: 'レポート、契約書、資料に鮮明なベクターページラベルを追加',
      labelPos: '位置',
      optBottomCenter: '下部中央',
      optBottomRight: '下部右',
      optBottomLeft: '下部左',
      optTopRight: '上部右',
      labelFmt: 'ラベル形式',
      optPageOf: 'ページ 1 / 全N',
      optSlash: '1 / N',
      optNumberOnly: '1、2、3...',
      labelStart: '開始番号',
      labelSize: 'フォントサイズ（pt）',
      opt9: '9pt（控えめ）',
      opt11: '11pt（標準）',
      opt14: '14pt（大きい）',
      skipCover: '表紙をスキップ（2ページ目から番号付け）',
      numbering: 'ページに番号を付けています...',
      addBtn: 'ページ番号を追加してダウンロード',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `画像「${name}」をデコードできませんでした。`,
      errCanvas: 'Canvas 2Dコンテキストが利用できません。',
      errConvert: (name: string) => `画像「${name}」をPNGに変換できませんでした。`,
      errNotImage: (name: string) => `「${name}」はサポートされていない画像ファイルです（PNG、JPG、WebP）。`,
      errRead: (name: string) => `「${name}」を読み取れませんでした。`,
      errLoad: '画像を読み込めませんでした。',
      errEmpty: 'まず画像を1枚以上追加してください。',
      errBuild: '画像をPDFに変換できませんでした。',
      createdSuccess: (n: number, size: string) => `${n}ページのPDFを作成しました（${size}）。`,
      dropTitle: 'PNG、JPG、WebP画像を選択',
      dropSub: 'スクリーンショット、スキャン、写真をローカルで1つのPDFに変換',
      labelSize: 'PDFページサイズ',
      optA4: 'A4縦向き（210 × 297 mm）',
      optLetter: 'USレター（8.5 × 11インチ）',
      optFit: '画像の正確な寸法',
      labelMargin: 'ページ余白',
      optMargin0: '余白なし（0pt）',
      optMargin24: '標準余白（24pt）',
      optMargin48: '広い余白（48pt）',
      labelOut: '出力ファイル名',
      moveUp: (name: string) => `${name}を上に移動`,
      moveDown: (name: string) => `${name}を下に移動`,
      removeFile: (name: string) => `${name}を削除`,
      building: 'PDFを作成中...',
      convertBtn: (n: number) => `${n}枚の画像をPDFに変換`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: '選択したPDFファイルを読み取れませんでした。',
      errMin2: '結合するにはPDFファイルを2つ以上追加してください。',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n}件のPDFを結合しました（${pages}ページ、${size}）。`,
      dropValidating: 'PDFファイルを確認中...',
      dropTitle: '複数のPDFファイルを選択またはドロップ',
      dropSub: '100%ブラウザベースの結合（pdf-lib使用） ・ 暗号化されていないPDFのみ ・ アップロードなし',
      filesQueued: 'キューに入ったファイル',
      totalPagesLabel: '合計ページ数',
      combinedSize: '入力の合計サイズ',
      clearQueue: 'キューをクリア',
      pageSingular: 'ページ',
      pagePlural: 'ページ',
      moveUp: (name: string) => `${name}を上に移動`,
      moveDown: (name: string) => `${name}を下に移動`,
      removeFile: (name: string) => `${name}を削除`,
      outName: '出力ファイル名',
      merging: 'PDFを結合中...',
      mergeBtn: (n: number) => `${n}件のPDFを結合してダウンロード`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: '編集可能なメタデータフィールドをクリアしました。「メタデータを保存してPDFをダウンロード」をクリックして変更を適用してください。',
      savedSuccess: (size: string) => `更新されたPDFメタデータを保存しました（${size}）。`,
      dropTitleEmpty: 'メタデータを確認または編集するPDFファイルを選択',
      dropTitleFile: (name: string, pages: number, size: string) => `${name}（${pages}ページ・${size}）`,
      dropSub: 'ドキュメントのプロパティを確認し、著者やソフトウェア情報を整理して、クリーンなSEOタイトルを設定',
      labelTitle: 'ドキュメントタイトル',
      labelAuthor: '著者',
      labelSubject: '件名 / 概要',
      labelKeywords: 'キーワード（カンマ区切り）',
      labelCreator: '作成アプリケーション',
      labelProducer: 'PDF作成者',
      saving: 'PDFを保存中...',
      saveBtn: 'メタデータを保存してPDFをダウンロード',
      stripBtn: 'すべてのメタデータフィールドを削除',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: '回転するページが見つかりませんでした。',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${b}ページ中${a}ページを時計回りに${deg}°回転しました（${size}）。`,
      dropTitleEmpty: 'ページを回転するPDFファイルを選択',
      dropTitleFile: (name: string, pages: number) => `${name}（${pages}ページ）`,
      dropSub: 'すべてのページまたは指定したページ範囲をローカルで回転 — サーバーへのアップロードなし',
      labelAngle: '回転角度',
      opt90: '時計回りに90°（右）',
      opt270: '反時計回りに90°（左 / 270°）',
      opt180: '180°（上下逆）',
      labelScope: '適用範囲',
      optAll: (n: number) => `すべてのページ（${n}ページ）`,
      optRange: '指定したページ範囲',
      optOdd: '奇数ページのみ',
      optEven: '偶数ページのみ',
      labelRangeInput: (n: number) => `ページ番号 / 範囲（1〜${n}）`,
      phRange: '例：1, 3-5',
      rotating: 'ページを回転中...',
      rotateBtn: '回転を適用してPDFをダウンロード',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- ページ ${n} ---`,
      dropExtracting: 'PDFのテキストレイヤーを抽出中...',
      dropTitleFile: (name: string, pages: number) => `${name}（${pages}ページ）`,
      dropTitleEmpty: 'テキストを抽出するテキストベースのPDFファイルを選択',
      dropSub: 'PDF.jsで埋め込まれたUnicodeテキストをローカルに抽出 ・ サーバーへのアップロードなし',
      noTextTitle: '選択可能なテキストレイヤーが見つかりませんでした:',
      noTextBody:
        'このPDFは、埋め込まれたテキストレイヤーではなく、スキャンされた画像や変換されたベクターパスを含んでいるようです。クライアントサイドの光学文字認識（OCR）はオフラインでは実行されません。',
      markersLabelBefore: 'ページ見出しマーカーを挿入（',
      markersCode: '--- ページ N ---',
      markersLabelAfter: '）',
      copyText: 'テキストをコピー',
      downloadTxt: '.txtをダウンロード',
      outputAria: '抽出されたPDFテキスト（出力）',
      pagesScanned: 'スキャンしたページ:',
      wordsExtracted: '抽出された単語:',
      textSize: 'テキストサイズ:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'ブラウザのCanvasメモリを軽快に保つため、1回につき最大20ページまでレンダリングしてください。',
      errCanvas: 'Canvas 2Dコンテキストが利用できません。',
      dropTitleEmpty: '画像としてレンダリングするPDFファイルを選択',
      dropTitleFile: (name: string, pages: number, size: string) => `${name}（${pages}ページ・${size}）`,
      dropSub: 'PDF.js Canvasでローカルにレンダリング ・ PNGまたはJPGで出力',
      labelRange: 'ページ（「すべて」または「1-4, 6」のような範囲）',
      labelFormat: '画像形式',
      optPng: 'PNG（ロスレス / 鮮明なテキスト）',
      optJpg: 'JPG（コンパクト / 写真向け）',
      labelScale: 'レンダリング解像度',
      optScale1: '1.0倍（72 DPI 高速プレビュー）',
      optScale15: '1.5倍（108 DPI 標準）',
      optScale2: '2.0倍（144 DPI 高精細）',
      rendering: 'PDFページをレンダリング中...',
      renderBtn: 'PDFページを画像としてレンダリング',
      pageAlt: (n: number) => `ページ ${n}のプレビュー`,
      pageLabel: (n: number, w: number, h: number) => `ページ ${n} ・ ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'ニュートラルグレー',
        indigo: 'ブランドインディゴ',
        red: 'スタンプレッド',
      },
      defaultWatermark: 'CONFIDENTIAL',
      errEmpty: 'PDFを作成する前に、まず透かしテキストを入力してください。',
      appliedSuccess: (text: string, n: number, size: string) =>
        `透かし「${text}」を${n}ページに適用しました（${size}）。`,
      dropTitleEmpty: '透かしを追加するPDFファイルを選択',
      dropTitleFile: (name: string, pages: number) => `${name}（${pages}ページ）`,
      dropSub: 'pdf-libで鮮明なベクターテキストスタンプをローカルに埋め込み',
      labelText: '透かしテキスト',
      phText: '機密 / 下書き / 社内専用',
      labelColor: 'スタンプの色',
      firstPageOnly: '最初のページのみ',
      labelSize: 'フォントサイズ:',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: '不透明度:',
      labelAngle: '回転:',
      applying: '透かしを追加中...',
      applyBtn: '透かしを適用してダウンロード',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'PDFは最低1ページを保持する必要があります。',
      savedSuccess: (n: number, size: string) => `更新されたPDF（${n}ページ）を保存しました（${size}）。`,
      loading: 'PDFページとプレビューを読み込み中...',
      dropTitleFile: (name: string, n: number) => `${name}（${n}ページ有効）`,
      dropTitleEmpty: 'ページを並べ替えまたは削除するPDFファイルを選択',
      dropSub: 'ページをローカルで移動、複製、または不要なページを削除',
      outCount: '出力ページ数:',
      saving: 'PDFを保存中...',
      saveBtn: '並べ替えたPDFを保存',
      thumbAlt: (n: number) => `元のページ ${n}`,
      thumbFallback: (n: number) => `元ページ ${n}`,
      posLabel: (n: number) => `位置 #${n}`,
      origLabel: (n: number) => `（元 ${n}）`,
      moveEarlierTitle: '前に移動',
      moveEarlierAria: (n: number) => `位置 ${n}を前に移動`,
      moveLaterTitle: '後ろに移動',
      moveLaterAria: (n: number) => `位置 ${n}を後ろに移動`,
      dupTitle: 'ページを複製',
      dupAria: (n: number) => `位置 ${n}のページを複製`,
      delTitle: 'ページを削除',
      delAria: (n: number) => `位置 ${n}のページを削除`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `1ページずつの分割では、ページごとに1ファイルがダウンロードされます。25ページを超えるドキュメント（ここでは${n}ページ）では、ブラウザが大量ダウンロードをブロックしないよう、代わりに範囲を抽出してください。`,
      exportedAll: (n: number) => `${n}件の1ページPDFファイルをエクスポートしました。`,
      errNoMatch: 'この選択に一致するページがありません（例:「偶数ページのみ」には最低2ページが必要です）。',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${b}ページ中${a}ページを抽出しました（${size}）。`,
      dropTitleEmpty: '分割または抽出するPDFファイルを選択',
      dropTitleFile: (name: string, pages: number, size: string) => `${name}（${pages}ページ・${size}）`,
      dropSub: 'メモリ上でローカルに処理 ・ クリックしてドキュメントを置き換え',
      modeRange: 'ページ範囲を抽出',
      modeOdd: '奇数ページのみ',
      modeEven: '偶数ページのみ',
      modeBurst: 'すべての1ページを抽出',
      labelRange: (n: number) => `抽出するページ（1〜${n}）`,
      phRange: '例：1-3, 5, 8-10',
      rangeHintBefore: 'カンマとハイフンを使ってください（例：',
      rangeHintAfter: '）。',
      extracting: 'PDFを抽出中...',
      splitBtn: '分割してPDFをダウンロード',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'ウェブサイトURL',
      tabText: 'プレーンテキスト',
      tabWifi: 'Wi-Fiネットワーク',
      tabEmail: 'メールリンク',
      tabPhone: '電話番号',
      labelUrl: 'リンク先URL',
      labelText: 'テキスト内容',
      labelSsid: 'ネットワーク名（SSID）',
      labelSecurity: 'セキュリティタイプ',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'オープン（パスワードなし）',
      labelWifiPass: 'Wi-Fiパスワード',
      hiddenSsid: '非表示のSSIDネットワーク',
      labelEmailTo: '宛先メールアドレス',
      labelEmailSubject: '件名（任意）',
      labelPhone: '電話番号（E.164形式を推奨）',
      sizeLabel: (size: number) => `サイズ（${size}px）`,
      labelEc: 'エラー訂正',
      labelFg: '前景色',
      labelBg: '背景色',
      quietZone: 'クワイエットゾーンの余白:',
      modulesLabel: (margin: number) => `${margin}モジュール`,
      encodedPayload: 'エンコードされたペイロード文字列',
      copyPayload: 'ペイロードをコピー',
      emptyError: 'スキャン可能なQRコードを生成するには、上にコンテンツを入力してください。',
      encodeError: 'QRペイロードをエンコードできませんでした。',
      qrAlt: '生成されたスキャン可能なQRコード',
      downloadPng: 'PNGをダウンロード',
      downloadSvg: 'SVGをダウンロード',
      copySvg: 'SVGをコピー',
      sampleText: 'UtilityFlowへようこそ！',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: '標準投稿',
        profileBio: 'プロフィール',
        caption: 'キャプション',
        feedPost: 'フィード投稿',
        videoCaption: '動画キャプション',
        post: '投稿',
        videoTitle: '動画タイトル',
        description: '説明',
      },
      sampleText:
        'より速く届けることは、日々の小さな改善から始まります。\n\n登録不要のブラウザベースのクリエイターツールは https://utilityflow.online/tools/ でお試しください。\n\n#CreatorTools #Workflow',
      labelInput: 'ソーシャル投稿 / 自己紹介の下書き',
      copyDraft: '下書きをコピー',
      placeholder: 'ソーシャルキャプション、投稿、自己紹介、YouTubeタイトルを書くか貼り付けてください...',
      charsLabel: '文字数:',
      wordsLabel: '単語数:',
      hashtagsLabel: 'ハッシュタグ:',
      mentionsLabel: 'メンション:',
      urlsLabel: '検出されたURL:',
      urlsWeighted: '（Xでは23文字としてカウント）',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)}文字超過`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)}文字残り`,
      foldLabel: (n: number) => `折りたたみ位置 約${n}文字`,
      foldTitle: 'フィードでの省略 / 「もっと見る」の折りたたみプレビュー',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `「もっと見る」をタップする前に読者が見る内容のプレビュー（${platform}の${surface}で${limit}文字）。`,
      selectAria: '省略プレビュー用のプラットフォームを選択',
      previewEmpty: 'プレビューがここに表示されます...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'トラッキングなしで85の高速ブラウザユーティリティを構築した方法',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '2.4万回視聴 ・ 2日前',
      errNotImage: 'PNG、JPG、WebPの画像ファイルを選択してください。',
      errDecode: 'この画像ファイルをブラウザでデコードできませんでした。',
      previewEyebrow: '1280 × 720 プレビュー',
      emptyThumb: 'サムネイル画像をアップロードして、フィードでの読みやすさを確認',
      thumbAlt: 'アップロードされたサムネイルのプレビュー',
      safeZoneTitle: 'タイムスタンプバッジの重なりゾーン',
      chooseThumb: 'ローカルのサムネイルを選択（PNG / JPG / WebP）',
      replaceThumb: (name: string) => `置き換え：${name}`,
      recommended: '1280×720（16:9）を推奨、2MB未満 ・ アップロードされることはありません',
      diagTitle: '画像仕様の診断',
      dimLabel: '寸法',
      dimHdOk: '（HD OK）',
      dimUnder: '（1280px未満）',
      aspectLabel: 'アスペクト比',
      aspectMatch: '16:9に一致',
      aspectNo: '16:9ではありません（切り抜きやレターボックスになる場合があります）',
      sizeLabel: 'ファイルサイズ',
      sizeOk: '（2MB未満 OK）',
      sizeOver: '（2MB制限を超えています）',
      titleLabel: (len: number) => `動画タイトル（${len}/100文字 ・ モバイルでは約60文字表示）`,
      channelLabel: 'チャンネル名',
      durationLabel: '再生時間',
      darkMode: 'ダークモードのフィードプレビュー',
      safeZone: 'タイムスタンプの角ゾーンをハイライト',
      desktopCard: 'デスクトップのホームフィードカード',
      sidebar: 'デスクトップの視聴ページサイドバー（コンパクトなおすすめ）',
      untitled: 'タイトルなしの動画',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'イントロダクションと概要' },
        { id: 2, time: '01:15', title: 'コアアーキテクチャのセットアップ' },
        { id: 3, time: '04:40', title: 'ライブデモとよくある落とし穴' },
        { id: 4, time: '08:20', title: 'まとめと次のステップ' },
      ],
      newChapter: (n: number) => `チャプター ${n}`,
      defaultChapterTitle: 'チャプター',
      warnInvalid: '1つ以上のタイムスタンプの形式が無効です（MM:SSまたはHH:MM:SSを使用してください）。',
      warnMin3: 'YouTubeで動画チャプターを有効にするには、昇順のタイムスタンプが最低3つ必要です。',
      warnFirst: 'YouTubeがチャプターを認識するには、最初のチャプターを00:00から開始する必要があります。',
      warnOrder: 'チャプターが時系列順になっていません（「時系列順に並べ替え」をクリックしてください）。',
      warnShort: (title: string) =>
        `チャプター「${title}」は前のチャプターから10秒未満です（YouTubeの最小間隔は10秒です）。`,
      labelUrl: 'YouTube動画URLまたは動画ID（直接の?t=ディープリンク用）',
      heading: '動画チャプター',
      sortBtn: '時系列順に並べ替え',
      addBtn: 'チャプターを追加',
      tsAria: (n: number) => `チャプター ${n}のタイムスタンプ`,
      titleAria: (n: number) => `チャプター ${n}のタイトル`,
      phTitle: 'チャプタータイトル',
      removeAria: (n: number) => `チャプター ${n}を削除`,
      specTitle: 'YouTubeチャプター仕様チェック:',
      descBlock: '説明文のチャプターブロック',
      copyChapters: 'チャプターをコピー',
      emptyChapters: '説明文ブロックを生成するには、上にチャプターを追加してください。',
      shareTitle: 'タイムスタンプ付き共有リンク',
      videoIdLabel: (id: string) => `（動画ID：${id}）`,
      noVideoId: '（有効なYouTube URLを上に入力してください）',
      noVideoHint: '有効なyoutube.comまたはyoutu.beのURLを貼り付けると、各チャプターへのクリック可能な?t=ジャンプリンクが作成されます。',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'ファイルが選択されていません。',
      notPdf: (name: string) => `「${name}」はPDFファイルではないようです。`,
      empty: (name: string) => `「${name}」は空か不完全です。`,
      noHeader: (name: string) =>
        `「${name}」には有効な%PDFヘッダーがなく、処理できません。`,
      enterRanges: 'ページ番号または範囲を入力してください（例：「1-3, 5」）。',
      rangeOutside: (token: string, total: number) =>
        `範囲「${token}」はドキュメントのページ範囲外です（1〜${total}）。`,
      rangeReversed: (token: string) =>
        `範囲「${token}」：開始ページが終了ページより大きくなっています。`,
      pageMissing: (page: number, total: number) =>
        `ページ${page}は存在しません（ドキュメントは${total}ページです）。`,
      invalidSyntax: (token: string) =>
        `無効なページ構文「${token}」です。「1-3, 5」のような数字と範囲を使用してください。`,
      encrypted:
        'このPDFは暗号化されているか、パスワードで保護されています。ローカルで処理する前にロックを解除してください。',
      unable: 'PDFファイルを処理できませんでした。',
      allKeywords: ['all', 'すべて'],
    },
  },
};
