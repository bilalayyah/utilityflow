import type { ToolLocaleOverride } from '../../types';

/**
 * Vietnamese overrides — Batch 4: Social Media tools (10) + PDF tools (10).
 * Source: src/registry/batches/batch4SocialTools.ts,
 *         src/registry/batches/batch5PdfTools.ts.
 * Original Vietnamese copy, SEO-optimized for Vietnamese search intent.
 * Slugs are ASCII Latin (diacritics stripped), unique, lowercase,
 * hyphenated, and must not collide with English slugs or reserved paths.
 */
export const VI_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'tao-ma-qr',
    name: 'Trình Tạo Mã QR',
    shortDescription:
      'Tạo mã QR quét được cho link website, văn bản, mật khẩu Wi-Fi, email hoặc số điện thoại rồi tải xuống dạng PNG hoặc SVG.',
    keywords: [
      'tạo mã qr',
      'qr code generator',
      'tạo qr code miễn phí',
      'tạo mã qr wifi',
      'tải mã qr png',
      'cách tạo mã qr',
      'tạo qr code online',
      'mã qr cho website',
      'tạo mã qr trên điện thoại',
    ],
    seo: {
      title: 'Trình Tạo Mã QR: Tạo mã QR miễn phí, tải PNG | UtilityFlow',
      description:
        'Tạo mã QR miễn phí cho website, Wi-Fi, văn bản, email hoặc số điện thoại ngay trên trình duyệt, không cần đăng ký, không hết hạn, tải PNG và SVG nhanh chóng.',
      primaryKeyword: 'tạo mã qr',
      secondaryKeywords: [
        'qr code generator',
        'tạo qr code miễn phí',
        'tạo mã qr wifi',
        'tải mã qr png',
      ],
      longTailKeywords: [
        'cách tạo mã qr trên điện thoại miễn phí',
        'tạo mã qr cho mật khẩu wifi',
        'tải mã qr png và svg miễn phí',
        'tạo mã qr cho link website',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Link website, mật khẩu Wi-Fi, văn bản, email hay số điện thoại — biến mọi thông tin thành mã QR rõ nét, quét được ngay. Mọi thứ xử lý ngay trên trình duyệt của bạn, không hết hạn, không chuyển hướng theo dõi, và bạn tải mã QR xuống dạng PNG hoặc SVG chỉ trong một chạm.',
  },
  'utm-link-builder': {
    slug: 'tao-link-utm',
    name: 'Trình Tạo Link UTM',
    shortDescription:
      'Tạo link theo dõi chiến dịch gọn gàng cho Google Analytics với utm_source, utm_medium, utm_campaign, utm_term và utm_content.',
    keywords: [
      'tạo link utm',
      'utm link builder',
      'utm generator',
      'utm là gì',
      'tạo link utm cho google analytics',
      'link utm instagram',
      'tạo utm online',
      'campaign url builder',
      'cách tạo link utm',
    ],
    seo: {
      title: 'Trình Tạo Link UTM: Link theo dõi chiến dịch | UtilityFlow',
      description:
        'Tạo link UTM chuẩn cho mạng xã hội, email và quảng cáo để theo dõi chiến dịch trên Google Analytics. Có mẫu sẵn, chuẩn hóa chữ thường, miễn phí, dùng ngay.',
      primaryKeyword: 'tạo link utm',
      secondaryKeywords: [
        'utm link builder',
        'utm generator',
        'tạo link utm cho google analytics',
        'link utm instagram',
      ],
      longTailKeywords: [
        'cách tạo link utm cho google analytics',
        'tạo link utm cho bio instagram',
        'tạo link utm theo dõi chiến dịch email',
        'cách tạo link utm với đầy đủ tham số',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Tạo link theo dõi UTM gọn gàng, đúng chuẩn cho bio mạng xã hội, email newsletter và quảng cáo trả phí. Các tham số truy vấn cũ và phần # trong link được giữ nguyên, còn mẫu sẵn giúp bạn luôn có đúng định dạng mỗi lần tạo.',
  },
  'social-character-limit-checker': {
    slug: 'gioi-han-ky-tu-mang-xa-hoi',
    name: 'Kiểm Tra Giới Hạn Ký Tự Mạng Xã Hội',
    shortDescription:
      'Kiểm tra độ dài bài đăng trên X, Instagram, LinkedIn, TikTok, Threads, Bluesky và YouTube, xem trước phần bị ẩn trên bảng tin.',
    keywords: [
      'giới hạn ký tự instagram',
      'giới hạn ký tự twitter',
      'giới hạn ký tự bio instagram',
      'giới hạn ký tự linkedin',
      'giới hạn caption tiktok',
      'đếm ký tự x',
      'social media character counter',
      'giới hạn ký tự threads',
      'giới hạn ký tự youtube',
    ],
    seo: {
      title: 'Kiểm Tra Giới Hạn Ký Tự: Instagram, X, TikTok | UtilityFlow',
      description:
        'Kiểm tra giới hạn ký tự trên X, Instagram, LinkedIn, TikTok, Threads, Bluesky và YouTube. Xem trước phần bị ẩn, đếm emoji và link chính xác, miễn phí.',
      primaryKeyword: 'giới hạn ký tự instagram',
      secondaryKeywords: [
        'giới hạn ký tự twitter',
        'giới hạn ký tự linkedin',
        'social media character counter',
        'giới hạn ký tự bio instagram',
      ],
      longTailKeywords: [
        'bio instagram viết được bao nhiêu ký tự',
        'bài đăng x twitter giới hạn bao nhiêu ký tự',
        'bài đăng linkedin giới hạn bao nhiêu ký tự',
        'caption tiktok giới hạn bao nhiêu ký tự',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Viết một lần rồi xem ngay bài đăng của bạn có vừa giới hạn của X, Instagram, LinkedIn, TikTok, Threads, Bluesky và YouTube hay không — kèm cách tính link t.co 23 ký tự của X, cách đếm emoji và bản xem trước phần bị ẩn sau nút "xem thêm" trên bảng tin.',
  },
  'unicode-fancy-text-formatter': {
    slug: 'tao-chu-kieu-dep',
    name: 'Trình Tạo Chữ Đẹp',
    shortDescription:
      'Chuyển chữ thường thành chữ in đậm, in nghiêng, monospace, chữ viết tay, small caps và fullwidth Unicode để dùng cho tiểu sử.',
    keywords: [
      'tạo chữ đẹp',
      'stylish text generator',
      'font chữ đẹp instagram',
      'tạo chữ in đậm',
      'fancy text generator',
      'tạo tên đẹp',
      'font chữ bio instagram',
      'chữ unicode in đậm',
      'chữ đẹp copy paste',
    ],
    seo: {
      title: 'Trình Tạo Chữ Đẹp: Font Đẹp Cho Bio Instagram | UtilityFlow',
      description:
        'Chuyển chữ thường thành chữ in đậm, in nghiêng, monospace, chữ viết tay và small caps Unicode. Copy paste vào bio Instagram, WhatsApp, Facebook, miễn phí.',
      primaryKeyword: 'tạo chữ đẹp',
      secondaryKeywords: [
        'stylish text generator',
        'font chữ đẹp instagram',
        'tạo chữ in đậm',
        'fancy text generator',
      ],
      longTailKeywords: [
        'cách tạo font chữ đẹp cho bio instagram',
        'chữ đẹp cho bio whatsapp copy paste',
        'tạo chữ unicode in đậm in nghiêng online',
        'tạo tên đẹp với font chữ độc lạ miễn phí',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Biến chữ thường thành các kiểu Unicode in đậm, in nghiêng, monospace, chữ viết tay, small caps và fullwidth — những kiểu chữ vẫn hiển thị đúng trong bio dạng văn bản thuần, và bạn chỉ cần copy rồi dán vào Instagram, WhatsApp hay LinkedIn là xong.',
  },
  'bio-line-break-formatter': {
    slug: 'xuong-dong-bio-instagram',
    name: 'Định Dạng Xuống Dòng Cho Bio Instagram',
    shortDescription:
      'Giữ nguyên dòng trống giữa các đoạn trong bio và caption Instagram — xóa khoảng trắng thừa và thêm ký tự xuống dòng vô hình.',
    keywords: [
      'xuống dòng bio instagram',
      'cách xuống dòng trong bio instagram',
      'xuống dòng caption instagram',
      'tạo khoảng cách bio instagram',
      'ký tự vô hình instagram',
      'cách xuống dòng trong caption',
      'bio instagram bị mất dòng',
      'định dạng bio instagram',
      'xuống dòng trong bio tiktok',
    ],
    seo: {
      title: 'Xuống Dòng Bio Instagram: Giữ Đoạn Văn Gọn | UtilityFlow',
      description:
        'Giữ nguyên dòng trống trong bio và caption Instagram. Xóa khoảng trắng thừa ở cuối dòng, thêm ký tự vô hình để đoạn văn luôn gọn gàng, miễn phí, dùng ngay.',
      primaryKeyword: 'xuống dòng bio instagram',
      secondaryKeywords: [
        'cách xuống dòng trong bio instagram',
        'xuống dòng caption instagram',
        'tạo khoảng cách bio instagram',
        'ký tự vô hình instagram',
      ],
      longTailKeywords: [
        'cách xuống dòng trong bio instagram không bị mất',
        'cách tạo khoảng cách trong caption instagram',
        'làm sao tạo dòng trống trong bio instagram',
        'công cụ xuống dòng bio instagram online miễn phí',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Các ứng dụng mạng xã hội thường tự xóa dòng trống trong bio và caption của bạn. Công cụ này xóa khoảng trắng thừa ẩn ở cuối dòng và, nếu bạn muốn, chèn thêm ký tự khoảng trắng Braille vô hình để đoạn văn của bạn luôn giữ đúng định dạng gọn gàng.',
  },
  'youtube-timestamp-generator': {
    slug: 'tao-chuong-video-youtube',
    name: 'Trình Tạo Timestamp & Chương YouTube',
    shortDescription:
      'Tạo chương video YouTube đúng chuẩn và link nhảy ?t= có thể bấm được, đã kiểm tra theo quy tắc của YouTube.',
    keywords: [
      'tạo timestamp youtube',
      'cách tạo chương youtube',
      'tạo chapter youtube',
      'link timestamp youtube',
      'timestamp video youtube',
      'youtube timestamp generator',
      'cách chèn timestamp youtube',
      'tạo mục lục video youtube',
      'định dạng chương youtube',
    ],
    seo: {
      title: 'Trình Tạo Timestamp YouTube: Tạo Chương Chuẩn | UtilityFlow',
      description:
        'Tạo chương video YouTube bắt đầu từ 00:00, kiểm tra quy tắc 10 giây, ít nhất 3 chương và tạo link ?t= để chia sẻ. Miễn phí, chạy ngay trên trình duyệt.',
      primaryKeyword: 'tạo timestamp youtube',
      secondaryKeywords: [
        'cách tạo chương youtube',
        'tạo chapter youtube',
        'link timestamp youtube',
        'youtube timestamp generator',
      ],
      longTailKeywords: [
        'cách tạo chương cho video youtube',
        'cách chèn timestamp vào mô tả youtube',
        'cách tạo link timestamp youtube để chia sẻ',
        'chương youtube bắt đầu từ 00:00 như thế nào',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tạo khối chương gọn gàng, đúng thứ tự cho phần mô tả video YouTube của bạn — tự động kiểm tra theo quy tắc của YouTube (bắt đầu từ 00:00, ít nhất 3 chương, cách nhau tối thiểu 10 giây) — và lấy link nhảy ?t= có thể bấm được cho bình luận, newsletter hay ghi chú chương trình.',
  },
  'social-thumbnail-previewer': {
    slug: 'xem-truoc-thumbnail-youtube',
    name: 'Xem Trước Thumbnail YouTube',
    shortDescription:
      'Xem trước thumbnail và tiêu đề trên giao diện bảng tin máy tính và thanh bên trước khi đăng, kèm kiểm tra 16:9 và 2 MB.',
    keywords: [
      'xem trước thumbnail youtube',
      'kiểm tra thumbnail youtube',
      'kích thước thumbnail youtube',
      'thumbnail preview',
      'cách kiểm tra thumbnail youtube',
      'xem trước tiêu đề youtube',
      'test thumbnail youtube',
      'thumbnail 1280x720',
      'xem thumbnail trước khi đăng',
    ],
    seo: {
      title: 'Xem Trước Thumbnail YouTube: Trước Khi Đăng | UtilityFlow',
      description:
        'Xem trước thumbnail và tiêu đề trên bảng tin YouTube sáng và tối trước khi đăng. Kiểm tra 16:9, 1280×720 và 2 MB ngay trên trình duyệt, không tải file lên.',
      primaryKeyword: 'xem trước thumbnail youtube',
      secondaryKeywords: [
        'kiểm tra thumbnail youtube',
        'kích thước thumbnail youtube',
        'thumbnail preview',
        'xem trước tiêu đề youtube',
      ],
      longTailKeywords: [
        'cách kiểm tra thumbnail youtube trước khi đăng',
        'xem trước thumbnail youtube ở chế độ tối',
        'kiểm tra kích thước thumbnail youtube 1280x720 online',
        'xem trước tiêu đề youtube dài bao nhiêu thì bị cắt',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Thử thumbnail và tiêu đề video chưa đăng của bạn trên giao diện bảng tin chính và thanh bên giống thật — cả chế độ sáng lẫn tối, kèm kiểm tra kích thước HD 1280×720, tỉ lệ 16:9, giới hạn 2 MB và nhãn thời lượng ở góc dưới bên phải, hoàn toàn ngay trên trình duyệt.',
  },
  'hashtag-formatter': {
    slug: 'tao-hashtag',
    name: 'Trình Tạo Hashtag',
    shortDescription:
      'Chuyển từ khóa lộn xộn thành hashtag gọn gàng, xóa trùng lặp, định dạng #CamelCase và kiểm tra giới hạn của từng nền tảng.',
    keywords: [
      'tạo hashtag',
      'hashtag generator',
      'cách tạo hashtag instagram',
      'hashtag instagram hay',
      'tạo hashtag cho reels',
      'hashtag instagram copy',
      'xóa hashtag trùng lặp',
      'hashtag camelcase',
      'giới hạn hashtag instagram',
    ],
    seo: {
      title: 'Trình Tạo Hashtag: Hashtag Hay Cho Reels | UtilityFlow',
      description:
        'Chuyển danh sách từ khóa thành hashtag #CamelCase gọn gàng, không trùng lặp. Kiểm tra giới hạn 30 hashtag của Instagram, copy dùng ngay, hoàn toàn miễn phí.',
      primaryKeyword: 'tạo hashtag',
      secondaryKeywords: [
        'hashtag generator',
        'cách tạo hashtag instagram',
        'hashtag instagram hay',
        'tạo hashtag cho reels',
      ],
      longTailKeywords: [
        'cách tạo hashtag hay cho reels instagram',
        'cách xóa hashtag trùng lặp trong danh sách',
        'cách tạo hashtag camelcase',
        'instagram dùng được tối đa bao nhiêu hashtag',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Biến từ khóa cách nhau bằng dấu phẩy hay danh sách tag lộn xộn thành hashtag gọn gàng, không trùng lặp, không dấu câu sai — dạng #CamelCase dễ đọc cho trình đọc màn hình hoặc chữ thường, sẵn sàng dùng theo từng dòng, theo chiều dọc hay khối ngăn cách bằng dấu chấm.',
  },
  'caption-template-builder': {
    slug: 'tao-caption-instagram',
    name: 'Trình Tạo Caption Instagram',
    shortDescription:
      'Tạo caption mạng xã hội có cấu trúc rõ ràng theo khung PAS, hướng dẫn, Trước–Sau–Cầu Nối và checklist — không dùng AI.',
    keywords: [
      'tạo caption instagram',
      'cách viết caption hay',
      'caption instagram hay',
      'mẫu caption instagram',
      'ý tưởng caption mạng xã hội',
      'mẫu bài đăng linkedin',
      'viết caption thu hút',
      'câu hook cho reels',
      'khung viết caption pas',
    ],
    seo: {
      title: 'Trình Tạo Caption Instagram: Mẫu Caption Hay | UtilityFlow',
      description:
        'Tạo caption mạng xã hội theo khung PAS, hướng dẫn, Trước–Sau–Cầu Nối và checklist. Chỉ dùng câu chữ của bạn, không có văn bản AI, ngay trên trình duyệt.',
      primaryKeyword: 'tạo caption instagram',
      secondaryKeywords: [
        'cách viết caption hay',
        'caption instagram hay',
        'mẫu caption instagram',
        'ý tưởng caption mạng xã hội',
      ],
      longTailKeywords: [
        'cách viết caption instagram hay bằng tiếng việt',
        'cách viết câu hook cho reels',
        'mẫu cấu trúc bài đăng linkedin miễn phí',
        'cách viết caption theo khung pas',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Viết bài đăng mạng xã hội gọn gàng, dễ đọc nhanh hơn nhờ các khung viết sẵn — Vấn đề–Khuấy động–Giải pháp (PAS), hướng dẫn từng bước, Trước–Sau–Cầu Nối, checklist kiểm tra và Huyền thoại vs. Sự thật — hoàn toàn từ câu chữ của chính bạn, không có văn bản do AI tạo ra.',
  },
  'social-handle-formatter': {
    slug: 'tao-username',
    name: 'Trình Tạo Username Mạng Xã Hội',
    shortDescription:
      'Tạo các biến thể username phù hợp cho từng nền tảng từ tên thương hiệu, kiểm tra quy tắc và mở link hồ sơ để xem còn trống không.',
    keywords: [
      'tạo username',
      'username generator',
      'tên instagram đẹp',
      'đặt tên instagram hay',
      'kiểm tra username còn trống',
      'tên người dùng đẹp',
      'tạo username tiktok',
      'tên instagram độc lạ',
      'username cho thương hiệu',
    ],
    seo: {
      title: 'Trình Tạo Username: Tên Đẹp Cho Instagram | UtilityFlow',
      description:
        'Tạo username từ tên thương hiệu cho X, Instagram, TikTok, YouTube, Threads và GitHub, kiểm tra quy tắc từng nền tảng và xem tên còn trống không, miễn phí.',
      primaryKeyword: 'tạo username',
      secondaryKeywords: [
        'username generator',
        'tên instagram đẹp',
        'đặt tên instagram hay',
        'kiểm tra username còn trống',
      ],
      longTailKeywords: [
        'cách tạo username độc lạ cho instagram',
        'cách tạo username từ tên thương hiệu',
        'kiểm tra username còn trống hay không',
        'cách đặt cùng một username cho x instagram tiktok',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Biến bất kỳ tên thương hiệu, dự án hay tên nhà sáng tạo nào thành các gợi ý username gọn gàng cho sáu nền tảng lớn — kiểm tra từng gợi ý theo quy tắc độ dài và ký tự cho phép, rồi mở thẳng link hồ sơ để xem tên đó còn trống hay đã có người dùng.',
  },
  'merge-pdf': {
    slug: 'gop-file-pdf',
    name: 'Gộp File PDF',
    shortDescription:
      'Gộp nhiều file PDF thành một file duy nhất theo thứ tự bạn chọn — xử lý ngay trên trình duyệt, không tải lên máy chủ.',
    keywords: [
      'gộp file pdf',
      'merge pdf',
      'cách gộp file pdf',
      'nối file pdf online',
      'gộp pdf miễn phí',
      'gộp nhiều pdf thành 1 file',
      'nối pdf thành 1 file',
      'công cụ gộp pdf',
      'gộp pdf online miễn phí',
    ],
    seo: {
      title: 'Gộp File PDF: Nối Nhiều PDF Thành 1 File | UtilityFlow',
      description:
        'Gộp nhiều file PDF thành một tài liệu duy nhất theo thứ tự bạn chọn. Mọi thứ xử lý nhanh chóng trên trình duyệt, không tải lên, không giới hạn, miễn phí.',
      primaryKeyword: 'gộp file pdf',
      secondaryKeywords: [
        'merge pdf',
        'cách gộp file pdf',
        'nối file pdf online',
        'gộp pdf miễn phí',
      ],
      longTailKeywords: [
        'cách gộp file pdf không cần tải lên',
        'gộp file pdf bảo mật miễn phí',
        'cách đổi thứ tự khi gộp pdf',
        'cách gộp file pdf trên điện thoại online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Gộp hai hay nhiều file PDF thành một tài liệu gọn gàng ngay trong bộ nhớ trình duyệt. Xem số trang của từng file, kéo lên xuống để đổi thứ tự, đặt tên file đầu ra rồi tải xuống ngay — file của bạn không bao giờ rời khỏi máy.',
  },
  'split-pdf': {
    slug: 'tach-file-pdf',
    name: 'Tách File PDF – Cắt Trang PDF',
    shortDescription:
      'Trích xuất khoảng trang, trang chẵn/lẻ hoặc tách toàn bộ file PDF thành từng trang riêng — xử lý ngay trên máy của bạn.',
    keywords: [
      'tách file pdf',
      'split pdf',
      'cách tách trang pdf',
      'cắt file pdf online',
      'tách trang pdf miễn phí',
      'trích xuất trang pdf',
      'tách pdf thành từng trang',
      'cách cắt file pdf',
      'pdf splitter online',
    ],
    seo: {
      title: 'Tách File PDF: Cắt & Trích Xuất Trang PDF | UtilityFlow',
      description:
        'Trích xuất khoảng trang PDF như 1-3, 5, tách trang chẵn/lẻ hoặc tách thành từng file một trang. Xử lý trên trình duyệt, không tải lên, dùng ngay, miễn phí.',
      primaryKeyword: 'tách file pdf',
      secondaryKeywords: [
        'split pdf',
        'cách tách trang pdf',
        'cắt file pdf online',
        'trích xuất trang pdf',
      ],
      longTailKeywords: [
        'cách tách vài trang trong file pdf',
        'cách tách trang chẵn lẻ của file pdf',
        'cách tách pdf thành từng trang riêng',
        'tách pdf và chỉ tải các trang đã chọn',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Trích xuất đúng khoảng trang bạn cần (1-3, 5, 8-10), tách riêng trang chẵn hoặc lẻ để ghép lại tài liệu in hai mặt, hoặc tách file PDF ngắn thành từng file một trang — tất cả xử lý hoàn toàn trong bộ nhớ trình duyệt của bạn.',
  },
  'images-to-pdf': {
    slug: 'chuyen-jpg-sang-pdf',
    name: 'Chuyển Ảnh Sang PDF',
    shortDescription:
      'Chuyển ảnh PNG, JPG và WebP thành một file PDF duy nhất khổ A4, US Letter hoặc đúng kích thước ảnh — ngay trên trình duyệt.',
    keywords: [
      'chuyển ảnh sang pdf',
      'jpg to pdf',
      'chuyển jpg sang pdf',
      'png to pdf',
      'ảnh sang pdf',
      'chuyển nhiều ảnh thành pdf',
      'photo to pdf',
      'chụp màn hình sang pdf',
      'tạo pdf từ ảnh',
    ],
    seo: {
      title: 'Chuyển Ảnh Sang PDF: JPG, PNG Sang PDF | UtilityFlow',
      description:
        'Chuyển ảnh JPG, PNG và WebP thành một file PDF nhiều trang gọn gàng. Chọn khổ A4, US Letter hoặc đúng kích thước ảnh, không tải lên, miễn phí, dùng ngay.',
      primaryKeyword: 'chuyển ảnh sang pdf',
      secondaryKeywords: [
        'jpg to pdf',
        'chuyển jpg sang pdf',
        'png to pdf',
        'ảnh sang pdf',
      ],
      longTailKeywords: [
        'cách chuyển ảnh trên điện thoại sang pdf miễn phí',
        'cách gộp nhiều ảnh thành một file pdf',
        'cách chuyển ảnh chụp màn hình sang pdf',
        'chuyển ảnh jpg png webp sang pdf khổ a4',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Gộp ảnh scan, hóa đơn hay ảnh chụp màn hình — JPG, PNG và WebP — thành một file PDF nhiều trang gọn gàng. Xem ảnh để đổi thứ tự, chọn khổ A4 dọc, US Letter hoặc đúng kích thước ảnh, chỉnh lề rồi tạo PDF ngay trên trình duyệt.',
  },
  'pdf-to-images': {
    slug: 'chuyen-pdf-sang-jpg',
    name: 'Chuyển PDF Sang Ảnh (PNG / JPG)',
    shortDescription:
      'Chuyển các trang PDF thành ảnh PNG hoặc JPG tải xuống được, độ phân giải 1.0× đến 2.0× — dùng PDF.js, hoàn toàn trên máy.',
    keywords: [
      'chuyển pdf sang jpg',
      'pdf to jpg',
      'chuyển pdf sang png',
      'pdf to png',
      'cách chuyển pdf sang ảnh',
      'chuyển trang pdf thành ảnh',
      'tải ảnh từ pdf',
      'pdf sang ảnh online',
      'đổi pdf sang jpg',
    ],
    seo: {
      title: 'Chuyển PDF Sang JPG: Đổi Trang PDF Thành Ảnh | UtilityFlow',
      description:
        'Chuyển trang PDF thành ảnh PNG sắc nét hoặc JPG nhẹ, độ phân giải đến 2×. Chọn đúng trang cần lấy, xem trước rồi tải xuống, hoàn toàn miễn phí, dùng ngay.',
      primaryKeyword: 'chuyển pdf sang jpg',
      secondaryKeywords: [
        'pdf to jpg',
        'chuyển pdf sang png',
        'pdf to png',
        'cách chuyển pdf sang ảnh',
      ],
      longTailKeywords: [
        'cách chuyển trang pdf sang ảnh png chất lượng cao',
        'cách chuyển slide pdf thành ảnh',
        'cách chuyển một trang pdf sang jpg',
        'chuyển pdf sang ảnh không cần tải lên',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Dùng công cụ PDF.js của Mozilla để chuyển trang PDF thành ảnh PNG sắc nét hoặc JPG nhẹ, ngay trên trình duyệt của bạn. Chọn khoảng trang, chỉnh tỉ lệ (1.0×–2.0×) rồi xem trước và chỉ tải đúng ảnh bạn cần.',
  },
  'pdf-page-rotator': {
    slug: 'xoay-trang-pdf',
    name: 'Xoay Trang PDF',
    shortDescription:
      'Xoay vĩnh viễn các trang PDF bị lệch hoặc ngược 90°, 180° hoặc 270° — toàn bộ, trang chẵn/lẻ hoặc trang chọn riêng, không giảm chất lượng.',
    keywords: [
      'xoay file pdf',
      'xoay trang pdf',
      'cách xoay pdf',
      'rotate pdf online',
      'pdf bị ngược xoay lại',
      'xoay pdf 90 độ',
      'sửa pdf bị lệch',
      'xoay trang pdf bị ngược',
      'công cụ xoay pdf',
    ],
    seo: {
      title: 'Xoay Trang PDF: Sửa Trang PDF Bị Lệch | UtilityFlow',
      description:
        'Xoay vĩnh viễn trang PDF bị lệch hoặc ngược 90°, 180° hoặc 270°. Chọn toàn bộ, trang chẵn/lẻ hoặc khoảng trang, không tải lên máy chủ, miễn phí, dùng ngay.',
      primaryKeyword: 'xoay file pdf',
      secondaryKeywords: [
        'xoay trang pdf',
        'cách xoay pdf',
        'rotate pdf online',
        'pdf bị ngược xoay lại',
      ],
      longTailKeywords: [
        'cách xoay file pdf scan bị ngược',
        'cách xoay riêng trang 2 và 4 của file pdf',
        'xoay trang pdf 90 độ rồi lưu lại',
        'công cụ sửa hướng trang pdf online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sửa vĩnh viễn các trang PDF có bảng bị lệch hay bản scan bị ngược ngay trong dữ liệu của trang. Xoay 90° sang phải, 90° sang trái hay 180° — áp dụng cho toàn bộ trang, trang chẵn/lẻ hay đúng khoảng trang bạn chọn, không cần mã hóa lại.',
  },
  'reorder-delete-pdf-pages': {
    slug: 'sap-xep-xoa-trang-pdf',
    name: 'Sắp Xếp & Xóa Trang PDF',
    shortDescription:
      'Xem thumbnail từng trang PDF rồi di chuyển lên xuống, nhân đôi trang hoặc xóa trang thừa — mọi thứ ngay trên trình duyệt.',
    keywords: [
      'sắp xếp trang pdf',
      'xóa trang pdf',
      'cách xóa trang trong pdf',
      'đổi thứ tự trang pdf',
      'xóa trang trắng pdf',
      'nhân đôi trang pdf',
      'sắp xếp lại file pdf',
      'di chuyển trang pdf',
      'chỉnh sửa thứ tự trang pdf',
    ],
    seo: {
      title: 'Sắp Xếp Trang PDF: Đổi Thứ Tự & Xóa Trang Thừa | UtilityFlow',
      description:
        'Sắp xếp lại trang PDF bằng thumbnail trực quan ngay trên trình duyệt: di chuyển, nhân đôi hoặc xóa trang trắng rồi tải PDF gọn gàng, miễn phí, dùng ngay.',
      primaryKeyword: 'sắp xếp trang pdf',
      secondaryKeywords: [
        'xóa trang pdf',
        'cách xóa trang trong pdf',
        'đổi thứ tự trang pdf',
        'xóa trang trắng pdf',
      ],
      longTailKeywords: [
        'cách đổi thứ tự trang pdf không cần tải lên',
        'cách xóa trang trắng trong file pdf online',
        'cách nhân đôi một trang trong file pdf',
        'sắp xếp lại trang pdf bằng hình thu nhỏ',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Xem các trang PDF của bạn dưới dạng thẻ thumbnail, kéo trang bị lệch lên trước hay xuống sau, nhân đôi trang bìa hay trang mẫu, xóa trang trắng rồi xuất ra file PDF gọn gàng, đúng thứ tự ngay trên trình duyệt.',
  },
  'pdf-watermark': {
    slug: 'them-watermark-pdf',
    name: 'Thêm Watermark Vào PDF',
    shortDescription:
      'Đóng dấu watermark chữ như CONFIDENTIAL hoặc DRAFT lên trang PDF theo đường chéo hoặc ở giữa, tùy chỉnh cỡ chữ và độ mờ.',
    keywords: [
      'thêm watermark vào pdf',
      'chèn watermark pdf',
      'watermark pdf online',
      'đóng dấu pdf',
      'watermark confidential pdf',
      'đóng dấu draft pdf',
      'thêm watermark pdf miễn phí',
      'chèn chữ mờ vào pdf',
      'tạo watermark cho pdf',
    ],
    seo: {
      title: 'Thêm Watermark Vào PDF: Đóng Dấu Chữ Mờ | UtilityFlow',
      description:
        'Thêm watermark vào PDF ngay trên trình duyệt: chữ chéo hoặc ở giữa, tùy chỉnh cỡ chữ, độ mờ, góc xoay và màu sắc, không tải file lên, miễn phí, dùng ngay.',
      primaryKeyword: 'thêm watermark vào pdf',
      secondaryKeywords: [
        'chèn watermark pdf',
        'watermark pdf online',
        'watermark confidential pdf',
        'đóng dấu draft pdf',
      ],
      longTailKeywords: [
        'cách thêm watermark confidential vào pdf',
        'cách thêm watermark vào trang đầu của pdf',
        'thêm watermark vào pdf không cần tải lên',
        'cách đóng dấu draft lên file pdf miễn phí',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đóng dấu watermark chữ như CONFIDENTIAL, DRAFT hay DO NOT DISTRIBUTE lên toàn bộ trang hoặc chỉ trang bìa của bất kỳ file PDF nào — chỉnh trực tiếp cỡ chữ, độ mờ, góc xoay và màu sắc, hoàn toàn ngay trên trình duyệt của bạn.',
  },
  'add-pdf-page-numbers': {
    slug: 'danh-so-trang-pdf',
    name: 'Đánh Số Trang PDF',
    shortDescription:
      'Thêm số trang gọn gàng dạng "Trang 1 trên N", "1 / N" hoặc "1" vào tài liệu PDF, có tùy chọn bỏ qua trang bìa.',
    keywords: [
      'đánh số trang pdf',
      'thêm số trang vào pdf',
      'cách đánh số trang pdf',
      'đánh số trang file pdf',
      'add page numbers to pdf',
      'đánh số trang pdf online',
      'số trang pdf 1 trên n',
      'đánh số trang cho tài liệu pdf',
      'chèn số trang pdf',
    ],
    seo: {
      title: 'Đánh Số Trang PDF: Thêm Số Trang Vào File PDF | UtilityFlow',
      description:
        'Đánh số trang cho file PDF ngay trên trình duyệt: chữ vector sắc nét, bỏ qua trang bìa, chọn số bắt đầu, không tải file lên, hoàn toàn miễn phí, dùng ngay.',
      primaryKeyword: 'đánh số trang pdf',
      secondaryKeywords: [
        'thêm số trang vào pdf',
        'cách đánh số trang pdf',
        'đánh số trang file pdf',
        'add page numbers to pdf',
      ],
      longTailKeywords: [
        'cách đánh số trang pdf dạng trang 1 trên n',
        'cách đánh số trang pdf bỏ qua trang bìa',
        'cách đánh số trang cho file pdf đã gộp',
        'thêm số trang vào pdf không cần tải lên',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đánh số cho tập tài liệu đã gộp, hồ sơ pháp lý hay bài nộp học thuật bằng chữ vector sắc nét — chọn dạng "Trang 1 trên N", "1 / N" hay chỉ số đơn, vị trí trên hoặc dưới, số bắt đầu tùy chỉnh và tùy chọn bỏ qua trang bìa.',
  },
  'pdf-metadata-editor': {
    slug: 'chinh-sua-metadata-pdf',
    name: 'Chỉnh Sửa Metadata PDF',
    shortDescription:
      'Xem, sửa hoặc xóa tiêu đề, tác giả, chủ đề, từ khóa, phần mềm tạo và nhà sản xuất ẩn trong file PDF — ngay trên trình duyệt.',
    keywords: [
      'chỉnh sửa metadata pdf',
      'pdf metadata editor',
      'xóa tác giả pdf',
      'xóa metadata pdf',
      'đổi tiêu đề pdf',
      'xem metadata pdf',
      'sửa thông tin file pdf',
      'xóa tên tác giả trong pdf',
      'kiểm tra metadata pdf',
    ],
    seo: {
      title: 'Chỉnh Sửa Metadata PDF: Xem & Xóa Thông Tin Ẩn | UtilityFlow',
      description:
        'Xem, sửa hoặc xóa tiêu đề, tác giả, chủ đề, từ khóa và phần mềm tạo file PDF ngay trên trình duyệt. Dọn thông tin riêng tư trước khi chia sẻ, miễn phí.',
      primaryKeyword: 'chỉnh sửa metadata pdf',
      secondaryKeywords: [
        'pdf metadata editor',
        'xóa tác giả pdf',
        'xóa metadata pdf',
        'đổi tiêu đề pdf',
      ],
      longTailKeywords: [
        'cách xóa metadata tác giả ẩn trong file pdf',
        'cách đổi tiêu đề pdf hiển thị trên tab trình duyệt',
        'cách xóa metadata pdf trước khi chia sẻ',
        'chỉnh sửa thông tin file pdf online không cần tải lên',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Xem thông tin ẩn trong tiêu đề file PDF — tiêu đề tài liệu, tác giả, chủ đề, từ khóa, phần mềm tạo và nhà sản xuất — để đặt tiêu đề tab trình duyệt gọn gàng, hoặc xóa thông tin cá nhân trước khi chia sẻ công khai.',
  },
  'pdf-text-extractor': {
    slug: 'chuyen-pdf-sang-text',
    name: 'Trích Xuất Văn Bản Từ PDF',
    shortDescription:
      'Trích xuất văn bản từng trang từ file PDF để copy hoặc tải xuống dạng .txt — dùng PDF.js, xử lý ngay trên trình duyệt.',
    keywords: [
      'chuyển pdf sang text',
      'pdf to text',
      'cách lấy chữ trong pdf',
      'trích xuất văn bản pdf',
      'pdf sang txt',
      'copy chữ trong pdf',
      'chuyển pdf thành văn bản',
      'lấy text từ pdf',
      'pdf to txt online',
    ],
    seo: {
      title: 'Trích Xuất Văn Bản Từ PDF: PDF Sang Text | UtilityFlow',
      description:
        'Trích xuất văn bản từng trang từ PDF: đánh dấu trang, đếm từ, copy một chạm và tải .txt. Nhận biết cả file PDF scan, miễn phí, dùng ngay trên trình duyệt.',
      primaryKeyword: 'chuyển pdf sang text',
      secondaryKeywords: [
        'pdf to text',
        'cách lấy chữ trong pdf',
        'trích xuất văn bản pdf',
        'pdf sang txt',
      ],
      longTailKeywords: [
        'cách lấy chữ từ file pdf bảo mật không cần tải lên',
        'cách chuyển pdf thành file txt có đánh dấu trang',
        'pdf không copy được chữ phải làm sao',
        'cách nhận biết file pdf scan không có lớp chữ',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Trích xuất trực tiếp văn bản Unicode từng trang từ file PDF có lớp chữ bằng PDF.js — kèm tiêu đề "--- Trang N ---", số từ và byte, copy một chạm và xuất file .txt. Nếu file PDF là bản scan hay chỉ có hình ảnh, công cụ cũng báo rõ cho bạn biết.',
  },
};
