// Detail content for VI tools — batch 2.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'base64-encoder-decoder': {
    instructions: [
      {
        title: 'Chọn Encode hoặc Decode',
        description:
          'Chọn Encode to Base64 hoặc Decode Base64 ở phía trên khu vực làm việc, tùy theo bạn muốn mã hóa văn bản hay giải mã một chuỗi Base64.',
      },
      {
        title: 'Dán văn bản hoặc chuỗi Base64 của bạn',
        description:
          'Nhập văn bản UTF-8 cần mã hóa, hoặc chuỗi Base64 cần giải mã, vào ô nhập liệu. Bạn có thể dán trực tiếp từ tài liệu, API hay email.',
      },
      {
        title: 'Cấu hình các tùy chọn Base64',
        description:
          'Ở chế độ Encode, bạn có thể bật đầu ra an toàn cho URL với ký tự - và _ thay cho + và /, hoặc bỏ các ký tự = đệm ở cuối chuỗi.',
      },
      {
        title: 'Kiểm tra kết quả và thông báo xác thực',
        description:
          'Kết quả chuyển đổi hiện ra ngay lập tức. Nếu giải mã thất bại, hãy kiểm tra xem chuỗi có thiếu phần đệm hay chứa ký tự nằm ngoài bảng chữ cái Base64 không.',
      },
      {
        title: 'Sao chép hoặc hoán đổi',
        description:
          'Sao chép kết quả vào clipboard, hoặc bấm Swap để đảo ngược hướng chuyển đổi, dùng chính kết quả hiện tại làm đầu vào mới.',
      },
      {
        title: 'Mẹo: xử lý token an toàn cho URL',
        description:
          'Khi dán token lấy từ URL, hãy bật chế độ an toàn cho URL để các ký tự - và _ được xử lý đúng. Hãy nhớ rằng Base64 chỉ là mã hóa, không phải mã hóa bảo mật, vì vậy đừng bao giờ xem nó như nơi lưu trữ an toàn.',
      },
    ],
    examples: [
      {
        title: 'Mã hóa một chuỗi UTF-8',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation: 'Công cụ dùng TextEncoder để chuyển văn bản thành các byte UTF-8 trước khi chuyển đổi sang Base64.',
      },
      {
        title: 'Tạo header Basic Auth',
        input: 'username:password123',
        output: 'dXNlcm5hbWU6cGFzc3dvcmQxMjM=',
        explanation: 'Mã hóa cặp username:password để chuẩn bị giá trị cho header Authorization: Basic.',
      },
    ],
    benefits: [
      'Mã hóa và giải mã an toàn với UTF-8, tránh lỗi Unicode của btoa và atob cũ',
      'Hỗ trợ bảng chữ cái an toàn cho URL theo RFC 4648 với ký tự - và _, cùng khả năng giải mã chuỗi không có phần đệm',
      'Nút Swap chỉ cần một cú nhấp chuột là đưa kết quả vào ô nhập và đảo ngược chế độ',
      'Chạy hoàn toàn trên máy của bạn, an toàn cho API key và header Basic Auth',
    ],
    useCases: [
      'Mã hóa thông tin đăng nhập HTTP Basic Authentication ngay trên máy',
      'Kiểm tra các payload JSON đã mã Base64 hoặc data URI',
      'Chuẩn bị token Base64 an toàn cho URL để dùng trong tham số truy vấn',
      'Giải mã các đoạn nội dung email hoặc webhook đã mã Base64',
    ],
    faqs: [
      {
        question: 'Vì sao hàm btoa() chuẩn lại thất bại với ký tự Unicode?',
        answer:
          'Hàm btoa() gốc chỉ chấp nhận các điểm mã Latin-1 có một byte, nên nó sẽ báo lỗi khi gặp chữ có dấu, chữ viết khác Latin hay emoji. Công cụ này chuyển văn bản thành các byte UTF-8 bằng TextEncoder trước, vì vậy mọi ngôn ngữ và biểu tượng cảm xúc đều được mã hóa sạch sẽ. Bạn không cần tự xử lý byte hay viết thêm code phụ trợ.',
      },
      {
        question: 'Bộ giải mã có xử lý được Base64 an toàn cho URL mà không có phần đệm "=" không?',
        answer:
          'Có, hoàn toàn được. Trước khi giải mã, bộ giải mã tự động chuyển các ký tự "-" và "_" trở lại thành "+" và "/" rồi khôi phục phần đệm "=" còn thiếu. Nhờ vậy bạn có thể dán trực tiếp token lấy từ URL hay JWT mà không cần chỉnh sửa thủ công. Tính năng này đặc biệt hữu ích khi làm việc với token của API.',
      },
      {
        question: 'Base64 có phải là một dạng mã hóa bảo mật không?',
        answer:
          'Không, Base64 không phải mã hóa bảo mật. Đây chỉ là một định dạng mã hóa để biểu diễn dữ liệu nhị phân hoặc văn bản bằng ký tự ASCII, giúp dữ liệu đi qua các hệ thống chỉ hỗ trợ văn bản. Bất kỳ ai cũng có thể giải mã chuỗi Base64 ngay lập tức, nên đừng bao giờ dùng nó để che giấu mật khẩu hay thông tin nhạy cảm.',
      },
      {
        question: 'Công cụ Base64 Encoder có miễn phí không?',
        answer:
          'Có, Base64 Encoder hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lượng chuỗi bạn chuyển đổi. Bạn có thể mã hóa hay giải mã bao nhiêu lần tùy thích, bất cứ lúc nào, trên bất kỳ thiết bị nào. Mọi xử lý đều diễn ra trong trình duyệt của bạn, nên công cụ luôn sẵn sàng ngay cả khi bạn cần dùng nhiều lần trong ngày.',
      },
      {
        question: 'Một chuỗi Base64 được phép chứa những ký tự nào?',
        answer:
          'Base64 chuẩn dùng các chữ cái A đến Z, a đến z, các chữ số 0 đến 9, cộng với hai ký tự + và /, và dùng dấu = để đệm ở cuối chuỗi. Biến thể an toàn cho URL thay + và / bằng - và _ để chuỗi có thể nằm trong đường dẫn hay tên file. Nếu chuỗi của bạn chứa ký tự khác, bộ giải mã sẽ báo lỗi thay vì đoán mò.',
      },
      {
        question: 'Vì sao kết quả Base64 của tôi lại dài hơn văn bản gốc?',
        answer:
          'Base64 biểu diễn mỗi 3 byte đầu vào bằng 4 ký tự ASCII, vì vậy chuỗi đã mã hóa dài hơn văn bản gốc khoảng một phần ba. Đây là cái giá phải trả để dữ liệu nhị phân có thể đi qua email, JSON hay URL vốn chỉ hỗ trợ văn bản thuần. Phần đệm = ở cuối chuỗi cũng góp thêm một vài ký tự nữa.',
      },
      {
        question: 'Tôi có thể mã hóa emoji và văn bản không phải tiếng Anh sang Base64 không?',
        answer:
          'Có, bạn hoàn toàn có thể. Công cụ mã hóa văn bản thành các byte UTF-8 trước tiên, nên emoji, chữ có dấu tiếng Việt, chữ Hán, chữ Ả Rập và mọi hệ chữ khác đều được mã hóa và giải mã chính xác. Đây chính là điểm khác biệt lớn so với hàm btoa() cũ, vốn chỉ xử lý được ký tự Latin-1 và hay gây lỗi với văn bản quốc tế.',
      },
      {
        question: 'Base64 an toàn cho URL là gì và khi nào nên dùng nó?',
        answer:
          'Base64 an toàn cho URL thay các ký tự + và / bằng - và _, nhờ đó chuỗi đã mã hóa có thể nằm trong URL hoặc tên file mà không cần mã hóa phần trăm. Bạn nên dùng nó cho các token truyền qua tham số truy vấn, đường dẫn hay tên file tải xuống. Với dữ liệu thông thường không nằm trong URL, Base64 chuẩn là đủ và tương thích rộng rãi hơn.',
      },
      {
        question: 'Làm thế nào để giải mã một chuỗi Base64 không có phần đệm?',
        answer:
          'Bạn chỉ cần dán trực tiếp chuỗi đó vào ô nhập, không cần thêm gì cả. Bộ giải mã sẽ tự phát hiện phần đệm = còn thiếu và khôi phục lại trước khi giải mã. Nhờ vậy các token Base64URL thường gặp, vốn hay bị cắt bỏ phần đệm, đều giải mã được ngay. Nếu vẫn lỗi, hãy kiểm tra xem chuỗi có ký tự lạ hay khoảng trắng thừa không.',
      },
      {
        question: 'Base64 Encoder có xử lý được file nhị phân không?',
        answer:
          'Không, công cụ này chỉ mã hóa văn bản. Để mã hóa một file, bạn cần đọc các byte của file trước, điều mà công cụ dựa trên văn bản này không thực hiện. Bạn có thể dùng các công cụ chuyển đổi file chuyên dụng, hoặc đọc file bằng JavaScript rồi dán chuỗi byte dưới dạng văn bản. Với nhu cầu thông thường như token, JSON hay header xác thực, công cụ này là đủ.',
      },
      {
        question: 'Base64 và Base64URL khác nhau như thế nào?',
        answer:
          'Base64URL là biến thể an toàn cho URL của Base64: nó thay + bằng - và / bằng _, đồng thời thường bỏ phần đệm = ở cuối để kết quả an toàn trong URL và tên file. Ngoài hai điểm khác biệt đó, hai định dạng hoàn toàn giống nhau và có thể chuyển đổi qua lại dễ dàng. Công cụ này hỗ trợ cả hai, và bộ giải mã tự nhận diện biến thể nào đang được dùng.',
      },
      {
        question: 'Vì sao văn bản tôi giải mã từ Base64 lại hiện ký tự lạ?',
        answer:
          'Văn bản gốc có thể đã được mã hóa từ một bảng mã byte khác chứ không phải UTF-8, hoặc chuỗi Base64 đã bị hỏng khi sao chép. Hãy thử mã hóa lại nguồn dưới dạng UTF-8 rồi so sánh kết quả, đồng thời kiểm tra xem chuỗi có bị cắt ngắn hay dính thêm ký tự lạ không. Nếu nguồn dùng bảng mã khác như Windows-1252, bạn cần chuyển đổi bảng mã trước.',
      },
      {
        question: 'Tôi có thể mã hóa mật khẩu hoặc khóa bí mật bằng Base64 không?',
        answer:
          'Bạn có thể mã hóa, nhưng tuyệt đối không nên dựa vào đó để bảo mật. Base64 rất dễ đảo ngược, nên bất kỳ ai nhìn thấy chuỗi đã mã hóa cũng có thể giải mã ngay lập tức và đọc được mật khẩu gốc. Nếu cần bảo vệ thông tin nhạy cảm, hãy dùng mã hóa thật sự với khóa mạnh, hoặc lưu khóa bí mật trong trình quản lý mật khẩu thay vì mã hóa Base64.',
      },
      {
        question: 'Làm thế nào để mã hóa văn bản cho header Basic Auth?',
        answer:
          'Bạn ghép tên đăng nhập và mật khẩu thành dạng username:password, mã hóa chuỗi đó sang Base64, rồi dùng kết quả trong request của mình dưới dạng Authorization: Basic, kèm theo giá trị đã mã hóa. Công cụ này thực hiện bước mã hóa ngay trên máy của bạn, nên thông tin đăng nhập không bao giờ rời khỏi trình duyệt. Hãy nhớ dùng HTTPS để bảo vệ header khi truyền đi.',
      },
      {
        question: 'Base64 Encoder có hoạt động ngoại tuyến không?',
        answer:
          'Có, công cụ hoạt động ngoại tuyến sau khi trang đã tải xong. Việc mã hóa và giải mã chạy hoàn toàn trong trình duyệt của bạn mà không cần bất kỳ request mạng nào, nên bạn có thể dùng nó trên máy bay hay nơi không có internet. Bạn chỉ cần kết nối mạng một lần duy nhất để tải trang, sau đó mọi thao tác đều diễn ra ngay trên thiết bị của bạn.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi dán một chuỗi Base64 không hợp lệ vào bộ giải mã?',
        answer:
          'Bộ giải mã sẽ báo lỗi rõ ràng thay vì đoán mò kết quả. Bạn nên kiểm tra các ký tự nằm ngoài bảng chữ cái Base64, phần đệm còn thiếu, hoặc khoảng trắng và dấu xuống dòng lẫn vào chuỗi khi sao chép từ email hay tài liệu. Sau khi dọn sạch chuỗi, bạn dán lại và giải mã bình thường, không mất dữ liệu gốc.',
      },
      {
        question: 'Tôi có thể giải mã data URI Base64 bằng công cụ này không?',
        answer:
          'Có, nếu bạn chỉ dán phần Base64 nằm sau dấu phẩy. Bạn cần xóa tiền tố dạng data:...;base64, trước, vì phần đó không thuộc dữ liệu đã mã hóa. Sau khi tách riêng phần Base64, bạn dán vào bộ giải mã và nhận lại nội dung gốc, có thể là văn bản, JSON hay hình ảnh đã mã hóa dưới dạng văn bản.',
      },
      {
        question: 'Vì sao một số chuỗi Base64 kết thúc bằng dấu "="?',
        answer:
          'Các dấu = là phần đệm được thêm vào khi độ dài đầu vào không phải bội số của ba byte. Phần đệm cho bộ giải mã biết chính xác nhóm cuối cùng biểu diễn bao nhiêu byte, nhờ đó việc giải mã khôi phục đúng dữ liệu gốc. Một chuỗi có thể kết thúc bằng một hoặc hai dấu =, tùy theo số byte thừa, và biến thể Base64URL thường bỏ chúng đi.',
      },
      {
        question: 'Văn bản của tôi có bị tải lên máy chủ khi mã hóa không?',
        answer:
          'Không, văn bản của bạn không bị tải lên đâu cả. Việc mã hóa và giải mã chạy hoàn toàn trong trình duyệt trên máy của bạn, nên các chuỗi nhạy cảm như API key hay mật khẩu không bao giờ rời khỏi thiết bị. Bạn có thể kiểm tra bằng cách ngắt mạng sau khi tải trang, công cụ vẫn hoạt động bình thường và dữ liệu vẫn ở lại máy bạn.',
      },
      {
        question: 'Làm thế nào để chuyển Base64 trở lại văn bản gốc?',
        answer:
          'Bạn chuyển sang chế độ Decode, dán chuỗi Base64 vào ô nhập, và công cụ sẽ trả lại văn bản UTF-8 gốc để bạn sao chép. Nếu chuỗi dùng biến thể an toàn cho URL hoặc thiếu phần đệm, bộ giải mã vẫn tự xử lý mà bạn không cần chỉnh sửa gì thêm. Kết quả hiện ngay lập tức, sẵn sàng để dán vào code hay tài liệu của bạn.',
      },
    ],
  },
  'url-encoder-decoder': {
    instructions: [
      {
        title: 'Chọn Encode hoặc Decode',
        description:
          'Chuyển đổi giữa Encode và Decode, rồi chọn encodeURIComponent cho một giá trị tham số đơn lẻ, hoặc encodeURI khi muốn giữ nguyên các dấu phân tách ://?& trong URL đầy đủ.',
      },
      {
        title: 'Dán URL hoặc chuỗi tham số',
        description:
          'Nhập bất kỳ URL nào hay đoạn mã đã mã hóa phần trăm vào ô Input String or URL, kể cả các liên kết dài với nhiều tham số theo dõi.',
      },
      {
        title: 'Xem kết quả đã mã hóa hoặc giải mã',
        description:
          'Kiểm tra ô kết quả để xác nhận các ký tự đặc biệt như khoảng trắng, & và = đã được mã hóa hay giải mã đúng như bạn mong đợi.',
      },
      {
        title: 'Xem các tham số đã phân tích',
        description:
          'Khi phát hiện một URL đầy đủ hợp lệ, hãy xem bảng Parsed URL Breakdown bên dưới để thấy từng cặp khóa-giá trị trong chuỗi truy vấn sau khi đã giải mã.',
      },
      {
        title: 'Sao chép kết quả',
        description:
          'Bấm Copy để dùng URL đã mã hóa trong code, liên kết hay request API của bạn mà không cần gõ lại từng ký tự.',
      },
      {
        title: 'Khắc phục sự cố: chuỗi % không hợp lệ',
        description:
          'Nếu thấy lỗi về chuỗi % không hợp lệ, hãy tìm một dấu % đứng một mình mà phía sau không có hai chữ số hex, ví dụ %2, rồi sửa lại trước khi giải mã lần nữa.',
      },
    ],
    examples: [
      {
        title: 'Mã hóa một giá trị truy vấn',
        input: 'hello world & friends',
        output: 'hello%20world%20%26%20friends',
        explanation: 'Dùng encodeURIComponent sẽ escape ký tự "&", nhờ đó nó không làm tách chuỗi truy vấn của bạn.',
      },
      {
        title: 'Giải mã một URL đầy đủ',
        input: 'https://example.com/search?q=hello%20world&page=2',
        output: 'q = hello world · page = 2',
        explanation: 'Bảng phân tích sẽ giải mã và hiển thị riêng từng tham số truy vấn.',
      },
    ],
    benefits: [
      'Làm rõ sự khác biệt giữa encodeURIComponent và encodeURI ngay cạnh nhau',
      'Tự động phân tích URL hợp lệ thành giao thức, host, đường dẫn, hash và các dòng truy vấn',
      'Xử lý gọn gàng mã hóa khoảng trắng bằng "+" khi giải mã chuỗi truy vấn của form',
      'Báo cáo rõ ràng các chuỗi % không hợp lệ thay vì thất bại trong im lặng',
    ],
    useCases: [
      'Gỡ lỗi URI chuyển hướng OAuth và các tham số callback',
      'Escape cụm từ tìm kiếm hoặc chuỗi JSON truyền trong tham số truy vấn',
      'Kiểm tra các liên kết chiến dịch UTM có nhiều tham số theo dõi',
      'Giải mã URL trong nhật ký truy cập máy chủ để đọc và rà soát',
    ],
    faqs: [
      {
        question: 'Khi nào nên dùng encodeURIComponent thay vì encodeURI?',
        answer:
          'Bạn nên dùng encodeURIComponent khi mã hóa một giá trị tham số truy vấn đơn lẻ, để các ký tự như & và = được escape và không bị hiểu nhầm thành dấu phân tách. Ngược lại, hãy dùng encodeURI khi mã hóa cả một URL và muốn giữ nguyên https://, dấu /, ? và &. Việc chọn sai hàm là nguyên nhân phổ biến khiến liên kết bị hỏng hoặc tham số bị cắt mất.',
      },
      {
        question: 'Vì sao URL đã giải mã lại biến "+" thành khoảng trắng?',
        answer:
          'Trong chuỗi truy vấn dạng application/x-www-form-urlencoded, dấu "+" biểu diễn một khoảng trắng theo chuẩn của form HTML. Khi giải mã thành phần, công cụ tự động chuẩn hóa "+" thành khoảng trắng cho đúng chuẩn. Tuy nhiên trong phần đường dẫn của URL, dấu "+" vẫn giữ nguyên nghĩa là dấu cộng, vì vậy bạn cần phân biệt hai ngữ cảnh này.',
      },
      {
        question: 'Trình phân tích URL có kiểm tra tên miền có truy cập được không?',
        answer:
          'Không, trình phân tích không hề kiểm tra khả năng truy cập của tên miền. Việc phân tích dùng API URL của trình duyệt và chạy hoàn toàn trên máy của bạn, không gửi bất kỳ request mạng nào tới máy chủ đích. Nhờ vậy bạn có thể phân tích cả những URL nội bộ hay liên kết tạm thời mà không lo bị ghi nhật ký hay tiết lộ địa chỉ.',
      },
      {
        question: 'Công cụ URL Encoder có miễn phí không?',
        answer:
          'Có, URL Encoder hoàn toàn miễn phí, không cần đăng ký và không giới hạn số lượng URL bạn mã hóa hay giải mã. Bạn có thể xử lý bao nhiêu liên kết tùy thích, từ các tham số OAuth ngắn cho tới những URL theo dõi dài hàng trăm ký tự. Mọi thao tác đều chạy trong trình duyệt, nên công cụ luôn sẵn sàng bất cứ khi nào bạn cần kiểm tra nhanh một liên kết.',
      },
      {
        question: 'Mã hóa URL thay đổi những ký tự nào?',
        answer:
          'Mã hóa URL chuyển các ký tự dành riêng và ký tự không an toàn, như khoảng trắng, &, =, ?, # và chữ không phải ASCII, thành dấu % kèm theo hai chữ số hex. Các chữ cái, chữ số và một số dấu an toàn như - hay _ được giữ nguyên. Nhờ vậy URL vẫn hợp lệ khi đi qua email, trình duyệt hay hệ thống chỉ chấp nhận ký tự ASCII.',
      },
      {
        question: 'Trong URL, %20 và + khác nhau như thế nào khi biểu diễn khoảng trắng?',
        answer:
          'Cả hai đều có thể biểu diễn khoảng trắng trong chuỗi truy vấn, nhưng %20 là dạng mã hóa phần trăm chuẩn và dùng được ở mọi vị trí trong URL. Trong khi đó, dấu + chỉ mang nghĩa khoảng trắng trong chuỗi truy vấn đã mã hóa theo dạng form, còn trong phần đường dẫn thì + vẫn là dấu cộng. Vì vậy khi tạo liên kết, bạn nên dùng %20 cho an toàn.',
      },
      {
        question: 'URL Encoder có mã hóa được URL đầy đủ mà vẫn giữ nguyên https:// không?',
        answer:
          'Có, bạn chỉ cần chọn chế độ encodeURI. Chế độ này giữ nguyên scheme, dấu gạch chéo và các dấu phân tách, chỉ mã hóa những ký tự không an toàn như khoảng trắng hay chữ có dấu. Nhờ vậy liên kết vẫn bấm được và trình duyệt vẫn hiểu đúng host, đường dẫn và tham số. Đây là lựa chọn đúng khi bạn cần gửi cả một URL trong email hay tài liệu.',
      },
      {
        question: 'Làm thế nào để mã hóa dấu & trong giá trị truy vấn?',
        answer:
          'Bạn chỉ áp dụng chế độ encodeURIComponent cho riêng giá trị đó, không áp dụng cho cả URL. Hàm này biến & thành %26, nhờ đó dấu & được xem là dữ liệu thay vì dấu phân tách chuỗi truy vấn. Nếu bạn mã hóa cả URL bằng encodeURIComponent, các dấu ? và & phân tách tham số cũng bị mã hóa, khiến máy chủ không còn nhận ra cấu trúc truy vấn nữa.',
      },
      {
        question: 'Vì sao URL đã giải mã của tôi vẫn còn dấu %?',
        answer:
          'Mỗi dấu % kèm hai chữ số hex chỉ được giải mã một lần, nên một giá trị đã mã hóa hai lần như %2520 sẽ trở thành %20 sau một lần giải mã. Bạn chỉ cần chạy giải mã thêm một lần nữa để về dạng hoàn toàn đã giải mã. Hiện tượng này thường xảy ra khi một URL đã mã hóa lại bị mã hóa thêm lần nữa qua một hệ thống trung gian.',
      },
      {
        question: 'Tôi có thể giải mã URL có nhiều tham số truy vấn không?',
        answer:
          'Có, bộ giải mã xử lý toàn bộ chuỗi truy vấn trong một lần, và bảng phân tích sẽ liệt kê riêng từng cặp khóa-giá trị để bạn kiểm tra dễ dàng. Bạn sẽ thấy rõ tham số nào bị thiếu, tham số nào bị mã hóa hai lần, hay tham số theo dõi nào đang được gắn vào liên kết. Điều này rất hữu ích khi rà soát các liên kết UTM hay callback OAuth phức tạp.',
      },
      {
        question: 'URL Encoder có xử lý được ký tự Unicode không?',
        answer:
          'Có, công cụ xử lý tốt ký tự Unicode. Các ký tự không phải ASCII trước tiên được chuyển thành các byte UTF-8, rồi mới mã hóa phần trăm, nên chữ có dấu tiếng Việt, chữ Hán hay emoji đều được mã hóa chính xác. Khi giải mã, quá trình ngược lại sẽ khôi phục đúng văn bản gốc, miễn là nguồn đã mã hóa bằng UTF-8 ngay từ đầu.',
      },
      {
        question: 'Mã hóa phần trăm trong URL là gì?',
        answer:
          'Mã hóa phần trăm thay một ký tự bằng dấu % kèm theo giá trị byte thập lục phân hai chữ số của nó, giúp URL vẫn hợp lệ khi chứa khoảng trắng hay ký tự đặc biệt. Ví dụ, khoảng trắng thành %20 và dấu & thành %26. Cơ chế này ra đời vì URL ban đầu chỉ cho phép ký tự ASCII, và nó vẫn là nền tảng của mọi liên kết web hiện nay.',
      },
      {
        question: 'Làm thế nào để mã hóa URL dùng trong email hoặc tài liệu?',
        answer:
          'Bạn dán URL vào công cụ, chọn chế độ encodeURI rồi sao chép kết quả. Liên kết đã mã hóa vẫn bấm được và không bị gãy khi xuống dòng trong văn bản thuần, vốn là lỗi thường gặp với URL dài chứa khoảng trắng hay ký tự đặc biệt. Cách này đặc biệt hữu ích khi gửi liên kết có tham số tìm kiếm hay ký tự tiếng Việt qua email.',
      },
      {
        question: 'Bộ giải mã URL có xác thực URL không?',
        answer:
          'Công cụ kiểm tra xem đầu vào có phải là URL đúng định dạng hay không, và mọi chuỗi % có hợp lệ không, nhưng nó không kiểm tra tên miền có tồn tại hay trang có tải được không. Bạn vẫn cần mở liên kết trong trình duyệt để xác nhận trang đích thực sự hoạt động. Việc xác thực ở đây chỉ đảm bảo cú pháp, không đảm bảo nội dung hay tính khả dụng.',
      },
      {
        question: 'Tôi có thể mã hóa khoảng trắng thành %20 thay vì + không?',
        answer:
          'Có, bộ mã hóa luôn dùng %20 cho khoảng trắng, đây là dạng chuẩn và an toàn nhất. Dạng + chỉ xuất hiện khi bạn giải mã đầu vào đã mã hóa theo dạng form, nơi dấu + vốn đã mang nghĩa khoảng trắng. Khi tạo URL mới, bạn nên dùng %20 để tránh nhầm lẫn, nhất là trong phần đường dẫn, nơi dấu + không được hiểu là khoảng trắng.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi mã hóa một URL đã mã hóa rồi?',
        answer:
          'Chính các dấu % sẽ bị mã hóa thành %25, tạo ra dạng mã hóa hai lần như %2520. Máy chủ khi giải mã một lần sẽ chỉ về được %20 chứ chưa về khoảng trắng gốc, khiến tham số bị sai. Để trở lại dạng mã hóa một lần, bạn chỉ cần giải mã một lần. Bạn nên tránh mã hóa lặp lại bằng cách kiểm tra xem URL đã chứa % hay chưa.',
      },
      {
        question: 'URL của tôi có bị tải lên máy chủ khi mã hóa không?',
        answer:
          'Không, URL của bạn không bị tải lên đâu cả. Việc mã hóa, giải mã và phân tích đều chạy hoàn toàn trong trình duyệt trên máy của bạn, nên các liên kết riêng tư, token hay tham số nhạy cảm không bao giờ rời khỏi thiết bị. Bạn có thể dùng công cụ cho cả những URL nội bộ hay liên kết đặt lại mật khẩu mà không lo bị lộ ra ngoài.',
      },
      {
        question: 'Làm thế nào để mã hóa phần fragment hay hash của URL?',
        answer:
          'Bạn chỉ mã hóa riêng giá trị fragment bằng encodeURIComponent, rồi tự gắn nó sau dấu # trong URL. Cách này giữ dấu # làm dấu phân tách, không bị mã hóa mất, trong khi phần giá trị chứa khoảng trắng hay ký tự đặc biệt vẫn được mã hóa đúng. Nếu mã hóa cả dấu #, trình duyệt sẽ không còn nhận ra phần hash và trang có thể cuộn sai vị trí.',
      },
      {
        question: 'Vì sao một số URL đã mã hóa trông dài hơn hẳn?',
        answer:
          'Mỗi ký tự đặc biệt hoặc ký tự không phải ASCII sẽ thành ba ký tự, gồm dấu % và hai chữ số hex, nên URL có nhiều khoảng trắng hay ký tự Unicode sẽ dài ra đáng kể. Ví dụ, một từ tiếng Việt có dấu có thể dài gấp ba lần sau khi mã hóa.',
      },
      {
        question: 'URL Encoder có xử lý được URL rất dài không?',
        answer:
          'Có, công cụ xử lý được URL rất dài vì mọi thao tác chạy trên máy của bạn, không có giới hạn tải lên máy chủ. Chỉ cần trình duyệt của bạn chứa được đoạn văn bản đó, việc mã hóa và giải mã sẽ hoàn tất. Với những URL theo dõi cực dài từ quảng cáo hay email marketing, bạn cứ dán toàn bộ vào ô nhập mà không cần cắt ngắn từng phần.',
      },
    ],
  },
  'uuid-generator': {
    instructions: [
      {
        title: 'Chọn UUID v4 hoặc v7',
        description:
          'Chọn v4 cho các định danh ngẫu nhiên chuẩn, hoặc v7 cho khóa chính cơ sở dữ liệu có tiền tố timestamp và sắp xếp được theo thời gian.',
      },
      {
        title: 'Đặt số lượng và định dạng',
        description:
          'Nhập số lượng ID từ 1 đến 100, rồi bật hoặc tắt các tùy chọn Uppercase, Include hyphens hay Wrap in {braces} cho phù hợp với hệ thống của bạn.',
      },
      {
        title: 'Tạo một lô mới',
        description:
          'Bấm Generate UUIDs để tạo lô mới. Mỗi lần bấm sẽ tạo ra một tập hợp định danh ngẫu nhiên hoàn toàn mới, không trùng với lô trước.',
      },
      {
        title: 'Xem lại các ID đã tạo',
        description:
          'Quét qua danh sách để xác nhận phiên bản, kiểu chữ hoa hay thường và định dạng dấu gạch nối khớp với những gì cơ sở dữ liệu hay code của bạn mong đợi.',
      },
      {
        title: 'Sao chép hoặc tải xuống danh sách',
        description:
          'Bấm Copy all để đưa mọi ID vào clipboard, hoặc tải lô đó xuống dưới dạng file .txt để seed bản ghi hay làm dữ liệu kiểm thử.',
      },
      {
        title: 'Mẹo: chọn v7 cho cơ sở dữ liệu',
        description:
          'Nếu bạn lưu ID làm khóa chính, hãy ưu tiên v7 để các dòng mới sắp xếp theo thời gian và giữ chỉ mục của bạn hiệu quả. Khi thứ tự không quan trọng, v4 là đủ và đơn giản hơn.',
      },
    ],
    examples: [
      {
        title: 'UUID v4 chữ thường chuẩn',
        input: 'Version: v4 · Hyphens: On · Uppercase: Off',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation: 'Định danh 128-bit theo RFC 4122, phù hợp làm khóa chính phân tán.',
      },
      {
        title: 'UUID gọn nhẹ không có dấu gạch nối',
        input: 'Version: v4 · Hyphens: Off · Quantity: 3',
        output: '550e8400e29b41d4a716446655440000 (và 2 ID nữa)',
        explanation: 'Bỏ dấu gạch nối cho ra chuỗi hex 32 ký tự gọn nhẹ, tiện dùng cho tên file và khóa ngắn.',
      },
    ],
    benefits: [
      'Dùng crypto.randomUUID và crypto.getRandomValues của trình duyệt, nguồn ngẫu nhiên mạnh về mặt mật mã',
      'Hỗ trợ UUID v7 hiện đại theo RFC 9562 với tiền tố timestamp mili giây 48-bit',
      'Tạo hàng loạt tới 100 ID duy nhất trong một lần bấm',
      'Định dạng được chữ hoa, hex gọn không dấu gạch nối, hoặc chuỗi GUID trong dấu ngoặc nhọn',
    ],
    useCases: [
      'Seed dữ liệu mẫu cho cơ sở dữ liệu và bản ghi kiểm thử migration',
      'Tạo correlation ID, API key và ID kiểm thử webhook',
      'So sánh UUID v7 thân thiện với chỉ mục B-tree và UUID v4 ngẫu nhiên',
      'Tạo hằng số GUID trong dấu ngoặc nhọn cho Windows và C#',
    ],
    faqs: [
      {
        question: 'UUID v7 có lợi thế gì so với UUID v4?',
        answer:
          'UUID v7 mã hóa timestamp Unix tính bằng mili giây vào các bit quan trọng nhất, nhờ đó các ID sắp xếp được theo thứ tự thời gian và giảm phân mảnh chỉ mục B-tree trong cơ sở dữ liệu SQL. Với v4 hoàn toàn ngẫu nhiên, các dòng mới chèn vào sẽ nằm rải rác khắp chỉ mục, khiến việc ghi chậm hơn theo thời gian.',
      },
      {
        question: 'Các UUID này có được tạo bằng Math.random() không?',
        answer:
          'Không, hoàn toàn không phải. Mỗi UUID dùng nguồn ngẫu nhiên mạnh về mặt mật mã từ Web Crypto API của trình duyệt, chứ không dùng Math.random() vốn có thể đoán trước được. Nhờ vậy các ID tạo ra đủ an toàn để dùng trong môi trường production, kể cả làm correlation ID hay token định danh. Bạn không cần lo về chất lượng ngẫu nhiên khi dùng công cụ này.',
      },
      {
        question: 'Làm thế nào để có ID hex 32 ký tự không có dấu gạch ngang?',
        answer:
          'Bạn chỉ cần bỏ chọn tùy chọn "Include hyphens", và toàn bộ lô đã tạo sẽ lập tức bỏ hết dấu gạch ngang, chỉ còn lại chuỗi hex 32 ký tự gọn nhẹ. Định dạng này tiện dùng cho tên file, khóa cache hay các hệ thống yêu cầu ID ngắn gọn. Bạn có thể bật lại dấu gạch nối bất cứ lúc nào mà không cần tạo lại lô mới.',
      },
      {
        question: 'Công cụ UUID Generator có miễn phí không?',
        answer:
          'Có, UUID Generator hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lô bạn tạo. Bạn có thể tạo bao nhiêu ID tùy thích, từ một ID đơn lẻ cho bản ghi kiểm thử cho tới hàng trăm ID để seed cơ sở dữ liệu. Mọi thao tác đều chạy trong trình duyệt của bạn, nên công cụ luôn sẵn sàng mỗi khi bạn cần một lô định danh mới.',
      },
      {
        question: 'UUID là gì và dùng để làm gì?',
        answer:
          'UUID là định danh duy nhất 128-bit, thường được viết dưới dạng 32 chữ số hex chia thành năm nhóm. Nó được dùng làm khóa chính cơ sở dữ liệu, correlation ID để theo dõi request qua nhiều dịch vụ, session token và tên file duy nhất. Nhờ không gian giá trị khổng lồ, các hệ thống phân tán có thể tạo ID độc lập mà không cần phối hợp với nhau hay lo trùng lặp.',
      },
      {
        question: 'Hai UUID đã tạo có bao giờ trùng nhau không?',
        answer:
          'Về mặt thực tế thì không, khả năng trùng lặp gần như bằng không. UUID v4 có 122 bit ngẫu nhiên, nên số lượng ID khả thi lớn tới mức bạn có thể coi các ID đã tạo là duy nhất mà không cần kiểm tra lại. Ngay cả khi tạo hàng tỷ ID, xác suất va chạm vẫn nhỏ hơn nhiều so với khả năng phần cứng của bạn gặp lỗi, vì vậy bạn cứ yên tâm dùng.',
      },
      {
        question: 'UUID v4 và UUID v7 khác nhau như thế nào?',
        answer:
          'UUID v4 hoàn toàn ngẫu nhiên, trong khi UUID v7 bắt đầu bằng timestamp mili giây nên các ID mới sẽ sắp xếp sau các ID cũ hơn. Cả hai đều là định danh 128-bit và đều duy nhất, nhưng v7 phù hợp hơn cho khóa chính cơ sở dữ liệu vì tính sắp xếp theo thời gian. Khi thứ tự không quan trọng, ví dụ token tạm thời, v4 đơn giản và được hỗ trợ rộng rãi hơn.',
      },
      {
        question: 'Tôi có thể tạo bao nhiêu UUID cùng một lúc?',
        answer:
          'Bạn có thể tạo từ 1 đến 100 UUID trong một lô duy nhất. Nếu cần nhiều hơn, bạn chỉ cần bấm Generate thêm lần nữa để có lô mới cùng kích thước, rồi ghép các lô lại với nhau. Giới hạn 100 giúp giao diện gọn nhẹ và tránh làm trình duyệt chậm, trong khi vẫn đủ lớn cho hầu hết nhu cầu seed dữ liệu hay kiểm thử.',
      },
      {
        question: '"Time-ordered" có nghĩa là gì đối với UUID v7?',
        answer:
          'Time-ordered có nghĩa là phần đầu của UUID là timestamp Unix tính bằng mili giây, nên việc sắp xếp các ID theo thứ tự bảng chữ cái cũng đồng thời sắp xếp chúng theo thời gian tạo. Nhờ vậy các dòng mới trong cơ sở dữ liệu nằm gần nhau trong chỉ mục B-tree, giúp việc chèn nhanh hơn và giảm phân mảnh. Đây chính là lý do v7 ra đời để thay thế v4 trong vai trò khóa chính.',
      },
      {
        question: 'Tôi có thể tạo UUID không có dấu gạch nối không?',
        answer:
          'Có, bạn chỉ cần tắt tùy chọn Include hyphens, và mọi UUID trong lô sẽ hiển thị dưới dạng chuỗi hex 32 ký tự gọn nhẹ. Định dạng này thường dùng cho tên file, khóa cache hay các API yêu cầu ID không có dấu phân tách. Bạn có thể bật lại dấu gạch nối bất cứ lúc nào, và công cụ sẽ định dạng lại toàn bộ lô ngay lập tức mà không cần tạo mới.',
      },
      {
        question: 'GUID trong dấu ngoặc nhọn là gì và khi nào cần dùng?',
        answer:
          'GUID trong dấu ngoặc nhọn là UUID được bao trong cặp dấu { }, ví dụ {550e8400-...}. Một số công cụ Microsoft và code C# yêu cầu đúng định dạng này cho các hằng số GUID, đặc biệt trong file cấu hình hay registry. Thay vì tự thêm dấu ngoặc thủ công cho từng ID, bạn chỉ cần bật tùy chọn Wrap in braces và sao chép cả lô đã định dạng sẵn.',
      },
      {
        question: 'UUID tạo ở đây có an toàn để dùng trong production không?',
        answer:
          'Có, các UUID này an toàn cho production. Chúng dùng Web Crypto API của trình duyệt, vốn cung cấp nguồn ngẫu nhiên mạnh về mặt mật mã, phù hợp làm định danh trong hệ thống thật. Nhiều thư viện máy chủ cũng dùng cùng nguồn ngẫu nhiên này. Tuy nhiên, bạn không nên dùng UUID làm khóa bí mật xác thực, vì UUID là định danh chứ không phải secret được thiết kế cho mục đích đó.',
      },
      {
        question: 'Tôi có thể tạo UUID chữ hoa không?',
        answer:
          'Có, bạn chỉ cần bật tùy chọn Uppercase, và toàn bộ lô sẽ hiển thị với các chữ hex A đến F viết hoa. Một số hệ thống cũ hay quy ước của nhóm yêu cầu UUID chữ hoa, và việc chuyển đổi thủ công từng ID rất dễ sót. Với tùy chọn này, bạn tạo đúng định dạng ngay từ đầu, rồi sao chép cả lô vào code hay file SQL mà không cần chỉnh sửa thêm.',
      },
      {
        question: 'Tôi có cần kết nối internet để tạo UUID không?',
        answer:
          'Bạn chỉ cần internet để tải trang lần đầu. Sau khi trang đã tải xong, việc tạo UUID chạy hoàn toàn trong trình duyệt của bạn mà không cần bất kỳ request mạng nào. Nhờ vậy bạn có thể tạo ID ngay cả khi ngoại tuyến, và các ID của bạn cũng không bao giờ được gửi đi đâu. Đây là ưu điểm lớn so với các API tạo UUID trực tuyến.',
      },
      {
        question: 'Danh sách UUID tôi tạo có bị lưu trữ hay tải lên đâu không?',
        answer:
          'Không, danh sách UUID của bạn không bị lưu trữ hay tải lên đâu cả. Việc tạo ID diễn ra hoàn toàn trong trình duyệt trên máy của bạn, nên các ID không bao giờ được gửi tới máy chủ hay ghi vào bất kỳ cơ sở dữ liệu nào. Bạn có thể đóng tab sau khi sao chép, và không còn dấu vết nào của lô ID đó trên internet.',
      },
      {
        question: 'Tôi có thể dùng UUID làm API key không?',
        answer:
          'Bạn có thể dùng UUID làm token mờ để định danh request, nhưng UUID là định danh chứ không phải secret được thiết kế cho xác thực. Với API key thật, bạn nên dùng hệ thống secret chuyên dụng có hỗ trợ xoay vòng, thu hồi và giới hạn quyền. UUID không có các tính năng đó, nên nếu bị lộ, bạn sẽ khó vô hiệu hóa riêng một key mà không ảnh hưởng tới các key khác.',
      },
      {
        question: 'UUID và GUID khác nhau như thế nào?',
        answer:
          'UUID và GUID thực chất là cùng một định dạng 128-bit, chỉ khác tên gọi. GUID là tên Microsoft dùng trong hệ sinh thái Windows và .NET, trong khi UUID là tên chuẩn mở dùng ở mọi nơi khác. Về cấu trúc, độ dài và cách tạo, hai khái niệm hoàn toàn giống nhau, nên bạn có thể dùng thay thế cho nhau mà không lo tương thích, trừ định dạng dấu ngoặc nhọn của GUID.',
      },
      {
        question: 'Vì sao nên chọn UUID v7 làm khóa chính cơ sở dữ liệu?',
        answer:
          'Vì các ID v7 sắp xếp theo thời gian tạo, nên các dòng mới sẽ nằm gần nhau trong chỉ mục B-tree, giúp việc chèn nhanh hơn và giảm phân mảnh chỉ mục so với ID v4 ngẫu nhiên. Với bảng có hàng triệu dòng và ghi liên tục, sự khác biệt về hiệu năng là rất rõ rệt.',
      },
      {
        question: 'Tôi có thể tạo lại cùng một UUID hai lần không?',
        answer:
          'Không, bạn không thể tạo lại cùng một UUID. Mỗi lần tạo đều dùng nguồn ngẫu nhiên mật mã mới, nên bạn sẽ không bao giờ nhận lại đúng UUID cũ. Nếu cần dùng lại một ID, bạn hãy lưu nó vào code, cơ sở dữ liệu hay file ghi chú ngay sau khi tạo. Tính không lặp lại này chính là điều khiến UUID đáng tin cậy làm định danh duy nhất.',
      },
      {
        question: 'Làm thế nào để sao chép tất cả UUID đã tạo cùng một lúc?',
        answer:
          'Bạn chỉ cần bấm Copy all, và toàn bộ lô sẽ được đưa vào clipboard, mỗi UUID trên một dòng, sẵn sàng để dán vào code, bảng tính hay script SQL. Bạn không cần chọn từng ID hay lo sót một ID nào trong lô. Nếu chỉ cần một vài ID, bạn vẫn có thể sao chép riêng từng dòng trong danh sách hiển thị.',
      },
    ],
  },
  'regex-tester': {
    instructions: [
      {
        title: 'Nhập mẫu và cờ của bạn',
        description:
          'Gõ mẫu RegExp vào giữa hai dấu gạch chéo, rồi bật hoặc tắt các cờ g, i, m hay s tùy theo hành vi khớp mà bạn muốn kiểm tra.',
      },
      {
        title: 'Cung cấp văn bản mẫu',
        description:
          'Dán chuỗi kiểm thử vào ô Test String để thấy các chuỗi con khớp được tô sáng ở phía bên phải ngay khi bạn gõ.',
      },
      {
        title: 'Xem các kết quả khớp được tô sáng',
        description:
          'Kiểm tra các chuỗi con được tô sáng và số lượng kết quả khớp, để xác nhận mẫu của bạn tìm đúng thứ mong đợi, không thừa cũng không thiếu.',
      },
      {
        title: 'Xem nhóm và phần thay thế',
        description:
          'Xem vị trí ký tự chính xác và các nhóm bắt $1, $2 của từng kết quả khớp, hoặc thử mẫu thay thế ở phía dưới.',
      },
      {
        title: 'Sửa lỗi cú pháp của mẫu',
        description:
          'Nếu xuất hiện lỗi cú pháp, hãy đọc thông báo, kiểm tra các dấu ngoặc vuông hay ngoặc tròn chưa đóng, rồi chỉnh mẫu cho tới khi kết quả khớp xuất hiện.',
      },
      {
        title: 'Mẹo: kiểm thử trường hợp biên trước khi phát hành',
        description:
          'Trước khi dùng mẫu trong production, hãy thử chuỗi rỗng, ký tự lạ và đầu vào nhiều dòng, đồng thời bật tắt cờ i để kiểm tra tính phân biệt chữ hoa chữ thường.',
      },
    ],
    examples: [
      {
        title: 'Trích xuất phần local và tên miền của email',
        input: 'Pattern: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Text: support@utilityflow.online',
        output: 'Match #1 · $1="support" · $2="utilityflow.online"',
        explanation: 'Các nhóm trong dấu ngoặc tròn cho thấy riêng từng chuỗi con đã bắt được.',
      },
      {
        title: 'Trích xuất số từ một dòng log',
        input: 'Pattern: \\d+ · Text: Order 1042 shipped, 3 items',
        output: 'Match #1: 1042 · Match #2: 3',
        explanation: 'Với cờ g, công cụ tìm và hiển thị mọi con số trong văn bản.',
      },
    ],
    benefits: [
      'Tự động tránh vòng lặp vô hạn khi gặp kết quả khớp có độ dài bằng không',
      'Hiển thị vị trí ký tự chính xác và giá trị nhóm đã bắt cho từng kết quả khớp',
      'Xem trước mẫu thay thế trực tiếp với $1, $2 và $&',
      'Báo cáo lỗi cú pháp RegExp rõ ràng mà không làm sập trang',
    ],
    useCases: [
      'Xác thực mẫu email, slug hay đầu vào form trước khi phát hành',
      'Trích xuất token có cấu trúc từ dòng log hay đoạn HTML',
      'Kiểm thử mẫu tìm-kiếm-và-thay-thế dùng nhóm bắt',
      'Xác nhận hành vi của cờ nhiều dòng (^ / $) và không phân biệt chữ hoa thường',
    ],
    faqs: [
      {
        question: 'Công cụ kiểm thử này dùng regex engine nào?',
        answer:
          'Công cụ dùng regex engine ECMAScript gốc của trình duyệt, tức JavaScript RegExp, nên hành vi khớp giống hệt code JavaScript phía client và Node.js. Nhờ vậy mẫu bạn kiểm thử ở đây sẽ chạy đúng như vậy khi đưa vào ứng dụng thật, không có khác biệt về cú pháp hay cờ. Nếu bạn viết code bằng Python hay PHP, hãy nhớ rằng một số tính năng có thể khác đôi chút.',
      },
      {
        question: 'Vì sao chế độ global ("g") lại quan trọng?',
        answer:
          'Nếu không có cờ "g", RegExp sẽ dừng lại sau kết quả khớp đầu tiên và bạn sẽ bỏ sót các lần xuất hiện còn lại trong văn bản. Khi bật "g", công cụ tìm và tô sáng mọi kết quả khớp trong toàn bộ chuỗi kiểm thử, đồng thời liệt kê vị trí từng cái. Đây là chế độ bạn thường muốn bật khi kiểm tra xem mẫu có khớp quá ít hay quá nhiều chỗ không.',
      },
      {
        question: 'Làm thế nào để khớp qua ký tự xuống dòng bằng "."?',
        answer:
          'Bạn bật cờ "s", còn gọi là dotAll, để ký tự đặc biệt dấu chấm "." cũng khớp với ký tự xuống dòng. Mặc định, dấu chấm khớp mọi ký tự trừ xuống dòng, nên mẫu của bạn sẽ dừng lại ở cuối dòng đầu tiên. Cờ s rất hữu ích khi xử lý văn bản nhiều dòng, ví dụ nội dung HTML hay nhật ký, nơi dữ liệu cần tìm nằm trải qua nhiều dòng.',
      },
      {
        question: 'Công cụ Regex Tester có miễn phí không?',
        answer:
          'Có, Regex Tester hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lượng mẫu hay chuỗi kiểm thử bạn thử nghiệm. Bạn có thể kiểm tra bao nhiêu mẫu tùy thích, từ mẫu email đơn giản cho tới mẫu phân tích log phức tạp, mà không gặp giới hạn nào. Mọi xử lý đều diễn ra trong trình duyệt, nên công cụ luôn sẵn sàng mỗi khi bạn cần.',
      },
      {
        question: 'Regex Tester dùng loại regex nào?',
        answer:
          'Công cụ dùng loại regex JavaScript, tức ECMAScript, cùng engine chạy trong trình duyệt và Node.js, nên các mẫu sẽ hoạt động giống hệt trong code của bạn. Điều này có nghĩa là các tính năng như lookahead, nhóm đặt tên hay cờ u đều sẵn có, nhưng một số cú pháp đặc thù của Python hay PCRE có thể không được hỗ trợ. Bạn nên kiểm tra lại nếu chuyển mẫu giữa các ngôn ngữ.',
      },
      {
        question: 'Làm thế nào để kiểm thử regex xác thực email?',
        answer:
          'Bạn dán một mẫu như ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) rồi thử cả địa chỉ hợp lệ lẫn không hợp lệ trong chuỗi kiểm thử để xem địa chỉ nào khớp. Hãy thử các trường hợp biên như thiếu @, tên miền không có dấu chấm, hay ký tự lạ trong phần local. Một mẫu tốt nên chấp nhận mọi email hợp lệ thường gặp và từ chối rõ ràng các địa chỉ sai định dạng.',
      },
      {
        question: 'Các cờ g, i, m và s trong Regex Tester làm gì?',
        answer:
          'Cờ g tìm mọi kết quả khớp, cờ i làm việc khớp không phân biệt chữ hoa chữ thường, cờ m cho phép ^ và $ khớp ở ranh giới từng dòng, và cờ s cho phép dấu chấm khớp cả ký tự xuống dòng. Bạn có thể kết hợp nhiều cờ cùng lúc, ví dụ gi để tìm mọi kết quả mà không phân biệt hoa thường, tùy theo nhu cầu kiểm thử.',
      },
      {
        question: 'Nhóm bắt hoạt động như thế nào trong Regex Tester?',
        answer:
          'Văn bản nằm trong dấu ngoặc tròn tạo thành một nhóm bắt được đánh số. Sau mỗi kết quả khớp, từng nhóm được liệt kê dưới dạng $1, $2 và tiếp tục như vậy, kèm theo chính xác chuỗi con mà nhóm đó đã bắt được. Nhờ đó bạn có thể trích xuất riêng phần local và tên miền của email, hay dùng các nhóm này trong mẫu thay thế để sắp xếp lại văn bản.',
      },
      {
        question: '.* và .*? trong regex khác nhau như thế nào?',
        answer:
          'Bộ lượng từ .* là tham lam và khớp càng nhiều càng tốt, trong khi .*? là lười biếng và khớp càng ít càng tốt. Ví dụ, với văn bản có hai thẻ HTML, dạng tham lam có thể nuốt trọn từ thẻ đầu tới thẻ cuối, còn dạng lười biếng chỉ khớp tới thẻ đóng gần nhất. Bạn nên dùng dạng lười biếng khi muốn kết quả khớp ngắn nhất có thể.',
      },
      {
        question: 'Làm thế nào để khớp dấu chấm hay dấu ngoặc tròn theo nghĩa đen trong regex?',
        answer:
          'Bạn escape ký tự đó bằng dấu gạch chéo ngược, ví dụ \\. cho dấu chấm hay \\( cho dấu ngoặc tròn, để ký tự được hiểu là văn bản thường thay vì ký tự đặc biệt. Nếu không escape, dấu chấm sẽ khớp bất kỳ ký tự nào, còn dấu ngoặc tròn sẽ bắt đầu một nhóm bắt. Đây là lỗi phổ biến khi viết mẫu khớp địa chỉ IP, tên file hay biểu thức toán học.',
      },
      {
        question: 'Vì sao regex của tôi khớp quá nhiều văn bản?',
        answer:
          'Bạn có thể đang dùng bộ lượng từ tham lam như .* và nó nuốt hết mọi thứ tới kết quả khớp cuối cùng có thể. Hãy chuyển sang bộ lượng từ lười biếng như .*? hoặc thu hẹp lớp ký tự, ví dụ dùng [^"]+ thay cho .+ khi khớp nội dung trong dấu ngoặc kép. Bạn cũng nên kiểm tra xem mẫu có thiếu neo ^ hay $ khiến nó khớp ở vị trí không mong muốn không.',
      },
      {
        question: 'Làm thế nào để dùng $1 và $2 trong phần thay thế?',
        answer:
          'Bạn gõ mẫu thay thế như $2@$1, và công cụ sẽ thay mỗi $n bằng văn bản mà nhóm đánh số tương ứng đã bắt được trong từng kết quả khớp. Nhờ vậy bạn có thể đảo thứ tự họ tên, đổi định dạng ngày tháng hay sắp xếp lại các trường trong log mà không cần viết code.',
      },
      {
        question: 'Regex Tester có thể khớp qua nhiều dòng không?',
        answer:
          'Có, công cụ khớp được qua nhiều dòng. Bạn bật cờ m để ^ và $ hoạt động trên từng dòng riêng lẻ, và bật cờ s nếu cần dấu chấm vượt qua dấu xuống dòng. Kết hợp cả hai cờ, bạn có thể viết mẫu tìm các khối văn bản trải dài nhiều dòng, ví dụ một thẻ HTML mở ở dòng này và đóng ở dòng khác.',
      },
      {
        question: 'Lookahead trong regex là gì?',
        answer:
          'Lookahead dạng (?=...) kiểm tra xem có một mẫu nằm sau vị trí hiện tại hay không, mà không tiêu thụ các ký tự đó, nhờ vậy bạn có thể yêu cầu một điều kiện mà không đưa phần đó vào kết quả khớp. Ví dụ, mẫu mật khẩu có thể dùng lookahead để yêu cầu ít nhất một chữ số và một chữ hoa, trong khi kết quả khớp vẫn là toàn bộ mật khẩu.',
      },
      {
        question: 'Vì sao mẫu của tôi không cho kết quả khớp nào?',
        answer:
          'Bạn hãy kiểm tra lỗi cú pháp, ký tự đặc biệt chưa được escape, hay lớp ký tự loại trừ mất dữ liệu đầu vào của bạn. Cách gỡ lỗi hiệu quả là đơn giản hóa mẫu rồi thêm từng phần một, kiểm tra sau mỗi bước để xem phần nào làm mất kết quả khớp. Bạn cũng nên thử cờ i nếu nghi ngờ vấn đề nằm ở chữ hoa chữ thường.',
      },
      {
        question: 'Làm thế nào để kiểm thử regex với nhiều dòng cùng lúc?',
        answer:
          'Bạn dán toàn bộ mẫu nhiều dòng vào chuỗi kiểm thử rồi bật cờ g. Mọi dòng khớp sẽ được tô sáng và liệt kê kèm vị trí của chúng, giúp bạn thấy ngay mẫu hoạt động ra sao trên dữ liệu thật. Cách này đặc biệt hữu ích với file log, nơi bạn cần kiểm tra xem mẫu có bắt đúng mọi dòng lỗi hay bỏ sót dòng nào không.',
      },
      {
        question: 'Regex Tester có hỗ trợ ký tự Unicode không?',
        answer:
          'Có, regex JavaScript xử lý được văn bản Unicode, và bạn có thể dùng các ký tự escape như \\u{1F600} hay cờ u để khớp Unicode đầy đủ. Với cờ u, các ký tự ngoài mặt phẳng đa ngữ cơ bản như emoji được tính là một ký tự duy nhất thay vì hai đơn vị mã. Nhờ vậy bạn có thể viết mẫu khớp chữ có dấu tiếng Việt, chữ Hán hay emoji một cách chính xác.',
      },
      {
        question: 'Regex hay văn bản kiểm thử của tôi có bị tải lên đâu không?',
        answer:
          'Không, regex và văn bản kiểm thử của bạn không bị tải lên đâu cả. Việc kiểm thử chạy hoàn toàn trong trình duyệt trên máy của bạn, nên các mẫu và dữ liệu mẫu không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm dán cả những đoạn log nội bộ hay dữ liệu nhạy cảm để kiểm thử mà không lo bị lộ ra ngoài hay lưu trữ trên máy chủ.',
      },
      {
        question: 'Catastrophic backtracking là gì và làm sao tránh nó?',
        answer:
          'Hiện tượng này xảy ra khi các bộ lượng từ lồng nhau như (a+)+ buộc engine phải thử một số lượng kết hợp khổng lồ, khiến việc khớp chậm tới mức treo trình duyệt. Bạn nên tránh các bộ lượng từ chồng chéo, dùng lớp ký tự đơn giản hơn, hoặc viết lại mẫu theo hướng rõ ràng hơn, ví dụ thay (a+)+ bằng a+.',
      },
      {
        question: 'Tôi có thể lưu hay chia sẻ mẫu regex của mình không?',
        answer:
          'Công cụ không có tính năng lưu tích hợp, nên bạn hãy sao chép mẫu và chuỗi kiểm thử vào file snippet hay ghi chú trong code. Bạn cũng có thể dán mẫu trực tiếp vào mã nguồn của mình kèm theo ví dụ kiểm thử. Với các mẫu dùng thường xuyên như email hay số điện thoại, bạn nên lưu chúng trong thư viện snippet của nhóm để mọi người cùng dùng.',
      },
    ],
  },
  'jwt-decoder': {
    instructions: [
      {
        title: 'Dán chuỗi JWT của bạn',
        description:
          'Dán một token chuẩn gồm ba đoạn header.payload.signature vào ô nhập, hoặc bấm Load sample JWT để thử một token mẫu có sẵn.',
      },
      {
        title: 'Xem JSON Header và Payload',
        description:
          'Kiểm tra metadata thuật toán như alg và typ cùng các trường claim đã giải mã trong các panel JSON đã định dạng đẹp.',
      },
      {
        title: 'Kiểm tra các claim thời gian',
        description:
          'Xác minh ngày giờ UTC đã chuyển đổi cho các claim iat, nbf và exp, kèm trạng thái còn hiệu lực hay đã hết hạn.',
      },
      {
        title: 'Xem các claim như sub, roles và scopes',
        description:
          'Tìm các claim định danh và quyền như sub, iss, aud, roles và scope để xác nhận token mang đúng những gì API của bạn mong đợi.',
      },
      {
        title: 'Sao chép JSON đã giải mã hay một claim riêng lẻ',
        description:
          'Sao chép toàn bộ JSON header hay payload đã định dạng, hoặc sao chép riêng giá trị của một claim để dán vào code, test hay ticket hỗ trợ.',
      },
      {
        title: 'Khắc phục token không giải mã được',
        description:
          'Hãy xóa khoảng trắng, dấu xuống dòng hay dấu ngoặc kép thừa quanh token. Token có năm đoạn là JWE đã mã hóa, không phải JWT, và không thể giải mã nếu không có khóa giải mã.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra thời gian hết hạn của token',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Header: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation: 'Giải mã các đoạn Base64Url và chuyển claim epoch dạng số thành ngày giờ UTC.',
      },
      {
        title: 'Kiểm tra claim roles',
        input: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMiIsInJvbGVzIjpbImFkbWluIl19.sig',
        output: 'Payload: { "sub": "usr_2", "roles": ["admin"] }',
        explanation: 'Cho thấy token mang role admin mà API của bạn có thể dùng để kiểm tra quyền.',
      },
    ],
    benefits: [
      'Không truyền dữ liệu qua mạng, token không bao giờ rời khỏi tab trình duyệt của bạn',
      'Chuyển các claim số iat, nbf và exp thành ngày giờ UTC dễ đọc',
      'Làm nổi bật việc timestamp hết hạn của token đã qua hay chưa',
      'Nêu rõ việc xác minh chữ ký mật mã cần khóa ký của bạn',
    ],
    useCases: [
      'Gỡ lỗi access token và ID token OAuth2 hay OIDC khi tích hợp API',
      'Xác minh các claim role, scope và tenant do nhà cung cấp xác thực phát hành',
      'Kiểm tra vì sao API từ chối một bearer token đã hết hạn',
      'Xác thực cấu trúc JWT trong các test tích hợp',
    ],
    faqs: [
      {
        question: 'Công cụ JWT Decoder này có xác minh chữ ký token có thật không?',
        answer:
          'Không, công cụ không xác minh chữ ký. Việc giải mã JWT chỉ phân tích các đoạn header và payload dạng Base64Url, còn việc xác minh chữ ký cần secret của máy chủ hay khóa công khai JWKS của bạn và luôn phải thực hiện ở phía backend. Bất kỳ ai cũng có thể tạo token với nội dung tùy ý, nên chỉ đọc payload mà không kiểm tra chữ ký thì không chứng minh được gì.',
      },
      {
        question: 'Dán token xác thực vào đây có an toàn không?',
        answer:
          'Mọi việc giải mã đều chạy trong JavaScript phía client, không ghi nhật ký hay truyền token đi đâu, nên về mặt kỹ thuật thì an toàn trên máy của chính bạn. Tuy vậy, bạn vẫn nên tránh dán thông tin đăng nhập production trên máy tính dùng chung hay máy không đáng tin. Nếu lỡ dán nhầm token thật, bạn nên thu hồi và cấp lại token mới cho chắc chắn.',
      },
      {
        question: 'Vì sao token của tôi thất bại khi có 5 đoạn thay vì 3 đoạn?',
        answer:
          'Token có 5 đoạn là JWE, tức JSON Web Encryption đã mã hóa, chứ không phải JWT đã ký dạng JWS, nên payload của nó không thể giải mã nếu không có khóa giải mã. Trong khi JWT chỉ mã hóa Base64 để dễ truyền tải, JWE mã hóa thật sự nội dung bên trong để chỉ người nhận dự định mới đọc được. Bạn cần dùng đúng công cụ giải mã JWE với khóa phù hợp.',
      },
      {
        question: 'JWT là gì và bộ giải mã này hiển thị những gì?',
        answer:
          'JSON Web Token là một chuỗi nhỏ gọn gồm ba đoạn Base64Url: header, payload và chữ ký. Bộ giải mã này hiển thị JSON header, các claim trong payload và ngày giờ dễ đọc cho các claim thời gian như ngày phát hành hay ngày hết hạn. Nhờ đó bạn nhanh chóng thấy token thuộc về ai, do ai phát hành và còn hiệu lực tới khi nào mà không cần viết code giải mã thủ công.',
      },
      {
        question: 'Công cụ JWT Decoder có miễn phí không?',
        answer:
          'Có, JWT Decoder hoàn toàn miễn phí, không cần đăng ký, không giới hạn sử dụng và không cần tài khoản. Công cụ chạy hoàn toàn trong trình duyệt của bạn, nên bạn có thể giải mã bao nhiêu token tùy thích, từ token kiểm thử trong lúc phát triển cho tới token thật khi gỡ lỗi production. Bạn không cần cài đặt thêm phần mềm hay thư viện nào cả.',
      },
      {
        question: 'Tôi có thể giải mã JWT mà không có secret ký không?',
        answer:
          'Có, bạn hoàn toàn có thể giải mã mà không cần secret ký. Việc giải mã chỉ đọc header và payload dạng Base64Url, vốn không hề được mã hóa bảo mật, nên ai cũng đọc được. Secret ký chỉ cần thiết khi bạn muốn xác minh chữ ký có thật hay không, tức xác nhận token không bị giả mạo hay sửa đổi. Đó là hai việc hoàn toàn khác nhau, đừng nhầm lẫn chúng.',
      },
      {
        question: 'Các trường header alg và typ trong JWT có nghĩa là gì?',
        answer:
          'Trường alg nêu tên thuật toán ký, ví dụ HS256 dùng khóa đối xứng hay RS256 dùng khóa bất đối xứng, còn trường typ thường ghi JWT để nhận diện loại token. Cả hai trường đều nằm trong đoạn header và cho bên nhận biết cần dùng phương pháp nào để xác minh chữ ký. Nếu alg ghi none, token không hề được ký và bạn tuyệt đối không nên tin tưởng nó trong production.',
      },
      {
        question: 'Payload của JWT thường chứa những claim nào?',
        answer:
          'Các claim thường gặp trong payload gồm sub cho chủ thể hay ID người dùng, iss cho bên phát hành, aud cho đối tượng nhận, iat cho thời điểm phát hành, nbf cho thời điểm bắt đầu có hiệu lực và exp cho thời điểm hết hạn, cùng các claim tùy chỉnh như roles hay scopes. Mỗi nhà cung cấp có thể thêm claim riêng, nên bạn nên đọc tài liệu của nhà cung cấp để hiểu hết ý nghĩa.',
      },
      {
        question: 'Làm sao tôi biết JWT của mình đã hết hạn chưa?',
        answer:
          'Bạn chỉ cần so sánh claim exp với thời gian hiện tại. Bộ giải mã này chuyển exp thành ngày giờ UTC rõ ràng và gắn cờ cho biết token còn hiệu lực hay đã hết hạn, nên bạn không cần tự tính toán epoch. Nếu token đã hết hạn, API sẽ từ chối với lỗi 401, và bạn cần làm mới token bằng refresh token hay đăng nhập lại để lấy token mới.',
      },
      {
        question: 'iat, nbf và exp trong JWT khác nhau như thế nào?',
        answer:
          'Claim iat ghi lại thời điểm token được phát hành, nbf ghi thời điểm sớm nhất token bắt đầu có hiệu lực, và exp ghi thời điểm token ngừng có hiệu lực. Cả ba đều là timestamp Unix tính bằng giây. Trong thực tế, iat và nbf thường gần nhau, còn exp xa hơn tùy theo thời gian sống của token, ví dụ một giờ hay một ngày sau khi phát hành.',
      },
      {
        question: 'Vì sao payload JWT đã giải mã của tôi trông khác JSON gốc?',
        answer:
          'Việc giải mã chỉ đảo ngược mã hóa Base64Url, nên payload phải khớp với các claim gốc. Nếu nội dung trông lộn xộn, có thể token đã bị cắt ngắn, bị ngắt dòng khi sao chép, hoặc dính thêm ký tự thừa như dấu ngoặc kép hay dấu chấm câu ở cuối. Bạn hãy dán lại token đầy đủ từ nguồn gốc và kiểm tra xem có đủ ba đoạn tách bằng dấu chấm không.',
      },
      {
        question: 'Tôi có thể giải mã JWT không có chữ ký không?',
        answer:
          'Có, bạn có thể giải mã token không có chữ ký. Token không ký dùng alg none và có đoạn thứ ba rỗng, nhưng header và payload của nó vẫn giải mã bình thường. Tuy nhiên, token không ký không bao giờ nên được tin tưởng trong production, vì bất kỳ ai cũng có thể tự tạo một token như vậy với nội dung tùy ý. Bạn chỉ nên dùng nó cho mục đích kiểm thử cục bộ.',
      },
      {
        question: 'Token của tôi chỉ có hai đoạn thì có nghĩa là gì?',
        answer:
          'Token chỉ có hai đoạn là token sai định dạng hoặc chưa đầy đủ, thường vì một phần đã bị cắt mất khi sao chép từ log hay email. Một JWT đã ký hợp lệ luôn có ba đoạn tách nhau bằng dấu chấm: header, payload và chữ ký. Bạn hãy quay lại nguồn gốc, sao chép lại toàn bộ token, và kiểm tra xem có ký tự xuống dòng hay dấu ngoặc nào làm đứt chuỗi không.',
      },
      {
        question: 'JWT Decoder có lưu trữ hay gửi token của tôi đi đâu không?',
        answer:
          'Không, bộ giải mã không lưu trữ hay gửi token của bạn đi đâu cả. Việc giải mã diễn ra hoàn toàn trong tab trình duyệt của bạn, không có gì được tải lên, ghi nhật ký hay lưu trên máy chủ. Khi bạn đóng tab, token sẽ biến mất khỏi bộ nhớ. Nhờ vậy bạn có thể yên tâm kiểm tra token mà không lo thông tin đăng nhập bị rò rỉ qua mạng.',
      },
      {
        question: 'Vì sao JWT của tôi hoàn toàn không giải mã được?',
        answer:
          'Bạn hãy kiểm tra khoảng trắng, dấu xuống dòng hay dấu ngoặc kép thừa quanh token, và xác nhận token có đúng ba đoạn tách bằng dấu chấm hay không. Token sao chép từ log thường dính thêm dấu câu ở cuối, ví dụ dấu chấm hay dấu phẩy, làm hỏng việc giải mã. Bạn cũng nên kiểm tra xem token có phải là JWE năm đoạn hay không, vì loại đó cần khóa giải mã riêng.',
      },
      {
        question: 'Tôi có thể dùng JWT Decoder này cho access token OAuth2 không?',
        answer:
          'Có, bạn có thể dùng, miễn là access token đó là JWT. Nhiều nhà cung cấp OAuth2 và OpenID Connect phát hành access token và ID token dạng JWT, và công cụ này giải mã các claim của chúng theo cùng một cách. Tuy nhiên, một số nhà cung cấp dùng token mờ không phải JWT, và với loại đó bạn cần tra cứu qua introspection endpoint của nhà cung cấp thay vì giải mã trực tiếp.',
      },
      {
        question: 'JWE là gì và vì sao tôi không giải mã được nó ở đây?',
        answer:
          'JWE là token JSON Web Encryption đã mã hóa với năm đoạn, trong đó payload đã được mã hóa thật sự, nên chỉ người nhận dự định giữ khóa giải mã mới đọc được nội dung. Khác với JWT chỉ mã hóa Base64 để dễ truyền tải, JWE bảo vệ tính bí mật của dữ liệu.',
      },
      {
        question: 'Làm thế nào để kiểm tra các claim JWT như roles và scopes?',
        answer:
          'Bạn dán token vào công cụ rồi đọc panel payload đã giải mã. Các claim roles, scopes, quyền và tenant sẽ xuất hiện ở đó dưới dạng trường JSON thông thường, bạn có thể xem hoặc sao chép từng giá trị. Nếu một claim bạn mong đợi không xuất hiện, có thể nhà cung cấp chưa cấp quyền đó, hoặc token được phát hành với phạm vi hẹp hơn, và bạn cần kiểm tra lại cấu hình.',
      },
      {
        question: 'Giải mã JWT có chứng minh token hợp lệ không?',
        answer:
          'Không, giải mã chỉ cho thấy token chứa nội dung gì, chứ không chứng minh token hợp lệ. Bất kỳ ai cũng có thể tạo token với bất kỳ claim nào, kể cả role admin giả mạo, nên tính hợp lệ phải được xác nhận bằng cách kiểm tra chữ ký và claim exp trên máy chủ của bạn.',
      },
      {
        question: 'Tôi có thể giải mã JWT trên máy tính dùng chung hay máy công cộng không?',
        answer:
          'Bạn có thể giải mã, vì việc giải mã diễn ra trên máy và không có gì được tải lên, nhưng tốt nhất bạn vẫn nên tránh dán token production đang hoạt động trên máy tính mình không kiểm soát. Người khác có thể xem lịch sử clipboard, chụp màn hình hay cài phần mềm ghi phím, và token bị lộ có thể bị dùng để truy cập tài khoản của bạn cho tới khi hết hạn.',
      },
    ],
  },
  'hash-generator': {
    instructions: [
      {
        title: 'Chọn Text Input hoặc Local File Checksum',
        description:
          'Chọn Text Input để băm chuỗi văn bản, hoặc Local File Checksum để xác minh file nhị phân đã tải xuống mà không cần tải file lên máy chủ.',
      },
      {
        title: 'Nhập văn bản hoặc chọn file trên máy',
        description:
          'Gõ hoặc dán văn bản vào ô nhập, hoặc chọn một file từ thiết bị của bạn. File chỉ được đọc bên trong trình duyệt và không bao giờ được tải lên.',
      },
      {
        title: 'Chọn định dạng đầu ra',
        description:
          'Chuyển đổi giữa định dạng Hex với chữ thường hoặc chữ hoa, và định dạng Base64 cho digest của bạn.',
      },
      {
        title: 'Xem cả bốn digest cùng một lúc',
        description:
          'SHA-1, SHA-256, SHA-384 và SHA-512 được tính đồng thời, nên bạn có thể so sánh các thuật toán cạnh nhau mà không cần chạy lại công cụ.',
      },
      {
        title: 'Sao chép bất kỳ digest nào',
        description:
          'Bấm Copy bên cạnh SHA-1, SHA-256, SHA-384 hoặc SHA-512 để sao chép hàm băm đã tính được.',
      },
      {
        title: 'Khắc phục checksum không khớp',
        description:
          'Nếu checksum của file khác giá trị đã công bố, hãy tải lại file và kiểm tra dấu xuống dòng hay khoảng trắng thừa trong đầu vào văn bản, vì chỉ một ký tự thừa cũng làm hàm băm thay đổi hoàn toàn.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 của chuỗi "UtilityFlow"',
        input: 'UtilityFlow',
        output: 'Được tính xác định bằng 64 ký tự hex (256 bit)',
        explanation: 'Chỉ một ký tự thay đổi cũng tạo ra digest hoàn toàn khác.',
      },
      {
        title: 'Xác minh checksum của file đã tải xuống',
        input: 'Local File Checksum · installer.exe · SHA-256',
        output: 'SHA-256 tính được khớp với giá trị nhà cung cấp đã công bố',
        explanation: 'Giá trị khớp nhau có nghĩa là file đã tải xuống đầy đủ và không bị can thiệp.',
      },
    ],
    benefits: [
      'Dùng Web Crypto SubtleCrypto gốc, tăng tốc bằng phần cứng',
      'Xác minh checksum SHA-256 của file trên máy mà không cần tải file lên',
      'Xuất ra cả hai định dạng Hex với chữ hoa hay chữ thường, và Base64',
      'Tính cả bốn thuật toán SHA đồng thời trong một lần chạy',
    ],
    useCases: [
      'Xác minh checksum SHA-256 của trình cài đặt phần mềm hay file nén đã tải xuống',
      'Tạo hàm băm Base64 cho Subresource Integrity (SRI) của script và stylesheet',
      'Kiểm tra kỳ vọng về HMAC hay digest của webhook',
      'Tạo dấu vân tay nội dung xác định cho dữ liệu',
    ],
    faqs: [
      {
        question: 'Tôi có thể đảo ngược hàm băm SHA-256 để lấy lại văn bản gốc không?',
        answer:
          'Không, bạn không thể đảo ngược hàm băm. Hàm băm mật mã là digest toán học một chiều, được thiết kế sao cho không thể suy ra đầu vào gốc từ giá trị băm. Cách duy nhất để tìm lại đầu vào là thử từng ứng viên và băm thử, điều này không khả thi với đầu vào dài hay ngẫu nhiên.',
      },
      {
        question: 'Vì sao SHA-256 và SHA-512 được ưu tiên hơn SHA-1?',
        answer:
          'SHA-1 đã có các điểm yếu va chạm đã biết và không còn được dùng cho chữ ký bảo mật, trong khi SHA-256 và SHA-512 thuộc họ SHA-2 mạnh hơn với digest dài hơn. Các cuộc tấn công va chạm thực tế đã chứng minh SHA-1 có thể bị phá vỡ với chi phí ngày càng rẻ, nên các trình duyệt và nhà phát hành chứng chỉ đã ngừng tin tưởng nó.',
      },
      {
        question: 'File đã tải lên có bị truyền tới máy chủ không?',
        answer:
          'Không, file của bạn không bị truyền tới máy chủ nào cả. File được chọn sẽ được đọc vào ArrayBuffer ngay trong tab trình duyệt của bạn và băm ngay tại đó bằng Web Crypto API. Nhờ vậy bạn có thể xác minh cả những file nhạy cảm như bản dựng nội bộ hay tài liệu riêng tư mà không lo dữ liệu rời khỏi máy. Sau khi đóng tab, không còn dấu vết nào của file trên mạng.',
      },
      {
        question: 'Trình tạo hàm băm dùng để làm gì?',
        answer:
          'Trình tạo hàm băm biến văn bản hoặc file thành một dấu vân tay có độ dài cố định gọi là digest. Các lập trình viên dùng digest để xác minh file tải xuống còn nguyên vẹn, kiểm tra tính toàn vẹn dữ liệu, và tạo giá trị Subresource Integrity cho script hay stylesheet.',
      },
      {
        question: 'Công cụ Hash Generator có miễn phí không?',
        answer:
          'Có, Hash Generator hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lần sử dụng. Mọi việc băm đều chạy trong trình duyệt của bạn, nên bạn có thể băm bao nhiêu chuỗi hay file tùy thích mà không tốn chi phí hay gặp giới hạn. Công cụ đặc biệt hữu ích khi bạn cần xác minh nhanh nhiều file tải xuống trong ngày mà không muốn cài thêm phần mềm.',
      },
      {
        question: 'SHA-1, SHA-256, SHA-384 và SHA-512 khác nhau như thế nào?',
        answer:
          'Chúng đều là thành viên họ SHA nhưng có độ dài digest khác nhau: SHA-1 tạo 160 bit, SHA-256 tạo 256 bit, SHA-384 tạo 384 bit và SHA-512 tạo 512 bit. Digest càng dài thì không gian giá trị càng lớn và càng khó xảy ra va chạm, nên nhìn chung digest dài sẽ mạnh hơn. Trong thực tế, SHA-256 là lựa chọn cân bằng tốt giữa tốc độ và độ an toàn cho hầu hết nhu cầu.',
      },
      {
        question: 'Làm thế nào để xác minh checksum của file đã tải xuống bằng công cụ này?',
        answer:
          'Bạn chuyển sang chế độ Local File Checksum, chọn file đã tải xuống, rồi so sánh giá trị SHA-256 tính được với checksum do nhà cung cấp phần mềm công bố. Nếu hai giá trị khớp nhau từng ký tự, file của bạn còn nguyên vẹn và an toàn để cài đặt.',
      },
      {
        question: 'Tôi nên làm gì nếu checksum của file không khớp?',
        answer:
          'Bạn tuyệt đối không nên cài đặt hay chạy file đó. Hãy tải lại file từ nguồn chính thức rồi băm lại, vì sự không khớp có thể do file bị hỏng trong lúc tải, hoặc tệ hơn là đã bị can thiệp và chèn mã độc. Bạn cũng nên kiểm tra xem mình có đang so sánh đúng thuật toán không, ví dụ SHA-256 với SHA-256, vì mỗi thuật toán cho ra digest hoàn toàn khác nhau.',
      },
      {
        question: 'Đầu ra hàm băm dạng hex và Base64 khác nhau như thế nào?',
        answer:
          'Đầu ra hex hiển thị digest dưới dạng các ký tự thập lục phân, còn đầu ra Base64 hiển thị cùng một digest đó dưới dạng chuỗi Base64 ngắn hơn. Cả hai đều biểu diễn chính xác cùng các byte băm, chỉ khác cách trình bày, nên bạn có thể chuyển đổi qua lại mà không làm mất thông tin. Dạng hex thường dùng để so sánh bằng mắt, còn dạng Base64 thường dùng trong thuộc tính integrity của HTML.',
      },
      {
        question: 'Thay đổi một ký tự có thật sự làm thay đổi toàn bộ hàm băm không?',
        answer:
          'Có, đúng là như vậy. Hàm băm có hiệu ứng thác đổ, nên việc thay một chữ cái, một khoảng trắng hay một dấu xuống dòng cũng tạo ra digest hoàn toàn khác mà không có quy luật nhìn thấy được.',
      },
      {
        question: 'Hai file khác nhau có thể cho cùng một hàm băm SHA-256 không?',
        answer:
          'Về mặt lý thuyết thì va chạm là có thể, nhưng với SHA-256, khả năng này nhỏ tới mức trong thực tế, các giá trị băm khớp nhau được xem là bằng chứng cho thấy hai file giống hệt nhau. Không gian giá trị 256-bit lớn tới mức ngay cả khi băm hàng tỷ file mỗi giây trong hàng tỷ năm, xác suất va chạm vẫn không đáng kể.',
      },
      {
        question: 'Tôi có thể băm file mà không cần tải nó lên không?',
        answer:
          'Có, bạn hoàn toàn có thể băm file mà không tải lên. Công cụ này đọc file vào bộ nhớ trình duyệt rồi băm bằng Web Crypto API, và file không bao giờ rời khỏi thiết bị của bạn. Nhờ vậy bạn có thể xác minh các file lớn hay nhạy cảm ngay trên máy, mà không tốn băng thông tải lên hay lo dữ liệu bị lưu trên máy chủ của bên thứ ba.',
      },
      {
        question: 'Hàm băm Subresource Integrity là gì và làm thế nào để tạo một cái?',
        answer:
          'Hàm băm Subresource Integrity, gọi tắt là SRI, là digest SHA dạng Base64 gắn vào thẻ script hay link, để trình duyệt từ chối các file đã bị can thiệp trên CDN. Bạn chọn đầu ra Base64 ở đây rồi sao chép digest SHA-256 hay SHA-384 vào thuộc tính integrity của thẻ. Khi file tải về không khớp digest, trình duyệt sẽ chặn không thực thi, bảo vệ người dùng khỏi mã độc chèn qua CDN.',
      },
      {
        question: 'Vì sao cùng một văn bản luôn cho cùng một hàm băm?',
        answer:
          'Hàm băm là hàm xác định: đầu vào giống hệt nhau luôn cho ra digest giống hệt nhau. Chính tính xác định này khiến hàm băm hữu ích cho việc xác minh file và phát hiện thay đổi, vì bạn có thể băm lại file bất cứ lúc nào rồi so sánh với giá trị gốc đã công bố. Nếu chỉ một byte thay đổi, digest mới sẽ khác hẳn, và bạn biết ngay file đã bị sửa đổi.',
      },
      {
        question: 'SHA-1 còn an toàn để dùng không?',
        answer:
          'SHA-1 vẫn dùng được cho checksum đơn giản của dữ liệu không nhạy cảm, ví dụ kiểm tra file tải xuống có bị lỗi truyền tải hay không, nhưng không nên dùng cho chữ ký bảo mật hay chứng chỉ, vì đã có các cuộc tấn công va chạm thực tế nhắm vào nó. Nếu bạn đang xây dựng hệ thống mới, hãy chọn SHA-256 trở lên.',
      },
      {
        question: 'Hàm băm SHA-256 dài bao nhiêu ký tự hex?',
        answer:
          'Digest SHA-256 dài 256 bit, hiển thị dưới dạng 64 ký tự thập lục phân. Để so sánh, SHA-1 hiển thị 40 ký tự hex, SHA-384 hiển thị 96 ký tự và SHA-512 hiển thị 128 ký tự. Độ dài này giúp bạn nhận ra ngay mình đang nhìn thuật toán nào chỉ bằng cách đếm ký tự, và cũng giải thích vì sao SHA-512 cho cảm giác an toàn hơn dù chậm hơn đôi chút.',
      },
      {
        question: 'Hash Generator có hoạt động ngoại tuyến không?',
        answer:
          'Có, công cụ hoạt động ngoại tuyến sau khi trang đã tải xong. Việc băm dùng Web Crypto API tích hợp sẵn trong trình duyệt, nên bạn không cần kết nối mạng trong lúc băm văn bản hay file. Bạn chỉ cần tải trang một lần, sau đó có thể băm bao nhiêu lần tùy thích ngay cả trên máy bay hay ở nơi không có internet, mà kết quả vẫn chính xác như khi trực tuyến.',
      },
      {
        question: 'Tôi có thể băm văn bản chứa ký tự đặc biệt hay emoji không?',
        answer:
          'Có, bạn hoàn toàn có thể băm văn bản chứa ký tự đặc biệt hay emoji. Văn bản được mã hóa thành UTF-8 trước khi băm, nên chữ có dấu, ký hiệu và emoji đều được xử lý nhất quán. Nhờ vậy cùng một văn bản sẽ luôn cho cùng một digest trên mọi máy, miễn là cùng dùng UTF-8. Bạn chỉ cần lưu ý không để lẫn dấu xuống dòng hay khoảng trắng thừa ở cuối chuỗi.',
      },
      {
        question: 'Hàm băm và mã hóa khác nhau như thế nào?',
        answer:
          'Mã hóa có thể đảo ngược được bằng khóa, còn hàm băm là digest một chiều không thể đảo ngược. Hàm băm dùng để xác minh tính toàn vẹn, tức kiểm tra dữ liệu có bị thay đổi hay không, còn mã hóa dùng để bảo vệ tính bí mật, tức giữ cho người không có khóa không đọc được nội dung.',
      },
      {
        question: 'Tôi có thể dùng Hash Generator để kiểm tra mật khẩu không?',
        answer:
          'Bạn có thể băm mật khẩu rồi so sánh với digest đã lưu, nhưng trong ứng dụng thật, mật khẩu nên được băm bằng thuật toán băm mật khẩu chậm như bcrypt hay Argon2, chứ không phải SHA-256 thuần. SHA-256 tính quá nhanh nên kẻ tấn công có thể thử hàng tỷ mật khẩu mỗi giây, trong khi bcrypt và Argon2 cố tình làm chậm quá trình băm để việc đoán mật khẩu trở nên không khả thi.',
      },
    ],
  },
  'html-entity-encoder': {
    instructions: [
      {
        title: 'Chọn Encode hoặc Decode',
        description:
          'Chọn Encode Entities để escape mã HTML, hoặc Decode Entities để đưa các entity hiện có trở lại thành ký tự gốc.',
      },
      {
        title: 'Dán HTML hoặc văn bản của bạn',
        description:
          'Dán đoạn mã, giá trị thuộc tính hay chuỗi đã escape vào ô nhập. Các khối code lớn sẽ được dán nguyên vẹn, không bị cắt hay sửa đổi.',
      },
      {
        title: 'Bật hoặc tắt mã hóa ký tự không phải ASCII',
        description:
          'Ở chế độ Encode, bạn quyết định xem các ký tự trên ASCII 127 có nên chuyển thành entity số dạng &#...; hay không.',
      },
      {
        title: 'Xem lại kết quả đã chuyển đổi',
        description:
          'Kiểm tra xem thẻ, dấu ngoặc kép và ký hiệu đã chuyển đổi đúng như mong đợi chưa, và xác nhận không có gì trong đoạn mã của bạn bị thay đổi hay mất mát.',
      },
      {
        title: 'Sao chép hoặc hoán đổi',
        description:
          'Sao chép văn bản đã chuyển đổi, hoặc bấm Swap để đảo ngược quy trình làm việc của bạn từ encode sang decode và ngược lại.',
      },
      {
        title: 'Khắc phục entity bị mã hóa hai lần',
        description:
          'Nếu thấy &amp;lt; trong kết quả, nghĩa là văn bản đã bị mã hóa hai lần. Bạn giải mã một lần để về entity bình thường, rồi chỉ mã hóa một lần duy nhất.',
      },
    ],
    examples: [
      {
        title: 'Escape đoạn HTML để đưa vào tài liệu',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation: 'Ngăn trình duyệt hiểu các thẻ ví dụ như phần tử DOM thật đang hoạt động.',
      },
      {
        title: 'Giải mã văn bản từ RSS feed',
        input: 'Tom &amp; Jerry &mdash; Season 2',
        output: 'Tom & Jerry — Season 2',
        explanation: 'Chuyển các entity có tên trở lại thành ký tự thật để có văn bản dễ đọc.',
      },
    ],
    benefits: [
      'Escape cả năm ký tự dành riêng của XML và HTML gồm &, <, >, " và dấu nháy đơn',
      'Tùy chọn mã hóa entity số cho ký hiệu quốc tế và dấu câu',
      'Giải mã cả entity có tên như &mdash; hay &copy; và entity số như &#8212; hay &#x2014;',
      'Dùng DOMParser để trích xuất văn bản an toàn khi giải mã',
    ],
    useCases: [
      'Chuẩn bị ví dụ code HTML cho bài blog và tài liệu hướng dẫn',
      'Dọn sạch văn bản đã mã HTML lấy từ RSS feed hay API XML',
      'Escape giá trị thuộc tính trong template HTML tĩnh',
      'Kiểm tra ký hiệu đặc biệt hiển thị an toàn trong trang UTF-8 hay ASCII',
    ],
    faqs: [
      {
        question: 'Năm ký tự nào luôn phải escape trong văn bản và thuộc tính HTML?',
        answer:
          'Năm ký tự cần escape là dấu & (ampersand), dấu < (nhỏ hơn), dấu > (lớn hơn), dấu ngoặc kép " và dấu nháy đơn. Nếu không escape, trình duyệt có thể hiểu nhầm chúng thành mã đánh dấu, làm vỡ bố cục trang hay tạo lỗ hổng XSS. Việc escape đầy đủ là thói quen cơ bản nhưng quan trọng nhất khi hiển thị nội dung do người dùng nhập hay ví dụ code trong tài liệu.',
      },
      {
        question: 'Khi nào nên tắt mã hóa ký tự không phải ASCII?',
        answer:
          'Bạn nên tắt khi trang web của mình dùng thẻ <meta charset="UTF-8">, vì khi đó các ký tự quốc tế và ký hiệu chuẩn sẽ hiển thị trực tiếp mà không cần entity số dạng &#...;. Việc giữ nguyên ký tự gốc giúp code dễ đọc hơn và file nhẹ hơn. Bạn chỉ nên bật mã hóa không phải ASCII khi hệ thống đích không hỗ trợ UTF-8 đáng tin cậy hay khi bạn cần đầu ra thuần ASCII.',
      },
      {
        question: 'Bộ giải mã có xử lý entity thập lục phân như &#x27; không?',
        answer:
          'Có, bộ giải mã xử lý tốt cả entity thập phân như &#39; và entity thập lục phân như &#x27;, cùng với các entity có tên chuẩn như &amp;, &nbsp; hay &copy;. Nhờ vậy bạn có thể giải mã văn bản từ nhiều nguồn khác nhau mà không cần quan tâm nguồn đó dùng dạng entity nào. Nếu gặp entity lạ không chuẩn, công cụ sẽ giữ nguyên để bạn tự kiểm tra.',
      },
      {
        question: 'HTML entity là gì?',
        answer:
          'HTML entity là một đoạn mã văn bản biểu diễn ký tự đặc biệt, ví dụ &lt; cho dấu < hay &amp; cho dấu &. Entity cho phép bạn hiển thị các ký tự dành riêng mà trình duyệt không hiểu nhầm thành mã đánh dấu. Nhờ entity, bạn có thể viết ví dụ code trong bài blog, hiển thị ký tự bản quyền hay ký hiệu toán học mà vẫn giữ trang HTML hợp lệ và an toàn.',
      },
      {
        question: 'Công cụ HTML Entity Encoder có miễn phí không?',
        answer:
          'Có, HTML Entity Encoder hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lần sử dụng. Mọi việc mã hóa và giải mã đều chạy trong trình duyệt của bạn, nên bạn có thể xử lý bao nhiêu đoạn code tùy thích mà không tốn chi phí. Công cụ đặc biệt hữu ích cho người viết tài liệu, blogger và lập trình viên front-end cần chuẩn bị ví dụ code mỗi ngày.',
      },
      {
        question: 'Vì sao tôi cần escape ký tự HTML?',
        answer:
          'Trình duyệt hiểu các ký tự <, > và & là mã đánh dấu, nên nếu bạn muốn hiển thị chúng dưới dạng văn bản thường, bạn bắt buộc phải escape. Việc này rất quan trọng với ví dụ code, nội dung do người dùng nhập và template an toàn, vì nếu không escape, một đoạn mã độc có thể được trình duyệt thực thi thay vì hiển thị.',
      },
      {
        question: 'Entity HTML có tên và entity số khác nhau như thế nào?',
        answer:
          'Entity có tên dùng tên dễ đọc, ví dụ &copy; cho ký hiệu bản quyền, còn entity số dùng mã điểm như &#169; hay &#xA9;. Cả hai đều hiển thị cùng một ký tự, chỉ khác cách viết. Entity có tên dễ đọc hơn với con người, nhưng entity số bao phủ mọi ký tự Unicode, kể cả những ký tự không có tên riêng. Bạn có thể dùng loại nào cũng được, miễn là nhất quán trong tài liệu.',
      },
      {
        question: 'Khi nào nên mã hóa ký tự không phải ASCII thành entity?',
        answer:
          'Bạn nên mã hóa khi trang hay hệ thống email không hỗ trợ UTF-8 một cách đáng tin cậy, hoặc khi bạn cần đầu ra thuần ASCII để tương thích với hệ thống cũ. Trên các trang UTF-8 hiện đại, chữ có dấu và ký hiệu có thể giữ nguyên dạng ký tự thường mà vẫn hiển thị đúng. Việc mã hóa không cần thiết chỉ làm code khó đọc hơn và tăng kích thước file một cách vô ích.',
      },
      {
        question: 'HTML bị mã hóa hai lần trông như thế nào?',
        answer:
          'Mã hóa hai lần biến &lt; thành &amp;lt;, nên trình duyệt sẽ hiển thị đúng dòng chữ &lt; thay vì dấu <. Hiện tượng này thường xảy ra khi dữ liệu đi qua hai lớp escape, ví dụ template escape rồi lại được escape thêm lần nữa khi lưu vào cơ sở dữ liệu. Để sửa, bạn chỉ cần giải mã một lần để về dạng entity bình thường, rồi từ đó chỉ mã hóa một lần duy nhất.',
      },
      {
        question: 'Tôi có thể giải mã HTML entity từ trang web đã thu thập không?',
        answer:
          'Có, bạn hoàn toàn có thể giải mã entity từ trang web đã thu thập. Bạn chỉ cần dán văn bản đã escape từ RSS feed, API XML hay trang đã thu thập vào công cụ, rồi giải mã để lấy lại văn bản thuần dễ đọc với ký tự thật.',
      },
      {
        question: 'Mã hóa HTML entity có ngăn được tấn công XSS không?',
        answer:
          'Việc escape đầu vào của người dùng là một lớp phòng thủ quan trọng chống XSS, nhưng tự nó chưa phải giải pháp hoàn chỉnh. Bạn luôn cần kết hợp escape với mã hóa đầu ra đúng ngữ cảnh, xác thực đầu vào và chính sách bảo mật nội dung CSP.',
      },
      {
        question: 'HTML entity cho khoảng trắng không ngắt dòng là gì?',
        answer:
          'Khoảng trắng không ngắt dòng là &nbsp; hay &#160;. Nó giữ hai từ ở trên cùng một dòng và thường được dùng để giữ khoảng cách trong bố cục HTML, ví dụ giữa số và đơn vị hay trong tiêu đề không muốn bị ngắt dòng. Tuy nhiên, bạn không nên lạm dụng &nbsp; để căn lề, vì CSS với thuộc tính white-space hay flexbox sẽ cho kết quả ổn định và dễ bảo trì hơn nhiều.',
      },
      {
        question: 'Làm thế nào để escape dấu ngoặc kép trong thuộc tính HTML?',
        answer:
          'Bạn dùng &quot; cho dấu ngoặc kép và &#39; hay &apos; cho dấu nháy đơn. Việc escape dấu ngoặc sẽ ngăn giá trị thuộc tính kết thúc sớm và làm vỡ mã đánh dấu của bạn. Ví dụ, một giá trị chứa dấu ngoặc kép không được escape có thể khiến trình duyệt hiểu nhầm phần còn lại thành thuộc tính mới, tạo ra lỗi hiển thị hay thậm chí lỗ hổng bảo mật trong form.',
      },
      {
        question: 'Công cụ này có mã hóa được emoji và ký hiệu Unicode khác không?',
        answer:
          'Có, công cụ mã hóa được emoji và ký hiệu Unicode khác. Khi bật mã hóa không phải ASCII, emoji và ký hiệu quốc tế sẽ trở thành entity số như &#128512;. Khi tắt tùy chọn này, chúng vẫn giữ nguyên dạng ký tự Unicode thường. Bạn nên giữ nguyên emoji dưới dạng Unicode trên các trang UTF-8 hiện đại, vì như vậy văn bản dễ đọc hơn và trình duyệt hiển thị emoji đẹp hơn.',
      },
      {
        question: 'Escape HTML và mã hóa URL khác nhau như thế nào?',
        answer:
          'Escape HTML chuyển các ký tự đánh dấu dành riêng thành entity để hiển thị trong trang, còn mã hóa URL chuyển ký tự thành mã phần trăm như %20 để dùng trong liên kết và chuỗi truy vấn. Hai cơ chế phục vụ hai ngữ cảnh khác nhau và không thể thay thế cho nhau.',
      },
      {
        question: 'Bộ mã hóa có thay đổi chữ cái và chữ số bình thường không?',
        answer:
          'Không, bộ mã hóa không thay đổi chữ cái và chữ số bình thường. Chữ cái thường, chữ số và hầu hết dấu câu đều đi qua nguyên vẹn, chỉ các ký tự dành riêng và tùy chọn là các ký hiệu không phải ASCII mới được chuyển đổi.',
      },
      {
        question: 'Vì sao văn bản đã giải mã của tôi hiển thị ký tự lạ?',
        answer:
          'Nguồn gốc có thể đã được mã hóa bằng bảng mã ký tự khác chứ không phải UTF-8, hoặc một entity nào đó đã sai định dạng. Bạn hãy thử giải mã lại từ văn bản đã escape gốc và kiểm tra xem trang có khai báo UTF-8 hay không. Nếu nguồn dùng bảng mã cũ như Windows-1252, bạn cần chuyển đổi bảng mã trước khi giải mã, nếu không các ký tự có dấu sẽ hiển thị sai.',
      },
      {
        question: 'Tôi có thể mã hóa cả một tài liệu HTML bằng công cụ này không?',
        answer:
          'Có, bạn có thể dán cả một tài liệu rồi mã hóa toàn bộ, nhưng kết quả chỉ dùng để hiển thị dưới dạng mẫu code, không phải để lưu thành trang web đang hoạt động. Sau khi mã hóa, mọi thẻ sẽ trở thành văn bản thường và trình duyệt không còn hiểu chúng là mã đánh dấu nữa.',
      },
      {
        question: 'HTML tôi dán vào có bị gửi tới máy chủ không?',
        answer:
          'Không, HTML bạn dán vào không bị gửi tới máy chủ nào cả. Việc mã hóa và giải mã diễn ra hoàn toàn trong trình duyệt của bạn, nên code và văn bản của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm xử lý cả những đoạn code nội bộ hay template chứa thông tin nhạy cảm mà không lo bị lưu trữ hay rò rỉ ra ngoài qua mạng.',
      },
      {
        question: 'HTML entity cho ký tự & là gì?',
        answer:
          'Bản thân ký tự & là &amp; hay &#38;. Bạn luôn phải mã hóa dấu & theo nghĩa đen trước tiên, vì một dấu & không được mã hóa có thể khiến trình duyệt đọc sai các entity theo sau nó. Đây là quy tắc quan trọng nhất khi escape HTML: dấu & phải được xử lý đầu tiên, nếu không các entity bạn tạo ra sau đó có thể bị hiểu nhầm thành một entity khác hoàn toàn.',
      },
    ],
  },
  'json-csv-converter': {
    instructions: [
      {
        title: 'Chọn hướng chuyển đổi',
        description:
          'Chọn JSON sang CSV hoặc CSV sang JSON, rồi chọn dấu phân tách là Dấu phẩy (,), Dấu chấm phẩy (;) hay Tab (TSV) cho phù hợp với file của bạn.',
      },
      {
        title: 'Dán dữ liệu JSON hoặc CSV của bạn',
        description:
          'Chèn dữ liệu vào trình soạn thảo bên trái, hoặc bấm Load sample để thử nghiệm với các trường có dấu ngoặc kép.',
      },
      {
        title: 'Kiểm tra các tiêu đề cột',
        description:
          'Xem lại các tiêu đề đã tạo trước khi chuyển đổi. Đối tượng lồng nhau sẽ thành cột tách bằng dấu chấm như address.city, và khóa bị thiếu sẽ để lại ô trống.',
      },
      {
        title: 'Chuyển đổi dữ liệu của bạn',
        description:
          'Chạy chuyển đổi và xem bản xem trước. Dấu phẩy trong dấu ngoặc kép, dấu ngoặc kép nhúng và dấu xuống dòng trong ô đều được giữ nguyên đúng như chuẩn RFC 4180 yêu cầu.',
      },
      {
        title: 'Sao chép hoặc tải xuống kết quả',
        description:
          'Sao chép kết quả đã chuyển đổi, hoặc tải xuống trực tiếp dưới dạng file .csv hay .json để dùng ngay.',
      },
      {
        title: 'Khắc phục lỗi chuyển đổi',
        description:
          'Nếu chuyển đổi thất bại, hãy kiểm tra cú pháp JSON trước: dấu phẩy thừa ở cuối, dấu ngoặc kép thiếu và dấu ngoặc không khớp. Với CSV, hãy xác nhận bạn đã chọn đúng dấu phân tách mà file thực sự dùng.',
      },
    ],
    examples: [
      {
        title: 'Xử lý dấu phẩy bên trong giá trị CSV',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation: 'Tự động đặt dấu ngoặc kép cho trường chứa dấu phân tách hay dấu ngoặc kép theo chuẩn RFC 4180.',
      },
      {
        title: 'Chuyển CSV sang JSON',
        input: 'name,age\nAisha,28\nBilal,31',
        output: '[{"name":"Aisha","age":28},{"name":"Bilal","age":31}]',
        explanation: 'Dòng đầu tiên trở thành khóa của đối tượng, và mỗi dòng sau thành một đối tượng JSON.',
      },
    ],
    benefits: [
      'Chuyển đổi hai chiều JSON sang CSV và ngược lại trong một không gian làm việc',
      'Làm phẳng đối tượng JSON lồng nhau bằng tiêu đề cột dạng dot-notation',
      'Trình phân tích đúng chuẩn RFC 4180 giữ nguyên dấu phẩy trong dấu ngoặc kép và dấu xuống dòng nhúng',
      'Hỗ trợ dấu phẩy, dấu chấm phẩy cho Excel châu Âu, và dấu tab cho TSV',
    ],
    useCases: [
      'Xuất danh sách JSON từ REST API sang Excel hay Google Sheets',
      'Chuyển dữ liệu xuất từ bảng tính thành file JSON seed cho ứng dụng web',
      'Chuẩn bị tập dữ liệu TSV cho khoa học dữ liệu hay nhập SQL',
      'Xem các file CSV xuất ra với dấu chấm phẩy một cách gọn gàng',
    ],
    faqs: [
      {
        question: 'Chuyển JSON sang CSV xử lý đối tượng có thuộc tính lồng nhau như thế nào?',
        answer:
          'Các đối tượng lồng nhau được làm phẳng thành tên cột tách bằng dấu chấm, ví dụ address.city, còn mảng được tuần tự hóa thành chuỗi JSON gọn trong một ô. Nhờ vậy cấu trúc phân cấp vẫn được giữ lại dưới dạng cột phẳng mà Excel hay Google Sheets đọc được. Khi chuyển ngược lại sang JSON, bạn có thể khôi phục cấu trúc lồng nhau từ các tên cột dạng dấu chấm này nếu cần.',
      },
      {
        question: 'Điều gì xảy ra nếu các đối tượng JSON có khóa hơi khác nhau?',
        answer:
          'Bộ chuyển đổi sẽ quét tất cả đối tượng trong mảng để tạo hợp nhất các tiêu đề cột, rồi để trống ô ở những chỗ khóa bị thiếu. Nhờ vậy không dòng nào bị mất dữ liệu hay lệch cột, và bạn vẫn thấy rõ đối tượng nào thiếu trường nào. Đây là tình huống rất thường gặp với dữ liệu API thực tế, nơi các bản ghi cũ và mới không có cùng tập trường.',
      },
      {
        question: 'Trình phân tích CSV có bị hỏng nếu một ô chứa dấu phẩy trong dấu ngoặc kép không?',
        answer:
          'Không, trình phân tích sẽ không bị hỏng. Trình phân tích dạng máy trạng thái sẽ theo dõi các ô trong dấu ngoặc kép và dấu ngoặc kép đã escape dạng "" một cách chính xác, nên dấu phẩy bên trong ô được hiểu là dữ liệu chứ không phải dấu phân tách cột. Đây là điểm khác biệt lớn so với việc tách chuỗi đơn giản bằng dấu phẩy, vốn sẽ làm lệch toàn bộ hàng.',
      },
      {
        question: 'Công cụ JSON to CSV Converter dùng để làm gì?',
        answer:
          'Công cụ này biến dữ liệu JSON từ API và ứng dụng thành bảng tính CSV mà bạn có thể mở trong Excel hay Google Sheets, đồng thời chuyển file CSV trở lại thành JSON để dùng trong code và cơ sở dữ liệu. Nhờ vậy bạn không cần viết script chuyển đổi mỗi khi cần xem dữ liệu API trong bảng tính, hay cần biến dữ liệu bảng tính thành file seed cho ứng dụng web của mình.',
      },
      {
        question: 'Công cụ JSON to CSV Converter có miễn phí không?',
        answer:
          'Có, JSON to CSV Converter hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lần sử dụng. Mọi việc chuyển đổi đều chạy trong trình duyệt của bạn, nên bạn có thể chuyển đổi bao nhiêu file tùy thích, từ vài dòng dữ liệu kiểm thử cho tới hàng nghìn bản ghi từ API. Bạn không cần cài đặt thêm phần mềm hay thư viện nào để bắt đầu.',
      },
      {
        question: 'Tôi có thể chuyển đổi một đối tượng JSON đơn lẻ thay vì một mảng không?',
        answer:
          'Có, bạn hoàn toàn có thể chuyển đổi một đối tượng đơn lẻ. Một đối tượng đơn sẽ được xem như một dòng, với các khóa của nó làm tiêu đề cột, nên bạn vẫn nhận được file CSV hợp lệ với một dòng dữ liệu. Cách này rất tiện khi bạn chỉ cần xuất một bản ghi duy nhất từ API, ví dụ thông tin một người dùng hay một đơn hàng, sang bảng tính để chia sẻ.',
      },
      {
        question: 'Mảng JSON bên trong đối tượng được chuyển sang CSV như thế nào?',
        answer:
          'Các giá trị mảng được tuần tự hóa thành chuỗi JSON gọn trong một ô duy nhất, nhờ đó dữ liệu vẫn được giữ nguyên và có thể phân tích lại thành mảng sau này. Ví dụ, mảng các thẻ tags sẽ nằm gọn trong một ô dưới dạng ["a","b"], thay vì tách thành nhiều cột khó quản lý. Khi chuyển ngược lại, bạn có thể phân tích chuỗi JSON trong ô để khôi phục mảng gốc.',
      },
      {
        question: 'Tôi nên chọn dấu phân tách nào cho file CSV của mình?',
        answer:
          'Bạn nên dùng dấu phẩy cho CSV chuẩn, dấu chấm phẩy cho file xuất từ Excel châu Âu nơi dấu phẩy là dấu thập phân, và dấu tab cho file TSV dùng trong các công cụ dữ liệu. Việc chọn sai dấu phân tách là nguyên nhân phổ biến khiến Excel mở file với toàn bộ dữ liệu dồn vào một cột.',
      },
      {
        question: 'Bộ chuyển đổi có giữ đúng số và boolean không?',
        answer:
          'Có, số và boolean được ghi dưới dạng giá trị thuần trong CSV, không có dấu ngoặc kép thừa. Khi chuyển ngược lại sang JSON, các giá trị trông giống số hay boolean sẽ được phân tích thành đúng kiểu JSON tương ứng. Nhờ vậy dữ liệu của bạn không bị biến thành chuỗi một cách vô cớ, và các phép tính hay điều kiện trong code vẫn hoạt động đúng sau khi chuyển đổi hai chiều.',
      },
      {
        question: 'Giá trị rỗng hay null trong JSON sang CSV sẽ ra sao?',
        answer:
          'Chuỗi rỗng, giá trị null và khóa bị thiếu đều trở thành ô trống trong CSV, nhờ đó các dòng vẫn thẳng hàng với tiêu đề cột. Cách xử lý này giữ cho bảng tính gọn gàng và dễ đọc, đồng thời tránh việc chèn chữ null theo nghĩa đen vào ô, vốn có thể gây nhầm lẫn khi phân tích dữ liệu.',
      },
      {
        question: 'Tôi có thể chuyển CSV trở lại JSON bằng công cụ này không?',
        answer:
          'Có, bạn hoàn toàn có thể chuyển CSV trở lại JSON. Bạn chỉ cần chuyển sang chế độ CSV to JSON, dán dữ liệu CSV hay TSV của mình rồi chọn dấu phân tách. Dòng đầu tiên sẽ trở thành khóa của đối tượng, và mỗi dòng sau sẽ thành một đối tượng JSON. Cách này rất tiện khi bạn nhận dữ liệu từ bảng tính và cần biến nó thành file seed cho ứng dụng hay API.',
      },
      {
        question: 'Vì sao file CSV của tôi mở trong Excel với toàn bộ dữ liệu dồn vào một cột?',
        answer:
          'Excel có thể đang mong đợi một dấu phân tách khác với dấu mà file của bạn thực sự dùng, ví dụ Excel châu Âu mong dấu chấm phẩy trong khi file của bạn dùng dấu phẩy. Bạn hãy xuất lại với dấu phẩy, hoặc dùng tùy chọn dấu chấm phẩy cho cài đặt ngôn ngữ châu Âu. Bạn cũng có thể dùng tính năng Text to Columns trong Excel để tách lại dữ liệu theo đúng dấu phân tách.',
      },
      {
        question: 'Công cụ JSON to CSV Converter có xử lý được file lớn không?',
        answer:
          'Có, công cụ xử lý được file lớn trong giới hạn bộ nhớ của trình duyệt. Việc chuyển đổi chạy trên máy của bạn, nên tập dữ liệu rất lớn có thể mất vài giây, nhưng dữ liệu của bạn không bao giờ được tải lên máy chủ. Với file hàng chục nghìn dòng, bạn nên đóng các tab nặng khác để trình duyệt có đủ bộ nhớ, và chia nhỏ file nếu trình duyệt bắt đầu chậm lại.',
      },
      {
        question: 'Dữ liệu JSON hay CSV của tôi có bị gửi tới máy chủ không?',
        answer:
          'Không, dữ liệu của bạn không bị gửi tới máy chủ nào cả. Việc chuyển đổi diễn ra hoàn toàn trong tab trình duyệt của bạn, nên dữ liệu vẫn ở trên thiết bị của bạn và sẽ bị xóa khi bạn đóng tab. Nhờ vậy bạn có thể yên tâm chuyển đổi cả những dữ liệu nhạy cảm như danh sách khách hàng hay báo cáo nội bộ mà không lo bị lưu trữ hay rò rỉ ra ngoài.',
      },
      {
        question: 'RFC 4180 là gì và vì sao nó quan trọng với CSV?',
        answer:
          'RFC 4180 là chuẩn định dạng cho file CSV, quy định cách các trường chứa dấu phẩy, dấu ngoặc kép hay dấu xuống dòng phải được bọc trong dấu ngoặc kép, nhờ đó các ứng dụng bảng tính đọc file của bạn chính xác. Nếu không tuân theo chuẩn này, một dấu phẩy trong tên người hay địa chỉ cũng có thể làm lệch toàn bộ hàng.',
      },
      {
        question: 'Tôi có thể chuyển file TSV sang JSON không?',
        answer:
          'Có, bạn hoàn toàn có thể chuyển file TSV sang JSON. Bạn chỉ cần chọn dấu phân tách Tab (TSV) trong chế độ CSV to JSON rồi dán dữ liệu tách bằng tab của mình vào. Dấu tab rất phổ biến trong dữ liệu xuất từ các công cụ phân tích và cơ sở dữ liệu, và chúng hoạt động giống hệt dấu phẩy sau khi bạn chọn đúng dấu phân tách.',
      },
      {
        question: 'Vì sao việc chuyển JSON sang CSV của tôi thất bại?',
        answer:
          'Nguyên nhân phổ biến nhất là JSON không hợp lệ, ví dụ dấu phẩy thừa ở cuối, dấu ngoặc kép thiếu, hay bạn đã dán một đối tượng JSON không phải mảng các đối tượng. Bạn hãy sửa cú pháp rồi thử lại, và dùng trình kiểm tra JSON trực tuyến để tìm lỗi nếu cần. Với CSV, bạn cũng nên kiểm tra xem mình đã chọn đúng dấu phân tách mà file thực sự dùng hay chưa.',
      },
      {
        question: 'Làm thế nào để xuất dữ liệu JSON từ API sang Excel?',
        answer:
          'Bạn sao chép mảng JSON từ phản hồi API, dán vào công cụ này, chuyển sang CSV rồi tải file xuống. Sau đó bạn mở file CSV đã tải trực tiếp trong Excel hoặc nhập vào Google Sheets để phân tích, lọc và vẽ biểu đồ. Cách này nhanh hơn nhiều so với việc viết script chuyển đổi, và bạn có thể lặp lại quy trình mỗi khi cần xuất dữ liệu mới từ cùng một API.',
      },
      {
        question: 'Bộ chuyển đổi có giữ nguyên thứ tự khóa JSON gốc của tôi không?',
        answer:
          'Thứ tự cột tuân theo thứ tự khóa xuất hiện lần đầu trong các đối tượng của bạn. Đối tượng đầu tiên sẽ đặt thứ tự ban đầu, và các khóa mới từ đối tượng sau sẽ được thêm vào cuối. Nhờ vậy các cột quan trọng như id hay name thường nằm ở đầu bảng, đúng như trong dữ liệu gốc.',
      },
      {
        question: 'Tôi có thể tải file đã chuyển đổi xuống thay vì sao chép không?',
        answer:
          'Có, bạn có thể tải file đã chuyển đổi xuống thay vì sao chép. Bạn dùng nút tải xuống để lưu kết quả dưới dạng file .csv hay .json trên thiết bị của mình, sẵn sàng để mở trong bảng tính hay nhập vào ứng dụng. Việc tải file tiện hơn sao chép khi dữ liệu lớn, vì bạn không cần lo clipboard bị giới hạn hay mất định dạng khi dán vào trình soạn thảo.',
      },
    ],
  },
  'unix-timestamp-converter': {
    instructions: [
      {
        title: 'Xem hoặc sao chép thời gian Unix hiện tại',
        description:
          'Dùng bộ đếm đang chạy ở phía trên để lấy thời gian Unix epoch hiện tại tính bằng giây, cập nhật theo từng giây.',
      },
      {
        title: 'Chuyển Unix Timestamp sang ngày giờ dễ đọc',
        description:
          'Nhập bất kỳ số epoch nào; chế độ Auto sẽ tự phát hiện giây hay mili giây, hoặc bạn có thể ép một đơn vị cụ thể.',
      },
      {
        title: 'Xem các định dạng ISO, UTC và giờ địa phương',
        description:
          'So sánh các kết quả ISO 8601, UTC, RFC 2822 và giờ địa phương cạnh nhau, cùng thời gian tương đối như 2 hours ago, để chọn định dạng bạn cần.',
      },
      {
        title: 'Chuyển ngày giờ địa phương sang Unix Timestamp',
        description:
          'Chọn ngày và giờ trong panel phía dưới để nhận chính xác số giây, số mili giây và kết quả ISO 8601.',
      },
      {
        title: 'Sao chép timestamp bạn cần',
        description:
          'Sao chép giá trị giây cho API và cơ sở dữ liệu, giá trị mili giây cho đối tượng JavaScript Date, hay chuỗi ISO cho log và JSON.',
      },
      {
        title: 'Khắc phục ngày giờ trông sai',
        description:
          'Nếu ngày rơi vào năm 1970 hay năm 5000, có thể bạn đã nhầm lẫn giây với mili giây. Hãy chuyển bộ chọn đơn vị từ Auto sang đơn vị đúng rồi chuyển đổi lại.',
      },
    ],
    examples: [
      {
        title: 'Nhận biết giây và mili giây',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (giây)',
        explanation: 'Số có 10 chữ số được hiểu là giây; số có 13 chữ số được hiểu là mili giây.',
      },
      {
        title: 'Từ ngày tháng ra Unix timestamp',
        input: 'Date: 2026-01-01 00:00:00 (UTC)',
        output: '1767225600 giây · 1767225600000 mili giây',
        explanation: 'Bộ chọn ngày cho ra cả số giây epoch và số mili giây chính xác cho ngày đã chọn.',
      },
    ],
    benefits: [
      'Đồng hồ Unix đang chạy, đồng bộ với giờ hệ thống của bạn',
      'Tự động nhận biết giây và mili giây, có thể ghi đè thủ công',
      'Xuất cùng lúc ISO 8601, giờ địa phương, RFC 2822 GMT và thời gian tương đối',
      'Có bộ chuyển đổi hai chiều từ bộ chọn ngày sang giây và mili giây Unix',
    ],
    useCases: [
      'Kiểm tra các claim iat và exp của JWT cùng timestamp created_at của API',
      'Gỡ lỗi timestamp dạng số nguyên trong PostgreSQL hay SQLite',
      'Tạo timestamp epoch trong tương lai cho TTL của cache hay dữ liệu kiểm thử',
      'Chuyển các mốc epoch trong file log thành giờ địa phương dễ đọc',
    ],
    faqs: [
      {
        question: 'Chế độ Auto phân biệt giây và mili giây như thế nào?',
        answer:
          'Các giá trị có độ lớn từ 100.000.000.000 trở lên, tức 1e11, khoảng năm 1973 nếu tính bằng mili giây hay năm 5138 nếu tính bằng giây, sẽ được xem là mili giây; các giá trị nhỏ hơn được xem là giây. Ngưỡng này hoạt động tốt vì mọi timestamp giây thực tế hiện nay đều nhỏ hơn 1e11, trong khi mọi timestamp mili giây thực tế đều lớn hơn ngưỡng đó.',
      },
      {
        question: 'Thời gian Unix có bị ảnh hưởng bởi múi giờ không?',
        answer:
          'Không, thời gian Unix không bị ảnh hưởng bởi múi giờ. Thời gian epoch Unix luôn đo số giây đã trôi qua kể từ 1970-01-01T00:00:00Z theo UTC, bất kể múi giờ địa phương của bạn là gì. Cùng một thời điểm sẽ có cùng một timestamp ở mọi nơi trên thế giới, và múi giờ chỉ ảnh hưởng tới cách hiển thị ngày giờ cho con người đọc, chứ không thay đổi giá trị epoch.',
      },
      {
        question: 'Tôi có thể chuyển đổi timestamp trước năm 1970 không?',
        answer:
          'Có, bạn hoàn toàn có thể chuyển đổi timestamp trước năm 1970. Bạn chỉ cần nhập timestamp Unix âm, ví dụ -86400 cho ngày 31 tháng 12 năm 1969, để xem các ngày trước năm 1970. Cách này hữu ích khi làm việc với dữ liệu lịch sử, ngày sinh hay hồ sơ cũ. Công cụ xử lý số âm giống như số dương, chỉ khác là ngày kết quả sẽ nằm trước mốc epoch thay vì sau mốc đó.',
      },
      {
        question: 'Unix timestamp là gì?',
        answer:
          'Unix timestamp, còn gọi là thời gian epoch, là số giây đã trôi qua kể từ ngày 1 tháng 1 năm 1970 lúc 00:00:00 UTC. Đây là cách đơn giản để máy tính lưu ngày tháng dưới dạng một con số duy nhất, dễ so sánh, sắp xếp và lưu trong cơ sở dữ liệu.',
      },
      {
        question: 'Công cụ Unix Timestamp Converter có miễn phí không?',
        answer:
          'Có, Unix Timestamp Converter hoàn toàn miễn phí, không cần đăng ký tài khoản và không giới hạn số lần sử dụng. Mọi việc chuyển đổi đều chạy trong trình duyệt của bạn, nên bạn có thể chuyển đổi bao nhiêu timestamp tùy thích, từ timestamp trong log, JWT hay cơ sở dữ liệu. Công cụ luôn sẵn sàng mỗi khi bạn cần kiểm tra nhanh một con số epoch khó hiểu.',
      },
      {
        question: 'Giây Unix và mili giây Unix khác nhau như thế nào?',
        answer:
          'Giây Unix đếm số giây tròn kể từ năm 1970 và thường dài 10 chữ số, còn mili giây đếm phần nghìn của giây và thường dài 13 chữ số. Đối tượng JavaScript Date dùng mili giây, trong khi nhiều API và cơ sở dữ liệu dùng giây, nên việc nhầm lẫn hai đơn vị là lỗi rất phổ biến. Nếu bạn thấy ngày rơi vào năm 1970 hay năm 5000, gần như chắc chắn bạn đã nhầm đơn vị.',
      },
      {
        question: 'Unix timestamp hiện tại ngay lúc này là bao nhiêu?',
        answer:
          'Bộ đếm trực tiếp ở phía trên của công cụ này chạy theo từng giây và hiển thị thời gian Unix hiện tại tính bằng giây. Bạn có thể sao chép giá trị đó bất cứ khi nào cần con số chính xác cho kiểm thử hay ghi log.',
      },
      {
        question: 'Làm thế nào để chuyển Unix timestamp thành ngày dễ đọc?',
        answer:
          'Bạn dán số epoch vào bộ chuyển đổi, và công cụ sẽ hiển thị ngày tương ứng theo định dạng ISO 8601, UTC, RFC 2822 và múi giờ địa phương của bạn, cùng thời gian tương đối như 3 days ago. Nhờ vậy bạn nhanh chóng hiểu một con số như 1794544800 thực ra là ngày nào, mà không cần tự tính toán hay tra bảng.',
      },
      {
        question: 'Làm thế nào để chuyển ngày thành Unix timestamp?',
        answer:
          'Bạn dùng bộ chọn ngày và giờ trong panel phía dưới, rồi đọc số giây và mili giây Unix chính xác cho ngày bạn đã chọn theo múi giờ địa phương của mình. Cách này rất tiện khi bạn cần tạo timestamp cho thời điểm hết hạn của cache, lịch hẹn hay dữ liệu kiểm thử trong tương lai. Bạn cũng nhận được chuỗi ISO 8601 để dùng trong JSON hay log.',
      },
      {
        question: 'Vì sao timestamp của tôi hiển thị ngày trong năm 1970?',
        answer:
          'Có thể bạn đã nhập giá trị mili giây trong khi công cụ mong đợi giây, hoặc bạn đã nhập một con số rất nhỏ. Một giá trị nhỏ chỉ tương ứng với vài giây sau mốc epoch năm 1970, nên ngày hiển thị sẽ nằm trong tháng 1 năm 1970.',
      },
      {
        question: 'Vì sao timestamp của tôi hiển thị ngày trong năm 5000?',
        answer:
          'Có thể bạn đã nhập giá trị giây trong khi công cụ hiểu nó là mili giây, hoặc bạn đã nhập mili giây vào trường dành cho giây. Khi một số giây 10 chữ số bị hiểu là mili giây, ngày kết quả sẽ nằm rất xa trong tương lai, thường là năm 5000.',
      },
      {
        question: 'Định dạng ISO 8601 cho Unix timestamp là gì?',
        answer:
          'ISO 8601 viết ngày dưới dạng YYYY-MM-DDTHH:MM:SS, ví dụ 2026-11-13T04:40:00.000Z. Chữ Z ở cuối có nghĩa là thời gian đang ở múi UTC. Định dạng này được dùng rộng rãi trong API, JSON và log vì nó rõ ràng, sắp xếp được theo thứ tự bảng chữ cái, và không gây nhầm lẫn giữa định dạng ngày tháng của Mỹ hay châu Âu.',
      },
      {
        question: 'Unix timestamp có bao gồm giây nhuận không?',
        answer:
          'Không, Unix timestamp không bao gồm giây nhuận. Thời gian Unix đếm mỗi ngày đúng bằng 86.400 giây và bỏ qua giây nhuận, nên theo thời gian dài, nó sẽ lệch nhẹ so với thời gian thiên văn thực sự. Trong thực tế, độ lệch này quá nhỏ để ảnh hưởng tới hầu hết ứng dụng, nhưng các hệ thống thiên văn hay định vị vệ tinh cần độ chính xác cao sẽ phải xử lý riêng giây nhuận.',
      },
      {
        question: 'Tôi có thể dùng Unix timestamp cho ngày trong tương lai không?',
        answer:
          'Có, bạn hoàn toàn có thể dùng Unix timestamp cho ngày trong tương lai. Bạn nhập ngày tương lai vào bộ chọn ngày để lấy timestamp Unix của nó, rất tiện khi đặt thời gian hết hạn cho cache, công việc đã lên lịch hay dữ liệu kiểm thử. Bạn cũng có thể dùng timestamp tương lai trong JWT để đặt thời gian hết hạn của token, hay trong cơ sở dữ liệu để lên lịch nhắc nhở.',
      },
      {
        question: 'Unix timestamp tối đa là bao nhiêu?',
        answer:
          'Trên hệ thống 32-bit, giới hạn cổ điển là 2.147.483.647 giây, tương ứng với ngày 19 tháng 1 năm 2038, còn gọi là lỗi năm 2038. Các hệ thống 64-bit hiện đại xử lý được giá trị lớn hơn nhiều, và công cụ này chấp nhận chúng. Nếu hệ thống của bạn vẫn dùng số nguyên 32-bit có dấu để lưu timestamp, bạn nên lên kế hoạch chuyển sang 64-bit trước năm 2038.',
      },
      {
        question: 'Làm thế nào để kiểm tra timestamp hết hạn của JWT bằng bộ chuyển đổi này?',
        answer:
          'Bạn sao chép claim exp từ JWT đã giải mã rồi dán vào đây. Bộ chuyển đổi sẽ hiển thị chính xác ngày giờ UTC khi token hết hạn, cùng thời gian tương đối như còn 2 giờ nữa hay đã hết hạn 3 ngày trước. Nhờ vậy bạn nhanh chóng biết token còn dùng được hay cần làm mới, mà không cần tự tính toán từ số epoch khó đọc trong payload.',
      },
      {
        question: 'Unix Timestamp Converter có hoạt động ngoại tuyến không?',
        answer:
          'Có, công cụ hoạt động ngoại tuyến sau khi trang đã tải xong. Việc chuyển đổi chỉ là phép tính số học đơn giản trong trình duyệt, và đồng hồ trực tiếp đọc giờ hệ thống của bạn, nên bạn không cần kết nối mạng. Bạn có thể kiểm tra timestamp trong log ngay cả khi đang ngoại tuyến, miễn là trang đã được tải trước đó trong trình duyệt.',
      },
      {
        question: 'UTC và giờ địa phương trong kết quả khác nhau như thế nào?',
        answer:
          'UTC là thời gian tham chiếu toàn cầu không có độ lệch, còn giờ địa phương áp dụng độ lệch múi giờ của bạn. Cả hai mô tả cùng một thời điểm, chỉ hiển thị ở hai múi khác nhau. Ví dụ, cùng một timestamp có thể là 04:40 UTC nhưng là 08:40 ở Dubai.',
      },
      {
        question: 'Tôi có thể chuyển đổi Unix timestamp từ cơ sở dữ liệu hay file log không?',
        answer:
          'Có, bạn hoàn toàn có thể chuyển đổi Unix timestamp từ cơ sở dữ liệu hay file log. Bạn sao chép số nguyên timestamp từ dòng cơ sở dữ liệu hay dòng log rồi dán vào đây để thấy ngày giờ dễ đọc, giúp việc gỡ lỗi nhanh hơn nhiều.',
      },
      {
        question: 'Dữ liệu timestamp của tôi có bị gửi tới máy chủ không?',
        answer:
          'Không, dữ liệu timestamp của bạn không bị gửi tới máy chủ nào cả. Việc chuyển đổi diễn ra hoàn toàn trong trình duyệt của bạn, nên timestamp và ngày tháng bạn nhập không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm kiểm tra cả những timestamp nhạy cảm từ log production hay token xác thực mà không lo bị ghi lại hay rò rỉ ra ngoài.',
      },
    ],
  },
  'sql-formatter': {
    instructions: [
      {
        title: 'Dán truy vấn SQL của bạn',
        description:
          'Chèn bất kỳ truy vấn SELECT, INSERT, UPDATE, DELETE hay DDL nào vào ô Raw SQL Query, kể cả câu lệnh nhiều dòng hay một dòng.',
      },
      {
        title: 'Chọn chế độ Beautify hoặc Minify',
        description:
          'Chọn Beautify để mở rộng truy vấn thành các mệnh đề thụt lề dễ đọc, hoặc Minify để thu gọn thành một dòng duy nhất cho log và code.',
      },
      {
        title: 'Đặt kiểu chữ hoa cho từ khóa và thụt lề',
        description:
          'Chọn từ khóa SQL viết HOA hay viết thường, và chọn thụt lề 2 khoảng trắng hay 4 khoảng trắng cho khớp với hướng dẫn phong cách của nhóm bạn.',
      },
      {
        title: 'Xem lại kết quả đã định dạng',
        description:
          'Kiểm tra xem các điểm ngắt mệnh đề, JOIN và truy vấn con đã căn chỉnh đúng như mong đợi chưa, và chuỗi cùng ghi chú vẫn còn nguyên vẹn.',
      },
      {
        title: 'Sao chép hoặc dùng lại SQL đã định dạng',
        description:
          'Dùng Copy SQL để đưa truy vấn đã chuẩn hóa trở lại trình soạn thảo, file migration hay pull request của bạn.',
      },
      {
        title: 'Sửa lỗi định dạng',
        description:
          'Nếu kết quả trông sai, hãy kiểm tra dấu ngoặc kép chưa cân bằng hay dấu chấm phẩy còn thiếu trong đầu vào, rồi dán lại và định dạng lần nữa.',
      },
    ],
    examples: [
      {
        title: 'Định dạng truy vấn nhiều JOIN',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Tách các mệnh đề SQL chính ra từng dòng riêng và chuẩn hóa kiểu chữ hoa của từ khóa.',
      },
      {
        title: 'Thu gọn truy vấn thành một dòng',
        input: 'SELECT id\nFROM users\nWHERE active = 1;',
        output: 'SELECT id FROM users WHERE active = 1;',
        explanation: 'Chế độ Minify biến truy vấn thành một dòng duy nhất để dùng trong log hay code.',
      },
    ],
    benefits: [
      'Giữ nguyên chuỗi ký tự trong dấu nháy đơn và ghi chú SQL',
      'Hỗ trợ các mệnh đề nhiều từ như LEFT OUTER JOIN, GROUP BY và ORDER BY',
      'Chuyển đổi dễ dàng giữa chế độ Beautify và Minify',
      'Chạy trên máy nên tên bảng và schema riêng tư luôn được giữ kín',
    ],
    useCases: [
      'Dọn sạch log SQL do ORM tạo ra để gỡ lỗi hiệu năng',
      'Chuẩn hóa script SQL trước khi review pull request',
      'Thu gọn truy vấn nhiều dòng thành chuỗi một dòng cho script CLI',
      'Căn chỉnh kiểu chữ hoa của từ khóa theo hướng dẫn phong cách SQL của nhóm',
    ],
    faqs: [
      {
        question: 'SQL Formatter có thay đổi tên bảng hay văn bản trong dấu ngoặc kép không?',
        answer:
          'Không, công cụ không thay đổi tên bảng hay văn bản trong dấu ngoặc kép. Bộ tách token sẽ tách riêng chuỗi ký tự và ghi chú, nên việc định dạng từ khóa hoa hay thường chỉ áp dụng cho các từ khóa SQL đã nhận diện. Nhờ vậy dữ liệu trong chuỗi như tên người hay địa chỉ vẫn giữ nguyên, và bạn không cần lo việc định dạng làm hỏng dữ liệu trong truy vấn của mình.',
      },
      {
        question: 'Những phương ngữ SQL nào được hỗ trợ?',
        answer:
          'Công cụ hỗ trợ các mệnh đề SQL chuẩn ANSI dùng trong PostgreSQL, MySQL, SQLite và SQL Server, bao gồm SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE và DELETE. Với các hàm hay cú pháp đặc thù của từng hệ quản trị, công cụ vẫn xử lý dưới dạng văn bản chung, nên hầu hết truy vấn thông thường đều định dạng đúng.',
      },
      {
        question: 'Tôi có thể minify truy vấn đã định dạng trở lại thành một dòng không?',
        answer:
          'Có, bạn hoàn toàn có thể minify truy vấn đã định dạng trở lại thành một dòng. Bạn chỉ cần chuyển nút chế độ sang Minify để loại bỏ ghi chú và thu gọn khoảng trắng thừa một cách an toàn. Kết quả là một chuỗi SQL gọn nhẹ, tiện dùng trong code ứng dụng, log hay script dòng lệnh, mà vẫn giữ nguyên logic và chuỗi ký tự trong truy vấn gốc.',
      },
      {
        question: 'Công cụ SQL Formatter có miễn phí không?',
        answer:
          'Có, SQL Formatter hoàn toàn miễn phí, không cần đăng ký tài khoản và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể định dạng bao nhiêu truy vấn tùy thích, từ câu SELECT đơn giản cho tới script migration dài hàng trăm dòng, mà không gặp giới hạn nào. Công cụ luôn sẵn sàng mỗi khi bạn cần dọn sạch một truy vấn trước khi đưa vào pull request hay tài liệu.',
      },
      {
        question: 'SQL Formatter có gửi truy vấn của tôi tới máy chủ không?',
        answer:
          'Không, SQL Formatter không gửi truy vấn của bạn tới máy chủ nào cả. Mọi việc định dạng đều diễn ra trong trình duyệt trên máy của bạn, nên tên bảng, chi tiết schema và giá trị dữ liệu trong truy vấn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm định dạng cả những truy vấn chứa tên bảng nội bộ hay dữ liệu nhạy cảm mà không lo bị rò rỉ.',
      },
      {
        question: 'Tôi có thể định dạng SQL có truy vấn con và CTE không?',
        answer:
          'Có, bạn có thể định dạng SQL có truy vấn con và CTE. Các câu SELECT lồng nhau và biểu thức bảng chung dạng WITH ... AS được định dạng với mức thụt lề riêng, nên cấu trúc vẫn dễ đọc và bạn thấy rõ truy vấn nào nằm trong truy vấn nào. Nhờ vậy những truy vấn phân tích phức tạp với nhiều lớp lồng nhau cũng trở nên gọn gàng và dễ review hơn nhiều.',
      },
      {
        question: 'SQL Formatter có xử lý câu lệnh INSERT, UPDATE và DELETE không?',
        answer:
          'Có, công cụ xử lý câu lệnh INSERT, UPDATE và DELETE cùng với truy vấn SELECT, với các mệnh đề được tách ra từng dòng riêng. Nhờ vậy bạn có thể chuẩn hóa toàn bộ script migration, không chỉ các truy vấn đọc dữ liệu. Các mệnh đề SET, VALUES hay WHERE đều được căn chỉnh nhất quán, giúp script của bạn trông chuyên nghiệp và dễ rà soát trước khi chạy trên cơ sở dữ liệu thật.',
      },
      {
        question: 'Tôi có thể định dạng câu lệnh DDL như CREATE TABLE không?',
        answer:
          'Có, bạn có thể định dạng câu lệnh DDL như CREATE TABLE, ALTER TABLE và DROP TABLE. Bạn chỉ cần dán chúng vào và định dạng với cùng quy tắc kiểu chữ hoa cho từ khóa và thụt lề như các truy vấn khác. Nhờ vậy script tạo bảng và migration của bạn cũng gọn gàng và nhất quán, thay vì chỉ có SELECT được định dạng đẹp còn DDL thì lộn xộn và khó đọc.',
      },
      {
        question: 'SQL Formatter có những tùy chọn thụt lề nào?',
        answer:
          'Bạn có thể chọn thụt lề 2 khoảng trắng hoặc 4 khoảng trắng cho truy vấn đã beautify, để kết quả khớp với trình soạn thảo hay hướng dẫn phong cách của nhóm bạn. Việc nhất quán về thụt lề giúp các truy vấn trong cùng một dự án trông đồng đều, và việc review code cũng dễ dàng hơn vì mắt bạn không phải thích nghi với nhiều kiểu định dạng khác nhau trong cùng một file.',
      },
      {
        question: 'Việc định dạng có làm thay đổi ý nghĩa truy vấn SQL của tôi không?',
        answer:
          'Không, việc định dạng không làm thay đổi ý nghĩa truy vấn của bạn. Định dạng chỉ thay đổi khoảng trắng và kiểu chữ hoa của từ khóa, chứ không thêm, xóa hay sắp xếp lại bất kỳ phần nào của logic truy vấn. Nhờ vậy bạn có thể yên tâm chạy truy vấn đã định dạng mà kết quả trả về vẫn giống hệt như trước, chỉ khác là code đã dễ đọc và dễ bảo trì hơn.',
      },
      {
        question: 'Tôi có thể định dạng nhiều truy vấn SQL cùng một lúc không?',
        answer:
          'Có, bạn có thể định dạng nhiều truy vấn cùng một lúc. Bạn chỉ cần dán nhiều câu lệnh tách nhau bằng dấu chấm phẩy rồi định dạng tất cả trong một lần chạy. Cách này rất tiện khi bạn cần chuẩn hóa cả một file migration hay script seed, thay vì phải định dạng từng câu lệnh riêng lẻ rồi ghép lại với nhau một cách thủ công và dễ sót.',
      },
      {
        question: 'SQL Formatter có hoạt động với cú pháp MySQL, PostgreSQL và SQL Server không?',
        answer:
          'Có, công cụ hoạt động với cú pháp SQL chuẩn ANSI dùng trong MySQL, PostgreSQL, SQLite và SQL Server, bao gồm các từ khóa mệnh đề chung của chúng. Với hầu hết truy vấn thông thường, bạn sẽ nhận được kết quả định dạng đẹp bất kể đang dùng hệ quản trị nào. Với các hàm đặc thù của từng hệ, bạn nên kiểm tra lại kết quả, vì công cụ xử lý chúng dưới dạng văn bản chung.',
      },
      {
        question: 'Ghi chú trong SQL của tôi có được giữ lại khi định dạng không?',
        answer:
          'Có, ghi chú trong SQL của bạn được giữ lại khi định dạng. Ghi chú một dòng và ghi chú khối đều được bộ tách token bảo toàn, nên những giải thích quan trọng về logic truy vấn không bị mất. Tuy nhiên, chế độ Minify sẽ loại bỏ ghi chú để tạo ra kết quả nhỏ nhất có thể, vì vậy bạn nên dùng chế độ Beautify khi muốn giữ lại ghi chú trong tài liệu hay pull request.',
      },
      {
        question: 'Điều gì xảy ra nếu SQL của tôi có lỗi cú pháp?',
        answer:
          'Bộ định dạng vẫn xử lý văn bản tốt nhất có thể, vì nó làm việc trên các token thay vì thực thi truy vấn, nhưng bạn nên sửa lỗi trước khi chạy SQL trong cơ sở dữ liệu của mình. Kết quả định dạng của truy vấn lỗi vẫn có thể giúp bạn nhìn rõ cấu trúc và phát hiện chỗ sai, ví dụ mệnh đề WHERE bị lệch hay dấu ngoặc chưa đóng.',
      },
      {
        question: 'Tôi có thể minify SQL để dùng trong code ứng dụng hay log không?',
        answer:
          'Có, bạn hoàn toàn có thể minify SQL để dùng trong code ứng dụng hay log. Chế độ Minify thu gọn truy vấn thành một dòng trong khi vẫn giữ nguyên chuỗi ký tự, rất phù hợp để nhúng SQL vào code hay ghi log gọn nhẹ. Nhờ vậy log của bạn không bị chiếm chỗ bởi truy vấn nhiều dòng, mà bạn vẫn có thể sao chép dòng đó ra và beautify lại khi cần gỡ lỗi.',
      },
      {
        question: 'SQL Formatter có hỗ trợ hàm cửa sổ không?',
        answer:
          'Có, công cụ hỗ trợ hàm cửa sổ như ROW_NUMBER() OVER (PARTITION BY ...). Các hàm này được định dạng như một phần của danh sách SELECT, với mệnh đề OVER được giữ nguyên vẹn. Nhờ vậy những truy vấn phân tích dùng hàm cửa sổ để xếp hạng hay tính tổng lũy kế vẫn giữ đúng cấu trúc và dễ đọc, thay vì bị tách vụn thành nhiều mảnh khó theo dõi.',
      },
      {
        question: 'Tôi có thể định dạng SQL dài bao nhiêu, có giới hạn kích thước không?',
        answer:
          'Công cụ không có giới hạn ký tự cố định, vì nó chạy trong trình duyệt của bạn, nhưng truy vấn rất dài có thể mất một lúc trên thiết bị chậm. Với script migration hàng nghìn dòng, bạn nên chia nhỏ thành từng phần để định dạng cho nhanh, rồi ghép lại sau. Trong hầu hết trường hợp, các truy vấn thông thường từ vài chục tới vài trăm dòng đều được định dạng gần như ngay lập tức.',
      },
      {
        question: 'Tôi có thể dùng SQL Formatter trên điện thoại không?',
        answer:
          'Có, bạn có thể dùng SQL Formatter trên điện thoại. Công cụ hoạt động trong mọi trình duyệt di động hiện đại, nên bạn có thể dán và định dạng SQL trên điện thoại hay máy tính bảng mà không cần cài đặt gì thêm. Điều này rất tiện khi bạn cần kiểm tra nhanh một truy vấn trong lúc đang di chuyển, hay khi đồng nghiệp gửi cho bạn một đoạn SQL lộn xộn qua tin nhắn.',
      },
      {
        question: 'SQL Formatter có giữ dấu xuống dòng bên trong chuỗi ký tự không?',
        answer:
          'Có, công cụ giữ dấu xuống dòng bên trong chuỗi ký tự. Văn bản nằm trong dấu nháy đơn được giữ nguyên vẹn, nên các chuỗi nhiều dòng vẫn giữ đúng dấu xuống dòng gốc của chúng. Điều này rất quan trọng với các chuỗi chứa văn bản định dạng sẵn hay câu lệnh khác, vì việc thay đổi dấu xuống dòng bên trong chuỗi có thể làm thay đổi ý nghĩa dữ liệu khi truy vấn chạy.',
      },
      {
        question: 'Làm thế nào để chuẩn hóa kiểu chữ hoa của từ khóa trong nhóm bằng SQL Formatter?',
        answer:
          'Bạn hãy thống nhất một kiểu chữ hoa cho từ khóa, ví dụ từ khóa viết HOA, rồi chạy mọi truy vấn qua bộ định dạng với cùng cài đặt đó trước khi commit vào kho mã của nhóm. Bạn cũng có thể ghi quy tắc này vào hướng dẫn đóng góp của dự án, để mọi thành viên mới đều làm theo.',
      },
    ],
  },
  'css-minifier': {
    instructions: [
      {
        title: 'Chọn Minify hoặc Beautify',
        description:
          'Chọn Minify CSS để giảm dung lượng file cho production, hoặc Beautify CSS để khôi phục thụt lề cho stylesheet đã nén.',
      },
      {
        title: 'Dán stylesheet của bạn',
        description:
          'Nhập các quy tắc CSS, custom property hay khối @media vào ô Input CSS, có thể là toàn bộ stylesheet hay chỉ một đoạn nhỏ.',
      },
      {
        title: 'Chạy công cụ và xem thống kê',
        description:
          'Kết quả cập nhật ngay khi bạn gõ; ở chế độ Minify, hãy xem chính xác số byte đầu vào, số byte đầu ra và phần trăm đã tiết kiệm được.',
      },
      {
        title: 'Xem lại kết quả cẩn thận',
        description:
          'Xác nhận các khối @media, chuỗi trong dấu ngoặc kép và giá trị url(...) vẫn còn nguyên, và các quy tắc lồng nhau được thụt lề đúng trong chế độ Beautify.',
      },
      {
        title: 'Sao chép hoặc tải xuống CSS',
        description:
          'Bấm Copy CSS để dán kết quả vào stylesheet, khối <style> nội tuyến hay bước build khi triển khai của bạn.',
      },
      {
        title: 'Sửa kết quả phẳng hay bị hỏng',
        description:
          'Nếu kết quả Beautify trông phẳng hay các quy tắc dính vào nhau, hãy kiểm tra dấu ngoặc nhọn đóng còn thiếu trong đầu vào rồi thêm vào trước khi thử lại.',
      },
    ],
    examples: [
      {
        title: 'Nén một quy tắc thẻ card',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Loại bỏ dấu xuống dòng, khoảng trắng quanh dấu câu và dấu chấm phẩy cuối cùng trong khối.',
      },
      {
        title: 'Làm cho CSS đã minify trở nên dễ đọc',
        input: '.card{padding:16px;border:1px solid #e2e8f0}',
        output: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        explanation: 'Chế độ Beautify mở rộng quy tắc đã nén thành dạng thụt lề, dễ đọc.',
      },
    ],
    benefits: [
      'Bộ tách token giữ nguyên chuỗi trong dấu ngoặc kép như content: "..." hay url(...)',
      'Loại bỏ ghi chú /* ... */ và khoảng trắng thừa một cách an toàn',
      'Hiển thị chính xác số byte đầu vào, số byte đầu ra và phần trăm đã tiết kiệm',
      'Có chế độ Beautify để kiểm tra CSS đã minify của bên thứ ba',
    ],
    useCases: [
      'Nén đoạn <style> nội tuyến cho email HTML và trang đích',
      'Mở rộng bundle CSS production để gỡ lỗi giao diện',
      'Kiểm tra mức tiết kiệm dung lượng stylesheet trước khi triển khai',
      'Dọn sạch khoảng trắng không nhất quán trong stylesheet cũ',
    ],
    faqs: [
      {
        question: 'Việc minify CSS có làm hỏng khoảng trắng bên trong chuỗi content: "..." không?',
        answer:
          'Không, việc minify CSS không làm hỏng khoảng trắng bên trong chuỗi content. Các chuỗi ký tự trong dấu nháy đơn và dấu ngoặc kép đều được bộ tách token giữ nguyên từng ký tự, nên nội dung tạo ra bằng CSS như dấu phân tách hay biểu tượng vẫn hiển thị đúng. Nhờ vậy bạn có thể minify an toàn mà không lo văn bản trang trí hay nhãn tạo bởi CSS bị biến dạng.',
      },
      {
        question: 'Vì sao Minify lại bỏ dấu chấm phẩy cuối cùng trước dấu "}"?',
        answer:
          'Trong cú pháp CSS, khai báo cuối cùng trước dấu ngoặc nhọn đóng không cần dấu chấm phẩy ở cuối, nên việc bỏ nó sẽ tiết kiệm được 1 byte cho mỗi khối quy tắc. Với stylesheet có hàng trăm quy tắc, số byte tiết kiệm được sẽ cộng dồn thành con số đáng kể. Đây là tối ưu hóa an toàn vì trình duyệt vẫn hiểu đúng khai báo cuối cùng mà không cần dấu phân tách.',
      },
      {
        question: 'Công cụ có hỗ trợ khối @media lồng nhau trong chế độ Beautify không?',
        answer:
          'Có, công cụ hỗ trợ khối @media lồng nhau trong chế độ Beautify. Độ sâu của dấu ngoặc nhọn được theo dõi qua các khối @media và @supports, nên các quy tắc bên trong được thụt lề đúng cấp. Nhờ vậy ngay cả stylesheet responsive phức tạp với nhiều lớp media query lồng nhau cũng được mở rộng thành cấu trúc rõ ràng, dễ đọc và dễ gỡ lỗi.',
      },
      {
        question: 'Công cụ CSS Minifier có miễn phí không?',
        answer:
          'Có, CSS Minifier hoàn toàn miễn phí, không cần đăng ký tài khoản và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể minify hay beautify bao nhiêu stylesheet tùy thích, từ đoạn nhỏ cho email HTML cho tới file CSS lớn của cả website, mà không gặp giới hạn nào. Công cụ luôn sẵn sàng mỗi khi bạn cần kiểm tra nhanh dung lượng stylesheet trước khi triển khai.',
      },
      {
        question: 'CSS Minifier có tải stylesheet của tôi lên đâu không?',
        answer:
          'Không, CSS Minifier không tải stylesheet của bạn lên đâu cả. Mọi việc minify và beautify đều diễn ra trong trình duyệt trên máy của bạn, nên CSS của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm xử lý cả những stylesheet nội bộ chứa tên lớp riêng hay thiết kế chưa công bố mà không lo bị lưu trữ hay rò rỉ ra ngoài qua mạng.',
      },
      {
        question: 'Sau khi minify, CSS của tôi sẽ nhỏ đi bao nhiêu?',
        answer:
          'Mức độ thu nhỏ phụ thuộc vào số lượng ghi chú và khoảng trắng thừa trong stylesheet của bạn; công cụ sẽ hiển thị chính xác số byte và phần trăm tiết kiệm cho đầu vào của bạn. Stylesheet viết tay với nhiều ghi chú và dòng trống có thể giảm tới một nửa, trong khi file đã gọn sẵn chỉ giảm vài phần trăm. Bạn nên thử với file thật của mình để thấy con số chính xác.',
      },
      {
        question: 'Việc minify CSS có xóa truy vấn @media không?',
        answer:
          'Không, việc minify CSS không xóa truy vấn @media. Các truy vấn @media và điều kiện của chúng được giữ nguyên chính xác, vì việc xóa chúng sẽ làm thay đổi cách trang phản hồi với kích thước màn hình. Nhờ vậy stylesheet sau khi minify vẫn giữ đầy đủ hành vi responsive, chỉ nhẹ hơn nhờ loại bỏ ghi chú và khoảng trắng thừa mà trình duyệt vốn đã bỏ qua.',
      },
      {
        question: 'Tôi có thể minify CSS dùng custom property (biến) không?',
        answer:
          'Có, bạn hoàn toàn có thể minify CSS dùng custom property. Các custom property như --brand-color và tham chiếu var() của chúng được xem là khai báo thông thường và giữ nguyên vẹn. Nhờ vậy hệ thống design token của bạn vẫn hoạt động đúng sau khi minify, và bạn không cần lo biến CSS bị đổi tên hay mất giá trị trong quá trình nén stylesheet.',
      },
      {
        question: 'CSS Minifier có giữ nguyên chuỗi url(...) và content không?',
        answer:
          'Có, CSS Minifier giữ nguyên chuỗi url(...) và content. Các chuỗi trong dấu ngoặc kép bên trong url(...) và thuộc tính content đều được giữ nguyên từng ký tự, nên đường dẫn hình ảnh và văn bản tạo ra vẫn đúng. Nhờ vậy bạn có thể minify an toàn mà không lo đường dẫn tới font, hình nền hay biểu tượng bị hỏng do khoảng trắng hay ký tự đặc biệt bị thay đổi.',
      },
      {
        question: 'CSS đã minify có còn hoạt động trên mọi trình duyệt không?',
        answer:
          'Có, CSS đã minify vẫn hoạt động trên mọi trình duyệt. Việc minify chỉ loại bỏ ghi chú và khoảng trắng không cần thiết, vốn là những thứ trình duyệt đã bỏ qua, nên kết quả hiển thị hoàn toàn giống hệt như trước. Bạn có thể triển khai file đã minify mà không cần kiểm thử lại trên từng trình duyệt, vì hành vi của stylesheet không hề thay đổi sau khi nén.',
      },
      {
        question: 'Tôi có thể beautify CSS từ bundle production không?',
        answer:
          'Có, bạn hoàn toàn có thể beautify CSS từ bundle production. Bạn chỉ cần dán bất kỳ stylesheet đã minify nào vào chế độ Beautify để mở rộng nó thành các quy tắc thụt lề, dễ đọc cho việc gỡ lỗi. Cách này rất hữu ích khi bạn cần hiểu một file CSS của bên thứ ba hay tìm ra quy tắc nào đang ghi đè lên giao diện của mình trong môi trường production.',
      },
      {
        question: 'CSS Minifier có xử lý @keyframes và @font-face không?',
        answer:
          'Có, công cụ xử lý @keyframes và @font-face. Các at-rule như @keyframes, @font-face và @import đều được giữ nguyên, với các khối bên trong được thụt lề đúng trong chế độ Beautify. Nhờ vậy animation và font tùy chỉnh của bạn vẫn hoạt động đúng sau khi minify, và bạn vẫn có thể đọc lại cấu trúc keyframes một cách rõ ràng khi cần gỡ lỗi hiệu ứng chuyển động.',
      },
      {
        question: 'Trong CSS Minifier, minify và beautify khác nhau như thế nào?',
        answer:
          'Minify thu nhỏ CSS bằng cách loại bỏ ghi chú và khoảng trắng để dùng cho production, còn Beautify mở rộng CSS đã nén thành các quy tắc thụt lề, dễ đọc để chỉnh sửa và gỡ lỗi. Hai chế độ là hai hướng ngược nhau của cùng một công cụ: bạn minify trước khi triển khai để trang tải nhanh hơn, và beautify khi cần đọc lại file đã nén của mình hay của bên thứ ba.',
      },
      {
        question: 'Tôi có thể minify nhiều stylesheet cùng một lúc không?',
        answer:
          'Có, bạn có thể minify nhiều stylesheet cùng một lúc. Bạn có thể dán nhiều stylesheet gộp lại vào một ô nhập, dù việc giữ các file liên quan tách riêng sẽ giúp kết quả dễ quản lý hơn. Với các dự án nhỏ, việc gộp chung rồi minify một lần sẽ nhanh hơn, nhưng với dự án lớn, bạn nên xử lý từng file riêng để dễ theo dõi mức tiết kiệm của từng file.',
      },
      {
        question: 'CSS Minifier có xóa các quy tắc CSS không dùng tới không?',
        answer:
          'Không, CSS Minifier không xóa các quy tắc CSS không dùng tới. Công cụ chỉ loại bỏ ghi chú và khoảng trắng, chứ không phân tích HTML của bạn dùng selector nào, nên các quy tắc không dùng vẫn còn trong kết quả. Nếu bạn muốn loại bỏ CSS thừa, bạn cần dùng công cụ chuyên dụng như PurgeCSS, vốn quét HTML và JavaScript để xác định selector nào thực sự được dùng trên trang.',
      },
      {
        question: 'Phần trăm tiết kiệm byte mà CSS Minifier hiển thị có chính xác không?',
        answer:
          'Có, phần trăm tiết kiệm byte mà công cụ hiển thị là chính xác. Nó được tính từ số byte thực tế của đầu vào và đầu ra của bạn, nên phần trăm phản ánh đúng mức tiết kiệm thật sự. Bạn có thể dùng con số này để báo cáo hiệu quả tối ưu hóa, hay so sánh các phiên bản stylesheet khác nhau để xem phiên bản nào nhẹ hơn trước khi triển khai lên production.',
      },
      {
        question: 'Tôi có thể dùng CSS Minifier cho đoạn <style> nội tuyến không?',
        answer:
          'Có, bạn hoàn toàn có thể dùng CSS Minifier cho đoạn <style> nội tuyến. Các đoạn nhỏ được minify giống hệt như stylesheet đầy đủ, rất hữu ích cho email HTML và trang đích có style nội tuyến. Nhờ vậy email của bạn sẽ nhẹ hơn, tải nhanh hơn, và ít có nguy cơ vượt giới hạn kích thước của các nhà cung cấp email, vốn thường cắt ngắn email quá lớn.',
      },
      {
        question: 'CSS Minifier có hỗ trợ CSS hiện đại như grid và nesting không?',
        answer:
          'Có, công cụ hỗ trợ CSS hiện đại như grid và nesting. Các thuộc tính hiện đại như grid và flexbox được giữ nguyên không thay đổi, còn các quy tắc lồng nhau được thụt lề theo độ sâu của dấu ngoặc nhọn trong chế độ Beautify. Nhờ vậy bạn có thể dùng công cụ cho cả stylesheet viết theo cú pháp mới nhất mà không lo tính năng hiện đại bị hỏng hay định dạng sai.',
      },
      {
        question: 'Điều gì xảy ra nếu CSS của tôi có lỗi cú pháp?',
        answer:
          'Công cụ vẫn xử lý văn bản, nhưng dấu ngoặc nhọn thiếu hay chuỗi chưa đóng có thể làm kết quả bị sai lệch, nên bạn hãy sửa lỗi cú pháp trước khi minify cho production. Một lỗi nhỏ như thiếu dấu đóng ngoặc có thể khiến toàn bộ phần còn lại của stylesheet bị hiểu sai, và lỗi đó sẽ khó phát hiện hơn sau khi file đã nén.',
      },
      {
        question: 'Tôi có thể minify CSS trên điện thoại không?',
        answer:
          'Có, bạn có thể minify CSS trên điện thoại. CSS Minifier hoạt động trong mọi trình duyệt di động hiện đại, nên bạn có thể dán và minify stylesheet mà không cần cài đặt gì thêm. Điều này rất tiện khi bạn cần kiểm tra nhanh một đoạn CSS trong lúc đang di chuyển, hay khi đồng nghiệp gửi cho bạn một file CSS cần nén gấp mà bạn không có máy tính bên cạnh.',
      },
    ],
  },
  'js-formatter': {
    instructions: [
      {
        title: 'Chọn Minify JS hoặc Beautify JS',
        description:
          'Chọn Minify JS để loại bỏ ghi chú và khoảng trắng cho kết quả gọn nhẹ, hoặc Beautify JS với thụt lề 2 hay 4 khoảng trắng để khôi phục thụt lề dễ đọc.',
      },
      {
        title: 'Dán đoạn code của bạn',
        description:
          'Chèn code JavaScript hay TypeScript vào trình soạn thảo bên trái, từ một hàm đơn lẻ cho tới cả một khối script đầy đủ.',
      },
      {
        title: 'Đặt thụt lề cho chế độ Beautify',
        description:
          'Chọn thụt lề 2 khoảng trắng hay 4 khoảng trắng để code đã beautify khớp với trình soạn thảo hay phong cách của dự án bạn.',
      },
      {
        title: 'Xem mức tiết kiệm byte và kết quả',
        description:
          'Kiểm tra mức giảm byte trong chế độ Minify, rồi quét kết quả để xác nhận chuỗi, template literal và mẫu regex vẫn còn nguyên vẹn.',
      },
      {
        title: 'Sao chép code đã xử lý',
        description:
          'Dùng nút sao chép để đưa code đã minify hay beautify vào trình soạn thảo, bookmarklet hay script nội tuyến của bạn.',
      },
      {
        title: 'Sửa lỗi minify',
        description:
          'Nếu code đã minify hoạt động lạ, hãy thêm dấu chấm phẩy còn thiếu vào đầu vào trước, vì việc tự chèn dấu chấm phẩy có thể gây mơ hồ sau khi khoảng trắng bị loại bỏ.',
      },
    ],
    examples: [
      {
        title: 'Loại bỏ ghi chú và khoảng trắng',
        input: '// Helper\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Loại bỏ ghi chú và khoảng trắng quanh dấu ngoặc nhọn mà không chạm tới logic.',
      },
      {
        title: 'Làm cho code đã minify trở nên dễ đọc',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation: 'Chế độ Beautify mở rộng code một dòng gọn nhẹ thành các dòng thụt lề.',
      },
    ],
    benefits: [
      'Bộ tách token theo từ vựng bảo vệ chuỗi trong dấu nháy đơn, dấu ngoặc kép và template literal với dấu backtick',
      'Loại bỏ cả ghi chú một dòng dạng // và ghi chú khối dạng /* */ trong chế độ Minify',
      'Báo cáo phần trăm giảm byte theo thời gian thực',
      'Chạy nhanh ngay trong trình duyệt, không gửi code ra ngoài',
    ],
    useCases: [
      'Chuẩn bị script nội tuyến gọn nhẹ hay bookmarklet',
      'Mở rộng đoạn code một dòng đã nén để đọc cho dễ',
      'Xóa ghi chú của lập trình viên trước khi chia sẻ mẫu code',
      'Thụt lề lại nhanh các hàm JS đã dán vào',
    ],
    faqs: [
      {
        question: 'Công cụ này có đổi tên biến như Terser hay esbuild không?',
        answer:
          'Không, công cụ không đổi tên biến như Terser hay esbuild. Nó chỉ thực hiện việc minify khoảng trắng và ghi chú một cách an toàn, không đổi tên định danh hay thay đổi ngữ nghĩa của cây cú pháp, nhờ đó kết quả vẫn dễ kiểm tra. Nhờ vậy bạn có thể yên tâm dùng cho các đoạn code mẫu hay bookmarklet mà không lo tên biến bị xáo trộn khiến code khó đọc hay khó gỡ lỗi.',
      },
      {
        question: 'Chuỗi ký tự chứa "//" như URL có an toàn không?',
        answer:
          'Có, chuỗi ký tự chứa "//" như URL hoàn toàn an toàn. Các chuỗi trong dấu ngoặc kép và template literal được tách token trước khi phát hiện ghi chú, nên URL nằm trong dấu ngoặc kép không bao giờ bị hiểu nhầm thành ghi chú. Nhờ vậy các đường dẫn như https://example.com trong code của bạn vẫn còn nguyên vẹn sau khi minify, và bạn không cần lo code bị cắt mất một phần chuỗi.',
      },
      {
        question: 'Tôi có nên dùng dấu chấm phẩy khi minify JS nhiều câu lệnh không?',
        answer:
          'Bạn nên dùng dấu chấm phẩy chuẩn trước khi minify bất kỳ đoạn JavaScript nào, để tránh sự mơ hồ của việc tự chèn dấu chấm phẩy, gọi tắt là ASI. Khi khoảng trắng và dấu xuống dòng bị loại bỏ, trình thông dịch có thể hiểu sai ranh giới giữa các câu lệnh nếu thiếu dấu chấm phẩy, dẫn tới lỗi khó phát hiện.',
      },
      {
        question: 'Công cụ JavaScript Minifier có miễn phí không?',
        answer:
          'Có, JavaScript Minifier hoàn toàn miễn phí, không cần đăng ký tài khoản và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể minify hay beautify bao nhiêu đoạn code tùy thích, từ một hàm nhỏ cho tới cả file script, mà không gặp giới hạn nào. Công cụ đặc biệt hữu ích khi bạn cần chuẩn bị nhanh một bookmarklet hay dọn sạch code mẫu trước khi chia sẻ với đồng nghiệp.',
      },
      {
        question: 'JavaScript Minifier có tải code của tôi lên máy chủ không?',
        answer:
          'Không, JavaScript Minifier không tải code của bạn lên máy chủ nào cả. Mọi việc minify và định dạng đều diễn ra trong trình duyệt trên máy của bạn, nên code của bạn không bao giờ rời khỏi thiết bị. Bạn có thể yên tâm xử lý cả những đoạn code nội bộ chứa logic kinh doanh hay khóa API mẫu mà không lo bị lưu trữ hay rò rỉ ra ngoài qua mạng.',
      },
      {
        question: 'JavaScript Minifier có hoạt động với code TypeScript không?',
        answer:
          'Có, công cụ hoạt động với code TypeScript. Các đoạn TypeScript có thể được dán vào rồi minify hay beautify giống hệt như vậy, vì bộ tách token xử lý cú pháp JS và TS chuẩn. Nhờ vậy bạn có thể dọn sạch các hàm TypeScript có chú thích kiểu trước khi chia sẻ, hay nén một đoạn code mẫu TypeScript để nhúng vào tài liệu mà không cần chuyển đổi sang JavaScript trước.',
      },
      {
        question: 'Việc minify có làm hỏng JavaScript của tôi không?',
        answer:
          'Không, việc minify sẽ không làm hỏng JavaScript của bạn, miễn là code của bạn dùng dấu chấm phẩy chuẩn. Công cụ chỉ loại bỏ ghi chú và khoảng trắng thừa, nên logic vẫn giống hệt như trước. Tuy nhiên, nếu code của bạn dựa vào việc tự chèn dấu chấm phẩy một cách mơ hồ, việc loại bỏ dấu xuống dòng có thể gây ra lỗi, vì vậy bạn hãy thêm dấu chấm phẩy đầy đủ trước khi minify.',
      },
      {
        question: 'JavaScript Minifier có xóa câu lệnh console.log không?',
        answer:
          'Không, JavaScript Minifier không xóa câu lệnh console.log. Công cụ chỉ loại bỏ ghi chú và khoảng trắng, nên các lệnh console.log và các câu lệnh khác vẫn còn trong kết quả. Nếu bạn muốn loại bỏ console.log khỏi code production, bạn cần dùng bundler chuyên dụng như Terser hay esbuild với tùy chọn drop console. Với đoạn code mẫu hay bookmarklet, việc giữ lại console.log thường là mong muốn để còn gỡ lỗi.',
      },
      {
        question: 'Tôi có thể beautify code đã minify từ bundle production không?',
        answer:
          'Có, bạn hoàn toàn có thể beautify code đã minify từ bundle production. Bạn chỉ cần dán code một dòng gọn nhẹ vào chế độ Beautify để thụt lề lại thành các dòng dễ đọc cho việc gỡ lỗi. Cách này rất hữu ích khi bạn cần hiểu một đoạn code của bên thứ ba hay tìm ra dòng nào gây lỗi trong file đã nén.',
      },
      {
        question: 'JavaScript Minifier có xử lý template literal với biểu thức ${} không?',
        answer:
          'Có, công cụ xử lý template literal với biểu thức ${}. Các template literal trong dấu backtick, kể cả phần nội suy ${}, đều được tách token dưới dạng chuỗi và giữ nguyên chính xác. Nhờ vậy các chuỗi mẫu động trong code của bạn, ví dụ thông báo lỗi có chèn tên người dùng, vẫn hoạt động đúng sau khi minify, và bạn không cần lo dấu ngoặc nhọn bên trong template bị hiểu nhầm thành khối code.',
      },
      {
        question: 'Trong JavaScript Minifier, minify và beautify khác nhau như thế nào?',
        answer:
          'Minify loại bỏ ghi chú và khoảng trắng để thu nhỏ code cho việc dùng nội tuyến, còn Beautify thụt lề lại code gọn nhẹ thành các dòng dễ đọc để chỉnh sửa. Hai chế độ là hai hướng ngược nhau: bạn minify trước khi nhúng code vào trang hay bookmarklet để tiết kiệm dung lượng, và beautify khi nhận được code đã nén từ production hay bên thứ ba mà bạn cần đọc hiểu và gỡ lỗi.',
      },
      {
        question: 'Tôi có thể minify code ES6 với arrow function và class không?',
        answer:
          'Có, bạn hoàn toàn có thể minify code ES6 với arrow function và class. Các arrow function, class, destructuring và cú pháp ES6 hiện đại khác đều được bộ tách token xử lý mà không làm thay đổi code. Nhờ vậy bạn có thể dùng công cụ cho code hiện đại mà không cần chuyển đổi về ES5 trước, và kết quả vẫn chạy đúng trên các trình duyệt hiện đại hỗ trợ ES6.',
      },
      {
        question: 'JavaScript Minifier có hỗ trợ code JSX hay React không?',
        answer:
          'JSX không được hỗ trợ riêng, vì dấu ngoặc nhọn trong JSX có thể bị bộ tách token đọc nhầm thành khối code hay phép so sánh. Bạn nên dùng công cụ này cho JavaScript hay TypeScript thuần, và dùng trình định dạng chuyên dụng như Prettier cho JSX. Nếu bạn cố minify JSX bằng công cụ này, kết quả có thể bị sai, nên tốt nhất bạn hãy tách phần logic JS thuần ra để xử lý riêng.',
      },
      {
        question: 'Sau khi minify, JavaScript của tôi sẽ nhỏ đi bao nhiêu?',
        answer:
          'Mức độ thu nhỏ phụ thuộc vào số lượng ghi chú và dấu xuống dòng trong code của bạn; công cụ sẽ hiển thị chính xác số byte và phần trăm tiết kiệm cho đoạn mã của bạn. Code viết tay với nhiều ghi chú giải thích có thể giảm đáng kể, trong khi code đã gọn sẵn chỉ giảm vài phần trăm.',
      },
      {
        question: 'Tôi có thể minify nhiều file JavaScript cùng một lúc không?',
        answer:
          'Công cụ xử lý một đoạn mã tại một thời điểm, nên bạn hãy dán từng file riêng lẻ. Với toàn bộ dự án, bạn nên dùng bundler như esbuild hay Terser, vốn xử lý được nhiều file, tối ưu hóa sâu hơn và tạo ra bundle production hoàn chỉnh. Công cụ này phù hợp nhất cho các đoạn mã nhỏ, bookmarklet hay code mẫu cần xử lý nhanh mà không muốn thiết lập cả một quy trình build.',
      },
      {
        question: 'JavaScript Minifier có giữ nguyên biểu thức chính quy không?',
        answer:
          'Có, JavaScript Minifier giữ nguyên biểu thức chính quy. Các literal biểu thức chính quy được bộ tách token nhận diện và giữ nguyên vẹn, kể cả các ký tự // bên trong mẫu. Nhờ vậy các mẫu regex dùng để xác thực email, số điện thoại hay định dạng ngày tháng trong code của bạn vẫn hoạt động đúng sau khi minify, mà không bị cắt mất hay hiểu nhầm thành ghi chú.',
      },
      {
        question: 'Điều gì xảy ra nếu JavaScript của tôi có lỗi cú pháp?',
        answer:
          'Công cụ vẫn xử lý văn bản, nhưng dấu ngoặc nhọn không cân bằng hay chuỗi chưa đóng có thể tạo ra kết quả lạ, nên bạn hãy sửa lỗi cú pháp trước khi minify. Một lỗi nhỏ như thiếu dấu đóng ngoặc có thể khiến toàn bộ phần còn lại bị hiểu sai, và lỗi đó sẽ khó phát hiện hơn sau khi code đã nén thành một dòng.',
      },
      {
        question: 'Tôi có thể dùng JavaScript Minifier cho bookmarklet không?',
        answer:
          'Có, bạn hoàn toàn có thể dùng JavaScript Minifier cho bookmarklet. Chế độ Minify rất phù hợp cho bookmarklet, vì nó thu gọn đoạn mã thành một dòng duy nhất mà bạn có thể dán vào URL của bookmark. Nhờ vậy bạn có thể tạo nhanh các công cụ nhỏ chạy trên bất kỳ trang nào, ví dụ trích xuất liên kết hay thay đổi giao diện, mà không cần cài đặt extension hay viết code phức tạp.',
      },
      {
        question: 'Kết quả đã minify có an toàn để dán vào thẻ script trong HTML không?',
        answer:
          'Nhìn chung là an toàn, nhưng bạn nên tránh chuỗi "</script>" theo nghĩa đen bên trong các chuỗi ký tự của mình, vì trình duyệt sẽ hiểu đó là điểm kết thúc của khối script. Nếu code của bạn chứa chuỗi đó, ví dụ khi tạo thẻ script động, bạn hãy tách nó thành "<" + "/script>" hay dùng ký tự escape.',
      },
      {
        question: 'Tôi có thể định dạng JavaScript trên điện thoại không?',
        answer:
          'Có, bạn có thể định dạng JavaScript trên điện thoại. JavaScript Minifier hoạt động trong mọi trình duyệt di động hiện đại, nên bạn có thể dán và định dạng code mà không cần cài đặt gì thêm. Điều này rất tiện khi bạn cần kiểm tra nhanh một đoạn code trong lúc đang di chuyển, hay khi đồng nghiệp gửi cho bạn một hàm cần dọn sạch mà bạn không có máy tính bên cạnh.',
      },
    ],
  },
  'cron-expression-parser': {
    instructions: [
      {
        title: 'Nhập biểu thức cron 5 trường hoặc chọn preset',
        description:
          'Gõ bất kỳ biểu thức cron nào như `0 9 * * 1-5`, hoặc bấm nút preset lịch trình phổ biến để bắt đầu từ một mẫu đã biết.',
      },
      {
        title: 'Kiểm tra tóm tắt bằng tiếng Anh đơn giản và phân tích từng trường',
        description:
          'Xác minh các trường phút, giờ, ngày trong tháng, tháng và ngày trong tuần khớp với ý định của bạn trước khi tin tưởng lịch trình đó.',
      },
      {
        title: 'Xác minh 8 lần chạy tiếp theo',
        description:
          'Xem lại các timestamp thực thi sắp tới theo giờ địa phương đã tính được, để xác nhận job chạy đúng lúc bạn mong đợi.',
      },
      {
        title: 'Điều chỉnh trường bằng bước, khoảng và danh sách',
        description:
          'Tinh chỉnh lịch trình bằng giá trị bước như */15, khoảng như 1-5 hay danh sách như 1,15, rồi kiểm tra lại tóm tắt và thời gian chạy.',
      },
      {
        title: 'Sao chép biểu thức cho bộ lập lịch của bạn',
        description:
          'Sao chép biểu thức đã xác minh vào crontab, workflow GitHub Actions hay cron trigger của Cloudflare Worker của bạn.',
      },
      {
        title: 'Lưu ý ngày trong tháng và ngày trong tuần',
        description:
          'Nếu cả hai trường ngày đều bị giới hạn, cron chuẩn sẽ chạy khi một trong hai khớp. Bạn hãy dùng * ở một trường nếu chỉ muốn một điều kiện có hiệu lực.',
      },
    ],
    examples: [
      {
        title: 'Job buổi sáng trong giờ làm việc',
        input: '0 9 * * 1-5',
        output: 'Lúc 09:00, vào ngày trong tuần 1-5 (thứ Hai đến thứ Sáu).',
        explanation: 'Chạy lúc 09:00 sáng mỗi thứ Hai đến thứ Sáu.',
      },
      {
        title: 'Job chạy mỗi 15 phút',
        input: '*/15 * * * *',
        output: 'Mỗi 15 phút một lần: :00, :15, :30, :45.',
        explanation: 'Cú pháp bước ở trường phút làm job chạy mỗi 15 phút.',
      },
    ],
    benefits: [
      'Hỗ trợ ký tự đại diện (*), bước (*/5), khoảng (1-5), danh sách (1,15) và tên (MON-FRI)',
      'Tính 8 timestamp thực thi cụ thể tiếp theo theo múi giờ địa phương của bạn',
      'Gắn cờ ngay lập tức các giá trị ngoài khoảng hay trường còn thiếu',
      'Có preset một cú nhấp chuột cho các khoảng thời gian phổ biến',
    ],
    useCases: [
      'Xác minh schedule.cron của GitHub Actions và Cron Trigger của Cloudflare Workers',
      'Gỡ lỗi lịch trình sao lưu hay dọn dẹp trong crontab Linux',
      'Kiểm tra lại logic ngày trong tuần (0–6) và ngày trong tháng (1–31)',
      'Ghi lại lịch trình job lặp lại cho sổ tay vận hành',
    ],
    faqs: [
      {
        question: 'Trình phân tích này có hỗ trợ biểu thức cron 6 trường với giây không?',
        answer:
          'Công cụ này phân tích biểu thức crontab Unix chuẩn 5 trường gồm phút, giờ, ngày trong tháng, tháng và ngày trong tuần, vốn được Linux cron, GitHub Actions và Cloudflare Workers dùng. Các bộ lập lịch cần giây sẽ dùng định dạng 6 trường khác, ví dụ Quartz, và bạn cần công cụ riêng cho loại đó.',
      },
      {
        question: 'Điều gì xảy ra nếu cả ngày trong tháng và ngày trong tuần đều không phải ký tự đại diện?',
        answer:
          'Theo hành vi cron Vixie và Unix chuẩn, khi cả hai trường ngày đều bị giới hạn, một lần chạy sẽ kích hoạt nếu ngày trong tháng HOẶC ngày trong tuần khớp. Đây là nguyên nhân phổ biến nhất khiến job chạy vào những ngày không mong đợi, vì nhiều người tưởng cả hai điều kiện phải cùng đúng. Để sửa, bạn hãy đặt một trong hai trường thành * để chỉ còn một điều kiện có hiệu lực.',
      },
      {
        question: 'Tên MON–FRI và JAN–DEC có được hỗ trợ không?',
        answer:
          'Có, các tên viết tắt tiếng Anh chuẩn 3 chữ cái cho tháng và ngày trong tuần đều được hỗ trợ, cùng với số 0 hay 7 cho Chủ Nhật. Nhờ vậy bạn có thể viết 0 9 * * MON-FRI thay vì 0 9 * * 1-5, và biểu thức vẫn được hiểu đúng.',
      },
      {
        question: 'Công cụ Cron Expression Parser có miễn phí không?',
        answer:
          'Có, Cron Expression Parser hoàn toàn miễn phí, không cần đăng ký tài khoản và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể kiểm tra bao nhiêu biểu thức tùy thích, từ lịch trình đơn giản mỗi giờ một lần cho tới các biểu thức phức tạp với nhiều khoảng và danh sách, mà không gặp giới hạn nào. Công cụ luôn sẵn sàng mỗi khi bạn cần xác minh một lịch trình trước khi triển khai.',
      },
      {
        question: 'Biểu thức cron là gì?',
        answer:
          'Biểu thức cron là một chuỗi lịch trình gọn nhẹ gồm 5 trường, cho hệ thống biết khi nào chạy một job tự động, ví dụ mỗi giờ một lần hay mỗi ngày trong tuần lúc 9 giờ sáng. Thay vì viết code lập lịch phức tạp, bạn chỉ cần một dòng ngắn gọn mà mọi hệ thống cron đều hiểu.',
      },
      {
        question: '5 trường trong biểu thức cron có nghĩa là gì?',
        answer:
          'Từ trái sang phải, 5 trường là phút từ 0 tới 59, giờ từ 0 tới 23, ngày trong tháng từ 1 tới 31, tháng từ 1 tới 12, và ngày trong tuần từ 0 tới 7, trong đó cả 0 và 7 đều có nghĩa là Chủ Nhật. Mỗi trường chấp nhận ký tự đại diện *, bước dạng */n, khoảng dạng a-b và danh sách dạng a,b.',
      },
      {
        question: 'Làm thế nào để chạy job cron mỗi 5 phút?',
        answer:
          'Bạn dùng cú pháp bước trong trường phút: */5 * * * * sẽ chạy job mỗi 5 phút, vào các phút :00, :05, :10 và tiếp tục như vậy. Dấu * nghĩa là mọi giá trị, còn /5 nghĩa là mỗi 5 đơn vị một lần, nên kết hợp lại thành mỗi 5 phút.',
      },
      {
        question: 'Làm thế nào để lập lịch job cron lúc 9 giờ sáng các ngày trong tuần?',
        answer:
          'Bạn dùng biểu thức 0 9 * * 1-5, trong đó phút là 0, giờ là 9, ngày trong tháng và tháng là bất kỳ, còn ngày trong tuần là 1 tới 5, tức thứ Hai đến thứ Sáu. Bạn cũng có thể viết 0 9 * * MON-FRI cho dễ đọc hơn, vì hai dạng này hoàn toàn tương đương.',
      },
      {
        question: '*/15 trong biểu thức cron có nghĩa là gì?',
        answer:
          'Cú pháp bước */15 có nghĩa là mỗi 15 đơn vị của trường đó, nên */15 trong trường phút sẽ chạy job mỗi 15 phút. Dấu * nghĩa là mọi giá trị có thể, còn /15 nghĩa là lấy mỗi giá trị thứ 15, bắt đầu từ 0. Nhờ vậy job sẽ chạy vào :00, :15, :30 và :45 mỗi giờ, rất phù hợp cho các tác vụ đồng bộ dữ liệu hay kiểm tra trạng thái định kỳ.',
      },
      {
        question: 'Số 0 và 7 cho Chủ Nhật trong cron khác nhau như thế nào?',
        answer:
          'Số 0 và 7 không có gì khác nhau; cả hai đều biểu diễn Chủ Nhật trong trường ngày trong tuần, nên bạn có thể dùng số nào cũng được. Sự trùng lặp này xuất phát từ lịch sử, khi một số hệ thống dùng 0 và một số dùng 7 cho Chủ Nhật, và chuẩn cron đã chấp nhận cả hai để tương thích.',
      },
      {
        question: 'Tôi có thể dùng Cron Expression Parser này cho lịch trình GitHub Actions không?',
        answer:
          'Có, bạn hoàn toàn có thể dùng cho lịch trình GitHub Actions. GitHub Actions dùng cùng cú pháp cron 5 trường, nên bạn có thể xác minh lịch trình ở đây trước khi dán vào file workflow của mình. Bạn cần nhớ GitHub Actions chạy theo giờ UTC, nên nếu bạn muốn job chạy lúc 9 giờ sáng theo giờ Việt Nam, bạn phải đổi sang 2 giờ sáng UTC trong biểu thức cron.',
      },
      {
        question: 'Cron Expression Parser có tính tới múi giờ của tôi không?',
        answer:
          '8 lần chạy tiếp theo được hiển thị theo múi giờ địa phương của trình duyệt bạn, nhưng bạn hãy nhớ cron vốn chạy theo múi giờ của máy chủ, nên bạn cần kiểm tra cả cài đặt máy chủ nữa. Ví dụ, một job lập lịch lúc 9 giờ sáng trên máy chủ ở Mỹ sẽ chạy vào buổi tối theo giờ Việt Nam.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi nhập biểu thức cron không hợp lệ?',
        answer:
          'Trình phân tích sẽ gắn cờ ngay lập tức các giá trị ngoài khoảng hay trường còn thiếu, để bạn có thể sửa biểu thức trước khi triển khai. Ví dụ, phút là 75 hay tháng là 13 sẽ bị báo lỗi rõ ràng, thay vì âm thầm chạy sai hay không chạy gì cả.',
      },
      {
        question: 'Tôi có thể lập lịch job cron cho ngày cuối cùng của tháng không?',
        answer:
          'Cron chuẩn 5 trường không có cú pháp cho ngày cuối tháng. Cách giải quyết phổ biến là lập lịch vào các ngày 28 tới 31, rồi để chính job kiểm tra xem hôm đó có phải ngày cuối tháng hay không. Bạn có thể viết một dòng kiểm tra đơn giản trong script, ví dụ chỉ chạy tiếp khi ngày mai là ngày 1 của tháng sau.',
      },
      {
        question: 'L và W trong biểu thức cron có nghĩa là gì?',
        answer:
          'L nghĩa là last, còn W nghĩa là weekday, là các phần mở rộng kiểu Quartz, không thuộc cron Unix chuẩn, nên trình phân tích này không hỗ trợ chúng. Nếu bạn cần lập lịch vào ngày làm việc cuối cùng của tháng hay ngày làm việc gần nhất với một ngày cụ thể, bạn cần dùng bộ lập lịch hỗ trợ Quartz hay viết logic kiểm tra trong chính job của mình.',
      },
      {
        question: 'Làm thế nào để chạy job cron hai lần một ngày?',
        answer:
          'Bạn liệt kê cả hai giờ trong trường giờ, ví dụ 0 6,18 * * * sẽ chạy job lúc 6 giờ sáng và 6 giờ chiều mỗi ngày. Dấu phẩy trong cron có nghĩa là danh sách các giá trị, nên bạn có thể liệt kê bao nhiêu giờ tùy thích, ví dụ 0 6,12,18 * * * cho ba lần một ngày.',
      },
      {
        question: 'Cron Expression Parser có hỗ trợ giây hay biểu thức 6 trường không?',
        answer:
          'Không, công cụ chỉ hỗ trợ biểu thức Unix chuẩn 5 trường; các bộ lập lịch cần giây sẽ dùng định dạng 6 trường khác. Nếu hệ thống của bạn yêu cầu giây, ví dụ Quartz hay một số bộ lập lịch Node.js, bạn cần công cụ phân tích riêng cho định dạng đó. Với Linux cron, GitHub Actions và Cloudflare Workers, định dạng 5 trường là đủ và được hỗ trợ rộng rãi nhất trong thực tế.',
      },
      {
        question: 'Tôi có thể xem trước các lần chạy cron cho một khoảng ngày cụ thể không?',
        answer:
          'Công cụ sẽ xem trước 8 lần chạy sắp tới kể từ bây giờ, nhưng không có chế độ xem theo khoảng ngày tùy chỉnh. Tuy vậy, 8 lần chạy tiếp theo thường đủ để phát hiện lỗi lập lịch, ví dụ job chạy vào ngày không mong đợi hay bỏ sót một ngày trong tuần.',
      },
      {
        question: 'Vì sao job cron của tôi chạy vào những ngày không mong đợi?',
        answer:
          'Nguyên nhân phổ biến nhất là bạn đã giới hạn cả ngày trong tháng và ngày trong tuần, khiến job chạy khi một trong hai khớp, thay vì cả hai cùng khớp như nhiều người tưởng. Để sửa, bạn hãy đặt một trong hai trường thành * để chỉ còn một điều kiện có hiệu lực.',
      },
      {
        question: 'Tôi có thể dùng preset cron cho các lịch trình phổ biến không?',
        answer:
          'Có, bạn hoàn toàn có thể dùng preset cron cho các lịch trình phổ biến. Công cụ có các preset một cú nhấp chuột cho các khoảng thời gian phổ biến như mỗi giờ, mỗi ngày, mỗi tuần và mỗi tháng, mà bạn có thể tùy chỉnh thêm sau đó.',
      },
    ],
  },
  'color-converter': {
    instructions: [
      {
        title: 'Chọn hoặc nhập một màu',
        description:
          'Dùng bộ chọn màu, nhập mã HEX 3 hay 6 chữ số, hoặc điều chỉnh từng kênh R/G/B hay H/S/L để đặt màu chữ của bạn.',
      },
      {
        title: 'Xem các giá trị HEX, RGB và HSL',
        description:
          'Kiểm tra các giá trị đã đồng bộ trong cả ba ký hiệu, và xác nhận ô màu trực tiếp khớp với màu bạn định dùng.',
      },
      {
        title: 'Sao chép giá trị màu CSS',
        description:
          'Bấm Copy HEX, Copy RGB hay Copy HSL để lấy chuỗi CSS sẵn sàng dùng cho stylesheet hay design token của bạn.',
      },
      {
        title: 'Chọn một màu nền',
        description:
          'Chọn một màu nền ở phía dưới để so sánh với màu chữ của bạn trong bài kiểm tra độ tương phản.',
      },
      {
        title: 'Kiểm tra kết quả tương phản WCAG',
        description:
          'Đọc tỷ lệ tương phản chính xác và trạng thái Đạt hay Không đạt cho văn bản AA Normal, AAA Normal và AA Large trước khi phát hành cặp màu.',
      },
      {
        title: 'Sửa cặp màu không đạt tương phản',
        description:
          'Nếu cặp màu không đạt, hãy giảm Lightness trong HSL để làm tối màu chữ, hoặc làm sáng màu nền, cho tới khi tỷ lệ đạt ít nhất 4.5:1 cho văn bản thường.',
      },
    ],
    examples: [
      {
        title: 'Xanh cobalt dễ tiếp cận trên nền trắng',
        input: 'Foreground: #2563EB · Background: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contrast: 5.17:1 (AA Pass)',
        explanation: 'Đáp ứng yêu cầu WCAG AA 4.5:1 cho văn bản nội dung chuẩn.',
      },
      {
        title: 'Màu thương hiệu nhạt không đạt chuẩn',
        input: 'Foreground: #93C5FD · Background: #FFFFFF',
        output: 'Contrast: 1.80:1 (AA Fail)',
        explanation: 'Màu xanh nhạt trên nền trắng nằm dưới chuẩn AA — hãy dùng sắc tối hơn cho văn bản, hoặc chỉ dùng cho văn bản lớn và yếu tố trang trí.',
      },
    ],
    benefits: [
      'Đồng bộ các kênh HEX, RGB và HSL hai chiều theo thời gian thực',
      'Có sẵn máy tính tương phản độ sáng tương đối theo WCAG 2.1',
      'Kiểm tra các ngưỡng AA Normal (4.5:1), AAA Normal (7.0:1) và AA Large (3.0:1)',
      'Sao chép chuỗi màu CSS hợp lệ chỉ bằng một cú nhấp chuột',
    ],
    useCases: [
      'Xác minh độ tương phản của chữ trên nút bấm và liên kết khi triển khai giao diện',
      'Chuyển bảng màu HEX của thương hiệu sang HSL cho Tailwind hay biến CSS',
      'Tinh chỉnh độ sáng và độ bão hòa mà không cần rời khỏi trình duyệt',
      'Kiểm tra tuân thủ khả năng tiếp cận trước khi bàn giao thiết kế',
    ],
    faqs: [
      {
        question: 'Tỷ lệ tương phản nào là bắt buộc cho văn bản nội dung chuẩn WCAG 2.1 AA?',
        answer:
          'Chuẩn WCAG 2.1 AA yêu cầu ít nhất 4.5:1 cho văn bản thường và 3.0:1 cho văn bản lớn, tức 18pt hay 24px với chữ thường, hoặc 14pt hay 18.66px với chữ đậm. Ngưỡng 4.5:1 được chọn để người khiếm thị nhẹ hay nhìn trong điều kiện ánh sáng mạnh vẫn đọc được. Nếu cặp màu của bạn chỉ đạt 3.0:1, bạn chỉ nên dùng nó cho tiêu đề lớn, không dùng cho đoạn văn bản dài.',
      },
      {
        question: 'Tôi có thể nhập mã HEX viết tắt 3 chữ số như #09f không?',
        answer:
          'Có, bạn hoàn toàn có thể nhập mã HEX viết tắt 3 chữ số. Mã HEX ba ký tự sẽ tự động mở rộng thành dạng tương đương 6 ký tự, nên #09f sẽ thành #0099ff và chuyển đổi chính xác như mã đầy đủ. Quy tắc mở rộng rất đơn giản: mỗi chữ số được lặp lại hai lần, ví dụ #abc thành #aabbcc.',
      },
      {
        question: 'Vì sao HSL giúp điều chỉnh theme dễ hơn RGB?',
        answer:
          'HSL tách riêng Hue, Saturation và Lightness, nhờ đó bạn có thể làm tối hay sáng một màu thương hiệu chỉ bằng cách thay đổi phần trăm Lightness. Với RGB, bạn phải điều chỉnh cả ba kênh đỏ, xanh lá và xanh dương cùng lúc mà vẫn khó giữ nguyên sắc độ. Nhờ HSL, việc tạo biến thể sáng và tối cho theme, hay tạo bảng màu đơn sắc nhất quán, trở nên trực quan và nhanh hơn nhiều.',
      },
      {
        question: 'Công cụ Color Converter có miễn phí không?',
        answer:
          'Có, Color Converter hoàn toàn miễn phí, không cần đăng ký tài khoản và chạy hoàn toàn trong trình duyệt của bạn. Bạn có thể chuyển đổi bao nhiêu màu tùy thích, từ một màu thương hiệu đơn lẻ cho tới cả bảng màu của một dự án, mà không gặp giới hạn nào. Công cụ luôn sẵn sàng mỗi khi bạn cần kiểm tra nhanh một cặp màu trước khi đưa vào thiết kế hay code.',
      },
      {
        question: 'Color Converter có lưu trữ màu của tôi không?',
        answer:
          'Không, Color Converter không lưu trữ màu của bạn. Việc chuyển đổi và kiểm tra tương phản diễn ra trong trình duyệt trên máy của bạn, nên lựa chọn bảng màu của bạn không bao giờ được tải lên hay lưu trữ ở đâu. Bạn có thể yên tâm thử nghiệm với bảng màu thương hiệu chưa công bố hay màu của khách hàng mà không lo bị rò rỉ ra ngoài qua mạng.',
      },
      {
        question: 'Làm thế nào để chuyển HEX sang RGB bằng Color Converter?',
        answer:
          'Bạn nhập mã HEX như #2563EB, và giá trị RGB sẽ xuất hiện ngay lập tức, sẵn sàng để sao chép dưới dạng chuỗi CSS rgb(). Bạn không cần tự tính toán hay tra bảng chuyển đổi, vì công cụ đồng bộ cả ba ký hiệu HEX, RGB và HSL theo thời gian thực. Bạn cũng có thể điều chỉnh từng kênh R, G hay B, và mã HEX sẽ tự cập nhật theo để bạn sao chép.',
      },
      {
        question: 'Làm thế nào để chuyển RGB sang HSL?',
        answer:
          'Bạn nhập các giá trị RGB hay điều chỉnh các kênh R, G và B, và giá trị HSL tương ứng sẽ cập nhật trực tiếp trong cùng một panel. Nhờ đồng bộ hai chiều, bạn cũng có thể làm ngược lại: nhập HSL rồi đọc giá trị RGB tương ứng.',
      },
      {
        question: 'HEX, RGB và HSL khác nhau như thế nào?',
        answer:
          'HEX là mã gọn nhẹ cho một màu, RGB định nghĩa màu bằng lượng đỏ, xanh lá và xanh dương, còn HSL định nghĩa màu bằng sắc độ, độ bão hòa và độ sáng. Cả ba đều mô tả cùng một màu, chỉ khác ký hiệu, nên bạn có thể chuyển đổi qua lại mà không làm mất thông tin.',
      },
      {
        question: 'Tỷ lệ tương phản nào cần cho chuẩn WCAG AAA?',
        answer:
          'Chuẩn WCAG AAA yêu cầu ít nhất 7.0:1 cho văn bản thường và 4.5:1 cho văn bản lớn, nghiêm ngặt hơn nhiều so với mức AA. Mức AAA thường chỉ bắt buộc với các trang chính phủ hay dịch vụ công, vì rất ít màu thương hiệu đạt được 7.0:1 trên nền trắng. Nếu bạn hướng tới AAA, bạn sẽ cần dùng màu chữ rất tối, gần như đen, hoặc nền rất tối với chữ gần như trắng.',
      },
      {
        question: 'Văn bản lớn được tính như thế nào trong tương phản WCAG?',
        answer:
          'Văn bản lớn là chữ từ 18pt hay 24px trở lên với chữ thường, hoặc từ 14pt hay 18.66px trở lên với chữ đậm. Văn bản lớn chỉ cần tỷ lệ 3.0:1 cho mức AA, vì chữ càng lớn thì càng dễ đọc ngay cả khi tương phản thấp hơn. Nhờ vậy nhiều màu thương hiệu sáng vẫn dùng được cho tiêu đề lớn, dù chúng không đạt chuẩn cho đoạn văn bản nhỏ.',
      },
      {
        question: 'Tôi có thể chuyển đổi màu có độ trong suốt (alpha) trong Color Converter không?',
        answer:
          'Công cụ này xử lý màu đặc không có kênh alpha. Với độ trong suốt, bạn hãy lấy các giá trị RGB đã chuyển đổi rồi dùng chúng bên trong hàm rgba(). Ví dụ, màu #2563EB với độ trong suốt 50% sẽ thành rgba(37, 99, 235, 0.5). Cách này giúp bạn vẫn dùng được màu đã chuyển đổi cho lớp phủ hay nền mờ, mà không cần công cụ riêng hỗ trợ kênh alpha.',
      },
      {
        question: 'Color Converter có hỗ trợ mã HEX 8 chữ số với alpha không?',
        answer:
          'Không, công cụ chỉ chấp nhận mã HEX chuẩn 3 và 6 chữ số; với độ trong suốt, bạn hãy dùng giá trị RGB đầu ra kèm giá trị alpha trong hàm rgba(). Mã HEX 8 chữ số tuy được một số trình duyệt hiện đại hỗ trợ, nhưng không phải công cụ nào cũng hiểu, nên việc chuyển sang rgba() sẽ tương thích rộng rãi hơn.',
      },
      {
        question: 'Tôi có thể lấy màu từ hình ảnh bằng Color Converter không?',
        answer:
          'Không, công cụ không lấy mẫu màu từ hình ảnh; bạn hãy nhập giá trị HEX của màu mình muốn, hoặc chọn nó bằng bộ chọn màu tích hợp. Nếu bạn cần lấy màu từ ảnh chụp màn hình hay logo, bạn có thể dùng công cụ eyedropper của trình duyệt hay phần mềm thiết kế để đọc mã HEX, rồi dán mã đó vào đây để chuyển đổi và kiểm tra tương phản.',
      },
      {
        question: 'Tỷ lệ tương phản WCAG được tính như thế nào?',
        answer:
          'Tỷ lệ tương phản được tính từ độ sáng tương đối của màu chữ và màu nền, theo công thức quy định trong đặc tả WCAG 2.1. Trước tiên, mỗi kênh màu được chuyển sang không gian tuyến tính, rồi kết hợp thành độ sáng tương đối với trọng số khác nhau cho đỏ, xanh lá và xanh dương.',
      },
      {
        question: 'Vì sao màu thương hiệu của tôi không đạt AA trên nền trắng?',
        answer:
          'Các màu thương hiệu nhạt hay tông trung bình thường nằm dưới ngưỡng 4.5:1 so với nền trắng. Ví dụ, màu xanh nhạt #93C5FD trên nền trắng chỉ đạt 1.80:1, còn rất xa chuẩn AA. Bạn nên làm tối màu đó, hoặc chỉ dùng nó cho văn bản lớn và yếu tố trang trí, đồng thời chọn một sắc tối hơn của cùng màu thương hiệu cho đoạn văn bản dài.',
      },
      {
        question: 'Tôi có thể sao chép màu dưới dạng biến CSS từ Color Converter không?',
        answer:
          'Có, bạn hoàn toàn có thể sao chép màu dưới dạng biến CSS. Bạn sao chép giá trị HEX, RGB hay HSL rồi dán vào một custom property CSS, ví dụ --brand: #2563EB, sau đó tham chiếu nó bằng var(--brand). Cách này giúp bạn quản lý bảng màu tập trung: khi cần đổi màu thương hiệu, bạn chỉ sửa một chỗ duy nhất, và toàn bộ website sẽ tự cập nhật theo mà không cần tìm từng chỗ dùng màu.',
      },
      {
        question: 'HSL và HSV khác nhau như thế nào?',
        answer:
          'HSL mô tả màu bằng sắc độ, độ bão hòa và độ sáng, còn HSV dùng sắc độ, độ bão hòa và giá trị hay độ chói. HSL thường dễ hơn khi tạo các biến thể theme sáng và tối dễ tiếp cận, vì việc thay đổi Lightness trong HSL cho ra các sắc độ đều nhau hơn.',
      },
      {
        question: 'Tôi có thể chuyển đổi màu CSS có tên như "red" trong Color Converter không?',
        answer:
          'Bạn hãy nhập giá trị HEX của màu có tên thay vì nhập tên, ví dụ red là #FF0000. Công cụ chấp nhận đầu vào HEX, RGB và HSL, nhưng không nhận tên màu bằng chữ. Bạn có thể tra mã HEX của 148 màu CSS có tên trong tài liệu MDN, rồi dán mã đó vào công cụ để chuyển đổi và kiểm tra tương phản như với bất kỳ màu nào khác.',
      },
      {
        question: 'Làm thế nào để tìm sắc tối hơn của màu thương hiệu?',
        answer:
          'Bạn chuyển màu sang HSL, giữ nguyên sắc độ và độ bão hòa, rồi hạ dần phần trăm Lightness cho tới khi đạt sắc độ mong muốn. Ví dụ, màu #93C5FD có Lightness khoảng 79%, và bạn cần hạ xuống dưới 50% mới có cơ hội đạt chuẩn AA trên nền trắng. Cách này giữ nguyên bản sắc của màu thương hiệu, chỉ làm nó tối hơn, nên bảng màu của bạn vẫn nhất quán và dễ nhận diện.',
      },
      {
        question: 'Tôi có thể dùng Color Converter trên điện thoại không?',
        answer:
          'Có, bạn hoàn toàn có thể dùng Color Converter trên điện thoại. Công cụ hoạt động trong mọi trình duyệt di động hiện đại, nên bạn có thể chuyển đổi màu và kiểm tra tương phản mà không cần cài đặt gì thêm. Điều này rất tiện khi bạn đang xem thiết kế trên điện thoại và muốn kiểm tra nhanh một cặp màu, hay khi khách hàng gửi cho bạn một mã màu cần xác minh ngay.',
      },
    ],
  },
};
