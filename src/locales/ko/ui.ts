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
    blog: '블로그',
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
    trustLegal: '신뢰 및 법적 고지',
    home: '홈',
    allToolsDirectory: '모든 도구 디렉터리',
    blog: '블로그',
    aboutUs: '소개',
    contact: '문의',
    privacyPolicy: '개인정보처리방침',
    termsOfService: '이용약관',
    xmlSitemap: 'XML 사이트맵',
    rightsReserved: '모든 권리 보유.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message: '이 사이트는 이용 현황을 파악하고 개선하기 위해 쿠키와 분석을 사용합니다. 수락하거나 거부할 수 있습니다.',
    accept: '수락',
    decline: '거부',
    cookieSettings: '쿠키 설정',
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
      '텍스트 분석, 개발자 서식, 계산기, PDF, SEO 검사, 이미지 워크플로우까지 88가지 무료 온라인 도구를 브라우저에서 바로 사용할 수 있습니다. 설치나 가입이 필요 없으며, 입력한 데이터는 기기 밖으로 나가지 않아 안전합니다.',
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
        'UtilityFlow의 운영 방식과 새로운 도구에서 기대할 수 있는 내용에 대한 핵심 정보입니다.',
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
    plannedToolsInclude: '이 카테고리의 도구: {names}',
    noMatch: '필터와 일치하는 카테고리나 도구가 없습니다.',
    clearFilters: '필터 지우기',
  },
  category: {
    plannedCount: '{count}개 도구',
    toolsCount: '{count}개 도구',
    toolsLive: '{count}개 도구 라이브',
    ofToolsLive: '전체 {total}개 중 {count}개 도구 라이브',
    availableTools: '사용 가능한 {name}',
    exploreOther: '다른 카테고리 살펴보기',
    scheduledTitle: '더 많은 도구가 곧 출시됩니다',
    scheduledDescription:
      '이 카테고리 허브는 활성화되어 {name} 아키텍처에 인덱싱되어 있습니다. 브라우저 측 기능을 갖춘 전용 개별 도구 페이지는 곧 여기에 추가됩니다.',
    plannedToolsTitle: '이 카테고리의 도구:',
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
    willAppear: '곧 여기에 표시됩니다.',
    bylineAuthor: '작성자: Bilal',
    lastUpdated: '마지막 업데이트: 2026년 11월',
  },
  blog: {
    seoTitle: '가이드, 튜토리얼 및 리소스 | UtilityFlow 블로그',
    seoDescription:
      'UtilityFlow의 모든 도구에 대한 실용적인 가이드, 단계별 튜토리얼 및 리소스 — 텍스트, 개발자, 계산기, PDF, SEO, 소셜 미디어 및 이미지 도구.',
    title: '가이드, 튜토리얼 및 리소스',
    description:
      'UtilityFlow의 모든 도구에 대한 실용적인 가이드와 단계별 튜토리얼. 각 도구의 기능과 올바른 사용법, 최상의 결과를 얻는 방법을 알아보세요.',
    searchPlaceholder: '글 검색...',
    searchArticles: '글 검색',
    noResults: '글이 없습니다.',
    featured: '추천 글',
    latest: '최신 글',
    browseByCategory: '카테고리별로 찾아보기',
    relatedArticles: '관련 글',
    relatedTools: '관련 도구',
    readingTime: '읽는 시간 {minutes}분',
    publishedOn: '게시일: {date}',
    updatedOn: '업데이트일: {date}',
    byEditorial: 'UtilityFlow 편집팀',
    tableOfContents: '목차',
    prevArticle: '이전 글',
    nextArticle: '다음 글',
    share: '공유',
    tryTool: '도구 사용해 보기',
    guidesInCategory: '이 카테고리의 가이드',
    categoryGuidesWord: '가이드',
    noArticlesYet: '아직 글이 없습니다',
    noArticlesYetDescription: '이 섹션의 가이드가 곧 제공될 예정입니다. 나중에 다시 확인해 주세요.',
    backToBlog: '블로그로 돌아가기',
    allArticles: '모든 글',
    notAvailableInLanguage: '이 글은 아직 이 언어로 제공되지 않습니다.',
    minRead: '분 읽기',
  },
  comments: {
    title: '댓글',
    note: '의견을 공유하세요. 계정이 필요 없습니다. 이름만 쓰고 게시하면 됩니다.',
    namePlaceholder: '이름',
    commentPlaceholder: '댓글 쓰기…',
    postButton: '댓글 게시',
    posting: '게시 중…',
    empty: '아직 댓글이 없습니다. 가장 먼저 의견을 공유해 보세요.',
    loadError: '댓글을 불러올 수 없지만 아래에서 댓글을 작성할 수 있습니다.',
    postError: '댓글을 게시할 수 없습니다. 잠시 후 다시 시도해 주세요.',
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
      'UtilityFlow는 일상적인 디지털 작업을 위한 88개의 집중적이고 안정적인 유틸리티를 만드는 독립 웹 플랫폼입니다.',
    whyTitle: 'UtilityFlow를 만든 이유',
    whyP1:
      '단어 세기, JSON 검증, 글자 수 제한 확인, 대출 상환액 계산, 이미지 압축 같은 일상적인 온라인 작업은 종종 사람들을 느린 사이트로 내몰며, 거슬리는 오버레이와 혼란스러운 다운로드, 필수 가입을 강요합니다.',
    whyP2:
      '저희 목표는 간단합니다. 모든 유틸리티에 빠르게 로드되고, 작동 방식을 명확히 설명하며, 웹 표준이 허용하는 한 브라우저 안에서 바로 실행되는 깔끔한 전용 페이지를 제공하는 것입니다.',
    orgTitle: 'UtilityFlow를 운영하는 사람',
    orgP1:
      'UtilityFlow는 여가 시간에 무료 웹 도구를 만드는 제작자 Bilal이 만들고 유지하는 독립 프로젝트입니다. 사이트 뒤에는 회사가 없고, 투자자의 자금도 없으며, 직원으로 이루어진 팀도 없습니다. 모든 도구와 가이드, 도움말 페이지는 한 사람이 직접 설계하고 만들고 테스트합니다. 88개의 도구는 계정이나 구독 없이 모두 무료로 사용할 수 있습니다. 푸터에 적힌 Shaheen은 이 프로젝트에 영감을 준 분으로, 아이디어가 어디에서 시작되었는지 기억하기 위해 모든 페이지에 그 이름이 새겨져 있습니다.',
    orgP2:
      '작고 독립적인 프로젝트이기 때문에 결정도 단순합니다. 도구가 느리거나, 헷갈리거나, 잘못 동작하면 바로 고칩니다. 문의 페이지를 통해 보내 주신 피드백은 코드를 직접 바꿀 수 있는 사람에게 그대로 전달되며, 방문자들의 제안은 이미 새로운 도구와 사이트 개선에 반영되었습니다.',
    howTitle: '도구를 만들고 테스트하는 방법',
    howP1:
      '모든 유틸리티는 단어 세기, PDF 합치기, JSON 서식 지정 같은 하나의 명확한 작업에서 출발해, 그 작업을 잘 수행하는 데 집중한 전용 페이지로 만들어집니다. 웹 표준이 허용하는 한 모든 작업은 브라우저 안에서 전적으로 이루어지므로, 사용자의 텍스트와 파일이 기기를 떠날 필요가 없습니다. 모든 도구 페이지에는 짧은 사용 안내와 실제 예시, 자주 묻는 질문에 대한 답변이 있어, 결과를 맹목적으로 믿는 대신 직접 확인할 수 있습니다.',
    howP2:
      '도구가 공개되기 전에 데스크톱과 모바일 브라우저에서 실제 입력값으로 테스트하며, 빈 입력, 매우 긴 텍스트, 특이한 파일 형식 같은 엣지 케이스도 함께 확인합니다. 문제가 생기거나 계산이 잘못된 것으로 보이면 수정 사항을 사이트 업데이트로 배포하고 페이지를 다시 점검합니다. 텍스트를 서버로 보내는 도구는 선택 사항인 세 가지 AI 도구뿐이며, 해당 페이지에는 사용 전에 그 사실이 분명히 안내되어 있습니다.',
    whoTitle: 'UtilityFlow가 필요한 사람',
    whoP1:
      'UtilityFlow는 소프트웨어를 설치하거나 계정을 만들지 않고 도구의 빠른 답이 필요한 모든 사람을 위해 만들어졌습니다. 에세이 단어 수를 확인하는 학생, 초안을 서식 지정하는 작가, JSON을 검증하거나 URL을 인코딩하는 개발자, 글자 수 제한을 확인하는 마케터, 대출이나 할인 금액을 계산하는 소상공인까지 모두 해당합니다. 작업이 1분도 걸리지 않는다면, 그 도구도 1분 안에 끝나야 합니다. 이것이 이 사이트의 모든 페이지가 지켜야 하는 기준입니다.',
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
          '도구는 카테고리별로 출시되고 검증되므로 각 유틸리티가 철저한 기능 테스트와 문서를 받습니다.',
      },
    ],
    categoriesTitle: '7개 도구 카테고리',
    feedbackTitle: '피드백이나 요청이 있으신가요?',
    feedbackBefore:
      '계산 엣지 케이스나 접근성 문제를 발견하거나 새로운 유틸리티를 제안하고 싶으시면 저희',
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
    aboutTitle: '어떤 내용을 쓸 수 있나요',
    aboutP1:
      '이 양식은 사이트와 관련된 모든 내용에 사용할 수 있습니다. 버그를 신고할 때는 어떤 도구를 사용했는지, 무엇을 입력했는지, 어떤 결과를 기대했는지 알려 주세요. 자세히 적어 주실수록 문제를 재현하고 수정하는 속도가 빨라집니다. 새 도구를 제안할 때는 그 도구가 수행해야 할 작업을 설명해 주세요. 많은 방문자가 원하는 아이디어가 우선적으로 검토됩니다. 잘못된 계산, 헷갈리는 안내, 페이지의 번역 오류를 알려 주셔도 좋습니다.',
    aboutP2:
      '개인정보와 법적 문의도 환영합니다. 게시한 댓글을 삭제하고 싶으시면 도구 페이지와 사용하신 이름을 함께 알려 주세요. 댓글을 삭제해 드리겠습니다. 그 밖의 내용, 예를 들어 파트너십 제안, 언론 문의, 사이트에 대한 일반적인 의견도 같은 양식으로 보내실 수 있으며, 이 페이지에 있는 이메일 주소로 직접 보내셔도 됩니다.',
    responseTitle: '메시지를 보낸 뒤에는 어떻게 되나요',
    responseP1:
      '모든 메시지는 UtilityFlow를 만들고 유지하는 사람이 직접 읽습니다. 상담 부서도, 자동 답장 대기열도 없습니다. 버그 신고와 잘못된 결과는 가장 먼저 확인합니다. 고장 난 도구는 사용하는 모든 사람에게 영향을 미치기 때문입니다. 도구 제안은 수집해, 얼마나 많은 사람이 사용할지, 사이트의 브라우저 중심 방식에 얼마나 잘 맞는지를 기준으로 검토합니다.',
    responseP2:
      '문의하는 데 계정이 필요하지 않으며, 이메일 주소는 메시지에 답장하는 데만 사용합니다. 양식을 사용하고 싶지 않으시면 이 페이지에 있는 직접 이메일 주소로 보내 주세요. 같은 받은편지함으로 도착합니다.',
    name: '이름',
    email: '이메일 주소',
    topic: '주제',
    message: '메시지',
    submit: '메시지 보내기',
    sending: '보내는 중…',
    sendError: '메시지를 보낼 수 없습니다. 다시 시도해 주세요.',
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
    successTitle: '메시지가 전송되었습니다',
    successThanks:
      '감사합니다, {name}님. 메시지가 전송되었으며 곧 답변드리겠습니다.',
    successNote:
      '추가로 전달하실 내용이 있으시면 다음 주소로 직접 연락해 주세요',
    sendAnother: '다른 메시지 보내기',
    directEmail: '직접 이메일',
    directEmailText: '직접 작성하고 싶으신가요? 팀에 이메일로 보내 주세요:',
  },
  privacy: {
    seoTitle: '개인정보처리방침 | UtilityFlow',
    seoDescription:
      '브라우저 측 도구 실행, 쿠키, 서버 로그, 분석을 다루는 UtilityFlow 개인정보처리방침을 읽어보세요.',
    title: '개인정보처리방침',
    lastUpdated: '최종 업데이트: 2026년 11월',
    sections: [
      {
        title: '1. 개요',
        paragraphs: [
          'UtilityFlow는 클라이언트 측 브라우저 처리를 중심으로 설계되었습니다. 이 개인정보처리방침은 웹사이트를 방문할 때 어떤 정보가 처리되는지, 유틸리티가 입력을 어떻게 처리하는지, 쿠키나 분석 기능이 어떻게 동작할 수 있는지 설명합니다.',
        ],
      },
      {
        title: '2. 도구 입력, 브라우저 처리, 무료 AI 도구',
        paragraphs: [
          '85개 브라우저 기반 도구에 입력된 텍스트, 숫자, 코드 조각, 파일은 기기를 떠나지 않고 브라우저 세션 안에서 로컬로 처리됩니다.',
          '3개의 선택적 무료 AI 도구(AI 글쓰기 도우미, AI 텍스트 요약기, AI 도구 찾기)는 제출된 텍스트를 보호된 백엔드를 통해 Groq으로 전송해 실시간 추론을 받습니다. 프롬프트를 저장하거나 기록하지 않으며, 무료 하루 속도 제한은 UTC 날짜가 포함된 SHA-256 해시만 사용하므로 방문자의 원시 IP 주소가 절대 저장되지 않습니다.',
          '도구 아래에 남기는 댓글은 이름과 댓글 내용만 받습니다. 제출하신 이름과 내용은 호스팅 플랫폼에 저장되어 해당 도구 페이지에 작성 날짜와 함께 공개적으로 표시됩니다. 댓글을 남기는 데 이메일 주소나 계정이 필요하지 않으며, 댓글 데이터를 광고에 사용하지 않습니다. 댓글 삭제를 원하시면 페이지와 사용하신 이름을 알려 주시고 연락해 주세요. 삭제해 드리겠습니다.',
        ],
      },
      {
        title: '3. 호스팅 로그 및 기술 텔레메트리',
        paragraphs: [
          'UtilityFlow는 Cloudflare Pages에서 호스팅됩니다. 표준 웹 호스팅 제공업체와 마찬가지로 엣지 네트워크는 페이지를 안정적으로 제공하고, 악용을 완화하며, 보안을 유지하기 위해 표준 HTTP 요청 메타데이터(IP 주소, 브라우저 사용자 에이전트, 요청 URL, 타임스탬프 등)를 자동으로 처리할 수 있습니다.',
          '호스팅 로그를 다른 데이터와 결합해 개별 방문자를 식별하지 않으며, 로그 데이터를 광고주에게 판매하거나 공유하지 않습니다. 로그는 서비스를 안정적으로 운영하고 보호하기 위해서만 존재합니다.',
        ],
      },
      {
        title: '4. 쿠키 및 분석',
        paragraphs: [
          'UtilityFlow는 현재 제3자 광고를 표시하지 않습니다.',
          '또한 사이트 이용 현황을 종합적으로 파악하기 위해 Google Analytics 4를 사용합니다. 이는 배너에서 쿠키를 수락한 경우에만 동작합니다.',
        ],
      },
      {
        title: '5. 외부 링크',
        paragraphs: [
          '문서나 도구 페이지가 외부 웹사이트로 연결될 수 있습니다. 제3자 웹사이트의 개인정보 보호 관행이나 콘텐츠에 대해 책임지지 않습니다.',
          '가능한 경우 외부 링크는 새 탭에서 열립니다. 링크된 사이트에 개인정보를 입력하기 전에 해당 사이트의 개인정보처리방침을 먼저 확인해 주세요.',
        ],
      },
      {
        title: '6. 데이터 보관',
        paragraphs: [
          '브라우저에서 처리되는 정보는 저희에게 전송되지 않으므로 보관할 것이 없습니다. 선택 사항인 AI 도구에 보낸 텍스트는 요청 처리에만 사용되며 저장되지 않습니다. 댓글은 저희가 삭제하거나 요청에 따라 삭제할 때까지 보관됩니다. 호스팅 로그와 보안 기록은 호스팅 제공업체가 서비스를 운영하고 보호하는 데 필요한 제한된 기간 동안만 보관됩니다.',
        ],
      },
      {
        title: '7. 이용자의 권리와 선택',
        paragraphs: [
          '브라우저 설정에서 언제든 쿠키를 차단하거나 삭제할 수 있습니다. 댓글을 게시하셨다면 연락해 삭제를 요청할 수 있습니다. 도구가 브라우저에서 실행되고 계정이나 프로필을 보관하지 않으므로 다운로드하거나 수정할 개인 데이터 파일은 없지만, 데이터에 대한 질문이 있으시면 글을 보내 주세요. 답변해 드리겠습니다.',
        ],
      },
      {
        title: '8. 어린이 개인정보 보호',
        paragraphs: [
          'UtilityFlow는 일반 목적의 사이트이며 13세 미만 어린이를 대상으로 하지 않습니다. 어린이의 개인정보를 고의로 수집하지 않습니다. 부모님이나 보호자께서 자녀가 사이트에 댓글을 게시했다고 생각하시면 연락해 주세요. 삭제해 드리겠습니다.',
        ],
      },
      {
        title: '9. 본 방침의 변경',
        paragraphs: [
          '도구를 추가하거나, 제공업체를 변경하거나, 사이트 운영 방식을 조정할 때 본 개인정보처리방침을 업데이트할 수 있습니다. 이 페이지 상단의 “최종 업데이트” 날짜를 통해 마지막 개정 시점을 확인할 수 있습니다. 변경 후에도 사이트를 계속 사용하면 업데이트된 방침에 동의한 것으로 간주합니다.',
        ],
      },
    ],
    contactTitle: '10. 문의',
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
          '도구에 링크를 걸고 결과를 공유할 수 있습니다. 다만 저희 도구를 자신의 것처럼 소개하거나, 사이트의 디자인이나 콘텐츠를 복사해 경쟁 서비스로 다시 게시하거나, 결과의 출처에 대해 다른 사람을 오도하는 방식으로 사이트를 사용해서는 안 됩니다.',
        ],
      },
      {
        title: '3. 정확성 및 정보 면책',
        paragraphs: [
          '모든 유틸리티를 신중히 테스트하지만, 모든 도구, 계산, 변환, SEO 검사는 “있는 그대로” 및 “이용 가능한 대로” 제공됩니다. 금융, 법률, 의료, 운영 엔지니어링 결정을 내리기 전에 출력을 독립적으로 검증해야 합니다.',
          '대출 상환액, 세금 추정치, 환율 변환 같은 계산은 전문적인 조언이 아니라 계획을 돕는 참고 자료입니다. 수치는 요율, 규칙, 반올림에 따라 달라질 수 있으므로, 중요한 수치는 이를 바탕으로 행동하기 전에 자격을 갖춘 전문가나 공식 출처를 통해 확인해 주세요.',
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
          '법이 허용하는 최대 범위 내에서 UtilityFlow와 그 기여자는 플랫폼 사용 또는 사용 불가로 인해 발생하는 간접적, 우발적, 특별, 결과적 손해에 대해 책임을 지지 않습니다. UtilityFlow는 독립적인 프로젝트이며, 이 사이트에 언급된 YouTube, Instagram, Google 또는 기타 제3자 브랜드와 제휴, 보증, 연결 관계가 없습니다.',
        ],
      },
      {
        title: '6. 사용자 콘텐츠와 댓글',
        paragraphs: [
          '도구에 입력하거나 댓글로 게시한 모든 내용의 소유권은 전적으로 사용자에게 있습니다. 댓글을 게시하면 해당 도구 페이지에 공개적으로 표시할 수 있도록 저희에게 허락하는 것입니다. 불법적이거나, 오해의 소지가 있거나, 타인에게 해로운 내용을 게시하지 마세요. 타인의 개인정보도 게시하지 마세요. 이러한 규칙을 어기거나 신고된 댓글은 사전 통지 없이 삭제할 수 있습니다.',
        ],
      },
      {
        title: '7. 제3자 서비스',
        paragraphs: [
          '일부 기능은 독립적인 제3자 서비스에 의존합니다. 세 가지 AI 도구는 처리를 위해 텍스트를 Groq으로 전송하고, 문의 양식은 FormSubmit을 통해 전달되며, 사이트는 Cloudflare에서 호스팅되고, 통화 계산기는 Frankfurter에서 실시간 환율을 가져옵니다. 각 서비스에는 자체 약관과 개인정보처리방침이 있으며, 해당 서비스의 이용은 그 문서에 따라 규율됩니다. UtilityFlow는 제3자 서비스의 이용 가능 여부나 관행에 대해 책임을 지지 않습니다.',
        ],
      },
      {
        title: '8. 서비스 이용 가능 여부',
        paragraphs: [
          'UtilityFlow는 무료 서비스이며 모든 도구가 항상 이용 가능함을 보장하지 않습니다. 도구는 변경, 개선, 제거될 수 있으며, 유지 보수를 위해 사이트가 일시적으로 중단될 수 있습니다. 서비스를 원활하게 유지하기 위해 노력하지만, 중단이나 다운타임으로 인한 손실에 대해서는 책임을 지지 않습니다.',
        ],
      },
    ],
    acceptanceTitle: '1. 약관 동의',
    acceptanceBefore:
      'UtilityFlow에 접속하거나 사용함으로써 본 이용약관과 저희',
    acceptanceLink: '개인정보처리방침',
    acceptanceAfter:
      '에 동의하게 됩니다. 약관의 어떤 부분에도 동의하지 않으면 웹사이트 사용을 중단해 주세요.',
    changesTitle: '9. 변경 및 문의',
    changesBefore:
      '새 도구가 출시되면 본 이용약관을 업데이트할 수 있습니다. 질문은 저희',
    changesLink: '문의 페이지',
    changesAfter: '로 보내 주세요.',
  },
};
