// Detail content for VI tools — batch 1.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'word-counter': {
    instructions: [
      {
        title: 'Dán hoặc nhập bản nháp của bạn',
        description:
          'Gõ trực tiếp văn bản vào trình soạn thảo hoặc bấm "Load sample" để xem số liệu thay đổi ra sao khi nội dung thay đổi.',
      },
      {
        title: 'Xem tổng số liệu trực tiếp',
        description:
          'Dải tóm tắt hiển thị số từ, số ký tự có và không có khoảng trắng, số câu, số đoạn văn cùng thời gian đọc ước tính.',
      },
      {
        title: 'Kiểm tra thời gian đọc và thời gian nói',
        description:
          'Xem thời gian đọc ước tính ở tốc độ 225 từ mỗi phút và thời gian nói ở tốc độ 130 từ mỗi phút để căn nhịp cho bài luận, bài thuyết trình và kịch bản video trước khi đăng.',
      },
      {
        title: 'Kiểm tra các từ lặp lại',
        description:
          'Xem bảng những từ xuất hiện nhiều nhất để phát hiện những từ vô tình bị lặp lại và gọt giũa câu chữ trước khi hoàn thiện bản nháp.',
      },
      {
        title: 'Sao chép hoặc tải văn bản xuống',
        description:
          'Khi đã hài lòng với số liệu, dùng nút sao chép để lấy văn bản hoặc tải bản sao lưu dưới dạng tệp .txt.',
      },
      {
        title: 'Khắc phục số liệu đếm sai lệch',
        description:
          'Nếu một con số có vẻ sai, hãy kiểm tra các ký tự ẩn khi dán vào hoặc những dòng trống thừa; xóa bớt dấu ngắt dòng thường sẽ sửa được số đoạn và số câu.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra độ dài phần mở đầu bài blog',
        input: 'Fast static websites reduce server latency. Readers stay engaged when copy is concise.',
        output: '13 từ · 87 ký tự · 2 câu · 4 giây đọc',
        explanation:
          'Rất tiện để kiểm tra nhịp của tiêu đề và đoạn mở đầu trước khi đăng bài.',
      },
      {
        title: 'Xác nhận giới hạn từ của bài luận',
        input: 'Paragraph 1 (240 words)\n\nParagraph 2 (255 words)',
        output: '495 từ · 2 đoạn · 2 phút 12 giây đọc',
        explanation:
          'Xác nhận bạn vẫn nằm trong giới hạn khi mục tiêu là 500 từ.',
      },
    ],
    benefits: [
      'Cập nhật tức thì sau mỗi lần gõ phím, ngay trong bộ nhớ trình duyệt',
      'Tính cả thời gian đọc (225 từ/phút) và thời gian nói (130 từ/phút)',
      'Hiển thị sáu từ lặp lại nhiều nhất để bạn bắt được cách diễn đạt trùng lặp',
      'Xuất bản sao lưu văn bản thuần túy trực tiếp thành tệp .txt',
    ],
    useCases: [
      'Đáp ứng giới hạn từ nghiêm ngặt của bài luận học thuật và hồ sơ xin tài trợ',
      'Căn thời gian cho bài nói hội nghị, kịch bản video và phần mở đầu podcast',
      'Rà soát cấu trúc ngắn gọn của bản nháp bài viết và trang đích',
      'Kiểm tra độ dài bản tin email trước khi lên lịch gửi chiến dịch',
    ],
    faqs: [
      {
        question: 'Word Counter tính thời gian đọc và thời gian nói như thế nào?',
        answer:
          'Thời gian đọc được tính theo tốc độ đọc thầm của người trưởng thành là 225 từ mỗi phút, còn thời gian nói dựa trên tốc độ thuyết trình trò chuyện là 130 từ mỗi phút. Hai con số này giúp bạn ước lượng bài viết tốn bao lâu để đọc hết hoặc trình bày thành lời, nhờ đó bạn căn chỉnh được độ dài của bài luận, bài phát biểu hay kịch bản video trước khi xuất bản.',
      },
      {
        question: 'Từ có dấu gạch nối được tính là một từ hay hai từ?',
        answer:
          'Các cụm ký tự tách nhau bằng khoảng trắng được tính là một từ, giống như cách hầu hết các trình xử lý văn bản trên máy tính vẫn làm. Nhờ vậy, một từ ghép có dấu gạch nối như "well-known" chỉ được tính là một từ duy nhất, và kết quả đếm của bạn sẽ khớp với những gì bạn thường thấy trong Word hay Google Docs.',
      },
      {
        question: 'Bài viết của tôi có bị lưu lại hay gửi đi đâu không?',
        answer:
          'Không. Mọi phép đếm đều chạy ngay trong tab trình duyệt của bạn, và văn bản sẽ biến mất ngay khi bạn xóa nội dung hoặc đóng trang. Công cụ không tải văn bản của bạn lên máy chủ, không lưu vào tài khoản và không chia sẻ với bất kỳ ai, nên bạn có thể yên tâm dán cả những bản nháp riêng tư hay chưa công bố.',
      },
      {
        question: 'Word Counter khác Character Counter ở điểm nào?',
        answer:
          'Word Counter tập trung vào tổng số từ, số đoạn văn, thời lượng nói ước tính và những từ lặp lại nhiều nhất, còn Character Counter phân tích kích thước byte UTF-8 và giới hạn ký tự của các nền tảng mạng xã hội hay SEO. Nếu bạn cần kiểm tra giới hạn từ của bài luận thì dùng Word Counter, còn khi cần vừa đúng số ký tự của tiêu đề hay chú thích thì hãy dùng Character Counter.',
      },
      {
        question: 'Word Counter có miễn phí không?',
        answer:
          'Có. Word Counter hoàn toàn miễn phí, không cần đăng ký, không giới hạn số từ và không yêu cầu tài khoản. Bạn chỉ cần mở trang là dùng được ngay, đếm bao nhiêu văn bản tùy thích, trên cả máy tính và điện thoại, mà không gặp bất kỳ giới hạn hay tính năng trả phí nào.',
      },
      {
        question: 'Word Counter có hoạt động khi không có mạng không?',
        answer:
          'Có. Sau khi trang đã tải xong, mọi phép đếm đều chạy ngay trong trình duyệt của bạn nên công cụ vẫn hoạt động bình thường dù mất kết nối internet. Điều này rất tiện khi bạn đang viết trên máy bay, ở nơi sóng yếu, hay đơn giản là muốn đếm từ mà không phụ thuộc vào mạng.',
      },
      {
        question: 'Câu được đếm như thế nào?',
        answer:
          'Câu được đếm tại các dấu kết thúc câu như dấu chấm, dấu chấm than và dấu chấm hỏi. Vì vậy, những chữ viết tắt như "Dr." có thể khiến công cụ đếm thừa một câu, bởi dấu chấm sau chữ viết tắt trông giống như dấu kết thúc câu. Đây là hạn chế chung của hầu hết các bộ đếm tự động, nên bạn chỉ cần lưu ý khi văn bản có nhiều chữ viết tắt.',
      },
      {
        question: 'Thế nào được tính là một từ trong Word Counter?',
        answer:
          'Bất kỳ chuỗi ký tự nào tách nhau bằng khoảng trắng cũng được tính là một từ, bao gồm cả số, từ có dấu gạch nối và từ có dấu nháy đơn. Quy tắc đơn giản này giúp kết quả đếm nhất quán và dễ dự đoán, đồng thời khớp với cách đếm của phần lớn các trình soạn thảo văn bản phổ biến hiện nay.',
      },
      {
        question: 'Tôi có thể đếm từ trong tệp PDF hoặc Word không?',
        answer:
          'Không trực tiếp được. Bạn hãy sao chép văn bản ra khỏi tài liệu rồi dán vào Word Counter, số liệu sẽ hiện ra ngay lập tức. Cách này áp dụng cho mọi định dạng tài liệu, từ PDF, Word cho đến slide thuyết trình, và bạn chỉ mất vài giây để có được tổng số từ chính xác của toàn bộ nội dung.',
      },
      {
        question: 'Word Counter có đếm ký tự kèm khoảng trắng không?',
        answer:
          'Có. Công cụ hiển thị cả hai con số: ký tự bao gồm khoảng trắng và ký tự không bao gồm khoảng trắng, để bạn kiểm tra được cả hai loại giới hạn. Một số nền tảng tính cả khoảng trắng vào giới hạn ký tự, trong khi số khác chỉ tính ký tự hiển thị, nên việc có cả hai số liệu giúp bạn không bị nhầm lẫn.',
      },
      {
        question: 'Thời gian đọc ước tính chính xác đến mức nào?',
        answer:
          'Đây chỉ là ước tính dựa trên tốc độ đọc thầm trung bình 225 từ mỗi phút; từng người đọc có thể nhanh hơn hoặc chậm hơn đáng kể. Văn bản chuyên môn khó sẽ đọc chậm hơn, còn văn bản quen thuộc thì đọc nhanh hơn, vì vậy bạn nên xem con số này như một hướng dẫn tham khảo thay vì một phép đo tuyệt đối.',
      },
      {
        question: 'Thời gian nói ước tính dựa trên cơ sở nào?',
        answer:
          'Thời gian nói được tính theo tốc độ thuyết trình trò chuyện là 130 từ mỗi phút, tốc độ phù hợp cho bài phát biểu, kịch bản video và phần mở đầu podcast. Nếu bạn nói nhanh hơn khi hồi hộp hoặc chậm hơn khi giải thích khái niệm khó, thời gian thực tế có thể lệch đi một chút, nhưng con số này vẫn là điểm khởi đầu đáng tin cậy để bạn tập dượt.',
      },
      {
        question: 'Word Counter có dùng được cho ngôn ngữ khác không?',
        answer:
          'Có. Công cụ đếm các từ tách nhau bằng khoảng trắng trong bất kỳ ngôn ngữ nào, từ tiếng Việt, tiếng Pháp cho đến tiếng Nhật viết có khoảng trắng. Tuy nhiên, ước tính thời gian đọc được hiệu chỉnh theo văn bản tiếng Anh, nên với ngôn ngữ khác, con số đó chỉ mang tính tham khảo và có thể không phản ánh đúng tốc độ đọc thực tế của bạn.',
      },
      {
        question: 'Tôi có thể kiểm tra giới hạn từ cho bài luận hoặc bài tập không?',
        answer:
          'Có. Bạn chỉ cần dán bài luận vào trình soạn thảo rồi so sánh tổng số từ trực tiếp với mục tiêu của mình; dải tóm tắt luôn hiển thị con số chính xác trong khi bạn chỉnh sửa. Nhờ vậy, bạn biết ngay mình còn thiếu hay đã vượt bao nhiêu từ, và có thể cắt gọt hoặc bổ sung đúng chỗ trước khi nộp bài.',
      },
      {
        question: 'Word Counter có tính số thành từ không?',
        answer:
          'Có. Các số đứng riêng, tách nhau bằng khoảng trắng, cũng được tính là từ, giống như cách hầu hết các trình xử lý văn bản trên máy tính vẫn làm. Vì vậy, một dãy số liệu hay năm tháng trong bài viết đều góp vào tổng số từ, và bạn nên nhớ điều này khi bài luận của mình chứa nhiều con số.',
      },
      {
        question: 'Vì sao số liệu của tôi khác với Microsoft Word hoặc Google Docs?',
        answer:
          'Các công cụ khác nhau tách từ có dấu gạch nối, dấu gạch ngang dài và số hơi khác nhau, nên chênh lệch vài từ là chuyện bình thường. Ví dụ, một công cụ có thể tính "well-known" là một từ trong khi công cụ khác tính là hai từ. Khi cần con số chính thức cho bài nộp, bạn nên đối chiếu với chính công cụ mà giảng viên hay nhà xuất bản dùng.',
      },
      {
        question: 'Bảng từ xuất hiện nhiều nhất dùng để làm gì?',
        answer:
          'Bảng này liệt kê sáu từ bạn lặp lại nhiều nhất để bạn nhận ra những từ bị dùng quá mức và thay đổi cách diễn đạt trước khi đăng bài. Nếu một tính từ hay cụm từ quen thuộc xuất hiện dày đặc trong bản nháp, đó là dấu hiệu cho thấy bạn nên tìm từ đồng nghĩa hoặc viết lại câu để văn bản đa dạng và sinh động hơn.',
      },
      {
        question: 'Tôi có thể đếm từ của riêng một đoạn văn không?',
        answer:
          'Có. Bạn chỉ cần dán riêng đoạn văn đó vào trình soạn thảo, và các tổng số trực tiếp sẽ chỉ phản ánh đúng phần văn bản bạn vừa nhập. Cách này rất tiện khi bạn muốn kiểm tra độ dài của phần mở đầu, kết luận hay một đoạn trích cụ thể mà không phải đếm cả tài liệu dài.',
      },
      {
        question: 'Tôi có thể dùng Word Counter cho chú thích mạng xã hội không?',
        answer:
          'Có. Bạn hãy dán chú thích vào để kiểm tra tổng số từ và thời gian đọc của nó, và dùng thêm Character Counter nếu cần kiểm tra cả giới hạn ký tự. Chú thích ngắn gọn thường hiệu quả hơn trên mạng xã hội, nên việc biết chính xác độ dài sẽ giúp bạn viết caption vừa đủ ý mà không lan man.',
      },
      {
        question: 'Tôi có thể dùng Word Counter trên điện thoại không?',
        answer:
          'Có. Công cụ hoạt động trong mọi trình duyệt di động hiện đại với cùng số liệu trực tiếp, thời gian đọc và các tùy chọn sao chép như trên máy tính. Bạn có thể dán bản nháp từ ứng dụng ghi chú, kiểm tra số từ ngay tại chỗ, rồi sao chép kết quả để tiếp tục chỉnh sửa mà không cần mở máy tính.',
      },
    ],
  },
  'character-counter': {
    instructions: [
      {
        title: 'Nhập hoặc dán nội dung của bạn',
        description:
          'Gõ tiêu đề meta, chú thích mạng xã hội, tin nhắn SMS hay bất kỳ chuỗi ký tự nào trong ô nhập liệu vào ô văn bản.',
      },
      {
        title: 'Xem số liệu ký tự và byte',
        description:
          'So sánh tổng số ký tự có khoảng trắng, ký tự không có khoảng trắng, chữ cái, chữ số và trọng lượng byte UTF-8.',
      },
      {
        title: 'Kiểm tra giới hạn của từng nền tảng',
        description:
          'Xem thanh tiến độ trực tiếp để xác nhận nội dung của bạn nằm trong giới hạn của SEO, SMS, X, Instagram hay LinkedIn.',
      },
      {
        title: 'Dùng kích thước byte cho giới hạn kỹ thuật',
        description:
          'Kiểm tra tổng số byte UTF-8 khi xác thực cột cơ sở dữ liệu, nội dung API hay trường tệp mà giới hạn tính theo byte chứ không phải theo ký tự.',
      },
      {
        title: 'So sánh số ký tự có và không có khoảng trắng',
        description:
          'Chuyển đổi giữa hai tổng số khi một biểu mẫu hoặc nền tảng chỉ đếm những ký tự không phải khoảng trắng.',
      },
      {
        title: 'Khắc phục số liệu có vẻ sai',
        description:
          'Nếu con số có vẻ lệch, hãy kiểm tra các ký tự ẩn như khoảng trắng ở cuối dòng hay dấu ngắt dòng bị dán kèm, vì chúng được tính vào tổng số có khoảng trắng.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra tiêu đề meta',
        input: 'Word Counter – Count Words, Sentences & Reading Time',
        output: '51 / 60 ký tự (còn 9)',
        explanation:
          'Nằm gọn trong giới hạn hiển thị tiêu đề thường gặp của công cụ tìm kiếm là khoảng 60 ký tự.',
      },
      {
        title: 'Kiểm tra byte của emoji đa byte',
        input: 'Launch day 🚀',
        output: '13 đơn vị mã UTF-16 · 15 byte UTF-8',
        explanation:
          'Cho thấy sự chênh lệch chính xác về kích thước byte khi có ký tự không phải ASCII.',
      },
    ],
    benefits: [
      'Đếm cả ký tự có khoảng trắng lẫn ký tự không có khoảng trắng',
      'Đo chính xác độ dài byte UTF-8 cho giới hạn cột cơ sở dữ liệu và nội dung API',
      'Có chỉ báo giới hạn trực quan cho thẻ SEO, SMS, X, Instagram và LinkedIn',
      'Không tải lên máy chủ và không ghi lại ký tự nào',
    ],
    useCases: [
      'Viết thẻ tiêu đề và mô tả meta cho công cụ tìm kiếm mà không bị cắt ngắn',
      'Soạn thông báo SMS trong giới hạn 160 ký tự của một đoạn tin',
      'Xác thực độ dài trường VARCHAR của cơ sở dữ liệu theo byte UTF-8',
      'Giữ chú thích mạng xã hội ngắn gọn trước khi bị ẩn sau nút xem thêm',
    ],
    faqs: [
      {
        question: 'Vì sao số byte UTF-8 đôi khi cao hơn số ký tự?',
        answer:
          'Trong UTF-8, mỗi ký tự tiếng Anh ASCII chỉ chiếm 1 byte, trong khi ký tự có dấu, chữ viết không phải Latin và emoji cần từ 2 đến 4 byte. Do đó, đoạn văn bản có nhiều emoji hay ký tự tiếng Việt có dấu sẽ có tổng số byte lớn hơn hẳn số ký tự hiển thị, điều này rất quan trọng khi kiểm tra giới hạn lưu trữ của cơ sở dữ liệu hay API.',
      },
      {
        question: 'Character Counter có tính dấu ngắt dòng không?',
        answer:
          'Có. Ký tự xuống dòng được tính vào chỉ số "có khoảng trắng" và bị loại khỏi chỉ số "không có khoảng trắng". Nhờ vậy, nếu bạn dán một văn bản có nhiều dòng trống, tổng số có khoảng trắng sẽ cao hơn hẳn, còn tổng số không có khoảng trắng vẫn phản ánh đúng lượng ký tự thực sự hiển thị trên màn hình.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi vượt quá thanh giới hạn của nền tảng?',
        answer:
          'Chỉ báo tiến độ sẽ chuyển sang màu đỏ và hiển thị chính xác số ký tự bạn đã vượt quá giới hạn, để bạn biết cần cắt bớt bao nhiêu. Nhờ con số cụ thể này, bạn có thể rút gọn tiêu đề hay chú thích đúng mức cần thiết thay vì phải đoán mò và chỉnh sửa nhiều lần.',
      },
      {
        question: 'Character Counter có miễn phí không?',
        answer:
          'Có. Character Counter hoàn toàn miễn phí, không cần đăng ký, không giới hạn ký tự và không yêu cầu tài khoản. Bạn mở trang là dùng được ngay, dán bao nhiêu văn bản tùy thích, và mọi phép đếm đều chạy ngay trong trình duyệt nên không có bất kỳ chi phí ẩn hay tính năng bị khóa nào.',
      },
      {
        question: 'Ký tự có khoảng trắng và không có khoảng trắng khác nhau thế nào?',
        answer:
          'Số ký tự có khoảng trắng bao gồm mọi khoảng trắng giữa các từ, còn số ký tự không có khoảng trắng loại bỏ chúng hoàn toàn. Sự khác biệt này rất quan trọng vì một số nền tảng chỉ tính ký tự hiển thị, trong khi số khác tính cả khoảng trắng, nên bạn cần xem đúng chỉ số mà nền tảng mình đang viết yêu cầu.',
      },
      {
        question: 'Character Counter có đếm emoji không?',
        answer:
          'Có. Mỗi emoji được tính là ký tự, và vì hầu hết emoji dùng nhiều byte UTF-8 nên tổng số byte sẽ cao hơn số ký tự. Ví dụ, một emoji có thể chiếm tới 4 byte dù chỉ hiển thị như một ký tự duy nhất, vì vậy bạn nên kiểm tra cả hai con số khi viết nội dung có nhiều biểu tượng cảm xúc.',
      },
      {
        question: 'Tôi có thể dán bao nhiêu ký tự vào Character Counter?',
        answer:
          'Không có giới hạn cố định. Việc đếm chạy hoàn toàn trong trình duyệt của bạn, nên ngay cả những tài liệu rất dài cũng được đo ngay lập tức. Bạn có thể dán cả một bài viết dài hay toàn bộ nội dung trang mà không lo công cụ bị chậm hay từ chối vì vượt quá giới hạn.',
      },
      {
        question: 'Giới hạn ký tự của tiêu đề meta SEO là bao nhiêu?',
        answer:
          'Công cụ tìm kiếm thường hiển thị khoảng 50 đến 60 ký tự của thẻ tiêu đề, vì vậy giữ tiêu đề trong khoảng này sẽ tránh bị cắt ngắn trong kết quả tìm kiếm. Nếu tiêu đề dài hơn, phần thừa sẽ bị thay bằng dấu ba chấm, khiến người đọc không thấy hết thông điệp quan trọng mà bạn muốn truyền tải.',
      },
      {
        question: 'Giới hạn ký tự của mô tả meta là bao nhiêu?',
        answer:
          'Công cụ tìm kiếm thường hiển thị khoảng 150 đến 160 ký tự của mô tả meta, nên công cụ sẽ theo dõi tiến độ của bạn theo khoảng này. Một mô tả vừa đúng độ dài sẽ hiển thị trọn vẹn trong kết quả tìm kiếm, giúp người đọc hiểu rõ nội dung trang và tăng khả năng họ bấm vào liên kết của bạn.',
      },
      {
        question: 'Một tin nhắn SMS chứa được bao nhiêu ký tự?',
        answer:
          'Một đoạn SMS chuẩn chứa được 160 ký tự khi dùng bảng chữ cái GSM cơ bản; tin nhắn dài hơn sẽ bị tách thành nhiều đoạn. Mỗi đoạn thêm sẽ tốn thêm chi phí gửi tin, nên việc kiểm tra độ dài trước khi gửi giúp bạn tiết kiệm tiền và đảm bảo thông báo không bị ngắt thành nhiều tin rời rạc.',
      },
      {
        question: 'Character Counter có tính tab và dấu ngắt dòng không?',
        answer:
          'Có. Tab và dấu ngắt dòng được tính vào tổng số có khoảng trắng, nên văn bản dán vào có nhiều dòng trống sẽ hiển thị số đếm cao hơn. Nếu con số có vẻ bất ngờ, bạn hãy kiểm tra lại phần đầu và cuối văn bản để xem có dòng trống hay khoảng trắng thừa nào bị dán kèm hay không.',
      },
      {
        question: 'Character Counter có tính dấu câu không?',
        answer:
          'Có. Dấu câu được tính là ký tự và nằm trong cả hai tổng số có và không có khoảng trắng. Điều này đúng với cách hầu hết các nền tảng tính giới hạn, vì dấu chấm, dấu phẩy hay dấu chấm than đều chiếm một vị trí ký tự trong chuỗi văn bản của bạn.',
      },
      {
        question: 'Giới hạn ký tự của X (Twitter) là bao nhiêu?',
        answer:
          'Bài đăng trên X bị giới hạn ở 280 ký tự đối với hầu hết các tài khoản, và thanh giới hạn trong công cụ này sẽ cho bạn thấy tiến độ của mình so với ngưỡng đó. Nhờ vậy, bạn biết ngay bài đăng còn bao nhiêu ký tự trống hay đã vượt quá bao nhiêu trước khi nhấn nút đăng.',
      },
      {
        question: 'Tôi có thể kiểm tra độ dài chú thích Instagram không?',
        answer:
          'Có. Bạn hãy dán chú thích vào và theo dõi thanh giới hạn Instagram; chú thích bị giới hạn ở 2.200 ký tự. Thanh tiến độ sẽ cảnh báo khi bạn sắp chạm ngưỡng, giúp bạn rút gọn caption kịp thời mà vẫn giữ được đầy đủ hashtag và lời kêu gọi hành động quan trọng.',
      },
      {
        question: 'Character Counter có dùng được với văn bản không phải tiếng Anh không?',
        answer:
          'Có. Công cụ đếm ký tự trong mọi hệ chữ viết, và tổng số byte UTF-8 cho thấy kích thước lưu trữ thực sự của chữ có dấu và ký tự không phải Latin. Điều này đặc biệt hữu ích với tiếng Việt, vì mỗi chữ cái có dấu vẫn chiếm 2 byte trong UTF-8 dù chỉ hiển thị như một ký tự duy nhất.',
      },
      {
        question: 'Tôi có thể dùng Character Counter cho bài đăng LinkedIn không?',
        answer:
          'Có. Bạn hãy dán bài đăng vào và kiểm tra thanh giới hạn LinkedIn, công cụ sẽ theo dõi giới hạn 3.000 ký tự của bài đăng. Nhờ đó, bạn biết bài viết dài của mình có vừa khung cho phép hay cần cắt gọn trước khi đăng lên mạng lưới chuyên nghiệp của mình.',
      },
      {
        question: 'Character Counter có lưu hay tải văn bản của tôi lên không?',
        answer:
          'Không. Mọi phép đếm đều diễn ra ngay trong trình duyệt của bạn, và văn bản của bạn không bao giờ bị tải lên, lưu trữ hay chia sẻ. Bạn có thể yên tâm kiểm tra cả những nội dung nhạy cảm như mật khẩu mẫu hay bản nháp chưa công bố mà không lo rò rỉ thông tin.',
      },
      {
        question: 'Vì sao số liệu của tôi khác với Microsoft Word?',
        answer:
          'Các công cụ khác nhau xử lý dấu ngắt dòng, tab và ký tự định dạng ẩn theo cách khác nhau, nên chênh lệch nhỏ giữa các bộ đếm là chuyện bình thường. Khi cần con số chính thức cho một biểu mẫu hay nền tảng cụ thể, bạn nên tin vào cách đếm của chính nền tảng đó thay vì so sánh chéo giữa nhiều công cụ.',
      },
      {
        question: 'Chữ cái và chữ số khác nhau thế nào?',
        answer:
          'Chữ cái là ký tự chữ trong bất kỳ hệ chữ viết nào, còn chữ số là ký tự số từ 0 đến 9; cả hai đều được hiển thị thành tổng số riêng biệt. Việc tách riêng hai chỉ số này giúp bạn kiểm tra nhanh thành phần của mật khẩu, mã sản phẩm hay chuỗi định danh mà không phải đếm thủ công từng ký tự.',
      },
      {
        question: 'Tôi có thể kiểm tra số ký tự của trường mật khẩu hoặc tên người dùng không?',
        answer:
          'Có. Bạn hãy dán giá trị vào công cụ để xác minh nó đáp ứng yêu cầu độ dài tối thiểu hay tối đa trước khi gửi biểu mẫu. Cách này giúp bạn phát hiện sớm mật khẩu quá ngắn hay tên người dùng quá dài, tránh bị biểu mẫu từ chối và phải nhập lại từ đầu.',
      },
    ],
  },
  'case-converter': {
    instructions: [
      {
        title: 'Dán hoặc gõ văn bản của bạn',
        description:
          'Đưa tiêu đề, đoạn văn hay chuỗi định danh vào trình soạn thảo.',
      },
      {
        title: 'Chọn kiểu viết hoa',
        description:
          'Bấm bất kỳ nút chuyển đổi nào, chẳng hạn Title Case, Sentence case, camelCase hay snake_case, văn bản sẽ cập nhật ngay lập tức.',
      },
      {
        title: 'Sao chép kết quả đã định dạng',
        description:
          'Dùng nút "Copy result" để chuyển văn bản đã chuyển đổi vào clipboard của bạn.',
      },
      {
        title: 'Sửa văn bản viết hoa toàn bộ chỉ bằng một cú bấm',
        description:
          'Dán văn bản vô tình gõ khi bật Caps Lock rồi chọn Sentence case để khôi phục cách viết hoa bình thường cho mọi câu.',
      },
      {
        title: 'Chuyển đổi định danh cho code',
        description:
          'Dán một nhãn đơn giản như "user account status" rồi chọn camelCase, PascalCase, snake_case hay kebab-case để có ngay tên biến sẵn sàng sử dụng.',
      },
      {
        title: 'Khắc phục cách viết hoa kỳ lạ',
        description:
          'Nếu Title Case để một từ ở dạng thường, nhiều khả năng đó là từ nhỏ như "and" hay "of"; bạn hãy gõ lại từ đó hoặc áp dụng Uppercase riêng cho từ ấy.',
      },
    ],
    examples: [
      {
        title: 'Sửa văn bản vô tình viết hoa toàn bộ',
        input: 'THIS REPORT SUMMARIZES Q4 RESULTS. ALL METRICS ARE FINAL.',
        output: 'This report summarizes q4 results. All metrics are final.',
        explanation:
          'Sentence case hạ tất cả chữ cái xuống dạng thường và viết hoa chữ đầu mỗi câu.',
      },
      {
        title: 'Định dạng định danh trong code',
        input: 'user account billing status',
        output: 'userAccountBillingStatus (camelCase) / user_account_billing_status (snake_case)',
        explanation:
          'Chuyển nhãn tiếng Anh đơn giản trực tiếp thành quy ước đặt tên lập trình chuẩn.',
      },
    ],
    benefits: [
      'Hỗ trợ 10 định dạng viết hoa cho văn xuôi và lập trình trong một không gian làm việc',
      'Title Case thông minh giữ nguyên dạng thường cho giới từ và liên từ nhỏ',
      'Xử lý gọn gàng đoạn văn nhiều câu và dấu ngắt dòng',
      'Chạy ngay trong trình duyệt của bạn với thao tác sao chép một cú bấm',
    ],
    useCases: [
      'Chuyển email vô tình gõ toàn chữ hoa trở lại Sentence case',
      'Định dạng tiêu đề blog và tiêu đề YouTube một cách nhất quán',
      'Đổi tên cột cơ sở dữ liệu, class CSS hay biến JavaScript',
      'Chuẩn hóa tiêu đề bảng tính trước khi nhập tệp CSV',
    ],
    faqs: [
      {
        question: 'Title Case xử lý các từ ngắn như "and" hay "of" như thế nào?',
        answer:
          'Bộ định dạng Title Case viết hoa từ đầu tiên và từ cuối cùng của tiêu đề, đồng thời giữ nguyên dạng thường cho các mạo từ, liên từ và giới từ ngắn chuẩn như "a", "an", "and", "of", "in" hay "to". Quy tắc này tuân theo quy ước biên tập tiếng Anh phổ biến, giúp tiêu đề trông chuyên nghiệp và quen thuộc với người đọc thay vì viết hoa mọi từ một cách máy móc.',
      },
      {
        question: 'Tôi có thể chuyển một định danh snake_case hoặc camelCase sang định dạng khác không?',
        answer:
          'Có. Ranh giới từ tại dấu gạch dưới, dấu gạch nối và điểm chuyển đổi camelCase sẽ tự động được tách ra trước khi áp dụng quy tắc viết hoa mới. Nhờ vậy, bạn có thể chuyển "user_account_status" thành camelCase hay PascalCase chỉ bằng một cú bấm, mà không cần gõ lại hay tách từ thủ công.',
      },
      {
        question: 'Sentence case có giữ nguyên nhiều đoạn văn không?',
        answer:
          'Có. Việc viết hoa được đặt lại ở đầu văn bản, sau dấu kết thúc câu và ở đầu dòng mới, nên cấu trúc đoạn văn của bạn vẫn nguyên vẹn. Dù bạn dán cả một bài viết dài với nhiều đoạn, mỗi câu vẫn bắt đầu bằng chữ hoa đúng chuẩn còn phần còn lại giữ nguyên dạng thường.',
      },
      {
        question: 'Case Converter có miễn phí không?',
        answer:
          'Có. Case Converter hoàn toàn miễn phí, không cần đăng ký, không giới hạn độ dài văn bản và không yêu cầu tài khoản. Bạn chỉ cần mở trang, dán văn bản vào và chọn kiểu chuyển đổi mong muốn; mọi thao tác đều chạy ngay trong trình duyệt nên không có bất kỳ chi phí ẩn nào.',
      },
      {
        question: 'Title Case và Sentence case khác nhau thế nào?',
        answer:
          'Title Case viết hoa hầu hết các từ trong tiêu đề, còn Sentence case chỉ viết hoa từ đầu tiên của mỗi câu và danh từ riêng, giống như một câu bình thường. Title Case phù hợp cho tiêu đề bài viết hay tên sách, trong khi Sentence case phù hợp cho nội dung email, đoạn văn và những câu cần vẻ tự nhiên, nhẹ nhàng.',
      },
      {
        question: 'camelCase dùng để làm gì?',
        answer:
          'camelCase là kiểu đặt tên chuẩn cho biến và hàm trong JavaScript cùng nhiều ngôn ngữ lập trình khác, ví dụ "userAccountStatus". Từ đầu tiên viết thường, các từ tiếp theo viết hoa chữ đầu và nối liền không dấu tách, giúp tên biến dễ đọc mà vẫn hợp lệ trong code, nơi khoảng trắng không được phép.',
      },
      {
        question: 'snake_case dùng để làm gì?',
        answer:
          'snake_case tách các từ bằng dấu gạch dưới và thường dùng cho biến Python, cột cơ sở dữ liệu và tên tệp, ví dụ "user_account_status". Kiểu này rất dễ đọc trong code và tên tệp, vì dấu gạch dưới phân tách rõ ràng từng từ mà không gây nhầm lẫn với dấu trừ hay ký tự đặc biệt nào khác.',
      },
      {
        question: 'kebab-case dùng để làm gì?',
        answer:
          'kebab-case tách các từ bằng dấu gạch nối và thường dùng cho URL, tên class CSS và thuộc tính HTML, ví dụ "user-account-status". Dấu gạch nối giúp địa chỉ web dễ đọc hơn và được công cụ tìm kiếm hiểu là dấu tách từ, nên đây là lựa chọn chuẩn cho slug và tên class trong phát triển web.',
      },
      {
        question: 'PascalCase dùng để làm gì?',
        answer:
          'PascalCase viết hoa mọi từ mà không có dấu tách, và thường dùng cho tên class và tên component, ví dụ "UserAccountStatus". Kiểu này giúp phân biệt rõ tên class với tên biến thường trong code, và là quy ước phổ biến trong nhiều ngôn ngữ lập trình hướng đối tượng như C#, Java hay TypeScript.',
      },
      {
        question: 'Case Converter có sửa được văn bản gõ toàn chữ hoa không?',
        answer:
          'Có. Bạn hãy dán văn bản viết hoa toàn bộ vào rồi chọn Sentence case hoặc lowercase để khôi phục cách viết hoa bình thường chỉ bằng một cú bấm. Điều này cứu bạn khỏi việc gõ lại cả email hay đoạn văn dài khi vô tình bật Caps Lock, và kết quả vẫn giữ nguyên dấu câu cùng cấu trúc đoạn văn ban đầu.',
      },
      {
        question: 'Case Converter có hoạt động với số và ký hiệu không?',
        answer:
          'Có. Số, dấu câu và ký hiệu được giữ nguyên không thay đổi; chỉ có chữ cái mới được chuyển đổi. Nhờ vậy, ngày tháng, số liệu, địa chỉ email hay mã sản phẩm trong văn bản của bạn vẫn nguyên vẹn sau khi chuyển đổi kiểu viết hoa.',
      },
      {
        question: 'Tôi có thể chuyển đổi cả một đoạn văn cùng lúc không?',
        answer:
          'Có. Bạn hãy dán toàn bộ đoạn văn vào, công cụ sẽ áp dụng kiểu viết hoa đã chọn cho mọi câu và dấu ngắt dòng trong đó. Bạn không cần tách từng câu hay xử lý từng dòng riêng lẻ, vì bộ chuyển đổi xử lý toàn bộ văn bản trong một lần duy nhất.',
      },
      {
        question: 'Title Case có viết hoa từ sau dấu hai chấm không?',
        answer:
          'Từ sau dấu hai chấm được xử lý như các từ khác trong tiêu đề, nên từ quan trọng sẽ được viết hoa còn từ nhỏ vẫn giữ dạng thường. Quy tắc này giữ cho tiêu đề có dấu hai chấm trông cân đối và đúng chuẩn biên tập, thay vì viết hoa hay viết thường toàn bộ phần sau dấu hai chấm.',
      },
      {
        question: 'Case Converter có dùng được cho ngôn ngữ khác không?',
        answer:
          'Có. Công cụ chuyển đổi chữ cái trong mọi ngôn ngữ có dạng chữ hoa và chữ thường, dù quy tắc từ nhỏ của Title Case dựa trên tiếng Anh. Với tiếng Việt hay tiếng Pháp, việc chuyển đổi hoa-thường vẫn hoạt động chính xác, chỉ có quy tắc giữ nguyên từ nhỏ như "and" hay "of" là đặc thù của tiếng Anh.',
      },
      {
        question: 'Tôi có thể chuyển snake_case trở lại thành từ thường không?',
        answer:
          'Có. Bạn hãy dán định danh vào rồi chọn Sentence case hoặc Title Case; dấu gạch dưới được xem là dấu tách từ và sẽ được thay bằng khoảng trắng. Nhờ vậy, "user_account_status" trở thành "User account status" hay "User Account Status" ngay lập tức, rất tiện khi bạn cần biến tên biến thành nhãn hiển thị cho người dùng.',
      },
      {
        question: 'Dấu ngắt dòng sẽ ra sao khi tôi chuyển đổi kiểu viết hoa?',
        answer:
          'Dấu ngắt dòng được giữ nguyên chính xác, nên văn bản nhiều dòng vẫn giữ cấu trúc sau khi chuyển đổi. Bạn không phải lo các đoạn văn bị dính vào nhau hay danh sách bị xô lệch, vì công cụ chỉ thay đổi chữ cái mà không chạm đến bất kỳ dấu ngắt dòng nào.',
      },
      {
        question: 'Case Converter có lưu hay tải văn bản của tôi lên không?',
        answer:
          'Không. Việc chuyển đổi chạy ngay trong trình duyệt của bạn, và văn bản của bạn không bao giờ bị tải lên, lưu trữ hay chia sẻ. Bạn có thể yên tâm xử lý cả những đoạn code nội bộ hay nội dung riêng tư mà không lo thông tin bị gửi ra ngoài.',
      },
      {
        question: 'Tôi có thể chuyển đổi văn bản đã có sẵn nhiều kiểu viết hoa lẫn lộn không?',
        answer:
          'Có. Bộ chuyển đổi sẽ tách từ trước tại dấu gạch dưới, dấu gạch nối và điểm chuyển đổi kiểu chữ, nên văn bản viết hoa lộn xộn vẫn chuyển đổi gọn gàng. Dù đầu vào là "userAccount_Status" hay "USER-account-status", kết quả vẫn nhất quán theo đúng kiểu bạn đã chọn.',
      },
      {
        question: 'Tôi có thể dùng Case Converter cho tiêu đề YouTube không?',
        answer:
          'Có. Bạn hãy dán tiêu đề video vào rồi áp dụng Title Case để có phong cách tiêu đề nhất quán và chuyên nghiệp. Tiêu đề viết hoa đúng chuẩn trông đáng tin hơn, dễ đọc hơn trong kết quả tìm kiếm, và giúp kênh của bạn giữ được diện mạo thống nhất qua nhiều video.',
      },
      {
        question: 'Case Converter có hoạt động trên điện thoại không?',
        answer:
          'Có. Công cụ hoạt động trong mọi trình duyệt di động hiện đại với cùng thao tác chuyển đổi một cú bấm và nút sao chép như trên máy tính. Bạn có thể sửa nhanh tiêu đề hay tên biến ngay trên điện thoại rồi dán kết quả vào ứng dụng khác mà không cần mở máy tính.',
      },
    ],
  },
  'remove-duplicate-lines': {
    instructions: [
      {
        title: 'Dán danh sách mỗi mục một dòng',
        description:
          'Đưa bất kỳ danh sách nào có một mục trên mỗi dòng vào ô "Original Lines".',
      },
      {
        title: 'Đặt quy tắc so khớp',
        description:
          'Bật hoặc tắt "Case-sensitive", "Trim whitespace", "Remove empty lines" hay "Sort alphabetically" tùy theo mức độ nghiêm ngặt bạn muốn khi so khớp.',
      },
      {
        title: 'Sao chép các dòng duy nhất',
        description:
          'Xem có bao nhiêu dòng trùng lặp đã bị loại bỏ trong phần tiêu đề tóm tắt rồi bấm "Copy" để lấy danh sách đã làm sạch.',
      },
      {
        title: 'Sắp xếp danh sách đã làm sạch theo thứ tự bảng chữ cái',
        description:
          'Bật "Sort alphabetically" nếu bạn muốn các dòng duy nhất được xếp từ A đến Z thay vì giữ nguyên thứ tự xuất hiện lần đầu.',
      },
      {
        title: 'Xem số liệu tóm tắt',
        description:
          'Xem số dòng gốc, số dòng duy nhất và số dòng trùng đã xóa trong phần tiêu đề tóm tắt để xác nhận việc làm sạch diễn ra như mong đợi.',
      },
      {
        title: 'Khắc phục các dòng không bị loại trùng',
        description:
          'Nếu hai dòng trông giống hệt nhau vẫn còn lại, hãy kiểm tra khoảng trắng ẩn ở cuối dòng hay chữ hoa khác nhau, rồi bật "Trim whitespace" hoặc tắt "Case-sensitive" và chạy lại.',
      },
    ],
    examples: [
      {
        title: 'Làm sạch danh sách email',
        input: 'alex@example.com\nsam@example.com\nAlex@example.com\n  sam@example.com  ',
        output: 'alex@example.com\nsam@example.com',
        explanation:
          'Khi bật cắt khoảng trắng và tắt phân biệt chữ hoa-thường, các biến thể có khoảng trắng thừa và chữ hoa khác nhau sẽ gộp lại gọn gàng.',
      },
      {
        title: 'Loại trùng lặp khỏi danh sách từ khóa',
        input: 'image compressor\nphoto editor\nimage compressor\npdf converter',
        output: 'image compressor\nphoto editor\npdf converter',
        explanation:
          'Các từ khóa lặp lại bị loại bỏ trong khi vẫn giữ nguyên thứ tự xuất hiện lần đầu, nên bố cục gốc của danh sách không thay đổi.',
      },
    ],
    benefits: [
      'Mặc định giữ nguyên thứ tự xuất hiện lần đầu, hoặc sắp xếp theo bảng chữ cái khi cần',
      'Hiển thị chính xác số dòng gốc, số dòng duy nhất và số dòng trùng đã xóa',
      'Xử lý mượt mà cả những danh sách lớn hàng nghìn dòng trong bộ nhớ trình duyệt',
      'Giữ danh sách riêng tư và dữ liệu khách hàng tránh xa máy chủ bên thứ ba',
    ],
    useCases: [
      'Loại trùng lặp khỏi dữ liệu xuất nghiên cứu từ khóa và danh sách URL',
      'Làm sạch danh sách email người đăng ký trước khi nhập vào CRM',
      'Xóa các mục stack trace hay địa chỉ IP lặp lại khỏi tệp nhật ký',
      'Chuẩn bị danh sách thẻ hoặc mã SKU duy nhất cho bảng tính',
    ],
    faqs: [
      {
        question: 'Remove Duplicate Lines có giữ nguyên thứ tự gốc của tôi không?',
        answer:
          'Có. Mặc định, công cụ giữ lại lần xuất hiện đầu tiên của mỗi dòng duy nhất theo đúng thứ tự ban đầu. Nếu bạn muốn thêm thứ tự từ A đến Z, hãy bật tùy chọn "Sort alphabetically" để sắp xếp danh sách đã làm sạch sau khi loại trùng, mà không làm mất bất kỳ mục duy nhất nào.',
      },
      {
        question: 'Tùy chọn Trim whitespace ảnh hưởng đến việc nhận diện trùng lặp như thế nào?',
        answer:
          'Khi "Trim whitespace" được bật, khoảng trắng ở đầu và cuối dòng sẽ bị xóa trước khi kiểm tra tính duy nhất, nhờ đó "apple " và "apple" không bị xem là hai mục khác nhau. Tùy chọn này rất hữu ích với dữ liệu sao chép từ bảng tính hay email, nơi khoảng trắng thừa thường xuất hiện mà mắt thường khó nhận ra.',
      },
      {
        question: 'Tôi phải làm gì nếu muốn giữ các biến thể chữ hoa như "USA" và "usa"?',
        answer:
          'Bạn hãy bật ô "Case-sensitive" để các dòng có chữ hoa khác nhau vẫn là những mục riêng biệt. Khi tùy chọn này tắt, công cụ xem "USA" và "usa" là cùng một dòng và chỉ giữ lại một, còn khi bật, cả hai đều được giữ nguyên trong kết quả đầu ra.',
      },
      {
        question: 'Công cụ Remove Duplicate Lines có miễn phí không?',
        answer:
          'Có. Công cụ này hoàn toàn miễn phí, không cần đăng ký, không giới hạn số dòng và không yêu cầu tài khoản. Bạn có thể làm sạch bao nhiêu danh sách tùy thích, từ vài dòng cho đến hàng nghìn dòng, mà không gặp bất kỳ giới hạn hay tính năng trả phí nào.',
      },
      {
        question: 'Thế nào được tính là một dòng trùng lặp?',
        answer:
          'Hai dòng được xem là trùng lặp khi nội dung của chúng khớp nhau hoàn toàn theo cài đặt hiện tại của bạn, bao gồm tùy chọn phân biệt chữ hoa-thường và cắt khoảng trắng. Nếu bạn thay đổi các tùy chọn này, kết quả có thể khác đi, vì vậy hãy kiểm tra cài đặt trước khi chạy để đảm bảo công cụ hiểu đúng ý bạn.',
      },
      {
        question: 'Công cụ có hoạt động với danh sách tách bằng dấu phẩy không?',
        answer:
          'Không trực tiếp. Công cụ so sánh từng dòng nguyên vẹn, nên bạn hãy tách danh sách phân tách bằng dấu phẩy thành một mục trên mỗi dòng trước, rồi dán vào. Bạn có thể dùng tính năng thay thế trong trình soạn thảo hay bảng tính để đổi dấu phẩy thành dấu ngắt dòng chỉ trong vài giây.',
      },
      {
        question: 'Tôi có thể loại dòng trùng lặp khỏi tệp CSV không?',
        answer:
          'Có. Bạn hãy sao chép cột hoặc các hàng từ tệp CSV, dán chúng dưới dạng dòng, loại trùng lặp rồi dán danh sách sạch trở lại bảng tính. Cách này giữ nguyên dữ liệu gốc của bạn trong tệp, đồng thời giúp bạn nhanh chóng có được danh sách duy nhất để nhập vào hệ thống khác.',
      },
      {
        question: 'Dòng trống sẽ ra sao?',
        answer:
          'Dòng trống được xử lý như bất kỳ dòng nào khác, nên việc bật "Remove empty lines" sẽ xóa chúng khỏi kết quả cùng với các dòng trùng lặp. Nếu bạn muốn giữ lại các dòng trống làm dấu tách giữa các nhóm, hãy để tùy chọn này tắt và chúng sẽ được giữ nguyên trong đầu ra.',
      },
      {
        question: 'Tôi có thể loại trùng lặp khỏi danh sách URL không?',
        answer:
          'Có. Bạn hãy dán một URL trên mỗi dòng, công cụ sẽ xóa các URL lặp lại, rất hữu ích khi làm sạch dữ liệu xuất từ khóa và danh sách sitemap. Nhờ vậy, bạn tránh được việc xử lý trùng lặp trong chiến dịch SEO hay khi gửi danh sách liên kết cho khách hàng và đồng nghiệp.',
      },
      {
        question: 'Tôi có thể loại trùng lặp bao nhiêu dòng cùng lúc?',
        answer:
          'Không có giới hạn cố định. Việc loại trùng lặp chạy hoàn toàn trong trình duyệt của bạn, nên danh sách hàng nghìn dòng vẫn được xử lý mượt mà trong bộ nhớ máy khách. Chỉ những danh sách cực lớn với hàng chục nghìn dòng mới có thể mất thêm một chút thời gian để hoàn thành.',
      },
      {
        question: 'Công cụ giữ lần xuất hiện đầu tiên hay cuối cùng của dòng trùng lặp?',
        answer:
          'Công cụ giữ lần xuất hiện đầu tiên của mỗi dòng duy nhất và xóa các lần lặp lại sau đó, nhờ đó thứ tự gốc của bạn được bảo toàn. Điều này rất quan trọng khi thứ tự danh sách mang ý nghĩa, chẳng hạn như thứ tự ưu tiên hay thứ tự thời gian của các mục.',
      },
      {
        question: 'Tôi có thể loại địa chỉ email trùng lặp khỏi danh sách không?',
        answer:
          'Có. Bạn hãy dán một địa chỉ trên mỗi dòng với tùy chọn phân biệt chữ hoa-thường tắt và cắt khoảng trắng bật, các địa chỉ trùng lặp sẽ gộp thành một mục duy nhất. Cách này giúp danh sách gửi thư của bạn sạch sẽ, tránh gửi trùng email cho cùng một người và cải thiện tỷ lệ mở thư.',
      },
      {
        question: 'Việc sắp xếp có thay đổi những dòng nào được giữ lại không?',
        answer:
          'Không. Việc sắp xếp chỉ sắp xếp lại các dòng duy nhất theo thứ tự bảng chữ cái sau khi loại trùng lặp; nó không thay đổi những dòng nào được xem là trùng lặp. Dù bạn bật hay tắt sắp xếp, tập hợp các dòng duy nhất trong kết quả vẫn giống nhau, chỉ khác nhau ở thứ tự hiển thị.',
      },
      {
        question: 'Công cụ có loại từ trùng lặp bên trong một dòng không?',
        answer:
          'Không. Công cụ so sánh toàn bộ dòng, nên các từ trùng lặp trong một dòng sẽ không bị chạm đến; bạn hãy dùng công cụ Find and Replace để làm sạch ở cấp độ từ. Ví dụ, dòng "apple apple banana" sẽ giữ nguyên, vì công cụ chỉ quan tâm đến việc cả dòng có xuất hiện nhiều lần trong danh sách hay không.',
      },
      {
        question: 'Công cụ có hoạt động với số hoặc địa chỉ IP không?',
        answer:
          'Có. Mọi nội dung dòng đều hoạt động, bao gồm số, địa chỉ IP, mã SKU và mã sản phẩm, miễn là mỗi mục nằm trên dòng riêng của nó. Bạn có thể làm sạch danh sách mã đơn hàng, địa chỉ IP trong nhật ký máy chủ hay mã vạch sản phẩm mà không cần định dạng lại dữ liệu trước.',
      },
      {
        question: 'Tôi có thể loại dòng trùng lặp khỏi nhật ký máy chủ không?',
        answer:
          'Có. Bạn hãy dán các dòng nhật ký vào rồi loại trùng lặp để tách riêng các lỗi duy nhất hay các mục IP lặp lại, giúp khắc phục sự cố nhanh hơn. Thay vì cuộn qua hàng nghìn dòng giống nhau, bạn sẽ thấy ngay những lỗi khác nhau thực sự đang xảy ra trên hệ thống của mình.',
      },
      {
        question: 'Remove Duplicate Lines có lưu hay tải danh sách của tôi lên không?',
        answer:
          'Không. Việc loại trùng lặp chạy ngay trong trình duyệt của bạn, và danh sách của bạn không bao giờ bị tải lên, lưu trữ hay chia sẻ. Điều này đặc biệt quan trọng với danh sách email khách hàng hay dữ liệu nội bộ nhạy cảm, vì chúng không bao giờ rời khỏi thiết bị của bạn.',
      },
      {
        question: 'Danh sách của tôi dùng dấu chấm phẩy thay vì dấu ngắt dòng thì sao?',
        answer:
          'Công cụ xem mỗi dòng là một mục, nên bạn hãy thay dấu chấm phẩy bằng dấu ngắt dòng trước rồi dán danh sách vào để loại trùng lặp. Hầu hết các trình soạn thảo đều có tính năng tìm và thay thế giúp bạn thực hiện việc này trong vài giây trước khi dán vào công cụ.',
      },
      {
        question: 'Tôi có thể loại trùng lặp mà vẫn giữ dòng trống không?',
        answer:
          'Có. Bạn hãy để tùy chọn "Remove empty lines" tắt, các dòng trống sẽ được giữ lại trong kết quả cùng với những mục đã loại trùng lặp. Cách này phù hợp khi dòng trống đóng vai trò dấu tách trực quan giữa các nhóm trong danh sách của bạn.',
      },
      {
        question: 'Công cụ có hoạt động trên điện thoại không?',
        answer:
          'Có. Công cụ hoạt động trong mọi trình duyệt di động hiện đại với cùng các tùy chọn loại trùng lặp và nút sao chép như trên máy tính. Bạn có thể làm sạch nhanh một danh sách ngay trên điện thoại rồi dán kết quả vào ứng dụng ghi chú hay email mà không cần mở máy tính.',
      },
    ],
  },
  'text-diff-checker': {
    instructions: [
      {
        title: 'Dán cả hai phiên bản',
        description:
          'Đặt bản gốc vào ô "Original Text" và phiên bản đã sửa vào ô "Modified Text".',
      },
      {
        title: 'Điều chỉnh tùy chọn so sánh',
        description:
          'Bật "Ignore whitespace" hoặc "Ignore case" nếu bạn muốn bỏ qua những thay đổi chỉ liên quan đến định dạng.',
      },
      {
        title: 'Xem lại các thay đổi được tô sáng',
        description:
          'Quét bảng so sánh theo dòng với dấu + cho dòng thêm, dấu - cho dòng xóa và số dòng đi kèm.',
      },
      {
        title: 'Kiểm tra tóm tắt thay đổi',
        description:
          'Đọc số dòng được thêm, bị xóa và không thay đổi để nắm nhanh mức độ khác biệt giữa hai phiên bản.',
      },
      {
        title: 'Chỉ so sánh một đoạn cụ thể',
        description:
          'Dán riêng đoạn bạn quan tâm vào cả hai ô để so sánh một đoạn văn hay một khối cấu hình mà không bị phần còn lại của tài liệu làm nhiễu.',
      },
      {
        title: 'Khắc phục kết quả so sánh có vẻ sai',
        description:
          'Nếu gần như mọi dòng đều hiển thị là đã thay đổi, hai văn bản có thể dùng dấu ngắt dòng hay thụt lề khác nhau; hãy bật "Ignore whitespace" và kiểm tra xem cả hai lần dán có bắt đầu cùng một dòng không.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra thay đổi cấu hình',
        input: 'Original: Cache TTL: 600\nModified: Cache TTL: 1800',
        output: '- Cache TTL: 600\n+ Cache TTL: 1800',
        explanation:
          'Tách rõ dòng đã thay đổi kèm theo số dòng cũ và mới.',
      },
      {
        title: 'Rà soát bài viết đã chỉnh sửa',
        input: 'Original: The tool is fast.\nModified: The tool is fast and free.',
        output: '- The tool is fast.\n+ The tool is fast and free.',
        explanation:
          'Tô sáng những từ được thêm vào ngay trong cùng một dòng sau khi chỉnh sửa.',
      },
    ],
    benefits: [
      'Dùng thuật toán căn chỉnh dãy con chung dài nhất (LCS) thay vì so khớp theo chỉ số đơn thuần',
      'Kết hợp tô màu với ký hiệu + / - để người mù màu vẫn đọc được',
      'Theo dõi số dòng của bản gốc và bản sửa song song với nhau',
      'Giữ bản nháp và tệp cấu hình mật hoàn toàn trong bộ nhớ trình duyệt',
    ],
    useCases: [
      'Rà soát chỉnh sửa giữa hai bản sửa đổi của bài viết hay hợp đồng',
      'Kiểm tra thay đổi trong đoạn cấu hình .env, JSON hay YAML',
      'Xác minh bản cập nhật dịch thuật hay bản sửa đổi chính sách pháp lý',
      'Kiểm tra nhanh bản nháp sửa đổi của học viên hay đồng nghiệp',
    ],
    faqs: [
      {
        question: 'Thuật toán so sánh xử lý dòng chèn vào giữa tệp như thế nào?',
        answer:
          'Vì công cụ dùng thuật toán so sánh dòng theo dãy con chung dài nhất (LCS), việc chèn thêm dòng chỉ làm dịch số dòng phía sau mà không đánh dấu toàn bộ phần còn lại của tệp là đã thay đổi. Nhờ vậy, bạn thấy chính xác dòng nào thực sự mới, thay vì phải lội qua hàng loạt dòng bị báo sai do lệch vị trí.',
      },
      {
        question: 'Tùy chọn "Ignore whitespace" làm gì?',
        answer:
          'Tùy chọn này cắt khoảng trắng ở đầu và cuối dòng, đồng thời gộp nhiều khoảng trắng liên tiếp thành một trước khi so sánh, giúp bạn tập trung vào thay đổi nội dung thay vì chỉnh sửa thụt lề. Điều này rất hữu ích khi hai phiên bản chỉ khác nhau ở định dạng mà nội dung thực sự vẫn giống hệt nhau.',
      },
      {
        question: 'Có giới hạn ký tự khi so sánh văn bản không?',
        answer:
          'Việc so sánh chạy trực tiếp trong trình duyệt của bạn mà không có giới hạn máy chủ; tài liệu thông thường lên đến vài nghìn dòng sẽ được so sánh gần như ngay lập tức. Bạn có thể so sánh cả những tài liệu dài mà không lo bị giới hạn dung lượng hay phải chờ tải lên máy chủ.',
      },
      {
        question: 'Text Diff Checker có miễn phí không?',
        answer:
          'Có. Text Diff Checker hoàn toàn miễn phí, không cần đăng ký, không giới hạn số lần so sánh và không yêu cầu tài khoản. Bạn có thể so sánh bao nhiêu cặp văn bản tùy thích, từ đoạn ngắn cho đến tài liệu dài, mà không gặp bất kỳ giới hạn hay tính năng trả phí nào.',
      },
      {
        question: 'Dòng thêm và dòng xóa khác nhau thế nào?',
        answer:
          'Dòng thêm chỉ xuất hiện trong văn bản đã sửa và được đánh dấu bằng ký hiệu +, còn dòng xóa chỉ xuất hiện trong văn bản gốc và được đánh dấu bằng ký hiệu -. Nhờ hai ký hiệu rõ ràng này, bạn nhanh chóng phân biệt được nội dung nào mới được bổ sung và nội dung nào đã bị loại bỏ khỏi phiên bản mới.',
      },
      {
        question: 'Tôi có thể so sánh hai tệp thay vì văn bản dán vào không?',
        answer:
          'Không trực tiếp. Bạn hãy sao chép nội dung của mỗi tệp rồi dán vào hai ô "Original Text" và "Modified Text" để so sánh chúng. Cách này áp dụng cho mọi loại tệp văn bản, từ code nguồn, cấu hình cho đến tài liệu, và chỉ mất vài giây để chuẩn bị.',
      },
      {
        question: 'Text Diff Checker có hoạt động với code không?',
        answer:
          'Có. Công cụ so sánh mọi văn bản theo dòng, bao gồm cả mã nguồn, nên bạn có thể phát hiện dòng đã thay đổi giữa hai phiên bản của script hay stylesheet. Dù là code Python, JavaScript hay CSS, các dòng thêm, xóa hay sửa đều được tô sáng rõ ràng để bạn rà soát nhanh.',
      },
      {
        question: 'Tôi có thể so sánh tệp cấu hình JSON hoặc YAML không?',
        answer:
          'Có. Bạn hãy dán từng phiên bản vào hai ô, công cụ sẽ tô sáng các khóa, giá trị và dòng đã thay đổi trong cấu hình của bạn. Điều này giúp bạn phát hiện ngay một giá trị bị sửa nhầm hay một khóa bị thiếu trước khi triển khai cấu hình mới lên máy chủ.',
      },
      {
        question: 'Tùy chọn "Ignore case" làm gì?',
        answer:
          'Tùy chọn này xem chữ hoa và chữ thường là như nhau trong quá trình so sánh, nên một dòng chỉ thay đổi cách viết hoa sẽ không bị đánh dấu là khác biệt. Điều này hữu ích khi bạn chỉ quan tâm đến thay đổi nội dung thực sự, chẳng hạn như khi rà soát bản dịch hay bản sửa lỗi chính tả mà chữ hoa-thường không quan trọng.',
      },
      {
        question: 'Tôi có thể so sánh văn bản bằng các ngôn ngữ khác nhau không?',
        answer:
          'Có. Việc so sánh hoạt động với mọi văn bản, dù các dòng bằng ngôn ngữ khác nhau đương nhiên sẽ hiển thị là đã thay đổi vì nội dung của chúng khác nhau. Công cụ không dịch hay hiểu ngôn ngữ, nó chỉ so sánh ký tự theo từng dòng, nên bạn vẫn dùng được cho bất kỳ ngôn ngữ nào.',
      },
      {
        question: 'Text Diff Checker có hiển thị thay đổi ở cấp độ ký tự không?',
        answer:
          'Không. Việc so sánh diễn ra theo từng dòng, nên một từ thay đổi sẽ khiến cả dòng của nó bị đánh dấu là đã thay đổi; để xem chi tiết hơn, bạn hãy so sánh riêng hai dòng đó với nhau. Dù vậy, chế độ xem theo dòng vẫn đủ để bạn nắm nhanh vị trí thay đổi trong tài liệu dài.',
      },
      {
        question: 'Tôi có thể so sánh tài liệu với phiên bản cũ hơn của nó không?',
        answer:
          'Có. Bạn hãy dán phiên bản cũ vào ô "Original Text" và phiên bản mới vào ô "Modified Text" để thấy mọi nội dung thêm vào và bị xóa. Cách này rất tiện khi bạn muốn rà soát lịch sử chỉnh sửa của hợp đồng, bài viết hay tài liệu chính sách trước khi phê duyệt phiên bản mới nhất.',
      },
      {
        question: 'Số dòng được hiển thị như thế nào trong kết quả so sánh?',
        answer:
          'Mỗi dòng giữ số dòng riêng của nó trong văn bản gốc, nên bạn có thể truy vết một dòng đã thay đổi về đúng vị trí của nó trong từng phiên bản. Nhờ vậy, khi thảo luận với đồng nghiệp hay ghi chú sửa đổi, bạn có thể trích dẫn chính xác số dòng cần xem lại mà không gây nhầm lẫn.',
      },
      {
        question: 'Text Diff Checker có lưu hay tải văn bản của tôi lên không?',
        answer:
          'Không. Việc so sánh chạy ngay trong trình duyệt của bạn, và văn bản của bạn không bao giờ bị tải lên, lưu trữ hay chia sẻ. Bạn có thể yên tâm so sánh cả những hợp đồng mật, bản nháp chưa công bố hay tệp cấu hình chứa thông tin nhạy cảm mà không lo rò rỉ dữ liệu.',
      },
      {
        question: 'Tôi có thể so sánh hợp đồng pháp lý bằng Text Diff Checker không?',
        answer:
          'Có. Bạn hãy dán hai phiên bản hợp đồng vào để phát hiện các điều khoản đã thay đổi, dù với những thay đổi pháp lý quan trọng, bạn vẫn nên nhờ luật sư rà soát lại. Công cụ giúp bạn thấy nhanh điều gì đã đổi, còn luật sư sẽ đánh giá ý nghĩa pháp lý của những thay đổi đó.',
      },
      {
        question: 'Điều gì xảy ra nếu tôi dán cùng một văn bản vào cả hai ô?',
        answer:
          'Kết quả so sánh sẽ hiển thị không dòng thêm và không dòng xóa, xác nhận hai văn bản giống hệt nhau. Đây là cách nhanh nhất để kiểm tra xem hai bản sao có thực sự trùng khớp hay không, chẳng hạn sau khi sao chép tệp qua lại giữa các thư mục.',
      },
      {
        question: 'Tôi có thể so sánh văn bản có dấu ngắt dòng khác nhau không?',
        answer:
          'Có. Nếu dấu ngắt dòng khác nhau, công cụ có thể đánh dấu các dòng là đã thay đổi; việc bật "Ignore whitespace" thường sẽ xóa những khác biệt chỉ mang tính định dạng này. Nhờ vậy, bạn không bị đánh lừa bởi những thay đổi kỹ thuật khi chuyển tệp giữa Windows, macOS và Linux.',
      },
      {
        question: 'Text Diff Checker có hoạt động với tài liệu lớn không?',
        answer:
          'Có. Tài liệu lên đến vài nghìn dòng được so sánh gần như ngay lập tức trong trình duyệt, mà không cần tải lên máy chủ. Bạn có thể so sánh cả những tài liệu dài như sách hướng dẫn hay bộ quy định mà vẫn nhận kết quả nhanh chóng và chính xác.',
      },
      {
        question: 'Tôi có thể dùng Text Diff Checker để rà soát bản dịch không?',
        answer:
          'Có. Bạn hãy dán bản dịch gốc và bản dịch đã sửa đổi để rà soát từng dòng đã chỉnh sửa song song với nhau. Cách này giúp biên tập viên thấy rõ dịch giả đã thay đổi những gì, từ cách chọn từ cho đến cấu trúc câu, trước khi phê duyệt bản dịch cuối cùng.',
      },
      {
        question: 'Text Diff Checker có hoạt động trên điện thoại không?',
        answer:
          'Có. Công cụ hoạt động trong mọi trình duyệt di động hiện đại với cùng tính năng so sánh song song và tô sáng như trên máy tính. Bạn có thể kiểm tra nhanh sự khác biệt giữa hai phiên bản văn bản ngay trên điện thoại khi đang di chuyển mà không cần mở máy tính.',
      },
    ],
  },
  'whitespace-remover': {
    instructions: [
      {
        title: 'Dán văn bản chưa định dạng',
        description:
          'Thả văn bản chứa khoảng trắng đôi, tab lạc hay dấu ngắt dòng bị vỡ vào ô "Input Text".',
      },
      {
        title: 'Chọn cách xử lý khoảng trắng và tab',
        description:
          'Gộp nhiều khoảng trắng liên tiếp thành một, chuyển tab thành một khoảng trắng, và cắt khoảng trắng ở đầu và cuối mỗi dòng.',
      },
      {
        title: 'Chọn tùy chọn ngắt dòng',
        description:
          'Giữ nguyên dấu ngắt đoạn, chỉ xóa dòng trống, thay dấu ngắt dòng bằng khoảng trắng để nối lại câu bị ngắt, hoặc xóa mọi dấu ngắt để tạo thành một dòng liên tục.',
      },
      {
        title: 'Xem lại kết quả đã làm sạch',
        description:
          'Kiểm tra kết quả trong bảng đầu ra và số ký tự cho biết chính xác có bao nhiêu ký tự đã bị xóa trong quá trình làm sạch.',
      },
      {
        title: 'Sao chép văn bản đã làm sạch',
        description:
          'Dùng nút sao chép để lấy kết quả đã chuẩn hóa, rồi dán vào tài liệu, biểu mẫu hay trường CMS của bạn.',
      },
      {
        title: 'Sửa câu bị dính vào nhau',
        description:
          'Nếu các từ ở dòng riêng lẻ bị nối lại mà không có khoảng trắng, hãy chuyển sang "Replace with spaces". Nếu các đoạn văn bị gộp thành một khối, hãy chuyển lại sang "Remove blank lines".',
      },
    ],
    examples: [
      {
        title: 'Làm sạch văn bản sao chép từ PDF',
        input: '   First   line with   extra spaces.\n\n\nSecond   line   here.   ',
        output: 'First line with extra spaces.\nSecond line here.',
        explanation:
          'Gộp khoảng trắng đôi, cắt lề hai bên và xóa các dòng trống thừa.',
      },
      {
        title: 'Nối các dòng bị vỡ thành một câu',
        input: 'This sentence was\nbroken across\ntwo lines.',
        output: 'This sentence was broken across two lines.',
        explanation:
          'Thay dấu ngắt dòng bằng khoảng trắng để nối lại câu bị ngắt một cách chính xác.',
      },
    ],
    benefits: [
      'Sửa dấu ngắt dòng bị vỡ từ tài liệu PDF chỉ bằng một cú bấm',
      'Đếm chính xác số ký tự đã xóa trong quá trình làm sạch',
      'Hỗ trợ giữ nguyên đoạn văn trong khi chỉ loại bỏ khoảng trắng thừa',
      'Xử lý mọi thứ ngay trong trình duyệt',
    ],
    useCases: [
      'Sửa văn bản bị vỡ khi sao chép ra khỏi PDF nhiều cột',
      'Xóa khoảng trắng ở cuối trước khi dán vào trường CMS',
      'Gộp địa chỉ hay đoạn trích nhiều dòng thành một dòng duy nhất',
      'Chuẩn hóa ghi chú thụt lề bằng tab thành văn bản sạch, cách đều một khoảng trắng',
    ],
    faqs: [
      {
        question: 'Tôi nên chọn tùy chọn ngắt dòng nào cho văn bản sao chép từ PDF?',
        answer:
          'Bạn hãy chọn "Replace with spaces" khi dấu ngắt dòng cứng đã ngắt câu giữa chừng, hoặc "Remove blank lines" nếu mỗi dòng đã là một đoạn văn hay mục danh sách riêng biệt. Việc chọn đúng tùy chọn sẽ quyết định câu văn có đọc trôi chảy hay các đoạn văn có giữ được cấu trúc ban đầu của chúng hay không.',
      },
      {
        question: 'Việc gộp khoảng trắng có ảnh hưởng đến khoảng trắng đơn giữa các từ không?',
        answer:
          'Không. Chỉ những chuỗi hai khoảng trắng liên tiếp trở lên mới được gộp thành một khoảng trắng duy nhất. Khoảng trắng đơn giữa các từ hoàn toàn không bị chạm đến, nên văn bản của bạn vẫn giữ khoảng cách bình thường và dễ đọc sau khi làm sạch.',
      },
      {
        question: 'Công cụ có xóa cả tab không?',
        answer:
          'Có, khi tùy chọn "Convert tabs to spaces" được bật, ký tự tab sẽ được chuyển thành một khoảng trắng và gộp chung với khoảng trắng xung quanh. Điều này rất hữu ích với văn bản sao chép từ bảng tính hay trình soạn thảo dùng tab để thụt lề, vì kết quả sẽ gọn gàng và đồng nhất.',
      },
      {
        question: 'Whitespace Remover có miễn phí không?',
        answer:
          'Có. Công cụ này hoàn toàn miễn phí, không cần đăng ký, không cần tài khoản và không giới hạn số lần bạn làm sạch văn bản. Bạn có thể dùng bao nhiêu lần tùy thích, từ một đoạn ngắn cho đến cả tài liệu dài, mà không gặp bất kỳ giới hạn hay chi phí ẩn nào.',
      },
      {
        question: 'Văn bản của tôi có rời khỏi trình duyệt khi dùng Whitespace Remover không?',
        answer:
          'Không. Mọi thao tác làm sạch đều diễn ra ngay trong trình duyệt của bạn, nên văn bản của bạn không bao giờ bị tải lên máy chủ. Bạn có thể yên tâm xử lý cả những tài liệu riêng tư hay nội dung chưa công bố mà không lo thông tin bị gửi ra ngoài.',
      },
      {
        question: 'Tùy chọn "Remove blank lines" làm gì?',
        answer:
          'Tùy chọn này xóa các dòng trống khỏi văn bản của bạn trong khi vẫn giữ nguyên mọi dòng có nội dung, nhờ đó đoạn văn và mục danh sách vẫn giữ đúng thứ tự. Đây là lựa chọn tốt khi bạn muốn loại bỏ khoảng trống thừa giữa các đoạn mà không làm xáo trộn cấu trúc tổng thể của tài liệu.',
      },
      {
        question: 'Tôi có thể giữ dấu ngắt đoạn trong khi xóa khoảng trắng thừa không?',
        answer:
          'Có. Bạn hãy chọn tùy chọn giữ lại dấu ngắt dòng và chỉ gộp khoảng trắng thừa, nhờ đó các đoạn văn của bạn vẫn tách riêng trong khi khoảng trắng bên trong chúng được sửa lại. Cách này giúp văn bản sạch sẽ mà vẫn giữ nguyên bố cục đoạn văn như ban đầu.',
      },
      {
        question: '"Replace with spaces" khác với việc xóa mọi dấu ngắt dòng thế nào?',
        answer:
          '"Replace with spaces" nối các dòng bằng một khoảng trắng để câu bị ngắt đọc lại trôi chảy, còn việc xóa mọi dấu ngắt sẽ nối các dòng trực tiếp mà không có khoảng trắng giữa chúng. Nếu chọn sai, các từ ở cuối dòng này và đầu dòng kia có thể dính vào nhau, nên bạn hãy chọn tùy chọn có khoảng trắng khi muốn nối câu.',
      },
      {
        question: 'Whitespace Remover có xóa khoảng trắng ở cuối dòng không?',
        answer:
          'Có. Khoảng trắng và tab ở cuối mỗi dòng đều được cắt bỏ, rất hữu ích trước khi dán văn bản vào biểu mẫu hay trường code. Khoảng trắng ở cuối dòng thường vô hình nhưng có thể gây lỗi xác thực biểu mẫu hoặc làm code trông lộn xộn, nên việc cắt chúng giúp văn bản của bạn sạch sẽ hơn.',
      },
      {
        question: 'Công cụ có xóa khoảng trắng và thụt lề ở đầu dòng không?',
        answer:
          'Có. Khoảng trắng ở đầu mỗi dòng được cắt bỏ, nên văn bản dán vào bị thụt lề hay lệch hàng sẽ ngay ngắn trở lại. Điều này đặc biệt hữu ích khi bạn sao chép nội dung từ PDF hay email mà các dòng bị thụt vào với độ sâu khác nhau một cách ngẫu nhiên.',
      },
      {
        question: 'Tôi có thể làm sạch văn bản sao chép từ bảng tính bằng Whitespace Remover không?',
        answer:
          'Có. Tab giữa các ô trong bảng tính được chuyển thành một khoảng trắng, và các dòng trống thừa từ vùng đã sao chép cũng bị xóa. Nhờ vậy, dữ liệu bảng tính dán vào tài liệu hay biểu mẫu sẽ gọn gàng, không còn khoảng trống lạ hay tab làm lệch bố cục văn bản của bạn.',
      },
      {
        question: 'Làm thế nào để biến văn bản nhiều dòng thành một dòng duy nhất?',
        answer:
          'Bạn hãy dán văn bản vào, rồi chọn tùy chọn thay dấu ngắt dòng bằng khoảng trắng hoặc xóa mọi dấu ngắt, sau đó sao chép kết quả một dòng thu được. Cách này rất tiện khi bạn cần dán địa chỉ, mô tả sản phẩm hay đoạn trích vào một trường chỉ cho phép nhập một dòng duy nhất.',
      },
      {
        question: 'Whitespace Remover có thay đổi dấu câu, chữ cái hay số không?',
        answer:
          'Không. Công cụ chỉ thay đổi ký tự khoảng trắng như khoảng trắng, tab và dấu ngắt dòng; từ ngữ, dấu câu và số của bạn vẫn giữ nguyên như cũ. Bạn không phải lo nội dung bị sửa đổi ngoài ý muốn, vì mọi ký tự có ý nghĩa trong văn bản đều được bảo toàn tuyệt đối.',
      },
      {
        question: 'Tôi có thể dùng Whitespace Remover để làm sạch văn bản trước khi dán vào biểu mẫu không?',
        answer:
          'Có. Công cụ rất phù hợp để loại bỏ khoảng trắng ở cuối và dấu ngắt dòng lạc khỏi địa chỉ, tên hay mô tả trước khi đưa chúng vào biểu mẫu web hay trường CMS. Văn bản sạch sẽ giúp biểu mẫu xác thực đúng và tránh lỗi khó hiểu do ký tự ẩn gây ra.',
      },
      {
        question: 'Số ký tự hiển thị sau khi làm sạch có ý nghĩa gì?',
        answer:
          'Con số đó cho biết có bao nhiêu ký tự đã bị xóa trong quá trình làm sạch, để bạn thấy chính xác công cụ đã loại bỏ bao nhiêu khoảng trắng thừa khỏi văn bản. Nếu con số này lớn bất ngờ, đó là dấu hiệu cho thấy văn bản gốc của bạn chứa rất nhiều khoảng trắng ẩn mà mắt thường khó nhận ra.',
      },
      {
        question: 'Whitespace Remover có hoạt động với tài liệu rất dài không?',
        answer:
          'Có. Vì công cụ chạy ngay trong trình duyệt của bạn, bạn có thể dán tài liệu dài, dù những khối văn bản cực lớn có thể mất một chút thời gian để xử lý. Với hầu hết các tài liệu thông thường, kết quả sẽ xuất hiện gần như ngay lập tức mà không cần chờ đợi.',
      },
      {
        question: 'Tôi có thể hoàn tác việc làm sạch nếu chọn sai tùy chọn không?',
        answer:
          'Văn bản gốc của bạn vẫn nằm trong ô nhập liệu, nên bạn chỉ cần chọn một tùy chọn khác và kết quả sẽ cập nhật mà không làm mất văn bản đã dán. Nhờ vậy, bạn có thể thử nhiều tùy chọn khác nhau để tìm ra kết quả ưng ý nhất mà không phải dán lại từ đầu.',
      },
      {
        question: 'Whitespace Remover có xóa khoảng trắng bên trong từ không?',
        answer:
          'Không. Khoảng trắng bên trong từ vốn là khoảng trắng đơn nên được giữ nguyên; chỉ những chuỗi hai khoảng trắng trở lên mới bị gộp lại. Điều này đảm bảo các từ trong văn bản của bạn không bao giờ bị dính vào nhau hay biến dạng sau khi làm sạch.',
      },
      {
        question: 'Công cụ làm sạch những loại khoảng trắng nào?',
        answer:
          'Công cụ làm sạch khoảng trắng thường, ký tự tab, khoảng trắng ở đầu và cuối dòng, dòng trống và dấu ngắt dòng không mong muốn. Nhờ bao quát đầy đủ các loại khoảng trắng này, hầu hết các vấn đề về định dạng khi sao chép văn bản từ PDF, email hay bảng tính đều được xử lý trong một lần duy nhất.',
      },
      {
        question: 'Tôi có thể dùng Whitespace Remover cho code không?',
        answer:
          'Công cụ hoạt động với văn xuôi, nhưng bạn hãy cẩn thận với code nhạy cảm với thụt lề như Python, vì việc cắt khoảng trắng ở đầu dòng có thể thay đổi cách code vận hành. Với code thông thường, bạn nên dùng trình định dạng code chuyên dụng thay vì công cụ làm sạch khoảng trắng này.',
      },
    ],
  },
  'sort-lines': {
    instructions: [
      {
        title: 'Nhập một mục trên mỗi dòng',
        description:
          'Dán danh sách của bạn vào trường "Input Lines", mỗi mục nằm trên dòng riêng của nó.',
      },
      {
        title: 'Chọn thứ tự sắp xếp',
        description:
          'Chọn A → Z, Z → A, Natural (1, 2, 10), Shortest/Longest First, Reverse Order hay Shuffle.',
      },
      {
        title: 'Đặt chế độ phân biệt chữ hoa-thường',
        description:
          'Bật so sánh phân biệt chữ hoa-thường nếu chữ hoa và chữ thường nên được xếp riêng; nếu không, "apple" và "Apple" được xem là như nhau.',
      },
      {
        title: 'Bật tùy chọn làm sạch',
        description:
          'Tùy ý loại bỏ dòng trống hoặc xóa trùng lặp trong cùng một lần để danh sách đã sắp xếp sạch sẽ ngay từ đầu.',
      },
      {
        title: 'Xem lại và sao chép danh sách đã sắp xếp',
        description:
          'Kiểm tra kết quả đã sắp xếp theo thứ tự, rồi sao chép bằng một cú bấm để dán vào tài liệu, bảng tính hay tệp code của bạn.',
      },
      {
        title: 'Sửa mục đánh số bị xếp sai thứ tự',
        description:
          'Nếu "Item 10" xuất hiện trước "Item 2", hãy chuyển từ A → Z sang Natural sort, chế độ này so sánh các số bên trong mỗi dòng theo giá trị số học.',
      },
    ],
    examples: [
      {
        title: 'Sắp xếp số tự nhiên so với sắp xếp văn bản chuẩn',
        input: 'Item 10\nItem 2\nItem 1',
        output: 'Item 1\nItem 2\nItem 10',
        explanation:
          'Chế độ Natural so sánh các số nhúng trong chuỗi theo giá trị số học nên Item 2 đứng trước Item 10.',
      },
      {
        title: 'Sắp xếp theo độ dài',
        input: 'banana\nkiwi\nstrawberry',
        output: 'kiwi\nbanana\nstrawberry',
        explanation:
          'Chế độ Shortest First sắp xếp các dòng theo độ dài ký tự.',
      },
    ],
    benefits: [
      'Có bộ so sánh theo ngôn ngữ địa phương và sắp xếp số tự nhiên',
      'Kết hợp sắp xếp với việc xóa dòng trống và loại trùng lặp',
      'Hỗ trợ sắp xếp theo độ dài cho bảng giao diện và kiểm tra nội dung',
      'Sao chép kết quả đã sắp xếp chỉ bằng một cú bấm',
    ],
    useCases: [
      'Sắp xếp tài liệu tham khảo, bảng thuật ngữ và danh sách tra cứu theo bảng chữ cái',
      'Xếp tệp hay ca kiểm thử được đánh số theo thứ tự tự nhiên (Item 1, 2, 10)',
      'Sắp xếp thuộc tính CSS, câu lệnh import hay khóa biến môi trường',
      'Xáo trộn mục tham gia giveaway hay câu hỏi trắc nghiệm bằng Shuffle',
    ],
    faqs: [
      {
        question: 'Sắp xếp A → Z và Natural sort khác nhau thế nào?',
        answer:
          'Sắp xếp theo bảng chữ cái chuẩn đặt "Item 10" trước "Item 2" vì ký tự "1" đứng trước "2". Ngược lại, Natural sort phân tích các số bên trong chuỗi nên "Item 2" đứng trước "Item 10". Nếu danh sách của bạn chứa số, Natural sort thường cho kết quả đúng với trực giác của con người hơn.',
      },
      {
        question: 'Tôi có thể xóa mục trùng lặp trong khi sắp xếp không?',
        answer:
          'Có. Bạn hãy bật tùy chọn "Remove duplicates" để loại trùng lặp và sắp xếp danh sách cùng lúc. Công cụ sẽ giữ lại lần xuất hiện đầu tiên của mỗi dòng rồi sắp xếp các dòng duy nhất còn lại, nhờ đó bạn có được danh sách sạch và gọn gàng chỉ trong một thao tác duy nhất.',
      },
      {
        question: 'Reverse Order khác Z → A như thế nào?',
        answer:
          'Z → A sắp xếp theo thứ tự bảng chữ cái giảm dần, còn Reverse Order lật ngược dãy dòng hiện có của bạn từ dưới lên trên mà không sắp xếp theo bảng chữ cái. Nếu bạn chỉ muốn đảo ngược thứ tự danh sách mà vẫn giữ nguyên cách sắp xếp ban đầu, hãy dùng Reverse Order thay vì Z → A.',
      },
      {
        question: 'Công cụ Sort Lines có miễn phí không?',
        answer:
          'Có. Công cụ này hoàn toàn miễn phí, không cần đăng ký, không cần tài khoản và không giới hạn số danh sách bạn sắp xếp. Bạn có thể sắp xếp bao nhiêu danh sách tùy thích, từ danh sách ngắn vài dòng cho đến danh sách dài hàng nghìn dòng, mà không gặp bất kỳ giới hạn nào.',
      },
      {
        question: 'Danh sách của tôi có rời khỏi trình duyệt khi sắp xếp không?',
        answer:
          'Không. Việc sắp xếp diễn ra ngay trong trình duyệt của bạn, nên danh sách của bạn không bao giờ bị tải lên máy chủ. Bạn có thể yên tâm sắp xếp cả những danh sách nội bộ hay dữ liệu khách hàng nhạy cảm mà không lo thông tin bị gửi ra ngoài.',
      },
      {
        question: 'Natural sort là gì và khi nào nên dùng nó?',
        answer:
          'Natural sort so sánh các số bên trong văn bản theo giá trị số học, nên bạn hãy dùng nó cho các mục được đánh số như "Chapter 2" và "Chapter 10" để giữ đúng thứ tự số thực sự. Đây là lựa chọn tốt nhất cho tên tệp, mục lục, danh sách bước hay bất kỳ danh sách nào có số thứ tự nhúng trong tên.',
      },
      {
        question: 'Tôi có thể sắp xếp danh sách từ Z đến A không?',
        answer:
          'Có. Bạn hãy chọn tùy chọn Z → A để sắp xếp các dòng theo thứ tự bảng chữ cái ngược lại. Chế độ này hữu ích khi bạn muốn xem các mục cuối bảng chữ cái trước, hoặc khi cần đảo ngược thứ tự hiển thị của một danh sách đã sắp xếp sẵn.',
      },
      {
        question: 'Tôi có thể sắp xếp dòng theo độ dài thay vì theo bảng chữ cái không?',
        answer:
          'Có. Bạn hãy chọn Shortest First hoặc Longest First để xếp các dòng theo độ dài ký tự, rất tiện khi kiểm tra bảng giao diện hay căn chỉnh nội dung. Chế độ này giúp bạn nhanh chóng thấy từ ngắn nhất hay dài nhất trong danh sách và phát hiện những mục có thể làm vỡ bố cục giao diện.',
      },
      {
        question: 'Tùy chọn Shuffle trong công cụ Sort Lines làm gì?',
        answer:
          'Shuffle xáo trộn ngẫu nhiên thứ tự các dòng của bạn, rất hữu ích cho mục tham gia giveaway, câu hỏi trắc nghiệm hay bất kỳ danh sách nào bạn muốn sắp xếp ngẫu nhiên. Mỗi lần bấm Shuffle sẽ cho ra một thứ tự khác nhau, nên bạn có thể xáo lại nhiều lần cho đến khi hài lòng.',
      },
      {
        question: 'Công cụ Sort Lines có xóa dòng trống không?',
        answer:
          'Có, nếu bạn bật tùy chọn dòng trống. Nếu không, các dòng trống sẽ được giữ lại trong kết quả đầu ra. Việc giữ hay xóa dòng trống tùy thuộc vào mục đích của bạn: giữ lại khi dòng trống đóng vai trò dấu tách nhóm, xóa đi khi bạn muốn danh sách gọn gàng và liên tục.',
      },
      {
        question: 'Tôi có thể sắp xếp phân biệt chữ hoa-thường bằng công cụ Sort Lines không?',
        answer:
          'Có. Bạn hãy bật so sánh phân biệt chữ hoa-thường để sắp xếp chữ hoa và chữ thường riêng biệt; khi tắt, "apple" và "Apple" được xem là như nhau. Trong hầu hết các trường hợp, tắt tùy chọn này sẽ cho kết quả tự nhiên hơn, vì người dùng thường mong đợi các từ giống nhau đứng cạnh nhau bất kể chữ hoa hay thường.',
      },
      {
        question: 'Công cụ Sort Lines có hoạt động với số và ngày tháng không?',
        answer:
          'Có. Natural sort xếp các số nhúng đúng thứ tự, và ngày tháng sẽ sắp xếp đúng khi viết theo định dạng YYYY-MM-DD; các định dạng ngày khác sẽ được sắp xếp như văn bản thuần túy. Vì vậy, nếu danh sách của bạn chứa ngày tháng, bạn nên chuẩn hóa chúng về định dạng YYYY-MM-DD trước khi sắp xếp.',
      },
      {
        question: 'Tôi có thể sắp xếp các cột bên trong một dòng, như giá trị CSV không?',
        answer:
          'Không. Công cụ sắp xếp toàn bộ dòng, nên mỗi dòng di chuyển như một đơn vị; nó không sắp xếp lại các giá trị tách nhau bằng dấu phẩy trong một dòng. Nếu bạn cần sắp xếp giá trị trong dòng, hãy tách chúng thành nhiều dòng trước, sắp xếp, rồi gộp lại sau khi hoàn thành.',
      },
      {
        question: 'Điều gì xảy ra với dòng trùng lặp khi tôi sắp xếp?',
        answer:
          'Các dòng trùng lặp vẫn nằm trong danh sách trừ khi bạn bật "Remove duplicates", tùy chọn này chỉ giữ lại lần xuất hiện đầu tiên của mỗi dòng trước khi sắp xếp. Nhờ vậy, bạn có thể kiểm soát chính xác việc danh sách cuối cùng có chứa các mục lặp lại hay không.',
      },
      {
        question: 'Tôi có thể đảo ngược danh sách mà không sắp xếp theo bảng chữ cái không?',
        answer:
          'Có. Bạn hãy dùng Reverse Order để lật danh sách từ dưới lên trên trong khi vẫn giữ nguyên nội dung bên trong mỗi dòng. Cách này rất tiện khi bạn muốn đảo ngược thứ tự thời gian của nhật ký hay danh sách việc cần làm mà không muốn xáo trộn nội dung các mục.',
      },
      {
        question: 'Công cụ Sort Lines có xử lý chữ có dấu và ngôn ngữ khác không?',
        answer:
          'Có. Công cụ dùng bộ so sánh theo ngôn ngữ địa phương, nên ký tự có dấu và chữ cái không phải tiếng Anh được sắp xếp theo thứ tự hợp lý thay vì theo mã ký tự thô. Điều này giúp danh sách tiếng Việt hay tiếng Pháp của bạn được sắp xếp đúng như cách người bản ngữ mong đợi.',
      },
      {
        question: 'Tôi có thể sắp xếp danh sách đánh số như "1. Apple, 2. Banana, 10. Cherry" không?',
        answer:
          'Có. Natural sort đọc các số ở đầu mỗi dòng, nên "2. Banana" sẽ đứng trước "10. Cherry" một cách chính xác. Đây là trường hợp điển hình mà sắp xếp theo bảng chữ cái chuẩn sẽ cho kết quả sai, vì vậy bạn luôn nên chọn Natural sort cho danh sách có đánh số.',
      },
      {
        question: 'Công cụ Sort Lines xử lý được danh sách lớn đến mức nào?',
        answer:
          'Công cụ chạy ngay trong trình duyệt của bạn và xử lý danh sách dài một cách dễ dàng, dù những lần dán cực lớn với hàng chục nghìn dòng có thể mất một chút thời gian. Với hầu hết các danh sách thông thường, kết quả sẽ xuất hiện gần như ngay lập tức mà bạn không cần chờ đợi.',
      },
      {
        question: 'Việc sắp xếp có thay đổi nội dung bên trong mỗi dòng không?',
        answer:
          'Không. Việc sắp xếp chỉ thay đổi thứ tự của các dòng; từ ngữ, số và dấu câu bên trong mỗi dòng vẫn giữ nguyên chính xác. Bạn có thể yên tâm rằng nội dung từng mục không bị sửa đổi, chỉ vị trí của chúng trong danh sách thay đổi mà thôi.',
      },
      {
        question: 'Tôi có thể hoàn tác việc sắp xếp nếu chọn sai thứ tự không?',
        answer:
          'Danh sách gốc của bạn vẫn nằm trong ô nhập liệu, nên bạn có thể chọn một thứ tự sắp xếp khác và kết quả sẽ cập nhật mà không làm mất danh sách đã dán. Nhờ vậy, bạn thoải mái thử nhiều kiểu sắp xếp khác nhau cho đến khi tìm được thứ tự phù hợp nhất.',
      },
    ],
  },
  'find-and-replace': {
    instructions: [
      {
        title: 'Nhập cụm từ cần tìm và thay thế',
        description:
          'Gõ văn bản hay mẫu bạn muốn tìm vào ô "Find", và chuỗi đích vào ô "Replace with".',
      },
      {
        title: 'Đặt cờ so khớp',
        description:
          'Bật hoặc tắt "Case-sensitive", "Whole word only" hay "Use Regular Expression (RegExp)" để so khớp theo mẫu.',
      },
      {
        title: 'Dán văn bản cần chỉnh sửa',
        description:
          'Dán toàn bộ tài liệu, đoạn CSV hay khối code vào trường văn bản nguồn để mọi lần xuất hiện được xử lý trong một lần duy nhất.',
      },
      {
        title: 'Kiểm tra số lần khớp trực tiếp',
        description:
          'Xem số lần thay thế trực tiếp để xác nhận mẫu đang khớp đúng những vị trí bạn mong đợi trước khi sao chép.',
      },
      {
        title: 'Xem lại kết quả và sao chép',
        description:
          'Quét văn bản đã cập nhật để phát hiện thay đổi ngoài ý muốn, rồi sao chép bằng một cú bấm để dán trở lại tài liệu hay trình soạn thảo của bạn.',
      },
      {
        title: 'Sửa lỗi mẫu không thay thế được gì',
        description:
          'Nếu số lần khớp bằng không, hãy kiểm tra phân biệt chữ hoa-thường, tắt "Whole word only", hoặc thoát ký tự đặc biệt như dấu chấm và dấu ngoặc đơn trong chế độ RegExp; mẫu không hợp lệ sẽ hiển thị thông báo lỗi cú pháp.',
      },
    ],
    examples: [
      {
        title: 'Định dạng lại bằng nhóm bắt RegExp',
        input: 'Find: Order #(\\d+)  |  Replace: Ref-$1\nSource: Order #1042 shipped.',
        output: 'Ref-1042 shipped.',
        explanation:
          'Dùng nhóm bắt RegExp ($1) để giữ nguyên mã đơn hàng dạng số trong khi thay đổi tiền tố.',
      },
      {
        title: 'Đổi tên thương hiệu cùng lúc',
        input: 'Find: OldBrand  |  Replace: NewBrand\nSource: OldBrand launches OldBrand Pro today.',
        output: 'NewBrand launches NewBrand Pro today.',
        explanation:
          'Mọi lần xuất hiện của tên thương hiệu trong toàn bộ tài liệu đều được thay đổi trong một lần duy nhất.',
      },
    ],
    benefits: [
      'Hiển thị số lần khớp trực tiếp và phản hồi lỗi cú pháp rõ ràng cho mẫu RegExp không hợp lệ',
      'Tùy chọn cả từ giúp tránh khớp nhầm một phần bên trong từ dài hơn',
      'Hỗ trợ nhóm bắt RegExp ($1, $2) để viết lại văn bản có cấu trúc',
      'Chạy ngay trong trình duyệt nên đoạn trích riêng tư và thông tin đăng nhập vẫn nằm trên thiết bị của bạn',
    ],
    useCases: [
      'Đổi tên thương hiệu, URL hay ngày tháng trong tài liệu dài',
      'Định dạng lại mã định danh hay ngày tháng bằng nhóm bắt biểu thức chính quy',
      'Cập nhật dấu tách hay biến giữ chỗ trong mẫu',
      'Dọn lỗi chính tả lặp lại trước khi xuất bản',
    ],
    faqs: [
      {
        question: 'Tôi có thể dùng nhóm bắt như $1 trong chế độ RegExp không?',
        answer:
          'Có. Khi ô "Use Regular Expression (RegExp)" được bật, các nhóm trong dấu ngoặc đơn ở ô Find có thể được tham chiếu dưới dạng $1, $2, v.v. trong ô Replace. Nhờ vậy, bạn có thể giữ lại một phần của nội dung đã khớp trong khi thay đổi phần còn lại, chẳng hạn như đổi tiền tố của mã đơn hàng mà vẫn giữ nguyên dãy số phía sau.',
      },
      {
        question: 'Vì sao "Whole word only" bị tắt trong chế độ RegExp?',
        answer:
          'Trong chế độ RegExp, bạn có thể tự kiểm soát ranh giới từ trực tiếp bằng cách dùng \\b bên trong mẫu của mình. Vì biểu thức chính quy đã cho bạn toàn quyền định nghĩa ranh giới từ theo ý muốn, tùy chọn "Whole word only" riêng biệt trở nên thừa và bị tắt để tránh xung đột giữa hai cách thiết lập.',
      },
      {
        question: 'Để trống ô "Replace with" có xóa văn bản đã khớp không?',
        answer:
          'Có. Để trống ô Replace sẽ xóa sạch mọi lần xuất hiện đã khớp, nên bạn hãy kiểm tra bản xem trước trước để tránh xóa mất văn bản vẫn cần. Đây là cách nhanh nhất để dọn các từ thừa, thẻ giữ chỗ hay ký tự rác khỏi tài liệu, nhưng bạn nên xem lại kết quả cẩn thận trước khi sao chép.',
      },
      {
        question: 'Công cụ Find & Replace có miễn phí không?',
        answer:
          'Có. Công cụ này hoàn toàn miễn phí, không cần đăng ký, không cần tài khoản và không giới hạn số lần thay thế bạn thực hiện. Bạn có thể xử lý bao nhiêu tài liệu tùy thích, từ đoạn ngắn cho đến văn bản dài, mà không gặp bất kỳ giới hạn hay tính năng trả phí nào.',
      },
      {
        question: 'Văn bản của tôi có rời khỏi trình duyệt khi dùng Find & Replace không?',
        answer:
          'Không. Mọi thao tác đều chạy ngay trong trình duyệt của bạn, nên đoạn trích riêng tư, tài liệu và code vẫn nằm trên thiết bị của bạn. Bạn có thể yên tâm thay thế nội dung trong cả những tài liệu mật hay đoạn code chứa thông tin đăng nhập mà không lo dữ liệu bị gửi ra ngoài.',
      },
      {
        question: 'Số lần khớp trực tiếp hiển thị điều gì?',
        answer:
          'Con số này cho biết có bao nhiêu lần xuất hiện của cụm từ Find đã được thay thế, để bạn xác nhận thao tác thay thế đã chạm đúng những vị trí mong đợi. Nếu số lần khớp cao hơn hay thấp hơn dự kiến, đó là dấu hiệu cho thấy mẫu của bạn có thể đang khớp quá rộng hoặc quá hẹp.',
      },
      {
        question: 'Tôi có thể chỉ thay thế cả từ mà không thay một phần của từ dài hơn không?',
        answer:
          'Có. Bạn hãy bật "Whole word only" để "cat" được thay thế còn "catalog" vẫn giữ nguyên; trong chế độ RegExp, bạn hãy dùng ranh giới từ \\b thay thế. Tùy chọn này giúp bạn tránh những thay đổi ngoài ý muốn khi từ cần tìm cũng xuất hiện bên trong các từ dài hơn khác.',
      },
      {
        question: 'Find & Replace có phân biệt chữ hoa-thường không?',
        answer:
          'Chỉ khi bạn bật tùy chọn "Case-sensitive". Khi tùy chọn này tắt, "Apple" và "apple" được xem là cùng một kết quả khớp. Mặc định tắt sẽ tiện hơn cho hầu hết các trường hợp, còn bật lên sẽ hữu ích khi bạn cần phân biệt tên riêng với từ thường hay phân biệt các định danh trong code.',
      },
      {
        question: 'Tôi có thể thay thế văn bản trên nhiều dòng cùng lúc không?',
        answer:
          'Có. Công cụ xử lý toàn bộ văn bản đã dán trong một lần duy nhất, nên các kết quả khớp trên mọi dòng đều được thay thế cùng nhau. Bạn không cần xử lý từng dòng riêng lẻ, dù tài liệu của bạn dài hàng trăm dòng hay chứa nhiều đoạn văn khác nhau.',
      },
      {
        question: 'Điều gì xảy ra nếu biểu thức chính quy của tôi không hợp lệ?',
        answer:
          'Công cụ sẽ hiển thị thông báo lỗi cú pháp rõ ràng thay vì tạo ra kết quả sai, để bạn sửa mẫu trước khi sao chép bất cứ thứ gì. Nhờ vậy, bạn không bao giờ phải lo lắng về việc vô tình làm hỏng tài liệu vì một dấu ngoặc đơn bị thiếu hay một ký tự đặc biệt chưa được thoát đúng cách.',
      },
      {
        question: 'Tôi có thể tìm ký tự đặc biệt như dấu ngắt dòng hay tab trong Find & Replace không?',
        answer:
          'Có, trong chế độ RegExp, bạn có thể dùng các ký tự thoát như \\n cho dấu ngắt dòng và \\t cho tab bên trong mẫu của mình. Điều này mở ra nhiều khả năng xử lý văn bản nâng cao, chẳng hạn như gộp các dòng bị ngắt hay chuẩn hóa khoảng trắng trong toàn bộ tài liệu chỉ bằng một mẫu duy nhất.',
      },
      {
        question: 'Tôi có thể hoán đổi hai từ bằng nhóm bắt không?',
        answer:
          'Có. Ví dụ, bạn hãy tìm (\\w+) (\\w+) rồi thay bằng $2 $1 để lật "John Smith" thành "Smith John". Kỹ thuật này rất tiện khi bạn cần đổi họ tên từ dạng "Tên Họ" sang "Họ Tên", hoặc hoán đổi thứ tự của hai trường dữ liệu trong hàng loạt dòng văn bản.',
      },
      {
        question: 'Tôi có thể chèn toàn bộ văn bản đã khớp vào phần thay thế không?',
        answer:
          'Có. Trong chế độ RegExp, ký hiệu $& trong ô Replace sẽ chèn toàn bộ văn bản đã khớp, rất hữu ích khi bạn muốn bọc các kết quả khớp trong dấu ngoặc kép hay thẻ HTML. Ví dụ, bạn có thể nhanh chóng biến mọi từ khóa thành liên kết hay thêm dấu trích dẫn cho mọi số điện thoại trong tài liệu.',
      },
      {
        question: 'Tôi có thể thay thế URL hay ngày tháng trong toàn bộ tài liệu không?',
        answer:
          'Có. Bạn hãy dán toàn bộ tài liệu vào rồi dùng một lần Find & Replace để đổi mọi URL cũ, tên thương hiệu hay ngày tháng cùng lúc. Cách này tiết kiệm rất nhiều thời gian so với việc tìm và sửa từng chỗ bằng tay, đặc biệt khi tài liệu của bạn dài và có hàng chục lần xuất hiện cần cập nhật.',
      },
      {
        question: 'Find & Replace chỉ thay lần xuất hiện đầu tiên hay tất cả các lần?',
        answer:
          'Công cụ thay thế tất cả các kết quả khớp trong văn bản đã dán cùng lúc; để chỉ thay một lần xuất hiện duy nhất, bạn hãy chỉnh sửa thủ công tại vị trí đó sau khi sao chép kết quả. Nếu bạn chỉ muốn thay một chỗ, hãy kiểm tra số lần khớp trước để biết có bao nhiêu vị trí sẽ bị ảnh hưởng.',
      },
      {
        question: 'Find & Replace có hoạt động với code không?',
        answer:
          'Có. Công cụ hoạt động với khối code, mẫu và đoạn cấu hình, nên bạn có thể đổi tên biến, cập nhật biến giữ chỗ hay thay đổi dấu tách hàng loạt. Dù là code JavaScript, Python hay tệp cấu hình, việc thay thế hàng loạt vẫn diễn ra nhanh chóng và chính xác như với văn bản thường.',
      },
      {
        question: 'Tôi có thể sửa lỗi chính tả lặp lại bằng Find & Replace không?',
        answer:
          'Có. Bạn hãy nhập từ viết sai vào ô Find và từ đúng vào ô Replace, rồi kiểm tra số lần khớp để xem có bao nhiêu lỗi chính tả đã được sửa. Cách này đặc biệt hiệu quả khi cùng một từ bị viết sai giống nhau xuyên suốt một tài liệu dài mà bạn không muốn rà soát từng dòng bằng mắt.',
      },
      {
        question: 'Công cụ dùng loại biểu thức chính quy nào?',
        answer:
          'Công cụ dùng JavaScript RegExp, cùng cú pháp mẫu được dùng trong trình duyệt, với nhóm bắt, lớp ký tự và bộ định lượng. Nếu bạn đã quen với biểu thức chính quy trong JavaScript hay trong các trình soạn thảo code, bạn có thể áp dụng ngay kiến thức đó mà không cần học thêm cú pháp mới.',
      },
      {
        question: 'Tôi có thể hoàn tác thao tác thay thế nếu mắc lỗi không?',
        answer:
          'Văn bản gốc của bạn vẫn nằm trong ô nhập liệu, nên bạn có thể thay đổi cụm từ Find hay Replace và kết quả sẽ cập nhật mà không làm mất văn bản nguồn. Nhờ vậy, bạn thoải mái thử nghiệm các mẫu khác nhau cho đến khi đạt được kết quả mong muốn mà không sợ mất dữ liệu gốc.',
      },
      {
        question: 'Có giới hạn lượng văn bản tôi có thể xử lý bằng Find & Replace không?',
        answer:
          'Không có giới hạn cố định. Công cụ chạy ngay trong trình duyệt của bạn và xử lý được tài liệu dài, dù những lần dán cực lớn có thể mất một chút thời gian để xử lý. Với hầu hết các tài liệu thông thường, thao tác thay thế sẽ hoàn thành gần như ngay lập tức sau khi bạn nhập cụm từ cần tìm.',
      },
    ],
  },
  'text-reverser': {
    instructions: [
      {
        title: 'Chọn chế độ đảo ngược',
        description:
          'Chọn "Reverse Characters", "Reverse Word Order", "Reverse Each Word" hay "Reverse Line Order".',
      },
      {
        title: 'Nhập văn bản của bạn',
        description:
          'Gõ hoặc dán văn bản vào ô "Original Text" để xem kết quả đảo ngược ngay lập tức.',
      },
      {
        title: 'Kiểm tra bản xem trước trực tiếp',
        description:
          'Kết quả cập nhật ngay khi bạn gõ, nên bạn có thể thấy ngay chế độ đã chọn biến đổi văn bản của mình ra sao.',
      },
      {
        title: 'So sánh các chế độ song song',
        description:
          'Chuyển đổi giữa các chế độ trên cùng một dữ liệu đầu vào để so sánh đảo ngược ký tự, đảo ngược thứ tự từ và đảo ngược dòng trước khi chốt lựa chọn.',
      },
      {
        title: 'Sao chép kết quả',
        description:
          'Dùng nút "Copy" để sao chép văn bản đã biến đổi, rồi dán vào tài liệu, câu đố hay tin nhắn của bạn.',
      },
      {
        title: 'Sửa dòng bị đảo ngược sai cách',
        description:
          'Nếu các từ bên trong mỗi dòng bị lật trong khi bạn chỉ muốn lật danh sách, hãy chuyển sang "Reverse Line Order", chế độ này di chuyển các dòng mà không chạm đến văn bản bên trong chúng.',
      },
    ],
    examples: [
      {
        title: 'So sánh các chế độ đảo ngược',
        input: 'Hello World',
        output: 'Characters: dlroW olleH · Word Order: World Hello · Each Word: olleH dlroW',
        explanation:
          'Minh họa cách mỗi chế độ thay đổi vị trí ký tự so với vị trí từ.',
      },
      {
        title: 'Đảo ngược thứ tự các dòng',
        input: 'First\nSecond\nThird',
        output: 'Third\nSecond\nFirst',
        explanation:
          'Chế độ Reverse Line Order lật danh sách từ dưới lên trên trong khi văn bản trong mỗi dòng vẫn giữ nguyên.',
      },
    ],
    benefits: [
      'Tách ký tự an toàn với Unicode nên emoji và cặp thay thế vẫn nguyên vẹn',
      'Bốn chế độ riêng biệt bao quát cả lật chuỗi và đảo ngược danh sách',
      'Xem trước trực tiếp không cần bấm nút khi bạn gõ',
      'Chạy nhẹ nhàng ngay trong trình duyệt',
    ],
    useCases: [
      'Đảo ngược nhật ký hay danh sách theo thời gian từ cũ nhất sang mới nhất',
      'Kiểm tra chuỗi palindrome và trường hợp biên ký tự viết từ phải sang trái',
      'Đảo ngược danh sách tên "Họ Tên" hay chuỗi từ',
      'Tạo câu đố, mật mã và trò chơi chữ',
    ],
    faqs: [
      {
        question: 'Chế độ Reverse Characters có làm vỡ emoji hay ký tự Unicode có dấu không?',
        answer:
          'Không. Công cụ dùng vòng lặp theo điểm mã bằng Array.from() thay vì chỉ số UTF-16 đơn thuần, nên ký tự đa byte và emoji chuẩn vẫn nguyên vẹn. Nhờ cách xử lý này, một emoji hay chữ cái có dấu sẽ không bao giờ bị tách thành hai ký tự rác vô nghĩa sau khi đảo ngược.',
      },
      {
        question: 'Làm thế nào để lật ngược danh sách dòng mà không đảo ngược các từ?',
        answer:
          'Bạn hãy chọn "Reverse Line Order" để đưa dòng cuối lên đầu trong khi vẫn giữ nguyên văn bản bên trong mỗi dòng. Chế độ này rất phù hợp khi bạn muốn đảo ngược thứ tự thời gian của nhật ký hay danh sách việc cần làm mà không làm xáo trộn nội dung từng mục.',
      },
      {
        question: '"Reverse Word Order" và "Reverse Each Word" khác nhau thế nào?',
        answer:
          '"Reverse Word Order" biến "one two three" thành "three two one", còn "Reverse Each Word" giữ nguyên vị trí các từ và lật chữ cái thành "eno owt eerht". Chế độ đầu tiên thay đổi thứ tự các từ, còn chế độ thứ hai giữ nguyên thứ tự nhưng viết ngược từng từ một, tạo ra hai hiệu ứng hoàn toàn khác nhau.',
      },
      {
        question: 'Text Reverser có miễn phí không?',
        answer:
          'Có. Công cụ này hoàn toàn miễn phí, không cần đăng ký, không cần tài khoản và không giới hạn lượng văn bản bạn đảo ngược. Bạn có thể đảo ngược bao nhiêu đoạn văn tùy thích, từ một từ đơn lẻ cho đến cả tài liệu dài, mà không gặp bất kỳ giới hạn hay tính năng trả phí nào.',
      },
      {
        question: 'Văn bản của tôi có rời khỏi trình duyệt khi dùng Text Reverser không?',
        answer:
          'Không. Việc đảo ngược diễn ra ngay trong trình duyệt của bạn, nên văn bản của bạn không bao giờ bị tải lên hay lưu trữ ở bất kỳ đâu. Bạn có thể yên tâm đảo ngược cả những nội dung riêng tư hay tin nhắn cá nhân mà không lo thông tin bị gửi ra ngoài.',
      },
      {
        question: 'Text Reverser có bốn chế độ đảo ngược nào?',
        answer:
          'Bốn chế độ là: Reverse Characters lật mọi ký tự, Reverse Word Order đảo thứ tự các từ, Reverse Each Word lật chữ cái bên trong từng từ, và Reverse Line Order đảo ngược dãy các dòng. Mỗi chế độ phục vụ một mục đích khác nhau, từ tạo câu đố cho đến sắp xếp lại danh sách, nên bạn hãy thử từng chế độ trên cùng một dữ liệu đầu vào để chọn ra kết quả phù hợp.',
      },
      {
        question: 'Tôi có thể đảo ngược cả một đoạn văn bằng Text Reverser không?',
        answer:
          'Có. Bạn hãy dán đoạn văn vào rồi chọn Reverse Characters để lật toàn bộ khối văn bản, hoặc Reverse Line Order để lật văn bản nhiều dòng theo từng dòng một. Tùy vào mục đích của bạn, một trong hai chế độ này sẽ cho ra đúng hiệu ứng bạn cần mà không phải xử lý từng dòng riêng lẻ.',
      },
      {
        question: 'Tôi có thể dùng Text Reverser để tạo hiệu ứng gương không?',
        answer:
          'Có. Chế độ Reverse Characters tạo ra văn bản trông như hình ảnh trong gương, đọc ngược lại, rất phù hợp cho câu đố, mật mã và tin nhắn vui. Bạn có thể dùng hiệu ứng này để tạo gợi ý đố vui, mật thư cho trò chơi, hay đơn giản là gửi một tin nhắn độc đáo cho bạn bè.',
      },
      {
        question: 'Text Reverser có hoạt động với chữ cái có dấu không?',
        answer:
          'Có. Công cụ xử lý ký tự Unicode theo điểm mã, nên chữ cái có dấu như é và ü được đảo ngược chính xác mà không bị tách rời. Điều này đặc biệt quan trọng với tiếng Việt hay tiếng Pháp, nơi dấu thanh và dấu phụ là một phần không thể tách rời của chữ cái.',
      },
      {
        question: 'Text Reverser có hoạt động với văn bản bằng ngôn ngữ khác không?',
        answer:
          'Có. Công cụ hoạt động với mọi văn bản Unicode, bao gồm cả chữ viết không phải Latin, vì việc đảo ngược được thực hiện theo từng ký tự chứ không theo quy tắc ngôn ngữ. Dù bạn nhập tiếng Việt, tiếng Ả Rập hay tiếng Nhật, kết quả đảo ngược vẫn chính xác ở cấp độ ký tự.',
      },
      {
        question: 'Palindrome là gì và Text Reverser có giúp kiểm tra nó không?',
        answer:
          'Palindrome là chuỗi đọc xuôi và đọc ngược đều giống nhau, như từ "racecar". Bạn hãy đảo ngược văn bản của mình rồi so sánh với bản gốc để kiểm tra. Nếu hai bản giống hệt nhau, đó chính là palindrome; nếu khác nhau, bạn sẽ thấy ngay vị trí nào khiến chuỗi không còn đối xứng nữa.',
      },
      {
        question: 'Tôi có thể dùng Text Reverser cho câu đố và trò chơi chữ không?',
        answer:
          'Có. Từ và câu bị đảo ngược là một dạng câu đố kinh điển, và bản xem trước trực tiếp giúp bạn tạo gợi ý cùng đáp án một cách nhanh chóng. Bạn có thể chuẩn bị cả một bộ câu đố cho lớp học hay buổi sinh hoạt nhóm chỉ trong vài phút với công cụ này.',
      },
      {
        question: 'Việc đảo ngược văn bản có thêm hay bớt khoảng trắng không?',
        answer:
          'Chế độ Reverse Characters đảo ngược mọi thứ kể cả khoảng trắng, còn các chế độ dựa trên từ vẫn giữ một khoảng trắng giữa các từ để kết quả dễ đọc. Vì vậy, nếu bạn muốn kết quả gọn gàng và dễ nhìn, hãy dùng chế độ đảo ngược theo từ hoặc theo dòng thay vì đảo ngược toàn bộ ký tự.',
      },
      {
        question: 'Tôi có thể đảo ngược một khối văn bản rất dài không?',
        answer:
          'Có. Công cụ chạy ngay trong trình duyệt của bạn và xử lý được những lần dán dài, dù các khối cực lớn có thể mất một chút thời gian để cập nhật trong bản xem trước trực tiếp. Với hầu hết các đoạn văn thông thường, kết quả sẽ xuất hiện gần như ngay lập tức sau khi bạn dán văn bản vào.',
      },
      {
        question: 'Text Reverser có lưu hay giữ văn bản của tôi không?',
        answer:
          'Không. Không có gì được lưu hay gửi lên máy chủ; văn bản của bạn chỉ tồn tại trong tab trình duyệt trong khi bạn dùng công cụ. Ngay khi bạn đóng tab, mọi dữ liệu sẽ biến mất hoàn toàn, nên bạn không cần lo lắng về quyền riêng tư.',
      },
      {
        question: 'Làm thế nào để đảo ngược tên "Họ Tên" thành "Tên Họ"?',
        answer:
          'Bạn hãy dùng Reverse Word Order, chế độ này biến "John Smith" thành "Smith John" trong khi vẫn giữ nguyên cách viết của từng tên. Cách này rất tiện khi bạn cần chuyển danh sách tên từ định dạng phương Tây sang định dạng họ trước tên sau cho bảng tính hay danh bạ.',
      },
      {
        question: 'Text Reverser có đảo ngược được số không?',
        answer:
          'Có. Trong chế độ Reverse Characters, "12345" sẽ trở thành "54321", rất hữu ích để kiểm tra chuỗi số và mã số. Bạn có thể dùng tính năng này để tạo mã kiểm tra, thử nghiệm logic đảo chuỗi số, hay đơn giản là tạo một câu đố số học thú vị.',
      },
      {
        question: 'Dấu ngắt dòng sẽ ra sao khi tôi đảo ngược ký tự?',
        answer:
          'Dấu ngắt dòng cũng bị đảo ngược cùng với phần còn lại của văn bản, nên các dòng sẽ kết thúc theo thứ tự ngược lại; bạn hãy dùng Reverse Line Order nếu muốn lật dòng mà không chạm đến văn bản bên trong chúng. Việc hiểu rõ sự khác biệt này giúp bạn chọn đúng chế độ ngay từ đầu thay vì phải thử đi thử lại.',
      },
      {
        question: 'Tôi có thể hoàn tác việc đảo ngược không?',
        answer:
          'Có. Văn bản gốc của bạn vẫn nằm trong ô nhập liệu, và việc đảo ngược kết quả lần thứ hai bằng cùng một chế độ sẽ khôi phục lại văn bản gốc. Nhờ tính chất đối xứng này, bạn không bao giờ lo bị mất nội dung gốc, dù có đảo ngược đi đảo ngược lại nhiều lần.',
      },
      {
        question: 'Văn bản bị đảo ngược có đọc được không?',
        answer:
          'Không, văn bản đảo ngược được thiết kế để đọc ngược lại. Bạn hãy dán nó trở lại công cụ rồi đảo ngược lần nữa để khôi phục cách diễn đạt gốc. Đây chính là điểm thú vị của công cụ: nó biến văn bản bình thường thành một dạng mật mã đơn giản mà chỉ người biết cách mới giải được.',
      },
    ],
  },
  'lorem-ipsum-generator': {
    instructions: [
      {
        title: 'Chọn đơn vị và số lượng',
        description:
          'Chọn Paragraphs, Sentences hay Words rồi nhập số lượng mong muốn.',
      },
      {
        title: 'Tùy chỉnh định dạng',
        description:
          'Chọn có bắt đầu bằng câu kinh điển "Lorem ipsum dolor sit amet..." hay không và có bọc các đoạn văn trong thẻ HTML <p> hay không.',
      },
      {
        title: 'Tạo văn bản giữ chỗ',
        description:
          'Văn bản được tạo ngay lập tức trong trình duyệt của bạn, không cần chờ đợi và không cần gọi mạng.',
      },
      {
        title: 'Kiểm tra số từ và ký tự',
        description:
          'Dùng bộ đếm từ và ký tự trực tiếp để xác minh văn bản đã tạo vừa với bố cục của bạn trước khi dán vào thiết kế.',
      },
      {
        title: 'Tạo lại hoặc sao chép',
        description:
          'Bấm "Regenerate" để có biến thể câu mới hoặc "Copy" để sao chép văn bản giữ chỗ và dán vào thiết kế của bạn.',
      },
      {
        title: 'Căn độ dài văn bản theo bố cục',
        description:
          'Nếu thẻ bị tràn hay trông trống trải, hãy chuyển sang đơn vị Words và tạo đúng số từ vừa với khoảng trống, rồi tạo lại cho đến khi vừa ý.',
      },
    ],
    examples: [
      {
        title: 'Đoạn mã mockup HTML',
        input: 'Unit: Paragraphs · Amount: 1 · Wrap in <p> tags: Checked',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation:
          'Sẵn sàng dán trực tiếp vào mẫu HTML hay chế độ xem code của CMS.',
      },
      {
        title: 'Số từ chính xác cho thẻ giao diện',
        input: 'Unit: Words · Amount: 25 · Classic opening: Off',
        output: 'Đoạn Lorem Ipsum 25 từ',
        explanation:
          'Cho độ dài chính xác để kiểm tra chiều cao thẻ và cách ngắt dòng.',
      },
    ],
    benefits: [
      'Tạo đúng số từ, câu hay đoạn văn theo yêu cầu',
      'Tùy chọn bọc thẻ <p> giúp tiết kiệm thời gian cho nguyên mẫu giao diện',
      'Bộ đếm từ và ký tự trực tiếp xác minh độ vừa của bố cục trước khi dán',
      'Tạo lại ngay lập tức mà không cần gọi mạng bên ngoài',
    ],
    useCases: [
      'Kiểm tra chiều cao thẻ và cách ngắt dòng trong bố cục giao diện đáp ứng',
      'Xem trước cách kết hợp phông chữ, chiều cao dòng và độ rộng đo lường',
      'Điền nội dung vào mẫu wireframe và bản mockup trang biên tập',
      'Kiểm tra hành vi cắt ngắn và tràn nội dung trong component CSS',
    ],
    faqs: [
      {
        question: 'Tôi có thể tạo đúng số từ thay vì đoạn văn không?',
        answer:
          'Có. Bạn hãy chuyển bộ chọn đơn vị sang "Words" rồi nhập bất kỳ số nào tối đa 500 từ. Công cụ sẽ tạo ra chính xác số từ bạn yêu cầu, rất tiện khi bạn cần lấp đầy một thẻ giao diện hay một khối nội dung có kích thước cố định mà không muốn thừa hay thiếu từ.',
      },
      {
        question: 'Vì sao nên dùng Lorem Ipsum thay vì lặp lại một cụm từ?',
        answer:
          'Văn bản giữ chỗ Latin kinh điển mô phỏng gần đúng phân phối độ dài từ và nhịp điệu chữ cái của tiếng Anh tự nhiên mà không làm người xem mất tập trung vì nội dung có thể đọc được. Nhờ vậy, khách hàng và đồng nghiệp sẽ tập trung đánh giá bố cục, kiểu chữ và khoảng cách thay vì bình luận về nội dung tạm thời.',
      },
      {
        question: 'Tùy chọn thẻ <p> có hoạt động với chế độ Sentences và Words không?',
        answer:
          'Có. Trong chế độ Paragraphs, mỗi đoạn văn được bọc trong thẻ <p>...</p> riêng, còn chế độ Sentences và Words sẽ bọc toàn bộ khối đã tạo trong một thẻ <p> duy nhất. Nhờ vậy, dù bạn tạo theo đơn vị nào, kết quả vẫn sẵn sàng để dán thẳng vào mẫu HTML mà không cần thêm thẻ thủ công.',
      },
      {
        question: 'Lorem Ipsum Generator có miễn phí không?',
        answer:
          'Có. Công cụ này hoàn toàn miễn phí, không cần đăng ký, không cần tài khoản và không giới hạn lượng văn bản giữ chỗ bạn tạo. Bạn có thể tạo bao nhiêu đoạn văn tùy thích cho mọi dự án thiết kế của mình mà không gặp bất kỳ giới hạn hay chi phí ẩn nào.',
      },
      {
        question: 'Tôi có cần tài khoản hay kết nối internet để tạo Lorem Ipsum không?',
        answer:
          'Không. Công cụ chạy hoàn toàn trong trình duyệt của bạn, không cần đăng ký và không gọi mạng, nên nó hoạt động ngay lập tức mỗi khi trang được tải. Bạn có thể tạo văn bản giữ chỗ ngay cả khi đang ngoại tuyến hay ở nơi kết nối internet không ổn định.',
      },
      {
        question: 'Lorem Ipsum là gì?',
        answer:
          'Lorem Ipsum là văn bản giữ chỗ giống tiếng Latin bị xáo trộn mà các nhà thiết kế đã dùng từ thời sắp chữ in để lấp đầy bố cục trước khi nội dung thật sẵn sàng. Nó trông giống ngôn ngữ thật nhưng không mang ý nghĩa, nhờ đó người xem tập trung vào thiết kế thay vì đọc nội dung tạm thời.',
      },
      {
        question: 'Tôi có thể tạo một câu Lorem Ipsum duy nhất không?',
        answer:
          'Có. Bạn hãy chọn đơn vị Sentences, nhập số 1, công cụ sẽ tạo ra một câu giữ chỗ duy nhất. Cách này rất tiện khi bạn chỉ cần một dòng văn bản mẫu cho tiêu đề phụ, chú thích hay một khối nội dung ngắn trong bản mockup của mình.',
      },
      {
        question: 'Tôi có thể bắt đầu văn bản bằng câu kinh điển "Lorem ipsum dolor sit amet..." không?',
        answer:
          'Có. Bạn hãy bật tùy chọn mở đầu kinh điển, văn bản đã tạo của bạn sẽ bắt đầu bằng câu quen thuộc "Lorem ipsum dolor sit amet...". Đây là câu mở đầu mà hầu hết các nhà thiết kế đều nhận ra ngay, giúp bản mockup của bạn trông chuyên nghiệp và đúng chuẩn ngay từ cái nhìn đầu tiên.',
      },
      {
        question: 'Tôi có thể dán văn bản đã tạo trực tiếp vào HTML không?',
        answer:
          'Có. Bạn hãy bật tùy chọn thẻ <p>, kết quả sẽ được bọc trong thẻ đoạn văn HTML, sẵn sàng dán vào mẫu hay chế độ xem code của CMS. Bạn không cần thêm thẻ thủ công hay lo lắng về việc quên đóng thẻ, vì công cụ đã xử lý toàn bộ phần định dạng cho bạn.',
      },
      {
        question: 'Tôi có thể tạo đúng 100 từ Lorem Ipsum không?',
        answer:
          'Có. Bạn hãy chọn đơn vị Words, nhập số 100, công cụ sẽ tạo ra đúng 100 từ văn bản giữ chỗ. Độ chính xác này rất quan trọng khi bạn kiểm tra bố cục có kích thước cố định, vì chỉ cần thừa hay thiếu vài từ cũng có thể khiến thẻ bị tràn hoặc trông trống trải.',
      },
      {
        question: 'Văn bản Lorem Ipsum đã tạo có luôn giống nhau không?',
        answer:
          'Không. Bạn hãy bấm "Regenerate" để tạo biến thể mới với cấu trúc câu khác nhau, nhờ đó các khối lặp lại trông không giống hệt nhau. Điều này giúp bản mockup của bạn trông tự nhiên hơn, giống như một trang thật với nhiều đoạn văn khác nhau thay vì cùng một đoạn văn được sao chép nhiều lần.',
      },
      {
        question: 'Lorem Ipsum có phải tiếng Latin thật không?',
        answer:
          'Không. Đây là tiếng Latin giả bị xáo trộn, gồm các từ giống tiếng Latin; nó trông như ngôn ngữ thật nhưng không mang ý nghĩa thực sự. Nguồn gốc của nó là một đoạn văn của Cicero đã bị cắt xén và xáo trộn qua nhiều thế kỷ để tạo thành văn bản giữ chỗ mà các nhà thiết kế vẫn dùng đến ngày nay.',
      },
      {
        question: 'Tôi có thể dùng Lorem Ipsum trên trang web đã xuất bản không?',
        answer:
          'Văn bản này chỉ được dùng làm nội dung giữ chỗ tạm thời, nên bạn hãy thay bằng nội dung thật trước khi xuất bản, nếu không khách truy cập sẽ thấy văn bản giả. Việc để quên Lorem Ipsum trên trang live là một lỗi thường gặp và dễ khiến trang web trông chưa hoàn thiện trong mắt người đọc.',
      },
      {
        question: 'Lorem Ipsum dùng để làm gì?',
        answer:
          'Nó lấp đầy wireframe, mockup và nguyên mẫu để nhà thiết kế có thể kiểm tra kiểu chữ, khoảng cách và bố cục mà không cần chờ nội dung cuối cùng. Nhờ có văn bản giữ chỗ, quá trình thiết kế không bị tắc nghẽn vì nội dung chưa xong, và nhóm thiết kế cùng nhóm nội dung có thể làm việc song song với nhau.',
      },
      {
        question: 'Tôi có thể kiểm soát độ dài của từng câu không?',
        answer:
          'Không. Bạn chỉ kiểm soát tổng số lượng theo đoạn văn, câu hay từ, còn công cụ sẽ tự thay đổi độ dài câu một cách tự nhiên; bạn hãy tạo lại nếu nhịp điệu không phù hợp với bố cục. Sự đa dạng này thực ra là điểm mạnh, vì nó mô phỏng đúng cách văn bản thật có câu dài câu ngắn xen kẽ nhau.',
      },
      {
        question: 'Lorem Ipsum Generator có dùng được cho thiết kế in ấn không?',
        answer:
          'Có. Bạn hãy sao chép văn bản đã tạo vào công cụ in ấn, slide thuyết trình hay phần mềm dàn trang để xem trước nội dung thật sẽ chảy trong thiết kế ra sao. Dù là tờ rơi, tạp chí hay slide, văn bản giữ chỗ vẫn giúp bạn đánh giá bố cục trước khi nội dung cuối cùng sẵn sàng.',
      },
      {
        question: 'Làm thế nào để kiểm tra việc cắt ngắn văn bản bằng Lorem Ipsum?',
        answer:
          'Bạn hãy tạo đúng số từ vừa với khoảng trống của mình, dán vào component, rồi xem văn bản có bị cắt ngắn hay tràn ra ở các kích thước màn hình khác nhau hay không. Cách kiểm tra này giúp bạn phát hiện sớm vấn đề về chiều cao dòng hay giới hạn ký tự trước khi component được đưa vào sản phẩm thật.',
      },
      {
        question: 'Tôi có thể tạo Lorem Ipsum bằng ngôn ngữ khác không?',
        answer:
          'Không. Công cụ chỉ tạo văn bản giữ chỗ giống tiếng Latin kinh điển; nếu cần nội dung đọc được bằng ngôn ngữ khác, bạn hãy viết hoặc dịch văn bản thật thay thế. Lorem Ipsum được thiết kế để không ai đọc được, nên việc dịch nó sang ngôn ngữ khác sẽ phá vỡ chính mục đích giữ chỗ trung lập của nó.',
      },
      {
        question: 'Lorem Ipsum Generator có lưu văn bản đã tạo của tôi không?',
        answer:
          'Không. Mọi thao tác đều chạy ngay trong trình duyệt của bạn và không có gì được lưu trữ hay gửi lên máy chủ. Bạn có thể tạo bao nhiêu văn bản giữ chỗ tùy thích mà không lo dữ liệu của mình bị ghi lại hay chia sẻ với bất kỳ ai.',
      },
      {
        question: 'Vì sao văn bản giữ chỗ giúp khách hàng tập trung vào thiết kế?',
        answer:
          'Nội dung nháp đọc được sẽ kéo sự chú ý vào chính câu chữ, còn Lorem Ipsum trung lập giúp người xem tập trung vào bố cục, kiểu chữ và khoảng cách. Nhờ vậy, buổi xem xét thiết kế sẽ xoay quanh những quyết định về hình thức thay vì sa đà vào việc chỉnh sửa câu chữ chưa phải bản cuối cùng.',
      },
    ],
  },
  'readability-checker': {
    instructions: [
      {
        title: 'Dán bài viết hoặc đoạn văn của bạn',
        description:
          'Nhập ít nhất một câu hoàn chỉnh vào trình soạn thảo, hoặc bấm "Load sample" để thử với văn bản ví dụ.',
      },
      {
        title: 'Xem bốn thẻ điểm',
        description:
          'Xem điểm Flesch Reading Ease (0–100, càng cao càng dễ đọc) cùng các ước tính cấp lớp Flesch-Kincaid, Gunning Fog và SMOG đặt cạnh nhau.',
      },
      {
        title: 'Đọc bảng phân tích câu và âm tiết',
        description:
          'Kiểm tra số từ trung bình mỗi câu, số âm tiết mỗi từ và số lượng từ dài hay phức tạp đứng sau mỗi điểm số.',
      },
      {
        title: 'Tìm các từ phức tạp',
        description:
          'Quét danh sách các từ có từ 3 âm tiết trở lên mà công cụ đánh dấu và ghi chú từ nào bạn có thể thay bằng từ thông dụng đơn giản hơn.',
      },
      {
        title: 'Rút ngắn câu dài rồi kiểm tra lại',
        description:
          'Tách các câu dài nhiều mệnh đề, dán văn bản đã sửa trở lại và xem điểm số cập nhật ngay lập tức.',
      },
      {
        title: 'Khắc phục kết quả bất thường',
        description:
          'Nếu điểm số có vẻ sai, hãy kiểm tra dấu chấm bị thiếu, chữ viết tắt hay đoạn gạch đầu dòng rời rạc, vì các công thức đếm câu và âm tiết dựa trên dấu câu.',
      },
    ],
    examples: [
      {
        title: 'Hướng dẫn viết bằng ngôn ngữ đơn giản',
        input: 'Short sentences keep instructions clear. Use simple words when explaining steps.',
        output: 'Flesch Ease ~78 (Fairly Easy) · Grade ~5.2',
        explanation:
          'Độ dài câu trung bình ngắn hơn và ít từ đa âm tiết hơn sẽ cho điểm dễ đọc cao hơn.',
      },
      {
        title: 'Kiểm tra đoạn văn kỹ thuật',
        input: 'The implementation utilizes asynchronous methodologies to facilitate comprehensive data synchronization.',
        output: 'Flesch Ease ~20 (Very Difficult) · Grade ~15+',
        explanation:
          'Câu dài và thuật ngữ nặng nề kéo điểm số xuống thấp — thay bằng từ đơn giản sẽ cải thiện độ dễ đọc.',
      },
    ],
    benefits: [
      'Tính đồng thời bốn chỉ số độ dễ đọc được dùng rộng rãi',
      'Liệt kê mẫu các từ có từ 3 âm tiết trở lên tìm thấy trong đoạn văn của bạn',
      'Hiển thị chính xác số từ trung bình mỗi câu và số âm tiết mỗi từ',
      'Chạy hoàn toàn ngoại tuyến trong bộ nhớ trình duyệt cho bản nháp chưa công bố',
    ],
    useCases: [
      'Biên tập tài liệu, nội dung UX và bài viết trung tâm trợ giúp cho rõ ràng hơn',
      'Kiểm tra tài liệu học tập theo cấp lớp mục tiêu của học sinh',
      'Đơn giản hóa thông tin pháp lý, y tế hay tài chính gửi cho khách hàng',
      'Cải thiện khả năng đọc lướt của bài blog và trang đích',
    ],
    faqs: [
      {
        question: 'Điểm Flesch Reading Ease bao nhiêu là tốt cho bài viết trên web?',
        answer:
          'Hầu hết nội dung web hướng đến công chúng thường nhắm đến điểm Flesch Reading Ease từ 60 đến 75, tương ứng khoảng trình độ đọc lớp 7 đến lớp 9. Khoảng điểm này đủ đơn giản để đa số người đọc hiểu nhanh, nhưng vẫn giữ được chiều sâu cần thiết cho nội dung có thông tin thực sự hữu ích.',
      },
      {
        question: 'Làm thế nào để nâng điểm dễ đọc đang thấp?',
        answer:
          'Bạn hãy tách các câu dài nhiều mệnh đề thành những câu ngắn gọn hơn và thay thuật ngữ dài từ 3 âm tiết trở lên bằng từ cụ thể, quen thuộc trong đời sống. Chỉ cần rút ngắn câu và thay vài từ khó, điểm số của bạn sẽ cải thiện rõ rệt mà nội dung vẫn giữ nguyên ý nghĩa ban đầu.',
      },
      {
        question: 'Vì sao công cụ nhắc đến số câu đối với chỉ số SMOG?',
        answer:
          'Công thức SMOG chuẩn dựa trên mẫu nhiều câu, nên đoạn trích ngắn chỉ có 1–2 câu sẽ dùng ước tính đã điều chỉnh cho đến khi có từ 3 câu trở lên. Vì vậy, để có điểm SMOG đáng tin cậy nhất, bạn nên dán ít nhất một đoạn văn có vài câu hoàn chỉnh thay vì chỉ một câu đơn lẻ.',
      },
      {
        question: 'Readability Checker dùng để làm gì?',
        answer:
          'Công cụ đo mức độ dễ hiểu của một đoạn văn bằng cách tính bốn công thức độ dễ đọc chuẩn và hiển thị số liệu thống kê về câu cùng âm tiết. Nhờ đó, bạn biết văn bản của mình phù hợp với độc giả ở trình độ nào, và cần đơn giản hóa ở đâu trước khi xuất bản hay gửi cho khách hàng.',
      },
      {
        question: 'Readability Checker có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy trong trình duyệt của bạn nên văn bản không bao giờ rời khỏi thiết bị. Bạn có thể kiểm tra bao nhiêu đoạn văn tùy thích, từ bài luận, tài liệu hướng dẫn cho đến email quan trọng, mà không gặp bất kỳ giới hạn nào.',
      },
      {
        question: 'Cấp lớp Flesch-Kincaid là gì?',
        answer:
          'Chỉ số này ước tính cấp lớp ở trường phổ thông Mỹ cần thiết để hiểu một văn bản; ví dụ, điểm 8.0 nghĩa là học sinh lớp 8 có thể đọc thoải mái. Đây là thước đo quen thuộc trong giáo dục và xuất bản, giúp bạn xác định văn bản của mình có quá khó so với đối tượng độc giả mục tiêu hay không.',
      },
      {
        question: 'Chỉ số Gunning Fog đo lường điều gì?',
        answer:
          'Chỉ số này ước tính số năm học chính quy cần thiết để hiểu một đoạn văn ngay trong lần đọc đầu tiên, dựa trên độ dài câu và tỷ lệ từ phức tạp. Điểm Fog càng cao thì văn bản càng khó, và các bài viết hướng đến công chúng thường nên giữ chỉ số này ở mức vừa phải để người đọc không phải đọc đi đọc lại.',
      },
      {
        question: 'Chỉ số SMOG là gì?',
        answer:
          'Chỉ số SMOG ước tính số năm học cần thiết để hiểu đầy đủ một văn bản, bằng cách đếm các từ đa âm tiết trong một mẫu câu. Khác với các chỉ số khác, SMOG tập trung mạnh vào từ khó, nên nó đặc biệt hữu ích khi bạn muốn biết liệu văn bản của mình có chứa quá nhiều thuật ngữ chuyên môn hay không.',
      },
      {
        question: 'Tôi nên nhắm đến điểm Flesch Reading Ease bao nhiêu?',
        answer:
          'Độc giả phổ thông thường nên nhắm đến 60–70, còn nội dung công cộng viết bằng ngôn ngữ đơn giản thường nhắm đến 70 trở lên; văn bản kỹ thuật dành cho chuyên gia có thể thấp hơn. Điều quan trọng là chọn mục tiêu phù hợp với đối tượng của bạn thay vì chạy theo một con số tuyệt đối duy nhất.',
      },
      {
        question: 'Tôi cần bao nhiêu từ để có điểm dễ đọc chính xác?',
        answer:
          'Mẫu dài hơn với ít nhất 100 từ sẽ cho kết quả đáng tin cậy hơn, dù công cụ vẫn hoạt động với đoạn văn ngắn hơn kèm ước tính SMOG đã điều chỉnh. Nếu bạn chỉ kiểm tra một câu đơn lẻ, điểm số có thể dao động mạnh, nên hãy dán cả một đoạn văn đầy đủ để có bức tranh chính xác hơn.',
      },
      {
        question: 'Readability Checker có lưu trữ hay tải văn bản của tôi lên không?',
        answer:
          'Không. Mọi phép tính đều diễn ra ngay trong trình duyệt của bạn, nên bản nháp, bài viết chưa xuất bản và tài liệu riêng tư vẫn nằm trên thiết bị của bạn. Bạn có thể yên tâm kiểm tra cả những tài liệu mật mà không lo nội dung bị gửi ra ngoài hay lưu lại ở bất kỳ đâu.',
      },
      {
        question: 'Vì sao bốn điểm số không thống nhất với nhau?',
        answer:
          'Mỗi công thức cân nhắc độ dài câu và số âm tiết theo cách khác nhau, nên bạn hãy xem chúng như những ước tính bổ sung cho nhau thay vì một cấp lớp chính xác duy nhất. Khi các chỉ số chênh lệch, hãy nhìn vào xu hướng chung: nếu cả bốn đều thấp, văn bản của bạn chắc chắn cần được đơn giản hóa.',
      },
      {
        question: 'Âm tiết được đếm như thế nào trong Readability Checker?',
        answer:
          'Công cụ ước tính âm tiết dựa trên các chữ cái trong mỗi từ, cách này chính xác với hầu hết các từ tiếng Anh thông dụng nhưng có thể đếm sai tên riêng, chữ viết tắt hay thuật ngữ kỹ thuật không phổ biến. Vì vậy, với văn bản chứa nhiều tên riêng hay từ chuyên ngành, bạn nên xem điểm số như một hướng dẫn gần đúng.',
      },
      {
        question: 'Tôi có thể kiểm tra độ dễ đọc cho văn bản không phải tiếng Anh không?',
        answer:
          'Bốn công thức này được thiết kế cho tiếng Anh, nên điểm số cho ngôn ngữ khác có thể gây hiểu lầm dù công cụ vẫn tính toán chúng. Cấu trúc câu và âm tiết trong tiếng Việt hay tiếng Pháp khác hẳn tiếng Anh, vì vậy bạn chỉ nên dùng kết quả này như một tham khảo thô, không nên coi là thước đo chính xác.',
      },
      {
        question: 'Thế nào được tính là từ phức tạp?',
        answer:
          'Từ phức tạp thường là từ có từ ba âm tiết trở lên, không tính các hậu tố thông dụng và tên riêng, và công cụ sẽ liệt kê các ví dụ tìm thấy trong đoạn văn của bạn. Khi thấy danh sách này dài, bạn hãy thử thay những từ đó bằng từ ngắn gọn, quen thuộc hơn để văn bản dễ đọc hơn ngay lập tức.',
      },
      {
        question: 'Dấu câu có ảnh hưởng đến điểm dễ đọc của tôi không?',
        answer:
          'Có. Ranh giới câu được xác định bằng dấu chấm, dấu chấm hỏi và dấu chấm than, nên dấu câu bị thiếu có thể làm các câu dính vào nhau và lệch kết quả. Nếu điểm số của bạn có vẻ bất thường, hãy kiểm tra lại xem văn bản có thiếu dấu chấm cuối câu hay chứa nhiều đoạn gạch đầu dòng không có dấu kết thúc hay không.',
      },
      {
        question: 'Readability Checker có giúp ích cho SEO không?',
        answer:
          'Nội dung rõ ràng và dễ đọc hơn sẽ giữ chân khách truy cập lâu hơn, điều này hỗ trợ SEO một cách gián tiếp, dù độ dễ đọc chỉ là một trong nhiều yếu tố xếp hạng. Google đánh giá cao nội dung mà người dùng thực sự đọc hết, nên việc cải thiện độ dễ đọc là một cách gián tiếp nhưng hiệu quả để nâng cao hiệu suất trang.',
      },
      {
        question: 'Điểm Flesch Reading Ease càng cao có phải luôn càng tốt không?',
        answer:
          'Không hẳn. Bạn hãy căn điểm số theo đối tượng độc giả: hướng dẫn đơn giản nên có điểm cao, còn độc giả chuyên môn về học thuật hay pháp lý có thể mong đợi ngôn ngữ dày đặc hơn. Một bài nghiên cứu khoa học với điểm 80 có thể bị xem là quá đơn giản, trong khi hướng dẫn sử dụng với điểm 40 chắc chắn sẽ khiến người dùng bối rối.',
      },
      {
        question: 'Vì sao điểm số của tôi thay đổi khi tôi thêm tiêu đề?',
        answer:
          'Điểm số được tính từ toàn bộ văn bản bạn dán vào, nên việc bao gồm tiêu đề, nhãn điều hướng hay đoạn code có thể làm lệch các giá trị trung bình; bạn hãy kiểm tra riêng phần nội dung chính để có kết quả nhất quán nhất. Tiêu đề thường ngắn và không có dấu chấm, nên chúng có thể làm méo số từ trung bình mỗi câu của bạn.',
      },
      {
        question: 'Tôi có thể dùng Readability Checker cho bài luận của học sinh không?',
        answer:
          'Có. Giáo viên và học sinh có thể dùng công cụ này để kiểm tra xem bài luận có khớp với cấp lớp mong muốn hay không trước khi nộp. Đây là cách nhanh chóng để học sinh tự đánh giá bài viết của mình, đồng thời giúp giáo viên đưa ra phản hồi cụ thể về cách làm cho bài luận rõ ràng và dễ đọc hơn.',
      },
    ],
  },
  'word-frequency-counter': {
    instructions: [
      {
        title: 'Dán nội dung của bạn',
        description:
          'Đưa bản nháp bài viết, bản ghi lời nói, nội dung sản phẩm hay câu trả lời khảo sát vào ô văn bản.',
      },
      {
        title: 'Chọn cụm 1 từ, 2 từ hay 3 từ',
        description:
          'Chuyển đổi giữa các từ đơn và cụm từ đa từ (n-gram) để xem từng thuật ngữ riêng lẻ hay các cụm từ lặp lại.',
      },
      {
        title: 'Lọc từ dừng và đặt độ dài tối thiểu',
        description:
          'Bật tính năng loại từ dừng để ẩn các từ đệm như "the" và "and", và tăng độ dài từ tối thiểu để tập trung vào thuật ngữ có ý nghĩa.',
      },
      {
        title: 'Xem số lần xuất hiện và tỷ lệ mật độ',
        description:
          'Sắp xếp bảng để xem từ và cụm từ nào xuất hiện nhiều nhất cùng tỷ lệ phần trăm của mỗi từ trong văn bản.',
      },
      {
        title: 'Phát hiện lạm dụng từ hay nhồi nhét từ khóa',
        description:
          'So sánh các thuật ngữ hàng đầu của bạn với từ khóa mục tiêu và viết lại những đoạn mà một thuật ngữ chiếm ưu thế trong văn bản.',
      },
      {
        title: 'Sao chép hoặc xuất kết quả dưới dạng CSV',
        description:
          'Bấm "Export CSV" để tải bảng về cho bảng tính, hoặc "Copy CSV" để dán thẳng vào báo cáo của bạn.',
      },
    ],
    examples: [
      {
        title: 'Kiểm tra mật độ cụm từ',
        input: 'Fast pages improve user engagement and page speed.',
        output: 'page: 2 · page speed: 1 · user engagement: 1',
        explanation:
          'Cho thấy cả tần suất từng từ riêng lẻ lẫn cụm từ chủ đề đa từ.',
      },
      {
        title: 'Từ lặp lại trong bản ghi lời nói',
        input: 'Actually, the plan is actually quite simple. Actually, we start tomorrow.',
        output: 'actually: 3 (từ lặp lại nhiều nhất)',
        explanation:
          'Bắt được từ đệm mà người nói lặp lại theo thói quen, để bạn gọt giũa bài phát biểu cho gọn gàng hơn.',
      },
    ],
    benefits: [
      'Hỗ trợ phân tích n-gram 1 từ, 2 từ và 3 từ',
      'Bộ lọc từ dừng tùy chọn loại bỏ từ đệm như "the" và "and"',
      'Ngưỡng độ dài từ tối thiểu có thể điều chỉnh',
      'Xuất bảng CSV sạch sẽ, sẵn sàng cho bảng tính',
    ],
    useCases: [
      'Kiểm tra bản nháp bài viết để tránh vô tình nhồi nhét từ khóa',
      'Phát hiện thói quen lặp từ trong bài phát biểu hay bản ghi lời nói',
      'Nhận diện chủ đề lặp lại trong phản hồi khách hàng hay câu trả lời khảo sát',
      'So sánh sự cân bằng cụm từ đa từ trong nội dung trang đích',
    ],
    faqs: [
      {
        question: 'Tỷ lệ mật độ từ khóa được tính như thế nào?',
        answer:
          'Mật độ bằng (số lần thuật ngữ xuất hiện × số từ trong cụm ÷ tổng số từ trong văn bản) × 100, cho ra tỷ lệ chính xác của tài liệu. Công thức này tính đến cả độ dài của cụm từ, nên một cụm hai từ xuất hiện năm lần sẽ có mật độ cao hơn một từ đơn xuất hiện cùng số lần, phản ánh đúng mức độ phủ sóng thực sự của cụm từ đó.',
      },
      {
        question: 'Từ dừng là gì?',
        answer:
          'Từ dừng là những từ ngữ pháp xuất hiện với tần suất cao như "the", "and", "of", "in" và "to", thường mang ít ý nghĩa chủ đề trong kiểm tra tần suất. Vì chúng xuất hiện trong hầu hết mọi câu, việc giữ chúng trong bảng sẽ che khuất các từ mang nội dung thực sự, nên bộ lọc từ dừng giúp bạn tập trung vào những từ quan trọng.',
      },
      {
        question: 'Tôi có thể xuất kết quả tần suất sang Excel hoặc Google Sheets không?',
        answer:
          'Có. Bạn hãy bấm "Export CSV" để tải tệp định dạng phân tách bằng dấu phẩy chuẩn hoặc "Copy CSV" để dán trực tiếp. Tệp CSV mở được ngay trong Excel hay Google Sheets, giúp bạn phân tích sâu hơn, vẽ biểu đồ hay đưa vào báo cáo mà không phải nhập lại dữ liệu thủ công.',
      },
      {
        question: 'Word Frequency Counter dùng để làm gì?',
        answer:
          'Công cụ đếm tần suất mỗi từ hay cụm từ xuất hiện trong văn bản để bạn phát hiện sự lặp lại, kiểm tra sự cân bằng từ khóa và tìm chủ đề lặp lại. Để kiểm tra một từ khóa mục tiêu cụ thể trong bản nháp, bạn hãy xem công cụ Keyword Density Checker, còn công cụ này phù hợp cho bức tranh tổng thể về từ ngữ trong văn bản.',
      },
      {
        question: 'Word Frequency Counter có miễn phí không?',
        answer:
          'Có, công cụ này miễn phí, không cần đăng ký, và chạy hoàn toàn trong trình duyệt của bạn nên văn bản của bạn không bao giờ bị tải lên. Bạn có thể phân tích bao nhiêu tài liệu tùy thích, từ bài viết ngắn cho đến bản ghi lời nói dài, mà không gặp bất kỳ giới hạn hay chi phí ẩn nào.',
      },
      {
        question: 'Mật độ từ khóa là gì và vì sao nó quan trọng?',
        answer:
          'Mật độ từ khóa là tỷ lệ phần trăm của văn bản được tạo thành bởi một thuật ngữ nhất định; mật độ tự nhiên giúp công cụ tìm kiếm hiểu chủ đề, còn mật độ cao bất thường trông giống như nhồi nhét. Việc theo dõi mật độ giúp bạn giữ cho bài viết vừa tối ưu cho SEO vừa đọc tự nhiên, thay vì lặp lại từ khóa một cách gượng ép.',
      },
      {
        question: 'Tỷ lệ mật độ từ khóa tốt là bao nhiêu?',
        answer:
          'Không có mục tiêu chính thức nào, nhưng hầu hết biên tập viên nhắm đến mật độ tự nhiên khoảng 1–2% cho từ khóa chính và tập trung vào việc viết dễ đọc, hữu ích thay vì cố đạt một con số cụ thể. Quan trọng hơn con số là cảm giác đọc: nếu từ khóa xuất hiện tự nhiên trong câu văn, mật độ của bạn có thể đã ổn.',
      },
      {
        question: 'N-gram trong Word Frequency Counter là gì?',
        answer:
          'N-gram là chuỗi một, hai hay ba từ liên tiếp, chẳng hạn như "page speed" hay "user engagement", được đếm như một cụm từ duy nhất. Việc phân tích n-gram giúp bạn thấy không chỉ từ đơn lẻ mà cả những cụm từ thực sự lặp lại trong nội dung, từ đó hiểu rõ chủ đề và cách diễn đạt đặc trưng của văn bản.',
      },
      {
        question: 'Vì sao tôi nên phân tích cụm từ 2 từ và 3 từ?',
        answer:
          'Từ đơn có thể gây hiểu lầm, còn cụm từ đa từ sẽ tiết lộ chủ đề thực sự và những cách diễn đạt lặp lại trong nội dung của bạn. Ví dụ, từ "page" xuất hiện nhiều có thể chẳng nói lên điều gì, nhưng cụm "page speed" lặp lại nhiều lần cho thấy bài viết của bạn thực sự tập trung vào tốc độ trang.',
      },
      {
        question: 'Bộ lọc từ dừng hoạt động như thế nào?',
        answer:
          'Khi được bật, bộ lọc sẽ loại bỏ các từ ngữ pháp thông dụng như "the", "and" và "of" để bảng tần suất làm nổi bật các từ mang chủ đề thay vì từ đệm. Nhờ vậy, ngay từ cái nhìn đầu tiên, bạn sẽ thấy những từ khóa thực sự định hình nội dung bài viết thay vì những từ xuất hiện trong mọi câu tiếng Anh.',
      },
      {
        question: 'Tôi có thể thay đổi những từ nào được tính là từ dừng không?',
        answer:
          'Công cụ dùng danh sách tích hợp sẵn các từ dừng tiếng Anh thông dụng, và bạn có thể bật hoặc tắt bộ lọc bất cứ khi nào muốn xem toàn bộ bảng. Dù bạn không thể chỉnh sửa danh sách này, việc chuyển đổi qua lại giữa hai chế độ xem vẫn giúp bạn so sánh nhanh đâu là từ đệm và đâu là từ mang nội dung thực sự.',
      },
      {
        question: 'Cài đặt độ dài từ tối thiểu có tác dụng gì?',
        answer:
          'Cài đặt này loại bỏ các từ ngắn hơn độ dài bạn chọn, giúp ẩn chữ viết tắt và ký tự đơn khỏi bảng tần suất. Ví dụ, đặt độ dài tối thiểu là 4 sẽ loại bỏ các từ như "a", "is" hay "to", nhờ đó bảng của bạn chỉ còn những từ đủ dài để mang ý nghĩa chủ đề rõ ràng.',
      },
      {
        question: 'Word Frequency Counter có tải văn bản của tôi lên không?',
        answer:
          'Không. Mọi phép đếm đều diễn ra ngay trong trình duyệt của bạn, nên bản nháp riêng tư và bản ghi lời nói vẫn nằm trên thiết bị của bạn. Bạn có thể yên tâm phân tích cả những tài liệu mật hay phản hồi khách hàng nhạy cảm mà không lo nội dung bị gửi ra ngoài hay lưu lại ở đâu.',
      },
      {
        question: 'Tôi có thể đếm tần suất từ trong tài liệu dài không?',
        answer:
          'Có. Bạn hãy dán bài viết dài hay bản ghi lời nói vào, công cụ sẽ đếm mọi lần xuất hiện, dù văn bản rất lớn có thể mất một chút thời gian để xử lý. Với hầu hết các tài liệu thông thường, bảng tần suất sẽ xuất hiện gần như ngay lập tức sau khi bạn dán văn bản vào.',
      },
      {
        question: 'Tỷ lệ mật độ được tính như thế nào cho cụm từ?',
        answer:
          'Mật độ bằng số lần cụm từ xuất hiện nhân với số từ trong cụm, chia cho tổng số từ trong văn bản, rồi nhân với 100. Công thức này đảm bảo cụm từ dài được tính đúng trọng số của nó, vì một cụm ba từ chiếm nhiều không gian trong văn bản hơn một từ đơn xuất hiện cùng số lần.',
      },
      {
        question: 'Word Frequency Counter có thể tìm cụm từ lặp lại trong bản ghi lời nói không?',
        answer:
          'Có. Bạn hãy chuyển sang chế độ 2 từ hay 3 từ để phát hiện thói quen nói và cụm từ mà người nói lặp lại mà không nhận ra. Đây là cách tuyệt vời để huấn luyện kỹ năng thuyết trình, vì những từ đệm như "you know" hay "actually" thường xuất hiện dày đặc mà người nói không hề hay biết.',
      },
      {
        question: 'Dấu câu có ảnh hưởng đến số lần đếm từ không?',
        answer:
          'Công cụ loại bỏ dấu câu trước khi đếm, nên "speed," và "speed" được tính là cùng một từ. Nhờ vậy, bảng tần suất của bạn phản ánh đúng số lần một từ thực sự xuất hiện, bất kể nó đứng ở cuối câu có dấu chấm hay ở giữa câu có dấu phẩy đi kèm.',
      },
      {
        question: 'Từ viết hoa và viết thường có được đếm chung không?',
        answer:
          'Có. Các từ được chuyển thành chữ thường trước khi đếm, nên "Page" và "page" được tính là một thuật ngữ. Điều này đảm bảo từ ở đầu câu và từ ở giữa câu không bị tách thành hai mục riêng, giúp bảng tần suất của bạn chính xác và dễ đọc hơn nhiều.',
      },
      {
        question: 'Tôi có thể xuất bảng tần suất sang Excel không?',
        answer:
          'Có. Bạn hãy dùng "Export CSV" để tải tệp mở trực tiếp trong Excel hay Google Sheets, hoặc "Copy CSV" để dán bảng vào bất cứ đâu. Nhờ định dạng CSV chuẩn, bạn có thể sắp xếp, lọc và phân tích dữ liệu tần suất bằng mọi công cụ bảng tính quen thuộc mà không cần nhập lại thủ công.',
      },
      {
        question: 'Làm thế nào để dùng tần suất từ để cải thiện bài viết của tôi?',
        answer:
          'Bạn hãy tìm những từ mình lặp lại vô tình, thay chúng bằng từ đồng nghĩa đa dạng, và kiểm tra xem từ khóa chủ đề chính có xuất hiện nhất quán nhưng tự nhiên hay không. Quá trình này giúp văn bản của bạn phong phú hơn, tránh cảm giác đơn điệu, đồng thời vẫn giữ đúng trọng tâm chủ đề mà độc giả và công cụ tìm kiếm mong đợi.',
      },
    ],
  },
  'text-to-slug': {
    instructions: [
      {
        title: 'Nhập một hoặc nhiều tiêu đề',
        description:
          'Gõ một tiêu đề duy nhất hoặc dán nhiều dòng để tạo slug cho từng tiêu đề trong chế độ hàng loạt.',
      },
      {
        title: 'Chọn dấu tách',
        description:
          'Chọn dấu gạch nối (-) cho URL thân thiện với SEO hoặc dấu gạch dưới (_) cho tên tệp và khóa cơ sở dữ liệu.',
      },
      {
        title: 'Điều chỉnh chữ thường và từ dừng',
        description:
          'Giữ nguyên chế độ bắt buộc chữ thường cho URL sạch đẹp và tùy ý loại bỏ từ dừng thông dụng như "the" và "and" để slug ngắn hơn.',
      },
      {
        title: 'Xem lại các slug đã tạo',
        description:
          'Kiểm tra xem mỗi slug có đọc rõ ràng, giữ được từ khóa chính và không còn dấu câu lạ hay dấu tách đôi hay không.',
      },
      {
        title: 'Sao chép slug vào CMS hay code của bạn',
        description:
          'Sao chép từng slug riêng lẻ hay toàn bộ lô vào hệ thống nội dung, bảng định tuyến hay tên tệp của bạn.',
      },
      {
        title: 'Sửa slug trông có vẻ sai',
        description:
          'Nếu một ký tự nào đó còn sót lại kỳ lạ, hãy kiểm tra ký hiệu bất thường hay chữ viết không phải Latin trong tiêu đề gốc rồi đơn giản hóa nó trước khi chuyển đổi lại.',
      },
    ],
    examples: [
      {
        title: 'Chuẩn hóa tiêu đề có dấu',
        input: 'Café & Crème: Guide for 2026!',
        output: 'cafe-and-creme-guide-for-2026',
        explanation:
          'Chuyển đổi chữ Latin có dấu, mở rộng "&" thành "and" và loại bỏ dấu câu.',
      },
      {
        title: 'Chuyển đổi hàng loạt nhiều tiêu đề',
        input: 'How to Compress Images\nBest PNG Tools 2026',
        output: 'how-to-compress-images\nbest-png-tools-2026',
        explanation:
          'Mỗi dòng tạo ra slug riêng của nó, nên nhiều tiêu đề được chuẩn bị xong trong một lần duy nhất.',
      },
    ],
    benefits: [
      'Chuẩn hóa ký tự có dấu (é, ñ, ü) thành ký tự ASCII sạch đẹp',
      'Hỗ trợ chuyển đổi hàng loạt nhiều dòng trong một lần',
      'Tùy chọn loại bỏ từ dừng cho URL ngắn gọn hơn',
      'Thay "&" thành "and" một cách gọn gàng thay vì bỏ mất ý nghĩa',
    ],
    useCases: [
      'Tạo URL dễ đọc cho bài blog và tài liệu hướng dẫn',
      'Tạo tên tệp nhất quán cho tài nguyên và hình ảnh có thể tải xuống',
      'Chuẩn bị hàng loạt slug tuyến đường cho trang tĩnh và danh mục thương mại điện tử',
      'Chuẩn hóa mã định danh danh mục hay thẻ trong cơ sở dữ liệu',
    ],
    faqs: [
      {
        question: 'Tôi nên dùng dấu gạch nối hay dấu gạch dưới trong slug URL?',
        answer:
          'Công cụ tìm kiếm thường khuyên dùng dấu gạch nối (-) làm dấu tách từ trong URL, còn dấu gạch dưới (_) thường dùng cho tên tệp hay khóa cơ sở dữ liệu. Lý do là Google xem dấu gạch nối như dấu tách từ, còn dấu gạch dưới được xem như một phần của từ, nên slug dùng dấu gạch nối sẽ dễ đọc và tối ưu SEO hơn.',
      },
      {
        question: 'Công cụ xử lý ký tự có dấu như "café" như thế nào?',
        answer:
          'Công cụ áp dụng chuẩn hóa Unicode NFD để tách dấu phụ ra khỏi chữ cái rồi loại bỏ chúng một cách sạch sẽ, biến "café" thành "cafe" thay vì xóa mất chữ cái. Nhờ vậy, slug của bạn vẫn giữ được ý nghĩa và cách đọc gần đúng với tiêu đề gốc, thay vì mất hẳn ký tự có dấu.',
      },
      {
        question: 'Tôi có thể chuyển đổi 50 tiêu đề cùng lúc không?',
        answer:
          'Có. Bạn hãy dán một tiêu đề trên mỗi dòng, mọi dòng sẽ được chuyển thành slug tương ứng của nó ở phía bên phải. Chế độ hàng loạt này tiết kiệm rất nhiều thời gian khi bạn cần chuẩn bị slug cho cả một danh mục sản phẩm hay một loạt bài viết cùng lúc.',
      },
      {
        question: 'Text to Slug Converter là gì?',
        answer:
          'Công cụ biến tiêu đề hay cụm từ thành slug sạch đẹp, an toàn cho URL bằng cách viết thường toàn bộ, loại bỏ dấu câu và thay khoảng trắng bằng dấu gạch nối hay gạch dưới. Để tạo slug URL hàng loạt kèm xem trước tên miền và cắt ngắn theo ranh giới từ, bạn hãy xem công cụ URL Slug Generator.',
      },
      {
        question: 'Text to Slug Converter có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy trong trình duyệt của bạn nên tiêu đề của bạn không bao giờ rời khỏi thiết bị. Bạn có thể chuyển đổi bao nhiêu tiêu đề tùy thích, từ một tiêu đề đơn lẻ cho đến hàng trăm tiêu đề trong một lần, mà không gặp bất kỳ giới hạn nào.',
      },
      {
        question: 'Điều gì làm cho một slug thân thiện với SEO?',
        answer:
          'Một slug tốt thường ngắn gọn, dễ đọc, viết thường và được tạo từ những từ thật mô tả trang, với dấu gạch nối tách các từ với nhau. Slug như vậy giúp cả công cụ tìm kiếm lẫn người đọc hiểu ngay nội dung trang chỉ bằng cách liếc qua địa chỉ URL, đồng thời trông đáng tin cậy hơn khi được chia sẻ.',
      },
      {
        question: 'Slug URL nên dài bao nhiêu?',
        answer:
          'Bạn hãy nhắm đến ba đến năm từ có ý nghĩa; slug dài hơn sẽ bị cắt ngắn trong kết quả tìm kiếm và khó nhớ hơn đối với người đọc. Một slug ngắn gọn, tập trung vào từ khóa chính sẽ hiệu quả hơn một slug dài dòng chứa mọi từ trong tiêu đề gốc của bạn.',
      },
      {
        question: 'Vì sao slug viết thường?',
        answer:
          'URL viết thường giúp tránh vấn đề nội dung trùng lặp, vì một số máy chủ xem "/Guide" và "/guide" là hai trang khác nhau. Việc giữ mọi slug ở dạng chữ thường đảm bảo liên kết của bạn luôn hoạt động nhất quán, dù người dùng gõ URL bằng tay hay bấm vào liên kết từ nơi khác.',
      },
      {
        question: 'Số trong slug sẽ ra sao?',
        answer:
          'Số được giữ nguyên như cũ, nên tiêu đề như "Guide for 2026" sẽ trở thành "guide-for-2026". Việc giữ lại số rất quan trọng vì năm, số phiên bản hay số lượng thường là một phần ý nghĩa của tiêu đề, và người đọc sẽ dùng chúng để nhận biết đúng bài viết mình cần.',
      },
      {
        question: 'Ký tự đặc biệt được xử lý như thế nào trong slug?',
        answer:
          'Dấu câu và ký hiệu sẽ bị loại bỏ, "&" trở thành "and", và chữ cái có dấu như é được chuyển thành ký tự ASCII tương đương. Nhờ quy tắc này, slug cuối cùng chỉ chứa chữ cái thường, số và dấu tách, đảm bảo URL hoạt động tốt trên mọi trình duyệt và máy chủ mà không gặp lỗi mã hóa ký tự.',
      },
      {
        question: 'Text to Slug Converter có xử lý được tiêu đề không phải tiếng Anh không?',
        answer:
          'Ký tự Latin có dấu được chuyển đổi gọn gàng, nhưng chữ viết không phải Latin có thể bị loại bỏ, nên bạn hãy kiểm tra kết quả trước khi xuất bản. Với tiêu đề tiếng Việt, chữ có dấu sẽ được chuyển thành chữ không dấu, còn với chữ viết như tiếng Trung hay tiếng Ả Rập, bạn nên tự tạo slug bằng chữ Latin thay thế.',
      },
      {
        question: 'Từ dừng trong slug là gì?',
        answer:
          'Từ dừng là những từ thông dụng như "a", "the" và "of" chỉ làm dài thêm mà không mang ý nghĩa; việc loại bỏ chúng sẽ tạo ra URL ngắn gọn và sạch đẹp hơn. Tuy nhiên, bạn không nên loại bỏ một cách máy móc, vì đôi khi từ dừng lại cần thiết để slug đọc lên vẫn tự nhiên và dễ hiểu.',
      },
      {
        question: 'Tôi có nên loại bỏ từ dừng khỏi mọi slug không?',
        answer:
          'Không phải lúc nào cũng nên. Bạn hãy giữ chúng khi cần thiết cho sự rõ ràng, chẳng hạn trong các hướng dẫn "how-to", và chỉ loại bỏ khi slug vẫn đọc được mà không cần chúng. Một slug như "how-to-compress-images" sẽ mất ý nghĩa nếu bạn bỏ từ "to", nên hãy cân nhắc từng trường hợp cụ thể.',
      },
      {
        question: 'Tôi có thể chuyển đổi nhiều tiêu đề cùng lúc không?',
        answer:
          'Có. Bạn hãy dán một tiêu đề trên mỗi dòng, công cụ sẽ tạo slug tương ứng cho mọi dòng trong một lần duy nhất. Chế độ hàng loạt này đặc biệt hữu ích khi bạn di chuyển trang web, nhập danh mục sản phẩm mới, hay chuẩn bị slug cho cả một loạt bài viết sắp xuất bản.',
      },
      {
        question: 'Text to Slug Converter có tải tiêu đề của tôi lên không?',
        answer:
          'Không. Mọi thao tác chuyển đổi đều diễn ra ngay trong trình duyệt của bạn, nên tiêu đề chưa xuất bản và tên sản phẩm vẫn giữ riêng tư. Bạn có thể yên tâm tạo slug cho những sản phẩm hay bài viết chưa ra mắt mà không lo thông tin bị rò rỉ ra ngoài trước thời điểm công bố.',
      },
      {
        question: 'Vì sao slug của tôi có dấu gạch nối đôi?',
        answer:
          'Dấu gạch nối đôi thường xuất phát từ dấu câu hay khoảng trắng liên tiếp trong tiêu đề gốc; bạn hãy dọn sạch tiêu đề hoặc xóa dấu câu thừa rồi chuyển đổi lại. Ví dụ, tiêu đề có dấu hai chấm kèm khoảng trắng có thể tạo ra hai dấu gạch nối liền nhau, và việc làm sạch tiêu đề trước sẽ khắc phục vấn đề này.',
      },
      {
        question: 'Tôi có thể dùng slug cho tên tệp không?',
        answer:
          'Có. Slug tạo ra tên tệp an toàn và dễ đọc, và tùy chọn dấu tách gạch dưới phù hợp với hệ thống tệp và khóa cơ sở dữ liệu. Thay vì tên tệp chứa khoảng trắng hay ký tự đặc biệt dễ gây lỗi, slug giúp tệp của bạn có tên gọn gàng, nhất quán và hoạt động tốt trên mọi hệ điều hành.',
      },
      {
        question: 'Slug và URL khác nhau thế nào?',
        answer:
          'Slug là phần đuôi dễ đọc của một URL, chẳng hạn như "image-compressor-guide" trong địa chỉ example.com/image-compressor-guide. URL đầy đủ bao gồm tên miền và đường dẫn, còn slug chỉ là phần cuối mô tả nội dung trang, và đây chính là phần mà công cụ này giúp bạn tạo ra.',
      },
      {
        question: 'Slug có ảnh hưởng đến thứ hạng tìm kiếm không?',
        answer:
          'Một slug rõ ràng giúp công cụ tìm kiếm và người đọc hiểu trang ngay từ cái nhìn đầu tiên, dù nó chỉ là một phần nhỏ trong SEO. Slug tốt không thể tự nó đưa trang của bạn lên top, nhưng kết hợp với nội dung chất lượng và tiêu đề tốt, nó góp phần tạo nên một trang dễ hiểu và đáng tin cậy hơn.',
      },
      {
        question: 'Tôi có thể thay đổi slug sau khi đã xuất bản trang không?',
        answer:
          'Có, nhưng bạn hãy thiết lập chuyển hướng từ URL cũ sang URL mới để các liên kết hiện có và danh sách tìm kiếm không bị hỏng. Nếu không có chuyển hướng, người dùng bấm vào liên kết cũ sẽ gặp lỗi 404, và trang của bạn có thể mất thứ hạng tìm kiếm đã tích lũy được từ trước.',
      },
    ],
  },
  'markdown-previewer': {
    instructions: [
      {
        title: 'Viết hoặc dán Markdown',
        description:
          'Dùng cú pháp chuẩn (tiêu đề #, **in đậm**, *in nghiêng*, danh sách, trích dẫn, liên kết và khối code có hàng rào) trong khung bên trái.',
      },
      {
        title: 'Xem bản xem trước trực tiếp',
        description:
          'Khung bên phải hiển thị định dạng của bạn ngay lập tức khi bạn gõ, để bạn kiểm tra tiêu đề, danh sách và liên kết mà không cần làm mới trang.',
      },
      {
        title: 'Chuyển sang tab Raw HTML',
        description:
          'Bấm chuyển đổi phía trên khung bên phải để xem mã HTML đã biên dịch mà bản xem trước được tạo thành từ đó.',
      },
      {
        title: 'Kiểm tra khối code và liên kết',
        description:
          'Cuộn qua bản xem trước để xác nhận các khối code có hàng rào hiển thị đúng và các liên kết trỏ đến đúng nơi bạn mong đợi.',
      },
      {
        title: 'Sao chép HTML hoặc xuất tệp',
        description:
          'Bấm "Copy HTML" để lấy đoạn mã dán vào CMS hay email, hoặc "Export HTML" để tải tài liệu HTML5 độc lập.',
      },
      {
        title: 'Sửa định dạng trông có vẻ sai',
        description:
          'Nếu danh sách hay khối code không hiển thị, hãy kiểm tra xem có thiếu dòng trống trước nó hay hàng rào backtick chưa đóng không, rồi kiểm tra lại bản xem trước.',
      },
    ],
    examples: [
      {
        title: 'Chuyển đổi tiêu đề và danh sách',
        input: '## Checklist\n- **Verify** links\n- Publish draft',
        output: '<h2>Checklist</h2><ul><li><strong>Verify</strong> links</li><li>Publish draft</li></ul>',
        explanation:
          'Chuyển cú pháp Markdown gọn gàng trực tiếp thành các phần tử HTML có ngữ nghĩa.',
      },
      {
        title: 'Khối code và liên kết',
        input: 'See the [docs](https://example.com) and run `npm install`.',
        output: '<p>See the <a href="https://example.com">docs</a> and run <code>npm install</code>.</p>',
        explanation:
          'Chuyển code nội dòng và liên kết thành đúng thẻ HTML tương ứng.',
      },
    ],
    benefits: [
      'Thoát HTML thô và làm sạch lược đồ liên kết để ngăn mã xem trước không an toàn',
      'Hỗ trợ tiêu đề, in đậm/in nghiêng, gạch ngang, trích dẫn, danh sách, liên kết và khối code',
      'Chuyển đổi dễ dàng giữa bản xem trước trực quan và mã nguồn HTML thô',
      'Tải xuống tệp .html độc lập hoàn chỉnh chỉ bằng một cú bấm',
    ],
    useCases: [
      'Xem trước tệp GitHub README.md trước khi commit',
      'Chuyển ghi chú Markdown thành HTML sạch cho email hay khối CMS',
      'Soạn hướng dẫn kỹ thuật và ghi chú phát hành khi ngoại tuyến',
      'Kiểm tra nhanh định dạng liên kết và hàng rào code',
    ],
    faqs: [
      {
        question: 'Markdown Previewer có thực thi JavaScript nhúng không?',
        answer:
          'Không. Thẻ HTML thô trong dữ liệu đầu vào sẽ bị thoát và giao thức liên kết bị giới hạn ở các lược đồ web an toàn, liên kết tương đối, neo và mailto. Nhờ cơ chế này, ngay cả khi bạn dán Markdown chứa mã độc hay thẻ script đáng ngờ, bản xem trước vẫn an toàn và không có mã nào được thực thi trong trình duyệt của bạn.',
      },
      {
        question: 'Tôi có thể chỉ sao chép đoạn HTML đã biên dịch mà không kèm phần boilerplate <html> không?',
        answer:
          'Có. Nút "Copy HTML" sẽ sao chép mã HTML phần thân đã biên dịch, còn "Export HTML" bọc nó trong một tài liệu HTML5 độc lập. Tùy vào nhu cầu của bạn, hãy dùng Copy HTML khi cần dán đoạn mã vào CMS hay email, và dùng Export HTML khi cần một trang web hoàn chỉnh có thể mở riêng.',
      },
      {
        question: 'Khối code có hàng rào có được hỗ trợ không?',
        answer:
          'Có. Bạn hãy bọc đoạn code nhiều dòng trong ba dấu backtick (```) để hiển thị khối <pre><code> đã định dạng. Bạn cũng có thể thêm tên ngôn ngữ sau dấu backtick mở đầu, chẳng hạn như ```js, để khối code được hiển thị rõ ràng và dễ đọc hơn trong bản xem trước.',
      },
      {
        question: 'Markdown Previewer là gì?',
        answer:
          'Công cụ hiển thị văn bản Markdown thành HTML đã định dạng theo thời gian thực để bạn thấy chính xác tiêu đề, danh sách, liên kết và code sẽ trông như thế nào trước khi xuất bản. Thay vì phải đoán định dạng từ cú pháp thô, bạn sẽ thấy ngay kết quả cuối cùng trong khi vẫn đang gõ, giúp việc soạn thảo nhanh và chính xác hơn nhiều.',
      },
      {
        question: 'Markdown Previewer có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy trong trình duyệt của bạn nên bản nháp của bạn không bao giờ bị tải lên. Bạn có thể xem trước bao nhiêu tài liệu Markdown tùy thích, từ README ngắn cho đến hướng dẫn dài, mà không gặp bất kỳ giới hạn hay chi phí ẩn nào.',
      },
      {
        question: 'Trình xem trước hỗ trợ cú pháp Markdown nào?',
        answer:
          'Công cụ hỗ trợ tiêu đề, in đậm, in nghiêng, gạch ngang, trích dẫn, danh sách có thứ tự và không có thứ tự, liên kết, hình ảnh và khối code có hàng rào. Đây là những thành phần Markdown phổ biến nhất, đủ để bạn soạn thảo tài liệu, ghi chú phát hành hay bài viết kỹ thuật một cách đầy đủ và chuyên nghiệp.',
      },
      {
        question: 'Tôi có thể xem trước README của GitHub bằng công cụ này không?',
        answer:
          'Có. Bạn hãy dán nội dung README.md của mình vào trình soạn thảo để kiểm tra cách nó sẽ hiển thị trên GitHub trước khi commit. Nhờ vậy, bạn sẽ phát hiện sớm tiêu đề bị sai cấp, danh sách bị vỡ hay liên kết bị hỏng, thay vì phải commit rồi sửa lại nhiều lần trên kho lưu trữ.',
      },
      {
        question: 'Markdown Previewer có hỗ trợ bảng không?',
        answer:
          'Việc hỗ trợ bảng tùy thuộc vào từng phiên bản Markdown; bạn hãy kiểm tra bản xem trước để xem bảng ống của mình có hiển thị không, và đơn giản hóa chúng nếu không. Nếu bảng không hiển thị đúng, bạn có thể chuyển dữ liệu sang dạng danh sách hay đoạn văn, hoặc dùng một công cụ chuyên về bảng Markdown thay thế.',
      },
      {
        question: '"Copy HTML" và "Export HTML" khác nhau thế nào?',
        answer:
          '"Copy HTML" chỉ sao chép mã HTML phần thân đã biên dịch để dán sang nơi khác, còn "Export HTML" tải xuống một tài liệu HTML5 độc lập hoàn chỉnh. Bạn hãy dùng Copy HTML khi cần chèn đoạn mã vào trang hiện có, và dùng Export HTML khi muốn một tệp riêng có thể mở trong trình duyệt hay gửi cho người khác.',
      },
      {
        question: 'HTML đã xuất có phải là một trang web hoàn chỉnh không?',
        answer:
          'Có. Bản xuất sẽ bọc nội dung của bạn trong một tài liệu HTML5 đầy đủ với thẻ head và body, sẵn sàng mở trong mọi trình duyệt. Bạn có thể mở tệp này ngay trên máy tính, in ra, hay gửi cho đồng nghiệp mà không cần bất kỳ phần mềm hay máy chủ nào khác hỗ trợ.',
      },
      {
        question: 'Markdown Previewer có chạy JavaScript từ dữ liệu đầu vào của tôi không?',
        answer:
          'Không. Thẻ HTML thô sẽ bị thoát và giao thức liên kết bị giới hạn ở các lược đồ web an toàn, đường dẫn tương đối, neo và mailto. Cơ chế bảo vệ này đảm bảo rằng dù bạn dán Markdown từ nguồn không đáng tin, trình duyệt của bạn vẫn an toàn và không có mã độc nào có thể chạy lén.',
      },
      {
        question: 'Tôi có thể dùng Markdown Previewer khi ngoại tuyến không?',
        answer:
          'Trình soạn thảo và bản xem trước chạy hoàn toàn trong trình duyệt của bạn mà không cần tải lên, nên bản nháp của bạn vẫn nằm trên thiết bị trong khi bạn làm việc. Sau khi trang đã tải xong, bạn có thể tiếp tục soạn thảo và xem trước ngay cả khi mất kết nối internet.',
      },
      {
        question: 'Markdown Previewer có lưu công việc của tôi không?',
        answer:
          'Công cụ không lưu văn bản của bạn trên bất kỳ máy chủ nào, nên bạn hãy sao chép hoặc xuất bất cứ nội dung quan trọng nào trước khi đóng tab. Nếu bạn đóng trình duyệt mà chưa lưu, nội dung sẽ mất, vì vậy hãy tạo thói quen xuất HTML hay sao chép Markdown sang nơi an toàn sau mỗi phiên làm việc dài.',
      },
      {
        question: 'Làm thế nào để thêm hình ảnh trong Markdown?',
        answer:
          'Bạn hãy dùng cú pháp ![văn bản thay thế](địa chỉ hình ảnh), hình ảnh sẽ hiển thị trong bản xem trước khi URL có thể truy cập được. Hãy nhớ điền văn bản thay thế mô tả hình ảnh, vì nó giúp người dùng trình đọc màn hình hiểu được nội dung và hiển thị thay thế khi hình ảnh không tải được.',
      },
      {
        question: 'Vì sao khối code của tôi không hiển thị?',
        answer:
          'Bạn hãy đảm bảo hàng rào mở đầu và kết thúc dùng ba dấu backtick trên dòng riêng của chúng, với một dòng trống trước hàng rào mở đầu. Lỗi thường gặp nhất là quên dòng trống hoặc thiếu dấu backtick đóng, khiến toàn bộ phần còn lại của tài liệu bị hiểu nhầm là một khối code dài.',
      },
      {
        question: 'Tôi có thể chuyển Markdown thành HTML cho email không?',
        answer:
          'Có. Bạn hãy sao chép đoạn HTML đã biên dịch rồi dán vào trình soạn thảo email chấp nhận HTML, hoặc xuất toàn bộ tài liệu trước. Cách này giúp email của bạn có định dạng đẹp với tiêu đề, danh sách và liên kết đúng chuẩn, thay vì chỉ là văn bản thuần túy khó đọc.',
      },
      {
        question: 'Tôi có thể viết khối code kèm thẻ ngôn ngữ không?',
        answer:
          'Có. Bạn hãy thêm tên ngôn ngữ sau dấu backtick mở đầu, ví dụ như ```js, khối code sẽ hiển thị dưới dạng code đã định dạng. Thẻ ngôn ngữ giúp người đọc biết ngay đây là code JavaScript, Python hay một ngôn ngữ khác, và một số trình hiển thị còn dùng nó để tô sáng cú pháp cho dễ đọc hơn.',
      },
      {
        question: 'Tôi có thể dán Markdown sao chép từ trình soạn thảo khác không?',
        answer:
          'Có. Bạn hãy dán Markdown từ bất kỳ trình soạn thảo hay ứng dụng ghi chú nào, bản xem trước sẽ cập nhật ngay lập tức. Dù bạn viết trong Notion, Obsidian hay trình soạn thảo văn bản thuần túy, cú pháp Markdown chuẩn đều sẽ được công cụ nhận diện và hiển thị chính xác.',
      },
      {
        question: 'Liên kết trong bản xem trước sẽ ra sao?',
        answer:
          'Liên kết hiển thị dưới dạng thẻ neo có thể bấm được trong bản xem trước, và chỉ các giao thức an toàn như https, đường dẫn tương đối, neo và mailto mới được phép. Nhờ giới hạn này, bạn có thể yên tâm bấm thử liên kết trong bản xem trước mà không lo bị chuyển hướng đến trang độc hại hay kích hoạt hành động nguy hiểm.',
      },
      {
        question: 'Tôi có thể in bản xem trước đã hiển thị không?',
        answer:
          'Có. Bạn hãy xuất tệp HTML rồi mở nó trong trình duyệt, sau đó dùng chức năng in của trình duyệt để in ra hoặc lưu thành PDF. Cách này cho bạn một bản in sạch đẹp với đầy đủ định dạng, rất tiện khi cần nộp bản cứng hay lưu trữ tài liệu dưới dạng PDF để chia sẻ.',
      },
    ],
  },
  'line-prefix-suffix': {
    instructions: [
      {
        title: 'Đặt tiền tố và hậu tố của bạn',
        description:
          'Nhập bất kỳ văn bản nào cần thêm vào trước hay sau mỗi dòng, chẳng hạn như dấu ngoặc kép mở đầu, dấu đầu dòng hay thẻ đóng.',
      },
      {
        title: 'Bật số dòng nếu cần',
        description:
          'Bật "Add line numbers" rồi đặt số bắt đầu và dấu tách, ví dụ như "1. " hay "01: ".',
      },
      {
        title: 'Dán các dòng của bạn',
        description:
          'Nhập một mục trên mỗi hàng vào ô "Input Lines", hoặc bấm "Load sample" để xem trích dẫn kiểu SQL hoạt động ra sao.',
      },
      {
        title: 'Chọn cách xử lý dòng trống',
        description:
          'Giữ nguyên tùy chọn "Skip empty lines" để các dòng trống làm dấu tách được giữ lại mà không bị đánh số hay thêm ký tự thừa.',
      },
      {
        title: 'Xem lại kết quả đã định dạng',
        description:
          'Kiểm tra xem dấu ngoặc kép, dấu phẩy và số có thẳng hàng trên mọi dòng hay không trước khi dùng kết quả.',
      },
      {
        title: 'Sao chép các dòng đã định dạng',
        description:
          'Sao chép toàn bộ khối vào clipboard rồi dán vào truy vấn SQL, tệp code hay tài liệu của bạn.',
      },
    ],
    examples: [
      {
        title: 'Định dạng giá trị cho mệnh đề SQL IN',
        input: 'Prefix: \'  |  Suffix: \',  |  Lines: tokyo / london',
        output: '\'tokyo\',\n\'london\',',
        explanation:
          'Bọc các mục văn bản thuần túy trong dấu ngoặc đơn và dấu phẩy ở cuối ngay lập tức.',
      },
      {
        title: 'Các bước được đánh số có đệm số 0',
        input: 'Line numbers: On · Pad zeros: On · Separator: ": "',
        output: '01: Step one\n02: Step two',
        explanation:
          'Tạo danh sách đánh số thẳng hàng cho dàn ý hay tài liệu hướng dẫn.',
      },
    ],
    benefits: [
      'Kết hợp tiền tố, hậu tố và đánh số dòng tuần tự trong một công cụ',
      'Tùy chọn đệm số 0 giúp danh sách nhiều chữ số thẳng hàng trực quan',
      'Tự động bỏ qua dòng trống khi bật để số đếm luôn chính xác',
      'Không tải lên máy chủ nên ID nhạy cảm hay giá trị truy vấn được giữ riêng tư',
    ],
    useCases: [
      'Bọc ID trong bảng tính bằng dấu ngoặc kép và dấu phẩy cho truy vấn SQL IN (...)',
      'Chuyển mục văn bản thuần túy thành dấu đầu dòng Markdown hay thẻ HTML <li>',
      'Thêm số bước tuần tự vào danh sách kiểm tra và dàn ý',
      'Tạo mảng chuỗi cho JavaScript, Python hay JSON',
    ],
    faqs: [
      {
        question: 'Tôi có thể chỉ thêm số dòng mà không cần tiền tố hay hậu tố không?',
        answer:
          'Có. Bạn hãy xóa trống ô "Line Prefix" và "Line Suffix", bật "Add line numbers", rồi đặt số bắt đầu và dấu tách theo ý thích. Cách này rất tiện khi bạn chỉ muốn đánh số danh sách kiểm tra hay dàn ý mà không cần thêm bất kỳ ký tự trang trí nào khác vào đầu hay cuối mỗi dòng.',
      },
      {
        question: 'Làm thế nào để bỏ qua việc đánh số dòng trống làm dấu tách?',
        answer:
          'Bạn hãy giữ tùy chọn "Skip empty lines" được bật để dòng trống được giữ nguyên mà không làm tăng bộ đếm dòng hay nhận tiền tố/hậu tố. Nhờ vậy, các nhóm trong danh sách của bạn vẫn tách biệt trực quan bằng dòng trống, trong khi số thứ tự của các mục thực sự vẫn liên tục và chính xác.',
      },
      {
        question: 'Tôi có thể bắt đầu đánh số từ 0 hay bất kỳ số tùy chỉnh nào không?',
        answer:
          'Có. Bạn hãy nhập bất kỳ số nguyên nào vào trường "Start Number" để bắt đầu đếm từ 0, 1, 100 hay một số bù khác. Tính năng này hữu ích khi bạn tiếp tục một danh sách đã có sẵn, làm việc với chỉ số bắt đầu từ 0 trong lập trình, hay cần số thứ tự khớp với một tài liệu tham chiếu khác.',
      },
      {
        question: 'Công cụ Add Line Numbers & Prefix/Suffix là gì?',
        answer:
          'Công cụ thêm tiền tố, hậu tố hay số dòng tuần tự tùy chỉnh vào mọi dòng trong danh sách, để bạn định dạng văn bản hàng loạt thay vì chỉnh sửa từng dòng bằng tay. Thay vì mất hàng giờ gõ dấu ngoặc kép hay số thứ tự cho hàng trăm dòng, bạn chỉ cần nhập tiền tố một lần và công cụ sẽ áp dụng cho toàn bộ danh sách.',
      },
      {
        question: 'Công cụ thêm tiền tố và hậu tố cho dòng có miễn phí không?',
        answer:
          'Có, công cụ này hoàn toàn miễn phí, không cần đăng ký, và chạy trong trình duyệt của bạn nên văn bản của bạn không bao giờ rời khỏi thiết bị. Bạn có thể định dạng bao nhiêu danh sách tùy thích, từ vài dòng cho đến hàng nghìn dòng, mà không gặp bất kỳ giới hạn hay tính năng trả phí nào.',
      },
      {
        question: 'Tôi có thể thêm tiền tố mà không cần hậu tố không?',
        answer:
          'Có. Bạn hãy chỉ điền vào trường "Line Prefix" và để trống hậu tố, hoặc ngược lại, chỉ phần bạn nhập mới được áp dụng. Sự linh hoạt này giúp bạn xử lý nhiều trường hợp khác nhau, từ việc chỉ thêm dấu đầu dòng ở đầu dòng cho đến chỉ thêm dấu phẩy ở cuối dòng cho danh sách code.',
      },
      {
        question: 'Làm thế nào để bọc dòng trong dấu ngoặc kép cho mệnh đề SQL IN?',
        answer:
          'Bạn hãy nhập một dấu ngoặc đơn làm tiền tố và "\'," làm hậu tố, mỗi dòng sẽ trở thành một giá trị được trích dẫn kèm dấu phẩy. Kết quả có thể dán thẳng vào mệnh đề IN (...) trong truy vấn SQL của bạn, giúp bạn tiết kiệm rất nhiều thời gian so với việc gõ dấu ngoặc kép cho từng giá trị bằng tay.',
      },
      {
        question: 'Tôi có thể thêm dấu phẩy vào cuối mọi dòng không?',
        answer:
          'Có. Bạn hãy đặt dấu phẩy vào trường "Line Suffix", mọi dòng không trống sẽ kết thúc bằng một dấu phẩy. Đây là thao tác thường gặp khi bạn xây dựng mảng trong code hay danh sách giá trị cho truy vấn, và công cụ sẽ xử lý toàn bộ danh sách của bạn chỉ trong một lần duy nhất.',
      },
      {
        question: 'Tính năng đệm số 0 cho số dòng hoạt động như thế nào?',
        answer:
          'Khi bật đệm số 0, các số sẽ được đệm đến cùng một độ rộng, nên danh sách 100 dòng sẽ hiển thị 001, 002, v.v. thay vì 1, 2 và 100. Việc căn thẳng hàng này giúp danh sách trông gọn gàng và chuyên nghiệp hơn, đặc biệt khi bạn in ra hay hiển thị trong tài liệu mà số thứ tự có nhiều chữ số khác nhau.',
      },
      {
        question: 'Tôi nên dùng dấu tách nào cho dòng được đánh số?',
        answer:
          'Các lựa chọn phổ biến là ". " cho danh sách đánh số đơn giản, ": " cho các bước có nhãn, và ") " cho kiểu đánh số dàn ý. Dấu tách bạn chọn sẽ ảnh hưởng đến vẻ ngoài của danh sách, nên hãy chọn kiểu phù hợp với phong cách tài liệu của bạn và dùng nhất quán trong toàn bộ danh sách.',
      },
      {
        question: 'Tôi có thể đánh số dòng bắt đầu từ số khác 1 không?',
        answer:
          'Có. Bạn hãy nhập bất kỳ số nguyên nào vào trường "Start Number" để bắt đầu từ 0, 100 hay bất kỳ số bù nào khác bạn cần. Tính năng này rất tiện khi bạn tiếp tục đánh số từ một danh sách trước đó, hoặc khi số thứ tự cần khớp với số trang, số chương hay số mục trong một tài liệu tham chiếu.',
      },
      {
        question: 'Dòng trống trong danh sách của tôi sẽ ra sao?',
        answer:
          'Khi bật "Skip empty lines", dòng trống được giữ nguyên mà không có số hay tiền tố/hậu tố; khi tắt, chúng được xử lý như bất kỳ dòng nào khác. Bạn hãy chọn chế độ phù hợp với mục đích của mình: giữ dòng trống làm dấu tách trực quan giữa các nhóm, hoặc đánh số chúng như các mục bình thường trong danh sách liên tục.',
      },
      {
        question: 'Tôi có thể dùng công cụ để tạo danh sách dấu đầu dòng Markdown không?',
        answer:
          'Có. Bạn hãy nhập "- " làm tiền tố, mọi dòng sẽ trở thành một dấu đầu dòng Markdown. Cách này giúp bạn chuyển nhanh một danh sách văn bản thuần túy thành định dạng Markdown sẵn sàng dán vào README, ghi chú hay bài viết, mà không phải gõ dấu gạch ngang cho từng dòng một.',
      },
      {
        question: 'Tôi có thể biến các dòng thành mục danh sách HTML không?',
        answer:
          'Có. Bạn hãy dùng "<li>" làm tiền tố và "</li>" làm hậu tố để bọc mỗi dòng trong thẻ mục danh sách. Kết quả có thể dán thẳng vào thẻ <ul> hay <ol> trong trang web của bạn, giúp bạn tạo danh sách HTML từ văn bản thuần túy chỉ trong vài giây thay vì viết từng thẻ bằng tay.',
      },
      {
        question: 'Công cụ có tải văn bản của tôi lên máy chủ không?',
        answer:
          'Không. Mọi thao tác định dạng đều diễn ra ngay trong trình duyệt của bạn, giúp ID nhạy cảm, giá trị truy vấn và code của bạn được giữ riêng tư. Bạn có thể yên tâm định dạng cả những danh sách chứa mã khách hàng hay giá trị truy vấn nội bộ mà không lo dữ liệu bị gửi ra ngoài.',
      },
      {
        question: 'Tôi có thể định dạng dòng cho mảng JavaScript hay Python không?',
        answer:
          'Có. Bạn hãy bọc các dòng trong dấu ngoặc kép kèm dấu phẩy ở cuối rồi dán kết quả thẳng vào một mảng. Cách này rất tiện khi bạn chuyển danh sách tên, mã sản phẩm hay địa chỉ từ bảng tính thành mảng trong code, và bạn chỉ cần thêm dấu ngoặc vuông ở đầu và cuối để hoàn thành mảng.',
      },
      {
        question: 'Có giới hạn số dòng tôi có thể định dạng không?',
        answer:
          'Công cụ xử lý danh sách dài một cách thoải mái, dù những lần dán cực lớn có thể mất một chút thời gian để xử lý trong trình duyệt. Với hầu hết các danh sách thông thường, từ vài chục đến vài nghìn dòng, kết quả sẽ xuất hiện gần như ngay lập tức sau khi bạn nhập tiền tố và hậu tố.',
      },
      {
        question: 'Vì sao một số dòng không được đánh số?',
        answer:
          'Bạn hãy kiểm tra xem tùy chọn "Skip empty lines" có đang bật không, vì dòng trống được bỏ qua theo thiết kế và sẽ không nhận số. Nếu các dòng có nội dung mà vẫn không được đánh số, hãy kiểm tra xem chúng có chứa ký tự ẩn hay khoảng trắng mà công cụ xem là dòng trống hay không.',
      },
      {
        question: 'Tôi có thể thêm tiền tố khác nhau cho các dòng khác nhau không?',
        answer:
          'Không. Công cụ áp dụng cùng một tiền tố và hậu tố cho mọi dòng; để định dạng hỗn hợp, bạn hãy chạy từng nhóm qua công cụ riêng biệt. Bạn có thể tách danh sách thành các nhóm theo nhu cầu, định dạng từng nhóm với tiền tố riêng, rồi gộp kết quả lại thành danh sách hoàn chỉnh của mình.',
      },
      {
        question: 'Làm thế nào để xóa tiền tố tôi đã thêm nhầm?',
        answer:
          'Bạn hãy dán văn bản đã định dạng vào công cụ Find and Replace hoặc chạy lại danh sách gốc với cài đặt đúng, vì công cụ này chỉ thêm văn bản chứ không loại bỏ nó. Cách an toàn nhất là luôn giữ lại danh sách gốc, để bạn có thể chạy lại từ đầu bất cứ khi nào cần sửa lỗi mà không phải gỡ tiền tố thủ công.',
      },
    ],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'alphabets-to-word-generator': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
};
