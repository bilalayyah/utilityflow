// Detail content for VI tools — batch 6.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
    instructions: [
      {
        title: 'Nhập tiêu đề trang và mô tả meta',
        description:
          'Điền Tiêu đề trang (nên dài 30–60 ký tự) và Mô tả meta (120–160 ký tự), đồng thời theo dõi chỉ báo độ dài trực tiếp bên cạnh mỗi ô nhập.',
      },
      {
        title: 'Đặt URL canonical và chỉ thị lập chỉ mục',
        description:
          'Nhập URL canonical đầy đủ của trang và chọn xem trình thu thập dữ liệu có nên lập chỉ mục trang và theo các liên kết trên trang hay không.',
      },
      {
        title: 'Thêm thẻ Open Graph',
        description:
          'Điền tiêu đề, mô tả, loại và URL hình ảnh Open Graph (nên dùng ảnh 1200×630 pixel) để liên kết hiển thị đẹp khi được chia sẻ.',
      },
      {
        title: 'Cấu hình Thẻ Twitter/X',
        description:
          'Chọn summary hoặc summary_large_image rồi kiểm tra tiêu đề, mô tả và hình ảnh mà X sẽ hiển thị cho thẻ đó.',
      },
      {
        title: 'Xem trước thẻ mạng xã hội trực tiếp',
        description:
          'Xem bảng xem trước để biết liên kết sẽ trông như thế nào trong dòng tin mạng xã hội, rồi sửa lỗi cắt ngắn hay ảnh bị thiếu trước khi đăng.',
      },
      {
        title: 'Sao chép hoặc tải đoạn mã HTML',
        description:
          'Sao chép đoạn mã HTML đã được thoát ký tự vào phần <head> của trang, hoặc tải tệp meta-tags.html để dùng lại khối thẻ trong các mẫu của bạn.',
      },
    ],
    examples: [
      {
        title: 'Khối Open Graph và canonical chuẩn cho website',
        input: 'Tiêu đề: UtilityFlow · Loại: website · Thẻ: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* và twitter:*',
        explanation: 'Thoát đúng ký tự dấu ngoặc kép và dấu & bên trong giá trị thuộc tính.',
      },
      {
        title: 'Thẻ loại Article cho bài viết blog',
        input: 'Tiêu đề: Cách nén ảnh · Loại: article · Thẻ: summary_large_image',
        output: 'Khối <head> đầy đủ với og:type=article, kèm canonical và Thẻ Twitter',
        explanation: 'Loại Article giúp các nền tảng mạng xã hội biết liên kết dẫn tới một bài viết blog chứ không phải trang chủ.',
      },
    ],
    benefits: [
      'Tự động thoát ký tự HTML &, ", < và > trong thuộc tính thẻ',
      'Gộp thẻ head cho SEO, thẻ Open Graph và Thẻ Twitter/X trong cùng một đoạn mã nhất quán',
      'Hiển thị bản xem trước liên kết được chia sẻ như trên dòng tin mạng xã hội trước khi triển khai',
      'Cho phép tải đoạn mã meta-tags.html độc lập để dùng lại',
    ],
    useCases: [
      'Ra mắt trang đích, microsite tiếp thị và trung tâm sản phẩm SaaS',
      'Chuẩn hóa kích thước ảnh Open Graph và loại thẻ trên các bài viết',
      'Kiểm tra chỉ thị index/noindex và URL canonical trước khi phát hành bản chính thức',
      'Bàn giao mẫu <head> sạch sẽ từ đội tiếp thị cho kỹ sư front-end',
    ],
    faqs: [
      {
        question: 'Tôi có cần thẻ riêng cho cả Open Graph và Twitter/X không?',
        answer:
          'X sẽ dùng Open Graph làm phương án dự phòng cho tiêu đề và mô tả khi cần, nhưng việc khai báo rõ twitter:card (summary_large_image) cùng với og:* sẽ đảm bảo ảnh xem trước rộng hiển thị ổn định ở mọi nơi. Cách làm này tránh tình trạng mỗi nền tảng tự suy đoán định dạng thẻ, nhờ đó liên kết của bạn trông chuyên nghiệp và nhất quán dù được chia sẻ trên Facebook, LinkedIn hay X.',
      },
      {
        question: 'Ảnh og:image của tôi nên có kích thước bao nhiêu?',
        answer:
          'Hãy dùng ảnh 1200×630 pixel, tương ứng tỉ lệ khung hình 1,91:1, được lưu trữ trên một URL HTTPS và không bị robots.txt chặn. Kích thước này là chuẩn mà Facebook, LinkedIn và X đều hỗ trợ tốt, giúp ảnh xem trước hiển thị sắc nét trên cả máy tính và điện thoại mà không bị cắt xén hay méo hình.',
      },
      {
        question: 'Thêm <meta name="keywords"> có còn giúp xếp hạng trên Google không?',
        answer:
          'Các công cụ tìm kiếm lớn đã bỏ qua thẻ meta keywords từ lâu vì lịch sử lạm dụng spam, vì vậy công cụ này giữ cho phần <head> của bạn gọn gàng với tiêu đề, mô tả, canonical và thẻ mạng xã hội thực sự có tác dụng. Thay vì nhồi từ khóa vào thẻ đã lỗi thời, hãy đầu tư vào nội dung chất lượng và tiêu đề mô tả đúng trang.',
      },
      {
        question: 'Trình tạo Thẻ Meta có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn, vì vậy tiêu đề, mô tả và URL của bạn không bao giờ được tải lên máy chủ nào. Bạn có thể tạo bao nhiêu bộ thẻ tùy thích mà không cần đăng ký tài khoản, và mọi dữ liệu bạn nhập đều ở lại trên thiết bị của chính bạn.',
      },
      {
        question: 'Tôi có cần cài đặt gì để dùng Trình tạo Thẻ Meta không?',
        answer:
          'Không. Công cụ hoạt động trên mọi trình duyệt hiện đại mà không cần cài đặt gì thêm, và bạn có thể tạo thẻ trên cả máy tính lẫn điện thoại. Chỉ cần mở trang, nhập thông tin rồi sao chép đoạn mã đã tạo, không cần tiện ích mở rộng hay phần mềm hỗ trợ nào khác.',
      },
      {
        question: 'Độ dài lý tưởng cho tiêu đề meta là bao nhiêu?',
        answer:
          'Hãy nhắm tới 30–60 ký tự để toàn bộ tiêu đề vừa trong kết quả tìm kiếm và thẻ mạng xã hội mà không bị cắt bằng dấu ba chấm. Tiêu đề quá dài sẽ mất phần quan trọng nhất ở cuối, còn tiêu đề quá ngắn lại lãng phí cơ hội mô tả trang và thu hút lượt nhấp từ người đọc.',
      },
      {
        question: 'Độ dài lý tưởng cho mô tả meta là bao nhiêu?',
        answer:
          'Hãy giữ mô tả trong khoảng 120–160 ký tự để toàn bộ phần tóm tắt vẫn hiển thị đầy đủ trong kết quả tìm kiếm trên máy tính và điện thoại. Mô tả ngắn gọn, rõ ràng và chứa từ khóa chính sẽ giúp người dùng hiểu trang nói về điều gì và quyết định nhấp vào thay vì kết quả khác.',
      },
      {
        question: 'Trình tạo Thẻ Meta xử lý ký tự đặc biệt trong tiêu đề như thế nào?',
        answer:
          'Công cụ tự động thoát ký tự HTML &, ", < và > bên trong giá trị thuộc tính, nhờ đó dấu ngoặc kép và dấu & không bao giờ phá vỡ mã đánh dấu của trang. Việc thoát ký tự đúng chuẩn cũng giúp trình duyệt và trình thu thập dữ liệu đọc thẻ chính xác, tránh lỗi hiển thị hay lỗi xác thực HTML.',
      },
      {
        question: 'URL canonical là gì và vì sao công cụ này có kèm nó?',
        answer:
          'URL canonical cho công cụ tìm kiếm biết phiên bản nào của trang là bản gốc khi có nhiều trang tương tự nhau, nhờ đó tránh nhầm lẫn về nội dung trùng lặp. Ví dụ, một sản phẩm có thể truy cập qua nhiều URL khác nhau, và thẻ canonical sẽ gom toàn bộ tín hiệu xếp hạng về một địa chỉ duy nhất mà bạn muốn ưu tiên.',
      },
      {
        question: 'Thẻ Open Graph và Thẻ Twitter khác nhau ở điểm nào?',
        answer:
          'Thẻ Open Graph điều khiển bản xem trước liên kết trên Facebook, LinkedIn và các ứng dụng nhắn tin, còn Thẻ Twitter điều khiển cách liên kết đó hiển thị trên X. Hai bộ thẻ có nhiều trường tương tự nhau, nhưng mỗi nền tảng lại ưu tiên bộ thẻ của riêng mình, vì vậy khai báo cả hai sẽ cho bạn quyền kiểm soát đầy đủ nhất.',
      },
      {
        question: 'Tôi nên chọn loại thẻ Twitter nào trong Trình tạo Thẻ Meta?',
        answer:
          'Hãy dùng summary_large_image cho các trang có hình ảnh nổi bật như bài viết và trang sản phẩm, và dùng summary cho trang văn bản thuần túy, nơi ảnh thu nhỏ đã đủ. Thẻ ảnh lớn thu hút ánh nhìn và tăng tỉ lệ nhấp, trong khi thẻ tóm tắt gọn gàng lại phù hợp với trang tài liệu hay trang chính sách.',
      },
      {
        question: 'Tôi có thể xem trước liên kết của mình khi chia sẻ sẽ trông như thế nào không?',
        answer:
          'Có. Bản xem trước thẻ mạng xã hội trực tiếp hiển thị tiêu đề, mô tả và hình ảnh đúng như chúng sẽ xuất hiện trong dòng tin trước khi bạn đăng tải. Nhờ đó bạn phát hiện ngay tiêu đề bị cắt, mô tả quá dài hay ảnh bị thiếu, và sửa lại trong vài giây thay vì phát hiện sau khi đã chia sẻ.',
      },
      {
        question: 'Trình tạo Thẻ Meta có tải nội dung trang của tôi lên đâu không?',
        answer:
          'Không. Mọi thứ chạy cục bộ trong trình duyệt của bạn và không có gì bạn nhập rời khỏi thiết bị. Điều này đặc biệt hữu ích khi bạn làm việc với trang chưa ra mắt hay nội dung nội bộ, vì tiêu đề và URL của bạn không bao giờ đi qua máy chủ của bên thứ ba.',
      },
      {
        question: 'Làm thế nào để thêm thẻ meta đã tạo vào website của tôi?',
        answer:
          'Hãy sao chép đoạn mã rồi dán vào phần <head> trong mẫu trang của bạn, hoặc tải tệp meta-tags.html và dùng lại khối thẻ đó trên nhiều trang. Nếu bạn dùng hệ quản trị nội dung, hãy dán đoạn mã vào trường head tùy chỉnh của trang, sau đó kiểm tra lại bằng công cụ xem trước liên kết của nền tảng.',
      },
      {
        question: 'Khi nào nên dùng chỉ thị robots noindex cùng với Trình tạo Thẻ Meta?',
        answer:
          'Chỉ dùng noindex cho những trang bạn không bao giờ muốn xuất hiện trong kết quả tìm kiếm, chẳng hạn trang cảm ơn, kết quả tìm kiếm nội bộ hay bản staging của một trang đang hoạt động. Đừng dùng noindex cho trang sản phẩm hay bài viết mà bạn muốn người dùng tìm thấy, vì chúng sẽ biến mất khỏi Google sau lần thu thập tiếp theo.',
      },
      {
        question: 'Tôi có thể dùng Trình tạo Thẻ Meta cho bài viết blog hoặc trang sản phẩm không?',
        answer:
          'Có. Hãy đặt og:type thành article cho bài viết blog hoặc product cho trang cửa hàng, để mỗi nền tảng hiển thị đúng định dạng xem trước. Bài viết sẽ có thẻ tác giả và ngày đăng phù hợp, còn trang sản phẩm sẽ hiển thị giá và tình trạng còn hàng khi nền tảng hỗ trợ các trường đó.',
      },
      {
        question: 'Điều gì xảy ra nếu URL og:image của tôi sai hoặc ảnh bị thiếu?',
        answer:
          'Các nền tảng mạng xã hội sẽ không hiển thị ảnh hoặc hiển thị bản xem trước bị lỗi, khiến liên kết trông thiếu chuyên nghiệp và ít người nhấp vào hơn. Vì vậy hãy luôn dùng URL ảnh HTTPS trực tiếp, kiểm tra xem ảnh có tải được không và xem lại bản xem trước trước khi đăng tải.',
      },
      {
        question: 'Trình tạo Thẻ Meta có hỗ trợ trang đa ngôn ngữ không?',
        answer:
          'Công cụ tạo thẻ cho từng trang một, vì vậy hãy đặt og:locale theo ngôn ngữ của trang và tạo một bộ thẻ riêng cho mỗi phiên bản đã dịch. Mỗi bản dịch nên có tiêu đề, mô tả và URL canonical của riêng mình, để công cụ tìm kiếm và mạng xã hội hiển thị đúng ngôn ngữ cho từng đối tượng người đọc.',
      },
      {
        question: 'Tôi có thể tải thẻ meta đã tạo xuống dưới dạng tệp không?',
        answer:
          'Có. Nút tải xuống sẽ lưu một tệp meta-tags.html độc lập chứa toàn bộ đoạn mã đã được thoát ký tự. Bạn có thể lưu tệp này làm mẫu, gửi cho lập trình viên hoặc đưa vào kho mã nguồn của dự án để dùng lại mỗi khi tạo trang mới có cấu trúc tương tự.',
      },
      {
        question: 'Trình tạo Thẻ Meta có tự cải thiện thứ hạng Google của tôi không?',
        answer:
          'Không công cụ nào có thể đảm bảo thứ hạng, nhưng tiêu đề, mô tả và thẻ mạng xã hội chính xác sẽ cải thiện tỉ lệ nhấp và cách trang của bạn được trình bày. Thứ hạng còn phụ thuộc vào chất lượng nội dung, liên kết và trải nghiệm người dùng, còn thẻ meta chỉ giúp trang của bạn trông hấp dẫn hơn trong kết quả tìm kiếm.',
      },
    ],
  },
  'serp-snippet-preview': {
    instructions: [
      {
        title: 'Nhập tiêu đề, mô tả và URL',
        description:
          'Gõ Tiêu đề SEO dự kiến, Mô tả meta, URL trang, cùng Tên trang web hoặc ngày xuất bản nếu có.',
      },
      {
        title: 'Đo chiều rộng theo pixel',
        description:
          'Xem số đo px trực tiếp bên cạnh Tiêu đề SEO — chữ cái rộng như W và M chiếm nhiều pixel ngang hơn chữ l và i.',
      },
      {
        title: 'Xem bản xem trước trên máy tính',
        description:
          'Xem thẻ tìm kiếm trên máy tính để thấy toàn bộ tiêu đề, đường dẫn breadcrumb và mô tả đúng như người dùng máy tính sẽ thấy.',
      },
      {
        title: 'Chuyển sang bản xem trước trên điện thoại',
        description:
          'Chuyển sang chế độ Điện thoại để kiểm tra điểm cắt ngắn hơn và đảm bảo thông điệp chính vẫn xuất hiện trên màn hình nhỏ.',
      },
      {
        title: 'Thử tính năng in đậm từ khóa trùng khớp',
        description:
          'Nhập cụm từ tìm kiếm mục tiêu vào ô Từ khóa in đậm để xem Google sẽ tô đậm từ nào bên trong đoạn trích của bạn.',
      },
      {
        title: 'Sao chép thẻ đã hoàn thiện',
        description:
          'Khi bản xem trước đã ổn, hãy sao chép thẻ <title> và <meta name="description"> đã sẵn sàng để dán vào trang của bạn.',
      },
    ],
    examples: [
      {
        title: 'Phát hiện tiêu đề bị cắt do chứa nhiều chữ cái rộng',
        input: 'Tiêu đề 60 ký tự chứa đầy chữ hoa W/M',
        output: 'Cảnh báo tràn quá 580 px dù chưa tới 60 ký tự, để bạn rút ngắn trước khi bị cắt bằng dấu ba chấm.',
        explanation: 'Phép đo văn bản trên Canvas ước lượng chiều rộng hiển thị thực tế giống kết quả tìm kiếm.',
      },
      {
        title: 'Kiểm tra phần mô tả bị gấp trên điện thoại',
        input: 'Tiêu đề: 55 ký tự · Mô tả: 170 ký tự · Chế độ xem: Điện thoại',
        output: 'Bản xem trước trên điện thoại cho thấy mô tả bị cắt ở khoảng 120 ký tự',
        explanation: 'Đặt thông điệp chính và từ khóa mục tiêu ngay đầu mô tả giúp phần xem trước bị gấp trên điện thoại vẫn dễ hiểu.',
      },
    ],
    benefits: [
      'Dùng chiều rộng pixel đo bằng Canvas measureText() bên cạnh số ký tự',
      'Tự động biến tên miền và các đoạn đường dẫn thành đường dẫn breadcrumb gọn gàng',
      'Hiển thị từ khóa truy vấn được in đậm trong mô tả meta để đánh giá tỉ lệ nhấp',
      'Sao chép thẻ <title> và <meta name="description"> đã sẵn sàng chỉ bằng một cú nhấp',
    ],
    useCases: [
      'Chỉnh sửa tiêu đề bài viết blog và trang sản phẩm để tránh bị cắt bằng "..." giữa chừng',
      'Viết mô tả meta có tỉ lệ nhấp cao hơn trong giới hạn gấp khoảng 120 ký tự trên điện thoại',
      'Kiểm tra ngày xuất bản ảnh hưởng thế nào tới độ dài mô tả hiển thị',
      'Xem lại đoạn trích của trang đích trong quá trình kiểm tra chất lượng biên tập',
    ],
    faqs: [
      {
        question: 'Vì sao chiều rộng pixel quan trọng hơn số ký tự cứng nhắc?',
        answer:
          'Công cụ tìm kiếm cắt tiêu đề theo chiều rộng pixel của khung chứa (khoảng 580–600 px trên máy tính), chứ không theo độ dài ký tự cố định. Chữ hoa và chữ rộng như W hay M chiếm gần gấp đôi chiều rộng của chữ i hay l, vì vậy một tiêu đề 60 ký tự toàn chữ rộng vẫn có thể bị cắt, trong khi tiêu đề dài hơn toàn chữ hẹp lại hiển thị đầy đủ.',
      },
      {
        question: 'Google có thể viết lại tiêu đề hoặc mô tả meta của tôi trong kết quả trực tiếp không?',
        answer:
          'Có. Google đôi khi tự động viết lại đoạn trích để khớp với một cụm từ tìm kiếm cụ thể hoặc tiêu đề H1, dù tiêu đề ngắn gọn và chính xác sẽ làm giảm khả năng bị viết lại ngoài ý muốn. Bạn không thể ngăn hoàn toàn việc này, nhưng một tiêu đề rõ ràng, đúng chủ đề sẽ thường được giữ nguyên hơn.',
      },
      {
        question: 'Công cụ này có lấy thứ hạng trực tiếp từ Google không?',
        answer:
          'Không. Đây là công cụ mô phỏng đoạn trích SERP trực quan, chạy ngoại tuyến hoàn toàn trong trình duyệt của bạn. Nó chỉ cho bạn thấy đoạn trích có thể trông như thế nào, chứ không truy vấn Google và không hiển thị vị trí xếp hạng thực tế của trang.',
      },
      {
        question: 'Công cụ Xem trước Đoạn trích SERP có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn, vì vậy không có gì bạn nhập được tải lên bất cứ đâu. Bạn có thể thử bao nhiêu tiêu đề tùy thích mà không cần đăng ký, và mọi nội dung bạn gõ đều ở lại trên thiết bị của bạn.',
      },
      {
        question: 'Độ dài tiêu đề lý tưởng cho kết quả tìm kiếm Google là bao nhiêu?',
        answer:
          'Hãy nhắm tới dưới khoảng 580 pixel trên máy tính, thường tương đương 50–60 ký tự tùy vào độ rộng của chữ cái. Tiêu đề chứa nhiều chữ hoa hay chữ rộng sẽ chạm giới hạn sớm hơn, vì vậy hãy kiểm tra số đo pixel thực tế thay vì chỉ đếm ký tự khi viết tiêu đề quan trọng.',
      },
      {
        question: 'Công cụ Xem trước Đoạn trích SERP đo chiều rộng pixel như thế nào?',
        answer:
          'Công cụ dùng API Canvas measureText() của trình duyệt để tính chiều rộng hiển thị thực tế của tiêu đề theo cùng kiểu phông chữ mà kết quả tìm kiếm sử dụng. Nhờ đó bạn thấy chính xác tiêu đề của mình chiếm bao nhiêu pixel, thay vì phải đoán dựa trên số ký tự như các công cụ đếm ký tự thông thường.',
      },
      {
        question: 'Vì sao tiêu đề của tôi bị cắt dù chưa tới 60 ký tự?',
        answer:
          'Công cụ tìm kiếm cắt theo chiều rộng pixel chứ không theo số ký tự, vì vậy chữ rộng như W và M chiếm nhiều không gian hơn hẳn chữ hẹp như i và l. Một tiêu đề ngắn nhưng chứa nhiều chữ hoa, dấu ngoặc hay ký tự rộng vẫn có thể vượt giới hạn 580 pixel và bị cắt bằng dấu ba chấm.',
      },
      {
        question: 'Độ dài mô tả meta lý tưởng cho máy tính và điện thoại là bao nhiêu?',
        answer:
          'Máy tính hiển thị khoảng 155–160 ký tự, trong khi điện thoại gấp lại ở khoảng 120 ký tự, vì vậy hãy đặt những từ quan trọng nhất và từ khóa mục tiêu lên đầu. Phần đầu mô tả phải tự nó đã thuyết phục được người đọc nhấp vào, còn phần cuối chỉ là thông tin bổ sung cho người xem trên màn hình lớn.',
      },
      {
        question: 'Tôi có thể xem trước cả kết quả tìm kiếm trên máy tính và điện thoại không?',
        answer:
          'Có. Hãy chuyển đổi giữa chế độ Máy tính và Điện thoại để xem cùng một tiêu đề và mô tả hiển thị ra sao trên từng kích thước màn hình. Việc này giúp bạn phát hiện tiêu đề vừa trên máy tính nhưng bị cắt trên điện thoại, hay mô tả mất đi lời kêu gọi hành động quan trọng khi bị gấp lại.',
      },
      {
        question: 'Tính năng từ khóa in đậm trong công cụ này làm gì?',
        answer:
          'Hãy nhập cụm từ tìm kiếm mục tiêu, bản xem trước sẽ in đậm các từ trùng khớp bên trong tiêu đề và mô tả của bạn, giống hệt cách Google tô đậm từ khóa truy vấn trong kết quả thực. Nhờ đó bạn thấy ngay từ khóa của mình có nổi bật không, hay đang bị chôn ở cuối đoạn trích nơi ít ai đọc tới.',
      },
      {
        question: 'Công cụ Xem trước Đoạn trích SERP có hiển thị thứ hạng Google thực tế của tôi không?',
        answer:
          'Không. Đây là công cụ mô phỏng trực quan ngoại tuyến, cho thấy đoạn trích có thể trông như thế nào, chứ không phải dữ liệu xếp hạng trực tiếp từ Google. Muốn biết vị trí thực tế, bạn cần dùng Google Search Console hoặc công cụ theo dõi thứ hạng, còn công cụ này chỉ giúp bạn tối ưu hình thức hiển thị.',
      },
      {
        question: 'Công cụ này có tải tiêu đề hoặc URL của tôi lên đâu không?',
        answer:
          'Không. Mọi việc xem trước và đo đạc đều diễn ra cục bộ trong trình duyệt của bạn, vì vậy tiêu đề, mô tả và URL của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm thử nghiệm với các trang chưa ra mắt hay tiêu đề nội bộ mà không lo rò rỉ thông tin.',
      },
      {
        question: 'Làm thế nào để sao chép tiêu đề và mô tả meta sau khi xem trước?',
        answer:
          'Hãy dùng nút sao chép một cú nhấp để lấy thẻ <title> và <meta name="description"> đã sẵn sàng dán vào trang của bạn. Các thẻ này đã được định dạng đúng chuẩn và thoát ký tự đầy đủ, vì vậy bạn chỉ cần dán vào phần <head> trong mẫu trang mà không cần chỉnh sửa thêm.',
      },
      {
        question: 'Vì sao Google đôi khi viết lại tiêu đề của tôi trong kết quả trực tiếp?',
        answer:
          'Google có thể thay tiêu đề của bạn bằng H1 hoặc đoạn văn khác trên trang khi cho rằng nội dung đó khớp với cụm từ tìm kiếm hơn, dù tiêu đề ngắn gọn và chính xác sẽ giảm khả năng bị thay. Điều này thường xảy ra khi tiêu đề quá chung chung, nhồi từ khóa hay không phản ánh đúng nội dung trang.',
      },
      {
        question: 'Tôi có nên đưa tên thương hiệu hoặc tên trang vào tiêu đề không?',
        answer:
          'Thường là nên. Hãy đặt tên thương hiệu ở cuối, sau một dấu phân cách, để từ khóa chính vẫn đứng đầu mà thương hiệu vẫn xuất hiện trong kết quả. Cách này vừa giữ được sức mạnh SEO cho từ khóa mục tiêu, vừa xây dựng nhận diện thương hiệu mỗi khi người dùng thấy trang của bạn.',
      },
      {
        question: 'Thẻ tiêu đề và tiêu đề H1 khác nhau như thế nào?',
        answer:
          'Thẻ tiêu đề xuất hiện trong kết quả tìm kiếm và tab trình duyệt, còn H1 là tiêu đề chính hiển thị trên chính trang đó. Hai yếu tố này có thể giống nhau nhưng không nhất thiết phải trùng khớp: thẻ tiêu đề nên tối ưu cho cú nhấp chuột, còn H1 nên rõ ràng và hấp dẫn với người đang đọc trang.',
      },
      {
        question: 'Tôi có thể thử nhiều tiêu đề nhanh chóng trong công cụ này không?',
        answer:
          'Có. Hãy chỉnh sửa ô tiêu đề, bản xem trước, chiều rộng pixel và cảnh báo cắt ngắn sẽ cập nhật trực tiếp ngay khi bạn gõ. Nhờ đó bạn có thể so sánh nhiều phiên bản tiêu đề trong vài phút, thử đổi vị trí từ khóa hay rút ngắn một cụm từ và thấy ngay kết quả.',
      },
      {
        question: 'Công cụ có tính đến ngày xuất bản không?',
        answer:
          'Có. Thêm ngày sẽ cho thấy nó làm ngắn phần mô tả hiển thị đi bao nhiêu, điều này quan trọng với bài tin tức và bài viết blog. Ngày xuất bản giúp người đọc biết nội dung còn mới hay không, nhưng nó cũng chiếm chỗ trong đoạn trích, vì vậy bạn cần cân nhắc khi mô tả đã dài.',
      },
      {
        question: 'Tôi nên làm gì nếu mô tả của mình bị cắt trên điện thoại?',
        answer:
          'Hãy đưa thông điệp chính và từ khóa mục tiêu lên ngay đầu mô tả, để phần xem trước bị gấp trên điện thoại vẫn dễ hiểu. Đừng để lời kêu gọi hành động hay lợi ích quan trọng nhất ở cuối mô tả, vì phần lớn người dùng điện thoại sẽ không bao giờ thấy được chúng.',
      },
      {
        question: 'Phép kiểm tra chiều rộng pixel có chính xác cho mọi ngôn ngữ không?',
        answer:
          'Công cụ ước lượng cách hiển thị thực tế của kết quả tìm kiếm dựa trên phông chữ của trình duyệt, vì vậy kết quả chính xác nhất với chữ Latin và có thể khác với các hệ chữ viết khác. Với tiếng Việt hay các ngôn ngữ dùng dấu thanh, chiều rộng thực tế có thể lệch đôi chút, nhưng số đo pixel vẫn đáng tin hơn nhiều so với đếm ký tự.',
      },
    ],
  },
  'xml-sitemap-generator': {
    instructions: [
      {
        title: 'Dán các URL canonical',
        description:
          'Nhập mỗi URL https:// (hoặc http://) đầy đủ trên một dòng trong trình chỉnh sửa; dòng sai định dạng sẽ được gắn cờ rõ ràng.',
      },
      {
        title: 'Xem lại các dòng không hợp lệ bị gắn cờ',
        description:
          'Kiểm tra các dòng được tô sáng xem có lỗi đánh máy hay thiếu tiền tố https:// không, rồi sửa trước khi tạo, vì URL không hợp lệ sẽ bị loại khỏi tệp XML.',
      },
      {
        title: 'Cấu hình thẻ tùy chọn',
        description:
          'Đặt ngày <lastmod>, gợi ý <changefreq> và <priority> tùy chọn (hoặc bỏ qua các thẻ tùy chọn để có tệp gọn hơn).',
      },
      {
        title: 'Kiểm tra việc loại trùng lặp',
        description:
          'Xem số lượng trùng lặp mà công cụ hiển thị để chắc chắn sơ đồ trang hoàn chỉnh liệt kê mỗi URL canonical đúng một lần.',
      },
      {
        title: 'Xem trước XML đã tạo',
        description:
          'Kiểm tra đầu ra XML để xác nhận urlset, các mục <loc> và giá trị <lastmod> tùy chọn hiển thị đúng.',
      },
      {
        title: 'Sao chép hoặc tải sitemap.xml',
        description:
          'Nhấn Sao chép XML hoặc Tải xuống .xml để đặt trực tiếp vào thư mục /public/ ở thư mục gốc của trang.',
      },
    ],
    examples: [
      {
        title: 'Tạo sơ đồ trang cho trang tĩnh trên Cloudflare Pages',
        input: '5 URL canonical · lastmod: 2026-11-12 · Loại trùng lặp: Bật',
        output: 'Tệp <?xml version="1.0"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset> hợp lệ',
        explanation: 'Thoát sạch các thực thể XML (&, <, >, dấu ngoặc kép) bên trong mỗi phần tử <loc>.',
      },
      {
        title: 'Chuẩn bị tệp gửi URL sạch sau khi di chuyển trang',
        input: '42 URL, trong đó có 3 URL trùng lặp và 1 dòng sai',
        output: 'Sơ đồ trang gồm 38 URL hợp lệ — trùng lặp đã bị loại, dòng sai đã bị bỏ',
        explanation: 'URL trùng lặp tự động bị loại bỏ, còn dòng sai được gắn cờ và loại khỏi tệp XML.',
      },
    ],
    benefits: [
      'Kiểm tra từng dòng bằng trình phân tích URL gốc của trình duyệt trước khi xuất XML',
      'Tự động thoát ký tự & và ký tự truy vấn đặc biệt bên trong URL <loc>',
      'Loại bỏ URL giống nhau để tránh sơ đồ trang bị phình to',
      'Cho phép bỏ qua <priority> và <changefreq> một cách gọn gàng khi muốn (Google bỏ qua cả hai)',
    ],
    useCases: [
      'Tạo sơ đồ trang ban đầu cho trang đích tĩnh hoặc microsite tài liệu',
      'Chuẩn bị tệp gửi URL sạch sau khi di chuyển trang',
      'Tạo sơ đồ trang bổ sung không chứa hình ảnh hay tin tức cho trang doanh nghiệp nhỏ',
      'Xuất XML đã định dạng để triển khai cùng với robots.txt',
    ],
    faqs: [
      {
        question: 'Tôi có nên đưa URL không phải canonical, URL chuyển hướng hay URL noindex vào sơ đồ trang không?',
        answer:
          'Không. Sơ đồ trang chỉ nên liệt kê các URL canonical trả về mã HTTP 200 mà bạn muốn công cụ tìm kiếm lập chỉ mục. Đưa URL chuyển hướng hay trang noindex vào sẽ làm lãng phí ngân sách thu thập dữ liệu và gửi tín hiệu mâu thuẫn cho Google về trang nào mới thực sự quan trọng trên trang của bạn.',
      },
      {
        question: 'Google có còn dùng <priority> và <changefreq> không?',
        answer:
          'Google Search bỏ qua thẻ <priority> và <changefreq>, chủ yếu tập trung vào <loc> và ngày <lastmod> chính xác khi được cập nhật một cách có ý nghĩa. Bạn vẫn có thể điền hai thẻ này nếu muốn, nhưng đừng tốn thời gian tinh chỉnh chúng, vì chúng không ảnh hưởng tới tần suất thu thập hay thứ hạng của trang.',
      },
      {
        question: 'Công cụ này có tự động thu thập dữ liệu website đang hoạt động của tôi không?',
        answer:
          'Không. Do chính sách bảo mật CORS của trình duyệt, trang phía máy khách không thể thu thập dữ liệu website khác qua nhiều nguồn gốc; hãy dán danh sách đường dẫn đã xuất của bạn vào đây để biên dịch XML hợp lệ ngay lập tức. Cách này cũng giúp bạn kiểm soát chính xác URL nào được đưa vào sơ đồ trang.',
      },
      {
        question: 'Trình tạo Sơ đồ trang XML có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn, vì vậy danh sách URL của bạn không bao giờ được tải lên máy chủ. Bạn có thể tạo lại sơ đồ trang bao nhiêu lần tùy thích mỗi khi thêm trang mới, mà không cần đăng ký hay lo lắng về quyền riêng tư dữ liệu.',
      },
      {
        question: 'Một sơ đồ trang có thể chứa bao nhiêu URL?',
        answer:
          'Giao thức Sitemaps cho phép tối đa 50.000 URL hoặc 50 MB chưa nén trong mỗi tệp, vì vậy trang lớn nên chia thành nhiều sơ đồ trang hoặc dùng tệp chỉ mục sơ đồ trang. Việc chia theo chuyên mục hay ngôn ngữ cũng giúp bạn theo dõi lỗi thu thập dữ liệu dễ dàng hơn trong Google Search Console.',
      },
      {
        question: 'Sơ đồ trang và robots.txt khác nhau như thế nào?',
        answer:
          'Sơ đồ trang liệt kê các URL bạn muốn công cụ tìm kiếm khám phá, còn robots.txt đưa ra quy tắc cho trình thu thập dữ liệu về đường dẫn nào được phép và không được phép truy cập. Hai tệp này bổ sung cho nhau: robots.txt chặn những phần không cần thiết, còn sơ đồ trang chỉ đường tới những trang quan trọng nhất của bạn.',
      },
      {
        question: 'Tôi nên tải tệp sitemap.xml lên đâu?',
        answer:
          'Hãy đặt tệp ở thư mục gốc của trang, ví dụ https://example.com/sitemap.xml, để trình thu thập dữ liệu có thể tìm thấy ở vị trí chuẩn. Sau đó khai báo đường dẫn này trong robots.txt và gửi lên Google Search Console để Google biết sơ đồ trang của bạn nằm ở đâu.',
      },
      {
        question: 'Tôi có cần gửi sơ đồ trang cho Google không?',
        answer:
          'Bạn nên gửi. Hãy gửi sơ đồ trang trong Google Search Console và tham chiếu tới nó bằng dòng Sitemap: trong robots.txt để các trình thu thập khác cũng tìm thấy. Việc gửi giúp Google khám phá trang mới nhanh hơn, đặc biệt với trang mới ra mắt chưa có nhiều liên kết trỏ tới.',
      },
      {
        question: 'Trình tạo Sơ đồ trang XML chấp nhận định dạng URL nào?',
        answer:
          'Hãy nhập một URL https:// hoặc http:// đầy đủ trên mỗi dòng, kèm theo tên miền, và công cụ sẽ gắn cờ bất kỳ dòng nào không phải URL hợp lệ. URL tương đối hay đường dẫn thiếu tên miền sẽ bị báo lỗi, vì trình thu thập dữ liệu cần địa chỉ tuyệt đối để biết chính xác trang nằm ở đâu.',
      },
      {
        question: 'URL trùng lặp trong sơ đồ trang sẽ ra sao?',
        answer:
          'URL trùng lặp sẽ tự động bị loại bỏ, nhờ đó sơ đồ trang hoàn chỉnh chỉ chứa mỗi URL canonical đúng một lần. Việc này giữ tệp gọn nhẹ, tránh làm lãng phí ngân sách thu thập dữ liệu của Google vào cùng một trang nhiều lần và giúp báo cáo trong Search Console sạch sẽ hơn.',
      },
      {
        question: 'URL sai hoặc không hợp lệ trong Trình tạo Sơ đồ trang XML sẽ ra sao?',
        answer:
          'Các dòng không hợp lệ sẽ được gắn cờ rõ ràng và loại khỏi tệp XML, vì vậy một lỗi đánh máy ở một dòng không bao giờ làm hỏng toàn bộ tệp. Bạn chỉ cần sửa những dòng bị tô sáng rồi tạo lại, thay vì phải rà soát lại toàn bộ danh sách hàng trăm URL bằng tay.',
      },
      {
        question: 'Trình tạo Sơ đồ trang XML xử lý ký tự đặc biệt trong URL như thế nào?',
        answer:
          'Công cụ thoát ký tự XML cho & và các ký tự đặc biệt khác bên trong phần tử <loc>, để chuỗi truy vấn và đường dẫn đã mã hóa vẫn hợp lệ. Nếu ký tự & không được thoát, tệp XML sẽ bị lỗi cú pháp và Google có thể từ chối toàn bộ sơ đồ trang của bạn.',
      },
      {
        question: 'Tôi có nên đưa URL hình ảnh hoặc video vào sơ đồ trang thông thường không?',
        answer:
          'Sơ đồ trang chuẩn chỉ liệt kê URL trang. URL hình ảnh và video cần phần mở rộng sơ đồ trang riêng nếu bạn muốn chúng được lập chỉ mục riêng biệt. Với hầu hết trang nhỏ, sơ đồ trang chứa trang là đủ, còn sơ đồ trang hình ảnh chỉ cần thiết khi hình ảnh là tài sản quan trọng, ví dụ trang nhiếp ảnh hay thương mại điện tử.',
      },
      {
        question: 'Tôi có nên liệt kê URL phân trang hoặc URL đã lọc trong sơ đồ trang không?',
        answer:
          'Không. Chỉ liệt kê trang canonical có thể lập chỉ mục, và bỏ qua phân trang, tham số sắp xếp cùng trang kết quả tìm kiếm nội bộ. Những URL này tạo ra nội dung trùng lặp hoặc gần như trùng lặp, làm loãng tín hiệu và khiến Google tốn ngân sách thu thập vào trang ít giá trị.',
      },
      {
        question: '<lastmod> là gì và tôi có nên đặt nó trong sơ đồ trang không?',
        answer:
          'Thẻ này ghi lại ngày trang thay đổi lần cuối. Chỉ đặt nó khi ngày tháng chính xác, vì Google dùng thông tin này để đánh giá độ mới của trang. Đừng tự động cập nhật lastmod cho mọi trang mỗi lần triển khai, vì ngày tháng giả sẽ khiến Google dần bỏ qua tín hiệu này trên trang của bạn.',
      },
      {
        question: 'Trình tạo Sơ đồ trang XML có hoạt động ngoại tuyến không?',
        answer:
          'Có. Công cụ chạy hoàn toàn trong trình duyệt của bạn mà không cần tải lên, vì vậy bạn có thể tạo sơ đồ trang mà không cần kết nối internet sau khi trang đã tải xong. Điều này rất tiện khi bạn làm việc trên máy bay, ở nơi mạng yếu hay trong môi trường staging không có internet.',
      },
      {
        question: 'Tôi có thể tạo lại sơ đồ trang sau khi thêm trang mới không?',
        answer:
          'Có. Hãy dán danh sách URL đã cập nhật rồi tải tệp sitemap.xml mới, sau đó tải lại lên thư mục gốc của trang. Bạn nên tạo lại sơ đồ trang mỗi khi ra mắt chuyên mục mới hay xuất bản hàng loạt bài viết, để Google khám phá nội dung mới càng sớm càng tốt.',
      },
      {
        question: 'Tệp chỉ mục sơ đồ trang là gì?',
        answer:
          'Đó là tệp liệt kê nhiều tệp sơ đồ trang, được các trang lớn dùng để tổ chức hàng nghìn URL theo chuyên mục hay ngôn ngữ. Thay vì một tệp khổng lồ, bạn có một tệp chỉ mục trỏ tới nhiều sơ đồ trang nhỏ hơn, mỗi tệp phụ trách một phần của trang và dễ bảo trì hơn nhiều.',
      },
      {
        question: 'Có sơ đồ trang có đảm bảo Google sẽ lập chỉ mục trang của tôi không?',
        answer:
          'Không. Sơ đồ trang giúp công cụ tìm kiếm khám phá URL, nhưng việc lập chỉ mục vẫn phụ thuộc vào chất lượng trang, liên kết và ngân sách thu thập dữ liệu. Một trang mỏng, trùng lặp hay không có liên kết nội bộ vẫn có thể bị bỏ qua dù đã nằm trong sơ đồ trang.',
      },
      {
        question: 'Tôi có thể dùng Trình tạo Sơ đồ trang XML cho trang WordPress hoặc Shopify không?',
        answer:
          'Có. Hãy xuất hoặc sao chép danh sách URL canonical từ bất kỳ nền tảng nào, dán vào đây, và công cụ sẽ tạo một tệp sitemap.xml chuẩn. Dù WordPress và Shopify đều có sơ đồ trang tích hợp sẵn, công cụ này hữu ích khi bạn muốn sơ đồ trang tùy chỉnh chỉ chứa đúng những trang mình chọn.',
      },
    ],
  },
  'robots-txt-generator': {
    instructions: [
      {
        title: 'Chọn mẫu khởi đầu hoặc chỉnh sửa quy tắc',
        description:
          'Nhấn Cho phép tất cả, Ứng dụng Web / SaaS chuẩn, WordPress sạch hoặc Staging (Chặn tất cả) để điền sẵn các quy tắc thường dùng.',
      },
      {
        title: 'Tùy chỉnh User-agent và đường dẫn',
        description:
          'Thêm đường dẫn Cho phép hoặc Không cho phép cho * hoặc cho trình thu thập cụ thể như Googlebot, Bingbot hay GPTBot.',
      },
      {
        title: 'Đặt Crawl-delay khi cần',
        description:
          'Thêm giá trị Crawl-delay cho trình thu thập tôn trọng nó, chẳng hạn Bingbot, để làm chậm yêu cầu trên máy chủ nhỏ hoặc máy chủ dùng chung.',
      },
      {
        title: 'Gắn URL sơ đồ trang',
        description:
          'Nhập URL sơ đồ trang XML đầy đủ để trình thu thập dữ liệu có thể khám phá nó từ robots.txt, và thêm nhiều dòng nếu bạn dùng nhiều sơ đồ trang.',
      },
      {
        title: 'Xem lại đầu ra đã nhóm',
        description:
          'Kiểm tra từng khối User-agent đã được nhóm đúng chưa, và không có quy tắc Disallow nào vô tình chặn CSS, JavaScript hay trang công khai.',
      },
      {
        title: 'Sao chép, tải xuống và kiểm tra',
        description:
          'Sao chép hoặc tải robots.txt, đặt ở thư mục gốc của tên miền, rồi xác minh bằng công cụ kiểm tra robots.txt trong Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'Chặn /api/ và /admin/ trong ứng dụng web SaaS',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Tệp robots.txt đã nhóm, kết thúc bằng Sitemap: https://example.com/sitemap.xml',
        explanation: 'Nhóm gọn gàng các User-agent trùng khớp vào trong một khối duy nhất.',
      },
      {
        title: 'Chặn hoàn toàn trang staging',
        input: 'Mẫu: Staging (Chặn tất cả)',
        output: 'User-agent: *\nDisallow: /',
        explanation: 'Cách nhanh để ẩn môi trường staging khỏi công cụ tìm kiếm trước khi ra mắt DNS.',
      },
    ],
    benefits: [
      'Tự động nhóm quy tắc theo khối User-agent trùng khớp theo phương pháp tốt nhất của RFC 9309',
      'Cung cấp mẫu khởi đầu đã kiểm chứng để tránh vô tình chặn tài nguyên CSS/JS',
      'Hỗ trợ nhiều khai báo Sitemap: cho chỉ mục sơ đồ trang hoặc tệp theo ngôn ngữ',
      'Tải xuống bằng một cú nhấp tạo ra tệp robots.txt sẵn sàng triển khai',
    ],
    useCases: [
      'Ngăn trình thu thập dữ liệu lãng phí ngân sách vào /api/, /admin/ hay URL truy vấn tìm kiếm nội bộ',
      'Quảng bá vị trí sơ đồ trang XML ở thư mục gốc của tên miền',
      'Thêm quy tắc riêng cho bot chuyên biệt như AdsBot hay trình thu thập AI',
      'Cấu hình môi trường staging trước khi ra mắt DNS',
    ],
    faqs: [
      {
        question: 'Disallow: /admin/ trong robots.txt có giữ trang khỏi Google Search hay bảo vệ bí mật không?',
        answer:
          'Cần phân biệt rõ: robots.txt chỉ ngăn việc thu thập dữ liệu, chứ không nhất thiết ngăn lập chỉ mục nếu trang khác liên kết trực tiếp tới URL đó, và robots.txt thì ai cũng đọc được. Hãy dùng xác thực cho đường dẫn nhạy cảm và thêm <meta name="robots" content="noindex"> để ngăn lập chỉ mục, thay vì chỉ dựa vào robots.txt.',
      },
      {
        question: 'Tệp robots.txt phải được lưu trữ ở đâu?',
        answer:
          'Tệp phải được phục vụ tại đúng đường dẫn gốc của máy chủ (https://yourdomain.com/robots.txt) và trả về mã HTTP 200. Nếu đặt ở thư mục con hay tên tệp khác, trình thu thập dữ liệu sẽ không tìm thấy và coi như trang của bạn không có robots.txt.',
      },
      {
        question: 'Google có tôn trọng Crawl-delay không?',
        answer:
          'Googlebot bỏ qua Crawl-delay (hãy dùng cài đặt trong Search Console nếu cần), trong khi Bing và các trình thu thập khác vẫn tôn trọng khoảng thời gian Crawl-delay dạng số. Vì vậy Crawl-delay vẫn hữu ích để giảm tải cho máy chủ nhỏ trước Bing, dù nó không ảnh hưởng gì tới Googlebot.',
      },
      {
        question: 'Trình tạo Robots.txt có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn, vì vậy quy tắc cho trang của bạn không bao giờ được tải lên bất cứ đâu. Bạn có thể tạo bao nhiêu phiên bản robots.txt tùy thích mà không cần đăng ký, và mọi quy tắc đều ở lại trên thiết bị của bạn.',
      },
      {
        question: 'Robots.txt và thẻ meta robots noindex khác nhau như thế nào?',
        answer:
          'Robots.txt bảo trình thu thập dữ liệu đừng truy cập một đường dẫn, còn thẻ noindex bảo công cụ tìm kiếm đừng hiển thị trang đã thu thập trong kết quả. Hai cơ chế này giải quyết hai vấn đề khác nhau, và dùng nhầm có thể khiến thẻ noindex không bao giờ được đọc tới.',
      },
      {
        question: 'Robots.txt có thể chặn trình thu thập AI như GPTBot không?',
        answer:
          'Có. Hãy thêm nhóm User-agent: GPTBot với Disallow: / để chặn trình thu thập đó, rồi lặp lại mẫu tương tự cho các bot AI khác mà bạn muốn chặn. Tuy nhiên, chỉ những bot tôn trọng robots.txt mới tuân thủ, còn bot xấu vẫn có thể bỏ qua quy tắc và thu thập dữ liệu của bạn.',
      },
      {
        question: '"User-agent: *" trong robots.txt nghĩa là gì?',
        answer:
          'Nghĩa là các quy tắc trong nhóm đó áp dụng cho mọi trình thu thập truy cập trang của bạn, trừ khi một nhóm User-agent cụ thể hơn ghi đè chúng. Đây là cách phổ biến nhất để đặt quy tắc chung cho toàn bộ trang, trước khi thêm ngoại lệ riêng cho Googlebot hay Bingbot.',
      },
      {
        question: 'Allow và Disallow trong robots.txt khác nhau như thế nào?',
        answer:
          'Allow cho phép thu thập một đường dẫn, còn Disallow chặn nó. Khi các quy tắc chồng chéo, quy tắc khớp cụ thể nhất sẽ thắng. Ví dụ, bạn có thể chặn toàn bộ thư mục /admin/ nhưng vẫn cho phép một trang công khai bên trong nó bằng quy tắc Allow cụ thể hơn.',
      },
      {
        question: 'Tôi có thể chặn một trang hoặc thư mục bằng Trình tạo Robots.txt không?',
        answer:
          'Có. Hãy thêm Disallow: /page/ cho một trang, hoặc Disallow: /folder/ để chặn cả thư mục và mọi thứ bên trong nó. Hãy kiểm tra kỹ đường dẫn trước khi triển khai, vì một dấu gạch chéo thừa hay thiếu có thể chặn nhầm cả một phần lớn của trang.',
      },
      {
        question: 'Tôi có nên chặn tệp CSS và JavaScript trong robots.txt không?',
        answer:
          'Không. Công cụ tìm kiếm cần CSS và JavaScript của bạn để hiển thị trang đúng cách, và chặn chúng có thể làm tổn hại thứ hạng. Google đánh giá trang dựa trên phiên bản đã hiển thị đầy đủ, vì vậy chặn tài nguyên hiển thị sẽ khiến Google thấy một trang trống rỗng hoặc bị lỗi bố cục.',
      },
      {
        question: 'Trình tạo Robots.txt gồm những mẫu khởi đầu nào?',
        answer:
          'Công cụ gồm các mẫu Cho phép tất cả, Ứng dụng Web / SaaS chuẩn, WordPress sạch và Staging (Chặn tất cả), nhờ đó bạn bắt đầu từ một mẫu đã được kiểm chứng thay vì tệp trống. Mỗi mẫu đã tính tới các đường dẫn thường gặp như /wp-admin/ hay /api/, giúp bạn tránh những lỗi chặn nhầm phổ biến.',
      },
      {
        question: 'Làm thế nào để thêm sơ đồ trang vào robots.txt?',
        answer:
          'Hãy thêm một dòng như Sitemap: https://example.com/sitemap.xml ở cuối tệp, để trình thu thập dữ liệu có thể tìm sơ đồ trang của bạn từ thư mục gốc. Dòng này hoạt động với mọi trình thu thập lớn, không chỉ Google, và đặc biệt hữu ích khi bạn chưa gửi sơ đồ trang qua Search Console.',
      },
      {
        question: 'Một tệp robots.txt có thể có nhiều dòng Sitemap không?',
        answer:
          'Có. Bạn có thể liệt kê nhiều URL sơ đồ trang, điều này hữu ích cho chỉ mục sơ đồ trang hoặc sơ đồ trang riêng theo ngôn ngữ hay chuyên mục. Mỗi dòng Sitemap: là một URL tuyệt đối riêng biệt, và trình thu thập dữ liệu sẽ lần lượt xử lý tất cả các sơ đồ trang được liệt kê.',
      },
      {
        question: 'Trình tạo Robots.txt có tải quy tắc của tôi lên đâu không?',
        answer:
          'Không. Mọi thứ chạy cục bộ trong trình duyệt của bạn và tệp được tạo ra ngay trên thiết bị của bạn. Nhờ đó bạn có thể soạn quy tắc cho trang staging nội bộ hay đường dẫn nhạy cảm mà không lo thông tin cấu trúc trang bị lộ ra ngoài.',
      },
      {
        question: 'Làm thế nào để kiểm tra robots.txt sau khi đăng tải?',
        answer:
          'Hãy tải tệp lên thư mục gốc của tên miền, rồi kiểm tra bằng công cụ kiểm tra robots.txt trong Google Search Console hoặc bằng cách tìm nạp tệp với vai trò Googlebot. Công cụ kiểm tra sẽ cho bạn biết một URL cụ thể có bị chặn hay không, giúp phát hiện lỗi trước khi nó ảnh hưởng tới toàn bộ trang.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi vô tình chặn toàn bộ trang trong robots.txt?',
        answer:
          'Công cụ tìm kiếm sẽ ngừng thu thập dữ liệu các trang của bạn. Hãy xóa dòng Disallow: /, tải lại tệp và yêu cầu thu thập lại trong Search Console. Lưu ý rằng thứ hạng có thể mất thời gian để phục hồi, vì vậy hãy luôn kiểm tra tệp trên staging trước khi triển khai lên bản chính thức.',
      },
      {
        question: 'Robots.txt có giấu trang quản trị của tôi khỏi hacker không?',
        answer:
          'Không. Tệp robots.txt ai cũng đọc được, vì vậy bất kỳ ai cũng thấy bạn đã chặn đường dẫn nào. Hãy bảo vệ trang nhạy cảm bằng mật khẩu hoặc xác thực, và coi robots.txt chỉ là hướng dẫn cho trình thu thập dữ liệu lịch sự, chứ không phải lớp bảo mật.',
      },
      {
        question: 'Crawl-delay là gì và tôi có nên dùng nó trong robots.txt không?',
        answer:
          'Crawl-delay yêu cầu trình thu thập chờ một số giây giữa các yêu cầu. Googlebot bỏ qua nó, nhưng Bing và một số trình thu thập khác tôn trọng nó. Hãy dùng Crawl-delay khi máy chủ của bạn nhỏ hay dùng chung và thường xuyên quá tải, với giá trị vừa phải như 1–2 giây.',
      },
      {
        question: 'Tôi có thể viết quy tắc robots.txt khác nhau cho Googlebot và Bingbot không?',
        answer:
          'Có. Hãy tạo một nhóm User-agent riêng cho mỗi trình thu thập, với các dòng Allow và Disallow của riêng nó. Ví dụ, bạn có thể cho Googlebot thu thập hình ảnh nhưng chặn Bingbot khỏi cùng thư mục đó, tùy theo chiến lược hiển thị và ngân sách thu thập của từng công cụ tìm kiếm.',
      },
      {
        question: 'Tôi tải robots.txt lên đâu trên Cloudflare Pages hay trang tĩnh?',
        answer:
          'Hãy đặt tệp trong thư mục public/ hoặc ở thư mục gốc của đầu ra bản dựng, để nó được phục vụ tại https://yourdomain.com/robots.txt. Sau khi triển khai, hãy truy cập trực tiếp URL đó trên trình duyệt để xác nhận tệp hiển thị đúng nội dung và trả về mã 200.',
      },
    ],
  },
  'schema-markup-generator': {
    instructions: [
      {
        title: 'Chọn loại Schema.org',
        description:
          'Chọn Article, FAQPage, Product, Organization hoặc BreadcrumbList từ bộ chuyển đổi ở phía trên.',
      },
      {
        title: 'Điền thuộc tính của thực thể',
        description:
          'Nhập tiêu đề, cặp hỏi đáp, ưu đãi giá, thông tin tổ chức hoặc đường dẫn breadcrumb.',
      },
      {
        title: 'Thêm hàng cho danh sách',
        description:
          'Thêm cặp hỏi đáp cho FAQPage hoặc mục đường dẫn cho BreadcrumbList, và xóa những hàng không cần.',
      },
      {
        title: 'Xem lại JSON-LD đã tạo',
        description:
          'Kiểm tra đầu ra JSON trực tiếp xem tên trường và giá trị có đúng không, và xác nhận thuộc tính tùy chọn trống đã tự động bị bỏ qua.',
      },
      {
        title: 'Sao chép thẻ <script> hoặc xuất tệp .jsonld',
        description:
          'Sao chép toàn bộ khối <script type="application/ld+json"> vào phần <head> của trang hoặc tải tệp .jsonld xuống.',
      },
      {
        title: 'Xác thực trước khi đăng tải',
        description:
          'Dán đầu ra vào công cụ Rich Results Test hoặc trình xác thực Schema để phát hiện lỗi cú pháp, vì công cụ tìm kiếm sẽ bỏ qua JSON-LD không hợp lệ.',
      },
    ],
    examples: [
      {
        title: 'Tạo dữ liệu có cấu trúc FAQPage động',
        input: '2 cặp Hỏi/Đáp theo lược đồ FAQPage',
        output: 'Khối mã JSON-LD FAQPage hợp lệ với @context https://schema.org',
        explanation: 'Dùng tuần tự hóa JSON an toàn với ký tự thoát \\u003c để tránh kết thúc sớm thẻ </script>.',
      },
      {
        title: 'Tạo lược đồ Product cho trang sản phẩm',
        input: 'Tên: Wireless Mouse · Giá: 29.99 USD · Tình trạng: InStock',
        output: 'Khối JSON-LD Product gồm giá, tiền tệ và tình trạng còn hàng',
        explanation: 'Giá và tình trạng còn hàng của sản phẩm là những trường chính mà công cụ tìm kiếm dùng trong kết quả mua sắm.',
      },
    ],
    benefits: [
      'Hỗ trợ 5 loại dữ liệu có cấu trúc Schema.org có tác động lớn nhất',
      'Thoát ký tự "<" gọn gàng bên trong JSON-LD để tránh lỗi chèn mã HTML vào script',
      'Tự động bỏ qua thuộc tính tùy chọn trống để có cú pháp sạch',
      'Kết hợp tự nhiên với trình định dạng JSON cho phần mở rộng tùy chỉnh',
    ],
    useCases: [
      'Thêm siêu dữ liệu tác giả và ngày xuất bản Article vào mẫu blog biên tập',
      'Cấu trúc giá sản phẩm, tiền tệ và tình trạng còn hàng cho nguồn cấp dữ liệu bán hàng',
      'Khai báo bản sắc thương hiệu và URL logo Organization trên toàn trang',
      'Nhúng đường dẫn phân cấp BreadcrumbList trên trang chuyên mục và trang công cụ',
    ],
    faqs: [
      {
        question: 'Tôi nên đặt dữ liệu có cấu trúc JSON-LD ở đâu trên trang web?',
        answer:
          'Bạn có thể đặt <script type="application/ld+json"> trong <head> hoặc trong <body>; đặt gọn gàng trong <head> là cách làm chuẩn. Vị trí không ảnh hưởng tới việc công cụ tìm kiếm có đọc được dữ liệu hay không, nhưng đặt trong <head> giúp mã nguồn dễ quản lý và tránh lẫn với nội dung hiển thị của trang.',
      },
      {
        question: 'Vì sao công cụ thoát ký tự "<" thành "\\u003c" trong đầu ra JSON?',
        answer:
          'Nếu câu trả lời FAQ của người dùng chứa "</script>", trình duyệt sẽ kết thúc khối script HTML sớm, trừ khi ký tự "<" được thoát thành "\\u003c", vốn vẫn là JSON hoàn toàn hợp lệ. Nhờ cơ chế này, ngay cả nội dung chứa mã HTML mẫu cũng không thể phá vỡ trang của bạn một cách vô tình.',
      },
      {
        question: 'Thêm đánh dấu Schema có đảm bảo hiển thị đoạn trích nổi bật trên Google không?',
        answer:
          'Không. Dữ liệu có cấu trúc hợp lệ chỉ giúp trang đủ điều kiện xuất hiện trong các tính năng tìm kiếm nâng cao, còn công cụ tìm kiếm sẽ quyết định việc hiển thị dựa trên chất lượng tổng thể và hướng dẫn của trang. Nhiều trang có schema hợp lệ vẫn không được hiển thị nổi bật, vì vậy hãy coi schema là điều kiện cần chứ không phải điều kiện đủ.',
      },
      {
        question: 'Trình tạo Đánh dấu Schema có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn, vì vậy nội dung của bạn không bao giờ được tải lên máy chủ. Bạn có thể tạo bao nhiêu khối schema tùy thích cho mọi loại trang mà không cần đăng ký, và mọi dữ liệu bạn nhập đều ở lại trên thiết bị của bạn.',
      },
      {
        question: 'Trình tạo Đánh dấu Schema hỗ trợ những loại Schema.org nào?',
        answer:
          'Công cụ hỗ trợ Article, FAQPage, Product, Organization và BreadcrumbList, bao phủ các trường hợp kết quả nổi bật phổ biến nhất. Năm loại này đủ cho hầu hết trang blog, trang sản phẩm, trang giới thiệu doanh nghiệp và trang chuyên mục, còn các loại chuyên biệt như Recipe hay Event cần viết JSON-LD thủ công.',
      },
      {
        question: 'JSON-LD và Microdata khác nhau như thế nào?',
        answer:
          'JSON-LD là một khối <script> riêng biệt mà bạn dán vào trang, còn Microdata thêm thuộc tính trực tiếp vào các phần tử HTML hiển thị của bạn. JSON-LD dễ viết, dễ bảo trì và được Google khuyến nghị, trong khi Microdata gắn chặt với mã HTML nên khó chỉnh sửa khi thay đổi giao diện trang.',
      },
      {
        question: 'Làm thế nào để thêm JSON-LD đã tạo vào website của tôi?',
        answer:
          'Hãy sao chép toàn bộ khối <script type="application/ld+json"> rồi dán vào phần <head> của trang tương ứng. Nếu bạn dùng hệ quản trị nội dung, hãy dán vào trường head tùy chỉnh của trang đó, sau đó kiểm tra lại bằng công cụ Rich Results Test để chắc chắn mã được chèn đúng vị trí và không có lỗi cú pháp.',
      },
      {
        question: 'Làm thế nào để kiểm tra đánh dấu schema sau khi tạo?',
        answer:
          'Hãy dán URL trang hoặc mã nguồn vào công cụ Rich Results Test hoặc trình xác thực của Schema.org để kiểm tra lỗi và các tính năng nâng cao đủ điều kiện. Hai công cụ này sẽ chỉ ra trường nào bị thiếu, trường nào sai định dạng và trang của bạn có thể hiển thị dạng kết quả nổi bật nào.',
      },
      {
        question: 'Tôi có thể kết hợp nhiều loại schema trên một trang không?',
        answer:
          'Có. Một trang có thể mang đồng thời đánh dấu Article, BreadcrumbList và FAQPage dưới dạng các khối JSON-LD riêng biệt. Ví dụ, bài viết blog có thể vừa khai báo tác giả và ngày xuất bản, vừa mô tả đường dẫn điều hướng, vừa liệt kê câu hỏi thường gặp mà không gây xung đột gì.',
      },
      {
        question: 'Lược đồ FAQPage là gì và khi nào nên dùng nó?',
        answer:
          'Hãy dùng nó trên trang hiển thị danh sách câu hỏi và câu trả lời, chẳng hạn trang trợ giúp, để công cụ tìm kiếm có thể hiển thị chúng dưới dạng kết quả mở rộng được. Lưu ý rằng nội dung trong schema phải khớp với văn bản người dùng thực sự thấy trên trang, nếu không Google có thể bỏ qua toàn bộ khối đánh dấu.',
      },
      {
        question: 'Công cụ hỗ trợ những trường lược đồ Product nào?',
        answer:
          'Công cụ bao phủ tên sản phẩm, giá, tiền tệ và tình trạng còn hàng, là những trường cốt lõi mà công cụ tìm kiếm dùng cho kết quả mua sắm. Với các trường này, sản phẩm của bạn có thể hiển thị giá và tình trạng còn hàng ngay trong kết quả tìm kiếm, giúp thu hút lượt nhấp từ người mua tiềm năng.',
      },
      {
        question: 'Lược đồ BreadcrumbList dùng để làm gì?',
        answer:
          'Nó mô tả hệ thống phân cấp điều hướng của trang, chẳng hạn Trang chủ > Hướng dẫn > Chủ đề, để công cụ tìm kiếm hiển thị đường dẫn breadcrumb trong kết quả. Đường dẫn breadcrumb giúp người dùng hiểu vị trí của trang trong cấu trúc trang và quay lại chuyên mục cha dễ dàng hơn, thay vì chỉ thấy một URL dài khó đọc.',
      },
      {
        question: 'Lược đồ Organization dùng để làm gì?',
        answer:
          'Nó khai báo bản sắc thương hiệu của bạn, gồm tên, logo và website chính thức, để công cụ tìm kiếm hiển thị bảng tri thức nhất quán. Khi Organization được khai báo đúng trên trang chủ, Google có thể liên kết logo, hồ sơ mạng xã hội và thông tin liên hệ của bạn thành một thực thể thương hiệu rõ ràng.',
      },
      {
        question: 'Trình tạo Đánh dấu Schema có tải nội dung của tôi lên đâu không?',
        answer:
          'Không. Mọi đánh dấu được tạo cục bộ trong trình duyệt của bạn và không có gì bạn nhập rời khỏi thiết bị. Điều này đặc biệt quan trọng khi bạn làm việc với nội dung chưa xuất bản hay thông tin sản phẩm nội bộ, vì dữ liệu kinh doanh của bạn không bao giờ đi qua máy chủ bên thứ ba.',
      },
      {
        question: 'Tôi có thể xuất lược đồ dưới dạng tệp .jsonld không?',
        answer:
          'Có. Nút xuất sẽ tải xuống một tệp .jsonld độc lập mà bạn có thể lưu trữ, quản lý phiên bản hoặc giao cho lập trình viên. Tệp này hữu ích khi bạn muốn lưu mẫu schema cho từng loại trang, hoặc đưa schema vào quy trình triển khai cùng với mã nguồn của trang.',
      },
      {
        question: 'Điều gì xảy ra nếu JSON-LD của tôi có lỗi cú pháp?',
        answer:
          'Toàn bộ khối có thể bị công cụ tìm kiếm bỏ qua, vì vậy hãy luôn xác thực đầu ra bằng công cụ Rich Results Test trước khi đăng tải. Một dấu phẩy thừa hay dấu ngoặc thiếu cũng đủ khiến toàn bộ schema vô hiệu, và bạn sẽ mất mọi lợi ích hiển thị nổi bật mà không nhận được bất kỳ cảnh báo nào từ Google.',
      },
      {
        question: 'Tôi có thể dùng Trình tạo Đánh dấu Schema cho trang công thức nấu ăn hoặc sự kiện không?',
        answer:
          'Công cụ chỉ bao phủ năm loại, vì vậy trang Recipe và Event cần JSON-LD viết tay, và bạn có thể xác thực chúng bằng cùng các công cụ đó. Tài liệu của Schema.org liệt kê đầy đủ các trường bắt buộc cho từng loại, và bạn có thể dùng trình định dạng JSON để kiểm tra cú pháp trước khi đăng tải.',
      },
      {
        question: 'Câu trả lời FAQ trong schema có phải khớp với văn bản hiển thị trên trang không?',
        answer:
          'Có. Google yêu cầu dữ liệu có cấu trúc phải khớp với nội dung người dùng thực sự thấy trên trang, nếu không đánh dấu có thể bị bỏ qua. Đừng viết câu trả lời riêng cho schema mà không hiển thị chúng trên trang, vì Google coi đó là nội dung ẩn và có thể phạt trang vi phạm hướng dẫn.',
      },
      {
        question: 'Tôi có thể chỉnh sửa JSON-LD đã tạo bằng tay không?',
        answer:
          'Có. Đó là JSON chuẩn, vì vậy bạn có thể thêm hoặc thay đổi trường trong bất kỳ trình chỉnh sửa nào rồi xác thực lại kết quả trước khi đăng tải. Việc chỉnh tay hữu ích khi bạn muốn thêm trường nâng cao như đánh giá hay hình ảnh mà công cụ chưa hỗ trợ, miễn là bạn giữ đúng cú pháp JSON.',
      },
      {
        question: 'Trình tạo Đánh dấu Schema có hoạt động ngoại tuyến không?',
        answer:
          'Có. Công cụ chạy hoàn toàn trong trình duyệt của bạn mà không cần tải lên, vì vậy bạn có thể tạo đánh dấu schema mà không cần kết nối internet sau khi trang đã tải xong. Điều này rất tiện khi bạn soạn schema cho nhiều trang trong lúc di chuyển hay làm việc ở nơi mạng không ổn định.',
      },
    ],
  },
  'url-slug-generator': {
    instructions: [
      {
        title: 'Nhập tiêu đề hoặc tên trang',
        description:
          'Dán một hoặc nhiều tiêu đề (mỗi tiêu đề một dòng) vào ô Tiêu đề trang.',
      },
      {
        title: 'Cấu hình quy tắc định dạng slug',
        description:
          'Nhập Tên miền cơ sở, chọn dấu gạch nối (-) hoặc dấu gạch dưới (_), đặt Độ dài slug tối đa, và bật tắt tùy chọn loại từ dừng hoặc dấu gạch chéo cuối.',
      },
      {
        title: 'Xem trước slug đã tạo',
        description:
          'Quét bảng kết quả để kiểm tra chuyển tự dấu thanh, việc loại từ dừng và vị trí slug dài bị cắt tại ranh giới từ.',
      },
      {
        title: 'Điều chỉnh độ dài hoặc cài đặt từ dừng',
        description:
          'Nếu slug mất ý nghĩa hoặc bị cắt vụng về, hãy tăng độ dài slug tối đa hoặc tắt tính năng loại từ dừng, rồi tạo lại.',
      },
      {
        title: 'Sao chép từng slug hoặc danh sách hàng loạt',
        description:
          'Sao chép từng slug trong bảng hoặc xuất tất cả slug hay toàn bộ URL chỉ bằng một cú nhấp.',
      },
      {
        title: 'Không bao giờ đổi tên slug đang hoạt động nếu không có chuyển hướng',
        description:
          'Nếu bạn thay đổi slug của trang đã được lập chỉ mục, hãy thêm chuyển hướng 301 từ URL cũ để liên kết ngược và thứ hạng được chuyển sang URL mới.',
      },
    ],
    examples: [
      {
        title: 'Cắt từ dừng và dấu thanh khỏi tiêu đề',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'Chuyển tự é → e, mở rộng & → and, bỏ "in", rồi nối các từ viết thường bằng dấu gạch nối.',
      },
      {
        title: 'Tạo slug cho cả lịch biên tập cùng lúc',
        input: '5 tiêu đề blog, mỗi tiêu đề một dòng',
        output: 'Bảng gồm 5 slug gọn gàng, mỗi slug kèm URL đầy đủ',
        explanation: 'Xử lý hàng loạt giúp đổi hàng chục tiêu đề cùng lúc, vì vậy toàn bộ danh sách lịch biên tập được chuẩn bị chỉ trong một lần chạy.',
      },
    ],
    benefits: [
      'Xử lý hàng loạt hàng chục tiêu đề trong lịch biên tập cùng lúc',
      'Cắt slug quá dài tại ranh giới dấu gạch nối hoặc từ, chứ không cắt giữa từ',
      'Giữ nguyên ý nghĩa cốt lõi bằng cách giữ nguyên slug ngắn dù đã bật tính năng loại từ dừng',
      'Tuân theo khuyến nghị về cấu trúc URL của Google (dấu gạch nối ASCII UTF-8 thay vì dấu gạch dưới)',
    ],
    useCases: [
      'Lên kế hoạch cấu trúc URL gọn gàng trước khi ra mắt chuyên mục blog hoặc bộ sưu tập CMS',
      'Dọn tiêu đề sản phẩm quốc tế có dấu thành slug an toàn với ASCII',
      'Kiểm tra và rút gọn permalink CMS quá dài thành đường dẫn ngắn gọn 4–6 từ',
      'Chuẩn bị danh sách đích canonical để đưa vào Trình tạo Sơ đồ trang XML',
    ],
    faqs: [
      {
        question: 'Slug URL cho SEO nên dùng dấu gạch nối (-) hay dấu gạch dưới (_)?',
        answer:
          'Google khuyến nghị dùng dấu gạch nối (-) làm dấu phân cách từ trong URL, vì trình phân tích tìm kiếm coi dấu gạch nối như khoảng trắng, còn dấu gạch dưới nối các từ kề nhau thành một từ. Nhờ đó, địa chỉ best-cafe-tools được hiểu là ba từ riêng biệt, còn best_cafe_tools lại bị đọc thành một từ duy nhất khó nhận diện.',
      },
      {
        question: 'Loại bỏ từ dừng có làm giảm khả năng đọc hiểu không?',
        answer:
          'Loại bỏ các từ đệm ngắn như "a", "the" hay "of" giúp slug blog rất dài trở nên súc tích hơn. Hãy giữ lại từ dừng nếu việc loại bỏ làm thay đổi ý nghĩa cốt lõi (ví dụ "how to"), vì một slug ngắn nhưng sai nghĩa còn tệ hơn một slug dài hơn vài ký tự mà vẫn rõ ràng.',
      },
      {
        question: 'Tôi có nên thay đổi slug của URL đang hoạt động đã được lập chỉ mục không?',
        answer:
          'Chỉ nên thay đổi nếu bạn triển khai chuyển hướng 301 vĩnh viễn từ slug cũ sang slug mới (dùng Trình tạo Canonical & Chuyển hướng 301 của chúng tôi) để liên kết ngược và thứ hạng được chuyển giao sạch sẽ. Nếu không có chuyển hướng, mọi liên kết cũ sẽ dẫn tới trang lỗi 404 và bạn mất toàn bộ giá trị SEO đã tích lũy.',
      },
      {
        question: 'Trình tạo Slug URL có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí, không cần đăng ký và không giới hạn số tiêu đề bạn chuyển đổi trong một phiên. Bạn có thể xử lý cả một lịch biên tập gồm hàng trăm tiêu đề trong một lần mà không tốn chi phí hay phải tạo tài khoản, và mọi tiêu đề đều ở lại trên thiết bị của bạn.',
      },
      {
        question: 'Tôi có thể tạo slug cho nhiều tiêu đề cùng lúc không?',
        answer:
          'Có. Hãy dán một tiêu đề trên mỗi dòng, công cụ sẽ chuyển đổi toàn bộ lô trong một bảng duy nhất, nhờ đó bạn tạo slug cho cả lịch biên tập cùng lúc. Cách làm hàng loạt này nhanh hơn nhiều so với việc xử lý từng tiêu đề, và giúp bạn giữ phong cách đặt tên nhất quán trên toàn bộ trang.',
      },
      {
        question: 'Ký tự có dấu được xử lý như thế nào trong slug?',
        answer:
          'Dấu thanh được chuyển tự thành ASCII thuần — é thành e, ü thành u, ñ thành n — để URL vẫn dễ đọc và an toàn trên trình duyệt và máy chủ. Việc chuyển tự này giữ cho liên kết trông sạch sẽ khi chia sẻ, đồng thời tránh lỗi mã hóa khi URL đi qua email, tin nhắn hay hệ thống cũ không hỗ trợ ký tự Unicode.',
      },
      {
        question: 'Ký hiệu như & và @ trong slug sẽ ra sao?',
        answer:
          'Dấu & được mở rộng thành "and", còn hầu hết dấu câu khác sẽ bị loại bỏ, vì ký hiệu trong URL có thể làm hỏng liên kết hoặc trông lộn xộn khi chia sẻ. Một URL sạch chỉ gồm chữ thường, số và dấu gạch nối sẽ dễ đọc, dễ nhớ và ít gặp lỗi khi người dùng gõ tay hay sao chép.',
      },
      {
        question: 'Từ dừng là gì và vì sao nên loại bỏ chúng?',
        answer:
          'Từ dừng là những từ đệm ngắn như "a", "the", "of" và "in". Loại bỏ chúng giúp rút ngắn slug blog dài mà không thay đổi ý nghĩa cốt lõi, nhờ đó URL trông gọn gàng hơn trong kết quả tìm kiếm và dễ chia sẻ hơn trên mạng xã hội hay trong tài liệu in ấn.',
      },
      {
        question: 'Tôi có thể giữ từ dừng trong slug của mình không?',
        answer:
          'Có. Hãy tắt nút chuyển đổi loại từ dừng, công cụ sẽ giữ lại mọi từ trong tiêu đề của bạn, kể cả từ đệm ngắn. Tùy chọn này hữu ích khi từ dừng mang ý nghĩa quan trọng, chẳng hạn trong cụm "how to" hay tên thương hiệu có chứa giới từ mà bạn không muốn làm mất.',
      },
      {
        question: 'Độ dài lý tưởng cho slug SEO là bao nhiêu?',
        answer:
          'Hãy nhắm tới 3 đến 6 từ có ý nghĩa. Dùng cài đặt Độ dài slug tối đa để giữ slug ngắn gọn, và công cụ sẽ cắt tại ranh giới từ để từ không bao giờ bị tách giữa chừng. Slug ngắn không chỉ đẹp hơn mà còn giúp người dùng đoán được nội dung trang ngay từ URL, trước cả khi họ nhấp vào.',
      },
      {
        question: 'Slug URL có nên viết thường không?',
        answer:
          'Có. Slug viết thường tránh vấn đề nội dung trùng lặp, vì một số máy chủ coi /Blog-Post và /blog-post là hai trang khác nhau. Viết thường nhất quán cũng giúp bạn tránh lỗi liên kết do gõ sai chữ hoa, và giúp URL trông chuyên nghiệp hơn khi xuất hiện trong kết quả tìm kiếm.',
      },
      {
        question: 'Tôi có thể dùng dấu gạch dưới thay cho dấu gạch nối trong slug không?',
        answer:
          'Bạn có thể chọn dấu gạch dưới trong phần cài đặt, nhưng dấu gạch nối được khuyến nghị vì công cụ tìm kiếm coi dấu gạch nối là dấu phân cách từ, còn dấu gạch dưới là dấu nối từ. Trừ khi hệ thống cũ của bạn bắt buộc dùng dấu gạch dưới, hãy luôn chọn dấu gạch nối cho mọi slug mới.',
      },
      {
        question: 'Tiêu đề của tôi có bị tải lên đâu không?',
        answer:
          'Không. Trình tạo Slug URL chạy hoàn toàn trong trình duyệt của bạn, vì vậy tiêu đề của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm xử lý tiêu đề bài viết chưa xuất bản hay tên sản phẩm nội bộ mà không lo rò rỉ kế hoạch biên tập của mình.',
      },
      {
        question: 'Làm thế nào để xem trước URL đầy đủ với tên miền của tôi?',
        answer:
          'Hãy nhập tên miền vào ô Tên miền cơ sở, bảng kết quả sẽ hiển thị mỗi slug dưới dạng URL hoàn chỉnh mà bạn có thể sao chép. Nhờ đó bạn thấy ngay URL cuối cùng sẽ trông như thế nào, kiểm tra độ dài tổng thể và phát hiện sớm những slug quá dài hay khó đọc.',
      },
      {
        question: 'Slug của tôi có nên kết thúc bằng dấu gạch chéo không?',
        answer:
          'Điều này tùy chọn, nhưng hãy nhất quán: dùng nút chuyển đổi dấu gạch chéo cuối để khớp với phong cách URL mà trang của bạn đang dùng, nhờ đó bạn không tạo ra phiên bản trùng lặp. Dù chọn có hay không có dấu gạch chéo, điều quan trọng là mọi trang trên trang của bạn đều tuân theo cùng một quy ước.',
      },
      {
        question: 'Tôi có thể dùng công cụ này cho trang sản phẩm và chuyên mục không?',
        answer:
          'Có. Công cụ hoạt động với mọi tên trang — tiêu đề sản phẩm, tên chuyên mục, trang đích và tiêu đề tài liệu đều chuyển đổi theo cùng một cách. Bạn có thể dán hàng loạt tên sản phẩm từ bảng tính vào và nhận về danh sách slug nhất quán, sẵn sàng nhập vào hệ quản trị nội dung của mình.',
      },
      {
        question: 'Vì sao slug của tôi bị cắt ngắn hơn độ dài tối đa tôi đã đặt?',
        answer:
          'Công cụ cắt ngắn tại dấu gạch nối gần nhất trước giới hạn thay vì cắt giữa từ, vì vậy slug có thể ngắn hơn vài ký tự so với mức tối đa. Cách cắt này giữ cho mọi từ trong slug còn nguyên vẹn và dễ đọc, thay vì để lại một từ bị cắt dở gây khó hiểu cho người đọc và công cụ tìm kiếm.',
      },
      {
        question: 'Tiêu đề viết bằng chữ viết không phải Latin sẽ ra sao?',
        answer:
          'Chỉ dấu Latin được chuyển tự; ký tự thuộc hệ chữ viết khác sẽ bị loại bỏ, vì vậy tiêu đề viết hoàn toàn bằng hệ chữ khác có thể cho ra slug rất ngắn. Hãy thêm phiên bản Latin của các từ khóa chính để có kết quả tốt nhất, hoặc cân nhắc giữ URL gốc bằng chữ viết đó nếu máy chủ của bạn hỗ trợ.',
      },
      {
        question: 'Tôi có thể xuất tất cả slug cùng lúc không?',
        answer:
          'Có. Hãy dùng nút sao chép hàng loạt để sao chép mọi slug, hoặc mọi URL đầy đủ, chỉ bằng một cú nhấp thay vì sao chép từng cái một. Danh sách đã sao chép có thể dán thẳng vào bảng tính, tài liệu kế hoạch hay công cụ nhập liệu của hệ quản trị nội dung mà không cần định dạng lại.',
      },
      {
        question: 'Slug và permalink khác nhau như thế nào?',
        answer:
          'Slug là phần cuối dễ đọc của URL, chẳng hạn "best-cafe-tools", còn permalink là URL hoàn chỉnh gồm tên miền và mọi thư mục. Để chuyển đổi văn bản cho lập trình viên với dấu phân cách gạch dưới, hãy xem công cụ Text to Slug Converter, vốn được thiết kế riêng cho tên biến và tên tệp.',
      },
    ],
  },
  'keyword-density-checker': {
    instructions: [
      {
        title: 'Dán bản nháp bài viết hoặc HTML',
        description:
          'Chèn văn bản thuần túy hoặc HTML thô (giữ bật tính năng Loại bỏ thẻ HTML để bỏ qua thẻ đánh dấu và khối script/style).',
      },
      {
        title: 'Nhập cụm từ mục tiêu và kích thước n-gram',
        description:
          'Chỉ định Từ khóa/Cụm từ mục tiêu tùy chọn và chuyển đổi giữa phân tích cụm 1 từ, 2 từ và 3 từ.',
      },
      {
        title: 'Xem lại bảng tần suất',
        description:
          'Quét các thuật ngữ hàng đầu và tỉ lệ phần trăm (%) của chúng để xác nhận trọng tâm chủ đề và cắt bớt việc lặp cụm từ một cách gượng gạo.',
      },
      {
        title: 'Kiểm tra số từ, thời gian đọc và vốn từ',
        description:
          'Dùng tổng số từ, tỉ lệ từ duy nhất và thời gian đọc để đánh giá bản nháp có quá mỏng, quá dài hay quá lặp lại không.',
      },
      {
        title: 'Viết lại cụm từ dùng quá nhiều một cách tự nhiên',
        description:
          'Khi cùng một cụm 2 hoặc 3 từ chiếm ưu thế trong bảng, hãy thay đổi nó bằng từ đồng nghĩa và đại từ thay vì xóa hoàn toàn từ khóa chủ đề.',
      },
      {
        title: 'Sửa số liệu lạ trước khi tin vào kết quả',
        description:
          'Nếu con số trông sai, hãy chắc chắn tính năng Loại bỏ thẻ HTML đang bật và menu điều hướng, khối mã hay chân trang không bị dán kèm vào bản sao.',
      },
    ],
    examples: [
      {
        title: 'Phát hiện cụm từ lặp vô tình trong bản nháp 500 từ',
        input: 'Bản nháp bài viết + Mục tiêu: "technical seo" + Cụm 2 từ',
        output: 'Xếp hạng các bigram hàng đầu ("technical seo", "meta descriptions", "canonical tags") kèm tỉ lệ %.',
        explanation: 'Làm nổi bật cả sự phù hợp với chủ đề chính lẫn cách diễn đạt lặp lại mà bạn có thể thay đổi tự nhiên.',
      },
      {
        title: 'Kiểm tra mức độ bao phủ chủ đề trong bản sao trang đích',
        input: 'HTML trang đích + Loại bỏ thẻ HTML bật + Mục tiêu: "image compressor"',
        output: '"image compressor" nằm trong top 3 cụm từ với mật độ 1,8%',
        explanation: 'Sau khi loại bỏ thẻ HTML, chỉ văn bản hiển thị được đếm, vì vậy mật độ đo được rất sạch.',
      },
    ],
    benefits: [
      'Phân tích cụm nhiều từ (bigram và trigram), không chỉ từ đơn',
      'Loại bỏ an toàn thẻ <script>, <style> và thẻ HTML trước khi đếm bản sao',
      'Đưa ra hướng dẫn trung thực khuyên không nên nhồi nhét từ khóa một cách máy móc',
      'Giữ bản nháp chưa xuất bản và bản tóm tắt khách hàng hoàn toàn trong bộ nhớ trình duyệt',
    ],
    useCases: [
      'Chỉnh sửa hướng dẫn dài để đảm bảo chủ đề chính xuất hiện rõ ràng mà không nhồi nhét gượng gạo',
      'Kiểm tra bản nháp về sự cân bằng vốn từ theo chủ đề mà không cần đối thủ',
      'Xem lại bản sao trang đích đã được tách sạch khỏi HTML đã xuất',
      'Kiểm tra thời gian đọc trung bình cùng với Công cụ Đếm từ và Công cụ Kiểm tra Độ dễ đọc',
    ],
    faqs: [
      {
        question: 'Có tỉ lệ mật độ từ khóa lý tưởng nào cho Google không?',
        answer:
          'Không. Google khẳng định rõ ràng rằng không có ngưỡng mật độ từ khóa cố định. Hãy viết tự nhiên cho người đọc và chỉ dùng kiểm tra mật độ để xem mức độ bao phủ chủ đề và tránh lặp lại gượng gạo. Một bài viết hay có thể có mật độ từ khóa chính chỉ 0,5% nhưng vẫn xếp hạng tốt nhờ nội dung sâu sắc và cấu trúc rõ ràng.',
      },
      {
        question: 'Tính năng Loại bỏ thẻ HTML xử lý phần tử <script> và <style> như thế nào?',
        answer:
          'Nó loại bỏ toàn bộ khối <script> và <style> trước khi tách các thẻ HTML còn lại, để mã JavaScript hay CSS không bao giờ làm ô nhiễm thống kê từ. Nhờ đó, tên biến, tên lớp và thuộc tính kiểu dáng sẽ không xuất hiện trong bảng tần suất và làm sai lệch kết quả phân tích nội dung thực tế của bạn.',
      },
      {
        question: 'Tôi có thể phân tích URL đối thủ đang hoạt động bằng cách gõ tên miền vào đây không?',
        answer:
          'Không. Hãy dán trực tiếp văn bản hoặc mã nguồn HTML — ứng dụng trình duyệt không thể thu thập dữ liệu website bên thứ ba qua nhiều nguồn gốc nếu không có máy chủ trung gian. Bạn có thể sao chép nội dung từ trang đối thủ bằng cách xem mã nguồn trang, rồi dán vào công cụ để phân tích.',
      },
      {
        question: 'Công cụ Kiểm tra Mật độ Từ khóa có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí, không cần đăng ký, và bạn có thể phân tích bao nhiêu bản nháp tùy thích. Không có giới hạn số từ hay số lần chạy mỗi ngày, vì vậy bạn có thể kiểm tra toàn bộ bài viết trong lịch biên tập của mình mà không tốn chi phí nào.',
      },
      {
        question: 'Mật độ từ khóa chính xác là gì?',
        answer:
          'Mật độ từ khóa là tần suất một từ hoặc cụm từ xuất hiện dưới dạng phần trăm trên tổng số từ trong văn bản. Một cụm từ dùng 5 lần trong 500 từ có mật độ 1%. Để xem bảng tần suất đầy đủ với tính năng xuất CSV, hãy xem công cụ Word Frequency Counter, vốn hiển thị chi tiết hơn cho từng từ riêng lẻ.',
      },
      {
        question: 'Nhồi nhét từ khóa là gì?',
        answer:
          'Nhồi nhét từ khóa là lặp lại một cụm từ thường xuyên một cách gượng gạo chỉ để xếp hạng cao hơn. Cách viết này khiến người đọc khó chịu và có thể làm tổn hại thứ hạng, vì vậy hãy dùng công cụ này để phát hiện sự lặp lại, chứ không phải để đạt một con số mục tiêu nào đó. Hãy viết cho con người trước, rồi mới tối ưu cho công cụ tìm kiếm.',
      },
      {
        question: 'N-gram là gì và vì sao nên kiểm tra cụm 2 và 3 từ?',
        answer:
          'N-gram là chuỗi gồm n từ — bigram là cụm 2 từ và trigram là cụm 3 từ. Kiểm tra chúng sẽ làm lộ các cụm từ lặp lại mà việc đếm từ đơn hoàn toàn bỏ sót. Ví dụ, từ "seo" có thể xuất hiện bình thường, nhưng cụm "technical seo" lặp lại 20 lần mới là dấu hiệu cho thấy bài viết đang lặp ý một cách máy móc.',
      },
      {
        question: 'Tôi cần bao nhiêu từ để kiểm tra mật độ có ý nghĩa?',
        answer:
          'Văn bản ngắn cho ra phần trăm nhiễu, vì vậy hãy nhắm tới ít nhất 300 từ để có kết quả ổn định. Đoạn trích rất ngắn vẫn có thể hiển thị số đếm thô, nhưng hãy thận trọng khi đọc phần trăm của chúng, vì chỉ một lần lặp thêm cũng làm thay đổi tỉ lệ đáng kể.',
      },
      {
        question: 'Công cụ có đếm từ trong tiêu đề và danh sách không?',
        answer:
          'Có. Mọi văn bản hiển thị mà bạn dán vào đều được đếm, gồm tiêu đề, danh sách gạch đầu dòng và chú thích, vì công cụ tìm kiếm cũng nhìn thấy nội dung đó. Điều này quan trọng vì tiêu đề thường chứa từ khóa chính nhiều lần, và việc đếm chúng giúp bạn thấy bức tranh đầy đủ về mức độ lặp lại.',
      },
      {
        question: 'Vì sao cụm từ mục tiêu của tôi hiển thị 0%?',
        answer:
          'Hãy kiểm tra chính tả và cách diễn đạt chính xác — dạng số nhiều, dấu gạch nối và thứ tự từ phải khớp hoàn toàn. Ngoài ra, hãy chắc chắn tính năng Loại bỏ thẻ HTML đang bật nếu bạn đã dán HTML, vì cụm từ có thể đang bị tách ra bởi thẻ đánh dấu mà bạn không nhìn thấy.',
      },
      {
        question: 'Tôi có thể kiểm tra mật độ cho nhiều từ khóa cùng lúc không?',
        answer:
          'Mỗi lần chạy chỉ theo dõi một cụm từ mục tiêu. Để kiểm tra từ khóa khác, hãy thay đổi cụm từ mục tiêu và chạy lại phân tích trên cùng một văn bản. Cách làm này tuy cần vài lần chạy, nhưng giúp bảng tần suất luôn rõ ràng và bạn có thể so sánh mật độ của từng từ khóa một cách riêng biệt.',
      },
      {
        question: 'Công cụ có đếm từ dừng như "the" và "and" không?',
        answer:
          'Có, chúng xuất hiện trong bảng tần suất 1 từ, nhưng hãy tập trung vào từ và cụm từ theo chủ đề — từ dừng xuất hiện thường xuyên một cách tự nhiên trong mọi văn bản và cho bạn biết rất ít về SEO. Hãy bỏ qua những từ này khi đánh giá, và chú ý tới các thuật ngữ chuyên môn thực sự thể hiện chủ đề bài viết.',
      },
      {
        question: 'Bản nháp của tôi có bị tải lên đâu không?',
        answer:
          'Không. Công cụ Kiểm tra Mật độ Từ khóa chạy hoàn toàn trong trình duyệt của bạn, vì vậy bản nháp chưa xuất bản và bản sao của khách hàng không bao giờ rời khỏi thiết bị của bạn. Điều này đặc biệt quan trọng với nội dung độc quyền hay tài liệu khách hàng mà bạn không được phép chia sẻ với bên thứ ba.',
      },
      {
        question: 'Thời gian đọc tốt cho một bài viết blog là bao nhiêu?',
        answer:
          'Điều này tùy thuộc vào chủ đề, nhưng công cụ hiển thị thời gian đọc để bạn đánh giá bài viết có khớp với kỳ vọng của người đọc không — hướng dẫn nhanh có thể chỉ 3 phút, còn hướng dẫn chuyên sâu có thể 10 phút trở lên. Bài viết quá dài so với kỳ vọng của người đọc dễ khiến họ rời trang giữa chừng.',
      },
      {
        question: 'Tôi có thể dán HTML sao chép từ CMS của mình không?',
        answer:
          'Có. Hãy dán HTML thô và giữ bật tính năng Loại bỏ thẻ HTML, để thẻ, script và kiểu dáng bị loại bỏ trước khi từ được đếm. Nhờ đó bạn có thể kiểm tra trực tiếp bài viết đã xuất bản mà không cần sao chép thủ công từng đoạn văn ra khỏi trình chỉnh sửa của CMS.',
      },
      {
        question: 'Công cụ có hoạt động với văn bản không phải tiếng Anh không?',
        answer:
          'Có. Việc đếm từ hoạt động với mọi ngôn ngữ phân tách từ bằng khoảng trắng, và bảng n-gram sẽ liệt kê các cụm từ thường xuyên nhất trong ngôn ngữ đó. Với tiếng Việt, công cụ đếm theo khoảng trắng giữa các từ, vì vậy kết quả vẫn phản ánh đúng mức độ lặp lại của các cụm từ quan trọng.',
      },
      {
        question: 'Làm thế nào để giảm mật độ mà không loại bỏ chủ đề của tôi?',
        answer:
          'Hãy dùng từ đồng nghĩa, đại từ và cách diễn đạt đa dạng thay vì lặp lại chính xác từ khóa. Chủ đề vẫn rõ ràng trong khi văn bản đọc tự nhiên hơn. Ví dụ, thay vì lặp "công cụ nén ảnh" mười lần, bạn có thể viết "công cụ này", "phần mềm nén" hay "giải pháp nén ảnh trực tuyến" ở những vị trí phù hợp.',
      },
      {
        question: 'Đa dạng vốn từ nghĩa là gì?',
        answer:
          'Đó là tỉ lệ từ duy nhất so với tổng số từ. Tỉ lệ cao hơn thường cho thấy cách viết phong phú và đa dạng hơn; tỉ lệ rất thấp có thể là dấu hiệu của bản sao lặp lại. Tuy nhiên, bài viết kỹ thuật với nhiều thuật ngữ chuyên môn lặp lại vẫn có thể có tỉ lệ thấp mà vẫn chất lượng, vì vậy hãy đọc chỉ số này cùng với cảm nhận tổng thể.',
      },
      {
        question: 'Tôi có thể phân tích tài liệu PDF hoặc Word không?',
        answer:
          'Công cụ chấp nhận văn bản đã dán, vì vậy hãy sao chép văn bản ra khỏi tệp PDF hoặc Word rồi dán vào — không cần định dạng cho việc kiểm tra mật độ. Bạn có thể mở tệp, chọn toàn bộ văn bản, sao chép và dán vào công cụ, sau đó bật tính năng loại bỏ thẻ nếu văn bản kèm theo ký tự định dạng lạ.',
      },
      {
        question: 'Vì sao phần trăm thay đổi khi tôi chuyển kích thước n-gram?',
        answer:
          'Mỗi kích thước n-gram có tổng số riêng: văn bản 500 từ có 500 từ đơn nhưng chỉ 499 cụm hai từ, vì vậy cùng một số lần xuất hiện sẽ cho ra phần trăm hơi khác nhau. Sự chênh lệch này là bình thường về mặt toán học, và bạn nên so sánh phần trăm trong cùng một kích thước n-gram thay vì so sánh chéo giữa các kích thước.',
      },
    ],
  },
  'canonical-hreflang-generator': {
    instructions: [
      {
        title: 'Chọn Hreflang hoặc Chuyển hướng 301',
        description:
          'Chọn Thẻ Canonical & Hreflang cho SEO quốc tế hoặc Trình tạo Quy tắc Chuyển hướng 301 cho việc di chuyển URL.',
      },
      {
        title: 'Nhập ngôn ngữ hoặc cặp di chuyển URL',
        description:
          'Thêm mã ngôn ngữ-vùng ISO (en-US, en-GB, x-default) và URL, hoặc dán các cặp đường dẫn cũ sang mới.',
      },
      {
        title: 'Xem lại thẻ hoặc quy tắc đã tạo',
        description:
          'Quét mọi mã ngôn ngữ, URL và cặp chuyển hướng để tìm lỗi đánh máy trước khi sao chép — một mã sai có thể phá hỏng toàn bộ bộ hreflang.',
      },
      {
        title: 'Thêm x-default và canonical tự tham chiếu',
        description:
          'Thêm ngôn ngữ dự phòng x-default và chắc chắn mọi trang đều liệt kê chính nó làm canonical của mình.',
      },
      {
        title: 'Sao chép cấu hình sẵn sàng cho nền tảng',
        description:
          'Sao chép trực tiếp thẻ <link> HTML, dòng XML <xhtml:link>, hoặc quy tắc _redirects / .htaccess / nginx.',
      },
      {
        title: 'Xác thực sau khi triển khai',
        description:
          'Sau khi trang hoạt động, hãy xem mã nguồn trang hoặc dùng công cụ xác thực hreflang để xác nhận thẻ có mặt, có tính tương hỗ và trỏ tới đúng URL.',
      },
    ],
    examples: [
      {
        title: 'Quy tắc di chuyển 301 trên Cloudflare Pages',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Xuất ra đúng cú pháp _redirects của Cloudflare Pages với trạng thái 301 vĩnh viễn rõ ràng.',
      },
      {
        title: 'Bộ hreflang cho trang tiếng Anh và tiếng Tây Ban Nha',
        input: 'en: https://example.com/ · es: https://example.com/es/ · x-default: https://example.com/',
        output: 'Thẻ <link rel="alternate" hreflang="..."> tương hỗ cho cả hai trang, kèm x-default',
        explanation: 'Mỗi trang liên kết tới chính nó và tới phiên bản còn lại, để công cụ tìm kiếm hiển thị đúng phiên bản ngôn ngữ.',
      },
    ],
    benefits: [
      'Xuất cả định dạng HTML <link rel="alternate"> và XML <xhtml:link> một cách nhất quán',
      'Hỗ trợ cú pháp _redirects của Cloudflare Pages, .htaccess của Apache và máy chủ Nginx',
      'Khuyến khích canonical tự tham chiếu và ngôn ngữ dự phòng x-default',
      'Tự động chuẩn hóa dấu gạch chéo đầu trên đường dẫn nguồn của chuyển hướng',
    ],
    useCases: [
      'Ra mắt trang khu vực tiếng Anh/Tây Ban Nha/Pháp đã bản địa hóa một cách gọn gàng mà không bị phạt trùng lặp',
      'Bảo toàn giá trị liên kết ngược khi đổi tên slug trong lúc thiết kế lại',
      'Tạo tệp triển khai /public/_redirects cho Cloudflare Pages trong vài giây',
      'Xác minh bộ hreflang tương hỗ trước khi gửi sơ đồ trang quốc tế',
    ],
    faqs: [
      {
        question: 'Thẻ hreflang có phải hai chiều / tương hỗ không?',
        answer:
          'Có. Nếu Trang A liên kết tới Trang B bằng hreflang="es", Trang B phải liên kết ngược lại Trang A bằng hreflang="en" (và tới chính nó), nếu không công cụ tìm kiếm sẽ bỏ qua chú thích. Tính tương hỗ là cách Google xác nhận các trang thực sự là phiên bản dịch của nhau, chứ không phải hai trang tình cờ có nội dung tương tự.',
      },
      {
        question: 'Khi nào nên dùng x-default trong hreflang?',
        answer:
          'Hãy dùng hreflang="x-default" để chỉ định trang quốc tế dự phòng cho khách truy cập mà ngôn ngữ hoặc vùng của trình duyệt không khớp với bất kỳ phiên bản thay thế cụ thể nào. Ví dụ, người dùng tiếng Đức truy cập trang chỉ có bản tiếng Anh và tiếng Tây Ban Nha sẽ được đưa tới trang x-default mà bạn đã chọn.',
      },
      {
        question: 'URL canonical có nên trỏ qua ngôn ngữ khác (ví dụ es → en) không?',
        answer:
          'Không. Mỗi phiên bản ngôn ngữ đã dịch nên khai báo canonical tự tham chiếu trỏ tới chính nó, còn hreflang sẽ kết nối các phiên bản bản địa hóa tương đương. Trỏ canonical qua ngôn ngữ khác sẽ khiến Google coi bản dịch là bản sao của bản gốc và có thể không lập chỉ mục bản dịch đó.',
      },
      {
        question: 'Trình tạo Hreflang có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí, không cần đăng ký, và bạn có thể tạo bao nhiêu bộ hreflang và quy tắc chuyển hướng tùy thích. Dù trang của bạn có hai ngôn ngữ hay hai mươi ngôn ngữ, công cụ vẫn tạo đầy đủ bộ thẻ tương hỗ mà không giới hạn số lượng hay tính phí.',
      },
      {
        question: 'Hreflang là gì và vì sao nó quan trọng?',
        answer:
          'Hreflang là chú thích HTML hoặc XML cho công cụ tìm kiếm biết nên hiển thị phiên bản ngôn ngữ và khu vực nào của trang cho từng khách truy cập, để người dùng tiếng Anh thấy trang tiếng Anh và người dùng tiếng Tây Ban Nha thấy trang tiếng Tây Ban Nha. Nếu không có hreflang, Google có thể hiển thị nhầm phiên bản, khiến người dùng phải tự tìm bản dịch.',
      },
      {
        question: 'Mã ngôn ngữ-vùng nên dùng định dạng nào?',
        answer:
          'Hãy dùng mã ngôn ngữ ISO kèm vùng ISO tùy chọn, như en, es, fr-CA hay en-GB. Ngôn ngữ đứng trước, sau đó là dấu gạch nối, rồi vùng viết hoa. Mã vùng phải là mã quốc gia ISO hai chữ cái, ví dụ GB cho Vương quốc Anh chứ không phải UK, vì mã sai sẽ bị công cụ tìm kiếm bỏ qua trong im lặng.',
      },
      {
        question: 'Tôi có cần hreflang nếu trang của tôi chỉ có một ngôn ngữ không?',
        answer:
          'Không. Hreflang chỉ hữu ích khi cùng một nội dung tồn tại ở nhiều hơn một ngôn ngữ hoặc phiên bản khu vực. Với trang đơn ngữ, việc thêm hreflang không mang lại lợi ích gì và chỉ làm mã nguồn thêm phức tạp, vì vậy hãy tập trung vào canonical và sơ đồ trang thay vào đó.',
      },
      {
        question: 'Tôi có thể đặt hreflang trong sơ đồ trang XML thay vì HTML không?',
        answer:
          'Có. Công cụ xuất cả hai định dạng: thẻ liên kết HTML cho phần head của trang và khối xhtml:link cho sơ đồ trang XML. Hãy chọn một nơi và giữ nhất quán, vì việc khai báo ở cả hai nơi với dữ liệu khác nhau có thể gây nhầm lẫn cho công cụ tìm kiếm và khiến chú thích bị bỏ qua.',
      },
      {
        question: 'Canonical tự tham chiếu là gì?',
        answer:
          'Đó là thẻ canonical trên một trang trỏ tới chính trang đó. Mọi phiên bản của trang đều nên có một thẻ như vậy, kể cả mỗi phiên bản đã dịch. Canonical tự tham chiếu giúp Google hiểu đâu là URL chuẩn của trang, ngay cả khi trang có thể truy cập qua nhiều biến thể URL có tham số theo dõi hay dấu gạch chéo khác nhau.',
      },
      {
        question: 'Khi nào nên dùng chuyển hướng 301 thay vì thẻ canonical?',
        answer:
          'Hãy dùng chuyển hướng 301 khi trang đã chuyển vĩnh viễn sang URL mới. Hãy dùng thẻ canonical khi hai trang tương tự nhau đều phải tồn tại và bạn muốn công cụ tìm kiếm ưu tiên một trong hai trang đó. Chuyển hướng sẽ đưa người dùng tới trang mới ngay lập tức, còn canonical chỉ là gợi ý cho công cụ tìm kiếm.',
      },
      {
        question: 'Chuyển hướng 301 và 302 khác nhau như thế nào?',
        answer:
          'Chuyển hướng 301 là vĩnh viễn và truyền hầu hết tín hiệu xếp hạng sang URL mới; chuyển hướng 302 là tạm thời và báo cho công cụ tìm kiếm rằng URL cũ có thể quay lại, vì vậy nó là lựa chọn sai cho việc di chuyển vĩnh viễn. Dùng 302 cho trang chuyển vĩnh viễn có thể khiến Google giữ URL cũ trong chỉ mục và không chuyển giao thứ hạng.',
      },
      {
        question: 'Tệp _redirects của Cloudflare Pages hoạt động như thế nào?',
        answer:
          'Bạn đặt tệp _redirects trong thư mục public của trang, mỗi dòng là một quy tắc — đường dẫn cũ, đường dẫn mới và mã trạng thái — và Cloudflare sẽ áp dụng các chuyển hướng khi trang được triển khai. Tệp này rất đơn giản, không cần cấu hình máy chủ phức tạp, và hỗ trợ cả ký tự đại diện cho việc di chuyển cả thư mục.',
      },
      {
        question: 'Tôi có thể chuyển hướng cả một thư mục bằng một quy tắc không?',
        answer:
          'Công cụ xuất một quy tắc cho mỗi cặp URL. Để di chuyển cả thư mục, hãy dùng quy tắc ký tự đại diện hoặc splat trong Cloudflare Pages hay Apache, hoặc tạo toàn bộ danh sách cặp ở đây. Quy tắc splat sẽ chuyển mọi đường dẫn con trong thư mục cũ sang vị trí tương ứng trong thư mục mới mà không cần liệt kê từng trang.',
      },
      {
        question: 'Chuyển hướng 301 có truyền tín hiệu xếp hạng sang trang mới không?',
        answer:
          'Có. Chuyển hướng 301 truyền hầu hết tín hiệu xếp hạng và giá trị liên kết của trang cũ sang URL mới, đó là lý do nó là lựa chọn chuẩn cho việc di chuyển vĩnh viễn. Tuy nhiên, một phần nhỏ giá trị có thể bị mất trong quá trình chuyển đổi, vì vậy hãy tránh chuỗi chuyển hướng dài qua nhiều bước trung gian.',
      },
      {
        question: 'URL cũ có nên ở lại trong sơ đồ trang sau khi chuyển hướng 301 không?',
        answer:
          'Không. Hãy xóa URL đã chuyển hướng khỏi sơ đồ trang và chỉ liệt kê URL đích mới, để công cụ tìm kiếm thu thập dữ liệu các trang hiện tại. Giữ URL cũ trong sơ đồ trang sẽ lãng phí ngân sách thu thập và gửi tín hiệu rằng URL cũ vẫn còn quan trọng, dù nó đã chuyển đi nơi khác.',
      },
      {
        question: 'Tôi nên giữ chuyển hướng 301 hoạt động trong bao lâu?',
        answer:
          'Hãy giữ ít nhất một năm, và lý tưởng nhất là vĩnh viễn. Xóa chuyển hướng quá sớm có thể làm hỏng liên kết ngược cũ và dấu trang vẫn trỏ tới URL cũ. Vì chi phí duy trì một quy tắc chuyển hướng gần như bằng không, không có lý do gì để xóa nó sau khi trang đã chuyển đi.',
      },
      {
        question: 'Hreflang có tự sửa được vấn đề nội dung trùng lặp không?',
        answer:
          'Không tự nó làm được. Hreflang cho công cụ tìm kiếm biết nên hiển thị phiên bản nào cho từng đối tượng, nhưng trang thực sự trùng lặp trong cùng một ngôn ngữ vẫn cần thẻ canonical hoặc hợp nhất nội dung. Hreflang chỉ giải quyết vấn đề phiên bản ngôn ngữ, còn nội dung trùng lặp trong cùng ngôn ngữ là vấn đề hoàn toàn khác.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi dùng mã ngôn ngữ sai?',
        answer:
          'Công cụ tìm kiếm sẽ bỏ qua mã không hợp lệ, vì vậy lỗi đánh máy như en-UK thay vì en-GB sẽ âm thầm phá hỏng phiên bản ngôn ngữ đó. Hãy kiểm tra kỹ mọi mã trước khi triển khai, và dùng công cụ xác thực hreflang để xác nhận từng mã sau khi trang đã hoạt động.',
      },
      {
        question: 'Danh sách URL của tôi có bị tải lên đâu không?',
        answer:
          'Không. Trình tạo Canonical, Hreflang & Chuyển hướng 301 chạy hoàn toàn trong trình duyệt của bạn, vì vậy URL và kế hoạch di chuyển của bạn không bao giờ rời khỏi thiết bị. Điều này đặc biệt quan trọng khi kế hoạch di chuyển chứa URL nội bộ hay cấu trúc trang chưa công bố.',
      },
      {
        question: 'Tôi có thể tạo thẻ hreflang cho hơn hai ngôn ngữ không?',
        answer:
          'Có. Hãy thêm bao nhiêu hàng ngôn ngữ tùy theo số ngôn ngữ trang của bạn hỗ trợ — công cụ sẽ tạo bộ tương hỗ đầy đủ bao phủ mọi phiên bản ngôn ngữ bạn nhập. Mỗi trang trong bộ sẽ liên kết tới tất cả các trang còn lại, nhờ đó Google luôn biết đâu là phiên bản phù hợp cho từng người dùng.',
      },
    ],
  },
  'on-page-seo-checker': {
    instructions: [
      {
        title: 'Sao chép mã nguồn HTML từ trang của bạn',
        description:
          'Mở Xem mã nguồn trang (hoặc kiểm tra tệp dist/index.html đã dựng) rồi dán HTML vào ô văn bản nguồn.',
      },
      {
        title: 'Xem Điểm kiểm tra DOM và danh sách kiểm tra',
        description:
          'Kiểm tra chỉ báo đạt/cảnh báo cho tiêu đề, mô tả meta, một H1 duy nhất, liên kết canonical, văn bản alt và dữ liệu có cấu trúc.',
      },
      {
        title: 'Xác minh dàn ý tiêu đề và liên kết',
        description:
          'Cuộn qua cây H1–H4 đã trích xuất và số lượng liên kết nội bộ/ngoài để sửa cấp độ bị bỏ qua hoặc thẻ bị thiếu.',
      },
      {
        title: 'Sửa cảnh báo theo thứ tự ưu tiên',
        description:
          'Bắt đầu với tiêu đề bị thiếu hoặc quá dài và mô tả meta, sau đó là thẻ H1 trùng lặp, rồi văn bản alt của hình ảnh bị thiếu.',
      },
      {
        title: 'Dán lại và kiểm tra lại sau khi sửa',
        description:
          'Dán HTML đã cập nhật và chạy kiểm tra lại để xác nhận điểm số đã cải thiện và không xuất hiện cảnh báo mới.',
      },
      {
        title: 'Kiểm tra trang hiển thị bằng JavaScript đúng cách',
        description:
          'Nếu thẻ meta bị thiếu trong mã nguồn thô Xem nguồn trang của trang React hoặc SPA, hãy sao chép outerHTML trực tiếp từ bảng Elements trong DevTools của trình duyệt.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra tệp HTML tĩnh đã xuất và hiển thị',
        input: 'Tài liệu <html> hoàn chỉnh với <title>, <meta description>, H1/H2 và JSON-LD',
        output: '6/6 kiểm tra đạt · Dàn ý H1–H4 + phân tích liên kết nội bộ/ngoài',
        explanation: 'Dùng DOMParser gốc của trình duyệt một cách sạch sẽ mà không thực thi script không đáng tin.',
      },
      {
        title: 'Phát hiện H1 trùng lặp trong mẫu blog',
        input: 'HTML bài đăng WordPress có hai thẻ H1',
        output: 'Cảnh báo: tìm thấy 2 thẻ H1 trên trang — chỉ nên có một',
        explanation: 'Quá trình kiểm tra trích xuất dàn ý tiêu đề, nhờ đó H1 trùng lặp và cấp độ bị bỏ qua hiện ra ngay lập tức.',
      },
    ],
    benefits: [
      'Dùng DOMParser gốc (không bao giờ thực thi thẻ <script> đã dán hay tải trọng bên ngoài)',
      'Trung thực về giới hạn CORS của trình duyệt — không bao giờ giả vờ thu thập URL từ xa bị chặn',
      'Trích xuất sạch sẽ toàn bộ dàn ý tài liệu H1–H4',
      'Xác minh sự hiện diện của Open Graph và JSON-LD cùng với thẻ SEO cổ điển',
    ],
    useCases: [
      'Kiểm tra chất lượng trước triển khai trên bản dựng staging và tệp HTML tĩnh đã xuất',
      'Kiểm tra mẫu blog CMS xem có vô tình trùng thẻ <h1> hay thuộc tính alt trống không',
      'Xác minh trang hiển thị phía máy chủ phát ra thẻ canonical và meta một cách sạch sẽ',
      'Kiểm tra trang HTML bị khóa bằng email hoặc localhost mà trình thu thập đám mây không truy cập được',
    ],
    faqs: [
      {
        question: 'Vì sao công cụ này yêu cầu tôi dán mã nguồn HTML thay vì gõ URL website?',
        answer:
          'Trình duyệt áp đặt chính sách Chia sẻ tài nguyên qua nhiều nguồn gốc (CORS) chặn JavaScript phía máy khách đọc website bên ngoài tùy ý, và URL localhost hay staging riêng tư thì máy chủ công khai không thể truy cập. Việc dán mã nguồn Xem nguồn trang giúp kiểm tra cục bộ đáng tin cậy 100% và hoàn toàn riêng tư, kể cả với trang chưa công khai.',
      },
      {
        question: 'SPA hiển thị bằng JavaScript có kiểm tra đúng bằng mã nguồn thô Xem nguồn trang không?',
        answer:
          'Với SPA hiển thị phía máy khách, nơi React chèn thẻ meta lúc chạy, hãy sao chép outerHTML trực tiếp từ bảng Elements trong DevTools của Chrome hoặc Firefox thay vì dùng mã nguồn thô. Mã nguồn thô chỉ chứa khung HTML ban đầu mà máy chủ gửi, còn outerHTML phản ánh trang sau khi JavaScript đã chạy xong và thẻ meta đã xuất hiện.',
      },
      {
        question: 'DOMParser có thực thi script trong HTML đã dán không?',
        answer:
          'Không. DOMParser.parseFromString(..., "text/html") chỉ dựng một cây DOM trơ để kiểm tra, mà không chạy JavaScript hay tải hình ảnh bên ngoài. Nhờ đó bạn có thể dán mã nguồn từ trang không đáng tin một cách an toàn, mà không lo mã độc chạy trong trình duyệt hay dữ liệu bị gửi đi nơi khác.',
      },
      {
        question: 'Công cụ Kiểm tra SEO On-Page có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí, không cần đăng ký, và bạn có thể kiểm tra bao nhiêu trang tùy thích. Bạn có thể kiểm tra toàn bộ trang trong lúc thiết kế lại hay kiểm tra chất lượng trước mỗi lần triển khai mà không tốn chi phí hay bị giới hạn số lần chạy.',
      },
      {
        question: 'Độ dài lý tưởng cho thẻ tiêu đề là bao nhiêu?',
        answer:
          'Hãy nhắm tới 50 đến 60 ký tự. Tiêu đề dài hơn sẽ bị cắt trong kết quả tìm kiếm, còn tiêu đề rất ngắn lại lãng phí cơ hội mô tả trang rõ ràng. Hãy đặt từ khóa chính và lợi ích quan trọng nhất ở đầu tiêu đề, để ngay cả khi bị cắt, phần hiển thị vẫn đủ sức thuyết phục người đọc nhấp vào.',
      },
      {
        question: 'Độ dài lý tưởng cho mô tả meta là bao nhiêu?',
        answer:
          'Hãy nhắm tới 150 đến 160 ký tự. Độ dài đó thường hiển thị đầy đủ trong kết quả tìm kiếm mà không bị cắt ngắn. Mô tả nên tóm tắt lợi ích của trang và chứa lời kêu gọi hành động nhẹ nhàng, thay vì chỉ lặp lại tiêu đề hay nhồi nhét từ khóa một cách máy móc.',
      },
      {
        question: 'Một trang nên có bao nhiêu thẻ H1?',
        answer:
          'Một thẻ. Một H1 duy nhất nêu chủ đề chính của trang; các chủ đề phụ thuộc vào tiêu đề H2 và H3 bên dưới nó. Nhiều H1 sẽ khiến công cụ tìm kiếm và trình đọc màn hình khó xác định đâu mới là chủ đề chính, và thường là dấu hiệu cho thấy mẫu trang đang dùng H1 cho logo hay tiêu đề phụ.',
      },
      {
        question: 'Tôi có thể bỏ qua cấp độ tiêu đề, ví dụ H1 rồi tới H3 không?',
        answer:
          'Hãy tránh điều đó. Giữ hệ thống phân cấp theo thứ tự — H1, rồi H2, rồi H3 — để công cụ tìm kiếm và trình đọc màn hình có thể theo dõi cấu trúc trang. Bỏ qua cấp độ khiến dàn ý tài liệu bị rời rạc, và người dùng trình đọc màn hình sẽ khó điều hướng giữa các phần của trang.',
      },
      {
        question: 'Điều gì xảy ra nếu trang của tôi không có thẻ canonical?',
        answer:
          'Công cụ tìm kiếm sẽ tự chọn một URL canonical, có thể không phải phiên bản bạn muốn. Thêm thẻ canonical rõ ràng sẽ loại bỏ việc phỏng đoán này. Điều này đặc biệt quan trọng với trang có nhiều biến thể URL do tham số theo dõi, phân trang hay phiên bản có và không có dấu gạch chéo cuối.',
      },
      {
        question: 'Vì sao văn bản alt của hình ảnh quan trọng với SEO?',
        answer:
          'Văn bản alt mô tả hình ảnh cho công cụ tìm kiếm và trình đọc màn hình, giúp hình ảnh xếp hạng trong tìm kiếm hình ảnh, và giữ trang vẫn dùng được khi hình ảnh không tải được. Alt tốt nên mô tả ngắn gọn nội dung hình ảnh, thay vì nhồi từ khóa hay để trống, vì cả người dùng khiếm thị lẫn Google đều dựa vào nó.',
      },
      {
        question: 'JSON-LD là gì và vì sao nên kiểm tra nó?',
        answer:
          'JSON-LD là khối dữ liệu có cấu trúc mô tả nội dung trang của bạn cho công cụ tìm kiếm, tạo ra kết quả nổi bật như xếp hạng, FAQ và breadcrumb. Công cụ kiểm tra xác nhận nó có mặt trên trang hay không. Nếu JSON-LD bị thiếu do lỗi mẫu, bạn sẽ mất cơ hội hiển thị nổi bật mà không nhận được cảnh báo nào từ Google.',
      },
      {
        question: 'Công cụ có kiểm tra thẻ Open Graph không?',
        answer:
          'Có. Công cụ báo cáo thẻ Open Graph như og:title và og:image có mặt hay không, để trang của bạn xem trước đúng khi chia sẻ trên mạng xã hội. Thiếu og:image là một trong những lỗi phổ biến nhất khiến liên kết chia sẻ trông trống rỗng, và kiểm tra này giúp bạn phát hiện lỗi đó trước khi đăng tải.',
      },
      {
        question: 'Tôi có thể kiểm tra trang cần đăng nhập không?',
        answer:
          'Có. Vì bạn tự dán HTML, bạn có thể kiểm tra trang riêng tư, staging và localhost mà trình thu thập công khai không thể truy cập. Chỉ cần đăng nhập bằng trình duyệt của bạn, mở mã nguồn trang hay sao chép outerHTML, rồi dán vào công cụ — không cần cấp quyền truy cập cho bất kỳ dịch vụ bên ngoài nào.',
      },
      {
        question: 'HTML của tôi có bị tải lên đâu không?',
        answer:
          'Không. Công cụ Kiểm tra SEO On-Page chạy hoàn toàn trong trình duyệt của bạn, vì vậy mã nguồn trang của bạn không bao giờ rời khỏi thiết bị. Bạn có thể kiểm tra mã nguồn chứa khóa API, nội dung chưa ra mắt hay logic kinh doanh nội bộ mà không lo rò rỉ sang máy chủ bên thứ ba.',
      },
      {
        question: 'Điểm kiểm tra của tôi thấp — tôi nên sửa gì trước?',
        answer:
          'Hãy sửa theo thứ tự sau: tiêu đề bị thiếu hoặc quá dài, mô tả meta bị thiếu, thẻ H1 trùng lặp, rồi văn bản alt của hình ảnh bị thiếu. Thứ tự này ưu tiên những yếu tố ảnh hưởng trực tiếp tới cách trang xuất hiện trong kết quả tìm kiếm, trước khi xử lý các vấn đề nhỏ hơn về cấu trúc hay liên kết.',
      },
      {
        question: 'Công cụ có đếm liên kết nội bộ và liên kết ngoài không?',
        answer:
          'Có. Công cụ đếm liên kết nội bộ và liên kết ngoài riêng biệt, để bạn thấy trang có liên kết ra ngoài đủ hay không và điều hướng nội bộ có hiện diện hay không. Một trang không có liên kết nội bộ nào sẽ khó được Google khám phá, còn trang không liên kết ra ngoài có thể trông như nội dung khép kín thiếu tham chiếu đáng tin.',
      },
      {
        question: 'Tôi có thể kiểm tra trang chủ và bài viết blog bằng cùng một công cụ không?',
        answer:
          'Có. Hãy dán mã nguồn HTML của từng trang riêng biệt và kiểm tra từng trang một — mỗi trang đều nhận điểm số và danh sách kiểm tra riêng. Cách này giúp bạn so sánh chất lượng SEO giữa các loại trang, chẳng hạn trang chủ thường đầy đủ thẻ hơn bài viết blog dùng mẫu cũ chưa được cập nhật.',
      },
      {
        question: 'Vì sao một số kiểm tra hiển thị cảnh báo thay vì lỗi?',
        answer:
          'Cảnh báo gắn cờ những vấn đề về phương pháp tốt nhất đáng sửa nhưng không phải lỗi nghiêm trọng, chẳng hạn tiêu đề hơi dài hay cấp độ tiêu đề bị bỏ qua. Lỗi dành cho vấn đề nghiêm trọng như thiếu tiêu đề hoàn toàn, còn cảnh báo giúp bạn ưu tiên cải tiến dần mà không hoảng sợ vì điểm số chưa hoàn hảo.',
      },
      {
        question: 'Công cụ có hoạt động với trang WordPress không?',
        answer:
          'Có. Hãy mở Xem mã nguồn trang trên bất kỳ trang WordPress nào, sao chép HTML rồi dán vào — công cụ hoạt động với đầu ra của mọi CMS. Dù bạn dùng WordPress, Shopify hay trang tĩnh tự dựng, công cụ chỉ đọc HTML cuối cùng mà trình duyệt nhận được, vì vậy kết quả luôn phản ánh đúng những gì Google thấy.',
      },
      {
        question: 'Tôi nên chạy kiểm tra SEO on-page bao lâu một lần?',
        answer:
          'Hãy chạy kiểm tra mỗi khi bạn thay đổi mẫu, xuất bản loại trang mới hay sau khi thiết kế lại — và kiểm tra lại sau khi sửa để xác nhận điểm số đã cải thiện. Kiểm tra định kỳ hàng quý cũng giúp phát hiện mẫu bị hỏng sau khi cập nhật plugin hay thay đổi giao diện mà bạn không để ý.',
      },
    ],
  },
  'robots-meta-tag-generator': {
    instructions: [
      {
        title: 'Chọn chỉ thị lập chỉ mục và liên kết',
        description:
          'Đặt index/noindex, follow/nofollow và hạn chế tùy chọn như noarchive, nosnippet hay noimageindex.',
      },
      {
        title: 'Tinh chỉnh giới hạn đoạn trích và bản xem trước',
        description:
          'Cấu hình max-snippet (-1 cho không giới hạn), max-image-preview (large cho Google Discover) và max-video-preview.',
      },
      {
        title: 'Sao chép thẻ HTML hoặc tiêu đề HTTP',
        description:
          'Dùng thẻ meta HTML trong <head>, hoặc triển khai khối tiêu đề X-Robots-Tag cho tệp PDF và nội dung tải xuống không phải HTML.',
      },
      {
        title: 'Chọn định dạng đầu ra phù hợp',
        description:
          'Dùng thẻ meta HTML cho trang thông thường, X-Robots-Tag cho tệp PDF và tệp không phải HTML khác, và khối _headers cho quy tắc đường dẫn Cloudflare.',
      },
      {
        title: 'Đặt đầu ra vào đúng vị trí',
        description:
          'Đặt thẻ meta vào phần <head> của trang, hoặc thêm quy tắc tiêu đề vào cấu hình máy chủ hay tệp _headers của Cloudflare, rồi triển khai.',
      },
      {
        title: 'Trang vẫn hiển thị trong kết quả tìm kiếm?',
        description:
          'Noindex chỉ có hiệu lực sau khi công cụ tìm kiếm thu thập lại trang, có thể mất vài ngày. Hãy kiểm tra robots.txt không chặn việc thu thập, rồi xác nhận trong Search Console.',
      },
    ],
    examples: [
      {
        title: 'Loại tệp PDF riêng tư khỏi chỉ mục qua _headers của Cloudflare Pages',
        input: 'noindex, nofollow · Đường dẫn: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'Tiêu đề HTTP X-Robots-Tag hoạt động với tệp PDF, hình ảnh và tệp không phải HTML vốn không có phần tử <head>.',
      },
      {
        title: 'Đặt noindex, nofollow cho trang cảm ơn',
        input: 'noindex, nofollow · Định dạng: Thẻ meta HTML',
        output: '<meta name="robots" content="noindex, nofollow">',
        explanation: 'Trang cảm ơn vẫn hoạt động nhưng không xuất hiện trong kết quả tìm kiếm — đúng như mong muốn với trang chuyển đổi.',
      },
    ],
    benefits: [
      'Xuất đồng thời thẻ <meta> HTML, tiêu đề HTTP X-Robots-Tag chung và _headers của Cloudflare Pages',
      'Gồm giá trị mặc định max-image-preview:large mà Google Discover khuyến nghị',
      'Tự động ngăn kết hợp mâu thuẫn (tắt thanh trượt đoạn trích và hình ảnh khi nosnippet hay noimageindex đang bật)',
      'Giúp việc gỡ chỉ mục tệp PDF và tài nguyên không phải HTML qua tiêu đề HTTP trở nên đơn giản',
    ],
    useCases: [
      'Ngăn trang cảm ơn, kết quả tìm kiếm nội bộ hay cổng thành viên lọt vào chỉ mục Google',
      'Gỡ chỉ mục tài liệu PDF hay whitepaper đã lưu trữ qua tiêu đề X-Robots-Tag',
      'Bật max-image-preview:large cho bài viết biên tập nhắm tới Google Discover',
      'Thêm giới hạn noarchive nghiêm ngặt hoặc giới hạn độ dài đoạn trích cho tài liệu trả phí hay nhạy cảm',
    ],
    faqs: [
      {
        question: 'Khi nào nên dùng X-Robots-Tag thay vì <meta name="robots">?',
        answer:
          'Hãy dùng tiêu đề HTTP X-Robots-Tag cho tệp không phải HTML (như PDF, bảng tính hay hình ảnh) hoặc khi áp dụng quy tắc lập chỉ mục trên toàn bộ đường dẫn thư mục qua quy tắc CDN. Thẻ meta chỉ hoạt động trong trang HTML, còn tiêu đề HTTP có thể gắn vào mọi loại phản hồi mà máy chủ trả về, kể cả tệp tải xuống.',
      },
      {
        question: 'Tôi có nên kết hợp Disallow trong robots.txt với <meta name="robots" content="noindex"> không?',
        answer:
          'Không! Nếu một URL bị chặn trong robots.txt, bot tìm kiếm không thể thu thập trang để đọc thẻ HTML <meta name="robots" content="noindex"> bên trong nó. Hãy cho phép thu thập nếu bạn dựa vào meta noindex. Đây là lỗi phổ biến nhất khi gỡ chỉ mục: chặn trong robots.txt khiến thẻ noindex không bao giờ được nhìn thấy.',
      },
      {
        question: 'max-snippet:-1 nghĩa là gì?',
        answer:
          'Giá trị -1 cho phép công cụ tìm kiếm chọn bất kỳ độ dài đoạn trích nào mà chúng cho là hữu ích, trong khi 0 ngăn đoạn trích văn bản và số nguyên dương (như 160) giới hạn độ dài ký tự của đoạn trích. Giá trị -1 là mặc định và phù hợp với hầu hết trang, trừ khi bạn muốn kiểm soát chặt chẽ nội dung hiển thị.',
      },
      {
        question: 'Trình tạo Thẻ Meta Robots có miễn phí không?',
        answer:
          'Có. Công cụ hoàn toàn miễn phí, không cần đăng ký, và bạn có thể tạo bao nhiêu thẻ và quy tắc tiêu đề tùy thích. Dù bạn quản lý một trang nhỏ hay hàng trăm trang đích, công cụ vẫn tạo thẻ cho từng trang mà không giới hạn số lượng hay yêu cầu tài khoản trả phí.',
      },
      {
        question: 'Noindex có tác dụng gì?',
        answer:
          'Noindex bảo công cụ tìm kiếm đừng đưa trang vào kết quả tìm kiếm. Trang vẫn hoạt động và có thể truy cập được, nhưng sẽ không xuất hiện trên Google hay Bing. Đây là cách chuẩn để giữ trang tiện ích như trang cảm ơn hay trang quản trị luôn truy cập được mà không làm loãng chỉ mục tìm kiếm của bạn.',
      },
      {
        question: 'Nofollow có tác dụng gì?',
        answer:
          'Nofollow bảo công cụ tìm kiếm đừng theo các liên kết trên trang hay truyền tín hiệu xếp hạng qua chúng. Nó hữu ích cho trang chứa liên kết không đáng tin hoặc liên kết trả phí. Lưu ý rằng nofollow trên trang không ngăn Google lập chỉ mục chính trang đó, mà chỉ ảnh hưởng tới cách liên kết trên trang được xử lý.',
      },
      {
        question: 'Robots.txt và thẻ meta robots khác nhau như thế nào?',
        answer:
          'Robots.txt chặn việc thu thập một URL, còn thẻ meta robots kiểm soát việc trang đã thu thập có được lập chỉ mục hay không. Hai cơ chế này giải quyết hai vấn đề khác nhau và không được kết hợp một cách cẩu thả, vì chặn thu thập sẽ khiến thẻ meta noindex không bao giờ được đọc.',
      },
      {
        question: 'Noindex mất bao lâu để có hiệu lực?',
        answer:
          'Nó chỉ có hiệu lực sau khi công cụ tìm kiếm thu thập lại trang, có thể mất vài ngày hoặc vài tuần tùy vào tần suất trang được truy cập. Trang phổ biến được thu thập hàng ngày sẽ biến mất khỏi kết quả nhanh hơn trang ít người truy cập, vì vậy hãy kiên nhẫn và kiểm tra lại trong Search Console sau một thời gian.',
      },
      {
        question: 'max-image-preview:large là gì?',
        answer:
          'Nó cho phép công cụ tìm kiếm hiển thị bản xem trước hình ảnh lớn cho trang của bạn, điều mà Google khuyến nghị cho trang nhắm tới Google Discover. Bản xem trước lớn giúp bài viết nổi bật hơn trong dòng tin Discover và tăng tỉ lệ nhấp, đặc biệt với bài viết có hình ảnh đại diện chất lượng cao.',
      },
      {
        question: 'Nosnippet có tác dụng gì?',
        answer:
          'Nosnippet ngăn công cụ tìm kiếm hiển thị bất kỳ đoạn trích văn bản nào cho trang trong kết quả tìm kiếm, vì vậy chỉ tiêu đề và URL xuất hiện. Hãy dùng nó khi nội dung trang nhạy cảm hay đoạn trích có thể tiết lộ thông tin bạn không muốn hiển thị, chẳng hạn đáp án bài kiểm tra hay nội dung trả phí.',
      },
      {
        question: 'Noarchive có tác dụng gì?',
        answer:
          'Noarchive ngăn công cụ tìm kiếm cung cấp bản sao lưu trong bộ nhớ đệm của trang, điều này hữu ích cho nội dung nhạy cảm về thời gian hoặc thay đổi thường xuyên. Người dùng sẽ không thể xem phiên bản cũ của trang qua liên kết bản lưu, nhờ đó thông tin lỗi thời hay giá đã thay đổi không bị lan truyền.',
      },
      {
        question: 'Noimageindex có tác dụng gì?',
        answer:
          'Noimageindex bảo công cụ tìm kiếm đừng lập chỉ mục hình ảnh trên trang, trong khi chính trang vẫn có thể xuất hiện trong kết quả tìm kiếm thông thường. Hãy dùng nó khi hình ảnh trên trang là tài sản độc quyền hay ảnh riêng tư mà bạn không muốn xuất hiện trong tìm kiếm hình ảnh.',
      },
      {
        question: 'Tôi có thể noindex tệp PDF không?',
        answer:
          'Có. Tệp PDF không có phần head HTML, vì vậy hãy dùng tiêu đề HTTP X-Robots-Tag thay thế — công cụ sẽ tạo khối tiêu đề chính xác cho bạn. Trên Cloudflare Pages, bạn chỉ cần thêm khối đó vào tệp _headers cho đường dẫn chứa PDF, và mọi tệp PDF trong thư mục đó sẽ tự động bị gỡ khỏi chỉ mục.',
      },
      {
        question: 'Tôi có nên noindex trang cảm ơn và trang thanh toán không?',
        answer:
          'Có. Trang cảm ơn, bước thanh toán, kết quả tìm kiếm nội bộ và khu vực thành viên thường không mang lại giá trị tìm kiếm và thường được đặt noindex. Những trang này chỉ có ý nghĩa sau khi người dùng đã thực hiện một hành động, vì vậy việc chúng xuất hiện trong Google chỉ làm loãng chỉ mục và gây nhầm lẫn.',
      },
      {
        question: 'Tôi có thể kết hợp noindex và nofollow trên cùng một trang không?',
        answer:
          'Có. Chúng kiểm soát hai việc khác nhau — lập chỉ mục và theo liên kết — và thường được dùng cùng nhau trên trang riêng tư hoặc trang tiện ích. Ví dụ, trang quản trị nội bộ vừa không nên xuất hiện trong tìm kiếm, vừa không nên truyền tín hiệu xếp hạng qua các liên kết quản trị của nó.',
      },
      {
        question: 'Tệp _headers của Cloudflare là gì?',
        answer:
          'Đó là tệp trong thư mục public của trang, ánh xạ đường dẫn URL tới tiêu đề phản hồi HTTP. Công cụ xuất ra khối sẵn sàng dán cho bất kỳ đường dẫn nào bạn chọn. Bạn chỉ cần đặt tệp _headers vào thư mục public, triển khai lại trang, và Cloudflare sẽ tự động gắn tiêu đề vào mọi phản hồi khớp với đường dẫn đó.',
      },
      {
        question: 'Thẻ meta robots có hoạt động trên Bing và công cụ tìm kiếm khác không?',
        answer:
          'Có. Hầu hết công cụ tìm kiếm lớn đều tôn trọng chỉ thị robots chuẩn, dù một số chỉ hỗ trợ một tập con — hãy dùng chỉ thị phổ biến để có phạm vi bao phủ rộng nhất. Các chỉ thị như noindex, nofollow và nosnippet được hỗ trợ gần như ở mọi nơi, còn max-snippet hay max-image-preview chủ yếu là của Google.',
      },
      {
        question: 'Cấu hình của tôi có bị tải lên đâu không?',
        answer:
          'Không. Trình tạo Thẻ Meta Robots chạy hoàn toàn trong trình duyệt của bạn, vì vậy cài đặt của bạn không bao giờ rời khỏi thiết bị. Bạn có thể soạn quy tắc cho trang nội bộ hay đường dẫn nhạy cảm mà không lo cấu trúc trang hay chiến lược lập chỉ mục của mình bị lộ ra ngoài.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi chọn chỉ thị mâu thuẫn nhau?',
        answer:
          'Công cụ tự động ngăn kết hợp mâu thuẫn — ví dụ, nó tắt thanh trượt đoạn trích và bản xem trước hình ảnh khi nosnippet hoặc noimageindex đang bật. Nhờ đó bạn không thể vô tình tạo ra thẻ vừa yêu cầu không hiển thị đoạn trích, vừa đặt giới hạn độ dài đoạn trích, vốn là cấu hình vô nghĩa và gây nhầm lẫn.',
      },
      {
        question: 'Tôi nên dùng noindex hay chỉ xóa trang đi?',
        answer:
          'Nếu trang nên biến mất vĩnh viễn, hãy xóa nó và để nó trả về mã trạng thái 404 hoặc 410. Hãy dùng noindex khi trang phải tồn tại nhưng không nên xuất hiện trong kết quả tìm kiếm. Xóa trang sẽ giải phóng ngân sách thu thập hoàn toàn, còn noindex giữ trang hoạt động cho người dùng có liên kết trực tiếp.',
      },
    ],
  },
};
