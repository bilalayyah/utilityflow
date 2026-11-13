import type { CategoryLocaleOverride } from '../types';

/**
 * Japanese overrides for the 7 categories, keyed by category id.
 * Every category: slug (matches CATEGORY_LOCALE_SLUGS.ja in
 * src/locales/config.ts), name, shortName, description, longDescription,
 * seo, sampleToolNames (5 — exactly the Japanese tool names).
 * Category slugs are romaji: tekisuto-tsuru, kaihatsusha-tsuru, keisanki,
 * sosharu-media-tsuru, pdf-tsuru, seo-tsuru, gazo-fairu-tsuru.
 * Sample tool ids per category (first 5 in registry order, as in the
 * Indonesian file): text-writing: word-counter, character-counter,
 * case-converter, remove-duplicate-lines, text-diff-checker; developer:
 * json-formatter, base64-encoder-decoder, url-encoder-decoder,
 * uuid-generator, regex-tester; calculators: age-calculator,
 * percentage-calculator, loan-emi-calculator, discount-margin-calculator,
 * date-difference-calculator; social-media: qr-code-generator,
 * utm-link-builder, social-media-character-limit-checker,
 * unicode-text-generator, bio-line-break-formatter; pdf: merge-pdf,
 * split-pdf, images-to-pdf, pdf-page-rotator, pdf-metadata-editor; seo:
 * meta-tag-generator, serp-snippet-preview, url-slug-generator,
 * robots-txt-generator, schema-markup-generator; image-file:
 * image-compressor, image-resizer, image-format-converter,
 * color-contrast-checker, password-generator.
 */
export const JA_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'tekisuto-tsuru',
    name: 'テキスト＆ライティングツール',
    shortName: 'テキスト＆ライティング',
    description:
      '単語数を数え、テキストを整形し、余分なスペースを掃除し、大文字・小文字を変換し、可読性をブラウザ内で直接チェックできます。',
    longDescription:
      'ライター、編集者、コンテンツチーム、学生のための、正確なライティングと文字列操作のユーティリティです。すべてのテキスト操作はデバイス上で即座に実行され、下書きがサーバーにアップロードされることはありません。',
    seo: {
      title: 'テキスト＆ライティングツール – 単語数カウンター無料オンラインツール集 | UtilityFlow',
      description:
        'ブラウザで使えるテキスト＆ライティングツールを探す：単語カウンター、文字数カウンター、大文字・小文字変換、行の並べ替え、テキストクリーナーをローカル処理で即座に利用できる無料ツール集です。すべてのツールはブラウザ内でローカルに動作し、下書きや入力内容がサーバーに送信されることはなく、安心して使えます。',
      keywords: [
        'テキストツール',
        'ライティングユーティリティ',
        '単語カウンター',
        '文字数カウンター',
        '大文字小文字変換',
      ],
    },
    sampleToolNames: [
      '単語カウンター',
      '文字数カウンター',
      '大文字・小文字変換ツール',
      '重複行削除ツール',
      'テキスト差分チェッカー'
    ],
  },
  developer: {
    slug: 'kaihatsusha-tsuru',
    name: '開発者ツール',
    shortName: '開発者ツール',
    description:
      'JSONを整形し、Base64をエンコードし、正規表現をテストし、JWTをデコードし、ハッシュを作成できます。サーバーは不要です。',
    longDescription:
      '素早いデバッグとクリーンなデータ変換のための、日常的なエンジニアリングユーティリティです。ペイロードを貼り付け、構造化フォーマットを確認し、構文をローカルで検証するため、機密トークンがデバイスの外に出ることはありません。',
    seo: {
      title: '開発者ツール – JSON・正規表現・ハッシュ対応の無料オンラインツール | UtilityFlow',
      description:
        'JSON整形、正規表現テスト、Base64・URLエンコード、JWT確認、UUID生成をブラウザ内で安全に行えるクライアントサイドの開発者ユーティリティです。機密トークンをアップロードせず無料で使えます。ペイロードや機密トークンはデバイス内に留まり、サーバーに送信されることはなく、安心して使えます。',
      keywords: [
        '開発者ツール',
        'JSONフォーマッター',
        'Base64エンコーダー',
        '正規表現テスター',
        'JWTデコーダー',
      ],
    },
    sampleToolNames: [
      'JSONフォーマッター＆バリデーター',
      'Base64エンコーダー・デコーダー',
      'URLエンコーダー・デコーダー',
      'UUIDジェネレーター（v4・v7）',
      '正規表現テスター'
    ],
  },
  calculators: {
    slug: 'keisanki',
    name: '計算機ツール',
    shortName: '計算機',
    description:
      '年齢、パーセント、ローンの返済計画、BMI、単位換算、ビジネス上のマージンを確かな精度で計算できます。',
    longDescription:
      '正確でわかりやすい、金融、日付、健康、数学の計算機です。ステップごとの内訳、きれいな結果表、入力を変更したときの即座の再計算を確認できます。',
    seo: {
      title: '計算機ツール – 金融・日付・単位・健康計算の無料オンライン計算機ツール | UtilityFlow',
      description:
        '年齢、パーセント、ローン返済、マージン、単位換算をすばやく透明に計算できるオンライン計算機です。結果は即座に表示され、ステップごとの内訳も確認できる無料ツール集です。入力を変更すると結果が即座に再計算され、ローン、割引、年齢、日付差分など金融・日付・健康・数学のさまざまな計算に無料で対応するツール集です。',
      keywords: [
        '計算機オンライン',
        '年齢計算ツール',
        'パーセント計算ツール',
        'ローン計算ツール',
        '単位変換ツール',
      ],
    },
    sampleToolNames: [
      '年齢計算機',
      'パーセント計算機',
      'ローン・EMI計算機',
      '割引・利益率計算機',
      '日数計算機'
    ],
  },
  'social-media': {
    slug: 'sosharu-media-tsuru',
    name: 'ソーシャルメディアツール',
    shortName: 'ソーシャルメディア',
    description:
      '追跡用UTMリンクを作成し、投稿の長さをプレビューし、QRコードを生成し、モダンなソーシャルチャンネル向けにキャプションを整形できます。',
    longDescription:
      'クリエイター、グロースチーム、コミュニティ管理者のための、実用的なマーケティングと投稿のヘルパーです。キャンペーンの追跡パラメータを標準化し、プラットフォームの文字数制限を確認し、いつでもスキャンできるQRコードを作成します。',
    seo: {
      title: 'ソーシャルメディアツール – QRコード・UTM・投稿の無料オンラインツール | UtilityFlow',
      description:
        'UTMリンクの作成、QRコード生成、ソーシャルメディアの文字数制限チェック、ハッシュタグとプロフィールの整形ができる、クリーンで速い無料ブラウザユーティリティです。登録は不要です。キャンペーンの追跡パラメータを標準化し、投稿の文字数制限を確認して、効果的なソーシャル投稿を準備できる無料ツール集です。',
      keywords: [
        'ソーシャルメディアツール',
        'QRコードジェネレーター',
        'UTMリンクビルダー',
        'ハッシュタグフォーマッター',
        'キャプションカウンター',
      ],
    },
    sampleToolNames: [
      'QRコード作成ツール',
      'UTMリンク作成ツール',
      'SNS文字数チェックツール',
      'おしゃれ文字変換ツール',
      'プロフィール改行ツール'
    ],
  },
  pdf: {
    slug: 'pdf-tsuru',
    name: 'PDFツール',
    shortName: 'PDFツール',
    description:
      'PDFを結合、分割、並べ替え、透かし追加、変換できます。個人ファイルのアップロードなしにブラウザ内で処理します。',
    longDescription:
      '機密性を重視して設計された文書ワークフローです。契約書、請求書、学習資料を、リモートサーバーではなく、WebAssemblyとブラウザのCanvas APIを使ってクライアントのメモリ内で直接処理します。',
    seo: {
      title: 'PDFツール – ブラウザ内で使えるプライベートPDFユーティリティ無料 | UtilityFlow',
      description:
        'PDFの結合、分割、回転、変換をブラウザ内でローカルに行えます。機密文書をサードパーティのサーバーにアップロードすることなく、完全に無料で使えるプライベートなPDFツール集です。契約書や請求書などの機密文書も、WebAssemblyとブラウザのCanvas APIを使ってクライアントのメモリ内で安全に処理できます。',
      keywords: [
        'PDFツール',
        'PDF結合',
        'PDF分割',
        '画像からPDFへ',
        'ブラウザPDFエディター',
      ],
    },
    sampleToolNames: [
      'PDF結合ツール',
      'PDF分割ツール',
      '画像をPDFに変換するツール',
      'PDFページ回転ツール',
      'PDFメタデータ編集ツール'
    ],
  },
  seo: {
    slug: 'seo-tsuru',
    name: 'SEOツール',
    shortName: 'SEOツール',
    description:
      'SERPスニペットをプレビューし、OpenGraphタグを生成し、robots.txtとXMLサイトマップを作成し、キーワード密度を確認できます。',
    longDescription:
      '出版社、インディー創業者、SEOスペシャリストのための、技術的・オンページの検索最適化ユーティリティです。タイトルの長さを検証し、構造化メタデータを組み立て、クリーンなURLスラッグを数秒で作成します。',
    seo: {
      title: 'SEOツール – SERPプレビュー・メタタグ・スラッグ作成の無料ツール集 | UtilityFlow',
      description:
        '無料のSEOユーティリティでウェブサイトを最適化：SERPスニペットプレビュー、メタタグジェネレーター、robots.txtビルダー、キーワード密度チェッカーが使えます。ブラウザ内で安全に動作します。タイトルの長さを検証し、構造化データを組み立て、クリーンなURLスラッグを数秒で作成できる無料ツール集です。',
      keywords: [
        'SEOツール',
        'メタタグジェネレーター',
        'SERPプレビュー',
        'robots.txtジェネレーター',
        'スラッグジェネレーター',
      ],
    },
    sampleToolNames: [
      'メタタグ＆Open Graphジェネレーター',
      'SERPスニペットプレビュー',
      'URLスラッグ＆SEOパス最適化ツール',
      'robots.txtジェネレーター',
      'スキーママークアップ（JSON-LD）ジェネレーター',
    ],
  },
  'image-file': {
    slug: 'gazo-fairu-tsuru',
    name: '画像＆ファイルツール',
    shortName: '画像＆ファイル',
    description:
      '画像を圧縮、リサイズ、PNG/JPG/WebPに変換し、WCAGコントラストをテストし、QRコードをスキャンし、ファイルのハッシュを確認し、ファビコンをローカルで作成できます。',
    longDescription:
      'HTML5 Canvas、Web Crypto API、ブラウザのFile APIを活用した、高速なメディア・暗号・ファイルユーティリティです。Core Web Vitals向けにウェブアセットを最適化し、ファイルのSHA-256チェックサムを検証し、画像からパレットを抽出し、ファビコンを作成できます。ファイルのアップロードはありません。',
    seo: {
      title: '画像＆ファイルツール – 画像圧縮・QRコード・ファイル管理の無料ツール集 | UtilityFlow',
      description:
        'PNG、JPG、WebP画像の圧縮、リサイズ、回転、変換をローカルで行い、ファイルのチェックサムを検証し、QRコードをスキャンし、コントラストを確認し、ファビコンを作成できる無料ツール集です。Core Web Vitals向けにウェブアセットを最適化し、ファイルの整合性を検証して、サイトを高速に保てる無料ツール集です。',
      keywords: [
        '画像ツール',
        '画像圧縮ツール',
        '画像リサイズ',
        'WebP変換ツール',
        'カラーコントラストチェッカー',
      ],
    },
    sampleToolNames: [
      '画像圧縮ツール',
      '画像リサイズ＆クロップツール',
      '画像形式変換ツール（PNG / JPG / WebP）',
      'カラーコントラストチェッカー＆パレット抽出ツール',
      'パスワード＆パスフレーズジェネレーター',
    ],
  },
};
