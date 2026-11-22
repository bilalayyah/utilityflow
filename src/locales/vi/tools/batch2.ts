import type { ToolLocaleOverride } from '../../types';

/**
 * Vietnamese overrides — Batch 2: Developer tools (14 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Original Vietnamese copy, SEO-optimized for Vietnamese search intent.
 * Slugs are ASCII Latin (diacritics stripped), unique, lowercase,
 * hyphenated, and must not collide with English slugs or reserved paths.
 */
export const VI_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'ma-hoa-giai-ma-base64',
    name: 'Mã hóa / Giải mã Base64',
    shortDescription:
      'Mã hóa văn bản thành Base64 chuẩn hoặc Base64 an toàn cho URL, và giải mã chuỗi Base64 UTF-8 ngay trong trình duyệt.',
    keywords: [
      'base64 encoder decoder online',
      'mã hóa base64 online',
      'giải mã base64 online',
      'chuyển base64 sang text',
      'chuyển text sang base64',
      'base64 url safe là gì',
      'công cụ base64 miễn phí',
      'encode base64 utf8',
      'decode base64 có emoji',
    ],
    seo: {
      title: 'Mã hóa và Giải mã Base64 trực tuyến miễn phí | UtilityFlow',
      description:
        'Mã hóa văn bản UTF-8 sang Base64 hoặc giải mã Base64 thành văn bản dễ đọc — có tùy chọn an toàn cho URL, xử lý ngay trong trình duyệt. Thử ngay, miễn phí!',
      primaryKeyword: 'base64 encoder decoder online',
      secondaryKeywords: ['mã hóa base64 online', 'giải mã base64 online', 'chuyển base64 sang text', 'chuyển text sang base64'],
      longTailKeywords: ['cách mã hóa văn bản utf8 có emoji sang base64', 'giải mã base64 url safe không có padding', 'công cụ chuyển đổi base64 miễn phí trên trình duyệt', 'cách giải mã chuỗi base64 có emoji'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Chuyển chuỗi UTF-8 — kể cả ký tự có dấu và emoji — thành Base64 chuẩn hoặc Base64 an toàn cho URL theo RFC 4648, hoặc giải mã chuỗi Base64 trở lại thành văn bản thuần túy với kiểm tra hợp lệ tức thì.',
  },
  'url-encoder-decoder': {
    slug: 'ma-hoa-giai-ma-url',
    name: 'Mã hóa / Giải mã URL',
    shortDescription:
      'Mã hóa phần trăm (percent-encoding) cho giá trị truy vấn hoặc toàn bộ URL, và xem phân tích host, đường dẫn cùng tham số truy vấn.',
    keywords: [
      'url encoder decoder online',
      'mã hóa url online',
      'giải mã url online',
      'percent encoding là gì',
      'phân tích url online',
      'encodeuricomponent online',
      'công cụ giải mã url',
      'mã hóa query string',
      'mã hóa ký tự đặc biệt trong url',
    ],
    seo: {
      title: 'Mã hóa và Giải mã URL trực tuyến miễn phí | UtilityFlow',
      description:
        'Mã hóa hoặc giải mã URL bằng chế độ encodeURIComponent và encodeURI, đồng thời xem đầy đủ protocol, host, đường dẫn và tham số truy vấn. Nhận kết quả ngay!',
      primaryKeyword: 'url encoder decoder online',
      secondaryKeywords: ['mã hóa url online', 'giải mã url online', 'percent encoding là gì', 'phân tích url online'],
      longTailKeywords: ['encodeuri và encodeuricomponent khác nhau thế nào', 'cách giải mã tham số truy vấn trong url', 'mã hóa ký tự đặc biệt trong url bằng percent encoding', 'cách mã hóa giá trị truy vấn mà không làm vỡ dấu &'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Mã hóa an toàn giá trị tham số truy vấn hoặc toàn bộ URL, giải mã chuỗi đã mã hóa phần trăm (%20, %3A, +) và xem bảng phân tích trực tiếp từng tham số truy vấn.',
  },
  'uuid-generator': {
    slug: 'tao-uuid-online',
    name: 'Tạo UUID (v4 và v7)',
    shortDescription:
      'Tạo hàng loạt UUID v4 ngẫu nhiên theo mật mã và UUID v7 sắp xếp theo thời gian theo chuẩn RFC 9562.',
    keywords: [
      'uuid generator online',
      'cách tạo uuid',
      'guid generator',
      'uuid v4 generator miễn phí',
      'uuid v7 là gì',
      'tạo uuid ngẫu nhiên',
      'công cụ tạo uuid online',
      'tạo nhiều uuid cùng lúc',
      'tạo uuid online miễn phí',
    ],
    seo: {
      title: 'Tạo UUID v4 và v7 trực tuyến miễn phí | UtilityFlow',
      description:
        'Tạo tới 100 UUID v4 ngẫu nhiên theo mật mã hoặc UUID v7 sắp xếp theo thời gian theo RFC 9562 — có tùy chọn chữ hoa, dấu gạch ngang và dấu ngoặc. Miễn phí!',
      primaryKeyword: 'uuid generator online',
      secondaryKeywords: ['cách tạo uuid', 'guid generator', 'uuid v4 generator miễn phí', 'uuid v7 là gì'],
      longTailKeywords: ['cách tạo nhiều uuid v4 và v7 cùng lúc', 'uuid v7 sắp xếp theo thời gian rfc 9562 là gì', 'tạo uuid chữ hoa không có dấu gạch ngang', 'công cụ tạo 100 uuid miễn phí cùng lúc'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tạo một hoặc nhiều UUID cùng lúc — UUID v4 ngẫu nhiên theo mật mã và UUID v7 sắp xếp theo dấu thời gian, trực tiếp từ Web Crypto API, với nhiều tùy chọn định dạng.',
  },
  'regex-tester': {
    slug: 'kiem-tra-regex-truc-tuyen',
    name: 'Kiểm tra Regex',
    shortDescription:
      'Kiểm tra biểu thức chính quy JavaScript với tô sáng kết quả khớp trực tiếp, nhóm bắt (capture group), cờ và đầu ra thay thế.',
    keywords: [
      'regex tester online',
      'cách kiểm tra regex',
      'regular expression tester',
      'javascript regex tester',
      'kiểm tra regex khớp online',
      'cách debug regex',
      'công cụ kiểm tra regex',
      'kiểm tra mẫu regex',
      'regex capture group là gì',
    ],
    seo: {
      title: 'Kiểm Tra Regex: Test Biểu Thức Chính Quy | UtilityFlow',
      description:
        'Kiểm tra biểu thức chính quy với các cờ g, i, m, s — tô sáng kết quả khớp, xem nhóm bắt và bản xem trước thay thế, miễn phí. Kết quả nhanh và chính xác.',
      primaryKeyword: 'regex tester online',
      secondaryKeywords: ['cách kiểm tra regex', 'regular expression tester', 'javascript regex tester', 'kiểm tra regex khớp online'],
      longTailKeywords: ['cách kiểm tra regex capture group trong javascript online', 'công cụ tô sáng kết quả khớp regex trực tiếp', 'xem trước thay thế regex với capture group', 'cách debug regex với tô sáng trực tiếp'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Gỡ lỗi biểu thức chính quy JavaScript một cách tương tác — tô sáng kết quả khớp trực tiếp, vị trí chỉ mục của kết quả khớp, nhóm bắt được đánh số, công tắc cờ và bản xem trước thay thế.',
  },
  'jwt-decoder': {
    slug: 'giai-ma-jwt-online',
    name: 'Giải mã JWT',
    shortDescription:
      'Giải mã header, claim trong payload và dấu thời gian hết hạn của JSON Web Token ngay trong trình duyệt của bạn.',
    keywords: [
      'jwt decoder online',
      'cách giải mã jwt',
      'giải mã json web token',
      'kiểm tra token jwt',
      'cách kiểm tra jwt hết hạn',
      'xem payload jwt online',
      'cách xem token jwt',
      'jwt claims là gì',
      'kiểm tra jwt hết hạn online',
    ],
    seo: {
      title: 'Giải Mã JWT: Kiểm Tra Token Và Thời Hạn | UtilityFlow',
      description:
        'Giải mã header và claim trong payload của JWT ngay trong trình duyệt, xem iat, nbf và exp dưới dạng ngày UTC rõ ràng — miễn phí và hoàn toàn riêng tư.',
      primaryKeyword: 'jwt decoder online',
      secondaryKeywords: ['cách giải mã jwt', 'giải mã json web token', 'kiểm tra token jwt', 'cách kiểm tra jwt hết hạn'],
      longTailKeywords: ['giải mã token jwt cục bộ mà không gửi lên máy chủ', 'cách kiểm tra ngày hết hạn exp của jwt online', 'cách xem header và claim base64url của jwt', 'cách đọc claim trong payload jwt trên trình duyệt'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Kiểm tra JSON Web Token (JWT) an toàn trong bộ nhớ cục bộ của trình duyệt — xem đối tượng JSON Header và Payload đã định dạng, cùng trạng thái hết hạn dễ đọc của `iat`, `nbf` và `exp`.',
  },
  'hash-generator': {
    slug: 'tao-hash-sha256',
    name: 'Tạo Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Tạo hash mật mã SHA-1, SHA-256, SHA-384 và SHA-512 cho văn bản hoặc tệp cục bộ bằng Web Crypto.',
    keywords: [
      'hash generator online',
      'tạo sha256 online',
      'cách tạo hash sha512',
      'cách lấy checksum của file',
      'sha1 hash generator',
      'sha384 hash online',
      'tính checksum online',
      'cách xác minh checksum file',
      'tạo hash bảo mật online',
    ],
    seo: {
      title: 'Tạo Hash SHA-256 và SHA-512 trực tuyến | UtilityFlow',
      description:
        'Tạo hash SHA-1, SHA-256, SHA-384 và SHA-512 cho văn bản và tệp cục bộ dưới dạng hex hoặc Base64 — ngay trong trình duyệt, miễn phí và an toàn. Thử ngay!',
      primaryKeyword: 'hash generator online',
      secondaryKeywords: ['tạo sha256 online', 'cách lấy checksum của file', 'cách tạo hash sha512', 'tính checksum online'],
      longTailKeywords: ['cách lấy checksum sha256 của file cục bộ trên trình duyệt', 'cách tạo hash sha256 dạng hex và base64', 'tạo hash bằng web crypto api online', 'cách xác minh checksum của file đã tải xuống'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Lấy hash SHA-1, SHA-256, SHA-384 và SHA-512 cùng lúc bằng Web Crypto API gốc của trình duyệt (`crypto.subtle.digest`) — cho cả văn bản UTF-8 và checksum của tệp cục bộ.',
  },
  'html-entity-encoder': {
    slug: 'ma-hoa-ky-tu-html',
    name: 'Mã hóa & Giải mã HTML Entity',
    shortDescription:
      'Thoát (escape) các ký tự HTML dành riêng (<, >, &, dấu ngoặc kép) và ký hiệu không phải ASCII, hoặc giải mã HTML entity về văn bản thuần túy.',
    keywords: [
      'html entity encoder online',
      'cách escape html',
      'giải mã html entity',
      'mã hóa ký tự đặc biệt html',
      'escape html online',
      'chuyển đổi html entity',
      'cách giải mã html',
      'escape dấu ngoặc kép trong html',
      'html entity encoder decoder',
    ],
    seo: {
      title: 'Mã hóa HTML Entity trực tuyến: Escape ký tự | UtilityFlow',
      description:
        'Mã hóa ký tự HTML dành riêng và ký hiệu không phải ASCII thành entity, hoặc giải mã entity có tên và dạng số về văn bản thuần túy — miễn phí. Thử ngay!',
      primaryKeyword: 'html entity encoder online',
      secondaryKeywords: ['cách escape html', 'giải mã html entity', 'mã hóa ký tự đặc biệt html', 'escape html online'],
      longTailKeywords: ['cách escape thẻ html cho đoạn code mẫu', 'cách giải mã html entity có tên và dạng số', 'cách đổi ký tự đặc biệt thành html entity', 'cách escape dấu ngoặc kép và dấu & trong html'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Thoát an toàn `<`, `>`, `&`, dấu ngoặc kép và ký hiệu Unicode quốc tế thành HTML entity để nhúng đoạn code vào trang web, hoặc giải mã chuỗi HTML đã thoát trở lại thành văn bản dễ đọc.',
  },
  'json-csv-converter': {
    slug: 'chuyen-json-sang-csv',
    name: 'Chuyển JSON sang CSV và CSV sang JSON',
    shortDescription:
      'Chuyển mảng JSON thành bảng tính CSV theo RFC 4180 và phân tích tệp CSV có dấu ngoặc kép trở lại thành JSON gọn gàng.',
    keywords: [
      'json to csv converter online',
      'csv to json converter',
      'chuyển json sang csv miễn phí',
      'cách chuyển json sang csv',
      'cách chuyển csv sang json',
      'json to csv online free',
      'chuyển mảng json sang csv',
      'cách convert csv sang json',
      'json tsv converter online',
    ],
    seo: {
      title: 'Chuyển JSON sang CSV và CSV sang JSON miễn phí | UtilityFlow',
      description:
        'Chuyển mảng JSON thành bảng CSV gọn gàng bằng cách làm phẳng đối tượng lồng nhau, hoặc phân tích tệp CSV và TSV thành JSON có cấu trúc — miễn phí, xử lý cục bộ.',
      primaryKeyword: 'json to csv converter online',
      secondaryKeywords: ['csv to json converter', 'cách chuyển json sang csv', 'cách chuyển csv sang json', 'json to csv online free'],
      longTailKeywords: ['cách chuyển đối tượng json lồng nhau thành cột csv', 'cách chuyển csv có dấu ngoặc kép chứa dấu phẩy thành mảng json', 'công cụ chuyển json sang csv và tải xuống trên trình duyệt', 'cách chuyển mảng json thành bảng csv miễn phí'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Chuyển mảng JSON từ API thành bảng tính CSV gọn gàng — khóa của đối tượng lồng nhau được làm phẳng tự động — hoặc phân tích tệp CSV và TSV có dấu ngoặc kép chứa dấu phẩy trở lại thành JSON đã định dạng.',
  },
  'unix-timestamp-converter': {
    slug: 'doi-unix-timestamp-sang-ngay',
    name: 'Chuyển đổi Unix Timestamp',
    shortDescription:
      'Chuyển đổi giây hoặc mili-giây epoch Unix sang ngày ISO 8601, UTC và giờ địa phương — và ngược lại.',
    keywords: [
      'unix timestamp converter online',
      'chuyển epoch sang ngày',
      'unix time là gì',
      'cách lấy epoch time',
      'chuyển timestamp sang ngày online',
      'chuyển ngày sang unix timestamp',
      'unix time hiện tại là bao nhiêu',
      'chuyển đổi epoch milliseconds',
      'unix timestamp converter',
    ],
    seo: {
      title: 'Chuyển đổi Unix Timestamp: Đổi sang ngày giờ | UtilityFlow',
      description:
        'Chuyển Unix timestamp dạng giây hoặc mili-giây sang ISO 8601, UTC, RFC 2822 và giờ địa phương, hoặc lấy thời gian Unix từ bất kỳ ngày nào dễ dàng — miễn phí.',
      primaryKeyword: 'unix timestamp converter online',
      secondaryKeywords: ['chuyển epoch sang ngày', 'unix time là gì', 'chuyển timestamp sang ngày online', 'chuyển ngày sang unix timestamp'],
      longTailKeywords: ['cách đổi epoch milliseconds sang ngày iso 8601', 'cách xem unix time hiện tại theo giây trực tiếp', 'cách đổi ngày giờ địa phương sang epoch unix', 'cách đổi unix timestamp sang ngày utc online miễn phí'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Chuyển số nguyên epoch Unix (giây hoặc mili-giây) thành chuỗi ISO 8601, UTC và múi giờ địa phương — kèm độ lệch tương đối — hoặc chuyển bất kỳ ngày dương lịch nào trở lại thành Unix timestamp.',
  },
  'sql-formatter': {
    slug: 'dinh-dang-sql-online',
    name: 'Định dạng SQL',
    shortDescription:
      'Định dạng, thụt lề và chuẩn hóa truy vấn SQL — viết hoa/thường từ khóa hoặc thu gọn truy vấn thành một dòng.',
    keywords: [
      'sql formatter online',
      'cách định dạng truy vấn sql',
      'sql beautifier',
      'sql minifier online',
      'công cụ định dạng sql',
      'làm đẹp truy vấn sql',
      'cách thụt lề sql',
      'sql formatter miễn phí',
      'format sql online miễn phí',
    ],
    seo: {
      title: 'Định dạng SQL: Làm đẹp truy vấn trực tuyến | UtilityFlow',
      description:
        'Định dạng truy vấn SQL với ngắt mệnh đề gọn gàng, viết hoa/thường từ khóa và thụt lề 2 hoặc 4 khoảng trắng, hoặc thu gọn thành một dòng — miễn phí, trực tuyến.',
      primaryKeyword: 'sql formatter online',
      secondaryKeywords: ['cách định dạng truy vấn sql', 'sql beautifier', 'sql minifier online', 'công cụ định dạng sql'],
      longTailKeywords: ['cách định dạng truy vấn sql có select join group by online', 'cách đổi từ khóa sql sang chữ hoa mà không bị lỗi', 'cách thu gọn truy vấn sql mà vẫn giữ nguyên chuỗi ký tự', 'định dạng truy vấn sql với thụt lề 2 hoặc 4 khoảng trắng'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Biến truy vấn SQL dày đặc trên một dòng thành câu lệnh dễ đọc, có cấu trúc — căn chỉnh rõ ràng `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` và `ORDER BY`, đồng thời giữ nguyên chuỗi trong dấu ngoặc kép và chú thích.',
  },
  'css-minifier': {
    slug: 'nen-css-online',
    name: 'Nén CSS & Làm đẹp CSS',
    shortDescription:
      'Nén stylesheet CSS để giảm kích thước bundle hoặc làm đẹp CSS đã nén với thụt lề gọn gàng.',
    keywords: [
      'css minifier online',
      'css beautifier',
      'cách nén css',
      'công cụ định dạng css',
      'cách minify css',
      'cách thu nhỏ css',
      'minify css online free',
      'cách unminify css',
      'cách giảm kích thước file css',
    ],
    seo: {
      title: 'Nén CSS và Làm đẹp CSS trực tuyến miễn phí | UtilityFlow',
      description:
        'Nén CSS bằng cách loại bỏ chú thích và khoảng trắng thừa — kèm thống kê byte tiết kiệm trực tiếp — hoặc mở stylesheet đã nén thành rule gọn gàng, miễn phí.',
      primaryKeyword: 'css minifier online',
      secondaryKeywords: ['css beautifier', 'cách nén css', 'công cụ định dạng css', 'cách minify css'],
      longTailKeywords: ['cách nén css mà vẫn giữ chuỗi trong dấu ngoặc kép và media query', 'cách unminify file css đã nén online', 'cách tính phần trăm nén css trên trình duyệt', 'cách giảm kích thước file css trước khi triển khai'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Nén stylesheet CSS bằng cách loại bỏ chú thích, khoảng trắng thừa và dấu chấm phẩy cuối cùng trước dấu ngoặc đóng, hoặc mở CSS đã nén trên một dòng trở lại thành khối đã thụt lề, dễ đọc.',
  },
  'js-formatter': {
    slug: 'dinh-dang-javascript-online',
    name: 'Nén & Định dạng JavaScript / TypeScript',
    shortDescription:
      'Nén đoạn mã JavaScript bằng cách loại bỏ chú thích và khoảng trắng thừa, hoặc làm đẹp khối mã gọn gàng.',
    keywords: [
      'javascript minifier online',
      'js formatter',
      'js beautifier online',
      'cách nén javascript',
      'công cụ định dạng js',
      'cách minify javascript',
      'làm đẹp code js',
      'typescript minifier online',
      'js code formatter free',
    ],
    seo: {
      title: 'Nén và Định dạng JavaScript trực tuyến | UtilityFlow',
      description:
        'Nén JavaScript và TypeScript bằng cách loại bỏ chú thích và khoảng trắng một cách an toàn, hoặc mở mã gọn gàng với thụt lề 2 hoặc 4 khoảng trắng — miễn phí.',
      primaryKeyword: 'javascript minifier online',
      secondaryKeywords: ['js formatter', 'js beautifier online', 'cách nén javascript', 'công cụ định dạng js'],
      longTailKeywords: ['cách nén js mà vẫn giữ chuỗi và template literal', 'cách mở code javascript gọn gàng kèm thụt lề', 'công cụ định dạng và nén js trên trình duyệt', 'làm đẹp code javascript với thụt lề 2 hoặc 4 khoảng trắng'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Nén đoạn mã JavaScript cho bookmarklet và script nội tuyến — loại bỏ chú thích và khoảng trắng thừa trong khi vẫn giữ nguyên chuỗi ký tự — hoặc thụt lề lại mã đã nén.',
  },
  'cron-expression-parser': {
    slug: 'phan-tich-bieu-thuc-cron',
    name: 'Phân tích biểu thức Cron & Xem trước lịch chạy',
    shortDescription:
      'Hiểu biểu thức cron 5 trường bằng ngôn ngữ đơn giản, xem các mẫu sẵn có và xem trước 8 lần chạy tiếp theo.',
    keywords: [
      'cron expression parser online',
      'tạo crontab online',
      'kiểm tra lịch cron',
      'cách hiểu biểu thức cron',
      'cron job là gì',
      'kiểm tra biểu thức cron online',
      'crontab guru alternative',
      'công cụ xem trước lịch cron',
      'biểu thức cron là gì',
    ],
    seo: {
      title: 'Phân tích biểu thức Cron: Hiểu lịch chạy | UtilityFlow',
      description:
        'Hiểu biểu thức cron 5 trường bằng ngôn ngữ đơn giản, kiểm tra từng trường, thử các mẫu sẵn có và xem 8 lần chạy tiếp theo — miễn phí, tức thì. Thử ngay!',
      primaryKeyword: 'cron expression parser online',
      secondaryKeywords: ['tạo crontab online', 'kiểm tra lịch cron', 'cách hiểu biểu thức cron', 'cron job là gì'],
      longTailKeywords: ['cách hiểu biểu thức cron 5 trường bằng ngôn ngữ đơn giản', 'cách xem 8 lần chạy tiếp theo của cron', 'kiểm tra biểu thức cron có ngày trong tuần và bước nhảy online', 'ví dụ biểu thức cron chạy 9 giờ sáng mỗi ngày trong tuần'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Giải mã biểu thức crontab Unix 5 trường (`phút giờ ngày-trong-tháng tháng ngày-trong-tuần`) thành bản tóm tắt rõ ràng, dễ đọc, kiểm tra phạm vi từng trường và xem 8 lần chạy đã lên lịch tiếp theo.',
  },
  'color-converter': {
    slug: 'chuyen-doi-mau-hex-rgb',
    name: 'Chuyển đổi màu sắc (HEX / RGB / HSL & độ tương phản WCAG)',
    shortDescription:
      'Chuyển đổi màu sắc giữa HEX, RGB và HSL với bộ chọn màu trực tiếp và kiểm tra độ tương phản WCAG 2.1 AA/AAA.',
    keywords: [
      'color converter online',
      'chuyển hex sang rgb',
      'cách chuyển rgb sang hex',
      'kiểm tra độ tương phản wcag',
      'chuyển hex sang hsl',
      'cách chuyển rgb sang hsl',
      'color picker online',
      'công cụ chuyển đổi màu hex',
      'chuyển hsl sang rgb',
    ],
    seo: {
      title: 'Chuyển Đổi Màu HEX, RGB, HSL Miễn Phí | UtilityFlow',
      description:
        'Chuyển đổi màu sắc giữa HEX, RGB và HSL ngay lập tức, đồng thời kiểm tra độ tương phản chữ-nền theo chuẩn WCAG 2.1 AA và AAA — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'color converter online',
      secondaryKeywords: ['chuyển hex sang rgb', 'cách chuyển rgb sang hex', 'kiểm tra độ tương phản wcag', 'chuyển hex sang hsl'],
      longTailKeywords: ['cách đổi màu hex sang giá trị rgb và hsl trong css', 'cách kiểm tra độ tương phản chữ theo wcag 2.1 aa và aaa', 'công cụ màu hex rgb hsl cho lập trình viên', 'cách đổi hex sang hsl cho biến css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Dễ dàng chuyển đổi màu sắc giữa ký hiệu CSS HEX, RGB và HSL với bảng màu trực tiếp và công cụ kiểm tra tỷ lệ tương phản WCAG 2.1 — cho thiết kế giao diện dễ tiếp cận.',
  },
};
