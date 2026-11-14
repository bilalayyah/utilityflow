import type { UiStrings } from '../ui';

/**
 * Japanese chrome dictionary — same UiStrings shape and key order as
 * src/locales/en/ui.ts. Natural modern Japanese;
 * brand names, URLs, email addresses and code values kept identical
 * to English.
 */
export const jaStrings: UiStrings = {
  nav: {
    tools: 'ツール',
    categories: 'カテゴリ',
    aiTools: 'AIツール',
    about: '私たちについて',
    contact: 'お問い合わせ',
    allTools: 'すべてのツール',
    freeAiTools: '無料AIツール',
    viewAiSection: 'ホームページのAIセクションを見る →',
    searchPlaceholder: '88のツールを検索...',
    searchTools: 'ツールを検索',
    closeSearch: '検索を閉じる',
    openMenu: 'ナビゲーションメニューを開く',
    closeMenu: 'ナビゲーションメニューを閉じる',
    skipToContent: 'コンテンツへスキップ',
    language: '言語',
    chooseLanguage: '言語を選択',
    aiWriting: {
      label: 'AIライティングアシスタント',
      desc: '文法、書き換え、トーン、メールの下書き',
    },
    aiSummarizer: {
      label: 'AIテキスト要約ツール',
      desc: '短・中・箇条書きの要約',
    },
    aiFinder: {
      label: 'AIスマートツールファインダー',
      desc: '平易な言葉で適切なツールを見つける',
    },
  },
  footer: {
    tagline:
      'ライター、エンジニア、マーケター、アナリストのための、高速でブラウザ中心の日常ユーティリティ集です。ローカルで動作し、負荷を最小限に抑えて構築されています。',
    categories: 'カテゴリ',
    platformAi: 'プラットフォームとAI',
    legal: '法的情報',
    home: 'ホーム',
    allToolsDirectory: 'すべてのツールディレクトリ',
    aboutUs: '私たちについて',
    contact: 'お問い合わせ',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    xmlSitemap: 'XMLサイトマップ',
    rightsReserved: '全著作権所有。',
    deployedNote: 'ブラウザサイドのユーティリティ · Cloudflare Pagesでホスティング',
  },
  common: {
    copy: 'コピー',
    copied: 'コピーしました',
    download: 'ダウンロード',
    clear: 'クリア',
    loadSample: 'サンプルを読み込む',
    reset: 'リセット',
    search: '検索',
    close: '閉じる',
    cancel: 'キャンセル',
    save: '保存',
    submit: '送信',
    loading: '読み込み中...',
    processing: '処理中...',
    upload: 'アップロード',
    chooseFile: 'ファイルを選択',
    dragDrop: 'ファイルをここにドラッグ＆ドロップ',
    tryAgain: 'もう一度試す',
    openTool: 'ツールを開く',
    browserSide: 'ブラウザサイド',
    freeAiTool: '無料AIツール',
    externalApi: '外部API',
  },
  home: {
    seoTitle: 'UtilityFlow – 高速なブラウザ型オンラインユーティリティツール',
    seoDescription:
      'テキスト分析、開発者向け整形、計算機、PDF、SEOチェック、画像ワークフローのための、無料で高速、プライバシーを重視したオンラインユーティリティツールです。',
    seoKeywords: [
      'オンラインユーティリティツール',
      'ブラウザツール',
      'テキストツール',
      '開発者ツール',
      'オンライン計算機',
      'PDFツール',
      'SEOツール',
    ],
    eyebrow: 'UtilityFlowプラットフォーム · 7つの主要カテゴリ · {count}のライブユーティリティ',
    h1: '速さとプライバシーのために作られた、実用的なオンラインユーティリティ。',
    heroDescription:
      'UtilityFlowは、85のブラウザ中心ユーティリティと、無料のAIライティング、要約、スマートなツール発見を、テキスト、開発者、計算機、ソーシャルメディア、PDF、SEO、画像のワークフローにわたって整理しています。',
    exploreCategories: 'カテゴリを探す',
    openDirectory: '完全なディレクトリを開く',
    aiWriting: 'AIライティング',
    aiSummarizer: 'AI要約',
    aiFinder: 'AIツールファインダー',
    metrics: {
      toolCategories: 'ツールカテゴリ',
      browserUtilities: 'ブラウザユーティリティ',
      liveTools: 'ライブツール',
      accountRequired: 'アカウントが必要',
      none: 'なし',
    },
    aiSpotlight: {
      badge: '無料AIスイート · ログイン不要',
      title: '無料AIツール',
      description:
        '登録なしで、数秒で下書きを改善し、長い文書を要約し、適切なツールを見つけられます。',
    },
    popular: {
      title: '人気のツール',
      description: 'ライティング、開発、計算で最もよく使われる日常ユーティリティです。',
      viewDirectory: 'ツールディレクトリを見る',
    },
    categories: {
      title: 'ツールカテゴリ',
      description:
        'ライティング、コーディング、数学、公開、文書、検索最適化、メディアのワークフローをカバーするために設計された7つの専門スイートです。',
      includes: '含まれるもの：{names}',
    },
    directory: {
      title: 'すべてのツールディレクトリ',
      description:
        'カテゴリやキーワードで絞り込み、任意のライブユーティリティやカテゴリハブに直接移動できます。',
      filterPlaceholder: 'カテゴリやツールで絞り込む...',
      allCategories: 'すべてのカテゴリ',
      noMatch: '「{query}」に一致するカテゴリやツールがありません。',
      resetFilters: 'フィルターをリセット',
      upcomingUtilities: '近日公開のユーティリティ：{names}',
      scheduledInBatch: 'バッチ{batch}で予定',
      toolsActive: '{count}のツールが有効',
      openCategory: 'カテゴリページを開く',
    },
    why: {
      title: 'UtilityFlowを選ぶ理由',
      description: '広告だらけのユーティリティサイトに対する、クリーンで信頼できる選択肢として設計されています。',
      items: [
        {
          title: 'ブラウザ中心のプライバシー',
          description:
            '中心的な計算、文字列変換、整形はクライアントのメモリ内で直接実行されるため、機密の下書きやJSONペイロードがデバイス内に留まります。',
        },
        {
          title: '高速で軽量な配信',
          description:
            'コード分割されたツールモジュールと最小限のランタイム依存関係により、どの接続でも初期ページ読み込みが軽く、Core Web Vitalsが応答性を保ちます。',
        },
        {
          title: '恒久的なクリーンURL',
          description:
            'すべてのユーティリティが、構造化メタデータ、使用例、ブラウザ更新時の直接ディープリンクの信頼性を備えた専用パスにあります。',
        },
        {
          title: '予測可能で検証可能な結果',
          description:
            'ツールは、煩わしいポップアップや誤解を招く表示なしに、決定論的な出力、透明な手順、アクセスしやすいコントロールに重点を置いています。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      description:
        'UtilityFlowの動作方法と、今後のバッチで期待できることについての重要な詳細です。',
    },
    faqs: [
      {
        question: 'UtilityFlowのツールはアカウントを作らずに無料で使えますか？',
        answer:
          'はい。UtilityFlowの85のブラウザユーティリティと3つのAIツールはすべて、登録、ログインの壁、クレジット、サブスクリプションなしで無料で利用できます。',
      },
      {
        question: 'UtilityFlowはテキスト、コード、ファイルをサーバーにアップロードしますか？',
        answer:
          '85の中心的なブラウザユーティリティはすべて、入力をアップロードせずにウェブブラウザ内でローカルに実行されます。3つの任意の無料AIツール（AIライティングアシスタント、AIテキスト要約ツール、AIスマートツールファインダー）は、テキストを保存せずにサーバーサイドのGroq推論でプロンプトを安全に処理します。',
      },
      {
        question: '88のツールはプラットフォーム全体でどのように整理されていますか？',
        answer:
          'UtilityFlowは7つの主要カテゴリ（テキスト＆ライティング、開発者、計算機、ソーシャルメディア、PDF、SEO、画像＆ファイルツール）をカバーし、合計85のブラウザツールと、プラットフォームに統合された3つの無料AIツールがあります。',
      },
      {
        question: '特定のツールへの直接リンクをブックマークしたり共有したりできますか？',
        answer:
          'はい。すべてのツールとカテゴリには、/word-counter/、/ai-writing-assistant/、/category/developer-tools/のような、直接読み込めてブラウザ更新時にも機能する恒久的でクリーンなURLがあります。',
      },
      {
        question: 'UtilityFlowはスマートフォンやタブレットでもスムーズに動作しますか？',
        answer:
          'はい。ライトモードとダークモードを含む、すべてのレイアウト、ナビゲーションコントロール、インタラクティブなワークスペースは、アクセスしやすいタッチターゲットとレスポンシブグリッドを備えたモバイルファーストで設計されています。',
      },
    ],
    trustLine: 'すべてのツールは無料 • 登録不要 • ブラウザでそのまま使えます',
  },
  directory: {
    seoTitle: 'すべてのオンラインユーティリティツールディレクトリ | UtilityFlow',
    seoDescription:
      'UtilityFlowのブラウザ型ユーティリティとカテゴリをすべて閲覧・検索できます。ライティング、開発、計算機、PDF、SEO、画像向けに整理されています。',
    seoKeywords: ['ユーティリティツールディレクトリ', 'すべてのオンラインツール', '無料ブラウザツール'],
    title: 'すべてのツールディレクトリ',
    description:
      'UtilityFlowに登録された{count}のライブユーティリティをすべて閲覧するか、ブラウザと無料AIワークフローにわたる7つのカテゴリハブを探してください。',
    searchPlaceholder: 'ツール名、キーワード、カテゴリで検索...',
    showing: '{categories}カテゴリにわたる{tools}のライブツールを表示中',
    all: 'すべて',
    availableTools: '利用可能なツール',
    categorySuites: 'カテゴリスイート',
    visitHub: '{name}ハブを訪れる',
    plannedToolsInclude: '予定されているツール：{names}',
    noMatch: 'フィルターに一致するカテゴリやツールがありません。',
    clearFilters: 'フィルターをクリア',
  },
  category: {
    batchLabel: 'バッチ{batch}',
    plannedCount: '{count}のツールが予定されています',
    toolsCount: '{count}のツール',
    toolsLive: '{count}のツールが有効',
    ofToolsLive: '{total}中{count}のツールが有効',
    availableTools: '利用可能な{name}',
    exploreOther: '他のカテゴリを探す',
    scheduledTitle: 'バッチ{batch}の実装に向けて予定されています',
    scheduledDescription:
      'このカテゴリハブは{name}アーキテクチャ内で有効で、インデックスされています。ブラウザサイド機能を備えた専用の個別ツールページは、バッチ{batch}の期間中にここへ追加されます。',
    plannedToolsTitle: 'このカテゴリで予定されているツール：',
  },
  toolPage: {
    howToUse: '{name}の使い方',
    practicalExamples: '実用的な例',
    faqs: 'よくある質問',
    keyBenefits: '主なメリット',
    commonUseCases: '一般的なユースケース',
    runsLocally: 'ブラウザ内でローカルに実行されます',
    externalApi: '外部API連携',
    freeAiTool: '無料AIツール · ログイン不要',
    loadingWorkspace: '{name}のワークスペースを読み込み中...',
    input: '入力',
    output: '出力',
    relatedTitle: '関連ツール',
    relatedDescription: '補完的なユーティリティでワークフローを続けましょう。',
    browseAll: 'すべての{name}を閲覧',
    moreToolsIn: 'その他のツール',
    willAppear: 'バッチ{batch}の公開時にここに表示されます。',
  },
  search: {
    placeholder:
      'ツールやカテゴリを検索（例：ワードカウンター、JSON、PDF、計算機）...',
    search: '検索',
    tools: 'ツール',
    categories: 'カテゴリ',
    noResults: '「{query}」に一致するツールやカテゴリが見つかりませんでした。',
    viewDirectory: '完全なディレクトリを見る',
    clearSearch: '検索をクリア',
    ariaLabel: 'ツールやカテゴリを検索',
  },
  notFound: {
    seoTitle: 'ページが見つかりません（404）| UtilityFlow',
    seoDescription:
      'リクエストされたツールやページがUtilityFlowで見つかりませんでした。ユーティリティディレクトリを検索するか、カテゴリを閲覧してください。',
    eyebrow: '404 · 見つかりません',
    title: 'そのページが見つかりませんでした。',
    description:
      'URLが移動したか、このユーティリティがまだ公開されていない可能性があります。下で検索するか、カテゴリを閲覧して必要なものを見つけてください。',
    returnHome: 'ホームに戻る',
    browseDirectory: 'ディレクトリを閲覧',
    browseCategories: 'カテゴリを閲覧',
  },
  about: {
    seoTitle: 'UtilityFlowについて – ブラウザ中心のオンラインツールプラットフォーム',
    seoDescription:
      'UtilityFlowが、アカウント、煩雑さ、不要なデータアップロードなしに、7つのカテゴリにわたる高速でプライバシーを重視したブラウザユーティリティをどのように構築しているかをご紹介します。',
    title: 'UtilityFlowについて',
    intro:
      'UtilityFlowは、日常のデジタルワークのために85の焦点を絞った信頼できるブラウザユーティリティを構築する、独立したウェブプラットフォームです。',
    whyTitle: 'UtilityFlowを作った理由',
    whyP1:
      '日常的なオンラインタスク、たとえば単語数のカウント、JSONの検証、文字数制限の確認、ローン支払いの計算、画像の圧縮は、しばしば人々を、煩わしいオーバーレイだらけの遅いサイト、わかりにくいダウンロード、必須の登録へと追い込みます。',
    whyP2:
      '私たちの目標はシンプルです。すべてのユーティリティに、すばやく読み込まれ、ツールの仕組みを明確に説明し、ウェブ標準が許す限りブラウザ内で直接実行される、クリーンな専用ページを与えることです。',
    principlesTitle: '中心的なエンジニアリング原則',
    principles: [
      {
        title: 'クライアントサイド実行',
        description:
          'テキスト、コード、計算、ローカルファイルのユーティリティは、ブラウザのメモリ内で入力を処理するため、作業データがリモートサーバーに送信されません。',
      },
      {
        title: '透明なAPI通知',
        description:
          '専門的なユーティリティが外部検索やサーバー呼び出しを必要とする場合、実行する前にそのツールのページで明示的に開示します。',
      },
      {
        title: 'アクセスしやすいインターフェース',
        description:
          'キーボードナビゲーション、読みやすいコントラスト、明確なエラーフィードバック、レスポンシブなモバイルコントロールが、すべてのテンプレートに組み込まれています。',
      },
      {
        title: 'モジュール式の公開',
        description:
          'ツールは7つのカテゴリバッチで出荷・検証されるため、すべてのユーティリティが徹底した機能テストとドキュメントを受けます。',
      },
    ],
    categoriesTitle: '予定されている7つのツールカテゴリ',
    feedbackTitle: 'フィードバックやリクエストはありますか？',
    feedbackBefore:
      '計算のエッジケース、アクセシビリティの問題に気づいた場合や、今後のバッチ向けユーティリティの提案がある場合は、',
    feedbackLink: 'お問い合わせページ',
    feedbackAfter: 'からご連絡ください。',
  },
  contact: {
    seoTitle: 'UtilityFlowへのお問い合わせ – サポート・バグ報告・提案',
    seoDescription:
      '問題の報告、新しいユーティリティツールの提案、プライバシーや規約についての質問は、UtilityFlowチームまでご連絡ください。',
    title: 'お問い合わせ',
    intro:
      'バグ報告、ツールの提案、一般的なお問い合わせをお送りください。すべての送信内容を読み、ツールの精度とアクセシビリティを改善する修正を優先します。',
    name: '名前',
    email: 'メールアドレス',
    topic: 'トピック',
    message: 'メッセージ',
    submit: 'メッセージを送信',
    sending: '送信中…',
    sendError: 'メッセージを送信できませんでした。もう一度お試しください。',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'ツール、バグ、質問について詳しく説明してください...',
    topics: [
      'ツールの提案',
      'バグ報告',
      'SEOまたはコンテンツの修正',
      'プライバシーまたは法的なお問い合わせ',
      '一般的な質問',
    ],
    errors: {
      name: '名前を入力してください。',
      emailEmpty: 'メールアドレスを入力してください。',
      emailInvalid: '有効なメールアドレスを入力してください。',
      subject: 'トピックを選択または入力してください。',
      message: 'メッセージに10文字以上含めてください。',
    },
    successTitle: 'メッセージを送信しました',
    successThanks:
      'ありがとうございます、{name}さん。メッセージを送信しました。まもなくご連絡いたします。',
    successNote:
      '追加でお伝えしたいことがございましたら、以下のメールアドレスまで直接ご連絡いただけます',
    sendAnother: '別のメッセージを送る',
    directEmail: '直接メール',
    directEmailText: '直接書きたい場合は、チームまでメールでご連絡ください：',
  },
  privacy: {
    seoTitle: 'プライバシーポリシー | UtilityFlow',
    seoDescription:
      'ブラウザサイドのツール実行、Cookie、サーバーログ、サードパーティ広告の開示について説明する、UtilityFlowのプライバシーポリシーをお読みください。',
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日：2026年11月',
    sections: [
      {
        title: '1. 概要',
        paragraphs: [
          'UtilityFlowは、クライアントサイドのブラウザ処理を中心に設計されています。このプライバシーポリシーでは、ウェブサイトにアクセスしたときに処理される情報、ユーティリティが入力をどのように扱うか、Cookieや広告技術がどのように動作するかを説明します。',
        ],
      },
      {
        title: '2. ツール入力、ブラウザ処理、無料AIツール',
        paragraphs: [
          '85のブラウザ型ツールに入力されたテキスト、数字、コードスニペット、ファイルは、デバイスの外に出ることなく、ブラウザセッション内でローカルに処理されます。',
          '3つの任意の無料AIツール（AIライティングアシスタント、AIテキスト要約ツール、AIスマートツールファインダー）は、送信されたテキストを保護されたバックエンド経由でGroqに送り、リアルタイム推論を行います。プロンプトの保存や記録は行わず、無料の1日あたりのレート制限にはUTC日付付きSHA-256ハッシュだけを使うため、訪問者の生のIPアドレスが保存されることはありません。',
        ],
      },
      {
        title: '3. ホスティングログと技術テレメトリ',
        paragraphs: [
          'UtilityFlowはCloudflare Pagesでホスティングされています。標準的なウェブホスティングプロバイダーと同様に、エッジネットワークは、ページを確実に配信し、悪用を軽減し、セキュリティを維持するため、標準的なHTTPリクエストメタデータ（IPアドレス、ブラウザのユーザーエージェント、リクエストされたURL、タイムスタンプなど）を自動で処理する場合があります。',
        ],
      },
      {
        title: '4. Cookieとサードパーティ広告',
        paragraphs: [
          'ツールへの無料アクセスを支えるため、サードパーティの広告ネットワーク（Google AdSenseなど）から広告を表示する場合があります。Googleを含むサードパーティベンダーは、ユーザーのこのウェブサイトや他のウェブサイトへの過去の訪問に基づいて広告を配信するため、Cookieやウェブビーコンを使用する場合があります。',
          'Google広告設定にアクセスするか、ブラウザの設定で直接Cookie設定を管理することで、パーソナライズド広告をオプトアウトできます。',
        ],
      },
      {
        title: '5. 外部リンク',
        paragraphs: [
          'ドキュメントやツールページが外部ウェブサイトにリンクする場合があります。サードパーティのウェブサイトのプライバシー慣行やコンテンツについて、当社は責任を負いません。',
        ],
      },
    ],
    contactTitle: '6. お問い合わせ',
    contactBefore:
      'このプライバシーポリシーについて質問がある場合は、',
    contactLink: 'お問い合わせページ',
    contactMiddle: 'またはメールでご連絡ください',
    optOutGoogleAds: 'Google 広告設定',
    optOutAboutAds: 'AboutAds.info オプトアウト',
  },
  terms: {
    seoTitle: '利用規約 | UtilityFlow',
    seoDescription:
      'UtilityFlowブラウザユーティリティの利用、知的財産、精度の免責事項、責任の制限を定める利用規約をご確認ください。',
    title: '利用規約',
    lastUpdated: '最終更新日：2026年11月',
    sections: [
      {
        title: '2. 許可される利用',
        paragraphs: [
          'UtilityFlowは、個人的、教育的、商業的な生産性タスクに利用できます。悪意のあるトラフィックの自動化、サイト配信の妨害の試み、セキュリティ保護のリバースエンジニアリング、違法な活動へのユーティリティの使用を行わないことに同意するものとします。',
        ],
      },
      {
        title: '3. 精度と情報の免責事項',
        paragraphs: [
          'すべてのユーティリティを注意深くテストしていますが、すべてのツール、計算、変換、SEOチェックは「現状のまま」および「利用可能なまま」提供されます。財務、法律、医療、または本番エンジニアリングの決定を行う前に、出力を独立して検証してください。',
        ],
      },
      {
        title: '4. 知的財産',
        paragraphs: [
          'UtilityFlowのインターフェース、ブランドアセット、ドキュメント、ソースコードは、適用される知的財産法によって保護されています。クライアントサイドユーティリティを使って処理するテキスト、コード、文書、画像の完全な所有権は、あなたに帰属します。',
          'UtilityFlowは独立したプロジェクトであり、YouTube、Instagram、Google、その他本サイトで言及されるいかなるサードパーティブランドとも提携しておらず、推奨も受けておらず、関係もありません。',
        ],
      },
      {
        title: '5. 責任の制限',
        paragraphs: [
          '法律で認められる最大限の範囲において、UtilityFlowとその貢献者は、本プラットフォームの使用または使用不能から生じる間接的、付随的、特別、または結果的な損害について責任を負いません。',
        ],
      },
    ],
    acceptanceTitle: '1. 規約への同意',
    acceptanceBefore:
      'UtilityFlowにアクセスまたは利用することにより、あなたは本利用規約および',
    acceptanceLink: 'プライバシーポリシー',
    acceptanceAfter:
      'に拘束されることに同意するものとします。本規約のいずれかの部分に同意できない場合は、ウェブサイトの利用を中止してください。',
    changesTitle: '6. 変更とお問い合わせ',
    changesBefore:
      '新しいツールバッチの公開に伴い、本利用規約を更新する場合があります。質問は',
    changesLink: 'お問い合わせページ',
    changesAfter: 'までお寄せください。',
  },
};
