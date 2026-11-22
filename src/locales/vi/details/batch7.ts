// Detail content for VI tools — batch 7.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Chọn ảnh nguồn',
        description:
          'Chọn bất kỳ ảnh PNG, JPG, WebP hoặc GIF nào trên thiết bị của bạn để giải mã kích thước và dung lượng gốc theo byte.',
      },
      {
        title: 'Chọn định dạng đích, giới hạn chiều rộng và chất lượng',
        description:
          'Chọn WebP hoặc JPG để giảm dung lượng mạnh, có thể đặt giới hạn chiều rộng tối đa (ví dụ 1920 px hoặc 1280 px) và chỉnh thanh trượt chất lượng từ 10% đến 100%.',
      },
      {
        title: 'Chạy nén ảnh',
        description:
          'Nhấn Nén để mã hoá lại ảnh ngay trong trình duyệt của bạn và xem dung lượng mới tức thì.',
      },
      {
        title: 'So sánh trước và sau',
        description:
          'Xem bản xem trước đặt cạnh nhau cùng mức tiết kiệm byte và phần trăm chính xác để chắc chắn chất lượng vẫn trông ổn.',
      },
      {
        title: 'Tải tệp đã nén',
        description:
          'Nhấn Tải xuống để lưu ảnh đã tối ưu về thiết bị, rồi lặp lại quy trình với tệp khác bất cứ khi nào bạn cần.',
      },
      {
        title: 'Mẹo: đầu ra lớn hơn đầu vào?',
        description:
          'Nếu một ảnh PNG nhỏ lại phình to sau khi nén, hãy đổi định dạng đầu ra sang WebP hoặc JPG, hoặc hạ nhẹ thanh trượt chất lượng rồi nén lại.',
      },
    ],
    examples: [
      {
        title: 'Tối ưu ảnh hero 2,4 MB cho bài viết blog',
        input: '3840×2160 JPG · Đầu ra: WebP · Chiều rộng tối đa: 1280 px · Chất lượng: 80%',
        output: 'WebP 1280×720 thường khoảng 85–140 KB (giảm tải trọng −94%)',
        explanation: 'Kết hợp giới hạn kích thước với nén WebP hiện đại giúp tăng tốc đáng kể chỉ số Largest Contentful Paint.',
      },
      {
        title: 'Thu nhỏ ảnh chụp màn hình cho tệp đính kèm email',
        input: 'Ảnh chụp màn hình PNG 1920×1080 · Đầu ra: JPG · Chất lượng: 75%',
        output: 'Ảnh JPG khoảng 200 KB, vừa dễ dàng với giới hạn đính kèm email',
        explanation: 'Đầu ra JPG giúp ảnh chụp màn hình PNG nhỏ hơn nhiều mà văn bản trong ảnh vẫn đọc được rõ.',
      },
    ],
    benefits: [
      'Không tải lên máy chủ — đồ hoạ sản phẩm chưa phát hành và ảnh riêng tư hoàn toàn ở lại trên máy của bạn',
      'Hỗ trợ mã hoá lại WebP, JPEG (tự động lấp nền trắng cho vùng trong suốt) và PNG',
      'Hiển thị ngay dung lượng byte trước và sau thực tế cùng phần trăm tiết kiệm',
      'Giới hạn chiều rộng tối đa tuỳ chọn giúp thay đổi kích thước ảnh máy ảnh quá lớn chỉ trong một lần',
    ],
    useCases: [
      'Thu nhỏ banner hero và ảnh chụp màn hình để cải thiện Core Web Vitals và LCP',
      'Chuẩn bị tệp đính kèm nhẹ hơn cho email, cổng thông tin và tải lên CMS',
      'Chuyển ảnh chụp màn hình thô nặng nề thành tài sản web WebP nhẹ',
      'Nhanh chóng kiểm tra sự đánh đổi giữa chất lượng và độ trung thực hình ảnh',
    ],
    faqs: [
      {
        question: 'Vì sao nén một ảnh PNG nhỏ sang PNG đôi khi lại làm tệp lớn hơn?',
        answer:
          'Canvas trong trình duyệt mã hoá lại ảnh PNG bằng luồng DEFLATE không mất dữ liệu tiêu chuẩn, mà không có công cụ lượng tử hoá bảng màu chuyên biệt như pngquant. Chuyển định dạng đầu ra sang WebP hoặc JPG thường giúp dung lượng tệp giảm mạnh ngay lập tức.',
      },
      {
        question: 'Ảnh của tôi có được tải lên máy chủ nén bên ngoài không?',
        answer:
          'Không. Mọi bước giải mã, thay đổi kích thước và mã hoá lại bằng Canvas đều chạy hoàn toàn trong bộ nhớ trình duyệt của bạn, vì vậy ảnh không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Điều gì xảy ra với nền trong suốt nếu tôi chọn JPG?',
        answer:
          'Vì JPEG không hỗ trợ kênh alpha trong suốt nên các vùng trong suốt sẽ được lấp đầy bằng màu trắng đặc (#ffffff) trước khi mã hoá, nhờ đó ảnh không xuất hiện các mảng đen lạ.',
      },
      {
        question: 'Công cụ nén ảnh có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký, không có hình mờ và không giới hạn số lượng ảnh bạn nén, dù bạn xử lý một ảnh hay hàng trăm ảnh mỗi ngày.',
      },
      {
        question: 'Tôi có thể nén những định dạng ảnh nào?',
        answer:
          'Bạn có thể nén ảnh PNG, JPG, WebP và GIF, rồi tải kết quả về dưới dạng WebP, JPG hoặc PNG tuỳ theo nhu cầu sử dụng của mình.',
      },
      {
        question: 'Công cụ nén ảnh có thể thu nhỏ ảnh của tôi bao nhiêu?',
        answer:
          'Mức tiết kiệm phụ thuộc vào định dạng gốc và mức chất lượng bạn chọn, nhưng ảnh chuyển sang WebP ở chất lượng 80% thường nhỏ hơn từ 50 đến 90% so với bản gốc.',
      },
      {
        question: 'Nén ảnh có làm giảm chất lượng ảnh không?',
        answer:
          'Các định dạng nén mất dữ liệu như WebP và JPG đánh đổi một chút chi tiết để có tệp nhỏ hơn nhiều. Hãy dùng thanh trượt chất lượng và bản xem trước để tìm điểm cân bằng ưng ý, hoặc giữ PNG để có kết quả không mất dữ liệu.',
      },
      {
        question: 'Công cụ nén ảnh có thay đổi kích thước ảnh của tôi không?',
        answer:
          'Chỉ khi bạn đặt giới hạn chiều rộng tối đa. Nếu không, số điểm ảnh chiều rộng và chiều cao giữ nguyên, chỉ dung lượng tệp thay đổi mà thôi.',
      },
      {
        question: 'Tôi có thể nén ảnh để gửi kèm email không?',
        answer:
          'Có, nén trước giúp ảnh lớn trở nên đủ nhỏ để vừa với giới hạn đính kèm của email mà không cần chia thành nhiều thư, rất tiện khi gửi ảnh cho khách hàng hay đồng nghiệp.',
      },
      {
        question: 'Tôi nên chọn mức chất lượng nào cho ảnh trên website?',
        answer:
          'Mức chất lượng 75–85% ở định dạng WebP thường trông gần như giống hệt ảnh gốc trong khi vẫn giữ tệp đủ nhỏ để trang tải nhanh, đây là điểm khởi đầu tốt cho hầu hết ảnh web.',
      },
      {
        question: 'Vì sao nên chuyển JPG sang WebP khi nén?',
        answer:
          'WebP dùng thuật toán nén hiệu quả hơn JPG nên cùng một bức ảnh ở cùng chất lượng hình ảnh thường có dung lượng nhỏ hơn đáng kể, giúp trang web tải nhanh hơn.',
      },
      {
        question: 'Tôi có thể nén nhiều ảnh cùng lúc không?',
        answer:
          'Công cụ xử lý từng ảnh một để bạn có thể tinh chỉnh chất lượng, chiều rộng và định dạng cho từng bức ảnh trước khi tải xuống, đảm bảo mỗi ảnh đều đạt chất lượng tốt nhất.',
      },
      {
        question: 'Nén ảnh có hoạt động ngoại tuyến không?',
        answer:
          'Có, sau khi trang đã tải xong, mọi quá trình nén đều chạy ngay trong trình duyệt của bạn nên công cụ vẫn hoạt động bình thường dù không có kết nối internet.',
      },
      {
        question: 'Ảnh đã nén của tôi có bị đóng dấu mờ không?',
        answer:
          'Không, ảnh tải xuống không bao giờ có hình mờ hay thương hiệu, vì vậy tệp đã nén trông giống hệt ảnh gốc của bạn, chỉ nhỏ hơn mà thôi.',
      },
      {
        question: 'Định dạng nào tốt nhất để nén ảnh chụp màn hình?',
        answer:
          'WebP thường cho tệp nhỏ nhất đối với ảnh chụp màn hình. Chỉ dùng PNG khi bạn cần chất lượng không mất dữ liệu, chính xác từng điểm ảnh.',
      },
      {
        question: 'Tôi có thể nén ảnh mà không thay đổi kích thước không?',
        answer:
          'Có, chỉ cần không đặt giới hạn chiều rộng tối đa, công cụ sẽ giữ nguyên chiều rộng và chiều cao gốc mà chỉ giảm dung lượng tệp.',
      },
      {
        question: 'Công cụ nén ảnh có giữ lại siêu dữ liệu của ảnh không?',
        answer:
          'Việc mã hoá lại bằng Canvas trong trình duyệt thường loại bỏ siêu dữ liệu EXIF như cài đặt máy ảnh và vị trí, điều này cũng góp phần làm cho tệp nhỏ hơn.',
      },
      {
        question: 'Tôi có thể dùng công cụ nén ảnh trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên mọi trình duyệt di động hiện đại. Chỉ cần chọn ảnh từ thư viện ảnh của bạn và tải kết quả đã nén về như trên máy tính.',
      },
      {
        question: 'Kích thước ảnh tối đa tôi có thể nén là bao nhiêu?',
        answer:
          'Giới hạn mỗi tệp là 20 MB đối với ảnh PNG, JPG và WebP. Không có gì được tải lên máy chủ nên trong giới hạn đó, ảnh rất lớn chỉ bị giới hạn bởi bộ nhớ thiết bị và kích thước Canvas của trình duyệt.',
      },
      {
        question: 'Làm thế nào để nén ảnh xuống dưới 100 KB?',
        answer:
          'Hãy chọn đầu ra WebP, đặt chiều rộng tối đa khoảng 1280 px rồi hạ dần thanh trượt chất lượng cho đến khi dung lượng tệp hiển thị xuống dưới 100 KB.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Tải ảnh của bạn lên',
        description:
          'Tải lên bất kỳ ảnh PNG, JPG, WebP hoặc GIF nào để đọc chiều rộng và chiều cao điểm ảnh gốc của ảnh.',
      },
      {
        title: 'Đặt chiều rộng, chiều cao và chế độ vừa khung',
        description:
          'Nhập số điểm ảnh tuỳ chỉnh (có thể bật Khoá tỉ lệ khung hình) hoặc chọn mẫu có sẵn cho mạng xã hội, rồi chọn Cắt phủ ở giữa hoặc Kéo giãn/Thu phóng chính xác.',
      },
      {
        title: 'Chọn định dạng đầu ra',
        description:
          'Chọn PNG để giữ độ trong suốt, JPG cho ảnh chụp, hoặc WebP để có tệp nhỏ nhất trước khi kết xuất.',
      },
      {
        title: 'Kết xuất ảnh đã thay đổi kích thước',
        description:
          'Nhấn Kết xuất ảnh đã thay đổi kích thước để tạo phiên bản mới với đúng kích thước điểm ảnh bạn đã đặt.',
      },
      {
        title: 'Xem lại kết quả và tải xuống',
        description:
          'Kiểm tra bản xem trước về độ sắc nét và cách cắt ảnh, xem dung lượng tệp, rồi nhấn Tải xuống để lưu lại.',
      },
      {
        title: 'Mẹo: ảnh trông bị kéo giãn hoặc mờ?',
        description:
          'Bật Khoá tỉ lệ khung hình hoặc chuyển sang Cắt phủ ở giữa để tránh méo hình, và tránh phóng to quá nhiều so với kích thước gốc.',
      },
    ],
    examples: [
      {
        title: 'Cắt ảnh chụp màn hình dài thành thẻ Open Graph 1200×630',
        input: 'Ảnh chụp màn hình 1440×1600 · Mẫu: OG Share (1200×630) · Vừa khung: Cắt phủ ở giữa',
        output: 'Thẻ 1200×630 sắc nét, căn giữa theo chiều dọc, không bị bóp méo hay biến dạng',
        explanation: 'Cắt phủ thu phóng theo đúng tỉ lệ cho đến khi lấp đầy khung đích, đồng thời cắt đều các cạnh thừa.',
      },
      {
        title: 'Tạo ảnh đại diện 512×512 cho ảnh hồ sơ',
        input: 'Ảnh 1200×900 · Mẫu: Avatar (512×512) · Vừa khung: Cắt phủ ở giữa',
        output: 'Ảnh đại diện vuông 512×512 hoàn hảo với khuôn mặt ở chính giữa',
        explanation: 'Cắt ở giữa giúp khuôn mặt nằm giữa khung hình và loại bỏ phần thừa ở hai bên rìa.',
      },
    ],
    benefits: [
      'Mẫu điểm ảnh một cú nhấp cho Open Graph, YouTube HD, hình vuông và ảnh đại diện',
      'Chế độ Cắt phủ ở giữa ngăn kéo giãn kỳ lạ khi thay đổi tỉ lệ khung hình',
      'Chất lượng làm mượt ảnh Canvas cao giữ cho chữ và đường nét luôn sắc nét',
      'Xuất trực tiếp sang PNG, JPG hoặc WebP kèm dung lượng tệp thực tế',
    ],
    useCases: [
      'Tạo thẻ og:image 1200×630 cho bài viết blog và trang đích',
      'Chuẩn bị ảnh sản phẩm 1080×1080 và ảnh đại diện hồ sơ 512×512',
      'Thu nhỏ ảnh chụp màn hình độ phân giải cao trước khi đưa vào tài liệu',
      'Tạo kích thước ảnh hero chính xác khớp với yêu cầu của mẫu CMS',
    ],
    faqs: [
      {
        question: 'Cắt phủ ở giữa và Kéo giãn / Thu phóng chính xác khác nhau thế nào?',
        answer:
          'Cắt phủ ở giữa giữ nguyên tỉ lệ tự nhiên của ảnh và cắt đều các cạnh thừa ở hai bên khi tỉ lệ khung hình mới khác đi. Thu phóng chính xác ép toàn bộ ảnh gốc vào đúng chiều rộng và chiều cao đích, kể cả khi phải kéo giãn hình.',
      },
      {
        question: 'Tôi có thể phóng to một ảnh nhỏ lên 4K một cách rõ nét không?',
        answer:
          'Canvas có thể nội suy để xuất lưới điểm ảnh lớn hơn, nhưng việc phóng to vượt quá độ phân giải gốc không thể tạo ra chi tiết tinh tế vốn đã mất, vì vậy ảnh phóng to thường trông mềm hơn bản gốc.',
      },
      {
        question: 'Kích thước đầu ra tối đa được hỗ trợ là bao nhiêu?',
        answer:
          'Ảnh đầu vào bị giới hạn ở mức 8000 px cho mỗi chiều để luôn nằm an toàn trong giới hạn bộ nhớ Canvas của trình duyệt, tránh tình trạng treo máy khi xử lý ảnh quá lớn.',
      },
      {
        question: 'Công cụ thay đổi kích thước ảnh có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký, không có hình mờ và không giới hạn số lượng ảnh bạn thay đổi kích thước, dù là một ảnh hay nhiều ảnh mỗi ngày.',
      },
      {
        question: 'Thay đổi kích thước và cắt ảnh khác nhau thế nào?',
        answer:
          'Thay đổi kích thước làm thay đổi toàn bộ kích thước điểm ảnh của ảnh, còn cắt ảnh loại bỏ một phần của bức ảnh. Công cụ này làm được cả hai, bao gồm cả chế độ cắt phủ ở giữa.',
      },
      {
        question: 'Công cụ có thể tạo ảnh 1200x630 để chia sẻ mạng xã hội không?',
        answer:
          'Có, hãy chọn mẫu Open Graph (1200×630) và công cụ sẽ chỉnh ảnh của bạn về đúng kích thước đó để hiển thị bản xem trước liên kết đẹp mắt trên các nền tảng mạng xã hội.',
      },
      {
        question: 'Làm thế nào để thay đổi kích thước ảnh mà không làm méo hình?',
        answer:
          'Hãy giữ bật Khoá tỉ lệ khung hình hoặc dùng chế độ Cắt phủ ở giữa để công cụ thu phóng theo đúng tỉ lệ thay vì bóp méo bức ảnh, giữ cho mọi vật thể trông tự nhiên.',
      },
      {
        question: 'Tôi có thể thay đổi kích thước ảnh thành hình vuông 1080x1080 không?',
        answer:
          'Có, hãy chọn mẫu hình vuông hoặc nhập 1080 cho cả chiều rộng và chiều cao trong khi bật chế độ Cắt phủ ở giữa để có ảnh vuông hoàn hảo.',
      },
      {
        question: 'Thay đổi kích thước ảnh có làm giảm dung lượng tệp không?',
        answer:
          'Thường là có, vì ít điểm ảnh hơn đồng nghĩa với ít dữ liệu hơn, đặc biệt khi bạn xuất ảnh sang WebP hoặc JPG thay vì giữ định dạng PNG nặng.',
      },
      {
        question: 'Tôi có thể thay đổi kích thước những định dạng ảnh nào?',
        answer:
          'Bạn có thể thay đổi kích thước ảnh PNG, JPG, WebP và GIF rồi xuất chúng sang PNG, JPG hoặc WebP tuỳ theo nhu cầu của bạn.',
      },
      {
        question: 'Thay đổi kích thước có làm ảnh của tôi bị mờ không?',
        answer:
          'Thu nhỏ thường vẫn sắc nét nhờ tính năng làm mượt Canvas chất lượng cao. Chỉ khi phóng to vượt quá kích thước gốc thì chi tiết tinh tế mới có thể trở nên mềm hơn.',
      },
      {
        question: 'Tôi có thể thay đổi kích thước ảnh để làm ảnh hồ sơ không?',
        answer:
          'Có, hãy dùng mẫu Ảnh đại diện (512×512) với chế độ Cắt phủ ở giữa để có ảnh hồ sơ vuông hoàn hảo, với khuôn mặt nằm chính giữa khung hình.',
      },
      {
        question: 'Cắt phủ ở giữa trong công cụ thay đổi kích thước ảnh là gì?',
        answer:
          'Chế độ này thu phóng ảnh cho đến khi lấp đầy khung đích, rồi cắt đều các cạnh thừa từ chính giữa để không có gì trông bị kéo giãn hay méo mó.',
      },
      {
        question: 'Công cụ thay đổi kích thước ảnh có tải ảnh của tôi lên đâu không?',
        answer:
          'Không, mọi quá trình thay đổi kích thước đều diễn ra ngay trong trình duyệt của bạn và ảnh của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Tôi có thể thay đổi kích thước ảnh trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên trình duyệt di động. Hãy tải ảnh lên, nhập kích thước mới rồi tải kết quả về máy như trên máy tính.',
      },
      {
        question: 'Điều gì xảy ra với độ trong suốt khi tôi thay đổi kích thước ảnh PNG?',
        answer:
          'Độ trong suốt được giữ nguyên nếu bạn xuất sang PNG hoặc WebP. Nếu xuất sang JPG, các vùng trong suốt sẽ được lấp đầy bằng màu trắng.',
      },
      {
        question: 'Tôi có thể thay đổi kích thước nhiều ảnh về cùng một cỡ không?',
        answer:
          'Công cụ thay đổi kích thước từng ảnh một. Hãy lặp lại cùng một mẫu hoặc kích thước cho mỗi ảnh để giữ cho tất cả các ảnh đồng nhất với nhau.',
      },
      {
        question: 'Ảnh lớn nhất mà công cụ thay đổi kích thước ảnh có thể xử lý là bao nhiêu?',
        answer:
          'Ảnh đầu vào bị giới hạn ở mức 8000 px cho mỗi chiều để luôn nằm trong giới hạn bộ nhớ Canvas của trình duyệt, giúp quá trình xử lý ổn định và không bị treo.',
      },
      {
        question: 'Làm thế nào để thay đổi kích thước ảnh cho hình thu nhỏ YouTube?',
        answer:
          'Hãy chọn mẫu YouTube HD (1280×720) để hình thu nhỏ của bạn khớp với kích thước 16:9 được YouTube khuyến nghị, hiển thị sắc nét trong kết quả tìm kiếm.',
      },
      {
        question: 'Vì sao ảnh đã thay đổi kích thước của tôi vẫn có dung lượng lớn?',
        answer:
          'Kích thước điểm ảnh chỉ là một phần của câu chuyện. Hãy xuất sang WebP hoặc JPG thay vì PNG, hoặc dùng thêm công cụ nén ảnh sau đó để thu nhỏ tệp hơn nữa.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Chọn định dạng đích và tuỳ chọn',
        description:
          'Chọn đầu ra PNG, JPG hoặc WebP, đặt chất lượng nén mất dữ liệu nếu cần, và chọn màu nền lấp khi chuyển ảnh trong suốt sang JPG.',
      },
      {
        title: 'Chọn một hoặc nhiều ảnh',
        description:
          'Tải lên một tệp duy nhất hoặc một loạt nhiều tệp để mọi ảnh đều được kết xuất rõ nét ở độ phân giải gốc đầy đủ.',
      },
      {
        title: 'Kiểm tra bản xem trước của từng tệp',
        description:
          'Xem lại kích thước và dung lượng ước tính của từng ảnh đã chuyển đổi trước khi tải xuống bất cứ thứ gì.',
      },
      {
        title: 'Chuyển đổi cả loạt ảnh',
        description:
          'Công cụ kết xuất từng ảnh ở độ phân giải gốc đầy đủ theo định dạng bạn đã chọn, ngay trong trình duyệt của bạn.',
      },
      {
        title: 'Tải tài sản đã chuyển đổi',
        description:
          'So sánh kích thước và dung lượng byte mới của từng tệp, rồi tải từng ảnh đã chuyển đổi về máy.',
      },
      {
        title: 'Mẹo: vùng trong suốt chuyển thành màu đen?',
        description:
          'Nếu ảnh PNG chuyển sang JPG xuất hiện vùng đen ở chỗ từng trong suốt, hãy chuyển đổi lại với màu lấp nền như màu trắng hoặc màu thương hiệu của bạn.',
      },
    ],
    examples: [
      {
        title: 'Làm phẳng logo SVG/PNG trong suốt lên nền trắng để dùng cho JPG',
        input: 'logo.png trong suốt · Đích: JPG (90%) · Màu lấp: #FFFFFF',
        output: 'logo.jpg với nền trắng sạch, không còn vệt đen do trong suốt',
        explanation: 'Lấp đầy màu nền cho Canvas trước khi vẽ sẽ ngăn quầng đen khi chuyển ảnh PNG có kênh alpha sang JPEG.',
      },
      {
        title: 'Chuyển các tệp WebP đã tải xuống sang PNG',
        input: '3 ảnh WebP · Đích: PNG',
        output: '3 tệp PNG mở được ngay cả trong phần mềm cũ',
        explanation: 'Một số ứng dụng cũ và biểu mẫu tải lên không chấp nhận WebP, vì vậy chuyển sang PNG giúp khôi phục khả năng tương thích phổ biến.',
      },
    ],
    benefits: [
      'Xử lý hàng loạt nhiều ảnh ở độ phân giải đầy đủ mà không cần chờ hàng đợi máy chủ',
      'Màu lấp nền JPEG có thể cấu hình giúp tránh vùng lấp trong suốt màu đen xấu xí',
      'Chuyển tệp WebP đã tải xuống trở lại thành tệp PNG hoặc JPG được chấp nhận phổ biến',
      'Kết xuất tệp SVG dạng vector trực tiếp thành ảnh raster PNG hoặc WebP sắc nét',
    ],
    useCases: [
      'Chuyển tệp .webp đã tải xuống thành .png hoặc .jpg cho phần mềm cũ',
      'Sản xuất hàng loạt tài sản .webp hiện đại cho website tĩnh và CDN',
      'Xuất ảnh PNG sắc nét từ biểu tượng thương hiệu SVG cho slide hoặc bài đăng mạng xã hội',
      'Kiểm tra sự khác biệt dung lượng giữa các định dạng PNG, JPG và WebP cạnh nhau',
    ],
    faqs: [
      {
        question: 'Công cụ này có chuyển đổi được ảnh HEIC của Apple không?',
        answer:
          'Việc giải mã HEIC phụ thuộc vào khả năng hỗ trợ của trình duyệt (Safari hỗ trợ HEIC gốc, trong khi Chrome và Firefox thường cần ảnh đầu vào PNG, JPG, WebP, SVG hoặc GIF).',
      },
      {
        question: 'Chuyển JPG sang PNG có khôi phục lại chi tiết ảnh đã mất không?',
        answer:
          'Không. Việc chuyển một ảnh JPG đã nén sang PNG chỉ giúp bảo toàn ảnh không mất dữ liệu về sau, chứ không thể khôi phục các vết nén JPEG đã xuất hiện trước đó.',
      },
      {
        question: 'Có giới hạn dung lượng tệp không?',
        answer:
          'Có, mỗi tệp phải có dung lượng từ 25 MB trở xuống. Mọi quá trình mã hoá vẫn diễn ra ngay trong trình duyệt của bạn nên trong giới hạn mỗi tệp đó, chỉ bộ nhớ RAM của thiết bị mới là yếu tố giới hạn.',
      },
      {
        question: 'Công cụ chuyển đổi định dạng ảnh có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần tài khoản, không có hình mờ và không giới hạn số lần chuyển đổi bạn thực hiện.',
      },
      {
        question: 'Tôi có thể chuyển đổi từ định dạng nào sang định dạng nào?',
        answer:
          'Bạn có thể chuyển đổi tệp PNG, JPG, WebP, GIF và SVG sang đầu ra PNG, JPG hoặc WebP tuỳ theo nhu cầu sử dụng.',
      },
      {
        question: 'Vì sao nên chuyển PNG sang WebP?',
        answer:
          'Tệp WebP thường nhỏ hơn nhiều so với PNG ở chất lượng hình ảnh tương tự, nhờ đó các trang web tải nhanh hơn và tiết kiệm băng thông.',
      },
      {
        question: 'Vì sao nên chuyển WebP sang JPG hoặc PNG?',
        answer:
          'Một số ứng dụng cũ, máy in và biểu mẫu tải lên không chấp nhận WebP, vì vậy chuyển đổi trở lại JPG hoặc PNG giúp khôi phục khả năng tương thích phổ biến ở mọi nơi.',
      },
      {
        question: 'Tôi có thể chuyển đổi nhiều ảnh cùng lúc không?',
        answer:
          'Có, bạn có thể tải lên một loạt ảnh và chuyển tất cả sang cùng một định dạng đích chỉ trong một lần, tiết kiệm rất nhiều thời gian so với xử lý từng ảnh.',
      },
      {
        question: 'Chuyển sang JPG có làm mất độ trong suốt không?',
        answer:
          'Có, JPG không có kênh alpha nên các vùng trong suốt sẽ được lấp đầy bằng màu nền bạn chọn, ví dụ như màu trắng.',
      },
      {
        question: 'Nên dùng màu lấp nào khi chuyển PNG trong suốt sang JPG?',
        answer:
          'Màu trắng là lựa chọn mặc định an toàn nhất. Để có vẻ ngoài liền mạch, hãy chọn màu khớp với màu nền của website hoặc slide của bạn.',
      },
      {
        question: 'Tôi có thể chuyển ảnh sang WebP mà vẫn giữ chất lượng không?',
        answer:
          'Có, WebP ở chất lượng 85–90% thường trông giống hệt ảnh JPG gốc trong khi cho tệp nhỏ hơn đáng kể, rất phù hợp cho ảnh đăng web.',
      },
      {
        question: 'Tôi có thể chuyển logo SVG sang PNG không?',
        answer:
          'Có, công cụ chuyển đổi tệp SVG thành ảnh PNG hoặc WebP sắc nét ở kích thước gốc, giữ cho logo của bạn luôn rõ ràng.',
      },
      {
        question: 'Công cụ chuyển đổi định dạng ảnh có tải ảnh của tôi lên không?',
        answer:
          'Không, mọi quá trình chuyển đổi đều chạy ngay trong trình duyệt của bạn và tệp của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Nên dùng chất lượng nào khi chuyển sang JPG?',
        answer:
          'Chất lượng 85–90% giúp ảnh trông sạch và rõ trong khi vẫn nhỏ hơn nhiều so với PNG. Hãy hạ thấp hơn nếu bạn cần tệp nhỏ hơn nữa.',
      },
      {
        question: 'Tôi có thể chuyển đổi ảnh GIF động bằng công cụ này không?',
        answer:
          'Tệp GIF có thể tải lên được, nhưng quá trình chuyển đổi chỉ kết xuất một khung hình tĩnh thay vì giữ lại toàn bộ hoạt ảnh.',
      },
      {
        question: 'Vì sao ảnh PNG đã chuyển đổi của tôi lại lớn hơn ảnh JPG gốc?',
        answer:
          'PNG là định dạng không mất dữ liệu nên ảnh chuyển từ JPG đã nén sang PNG sẽ lưu trữ từng điểm ảnh mà không nén, vì vậy tệp thường lớn hơn.',
      },
      {
        question: 'Công cụ chuyển đổi có giữ nguyên kích thước ảnh gốc không?',
        answer:
          'Có, ảnh đã chuyển đổi giữ nguyên độ phân giải gốc đầy đủ, trừ khi bạn thay đổi kích thước riêng bằng công cụ thay đổi kích thước ảnh.',
      },
      {
        question: 'Tôi có thể dùng công cụ chuyển đổi định dạng ảnh trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên trình duyệt di động. Hãy chọn ảnh từ thiết bị của bạn và tải các tệp đã chuyển đổi về máy.',
      },
      {
        question: 'Định dạng nào tốt nhất cho ảnh trên website?',
        answer:
          'WebP thường là tốt nhất cho ảnh chụp và đồ hoạ trên web, trong khi PNG tốt hơn khi bạn cần độ trong suốt hoặc chất lượng không mất dữ liệu.',
      },
      {
        question: 'Ảnh đã chuyển đổi có hình mờ không?',
        answer:
          'Không, các tệp đã chuyển đổi là bản sao sạch, không có hình mờ hay thương hiệu nào được thêm vào.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Tải ảnh lên',
        description:
          'Chọn bất kỳ ảnh PNG, JPG, WebP hoặc GIF nào để tải vào bản xem trước Canvas tương tác.',
      },
      {
        title: 'Xoay, lật hoặc áp dụng bộ lọc',
        description:
          'Dùng nút Xoay trái/phải, công tắc Lật ngang/dọc, công tắc thang độ xám và thanh trượt Độ sáng/Độ tương phản.',
      },
      {
        title: 'Xem trước kết quả trực tiếp',
        description:
          'Kiểm tra bản xem trước Canvas sau mỗi thay đổi để xác nhận hướng ảnh và cường độ bộ lọc trông đúng như mong muốn.',
      },
      {
        title: 'Đặt lại nếu cần',
        description:
          'Dùng nút Đặt lại để hoàn tác mọi thay đổi xoay, lật và bộ lọc rồi bắt đầu lại từ ảnh gốc.',
      },
      {
        title: 'Chọn định dạng đầu ra',
        description:
          'Chọn PNG để giữ độ trong suốt, JPG cho ảnh chụp, hoặc WebP để có tệp nhỏ hơn trước khi xuất.',
      },
      {
        title: 'Xuất ảnh đã chỉnh sửa',
        description:
          'Nhấn Tải xuống để lưu ảnh đã xoay, lật hoặc áp bộ lọc về thiết bị của bạn.',
      },
    ],
    examples: [
      {
        title: 'Sửa ảnh điện thoại bị xoay ngang và tăng độ sáng',
        input: 'Ảnh 3024×4032 xoay 90° theo chiều kim đồng hồ · Độ sáng: 110% · Độ tương phản: 105%',
        output: 'Ảnh 4032×3024 thẳng đứng được xuất rõ nét, hướng EXIF đã gắn vào điểm ảnh',
        explanation: 'Canvas tự động hoán đổi chiều rộng và chiều cao khi xoay 90° hoặc 270°.',
      },
      {
        title: 'Sửa ảnh selfie bị lật ngược',
        input: 'Ảnh selfie bị lật ngược · Lật ngang: Bật',
        output: 'Ảnh hiển thị chữ và khuôn mặt theo đúng hướng',
        explanation: 'Lật ngang sẽ lật ảnh từ trái sang phải như soi gương, nhờ đó ảnh selfie bị ngược được sửa lại đúng hướng.',
      },
    ],
    benefits: [
      'Bản xem trước điểm ảnh trực tiếp cập nhật ngay lập tức mà không có độ trễ tải lên',
      'Gắn hướng ảnh gọn gàng vào toạ độ điểm ảnh thực tế thay vì cờ EXIF mong manh',
      'Kết hợp xoay, lật gương và chỉnh màu sắc, tông màu trong một không gian làm việc gọn gàng',
      'Nút Đặt lại không phá huỷ ảnh gốc, khôi phục mặc định bất cứ lúc nào',
    ],
    useCases: [
      'Làm thẳng tài liệu hoặc hoá đơn được quét khi chụp nghiêng',
      'Bỏ lật gương cho ảnh chụp webcam ngược hoặc ảnh chụp màn hình bị lật',
      'Tạo đồ hoạ thang độ xám có độ tương phản cao cho in ấn hoặc tài liệu',
      'Nhanh chóng làm sáng ảnh sản phẩm thiếu sáng trước khi đăng bán',
    ],
    faqs: [
      {
        question: 'Xoay ảnh có mã hoá lại các điểm ảnh không?',
        answer:
          'Có. Việc vẽ lên Canvas HTML5 sẽ gắn hướng mới và các điều chỉnh bộ lọc vĩnh viễn vào từng điểm ảnh, nhờ đó mọi ứng dụng đều hiển thị ảnh đúng chiều.',
      },
      {
        question: 'Tôi có thể giữ nền trong suốt khi xoay hoặc lật không?',
        answer:
          'Có, hãy giữ định dạng đầu ra ở PNG hoặc WebP để giữ toàn bộ độ trong suốt alpha xung quanh đồ hoạ đã xoay hoặc lật.',
      },
      {
        question: 'Các chỉnh sửa có được lưu trên máy chủ của bạn không?',
        answer:
          'Không. Mọi thứ chạy trong tab trình duyệt của chính bạn và sẽ bị xoá khi bạn đóng trang, vì vậy không có gì được lưu lại.',
      },
      {
        question: 'Công cụ xoay ảnh có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký, không có hình mờ và không giới hạn số lần sử dụng.',
      },
      {
        question: 'Làm thế nào để xoay ảnh 90 độ?',
        answer:
          'Hãy tải ảnh lên rồi nhấn Xoay phải hoặc Xoay trái. Mỗi lần nhấn sẽ xoay ảnh thêm 90 độ theo hướng bạn chọn.',
      },
      {
        question: 'Tôi có thể xoay ảnh 180 độ không?',
        answer:
          'Có, chỉ cần nhấn Xoay hai lần theo cùng một hướng để lật ảnh lộn ngược hoàn toàn.',
      },
      {
        question: 'Làm thế nào để lật ảnh theo chiều ngang?',
        answer:
          'Hãy dùng công tắc Lật ngang để lật ảnh từ trái sang phải như soi gương, rất hữu ích khi sửa ảnh selfie bị lật ngược.',
      },
      {
        question: 'Lật và xoay ảnh khác nhau thế nào?',
        answer:
          'Xoay sẽ quay ảnh quanh tâm của nó, còn lật sẽ phản chiếu ảnh như hình ảnh trong gương, tạo ra bản sao đối xứng ngược chiều.',
      },
      {
        question: 'Tôi có thể xoay ảnh mà không làm mất chất lượng không?',
        answer:
          'Công cụ mã hoá lại ảnh qua Canvas nên xuất sang PNG sẽ giữ ảnh không mất dữ liệu. Xuất sang JPG sẽ áp dụng một mức nén nhẹ.',
      },
      {
        question: 'Xoay ảnh có làm thay đổi kích thước ảnh không?',
        answer:
          'Xoay 90 hoặc 270 độ sẽ hoán đổi chiều rộng và chiều cao. Xoay 180 độ thì kích thước giữ nguyên như ban đầu.',
      },
      {
        question: 'Tôi có thể biến ảnh thành đen trắng không?',
        answer:
          'Có, chỉ cần bật công tắc thang độ xám để chuyển ảnh của bạn thành đen trắng ngay lập tức, rất hợp cho phong cách cổ điển.',
      },
      {
        question: 'Làm thế nào để làm sáng một ảnh tối?',
        answer:
          'Hãy kéo thanh trượt Độ sáng lên trên 100% và thêm một chút Độ tương phản để ảnh không trông bị bạc màu hay mờ nhạt.',
      },
      {
        question: 'Tôi có thể xoay ảnh PNG mà vẫn giữ độ trong suốt không?',
        answer:
          'Có, hãy xuất sang PNG hoặc WebP để giữ nguyên các vùng trong suốt sau khi xoay hoặc lật ảnh.',
      },
      {
        question: 'Ảnh đã chỉnh sửa của tôi có bị tải lên máy chủ không?',
        answer:
          'Không, mọi thao tác xoay, lật và lọc đều chạy ngay trong trình duyệt của bạn và không có gì được tải lên.',
      },
      {
        question: 'Tôi có thể xoay ảnh trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên trình duyệt di động. Hãy tải ảnh chụp nghiêng lên, xoay cho thẳng rồi tải phiên bản đã sửa về máy.',
      },
      {
        question: 'Vì sao ảnh của tôi bị nghiêng sau khi tải lên?',
        answer:
          'Một số điện thoại lưu hướng ảnh dưới dạng cờ EXIF mà không phải ứng dụng nào cũng đọc được. Công cụ này gắn hướng đúng vào điểm ảnh nên ảnh hiển thị thẳng đứng ở mọi nơi.',
      },
      {
        question: 'Tôi có thể hoàn tác thao tác xoay hoặc bộ lọc không?',
        answer:
          'Có, nút Đặt lại sẽ khôi phục ảnh gốc và cài đặt bộ lọc mặc định bất cứ lúc nào bạn muốn bắt đầu lại.',
      },
      {
        question: 'Công cụ có sửa được ảnh chụp bị lệch nhẹ không?',
        answer:
          'Công cụ xoay theo từng bước 90 độ nên sửa được ảnh chụp ngang hoặc lộn ngược. Việc chỉnh độ nghiêng nhỏ thì hiện chưa được hỗ trợ.',
      },
      {
        question: 'Tôi có thể xoay và lật những định dạng ảnh nào?',
        answer:
          'Bạn có thể chỉnh sửa ảnh PNG, JPG, WebP và GIF rồi xuất chúng sang PNG, JPG hoặc WebP tuỳ ý.',
      },
      {
        question: 'Tôi có thể xoay và lật ảnh trong một lần không?',
        answer:
          'Có, bạn có thể kết hợp xoay, lật ngang hoặc lật dọc và các bộ lọc trước khi xuất một ảnh hoàn chỉnh duy nhất.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Chọn chế độ Mã hoá hoặc Giải mã',
        description:
          'Dùng chế độ Ảnh → Base64 Data URI để mã hoá tệp, hoặc chế độ Base64 → Xem trước ảnh để kết xuất các dữ liệu Base64 đã dán.',
      },
      {
        title: 'Tải ảnh lên hoặc dán văn bản Base64',
        description:
          'Chọn bất kỳ tài sản PNG, JPG, WebP, SVG, GIF hoặc ICO nào (hoặc dán toàn bộ chuỗi data:image/... hay văn bản Base64 thô).',
      },
      {
        title: 'Kiểm tra so sánh kích thước',
        description:
          'So sánh dung lượng tệp gốc với dung lượng chuỗi Base64 để thấy mức tăng thêm khoảng 33% trước khi nhúng ảnh.',
      },
      {
        title: 'Chọn định dạng đầu ra bạn cần',
        description:
          'Chọn Data URI đầy đủ, chuỗi Base64 thô, thẻ HTML <img>, hoặc đoạn mã CSS background-image.',
      },
      {
        title: 'Sao chép đoạn mã hoặc tải bản xem trước',
        description:
          'Sao chép Data URI, Base64 thô, thẻ HTML <img> hoặc đoạn mã nền CSS — hoặc tải ảnh xem trước đã giải mã về máy.',
      },
      {
        title: 'Mẹo: chuỗi Base64 đã dán không hoạt động?',
        description:
          'Hãy chắc chắn bạn đã dán toàn bộ chuỗi mà không có dấu ngắt dòng, và kiểm tra xem bộ giải mã đã thêm đúng tiền tố data:image/... cho định dạng của bạn chưa.',
      },
    ],
    examples: [
      {
        title: 'Nhúng dấu tích SVG 2 KB vào trong CSS',
        input: 'check.svg (2.048 byte)',
        output: 'data:image/svg+xml;base64,... (khoảng 2,7 KB) + quy tắc CSS background-image sẵn sàng để dán',
        explanation: 'Tiết kiệm một lượt yêu cầu HTTP thêm cho các biểu tượng giao diện nhỏ và email HTML độc lập ngoại tuyến.',
      },
      {
        title: 'Giải mã và xem dữ liệu Base64 nhận được từ API',
        input: 'Chuỗi Base64 thô (không có tiền tố data:)',
        output: 'Bản xem trước ảnh PNG + nút tải xuống',
        explanation: 'Bộ giải mã tự động thêm tiêu đề Data URI PNG vào trước dữ liệu Base64 thô để tạo bản xem trước.',
      },
    ],
    benefits: [
      'So sánh tức thì dung lượng tệp nhị phân với mức tăng thêm khoảng 33% của chuỗi Base64',
      'Tạo đồng thời đoạn mã Data URI, Base64 thô, HTML <img> và nền CSS',
      'Tự động thêm tiền tố Data URI PNG nếu bạn dán Base64 thô mà không có tiêu đề',
      'Giữ tài sản độc quyền và dữ liệu API ngay trong trình duyệt, không cần mạng',
    ],
    useCases: [
      'Nhúng biểu tượng nhỏ vào gói CSS hoặc báo cáo HTML độc lập',
      'Gỡ lỗi Data URI ảnh trả về từ API JSON hoặc webhook',
      'Nhúng huy hiệu thương hiệu nhỏ vào mẫu email HTML giao dịch',
      'Kiểm tra dữ liệu ảnh đã mã hoá sao chép từ DevTools của trình duyệt',
    ],
    faqs: [
      {
        question: 'Khi nào nên dùng ảnh Base64 thay vì URL ảnh thông thường?',
        answer:
          'Hãy dùng Data URI Base64 một cách tiết chế cho các biểu tượng rất nhỏ (thường dưới 5–10 KB) hoặc xuất HTML một tệp duy nhất. Base64 làm tăng kích thước dữ liệu khoảng 33% và không thể lưu vào bộ nhớ đệm riêng cho từng trang như URL thông thường.',
      },
      {
        question: 'Bộ giải mã có xem trước được chuỗi Base64 thô mà không có tiền tố "data:image/png;base64," không?',
        answer:
          'Có! Khi chuyển sang chế độ Base64 → Xem trước ảnh, công cụ sẽ tự động loại bỏ khoảng trắng và thêm tiêu đề Data URI PNG chuẩn nếu tiêu đề bị thiếu.',
      },
      {
        question: 'Công cụ có hoạt động với SVG dạng vector không?',
        answer:
          'Có. Khi tải lên tệp .svg, bạn sẽ nhận được một URI data:image/svg+xml;base64,... hợp lệ kèm theo đoạn mã HTML và CSS tương ứng.',
      },
      {
        question: 'Công cụ chuyển ảnh sang Base64 có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký, không có hình mờ và không giới hạn số ảnh bạn mã hoá hay giải mã.',
      },
      {
        question: 'Data URI Base64 là gì?',
        answer:
          'Data URI nhúng ảnh trực tiếp vào trong trang web, bảng định kiểu hoặc email dưới dạng văn bản, bắt đầu bằng data:image/...;base64, rồi đến dữ liệu đã mã hoá.',
      },
      {
        question: 'Vì sao chuỗi Base64 lại lớn hơn ảnh của tôi?',
        answer:
          'Mã hoá Base64 biểu diễn dữ liệu nhị phân bằng ký tự văn bản, điều này làm tăng thêm khoảng 33% so với dung lượng tệp gốc.',
      },
      {
        question: 'Kích thước ảnh nào là tốt nhất để mã hoá Base64?',
        answer:
          'Hãy giữ ảnh Base64 ở kích thước nhỏ, thường dưới 5–10 KB, chẳng hạn như biểu tượng và logo. Ảnh lớn hơn sẽ làm phình HTML hoặc CSS của bạn và không thể lưu đệm riêng.',
      },
      {
        question: 'Tôi có thể chuyển ảnh JPG sang Base64 không?',
        answer:
          'Có, các tệp JPG, PNG, WebP, SVG, GIF và ICO đều có thể được mã hoá thành Data URI Base64.',
      },
      {
        question: 'Làm thế nào để dùng ảnh Base64 trong HTML?',
        answer:
          'Hãy sao chép thẻ HTML <img> đã tạo và dán vào trang của bạn. Thuộc tính src đã chứa toàn bộ Data URI nên ảnh sẽ hiển thị ngay.',
      },
      {
        question: 'Làm thế nào để dùng ảnh Base64 trong CSS?',
        answer:
          'Hãy sao chép đoạn mã CSS background-image rồi dán vào bảng định kiểu của bạn để hiển thị ảnh mà không cần yêu cầu tệp riêng.',
      },
      {
        question: 'Tôi có thể giải mã chuỗi Base64 trở lại thành ảnh không?',
        answer:
          'Có, hãy chuyển sang chế độ Base64 → Xem trước ảnh, dán chuỗi vào và công cụ sẽ kết xuất ảnh để bạn xem trước hoặc tải xuống.',
      },
      {
        question: 'Khi giải mã, tôi có cần tiền tố data:image/png;base64, không?',
        answer:
          'Không, nếu bạn dán Base64 thô mà không có tiêu đề, công cụ sẽ tự động thêm tiền tố Data URI PNG chuẩn cho bạn.',
      },
      {
        question: 'Công cụ chuyển ảnh sang Base64 có tải tệp của tôi lên không?',
        answer:
          'Không, quá trình mã hoá và giải mã chạy hoàn toàn trong trình duyệt của bạn và ảnh của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Tôi có thể mã hoá SVG sang Base64 không?',
        answer:
          'Có, tệp SVG sẽ tạo ra một URI data:image/svg+xml;base64,... hợp lệ kèm theo đoạn mã HTML và CSS tương ứng.',
      },
      {
        question: 'Base64 thô và Data URI khác nhau thế nào?',
        answer:
          'Base64 thô chỉ là văn bản đã mã hoá, còn Data URI thêm tiêu đề data:image/...;base64, vào phía trước để trình duyệt biết loại ảnh cần hiển thị.',
      },
      {
        question: 'Tôi có thể dùng ảnh Base64 trong email không?',
        answer:
          'Có, ảnh Base64 nhỏ hoạt động tốt trong email HTML độc lập, tuy nhiên một số ứng dụng email giới hạn hỗ trợ Data URI nên hãy kiểm tra trước khi gửi.',
      },
      {
        question: 'Có giới hạn dung lượng tệp khi mã hoá không?',
        answer:
          'Không có giới hạn máy chủ vì không có gì được tải lên. Ảnh rất lớn chỉ bị giới hạn bởi bộ nhớ trình duyệt của bạn, và chuỗi Base64 quá lớn cũng không thực tế để dán vào đâu.',
      },
      {
        question: 'Tôi có thể chuyển ảnh Base64 thành tệp có thể tải xuống không?',
        answer:
          'Có, hãy giải mã chuỗi trong chế độ Base64 → Xem trước ảnh rồi dùng tuỳ chọn tải xuống để lưu ảnh dưới dạng tệp ảnh thông thường.',
      },
      {
        question: 'Mã hoá Base64 có làm thay đổi chất lượng ảnh không?',
        answer:
          'Không, Base64 là dạng biểu diễn văn bản không mất dữ liệu của đúng các byte gốc nên ảnh sau khi giải mã giống hệt ảnh ban đầu.',
      },
      {
        question: 'Tôi có thể dùng công cụ chuyển ảnh sang Base64 trên điện thoại không?',
        answer:
          'Có, công cụ hoạt động trên trình duyệt di động. Hãy mã hoá ảnh từ thư viện ảnh của bạn hoặc dán chuỗi Base64 để xem trước.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Chọn màu chữ và màu nền',
        description:
          'Dùng bộ chọn màu, ô nhập HEX hoặc ô nhập R/G/B riêng lẻ — hoặc bắt đầu từ các mẫu sẵn có thể tiếp cận được rồi hoán đổi màu chỉ bằng một cú nhấp.',
      },
      {
        title: 'Điều chỉnh sắc độ cho đến khi tỉ lệ đạt chuẩn',
        description:
          'Chỉnh nhẹ độ sáng hoặc từng kênh RGB rồi theo dõi tỉ lệ cập nhật trực tiếp cho đến khi cặp màu của bạn đạt ngưỡng AA hoặc AAA cần thiết.',
      },
      {
        title: 'Xem bảng điểm WCAG 2.1',
        description:
          'Kiểm tra tỉ lệ tương phản chính xác (ví dụ 12,63 : 1) và trạng thái ĐẠT/KHÔNG ĐẠT tức thì cho các chuẩn AA Thường, AA Lớn/Giao diện, AAA Thường và AAA Lớn.',
      },
      {
        title: 'Xem trước cặp màu trên văn bản giao diện thực',
        description:
          'Đọc bản xem trước kiểu chữ trực tiếp và thẻ điều khiển giao diện có viền để thấy màu của bạn thực sự trông như thế nào khi làm văn bản nội dung, tiêu đề và nút bấm.',
      },
      {
        title: 'Trích xuất bảng màu từ ảnh (tuỳ chọn)',
        description:
          'Tải lên bất kỳ ảnh chụp màn hình hoặc logo thương hiệu nào ở phía dưới để trích xuất tối đa 8 màu chủ đạo khác nhau rồi áp dụng trực tiếp cho màu chữ hoặc màu nền.',
      },
      {
        title: 'Sao chép màu và sửa các cặp không đạt',
        description:
          'Sao chép giá trị HEX, RGB hoặc HSL đã đồng bộ vào CSS của bạn. Nếu một cặp không đạt, hãy làm tối chữ hoặc làm sáng nền cho đến khi bảng điểm chuyển sang màu xanh.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra độ dễ đọc của nút kêu gọi hành động chính',
        input: 'Màu chữ: #FFFFFF · Màu nền: #4F46E5',
        output: 'Tỉ lệ tương phản 6,29 : 1 — Đạt WCAG AA Thường, AA Lớn và AAA Lớn',
        explanation: 'Dùng công thức độ chói tương đối sRGB đã tuyến tính hoá gamma chính thức (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Kiểm tra chữ xám nhạt trên nền trắng',
        input: 'Màu chữ: #9CA3AF · Màu nền: #FFFFFF',
        output: 'Tỉ lệ tương phản 2,22 : 1 — Không đạt AA Thường, cũng không đạt AA Lớn',
        explanation: 'Chữ xám nhạt cho độ tương phản quá thấp đối với văn bản nội dung — cần làm tối màu chữ hơn.',
      },
    ],
    benefits: [
      'Công thức độ chói tương đối sRGB WCAG 2.1 chính xác — không có xấp xỉ',
      'Bản xem trước kiểu chữ trực tiếp và thẻ điều khiển giao diện có viền hiển thị cặp màu đang dùng',
      'Bộ lượng tử hoá màu ảnh Canvas tích hợp lấy bảng màu thương hiệu mà không cần công cụ khác',
      'Hiển thị chuỗi HEX, RGB và HSL đã đồng bộ, sẵn sàng dán vào CSS',
    ],
    useCases: [
      'Kiểm tra hệ thống thiết kế, bảng điều khiển SaaS và giao diện chế độ tối theo chuẩn WCAG AA/AAA',
      'Lấy màu thương hiệu chủ đạo từ logo khách hàng đưa thẳng vào bảng màu giao diện dễ tiếp cận',
      'Sửa các cặp màu huy hiệu, văn bản giữ chỗ hoặc nhãn nút có độ tương phản thấp trước khi ra mắt',
      'Dạy về hệ thống phân cấp thị giác dễ tiếp cận bằng bản xem trước văn bản lớn và văn bản thường trực tiếp',
    ],
    faqs: [
      {
        question: 'Tỉ lệ tương phản cần thiết cho WCAG cấp độ AA và cấp độ AAA là bao nhiêu?',
        answer:
          'WCAG 2.1 cấp độ AA yêu cầu ít nhất 4,5:1 cho văn bản nội dung thường và 3,0:1 cho văn bản lớn (từ 18 pt trở lên hoặc chữ đậm từ 14 pt trở lên) và thành phần giao diện. Cấp độ AAA nâng các ngưỡng này lên 7,0:1 cho văn bản thường và 4,5:1 cho văn bản lớn.',
      },
      {
        question: 'Bộ trích xuất bảng màu ảnh hoạt động như thế nào?',
        answer:
          'Công cụ vẽ ảnh bạn tải lên lên một Canvas HTML5 ẩn, bỏ qua các điểm ảnh trong suốt, gom các nhóm RGB gần nhau lại, rồi hiển thị tối đa 8 màu chủ đạo khác biệt rõ rệt theo diện tích phủ.',
      },
      {
        question: 'Công cụ kiểm tra tương phản màu có chuyển đổi giữa HEX, RGB và HSL không?',
        answer:
          'Có. Khi bạn cập nhật bất kỳ bộ chọn màu, ô nhập HEX hoặc trường R/G/B nào, các dạng biểu diễn HEX, rgb() và hsl() sẽ được tính lại tự động và luôn đồng bộ với nhau.',
      },
      {
        question: 'Văn bản lớn theo quy tắc tương phản WCAG là gì?',
        answer:
          'Văn bản lớn là văn bản từ 18 pt (24 px) trở lên, hoặc chữ đậm từ 14 pt (18,66 px) trở lên. Văn bản lớn chỉ cần tỉ lệ 3,0:1 cho AA và 4,5:1 cho AAA, trong khi văn bản thường cần 4,5:1 cho AA và 7,0:1 cho AAA.',
      },
      {
        question: 'Công cụ kiểm tra tương phản màu có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí và không cần đăng ký. Mọi kiểm tra đều chạy ngay trong trình duyệt của bạn nên bạn có thể thử bao nhiêu cặp màu tuỳ thích.',
      },
      {
        question: 'Ảnh tôi tải lên có rời khỏi thiết bị của tôi không?',
        answer:
          'Không. Việc trích xuất bảng màu diễn ra hoàn toàn trong trình duyệt của bạn bằng canvas ẩn và ảnh của bạn không bao giờ được tải lên bất kỳ máy chủ nào.',
      },
      {
        question: 'Tỉ lệ tương phản được tính như thế nào?',
        answer:
          'Công cụ dùng công thức WCAG 2.1 chính thức: độ chói tương đối của mỗi màu được tính từ giá trị sRGB đã tuyến tính hoá gamma, và tỉ lệ là (L1 + 0,05) / (L2 + 0,05), trong đó L1 là màu sáng hơn.',
      },
      {
        question: 'Tôi có thể kiểm tra tương phản cho thiết kế chế độ tối không?',
        answer:
          'Có. Hãy nhập màu nền tối và màu chữ sáng theo cùng cách đó, bảng điểm sẽ cho biết cặp màu có đạt AA và AAA cho cả văn bản thường và văn bản lớn hay không.',
      },
      {
        question: 'Vì sao cặp màu của tôi trông dễ đọc nhưng vẫn không đạt AA?',
        answer:
          'Khả năng đọc cảm nhận được và độ tương phản độ chói đo được là hai điều khác nhau. Những màu trông khác biệt với bạn vẫn có thể gần nhau về độ chói, đặc biệt là các tông màu trung bình, vì vậy hãy tin vào tỉ lệ và điều chỉnh độ sáng cho đến khi đạt chuẩn.',
      },
      {
        question: 'Tôi nên làm gì nếu màu thương hiệu của mình không đạt bài kiểm tra tương phản?',
        answer:
          'Hãy giữ màu thương hiệu cho tiêu đề lớn hoặc yếu tố trang trí, và dùng tông tối hơn của nó cho văn bản nội dung. Bạn cũng có thể làm sáng nền hoặc thêm lớp phủ mờ phía sau văn bản.',
      },
      {
        question: 'Công cụ kiểm tra có áp dụng cho thành phần giao diện như nút bấm và biểu tượng không?',
        answer:
          'Có. WCAG 2.1 yêu cầu tỉ lệ 3,0:1 cho thành phần giao diện phi văn bản như viền nút, đường viền ô nhập và biểu tượng có ý nghĩa, và cột AA Lớn/Giao diện trên bảng điểm bao quát đúng trường hợp này.',
      },
      {
        question: 'Tôi có thể kiểm tra văn bản giữ chỗ và trạng thái vô hiệu hoá bằng công cụ này không?',
        answer:
          'Có, hãy nhập màu của văn bản giữ chỗ hoặc trạng thái vô hiệu hoá làm màu chữ. Lưu ý rằng điều khiển bị vô hiệu hoá được miễn yêu cầu tương phản WCAG, nhưng văn bản giữ chỗ truyền đạt thông tin thì không được miễn.',
      },
      {
        question: 'Bộ trích xuất bảng màu có thể lấy bao nhiêu màu từ một ảnh?',
        answer:
          'Tối đa 8 màu chủ đạo khác nhau. Các tông tương tự được gom lại với nhau nên các mẫu màu thể hiện những màu nổi bật nhất về mặt thị giác trong ảnh thay vì mọi sắc độ có mặt.',
      },
      {
        question: 'Tôi có thể áp dụng trực tiếp mẫu màu đã trích xuất làm màu chữ hoặc màu nền không?',
        answer:
          'Có. Mỗi mẫu màu đã trích xuất đều có nút để đưa thẳng vào ô màu chữ hoặc màu nền, nhờ đó bạn có thể kiểm tra ngay với màu còn lại.',
      },
      {
        question: 'Định dạng ảnh nào hoạt động với bộ trích xuất bảng màu?',
        answer:
          'Bất kỳ ảnh nào trình duyệt của bạn hiển thị được, bao gồm ảnh chụp màn hình hoặc logo PNG, JPG, WebP và SVG. Các điểm ảnh trong suốt sẽ bị bỏ qua khi gom nhóm màu.',
      },
      {
        question: 'Công cụ kiểm tra tương phản màu có kiểm tra mù màu không?',
        answer:
          'Không, công cụ chỉ đo độ tương phản độ chói. Tương phản chỉ là một phần của khả năng tiếp cận; để an toàn với người mù màu, bạn cũng không nên chỉ dựa vào màu sắc để truyền đạt ý nghĩa và hãy kiểm tra bảng màu bằng trình mô phỏng mù màu.',
      },
      {
        question: 'Tôi có thể dùng giá trị HEX, RGB và HSL trong CSS của mình không?',
        answer:
          'Có. Cả ba định dạng luôn đồng bộ khi bạn chỉnh sửa, và bạn có thể sao chép bất kỳ định dạng nào trực tiếp vào bảng định kiểu, token thiết kế hoặc cấu hình Tailwind của mình.',
      },
      {
        question: 'Trong thực tế, AA và AAA khác nhau thế nào?',
        answer:
          'AA là tiêu chuẩn pháp lý và thực tế mà hầu hết website hướng tới, còn AAA nghiêm ngặt hơn và thường khó đạt đối với văn bản nội dung mang màu thương hiệu. Hãy cố đạt AAA khi có thể, nhưng đừng bao giờ phát hành dưới mức AA đối với văn bản.',
      },
      {
        question: 'Công cụ có lưu lựa chọn màu hoặc ảnh của tôi không?',
        answer:
          'Không. Mọi thứ chạy ngay trong tab trình duyệt của bạn, không có gì được tải lên, và màu sắc cùng ảnh của bạn sẽ biến mất khi bạn đóng hoặc làm mới trang.',
      },
      {
        question: 'Tôi có thể kiểm tra nhiều cặp màu cùng lúc không?',
        answer:
          'Công cụ kiểm tra một cặp màu chữ/nền tại một thời điểm, nhưng bạn có thể hoán đổi màu chỉ bằng một cú nhấp và kiểm tra lại bao nhiêu cặp tuỳ ý trong vài giây.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'Tải ảnh QR lên hoặc bật quét bằng camera',
        description:
          'Kéo thả hoặc chọn bất kỳ ảnh chụp màn hình QR nào ở định dạng PNG, JPG, WebP hoặc SVG — hoặc nhấn Bắt đầu quét bằng camera khi bạn muốn đọc mã QR in sẵn trực tiếp.',
      },
      {
        title: 'Để công cụ quét giải mã mã QR',
        description:
          'Công cụ chạy giải mã đa tỉ lệ, nhận biết đảo màu ngay trong trình duyệt của bạn nên ngay cả mã QR chế độ tối hay mã đảo màu cũng được đọc mà không cần tải lên gì.',
      },
      {
        title: 'Xem và sao chép văn bản đã giải mã',
        description:
          'Xem lại dữ liệu đã giải mã, loại dữ liệu được phát hiện và bản xem trước liên kết an toàn (chỉ URL http/https mới trở thành liên kết có thể nhấp), rồi sao chép chỉ bằng một cú nhấp.',
      },
      {
        title: 'Kiểm tra loại dữ liệu trước khi thao tác',
        description:
          'Xem mã QR chứa URL, thông tin Wi-Fi, danh thiếp vCard hay văn bản thuần, và xác minh điểm đến trông đúng trước khi truy cập hay kết nối.',
      },
      {
        title: 'Chuyển sang Trình tạo mã QR danh thiếp vCard (tuỳ chọn)',
        description:
          'Tạo mã QR danh thiếp VCF 3.0 có thể quét được với tên, tổ chức, số điện thoại, email và website, rồi tải xuống dưới dạng PNG hoặc SVG.',
      },
      {
        title: 'Tải xuống, in ấn hoặc khắc phục lỗi quét',
        description:
          'Tải mã QR vCard của bạn xuống, hoặc tải lại ảnh chụp màn hình sắc nét và đủ sáng hơn nếu giải mã thất bại — mã QR bị cắt, mờ hoặc quá nhỏ là nguyên nhân phổ biến nhất.',
      },
    ],
    examples: [
      {
        title: 'Xác minh ảnh chụp màn hình tờ rơi quảng cáo trước khi đặt in',
        input: 'Tải lên flyer-qr.png (PNG 600×600)',
        output: 'Dữ liệu đã giải mã · URL website: https://example.com/?utm_source=print',
        explanation: 'Chạy giải mã đa tỉ lệ, nhận biết đảo màu ngay trong trình duyệt nên mã QR chế độ tối đảo màu cũng được giải mã đáng tin cậy.',
      },
      {
        title: 'Tạo mã QR vCard cho hồ sơ xin việc',
        input: 'Tên: Bilal Asghar · Điện thoại: +971 50 123 4567 · Email: bilal@example.com',
        output: 'Mã QR vCard VCF 3.0, tải xuống được cả dạng PNG và SVG',
        explanation: 'Cả iPhone và Android đều nhận dạng mã QR vCard VCF 3.0 chuẩn và đề xuất lưu danh bạ khi quét bằng camera tích hợp.',
      },
    ],
    benefits: [
      'Giải mã sạch ảnh chụp màn hình QR thường và QR đảo màu mà không cần ứng dụng di động',
      'Luồng camera tuỳ chọn dừng ngay khi giải mã xong hoặc khi rời khỏi tab',
      'Phân loại dữ liệu đã giải mã gọn gàng mà không tự động chuyển hướng đi nơi khác',
      'Bao gồm đầy đủ tính năng tạo mã QR vCard 3.0 dạng PNG và SVG cho danh thiếp số',
    ],
    useCases: [
      'Kiểm tra lại URL đích có UTM trong tài sản QR trước khi in áp phích',
      'Trích xuất chuỗi Wi-Fi hoặc token văn bản từ ảnh chụp màn hình máy tính',
      'Quét mã QR vật lý trên laptop bằng webcam tích hợp',
      'Tạo mã QR danh thiếp vCard có thể quét cho hồ sơ, thẻ đeo và bài thuyết trình',
    ],
    faqs: [
      {
        question: 'Nếu thiết bị của tôi không có camera hoặc bị từ chối quyền camera thì sao?',
        answer:
          'Bạn không bao giờ cần camera để dùng công cụ này — chỉ cần chụp ảnh màn hình hoặc chụp ảnh rồi tải lên qua mục Tải ảnh mã QR lên, cách này hoạt động hoàn toàn giống nhau mà không cần quyền camera.',
      },
      {
        question: 'Quét mã QR có tự động mở website độc hại không?',
        answer:
          'Không. Văn bản đã giải mã được hiển thị an toàn trong ô văn bản chỉ đọc trước tiên để bạn kiểm tra bất kỳ URL nào trước khi quyết định có truy cập hay không.',
      },
      {
        question: 'Cần trình tạo mã QR cho URL, Wi-Fi hoặc màu tuỳ chỉnh thay vì vCard?',
        answer:
          'Hãy thử công cụ tạo mã QR chuyên dụng của chúng tôi trong mục Công cụ mạng xã hội để có màu chữ/nền tuỳ chỉnh, mức sửa lỗi và mã QR cho URL hoặc văn bản.',
      },
      {
        question: 'Công cụ quét mã QR có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký, và cả quét mã lẫn tạo mã QR vCard đều chạy ngay trong trình duyệt của bạn.',
      },
      {
        question: 'Ảnh QR tôi tải lên có bị gửi đến máy chủ không?',
        answer:
          'Không. Việc giải mã diễn ra hoàn toàn trong trình duyệt của bạn bằng jsQR nên ảnh chụp màn hình và ảnh chụp của bạn không bao giờ rời khỏi thiết bị.',
      },
      {
        question: 'Công cụ quét mã QR có thể đọc những định dạng ảnh nào?',
        answer:
          'Ảnh PNG, JPG, WebP và SVG đều hoạt động được. Ảnh chụp màn hình trên điện thoại hoặc máy tính là cách phổ biến nhất để cung cấp mã QR.',
      },
      {
        question: 'Vì sao mã QR của tôi quét thất bại?',
        answer:
          'Nguyên nhân thường gặp là ảnh mờ hoặc độ phân giải thấp, mã QR bị cắt quá chặt, chói sáng trên mã in, hoặc mã quá nhỏ trong khung hình. Hãy tải lại một bản chụp sắc nét, lớn hơn và đủ sáng.',
      },
      {
        question: 'Công cụ quét có đọc được mã QR đảo màu hoặc chế độ tối không?',
        answer:
          'Có. Bộ giải mã có khả năng nhận biết đảo màu nên mã QR có mô-đun sáng trên nền tối cũng được giải mã đáng tin cậy như mã đen trắng tiêu chuẩn.',
      },
      {
        question: 'Công cụ có thể phát hiện những loại dữ liệu QR nào?',
        answer:
          'Công cụ tự động phân loại nội dung đã giải mã, bao gồm URL website, thông tin đăng nhập mạng Wi-Fi, danh thiếp vCard và văn bản thuần, để bạn biết mã làm gì trước khi thao tác với nó.',
      },
      {
        question: 'Quét mã QR tìm thấy ở nơi công cộng có an toàn không?',
        answer:
          'Quét ở đây là an toàn vì không có gì tự động mở ra — bạn thấy văn bản đã giải mã trước tiên. Hãy luôn đọc kỹ URL và tránh nhập mật khẩu hay thông tin thanh toán trên các trang mà mã QR lạ dẫn tới.',
      },
      {
        question: 'Tôi có thể quét mã QR bằng webcam laptop không?',
        answer:
          'Có. Hãy nhấn Bắt đầu quét bằng camera, cho phép truy cập camera khi trình duyệt hỏi, rồi giữ mã in trước camera. Luồng sẽ tự dừng khi mã được giải mã hoặc khi bạn rời khỏi tab.',
      },
      {
        question: 'Camera có tiếp tục quay sau khi quét xong không?',
        answer:
          'Không. Luồng camera dừng ngay lập tức khi giải mã thành công, và cũng dừng nếu bạn chuyển tab hoặc đóng công cụ quét.',
      },
      {
        question: 'Mã QR vCard là gì?',
        answer:
          'Mã QR vCard lưu trữ thông tin liên hệ — tên, tổ chức, số điện thoại, email và website — theo định dạng VCF 3.0 chuẩn, vì vậy quét bằng điện thoại sẽ đề xuất lưu danh bạ trực tiếp.',
      },
      {
        question: 'Tôi có thể tải mã QR vCard xuống dạng PNG và SVG không?',
        answer:
          'Có. Trình tạo vCard xuất cả hai định dạng: PNG cho tài liệu và bài thuyết trình, và SVG để in sắc nét ở mọi kích thước.',
      },
      {
        question: 'Mã QR vCard có hoạt động trên cả iPhone và Android không?',
        answer:
          'Có. Cả hai nền tảng đều nhận dạng mã QR vCard VCF 3.0 chuẩn và đề xuất thêm danh bạ khi quét bằng camera tích hợp.',
      },
      {
        question: 'Tôi có thể quét mã QR từ video hoặc bản ghi màn hình không?',
        answer:
          'Không trực tiếp được, nhưng bạn có thể tạm dừng video, chụp ảnh màn hình khung hình hiển thị mã QR rồi tải ảnh chụp đó lên công cụ quét.',
      },
      {
        question: 'Công cụ quét mã QR có hoạt động ngoại tuyến không?',
        answer:
          'Sau khi trang đã tải xong, việc giải mã chạy hoàn toàn trong trình duyệt của bạn mà không cần yêu cầu mạng nên bạn vẫn quét được ảnh đã tải lên ngay cả khi không có internet.',
      },
      {
        question: 'Tôi có thể quét nhiều mã QR trong một ảnh không?',
        answer:
          'Công cụ quét giải mã một mã QR tại một thời điểm. Nếu một ảnh chứa nhiều mã, hãy cắt ảnh để mỗi mã được tải lên riêng biệt.',
      },
      {
        question: 'Tôi nên kiểm tra gì trước khi in mã QR lên tờ rơi?',
        answer:
          'Hãy tải ảnh chụp màn hình của thiết kế hoàn chỉnh lên và quét tại đây để xác nhận URL đích, tham số UTM và dữ liệu hoàn toàn chính xác trước khi bạn đặt in.',
      },
      {
        question: 'Công cụ có lưu mã QR tôi đã quét hoặc ảnh camera không?',
        answer:
          'Không. Không có gì được tải lên, ghi lại hay lưu trữ. Kết quả đã giải mã chỉ tồn tại trong tab trình duyệt hiện tại của bạn và biến mất khi bạn đóng tab.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Chọn Mật khẩu ngẫu nhiên hoặc Cụm mật khẩu Diceware',
        description:
          'Dùng Mật khẩu ngẫu nhiên để có mật độ bộ ký tự tối đa, hoặc Cụm mật khẩu Diceware để dễ gõ bằng tay hơn với entropy nhiều từ mạnh.',
      },
      {
        title: 'Tuỳ chỉnh độ dài, bộ ký tự và số lượng theo lô',
        description:
          'Điều chỉnh độ dài (8–64 ký tự), bật/tắt chữ hoa, chữ thường, chữ số và ký hiệu, có thể loại trừ ký tự dễ nhầm (0/O/1/l/I), hoặc chọn 3–8 từ Diceware.',
      },
      {
        title: 'Tạo mật khẩu hoặc cụm mật khẩu của bạn',
        description:
          'Nhấn tạo để tạo kết quả mới bằng bộ tạo số ngẫu nhiên an toàn mật mã có hỗ trợ phần cứng của trình duyệt, dùng lấy mẫu loại bỏ để mọi ký tự có xác suất hoàn toàn bằng nhau.',
      },
      {
        title: 'Kiểm tra điểm entropy',
        description:
          'Xem số bit entropy Shannon chính xác (khuyến nghị khoảng 72–118+ bit) để biết kết quả đại diện cho bao nhiêu công sức đoán trước khi bạn sử dụng.',
      },
      {
        title: 'Tạo lại và sao chép an toàn',
        description:
          'Không hài lòng với kết quả? Hãy tạo lại để có mật khẩu mới, rồi sao chép một mật khẩu duy nhất hoặc toàn bộ lô chỉ bằng một cú nhấp.',
      },
      {
        title: 'Lưu vào trình quản lý mật khẩu và làm mới để xoá',
        description:
          'Dán kết quả vào trình quản lý mật khẩu ngay lập tức. Làm mới trang sẽ xoá mật khẩu đã tạo khỏi bộ nhớ nên đừng bao giờ trông cậy vào tab để ghi nhớ chúng.',
      },
    ],
    examples: [
      {
        title: 'Mật khẩu hỗn hợp 18 ký tự với đầy đủ bộ ký tự',
        input: 'Độ dài: 18 · Chữ hoa + chữ thường + chữ số + ký hiệu (Bộ ký tự: 88 ký tự)',
        output: 'Entropy mật mã khoảng 116,3 bit · Đảm bảo có ít nhất 1 ký tự từ mỗi nhóm đã bật',
        explanation: 'Dùng lấy mẫu loại bỏ (bỏ các mẫu uint32 lớn hơn hoặc bằng floor(2^32 / pool) * pool) để đảm bảo tính đồng đều nghiêm ngặt.',
      },
      {
        title: 'Cụm mật khẩu Diceware 5 từ cho Wi-Fi',
        input: 'Chế độ: Diceware · Số từ: 5',
        output: 'Cụm mật khẩu kiểu "correct horse battery staple" — dễ gõ, khó đoán',
        explanation: 'Năm đến sáu từ ngẫu nhiên cho entropy mạnh nhưng gõ dễ hơn nhiều so với ký tự ngẫu nhiên.',
      },
    ],
    benefits: [
      'Kiên quyết tránh Math.random() không an toàn — dùng window.crypto.getRandomValues có hạt giống phần cứng',
      'Loại bỏ thiên lệch modulo bằng lấy mẫu loại bỏ thực sự và xáo trộn Fisher-Yates không thiên vị',
      'Đảm bảo ít nhất một ký tự từ mỗi nhóm ký tự đã chọn mà không dùng vị trí cố định',
      'Không có gì được ghi lại, lưu trữ hay truyền qua mạng',
    ],
    useCases: [
      'Bảo mật tài khoản đám mây, khoá SSH, thông tin đăng nhập cơ sở dữ liệu và kho chính của trình quản lý mật khẩu',
      'Tạo cụm mật khẩu Diceware dễ gõ bằng tay cho mã hoá ổ đĩa hoặc khoá khách Wi-Fi',
      'Cấp hàng loạt thông tin đăng nhập tạm thời khi giới thiệu nhân viên (tối đa 10 mỗi lần nhấn)',
      'So sánh tác động của 12, 18 và 24 ký tự lên entropy theo bit',
    ],
    faqs: [
      {
        question: 'Vì sao lấy mẫu loại bỏ với crypto.getRandomValues lại quan trọng?',
        answer:
          'Việc chỉ tính randomUint32 % poolSize sẽ hơi ưu ái các ký tự có chỉ số thấp khi 2^32 không chia hết cho poolSize (thiên lệch modulo). Lấy mẫu loại bỏ sẽ bỏ các lần rút ngoài phạm vi để mọi ký tự trong bộ ký tự có xác suất bằng nhau về mặt toán học.',
      },
      {
        question: 'Tôi nên dùng mật khẩu ngẫu nhiên hay cụm mật khẩu?',
        answer:
          'Cả hai đều tuyệt vời khi đủ dài: 16 ký tự hỗn hợp trở lên hoạt động tốt trong trình quản lý mật khẩu, còn cụm mật khẩu 5 đến 6 từ dễ gõ bằng tay hơn nhiều trên TV, điện thoại hoặc màn hình giải mã ổ đĩa.',
      },
      {
        question: 'Mật khẩu đã tạo có được lưu ở đâu không?',
        answer:
          'Không bao giờ. Mật khẩu chỉ tồn tại trong bộ nhớ React tạm thời của tab và biến mất khi bạn làm mới trang.',
      },
      {
        question: 'Công cụ tạo mật khẩu có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí và không cần đăng ký. Bạn có thể tạo bao nhiêu mật khẩu và cụm mật khẩu tuỳ ý ngay trong trình duyệt.',
      },
      {
        question: 'Mật khẩu ở đây được tạo như thế nào?',
        answer:
          'Mật khẩu được tạo ngay trong trình duyệt bằng window.crypto.getRandomValues, bộ tạo số ngẫu nhiên an toàn mật mã có hỗ trợ phần cứng của trình duyệt, kết hợp lấy mẫu loại bỏ để khử thiên lệch modulo.',
      },
      {
        question: 'Mật khẩu đã tạo của tôi có bị gửi đến máy chủ không?',
        answer:
          'Không. Quá trình tạo diễn ra hoàn toàn trên thiết bị của bạn và không có gì được lưu trữ, ghi lại hay truyền qua mạng.',
      },
      {
        question: 'Mật khẩu của tôi nên dài bao nhiêu?',
        answer:
          'Đối với tài khoản quan trọng, hãy dùng ít nhất 16 ký tự với nhiều nhóm ký tự hỗn hợp, cho entropy khoảng 100+ bit. Mật khẩu ngắn hơn chỉ phù hợp cho tài khoản ít giá trị, và độ dài quan trọng hơn độ phức tạp.',
      },
      {
        question: 'Entropy mật khẩu là gì và tôi cần bao nhiêu bit?',
        answer:
          'Entropy đo lượng công sức đoán mà một mật khẩu đại diện. Khoảng 70–80 bit là mạnh đối với hầu hết tài khoản, còn 100+ bit được khuyến nghị cho mật khẩu chính, khoá mã hoá và tài khoản giá trị cao.',
      },
      {
        question: 'Cụm mật khẩu Diceware là gì?',
        answer:
          'Cụm mật khẩu Diceware gồm nhiều từ ngẫu nhiên được chọn từ một danh sách từ cố định, ví dụ như "correct horse battery staple". Năm hoặc sáu từ ngẫu nhiên cho entropy mạnh nhưng vẫn dễ gõ và dễ nhớ hơn nhiều so với ký tự ngẫu nhiên.',
      },
      {
        question: 'Tôi có nên loại trừ ký tự mơ hồ như 0, O, 1, l và I không?',
        answer:
          'Có, khi bạn sẽ gõ mật khẩu bằng tay hoặc đọc to. Việc loại trừ ký tự dễ nhầm sẽ tránh lỗi đăng nhập do gõ sai, và với mật khẩu đủ dài, lượng entropy mất đi là không đáng kể.',
      },
      {
        question: 'Tôi có thể tạo nhiều mật khẩu cùng lúc không?',
        answer:
          'Có. Bạn có thể tạo một lô tối đa 10 mật khẩu chỉ bằng một cú nhấp, rất tiện khi cấp tài khoản hoặc giới thiệu thành viên mới trong nhóm.',
      },
      {
        question: 'Công cụ tạo có đảm bảo ít nhất một ký tự từ mỗi nhóm đã chọn không?',
        answer:
          'Có. Mọi mật khẩu được tạo đều chứa ít nhất một ký tự từ mỗi nhóm ký tự bạn đã bật, mà không đặt các ký tự đó ở vị trí cố định có thể đoán trước.',
      },
      {
        question: 'Tôi có thể dùng mật khẩu này làm mật khẩu chính cho trình quản lý mật khẩu không?',
        answer:
          'Cụm mật khẩu dài rất phù hợp làm mật khẩu chính vì bạn phải gõ nó từ trí nhớ. Hãy tạo cụm mật khẩu Diceware 6 từ, ghi nhớ nó rồi lưu các mật khẩu còn lại trong trình quản lý.',
      },
      {
        question: 'Vì sao không dùng Math.random() cho mật khẩu?',
        answer:
          'Math.random() không an toàn về mặt mật mã: đầu ra của nó có thể bị đoán trước nếu kẻ tấn công biết được trạng thái nội bộ. Công cụ này chỉ dùng window.crypto.getRandomValues, vốn được thiết kế cho tính ngẫu nhiên nhạy cảm về bảo mật.',
      },
      {
        question: 'Mật khẩu đã tạo có hoạt động trên mọi website không?',
        answer:
          'Hầu như luôn hoạt động. Nếu một website từ chối ký hiệu hoặc giới hạn độ dài, hãy giảm độ dài hoặc tắt nhóm ký hiệu rồi tạo lại cho đến khi website chấp nhận.',
      },
      {
        question: 'Tôi có thể dùng lại một mật khẩu đã tạo trên nhiều trang không?',
        answer:
          'Bạn không nên làm vậy. Việc dùng lại mật khẩu có nghĩa là một vụ rò rỉ sẽ phơi bày mọi tài khoản dùng chung mật khẩu đó, vì vậy hãy tạo mật khẩu riêng cho từng trang và lưu chúng trong trình quản lý mật khẩu.',
      },
      {
        question: 'Điều gì xảy ra với mật khẩu của tôi nếu tôi làm mới trang?',
        answer:
          'Chúng sẽ biến mất. Mật khẩu đã tạo chỉ tồn tại trong bộ nhớ tạm thời của tab, vì vậy hãy sao chép hoặc lưu chúng vào trình quản lý mật khẩu trước khi làm mới hay đóng trang.',
      },
      {
        question: 'Công cụ tạo mật khẩu có hoạt động ngoại tuyến không?',
        answer:
          'Có. Sau khi trang đã tải xong, quá trình tạo chạy hoàn toàn trong trình duyệt của bạn mà không cần yêu cầu mạng nên công cụ vẫn hoạt động ngoại tuyến.',
      },
      {
        question: 'Làm thế nào để chọn giữa mật khẩu và cụm mật khẩu cho Wi-Fi?',
        answer:
          'Hãy dùng cụm mật khẩu cho khoá Wi-Fi mà bạn gõ trên nhiều thiết bị vì từ ngữ dễ nhập đúng hơn, và dùng mật khẩu ký tự ngẫu nhiên khi trình quản lý mật khẩu sẽ tự điền giúp bạn.',
      },
      {
        question: 'Mật khẩu đã tạo có đảm bảo không thể bị hack không?',
        answer:
          'Không mật khẩu nào có thể đảm bảo không bị hack — website vẫn có thể bị xâm nhập hoặc bị lừa bằng lừa đảo. Tuy nhiên, một mật khẩu dài, duy nhất, được tạo ngẫu nhiên và lưu trong trình quản lý mật khẩu là một trong những biện pháp phòng thủ thực tế mạnh nhất bạn có thể dùng.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Chọn tệp từ thiết bị của bạn',
        description:
          'Chọn bất kỳ tệp lưu trữ, trình cài đặt, PDF hoặc tài sản nhị phân nào. Tệp chỉ được đọc vào bộ nhớ trình duyệt cục bộ (khuyến nghị dưới 500 MB) và không bao giờ được tải lên.',
      },
      {
        title: 'Chờ các mã băm được tính',
        description:
          'Trình duyệt tính song song SHA-256, SHA-512, SHA-384 và SHA-1 bằng Web Crypto tăng tốc phần cứng. Tệp lớn hơn sẽ mất vài giây.',
      },
      {
        title: 'Xem các mã băm mật mã đã tính',
        description:
          'Xem lại các hàm băm thập lục phân SHA-256, SHA-512, SHA-384 và SHA-1 cũ kèm siêu dữ liệu tệp, và tải tệp văn bản .sha256 chuẩn nếu cần.',
      },
      {
        title: 'Xác minh với mã kiểm tra đã công bố',
        description:
          'Dán chuỗi SHA-256/512/384/1 dự kiến — hoặc toàn bộ dòng "<hash>  filename" từ tệp .sha256sum — để xác nhận khớp chính xác hoặc phát hiện hỏng hóc và giả mạo.',
      },
      {
        title: 'Sao chép hoặc xuất mã băm',
        description:
          'Sao chép bất kỳ mã băm nào chỉ bằng một cú nhấp, hoặc tải tệp văn bản .sha256 chuẩn để gửi kèm bản phát hành hay giữ làm hồ sơ xác minh.',
      },
      {
        title: 'Xử lý khi không khớp hoặc tệp lớn',
        description:
          'Nếu các mã băm không khớp, hãy xoá tệp và tải lại từ nguồn chính thức. Với tệp trên khoảng 500 MB, hãy dùng shasum -a 256 hoặc certutil vì trình duyệt tải toàn bộ tệp vào bộ nhớ.',
      },
    ],
    examples: [
      {
        title: 'Xác minh tệp nhị phân bản phát hành đã tải xuống với tệp .sha256sum của nhà cung cấp',
        input: 'Tệp: app-v2.tar.gz · Dự kiến: "e3b0c442...  app-v2.tar.gz"',
        output: 'Đã xác minh mã kiểm tra! Khớp sạch với mã băm SHA-256 đã tính.',
        explanation: 'Tự động trích xuất token băm đầu tiên, bỏ qua chữ hoa/thường và so sánh với cả 4 thuật toán đã tính.',
      },
      {
        title: 'Tạo tệp .sha256 cho bản phát hành của bạn',
        input: 'Tệp: my-app.zip · SHA-256 đã tính: 9f2c...a1',
        output: 'Tệp văn bản my-app.zip.sha256 đã sẵn sàng để tải xuống',
        explanation: 'Xuất mã băm và tên tệp theo định dạng chuẩn để người dùng có thể xác minh bản phát hành của bạn.',
      },
    ],
    benefits: [
      'Dùng Web Crypto SubtleCrypto của trình duyệt được tăng tốc phần cứng bằng C++ gốc',
      'Hỗ trợ dán toàn bộ dòng "<hash>  filename" từ bản kê .sha256sum của bản phát hành',
      'Xuất tệp xác minh filename.sha256 chuẩn chỉ bằng một cú nhấp',
      'Không tải tệp lên nên bản dựng và hợp đồng bảo mật luôn riêng tư',
    ],
    useCases: [
      'Xác minh ISO Linux, tệp nhị phân CLI hoặc tarball mã nguồn mở mà không cần mở terminal',
      'Xác nhận việc giao đúng từng byte của tài liệu lưu trữ pháp lý hoặc tài chính',
      'Tạo bản kê .sha256 cho bản phát hành cho các sản phẩm nhỏ gửi khách hàng',
      'Phát hiện bản tải xuống bị cắt ngắn hoặc hỏng trước khi giải nén',
    ],
    faqs: [
      {
        question: 'Có giới hạn dung lượng tệp tối đa không?',
        answer:
          'Vì File.arrayBuffer() của trình duyệt tải toàn bộ tệp vào RAM của máy khách cùng lúc nên tệp đến khoảng 300–500 MB hoạt động trơn tru, còn ISO nhiều gigabyte có thể vượt quá hạn mức bộ nhớ của trình duyệt — với tệp nhiều GB, nên dùng công cụ CLI gốc (shasum -a 256 hoặc certutil).',
      },
      {
        question: 'Vì sao SHA-1 chỉ được gắn nhãn tương thích cũ?',
        answer:
          'SHA-1 có điểm yếu va chạm thực tế đã biết và không nên tin tưởng cho các đảm bảo bảo mật mang tính đối kháng; hãy ưu tiên SHA-256 hoặc SHA-512 bất cứ khi nào có thể.',
      },
      {
        question: 'Muốn băm chuỗi văn bản thô thay vì tệp nhị phân?',
        answer:
          'Hãy xem công cụ tạo mã băm của chúng tôi trong mục Công cụ cho nhà phát triển để băm văn bản UTF-8 tức thì.',
      },
      {
        question: 'Công cụ xác minh mã băm tệp có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký và bạn có thể xác minh bao nhiêu tệp tuỳ thích.',
      },
      {
        question: 'Tệp của tôi có được tải lên đâu khi tôi xác minh chúng không?',
        answer:
          'Không. Việc băm diễn ra hoàn toàn trong trình duyệt của bạn bằng API Web Crypto nên tệp của bạn không bao giờ rời khỏi thiết bị — chính vì vậy công cụ an toàn cho bản dựng và hợp đồng bảo mật.',
      },
      {
        question: 'Mã băm tệp là gì và vì sao tôi nên kiểm tra nó?',
        answer:
          'Mã băm là dấu vân tay có độ dài cố định được tính từ đúng các byte của tệp. Nếu chỉ một byte thay đổi, mã băm sẽ thay đổi hoàn toàn, vì vậy so sánh mã băm chứng minh bản tải xuống đến nơi nguyên vẹn và không bị sửa đổi.',
      },
      {
        question: 'Tôi nên dùng thuật toán băm nào: SHA-256, SHA-512 hay SHA-1?',
        answer:
          'Hãy dùng SHA-256 cho việc xác minh thông thường — đây là tiêu chuẩn mà nhà phát hành cung cấp. SHA-512 mạnh tương đương và nhanh hơn trên hệ thống 64-bit, còn SHA-1 chỉ là cũ và không nên tin tưởng cho bảo mật.',
      },
      {
        question: 'Tôi tìm mã kiểm tra chính thức để so sánh ở đâu?',
        answer:
          'Nhà phát hành thường liệt kê mã kiểm tra trên trang tải xuống hoặc trong tệp .sha256 / .sha256sum bên cạnh bản tải xuống. Hãy luôn sao chép từ chính website của nhà cung cấp, không bao giờ lấy từ bản sao hay bài đăng trên diễn đàn.',
      },
      {
        question: 'Tôi nên làm gì nếu các mã băm không khớp?',
        answer:
          'Đừng chạy hay giải nén tệp. Hãy xoá tệp và tải lại từ nguồn chính thức; việc không khớp có nghĩa là bản tải xuống đã bị hỏng, cắt ngắn hoặc có thể đã bị giả mạo.',
      },
      {
        question: 'Tôi có thể dán toàn bộ dòng .sha256sum thay vì chỉ mã băm không?',
        answer:
          'Có. Công cụ xác minh chấp nhận toàn bộ dòng "<hash>  filename" từ bản kê phát hành — nó tự động trích xuất token băm đầu tiên, bỏ qua chữ hoa/thường và so sánh với cả bốn thuật toán đã tính.',
      },
      {
        question: 'Mã băm có phụ thuộc vào tên tệp không?',
        answer:
          'Không. Mã băm được tính chỉ từ nội dung của tệp nên đổi tên tệp không bao giờ làm thay đổi mã băm. Hai tệp có cùng byte luôn cho ra cùng một mã băm.',
      },
      {
        question: 'Tôi có thể xác minh ISO Linux hoặc trình cài đặt lớn bằng công cụ này không?',
        answer:
          'Có, lên đến khoảng 300–500 MB. Với ISO nhiều gigabyte, hãy dùng công cụ gốc như shasum -a 256 trên macOS/Linux hoặc certutil -hashfile trên Windows vì trình duyệt tải toàn bộ tệp vào bộ nhớ.',
      },
      {
        question: 'SHA-256 và SHA-512 khác nhau thế nào?',
        answer:
          'Cả hai đều là thành viên an toàn của họ SHA-2; SHA-256 cho mã băm hex 64 ký tự còn SHA-512 cho mã 128 ký tự. SHA-512 hơi mạnh hơn và nhanh hơn trên phần cứng 64-bit, nhưng SHA-256 là mã kiểm tra được công bố rộng rãi hơn.',
      },
      {
        question: 'Công cụ này có phát hiện virus hoặc phần mềm độc hại trong tệp không?',
        answer:
          'Không. Mã băm khớp chỉ chứng minh tệp giống hệt tệp mà nhà phát hành đã phát hành. Nếu chính tệp của nhà phát hành đã độc hại thì mã băm vẫn khớp, vì vậy chỉ xác minh bản tải xuống từ nguồn mà bạn tin tưởng.',
      },
      {
        question: 'Làm thế nào để tải tệp .sha256 cho bản phát hành của tôi?',
        answer:
          'Hãy băm tệp phát hành của bạn tại đây, rồi tải tệp văn bản filename.sha256 chuẩn mà công cụ tạo ra và công bố cùng với bản tải xuống để người dùng có thể xác minh.',
      },
      {
        question: 'Vì sao việc băm mất vài giây đối với tệp lớn?',
        answer:
          'Trình duyệt phải đọc và xử lý từng byte của tệp. Tệp càng lớn càng mất nhiều thời gian hơn, và thời gian tăng theo kích thước tệp chứ không theo thuật toán bạn chọn.',
      },
      {
        question: 'Công cụ xác minh mã băm tệp có hoạt động ngoại tuyến không?',
        answer:
          'Có. Sau khi trang đã tải xong, mọi quá trình băm chạy ngay trong trình duyệt của bạn mà không cần yêu cầu mạng nên bạn có thể xác minh tệp mà không cần kết nối internet.',
      },
      {
        question: 'Tôi có thể xác minh nhiều tệp cùng lúc không?',
        answer:
          'Công cụ xác minh từng tệp một. Hãy băm từng tệp riêng biệt và so sánh với mã kiểm tra đã công bố của chính tệp đó.',
      },
      {
        question: 'Mã băm khớp có phải là bằng chứng tệp là thật không?',
        answer:
          'Nó chứng minh tệp giống từng byte với tệp mà nhà phát hành đã băm. Nó không chứng minh nhà phát hành đúng là người họ tự xưng, vì vậy hãy lấy mã băm dự kiến từ kênh chính thức của nhà phát hành.',
      },
      {
        question: 'Công cụ có lưu tệp hoặc mã băm của tôi không?',
        answer:
          'Không. Không có gì được tải lên hay lưu trữ, và các mã băm đã tính chỉ tồn tại trong tab trình duyệt hiện tại của bạn cho đến khi bạn đóng hoặc làm mới tab.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Chọn Huy hiệu chữ lồng hoặc Tải logo lên',
        description:
          'Nhập 1–3 chữ cái đầu thương hiệu với màu nền và màu chữ tuỳ chỉnh, hoặc chuyển sang Tải ảnh logo lên để cắt giữa logo PNG/SVG/JPG hiện có.',
      },
      {
        title: 'Tạo kiểu cho biểu tượng của bạn',
        description:
          'Chọn chữ lồng và màu sắc của bạn, hoặc điều chỉnh vùng cắt của logo đã tải lên để dấu ấn nằm chính giữa với khoảng đệm đều ở mọi phía.',
      },
      {
        title: 'Chọn hình dạng góc',
        description:
          'Chọn khung Hình vuông bo góc (kiểu iOS/macOS), Hình tròn hoặc Hình vuông góc nhọn.',
      },
      {
        title: 'Xem trước mọi kích thước',
        description:
          'Kiểm tra kỹ bản xem trước 16×16 và 32×32 — dấu ấn trông đẹp khi lớn có thể hoá mờ ở kích thước tab, vì vậy hãy đơn giản hoá chữ cái hoặc chi tiết nếu cần.',
      },
      {
        title: 'Tải favicon.ico, PNG và đoạn mã HTML',
        description:
          'Tải gói favicon.ico nhiều khung cùng các kích thước PNG riêng lẻ và sao chép thẻ liên kết <head> vào dự án của bạn.',
      },
      {
        title: 'Cài đặt biểu tượng và xoá bộ nhớ đệm',
        description:
          'Đặt các tệp vào thư mục /public/, dán thẻ liên kết vào index.html, rồi làm mới mạnh hoặc xoá bộ nhớ đệm trình duyệt — trình duyệt lưu favicon rất chặt nên biểu tượng cũ thường là biểu tượng đã lưu đệm.',
      },
    ],
    examples: [
      {
        title: 'Tạo biểu tượng khởi động cho ứng dụng React hoặc Cloudflare Pages mới',
        input: 'Chữ lồng "UH" · Nền #4F46E5 · Hình dạng: Hình vuông bo góc',
        output: 'Tệp favicon.ico nhị phân (khung PNG 16+32+48 px) + 6 kích thước PNG + đoạn mã <link> HTML',
        explanation: 'Xây dựng tiêu đề nhị phân ICONDIR và ICONDIRENTRY hợp lệ trực tiếp trong bộ đệm Uint8Array.',
      },
      {
        title: 'Tạo bộ biểu tượng PWA từ logo thương hiệu vuông',
        input: 'Tải logo PNG trong suốt 512×512 lên · Hình dạng: Hình vuông bo góc',
        output: 'favicon.ico + Apple Touch 180×180 + PNG kê khai 192/512 px',
        explanation: 'Ảnh nguồn vuông được cắt sạch nên logo luôn nằm chính giữa ở mọi kích thước.',
      },
    ],
    benefits: [
      'Tạo tệp .ico nhị phân nhiều khung thực sự (16×16, 32×32 và 48×48), không phải PNG đổi tên',
      'Bao quát tab máy tính, Apple Touch (180×180) và biểu tượng Web Manifest (192/512 px)',
      'Chế độ chữ lồng tức thì không cần phần mềm thiết kế cho dự án phụ và MVP',
      'Tạo mã mẫu HTML5 <link rel="icon"> sạch, sẵn sàng dán vào index.html',
    ],
    useCases: [
      'Bổ sung favicon và biểu tượng Apple Touch còn thiếu trước khi ra mắt SaaS hoặc microsite',
      'Tạo biểu tượng tab có độ tương phản cao cho bảng điều khiển staging và production',
      'Biến dấu ấn thương hiệu SVG/PNG vuông thành bộ biểu tượng PWA đầy đủ',
      'Tạo bản xem trước 16×16 và 32×32 sắc nét để kiểm tra độ dễ đọc ở kích thước nhỏ',
    ],
    faqs: [
      {
        question: 'Tệp favicon.ico đã tải xuống có phải là tệp nhị phân ICO thực sự không?',
        answer:
          'Có. Công cụ ghi tiêu đề ICONDIR chuẩn của Windows ICO và các mục thư mục chứa ba khung PNG sắc nét (16×16, 32×32 và 48×48) được mọi trình duyệt và hệ điều hành hiện đại hỗ trợ.',
      },
      {
        question: 'Website hiện đại thực sự cần những kích thước biểu tượng nào?',
        answer:
          'Một favicon.ico cộng thêm PNG 32×32, biểu tượng Apple Touch 180×180 và PNG Web Manifest 192×192 / 512×512 bao quát hầu như mọi trình duyệt máy tính, iOS di động và Android.',
      },
      {
        question: 'Tôi nên đặt các tệp này ở đâu trong dự án React + Vite?',
        answer:
          'Hãy đặt favicon.ico và các biểu tượng PNG trong thư mục /public/ của dự án rồi dán thẻ HTML <link> vào trong <head> của index.html.',
      },
      {
        question: 'Công cụ tạo favicon có miễn phí không?',
        answer:
          'Có, công cụ hoàn toàn miễn phí, không cần đăng ký và mọi biểu tượng đều được tạo ngay trong trình duyệt của bạn.',
      },
      {
        question: 'Logo tôi tải lên có bị gửi đến máy chủ không?',
        answer:
          'Không. Logo của bạn được xử lý hoàn toàn trong trình duyệt và không bao giờ được tải lên nên tài sản thương hiệu của bạn luôn riêng tư.',
      },
      {
        question: 'favicon.ico và favicon PNG khác nhau thế nào?',
        answer:
          'favicon.ico là vùng chứa giữ nhiều kích thước biểu tượng trong một tệp nhị phân mà trình duyệt đã hỗ trợ hàng chục năm. Favicon PNG là ảnh đơn kích thước; trình duyệt hiện đại chấp nhận cả hai, nhưng .ico vẫn là lựa chọn mặc định an toàn nhất.',
      },
      {
        question: 'Biểu tượng Apple Touch là gì?',
        answer:
          'Đó là biểu tượng PNG 180×180 mà iOS dùng khi ai đó thêm website của bạn vào màn hình chính. Không có nó, iOS sẽ chụp ảnh màn hình trang của bạn thay thế, thường trông rất xấu.',
      },
      {
        question: 'Biểu tượng PWA 192×192 và 512×512 dùng để làm gì?',
        answer:
          'Đó là các biểu tượng được liệt kê trong kê khai ứng dụng web của bạn cho Progressive Web App có thể cài đặt. Android và Chrome dùng chúng cho biểu tượng màn hình chính, màn hình khởi động và trình khởi chạy ứng dụng.',
      },
      {
        question: 'Tôi có thể tạo favicon từ văn bản mà không cần logo không?',
        answer:
          'Có. Chế độ chữ lồng biến 1–3 chữ cái, chẳng hạn như chữ cái đầu thương hiệu của bạn, thành huy hiệu gọn gàng với màu nền, màu chữ và hình dạng góc tuỳ chọn — không cần phần mềm thiết kế.',
      },
      {
        question: 'Tôi nên tải lên tệp logo nào để có kết quả tốt nhất?',
        answer:
          'Hãy tải lên ảnh PNG hoặc SVG vuông có nền trong suốt từ 512×512 trở lên. Ảnh nguồn vuông được cắt sạch; logo rộng hoặc cao sẽ bị cắt ở giữa, có thể cắt mất các cạnh.',
      },
      {
        question: 'Vì sao favicon mới của tôi không hiển thị sau khi triển khai?',
        answer:
          'Trình duyệt lưu favicon vào bộ nhớ đệm rất chặt. Hãy làm mới mạnh bằng Ctrl+Shift+R (hoặc Cmd+Shift+R trên Mac), xoá bộ nhớ đệm của website, hoặc thử trong cửa sổ riêng tư để thấy biểu tượng mới.',
      },
      {
        question: 'Favicon có cần khớp chính xác với logo của tôi không?',
        answer:
          'Ở kích thước lớn thì có, nhưng ở 16×16, chi tiết tinh tế sẽ biến mất. Hãy đơn giản hoá dấu ấn cho kích thước nhỏ nhất — chữ cái đầu đậm hoặc một hình khối đậm đọc rõ hơn nhiều so với logo chi tiết.',
      },
      {
        question: 'Tôi nên chọn hình dạng góc nào?',
        answer:
          'Hình vuông bo góc khớp với kiểu biểu tượng ứng dụng iOS và macOS, Hình tròn phù hợp với ảnh đại diện và dấu ấn kiểu mạng xã hội, còn Hình vuông góc nhọn tốt nhất cho dấu ấn thương hiệu hình học hoặc kỹ thuật.',
      },
      {
        question: 'Tôi có cần thêm thẻ liên kết HTML cho các biểu tượng không?',
        answer:
          'Có, để có kết quả đáng tin cậy. Trình duyệt mặc định tìm /favicon.ico, nhưng biểu tượng Apple Touch và PWA chỉ tải khi bạn khai báo chúng bằng thẻ <link> trong <head> của trang, và công cụ này sẽ tạo thẻ đó cho bạn.',
      },
      {
        question: 'Tôi có thể dùng biểu tượng đã tạo cho ứng dụng di động không?',
        answer:
          'Các PNG 192×192 và 512×512 hoạt động cho cài đặt PWA, nhưng ứng dụng iOS và Android gốc cần bộ biểu tượng riêng với kích thước và định dạng cụ thể mà công cụ tập trung vào web này không tạo ra.',
      },
      {
        question: 'Công cụ tạo favicon có hoạt động ngoại tuyến không?',
        answer:
          'Có. Sau khi trang đã tải xong, việc tạo biểu tượng chạy hoàn toàn trong trình duyệt của bạn mà không cần yêu cầu mạng.',
      },
      {
        question: 'Màu nền nào tốt nhất cho favicon chữ lồng?',
        answer:
          'Màu thương hiệu đặc có độ tương phản cao với chữ trắng hoặc gần trắng là tốt nhất vì nó vẫn dễ đọc ở 16×16. Tránh chữ sáng trên nền sáng và tránh gradient rối mắt.',
      },
      {
        question: 'Tôi có thể tạo lại biểu tượng sau khi thay đổi màu thương hiệu không?',
        answer:
          'Có. Chỉ cần cập nhật màu sắc hoặc tải logo mới lên rồi tải bộ biểu tượng mới — công cụ không giữ gì từ phiên trước của bạn nên mỗi lần chạy đều bắt đầu sạch.',
      },
      {
        question: 'Favicon có hoạt động trong tab trình duyệt chế độ tối không?',
        answer:
          'Favicon có màu nền đặc hiển thị giống nhau trong tab sáng và tab tối. Nếu dấu ấn của bạn là tối trên nền trong suốt, hãy thêm nền sáng hoặc đường viền để nó vẫn nhìn thấy được trên giao diện trình duyệt tối.',
      },
      {
        question: 'Công cụ có lưu logo hoặc biểu tượng đã tạo của tôi không?',
        answer:
          'Không. Mọi thứ chạy ngay trong tab trình duyệt của bạn, không có gì được tải lên hay lưu trữ, và tệp của bạn sẽ biến mất khi bạn đóng hoặc làm mới trang.',
      },
    ],
  },
};
