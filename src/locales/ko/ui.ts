import type { UiStrings } from '../ui';

/**
 * Korean chrome dictionary — same UiStrings shape and key order as
 * src/locales/en/ui.ts. Natural South Korean;
 * brand names, URLs, email addresses and code values kept identical
 * to English.
 */
export const koStrings: UiStrings = {
  nav: {
    tools: '도구',
    categories: '카테고리',
    aiTools: 'AI 도구',
    about: '소개',
    contact: '문의',
    allTools: '모든 도구',
    freeAiTools: '무료 AI 도구',
    viewAiSection: '홈페이지에서 AI 섹션 보기 →',
    searchPlaceholder: '88개 도구 검색...',
    searchTools: '도구 검색',
    closeSearch: '검색 닫기',
    openMenu: '탐색 메뉴 열기',
    closeMenu: '탐색 메뉴 닫기',
    skipToContent: '콘텐츠로 건너뛰기',
    language: '언어',
    chooseLanguage: '언어 선택',
    aiWriting: {
      label: 'AI 글쓰기 도우미',
      desc: '문법, 다시 쓰기, 톤, 이메일 초안',
    },
    aiSummarizer: {
      label: 'AI 텍스트 요약기',
      desc: '짧고 중간이며 글머리 기호 요약',
    },
    aiFinder: {
      label: 'AI 도구 찾기',
      desc: '평이한 말로 딱 맞는 도구 찾기',
    },
  },
  footer: {
    tagline:
      '작가, 엔지니어, 마케터, 분석가를 위한 빠르고 브라우저 중심의 일상 유틸리티 모음입니다. 최소한의 부담으로 로컬에서 실행되도록 만들었습니다.',
    categories: '카테고리',
    platformAi: '플랫폼·AI',
    legal: '법적 고지',
    home: '홈',
    allToolsDirectory: '모든 도구 디렉터리',
    aboutUs: '소개',
    contact: '문의',
    privacyPolicy: '개인정보처리방침',
    termsOfService: '이용약관',
    xmlSitemap: 'XML 사이트맵',
    rightsReserved: '모든 권리 보유.',
    deployedNote: '브라우저 측 유틸리티 · Cloudflare Pages에 배포됨',
  },
  common: {
    copy: '복사',
    copied: '복사됨',
    download: '다운로드',
    clear: '지우기',
    loadSample: '샘플 불러오기',
    reset: '초기화',
    search: '검색',
    close: '닫기',
    cancel: '취소',
    save: '저장',
    submit: '제출',
    loading: '로드 중...',
    processing: '처리 중...',
    upload: '업로드',
    chooseFile: '파일 선택',
    dragDrop: '파일을 여기에 드래그 앤 드롭하세요',
    tryAgain: '다시 시도',
    openTool: '도구 열기',
    browserSide: '브라우저 측',
    freeAiTool: '무료 AI 도구',
    externalApi: '외부 API',
  },
  home: {
    seoTitle: 'UtilityFlow – 빠르고 브라우저 기반 온라인 유틸리티 도구',
    seoDescription:
      '텍스트 분석, 개발자 서식, 계산기, PDF, SEO 검사, 이미지 워크플로를 위한 무료, 빠르고 개인정보 중심의 온라인 유틸리티 도구입니다.',
    seoKeywords: [
      '온라인 유틸리티 도구',
      '브라우저 도구',
      '텍스트 도구',
      '개발자 도구',
      '온라인 계산기',
      'PDF 도구',
      'SEO 도구',
    ],
    eyebrow: 'UtilityFlow 플랫폼 · 7개 핵심 카테고리 · {count}개 라이브 유틸리티',
    h1: '속도와 개인정보를 위해 만든 실용적인 온라인 유틸리티.',
    heroDescription:
      'UtilityFlow는 85개의 브라우저 중심 유틸리티와 무료 AI 글쓰기, 요약, 스마트 도구 찾기를 텍스트, 개발자, 계산기, 소셜 미디어, PDF, SEO, 이미지 워크플로에 걸쳐 정리했습니다.',
    exploreCategories: '카테고리 살펴보기',
    openDirectory: '전체 디렉터리 열기',
    aiWriting: 'AI 글쓰기',
    aiSummarizer: 'AI 요약',
    aiFinder: 'AI 도구 찾기',
    metrics: {
      toolCategories: '도구 카테고리',
      browserUtilities: '브라우저 유틸리티',
      liveTools: '라이브 도구',
      accountRequired: '계정 필요',
      none: '없음',
    },
    aiSpotlight: {
      badge: '무료 AI 모음 · 로그인 필요 없음',
      title: '무료 AI 도구',
      description:
        '가입 없이 몇 초 만에 초안을 개선하고, 긴 문서를 요약하고, 딱 맞는 도구를 찾으세요.',
    },
    popular: {
      title: '인기 도구',
      description: '글쓰기, 개발, 계산에서 가장 많이 쓰이는 일상 유틸리티입니다.',
      viewDirectory: '도구 디렉터리 보기',
    },
    categories: {
      title: '도구 카테고리',
      description:
        '글쓰기, 코딩, 수학, 게시, 문서, 검색 최적화, 미디어 워크플로를 다루도록 설계된 7개의 전문 모음입니다.',
      includes: '포함: {names}',
    },
    directory: {
      title: '모든 도구 디렉터리',
      description:
        '카테고리나 키워드로 필터링해 라이브 유틸리티나 카테고리 허브로 바로 이동하세요.',
      filterPlaceholder: '카테고리나 도구 필터링...',
      allCategories: '모든 카테고리',
      noMatch: '"{query}"와 일치하는 카테고리나 도구가 없습니다.',
      resetFilters: '필터 초기화',
      upcomingUtilities: '예정된 유틸리티: {names}',
      scheduledInBatch: '배치 {batch}에 예정됨',
      toolsActive: '{count}개 도구 활성',
      openCategory: '카테고리 페이지 열기',
    },
    why: {
      title: 'UtilityFlow를 선택하는 이유',
      description: '광고가 많은 유틸리티 사이트의 깔끔하고 안정적인 대안으로 설계했습니다.',
      items: [
        {
          title: '브라우저 중심 개인정보',
          description:
            '핵심 계산, 문자열 변환, 서식 지정이 클라이언트 메모리에서 직접 실행되므로 민감한 초안과 JSON 페이로드가 기기에 머뭅니다.',
        },
        {
          title: '빠르고 가벼운 제공',
          description:
            '코드 분할된 도구 모듈과 최소한의 런타임 의존성으로 초기 페이지 로드를 가볍게 유지하고 모든 연결에서 Core Web Vitals를 빠르게 유지합니다.',
        },
        {
          title: '영구적인 깔끔한 URL',
          description:
            '모든 유틸리티가 구조화된 메타데이터, 사용 예시, 브라우저 새로고침에도 바로 연결되는 전용 경로에 있습니다.',
        },
        {
          title: '예측 가능하고 검증 가능한 결과',
          description:
            '도구는 결정적인 출력, 투명한 지침, 접근 가능한 컨트롤에 집중하며 번잡한 팝업이나 오해의 소지가 있는 표시가 없습니다.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      description:
        'UtilityFlow의 운영 방식과 향후 배치에서 기대할 수 있는 내용에 대한 핵심 정보입니다.',
    },
    faqs: [
      {
        question: 'UtilityFlow 도구를 계정을 만들지 않고 무료로 쓸 수 있나요?',
        answer:
          '네, UtilityFlow의 85개 브라우저 유틸리티와 3개 AI 도구는 모두 등록, 로그인 장벽, 크레딧, 구독 없이 무료로 이용할 수 있습니다.',
      },
      {
        question: 'UtilityFlow가 제 텍스트, 코드, 파일을 서버에 업로드하나요?',
        answer:
          '85개 핵심 브라우저 유틸리티는 모두 입력 내용을 업로드하지 않고 웹 브라우저 안에서 로컬로 실행됩니다. 3개의 선택적 무료 AI 도구(AI 글쓰기 도우미, AI 텍스트 요약기, AI 도구 찾기)는 서버 측 Groq 추론을 통해 프롬프트를 안전하게 처리하며 텍스트를 저장하지 않습니다.',
      },
      {
        question: '88개 도구는 플랫폼에서 어떻게 정리되어 있나요?',
        answer:
          'UtilityFlow는 7개 핵심 카테고리(텍스트·글쓰기, 개발자, 계산기, 소셜 미디어, PDF, SEO, 이미지·파일 도구)에 걸쳐 85개 브라우저 도구와 플랫폼에 통합된 3개의 무료 AI 도구를 다룹니다.',
      },
      {
        question: '특정 도구에 대한 직접 링크를 북마크하거나 공유할 수 있나요?',
        answer:
          '네, 모든 도구와 카테고리는 자체 영구적이고 깔끔한 URL(예: /word-counter/, /ai-writing-assistant/, /category/developer-tools/)을 받으며 바로 로드되고 브라우저 새로고침에서도 동작합니다.',
      },
      {
        question: 'UtilityFlow가 휴대폰과 태블릿에서도 원활히 동작하나요?',
        answer:
          '네, 라이트 모드와 다크 모드를 포함한 모든 레이아웃, 탐색 컨트롤, 대화형 작업 공간은 접근 가능한 터치 대상과 반응형 그리드로 모바일 우선 설계되었습니다.',
      },
    ],
    trustLine: '모든 도구는 무료 • 가입이 필요 없습니다 • 브라우저에서 바로 사용 가능',
  },
  directory: {
    seoTitle: '모든 온라인 유틸리티 도구 디렉터리 | UtilityFlow',
    seoDescription:
      '글쓰기, 개발, 계산기, PDF, SEO, 이미지를 위해 정리된 UtilityFlow의 모든 브라우저 기반 유틸리티와 카테고리를 둘러보고 검색하세요.',
    seoKeywords: ['유틸리티 도구 디렉터리', '모든 온라인 도구', '무료 브라우저 도구'],
    title: '모든 도구 디렉터리',
    description:
      'UtilityFlow에 등록된 {count}개 라이브 유틸리티를 모두 둘러보거나 브라우저와 무료 AI 워크플로에 걸친 7개 카테고리 허브를 살펴보세요.',
    searchPlaceholder: '도구 이름, 키워드, 카테고리로 검색...',
    showing: '{categories}개 카테고리에 걸쳐 {tools}개 라이브 도구 표시 중',
    all: '전체',
    availableTools: '사용 가능한 도구',
    categorySuites: '카테고리 모음',
    visitHub: '{name} 허브 방문',
    plannedToolsInclude: '예정된 도구: {names}',
    noMatch: '필터와 일치하는 카테고리나 도구가 없습니다.',
    clearFilters: '필터 지우기',
  },
  category: {
    batchLabel: '배치 {batch}',
    plannedCount: '{count}개 도구 예정',
    toolsCount: '{count}개 도구',
    toolsLive: '{count}개 도구 라이브',
    ofToolsLive: '전체 {total}개 중 {count}개 도구 라이브',
    availableTools: '사용 가능한 {name}',
    exploreOther: '다른 카테고리 살펴보기',
    scheduledTitle: '배치 {batch} 구현 예정',
    scheduledDescription:
      '이 카테고리 허브는 활성화되어 {name} 아키텍처에 인덱싱되어 있습니다. 브라우저 측 기능을 갖춘 전용 개별 도구 페이지는 배치 {batch} 기간에 여기에 추가됩니다.',
    plannedToolsTitle: '이 카테고리의 예정된 도구:',
  },
  toolPage: {
    howToUse: '{name} 사용 방법',
    practicalExamples: '실용적인 예시',
    faqs: '자주 묻는 질문',
    keyBenefits: '주요 장점',
    commonUseCases: '일반적인 사용 사례',
    runsLocally: '브라우저 안에서 로컬로 실행됩니다',
    externalApi: '외부 API 통합',
    freeAiTool: '무료 AI 도구 · 로그인 필요 없음',
    loadingWorkspace: '{name} 작업 공간을 로드하는 중...',
    input: '입력',
    output: '출력',
    relatedTitle: '관련 도구',
    relatedDescription: '보완적인 유틸리티로 워크플로를 이어가세요.',
    browseAll: '모든 {name} 둘러보기',
    moreToolsIn: '다음 카테고리의 도구 더 보기',
    willAppear: '배치 {batch}가 출시되면 여기에 표시됩니다.',
  },
  search: {
    placeholder:
      '도구나 카테고리 검색(예: 단어 카운터, JSON, PDF, 계산기)...',
    search: '검색',
    tools: '도구',
    categories: '카테고리',
    noResults: '"{query}"와 일치하는 도구나 카테고리를 찾지 못했습니다.',
    viewDirectory: '전체 디렉터리 보기',
    clearSearch: '검색 지우기',
    ariaLabel: '도구나 카테고리 검색',
  },
  notFound: {
    seoTitle: '페이지를 찾을 수 없음(404) | UtilityFlow',
    seoDescription:
      '요청한 도구나 페이지를 UtilityFlow에서 찾을 수 없습니다. 유틸리티 디렉터리를 검색하거나 카테고리를 둘러보세요.',
    eyebrow: '404 · 찾을 수 없음',
    title: '해당 페이지를 찾을 수 없습니다.',
    description:
      'URL이 이동했거나 해당 유틸리티가 아직 출시되지 않았을 수 있습니다. 아래에서 검색하거나 카테고리를 둘러보며 필요한 것을 찾으세요.',
    returnHome: '홈으로 돌아가기',
    browseDirectory: '디렉터리 둘러보기',
    browseCategories: '카테고리 둘러보기',
  },
  about: {
    seoTitle: 'UtilityFlow 소개 – 브라우저 중심 온라인 도구 플랫폼',
    seoDescription:
      'UtilityFlow가 계정, 번잡함, 불필요한 데이터 업로드 없이 7개 카테고리에 걸쳐 빠르고 개인정보 중심의 브라우저 유틸리티를 만드는 방법을 알아보세요.',
    title: 'UtilityFlow 소개',
    intro:
      'UtilityFlow는 일상적인 디지털 작업을 위한 85개의 집중적이고 안정적인 브라우저 유틸리티를 만드는 독립 웹 플랫폼입니다.',
    whyTitle: 'UtilityFlow를 만든 이유',
    whyP1:
      '단어 세기, JSON 검증, 글자 수 제한 확인, 대출 상환액 계산, 이미지 압축 같은 일상적인 온라인 작업은 종종 사람들을 느린 사이트로 내몰며, 거슬리는 오버레이와 혼란스러운 다운로드, 필수 가입을 강요합니다.',
    whyP2:
      '저희 목표는 간단합니다. 모든 유틸리티에 빠르게 로드되고, 작동 방식을 명확히 설명하며, 웹 표준이 허용하는 한 브라우저 안에서 바로 실행되는 깔끔한 전용 페이지를 제공하는 것입니다.',
    principlesTitle: '핵심 엔지니어링 원칙',
    principles: [
      {
        title: '클라이언트 측 실행',
        description:
          '텍스트, 코드, 수학, 로컬 파일 유틸리티는 브라우저 메모리에서 입력을 처리하므로 작업 데이터가 원격 서버로 전송되지 않습니다.',
      },
      {
        title: '투명한 API 고지',
        description:
          '특정 유틸리티에 외부 조회나 서버 호출이 필요하면 해당 도구를 실행하기 전에 도구 페이지에 명시적으로 공개합니다.',
      },
      {
        title: '접근 가능한 인터페이스',
        description:
          '키보드 탐색, 읽기 쉬운 대비, 명확한 오류 피드백, 반응형 모바일 컨트롤이 모든 템플릿에 내장되어 있습니다.',
      },
      {
        title: '모듈식 출시',
        description:
          '도구는 7개 카테고리 배치로 출시되고 검증되므로 각 유틸리티가 철저한 기능 테스트와 문서를 받습니다.',
      },
    ],
    categoriesTitle: '예정된 7개 도구 카테고리',
    feedbackTitle: '피드백이나 요청이 있으신가요?',
    feedbackBefore:
      '계산 엣지 케이스나 접근성 문제를 발견하거나 향후 배치에 추가할 유틸리티를 제안하고 싶으시면 저희',
    feedbackLink: '문의 페이지',
    feedbackAfter: '를 통해 연락해 주세요.',
  },
  contact: {
    seoTitle: 'UtilityFlow 문의 – 지원, 버그 신고, 제안',
    seoDescription:
      'UtilityFlow 팀에 문의해 문제를 신고하거나 새 유틸리티 도구를 제안하거나 개인정보와 약관에 대해 질문하세요.',
    title: '문의하기',
    intro:
      '버그 신고, 도구 제안, 일반 문의를 보내 주세요. 모든 제출 내용을 읽고 도구 정확도와 접근성을 개선하는 수정을 우선합니다.',
    name: '이름',
    email: '이메일 주소',
    topic: '주제',
    message: '메시지',
    submit: '메시지 보내기',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: '도구, 버그, 질문을 자세히 설명해 주세요...',
    topics: [
      '도구 제안',
      '버그 신고',
      'SEO 또는 콘텐츠 수정',
      '개인정보 또는 법적 문의',
      '일반 질문',
    ],
    errors: {
      name: '이름을 입력해 주세요.',
      emailEmpty: '이메일 주소를 입력해 주세요.',
      emailInvalid: '유효한 이메일 주소를 입력해 주세요.',
      subject: '주제를 선택하거나 입력해 주세요.',
      message: '메시지에 최소 10자를 포함해 주세요.',
    },
    successTitle: '메시지가 준비되었습니다',
    successThanks:
      '감사합니다, {name}님. {subject}에 대한 메시지가 검증되었습니다.',
    successNote:
      'UtilityFlow는 백엔드 서버에 사용자 제출 내용을 저장하지 않고 정적 사이트로 운영되므로, 이메일 클라이언트로 직접 메시지를 보내실 수도 있습니다.',
    sendAnother: '다른 메시지 보내기',
    directEmail: '직접 이메일',
    directEmailText: '직접 작성하고 싶으신가요? 팀에 이메일로 보내 주세요:',
  },
  privacy: {
    seoTitle: '개인정보처리방침 | UtilityFlow',
    seoDescription:
      '브라우저 측 도구 실행, 쿠키, 서버 로그, 제3자 광고 공개를 다루는 UtilityFlow 개인정보처리방침을 읽어보세요.',
    title: '개인정보처리방침',
    lastUpdated: '최종 업데이트: 2026년 11월',
    sections: [
      {
        title: '1. 개요',
        paragraphs: [
          'UtilityFlow는 클라이언트 측 브라우저 처리를 중심으로 설계되었습니다. 이 개인정보처리방침은 웹사이트를 방문할 때 어떤 정보가 처리되는지, 유틸리티가 입력을 어떻게 처리하는지, 쿠키나 광고 기술이 어떻게 동작할 수 있는지 설명합니다.',
        ],
      },
      {
        title: '2. 도구 입력, 브라우저 처리, 무료 AI 도구',
        paragraphs: [
          '85개 브라우저 기반 도구에 입력된 텍스트, 숫자, 코드 조각, 파일은 기기를 떠나지 않고 브라우저 세션 안에서 로컬로 처리됩니다.',
          '3개의 선택적 무료 AI 도구(AI 글쓰기 도우미, AI 텍스트 요약기, AI 도구 찾기)는 제출된 텍스트를 보호된 백엔드를 통해 Groq으로 전송해 실시간 추론을 받습니다. 프롬프트를 저장하거나 기록하지 않으며, 무료 하루 속도 제한은 UTC 날짜가 포함된 SHA-256 해시만 사용하므로 방문자의 원시 IP 주소가 절대 저장되지 않습니다.',
        ],
      },
      {
        title: '3. 호스팅 로그 및 기술 텔레메트리',
        paragraphs: [
          'UtilityFlow는 Cloudflare Pages에서 호스팅됩니다. 표준 웹 호스팅 제공업체와 마찬가지로 엣지 네트워크는 페이지를 안정적으로 제공하고, 악용을 완화하며, 보안을 유지하기 위해 표준 HTTP 요청 메타데이터(IP 주소, 브라우저 사용자 에이전트, 요청 URL, 타임스탬프 등)를 자동으로 처리할 수 있습니다.',
        ],
      },
      {
        title: '4. 쿠키 및 제3자 광고',
        paragraphs: [
          '무료 도구 이용을 지원하기 위해 제3자 광고 네트워크(예: Google AdSense)의 광고를 표시할 수 있습니다. Google을 포함한 제3자 벤더는 사용자의 이전 웹사이트 또는 다른 웹사이트 방문 기록을 바탕으로 광고를 제공하기 위해 쿠키나 웹 비콘을 사용할 수 있습니다.',
          'Google 광고 설정에 방문하거나 브라우저 설정에서 직접 쿠키 기본 설정을 관리해 개인 맞춤형 광고를 거부할 수 있습니다.',
        ],
      },
      {
        title: '5. 외부 링크',
        paragraphs: [
          '문서나 도구 페이지가 외부 웹사이트로 연결될 수 있습니다. 제3자 웹사이트의 개인정보 보호 관행이나 콘텐츠에 대해 책임지지 않습니다.',
        ],
      },
    ],
    contactTitle: '6. 문의',
    contactBefore:
      '이 개인정보처리방침에 대해 질문이 있으시면 저희',
    contactLink: '문의 페이지',
    contactMiddle: '또는 이메일로 연락해 주세요',
  },
  terms: {
    seoTitle: '이용약관 | UtilityFlow',
    seoDescription:
      'UtilityFlow 브라우저 유틸리티 사용, 지적 재산권, 정확성 면책, 책임 제한을 규율하는 이용약관을 검토하세요.',
    title: '이용약관',
    lastUpdated: '최종 업데이트: 2026년 11월',
    sections: [
      {
        title: '2. 허용된 사용',
        paragraphs: [
          'UtilityFlow를 개인, 교육, 상업적 생산성 작업에 사용할 수 있습니다. 남용 트래픽 자동화, 사이트 제공 방해 시도, 보안 보호 역설계, 불법 활동에 유틸리티를 사용하는 데 동의하지 않습니다.',
        ],
      },
      {
        title: '3. 정확성 및 정보 면책',
        paragraphs: [
          '모든 유틸리티를 신중히 테스트하지만, 모든 도구, 계산, 변환, SEO 검사는 “있는 그대로” 및 “이용 가능한 대로” 제공됩니다. 금융, 법률, 의료, 운영 엔지니어링 결정을 내리기 전에 출력을 독립적으로 검증해야 합니다.',
        ],
      },
      {
        title: '4. 지적 재산권',
        paragraphs: [
          'UtilityFlow 인터페이스, 브랜드 자산, 문서, 소스 코드는 관련 지적 재산권법에 의해 보호됩니다. 클라이언트 측 유틸리티를 이용해 처리하는 텍스트, 코드, 문서, 이미지에 대한 모든 소유권은 사용자가 유지합니다.',
        ],
      },
      {
        title: '5. 책임 제한',
        paragraphs: [
          '법이 허용하는 최대 범위 내에서 UtilityFlow와 그 기여자는 플랫폼 사용 또는 사용 불가로 인해 발생하는 간접적, 우발적, 특별, 결과적 손해에 대해 책임을 지지 않습니다.',
        ],
      },
    ],
    acceptanceTitle: '1. 약관 동의',
    acceptanceBefore:
      'UtilityFlow에 접속하거나 사용함으로써 본 이용약관과 저희',
    acceptanceLink: '개인정보처리방침',
    acceptanceAfter:
      '에 동의하게 됩니다. 약관의 어떤 부분에도 동의하지 않으면 웹사이트 사용을 중단해 주세요.',
    changesTitle: '6. 변경 및 문의',
    changesBefore:
      '새 도구 배치가 출시되면 본 이용약관을 업데이트할 수 있습니다. 질문은 저희',
    changesLink: '문의 페이지',
    changesAfter: '로 보내 주세요.',
  },
};
