import type { ToolLocaleOverride } from "../../types";

/**
 * Japanese overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Same shape as src/locales/id/tools/batch5.ts.
 * Slugs are romaji transliterations of the Japanese tool names.
 */
export const JA_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  "meta-tag-generator": {
    slug: "meta-tagu-jenereta",
    name: "メタタグ＆Open Graphジェネレーター",
    shortDescription:
      "HTMLのタイトル、メタディスクリプション、カノニカル、robots、Open Graph、Twitter/Xカードのタグを、ライブカードプレビュー付きで生成します。",
    keywords: [
      "メタタグジェネレーター",
      "オープングラフジェネレーター",
      "ツイッターカードジェネレーター",
      "HTML SEOヘッドタグ",
      "オープングラフメタタグ",
      "SEOメタタグジェネレーター",
      "メタディスクリプションジェネレーター",
      "HTMLメタタグ作成",
      "ソーシャルメディアメタタグ",
    ],
    seo: {
      title: "メタタグジェネレーター – Open Graph・Xカード対応の無料ツール | UtilityFlow",
      description:
        "タイトル、ディスクリプション、カノニカル、Open Graph、Twitterカードのタグを、長さチェックとソーシャルカードプレビュー付きで作成できます。HTMLエスケープにも対応し、公開前に共有時の見た目を確認してmeta-tags.htmlとして保存できます。共有前にプレビューで見た目を確認できます。",
      primaryKeyword: "メタタグジェネレーター",
      secondaryKeywords: [
        "オープングラフタグジェネレーター",
        "ソーシャルシェア用メタジェネレーター",
        "HTMLヘッドSEOビルダー",
        "ツイッターカード用メタジェネレーター",
      ],
      longTailKeywords: [
        "オープングラフとツイッターカードのHTMLメタタグを無料で生成",
        "メタタイトルとディスクリプションの長さをソーシャルカードプレビューで確認",
        "貼り付け可能なSEOメタヘッドタグのHTMLをダウンロード",
        "オープングラフプレビュー付きでウェブサイトのメタタグを作成",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "標準に準拠したHTMLの<head>メタデータを作成します。<title>、<meta name=\"description\">、カノニカルURL、インデックス指定、Open Graphタグ（og:*）、Twitter/Xカードのマークアップに対応し、属性のエスケープとライブのソーシャルカードプレビューを備えています。",
  },
  "serp-snippet-preview": {
    slug: "serp-sunipetto-purebyu",
    name: "SERPスニペットプレビュー",
    shortDescription:
      "Googleのデスクトップとモバイルの検索結果をシミュレーションします。Canvasによるピクセル幅でのタイトルチェックと、キーワードの太字マッチングに対応しています。",
    keywords: [
      "SERPプレビューツール",
      "Googleスニペットシミュレーター",
      "SEOタイトルピクセル幅チェッカー",
      "メタディスクリプションプレビュー",
      "Google SERPプレビュー",
      "検索結果プレビューツール",
      "SEOスニペットチェッカー",
      "Googleタイトルチェッカー",
      "メタディスクリプション長さチェッカー",
    ],
    seo: {
      title: "SERPスニペットプレビュー – ピクセル幅チェック無料オンラインツール | UtilityFlow",
      description:
        "Googleの検索スニペットをデスクトップとモバイルでプレビューします。Canvasによるピクセル幅のタイトルチェック、キーワードの太字表示、文字切れの警告で、公開前にタイトルとディスクリプションを整え、クリック率を高められます。デスクトップとモバイルの両方で、タイトルと説明文の見栄えを確認できます。",
      primaryKeyword: "SERPスニペットプレビュー",
      secondaryKeywords: [
        "Google SERPシミュレーター",
        "SEOタイトルピクセル幅チェッカー",
        "モバイル検索結果プレビュー",
        "デスクトップSERPプレビューツール",
      ],
      longTailKeywords: [
        "GoogleのSEOタイトル580pxのピクセル幅をオンラインでチェック",
        "デスクトップとモバイルの検索スニペットの文字切れをプレビュー",
        "メタディスクリプション内のキーワード太字マッチングをテスト",
        "ページ公開前にGoogle検索結果のスニペットをプレビュー",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "文字数の目安だけでなく、HTML5 Canvasのフォント計測を使ったライブ計算で、SEOタイトルがGoogleの約580ピクセルの表示幅に収まるかを測ります。デスクトップとモバイルの検索カードを、キーワードの太字マッチング付きでプレビューできます。",
  },
  "xml-sitemap-generator": {
    slug: "xml-saitomappu-jenereta",
    name: "XMLサイトマップジェネレーター",
    shortDescription:
      "URLリストから有効なSitemaps.org形式のXMLファイルを生成します。重複除去、<lastmod>、<changefreq>に対応し、.xmlとしてダウンロードできます。",
    keywords: [
      "XMLサイトマップジェネレーター",
      "サイトマップXMLビルダー",
      "XMLサイトマップ作成オンライン",
      "SEOサイトマップ作成",
      "サイトマップジェネレーター無料",
      "XMLサイトマップ作成オンライン",
      "サイトマップXML生成",
      "サイトマップビルダーツール",
      "ウェブサイトサイトマップジェネレーター",
    ],
    seo: {
      title: "XMLサイトマップジェネレーター – sitemap.xml無料作成ツール | UtilityFlow",
      description:
        "カノニカルURLのリストから有効なsitemap.xmlを作成します。重複除去、lastmod日付、changefreqヒント、XMLエスケープに対応し、サイトルートに置くだけで検索エンジンへの発見を助ける無料ツールです。サイトマップを提出すれば、検索エンジンが新しいページをより早く見つけられます。",
      primaryKeyword: "XMLサイトマップジェネレーター",
      secondaryKeywords: [
        "サイトマップXMLビルダー",
        "サイトマップXML無料作成",
        "カノニカルURLサイトマップツール",
        "サイトマップXMLファイルジェネレーター",
      ],
      longTailKeywords: [
        "URLリストから有効なXMLサイトマップをオフラインで生成",
        "lastmodとchangefreqタグ付きのサイトマップXMLを作成",
        "XMLサイトマップのURL内の特殊文字をエスケープ",
        "小規模ウェブサイト用のXMLサイトマップを無料でオンライン作成",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "カノニカルなhttps://のURLリストを、Sitemaps 0.9スキーマに準拠した有効なsitemap.xmlに変換します。無効なURLのフィルタリング、自動の重複除去、XML文字のエスケープ、.xmlエクスポートに対応しています。",
  },
  "robots-txt-generator": {
    slug: "robots-txt-jenereta",
    name: "robots.txtジェネレーター",
    shortDescription:
      "User-agentごとにグループ化された有効なrobots.txtのクローラールールを作成します。Allow/Disallowパス、Crawl-delay、Sitemap指定に対応しています。",
    keywords: [
      "robots.txtジェネレーター",
      "robots txt作成",
      "クローラーAllow Disallowビルダー",
      "サイトマップ指定ジェネレーター",
      "robots txt作成オンライン",
      "robots.txtファイルジェネレーター",
      "検索クローラーブロック",
      "Allow Disallow robots txt",
      "robots.txtチェッカービルダー",
    ],
    seo: {
      title: "robots.txtジェネレーター – クローラー指定ルールの無料作成ツール | UtilityFlow",
      description:
        "User-agentグループ、Allow・Disallowルール、crawl-delay、サイトマップリンクを含む有効なrobots.txtを、スタータープリセット付きで作成できます。無料でブラウザ内で動作し、サイトのクロールを細かく制御できます。誤って公開ページをブロックしないよう、出力前にルールを確認できます。",
      primaryKeyword: "robots.txtジェネレーター",
      secondaryKeywords: [
        "robots txtクリエーター",
        "クローラーパスのDisallow",
        "WordPressとSPAのrobots.txt",
        "robots.txtファイルクリエーター",
      ],
      longTailKeywords: [
        "React・Vite・Cloudflare Pages向けのきれいなrobots.txtを生成",
        "robots.txtファイルに複数のサイトマップ指定を追加",
        "robots.txtでステージング環境を検索クローラーからブロック",
        "AIクローラーをウェブサイトからブロックするrobots.txtを作成",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "公開サイト、SaaSウェブアプリ、WordPress、ステージングのロックダウン向けスタータープリセットを使い、きれいにグループ化されたrobots.txt指定を作成します。カスタムのUser-agent行、Allow/Disallow、Crawl-delay、Sitemap:宣言に対応しています。",
  },
  "schema-markup-generator": {
    slug: "sukima-makuappu-jenereta",
    name: "スキーママークアップ（JSON-LD）ジェネレーター",
    shortDescription:
      "Article、FAQPage、Product、Organization、BreadcrumbListの有効なSchema.org JSON-LDスクリプトを生成します。",
    keywords: [
      "スキーママークアップジェネレーター",
      "JSON-LDジェネレーター",
      "FAQスキーマジェネレーター",
      "構造化データビルダー",
      "構造化データジェネレーター",
      "Schema.org JSON-LDツール",
      "リッチスニペットスキーマジェネレーター",
      "FAQPageスキーマジェネレーター",
      "商品スキーママークアップ",
    ],
    seo: {
      title: "スキーママークアップジェネレーター – JSON-LD構造化データ無料作成ツール | UtilityFlow",
      description:
        "Article、FAQPage、Product、Organization、BreadcrumbListの有効なSchema.org JSON-LDを作成します。安全なHTMLエスケープ、スクリプトのコピー、.jsonldエクスポートに対応し、リッチリザルトの対象になる構造化データを作れます。手軽に作れます。",
      primaryKeyword: "スキーママークアップジェネレーター",
      secondaryKeywords: [
        "JSON-LDジェネレーターオンライン",
        "FAQPage構造化データツール",
        "商品スキーマビルダー",
        "構造化データマークアップツール",
      ],
      longTailKeywords: [
        "有効なSchema.org JSON-LDスクリプトタグを無料で生成",
        "動的なFAQPageとパンくず構造化データを作成",
        "HTMLスクリプトタグ用にJSON-LDを安全にエスケープ",
        "記事と商品ページ用のJSON-LDスキーママークアップを作成",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "Article、FAQPage、Product、Organization、BreadcrumbListのきれいなSchema.org JSON-LD構造化データブロックを作成します。動的な行ビルダー、スクリプトタグ内でのHTML安全な<のエスケープ、.jsonldエクスポートに対応しています。",
  },
  "url-slug-generator": {
    slug: "url-suraggu-jenereta",
    name: "URLスラッグ＆SEOパス最適化ツール",
    shortDescription:
      "記事の見出しを、アクセント文字を変換したきれいなSEO用URLスラッグに一括変換します。ストップワードのフィルタリングに対応しています。",
    keywords: [
      "URLスラッグジェネレーター",
      "SEOスラッグメーカー",
      "きれいなパーマリンクジェネレーター",
      "一括スラッグ変換",
      "SEOフレンドリーURLジェネレーター",
      "ブログタイトルからスラッグへの変換",
      "パーマリンクスラッグメーカー",
      "URL用ストップワード除去",
      "アクセントからASCIIへのスラッグ変換",
    ],
    seo: {
      title: "URLスラッグジェネレーター – SEOパーマリンク無料作成オンラインツール | UtilityFlow",
      description:
        "記事の見出しを小文字のSEOスラッグに一括変換します。アクセント文字の変換、ストップワード除去、単語境界での切り詰めに対応し、クリーンなパーマリンクをすべてブラウザ内で無料で作れます。見出しを貼り付けるだけで、ハイフンでつないだ読みやすいスラッグをまとめて生成し、完全なURLをプレビューしてコピーできます。",
      primaryKeyword: "URLスラッグジェネレーター",
      secondaryKeywords: [
        "SEOフレンドリーURLジェネレーター",
        "見出しからスラッグへの一括変換",
        "ストップワード除去スラッグクリーナー",
        "パーマリンクスラッグメーカー",
      ],
      longTailKeywords: [
        "ブログタイトルをきれいなSEO用URLスラッグに一括変換",
        "アクセント付き文字をASCIIのURLスラッグに変換",
        "長いURLスラッグをきれいな単語境界で切り詰め",
        "ブログタイトルをSEOフレンドリーなURLスラッグに一括変換",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "単発の投稿でも大量のコンテンツカレンダーでも、読みやすくハイフンでつないだパーマリンクに統一します。発音記号をきれいに変換し（Café → cafe）、任意でつなぎのストップワードを除去し、単語の途中で切れないよう最大長を守り、完全なURLをプレビューします。",
  },
  "keyword-density-checker": {
    slug: "kiwado-mitsudo-chekka",
    name: "キーワード密度＆コンテンツ分析ツール",
    shortDescription:
      "単語数、狙うキーワードの密度、読書時間、上位の1語・2語・3語フレーズの頻度を、ローカルで監査します。",
    keywords: [
      "キーワード密度チェッカー",
      "SEOコンテンツアナライザー",
      "Nグラム頻度アナライザー",
      "フレーズ繰り返し監査",
      "キーワード密度チェックオンライン",
      "コンテンツキーワード頻度ツール",
      "SEOテキストアナライザー無料",
      "ターゲットキーワード密度計算",
      "バイグラムトライグラムアナライザー",
    ],
    seo: {
      title: "キーワード密度チェッカー – コンテンツ監査・分析の無料オンラインツール | UtilityFlow",
      description:
        "記事の下書きやHTMLを貼り付け、単語数、読書時間、狙うキーワードの密度、上位の1語・2語・3語フレーズを確認できます。プライベートにブラウザ内で動作し、不自然な繰り返しを見つける無料ツールです。下書きを貼るだけで、トピックの偏りや不自然な繰り返しを一目で確認でき、自然な文章への改善に役立ちます。ぜひお試しください。",
      primaryKeyword: "キーワード密度チェッカー",
      secondaryKeywords: [
        "SEOコピー頻度アナライザー",
        "2語3語Nグラムカウンター",
        "キーワード繰り返しチェックオンライン",
        "ターゲットキーワード密度計算",
      ],
      longTailKeywords: [
        "貼り付けたHTMLコンテンツのキーワード密度をアップロードなしで分析",
        "ブログ下書きで使いすぎている2語・3語フレーズを見つける",
        "ブラウザ内でターゲットキーワードの頻度をきれいにチェック",
        "ブログ下書きのキーワード密度をオンラインで確認する方法",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "コンテンツの下書きや貼り付けたHTMLコピーを、語彙の深さ、読書時間、狙ったフレーズの正確なヒット数、上位の1語・2語・3語のNグラム頻度で検査します。古いキーワード割り当てを追うのではなく、うっかりした過剰な繰り返しを見つけるためのツールです。",
  },
  "canonical-hreflang-generator": {
    slug: "kanonikaru-hreflang-jenereta",
    name: "カノニカル・hreflang・301リダイレクトビルダー",
    shortDescription:
      "HTML/XMLのhreflangとカノニカルタグを生成したり、Cloudflare Pagesの_redirects、Apache、Nginx用の301リダイレクトを作成したりできます。",
    keywords: [
      "hreflangジェネレーター",
      "カノニカルタグビルダー",
      "301リダイレクトジェネレーター",
      "Cloudflare _redirectsビルダー",
      "カノニカルURLジェネレーター",
      "hreflangタグジェネレーター",
      "多言語SEOタグ",
      "301リダイレクトルールジェネレーター",
      "Apache htaccessリダイレクトビルダー",
    ],
    seo: {
      title: "カノニカル・hreflang・301リダイレクト生成の無料オンラインツール | UtilityFlow",
      description:
        "多言語ページ用のhreflangとカノニカルタグ、Cloudflare Pages、Apache、Nginx用の301リダイレクトルールを生成します。x-defaultや自己参照カノニカルにも対応し、コピーしてすぐデプロイできる無料ツールです。すべての言語版が互いを指す相互セットを、1回の操作で作成できます。",
      primaryKeyword: "hreflangジェネレーター",
      secondaryKeywords: [
        "カノニカルリンクタグジェネレーター",
        "301リダイレクト設定ビルダー",
        "Cloudflare Pagesリダイレクトジェネレーター",
        "カノニカルURLジェネレーター",
      ],
      longTailKeywords: [
        "hreflangのHTMLタグとXMLサイトマップのxhtmlリンクを生成",
        "旧URLリストをCloudflare Pagesの_redirects 301ルールに変換",
        "Apache htaccessとNginxの301リダイレクトをオンラインで作成",
        "国際ページ用のx-default hreflangタグを生成",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "技術SEOの移行で欠かせない2つの作業を1か所で扱います。複数地域のhreflangとカノニカル注釈（HTMLの<head>用とXMLサイトマップ用の両方）を生成するか、URLの対応リストをCloudflare Pages、Apache、Nginxですぐ使える301リダイレクト設定に変換します。",
  },
  "on-page-seo-checker": {
    slug: "on-peji-seo-chekka",
    name: "HTMLオンページSEO監査チェッカー",
    shortDescription:
      "貼り付けたHTMLソースをDOMParserでローカルに監査します。タイトル長、メタディスクリプション、H1〜H4の階層、altテキスト、JSON-LDを確認できます。",
    keywords: [
      "オンページSEOチェッカー",
      "HTML SEOアナライザー",
      "見出し階層チェッカー",
      "画像alt監査ツール",
      "SEO監査ツール無料",
      "メタディスクリプション長さチェッカー",
      "タイトルタグ長さチェッカー",
      "HTML SEOタグチェッカー",
      "JSON-LDチェッカー",
    ],
    seo: {
      title: "オンページSEOチェッカー – HTML監査・診断の無料オンラインツール | UtilityFlow",
      description:
        "ページのHTMLソースを貼り付けて、タイトル、メタディスクリプション、見出し、カノニカル、画像altテキスト、リンク、JSON-LDを監査します。無料でブラウザ内ですぐに使え、公開前のSEOチェックに役立ちます。警告は優先順位付きで表示され、修正後に再監査すればスコアの改善をすぐに確認できます。ぜひご利用ください。",
      primaryKeyword: "オンページSEOチェッカー",
      secondaryKeywords: [
        "HTMLソースSEO監査",
        "H1 H2見出し構造チェッカー",
        "画像alt属性の欠落チェック",
        "メタディスクリプション長さチェッカー",
      ],
      longTailKeywords: [
        "貼り付けたHTMLソースをオンページSEOタグでオフライン監査",
        "見出しアウトラインH1〜H4とカノニカルリンクをHTMLでチェック",
        "外部クロールなしのクライアントサイドSEO DOMインスペクター",
        "HTMLソースを貼り付けてタイトルとメタディスクリプションと見出しをチェック",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "貼り付けた任意のHTMLソース（ページのソースを表示）に対して、ブラウザ内で即座にDOMレベルの技術・オンページSEO検査を実行します。<title>、メタディスクリプション、カノニカル、H1〜H4の見出し階層、欠落した画像altテキスト、内部/外部リンク、Open Graph、JSON-LDを確認します。",
  },
  "robots-meta-tag-generator": {
    slug: "robots-meta-tagu-biruda",
    name: "robotsメタタグ＆X-Robots-Tagビルダー",
    shortDescription:
      "noindex、nofollow、noarchive、max-snippet、max-image-preview、Cloudflareの_headersルールを細かく指定したタグを生成します。",
    keywords: [
      "robotsメタタグジェネレーター",
      "X-Robots-Tagビルダー",
      "noindex nofollowメタタグ",
      "max-image-preview largeタグ",
      "noindexタグジェネレーター",
      "メタrobotsタグメーカー",
      "robotsヘッダージェネレーター",
      "Cloudflare _headersジェネレーター",
      "nosnippetメタタグ",
    ],
    seo: {
      title: "robotsメタタグ＆X-Robots-Tagビルダー無料オンラインツール | UtilityFlow",
      description:
        "noindex、nofollow、max-snippet、max-image-preview付きのHTML robotsメタタグとX-Robots-Tagヘッダーを作成します。任意のパス向けCloudflare _headers出力にも対応し、ブラウザ内で無料で使えます。PDFなどの非HTMLファイルにも使えます。",
      primaryKeyword: "robotsメタタグジェネレーター",
      secondaryKeywords: [
        "X-Robots-Tagヘッダージェネレーター",
        "noindexメタタグメーカー",
        "Google max-image-preview large",
        "noindexタグジェネレーター",
      ],
      longTailKeywords: [
        "Cloudflare PagesのPDFファイル用にX-Robots-Tag noindexヘッダーを生成",
        "max-snippetとmax-image-preview large付きのメタrobotsタグを作成",
        "robots.txtとメタrobots noindexの違い",
        "noindex nofollowとmax-snippet付きのrobotsメタタグを作成",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "index/noindex、follow/nofollow、noarchive、nosnippet、max-snippet、max-image-preview:largeなどの、ページ単位の正確なクローラー指定を生成します。HTMLの<meta name=\"robots\">タグ、HTTPのX-Robots-Tagヘッダー、Cloudflare Pagesの_headersブロックとして同時に取得できます。",
  },
  "image-compressor": {
    slug: "gazo-asshuku-tsuru",
    name: "画像圧縮ツール",
    shortDescription:
      "PNG、JPG、WebPの画像をHTML5 Canvasでローカルに圧縮します。品質スライダー、最大幅の上限、圧縮前後のバイト節約量をすぐに確認できます。",
    keywords: [
      "画像圧縮ツール",
      "画像圧縮オンライン",
      "画像ファイルサイズ削減",
      "WebP画像最適化",
      "PNG圧縮サイズ削減",
      "JPGファイルサイズ削減オンライン",
      "画像サイズ削減無料",
      "ウェブ用画像最適化",
      "写真ファイルサイズ縮小",
    ],
    seo: {
      title: "画像圧縮ツール – PNG・JPG・WebPを無料で圧縮するオンラインツール | UtilityFlow",
      description:
        "ブラウザ内で画像を圧縮できる画像圧縮ツールです。品質を調整し、最大幅を制限し、圧縮前後のサイズを比較してダウンロードできます。アップロードは不要で、PNG、JPG、WebPに無料で対応します。品質スライダーと最大幅の上限で調整し、見た目を保ちながらファイルを大幅に小さくしてすぐにダウンロードできます。",
      primaryKeyword: "画像圧縮ツール",
      secondaryKeywords: [
        "PNG JPG WebP圧縮オンライン",
        "写真ファイルサイズ削減無料",
        "クライアントサイド画像最適化",
        "ウェブサイト用画像サイズ縮小",
      ],
      longTailKeywords: [
        "サーバーアップロードなしでウェブ用に大きな画像を圧縮",
        "JPG写真を変換して軽量なWebP形式に縮小",
        "最大幅をリサイズして画像品質をオフラインで最適化",
        "メール添付前に画像ファイルサイズを削減",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "重いPNG、JPG、WebPアセットを、ページの読み込み高速化やメール添付の軽量化のために、ブラウザ内で直接縮小します。非可逆圧縮の品質を調整し、任意で幅の上限を適用し、正確なバイト節約量を比較できます。リモートへのファイルアップロードは一切ありません。",
  },
  "image-resizer": {
    slug: "gazo-risaizu-tsuru",
    name: "画像リサイズ＆クロップツール",
    shortDescription:
      "画像を正確なピクセル寸法やソーシャル/OGプリセットにリサイズします。アスペクト比の固定、スマートな中央カバー・クロップ、PNG/JPG/WebPエクスポートに対応しています。",
    keywords: [
      "画像リサイズ",
      "画像ピクセルサイズ変更",
      "画像クロップオンライン",
      "OG画像リサイズ1200x630",
      "画像リサイズオンライン無料",
      "画像寸法変更",
      "Instagram用画像リサイズ",
      "画像を指定サイズにクロップ",
      "画像を1200x630にリサイズ",
    ],
    seo: {
      title: "画像リサイズツール – 写真を正確なピクセルに変更する無料オンラインツール | UtilityFlow",
      description:
        "画像リサイズで写真を正確なピクセルに変更します。プリセット、アスペクト比の固定、カバー・クロップを使い、PNG、JPG、WebPをブラウザ内でプライベートにエクスポートできる無料ツールです。Open Graph、YouTube、アバターなどのプリセットを使い、歪みのない正確なサイズの画像を手軽に作ることができます。",
      primaryKeyword: "画像リサイズ",
      secondaryKeywords: [
        "写真を正確なピクセルにリサイズ",
        "アスペクト比カバー・クロップツール",
        "ソーシャル画像サイズプリセットリサイズ",
        "ソーシャルメディア用画像リサイズ",
      ],
      longTailKeywords: [
        "画像を引き伸ばさず1200x630のOG寸法にリサイズ",
        "写真を中央カバー・クロップで1080x1080の正方形にする",
        "ブラウザ内で画像のピクセル幅と高さを無料で変更",
        "Instagram用に縦向き写真を1080x1080の正方形にリサイズ",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "グラフィックや写真を正確なピクセル寸法に拡大縮小したり、Open Graph（1200×630）、YouTube HD（1280×720）、正方形（1080×1080）、アバター（512×512）の内蔵プリセットを使ったりできます。高品質なCanvasリサンプリングと、歪みを防ぐ任意の中央カバー・クロップを備えています。",
  },
  "image-format-converter": {
    slug: "gazo-keishiki-henkan-tsuru",
    name: "画像形式変換ツール（PNG / JPG / WebP）",
    shortDescription:
      "PNG、JPG、WebP、GIF、SVGの画像をPNG、JPG、WebPにローカルで一括変換します。品質管理と、JPG用カスタム背景マット塗りつぶしに対応しています。",
    keywords: [
      "画像形式変換ツール",
      "PNGからWebPへの変換",
      "WebPからPNGへの変換",
      "SVGからPNGへのブラウザ変換",
      "JPGからPNGへの変換",
      "PNGからJPGへの変換",
      "一括画像変換",
      "WebPからJPGへの変換",
      "画像変換オンライン無料",
    ],
    seo: {
      title: "画像形式変換ツール – PNG・JPG・WebPの無料変換オンラインツール | UtilityFlow",
      description:
        "画像形式変換ツールでPNG、JPG、WebPのあいだで画像を変換します。一括変換、JPG品質の設定、透明背景の塗りつぶしをしてからエクスポートでき、すべてブラウザ内で無料で動作します。PNG、JPG、WebP、GIF、SVGの画像をまとめて変換し、元の解像度を保ったまま個別にダウンロードでき、すべて無料で使えます。",
      primaryKeyword: "画像形式変換ツール",
      secondaryKeywords: [
        "WebPをJPGやPNGに変換",
        "PNGからWebPへの一括変換",
        "透明PNGをJPGに背景塗りつぶし",
        "JPGをPNGに無料変換",
      ],
      longTailKeywords: [
        "複数のPNGとJPG画像をオフラインで一括してWebPに変換",
        "WebPスクリーンショットをアップロードなしで標準PNGに変換",
        "JPG変換時に透明PNGの背景色を塗りつぶす",
        "ブラウザ内で画像形式をPNGからJPGに変更",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "PNG、JPG、WebP、GIF、SVGファイルを、ウェブ対応のWebP、汎用的なJPG、非可逆でない透明PNGへ、ブラウザ内で完全に一括変換します。透明をJPEGに平坦化する際のカスタム背景マット塗りつぶしにも対応しています。",
  },
  "image-rotate-flip": {
    slug: "gazo-kaiten-hanten-tsuru",
    name: "画像回転・反転＆フィルターツール",
    shortDescription:
      "画像を90°/180°/270°回転させ、水平・垂直に反転し、グレースケール、明るさ、コントラストのフィルターをブラウザ内でライブ適用します。",
    keywords: [
      "画像回転オンライン",
      "画像水平反転",
      "グレースケール画像フィルター",
      "画像明るさコントラスト調整",
      "写真90度回転",
      "写真反転オンライン",
      "画像ミラーオンライン",
      "画像まっすぐ補正オンライン",
      "写真フィルター編集オンライン",
    ],
    seo: {
      title: "画像回転・反転・加工オンラインツール – フィルター付き無料写真編集ツール | UtilityFlow",
      description:
        "画像を90度、180度、270度回転させ、写真を水平・垂直に反転し、明るさ、コントラスト、グレースケールを調整できます。無料でブラウザ内で動作し、向きの修正やフィルターを手軽に行えます。横向きの写真や反転した自撮りを直し、明るさとコントラストを整えてから、PNG、JPG、WebPでエクスポートでき、無料で使えます。",
      primaryKeyword: "画像回転オンライン",
      secondaryKeywords: [
        "画像水平垂直反転",
        "写真をグレースケールに変換オンライン",
        "明るさとコントラストをブラウザで調整",
        "写真90度回転オンライン",
      ],
      longTailKeywords: [
        "横向き写真の回転をブラウザ内でオフライン90度修正",
        "Photoshopなしで自撮り画像を水平ミラー",
        "白黒グレースケールフィルターを適用してPNGでエクスポート",
        "スキャンした書類画像を正しい向きに回転",
      ],
      schemaApplicationCategory: "MultimediaApplication",
    },
    intro:
      "横向きの向きを修正し、自撮りを水平・垂直にミラーし、写真を白黒のグレースケールに切り替え、明るさとコントラストをリアルタイムで微調整します。ローカルのHTML5 Canvas 2D変換を使います。",
  },
  "image-to-base64": {
    slug: "gazo-base64-henkan-tsuru",
    name: "画像→Base64＆データURI変換ツール",
    shortDescription:
      "PNG、JPG、WebP、SVG、ICOの画像をBase64データURI、HTMLの<img>タグ、CSSルールにエンコードしたり、Base64文字列を画像プレビューにデコードしたりできます。",
    keywords: [
      "画像からBase64へ",
      "Base64画像デコーダー",
      "データURIジェネレーター",
      "CSS背景Base64画像",
      "画像をデータURIに変換",
      "Base64エンコーダー画像",
      "画像からBase64へオンライン無料",
      "PNGをBase64にエンコード",
      "Base64から画像への変換",
    ],
    seo: {
      title: "画像→Base64変換ツール＆データURIデコーダーの無料オンラインツール | UtilityFlow",
      description:
        "画像→Base64変換ツールで、データURI、生のBase64、HTML imgタグ、CSS背景スニペットを作成できます。Base64を画像プレビューにデコードすることもでき、ブラウザ内で無料で使えます。小さなアイコンやロゴをCSSやHTMLメールに埋め込みたいときに便利で、すべてブラウザ内で無料で使えます。",
      primaryKeyword: "画像からBase64へ",
      secondaryKeywords: [
        "データURI画像エンコーダー",
        "Base64から画像プレビューへ",
        "SVGやPNGをCSSにインライン化",
        "画像からBase64へオンライン無料",
      ],
      longTailKeywords: [
        "PNGアイコンをCSSのbackground-imageデータURIにオフライン変換",
        "生のBase64文字列をダウンロード可能な画像プレビューにデコード",
        "画像バイナリのバイトサイズとBase64文字列サイズを比較",
        "小さなロゴ画像をHTMLメール用にBase64エンコード",
      ],
      schemaApplicationCategory: "DeveloperApplication",
    },
    intro:
      "小さなアイコン、ロゴ、メール用グラフィックを、自己完結型のdata:image/...;base64,... URI、コピー可能なHTMLの<img>タグ、CSSのbackground-image宣言に変換します。モードを切り替えれば、生のBase64画像ペイロードを検査してダウンロードすることもできます。",
  },
  "color-contrast-checker": {
    slug: "kara-kontorasuto-chekka",
    name: "カラーコントラストチェッカー＆パレット抽出ツール",
    shortDescription:
      "WCAG 2.1のAA/AAAカラーコントラスト比をテストし、HEX/RGB/HSL値を変換し、アップロードした画像から主要なカラーパレットを抽出します。",
    keywords: [
      "WCAGカラーコントラストチェッカー",
      "アクセシビリティコントラスト比",
      "画像カラーパレット抽出",
      "HEX RGB HSLカラーピッカー",
      "WCAG AAコントラスト比計算",
      "AAAコントラストチェッカーオンライン",
      "アクセシブルな色の組み合わせ",
      "テキスト背景コントラストテスト",
      "デザインアクセシビリティチェッカー",
    ],
    seo: {
      title: "カラーコントラストチェッカー – WCAG 2.1 AA/AAA無料ツール | UtilityFlow",
      description:
        "テキストと背景の色ペアのWCAG 2.1 AA・AAAコントラスト比を確認し、HEX、RGB、HSLを変換し、画像からパレットを抽出できます。無料でブラウザ内で動作するアクセシビリティチェックツールです。ブランドカラーの組み合わせをテストし、AAやAAAの合格基準を満たす色選びに役立つ無料ツールです。",
      primaryKeyword: "カラーコントラストチェッカー",
      secondaryKeywords: [
        "WCAG AA AAAコントラスト比計算",
        "画像からカラーパレットを抽出",
        "アクセシブルなテキスト背景色チェッカー",
        "通常テキストと大きなテキストのWCAGコントラスト比",
      ],
      longTailKeywords: [
        "通常テキストと大きなテキストのWCAG 2.1コントラスト比をオンラインでテスト",
        "スクリーンショットから主要なHEXスウォッチをコントラストチェッカーに取り込む",
        "ダークモードUIの前景・背景色のアクセシビリティを確認",
        "本文テキストのWCAG AAに合格するコントラスト比とは",
      ],
      schemaApplicationCategory: "DesignApplication",
    },
    intro:
      "公式のWCAG 2.1相対輝度とコントラストのしきい値（AA 4.5:1、AA（大）3.0:1、AAA 7.0:1）に対してUIの色ペアを検証します。同期したHEX/RGB/HSL値を編集し、スクリーンショットやロゴをアップロードして主要なHEXスウォッチを前景または背景スロットに直接取り込めます。",
  },
  "qr-code-scanner": {
    slug: "qr-kodo-sukyana",
    name: "QRコードスキャナー＆vCard QRスタジオ",
    shortDescription:
      "アップロードした画像やデバイスのカメラからQRコードをブラウザ内でプライベートにデコードしたり、ダウンロード可能なPNG/SVGのvCard連絡先QRコードを作成したりできます。",
    keywords: [
      "QRコードスキャナーオンライン",
      "画像からQRコードをデコード",
      "vCard QRコードジェネレーター",
      "カメラQRリーダーブラウザ",
      "スクリーンショットからQRコードをスキャン",
      "アプリなしQRコードリーダー",
      "QRコードデコードPNG JPG",
      "Wi-Fi QRコードスキャナー",
      "QRコードペイロードリーダー",
    ],
    seo: {
      title: "QRコードスキャナー – QR画像とvCardをデコードする無料オンラインツール | UtilityFlow",
      description:
        "スクリーンショット、写真、ウェブカメラからQRコードをブラウザ内でスキャンしてデコードしたり、PNGとSVG形式でダウンロードできるvCard連絡先QRコードを作成したりできる無料ツールです。印刷前にチラシのQRコードの宛先を検証したり、名刺用のvCard QRコードを作成してダウンロードしたりできます。",
      primaryKeyword: "QRコードスキャナー",
      secondaryKeywords: [
        "QRコード画像リーダーオンライン",
        "スクリーンショットからQRコードを無料スキャン",
        "vCard連絡先QRコード生成",
        "ウェブカメラQRコードリーダーブラウザ",
      ],
      longTailKeywords: [
        "アップロードしたPNGやJPGスクリーンショットからQRコードをオフラインでデコード",
        "アプリをインストールせずにノートPCのウェブカメラでQRコードをスキャン",
        "ダウンロード可能なvCard 3.0連絡先QRコードをSVGとPNGで作成",
        "スクリーンショットから反転したダークモードQRコードを読み取る",
      ],
      schemaApplicationCategory: "UtilitiesApplication",
    },
    intro:
      "スクリーンショット、写真、任意のライブカメラストリームから、ブラウザ内で直接QRコードの内容を読み取ります。ペイロードの自動分類（URL、Wi-Fi、vCard、テキスト）付きです。さらに、鮮明なPNGとSVGの連絡先カードをエクスポートする**vCard連絡先QRビルダー**も備えています。",
  },
  "password-generator": {
    slug: "pasuwado-jenereta",
    name: "パスワード＆パスフレーズジェネレーター",
    shortDescription:
      "crypto.getRandomValuesによる棄却サンプリングと正確なエントロピー計算で、偏りのないランダムパスワードとDiceware式パスフレーズを生成します。",
    keywords: [
      "パスワードジェネレーター",
      "安全なランダムパスワードジェネレーター",
      "Dicewareパスフレーズジェネレーター",
      "暗号学的パスワードジェネレーター",
      "強力なパスワード作成オンライン",
      "ランダムパスフレーズジェネレーター",
      "パスワードエントロピーチェッカー",
      "安全なパスワード無料生成",
      "偏りのないランダムパスワードツール",
    ],
    seo: {
      title: "パスワード＆パスフレーズジェネレーター – 安全なランダムパスワード無料作成 | UtilityFlow",
      description:
        "ブラウザ内でローカルに、Web Cryptoによる強力なランダムパスワードと覚えやすいDicewareパスフレーズを生成します。正確なエントロピースコア付きで、保存やアップロードは一切ありません。生成されたパスワードはタブ内にだけ存在し、ページを更新すると消えるため、パスワードマネージャーにすぐに保存してください。",
      primaryKeyword: "パスワードジェネレーター",
      secondaryKeywords: [
        "暗号学的に安全なパスワードジェネレーター",
        "覚えやすいパスフレーズジェネレーターオンライン",
        "パスワードエントロピー計算",
        "記号付きランダムパスワード作成",
      ],
      longTailKeywords: [
        "剰余バイアスなしでcrypto getRandomValuesを使ってランダムパスワードを生成",
        "ローカルでオフラインに5単語のDicewareパスフレーズを作成",
        "紛らわしい文字0 O 1 l Iを除外するパスワードジェネレーター",
        "18文字のパスワードのエントロピーは何ビットか",
      ],
      schemaApplicationCategory: "SecurityApplication",
    },
    intro:
      "ブラウザのハードウェア支援CSPRNG（window.crypto.getRandomValues）を使い、剰余バイアスを除去する棄却サンプリングと、予測可能な文字位置を防ぐFisher-Yatesシャッフルで、高エントロピーのパスワードと覚えやすい複数単語のパスフレーズを100%ローカルに生成します。",
  },
  "file-hash-verifier": {
    slug: "fairu-hasshu-kensho-tsuru",
    name: "ファイルハッシュ＆チェックサム検証ツール",
    shortDescription:
      "Web CryptoのSubtleCryptoでローカルにSHA-256、SHA-512、SHA-384、SHA-1のバイナリファイルチェックサムを計算し、ダウンロードを公開ハッシュと照合します。",
    keywords: [
      "ファイルハッシュ検証ツール",
      "SHA-256ファイルチェックサムチェッカー",
      "ダウンロードファイルハッシュ検証オンライン",
      "SHA-512ファイルハッシュジェネレーター",
      "SHA-256チェックサム計算",
      "ファイル整合性チェックオンライン",
      "ファイルチェックサム比較",
      "SHA-384 SHA-1ハッシュチェッカー",
      "ISOチェックサム検証ブラウザ",
    ],
    seo: {
      title: "ファイルハッシュ検証ツール – SHA-256チェックサム無料確認ツール | UtilityFlow",
      description:
        "ブラウザ内で任意のローカルファイルのSHA-256、SHA-512、SHA-384、SHA-1ダイジェストを計算し、公開チェックサムと比較できます。アップロードなし、無料で使えるファイル整合性の検証ツールです。公開ハッシュと一致しない場合は、ファイルを削除して公式ソースから再ダウンロードしてください。",
      primaryKeyword: "ファイルハッシュ検証ツール",
      secondaryKeywords: [
        "SHA-256チェックサム計算ファイル",
        "SHA-256sumファイル検証オンライン",
        "ブラウザSubtleCryptoファイルダイジェスト",
        "SHA-512チェックサム検証ツール",
      ],
      longTailKeywords: [
        "ターミナルなしでダウンロードしたインストーラーのSHA-256ハッシュを確認",
        "ファイルバイナリのチェックサムを公開SHA-256sum文字列と比較",
        "ファイルアップロードなしでSHA-256とSHA-512をローカル計算",
        "ブラウザ内でLinux ISOのSHA-256チェックサムを検証",
      ],
      schemaApplicationCategory: "SecurityApplication",
    },
    intro:
      "ソフトウェアインストーラー、アーカイブ、データセット、文書の整合性と真正性をローカルで検証します。ハードウェア高速化されたWeb Cryptoのsubtle.digestでSHA-256、SHA-512、SHA-384、SHA-1ダイジェストを計算し、公開チェックサムとの比較を即座に行います。",
  },
  "favicon-generator": {
    slug: "fabikon-jenereta",
    name: "ファビコン＆アプリアイコンジェネレーター（.ico＆PNG）",
    shortDescription:
      "カスタムモノグラムバッジやアップロードしたロゴから、鮮明な複数サイズPNGアイコン（16×16〜512×512）と本物のマルチフレームバイナリfavicon.icoを生成します。",
    keywords: [
      "ファビコンジェネレーター",
      "favicon.icoオンライン作成",
      "Appleタッチアイコンジェネレーター",
      "テキストからファビコンモノグラム",
      "ファビコンicoメーカー無料",
      "PWAアイコンジェネレーター192 512",
      "ウェブサイトファビコンメーカー",
      "PNGからファビコンへの変換",
      "アプリアイコンジェネレーターオンライン",
    ],
    seo: {
      title: "ファビコンジェネレーター – .ico＆PNGアプリアイコン無料作成ツール | UtilityFlow",
      description:
        "ロゴやカスタムモノグラムバッジから、本物のマルチフレームfavicon.icoと16〜512ピクセルのPNG、Apple Touch、PWAアイコンを生成します。無料でブラウザ内で動作するアイコン作成ツールです。モノグラムモードならロゴがなくても、イニシャルからクリーンなバッジアイコンを手軽に作ることができます。",
      primaryKeyword: "ファビコンジェネレーター",
      secondaryKeywords: [
        "PNGからマルチサイズicoへの変換",
        "モノグラムファビコンビルダー",
        "PWAとAppleタッチアイコンジェネレーター",
        "ファビコンicoメーカーオンライン無料",
      ],
      longTailKeywords: [
        "16x16 32x32 48x48フレーム付きの本物のバイナリfavicon.icoを無料作成",
        "テキストのイニシャルからウェブサイトのファビコンとHTMLリンクタグを生成",
        "正方形ロゴを切り取って180x180の丸いAppleタッチアイコンにする",
        "ウェブマニフェスト用に192x192と512x512のPWAアイコンを生成",
      ],
      schemaApplicationCategory: "DesignApplication",
    },
    intro:
      "数秒でクリーンなモノグラムアイコンをデザインするか、既存のブランドロゴをアップロードして、ピクセルシャープな16×16、32×32、48×48、180×180のApple Touch、192×192/512×512のPWA PNGアセットと、標準準拠のマルチイメージ・バイナリfavicon.ico、貼り付け可能なHTMLの<link>マークアップを描画します。",
  },
};
