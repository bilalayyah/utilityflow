import type { ToolLocaleOverride } from "../../types";

/**
 * Japanese overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/id/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 * Fixed Japanese slugs (STATIC_PATHS):
 * ai-bunsho-sakusei, ai-yoyaku, ai-tsuru-kensaku.
 */
export const JA_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  "ai-writing-assistant": {
    slug: "ai-bunsho-sakusei",
    name: "AIライティングアシスタント",
    shortDescription:
      "文法を修正し、文を書き換え、トーンを調整し、言い換え、アイデアを広げ、明確なメールを下書きできます。無料で、登録は不要です。",
    keywords: [
      "AIライティングアシスタント",
      "無料文法チェッカー",
      "文書き換えツール",
      "テキスト言い換えツール",
      "トーン変換ツール",
      "メール作成アシスタント",
      "スペル修正",
      "文簡潔化ツール",
      "AIライティングツール無料",
    ],
    seo: {
      title: "AIライティングアシスタント – 文法修正と文章書き換えの無料AIツール | UtilityFlow",
      description:
        "文法を修正し、文を書き換え、トーンを調整し、段落を簡潔・拡張し、言い換え、明確なメールを書けます。無料で、登録やアカウントは不要です。1日5件までGroqのAI推論で動作します。10のライティングタスクと7つのトーンから選び、原文と並べて変更点を確認しながら、プロの文章に仕上げることができる無料AIツールです。",
      primaryKeyword: "AIライティングアシスタント",
      secondaryKeywords: [
        "無料文法チェッカーAI",
        "AI文書き換えツール",
        "AIテキスト言い換えツール",
        "AIメール作成アシスタント",
      ],
      longTailKeywords: [
        "ログイン不要の無料AIライティングアシスタント",
        "AIツールでテキストをよりプロフェッショナルにする",
        "意味を保ったまま段落を無料で書き換える",
        "文法とスペルをオンラインで無料修正",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "アカウントを作らずに、数秒できれいに下書きを磨けます。文法修正、言い換え、トーン変更、文の簡潔化、メール作成を含む10のライティングタスクから選び、元の意味と事実を厳密に保ちます。",
    apiNotice:
      "ログイン、サブスクリプション、クレジットなしで100%無料です。無料枠：訪問者あたり1日最大5件のライティングリクエスト（最大12,000文字）。テキストを保存せず、Groqの無料枠推論で動作します。",
  },
  "ai-text-summarizer": {
    slug: "ai-yoyaku",
    name: "AIテキスト要約ツール",
    shortDescription:
      "記事、レポート、メモを短・中・長の要約にまとめます。箇条書きと重要なポイント付きで、無料で使えます。",
    keywords: [
      "AIテキスト要約ツール",
      "無料記事要約ツール",
      "箇条書き要約",
      "重要ポイント抽出",
      "段落要約ツール",
      "やさしい言葉の要約",
      "読書時間計算",
      "長いテキスト要約オンライン",
      "AI要約ジェネレーター無料",
    ],
    seo: {
      title: "AIテキスト要約ツール – 長文を短・中・長に要約する無料オンラインAIツール | UtilityFlow",
      description:
        "長い記事、調査メモ、レポートを短い段落、箇条書き、重要ポイントに要約します。無料で速く、登録は不要です。1日5件まで、名前や数字を保ったままGroqのAIで要約します。長さと形式を選ぶだけで、重要な名前や数字を保ったまま、長い文章をすっきりした要約にまとめ、読書時間を大幅に節約できる無料AIツールです。",
      primaryKeyword: "AIテキスト要約ツール",
      secondaryKeywords: [
        "無料記事要約ツール",
        "箇条書きテキスト要約ツール",
        "重要ポイント抽出AI",
        "段落要約ジェネレーター",
      ],
      longTailKeywords: [
        "ログイン不要の無料AIテキスト要約ツール",
        "数字と事実を保ったまま長い記事を要約",
        "短・中・長のテキスト要約ツールオンライン",
        "調査論文を箇条書きに要約",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "長い記事、レポート、エッセイ、会議の文字起こしを、アカウントを作らずにすっきりした要約にまとめます。短い（10〜20%）、中程度（30〜40%）、長い（50〜60%）の長さを、段落、箇条書き、重要ポイント、平易な言葉の形式から選び、名前、数字、日付を保ちます。",
    apiNotice:
      "ログイン、サブスクリプション、クレジットなしで100%無料です。無料枠：訪問者あたり1日最大5件の要約（1リクエスト最大25,000文字）。テキストを保存せず、Groqの無料枠推論で動作します。",
  },
  "ai-tool-finder": {
    slug: "ai-tsuru-kensaku",
    name: "AIスマートツールファインダー",
    shortDescription:
      "タスクをタイプミスや自然な言い回しも含めた平易な言葉で説明すると、最適なUtilityFlowツールを即座に見つけられます。",
    keywords: [
      "AIツールファインダー",
      "スマートツール検索",
      "ユーティリティツール検索",
      "オンラインツール推奨",
      "自然言語ツール検索",
      "無料ツール検索オンライン",
      "ユーティリティツール推薦",
      "タスクでツールを検索",
      "AIツール検索無料",
    ],
    seo: {
      title: "AIスマートツールファインダー – 適切なツールを探す無料AI検索ツール | UtilityFlow",
      description:
        "必要なことを平易な言葉で説明すると、UtilityFlowの88ツールのなかから適切なブラウザまたはAIユーティリティが見つかります。速く、無料で、でっち上げのリンクはありません。キーワード検索は無制限で、AI検索は1日10件まで無料です。タスクを説明するだけで、最適なツールとその理由が表示されます。",
      primaryKeyword: "AIスマートツールファインダー",
      secondaryKeywords: [
        "オンラインツールファインダー",
        "適切なユーティリティツールを検索",
        "AIツール推薦",
        "UtilityFlowツール検索",
      ],
      longTailKeywords: [
        "自分のタスクに合う無料オンラインツールを検索",
        "平易な言葉の問題でユーティリティツールを検索",
        "ログインなしのAIツール発見",
        "PDFに必要なオンラインツールはどれか",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "どのツールがタスクに対応するかわからない場合に使います。スペルミスやくだけた表現でも、目標を平易な言葉で説明すると、ハイブリッドのキーワード＋Groq AIマッチャーが、UtilityFlowのライブカタログから検証済みのツールを、明確な理由付きで推奨します。",
    apiNotice:
      "ログイン、サブスクリプション、クレジットなしで100%無料です。検証済みの85のブラウザツール＋2つのAIツールを検索します（AI検索は1日最大10件、即座のキーワードマッチングは無制限）。",
  },
};
