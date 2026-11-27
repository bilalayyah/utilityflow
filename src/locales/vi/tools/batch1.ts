import type { ToolLocaleOverride } from '../../types';

/**
 * Vietnamese overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Original Vietnamese copy, SEO-optimized for Vietnamese search intent.
 * Slugs are ASCII Latin (diacritics stripped), unique, lowercase,
 * hyphenated, and must not collide with English slugs or reserved paths.
 */
export const VI_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'dem-tu',
    name: 'Đếm Từ',
    shortDescription:
      'Đếm từ, ký tự, câu, đoạn văn, thời gian đọc và các từ lặp lại nhiều nhất ngay lập tức.',
    keywords: [
      'đếm từ',
      'word counter online',
      'đếm số từ online',
      'công cụ đếm từ tiếng Việt',
      'đếm từ trong văn bản',
      'tính thời gian đọc',
      'đếm câu trong đoạn văn',
      'kiểm tra số từ online',
      'đếm từ và ký tự',
    ],
    seo: {
      title: 'Đếm Từ: Đếm Số Từ Và Thời Gian Đọc Online | UtilityFlow',
      description:
        'Đếm từ, ký tự, câu và đoạn văn ngay lập tức, đồng thời ước tính thời gian đọc và thời gian nói — cho bài luận, bài viết và bài tập, không cần tải lên.',
      primaryKeyword: 'đếm từ',
      secondaryKeywords: ['word counter online', 'đếm số từ online', 'công cụ đếm từ tiếng Việt', 'tính thời gian đọc'],
      longTailKeywords: ['đếm số từ và ký tự online miễn phí', 'bài viết có bao nhiêu từ kiểm tra thế nào', 'cách tính thời gian đọc của văn bản', 'đếm từ online không cần tải lên'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Xem số từ, số ký tự, số câu và thời gian đọc, thời gian nói ước tính của bài viết theo thời gian thực — văn bản của bạn không gửi lên máy chủ, mọi thứ xử lý ngay trong trình duyệt.',
  },
  'character-counter': {
    slug: 'dem-ky-tu',
    name: 'Đếm Ký Tự',
    shortDescription:
      'Đo độ dài ký tự chính xác có và không có khoảng trắng, số byte UTF-8 và giới hạn ký tự của mạng xã hội, SEO.',
    keywords: [
      'đếm ký tự',
      'character counter online',
      'đếm số ký tự online',
      'công cụ đếm ký tự',
      'kiểm tra độ dài meta description',
      'đếm ký tự có khoảng trắng',
      'đếm ký tự không có khoảng trắng',
      'kiểm tra giới hạn ký tự',
      'đếm ký tự sms',
    ],
    seo: {
      title: 'Đếm Ký Tự: Đếm Ký Tự Và Byte Online, Miễn Phí | UtilityFlow',
      description:
        'Đếm ký tự có và không có khoảng trắng, chữ cái, chữ số và byte UTF-8, đồng thời theo dõi giới hạn ký tự SEO, SMS và mạng xã hội theo thời gian thực, miễn phí.',
      primaryKeyword: 'đếm ký tự',
      secondaryKeywords: ['character counter online', 'đếm số ký tự online', 'công cụ đếm ký tự', 'kiểm tra độ dài meta description'],
      longTailKeywords: ['cách đếm ký tự không tính khoảng trắng', 'kiểm tra độ dài meta description chuẩn seo', 'tính số byte utf-8 của văn bản online', 'kiểm tra giới hạn ký tự twitter online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Xem số ký tự, chữ cái, chữ số, khoảng trắng và dung lượng byte UTF-8 chính xác, đồng thời theo dõi tiến độ theo giới hạn ký tự của đoạn mô tả SEO, tin nhắn SMS và bài đăng mạng xã hội.',
  },
  'case-converter': {
    slug: 'chuyen-doi-chu-hoa-chu-thuong',
    name: 'Chuyển Đổi Kiểu Chữ',
    shortDescription:
      'Chuyển văn bản sang CHỮ HOA, chữ thường, Title Case, Sentence case, camelCase, snake_case và kebab-case.',
    keywords: [
      'chuyển đổi kiểu chữ',
      'case converter online',
      'chuyển chữ hoa thành chữ thường',
      'đổi chữ thường thành chữ hoa',
      'title case converter',
      'camelcase converter online',
      'snake case generator',
      'chuyển văn bản thành chữ hoa',
      'sentence case converter',
    ],
    seo: {
      title: 'Chuyển Đổi Kiểu Chữ: Hoa – Thường Online | UtilityFlow',
      description:
        'Chuyển văn bản sang CHỮ HOA, chữ thường, Title Case, Sentence case, camelCase, snake_case và kebab-case chỉ với một cú nhấp — miễn phí, nhanh và riêng tư.',
      primaryKeyword: 'chuyển đổi kiểu chữ',
      secondaryKeywords: ['case converter online', 'chuyển chữ hoa thành chữ thường', 'title case converter', 'camelcase converter online'],
      longTailKeywords: ['cách chuyển chữ hoa thành chữ thường online', 'đổi văn bản sang title case thế nào', 'chuyển đổi camelcase và snake case miễn phí', 'sửa văn bản gõ nhầm caps lock online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sửa nhanh văn bản gõ nhầm Caps Lock, chuẩn hóa tiêu đề bài viết sang Title Case hoặc định dạng tên biến thành camelCase, PascalCase, snake_case và kebab-case chỉ với một cú nhấp.',
  },
  'remove-duplicate-lines': {
    slug: 'xoa-dong-trung-lap',
    name: 'Xóa Dòng Trùng Lặp',
    shortDescription:
      'Xóa các dòng trùng lặp khỏi danh sách và nhật ký, có tùy chọn phân biệt chữ hoa thường, cắt khoảng trắng và sắp xếp theo bảng chữ cái.',
    keywords: [
      'xóa dòng trùng lặp',
      'remove duplicate lines online',
      'xóa dòng trùng trong danh sách',
      'lọc dòng duy nhất online',
      'công cụ xóa dòng trùng lặp',
      'xóa email trùng lặp',
      'lọc trùng lặp trong danh sách',
      'dọn danh sách trùng lặp',
      'xóa mục trùng lặp online',
    ],
    seo: {
      title: 'Xóa Dòng Trùng Lặp: Dọn Sạch Danh Sách | UtilityFlow',
      description:
        'Xóa ngay các dòng lặp lại trong danh sách, email, URL hoặc nhật ký — có tùy chọn cắt khoảng trắng, phân biệt chữ hoa thường và sắp xếp, ngay trong trình duyệt.',
      primaryKeyword: 'xóa dòng trùng lặp',
      secondaryKeywords: ['remove duplicate lines online', 'xóa dòng trùng trong danh sách', 'công cụ xóa dòng trùng lặp', 'lọc dòng duy nhất online'],
      longTailKeywords: ['cách xóa dòng trùng lặp online giữ nguyên thứ tự', 'xóa email trùng lặp trong danh sách', 'xóa dòng trùng lặp không phân biệt chữ hoa thường', 'công cụ xóa dòng trùng lặp miễn phí'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Dọn sạch danh sách lộn xộn, từ khóa xuất ra, địa chỉ email hay nhật ký máy chủ bằng cách loại bỏ các mục trùng lặp — toàn quyền kiểm soát việc cắt khoảng trắng, phân biệt chữ hoa thường và thứ tự đầu ra.',
  },
  'text-diff-checker': {
    slug: 'so-sanh-van-ban',
    name: 'So Sánh Văn Bản',
    shortDescription:
      'So sánh hai đoạn văn bản theo từng dòng để tìm dòng được thêm, dòng bị xóa và dòng không thay đổi.',
    keywords: [
      'so sánh văn bản',
      'text compare online',
      'so sánh hai đoạn văn bản',
      'kiểm tra khác biệt văn bản',
      'text diff checker online',
      'compare two texts online',
      'tìm điểm khác nhau giữa hai văn bản',
      'công cụ so sánh văn bản',
      'so sánh hai file văn bản',
    ],
    seo: {
      title: 'So Sánh Văn Bản: Tìm Điểm Khác Nhau, Miễn Phí | UtilityFlow',
      description:
        'So sánh hai đoạn văn bản, mã nguồn hoặc file cấu hình theo từng dòng và thấy rõ dòng được thêm hay bị xóa — không cần tải lên, nhanh chóng, hoàn toàn miễn phí.',
      primaryKeyword: 'so sánh văn bản',
      secondaryKeywords: ['text compare online', 'so sánh hai đoạn văn bản', 'kiểm tra khác biệt văn bản', 'text diff checker online'],
      longTailKeywords: ['cách so sánh hai file văn bản theo từng dòng online', 'xem thay đổi giữa hai phiên bản văn bản', 'công cụ so sánh văn bản miễn phí', 'so sánh hai phiên bản của tài liệu online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Nhận diện mọi dòng được thêm, bị xóa hay chỉnh sửa giữa hai phiên bản của bài viết, hợp đồng hay đoạn cấu hình — bằng công cụ so sánh từng dòng, nhanh chóng và riêng tư.',
  },
  'whitespace-remover': {
    slug: 'xoa-khoang-trang-thua',
    name: 'Xóa Khoảng Trắng Thừa',
    shortDescription:
      'Xóa khoảng trắng thừa, tab, dòng trống và dấu ngắt dòng không mong muốn khỏi văn bản sao chép từ PDF hoặc trang web.',
    keywords: [
      'xóa khoảng trắng thừa',
      'remove extra spaces online',
      'dọn văn bản copy từ pdf',
      'xóa dòng trống online',
      'whitespace remover',
      'xóa dấu ngắt dòng',
      'làm sạch văn bản online',
      'cách xóa khoảng trắng thừa',
      'sửa lỗi ngắt dòng khi copy pdf',
    ],
    seo: {
      title: 'Xóa Khoảng Trắng Thừa: Làm Sạch Văn Bản | UtilityFlow',
      description:
        'Xóa khoảng trắng thừa, tab, dòng trống và dấu ngắt dòng bị vỡ khi copy từ PDF — nhanh, miễn phí, trực tuyến và riêng tư, không cần đăng ký. Xem kết quả ngay.',
      primaryKeyword: 'xóa khoảng trắng thừa',
      secondaryKeywords: ['remove extra spaces online', 'dọn văn bản copy từ pdf', 'xóa dòng trống online', 'whitespace remover'],
      longTailKeywords: ['cách xóa khoảng trắng thừa khi copy từ pdf', 'xóa dòng trống và khoảng trắng thừa cùng lúc', 'đổi tab và nhiều khoảng trắng thành một khoảng trắng', 'công cụ làm sạch văn bản copy online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Làm sạch văn bản lộn xộn copy từ PDF, email, bảng tính hay trang web — gộp các khoảng trắng lặp lại, chuyển tab, cắt mép dòng và chuẩn hóa dấu ngắt dòng.',
  },
  'sort-lines': {
    slug: 'sap-xep-dong',
    name: 'Sắp Xếp Dòng',
    shortDescription:
      'Sắp xếp danh sách A–Z, Z–A, theo thứ tự tự nhiên (1, 2, 10), theo độ dài ký tự, đảo ngược hoặc xáo trộn ngẫu nhiên.',
    keywords: [
      'sắp xếp dòng',
      'sort lines alphabetically online',
      'sắp xếp danh sách a-z',
      'công cụ sắp xếp theo bảng chữ cái',
      'sắp xếp dòng theo thứ tự',
      'natural sort online',
      'xáo trộn dòng online',
      'sắp xếp dòng ngược lại',
      'sắp xếp a-z online',
    ],
    seo: {
      title: 'Sắp Xếp Dòng: Xếp Danh Sách A–Z Online | UtilityFlow',
      description:
        'Sắp xếp các dòng A–Z, Z–A, theo thứ tự số tự nhiên, theo độ dài, đảo ngược hoặc xáo trộn ngẫu nhiên — kèm xóa trùng lặp và dòng trống. Xem kết quả ngay.',
      primaryKeyword: 'sắp xếp dòng',
      secondaryKeywords: ['sort lines alphabetically online', 'sắp xếp danh sách a-z', 'công cụ sắp xếp theo bảng chữ cái', 'natural sort online'],
      longTailKeywords: ['cách sắp xếp danh sách theo bảng chữ cái online', 'sắp xếp danh sách có số theo thứ tự tự nhiên', 'sắp xếp dòng theo độ dài ký tự', 'đảo ngược và xáo trộn danh sách online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sắp xếp danh sách, tài liệu tham khảo, mã hàng tồn kho hay đoạn mã import theo bảng chữ cái, thứ tự số tự nhiên, độ dài ký tự hoặc thứ tự đảo ngược — chỉ với một cú nhấp.',
  },
  'find-and-replace': {
    slug: 'tim-va-thay-the',
    name: 'Tìm Và Thay Thế',
    shortDescription:
      'Tìm và thay thế từ trong văn bản với tùy chọn phân biệt chữ hoa thường, khớp cả từ và hỗ trợ RegExp.',
    keywords: [
      'tìm và thay thế',
      'find and replace online',
      'thay thế từ trong văn bản',
      'thay thế hàng loạt online',
      'find replace regex',
      'công cụ thay thế từ',
      'thay nhiều từ cùng lúc',
      'regex find replace online',
      'tìm kiếm và thay thế văn bản',
    ],
    seo: {
      title: 'Tìm Và Thay Thế: Thay Từ Trong Văn Bản | UtilityFlow',
      description:
        'Tìm và thay thế trong văn bản với số lần khớp trực tiếp, phân biệt chữ hoa thường, khớp cả từ và nhóm bắt RegExp — ngay trong trình duyệt, không cần đăng ký.',
      primaryKeyword: 'tìm và thay thế',
      secondaryKeywords: ['find and replace online', 'thay thế từ trong văn bản', 'thay thế hàng loạt online', 'find replace regex'],
      longTailKeywords: ['cách thay nhiều từ cùng lúc trong văn bản', 'chỉ thay thế cả từ hoàn chỉnh online', 'cách dùng regex để tìm và thay thế', 'thay từ trong văn bản dài miễn phí'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tìm và thay thế hàng loạt nhanh chóng trong bài viết, đoạn CSV hay khối mã — bằng khớp văn bản chính xác, ranh giới cả từ hoặc nhóm bắt của biểu thức chính quy.',
  },
  'text-reverser': {
    slug: 'dao-nguoc-van-ban',
    name: 'Đảo Ngược Văn Bản',
    shortDescription:
      'Đảo ngược toàn bộ văn bản, đảo thứ tự các từ, lật từng chữ cái trong mỗi từ hoặc đảo ngược thứ tự các dòng.',
    keywords: [
      'đảo ngược văn bản',
      'reverse text online',
      'đảo ngược thứ tự từ',
      'đảo ngược dòng văn bản',
      'tạo chữ ngược online',
      'mirror text generator',
      'lật ngược văn bản',
      'đảo chữ online',
      'viết chữ ngược online',
    ],
    seo: {
      title: 'Đảo Ngược Văn Bản: Đảo Từ Và Dòng Online | UtilityFlow',
      description:
        'Đảo ngược ký tự, đổi thứ tự từ, lật từng từ hay đảo ngược thứ tự dòng — an toàn với Unicode, miễn phí, riêng tư và cho kết quả ngay lập tức. Thử ngay.',
      primaryKeyword: 'đảo ngược văn bản',
      secondaryKeywords: ['reverse text online', 'đảo ngược thứ tự từ', 'đảo ngược dòng văn bản', 'tạo chữ ngược online'],
      longTailKeywords: ['cách đảo ngược toàn bộ văn bản online', 'đổi thứ tự các từ trong câu', 'đảo ngược từng chữ cái trong mỗi từ', 'đảo ngược các dòng từ dưới lên trên'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đảo ngược chuỗi ký tự, đổi thứ tự từ trong mỗi dòng, lật chữ cái trong từng từ hay đảo ngược danh sách nhiều dòng từ dưới lên trên — xử lý Unicode hoàn toàn an toàn.',
  },
  'lorem-ipsum-generator': {
    slug: 'tao-van-ban-lorem-ipsum',
    name: 'Tạo Văn Bản Lorem Ipsum',
    shortDescription:
      'Tạo văn bản mẫu theo đoạn, theo câu hoặc theo số từ tùy chọn, kèm thẻ HTML <p> nếu cần, để dùng cho thiết kế.',
    keywords: [
      'lorem ipsum generator',
      'tạo văn bản mẫu',
      'dummy text generator online',
      'văn bản giả lorem ipsum',
      'placeholder text generator',
      'tạo chữ lorem ipsum',
      'filler text generator online',
      'văn bản mẫu cho thiết kế',
      'tạo đoạn văn bản giả',
    ],
    seo: {
      title: 'Tạo Văn Bản Lorem Ipsum: Chữ Mẫu Thiết Kế | UtilityFlow',
      description:
        'Tạo văn bản mẫu Lorem Ipsum theo đoạn, theo câu hoặc đúng số từ — kèm thẻ HTML nếu cần, cho bản phác thảo thiết kế, hoàn toàn miễn phí. Thử ngay hôm nay.',
      primaryKeyword: 'lorem ipsum generator',
      secondaryKeywords: ['tạo văn bản mẫu', 'dummy text generator online', 'văn bản giả lorem ipsum', 'placeholder text generator'],
      longTailKeywords: ['tạo lorem ipsum theo số từ chính xác', 'tạo lorem ipsum kèm thẻ html p', 'tạo văn bản mẫu cho bản phác thảo thiết kế', 'tạo chữ giả cho giao diện website'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tạo văn bản mẫu sạch theo đúng số đoạn, số câu hoặc số từ cho wireframe, kiểm tra kiểu chữ và bản mẫu thiết kế — kèm thẻ đoạn HTML tùy chọn.',
  },
  'readability-checker': {
    slug: 'kiem-tra-do-de-doc',
    name: 'Kiểm Tra Độ Dễ Đọc',
    shortDescription:
      'Tính điểm Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog và SMOG để đánh giá độ dễ đọc.',
    keywords: [
      'kiểm tra độ dễ đọc',
      'readability checker online',
      'flesch reading ease',
      'cách kiểm tra readability score',
      'flesch kincaid grade level',
      'gunning fog calculator',
      'kiểm tra độ khó của văn bản',
      'đánh giá độ dễ đọc online',
      'readability score checker',
    ],
    seo: {
      title: 'Kiểm Tra Độ Dễ Đọc: Tính Điểm Flesch | UtilityFlow',
      description:
        'Kiểm tra độ dễ đọc của bài viết với điểm Flesch Reading Ease, Flesch-Kincaid, Gunning Fog và SMOG — miễn phí, riêng tư, ngay trong trình duyệt của bạn.',
      primaryKeyword: 'kiểm tra độ dễ đọc',
      secondaryKeywords: ['readability checker online', 'flesch reading ease', 'cách kiểm tra readability score', 'flesch kincaid grade level'],
      longTailKeywords: ['cách tính flesch kincaid grade level online', 'kiểm tra chỉ số gunning fog và smog online', 'cách cải thiện độ dễ đọc của bài viết', 'điểm flesch reading ease bao nhiêu là tốt'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đánh giá bài viết của bạn dễ hiểu đến đâu bằng bốn công thức uy tín — Flesch Reading Ease, Flesch-Kincaid Grade Level, Gunning Fog và SMOG — kèm nhận diện từ khó.',
  },
  'word-frequency-counter': {
    slug: 'dem-tan-suat-tu',
    name: 'Đếm Tần Suất Từ',
    shortDescription:
      'Đếm tần suất cụm 1 từ, 2 từ và 3 từ với bộ lọc từ dừng và xuất CSV chỉ với một cú nhấp.',
    keywords: [
      'đếm tần suất từ',
      'word frequency counter online',
      'đếm số lần xuất hiện của từ',
      'kiểm tra mật độ từ khóa',
      'phrase frequency counter',
      'đếm từ lặp lại trong văn bản',
      'ngram counter',
      'đếm tần suất cụm từ',
      'kiểm tra tần suất từ khóa',
    ],
    seo: {
      title: 'Đếm Tần Suất Từ: Kiểm Tra Mật Độ Từ Khóa | UtilityFlow',
      description:
        'Đếm tần suất cụm 1, 2 và 3 từ trong bất kỳ văn bản nào — kèm bộ lọc từ dừng và xuất CSV chỉ với một cú nhấp, miễn phí, ngay trong trình duyệt. Xem kết quả ngay.',
      primaryKeyword: 'đếm tần suất từ',
      secondaryKeywords: ['word frequency counter online', 'đếm số lần xuất hiện của từ', 'kiểm tra mật độ từ khóa', 'phrase frequency counter'],
      longTailKeywords: ['cách đếm từ khóa xuất hiện bao nhiêu lần trong bài', 'kiểm tra tần suất cụm 2 và 3 từ trong văn bản', 'xuất bảng tần suất từ ra file csv', 'kiểm tra mật độ từ khóa trong nội dung'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Kiểm tra sự cân bằng từ khóa, các cụm từ dùng quá nhiều và mẫu n-gram nhiều từ trong bản nháp nội dung — với bảng tần suất tức thì, bộ lọc từ dừng và báo cáo CSV tải xuống được.',
  },
  'text-to-slug': {
    slug: 'chuyen-van-ban-thanh-slug',
    name: 'Chuyển Văn Bản Thành Slug',
    shortDescription:
      'Chuyển bất kỳ văn bản nào thành slug URL gọn gàng cho mã nguồn, tên file và khóa cơ sở dữ liệu, kèm chuyển đổi dấu và chế độ hàng loạt.',
    keywords: [
      'chuyển văn bản thành slug',
      'text to slug converter',
      'tạo slug url online',
      'slugify text online',
      'tạo url chuẩn seo',
      'chuyển tiêu đề thành slug',
      'cách tạo slug url',
      'tạo slug thân thiện seo',
      'slug generator online',
    ],
    seo: {
      title: 'Chuyển Văn Bản Thành Slug: Tạo Slug URL SEO | UtilityFlow',
      description:
        'Chuyển tiêu đề blog hay tên sản phẩm thành slug URL gọn gàng, chuẩn SEO — kèm chuyển đổi dấu tiếng Việt và chế độ hàng loạt, hoàn toàn miễn phí. Thử ngay.',
      primaryKeyword: 'chuyển văn bản thành slug',
      secondaryKeywords: ['text to slug converter', 'tạo slug url online', 'slugify text online', 'tạo url chuẩn seo'],
      longTailKeywords: ['cách tạo slug chuẩn seo từ tiêu đề blog', 'chuyển nhiều tiêu đề thành slug cùng lúc', 'chuyển ký tự có dấu thành slug ascii', 'chọn dấu gạch ngang hay gạch dưới cho slug'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Chuyển tiêu đề blog, tên sản phẩm và danh sách nội dung nhiều dòng thành slug ASCII gọn gàng, an toàn cho URL — dấu tự động được chuyển đổi, kèm tùy chọn dấu phân cách và loại bỏ từ dừng.',
  },
  'markdown-previewer': {
    slug: 'xem-truoc-markdown',
    name: 'Xem Trước Markdown',
    shortDescription:
      'Viết Markdown trong trình soạn thảo chia đôi trực tiếp, xem định dạng đã hiển thị một cách an toàn và sao chép hoặc xuất HTML sạch.',
    keywords: [
      'xem trước markdown',
      'markdown previewer online',
      'markdown to html converter',
      'trình soạn markdown online',
      'công cụ xem trước markdown',
      'markdown live preview',
      'xem trước readme online',
      'chuyển markdown sang html',
      'xuất markdown ra html',
    ],
    seo: {
      title: 'Xem Trước Markdown: Xem Trực Tiếp Và Xuất HTML | UtilityFlow',
      description:
        'Viết Markdown và xem kết quả hiển thị trực tiếp, kiểm tra mã HTML đã biên dịch rồi sao chép hoặc tải file HTML sạch — trực tuyến, miễn phí, nhanh và riêng tư.',
      primaryKeyword: 'xem trước markdown',
      secondaryKeywords: ['markdown previewer online', 'markdown to html converter', 'trình soạn markdown online', 'công cụ xem trước markdown'],
      longTailKeywords: ['xem trước markdown trực tiếp kèm xuất html', 'chuyển readme markdown sang html online', 'trình soạn markdown trong trình duyệt không cần tải lên', 'xem trước readme github trước khi đăng'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Soạn README, tài liệu và ghi chú có định dạng trong trình soạn thảo Markdown linh hoạt — kèm xem trước trực tiếp, thoát HTML an toàn, kiểm tra HTML thô và xuất HTML chỉ với một cú nhấp.',
  },
  'line-prefix-suffix': {
    slug: 'them-tien-to-hau-to-dong',
    name: 'Thêm Số Dòng, Tiền Tố Và Hậu Tố',
    shortDescription:
      'Thêm số dòng, tiền tố và hậu tố tùy chỉnh vào mỗi dòng cho danh sách, mệnh đề SQL và mã nguồn.',
    keywords: [
      'thêm tiền tố hậu tố cho dòng',
      'thêm số dòng vào văn bản',
      'thêm tiền tố cho mỗi dòng',
      'công cụ thêm số dòng',
      'định dạng sql in clause',
      'đặt dòng trong dấu ngoặc kép',
      'thêm chữ vào đầu và cuối dòng',
      'thêm dấu phẩy vào mỗi dòng',
      'prefix suffix generator online',
    ],
    seo: {
      title: 'Thêm Số Dòng, Tiền Tố Và Hậu Tố Online | UtilityFlow',
      description:
        'Thêm số dòng, tiền tố và hậu tố tùy chỉnh vào mỗi dòng — cho danh sách, truy vấn SQL và mảng mã nguồn, nhanh chóng, trực tuyến và miễn phí, không cần đăng ký.',
      primaryKeyword: 'thêm tiền tố hậu tố cho dòng',
      secondaryKeywords: ['thêm số dòng vào văn bản', 'thêm tiền tố cho mỗi dòng', 'công cụ thêm số dòng', 'định dạng sql in clause'],
      longTailKeywords: ['đặt mỗi dòng trong dấu ngoặc đơn và dấu phẩy cho sql', 'thêm dấu ngoặc kép vào mỗi dòng cho sql', 'thêm chữ vào đầu và cuối dòng cùng lúc', 'đánh số dòng bắt đầu từ 0 thế nào'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Thêm số thứ tự, ký tự đầu dòng hay dấu ngoặc mở vào đầu mỗi dòng trong bất kỳ danh sách nào, và thêm dấu phẩy, dấu chấm phẩy hay thẻ đóng vào cuối dòng — chỉ trong vài giây.',
  },
  'alphabets-to-word-generator': {
    slug: 'tao-tu-tu-chu-cai',
    name: 'Tạo Từ Từ Chữ Cái',
    shortDescription: 'Tạo từ từ các chữ cái của bạn ngay lập tức: hoán vị, từ ngắn và dài, và các kết hợp có thể — miễn phí trên trình duyệt.',
    keywords: [
      'tạo từ từ chữ cái',
      'tìm từ từ chữ cái',
      'chữ cái thành từ',
      'tạo hoán vị chữ',
      'giải hoán vị',
      'xáo trộn chữ cái',
      'tìm từ với chữ cái',
      'tạo từ tiếng Anh',
      'từ từ các chữ cái cho trước',
    ],
    seo: {
      title: 'Tạo Từ Từ Chữ Cái – Tạo Từ Miễn Phí | UtilityFlow',
      description: 'Tạo từ từ các chữ cái ngay lập tức với công cụ miễn phí của chúng tôi. Tìm từ ngắn và dài, hoán vị và các kết hợp có thể.',
      primaryKeyword: 'tạo từ từ chữ cái',
      secondaryKeywords: ['tạo hoán vị chữ', 'giải hoán vị', 'xáo trộn chữ cái', 'tìm từ với chữ cái'],
      longTailKeywords: ['tôi có thể tạo từ nào với các chữ cái này', 'tạo từ từ chữ cái online miễn phí', 'tìm từ dài nhất từ các chữ cái', 'tạo hoán vị từ một từ'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Nhập các chữ cái của bạn và khám phá mọi từ có thể tạo ra: hoán vị chính xác, từ ngắn và dài, với bộ lọc độ dài và chữ cái — ngay trên trình duyệt.',
  },
};
