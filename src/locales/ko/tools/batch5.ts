import type { ToolLocaleOverride } from '../../types';

/**
 * Korean overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ (English definitions).
 * Same shape as src/locales/id/tools/batch5.ts.
 * Slugs are Revised Romanization of the Korean tool names.
 */
export const KO_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'meta-taegeu-saengseonggi',
    name: '메타 태그 생성기',
    shortDescription:
      'HTML 제목, 메타 설명, 캐노니컬, robots, 오픈 그래프, 트위터/X 카드 태그를 만들고 소셜 카드 미리보기로 바로 확인하세요.',
    keywords: [
      '메타 태그 생성기',
      '오픈 그래프 생성기',
      '트위터 카드 생성기',
      'HTML SEO 헤드 태그',
      '오픈 그래프 메타 태그',
      'SEO 메타 태그 생성기',
      '메타 설명 생성기',
      'HTML 메타 태그 만들기',
      '소셜 미디어 메타 태그',
    ],
    seo: {
      title: '메타 태그 생성기 – 오픈 그래프·트위터 카드 태그 무료 온라인 만들기 | UtilityFlow',
      description:
        '제목, 설명, 캐노니컬, 오픈 그래프, 트위터 카드 태그를 깔끔하게 만들고 길이 검사와 소셜 카드 미리보기까지 확인하세요. 설치나 가입 없이 무료로 사용할 수 있으며, 완성된 HTML은 어떤 웹사이트에도 그대로 붙여넣을 수 있습니다. 미리보기로 확인하면 공유 효과를 높일 수 있습니다.',
      primaryKeyword: '메타 태그 생성기',
      secondaryKeywords: [
        '오픈 그래프 태그 생성기',
        '소셜 공유 메타 생성기',
        'HTML 헤드 SEO 빌더',
        '트위터 카드 메타 생성기',
      ],
      longTailKeywords: [
        '오픈 그래프 트위터 카드 HTML 메타 태그 무료 생성',
        '메타 제목 설명 길이 소셜 카드 미리보기로 확인',
        '복사해서 붙여넣는 SEO 메타 헤드 태그 HTML 다운로드',
        '오픈 그래프 미리보기와 함께 웹사이트 메타 태그 만들기',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '표준에 맞는 HTML <head> 메타데이터를 만드세요. <title>, <meta name="description">, 캐노니컬 URL, 인덱싱 지시문, 오픈 그래프 태그(og:*), 트위터/X 카드 마크업까지 속성 이스케이프 처리와 실시간 소셜 카드 미리보기를 제공합니다.',
  },
  'serp-snippet-preview': {
    slug: 'serp-seunipet-miribogi',
    name: 'SERP 스니펫 미리보기',
    shortDescription:
      '실제 캔버스 픽셀 너비 제목 검사와 굵은 키워드 일치를 이용해 구글 데스크톱·모바일 검색 결과를 시뮬레이션하세요.',
    keywords: [
      'SERP 미리보기 도구',
      '구글 스니펫 시뮬레이터',
      'SEO 제목 픽셀 너비 검사기',
      '메타 설명 미리보기',
      '구글 SERP 미리보기',
      '검색 결과 미리보기 도구',
      'SEO 스니펫 검사기',
      '구글 제목 검사기',
      '메타 설명 길이 검사기',
    ],
    seo: {
      title: 'SERP 스니펫 미리보기 – 구글 검색 결과 제목 픽셀 너비 검사 도구 | UtilityFlow',
      description:
        '게시 전에 구글 검색 스니펫을 데스크톱과 모바일에서 미리 보고 실제 픽셀 너비 제목 검사, 굵은 키워드 일치, 잘림 경고를 확인하세요. 제목을 다듬어 클릭률을 높이고 검색 결과에서 잘리는 것을 미리 막을 수 있습니다. 검색 결과에서 제목이 잘리지 않게 다듬을 수 있습니다.',
      primaryKeyword: 'SERP 스니펫 미리보기',
      secondaryKeywords: [
        '구글 SERP 시뮬레이터',
        'SEO 제목 픽셀 너비 검사기',
        '모바일 검색 결과 미리보기',
        '데스크톱 SERP 미리보기 도구',
      ],
      longTailKeywords: [
        '구글 SEO 제목 580px 픽셀 너비 온라인 확인',
        '데스크톱 모바일 검색 스니펫 잘림 미리보기',
        '메타 설명 굵은 키워드 일치 테스트',
        '페이지 게시 전 구글 검색 결과 스니펫 미리보기',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '글자 수 추측이 아니라 HTML5 캔버스 글꼴 측정으로 SEO 제목이 구글의 약 580픽셀 표시 범위에 들어가는지 측정하고, 굵은 키워드 일치가 적용된 데스크톱·모바일 검색 카드를 미리 볼 수 있습니다.',
  },
  'xml-sitemap-generator': {
    slug: 'xml-saiteumaep-saengseonggi',
    name: 'XML 사이트맵 생성기',
    shortDescription:
      'URL 목록에서 중복 제거, <lastmod>, <changefreq>를 적용한 유효한 Sitemaps.org XML 파일을 만들고 .xml로 다운로드하세요.',
    keywords: [
      'XML 사이트맵 생성기',
      '사이트맵 XML 빌더',
      'XML 사이트맵 온라인 만들기',
      'SEO 사이트맵 생성기',
      '사이트맵 생성기 무료',
      'XML 사이트맵 제작 온라인',
      'sitemap.xml 생성',
      '사이트맵 빌더 도구',
      '웹사이트 사이트맵 생성기',
    ],
    seo: {
      title: 'XML 사이트맵 생성기 – sitemap.xml 파일 무료 온라인 만들기 | UtilityFlow',
      description:
        '캐노니컬 URL 목록을 중복 제거, lastmod 날짜, changefreq 힌트, XML 이스케이프가 적용된 유효한 sitemap.xml로 바꾸세요. 무료로 브라우저에서 바로 만들 수 있으며, 완성된 파일은 사이트 루트에 업로드해 제출하면 됩니다. 제출까지 한 번에 준비하세요.',
      primaryKeyword: 'XML 사이트맵 생성기',
      secondaryKeywords: [
        '사이트맵 XML 빌더',
        'sitemap.xml 무료 만들기',
        '캐노니컬 URL 사이트맵 도구',
        'sitemap.xml 파일 생성기',
      ],
      longTailKeywords: [
        'URL 목록으로 유효한 XML 사이트맵 오프라인 생성',
        'lastmod changefreq 태그가 있는 sitemap.xml 만들기',
        'XML 사이트맵 URL 특수 문자 이스케이프',
        '작은 웹사이트용 XML 사이트맵 무료 온라인 만들기',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '캐노니컬 https:// URL 목록을 Sitemaps 0.9 스키마에 맞는 유효한 sitemap.xml로 바꿉니다. 잘못된 URL 필터링, 자동 중복 제거, XML 문자 이스케이프, .xml 내보내기를 제공합니다.',
  },
  'robots-txt-generator': {
    slug: 'robots-txt-saengseonggi',
    name: 'robots.txt 생성기',
    shortDescription:
      'User-agent별 Allow/Disallow 경로, Crawl-delay, Sitemap 지시문이 포함된 유효한 robots.txt 크롤러 규칙을 그룹별로 만드세요.',
    keywords: [
      'robots.txt 생성기',
      'robots txt 만들기',
      '크롤러 허용 차단 빌더',
      '사이트맵 지시문 생성기',
      'robots txt 제작 온라인',
      'robots.txt 파일 생성기',
      '검색 크롤러 차단',
      'robots txt 허용 차단',
      'robots.txt 검사 빌더',
    ],
    seo: {
      title: 'robots.txt 생성기 – 크롤러 허용·차단 규칙 무료 만들기 | UtilityFlow',
      description:
        '스타터 프리셋으로 User-agent 그룹, Allow·Disallow 규칙, crawl-delay, 사이트맵 링크가 포함된 유효한 robots.txt를 만드세요. 무료로 브라우저에서 바로 만들 수 있으며, 완성된 파일은 도메인 루트에 두면 됩니다. 배포 전에 테스터로 검증하세요.',
      primaryKeyword: 'robots.txt 생성기',
      secondaryKeywords: [
        'robots txt 제작기',
        '크롤러 경로 차단',
        '워드프레스 SPA robots.txt',
        'robots.txt 파일 제작기',
      ],
      longTailKeywords: [
        '리액트 Vite Cloudflare Pages용 깔끔한 robots.txt 생성',
        'robots.txt 파일에 여러 사이트맵 지시문 추가',
        '스테이징 환경 검색 크롤러 robots.txt 차단',
        'AI 크롤러 차단 robots.txt 만들기',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '오픈 사이트, SaaS 웹 앱, 워드프레스, 스테이징 잠금용 스타터 프리셋으로 깔끔하게 그룹화된 robots.txt 지시문을 만드세요. 사용자 지정 User-agent 행, Allow/Disallow, Crawl-delay, Sitemap: 선언을 지원합니다.',
  },
  'schema-markup-generator': {
    slug: 'seukima-makeueop-saengseonggi',
    name: '스키마 마크업 생성기',
    shortDescription:
      'Article, FAQPage, Product, Organization, BreadcrumbList용 유효한 Schema.org JSON-LD 스크립트를 만드세요.',
    keywords: [
      '스키마 마크업 생성기',
      'JSON-LD 생성기',
      'FAQ 스키마 생성기',
      '구조화 데이터 빌더',
      '구조화 데이터 생성기',
      'Schema.org JSON-LD 도구',
      '리치 스니펫 스키마 생성기',
      'FAQPage 스키마 생성기',
      '제품 스키마 마크업',
    ],
    seo: {
      title: '스키마 마크업 생성기 – JSON-LD 구조화 데이터 무료 만들기 | UtilityFlow',
      description:
        'Article, FAQPage, Product, Organization, BreadcrumbList용 유효한 Schema.org JSON-LD를 안전하게 이스케이프해 스크립트 복사와 .jsonld 내보내기까지 제공합니다. 설치 없이 브라우저에서 무료로 만들 수 있습니다.',
      primaryKeyword: '스키마 마크업 생성기',
      secondaryKeywords: [
        'JSON-LD 생성기 온라인',
        'FAQPage 구조화 데이터 도구',
        '제품 스키마 빌더',
        '구조화 데이터 마크업 도구',
      ],
      longTailKeywords: [
        '유효한 Schema.org JSON-LD 스크립트 태그 무료 생성',
        '동적 FAQPage 브레드크럼 구조화 데이터 만들기',
        'HTML 스크립트 태그용 JSON-LD 안전 이스케이프',
        '글 제품 페이지용 JSON-LD 스키마 마크업 만들기',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Article, FAQPage, Product, Organization, BreadcrumbList용 깔끔한 Schema.org JSON-LD 구조화 데이터 블록을 만드세요. 동적 행 빌더, 스크립트 태그 안에서 HTML에 안전한 < 이스케이프, .jsonld 내보내기를 제공합니다.',
  },
  'url-slug-generator': {
    slug: 'url-seulleogeu-saengseonggi',
    name: 'URL 슬러그 생성기',
    shortDescription:
      '글 제목을 불용어 필터링과 함께 깔끔하고 악센트 변환된 SEO URL 슬러그로 일괄 변환하세요.',
    keywords: [
      'URL 슬러그 생성기',
      'SEO 슬러그 메이커',
      '깔끔한 퍼머링크 생성기',
      '일괄 슬러그 변환기',
      'SEO 친화적 URL 생성기',
      '블로그 제목 슬러그 변환기',
      '퍼머링크 슬러그 메이커',
      'URL용 불용어 제거기',
      '악센트 ASCII 슬러그 변환기',
    ],
    seo: {
      title: 'URL 슬러그 생성기 – SEO 친화적 퍼머링크 무료 만들기 도구 | UtilityFlow',
      description:
        '글 제목을 악센트 변환, 불용어 제거, 단어 경계 자르기를 적용한 소문자 SEO 슬러그로 대량 변환하세요. 브라우저에서 바로 가입 없이 모두 무료이며, 완성된 슬러그는 블로그와 제품 페이지에 바로 쓸 수 있습니다. 제목을 붙여넣으면 결과 표로 한 번에 변환할 수 있습니다.',
      primaryKeyword: 'URL 슬러그 생성기',
      secondaryKeywords: [
        'SEO 친화적 URL 생성기',
        '일괄 제목 슬러그 변환',
        '불용어 슬러그 클리너',
        '퍼머링크 슬러그 메이커',
      ],
      longTailKeywords: [
        '블로그 제목을 깔끔한 SEO URL 슬러그로 일괄 변환',
        '악센트 문자를 ASCII URL 슬러그로 변환',
        '긴 URL 슬러그를 단어 경계에서 깔끔하게 자르기',
        '블로그 제목 일괄 SEO 친화적 URL 슬러그 변환',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '단일 글이나 대량 콘텐츠 캘린더 전체에 걸쳐 읽기 쉬운 하이픈 퍼머링크를 표준화하세요. 발음 구별 부호를 깔끔하게 변환하고(Café → cafe), 선택적으로 불용어를 제거하며, 단어 중간에서 자르지 않고 깔끔한 최대 길이를 적용하고 전체 URL을 미리 봅니다.',
  },
  'keyword-density-checker': {
    slug: 'kiwodeu-mildo-geomsagi',
    name: '키워드 밀도 검사기',
    shortDescription:
      '단어 수, 목표 키워드 밀도, 읽기 시간, 상위 1·2·3단어 구 빈도를 로컬에서 감사하세요.',
    keywords: [
      '키워드 밀도 검사기',
      'SEO 콘텐츠 분석기',
      'n-gram 빈도 분석기',
      '구 반복 감사',
      '키워드 밀도 온라인 확인',
      '콘텐츠 키워드 빈도 도구',
      'SEO 텍스트 분석기 무료',
      '목표 키워드 밀도 계산기',
      '바이그램 트라이그램 분석기',
    ],
    seo: {
      title: '키워드 밀도 검사기 – 콘텐츠 단어 빈도 분석 무료 온라인 검사 도구 | UtilityFlow',
      description:
        '글 초안이나 HTML을 붙여넣어 단어 수, 읽기 시간, 목표 키워드 밀도, 상위 1·2·3단어 구를 확인하세요. 비공개로 처리되며 브라우저에서 바로 사용할 수 있고, 과도한 반복을 찾아 자연스럽게 다듬을 수 있습니다. 초안의 주제 집중도를 한눈에 쉽게 파악할 수 있습니다.',
      primaryKeyword: '키워드 밀도 검사기',
      secondaryKeywords: [
        'SEO 문구 빈도 분석기',
        '2단어 3단어 n-gram 카운터',
        '키워드 반복 온라인 확인',
        '목표 키워드 밀도 계산기',
      ],
      longTailKeywords: [
        '업로드 없이 붙여넣은 HTML 콘텐츠 키워드 밀도 분석',
        '블로그 초안 과도한 2단어 3단어 구 찾기',
        '브라우저에서 목표 키워드 빈도 깔끔하게 확인',
        '블로그 초안 키워드 밀도 온라인 확인 방법',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '콘텐츠 초안이나 붙여넣은 HTML 복사본의 어휘 깊이, 읽기 시간, 정확한 목표 구 히트 수, 상위 1단어·2단어·3단어 n-gram 빈도를 살펴보세요. 오래된 키워드 할당량을 좇기보다 우연한 과도한 반복을 찾아내는 것이 목적입니다.',
  },
  'canonical-hreflang-generator': {
    slug: 'kaenonikeol-hreflang-saengseonggi',
    name: '캐노니컬·hreflang 생성기',
    shortDescription:
      '다국어 페이지용 HTML/XML hreflang·캐노니컬 태그를 만들거나 Cloudflare Pages _redirects, Apache, Nginx용 301 리디렉션을 만드세요.',
    keywords: [
      'hreflang 생성기',
      '캐노니컬 태그 빌더',
      '301 리디렉션 생성기',
      'Cloudflare _redirects 빌더',
      '캐노니컬 URL 생성기',
      'hreflang 태그 생성기',
      '다국어 SEO 태그',
      '301 리디렉션 규칙 생성기',
      'Apache htaccess 리디렉션 빌더',
    ],
    seo: {
      title: '캐노니컬·hreflang 생성기 – 301 리디렉션 규칙 무료 만들기 | UtilityFlow',
      description:
        '다국어 페이지용 hreflang·캐노니컬 태그와 Cloudflare Pages, Apache, Nginx용 301 리디렉션 규칙을 만들어 복사하고 바로 배포하세요. 무료로 제공되며, 상호 hreflang 세트와 자기 참조 캐노니컬을 빠짐없이 만들 수 있습니다. 배포 후 검증 안내합니다.',
      primaryKeyword: 'hreflang 생성기',
      secondaryKeywords: [
        '캐노니컬 링크 태그 생성기',
        '301 리디렉션 설정 빌더',
        'Cloudflare Pages 리디렉션 생성기',
        '캐노니컬 URL 생성기',
      ],
      longTailKeywords: [
        'hreflang HTML 태그 XML 사이트맵 xhtml 링크 생성',
        '이전 URL 목록을 Cloudflare Pages _redirects 301 규칙으로 변환',
        'Apache htaccess Nginx 301 리디렉션 온라인 만들기',
        '국제 페이지용 x-default hreflang 태그 생성',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '두 가지 필수 기술 SEO 마이그레이션을 한 곳에서 처리하세요. 다중 지역 hreflang + 캐노니컬 주석(HTML <head>와 XML 사이트맵 모두)을 만들거나, URL 매핑 목록을 Cloudflare Pages, Apache, Nginx용으로 바로 배포할 수 있는 301 리디렉션 설정으로 변환합니다.',
  },
  'on-page-seo-checker': {
    slug: 'onpeiji-seo-geomsagi',
    name: '온페이지 SEO 검사기',
    shortDescription:
      '붙여넣은 HTML 소스를 DOMParser로 로컬에서 감사해 제목 길이, 메타 설명, H1~H4 계층, alt 텍스트, JSON-LD를 확인하세요.',
    keywords: [
      '온페이지 SEO 검사기',
      'HTML SEO 분석기',
      '제목 계층 검사기',
      '이미지 alt 감사 도구',
      'SEO 감사 도구 무료',
      '메타 설명 길이 검사기',
      '타이틀 태그 길이 검사기',
      'HTML SEO 태그 검사기',
      'JSON-LD 검사기',
    ],
    seo: {
      title: '온페이지 SEO 검사기 – HTML 소스 감사 무료 온라인 검사 도구 | UtilityFlow',
      description:
        '페이지 HTML 소스를 붙여넣어 제목, 메타 설명, 제목 계층, 캐노니컬, 이미지 alt 텍스트, 링크, JSON-LD를 감사하세요. 즉시 무료로 브라우저에서 바로 확인할 수 있으며, 경고를 우선순위대로 고쳐 점수를 올릴 수 있습니다. 스테이징 페이지 감사에도 그대로 쓸 수 있습니다.',
      primaryKeyword: '온페이지 SEO 검사기',
      secondaryKeywords: [
        'HTML 소스 SEO 감사',
        'H1 H2 제목 구조 검사기',
        '이미지 alt 속성 누락 확인',
        '메타 설명 길이 검사기',
      ],
      longTailKeywords: [
        '붙여넣은 HTML 소스 온페이지 SEO 태그 오프라인 감사',
        'HTML 제목 개요 H1 H4 캐노니컬 링크 확인',
        '외부 크롤링 없는 클라이언트 SEO DOM 검사기',
        'HTML 소스 붙여넣기 제목 메타 설명 제목 확인',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '붙여넣은 모든 HTML 소스(페이지 소스 보기)를 브라우저 안에서 바로 즉시 DOM 수준 기술·온페이지 SEO 검사를 실행하세요. <title>, 메타 설명, 캐노니컬, H1~H4 제목 계층, 누락된 이미지 alt 텍스트, 내부/외부 링크, 오픈 그래프, JSON-LD를 확인합니다.',
  },
  'robots-meta-tag-generator': {
    slug: 'robots-meta-taegeu-saengseonggi',
    name: 'robots 메타 태그 생성기',
    shortDescription:
      'noindex, nofollow, noarchive, max-snippet, max-image-preview, Cloudflare _headers 규칙을 세밀하게 만드세요.',
    keywords: [
      'robots 메타 태그 생성기',
      'X-Robots-Tag 빌더',
      'noindex nofollow 메타 태그',
      'max-image-preview large 태그',
      'noindex 태그 생성기',
      '메타 robots 태그 메이커',
      'robots 헤더 생성기',
      'Cloudflare _headers 생성기',
      'nosnippet 메타 태그',
    ],
    seo: {
      title: 'robots 메타 태그 생성기 – X-Robots-Tag 헤더 무료 만들기 | UtilityFlow',
      description:
        'noindex, nofollow, max-snippet, max-image-preview가 포함된 HTML robots 메타 태그와 X-Robots-Tag 헤더를 만드세요. Cloudflare _headers 출력까지 제공하며, PDF 파일의 인덱싱도 헤더로 제어할 수 있습니다.',
      primaryKeyword: 'robots 메타 태그 생성기',
      secondaryKeywords: [
        'X-Robots-Tag 헤더 생성기',
        'noindex 메타 태그 메이커',
        '구글 max-image-preview large',
        'noindex 태그 생성기',
      ],
      longTailKeywords: [
        'Cloudflare Pages PDF용 X-Robots-Tag noindex 헤더 생성',
        'max-snippet max-image-preview large 메타 robots 태그 만들기',
        'robots.txt와 메타 robots noindex 차이',
        'noindex nofollow max-snippet robots 메타 태그 만들기',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '정밀한 페이지 수준 크롤러 지시문을 만드세요. index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet, max-image-preview:large를 HTML <meta name="robots"> 태그, HTTP X-Robots-Tag 헤더, Cloudflare Pages _headers 블록으로 동시에 생성합니다.',
  },
  'image-compressor': {
    slug: 'imiji-apchuggi',
    name: '이미지 압축기',
    shortDescription:
      'HTML5 캔버스로 PNG, JPG, WebP 이미지를 로컬에서 압축하세요. 품질 슬라이더, 최대 너비 상한, 즉시 바이트 절감 지표를 제공합니다.',
    keywords: [
      '이미지 압축기',
      '이미지 온라인 압축',
      '이미지 파일 크기 줄이기',
      'WebP 이미지 최적화',
      'PNG 더 작게 압축',
      'JPG 파일 크기 온라인 줄이기',
      '이미지 크기 축소 무료',
      '웹용 이미지 최적화',
      '사진 파일 크기 줄이기',
    ],
    seo: {
      title: '이미지 압축기 – PNG·JPG·WebP 파일 크기 줄이기 무료 도구 | UtilityFlow',
      description:
        '이미지 압축기로 브라우저에서 이미지를 압축하세요. 품질을 조정하고 최대 너비를 제한하며 전후 크기를 비교하고 다운로드하세요. 업로드가 전혀 필요 없으며, 사진과 스크린샷을 무료로 가볍게 만들 수 있습니다. 이메일 첨부와 웹 게시용으로 사진 파일을 바로 가볍게 만드세요.',
      primaryKeyword: '이미지 압축기',
      secondaryKeywords: [
        'PNG JPG WebP 온라인 압축',
        '사진 파일 크기 무료 줄이기',
        '클라이언트 이미지 최적화',
        '웹사이트용 이미지 크기 줄이기',
      ],
      longTailKeywords: [
        '서버 업로드 없이 웹 코어 바이탈용 큰 이미지 압축',
        'JPG 사진 WebP 경량 형식으로 변환 축소',
        '최대 너비 조정 이미지 품질 오프라인 최적화',
        '이메일 첨부 전 이미지 파일 크기 줄이기',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      '무거운 PNG, JPG, WebP 애셋을 더 빠른 페이지 로드와 가벼운 이메일 첨부를 위해 브라우저 안에서 바로 줄이세요. 손실 압축 품질을 조정하고 선택적인 너비 상한을 적용하며 원격 파일 업로드 없이 정확한 바이트 절감량을 비교할 수 있습니다.',
  },
  'image-resizer': {
    slug: 'imiji-keugi-jojeolgi',
    name: '이미지 크기 조절기',
    shortDescription:
      '이미지를 정확한 픽셀 크기나 소셜/OG 프리셋으로 바꾸세요. 종횡비 잠금, 스마트 중앙 커버 크롭, PNG/JPG/WebP 내보내기를 제공합니다.',
    keywords: [
      '이미지 크기 조절기',
      '이미지 픽셀 크기 변경',
      '이미지 크로퍼 온라인',
      'OG 이미지 크기 조절 1200x630',
      '이미지 온라인 크기 변경 무료',
      '이미지 크기 변경',
      '인스타그램용 사진 크기 변경',
      '이미지 크기에 맞게 자르기',
      '이미지 1200x630 크기 변경',
    ],
    seo: {
      title: '이미지 크기 조절기 – 정확한 사진 픽셀 크기 변경 무료 온라인 도구 | UtilityFlow',
      description:
        '이미지 크기 조절기로 사진을 정확한 픽셀로 바꾸세요. 프리셋을 쓰고 종횡비를 잠그며 커버 크롭하고 PNG, JPG, WebP로 비공개로 내보낼 수 있습니다. 소셜 공유와 프로필 사진 크기를 무료로 맞출 수 있습니다. 블로그와 SNS에 맞는 크기로 무료로 맞출 수 있습니다.',
      primaryKeyword: '이미지 크기 조절기',
      secondaryKeywords: [
        '사진 정확한 픽셀 크기 변경',
        '종횡비 커버 크롭 도구',
        '소셜 이미지 크기 프리셋 조절기',
        '소셜 미디어용 이미지 크기 변경',
      ],
      longTailKeywords: [
        '늘어나지 않게 이미지 1200x630 오픈 그래프 크기로 변경',
        '사진 중앙 커버 크롭 정사각형 1080x1080 로컬',
        '브라우저에서 이미지 픽셀 너비 높이 무료 변경',
        '인스타그램용 세로 사진 1080x1080 정사각형 크기 변경',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      '그래픽과 사진을 정확한 픽셀 크기로 바꾸거나 내장된 오픈 그래프(1200×630), 유튜브 HD(1280×720), 정사각형(1080×1080), 아바타(512×512) 프리셋을 클릭하세요. 고품질 캔버스 리샘플링과 선택적인 중앙 커버 크롭으로 왜곡을 피합니다.',
  },
  'image-format-converter': {
    slug: 'imiji-hyeongsik-byeonhwangi',
    name: '이미지 형식 변환기',
    shortDescription:
      'PNG, JPG, WebP, GIF, SVG 이미지를 PNG, JPG, WebP로 일괄 변환하세요. 품질 조절과 JPG 배경 매트 채우기를 로컬에서 제공합니다.',
    keywords: [
      '이미지 형식 변환기',
      'PNG WebP 변환기',
      'WebP PNG 변환기',
      'SVG PNG 브라우저 변환기',
      'JPG PNG 변환',
      'PNG JPG 변환',
      '일괄 이미지 변환기',
      'WebP JPG 변환기',
      '이미지 변환기 온라인 무료',
    ],
    seo: {
      title: '이미지 형식 변환기 – PNG·JPG·WebP 변환 무료 온라인 도구 | UtilityFlow',
      description:
        '이미지 형식 변환기로 PNG, JPG, WebP 사이를 변환하세요. 일괄 변환하고 JPG 품질을 설정하며 투명 배경을 채운 뒤 내보내세요. 브라우저에서 무료로 동작하며, 여러 이미지를 한 번에 같은 형식으로 바꿀 수 있습니다. 오래된 앱에서도 열리는 형식으로 바꿀 수 있습니다.',
      primaryKeyword: '이미지 형식 변환기',
      secondaryKeywords: [
        'WebP를 JPG나 PNG로 변환',
        '일괄 PNG WebP 변환기',
        '투명 PNG JPG 배경 채우기',
        'JPG를 PNG로 무료 변환',
      ],
      longTailKeywords: [
        '여러 PNG JPG 이미지를 WebP로 일괄 오프라인 변환',
        'WebP 스크린샷 업로드 없이 표준 PNG로 변환',
        'JPG로 변환할 때 투명 PNG 배경색 채우기',
        '브라우저에서 이미지 형식 PNG에서 JPG로 변경',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'PNG, JPG, WebP, GIF, SVG 파일을 웹용 WebP, 범용 JPG, 손실 없는 투명 PNG로 브라우저 안에서 완전히 일괄 변환하세요. 투명도를 JPEG로 평탄화할 때 사용자 지정 배경 매트 채우기도 제공합니다.',
  },
  'image-rotate-flip': {
    slug: 'imiji-hoejeon-dwijipgi',
    name: '이미지 회전·뒤집기',
    shortDescription:
      '이미지를 90°/180°/270° 회전하고 가로·세로로 뒤집으며 그레이스케일, 밝기, 대비 필터를 브라우저에서 실시간 적용하세요.',
    keywords: [
      '이미지 온라인 회전',
      '이미지 가로 뒤집기',
      '그레이스케일 이미지 필터',
      '이미지 밝기 대비 조정',
      '사진 90도 회전',
      '사진 온라인 뒤집기',
      '이미지 미러 온라인',
      '이미지 온라인 바로잡기',
      '사진 필터 편집기 온라인',
    ],
    seo: {
      title: '이미지 회전·뒤집기 – 사진 방향 바로잡기 무료 온라인 편집 도구 | UtilityFlow',
      description:
        '이미지를 온라인에서 90, 180, 270도로 회전하고 사진을 가로·세로로 뒤집으며 밝기, 대비, 그레이스케일을 조정하세요. 브라우저에서 무료로 사용할 수 있으며, 옆으로 누운 사진과 미러링된 셀카를 바로잡을 수 있습니다. 스캔 문서와 영수증 방향도 바로잡을 수 있습니다.',
      primaryKeyword: '이미지 온라인 회전',
      secondaryKeywords: [
        '이미지 가로 세로 뒤집기',
        '사진 그레이스케일 온라인 변환',
        '밝기 대비 브라우저 조정',
        '사진 90도 온라인 회전',
      ],
      longTailKeywords: [
        '옆으로 누운 사진 회전 90도 오프라인 브라우저 수정',
        '포토샵 없이 셀카 이미지 가로 미러',
        '흑백 그레이스케일 필터 적용 PNG 내보내기',
        '스캔 문서 이미지 올바른 방향으로 회전',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      '옆으로 누운 방향을 바로잡고, 셀카를 가로·세로로 미러링하며, 사진을 흑백 그레이스케일로 바꾸고, 로컬 HTML5 캔버스 2D 변환으로 밝기와 대비를 실시간으로 세밀하게 조정하세요.',
  },
  'image-to-base64': {
    slug: 'imiji-base64-byeonhwangi',
    name: '이미지 Base64 변환기',
    shortDescription:
      'PNG, JPG, WebP, SVG, ICO 이미지를 Base64 데이터 URI, HTML <img> 태그, CSS 규칙으로 인코딩하거나 Base64 문자열을 다시 이미지로 디코딩하세요.',
    keywords: [
      '이미지 Base64 변환',
      'Base64 이미지 디코더',
      '데이터 URI 생성기',
      'CSS 배경 Base64 이미지',
      '이미지 데이터 URI 변환',
      'Base64 인코더 이미지',
      '이미지 Base64 온라인 무료',
      'PNG Base64 인코딩',
      'Base64 이미지 변환기',
    ],
    seo: {
      title: '이미지 Base64 변환기 – 데이터 URI 인코더·디코더 무료 도구 | UtilityFlow',
      description:
        '이미지 Base64 변환기로 데이터 URI, 순수 Base64, HTML img 태그, CSS 배경 스니펫을 만들거나 Base64를 다시 이미지 미리보기로 디코딩하세요. 무료로 제공되며, 작은 아이콘을 CSS와 이메일에 바로 삽입할 수 있습니다. 이메일 템플릿에도 바로 쓸 수 있습니다.',
      primaryKeyword: '이미지 Base64 변환',
      secondaryKeywords: [
        '데이터 URI 이미지 인코더',
        'Base64 이미지 미리보기',
        'CSS에 SVG PNG 인라인',
        '이미지 Base64 온라인 무료',
      ],
      longTailKeywords: [
        'PNG 아이콘 CSS background-image 데이터 URI 오프라인 변환',
        '순수 Base64 문자열 다운로드 가능한 이미지 미리보기로 디코딩',
        '이미지 바이너리 바이트 크기 Base64 문자열 크기 비교',
        'HTML 이메일용 작은 로고 이미지 Base64 인코딩',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      '작은 아이콘, 로고, 이메일 그래픽을 독립적인 data:image/...;base64,... URI, 복사 가능한 HTML <img> 태그, CSS background-image 선언으로 바꾸세요. 모드를 전환하면 순수 Base64 이미지 페이로드를 검사하고 다운로드할 수도 있습니다.',
  },
  'color-contrast-checker': {
    slug: 'saeksang-daebi-geomsagi',
    name: '색상 대비 검사기',
    shortDescription:
      'WCAG 2.1 AA/AAA 색상 대비 비율을 테스트하고 HEX/RGB/HSL 값을 변환하며 업로드한 이미지에서 주요 색상 팔레트를 추출하세요.',
    keywords: [
      'WCAG 색상 대비 검사기',
      '접근성 대비 비율',
      '이미지 색상 팔레트 추출기',
      'HEX RGB HSL 색상 선택기',
      'WCAG AA 대비 비율 계산기',
      'AAA 대비 검사기 온라인',
      '접근 가능한 색상 조합',
      '텍스트 배경 대비 테스트',
      '디자인 접근성 검사기',
    ],
    seo: {
      title: '색상 대비 검사기 – WCAG AA·AAA 접근성 확인 무료 도구 | UtilityFlow',
      description:
        '텍스트·배경 색상 쌍의 WCAG 2.1 AA·AAA 대비 비율을 확인하고 HEX, RGB, HSL을 변환하며 이미지에서 팔레트를 추출하세요. 브라우저에서 무료로 사용할 수 있으며, 다크 모드와 버튼 색상도 함께 검사할 수 있습니다. 브랜드 색상 조합도 미리 검사할 수 있습니다.',
      primaryKeyword: '색상 대비 검사기',
      secondaryKeywords: [
        'WCAG AA AAA 대비 비율 계산기',
        '이미지에서 색상 팔레트 추출',
        '접근 가능한 텍스트 배경 색상 검사기',
        '일반 큰 텍스트 WCAG 대비 비율',
      ],
      longTailKeywords: [
        'WCAG 2.1 일반 큰 텍스트 대비 비율 온라인 테스트',
        '스크린샷 주요 HEX 스와치 대비 검사기로 가져오기',
        '다크 모드 UI 전경 배경 색상 접근성 확인',
        '본문 텍스트 WCAG AA 통과 대비 비율',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      '공식 WCAG 2.1 상대 휘도와 대비 기준(AA 4.5:1, AA 큰 텍스트 3.0:1, AAA 7.0:1)에 따라 UI 색상 조합을 검증하고, 동기화된 HEX/RGB/HSL 값을 편집하며, 스크린샷이나 로고를 업로드해 주요 HEX 스와치를 전경이나 배경 슬롯으로 바로 가져오세요.',
  },
  'qr-code-scanner': {
    slug: 'qr-kodeu-seukaeneo',
    name: 'QR 코드 스캐너',
    shortDescription:
      '업로드한 이미지나 기기 카메라로 QR 코드를 브라우저에서 비공개로 디코딩하거나 다운로드 가능한 PNG/SVG vCard 연락처 QR 코드를 만드세요.',
    keywords: [
      'QR 코드 스캐너 온라인',
      '이미지에서 QR 코드 디코딩',
      'vCard QR 코드 생성기',
      '카메라 QR 리더 브라우저',
      '스크린샷에서 QR 코드 스캔',
      '앱 없이 QR 코드 리더',
      'QR 코드 PNG JPG 디코딩',
      '와이파이 QR 코드 스캐너',
      'QR 코드 페이로드 리더',
    ],
    seo: {
      title: 'QR 코드 스캐너 – QR 이미지 디코딩·vCard 무료 만들기 도구 | UtilityFlow',
      description:
        '스크린샷, 사진, 웹캠으로 QR 코드를 브라우저에서 바로 스캔·디코딩하거나 PNG·SVG 형식으로 다운로드 가능한 vCard 연락처 QR 코드를 만드세요. 무료로 제공되며, 인쇄 전에 목적지 URL을 미리 확인할 수 있습니다. 전단지 인쇄 전에 스캔해 목적지를 꼭 확인하세요.',
      primaryKeyword: 'QR 코드 스캐너',
      secondaryKeywords: [
        'QR 코드 이미지 리더 온라인',
        '스크린샷 QR 무료 스캔',
        'vCard 연락처 QR 코드 생성',
        '웹캠 QR 코드 리더 브라우저',
      ],
      longTailKeywords: [
        '업로드한 PNG JPG 스크린샷 QR 코드 오프라인 디코딩',
        '앱 설치 없이 노트북 웹캠 QR 코드 스캔',
        '다운로드 가능한 vCard 3.0 연락처 QR 코드 SVG PNG 만들기',
        '스크린샷 반전 다크 모드 QR 코드 읽기',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '스크린샷, 사진, 선택적인 실시간 카메라 스트림에서 QR 코드 내용을 브라우저 안에서 바로 읽으세요. 자동 페이로드 분류(URL, 와이파이, vCard, 텍스트)가 적용됩니다. 여기에 더해 다운로드 가능한 PNG·SVG 연락처 카드를 내보내는 vCard 연락처 QR 빌더도 함께 제공합니다.',
  },
  'password-generator': {
    slug: 'bimilbeonho-saengseonggi',
    name: '비밀번호 생성기',
    shortDescription:
      'crypto.getRandomValues 거부 샘플링으로 편향 없는 무작위 비밀번호와 Diceware식 패스프레이즈를 만들고 정확한 엔트로피를 계산하세요.',
    keywords: [
      '암호학적 비밀번호 생성기',
      '보안 무작위 비밀번호 생성기',
      'Diceware 패스프레이즈 생성기',
      'crypto getRandomValues 비밀번호',
      '강력한 비밀번호 메이커 온라인',
      '무작위 패스프레이즈 생성기',
      '비밀번호 엔트로피 검사기',
      '보안 비밀번호 무료 생성',
      '편향 없는 무작위 비밀번호 도구',
    ],
    seo: {
      title: '비밀번호 생성기 – 안전한 무작위 비밀번호 무료 온라인 만들기 도구 | UtilityFlow',
      description:
        '브라우저에서 Web Crypto로 강력한 무작위 비밀번호와 기억하기 쉬운 Diceware 패스프레이즈를 로컬로 만드세요. 정확한 엔트로피 점수와 저장·업로드 없음을 제공하며, 한 번의 클릭으로 최대 10개까지 일괄 생성할 수 있습니다. 마스터 비밀번호용 패스프레이즈도 만들 수 있습니다.',
      primaryKeyword: '비밀번호 생성기',
      secondaryKeywords: [
        '암호학적으로 안전한 비밀번호 생성기',
        '기억하기 쉬운 패스프레이즈 생성기 온라인',
        '비밀번호 엔트로피 계산기',
        '기호 포함 무작위 비밀번호 메이커',
      ],
      longTailKeywords: [
        '모듈로 편향 없이 crypto getRandomValues로 무작위 비밀번호 생성',
        '5단어 Diceware 패스프레이즈 로컬 오프라인 만들기',
        '모호한 문자 0 O 1 l I 제외 비밀번호 생성기',
        '18자 비밀번호 엔트로피 비트 수',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      '브라우저의 하드웨어 기반 CSPRNG(window.crypto.getRandomValues)를 이용해 거부 샘플링으로 모듈로 편향을 제거하고 Fisher-Yates 셔플로 예측 가능한 문자 위치를 없애며, 100% 로컬로 고엔트로피 비밀번호와 기억하기 쉬운 다단어 패스프레이즈를 생성하세요.',
  },
  'file-hash-verifier': {
    slug: 'pail-haesi-geomsagi',
    name: '파일 해시 검사기',
    shortDescription:
      'Web Crypto SubtleCrypto로 로컬 SHA-256, SHA-512, SHA-384, SHA-1 바이너리 파일 체크섬을 계산하고 게시된 해시와 비교해 다운로드를 검증하세요.',
    keywords: [
      '파일 해시 검사기',
      'SHA-256 파일 체크섬 검사기',
      '다운로드 파일 해시 온라인 검증',
      'SHA-512 파일 해시 생성기',
      'SHA-256 체크섬 계산기',
      '파일 무결성 온라인 확인',
      '파일 체크섬 비교',
      'SHA-384 SHA-1 해시 검사기',
      'ISO 체크섬 브라우저 검증',
    ],
    seo: {
      title: '파일 해시 검사기 – SHA-256 체크섬 검증 무료 온라인 도구 | UtilityFlow',
      description:
        '브라우저에서 모든 로컬 파일의 SHA-256, SHA-512, SHA-384, SHA-1 다이제스트를 계산하고 게시된 체크섬과 비교하세요. 업로드 없이 무료로 사용할 수 있으며, 손상되거나 변조된 다운로드를 실행 전에 잡아낼 수 있습니다. 검증용 .sha256 파일도 만들 수 있습니다.',
      primaryKeyword: '파일 해시 검사기',
      secondaryKeywords: [
        'SHA-256 체크섬 계산기 파일',
        'SHA-256sum 파일 온라인 검증',
        '브라우저 SubtleCrypto 파일 다이제스트',
        'SHA-512 체크섬 검사기',
      ],
      longTailKeywords: [
        '터미널 없이 다운로드한 설치 프로그램 SHA-256 해시 확인',
        '파일 바이너리 체크섬 예상 SHA-256sum 문자열과 비교',
        '파일 업로드 없이 SHA-256 SHA-512 로컬 계산',
        '브라우저에서 리눅스 ISO SHA-256 체크섬 검증',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      '소프트웨어 설치 프로그램, 아카이브, 데이터세트, 문서의 무결성과 진위를 로컬에서 검증하세요. 하드웨어 가속 Web Crypto subtle.digest로 SHA-256, SHA-512, SHA-384, SHA-1 다이제스트를 계산하고 예상 체크섬과 즉시 비교합니다.',
  },
  'favicon-generator': {
    slug: 'pabikon-saengseonggi',
    name: '파비콘 생성기',
    shortDescription:
      '사용자 지정 모노그램 배지나 업로드한 로고에서 선명한 다중 크기 PNG 아이콘(16×16~512×512)과 진짜 다중 프레임 바이너리 favicon.ico를 만드세요.',
    keywords: [
      '파비콘 생성기',
      'favicon.ico 온라인 만들기',
      '애플 터치 아이콘 생성기',
      '텍스트 파비콘 모노그램',
      '파비콘 ico 메이커 무료',
      'PWA 아이콘 생성기 192 512',
      '웹사이트 파비콘 메이커',
      'PNG 파비콘 변환기',
      '앱 아이콘 생성기 온라인',
    ],
    seo: {
      title: '파비콘 생성기 – .ico·PNG 앱 아이콘 무료 온라인 만들기 도구 | UtilityFlow',
      description:
        '로고나 사용자 지정 모노그램 배지에서 진짜 다중 프레임 favicon.ico와 16~512픽셀 PNG, 애플 터치, PWA 아이콘을 만드세요. 브라우저에서 무료로 사용할 수 있으며, HTML 링크 태그까지 함께 복사할 수 있습니다. 새 앱의 아이콘 세트를 한 번에 만들 수 있습니다.',
      primaryKeyword: '파비콘 생성기',
      secondaryKeywords: [
        'PNG 다중 크기 ico 변환기',
        '모노그램 파비콘 빌더',
        'PWA 애플 터치 아이콘 생성기',
        '파비콘 ico 메이커 온라인 무료',
      ],
      longTailKeywords: [
        '16x16 32x32 48x48 프레임 진짜 바이너리 favicon.ico 무료 만들기',
        '텍스트 이니셜에서 웹사이트 파비콘 HTML 링크 태그 생성',
        '정사각형 로고 잘라 둥근 원 애플 터치 아이콘 180x180',
        '웹 매니페스트용 192x192 512x512 PWA 아이콘 생성',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      '몇 초 만에 깔끔한 모노그램 아이콘을 디자인하거나 기존 브랜드 로고를 업로드해 픽셀까지 선명한 16×16, 32×32, 48×48, 180×180 애플 터치, 192×192/512×512 PWA PNG 애셋과 표준에 맞는 다중 이미지 바이너리 favicon.ico, 바로 붙여넣을 수 있는 HTML <link> 마크업을 렌더링하세요.',
  },
};
