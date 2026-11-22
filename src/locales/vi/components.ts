import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the vi locale.
 * Translated from the English STRINGS_EN tables in src/tools/*.
 * Loaded only when the vi locale is selected.
 */
export const viComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "Văn bản cần chuyển đổi chữ hoa/thường",
      "placeholder": "Nhập hoặc dán văn bản, rồi bấm một nút chuyển đổi bên dưới...",
      "copyResult": "Sao chép kết quả"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Viết văn bản rõ ràng, ngắn gọn để vừa với giới hạn ký tự của mọi nền tảng — không bị cắt xén kỳ lạ trong kết quả tìm kiếm hay trên mạng xã hội.",
      "withSpaces": "Tính cả khoảng trắng",
      "withoutSpaces": "Không tính khoảng trắng",
      "words": "Từ",
      "letters": "Ký tự",
      "digits": "Chữ số",
      "utf8Bytes": "Byte UTF-8",
      "copyText": "Sao chép văn bản",
      "textToMeasure": "Văn bản cần đo độ dài ký tự",
      "placeholder": "Nhập hoặc dán văn bản để xem số ký tự chính xác, dung lượng byte và giới hạn của từng nền tảng...",
      "whitespaceChars": "Ký tự khoảng trắng",
      "lines": "Dòng",
      "platformLimitsTitle": "Giới hạn ký tự của nền tảng và SEO",
      "over": "Vượt",
      "left": "Còn lại",
      "platformLimits": [
        {
          "name": "Tiêu đề meta SEO",
          "note": "Độ dài tiêu đề Google SERP được khuyến nghị"
        },
        {
          "name": "Mô tả meta SEO",
          "note": "Giới hạn thường gặp của đoạn trích trên máy tính"
        },
        {
          "name": "Một đoạn SMS",
          "note": "Một tin nhắn SMS GSM-7"
        },
        {
          "name": "Bài đăng X / Twitter",
          "note": "Độ dài bài đăng thường gặp"
        },
        {
          "name": "Xem trước chú thích Instagram",
          "note": "Phần hiển thị trước nút \"Thêm\""
        },
        {
          "name": "Bài đăng LinkedIn",
          "note": "Độ dài tối đa thường gặp của bài cập nhật trên bảng tin"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Tìm",
      "replaceWith": "Thay bằng",
      "findPlaceholder": "Nhập văn bản cần tìm...",
      "replacePlaceholder": "Nhập văn bản thay thế...",
      "caseSensitive": "Phân biệt chữ hoa/thường",
      "wholeWordOnly": "Chỉ từ nguyên vẹn",
      "useRegex": "Dùng biểu thức chính quy (RegExp)",
      "regexError": "Lỗi Regex:",
      "invalidRegex": "Biểu thức chính quy không hợp lệ.",
      "sourceText": "Văn bản gốc",
      "updatedOutput": "Kết quả đã thay thế",
      "match": "Kết quả khớp",
      "matches": "Kết quả khớp",
      "replaced": "Đã thay thế",
      "sourcePlaceholder": "Dán văn bản cần tìm và thay thế...",
      "outputPlaceholder": "Văn bản đã thay thế sẽ hiện ở đây...",
      "copyResult": "Sao chép kết quả"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Tiền tố dòng",
      "lineSuffix": "Hậu tố dòng",
      "startNumber": "Số bắt đầu",
      "numberSeparator": "Ký tự phân cách số",
      "addLineNumbers": "Thêm số dòng",
      "zeroPad": "Đệm số 0 (01, 02)",
      "skipEmptyLines": "Bỏ qua dòng trống",
      "inputLines": "Dòng nhập vào",
      "formattedLines": "Dòng đã định dạng",
      "copyResult": "Sao chép kết quả",
      "inputPlaceholder": "Dán một giá trị hoặc một dòng mỗi hàng...",
      "outputPlaceholder": "Các dòng đã đánh số hoặc đã bọc sẽ hiện ở đây..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Số lượng",
      "unit": "Đơn vị",
      "unitLabels": {
        "paragraphs": "Đoạn văn",
        "sentences": "Câu",
        "words": "Từ"
      },
      "startClassic": "Bắt đầu bằng “Lorem ipsum”",
      "wrapHtml": "Bọc trong thẻ <p>",
      "words": "Từ",
      "characters": "Ký tự",
      "regenerate": "Tạo lại",
      "copyPlaceholder": "Sao chép văn bản giữ chỗ",
      "generatedText": "Văn bản giữ chỗ đã tạo"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Ghi chú phát hành UtilityFlow\n\nChào mừng bạn đến với **Trình xem trước Markdown** — trình chỉnh sửa nhanh chạy trong trình duyệt với tính năng xuất *HTML* trực tiếp.\n\n## Tính năng chính\n\n- Định dạng tức thì cho tiêu đề, danh sách và liên kết\n- Thoát HTML an toàn mà không cần tải lên máy chủ từ xa\n- Sao chép và tải xuống HTML thô chỉ bằng một cú nhấp\n\n> Giữ tài liệu gần với công việc và xem lại cấu trúc trước khi xuất bản.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nTìm hiểu thêm tại [UtilityFlow](/tools/).",
      "renderedPreview": "Bản xem trước đã hiển thị",
      "rawHtml": "HTML thô",
      "exportHtml": "Xuất HTML",
      "copyHtml": "Sao chép HTML",
      "markdownSource": "Nguồn Markdown",
      "livePreview": "Xem trước trực tiếp",
      "compiledHtml": "HTML đã biên dịch",
      "compiledHtmlAria": "Nguồn của HTML đã biên dịch",
      "inputPlaceholder": "Viết Markdown (# tiêu đề, **in đậm**, - danh sách, [liên kết](https://...))...",
      "emptyPreview": "Bản xem trước sẽ hiện ở đây khi bạn nhập Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "Viết kỹ thuật rõ ràng là cách tôn trọng thời gian của người đọc. Hãy dùng danh từ cụ thể và động từ chủ động ở những chỗ có thể để hướng dẫn phức tạp vẫn dễ theo dõi.\n\nCâu dài chứa nhiều mệnh đề lồng nhau khiến người đọc phải đọc lại cả đoạn. Chia phần giải thích dày đặc thành các bước ngắn giúp tài liệu quét nhanh hơn và dễ áp dụng hơn.",
      "level": "Mức độ:",
      "textToCheck": "Văn bản cần kiểm tra độ dễ đọc",
      "placeholder": "Dán bài viết, bài luận hoặc văn bản trang đích của bạn để xem điểm Flesch Reading Ease và cấp độ lớp...",
      "fleschEase": "Flesch Reading Ease",
      "fleschKincaid": "Cấp độ Flesch-Kincaid",
      "usGrade": "Cấp lớp học ở Mỹ",
      "gunningFog": "Chỉ số Gunning Fog",
      "yearsEducation": "Số năm học vấn",
      "smog": "Chỉ số SMOG",
      "polysyllable": "Độ phức tạp đa âm tiết",
      "structuralBreakdown": "Phân tích cấu trúc",
      "wordsSentences": "Từ / Câu",
      "avgSentenceLength": "Độ dài câu trung bình",
      "words": "Từ",
      "avgSyllablesPerWord": "Số âm tiết trung bình mỗi từ",
      "complexWords": "Từ phức tạp (3+ âm tiết)",
      "longWordsDetected": "Đã phát hiện từ dài (3+ âm tiết)",
      "noLongWords": "Không tìm thấy từ 3+ âm tiết trong đoạn này.",
      "emptyState": "Nhập ít nhất một câu ở trên để xem các công thức độ dễ đọc và tỷ lệ cấu trúc.",
      "levels": [
        {
          "level": "Rất dễ",
          "audience": "Lớp 5 (10–11 tuổi)"
        },
        {
          "level": "Dễ",
          "audience": "Lớp 6 (11–12 tuổi)"
        },
        {
          "level": "Khá dễ",
          "audience": "Lớp 7 (12–13 tuổi)"
        },
        {
          "level": "Bình thường",
          "audience": "Lớp 8–9 (13–15 tuổi)"
        },
        {
          "level": "Khá khó",
          "audience": "Lớp 10–12"
        },
        {
          "level": "Khó",
          "audience": "Trình độ đại học"
        },
        {
          "level": "Rất khó",
          "audience": "Trình độ sau đại học / chuyên gia"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Phân biệt chữ hoa/thường",
      "trimWhitespace": "Xóa khoảng trắng thừa",
      "removeEmptyLines": "Xóa dòng trống",
      "sortAlphabetically": "Sắp xếp theo bảng chữ cái",
      "originalLines": "Dòng gốc",
      "lines": "Dòng",
      "uniqueLines": "Dòng duy nhất",
      "unique": "Duy nhất",
      "removed": "Đã xóa",
      "inputPlaceholder": "Dán danh sách, mỗi mục một dòng...",
      "outputPlaceholder": "Kết quả đã xóa trùng lặp sẽ hiện ở đây..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Phân biệt chữ hoa/thường",
      "ignoreBlankLines": "Bỏ qua dòng trống",
      "removeDuplicates": "Xóa trùng lặp",
      "inputLines": "Dòng nhập vào",
      "sortedLines": "Dòng đã sắp xếp",
      "copySorted": "Sao chép dòng đã sắp xếp",
      "inputPlaceholder": "Nhập mỗi mục một dòng...",
      "outputPlaceholder": "Kết quả đã sắp xếp sẽ hiện ở đây...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "Tự nhiên (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Ngắn nhất trước"
        },
        {
          "id": "length-desc",
          "label": "Dài nhất trước"
        },
        {
          "id": "reverse-order",
          "label": "Thứ tự ngược"
        },
        {
          "id": "shuffle",
          "label": "Xáo trộn"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Bỏ qua khoảng trắng",
      "ignoreCase": "Bỏ qua chữ hoa/thường",
      "originalText": "Văn bản gốc",
      "modifiedText": "Văn bản đã sửa",
      "originalPlaceholder": "Dán văn bản gốc...",
      "modifiedPlaceholder": "Dán văn bản đã sửa...",
      "lineComparison": "So sánh theo dòng",
      "added": "Đã thêm",
      "removed": "Đã xóa",
      "unchanged": "Không đổi",
      "emptyState": "Nhập văn bản vào cả hai ô để xem dòng nào được thêm hoặc xóa."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Dòng văn bản thứ nhất\nDòng văn bản thứ hai\nDòng văn bản thứ ba",
      "originalText": "Văn bản gốc",
      "reversedOutput": "Kết quả đã đảo ngược",
      "inputPlaceholder": "Nhập văn bản hoặc các dòng cần đảo ngược...",
      "outputPlaceholder": "Văn bản đã đảo ngược sẽ hiện ở đây...",
      "modes": [
        {
          "id": "characters",
          "label": "Đảo ngược ký tự"
        },
        {
          "id": "words",
          "label": "Đảo ngược thứ tự từ"
        },
        {
          "id": "each-word",
          "label": "Đảo ngược từng từ"
        },
        {
          "id": "lines",
          "label": "Đảo ngược thứ tự dòng"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 cách tốt nhất để định dạng JSON online!\nCafé và Crème: hướng dẫn 2026\nCách tạo trang tĩnh nhanh trên Cloudflare Pages",
      "hyphen": "Dấu gạch ngang (-)",
      "underscore": "Dấu gạch dưới (_)",
      "forceLowercase": "Chuyển tất cả thành chữ thường",
      "stripStopWords": "Loại bỏ từ dừng thường gặp",
      "titlesLabel": "Tiêu đề hoặc cụm từ (mỗi dòng một tiêu đề cho chế độ hàng loạt)",
      "inputPlaceholder": "Nhập tiêu đề blog, tên sản phẩm hoặc danh sách tiêu đề...",
      "generatedSlugs": "Slug URL đã tạo",
      "copySlugs": "Sao chép slug",
      "outputPlaceholder": "clean-url-slugs-appear-here"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Dòng đầu tiên   có   quá nhiều   khoảng trắng.   \n\n   Dòng thứ hai   có   tab\tvà   khoảng trống.   \n\n\nDòng thứ ba   ở đây.   ",
      "collapseSpaces": "Gộp nhiều khoảng trắng thành một",
      "trimEdges": "Cắt khoảng trắng ở đầu/cuối dòng",
      "tabsToSpaces": "Chuyển tab thành khoảng trắng",
      "lineBreaks": "Ngắt dòng:",
      "keepBreaks": "Giữ ngắt dòng",
      "removeBlankLines": "Xóa dòng trống",
      "replaceWithSpaces": "Thay bằng khoảng trắng",
      "removeAllBreaks": "Xóa mọi dấu ngắt",
      "inputText": "Văn bản nhập vào",
      "chars": "Ký tự",
      "cleanedText": "Văn bản đã làm sạch",
      "removed": "Đã xóa",
      "inputPlaceholder": "Dán văn bản lộn xộn có quá nhiều khoảng trắng, tab hoặc dòng trống...",
      "outputPlaceholder": "Kết quả đã làm sạch sẽ tự hiện ở đây..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow đếm mọi thứ trong văn bản của bạn ngay trong trình duyệt. Dù bạn đang viết bài blog, chỉnh sửa thông báo sản phẩm hay kiểm tra bài luận học thuật với giới hạn từ nghiêm ngặt — đếm tức thì giúp thông điệp của bạn luôn gọn gàng.\n\nCâu ngắn giúp người đọc quét nhanh hơn. Thay đổi độ dài câu giúp hướng dẫn dài vẫn thú vị khi đọc trên cả máy tính và điện thoại.",
      "words": "Từ",
      "characters": "Ký tự",
      "noSpaces": "Không tính khoảng trắng",
      "sentences": "Câu",
      "paragraphs": "Đoạn văn",
      "readingTime": "Thời gian đọc",
      "downloadTxt": "Tải xuống .txt",
      "copyText": "Sao chép văn bản",
      "textToCount": "Văn bản cần đếm",
      "placeholder": "Dán hoặc nhập văn bản để đếm từ, ký tự, câu và thời gian đọc...",
      "deliveryTimingLines": "Thời gian nói và số dòng",
      "speakingTime": "Thời gian nói (130 từ/phút)",
      "totalLines": "Tổng số dòng",
      "avgWordLength": "Độ dài từ trung bình",
      "chars": "Ký tự",
      "mostFrequentWords": "Từ xuất hiện nhiều nhất",
      "emptyKeywords": "Nhập văn bản ở trên để xem những từ lặp lại nhiều nhất."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Kiểm tra SEO kỹ thuật xem xét khả năng thu thập dữ liệu, liên kết nội bộ và tốc độ trang. Trang nhanh cải thiện mức độ tương tác của người dùng và tín hiệu tốc độ trang trên tìm kiếm di động. Liên kết nội bộ kết nối các hướng dẫn liên quan và củng cố cấu trúc SEO kỹ thuật.",
      "ngramLabels": {
        "1": "1 từ",
        "2": "Cụm 2 từ",
        "3": "Cụm 3 từ"
      },
      "excludeStopWords": "Loại bỏ từ dừng thường gặp",
      "minLength": "Độ dài tối thiểu:",
      "textForAnalysis": "Văn bản cần phân tích tần suất",
      "placeholder": "Dán bài viết, mô tả sản phẩm hoặc ghi chú để đếm từ lặp lại và mật độ từ khóa...",
      "totalWords": "Tổng số từ:",
      "uniqueTerms": "Từ duy nhất:",
      "exportCsv": "Xuất CSV",
      "copyCsv": "Sao chép CSV",
      "rank": "#",
      "termPhrase": "Từ / Cụm từ",
      "count": "Số lần",
      "density": "Mật độ",
      "emptyState": "Nhập văn bản ở trên để xem số lần xuất hiện của từ và tỷ lệ mật độ từ khóa."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Vui lòng nhập ngày hợp lệ.",
      "errorDobAfterTarget": "Ngày sinh không thể sau ngày đích.",
      "dobLabel": "Ngày sinh",
      "targetLabel": "Tuổi tính đến ngày",
      "exactAge": "Tuổi chính xác",
      "yearsWord": "năm",
      "monthsWord": "tháng",
      "daysWord": "ngày",
      "nextBirthday": "Sinh nhật tiếp theo",
      "turning": "Sẽ tròn",
      "inWord": "sau",
      "totalMonths": "Tổng số tháng",
      "totalWeeks": "Tổng số tuần",
      "totalDays": "Tổng số ngày",
      "totalHours": "Tổng số giờ (xấp xỉ)",
      "monthsAbbr": "tháng",
      "weeksAbbr": "tuần",
      "daysAbbr": "ngày",
      "hoursAbbr": "giờ"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Thiếu cân",
      "normalWeight": "Cân nặng bình thường",
      "overweight": "Thừa cân",
      "obesity": "Béo phì",
      "errorHeightMetric": "Nhập chiều cao từ 50 cm đến 280 cm.",
      "errorWeightMetric": "Nhập cân nặng từ 15 kg đến 500 kg.",
      "errorHeightImperial": "Nhập chiều cao hợp lệ — từ 2 ft đến 9 ft.",
      "errorWeightImperial": "Nhập cân nặng từ 30 lbs đến 1100 lbs.",
      "metricTab": "Hệ mét (cm / kg)",
      "imperialTab": "Hệ Anh (ft, in / lbs)",
      "heightCmLabel": "Chiều cao (cm)",
      "weightKgLabel": "Cân nặng (kg)",
      "heightFtLabel": "Chiều cao (ft)",
      "heightInLabel": "Chiều cao (in)",
      "weightLbsLabel": "Cân nặng (lbs)",
      "bmiLabel": "Chỉ số khối cơ thể (BMI)",
      "whoCategory": "Phân loại WHO",
      "healthyRange": "Khoảng cân nặng BMI khỏe mạnh (18,5–24,9)",
      "disclaimer": "BMI chỉ là tỷ lệ sàng lọc chung — nó không phân biệt khối lượng cơ bắp với mỡ cơ thể."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Nhập tuổi từ 15 đến 100.",
      "errorHeightMetric": "Nhập chiều cao từ 100 cm đến 250 cm.",
      "errorWeightMetric": "Nhập cân nặng từ 30 kg đến 350 kg.",
      "errorHeightImperial": "Nhập chiều cao từ 3 ft 4 in đến 8 ft 2 in.",
      "errorWeightImperial": "Nhập cân nặng từ 66 lbs đến 770 lbs.",
      "metricTab": "Hệ mét (cm / kg)",
      "imperialTab": "Hệ Anh (ft, in / lbs)",
      "maleTab": "Nam",
      "femaleTab": "Nữ",
      "ageLabel": "Tuổi (năm)",
      "heightCmLabel": "Chiều cao (cm)",
      "weightKgLabel": "Cân nặng (kg)",
      "heightFtLabel": "Chiều cao (ft)",
      "heightInLabel": "Chiều cao (in)",
      "weightLbsLabel": "Cân nặng (lbs)",
      "activityLabel": "Mức độ vận động",
      "activitySedentary": "Ít vận động (1,2×)",
      "activitySedentaryDetail": "Công việc văn phòng, rất ít hoặc không tập thể dục",
      "activityLight": "Vận động nhẹ (1,375×)",
      "activityLightDetail": "Tập nhẹ, 1–3 ngày/tuần",
      "activityModerate": "Vận động vừa (1,55×)",
      "activityModerateDetail": "Tập vừa, 3–5 ngày/tuần",
      "activityVery": "Rất năng động (1,725×)",
      "activityVeryDetail": "Tập nặng, 6–7 ngày/tuần",
      "activityExtra": "Cực kỳ năng động (1,9×)",
      "activityExtraDetail": "Lao động chân tay hoặc tập hai buổi mỗi ngày",
      "maintenance": "Calo duy trì (TDEE)",
      "mildLoss": "Giảm cân nhẹ (-0,25 kg/tuần)",
      "mildLossNote": "Thâm hụt ~250 kcal mỗi ngày",
      "weightLoss": "Giảm cân (-0,5 kg/tuần)",
      "weightLossNote": "Thâm hụt ~500 kcal mỗi ngày",
      "leanGain": "Tăng cân nạc",
      "leanGainNote": "Thêm +250 kcal mỗi ngày",
      "macroHeading": "Chia macro duy trì (tham khảo) (30% đạm · 40% tinh bột · 30% chất béo)",
      "protein": "Đạm",
      "carbs": "Tinh bột",
      "fat": "Chất béo",
      "gramsPerDay": "g/ngày",
      "disclaimer": "Được tính bằng phương trình BMR Mifflin-St Jeor. Nhu cầu năng lượng của mỗi người khác nhau tùy theo thành phần cơ thể và tình trạng sức khỏe; hãy hỏi ý kiến chuyên gia sức khỏe có chuyên môn trước khi bắt đầu chế độ ăn kiêng nghiêm ngặt."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "Khoản gửi ban đầu không thể là số âm.",
      "errorMonthly": "Khoản đóng góp hằng tháng không thể là số âm.",
      "errorRate": "Tỷ suất sinh lời hằng năm phải từ 0% đến 100%.",
      "errorYears": "Thời gian phải từ 1 đến 100 năm.",
      "initialLabel": "Vốn ban đầu ($)",
      "monthlyLabel": "Đóng góp hằng tháng ($)",
      "rateLabel": "Tỷ suất sinh lời hằng năm (%)",
      "yearsLabel": "Năm",
      "compoundingLabel": "Kỳ ghép lãi",
      "dailyOption": "Hằng ngày (365/năm)",
      "monthlyOption": "Hằng tháng (12/năm)",
      "quarterlyOption": "Hằng quý (4/năm)",
      "annualOption": "Hằng năm (1/năm)",
      "futureBalance": "Số dư tương lai",
      "totalContributed": "Tổng vốn gốc + khoản đóng",
      "totalInterest": "Tổng lãi kép",
      "yearHeader": "Năm",
      "totalContributedHeader": "Tổng đã đóng",
      "cumulativeInterestHeader": "Lãi tích lũy",
      "endingBalanceHeader": "Số dư cuối kỳ",
      "yearPrefix": "Năm"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Vui lòng chọn ngày bắt đầu và ngày kết thúc hợp lệ.",
      "errorInvalidBase": "Vui lòng nhập ngày bắt đầu hợp lệ.",
      "errorNonNegative": "Nhập số nguyên bằng 0 hoặc lớn hơn cho năm, tháng và ngày.",
      "differenceTab": "Khoảng cách giữa hai ngày",
      "addSubtractTab": "Cộng / trừ thời gian",
      "startLabel": "Ngày bắt đầu",
      "endLabel": "Ngày kết thúc",
      "swapTitle": "Đổi ngày",
      "swapAria": "Đổi ngày bắt đầu và ngày kết thúc",
      "includeEnd": "Tính cả ngày kết thúc (+1 ngày dương lịch)",
      "calendarDuration": "Khoảng thời gian dương lịch",
      "reversedRange": "(khoảng ngược)",
      "totalSpan": "Tổng khoảng thời gian:",
      "calendarDays": "Ngày dương lịch",
      "weeksDays": "Tuần và ngày",
      "weekdays": "Ngày trong tuần (Thứ 2–Thứ 6)",
      "weekendDays": "Ngày cuối tuần (Thứ 7–Chủ nhật)",
      "totalHours": "Tổng số giờ",
      "yearsWord": "năm",
      "monthsWord": "tháng",
      "daysWord": "ngày",
      "weeksAbbr": "tuần",
      "daysAbbr": "ngày",
      "hoursAbbr": "giờ",
      "referenceLabel": "Ngày tham chiếu",
      "operationLabel": "Phép tính",
      "addOption": "Cộng (+)",
      "subtractOption": "Trừ (-)",
      "yearsLabel": "Năm",
      "monthsLabel": "Tháng",
      "daysLabel": "Ngày",
      "resultingDate": "Ngày dương lịch kết quả",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "Giá gốc không thể là số âm.",
      "errorDiscount": "Chiết khấu phải từ 0% đến 100%.",
      "errorTax": "Thuế bán hàng phải từ 0% đến 100%.",
      "errorCost": "Chi phí không thể là số âm.",
      "errorSelling": "Giá bán phải lớn hơn 0.",
      "discountTab": "Giảm giá bán hàng",
      "marginTab": "Biên lợi nhuận và markup",
      "originalPriceLabel": "Giá gốc ($)",
      "discountLabel": "Chiết khấu (%)",
      "salesTaxLabel": "Thuế bán hàng (%)",
      "costLabel": "Chi phí mỗi đơn vị ($)",
      "sellingLabel": "Giá bán ($)",
      "finalPrice": "Giá cuối cùng",
      "beforeTax": "Trước thuế:",
      "youSave": "Bạn tiết kiệm",
      "taxAdded": "Thuế đã cộng",
      "grossProfit": "Lợi nhuận gộp",
      "profitMargin": "Biên lợi nhuận",
      "profitDivSelling": "(lợi nhuận ÷ giá bán)",
      "markup": "Markup",
      "profitDivCost": "(lợi nhuận ÷ chi phí)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Nhập số tiền vay lớn hơn 0.",
      "errorRate": "Nhập lãi suất hằng năm từ 0% đến 100%.",
      "errorDuration": "Thời hạn vay phải từ 1 đến 600 tháng.",
      "principalLabel": "Số tiền vay ($)",
      "rateLabel": "Lãi suất hằng năm (% APR)",
      "termLabel": "Thời hạn vay",
      "termUnitAria": "Đơn vị thời hạn vay",
      "yearsOption": "Năm",
      "monthsOption": "Tháng",
      "monthlyPayment": "Khoản trả hằng tháng (EMI)",
      "forPrefix": "cho",
      "monthlyPayments": "Khoản trả hằng tháng",
      "totalInterest": "Tổng tiền lãi",
      "ofTotalCost": "của tổng chi phí",
      "totalRepayment": "Tổng số tiền phải trả",
      "principalWord": "Tiền gốc",
      "principalLabelShort": "Tiền gốc",
      "interestLabelShort": "Tiền lãi",
      "showSchedule": "Hiện lịch trả nợ",
      "hideSchedule": "Ẩn lịch trả nợ",
      "monthHeader": "Tháng",
      "paymentHeader": "Khoản trả",
      "principalHeader": "Tiền gốc",
      "interestHeader": "Tiền lãi",
      "balanceHeader": "Số dư"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "Giá nhà phải lớn hơn 0.",
      "errorDownPayment": "Tỷ lệ trả trước phải từ 0% đến 99,9%.",
      "errorRate": "Lãi suất phải từ 0% đến 50%.",
      "errorTerm": "Thời hạn vay phải từ 1 đến 50 năm.",
      "homePriceLabel": "Giá nhà ($)",
      "downPaymentLabel": "Trả trước (%)",
      "rateLabel": "Lãi suất (% APR)",
      "termLabel": "Thời hạn vay (năm)",
      "yearsWord": "năm",
      "taxLabel": "Thuế bất động sản ($ / năm)",
      "insuranceLabel": "Bảo hiểm nhà ($ / năm)",
      "hoaLabel": "Phí HOA ($ / tháng)",
      "estimatedMonthly": "Khoản trả hằng tháng ước tính",
      "loanAmount": "Số tiền vay",
      "downPayment": "Trả trước",
      "lifetimeInterest": "Tổng tiền lãi suốt thời hạn vay",
      "breakdownHeading": "Chi tiết khoản trả hằng tháng",
      "principalInterest": "Gốc và lãi (P&I)",
      "propertyTaxes": "Thuế bất động sản",
      "homeownersInsurance": "Bảo hiểm chủ nhà",
      "hoaDues": "Phí HOA",
      "pmiLabel": "PMI ước tính (0,5%/năm khi trả trước dưới 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Nhập số hợp lệ.",
      "errorTotalZero": "Tổng (Y) không thể bằng 0.",
      "errorStartZero": "Giá trị ban đầu không thể bằng 0.",
      "heading1": "1. Phần trăm của một số",
      "heading2": "2. Một phần chiếm bao nhiêu phần trăm của tổng",
      "heading3": "3. Tăng hoặc giảm theo phần trăm",
      "whatIs": "là bao nhiêu",
      "percentOf": "% của",
      "isWhatPercentOf": "là bao nhiêu % của",
      "fromWord": "từ",
      "toWord": "đến",
      "result": "Kết quả:",
      "change": "Thay đổi:",
      "formula": "Công thức",
      "difference": "Chênh lệch",
      "ariaPctX": "Phần trăm X",
      "ariaBaseY": "Số cơ sở Y",
      "ariaPartX": "Giá trị phần X",
      "ariaWholeY": "Giá trị tổng Y",
      "ariaInitialA": "Giá trị ban đầu A",
      "ariaFinalB": "Giá trị cuối B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "Số tiền lương không thể là số âm.",
      "errorHours": "Số giờ mỗi tuần phải từ 1 đến 168.",
      "errorWeeks": "Số tuần mỗi năm phải từ 1 đến 52.",
      "errorTax": "Thuế suất hiệu dụng phải từ 0% đến 99%.",
      "amountLabel": "Số tiền lương ($)",
      "frequencyLabel": "Tần suất",
      "hourlyOption": "Theo giờ",
      "dailyOption": "Theo ngày",
      "weeklyOption": "Theo tuần",
      "biweeklyOption": "Hai tuần một lần",
      "monthlyOption": "Theo tháng",
      "annualOption": "Theo năm",
      "hoursLabel": "Giờ / tuần",
      "weeksLabel": "Tuần / năm",
      "taxLabel": "Thuế suất ước tính (%)",
      "rowHourly": "Theo giờ",
      "rowDaily": "Theo ngày (tuần 5 ngày)",
      "rowWeekly": "Theo tuần",
      "rowBiweekly": "Hai tuần một lần",
      "rowMonthly": "Theo tháng",
      "rowAnnual": "Theo năm",
      "payPeriodHeader": "Kỳ trả lương",
      "grossPayHeader": "Lương gộp",
      "estNetPay": "Lương thực nhận ước tính",
      "taxWord": "Thuế"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Nhập thời gian bắt đầu và kết thúc hợp lệ.",
      "errorBreakRange": "Thời gian nghỉ trừ đi phải từ 0 đến 1.440 phút.",
      "errorEndEarlier": "Thời gian kết thúc sớm hơn thời gian bắt đầu. Nếu ca làm qua nửa đêm, hãy bật chuyển đổi qua đêm.",
      "errorBreakExceeds": "Thời gian nghỉ trừ đi lớn hơn tổng thời gian đã trôi qua.",
      "errorSumFields": "Mọi trường khoảng thời gian phải là số bằng 0 hoặc lớn hơn.",
      "betweenTab": "Thời gian trôi qua giữa hai mốc giờ",
      "sumTab": "Cộng các khoảng thời gian trên bảng chấm công",
      "startLabel": "Giờ bắt đầu",
      "endLabel": "Giờ kết thúc",
      "breakLabel": "Nghỉ không lương (phút)",
      "overnightLabel": "Nếu giờ kết thúc sớm hơn giờ bắt đầu, tính là ngày hôm sau (ca đêm)",
      "netDuration": "Thời lượng thực",
      "overnightTag": "(qua đêm)",
      "decimalHours": "Giờ thập phân",
      "totalMinutes": "Tổng số phút",
      "totalSeconds": "Tổng số giây",
      "hoursAbbr": "giờ",
      "minutesAbbr": "phút",
      "secondsAbbr": "giây",
      "labelHeader": "Nhãn",
      "hoursHeader": "Giờ",
      "minutesHeader": "Phút",
      "secondsHeader": "Giây",
      "removeButton": "Xóa",
      "removeAria": "Xóa",
      "addRowButton": "Thêm dòng khoảng thời gian",
      "morningSession": "Buổi sáng",
      "afternoonSession": "Buổi chiều",
      "segmentPrefix": "Đoạn",
      "combinedTime": "Thời gian gộp (HH:MM:SS)",
      "dayEquivalent": "Ngày 24 giờ",
      "daysAbbr": "ngày"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "Tổng hóa đơn không thể là số âm.",
      "errorTip": "Tỷ lệ tiền tip phải từ 0% đến 200%.",
      "errorPeople": "Số người phải từ 1 đến 100.",
      "billLabel": "Tổng hóa đơn ($)",
      "tipLabel": "Tỷ lệ tiền tip (%)",
      "peopleLabel": "Chia cho (số người)",
      "presetsLabel": "Mức tip gợi ý:",
      "roundingLabel": "Làm tròn:",
      "exactOption": "Chính xác đến từng xu",
      "totalUpOption": "Làm tròn tổng lên ($)",
      "perPersonUpOption": "Làm tròn mỗi người lên ($)",
      "perPersonTotal": "Tổng mỗi người",
      "includes": "Bao gồm",
      "tipEach": "Tiền tip mỗi người",
      "totalTip": "Tổng tiền tip",
      "effectiveRate": "Tỷ lệ hiệu dụng:",
      "totalBill": "Tổng hóa đơn"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Nhập số hợp lệ để chuyển đổi.",
      "errorAbsoluteZero": "Nhiệt độ không thể thấp hơn độ 0 tuyệt đối (-273,15 °C / 0 K).",
      "categoryNames": {
        "length": "Độ dài",
        "weight": "Cân nặng và khối lượng",
        "temperature": "Nhiệt độ",
        "area": "Diện tích",
        "volume": "Thể tích",
        "speed": "Tốc độ",
        "storage": "Bộ nhớ số"
      },
      "unitLabels": {
        "mm": "Milimét",
        "cm": "Xentimét",
        "m": "Mét",
        "km": "Kilômét",
        "in": "Inch",
        "ft": "Foot",
        "yd": "Yard",
        "mi": "Dặm",
        "mg": "Miligam",
        "g": "Gam",
        "kg": "Kilôgam",
        "t": "Tấn hệ mét",
        "oz": "Ounce",
        "lb": "Pound",
        "st": "Stone",
        "C": "Độ C",
        "F": "Độ F",
        "K": "Kelvin",
        "cm2": "Xentimét vuông",
        "m2": "Mét vuông",
        "ha": "Hecta",
        "km2": "Kilômét vuông",
        "ft2": "Foot vuông",
        "yd2": "Yard vuông",
        "acre": "Mẫu Anh",
        "mi2": "Dặm vuông",
        "mL": "Mililít",
        "L": "Lít",
        "m3": "Mét khối",
        "floz": "Ounce lỏng (Mỹ)",
        "cup": "Cốc (Mỹ)",
        "pt": "Pint (Mỹ)",
        "qt": "Quart (Mỹ)",
        "gal": "Gallon (Mỹ)",
        "ms": "Mét / giây",
        "kmh": "Kilômét / giờ",
        "mph": "Dặm / giờ",
        "knot": "Hải lý/giờ",
        "fts": "Foot / giây",
        "B": "Byte",
        "KB": "Kilobyte (10³)",
        "MB": "Megabyte (10⁶)",
        "GB": "Gigabyte (10⁹)",
        "TB": "Terabyte (10¹²)",
        "KiB": "Kibibyte (2¹⁰)",
        "MiB": "Mebibyte (2²⁰)",
        "GiB": "Gibibyte (2³⁰)"
      },
      "valueLabel": "Giá trị",
      "fromLabel": "Từ đơn vị",
      "toLabel": "Sang đơn vị",
      "swapAria": "Đổi đơn vị",
      "swapTitle": "Đổi đơn vị",
      "toWord": "thành",
      "copyResult": "Sao chép kết quả",
      "unitHeader": "Đơn vị",
      "symbolHeader": "Ký hiệu",
      "equivalentHeader": "Giá trị tương đương"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "Số tiền không thể là số âm.",
      "errorRate": "Thuế suất phải từ 0% đến 100%.",
      "addTab": "Cộng thuế (giá chưa thuế → giá đã thuế)",
      "removeTab": "Trừ thuế (giá đã thuế → giá chưa thuế)",
      "commonRates": "Mức thuế thường gặp:",
      "netAmountLabel": "Số tiền chưa thuế (net) ($)",
      "grossAmountLabel": "Số tiền đã thuế (gross) ($)",
      "rateLabel": "Thuế suất VAT / thuế bán hàng (%)",
      "netPrice": "Giá chưa thuế (net)",
      "taxAmount": "Số tiền thuế",
      "grossPrice": "Giá đã thuế (gross)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Mã hóa sang Base64",
      "decodeTab": "Giải mã Base64",
      "urlSafe": "An toàn cho URL (- và _)",
      "omitPadding": "Bỏ dấu = đệm ở cuối",
      "swap": "Đổi chiều",
      "decodeError": "Lỗi giải mã:",
      "inputLabelEncode": "Văn bản thuần (UTF-8)",
      "inputLabelDecode": "Chuỗi Base64",
      "inputPlaceholderEncode": "Nhập văn bản hoặc JSON cần mã hóa...",
      "inputPlaceholderDecode": "Dán chuỗi Base64 chuẩn hoặc an toàn cho URL...",
      "outputLabelEncode": "Đầu ra Base64",
      "outputLabelDecode": "Văn bản đã giải mã",
      "outputPlaceholder": "Kết quả đã chuyển đổi sẽ hiện ở đây...",
      "copyOutput": "Sao chép đầu ra",
      "invalidLength": "Độ dài chuỗi Base64 không hợp lệ.",
      "invalidInput": "Đầu vào Base64 không hợp lệ hoặc dãy byte UTF-8 sai."
    },
    "tables": {
      "samplePlain": "UtilityFlow: mã hóa Base64 an toàn UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Chọn màu",
      "colorPickerAria": "Bộ chọn màu",
      "copyHex": "Sao chép HEX",
      "copyRgb": "Sao chép RGB",
      "copyHsl": "Sao chép HSL",
      "contrastTitle": "Kiểm tra tỷ lệ tương phản WCAG 2.1",
      "contrastDesc": "Xem màu chữ ({color}) trên bất kỳ màu nền nào.",
      "backgroundLabel": "Nền:",
      "bgAria": "Màu nền để kiểm tra tương phản",
      "sampleTitle": "Mẫu văn bản thân bài và giao diện",
      "sampleSentence": "Con cáo nâu nhanh nhẹn nhảy qua con chó lười.",
      "aaNormal": "AA văn bản thường (≥ 4,5:1)",
      "aaaNormal": "AAA văn bản thường (≥ 7,0:1)",
      "aaLarge": "AA văn bản lớn (≥ 3,0:1)",
      "pass": "Đạt",
      "fail": "Không đạt"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Biểu thức Cron 5 trường",
      "copyCron": "Sao chép cron",
      "humanTitle": "Lịch trình bằng ngôn ngữ dễ hiểu",
      "breakdownTitle": "Chi tiết từng trường",
      "fieldMinute": "Phút (0–59)",
      "fieldHour": "Giờ (0–23)",
      "fieldDom": "Ngày trong tháng (1–31)",
      "fieldMonth": "Tháng (1–12)",
      "fieldDow": "Ngày trong tuần (0–6)",
      "nextRuns": "{count} lần chạy tiếp theo (giờ địa phương)",
      "noRuns": "Không tìm thấy lần chạy khớp nào trong 366 ngày tới.",
      "fieldsError": "Cron chuẩn cần 5 trường (phút giờ ngày-trong-tháng tháng ngày-trong-tuần). Đã nhận {count}.",
      "emptySegment": "Đoạn trống trong \"{token}\"",
      "invalidStep": "Bước \"{step}\" không hợp lệ trong \"{token}\"",
      "outOfRange": "Giá trị ngoài phạm vi trong \"{token}\" ({min}–{max})",
      "invalidCron": "Biểu thức cron không hợp lệ.",
      "everyMinutes": "Mỗi {n} phút",
      "minuteZeroHour": "Vào phút 0 mỗi giờ",
      "atTime": "Lúc {time}",
      "atFields": "Lúc {a}, {b}",
      "dayEveryDay": "Mỗi ngày",
      "dayWeekdays": "Vào các ngày trong tuần (Thứ 2–Thứ 6)",
      "dayOfMonth": "Vào ngày {day} trong tháng",
      "dayDow": "Vào {dow}",
      "dayBoth": "Vào ngày {day} hoặc {dow}",
      "monthIn": " trong {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "Mỗi 5 phút",
          "expr": "*/5 * * * *"
        },
        {
          "label": "Mỗi giờ",
          "expr": "0 * * * *"
        },
        {
          "label": "Nửa đêm mỗi ngày",
          "expr": "0 0 * * *"
        },
        {
          "label": "9:00 sáng các ngày trong tuần",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "08:30 ngày 1 mỗi tháng",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7"
      ],
      "monthLabels": [
        "",
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
      ],
      "unitWords": {
        "minute": "phút",
        "hour": "giờ",
        "day": "ngày",
        "month": "tháng",
        "weekday": "ngày trong tuần"
      },
      "unitPlurals": {
        "minute": "phút",
        "hour": "giờ",
        "day": "ngày",
        "month": "tháng",
        "weekday": "ngày trong tuần"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Thu gọn CSS",
      "beautifyTab": "Làm đẹp CSS",
      "inputLabel": "CSS đầu vào",
      "bytesLabel": "byte",
      "inputPlaceholder": "Dán quy tắc CSS hoặc stylesheet vào đây...",
      "outputLabelMinify": "CSS đã thu gọn",
      "outputLabelBeautify": "CSS đã làm đẹp",
      "outputPlaceholder": "CSS đã xử lý sẽ hiện ở đây...",
      "copyCss": "Sao chép CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Nhập văn bản",
      "fileTab": "Checksum tệp cục bộ",
      "uppercaseHex": "Hex chữ hoa",
      "inputLabel": "Chuỗi nhập vào (UTF-8)",
      "inputPlaceholder": "Nhập văn bản để lấy hash SHA-1, SHA-256, SHA-384 và SHA-512...",
      "chooseFileLabel": "Chọn tệp cục bộ để tạo hash",
      "fileNoteDefault": "Tệp chỉ được đọc trong bộ nhớ trình duyệt, không bao giờ tải lên.",
      "bytesLabel": "byte",
      "cryptoUnavailable": "Tính năng tạo hash Web Crypto không khả dụng.",
      "sampleText": "Xin chào, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Mã hóa entity",
      "decodeTab": "Giải mã entity",
      "encodeNonAscii": "Mã hóa ký tự không phải ASCII (&#...;)",
      "swap": "Đổi chiều",
      "inputLabelEncode": "HTML / văn bản thô",
      "inputLabelDecode": "Chuỗi đã mã hóa HTML",
      "inputPlaceholderEncode": "<p>Nhập thẻ HTML hoặc ký tự đặc biệt...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Dán entity đã mã hóa...&lt;/p&gt;",
      "outputLabelEncode": "Entity đã mã hóa",
      "outputLabelDecode": "Văn bản đã giải mã",
      "outputPlaceholder": "Entity đã chuyển đổi sẽ hiện ở đây..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Thu gọn JS",
      "beautifyTab": "Làm đẹp JS",
      "indentLabel": "Thụt lề:",
      "indent2": "2 khoảng trắng",
      "indent4": "4 khoảng trắng",
      "inputLabel": "Đầu vào JavaScript / TypeScript",
      "bytesLabel": "byte",
      "inputPlaceholder": "Dán đoạn mã JavaScript hoặc TypeScript...",
      "outputLabelMinify": "Đầu ra đã thu gọn",
      "outputLabelBeautify": "Đầu ra đã làm đẹp",
      "outputPlaceholder": "JavaScript đã định dạng sẽ hiện ở đây...",
      "copyCode": "Sao chép mã"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Ký tự phân cách:",
      "commaOpt": "Dấu phẩy (,)",
      "semicolonOpt": "Dấu chấm phẩy (;)",
      "tabOpt": "Tab (TSV)",
      "conversionError": "Lỗi chuyển đổi:",
      "inputLabelJson": "Đầu vào JSON",
      "inputLabelCsv": "Đầu vào CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "Đầu ra CSV",
      "outputLabelJson": "Đầu ra JSON",
      "outputPlaceholder": "Dữ liệu đã chuyển đổi sẽ hiện ở đây...",
      "parseFallback": "Không phân tích được định dạng đầu vào."
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Giải mã header và payload Base64Url ngay trong bộ nhớ trình duyệt. Không kiểm tra chữ ký mật mã.",
      "loadSampleJwt": "Tải JWT mẫu",
      "inputLabel": "Token JWT đã mã hóa",
      "inputPlaceholder": "Dán token JWT để xem header và claim (eyJhbGciOi...)...",
      "invalidJwt": "JWT không hợp lệ:",
      "headerLabel": "Header (thuật toán và loại)",
      "payloadLabel": "Payload (claim)",
      "copyHeader": "Sao chép header",
      "copyPayload": "Sao chép payload",
      "timestampTitle": "Claim dấu thời gian",
      "iatLabel": "Đã phát hành (iat)",
      "nbfLabel": "Chưa có hiệu lực trước (nbf)",
      "expLabel": "Hết hạn (exp)",
      "expired": "Đã hết hạn",
      "active": "Đang hoạt động (chưa hết hạn)",
      "signatureLabel": "Phần chữ ký (Base64Url)",
      "invalidB64Url": "Độ dài phần Base64Url không hợp lệ.",
      "segmentCount": "Cần 3 phần JWT cách nhau bằng dấu chấm (header.payload.signature), đã nhận {count}.",
      "parseFallback": "Không phân tích được các phần JSON Base64Url của JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Mẫu biểu thức chính quy",
      "patternPlaceholder": "Nhập mẫu regex...",
      "flagsLabel": "Cờ:",
      "syntaxError": "Lỗi cú pháp:",
      "testStringLabel": "Chuỗi kiểm tra",
      "testPlaceholder": "Dán văn bản mẫu để kiểm tra với mẫu của bạn...",
      "highlightedMatches": "Kết quả khớp được tô sáng",
      "matchSingular": "Kết quả khớp",
      "matchPlural": "Kết quả khớp",
      "highlightEmpty": "Kết quả khớp sẽ được tô sáng ở đây theo thời gian thực...",
      "capturedTitle": "Kết quả khớp đã bắt được",
      "matchLabel": "Kết quả khớp",
      "indexLabel": "Vị trí",
      "groupsLabel": "Nhóm:",
      "noMatches": "Không tìm thấy kết quả khớp nào.",
      "replaceLabel": "Xem trước mẫu thay thế",
      "replacePlaceholder": "Ví dụ $1 [at] $2",
      "invalidRegex": "Biểu thức chính quy không hợp lệ."
    },
    "tables": {
      "sampleText": "Liên hệ chính: support@utilityflow.online\nĐội thanh toán: billing@example.org\nEmail không hợp lệ: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (toàn cục)"
        },
        {
          "flag": "i",
          "label": "i (không phân biệt chữ hoa/thường)"
        },
        {
          "flag": "m",
          "label": "m (nhiều dòng)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "Làm đẹp",
      "minify": "Thu gọn",
      "uppercaseKw": "Từ khóa chữ hoa",
      "lowercaseKw": "Chữ thường",
      "indentLabel": "Thụt lề:",
      "indent2": "2 khoảng trắng",
      "indent4": "4 khoảng trắng",
      "inputLabel": "Truy vấn SQL thô",
      "inputPlaceholder": "Dán truy vấn SQL (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "SQL đã định dạng",
      "outputPlaceholder": "SQL đã định dạng sẽ hiện ở đây...",
      "copySql": "Sao chép SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Unix timestamp hiện tại (giây)",
      "useCurrent": "Dùng thời gian hiện tại",
      "copyEpoch": "Sao chép epoch",
      "converter1Label": "Unix timestamp → ngày giờ con người",
      "epochPlaceholder": "Ví dụ 1794544800",
      "unitAuto": "Tự động",
      "unitSeconds": "Giây",
      "unitMilliseconds": "Mili giây",
      "errorNotNumeric": "Nhập Unix timestamp dạng số hợp lệ.",
      "errorOutOfRange": "Timestamp nằm ngoài phạm vi Date hợp lệ của JavaScript.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Múi giờ địa phương",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Tương đối",
      "converter2Label": "Ngày giờ địa phương → Unix timestamp",
      "secondsLabel": "Giây",
      "millisecondsLabel": "Mili giây",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Mã hóa",
      "decode": "Giải mã",
      "encodeUriPreserve": "encodeURI (giữ nguyên ://?&)",
      "swap": "Đổi chiều",
      "urlError": "Lỗi URL:",
      "inputLabel": "Chuỗi nhập vào hoặc URL",
      "inputPlaceholder": "Dán URL, chuỗi truy vấn hoặc giá trị tham số...",
      "outputLabelEncode": "Đầu ra đã mã hóa",
      "outputLabelDecode": "Đầu ra đã giải mã",
      "outputPlaceholder": "URL đã mã hóa hoặc giải mã sẽ hiện ở đây...",
      "parsedTitle": "Chi tiết URL đã phân tích",
      "protocol": "Giao thức",
      "host": "Host",
      "pathname": "Đường dẫn",
      "hash": "Hash",
      "noneValue": "(không có)",
      "queryParam": "Tham số truy vấn",
      "decodedValue": "Giá trị đã giải mã",
      "malformed": "Dãy mã hóa phần trăm sai định dạng."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Phiên bản UUID",
      "v4": "v4 (ngẫu nhiên)",
      "v7": "v7 (sắp xếp theo thời gian)",
      "quantity": "Số lượng (1–100)",
      "generate": "Tạo UUID",
      "uppercase": "Chữ hoa",
      "includeHyphens": "Bao gồm dấu gạch ngang",
      "wrapBraces": "Bọc trong {dấu ngoặc nhọn}",
      "generatedLabel": "UUID đã tạo",
      "copyAll": "Sao chép tất cả"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Chàm trên nền trắng",
      "presetSlate": "Mực xám đá",
      "presetEmerald": "Huy hiệu ngọc lục",
      "presetDark": "Chế độ tối",
      "swapColors": "Đổi màu",
      "fgTitle": "Màu chữ / màu nền trước",
      "bgTitle": "Màu nền",
      "copyHex": "Sao chép HEX",
      "pickerSuffix": "bộ chọn",
      "hexInputSuffix": "ô nhập HEX",
      "contrastRatioLabel": "Tỷ lệ tương phản WCAG 2.1",
      "checkAaNormal": "WCAG AA văn bản thường",
      "checkAaLarge": "WCAG AA văn bản lớn / giao diện",
      "checkAaaNormal": "WCAG AAA văn bản thường",
      "checkAaaLarge": "WCAG AAA văn bản lớn",
      "pass": "Đạt",
      "fail": "Không đạt",
      "livePreviewLabel": "Xem trước khả năng tiếp cận trực tiếp",
      "previewHeading": "Kiểu chữ rõ ràng giúp đọc dễ dàng trên mọi kích thước màn hình.",
      "previewBody": "Văn bản thân bài thông thường (14–16 px) cần tỷ lệ tương phản tối thiểu 4,5:1 cho cấp AA và 7,0:1 cho cấp AAA của WCAG. Tiêu đề lớn (18 pt trở lên hoặc 14 pt in đậm) cần tối thiểu 3,0:1.",
      "outlinedControl": "Điều khiển giao diện có viền",
      "hexOnHex": "{fg} trên {bg}",
      "extractTitle": "Trích xuất bảng màu từ ảnh",
      "extractBody": "Tải lên ảnh chụp màn hình, logo hoặc ảnh — các mẫu HEX chính sẽ đi thẳng vào phần kiểm tra tương phản của bạn.",
      "appliesToLabel": "Nhấp vào mẫu màu sẽ áp dụng cho:",
      "foregroundBtn": "Màu chữ",
      "backgroundBtn": "Màu nền",
      "selectImage": "Chọn ảnh để trích xuất mẫu màu",
      "loadedReplace": "Đã tải: {name} (tải ảnh khác lên)",
      "selectImageError": "Vui lòng chọn ảnh PNG, JPG, WebP hoặc GIF.",
      "unableToRead": "Không đọc được \"{name}\".",
      "canvasUnavailable": "Canvas 2D không khả dụng.",
      "transparentImage": "Ảnh dường như hoàn toàn trong suốt.",
      "unableToExtract": "Không trích xuất được bảng màu.",
      "areaPercent": "~{n}% diện tích"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 tab trình duyệt",
        "taskbar": "32×32 thanh tác vụ / HiDPI",
        "desktopShortcut": "48×48 lối tắt màn hình",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 màn hình chờ PWA"
      },
      "monogramMode": "Trình tạo huy hiệu chữ lồng",
      "imageMode": "Tải lên ảnh logo",
      "lettersLabel": "Văn bản / chữ cái đầu (1–3 ký tự)",
      "cornerShapeLabel": "Hình dạng góc",
      "roundedSquare": "Hình vuông bo góc",
      "circle": "Hình tròn",
      "sharpSquare": "Hình vuông góc nhọn",
      "square": "Hình vuông",
      "bgColorLabel": "Màu nền",
      "textColorLabel": "Màu chữ",
      "chooseLogo": "Chọn logo PNG, JPG, WebP hoặc SVG",
      "loadedReplace": "Đã tải: {name} (nhấp để thay đổi)",
      "cropMaskLabel": "Mặt nạ cắt",
      "unableToRead": "Không đọc được \"{name}\".",
      "canvasUnavailable": "Canvas 2D không khả dụng.",
      "failedEncode": "Không mã hóa được favicon PNG.",
      "unableToGenerate": "Không tạo được favicon.",
      "icoBundleTitle": "Gói favicon.ico nhiều kích thước (16px + 32px + 48px)",
      "icoBundleBody": "Tệp .ico nhị phân đúng chuẩn, sẵn sàng cho thư mục /public/ ở thư mục gốc của trang web",
      "downloadIco": "Tải xuống favicon.ico",
      "faviconPreviewAlt": "Xem trước favicon 32x32",
      "iconAlt": "Biểu tượng {size}x{size}",
      "htmlTagsLabel": "Thẻ liên kết <head> trong HTML",
      "copyHtml": "Sao chép HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Chọn bất kỳ tệp nào để lấy checksum mật mã",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Tạo hash cục bộ bằng Web Crypto API · không tải tệp lên (khuyến nghị dưới 500 MB)",
      "cryptoUnavailable": "Trình duyệt này không có Web Crypto SubtleCrypto API.",
      "hashFailed": "Không tạo được hash cho tệp trong bộ nhớ trình duyệt (tệp lớn hơn vài trăm MB có thể vượt giới hạn RAM).",
      "computing": "Đang tạo checksum SHA-1, SHA-256, SHA-384 và SHA-512 cục bộ...",
      "fileLabel": "Tệp:",
      "sizeLabel": "Kích thước:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Đã sửa:",
      "bytesSuffix": "{n} byte",
      "downloadSha256": "Tải xuống .sha256",
      "sha256Label": "SHA-256 (khuyến nghị)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (chỉ để tương thích cũ)",
      "verifyLabel": "Kiểm tra với checksum mong đợi",
      "expectedPlaceholder": "Dán checksum SHA-256, SHA-512, SHA-384 hoặc SHA-1 đã công bố (hoặc dòng .sha256sum)...",
      "verified": "Checksum đã xác minh! Tệp khớp chính xác với digest {algorithm} mong đợi.",
      "mismatch": "Checksum không khớp! Không có digest nào đã trích xuất khớp với giá trị mong đợi của bạn."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Chọn ảnh để nén (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Xử lý cục bộ bằng HTML5 Canvas · không bao giờ tải lên máy chủ từ xa",
      "uploadImageError": "Vui lòng tải lên tệp ảnh PNG, JPG, WebP hoặc GIF.",
      "fileTooLarge": "Tệp quá lớn — giới hạn 20 MB mỗi tệp. Vui lòng chọn ảnh nhỏ hơn.",
      "unableToDecode": "Không giải mã được \"{name}\".",
      "canvasUnavailable": "Canvas 2D không khả dụng.",
      "compressionFailed": "Nén trên canvas trình duyệt thất bại.",
      "unableToCompress": "Không nén được ảnh.",
      "unableToRead": "Không đọc được \"{name}\".",
      "invalidImage": "Tệp ảnh không hợp lệ.",
      "outputFormatLabel": "Định dạng đầu ra",
      "webpOption": "WebP (kích thước hiện đại nhỏ nhất cho web)",
      "jpgOption": "JPG (tương thích rộng nhất)",
      "pngOption": "PNG (trong suốt không mất dữ liệu)",
      "maxWidthLabel": "Giới hạn chiều rộng tối đa",
      "keepOriginalWidth": "Giữ chiều rộng gốc",
      "max1920": "Tối đa 1920 px (Full HD)",
      "max1280": "Tối đa 1280 px (blog / hero)",
      "max800": "Tối đa 800 px (ảnh thu nhỏ)",
      "qualityLabel": "Chất lượng: ",
      "losslessPng": "PNG không mất dữ liệu",
      "originalLabel": "Gốc",
      "compressedLabel": "Đã nén",
      "changeLabel": "Thay đổi",
      "outputSummary": "Đầu ra: {w} × {h} px · {ext}",
      "compressing": "Đang nén...",
      "downloadExt": "Tải xuống .{ext}",
      "previewAlt": "Xem trước ảnh đã nén"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Chọn một hoặc nhiều ảnh để chuyển đổi",
      "imagesLoaded": "Đã tải {n} ảnh — nhấp để thêm hoặc thay đổi",
      "batchNote": "Chuyển đổi hàng loạt PNG, JPG, WebP, SVG hoặc GIF sang PNG, JPG hoặc WebP ngay trên máy",
      "convertToLabel": "Chuyển sang định dạng",
      "pngOption": "PNG (.png — giữ độ trong suốt)",
      "qualityLabel": "Chất lượng có mất dữ liệu: ",
      "lossless": "Không mất dữ liệu",
      "alphaFillLabel": "Lấp alpha",
      "converting": "Đang chuyển đổi...",
      "reconvert": "Chuyển đổi lại",
      "selectFilesError": "Chọn một hoặc nhiều tệp ảnh (PNG, JPG, WebP, SVG, GIF).",
      "filesTooLarge": "Đã bỏ qua {names} — tệp lớn hơn giới hạn 25 MB mỗi tệp sẽ không được chuyển đổi.",
      "couldNotDecode": "Không giải mã được \"{name}\".",
      "canvasUnavailable": "Canvas 2D không khả dụng.",
      "conversionFailed": "Chuyển đổi \"{name}\" thất bại.",
      "batchFailed": "Chuyển đổi ảnh hàng loạt thất bại.",
      "downloadExt": "Tải xuống .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Chọn ảnh để đổi kích thước hoặc cắt theo kích thước có sẵn",
      "fileWithDims": "{name} (gốc: {w} × {h} px)",
      "supportsNote": "Hỗ trợ đổi kích thước theo pixel, khóa tỷ lệ khung hình và cắt giữa với preset mạng xã hội",
      "selectImageError": "Chọn ảnh PNG, JPG, WebP hoặc GIF.",
      "unableToDecode": "Không giải mã được \"{name}\".",
      "unableToRead": "Không đọc được ảnh.",
      "failedLoading": "Không tải được ảnh để đổi kích thước.",
      "canvasUnavailable": "Canvas 2D không khả dụng.",
      "failedGenerating": "Không tạo được ảnh đã đổi kích thước.",
      "resizeFailed": "Đổi kích thước thất bại.",
      "quickPresets": "Preset nhanh:",
      "presetOg": "Chia sẻ OG (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Hình vuông (1080×1080)",
      "presetAvatar": "Ảnh đại diện (512×512)",
      "widthLabel": "Chiều rộng (px)",
      "heightLabel": "Chiều cao (px)",
      "fitModeLabel": "Chế độ vừa tỷ lệ khung hình",
      "coverCropOption": "Cắt phủ từ giữa (không kéo giãn)",
      "exactOption": "Co giãn theo kích thước chính xác",
      "outputFormatLabel": "Định dạng đầu ra",
      "lockAspect": "Khóa tỷ lệ khung hình gốc khi nhập kích thước",
      "resizeButton": "Đổi kích thước thành {w} × {h} px",
      "readySummary": "Sẵn sàng: {w} × {h} px ({ext})",
      "downloadResized": "Tải xuống .{ext} đã đổi kích thước",
      "previewAlt": "Đầu ra của ảnh đã đổi kích thước"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Chọn ảnh để xoay, lật hoặc áp dụng bộ lọc",
      "loadedReplace": "{name} (nhấp để thay đổi)",
      "previewNote": "Xem trước Canvas HTML5 theo thời gian thực và xuất pixel",
      "selectImageError": "Vui lòng chọn ảnh PNG, JPG, WebP hoặc GIF.",
      "failedLoading": "Không tải được \"{name}\".",
      "rotateLeft": "Xoay 90° sang trái",
      "rotateRight": "Xoay 90° sang phải",
      "flipHorizontal": "Lật ngang",
      "flipVertical": "Lật dọc",
      "brightnessLabel": "Độ sáng: ",
      "contrastLabel": "Độ tương phản: ",
      "grayscaleLabel": "Đen trắng (grayscale)",
      "resetAll": "Đặt lại tất cả",
      "exportFormatLabel": "Định dạng xuất",
      "livePreview": "Xem trước Canvas trực tiếp"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Ảnh → Data URI Base64",
      "decodeMode": "Base64 → Xem trước ảnh",
      "selectImageError": "Chọn tệp ảnh (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "Không đọc được \"{name}\".",
      "chooseImage": "Chọn tệp ảnh để mã hóa",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Tạo Data URI, Base64 thô, đoạn mã <img> HTML và nền CSS",
      "binarySizeLabel": "Kích thước tệp nhị phân",
      "base64SizeLabel": "Kích thước URI Base64 (lớn hơn ~33%)",
      "fullDataUriLabel": "Data URI đầy đủ",
      "copyDataUri": "Sao chép Data URI",
      "copyRawBase64": "Sao chép Base64 thô",
      "copyImg": "Sao chép <img>",
      "copyCss": "Sao chép CSS",
      "encodedAria": "Data URI Base64 đã mã hóa",
      "encodedAlt": "Xem trước đã mã hóa",
      "pasteLabel": "Dán chuỗi ảnh Base64 hoặc Data URI",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... hoặc chuỗi base64 thô",
      "invalidPayload": "Văn bản Base64 đã dán không phải payload ảnh đã mã hóa hợp lệ.",
      "decodedAlt": "Xem trước Base64 đã giải mã",
      "downloadExt": "Tải xuống .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Rất mạnh",
        "strong": "Mạnh",
        "moderate": "Trung bình",
        "weak": "Yếu"
      },
      "randomPasswordMode": "Mật khẩu ngẫu nhiên",
      "passphraseMode": "Cụm mật khẩu Diceware",
      "regenerate": "Tạo lại",
      "passwordLengthLabel": "Độ dài mật khẩu: ",
      "charsSuffix": " ký tự",
      "batchCountLabel": "Số lượng hàng loạt: ",
      "uppercaseLabel": "Chữ hoa (A–Z)",
      "lowercaseLabel": "Chữ thường (a–z)",
      "numbersLabel": "Số (0–9)",
      "symbolsLabel": "Ký hiệu (!@#$%...)",
      "excludeAmbiguousLabel": "Loại bỏ ký tự dễ nhầm (0, O, 1, l, I)",
      "wordCountLabel": "Số từ: ",
      "wordSeparatorLabel": "Ký tự phân cách từ",
      "hyphenOption": "Dấu gạch ngang (-)",
      "underscoreOption": "Dấu gạch dưới (_)",
      "periodOption": "Dấu chấm (.)",
      "spaceOption": "Khoảng trắng ( )",
      "capitalizeWordsLabel": "Viết hoa chữ cái đầu của từ",
      "appendDigitLabel": "Thêm số có 2 chữ số",
      "selectGroupWarning": "Chọn ít nhất một nhóm ký tự để tạo mật khẩu.",
      "entropyBits": "~{n} bit entropy",
      "poolSizeSuffix": " · kích thước pool {n}",
      "wordListSuffix": " · danh sách {n} từ",
      "copyAll": "Sao chép tất cả"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL trang web",
        "text": "Văn bản",
        "wifi": "Cấu hình Wi-Fi",
        "vcard": "Danh thiếp vCard",
        "email": "Địa chỉ email",
        "phone": "Số điện thoại",
        "plainText": "Văn bản thuần"
      },
      "liveCameraCapture": "Quét bằng camera trực tiếp",
      "scanMode": "Quét / giải mã ảnh QR",
      "vcardMode": "Trình tạo QR danh thiếp vCard",
      "uploadQr": "Tải lên ảnh mã QR",
      "uploadQrNote": "Ảnh chụp màn hình PNG, JPG, WebP hoặc SVG · 100% phía client",
      "liveCameraTitle": "Quét bằng camera thiết bị trực tiếp",
      "liveCameraNote": "Chỉ dùng nguồn camera cục bộ khi được cấp quyền",
      "startCamera": "Bắt đầu quét bằng camera",
      "stopCamera": "Dừng camera",
      "cameraHint": "Hướng camera về phía mã QR — quá trình quét sẽ tự dừng ngay khi giải mã xong.",
      "uploadImageError": "Vui lòng tải lên ảnh PNG, JPG, WebP hoặc SVG có mã QR.",
      "unableToLoad": "Không tải được \"{name}\".",
      "noQrDetected": "Không tìm thấy mã QR trong ảnh này. Giữ tiêu điểm rõ nét, giữ vùng yên tĩnh (quiet-zone) sạch và độ tương phản cao.",
      "unableToScan": "Không quét được ảnh.",
      "cameraUnsupported": "Trình duyệt này không hỗ trợ quét bằng camera.",
      "cameraDenied": "Không được cấp quyền camera hoặc không có thiết bị camera. Hãy tải lên ảnh mã QR thay thế.",
      "decodedPayload": "Payload đã giải mã · {kind}",
      "sourceLabel": "Nguồn: ",
      "copyPayload": "Sao chép payload",
      "decodedAria": "Văn bản QR đã giải mã",
      "detectedLink": "Đã phát hiện liên kết web: ",
      "uploadedPreviewAlt": "Xem trước mã QR đã tải lên",
      "firstNameLabel": "Tên",
      "lastNameLabel": "Họ",
      "orgLabel": "Tổ chức",
      "jobTitleLabel": "Chức danh",
      "defaultJobTitle": "Nhà thiết kế sản phẩm",
      "phoneLabel": "Số điện thoại",
      "emailLabel": "Địa chỉ email",
      "websiteLabel": "URL trang web",
      "rawVcardLabel": "Payload vCard 3.0 thô",
      "copyVcard": "Sao chép vCard",
      "vcardQrAlt": "Mã QR vCard đã tạo",
      "downloadPng": "Tải xuống PNG",
      "downloadSvg": "Tải xuống SVG"
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Thẻ Canonical và Hreflang",
      "redirectsMode": "Trình tạo quy tắc chuyển hướng 301",
      "canonicalLabel": "URL Canonical tự tham chiếu",
      "alternatesLabel": "Các phiên bản ngôn ngữ và khu vực",
      "addLocale": "Thêm ngôn ngữ",
      "langCodeAria": "Mã ngôn ngữ",
      "alternateUrlAria": "URL thay thế",
      "removeLocaleAria": "Xóa dòng ngôn ngữ",
      "htmlTagsLabel": "Thẻ liên kết <head> trong HTML",
      "copyHtml": "Sao chép HTML",
      "xmlSnippetLabel": "Đoạn <xhtml:link> trong sitemap XML",
      "copyXml": "Sao chép XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (server block)",
      "copyRules": "Sao chép {n} quy tắc",
      "pairsLabel": "Cặp nguồn → đích (phân cách bằng dấu phẩy, tab hoặc “ -> ”)",
      "generatedConfigLabel": "Cấu hình chuyển hướng 301 đã tạo",
      "skippedInvalid": "Đã bỏ qua {n} dòng — không tìm thấy đích.",
      "invalidHreflangWarning": "Đã bỏ qua mã hreflang không hợp lệ: {codes} — dùng mã ngôn ngữ 2 ký tự (ví dụ en, es), rồi thêm khu vực nếu muốn (ví dụ en-US), hoặc x-default."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "SEO kỹ thuật bắt đầu từ URL rõ ràng, có thể thu thập được, thẻ canonical chính xác và sitemap XML có cấu trúc. Khi nhà xuất bản viết nội dung hữu ích tập trung vào ý định của người dùng thay vì nhồi nhét từ khóa, công cụ tìm kiếm sẽ tự hiểu được chiều sâu chủ đề. Hãy kiểm tra tiêu đề, mô tả meta và liên kết nội bộ thường xuyên.",
      "defaultTargetKeyword": "technical seo",
      "guidanceTitle": "Hướng dẫn biên tập:",
      "guidanceBody": "Công cụ tìm kiếm hiện đại không thưởng cho việc đạt một chỉ tiêu mật độ từ khóa cố định. Hãy dùng bản kiểm tra phân bố này để phát hiện sự lặp lại vô tình hoặc xác nhận rằng các khái niệm chính hiện rõ trong văn bản của bạn.",
      "targetLabel": "Từ khóa / cụm từ mục tiêu (tùy chọn)",
      "targetPlaceholder": "Ví dụ technical seo",
      "phraseLengthLabel": "Độ dài cụm từ",
      "oneWord": "1 từ",
      "twoWord": "Cụm 2 từ",
      "threeWord": "Cụm 3 từ",
      "stripHtml": "Loại bỏ thẻ HTML",
      "ignoreStopWords": "Bỏ qua từ dừng",
      "textLabel": "Bản nháp bài viết hoặc bản sao HTML đã dán",
      "totalWords": "Tổng số từ",
      "uniqueVocabulary": "Từ vựng duy nhất",
      "readingTime": "Thời gian đọc ước tính",
      "targetPrefix": "Mục tiêu: ",
      "hits": "{n} lần ({d}%)",
      "rankHeader": "Hạng",
      "termHeader": "Từ / N-gram",
      "occurrencesHeader": "Số lần",
      "shareHeader": "Tỷ lệ (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Công cụ online nhanh chạy trong trình duyệt",
      "defaultDescription": "Khám phá 84 công cụ trình duyệt nhanh, đặt quyền riêng tư lên hàng đầu cho chỉnh sửa văn bản, mã hóa lập trình, máy tính tài chính, quy trình PDF và SEO.",
      "pageTitleLabel": "Tiêu đề trang (<title> / og:title)",
      "titleChars": "{n} ký tự (lý tưởng 30–60)",
      "metaDescriptionLabel": "Mô tả meta",
      "descChars": "{n} ký tự (lý tưởng 120–160)",
      "canonicalUrlLabel": "URL Canonical",
      "ogImageLabel": "URL ảnh Open Graph (khuyến nghị 1200×630)",
      "siteNameLabel": "Tên trang web (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Thẻ Twitter",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Chỉ thị follow của robots",
      "includeViewportLabel": "Bao gồm thẻ charset và viewport",
      "generatedTagsLabel": "Thẻ <head> HTML đã tạo",
      "copyHtml": "Sao chép HTML",
      "downloadHtml": "Tải xuống .html",
      "socialPreviewLabel": "Xem trước thẻ chia sẻ mạng xã hội",
      "socialPreviewFallback": "Xem trước chia sẻ mạng xã hội",
      "untitledPage": "Trang chưa có tiêu đề",
      "metaSnippetFallback": "Đoạn trích mô tả meta sẽ hiện ở đây."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Kiểm tra nguồn HTML phía client:",
      "auditBody": "Trình duyệt ngăn việc thu thập dữ liệu cross-origin (CORS) từ bất kỳ trang web bên thứ ba nào và không có quyền truy cập vào dữ liệu phân tích tìm kiếm riêng tư. Hãy dán nguồn HTML của trang (View Page Source) vào bên dưới và kiểm tra các thẻ DOM ngay trên máy.",
      "pastedHtmlLabel": "Nguồn HTML đã dán",
      "loadSampleHtml": "Tải HTML mẫu",
      "htmlPlaceholder": "Dán nguồn <html>...</html> thô vào đây...",
      "scoreLabel": "Điểm kiểm tra DOM",
      "checksPassed": "{passed} / {total} kiểm tra đã đạt",
      "linksSummary": "Liên kết: {total} ({internal} nội bộ / {external} bên ngoài)",
      "robotsMetaLabel": "Robots meta: ",
      "robotsDefault": "Mặc định (index, follow)",
      "headingOutline": "Dàn ý tiêu đề (H1–H4)",
      "emptyState": "Dán nguồn HTML ở bên trái để xem tiêu đề, mô tả, tiêu đề đề mục, canonical và thẻ alt.",
      "checkTitle": "Thẻ tiêu đề (<title>)",
      "checkMetaDesc": "Mô tả meta",
      "checkH1": "Đúng một tiêu đề <h1>",
      "checkCanonical": "URL Canonical (<link rel=\"canonical\">)",
      "checkAlt": "Thuộc tính Alt của ảnh",
      "checkOgJsonLd": "Dữ liệu có cấu trúc Open Graph và JSON-LD",
      "titleDetail": "{n} ký tự: \"{title}\"",
      "titleMissing": "Không tìm thấy thẻ <title> trong <head>.",
      "descDetail": "{n} ký tự (mục tiêu 120–160).",
      "descMissing": "Không tìm thấy <meta name=\"description\">.",
      "h1Detail": "Đã tìm thấy {n} phần tử <h1>.",
      "canonicalMissing": "Chưa khai báo thẻ canonical nào.",
      "noImages": "Không có phần tử <img> nào trong mã đánh dấu.",
      "altDetail": "{with}/{total} ảnh có văn bản alt mô tả.",
      "ogDetail": "og:title {presence} · {n} khối JSON-LD.",
      "present": "Có",
      "missing": "Không có"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Chỉ thị lập chỉ mục",
      "indexOption": "index (cho phép lập chỉ mục tìm kiếm)",
      "noindexOption": "noindex (loại khỏi SERP)",
      "linkCrawlingLabel": "Thu thập liên kết",
      "followOption": "follow (truyền tín hiệu liên kết)",
      "nofollowOption": "nofollow (không theo liên kết)",
      "largeOption": "large (tìm kiếm đủ điều kiện)",
      "htmlTagLabel": "Thẻ meta <head> trong HTML",
      "copyHtmlTag": "Sao chép thẻ HTML",
      "httpHeaderLabel": "Header phản hồi HTTP (PDF / không phải HTML)",
      "copyHeader": "Sao chép header",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Mẫu đường dẫn Cloudflare _headers",
      "copyBlock": "Sao chép khối"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Mẫu khởi đầu:",
      "allowAll": "Cho phép mọi trình thu thập",
      "standardWebApp": "Web app / SaaS chuẩn",
      "wordpressClean": "WordPress gọn gàng",
      "stagingBlockAll": "Môi trường staging (chặn tất cả)",
      "crawlerRules": "Quy tắc đường dẫn cho trình thu thập",
      "addRule": "Thêm quy tắc",
      "directiveAria": "Chỉ thị",
      "pathAria": "Đường dẫn",
      "deleteRuleAria": "Xóa quy tắc",
      "crawlDelayLabel": "Crawl-delay (giây, tùy chọn)",
      "crawlDelayPlaceholder": "Không có",
      "sitemapUrlsLabel": "URL sitemap (mỗi dòng một URL)",
      "generatedLabel": "robots.txt đã tạo",
      "invalidSitemapWarning": "Đã bỏ qua URL sitemap không hợp lệ: {urls} — các dòng sitemap phải là URL http(s) đầy đủ."
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Cách tạo tiện ích trình duyệt nhanh",
      "defaultFaqQ1": "UtilityFlow có chạy công cụ trong trình duyệt cục bộ không?",
      "defaultFaqA1": "Có. Hầu hết mọi tiện ích đều chạy trực tiếp trong bộ nhớ trình duyệt — dữ liệu nhập vào không được gửi đến máy chủ bên ngoài.",
      "defaultFaqQ2": "JSON-LD có cấu trúc có giúp SEO không?",
      "defaultFaqA2": "Có. JSON-LD Schema.org hợp lệ làm rõ ngữ cảnh thực thể cho trình thu thập dữ liệu tìm kiếm và tăng khả năng đủ điều kiện cho kết quả nhiều định dạng.",
      "defaultProductName": "Bàn phím cơ công thái học Pro",
      "defaultProductDesc": "Bàn phím không dây profile thấp được thiết kế cho lập trình viên.",
      "defaultCrumbHome": "Trang chủ",
      "defaultCrumbSeo": "Công cụ SEO",
      "defaultCrumbSchema": "Trình tạo Schema Markup",
      "headlineLabel": "Tiêu đề",
      "authorNameLabel": "Tên tác giả",
      "publisherNameLabel": "Tên nhà xuất bản",
      "datePublishedLabel": "Ngày xuất bản",
      "articleUrlLabel": "URL bài viết",
      "featuredImageLabel": "URL ảnh nổi bật",
      "questionLabel": "Câu hỏi #{n}",
      "removeQuestionAria": "Xóa câu hỏi {n}",
      "questionPlaceholder": "Câu hỏi",
      "acceptedAnswerPlaceholder": "Câu trả lời được chấp nhận",
      "addFaqRow": "Thêm dòng FAQ",
      "productNameLabel": "Tên sản phẩm",
      "descriptionLabel": "Mô tả",
      "priceLabel": "Giá",
      "currencyLabel": "Tiền tệ",
      "availabilityLabel": "Tình trạng còn hàng",
      "orgNameLabel": "Tên tổ chức",
      "websiteUrlLabel": "URL trang web",
      "logoUrlLabel": "URL logo",
      "breadcrumbLabelAria": "Nhãn breadcrumb {n}",
      "breadcrumbUrlAria": "URL breadcrumb {n}",
      "labelPlaceholder": "Nhãn",
      "addLevel": "Thêm cấp",
      "jsonLdOutputLabel": "Đầu ra <script> JSON-LD",
      "copyScriptTag": "Sao chép thẻ script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Đếm từ – Đếm từ và ký tự | UtilityFlow",
      "defaultDescription": "Định dạng, kiểm tra, thu gọn và sắp xếp key cho payload JSON ngay trong trình duyệt — kèm chi tiết lỗi cú pháp theo dòng/cột.",
      "desktopSerp": "SERP máy tính (~580px tiêu đề)",
      "mobileSerp": "SERP di động (~120 ký tự mô tả)",
      "copyTitleMeta": "Sao chép tiêu đề và meta",
      "seoTitleLabel": "Tiêu đề SEO",
      "titleMetrics": "{chars} ký tự · ~{px} px / tối đa 580 px",
      "metaDescriptionLabel": "Mô tả meta",
      "descMetrics": "{chars} ký tự · ~{px} px",
      "pageUrlLabel": "URL trang (để xem trước breadcrumb)",
      "siteNameLabel": "Tên trang web",
      "boldKeywordLabel": "Từ khóa in đậm",
      "optionalPlaceholder": "Tùy chọn",
      "datePrefixLabel": "Tiền tố ngày",
      "datePlaceholder": "Ví dụ Nov 12, 2025",
      "desktopSimulation": "Mô phỏng đoạn trích tìm kiếm trên máy tính",
      "mobileSimulation": "Mô phỏng đoạn trích tìm kiếm trên di động",
      "titleFallback": "Tiêu đề SEO của bạn sẽ hiện ở đây",
      "descFallback": "Bản xem trước mô tả meta của bạn sẽ hiện ở đây."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Cách tạo slug URL rõ ràng cho SEO kỹ thuật!\n10 công cụ Café và năng suất tốt nhất năm 2026\nChecklist đầy đủ về Sitemap XML và Robots.txt",
      "domainLabel": "Tên miền cơ sở / thư mục con (để xem trước URL đầy đủ)",
      "separatorLabel": "Ký tự phân cách từ",
      "hyphenOption": "Dấu gạch ngang (-) — Google khuyến nghị",
      "underscoreOption": "Dấu gạch dưới (_)",
      "maxLengthLabel": "Độ dài slug tối đa ({n} ký tự)",
      "stripStopWords": "Loại bỏ từ dừng tiếng Anh tùy chọn (a, the, and, of, in, to)",
      "trailingSlash": "Bao gồm dấu gạch chéo cuối (/)",
      "titlesLabel": "Tiêu đề / headline của trang (mỗi dòng một tiêu đề để tạo hàng loạt)",
      "generatedLabel": "Slug SEO đã tạo ({n})",
      "copyAllSlugs": "Sao chép tất cả slug",
      "copyAllUrls": "Sao chép tất cả URL đầy đủ",
      "originalTitleHeader": "Tiêu đề gốc",
      "slugUrlHeader": "Slug SEO và URL đầy đủ",
      "copyHeader": "Sao chép"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Ngày <lastmod> (tùy chọn)",
      "changefreqLabel": "Gợi ý <changefreq>",
      "priorityLabel": "<priority> mặc định",
      "omitTag": "Bỏ qua thẻ",
      "deduplicateLabel": "Xóa URL trùng lặp hoàn toàn",
      "urlsLabel": "URL Canonical (mỗi dòng một URL https:// đầy đủ)",
      "skippedInvalid": "Đã bỏ qua {n} dòng URL không hợp lệ: ",
      "generatedLabel": "sitemap.xml đã tạo ({n} URL)",
      "copyXml": "Sao chép XML",
      "downloadXml": "Tải xuống .xml",
      "generatedAria": "Sitemap XML đã tạo"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Đang tạo công cụ trình duyệt nhanh cho nhà sáng tạo và đội nhóm.   \n\nMỗi thứ Ba có quy trình làm việc mới hằng tuần.\n\nThử tiện ích miễn phí tại liên kết bên dưới!",
      "modeBraille": "Khoảng trắng vô hình (⠀ U+2800)",
      "modeDot": "Khoảng trắng dấu chấm tối thiểu (.)",
      "modeClean": "Chỉ dọn khoảng trắng thừa ở cuối dòng",
      "collapse": "Xóa khoảng trắng đôi do vô tình",
      "labelRaw": "Bản nháp chú thích hoặc tiểu sử",
      "phRaw": "Viết chú thích của bạn — để trống một dòng ở nơi cần ngắt đoạn...",
      "tip": "Mẹo: nếu dòng trên có khoảng trắng thừa ở cuối, ứng dụng mạng xã hội thường xóa đoạn trống.",
      "labelOut": "Đầu ra sẵn sàng để dán",
      "copyFormatted": "Sao chép chú thích đã định dạng",
      "charsLabel": "Ký tự:",
      "linesLabel": "Dòng:",
      "blankLabel": "Số lần ngắt trống còn lại:",
      "fitsBio": "Vừa với tiểu sử Instagram 150 ký tự",
      "captionLength": "Độ dài chú thích (vượt giới hạn 150 ký tự của tiểu sử)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Vấn đề → Khuấy động → Giải pháp (PAS)",
        "tutorial": "Mô tả hành động 3 bước",
        "bab": "Trước → Sau → Cầu nối",
        "checklist": "Checklist ra mắt / kiểm tra",
        "myth": "Hiểu lầm thường gặp và thực tế"
      },
      "frameworkDescriptions": {
        "pas": "Nêu rõ nỗi đau cụ thể trước khi đưa ra giải pháp quy trình làm việc.",
        "tutorial": "Cấu trúc hướng dẫn đánh số, phù hợp cho carousel LinkedIn và nội dung lưu lại.",
        "bab": "So sánh điểm nghẽn cũ với kết quả gọn gàng hơn.",
        "checklist": "Danh sách kiểm tra rõ ràng, đáng lưu lại.",
        "myth": "Thách thức lời khuyên lỗi thời bằng các lựa chọn thay thế trực tiếp, ngắn gọn."
      },
      "frameworkLabels": {
        "fixesHeading": "Thực sự khắc phục điều gì:",
        "beforeLabel": "Trước: ",
        "afterLabel": "Sau: ",
        "bridgeHeading": "Cầu nối:",
        "mythLabel": "Hiểu lầm thường gặp: ",
        "worksHeading": "Điều gì hiệu quả trong thực tế:"
      },
      "sampleHook": "Ngừng lãng phí hàng giờ để định dạng liên kết chiến dịch bằng tay.",
      "sampleContext": "Tham số UTM không nhất quán và khoảng cách tiểu sử bị lỗi âm thầm làm hỏng báo cáo phân tích.",
      "samplePoints": "Giữ thẻ utm_source và utm_medium chữ thường nhất quán\nKiểm tra điểm gập ký tự trước khi đăng\nGiữ ngắt đoạn gọn gàng, không có khoảng trắng thừa ở cuối",
      "sampleCta": "Lưu checklist này cho lần ra mắt sản phẩm tiếp theo của bạn.",
      "infoTitle": "Kết hợp mẫu xác định:",
      "infoBody": "Công cụ này dùng khung viết quảng cáo có cấu trúc ngay trong trình duyệt của bạn — không dùng mô hình AI hay API bên ngoài, và cũng không tuyên bố như vậy.",
      "labelHook": "Câu mở đầu (1–2 dòng đầu)",
      "labelContext": "Bối cảnh / nêu vấn đề",
      "labelPoints": "Ý chính (mỗi dòng một ý)",
      "labelCta": "Lời kêu gọi hành động (CTA)",
      "labelTags": "Hashtag",
      "previewTitle": "Xem trước chú thích đã định dạng",
      "copyCaption": "Sao chép chú thích",
      "charsLabel": "Ký tự:",
      "wordsLabel": "Từ:",
      "fits": "Vừa",
      "threadNeeded": "Cần chuỗi bài",
      "tooLong": "Quá dài"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Kiểu định dạng và khả năng tiếp cận",
      "optCamel": "PascalCase (#CamelCase — thân thiện với trình đọc màn hình)",
      "optLower": "Tất cả chữ thường (#lowercase)",
      "optPreserve": "Giữ nguyên chữ hoa/thường gốc",
      "outLabel": "Bố cục đầu ra",
      "optInline": "Một dòng (cách nhau bằng khoảng trắng)",
      "optNewline": "Mỗi dòng một hashtag",
      "optDots": "Dấu phân cách gập chú thích (.\n.\n.)",
      "dedupe": "Xóa hashtag trùng lặp",
      "labelRaw": "Từ khóa hoặc hashtag lộn xộn (cách nhau bằng dấu phẩy, khoảng trắng hoặc dòng)",
      "labelResult": "Nhóm hashtag đã làm sạch",
      "copyHashtags": "Sao chép hashtag",
      "statClean": "Hashtag đã làm sạch",
      "statDupes": "Trùng lặp đã xóa",
      "statIgMax": "Tối đa Instagram (30)",
      "statWithin": "Trong giới hạn 30 của IG",
      "statExceeds": "Vượt giới hạn 30 thẻ",
      "statChars": "Ký tự đầu ra"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 ký tự · chữ cái, số, dấu gạch dưới",
        "instagram": "1–30 ký tự · chữ cái, số, dấu chấm, dấu gạch dưới",
        "tiktok": "2–24 ký tự · chữ cái, số, dấu gạch dưới, dấu chấm",
        "youtube": "3–30 ký tự · chữ cái, số, _, -, .",
        "threads": "1–30 ký tự · dùng chung không gian tên với Instagram",
        "github": "1–39 ký tự · chữ và số cùng dấu gạch ngang đơn"
      },
      "infoTitle": "Kiểm tra quy tắc và liên kết kiểm tra trực tiếp:",
      "infoBodyBefore": "Kiểm tra ngoại tuyến cú pháp handle và giới hạn ký tự mà không đoán mò tình trạng khả dụng. Nhấp vào liên kết",
      "infoEm": "Mở URL hồ sơ",
      "infoBodyAfter": "của bất kỳ nền tảng nào để kiểm tra trực tiếp trạng thái đăng ký.",
      "labelBrand": "Tên thương hiệu, dự án hoặc nhà sáng tạo",
      "phBrand": "Ví dụ Utility Hub",
      "labelActive": "Handle đang kiểm tra",
      "copyAt": "Sao chép @",
      "variationsTitle": "Các biến thể handle tương thích:",
      "thPlatform": "Nền tảng",
      "thRules": "Quy tắc định dạng",
      "thStatus": "Trạng thái cú pháp",
      "thCheck": "Kiểm tra thủ công",
      "valid": "Định dạng hợp lệ",
      "invalid": "Cú pháp/độ dài không hợp lệ",
      "checkUrl": "Kiểm tra URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Đậm (Sans-Serif)",
        "sans-italic": "Nghiêng (Sans-Serif)",
        "sans-bold-italic": "Đậm nghiêng (Sans-Serif)",
        "serif-bold": "Đậm (Serif)",
        "monospace": "Monospace",
        "double-struck": "Double-struck (bảng đen)",
        "script-bold": "Script đậm",
        "fraktur-bold": "Fraktur đậm",
        "small-caps": "Chữ hoa nhỏ",
        "fullwidth": "Thẩm mỹ fullwidth"
      },
      "styleNotes": {
        "sans-bold": "Dễ đọc, rõ ràng cho tiêu đề tiểu sử và câu mở đầu bài đăng",
        "sans-italic": "Nhấn nhẹ trong chú thích",
        "sans-bold-italic": "Lời kêu gọi mạnh mẽ và dải phân cách phần",
        "serif-bold": "Nhấn mạnh theo phong cách biên tập",
        "monospace": "Handle mã, ngày tháng và thẻ kỹ thuật",
        "double-struck": "Chữ trưng bày",
        "script-bold": "Chữ ký tiểu sử trang trí",
        "fraktur-bold": "Chữ trưng bày kiểu Gothic",
        "small-caps": "Nhãn hồ sơ gọn gàng kiểu chữ hoa",
        "fullwidth": "Tiêu đề mạng xã hội retro với khoảng cách rộng"
      },
      "sampleText": "Bộ công cụ mới cho nhà sáng tạo 2025",
      "accessibilityTitle": "Lưu ý về khả năng tiếp cận:",
      "accessibilityBody": "Ký tự Unicode có kiểu dáng đến từ khối ký hiệu toán học, nên trình đọc màn hình có thể đọc từng ký tự một hoặc bỏ qua chúng, và một số công cụ lập chỉ mục tìm kiếm sẽ bỏ qua chúng. Hãy dùng tiết kiệm cho các điểm nhấn ngắn thay vì cả đoạn văn.",
      "labelInput": "Văn bản cần tạo kiểu",
      "placeholder": "Viết tiêu đề ngắn, dòng tiểu sử hoặc CTA...",
      "previewEmpty": "Xem trước"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Tiểu sử Instagram",
        "linkedinPost": "Bài đăng LinkedIn",
        "newsletter": "Bản tin email",
        "youtubeDescription": "Mô tả YouTube"
      },
      "presetsLabel": "Preset kênh nhanh:",
      "errorEmpty": "Nhập URL trang web đích.",
      "errorInvalid": "Nhập URL đích hợp lệ (ví dụ https://example.com/landing).",
      "labelUrl": "URL trang web đích *",
      "labelSource": "Nguồn chiến dịch (utm_source) *",
      "phSource": "Ví dụ instagram, newsletter, google",
      "labelMedium": "Phương tiện chiến dịch (utm_medium) *",
      "phMedium": "Ví dụ social, cpc, email, video",
      "labelCampaign": "Tên chiến dịch (utm_campaign)",
      "phCampaign": "Ví dụ spring_launch",
      "labelContent": "Nội dung chiến dịch (utm_content)",
      "phContent": "Ví dụ hero_banner, bio_button",
      "labelTerm": "Từ chiến dịch (utm_term)",
      "phTerm": "Từ khóa trả phí hoặc thẻ đối tượng tùy chọn",
      "normalizeLabel": "Ép thành chữ thường và đổi khoảng trắng thành dấu gạch dưới (`_`)",
      "generatedTitle": "URL chiến dịch đã tạo",
      "copyUtm": "Sao chép URL UTM",
      "thParam": "Tham số truy vấn",
      "thValue": "Giá trị đã chuẩn hóa"
    }
  },
  "add-pdf-page-numbers": {
    "strings": {
      "errStart": "Số trang bắt đầu phải là số nguyên bằng 1 hoặc lớn hơn.",
      "stampedSuccess": (n: number, size: string) => `Đã đánh số trang cho ${n} trang (${size}).`,
      "pageOfLabel": (cur: number, total: number) => `Trang ${cur} / ${total}`,
      "dropTitleEmpty": "Chọn tệp PDF để thêm số trang",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} trang)`,
      "dropSub": "Thêm nhãn trang vector rõ ràng vào báo cáo, hợp đồng và tập tài liệu",
      "labelPos": "Vị trí",
      "optBottomCenter": "Dưới cùng, giữa",
      "optBottomRight": "Dưới cùng, phải",
      "optBottomLeft": "Dưới cùng, trái",
      "optTopRight": "Trên cùng, phải",
      "labelFmt": "Định dạng nhãn",
      "optPageOf": "Trang 1 / N",
      "optSlash": "1 / N",
      "optNumberOnly": "1, 2, 3...",
      "labelStart": "Số bắt đầu",
      "labelSize": "Cỡ chữ (pt)",
      "opt9": "9 pt (nhẹ)",
      "opt11": "11 pt (chuẩn)",
      "opt14": "14 pt (lớn)",
      "skipCover": "Bỏ qua trang bìa (bắt đầu đánh số từ trang 2)",
      "numbering": "Đang đánh số trang...",
      "addBtn": "Thêm số trang và tải xuống"
    }
  },
  "images-to-pdf": {
    "strings": {
      "errDecode": (name: string) => `Không giải mã được ảnh "${name}".`,
      "errCanvas": "Canvas 2D không khả dụng.",
      "errConvert": (name: string) => `Không chuyển được "${name}" sang PNG.`,
      "errNotImage": (name: string) => `"${name}" không phải tệp ảnh được hỗ trợ (PNG, JPG, WebP).`,
      "errRead": (name: string) => `Không đọc được "${name}".`,
      "errLoad": "Không tải được ảnh.",
      "errEmpty": "Hãy thêm ít nhất một ảnh trước.",
      "errBuild": "Không chuyển được ảnh sang PDF.",
      "createdSuccess": (n: number, size: string) => `Đã tạo PDF ${n} trang gọn gàng (${size}).`,
      "dropTitle": "Chọn ảnh PNG, JPG hoặc WebP",
      "dropSub": "Chuyển ảnh chụp màn hình, bản quét hoặc ảnh thành một PDF ngay trên máy",
      "labelSize": "Khổ trang PDF",
      "optA4": "A4 dọc (210 × 297 mm)",
      "optLetter": "US Letter (8,5 × 11 in)",
      "optFit": "Kích thước chính xác của ảnh",
      "labelMargin": "Lề trang",
      "optMargin0": "Không lề (0 pt)",
      "optMargin24": "Lề chuẩn (24 pt)",
      "optMargin48": "Lề rộng (48 pt)",
      "labelOut": "Tên tệp đầu ra",
      "moveUp": (name: string) => `Di chuyển ${name} lên trên`,
      "moveDown": (name: string) => `Di chuyển ${name} xuống dưới`,
      "removeFile": (name: string) => `Xóa ${name}`,
      "building": "Đang tạo PDF...",
      "convertBtn": (n: number) => `Chuyển ${n} ảnh sang PDF`
    }
  },
  "merge-pdf": {
    "strings": {
      "errRead": "Không đọc được các tệp PDF đã chọn.",
      "errMin2": "Thêm ít nhất hai tệp PDF để gộp.",
      "mergedSuccess": (n: number, pages: number, size: string) => `Đã gộp gọn gàng ${n} PDF (${pages} trang, ${size}).`,
      "dropValidating": "Đang kiểm tra các tệp PDF...",
      "dropTitle": "Chọn hoặc thả nhiều tệp PDF",
      "dropSub": "Gộp 100% phía trình duyệt bằng pdf-lib · chỉ PDF không mã hóa · không bao giờ tải lên",
      "filesQueued": "Tệp đang chờ",
      "totalPagesLabel": "Tổng số trang",
      "combinedSize": "Kích thước đầu vào gộp",
      "clearQueue": "Xóa hàng chờ",
      "pageSingular": "trang",
      "pagePlural": "trang",
      "moveUp": (name: string) => `Di chuyển ${name} lên trên`,
      "moveDown": (name: string) => `Di chuyển ${name} xuống dưới`,
      "removeFile": (name: string) => `Xóa ${name}`,
      "outName": "Tên tệp đầu ra",
      "merging": "Đang gộp PDF...",
      "mergeBtn": (n: number) => `Gộp ${n} PDF và tải xuống`
    }
  },
  "pdf-metadata-editor": {
    "strings": {
      "clearedMsg": "Đã xóa các trường metadata có thể thay đổi. Nhấp vào Lưu & Tải xuống PDF để áp dụng.",
      "savedSuccess": (size: string) => `Đã lưu metadata PDF đã cập nhật (${size}).`,
      "dropTitleEmpty": "Chọn tệp PDF để xem hoặc thay đổi metadata",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} trang · ${size})`,
      "dropSub": "Xem thuộc tính tài liệu, xóa thẻ tác giả/phần mềm, hoặc đặt tiêu đề SEO rõ ràng",
      "labelTitle": "Tiêu đề tài liệu",
      "labelAuthor": "Tác giả",
      "labelSubject": "Chủ đề / tóm tắt",
      "labelKeywords": "Từ khóa (cách nhau bằng dấu phẩy)",
      "labelCreator": "Ứng dụng tạo ra",
      "labelProducer": "Trình tạo PDF",
      "saving": "Đang lưu PDF...",
      "saveBtn": "Lưu metadata và tải xuống PDF",
      "stripBtn": "Xóa các trường có thể thay đổi"
    }
  },
  "pdf-page-rotator": {
    "strings": {
      "errNoMatch": "Không có trang nào khớp để xoay.",
      "rotatedSuccess": (a: number, b: number, deg: number, size: string) => `Đã xoay ${a} trên ${b} trang ${deg}° theo chiều kim đồng hồ (${size}).`,
      "dropTitleEmpty": "Chọn tệp PDF để xoay trang",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} trang)`,
      "dropSub": "Xoay tất cả các trang hoặc phạm vi trang đã chọn ngay trên máy, không tải lên máy chủ",
      "labelAngle": "Góc xoay",
      "opt90": "90° theo chiều kim đồng hồ (phải)",
      "opt270": "90° ngược chiều kim đồng hồ (trái / 270°)",
      "opt180": "180° lộn ngược",
      "labelScope": "Áp dụng cho",
      "optAll": (n: number) => `Tất cả các trang (${n})`,
      "optRange": "Phạm vi trang cụ thể",
      "optOdd": "Chỉ trang lẻ",
      "optEven": "Chỉ trang chẵn",
      "labelRangeInput": (n: number) => `Số trang / phạm vi (1–${n})`,
      "phRange": "Ví dụ 1, 3-5",
      "rotating": "Đang xoay trang...",
      "rotateBtn": "Áp dụng xoay và tải xuống PDF"
    }
  },
  "pdf-text-extractor": {
    "strings": {
      "pageMarker": (n: number) => `--- Trang ${n} ---`,
      "dropExtracting": "Đang trích xuất lớp văn bản PDF...",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} trang)`,
      "dropTitleEmpty": "Chọn PDF dựa trên văn bản để trích xuất văn bản",
      "dropSub": "Trích xuất văn bản Unicode nhúng ngay trên máy bằng PDF.js · không tải lên máy chủ",
      "noTextTitle": "Không tìm thấy lớp văn bản có thể chọn:",
      "noTextBody": "PDF này dường như chứa ảnh đã quét hoặc đường vector đã viền, không có lớp văn bản nhúng. Không thực hiện nhận dạng ký tự quang học (OCR) phía client ngoại tuyến.",
      "markersLabelBefore": "Bao gồm tiêu đề đánh dấu trang (",
      "markersCode": "--- Trang N ---",
      "markersLabelAfter": ")",
      "copyText": "Sao chép văn bản",
      "downloadTxt": "Tải xuống .txt",
      "outputAria": "Đầu ra văn bản PDF đã trích xuất",
      "pagesScanned": "Trang đã quét:",
      "wordsExtracted": "Từ đã trích xuất:",
      "textSize": "Kích thước văn bản:"
    }
  },
  "pdf-to-images": {
    "strings": {
      "errBatch": "Hiển thị tối đa 20 trang mỗi lô để giữ bộ nhớ canvas của trình duyệt nhanh và phản hồi tốt.",
      "errCanvas": "Canvas 2D không khả dụng.",
      "dropTitleEmpty": "Chọn PDF để hiển thị dưới dạng ảnh",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} trang · ${size})`,
      "dropSub": "Hiển thị cục bộ bằng canvas PDF.js · đầu ra PNG hoặc JPG",
      "labelRange": "Trang (“all” hoặc phạm vi như 1-4, 6)",
      "labelFormat": "Định dạng ảnh",
      "optPng": "PNG (không mất dữ liệu / văn bản rõ nét)",
      "optJpg": "JPG (nhỏ gọn, tốt cho ảnh)",
      "labelScale": "Độ phân giải hiển thị",
      "optScale1": "1,0× (72 DPI xem trước nhanh)",
      "optScale15": "1,5× (108 DPI chuẩn)",
      "optScale2": "2,0× (144 DPI sắc nét)",
      "rendering": "Đang hiển thị các trang PDF...",
      "renderBtn": "Hiển thị trang PDF thành ảnh",
      "pageAlt": (n: number) => `Xem trước trang ${n}`,
      "pageLabel": (n: number, w: number, h: number) => `Trang ${n} · ${w}×${h}`
    }
  },
  "pdf-watermark": {
    "strings": {
      "colorLabels": {
        "slate": "Xám trung tính",
        "indigo": "Chàm thương hiệu",
        "red": "Đỏ đóng dấu"
      },
      "defaultWatermark": "CONFIDENTIAL",
      "errEmpty": "Nhập văn bản watermark trước khi tạo PDF.",
      "appliedSuccess": (text: string, n: number, size: string) => `Đã đóng dấu watermark "${text}" lên ${n} trang (${size}).`,
      "dropTitleEmpty": "Chọn tệp PDF để đóng dấu watermark",
      "dropTitleFile": (name: string, pages: number) => `${name} (${pages} trang)`,
      "dropSub": "Đóng dấu văn bản vector rõ ràng ngay trên máy bằng pdf-lib",
      "labelText": "Văn bản watermark",
      "phText": "CONFIDENTIAL / DRAFT / INTERNAL USE",
      "labelColor": "Màu dấu",
      "firstPageOnly": "Chỉ trang đầu tiên",
      "labelSize": "Cỡ chữ:",
      "ptSuffix": (n: number) => `${n} pt`,
      "labelOpacity": "Độ mờ đục:",
      "labelAngle": "Góc xoay:",
      "applying": "Đang đóng dấu watermark lên PDF...",
      "applyBtn": "Đóng dấu watermark và tải xuống"
    }
  },
  "reorder-delete-pdf-pages": {
    "strings": {
      "errMin1": "PDF phải còn ít nhất 1 trang.",
      "savedSuccess": (n: number, size: string) => `Đã lưu PDF đã cập nhật với ${n} trang (${size}).`,
      "loading": "Đang tải trang PDF và bản xem trước...",
      "dropTitleFile": (name: string, n: number) => `${name} (${n} trang đang hoạt động)`,
      "dropTitleEmpty": "Chọn tệp PDF để sắp xếp lại hoặc xóa trang",
      "dropSub": "Di chuyển trang, nhân đôi trang hoặc xóa trang không mong muốn ngay trên máy",
      "outCount": "Số trang đầu ra:",
      "saving": "Đang lưu PDF...",
      "saveBtn": "Lưu PDF đã sắp xếp lại",
      "thumbAlt": (n: number) => `Trang gốc ${n}`,
      "thumbFallback": (n: number) => `Tr. gốc ${n}`,
      "posLabel": (n: number) => `Vị trí #${n}`,
      "origLabel": (n: number) => `(gốc ${n})`,
      "moveEarlierTitle": "Di chuyển lên trước",
      "moveEarlierAria": (n: number) => `Di chuyển vị trí ${n} lên trước`,
      "moveLaterTitle": "Di chuyển xuống sau",
      "moveLaterAria": (n: number) => `Di chuyển vị trí ${n} xuống sau`,
      "dupTitle": "Nhân đôi trang",
      "dupAria": (n: number) => `Nhân đôi trang ở vị trí ${n}`,
      "delTitle": "Xóa trang",
      "delAria": (n: number) => `Xóa trang ở vị trí ${n}`
    }
  },
  "split-pdf": {
    "strings": {
      "errBurst": (n: number) => `Tách burst tải mỗi trang thành một tệp riêng. Với tài liệu lớn hơn 25 trang (${n} trang ở đây), hãy trích xuất phạm vi để trình duyệt không chặn tải xuống hàng loạt.`,
      "exportedAll": (n: number) => `Đã xuất ${n} tệp PDF một trang.`,
      "errNoMatch": "Lựa chọn đó không khớp với trang nào (ví dụ, trang chẵn cần 2+ trang).",
      "extractedSuccess": (a: number, b: number, size: string) => `Đã trích xuất ${a} trên ${b} trang (${size}).`,
      "dropTitleEmpty": "Chọn tệp PDF để tách hoặc trích xuất",
      "dropTitleFile": (name: string, pages: number, size: string) => `${name} (${pages} trang · ${size})`,
      "dropSub": "Xử lý cục bộ trong bộ nhớ · nhấp để thay đổi tài liệu",
      "modeRange": "Trích xuất phạm vi trang",
      "modeOdd": "Chỉ trang lẻ",
      "modeEven": "Chỉ trang chẵn",
      "modeBurst": "Trích xuất mọi trang riêng lẻ",
      "labelRange": (n: number) => `Trang cần trích xuất (1–${n})`,
      "phRange": "Ví dụ 1-3, 5, 8-10",
      "rangeHintBefore": "Dùng dấu phẩy và dấu gạch ngang (ví dụ ",
      "rangeHintAfter": ").",
      "extracting": "Đang trích xuất PDF...",
      "splitBtn": "Tách và tải xuống PDF"
    }
  },
  "qr-code-generator": {
    "strings": {
      "tabUrl": "URL trang web",
      "tabText": "Văn bản thuần",
      "tabWifi": "Mạng Wi-Fi",
      "tabEmail": "Liên kết email",
      "tabPhone": "Số điện thoại",
      "labelUrl": "URL đích",
      "labelText": "Nội dung văn bản",
      "labelSsid": "Tên mạng (SSID)",
      "labelSecurity": "Loại bảo mật",
      "optWpa": "WPA / WPA2 / WPA3",
      "optWep": "WEP",
      "optOpen": "Mở (không mật khẩu)",
      "labelWifiPass": "Mật khẩu Wi-Fi",
      "hiddenSsid": "Mạng SSID ẩn",
      "labelEmailTo": "Email người nhận",
      "labelEmailSubject": "Tiêu đề (tùy chọn)",
      "labelPhone": "Số điện thoại (khuyến nghị định dạng E.164)",
      "sizeLabel": (size: number) => `Kích thước (${size}px)`,
      "labelEc": "Sửa lỗi",
      "labelFg": "Màu chữ",
      "labelBg": "Màu nền",
      "quietZone": "Lề vùng yên tĩnh:",
      "modulesLabel": (margin: number) => `${margin} mô-đun`,
      "encodedPayload": "Chuỗi payload đã mã hóa",
      "copyPayload": "Sao chép payload",
      "emptyError": "Nhập nội dung ở trên để tạo mã QR có thể quét.",
      "encodeError": "Không mã hóa được payload QR.",
      "qrAlt": "Mã QR đã tạo, có thể quét",
      "downloadPng": "Tải xuống PNG",
      "downloadSvg": "Tải xuống SVG",
      "copySvg": "Sao chép SVG",
      "sampleText": "Chào mừng bạn đến với UtilityFlow!"
    }
  },
  "social-character-limit-checker": {
    "strings": {
      "surfaces": {
        "standardPost": "Bài đăng chuẩn",
        "profileBio": "Tiểu sử hồ sơ",
        "caption": "Chú thích",
        "feedPost": "Bài đăng trên bảng tin",
        "videoCaption": "Chú thích video",
        "post": "Bài đăng",
        "videoTitle": "Tiêu đề video",
        "description": "Mô tả"
      },
      "sampleText": "Giao hàng nhanh bắt đầu từ những cải tiến nhỏ mỗi ngày.\n\nThử tiện ích cho nhà sáng tạo chạy trong trình duyệt của chúng tôi tại https://utilityflow.online/tools/ — không cần đăng ký.\n\n#CreatorTools #Workflow",
      "labelInput": "Bản nháp bài đăng / tiểu sử mạng xã hội",
      "copyDraft": "Sao chép bản nháp",
      "placeholder": "Nhập hoặc dán chú thích, bài đăng, tiểu sử mạng xã hội hoặc tiêu đề YouTube...",
      "charsLabel": "Ký tự:",
      "wordsLabel": "Từ:",
      "hashtagsLabel": "Hashtag:",
      "mentionsLabel": "Lượt nhắc:",
      "urlsLabel": "URL đã tìm thấy:",
      "urlsWeighted": "(tính bằng 23 ký tự trên X)",
      "overLimit": (n: number, loc: string) => `Vượt giới hạn ${n.toLocaleString(loc)}`,
      "left": (n: number, loc: string) => `Còn lại ${n.toLocaleString(loc)}`,
      "foldLabel": (n: number) => `Điểm gập ~${n} ký tự`,
      "foldTitle": "Xem trước điểm gập / “See More” trên bảng tin",
      "foldDesc": (limit: number, platform: string, surface: string) => `Xem trước những gì người đọc thấy trước khi nhấn “See more” (${limit} ký tự cho ${platform} ${surface}).`,
      "selectAria": "Chọn nền tảng xem trước điểm cắt",
      "previewEmpty": "Bản xem trước sẽ hiện ở đây..."
    }
  },
  "social-thumbnail-previewer": {
    "strings": {
      "sampleTitle": "Cách tôi tạo 84 tiện ích trình duyệt nhanh mà không cần theo dõi",
      "sampleChannel": "UtilityFlow Studio",
      "sampleViews": "24K lượt xem · 2 ngày trước",
      "errNotImage": "Vui lòng chọn tệp ảnh PNG, JPG hoặc WebP.",
      "errDecode": "Không giải mã được tệp ảnh này trong trình duyệt.",
      "previewEyebrow": "Xem trước 1280 × 720",
      "emptyThumb": "Tải lên ảnh thu nhỏ để kiểm tra độ dễ đọc trên bảng tin",
      "thumbAlt": "Xem trước ảnh thu nhỏ đã tải lên",
      "safeZoneTitle": "Vùng chồng lấn của huy hiệu dấu thời gian",
      "chooseThumb": "Chọn ảnh thu nhỏ cục bộ (PNG / JPG / WebP)",
      "replaceThumb": (name: string) => `Thay thế: ${name}`,
      "recommended": "Khuyến nghị 1280×720 (16:9), dưới 2 MB · không bao giờ tải lên",
      "diagTitle": "Kiểm tra thông số ảnh",
      "dimLabel": "Kích thước",
      "dimHdOk": "(HD ổn)",
      "dimUnder": "(<1280px)",
      "aspectLabel": "Tỷ lệ khung hình",
      "aspectMatch": "Khớp 16:9",
      "aspectNo": "Không phải 16:9 (có thể bị cắt/làm khung)",
      "sizeLabel": "Kích thước tệp",
      "sizeOk": "(<2 MB ổn)",
      "sizeOver": "(>2 MB giới hạn)",
      "titleLabel": (len: number) => `Tiêu đề video (${len}/100 ký tự · trên di động hiện ~60)`,
      "channelLabel": "Tên kênh",
      "durationLabel": "Thời lượng",
      "darkMode": "Xem trước bảng tin chế độ tối",
      "safeZone": "Tô sáng vùng góc dấu thời gian",
      "desktopCard": "Thẻ bảng tin trang chủ trên máy tính",
      "sidebar": "Thanh bên xem video trên máy tính (gợi ý thu gọn)",
      "untitled": "Video chưa có tiêu đề"
    }
  },
  "youtube-timestamp-generator": {
    "strings": {
      "sampleChapters": [
        {
          "id": 1,
          "time": "00:00",
          "title": "Giới thiệu và tổng quan"
        },
        {
          "id": 2,
          "time": "01:15",
          "title": "Thiết lập kiến trúc chính"
        },
        {
          "id": 3,
          "time": "04:40",
          "title": "Demo trực tiếp và lỗi thường gặp"
        },
        {
          "id": 4,
          "time": "08:20",
          "title": "Tóm tắt và bước tiếp theo"
        }
      ],
      "newChapter": (n: number) => `Chương ${n}`,
      "defaultChapterTitle": "Chương",
      "warnInvalid": "Một hoặc nhiều dấu thời gian sai định dạng (dùng MM:SS hoặc HH:MM:SS).",
      "warnMin3": "YouTube cần ít nhất 3 dấu thời gian theo thứ tự tăng dần để bật chương video.",
      "warnFirst": "Chương đầu tiên phải bắt đầu từ 00:00 thì YouTube mới nhận diện được chương.",
      "warnOrder": "Các chương không theo thứ tự thời gian (nhấp vào Sắp xếp theo thời gian).",
      "warnShort": (title: string) => `Chương "${title}" ngắn hơn 10 giây sau chương trước (YouTube yêu cầu tối thiểu 10 giây).`,
      "labelUrl": "URL video YouTube hoặc ID video (để liên kết sâu `?t=` trực tiếp)",
      "heading": "Chương video",
      "sortBtn": "Sắp xếp theo thời gian",
      "addBtn": "Thêm chương",
      "tsAria": (n: number) => `Dấu thời gian của chương ${n}`,
      "titleAria": (n: number) => `Tiêu đề của chương ${n}`,
      "phTitle": "Tiêu đề chương",
      "removeAria": (n: number) => `Xóa chương ${n}`,
      "specTitle": "Kiểm tra thông số chương YouTube:",
      "descBlock": "Khối chương trong mô tả",
      "copyChapters": "Sao chép chương",
      "emptyChapters": "Thêm chương ở trên để tạo khối mô tả.",
      "shareTitle": "Liên kết chia sẻ có dấu thời gian",
      "videoIdLabel": (id: string) => `(ID video: ${id})`,
      "noVideoId": "(Nhập URL YouTube hợp lệ ở trên)",
      "noVideoHint": "Dán URL youtube.com hoặc youtu.be hợp lệ để tạo liên kết nhảy `?t=` có thể nhấp cho mỗi chương."
    }
  },
  "pdf-utils": {
    "strings": {
      "noFile": "Chưa chọn tệp nào.",
      "notPdf": (name: string) => `"${name}" dường như không phải tệp PDF.`,
      "empty": (name: string) => `"${name}" trống hoặc không đầy đủ.`,
      "noHeader": (name: string) => `"${name}" không có header %PDF hợp lệ và không thể xử lý.`,
      "enterRanges": "Nhập số trang hoặc phạm vi, ví dụ \"1-3, 5\".",
      "rangeOutside": (token: string, total: number) => `Phạm vi "${token}" nằm ngoài giới hạn 1–${total} trang của tài liệu.`,
      "rangeReversed": (token: string) => `Phạm vi "${token}" có trang bắt đầu lớn hơn trang kết thúc.`,
      "pageMissing": (page: number, total: number) => `Không có trang ${page} (tài liệu có ${total} trang).`,
      "invalidSyntax": (token: string) => `Cú pháp trang không hợp lệ "${token}". Dùng số và phạm vi như "1-3, 5".`,
      "encrypted": "PDF này đã mã hóa hoặc được bảo vệ bằng mật khẩu. Hãy mở khóa trước khi xử lý cục bộ.",
      "unable": "Không xử lý được tệp PDF.",
      "allKeywords": ["all", "tất cả", "tat ca"]
    }
  }
};
