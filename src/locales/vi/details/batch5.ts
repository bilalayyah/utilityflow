// Detail content for VI tools — batch 5.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
    instructions: [
      {
        title: 'Thêm nhiều tệp PDF',
        description:
          'Chọn hai tệp .pdf chưa mã hóa trở lên trên thiết bị của bạn; mỗi tệp đều được kiểm tra tiêu đề %PDF trước khi đưa vào hàng đợi.',
      },
      {
        title: 'Kiểm tra số trang và dung lượng',
        description:
          'Xem số trang và dung lượng tính bằng byte của từng tài liệu trong hàng đợi để chắc chắn bạn đã thêm đúng tệp.',
      },
      {
        title: 'Sắp xếp thứ tự gộp',
        description:
          'Dùng mũi tên lên xuống để sắp xếp các chương, phụ lục hoặc hóa đơn trước khi gộp lại.',
      },
      {
        title: 'Đặt tên cho tệp kết quả',
        description:
          'Nhập tên tệp tùy chỉnh nếu muốn để tài liệu đã gộp dễ tìm lại về sau.',
      },
      {
        title: 'Gộp và tải xuống',
        description:
          'Nhấn Merge PDFs & Download để gộp các tệp ngay trên máy của bạn rồi lưu kết quả.',
      },
      {
        title: 'Kiểm tra tài liệu đã gộp',
        description:
          'Mở tệp PDF đã tải xuống và kiểm tra thứ tự trang cùng tổng số trang; nếu có gì sai, hãy chạy lại với thứ tự đã sửa.',
      },
    ],
    examples: [
      {
        title: 'Gộp trang bìa hóa đơn với tập biên lai',
        input: 'cover-sheet.pdf (1 trang) + receipts.pdf (4 trang)',
        output: 'merged-document.pdf (5 trang)',
        explanation: 'Mọi trang vector, phông chữ và hình ảnh nhúng đều được sao chép vào một tệp PDF duy nhất.',
      },
      {
        title: 'Gộp ba phần của tài liệu học tập thành một tập',
        input: 'part1.pdf (6 trang) + part2.pdf (8 trang) + part3.pdf (4 trang)',
        output: 'study-guide.pdf (18 trang)',
        explanation: 'Ba phần được nối lại theo đúng thứ tự bạn đã chọn, và văn bản vẫn có thể tìm kiếm được.',
      },
    ],
    benefits: [
      'Không tệp nào được tải lên — hợp đồng, tờ khai thuế và thỏa thuận bảo mật hoàn toàn ở lại trên máy của bạn',
      'Hiển thị số trang và dung lượng chính xác của từng tài liệu trong hàng đợi',
      'Phát hiện ngay tệp PDF hỏng hoặc có mật khẩu ngay khi tải lên',
      'Không watermark, không giới hạn số trang, không giới hạn số lần dùng mỗi ngày',
    ],
    useCases: [
      'Gộp đề xuất gửi khách hàng, biểu mẫu đã ký và phụ lục báo giá thành một bộ hồ sơ',
      'Gộp các tài liệu thuế nhiều phần đã quét trước khi nộp',
      'Gộp slide bài giảng hoặc tài liệu học tập thành một tập để in',
      'Gộp hóa đơn chi phí trong tháng thành một tệp PDF kế toán duy nhất',
    ],
    faqs: [
      {
        question: 'Công cụ này có gộp được tệp PDF có mật khẩu không?',
        answer:
          'Không, thư viện pdf-lib chạy trong trình duyệt cần tệp PDF chưa mã hóa, trừ khi bạn mở khóa tệp trước. Nếu bạn tải lên một tệp đã mã hóa, công cụ kiểm tra sẽ cảnh báo rõ ràng thay vì thất bại trong im lặng, vì vậy bạn biết ngay cần mở khóa tệp trước khi gộp.',
      },
      {
        question: 'Phông chữ vector và liên kết có thể nhấp có được giữ nguyên không?',
        answer:
          'Có, các luồng trang PDF chuẩn, phông chữ nhúng và đường vector được sao chép trực tiếp bằng PDFDocument.copyPages(), không chuyển trang thành hình ảnh mờ. Nhờ đó văn bản vẫn sắc nét, phông chữ hiển thị đúng và các liên kết trong tài liệu vẫn hoạt động như trong tệp gốc.',
      },
      {
        question: 'Có giới hạn tải lên máy chủ nào không?',
        answer:
          'Không có giới hạn nào như vậy, vì không tệp nào được tải lên máy chủ cả. Toàn bộ quá trình gộp diễn ra hoàn toàn trong bộ nhớ của tab trình duyệt trên máy của bạn, vì vậy tốc độ chỉ phụ thuộc vào thiết bị của bạn và bạn không cần lo về dung lượng tải lên hay hàng đợi máy chủ.',
      },
      {
        question: 'Công cụ Gộp PDF có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không có watermark, không giới hạn số trang và không giới hạn số lần dùng mỗi ngày. Mọi thao tác đều chạy ngay trong trình duyệt của bạn, vì vậy bạn có thể gộp bao nhiêu tài liệu tùy thích mà không cần đăng ký tài khoản hay trả bất kỳ khoản phí nào.',
      },
      {
        question: 'Tôi có thể gộp bao nhiêu tệp PDF cùng một lúc?',
        answer:
          'Bạn có thể xếp hàng bao nhiêu tệp tùy ý, miễn là bộ nhớ trình duyệt trên máy của bạn xử lý thoải mái. Số trang và dung lượng của từng tệp đều hiển thị rõ ràng, giúp bạn ước lượng trước tổng khối lượng công việc và tránh gộp một tập tài liệu quá lớn gây chậm máy.',
      },
      {
        question: 'Tôi có thể đổi thứ tự các tệp PDF sau khi đã thêm không?',
        answer:
          'Có, mỗi tệp trong hàng đợi đều có nút mũi tên lên và xuống để bạn đặt đúng thứ tự gộp trước khi kết hợp. Bạn nên kiểm tra lại thứ tự một lần nữa, đặc biệt với hợp đồng nhiều chương hoặc hóa đơn theo tháng, vì thứ tự cuối cùng sẽ quyết định cách tài liệu đã gộp được đọc.',
      },
      {
        question: 'Việc gộp có làm giảm chất lượng PDF của tôi không?',
        answer:
          'Không, các trang được sao chép dưới dạng dữ liệu vector, vì vậy văn bản, phông chữ và hình ảnh giữ nguyên chất lượng gốc. Công cụ không nén lại hay chuyển trang thành ảnh, nên bản in từ tệp đã gộp vẫn sắc nét và chuyên nghiệp như các tệp nguồn ban đầu của bạn.',
      },
      {
        question: 'Tệp PDF đã gộp có giữ lại dấu trang hoặc mục lục không?',
        answer:
          'Nội dung của từng trang được giữ nguyên đầy đủ, nhưng mục lục và dấu trang của tài liệu có thể không được chuyển sang tệp đã gộp. Nếu bạn cần điều hướng nhanh trong tài liệu dài, hãy kiểm tra lại tệp kết quả sau khi tải xuống và tạo mục lục mới bằng trình đọc PDF nếu cần.',
      },
      {
        question: 'Tôi có thể gộp các tệp PDF đã quét không?',
        answer:
          'Có, các trang đã quét được sao chép vào tệp đã gộp dưới dạng hình ảnh, giống như bất kỳ trang nào khác. Vì trang quét vốn là hình ảnh nên văn bản trong đó không thể tìm kiếm được, nhưng bố cục, chữ ký và con dấu trên bản quét vẫn hiển thị đầy đủ và rõ ràng.',
      },
      {
        question: 'Công cụ này gộp được những loại tệp nào?',
        answer:
          'Công cụ chỉ gộp tệp PDF có đuôi .pdf. Nếu bạn có hình ảnh, hãy chuyển chúng thành PDF bằng công cụ Images to PDF trước, rồi mới gộp tệp đó cùng các tài liệu khác. Cách này giúp bạn kết hợp cả ảnh chụp biên lai và tài liệu văn bản trong cùng một bộ hồ sơ hoàn chỉnh.',
      },
      {
        question: 'Tôi có thể chọn tên tệp cho PDF đã gộp không?',
        answer:
          'Có, bạn có thể nhập tên tệp tùy chỉnh trước khi nhấn nút gộp, ví dụ như tên dự án hoặc tháng kế toán, để dễ tìm lại về sau. Nếu bạn bỏ trống ô này, công cụ sẽ dùng tên mặc định, và bạn vẫn có thể đổi tên tệp sau khi tải xuống trên máy của mình.',
      },
      {
        question: 'Công cụ Gộp PDF có hoạt động trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động tốt trên các trình duyệt di động hiện đại, vì vậy bạn có thể gộp tài liệu ngay trên điện thoại khi đang di chuyển. Tuy nhiên, với những tệp rất lớn, máy tính để bàn thường xử lý nhanh hơn và ổn định hơn, nên bạn hãy cân nhắc khi gộp nhiều tệp nặng.',
      },
      {
        question: 'Tệp của tôi có được bảo mật khi gộp PDF ở đây không?',
        answer:
          'Có, mọi thao tác đều diễn ra ngay trong tab trình duyệt của bạn và không tệp nào được tải lên bất kỳ máy chủ nào. Điều này đặc biệt quan trọng với hợp đồng, hồ sơ thuế và tài liệu nội bộ, vì bạn không cần tin tưởng một dịch vụ bên thứ ba với những thông tin nhạy cảm của mình.',
      },
      {
        question: 'Điều gì xảy ra nếu một trong các tệp PDF của tôi bị hỏng?',
        answer:
          'Công cụ kiểm tra sẽ đọc tiêu đề %PDF của từng tệp và cảnh báo bạn về tệp hỏng hoặc đã mã hóa trước khi quá trình gộp bắt đầu. Nhờ đó bạn có thể thay thế tệp lỗi bằng bản sao tốt, mở khóa tệp có mật khẩu, rồi chạy lại mà không mất thời gian xử lý một tập tài liệu không hoàn chỉnh.',
      },
      {
        question: 'Tôi có thể gộp các tệp PDF có khổ trang khác nhau không?',
        answer:
          'Có, mỗi trang giữ nguyên khổ giấy và hướng trang gốc trong tài liệu đã gộp, dù bạn trộn khổ A4, Letter hay trang ngang. Điều này rất tiện khi gộp báo cáo văn bản với bảng tính ngang hoặc bản vẽ, vì không trang nào bị cắt xén hay kéo giãn để vừa một khổ chung.',
      },
      {
        question: 'Tệp PDF đã gộp có còn tìm kiếm được văn bản không?',
        answer:
          'Có, với tệp PDF dạng văn bản, chữ vẫn có thể chọn và tìm kiếm được vì các trang được sao chép nguyên dạng, không chuyển thành hình ảnh. Bạn có thể dùng phím tắt tìm kiếm trong trình đọc PDF để nhảy nhanh tới một điều khoản, một con số hay một cái tên trong tài liệu dài đã gộp.',
      },
      {
        question: 'Tôi có thể gộp một tệp PDF với chính nó không?',
        answer:
          'Có, bạn có thể thêm cùng một tệp nhiều lần nếu muốn một trang hoặc một tài liệu lặp lại trong kết quả. Cách này hữu ích khi bạn cần in nhiều bản của cùng một biểu mẫu trong một tập, hoặc lặp lại trang bìa và trang ký tên ở nhiều vị trí khác nhau trong hồ sơ.',
      },
      {
        question: 'Có giới hạn dung lượng tối đa khi gộp PDF không?',
        answer:
          'Không có giới hạn cố định nào được đặt ra; giới hạn thực tế là bộ nhớ trình duyệt có sẵn trên thiết bị của bạn. Nếu bạn gộp rất nhiều tệp nặng cùng lúc, hãy chia thành từng đợt nhỏ để trình duyệt xử lý mượt mà hơn và tránh tình trạng tab bị chậm hoặc hết bộ nhớ.',
      },
      {
        question: 'Tôi nên làm gì nếu tệp đã gộp không bắt đầu tải xuống?',
        answer:
          'Hãy kiểm tra cài đặt tải xuống và trình chặn cửa sổ bật lên của trình duyệt, rồi nhấn nút Merge một lần nữa. Tệp được tạo lại ngay trong tab của bạn mỗi lần nhấn, vì vậy thao tác thử lại thường khắc phục được sự cố mà không làm mất thứ tự hay danh sách tệp bạn đã chuẩn bị.',
      },
      {
        question: 'Tôi có thể gộp PDF rồi tách kết quả ra không?',
        answer:
          'Có, bạn hãy tải tệp PDF đã gộp xuống rồi mở nó trong công cụ Split PDF để trích xuất những trang mình cần. Quy trình này rất tiện khi bạn gộp tạm nhiều tài liệu để gửi đi, sau đó lại muốn tách riêng một chương, một hóa đơn hoặc một phụ lục để dùng cho mục đích khác.',
      },
    ],
  },
  'split-pdf': {
    instructions: [
      {
        title: 'Tải tài liệu PDF của bạn lên',
        description:
          'Chọn bất kỳ tệp PDF chưa mã hóa nào; công cụ sẽ kiểm tra tiêu đề và hiển thị tổng số trang.',
      },
      {
        title: 'Chọn chế độ tách',
        description:
          'Chọn một trong các chế độ Extract Page Ranges, Odd Pages Only, Even Pages Only hoặc Burst All Individual Pages.',
      },
      {
        title: 'Nhập trang hoặc khoảng trang',
        description:
          'Ở chế độ khoảng trang, hãy nhập các trang như "1-3, 5, 9-12"; trình phân tích sẽ báo khoảng vượt giới hạn hoặc khoảng ngược trước khi lưu.',
      },
      {
        title: 'Xem lại lựa chọn của bạn',
        description:
          'Xác nhận chế độ và danh sách trang đúng với nhu cầu của bạn, đặc biệt với chế độ tách trang lẻ, trang chẵn và tách từng trang.',
      },
      {
        title: 'Tách và tải xuống',
        description:
          'Nhấn Split & Download PDF để tạo tài liệu đã cắt gọn ngay trên máy của bạn.',
      },
      {
        title: 'Kiểm tra kết quả và lặp lại nếu cần',
        description:
          'Mở tệp đã tải xuống để xác nhận đúng trang đã được trích xuất; ở chế độ burst, hãy cho phép tải nhiều tệp trong trình duyệt nếu được hỏi.',
      },
    ],
    examples: [
      {
        title: 'Trích xuất trang chữ ký từ hợp đồng 12 trang',
        input: 'Pages to Extract: 1, 10-12',
        output: 'contract-extracted.pdf (4 trang)',
        explanation: 'Các trang 1, 10, 11 và 12 được xuất theo thứ tự tăng dần, còn tệp gốc của bạn không bị thay đổi.',
      },
      {
        title: 'Chỉ lấy các trang lẻ từ báo cáo dài',
        input: 'Chế độ: Odd Pages Only · Tệp: report.pdf (20 trang)',
        output: 'report-odd.pdf (10 trang — chỉ các trang lẻ)',
        explanation: 'Cách này hữu ích trong quy trình quét hai mặt, khi bạn cần tách riêng các trang được quét từ một phía.',
      },
    ],
    benefits: [
      'Trình phân tích khoảng trang linh hoạt phát hiện khoảng vượt giới hạn hoặc khoảng ngược trước khi lưu',
      'Giữ nguyên độ sắc nét của vector và khả năng chọn văn bản như bản gốc',
      'Hỗ trợ trích xuất trang lẻ và trang chẵn cho quy trình quét hai mặt',
      'Bảo vệ tài liệu tài chính và pháp lý riêng tư khỏi máy chủ tải lên của bên thứ ba',
    ],
    useCases: [
      'Chỉ lấy các chương cần thiết từ một báo cáo lớn trước khi chia sẻ',
      'Tách từng hóa đơn riêng lẻ trong một tệp PDF thanh toán tổng hợp',
      'Trích xuất trang chữ ký hoặc phụ lục từ hợp đồng nhiều trang',
      'Tách các mẻ quét trang lẻ và trang chẵn từ máy nạp tài liệu một mặt',
    ],
    faqs: [
      {
        question: 'Vì sao chế độ Burst All Individual Pages chỉ giới hạn ở 25 trang?',
        answer:
          'Trình duyệt thường chặn hoặc hỏi xác nhận khi một trang web kích hoạt hơn khoảng 25 lượt tải xuống nhanh liên tiếp, để chống tải xuống hàng loạt không mong muốn. Với những lần trích xuất nhiều phần lớn hơn, bạn nên dùng chế độ Extract Page Ranges để gộp các trang đã chọn thành một tệp duy nhất thay vì tải từng trang riêng lẻ.',
      },
      {
        question: 'Việc tách có làm thay đổi tệp PDF gốc của tôi không?',
        answer:
          'Không, trình duyệt chỉ đọc một bản sao trong bộ nhớ và tạo ra một tệp PDF mới để tải xuống, còn tệp gốc trên máy của bạn hoàn toàn không bị chạm tới. Nhờ đó bạn có thể thử nhiều cách tách khác nhau mà không sợ làm hỏng tài liệu gốc, và luôn có thể tải lại tệp ban đầu để bắt đầu lại.',
      },
      {
        question: 'Tôi có thể nhập cú pháp nào vào ô Pages to Extract?',
        answer:
          'Bạn có thể kết hợp số trang đơn lẻ và khoảng trang nối bằng dấu gạch ngang, phân tách bằng dấu phẩy, ví dụ như "1-3, 5, 9-12". Cú pháp này giúp bạn lấy chính xác những trang cần thiết trong một lần chạy, thay vì phải tách từng trang một cách thủ công và tốn nhiều thời gian.',
      },
      {
        question: 'Công cụ Tách PDF có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không có watermark và không giới hạn số trang, ngoại trừ giới hạn 25 trang cho mỗi lần chạy chế độ burst. Bạn có thể tách bao nhiêu tài liệu tùy thích ngay trong trình duyệt mà không cần tạo tài khoản, và kết quả luôn được tạo ngay trên máy của bạn.',
      },
      {
        question: 'Tôi có thể chỉ trích xuất các trang lẻ từ PDF không?',
        answer:
          'Có, bạn chỉ cần chọn chế độ Odd Pages Only và công cụ sẽ lấy ra tất cả các trang có số lẻ trong tài liệu. Chế độ này đặc biệt hữu ích trong quy trình quét hai mặt, khi máy quét tách riêng các trang lẻ và trang chẵn thành hai mẻ khác nhau cần xử lý riêng.',
      },
      {
        question: 'Tôi có thể chỉ trích xuất các trang chẵn từ PDF không?',
        answer:
          'Có, bạn chỉ cần chọn chế độ Even Pages Only để lấy ra chỉ các trang có số chẵn. Đây là cách nhanh nhất để khôi phục nửa còn lại của một tài liệu quét hai mặt, hoặc để tách riêng các trang chẵn khi bạn chỉ cần chia sẻ một phần của báo cáo dài.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi nhập một số trang không tồn tại?',
        answer:
          'Trình phân tích khoảng trang sẽ kiểm tra dữ liệu bạn nhập và cảnh báo về khoảng vượt giới hạn hoặc khoảng ngược trước khi lưu bất cứ thứ gì. Nhờ đó bạn có thể sửa lỗi đánh máy, ví dụ nhập nhầm trang 99 trong tài liệu chỉ có 20 trang, mà không tạo ra một tệp kết quả sai hoặc trống.',
      },
      {
        question: 'Tôi có thể trích xuất các trang PDF theo thứ tự tùy chỉnh, ví dụ 10-12 rồi mới tới 1 không?',
        answer:
          'Không, các trang được trích xuất sẽ lưu theo thứ tự tăng dần, bất kể bạn nhập chúng theo thứ tự nào. Nếu bạn muốn sắp xếp lại sau khi tách, hãy dùng công cụ Reorder PDF Pages để kéo các trang về đúng vị trí mong muốn, rồi lưu lại thành tài liệu hoàn chỉnh theo ý mình.',
      },
      {
        question: 'Việc tách PDF có giữ văn bản tìm kiếm được không?',
        answer:
          'Có, các trang được sao chép dưới dạng dữ liệu vector, vì vậy văn bản trong tệp đã trích xuất vẫn có thể chọn và tìm kiếm được. Bạn có thể sao chép một đoạn trích, tìm một từ khóa hay kiểm tra chính tả ngay trong tệp kết quả, giống như khi làm việc với tài liệu gốc ban đầu.',
      },
      {
        question: 'Tôi có thể tách tệp PDF có mật khẩu không?',
        answer:
          'Không, tệp PDF đã mã hóa phải được mở khóa trước vì công cụ chỉ chấp nhận tệp chưa mã hóa. Bạn hãy mở khóa tệp bằng trình đọc PDF hoặc công cụ quản lý PDF của mình, lưu lại bản không có mật khẩu, rồi tải bản đó lên để tách các trang cần thiết một cách bình thường.',
      },
      {
        question: 'Tôi có thể tách tệp PDF đã quét không?',
        answer:
          'Có, các trang đã quét được trích xuất giống hệt trang văn bản, vì thao tác tách sao chép toàn bộ trang mà không đọc hay thay đổi nội dung bên trong. Dù trang quét chỉ là hình ảnh, bạn vẫn có thể tách riêng một biên lai, một trang ký tên hay một chương để gửi đi mà không cần quét lại.',
      },
      {
        question: 'Tệp PDF đã trích xuất có giữ nguyên chất lượng không?',
        answer:
          'Có, trong quá trình trích xuất không có nén lại hay chuyển trang thành ảnh, vì vậy mỗi trang đã lấy ra giữ đúng chất lượng của tệp PDF gốc. Văn bản vẫn sắc nét, hình ảnh và biểu đồ không bị mờ, nên bạn có thể in hoặc chia sẻ tệp kết quả với chất lượng chuyên nghiệp như bản đầu.',
      },
      {
        question: 'Làm thế nào để tách PDF thành từng tệp một trang?',
        answer:
          'Bạn hãy chọn chế độ Burst All Individual Pages; mỗi trang sẽ tải xuống thành một tệp PDF riêng, tối đa 25 trang cho mỗi lần chạy. Chế độ này rất tiện khi bạn cần gửi từng trang riêng lẻ cho nhiều người khác nhau, hoặc lưu trữ từng biểu mẫu, từng hóa đơn thành tệp độc lập dễ quản lý.',
      },
      {
        question: 'Tôi có thể chỉ tải xuống trang đầu tiên của PDF không?',
        answer:
          'Có, bạn hãy chọn chế độ Extract Page Ranges và nhập "1" vào ô Pages to Extract. Công cụ sẽ tạo một tệp PDF mới chỉ chứa trang đầu tiên, rất tiện khi bạn chỉ cần chia sẻ trang bìa, trang tóm tắt hay trang chữ ký mà không muốn gửi cả tài liệu dài.',
      },
      {
        question: 'Công cụ Tách PDF có tải tệp của tôi lên đâu không?',
        answer:
          'Không, toàn bộ quá trình tách chạy ngay trong trình duyệt của bạn và tệp của bạn không bao giờ rời khỏi thiết bị. Điều này giúp bạn yên tâm xử lý hợp đồng, hồ sơ tài chính hay tài liệu nội bộ nhạy cảm mà không cần gửi chúng qua máy chủ của bất kỳ dịch vụ bên thứ ba nào.',
      },
      {
        question: 'Tôi có thể dùng công cụ Tách PDF trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên các trình duyệt di động hiện đại, vì vậy bạn có thể tách tài liệu ngay khi đang di chuyển. Tuy nhiên, với những tệp rất lớn, máy tính để bàn thường tách thoải mái và nhanh hơn, nên bạn hãy cân nhắc dùng máy tính khi xử lý tài liệu nặng nhiều trang.',
      },
      {
        question: 'Chế độ Extract Page Ranges và Burst khác nhau thế nào?',
        answer:
          'Chế độ khoảng trang gộp các trang đã chọn thành một tệp PDF mới duy nhất, còn chế độ Burst tạo một tệp PDF riêng cho từng trang. Bạn nên chọn khoảng trang khi muốn một tài liệu gọn gàng để gửi đi, và chọn Burst khi cần từng trang độc lập để phân phát hoặc lưu trữ riêng.',
      },
      {
        question: 'Tôi có thể trích xuất trang 1-3 và trang 5 trong một lần không?',
        answer:
          'Có, bạn chỉ cần nhập "1-3, 5" — số trang đơn lẻ và khoảng trang nối bằng dấu gạch ngang có thể kết hợp với nhau bằng dấu phẩy. Công cụ sẽ lấy đúng bốn trang đó theo thứ tự tăng dần và gộp chúng thành một tệp PDF mới để bạn tải xuống ngay lập tức.',
      },
      {
        question: 'Dấu trang có còn lại sau khi tách PDF không?',
        answer:
          'Nội dung trang được giữ nguyên, nhưng mục lục và dấu trang của tài liệu thường không được chuyển sang các tệp đã trích xuất. Nếu bạn cần điều hướng trong tệp kết quả, hãy kiểm tra lại sau khi tải xuống và tạo dấu trang mới trong trình đọc PDF, đặc biệt với báo cáo dài nhiều chương.',
      },
      {
        question: 'Tệp tải xuống không bắt đầu sau khi tách — tôi nên làm gì?',
        answer:
          'Bạn hãy cho phép tải nhiều tệp cho trang web này trong cài đặt trình duyệt, rồi nhấn nút Split một lần nữa. Tệp được tạo lại ngay trong tab của bạn mỗi lần nhấn, vì vậy việc thử lại thường khắc phục được sự cố, đặc biệt ở chế độ burst khi trình duyệt chặn tải xuống hàng loạt.',
      },
    ],
  },
  'images-to-pdf': {
    instructions: [
      {
        title: 'Chọn một hoặc nhiều hình ảnh',
        description:
          'Chọn hình ảnh JPG, PNG hoặc WebP; hình thu nhỏ và kích thước điểm ảnh sẽ hiển thị ngay lập tức.',
      },
      {
        title: 'Sắp xếp thứ tự hình ảnh',
        description:
          'Dùng mũi tên lên xuống để đặt thứ tự trang cho tệp PDF của bạn.',
      },
      {
        title: 'Đặt khổ trang và lề',
        description:
          'Chọn A4 Portrait, US Letter hoặc Exact Image Dimensions, rồi đặt lề cho các khổ trang chuẩn.',
      },
      {
        title: 'Đặt tên cho tệp kết quả',
        description:
          'Nhập tên tệp tùy chỉnh để tệp PDF hoàn thành dễ nhận biết.',
      },
      {
        title: 'Tạo PDF',
        description:
          'Nhấn Convert Images to PDF để tạo tài liệu ngay trên máy và tải xuống tức thì.',
      },
      {
        title: 'Xem lại và điều chỉnh',
        description:
          'Mở tệp PDF để kiểm tra bố cục và lề; nếu trang nào chưa ổn, hãy đổi thứ tự hình ảnh hoặc đổi cài đặt trang rồi chuyển đổi lại.',
      },
    ],
    examples: [
      {
        title: 'Gộp biên lai chi phí lên các trang A4 chuẩn',
        input: '3 ảnh biên lai JPG · A4 Portrait · Lề 24 pt',
        output: 'images-bundle.pdf (3 trang A4 căn giữa, giữ đúng tỉ lệ)',
        explanation: 'Mỗi hình ảnh được thu nhỏ theo tỉ lệ để vừa trong lề A4 có thể in, không bị méo.',
      },
      {
        title: 'Chuyển ảnh quét chụp bằng điện thoại thành một tệp PDF',
        input: '5 ảnh quét JPG · Exact Image Dimensions · Lề 0',
        output: 'scans.pdf (5 trang, mỗi hình ở đúng kích thước gốc)',
        explanation: 'Ở chế độ Exact Image Dimensions, mỗi hình tạo thành một trang đúng kích thước gốc — không cắt, không kéo giãn.',
      },
    ],
    benefits: [
      'Nhúng trực tiếp luồng JPG và PNG gốc, đồng thời chuyển WebP sạch sẽ qua Canvas',
      'Giữ nguyên hoàn toàn tỉ lệ khung hình của ảnh — không kéo giãn, không cắt xén',
      'Hỗ trợ cả tờ A4 và US Letter để in lẫn trang đúng kích thước ảnh với lề bằng 0',
      'Ảnh căn cước, biên lai và tài liệu riêng tư chỉ ở trong RAM trình duyệt, hoàn toàn ngoại tuyến',
    ],
    useCases: [
      'Biến ảnh biên lai chụp bằng điện thoại thành tệp PDF chi phí gọn gàng theo tháng',
      'Gộp bản mô phỏng thiết kế hoặc ảnh chụp giao diện thành bộ tài liệu xem xét khổ A4',
      'Chuyển các trang tài liệu đã quét thành một tệp PDF duy nhất để tải lên',
      'Đóng gói các tác phẩm portfolio mà không qua nén đám mây',
    ],
    faqs: [
      {
        question: 'Công cụ xử lý hình ảnh WebP như thế nào?',
        answer:
          'Chuẩn PDF nhúng trực tiếp JPEG và PNG chứ không nhúng WebP, vì vậy công cụ giải mã hình WebP qua HTML5 Canvas thành khung PNG không mất dữ liệu rồi mới nhúng vào tài liệu. Nhờ đó hình WebP vẫn hiển thị sắc nét trong tệp PDF cuối cùng, và bạn có thể trộn WebP cùng JPG hay PNG trong cùng một tài liệu mà không cần chuyển đổi trước.',
      },
      {
        question: 'Ảnh dọc và ảnh ngang có bị kéo giãn để vừa khổ A4 không?',
        answer:
          'Không, hình ảnh được thu nhỏ theo tỉ lệ bằng công thức Math.min(maxWidth/imgWidth, maxHeight/imgHeight) rồi căn giữa trên trang. Dù ảnh gốc là dọc hay ngang, nó vẫn giữ đúng tỉ lệ ban đầu, không bị méo hay cắt mất phần quan trọng, và luôn nằm gọn trong lề trang A4.',
      },
      {
        question: 'Hình thu nhỏ của ảnh có được tải lên đâu không?',
        answer:
          'Không, bản xem trước dùng liên kết Object URL tạm thời ngay trong tab trình duyệt của bạn, và các liên kết này biến mất khi bạn đóng tab. Ảnh của bạn không bao giờ rời khỏi thiết bị, vì vậy bạn có thể yên tâm chuyển đổi ảnh căn cước, biên lai hay tài liệu riêng tư mà không lo bị lưu trên máy chủ.',
      },
      {
        question: 'Công cụ Images to PDF có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không có watermark và không giới hạn số lượng hình ảnh bạn chuyển đổi. Bạn có thể tạo bao nhiêu tệp PDF tùy thích ngay trong trình duyệt mà không cần đăng ký tài khoản, và mọi thao tác đều diễn ra ngay trên máy của bạn một cách nhanh chóng.',
      },
      {
        question: 'Tôi có thể chuyển những định dạng ảnh nào sang PDF?',
        answer:
          'Công cụ hỗ trợ JPG, PNG và WebP, vì vậy bạn có thể chuyển ảnh chụp, ảnh chụp màn hình và hình ảnh trên web thành một tệp PDF duy nhất. Việc hỗ trợ cả ba định dạng phổ biến này giúp bạn không cần chuyển đổi trước, mà chỉ cần chọn ảnh và tạo tài liệu trong vài bước đơn giản.',
      },
      {
        question: 'Tôi có thể chuyển một hình ảnh duy nhất sang PDF không?',
        answer:
          'Có, một hình ảnh sẽ tạo thành một tệp PDF một trang, rất phù hợp để chia sẻ một bức ảnh hay một tài liệu quét dưới dạng tệp. Bạn có thể gửi tệp này qua email hoặc tin nhắn mà người nhận mở được trên mọi thiết bị, thay vì gửi ảnh rời dễ bị nén hay giảm chất lượng.',
      },
      {
        question: 'Tôi có thể đổi thứ tự hình ảnh trước khi chuyển sang PDF không?',
        answer:
          'Có, bạn hãy dùng mũi tên lên và xuống để sắp xếp thứ tự trang trước khi tạo tệp PDF. Việc kiểm tra lại thứ tự rất quan trọng với biên lai theo ngày, trang tài liệu quét hay bộ ảnh portfolio, vì thứ tự trong danh sách sẽ trở thành thứ tự trang trong tài liệu cuối cùng.',
      },
      {
        question: 'Có những khổ trang nào khi chuyển ảnh sang PDF?',
        answer:
          'Bạn có thể chọn A4 Portrait, US Letter và Exact Image Dimensions, trong đó chế độ cuối tạo một trang cho mỗi hình ở đúng kích thước gốc. Khổ A4 và Letter phù hợp để in ấn chuẩn, còn chế độ đúng kích thước ảnh phù hợp khi bạn muốn giữ nguyên từng bức ảnh mà không thêm lề trắng.',
      },
      {
        question: 'Hình ảnh của tôi có bị cắt khi chuyển sang PDF không?',
        answer:
          'Không, hình ảnh được thu nhỏ theo tỉ lệ và căn giữa trên trang, không có phần nào bị cắt hay kéo giãn. Toàn bộ nội dung của bức ảnh, từ chữ ký ở góc cho tới con dấu hay chi tiết ở mép, đều hiển thị đầy đủ trong tệp PDF, giúp tài liệu đã chuyển đổi đáng tin cậy để lưu trữ và chia sẻ.',
      },
      {
        question: 'Tôi có thể thêm lề quanh hình ảnh trong PDF không?',
        answer:
          'Có, bạn hãy đặt lề, ví dụ 24 pt, khi dùng khổ trang A4 hoặc US Letter. Lề trắng giúp tài liệu trông chuyên nghiệp hơn, dễ đóng gáy khi in, và tránh việc nội dung bị cắt khi máy in không in được tới sát mép giấy, đặc biệt với biên lai hay tài liệu cần lưu hồ sơ lâu dài.',
      },
      {
        question: 'Việc chuyển ảnh sang PDF có làm giảm chất lượng không?',
        answer:
          'Không, luồng JPG và PNG được nhúng trực tiếp, còn WebP được chuyển qua Canvas thành PNG không mất dữ liệu, vì vậy chất lượng được giữ nguyên. Ảnh trong tệp PDF vẫn sắc nét như bản gốc, phù hợp để in ấn hay xem trên màn hình lớn, và bạn không cần lo về hiện tượng mờ hay vỡ hạt do nén lại.',
      },
      {
        question: 'Tôi có thể chuyển ảnh HEIC từ iPhone sang PDF không?',
        answer:
          'Không trực tiếp được; bạn cần chuyển HEIC sang JPG hoặc PNG trước rồi mới dùng công cụ này. Hầu hết điện thoại iPhone đều có tùy chọn xuất ảnh sang JPG trong phần cài đặt hoặc khi chia sẻ, và sau khi chuyển đổi, bạn có thể tạo tệp PDF từ những ảnh đó như bình thường trong vài bước.',
      },
      {
        question: 'Ảnh của tôi có được tải lên máy chủ khi chuyển sang PDF không?',
        answer:
          'Không, quá trình chuyển đổi chạy ngay trong trình duyệt của bạn và bản xem trước chỉ dùng liên kết Object URL tạm thời trên máy. Nhờ đó ảnh gia đình, giấy tờ tùy thân hay tài liệu công việc nhạy cảm của bạn không bao giờ rời khỏi thiết bị, và bạn có thể làm việc ngoại tuyến sau khi trang đã tải xong.',
      },
      {
        question: 'Tôi có thể dùng công cụ Images to PDF trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên trình duyệt di động và bạn có thể chọn ảnh trực tiếp từ thư viện ảnh trên điện thoại. Điều này rất tiện khi bạn vừa chụp biên lai hay tài liệu và muốn gộp ngay thành PDF để gửi cho kế toán hoặc lưu trữ, mà không cần chuyển ảnh sang máy tính trước.',
      },
      {
        question: 'Điều gì xảy ra với những hình ảnh rất lớn?',
        answer:
          'Hình ảnh lớn được nhúng ở độ phân giải đầy đủ, vì vậy tệp PDF tạo ra có thể khá nặng. Nếu dung lượng tệp quan trọng, ví dụ khi gửi qua email có giới hạn đính kèm, bạn nên nén ảnh trước bằng công cụ nén ảnh, rồi mới chuyển sang PDF để có tài liệu vừa nhẹ vừa đủ sắc nét.',
      },
      {
        question: 'Tôi có thể trộn JPG, PNG và WebP trong một tệp PDF không?',
        answer:
          'Có, bạn có thể kết hợp cả ba định dạng trong cùng một tài liệu, và các trang vẫn giữ đúng thứ tự bạn đã sắp xếp. Điều này rất tiện khi bạn gộp ảnh chụp bằng điện thoại, ảnh chụp màn hình và hình tải từ web thành một bộ tài liệu thống nhất để gửi cho khách hàng hay đồng nghiệp.',
      },
      {
        question: 'Các trang PDF có cùng thứ tự với hình ảnh của tôi không?',
        answer:
          'Có, các trang được tạo theo đúng thứ tự hiển thị trong danh sách hình ảnh, vì vậy bạn hãy sắp xếp lại ảnh trước nếu muốn thứ tự trang khác. Bạn có thể dùng mũi tên lên xuống để di chuyển từng ảnh, kiểm tra hình thu nhỏ, rồi mới nhấn nút chuyển đổi để tránh phải làm lại từ đầu.',
      },
      {
        question: 'Tôi có thể đặt tên tệp tùy chỉnh cho PDF không?',
        answer:
          'Có, bạn hãy nhập tên tệp ưa thích trước khi chuyển đổi, và tệp PDF tải xuống sẽ dùng tên đó thay vì tên mặc định. Một tên rõ ràng như tên dự án, tháng báo cáo hay tên khách hàng sẽ giúp bạn tìm lại tài liệu nhanh hơn trong thư mục tải xuống đông đúc về sau.',
      },
      {
        question: 'Công cụ có giữ độ trong suốt của hình ảnh không?',
        answer:
          'Độ trong suốt của PNG được giữ nguyên trên các trang Exact Image Dimensions, còn trên trang A4 hoặc Letter, hình ảnh nằm trên nền trang trắng. Nếu logo hay hình minh họa của bạn cần nền trong suốt, hãy chọn chế độ đúng kích thước ảnh để nền trong suốt hiển thị đúng như thiết kế gốc.',
      },
      {
        question: 'Tệp PDF của tôi không tải xuống — tôi nên làm gì?',
        answer:
          'Bạn hãy kiểm tra quyền tải xuống của trình duyệt và thử lại; tệp được tạo ngay trong tab của bạn. Đôi khi trình chặn cửa sổ bật lên hoặc cài đặt chặn tải xuống tự động sẽ ngăn tệp lưu về máy, vì vậy hãy cho phép tải xuống cho trang này rồi nhấn nút chuyển đổi một lần nữa để nhận tệp.',
      },
    ],
  },
  'pdf-to-images': {
    instructions: [
      {
        title: 'Chọn một tệp PDF',
        description:
          'Chọn bất kỳ tài liệu PDF chưa mã hóa nào; PDF.js sẽ đọc tổng số trang ngay lập tức.',
      },
      {
        title: 'Chọn các trang cần kết xuất',
        description:
          'Nhập "all" hoặc một khoảng trang (tối đa 20 trang mỗi đợt), ví dụ "1-3, 5".',
      },
      {
        title: 'Chọn định dạng và tỉ lệ',
        description:
          'Chọn PNG cho văn bản sắc nét hoặc JPG cho tệp ảnh nhỏ hơn, rồi chọn độ phân giải 1.0×, 1.5× hoặc 2.0×.',
      },
      {
        title: 'Kết xuất các trang',
        description:
          'Bắt đầu kết xuất và chờ bản xem trước của trang xuất hiện; đợt lớn hơn sẽ mất thêm một chút thời gian.',
      },
      {
        title: 'Xem lại bản xem trước',
        description:
          'Kiểm tra từng hình thu nhỏ đã kết xuất về độ sắc nét và nội dung đúng trước khi tải xuống.',
      },
      {
        title: 'Tải hình ảnh của bạn xuống',
        description:
          'Nhấn .PNG hoặc .JPG trên bất kỳ thẻ trang nào để lưu hình đó; lặp lại đợt cho các trang còn lại nếu cần.',
      },
    ],
    examples: [
      {
        title: 'Xuất slide thuyết trình để chia sẻ lên mạng xã hội',
        input: 'Trang: 1-3 · Định dạng: PNG · Tỉ lệ: 2.0× (144 DPI)',
        output: '3 hình slide PNG 2× sắc nét, sẵn sàng cho LinkedIn hoặc nhúng vào blog',
        explanation: 'Kết xuất canvas ở tỉ lệ cao giúp sơ đồ và kiểu chữ luôn sắc nét.',
      },
      {
        title: 'Lưu một trang chứng chỉ dưới dạng ảnh',
        input: 'Trang: 1 · Định dạng: JPG · Tỉ lệ: 1.5×',
        output: 'Một hình JPG rõ ràng, tiện chia sẻ trên điện thoại',
        explanation: 'Với tệp nhiều ảnh, JPG nhỏ gọn và dễ chia sẻ hơn.',
      },
    ],
    benefits: [
      'Dùng PDF.js Web Worker đóng gói sẵn trong Vite — không cần script CDN bên ngoài',
      'Tự động tô nền canvas trắng khi xuất PDF trong suốt sang JPG',
      'Cho phép chọn đúng khoảng trang thay vì kết xuất cả tệp 100 trang',
      'Kết xuất canvas riêng tư ngay trong trình duyệt giúp bảo vệ tài liệu nhạy cảm',
    ],
    useCases: [
      'Biến slide PDF thuyết trình thành đồ họa cho bài blog hoặc mạng xã hội',
      'Lưu một trang chứng chỉ hay vé đã ký thành ảnh trên điện thoại',
      'Tạo bản xem trước giao diện sắc nét cho tài liệu PDF để in',
      'Kiểm tra trực quan cách phông chữ và bố cục hiển thị mà không cần ứng dụng PDF chuyên dụng',
    ],
    faqs: [
      {
        question: 'Tôi nên chọn PNG hay JPG cho trang PDF?',
        answer:
          'Bạn nên chọn PNG cho slide, tài liệu văn bản, biên lai và biểu đồ, nơi các cạnh sắc nét rất quan trọng. Hãy chọn JPG khi xuất tài liệu quảng cáo nhiều ảnh để có dung lượng tệp nhỏ hơn, dễ gửi qua email hay đăng lên mạng xã hội mà vẫn giữ đủ chất lượng hiển thị.',
      },
      {
        question: 'Vì sao PDF to Images chỉ kết xuất tối đa 20 trang mỗi đợt?',
        answer:
          'Canvas ở độ phân giải cao 2× tiêu tốn nhiều GPU và RAM cho mỗi trang, vì vậy giới hạn 20 trang mỗi đợt giúp tab trình duyệt vẫn phản hồi tốt trên điện thoại và laptop. Với tài liệu dài, bạn chỉ cần lặp lại quy trình cho các trang tiếp theo, và mỗi đợt đều cho ra hình ảnh sắc nét như nhau.',
      },
      {
        question: 'Công cụ có hoạt động với PDF có mật khẩu không?',
        answer:
          'Không, tệp PDF đã mã hóa phải được mở khóa trước khi kết xuất, vì công cụ không thể đọc các trang từ một tệp vẫn đang bị khóa. Bạn hãy mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, rồi tải bản đó lên để kết xuất các trang cần thiết.',
      },
      {
        question: 'Công cụ PDF to Images có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không có watermark, và quá trình kết xuất diễn ra ngay trong trình duyệt của bạn. Bạn có thể xuất bao nhiêu trang tùy thích mà không cần đăng ký tài khoản, và hình ảnh tạo ra thuộc về bạn để dùng cho blog, bài thuyết trình hay mạng xã hội.',
      },
      {
        question: 'Tôi nên chọn độ phân giải nào cho mạng xã hội?',
        answer:
          'Tỉ lệ 2.0× cho kết quả sắc nét nhất cho bài đăng và hình nhúng vào blog, trong khi 1.0× đã đủ cho bản xem trước nhanh. Nếu bạn đăng slide lên LinkedIn hay chèn vào bài viết, hãy chọn 2.0× và PNG để chữ nhỏ vẫn đọc được rõ ràng trên cả màn hình điện thoại và máy tính.',
      },
      {
        question: 'Tôi có thể chỉ xuất một trang dưới dạng hình ảnh không?',
        answer:
          'Có, bạn chỉ cần nhập số trang đó vào ô khoảng trang, và chỉ trang đó sẽ được kết xuất rồi tải xuống dưới dạng hình ảnh. Cách này rất tiện khi bạn chỉ cần chia sẻ trang bìa, trang chứng chỉ hay một biểu đồ duy nhất mà không muốn xuất cả tài liệu dài thành hàng chục tệp ảnh.',
      },
      {
        question: 'Tôi có thể xuất tất cả các trang của PDF cùng lúc không?',
        answer:
          'Bạn có thể kết xuất tối đa 20 trang mỗi đợt; với tài liệu dài hơn, hãy lặp lại quy trình cho các trang còn lại. Việc chia thành từng đợt nhỏ giúp trình duyệt không bị quá tải bộ nhớ, đặc biệt khi bạn chọn tỉ lệ 2.0×, và bạn vẫn nhận được đầy đủ mọi trang mình cần.',
      },
      {
        question: 'Vì sao bản xuất JPG của tôi có nền trắng?',
        answer:
          'Định dạng JPG không hỗ trợ độ trong suốt, vì vậy các vùng trong suốt của PDF sẽ tự động được tô trắng. Nếu bạn cần giữ nền trong suốt, hãy xuất sang PNG thay vì JPG, còn nếu chỉ cần chia sẻ nhanh trên mạng xã hội, nền trắng thường trông sạch sẽ và chuyên nghiệp hơn.',
      },
      {
        question: 'PDF to Images có giữ văn bản sắc nét không?',
        answer:
          'Có, các trang được kết xuất ở tỉ lệ lên tới 2× bằng PDF.js, giúp văn bản và sơ đồ luôn sắc nét. Ở tỉ lệ cao, chữ nhỏ, đường kẻ bảng và chi tiết biểu đồ đều hiển thị rõ ràng, vì vậy hình ảnh xuất ra phù hợp để đăng blog, in ấn hay trình chiếu trước đám đông.',
      },
      {
        question: 'Tôi có thể chọn trang nào sẽ kết xuất thành hình ảnh không?',
        answer:
          'Có, bạn hãy nhập "all" hoặc một khoảng như "1-3, 5" vào ô trang. Tính năng này giúp bạn bỏ qua những trang không cần thiết, chỉ xuất đúng slide, chứng chỉ hay biểu đồ mình muốn chia sẻ, tiết kiệm thời gian và tránh tạo ra hàng loạt tệp ảnh không dùng tới.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên đâu không?',
        answer:
          'Không, quá trình kết xuất diễn ra trong trình duyệt của bạn thông qua worker PDF.js chạy ngay trên máy; không có dữ liệu nào rời khỏi thiết bị. Nhờ đó bạn có thể yên tâm xử lý hợp đồng, hồ sơ tài chính hay tài liệu nội bộ mà không cần gửi chúng qua máy chủ của bất kỳ dịch vụ bên thứ ba nào.',
      },
      {
        question: 'Tôi có thể dùng PDF to Images trên điện thoại không?',
        answer:
          'Có, tuy nhiên quá trình kết xuất ở độ phân giải cao dùng nhiều bộ nhớ hơn, vì vậy các đợt nhỏ sẽ hoạt động tốt nhất trên điện thoại. Bạn nên chọn tỉ lệ 1.0× hoặc 1.5× và chỉ xuất vài trang mỗi lần khi dùng điện thoại, rồi chuyển sang máy tính nếu cần xuất nhiều trang ở chất lượng cao.',
      },
      {
        question: 'Tỉ lệ 1.0×, 1.5× và 2.0× khác nhau thế nào?',
        answer:
          'Tỉ lệ cao hơn sẽ kết xuất nhiều điểm ảnh hơn cho mỗi trang, tạo ra hình ảnh lớn hơn và sắc nét hơn; tỉ lệ 2.0× tương đương khoảng 144 DPI. Bạn nên chọn 1.0× cho bản xem trước nhanh, 1.5× cho nhu cầu thông thường, và 2.0× khi cần in ấn hay đăng tải hình ảnh chất lượng cao lên blog.',
      },
      {
        question: 'Tôi có thể tải tất cả các trang đã kết xuất chỉ bằng một cú nhấp không?',
        answer:
          'Không, mỗi thẻ trang đều có nút tải xuống .PNG hoặc .JPG riêng; bạn hãy tải xuống từng trang mình cần. Cách này giúp bạn chỉ lưu những trang thực sự dùng tới, tránh tải hàng loạt tệp không cần thiết, và trình duyệt cũng không chặn tải xuống hàng loạt như khi tải quá nhiều tệp cùng lúc.',
      },
      {
        question: 'Đồ họa vector và biểu đồ có giữ được độ sắc nét không?',
        answer:
          'Có, PDF.js chuyển đồ họa vector thành ảnh raster ở tỉ lệ bạn đã chọn, vì vậy biểu đồ và sơ đồ vẫn sắc nét. Dù bạn phóng to hình ảnh để xem chi tiết hay in ra giấy, các đường kẻ, nhãn trục và hình khối đều hiển thị rõ ràng thay vì bị vỡ hạt như ảnh có độ phân giải thấp.',
      },
      {
        question: 'Vì sao quá trình kết xuất mất nhiều thời gian với PDF lớn?',
        answer:
          'Mỗi trang được vẽ lên canvas ở độ phân giải cao, và việc kết xuất vài trang mỗi lần giúp tab trình duyệt vẫn phản hồi tốt. Với tài liệu nhiều trang hay nhiều hình ảnh, bạn hãy kiên nhẫn chờ từng đợt hoàn thành, hoặc giảm tỉ lệ xuống 1.0× nếu chỉ cần xem trước nhanh nội dung.',
      },
      {
        question: 'Tôi có thể chuyển PDF đã quét thành hình ảnh không?',
        answer:
          'Có, các trang đã quét sẽ kết xuất thành hình ảnh đúng như chúng hiển thị trong tệp PDF. Vì trang quét vốn đã là hình ảnh, kết quả xuất ra sẽ giống hệt bản gốc, rất tiện khi bạn cần chia sẻ một trang biên lai, chứng chỉ hay tài liệu lưu trữ dưới dạng ảnh qua tin nhắn hay email.',
      },
      {
        question: 'Công cụ PDF to Images có hoạt động ngoại tuyến không?',
        answer:
          'Có, sau khi trang đã tải xong, quá trình kết xuất chạy ngay trong trình duyệt của bạn mà không cần thêm yêu cầu mạng nào. Bạn có thể tiếp tục xuất các trang còn lại ngay cả khi mất kết nối internet, miễn là tab trình duyệt vẫn mở và tệp PDF vẫn đang được tải trong bộ nhớ.',
      },
      {
        question: 'Hình ảnh đã kết xuất của tôi trông mờ — tôi nên làm gì?',
        answer:
          'Bạn hãy kết xuất lại ở tỉ lệ 2.0× và chọn PNG cho các trang nhiều chữ, vì độ phân giải cao hơn giúp chữ nhỏ luôn sắc nét thay vì bị mờ. Nếu hình vẫn mờ, hãy kiểm tra lại tệp PDF gốc, vì trang quét ở độ phân giải thấp sẽ không thể trở nên sắc nét hơn dù bạn chọn tỉ lệ kết xuất cao.',
      },
      {
        question: 'Tôi có thể dùng hình ảnh đã xuất cho mục đích thương mại không?',
        answer:
          'Hình ảnh xuất ra thuộc về bạn để dùng như với tệp PDF gốc, nhưng bạn vẫn cần tôn trọng bản quyền của tài liệu nguồn. Nếu tài liệu thuộc về khách hàng, nhà xuất bản hay một bên thứ ba, hãy xin phép trước khi dùng hình ảnh cho quảng cáo, sản phẩm thương mại hay ấn phẩm công khai.',
      },
    ],
  },
  'pdf-page-rotator': {
    instructions: [
      {
        title: 'Tải tệp PDF của bạn lên',
        description:
          'Chọn tệp PDF chứa các trang bị xoay ngang hoặc bị lộn ngược.',
      },
      {
        title: 'Chọn góc xoay',
        description:
          'Chọn 90° theo chiều kim đồng hồ, 90° ngược chiều kim đồng hồ hoặc 180°, tùy theo mức độ lệch của các trang.',
      },
      {
        title: 'Chọn phạm vi trang',
        description:
          'Chọn All Pages, Specific Ranges, Odd hoặc Even; với khoảng trang, hãy nhập các trang như "2, 5-7".',
      },
      {
        title: 'Xem trước hướng trang hiện tại',
        description:
          'Kiểm tra trang nào thực sự bị xoay ngang để chỉ xoay những trang cần sửa.',
      },
      {
        title: 'Áp dụng và tải xuống',
        description:
          'Nhấn Apply Rotation & Download PDF để lưu tệp đã sửa một cách vĩnh viễn.',
      },
      {
        title: 'Kiểm tra và sửa các trang còn lệch',
        description:
          'Mở tệp PDF đã tải xuống; nếu trang nào vẫn còn xoay ngang, hãy chạy lại với một lần xoay 90° nữa cùng chiều.',
      },
    ],
    examples: [
      {
        title: 'Sửa một biểu đồ tài chính bị xoay ở trang 3',
        input: 'Góc xoay: 90° theo chiều kim đồng hồ · Phạm vi: Specific Page Ranges (3)',
        output: 'Chỉ trang 3 xoay theo chiều kim đồng hồ; mọi trang khác giữ nguyên hướng.',
        explanation: 'Cộng thêm 90° theo modulo 360 vào dữ liệu xoay trang hiện có, không chuyển văn bản thành ảnh.',
      },
      {
        title: 'Sửa toàn bộ tài liệu bị quét ngược',
        input: 'Góc xoay: 180° · Phạm vi: All Pages',
        output: 'Mọi trang đều thẳng đứng khi tải xuống',
        explanation: 'Xoay 180° đưa các trang bị lộn ngược về đúng hướng chỉ trong một lần chạy.',
      },
    ],
    benefits: [
      'Xoay không mất dữ liệu — chỉ cập nhật cờ hướng trang PDF mà không nén lại văn bản hay hình ảnh',
      'Giữ nguyên góc trang hiện có một cách chính xác (tính góc xoay tương đối theo modulo 360°)',
      'Nhắm đúng các khoảng chọn lọc như "2, 5-7" mà không xoay các trang đã thẳng',
      'Tải xuống ngay trong trình duyệt, không tải tệp lên máy chủ',
    ],
    useCases: [
      'Sửa các mẻ quét bị lộn ngược từ máy quét di động hoặc máy photocopy văn phòng',
      'Xoay bảng tính ngang rộng trong báo cáo chủ yếu là trang dọc',
      'Sửa các tệp đính kèm có hướng trang lẫn lộn sau khi gộp tài liệu',
      'Chuẩn bị hồ sơ tuân thủ với hướng trang gọn gàng để nộp lên cổng thông tin',
    ],
    faqs: [
      {
        question: 'Việc xoay trang có làm giảm độ sắc nét của văn bản hay hình ảnh không?',
        answer:
          'Không, việc đặt thuộc tính xoay trang của PDF hoàn toàn không mất dữ liệu và không mã hóa lại phông chữ hay hình ảnh nhúng. Công cụ chỉ thay đổi thông tin hướng trang trong tệp, vì vậy văn bản vẫn sắc nét, hình ảnh vẫn rõ ràng, và tệp kết quả có chất lượng y hệt tệp gốc, chỉ khác ở hướng hiển thị.',
      },
      {
        question: 'Điều gì xảy ra nếu một trang trong PDF của tôi đã bị xoay 90° trước đó?',
        answer:
          'Công cụ xoay sẽ đọc góc xoay hiện tại của từng trang rồi cộng thêm góc bạn chọn theo modulo 360°, vì vậy hướng trang thay đổi một cách có thể dự đoán được theo trạng thái hiện tại của trang. Ví dụ, một trang đã xoay 90° mà bạn xoay thêm 90° cùng chiều sẽ thành 180°, chứ không quay về hướng ban đầu một cách bất ngờ.',
      },
      {
        question: 'Tôi có thể chỉ xoay một trang trong tệp PDF 20 trang không?',
        answer:
          'Có, bạn hãy chọn "Specific Page Ranges" và nhập đúng số trang đó, ví dụ "7". Chỉ trang đó sẽ được xoay, còn mọi trang khác giữ nguyên hướng, rất tiện khi chỉ một biểu đồ hay một bảng tính trong tài liệu dài bị quét lệch trong khi phần còn lại hoàn toàn bình thường.',
      },
      {
        question: 'Công cụ PDF Page Rotator có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không có watermark hay giới hạn, và bạn có thể xoay bao nhiêu tệp PDF tùy thích mà không cần tạo tài khoản. Mọi thao tác đều chạy ngay trong trình duyệt, vì vậy bạn có thể sửa nhanh một tài liệu bị quét lệch bất cứ lúc nào mà không tốn chi phí.',
      },
      {
        question: 'Tôi có thể xoay tất cả các trang của PDF cùng lúc không?',
        answer:
          'Có, bạn hãy chọn All Pages rồi chọn xoay 90° theo chiều kim đồng hồ, 90° ngược chiều kim đồng hồ hoặc 180°. Chế độ này lý tưởng khi toàn bộ tài liệu bị quét ngược hoặc xoay ngang, vì bạn chỉ cần một lần nhấn là mọi trang đều về đúng hướng để đọc và in ấn.',
      },
      {
        question: 'Tôi có thể chỉ xoay các trang lẻ hoặc trang chẵn không?',
        answer:
          'Có, bạn hãy chọn phạm vi Odd hoặc Even; chế độ này hữu ích để sửa các mẻ quét hai mặt. Khi máy quét tách riêng trang lẻ và trang chẵn, thường chỉ một phía bị xoay lệch, vì vậy việc xoay riêng từng phía giúp bạn sửa đúng những trang cần sửa mà không chạm tới các trang đã thẳng.',
      },
      {
        question: 'Tôi có thể xoay trang PDF theo những góc nào?',
        answer:
          'Bạn có thể xoay 90° theo chiều kim đồng hồ, 90° ngược chiều kim đồng hồ và 180°, vì vậy bất kỳ trang nào bị xoay ngang hay lộn ngược đều sửa được chỉ bằng một cú nhấp. Nếu cần xoay 270°, bạn chỉ cần xoay 90° ba lần cùng chiều, vì phép xoay trong PDF được tính theo từng phần tư vòng tròn.',
      },
      {
        question: 'Tôi có thể xoay trang PDF theo góc tùy chỉnh như 45° không?',
        answer:
          'Không, công cụ chỉ hỗ trợ 90°, 180° và 270° (bằng cách lặp lại xoay 90°), vì phép xoay trong PDF được định nghĩa theo từng phần tư vòng tròn. Nếu tài liệu của bạn bị lệch một góc nhỏ do quét xiên, bạn cần dùng phần mềm chỉnh sửa ảnh chuyên dụng để xoay tự do, rồi mới tạo lại tệp PDF.',
      },
      {
        question: 'Việc xoay có vĩnh viễn không?',
        answer:
          'Có, góc xoay được ghi vào từ điển trang của PDF và lưu trong tệp đã tải xuống, vì vậy tệp sẽ mở đúng hướng trong mọi trình đọc PDF về sau. Bạn không cần xoay lại mỗi lần mở tệp, và người nhận tệp cũng sẽ thấy tài liệu đúng hướng ngay khi mở, dù họ dùng điện thoại, máy tính hay máy in.',
      },
      {
        question: 'Việc xoay có làm thay đổi dung lượng tệp PDF không?',
        answer:
          'Hầu như không; chỉ dữ liệu hướng trang thay đổi, vì vậy tệp giữ gần như nguyên dung lượng ban đầu. Vì công cụ không nén lại hình ảnh hay văn bản, bạn không cần lo tệp phình to sau khi xoay, và việc gửi tệp qua email hay tải lên cổng nộp hồ sơ vẫn thuận tiện như trước.',
      },
      {
        question: 'Tôi có thể xoay tệp PDF có mật khẩu không?',
        answer:
          'Không, tệp PDF đã mã hóa phải được mở khóa trước, vì công cụ không thể thay đổi các trang trong một tệp vẫn đang bị khóa. Bạn hãy mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, rồi tải bản đó lên để xoay các trang bị lệch một cách bình thường.',
      },
      {
        question: 'Công cụ PDF Page Rotator có tải tệp của tôi lên không?',
        answer:
          'Không, quá trình xoay chạy hoàn toàn trong trình duyệt của bạn và tệp của bạn không bao giờ rời khỏi thiết bị. Điều này đặc biệt quan trọng với hồ sơ tài chính, tài liệu pháp lý hay giấy tờ nội bộ, vì bạn có thể sửa hướng trang mà không cần gửi tài liệu nhạy cảm qua máy chủ bên thứ ba.',
      },
      {
        question: 'Tôi có thể xoay các trang trong PDF đã quét không?',
        answer:
          'Có, các trang đã quét xoay giống hệt trang văn bản, vì thao tác xoay quay toàn bộ hình ảnh của trang mà không cần đọc nội dung bên trong. Dù trang quét chỉ là hình ảnh, bạn vẫn có thể xoay nó về đúng hướng để đọc, in ấn hay gửi cho người khác mà không cần quét lại tài liệu.',
      },
      {
        question: 'Việc xoay có sửa được tệp PDF mở ngang trong mọi trình xem không?',
        answer:
          'Có, tệp đã lưu sẽ mở đúng hướng trong bất kỳ trình xem PDF nào, vì thông tin xoay được ghi vĩnh viễn vào tệp. Bạn không còn phải xoay màn hình hay nghiêng đầu khi đọc, và người nhận tệp cũng thấy tài liệu đúng hướng ngay lần mở đầu tiên, dù họ dùng thiết bị hay phần mềm nào.',
      },
      {
        question: 'Tôi có thể xoay các trang khác nhau với các góc khác nhau không?',
        answer:
          'Bạn hãy chạy công cụ một lần cho mỗi góc: xoay một khoảng trang, tải xuống, rồi xoay một khoảng khác trong tệp kết quả. Ví dụ, bạn xoay trang 3 sang phải 90°, lưu lại, rồi mở tệp đó để xoay trang 7 sang trái 90°, nhờ đó mỗi trang đều về đúng hướng dù ban đầu chúng lệch theo các chiều khác nhau.',
      },
      {
        question: 'Tôi nên làm gì nếu một trang vẫn còn xoay ngang sau khi xoay?',
        answer:
          'Bạn hãy kiểm tra trước trang đó hiện trông như thế nào, rồi cộng thêm 90° nữa cùng chiều, vì phép xoay luôn tính theo góc hiện tại của trang. Nhiều khi người dùng xoay nhầm chiều ở lần đầu, nên một lần xoay bổ sung cùng chiều sẽ đưa trang về đúng hướng mà không cần làm lại toàn bộ tài liệu.',
      },
      {
        question: 'Việc xoay có ảnh hưởng tới liên kết có thể nhấp hay trường biểu mẫu không?',
        answer:
          'Không, các liên kết và chú thích xoay cùng với trang, vì vậy chúng vẫn thẳng hàng với nội dung. Khi bạn xoay một trang chứa liên kết tới trang web hay trường nhập liệu trong biểu mẫu, các thành phần đó vẫn nằm đúng vị trí tương đối, và người đọc vẫn có thể nhấp hay điền thông tin như bình thường.',
      },
      {
        question: 'Tôi có thể dùng PDF Page Rotator trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên các trình duyệt di động hiện đại, vì vậy bạn có thể mở tệp PDF trên điện thoại và xoay các trang của nó ngay tại đó. Điều này rất tiện khi bạn nhận được một tài liệu quét lệch qua email và cần sửa nhanh trước khi chuyển tiếp cho đồng nghiệp hay khách hàng.',
      },
      {
        question: 'Tệp PDF đã xoay có in đúng không?',
        answer:
          'Có, máy in tuân theo hướng trang đã lưu, vì vậy các trang đã xoay sẽ in đúng chiều. Bạn không cần chỉnh hướng giấy hay xoay thủ công trong hộp thoại in, và tài liệu in ra sẽ dễ đọc ngay, dù đó là báo cáo, hợp đồng hay bảng tính ngang đã được xoay về đúng hướng.',
      },
      {
        question: 'Tệp tải xuống của tôi không bắt đầu — tôi nên làm gì?',
        answer:
          'Bạn hãy cho phép tải xuống cho trang này trong cài đặt trình duyệt rồi nhấn Apply Rotation một lần nữa; tệp được tạo ngay trên máy của bạn. Đôi khi trình chặn cửa sổ bật lên hoặc quyền tải xuống bị tắt sẽ ngăn tệp lưu về, vì vậy việc kiểm tra cài đặt này thường khắc phục sự cố ngay lập tức.',
      },
    ],
  },
  'reorder-delete-pdf-pages': {
    instructions: [
      {
        title: 'Tải tài liệu PDF của bạn lên',
        description:
          'Chọn một tệp PDF chưa mã hóa; bản xem trước hình thu nhỏ được kết xuất ngay trên máy cho tối đa 30 trang (mọi trang đều có thẻ trang và kích thước).',
      },
      {
        title: 'Xem lại các thẻ trang',
        description:
          'Mỗi thẻ hiển thị vị trí kết quả hiện tại và chỉ số trang gốc, giúp bạn phát hiện trang trống, trang trùng lặp hoặc trang sai vị trí trước khi thay đổi.',
      },
      {
        title: 'Sắp xếp lại, nhân bản hoặc xóa',
        description:
          'Dùng nút mũi tên để đổi thứ tự, biểu tượng sao chép để nhân bản một trang, hoặc biểu tượng thùng rác để xóa các trang không cần.',
      },
      {
        title: 'Kiểm tra thứ tự trang mới',
        description:
          'Quét vị trí đã cập nhật trên từng thẻ để xác nhận phụ lục, tài liệu đính kèm và trang bìa nằm đúng chỗ.',
      },
      {
        title: 'Lưu tệp PDF đã sắp xếp',
        description:
          'Nhấn Save Reordered PDF để biên soạn và tải xuống tài liệu gọn gàng của bạn.',
      },
      {
        title: 'Mẹo: giữ lại tệp gốc',
        description:
          'Công cụ không bao giờ chỉnh sửa tệp nguồn của bạn, vì vậy hãy giữ nó làm bản sao lưu. Nếu tệp PDF không tải được, hãy kiểm tra xem nó có mật khẩu hay đã mã hóa không.',
      },
    ],
    examples: [
      {
        title: 'Xóa trang trống cuối cùng và đưa phụ lục lên trước',
        input: 'PDF 5 trang · Xóa trang 5 · Di chuyển trang 4 tới vị trí #2',
        output: 'PDF 4 trang đã cập nhật, nội dung vector còn nguyên vẹn',
        explanation: 'Tái tạo cây trang của tài liệu một cách gọn gàng theo thứ tự bạn đã chọn.',
      },
      {
        title: 'Nhân bản trang ký tên để in',
        input: 'PDF 8 trang · Nhân bản trang 8 hai lần',
        output: 'PDF 10 trang, trong đó trang ký tên xuất hiện ba lần',
        explanation: 'Biểu tượng sao chép cho phép lặp lại cùng một trang trong tập tài liệu bao nhiêu lần tùy ý.',
      },
    ],
    benefits: [
      'Kết hợp hình thu nhỏ trực quan của PDF.js với sao chép trang không mất dữ liệu bằng pdf-lib',
      'Ngăn bạn vô tình lưu một tệp PDF trống 0 trang',
      'Hiển thị cả vị trí kết quả hiện tại và chỉ số trang gốc',
      'Không tải tệp lên máy chủ, phù hợp với hồ sơ nhân sự, pháp lý hay y tế bảo mật',
    ],
    useCases: [
      'Xóa các trang trống vô tình do máy quét tài liệu hai mặt tạo ra',
      'Đưa phụ lục hoặc tài liệu đính kèm bị đặt sai chỗ về đúng thứ tự',
      'Nhân bản trang biểu mẫu có thể in hoặc trang ký tên trong một tập hồ sơ',
      'Dọn dẹp các tệp PDF đã gộp trước khi gửi cho khách hàng',
    ],
    faqs: [
      {
        question: 'Vì sao hình thu nhỏ chỉ kết xuất cho 30 trang đầu tiên?',
        answer:
          'Để giữ RAM trình duyệt nhanh với tài liệu rất lớn, hình thu nhỏ trực tiếp chỉ kết xuất cho 30 trang đầu, trong khi mọi trang vẫn có thể sắp xếp lại và xóa hoàn toàn qua thẻ của nó. Bạn vẫn thấy vị trí và số trang gốc của từng trang, vì vậy việc quản lý tài liệu hàng trăm trang vẫn chính xác và dễ dàng.',
      },
      {
        question: 'Việc sắp xếp lại trang có biến văn bản thành hình ảnh không?',
        answer:
          'Không, hình thu nhỏ chỉ dùng để xem trước trực quan trong giao diện; tệp kết quả đã lưu dùng pdf-lib copyPages() để giữ nguyên văn bản vector và liên kết gốc. Nhờ đó chữ vẫn sắc nét, có thể chọn và tìm kiếm được, còn các liên kết trong tài liệu vẫn hoạt động đúng sau khi bạn đổi thứ tự các trang.',
      },
      {
        question: 'Tôi có thể hoàn tác việc xóa tất cả các trang không?',
        answer:
          'Trình chỉnh sửa yêu cầu còn lại ít nhất 1 trang, và việc tải lại tệp nguồn chưa bị thay đổi sẽ khôi phục toàn bộ tài liệu gốc bất cứ lúc nào. Vì công cụ không bao giờ sửa tệp gốc, bạn luôn có một bản sao lưu an toàn để bắt đầu lại nếu lỡ tay xóa nhầm một trang quan trọng trong quá trình sắp xếp.',
      },
      {
        question: 'Công cụ Reorder & Delete PDF Pages có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể sắp xếp lại, xóa hay nhân bản trang trong bao nhiêu tài liệu tùy thích mà không tốn phí, và kết quả luôn được tạo ngay trên máy của bạn một cách nhanh chóng.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên máy chủ khi tôi sắp xếp lại trang không?',
        answer:
          'Không, tệp PDF của bạn được xử lý ngay trong trình duyệt và không bao giờ được tải lên, vì vậy tài liệu bảo mật luôn ở trên thiết bị của bạn. Điều này đặc biệt quan trọng với hồ sơ nhân sự, hồ sơ y tế hay hợp đồng pháp lý, nơi bạn không muốn gửi thông tin nhạy cảm qua máy chủ bên thứ ba.',
      },
      {
        question: 'Tôi có thể xóa nhiều trang cùng lúc không?',
        answer:
          'Mỗi thẻ trang đều có biểu tượng thùng rác riêng, vì vậy bạn hãy xóa từng trang một; số trang và vị trí sẽ cập nhật ngay sau mỗi lần xóa. Cách làm từng bước này giúp bạn kiểm tra kỹ từng trang trước khi xóa, tránh xóa nhầm một trang quan trọng trong tài liệu dài mà khó khôi phục.',
      },
      {
        question: 'Tôi có thể đưa một trang thẳng tới đầu hoặc cuối tệp PDF không?',
        answer:
          'Bạn hãy dùng nút mũi tên nhiều lần để đưa một trang tới vị trí đầu tiên hoặc cuối cùng, đồng thời kiểm tra vị trí kết quả đã cập nhật trên thẻ khi di chuyển. Dù hơi mất vài cú nhấp với tài liệu dài, cách này đảm bảo bạn luôn biết chính xác trang đang ở đâu trước khi lưu tệp cuối cùng.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi lỡ xóa nhầm trang?',
        answer:
          'Không có nút hoàn tác, vì vậy bạn chỉ cần tải lại tệp gốc chưa bị thay đổi và làm lại các thay đổi; công cụ không bao giờ sửa đổi tệp nguồn của bạn. Để tránh mất thời gian, bạn nên xem kỹ hình thu nhỏ và số trang gốc trên từng thẻ trước khi nhấn biểu tượng thùng rác.',
      },
      {
        question: 'Việc sắp xếp lại trang có thay đổi văn bản hay hình ảnh trên trang không?',
        answer:
          'Không, các trang được sao chép nguyên vẹn bằng pdf-lib, vì vậy văn bản vector, hình ảnh và phông chữ giữ nguyên chất lượng gốc. Chỉ thứ tự các trang thay đổi, còn nội dung bên trong mỗi trang, từ chữ ký, con dấu tới biểu đồ, đều hiển thị đúng như trong tài liệu ban đầu của bạn.',
      },
      {
        question: 'Tôi có thể nhân bản cùng một trang nhiều lần không?',
        answer:
          'Có, bạn hãy nhấn biểu tượng sao chép trên một trang bao nhiêu lần tùy ý, ví dụ để lặp lại biểu mẫu có thể in hay trang ký tên trong một tập hồ sơ. Mỗi bản sao đều giữ nguyên nội dung gốc, và bạn có thể di chuyển các bản sao tới các vị trí khác nhau trong tài liệu trước khi lưu.',
      },
      {
        question: 'Những tệp PDF nào hoạt động với công cụ Reorder & Delete PDF Pages?',
        answer:
          'Bất kỳ tệp PDF chưa mã hóa nào cũng hoạt động được. Tệp PDF có mật khẩu hoặc đã mã hóa không thể mở bằng công cụ trình duyệt này, vì vậy bạn hãy mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, rồi tải bản đó lên để sắp xếp lại các trang.',
      },
      {
        question: 'Tệp PDF của tôi có thể có bao nhiêu trang?',
        answer:
          'Không có giới hạn số trang cố định; hình thu nhỏ trực tiếp kết xuất cho 30 trang đầu, trong khi mọi trang vẫn có thẻ với vị trí và chỉ số gốc của nó. Nhờ đó bạn có thể quản lý cả tài liệu hàng trăm trang, dù việc cuộn qua nhiều thẻ trên màn hình nhỏ sẽ tiện hơn trên máy tính để bàn.',
      },
      {
        question: 'Dung lượng tệp của tôi có thay đổi sau khi sắp xếp lại trang không?',
        answer:
          'Việc xóa trang làm tệp nhỏ hơn, còn chỉ sắp xếp lại thứ tự thì dung lượng gần như giữ nguyên vì tài liệu được tái tạo từ cùng các trang đó. Nếu bạn xóa nhiều trang chứa hình ảnh lớn, dung lượng sẽ giảm rõ rệt, giúp tệp cuối cùng nhẹ hơn và dễ gửi qua email hay tải lên cổng thông tin.',
      },
      {
        question: 'Tôi có thể sắp xếp lại trang trong PDF đã quét không?',
        answer:
          'Có, các trang được sao chép nguyên vẹn bất kể chúng chứa văn bản hay hình ảnh quét, vì vậy tài liệu quét sắp xếp lại giống như bất kỳ tệp PDF nào khác. Bạn có thể xóa trang trống do máy quét tạo ra, đưa trang bìa về đầu tài liệu, hay nhân bản trang biểu mẫu mà không cần quét lại bất cứ thứ gì.',
      },
      {
        question: 'Công cụ Reorder & Delete PDF Pages có hoạt động trên điện thoại không?',
        answer:
          'Có, công cụ chạy trên mọi trình duyệt di động hiện đại, dù các thẻ trang và hình thu nhỏ dễ quản lý hơn trên màn hình máy tính để bàn lớn. Trên điện thoại, bạn vẫn có thể xóa hay di chuyển vài trang nhanh chóng, còn với tài liệu dài nhiều trang, máy tính sẽ cho trải nghiệm cuộn và sắp xếp thoải mái hơn.',
      },
      {
        question: 'Tôi có thể xoay trang trong khi sắp xếp lại không?',
        answer:
          'Không, việc xoay là một công việc riêng, vì vậy bạn hãy dùng công cụ PDF Page Rotator trước rồi mới sắp xếp lại các trang đã xoay ở đây. Quy trình hai bước này đảm bảo mỗi công cụ làm tốt nhiệm vụ của nó, và tệp cuối cùng của bạn vừa đúng hướng trang vừa đúng thứ tự mong muốn.',
      },
      {
        question: 'Làm thế nào để phân biệt các trang trong trình chỉnh sửa?',
        answer:
          'Mỗi thẻ hiển thị bản xem trước hình thu nhỏ khi có, cùng với vị trí kết quả hiện tại và số trang gốc trong tệp nguồn. Nhờ đó bạn có thể nhận ra trang bìa, trang trống hay trang trùng lặp ngay từ cái nhìn đầu tiên, và tránh nhầm lẫn giữa các trang có nội dung tương tự nhau trong tài liệu dài.',
      },
      {
        question: 'Tôi có thể gộp hai tệp PDF bằng công cụ này không?',
        answer:
          'Không, công cụ này chỉ sắp xếp lại các trang trong một tệp PDF; bạn hãy dùng công cụ Merge PDF để kết hợp các tài liệu riêng lẻ trước. Sau khi gộp xong, bạn có thể mở tệp đã gộp tại đây để xóa trang thừa, đổi thứ tự chương hay nhân bản trang biểu mẫu theo nhu cầu của mình.',
      },
      {
        question: 'Việc xóa trang có làm mất dấu trang hay liên kết nội bộ không?',
        answer:
          'Nội dung trang được giữ nguyên, nhưng dấu trang ở cấp tài liệu có thể không còn sau khi tái tạo, vì vậy bạn hãy kiểm tra tệp đã lưu trước khi chia sẻ. Nếu tài liệu của bạn dựa nhiều vào mục lục điều hướng, bạn nên tạo lại dấu trang trong trình đọc PDF sau khi sắp xếp xong để người đọc vẫn điều hướng dễ dàng.',
      },
      {
        question: 'Tôi nhận được tệp nào sau khi lưu PDF đã sắp xếp lại?',
        answer:
          'Một tệp PDF hoàn toàn mới sẽ tải xuống thiết bị của bạn theo thứ tự trang bạn đã chọn, trong khi tệp gốc vẫn còn nguyên trên máy tính của bạn. Bạn có thể kiểm tra tệp mới, đổi tên theo ý mình, rồi gửi đi mà không sợ làm mất hay ghi đè lên tài liệu ban đầu.',
      },
    ],
  },
  'pdf-watermark': {
    instructions: [
      {
        title: 'Chọn tệp PDF của bạn',
        description:
          'Tải bất kỳ tài liệu PDF chưa mã hóa nào lên ngay trong bộ nhớ trên máy.',
      },
      {
        title: 'Nhập văn bản watermark',
        description:
          'Nhập dấu bạn cần, ví dụ CONFIDENTIAL, DRAFT hoặc DO NOT DISTRIBUTE, bằng ký tự Latin chuẩn.',
      },
      {
        title: 'Tùy chỉnh dấu watermark',
        description:
          'Chọn Neutral Gray, Brand Indigo hoặc Stamp Red, rồi chỉnh thanh trượt kích thước, độ mờ và góc xoay cho tới khi dấu trông vừa ý.',
      },
      {
        title: 'Chọn trang nào sẽ đóng dấu',
        description:
          'Giữ mặc định để đóng dấu mọi trang, hoặc chọn First page only khi chỉ trang bìa cần dấu phân loại.',
      },
      {
        title: 'Áp dụng và tải xuống',
        description:
          'Tùy chọn, hãy chọn First page only, rồi nhấn Apply Watermark & Download.',
      },
      {
        title: 'Mẹo: kiểm tra độ dễ đọc trước khi chia sẻ',
        description:
          'Mở tệp đã tải xuống và xác nhận văn bản chính vẫn dễ đọc; nếu dấu quá đậm, hãy chạy lại với độ mờ thấp hơn như 15–22%.',
      },
    ],
    examples: [
      {
        title: 'Đóng dấu bản thảo đề xuất trước khi phát hành',
        input: 'Văn bản: DRAFT · Phông: 54 pt · Độ mờ: 22% · Góc: 40°',
        output: 'Lớp phủ vector DRAFT chéo, mờ một nửa, căn giữa trên mọi trang',
        explanation: 'Dùng độ mờ alpha để văn bản chính bên dưới vẫn hoàn toàn dễ đọc.',
      },
      {
        title: 'Chỉ đóng dấu CONFIDENTIAL lên trang bìa',
        input: 'Văn bản: CONFIDENTIAL · Màu: Stamp Red · First page only: Bật',
        output: 'Chỉ trang đầu có dấu CONFIDENTIAL đỏ chéo, các trang còn lại sạch',
        explanation: 'Chế độ First page only dùng để phân loại trang bìa mà không chạm tới các trang bên trong.',
      },
    ],
    benefits: [
      'Dùng kiểu chữ vector HelveticaBold chuẩn sắc nét thay vì ảnh bitmap mờ',
      'Hỗ trợ độ mờ alpha bán trong suốt từ 8% tới 65% để nội dung vẫn dễ đọc',
      'Có chế độ First Page Only cho dấu phân loại trên trang bìa',
      'Giữ bản thảo chưa phát hành hoàn toàn tránh xa máy chủ đám mây bên ngoài',
    ],
    useCases: [
      'Đánh dấu hợp đồng nháp, SOW hay bản thuyết trình trước khi gửi ra ngoài xem xét',
      'Thêm thông báo CONFIDENTIAL hoặc INTERNAL USE ONLY vào tập hồ sơ nhân sự hay hội đồng quản trị',
      'Gắn nhãn cho portfolio mẫu hay bản in thử',
      'Đóng dấu trạng thái xem xét nhất quán trước khi lưu trữ',
    ],
    faqs: [
      {
        question: 'Người nhận có thể chỉnh sửa hay xóa watermark trong trình chỉnh sửa PDF đầy đủ không?',
        answer:
          'Watermark văn bản vẽ bằng pdf-lib là đối tượng nội dung vector chuẩn trên trang, vì vậy người dùng có trình chỉnh sửa PDF đầy đủ vẫn có thể chọn và xóa nó. Nếu bạn cần các trang đã làm phẳng mà watermark không thể chọn dưới dạng văn bản, hãy chuyển tệp PDF đã đóng dấu qua công cụ PDF to Images rồi qua Images to PDF của chúng tôi.',
      },
      {
        question: 'Watermark có hoạt động trên cả trang dọc và trang ngang không?',
        answer:
          'Có, tọa độ được tính linh hoạt từ chiều rộng và chiều cao riêng của từng trang, vì vậy watermark luôn nằm ở cùng một vị trí tương đối trên mọi trang. Dù tài liệu của bạn trộn trang dọc A4 với bảng tính ngang, dấu vẫn căn giữa chéo một cách nhất quán và trông chuyên nghiệp trên toàn bộ tài liệu.',
      },
      {
        question: 'Chuỗi watermark hỗ trợ những ký tự nào?',
        answer:
          'Công cụ hỗ trợ các ký tự WinAnsi chuẩn (ASCII Latin và các ký hiệu Tây Âu thông dụng) mà phông HelveticaBold của PDF hỗ trợ. Bạn có thể dùng chữ hoa, chữ thường, số và dấu câu thông thường, nhưng ký tự tiếng Việt có dấu hay ký tự đặc biệt ngoài bảng WinAnsi có thể không hiển thị đúng, vì vậy hãy dùng chữ Latin không dấu.',
      },
      {
        question: 'Công cụ PDF Watermark có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể đóng dấu bao nhiêu tài liệu tùy thích, từ bản thảo hợp đồng tới portfolio mẫu, mà không tốn phí và không cần tạo tài khoản hay cài đặt thêm phần mềm nào.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên máy chủ khi thêm watermark không?',
        answer:
          'Không, tệp được xử lý ngay trong trình duyệt của bạn và không bao giờ được tải lên, vì vậy bản thảo chưa phát hành luôn giữ riêng tư. Điều này đặc biệt quan trọng khi bạn đóng dấu hợp đồng, đề xuất kinh doanh hay tài liệu nội bộ, vì bạn không cần gửi những nội dung nhạy cảm đó qua máy chủ bên thứ ba.',
      },
      {
        question: 'Tôi có thể đóng dấu watermark chỉ trên một số trang của PDF không?',
        answer:
          'Bạn có thể đóng dấu mọi trang hoặc chỉ trang đầu tiên bằng tùy chọn First page only; việc đóng dấu một khoảng trang giữa tùy chỉnh thì không được hỗ trợ. Nếu bạn cần đóng dấu một chương cụ thể, hãy tách chương đó bằng công cụ Split PDF, đóng dấu riêng, rồi gộp lại với phần còn lại bằng Merge PDF.',
      },
      {
        question: 'Tôi có thể dùng văn bản nào làm watermark cho PDF?',
        answer:
          'Bạn có thể dùng bất kỳ nhãn ngắn nào bằng ký tự Latin chuẩn, ví dụ CONFIDENTIAL, DRAFT, INTERNAL USE ONLY hay tên công ty của bạn. Một nhãn ngắn, rõ ràng và in hoa thường dễ đọc nhất khi đặt chéo trên trang, và người nhận sẽ hiểu ngay trạng thái hay mức độ bảo mật của tài liệu.',
      },
      {
        question: 'Tôi có thể dùng tên công ty làm watermark không?',
        answer:
          'Có, bạn hãy nhập tên công ty hay thương hiệu của mình làm văn bản watermark và nó sẽ được đóng dấu trên các trang bạn chọn. Cách này giúp khẳng định quyền sở hữu đối với portfolio mẫu, bản in thử hay tài liệu chia sẻ trước, đồng thời quảng bá thương hiệu một cách tinh tế trên mỗi trang tài liệu.',
      },
      {
        question: 'Tôi có thể đổi màu watermark của PDF không?',
        answer:
          'Có, bạn hãy chọn Neutral Gray cho dấu nhẹ nhàng, Brand Indigo để phù hợp với thương hiệu, hoặc Stamp Red cho thông báo phân loại nổi bật. Màu xám phù hợp với bản nháp thông thường, màu chàm tạo cảm giác chuyên nghiệp, còn màu đỏ giúp cảnh báo bảo mật được chú ý ngay từ cái nhìn đầu tiên.',
      },
      {
        question: 'Watermark có thể trong suốt tới mức nào?',
        answer:
          'Độ mờ có thể điều chỉnh từ 8% tới 65%, vì vậy bạn có thể giữ dấu nhìn thấy được trong khi văn bản bên dưới vẫn hoàn toàn dễ đọc. Với tài liệu nhiều chữ, độ mờ khoảng 15–22% thường là lựa chọn cân bằng nhất: dấu đủ rõ để nhận biết trạng thái, nhưng không che khuất nội dung chính của trang.',
      },
      {
        question: 'Tôi có thể làm watermark nằm ngang thay vì chéo không?',
        answer:
          'Có, bạn hãy đặt thanh trượt góc xoay ở 0 độ để có dấu thẳng nằm ngang, hoặc chọn bất kỳ góc nào tới đường chéo đầy đủ. Dấu ngang phù hợp với tiêu đề trang hay chân trang trang trọng, còn dấu chéo lớn ở giữa trang thường dùng cho bản nháp hay tài liệu mật cần cảnh báo rõ ràng hơn.',
      },
      {
        question: 'Tôi có thể thêm watermark hình ảnh hay logo vào PDF không?',
        answer:
          'Không, công cụ này chỉ đóng dấu watermark văn bản; lớp phủ hình ảnh và logo không được hỗ trợ. Nếu bạn cần đóng dấu logo, bạn có thể dùng tên công ty bằng chữ làm watermark tạm thời, hoặc dùng phần mềm chỉnh sửa PDF đầy đủ để chèn hình ảnh logo vào từng trang theo đúng thiết kế thương hiệu.',
      },
      {
        question: 'Watermark có in ra khi tôi in PDF không?',
        answer:
          'Có, watermark là nội dung vector thật được vẽ trên mỗi trang, vì vậy nó xuất hiện trên bản in giống như trên màn hình. Điều này đảm bảo bản in của hợp đồng nháp hay hồ sơ mật vẫn mang dấu phân loại rõ ràng, dù người nhận in ra giấy hay chỉ xem trên máy tính.',
      },
      {
        question: 'Việc đóng dấu watermark có thay đổi văn bản gốc của PDF không?',
        answer:
          'Không, watermark được vẽ dưới dạng lớp phủ trên các trang và không chỉnh sửa hay thay thế bất kỳ nội dung hiện có nào. Văn bản, hình ảnh và bố cục gốc của bạn vẫn nguyên vẹn, vì vậy bạn có thể yên tâm đóng dấu bản sao để chia sẻ mà không sợ làm hỏng tài liệu gốc của mình.',
      },
      {
        question: 'Tôi có thể đóng dấu watermark lên PDF có mật khẩu không?',
        answer:
          'Không, chỉ tệp PDF chưa mã hóa mới mở được bằng công cụ trình duyệt này, vì vậy bạn hãy gỡ mật khẩu trước. Bạn có thể mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, đóng dấu bản đó, rồi đặt lại mật khẩu bằng phần mềm PDF nếu vẫn cần bảo vệ tài liệu sau khi chia sẻ.',
      },
      {
        question: 'Công cụ này có thể xóa watermark khỏi PDF không?',
        answer:
          'Không, công cụ chỉ thêm watermark; việc xóa watermark hiện có cần một trình chỉnh sửa PDF đầy đủ. Nếu bạn nhận được tài liệu có watermark không mong muốn, bạn cần xin bản gốc không có dấu từ người gửi, hoặc dùng phần mềm chuyên dụng để chỉnh sửa lớp nội dung của trang một cách cẩn thận.',
      },
      {
        question: 'Watermark PDF dùng phông chữ nào?',
        answer:
          'Watermark dùng kiểu chữ vector HelveticaBold chuẩn sắc nét, giữ độ nét ở mọi kích thước thay vì mờ như ảnh bitmap. Nhờ đó dấu DRAFT hay CONFIDENTIAL vẫn rõ ràng dù bạn đặt kích thước lớn ở giữa trang hay kích thước nhỏ ở góc, và bản in ra luôn trông chuyên nghiệp và dễ đọc.',
      },
      {
        question: 'Watermark có còn dễ đọc trên trang tối hay trang nhiều nội dung không?',
        answer:
          'Điều đó phụ thuộc vào nền trang, vì vậy bạn hãy chọn màu tương phản và độ mờ vừa phải, rồi mở tệp đã tải xuống để kiểm tra kết quả. Với trang tối, màu sáng hay màu đỏ thường nổi bật hơn, còn với trang nhiều hình ảnh, độ mờ thấp hơn sẽ giúp dấu không che khuất các chi tiết quan trọng bên dưới.',
      },
      {
        question: 'Tôi có thể đóng dấu watermark lên PDF đã quét không?',
        answer:
          'Có, watermark được vẽ trên mỗi trang bất kể trang đó chứa văn bản hay hình ảnh quét. Dù tài liệu của bạn là bản quét giấy, dấu vẫn hiển thị rõ ràng trên từng trang, giúp bạn phân loại hồ sơ lưu trữ, biên lai hay hợp đồng đã ký mà không cần nhập lại văn bản hay quét lại tài liệu.',
      },
      {
        question: 'Việc thêm watermark có làm tệp PDF lớn hơn nhiều không?',
        answer:
          'Chỉ lớn hơn một chút, vì văn bản vector thêm rất ít dữ liệu, nên dung lượng tệp chỉ tăng nhẹ so với dấu dạng hình ảnh. Bạn có thể đóng dấu cả tài liệu dài nhiều trang mà không lo tệp phình to gây khó khăn khi gửi email hay tải lên cổng thông tin, và chất lượng nội dung gốc vẫn được giữ nguyên.',
      },
    ],
  },
  'add-pdf-page-numbers': {
    instructions: [
      {
        title: 'Tải tài liệu PDF của bạn lên',
        description:
          'Chọn tệp PDF chưa có số trang hoặc đã gộp mà bạn muốn đánh số trang.',
      },
      {
        title: 'Chọn định dạng số trang',
        description:
          'Chọn "Page 1 of N" cho tập tài liệu trang trọng, "1 / N" cho vẻ gọn gàng, hoặc chỉ số trần cho chân trang tối giản.',
      },
      {
        title: 'Đặt vị trí và kích thước',
        description:
          'Chọn Bottom Center, Bottom Right, Bottom Left hoặc Top Right, rồi điều chỉnh cỡ chữ để số trang nằm gọn trong lề.',
      },
      {
        title: 'Đặt số bắt đầu và bỏ qua trang bìa',
        description:
          'Đổi Start Number để tiếp tục một bộ nhiều tập, và bật Skip cover page khi trang tiêu đề cần giữ sạch.',
      },
      {
        title: 'Áp dụng và tải xuống',
        description:
          'Nhấn Add Page Numbers & Download để xuất tệp PDF đã đánh số trang ngay trên máy.',
      },
      {
        title: 'Mẹo: kiểm tra các trang có chân trang chật',
        description:
          'Mở tệp đã tải xuống và xem các trang đã có văn bản chân trang; nếu số trang nằm quá gần, hãy chạy lại với cỡ chữ nhỏ hơn.',
      },
    ],
    examples: [
      {
        title: 'Đánh số tập tài liệu đã gộp, bắt đầu sau trang bìa',
        input: 'PDF 5 trang · Định dạng: Page 1 of N · Skip cover page: Bật',
        output: 'Trang 1 không chạm tới; trang 2–5 được đóng dấu "Page 1 of 4" tới "Page 4 of 4"',
        explanation: 'Rất phù hợp sau khi gộp trang bìa và phụ lục bằng Merge PDF.',
      },
      {
        title: 'Tiếp tục đánh số tập 2 từ trang 15',
        input: 'Tệp: part2.pdf · Start Number: 15 · Định dạng: 1 / N',
        output: 'Các trang được đánh số từ "15 / 24" trở đi',
        explanation: 'Số bắt đầu tùy chỉnh giúp tiếp tục đánh số cho bộ tài liệu nhiều tập.',
      },
    ],
    benefits: [
      'Sửa lỗi phân trang ngay sau khi gộp các báo cáo PDF riêng lẻ',
      'Hỗ trợ bỏ qua trang 1 để trang bìa tiêu đề luôn sạch',
      'Số bắt đầu tùy chỉnh hỗ trợ bộ tài liệu nhiều tập',
      'Đo chính xác chiều rộng văn bản theo từng khổ trang để căn giữa và căn phải sắc nét',
    ],
    useCases: [
      'Đánh số trang cho đề xuất khách hàng và hồ sơ dự thầu đã gộp sau Merge PDF',
      'Đánh số hồ sơ tòa án, phụ lục hoặc chương luận văn',
      'Tiếp tục đánh số tuần tự từ trang 15 trở đi trong tập 2',
      'Thêm số trang nhỏ ở góc dưới phải cho tài liệu học tập để in',
    ],
    faqs: [
      {
        question: 'Công cụ này có xóa văn bản hiện có gần lề dưới không?',
        answer:
          'Không, công cụ vẽ các số sắc nét ở vị trí cách lề 28 pt mà không che nền hiện có, vì vậy bạn nên kiểm tra các trang đã có chân trang chật. Nếu số trang nằm quá gần một dòng chú thích hay một bảng ở cuối trang, hãy chọn vị trí khác hoặc giảm cỡ chữ rồi chạy lại để có kết quả gọn gàng hơn.',
      },
      {
        question: 'Tùy chọn "Skip cover page" ảnh hưởng thế nào tới tổng số trong "Page X of N"?',
        answer:
          'Khi bật, trang 1 không nhận nhãn và các trang còn lại được đếm gọn gàng từ 1 tới (Tổng số trang − 1) để tổng số luôn nhất quán. Ví dụ, tài liệu 5 trang sẽ hiển thị "Page 1 of 4" tới "Page 4 of 4" trên các trang 2–5, giúp người đọc không nhầm lẫn về tổng số trang nội dung thực tế.',
      },
      {
        question: 'Tôi có thể bắt đầu đánh số từ trang 10 thay vì 1 không?',
        answer:
          'Có, bạn hãy đổi Start Number thành 10 để đánh số các tập tuần tự từ 10 trở lên. Tính năng này rất hữu ích cho bộ tài liệu nhiều tập, luận văn chia thành nhiều phần, hay hồ sơ tiếp nối từ một tài liệu trước đó, vì số trang sẽ liên tục thay vì bắt đầu lại từ đầu.',
      },
      {
        question: 'Công cụ Add PDF Page Numbers có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể đánh số bao nhiêu tài liệu tùy thích, từ đề xuất khách hàng tới luận văn hay hồ sơ tòa án, mà không tốn phí và không cần tạo tài khoản hay cài đặt phần mềm.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên máy chủ khi thêm số trang không?',
        answer:
          'Không, tệp được xử lý ngay trong trình duyệt của bạn và không bao giờ được tải lên, vì vậy tài liệu của bạn luôn giữ riêng tư. Điều này đặc biệt quan trọng với hồ sơ pháp lý, hồ sơ tòa án hay đề xuất kinh doanh nhạy cảm, nơi bạn không muốn gửi nội dung qua máy chủ của bên thứ ba.',
      },
      {
        question: 'Tôi có thể chọn những định dạng số trang nào?',
        answer:
          'Bạn có thể chọn "Page 1 of N", kiểu gọn "1 / N", hoặc chỉ số trần không có nhãn. Định dạng đầy đủ phù hợp với tập tài liệu trang trọng cần người đọc biết tổng số trang, còn kiểu gọn và số trần phù hợp với tài liệu học tập hay bản in nội bộ cần chân trang tối giản và sạch sẽ.',
      },
      {
        question: 'Số trang có thể xuất hiện ở đâu trên trang?',
        answer:
          'Bạn có thể chọn Bottom Center, Bottom Right, Bottom Left hoặc Top Right, tùy theo chỗ nào trong lề còn trống. Vị trí giữa dưới thường dễ thấy nhất, góc dưới phải phù hợp với tài liệu in hai mặt, còn góc trên phải hữu ích khi chân trang đã chật kín văn bản hay bảng biểu.',
      },
      {
        question: 'Tôi có thể bỏ qua việc đánh số trang bìa không?',
        answer:
          'Có, bạn hãy bật Skip cover page và trang 1 sẽ giữ sạch trong khi việc đánh số bắt đầu từ trang 2. Đây là cách chuẩn cho báo cáo, luận văn và đề xuất, nơi trang tiêu đề cần trình bày gọn gàng với tên tài liệu và tác giả, còn số trang chỉ xuất hiện từ trang nội dung đầu tiên trở đi.',
      },
      {
        question: 'Công cụ có đánh lại số cho PDF đã có số trang không?',
        answer:
          'Không, công cụ đóng dấu số mới bên cạnh các số hiện có, vì vậy bạn hãy xóa số cũ trước nếu chỉ muốn một bộ số duy nhất. Nếu không, tệp kết quả sẽ có hai bộ số chồng lên nhau gây rối mắt, đặc biệt khi số cũ và số mới nằm cùng một vị trí ở chân trang hay đầu trang.',
      },
      {
        question: 'Tôi có thể đổi cỡ chữ của số trang không?',
        answer:
          'Có, bạn hãy điều chỉnh cài đặt cỡ chữ để số trang dễ đọc mà không làm chật chân trang hay đầu trang của bạn. Cỡ chữ nhỏ phù hợp với tài liệu đã có nhiều chú thích ở cuối trang, còn cỡ chữ lớn hơn giúp số trang nổi bật trong tập tài liệu in ấn cần tra cứu nhanh theo số trang.',
      },
      {
        question: 'Việc đánh số trang có hoạt động trên trang ngang không?',
        answer:
          'Có, công cụ đo chính xác chiều rộng văn bản theo từng khổ trang, vì vậy số trang luôn căn giữa hoặc căn lề đúng trên cả trang dọc và trang ngang. Dù tài liệu của bạn trộn báo cáo dọc với bảng tính ngang, số trang vẫn nằm gọn trong lề và thẳng hàng một cách chuyên nghiệp trên mọi trang.',
      },
      {
        question: 'Tôi có thể chỉ đánh số một số trang đã chọn trong PDF không?',
        answer:
          'Không, việc đánh số áp dụng cho mọi trang ngoại trừ trang bìa được bỏ qua tùy chọn; việc đánh số một khoảng tùy chỉnh thì không được hỗ trợ. Nếu bạn chỉ cần đánh số một chương, hãy tách chương đó bằng công cụ Split PDF, đánh số riêng, rồi gộp lại với phần còn lại nếu cần.',
      },
      {
        question: 'Điều gì xảy ra nếu tệp PDF của tôi đã có số trang?',
        answer:
          'Số mới sẽ được đóng dấu thêm bên cạnh số cũ, có thể trông như bị nhân đôi, vì vậy bạn hãy kiểm tra kết quả và dọn sạch bản gốc trước nếu cần. Tốt nhất là bạn nên dùng bản PDF chưa có số trang, hoặc xóa số cũ bằng phần mềm chỉnh sửa PDF, rồi mới chạy công cụ này để có một bộ số duy nhất và gọn gàng.',
      },
      {
        question: 'Tôi có thể dùng số La Mã cho số trang không?',
        answer:
          'Không, công cụ chỉ đánh số trang bằng chữ số Ả Rập chuẩn, vì vậy các định dạng như số La Mã không có sẵn dưới dạng kiểu đánh số. Nếu luận văn hay sách của bạn yêu cầu số La Mã cho phần mở đầu, bạn cần dùng phần mềm soạn thảo văn bản đầy đủ để định dạng số trang trước khi xuất ra PDF.',
      },
      {
        question: 'Tôi có thể thêm số trang vào PDF đã quét không?',
        answer:
          'Có, số trang được vẽ trên mỗi trang dưới dạng văn bản vector bất kể trang đó chứa văn bản hay hình ảnh quét. Nhờ đó bạn có thể đánh số cho hồ sơ lưu trữ, tài liệu quét hay biên lai đã quét để dễ tra cứu và trích dẫn, dù các trang gốc chỉ là hình ảnh không có lớp văn bản.',
      },
      {
        question: 'Tôi có thể đặt số trang ở đầu trang thay vì chân trang không?',
        answer:
          'Có, bạn hãy chọn vị trí Top Right để đánh số ở đầu trang; vị trí giữa trên thì không có sẵn. Số trang ở đầu trang phù hợp khi chân trang đã chật kín chú thích hay bảng biểu, và vẫn giúp người đọc tra cứu nhanh khi lật giở tài liệu in hay cuộn qua tệp PDF trên màn hình.',
      },
      {
        question: 'Số trang đã đóng dấu có phải là văn bản có thể chọn không?',
        answer:
          'Có, số trang được vẽ dưới dạng văn bản vector sắc nét, vì vậy người đọc có thể chọn và sao chép chúng như văn bản PDF thông thường. Điều này hữu ích khi bạn cần trích dẫn số trang trong email hay ghi chú, và cũng giúp số trang hiển thị rõ ràng khi phóng to hay in ở độ phân giải cao.',
      },
      {
        question: 'Tôi có thể đánh số trang cho PDF có mật khẩu không?',
        answer:
          'Không, chỉ tệp PDF chưa mã hóa mới mở được bằng công cụ trình duyệt này, vì vậy bạn hãy gỡ mật khẩu trước. Bạn có thể mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, đánh số bản đó, rồi đặt lại mật khẩu bằng phần mềm PDF nếu vẫn cần bảo vệ tài liệu sau khi hoàn thành.',
      },
      {
        question: 'Tôi có thể thêm tiền tố như "Section 2 – Page 3" không?',
        answer:
          'Không, công cụ chỉ cung cấp ba định dạng số, vì vậy tiền tố tùy chỉnh hay nhãn chương không thể thêm vào. Nếu bạn cần phân biệt các chương bằng tiền tố, bạn có thể thêm tiêu đề chương vào đầu mỗi chương trong phần mềm soạn thảo trước khi xuất PDF, rồi dùng công cụ này để đánh số trang đơn giản.',
      },
      {
        question: 'Việc thêm số trang có thay đổi nội dung PDF của tôi không?',
        answer:
          'Không, chỉ nhãn số trang được thêm vào; văn bản, hình ảnh và bố cục hiện có của bạn vẫn giữ nguyên như trước. Công cụ không chỉnh sửa hay di chuyển bất kỳ nội dung nào khác, vì vậy bạn có thể yên tâm đánh số cho hợp đồng, luận văn hay báo cáo mà không sợ làm hỏng định dạng gốc.',
      },
    ],
  },
  'pdf-metadata-editor': {
    instructions: [
      {
        title: 'Tải một tệp PDF lên',
        description:
          'Chọn bất kỳ tệp PDF chưa mã hóa nào; các trường metadata hiện có và kích thước trang sẽ tự điền.',
      },
      {
        title: 'Xem lại metadata hiện tại',
        description:
          'Đọc các trường Title, Author, Subject, Keywords, Creator và Producer, cùng với số trang và kích thước trang chính xác, để biết những gì đang được lưu.',
      },
      {
        title: 'Chỉnh sửa hoặc dọn sạch các trường',
        description:
          'Cập nhật Title, Author, Subject và Keywords cho rõ ràng, hoặc nhấn Clear Editable Fields để bảo vệ riêng tư.',
      },
      {
        title: 'Xóa các trường có thể chỉnh sửa để bảo vệ riêng tư',
        description:
          'Dùng Clear Editable Fields trước khi chia sẻ tệp công khai để xóa tên tác giả và phiên bản phần mềm chỉ bằng một cú nhấp.',
      },
      {
        title: 'Lưu và tải xuống',
        description:
          'Nhấn Save Metadata & Download PDF để xuất một bản sao đã gắn thẻ mới.',
      },
      {
        title: 'Mẹo: kiểm tra tệp đã lưu',
        description:
          'Mở lại tệp PDF đã tải xuống trong công cụ này để xác nhận Title mới và trường Author đã xóa, vì thay đổi chỉ áp dụng cho bản sao đã lưu.',
      },
    ],
    examples: [
      {
        title: 'Ẩn danh tệp PDF xuất từ Word hoặc Illustrator',
        input: 'Author: "John Doe" · Creator: "Microsoft® Word 2021"',
        output: 'Nhấn Clear Editable Fields → Lưu tệp PDF sạch với Author và Creator trống',
        explanation: 'Xóa tên nhân viên và phiên bản phần mềm trước khi đăng tải công khai lên web.',
      },
      {
        title: 'Sửa tiêu đề sai hiển thị trong tab trình duyệt',
        input: 'Title: "Untitled-2" · Tệp: report.pdf',
        output: 'PDF với Title: "Q3 Sales Report" — giờ tab trình duyệt hiển thị đúng tên',
        explanation: 'Trình duyệt hiển thị Title nội bộ của PDF thay vì tên tệp .pdf, vì vậy việc sửa Title sẽ sửa nhãn tab.',
      },
    ],
    benefits: [
      'Hiển thị tên tác giả ẩn và chuỗi phần mềm mà trình duyệt cho thấy trong tab và thuộc tính',
      'Nút Clear Editable Fields bằng một cú nhấp sẽ xóa cả 6 thẻ Info dictionary chuẩn',
      'Cập nhật gọn gàng Title, Subject và Keywords phân tách bằng dấu phẩy, hữu ích cho SEO',
      'Hiển thị kích thước điểm PDF chính xác (width × height pt) cùng với số trang',
    ],
    useCases: [
      'Xóa tên nhân viên và phiên bản công cụ nội bộ trước khi đăng PDF công khai',
      'Sửa tên tệp khó hiểu như "Untitled-2" hiển thị trong tab PDF của Chrome và Safari qua Title',
      'Thêm thẻ Subject và Keyword có thể tìm kiếm cho whitepaper có thể tải xuống',
      'Kiểm tra cục bộ các tệp PDF do nhà cung cấp hay ứng viên gửi tới',
    ],
    faqs: [
      {
        question: 'Vì sao tab trình duyệt hiển thị tiêu đề sai khi mở PDF?',
        answer:
          'Trình duyệt hiển thị thuộc tính Document Title nội bộ của PDF thay vì tên tệp .pdf nếu có thẻ Title được nhúng sẵn. Việc chỉnh sửa Title tại đây sẽ sửa cách trình duyệt đặt tên cho tab, giúp bạn và người nhận dễ nhận ra tài liệu ngay khi mở nhiều tab cùng lúc trong quá trình làm việc.',
      },
      {
        question: 'Việc xóa các trường metadata có ảnh hưởng tới nội dung trang hiển thị không?',
        answer:
          'Không, việc xóa hay cập nhật Title, Author, Subject, Keywords, Creator và Producer chỉ cập nhật từ điển Info của PDF mà không thay đổi các trang hiển thị. Văn bản, hình ảnh và bố cục của bạn vẫn nguyên vẹn, vì vậy bạn có thể yên tâm dọn sạch thông tin ẩn trước khi chia sẻ mà không sợ làm hỏng tài liệu.',
      },
      {
        question: 'Các chỉnh sửa có được mã hóa hay ghi lại ở đâu không?',
        answer:
          'Không bao giờ, cả việc đọc và ghi metadata đều thực thi hoàn toàn trong bộ nhớ máy khách qua pdf-lib. Không có dữ liệu nào được gửi lên máy chủ, không có nhật ký nào được lưu lại, vì vậy thông tin về tác giả, phần mềm hay tiêu đề tài liệu của bạn không bao giờ rời khỏi thiết bị của bạn.',
      },
      {
        question: 'Công cụ PDF Metadata Editor có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể xem và chỉnh sửa metadata của bao nhiêu tài liệu tùy thích, từ báo cáo công việc tới whitepaper hay hồ sơ ứng tuyển, mà không tốn phí và không cần cài đặt thêm phần mềm nào.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên máy chủ khi tôi chỉnh sửa metadata không?',
        answer:
          'Không, việc đọc và ghi metadata diễn ra hoàn toàn trong trình duyệt của bạn, vì vậy tệp của bạn không bao giờ được tải lên hay ghi lại. Điều này giúp bạn yên tâm xử lý tài liệu nội bộ, hợp đồng hay hồ sơ nhạy cảm mà không cần tin tưởng một dịch vụ bên thứ ba với những thông tin ẩn trong tệp.',
      },
      {
        question: 'Tôi có thể chỉnh sửa những trường metadata nào trong PDF?',
        answer:
          'Bạn có thể xem và chỉnh sửa Title, Author, Subject, Keywords, Creator và Producer — sáu thẻ chuẩn trong từ điển Info của PDF. Sáu trường này bao quát hầu hết thông tin ẩn thường gặp trong tài liệu, từ tên tác giả tới phần mềm đã tạo ra tệp, và bạn có thể sửa từng trường riêng lẻ hay xóa tất cả cùng lúc.',
      },
      {
        question: 'Tôi có thể chỉ xóa tên tác giả khỏi PDF không?',
        answer:
          'Có, bạn chỉ cần xóa riêng trường Author rồi lưu lại, các thẻ Title, Subject và thẻ khác vẫn giữ nguyên. Cách này hữu ích khi bạn muốn ẩn danh người soạn thảo nhưng vẫn giữ tiêu đề và từ khóa hữu ích cho việc tìm kiếm, ví dụ khi chia sẻ whitepaper hay tài liệu mẫu mà không tiết lộ danh tính nhân viên.',
      },
      {
        question: '"Clear Editable Fields" làm gì?',
        answer:
          'Nó xóa cả sáu thẻ Info dictionary chuẩn cùng lúc, loại bỏ tên tác giả, chuỗi phần mềm và tiêu đề trước khi bạn chia sẻ tệp. Đây là cách nhanh nhất để dọn sạch một tài liệu trước khi đăng công khai, thay vì phải xóa từng trường một cách thủ công và có nguy cơ bỏ sót một trường chứa thông tin nhạy cảm.',
      },
      {
        question: 'Việc chỉnh sửa Title có thể thay đổi cách PDF xuất hiện trong kết quả tìm kiếm không?',
        answer:
          'Việc chỉnh sửa Title sẽ thay đổi nhãn mà trình duyệt hiển thị trong tab PDF, nhưng không đảm bảo bất kỳ thứ hạng tìm kiếm hay đoạn trích cụ thể nào. Công cụ tìm kiếm xem xét nhiều yếu tố khác nhau khi xếp hạng tài liệu, vì vậy bạn nên coi Title rõ ràng là cách giúp người đọc nhận biết tài liệu, chứ không phải một mẹo đảm bảo lên top.',
      },
      {
        question: 'Việc xóa metadata có xóa dấu trang hay liên kết không?',
        answer:
          'Không, việc xóa chỉ cập nhật từ điển Info, vì vậy dấu trang, liên kết và nội dung trang hiển thị đều giữ nguyên. Bạn có thể dọn sạch tên tác giả và phiên bản phần mềm mà không sợ làm hỏng mục lục điều hướng hay các liên kết nội bộ trong báo cáo dài, và tệp kết quả vẫn hoạt động đúng như bản gốc.',
      },
      {
        question: 'Tôi có thể xem metadata PDF mà không thay đổi gì không?',
        answer:
          'Có, các trường sẽ tự điền ngay khi bạn tải tệp lên, và không có gì bị thay đổi trừ khi bạn nhấn Save Metadata & Download PDF. Chế độ chỉ xem này rất tiện để kiểm tra nhanh một tệp do người khác gửi tới, xem ai là tác giả hay phần mềm nào đã tạo ra nó, trước khi quyết định có cần dọn sạch hay không.',
      },
      {
        question: 'Trường Creator và Producer trong PDF là gì?',
        answer:
          'Creator là tên ứng dụng đã tạo ra tài liệu, ví dụ Microsoft Word, còn Producer là tên phần mềm đã chuyển đổi nó thành PDF. Hai trường này thường tiết lộ quy trình làm việc nội bộ của bạn, vì vậy việc xóa chúng trước khi chia sẻ công khai giúp tránh lộ phiên bản phần mềm hay công cụ mà tổ chức của bạn đang dùng.',
      },
      {
        question: 'Tôi có thể thêm từ khóa vào PDF để dễ tìm kiếm hơn không?',
        answer:
          'Có, bạn hãy nhập Keywords phân tách bằng dấu phẩy trong trình chỉnh sửa metadata, và chúng sẽ được lưu trong PDF cho các công cụ tìm kiếm đọc được. Từ khóa rõ ràng như tên sản phẩm, chủ đề hay tên dự án giúp tài liệu của bạn dễ được tìm thấy trong hệ thống quản lý tài liệu nội bộ hay thư viện tài liệu trực tuyến.',
      },
      {
        question: 'Dung lượng tệp có thay đổi sau khi chỉnh sửa metadata PDF không?',
        answer:
          'Chỉ thay đổi một lượng rất nhỏ, vì metadata chỉ là một khối văn bản nhỏ, nên việc chỉnh sửa hay xóa nó hầu như không ảnh hưởng tới tổng dung lượng tệp. Bạn có thể dọn sạch hay cập nhật thẻ cho cả tài liệu dài nhiều trang mà không lo tệp phình to hay gây khó khăn khi gửi qua email.',
      },
      {
        question: 'Tôi có thể chỉnh sửa metadata trên PDF đã quét không?',
        answer:
          'Có, metadata nằm trong tiêu đề tài liệu và độc lập với nội dung trang, vì vậy PDF đã quét hoạt động giống hệt PDF dạng văn bản. Bạn có thể thêm tiêu đề, tác giả hay từ khóa cho hồ sơ quét, biên lai hay hợp đồng đã ký, giúp việc tìm kiếm và quản lý tài liệu lưu trữ trở nên dễ dàng hơn nhiều.',
      },
      {
        question: 'Tôi có thể chỉnh sửa metadata XMP bằng công cụ này không?',
        answer:
          'Không, công cụ này chỉ chỉnh sửa sáu thẻ Info dictionary chuẩn; các gói metadata XMP mở rộng không được sửa đổi. Nếu tài liệu của bạn chứa metadata XMP từ phần mềm xuất bản chuyên nghiệp, bạn cần dùng phần mềm đầy đủ như Adobe Acrobat để chỉnh sửa lớp metadata mở rộng đó một cách chính xác và an toàn.',
      },
      {
        question: 'Tôi có thể chỉnh sửa metadata trên PDF đã mã hóa không?',
        answer:
          'Không, chỉ tệp PDF chưa mã hóa mới mở được bằng công cụ trình duyệt này, vì vậy bạn hãy gỡ mật khẩu trước. Bạn có thể mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, chỉnh sửa metadata, rồi đặt lại mật khẩu bằng phần mềm PDF nếu vẫn cần bảo vệ tài liệu sau khi hoàn thành.',
      },
      {
        question: 'Công cụ PDF Metadata Editor có hiển thị khổ trang không?',
        answer:
          'Có, công cụ hiển thị kích thước trang chính xác theo đơn vị point (chiều rộng × chiều cao) cùng với số trang cho mỗi tệp đã tải. Thông tin này hữu ích khi bạn cần kiểm tra xem tài liệu có đúng khổ A4, Letter hay khổ tùy chỉnh không, trước khi in ấn hay gửi đi để đảm bảo định dạng chính xác.',
      },
      {
        question: 'Việc xóa metadata có loại bỏ mọi thông tin cá nhân khỏi PDF không?',
        answer:
          'Việc xóa chỉ loại bỏ sáu thẻ Info, nhưng thông tin cá nhân được gõ trực tiếp trên các trang, ví dụ tên trong phần nội dung, vẫn còn lại. Nếu bạn cần ẩn danh hoàn toàn, hãy kiểm tra cả nội dung trang, đầu trang, chân trang và chữ ký, rồi biên tập lại những chi tiết đó trước khi chia sẻ tài liệu ra ngoài.',
      },
      {
        question: 'Tôi có cần tải tệp xuống để áp dụng thay đổi metadata không?',
        answer:
          'Có, việc nhấn Save Metadata & Download PDF sẽ tạo một tệp mới với các thay đổi của bạn, trong khi tệp gốc vẫn giữ nguyên. Bạn nên mở lại tệp đã tải xuống trong công cụ để xác nhận Title mới và trường Author đã xóa, rồi mới gửi bản đã dọn sạch cho người nhận hay đăng tải lên web.',
      },
    ],
  },
  'pdf-text-extractor': {
    instructions: [
      {
        title: 'Chọn một tài liệu PDF',
        description:
          'Chọn bất kỳ tệp PDF chưa mã hóa nào; PDF.js sẽ quét luồng văn bản nhúng của mọi trang ngay trên máy.',
      },
      {
        title: 'Xem lại văn bản đã trích xuất',
        description:
          'Đọc qua kết quả và kiểm tra số trang, số từ và dung lượng byte UTF-8 được báo cáo để xác nhận quá trình trích xuất trông đầy đủ.',
      },
      {
        title: 'Bật tắt dấu trang',
        description:
          'Giữ tiêu đề trang bật để trích dẫn có cấu trúc, hoặc bỏ chọn để có văn xuôi liên tục.',
      },
      {
        title: 'Kiểm tra các trang đã quét',
        description:
          'Nếu công cụ báo 0 ký tự, tệp PDF có thể là tệp chỉ có hình ảnh đã quét, không có lớp văn bản để trích xuất.',
      },
      {
        title: 'Sao chép hoặc xuất tệp .txt',
        description:
          'Sao chép văn bản đã trích xuất vào trình soạn thảo của bạn hoặc tải xuống bản ghi .txt UTF-8 sạch.',
      },
      {
        title: 'Mẹo: sửa văn bản bị lỗi hoặc thiếu',
        description:
          'Nếu ký tự trông sai, tệp PDF nguồn có thể dùng phông tùy chỉnh không có ánh xạ Unicode đúng; hãy thử tài liệu gốc hoặc một bản xuất mới.',
      },
    ],
    examples: [
      {
        title: 'Trích xuất nội dung đọc được từ whitepaper nhiều trang',
        input: 'whitepaper.pdf (8 trang, có lớp văn bản nhúng)',
        output: 'Văn bản thuần có dấu phân cách --- Page 1 ---, số từ và bản tải .txt',
        explanation: 'Lấy các mục văn bản trong PDF một cách gọn gàng mà không gặp lỗi tô sáng và sao chép thủ công.',
      },
      {
        title: 'Kiểm tra số từ của bài luận PDF',
        input: 'essay.pdf (3 trang, có lớp văn bản)',
        output: 'Văn bản đã trích xuất + Số từ: 1,240 từ',
        explanation: 'Báo cáo số từ cho biết bài luận đã đạt độ dài yêu cầu hay chưa.',
      },
    ],
    benefits: [
      'Cảnh báo rõ ràng nếu PDF là bản quét hay chỉ có hình ảnh (0 lớp văn bản, không chạy OCR ngoại tuyến)',
      'Giữ ngắt trang sạch qua dấu --- Page N --- có thể bật tắt',
      'Báo cáo số trang đã trích xuất, số từ và dung lượng byte UTF-8',
      'Bước đầu tiên lý tưởng trước khi gửi nội dung tới Word Counter hay Find & Replace',
    ],
    useCases: [
      'Lấy văn bản thuần sạch từ whitepaper, giáo trình hay tài liệu PDF',
      'Kiểm tra số từ của bài luận PDF đã định dạng bằng Word Counter của chúng tôi',
      'Xác minh xem tệp PDF lưu trữ có lớp văn bản tìm kiếm được hay chỉ là bản quét phẳng',
      'Xuất chương trình họp PDF thành ghi chú Markdown văn bản thuần',
    ],
    faqs: [
      {
        question: 'Vì sao PDF đã quét trích xuất ra 0 ký tự?',
        answer:
          'PDF từ máy quét thường lưu các trang hoàn toàn dưới dạng hình ảnh bitmap phẳng mà không có lớp văn bản OCR nhúng. Công cụ trình duyệt này đọc trực tiếp các luồng văn bản PDF hiện có và nói rõ rằng OCR ngoại tuyến không được bao gồm, vì vậy bạn biết ngay cần chạy OCR bằng phần mềm khác trước khi trích xuất.',
      },
      {
        question: 'Vì sao bảng nhiều cột phức tạp đôi khi bị ngắt dòng?',
        answer:
          'Tệp PDF lưu trữ văn bản theo vị trí tọa độ X và Y thay vì bảng HTML có ngữ nghĩa, vì vậy PDF.js xuất các mục văn bản theo thứ tự luồng kèm gợi ý ngắt dòng. Kết quả là văn bản trong bảng nhiều cột có thể xuất hiện không đúng thứ tự đọc, và bạn cần sắp xếp lại thủ công trong trình soạn thảo sau khi trích xuất.',
      },
      {
        question: 'Tệp PDF của tôi có được tải lên để trích xuất văn bản không?',
        answer:
          'Không, PDF.js phân tích và trích xuất các luồng văn bản hoàn toàn trong tab trình duyệt của bạn. Tài liệu của bạn không bao giờ rời khỏi thiết bị, vì vậy bạn có thể yên tâm trích xuất hợp đồng, báo cáo nội bộ hay tài liệu nghiên cứu nhạy cảm mà không cần gửi chúng qua máy chủ của bất kỳ dịch vụ bên thứ ba nào.',
      },
      {
        question: 'Công cụ PDF Text Extractor có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể trích xuất văn bản từ bao nhiêu tài liệu tùy thích, từ whitepaper dài tới chương trình họp hay giáo trình, mà không tốn phí và không cần cài đặt thêm phần mềm nào trên máy.',
      },
      {
        question: 'Tôi có thể xuất văn bản đã trích xuất sang những định dạng tệp nào?',
        answer:
          'Bạn có thể sao chép văn bản thuần vào clipboard hoặc tải xuống dưới dạng bản ghi .txt UTF-8 sạch. Tệp .txt mở được trong mọi trình soạn thảo văn bản, từ Notepad tới Word hay Google Docs, và bạn có thể định dạng lại, đếm từ hay dịch nội dung sau khi đã có văn bản thuần trong tay.',
      },
      {
        question: 'Tôi có thể chỉ trích xuất văn bản từ một trang của PDF không?',
        answer:
          'Việc trích xuất bao quát toàn bộ tài liệu, nhưng các dấu --- Page N --- tùy chọn giúp bạn dễ dàng tìm và sao chép chỉ phần mình cần. Bạn có thể bật dấu trang, cuộn tới trang mong muốn, sao chép đúng đoạn đó, rồi dán vào ghi chú hay tài liệu của mình mà không cần mang theo toàn bộ văn bản dài.',
      },
      {
        question: 'Vì sao một số văn bản bị thiếu trong kết quả trích xuất?',
        answer:
          'Văn bản lưu dưới dạng hình ảnh, hay được vẽ bằng phông tùy chỉnh thiếu bản đồ Unicode, sẽ không có luồng văn bản đọc được để PDF.js trích xuất. Trong trường hợp này, bạn hãy thử bản PDF gốc được xuất lại từ phần mềm soạn thảo, hoặc chạy OCR trên bản quét để tạo lớp văn bản trước khi trích xuất lại.',
      },
      {
        question: 'Công cụ PDF Text Extractor có OCR cho trang quét không?',
        answer:
          'Không, công cụ chỉ đọc lớp văn bản nhúng hiện có và không chạy OCR, vì vậy các trang quét chỉ có hình ảnh sẽ không cho ra văn bản. Nếu tài liệu của bạn là bản quét, bạn cần dùng phần mềm OCR như Adobe Acrobat hay một công cụ OCR trực tuyến để tạo lớp văn bản, rồi mới trích xuất bằng công cụ này.',
      },
      {
        question: 'Tôi có thể trích xuất văn bản từ PDF bằng ngôn ngữ khác không?',
        answer:
          'Có, văn bản Unicode nhúng được trích xuất nguyên vẹn, vì vậy tài liệu không phải tiếng Anh vẫn hoạt động tốt miễn là PDF lưu trữ lớp văn bản đúng. Dù đó là tiếng Việt, tiếng Pháp hay tiếng Nhật, bạn vẫn nhận được văn bản thuần có thể sao chép, miễn là phông chữ trong PDF có ánh xạ Unicode chính xác.',
      },
      {
        question: 'Việc trích xuất có giữ chữ đậm hay tiêu đề không?',
        answer:
          'Không, kết quả chỉ là văn bản thuần, vì vậy chữ đậm, chữ nghiêng, tiêu đề và các định dạng khác không được giữ lại. Bạn sẽ nhận được nội dung chữ sạch để đếm từ, tìm kiếm hay dán vào tài liệu khác, rồi định dạng lại tiêu đề và đoạn văn trong trình soạn thảo của mình theo ý muốn.',
      },
      {
        question: 'Tôi có thể trích xuất văn bản từ PDF lớn tới mức nào?',
        answer:
          'Không có giới hạn kích thước nào được nêu, và quá trình trích xuất chạy ngay trên máy; tài liệu rất lớn đơn giản là mất thêm một chút thời gian để quét. Với whitepaper hàng trăm trang, bạn hãy kiên nhẫn chờ quá trình hoàn thành, và trình duyệt sẽ hiển thị đầy đủ văn bản cùng số từ và dung lượng byte khi xong.',
      },
      {
        question: 'Tôi có thể sao chép văn bản đã trích xuất mà không tải tệp xuống không?',
        answer:
          'Có, bạn hãy dùng nút sao chép bằng một cú nhấp để dán văn bản thẳng vào trình soạn thảo, ứng dụng ghi chú hay tài liệu của mình. Cách này nhanh hơn việc tải tệp .txt xuống rồi mở lại, đặc biệt khi bạn chỉ cần một đoạn trích ngắn để trích dẫn hay đưa vào email và ghi chú cuộc họp.',
      },
      {
        question: 'Dấu "--- Page N ---" trong kết quả là gì?',
        answer:
          'Đó là các tiêu đề tùy chọn đánh dấu nơi mỗi trang bắt đầu, giúp bạn trích dẫn trang một cách chính xác; hãy tắt chúng để có văn xuôi liên tục. Khi bạn cần tham chiếu tới một trang cụ thể trong bài luận hay báo cáo, dấu trang giúp bạn biết đoạn văn đó nằm ở trang nào trong tài liệu gốc.',
      },
      {
        question: 'Công cụ PDF Text Extractor có hiển thị số từ không?',
        answer:
          'Có, công cụ báo cáo số trang đã trích xuất, số từ và dung lượng byte UTF-8 cùng với văn bản. Thông tin này rất hữu ích khi bạn cần kiểm tra bài luận có đạt độ dài yêu cầu không, hay khi bạn muốn ước lượng khối lượng công việc dịch thuật và biên tập cho một tài liệu dài.',
      },
      {
        question: 'Tôi có thể trích xuất văn bản từ PDF có mật khẩu không?',
        answer:
          'Không, chỉ tệp PDF chưa mã hóa mới mở được bằng công cụ trình duyệt này, vì vậy bạn hãy gỡ mật khẩu trước. Bạn có thể mở khóa tệp trong trình đọc PDF của mình, lưu lại bản không có mật khẩu, rồi tải bản đó lên để trích xuất văn bản một cách bình thường và an toàn.',
      },
      {
        question: 'Siêu liên kết có được trích xuất từ PDF không?',
        answer:
          'Văn bản liên kết hiển thị sẽ được trích xuất khi nó tồn tại dưới dạng văn bản, nhưng bản thân các liên kết không được xuất thành URL có thể nhấp. Bạn vẫn đọc được tên đường dẫn hay tiêu đề liên kết trong văn bản thuần, nhưng cần mở tệp PDF gốc để nhấp vào liên kết và truy cập trang web đích.',
      },
      {
        question: 'Tôi có thể dùng văn bản đã trích xuất trong Word hay Google Docs không?',
        answer:
          'Có, bạn hãy dán văn bản đã sao chép trực tiếp, hoặc mở tệp .txt đã tải xuống rồi sao chép nội dung của nó vào bất kỳ trình xử lý văn bản nào. Văn bản thuần sẽ giữ nguyên nội dung chữ, và bạn có thể định dạng lại tiêu đề, đoạn văn và danh sách trong Word hay Google Docs theo ý mình.',
      },
      {
        question: 'Vì sao một số ký tự trông bị lỗi trong văn bản đã trích xuất?',
        answer:
          'Một số tệp PDF nhúng phông tùy chỉnh không có ánh xạ Unicode đúng, vì vậy PDF.js không thể khớp các ký tự đồ họa với ký tự đúng. Trong trường hợp này, bạn hãy thử tài liệu gốc hoặc một bản sao mới xuất từ phần mềm soạn thảo, vì bản xuất mới thường có ánh xạ phông chính xác hơn và cho kết quả trích xuất sạch.',
      },
      {
        question: 'Việc trích xuất văn bản có thay đổi tệp PDF gốc của tôi không?',
        answer:
          'Không, việc trích xuất chỉ đọc; tệp PDF gốc của bạn không bao giờ bị sửa đổi, vì vậy bạn có thể trích xuất văn bản từ bất kỳ bản sao nào mình mở một cách an toàn. Bạn có thể thử nhiều lần, bật tắt dấu trang hay sao chép từng phần mà không sợ làm hỏng tài liệu gốc quan trọng của mình.',
      },
      {
        question: 'Công cụ PDF Text Extractor có lấy văn bản từ biểu mẫu và chú thích không?',
        answer:
          'Công cụ trích xuất lớp văn bản nhúng chính của mỗi trang; giá trị biểu mẫu đã điền và ghi chú chú thích có thể không xuất hiện nếu chúng được lưu riêng. Nếu bạn cần lấy dữ liệu từ biểu mẫu đã điền, hãy thử xuất biểu mẫu sang định dạng khác trong phần mềm PDF, hoặc sao chép thủ công các trường quan trọng từ tệp gốc.',
      },
    ],
  },
};
