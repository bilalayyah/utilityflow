import type { ToolLocaleOverride } from '../../types';

/**
 * Vietnamese overrides — Batch 3: Calculators (14 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Original Vietnamese copy, SEO-optimized for Vietnamese search intent.
 * Slugs are ASCII Latin (diacritics stripped), unique, lowercase,
 * hyphenated, and must not collide with English slugs or reserved paths.
 */
export const VI_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'tinh-tuoi',
    name: 'Máy Tính Tuổi',
    shortDescription:
      'Tính tuổi chính xác theo năm, tháng, ngày từ ngày sinh, kèm tổng số tuần, số ngày đã sống và đếm ngược đến sinh nhật tiếp theo.',
    keywords: [
      'tính tuổi',
      'máy tính tuổi',
      'tính tuổi online',
      'cách tính tuổi theo ngày sinh',
      'age calculator',
      'tôi bao nhiêu tuổi',
      'tính tuổi chính xác',
      'đếm ngược sinh nhật',
      'tính tuổi theo năm tháng ngày',
    ],
    seo: {
      title: 'Máy Tính Tuổi: Tính Tuổi Theo Ngày Sinh | UtilityFlow',
      description:
        'Tính tuổi chính xác từ ngày sinh theo năm, tháng, ngày, tuần và tổng số ngày, kèm đếm ngược đến sinh nhật tiếp theo — miễn phí, có kết quả ngay trong vài giây.',
      primaryKeyword: 'tính tuổi online',
      secondaryKeywords: ['máy tính tuổi', 'cách tính tuổi theo ngày sinh', 'age calculator', 'tôi bao nhiêu tuổi'],
      longTailKeywords: ['cách tính tuổi chính xác theo năm tháng ngày từ ngày sinh', 'còn bao nhiêu ngày nữa đến sinh nhật của tôi', 'kiểm tra tuổi vào một ngày trong quá khứ hoặc tương lai', 'hôm nay tôi bao nhiêu tuổi'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tính tuổi chính xác từ ngày sinh đến hôm nay — hoặc đến bất kỳ ngày nào trong quá khứ hay tương lai — kể cả tháng có độ dài khác nhau và năm nhuận.',
  },
  'percentage-calculator': {
    slug: 'tinh-phan-tram',
    name: 'Máy Tính Phần Trăm',
    shortDescription:
      'Tính phần trăm của một số, X bằng bao nhiêu phần trăm của Y, và mức tăng hoặc giảm phần trăm trong tích tắc.',
    keywords: [
      'tính phần trăm',
      'máy tính phần trăm',
      'cách tính phần trăm',
      'percentage calculator',
      'tính phần trăm tăng giảm',
      'x bằng bao nhiêu phần trăm của y',
      'công thức tính phần trăm',
      'tính phần trăm online',
      'percent calculator',
    ],
    seo: {
      title: 'Máy Tính Phần Trăm: Tính % Online Nhanh | UtilityFlow',
      description:
        'Tính X% của Y, xem một số bằng bao nhiêu phần trăm của số khác và đo mức tăng hay giảm phần trăm — miễn phí, trực tuyến, cho kết quả chính xác ngay lập tức.',
      primaryKeyword: 'tính phần trăm',
      secondaryKeywords: ['máy tính phần trăm', 'cách tính phần trăm', 'percentage calculator', 'tính phần trăm tăng giảm'],
      longTailKeywords: ['cách tính phần trăm tăng hoặc giảm giữa hai số', 'x bằng bao nhiêu phần trăm của y tính như thế nào', 'công cụ tính phần trăm online nhanh chóng', 'x phần trăm của y bằng bao nhiêu'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Giải ba bài toán phần trăm thường gặp nhất cùng lúc — tính X% của một giá trị, xem X chiếm bao nhiêu phần trăm của Y, và đo mức tăng hay giảm phần trăm.',
  },
  'loan-emi-calculator': {
    slug: 'tinh-emi-khoan-vay',
    name: 'Máy Tính EMI Khoản Vay',
    shortDescription:
      'Tính khoản trả góp EMI hàng tháng, tổng tiền lãi phải trả và bảng khấu hao theo năm hoặc theo tháng.',
    keywords: [
      'emi calculator',
      'tính emi khoản vay',
      'máy tính emi',
      'cách tính emi',
      'tính tiền trả góp hàng tháng',
      'loan emi calculator',
      'tính lãi vay ngân hàng',
      'vay mua xe tính emi',
      'vay mua nhà tính emi',
    ],
    seo: {
      title: 'Máy Tính EMI Khoản Vay: Trả Góp Hàng Tháng | UtilityFlow',
      description:
        'Tính EMI hàng tháng, tổng tiền lãi và bảng khấu hao gốc – lãi đầy đủ cho khoản vay cá nhân, vay mua xe hay vay kinh doanh — miễn phí, trực tuyến và chính xác.',
      primaryKeyword: 'emi calculator',
      secondaryKeywords: ['tính emi khoản vay', 'máy tính emi', 'cách tính emi', 'tính tiền trả góp hàng tháng'],
      longTailKeywords: ['cách tính emi hàng tháng và tổng lãi vay online', 'xem bảng khấu hao gốc và lãi của khoản vay', 'máy tính emi vay cá nhân và vay mua xe', 'cách tính emi vay mua nhà online'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Tính khoản trả góp hàng tháng (EMI) chính xác, tổng tiền lãi trong suốt thời hạn vay, tỷ lệ gốc – lãi và bảng khấu hao minh bạch theo từng năm hoặc từng tháng.',
  },
  'mortgage-calculator': {
    slug: 'tinh-vay-mua-nha',
    name: 'Máy Tính Vay Mua Nhà',
    shortDescription:
      'Ước tính khoản trả vay mua nhà hàng tháng gồm tiền trả trước, lãi suất, thuế bất động sản, bảo hiểm và PMI.',
    keywords: [
      'tính vay mua nhà',
      'mortgage calculator',
      'máy tính vay mua nhà',
      'tính tiền trả góp mua nhà hàng tháng',
      'vay mua nhà trả góp bao nhiêu',
      'tính lãi vay mua nhà',
      'piti calculator',
      'so sánh vay mua nhà 15 năm và 30 năm',
      'vay mua nhà trả trước',
    ],
    seo: {
      title: 'Máy Tính Vay Mua Nhà: Trả Góp & Lãi Suất | UtilityFlow',
      description:
        'Ước tính khoản trả vay mua nhà hàng tháng gồm tiền trả trước, thuế, bảo hiểm nhà và phí PMI — miễn phí, ngay trên trình duyệt, kết quả chính xác, chi tiết.',
      primaryKeyword: 'tính vay mua nhà',
      secondaryKeywords: ['mortgage calculator', 'máy tính vay mua nhà', 'tính tiền trả góp mua nhà hàng tháng', 'tính lãi vay mua nhà'],
      longTailKeywords: ['cách tính khoản trả vay mua nhà gồm thuế và bảo hiểm', 'so sánh vay mua nhà 15 năm và 30 năm', 'dư nợ vay mua nhà giảm dần theo thời gian như thế nào', 'mỗi tháng trả được bao nhiêu tiền vay mua nhà'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Mô hình hóa khoản chi nhà ở thực tế hàng tháng — gốc và lãi cộng thuế bất động sản, bảo hiểm nhà, phí quản lý và bảo hiểm thế chấp tư nhân (PMI) — cùng tổng tiền lãi và mức giảm dư nợ theo từng năm.',
  },
  'compound-interest-calculator': {
    slug: 'tinh-lai-kep',
    name: 'Máy Tính Lãi Kép',
    shortDescription:
      'Dự báo tăng trưởng đầu tư với số tiền gửi ban đầu, khoản đóng góp hàng tháng, kỳ hạn ghép lãi và điều chỉnh lạm phát.',
    keywords: [
      'tính lãi kép',
      'máy tính lãi kép',
      'compound interest calculator',
      'lãi kép là gì',
      'cách tính lãi kép',
      'tính lãi đầu tư',
      'gửi tiết kiệm lãi kép',
      'lãi kép hàng tháng',
      'tính giá trị tương lai khoản đầu tư',
    ],
    seo: {
      title: 'Máy Tính Lãi Kép: Tăng Trưởng Tiết Kiệm | UtilityFlow',
      description:
        'Biết giá trị tương lai của khoản đầu tư với số tiền ban đầu, khoản gửi hàng tháng và ghép lãi theo ngày, tháng, quý hay năm — miễn phí, có bảng theo năm.',
      primaryKeyword: 'tính lãi kép',
      secondaryKeywords: ['máy tính lãi kép', 'compound interest calculator', 'cách tính lãi kép', 'tính lãi đầu tư'],
      longTailKeywords: ['cách tính lãi kép với khoản đóng góp hàng tháng online', 'so sánh tăng trưởng ghép lãi hàng tháng và hàng ngày', 'xem bảng lãi kép theo từng năm', '20 năm nữa tiền tiết kiệm của tôi tăng lên bao nhiêu'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Xem số tiền gửi ban đầu và khoản đóng góp đều đặn hàng tháng tăng trưởng ra sao qua nhiều năm nhờ lãi kép — chọn được kỳ hạn ghép lãi và xem bảng gốc so với lãi theo từng năm.',
  },
  'discount-margin-calculator': {
    slug: 'tinh-giam-gia-loi-nhuan',
    name: 'Máy Tính Giảm Giá và Lợi Nhuận',
    shortDescription:
      'Tính giá bán sau khi giảm giá chồng nhau hoặc tính biên lợi nhuận, tỷ lệ markup và lợi nhuận gộp từ giá vốn.',
    keywords: [
      'tính giảm giá',
      'máy tính giảm giá',
      'discount calculator',
      'tính biên lợi nhuận',
      'margin calculator',
      'markup và margin khác nhau thế nào',
      'cách tính giá bán sau giảm giá',
      'tính lợi nhuận gộp',
      'tính giá bán từ giá vốn',
    ],
    seo: {
      title: 'Máy Tính Giảm Giá & Lợi Nhuận: Giá Bán | UtilityFlow',
      description:
        'Tính giá bán cuối cùng sau giảm giá chồng nhau và thuế, hoặc so sánh biên lợi nhuận gộp với markup từ giá vốn và giá bán — miễn phí, trực tuyến, có ngay.',
      primaryKeyword: 'tính giảm giá',
      secondaryKeywords: ['máy tính giảm giá', 'discount calculator', 'tính biên lợi nhuận', 'markup và margin khác nhau thế nào'],
      longTailKeywords: ['cách tính giá cuối sau hai lần giảm giá và thuế', 'biên lợi nhuận và markup khác nhau như thế nào', 'máy tính biên lợi nhuận cho bán hàng online', 'cách tính tỷ lệ lợi nhuận từ giá vốn và giá bán'],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Chuyển đổi dễ dàng giữa hai chế độ — chế độ Giảm Giá bán lẻ (giảm giá chồng nhau và thuế bán hàng tùy chọn) và chế độ Biên Lợi Nhuận & Markup — để định giá sản phẩm chính xác mà không nhầm lẫn biên lợi nhuận với markup.',
  },
  'vat-tax-calculator': {
    slug: 'tinh-thue-vat',
    name: 'Máy Tính Thuế VAT',
    shortDescription:
      'Cộng thuế VAT (GTGT) vào giá chưa thuế hoặc tách thuế ra khỏi hóa đơn đã bao gồm thuế một cách chính xác.',
    keywords: [
      'tính thuế vat',
      'máy tính thuế vat',
      'cách tính thuế vat',
      'vat calculator',
      'thuế gtgt là gì',
      'tính thuế gtgt',
      'cách tính vat 10%',
      'tách thuế vat khỏi giá đã có thuế',
      'tính vat ngược',
    ],
    seo: {
      title: 'Máy Tính Thuế VAT: Giá Chưa & Đã Có Thuế | UtilityFlow',
      description:
        'Cộng thuế VAT (GTGT) vào giá chưa thuế, hoặc tách tiền thuế và giá chưa thuế ra khỏi tổng đã bao gồm thuế — nhanh chóng, miễn phí và không cần đăng ký.',
      primaryKeyword: 'tính thuế vat',
      secondaryKeywords: ['máy tính thuế vat', 'cách tính thuế vat', 'vat calculator', 'tính thuế gtgt'],
      longTailKeywords: ['cách tách thuế vat khỏi giá đã bao gồm thuế', 'cách cộng thuế vat 10% hoặc mức thuế tùy chỉnh vào giá', 'xem bảng chi tiết giá chưa thuế, tiền thuế và tổng cộng', 'cách tính ngược thuế vat từ tổng tiền đã có thuế'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Tính giá chưa thuế, tiền thuế và tổng đã có thuế theo cả hai chiều — cộng thuế VAT (GTGT) vào giá chưa thuế, hoặc tách số tiền chưa thuế chính xác ra khỏi hóa đơn đã bao gồm thuế.',
  },
  'salary-calculator': {
    slug: 'tinh-luong',
    name: 'Máy Tính Quy Đổi Lương',
    shortDescription:
      'Quy đổi lương theo giờ, ngày, tuần, hai tuần, tháng và năm với số giờ làm việc và số tuần trong năm tùy chỉnh.',
    keywords: [
      'tính lương',
      'máy tính lương',
      'salary calculator',
      'quy đổi lương theo giờ sang năm',
      'tính lương theo giờ',
      'lương tháng sang lương năm',
      'tính lương gross',
      'đổi lương theo giờ sang tháng',
      'cách tính lương theo giờ',
    ],
    seo: {
      title: 'Máy Tính Lương: Quy Đổi Theo Giờ Sang Năm | UtilityFlow',
      description:
        'Quy đổi lương gộp theo giờ, ngày, tuần, hai tuần, tháng và năm — tùy chỉnh số giờ làm việc mỗi tuần và số tuần được trả lương trong năm, hoàn toàn miễn phí.',
      primaryKeyword: 'tính lương',
      secondaryKeywords: ['máy tính lương', 'salary calculator', 'quy đổi lương theo giờ sang năm', 'tính lương theo giờ'],
      longTailKeywords: ['cách đổi lương 50 đô la một giờ sang lương năm', 'bảng lương gộp có trừ tuần nghỉ không lương', 'công cụ quy đổi lương theo số giờ làm việc mỗi tuần', 'cách đổi lương năm sang lương tháng và hai tuần'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Quy đổi bất kỳ mức lương nào — theo giờ, ngày, tuần, hai tuần, nửa tháng, tháng hay năm — sang mọi kỳ trả lương, với tùy chọn số giờ làm việc mỗi tuần và số tuần được trả lương trong năm.',
  },
  'tip-calculator': {
    slug: 'tinh-tien-tip',
    name: 'Máy Tính Tiền Tip & Chia Hóa Đơn',
    shortDescription:
      'Tính tiền tip, tùy chọn trừ thuế trước khi tính tip, chia đều hóa đơn cho mỗi người và làm tròn số tiền gọn đẹp.',
    keywords: [
      'tính tiền tip',
      'máy tính tiền tip',
      'tip calculator',
      'chia hóa đơn',
      'cách chia tiền ăn',
      'tính tip bao nhiêu phần trăm',
      'chia bill nhà hàng',
      'tính tiền mỗi người',
      'chia tiền tip cho nhóm',
    ],
    seo: {
      title: 'Máy Tính Tiền Tip: Chia Hóa Đơn & Tip | UtilityFlow',
      description:
        'Tính tiền tip nhà hàng theo tỷ lệ phần trăm, tính tip trên giá chưa thuế, chia đều hóa đơn và làm tròn số tiền — miễn phí, nhanh chóng, chính xác và dễ dùng.',
      primaryKeyword: 'tính tiền tip',
      secondaryKeywords: ['máy tính tiền tip', 'tip calculator', 'chia hóa đơn', 'cách chia tiền ăn'],
      longTailKeywords: ['cách tính tip 18% hay 20% trước thuế', 'cách chia tiền ăn tối và tiền tip cho nhóm bạn', 'máy tính tiền tip làm tròn tổng tiền mỗi người', 'cách chia hóa đơn nhà hàng gồm tip và thuế cho mỗi người'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tính nhanh tiền tip hợp lý cho bữa ăn nhà hàng, giao đồ ăn hay buổi đi chơi nhóm, rồi chia đều hóa đơn cho bất kỳ số người nào — có tùy chọn trừ thuế và làm tròn hóa đơn.',
  },
  'bmi-calculator': {
    slug: 'tinh-bmi',
    name: 'Máy Tính BMI',
    shortDescription:
      'Tính chỉ số khối cơ thể (BMI) theo đơn vị mét hoặc Anh-Mỹ, kèm phân loại cân nặng của WHO và khoảng cân nặng khỏe mạnh.',
    keywords: [
      'tính bmi',
      'máy tính bmi',
      'bmi calculator',
      'chỉ số bmi là gì',
      'cách tính bmi',
      'khoảng cân nặng khỏe mạnh',
      'bảng bmi',
      'bmi của tôi là bao nhiêu',
      'bmi chuẩn là bao nhiêu',
    ],
    seo: {
      title: 'Máy Tính BMI: Tính Chỉ Số Khối Cơ Thể | UtilityFlow',
      description:
        'Tính BMI theo đơn vị mét hoặc Anh-Mỹ, xem phân loại cân nặng của WHO và khoảng cân nặng khỏe mạnh theo chiều cao của bạn — miễn phí, trực tuyến, có ngay.',
      primaryKeyword: 'tính bmi',
      secondaryKeywords: ['máy tính bmi', 'bmi calculator', 'cách tính bmi', 'chỉ số bmi là gì'],
      longTailKeywords: ['cách tính bmi theo feet inch và pound', 'phân loại bmi người lớn của who là gì', 'cách biết khoảng cân nặng khỏe mạnh theo chiều cao', 'khoảng bmi khỏe mạnh cho chiều cao của tôi là bao nhiêu'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Tính chỉ số khối cơ thể (BMI) cho người lớn bằng đơn vị mét (cm/kg) hoặc Anh-Mỹ (feet, inch/pound), xem các nhóm phân loại của Tổ chức Y tế Thế giới và khoảng cân nặng khỏe mạnh 18,5–24,9 theo chiều cao của bạn.',
  },
  'calorie-calculator': {
    slug: 'tinh-calo-tdee',
    name: 'Máy Tính Calo & TDEE',
    shortDescription:
      'Ước tính tỷ lệ trao đổi chất cơ bản (BMR) và tổng năng lượng tiêu hao mỗi ngày (TDEE) theo mục tiêu cân nặng.',
    keywords: [
      'tính calo',
      'máy tính calo',
      'calorie calculator',
      'tdee calculator',
      'bmr calculator',
      'cách tính calo mỗi ngày',
      'tính calo giảm cân',
      'một ngày cần bao nhiêu calo',
      'tính macro protein carb fat',
    ],
    seo: {
      title: 'Máy Tính Calo & TDEE: BMR và Macro Miễn Phí | UtilityFlow',
      description:
        'Biết BMR và TDEE theo công thức Mifflin-St Jeor, đặt mục tiêu giảm hay tăng cân và lập kế hoạch macro — miễn phí, trực tuyến, kèm chia macro chi tiết.',
      primaryKeyword: 'tính calo',
      secondaryKeywords: ['tdee calculator', 'bmr calculator', 'máy tính calo', 'cách tính calo mỗi ngày'],
      longTailKeywords: ['cách tính calo duy trì và thâm hụt calo giảm cân online', 'cách tính lượng calo tiêu hao mỗi ngày theo mifflin st jeor', 'máy tính tdee và macro theo đơn vị mét và anh mỹ', 'muốn giảm cân thì mỗi ngày nên ăn bao nhiêu calo'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Biết tỷ lệ trao đổi chất cơ bản (BMR) và tổng năng lượng tiêu hao mỗi ngày (TDEE) theo phương trình Mifflin-St Jeor đã được kiểm chứng lâm sàng — kèm mục tiêu thâm hụt nhẹ, giảm mỡ chuẩn, tăng cơ và duy trì cân nặng cùng macro.',
  },
  'date-difference-calculator': {
    slug: 'tinh-khoang-cach-ngay',
    name: 'Máy Tính Khoảng Cách Ngày',
    shortDescription:
      'Tính chính xác số năm, tháng, ngày, ngày làm việc và ngày cuối tuần giữa hai ngày, hoặc cộng trừ khoảng thời gian.',
    keywords: [
      'tính khoảng cách ngày',
      'đếm ngày giữa hai ngày',
      'máy tính chênh lệch ngày',
      'date difference calculator',
      'tính số ngày làm việc',
      'cộng ngày vào ngày',
      'còn bao nhiêu ngày nữa',
      'đếm ngày online',
      'tính ngày giữa hai mốc thời gian',
    ],
    seo: {
      title: 'Máy Tính Khoảng Cách Ngày: Đếm Ngày Online | UtilityFlow',
      description:
        'Đếm chính xác số năm, tháng, ngày, ngày làm việc và ngày cuối tuần giữa hai ngày, hoặc cộng trừ khoảng thời gian vào bất kỳ ngày nào — miễn phí và chính xác.',
      primaryKeyword: 'tính khoảng cách ngày',
      secondaryKeywords: ['đếm ngày giữa hai ngày', 'máy tính chênh lệch ngày', 'date difference calculator', 'tính số ngày làm việc'],
      longTailKeywords: ['cách đếm ngày làm việc và ngày cuối tuần giữa hai ngày', 'cách tính số tháng và ngày chính xác giữa hai ngày', 'cách cộng hoặc trừ năm tháng ngày vào một ngày', 'giữa hai ngày có bao nhiêu ngày làm việc online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đo khoảng thời gian chính xác giữa bất kỳ hai ngày nào — gồm đếm ngày làm việc so với ngày cuối tuần và tùy chọn tính cả ngày cuối — hoặc cộng trừ năm, tháng và ngày vào một ngày tham chiếu.',
  },
  'time-duration-calculator': {
    slug: 'tinh-khoang-thoi-gian',
    name: 'Máy Tính Khoảng Thời Gian',
    shortDescription:
      'Tính thời gian đã trôi qua dạng HH:MM:SS giữa hai mốc giờ (kể cả giờ nghỉ và ca đêm) hoặc cộng dồn bảng chấm công nhiều dòng.',
    keywords: [
      'tính khoảng thời gian',
      'máy tính tính giờ',
      'time duration calculator',
      'tính số giờ làm việc',
      'tính thời gian giữa hai mốc giờ',
      'bảng chấm công',
      'cách tính giờ làm việc',
      'cộng giờ phút',
      'tính giờ ca đêm',
    ],
    seo: {
      title: 'Máy Tính Khoảng Thời Gian: Tính Giờ, Chấm Công | UtilityFlow',
      description:
        'Tính số giờ, phút và giây đã trôi qua, trừ giờ nghỉ không lương, xử lý ca đêm qua nửa đêm hoặc cộng dồn bảng chấm công — miễn phí, ngay trên trình duyệt.',
      primaryKeyword: 'tính khoảng thời gian',
      secondaryKeywords: ['máy tính tính giờ', 'time duration calculator', 'tính số giờ làm việc', 'bảng chấm công'],
      longTailKeywords: ['cách tính thời gian đã trôi qua có trừ giờ nghỉ và ca đêm', 'cách đổi thời lượng hh mm ss sang giờ thập phân', 'cách cộng nhiều dòng giờ phút giây với nhau', 'cách tính giờ làm việc có giờ nghỉ trưa online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Biết chính xác số giờ, phút và giây đã trôi qua giữa hai mốc giờ — có trừ giờ nghỉ không lương và xử lý ca đêm qua nửa đêm — hoặc cộng không giới hạn số dòng thời lượng thành số giờ thập phân để tính lương.',
  },
  'unit-converter': {
    slug: 'doi-don-vi-do-luong',
    name: 'Máy Tính Đổi Đơn Vị',
    shortDescription:
      'Đổi đơn vị độ dài, khối lượng, nhiệt độ, diện tích, thể tích, tốc độ và dung lượng lưu trữ số kèm bảng tham chiếu đầy đủ.',
    keywords: [
      'đổi đơn vị',
      'máy tính đổi đơn vị',
      'unit converter',
      'đổi đơn vị đo lường',
      'đổi mét sang feet',
      'đổi kg sang pound',
      'đổi độ c sang độ f',
      'đổi lít sang gallon',
      'đổi km sang dặm',
    ],
    seo: {
      title: 'Máy Tính Đổi Đơn Vị: Độ Dài & Cân Nặng | UtilityFlow',
      description:
        'Đổi độ dài, khối lượng, nhiệt độ, diện tích, thể tích, tốc độ và dung lượng lưu trữ số giữa hệ mét và hệ Anh-Mỹ — kèm bảng tham chiếu đầy đủ, miễn phí.',
      primaryKeyword: 'đổi đơn vị',
      secondaryKeywords: ['máy tính đổi đơn vị', 'unit converter', 'đổi đơn vị đo lường', 'đổi mét sang feet'],
      longTailKeywords: ['cách đổi km sang dặm và kg sang pound online', 'công cụ đổi gigabyte thập phân và gibibyte nhị phân', 'công cụ đổi đơn vị khoa học và kỹ thuật kèm bảng', 'cách đổi độ c sang độ f và độ k online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đổi ngay lập tức trong bảy nhóm đo lường — Độ Dài, Khối Lượng, Nhiệt Độ, Diện Tích, Thể Tích, Tốc Độ và Dung Lượng Lưu Trữ Số — kèm bảng so sánh tự động hiển thị mọi đơn vị trong nhóm.',
  },
  'roman-numeral-converter': {
    slug: 'bo-chuyen-doi-so-la-ma',
    name: 'Bộ Chuyển Đổi Số La Mã',
    shortDescription:
      'Đổi số thành số La Mã và số La Mã thành số ngay lập tức, kể cả chuyển đổi ngày tháng sang số La Mã.',
    keywords: [
      'bộ chuyển đổi số la mã',
      'số la mã sang số',
      'đổi số thành số la mã',
      'chuyển đổi ngày la mã',
      'máy tính số la mã',
      'MMXXVI là số mấy',
      'số la mã từ 1 đến 3999',
      'đổi năm thành số la mã',
      'bảng số la mã',
    ],
    seo: {
      title: 'Bộ Chuyển Đổi Số La Mã: Số & Ngày Tháng | UtilityFlow',
      description:
        'Đổi số thành số La Mã và số La Mã thành số ngay lập tức. Thử bộ chuyển đổi số La Mã miễn phí cho năm, sinh nhật và ngày tháng trực tuyến, không cần đăng ký.',
      primaryKeyword: 'bộ chuyển đổi số la mã',
      secondaryKeywords: [
        'số la mã sang số thường',
        'đổi số thành số la mã',
        'chuyển đổi ngày la mã',
        'máy tính số la mã',
      ],
      longTailKeywords: [
        'cách đổi số thành số la mã',
        '2026 viết bằng số la mã là gì',
        'đổi ngày sinh thành số la mã',
        'đổi năm thành số la mã trực tuyến miễn phí',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Đổi bất kỳ số nguyên nào từ 1 đến 3999 thành số La Mã, hoặc đọc số La Mã như số thường — và đổi cả một ngày đầy đủ thành số La Mã, tất cả ngay trong trình duyệt của bạn.',
  },
  'online-hourly-calculator': {
    slug: 'may-tinh-gio-truc-tuyen',
    name: 'Máy Tính Giờ Trực Tuyến',
    shortDescription:
      'Tính số giờ giữa hai thời điểm, giờ làm việc có nghỉ giải lao, giờ thập phân và lương theo giờ — miễn phí, ngay trên trình duyệt.',
    keywords: [
      'máy tính giờ trực tuyến',
      'máy tính giờ làm việc',
      'tính giờ giữa hai thời điểm',
      'máy tính lương theo giờ',
      'máy tính giờ thập phân',
      'máy tính làm thêm giờ',
      'cộng trừ thời gian',
      'tôi đã làm bao nhiêu giờ',
    ],
    seo: {
      title: 'Máy Tính Giờ Trực Tuyến – Tính Giờ & Lương | UtilityFlow',
      description:
        'Dùng máy tính giờ trực tuyến miễn phí của chúng tôi để tính giờ làm việc, chênh lệch thời gian, giờ nghỉ, giờ thập phân và thu nhập theo giờ ngay lập tức.',
      primaryKeyword: 'máy tính giờ trực tuyến',
      secondaryKeywords: [
        'máy tính giờ làm việc',
        'tính giờ giữa hai thời điểm',
        'máy tính lương theo giờ',
        'máy tính giờ thập phân',
      ],
      longTailKeywords: [
        'cách tính giờ giữa hai thời điểm',
        'cách tính giờ làm việc có nghỉ giải lao',
        'đổi giờ và phút sang giờ thập phân',
        'tính lương theo giờ có làm thêm giờ',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tính số giờ giữa hai thời điểm theo định dạng 12 hoặc 24 giờ, theo dõi ca làm việc với các khoảng nghỉ, cộng hoặc trừ thời gian, đổi giờ và phút sang giờ thập phân, và đổi giờ làm việc thành tiền lương — với làm thêm giờ, giờ nghỉ và đơn vị tiền tệ của bạn, tất cả ngay trong trình duyệt.',
  },
  'heat-index-calculator': {
    slug: 'may-tinh-chi-so-nhiet',
    name: 'Máy Tính Chỉ Số Nhiệt',
    shortDescription: 'Tính chỉ số nhiệt từ nhiệt độ không khí và độ ẩm tương đối — biết trời nóng đến mức nào, theo độ F và độ C, miễn phí ngay trong trình duyệt.',
    keywords: ['máy tính chỉ số nhiệt', 'chỉ số nhiệt', 'tính chỉ số nhiệt', 'máy tính nhiệt độ cảm nhận', 'máy tính nhiệt độ và độ ẩm', 'chỉ số nhiệt fahrenheit', 'chỉ số nhiệt celsius', 'chỉ số nhiệt là gì', 'bảng chỉ số nhiệt'],
    seo: {
      title: 'Máy Tính Chỉ Số Nhiệt – Tính Nhiệt Độ Cảm Nhận | UtilityFlow',
      description: 'Tính chỉ số nhiệt bằng nhiệt độ không khí và độ ẩm. Biết trời nóng đến mức nào với máy tính chỉ số nhiệt Fahrenheit và Celsius miễn phí của chúng tôi.',
      primaryKeyword: 'máy tính chỉ số nhiệt',
      secondaryKeywords: ['máy tính nhiệt độ cảm nhận', 'máy tính nhiệt độ và độ ẩm', 'chỉ số nhiệt fahrenheit', 'chỉ số nhiệt celsius'],
      longTailKeywords: ['cách tính chỉ số nhiệt từ nhiệt độ và độ ẩm', 'chỉ số nhiệt ở 90 độ là bao nhiêu', 'độ ẩm ảnh hưởng đến nhiệt độ cảm nhận như thế nào', 'tính nhiệt độ biểu kiến trực tuyến'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Nhập nhiệt độ không khí và độ ẩm tương đối để biết trời thực sự nóng đến mức nào: chỉ số nhiệt theo độ F và độ C, chênh lệch so với nhiệt độ đo được và mức rủi ro do nóng, tất cả ngay trong trình duyệt.',
  },
};
