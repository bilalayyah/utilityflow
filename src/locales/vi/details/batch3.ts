// Detail content for VI tools — batch 3.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'age-calculator': {
    instructions: [
      {
        title: 'Nhập ngày sinh của bạn',
        description:
          'Chọn tháng, ngày và năm sinh của bạn trong trường Ngày sinh.',
      },
      {
        title: 'Chọn ngày đối chiếu',
        description:
          'Để mặc định là ngày hôm nay hoặc chọn bất kỳ ngày nào trong quá khứ hay tương lai để tính tuổi vào ngày đó.',
      },
      {
        title: 'Tính tuổi ngay lập tức',
        description:
          'Kết quả cập nhật ngay trong trình duyệt của bạn — không cần bấm nút và không có dữ liệu nào được tải lên.',
      },
      {
        title: 'Xem bảng phân tích đầy đủ',
        description:
          'Đọc số năm, tháng, ngày chính xác của bạn, tổng số tuần, tổng số ngày đã sống và đếm ngược tới sinh nhật tiếp theo.',
      },
      {
        title: 'Sao chép hoặc chia sẻ kết quả',
        description:
          'Sao chép bảng phân tích tuổi để dán vào biểu mẫu, tin nhắn hay tài liệu ở bất cứ nơi nào bạn cần.',
      },
      {
        title: 'Mẹo: kiểm tra một cột mốc trong tương lai',
        description:
          'Đặt ngày đối chiếu là sinh nhật, ngày thi hay ngày nghỉ hưu để xem chính xác bạn sẽ bao nhiêu tuổi vào ngày đó.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra tuổi cho một cột mốc thông thường',
        input: 'Ngày sinh: 1995-06-15 · Tính tới ngày: 2025-11-12',
        output: '30 năm, 4 tháng, 28 ngày (11.108 ngày)',
        explanation: 'Dùng độ dài tháng dương lịch chính xác và năm nhuận trong giai đoạn 1995–2025.',
      },
      {
        title: 'Còn bao nhiêu ngày tới sinh nhật tiếp theo',
        input: 'Ngày sinh: 2000-03-10 · Tính tới ngày: 2025-11-12',
        output: '25 năm, 8 tháng, 2 ngày · Sinh nhật tiếp theo: còn 118 ngày',
        explanation: 'So sánh với ngày sinh nhật tiếp theo để đếm số ngày còn lại.',
      },
    ],
    benefits: [
      'Xử lý các tháng dương lịch có 28, 29, 30 và 31 ngày mà không dùng cách ước lượng 30 ngày',
      'Hỗ trợ chính xác sinh nhật vào ngày nhuận 29 tháng 2 khi đếm ngược',
      'Hiển thị đồng thời tổng số tháng, tuần, ngày và số giờ xấp xỉ',
      'Kiểm tra và báo lỗi khi ngày sinh nằm sau ngày đối chiếu',
    ],
    useCases: [
      'Kiểm tra điều kiện tuổi chính xác để nhập học, hưởng lương hưu hay làm hồ sơ chính thức',
      'Tính các dịp kỷ niệm quan trọng theo tổng số ngày hoặc tuần',
      'Kiểm tra một người sẽ bao nhiêu tuổi vào một ngày sự kiện sắp tới',
      'Tìm số ngày còn lại tới sinh nhật tiếp theo',
    ],
    faqs: [
      {
        question: 'Máy tính tuổi xử lý sinh nhật vào năm nhuận (29 tháng 2) như thế nào?',
        answer:
          'Vào những năm không nhuận, đếm ngược tới sinh nhật tiếp theo sẽ căn theo ngày 28 tháng 2 của năm dương lịch đích, nhờ đó số ngày đếm được vẫn chính xác. Cách này tránh tình trạng công cụ bị kẹt vì không có ngày 29 tháng 2 trong năm đó, đồng thời giữ cho cột mốc sinh nhật của bạn luôn được tính đúng dù bạn sinh vào ngày nhuận hiếm gặp.',
      },
      {
        question: 'Vì sao tổng số ngày đôi khi khác với số năm nhân với 365 trong Máy tính tuổi?',
        answer:
          'Mỗi năm nhuận thêm một ngày thứ 366 là ngày 29 tháng 2, và các tháng dương lịch dài từ 28 tới 31 ngày chứ không đều nhau. Công cụ này đếm chênh lệch ngày dương lịch chính xác theo giờ UTC, nên tổng số ngày đã sống phản ánh đúng lịch thực tế thay vì phép nhân ước lượng đơn giản theo 365 ngày mỗi năm.',
      },
      {
        question: 'Tôi có thể tính tuổi của mình vào một ngày trong tương lai bằng Máy tính tuổi không?',
        answer:
          'Có. Bạn chỉ cần đổi ô ngày đối chiếu sang bất kỳ ngày nào trong tương lai để xem tuổi dự kiến chính xác của mình vào ngày đó. Tính năng này rất tiện khi bạn muốn biết mình sẽ bao nhiêu tuổi vào ngày thi, ngày cưới, ngày nhận việc hay ngày đủ điều kiện nghỉ hưu.',
      },
      {
        question: 'Máy tính tuổi có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký tài khoản, và chạy toàn bộ trong trình duyệt của bạn nên ngày sinh của bạn không bao giờ bị tải lên máy chủ. Bạn có thể dùng bao nhiêu lần tùy thích, trên bất kỳ thiết bị nào, mà không lo lộ thông tin cá nhân hay bị giới hạn số lần tính.',
      },
      {
        question: 'Ngoài số năm, Máy tính tuổi còn hiển thị những gì?',
        answer:
          'Ngoài số năm, tháng và ngày, công cụ còn hiển thị tổng số tháng, tổng số tuần, tổng số ngày bạn đã sống và số ngày còn lại tới sinh nhật tiếp theo. Bảng phân tích đầy đủ này giúp bạn dễ dàng dùng kết quả cho hồ sơ, bài đăng kỷ niệm hay đơn giản là thỏa mãn trí tò mò về hành trình cuộc đời mình.',
      },
      {
        question: 'Máy tính tuổi chính xác tới mức nào?',
        answer:
          'Công cụ dùng độ dài tháng dương lịch chính xác và tính đúng các năm nhuận, nên kết quả khớp với lịch thực tế thay vì cách ước lượng mỗi tháng 30 ngày như nhiều công cụ đơn giản khác. Nhờ đó, số năm, tháng và ngày bạn nhận được luôn phản ánh đúng khoảng thời gian đã trôi qua theo lịch.',
      },
      {
        question: 'Máy tính tuổi có thể cho biết tuổi của tôi chỉ tính bằng ngày không?',
        answer:
          'Có. Bảng phân tích bao gồm tổng số ngày bạn đã sống, rất hữu ích khi đếm các cột mốc hay kỷ niệm được tính bằng ngày. Ví dụ, bạn có thể nhanh chóng biết mình đã sống được 10.000 ngày vào lúc nào, hay một em bé đã được bao nhiêu ngày tuổi mà không cần tự tính tay.',
      },
      {
        question: 'Tôi có thể dùng Máy tính tuổi để biết tuổi của mình theo tuần hoặc tháng không?',
        answer:
          'Có, kết quả bao gồm tổng số tuần và tổng số tháng bên cạnh bảng phân tích theo năm, tháng và ngày. Nhờ đó bạn có thể trả lời nhanh những câu hỏi như thai kỳ được bao nhiêu tuần, em bé được bao nhiêu tháng tuổi, hay một dự án đã kéo dài bao nhiêu tuần mà không cần đổi đơn vị thủ công.',
      },
      {
        question: 'Máy tính tuổi có lưu ngày sinh của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn, và những gì bạn nhập vào không được lưu lại cũng không được gửi lên máy chủ. Bạn có thể yên tâm nhập ngày sinh thật của mình hay của người thân mà không lo dữ liệu cá nhân bị thu thập hay chia sẻ cho bên thứ ba.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi nhập ngày sinh nằm sau ngày đối chiếu?',
        answer:
          'Công cụ sẽ hiển thị một thông báo kiểm tra, vì không thể tính tuổi khi ngày sinh nằm sau ngày bạn đang đối chiếu. Đây là cách công cụ giúp bạn phát hiện lỗi nhập liệu, chẳng hạn như gõ nhầm năm sinh hay chọn nhầm ngày đối chiếu, trước khi bạn dùng kết quả cho hồ sơ hay giấy tờ quan trọng.',
      },
      {
        question: 'Máy tính tuổi có cho biết tôi sẽ bao nhiêu tuổi khi nghỉ hưu không?',
        answer:
          'Có. Bạn chỉ cần đặt ngày đối chiếu là ngày nghỉ hưu dự kiến của mình, và công cụ sẽ hiển thị tuổi chính xác của bạn vào ngày đó. Tính năng này giúp bạn lập kế hoạch hưu trí, kiểm tra điều kiện hưởng lương hưu theo tuổi, hay đơn giản là hình dung mình sẽ ở giai đoạn nào của cuộc đời khi đó.',
      },
      {
        question: 'Máy tính tuổi có đếm số giờ tôi đã sống không?',
        answer:
          'Công cụ hiển thị một con số giờ xấp xỉ dựa trên tổng số ngày đã sống, đi kèm với kết quả chính xác theo năm, tháng và ngày. Con số giờ này mang tính tham khảo thú vị cho các bài đăng kỷ niệm, vì giờ sinh chính xác thường không được nhập vào, nên nó được ước tính từ tổng số ngày tròn.',
      },
      {
        question: 'Tôi có thể kiểm tra tuổi của người khác bằng Máy tính tuổi không?',
        answer:
          'Có, bạn có thể nhập bất kỳ ngày sinh nào để tính tuổi của người đó, chẳng hạn như kiểm tra điều kiện nhập học cho con, điều kiện hưởng lương hưu cho cha mẹ, hay xác minh tuổi của ứng viên trong hồ sơ. Công cụ không phân biệt ngày sinh của ai, miễn là ngày đó hợp lệ và nằm trước ngày đối chiếu.',
      },
      {
        question: 'Vì sao Máy tính tuổi lại hỏi ngày đối chiếu?',
        answer:
          'Ngày đối chiếu là ngày mà bạn muốn đo tuổi của mình — mặc định là hôm nay, hoặc bất kỳ ngày nào trong quá khứ hay tương lai để phục vụ việc lập kế hoạch và lưu hồ sơ. Nhờ có ngày đối chiếu, bạn có thể tra lại tuổi của mình vào một ngày đã qua, hay dự đoán tuổi vào một ngày sắp tới, thay vì chỉ biết tuổi hiện tại.',
      },
      {
        question: 'Máy tính tuổi có tính được với ngày sinh rất xa xưa không?',
        answer:
          'Có, công cụ xử lý được những ngày sinh cách đây nhiều thập kỷ và vẫn đếm đúng các năm nhuận trong suốt khoảng thời gian đó. Dù bạn tra tuổi của ông bà hay tính khoảng thời gian từ một sự kiện lịch sử, phép tính lịch vẫn giữ nguyên độ chính xác nhờ dùng quy tắc lịch Gregory đầy đủ.',
      },
      {
        question: 'Tôi có thể dùng Máy tính tuổi cho các biểu mẫu chính thức không?',
        answer:
          'Có, kết quả theo năm, tháng và ngày chính xác rất phù hợp để kiểm tra điều kiện tuổi, dù giấy tờ chính thức vẫn là bằng chứng cuối cùng. Bạn có thể dùng kết quả này để điền hồ sơ, chuẩn bị giấy tờ nhập học hay kiểm tra trước điều kiện tuổi trước khi nộp đơn xin việc, xin visa hay hưởng chế độ.',
      },
      {
        question: 'Máy tính tuổi đếm sinh nhật tiếp theo của tôi như thế nào?',
        answer:
          'Công cụ so sánh ngày hôm nay với ngày sinh nhật tiếp theo của bạn và hiển thị số ngày chính xác còn lại cho tới ngày đó. Việc đếm ngược này tự động xử lý cả trường hợp sinh nhật năm nay đã qua, khi đó nó sẽ chuyển sang tính tới sinh nhật của năm sau để bạn luôn biết còn bao lâu nữa.',
      },
      {
        question: 'Máy tính tuổi có cần kết nối internet không?',
        answer:
          'Bạn cần internet để tải trang lần đầu, nhưng phép tính thì chạy hoàn toàn ngay trong trình duyệt mà không cần tải lên dữ liệu gì. Sau khi trang đã tải xong, bạn có thể tính tuổi nhiều lần mà không phụ thuộc vào tốc độ mạng, vì mọi con số đều được xử lý ngay trên thiết bị của bạn.',
      },
      {
        question: 'Máy tính tuổi có hiển thị tuổi của tôi vào một ngày trong quá khứ không?',
        answer:
          'Có. Bạn chỉ cần chọn bất kỳ ngày nào trong quá khứ làm ngày đối chiếu để xem chính xác mình đã bao nhiêu tuổi vào ngày đó. Tính năng này hữu ích khi bạn cần điền hồ sơ cũ, tra lại tuổi tại thời điểm một sự kiện diễn ra, hay kiểm chứng thông tin trong giấy tờ đã lưu từ nhiều năm trước.',
      },
      {
        question: 'Ngày sinh của tôi có được giữ riêng tư khi dùng Máy tính tuổi không?',
        answer:
          'Có. Công cụ chạy hoàn toàn ngay trong trình duyệt của bạn, nên ngày sinh của bạn không bao giờ rời khỏi thiết bị. Không có tài khoản, không có máy chủ lưu trữ, và không có bên thứ ba nào nhìn thấy thông tin bạn nhập, vì vậy bạn có thể dùng công cụ này một cách an toàn tuyệt đối.',
      },
    ],
  },
  'percentage-calculator': {
    instructions: [
      {
        title: 'Chọn khối tính phần trăm',
        description:
          'Mỗi thẻ giải một công thức phần trăm riêng mà không xóa các con số khác của bạn.',
      },
      {
        title: 'Nhập các giá trị số',
        description:
          'Gõ số nguyên hoặc số thập phân vào các ô được tô sáng; kết quả được tính lại sau mỗi lần gõ phím.',
      },
      {
        title: 'Tính toán ngay lập tức',
        description:
          'Không có nút gửi — kết quả phần trăm hiện ra ngay khi bạn gõ, ngay trong trình duyệt của bạn.',
      },
      {
        title: 'Xem kết quả theo công thức',
        description:
          'Xem cả phần trăm thay đổi có dấu và chênh lệch số tuyệt đối để kiểm tra tăng trưởng hay sụt giảm.',
      },
      {
        title: 'Sao chép kết quả phần trăm của bạn',
        description:
          'Sao chép đáp án để dán vào báo cáo, hóa đơn, bảng tính hay tin nhắn.',
      },
      {
        title: 'Mẹo: kiểm tra giá trị bắt đầu bằng 0 hoặc âm',
        description:
          'Nếu kết quả hiện thông báo kiểm tra, hãy xem lại mẫu số bằng 0 hoặc giá trị bắt đầu âm, những trường hợp mà công cụ đã chặn sẵn.',
      },
    ],
    examples: [
      {
        title: 'Đo phần trăm tăng trưởng doanh thu',
        input: 'Từ 120 lên 150',
        output: '+25% (chênh lệch tuyệt đối +30)',
        explanation: 'Tính theo ((150 - 120) / |120|) × 100 = +25%.',
      },
      {
        title: 'Tính X% của một số',
        input: '20% của 250',
        output: '50',
        explanation: '250 × 20 ÷ 100 = 50.',
      },
    ],
    benefits: [
      'Hiển thị cả ba công thức phần trăm cạnh nhau trên cùng một màn hình',
      'Xử lý gọn gàng số thập phân, giá trị bắt đầu âm và trường hợp mẫu số bằng 0',
      'Hiển thị chênh lệch tuyệt đối bên cạnh phần trăm thay đổi',
      'Hoạt động mà không cần tải lại trang hay bấm nút gửi',
    ],
    useCases: [
      'Kiểm tra tăng trưởng lưu lượng truy cập, doanh số hay tỉ lệ chuyển đổi theo từng tháng',
      'Tính điểm thi và phần trăm xếp loại',
      'Áp nhanh phụ phí hay chiết khấu phần trăm vào hóa đơn',
      'So sánh giá trước và sau, hay phân bổ ngân sách',
    ],
    faqs: [
      {
        question: 'Máy tính phần trăm tính phần trăm thay đổi như thế nào khi giá trị giảm xuống?',
        answer:
          'Phần trăm thay đổi dùng công thức ((Giá trị mới − Giá trị cũ) / |Giá trị cũ|) × 100. Khi giá trị mới nhỏ hơn giá trị cũ, công cụ sẽ báo rõ mức giảm phần trăm âm. Nhờ dùng giá trị tuyệt đối của giá trị cũ ở mẫu số, công thức vẫn cho ra dấu đúng ngay cả khi giá trị ban đầu là số âm.',
      },
      {
        question: 'Điều gì xảy ra nếu mẫu số hoặc giá trị bắt đầu bằng 0 trong Máy tính phần trăm?',
        answer:
          'Chia cho 0 là phép toán không xác định trong toán học, nên máy tính sẽ hiển thị một thông báo kiểm tra rõ ràng thay vì trả về Infinity hay NaN khó hiểu. Bạn chỉ cần nhập lại một giá trị bắt đầu khác 0, và phép tính sẽ chạy bình thường ngay lập tức mà không cần tải lại trang.',
      },
      {
        question: 'Tôi có thể nhập phần trăm thập phân như 7,25% trong Máy tính phần trăm không?',
        answer:
          'Có. Mọi ô nhập đều chấp nhận giá trị thập phân và giữ nguyên độ chính xác số thực đầy đủ trước khi làm tròn để hiển thị. Nhờ đó, các mức lãi suất, thuế hay chiết khấu lẻ như 7,25% hay 12,5% đều được tính đúng, thay vì bị ép thành số nguyên và làm sai lệch kết quả cuối cùng.',
      },
      {
        question: 'Máy tính phần trăm có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy toàn bộ trong trình duyệt của bạn nên các con số của bạn không bao giờ bị tải lên. Bạn có thể tính phần trăm bao nhiêu lần tùy thích cho báo cáo, bài tập hay hóa đơn mà không gặp quảng cáo làm phiền hay giới hạn sử dụng.',
      },
      {
        question: 'Làm sao để biết một số bằng bao nhiêu phần trăm của một số khác?',
        answer:
          'Hãy dùng thẻ "phần trăm của số nào": nhập phần và tổng, công cụ sẽ chia phần cho tổng rồi nhân với 100. Ví dụ, 30 trên tổng 120 cho ra 25%, một phép tính rất hay dùng khi chấm điểm thi, tính tỉ lệ hoàn thành công việc hay đo thị phần.',
      },
      {
        question: 'Làm sao tính X% của một số bằng Máy tính phần trăm?',
        answer:
          'Nhập phần trăm và con số vào thẻ "X% của Y", công cụ sẽ nhân con số với phần trăm chia cho 100. Ví dụ, 20% của 250 là 50, cách tính này dùng được cho tiền tip, thuế, hoa hồng bán hàng hay bất kỳ khoản chiết khấu nào bạn cần tính nhanh.',
      },
      {
        question: 'Phần trăm thay đổi và điểm phần trăm khác nhau thế nào?',
        answer:
          'Phần trăm thay đổi là tương đối so với giá trị ban đầu, còn điểm phần trăm là hiệu số học đơn giản giữa hai tỉ lệ phần trăm. Ví dụ, lãi suất tăng từ 10% lên 12% là tăng 2 điểm phần trăm, nhưng lại là tăng 20% theo cách tính tương đối, nên phân biệt hai khái niệm này rất quan trọng khi đọc báo cáo tài chính.',
      },
      {
        question: 'Máy tính phần trăm có xử lý được số âm không?',
        answer:
          'Có, công cụ xử lý được các giá trị bắt đầu âm và hiển thị kết quả có dấu để cho thấy thay đổi đó là tăng hay giảm. Điều này hữu ích khi bạn tính lợi nhuận âm, nhiệt độ âm hay số dư tài khoản bị âm, những trường hợp mà nhiều máy tính phần trăm đơn giản thường tính sai dấu.',
      },
      {
        question: 'Làm sao tính phần trăm tăng giữa hai con số?',
        answer:
          'Nhập giá trị cũ và giá trị mới vào thẻ thay đổi; công cụ sẽ hiển thị mức tăng theo phần trăm cùng với chênh lệch tuyệt đối. Ví dụ, doanh số từ 120 lên 150 là tăng 25%, tương ứng với 30 đơn vị, giúp bạn vừa thấy tốc độ tăng vừa thấy quy mô tăng thực tế.',
      },
      {
        question: 'Làm sao tính phần trăm giảm?',
        answer:
          'Nhập giá trị bắt đầu cao hơn và giá trị mới thấp hơn, công cụ sẽ báo mức giảm dưới dạng phần trăm âm. Cách này dùng được cho giá cổ phiếu giảm, lưu lượng truy cập sụt hay chi phí cắt giảm, và con số âm giúp bạn nhận ra ngay đó là chiều giảm chứ không phải tăng.',
      },
      {
        question: 'Tôi có thể dùng Máy tính phần trăm cho điểm thi không?',
        answer:
          'Có. Bạn chỉ cần chia số điểm đạt được cho tổng số điểm, công cụ sẽ hiển thị điểm số dưới dạng phần trăm. Cách này áp dụng cho bài kiểm tra, bài thi cuối kỳ hay bất kỳ thang điểm nào, giúp bạn nhanh chóng biết mình đạt bao nhiêu phần trăm và xếp loại ra sao mà không cần tự tính tay.',
      },
      {
        question: 'Máy tính phần trăm có hiển thị chênh lệch tuyệt đối nữa không?',
        answer:
          'Có, bên cạnh phần trăm thay đổi, công cụ còn hiển thị chênh lệch số tuyệt đối giữa hai giá trị. Con số này rất quan trọng vì một mức tăng 50% nghe có vẻ lớn, nhưng nếu giá trị gốc chỉ là 2 thì thực tế chỉ tăng thêm 1, và việc thấy cả hai con số giúp bạn đánh giá đúng quy mô thay đổi.',
      },
      {
        question: 'Tôi có thể tính phần trăm giảm giá bằng công cụ này không?',
        answer:
          'Có. Nhập giá gốc và giá bán vào thẻ thay đổi để xem mức giảm giá dưới dạng phần trăm giảm. Đây là cách nhanh nhất để kiểm tra xem một chương trình khuyến mãi "giảm 30%" có thật sự giảm đúng 30% hay không, trước khi bạn quyết định mua hàng hay đặt giá bán cho cửa hàng của mình.',
      },
      {
        question: 'Máy tính phần trăm có lưu các con số của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn, và những gì bạn nhập vào không được lưu lại cũng không được gửi lên máy chủ. Bạn có thể yên tâm tính toán các con số nhạy cảm như doanh thu, lương hay điểm số mà không lo dữ liệu bị thu thập hay rò rỉ ra ngoài.',
      },
      {
        question: 'Kết quả của Máy tính phần trăm chính xác tới mức nào?',
        answer:
          'Kết quả dùng độ chính xác số thực đầy đủ trước khi làm tròn để hiển thị, nên những chênh lệch thập phân nhỏ đều được xử lý đúng. Nhờ đó, các phép tính liên quan tới tiền bạc, lãi suất hay tỉ lệ chuyển đổi sẽ không bị sai lệch do làm tròn sớm, và con số bạn sao chép ra ngoài luôn đáng tin cậy.',
      },
      {
        question: 'Tôi có thể dùng Máy tính phần trăm cho tăng trưởng doanh số không?',
        answer:
          'Có, công cụ rất phù hợp để đo tăng trưởng doanh số, lưu lượng truy cập hay tỉ lệ chuyển đổi theo từng tháng, vì nó hiển thị cả phần trăm lẫn mức thay đổi tuyệt đối. Bạn có thể so sánh nhanh hiệu quả kinh doanh giữa các tháng, các chiến dịch hay các kênh bán hàng chỉ trong vài giây nhập liệu.',
      },
      {
        question: 'Phần trăm thay đổi âm có nghĩa là gì?',
        answer:
          'Kết quả âm nghĩa là giá trị mới thấp hơn giá trị cũ — tức là giảm chứ không phải tăng. Ví dụ, phần trăm thay đổi −15% cho thấy doanh số, giá cổ phiếu hay điểm số đã giảm 15% so với kỳ trước, và dấu trừ giúp bạn phân biệt ngay chiều hướng mà không cần đọc thêm chú thích.',
      },
      {
        question: 'Tôi có thể tính phần trăm với những số rất lớn không?',
        answer:
          'Có, công cụ chấp nhận các số nguyên lớn và số thập phân, đồng thời tính lại ngay khi bạn gõ. Dù bạn đang tính phần trăm của ngân sách hàng tỉ đồng hay tỉ lệ hoàn thành của một tập dữ liệu khổng lồ, phép tính vẫn cho kết quả tức thì mà không bị chậm hay tràn số.',
      },
      {
        question: 'Tôi có cần bấm nút để tính phần trăm không?',
        answer:
          'Không. Kết quả tự động cập nhật sau mỗi lần gõ phím, không cần tải lại trang hay bấm nút gửi. Thiết kế này giúp bạn thử nhanh nhiều con số khác nhau, chẳng hạn như so sánh các mức chiết khấu, mà không bị gián đoạn bởi thao tác bấm nút sau mỗi lần thay đổi.',
      },
      {
        question: 'Máy tính phần trăm có tìm được giá trị gốc từ một tỉ lệ phần trăm không?',
        answer:
          'Ba thẻ của công cụ bao gồm X% của Y, X bằng bao nhiêu phần trăm của Y, và phần trăm thay đổi; để tính ngược, bạn hãy chia số tiền đã biết cho phần trăm ở dạng thập phân. Ví dụ, nếu 20% của giá gốc là 50 đô la thì giá gốc là 50 chia cho 0,20, tức 250 đô la.',
      },
    ],
  },
  'loan-emi-calculator': {
    instructions: [
      {
        title: 'Nhập thông tin khoản vay',
        description:
          'Điền Số tiền vay gốc, Lãi suất năm (APR %) và Thời hạn vay theo tháng hoặc theo năm.',
      },
      {
        title: 'Chọn đơn vị thời hạn',
        description:
          'Chuyển đổi thời hạn giữa năm và tháng sao cho khớp với cách ngân hàng báo thời hạn vay.',
      },
      {
        title: 'Tính khoản trả góp EMI',
        description:
          'Khoản EMI, tổng lãi và tổng số tiền phải trả cập nhật ngay trong trình duyệt của bạn — không có dữ liệu nào được tải lên.',
      },
      {
        title: 'Xem tóm tắt EMI',
        description:
          'Kiểm tra EMI hàng tháng, Tổng lãi phải trả, Tổng số tiền hoàn trả và Tỉ lệ lãi trong tổng số tiền trả.',
      },
      {
        title: 'Xem lịch trả nợ dần (amortization)',
        description:
          'Chuyển đổi giữa Tóm tắt theo năm và Lịch theo tháng để xem phần trả gốc tăng nhanh dần theo thời gian như thế nào.',
      },
      {
        title: 'Mẹo: so sánh thời hạn vay ngắn hơn',
        description:
          'Thử thời hạn ngắn hơn để xem bạn có thể tiết kiệm được bao nhiêu tiền lãi, rồi sao chép các con số để so sánh các gói vay cạnh nhau.',
      },
    ],
    examples: [
      {
        title: 'Khoản vay mua xe hoặc vay cá nhân 5 năm',
        input: 'Gốc: $25.000 · Lãi suất: 7,5% · Thời hạn: 60 tháng',
        output: 'EMI hàng tháng: $500,95 · Tổng lãi: $5.056,92 · Tổng đã trả: $30.056,92',
        explanation: 'Dùng công thức EMI chuẩn theo dư nợ giảm dần P·r·(1+r)^n / ((1+r)^n - 1).',
      },
      {
        title: 'Gói trả góp lãi suất 0%',
        input: 'Gốc: $12.000 · Lãi suất: 0% · Thời hạn: 12 tháng',
        output: 'EMI hàng tháng: $1.000,00 · Tổng lãi: $0,00',
        explanation: 'Với APR 0%, khoản EMI chỉ bằng số tiền gốc chia cho số tháng.',
      },
    ],
    benefits: [
      'Dùng công thức EMI chuẩn theo dư nợ giảm dần với lãi kép chính xác',
      'Xử lý chính xác các khoản vay khuyến mãi APR 0% mà không lỗi chia cho 0',
      'Có chế độ xem lịch trả nợ dần theo năm và theo tháng để chuyển đổi qua lại',
      'Hỗ trợ chuyển đổi đơn vị thời hạn giữa năm và tháng một cách liền mạch',
    ],
    useCases: [
      'So sánh các gói vay mua xe, vay học tập hay vay cá nhân từ nhiều ngân hàng',
      'Đánh giá việc rút ngắn thời hạn vay giúp giảm lãi suất cả đời vay bao nhiêu',
      'Dự báo số dư nợ còn lại sau 12, 24 hay 36 kỳ thanh toán',
      'Kiểm tra gói trả góp 0% so với gói tài trợ có APR thấp',
    ],
    faqs: [
      {
        question: 'Máy tính vay và EMI dùng công thức nào?',
        answer:
          'Công cụ áp dụng công thức trả nợ dần chuẩn theo dư nợ giảm dần: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), trong đó r là lãi suất năm chia cho 12 rồi chia cho 100, còn n là tổng số kỳ trả góp hàng tháng. Đây là công thức chuẩn mà các ngân hàng dùng để tính khoản trả góp hàng tháng.',
      },
      {
        question: 'Vì sao tiền lãi trong những tháng đầu của khoản EMI cao hơn những tháng sau?',
        answer:
          'Tiền lãi mỗi tháng được tính trên số dư gốc còn lại. Khi số gốc giảm dần sau mỗi kỳ thanh toán EMI, một phần lớn hơn trong khoản trả cố định sẽ chuyển sang trả gốc. Vì vậy, trong những tháng đầu bạn trả chủ yếu là lãi, còn về cuối thời hạn vay thì hầu như toàn bộ khoản EMI đều dùng để trả gốc.',
      },
      {
        question: 'Máy tính vay và EMI có tính phí mở khoản vay hay bảo hiểm của ngân hàng không?',
        answer:
          'Không. Kết quả chỉ phản ánh việc hoàn trả gốc và lãi thuần túy. Để mô hình hóa chi phí trả các khoản phí đã tính vào khoản vay, bạn hãy cộng chúng vào ô Số tiền vay gốc. Cách này giúp bạn thấy tổng chi phí thực tế của khoản vay, thay vì chỉ thấy phần gốc và lãi riêng lẻ.',
      },
      {
        question: 'Máy tính vay và EMI có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy toàn bộ trong trình duyệt của bạn nên thông tin khoản vay của bạn không bao giờ bị tải lên. Bạn có thể thử bao nhiêu phương án vay tùy thích, so sánh lãi suất và thời hạn khác nhau mà không lo lộ thông tin tài chính cá nhân.',
      },
      {
        question: 'EMI trong khoản vay là gì?',
        answer:
          'EMI là viết tắt của Equated Monthly Installment — khoản tiền cố định bạn trả mỗi tháng, bao gồm cả lãi và một phần gốc, cho tới khi khoản vay được trả hết. Khoản EMI giữ nguyên trong suốt thời hạn vay có lãi suất cố định, giúp bạn dễ dàng lên ngân sách hàng tháng mà không lo số tiền phải trả thay đổi bất ngờ.',
      },
      {
        question: 'Máy tính vay và EMI xử lý khoản vay lãi suất 0% như thế nào?',
        answer:
          'Công cụ xử lý chính xác các khoản vay khuyến mãi APR 0% mà không gặp lỗi chia cho 0, và hiển thị khoản EMI bằng số tiền gốc chia cho số tháng. Ví dụ, vay 12.000 đô la trong 12 tháng với lãi suất 0% sẽ cho EMI đúng 1.000 đô la mỗi tháng, đúng như các gói trả góp 0% tại cửa hàng thường quảng cáo.',
      },
      {
        question: 'Tôi có thể so sánh hai gói vay bằng Máy tính vay và EMI không?',
        answer:
          'Có. Bạn hãy chạy từng gói vay qua máy tính rồi so sánh khoản EMI hàng tháng và tổng lãi phải trả để xem gói nào rẻ hơn tính tổng thể. Đừng chỉ nhìn vào EMI thấp, vì một gói có EMI thấp nhưng thời hạn dài có thể khiến bạn trả tổng lãi cao hơn rất nhiều so với gói có EMI cao hơn một chút.',
      },
      {
        question: 'Thời hạn vay ngắn hơn có làm giảm tổng lãi không?',
        answer:
          'Thường là có. Thời hạn ngắn hơn nghĩa là EMI hàng tháng cao hơn, nhưng tổng lãi thấp hơn nhiều vì lãi chỉ phát sinh trong ít tháng hơn. Ví dụ, rút ngắn khoản vay mua xe từ 5 năm xuống 3 năm có thể tiết kiệm hàng nghìn đô la tiền lãi, dù khoản trả hàng tháng của bạn sẽ tăng lên đáng kể.',
      },
      {
        question: 'Lịch trả nợ dần (amortization) là gì?',
        answer:
          'Đó là một bảng liệt kê cho từng tháng hoặc từng năm: bao nhiêu trong khoản EMI của bạn đi vào tiền lãi, bao nhiêu đi vào tiền gốc, và số dư còn lại là bao nhiêu. Lịch này giúp bạn nhìn rõ toàn bộ hành trình trả nợ, biết sau bao nhiêu tháng thì phần gốc bắt đầu chiếm đa số, và lên kế hoạch trả trước nếu muốn.',
      },
      {
        question: 'Tôi có thể xem số dư nợ còn lại sau một năm không?',
        answer:
          'Có. Lịch trả nợ dần hiển thị số gốc còn lại sau 12, 24 hay 36 kỳ thanh toán, hoặc tại bất kỳ thời điểm nào trong thời hạn vay. Nhờ đó bạn biết chính xác mình còn nợ bao nhiêu nếu muốn tất toán trước hạn, tái cấp vốn, hay bán tài sản đang thế chấp để trả hết khoản vay.',
      },
      {
        question: 'Máy tính vay và EMI có tính được cho vay mua xe không?',
        answer:
          'Có, công cụ tính được cho vay mua xe, vay cá nhân, vay học tập và vay kinh doanh — bất kỳ khoản vay nào được trả bằng các kỳ cố định hàng tháng theo dư nợ giảm dần. Chỉ cần nhập đúng số tiền vay, lãi suất năm và thời hạn, bạn sẽ thấy ngay khoản EMI và tổng chi phí của khoản vay đó.',
      },
      {
        question: 'Tôi có thể dùng Máy tính vay và EMI cho vay mua nhà không?',
        answer:
          'Có, đối với phần gốc và lãi. Để tính toàn bộ chi phí nhà ở bao gồm thuế, bảo hiểm và PMI, bạn nên dùng Máy tính thế chấp (Mortgage Calculator). Máy tính EMI vẫn cho bạn con số gốc-lãi chính xác, nhưng chi phí nhà ở thực tế hàng tháng sẽ cao hơn vì còn cộng thêm thuế tài sản và bảo hiểm nhà.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi trả thêm tiền cho khoản vay?',
        answer:
          'Các khoản trả thêm sẽ trừ trực tiếp vào số gốc, nhờ đó làm giảm tiền lãi trong tương lai. Máy tính này mô hình hóa các khoản EMI đều đặn thông thường; bạn hãy cộng thêm phần trả thêm vào kế hoạch riêng của mình. Ngay cả một khoản trả thêm nhỏ mỗi năm cũng có thể rút ngắn thời hạn vay và tiết kiệm đáng kể tiền lãi.',
      },
      {
        question: 'Máy tính vay và EMI có lưu thông tin khoản vay của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn, và những gì bạn nhập vào không được lưu lại cũng không được gửi lên máy chủ. Bạn có thể yên tâm nhập số tiền vay, lãi suất và thời hạn thật mà không lo thông tin tài chính cá nhân bị thu thập hay chia sẻ.',
      },
      {
        question: 'Vì sao EMI của tôi giữ nguyên trong khi phần lãi thay đổi?',
        answer:
          'Khoản EMI là cố định, nhưng mỗi tháng tiền lãi được tính trên số dư đang giảm dần, nên phần lãi giảm xuống và phần gốc tăng lên. Tổng số tiền bạn trả mỗi tháng không đổi, chỉ có cách phân bổ bên trong thay đổi: đầu kỳ lãi chiếm đa số, cuối kỳ gốc chiếm đa số.',
      },
      {
        question: 'Tôi có thể chuyển đổi thời hạn vay giữa năm và tháng không?',
        answer:
          'Có, máy tính hỗ trợ chuyển đổi đơn vị thời hạn giữa năm và tháng một cách liền mạch. Nhờ đó bạn có thể nhập thời hạn đúng như cách ngân hàng báo — có nơi báo 5 năm, có nơi báo 60 tháng — mà không cần tự đổi đơn vị rồi lo nhập sai số kỳ thanh toán.',
      },
      {
        question: 'Máy tính vay và EMI có phải là tư vấn tài chính không?',
        answer:
          'Không. Đây là công cụ tính toán cho thấy các con số sẽ ra sao với dữ liệu bạn nhập; nó không phải là tư vấn tài chính, và bạn nên kiểm tra điều khoản với ngân hàng của mình. Lãi suất thực tế, phí và điều kiện phê duyệt còn phụ thuộc vào hồ sơ tín dụng và chính sách của từng ngân hàng tại thời điểm bạn vay.',
      },
      {
        question: 'Làm sao dùng Máy tính vay và EMI cho gói trả góp 0%?',
        answer:
          'Bạn hãy nhập 0% làm lãi suất năm và nhập thời hạn theo tháng, công cụ sẽ hiển thị khoản thanh toán hàng tháng cố định với lãi suất bằng 0. Cách này giúp bạn kiểm tra nhanh các gói trả góp 0% tại cửa hàng điện máy hay nội thất, xem khoản trả hàng tháng có vừa ngân sách không trước khi ký hợp đồng.',
      },
      {
        question: 'Tôi nên nhập gì làm số tiền vay gốc?',
        answer:
          'Bạn hãy nhập số tiền mình thực sự vay. Nếu các khoản phí đã được tính gộp vào khoản vay, hãy cộng chúng vào số gốc để mô hình hóa chi phí trả nợ của chúng. Việc nhập đúng số gốc rất quan trọng, vì chỉ cần lệch một chút thôi thì khoản EMI và tổng lãi tính ra cũng sẽ khác đi đáng kể.',
      },
      {
        question: 'Máy tính vay và EMI có hiển thị lịch theo năm và theo tháng không?',
        answer:
          'Có, bạn có thể chuyển đổi giữa chế độ xem Tóm tắt theo năm và Lịch theo tháng để xem việc trả nợ ở bất kỳ mức độ chi tiết nào. Chế độ xem theo năm giúp bạn nắm bức tranh tổng thể, còn chế độ xem theo tháng cho thấy chính xác từng kỳ thanh toán gồm bao nhiêu lãi và bao nhiêu gốc.',
      },
    ],
  },
  'mortgage-calculator': {
    instructions: [
      {
        title: 'Đặt giá nhà và tiền trả trước',
        description:
          'Nhập Giá bất động sản và Tiền trả trước của bạn (tỉ lệ Loan-to-Value và số tiền vay gốc sẽ tự động hiển thị).',
      },
      {
        title: 'Chọn lãi suất và thời hạn',
        description:
          'Nhập lãi suất thế chấp năm (%) và chọn thời hạn cố định 10, 15, 20 hay 30 năm.',
      },
      {
        title: 'Cộng thêm thuế, bảo hiểm và phí HOA',
        description:
          'Điều chỉnh Thuế tài sản năm, Bảo hiểm nhà ở năm, Phí HOA hàng tháng và tỉ lệ PMI (khi tiền trả trước dưới 20%).',
      },
      {
        title: 'Tính khoản thế chấp',
        description:
          'Khoản thanh toán PITI hàng tháng cập nhật ngay trong trình duyệt của bạn — không có dữ liệu nào được tải lên.',
      },
      {
        title: 'Xem bảng phân tích khoản thanh toán',
        description:
          'Kiểm tra cách chia giữa gốc và lãi, thuế, bảo hiểm, phí HOA và PMI, cùng với tổng lãi trong toàn bộ thời hạn.',
      },
      {
        title: 'Mẹo: thử trả trước 20% hoặc thời hạn ngắn hơn',
        description:
          'Thử tăng tiền trả trước lên 20% để loại bỏ PMI, hoặc thử thời hạn 15 năm để xem khoản lãi tiết kiệm được, rồi sao chép các con số để so sánh các phương án.',
      },
    ],
    examples: [
      {
        title: 'Mua nhà trả góp cố định 30 năm với 20% trả trước',
        input: 'Nhà: $450.000 · Trả trước: $90.000 (20%) · Lãi suất: 6,5% · Thuế: $5.400/năm · Bảo hiểm: $1.800/năm',
        output: 'Tổng hàng tháng: $2.875,44 (Gốc+lãi $2.275,44 + Thuế $450 + Bảo hiểm $150)',
        explanation: 'Với 20% trả trước (LTV 80%), PMI bằng $0 và phần gốc-lãi được trả dần trong 360 tháng.',
      },
      {
        title: 'So sánh thời hạn 15 năm với 30 năm',
        input: 'Nhà: $450.000 · Trả trước: $90.000 · Lãi suất: 6,5% · Thời hạn: 15 năm so với 30 năm',
        output: '15 năm: trả hàng tháng cao hơn, tổng lãi thấp hơn nhiều · 30 năm: trả hàng tháng thấp hơn, tổng lãi cao hơn',
        explanation: 'Thời hạn ngắn hơn làm khoản trả hàng tháng tăng lên, nhưng tổng lãi cả đời vay giảm đi đáng kể.',
      },
    ],
    benefits: [
      'Chia chi phí nhà ở hàng tháng thành gốc-lãi, Thuế tài sản, Bảo hiểm, phí HOA và PMI',
      'Tính tỉ lệ Loan-to-Value (LTV) và tổng lãi trong toàn bộ thời hạn',
      'Có bảng lịch trả dần số dư theo từng năm',
      'Hỗ trợ so sánh ngay lập tức các kỳ hạn trả nợ dần 10, 15, 20 và 30 năm',
    ],
    useCases: [
      'Lập ngân sách chi phí PITI hàng tháng thực tế trước khi đi xem nhà',
      'So sánh khoản lãi tiết kiệm được giữa thế chấp 15 năm và 30 năm',
      'Thử trả trước 20% để loại bỏ khoản phí PMI hàng tháng',
      'Ước tính số dư gốc còn lại sau 5 hay 10 năm',
    ],
    faqs: [
      {
        question: 'PITI trong khoản thanh toán thế chấp nghĩa là gì?',
        answer:
          'PITI là viết tắt của Principal (gốc), Interest (lãi), Taxes (thuế tài sản) và Insurance (bảo hiểm nhà ở, và PMI nếu có) — bốn thành phần mà ngân hàng dùng để đánh giá khả năng chi trả hàng tháng của bạn. Khi lập ngân sách mua nhà, bạn phải tính đủ cả bốn phần này chứ không chỉ phần gốc và lãi, vì thuế và bảo hiểm có thể chiếm một phần đáng kể trong chi phí hàng tháng.',
      },
      {
        question: 'Khi nào PMI áp dụng cho khoản thế chấp?',
        answer:
          'Với thế chấp thông thường, Bảo hiểm thế chấp tư nhân (PMI) thường được tính khi tiền trả trước của bạn dưới 20%, tức tỉ lệ Loan-to-Value trên 80%. PMI bảo vệ ngân hàng chứ không bảo vệ bạn, và nó làm tăng khoản thanh toán hàng tháng cho tới khi bạn tích lũy đủ vốn chủ sở hữu trong căn nhà để yêu cầu loại bỏ nó.',
      },
      {
        question: 'Máy tính thế chấp có tính chi phí đóng hồ sơ không?',
        answer:
          'Không. Chi phí đóng hồ sơ khác nhau tùy khu vực và ngân hàng, thường bằng 2%–5% số tiền vay, và được trả trước trừ khi gộp vào số tiền vay gốc. Bạn nên hỏi ngân hàng về bảng ước tính chi phí đóng hồ sơ riêng, vì khoản này có thể lên tới hàng nghìn đô la và ảnh hưởng lớn tới tổng tiền mặt bạn cần chuẩn bị khi mua nhà.',
      },
      {
        question: 'Máy tính thế chấp có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy toàn bộ trong trình duyệt của bạn nên giá nhà và thông tin khoản vay của bạn không bao giờ bị tải lên. Bạn có thể thử nhiều kịch bản mua nhà khác nhau — đổi giá nhà, tiền trả trước, lãi suất hay thời hạn — mà không lo lộ thông tin tài chính cá nhân.',
      },
      {
        question: 'Tiền trả trước lớn hơn làm thay đổi khoản thanh toán thế chấp của tôi như thế nào?',
        answer:
          'Tiền trả trước lớn hơn làm giảm số tiền vay gốc, nhờ đó giảm cả gốc lẫn lãi — và khi trả trước đủ 20% thì có thể loại bỏ hoàn toàn PMI. Ví dụ, trả trước 90.000 đô la thay vì 45.000 đô la trên căn nhà 450.000 đô la không chỉ giảm khoản vay mà còn giúp bạn tiết kiệm khoản phí PMI hàng tháng trong nhiều năm.',
      },
      {
        question: 'Thế chấp 15 năm và thế chấp 30 năm khác nhau thế nào?',
        answer:
          'Thế chấp 15 năm có khoản thanh toán hàng tháng cao hơn nhưng tổng lãi thấp hơn nhiều, còn thế chấp 30 năm có khoản thanh toán hàng tháng thấp hơn nhưng tổng lãi cao hơn. Lựa chọn phụ thuộc vào ngân sách của bạn: nếu trả được khoản hàng tháng cao hơn, bạn sẽ tiết kiệm được hàng chục nghìn đô la tiền lãi trong suốt thời hạn vay.',
      },
      {
        question: 'Tỉ lệ Loan-to-Value (LTV) được tính như thế nào?',
        answer:
          'LTV bằng số tiền vay chia cho giá nhà, thể hiện dưới dạng phần trăm. Một khoản vay 360.000 đô la trên căn nhà 450.000 đô la là LTV 80%. Tỉ lệ này rất quan trọng vì ngân hàng dùng nó để quyết định bạn có phải trả PMI hay không, và LTV càng thấp thì điều khoản vay của bạn thường càng tốt.',
      },
      {
        question: 'Máy tính thế chấp có tính thuế tài sản không?',
        answer:
          'Có. Bạn hãy nhập thuế tài sản hàng năm và công cụ sẽ cộng một phần mười hai của khoản đó vào khoản thanh toán hàng tháng của bạn. Thuế tài sản thường được ngân hàng thu hộ rồi trả cho chính quyền địa phương, nên nó là một phần bắt buộc trong chi phí nhà ở hàng tháng mà nhiều người mua nhà lần đầu hay bỏ sót khi lập ngân sách.',
      },
      {
        question: 'Máy tính thế chấp có tính bảo hiểm nhà ở không?',
        answer:
          'Có. Bạn hãy nhập phí bảo hiểm nhà ở hàng năm và công cụ sẽ cộng một phần mười hai của khoản đó vào tổng số tiền hàng tháng. Bảo hiểm nhà ở bảo vệ căn nhà của bạn trước hỏa hoạn, thiên tai và trộm cắp, đồng thời hầu hết các ngân hàng đều yêu cầu bạn phải có bảo hiểm này trong suốt thời hạn vay.',
      },
      {
        question: 'Phí HOA trong tính toán thế chấp là gì?',
        answer:
          'Phí HOA là khoản phí hàng tháng do hiệp hội chủ nhà thu. Bạn hãy nhập riêng khoản này và nó sẽ được cộng vào tổng chi phí nhà ở hàng tháng của bạn. Phí HOA dùng để bảo trì khu vực chung, hồ bơi, sân chơi hay an ninh khu dân cư, và nó có thể dao động từ vài chục tới vài trăm đô la mỗi tháng tùy khu vực.',
      },
      {
        question: 'Tôi có thể xem số dư thế chấp còn lại sau 5 hay 10 năm không?',
        answer:
          'Có, bảng lịch trả dần số dư theo năm hiển thị số gốc còn lại tại mỗi năm của thời hạn vay. Nhờ đó bạn biết chính xác mình còn nợ bao nhiêu nếu muốn bán nhà, tái cấp vốn với lãi suất thấp hơn, hay tất toán trước hạn sau một thời gian đã trả góp đều đặn.',
      },
      {
        question: 'Máy tính thế chấp có lưu giá nhà hay thông tin khoản vay của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn, và những gì bạn nhập vào không được lưu lại cũng không được gửi lên máy chủ. Bạn có thể yên tâm thử các kịch bản mua nhà với giá trị thật mà không lo dữ liệu tài chính cá nhân bị thu thập hay chia sẻ cho bên thứ ba.',
      },
      {
        question: 'Tôi có thể so sánh các thời hạn thế chấp bằng máy tính này không?',
        answer:
          'Có. Bạn hãy chuyển đổi giữa các thời hạn 10, 15, 20 và 30 năm để so sánh khoản thanh toán hàng tháng và tổng lãi ngay lập tức. Việc so sánh này giúp bạn thấy rõ sự đánh đổi: thời hạn ngắn hơn tiết kiệm lãi rất nhiều nhưng đòi hỏi ngân sách hàng tháng cao hơn, còn thời hạn dài hơn thì nhẹ gánh hàng tháng nhưng tốn lãi hơn.',
      },
      {
        question: 'Tôi sẽ trả tổng cộng bao nhiêu tiền lãi trong thời hạn thế chấp?',
        answer:
          'Công cụ hiển thị tổng lãi trong toàn bộ thời hạn, nhờ đó bạn thấy được chi phí thực sự cả đời vay chứ không chỉ khoản thanh toán hàng tháng. Ví dụ, một khoản vay 360.000 đô la lãi suất 6,5% trong 30 năm có thể khiến bạn trả thêm hơn 450.000 đô la tiền lãi, gần gấp đôi số tiền vay ban đầu.',
      },
      {
        question: 'Điều gì xảy ra với PMI khi số dư vay của tôi giảm xuống dưới 80% LTV?',
        answer:
          'Với nhiều khoản vay thông thường, PMI có thể được loại bỏ khi vốn chủ sở hữu của bạn đạt 20%, nhưng quy tắc cụ thể còn phụ thuộc vào ngân hàng và loại khoản vay, vì vậy bạn nên xác nhận trực tiếp với họ. Một số ngân hàng yêu cầu bạn nộp đơn xin hủy PMI và chứng minh giá trị nhà hiện tại, chứ PMI không tự biến mất ngay khi bạn vừa chạm mốc 20%.',
      },
      {
        question: 'Máy tính thế chấp có phải là tư vấn tài chính không?',
        answer:
          'Không. Đây là công cụ tính toán cho thấy các con số sẽ ra sao với dữ liệu bạn nhập; nó không phải là tư vấn tài chính, và bạn nên kiểm tra điều khoản với ngân hàng của mình. Lãi suất thực tế, phí và điều kiện phê duyệt còn phụ thuộc vào điểm tín dụng, thu nhập và chính sách cho vay tại thời điểm bạn nộp đơn.',
      },
      {
        question: 'Tôi có thể nhập tiền trả trước dưới dạng số tiền đô la hay phần trăm không?',
        answer:
          'Có, bạn có thể nhập tiền trả trước theo cách nào cũng được, và công cụ sẽ tự động phản ánh tỉ lệ Loan-to-Value cùng số tiền vay gốc. Tính linh hoạt này rất tiện khi bạn xem tin rao bán ghi "trả trước 20%" hay khi bạn đã biết chắc mình có sẵn 50.000 đô la tiền mặt để trả trước cho căn nhà.',
      },
      {
        question: 'Máy tính thế chấp có tính được cho thế chấp lãi suất cố định không?',
        answer:
          'Có, công cụ mô hình hóa các khoản thế chấp lãi suất cố định với thời hạn 10, 15, 20 và 30 năm cùng một lãi suất năm không đổi. Nếu khoản vay của bạn có lãi suất điều chỉnh theo thời gian, kết quả này chỉ đúng cho giai đoạn lãi suất cố định ban đầu, và bạn nên tính lại khi lãi suất bắt đầu thay đổi.',
      },
      {
        question: 'Tôi nên nhập gì làm lãi suất thế chấp?',
        answer:
          'Bạn hãy nhập lãi suất năm mà ngân hàng báo cho bạn, dưới dạng phần trăm. Ngay cả thay đổi nhỏ trong lãi suất cũng có thể làm khoản thanh toán hàng tháng dịch chuyển đáng kể, vì vậy hãy so sánh vài mức lãi suất khác nhau để thấy việc thương lượng được lãi suất thấp hơn 0,5% có thể tiết kiệm cho bạn bao nhiêu tiền trong 30 năm.',
      },
      {
        question: 'Máy tính thế chấp có giúp tôi lập ngân sách trước khi đi xem nhà không?',
        answer:
          'Có. Bạn hãy nhập giá nhà, tiền trả trước, lãi suất, thuế và bảo hiểm thực tế để thấy chi phí PITI hàng tháng thật sự trước khi bắt đầu đi xem nhà. Nhờ đó bạn tránh được tình trạng yêu thích một căn nhà rồi mới phát hiện khoản trả hàng tháng vượt quá khả năng chi trả của gia đình.',
      },
    ],
  },
  'compound-interest-calculator': {
    instructions: [
      {
        title: 'Nhập tiền gốc và khoản gửi định kỳ',
        description:
          'Điền Khoản gửi ban đầu và Số tiền đóng góp hàng tháng của bạn.',
      },
      {
        title: 'Đặt lãi suất năm và thời gian đầu tư',
        description:
          'Nhập Lãi suất / Lợi nhuận năm kỳ vọng (%) và Thời gian đầu tư theo năm.',
      },
      {
        title: 'Chọn tần suất gộp lãi',
        description:
          'Chuyển đổi giữa gộp lãi Hàng năm, Hàng quý, Hàng tháng hay Hàng ngày và xem bảng phân tích theo năm.',
      },
      {
        title: 'Chạy dự báo tăng trưởng',
        description:
          'Số dư cuối cùng cập nhật ngay trong trình duyệt của bạn — không có dữ liệu nào được tải lên.',
      },
      {
        title: 'Xem sổ chi tiết theo từng năm',
        description:
          'Kiểm tra khoản đóng góp, lãi kiếm được và số dư lũy kế của từng năm để thấy tăng trưởng tăng tốc theo thời gian ra sao.',
      },
      {
        title: 'Mẹo: thử tăng khoản đóng góp hàng tháng',
        description:
          'Thử cộng thêm $100 mỗi tháng để xem số dư cuối cùng tăng lên bao nhiêu, rồi sao chép các con số để so sánh các kế hoạch tiết kiệm.',
      },
    ],
    examples: [
      {
        title: 'Dự báo đầu tư chỉ số đều đặn trong 20 năm',
        input: 'Ban đầu: $10.000 · Hàng tháng: $500 · Lợi nhuận: 7% · Thời gian: 20 năm · Gộp lãi hàng tháng',
        output: 'Số dư cuối: $300.850,56 · Đã đóng góp: $130.000 · Lãi kiếm được: $170.850,56',
        explanation: 'Lợi nhuận kép chiếm hơn 56% giá trị danh mục cuối cùng.',
      },
      {
        title: 'Chỉ gửi ban đầu, không đóng góp hàng tháng',
        input: 'Ban đầu: $5.000 · Hàng tháng: $0 · Lợi nhuận: 5% · Thời gian: 10 năm · Gộp lãi hàng năm',
        output: 'Số dư cuối: $8.144,47 · Lãi kiếm được: $3.144,47',
        explanation: 'Ngay cả khi không gửi thêm, lãi kép vẫn giúp số tiền ban đầu tăng lên đáng kể sau 10 năm.',
      },
    ],
    benefits: [
      'Tách tổng số tiền bạn bỏ ra khỏi số lãi kép đã kiếm được',
      'Hỗ trợ các kỳ gộp lãi Hàng năm, Hàng quý, Hàng tháng và Hàng ngày',
      'Có tùy chọn thời điểm đóng góp cuối tháng hay đầu tháng',
      'Tạo sổ tăng trưởng đầy đủ theo từng năm để lập kế hoạch',
    ],
    useCases: [
      'Lập kế hoạch các cột mốc tiết kiệm hưu trí hay quỹ chỉ số dài hạn',
      'So sánh tài khoản tiết kiệm lãi suất cao với gộp lãi hàng tháng và hàng ngày',
      'Hình dung tác động của việc tăng khoản đóng góp hàng tháng thêm $100',
      'Dạy về lãi kép tăng theo cấp số nhân so với lãi đơn tăng tuyến tính',
    ],
    faqs: [
      {
        question: 'Tần suất gộp lãi tạo ra khác biệt bao nhiêu trong Máy tính lãi kép?',
        answer:
          'Ở mức lãi suất vừa phải, gộp lãi hàng tháng cho tăng trưởng cao hơn một chút so với gộp lãi hàng năm, vì lãi bắt đầu sinh lãi sớm hơn; còn gộp lãi hàng ngày so với hàng tháng thường chỉ chênh nhau một phần nhỏ của một phần trăm. Sự khác biệt thực sự lớn đến từ lãi suất và thời gian đầu tư, chứ không phải từ việc gộp lãi hàng ngày thay vì hàng tháng.',
      },
      {
        question: 'Máy tính lãi kép có tính thuế hay lạm phát không?',
        answer:
          'Máy tính hiển thị tăng trưởng danh nghĩa trước thuế. Để ước tính sức mua thực tế đã điều chỉnh theo lạm phát, bạn hãy trừ lạm phát năm kỳ vọng, ví dụ 2,5%–3%, khỏi lãi suất danh nghĩa của mình. Cách ước lượng nhanh này giúp bạn thấy lợi nhuận thực sau khi trừ đi mức tăng giá chung của hàng hóa và dịch vụ theo thời gian.',
      },
      {
        question: 'Khoản đóng góp được tính vào đầu tháng hay cuối tháng trong Máy tính lãi kép?',
        answer:
          'Theo mặc định, khoản đóng góp được áp dụng vào cuối mỗi tháng; bạn có thể chuyển sang thời điểm đầu tháng trong phần tùy chọn của máy tính. Đóng góp đầu tháng cho kết quả cao hơn một chút vì tiền của bạn bắt đầu sinh lãi sớm hơn một tháng, và sự chênh lệch này tích lũy dần theo nhiều năm đầu tư.',
      },
      {
        question: 'Máy tính lãi kép có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy toàn bộ trong trình duyệt của bạn nên các con số tiết kiệm của bạn không bao giờ bị tải lên. Bạn có thể thử bao nhiêu kịch bản đầu tư tùy thích — đổi lãi suất, thời gian hay khoản đóng góp hàng tháng — mà không lo lộ thông tin tài chính cá nhân.',
      },
      {
        question: 'Lãi kép là gì?',
        answer:
          'Lãi kép là tiền lãi kiếm được trên cả số tiền gốc ban đầu lẫn số lãi đã tích lũy trước đó, nên tăng trưởng sẽ tăng tốc theo thời gian. Khác với lãi đơn chỉ tính trên gốc, lãi kép khiến số dư của bạn tăng nhanh dần theo từng năm, và hiệu ứng này càng mạnh mẽ khi thời gian đầu tư càng dài.',
      },
      {
        question: 'Lãi kép khác lãi đơn như thế nào?',
        answer:
          'Lãi đơn chỉ trả trên số tiền gốc, còn lãi kép trả trên gốc cộng với lãi đã tích lũy, nhờ đó số dư tăng nhanh hơn. Ví dụ, gửi 10.000 đô la lãi suất 5% trong 20 năm theo lãi đơn cho 20.000 đô la, nhưng theo lãi kép hàng năm sẽ cho hơn 26.500 đô la — chênh lệch đó chính là sức mạnh của lãi kép.',
      },
      {
        question: 'Tôi có thể dự báo tăng trưởng với khoản đóng góp hàng tháng không?',
        answer:
          'Có. Bạn hãy nhập khoản đóng góp hàng tháng và công cụ sẽ cộng thêm khoản đó mỗi tháng, đồng thời gộp lãi trên số dư đang tăng dần trong toàn bộ thời gian đầu tư. Cách này mô phỏng đúng thói quen tiết kiệm đều đặn hàng tháng của hầu hết mọi người, từ quỹ hưu trí tới kế hoạch tiết kiệm cho con đi học.',
      },
      {
        question: 'Tôi nên nhập lãi suất nào trong Máy tính lãi kép?',
        answer:
          'Bạn hãy nhập lãi suất năm mà mình kỳ vọng, dưới dạng phần trăm. Đây là dữ liệu đầu vào để dự báo chứ không phải dự đoán chắc chắn — hãy thử vài mức lãi suất khác nhau để xem khoảng kết quả có thể xảy ra. Ví dụ, thử 5%, 7% và 9% sẽ cho bạn thấy bức tranh từ thận trọng tới lạc quan.',
      },
      {
        question: 'Máy tính lãi kép có cho biết tôi đã đóng góp bao nhiêu so với đã kiếm được bao nhiêu không?',
        answer:
          'Có, công cụ tách tổng số tiền bạn tự bỏ ra khỏi số lãi kép đã kiếm được, và hiển thị cả hai trong sổ chi tiết theo từng năm. Nhờ đó bạn thấy rõ sau 20 năm, phần lớn số dư cuối cùng có thể đến từ lãi chứ không phải từ tiền bạn gửi vào, và đó chính là động lực để bắt đầu tiết kiệm càng sớm càng tốt.',
      },
      {
        question: 'Tôi có thể so sánh gộp lãi hàng tháng với gộp lãi hàng ngày không?',
        answer:
          'Có. Bạn hãy chuyển tần suất gộp lãi giữa hàng năm, hàng quý, hàng tháng và hàng ngày để so sánh số dư cuối cùng của từng phương án. Bạn sẽ thấy gộp lãi thường xuyên hơn luôn cho kết quả cao hơn, nhưng mức chênh lệch giữa hàng tháng và hàng ngày thường rất nhỏ so với tác động của lãi suất và thời gian.',
      },
      {
        question: 'Máy tính lãi kép có giúp lập kế hoạch tiết kiệm hưu trí không?',
        answer:
          'Có, công cụ rất phù hợp cho các dự báo hưu trí hay quỹ chỉ số dài hạn — hãy nhập số dư ban đầu, khoản gửi hàng tháng, lãi suất và số năm để xem số dư dự kiến. Bạn có thể thử tăng khoản đóng góp hay kéo dài thời gian đầu tư để xem mình cần tiết kiệm bao nhiêu mỗi tháng mới đủ cho mục tiêu nghỉ hưu.',
      },
      {
        question: 'Máy tính lãi kép có lưu các con số tiết kiệm của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn, và những gì bạn nhập vào không được lưu lại cũng không được gửi lên máy chủ. Bạn có thể yên tâm nhập số dư tài khoản và kế hoạch tiết kiệm thật của mình mà không lo thông tin tài chính cá nhân bị thu thập hay chia sẻ.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi tăng khoản đóng góp hàng tháng thêm $100?',
        answer:
          'Số dư cuối cùng tăng lên nhiều hơn hẳn so với chỉ riêng phần tiền gửi thêm, vì mỗi đô la thêm vào cũng kiếm được lãi kép trong những năm còn lại. Ví dụ, thêm 100 đô la mỗi tháng trong 20 năm là 24.000 đô la tiền gửi thêm, nhưng số dư cuối có thể tăng hơn 50.000 đô la nhờ lãi kép tích lũy.',
      },
      {
        question: 'Tôi có thể dùng Máy tính lãi kép mà không có khoản đóng góp hàng tháng không?',
        answer:
          'Có. Bạn hãy đặt khoản đóng góp hàng tháng bằng 0 và công cụ sẽ dự báo tăng trưởng chỉ dựa trên khoản gửi ban đầu của bạn. Phương án này phù hợp khi bạn đã có một khoản tiền nhàn rỗi và muốn xem nó sẽ lớn lên bao nhiêu nếu cứ để yên hưởng lãi kép trong nhiều năm mà không gửi thêm.',
      },
      {
        question: 'Tôi có thể dùng Máy tính lãi kép mà không có khoản gửi ban đầu không?',
        answer:
          'Có. Bạn hãy đặt khoản gửi ban đầu bằng 0 và nhập khoản đóng góp hàng tháng để dự báo tăng trưởng chỉ từ các khoản gửi đều đặn. Đây là trường hợp phổ biến của người trẻ mới bắt đầu tiết kiệm từ con số 0, và công cụ sẽ cho thấy thói quen gửi đều mỗi tháng cũng có thể tích lũy thành một khoản đáng kể.',
      },
      {
        question: 'Máy tính lãi kép có phải là tư vấn tài chính không?',
        answer:
          'Không. Đây là công cụ dự báo cho thấy các con số sẽ ra sao với lãi suất và dữ liệu bạn nhập; nó không phải là tư vấn tài chính. Lợi nhuận đầu tư thực tế luôn biến động theo thị trường và không có gì đảm bảo, vì vậy bạn nên tham khảo ý kiến chuyên gia tài chính trước khi đưa ra quyết định đầu tư lớn.',
      },
      {
        question: 'Sổ chi tiết theo từng năm hoạt động như thế nào?',
        answer:
          'Sổ liệt kê số dư đầu năm, khoản đóng góp, lãi kiếm được và số dư cuối năm của từng năm, nhờ đó bạn thấy được tăng trưởng qua từng năm. Bạn có thể theo dõi xem năm nào lãi kiếm được bắt đầu vượt qua khoản đóng góp hàng năm của mình — đó chính là thời điểm lãi kép thực sự bắt đầu làm việc thay cho bạn.',
      },
      {
        question: 'Vì sao tăng trưởng tăng tốc trong những năm sau?',
        answer:
          'Vì lãi được tính trên số dư ngày càng lớn, nên số lãi kiếm được mỗi năm cũng tăng lên khi số dư gộp lãi. Trong những năm đầu, tăng trưởng chủ yếu đến từ tiền bạn gửi vào; nhưng sau 15–20 năm, lãi hàng năm có thể lớn hơn tổng số tiền bạn gửi vào trong cả năm đó.',
      },
      {
        question: 'Tôi có thể dùng Máy tính lãi kép cho tài khoản tiết kiệm lãi suất cao không?',
        answer:
          'Có. Bạn hãy nhập lãi suất năm của tài khoản và mẫu gửi tiền của mình để so sánh gộp lãi hàng tháng với gộp lãi hàng ngày trên khoản tiết kiệm. Cách này giúp bạn kiểm tra xem tài khoản quảng cáo "lãi suất cao" thực sự mang lại bao nhiêu sau một năm, và so sánh công bằng giữa các ngân hàng khác nhau.',
      },
      {
        question: 'Số dư cuối cùng bao gồm những gì?',
        answer:
          'Số dư cuối cùng bao gồm khoản gửi ban đầu của bạn, tất cả các khoản đóng góp hàng tháng và toàn bộ lãi kép kiếm được trong thời gian đầu tư. Đây là tổng số tiền bạn sẽ có nếu giữ nguyên kế hoạch, không rút tiền giữa chừng, và lãi suất thực tế đúng bằng mức bạn đã nhập vào máy tính.',
      },
    ],
  },
  'discount-margin-calculator': {
    instructions: [
      {
        title: 'Chọn chế độ Giảm giá hoặc Biên lợi nhuận',
        description:
          'Chọn Giảm giá bán lẻ để tính giá bán, hoặc Biên lợi nhuận & Giá cộng thêm để tính kinh tế đơn vị cho từng SKU.',
      },
      {
        title: 'Nhập các con số giá',
        description:
          'Điền Giá gốc, % Giảm giá chính, % Phiếu giảm giá thêm tùy chọn và % Thuế — hoặc Giá vốn và Giá bán trong chế độ Biên lợi nhuận.',
      },
      {
        title: 'Cộng thêm giảm giá chồng lớp và thuế',
        description:
          'Trong chế độ Giảm giá, hãy nhập % phiếu giảm giá thứ hai và % thuế tùy chọn; các mức giảm giá được áp dụng nối tiếp nhau chứ không cộng gộp lại.',
      },
      {
        title: 'Xem kết quả cập nhật ngay lập tức',
        description:
          'Các con số được tính lại khi bạn gõ, không cần bấm nút và không cần đăng ký.',
      },
      {
        title: 'Xem các chỉ số ròng',
        description:
          'Kiểm tra Giá cuối cùng, Tổng tiết kiệm, % Giảm giá hiệu dụng, Lợi nhuận gộp, % Biên lợi nhuận và % Giá cộng thêm.',
      },
      {
        title: 'Sao chép kết quả và thử các mức giá',
        description:
          'Sao chép giá cuối cùng, khoản tiết kiệm, biên lợi nhuận và tỉ lệ cộng thêm vào bảng giá, báo giá hay bảng tính của bạn, rồi điều chỉnh dữ liệu đầu vào để thử các mức giá khác nhau.',
      },
    ],
    examples: [
      {
        title: 'Tính giảm giá bán lẻ chồng lớp',
        input: 'Giá gốc: $120 · Giảm giá 1: 25% · Phiếu thêm: 10% · Thuế: 0%',
        output: 'Giá cuối: $81,00 · Tiết kiệm: $39,00 · Giảm giá hiệu dụng: 32,5%',
        explanation: 'Các mức giảm giá nối tiếp nhân với nhau (0,75 × 0,90 = 0,675), cho tổng cộng 32,5% chứ không phải 35%.',
      },
      {
        title: 'Tính biên lợi nhuận và giá cộng thêm từ giá vốn',
        input: 'Giá vốn: $50 · Giá bán: $100',
        output: 'Lợi nhuận gộp: $50 · Biên lợi nhuận: 50% · Giá cộng thêm: 100%',
        explanation: 'Biên lợi nhuận chia lợi nhuận cho giá bán, còn giá cộng thêm chia lợi nhuận cho giá vốn.',
      },
    ],
    benefits: [
      'Ngăn lỗi cộng gộp giảm giá chồng lớp kinh điển',
      'Phân biệt % Biên lợi nhuận gộp với % Giá cộng thêm trên giá vốn, hiển thị cạnh nhau',
      'Tính ngay lợi nhuận đơn vị và ngưỡng giá vốn hòa vốn',
      'Có tính thuế bán hàng tùy chọn sau khi giảm giá',
    ],
    useCases: [
      'Kiểm tra các mã khuyến mãi chồng lớp trước khi thanh toán',
      'Đặt giá bán lẻ cho bán buôn hay thương mại điện tử từ giá vốn đơn vị',
      'Kiểm toán mức bào mòn biên lợi nhuận của chiến dịch khuyến mãi',
      'Chuyển đổi tỉ lệ biên lợi nhuận mục tiêu thành mức cộng thêm cần thiết',
    ],
    faqs: [
      {
        question: 'Biên lợi nhuận và Giá cộng thêm khác nhau thế nào?',
        answer:
          'Biên lợi nhuận gộp chia lợi nhuận cho Giá bán ((Giá − Vốn) / Giá), còn Giá cộng thêm chia lợi nhuận cho Giá vốn ((Giá − Vốn) / Vốn). Một sản phẩm vốn 50 đô la bán 100 đô la có biên lợi nhuận 50% nhưng giá cộng thêm tới 100%, nên nhầm lẫn hai khái niệm này có thể khiến bạn định giá sai nghiêm trọng.',
      },
      {
        question: 'Vì sao hai mức giảm 20% và 10% chỉ bằng 28% chứ không phải 30%?',
        answer:
          'Mức giảm 10% thứ hai áp dụng trên giá đã giảm còn 80%, tức chỉ lấy thêm 8% của giá gốc (20% + 8% = 28%). Đây là lỗi phổ biến nhất khi tính giảm giá chồng lớp: các mức giảm luôn nhân nối tiếp nhau chứ không bao giờ cộng trực tiếp, dù quảng cáo thường khiến người mua tưởng mình được giảm tổng cộng 30%.',
      },
      {
        question: 'Thuế bán hàng được tính trước hay sau khi giảm giá?',
        answer:
          'Thuế bán lẻ tiêu chuẩn áp dụng trên tổng phụ sau khi đã giảm giá và trừ phiếu giảm giá của cửa hàng, và máy tính này cũng tính đúng như vậy. Nhờ đó, mức giảm giá càng lớn thì số thuế bạn phải trả càng thấp, và giá cuối cùng hiển thị đã bao gồm thuế một cách chính xác.',
      },
      {
        question: 'Biên lợi nhuận tốt cho sản phẩm bán lẻ là bao nhiêu?',
        answer:
          'Không có một mức biên lợi nhuận tốt duy nhất; nó thay đổi tùy ngành, loại sản phẩm và chi phí. Bạn hãy dùng máy tính để so sánh % biên lợi nhuận của mình với mục tiêu riêng, và nhớ rằng kết quả chỉ là con số toán học chứ không phải lời khuyên kinh doanh, vì mỗi ngành có cấu trúc chi phí rất khác nhau.',
      },
      {
        question: 'Làm sao tính giá bán sau một lần giảm giá?',
        answer:
          'Hãy nhân giá gốc với (1 − % giảm giá). Một món hàng 80 đô la giảm 25% sẽ có giá 80 × 0,75 = 60 đô la. Công thức đơn giản này áp dụng cho mọi mức giảm giá đơn lẻ, và bạn có thể kiểm tra nhanh bằng máy tính trước khi dán nhãn giá mới cho sản phẩm trong cửa hàng.',
      },
      {
        question: 'Tôi có thể chồng một mức giảm phần trăm với phiếu giảm giá số tiền cố định không?',
        answer:
          'Máy tính này chồng các mức giảm phần trăm nối tiếp nhau. Với phiếu giảm giá số tiền cố định, bạn hãy trừ nó khỏi giá sau khi đã áp dụng mức giảm phần trăm. Ví dụ, món hàng 100 đô la giảm 20% còn 80 đô la, rồi trừ thêm phiếu 10 đô la sẽ còn 70 đô la — thứ tự này cho kết quả khác với việc trừ phiếu trước rồi mới giảm phần trăm.',
      },
      {
        question: 'Máy tính giảm giá và biên lợi nhuận có tính được cho giá bán buôn không?',
        answer:
          'Có. Bạn hãy nhập giá vốn đơn vị và giá bán mục tiêu trong chế độ Biên lợi nhuận để xem lợi nhuận gộp, % biên lợi nhuận và % giá cộng thêm trên mỗi đơn vị. Nhờ đó bạn có thể đặt giá bán buôn vừa đủ cạnh tranh với nhà phân phối mà vẫn giữ được biên lợi nhuận cần thiết cho doanh nghiệp của mình.',
      },
      {
        question: 'Lợi nhuận gộp và lợi nhuận ròng khác nhau thế nào?',
        answer:
          'Lợi nhuận gộp là giá bán trừ giá vốn sản phẩm. Lợi nhuận ròng còn trừ thêm các chi phí chung như vận chuyển, phí giao dịch và tiền thuê mặt bằng, những khoản mà máy tính này không tính vào. Vì vậy, một sản phẩm có biên lợi nhuận gộp 50% vẫn có thể chỉ còn lợi nhuận ròng rất thấp sau khi trừ hết chi phí vận hành.',
      },
      {
        question: 'Làm sao đặt giá từ tỉ lệ biên lợi nhuận mục tiêu?',
        answer:
          'Trong chế độ Biên lợi nhuận, bạn hãy thử các mức giá bán khác nhau cho tới khi % biên lợi nhuận khớp với mục tiêu của mình. Con số % giá cộng thêm hiển thị sẽ cho biết bạn cần cộng thêm bao nhiêu lên trên giá vốn, nhờ đó bạn có thể xây dựng bảng giá nhất quán cho toàn bộ danh mục sản phẩm của mình.',
      },
      {
        question: 'Máy tính giảm giá và biên lợi nhuận có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn — không cần tài khoản, không tải lên dữ liệu và không cần thanh toán. Bạn có thể tính giá cho bao nhiêu sản phẩm tùy thích, thử các kịch bản khuyến mãi khác nhau mà không lo bị giới hạn hay phải đăng ký gói trả phí.',
      },
      {
        question: 'Vì sao % biên lợi nhuận của tôi thấp hơn % giá cộng thêm?',
        answer:
          'Biên lợi nhuận chia lợi nhuận cho giá bán, còn giá cộng thêm chia lợi nhuận cho giá vốn, nên với cùng một khoản lợi nhuận thì % giá cộng thêm luôn cao hơn. Ví dụ, lợi nhuận 50 đô la trên giá bán 100 đô la là biên 50%, nhưng trên giá vốn 50 đô la lại là cộng thêm 100% — hai con số mô tả cùng một khoản lợi nhuận theo hai cách khác nhau.',
      },
      {
        question: 'Biên lợi nhuận có bao giờ vượt quá 100% không?',
        answer:
          'Không. Biên lợi nhuận là lợi nhuận chia cho giá bán, nên nó không bao giờ vượt quá 100%. Tuy nhiên, giá cộng thêm có thể vượt xa 100% — ví dụ, một món hàng vốn 10 đô la bán 50 đô la có giá cộng thêm tới 400% nhưng biên lợi nhuận chỉ là 80%, và sự khác biệt này thường gây nhầm lẫn cho người mới bán hàng.',
      },
      {
        question: 'Thuế bán hàng ảnh hưởng tới giá cuối cùng như thế nào?',
        answer:
          'Thuế được tính trên tổng phụ sau khi đã giảm giá, nên mức giảm giá càng lớn thì số thuế bạn phải trả càng thấp. Máy tính hiển thị giá cuối cùng đã bao gồm thuế, nhờ đó bạn thấy đúng số tiền khách hàng phải trả tại quầy thay vì phải cộng thuế thủ công sau khi đã tính giá giảm.',
      },
      {
        question: 'Giá hòa vốn là gì?',
        answer:
          'Đó là mức giá mà tại đó lợi nhuận gộp bằng 0 — tức bằng đúng giá vốn đơn vị của bạn. Bất kỳ giá bán nào cao hơn giá vốn đều tạo ra biên lợi nhuận dương. Biết giá hòa vốn giúp bạn đặt mức sàn cho các chương trình giảm giá: giảm xuống dưới mức này nghĩa là bạn đang bán lỗ trên từng đơn vị sản phẩm.',
      },
      {
        question: 'Tôi có thể dùng máy tính này cho giá Black Friday hay giá xả hàng không?',
        answer:
          'Có. Bạn hãy nhập giá gốc và từng mức giảm giá chồng lớp để kiểm tra giá cuối cùng và xem chương trình khuyến mãi còn để lại bao nhiêu biên lợi nhuận. Cách này giúp bạn tránh tình trạng giảm giá quá sâu trong dịp Black Friday rồi mới phát hiện mình gần như không còn lãi trên mỗi đơn hàng đã bán ra.',
      },
      {
        question: 'Máy tính có lưu hay tải lên giá của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn và không có gì được tải lên hay lưu trữ. Bạn có thể yên tâm nhập giá vốn thật, giá bán và chiến lược khuyến mãi của cửa hàng mình mà không lo đối thủ hay bên thứ ba nhìn thấy các con số kinh doanh nhạy cảm này.',
      },
      {
        question: 'Làm sao chuyển đổi % giá cộng thêm thành % biên lợi nhuận?',
        answer:
          'Biên lợi nhuận % = Giá cộng thêm % ÷ (100 + Giá cộng thêm %) × 100. Ví dụ, giá cộng thêm 100% tương đương với biên lợi nhuận 50%, và máy tính sẽ thực hiện phép chuyển đổi này cho bạn. Công thức này rất hữu ích khi nhà cung cấp báo giá theo mức cộng thêm nhưng bạn cần biết biên lợi nhuận thực tế của mình.',
      },
      {
        question: 'Tôi nên làm gì nếu biên lợi nhuận có vẻ quá mỏng?',
        answer:
          'Bạn hãy kiểm tra lại các dữ liệu giá vốn đã nhập, rồi thử mức giá bán cao hơn hoặc mức giảm giá nhỏ hơn trong máy tính để xem biên lợi nhuận hồi phục ra sao. Đôi khi chỉ cần tăng giá bán thêm 5% hay đàm phán lại giá vốn với nhà cung cấp là đủ để biến một sản phẩm biên mỏng thành sản phẩm có lãi bền vững.',
      },
      {
        question: 'Tôi có thể tính giảm giá trên giá đã bao gồm thuế không?',
        answer:
          'Bạn hãy nhập số tiền đã bao gồm thuế làm giá gốc và đặt % Thuế bằng 0, để mức giảm giá áp dụng trên đúng số tiền bạn đã gõ. Cách này phù hợp với các cửa hàng niêm yết giá đã gồm thuế, vì máy tính sẽ không cộng thuế lần nữa lên trên giá cuối cùng sau khi giảm.',
      },
      {
        question: '"% giảm giá hiệu dụng" nghĩa là gì?',
        answer:
          'Đó là mức giảm giá đơn lẻ cho ra cùng một giá cuối cùng như tất cả các mức giảm giá chồng lớp của bạn cộng lại — ví dụ, giảm 20% rồi 10% tương đương với giảm hiệu dụng 28%. Con số này giúp bạn quảng cáo chương trình khuyến mãi một cách trung thực, thay vì cộng gộp các mức giảm rồi tuyên bố mức giảm cao hơn thực tế.',
      },
    ],
  },
  'vat-tax-calculator': {
    instructions: [
      {
        title: 'Chọn chiều tính thuế',
        description:
          'Chọn Cộng thuế (Giá chưa thuế → Giá đã gồm thuế) hoặc Tách thuế (Giá đã gồm thuế → Giá chưa thuế).',
      },
      {
        title: 'Nhập số tiền và thuế suất',
        description:
          'Gõ số tiền trên hóa đơn và chọn mức thuế nhanh (5%, 10%, 15%, 20%) hoặc bất kỳ tỉ lệ thuế tùy chỉnh nào.',
      },
      {
        title: 'Dùng mức nhanh hoặc mức tùy chỉnh',
        description:
          'Chạm vào 5%, 10%, 15% hay 20%, hoặc gõ bất kỳ mức thập phân nào như 8,875% cho khớp với thuế bán hàng địa phương.',
      },
      {
        title: 'Xem phép tính ngay lập tức',
        description:
          'Kết quả cập nhật khi bạn gõ, không cần nút gửi và không cần đăng ký.',
      },
      {
        title: 'Đọc các dòng trên hóa đơn',
        description:
          'Sao chép chính xác Tổng phụ chưa thuế, Thành phần thuế và Tổng cộng đã gồm thuế để làm kế toán hay báo giá.',
      },
      {
        title: 'Sao chép bảng phân tích và so sánh các mức thuế',
        description:
          'Sao chép các con số chưa thuế, thuế và đã gồm thuế vào hóa đơn, báo giá hay sổ sách của bạn, rồi chạy lại với mức thuế khác để so sánh các kịch bản.',
      },
    ],
    examples: [
      {
        title: 'Tách VAT 20% khỏi biên lai đã gồm thuế',
        input: 'Chế độ: Tách thuế · Tổng đã gồm thuế: $120,00 · Thuế suất: 20%',
        output: 'Tổng phụ chưa thuế: $100,00 · Thành phần VAT: $20,00',
        explanation: 'Chia tổng đã gồm thuế cho (1 + 0,20) thay vì nhân tổng đó với 20%, tránh sai sót kế toán $4.',
      },
      {
        title: 'Cộng GST 10% vào giá chưa thuế',
        input: 'Chế độ: Cộng thuế · Giá chưa thuế: $200,00 · Thuế suất: 10%',
        output: 'Thuế: $20,00 · Tổng đã gồm thuế: $220,00',
        explanation: 'Nhân giá chưa thuế với 1,10 để ra tổng đã gồm thuế.',
      },
    ],
    benefits: [
      'Ngăn lỗi tách VAT ngược thường gặp (chia cho 1 + thuế suất thay vì trừ đi % thuế suất)',
      'Hoạt động giống hệt cho VAT châu Âu, GST của Úc/Canada và thuế bán hàng theo bang của Mỹ',
      'Có nút mức thuế nhanh tức thì cùng tỉ lệ thuế thập phân tùy ý',
      'Hiển thị bảng phân tích 3 cột gọn gàng: Chưa thuế / Thuế / Đã gồm thuế',
    ],
    useCases: [
      'Chuẩn bị hóa đơn B2B hay B2C với các dòng rõ ràng trước thuế và thuế',
      'Đối chiếu các biên lai chi phí đã gồm VAT cho sổ sách kế toán',
      'Báo giá dịch vụ SaaS hay freelance quốc tế chưa gồm hoặc đã gồm VAT',
      'Kiểm tra tổng tiền tại quầy bán lẻ địa phương với thuế suất bang và thành phố',
    ],
    faqs: [
      {
        question: 'Vì sao tách VAT 20% khỏi $120 lại bằng $20 chứ không phải $24?',
        answer:
          'Vì 20% ban đầu được cộng vào số tiền chưa thuế 100 đô la (100 × 1,20 = 120 đô la). Để tính ngược lại, bạn chia 120 đô la cho 1,20 để lấy lại 100 đô la chưa thuế và 20 đô la tiền thuế. Lỗi phổ biến là lấy 20% của 120 đô la, tức 24 đô la, nhưng cách đó tính thuế trên cả phần thuế đã có sẵn trong giá nên sẽ sai 4 đô la.',
      },
      {
        question: 'Tôi có thể nhập thuế suất bán hàng địa phương của Mỹ dạng phân số như 8,875% không?',
        answer:
          'Có. Ô nhập Thuế suất hỗ trợ bất kỳ mức thập phân dương nào như 7,25%, 8,875% hay 21%. Các mức thuế bán hàng địa phương của Mỹ thường có phần thập phân lẻ vì chúng cộng gộp thuế bang, thuế quận và thuế thành phố, nên khả năng nhập số thập phân chính xác là rất cần thiết để hóa đơn của bạn khớp với thực tế.',
      },
      {
        question: 'Công cụ này có hỗ trợ cả GST và VAT không?',
        answer:
          'Có. Về mặt toán học, Thuế giá trị gia tăng (VAT), Thuế hàng hóa và dịch vụ (GST) và thuế bán hàng theo phần trăm đều dùng đúng cùng một công thức chưa thuế/đã gồm thuế. Dù tên gọi và quy định pháp lý khác nhau giữa các nước, phép tính cộng thuế hay tách thuế vẫn giống hệt nhau, nên bạn chỉ cần nhập đúng thuế suất địa phương là đủ.',
      },
      {
        question: 'VAT, GST và thuế bán hàng khác nhau thế nào?',
        answer:
          'Chúng đều là thuế theo phần trăm đánh trên hàng hóa và dịch vụ. VAT và GST thường đã bao gồm trong giá hiển thị, còn thuế bán hàng của Mỹ thường được cộng thêm khi thanh toán. Cách tính toán thì giống hệt nhau, chỉ khác ở chỗ giá niêm yết đã gồm thuế hay chưa, và ai là người chịu trách nhiệm nộp thuế cho cơ quan thuế.',
      },
      {
        question: 'Làm sao cộng VAT 20% vào giá chưa thuế?',
        answer:
          'Bạn hãy nhân giá chưa thuế với 1,20. Giá chưa thuế 100 đô la sẽ thành 120 đô la đã gồm thuế, trong đó có 20 đô la VAT. Công thức nhân với (1 + thuế suất) này áp dụng cho mọi mức thuế: với VAT 10% thì nhân với 1,10, với thuế suất 5% thì nhân với 1,05, và máy tính sẽ làm việc này cho bạn ngay lập tức.',
      },
      {
        question: 'Làm sao loại VAT khỏi giá đã bao gồm thuế?',
        answer:
          'Bạn hãy chia giá đã gồm thuế cho (1 + thuế suất). Với VAT 20%, 120 đô la chia cho 1,20 bằng 100 đô la chưa thuế và 20 đô la tiền thuế — chứ không phải 24 đô la. Đây là phép tính ngược mà nhiều người hay làm sai, và máy tính này tồn tại chính là để bạn không bao giờ phải tự chia tay rồi lo mình đã chia đúng hay chưa.',
      },
      {
        question: 'Máy tính VAT và thuế có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn, không cần tài khoản hay tải lên dữ liệu. Bạn có thể tính thuế cho bao nhiêu hóa đơn tùy thích, thử các thuế suất khác nhau cho khách hàng ở nhiều nước mà không gặp giới hạn sử dụng hay yêu cầu đăng ký gói trả phí nào.',
      },
      {
        question: 'Tôi có thể dùng máy tính này cho VAT 20% của Anh không?',
        answer:
          'Có. Bạn hãy chọn Tách thuế hoặc Cộng thuế, nhập số tiền của mình rồi dùng mức nhanh 20% hoặc gõ 20 làm thuế suất tùy chỉnh. VAT tiêu chuẩn của Anh hiện là 20% cho hầu hết hàng hóa và dịch vụ, nhưng một số mặt hàng được giảm thuế hay miễn thuế, nên bạn vẫn cần kiểm tra loại hàng của mình trước khi áp dụng.',
      },
      {
        question: 'Tôi nên dùng thuế suất VAT nào cho nước của mình?',
        answer:
          'Thuế suất khác nhau tùy quốc gia và loại sản phẩm, vì vậy bạn hãy kiểm tra mức thuế hiện hành của cơ quan thuế địa phương rồi nhập nó làm thuế suất tùy chỉnh. Máy tính không đưa ra lời khuyên về thuế, và việc áp dụng sai thuế suất có thể khiến hóa đơn của bạn sai lệch hoặc vi phạm quy định thuế tại địa phương.',
      },
      {
        question: 'Máy tính có xử lý hàng hóa thuế suất 0% hay được miễn thuế không?',
        answer:
          'Có. Bạn hãy nhập thuế suất 0% và số tiền chưa thuế sẽ bằng đúng số tiền đã gồm thuế. Tính năng này hữu ích cho các mặt hàng được miễn thuế như thực phẩm cơ bản hay sách ở một số nước, hoặc khi bạn xuất hóa đơn cho khách hàng ở nước ngoài thuộc diện không chịu thuế VAT của nước bạn.',
      },
      {
        question: 'Giá đã bao gồm thuế là gì?',
        answer:
          'Đó là giá đã chứa sẵn tiền thuế, như trên hầu hết các biên lai ở châu Âu. Chế độ Tách thuế sẽ tách nó trở lại thành phần chưa thuế và phần thuế. Khi bạn thấy giá niêm yết ở cửa hàng châu Âu, con số đó gần như luôn là giá cuối cùng bạn phải trả, không còn khoản thuế nào cộng thêm khi thanh toán.',
      },
      {
        question: 'Giá chưa bao gồm thuế là gì?',
        answer:
          'Đó là giá trước khi cộng thuế, thường gặp ở các cửa hàng tại Mỹ. Chế độ Cộng thuế sẽ hiển thị tổng đã gồm thuế mà khách hàng của bạn phải trả. Vì vậy, một món hàng ghi giá 100 đô la ở Mỹ có thể thực tế khiến bạn trả tới 108 hay 109 đô la tại quầy, tùy thuộc vào thuế suất bán hàng của bang và thành phố đó.',
      },
      {
        question: 'Tôi có thể tính VAT trên khoản hoàn tiền một phần không?',
        answer:
          'Có. Bạn hãy nhập số tiền hoàn lại dưới dạng con số đã gồm thuế hay chưa thuế, rồi tách hoặc cộng thuế theo cùng mức thuế đã dùng trên giao dịch bán ban đầu. Việc dùng đúng mức thuế ban đầu rất quan trọng để sổ sách kế toán của bạn khớp nhau, vì hoàn tiền một phần vẫn phải hoàn lại đúng phần thuế tương ứng với phần hàng đã trả lại.',
      },
      {
        question: 'Làm sao thể hiện VAT trên hóa đơn?',
        answer:
          'Bạn hãy dùng ba con số của máy tính làm ba dòng riêng biệt: Tổng phụ chưa thuế, Số tiền thuế và Tổng cộng đã gồm thuế, để khách hàng thấy rõ bảng phân tích. Cách trình bày này vừa minh bạch vừa chuyên nghiệp, đồng thời giúp khách hàng doanh nghiệp dễ dàng kê khai khấu trừ thuế đầu vào trên hóa đơn của bạn.',
      },
      {
        question: 'Máy tính này có lưu số tiền trên hóa đơn của tôi không?',
        answer:
          'Không. Mọi thứ đều được tính ngay trong trình duyệt của bạn và không có gì được tải lên hay lưu lại. Bạn có thể yên tâm nhập số tiền hóa đơn thật, giá trị hợp đồng hay doanh thu của mình mà không lo dữ liệu tài chính nhạy cảm bị thu thập, lưu trữ hay chia sẻ cho bên thứ ba.',
      },
      {
        question: 'Tôi có thể dùng thuế suất thập phân như 7,25% hay 8,875% không?',
        answer:
          'Có. Ô thuế suất chấp nhận bất kỳ tỉ lệ phần trăm thập phân dương nào, nên các mức như 7,25% hay 8,875% đều tính ra tiền thuế và tổng cộng một cách chính xác. Khả năng này đặc biệt quan trọng với thuế bán hàng của Mỹ, nơi thuế suất thường là tổng của nhiều mức thuế chồng lớp với phần thập phân lẻ.',
      },
      {
        question: 'Nếu biên lai của tôi chỉ hiển thị tổng đã gồm thuế thì sao?',
        answer:
          'Bạn hãy dùng chế độ Tách thuế với tổng đã gồm thuế và thuế suất địa phương của mình để lấy lại số tiền chưa thuế và thành phần thuế. Tình huống này rất thường gặp khi bạn cần kê khai chi phí công tác hay đối chiếu sổ sách: biên lai chỉ in tổng tiền, nhưng kế toán của bạn lại cần biết riêng phần thuế để hạch toán đúng.',
      },
      {
        question: 'VAT có tính trên phí vận chuyển hay giao hàng không?',
        answer:
          'Điều đó còn tùy thuộc vào quy định thuế địa phương. Nếu trong trường hợp của bạn thuế có áp dụng, bạn hãy cộng số tiền vận chuyển vào con số chưa thuế trước khi cộng thuế. Ở nhiều nước, phí giao hàng được coi là một phần của giao dịch bán hàng nên chịu cùng thuế suất với hàng hóa, nhưng cũng có nơi quy định riêng cho dịch vụ vận chuyển.',
      },
      {
        question: 'Làm sao kiểm tra phép tính VAT của nhà cung cấp?',
        answer:
          'Bạn hãy nhập tổng đã gồm thuế của họ vào chế độ Tách thuế theo mức thuế đã nêu, rồi so sánh con số chưa thuế với hóa đơn của nhà cung cấp. Nếu hai con số không khớp, có thể nhà cung cấp đã tính thuế sai, áp dụng sai thuế suất, hay làm tròn khác với bạn — và bạn nên hỏi lại họ trước khi thanh toán.',
      },
      {
        question: 'Tôi có thể tính GST cho Úc hay Canada không?',
        answer:
          'Có. GST dùng đúng công thức chưa thuế/đã gồm thuế như VAT, vì vậy bạn chỉ cần nhập số tiền và thuế suất GST địa phương — ví dụ 10% ở Úc hay 5% GST liên bang ở Canada. Lưu ý rằng Canada còn có thuế bán hàng tỉnh (PST) riêng ở một số tỉnh, nên tổng thuế thực tế có thể cao hơn mức GST liên bang 5%.',
      },
    ],
  },
  'salary-calculator': {
    instructions: [
      {
        title: 'Nhập mức lương cơ bản và kỳ trả lương',
        description:
          'Gõ số tiền lương và chọn xem con số đó là theo Giờ, Ngày, Tuần, Hai tuần, Tháng hay Năm.',
      },
      {
        title: 'Điều chỉnh giả định lịch làm việc',
        description:
          'Đặt Số giờ mỗi tuần (mặc định 40), Số ngày mỗi tuần (mặc định 5) và Số tuần được trả lương mỗi năm (mặc định 52, hoặc ít hơn nếu có nghỉ không lương).',
      },
      {
        title: 'Đổi giờ hoặc tuần cho công việc bán thời gian',
        description:
          'Giảm Số giờ mỗi tuần hoặc Số tuần được trả lương mỗi năm để mô hình hóa lịch bán thời gian, tuần làm việc 4 ngày hay nghỉ không lương.',
      },
      {
        title: 'Xem kết quả cập nhật ngay lập tức',
        description:
          'Mọi kỳ trả lương đều được tính lại khi bạn gõ, không cần bấm nút và không cần đăng ký.',
      },
      {
        title: 'So sánh mọi kỳ trả lương',
        description:
          'Xem đồng thời mọi mức lương gộp tương đương theo từng kỳ, bao gồm cả tổng số giờ làm việc hàng năm.',
      },
      {
        title: 'Sao chép các con số và so sánh các lời mời làm việc',
        description:
          'Sao chép con số lương gộp theo giờ, tháng hay năm vào bảng so sánh lời mời làm việc, ngân sách hay ghi chú đàm phán, rồi điều chỉnh dữ liệu đầu vào để so sánh các lời mời cạnh nhau.',
      },
    ],
    examples: [
      {
        title: 'Chuyển đổi chuẩn từ lương giờ sang lương năm toàn thời gian',
        input: 'Lương: $45,00 theo giờ · 40 giờ/tuần · 52 tuần/năm (2.080 giờ)',
        output: 'Năm: $93.600 · Tháng: $7.800 · Hai tuần: $3.600 · Tuần: $1.800',
        explanation: 'Dùng 2.080 giờ làm việc toàn thời gian chuẩn trong một năm.',
      },
      {
        title: 'Tuần làm việc bán thời gian 24 giờ',
        input: 'Lương: $25,00 theo giờ · 24 giờ/tuần · 52 tuần/năm',
        output: 'Năm: $31.200 · Tháng: $2.600 · Tuần: $600',
        explanation: '24 giờ × 52 tuần = 1.248 giờ mỗi năm, với $25 mỗi giờ cho ra $31.200.',
      },
    ],
    benefits: [
      'Chuyển đổi hai chiều từ bất kỳ tần suất trả lương nào, không chỉ theo giờ hay theo năm',
      'Tính tới kỳ nghỉ không lương hay thời gian nghỉ của nhà thầu qua số tuần được trả lương tùy chỉnh mỗi năm',
      'Hiển thị rõ sự khác biệt giữa trả nửa tháng (24 lần/năm) và trả hai tuần một lần (26 lần/năm)',
      'Báo cáo lương gộp mà không đưa ra phỏng đoán thuế gây hiểu lầm theo từng khu vực pháp lý',
    ],
    useCases: [
      'So sánh lời mời làm việc theo hợp đồng tính theo giờ với lương năm toàn thời gian',
      'Chuyển đổi lời mời lương năm thành ngân sách gia đình theo tháng và hai tuần một lần',
      'Tính thời gian nghỉ không lương vào ước tính thu nhập năm của nhà thầu freelance',
      'Tính lương năm cho tuần làm việc bán thời gian 24 giờ hay 32 giờ',
    ],
    faqs: [
      {
        question: 'Vì sao phiếu lương hai tuần một lần và nửa tháng một lần lại khác nhau về số tiền?',
        answer:
          'Lương hai tuần một lần phát 26 phiếu lương mỗi năm (mỗi 2 tuần một lần), còn lương nửa tháng một lần phát 24 phiếu lương mỗi năm (hai lần mỗi tháng). Với cùng một mức lương năm, mỗi phiếu lương nửa tháng sẽ lớn hơn một chút vì tổng lương năm được chia cho ít kỳ hơn, dù tổng số tiền bạn nhận trong cả năm vẫn bằng nhau.',
      },
      {
        question: 'Công cụ này có tính lương thực nhận sau thuế thu nhập không?',
        answer:
          'Không. Thuế thu nhập, các khoản khấu trừ lương và đóng góp an sinh xã hội khác nhau rất nhiều tùy quốc gia, bang, tình trạng khai thuế và các khoản giảm trừ, nên máy tính này chỉ báo cáo lương gộp xác định. Để biết lương thực nhận, bạn cần dùng máy tính thuế riêng cho khu vực và hoàn cảnh cụ thể của mình.',
      },
      {
        question: 'Nhà thầu nên xử lý kỳ nghỉ không lương và ngày phép có lương như thế nào?',
        answer:
          'Bạn hãy giảm "Số tuần được trả lương mỗi năm" từ 52 xuống 48 hay 49 để xem thu nhập gộp năm thực tế của mình sau khi đã trừ đi kỳ nghỉ không lương. Cách điều chỉnh đơn giản này giúp freelancer tránh ước tính quá cao thu nhập năm khi họ không được trả lương trong những tuần nghỉ phép hay nghỉ lễ.',
      },
      {
        question: 'Làm sao chuyển đổi $25 một giờ thành lương năm?',
        answer:
          'Với 40 giờ một tuần trong 52 tuần (2.080 giờ), 25 đô la một giờ bằng 52.000 đô la một năm tính gộp. Bạn hãy nhập số giờ của riêng mình để có con số chính xác, vì nếu bạn làm 35 giờ một tuần hay chỉ làm 48 tuần một năm thì lương năm thực tế sẽ thấp hơn con số chuẩn toàn thời gian này.',
      },
      {
        question: 'Máy tính lương có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn — không cần tài khoản hay tải lên dữ liệu. Bạn có thể so sánh bao nhiêu lời mời làm việc tùy thích, thử các lịch làm việc khác nhau và tính lại lương theo mọi kỳ trả lương mà không gặp giới hạn hay yêu cầu đăng ký nào.',
      },
      {
        question: 'Máy tính lương có hiển thị lương thực nhận sau thuế không?',
        answer:
          'Không. Công cụ chỉ hiển thị lương gộp, vì thuế thu nhập và các khoản khấu trừ khác nhau tùy quốc gia, bang và hoàn cảnh cá nhân. Lương thực nhận của bạn còn phụ thuộc vào thuế liên bang, thuế bang, bảo hiểm xã hội, bảo hiểm y tế và các khoản đóng góp hưu trí, những thứ mà không một máy tính lương gộp nào có thể đoán chính xác được.',
      },
      {
        question: 'Lương gộp và lương ròng khác nhau thế nào?',
        answer:
          'Lương gộp là thu nhập của bạn trước thuế và các khoản khấu trừ. Lương ròng (lương thực nhận) là số tiền còn lại sau khi đã trừ các khoản đó. Máy tính này báo cáo lương gộp, vì vậy khi so sánh hai lời mời làm việc, bạn hãy nhớ rằng lương gộp cao hơn chưa chắc đã cho lương thực nhận cao hơn nếu các khoản khấu trừ khác nhau.',
      },
      {
        question: 'Một năm làm việc toàn thời gian chuẩn có bao nhiêu giờ?',
        answer:
          '2.080 giờ: 40 giờ một tuần nhân với 52 tuần. Máy tính dùng con số giờ mỗi tuần do chính bạn đặt thay vì mặc định giả định con số này, nhờ đó kết quả luôn khớp với lịch làm việc thực tế của bạn, dù bạn làm 32 giờ một tuần, làm theo ca, hay làm việc bán thời gian.',
      },
      {
        question: 'Tôi có thể so sánh mức lương hợp đồng theo giờ với lời mời làm việc hưởng lương tháng không?',
        answer:
          'Có. Bạn hãy nhập mức lương theo giờ rồi so sánh con số lương gộp năm của nó với lời mời hưởng lương, đồng thời lưu ý rằng phúc lợi và ngày phép có lương cũng khác nhau. Một hợp đồng theo giờ có lương năm tương đương vẫn có thể kém hấp dẫn hơn nếu nó không có bảo hiểm y tế, ngày phép hay đóng góp hưu trí.',
      },
      {
        question: 'Làm nhà thầu, tôi tính kỳ nghỉ không lương như thế nào?',
        answer:
          'Bạn hãy giảm "Số tuần được trả lương mỗi năm" từ 52 xuống số tuần bạn thực sự được trả lương, ví dụ 48 hay 49. Cách này đặc biệt quan trọng với freelancer và nhà thầu, vì họ thường không được trả lương trong kỳ nghỉ lễ hay khi ốm, nên thu nhập năm thực tế luôn thấp hơn phép nhân đơn giản theo lương giờ nhân 2.080 giờ.',
      },
      {
        question: 'Lương nửa tháng một lần là gì?',
        answer:
          'Đó là lương được trả hai lần một tháng, 24 lần một năm, thường vào các ngày cố định như ngày 1 và ngày 15 — khác với lương hai tuần một lần, vốn được trả 26 lần một năm. Vì lương nửa tháng chia lương năm thành ít kỳ hơn, mỗi phiếu lương sẽ lớn hơn một chút so với phiếu lương hai tuần một lần.',
      },
      {
        question: 'Vì sao phiếu lương hai tuần một lần của tôi nhỏ hơn phiếu lương nửa tháng một lần?',
        answer:
          'Vì cùng một mức lương năm được chia thành 26 phiếu lương hai tuần một lần thay vì 24 phiếu lương nửa tháng một lần, nên mỗi phiếu lương hai tuần sẽ nhỏ hơn một chút. Tổng số tiền bạn nhận trong cả năm vẫn bằng nhau; chỉ có số tiền mỗi lần nhận và tần suất nhận là khác nhau giữa hai cách trả lương này.',
      },
      {
        question: 'Tôi có thể tính lương cho tuần làm việc 4 ngày không?',
        answer:
          'Có. Bạn hãy đặt Số ngày mỗi tuần là 4 và Số giờ mỗi tuần là 32 (hoặc số giờ thực tế của bạn), máy tính sẽ chuyển đổi mức lương qua mọi kỳ trả lương. Tính năng này rất hữu ích khi bạn đàm phán chuyển sang tuần làm việc 4 ngày và muốn biết chính xác lương năm của mình sẽ thay đổi ra sao.',
      },
      {
        question: 'Lương làm thêm giờ có được tính vào không?',
        answer:
          'Không. Máy tính chỉ chuyển đổi một mức lương cơ bản duy nhất. Lương làm thêm giờ với mức lương khác sẽ cần tính riêng. Nếu bạn thường xuyên làm thêm giờ với mức lương gấp rưỡi, bạn nên tính riêng khoản thu nhập làm thêm đó rồi cộng vào lương gộp năm để có bức tranh thu nhập đầy đủ hơn.',
      },
      {
        question: 'Làm sao chuyển đổi lương tháng thành lương giờ?',
        answer:
          'Bạn hãy nhập số tiền hàng tháng, chọn Tháng làm kỳ trả lương, rồi đọc con số lương giờ — công cụ sẽ chia cho số giờ mỗi tuần và số tuần được trả lương mỗi năm của bạn. Phép tính ngược này rất tiện khi bạn nhận được lời mời lương tháng và muốn biết mức lương giờ tương đương để so sánh với công việc hiện tại của mình.',
      },
      {
        question: 'Máy tính có lưu thông tin lương của tôi không?',
        answer:
          'Không. Mọi con số đều ở trong trình duyệt của bạn và không có gì được tải lên hay lưu trữ. Lương là thông tin nhạy cảm, nên việc mọi phép tính diễn ra ngay trên thiết bị của bạn giúp bạn yên tâm so sánh các lời mời làm việc mà không lo dữ liệu lương của mình bị thu thập hay rò rỉ.',
      },
      {
        question: 'Tôi nên nhập gì nếu lương của tôi thay đổi trong năm?',
        answer:
          'Bạn hãy tính riêng từng mức lương, hoặc dùng mức trung bình có trọng số của hai mức lương để có ước tính năm gần đúng. Ví dụ, nếu bạn được tăng lương giữa năm, hãy tính lương năm cho 6 tháng đầu với mức cũ và 6 tháng sau với mức mới, rồi cộng hai kết quả lại để ra thu nhập năm thực tế.',
      },
      {
        question: 'Tôi có thể dùng máy tính này cho công việc bán thời gian hay thời vụ không?',
        answer:
          'Có. Bạn hãy đặt số giờ thực tế mỗi tuần và số ngày mỗi tuần cho khớp với lịch làm việc bán thời gian của mình. Dù bạn làm 15 giờ một tuần trong kỳ học hay làm thời vụ vài tháng mỗi năm, máy tính vẫn chuyển đổi chính xác mức lương của bạn sang lương tuần, lương tháng và lương năm tương đương.',
      },
      {
        question: 'Làm sao so sánh hai lời mời làm việc có kỳ trả lương khác nhau?',
        answer:
          'Bạn hãy nhập mức lương và kỳ trả lương của từng lời mời, rồi so sánh các con số lương gộp năm cạnh nhau với cùng một thiết lập giờ và tuần. Việc quy đổi mọi lời mời về cùng một đơn vị lương năm giúp bạn so sánh công bằng, thay vì bị đánh lừa bởi một con số lương giờ có vẻ cao hay lương tháng có vẻ hấp dẫn.',
      },
      {
        question: 'Máy tính có tính tiền thưởng hay hoa hồng không?',
        answer:
          'Không. Công cụ chỉ chuyển đổi lương cơ bản. Bạn hãy cộng tiền thưởng hay hoa hồng riêng vào con số lương năm để có bức tranh đầy đủ hơn. Điều này đặc biệt quan trọng với các vị trí bán hàng, nơi hoa hồng có thể chiếm một phần lớn trong tổng thu nhập, dù lương cơ bản ghi trên hợp đồng trông khá khiêm tốn.',
      },
    ],
  },
  'tip-calculator': {
    instructions: [
      {
        title: 'Nhập tổng phụ hóa đơn và số khách',
        description:
          'Nhập Số tiền hóa đơn, Số tiền thuế bán hàng tùy chọn nếu có, và Số người cùng chia hóa đơn.',
      },
      {
        title: 'Chọn tỉ lệ tiền tip',
        description:
          'Chạm vào mức nhanh (10%, 15%, 18%, 20%, 25%) hoặc nhập bất kỳ tỉ lệ tip tùy chỉnh nào.',
      },
      {
        title: 'Loại thuế khỏi cơ sở tính tip',
        description:
          'Nếu hóa đơn của bạn có thuế bán hàng, hãy nhập số tiền thuế để tiền tip được tính trên tổng phụ trước thuế.',
      },
      {
        title: 'Xem tổng tiền ngay lập tức',
        description:
          'Tiền tip, tổng hóa đơn và số tiền mỗi người cập nhật khi bạn gõ, không cần bấm nút.',
      },
      {
        title: 'Làm tròn và chia tiền tùy chọn',
        description:
          'Bật làm tròn lên tới đô la gần nhất cho mỗi người và xem phần của từng khách.',
      },
      {
        title: 'Sao chép hoặc chia sẻ phần chia tiền',
        description:
          'Sao chép phần của mỗi người để gửi cho cả nhóm, hoặc điều chỉnh % tip để xem tổng tiền mỗi người thay đổi ra sao.',
      },
    ],
    examples: [
      {
        title: 'Chia bữa tối nhóm cho 4 người',
        input: 'Hóa đơn: $160,00 · Tip: 20% · Số người: 4',
        output: 'Tip: $32,00 · Tổng cộng: $192,00 · Mỗi người: $48,00',
        explanation: 'Cộng thêm 20% tiền tip ($32) rồi chia đều $192 cho 4 khách.',
      },
      {
        title: 'Tính tip loại trừ thuế',
        input: 'Hóa đơn: $110,00 (gồm $10 thuế) · Tip: 18% · Số người: 2',
        output: 'Tip: $18,00 (trên $100 trước thuế) · Tổng cộng: $128,00 · Mỗi người: $64,00',
        explanation: 'Tiền tip được tính trên tổng phụ trước thuế là $100, nên không tính tip trên phần thuế.',
      },
    ],
    benefits: [
      'Hỗ trợ tính tip trên tổng phụ trước thuế khi có ghi số tiền thuế bán hàng',
      'Hiển thị rõ cả Tip mỗi người và Tổng tiền mỗi người',
      'Có nút mức nhanh để dùng một chạm trên điện thoại tại nhà hàng',
      'Tính năng làm tròn tùy chọn điều chỉnh tỉ lệ tip hiệu dụng một cách minh bạch',
    ],
    useCases: [
      'Chia bữa tối nhóm tại nhà hàng mà không cần tính nhẩm lúng túng',
      'Tính tip giao hàng, xe công nghệ hay dịch vụ salon',
      'Kiểm tra chính xác tiền tip 18% hay 20% trước thuế trên biên lai chi tiết',
      'Chia đều các khoản chung trong chuyến du lịch nhóm hay sự kiện',
    ],
    faqs: [
      {
        question: 'Nên tính tip trên hóa đơn trước thuế hay sau thuế?',
        answer:
          'Theo phép lịch sự truyền thống, tiền tip được tính trên tổng phụ trước thuế. Bạn hãy nhập số tiền thuế của hóa đơn vào ô Thuế nếu muốn máy tính loại thuế khỏi cơ sở tính tip. Cách này đảm bảo bạn không vô tình trả tip trên cả phần thuế mà nhà hàng đã thu hộ cho chính quyền, và nhân viên phục vụ vẫn nhận đúng mức tip theo chuẩn.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi chia cho 1 người?',
        answer:
          'Khi Số người được đặt là 1, số tiền Mỗi người sẽ bằng đúng toàn bộ Tiền tip và Tổng hóa đơn. Trường hợp này hữu ích khi bạn chỉ muốn biết tổng tiền mình phải trả cho bữa ăn một mình, mà không cần chia cho ai khác, và công cụ vẫn hiển thị đầy đủ tiền tip cùng tổng cộng để bạn kiểm tra.',
      },
      {
        question: 'Tính năng làm tròn mỗi người hoạt động như thế nào?',
        answer:
          'Khi được bật, tổng phần của mỗi người sẽ được làm tròn lên tới đô la nguyên gần nhất, và máy tính sẽ hiển thị tỉ lệ tip hiệu dụng thu được. Ví dụ, nếu mỗi người phải trả 48,50 đô la thì sẽ làm tròn thành 49 đô la, nhờ đó cả nhóm đều trả số tiền chẵn và không ai phải loay hoay với tiền lẻ khi thanh toán.',
      },
      {
        question: 'Nên tip bao nhiêu tại nhà hàng?',
        answer:
          'Mức tip phổ biến là 15–20% cho phục vụ tại bàn ở Mỹ, nhưng phong tục khác nhau tùy quốc gia và chất lượng dịch vụ. Máy tính chỉ làm phép toán. Ở nhiều nước châu Âu, phí phục vụ đã gồm trong hóa đơn nên bạn chỉ cần để lại vài đồng lẻ, còn ở Nhật thì tip thậm chí có thể bị coi là bất lịch sự.',
      },
      {
        question: 'Làm sao tính nhanh tip 20%?',
        answer:
          'Bạn hãy dời dấu thập phân sang trái một chữ số để ra 10% của hóa đơn, rồi nhân đôi lên. Với hóa đơn 60 đô la, 10% là 6 đô la nên 20% là 12 đô la. Mẹo nhẩm này rất tiện khi bạn không có máy tính trong tay, và nó cũng là cách nhanh nhất để kiểm tra xem số tip trên biên lai có đúng hay không.',
      },
      {
        question: 'Máy tính tiền tip có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn — không cần tài khoản hay tải lên dữ liệu. Bạn có thể dùng nó ngay tại bàn ăn, tính tip cho bao nhiêu bữa tùy thích mà không cần cài ứng dụng, đăng ký tài khoản hay lo bị tính phí ẩn sau vài lần sử dụng.',
      },
      {
        question: 'Tôi có nên tip trên tổng tiền đã gồm thuế không?',
        answer:
          'Theo truyền thống, tiền tip được tính trên tổng phụ trước thuế. Bạn hãy nhập số tiền thuế vào ô Thuế để loại nó khỏi cơ sở tính tip. Dù một số người vẫn tip trên tổng đã gồm thuế cho đơn giản, cách tính trước thuế mới là chuẩn mực lịch sự phổ biến, và nó cũng giúp bạn tiết kiệm một khoản nhỏ trên mỗi bữa ăn.',
      },
      {
        question: 'Mức tip tốt cho giao hàng là bao nhiêu?',
        answer:
          'Phong tục tip giao hàng khác nhau tùy khu vực và quy mô đơn hàng. Bạn hãy nhập bất kỳ tỉ lệ tùy chỉnh nào vào máy tính cho khớp với mức bạn quyết định. Với đơn hàng nhỏ hay thời tiết xấu, nhiều người thường tip cao hơn mức chuẩn, còn với đơn hàng lớn thì tỉ lệ phần trăm có thể thấp hơn nhưng tổng số tiền tip vẫn đáng kể.',
      },
      {
        question: 'Làm sao chia hóa đơn khi mọi người gọi món với giá khác nhau?',
        answer:
          'Máy tính này chia đều. Với các phần không bằng nhau, bạn hãy tính riêng tiền tip của từng người trên tổng phụ của chính họ. Cách này công bằng hơn khi một người chỉ gọi salad còn người khác gọi món chính đắt tiền, và bạn có thể chạy máy tính nhiều lần, mỗi lần cho một người, để ra con số chính xác cho từng thành viên trong nhóm.',
      },
      {
        question: 'Tôi có thể tip tỉ lệ tùy chỉnh như 17% không?',
        answer:
          'Có. Bạn hãy gõ bất kỳ tỉ lệ phần trăm nào vào ô tip tùy chỉnh thay vì dùng các mức nhanh. Tính năng này hữu ích khi bạn muốn tip đúng 17% cho dịch vụ ở mức khá, hay khi nhà hàng gợi ý mức tip không có trong danh sách nhanh, và bạn vẫn muốn con số chính xác tới từng phần trăm.',
      },
      {
        question: 'Số tiền mỗi người bao gồm những gì?',
        answer:
          'Số tiền mỗi người gồm phần hóa đơn của người đó cộng với phần tip của người đó. Khi bật làm tròn, số tiền sẽ được làm tròn lên tới đô la nguyên gần nhất. Nhờ đó, khi bạn gửi con số này cho cả nhóm, mọi người đều biết chính xác mình cần chuyển bao nhiêu, không cần ai phải tính lại hay tranh cãi về phần lẻ.',
      },
      {
        question: 'Làm tròn làm thay đổi tỉ lệ tip hiệu dụng như thế nào?',
        answer:
          'Việc làm tròn phần của mỗi người lên sẽ cộng thêm một khoản nhỏ lên trên tiền tip, nên máy tính hiển thị tỉ lệ tip hiệu dụng thu được. Ví dụ, làm tròn mỗi phần lên thêm 50 xu cho 4 người sẽ cộng thêm 2 đô la vào tổng tip, và tỉ lệ hiệu dụng có thể tăng từ 20% lên khoảng 21% — một sự thay đổi nhỏ nhưng đáng để bạn biết rõ.',
      },
      {
        question: 'Tôi có thể dùng Máy tính tiền tip cho tip salon hay taxi không?',
        answer:
          'Có. Bạn hãy nhập tổng tiền dịch vụ và tỉ lệ tip mình chọn; phép toán tương tự áp dụng cho mọi dịch vụ có tip. Dù là cắt tóc, làm móng, đi taxi hay giao đồ ăn, cách tính phần trăm trên tổng tiền dịch vụ đều giống nhau, và tính năng chia tiền cũng hữu ích khi nhiều người cùng đi chung một chuyến xe.',
      },
      {
        question: 'Máy tính có lưu số tiền hóa đơn của tôi không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn và không có gì được tải lên hay lưu trữ. Bạn có thể yên tâm nhập số tiền bữa ăn, địa điểm nhà hàng hay số người trong nhóm mà không lo dữ liệu bị thu thập, vì tất cả đều biến mất ngay khi bạn đóng thẻ trình duyệt.',
      },
      {
        question: 'Nếu hóa đơn đã gồm phí dịch vụ thì sao?',
        answer:
          'Bạn hãy kiểm tra xem phí dịch vụ đó có phải là tiền tip hay không. Nếu đúng là vậy, bạn có thể không cần tip thêm, và có thể nhập 0% để xem phần chia tiền không có tip. Ở nhiều nhà hàng, phí dịch vụ 15–20% đã bao gồm tiền tip cho nhân viên, nên tip thêm sẽ thành trả trùng hai lần cho cùng một dịch vụ.',
      },
      {
        question: 'Làm sao chia hóa đơn cho 3 người khi tổng tiền lẻ?',
        answer:
          'Bạn hãy nhập hóa đơn, % tip và 3 người. Máy tính sẽ chia đều tổng tiền và hiển thị phần chính xác của mỗi người. Ngay cả khi tổng tiền chia cho 3 ra số lẻ khó chia, công cụ vẫn tính đúng tới từng xu, và bạn có thể bật làm tròn để mỗi người trả một số tiền chẵn dễ chuyển khoản hơn.',
      },
      {
        question: 'Tôi có thể tính tip trước thuế nếu chỉ biết tổng tiền không?',
        answer:
          'Bạn cần số tiền thuế hoặc tổng phụ trước thuế thì mới tính tip trước thuế được. Nếu biên lai chỉ hiển thị tổng tiền, bạn hãy dùng toàn bộ tổng tiền làm cơ sở tính tip. Trong trường hợp này, bạn có thể ước tính thuế bằng cách hỏi nhân viên phục vụ, hoặc kiểm tra dòng thuế thường in ở cuối biên lai chi tiết.',
      },
      {
        question: 'Các mức nhanh bao gồm những tỉ lệ tip nào?',
        answer:
          'Các mức nhanh là 10%, 15%, 18%, 20% và 25%, và bạn có thể nhập bất kỳ tỉ lệ nào khác dưới dạng giá trị tùy chỉnh. Năm mức này bao phủ hầu hết các chuẩn tip phổ biến: 10% cho dịch vụ cơ bản, 15–18% cho dịch vụ tốt, và 20–25% cho dịch vụ xuất sắc hay những dịp đặc biệt.',
      },
      {
        question: 'Chia đều hóa đơn có bất lịch sự không?',
        answer:
          'Điều đó còn tùy thuộc vào nhóm và mọi người đã gọi món gì. Máy tính chỉ giúp phép toán chia đều trở nên tức thì. Nếu mọi người gọi món tương đương nhau thì chia đều là cách nhanh gọn và công bằng nhất; còn nếu chênh lệch quá lớn, cả nhóm nên thỏa thuận chia theo món đã gọi để không ai cảm thấy thiệt thòi.',
      },
      {
        question: 'Làm sao tính tip trên hóa đơn nhóm lớn?',
        answer:
          'Bạn hãy nhập tổng tiền hóa đơn đầy đủ và số lượng khách. Máy tính sẽ hiển thị tiền tip, tổng cộng và số tiền mỗi người phải trả. Với nhóm lớn, nhiều nhà hàng còn tự động cộng phí phục vụ 18–20% vào hóa đơn, nên bạn hãy kiểm tra kỹ biên lai trước khi tính thêm tip để tránh trả trùng.',
      },
    ],
  },
  'bmi-calculator': {
    instructions: [
      {
        title: 'Chọn hệ đơn vị',
        description:
          'Chuyển đổi giữa hệ Mét (cm / kg) và hệ Anh (ft, in / lbs).',
      },
      {
        title: 'Nhập chiều cao và cân nặng',
        description:
          'Nhập chiều cao và cân nặng hiện tại của bạn vào các ô đã kiểm tra hợp lệ.',
      },
      {
        title: 'Kiểm tra lại đơn vị của bạn',
        description:
          'Hãy chắc chắn xăng-ti-mét đi với ki-lô-gam và feet/inch đi với pound, nếu không kết quả sẽ sai.',
      },
      {
        title: 'Xem BMI của bạn ngay lập tức',
        description:
          'Điểm số, nhóm phân loại của WHO và khoảng cân nặng khỏe mạnh cập nhật khi bạn gõ, không cần bấm nút.',
      },
      {
        title: 'Xem BMI và bối cảnh',
        description:
          'Kiểm tra điểm BMI, nhóm phân loại của WHO và khoảng cân nặng khỏe mạnh tương ứng với chiều cao của bạn.',
      },
      {
        title: 'Ghi lại hoặc chia sẻ kết quả',
        description:
          'Sao chép BMI và khoảng cân nặng khỏe mạnh của bạn để theo dõi theo thời gian hoặc trao đổi với bác sĩ, và nhập lại số đo mới mỗi khi cân nặng thay đổi.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra BMI người trưởng thành theo hệ mét',
        input: 'Chiều cao: 175 cm · Cân nặng: 70 kg',
        output: 'BMI: 22,9 kg/m² · Nhóm WHO: Cân nặng bình thường (56,7 – 76,3 kg)',
        explanation: 'Tính theo 70 / (1,75 × 1,75) = 22,86 kg/m².',
      },
      {
        title: 'Kiểm tra BMI theo hệ Anh',
        input: 'Chiều cao: 5 ft 9 in · Cân nặng: 160 lbs',
        output: 'BMI: 23,6 kg/m² · Nhóm WHO: Cân nặng bình thường',
        explanation: 'Dùng công thức hệ Anh (cân nặng lbs × 703) ÷ (chiều cao in)².',
      },
    ],
    benefits: [
      'Hỗ trợ chuyển đổi ngay lập tức giữa hệ Mét và hệ Anh của Mỹ',
      'Tính khoảng cân nặng khỏe mạnh chính xác 18,5–24,9 kg/m² cho chiều cao của bạn',
      'Có ghi chú rõ ràng về giới hạn lâm sàng liên quan tới khối lượng cơ và thành phần cơ thể',
      'Chạy riêng tư trong bộ nhớ trình duyệt, không lưu trữ dữ liệu sức khỏe nào',
    ],
    useCases: [
      'Kiểm tra sàng lọc nhanh tỉ lệ cân nặng trên chiều cao cho người trưởng thành',
      'Tìm khoảng cân nặng khỏe mạnh mục tiêu cho một chiều cao cụ thể',
      'Kết hợp với kế hoạch calo hàng ngày và TDEE',
      'Chuyển đổi số đo chiều cao/cân nặng hệ Anh thành BMI chuẩn kg/m²',
    ],
    faqs: [
      {
        question: 'Công thức tính Chỉ số khối cơ thể (BMI) là gì?',
        answer:
          'BMI bằng cân nặng tính bằng ki-lô-gam chia cho chiều cao tính bằng mét bình phương: cân nặng (kg) / chiều cao (m)². Theo đơn vị Anh, công thức tương đương là (cân nặng (lbs) × 703) / chiều cao (in)². Cả hai công thức cho ra cùng một thang đo, nên bạn có thể dùng hệ đơn vị nào quen thuộc hơn mà kết quả vẫn giống nhau.',
      },
      {
        question: 'BMI có chính xác với vận động viên hay người lớn tuổi không?',
        answer:
          'BMI là tỉ lệ sàng lọc ở cấp độ dân số và không phân biệt khối lượng cơ nạc với mỡ cơ thể. Vận động viên rất cơ bắp có thể rơi vào nhóm thừa cân dù tỉ lệ mỡ cơ thể thấp, còn trẻ em và thanh thiếu niên cần dùng biểu đồ bách phân vị theo tuổi và giới tính.',
      },
      {
        question: 'Thông tin sức khỏe của tôi có được lưu ở đâu không?',
        answer:
          'Không. Mọi số đo đều chỉ nằm trong thẻ trình duyệt đang mở của bạn và sẽ biến mất khi bạn đóng thẻ. Không có tài khoản, không có máy chủ lưu trữ, và không có bên thứ ba nào nhìn thấy chiều cao hay cân nặng của bạn, vì vậy bạn có thể kiểm tra BMI một cách hoàn toàn riêng tư.',
      },
      {
        question: 'Khoảng BMI khỏe mạnh là bao nhiêu?',
        answer:
          'Tổ chức Y tế Thế giới (WHO) xác định 18,5–24,9 kg/m² là khoảng cân nặng bình thường cho người trưởng thành. Dưới 18,5 là thiếu cân và 25–29,9 là thừa cân. Khoảng này được xây dựng từ dữ liệu dân số lớn, nhưng nó chỉ là hướng dẫn chung — sức khỏe thực tế của bạn còn phụ thuộc vào nhiều yếu tố khác như huyết áp, mỡ bụng và thói quen vận động.',
      },
      {
        question: 'Máy tính BMI có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí và chạy toàn bộ trong trình duyệt của bạn — không cần tài khoản hay tải lên dữ liệu. Bạn có thể kiểm tra BMI bao nhiêu lần tùy thích, thử các mức cân nặng mục tiêu khác nhau để xem mình cần tăng hay giảm bao nhiêu ki-lô-gam mới về lại khoảng khỏe mạnh.',
      },
      {
        question: 'Các nhóm BMI của WHO là gì?',
        answer:
          'Thiếu cân là dưới 18,5, cân nặng bình thường là 18,5–24,9, thừa cân là 25–29,9, và béo phì là từ 30 trở lên. Các ngưỡng này áp dụng cho người trưởng thành ở cả hai giới, và chúng được dùng rộng rãi trong y tế để sàng lọc nhanh nguy cơ sức khỏe liên quan tới cân nặng trên quy mô dân số lớn.',
      },
      {
        question: 'Làm sao tính BMI bằng pound và inch?',
        answer:
          'Bạn hãy dùng công thức (cân nặng tính bằng lbs × 703) ÷ (chiều cao tính bằng inch)². Máy tính sẽ tự động làm việc này trong chế độ hệ Anh. Ví dụ, một người cao 5 ft 9 in (69 inch) nặng 160 lbs sẽ có BMI khoảng 23,6, nằm trong khoảng cân nặng bình thường của WHO.',
      },
      {
        question: 'Làm sao tính BMI bằng ki-lô-gam và xăng-ti-mét?',
        answer:
          'Bạn hãy chia cân nặng tính bằng kg cho chiều cao tính bằng mét bình phương. Máy tính sẽ tự đổi xăng-ti-mét của bạn sang mét cho bạn. Ví dụ, người cao 175 cm nặng 70 kg có BMI là 70 chia cho 1,75 bình phương, tức khoảng 22,9 — một con số nằm gọn trong khoảng khỏe mạnh.',
      },
      {
        question: 'BMI có chính xác với mọi người không?',
        answer:
          'Không. BMI là tỉ lệ sàng lọc không phân biệt được cơ với mỡ, nên người rất cơ bắp, người lớn tuổi và trẻ em cần được đánh giá bằng phương pháp khác. Với người lớn tuổi, khối lượng cơ giảm tự nhiên có thể khiến BMI trông bình thường dù tỉ lệ mỡ cơ thể đã cao, vì vậy bác sĩ thường kết hợp thêm vòng eo và các chỉ số khác.',
      },
      {
        question: 'Trẻ em có thể dùng Máy tính BMI này không?',
        answer:
          'Không. BMI của trẻ em được diễn giải bằng biểu đồ bách phân vị theo tuổi và giới tính, chứ không phải thang của WHO dành cho người lớn, nên công cụ này chỉ dành cho người trưởng thành. Trẻ em đang lớn rất nhanh nên cùng một con số BMI có thể là bình thường ở tuổi này nhưng lại bất thường ở tuổi khác, vì vậy cần có bảng riêng cho từng độ tuổi.',
      },
      {
        question: 'Khoảng cân nặng khỏe mạnh của tôi là bao nhiêu?',
        answer:
          'Máy tính hiển thị khoảng cân nặng cho ra BMI 18,5–24,9 với chiều cao của bạn — ví dụ, khoảng 56,7–76,3 kg ở chiều cao 175 cm. Khoảng này cho bạn một mục tiêu cụ thể: nếu cân nặng hiện tại nằm ngoài khoảng, bạn sẽ biết mình cần tăng hay giảm khoảng bao nhiêu ki-lô-gam để quay về vùng khỏe mạnh.',
      },
      {
        question: 'Tôi nên kiểm tra BMI bao lâu một lần?',
        answer:
          'Thỉnh thoảng là đủ, chẳng hạn như hàng tháng khi bạn đang theo dõi thay đổi cân nặng. BMI là con số sàng lọc chứ không phải phán quyết sức khỏe hàng ngày. Việc cân đo hàng ngày có thể gây lo lắng không cần thiết vì cân nặng dao động tự nhiên theo nước trong cơ thể, bữa ăn và thời điểm đo trong ngày.',
      },
      {
        question: 'BMI có đo tỉ lệ mỡ cơ thể không?',
        answer:
          'Không. BMI chỉ liên hệ cân nặng với chiều cao và không thể cho biết bao nhiêu phần cân nặng của bạn là mỡ so với cơ hay xương. Hai người có cùng BMI hoàn toàn có thể có thành phần cơ thể rất khác nhau — một người cơ bắp và một người nhiều mỡ — nên muốn biết tỉ lệ mỡ chính xác, bạn cần đo bằng phương pháp chuyên biệt khác.',
      },
      {
        question: 'Tôi nên làm gì nếu BMI của mình nằm trong khoảng thừa cân?',
        answer:
          'Bạn hãy coi đó là gợi ý để xem lại chế độ ăn, vận động và sức khỏe tổng thể cùng bác sĩ. Một con số BMI đơn lẻ không phải là chẩn đoán. Bác sĩ có thể đo thêm huyết áp, đường huyết, cholesterol và vòng eo để đánh giá nguy cơ thực tế, rồi cùng bạn xây dựng kế hoạch thay đổi lối sống phù hợp và bền vững.',
      },
      {
        question: 'Tôi có thể dùng BMI khi đang mang thai không?',
        answer:
          'Không. Mang thai làm thay đổi cân nặng theo cách mà BMI không tính tới, nên các nhóm phân loại chuẩn không áp dụng được. Trong thai kỳ, bác sĩ theo dõi mức tăng cân dựa trên BMI trước khi mang thai và tuần thai hiện tại, với các hướng dẫn riêng cho từng nhóm cân nặng ban đầu thay vì dùng thang BMI thông thường.',
      },
      {
        question: 'Dữ liệu chiều cao và cân nặng của tôi có được lưu ở đâu không?',
        answer:
          'Không. Số đo của bạn chỉ nằm trong thẻ trình duyệt và sẽ biến mất khi bạn đóng thẻ. Không giống như nhiều ứng dụng sức khỏe yêu cầu tạo tài khoản và đồng bộ dữ liệu lên đám mây, công cụ này xử lý mọi thứ ngay trên thiết bị của bạn, nên thông tin sức khỏe nhạy cảm không bao giờ rời khỏi máy của bạn.',
      },
      {
        question: 'Vì sao máy tính hỏi chiều cao bằng feet và inch?',
        answer:
          'Chế độ hệ Anh chấp nhận feet và inch vì đó là cách chiều cao thường được đo ở Mỹ. Chế độ hệ Mét dùng xăng-ti-mét thay thế. Bạn có thể chuyển đổi qua lại giữa hai hệ bất cứ lúc nào, và máy tính sẽ tự đổi số đo của bạn sang hệ còn lại để bạn kiểm tra kết quả theo đơn vị mình quen thuộc nhất.',
      },
      {
        question: 'BMI và BMR khác nhau thế nào?',
        answer:
          'BMI liên hệ cân nặng với chiều cao, còn BMR (tỉ lệ trao đổi chất cơ bản) ước tính lượng calo cơ thể bạn đốt cháy khi nghỉ ngơi — chúng đo hai thứ khác nhau. BMI cho biết bạn có đang ở mức cân nặng hợp lý so với chiều cao hay không, còn BMR cho biết cơ thể bạn cần bao nhiêu năng lượng mỗi ngày để duy trì các chức năng sống cơ bản.',
      },
      {
        question: 'Vận động viên có thể có BMI cao mà vẫn khỏe mạnh không?',
        answer:
          'Có. Cơ bắp rất đặc, nên một vận động viên rất cơ bắp có thể được xếp là thừa cân theo BMI dù tỉ lệ mỡ cơ thể thấp. Công cụ này có ghi chú rõ về giới hạn đó. Với vận động viên, các chỉ số như tỉ lệ mỡ cơ thể, sức mạnh, sức bền và các xét nghiệm máu phản ánh sức khỏe chính xác hơn nhiều so với một con số BMI đơn lẻ.',
      },
      {
        question: 'Kết quả BMI chính xác tới mức nào?',
        answer:
          'Phép toán là chính xác với các con số bạn nhập, nhưng kết quả chỉ chính xác bằng độ chính xác của số đo chiều cao và cân nặng của bạn. Bạn nên đo chiều cao không mang giày và cân vào buổi sáng sau khi đi vệ sinh để có số đo ổn định nhất, và nhớ rằng BMI chỉ là một phần trong bức tranh sức khỏe tổng thể của bạn.',
      },
    ],
  },
  'calorie-calculator': {
    instructions: [
      {
        title: 'Chọn đơn vị và hồ sơ',
        description:
          'Chọn đơn vị Mét hay Anh, hằng số tham chiếu sinh học Nam hay Nữ, rồi nhập tuổi, chiều cao và cân nặng.',
      },
      {
        title: 'Chọn mức độ vận động hàng tuần',
        description:
          'Chọn hệ số vận động từ Ít vận động (1,2×) tới Rất năng động (1,9×) sao cho phản ánh đúng thói quen thực tế của bạn.',
      },
      {
        title: 'Đặt mục tiêu cân nặng',
        description:
          'Chọn duy trì cân nặng, thâm hụt nhẹ, giảm mỡ tiêu chuẩn hay tăng cơ nạc để xem mục tiêu calo hàng ngày phù hợp với mục tiêu của bạn.',
      },
      {
        title: 'Xem các mục tiêu calo hàng ngày',
        description:
          'So sánh TDEE duy trì, mức thâm hụt Giảm cân nhẹ/Tiêu chuẩn, mức thặng dư Tăng cơ nạc và lượng macro tham chiếu theo gam.',
      },
      {
        title: 'Kiểm tra mục tiêu macro theo gam',
        description:
          'Đọc lượng protein, carbohydrate và chất béo tham chiếu theo gam cho mục tiêu calo bạn đã chọn rồi điều chỉnh cho phù hợp với chế độ ăn của mình.',
      },
      {
        title: 'Lưu lại và kiểm tra lại các con số',
        description:
          'Ghi lại các mục tiêu của bạn, chạy lại phép tính nếu cân nặng hay mức vận động thay đổi, và theo dõi xu hướng cân nặng thực tế trong 2 tới 3 tuần trước khi điều chỉnh lượng ăn vào.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra duy trì cân nặng cho người trưởng thành vận động vừa phải',
        input: 'Nam · 30 tuổi · 175 cm · 72 kg · Vận động vừa phải (1,55×)',
        output: 'BMR: 1.669 kcal · TDEE duy trì: 2.587 kcal/ngày · Giảm 0,5 kg/tuần: 2.087 kcal/ngày',
        explanation: 'Áp dụng BMR Mifflin-St Jeor × hệ số vận động 1,55 rồi trừ 500 kcal để giảm khoảng 0,5 kg mỗi tuần.',
      },
      {
        title: 'Kiểm tra duy trì cân nặng cho nữ vận động nhẹ',
        input: 'Nữ · 40 tuổi · 165 cm · 65 kg · Vận động nhẹ (1,375×)',
        output: 'BMR: 1.320 kcal · TDEE duy trì: 1.815 kcal/ngày',
        explanation: 'Công thức Mifflin-St Jeor với hằng số tham chiếu nữ tính BMR từ tuổi, chiều cao và cân nặng.',
      },
    ],
    benefits: [
      'Dùng công thức dự báo BMR Mifflin-St Jeor được chấp nhận rộng rãi',
      'Áp dụng cảnh báo sàn 1.200 kcal trên các dự báo thâm hụt để nâng cao nhận thức an toàn',
      'Đưa ra lượng tham chiếu theo gam cho Protein, Carbohydrate và Chất béo cân bằng',
      'Hỗ trợ cả đơn vị Mét (cm/kg) và đơn vị Anh của Mỹ (ft, in/lbs)',
    ],
    useCases: [
      'Đặt ngân sách calo hàng ngày khởi đầu thực tế để theo dõi dinh dưỡng',
      'Ước tính mức tiêu hao năng lượng thay đổi ra sao qua các mức vận động',
      'Chuyển đổi calo duy trì thành lượng protein, carb và chất béo hàng ngày theo gam',
      'Lập kế hoạch thâm hụt dần dần 250–500 kcal thay vì ăn kiêng khắc nghiệt không bền vững',
    ],
    faqs: [
      {
        question: 'Vì sao máy tính này dùng phương trình Mifflin-St Jeor?',
        answer:
          'Nghiên cứu dinh dưỡng luôn xếp Mifflin-St Jeor vào nhóm công thức chính xác nhất cho dân số chung khi ước tính mức tiêu hao năng lượng lúc nghỉ từ tuổi, giới tính, chiều cao và cân nặng. So với các công thức cũ hơn như Harris-Benedict, Mifflin-St Jeor cho kết quả sát với thực tế đo được hơn ở người trưởng thành hiện đại, nên nó được dùng rộng rãi trong các ứng dụng dinh dưỡng và lâm sàng.',
      },
      {
        question: 'Hệ số vận động chính xác tới mức nào?',
        answer:
          'Hệ số vận động cho ước tính khởi đầu dựa trên bằng chứng. Bạn hãy theo dõi xu hướng cân nặng trong 2–3 tuần rồi điều chỉnh lượng ăn hàng ngày thêm hoặc bớt 100–200 kcal dựa trên tiến triển thực tế. Nếu cân nặng không đổi dù bạn đã ăn đúng mục tiêu, có thể mức vận động thực tế của bạn thấp hơn mức bạn chọn, và bạn cần hạ hệ số xuống một bậc.',
      },
      {
        question: 'Đây có phải là lời khuyên dinh dưỡng y tế hay lâm sàng không?',
        answer:
          'Không. Các dự báo chỉ là ước tính mang tính thông tin; bạn hãy tham khảo ý kiến bác sĩ hoặc chuyên gia dinh dưỡng đã đăng ký hành nghề để được hướng dẫn dinh dưỡng y tế cá nhân hóa. Điều này đặc biệt quan trọng nếu bạn có bệnh lý như tiểu đường, bệnh thận, rối loạn ăn uống, hay đang dùng thuốc ảnh hưởng tới trao đổi chất và nhu cầu năng lượng.',
      },
      {
        question: 'BMR là gì và khác TDEE như thế nào?',
        answer:
          'BMR là năng lượng cơ thể bạn dùng khi nghỉ ngơi hoàn toàn để duy trì các chức năng cơ bản như thở, tuần hoàn và duy trì thân nhiệt. TDEE cộng thêm lượng calo đốt cháy qua vận động hàng ngày và tập luyện vào BMR của bạn. Nói cách khác, BMR là mức sàn năng lượng khi bạn nằm yên cả ngày, còn TDEE là tổng năng lượng bạn thực sự tiêu hao trong một ngày bình thường.',
      },
      {
        question: 'Máy tính calo làm gì với tuổi, chiều cao và cân nặng của tôi?',
        answer:
          'Công cụ đưa chúng vào phương trình Mifflin-St Jeor để ước tính BMR của bạn, rồi nhân BMR đó với mức vận động của bạn để ước tính TDEE và các mục tiêu calo hàng ngày. Tuổi càng cao thì BMR càng giảm, cân nặng càng lớn thì BMR càng cao, và chiều cao cũng ảnh hưởng tới diện tích bề mặt cơ thể — tất cả đều được công thức tính tới một cách có hệ thống.',
      },
      {
        question: 'Làm sao chọn đúng mức vận động trong Máy tính calo?',
        answer:
          'Bạn hãy chọn mức khớp với một tuần điển hình, chứ không phải ngày bận rộn nhất của mình. Hầu hết nhân viên văn phòng tập thể dục vài lần một tuần thuộc nhóm Vận động nhẹ hoặc Vận động vừa phải. Mức đúng phải phản ánh trung bình cả tuần, kể cả những ngày bạn ngồi làm việc cả ngày.',
      },
      {
        question: 'Mức thâm hụt calo an toàn để giảm cân là bao nhiêu?',
        answer:
          'Điểm khởi đầu phổ biến là thâm hụt 250 tới 500 kcal mỗi ngày, nhắm tới mức giảm dần khoảng 0,25 tới 0,5 kg mỗi tuần. Mức thâm hụt lớn hơn nên được thảo luận với chuyên gia y tế. Giảm cân quá nhanh không chỉ khó duy trì mà còn có thể làm mất cơ bắp, gây mệt mỏi và rối loạn hormone, nên tốc độ chậm mà chắc luôn là lựa chọn an toàn hơn.',
      },
      {
        question: 'Tôi nên ăn bao nhiêu calo để tăng cân một cách nạc?',
        answer:
          'Công cụ hiển thị mức thặng dư Tăng cơ nạc trên TDEE duy trì của bạn làm mục tiêu khởi đầu. Bạn hãy theo dõi cân nặng trong vài tuần rồi điều chỉnh mức thặng dư lên hoặc xuống dựa trên thay đổi thực tế. Mục tiêu là tăng khoảng 0,25–0,5 kg mỗi tuần, chủ yếu là cơ bắp nhờ tập luyện sức mạnh và ăn đủ protein, chứ không phải tăng nhanh toàn mỡ.',
      },
      {
        question: 'Vì sao Máy tính calo hiển thị cảnh báo sàn 1.200 kcal?',
        answer:
          'Các mục tiêu calo rất thấp có thể không an toàn và khó duy trì, nên công cụ gắn cờ những mức thâm hụt rơi xuống dưới 1.200 kcal để nâng cao nhận thức về an toàn. Ăn dưới mức này trong thời gian dài có thể gây thiếu hụt dinh dưỡng, suy giảm miễn dịch và rối loạn hormone, vì vậy bạn nên tham khảo ý kiến chuyên gia trước khi áp dụng mức calo quá thấp.',
      },
      {
        question: 'Các mục tiêu macro mà Máy tính calo hiển thị là gì?',
        answer:
          'Đó là lượng tham chiếu theo gam cho protein, carbohydrate và chất béo ăn vào, cộng lại thành mục tiêu calo hàng ngày bạn đã chọn. Chúng là tỉ lệ phân bổ khởi đầu chứ không phải chế độ ăn được kê đơn. Bạn có thể điều chỉnh tỉ lệ này theo mục tiêu của mình.',
      },
      {
        question: 'Máy tính calo có tính được cho đơn vị Mét và đơn vị Anh không?',
        answer:
          'Có. Bạn có thể nhập chiều cao và cân nặng bằng xăng-ti-mét và ki-lô-gam, hoặc bằng feet, inch và pound, và kết quả vẫn như nhau. Máy tính tự động chuyển đổi đơn vị bên trong trước khi đưa vào công thức Mifflin-St Jeor, nên bạn chỉ cần dùng hệ đơn vị mình quen thuộc nhất mà không cần tự đổi số đo rồi lo nhập sai.',
      },
      {
        question: 'Tôi có thể dùng Máy tính calo nếu mình rất năng động hay là vận động viên không?',
        answer:
          'Có, mức Rất năng động bao phủ công việc thể chất nặng nhọc hay tập luyện cường độ cao hàng ngày, nhưng vận động viên có thành phần cơ thể bất thường có thể thấy ước tính kém chính xác hơn. Vận động viên cơ bắp nhiều thường có BMR thực tế cao hơn công thức dự báo, vì công thức chỉ dùng tổng cân nặng mà không phân biệt được cơ với mỡ.',
      },
      {
        question: 'Vì sao TDEE của tôi thay đổi khi tôi đổi mức vận động?',
        answer:
          'TDEE bằng BMR của bạn nhân với hệ số vận động, nên mức vận động cao hơn làm hệ số tăng lên và do đó làm tăng nhu cầu calo hàng ngày ước tính của bạn. Ví dụ, cùng một BMR 1.669 kcal, mức Ít vận động (1,2×) cho TDEE khoảng 2.003 kcal, còn mức Vận động vừa phải (1,55×) cho TDEE khoảng 2.587 kcal — chênh lệch gần 600 kcal mỗi ngày.',
      },
      {
        question: 'Tôi nên tính lại lượng calo bao lâu một lần?',
        answer:
          'Bạn hãy tính lại mỗi khi cân nặng, mức vận động hay mục tiêu của mình thay đổi, hoặc khoảng mỗi 4 tới 8 tuần trong lúc đang tích cực giảm hay tăng cân. Khi bạn nhẹ cân hơn, BMR và TDEE của bạn cũng giảm theo, nên mục tiêu calo cũ sẽ dần trở nên quá cao cho cân nặng mới và khiến quá trình giảm cân chững lại nếu không được cập nhật.',
      },
      {
        question: 'Máy tính calo có lưu hay tải lên dữ liệu cá nhân của tôi không?',
        answer:
          'Không. Mọi phép tính đều chạy ngay trong trình duyệt của bạn, và tuổi, chiều cao, cân nặng cùng lựa chọn vận động của bạn không bao giờ được tải lên hay lưu vào máy chủ. Bạn có thể yên tâm nhập các số đo cơ thể thật của mình mà không lo dữ liệu sức khỏe nhạy cảm bị thu thập hay chia sẻ cho các công ty quảng cáo.',
      },
      {
        question: 'Máy tính calo có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí khi dùng trong trình duyệt của bạn, không cần tài khoản, không cần đăng ký và không giới hạn số lần bạn tính lại. Bạn có thể quay lại bất cứ lúc nào để tính lại mục tiêu sau khi cân nặng thay đổi, thử các mức vận động khác nhau, hay lập kế hoạch cho một mục tiêu mới mà không tốn bất kỳ chi phí nào.',
      },
      {
        question: 'Máy tính calo có giúp tôi lập kế hoạch thâm hụt 500 kcal không?',
        answer:
          'Có. Mục tiêu Giảm cân tiêu chuẩn trừ khoảng 500 kcal mỗi ngày khỏi TDEE duy trì của bạn, nhắm tới mức giảm khoảng 0,5 kg mỗi tuần. Đây là mức thâm hụt kinh điển được nhiều chuyên gia dinh dưỡng khuyến nghị vì nó đủ lớn để thấy tiến triển rõ rệt sau vài tuần, nhưng vẫn đủ nhẹ để bạn duy trì lâu dài mà không cảm thấy kiệt sức.',
      },
      {
        question: 'Tôi nên làm gì nếu cân nặng không thay đổi sau khi theo đúng mục tiêu?',
        answer:
          'Trước tiên, bạn hãy kiểm tra xem mức vận động và việc ghi chép thực phẩm của mình có trung thực và nhất quán trong 2 tới 3 tuần hay không. Nếu cân nặng vẫn không nhúc nhích, bạn hãy điều chỉnh lượng ăn vào thêm hoặc bớt 100 tới 200 kcal rồi tiếp tục theo dõi.',
      },
      {
        question: 'Máy tính calo có tính tới tỉ lệ mỡ cơ thể không?',
        answer:
          'Không. Phương trình Mifflin-St Jeor chỉ dùng tuổi, giới tính, chiều cao và tổng cân nặng, nên nó không thể phân biệt cơ với mỡ cơ thể. Hai người cùng tuổi, cùng chiều cao và cùng cân nặng sẽ nhận được cùng một BMR ước tính, dù một người cơ bắp và một người nhiều mỡ có nhu cầu năng lượng thực tế khác nhau đáng kể.',
      },
      {
        question: 'Thanh thiếu niên hay người lớn tuổi có thể dùng Máy tính calo không?',
        answer:
          'Công thức được thiết kế cho người trưởng thành, nên kết quả với thanh thiếu niên hay người rất lớn tuổi chỉ là ước tính gần đúng. Người trẻ nên nhận hướng dẫn dinh dưỡng từ cha mẹ và chuyên gia y tế, vì nhu cầu năng lượng trong giai đoạn phát triển khác hẳn với người trưởng thành, và việc ăn kiêng sai cách ở tuổi này có thể ảnh hưởng tới tăng trưởng.',
      },
    ],
  },
  'date-difference-calculator': {
    instructions: [
      {
        title: 'Chọn Chênh lệch hoặc Cộng/Trừ',
        description:
          'Chọn Chênh lệch giữa các ngày để so sánh hai ngày, hoặc Cộng / Trừ thời gian để tính ngày trong tương lai hay quá khứ.',
      },
      {
        title: 'Chọn ngày và tùy chọn',
        description:
          'Nhập ngày Bắt đầu và ngày Kết thúc (dùng nút hoán đổi bất cứ lúc nào) và tùy chọn đánh dấu Bao gồm ngày kết thúc (+1 ngày).',
      },
      {
        title: 'Hoán đổi ngày nếu cần',
        description:
          'Dùng nút hoán đổi để đảo ngược ngày bắt đầu và ngày kết thúc ngay lập tức nếu bạn nhập ngược thứ tự.',
      },
      {
        title: 'Xem bảng phân tích lịch',
        description:
          'Xem Năm/Tháng/Ngày, tổng số ngày dương lịch, số tuần, ngày trong tuần (Thứ 2–Thứ 6), ngày cuối tuần và số giờ.',
      },
      {
        title: 'Kiểm tra ngày trong tuần và ngày cuối tuần',
        description:
          'Đọc riêng số ngày trong tuần và số ngày cuối tuần để lập kế hoạch ngày làm việc, ngày tính phí hay độ dài chuyến đi.',
      },
      {
        title: 'Sao chép hoặc dùng lại kết quả',
        description:
          'Sao chép bảng phân tích cho hợp đồng, lịch trình hay tin nhắn, và chạy lại phép tính với tùy chọn tính cả ngày kết thúc nếu số ngày của bạn có vẻ thiếu một ngày.',
      },
    ],
    examples: [
      {
        title: 'Đếm thời gian dự án và ngày làm việc',
        input: 'Bắt đầu: 2025-01-15 · Kết thúc: 2025-11-12 · Tính cả ngày cuối: Tắt',
        output: '0 năm, 9 tháng, 28 ngày · 301 ngày tổng cộng · 215 ngày trong tuần · 86 ngày cuối tuần',
        explanation: 'Dùng phép toán lịch UTC, miễn nhiễm với lỗi lệch 23 giờ/25 giờ do đổi giờ tiết kiệm ánh sáng ban ngày.',
      },
      {
        title: 'Cộng 90 ngày vào ngày hợp đồng',
        input: 'Bắt đầu: 2025-01-01 · Cộng: 90 ngày',
        output: '2025-04-01',
        explanation: 'Hiển thị ngày kết quả chính xác, bao gồm cả việc chuyển tháng và chuyển năm.',
      },
    ],
    benefits: [
      'Phép toán lịch UTC thuần túy tránh lỗi lệch một ngày do đổi giờ tiết kiệm ánh sáng ban ngày',
      'Đếm ngày trong tuần (Thứ 2–Thứ 6) và ngày cuối tuần ngay lập tức trong thời gian O(1)',
      'Hỗ trợ đếm cả ngày kết thúc cho số đêm khách sạn so với số ngày chạy nước rút (sprint)',
      'Có cộng/trừ ngày với tính năng kẹp cuối tháng thông minh',
    ],
    useCases: [
      'Đếm số ngày chạy nước rút của dự án, thời hạn hợp đồng hay giới hạn lưu trú visa',
      'Tìm số ngày tính phí chính xác hay ngày hết hạn thời gian báo trước',
      'Cộng 90 ngày hay 6 tháng vào ngày hiệu lực của hợp đồng',
      'Kiểm tra tổng số ngày trong tuần có trong một quý hay kỳ tài chính',
    ],
    faqs: [
      {
        question: 'Bộ đếm ngày trong tuần có loại trừ ngày lễ không?',
        answer:
          'Nó đếm các ngày trong tuần theo lịch từ Thứ 2 tới Thứ 6, vì ngày lễ khác nhau tùy quốc gia, bang và lịch của nhà tuyển dụng. Nếu khoảng thời gian của bạn có ngày lễ rơi vào ngày thường, bạn cần tự trừ những ngày đó khỏi con số ngày trong tuần để ra số ngày làm việc thực tế cho dự án hay hợp đồng của mình.',
      },
      {
        question: 'Khi nào tôi nên đánh dấu "Bao gồm ngày kết thúc (+1 ngày dương lịch)"?',
        answer:
          'Bạn hãy đánh dấu khi đếm số ngày tham dự hay ngày nghỉ tính cả hai đầu (ví dụ, Thứ 2 tới Thứ 6 = 5 ngày). Hãy để không đánh dấu khi đếm số đêm đã trôi qua hay khoảng thời gian giữa hai mốc. Sự khác biệt một ngày này rất quan trọng: đếm đêm khách sạn thì không tính cả ngày cuối, nhưng đếm ngày nghỉ phép thì phải tính cả ngày cuối.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi cộng 1 tháng vào ngày 31 tháng 1?',
        answer:
          'Tính năng kẹp lịch sẽ đưa ngày 31 tháng 1 cộng 1 tháng về ngày hợp lệ cuối cùng của tháng 2 (28 tháng 2, hoặc 29 tháng 2 trong năm nhuận) thay vì tràn sang tháng 3. Cách này phản ánh đúng ý định của người dùng khi cộng tháng: họ muốn "cùng ngày đó của tháng sau", và khi tháng sau không có ngày đó thì lấy ngày cuối tháng thay vì nhảy sang tháng kế tiếp.',
      },
      {
        question: 'Máy tính chênh lệch ngày đếm số ngày giữa hai ngày như thế nào?',
        answer:
          'Công cụ đo khoảng thời gian dương lịch chính xác giữa hai ngày bằng phép toán ngày UTC, rồi tách khoảng đó thành năm, tháng và số ngày còn lại, cộng thêm tổng số ngày và số tuần. Việc dùng UTC thay vì giờ địa phương giúp kết quả không bị lệch khi khoảng thời gian đi qua thời điểm đổi giờ tiết kiệm ánh sáng ban ngày.',
      },
      {
        question: 'Máy tính chênh lệch ngày có tính ngày bắt đầu vào tổng số không?',
        answer:
          'Theo mặc định thì không, nên Thứ 2 tới Thứ 6 được tính là 4 ngày đã trôi qua. Bạn hãy bật tùy chọn tính cả ngày kết thúc khi muốn đếm cả ngày bắt đầu lẫn ngày kết thúc. Quy ước mặc định này giống như cách tính khoảng thời gian đã trôi qua: từ sáng Thứ 2 tới sáng Thứ 6 là đúng 4 ngày, không phải 5 ngày.',
      },
      {
        question: 'Trong công cụ này, ngày dương lịch và ngày trong tuần khác nhau thế nào?',
        answer:
          'Ngày dương lịch đếm mọi ngày trong khoảng thời gian, còn ngày trong tuần chỉ đếm Thứ 2 tới Thứ 6. Số ngày cuối tuần được hiển thị riêng để bạn thấy cả hai tổng số cùng lúc. Ví dụ, một khoảng 301 ngày có 215 ngày trong tuần và 86 ngày cuối tuần — rất tiện khi lập kế hoạch làm việc và tính thời hạn hợp đồng.',
      },
      {
        question: 'Máy tính chênh lệch ngày có đếm riêng ngày cuối tuần không?',
        answer:
          'Có. Bảng phân tích liệt kê tổng số ngày cuối tuần (Thứ 7 và Chủ nhật) bên cạnh số ngày trong tuần, nhờ đó bạn có thể lập kế hoạch cho chuyến đi, ca làm việc hay hạn chót trải dài qua cuối tuần. Nhờ đó bạn biết ngay một kỳ nghỉ 10 ngày thực ra chỉ ảnh hưởng 7 ngày làm việc.',
      },
      {
        question: 'Máy tính chênh lệch ngày xử lý năm nhuận như thế nào?',
        answer:
          'Công cụ dùng phép toán lịch thực tế, nên ngày 29 tháng 2 được tính trong năm nhuận, và các khoảng thời gian đi qua tháng 2 của năm nhuận sẽ tự động bao gồm ngày thêm đó. Bạn không cần nhớ năm nào là năm nhuận hay tự cộng thêm một ngày — máy tính đã xử lý đúng quy tắc lịch Gregory, bao gồm cả ngoại lệ năm nhuận của các năm tròn thế kỷ.',
      },
      {
        question: 'Tôi có thể dùng Máy tính chênh lệch ngày để biết còn bao nhiêu ngày tới một ngày nào đó không?',
        answer:
          'Có. Bạn hãy đặt ngày bắt đầu là hôm nay và ngày kết thúc là ngày mục tiêu của mình, kết quả tổng số ngày sẽ cho biết chính xác còn bao nhiêu ngày nữa. Cách này rất tiện để đếm ngược tới đám cưới, kỳ thi, hạn chót nộp hồ sơ, hay ngày hết hạn visa mà không cần tự đếm lịch từng tháng một.',
      },
      {
        question: 'Máy tính chênh lệch ngày có tính được qua các năm khác nhau không?',
        answer:
          'Có. Bạn có thể so sánh các ngày cách nhau nhiều năm, và kết quả sẽ tách khoảng thời gian thành số năm đầy đủ, số tháng còn lại và số ngày còn lại. Ví dụ, khoảng từ 15 tháng 1 năm 2025 tới 12 tháng 11 năm 2025 là 0 năm, 9 tháng, 28 ngày — còn khoảng dài nhiều năm cũng được tách gọn gàng theo cùng một cách.',
      },
      {
        question: 'Điều gì xảy ra nếu ngày kết thúc nằm trước ngày bắt đầu?',
        answer:
          'Bạn hãy dùng nút hoán đổi để đảo ngược hai ngày. Công cụ được thiết kế để so sánh ngày bắt đầu với ngày kết thúc muộn hơn, nên việc hoán đổi sẽ cho bạn khoảng thời gian dương đúng. Đây là lỗi nhập liệu phổ biến khi bạn gõ ngày theo thứ tự ngược, và nút hoán đổi giúp bạn sửa ngay mà không cần nhập lại cả hai ngày từ đầu.',
      },
      {
        question: 'Tôi có thể cộng năm, tháng và ngày vào một ngày cùng lúc không?',
        answer:
          'Có. Trong chế độ Cộng / Trừ, bạn có thể nhập kết hợp năm, tháng và ngày, và công cụ sẽ áp dụng toàn bộ khoảng thời gian đó vào ngày tham chiếu của bạn trong một bước. Ví dụ, cộng 1 năm 6 tháng vào ngày ký hợp đồng sẽ cho ngay ngày hết hạn, thay vì bạn phải cộng từng phần rồi tự kiểm tra lại lịch.',
      },
      {
        question: 'Máy tính chênh lệch ngày có điều chỉnh theo giờ tiết kiệm ánh sáng ban ngày không?',
        answer:
          'Về hiệu quả thì có. Công cụ dùng phép toán lịch UTC, nên những ngày 23 giờ và 25 giờ quanh thời điểm đổi giờ không thể làm lệch kết quả đi một ngày. Đây là lỗi kinh điển của các công cụ tính ngày dùng giờ địa phương: chúng đôi khi trả về 300 ngày thay vì 301 ngày chỉ vì khoảng thời gian chứa một lần đổi giờ mùa hè hay mùa đông.',
      },
      {
        question: 'Làm sao đếm ngày làm việc cho hạn chót dự án?',
        answer:
          'Bạn hãy nhập ngày bắt đầu và ngày kết thúc của dự án rồi đọc con số ngày trong tuần, tức Thứ 2 tới Thứ 6. Hãy nhớ rằng ngày lễ không được trừ ra, nên bạn cần điều chỉnh con số nếu có ngày lễ rơi vào trong khoảng thời gian đó. Với các dự án dài, việc trừ ngày lễ có thể thay đổi hạn chót thực tế đi cả tuần làm việc.',
      },
      {
        question: 'Máy tính chênh lệch ngày có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí khi dùng trong trình duyệt của bạn, không cần tài khoản, không cần đăng ký và không giới hạn số khoảng thời gian bạn tính. Dù bạn cần tính một khoảng thời gian duy nhất cho hợp đồng hay tính hàng chục khoảng thời gian cho lịch trình dự án, công cụ vẫn hoạt động nhanh chóng mà không thu bất kỳ khoản phí nào.',
      },
      {
        question: 'Máy tính chênh lệch ngày có lưu hay tải lên ngày tháng của tôi không?',
        answer:
          'Không. Mọi phép tính đều chạy ngay trong trình duyệt của bạn, và các ngày bạn nhập không bao giờ được tải lên hay lưu trữ trên máy chủ. Bạn có thể yên tâm nhập ngày sinh, ngày hết hạn hợp đồng hay ngày hết hạn visa mà không lo thông tin nhạy cảm về lịch trình cá nhân của mình bị thu thập.',
      },
      {
        question: 'Tôi có thể tính chênh lệch giữa các ngày ở múi giờ khác nhau không?',
        answer:
          'Công cụ so sánh các ngày dương lịch chứ không phải thời điểm trong ngày, nên múi giờ không làm thay đổi kết quả. Bạn hãy chọn các ngày như chúng hiển thị trên từng lịch địa phương. Ví dụ, chuyến bay khởi hành ngày 10 ở Hà Nội và đến ngày 11 ở London vẫn được tính là chênh lệch một ngày theo lịch, dù thời gian bay thực tế chỉ vài giờ.',
      },
      {
        question: 'Tùy chọn tính cả ngày kết thúc làm thay đổi kết quả như thế nào?',
        answer:
          'Nó cộng đúng một ngày dương lịch vào tổng số, nên số ngày tính cả hai đầu từ Thứ 2 tới Thứ 6 sẽ thành 5 ngày thay vì 4 ngày. Bảng phân tích theo năm, tháng và ngày cũng cập nhật theo để khớp với tổng số mới, nhờ đó bạn luôn thấy một kết quả nhất quán dù bật hay tắt tùy chọn này.',
      },
      {
        question: 'Máy tính chênh lệch ngày có thể cộng 90 ngày vào ngày hợp đồng không?',
        answer:
          'Có. Bạn hãy chọn Cộng / Trừ, nhập ngày hợp đồng, cộng 90 ngày, và công cụ sẽ hiển thị ngày kết quả chính xác, bao gồm cả việc chuyển tháng và chuyển năm. Ví dụ, ngày 1 tháng 1 năm 2025 cộng 90 ngày sẽ ra ngày 1 tháng 4 năm 2025 — một phép tính dễ sai nếu tự đếm tay vì tháng 2 chỉ có 28 ngày trong năm không nhuận.',
      },
      {
        question: 'Vì sao tháng 2 đôi khi làm thay đổi kết quả cộng tháng của tôi?',
        answer:
          'Khi cộng tháng, kết quả được kẹp vào ngày hợp lệ cuối cùng của tháng đích, nên ngày 31 tháng 1 cộng một tháng sẽ rơi vào ngày 28 hay 29 tháng 2 thay vì ngày 2 hay 3 tháng 3. Tháng 2 ngắn hơn các tháng khác nên đây là trường hợp hay gây bất ngờ nhất, và tính năng kẹp cuối tháng giúp kết quả luôn nằm trong tháng mà bạn thực sự muốn cộng tới.',
      },
    ],
  },
  'time-duration-calculator': {
    instructions: [
      {
        title: 'Chọn chế độ Thời gian đã trôi qua hoặc Cộng thời lượng',
        description:
          'Dùng Thời gian đã trôi qua giữa hai mốc giờ để kiểm tra giờ bắt đầu/kết thúc ca làm, hoặc Cộng thời lượng bảng chấm công để cộng nhiều khoảng thời gian.',
      },
      {
        title: 'Nhập thời gian và giờ nghỉ tùy chọn',
        description:
          'Đặt Giờ bắt đầu, Giờ kết thúc và Giờ nghỉ không lương theo phút; bật tính năng qua đêm nếu ca làm vượt qua nửa đêm.',
      },
      {
        title: 'Bật chuyển qua đêm cho ca đêm',
        description:
          'Bật tùy chọn qua đêm khi giờ kết thúc sớm hơn giờ bắt đầu, để ca làm vượt qua nửa đêm được tính đúng.',
      },
      {
        title: 'Xem bảng phân tích thời lượng ròng',
        description:
          'Kiểm tra HH:MM:SS, tổng số phút, tổng số giây và số giờ thập phân cùng lúc trước khi dùng kết quả.',
      },
      {
        title: 'Sao chép HH:MM:SS hoặc giờ thập phân',
        description:
          'Dùng HH:MM:SS cho nhật ký hoặc Giờ thập phân (ví dụ 7,50 giờ) cho hóa đơn và bảng lương.',
      },
      {
        title: 'Sửa kết quả có vẻ sai',
        description:
          'Nếu tổng số có vẻ quá ngắn, bạn hãy kiểm tra độ dài giờ nghỉ và nút chuyển qua đêm trước, rồi xác nhận giờ bắt đầu và giờ kết thúc không bị hoán đổi cho nhau.',
      },
    ],
    examples: [
      {
        title: 'Ca làm việc tiêu chuẩn với giờ nghỉ 30 phút',
        input: 'Bắt đầu: 09:00:00 · Kết thúc: 17:30:00 · Nghỉ: 30 phút',
        output: 'Thời lượng ròng: 08:00:00 · Thập phân: 8,00 giờ · 480 phút',
        explanation: '8,5 giờ đã trôi qua trừ 0,5 giờ nghỉ không lương bằng 8,00 giờ có thể tính phí.',
      },
      {
        title: 'Ca đêm vượt qua nửa đêm',
        input: 'Bắt đầu: 22:00:00 · Kết thúc: 06:30:00 · Qua đêm: Bật',
        output: 'Thời lượng ròng: 08:30:00 · Thập phân: 8,50 giờ',
        explanation: 'Tính năng chuyển qua đêm coi giờ kết thúc là ngày hôm sau, để toàn bộ ca đêm được tính đủ.',
      },
    ],
    benefits: [
      'Xử lý gọn gàng ca qua đêm vượt qua 00:00 chỉ với một nút bật',
      'Xuất đồng thời HH:MM:SS, giờ thập phân, tổng số phút và tổng số giây',
      'Bộ cộng nhiều dòng linh hoạt cộng tổng không giới hạn các đoạn làm việc hay thời lượng video/âm thanh',
      'Ngăn trừ giờ nghỉ lớn hơn tổng độ dài ca làm đã trôi qua',
    ],
    useCases: [
      'Ghi lại giờ làm freelance có thể tính phí và trừ giờ nghỉ không lương',
      'Tính giờ ca đêm trong bệnh viện, logistics hay khách sạn',
      'Cộng dấu thời gian các tập podcast, độ dài bài giảng hay thời lượng danh sách phát',
      'Chuyển đổi mục bảng chấm công 7h 45m thành 7,75 giờ thập phân để tính phí',
    ],
    faqs: [
      {
        question: 'Giờ thập phân được tính như thế nào?',
        answer:
          'Tổng số giây ròng được chia cho 3.600. Ví dụ, 7 giờ 45 phút (27.900 giây) bằng 7,75 giờ thập phân. Cách đổi này rất quan trọng trong tính lương và lập hóa đơn, vì hầu hết các hệ thống bảng lương đều tính theo giờ thập phân thay vì giờ và phút, và việc đổi sai có thể khiến bạn bị trả thiếu hay tính thừa cho khách hàng.',
      },
      {
        question: 'Công cụ này có hỗ trợ ca đêm kết thúc sau nửa đêm không?',
        answer:
          'Có. Bạn hãy giữ tùy chọn "Coi giờ kết thúc sớm hơn giờ bắt đầu là ngày hôm sau" được bật, để ca làm từ 22:00 tới 06:30 được tính chính xác là 8 giờ 30 phút. Nếu không bật tùy chọn này, máy tính sẽ tưởng giờ kết thúc nằm trong cùng một ngày và cho ra một khoảng thời gian âm hay rất ngắn, hoàn toàn sai với thực tế ca đêm của bạn.',
      },
      {
        question: 'Tôi có thể cộng các thời lượng lớn hơn 24 giờ không?',
        answer:
          'Có. Chế độ Cộng thời lượng bảng chấm công tích lũy số giờ mà không quay vòng ở mốc 24, đồng thời hiển thị số ngày 24 giờ tương đương. Nhờ đó bạn có thể cộng tổng giờ làm cả tuần, tổng thời lượng một khóa học dài, hay tổng thời gian của một danh sách phát lớn mà không lo kết quả bị cắt bớt hay quay về 0 sau mỗi 24 giờ.',
      },
      {
        question: 'Máy tính thời lượng đo lường cái gì?',
        answer:
          'Công cụ đo thời gian đã trôi qua giữa hai mốc giờ, hoặc tổng của nhiều dòng thời lượng, rồi hiển thị kết quả theo HH:MM:SS, giờ thập phân, phút và giây. Bạn có thể dùng nó cho ca làm việc, thời lượng video, thời gian chạy bộ, hay bất kỳ khoảng thời gian nào cần đo chính xác tới từng giây mà không cần tự cộng trừ thủ công.',
      },
      {
        question: 'Làm sao nhập thời gian trong Máy tính thời lượng?',
        answer:
          'Bạn hãy nhập giờ bắt đầu và giờ kết thúc theo giờ, phút và giây. Trong chế độ Cộng thời lượng, bạn hãy nhập mỗi khoảng thời gian dưới dạng một dòng riêng. Việc nhập theo đúng định dạng HH:MM:SS giúp máy tính không nhầm lẫn giữa phút và giây, và kết quả hiển thị cũng theo đúng định dạng đó để bạn dễ đọc và sao chép.',
      },
      {
        question: 'Máy tính thời lượng trừ giờ nghỉ không lương như thế nào?',
        answer:
          'Công cụ trừ số phút nghỉ bạn đã nhập khỏi thời gian ca làm đã trôi qua, nên ca làm 8,5 giờ với giờ nghỉ 30 phút cho ra 8,00 giờ ròng. Đây chính là con số thường được dùng để tính lương hay lập hóa đơn, vì hầu hết các nhà tuyển dụng chỉ trả lương cho thời gian làm việc thực tế chứ không trả cho giờ nghỉ ăn trưa hay nghỉ giải lao.',
      },
      {
        question: 'Điều gì xảy ra nếu giờ nghỉ của tôi dài hơn ca làm?',
        answer:
          'Công cụ ngăn trừ giờ nghỉ lớn hơn tổng độ dài ca làm đã trôi qua, nên thời lượng ròng không thể xuống dưới 0. Đây là một biện pháp bảo vệ chống lỗi nhập liệu: nếu bạn vô tình gõ 300 phút nghỉ thay vì 30 phút, máy tính sẽ không trả về một con số âm vô nghĩa mà sẽ báo cho bạn biết dữ liệu đầu vào có vấn đề.',
      },
      {
        question: 'Máy tính thời lượng có xử lý được ca làm bắt đầu trước nửa đêm và kết thúc sau nửa đêm không?',
        answer:
          'Có. Bạn hãy bật tính năng chuyển qua đêm để giờ kết thúc sớm hơn giờ bắt đầu được coi là ngày hôm sau, và toàn bộ ca đêm được tính đủ. Tính năng này rất cần thiết cho nhân viên bệnh viện, bảo vệ, tài xế và nhân viên khách sạn — những người thường xuyên làm ca đêm bắt đầu buổi tối và kết thúc vào sáng hôm sau.',
      },
      {
        question: 'Thời gian đã trôi qua và thời lượng ròng khác nhau thế nào?',
        answer:
          'Thời gian đã trôi qua là toàn bộ khoảng thời gian từ lúc bắt đầu tới lúc kết thúc. Thời lượng ròng là thời gian đã trôi qua trừ đi giờ nghỉ không lương, và đó thường là con số được tính phí hay trả lương. Ví dụ, bạn ở nơi làm việc từ 9 giờ tới 17 giờ 30, nhưng thời gian làm việc ròng chỉ là 8 giờ sau khi trừ 30 phút nghỉ trưa.',
      },
      {
        question: 'Làm sao cộng nhiều khoảng làm việc riêng lẻ lại với nhau?',
        answer:
          'Bạn hãy chuyển sang chế độ Cộng thời lượng bảng chấm công, thêm một dòng cho mỗi khoảng làm việc với giờ, phút và giây của nó, và công cụ sẽ cộng tổng tất cả các dòng cùng lúc. Cách này thay thế hoàn toàn việc cộng tay nhiều khoảng thời gian rời rạc trong ngày, vốn rất dễ sai khi bạn phải nhớ số phút dư sau mỗi lần cộng.',
      },
      {
        question: 'Tôi có thể dùng Máy tính thời lượng cho thời lượng video hay âm thanh không?',
        answer:
          'Có. Bạn hãy cộng độ dài mỗi tập, bài giảng hay bản nhạc dưới dạng một dòng trong chế độ Cộng thời lượng để có tổng thời lượng cho danh sách phát hay khóa học. Cách này hữu ích cho người làm podcast muốn biết tổng thời lượng cả mùa, giáo viên tính tổng thời lượng bài giảng, hay người nghe nhạc muốn biết danh sách phát của mình dài bao nhiêu giờ.',
      },
      {
        question: 'Máy tính thời lượng có làm tròn phút hay giây không?',
        answer:
          'Không, công cụ tính từ số giây chính xác và hiển thị kết quả HH:MM:SS chính xác cùng với số giờ thập phân tương đương, nên không có gì bị làm tròn lặng lẽ. Điều này rất quan trọng với bảng chấm công và hóa đơn: chỉ cần lệch vài phút mỗi ngày thôi, tổng số giờ tính phí trong cả tháng cũng có thể chênh lệch đáng kể nếu máy tính tự làm tròn.',
      },
      {
        question: '7,75 giờ thập phân nghĩa là bao nhiêu giờ và phút?',
        answer:
          'Nghĩa là 7 giờ và 45 phút. Phần sau dấu thập phân là một phần của một giờ, nên 0,75 giờ bằng 45 phút. Nhiều người mới hay nhầm 7,75 giờ thành 7 giờ 75 phút, nhưng thực ra phần thập phân luôn phải nhân với 60 để đổi ra phút: 0,25 giờ là 15 phút, 0,5 giờ là 30 phút, và 0,75 giờ là 45 phút.',
      },
      {
        question: 'Máy tính thời lượng có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí khi dùng trong trình duyệt của bạn, không cần tài khoản, không cần đăng ký và không giới hạn số thời lượng bạn tính. Dù bạn cần tính một ca làm duy nhất hay cộng tổng thời lượng cho cả tuần làm việc, công cụ vẫn hoạt động ngay lập tức mà không yêu cầu thanh toán hay cài đặt thêm bất cứ thứ gì.',
      },
      {
        question: 'Máy tính thời lượng có lưu hay tải lên thời gian của tôi không?',
        answer:
          'Không. Mọi phép tính đều chạy ngay trong trình duyệt của bạn, và thời gian cùng thời lượng bạn nhập không bao giờ được tải lên hay lưu trữ trên máy chủ. Bạn có thể yên tâm nhập giờ làm việc, ca trực hay lịch trình cá nhân của mình mà không lo dữ liệu về thói quen làm việc bị thu thập hay chia sẻ.',
      },
      {
        question: 'Tôi có thể tính thời lượng kéo dài hơn một ngày không?',
        answer:
          'Có. Chế độ Cộng thời lượng cộng tổng số giờ mà không quay vòng ở mốc 24, đồng thời hiển thị tổng số đó bằng bao nhiêu ngày 24 giờ. Ví dụ, tổng 50 giờ sẽ hiển thị là 50:00:00 kèm theo tương đương 2,08 ngày — rất tiện khi bạn cần báo cáo tổng giờ làm trong tuần hay tổng thời lượng một dự án dài theo cả hai đơn vị.',
      },
      {
        question: 'Vì sao ca làm của tôi hiển thị thời lượng âm hoặc bằng 0?',
        answer:
          'Điều đó thường có nghĩa là giờ kết thúc sớm hơn giờ bắt đầu mà không bật tính năng chuyển qua đêm, hoặc giờ nghỉ dài bằng cả ca làm. Bạn hãy kiểm tra nút chuyển qua đêm và độ dài giờ nghỉ trước tiên. Trong hầu hết các trường hợp, chỉ cần bật chuyển qua đêm cho ca đêm hay sửa lại số phút nghỉ gõ nhầm là kết quả sẽ trở về đúng ngay.',
      },
      {
        question: 'Làm sao đổi phút thành giờ thập phân bằng công cụ này?',
        answer:
          'Bạn hãy nhập thời gian dưới dạng một dòng thời lượng hoặc dùng kết quả thời gian đã trôi qua, rồi đọc con số giờ thập phân. Ví dụ, 90 phút hiển thị là 1,50 giờ thập phân. Phép đổi này đặc biệt hữu ích khi bạn điền bảng chấm công yêu cầu nhập giờ thập phân, vì gõ 1,50 thay vì "1 giờ 30 phút" sẽ khớp đúng với hệ thống tính lương.',
      },
      {
        question: 'Máy tính thời lượng có thể cộng thời gian theo định dạng HH:MM:SS không?',
        answer:
          'Có. Mỗi dòng thời lượng chấp nhận giờ, phút và giây, và tổng số được hiển thị lại theo HH:MM:SS cũng như theo giờ thập phân. Nhờ đó bạn có thể nhập chính xác tới từng giây — ví dụ cộng các đoạn video dài 12:34:56 — mà vẫn thấy tổng số ở định dạng quen thuộc, dễ đọc và dễ sao chép vào báo cáo.',
      },
      {
        question: 'Tôi nên kiểm tra gì nếu tổng bảng chấm công không khớp với số giờ của mình?',
        answer:
          'Bạn hãy kiểm tra xem mỗi dòng đã được nhập đúng chế độ hay chưa, có giờ nghỉ nào bị tính hai lần không, và các ca qua đêm đã bật tùy chọn chuyển qua đêm hay chưa. Ba lỗi này chiếm phần lớn các trường hợp tổng số bị lệch, và việc rà soát lại từng dòng thường sẽ giúp bạn tìm ra dòng bị nhập sai chỉ trong vài phút.',
      },
    ],
  },
  'unit-converter': {
    instructions: [
      {
        title: 'Chọn nhóm đo lường',
        description:
          'Chọn Độ dài, Khối lượng, Nhiệt độ, Diện tích, Thể tích, Tốc độ hay Lưu trữ số từ thanh trên cùng.',
      },
      {
        title: 'Nhập giá trị và chọn đơn vị',
        description:
          'Gõ bất kỳ giá trị số nào và chọn đơn vị Từ và đơn vị Tới (bấm Hoán đổi bất cứ lúc nào để đảo ngược).',
      },
      {
        title: 'Hoán đổi chiều chuyển đổi',
        description:
          'Bấm Hoán đổi để đảo ngược đơn vị Từ và đơn vị Tới ngay lập tức mà không cần gõ lại giá trị.',
      },
      {
        title: 'Đọc kết quả chuyển đổi chính xác',
        description:
          'Kiểm tra giá trị đích đã định dạng, bao gồm cả phần thập phân, trước khi sao chép vào tài liệu hay phép tính của bạn.',
      },
      {
        title: 'Sao chép kết quả hoặc quét tất cả đơn vị',
        description:
          'Sao chép kết quả đích đã định dạng hoặc đọc bảng giá trị tương đương trên mọi đơn vị trong cùng nhóm.',
      },
      {
        title: 'Kiểm tra đặc thù lưu trữ hay nhiệt độ',
        description:
          'Với lưu trữ, hãy xác nhận bạn cần GB thập phân hay GiB nhị phân, và với nhiệt độ, lưu ý rằng các giá trị dưới độ 0 tuyệt đối sẽ bị chặn.',
      },
    ],
    examples: [
      {
        title: 'Gigabyte thập phân so với Gibibyte nhị phân',
        input: 'Nhóm: Lưu trữ số · 1.000 GB → GiB',
        output: '931,32257 GiB',
        explanation: 'Giải thích vì sao ổ 1 TB (1.000 GB) hiển thị khoảng 931 GiB trong hệ điều hành máy tính.',
      },
      {
        title: 'Chuyển đổi nhiệt độ',
        input: 'Nhóm: Nhiệt độ · 100 °C → °F',
        output: '212 °F',
        explanation: 'Điểm sôi của nước là 100° theo thang Celsius và 212° theo thang Fahrenheit.',
      },
    ],
    benefits: [
      'Dùng hằng số chuyển đổi quốc tế chính xác theo NIST/SI (ví dụ 1 in = 0,0254 m chính xác)',
      'Tách riêng lưu trữ thập phân SI (KB/MB/GB) khỏi lưu trữ nhị phân IEC (KiB/MiB/GiB)',
      'Kiểm tra giới hạn nhiệt độ vật lý (không bao giờ dưới độ 0 tuyệt đối 0 K / -273,15 °C)',
      'Hiển thị bảng so sánh đầy đủ cho mọi đơn vị trong nhóm đang dùng',
    ],
    useCases: [
      'Chuyển đổi bản vẽ kỹ thuật giữa milimét, inch và feet',
      'Kiểm tra thể tích chất lỏng nấu ăn giữa mililít, cốc và gallon',
      'Chuyển đổi nhiệt độ thời tiết hay phòng thí nghiệm từ Celsius sang Fahrenheit và Kelvin',
      'Kiểm toán dung lượng ổ đĩa đám mây giữa GB thập phân và GiB nhị phân',
    ],
    faqs: [
      {
        question: 'Vì sao Lưu trữ số tách GB khỏi GiB?',
        answer:
          'Nhà sản xuất thiết bị lưu trữ dùng tiền tố SI cơ số 10 (1 GB = 1.000³ byte), còn nhiều tiện ích hệ điều hành dùng kích thước nhị phân cơ số 2 (1 GiB = 1.024³ byte). Việc giữ rõ cả hai hệ giúp loại bỏ nhầm lẫn: ổ 1 TB quảng cáo theo chuẩn thập phân sẽ hiển thị nhỏ hơn trong hệ điều hành.',
      },
      {
        question: 'Các đơn vị thể tích Mỹ có dùng cho cốc, pint và gallon không?',
        answer:
          'Có. Ounce lỏng, cốc, pint, quart và gallon dùng định nghĩa chất lỏng theo hệ đo lường Mỹ (1 gallon Mỹ = 3,785411784 L chính xác). Lưu ý rằng gallon Anh lớn hơn gallon Mỹ, nên khi làm theo công thức nấu ăn hay tài liệu kỹ thuật, bạn cần xác nhận công thức dùng gallon Mỹ hay gallon Anh để tránh sai lệch thể tích đáng kể.',
      },
      {
        question: 'Vì sao bộ chuyển đổi nhiệt độ chặn các giá trị dưới -273,15 °C?',
        answer:
          'Độ 0 tuyệt đối (0 K / -273,15 °C / -459,67 °F) là giới hạn dưới vật lý của nhiệt độ nhiệt động lực học. Không vật chất nào có thể lạnh hơn độ 0 tuyệt đối. Việc chặn các giá trị dưới ngưỡng này giúp máy tính không trả về kết quả vô nghĩa về mặt vật lý khi bạn vô tình nhập sai dấu hay sai đơn vị.',
      },
      {
        question: 'Bộ chuyển đổi đơn vị có thể chuyển đổi những đơn vị nào?',
        answer:
          'Công cụ bao gồm bảy nhóm: Độ dài, Khối lượng, Nhiệt độ, Diện tích, Thể tích, Tốc độ và Lưu trữ số, với nhiều đơn vị trong mỗi nhóm. Từ milimét tới dặm, từ gam tới tấn, từ Celsius tới Kelvin hay từ byte tới terabyte, hầu hết các đơn vị đo lường thường gặp trong đời sống, kỹ thuật và công nghệ thông tin đều có mặt trong công cụ này.',
      },
      {
        question: 'Kết quả của Bộ chuyển đổi đơn vị chính xác tới mức nào?',
        answer:
          'Kết quả dùng hằng số chuyển đổi quốc tế chính xác theo NIST và SI, chẳng hạn như 1 inch bằng đúng 0,0254 mét, nên phép toán chính xác đúng bằng giá trị bạn nhập. Không giống như các công cụ dùng hệ số làm tròn như 1 inch ≈ 2,54 cm, công cụ này giữ nguyên độ chính xác đầy đủ, nhờ đó các phép tính kỹ thuật và khoa học không bị sai lệch do làm tròn sớm.',
      },
      {
        question: 'Bộ chuyển đổi đơn vị có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí khi dùng trong trình duyệt của bạn, không cần tài khoản, không cần đăng ký và không giới hạn số lần chuyển đổi bạn chạy. Dù bạn cần đổi một con số duy nhất cho công thức nấu ăn hay đổi hàng trăm số đo cho bản vẽ kỹ thuật, công cụ vẫn hoạt động ngay lập tức mà không thu bất kỳ khoản phí nào.',
      },
      {
        question: 'Làm sao chuyển đổi kilômét sang dặm bằng Bộ chuyển đổi đơn vị?',
        answer:
          'Bạn hãy chọn nhóm Độ dài, nhập số kilômét của mình, chọn kilômét làm đơn vị Từ và dặm làm đơn vị Tới, giá trị đã chuyển đổi sẽ xuất hiện ngay lập tức. Ngoài kết quả chính, bảng so sánh đầy đủ còn cho bạn thấy cùng một khoảng cách đó bằng bao nhiêu mét, feet, yard và hải lý, rất tiện khi bạn cần nhiều đơn vị cùng lúc.',
      },
      {
        question: 'Làm sao chuyển đổi kilôgam sang pound?',
        answer:
          'Bạn hãy chọn nhóm Khối lượng, nhập số kilôgam, chọn kilôgam làm đơn vị Từ và pound làm đơn vị Tới, rồi đọc kết quả hoặc bảng so sánh đầy đủ. Phép đổi này rất hay dùng khi bạn mua hàng quốc tế, đọc nhãn dinh dưỡng, hay theo dõi cân nặng trên các thiết bị và ứng dụng dùng hệ đo lường khác nhau.',
      },
      {
        question: 'Một lít và một gallon Mỹ khác nhau thế nào?',
        answer:
          'Một lít là đơn vị thể tích hệ mét, còn một gallon Mỹ là đơn vị chất lỏng theo hệ đo lường Mỹ, bằng đúng 3,785411784 lít. Bộ chuyển đổi dùng đúng hệ số chính xác này. Sự khác biệt này rất quan trọng trong nấu ăn và kỹ thuật: đổ nhầm 1 gallon theo chuẩn Anh hay chuẩn Mỹ vào công thức có thể làm lệch thể tích tới gần 20%.',
      },
      {
        question: 'Bộ chuyển đổi đơn vị có chuyển đổi Celsius sang Fahrenheit và Kelvin không?',
        answer:
          'Có. Bạn hãy chọn nhóm Nhiệt độ rồi chọn bất kỳ cặp nào trong ba thang Celsius, Fahrenheit và Kelvin, công cụ sẽ chuyển đổi giữa chúng bằng các công thức chuẩn. Ví dụ, 0 °C bằng 32 °F và 273,15 K, còn 100 °C bằng 212 °F và 373,15 K — những điểm mốc mà bạn có thể dùng để kiểm tra nhanh kết quả chuyển đổi.',
      },
      {
        question: 'Vì sao 1 TB hiển thị khoảng 931 GiB trong Bộ chuyển đổi đơn vị?',
        answer:
          'Ổ 1 TB chứa 1.000 GB theo hệ thập phân, nhưng hệ điều hành thường báo cáo theo Gibibyte nhị phân, và 1.000 GB bằng khoảng 931 GiB vì mỗi GiB là 1.024³ byte. Đây không phải là lỗi hay dung lượng bị mất: nhà sản xuất và hệ điều hành chỉ đang đếm cùng một số byte đó bằng hai đơn vị có kích thước khác nhau.',
      },
      {
        question: 'Bộ chuyển đổi đơn vị có hoạt động ngoại tuyến trong trình duyệt của tôi không?',
        answer:
          'Có. Mọi phép chuyển đổi đều chạy ngay trong trình duyệt của bạn với các hằng số có sẵn, nên không cần kết nối internet hay tải lên dữ liệu sau khi trang đã tải xong. Bạn có thể dùng công cụ trên máy bay, trong phòng thí nghiệm không có mạng, hay ở bất cứ nơi nào không có internet mà kết quả vẫn chính xác như khi trực tuyến.',
      },
      {
        question: 'Bộ chuyển đổi đơn vị có lưu hay tải lên các con số của tôi không?',
        answer:
          'Không. Mọi phép chuyển đổi đều chạy ngay trong trình duyệt của bạn, và các giá trị bạn nhập không bao giờ được tải lên hay lưu trữ trên máy chủ. Bạn có thể yên tâm chuyển đổi các số đo nhạy cảm trong bản vẽ kỹ thuật, tài liệu nghiên cứu hay kế hoạch kinh doanh mà không lo dữ liệu của mình bị thu thập hay rò rỉ.',
      },
      {
        question: 'Tôi có thể chuyển đổi tốc độ giữa km/h và mph không?',
        answer:
          'Có. Bạn hãy chọn nhóm Tốc độ, nhập giá trị theo km/h, chọn mph làm đơn vị Tới, và công cụ sẽ chuyển đổi ngay lập tức. Phép đổi này rất hữu ích khi bạn lái xe ở nước ngoài, đọc thông số xe nhập khẩu, hay so sánh tốc độ giới hạn giữa các quốc gia dùng hệ mét và các quốc gia dùng hệ Anh.',
      },
      {
        question: 'Làm sao chuyển đổi mét vuông sang feet vuông?',
        answer:
          'Bạn hãy chọn nhóm Diện tích, nhập số mét vuông, chọn mét vuông làm đơn vị Từ và feet vuông làm đơn vị Tới, diện tích đã chuyển đổi sẽ xuất hiện ngay. Phép đổi này thường dùng trong bất động sản khi so sánh diện tích căn hộ niêm yết theo hệ mét với các tài liệu hay quảng cáo dùng hệ đo lường Anh.',
      },
      {
        question: 'KB thập phân và KiB nhị phân khác nhau thế nào?',
        answer:
          'Một kilobyte thập phân (KB) là 1.000 byte, còn một kibibyte nhị phân (KiB) là 1.024 byte. Bộ chuyển đổi giữ riêng hai hệ thống để dung lượng lưu trữ không bao giờ bị lẫn lộn. Sự khác biệt 2,4% ở cấp kilobyte sẽ phình to thành gần 7% ở cấp gigabyte, đó là lý do ổ 1 TB chỉ hiển thị khoảng 931 GiB trong hệ điều hành của bạn.',
      },
      {
        question: 'Bộ chuyển đổi đơn vị có xử lý được số rất lớn hay rất nhỏ không?',
        answer:
          'Có. Bạn có thể nhập các giá trị lớn như hàng nghìn kilômét hay các giá trị nhỏ như phần nhỏ của một milimét, và kết quả được hiển thị với độ chính xác thập phân đầy đủ. Dù bạn đang tính khoảng cách thiên văn, kích thước linh kiện điện tử, hay liều lượng hóa chất trong phòng thí nghiệm, công cụ vẫn giữ nguyên độ chính xác mà không bị tràn số hay làm tròn sớm.',
      },
      {
        question: 'Tôi nên dùng thang nhiệt độ nào cho nấu ăn hay thời tiết?',
        answer:
          'Hầu hết công thức nấu ăn và bản tin thời tiết ngoài nước Mỹ dùng Celsius, còn công thức và thời tiết ở Mỹ dùng Fahrenheit. Kelvin chủ yếu dùng trong khoa học và phòng thí nghiệm. Khi làm theo công thức nước ngoài, bạn hãy kiểm tra kỹ thang nhiệt độ trước khi bật lò, vì nhầm 180 °C thành 180 °F sẽ khiến món ăn của bạn gần như không chín.',
      },
      {
        question: 'Làm sao chuyển đổi mililít sang cốc cho công thức nấu ăn?',
        answer:
          'Bạn hãy chọn nhóm Thể tích, nhập số mililít, chọn mililít làm đơn vị Từ và cốc Mỹ làm đơn vị Tới, công cụ sẽ cho ra lượng cốc tương đương cho công thức của bạn. Một cốc Mỹ bằng 236,588 mililít, nên 500 ml sẽ tương đương khoảng 2,11 cốc — con số mà bạn có thể làm tròn thành 2 cốc đầy cộng thêm một chút cho thực tế nấu nướng.',
      },
      {
        question: 'Vì sao các giá trị đã chuyển đổi của tôi hiển thị nhiều chữ số thập phân?',
        answer:
          'Công cụ hiển thị độ chính xác đầy đủ để công việc kỹ thuật và khoa học luôn chính xác. Với nhu cầu hàng ngày, bạn chỉ cần làm tròn kết quả tới số chữ số thập phân mình cần. Ví dụ, khi nấu ăn thì 2,11 cốc là đủ, còn khi gia công chi tiết máy thì bạn có thể cần tới 4–5 chữ số thập phân để đảm bảo chi tiết lắp vừa khít.',
      },
    ],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'roman-numeral-converter': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'online-hourly-calculator': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
};
