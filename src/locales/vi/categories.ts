import type { CategoryLocaleOverride } from '../types';

/**
 * Vietnamese overrides for the 7 categories, keyed by category id.
 * Original Vietnamese copy, SEO-optimized for Vietnamese search intent —
 * written fresh for Vietnamese readers, not translated word-for-word
 * from the English text. Every category: slug, name, shortName,
 * description, longDescription, intro, faqs, seo, sampleToolNames.
 * Slugs copied exactly from CATEGORY_LOCALE_SLUGS.vi in config.ts.
 * sampleToolNames use the ENGLISH tool names for now (the coordinator
 * will replace them with the real Vietnamese tool names after the
 * tools batches merge).
 */
export const VI_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'cong-cu-van-ban',
    name: 'Công cụ Văn bản & Viết lách',
    shortName: 'Văn bản & Viết lách',
    description:
      'Đếm từ, định dạng văn bản, xóa khoảng trắng thừa, chuyển đổi chữ hoa/thường và kiểm tra độ dễ đọc — ngay trong trình duyệt của bạn.',
    longDescription:
      'Bộ công cụ viết lách và xử lý văn bản chính xác dành cho tác giả, biên tập viên, đội ngũ nội dung và sinh viên. Mọi thao tác diễn ra ngay trên thiết bị của bạn — bản nháp không bao giờ được tải lên máy chủ, nên bài luận, bài viết và bài tập của bạn luôn hoàn toàn riêng tư.',
    intro:
      'Chọn một công cụ bên dưới, dán hoặc nhập văn bản của bạn và xem kết quả ngay lập tức. Không cần cài đặt gì, không cần tải lên gì — văn bản của bạn ở lại trên thiết bị của bạn, vì mọi công cụ đều chạy hoàn toàn trong trình duyệt.',
    faqs: [
      {
        question: 'Các công cụ văn bản và viết lách có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Văn bản của tôi có rời khỏi trình duyệt không?',
        answer: 'Không. Mọi công cụ đều chạy 100% trong trình duyệt của bạn, nên văn bản bạn dán hoặc nhập sẽ không bao giờ được gửi lên máy chủ hay lưu trữ ở đâu cả.',
      },
      {
        question: 'Tôi có cần tạo tài khoản để sử dụng không?',
        answer: 'Không. Bạn chỉ cần mở bất kỳ công cụ nào và dùng ngay — không tài khoản, không email, không cài đặt.',
      },
      {
        question: 'Làm sao để đếm số từ trong bài viết của tôi?',
        answer: 'Hãy dùng công cụ Đếm từ. Chỉ cần dán văn bản vào, số từ và số ký tự sẽ hiện ra ngay lập tức.',
      },
    ],
    seo: {
      title: 'Công cụ Văn bản & Viết lách – Đếm từ, đếm ký tự online',
      description:
        'Công cụ văn bản và viết lách miễn phí chạy trong trình duyệt: đếm từ, đếm ký tự, chuyển đổi chữ hoa/thường, sắp xếp dòng, làm sạch văn bản — không cần tải lên.',
      keywords: [
        'công cụ văn bản',
        'công cụ viết lách',
        'đếm từ online',
        'đếm ký tự',
        'chuyển đổi chữ hoa thường',
      ],
    },
    sampleToolNames: [
      'Đếm Từ',
      'Đếm Ký Tự',
      'Chuyển Đổi Kiểu Chữ',
      'Xóa Dòng Trùng Lặp',
      'So Sánh Văn Bản',
    ],
  },
  developer: {
    slug: 'cong-cu-lap-trinh',
    name: 'Công cụ Lập trình',
    shortName: 'Lập trình',
    description:
      'Định dạng JSON, mã hóa Base64, kiểm tra biểu thức chính quy, giải mã JWT và tạo hash — không cần qua máy chủ.',
    longDescription:
      'Bộ công cụ lập trình nhanh cho công việc gỡ lỗi và chuyển đổi dữ liệu hằng ngày. Dán payload, kiểm tra định dạng có cấu trúc và xác thực cú pháp — tất cả đều xử lý ngay trên máy của bạn, nên token và đoạn cấu hình nhạy cảm không bao giờ rời khỏi thiết bị.',
    intro:
      'Chọn công cụ bạn cần, dán mã hoặc dữ liệu của bạn và xem kết quả ngay lập tức. Mọi thứ đều được xử lý trên thiết bị của bạn, nên token, payload và đoạn cấu hình không bao giờ rời khỏi máy của bạn.',
    faqs: [
      {
        question: 'Các công cụ lập trình có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Dán token hoặc API key vào các công cụ này có an toàn không?',
        answer: 'Có. Các công cụ như bộ giải mã JWT và bộ mã hóa Base64 chạy hoàn toàn trong trình duyệt của bạn, nên văn bản bạn dán sẽ không bao giờ được gửi đến máy chủ.',
      },
      {
        question: 'Tôi có cần tạo tài khoản để sử dụng không?',
        answer: 'Không. Bạn chỉ cần mở bất kỳ công cụ nào và dùng ngay — không tài khoản, không email, không cài đặt.',
      },
      {
        question: 'Làm sao để kiểm tra JSON của tôi có hợp lệ không?',
        answer: 'Hãy dùng công cụ định dạng JSON. Dán JSON của bạn vào, công cụ sẽ định dạng lại và hiển thị mọi lỗi nếu có.',
      },
    ],
    seo: {
      title: 'Công cụ Lập trình – JSON, Base64, Regex & JWT online',
      description:
        'Công cụ lập trình miễn phí chạy trong trình duyệt: định dạng JSON, kiểm tra Regex, mã hóa Base64 và URL, giải mã JWT và tạo UUID — an toàn và nhanh chóng.',
      keywords: [
        'công cụ lập trình',
        'mã hóa Base64',
        'kiểm tra Regex',
        'giải mã JWT',
        'định dạng JSON',
      ],
    },
    sampleToolNames: [
      'Mã hóa / Giải mã Base64',
      'Mã hóa / Giải mã URL',
      'UUID Generator',
      'Kiểm tra Regex',
      'Giải mã JWT',
    ],
  },
  calculators: {
    slug: 'may-tinh',
    name: 'Máy tính trực tuyến',
    shortName: 'Máy tính',
    description:
      'Tính tuổi, phần trăm, lịch trả góp vay, BMI, đổi đơn vị và biên lợi nhuận kinh doanh — chính xác và rõ ràng.',
    longDescription:
      'Bộ máy tính tài chính, ngày tháng, sức khỏe và toán học chính xác, được thiết kế để mọi phép tính đều minh bạch. Xem từng bước tính chi tiết, bảng kết quả gọn gàng và kết quả cập nhật ngay khi bạn thay đổi số liệu.',
    intro:
      'Chọn một máy tính, nhập các con số của bạn và xem kết quả cập nhật ngay lập tức mỗi khi bạn thay đổi dữ liệu. Không cần đăng ký, và những gì bạn nhập sẽ không được gửi đi đâu — mọi phép tính đều diễn ra trong trình duyệt của bạn.',
    faqs: [
      {
        question: 'Các máy tính có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Dữ liệu tôi nhập có rời khỏi trình duyệt không?',
        answer: 'Không. Mọi phép tính đều chạy 100% trong trình duyệt của bạn, nên các con số bạn nhập sẽ không bao giờ được tải lên máy chủ hay lưu trữ ở đâu cả.',
      },
      {
        question: 'Các máy tính có dùng được trên điện thoại không?',
        answer: 'Có. Chúng chạy trên mọi trình duyệt hiện đại, nên bạn có thể dùng trên điện thoại, máy tính bảng hoặc máy tính.',
      },
      {
        question: 'Làm sao để tính khoản trả góp vay hằng tháng?',
        answer: 'Hãy dùng Máy tính vay & EMI. Nhập số tiền vay, lãi suất và thời hạn, bạn sẽ thấy ngay khoản trả hằng tháng cùng lịch trả nợ đầy đủ.',
      },
    ],
    seo: {
      title: 'Máy tính online – Tính EMI, tuổi, phần trăm & BMI miễn phí',
      description:
        'Máy tính online nhanh và minh bạch: tính tuổi, phần trăm, EMI khoản vay, chiết khấu – biên lợi nhuận và đổi đơn vị — kết quả tức thì, không cần đăng ký.',
      keywords: [
        'máy tính online',
        'tính tuổi',
        'tính phần trăm',
        'tính EMI khoản vay',
        'đổi đơn vị',
      ],
    },
    sampleToolNames: [
      'Máy Tính Tuổi',
      'Máy Tính Phần Trăm',
      'Máy Tính EMI Khoản Vay',
      'Máy Tính Giảm Giá và Lợi Nhuận',
      'Máy Tính Khoảng Cách Ngày',
    ],
  },
  'social-media': {
    slug: 'cong-cu-mang-xa-hoi',
    name: 'Công cụ Mạng xã hội',
    shortName: 'Mạng xã hội',
    description:
      'Tạo liên kết theo dõi UTM, kiểm tra độ dài bài đăng, tạo mã QR và định dạng chú thích — cho các nền tảng mạng xã hội hiện nay.',
    longDescription:
      'Bộ công cụ hỗ trợ marketing và đăng bài thiết thực cho nhà sáng tạo nội dung, đội ngũ tăng trưởng và quản trị cộng đồng. Chuẩn hóa các tham số theo dõi chiến dịch, kiểm tra giới hạn ký tự của từng nền tảng và tạo mã QR quét được bất cứ khi nào bạn cần.',
    intro:
      'Mở một công cụ bên dưới, nhập liên kết hoặc văn bản của bạn rồi sao chép kết quả thẳng vào bài đăng hoặc chiến dịch. Mọi thứ đều chạy trong trình duyệt của bạn, nên liên kết và chú thích của bạn không bao giờ được tải lên máy chủ.',
    faqs: [
      {
        question: 'Các công cụ mạng xã hội có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Những gì tôi nhập có được tải lên máy chủ không?',
        answer: 'Không. Mọi công cụ đều chạy 100% trong trình duyệt của bạn, nên liên kết, chú thích và văn bản của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Tôi có cần tạo tài khoản để sử dụng không?',
        answer: 'Không. Bạn chỉ cần mở bất kỳ công cụ nào và dùng ngay — không tài khoản, không email, không cài đặt.',
      },
      {
        question: 'Làm sao để tạo mã QR cho liên kết của tôi?',
        answer: 'Hãy dùng công cụ Tạo mã QR. Nhập liên kết của bạn, mã QR quét được sẽ hiện ra ngay và bạn có thể tải xuống để chia sẻ.',
      },
    ],
    seo: {
      title: 'Công cụ Mạng xã hội – Tạo mã QR, link UTM & hashtag',
      description:
        'Tạo link UTM, tạo mã QR, kiểm tra giới hạn ký tự mạng xã hội và định dạng hashtag, tiểu sử — công cụ gọn nhẹ, miễn phí, chạy trong trình duyệt. Dùng thử ngay.',
      keywords: [
        'công cụ mạng xã hội',
        'tạo mã QR',
        'tạo link UTM',
        'tạo hashtag',
        'đếm ký tự caption',
      ],
    },
    sampleToolNames: [
      'Trình Tạo Mã QR',
      'Trình Tạo Link UTM',
      'Kiểm Tra Giới Hạn Ký Tự Mạng Xã Hội',
      'Fancy Unicode Text Formatter',
      'Bio Line Break Formatter',
    ],
  },
  pdf: {
    slug: 'cong-cu-pdf',
    name: 'Công cụ PDF',
    shortName: 'Công cụ PDF',
    description:
      'Gộp, tách, xoay trang, đóng dấu và chuyển đổi tài liệu PDF — ngay trong trình duyệt, không cần tải tệp riêng tư lên máy chủ.',
    longDescription:
      'Bộ công cụ xử lý tài liệu được thiết kế để bảo mật tuyệt đối. Hợp đồng, hóa đơn và tài liệu học tập được xử lý trực tiếp trong bộ nhớ trình duyệt của bạn — không qua máy chủ tệp từ xa — nên tệp của bạn không bao giờ rời khỏi thiết bị.',
    intro:
      'Chọn một công cụ, chọn tệp PDF của bạn và kết quả sẽ sẵn sàng trong trình duyệt chỉ trong giây lát. Tài liệu của bạn không bao giờ rời khỏi thiết bị — chúng được xử lý ngay trên máy, không tải lên bất kỳ máy chủ nào.',
    faqs: [
      {
        question: 'Các công cụ PDF có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên đâu không?',
        answer: 'Không. Tệp của bạn được xử lý trực tiếp trong trình duyệt, nên chúng không bao giờ rời khỏi thiết bị và không được lưu trên bất kỳ máy chủ nào.',
      },
      {
        question: 'Các công cụ PDF có dùng được trên điện thoại không?',
        answer: 'Có. Chúng chạy trên mọi trình duyệt hiện đại, nên bạn có thể dùng trên điện thoại, máy tính bảng hoặc máy tính.',
      },
      {
        question: 'Làm sao để gộp nhiều tệp PDF thành một tệp?',
        answer: 'Hãy dùng công cụ Gộp PDF. Chọn các tệp bạn muốn gộp, công cụ sẽ nối chúng thành một tài liệu PDF duy nhất.',
      },
    ],
    seo: {
      title: 'Công cụ PDF – Gộp, tách & chuyển đổi PDF online miễn phí',
      description:
        'Gộp, tách, xoay và chuyển đổi PDF ngay trong trình duyệt của bạn — không cần tải tài liệu nhạy cảm lên máy chủ bên thứ ba. Miễn phí và an toàn. Dùng thử ngay.',
      keywords: [
        'công cụ PDF',
        'gộp PDF',
        'tách PDF',
        'chuyển ảnh sang PDF',
        'chỉnh sửa PDF online',
      ],
    },
    sampleToolNames: [
      'Gộp File PDF',
      'Split PDF',
      'Images to PDF',
      'Xoay Trang PDF',
      'PDF Metadata Inspector',
    ],
  },
  seo: {
    slug: 'cong-cu-seo',
    name: 'Công cụ SEO',
    shortName: 'Công cụ SEO',
    description:
      'Xem trước đoạn trích SERP, tạo thẻ OpenGraph, tạo robots.txt và sitemap XML, kiểm tra mật độ từ khóa.',
    longDescription:
      'Bộ công cụ SEO kỹ thuật và SEO on-page dành cho nhà xuất bản, nhà sáng lập độc lập và chuyên gia SEO. Xác thực độ dài tiêu đề, tạo metadata có cấu trúc và chuẩn bị slug URL gọn gàng chỉ trong vài giây.',
    intro:
      'Chọn một công cụ, nhập tiêu đề trang, URL hoặc nội dung của bạn và kiểm tra kết quả ngay lập tức. Mọi kiểm tra đều diễn ra trong trình duyệt của bạn, nên các trang chưa xuất bản và bản nháp của bạn luôn được giữ riêng tư.',
    faqs: [
      {
        question: 'Các công cụ SEO có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Nội dung của tôi có rời khỏi trình duyệt không?',
        answer: 'Không. Mọi công cụ đều chạy 100% trong trình duyệt của bạn, nên tiêu đề, URL và nội dung bạn nhập sẽ không bao giờ được tải lên máy chủ hay lưu trữ ở đâu cả.',
      },
      {
        question: 'Tôi có cần tạo tài khoản để sử dụng không?',
        answer: 'Không. Bạn chỉ cần mở bất kỳ công cụ nào và dùng ngay — không tài khoản, không email, không cài đặt.',
      },
      {
        question: 'Làm sao để xem trang của tôi sẽ hiển thị thế nào trong kết quả tìm kiếm?',
        answer: 'Hãy dùng công cụ Xem trước đoạn trích SERP của Google. Nhập tiêu đề và mô tả của bạn, bạn sẽ thấy trang của mình có thể trông như thế nào trên Google.',
      },
    ],
    seo: {
      title: 'Công cụ SEO – Xem trước SERP, tạo meta tag & slug online',
      description:
        'Tối ưu trang của bạn với công cụ SEO miễn phí: xem trước đoạn trích SERP, tạo meta tag, tạo robots.txt và kiểm tra mật độ từ khóa — tất cả trong trình duyệt.',
      keywords: [
        'công cụ SEO',
        'tạo meta tag',
        'xem trước SERP',
        'tạo robots.txt',
        'tạo slug',
      ],
    },
    sampleToolNames: [
      'Trình Tạo Meta Tag',
      'SERP Snippet Preview',
      'Trình Tạo Slug URL',
      'Trình Tạo Robots.txt',
      'Schema Markup Generator',
    ],
  },
  'image-file': {
    slug: 'cong-cu-anh-va-tep',
    name: 'Công cụ Ảnh & Tệp',
    shortName: 'Ảnh & Tệp',
    description:
      'Nén ảnh, đổi kích thước, chuyển đổi PNG/JPG/WebP, kiểm tra độ tương phản WCAG, quét mã QR và tạo favicon — xử lý ngay trên máy.',
    longDescription:
      'Bộ công cụ media, mật mã và tệp nhanh, chạy trên HTML5 Canvas, Web Crypto API và File API của trình duyệt. Tối ưu tài nguyên web cho Core Web Vitals, xác minh checksum SHA-256 của tệp, trích xuất bảng màu từ ảnh và tạo favicon — mà không cần tải lên bất cứ thứ gì.',
    intro:
      'Chọn một công cụ bên dưới, chọn tệp của bạn và nhận kết quả ngay lập tức. Ảnh và tệp của bạn không bao giờ rời khỏi thiết bị — mọi thứ đều được xử lý ngay trong trình duyệt.',
    faqs: [
      {
        question: 'Các công cụ ảnh và tệp có miễn phí không?',
        answer: 'Có, tất cả đều hoàn toàn miễn phí — không cần đăng ký, không cần tạo tài khoản.',
      },
      {
        question: 'Ảnh của tôi có được tải lên máy chủ không?',
        answer: 'Không. Tệp của bạn được xử lý trực tiếp trong trình duyệt, nên chúng không bao giờ rời khỏi thiết bị và không được lưu trên bất kỳ máy chủ nào.',
      },
      {
        question: 'Các công cụ này có dùng được trên điện thoại không?',
        answer: 'Có. Chúng chạy trên mọi trình duyệt hiện đại, nên bạn có thể dùng trên điện thoại, máy tính bảng hoặc máy tính.',
      },
      {
        question: 'Làm sao để giảm dung lượng tệp ảnh?',
        answer: 'Hãy dùng công cụ Nén ảnh. Chọn ảnh của bạn, công cụ sẽ giảm dung lượng tệp mà vẫn giữ ảnh sẵn sàng để dùng trên web.',
      },
    ],
    seo: {
      title: 'Công cụ Ảnh & Tệp – Nén, đổi kích thước, chuyển đổi ảnh',
      description:
        'Nén, đổi kích thước, xoay và chuyển đổi ảnh giữa PNG, JPG, WebP ngay trên máy, miễn phí; xác minh checksum tệp, quét mã QR và tạo favicon. Dùng ngay hôm nay.',
      keywords: [
        'công cụ ảnh',
        'nén ảnh online',
        'đổi kích thước ảnh',
        'chuyển đổi WebP',
        'kiểm tra độ tương phản màu',
      ],
    },
    sampleToolNames: [
      'Công Cụ Nén Ảnh',
      'Công Cụ Đổi Kích Thước Ảnh',
      'Image Format Converter',
      'Color Contrast Checker',
      'Cryptographic Password Generator',
    ],
  },
};
