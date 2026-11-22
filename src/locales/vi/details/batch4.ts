// Detail content for VI tools — batch 4.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
    instructions: [
      {
        title: 'Chọn định dạng nội dung',
        description:
          'Chọn Website URL, Văn bản thuần túy, Mạng Wi-Fi, Liên kết email hoặc Số điện thoại ở phía trên.',
      },
      {
        title: 'Nhập nội dung của bạn',
        description:
          'Gõ hoặc dán URL, văn bản hay thông tin liên hệ của bạn. Với Wi-Fi, hãy nhập tên mạng (SSID), loại bảo mật và mật khẩu.',
      },
      {
        title: 'Tùy chỉnh giao diện và mức sửa lỗi',
        description:
          'Điều chỉnh kích thước điểm ảnh, lề vùng yên tĩnh, màu HEX của nền trước và nền sau, cùng mức sửa lỗi (từ L đến H).',
      },
      {
        title: 'Xem trước và kiểm tra mã',
        description:
          'Xem bản xem trước trực tiếp và quét thử bằng camera điện thoại trước khi tải xuống để chắc chắn mã mở đúng địa chỉ.',
      },
      {
        title: 'Tải xuống PNG hoặc SVG vector',
        description:
          'Tải PNG sắc nét cho đồ họa mạng xã hội, hoặc lấy tệp SVG có thể co giãn cho tài liệu in ấn.',
      },
      {
        title: 'Khắc phục mã không quét được',
        description:
          'Tăng độ tương phản của nền trước, phóng to mã, nâng mức sửa lỗi hoặc mở rộng lề vùng yên tĩnh, rồi kiểm tra lại.',
      },
    ],
    examples: [
      {
        title: 'Nhãn dán QR cho Wi-Fi khách',
        input: 'SSID: GuestWiFi · Bảo mật: WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation: 'Camera trên iOS và Android tự nhận diện gói dữ liệu WIFI QR chuẩn, nên khách kết nối mạng mà không cần gõ mật khẩu.',
      },
      {
        title: 'Mã QR trang web cho danh thiếp',
        input: 'URL: https://utilityflow.online · Kích thước: 512 px · Sửa lỗi: M',
        output: 'Mã QR SVG sẵn sàng để in',
        explanation: 'SVG luôn sắc nét ở mọi kích thước, nên cùng một mã quét rõ cả trên danh thiếp nhỏ lẫn áp phích lớn.',
      },
    ],
    benefits: [
      'Mã QR tĩnh không bao giờ hết hạn và không đi qua bất kỳ liên kết chuyển hướng theo dõi nào của bên thứ ba',
      'Tạo được cả SVG vector không mất chất lượng bên cạnh ảnh PNG độ phân giải cao',
      'Hỗ trợ định dạng QR Wi-Fi WPA, WEP và mạng mở một cách gọn gàng',
      'URL và mật khẩu Wi-Fi của bạn chỉ nằm trong trình duyệt, không hề được tải lên đâu cả',
    ],
    useCases: [
      'Nối tờ rơi, áp phích hay danh thiếp in với trang đích có gắn thẻ UTM',
      'Làm biển QR Wi-Fi cho khách tại văn phòng, studio hay sự kiện',
      'Gắn liên kết portfolio hoặc liên hệ vào slide thuyết trình và bao bì',
      'Xuất mã QR SVG sắc nét cho công việc in ấn',
    ],
    faqs: [
      {
        question: 'Mã QR tạo ở đây có hết hạn sau một thời gian không?',
        answer:
          'Không. Đây là mã QR tĩnh — dữ liệu được mã hóa trực tiếp vào trong mẫu đen trắng, nên mã hoạt động mãi mãi mà không cần máy chủ hay giới hạn lượt quét. Bạn có thể in mã lên danh thiếp, bao bì hay áp phích và yên tâm rằng nó vẫn quét được sau nhiều năm, miễn là bản in không bị hư hỏng nặng.',
      },
      {
        question: 'Nên chọn mức sửa lỗi nào?',
        answer:
          'Mức M (15%) là lựa chọn cân bằng cho màn hình sạch hoặc tờ rơi, vừa gọn vừa đáng tin cậy. Với nhãn dán ngoài trời hay bề mặt in thô ráp, hãy chọn Q (25%) hoặc H (30%) để mã chịu được trầy xước, bụi bẩn và một phần bị che khuất mà vẫn quét được bình thường.',
      },
      {
        question: 'Vì sao nên giữ độ tương phản của nền trước thật cao?',
        answer:
          'Camera điện thoại dựa vào độ chênh sáng mạnh giữa các ô tối và nền sáng để đọc mẫu mã. Hãy dùng màu nền trước tối trên nền sáng, đồng thời chừa lề yên tĩnh ít nhất 4 ô để máy quét dễ nhận ra ranh giới của mã và không nhầm với hình ảnh xung quanh.',
      },
      {
        question: 'Dùng Trình tạo mã QR có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí — không cần đăng ký tài khoản, không có watermark, và không giới hạn số lượng mã QR bạn tạo hay tải xuống. Bạn có thể tạo bao nhiêu mã tùy thích cho mọi chiến dịch in ấn, sự kiện hay sản phẩm của mình.',
      },
      {
        question: 'Tạo mã QR có cần tài khoản không?',
        answer:
          'Không cần. Mọi thứ chạy ngay trong trình duyệt của bạn, nên bạn có thể tạo và tải mã QR xuống ngay lập tức mà không phải điền form đăng ký hay xác nhận email. Chỉ cần nhập nội dung, xem trước và tải về là xong.',
      },
      {
        question: 'Mã QR có thể chứa những loại nội dung nào?',
        answer:
          'Bạn có thể mã hóa địa chỉ trang web, văn bản thuần túy, thông tin mạng Wi-Fi, liên kết email và số điện thoại — khi quét, điện thoại sẽ mở thẳng trình quay số với số đó. Nhờ vậy một mã nhỏ có thể thay cho cả một đoạn hướng dẫn dài.',
      },
      {
        question: 'Tôi có thể tạo mã QR cho mật khẩu Wi-Fi không?',
        answer:
          'Có. Hãy chọn định dạng Mạng Wi-Fi, nhập tên mạng (SSID), loại bảo mật như WPA và mật khẩu — khách chỉ cần quét mã là kết nối được mà không phải gõ từng ký tự. Cách này đặc biệt tiện cho quán cà phê, văn phòng và sự kiện đông người.',
      },
      {
        question: 'Tải xuống PNG và SVG khác nhau thế nào?',
        answer:
          'PNG là ảnh raster có độ phân giải cố định, phù hợp với màn hình và bài đăng mạng xã hội. SVG là tệp vector có thể phóng to mọi kích thước mà không mất độ sắc nét, nên lý tưởng cho in ấn như danh thiếp, áp phích và bao bì sản phẩm.',
      },
      {
        question: 'Mã QR in nhỏ có còn quét được không?',
        answer:
          'Điều đó phụ thuộc vào lượng dữ liệu chứa trong mã và chất lượng bản in. URL ngắn thường quét tốt ngay cả khi in nhỏ, còn mã chứa nhiều dữ liệu sẽ dày đặc hơn và cần in lớn, rõ nét, kèm lề yên tĩnh đủ rộng thì máy quét mới đọc được.',
      },
      {
        question: 'Mức sửa lỗi có tác dụng gì?',
        answer:
          'Sửa lỗi bổ sung thông tin dự phòng vào mã, để mã vẫn quét được dù một phần bị trầy, bẩn hay che khuất. Mức càng cao thì mã càng chịu được hư hỏng, nhưng mẫu mã cũng trở nên dày đặc hơn và cần in lớn hơn để đọc chính xác.',
      },
      {
        question: 'Tôi có thể đổi màu mã QR không?',
        answer:
          'Có, bạn có thể đặt màu HEX cho nền trước và nền sau theo ý thích. Chỉ cần nhớ giữ các ô tối trên nền sáng để camera điện thoại vẫn đọc được mẫu, và tránh những cặp màu có độ tương phản thấp như vàng nhạt trên nền trắng.',
      },
      {
        question: 'Vùng yên tĩnh là gì và vì sao nó quan trọng?',
        answer:
          'Vùng yên tĩnh là khoảng lề trống quanh mã, giúp máy quét nhận ra ranh giới của mã. Hãy chừa lề rộng ít nhất 4 ô và đừng đặt chữ hay logo vào trong đó, vì bất kỳ chi tiết nào lấn vào lề cũng có thể khiến máy quét nhầm và không đọc được mã.',
      },
      {
        question: 'Mã QR tạo ở đây có theo dõi lượt quét không?',
        answer:
          'Không. Đây là mã tĩnh, phía sau không có máy chủ chuyển hướng nào, nên không ai biết được mã đã được quét khi nào hay ở đâu. Nếu bạn muốn đo lường lượt quét, hãy gắn thẻ UTM vào URL trước khi tạo mã.',
      },
      {
        question: 'Tôi có thể dùng mã QR này trên danh thiếp và tờ rơi không?',
        answer:
          'Có. Hãy tải bản SVG để in sắc nét trên danh thiếp, áp phích và bao bì, còn bản PNG thì dùng cho trang web, slide và đồ họa mạng xã hội. Một mã duy nhất có thể dùng cho cả bản in lẫn bản số mà không cần tạo lại.',
      },
      {
        question: 'Vì sao điện thoại của tôi không quét được mã QR?',
        answer:
          'Nguyên nhân thường gặp là độ tương phản thấp, mã in quá nhỏ, bị lóa sáng hoặc bị hư hỏng. Hãy thử dùng màu nền trước đậm hơn, in mã lớn hơn, nâng mức sửa lỗi và mở rộng vùng yên tĩnh, rồi quét thử lại trong điều kiện ánh sáng tốt.',
      },
      {
        question: 'Mã QR đã tải xuống có hoạt động ngoại tuyến không?',
        answer:
          'Có. Dữ liệu được mã hóa trực tiếp trong mẫu mã, nên mã đã tải xuống vẫn quét và hoạt động bình thường mà không cần kết nối với trang web này. Chỉ có đích đến như trang web hay mạng Wi-Fi mới cần kết nối riêng của nó.',
      },
      {
        question: 'Tôi có thể nhập số điện thoại để quét là mở trình quay số không?',
        answer:
          'Có. Hãy chọn định dạng Số điện thoại và mã sẽ tạo một liên kết tel:, nên khi quét bằng điện thoại, trình quay số sẽ mở ra với số đã điền sẵn. Người quét chỉ cần bấm gọi, rất tiện cho danh thiếp, biển hiệu và quảng cáo.',
      },
      {
        question: 'Tôi có thể nhập địa chỉ email để quét là mở thư mới không?',
        answer:
          'Có. Định dạng Liên kết email tạo một liên kết mailto:, nên khi quét, ứng dụng email sẽ mở ra với địa chỉ của bạn đã điền sẵn ở ô người nhận. Cách này giúp khách hàng liên hệ với bạn chỉ bằng một lần quét duy nhất.',
      },
      {
        question: 'Mật khẩu Wi-Fi của tôi có an toàn khi tạo mã QR ở đây không?',
        answer:
          'Có. Mã được tạo hoàn toàn trong trình duyệt của bạn và mọi thứ bạn gõ vào đều không được tải lên hay lưu trữ trên bất kỳ máy chủ nào. Bạn có thể tạo mã cho mạng riêng tư mà không lo mật khẩu bị lộ ra ngoài.',
      },
      {
        question: 'Nên tải PNG ở kích thước nào để in?',
        answer:
          'Với công việc in ấn, hãy chọn kích thước điểm ảnh lớn nhất có sẵn, và với bất kỳ thứ gì lớn hơn tờ rơi, SVG là lựa chọn tốt hơn vì đầu ra vector luôn sắc nét ở mọi kích thước. In thử một bản nhỏ trước để kiểm tra khả năng quét trước khi in hàng loạt.',
      },
    ],
  },
  'utm-link-builder': {
    instructions: [
      {
        title: 'Nhập URL đích của bạn',
        description:
          'Dán URL của trang đích, hoặc chọn một mẫu nhanh theo kênh để điền sẵn các thẻ chuẩn.',
      },
      {
        title: 'Chọn mẫu nhanh theo kênh (tùy chọn)',
        description:
          'Chọn Instagram, email, YouTube hay một mẫu khác để tự điền giá trị nguồn và phương tiện chuẩn.',
      },
      {
        title: 'Điền các tham số UTM',
        description:
          'Nhập utm_source, utm_medium, utm_campaign, và thêm utm_content hoặc utm_term nếu cần.',
      },
      {
        title: 'Thêm utm_term và utm_content (tùy chọn)',
        description:
          'Dùng utm_term cho từ khóa tìm kiếm trả phí và utm_content để phân biệt hai liên kết trong cùng một chiến dịch, ví dụ nút ở tiểu sử với liên kết trong story.',
      },
      {
        title: 'Sao chép và kiểm tra bảng phân tích',
        description:
          'Xem bảng tham số bên dưới trước khi sao chép để tránh lỗi gõ hay lẫn lộn chữ hoa chữ thường.',
      },
      {
        title: 'Kiểm tra liên kết trước khi đăng',
        description:
          'Mở URL đã sao chép trong trình duyệt để chắc chắn nó dẫn đến đúng trang, đồng thời kiểm tra xem việc chuẩn hóa chữ thường có làm thay đổi phần phân biệt chữ hoa thường của đích đến không.',
      },
    ],
    examples: [
      {
        title: 'Liên kết chiến dịch cho tiểu sử Instagram',
        input: 'URL: https://utilityflow.online/tools/ · Nguồn: instagram · Phương tiện: social · Chiến dịch: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation: 'Công cụ dùng bộ phân tích URL của trình duyệt nên các tham số có sẵn hay neo # đều được giữ nguyên.',
      },
      {
        title: 'Theo dõi hai nút trong cùng một bản tin',
        input: 'URL: https://utilityflow.online/tools/ · Nguồn: newsletter · Phương tiện: email · Chiến dịch: weekly_tips · Nội dung: header_button',
        output: 'https://utilityflow.online/tools/?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_tips&utm_content=header_button',
        explanation: 'Tham số utm_content cho thấy nút nào trong cùng một email nhận được nhiều lượt nhấp hơn.',
      },
    ],
    benefits: [
      'Mẫu nhanh theo kênh chỉ với một cú nhấp giúp tránh đặt tên không nhất quán như IG với instagram',
      'Tùy chọn chuẩn hóa chữ thường và gạch dưới giúp báo cáo GA4 không bị tách ra',
      'Giữ nguyên đúng cách các tham số truy vấn có sẵn và neo #hash',
      'Hiển thị bảng xem lại tham số đã giải mã trước khi bạn đăng',
    ],
    useCases: [
      'Theo dõi lượt nhấp từ tiểu sử Instagram, LinkedIn, X và TikTok',
      'Đo từng nút kêu gọi hành động trong bản tin email hằng tuần',
      'Gắn thẻ liên kết tài trợ trong phần mô tả video YouTube',
      'Tạo liên kết UTM gọn gàng để đưa thẳng vào Trình tạo mã QR',
    ],
    faqs: [
      {
        question: 'Vì sao chuẩn hóa chữ thường lại quan trọng với tham số UTM?',
        answer:
          'Các nền tảng phân tích như Google Analytics 4 xem utm_source=Instagram và utm_source=instagram là hai hàng riêng biệt, khiến báo cáo chiến dịch bị tách ra. Giữ mọi giá trị ở dạng chữ thường sẽ giúp toàn bộ lưu lượng từ cùng một nguồn gộp lại thành một hàng duy nhất, dễ đọc và so sánh hơn.',
      },
      {
        question: 'Tôi có nên gắn thẻ UTM cho liên kết điều hướng nội bộ trong trang web không?',
        answer:
          'Không nên. Tham số UTM chỉ dành cho chiến dịch từ bên ngoài trỏ vào; gắn chúng cho liên kết nội bộ sẽ ghi đè thông tin giới thiệu gốc giữa chừng phiên truy cập. Với điều hướng trong trang, hãy dùng liên kết thường và để công cụ phân tích tự ghi nhận hành trình của người dùng.',
      },
      {
        question: 'Tôi có thể biến liên kết UTM đã tạo thành mã QR không?',
        answer:
          'Có. Hãy sao chép URL UTM hoàn chỉnh rồi dán thẳng vào Trình tạo mã QR của chúng tôi, và mỗi lượt quét từ chiến dịch in ấn sẽ mang theo thẻ chiến dịch khi đến trang của bạn. Nhờ vậy bạn đo được cả lưu lượng ngoại tuyến lẫn trực tuyến trong cùng một báo cáo.',
      },
      {
        question: 'Dùng Trình tạo liên kết UTM có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí — không cần đăng ký, và mọi liên kết đều được tạo ngay trong trình duyệt của bạn mà không tải URL của bạn lên bất cứ đâu. Bạn có thể tạo bao nhiêu liên kết UTM tùy thích cho mọi chiến dịch.',
      },
      {
        question: 'Tham số UTM là gì?',
        answer:
          'Tham số UTM là một thẻ ngắn gắn vào cuối URL, ví dụ utm_source=instagram, để cho công cụ phân tích biết khách truy cập đến từ đâu. Khi ai đó nhấp vào liên kết có gắn thẻ, nền tảng phân tích sẽ đọc các thẻ này và ghi lại nguồn, kênh và chiến dịch của lượt truy cập đó.',
      },
      {
        question: 'utm_source có nghĩa là gì?',
        answer:
          'Nó xác định nguồn lưu lượng, ví dụ instagram, google hay newsletter, để bạn thấy mỗi khách truy cập đến từ nơi nào. Đây là tham số cơ bản nhất và nên có trong mọi liên kết chiến dịch bạn tạo ra.',
      },
      {
        question: 'utm_medium có nghĩa là gì?',
        answer:
          'Nó mô tả kênh tiếp thị, ví dụ social, email, cpc hay referral, để bạn so sánh hiệu quả của các kênh trong cùng một chiến dịch. Cùng một nguồn có thể đến qua nhiều kênh khác nhau, và utm_medium giúp bạn phân biệt chúng rõ ràng.',
      },
      {
        question: 'utm_campaign có nghĩa là gì?',
        answer:
          'Nó đặt tên cho một chiến dịch cụ thể, ví dụ spring_launch hay black_friday, để mọi liên kết của cùng một chương trình khuyến mãi được nhóm lại với nhau trong báo cáo. Nhờ đó bạn thấy được toàn bộ hiệu quả của chiến dịch thay vì từng liên kết rời rạc.',
      },
      {
        question: 'utm_content dùng để làm gì?',
        answer:
          'Nó phân biệt hai liên kết trong cùng một chiến dịch, ví dụ nút ở tiểu sử với liên kết trong story, để bạn biết vị trí nào hoạt động tốt hơn. Khi cùng một email hay trang có nhiều nút dẫn đến một đích, utm_content là cách duy nhất để đo từng nút riêng biệt.',
      },
      {
        question: 'utm_term dùng để làm gì?',
        answer:
          'Nó xác định từ khóa tìm kiếm trả phí đã kích hoạt lượt nhấp vào quảng cáo, và chủ yếu hữu ích cho Google Ads hay các chiến dịch tìm kiếm khác. Với lưu lượng tự nhiên hay mạng xã hội, bạn thường không cần tham số này.',
      },
      {
        question: 'Tôi có cần điền đủ cả năm tham số UTM không?',
        answer:
          'Không. Nguồn, phương tiện và chiến dịch là mức tối thiểu nên có; utm_term và utm_content là tùy chọn, chỉ cần khi bạn muốn chi tiết sâu hơn. Một liên kết với ba tham số cơ bản đã đủ để báo cáo chiến dịch rõ ràng và dễ đọc.',
      },
      {
        question: 'Tôi có thể dùng liên kết UTM trong tiểu sử Instagram không?',
        answer:
          'Có. Liên kết UTM là một trong những cách phổ biến nhất để đo lưu lượng từ tiểu sử, và chúng hoạt động tương tự trong trang link-in-bio, liên kết story và chú thích bài đăng. Chỉ cần nhớ rằng tiểu sử Instagram chỉ cho một liên kết duy nhất.',
      },
      {
        question: 'Tham số UTM có làm hỏng chuỗi truy vấn hay neo # có sẵn không?',
        answer:
          'Không. Công cụ giữ lại mọi tham số đã có trong URL của bạn và đặt phần neo # ở cuối, để liên kết vẫn dẫn đến đúng mục cần đến. Bạn có thể yên tâm gắn thẻ cho cả những URL vốn đã có tham số riêng.',
      },
      {
        question: 'Tôi có nên dùng dấu cách trong giá trị UTM không?',
        answer:
          'Không nên. Hãy dùng gạch dưới hoặc gạch ngang, ví dụ spring_launch, vì dấu cách sẽ bị mã hóa thành phần trăm và khiến báo cáo khó đọc. Một quy ước đặt tên nhất quán cũng giúp cả đội của bạn dùng chung một chuẩn.',
      },
      {
        question: 'Tôi có thể theo dõi lượt quét mã QR bằng liên kết UTM không?',
        answer:
          'Có. Hãy tạo URL UTM trước, rồi biến nó thành mã QR bằng Trình tạo mã QR của chúng tôi — mỗi lượt quét đến được trang của bạn sẽ mang theo thẻ chiến dịch. Nhờ vậy chiến dịch in ấn cũng đo lường được như chiến dịch số.',
      },
      {
        question: 'Liên kết UTM có ảnh hưởng đến SEO không?',
        answer:
          'Không, công cụ tìm kiếm thường bỏ qua tham số UTM khi xếp hạng, nhưng bạn nên giữ thẻ canonical trên trang đích để URL được lập chỉ mục luôn gọn gàng. Như vậy các phiên bản URL có gắn thẻ sẽ không bị xem là nội dung trùng lặp.',
      },
      {
        question: 'Làm sao xem kết quả UTM trong Google Analytics?',
        answer:
          'Trong Google Analytics 4, hãy mở báo cáo Thu nạp lưu lượng và xem nguồn phiên, phương tiện và chiến dịch — các trường này được điền từ giá trị UTM của bạn. Từ đó bạn so sánh được chiến dịch nào mang lại nhiều phiên và chuyển đổi nhất.',
      },
      {
        question: 'utm_source và utm_medium khác nhau thế nào?',
        answer:
          'Nguồn trả lời câu hỏi lượt nhấp đến từ đâu, ví dụ instagram, còn phương tiện trả lời nó đến bằng cách nào, ví dụ social hay email. Một thẻ hoàn chỉnh cần cả hai, vì chỉ có nguồn thôi chưa đủ để biết kênh nào thực sự hiệu quả.',
      },
      {
        question: 'Tôi có thể lưu hay tái sử dụng mẫu liên kết UTM không?',
        answer:
          'Có. Các mẫu nhanh theo kênh sẽ điền sẵn giá trị nguồn và phương tiện chuẩn, và bạn có thể sao chép một liên kết hoàn chỉnh rồi dùng lại cùng mẫu đặt tên cho các chiến dịch sau. Hãy lưu các mẫu hay dùng vào ghi chú của đội để mọi người thống nhất.',
      },
      {
        question: 'Vì sao báo cáo UTM của tôi hiển thị cùng một chiến dịch hai lần?',
        answer:
          'Chữ hoa chữ thường lẫn lộn hay cách viết không nhất quán, ví dụ Instagram với instagram, sẽ tạo ra các hàng riêng biệt. Hãy giữ một quy ước đặt tên chữ thường duy nhất cho mọi liên kết và kiểm tra lại các liên kết cũ đã đăng.',
      },
    ],
  },
  'social-character-limit-checker': {
    instructions: [
      {
        title: 'Viết hoặc dán bản nháp mạng xã hội của bạn',
        description:
          'Gõ chú thích, tiểu sử hay mô tả video vào ô soạn thảo.',
      },
      {
        title: 'Xem các thẻ đo theo nền tảng',
        description:
          'Xem thanh mức sử dụng màu xanh, vàng và đỏ cho X, Instagram, LinkedIn, TikTok, Threads, Bluesky và YouTube.',
      },
      {
        title: 'Kiểm tra bản xem trước nếp gấp "Xem thêm"',
        description:
          'Chọn nền tảng đích trong menu thả xuống bên dưới để xem đoạn mở đầu của bạn bị cắt ở đâu trong bảng tin.',
      },
      {
        title: 'Đưa đoạn mở đầu lên trên nếp gấp',
        description:
          'Đưa những từ quan trọng nhất vào 125 ký tự đầu tiên cho Instagram hoặc 210 ký tự cho LinkedIn để người đọc thấy chúng trước nút "...more".',
      },
      {
        title: 'Điều chỉnh hashtag, lượt nhắc và liên kết',
        description:
          'Bỏ bớt hoặc rút ngắn hashtag, @nhắc đến và URL ở những nền tảng đã vượt giới hạn, và nhớ rằng X tính mỗi liên kết là 23 ký tự.',
      },
      {
        title: 'Kiểm tra lại và sao chép văn bản cuối cùng',
        description:
          'Sau mỗi lần sửa, hãy chắc chắn mọi thẻ đo đều xanh rồi mới sao chép văn bản. Nếu nền tảng nào vẫn đỏ, hãy cắt từ thừa hoặc chuyển chi tiết còn lại vào trả lời hay bình luận.',
      },
    ],
    examples: [
      {
        title: 'Thử bài đăng có liên kết trên X và LinkedIn',
        input: 'Đoạn mở đầu 140 ký tự + https://example.com/very-long-campaign-url',
        output: 'X tính URL đó là 23 ký tự; Instagram và LinkedIn tính đủ độ dài URL.',
        explanation: 'Điều này phản ánh đúng thói quen bọc liên kết t.co của X.',
      },
      {
        title: 'Kiểm tra giới hạn 150 ký tự của tiểu sử Instagram',
        input: 'Tiểu sử ba dòng, tổng cộng 148 ký tự',
        output: 'Thẻ đo Instagram xanh — tiểu sử nằm trong giới hạn; thẻ đo X cũng xanh',
        explanation: 'Thẻ đo của mọi nền tảng cập nhật cùng lúc, nên một bản nháp có thể kiểm tra cho nhiều nơi.',
      },
    ],
    benefits: [
      'Đếm ký tự bằng Array.from nên đếm chính xác cả emoji gồm nhiều điểm mã',
      'Tự động áp dụng cách chuẩn hóa độ dài URL 23 ký tự của X',
      'Hiển thị cả giới hạn tối đa cứng lẫn ngưỡng cắt ngắn trong bảng tin ("Xem thêm")',
      'Đếm hashtag, @nhắc đến và URL theo thời gian thực',
    ],
    useCases: [
      'Giữ 125–210 ký tự đầu tiên đủ hấp dẫn để người đọc dừng lại trước nếp gấp của bảng tin',
      'Nhét thông báo của nhà sáng tạo vào giới hạn 280 ký tự của X và 300 ký tự của Bluesky',
      'Giữ tiểu sử LinkedIn và Instagram trong giới hạn nghiêm ngặt 150–160 ký tự',
      'Kiểm tra khả năng hiển thị tiêu đề YouTube 70 ký tự trên điện thoại trước khi đăng',
    ],
    faqs: [
      {
        question: 'Vì sao X (Twitter) tính URL dài là 23 ký tự?',
        answer:
          'X bọc các liên kết ra ngoài bằng trình rút gọn t.co của mình, nên mỗi URL http/https chỉ chiếm 23 ký tự trong ngân sách 280 ký tự của bài đăng, bất kể URL gốc dài bao nhiêu. Nhờ vậy bạn có thể dán liên kết dài mà không lo nó nuốt hết chỗ viết của mình.',
      },
      {
        question: 'Độ dài "Nếp gấp" hiển thị trên thẻ Instagram và LinkedIn là gì?',
        answer:
          'Bảng tin sẽ thu gọn chú thích dài sau khoảng 125 ký tự trên Instagram và 210 ký tự trên LinkedIn, ẩn phần còn lại sau nút "...more". Đặt đoạn mở đầu quan trọng nhất trước nếp gấp sẽ khiến nhiều người đọc tiếp hơn, vì họ thấy ngay giá trị của bài viết.',
      },
      {
        question: 'Công cụ này tính emoji là 1 ký tự hay 2 ký tự?',
        answer:
          'Nhờ đếm theo điểm mã Unicode, một emoji đơn thông thường được tính là 1 ký tự thay vì bị phình ra do cặp thay thế UTF-16. Tuy nhiên emoji phức tạp ghép từ nhiều ký hiệu có thể được tính nhiều hơn trên một số nền tảng.',
      },
      {
        question: 'Dùng Trình kiểm tra giới hạn ký tự mạng xã hội có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí — không cần đăng ký, và văn bản nháp của bạn được đếm ngay trong trình duyệt mà không tải lên đâu cả. Bạn có thể kiểm tra bao nhiêu bản nháp tùy thích trước khi đăng.',
      },
      {
        question: 'Giới hạn ký tự cho bài đăng trên X (Twitter) là bao nhiêu?',
        answer:
          'Bài đăng tiêu chuẩn trên X cho phép tối đa 280 ký tự, và mỗi URL được tính là 23 ký tự nhờ bọc liên kết t.co. Nếu bạn dùng gói trả phí, giới hạn có thể cao hơn, nhưng bài đăng tiêu chuẩn vẫn là 280 ký tự.',
      },
      {
        question: 'Giới hạn ký tự cho chú thích Instagram là bao nhiêu?',
        answer:
          'Chú thích Instagram cho phép tối đa 2.200 ký tự, nhưng trong bảng tin chỉ khoảng 125 ký tự đầu tiên hiển thị trước nếp gấp "...more". Vì vậy hãy đặt thông điệp quan trọng nhất lên đầu, còn chi tiết bổ sung để sau nếp gấp.',
      },
      {
        question: 'Giới hạn ký tự cho tiểu sử Instagram là bao nhiêu?',
        answer:
          'Tiểu sử Instagram chỉ cho phép 150 ký tự, nên mỗi chữ cái, dấu cách, emoji và dấu ngắt dòng đều tính vào ngân sách chật hẹp đó. Hãy viết thật gọn, ưu tiên điều người xem cần biết nhất về bạn.',
      },
      {
        question: 'Giới hạn ký tự cho bài đăng LinkedIn là bao nhiêu?',
        answer:
          'Bài đăng LinkedIn cho phép tối đa 3.000 ký tự, trong khi bảng tin chỉ hiển thị khoảng 210 ký tự đầu tiên trước nút "xem thêm". Một đoạn mở đầu mạnh sẽ quyết định người đọc có bấm mở toàn bộ bài hay lướt qua.',
      },
      {
        question: 'Giới hạn ký tự cho chú thích TikTok là bao nhiêu?',
        answer:
          'Chú thích video TikTok cho phép tối đa 4.000 ký tự, dù chú thích ngắn gọn và súc tích thường hiệu quả hơn vì người xem lướt rất nhanh. Hãy dùng chú thích để bổ sung ngữ cảnh, còn video mới là thứ giữ chân họ.',
      },
      {
        question: 'Giới hạn ký tự của Threads là bao nhiêu?',
        answer:
          'Bài đăng Threads cho phép tối đa 500 ký tự, dài hơn bài đăng X tiêu chuẩn nhưng vẫn đủ ngắn để thưởng cho cách viết gọn gàng. Với 500 ký tự, bạn có thêm chỗ cho một ý phụ hay một câu hỏi mở.',
      },
      {
        question: 'Giới hạn ký tự của Bluesky là bao nhiêu?',
        answer:
          'Bài đăng Bluesky cho phép tối đa 300 ký tự, nhiều hơn một chút so với giới hạn 280 ký tự của bài đăng X tiêu chuẩn. Hai mươi ký tự thêm đó đủ cho một hashtag hay một cụm từ kêu gọi hành động ngắn.',
      },
      {
        question: 'Giới hạn ký tự cho tiêu đề YouTube là bao nhiêu?',
        answer:
          'Tiêu đề YouTube cho phép tối đa 100 ký tự, nhưng kết quả tìm kiếm trên điện thoại thường chỉ hiển thị khoảng 70 ký tự đầu tiên, vì vậy hãy đặt từ khóa quan trọng nhất lên phía trước tiêu đề của bạn.',
      },
      {
        question: 'Giới hạn ký tự cho mô tả YouTube là bao nhiêu?',
        answer:
          'Mô tả video YouTube cho phép tối đa 5.000 ký tự, và người xem chỉ thấy một hai dòng đầu tiên trước khi bấm "hiển thị thêm". Hãy đặt tóm tắt, liên kết quan trọng và lời kêu gọi hành động ngay ở đầu mô tả.',
      },
      {
        question: 'Nếp gấp trong bảng tin Instagram hoạt động thế nào?',
        answer:
          'Instagram thu gọn chú thích sau khoảng 125 ký tự trong bảng tin, nên người đọc phải bấm "...more" mới xem được phần còn lại. Hãy đặt đoạn mở đầu và thông điệp chính lên trước, còn phần kể chuyện dài để phía sau nếp gấp.',
      },
      {
        question: 'Nếp gấp "xem thêm" của LinkedIn hoạt động thế nào?',
        answer:
          'LinkedIn hiển thị khoảng 210 ký tự đầu tiên của bài đăng trong bảng tin, rồi ẩn phần còn lại sau nút "xem thêm", vì vậy hãy mở đầu bằng một dòng khiến người ta muốn bấm vào. Một câu hỏi hay một con số bất ngờ thường làm tốt việc này.',
      },
      {
        question: 'Hashtag có tính vào giới hạn ký tự không?',
        answer:
          'Có. Mọi ký tự trong hashtag, kể cả ký hiệu # đứng đầu, đều tính vào giới hạn của bài đăng trên mọi nền tảng. Vì vậy một bài đăng đã dài mà thêm nhiều hashtag có thể vượt giới hạn lúc bạn không để ý.',
      },
      {
        question: 'Dấu ngắt dòng có tính là ký tự không?',
        answer:
          'Có. Mỗi dòng mới trong bản nháp được tính là một ký tự, nên các dòng trống thừa sẽ ăn vào những giới hạn chật hẹp như tiểu sử Instagram 150 ký tự. Hãy đếm cả dòng trống khi bạn căn chỉnh tiểu sử.',
      },
      {
        question: 'Emoji có được tính là một ký tự trên mọi nền tảng không?',
        answer:
          'Công cụ này đếm emoji đơn tiêu chuẩn là một ký tự nhờ đếm theo điểm mã, nhưng emoji phức tạp ghép từ nhiều ký hiệu có thể được tính nhiều hơn trên một số nền tảng. Để an toàn, hãy chừa một ít chỗ trống khi bài đăng có nhiều emoji.',
      },
      {
        question: 'URL có được tính giống nhau trên mọi nền tảng không?',
        answer:
          'Không. X tính mọi URL là 23 ký tự nhờ bọc t.co, trong khi Instagram, LinkedIn và hầu hết nền tảng khác tính đủ độ dài của liên kết. Vì vậy một bài đăng vừa vặn trên X có thể bị vượt giới hạn khi bạn dán nguyên sang nền tảng khác.',
      },
      {
        question: 'Tôi có thể kiểm tra nhiều nền tảng cùng lúc không?',
        answer:
          'Có. Chỉ cần gõ hoặc dán bản nháp một lần, mọi thẻ đo của nền tảng sẽ cập nhật cùng lúc, để bạn điều chỉnh một bài đăng cho X, Instagram, LinkedIn và nhiều nơi khác mà không phải đếm lại từng nơi.',
      },
    ],
  },
  'unicode-fancy-text-formatter': {
    instructions: [
      {
        title: 'Nhập tiêu đề ngắn hoặc nhãn tiểu sử',
        description:
          'Gõ một cụm từ ngắn, tiêu đề mục hay dòng giới thiệu vào ô Văn bản cần tạo kiểu.',
      },
      {
        title: 'Xem 10 kiểu Unicode',
        description:
          'So sánh các bản xem trước như Sans-Serif Bold, Italic, Monospace, Script, Double-Struck, Small Caps và Fullwidth.',
      },
      {
        title: 'So sánh các bản xem trước cạnh nhau',
        description:
          'Xem qua cả mười thẻ kiểu để tìm kiểu đọc rõ nhất ở cỡ nhỏ, vì một số kiểu Script và Double-Struck khó đọc hơn.',
      },
      {
        title: 'Sao chép kiểu bạn thích',
        description:
          'Bấm Sao chép trên thẻ kiểu bạn thích để đưa văn bản Unicode đã tạo kiểu vào clipboard.',
      },
      {
        title: 'Dán và kiểm tra hiển thị',
        description:
          'Dán văn bản vào tiểu sử, chú thích hay bài đăng của bạn, rồi xem trên một thiết bị khác để chắc chắn không ký tự nào hiển thị thành ô trống.',
      },
      {
        title: 'Sao chép một cách có trách nhiệm',
        description:
          'Bấm Sao chép trên kiểu bạn thích và giữ phần nội dung quan trọng ở dạng văn bản thuần túy để trình đọc màn hình vẫn đọc được.',
      },
    ],
    examples: [
      {
        title: 'Định dạng dòng phân cách cho tiểu sử LinkedIn hay X',
        input: 'New Toolkit 2025',
        output: '𝗡𝗲𝘄 𝗧𝗼𝗼𝗹𝗸𝗶𝘁 𝟮𝟬𝟮𝟱 (Sans-Serif Bold)',
        explanation: 'Kiểu này dùng các điểm mã Unicode toán học in đậm chính thức U+1D5D4–U+1D7EC.',
      },
      {
        title: 'Tiêu đề Small Caps trong tiểu sử Instagram',
        input: 'Daily Tips',
        output: 'ᴅᴀɪʟʏ ᴛɪᴘꜱ (Small Caps)',
        explanation: 'Kiểu Small Caps biến chữ thường thành dạng thu nhỏ của chữ hoa, giúp tiêu đề trông gọn gàng và nhẹ nhàng.',
      },
    ],
    benefits: [
      'Hiển thị ký tự Unicode thật thay vì hình ảnh hay HTML riêng của nền tảng',
      'Có thông báo rõ ràng về khả năng tiếp cận liên quan đến trình đọc màn hình và hành vi tìm kiếm',
      'Xử lý đúng chữ số, dấu câu và ký hiệu bảng đen đặc biệt như ℂ, ℕ, ℝ',
      'Sao chép chỉ với một cú nhấp cho mỗi thẻ kiểu',
    ],
    useCases: [
      'Làm nổi bật tiêu đề mục trong tiểu sử Instagram hay TikTok',
      'Định dạng tên kỹ thuật hay ngày tháng bằng Unicode Monospace',
      'Thêm nhãn Small Caps nhẹ nhàng trong bản tin văn bản thuần túy hay ghi chú',
      'Tạo kiểu cho thông báo ngắn ở nơi Markdown in đậm gốc không được hỗ trợ',
    ],
    faqs: [
      {
        question: 'Vì sao công cụ có cảnh báo về khả năng tiếp cận?',
        answer:
          'Ký hiệu toán học Unicode vốn được tạo ra cho phương trình chứ không phải văn xuôi, nên trình đọc màn hình thường đọc chúng thành những cái tên dài như "mathematical sans-serif bold capital A", còn thanh tìm kiếm mạng xã hội có thể không lập chỉ mục được chúng. Vì vậy chỉ nên dùng kiểu này cho tiêu đề ngắn.',
      },
      {
        question: 'Đây có phải là tệp phông chữ thật không?',
        answer:
          'Không. Đây là các ký tự Unicode chuẩn được ánh xạ qua nhiều khối ký hiệu khác nhau, và chính vì thế chúng vẫn giữ nguyên khi bạn dán vào ô văn bản thuần túy trên mạng xã hội. Phông chữ chỉ thay đổi cách chữ thường hiển thị, còn đây là những ký tự hoàn toàn khác.',
      },
      {
        question: 'Vì sao chữ cái có dấu không thuộc ASCII vẫn giữ nguyên?',
        answer:
          'Khối Chữ số và chữ cái toán học của Unicode chỉ định nghĩa chữ Latin không dấu từ A đến Z và chữ số từ 0 đến 9, nên các ký tự có dấu được giữ nguyên để bảo toàn khả năng đọc. Điều này có nghĩa là văn bản tiếng Việt có dấu sẽ chỉ đổi một phần.',
      },
      {
        question: 'Dùng Trình định dạng văn bản Unicode có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí — không cần đăng ký, và văn bản của bạn được chuyển đổi ngay trong trình duyệt mà không tải lên đâu cả. Bạn có thể tạo bao nhiêu kiểu chữ tùy thích cho tiểu sử và bài đăng của mình.',
      },
      {
        question: 'Tôi có thể tạo những kiểu Unicode nào với công cụ này?',
        answer:
          'Bạn có thể tạo các kiểu Sans-Serif Bold, Italic, Monospace, Script, Double-Struck, Fraktur, Small Caps và Fullwidth, với mười thẻ kiểu để so sánh ngay trong nháy mắt. Mỗi thẻ đều có nút sao chép riêng để bạn lấy đúng kiểu mình thích.',
      },
      {
        question: 'Văn bản kiểu cách có hoạt động trên Instagram không?',
        answer:
          'Có. Văn bản Unicode đã tạo kiểu dán trực tiếp vào tiểu sử, chú thích và bình luận Instagram vì nó được tạo thành từ ký tự thật, không phải hình ảnh hay phông chữ. Tuy nhiên hãy kiểm tra trên điện thoại khác để chắc chắn mọi ký tự hiển thị đúng.',
      },
      {
        question: 'Văn bản kiểu cách có hoạt động trên LinkedIn và X không?',
        answer:
          'Có. Cả LinkedIn và X đều chấp nhận ký tự Unicode trong tiểu sử và bài đăng, nên tiêu đề in đậm hay small caps sẽ dán vào như văn bản thường. Chỉ cần nhớ giữ từ khóa quan trọng ở dạng chữ thường để người khác tìm thấy bạn.',
      },
      {
        question: 'Tôi có thể dùng văn bản kiểu cách trong tiểu sử TikTok không?',
        answer:
          'Có. Tiểu sử TikTok chấp nhận ký tự Unicode, nên bạn có thể tạo kiểu cho một tên hay dòng giới thiệu ngắn, dù nên giữ phần còn lại của tiểu sử ở dạng văn bản thuần túy để mọi người đọc dễ dàng và tìm kiếm được bạn.',
      },
      {
        question: 'Vì sao một số ký tự trông như ô trống trên vài thiết bị?',
        answer:
          'Điện thoại hay máy tính cũ có thể không có phông chữ bao phủ mọi khối ký hiệu Unicode, nên ký tự thiếu sẽ hiển thị thành ô trống. Hãy kiểm tra văn bản đã tạo kiểu trên một thiết bị khác trước khi đăng để tránh làm tiểu sử của bạn trông bị lỗi.',
      },
      {
        question: 'Tôi có thể viết toàn bộ tiểu sử bằng văn bản kiểu cách không?',
        answer:
          'Không nên. Trình đọc màn hình gặp khó khăn với văn bản đã tạo kiểu và công cụ tìm kiếm có thể không khớp với nó, nên chỉ dùng văn bản kiểu cách cho tiêu đề ngắn và giữ phần còn lại ở dạng thuần túy. Tiểu sử vẫn cần dễ đọc với tất cả mọi người.',
      },
      {
        question: 'Văn bản kiểu cách có ảnh hưởng đến tìm kiếm trên mạng xã hội không?',
        answer:
          'Có, nó có thể ảnh hưởng. Tìm kiếm một từ thường có thể không khớp với cùng từ đó viết bằng ký tự in đậm toán học, nên tránh tạo kiểu cho những từ khóa mà người khác dùng để tìm bạn hay nội dung của bạn.',
      },
      {
        question: 'Trình đọc màn hình có đọc được văn bản Unicode kiểu cách không?',
        answer:
          'Thường là đọc kém. Trình đọc màn hình có thể đọc to từng chữ cái đã tạo kiểu kèm tên Unicode đầy đủ của nó, khiến những đoạn dài trở nên khó hiểu với người khiếm thị. Hãy dùng kiểu cách một cách tiết chế và có ý thức.',
      },
      {
        question: 'Tôi có thể tạo chữ đậm trong WhatsApp bằng công cụ này không?',
        answer:
          'Có, chữ Unicode in đậm dán được vào WhatsApp, nhưng ứng dụng cũng có định dạng gốc riêng, nên bọc văn bản trong dấu sao như *bold* thường là lựa chọn đơn giản hơn. Định dạng gốc cũng hiển thị đúng trên mọi thiết bị mà không lo thiếu ký tự.',
      },
      {
        question: 'Chữ số và dấu câu có thay đổi theo không?',
        answer:
          'Chữ số chuyển đổi trong hầu hết các kiểu, ví dụ in đậm và monospace, còn hầu hết dấu câu giữ nguyên vì các khối ký hiệu Unicode không định nghĩa phiên bản tạo kiểu cho chúng. Nhờ vậy câu của bạn vẫn giữ được dấu chấm, dấu phẩy như ban đầu.',
      },
      {
        question: 'Tôi có thể chuyển văn bản đã tạo kiểu trở lại thành văn bản thường không?',
        answer:
          'Công cụ chuyển văn bản thuần túy thành văn bản đã tạo kiểu, nên để lấy lại văn bản thường, bạn hãy gõ lại cụm từ gốc hoặc dán từ nơi bạn đã sao chép lần đầu. Hãy luôn giữ một bản gốc chưa tạo kiểu trong ghi chú của mình.',
      },
      {
        question: 'Văn bản Unicode kiểu cách có giống phông chữ không?',
        answer:
          'Không. Phông chữ thay đổi cách chữ thường trông như thế nào trên một thiết bị, còn văn bản Unicode kiểu cách dùng những ký tự hoàn toàn khác, và đó là lý do kiểu dáng vẫn tồn tại sau khi sao chép và dán sang nơi khác.',
      },
      {
        question: 'Văn bản kiểu cách có hoạt động trong tiêu đề email không?',
        answer:
          'Nó thường hiển thị trong các ứng dụng email hiện đại, nhưng ký tự đã tạo kiểu có thể kích hoạt bộ lọc spam và gây khó khăn cho trình đọc màn hình, nên văn bản thuần túy là lựa chọn an toàn hơn cho email, đặc biệt là email công việc hay tiếp thị.',
      },
      {
        question: 'Tôi có thể dùng văn bản kiểu cách trong tiêu đề YouTube không?',
        answer:
          'Có, YouTube chấp nhận Unicode trong tiêu đề, nhưng từ đã tạo kiểu có thể không khớp với truy vấn tìm kiếm thường, nên hãy dùng tiết chế và giữ từ khóa có thể tìm kiếm ở dạng văn bản thuần túy để video của bạn vẫn được tìm thấy.',
      },
      {
        question: 'Công cụ này có tải văn bản của tôi lên đâu không?',
        answer:
          'Không. Mọi chuyển đổi diễn ra ngay trong trình duyệt của bạn, nên không có gì bạn gõ vào được gửi đến máy chủ hay lưu trữ. Bạn có thể yên tâm thử nghiệm với tên thương hiệu hay nội dung riêng tư của mình.',
      },
      {
        question: 'Văn bản Fullwidth là gì?',
        answer:
          'Văn bản Fullwidth dùng ký tự Unicode rộng, ví dụ Ｆｕｌｌｗｉｄｔｈ, trong đó mỗi chữ cái chiếm gấp đôi chiều rộng bình thường, tạo cho tiêu đề vẻ thoáng đãng và cách điệu. Kiểu này hợp với tiêu đề ngắn và dòng phân cách hơn là đoạn văn dài.',
      },
    ],
  },
  'bio-line-break-formatter': {
    instructions: [
      {
        title: 'Viết hoặc dán chú thích của bạn',
        description:
          'Soạn nội dung nhiều đoạn hay các dòng tiểu sử, chừa dòng trống ở bất cứ nơi nào bạn muốn có khoảng thở trực quan.',
      },
      {
        title: 'Chọn chiến lược ký tự đệm',
        description:
          'Chọn Ký tự đệm vô hình (U+2800), Ký tự đệm dấu chấm tối giản (.) hay Chỉ dọn dấu cách ở cuối dòng.',
      },
      {
        title: 'Xem lại bản xem trước đã định dạng',
        description:
          'Kiểm tra bản xem trước để chắc chắn mọi dòng trống đều còn nguyên và không còn dấu cách thừa ở cuối dòng.',
      },
      {
        title: 'Kiểm tra số ký tự',
        description:
          'Theo dõi bộ đếm trực tiếp để tiểu sử của bạn vẫn nằm trong giới hạn 150 ký tự của Instagram, vì mỗi ký tự đệm tính là một ký tự.',
      },
      {
        title: 'Sao chép văn bản đã định dạng',
        description:
          'Bấm Sao chép chú thích đã định dạng và kiểm tra xem tiểu sử của bạn có vừa trong giới hạn 150 ký tự của Instagram không.',
      },
      {
        title: 'Dán và kiểm tra trên nền tảng',
        description:
          'Dán vào Instagram, Threads hay TikTok rồi xem trước bài đăng. Nếu dấu ngắt dòng vẫn bị thu gọn, hãy chuyển sang chế độ Ký tự đệm vô hình và sao chép lại.',
      },
    ],
    examples: [
      {
        title: 'Dọn dấu cách thừa trước khi dán vào Instagram',
        input: 'Dòng 1   \n\nDòng 2',
        output: 'Dòng 1\n⠀\nDòng 2',
        explanation: 'Công cụ loại bỏ dấu cách thừa sau "Dòng 1" và chèn ký tự đệm vô hình U+2800 để khoảng trống được giữ lại.',
      },
      {
        title: 'Tách ba dòng trong tiểu sử TikTok',
        input: 'Huấn luyện viên thể hình\nKế hoạch trực tuyến\nNhắn tin để biết thêm',
        output: 'Huấn luyện viên thể hình\n⠀\nKế hoạch trực tuyến\n⠀\nNhắn tin để biết thêm',
        explanation: 'Đặt ký tự đệm trên mỗi dòng trống giúp các dòng tiểu sử không dính vào nhau và trông gọn gàng hơn.',
      },
    ],
    benefits: [
      'Loại bỏ dấu cách thừa vô hình vốn kích hoạt lỗi thu gọn dòng của nền tảng mạng xã hội',
      'Hỗ trợ cả ký tự đệm Unicode vô hình lẫn dấu phân cách bằng chấm gọn gàng',
      'Tự động thu gọn dấu cách đôi vô tình xuất hiện trong câu',
      'Kiểm tra tổng độ dài theo giới hạn 150 ký tự của tiểu sử Instagram theo thời gian thực',
    ],
    useCases: [
      'Định dạng chú thích Instagram và Facebook nhiều đoạn cho dễ đọc',
      'Sắp xếp tiểu sử Instagram hay TikTok thành các dòng gạch đầu dòng xếp chồng',
      'Dọn văn bản dán từ Notion, Google Docs hay ứng dụng Ghi chú trước khi đăng',
      'Tách phần kể chuyện chính của chú thích khỏi lời kêu gọi hành động ở cuối',
    ],
    faqs: [
      {
        question: 'Vì sao dòng trống biến mất khi tôi dán văn bản trực tiếp vào Instagram?',
        answer:
          'Bàn phím điện thoại và trình soạn thảo thường để lại dấu cách thừa ở cuối câu, và bộ phân tích của mạng xã hội xem đó là lỗi định dạng nên thu gọn thành một dấu ngắt dòng duy nhất. Công cụ này dọn sạch dấu cách thừa và chèn ký tự đệm để khoảng trống được giữ nguyên.',
      },
      {
        question: 'Chế độ Ký tự đệm vô hình dùng ký tự nào?',
        answer:
          'Nó chèn U+2800 (Braille Pattern Blank) chỉ trên những dòng vốn trống, để khoảng cách trực quan được giữ lại mà không hiển thị dấu chấm hay dấu gạch ngang khó coi. Trên hầu hết điện thoại hiện đại, ký tự này hiển thị như một khoảng trống.',
      },
      {
        question: 'Công cụ này có sửa văn bản bên trong câu của tôi không?',
        answer:
          'Chỉ dấu cách thừa ở cuối dòng được cắt bỏ, cùng với dấu cách lặp lại tùy chọn bên trong dòng khi bạn bật tính năng đó. Nội dung câu, dấu câu và thứ tự từ của bạn hoàn toàn không thay đổi.',
      },
      {
        question: 'Dùng Trình định dạng ngắt dòng cho tiểu sử có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí — không cần đăng ký, và chú thích của bạn được định dạng ngay trong trình duyệt mà không tải lên đâu cả. Bạn có thể định dạng bao nhiêu chú thích tùy thích.',
      },
      {
        question: 'Vì sao chú thích Instagram mất dấu ngắt dòng?',
        answer:
          'Dấu cách thừa do bàn phím và trình soạn thảo để lại khiến ứng dụng mạng xã hội xem dòng trống là lỗi và thu gọn nó lại. Việc loại bỏ những dấu cách đó và thêm ký tự đệm sẽ giữ khoảng trống giữa các đoạn văn của bạn.',
      },
      {
        question: 'Tôi có thể dùng công cụ này cho chú thích TikTok không?',
        answer:
          'Có. Chú thích TikTok chấp nhận cùng dấu ngắt dòng và ký tự đệm vô hình, nên văn bản đã định dạng sẽ dán vào với khoảng cách đoạn văn còn nguyên. Hãy kiểm tra bản xem trước sau khi dán để chắc chắn mọi thứ hiển thị như ý.',
      },
      {
        question: 'Tôi có thể dùng công cụ này cho bài đăng Threads không?',
        answer:
          'Có. Threads giữ lại dòng trống trong văn bản đã định dạng, nên bạn có thể viết bài đăng dài hơn với dấu ngắt đoạn rõ ràng. Điều này đặc biệt hữu ích cho bài đăng dạng danh sách hay hướng dẫn từng bước.',
      },
      {
        question: 'Tôi có thể dùng công cụ này cho tiểu sử Instagram không?',
        answer:
          'Có. Nó hoạt động tốt với tiểu sử nhiều dòng xếp chồng, nhưng hãy để ý bộ đếm trực tiếp vì tiểu sử Instagram chỉ cho phép 150 ký tự và mỗi ký tự đệm đều tính vào. Nếu vượt giới hạn, hãy rút ngắn câu chữ trước.',
      },
      {
        question: 'Ký tự đệm vô hình và Ký tự đệm dấu chấm khác nhau thế nào?',
        answer:
          'Ký tự đệm vô hình đặt một ký tự Braille trống trên dòng trống nên khoảng trống trông như trống thật, còn Ký tự đệm dấu chấm đặt một dấu chấm nhìn thấy được ở đó, và một số người thích cách này hơn vì nó đáng tin cậy hơn trên thiết bị cũ.',
      },
      {
        question: 'Khi nào nên chọn "Chỉ dọn dấu cách ở cuối dòng"?',
        answer:
          'Hãy chọn khi nền tảng đã giữ nguyên dấu ngắt dòng của bạn và bạn chỉ muốn loại bỏ dấu cách thừa ẩn có thể gây ra hiện tượng thu gọn. Chế độ này ít can thiệp nhất và giữ văn bản của bạn gần với bản gốc nhất.',
      },
      {
        question: 'Ký tự đệm vô hình có tính vào giới hạn ký tự của tiểu sử Instagram không?',
        answer:
          'Có. Mỗi ký tự đệm U+2800 tính là một ký tự, nên tiểu sử có nhiều dòng trống sẽ dùng mất một phần ngân sách 150 ký tự. Hãy đếm cả ký tự đệm khi bạn căn chỉnh tiểu sử nhiều dòng.',
      },
      {
        question: 'Ký tự vô hình có hiển thị thành ký hiệu lạ không?',
        answer:
          'Trên hầu hết điện thoại hiện đại, nó hiển thị như khoảng trống, nhưng phông chữ rất cũ có thể hiển thị nó thành ô trống, vì vậy hãy kiểm tra tiểu sử trên một thiết bị khác sau khi dán để chắc chắn mọi thứ trông ổn.',
      },
      {
        question: 'Tôi có thể định dạng văn bản dán từ Google Docs hay Notion không?',
        answer:
          'Có. Văn bản sao chép từ Docs, Notion hay ứng dụng Ghi chú thường mang theo dấu cách thừa ẩn, và công cụ này sẽ dọn sạch chúng trước khi bạn dán vào ứng dụng mạng xã hội. Nhờ vậy chú thích của bạn giữ được đúng định dạng bạn muốn.',
      },
      {
        question: 'Công cụ có xóa dấu cách bên trong câu của tôi không?',
        answer:
          'Không. Nó chỉ cắt dấu cách thừa ở cuối dòng, và chỉ thu gọn dấu cách lặp lại bên trong dòng khi bạn bật tùy chọn đó. Các dấu cách đơn bình thường giữa các từ luôn được giữ nguyên.',
      },
      {
        question: 'Nên chừa bao nhiêu dòng trống giữa các đoạn văn?',
        answer:
          'Một dòng trống thường là đủ cho chú thích dễ đọc. Hai dòng trở lên có thể trông thưa thớt trong bảng tin và tốn ký tự trong tiểu sử, nên hãy dùng tiết chế và chỉ thêm dòng trống khi thật sự cần nhấn mạnh sự tách biệt.',
      },
      {
        question: 'Tôi có thể dùng công cụ này cho bài đăng Facebook không?',
        answer:
          'Có. Facebook thường tự giữ dấu ngắt dòng, nhưng công cụ vẫn hữu ích để dọn dấu cách thừa trong văn bản dán từ ứng dụng khác. Nhờ vậy bài đăng của bạn trông gọn gàng và chuyên nghiệp hơn.',
      },
      {
        question: 'Công cụ này có tải chú thích của tôi lên đâu không?',
        answer:
          'Không. Mọi định dạng diễn ra ngay trong trình duyệt của bạn, nên văn bản chú thích của bạn không bao giờ được gửi đến máy chủ hay lưu trữ. Bạn có thể yên tâm định dạng cả những bản nháp chưa công bố.',
      },
      {
        question: 'Vì sao chú thích của tôi vẫn trông bị thu gọn sau khi dán?',
        answer:
          'Một số ứng dụng loại bỏ định dạng khi bạn dán. Hãy sao chép lại ở chế độ Ký tự đệm vô hình, dán trực tiếp vào ô chú thích thay vì qua một ứng dụng trung gian, và kiểm tra bản xem trước trước khi đăng bài.',
      },
      {
        question: 'Tôi có thể dùng dấu ngắt dòng trong bài đăng X (Twitter) không?',
        answer:
          'Có. X hỗ trợ dấu ngắt dòng trong bài đăng, và công cụ này cũng hoạt động ở đó, nhưng hãy nhớ mỗi dấu ngắt dòng tính vào giới hạn 280 ký tự. Với bài đăng ngắn, mỗi dòng trống đều đáng giá.',
      },
      {
        question: 'Tôi có thể dùng công cụ này cho mô tả YouTube không?',
        answer:
          'Có. Mô tả YouTube giữ lại dòng trống, nên văn bản đã định dạng vẫn giữ khoảng cách đoạn văn khi người xem mở rộng phần mô tả. Điều này giúp phần mô tả dài trông dễ đọc hơn nhiều.',
      },
    ],
  },
  'youtube-timestamp-generator': {
    instructions: [
      {
        title: 'Dán URL YouTube của bạn (tùy chọn)',
        description:
          'Nhập bất kỳ liên kết youtube.com/watch, youtu.be hay Shorts nào để tự tạo liên kết sâu có thể nhấp cho từng chương.',
      },
      {
        title: 'Thêm và gắn nhãn các chương',
        description:
          'Nhập dấu thời gian dạng MM:SS hoặc HH:MM:SS cùng tiêu đề chương; bấm Sắp xếp theo thời gian bất cứ lúc nào nếu các hàng bị lộn xộn.',
      },
      {
        title: 'Sắp xếp và kiểm tra quy tắc chương',
        description:
          'Sắp xếp danh sách theo thời gian và xem phần kiểm tra thông số: bắt đầu đúng 00:00, ít nhất 3 chương, và khoảng cách tối thiểu 10 giây.',
      },
      {
        title: 'Sửa mọi cảnh báo trước khi sao chép',
        description:
          'Nếu có cảnh báo xuất hiện, hãy điều chỉnh dấu thời gian hay tiêu đề có vấn đề để mọi chương đều đạt quy tắc của YouTube trước khi xuất.',
      },
      {
        title: 'Sao chép khối mô tả và các liên kết',
        description:
          'Sao chép khối chương đã định dạng cho phần mô tả video, và sao chép từng liên kết ?t= riêng lẻ cho bình luận, ghi chú chương trình hay bản tin.',
      },
      {
        title: 'Mẹo: kiểm tra một liên kết trước khi đăng',
        description:
          'Mở một liên kết ?t= đã tạo trong tab mới để chắc chắn nó nhảy đến đúng khoảnh khắc, đặc biệt sau khi bạn sửa dấu thời gian vào phút chót.',
      },
    ],
    examples: [
      {
        title: 'Định dạng mô tả cho video hướng dẫn 4 chương',
        input: '00:00 Mở đầu · 01:15 Thiết lập · 04:40 Trình diễn · 08:20 Tóm tắt',
        output: '00:00 Mở đầu\n01:15 Thiết lập\n04:40 Trình diễn\n08:20 Tóm tắt (+ https://youtu.be/...?t=75)',
        explanation: 'Công cụ chuyển 01:15 thẳng thành ?t=75s để chia sẻ chỉ với một cú nhấp.',
      },
      {
        title: 'Tạo ghi chú chương trình cho tập podcast',
        input: '00:00 Mở đầu · 07:30 Câu hỏi đầu tiên · 18:45 Ý chính',
        output: 'Khối chương ba dòng, mỗi dòng kèm liên kết sâu ?t=',
        explanation: 'Người nghe có thể đi thẳng từ ghi chú chương trình đến đúng phần họ muốn nghe.',
      },
    ],
    benefits: [
      'Tự động kiểm tra quy tắc bắt đầu 00:00, tối thiểu 3 chương và thời lượng tối thiểu 10 giây của YouTube',
      'Tự động chuyển sang định dạng HH:MM:SS khi video dài hơn 60 phút',
      'Trích xuất ID video từ URL chuẩn, rút gọn, trực tiếp, nhúng và Shorts',
      'Tạo liên kết sâu ?t= sẵn sàng chia sẻ cho ghi chú chương trình và bình luận đã ghim',
    ],
    useCases: [
      'Thêm thanh chương có thể tìm kiếm vào video hướng dẫn và podcast trên YouTube',
      'Tạo dấu thời gian có thể nhấp cho ghi chú chương trình của tập podcast',
      'Chia sẻ đúng bước hướng dẫn trong tài liệu, Slack hay Discord',
      'Kiểm tra danh sách chương của buổi phát trực tiếp dài xem có lỗi định dạng không',
    ],
    faqs: [
      {
        question: 'Vì sao chương video YouTube của tôi không hiển thị trên thanh tiến trình?',
        answer:
          'YouTube yêu cầu dấu thời gian đầu tiên phải đúng 00:00, ít nhất 3 dấu thời gian theo thứ tự thời gian tăng dần, và mỗi chương kéo dài ít nhất 10 giây. Nếu thiếu bất kỳ điều kiện nào, YouTube sẽ không tạo chương, vì vậy hãy dùng phần kiểm tra thông số của công cụ để sửa trước khi đăng.',
      },
      {
        question: 'Dấu thời gian quá 60 phút nên viết dạng MM:SS hay HH:MM:SS?',
        answer:
          'Khi bất kỳ chương nào đạt 60 phút trở lên, công cụ sẽ tự động định dạng mọi dấu thời gian một cách nhất quán theo dạng HH:MM:SS. Việc giữ một định dạng duy nhất giúp người xem dễ đọc và tránh nhầm lẫn khi nhảy giữa các chương.',
      },
      {
        question: 'Công cụ này có kết nối với YouTube Data API không?',
        answer:
          'Không. Mọi phân tích và định dạng diễn ra ngay trong trình duyệt của bạn mà không cần đăng nhập tài khoản Google hay khóa API. Bạn chỉ cần dán URL và nhập dấu thời gian là có thể tạo khối chương ngay lập tức.',
      },
      {
        question: 'Dùng Trình tạo dấu thời gian YouTube có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí khi dùng trong trình duyệt, không cần đăng ký tài khoản, và không có gì được tải lên máy chủ. Bạn có thể tạo dấu thời gian cho bao nhiêu video tùy thích, từ video hướng dẫn ngắn đến buổi phát trực tiếp dài nhiều giờ.',
      },
      {
        question: 'YouTube yêu cầu tối thiểu bao nhiêu chương?',
        answer:
          'YouTube cần ít nhất 3 chương trong phần mô tả trước khi hiển thị dấu chương trên thanh tiến trình. Với ít hơn 3 chương, video sẽ phát như bình thường nhưng không có thanh chia chương để người xem nhảy tới lui.',
      },
      {
        question: 'Vì sao chương YouTube đầu tiên phải bắt đầu ở 00:00?',
        answer:
          'YouTube dùng dấu thời gian đầu tiên làm điểm neo cho toàn bộ hệ thống chương, nên phần mô tả bắt đầu muộn hơn sẽ không tạo ra chương nào cả. Hãy luôn bắt đầu danh sách của bạn ở 00:00, ngay cả khi phần mở đầu chỉ kéo dài vài giây.',
      },
      {
        question: 'Điều gì xảy ra nếu hai chương cách nhau dưới 10 giây?',
        answer:
          'YouTube sẽ bỏ qua chương ngắn hơn 10 giây, nên công cụ sẽ gắn cờ khoảng cách đó và bạn nên dời dấu thời gian sau tiến lên phía trước. Một chương quá ngắn thường có nghĩa là bạn đã chia nhỏ quá mức và nên gộp với chương kề bên.',
      },
      {
        question: 'Tôi có thể dùng Trình tạo dấu thời gian YouTube cho Shorts không?',
        answer:
          'Có, bạn có thể dán liên kết Shorts và công cụ vẫn tạo liên kết nhảy ?t=, dù chương chủ yếu hữu ích cho video dài hơn. Với Shorts, liên kết ?t= vẫn tiện khi bạn muốn chia sẻ đúng một khoảnh khắc cụ thể trong video.',
      },
      {
        question: 'Liên kết nhảy ?t= hoạt động thế nào?',
        answer:
          'Mỗi liên kết gắn thêm thời gian bắt đầu của chương, tính bằng giây, vào URL video, nên khi nhấp vào, video sẽ mở đúng khoảnh khắc đó. Bạn có thể dán các liên kết này vào bình luận, ghi chú chương trình hay email để người xem đến thẳng phần họ cần.',
      },
      {
        question: 'Trình tạo dấu thời gian chấp nhận những định dạng URL YouTube nào?',
        answer:
          'Công cụ chấp nhận liên kết youtube.com/watch chuẩn, liên kết rút gọn youtu.be, liên kết trực tiếp, liên kết nhúng và liên kết Shorts. Chỉ cần dán bất kỳ dạng nào trong số đó, công cụ sẽ tự trích xuất ID video cho bạn.',
      },
      {
        question: 'Các chương có phải theo thứ tự thời gian không?',
        answer:
          'Có, YouTube yêu cầu thứ tự tăng dần, và công cụ có thể sắp xếp các hàng của bạn theo thời gian chỉ với một cú nhấp nếu chúng bị xáo trộn. Hãy luôn sắp xếp trước khi sao chép để tránh lỗi khi dán vào mô tả.',
      },
      {
        question: 'Tôi có thể thêm chương cho video không phải do tôi tải lên không?',
        answer:
          'Bạn có thể tạo liên kết dấu thời gian cho bất kỳ video công khai nào để chia sẻ đúng khoảnh khắc, nhưng chương chỉ xuất hiện khi chủ sở hữu video thêm chúng vào phần mô tả. Với video của người khác, liên kết ?t= vẫn là cách tốt nhất để chia sẻ.',
      },
      {
        question: 'Tôi có thể thêm bao nhiêu chương bằng công cụ này?',
        answer:
          'Công cụ không đặt giới hạn cố định, nhưng danh sách chương quá dài sẽ khó đọc, nên hãy tập trung vào các mục thật sự của video. Với hầu hết video, từ 5 đến 15 chương là vừa đủ để người xem điều hướng dễ dàng.',
      },
      {
        question: 'Tôi có cần ghi tiêu đề chương không, hay chỉ cần thời gian là đủ?',
        answer:
          'YouTube cần một tiêu đề sau mỗi dấu thời gian, nên hãy thêm nhãn mô tả ngắn gọn cho mỗi chương bạn liệt kê. Tiêu đề rõ ràng cũng giúp người xem quyết định nên nhảy đến chương nào và hiểu ngay nội dung của từng phần trước khi nhấp vào.',
      },
      {
        question: 'Tôi có thể dùng các dấu thời gian này trong mô tả tập podcast không?',
        answer:
          'Có, cùng định dạng 00:00 hoạt động trong ghi chú chương trình và mô tả tập podcast, và các liên kết ?t= rất tiện cho người nghe. Nhiều nền tảng podcast cũng hiển thị chương khi bạn dùng đúng định dạng này.',
      },
      {
        question: 'Vì sao công cụ chuyển mọi dấu thời gian sang HH:MM:SS với video dài?',
        answer:
          'Định dạng MM:SS và HH:MM:SS lẫn lộn sẽ gây nhầm lẫn cho người xem và bộ phân tích, nên công cụ giữ mọi dấu thời gian trong một định dạng nhất quán. Nhờ vậy danh sách chương trông chuyên nghiệp và dễ quét hơn.',
      },
      {
        question: 'URL video hay danh sách chương của tôi có được tải lên đâu không?',
        answer:
          'Không, mọi phân tích và định dạng diễn ra ngay trong trình duyệt của bạn, và URL cùng tiêu đề chương của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm làm việc với cả những video chưa công bố.',
      },
      {
        question: 'Tôi có thể sửa một chương sau khi đã thêm không?',
        answer:
          'Có, bạn có thể thay đổi bất kỳ dấu thời gian hay tiêu đề nào, sắp xếp lại danh sách, và kiểm tra lại cảnh báo thông số trước khi sao chép khối đã cập nhật. Không cần tạo lại từ đầu khi chỉ muốn sửa một chương.',
      },
      {
        question: 'Tôi nên làm gì nếu liên kết đã tạo mở sai thời gian?',
        answer:
          'Hãy kiểm tra xem dấu thời gian đã được nhập đúng thứ tự phút và giây chưa, rồi sao chép lại liên kết sau khi sửa. Lỗi thường gặp nhất là nhập nhầm phút thành giây, ví dụ 01:15 thành 15:01.',
      },
      {
        question: 'Chương YouTube có giúp người xem tìm nội dung nhanh hơn không?',
        answer:
          'Có, chương giúp người xem nhảy thẳng đến đúng phần họ cần, khiến video hướng dẫn dài, bài đánh giá và podcast dễ điều hướng hơn nhiều. Người xem cũng có thể xem trước cấu trúc video và quyết định phần nào đáng xem nhất.',
      },
    ],
  },
  'social-thumbnail-previewer': {
    instructions: [
      {
        title: 'Tải hình thu nhỏ từ máy của bạn',
        description:
          'Chọn tệp PNG, JPG hay WebP từ ổ đĩa; ảnh chỉ nằm trong bộ nhớ trình duyệt của bạn qua Object URL.',
      },
      {
        title: 'Nhập tiêu đề, kênh và thời lượng',
        description:
          'Gõ tiêu đề dự kiến và độ dài video để kiểm tra việc cắt ngắn hai dòng trong bảng tin và vùng bị huy hiệu góc che phủ.',
      },
      {
        title: 'Bật/tắt Chế độ tối và Vùng an toàn',
        description:
          'Chuyển đổi giữa bảng tin Sáng và Tối, đồng thời bật lớp phủ vùng góc có dấu thời gian màu hổ phách trước khi xuất.',
      },
      {
        title: 'So sánh kích thước bảng tin và thanh bên',
        description:
          'Xem thẻ lớn trên bảng tin máy tính và hình thu nhỏ gọn ở thanh bên cạnh nhau để phát hiện chữ không đọc được ở cỡ nhỏ.',
      },
      {
        title: 'Kiểm tra các cảnh báo thông số',
        description:
          'Xem phần kiểm tra kích thước 1280×720, tỉ lệ 16:9 và dung lượng tệp 2 MB, rồi sửa vấn đề bị gắn cờ trong trình chỉnh sửa ảnh của bạn.',
      },
      {
        title: 'Mẹo: sửa chữ bị huy hiệu che khuất',
        description:
          'Nếu huy hiệu thời lượng che mất chữ quan trọng hay khuôn mặt, hãy dời chi tiết đó ra khỏi góc dưới bên phải rồi tải lại ảnh.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra vị trí chữ ở góc dưới bên phải',
        input: 'PNG 1280×720 · Thời lượng: 12:48 · Vùng an toàn: Bật',
        output: 'Làm nổi bật góc dưới bên phải, nơi huy hiệu thời lượng 12:48 che mất hình ảnh.',
        explanation: 'Giúp khuôn mặt hay con số quan trọng trên hình thu nhỏ không nằm sau lớp phủ thời gian của trình phát.',
      },
      {
        title: 'Kiểm tra khả năng đọc của hình thu nhỏ trong Chế độ tối',
        input: 'Hình thu nhỏ tông sáng · Xem trước bảng tin Chế độ tối',
        output: 'Độ tương phản của chữ trên nền tối trông thấp — nên thêm viền đậm',
        explanation: 'Nhiều người xem YouTube ở Chế độ tối, nên việc kiểm tra cả hai chế độ là cần thiết.',
      },
    ],
    benefits: [
      'Đọc ngay kích thước điểm ảnh thật, tỉ lệ khung hình và dung lượng tệp KB/MB',
      'Xem trước cả thẻ lớn trên bảng tin máy tính lẫn hình thu nhỏ ở thanh bên gợi ý',
      'Có nút chuyển bảng tin Sáng/Tối để kiểm tra khả năng đọc với độ tương phản cao',
      'Không tải lên máy chủ — lý tưởng cho đồ họa tài trợ hay ra mắt sản phẩm chưa công bố',
    ],
    useCases: [
      'Phát hiện chữ nhỏ khó đọc trong hình thu nhỏ gọn ở thanh bên trước khi đăng',
      'Đảm bảo đồ họa quan trọng tránh xa lớp phủ thời lượng ở góc dưới bên phải',
      'Kiểm tra hình thu nhỏ có đạt yêu cầu 1280×720, 16:9 và dưới 2 MB của YouTube không',
      'So sánh cách diễn đạt tiêu đề để từ khóa quan trọng xuất hiện trước khi bị cắt ngắn',
    ],
    faqs: [
      {
        question: 'Hình thu nhỏ tôi tải lên có được gửi đến máy chủ từ xa không?',
        answer:
          'Không bao giờ. Ảnh chỉ tải trong tab trình duyệt của bạn qua URL.createObjectURL() và sẽ tự thu hồi khi bạn thay ảnh khác hay đóng tab. Nhờ vậy bạn có thể xem trước hình thu nhỏ chưa công bố mà không lo bị rò rỉ.',
      },
      {
        question: 'YouTube đề xuất kích thước và dung lượng nào cho hình thu nhỏ?',
        answer:
          'YouTube đề xuất 1280×720 điểm ảnh (chiều rộng tối thiểu 640px) với tỉ lệ 16:9, lưu dưới dạng JPG, PNG hay WebP dưới 2 MB. Kích thước này đảm bảo hình thu nhỏ sắc nét trên mọi thiết bị, từ điện thoại đến TV.',
      },
      {
        question: 'Vì sao bản xem trước ở thanh bên lại quan trọng đến vậy?',
        answer:
          'Hình thu nhỏ gợi ý trên trang xem xuất hiện nhỏ hơn nhiều (khoảng 168px chiều rộng), nên việc kiểm tra khả năng đọc ở cỡ nhỏ giúp bạn tránh thiết kế rối mắt. Một hình thu nhỏ đẹp ở cỡ lớn có thể trở nên khó đọc khi thu nhỏ.',
      },
      {
        question: 'Dùng Trình xem trước hình thu nhỏ YouTube có miễn phí không?',
        answer:
          'Có, công cụ miễn phí khi dùng trong trình duyệt, không cần tài khoản, và hình thu nhỏ của bạn không bao giờ được tải lên đâu cả. Bạn có thể xem trước bao nhiêu hình tùy thích trước khi đăng video.',
      },
      {
        question: 'Tôi có thể xem trước những định dạng ảnh nào bằng công cụ này?',
        answer:
          'Bạn có thể tải tệp PNG, JPG và WebP, đây cũng là những định dạng YouTube chấp nhận cho hình thu nhỏ tùy chỉnh. Nếu ảnh của bạn ở định dạng khác, hãy xuất lại sang một trong ba định dạng này trước.',
      },
      {
        question: 'Công cụ kiểm tra tỉ lệ 16:9 như thế nào?',
        answer:
          'Nó đọc kích thước điểm ảnh thật của ảnh và gắn cờ nếu tỉ lệ chiều rộng trên chiều cao không khớp 16:9. Nhờ vậy bạn phát hiện ngay ảnh bị cắt sai tỉ lệ trước khi tải lên YouTube và bị hiển thị méo mó.',
      },
      {
        question: 'Vùng an toàn của hình thu nhỏ trong công cụ này là gì?',
        answer:
          'Lớp phủ vùng an toàn làm nổi bật góc dưới bên phải, nơi YouTube đặt huy hiệu thời lượng video, để bạn giữ khuôn mặt và chữ quan trọng tránh khỏi đó. Hãy xem vùng này như một khu vực cấm khi bố cục hình thu nhỏ.',
      },
      {
        question: 'Vì sao nên xem trước hình thu nhỏ ở Chế độ tối?',
        answer:
          'Nhiều người xem duyệt YouTube ở Chế độ tối, và thiết kế sáng hay có độ tương phản thấp có thể trông rất khác trên nền bảng tin tối. Kiểm tra cả hai chế độ giúp bạn chắc chắn hình thu nhỏ nổi bật với mọi người xem.',
      },
      {
        question: 'Công cụ hiển thị việc cắt ngắn tiêu đề như thế nào?',
        answer:
          'Nó hiển thị tiêu đề của bạn trong một thẻ bảng tin thực tế với cùng giới hạn hai dòng, để bạn thấy chính xác YouTube cắt tiêu đề ở đâu. Nhờ vậy bạn có thể đưa từ khóa quan trọng lên đầu trước khi đăng.',
      },
      {
        question: 'Điều gì xảy ra nếu hình thu nhỏ của tôi lớn hơn 2 MB?',
        answer:
          'Công cụ sẽ gắn cờ dung lượng tệp, và bạn nên xuất lại ảnh với mức nén cao hơn hay độ phân giải nhỏ hơn cho đến khi dưới 2 MB. YouTube sẽ từ chối hình thu nhỏ vượt quá giới hạn, nên hãy sửa trước khi tải lên.',
      },
      {
        question: 'Tôi có thể xem trước hình thu nhỏ trước khi video được đăng không?',
        answer:
          'Có, đó chính là mục đích chính: kiểm tra hình thu nhỏ chưa phát hành ngay trên máy của bạn để đồ họa tài trợ và hình ảnh ra mắt luôn riêng tư cho đến ngày phát hành. Không ai khác có thể thấy ảnh của bạn.',
      },
      {
        question: 'Vì sao hình thu nhỏ của tôi trông mờ trong bản xem trước ở thanh bên?',
        answer:
          'Hình thu nhỏ nhỏ ở thanh bên thu nhỏ ảnh của bạn rất nhiều, nên chữ mỏng và chi tiết nhỏ sẽ bị mờ; hãy dùng chữ lớn in đậm và hình khối đơn giản thay vào đó. Hãy kiểm tra ở cỡ nhỏ trước khi chốt thiết kế cuối cùng.',
      },
      {
        question: 'Công cụ có thay đổi hay nén hình thu nhỏ của tôi không?',
        answer:
          'Không, nó chỉ hiển thị tệp của bạn nguyên trạng và báo cáo kích thước cùng dung lượng; nó không bao giờ chỉnh sửa, đổi kích thước hay mã hóa lại ảnh. Việc chỉnh sửa vẫn do bạn thực hiện trong trình chỉnh sửa ảnh của mình.',
      },
      {
        question: 'Chiều rộng tối thiểu YouTube chấp nhận cho hình thu nhỏ là bao nhiêu?',
        answer:
          'YouTube yêu cầu chiều rộng tối thiểu 640 điểm ảnh, dù chiều rộng 1280 điểm ảnh được đề xuất để có kết quả HD sắc nét. Ảnh nhỏ hơn 640px sẽ bị từ chối khi bạn tải lên, vì vậy hãy luôn xuất ảnh ở 1280×720 để hình thu nhỏ hiển thị sắc nét trên mọi màn hình.',
      },
      {
        question: 'Tôi có thể thử nhiều tiêu đề khác nhau với cùng một hình thu nhỏ không?',
        answer:
          'Có, chỉ cần sửa ô tiêu đề và bản xem trước bảng tin sẽ cập nhật ngay lập tức, để bạn so sánh cách diễn đạt mà không cần tải lại ảnh. Hãy thử vài phương án rồi chọn tiêu đề có từ khóa quan trọng nhất lên đầu.',
      },
      {
        question: 'Vì sao chữ trên hình thu nhỏ của tôi bị cắt trong bản xem trước bảng tin?',
        answer:
          'Thẻ bảng tin giới hạn tiêu đề trong hai dòng, nên hãy đưa những từ quan trọng nhất lên đầu tiêu đề để chúng luôn hiển thị. Phần còn lại của tiêu đề vẫn có giá trị cho tìm kiếm, dù người xem chưa thấy ngay.',
      },
      {
        question: 'Công cụ có hoạt động cho hình thu nhỏ trên nền tảng khác không?',
        answer:
          'Nó được xây dựng dựa trên bố cục bảng tin YouTube, nhưng các kiểm tra về kích thước, độ tương phản và khả năng đọc ở cỡ nhỏ đều hữu ích cho mọi nền tảng video. Nguyên tắc thiết kế rõ ràng ở cỡ nhỏ áp dụng ở khắp mọi nơi.',
      },
      {
        question: 'Làm sao xóa hình thu nhỏ đã tải?',
        answer:
          'Hãy tải một ảnh khác để thay thế, hoặc đóng tab; URL đối tượng trong bộ nhớ sẽ bị thu hồi và không có gì được lưu lại. Không còn dấu vết nào của ảnh trên máy chủ vì ảnh chưa từng rời khỏi trình duyệt của bạn.',
      },
      {
        question: 'Tôi nên làm gì nếu bản xem trước trông khác YouTube thật?',
        answer:
          'YouTube thỉnh thoảng thay đổi bố cục, nên hãy xem bản xem trước như một ước lượng gần đúng và kiểm tra lần cuối trên một video riêng tư hay không công khai trước khi đăng chính thức. Bản kiểm tra đó sẽ cho bạn thấy chính xác hình thu nhỏ hiển thị thế nào trong bảng tin thật.',
      },
      {
        question: 'Trình xem trước hình thu nhỏ có kiểm tra hình thu nhỏ của video YouTube đang phát không?',
        answer:
          'Không, nó chỉ xem trước tệp ảnh trên máy của bạn; để kiểm tra video đã đăng, hãy tải hình thu nhỏ của video đó xuống trước rồi tải tệp vào đây. Với video đã đăng, bạn cũng có thể xem trực tiếp trên YouTube.',
      },
    ],
  },
  'hashtag-formatter': {
    instructions: [
      {
        title: 'Dán từ khóa hay hashtag thô',
        description:
          'Nhập thẻ cách nhau bằng dấu phẩy, dấu cách, dấu chấm phẩy hay dấu ngắt dòng — có hoặc không có ký hiệu # ở đầu.',
      },
      {
        title: 'Chọn kiểu chữ hoa và bố cục đầu ra',
        description:
          'Chọn PascalCase (#CamelCase) để dễ tiếp cận, chữ thường, hay Giữ nguyên kiểu chữ, cùng với đầu ra trên một dòng hay tách dòng.',
      },
      {
        title: 'Chọn kiểu phân cách cho chú thích',
        description:
          'Chọn khối một dòng, danh sách dọc, hay chân trang tách bằng dấu chấm để các thẻ nằm gọn gàng bên dưới văn bản chú thích.',
      },
      {
        title: 'Chạy công cụ định dạng',
        description:
          'Công cụ loại bỏ dấu câu không hợp lệ, xóa trùng lặp không phân biệt chữ hoa thường, và tạo lại mọi thẻ theo kiểu chữ bạn đã chọn.',
      },
      {
        title: 'Kiểm tra số lượng rồi sao chép',
        description:
          'Kiểm tra số trùng lặp đã xóa và tổng số thẻ so với giới hạn 30 thẻ của Instagram, rồi bấm Sao chép hashtag.',
      },
      {
        title: 'Mẹo: cắt bớt thẻ vượt quá giới hạn nền tảng',
        description:
          'Nếu số lượng vượt quá 30, hãy bỏ các thẻ ít liên quan nhất trước, vì thẻ thừa quá giới hạn sẽ bị Instagram bỏ qua.',
      },
    ],
    examples: [
      {
        title: 'Chuyển cụm từ thường thành hashtag CamelCase dễ tiếp cận',
        input: 'content marketing, productivity hacks, Content Marketing',
        output: '#ContentMarketing #ProductivityHacks (đã xóa 1 trùng lặp)',
        explanation: 'Viết hoa chữ đầu mỗi từ giúp trình đọc màn hình phát âm đúng các thẻ nhiều từ.',
      },
      {
        title: 'Tạo chân trang tách bằng dấu chấm cho bài đăng Instagram',
        input: 'travel, food, photography, travel',
        output: '#Travel · #Food · #Photography (đã xóa 1 trùng lặp)',
        explanation: 'Dấu phân cách bằng chấm đẩy hashtag xuống dưới nếp gấp của chú thích, để chú thích hiển thị trông gọn gàng mà hashtag vẫn hoạt động.',
      },
    ],
    benefits: [
      'Hỗ trợ định dạng #PascalCase dễ tiếp cận theo khuyến nghị của hướng dẫn khả năng tiếp cận số',
      'Tự động xóa các thẻ giống nhau mà không phân biệt chữ hoa thường',
      'Loại bỏ dấu câu không được hỗ trợ (gạch ngang, dấu chấm, dấu phẩy) vốn làm vỡ thẻ có thể nhấp',
      'Theo dõi chính xác số lượng thẻ so với giới hạn của nền tảng',
    ],
    useCases: [
      'Dọn ngân hàng hashtag chiến dịch được chia sẻ qua bảng tính tiếp thị',
      'Chuyển từ khóa SEO nhiều từ thành hashtag mạng xã hội có thể nhấp',
      'Cập nhật danh sách thẻ chữ thường cũ sang định dạng CamelCase dễ tiếp cận',
      'Tạo chân trang hashtag tách bằng dấu chấm gọn gàng cho bài đăng Instagram',
    ],
    faqs: [
      {
        question: 'Vì sao nên dùng CamelCase / PascalCase cho hashtag?',
        answer:
          'Trình đọc màn hình tách ranh giới từ viết hoa (ví dụ #SocialMediaTools thành "Social Media Tools") thay vì cố phát âm một chuỗi chữ thường dài thành một từ khó hiểu. Nhờ vậy người khiếm thị vẫn hiểu được hashtag của bạn, và hashtag cũng dễ đọc hơn với mọi người.',
      },
      {
        question: 'Vì sao dấu gạch ngang và dấu chấm bị xóa trong thẻ?',
        answer:
          'Hầu hết nền tảng mạng xã hội kết thúc hashtag có thể nhấp ở dấu cách, dấu gạch ngang hay dấu câu đầu tiên, nên việc loại bỏ dấu gạch ngang giúp toàn bộ thẻ còn nguyên vẹn. Nếu giữ lại, chỉ phần trước dấu câu mới thành liên kết.',
      },
      {
        question: 'Công cụ này có dùng AI hay đoán hashtag bị cấm không?',
        answer:
          'Không. Nó chỉ dọn dẹp, định dạng và xóa trùng lặp một cách xác định đối với đúng các thẻ bạn cung cấp. Công cụ không kiểm tra danh sách cấm hay dữ liệu trực tiếp của nền tảng, nên bạn vẫn cần tự kiểm tra thẻ nhạy cảm.',
      },
      {
        question: 'Dùng Trình định dạng hashtag có miễn phí không?',
        answer:
          'Có, công cụ miễn phí khi dùng trong trình duyệt, không cần đăng ký, và thẻ của bạn được xử lý ngay trên máy mà không tải lên đâu cả. Bạn có thể định dạng bao nhiêu nhóm hashtag tùy thích.',
      },
      {
        question: 'Giới hạn hashtag trên Instagram là bao nhiêu?',
        answer:
          'Instagram cho phép tối đa 30 hashtag cho mỗi bài đăng, và công cụ này đếm thẻ của bạn để bạn luôn nằm trong giới hạn đó. Vượt quá giới hạn có thể khiến toàn bộ chú thích không đăng được hoặc hashtag thừa bị bỏ qua.',
      },
      {
        question: 'Trình định dạng hashtag xóa trùng lặp như thế nào?',
        answer:
          'Nó so sánh các thẻ mà không phân biệt chữ hoa thường, nên #ContentMarketing và #contentmarketing được tính là cùng một thẻ và chỉ một thẻ được giữ lại. Nhờ vậy bạn không lãng phí chỗ trong giới hạn 30 thẻ cho cùng một thẻ lặp lại.',
      },
      {
        question: 'Tôi có thể dán hashtag có hoặc không có ký hiệu # không?',
        answer:
          'Có, cả hai cách đều được: công cụ thêm dấu # cho từ khóa thường và giữ nguyên những thẻ bạn đã gõ kèm dấu #. Nhờ vậy bạn có thể dán thẳng danh sách từ bảng tính mà không cần sửa tay từng thẻ.',
      },
      {
        question: 'Tôi có thể dùng dấu phân cách nào giữa các hashtag?',
        answer:
          'Bạn có thể tách thẻ bằng dấu phẩy, dấu cách, dấu chấm phẩy hay dấu ngắt dòng, và công cụ xử lý cả dấu phân cách trộn lẫn trong một lần dán. Điều này giúp bạn dọn nhanh danh sách hashtag lộn xộn từ nhiều nguồn khác nhau.',
      },
      {
        question: 'Hashtag CamelCase và chữ thường khác nhau thế nào?',
        answer:
          'CamelCase viết hoa mỗi từ (#SocialMedia) để trình đọc màn hình dễ đọc, còn chữ thường (#socialmedia) là lựa chọn phong cách và được đọc như một từ duy nhất. Về khả năng nhấp, cả hai hoạt động như nhau trên hầu hết nền tảng.',
      },
      {
        question: 'Trình định dạng hashtag có kiểm tra hashtag bị cấm không?',
        answer:
          'Không, nó không kiểm tra danh sách cấm hay dữ liệu trực tiếp của nền tảng; nó chỉ dọn dẹp và định dạng các thẻ bạn cung cấp. Trước khi đăng, hãy tự kiểm tra những thẻ nhạy cảm vì nền tảng có thể ẩn bài đăng dùng thẻ bị cấm.',
      },
      {
        question: 'Tôi có thể dùng hashtag đã định dạng trên TikTok và X không?',
        answer:
          'Có, các thẻ đã dọn dẹp hoạt động trên mọi nền tảng, dù mỗi nền tảng có giới hạn riêng, ví dụ giới hạn 30 thẻ trên Instagram. Trên TikTok và X, ít hashtag liên quan thường hiệu quả hơn nhiều hashtag chung chung.',
      },
      {
        question: 'Vì sao một số hashtag của tôi biến mất sau khi định dạng?',
        answer:
          'Các thẻ chỉ gồm dấu câu hay ký tự không được hỗ trợ sẽ bị xóa, vì chúng vốn không hoạt động như hashtag có thể nhấp. Nếu thẻ của bạn biến mất, hãy kiểm tra xem nó có chứa ký tự đặc biệt hay chỉ toàn dấu câu không.',
      },
      {
        question: 'Chân trang hashtag tách bằng dấu chấm dùng để làm gì?',
        answer:
          'Dấu phân cách bằng dấu chấm đẩy hashtag xuống dưới nếp gấp của chú thích trên Instagram, giữ chú thích hiển thị gọn gàng trong khi hashtag vẫn hoạt động. Người đọc thấy một chú thích sạch, còn bài đăng vẫn tiếp cận được qua hashtag.',
      },
      {
        question: 'Tôi có thể định dạng hashtag thành danh sách dọc không?',
        answer:
          'Có, hãy chọn bố cục tách dòng để đặt một hashtag trên mỗi dòng, rất tiện cho bình luận và chân trang chú thích. Danh sách dọc cũng giúp bạn rà soát nhanh từng thẻ trước khi đăng, và bạn có thể kết hợp nó với dấu phân cách bằng dấu chấm để chân trang trông gọn gàng hơn.',
      },
      {
        question: 'Trình định dạng hashtag có hoạt động với từ không phải tiếng Anh không?',
        answer:
          'Có, nó giữ lại chữ cái của bảng chữ cái khác trong thẻ, miễn là nền tảng hỗ trợ chúng trong hashtag. Nhờ vậy bạn có thể dùng hashtag tiếng Việt có dấu hay các ngôn ngữ khác mà không bị mất ký tự.',
      },
      {
        question: 'Nên dùng bao nhiêu hashtag cho mỗi bài đăng?',
        answer:
          'Không có một con số đúng duy nhất; hãy dùng thẻ thật sự liên quan đến bài đăng, và để bộ đếm giúp bạn nằm trong giới hạn của nền tảng. Với hầu hết bài đăng, từ 5 đến 15 thẻ liên quan thường hiệu quả hơn 30 thẻ chung chung.',
      },
      {
        question: 'Tôi có thể lưu nhóm hashtag để dùng lại không?',
        answer:
          'Công cụ không lưu trữ nhóm, nên hãy sao chép khối đã định dạng vào ghi chú hay bảng tính của bạn để dùng lại sau. Nhiều nhà sáng tạo giữ một vài nhóm hashtag theo chủ đề để dán nhanh cho từng loại bài đăng.',
      },
      {
        question: 'Vì sao chế độ Giữ nguyên kiểu chữ lại giữ cách viết hoa gốc của tôi?',
        answer:
          'Chế độ Giữ nguyên kiểu chữ dành cho thẻ thương hiệu hay từ viết tắt mà bạn muốn giữ đúng như đã gõ, còn các chế độ khác sẽ chuẩn hóa mọi thẻ theo cùng một cách. Nhờ vậy tên thương hiệu của bạn không bị đổi dạng ngoài ý muốn.',
      },
      {
        question: 'Hashtag của tôi có được tải lên máy chủ không?',
        answer:
          'Không, mọi định dạng diễn ra ngay trong trình duyệt của bạn, nên danh sách từ khóa và thẻ chiến dịch của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm dọn cả những nhóm hashtag chiến dịch chưa công bố.',
      },
      {
        question: 'Tôi nên làm gì nếu hashtag đã định dạng vẫn không hoạt động trên nền tảng?',
        answer:
          'Hãy kiểm tra quy tắc riêng của nền tảng cho thẻ đó, vì một số nền tảng chặn một số từ nhất định hay giới hạn độ dài thẻ ngay cả khi định dạng đã sạch. Thử tìm thẻ đó trên nền tảng để xem nó có hiển thị bài đăng hay bị ẩn không.',
      },
    ],
  },
  'caption-template-builder': {
    instructions: [
      {
        title: 'Chọn cấu trúc bài đăng',
        description:
          'Chọn một trong năm mẫu xác định ở thanh trên cùng cho phù hợp với mục tiêu của bạn.',
      },
      {
        title: 'Điền đoạn mở đầu, ý chính và lời kêu gọi của riêng bạn',
        description:
          'Nhập đoạn mở đầu chân thật, bối cảnh vấn đề, ý chính dạng gạch đầu dòng (mỗi dòng một ý), lời kêu gọi hành động và hashtag.',
      },
      {
        title: 'Xem lại bản xem trước trực tiếp',
        description:
          'Đọc bài đăng đã định dạng như khi nó xuất hiện, kiểm tra khoảng cách đoạn văn và thứ tự của đoạn mở đầu, ý chính và lời kêu gọi hành động.',
      },
      {
        title: 'Kiểm tra số ký tự và số từ',
        description:
          'Theo dõi bộ đếm trực tiếp so với giới hạn 280 ký tự của X và giới hạn của Instagram hay LinkedIn, rồi cắt ngắn những dòng vượt quá.',
      },
      {
        title: 'Sao chép và kiểm tra độ dài',
        description:
          'Xem trước bài đăng đã định dạng, xác nhận số ký tự và số từ phù hợp cho X hay Instagram/LinkedIn, rồi bấm Sao chép chú thích.',
      },
      {
        title: 'Mẹo: thử cùng ghi chú trong một mẫu khác',
        description:
          'Chuyển mẫu mà không cần gõ lại để so sánh đoạn mở đầu và ý chính của bạn dưới dạng PAS, hướng dẫn hay danh sách kiểm tra trước khi đăng.',
      },
    ],
    examples: [
      {
        title: 'Soạn bài đăng LinkedIn 3 bước có thể hành động',
        input: 'Đoạn mở đầu + Bối cảnh + 3 gạch đầu dòng + Lời kêu gọi',
        output: 'Bài đăng đánh số gọn gàng với khoảng cách đoạn văn rõ ràng và hashtag ở cuối.',
        explanation: 'Công cụ sắp xếp đúng từng từ của bạn theo cấu trúc xác định mà không thay đổi giọng văn hay bịa thêm khẳng định.',
      },
      {
        title: 'Tạo bài đăng PAS cho buổi ra mắt sản phẩm',
        input: 'Vấn đề: ảnh tải chậm · Nỗi đau: trang tải lâu · Giải pháp: công cụ nén ảnh',
        output: 'Chú thích theo cấu trúc Vấn đề–Khuấy động–Giải pháp, kết thúc bằng lời kêu gọi hành động',
        explanation: 'PAS nêu vấn đề trước, rồi xoáy sâu vào nỗi đau, và cuối cùng đưa ra giải pháp cùng lời kêu gọi hành động.',
      },
    ],
    benefits: [
      'Lắp ráp xác định minh bạch 100% — không từ ngữ sáo rỗng của AI hay sự thật bịa đặt',
      'Tạo hệ thống phân cấp trực quan rõ ràng giữa đoạn mở đầu, ý chính và lời kêu gọi hành động',
      'Bộ đếm ký tự và từ trực tiếp cảnh báo giới hạn 280 ký tự của X và giới hạn của IG/LinkedIn',
      'Cho nhà sáng tạo thử năm khung cổ điển trên cùng ghi chú chỉ với một cú nhấp',
    ],
    useCases: [
      'Soạn thông báo ra mắt sản phẩm nhất quán cho các kênh mạng xã hội',
      'Biến ghi chú gạch đầu dòng thô về kỹ thuật hay tiếp thị thành bài đăng dễ đọc',
      'Định dạng carousel giáo dục hay danh sách mẹo hằng tuần',
      'Tách đoạn mở đầu khỏi danh sách giá trị một cách gọn gàng trước khi lên lịch',
    ],
    faqs: [
      {
        question: 'Công cụ này có dùng mô hình ngôn ngữ AI để viết lại lời của tôi không?',
        answer:
          'Không. Đây là công cụ tạo mẫu có cấu trúc hoàn toàn xác định, chạy trong trình duyệt của bạn — mọi câu trong bản xem trước đều đến từ đúng dữ liệu bạn nhập vào. Công cụ không thêm từ ngữ, không bịa sự thật và không thay đổi giọng văn của bạn.',
      },
      {
        question: 'Làm sao thêm bước hay mục danh sách kiểm tra?',
        answer:
          'Chỉ cần bấm Enter để thêm dòng mới trong ô Ý chính; mỗi dòng không trống sẽ tự động định dạng thành mục đánh số, gạch đầu dòng hay ô kiểm. Bạn có thể thêm bao nhiêu mục tùy thích mà không cần chỉnh lại định dạng tay.',
      },
      {
        question: 'Tôi có thể giữ dòng trống khi dán vào Instagram sau đó không?',
        answer:
          'Có. Nếu ứng dụng vẫn thu gọn khoảng cách trên điện thoại, hãy đưa chú thích đã sao chép vào Trình định dạng ngắt dòng Instagram và tiểu sử của chúng tôi để thêm ký tự đệm vô hình. Nhờ vậy các đoạn văn của bạn giữ nguyên khoảng cách khi đăng.',
      },
      {
        question: 'Dùng Trình tạo mẫu chú thích có miễn phí không?',
        answer:
          'Có, công cụ miễn phí khi dùng trong trình duyệt, không cần đăng ký, và bản nháp của bạn được xử lý ngay trên máy mà không tải lên đâu cả. Bạn có thể soạn bao nhiêu chú thích tùy thích.',
      },
      {
        question: 'Mẫu PAS trong Trình tạo mẫu chú thích là gì?',
        answer:
          'PAS là viết tắt của Vấn đề–Khuấy động–Giải pháp: nêu vấn đề của người đọc, xoáy sâu vào lý do nó gây khó chịu, rồi trình bày giải pháp và lời kêu gọi hành động của bạn. Đây là một trong những khung viết quảng cáo cổ điển và hiệu quả nhất.',
      },
      {
        question: 'Công cụ này gồm những mẫu chú thích nào?',
        answer:
          'Nó gồm năm mẫu: Vấn đề–Khuấy động–Giải pháp, Phân tích có thể hành động, Trước–Sau–Cầu nối, Danh sách kiểm tra đánh giá, và Lầm tưởng với Thực tế. Mỗi mẫu phù hợp với một mục tiêu khác nhau, từ ra mắt sản phẩm đến bài đăng giáo dục.',
      },
      {
        question: 'Tôi có thể dùng Trình tạo mẫu chú thích cho bài đăng LinkedIn không?',
        answer:
          'Có, bố cục đoạn mở đầu, ý chính và lời kêu gọi hành động rất hợp với LinkedIn, và bộ đếm trực tiếp giúp bạn nằm trong giới hạn của nền tảng. Bài đăng có cấu trúc rõ ràng thường nhận được nhiều tương tác hơn trên LinkedIn.',
      },
      {
        question: 'Tôi có thể dùng Trình tạo mẫu chú thích cho chú thích Instagram không?',
        answer:
          'Có, các mẫu định dạng gọn gàng cho chú thích Instagram, và bạn có thể thêm hashtag ở cuối chú thích đã tạo. Chỉ cần nhớ chú thích Instagram giới hạn 2.200 ký tự và đoạn mở đầu nên nằm trước nếp gấp 125 ký tự.',
      },
      {
        question: 'Mẫu chú thích Trước–Sau–Cầu nối là gì?',
        answer:
          'Nó cho thấy tình trạng hiện tại của người đọc, vẽ ra trạng thái sau khi đã cải thiện, rồi nối khoảng cách bằng sản phẩm, phương pháp hay lời khuyên của bạn. Mẫu này rất hợp với câu chuyện trước và sau khi dùng sản phẩm.',
      },
      {
        question: 'Bộ đếm ký tự trong công cụ tạo chú thích hoạt động thế nào?',
        answer:
          'Nó đếm ký tự và từ trực tiếp khi bạn gõ và cảnh báo khi bản nháp vượt qua giới hạn như 280 ký tự của X. Nhờ vậy bạn biết ngay khi nào cần cắt ngắn đoạn mở đầu hay ý chính trước khi sao chép.',
      },
      {
        question: 'Tôi có thể chuyển mẫu mà không mất văn bản không?',
        answer:
          'Có, việc chuyển mẫu sẽ dùng lại đoạn mở đầu, ý chính và lời kêu gọi hành động hiện có của bạn, nên bạn có thể so sánh các cấu trúc mà không cần gõ lại. Hãy thử cùng ghi chú qua cả năm mẫu để chọn khung hợp nhất.',
      },
      {
        question: 'Công cụ có tự thêm hashtag không?',
        answer:
          'Không, nó chỉ đặt những hashtag do chính bạn nhập, nên bạn kiểm soát chính xác thẻ nào xuất hiện cùng mỗi chú thích. Nhờ vậy không có hashtag lạ nào xuất hiện trong bài đăng của bạn mà bạn không hay biết.',
      },
      {
        question: 'Đoạn mở đầu hay cho chú thích mạng xã hội là gì?',
        answer:
          'Một đoạn mở đầu hay nêu rõ lợi ích, sự thật bất ngờ hay vấn đề quen thuộc trong một dòng ngắn khiến người đọc dừng lướt. Hãy viết đoạn mở đầu như thể đó là câu duy nhất người đọc sẽ thấy, vì thường đúng là như vậy.',
      },
      {
        question: 'Tôi có thể dùng công cụ tạo chú thích cho bài đăng X (Twitter) không?',
        answer:
          'Có, bộ đếm cảnh báo ở mức 280 ký tự, nên bạn có thể cắt ngắn đoạn mở đầu và ý chính cho đến khi bài đăng vừa trong một tweet duy nhất. Nếu bài vẫn dài, hãy tách phần còn lại thành một chuỗi tweet.',
      },
      {
        question: 'Mẫu chú thích Lầm tưởng với Thực tế dùng để làm gì?',
        answer:
          'Nó ghép một quan niệm sai lầm phổ biến với sự thật đúng, rất hợp cho bài đăng giáo dục và việc sửa những lời khuyên sai trong lĩnh vực của bạn. Định dạng đối lập này thường thu hút bình luận và chia sẻ.',
      },
      {
        question: 'Tôi có thể sửa chú thích sau khi sao chép không?',
        answer:
          'Có, văn bản đã sao chép là văn bản thuần túy, nên bạn có thể chỉnh từ ngữ, emoji hay dấu ngắt dòng trong ứng dụng lên lịch trước khi đăng. Hãy đọc lại một lần cuối để bắt lỗi gõ trước khi bài đăng lên sóng.',
      },
      {
        question: 'Công cụ có lưu chú thích của tôi không?',
        answer:
          'Không, bản nháp chỉ tồn tại trong tab trình duyệt của bạn, nên hãy sao chép chú thích đã hoàn thành vào ghi chú hay công cụ lên lịch của bạn trước khi đóng trang. Nếu đóng tab mà chưa sao chép, bạn sẽ phải soạn lại từ đầu.',
      },
      {
        question: 'Tôi nên viết gì trong ô lời kêu gọi hành động?',
        answer:
          'Hãy viết một bước tiếp theo rõ ràng, ví dụ bình luận, lưu bài đăng, nhấp vào liên kết của bạn, hay theo dõi tài khoản của bạn. Một lời kêu gọi duy nhất và cụ thể luôn hiệu quả hơn nhiều yêu cầu chung chung cùng lúc.',
      },
      {
        question: 'Tôi có thể dùng công cụ tạo chú thích cho thông báo ra mắt sản phẩm không?',
        answer:
          'Có, mẫu PAS hay Trước–Sau–Cầu nối rất hợp với buổi ra mắt: nêu vấn đề, cho thấy kết quả, và kết thúc bằng nơi mua sản phẩm. Hãy thêm liên kết hay hướng dẫn rõ ràng để người đọc biết phải làm gì tiếp theo.',
      },
      {
        question: 'Vì sao công cụ không viết lại hay cải thiện cách diễn đạt của tôi?',
        answer:
          'Nó được thiết kế xác định một cách có chủ ý, để giọng văn và sự thật của bạn giữ nguyên đúng như bạn viết thay vì bị thay bằng bản sao chung chung do máy tạo ra. Bạn là người hiểu rõ nhất về độc giả của mình, còn công cụ chỉ lo phần cấu trúc.',
      },
    ],
  },
  'social-handle-formatter': {
    instructions: [
      {
        title: 'Nhập tên thương hiệu hay tên nhà sáng tạo',
        description:
          'Gõ tên thương hiệu hay tên hiển thị của bạn (ví dụ Utility Hub) để tạo các ứng viên handle gọn gàng và nhất quán.',
      },
      {
        title: 'Thử các biến thể hay sửa trực tiếp',
        description:
          'Nhấp vào bất kỳ viên biến thể nào hay tùy chỉnh Handle đang dùng để thử tiền tố và hậu tố như get, use, hq hay studio.',
      },
      {
        title: 'Xem mức tuân thủ cú pháp theo từng nền tảng',
        description:
          'Kiểm tra trạng thái Định dạng hợp lệ của mỗi ứng viên trên X, Instagram, TikTok, YouTube, Threads và GitHub.',
      },
      {
        title: 'Sửa ký tự không hợp lệ',
        description:
          'Nếu một nền tảng gắn cờ handle, hãy bỏ ký tự không được phép — ví dụ bỏ dấu gạch ngang cho X và Instagram, hay bỏ dấu gạch dưới cho GitHub.',
      },
      {
        title: 'Xem mức tuân thủ cú pháp và mở URL',
        description:
          'Kiểm tra trạng thái Định dạng hợp lệ trên X, Instagram, TikTok, YouTube, Threads và GitHub, rồi bấm Kiểm tra URL để xem trạng thái đăng ký trực tiếp.',
      },
      {
        title: 'Mẹo: sao chép danh sách rút gọn trước khi đăng ký',
        description:
          'Sao chép các handle đạt yêu cầu trên mọi nền tảng bạn quan tâm, rồi đăng ký từng cái một, bắt đầu từ mạng xã hội có lượng khán giả lớn nhất của bạn.',
      },
    ],
    examples: [
      {
        title: 'So sánh handle có gạch ngang với gạch dưới trên các nền tảng',
        input: 'Handle: utility-hub',
        output: 'Hợp lệ trên GitHub và YouTube @handle · Không hợp lệ trên X và Instagram (không cho dùng gạch ngang)',
        explanation: 'Giúp bạn tránh chọn handle thương hiệu không thể giống hệt nhau trên các mạng xã hội lớn.',
      },
      {
        title: 'Kiểm tra giới hạn 15 ký tự của X',
        input: 'Handle: utilityflowtools (17 ký tự)',
        output: 'Không hợp lệ trên X — dài hơn 15 ký tự · Hợp lệ trên Instagram và TikTok',
        explanation: 'Tên người dùng X tối đa 15 ký tự, nên handle dài sẽ không dùng được ở đó.',
      },
    ],
    benefits: [
      'Phát hiện sớm sự không khớp giữa các nền tảng (như gạch ngang không dùng được trên X/Instagram nhưng được phép trên GitHub/YouTube)',
      'Áp dụng đúng giới hạn ký tự chính xác như mức tối đa 15 ký tự nghiêm ngặt của X',
      'Không bao giờ giả mạo huy hiệu "Còn trống" trực tiếp khi ngoại tuyến — thay vào đó cung cấp liên kết hồ sơ có thể nhấp',
      'Sao chép @handle vào clipboard chỉ với một cú nhấp',
    ],
    useCases: [
      'Đặt tên cho startup, podcast, bản tin hay dự án mã nguồn mở mới một cách nhất quán',
      'Tìm tiền tố hay hậu tố dự phòng khi handle đúng một từ đã bị lấy',
      'Kiểm tra handle 18 ký tự đề xuất có vượt quá giới hạn 15 ký tự của X không',
      'Chuẩn bị danh sách kiểm tra ra mắt gồm mọi URL hồ sơ mạng xã hội chính thức',
    ],
    faqs: [
      {
        question: 'Vì sao công cụ không hiển thị huy hiệu "Còn trống" màu xanh trực tiếp?',
        answer:
          'Các mạng xã hội lớn chặn kiểm tra CORS từ trình duyệt chưa đăng nhập và giới hạn tốc độ việc quét tình trạng còn trống tự động. Thay vì hiển thị phỏng đoán không đáng tin hay bịa đặt, công cụ này kiểm tra quy tắc cú pháp chính thức của nền tảng ngay trên máy và đưa liên kết URL trực tiếp để bạn kiểm tra từng nền tảng một cách chính xác.',
      },
      {
        question: 'Ký tự handle nào hoạt động trên hầu hết mọi mạng lớn?',
        answer:
          'Chữ thường (a–z), chữ số (0–9) và dấu gạch dưới (_), trong khoảng 4–15 ký tự, hoạt động đồng thời trên X, Instagram, TikTok, YouTube và Threads. Đây là vùng an toàn nhất nếu bạn muốn một handle giống hệt nhau ở khắp mọi nơi.',
      },
      {
        question: 'Vì sao GitHub từ chối dấu gạch dưới trong handle?',
        answer:
          'Tên người dùng GitHub chỉ cho phép chữ và số cùng dấu gạch ngang đơn không ở đầu hay cuối, trong khi X và Instagram không cho dùng dấu gạch ngang. Mỗi nền tảng tự đặt quy tắc riêng, nên một handle hợp lệ ở nơi này có thể không hợp lệ ở nơi khác.',
      },
      {
        question: 'Dùng Trình định dạng handle mạng xã hội có miễn phí không?',
        answer:
          'Có, công cụ miễn phí khi dùng trong trình duyệt, không cần đăng ký, và tên thương hiệu cùng ý tưởng handle của bạn được xử lý ngay trên máy mà không tải lên đâu cả. Bạn có thể thử bao nhiêu tên tùy thích.',
      },
      {
        question: 'Độ dài handle tối đa trên X là bao nhiêu?',
        answer:
          'Tên người dùng X dài tối đa 15 ký tự, nên công cụ sẽ gắn cờ bất kỳ ứng viên nào dài hơn thế đối với X. Nếu tên thương hiệu của bạn dài hơn, hãy thử rút gọn hay thêm tiền tố ngắn để vừa giới hạn.',
      },
      {
        question: 'Làm sao kiểm tra handle mạng xã hội có thực sự còn trống không?',
        answer:
          'Hãy nhấp vào liên kết Kiểm tra URL của từng nền tảng để mở trang hồ sơ trực tiếp; nếu trang hiển thị một hồ sơ thật, handle đó đã bị lấy. Nếu trang báo không tìm thấy, handle có thể còn trống và bạn nên đăng ký ngay.',
      },
      {
        question: 'Vì sao dấu gạch ngang dùng được trên GitHub nhưng không dùng được trên X hay Instagram?',
        answer:
          'Mỗi nền tảng tự đặt ký tự cho phép: GitHub cho phép dấu gạch ngang, còn X và Instagram chỉ cho phép chữ cái, chữ số và dấu gạch dưới. Vì vậy một handle có gạch ngang sẽ không thể giống hệt nhau trên mọi nền tảng.',
      },
      {
        question: 'Tôi nên thử tiền tố handle nào nếu tên chính xác của tôi đã bị lấy?',
        answer:
          'Các tiền tố và hậu tố phổ biến gồm get, use, the, hq, studio, official và app — công cụ sẽ tạo sẵn các biến thể này để bạn thử. Hãy chọn một tiền tố dùng nhất quán trên mọi nền tảng thay vì mỗi nơi một kiểu khác nhau.',
      },
      {
        question: 'Trình định dạng handle mạng xã hội có kiểm tra handle YouTube không?',
        answer:
          'Có, nó kiểm tra ứng viên theo quy tắc ký tự @handle của YouTube và đưa cho bạn liên kết trực tiếp để kiểm tra trạng thái trực tiếp của handle. Nhờ vậy bạn biết ngay handle YouTube của mình có khớp với các nền tảng khác không.',
      },
      {
        question: 'Độ dài handle tối thiểu trên hầu hết nền tảng là bao nhiêu?',
        answer:
          'Hầu hết nền tảng yêu cầu ít nhất vài ký tự, và handle hoạt động trên X, Instagram, TikTok, YouTube và Threads thường dài từ 4 đến 15 ký tự. Handle quá ngắn có thể đã bị lấy hoặc bị nền tảng giữ lại.',
      },
      {
        question: 'Handle của tôi có nên giống nhau trên mọi nền tảng mạng xã hội không?',
        answer:
          'Handle giống nhau giúp thương hiệu của bạn dễ tìm hơn và khó bị mạo danh hơn, nên hãy cố chọn một handle đạt quy tắc trên mọi nền tảng bạn dùng. Sự nhất quán này cũng giúp khán giả nhớ tên bạn dễ dàng hơn.',
      },
      {
        question: 'Tôi có thể dùng số trong handle mạng xã hội không?',
        answer:
          'Có, số được phép trên cả sáu nền tảng mà công cụ này kiểm tra, dù handle bắt đầu bằng số có thể trông kém gọn gàng. Số ở cuối handle, ví dụ năm thành lập, thường trông tự nhiên hơn số ở đầu.',
      },
      {
        question: 'Vì sao công cụ nói handle của tôi hợp lệ nhưng nền tảng lại từ chối?',
        answer:
          'Cú pháp hợp lệ chỉ là một kiểm tra; nền tảng cũng có thể từ chối handle vì nó đã bị lấy, đã được giữ lại, hay bị chặn theo chính sách. Hãy mở liên kết Kiểm tra URL để xem trạng thái thật và thử một biến thể khác nếu cần.',
      },
      {
        question: 'Trình định dạng handle mạng xã hội có kiểm tra handle Threads không?',
        answer:
          'Có, nó kiểm tra ứng viên theo quy tắc tên người dùng Threads cùng với X, Instagram, TikTok, YouTube và GitHub. Nhờ vậy bạn có thể lên kế hoạch cho cả sáu nền tảng trong cùng một nơi, và hãy kiểm tra tất cả trước khi công bố để thương hiệu của bạn nhất quán ở khắp mọi nơi.',
      },
      {
        question: 'Tôi có thể dùng dấu chấm trong handle mạng xã hội không?',
        answer:
          'Instagram cho phép dấu chấm trong tên người dùng, nhưng X, TikTok và GitHub thì không, nên handle có dấu chấm sẽ không giống nhau ở mọi nơi. Nếu sự nhất quán quan trọng với bạn, hãy tránh dùng dấu chấm.',
      },
      {
        question: 'Làm sao chọn handle cho startup hay podcast mới?',
        answer:
          'Hãy nhập tên thương hiệu, rút gọn các biến thể đạt yêu cầu trên mọi nền tảng, rồi đăng ký cùng một handle ở khắp mọi nơi trước khi công bố. Đăng ký sớm sẽ tránh việc ai đó lấy mất tên của bạn khi bạn nổi tiếng hơn.',
      },
      {
        question: 'Tôi có thể thử handle có dấu gạch dưới trên GitHub không?',
        answer:
          'Bạn có thể thử, nhưng GitHub sẽ từ chối dấu gạch dưới, nên công cụ gắn cờ nó là không hợp lệ đối với GitHub ngay cả khi nó đạt yêu cầu trên X và Instagram. Hãy chuẩn bị một biến thể dùng dấu gạch ngang cho GitHub nếu cần.',
      },
      {
        question: 'Ý tưởng tên thương hiệu của tôi có được tải lên máy chủ không?',
        answer:
          'Không, mọi tạo handle và kiểm tra diễn ra ngay trong trình duyệt của bạn, nên ý tưởng đặt tên của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm thử nghiệm với những tên thương hiệu chưa công bố.',
      },
      {
        question: 'Tôi nên làm gì nếu handle lý tưởng của tôi đã bị lấy trên một nền tảng?',
        answer:
          'Hãy thử một tiền tố hay hậu tố nhất quán trên mọi nền tảng thay vì dùng tên khác nhau trên từng mạng, để thương hiệu của bạn vẫn dễ tìm. Đổi tên trên một nền tảng duy nhất sẽ khiến khán giả khó tìm thấy bạn ở nơi đó.',
      },
      {
        question: 'Tôi có thể sao chép handle trực tiếp từ công cụ không?',
        answer:
          'Có, công cụ có tính năng sao chép bằng một cú nhấp cho handle đang dùng, để bạn dán vào form đăng ký mà không cần gõ lại. Nhờ vậy bạn tránh được lỗi gõ khi đăng ký cùng handle trên nhiều nền tảng.',
      },
    ],
  },
};
