import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the ko locale.
 * Translated from the per-component STRINGS_EN tables (plus non-string
 * lookup tables used via useComponentTables). Loaded only when the ko
 * locale is selected.
 */
export const koComponentStrings: Record<string, ComponentLocaleData> = {
  "case-converter": {
    "strings": {
      "textToConvert": "대소문자를 변환할 텍스트",
      "placeholder": "텍스트를 입력하거나 붙여넣은 뒤 아래의 변환 버튼을 클릭하세요...",
      "copyResult": "결과 복사"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "검색 결과나 소셜 피드에서 어색하게 잘리지 않도록 플랫폼 글자 수 제한에 맞는 명확하고 간결한 문장을 작성하세요.",
      "withSpaces": "공백 포함",
      "withoutSpaces": "공백 제외",
      "words": "단어",
      "letters": "문자",
      "digits": "숫자",
      "utf8Bytes": "UTF-8 바이트",
      "copyText": "텍스트 복사",
      "textToMeasure": "글자 수를 측정할 텍스트",
      "placeholder": "텍스트를 입력하거나 붙여넣어 정확한 글자 수, 바이트 크기, 플랫폼 제한을 확인하세요...",
      "whitespaceChars": "공백 문자",
      "lines": "줄",
      "platformLimitsTitle": "플랫폼 및 SEO 글자 수 제한",
      "over": "초과",
      "left": "남음",
      "platformLimits": [
        {
          "name": "SEO 메타 제목",
          "note": "Google 검색 결과 권장 제목 길이"
        },
        {
          "name": "SEO 메타 설명",
          "note": "데스크톱 스니펫 기본 기준"
        },
        {
          "name": "SMS 세그먼트",
          "note": "GSM-7 SMS 1건 분량"
        },
        {
          "name": "X / 트위터 게시물",
          "note": "기본 게시물 길이"
        },
        {
          "name": "인스타그램 캡션 미리보기",
          "note": "더 보기로 잘리기 전에 보이는 부분"
        },
        {
          "name": "링크드인 게시물",
          "note": "기본 피드 업데이트 최대 길이"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "찾기",
      "replaceWith": "바꿀 내용",
      "findPlaceholder": "찾을 텍스트...",
      "replacePlaceholder": "대체할 텍스트...",
      "caseSensitive": "대소문자 구분",
      "wholeWordOnly": "단어 단위로만",
      "useRegex": "정규식(RegExp) 사용",
      "regexError": "정규식 오류:",
      "invalidRegex": "유효하지 않은 정규식입니다.",
      "sourceText": "원본 텍스트",
      "updatedOutput": "바뀐 결과",
      "match": "일치",
      "matches": "일치",
      "replaced": "바뀜",
      "sourcePlaceholder": "찾고 바꿀 텍스트를 붙여넣으세요...",
      "outputPlaceholder": "바뀐 텍스트 미리보기가 여기에 표시됩니다...",
      "copyResult": "결과 복사"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "줄 접두사",
      "lineSuffix": "줄 접미사",
      "startNumber": "시작 번호",
      "numberSeparator": "번호 구분자",
      "addLineNumbers": "줄 번호 추가",
      "zeroPad": "0으로 채우기(01, 02)",
      "skipEmptyLines": "빈 줄 건너뛰기",
      "inputLines": "입력 줄",
      "formattedLines": "형식 적용된 줄",
      "copyResult": "결과 복사",
      "inputPlaceholder": "한 줄에 하나씩 값이나 줄을 붙여넣으세요...",
      "outputPlaceholder": "번호가 매겨지거나 감싸진 줄이 여기에 표시됩니다..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "수량",
      "unit": "단위",
      "unitLabels": {
        "paragraphs": "단락",
        "sentences": "문장",
        "words": "단어"
      },
      "startClassic": "Lorem ipsum으로 시작",
      "wrapHtml": "<p> 태그로 감싸기",
      "words": "단어",
      "characters": "문자",
      "regenerate": "다시 생성",
      "copyPlaceholder": "플레이스홀더 텍스트 복사",
      "generatedText": "생성된 플레이스홀더 텍스트"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# UtilityFlow 릴리스 노트\n\n빠른 클라이언트 측 편집기와 실시간 *HTML* 내보내기를 제공하는 **Markdown Previewer**에 오신 것을 환영합니다.\n\n## 주요 기능\n\n- 제목, 목록, 링크에 대한 즉시 서식 지정\n- 원격 업로드 없는 안전한 HTML 이스케이프\n- 원시 HTML을 한 번의 클릭으로 복사하고 다운로드\n\n> 문서를 작업 가까이에 두고 게시하기 전에 구조를 미리 확인하세요.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\n자세한 내용은 [UtilityFlow](/tools/)에서 확인하세요.",
      "renderedPreview": "렌더링 미리보기",
      "rawHtml": "원시 HTML",
      "exportHtml": "HTML 내보내기",
      "copyHtml": "HTML 복사",
      "markdownSource": "Markdown 소스",
      "livePreview": "실시간 미리보기",
      "compiledHtml": "컴파일된 HTML",
      "compiledHtmlAria": "컴파일된 HTML 소스",
      "inputPlaceholder": "Markdown 작성하기(# 제목, **굵게**, - 목록, [링크](https://...))...",
      "emptyPreview": "Markdown을 입력하면 미리보기가 표시됩니다..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "명확한 기술 문서는 독자의 시간을 존중합니다. 가능한 한 구체적인 명사와 능동태 동사를 사용해 복잡한 안내도 쉽게 따라할 수 있도록 하세요.\n\n중첩된 절이 많은 긴 문장은 독자가 단락을 다시 읽게 만듭니다. 빽빽한 설명을 짧은 단계로 나누면 문서를 빠르게 훑어보고 쉽게 적용할 수 있습니다.",
      "level": "수준:",
      "textToCheck": "가독성을 확인할 텍스트",
      "placeholder": "글, 에세이, 랜딩 페이지 문구를 붙여넣어 Flesch 가독성 지수와 학년 수준 점수를 계산하세요...",
      "fleschEase": "Flesch 읽기 용이성",
      "fleschKincaid": "Flesch-Kincaid 학년",
      "usGrade": "미국 학년 수준",
      "gunningFog": "Gunning Fog 지수",
      "yearsEducation": "교육 연수",
      "smog": "SMOG 지수",
      "polysyllable": "다음절 복잡도",
      "structuralBreakdown": "구조 분석",
      "wordsSentences": "단어 / 문장",
      "avgSentenceLength": "평균 문장 길이",
      "words": "단어",
      "avgSyllablesPerWord": "단어당 평균 음절 수",
      "complexWords": "복잡한 단어(3음절 이상)",
      "longWordsDetected": "긴 단어 감지됨(3음절 이상)",
      "noLongWords": "이 텍스트에서 3음절 이상 단어를 찾을 수 없습니다.",
      "emptyState": "가독성 공식과 구조 비율을 보려면 위에 최소 한 문장을 입력하세요.",
      "levels": [
        {
          "level": "매우 쉬움",
          "audience": "초등학교 5학년(10~11세)"
        },
        {
          "level": "쉬움",
          "audience": "초등학교 6학년(11~12세)"
        },
        {
          "level": "꽤 쉬움",
          "audience": "중학교 1학년(12~13세)"
        },
        {
          "level": "보통",
          "audience": "중학교 2~3학년(13~15세)"
        },
        {
          "level": "꽤 어려움",
          "audience": "고등학교 1~3학년"
        },
        {
          "level": "어려움",
          "audience": "대학 수준"
        },
        {
          "level": "매우 어려움",
          "audience": "대학원 / 전문가 수준"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "대소문자 구분",
      "trimWhitespace": "공백 제거",
      "removeEmptyLines": "빈 줄 제거",
      "sortAlphabetically": "알파벳순 정렬",
      "originalLines": "원본 줄",
      "lines": "줄",
      "uniqueLines": "고유한 줄",
      "unique": "고유",
      "removed": "제거됨",
      "inputPlaceholder": "한 줄에 하나씩 목록을 붙여넣으세요...",
      "outputPlaceholder": "중복이 제거된 결과가 여기에 표시됩니다..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "대소문자 구분",
      "ignoreBlankLines": "빈 줄 무시",
      "removeDuplicates": "중복 제거",
      "inputLines": "입력 줄",
      "sortedLines": "정렬된 줄",
      "copySorted": "정렬 결과 복사",
      "inputPlaceholder": "한 줄에 하나씩 입력하세요...",
      "outputPlaceholder": "정렬된 결과가 여기에 표시됩니다...",
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
          "label": "자연 순서(1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "짧은 순"
        },
        {
          "id": "length-desc",
          "label": "긴 순"
        },
        {
          "id": "reverse-order",
          "label": "역순"
        },
        {
          "id": "shuffle",
          "label": "섞기"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "공백 무시",
      "ignoreCase": "대소문자 무시",
      "originalText": "원본 텍스트",
      "modifiedText": "수정된 텍스트",
      "originalPlaceholder": "원본 텍스트를 붙여넣으세요...",
      "modifiedPlaceholder": "수정된 텍스트를 붙여넣으세요...",
      "lineComparison": "줄 비교",
      "added": "추가됨",
      "removed": "삭제됨",
      "unchanged": "변경 없음",
      "emptyState": "추가·삭제된 줄을 비교하려면 위 두 입력란에 텍스트를 입력하세요."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "첫 번째 줄\n두 번째 줄\n세 번째 줄",
      "originalText": "원본 텍스트",
      "reversedOutput": "뒤집힌 결과",
      "inputPlaceholder": "뒤집을 텍스트나 줄을 입력하세요...",
      "outputPlaceholder": "뒤집힌 텍스트가 여기에 표시됩니다...",
      "modes": [
        {
          "id": "characters",
          "label": "문자 뒤집기"
        },
        {
          "id": "words",
          "label": "단어 순서 뒤집기"
        },
        {
          "id": "each-word",
          "label": "각 단어 뒤집기"
        },
        {
          "id": "lines",
          "label": "줄 순서 뒤집기"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "JSON을 온라인으로 포맷하는 최고의 방법 10가지!\n카페 & 크렘: 2026 가이드\nCloudflare Pages로 빠른 정적 사이트 만드는 방법",
      "hyphen": "하이픈(-)",
      "underscore": "밑줄(_)",
      "forceLowercase": "소문자 강제",
      "stripStopWords": "일반 불용어 제거",
      "titlesLabel": "제목 또는 구(일괄 모드에서는 한 줄에 하나씩)",
      "inputPlaceholder": "블로그 제목, 제품 이름, 제목 목록을 입력하세요...",
      "generatedSlugs": "생성된 URL 슬러그",
      "copySlugs": "슬러그 복사",
      "outputPlaceholder": "깔끔한-url-슬러그가-여기에-표시됩니다"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   공백이   많은   첫 번째   줄.   \n\n   탭\t과   간격이 있는   두 번째 줄.\n\n\n세 번째   줄입니다.   ",
      "collapseSpaces": "연속 공백 하나로 합치기",
      "trimEdges": "줄 양쪽 끝 공백 제거",
      "tabsToSpaces": "탭을 공백으로 변환",
      "lineBreaks": "줄 바꿈:",
      "keepBreaks": "줄 바꿈 유지",
      "removeBlankLines": "빈 줄 제거",
      "replaceWithSpaces": "공백으로 바꾸기",
      "removeAllBreaks": "모든 줄 바꿈 제거",
      "inputText": "입력 텍스트",
      "chars": "자",
      "cleanedText": "정리된 텍스트",
      "removed": "제거됨",
      "inputPlaceholder": "공백, 탭, 빈 줄이 많은 지저분한 텍스트를 붙여넣으세요...",
      "outputPlaceholder": "정리된 결과가 자동으로 표시됩니다..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "UtilityFlow는 모든 텍스트 계산을 브라우저 안에서 바로 처리합니다. 블로그 글을 쓰든, 제품 공지를 다듬든, 엄격한 단어 수 제한에 맞춰 학술 에세이를 확인하든, 즉시 표시되는 개수를 통해 메시지를 명확하게 구성할 수 있습니다.\n\n짧은 문장은 훑어보기를 쉽게 합니다. 문장 길이에 변화를 주면 긴 안내도 데스크톱과 모바일 화면에서 독자의 흥미를 유지합니다.",
      "words": "단어",
      "characters": "문자",
      "noSpaces": "공백 제외",
      "sentences": "문장",
      "paragraphs": "단락",
      "readingTime": "읽는 시간",
      "downloadTxt": ".txt 다운로드",
      "copyText": "텍스트 복사",
      "textToCount": "셀 텍스트",
      "placeholder": "단어, 문자, 문장, 읽는 시간을 세려면 여기에 텍스트를 붙여넣거나 입력하세요...",
      "deliveryTimingLines": "전달 시간 및 줄",
      "speakingTime": "말하기 시간(분당 130단어)",
      "totalLines": "전체 줄 수",
      "avgWordLength": "평균 단어 길이",
      "chars": "자",
      "mostFrequentWords": "가장 자주 쓰인 단어",
      "emptyKeywords": "위에 텍스트를 입력하면 가장 자주 반복되는 단어를 볼 수 있습니다."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "기술 SEO 감사는 크롤 가능성, 내부 링크, 페이지 속도를 점검합니다. 빠른 페이지는 사용자 참여도와 모바일 검색에서의 페이지 속도 신호를 높입니다. 내부 링크는 관련 가이드를 연결하고 기술 SEO 구조를 강화합니다.",
      "ngramLabels": {
        "1": "1단어",
        "2": "2단어 구",
        "3": "3단어 구"
      },
      "excludeStopWords": "일반 불용어 제외",
      "minLength": "최소 길이:",
      "textForAnalysis": "빈도 분석용 텍스트",
      "placeholder": "글, 제품 설명, 메모를 붙여넣어 반복되는 용어와 키워드 밀도를 세세요...",
      "totalWords": "전체 단어:",
      "uniqueTerms": "고유 용어:",
      "exportCsv": "CSV 내보내기",
      "copyCsv": "CSV 복사",
      "rank": "#",
      "termPhrase": "용어 / 구",
      "count": "개수",
      "density": "밀도",
      "emptyState": "위에 텍스트를 입력하면 단어 수와 키워드 밀도 백분율을 볼 수 있습니다."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "유효한 날짜를 입력하세요.",
      "errorDobAfterTarget": "생년월일은 기준 날짜보다 뒤일 수 없습니다.",
      "dobLabel": "생년월일",
      "targetLabel": "기준 날짜 나이",
      "exactAge": "정확한 나이",
      "yearsWord": "년",
      "monthsWord": "개월",
      "daysWord": "일",
      "nextBirthday": "다음 생일",
      "turning": "나이",
      "inWord": "앞으로",
      "totalMonths": "전체 개월 수",
      "totalWeeks": "전체 주 수",
      "totalDays": "전체 일 수",
      "totalHours": "전체 시간(약)",
      "monthsAbbr": "개월",
      "weeksAbbr": "주",
      "daysAbbr": "일",
      "hoursAbbr": "시간"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "저체중",
      "normalWeight": "정상 체중",
      "overweight": "과체중",
      "obesity": "비만",
      "errorHeightMetric": "50cm에서 280cm 사이의 키를 입력하세요.",
      "errorWeightMetric": "15kg에서 500kg 사이의 체중을 입력하세요.",
      "errorHeightImperial": "2ft에서 9ft 사이의 유효한 키를 입력하세요.",
      "errorWeightImperial": "30lbs에서 1100lbs 사이의 체중을 입력하세요.",
      "metricTab": "미터법(cm / kg)",
      "imperialTab": "야드파운드법(ft, in / lbs)",
      "heightCmLabel": "키(cm)",
      "weightKgLabel": "체중(kg)",
      "heightFtLabel": "키(ft)",
      "heightInLabel": "키(in)",
      "weightLbsLabel": "체중(lbs)",
      "bmiLabel": "체질량지수(BMI)",
      "whoCategory": "WHO 분류",
      "healthyRange": "BMI 기준 건강 체중 범위(18.5~24.9)",
      "disclaimer": "BMI는 일반적인 선별 지표이며 근육량과 체지방을 구분하지 않습니다."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "15세에서 100세 사이의 나이를 입력하세요.",
      "errorHeightMetric": "100cm에서 250cm 사이의 키를 입력하세요.",
      "errorWeightMetric": "30kg에서 350kg 사이의 체중을 입력하세요.",
      "errorHeightImperial": "3ft 4in에서 8ft 2in 사이의 키를 입력하세요.",
      "errorWeightImperial": "66lbs에서 770lbs 사이의 체중을 입력하세요.",
      "metricTab": "미터법(cm / kg)",
      "imperialTab": "야드파운드법(ft, in / lbs)",
      "maleTab": "남성",
      "femaleTab": "여성",
      "ageLabel": "나이(세)",
      "heightCmLabel": "키(cm)",
      "weightKgLabel": "체중(kg)",
      "heightFtLabel": "키(ft)",
      "heightInLabel": "키(in)",
      "weightLbsLabel": "체중(lbs)",
      "activityLabel": "활동 수준",
      "activitySedentary": "좌식 생활(1.2×)",
      "activitySedentaryDetail": "사무직, 거의 운동하지 않음",
      "activityLight": "가벼운 활동(1.375×)",
      "activityLightDetail": "주 1~3일 가벼운 운동",
      "activityModerate": "보통 활동(1.55×)",
      "activityModerateDetail": "주 3~5일 보통 운동",
      "activityVery": "활발한 활동(1.725×)",
      "activityVeryDetail": "주 6~7일 격렬한 운동",
      "activityExtra": "매우 활발한 활동(1.9×)",
      "activityExtraDetail": "육체노동 또는 하루 두 번 운동",
      "maintenance": "유지 칼로리(TDEE)",
      "mildLoss": "완만한 체중 감량(-0.25kg/주)",
      "mildLossNote": "하루 약 250kcal 부족",
      "weightLoss": "체중 감량(-0.5kg/주)",
      "weightLossNote": "하루 약 500kcal 부족",
      "leanGain": "건강한 체중 증가",
      "leanGainNote": "하루 +250kcal 초과",
      "macroHeading": "유지용 참고 매크로 비율(단백질 30% · 탄수화물 40% · 지방 30%)",
      "protein": "단백질",
      "carbs": "탄수화물",
      "fat": "지방",
      "gramsPerDay": "g/일",
      "disclaimer": "Mifflin-St Jeor 공식을 이용해 기초대사량을 계산합니다. 개인의 에너지 필요량은 체성분과 건강 상태에 따라 다르므로, 제한적인 식단을 시작하기 전에 자격 있는 의료 전문가와 상담하세요."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "초기 투자금은 음수일 수 없습니다.",
      "errorMonthly": "월 납입금은 음수일 수 없습니다.",
      "errorRate": "연 수익률은 0%에서 100% 사이여야 합니다.",
      "errorYears": "투자 기간은 1년에서 100년 사이여야 합니다.",
      "initialLabel": "초기 투자금($)",
      "monthlyLabel": "월 납입금($)",
      "rateLabel": "연 수익률(%)",
      "yearsLabel": "년",
      "compoundingLabel": "복리 적용 주기",
      "dailyOption": "매일(연 365회)",
      "monthlyOption": "매월(연 12회)",
      "quarterlyOption": "분기별(연 4회)",
      "annualOption": "매년(연 1회)",
      "futureBalance": "미래 잔액",
      "totalContributed": "원금 + 납입금 합계",
      "totalInterest": "복리 이자 합계",
      "yearHeader": "연도",
      "totalContributedHeader": "누적 납입금",
      "cumulativeInterestHeader": "누적 이자",
      "endingBalanceHeader": "기말 잔액",
      "yearPrefix": "연도"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "0 이상의 금액을 입력하세요.",
      "errorRate": "0보다 큰 양의 환율을 입력하세요.",
      "errorFee": "0%에서 50% 사이의 환전 수수료를 입력하세요.",
      "fetchErrorWithMessage": "외부 환율을 가져올 수 없습니다({message}). 위에서 환율을 직접 입력하여 계속하세요.",
      "fetchErrorGeneric": "외부 환율 API에 연결할 수 없습니다. 위에서 환율을 직접 입력하세요.",
      "fetchErrorNoPair": "선택한 통화 쌍이 참조 API에서 반환되지 않았습니다.",
      "currencyNames": {
        "USD": "미국 달러",
        "EUR": "유로",
        "GBP": "영국 파운드",
        "JPY": "일본 엔",
        "CAD": "캐나다 달러",
        "AUD": "호주 달러",
        "CHF": "스위스 프랑",
        "INR": "인도 루피",
        "SGD": "싱가포르 달러",
        "NZD": "뉴질랜드 달러",
        "MXN": "멕시코 페소",
        "CNY": "중국 위안"
      },
      "rateSourceManualDefault": "직접 입력한 환율(오프라인 기본값)",
      "rateSourceManual": "직접 입력한 환율",
      "rateSourceIdentity": "동일 통화 적용 환율(1.0000)",
      "rateSourceEcb": "Frankfurter API를 통한 외부 ECB 기준 환율(날짜: {date})",
      "rateSourceInverted": "이전 환율에서 역산",
      "disclosureTitle": "환율 출처 고지:",
      "disclosureBody": "실시간 시장 환율은 오프라인에서 임의로 만들지 않습니다. 정확한 고시 환율을 직접 입력하거나",
      "disclosureBodyAfter": "을(를) 클릭하여 외부 Frankfurter API에서 기준 환율을 요청하세요.",
      "activeRateSource": "활성 환율 출처:",
      "amountLabel": "금액",
      "fromLabel": "출발 통화",
      "toLabel": "도착 통화",
      "swapAria": "통화 바꾸기",
      "swapTitle": "통화를 바꾸고 환율 역산하기",
      "rateLabel": "환율",
      "feeLabel": "은행/카드 수수료(%)",
      "fetchButton": "ECB 기준 환율 가져오기",
      "fetchingButton": "ECB 환율 가져오는 중...",
      "netConverted": "순 환전 금액",
      "grossBeforeFee": "수수료 차감 전 금액",
      "feeLabelShort": "수수료",
      "inverseRate": "역산 환율",
      "perOne": "1당",
      "amountHeaderSuffix": "금액",
      "netHeaderPrefix": "순",
      "netHeaderSuffix": "(입력한 환율 및 수수료 기준)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "유효한 시작일과 종료일을 선택하세요.",
      "errorInvalidBase": "유효한 시작일을 입력하세요.",
      "errorNonNegative": "년, 월, 일에 0 이상의 정수를 입력하세요.",
      "differenceTab": "날짜 간 차이",
      "addSubtractTab": "시간 더하기 / 빼기",
      "startLabel": "시작일",
      "endLabel": "종료일",
      "swapTitle": "날짜 바꾸기",
      "swapAria": "시작일과 종료일 바꾸기",
      "includeEnd": "종료일 포함(+1일)",
      "calendarDuration": "달력 기간",
      "reversedRange": "(역순 범위)",
      "totalSpan": "전체 기간:",
      "calendarDays": "일",
      "weeksDays": "주 및 일",
      "weekdays": "평일(월~금)",
      "weekendDays": "주말(토~일)",
      "totalHours": "전체 시간",
      "yearsWord": "년",
      "monthsWord": "개월",
      "daysWord": "일",
      "weeksAbbr": "주",
      "daysAbbr": "일",
      "hoursAbbr": "시간",
      "referenceLabel": "기준 날짜",
      "operationLabel": "연산",
      "addOption": "더하기 (+)",
      "subtractOption": "빼기 (-)",
      "yearsLabel": "년",
      "monthsLabel": "월",
      "daysLabel": "일",
      "resultingDate": "계산된 날짜",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "원래 가격은 음수일 수 없습니다.",
      "errorDiscount": "할인율은 0%에서 100% 사이여야 합니다.",
      "errorTax": "판매세는 0%에서 100% 사이여야 합니다.",
      "errorCost": "원가는 음수일 수 없습니다.",
      "errorSelling": "판매가는 0보다 커야 합니다.",
      "discountTab": "할인",
      "marginTab": "이익률 및 마크업",
      "originalPriceLabel": "원래 가격($)",
      "discountLabel": "할인율(%)",
      "salesTaxLabel": "판매세(%)",
      "costLabel": "개당 원가($)",
      "sellingLabel": "판매가($)",
      "finalPrice": "최종 가격",
      "beforeTax": "세전:",
      "youSave": "절약 금액",
      "taxAdded": "추가된 세금",
      "grossProfit": "매출총이익",
      "profitMargin": "이익률",
      "profitDivSelling": "(이익 ÷ 판매가)",
      "markup": "마크업",
      "profitDivCost": "(이익 ÷ 원가)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "0보다 큰 대출 금액을 입력하세요.",
      "errorRate": "0%에서 100% 사이의 연 이자율을 입력하세요.",
      "errorDuration": "대출 기간은 1개월에서 600개월 사이여야 합니다.",
      "principalLabel": "대출 금액($)",
      "rateLabel": "연 이자율(% 실효)",
      "termLabel": "대출 기간",
      "termUnitAria": "대출 기간 단위",
      "yearsOption": "년",
      "monthsOption": "개월",
      "monthlyPayment": "월 상환액(EMI)",
      "forPrefix": "총",
      "monthlyPayments": "월 상환액",
      "totalInterest": "이자 합계",
      "ofTotalCost": "가 전체 비용",
      "totalRepayment": "총 상환액",
      "principalWord": "원금",
      "principalLabelShort": "원금",
      "interestLabelShort": "이자",
      "showSchedule": "상환 계획 표시",
      "hideSchedule": "상환 계획 숨기기",
      "monthHeader": "월",
      "paymentHeader": "상환액",
      "principalHeader": "원금",
      "interestHeader": "이자",
      "balanceHeader": "잔액"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "주택 가격은 0보다 커야 합니다.",
      "errorDownPayment": "계약금은 0%에서 99.9% 사이여야 합니다.",
      "errorRate": "이자율은 0%에서 50% 사이여야 합니다.",
      "errorTerm": "대출 기간은 1년에서 50년 사이여야 합니다.",
      "homePriceLabel": "주택 가격($)",
      "downPaymentLabel": "계약금(%)",
      "rateLabel": "이자율(% 실효)",
      "termLabel": "대출 기간(년)",
      "yearsWord": "년",
      "taxLabel": "재산세($ / 년)",
      "insuranceLabel": "주택 보험($ / 년)",
      "hoaLabel": "HOA 관리비($ / 월)",
      "estimatedMonthly": "예상 월 상환액",
      "loanAmount": "대출 금액",
      "downPayment": "계약금",
      "lifetimeInterest": "전체 기간 이자",
      "breakdownHeading": "월 상환액 내역",
      "principalInterest": "원금 및 이자(P&I)",
      "propertyTaxes": "재산세",
      "homeownersInsurance": "주택 보험",
      "hoaDues": "HOA 관리비",
      "pmiLabel": "예상 PMI(계약금 20% 미만 시 연 0.5%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "유효한 숫자를 입력하세요.",
      "errorTotalZero": "전체 값(Y)은 0일 수 없습니다.",
      "errorStartZero": "시작 값은 0일 수 없습니다.",
      "heading1": "1. 어떤 수의 백분율 값",
      "heading2": "2. 전체에서 차지하는 비율",
      "heading3": "3. 백분율 증가 또는 감소",
      "whatIs": "계산:",
      "percentOf": "% /",
      "isWhatPercentOf": "/",
      "fromWord": "에서",
      "toWord": "으로",
      "result": "결과:",
      "change": "변화:",
      "formula": "공식",
      "difference": "차이",
      "ariaPctX": "백분율 X",
      "ariaBaseY": "기준 수 Y",
      "ariaPartX": "부분 값 X",
      "ariaWholeY": "전체 값 Y",
      "ariaInitialA": "초기 값 A",
      "ariaFinalB": "최종 값 B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "급여 금액은 음수일 수 없습니다.",
      "errorHours": "주 근무 시간은 1시간에서 168시간 사이여야 합니다.",
      "errorWeeks": "연 근무 주 수는 1주에서 52주 사이여야 합니다.",
      "errorTax": "실효 세율은 0%에서 99% 사이여야 합니다.",
      "amountLabel": "급여 금액($)",
      "frequencyLabel": "지급 주기",
      "hourlyOption": "시급",
      "dailyOption": "일급",
      "weeklyOption": "주급",
      "biweeklyOption": "격주급",
      "monthlyOption": "월급",
      "annualOption": "연봉",
      "hoursLabel": "시간 / 주",
      "weeksLabel": "주 / 년",
      "taxLabel": "예상 세율(%)",
      "rowHourly": "시급",
      "rowDaily": "일급(주 5일)",
      "rowWeekly": "주급",
      "rowBiweekly": "격주급",
      "rowMonthly": "월급",
      "rowAnnual": "연봉",
      "payPeriodHeader": "지급 기간",
      "grossPayHeader": "총 급여",
      "estNetPay": "예상 실수령액",
      "taxWord": "세금"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "유효한 시작 시간과 종료 시간을 입력하세요.",
      "errorBreakRange": "휴식 시간은 0분에서 1,440분 사이여야 합니다.",
      "errorEndEarlier": "종료 시간이 시작 시간보다 빠릅니다. 자정을 넘는 경우 야간 근무 이월을 켜세요.",
      "errorBreakExceeds": "휴식 시간이 전체 경과 시간을 초과합니다.",
      "errorSumFields": "모든 기간 입력란은 0 이상의 숫자여야 합니다.",
      "betweenTab": "두 시간 사이의 경과 시간",
      "sumTab": "근무 시간 합산",
      "startLabel": "시작 시간",
      "endLabel": "종료 시간",
      "breakLabel": "무급 휴식(분)",
      "overnightLabel": "종료 시간이 시작 시간보다 빠르면 다음 날로 처리(야간 근무)",
      "netDuration": "순 근무 시간",
      "overnightTag": "(야간 근무)",
      "decimalHours": "소수 시간",
      "totalMinutes": "전체 분",
      "totalSeconds": "전체 초",
      "hoursAbbr": "시간",
      "minutesAbbr": "분",
      "secondsAbbr": "초",
      "labelHeader": "이름",
      "hoursHeader": "시간",
      "minutesHeader": "분",
      "secondsHeader": "초",
      "removeButton": "삭제",
      "removeAria": "삭제",
      "addRowButton": "기간 행 추가",
      "morningSession": "오전 근무",
      "afternoonSession": "오후 근무",
      "segmentPrefix": "구간",
      "combinedTime": "합산 시간(HH:MM:SS)",
      "dayEquivalent": "24시간 기준 일수",
      "daysAbbr": "일"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "계산서 금액은 음수일 수 없습니다.",
      "errorTip": "팁 비율은 0%에서 200% 사이여야 합니다.",
      "errorPeople": "인원 수는 1명에서 100명 사이여야 합니다.",
      "billLabel": "계산서 금액($)",
      "tipLabel": "팁 비율(%)",
      "peopleLabel": "나눌 인원(명)",
      "presetsLabel": "팁 프리셋:",
      "roundingLabel": "반올림:",
      "exactOption": "정확한 센트",
      "totalUpOption": "총액 올림($)",
      "perPersonUpOption": "1인당 금액 올림($)",
      "perPersonTotal": "1인당 총액",
      "includes": "포함:",
      "tipEach": "1인당 팁",
      "totalTip": "팁 합계",
      "effectiveRate": "실효 비율:",
      "totalBill": "총 계산서 금액"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "변환할 유효한 숫자를 입력하세요.",
      "errorAbsoluteZero": "온도는 절대 영도보다 낮을 수 없습니다(-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "길이",
        "weight": "무게 및 질량",
        "temperature": "온도",
        "area": "면적",
        "volume": "부피",
        "speed": "속도",
        "storage": "디지털 저장 용량"
      },
      "unitLabels": {
        "mm": "밀리미터",
        "cm": "센티미터",
        "m": "미터",
        "km": "킬로미터",
        "in": "인치",
        "ft": "피트",
        "yd": "야드",
        "mi": "마일",
        "mg": "밀리그램",
        "g": "그램",
        "kg": "킬로그램",
        "t": "미터톤",
        "oz": "온스",
        "lb": "파운드",
        "st": "스톤",
        "C": "섭씨",
        "F": "화씨",
        "K": "켈빈",
        "cm2": "제곱센티미터",
        "m2": "제곱미터",
        "ha": "헥타르",
        "km2": "제곱킬로미터",
        "ft2": "제곱피트",
        "yd2": "제곱야드",
        "acre": "에이커",
        "mi2": "제곱마일",
        "mL": "밀리리터",
        "L": "리터",
        "m3": "세제곱미터",
        "floz": "액량 온스(미국)",
        "cup": "컵(미국)",
        "pt": "파인트(미국)",
        "qt": "쿼트(미국)",
        "gal": "갤런(미국)",
        "ms": "미터 / 초",
        "kmh": "킬로미터 / 시간",
        "mph": "마일 / 시간",
        "knot": "노트",
        "fts": "피트 / 초",
        "B": "바이트",
        "KB": "킬로바이트(10³)",
        "MB": "메가바이트(10⁶)",
        "GB": "기가바이트(10⁹)",
        "TB": "테라바이트(10¹²)",
        "KiB": "키비바이트(2¹⁰)",
        "MiB": "메비바이트(2²⁰)",
        "GiB": "기비바이트(2³⁰)"
      },
      "valueLabel": "값",
      "fromLabel": "출발 단위",
      "toLabel": "도착 단위",
      "swapAria": "단위 바꾸기",
      "swapTitle": "단위 바꾸기",
      "toWord": "→",
      "copyResult": "결과 복사",
      "unitHeader": "단위",
      "symbolHeader": "기호",
      "equivalentHeader": "환산 값"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "금액은 음수일 수 없습니다.",
      "errorRate": "세율은 0%에서 100% 사이여야 합니다.",
      "addTab": "세금 추가(세전 → 세후)",
      "removeTab": "세금 제외(세후 → 세전)",
      "commonRates": "일반 세율:",
      "netAmountLabel": "세전 금액($)",
      "grossAmountLabel": "세후 금액($)",
      "rateLabel": "부가세 / 판매세율(%)",
      "netPrice": "세전 가격",
      "taxAmount": "세금",
      "grossPrice": "세후 가격"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Base64로 인코딩",
      "decodeTab": "Base64 디코딩",
      "urlSafe": "URL 안전(- 및 _)",
      "omitPadding": "끝의 = 패딩 생략",
      "swap": "바꾸기",
      "decodeError": "디코딩 오류:",
      "inputLabelEncode": "일반 텍스트(UTF-8)",
      "inputLabelDecode": "Base64 문자열",
      "inputPlaceholderEncode": "인코딩할 텍스트나 JSON을 입력하세요...",
      "inputPlaceholderDecode": "표준 또는 URL 안전 Base64 문자열을 붙여넣으세요...",
      "outputLabelEncode": "Base64 출력",
      "outputLabelDecode": "디코딩된 텍스트",
      "outputPlaceholder": "변환된 출력이 여기에 표시됩니다...",
      "copyOutput": "출력 복사",
      "invalidLength": "Base64 문자열 길이가 유효하지 않습니다.",
      "invalidInput": "유효하지 않은 Base64 입력이거나 잘못된 UTF-8 바이트 시퀀스입니다."
    },
    "tables": {
      "samplePlain": "UtilityFlow: UTF-8 안전 Base64 인코딩 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "색상 선택",
      "colorPickerAria": "색상 선택기",
      "copyHex": "HEX 복사",
      "copyRgb": "RGB 복사",
      "copyHsl": "HSL 복사",
      "contrastTitle": "WCAG 2.1 명암비 검사",
      "contrastDesc": "전경색({color})을 모든 배경색과 비교해 미리 봅니다.",
      "backgroundLabel": "배경:",
      "bgAria": "명암 비교용 배경색",
      "sampleTitle": "본문 및 UI 텍스트 예시",
      "sampleSentence": "빠른 갈색 여우가 게으른 개를 뛰어넘습니다.",
      "aaNormal": "AA 일반 텍스트(≥ 4.5:1)",
      "aaaNormal": "AAA 일반 텍스트(≥ 7.0:1)",
      "aaLarge": "AA 큰 텍스트(≥ 3.0:1)",
      "pass": "통과",
      "fail": "실패"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "5개 필드 Cron 식",
      "copyCron": "Cron 복사",
      "humanTitle": "읽기 쉬운 일정",
      "breakdownTitle": "필드별 분석",
      "fieldMinute": "분(0–59)",
      "fieldHour": "시간(0–23)",
      "fieldDom": "일(1–31)",
      "fieldMonth": "월(1–12)",
      "fieldDow": "요일(0–6)",
      "nextRuns": "다음 {count}회 예정 실행(현지 시간)",
      "noRuns": "향후 366일 안에 일치하는 실행이 없습니다.",
      "fieldsError": "표준 Cron은 5개 필드(분 시간 일 월 요일)를 사용합니다. 입력된 필드: {count}개.",
      "emptySegment": "“{token}”에 빈 세그먼트가 있습니다",
      "invalidStep": "“{token}”의 단계 “{step}”이(가) 유효하지 않습니다",
      "outOfRange": "“{token}”의 값이 범위를 벗어났습니다({min}–{max})",
      "invalidCron": "유효하지 않은 Cron 식입니다.",
      "everyMinutes": "{n}분마다",
      "minuteZeroHour": "매시간 0분에",
      "atTime": "{time}에",
      "atFields": "{a}, {b}에",
      "dayEveryDay": "매일",
      "dayWeekdays": "평일(월요일–금요일)",
      "dayOfMonth": "매월 {day}일에",
      "dayDow": "{dow}에",
      "dayBoth": "{day}일 또는 {dow}에",
      "monthIn": " {months}에"
    },
    "tables": {
      "presets": [
        {
          "label": "5분마다",
          "expr": "*/5 * * * *"
        },
        {
          "label": "매시간",
          "expr": "0 * * * *"
        },
        {
          "label": "매일 자정",
          "expr": "0 0 * * *"
        },
        {
          "label": "평일 오전 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "매월 1일 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
      ],
      "monthLabels": [
        "",
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
      ],
      "unitWords": {
        "minute": "분",
        "hour": "시간",
        "day": "일",
        "month": "월",
        "weekday": "요일"
      },
      "unitPlurals": {
        "minute": "분",
        "hour": "시간",
        "day": "일",
        "month": "월",
        "weekday": "요일"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "CSS 축소",
      "beautifyTab": "CSS 정렬",
      "inputLabel": "입력 CSS",
      "bytesLabel": "바이트",
      "inputPlaceholder": "CSS 규칙이나 스타일시트를 여기에 붙여넣으세요...",
      "outputLabelMinify": "축소된 CSS",
      "outputLabelBeautify": "정렬된 CSS",
      "outputPlaceholder": "처리된 CSS가 여기에 표시됩니다...",
      "copyCss": "CSS 복사"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "텍스트 입력",
      "fileTab": "로컬 파일 체크섬",
      "uppercaseHex": "16진수 대문자",
      "inputLabel": "입력 문자열(UTF-8)",
      "inputPlaceholder": "텍스트를 입력하면 SHA-1, SHA-256, SHA-384, SHA-512 해시를 계산합니다...",
      "chooseFileLabel": "해시할 로컬 파일 선택",
      "fileNoteDefault": "파일은 브라우저 메모리에서 로컬로 읽으며 업로드되지 않습니다.",
      "bytesLabel": "바이트",
      "cryptoUnavailable": "웹 크립토 해싱을 사용할 수 없습니다.",
      "sampleText": "안녕하세요, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "엔티티 인코딩",
      "decodeTab": "엔티티 디코딩",
      "encodeNonAscii": "비ASCII 문자 인코딩(&#...;)",
      "swap": "바꾸기",
      "inputLabelEncode": "원시 HTML / 텍스트",
      "inputLabelDecode": "HTML 인코딩된 문자열",
      "inputPlaceholderEncode": "<p>HTML 태그나 특수 문자를 여기에 입력하세요...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;인코딩된 엔티티를 여기에 붙여넣으세요...&lt;/p&gt;",
      "outputLabelEncode": "인코딩된 엔티티",
      "outputLabelDecode": "디코딩된 텍스트",
      "outputPlaceholder": "변환된 엔티티가 여기에 표시됩니다..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "JS 축소",
      "beautifyTab": "JS 정렬",
      "indentLabel": "들여쓰기:",
      "indent2": "공백 2개",
      "indent4": "공백 4개",
      "inputLabel": "JavaScript / TypeScript 입력",
      "bytesLabel": "바이트",
      "inputPlaceholder": "JavaScript 또는 TypeScript 스니펫을 붙여넣으세요...",
      "outputLabelMinify": "축소된 출력",
      "outputLabelBeautify": "정렬된 출력",
      "outputPlaceholder": "정렬된 JavaScript가 여기에 표시됩니다...",
      "copyCode": "코드 복사"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "구분자:",
      "commaOpt": "쉼표(,)",
      "semicolonOpt": "세미콜론(;)",
      "tabOpt": "탭(TSV)",
      "conversionError": "변환 오류:",
      "inputLabelJson": "JSON 입력",
      "inputLabelCsv": "CSV 입력",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"예시\"}]",
      "inputPlaceholderCsv": "id,name\n1,예시",
      "outputLabelCsv": "CSV 출력",
      "outputLabelJson": "JSON 출력",
      "outputPlaceholder": "변환된 데이터가 여기에 표시됩니다...",
      "parseFallback": "입력 형식을 파싱할 수 없습니다."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "공백 2개",
      "indent4": "공백 4개",
      "indentTab": "탭",
      "indentMinify": "축소",
      "sortKeys": "키 A–Z 정렬",
      "validJson": "유효한 JSON",
      "keysLabel": "키",
      "depthLabel": "깊이",
      "bytesLabel": "바이트",
      "invalidJson": "유효하지 않은 JSON:",
      "invalidJsonSyntax": "유효하지 않은 JSON 구문",
      "lineCol": "{line}행, {col}열",
      "inputLabel": "원시 JSON 입력",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "정렬된 출력",
      "outputPlaceholder": "정렬되고 검증된 JSON이 여기에 표시됩니다...",
      "copyJson": "JSON 복사"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Base64Url 헤더와 페이로드를 브라우저 메모리에서 로컬로 디코딩합니다. 암호화 서명을 검증하지는 않습니다.",
      "loadSampleJwt": "샘플 JWT 불러오기",
      "inputLabel": "인코딩된 JWT 토큰",
      "inputPlaceholder": "JWT 토큰을 붙여넣어(eyJhbGciOi...) 헤더와 클레임을 확인하세요...",
      "invalidJwt": "유효하지 않은 JWT:",
      "headerLabel": "헤더(알고리즘 및 유형)",
      "payloadLabel": "페이로드(클레임)",
      "copyHeader": "헤더 복사",
      "copyPayload": "페이로드 복사",
      "timestampTitle": "타임스탬프 클레임",
      "iatLabel": "발급 시간(iat)",
      "nbfLabel": "유효 시작 시간(nbf)",
      "expLabel": "만료 시간(exp)",
      "expired": "만료됨",
      "active": "활성(아직 만료되지 않음)",
      "signatureLabel": "서명 세그먼트(Base64Url)",
      "invalidB64Url": "Base64Url 세그먼트 길이가 유효하지 않습니다.",
      "segmentCount": "점으로 구분된 3개의 JWT 세그먼트(헤더.페이로드.서명)가 필요하지만 {count}개가 발견되었습니다.",
      "parseFallback": "JWT Base64Url JSON 세그먼트를 파싱할 수 없습니다."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "정규식 패턴",
      "patternPlaceholder": "정규식 패턴 입력...",
      "flagsLabel": "플래그:",
      "syntaxError": "구문 오류:",
      "testStringLabel": "테스트 문자열",
      "testPlaceholder": "패턴을 테스트할 샘플 텍스트를 여기에 붙여넣으세요...",
      "highlightedMatches": "강조 표시된 일치 항목",
      "matchSingular": "일치",
      "matchPlural": "일치",
      "highlightEmpty": "일치 항목이 여기에 실시간으로 강조 표시됩니다...",
      "capturedTitle": "캡처된 일치 항목",
      "matchLabel": "일치",
      "indexLabel": "인덱스",
      "groupsLabel": "그룹:",
      "noMatches": "일치하는 항목이 없습니다.",
      "replaceLabel": "대체 템플릿 미리보기",
      "replacePlaceholder": "예: $1 [at] $2",
      "invalidRegex": "유효하지 않은 정규식입니다."
    },
    "tables": {
      "sampleText": "주 연락처: support@utilityflow.online\n청구 팀: billing@example.org\n유효하지 않은 이메일: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g(전역)"
        },
        {
          "flag": "i",
          "label": "i(대소문자 무시)"
        },
        {
          "flag": "m",
          "label": "m(여러 줄)"
        },
        {
          "flag": "s",
          "label": "s(dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "정렬",
      "minify": "축소",
      "uppercaseKw": "키워드 대문자",
      "lowercaseKw": "소문자",
      "indentLabel": "들여쓰기:",
      "indent2": "공백 2개",
      "indent4": "공백 4개",
      "inputLabel": "원시 SQL 쿼리",
      "inputPlaceholder": "SQL 쿼리를 붙여넣으세요(SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "정렬된 SQL",
      "outputPlaceholder": "정렬된 SQL이 여기에 표시됩니다...",
      "copySql": "SQL 복사"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "현재 Unix 타임스탬프(초)",
      "useCurrent": "현재 시간 사용",
      "copyEpoch": "Epoch 복사",
      "converter1Label": "Unix 타임스탬프 → 읽을 수 있는 날짜",
      "epochPlaceholder": "예: 1794544800",
      "unitAuto": "자동",
      "unitSeconds": "초",
      "unitMilliseconds": "밀리초",
      "errorNotNumeric": "유효한 숫자 Unix 타임스탬프를 입력하세요.",
      "errorOutOfRange": "타임스탬프가 유효한 JavaScript Date 범위를 벗어났습니다.",
      "isoLabel": "ISO 8601(UTC)",
      "localLabel": "현지 시간",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "상대 시간",
      "converter2Label": "현지 날짜 및 시간 → Unix 타임스탬프",
      "secondsLabel": "초",
      "millisecondsLabel": "밀리초",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "인코딩",
      "decode": "디코딩",
      "encodeUriPreserve": "encodeURI(://?& 유지)",
      "swap": "바꾸기",
      "urlError": "URL 오류:",
      "inputLabel": "입력 문자열 또는 URL",
      "inputPlaceholder": "URL, 쿼리 문자열, 매개변수 값을 붙여넣으세요...",
      "outputLabelEncode": "인코딩된 출력",
      "outputLabelDecode": "디코딩된 출력",
      "outputPlaceholder": "인코딩 또는 디코딩된 URL이 여기에 표시됩니다...",
      "parsedTitle": "파싱된 URL 분석",
      "protocol": "프로토콜",
      "host": "호스트",
      "pathname": "경로",
      "hash": "해시",
      "noneValue": "(없음)",
      "queryParam": "쿼리 매개변수",
      "decodedValue": "디코딩된 값",
      "malformed": "잘못된 퍼센트 인코딩입니다."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "UUID 버전",
      "v4": "v4(무작위)",
      "v7": "v7(시간순)",
      "quantity": "개수(1–100)",
      "generate": "UUID 생성",
      "uppercase": "대문자",
      "includeHyphens": "하이픈 포함",
      "wrapBraces": "{중괄호}로 감싸기",
      "generatedLabel": "생성된 UUID",
      "copyAll": "모두 복사"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "흰색 위의 인디고",
      "presetSlate": "슬레이트 잉크",
      "presetEmerald": "에메랄드 배지",
      "presetDark": "다크 모드",
      "swapColors": "색상 바꾸기",
      "fgTitle": "전경 / 텍스트 색상",
      "bgTitle": "배경색",
      "copyHex": "HEX 복사",
      "pickerSuffix": "색상 선택기",
      "hexInputSuffix": "HEX 입력",
      "contrastRatioLabel": "WCAG 2.1 명암비",
      "checkAaNormal": "WCAG AA 일반 텍스트",
      "checkAaLarge": "WCAG AA 큰 텍스트 / UI",
      "checkAaaNormal": "WCAG AAA 일반 텍스트",
      "checkAaaLarge": "WCAG AAA 큰 텍스트",
      "pass": "통과",
      "fail": "미통과",
      "livePreviewLabel": "실시간 접근성 미리보기",
      "previewHeading": "명확한 타이포그래피는 모든 화면 크기에서 편안하게 읽힙니다.",
      "previewBody": "일반 본문 텍스트(14–16px)는 WCAG AA 등급에 최소 4.5:1, AAA 등급에 7.0:1의 명암비가 필요합니다. 큰 제목(18pt 이상 또는 굵은 14pt 이상)은 최소 3.0:1이 필요합니다.",
      "outlinedControl": "테두리가 있는 UI 요소",
      "hexOnHex": "{bg} 위의 {fg}",
      "extractTitle": "이미지에서 색상 팔레트 추출",
      "extractBody": "스크린샷, 로고, 사진을 업로드하면 주요 HEX 색상 견본을 명암 검사에 바로 가져올 수 있습니다.",
      "appliesToLabel": "견본 클릭 적용 대상:",
      "foregroundBtn": "전경",
      "backgroundBtn": "배경",
      "selectImage": "색상 견본을 추출할 이미지 선택",
      "loadedReplace": "불러옴: {name}(다시 업로드)",
      "selectImageError": "PNG, JPG, WebP, GIF 이미지를 선택하세요.",
      "unableToRead": "“{name}”을(를) 읽을 수 없습니다.",
      "canvasUnavailable": "Canvas 2D 컨텍스트를 사용할 수 없습니다.",
      "transparentImage": "이미지가 완전히 투명한 것으로 보입니다.",
      "unableToExtract": "팔레트를 추출할 수 없습니다.",
      "areaPercent": "면적 약 {n}%"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 브라우저 탭",
        "taskbar": "32×32 작업 표시줄 / HiDPI",
        "desktopShortcut": "48×48 바탕화면 바로 가기",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 PWA 스플래시"
      },
      "monogramMode": "모노그램 배지 빌더",
      "imageMode": "로고 이미지 업로드",
      "lettersLabel": "텍스트 / 이니셜(1–3자)",
      "cornerShapeLabel": "모서리 모양",
      "roundedSquare": "둥근 모서리 사각형",
      "circle": "원",
      "sharpSquare": "날카로운 모서리 사각형",
      "square": "사각형",
      "bgColorLabel": "배경색",
      "textColorLabel": "텍스트 색상",
      "chooseLogo": "PNG, JPG, WebP, SVG 로고 선택",
      "loadedReplace": "불러옴: {name}(클릭하여 교체)",
      "cropMaskLabel": "자르기 마스크",
      "unableToRead": "“{name}”을(를) 읽을 수 없습니다.",
      "canvasUnavailable": "Canvas 2D 컨텍스트를 사용할 수 없습니다.",
      "failedEncode": "파비콘 PNG를 인코딩할 수 없습니다.",
      "unableToGenerate": "파비콘을 생성할 수 없습니다.",
      "icoBundleTitle": "다중 크기 favicon.ico 패키지(16px + 32px + 48px)",
      "icoBundleBody": "표준을 준수하는 바이너리 .ico 파일로, 웹사이트 /public/ 루트 폴더에 바로 사용할 수 있습니다",
      "downloadIco": "favicon.ico 다운로드",
      "faviconPreviewAlt": "파비콘 미리보기 32×32",
      "iconAlt": "아이콘 {size}×{size}",
      "htmlTagsLabel": "HTML <head> 링크 태그",
      "copyHtml": "HTML 복사"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "암호화 체크섬을 계산할 파일 선택",
      "fileWithSize": "{name}({size})",
      "hashedLocally": "Web Crypto API로 로컬 해시 · 파일 업로드 없음(500MB 미만 권장)",
      "cryptoUnavailable": "이 브라우저 환경에서는 Web Crypto SubtleCrypto API를 사용할 수 없습니다.",
      "hashFailed": "브라우저 메모리에서 파일을 해시할 수 없습니다(수백 MB가 넘는 파일은 RAM 한도를 초과할 수 있습니다).",
      "computing": "SHA-1, SHA-256, SHA-384, SHA-512 체크섬을 로컬에서 계산하는 중...",
      "fileLabel": "파일:",
      "sizeLabel": "크기:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "수정됨:",
      "bytesSuffix": "{n}바이트",
      "downloadSha256": ".sha256 다운로드",
      "sha256Label": "SHA-256(권장)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1(기존 호환용)",
      "verifyLabel": "예상 체크섬과 비교",
      "expectedPlaceholder": "게시된 SHA-256, SHA-512, SHA-384, SHA-1 체크섬을 붙여넣으세요(.sha256sum 행도 가능)...",
      "verified": "체크섬이 확인되었습니다! 파일이 예상 {algorithm} 다이제스트와 정확히 일치합니다.",
      "mismatch": "체크섬이 일치하지 않습니다! 계산된 다이제스트 중 예상 값과 일치하는 것이 없습니다."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "압축할 이미지 선택(PNG / JPG / WebP)",
      "fileWithDims": "{name}({w}×{h} · {size})",
      "processedLocally": "HTML5 Canvas로 로컬 처리 · 원격 서버에 업로드하지 않음",
      "uploadImageError": "PNG, JPG, WebP, GIF 이미지 파일을 업로드하세요.",
      "unableToDecode": "“{name}”을(를) 디코딩할 수 없습니다.",
      "canvasUnavailable": "Canvas 2D 컨텍스트를 사용할 수 없습니다.",
      "compressionFailed": "브라우저 Canvas에서 압축에 실패했습니다.",
      "unableToCompress": "이미지를 압축할 수 없습니다.",
      "unableToRead": "“{name}”을(를) 읽을 수 없습니다.",
      "invalidImage": "유효하지 않은 이미지 파일입니다.",
      "outputFormatLabel": "출력 형식",
      "webpOption": "WebP(가장 작은 최신 웹 크기)",
      "jpgOption": "JPG(가장 넓은 호환성)",
      "pngOption": "PNG(무손실 투명도)",
      "maxWidthLabel": "최대 너비",
      "keepOriginalWidth": "원본 너비 유지",
      "max1920": "최대 1920px(Full HD)",
      "max1280": "최대 1280px(블로그 / 히어로)",
      "max800": "최대 800px(썸네일)",
      "qualityLabel": "품질: ",
      "losslessPng": "무손실 PNG",
      "originalLabel": "원본",
      "compressedLabel": "압축됨",
      "changeLabel": "변화",
      "outputSummary": "출력: {w} × {h}px · {ext}",
      "compressing": "압축하는 중...",
      "downloadExt": ".{ext} 다운로드",
      "previewAlt": "압축된 이미지 미리보기"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "변환할 이미지 하나 이상 선택",
      "imagesLoaded": "{n}개 이미지 로드됨 — 클릭하여 추가 또는 교체",
      "batchNote": "PNG, JPG, WebP, SVG, GIF를 로컬에서 일괄 변환하여 PNG, JPG, WebP로 변환",
      "convertToLabel": "대상 형식",
      "pngOption": "PNG(.png — 투명도 유지)",
      "qualityLabel": "품질(손실): ",
      "lossless": "무손실",
      "alphaFillLabel": "알파 채우기",
      "converting": "변환하는 중...",
      "reconvert": "다시 변환",
      "selectFilesError": "이미지 파일을 하나 이상 선택하세요(PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "“{name}”을(를) 디코딩할 수 없습니다.",
      "canvasUnavailable": "Canvas 2D를 사용할 수 없습니다.",
      "conversionFailed": "“{name}” 변환에 실패했습니다.",
      "batchFailed": "이미지 일괄 변환에 실패했습니다.",
      "downloadExt": ".{ext} 다운로드"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "크기를 변경하거나 미리 설정된 치수로 자를 이미지 선택",
      "fileWithDims": "{name}(원본: {w} × {h}px)",
      "supportsNote": "픽셀 크기 변경, 종횡비 잠금, 가운데 자르기가 적용된 소셜 미디어 프리셋 지원",
      "selectImageError": "PNG, JPG, WebP, GIF 이미지를 선택하세요.",
      "unableToDecode": "“{name}”을(를) 디코딩할 수 없습니다.",
      "unableToRead": "이미지를 읽을 수 없습니다.",
      "failedLoading": "크기 변경을 위해 이미지를 불러올 수 없습니다.",
      "canvasUnavailable": "Canvas 2D를 사용할 수 없습니다.",
      "failedGenerating": "크기가 변경된 이미지를 생성할 수 없습니다.",
      "resizeFailed": "크기 변경에 실패했습니다.",
      "quickPresets": "빠른 프리셋:",
      "presetOg": "OG 공유(1200×630)",
      "presetYoutube": "YouTube HD(1280×720)",
      "presetSquare": "정사각형(1080×1080)",
      "presetAvatar": "아바타(512×512)",
      "widthLabel": "너비(px)",
      "heightLabel": "높이(px)",
      "fitModeLabel": "맞춤 모드",
      "coverCropOption": "가운데 커버 자르기(왜곡 없음)",
      "exactOption": "정확한 치수로 크기 조정",
      "outputFormatLabel": "출력 형식",
      "lockAspect": "치수 입력 시 원본 종횡비 잠그기",
      "resizeButton": "{w} × {h}px로 크기 변경",
      "readySummary": "완료: {w} × {h}px({ext})",
      "downloadResized": "크기가 변경된 이미지 다운로드(.{ext})",
      "previewAlt": "크기가 변경된 이미지 출력"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "회전, 뒤집기, 필터를 적용할 이미지 선택",
      "loadedReplace": "{name}(클릭하여 교체)",
      "previewNote": "실시간 HTML5 Canvas 미리보기 및 픽셀 내보내기",
      "selectImageError": "PNG, JPG, WebP, GIF 이미지를 선택하세요.",
      "failedLoading": "“{name}”을(를) 불러올 수 없습니다.",
      "rotateLeft": "왼쪽으로 90° 회전",
      "rotateRight": "오른쪽으로 90° 회전",
      "flipHorizontal": "좌우 뒤집기",
      "flipVertical": "상하 뒤집기",
      "brightnessLabel": "밝기: ",
      "contrastLabel": "명암: ",
      "grayscaleLabel": "흑백(그레이스케일)",
      "resetAll": "모두 초기화",
      "exportFormatLabel": "내보내기 형식",
      "livePreview": "실시간 Canvas 미리보기"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "이미지 → Base64 Data URI",
      "decodeMode": "Base64 → 이미지 미리보기",
      "selectImageError": "이미지 파일을 선택하세요(PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "“{name}”을(를) 읽을 수 없습니다.",
      "chooseImage": "인코딩할 이미지 파일 선택",
      "fileWithSize": "{name}({size})",
      "generatesNote": "Data URI, 원시 Base64, HTML <img>, CSS 배경 스니펫 생성",
      "binarySizeLabel": "바이너리 파일 크기",
      "base64SizeLabel": "Base64 URI 크기(약 33% 더 큼)",
      "fullDataUriLabel": "전체 Data URI",
      "copyDataUri": "Data URI 복사",
      "copyRawBase64": "원시 Base64 복사",
      "copyImg": "<img> 복사",
      "copyCss": "CSS 복사",
      "encodedAria": "인코딩된 Base64 Data URI",
      "encodedAlt": "인코딩된 미리보기",
      "pasteLabel": "Base64 이미지 문자열 또는 Data URI 붙여넣기",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... 또는 원시 Base64 문자열",
      "invalidPayload": "붙여넣은 Base64 텍스트가 유효하게 인코딩된 이미지 페이로드가 아닙니다.",
      "decodedAlt": "디코딩된 Base64 미리보기",
      "downloadExt": ".{ext} 다운로드"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "매우 강함",
        "strong": "강함",
        "moderate": "보통",
        "weak": "약함"
      },
      "randomPasswordMode": "무작위 비밀번호",
      "passphraseMode": "Diceware 암호문",
      "regenerate": "다시 생성",
      "passwordLengthLabel": "비밀번호 길이: ",
      "charsSuffix": "자",
      "batchCountLabel": "일괄 개수: ",
      "uppercaseLabel": "대문자(A–Z)",
      "lowercaseLabel": "소문자(a–z)",
      "numbersLabel": "숫자(0–9)",
      "symbolsLabel": "기호(!@#$%...)",
      "excludeAmbiguousLabel": "모호한 문자 제외(0, O, 1, l, I)",
      "wordCountLabel": "단어 수: ",
      "wordSeparatorLabel": "단어 구분자",
      "hyphenOption": "하이픈(-)",
      "underscoreOption": "밑줄(_)",
      "periodOption": "마침표(.)",
      "spaceOption": "공백( )",
      "capitalizeWordsLabel": "단어 첫 글자 대문자",
      "appendDigitLabel": "2자리 숫자 추가",
      "selectGroupWarning": "비밀번호를 생성하려면 최소 하나의 문자 그룹을 선택하세요.",
      "entropyBits": "약 {n}비트 엔트로피",
      "poolSizeSuffix": " · 문자 집합 {n}개",
      "wordListSuffix": " · 단어 목록 {n}개",
      "copyAll": "모두 복사"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "웹사이트 URL",
        "text": "텍스트",
        "wifi": "Wi-Fi 설정",
        "vcard": "vCard 연락처",
        "email": "이메일 주소",
        "phone": "전화번호",
        "plainText": "일반 텍스트"
      },
      "liveCameraCapture": "실시간 카메라 캡처",
      "scanMode": "QR 이미지 스캔 / 디코딩",
      "vcardMode": "vCard 연락처 QR 빌더",
      "uploadQr": "QR 코드 이미지 업로드",
      "uploadQrNote": "PNG, JPG, WebP, SVG 스크린샷 · 100% 클라이언트 측 처리",
      "liveCameraTitle": "기기 카메라로 실시간 스캔",
      "liveCameraNote": "권한이 부여된 경우에만 로컬 카메라 피드를 사용합니다",
      "startCamera": "카메라 스캐너 시작",
      "stopCamera": "카메라 중지",
      "cameraHint": "카메라를 QR 코드에 맞추세요. 디코딩되면 캡처가 자동으로 중지됩니다.",
      "uploadImageError": "QR 코드가 있는 PNG, JPG, WebP, SVG 이미지를 업로드하세요.",
      "unableToLoad": "“{name}”을(를) 불러올 수 없습니다.",
      "noQrDetected": "이 이미지에서 QR 코드를 찾을 수 없습니다. 초점이 맞고, 여백이 선명하며, 명암이 높은지 확인하세요.",
      "unableToScan": "이미지를 스캔할 수 없습니다.",
      "cameraUnsupported": "이 브라우저 환경에서는 카메라 스캔이 지원되지 않습니다.",
      "cameraDenied": "카메라 권한이 거부되었거나 카메라 기기를 사용할 수 없습니다. 대신 QR 코드 이미지를 업로드하세요.",
      "decodedPayload": "디코딩된 페이로드 · {kind}",
      "sourceLabel": "출처: ",
      "copyPayload": "페이로드 복사",
      "decodedAria": "디코딩된 QR 텍스트",
      "detectedLink": "감지된 웹 링크: ",
      "uploadedPreviewAlt": "업로드한 QR 코드 미리보기",
      "firstNameLabel": "이름",
      "lastNameLabel": "성",
      "orgLabel": "소속",
      "jobTitleLabel": "직함",
      "defaultJobTitle": "제품 디자이너",
      "phoneLabel": "전화번호",
      "emailLabel": "이메일 주소",
      "websiteLabel": "웹사이트 URL",
      "rawVcardLabel": "원시 vCard 3.0 페이로드",
      "copyVcard": "vCard 복사",
      "vcardQrAlt": "생성된 vCard QR 코드",
      "downloadPng": "PNG 다운로드",
      "downloadSvg": "SVG 다운로드"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "짧게",
          "ratio": "길이 약 10–20%"
        },
        "medium": {
          "label": "보통",
          "ratio": "길이 약 30–40%"
        },
        "detailed": {
          "label": "길게(자세히)",
          "ratio": "길이 약 50–60%"
        }
      },
      "loadingLengthLabels": {
        "short": "짧은",
        "medium": "보통",
        "detailed": "긴"
      },
      "formatOptions": {
        "paragraph": {
          "label": "단락 요약",
          "hint": "매끄럽고 일관된 글"
        },
        "bullets": {
          "label": "글머리 기호 요약",
          "hint": "깔끔하게 훑어볼 수 있는 목록"
        },
        "key-points": {
          "label": "핵심 포인트 추출",
          "hint": "번호가 매겨진 요점"
        },
        "simple": {
          "label": "쉬운 언어",
          "hint": "평범하고 일상적인 표현"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "단락",
        "bullets": "글머리 기호",
        "key-points": "핵심 포인트",
        "simple": "쉬운 언어"
      },
      "languageLabels": {
        "Same as original language": "원본 언어와 동일",
        "English (US)": "영어(미국)",
        "English (UK)": "영어(영국)",
        "Spanish": "스페인어",
        "French": "프랑스어",
        "German": "독일어",
        "Portuguese": "포르투갈어",
        "Italian": "이탈리아어",
        "Dutch": "네덜란드어",
        "Arabic": "아랍어",
        "Hindi": "힌디어",
        "Urdu": "우르두어",
        "Turkish": "터키어",
        "Japanese": "일본어",
        "Korean": "한국어",
        "Chinese (Simplified)": "중국어(간체)"
      },
      "sampleArticle": "2026년, 분산된 제품 엔지니어링 팀은 집중 개발 시간을 보호하기 위해 매일 상태 회의 대신 비동기식 서면 업데이트에 점점 더 의존하고 있습니다. 런던, 베를린, 토론토에서 근무하는 140명의 엔지니어를 대상으로 한 6개월간의 내부 연구에서, 주 3회 동기화 회의를 화요일과 목요일의 구조화된 서면 다이제스트로 대체한 팀은 캘린더 단편화가 28% 감소하고 스프린트 마일스톤을 14% 더 빠르게 달성했다고 보고했습니다. 중요한 점은 서면 업데이트가 엔지니어들이 세 가지 일관된 규칙을 따를 때만 성공했다는 것입니다. 구체적인 장애 요소를 맨 위에 명시하고, 풀 리퀘스트나 이슈 ID에 직접 링크하며, “곧” 같은 모호한 표현 대신 정확한 목표 날짜를 기록하는 것입니다. 관리자는 여전히 열린 아키텍처 트레이드오프와 팀 체크인에만 전념하는 주 1회 25분 실시간 세션을 유지하여, 코딩 시간을 방해하지 않으면서 대인 관계를 유지했습니다.",
      "secUnit": "초",
      "minUnit": "분",
      "title": "무료 AI 텍스트 요약기",
      "noAccount": "계정, 크레딧, 로그인 불필요",
      "allowanceBefore": "일일 무료 허용량:",
      "allowanceAfter": "오늘 남음",
      "allowanceFallback": "하루 최대 5회 무료 요약",
      "backendTitle": "이 환경에서는 아직 AI 백엔드 키가 활성화되지 않았습니다.",
      "backendEnsureBefore": "설정:",
      "backendEnsureAfter": "를 구성하면 실시간 AI 요약을 실행할 수 있습니다.",
      "stepLength": "1. 요약 길이",
      "stepFormat": "2. 요약 형식",
      "stepLanguage": "3. 출력 언어",
      "stepText": "4. 요약할 원본 텍스트",
      "lengthAria": "요약 길이",
      "paste": "붙여넣기",
      "clipboardUnavailable": "여기서는 브라우저 클립보드 읽기를 사용할 수 없습니다. 편집기 안에서 Ctrl/Cmd + V를 사용하세요.",
      "clipboardEmpty": "클립보드에 현재 텍스트가 없습니다.",
      "clipboardBlocked": "클립보드 권한이 차단되었습니다. Ctrl/Cmd + V로 직접 붙여넣으세요.",
      "placeholder": "글, 연구 노트, 회의 기록, 에세이를 여기에 붙여넣으세요(최소 25단어 / 120자, 최대 25,000자)...",
      "word": "단어",
      "words": "단어",
      "chars": "자",
      "estRead": "예상 읽기 시간: ",
      "stop": "중지",
      "summarizing": "요약하는 중...",
      "summarizeButton": "텍스트 요약",
      "addMoreBefore": "최소 ",
      "addMoreMiddle": "단어를 더 추가하세요(최소 ",
      "addMoreAnd": "단어 및 ",
      "addMoreAfter": "자). 그래야 AI가 의미 있는 요약을 만들 수 있습니다.",
      "generatingSummary": "{length} 요약({format} 형식) 생성 중...",
      "errorDailyLimit": "일일 무료 요약 한도에 도달했습니다",
      "errorRateLimited": "조금 천천히 시도해 주세요",
      "errorGlobal": "플랫폼 일일 용량에 도달했습니다",
      "errorGeneric": "지금 요약할 수 없습니다",
      "retry": "다시 시도",
      "emptyError": "요약하기 전에 글, 보고서, 메모를 붙여넣거나 입력하세요.",
      "tooShortErrorBefore": "의미 있는 요약을 만들기에는 텍스트가 너무 짧습니다(",
      "tooShortErrorMiddle": "단어). 최소 ",
      "tooShortErrorAnd": "단어 및 ",
      "tooShortErrorAfter": "자를 입력하세요.",
      "overLimitBefore": "입력이 ",
      "overLimitMiddle": "자 제한을 초과했습니다. 텍스트를 ",
      "overLimitAfter": "자 줄인 뒤 다시 시도하세요.",
      "connectionError": "요약 중 일시적인 연결 문제가 발생했습니다. 다시 시도해 주세요.",
      "resultTitle": "요약 결과",
      "shorterSuffix": "% 더 짧음",
      "copySummary": "요약 복사",
      "downloadTxt": "TXT 다운로드",
      "originalRead": "원본 읽기 시간",
      "summaryRead": "요약 읽기 시간",
      "compressionSaved": "압축 및 절약된 시간",
      "savesPrefix": "절약 시간 약 ",
      "tabCompare": "원본 vs. 요약",
      "tabSummary": "요약만",
      "resultAria": "생성된 요약 및 비교",
      "originalText": "원본 텍스트",
      "summaryOutput": "요약 출력",
      "summarizedWith": "무료 Groq 모델로 요약됨",
      "fallbackNote": " (자동 모델 대체)",
      "preservedNote": ". 중요한 이름, 날짜, 숫자는 입력 내용에서 엄격히 그대로 유지됩니다."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "이미지를 100KB 이하로 줄이기",
          "query": "이미지 크기를 100KB로 줄이고 싶어요.",
          "categoryId": "image-file"
        },
        {
          "label": "PDF를 이미지로 변환",
          "query": "PDF를 이미지로 변환해야 해요.",
          "categoryId": "pdf"
        },
        {
          "label": "에세이 단어 수 세기",
          "query": "에세이의 단어 수를 세고 싶어요.",
          "categoryId": "text-writing"
        },
        {
          "label": "QR 코드 생성",
          "query": "QR 코드를 생성해야 해요.",
          "categoryId": "social-media"
        },
        {
          "label": "이미지 크기 변경",
          "query": "이미지의 크기를 변경하고 싶어요.",
          "categoryId": "image-file"
        },
        {
          "label": "문법 수정 및 이메일 다시 쓰기",
          "query": "AI가 문법 오류를 수정하고 이메일을 전문적으로 다시 써 주었으면 해요.",
          "categoryId": "text-writing"
        },
        {
          "label": "긴 글 요약",
          "query": "긴 글을 핵심 글머리 기호로 요약해야 해요.",
          "categoryId": "text-writing"
        },
        {
          "label": "PDF를 Word로 변환 확인",
          "query": "PDF를 Word로 변환해야 해요.",
          "categoryId": "all"
        }
      ],
      "title": "AI 스마트 도구 찾기",
      "searchesLine": "실제 UtilityFlow 도구 {count}개를 검색합니다(브라우저 도구 85개 + AI 도구 2개)",
      "aiSearchesToday": "오늘의 AI 검색:",
      "leftUnlimited": "남음 · 즉시 로컬 검색 무제한",
      "quotaFallback": "하루 최대 10회 무료 AI 검색 · 로컬 검색 무제한",
      "backendBefore": "AI 의미 순위 지정에는 ",
      "backendAfter": "이(가) 서버에 필요합니다. 단, 모든 {count}개 도구에 대한 즉시 로컬 키워드 검색은 바로 사용할 수 있습니다.",
      "queryLabel": "하고 싶은 일을 설명하세요(일상 언어 또는 키워드)",
      "queryPlaceholder": "예: “이미지 크기를 100KB로 줄이고 싶어요” 또는 “PDF를 PNG로 변환”",
      "categoryLabel": "선택 사항: 작업 카테고리",
      "allCategories": "모든 카테고리({count}개 도구)",
      "characters": "자",
      "findButton": "일치하는 도구 찾기",
      "findingButton": "가장 적합한 도구를 찾는 중...",
      "tryTask": "실제 작업을 시도하거나 자주 묻는 질문을 선택하세요",
      "loadingLine": "UtilityFlow의 검증된 도구 {count}개와 요청을 대조하는 중...",
      "errorTitle": "AI 의미 순위 지정을 사용할 수 없습니다",
      "retryAi": "AI 다시 시도",
      "describeError": "해결하려는 작업이나 문제를 설명해 주세요(최소 2자).",
      "queryTooLongBefore": "쿼리가 ",
      "queryTooLongAfter": "자를 초과했습니다. 설명을 간결하게 유지해 주세요.",
      "unexpectedFormat": "AI가 예상치 못한 형식을 반환했습니다. 아래에 실제 목록에서 찾은 빠른 키워드 일치 항목이 표시됩니다.",
      "contactError": "AI 순위 지정에 연결하는 중 일시적인 문제가 발생했습니다. 키워드 검색 결과는 아래에 계속 표시됩니다.",
      "bestTool": "가장 추천하는 도구",
      "noExact": "현재 정확히 일치하는 도구가 없습니다",
      "noMatchFallback": "UtilityFlow에는 현재 “{query}”을(를) 직접 수행하는 전용 도구가 없습니다. 가짜 도구나 링크를 만들지 않습니다.",
      "relevantAlt": "관련 대안",
      "relatedTools": "관련 기존 도구(부분 워크플로만 해당)",
      "supportedPrefix": "지원: ",
      "openName": "{name} 열기",
      "matchedWith": "무료 Groq 모델을 사용해 검증된 UtilityFlow 목록과 대조했습니다",
      "fallbackNote": " (자동 대체)",
      "instantMatches": "즉시 키워드 일치({count}개)",
      "matchedLocally": "{count}개 도구에서 로컬로 대조됨",
      "matchedPrefix": "대조됨: ",
      "suggestionsTitle": "스마트 제안",
      "suggestionsAll": "인기 작업 전체",
      "suggestionsCategory": "선택한 카테고리 내",
      "clickOpen": "도구를 클릭하면 바로 열립니다",
      "openToolArrow": "도구 열기 →",
      "recommendationsAria": "AI 도구 추천",
      "instantAria": "즉시 키워드 일치 항목",
      "suggestionsAria": "페이지 로드 시 스마트 추천 도구"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "문법 수정",
          "hint": "문법 및 구두점 수정"
        },
        "rewrite-text": {
          "label": "텍스트 다시 쓰기",
          "hint": "매끄러운 흐름과 자연스러운 표현"
        },
        "improve-writing": {
          "label": "글쓰기 개선",
          "hint": "명확성과 단어 선택 다듬기"
        },
        "make-professional": {
          "label": "전문적으로 표현",
          "hint": "직장 및 임원 수준의 명확성"
        },
        "make-casual": {
          "label": "편안하게 표현",
          "hint": "편안한 일상 언어"
        },
        "simplify-text": {
          "label": "텍스트 단순화",
          "hint": "명확하고 읽기 쉬운 문장"
        },
        "expand-text": {
          "label": "텍스트 확장",
          "hint": "입력 내용을 바탕으로 유용한 세부 정보 추가"
        },
        "paraphrase": {
          "label": "바꿔 쓰기",
          "hint": "새로운 표현, 같은 의미"
        },
        "fix-spelling": {
          "label": "맞춤법 수정",
          "hint": "오타 및 대소문자만 수정"
        },
        "write-email": {
          "label": "이메일 작성",
          "hint": "제목이 포함된 구조화된 이메일"
        }
      },
      "tones": {
        "professional": "전문적인",
        "friendly": "친근한",
        "formal": "격식 있는",
        "casual": "편안한",
        "academic": "학술적인",
        "persuasive": "설득력 있는",
        "simple": "간단한"
      },
      "languageLabels": {
        "English (US)": "영어(미국)",
        "English (UK)": "영어(영국)",
        "Spanish": "스페인어",
        "French": "프랑스어",
        "German": "독일어",
        "Portuguese": "포르투갈어",
        "Italian": "이탈리아어",
        "Dutch": "네덜란드어",
        "Arabic": "아랍어",
        "Hindi": "힌디어",
        "Urdu": "우르두어",
        "Turkish": "터키어",
        "Japanese": "일본어",
        "Korean": "한국어",
        "Chinese (Simplified)": "중국어(간체)",
        "Same as original language": "원본 언어와 동일"
      },
      "samples": {
        "default": "안녕하세요, 팀 여러분. 어제 회의에 대해 후속 조치를 공유하고 4분기 제품 출시 업데이트 일정을 전달하고자 합니다. 금요일 전에 검토해야 할 항목이 아직 두 가지 남아 있으니, 장애 요소가 있으면 알려 주세요.",
        "write-email": "모바일 앱 출시에 대해 고객 Daniel에게 업데이트해야 합니다. 오늘 테스트가 끝났고, 내일 아침까지 수정할 사소한 UI 버그 2개가 남아 있으며, 금요일 오후 App Store 제출 준비가 되었습니다. 월요일 오전 10시에 인수인계 통화가 가능한지 문의합니다.",
        "fix-spelling": "분기별 유지보수 기간이 모든 서버에서 계획되지 않은 다운타임 없이 순조롭게 진행되었음을 발표하게 되어 매우 기쁩니다.",
        "expand-text": "원격 비동기 스탠드업은 엔지니어링 시간을 절약하고 전 세계 팀원이 잦은 캘린더 방해 없이 깊이 집중할 수 있게 합니다."
      },
      "title": "무료 AI 글쓰기 도우미",
      "noLogin": "로그인이나 카드가 필요 없습니다",
      "allowanceBefore": "일일 무료 허용량:",
      "allowanceAfter": "오늘 남음",
      "allowanceFallback": "하루 최대 5회 무료 요청",
      "backendTitle": "이 환경에서는 아직 AI 백엔드 키가 활성화되지 않았습니다.",
      "backendSet": "설정:",
      "backendRest": "를 서버 또는 Worker에 설정하면 실시간 AI 텍스트 생성이 활성화됩니다.",
      "stepTask": "1. 글쓰기 작업 선택(10가지 모드)",
      "stepTone": "2. 어조",
      "stepLanguage": "3. 출력 언어",
      "stepText": "4. 원본 텍스트",
      "taskSelectorAria": "글쓰기 작업 선택기",
      "placeholder": "단락, 메시지, 메모, 이메일 초안을 여기에 입력하거나 붙여넣으세요(최대 12,000자)...",
      "word": "단어",
      "words": "단어",
      "characters": "문자",
      "chars": "자",
      "tip": "팁: Ctrl + Enter를 눌러 생성하세요",
      "stop": "중지",
      "generating": "생성하는 중...",
      "applying": "적용 중",
      "tonePhrase": "{tone} 어조",
      "applyingIn": "언어:",
      "errorDailyLimit": "일일 무료 한도에 도달했습니다",
      "errorRateLimited": "조금 천천히 시도해 주세요",
      "errorGlobal": "플랫폼 일일 용량에 도달했습니다",
      "errorGeneric": "글쓰기 요청을 완료할 수 없습니다",
      "retry": "다시 시도",
      "emptyError": "생성하기 전에 텍스트를 입력하거나 붙여넣으세요.",
      "overLimitBefore": "입력이 ",
      "overLimitMiddle": "자 제한을 초과했습니다. 초안을 ",
      "overLimitAfter": "자 줄인 뒤 다시 시도하세요.",
      "connectionError": "생성 중 일시적인 연결 문제가 발생했습니다. 다시 시도해 주세요.",
      "resultTitle": "개선된 결과",
      "copyResult": "결과 복사",
      "downloadTxt": "TXT 다운로드",
      "editOutput": "결과를 더 편집",
      "tabCompare": "원본 vs. 개선본",
      "tabDiff": "변경 사항 강조",
      "tabResult": "결과만",
      "resultAria": "개선된 글쓰기 결과 및 비교",
      "originalText": "원본 텍스트",
      "improvedText": "개선된 텍스트",
      "removed": "삭제됨",
      "added": "추가 / 업데이트됨",
      "processedWith": "무료 Groq 모델로 처리됨",
      "fallbackNote": " (자동 모델 대체)",
      "reviewNote": ". 보내기 전에 최종 텍스트를 항상 검토하세요."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Canonical 및 Hreflang 태그",
      "redirectsMode": "301 리디렉션 규칙 생성기",
      "canonicalLabel": "자체 참조 Canonical URL",
      "alternatesLabel": "언어 및 지역 대안",
      "addLocale": "언어 버전 추가",
      "langCodeAria": "언어 코드",
      "alternateUrlAria": "대체 URL",
      "removeLocaleAria": "언어 버전 행 삭제",
      "htmlTagsLabel": "HTML <head> 링크 태그",
      "copyHtml": "HTML 복사",
      "xmlSnippetLabel": "XML 사이트맵 <xhtml:link> 스니펫",
      "copyXml": "XML 복사",
      "cloudflareFormat": "Cloudflare Pages(_redirects)",
      "htaccessFormat": "Apache(.htaccess)",
      "nginxFormat": "Nginx(서버 블록)",
      "copyRules": "{n}개 규칙 복사",
      "pairsLabel": "원본 → 대상 쌍(쉼표, 탭 또는 “ -> ”로 구분)",
      "generatedConfigLabel": "생성된 301 리디렉션 구성",
      "skippedInvalid": "대상 없는 {n}개 행을 건너뛰었습니다."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "기술 SEO는 깔끔하고 크롤 가능한 URL, 올바른 Canonical 태그, 구조화된 XML 사이트맵에서 시작합니다. 게시자가 키워드 스터핑 대신 사용자 검색 의도에 집중한 유용한 콘텐츠를 작성하면 검색 엔진이 콘텐츠의 깊이를 스스로 이해합니다. 제목, 메타 설명, 내부 링크를 정기적으로 점검하세요.",
      "defaultTargetKeyword": "기술 seo",
      "guidanceTitle": "편집 지침:",
      "guidanceBody": "최신 검색 엔진은 고정된 키워드 밀도에 보상하지 않습니다. 이 분포 분석을 이용해 우연한 반복을 찾거나 핵심 용어가 텍스트에 명확히 나타나는지 확인하세요.",
      "targetLabel": "대상 키워드 / 구(선택 사항)",
      "targetPlaceholder": "예: 기술 seo",
      "phraseLengthLabel": "구 길이",
      "oneWord": "1단어",
      "twoWord": "2단어 구",
      "threeWord": "3단어 구",
      "stripHtml": "HTML 태그 제거",
      "ignoreStopWords": "불용어 무시",
      "textLabel": "글 초안 또는 붙여넣은 HTML 텍스트",
      "totalWords": "전체 단어",
      "uniqueVocabulary": "고유 단어",
      "readingTime": "예상 읽기 시간",
      "targetPrefix": "대상: ",
      "hits": "{n}회 일치({d}%)",
      "rankHeader": "순위",
      "termHeader": "용어 / N-그램",
      "occurrencesHeader": "발생 횟수",
      "shareHeader": "비율(%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – 빠르고 브라우저 기반의 온라인 유틸리티 도구",
      "defaultDescription": "텍스트 편집, 개발자 코딩, 금융 계산기, PDF 워크플로, SEO를 위한 85개의 빠르고 개인정보를 보호하는 브라우저 도구를 살펴보세요.",
      "pageTitleLabel": "페이지 제목(<title> / og:title)",
      "titleChars": "{n}자(이상적: 30–60)",
      "metaDescriptionLabel": "메타 설명",
      "descChars": "{n}자(이상적: 120–160)",
      "canonicalUrlLabel": "Canonical URL",
      "ogImageLabel": "Open Graph 이미지 URL(1200×630 권장)",
      "siteNameLabel": "웹사이트 이름(og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "트위터 카드",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Robots Follow 지시",
      "includeViewportLabel": "Charset 및 Viewport 태그 포함",
      "generatedTagsLabel": "생성된 HTML <head> 태그",
      "copyHtml": "HTML 복사",
      "downloadHtml": ".html 다운로드",
      "socialPreviewLabel": "소셜 공유 카드 미리보기",
      "socialPreviewFallback": "소셜 공유 미리보기",
      "untitledPage": "제목 없는 페이지",
      "metaSnippetFallback": "메타 설명 스니펫이 여기에 표시됩니다."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "클라이언트 측 HTML 소스 검사:",
      "auditBody": "브라우저는 임의의 타사 웹사이트에 대한 크로스 오리진 스크래핑(CORS)을 차단하며 비공개 검색 분석에 접근할 수 없습니다. 아래에 페이지의 HTML 소스(“페이지 소스 보기”)를 붙여넣어 DOM 태그를 로컬에서 검사하세요.",
      "pastedHtmlLabel": "붙여넣은 HTML 소스",
      "loadSampleHtml": "샘플 HTML 불러오기",
      "htmlPlaceholder": "원시 <html>...</html> 소스를 여기에 붙여넣으세요...",
      "scoreLabel": "DOM 검사 점수",
      "checksPassed": "{passed} / {total}개 검사 통과",
      "linksSummary": "링크: {total}개(내부 {internal}개 / 외부 {external}개)",
      "robotsMetaLabel": "Robots 메타: ",
      "robotsDefault": "기본값(index, follow)",
      "headingOutline": "제목 구조(H1–H4)",
      "emptyState": "왼쪽에 HTML 소스를 붙여넣어 제목, 설명, 제목 태그, Canonical, Alt 태그를 검사하세요.",
      "checkTitle": "Title 태그(<title>)",
      "checkMetaDesc": "메타 설명",
      "checkH1": "정확히 하나의 <h1> 제목",
      "checkCanonical": "Canonical URL(<link rel=\"canonical\">)",
      "checkAlt": "이미지 Alt 속성",
      "checkOgJsonLd": "Open Graph 및 구조화된 JSON-LD 데이터",
      "titleDetail": "{n}자: “{title}”",
      "titleMissing": "<head>에 <title> 태그가 없습니다.",
      "descDetail": "{n}자(목표 120–160).",
      "descMissing": "<meta name=\"description\">이(가) 없습니다.",
      "h1Detail": "<h1> 요소 {n}개가 발견되었습니다.",
      "canonicalMissing": "Canonical 태그가 지정되지 않았습니다.",
      "noImages": "마크업에 <img> 요소가 없습니다.",
      "altDetail": "{total}개 이미지 중 {with}개에 설명이 있는 Alt 텍스트가 있습니다.",
      "ogDetail": "og:title {presence} · JSON-LD 블록 {n}개.",
      "present": "있음",
      "missing": "없음"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "인덱싱 지시",
      "indexOption": "index(검색 인덱싱 허용)",
      "noindexOption": "noindex(SERP에서 제외)",
      "linkCrawlingLabel": "링크 크롤링",
      "followOption": "follow(링크 신호 전달)",
      "nofollowOption": "nofollow(링크를 따라가지 않음)",
      "largeOption": "large(발견 허용)",
      "htmlTagLabel": "HTML <head> 메타 태그",
      "copyHtmlTag": "HTML 태그 복사",
      "httpHeaderLabel": "HTTP 응답 헤더(PDF / 비HTML)",
      "copyHeader": "헤더 복사",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Cloudflare _headers 경로 패턴",
      "copyBlock": "블록 복사"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "시작 템플릿:",
      "allowAll": "모든 크롤러 허용",
      "standardWebApp": "표준 웹 앱 / SaaS",
      "wordpressClean": "WordPress(깔끔함)",
      "stagingBlockAll": "스테이징(모두 차단)",
      "crawlerRules": "크롤러 경로 규칙",
      "addRule": "규칙 추가",
      "directiveAria": "지시문",
      "pathAria": "경로",
      "deleteRuleAria": "규칙 삭제",
      "crawlDelayLabel": "크롤 지연(초, 선택 사항)",
      "crawlDelayPlaceholder": "없음",
      "sitemapUrlsLabel": "사이트맵 URL(한 줄에 하나씩)",
      "generatedLabel": "생성된 robots.txt"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "빠른 브라우저 유틸리티를 만드는 방법",
      "defaultFaqQ1": "UtilityFlow 도구는 브라우저에서 로컬로 실행되나요?",
      "defaultFaqA1": "네. 거의 모든 유틸리티는 입력을 외부 서버로 보내지 않고 브라우저 메모리에서 직접 실행됩니다.",
      "defaultFaqQ2": "구조화된 JSON-LD가 SEO에 도움이 되나요?",
      "defaultFaqA2": "네. 유효한 Schema.org JSON-LD는 검색 크롤러가 개체 맥락과 리치 결과 적합성을 이해하는 데 도움이 됩니다.",
      "defaultProductName": "전문가용 인체공학 기계식 키보드",
      "defaultProductDesc": "소프트웨어 개발자를 위해 설계된 슬림 무선 키보드입니다.",
      "defaultCrumbHome": "홈",
      "defaultCrumbSeo": "SEO 도구",
      "defaultCrumbSchema": "스키마 마크업 생성기",
      "headlineLabel": "제목",
      "authorNameLabel": "작성자 이름",
      "publisherNameLabel": "게시자 이름",
      "datePublishedLabel": "게시 날짜",
      "articleUrlLabel": "글 URL",
      "featuredImageLabel": "대표 이미지 URL",
      "questionLabel": "질문 {n}번",
      "removeQuestionAria": "질문 {n} 삭제",
      "questionPlaceholder": "질문",
      "acceptedAnswerPlaceholder": "채택된 답변",
      "addFaqRow": "FAQ 행 추가",
      "productNameLabel": "제품 이름",
      "descriptionLabel": "설명",
      "priceLabel": "가격",
      "currencyLabel": "통화",
      "availabilityLabel": "재고 상태",
      "orgNameLabel": "조직 이름",
      "websiteUrlLabel": "웹사이트 URL",
      "logoUrlLabel": "로고 URL",
      "breadcrumbLabelAria": "Breadcrumb {n} 레이블",
      "breadcrumbUrlAria": "Breadcrumb {n} URL",
      "labelPlaceholder": "레이블",
      "addLevel": "수준 추가",
      "jsonLdOutputLabel": "JSON-LD <script> 출력",
      "copyScriptTag": "스크립트 태그 복사"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "JSON 포맷터 및 검증기 – 예쁘게 출력 및 축소 | UtilityFlow",
      "defaultDescription": "브라우저에서 바로 JSON 페이로드의 키를 포맷, 검증, 축소, 정렬하세요. 행과 열별 구문 오류 세부 정보도 확인할 수 있습니다.",
      "desktopSerp": "데스크톱 SERP(제목 약 580px)",
      "mobileSerp": "모바일 SERP(설명 약 120자)",
      "copyTitleMeta": "제목 및 메타 복사",
      "seoTitleLabel": "SEO 제목",
      "titleMetrics": "{chars}자 · 약 {px}px / 최대 580px",
      "metaDescriptionLabel": "메타 설명",
      "descMetrics": "{chars}자 · 약 {px}px",
      "pageUrlLabel": "페이지 URL(Breadcrumb 미리보기용)",
      "siteNameLabel": "웹사이트 이름",
      "boldKeywordLabel": "굵은 키워드",
      "optionalPlaceholder": "선택 사항",
      "datePrefixLabel": "날짜 접두사",
      "datePlaceholder": "예: 2025년 11월 12일",
      "desktopSimulation": "데스크톱 검색 결과 시뮬레이션",
      "mobileSimulation": "모바일 검색 결과 시뮬레이션",
      "titleFallback": "SEO 제목이 여기에 표시됩니다",
      "descFallback": "메타 설명 미리보기가 여기에 표시됩니다."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "기술 SEO를 위한 깔끔한 URL 슬러그 만드는 방법!\n2026년 최고의 카페 및 생산성 도구 10가지\nXML 사이트맵 및 Robots.txt 완벽 체크리스트",
      "domainLabel": "기본 도메인 / 하위 폴더(전체 URL 미리보기용)",
      "separatorLabel": "단어 구분자",
      "hyphenOption": "하이픈(-) — Google 권장",
      "underscoreOption": "밑줄(_)",
      "maxLengthLabel": "최대 슬러그 길이({n}자)",
      "stripStopWords": "선택 사항: 영어 불용어 제거(a, the, and, of, in, to)",
      "trailingSlash": "끝에 슬래시 추가(/)",
      "titlesLabel": "페이지 제목 / 제목(일괄 처리 시 한 줄에 하나씩)",
      "generatedLabel": "생성된 SEO 슬러그({n}개)",
      "copyAllSlugs": "모든 슬러그 복사",
      "copyAllUrls": "모든 전체 URL 복사",
      "originalTitleHeader": "원본 제목",
      "slugUrlHeader": "SEO 슬러그 및 전체 URL",
      "copyHeader": "복사"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "<lastmod> 날짜(선택 사항)",
      "changefreqLabel": "<changefreq> 힌트",
      "priorityLabel": "기본 <priority>",
      "omitTag": "태그 생략",
      "deduplicateLabel": "정확히 동일한 URL 중복 제거",
      "urlsLabel": "Canonical URL(한 줄에 하나의 전체 https:// URL)",
      "skippedInvalid": "유효하지 않은 URL 행 {n}개를 건너뛰었습니다: ",
      "generatedLabel": "생성된 sitemap.xml({n}개 URL)",
      "copyXml": "XML 복사",
      "downloadXml": ".xml 다운로드",
      "generatedAria": "생성된 XML 사이트맵"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "빠른 브라우저 도구를 만드는 메이커와 팀을 위해 개발합니다.   \n\n매주 화요일마다 새로운 워크플로 팁을 공유합니다.\n\n아래 링크에서 무료 유틸리티를 사용해 보세요!",
      "modeBraille": "보이지 않는 공백(⠀ U+2800)",
      "modeDot": "최소 점 공백(.)",
      "modeClean": "줄 끝의 깔끔한 공백만 유지",
      "collapse": "실수로 들어간 이중 공백 합치기",
      "labelRaw": "캡션 또는 바이오 초안",
      "phRaw": "단락 나누기가 필요한 곳에 빈 줄을 넣어 캡션을 작성하세요...",
      "tip": "팁: 소셜 앱은 위 줄 끝에 공백이 없으면 빈 단락을 없애는 경우가 많습니다.",
      "labelOut": "바로 붙여넣을 수 있는 결과",
      "copyFormatted": "형식 적용된 캡션 복사",
      "charsLabel": "문자:",
      "linesLabel": "줄:",
      "blankLabel": "유지된 빈 줄:",
      "fitsBio": "인스타그램 바이오(150자)에 맞음",
      "captionLength": "캡션 길이(바이오 제한 150자 초과)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "문제 → 자극 → 해결(PAS)",
        "tutorial": "실행 가능한 3단계 분석",
        "bab": "이전 → 이후 → 연결",
        "checklist": "출시 / 감사 체크리스트",
        "myth": "흔한 오해 vs. 실제 현실"
      },
      "frameworkDescriptions": {
        "pas": "워크플로 해결책을 제시하기 전에 구체적인 불편함을 강조합니다.",
        "tutorial": "번호가 매겨진 사용법 구조로, 링크드인 캐러셀과 저장된 게시물에 적합합니다.",
        "bab": "기존의 불편함과 최적화된 결과를 대조합니다.",
        "checklist": "크리에이터가 기억할 수 있는 명확한 점검 목록입니다.",
        "myth": "직접적이고 간결한 대안으로 오래된 조언에 의문을 제기합니다."
      },
      "frameworkLabels": {
        "fixesHeading": "실제로 도움이 되는 것:",
        "beforeLabel": "이전: ",
        "afterLabel": "이후: ",
        "bridgeHeading": "연결:",
        "mythLabel": "흔한 오해: ",
        "worksHeading": "실제로 통하는 것:"
      },
      "sampleHook": "캠페인 링크를 수동으로 형식화하는 데 몇 시간을 낭비하지 마세요.",
      "sampleContext": "일관되지 않은 UTM 매개변수와 잘못된 바이오 간격이 분석 보고서를 조용히 왜곡합니다.",
      "samplePoints": "UTM 태그 utm_source와 utm_medium을 소문자로 표준화\n게시하기 전에 줄 바꿈 확인\n줄 끝에 공백 없이 깔끔한 단락 나누기 사용",
      "sampleCta": "다음 제품 출시를 위해 이 체크리스트를 저장하세요.",
      "infoTitle": "결정적 템플릿 생성:",
      "infoBody": "이 도구는 브라우저에서 직접 구조화된 카피라이팅 프레임워크를 사용합니다. AI 모델이나 외부 API를 사용하거나 암시하지 않습니다.",
      "labelHook": "시작 훅(처음 1–2줄)",
      "labelContext": "맥락 / 문제 제기",
      "labelPoints": "핵심 요점(한 줄에 하나씩)",
      "labelCta": "행동 유도 문구(CTA)",
      "labelTags": "해시태그",
      "previewTitle": "형식 적용된 캡션 미리보기",
      "copyCaption": "캡션 복사",
      "charsLabel": "문자:",
      "wordsLabel": "단어:",
      "fits": "맞음",
      "threadNeeded": "스레드 필요",
      "tooLong": "너무 김"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "접근성을 위한 형식 및 대소문자",
      "optCamel": "PascalCase(#CamelCase — 스크린 리더 친화적)",
      "optLower": "모두 소문자(#소문자)",
      "optPreserve": "원본 대소문자 유지",
      "outLabel": "출력 레이아웃",
      "optInline": "한 줄(공백으로 구분)",
      "optNewline": "한 줄에 하나의 해시태그",
      "optDots": "캡션 구분자(.\n.\n.)",
      "dedupe": "중복 해시태그 제거",
      "labelRaw": "키워드 또는 지저분한 해시태그(쉼표, 공백, 줄로 구분)",
      "labelResult": "깔끔한 해시태그 그룹",
      "copyHashtags": "해시태그 복사",
      "statClean": "깔끔한 해시태그",
      "statDupes": "제거된 중복",
      "statIgMax": "인스타그램 최대(30개)",
      "statWithin": "인스타그램 30개 제한 이내",
      "statExceeds": "30개 태그 제한 초과",
      "statChars": "출력 문자 수"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15자 · 문자, 숫자, 밑줄",
        "instagram": "1–30자 · 문자, 숫자, 마침표, 밑줄",
        "tiktok": "2–24자 · 문자, 숫자, 밑줄, 마침표",
        "youtube": "3–30자 · 문자, 숫자, _, -, .",
        "threads": "1–30자 · 인스타그램과 공유하는 네임스페이스",
        "github": "1–39자 · 영숫자 및 단일 하이픈"
      },
      "infoTitle": "규칙 검사기 및 직접 확인 링크:",
      "infoBodyBefore": "가용성을 추측하지 않고 핸들 구문과 문자 제한을 오프라인으로 검사합니다. 플랫폼의",
      "infoEm": "프로필 URL 열기",
      "infoBodyAfter": " 링크를 클릭해 실시간 상태를 직접 확인하세요.",
      "labelBrand": "브랜드, 프로젝트, 크리에이터 이름",
      "phBrand": "예: Utility Hub",
      "labelActive": "검사할 활성 핸들",
      "copyAt": "@ 복사",
      "variationsTitle": "통일된 핸들 변형:",
      "thPlatform": "플랫폼",
      "thRules": "형식 규칙",
      "thStatus": "구문 상태",
      "thCheck": "수동 확인",
      "valid": "유효한 형식",
      "invalid": "유효하지 않은 구문/길이",
      "checkUrl": "URL 확인"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "굵게(산세리프)",
        "sans-italic": "기울임(산세리프)",
        "sans-bold-italic": "굵은 기울임(산세리프)",
        "serif-bold": "굵게(세리프)",
        "monospace": "모노스페이스",
        "double-struck": "이중선(칠판체)",
        "script-bold": "스크립트 굵게",
        "fraktur-bold": "프락투어 굵게",
        "small-caps": "스몰캡스",
        "fullwidth": "전각(미학)"
      },
      "styleNotes": {
        "sans-bold": "바이오 제목과 게시물 훅에 높은 가독성",
        "sans-italic": "캡션에서 은은한 강조",
        "sans-bold-italic": "강한 콜아웃과 섹션 구분",
        "serif-bold": "에디토리얼 스타일의 강조",
        "monospace": "코드 핸들, 데이터, 기술 태그",
        "double-struck": "디스플레이 강조",
        "script-bold": "장식적인 바이오 서명",
        "fraktur-bold": "고딕 디스플레이 서체",
        "small-caps": "대문자 스타일의 깔끔한 프로필 레이블",
        "fullwidth": "넓게 배치된 레트로 소셜 제목"
      },
      "sampleText": "새로운 크리에이터 툴킷 2025",
      "accessibilityTitle": "접근성 참고:",
      "accessibilityBody": "스타일이 적용된 유니코드 문자는 수학 기호 블록에 속하므로 스크린 리더가 글자별로 읽거나 건너뛸 수 있고, 일부 검색 인덱스는 이를 무시합니다. 전체 단락이 아닌 짧은 하이라이트에만 아껴서 사용하세요.",
      "labelInput": "스타일을 적용할 텍스트",
      "placeholder": "짧은 제목, 바이오 문구, CTA를 입력하세요...",
      "previewEmpty": "미리보기"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "인스타그램 바이오",
        "linkedinPost": "링크드인 게시물",
        "newsletter": "뉴스레터",
        "youtubeDescription": "유튜브 설명"
      },
      "presetsLabel": "빠른 채널 프리셋:",
      "errorEmpty": "대상 웹사이트 URL을 입력하세요.",
      "errorInvalid": "유효한 대상 URL을 입력하세요(예: https://example.com/landing).",
      "labelUrl": "웹사이트 대상 URL *",
      "labelSource": "캠페인 소스(utm_source) *",
      "phSource": "예: instagram, newsletter, google",
      "labelMedium": "캠페인 매체(utm_medium) *",
      "phMedium": "예: social, cpc, email, video",
      "labelCampaign": "캠페인 이름(utm_campaign)",
      "phCampaign": "예: spring_launch",
      "labelContent": "캠페인 콘텐츠(utm_content)",
      "phContent": "예: hero_banner, bio_button",
      "labelTerm": "캠페인 용어(utm_term)",
      "phTerm": "선택 사항: 유료 키워드 또는 오디언스 태그",
      "normalizeLabel": "소문자를 강제하고 공백을 밑줄(`_`)로 변환",
      "generatedTitle": "생성된 캠페인 URL",
      "copyUtm": "UTM URL 복사",
      "thParam": "쿼리 매개변수",
      "thValue": "정규화된 값"
    }
  },
  'add-pdf-page-numbers': {
    strings: {
      errStart: '시작 페이지 번호는 1 이상의 정수여야 합니다.',
      stampedSuccess: (n: number, size: string) => `${n}페이지에 페이지 번호를 찍었습니다(${size}).`,
      pageOfLabel: (cur: number, total: number) => `전체 ${total}페이지 중 ${cur}페이지`,
      dropTitleEmpty: '페이지 번호를 추가할 PDF 파일 선택',
      dropTitleFile: (name: string, pages: number) => `${name}(${pages}페이지)`,
      dropSub: '보고서, 계약서, 자료에 선명한 벡터 페이지 레이블을 삽입합니다',
      labelPos: '위치',
      optBottomCenter: '하단 가운데',
      optBottomRight: '하단 오른쪽',
      optBottomLeft: '하단 왼쪽',
      optTopRight: '상단 오른쪽',
      labelFmt: '레이블 형식',
      optPageOf: '1 / N 페이지',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: '시작 번호',
      labelSize: '글꼴 크기(pt)',
      opt9: '9pt(은은함)',
      opt11: '11pt(표준)',
      opt14: '14pt(큼)',
      skipCover: '표지 건너뛰기(2페이지부터 번호 매기기)',
      numbering: '페이지에 번호를 매기는 중...',
      addBtn: '페이지 번호 추가 및 다운로드',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `이미지 "${name}"을(를) 디코딩할 수 없습니다.`,
      errCanvas: 'Canvas 2D 컨텍스트를 사용할 수 없습니다.',
      errConvert: (name: string) => `이미지 "${name}"을(를) PNG로 변환할 수 없습니다.`,
      errNotImage: (name: string) => `"${name}"은(는) 지원되는 이미지 파일이 아닙니다(PNG, JPG, WebP).`,
      errRead: (name: string) => `"${name}"을(를) 읽을 수 없습니다.`,
      errLoad: '이미지를 불러올 수 없습니다.',
      errEmpty: '먼저 이미지를 하나 이상 추가하세요.',
      errBuild: '이미지를 PDF로 변환할 수 없습니다.',
      createdSuccess: (n: number, size: string) => `${n}페이지 PDF를 만들었습니다(${size}).`,
      dropTitle: 'PNG, JPG, WebP 이미지 선택',
      dropSub: '스크린샷, 스캔, 사진을 로컬에서 하나의 PDF로 변환합니다',
      labelSize: 'PDF 페이지 크기',
      optA4: 'A4 세로(210 × 297mm)',
      optLetter: 'US Letter(8.5 × 11인치)',
      optFit: '정확한 이미지 치수',
      labelMargin: '페이지 여백',
      optMargin0: '여백 없음(0pt)',
      optMargin24: '표준 여백(24pt)',
      optMargin48: '넓은 여백(48pt)',
      labelOut: '출력 파일 이름',
      moveUp: (name: string) => `${name} 위로 이동`,
      moveDown: (name: string) => `${name} 아래로 이동`,
      removeFile: (name: string) => `${name} 삭제`,
      building: 'PDF를 만드는 중...',
      convertBtn: (n: number) => `${n}개 이미지를 PDF로 변환`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: '선택한 PDF 파일을 읽을 수 없습니다.',
      errMin2: '병합하려면 PDF 파일을 최소 두 개 추가하세요.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n}개 PDF를 병합했습니다(${pages}페이지, ${size}).`,
      dropValidating: 'PDF 파일을 확인하는 중...',
      dropTitle: '여러 PDF 파일을 선택하거나 드롭하세요',
      dropSub: '100% 브라우저 기반 병합(pdf-lib 사용) · 암호화되지 않은 PDF만 · 업로드 없음',
      filesQueued: '대기 중인 파일',
      totalPagesLabel: '전체 페이지',
      combinedSize: '입력 전체 크기',
      clearQueue: '대기열 비우기',
      pageSingular: '페이지',
      pagePlural: '페이지',
      moveUp: (name: string) => `${name} 위로 이동`,
      moveDown: (name: string) => `${name} 아래로 이동`,
      removeFile: (name: string) => `${name} 삭제`,
      outName: '출력 파일 이름',
      merging: 'PDF를 병합하는 중...',
      mergeBtn: (n: number) => `${n}개 PDF 병합 및 다운로드`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: '편집 가능한 메타데이터 필드를 비웠습니다. 변경 사항을 적용하려면 “메타데이터 저장 및 PDF 다운로드”를 클릭하세요.',
      savedSuccess: (size: string) => `업데이트된 PDF 메타데이터를 저장했습니다(${size}).`,
      dropTitleEmpty: '메타데이터를 확인하거나 편집할 PDF 파일 선택',
      dropTitleFile: (name: string, pages: number, size: string) => `${name}(${pages}페이지 · ${size})`,
      dropSub: '문서 속성을 확인하고, 작성자 및 소프트웨어 정보를 정리하거나 깔끔한 SEO 제목을 설정하세요',
      labelTitle: '문서 제목',
      labelAuthor: '작성자',
      labelSubject: '주제 / 요약',
      labelKeywords: '키워드(쉼표로 구분)',
      labelCreator: '제작 애플리케이션',
      labelProducer: 'PDF 제작자',
      saving: 'PDF를 저장하는 중...',
      saveBtn: '메타데이터 저장 및 PDF 다운로드',
      stripBtn: '모든 메타데이터 필드 제거',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: '회전할 페이지를 찾을 수 없습니다.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${b}페이지 중 ${a}페이지를 시계 방향으로 ${deg}° 회전했습니다(${size}).`,
      dropTitleEmpty: '페이지를 회전할 PDF 파일 선택',
      dropTitleFile: (name: string, pages: number) => `${name}(${pages}페이지)`,
      dropSub: '모든 페이지 또는 특정 페이지 범위를 로컬에서 회전합니다. 서버 업로드 없음',
      labelAngle: '회전 각도',
      opt90: '시계 방향 90°(오른쪽)',
      opt270: '반시계 방향 90°(왼쪽 / 270°)',
      opt180: '180° 뒤집기',
      labelScope: '적용 대상',
      optAll: (n: number) => `모든 페이지(${n}개)`,
      optRange: '특정 페이지 범위',
      optOdd: '홀수 페이지만',
      optEven: '짝수 페이지만',
      labelRangeInput: (n: number) => `페이지 번호 / 범위(1–${n})`,
      phRange: '예: 1, 3-5',
      rotating: '페이지를 회전하는 중...',
      rotateBtn: '회전 적용 및 PDF 다운로드',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- 페이지 ${n} ---`,
      dropExtracting: 'PDF 텍스트 레이어를 추출하는 중...',
      dropTitleFile: (name: string, pages: number) => `${name}(${pages}페이지)`,
      dropTitleEmpty: '텍스트를 추출할 텍스트 기반 PDF 파일 선택',
      dropSub: 'PDF.js로 내장된 유니코드 텍스트를 로컬에서 추출합니다 · 서버 업로드 없음',
      noTextTitle: '선택 가능한 텍스트 레이어를 찾을 수 없습니다.',
      noTextBody:
        '이 PDF는 내장된 텍스트 레이어 대신 스캔한 이미지나 변환된 벡터 경로를 포함하고 있는 것으로 보입니다. 클라이언트 측 광학 문자 인식(OCR)은 오프라인에서 수행되지 않습니다.',
      markersLabelBefore: '페이지 머리글 표시 삽입(',
      markersCode: '--- 페이지 N ---',
      markersLabelAfter: ')',
      copyText: '텍스트 복사',
      downloadTxt: '.txt 다운로드',
      outputAria: '추출된 PDF 텍스트(출력)',
      pagesScanned: '스캔한 페이지:',
      wordsExtracted: '추출된 단어:',
      textSize: '텍스트 크기:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: '브라우저 Canvas 메모리를 빠르고 반응성 있게 유지하려면 한 번에 최대 20페이지까지만 렌더링하세요.',
      errCanvas: 'Canvas 2D 컨텍스트를 사용할 수 없습니다.',
      dropTitleEmpty: '이미지로 렌더링할 PDF 파일 선택',
      dropTitleFile: (name: string, pages: number, size: string) => `${name}(${pages}페이지 · ${size})`,
      dropSub: 'PDF.js Canvas로 로컬 렌더링 · PNG 또는 JPG로 출력',
      labelRange: '페이지(“모두” 또는 1-4, 6과 같은 범위)',
      labelFormat: '이미지 형식',
      optPng: 'PNG(무손실 / 선명한 텍스트)',
      optJpg: 'JPG(작은 용량 / 사진에 적합)',
      labelScale: '렌더링 해상도',
      optScale1: '1.0×(72 DPI 빠른 미리보기)',
      optScale15: '1.5×(108 DPI 표준)',
      optScale2: '2.0×(144 DPI 선명)',
      rendering: 'PDF 페이지를 렌더링하는 중...',
      renderBtn: 'PDF 페이지를 이미지로 렌더링',
      pageAlt: (n: number) => `${n}페이지 미리보기`,
      pageLabel: (n: number, w: number, h: number) => `${n}페이지 · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: '중립 회색',
        indigo: '브랜드 인디고',
        red: '스탬프 빨강',
      },
      defaultWatermark: 'CONFIDENTIAL',
      errEmpty: 'PDF를 만들기 전에 먼저 워터마크 텍스트를 입력하세요.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `워터마크 "${text}"을(를) ${n}페이지에 적용했습니다(${size}).`,
      dropTitleEmpty: '워터마크를 추가할 PDF 파일 선택',
      dropTitleFile: (name: string, pages: number) => `${name}(${pages}페이지)`,
      dropSub: 'pdf-lib로 선명한 벡터 텍스트 스탬프를 로컬에 삽입합니다',
      labelText: '워터마크 텍스트',
      phText: '기밀 / 초안 / 내부 전용',
      labelColor: '스탬프 색상',
      firstPageOnly: '첫 페이지만',
      labelSize: '글꼴 크기:',
      ptSuffix: (n: number) => `${n}pt`,
      labelOpacity: '불투명도:',
      labelAngle: '회전:',
      applying: '워터마크를 추가하는 중...',
      applyBtn: '워터마크 적용 및 다운로드',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'PDF는 최소 1페이지를 유지해야 합니다.',
      savedSuccess: (n: number, size: string) => `업데이트된 PDF(${n}페이지)를 저장했습니다(${size}).`,
      loading: 'PDF 페이지와 미리보기를 불러오는 중...',
      dropTitleFile: (name: string, n: number) => `${name}(활성 ${n}페이지)`,
      dropTitleEmpty: '페이지를 다시 정렬하거나 삭제할 PDF 파일 선택',
      dropSub: '페이지를 로컬에서 이동, 복제하거나 원하지 않는 페이지를 삭제합니다',
      outCount: '출력 페이지 수:',
      saving: 'PDF를 저장하는 중...',
      saveBtn: '다시 정렬된 PDF 저장',
      thumbAlt: (n: number) => `원본 페이지 ${n}`,
      thumbFallback: (n: number) => `원본 ${n}쪽`,
      posLabel: (n: number) => `위치 #${n}`,
      origLabel: (n: number) => `(원본 ${n})`,
      moveEarlierTitle: '앞으로 이동',
      moveEarlierAria: (n: number) => `위치 ${n}을(를) 앞으로 이동`,
      moveLaterTitle: '뒤로 이동',
      moveLaterAria: (n: number) => `위치 ${n}을(를) 뒤로 이동`,
      dupTitle: '페이지 복제',
      dupAria: (n: number) => `위치 ${n}의 페이지 복제`,
      delTitle: '페이지 삭제',
      delAria: (n: number) => `위치 ${n}의 페이지 삭제`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `개별 페이지로 나누면 페이지마다 파일 하나가 다운로드됩니다. 25페이지를 초과하는 문서의 경우(${n}페이지) 브라우저가 대량 다운로드를 차단하지 않도록 대신 범위를 추출하세요.`,
      exportedAll: (n: number) => `${n}개의 1페이지 PDF 파일을 내보냈습니다.`,
      errNoMatch: '이 선택과 일치하는 페이지가 없습니다(예: “짝수 페이지”는 최소 2페이지가 필요합니다).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${b}페이지 중 ${a}페이지를 추출했습니다(${size}).`,
      dropTitleEmpty: '나누거나 추출할 PDF 파일 선택',
      dropTitleFile: (name: string, pages: number, size: string) => `${name}(${pages}페이지 · ${size})`,
      dropSub: '메모리에서 로컬로 처리 · 클릭하여 문서 교체',
      modeRange: '페이지 범위 추출',
      modeOdd: '홀수 페이지만',
      modeEven: '짝수 페이지만',
      modeBurst: '모든 개별 페이지 추출',
      labelRange: (n: number) => `추출할 페이지(1–${n})`,
      phRange: '예: 1-3, 5, 8-10',
      rangeHintBefore: '쉼표와 하이픈을 사용하세요(예: ',
      rangeHintAfter: ').',
      extracting: 'PDF를 추출하는 중...',
      splitBtn: '나누기 및 PDF 다운로드',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: '웹사이트 URL',
      tabText: '일반 텍스트',
      tabWifi: 'Wi-Fi 네트워크',
      tabEmail: '이메일 링크',
      tabPhone: '전화번호',
      labelUrl: '대상 URL',
      labelText: '텍스트 내용',
      labelSsid: '네트워크 이름(SSID)',
      labelSecurity: '보안 유형',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: '개방(비밀번호 없음)',
      labelWifiPass: 'Wi-Fi 비밀번호',
      hiddenSsid: '숨겨진 SSID 네트워크',
      labelEmailTo: '받는 사람 이메일',
      labelEmailSubject: '제목(선택 사항)',
      labelPhone: '전화번호(E.164 형식 권장)',
      sizeLabel: (size: number) => `크기(${size}px)`,
      labelEc: '오류 정정',
      labelFg: '전경',
      labelBg: '배경',
      quietZone: '여백 영역:',
      modulesLabel: (margin: number) => `${margin}개 모듈`,
      encodedPayload: '인코딩된 페이로드 문자열',
      copyPayload: '페이로드 복사',
      emptyError: '스캔 가능한 QR 코드를 만들려면 위에 내용을 입력하세요.',
      encodeError: 'QR 페이로드를 인코딩할 수 없습니다.',
      qrAlt: '생성된 스캔 가능한 QR 코드',
      downloadPng: 'PNG 다운로드',
      downloadSvg: 'SVG 다운로드',
      copySvg: 'SVG 복사',
      sampleText: 'UtilityFlow에 오신 것을 환영합니다!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: '표준 게시물',
        profileBio: '프로필 바이오',
        caption: '캡션',
        feedPost: '피드 게시물',
        videoCaption: '동영상 캡션',
        post: '게시물',
        videoTitle: '동영상 제목',
        description: '설명',
      },
      sampleText:
        '더 빠르게 전달하는 것은 매일 작은 개선에서 시작됩니다.\n\nhttps://utilityflow.online/tools/ 에서 브라우저 기반 크리에이터 유틸리티를 사용해 보세요. 가입이 필요 없습니다.\n\n#CreatorTools #Workflow',
      labelInput: '소셜 게시물 / 바이오 초안',
      copyDraft: '초안 복사',
      placeholder: '소셜 캡션, 게시물, 바이오, YouTube 제목을 작성하거나 붙여넣으세요...',
      charsLabel: '문자:',
      wordsLabel: '단어:',
      hashtagsLabel: '해시태그:',
      mentionsLabel: '멘션:',
      urlsLabel: '감지된 URL:',
      urlsWeighted: '(X에서 23자로 가중)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)}자 초과`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)}자 남음`,
      foldLabel: (n: number) => `접기 지점 ~${n}자`,
      foldTitle: '피드 잘림 / “더 보기” 접기 미리보기',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `“더 보기”를 누르기 전에 독자가 보게 될 내용을 미리 봅니다(${platform} ${surface} 기준 ${limit}자).`,
      selectAria: '잘림 미리보기용 플랫폼 선택',
      previewEmpty: '미리보기가 여기에 표시됩니다...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: '추적 없이 85개의 빠른 브라우저 유틸리티를 만든 방법',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '조회수 24,000회 · 2일 전',
      errNotImage: 'PNG, JPG, WebP 이미지 파일을 선택하세요.',
      errDecode: '이 이미지 파일을 브라우저에서 디코딩할 수 없습니다.',
      previewEyebrow: '1280 × 720 미리보기',
      emptyThumb: '피드에서 가독성을 확인하려면 썸네일 이미지를 업로드하세요',
      thumbAlt: '업로드한 썸네일 미리보기',
      safeZoneTitle: '타임스탬프 배지 겹침 영역',
      chooseThumb: '로컬 썸네일 선택(PNG / JPG / WebP)',
      replaceThumb: (name: string) => `교체: ${name}`,
      recommended: '1280×720(16:9) 권장, 2MB 미만 · 업로드되지 않음',
      diagTitle: '이미지 사양 진단',
      dimLabel: '크기',
      dimHdOk: '(HD 적합)',
      dimUnder: '(1280px 미만)',
      aspectLabel: '종횡비',
      aspectMatch: '16:9 일치',
      aspectNo: '16:9가 아님(잘리거나 레터박스가 될 수 있음)',
      sizeLabel: '파일 크기',
      sizeOk: '(2MB 미만 적합)',
      sizeOver: '(2MB 제한 초과)',
      titleLabel: (len: number) => `동영상 제목(${len}/100자 · 모바일에서 약 60자 표시)`,
      channelLabel: '채널 이름',
      durationLabel: '재생 시간',
      darkMode: '다크 모드 피드 미리보기',
      safeZone: '타임스탬프 모서리 영역 강조',
      desktopCard: '데스크톱 홈 피드 카드',
      sidebar: '데스크톱 시청 페이지 사이드바(컴팩트 추천)',
      untitled: '제목 없는 동영상',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: '소개 및 개요' },
        { id: 2, time: '01:15', title: '핵심 아키텍처 설정' },
        { id: 3, time: '04:40', title: '실시간 데모 및 흔한 함정' },
        { id: 4, time: '08:20', title: '요약 및 다음 단계' },
      ],
      newChapter: (n: number) => `챕터 ${n}`,
      defaultChapterTitle: '챕터',
      warnInvalid: '하나 이상의 타임스탬프 형식이 유효하지 않습니다(MM:SS 또는 HH:MM:SS 사용).',
      warnMin3: 'YouTube에서 동영상 챕터를 활성화하려면 오름차순 타임스탬프가 최소 3개 필요합니다.',
      warnFirst: 'YouTube에서 챕터를 인식하려면 첫 챕터가 00:00에 시작해야 합니다.',
      warnOrder: '챕터가 시간 순서가 아닙니다(“시간순 정렬”을 클릭하세요).',
      warnShort: (title: string) =>
        `챕터 “${title}”이(가) 이전 챕터로부터 10초 미만입니다(YouTube 최소값은 10초입니다).`,
      labelUrl: 'YouTube 동영상 URL 또는 동영상 ID(직접 `?t=` 딥 링크용)',
      heading: '동영상 챕터',
      sortBtn: '시간순 정렬',
      addBtn: '챕터 추가',
      tsAria: (n: number) => `챕터 ${n}의 타임스탬프`,
      titleAria: (n: number) => `챕터 ${n}의 제목`,
      phTitle: '챕터 제목',
      removeAria: (n: number) => `챕터 ${n} 삭제`,
      specTitle: 'YouTube 챕터 사양 검사:',
      descBlock: '설명 챕터 블록',
      copyChapters: '챕터 복사',
      emptyChapters: '설명 블록을 만들려면 위에 챕터를 추가하세요.',
      shareTitle: '타임스탬프 공유 링크',
      videoIdLabel: (id: string) => `(동영상 ID: ${id})`,
      noVideoId: '(위에 유효한 YouTube URL 입력)',
      noVideoHint: '각 챕터마다 클릭 가능한 `?t=` 이동 링크를 만들려면 유효한 youtube.com 또는 youtu.be URL을 붙여넣으세요.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: '파일이 선택되지 않았습니다.',
      notPdf: (name: string) => `"${name}"은(는) PDF 파일이 아닌 것으로 보입니다.`,
      empty: (name: string) => `"${name}"은(는) 비어 있거나 불완전합니다.`,
      noHeader: (name: string) =>
        `"${name}"에 유효한 %PDF 헤더가 없어 처리할 수 없습니다.`,
      enterRanges: '페이지 번호나 범위를 입력하세요(예: “1-3, 5”).',
      rangeOutside: (token: string, total: number) =>
        `범위 “${token}”이(가) 문서 페이지 범위를 벗어났습니다(1–${total}).`,
      rangeReversed: (token: string) =>
        `범위 “${token}”: 시작 페이지가 종료 페이지보다 큽니다.`,
      pageMissing: (page: number, total: number) =>
        `페이지 ${page}이(가) 존재하지 않습니다(문서에는 ${total}페이지가 있습니다).`,
      invalidSyntax: (token: string) =>
        `유효하지 않은 페이지 구문 “${token}”. “1-3, 5”와 같은 숫자와 범위를 사용하세요.`,
      encrypted:
        '이 PDF는 암호화되었거나 비밀번호로 보호되어 있습니다. 로컬로 처리하기 전에 잠금을 해제하세요.',
      unable: 'PDF 파일을 처리할 수 없습니다.',
      allKeywords: ['all', '모두', '전체'],
    },
  },
};
