import type { UiStrings } from '../ui';

/**
 * Vietnamese chrome dictionary — natural, native Vietnamese.
 * Same keys and structure as the English source (locales/en/ui.ts).
 * Brand name, email addresses, URLs and {placeholder} tokens stay unchanged.
 * English kept where Vietnamese speakers naturally use the English word
 * (tool, download, PDF, SEO, JSON).
 */
export const viStrings: UiStrings = {
  nav: {
    tools: 'Công cụ',
    categories: 'Danh mục',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    blog: 'Blog',
    allTools: 'Tất cả công cụ',
    searchPlaceholder: 'Tìm kiếm 85 công cụ...',
    searchTools: 'Tìm công cụ',
    closeSearch: 'Đóng tìm kiếm',
    openMenu: 'Mở menu điều hướng',
    closeMenu: 'Đóng menu điều hướng',
    skipToContent: 'Bỏ qua tới nội dung chính',
    language: 'Ngôn ngữ',
    chooseLanguage: 'Chọn ngôn ngữ',
  },
  footer: {
    tagline:
      'Bộ sưu tập công cụ tiện ích hằng ngày nhanh, chạy ngay trên trình duyệt, dành cho người viết, kỹ sư, marketer và chuyên viên phân tích. Được xây dựng để chạy ngay trên thiết bị của bạn với mức tiêu tốn tài nguyên tối thiểu.',
    categories: 'Danh mục',
    explore: 'Khám phá',
    trustLegal: 'Tin cậy & Pháp lý',
    home: 'Trang chủ',
    allToolsDirectory: 'Danh mục tất cả công cụ',
    blog: 'Blog',
    aboutUs: 'Về chúng tôi',
    contact: 'Liên hệ',
    privacyPolicy: 'Chính sách bảo mật',
    termsOfService: 'Điều khoản dịch vụ',
    xmlSitemap: 'Sitemap XML',
    rightsReserved: 'Đã đăng ký bản quyền.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: 'Chúng tôi dùng cookie và công cụ phân tích để hiểu cách trang web được sử dụng và cải thiện trang. Bạn có thể chấp nhận hoặc từ chối.',
    accept: 'Chấp nhận',
    decline: 'Từ chối',
    cookieSettings: 'Cài đặt cookie',
  },
  common: {
    copy: 'Sao chép',
    copied: 'Đã sao chép',
    download: 'Tải xuống',
    clear: 'Xóa',
    loadSample: 'Tải ví dụ mẫu',
    reset: 'Đặt lại',
    search: 'Tìm kiếm',
    close: 'Đóng',
    cancel: 'Hủy',
    save: 'Lưu',
    submit: 'Gửi',
    loading: 'Đang tải...',
    processing: 'Đang xử lý...',
    upload: 'Tải lên',
    chooseFile: 'Chọn file',
    dragDrop: 'Kéo và thả file của bạn vào đây',
    tryAgain: 'Thử lại',
    openTool: 'Mở công cụ',
    browserSide: 'Chạy trên trình duyệt',
    externalApi: 'API bên ngoài',
  },
  home: {
    seoTitle: 'UtilityFlow – Công cụ tiện ích trực tuyến nhanh, chạy trên trình duyệt',
    seoDescription:
      'Công cụ tiện ích trực tuyến miễn phí, nhanh và đặt quyền riêng tư lên hàng đầu: phân tích văn bản, định dạng cho lập trình viên, máy tính, PDF, kiểm tra SEO và xử lý hình ảnh.',
    seoKeywords: [
      'công cụ tiện ích trực tuyến',
      'công cụ trên trình duyệt',
      'công cụ văn bản',
      'công cụ cho lập trình viên',
      'máy tính trực tuyến',
      'công cụ PDF',
      'công cụ SEO',
    ],
    eyebrow: '{count} công cụ trực tuyến miễn phí · Không cần đăng ký · Riêng tư 100%',
    h1Lead: 'Công cụ trực tuyến miễn phí',
    h1Rest: ' nhanh và riêng tư.',
    heroDescription:
      '{count} tiện ích chạy ngay trên trình duyệt cho văn bản, lập trình, tính toán, mạng xã hội, PDF, SEO và hình ảnh — không cần đăng ký, không cần cài đặt, mọi thứ chạy riêng tư ngay trong trình duyệt của bạn.',
    exploreCategories: 'Khám phá danh mục',
    openDirectory: 'Mở danh mục đầy đủ',
    metrics: {
      toolCategories: 'Danh mục công cụ',
      browserUtilities: 'Tiện ích trên trình duyệt',
      liveTools: 'Công cụ đang hoạt động',
      accountRequired: 'Cần tài khoản',
      none: 'Không cần',
    },
    popular: {
      title: 'Công cụ phổ biến',
      description: 'Những tiện ích hằng ngày được dùng nhiều nhất cho viết lách, lập trình và tính toán.',
      viewDirectory: 'Xem danh mục công cụ',
    },
    categories: {
      title: 'Danh mục công cụ',
      description:
        'Bảy bộ công cụ chuyên biệt, bao phủ viết lách, lập trình, toán học, xuất bản, tài liệu, tối ưu tìm kiếm và xử lý media.',
      includes: 'Bao gồm: {names}',
    },
    directory: {
      title: 'Danh mục tất cả công cụ',
      description:
        'Lọc theo danh mục hoặc từ khóa để đi thẳng tới bất kỳ tiện ích nào đang hoạt động hoặc trang danh mục.',
      filterPlaceholder: 'Lọc danh mục hoặc công cụ...',
      allCategories: 'Tất cả danh mục',
      noMatch: 'Không có danh mục hay công cụ nào khớp với "{query}".',
      resetFilters: 'Đặt lại bộ lọc',
      upcomingUtilities: 'Tiện ích sắp ra mắt: {names}',
      toolsActive: '{count} công cụ đang hoạt động',
      openCategory: 'Mở trang danh mục',
    },
    why: {
      title: 'Vì sao chọn UtilityFlow',
      description: 'Được xây dựng như một lựa chọn gọn gàng, đáng tin cậy thay cho các trang tiện ích đầy quảng cáo.',
      items: [
        {
          title: 'Riêng tư ngay trên trình duyệt',
          description:
            'Các phép tính cốt lõi, biến đổi chuỗi và định dạng chạy trực tiếp trong bộ nhớ của trình duyệt, nên bản nháp nhạy cảm và dữ liệu JSON của bạn luôn ở lại trên thiết bị.',
        },
        {
          title: 'Tải nhanh, nhẹ nhàng',
          description:
            'Các module công cụ được tách riêng và ít phụ thuộc runtime giúp trang tải nhanh, chỉ số Core Web Vitals luôn mượt trên mọi đường truyền.',
        },
        {
          title: 'URL cố định, gọn gàng',
          description:
            'Mỗi tiện ích có đường dẫn riêng, kèm metadata có cấu trúc, ví dụ sử dụng và liên kết sâu đáng tin cậy dù bạn tải lại trang.',
        },
        {
          title: 'Kết quả ổn định, kiểm chứng được',
          description:
            'Các công cụ tập trung vào kết quả xác định, hướng dẫn minh bạch và điều khiển dễ tiếp cận — không popup rườm rà hay chỉ báo gây hiểu lầm.',
        },
      ],
    },
    howItWorks: {
      title: 'Cách hoạt động',
      description: 'Ba bước đơn giản — không tài khoản, không cài đặt, không chờ đợi.',
      steps: [
        {
          title: 'Tìm công cụ của bạn',
          description: 'Tìm kiếm hoặc duyệt danh mục để tìm đúng công cụ bạn cần.',
        },
        {
          title: 'Dùng ngay trong trình duyệt',
          description: 'Mở công cụ và bắt đầu làm việc ngay — không cần cài đặt gì.',
        },
        {
          title: 'Sao chép hoặc tải kết quả',
          description: 'Sao chép kết quả hoặc tải về dưới dạng file, sẵn sàng sử dụng.',
        },
      ],
    },
    faq: {
      title: 'Câu hỏi thường gặp',
      description:
        'Những thông tin quan trọng về cách UtilityFlow vận hành và những gì bạn có thể mong đợi khi có thêm công cụ mới.',
    },
    faqs: [
      {
        question: 'Các công cụ của UtilityFlow có miễn phí và không cần tạo tài khoản không?',
        answer:
          'Có. Cả 85 tiện ích trên trình duyệt của UtilityFlow đều hoàn toàn miễn phí, không cần đăng ký, không bắt đăng nhập, không cần credit hay gói thuê bao.',
      },
      {
        question: 'UtilityFlow có tải văn bản, code hay file của tôi lên máy chủ không?',
        answer:
          'Cả 85 tiện ích cốt lõi trên trình duyệt đều chạy ngay trên trình duyệt web của bạn mà không tải dữ liệu nhập lên đâu cả.',
      },
      {
        question: '85 công cụ được sắp xếp như thế nào trên nền tảng?',
        answer:
          'UtilityFlow gồm bảy danh mục chính (Văn bản & Viết lách, Lập trình viên, Máy tính, Mạng xã hội, PDF, SEO và Công cụ hình ảnh & file) với tổng cộng 85 công cụ trên trình duyệt được tích hợp trong cùng một nền tảng.',
      },
      {
        question: 'Tôi có thể đánh dấu hoặc chia sẻ liên kết trực tiếp tới một công cụ cụ thể không?',
        answer:
          'Có. Mỗi công cụ và danh mục đều có URL cố định, gọn gàng của riêng mình (ví dụ /word-counter/ hay /category/developer-tools/) — mở là chạy ngay và vẫn hoạt động khi tải lại trang.',
      },
      {
        question: 'UtilityFlow có chạy mượt trên điện thoại và máy tính bảng không?',
        answer:
          'Có. Mọi bố cục, điều khiển điều hướng và khu vực làm việc tương tác — gồm cả Chế độ Sáng và Chế độ Tối — đều được thiết kế ưu tiên cho di động, với vùng chạm dễ thao tác và lưới responsive.',
      },
    ],
    trustLine: 'Mọi công cụ đều miễn phí • Không cần đăng ký • Chạy ngay trong trình duyệt của bạn',
  },
  directory: {
    seoTitle: 'Duyệt tất cả 85 công cụ tiện ích trực tuyến miễn phí | UtilityFlow',
    seoDescription:
      'Duyệt và tìm kiếm mọi tiện ích trên trình duyệt cùng các danh mục của UtilityFlow — sắp xếp theo viết lách, lập trình, máy tính, PDF, SEO và hình ảnh.',
    seoKeywords: ['danh mục công cụ tiện ích', 'tất cả công cụ trực tuyến', 'công cụ trình duyệt miễn phí'],
    title: 'Danh mục tất cả công cụ',
    description:
      'Duyệt tất cả {count} tiện ích đang hoạt động trên UtilityFlow hoặc khám phá bảy trang danh mục.',
    searchPlaceholder: 'Tìm theo tên công cụ, từ khóa hoặc danh mục...',
    showing: 'Đang hiển thị {tools} công cụ đang hoạt động trong {categories} danh mục',
    all: 'Tất cả',
    availableTools: 'Công cụ khả dụng',
    categorySuites: 'Bộ danh mục',
    visitHub: 'Ghé trang {name}',
    plannedToolsInclude: 'Các công cụ trong danh mục này gồm: {names}',
    noMatch: 'Không có danh mục hay công cụ nào khớp với bộ lọc của bạn.',
    clearFilters: 'Xóa bộ lọc',
  },
  category: {
    plannedCount: '{count} công cụ',
    toolsCount: '{count} công cụ',
    toolsLive: '{count} công cụ đang hoạt động',
    ofToolsLive: '{count} trên {total} công cụ đang hoạt động',
    availableTools: '{name} khả dụng',
    exploreOther: 'Khám phá danh mục khác',
    scheduledTitle: 'Sắp có thêm công cụ',
    scheduledDescription:
      'Trang danh mục này đang hoạt động và đã được lập chỉ mục trong kiến trúc {name}. Các trang công cụ riêng lẻ chạy trên trình duyệt sẽ sớm được bổ sung tại đây.',
    plannedToolsTitle: 'Các công cụ trong danh mục này:',
  },
  toolPage: {
    howToUse: 'Cách dùng {name}',
    practicalExamples: 'Ví dụ thực tế',
    faqs: 'Câu hỏi thường gặp',
    keyBenefits: 'Lợi ích chính',
    commonUseCases: 'Trường hợp dùng phổ biến',
    runsLocally: 'Chạy ngay trên trình duyệt của bạn',
    externalApi: 'Tích hợp API bên ngoài',
    loadingWorkspace: 'Đang tải khu vực làm việc {name}...',
    input: 'Đầu vào',
    output: 'Đầu ra',
    relatedTitle: 'Công cụ liên quan',
    relatedDescription: 'Tiếp tục quy trình làm việc của bạn với các tiện ích bổ trợ.',
    browseAll: 'Duyệt tất cả {name}',
    moreToolsIn: 'Thêm công cụ trong',
    willAppear: 'sẽ sớm xuất hiện tại đây.',
    bylineAuthor: 'Viết bởi Bilal',
    lastUpdated: 'Cập nhật lần cuối: tháng 11 năm 2026',
  },
  blog: {
    seoTitle: 'Hướng dẫn, bài học & tài nguyên | Blog UtilityFlow',
    seoDescription:
      'Hướng dẫn thực tế, bài học từng bước và tài nguyên cho mọi công cụ UtilityFlow — văn bản, lập trình, máy tính, PDF, SEO, mạng xã hội và hình ảnh.',
    title: 'Hướng dẫn, bài học & tài nguyên',
    description:
      'Hướng dẫn thực tế và bài học từng bước cho mọi công cụ UtilityFlow. Tìm hiểu từng công cụ làm gì, dùng ra sao cho hiệu quả và làm thế nào để có kết quả tốt nhất.',
    searchPlaceholder: 'Tìm bài viết...',
    searchArticles: 'Tìm bài viết',
    noResults: 'Không tìm thấy bài viết nào.',
    featured: 'Bài viết nổi bật',
    latest: 'Bài viết mới nhất',
    browseByCategory: 'Duyệt theo danh mục',
    relatedArticles: 'Bài viết liên quan',
    relatedTools: 'Công cụ liên quan',
    readingTime: 'Đọc trong {minutes} phút',
    publishedOn: 'Đăng ngày {date}',
    updatedOn: 'Cập nhật ngày {date}',
    byEditorial: 'Đội ngũ biên tập UtilityFlow',
    tableOfContents: 'Mục lục',
    prevArticle: 'Bài viết trước',
    nextArticle: 'Bài viết tiếp theo',
    share: 'Chia sẻ',
    tryTool: 'Thử công cụ',
    guidesInCategory: 'Hướng dẫn trong danh mục này',
    categoryGuidesWord: 'Hướng dẫn',
    noArticlesYet: 'Chưa có bài viết nào',
    noArticlesYetDescription: 'Hướng dẫn cho mục này đang được chuẩn bị. Hãy quay lại sau.',
    backToBlog: 'Quay lại blog',
    allArticles: 'Tất cả bài viết',
    notAvailableInLanguage: 'Bài viết này chưa có phiên bản tiếng Việt.',
    minRead: 'phút đọc',
  },
  search: {
    placeholder:
      'Tìm công cụ hoặc danh mục (ví dụ: word counter, JSON, PDF, máy tính)...',
    search: 'Tìm kiếm',
    tools: 'Công cụ',
    categories: 'Danh mục',
    noResults: 'Không tìm thấy công cụ hay danh mục nào khớp với "{query}".',
    viewDirectory: 'Xem danh mục đầy đủ',
    clearSearch: 'Xóa tìm kiếm',
    ariaLabel: 'Tìm công cụ hoặc danh mục',
  },
  notFound: {
    seoTitle: 'Không tìm thấy trang (404) | UtilityFlow',
    seoDescription:
      'Không tìm thấy công cụ hoặc trang bạn yêu cầu trên UtilityFlow. Hãy tìm trong danh mục tiện ích hoặc duyệt các danh mục.',
    eyebrow: '404 · Không tìm thấy',
    title: 'Chúng tôi không tìm thấy trang đó.',
    description:
      'URL có thể đã thay đổi, hoặc tiện ích này chưa được phát hành. Hãy tìm kiếm bên dưới hoặc duyệt các danh mục để tìm thứ bạn cần.',
    returnHome: 'Về trang chủ',
    browseDirectory: 'Duyệt danh mục',
    browseCategories: 'Duyệt danh mục công cụ',
  },
  about: {
    seoTitle: 'Về UtilityFlow – Nền tảng công cụ trực tuyến chạy trên trình duyệt',
    seoDescription:
      'Tìm hiểu cách UtilityFlow xây dựng các tiện ích trình duyệt nhanh, đặt quyền riêng tư lên hàng đầu trong bảy danh mục — không tài khoản, không rườm rà, không tải dữ liệu lên một cách không cần thiết.',
    title: 'Về UtilityFlow',
    intro:
      'UtilityFlow là một nền tảng web độc lập, xây dựng 85 tiện ích tập trung, đáng tin cậy cho công việc số hằng ngày.',
    whyTitle: 'Vì sao chúng tôi xây dựng UtilityFlow',
    whyP1:
      'Những việc trực tuyến quen thuộc — đếm từ, kiểm tra JSON, kiểm tra giới hạn ký tự, tính khoản vay, hay nén ảnh — thường đẩy người dùng tới các trang web chậm, đầy quảng cáo chen ngang, nút tải xuống khó hiểu hay bắt buộc đăng ký.',
    whyP2:
      'Mục tiêu của chúng tôi rất rõ ràng: mỗi tiện ích có một trang riêng gọn gàng, tải nhanh, giải thích rõ cách công cụ hoạt động và chạy trực tiếp trong trình duyệt của bạn bất cứ khi nào chuẩn web cho phép.',
    orgTitle: 'Ai vận hành UtilityFlow',
    orgP1:
      'UtilityFlow là một dự án độc lập do Bilal tạo ra và duy trì — một người làm sản phẩm xây dựng các công cụ web miễn phí trong thời gian rảnh. Đằng sau trang web không có công ty, không có vốn đầu tư và không có đội ngũ nhân viên — mọi công cụ, hướng dẫn và trang trợ giúp đều do một người thiết kế, xây dựng và kiểm thử. Cả 85 công cụ đều miễn phí, không cần tài khoản hay gói thuê bao. Dòng ghi công ở chân trang nhắc tới Shaheen — người đã động viên và truyền cảm hứng cho dự án, và tên của người ấy xuất hiện trên mọi trang như một lời nhắc về nơi ý tưởng bắt đầu.',
    orgP2:
      'Vì dự án nhỏ và độc lập, mọi quyết định đều đơn giản: công cụ nào chậm, khó hiểu hay sai thì sẽ được sửa. Phản hồi gửi qua trang liên hệ đến thẳng tay người có thể sửa code, và góp ý của khách truy cập đã tạo ra những công cụ mới và cải tiến trên khắp trang web.',
    howTitle: 'Cách các công cụ được xây dựng và kiểm thử',
    howP1:
      'Mỗi tiện ích bắt đầu từ một công việc rõ ràng, duy nhất — đếm từ, gộp PDF, định dạng JSON — và được xây dựng thành một trang tập trung, làm tốt đúng việc đó. Bất cứ khi nào chuẩn web cho phép, mọi xử lý diễn ra hoàn toàn trong trình duyệt của bạn, nên văn bản và file của bạn không cần rời khỏi thiết bị. Mỗi trang công cụ đều giải thích các bước bằng hướng dẫn ngắn, kèm ví dụ thực tế và trả lời những câu hỏi thường gặp nhất, để bạn tự đánh giá kết quả thay vì tin vào một "hộp đen".',
    howP2:
      'Trước khi ra mắt, mỗi công cụ được chạy thử với dữ liệu thật trên trình duyệt máy tính và điện thoại, gồm cả các trường hợp biên như dữ liệu trống, văn bản rất dài và loại file bất thường. Khi có lỗi hay phép tính sai, bản sửa được phát hành dưới dạng cập nhật trang web và trang được kiểm tra lại. Mọi công cụ đều chạy hoàn toàn trong trình duyệt của bạn — không có gì bạn nhập bị gửi lên máy chủ.',
    whoTitle: 'UtilityFlow dành cho ai',
    whoP1:
      'UtilityFlow dành cho bất kỳ ai cần câu trả lời nhanh từ một công cụ mà không phải cài phần mềm hay tạo tài khoản: sinh viên kiểm tra số từ của bài luận, người viết định dạng bản nháp, lập trình viên kiểm tra JSON hay mã hóa URL, marketer kiểm tra giới hạn ký tự, và chủ doanh nghiệp nhỏ tính khoản vay hay mức giảm giá. Nếu một việc chỉ mất chưa tới một phút, thì công cụ cho việc đó cũng phải mất chưa tới một phút — đó là tiêu chuẩn mà mọi trang trên trang web này đều phải đạt.',
    principlesTitle: 'Nguyên tắc kỹ thuật cốt lõi',
    principles: [
      {
        title: 'Xử lý phía máy khách',
        description:
          'Các tiện ích văn bản, code, toán học và file cục bộ xử lý dữ liệu nhập trong bộ nhớ trình duyệt, nên dữ liệu làm việc của bạn không bị gửi tới máy chủ từ xa.',
      },
      {
        title: 'Thông báo API minh bạch',
        description:
          'Nếu một tiện ích chuyên biệt cần tra cứu bên ngoài hay gọi máy chủ, chúng tôi sẽ nói rõ ngay trên trang của công cụ đó trước khi bạn chạy bất cứ thứ gì.',
      },
      {
        title: 'Giao diện dễ tiếp cận',
        description:
          'Điều hướng bằng bàn phím, độ tương phản dễ đọc, phản hồi lỗi rõ ràng và điều khiển responsive trên di động được tích hợp sẵn trong mọi mẫu trang.',
      },
      {
        title: 'Phát hành theo module',
        description:
          'Các công cụ được phát hành và kiểm chứng theo từng danh mục, để mỗi tiện ích đều được kiểm thử chức năng kỹ lưỡng và có tài liệu đầy đủ.',
      },
    ],
    categoriesTitle: 'Bảy danh mục công cụ',
    feedbackTitle: 'Bạn có góp ý hay đề xuất?',
    feedbackBefore:
      'Nếu bạn phát hiện trường hợp biên trong phép tính, vấn đề về khả năng tiếp cận, hay muốn đề xuất một tiện ích mới, hãy liên hệ qua',
    feedbackLink: 'Trang liên hệ',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Liên hệ UtilityFlow – Hỗ trợ, báo lỗi & góp ý',
    seoDescription:
      'Liên hệ đội ngũ UtilityFlow để báo lỗi, đề xuất công cụ tiện ích mới, hay hỏi về quyền riêng tư và điều khoản.',
    title: 'Liên hệ với chúng tôi',
    intro:
      'Gửi báo lỗi, đề xuất công cụ hay thắc mắc chung. Chúng tôi đọc mọi tin nhắn và ưu tiên sửa những lỗi ảnh hưởng tới độ chính xác và khả năng tiếp cận của công cụ.',
    aboutTitle: 'Bạn có thể viết về những gì',
    aboutP1:
      'Hãy dùng biểu mẫu này cho mọi vấn đề liên quan tới trang web. Khi báo lỗi, hãy cho biết bạn đang dùng công cụ nào, bạn đã nhập gì và bạn mong đợi điều gì xảy ra — càng chi tiết, lỗi càng nhanh được tái hiện và sửa. Khi đề xuất công cụ mới, hãy mô tả công việc mà nó nên làm; những ý tưởng được nhiều khách truy cập yêu cầu sẽ được ưu tiên. Bạn cũng có thể chỉ ra phép tính sai, hướng dẫn khó hiểu, hay lỗi dịch thuật trên bất kỳ trang nào.',
    aboutP2:
      'Câu hỏi về quyền riêng tư và pháp lý cũng được hoan nghênh. Nếu bạn muốn xóa một bình luận đã đăng, hãy kèm trang công cụ và tên bạn đã dùng, chúng tôi sẽ gỡ xuống. Với mọi vấn đề khác — ý tưởng hợp tác, câu hỏi báo chí, hay nhận xét chung về trang web — bạn đều có thể dùng cùng biểu mẫu này, hoặc gửi email trực tiếp tới địa chỉ trên trang này.',
    responseTitle: 'Điều gì xảy ra sau khi bạn gửi tin nhắn',
    responseP1:
      'Mọi tin nhắn đều do chính người xây dựng và duy trì UtilityFlow đọc — không có bộ phận hỗ trợ và không có hàng đợi trả lời tự động. Báo lỗi và kết quả sai được kiểm tra trước, vì một công cụ hỏng sẽ ảnh hưởng tới mọi người dùng. Đề xuất công cụ được thu thập và cân nhắc dựa trên số người sẽ dùng và mức độ phù hợp với hướng tiếp cận "chạy trên trình duyệt" của trang.',
    responseP2:
      'Bạn không cần tài khoản để liên hệ, và chúng tôi chỉ dùng địa chỉ email của bạn để trả lời tin nhắn. Nếu không muốn dùng biểu mẫu, địa chỉ email trực tiếp trên trang này cũng tới cùng một hộp thư.',
    name: 'Họ tên',
    email: 'Địa chỉ email',
    topic: 'Chủ đề',
    message: 'Nội dung tin nhắn',
    submit: 'Gửi tin nhắn',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Mô tả chi tiết công cụ, lỗi hay câu hỏi của bạn...',
    topics: [
      'Đề xuất công cụ',
      'Báo lỗi',
      'Sửa nội dung hoặc SEO',
      'Hỏi về quyền riêng tư hoặc pháp lý',
      'Câu hỏi chung',
    ],
    errors: {
      name: 'Vui lòng nhập họ tên của bạn.',
      emailEmpty: 'Vui lòng nhập địa chỉ email của bạn.',
      emailInvalid: 'Vui lòng nhập địa chỉ email hợp lệ.',
      subject: 'Vui lòng chọn hoặc nhập chủ đề.',
      message: 'Vui lòng nhập ít nhất 10 ký tự vào tin nhắn của bạn.',
    },
    successTitle: 'Đã gửi tin nhắn',
    successThanks:
      'Cảm ơn bạn, {name}. Tin nhắn của bạn đã được gửi và chúng tôi sẽ phản hồi sớm.',
    successNote:
      'Nếu bạn muốn bổ sung thêm, bạn cũng có thể liên hệ trực tiếp với chúng tôi tại',
    sending: 'Đang gửi…',
    sendError: 'Không gửi được tin nhắn của bạn. Vui lòng thử lại.',
    sendAnother: 'Gửi tin nhắn khác',
    directEmail: 'Email trực tiếp',
    directEmailText: 'Muốn viết trực tiếp? Hãy gửi email cho đội ngũ của chúng tôi tại:',
  },
  privacy: {
    seoTitle: 'Chính sách bảo mật – Cách chúng tôi bảo vệ dữ liệu của bạn | UtilityFlow',
    seoDescription:
      'Đọc Chính sách bảo mật của UtilityFlow về xử lý công cụ trên trình duyệt, cookie, nhật ký máy chủ và công cụ phân tích.',
    title: 'Chính sách bảo mật',
    lastUpdated: 'Cập nhật lần cuối: tháng 11 năm 2026',
    sections: [
      {
        title: '1. Tổng quan',
        paragraphs: [
          'UtilityFlow được thiết kế xoay quanh việc xử lý ngay trên trình duyệt của bạn. Chính sách bảo mật này giải thích những thông tin nào được xử lý khi bạn truy cập trang web, cách các tiện ích xử lý dữ liệu nhập, và cách cookie cùng công cụ phân tích hoạt động trên trang.',
        ],
      },
      {
        title: '2. Dữ liệu nhập của công cụ & xử lý trên trình duyệt',
        paragraphs: [
          'Văn bản, con số, đoạn code và file bạn nhập vào 85 công cụ trên trình duyệt của chúng tôi được xử lý ngay trong phiên trình duyệt của bạn, không rời khỏi thiết bị.',
          'Bình luận đăng dưới các công cụ chỉ yêu cầu tên và nội dung bình luận. Tên và nội dung bạn gửi được lưu trên nền tảng hosting của chúng tôi và hiển thị công khai trên trang của công cụ đó, kèm theo ngày đăng. Chúng tôi không yêu cầu địa chỉ email hay tài khoản để bình luận, và không dùng dữ liệu bình luận cho quảng cáo. Nếu bạn muốn xóa một bình luận, hãy liên hệ với chúng tôi kèm trang và tên đã dùng, chúng tôi sẽ xóa bình luận đó.',
        ],
      },
      {
        title: '3. Nhật ký hosting & dữ liệu kỹ thuật',
        paragraphs: [
          'UtilityFlow được lưu trữ trên Cloudflare Pages. Như các nhà cung cấp hosting tiêu chuẩn, mạng biên của chúng tôi có thể tự động xử lý metadata của yêu cầu HTTP tiêu chuẩn (như địa chỉ IP, user-agent của trình duyệt, URL được yêu cầu và thời gian) để phân phối trang ổn định, ngăn chặn lạm dụng và giữ an toàn.',
          'Chúng tôi không kết hợp nhật ký hosting với bất kỳ dữ liệu nào khác để xác định từng khách truy cập, và không bán hay chia sẻ dữ liệu nhật ký với nhà quảng cáo. Nhật ký chỉ tồn tại để vận hành và bảo vệ dịch vụ.',
        ],
      },
      {
        title: '4. Cookie & công cụ phân tích',
        paragraphs: [
          'UtilityFlow hiện không hiển thị quảng cáo của bên thứ ba.',
          'Chúng tôi cũng dùng Google Analytics 4 để hiểu tổng thể cách trang web được sử dụng; công cụ này chỉ chạy sau khi bạn chấp nhận cookie trong banner.',
        ],
      },
      {
        title: '5. Liên kết ngoài',
        paragraphs: [
          'Tài liệu hay trang công cụ của chúng tôi có thể liên kết tới các trang web bên ngoài. Chúng tôi không chịu trách nhiệm về thực tiễn bảo mật hay nội dung của các trang web bên thứ ba.',
          'Liên kết ngoài mở trong tab mới khi có thể. Trước khi nhập thông tin cá nhân trên bất kỳ trang được liên kết nào, vui lòng xem chính sách bảo mật của chính trang đó.',
        ],
      },
      {
        title: '6. Lưu giữ dữ liệu',
        paragraphs: [
          'Thông tin được xử lý trong trình duyệt của bạn không bao giờ được gửi cho chúng tôi, nên không có gì để lưu giữ. Bình luận được giữ cho tới khi bị xóa — bởi chúng tôi hoặc theo yêu cầu của bạn. Nhật ký hosting và hồ sơ bảo mật chỉ được giữ trong thời gian giới hạn mà nhà cung cấp hosting cần để vận hành và bảo vệ dịch vụ.',
        ],
      },
      {
        title: '7. Quyền và lựa chọn của bạn',
        paragraphs: [
          'Bạn có thể chặn hoặc xóa cookie trong cài đặt trình duyệt bất cứ lúc nào. Nếu bạn đã đăng bình luận, bạn có thể yêu cầu xóa bằng cách liên hệ với chúng tôi. Vì các công cụ chạy trong trình duyệt của bạn và chúng tôi không lưu tài khoản hay hồ sơ, nên không có file dữ liệu cá nhân nào để tải xuống hay chỉnh sửa — nhưng mọi câu hỏi về dữ liệu của bạn đều sẽ được trả lời nếu bạn viết thư cho chúng tôi.',
        ],
      },
      {
        title: '8. Quyền riêng tư của trẻ em',
        paragraphs: [
          'UtilityFlow là trang web đa dụng và không hướng tới trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân của trẻ em. Nếu bạn là cha mẹ hay người giám hộ và tin rằng một trẻ em đã đăng bình luận trên trang, hãy liên hệ với chúng tôi và chúng tôi sẽ xóa bình luận đó.',
        ],
      },
      {
        title: '9. Thay đổi chính sách này',
        paragraphs: [
          'Chúng tôi có thể cập nhật Chính sách bảo mật này khi thêm công cụ, đổi nhà cung cấp, hay điều chỉnh cách trang web hoạt động. Ngày "Cập nhật lần cuối" ở đầu trang cho biết lần sửa đổi gần nhất. Tiếp tục sử dụng trang web sau khi có thay đổi nghĩa là bạn chấp nhận chính sách đã cập nhật.',
        ],
      },
    ],
    contactTitle: '10. Liên hệ',
    contactBefore:
      'Nếu bạn có câu hỏi về Chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua',
    contactLink: 'Trang liên hệ',
    contactMiddle: 'hoặc gửi email tới',
  },
  terms: {
    seoTitle: 'Điều khoản dịch vụ – Sử dụng công cụ UtilityFlow | UtilityFlow',
    seoDescription:
      'Xem Điều khoản dịch vụ điều chỉnh việc sử dụng các tiện ích trình duyệt UtilityFlow, sở hữu trí tuệ, tuyên bố miễn trừ về độ chính xác và giới hạn trách nhiệm.',
    title: 'Điều khoản dịch vụ',
    lastUpdated: 'Cập nhật lần cuối: tháng 11 năm 2026',
    sections: [
      {
        title: '2. Sử dụng được phép',
        paragraphs: [
          'Bạn có thể dùng UtilityFlow cho các công việc cá nhân, giáo dục và công việc kinh doanh. Bạn đồng ý không tự động tạo lưu lượng truy cập lạm dụng, không cố gắng làm gián đoạn việc phân phối trang web, không đảo ngược kỹ thuật các biện pháp bảo vệ, và không dùng bất kỳ tiện ích nào cho hoạt động trái pháp luật.',
          'Bạn có thể liên kết tới các công cụ của chúng tôi và chia sẻ kết quả. Bạn không được giới thiệu công cụ của chúng tôi như của riêng mình, sao chép thiết kế hay nội dung của trang rồi đăng lại như một dịch vụ cạnh tranh, hay dùng trang web theo cách khiến người khác hiểu sai nguồn gốc của kết quả.',
        ],
      },
      {
        title: '3. Tuyên bố miễn trừ về độ chính xác & thông tin',
        paragraphs: [
          'Dù chúng tôi kiểm thử cẩn thận mọi tiện ích, tất cả công cụ, phép tính, chuyển đổi và kiểm tra SEO đều được cung cấp trên cơ sở "nguyên trạng" và "theo khả năng sẵn có". Kết quả nên được kiểm chứng độc lập trước khi đưa ra quyết định tài chính, pháp lý, y tế hay kỹ thuật sản xuất.',
          'Các phép tính như khoản vay, ước tính thuế và chuyển đổi tiền tệ chỉ là công cụ hỗ trợ lập kế hoạch, không phải lời khuyên chuyên môn. Con số có thể thay đổi theo lãi suất, quy định và cách làm tròn, vì vậy hãy xác nhận các con số quan trọng với chuyên gia có trình độ hoặc nguồn chính thức trước khi hành động.',
        ],
      },
      {
        title: '4. Sở hữu trí tuệ',
        paragraphs: [
          'Giao diện, tài sản thương hiệu, tài liệu và mã nguồn của UtilityFlow được bảo vệ bởi luật sở hữu trí tuệ hiện hành. Bạn giữ toàn quyền sở hữu đối với mọi văn bản, code, tài liệu hay hình ảnh mà bạn xử lý bằng các tiện ích phía máy khách của chúng tôi.',
          'UtilityFlow là một dự án độc lập, không liên kết, không được chứng thực bởi, và không liên quan tới YouTube, Instagram, Google hay bất kỳ thương hiệu bên thứ ba nào khác được nhắc tới trên trang này.',
        ],
      },
      {
        title: '5. Giới hạn trách nhiệm',
        paragraphs: [
          'Trong phạm vi tối đa mà pháp luật cho phép, UtilityFlow và những người đóng góp sẽ không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hay hệ quả nào phát sinh từ việc bạn sử dụng, hoặc không thể sử dụng, nền tảng này.',
        ],
      },
      {
        title: '6. Nội dung người dùng và bình luận',
        paragraphs: [
          'Bạn giữ toàn quyền sở hữu đối với mọi thứ bạn nhập vào công cụ hay đăng dưới dạng bình luận. Khi đăng bình luận, bạn cho phép chúng tôi hiển thị công khai bình luận đó trên trang công cụ liên quan. Không đăng bất cứ thứ gì trái pháp luật, gây hiểu lầm, hay gây hại cho người khác, và không đăng thông tin cá nhân của người khác. Chúng tôi có thể xóa các bình luận vi phạm quy định này hoặc bị báo cáo, mà không cần thông báo trước.',
        ],
      },
      {
        title: '7. Dịch vụ bên thứ ba',
        paragraphs: [
          'Một số tính năng dựa vào các dịch vụ độc lập của bên thứ ba: biểu mẫu liên hệ được gửi qua FormSubmit và trang web được lưu trữ trên Cloudflare. Mỗi dịch vụ này có điều khoản và chính sách bảo mật riêng, và việc bạn sử dụng chúng được điều chỉnh bởi các tài liệu đó. UtilityFlow không chịu trách nhiệm về tính khả dụng hay thực tiễn của các dịch vụ bên thứ ba.',
        ],
      },
      {
        title: '8. Tính khả dụng của dịch vụ',
        paragraphs: [
          'UtilityFlow là dịch vụ miễn phí và chúng tôi không đảm bảo mọi công cụ luôn khả dụng. Công cụ có thể được thay đổi, cải tiến hay gỡ bỏ, và trang web có thể tạm thời không truy cập được để bảo trì. Chúng tôi cố gắng giữ dịch vụ vận hành trơn tru, nhưng không chịu trách nhiệm về gián đoạn hay bất kỳ thiệt hại nào do thời gian ngừng hoạt động gây ra.',
        ],
      },
    ],
    acceptanceTitle: '1. Chấp nhận điều khoản',
    acceptanceBefore:
      'Khi truy cập hoặc sử dụng UtilityFlow, bạn đồng ý tuân thủ Điều khoản dịch vụ này và',
    acceptanceLink: 'Chính sách bảo mật',
    acceptanceAfter:
      ' của chúng tôi. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng ngừng sử dụng trang web.',
    changesTitle: '9. Thay đổi & liên hệ',
    changesBefore:
      'Chúng tôi có thể cập nhật Điều khoản dịch vụ này khi có công cụ mới được phát hành. Mọi câu hỏi có thể gửi tới',
    changesLink: 'Trang liên hệ',
    changesAfter: '.',
  },
};
