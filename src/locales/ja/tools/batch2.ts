import type { ToolLocaleOverride } from '../../types';

/**
 * Japanese overrides — Batch 2: Developer tools (15 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are romaji transliterations, unique, lowercase, hyphenated, and
 * do not collide with English slugs or reserved paths.
 */
export const JA_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-enkodo-dekodo',
    name: 'Base64エンコーダー・デコーダー',
    shortDescription:
      'テキストを標準のBase64やURLセーフなBase64にエンコードし、Base64文字列をUTF-8で安全にデコードします。',
    keywords: [
      'Base64 エンコーダー',
      'Base64 デコーダー',
      'Base64 UTF-8',
      'Base64 URLセーフ',
      'Base64 エンコード',
      'Base64 デコード',
      'テキスト Base64 変換',
      'Base64 変換ツール',
      'Base64 オンライン',
    ],
    seo: {
      title: 'Base64エンコーダー・デコーダー｜UTF-8とURLセーフに対応する無料ツール | UtilityFlow',
      description:
        'UTF-8テキストをBase64にエンコードしたり、Base64を読みやすいテキストに戻したりできます。URLセーフやパディングなしのオプションもあり、すべてローカルで処理します。APIキーやBasic認証ヘッダーの処理にも使え、登録は不要です。スマートフォンのブラウザでもいつでも同じように使えます。',
      primaryKeyword: 'Base64 エンコーダー',
      secondaryKeywords: ['Base64 デコード オンライン', 'Base64 UTF-8 エンコード', 'Base64 URLセーフ', 'Base64 テキスト変換'],
      longTailKeywords: ['絵文字のUTF-8をBase64にオンラインでエンコードする', 'パディングなしのURLセーフBase64をデコードする', 'クライアントサイドのBase64変換ツール', '絵文字を含むBase64文字列をオンラインでデコードする'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'アクセント付き文字や絵文字を含むUTF-8文字列を、標準のBase64やRFC 4648のURLセーフなBase64に変換したり、Base64文字列をプレーンテキストに戻したりできます。検証も瞬時に行われます。',
  },
  'url-encoder-decoder': {
    slug: 'url-enkodo-dekodo',
    name: 'URLエンコーダー・デコーダー',
    shortDescription:
      'クエリの値やURL全体をパーセントエンコードし、ホスト、パス、クエリパラメーターを解析して確認できます。',
    keywords: [
      'URL エンコーダー',
      'URL デコーダー',
      'パーセントエンコーディング',
      'URL パーサー',
      'URL エンコード オンライン',
      'URL デコード オンライン',
      'URL エンコードツール',
      'encodeURIComponent',
      'クエリ文字列 エンコーダー',
    ],
    seo: {
      title: 'URLエンコーダー・デコーダー｜パーセントエンコードが今すぐできる無料ツール | UtilityFlow',
      description:
        'encodeURIComponentとencodeURIのモードでURLをエンコード・デコードできます。プロトコル、ホスト、パス、クエリパラメーターを解析して表示し、すべてブラウザ内で処理します。OAuthのリダイレクトURIやUTMリンクの確認に役立ち、登録は不要で、スマートフォンのブラウザでも同じように使えます。',
      primaryKeyword: 'URL エンコーダー',
      secondaryKeywords: ['パーセントエンコーディング オンライン', 'URL デコードツール', 'クエリ文字列 パーサー', 'encodeURIComponent オンライン'],
      longTailKeywords: ['encodeURIとencodeURIComponentの違い', 'URLのクエリパラメーターを表でデコードする', 'URL用の特殊文字をパーセントエンコードする', 'アンパサンドを壊さずにクエリの値をエンコードする'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'クエリパラメーターの値やURL全体を安全にエンコードしたり、パーセントエンコードされた文字列（%20、%3A、+）をデコードしたりできます。解析された各クエリパラメーターは表に直接表示されます。',
  },
  'uuid-generator': {
    slug: 'uuid-jenereta',
    name: 'UUIDジェネレーター（v4・v7）',
    shortDescription:
      '暗号学的にランダムなUUID v4と、時間順に並ぶRFC 9562のUUID v7をまとめて生成します。',
    keywords: [
      'UUID ジェネレーター',
      'GUID ジェネレーター',
      'UUID v4',
      'UUID v7 ジェネレーター',
      'UUID v4 生成',
      'UUID 生成 オンライン',
      'ランダム UUID 生成',
      'UUID 一括生成',
      'UUID 無料 生成',
    ],
    seo: {
      title: 'UUIDジェネレーター｜v4とv7のIDを一括で今すぐ無料生成するツール | UtilityFlow',
      description:
        '暗号学的にランダムなUUID v4や、時間順に並ぶRFC 9562のUUID v7を最大100個まで生成できます。大文字、ハイフン、波括弧のオプションもあり、ブラウザ内で処理します。データベースのフィクスチャやテストIDの生成に最適で、登録は不要、スマートフォンのブラウザでも同じように使えます。IDは保存されません。',
      primaryKeyword: 'UUID ジェネレーター',
      secondaryKeywords: ['GUID ジェネレーター オンライン', 'UUID v4 生成', 'UUID v7 生成', 'UUID 一括生成'],
      longTailKeywords: ['UUID v4とv7を一括でオンライン生成する', 'RFC 9562の時間順UUID v7ジェネレーター', 'ハイフンなし大文字のUUIDを生成する', '100個のUUIDを一度にオンラインで無料生成する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Web Crypto APIを使って、暗号学的にランダムなUUID v4と、タイムスタンプの接頭辞を持つRFC 9562のUUID v7を、単体またはまとめて生成できます。書式設定ボタンも付いています。',
  },
  'regex-tester': {
    slug: 'seiki-hyogen-tesuta',
    name: '正規表現テスター',
    shortDescription:
      'JavaScriptの正規表現を、ライブの一致ハイライト、キャプチャグループ、フラグ、置換出力でテストします。',
    keywords: [
      '正規表現 テスター',
      '正規表現 チェック',
      'JavaScript 正規表現',
      '正規表現 一致 ハイライト',
      '正規表現 テスト オンライン',
      '正規表現 確認',
      '正規表現 デバッガー',
      '正規表現 マッチ',
      'JavaScript regex テスト',
    ],
    seo: {
      title: '正規表現テスター｜JavaScriptの正規表現をライブで今すぐ無料テスト | UtilityFlow',
      description:
        '正規表現をライブでテストできます。g/i/m/sフラグ、インラインの一致ハイライト、キャプチャグループの確認、置換のプレビューに対応し、ブラウザ内で処理します。メールやフォーム入力のパターン検証に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。パターンはブラウザ内でテストされます。',
      primaryKeyword: '正規表現 テスター',
      secondaryKeywords: ['正規表現 チェックツール', '正規表現 デバッガー', 'キャプチャグループ 正規表現', '正規表現 置換 テスト'],
      longTailKeywords: ['JavaScriptのキャプチャグループをオンラインでテストする', '正規表現の一致をライブでハイライトする', 'グループ参照$1で正規表現の置換をプレビューする', 'JavaScriptの正規表現をハイライト付きでオンラインでデバッグする'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JavaScriptの正規表現を対話的にデバッグします。ライブでハイライトされる一致、一致位置のインデックス、番号付きキャプチャグループの確認、フラグボタン、置換のプレビューが使えます。',
  },
  'jwt-decoder': {
    slug: 'jwt-dekoda',
    name: 'JWTデコーダー',
    shortDescription:
      'JSON Web Tokenのヘッダー、ペイロードのクレーム、有効期限のタイムスタンプをブラウザ内で安全にデコードします。',
    keywords: [
      'JWT デコーダー',
      'JSON Web Token デコード',
      'JWT チェッカー',
      'JWT 有効期限',
      'JWT トークン デコード',
      'JWT ペイロード 確認',
      'JWT exp 確認',
      'JWT クレーム 表示',
      'JWT 期限 チェック',
    ],
    seo: {
      title: 'JWTデコーダー｜トークンをデコードして有効期限を今すぐ無料で確認するツール | UtilityFlow',
      description:
        'JWTのヘッダーとペイロードのクレームをブラウザ内でデコードし、iat、nbf、expのタイムスタンプを読みやすいUTCの日付で確認できます。無料でプライベート、アップロード不要です。APIの認証トークンの確認に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。署名の検証は行いません。',
      primaryKeyword: 'JWT デコーダー',
      secondaryKeywords: ['JWT デコード オンライン', 'JWT ペイロード 表示', 'JSON Web Token チェッカー', 'JWT 有効期限 確認'],
      longTailKeywords: ['JWTトークンをサーバーにアップロードせずローカルでデコードする', 'JWTのexp有効期限タイムスタンプをオンラインで確認する', 'JWTのヘッダーとクレームをBase64URLで確認する', 'JWTのペイロードクレームをブラウザで読む'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JSON Web Token（JWT）をブラウザのローカルメモリ内で安全に確認できます。整形されたJSONのヘッダーとペイロードのオブジェクトを表示し、iat、nbf、expの有効期限ステータスを人間が読める形で確認できます。',
  },
  'hash-generator': {
    slug: 'hasshu-jenereta',
    name: 'ハッシュジェネレーター',
    shortDescription:
      'テキストやファイルからMD5、SHA-1、SHA-256、SHA-512のハッシュを生成し、チェックサムを検証します。',
    keywords: [
      'ハッシュ ジェネレーター',
      'SHA-256 生成',
      'MD5 生成',
      'SHA-512 生成',
      'ハッシュ 計算',
      'チェックサム 確認',
      'SHA-1 生成',
      'ハッシュツール オンライン',
      'ファイル チェックサム',
    ],
    seo: {
      title: 'ハッシュジェネレーター｜MD5・SHA-256をオンラインで無料で計算するツール | UtilityFlow',
      description:
        'テキストやファイルからMD5、SHA-1、SHA-256、SHA-512のハッシュを生成できます。ダウンロードしたファイルのチェックサム検証にも対応し、ブラウザ内で無料で処理します。ダウンロードしたファイルのチェックサム検証に最適で、登録は不要、スマートフォンのブラウザでも同じように使えます。入力は保存されません。',
      primaryKeyword: 'ハッシュ ジェネレーター',
      secondaryKeywords: ['SHA-256 生成ツール', 'MD5 生成オンライン', 'チェックサム 確認ツール', 'ハッシュ 計算ツール'],
      longTailKeywords: ['テキストのSHA-256ハッシュをオンラインで生成する', 'ダウンロードしたファイルのチェックサムを検証する', 'MD5とSHA-512のハッシュをブラウザで計算する', 'ファイルの整合性をハッシュで確認する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'テキストやファイルから、MD5、SHA-1、SHA-256、SHA-512の暗号学的ハッシュを生成します。1文字変わるだけでハッシュは完全に変わるため、データの整合性確認やチェックサムの検証に使えます。',
  },
  'html-entity-encoder': {
    slug: 'html-entiti-enkoda',
    name: 'HTMLエンティティエンコーダー',
    shortDescription:
      'HTMLの特殊文字をエンティティにエンコードし、エンティティを元の文字に戻すデコードもできます。',
    keywords: [
      'HTML エンティティ エンコーダー',
      'HTML エスケープ',
      'HTML エンティティ デコード',
      'HTML 特殊文字 変換',
      'HTML エンコード オンライン',
      'HTML エンティティ 変換',
      'エンティティ エンコード',
      'HTML 文字 変換ツール',
      'HTML エスケープツール',
    ],
    seo: {
      title: 'HTMLエンティティエンコーダー｜特殊文字をオンラインで無料で変換できるツール | UtilityFlow',
      description:
        'HTMLの特殊文字をエンティティにエンコードしたり、エンティティを元の文字に戻したりできます。ドキュメント用のコード表示やXSS対策に役立ち、ブラウザ内で無料で処理します。ドキュメント用のコード表示やXSS対策に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。名前付きと数値の両方に対応します。',
      primaryKeyword: 'HTML エンティティ エンコーダー',
      secondaryKeywords: ['HTML エスケープツール', 'HTML エンティティ デコード', 'HTML 特殊文字 変換', 'HTML エンコード オンライン'],
      longTailKeywords: ['HTMLの特殊文字をエンティティにオンラインで変換する', 'ドキュメント用にHTMLコードをエスケープする', 'HTMLエンティティを元の文字にデコードする', 'XSS対策でHTMLをエスケープする'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'HTMLの特殊文字（<、>、&、"など）をエンティティ（&lt;、&gt;、&amp;、&quot;など）に変換したり、エンティティを元の文字に戻したりできます。ドキュメントやコードの表示に役立ちます。',
  },
  'json-csv-converter': {
    slug: 'json-csv-henkan',
    name: 'JSON⇔CSV変換ツール',
    shortDescription:
      'JSONとCSVを相互に変換します。カンマを含む値の引用符処理や、ヘッダー行の扱いに対応します。',
    keywords: [
      'JSON CSV 変換',
      'CSV JSON 変換',
      'JSONからCSV',
      'CSVからJSON',
      'JSON CSV コンバーター',
      'CSV 変換ツール',
      'JSON 変換 オンライン',
      'CSV JSON 無料',
      'データ 形式変換',
    ],
    seo: {
      title: 'JSON⇔CSV変換ツール｜JSONとCSVを相互に今すぐ無料変換するツール | UtilityFlow',
      description:
        'JSONとCSVを相互に変換できます。カンマを含む値はRFC 4180に従って引用符で囲み、ヘッダー行も正しく処理します。ブラウザ内で無料で処理します。APIのJSONとスプレッドシートのCSVの変換に最適で、登録は不要、スマートフォンのブラウザでも同じように使えます。データはブラウザ内で処理されます。',
      primaryKeyword: 'JSON CSV 変換',
      secondaryKeywords: ['CSV JSON 変換ツール', 'JSONからCSVへ', 'CSVからJSONへ', 'JSON CSV コンバーター'],
      longTailKeywords: ['JSONをCSVにオンラインで無料変換する', 'CSVをJSONに変換してヘッダー行を処理する', 'カンマを含む値を引用符で囲んでCSVに変換する', 'JSONとCSVをブラウザで相互変換する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JSONとCSVを相互に変換します。カンマやダブルクォートを含む値はRFC 4180に従って自動的に引用符で囲み、CSVの最初の行をJSONオブジェクトのキーとして扱います。',
  },
  'unix-timestamp-converter': {
    slug: 'unix-taimusutanpu-henkan',
    name: 'Unixタイムスタンプ変換ツール',
    shortDescription:
      'Unixタイムスタンプと日付を相互に変換します。秒とミリ秒の自動検出や、UTCとローカル時刻の表示に対応します。',
    keywords: [
      'Unix タイムスタンプ 変換',
      'タイムスタンプ 日付 変換',
      'エポック 変換',
      'Unix時間 変換ツール',
      'タイムスタンプ 変換 オンライン',
      '日付 タイムスタンプ',
      'エポックタイム 確認',
      'ミリ秒 タイムスタンプ',
      'UTC 日付 変換',
    ],
    seo: {
      title: 'Unixタイムスタンプ変換ツール｜日付と相互に今すぐ無料変換できるツール | UtilityFlow',
      description:
        'Unixタイムスタンプと日付を相互に変換できます。10桁の秒と13桁のミリ秒を自動で判別し、UTCとローカル時刻の両方を表示します。ブラウザ内で無料で処理します。APIやログのタイムスタンプ確認に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。現在の時刻もワンクリックで取得できます。',
      primaryKeyword: 'Unix タイムスタンプ 変換',
      secondaryKeywords: ['タイムスタンプ 日付 変換', 'エポック 変換ツール', 'Unix時間 変換', '日付 タイムスタンプ 変換'],
      longTailKeywords: ['Unixタイムスタンプを日付にオンラインで変換する', '秒とミリ秒のタイムスタンプを自動判別する', '日付をUnixタイムスタンプに変換する', 'エポックタイムをUTCの日付に変換する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Unixタイムスタンプ（エポックタイム）と人間が読める日付を相互に変換します。10桁の数字は秒、13桁の数字はミリ秒として自動的に判別され、UTCとローカル時刻の両方が表示されます。',
  },
  'sql-formatter': {
    slug: 'sql-fomata',
    name: 'SQLフォーマッター',
    shortDescription:
      'SQLクエリを整形したり、1行に圧縮したりします。キーワードの大文字化や句の改行に対応します。',
    keywords: [
      'SQL フォーマッター',
      'SQL 整形',
      'SQL 圧縮',
      'SQL きれいに表示',
      'SQL クエリ 整形',
      'SQL フォーマット オンライン',
      'SQL 大文字化',
      'SQL 整形ツール',
      'SQL 読みやすく',
    ],
    seo: {
      title: 'SQLフォーマッター｜SQLクエリを整形・圧縮できる無料オンラインツール | UtilityFlow',
      description:
        'SQLクエリを読みやすく整形したり、1行に圧縮したりできます。主要な句を改行し、キーワードを大文字化します。ブラウザ内で無料で処理します。長いクエリのレビューやログの確認に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。クエリの意味は変わらず、チームでの共有やコードレビューにも便利です。',
      primaryKeyword: 'SQL フォーマッター',
      secondaryKeywords: ['SQL 整形ツール', 'SQL 圧縮ツール', 'SQL クエリ 整形', 'SQL フォーマット オンライン'],
      longTailKeywords: ['SQLクエリをオンラインで無料整形する', '複数行のSQLを1行に圧縮する', 'SQLのキーワードを大文字化して整形する', 'JOINを含むSQLクエリを読みやすく整形する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '読みにくいSQLクエリを、きれいに整形されたクエリに変換します。主要な句を専用の行に分け、キーワードを大文字化し、運用やログ用に1行に圧縮することもできます。',
  },
  'css-minifier': {
    slug: 'css-minifaia',
    name: 'CSSミニファイア',
    shortDescription:
      'CSSを圧縮してファイルサイズを小さくしたり、圧縮されたCSSを読みやすく整形したりします。',
    keywords: [
      'CSS ミニファイア',
      'CSS 圧縮',
      'CSS 圧縮ツール',
      'CSS 整形',
      'CSS ミニファイ',
      'CSS サイズ削減',
      'CSS オンライン',
      'CSS ビューティファイア',
      'CSS 最適化',
    ],
    seo: {
      title: 'CSSミニファイア｜CSSを圧縮・整形してファイルサイズを小さくする無料ツール | UtilityFlow',
      description:
        'CSSを圧縮してファイルサイズを小さくしたり、圧縮されたCSSを読みやすく整形したりできます。改行や余分なスペースを除去し、ブラウザ内で無料で処理します。本番環境用のCSS配信やデバッグに役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。圧縮前後の文字数を比較して削減量を確認できます。',
      primaryKeyword: 'CSS ミニファイア',
      secondaryKeywords: ['CSS 圧縮ツール', 'CSS 整形ツール', 'CSS ミニファイ', 'CSS サイズ削減'],
      longTailKeywords: ['CSSをオンラインで無料圧縮する', '圧縮されたCSSを読みやすく整形する', 'CSSのファイルサイズを小さくする', 'CSSの改行とスペースを除去して圧縮する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'CSSを圧縮してファイルサイズを小さくしたり、圧縮されたCSSを読みやすい形式に戻したりできます。改行、余分なスペース、ブロック内の最後のセミコロンを除去して、配信に最適なCSSを作ります。',
  },
  'js-formatter': {
    slug: 'js-fomata',
    name: 'JavaScriptフォーマッター',
    shortDescription:
      'JavaScriptコードを整形したり、圧縮したりします。コメントの除去やスペースの整理に対応します。',
    keywords: [
      'JavaScript フォーマッター',
      'JS 整形',
      'JavaScript 圧縮',
      'JS フォーマット',
      'JavaScript きれいに表示',
      'JS 圧縮ツール',
      'JavaScript 整形ツール',
      'JS ビューティファイア',
      'JavaScript オンライン',
    ],
    seo: {
      title: 'JavaScriptフォーマッター｜JSコードを整形・圧縮する無料ツール | UtilityFlow',
      description:
        'JavaScriptコードを読みやすく整形したり、圧縮して小さくしたりできます。コメントの除去やスペースの整理に対応し、ブラウザ内で無料で処理します。コードレビューや本番環境用の整形に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。コードのロジックは変わらず、レビューにも便利です。',
      primaryKeyword: 'JavaScript フォーマッター',
      secondaryKeywords: ['JS 整形ツール', 'JavaScript 圧縮ツール', 'JS フォーマット', 'JavaScript きれいに表示'],
      longTailKeywords: ['JavaScriptコードをオンラインで無料整形する', 'JSコードを圧縮して小さくする', 'コメントを除去してJavaScriptを圧縮する', '1行のJSコードを読みやすく整形する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JavaScriptコードを読みやすいインデント付きの形式に整形したり、コメントや余分なスペースを除去して圧縮したりできます。コードのロジックは変更されません。',
  },
  'cron-expression-parser': {
    slug: 'kuron-hyogen-kaiseki',
    name: 'Cron式パーサー',
    shortDescription:
      'Cron式を読みやすい説明に変換し、次回の実行時刻を表示します。分、時、日、月、曜日の各欄に対応します。',
    keywords: [
      'Cron式 パーサー',
      'cron 式 確認',
      'cron 式 解説',
      'cron 式 テスト',
      'cron ジェネレーター',
      'cron スケジュール 確認',
      'cron 式 チェッカー',
      'cron 次回 実行',
      'crontab 確認',
    ],
    seo: {
      title: 'Cron式パーサー｜Cron式の意味と次回実行をオンラインで無料確認するツール | UtilityFlow',
      description:
        'Cron式を読みやすい日本語の説明に変換し、次回の実行時刻を表示します。分、時、日、月、曜日の各欄に対応し、ブラウザ内で無料で処理します。サーバーの定期タスクの設定確認に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。次回の実行時刻も一覧で確認でき、スケジュールの設定ミスを防ぐのに役立ちます。',
      primaryKeyword: 'Cron式 パーサー',
      secondaryKeywords: ['cron 式 確認ツール', 'cron 式 解説', 'cron スケジュール 確認', 'cron 式 チェッカー'],
      longTailKeywords: ['Cron式の意味を日本語でオンラインで確認する', 'Cron式の次回実行時刻を表示する', '毎朝9時に実行するCron式を作る', '15分ごとに実行するCron式を確認する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '「0 9 * * 1-5」のようなCron式を、読みやすい日本語の説明に変換します。各欄の意味と次回の実行時刻が表示され、スケジュールの設定ミスを防げます。',
  },
  'color-converter': {
    slug: 'kara-henkan',
    name: 'カラー変換ツール',
    shortDescription:
      '色をHEX、RGB、HSL、HSVの間で変換し、コントラスト比とWCAGの適合レベルも確認できます。',
    keywords: [
      'カラー 変換',
      '色 変換ツール',
      'HEX RGB 変換',
      'HSL 変換',
      'カラーコード 変換',
      '色 コントラスト チェック',
      'HEX カラー 変換',
      'RGB HSL 変換',
      'WCAG コントラスト',
    ],
    seo: {
      title: 'カラー変換ツール｜HEX・RGB・HSLをオンラインで無料で相互変換するツール | UtilityFlow',
      description:
        '色をHEX、RGB、HSL、HSVの間で変換できます。2色間のコントラスト比とWCAGの適合レベルも表示し、ブラウザ内で無料で処理します。ウェブサイトの配色やデザインシステムの色管理に役立ち、登録は不要、スマートフォンのブラウザでも同じように使えます。配色のアクセシビリティ確認にも役立つ無料ツールです。',
      primaryKeyword: 'カラー 変換',
      secondaryKeywords: ['HEX RGB 変換ツール', 'HSL 変換ツール', 'カラーコード 変換', '色 コントラスト チェック'],
      longTailKeywords: ['HEXをRGBにオンラインで無料変換する', '色のコントラスト比をWCAGで確認する', 'HSLをHEXに変換する', '2色間のコントラスト比を計算する'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '色をHEX、RGB、HSL、HSVの間で相互に変換します。2色間のコントラスト比とWCAGの適合レベルも表示されるため、アクセシブルな配色の確認にも使えます。',
  },
};
