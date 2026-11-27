import type { ToolLocaleOverride } from '../../types';

/**
 * Korean overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Every tool: slug, name, shortDescription, keywords (9), seo, intro,
 * instructions (6), examples (2), benefits (4), useCases (4), faqs (20).
 * Slugs are Revised Romanization of the Korean tool names, unique,
 * lowercase, hyphenated, and do not collide with English slugs or
 * reserved paths.
 */
export const KO_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'daneo-kaunteo',
    name: '단어 카운터',
    shortDescription:
      '단어, 문자, 문장, 단락, 읽기 시간, 가장 자주 반복되는 키워드를 즉시 셀 수 있습니다.',
    keywords: [
      '단어 카운터',
      '단어 수 세기',
      '온라인 단어 수 세기',
      '글자 수 세기',
      '읽기 시간 계산기',
      '문장 수 세기',
      '단락 수 세기',
      '말하기 시간 계산',
      '무료 단어 카운터',
    ],
    seo: {
      title: '단어 카운터: 단어 수와 읽기·말하기 시간 측정 무료 온라인 도구 | UtilityFlow',
      description:
        '단어, 문자, 문장, 단락 수를 즉시 세고 읽기 시간과 말하기 시간 예상치를 확인하세요. 모든 계산은 브라우저에서 로컬로 이루어지며 업로드가 필요 없고 회원가입도 없습니다. 에세이, 블로그 글, 보고서 초안의 분량을 조절할 때 유용하며, 자주 반복되는 단어도 함께 확인할 수 있습니다.',
      primaryKeyword: '단어 카운터',
      secondaryKeywords: ['온라인 단어 수 세기', '단어 수 측정 도구', '읽기 시간 계산', '단락 수 세기'],
      longTailKeywords: ['온라인 무료 단어 문자 수 세기', '텍스트 읽기 말하기 시간 계산', '업로드 없이 브라우저에서 단어 세기', '에세이 단어 수 확인 온라인'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '정확한 단어 수와 문자 수, 문장 밀도, 읽기 및 말하기 예상 시간을 실시간으로 측정하세요. 초안을 어떤 서버에도 업로드하지 않습니다.',
  },
  'character-counter': {
    slug: 'munja-su-kaunteo',
    name: '문자 수 카운터',
    shortDescription:
      '공백 포함·제외 문자 수, UTF-8 바이트, 소셜 미디어와 SEO 문자 제한을 정확하게 측정합니다.',
    keywords: [
      '문자 수 카운터',
      '글자 수 세기',
      '메타 설명 길이 검사',
      'UTF-8 바이트 계산',
      '문자 제한 도구',
      '온라인 문자 수 세기',
      '텍스트 길이 검사',
      'SEO 제목 길이 검사',
      'SMS 문자 수 세기',
    ],
    seo: {
      title: '문자 수 카운터: 제한과 UTF-8 바이트 크기를 확인하는 무료 도구 | UtilityFlow',
      description:
        '공백 포함·제외 문자 수, 알파벳, 숫자, UTF-8 바이트를 세고 SEO와 소셜 미디어 제한에 대한 진행 상황을 실시간으로 확인하세요. 모든 작업은 브라우저에서 안전하게 이루어집니다. 메타 제목과 설명 길이를 맞출 때 유용하며, 문자 제한을 초과하면 바로 알려줍니다.',
      primaryKeyword: '문자 수 카운터',
      secondaryKeywords: ['온라인 문자 수 세기', '문자열 길이 계산기', '메타 제목 길이', '텍스트 길이 검사'],
      longTailKeywords: ['공백 제외 문자 수 온라인 세기', 'SEO 메타 설명 문자 제한 확인', '텍스트 UTF-8 바이트 길이 계산', '트위터 문자 제한 온라인 확인'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '정확한 문자 수, 알파벳, 숫자, 공백, UTF-8 바이트 크기를 추적하면서 SEO 스니펫, SMS 구간, 소셜 미디어 피드에 대한 실시간 진행 막대를 확인하세요.',
  },
  'case-converter': {
    slug: 'daesomunja-byeonhwangi',
    name: '대소문자 변환기',
    shortDescription:
      '텍스트를 대문자, 소문자, Title Case, Sentence case, camelCase, snake_case, kebab-case 간에 변환합니다.',
    keywords: [
      '대소문자 변환기',
      '타이틀 케이스 변환',
      '대문자를 소문자로',
      '카멜케이스 변환기',
      '스네이크 케이스 생성기',
      '대문자 변환기',
      '소문자 변환기',
      '문장 케이스 변환기',
      '파스칼케이스 변환기',
    ],
    seo: {
      title: '대소문자 변환기: Title·문장·camelCase 무료 변환 도구 | UtilityFlow',
      description:
        '텍스트를 대문자, 소문자, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case 간에 한 번의 클릭으로 변환하세요. 모든 작업은 브라우저에서 로컬로 이루어집니다. 제목과 변수 이름을 정리할 때 유용합니다.',
      primaryKeyword: '대소문자 변환기',
      secondaryKeywords: ['타이틀 케이스 변환기', '문장 케이스 도구', '텍스트 대소문자 변경', '대문자 소문자 변환'],
      longTailKeywords: ['대문자 텍스트를 문장 케이스로 변경', '문자열을 카멜케이스와 스네이크 케이스로 변환', '온라인 타이틀 케이스 대문자 도구', '대문자를 소문자로 무료 온라인 변환'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Caps Lock이 켜진 채 잘못 입력한 텍스트를 고치고, 기사 제목을 Title Case로 표준화하거나, 변수 식별자를 camelCase, PascalCase, snake_case, kebab-case로 한 번의 클릭으로 포맷하세요.',
  },
  'remove-duplicate-lines': {
    slug: 'jungbok-jul-jegeogi',
    name: '중복 줄 제거기',
    shortDescription:
      '대소문자 구분, 공백 다듬기, 알파벳 정렬 옵션을 이용해 목록과 로그에서 중복을 제거합니다.',
    keywords: [
      '중복 줄 제거',
      '온라인 중복 목록 제거',
      '고유 줄 필터',
      '반복 줄 삭제',
      '목록에서 중복 제거',
      '이메일 목록 중복 제거',
      '온라인 고유 줄',
      '같은 줄 삭제',
      '중복 항목 정리',
    ],
    seo: {
      title: '중복 줄 제거기: 목록을 깔끔하게 정리하는 무료 온라인 정리 도구 | UtilityFlow',
      description:
        '목록, 이메일 내보내기, URL, 로그에서 반복되는 줄을 즉시 제거하세요. 공백 다듬기, 대소문자 구분, 선택 정렬 기능을 브라우저에서 바로 사용할 수 있으며 무료입니다. 이메일 목록과 키워드 내보내기를 정리할 때 유용하며, 입력한 데이터는 브라우저 안에서만 처리됩니다.',
      primaryKeyword: '중복 줄 제거',
      secondaryKeywords: ['중복 줄 제거 도구', '텍스트 목록 중복 제거', '고유 줄 도구', '중복 항목 삭제'],
      longTailKeywords: ['원래 순서 유지하며 중복 줄 제거', '대소문자 구분 없이 이메일 목록 중복 제거', '온라인 텍스트 반복 줄 정리', '온라인 무료 이메일 목록 중복 제거'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '지저분한 목록, 내보낸 키워드, 이메일 주소, 서버 로그를 정리하세요. 공백 다듬기, 대소문자 구분, 출력 순서를 조절하면서 중복 항목을 제거할 수 있습니다.',
  },
  'text-diff-checker': {
    slug: 'tekseuteu-bigyo',
    name: '텍스트 비교 도구',
    shortDescription:
      '두 텍스트 블록을 줄 단위로 비교해 추가, 삭제, 변경되지 않은 줄을 찾습니다.',
    keywords: [
      '텍스트 비교 도구',
      '두 텍스트 비교',
      '온라인 diff 도구',
      '텍스트 비교',
      '두 텍스트 파일 비교',
      '온라인 diff 검사기',
      '텍스트 간 차이 찾기',
      '텍스트 비교 도구 온라인',
      '차이점 확인 도구',
    ],
    seo: {
      title: '텍스트 비교 도구: 두 텍스트의 차이점을 정확하게 확인하는 무료 도구 | UtilityFlow',
      description:
        '두 버전의 텍스트, 코드, 설정 파일을 나란히 비교하고 추가·삭제된 줄을 표시하세요. 업로드 없이 브라우저에서 바로 확인할 수 있으며 회원가입이 필요 없습니다. 계약서와 설정 파일의 변경 사항을 확인할 때 유용하며, 입력한 텍스트는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '텍스트 비교 도구',
      secondaryKeywords: ['온라인 텍스트 비교', 'diff 검사기', '텍스트 차이점 도구', '온라인 diff 도구'],
      longTailKeywords: ['두 텍스트 파일 줄 단위 온라인 비교', '공백 대소문자 무시 diff 검사기', '클라이언트 측 텍스트 비교 도구', '두 문서 버전 온라인 무료 비교'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '기사, 계약 조항, 설정 스니펫의 두 버전 사이에 있는 모든 삽입, 삭제, 편집을 최장 공통 부분 수열(LCS) 기반 줄 단위 diff 엔진으로 찾아내세요.',
  },
  'whitespace-remover': {
    slug: 'gongbaek-jegeogi',
    name: '공백 제거기',
    shortDescription:
      'PDF나 웹에서 복사한 텍스트의 불필요한 공백, 탭, 빈 줄, 원치 않는 줄바꿈을 제거합니다.',
    keywords: [
      '공백 제거기',
      '불필요한 공백 삭제',
      '줄바꿈 제거기',
      '빈 줄 삭제',
      'PDF 복사 텍스트 정리',
      '끝 공백 삭제',
      'PDF 줄바꿈 수정',
      '여러 공백 하나로 합치기',
      '온라인 텍스트 정리',
    ],
    seo: {
      title: '공백 제거기: 불필요한 공백과 줄바꿈을 정리해주는 무료 온라인 도구 | UtilityFlow',
      description:
        '불필요한 공백, 탭, 끝 공백, 빈 줄, 깨진 PDF 줄바꿈을 브라우저에서 제거하세요. 빠르고 무료이며 완전히 비공개이고 회원가입 없이 바로 사용할 수 있습니다. PDF에서 복사한 지저분한 텍스트를 정리할 때 유용하며, 입력한 텍스트는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '공백 제거기',
      secondaryKeywords: ['불필요한 공백 삭제', '줄바꿈 제거', '텍스트 공백 정리', '빈 줄 삭제'],
      longTailKeywords: ['불필요한 공백과 빈 줄 온라인 제거', 'PDF 복사 시 줄바꿈 수정', '탭과 이중 공백을 하나의 공백으로', '복사한 텍스트 끝 공백 삭제'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF, 이메일, 스프레드시트, 웹페이지에서 복사해 붙여넣은 지저분한 텍스트를 정리하세요. 반복되는 공백을 합치고, 탭을 변환하고, 줄 끝을 다듬고, 줄바꿈을 정규화합니다.',
  },
  'sort-lines': {
    slug: 'jul-jeongnyeol',
    name: '줄 정렬 도구',
    shortDescription:
      '목록을 A~Z, Z~A, 자연수 순서(1, 2, 10), 문자 길이 순, 역순, 무작위 섞기로 정렬합니다.',
    keywords: [
      '줄 정렬 도구',
      '알파벳 순 정렬',
      '목록 정렬 온라인',
      'A부터 Z까지 정렬',
      '자연수 정렬',
      '줄 무작위 섞기',
      '텍스트 줄 정렬',
      '역순 정렬',
      '길이 순 정렬',
    ],
    seo: {
      title: '줄 정렬 도구: 알파벳·자연수·무작위 순서로 정렬하는 무료 온라인 도구 | UtilityFlow',
      description:
        '목록을 A~Z, Z~A, 자연수 순서, 문자 길이 순으로 정렬하거나 역순으로 뒤집고 무작위로 섞으세요. 빈 줄 제거와 중복 제거도 함께 브라우저에서 처리할 수 있습니다. 참고 목록과 파일 이름을 정리할 때 유용하며, 입력한 데이터는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '줄 정렬 도구',
      secondaryKeywords: ['알파벳 순 정렬', '온라인 목록 정렬', '자연수 정렬', '줄 무작위 섞기'],
      longTailKeywords: ['텍스트 줄 A부터 Z까지 온라인 정렬', '숫자 포함 목록 자연수 순서 정렬', '줄 역순 무작위 섞기 온라인', '빈 줄 제거하며 목록 정렬'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '참고 목록, 파일 이름, 테스트 케이스를 알파벳 순, 자연수 순, 길이 순으로 정렬하거나 역순으로 뒤집고, 무작위로 섞어 추첨과 퀴즈에 활용하세요.',
  },
  'find-and-replace': {
    slug: 'chatgi-mit-bakkugi',
    name: '찾기 및 바꾸기',
    shortDescription:
      '대소문자 구분, 단어 전체 일치, 정규식 지원으로 텍스트 전체에서 문자열을 찾아 바꿉니다.',
    keywords: [
      '찾기 및 바꾸기',
      '텍스트 찾아 바꾸기',
      '온라인 찾아 바꾸기',
      '정규식 바꾸기',
      '단어 바꾸기 도구',
      '텍스트 일괄 바꾸기',
      '문자열 교체 도구',
      '정규식 캡처 그룹',
      '문서 단어 교체',
    ],
    seo: {
      title: '찾기 및 바꾸기: 정규식과 단어 전체 일치를 지원하는 무료 온라인 도구 | UtilityFlow',
      description:
        '긴 문서에서 브랜드명, URL, 날짜를 대소문자 구분, 단어 전체 일치, 정규식 캡처 그룹으로 찾아 바꾸세요. 일치 개수를 실시간으로 확인하며 브라우저에서 처리합니다. 긴 문서의 브랜드명과 날짜를 바꿀 때 유용하며, 입력한 텍스트는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '찾기 및 바꾸기',
      secondaryKeywords: ['텍스트 찾아 바꾸기', '정규식 바꾸기 도구', '온라인 문자열 교체', '단어 일괄 바꾸기'],
      longTailKeywords: ['정규식 캡처 그룹으로 텍스트 바꾸기', '단어 전체 일치 찾아 바꾸기 온라인', '긴 문서 브랜드명 일괄 교체', '정규식 오류 확인 찾아 바꾸기'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '긴 문서에서 브랜드명, URL, 날짜를 바꾸고, 정규식 캡처 그룹으로 ID나 날짜 형식을 다시 쓰고, 템플릿의 구분자와 자리 표시자를 업데이트하세요.',
  },
  'text-reverser': {
    slug: 'tekseuteu-dwijipgi',
    name: '텍스트 뒤집기',
    shortDescription:
      '전체 텍스트 문자열을 뒤집거나, 단어 순서를 바꾸거나, 단어별 글자를 뒤집거나, 줄 순서를 거꾸로 만듭니다.',
    keywords: [
      '텍스트 뒤집기',
      '문자열 뒤집기',
      '단어 순서 바꾸기',
      '글자 뒤집기 도구',
      '줄 순서 뒤집기',
      '온라인 텍스트 리버스',
      '문장 거꾸로 만들기',
      '텍스트 뒤집기 도구',
      '역순 텍스트 생성',
    ],
    seo: {
      title: '텍스트 뒤집기: 문자열·단어·줄 역순으로 변환하는 무료 온라인 도구 | UtilityFlow',
      description:
        '텍스트 전체를 뒤집거나 단어 순서를 바꾸거나 단어별 글자를 뒤집거나 줄 순서를 거꾸로 만드세요. 네 가지 모드를 브라우저에서 즉시 비교하고 복사할 수 있습니다. 퍼즐과 언어 학습 자료를 만들 때 유용하며, 입력한 텍스트는 브라우저 안에서만 안전하게 처리됩니다. 무료로 바로 써 보세요.',
      primaryKeyword: '텍스트 뒤집기',
      secondaryKeywords: ['문자열 뒤집기', '단어 순서 바꾸기', '줄 순서 뒤집기', '온라인 텍스트 리버스'],
      longTailKeywords: ['텍스트 전체 뒤집기 온라인 도구', '단어 순서 거꾸로 바꾸기', '줄 순서 역순 변환 온라인', '단어별 글자 뒤집기 도구'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '문자열 전체를 뒤집어 거울 텍스트를 만들거나, 단어 순서를 바꾸거나, 각 단어의 글자를 뒤집거나, 줄 목록의 순서를 거꾸로 만들어보세요.',
  },
  'lorem-ipsum-generator': {
    slug: 'rorem-ipsum-saengseonggi',
    name: '로렘 입숨 생성기',
    shortDescription:
      'HTML <p> 태그 포함 옵션과 함께 원하는 단락, 문장, 단어 수만큼 플레이스홀더 텍스트를 생성합니다.',
    keywords: [
      '로렘 입숨 생성기',
      '플레이스홀더 텍스트 생성',
      '더미 텍스트 생성기',
      '로렘 입숨 단락 생성',
      '온라인 로렘 입숨',
      '모의 텍스트 생성',
      'Lorem Ipsum 생성',
      'HTML 더미 텍스트',
      '디자인용 임시 텍스트',
    ],
    seo: {
      title: '로렘 입숨 생성기: 단락·문장·단어 수만큼 생성하는 무료 온라인 도구 | UtilityFlow',
      description:
        '디자인 목업용 플레이스홀더 텍스트를 원하는 단락, 문장, 단어 수만큼 생성하세요. HTML <p> 태그 포함 옵션과 실시간 단어 수 확인 기능을 브라우저에서 제공합니다. 반응형 레이아웃과 폰트 조합을 테스트할 때 유용하며, 생성은 브라우저 안에서 즉시 이루어집니다. 무료로 써 보세요.',
      primaryKeyword: '로렘 입숨 생성기',
      secondaryKeywords: ['플레이스홀더 텍스트 생성', '더미 텍스트 생성기', '로렘 입숨 단락', '모의 텍스트 생성'],
      longTailKeywords: ['디자인 목업용 로렘 입숨 단락 생성', 'HTML p 태그 포함 더미 텍스트', '정확한 단어 수 로렘 입숨 생성', '온라인 무료 플레이스홀더 텍스트'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '정확한 단어, 문장, 단락 수만큼 고전 라틴어 플레이스홀더 텍스트를 생성해 반응형 UI 레이아웃, 폰트 조합, 줄 간격을 테스트하세요.',
  },
  'readability-checker': {
    slug: 'gadokseong-geomsagi',
    name: '가독성 검사기',
    shortDescription:
      'Flesch 읽기 용이성, Flesch-Kincaid 학년 수준, Gunning Fog, SMOG 가독성 점수를 계산합니다.',
    keywords: [
      '가독성 검사기',
      'Flesch 읽기 점수',
      '가독성 점수 계산',
      'Flesch-Kincaid 학년',
      'Gunning Fog 지수',
      'SMOG 가독성',
      '글 읽기 난이도 측정',
      '텍스트 가독성 분석',
      '쉬운 글 점수 검사',
    ],
    seo: {
      title: '가독성 검사기: Flesch 읽기 점수와 학년 수준을 측정하는 도구 | UtilityFlow',
      description:
        'Flesch 읽기 용이성, Flesch-Kincaid 학년 수준, Gunning Fog, SMOG 점수로 글의 읽기 난이도를 측정하세요. 평이한 표현 가이드를 브라우저에서 바로 분석할 수 있습니다. 블로그 글의 읽기 수준을 맞출 때 유용하며, 긴 문장을 나누는 데 도움이 됩니다.',
      primaryKeyword: '가독성 검사기',
      secondaryKeywords: ['Flesch 읽기 점수', '가독성 점수 계산', 'Flesch-Kincaid 학년', 'Gunning Fog 지수'],
      longTailKeywords: ['온라인 Flesch 읽기 용이성 점수 계산', '텍스트 학년 수준 가독성 측정', 'Gunning Fog SMOG 점수 확인', '쉬운 글 가독성 온라인 검사'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '문장 길이와 단어 복잡도를 분석해 Flesch 읽기 용이성, 학년 수준, Gunning Fog, SMOG 점수를 계산하고, 글이 어느 독자층에 맞는지 확인하세요.',
  },
  'word-frequency-counter': {
    slug: 'daneo-bindo-kaunteo',
    name: '단어 빈도 카운터',
    shortDescription:
      '1단어, 2단어, 3단어 구의 빈도를 세고 불용어를 걸러 한 번의 클릭으로 CSV로 내보냅니다.',
    keywords: [
      '단어 빈도 카운터',
      '구 빈도 카운터',
      '단어 사용 빈도 분석',
      '단어 빈도 분석 도구',
      '구 빈도 분석',
      '텍스트 키워드 분석',
      '단어 반복 횟수 세기',
      '텍스트 빈도 분석',
      '온라인 단어 빈도',
    ],
    seo: {
      title: '단어 빈도 카운터: 빈도 분석과 CSV 내보내기 | UtilityFlow',
      description:
        '어떤 텍스트에서든 1단어, 2단어, 3단어 구가 얼마나 자주 나오는지 세고, 불용어를 걸러 한 번의 클릭으로 CSV로 내보내세요. 자주 반복되는 표현을 한눈에 확인하고 스프레드시트에서 분석할 수 있으며, 브라우저에서 무료로 처리됩니다.',
      primaryKeyword: '단어 빈도 카운터',
      secondaryKeywords: ['텍스트 단어 빈도 분석', '단어 빈도 분석', '구 빈도 분석 도구', '구 빈도 분석'],
      longTailKeywords: ['텍스트 단어 빈도 온라인 분석', '2단어 3단어 구 빈도 확인', 'SEO 구 반복 횟수 측정', '단어 빈도 CSV 내보내기'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '글에서 어떤 단어와 구가 얼마나 자주 등장하는지 분석하세요. 키워드 밀도를 확인하고, 과도하게 반복된 표현을 찾아 SEO와 문장 다듬기에 활용하세요.',
  },
  'text-to-slug': {
    slug: 'tekseuteu-seulleogeu-byeonhwangi',
    name: '텍스트 슬러그 변환기',
    shortDescription:
      '어떤 텍스트든 악센트 음역과 일괄 모드를 이용해 코드, 파일 이름, 데이터베이스 키에 쓸 수 있는 깔끔한 URL 슬러그로 변환합니다.',
    keywords: [
      '텍스트 슬러그 변환기',
      '텍스트 슬러그화 온라인',
      '슬러그 만들기',
      'SEO 슬러그 생성',
      '제목 슬러그 변환',
      '온라인 슬러그 생성기',
      'URL 친화적 변환',
      '악센트 제거 슬러그',
      '블로그 URL 슬러그',
    ],
    seo: {
      title: '텍스트 슬러그 변환기: 개발자용 무료 변환 | UtilityFlow',
      description:
        '어떤 텍스트든 코드, 파일 이름, 데이터베이스 키에 쓸 수 있는 깔끔한 URL 슬러그로 변환하세요. 악센트 음역, 언더스코어 구분자, 일괄 모드를 브라우저에서 무료로 사용할 수 있으며, 생성된 슬러그는 바로 복사해서 쓸 수 있습니다.',
      primaryKeyword: '텍스트 슬러그 변환기',
      secondaryKeywords: ['텍스트 슬러그화', '슬러그 만들기', 'SEO 슬러그 생성', '온라인 슬러그 생성기'],
      longTailKeywords: ['제목을 SEO 친화적 URL 슬러그로 변환', '악센트 포함 제목 슬러그 생성', '여러 제목 일괄 슬러그 변환', '블로그 포스트 URL 슬러그 만들기'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '기사 제목과 헤딩을 검색 엔진과 공유에 적합한 깔끔한 URL 슬러그로 바꾸세요. 악센트 문자를 음역하고, 단어 사이를 하이픈으로 연결합니다.',
  },
  'markdown-previewer': {
    slug: 'makeudaun-miribogi',
    name: '마크다운 미리보기',
    shortDescription:
      '마크다운을 실시간 분할 에디터로 작성하고, 렌더링된 서식을 안전하게 확인한 뒤 깔끔한 HTML을 복사하거나 내보냅니다.',
    keywords: [
      '마크다운 미리보기',
      '마크다운 에디터',
      '마크다운 HTML 변환',
      '온라인 마크다운 뷰어',
      '마크다운 렌더링',
      '마크다운 작성 도구',
      '마크다운 내보내기',
      '실시간 마크다운 편집',
      '마크다운 HTML 추출',
    ],
    seo: {
      title: '마크다운 미리보기: 실시간 렌더링과 HTML 내보내기 무료 온라인 도구 | UtilityFlow',
      description:
        '마크다운을 실시간 분할 에디터로 작성하고 렌더링된 서식을 안전하게 확인하세요. 깔끔한 HTML을 복사하거나 내보낼 수 있으며 모든 작업은 브라우저에서 이루어집니다. 블로그 글과 README 문서를 작성할 때 유용하며, 입력한 문서는 브라우저 안에서만 안전하게 처리됩니다.',
      primaryKeyword: '마크다운 미리보기',
      secondaryKeywords: ['마크다운 에디터', '마크다운 HTML 변환', '온라인 마크다운 뷰어', '마크다운 렌더링'],
      longTailKeywords: ['실시간 마크다운 미리보기 에디터 온라인', '마크다운을 HTML로 변환 내보내기', '마크다운 분할 화면 작성 도구', '깔끔한 HTML 복사 마크다운 도구'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '마크다운을 입력하면 렌더링된 결과를 실시간으로 확인하세요. 제목, 목록, 링크, 코드 블록이 어떻게 보이는지 안전하게 미리 보고 HTML로 내보낼 수 있습니다.',
  },
  'line-prefix-suffix': {
    slug: 'jul-jeopdusa-jeommisa-chuga',
    name: '줄 접두사·접미사 추가',
    shortDescription:
      '목록, SQL 절, 코드에 줄 번호, 맞춤 접두사, 접미사를 모든 줄에 추가합니다.',
    keywords: [
      '줄 번호 추가',
      '줄 접두사 추가',
      '줄 접미사 추가',
      '목록 줄 번호 매기기',
      'SQL 줄 접두사',
      '코드 줄 번호 추가',
      '온라인 줄 번호 도구',
      '접두사 접미사 추가',
      '텍스트 줄 편집',
    ],
    seo: {
      title: '줄 접두사·접미사 추가: 줄 번호를 매기는 무료 온라인 편집 도구 | UtilityFlow',
      description:
        '목록, SQL 절, 코드의 모든 줄에 줄 번호, 맞춤 접두사, 접미사를 추가하세요. 0 채우기와 구분자 옵션을 브라우저에서 바로 사용할 수 있으며 무료입니다. SQL 절과 번호 매긴 단계를 만들 때 유용하며, 입력한 목록은 브라우저 안에서만 안전하게 처리됩니다. 무료로 바로 써 보세요.',
      primaryKeyword: '줄 접두사 추가',
      secondaryKeywords: ['줄 번호 추가', '줄 접미사 추가', '목록 줄 번호 매기기', 'SQL 줄 접두사'],
      longTailKeywords: ['텍스트 모든 줄에 접두사 추가 온라인', '0 채우기 줄 번호 매기기 도구', 'SQL 절 접두사 접미사 추가', '코드 줄 번호 온라인 추가'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '번호가 매겨진 단계, 따옴표로 감싼 SQL 값, 접두사가 붙은 코드 줄에 줄 번호와 맞춤 접두사·접미사를 한 번에 추가하세요.',
  },
  'alphabets-to-word-generator': {
    slug: 'munja-ro-daneo-mandeulgi',
    name: '문자로 단어 만들기',
    shortDescription: '문자로 단어를 즉시 만드세요. 애너그램, 짧은 단어와 긴 단어, 가능한 조합을 브라우저에서 무료로.',
    keywords: [
      '문자로 단어 만들기',
      '문자에서 단어 생성',
      '문자를 단어로',
      '애너그램 생성기',
      '애너그램 풀이',
      '문자 섞기',
      '문자로 단어 찾기',
      '영어 단어 생성기',
      '주어진 문자로 단어',
    ],
    seo: {
      title: '문자로 단어 만들기: 무료 온라인 도구 | UtilityFlow',
      description: '무료 문자로 단어 만들기 도구로 문자에서 단어를 즉시 만드세요. 짧은 단어와 긴 단어, 애너그램, 가능한 조합을 찾으세요.',
      primaryKeyword: '문자로 단어 만들기',
      secondaryKeywords: ['애너그램 생성기', '애너그램 풀이', '문자 섞기', '문자로 단어 찾기'],
      longTailKeywords: ['이 문자들로 어떤 단어를 만들 수 있나요', '문자로 단어 온라인 무료 만들기', '문자로 가장 긴 단어 찾기', '단어로 애너그램 만들기'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: '문자를 입력하고 그 문자들로 만들 수 있는 모든 단어를 찾아보세요. 정확한 애너그램, 짧은 단어와 긴 단어를 길이와 문자 필터와 함께 브라우저에서 바로 확인할 수 있습니다.',
  },
};
