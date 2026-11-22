import type { ToolLocaleOverride } from '../../types';

/**
 * Vietnamese overrides — Batch 5: SEO tools (10) + Image & File tools (10).
 * Source: src/registry/batches/batch6SeoTools.ts,
 *         src/registry/batches/batch7ImageFileTools.ts.
 * Original Vietnamese copy, SEO-optimized for Vietnamese search intent.
 * Slugs are ASCII Latin (diacritics stripped), unique, lowercase,
 * hyphenated, and must not collide with English slugs or reserved paths.
 */
export const VI_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'tao-meta-tag',
    name: 'Trình Tạo Meta Tag',
    shortDescription:
      'Tạo thẻ title, meta description, canonical, robots, Open Graph và Twitter/X Card, kèm xem trước thẻ chia sẻ trực tiếp.',
    keywords: [
      'meta tag generator',
      'cách tạo meta tag',
      'open graph generator',
      'twitter card generator',
      'tạo thẻ meta cho website',
      'meta description generator',
      'thẻ meta seo là gì',
      'og tags generator',
      'cách thêm meta tag vào website',
    ],
    seo: {
      title: 'Trình Tạo Meta Tag: Thẻ Open Graph và SEO | UtilityFlow',
      description:
        'Tạo thẻ title, description, canonical, Open Graph và Twitter Card chuẩn SEO. Kiểm tra độ dài và xem trước thẻ chia sẻ — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'meta tag generator',
      secondaryKeywords: [
        'cách tạo meta tag',
        'open graph generator',
        'twitter card generator',
        'meta description generator',
      ],
      longTailKeywords: [
        'cách tạo meta tag cho website miễn phí',
        'cách tạo thẻ open graph và twitter card',
        'kiểm tra độ dài meta title description',
        'cách chèn thẻ meta seo vào html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tạo metadata HTML <head> đúng chuẩn — <title>, <meta name="description">, URL canonical, quy tắc lập chỉ mục, thẻ Open Graph (og:*) và Twitter/X Card — kèm thoát ký tự thuộc tính và xem trước thẻ chia sẻ trực tiếp.',
  },
  'serp-snippet-preview': {
    slug: 'xem-truoc-serp-google',
    name: 'Xem Trước Đoạn Trích SERP Google',
    shortDescription:
      'Xem trước kết quả tìm kiếm Google trên máy tính và điện thoại — kiểm tra độ rộng pixel thực của tiêu đề và tô đậm từ khóa.',
    keywords: [
      'serp preview',
      'google serp preview tool',
      'xem trước kết quả tìm kiếm google',
      'kiểm tra độ dài tiêu đề seo',
      'xem trước meta description',
      'google snippet preview',
      'serp checker online',
      'tiêu đề hiển thị trên google như thế nào',
      'công cụ xem trước serp',
    ],
    seo: {
      title: 'Xem Trước SERP Google: Kết Quả Tìm Kiếm | UtilityFlow',
      description:
        'Xem trước đoạn trích tìm kiếm Google trên máy tính và điện thoại trước khi đăng bài. Kiểm tra độ rộng pixel của tiêu đề và cảnh báo bị cắt ngắn — miễn phí.',
      primaryKeyword: 'serp preview',
      secondaryKeywords: [
        'google serp preview tool',
        'xem trước kết quả tìm kiếm google',
        'kiểm tra độ dài tiêu đề seo',
        'xem trước meta description',
      ],
      longTailKeywords: [
        'cách xem tiêu đề hiển thị trên google như thế nào',
        'kiểm tra tiêu đề seo có vừa 580px không',
        'cách xem trước serp trên điện thoại và máy tính',
        'kiểm tra meta description có bị google cắt ngắn không',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đừng đoán mò — hãy đo bằng Canvas HTML5 để biết tiêu đề SEO có vừa với khoảng hiển thị khoảng 580 px của Google hay không, đồng thời xem trước thẻ kết quả trên máy tính và điện thoại với từ khóa được tô đậm.',
  },
  'xml-sitemap-generator': {
    slug: 'tao-sitemap-xml',
    name: 'Trình Tạo Sitemap XML',
    shortDescription:
      'Tạo file sitemap.xml chuẩn Sitemaps.org từ danh sách URL — tự loại trùng lặp, kèm lastmod và changefreq.',
    keywords: [
      'sitemap generator',
      'xml sitemap generator',
      'cách tạo sitemap',
      'cách tạo file sitemap.xml',
      'tạo sitemap cho website',
      'tạo sitemap miễn phí',
      'sitemap maker online',
      'cách tạo sitemap xml',
      'công cụ sitemap seo',
    ],
    seo: {
      title: 'Trình Tạo Sitemap XML: Cho Website Miễn Phí | UtilityFlow',
      description:
        'Chuyển danh sách URL canonical thành file sitemap.xml chuẩn ngay lập tức — tự loại trùng lặp, kèm ngày lastmod và gợi ý changefreq, ngay trên trình duyệt.',
      primaryKeyword: 'sitemap generator',
      secondaryKeywords: [
        'xml sitemap generator',
        'cách tạo sitemap',
        'cách tạo file sitemap.xml',
        'tạo sitemap cho website',
      ],
      longTailKeywords: [
        'cách tạo sitemap xml cho website miễn phí',
        'tạo sitemap xml từ danh sách url',
        'cách thêm lastmod và changefreq vào sitemap',
        'cách tạo sitemap cho website nhỏ online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Chuyển bất kỳ danh sách URL https:// canonical nào thành file sitemap.xml đúng chuẩn Sitemaps 0.9 — tự lọc URL sai, loại trùng lặp, thoát ký tự XML và xuất file .xml.',
  },
  'robots-txt-generator': {
    slug: 'tao-robots-txt',
    name: 'Trình Tạo Robots.txt',
    shortDescription:
      'Tạo quy tắc robots.txt chuẩn theo từng User-agent — kèm đường dẫn Allow/Disallow, Crawl-delay và chỉ thị Sitemap.',
    keywords: [
      'robots.txt generator',
      'cách tạo robots.txt',
      'cách tạo file robots.txt',
      'allow disallow robots txt',
      'tạo robots txt miễn phí',
      'robots.txt là gì',
      'sitemap robots txt',
      'robots txt maker',
      'cách tạo robots txt cho website',
    ],
    seo: {
      title: 'Trình Tạo Robots.txt: Quy Tắc Cho Bot | UtilityFlow',
      description:
        'Tạo file robots.txt chuẩn với nhóm User-agent, quy tắc Allow/Disallow, crawl-delay và liên kết sitemap. Kèm mẫu có sẵn — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'robots.txt generator',
      secondaryKeywords: [
        'cách tạo robots.txt',
        'cách tạo file robots.txt',
        'allow disallow robots txt',
        'tạo robots txt miễn phí',
      ],
      longTailKeywords: [
        'cách tạo file robots txt cho website',
        'cách thêm sitemap vào robots txt',
        'cách chặn bot thu thập dữ liệu bằng robots txt',
        'cách tạo robots txt cho wordpress',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tạo chỉ thị robots.txt rõ ràng từ mẫu có sẵn cho website mở, ứng dụng SaaS, WordPress hoặc chặn môi trường thử nghiệm — kèm User-agent, Allow/Disallow, Crawl-delay và dòng Sitemap:.',
  },
  'schema-markup-generator': {
    slug: 'tao-schema-json-ld',
    name: 'Trình Tạo Schema Markup JSON-LD',
    shortDescription:
      'Tạo mã JSON-LD Schema.org chuẩn cho Article, FAQPage, Product, Organization và BreadcrumbList.',
    keywords: [
      'schema markup generator',
      'json ld generator',
      'structured data generator',
      'faq schema generator',
      'schema.org json ld',
      'rich snippet schema',
      'cách tạo json ld',
      'structured data là gì',
      'breadcrumb schema generator',
    ],
    seo: {
      title: 'Trình Tạo Schema JSON-LD: Dữ Liệu Có Cấu Trúc | UtilityFlow',
      description:
        'Tạo mã JSON-LD Schema.org chuẩn cho Article, FAQPage, Product, Organization và BreadcrumbList. Thoát HTML an toàn, sao chép script và xuất file .jsonld.',
      primaryKeyword: 'schema markup generator',
      secondaryKeywords: [
        'json ld generator',
        'structured data generator',
        'faq schema generator',
        'schema.org json ld',
      ],
      longTailKeywords: [
        'cách tạo schema json ld cho website miễn phí',
        'cách tạo structured data faqpage',
        'cách tạo schema article và product',
        'cách chèn mã json ld vào html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tạo khối JSON-LD Schema.org sạch cho Article, FAQPage, Product, Organization và BreadcrumbList — kèm trình tạo hàng động, thoát ký tự < an toàn trong thẻ script và xuất file .jsonld.',
  },
  'url-slug-generator': {
    slug: 'tao-slug-url',
    name: 'Trình Tạo Slug URL',
    shortDescription:
      'Chuyển tiêu đề bài viết thành slug URL gọn, chuẩn SEO — chuyển dấu thành ASCII, xử lý hàng loạt và loại bỏ stop word.',
    keywords: [
      'slug generator',
      'cách tạo slug url',
      'cách tạo url chuẩn seo',
      'chuyển tiêu đề thành slug',
      'permalink generator',
      'slug maker online',
      'tạo slug url miễn phí',
      'url chuẩn seo là gì',
      'cách tạo slug từ tiêu đề',
    ],
    seo: {
      title: 'Trình Tạo Slug URL: Permalink Chuẩn SEO | UtilityFlow',
      description:
        'Chuyển tiêu đề thành nhiều slug chuẩn SEO cùng lúc — đổi dấu thành ASCII, loại stop word và cắt đúng ranh giới từ, hoàn toàn miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'slug generator',
      secondaryKeywords: [
        'cách tạo slug url',
        'cách tạo url chuẩn seo',
        'chuyển tiêu đề thành slug',
        'permalink generator',
      ],
      longTailKeywords: [
        'cách chuyển tiêu đề blog thành slug chuẩn seo',
        'cách tạo nhiều slug cùng lúc online',
        'cách tạo slug url từ tiêu đề tiếng việt',
        'cách loại bỏ stop word khỏi slug',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Chuẩn hóa permalink dễ đọc, nối bằng dấu gạch ngang cho từng bài viết hay cả lịch nội dung. Chuyển dấu thành ASCII gọn gàng (Cà Phê → ca-phe), loại bỏ stop word thừa nếu muốn, giới hạn độ dài mà không cắt giữa từ, và xem trước URL đầy đủ.',
  },
  'keyword-density-checker': {
    slug: 'kiem-tra-mat-do-tu-khoa',
    name: 'Công Cụ Kiểm Tra Mật Độ Từ Khóa',
    shortDescription:
      'Đếm số từ, kiểm tra mật độ từ khóa mục tiêu, thời gian đọc và tần suất cụm 1, 2, 3 từ — tất cả xử lý ngay trên máy bạn.',
    keywords: [
      'keyword density checker',
      'cách kiểm tra mật độ từ khóa',
      'mật độ từ khóa là gì',
      'seo content analyzer',
      'công cụ kiểm tra mật độ từ khóa miễn phí',
      'kiểm tra tần suất từ khóa',
      'cách tính mật độ từ khóa',
      'kiểm tra seo nội dung',
      'kiểm tra nhồi nhét từ khóa',
    ],
    seo: {
      title: 'Kiểm Tra Mật Độ Từ Khóa: Phân Tích SEO | UtilityFlow',
      description:
        'Dán bản nháp hoặc HTML để kiểm tra số từ, thời gian đọc, mật độ từ khóa mục tiêu và cụm 1, 2, 3 từ ngay lập tức — ngay trên trình duyệt, hoàn toàn miễn phí.',
      primaryKeyword: 'keyword density checker',
      secondaryKeywords: [
        'cách kiểm tra mật độ từ khóa',
        'mật độ từ khóa là gì',
        'seo content analyzer',
        'công cụ kiểm tra mật độ từ khóa miễn phí',
      ],
      longTailKeywords: [
        'cách kiểm tra mật độ từ khóa của bài blog online',
        'cách kiểm tra nhồi nhét từ khóa miễn phí',
        'cách tính mật độ từ khóa từ html đã dán',
        'mật độ từ khóa bao nhiêu là tốt cho seo',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Kiểm tra bản nháp nội dung hoặc HTML đã dán — độ sâu từ vựng, thời gian đọc, số lần xuất hiện chính xác của cụm từ mục tiêu và tần suất các cụm 1, 2, 3 từ hàng đầu. Công cụ này giúp phát hiện từ bị lặp vô tình thay vì chạy theo chỉ tiêu từ khóa lỗi thời.',
  },
  'canonical-hreflang-generator': {
    slug: 'tao-hreflang-canonical',
    name: 'Trình Tạo Canonical và Hreflang',
    shortDescription:
      'Tạo thẻ hreflang và canonical cho trang đa ngôn ngữ, kèm quy tắc chuyển hướng 301 cho Cloudflare Pages, Apache và Nginx.',
    keywords: [
      'hreflang generator',
      'canonical tag generator',
      '301 redirect generator',
      'cách tạo thẻ hreflang',
      'cách tạo canonical url',
      'cloudflare redirect rules',
      'thẻ seo đa ngôn ngữ',
      'hreflang là gì',
      'cách tạo chuyển hướng 301',
    ],
    seo: {
      title: 'Trình Tạo Hreflang: Canonical và Redirect 301 | UtilityFlow',
      description:
        'Tạo thẻ hreflang và canonical cho trang đa ngôn ngữ, kèm quy tắc chuyển hướng 301 cho Cloudflare Pages, Apache và Nginx — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'hreflang generator',
      secondaryKeywords: [
        'canonical tag generator',
        '301 redirect generator',
        'cách tạo thẻ hreflang',
        'cách tạo canonical url',
      ],
      longTailKeywords: [
        'cách tạo thẻ hreflang cho website đa ngôn ngữ',
        'cách tạo chuyển hướng 301 cho cloudflare pages',
        'canonical tag là gì và cách dùng',
        'cách tạo thẻ hreflang x-default',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Hai việc SEO kỹ thuật quan trọng trong cùng một nơi — tạo chú thích hreflang đa khu vực kèm canonical (cho cả HTML <head> lẫn sitemap XML), hoặc chuyển danh sách URL cũ thành quy tắc chuyển hướng 301 sẵn dùng cho Cloudflare Pages, Apache và Nginx.',
  },
  'on-page-seo-checker': {
    slug: 'kiem-tra-seo-onpage',
    name: 'Công Cụ Kiểm Tra SEO On-Page',
    shortDescription:
      'Kiểm tra mã HTML đã dán ngay trên trình duyệt — độ dài tiêu đề, meta description, thứ bậc H1–H4, alt ảnh và JSON-LD.',
    keywords: [
      'on page seo checker',
      'cách kiểm tra seo onpage',
      'công cụ audit seo miễn phí',
      'html seo checker',
      'kiểm tra seo online miễn phí',
      'cách kiểm tra seo website',
      'seo onpage là gì',
      'kiểm tra độ dài meta title',
      'cách audit seo',
    ],
    seo: {
      title: 'Kiểm Tra SEO On-Page: Audit HTML Miễn Phí | UtilityFlow',
      description:
        'Dán mã HTML của bất kỳ trang nào để kiểm tra tiêu đề, meta description, heading, canonical, alt ảnh và JSON-LD ngay lập tức — miễn phí, không cần đăng ký.',
      primaryKeyword: 'on page seo checker',
      secondaryKeywords: [
        'cách kiểm tra seo onpage',
        'công cụ audit seo miễn phí',
        'html seo checker',
        'kiểm tra seo online miễn phí',
      ],
      longTailKeywords: [
        'cách kiểm tra seo onpage của website miễn phí',
        'cách audit seo bằng cách dán html',
        'cách kiểm tra cấu trúc heading h1 h2',
        'cách kiểm tra độ dài meta title và description',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Kiểm tra ở cấp DOM bất kỳ mã nguồn HTML nào (View Page Source) ngay trong trình duyệt của bạn — <title>, meta description, canonical, thứ bậc heading H1–H4, ảnh thiếu alt, liên kết nội bộ/ngoại bộ, Open Graph và JSON-LD, tất cả trong một lần.',
  },
  'robots-meta-tag-generator': {
    slug: 'tao-robots-meta-tag',
    name: 'Trình Tạo Thẻ Meta Robots',
    shortDescription:
      'Tạo thẻ robots với noindex, nofollow, noarchive, max-snippet, max-image-preview và quy tắc _headers cho Cloudflare.',
    keywords: [
      'robots meta tag generator',
      'cách thêm thẻ noindex',
      'thẻ meta nofollow',
      'x-robots-tag generator',
      'max-image-preview large',
      'robots meta tag là gì',
      'cách dùng noindex nofollow',
      'cloudflare headers robots',
      'meta robots tag generator',
    ],
    seo: {
      title: 'Trình Tạo Thẻ Meta Robots: Noindex và X-Robots | UtilityFlow',
      description:
        'Tạo thẻ robots HTML và header X-Robots-Tag với noindex, nofollow, max-snippet, max-image-preview, kèm _headers cho Cloudflare — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'robots meta tag generator',
      secondaryKeywords: [
        'cách thêm thẻ noindex',
        'thẻ meta nofollow',
        'x-robots-tag generator',
        'max-image-preview large',
      ],
      longTailKeywords: [
        'cách tạo x-robots-tag noindex cho file pdf',
        'cách thêm thẻ meta noindex nofollow',
        'cách đặt max-snippet và max-image-preview large',
        'robots txt và meta robots khác nhau như thế nào',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tạo chỉ thị thu thập dữ liệu ở cấp trang — index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet và max-image-preview:large — đồng thời dưới dạng thẻ HTML <meta name="robots">, header HTTP X-Robots-Tag và khối _headers cho Cloudflare Pages.',
  },
  'image-compressor': {
    slug: 'nen-anh-online',
    name: 'Công Cụ Nén Ảnh',
    shortDescription:
      'Nén ảnh PNG, JPG và WebP ngay trên trình duyệt — chỉnh chất lượng, giới hạn chiều rộng tối đa và xem dung lượng tiết kiệm ngay.',
    keywords: [
      'image compressor',
      'cách nén ảnh',
      'nén ảnh online',
      'cách nén ảnh jpg',
      'cách giảm dung lượng ảnh',
      'giảm kích thước ảnh online',
      'nén ảnh png miễn phí',
      'cách làm ảnh nhẹ hơn',
      'webp compressor',
    ],
    seo: {
      title: 'Nén Ảnh Online: PNG, JPG, WebP Miễn Phí | UtilityFlow',
      description:
        'Nén ảnh ngay trên trình duyệt — chỉnh chất lượng, giới hạn chiều rộng, so sánh dung lượng trước và sau rồi tải về. Không tải lên, miễn phí, an toàn tuyệt đối.',
      primaryKeyword: 'image compressor',
      secondaryKeywords: [
        'cách nén ảnh',
        'nén ảnh online',
        'cách nén ảnh jpg',
        'cách giảm dung lượng ảnh',
      ],
      longTailKeywords: [
        'cách giảm dung lượng ảnh cho website không cần tải lên',
        'cách nén ảnh jpg thành webp',
        'cách làm ảnh nhỏ lại online miễn phí',
        'cách giảm dung lượng ảnh để gửi email',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Thu nhỏ ảnh PNG, JPG và WebP nặng để trang tải nhanh hơn và file đính kèm email nhẹ hơn, ngay trong trình duyệt — chỉnh chất lượng nén lossy, giới hạn chiều rộng và xem dung lượng tiết kiệm thực tế theo byte, không gửi file lên máy chủ.',
  },
  'image-resizer': {
    slug: 'doi-kich-thuoc-anh',
    name: 'Công Cụ Đổi Kích Thước Ảnh',
    shortDescription:
      'Đổi ảnh về đúng kích thước pixel — kèm mẫu sẵn cho mạng xã hội và OG, khóa tỉ lệ khung hình, cắt giữa và xuất PNG/JPG/WebP.',
    keywords: [
      'image resizer',
      'cách đổi kích thước ảnh',
      'đổi kích thước ảnh online',
      'cách thay đổi kích thước ảnh',
      'cách làm ảnh 1200x630',
      'cách cắt ảnh vuông',
      'đổi kích thước ảnh instagram',
      'image resizer online miễn phí',
      'cách thay đổi size ảnh',
    ],
    seo: {
      title: 'Đổi Kích Thước Ảnh: Đúng Số Pixel Chuẩn | UtilityFlow',
      description:
        'Đổi ảnh về đúng số pixel — chọn mẫu sẵn, khóa tỉ lệ khung hình, cắt giữa ảnh và xuất PNG, JPG hoặc WebP, riêng tư, an toàn và miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'image resizer',
      secondaryKeywords: [
        'cách đổi kích thước ảnh',
        'đổi kích thước ảnh online',
        'cách thay đổi kích thước ảnh',
        'cách làm ảnh 1200x630',
      ],
      longTailKeywords: [
        'cách đổi ảnh sang kích thước open graph 1200x630',
        'cách cắt ảnh vuông 1080x1080 cho instagram',
        'cách thay đổi chiều rộng chiều cao ảnh theo pixel',
        'cách đổi kích thước ảnh không bị méo',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Đổi đồ họa và ảnh chụp về đúng kích thước pixel — hoặc dùng mẫu có sẵn Open Graph (1200×630), YouTube HD (1280×720), ảnh vuông (1080×1080) và avatar (512×512) — với lấy mẫu lại chất lượng cao bằng Canvas và cắt phủ giữa ảnh để không bị méo.',
  },
  'image-format-converter': {
    slug: 'doi-dinh-dang-anh',
    name: 'Công Cụ Chuyển Đổi Định Dạng Ảnh (PNG / JPG / WebP)',
    shortDescription:
      'Chuyển đổi hàng loạt ảnh PNG, JPG, WebP, GIF và SVG sang định dạng khác — kèm chỉnh chất lượng và tô nền cho JPEG.',
    keywords: [
      'image format converter',
      'png to jpg',
      'jpg to png',
      'webp to jpg',
      'png to webp converter',
      'cách đổi định dạng ảnh',
      'webp to png',
      'jpg to webp converter',
      'chuyển đổi ảnh online miễn phí',
    ],
    seo: {
      title: 'Đổi Định Dạng Ảnh: PNG, JPG, WebP Miễn Phí | UtilityFlow',
      description:
        'Chuyển ảnh giữa PNG, JPG và WebP ngay lập tức — xử lý nhiều file cùng lúc, chỉnh chất lượng JPG và tô nền trong suốt, ngay trên trình duyệt, hoàn toàn miễn phí.',
      primaryKeyword: 'image format converter',
      secondaryKeywords: [
        'png to jpg',
        'jpg to png',
        'webp to jpg',
        'png to webp converter',
      ],
      longTailKeywords: [
        'cách chuyển nhiều ảnh sang webp cùng lúc',
        'cách chuyển ảnh webp thành png',
        'cách chuyển png trong suốt sang jpg kèm nền',
        'cách đổi định dạng png sang jpg online',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Chuyển đổi hàng loạt file PNG, JPG, WebP, GIF và SVG thành WebP gọn nhẹ cho web, JPG phổ biến hoặc PNG trong suốt không suy hao — hoàn toàn trong trình duyệt, kèm tùy chọn tô màu nền khi chuyển ảnh trong suốt sang JPEG.',
  },
  'image-rotate-flip': {
    slug: 'xoay-lat-anh',
    name: 'Công Cụ Xoay và Lật Ảnh',
    shortDescription:
      'Xoay ảnh 90°/180°/270°, lật ngang hoặc lật dọc và áp bộ lọc xám, độ sáng, độ tương phản trực tiếp.',
    keywords: [
      'cách xoay ảnh',
      'xoay ảnh online',
      'cách lật ảnh',
      'cách lật ngược ảnh',
      'cách tạo ảnh gương',
      'cách chuyển ảnh sang đen trắng',
      'cách tăng độ sáng ảnh',
      'xoay ảnh 90 độ',
      'cách làm thẳng ảnh',
    ],
    seo: {
      title: 'Xoay Ảnh Online: Xoay và Lật Ảnh Miễn Phí | UtilityFlow',
      description:
        'Xoay ảnh online 90, 180 hoặc 270 độ, lật ảnh ngang hoặc dọc, chỉnh độ sáng, độ tương phản và chuyển ảnh sang đen trắng — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'cách xoay ảnh',
      secondaryKeywords: [
        'xoay ảnh online',
        'cách lật ảnh',
        'cách lật ngược ảnh',
        'cách tạo ảnh gương',
      ],
      longTailKeywords: [
        'cách xoay ảnh nghiêng 90 độ cho thẳng online',
        'cách lật gương ảnh selfie không cần app',
        'cách chuyển ảnh sang đen trắng grayscale',
        'cách xoay ảnh scan cho đúng chiều',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Sửa hướng ảnh bị nghiêng, lật gương ảnh selfie theo chiều ngang hoặc dọc, chuyển ảnh sang đen trắng grayscale và chỉnh độ sáng, độ tương phản trực tiếp — bằng phép biến đổi Canvas 2D ngay trên máy bạn.',
  },
  'image-to-base64': {
    slug: 'chuyen-anh-sang-base64',
    name: 'Công Cụ Chuyển Ảnh sang Base64',
    shortDescription:
      'Chuyển ảnh PNG, JPG, WebP, SVG và ICO thành Data URI Base64, thẻ HTML <img> và quy tắc CSS — hoặc giải mã Base64 thành ảnh.',
    keywords: [
      'image to base64',
      'base64 image converter',
      'cách chuyển ảnh sang base64',
      'base64 to image',
      'data uri generator',
      'base64 encoder online',
      'base64 ảnh css',
      'png to base64',
      'giải mã base64 thành ảnh',
    ],
    seo: {
      title: 'Chuyển Ảnh sang Base64: Data URI Miễn Phí | UtilityFlow',
      description:
        'Chuyển icon và logo nhỏ thành Data URI Base64, thẻ img HTML hoặc nền CSS, hoặc xem chuỗi Base64 dưới dạng ảnh ngay lập tức — hoàn toàn miễn phí ngay lập tức.',
      primaryKeyword: 'image to base64',
      secondaryKeywords: [
        'base64 image converter',
        'cách chuyển ảnh sang base64',
        'base64 to image',
        'data uri generator',
      ],
      longTailKeywords: [
        'cách chuyển icon png thành data uri nền css',
        'cách xem chuỗi base64 dưới dạng ảnh',
        'cách chuyển logo nhỏ sang base64 cho email html',
        'ảnh nhị phân và base64 khác nhau thế nào về dung lượng',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Chuyển icon nhỏ, logo và đồ họa email thành URI data:image/...;base64,... tự chứa, thẻ HTML <img> sẵn sao chép và quy tắc CSS background-image — hoặc đổi chế độ để xem và tải chuỗi Base64 của ảnh thô.',
  },
  'color-contrast-checker': {
    slug: 'kiem-tra-do-tuong-phan-mau',
    name: 'Công Cụ Kiểm Tra Độ Tương Phản Màu',
    shortDescription:
      'Kiểm tra tỉ lệ tương phản màu theo chuẩn WCAG 2.1 AA/AAA, chuyển đổi HEX/RGB/HSL và trích bảng màu từ ảnh đã tải lên.',
    keywords: [
      'color contrast checker',
      'wcag contrast checker',
      'kiểm tra tỉ lệ tương phản màu',
      'màu sắc dễ tiếp cận',
      'hex to rgb converter',
      'trích xuất bảng màu từ ảnh',
      'contrast checker online',
      'cách kiểm tra tương phản màu chữ',
      'wcag aa contrast ratio',
    ],
    seo: {
      title: 'Kiểm Tra Độ Tương Phản Màu: Chuẩn WCAG AA/AAA | UtilityFlow',
      description:
        'Kiểm tra tỉ lệ tương phản WCAG 2.1 AA và AAA của chữ và nền, chuyển đổi HEX, RGB, HSL và trích bảng màu từ ảnh — miễn phí, ngay trên trình duyệt và chính xác.',
      primaryKeyword: 'color contrast checker',
      secondaryKeywords: [
        'wcag contrast checker',
        'kiểm tra tỉ lệ tương phản màu',
        'màu sắc dễ tiếp cận',
        'hex to rgb converter',
      ],
      longTailKeywords: [
        'cách kiểm tra tỉ lệ tương phản wcag 2.1 online',
        'chữ và nền cần tương phản bao nhiêu là đủ',
        'cách trích bảng màu chính từ ảnh',
        'cách kiểm tra tương phản màu giao diện dark mode',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Kiểm tra cặp màu giao diện theo quy tắc chính thức của WCAG 2.1 (AA 4.5:1, AA chữ lớn 3.0:1, AAA 7.0:1), chuyển đổi đồng bộ các giá trị HEX/RGB/HSL và tải ảnh chụp màn hình hoặc logo lên để lấy màu HEX chính đưa thẳng vào ô chữ hoặc ô nền.',
  },
  'qr-code-scanner': {
    slug: 'quet-ma-qr',
    name: 'Công Cụ Quét Mã QR',
    shortDescription:
      'Đọc và giải mã mã QR từ ảnh đã tải lên hoặc camera của thiết bị — ngay trên trình duyệt, riêng tư; kèm trình tạo QR vCard.',
    keywords: [
      'qr code scanner',
      'cách quét mã qr',
      'quét mã qr online',
      'cách quét qr code',
      'quét mã qr từ ảnh',
      'qr code reader online',
      'cách giải mã qr code',
      'quét mã qr bằng laptop',
      'vcard qr code generator',
    ],
    seo: {
      title: 'Quét Mã QR Online: Trình Đọc QR Miễn Phí | UtilityFlow',
      description:
        'Quét và giải mã mã QR từ ảnh chụp màn hình, ảnh hoặc webcam — ngay trên trình duyệt, riêng tư. Kèm tạo mã QR danh thiếp vCard PNG và SVG, hoàn toàn miễn phí.',
      primaryKeyword: 'qr code scanner',
      secondaryKeywords: [
        'cách quét mã qr',
        'quét mã qr online',
        'cách quét qr code',
        'quét mã qr từ ảnh',
      ],
      longTailKeywords: [
        'cách quét mã qr từ ảnh chụp màn hình online',
        'cách quét mã qr bằng webcam laptop không cần app',
        'cách giải mã qr code từ ảnh png jpg',
        'cách tạo mã qr danh thiếp vcard miễn phí',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đọc nội dung mã QR từ ảnh chụp màn hình, ảnh hoặc camera trực tiếp ngay trong trình duyệt — tự nhận dạng loại dữ liệu (URL, Wi-Fi, vCard, văn bản) — và tạo mã QR danh thiếp vCard để xuất file PNG và SVG sắc nét.',
  },
  'password-generator': {
    slug: 'tao-mat-khau',
    name: 'Trình Tạo Mật Khẩu An Toàn',
    shortDescription:
      'Tạo mật khẩu ngẫu nhiên không thiên lệch bằng crypto.getRandomValues và cụm mật khẩu Diceware dễ nhớ, kèm entropy chính xác.',
    keywords: [
      'password generator',
      'cách tạo mật khẩu mạnh',
      'trình tạo mật khẩu an toàn',
      'tạo mật khẩu ngẫu nhiên',
      'cách đặt mật khẩu',
      'passphrase generator',
      'tạo mật khẩu mạnh online',
      'cách tạo mật khẩu an toàn',
      'kiểm tra entropy mật khẩu',
    ],
    seo: {
      title: 'Trình Tạo Mật Khẩu: Mạnh và An Toàn Miễn Phí | UtilityFlow',
      description:
        'Tạo mật khẩu ngẫu nhiên mạnh và cụm mật khẩu Diceware dễ nhớ ngay trên trình duyệt. Dùng Web Crypto và điểm entropy chính xác — không lưu gì cả, miễn phí.',
      primaryKeyword: 'password generator',
      secondaryKeywords: [
        'cách tạo mật khẩu mạnh',
        'trình tạo mật khẩu an toàn',
        'tạo mật khẩu ngẫu nhiên',
        'cách đặt mật khẩu',
      ],
      longTailKeywords: [
        'cách tạo mật khẩu an toàn bằng crypto getrandomvalues',
        'cách tạo cụm mật khẩu diceware 5 từ',
        'mật khẩu 18 ký tự có bao nhiêu entropy',
        'cách tạo mật khẩu không chứa ký tự dễ nhầm',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Tạo mật khẩu entropy cao và cụm mật khẩu nhiều từ dễ nhớ hoàn toàn ngay trên máy bạn, dùng CSPRNG phần cứng của trình duyệt (window.crypto.getRandomValues) — lấy mẫu loại bỏ để tránh thiên lệch modulo và xáo trộn Fisher-Yates để tránh vị trí ký tự đoán trước được.',
  },
  'file-hash-verifier': {
    slug: 'kiem-tra-hash-file',
    name: 'Công Cụ Kiểm Tra Hash File',
    shortDescription:
      'Tính hash SHA-256, SHA-512, SHA-384 và SHA-1 của bất kỳ file nào ngay trên máy bằng Web Crypto và đối chiếu với hash đã công bố.',
    keywords: [
      'file hash checker',
      'sha256 checker online',
      'cách kiểm tra hash file',
      'cách xác minh sha256',
      'hash verifier online',
      'cách kiểm tra toàn vẹn file',
      'sha256sum check',
      'cách xác minh file đã tải về',
      'sha512 hash generator',
    ],
    seo: {
      title: 'Kiểm Tra Hash File: Xác Minh SHA-256 | UtilityFlow',
      description:
        'Tính hash SHA-256, SHA-512, SHA-384 và SHA-1 của bất kỳ file nào ngay trên trình duyệt và đối chiếu với hash đã công bố — không tải lên, hoàn toàn miễn phí.',
      primaryKeyword: 'file hash checker',
      secondaryKeywords: [
        'sha256 checker online',
        'cách kiểm tra hash file',
        'cách xác minh sha256',
        'hash verifier online',
      ],
      longTailKeywords: [
        'cách kiểm tra hash sha256 của file cài đặt đã tải về',
        'cách tính sha256 của file không cần terminal',
        'cách xác minh sha256 của file iso trên trình duyệt',
        'cách đối chiếu hash file với checksum mong đợi',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Kiểm tra tính toàn vẹn và xác thực của trình cài đặt phần mềm, file nén, tập dữ liệu và tài liệu ngay trên máy — tính hash SHA-256, SHA-512, SHA-384 và SHA-1 bằng Web Crypto subtle.digest tăng tốc phần cứng và đối chiếu ngay với checksum mong đợi.',
  },
  'favicon-generator': {
    slug: 'tao-favicon',
    name: 'Trình Tạo Favicon',
    shortDescription:
      'Tạo nhiều icon PNG kích thước khác nhau (16×16 đến 512×512) và file favicon.ico đa khung thật từ huy hiệu monogram hoặc logo đã tải lên.',
    keywords: [
      'favicon generator',
      'cách tạo favicon',
      'cách tạo favicon.ico',
      'tạo favicon cho website',
      'favicon maker online miễn phí',
      'png to favicon',
      'apple touch icon generator',
      'pwa icon generator',
      'cách làm favicon',
    ],
    seo: {
      title: 'Trình Tạo Favicon: Icon .ico và PNG Miễn Phí | UtilityFlow',
      description:
        'Tạo file favicon.ico đa khung và icon PNG 16–512px, Apple Touch, PWA từ logo hoặc monogram của bạn — miễn phí, ngay trên trình duyệt, tải về ngay lập tức.',
      primaryKeyword: 'favicon generator',
      secondaryKeywords: [
        'cách tạo favicon',
        'cách tạo favicon.ico',
        'tạo favicon cho website',
        'favicon maker online miễn phí',
      ],
      longTailKeywords: [
        'cách tạo favicon ico cho website miễn phí',
        'cách tạo favicon 16x16 32x32 48x48 từ logo',
        'cách tạo icon pwa 192x192 và 512x512',
        'cách tạo favicon từ chữ cái đầu online',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Thiết kế icon monogram gọn gàng trong vài giây hoặc tải logo thương hiệu của bạn lên — nhận icon PNG sắc nét 16×16, 32×32, 48×48, Apple Touch 180×180 và PWA 192×192 / 512×512, kèm file favicon.ico đa ảnh đúng chuẩn và mã HTML <link> sẵn dán.',
  },
};
