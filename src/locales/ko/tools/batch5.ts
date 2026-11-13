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
    instructions: [
      {
        title: '페이지 제목과 메타 설명 입력하기',
        description:
          '페이지 제목은 30~60자, 메타 설명은 120~160자를 목표로 입력하면서 실시간 길이 표시를 확인하세요.',
      },
      {
        title: '캐노니컬 URL과 인덱싱 지시문 설정하기',
        description:
          '페이지의 전체 캐노니컬 URL을 입력하고 크롤러가 해당 페이지를 인덱싱하고 링크를 따라갈지 선택하세요.',
      },
      {
        title: '오픈 그래프 태그 추가하기',
        description:
          '공유할 때 링크가 보기 좋게 보이도록 오픈 그래프 제목, 설명, 유형, 이미지 URL(1200×630픽셀 권장)을 입력하세요.',
      },
      {
        title: '트위터/X 카드 설정하기',
        description:
          'summary 또는 summary_large_image를 선택하고 X에 표시될 카드 제목, 설명, 이미지를 확인하세요.',
      },
      {
        title: '실시간 소셜 카드 미리보기 확인하기',
        description:
          '미리보기 패널에서 소셜 피드에 표시될 링크 모습을 확인하고 잘리거나 빠진 이미지가 있으면 게시 전에 수정하세요.',
      },
      {
        title: 'HTML 스니펫 복사 또는 다운로드하기',
        description:
          '이스케이프 처리된 HTML을 페이지 <head>에 복사해 붙여넣거나 meta-tags.html 파일을 다운로드해 템플릿에서 재사용하세요.',
      },
    ],
    examples: [
      {
        title: '표준 웹사이트 오픈 그래프·캐노니컬 블록',
        input: '제목: UtilityFlow · 유형: website · 카드: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* 및 twitter:*',
        explanation: '속성 값 안의 큰따옴표와 앰퍼샌드를 올바르게 이스케이프합니다.',
      },
      {
        title: '블로그 글용 article 유형 태그',
        input: '제목: 이미지 압축 가이드 · 유형: article · 카드: summary_large_image',
        output: 'og:type="article"이 포함된 전체 헤드 태그 블록과 1200×630 미리보기 이미지',
        explanation: 'article 유형을 지정하면 각 플랫폼이 글에 맞는 미리보기 형식을 표시합니다.',
      },
    ],
    benefits: [
      '태그 속성 안의 &, ", <, > 문자를 자동으로 HTML 이스케이프합니다',
      'SEO 헤드 태그, 오픈 그래프 태그, 트위터/X 카드를 하나의 일관된 스니펫으로 합칩니다',
      '배포 전에 공유 링크가 소셜 피드에 어떻게 보이는지 미리 보여줍니다',
      '독립 실행형 meta-tags.html 스니펫 다운로드를 지원합니다',
    ],
    useCases: [
      '런칭 랜딩 페이지, 마케팅 마이크로사이트, SaaS 제품 허브 배포하기',
      '글 전체에 오픈 그래프 이미지 크기와 카드 유형을 표준화하기',
      '운영 배포 전에 index/noindex와 캐노니컬 URL을 확인하기',
      '마케팅 팀이 프런트엔드 개발자에게 깔끔한 <head> 템플릿을 넘기기',
    ],
    faqs: [
      {
        question: '오픈 그래프와 트위터/X용 태그를 따로 만들어야 하나요?',
        answer:
          'X는 필요할 때 제목과 설명을 오픈 그래프에서 가져오기도 하지만, og:*와 함께 twitter:card(summary_large_image)를 명시하면 어디서든 넓은 이미지 미리보기를 안정적으로 표시할 수 있습니다.',
      },
      {
        question: 'og:image 크기는 어느 정도가 적당한가요?',
        answer:
          '1200×630픽셀(종횡비 1.91:1) 이미지를 HTTPS URL로 호스팅하고 robots.txt로 차단하지 않는 것이 좋습니다.',
      },
      {
        question: '<meta name="keywords">를 넣으면 구글 순위에 도움이 되나요?',
        answer:
          '주요 검색엔진은 과거의 스팸 문제 때문에 메타 키워드를 무시합니다. 그래서 이 생성기는 제목, 설명, 캐노니컬, 소셜 태그처럼 효과가 있는 태그로 <head>를 깔끔하게 유지합니다.',
      },
      {
        question: '메타 태그 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 브라우저 안에서만 동작하므로 제목, 설명, URL이 서버로 전송되지 않습니다.',
      },
      {
        question: '메타 태그 생성기를 쓰려면 설치가 필요한가요?',
        answer:
          '아니요. 최신 브라우저에서 설치 없이 바로 동작하며 데스크톱과 모바일 모두에서 태그를 만들 수 있습니다.',
      },
      {
        question: '메타 제목의 적정 길이는 어느 정도인가요?',
        answer:
          '검색 결과와 소셜 카드에서 말줄임표로 잘리지 않고 온전히 보이도록 30~60자를 목표로 하세요.',
      },
      {
        question: '메타 설명의 적정 길이는 어느 정도인가요?',
        answer:
          '데스크톱과 모바일 검색 결과에 전체 요약이 보이도록 120~160자 사이로 유지하세요.',
      },
      {
        question: '제목의 특수 문자는 어떻게 처리되나요?',
        answer:
          '속성 값 안의 &, ", <, >를 자동으로 HTML 이스케이프하므로 따옴표와 앰퍼샌드가 페이지 마크업을 깨뜨리지 않습니다.',
      },
      {
        question: '캐노니컬 URL이란 무엇이고 왜 생성기에 포함되나요?',
        answer:
          '비슷한 페이지가 여러 개 있을 때 어느 버전이 원본인지 검색엔진에 알려주는 URL입니다. 중복 콘텐츠 혼란을 막아줍니다.',
      },
      {
        question: '오픈 그래프와 트위터 카드 태그의 차이는 무엇인가요?',
        answer:
          '오픈 그래프 태그는 페이스북, 링크드인, 메신저 앱에서의 링크 미리보기를 제어하고, 트위터 카드 태그는 같은 링크가 X에서 어떻게 보이는지를 제어합니다.',
      },
      {
        question: '트위터 카드 유형은 무엇을 선택해야 하나요?',
        answer:
          '글과 제품 페이지처럼 이미지가 중요한 페이지에는 summary_large_image를, 작은 썸네일로 충분한 일반 텍스트 페이지에는 summary를 사용하세요.',
      },
      {
        question: '공유했을 때 링크가 어떻게 보일지 미리 볼 수 있나요?',
        answer:
          '네, 실시간 소셜 카드 미리보기에서 게시 전에 제목, 설명, 이미지가 소셜 피드에 그대로 어떻게 표시되는지 확인할 수 있습니다.',
      },
      {
        question: '메타 태그 생성기가 페이지 내용을 업로드하나요?',
        answer:
          '아니요. 모든 작업은 브라우저 안에서 로컬로 처리되며 입력한 내용이 기기를 떠나지 않습니다.',
      },
      {
        question: '생성된 메타 태그를 웹사이트에 어떻게 추가하나요?',
        answer:
          '스니펫을 복사해 페이지 템플릿의 <head> 안에 붙여넣거나 meta-tags.html을 다운로드해 여러 페이지에서 재사용하세요.',
      },
      {
        question: 'robots noindex 지시문은 언제 사용해야 하나요?',
        answer:
          '감사 페이지, 내부 검색 결과, 라이브 페이지의 스테이징 복사본처럼 검색 결과에 절대 나타나면 안 되는 페이지에만 사용하세요.',
      },
      {
        question: '블로그 글이나 제품 페이지에도 메타 태그 생성기를 쓸 수 있나요?',
        answer:
          '네, 블로그 글에는 og:type을 article로, 스토어 페이지에는 product로 설정하면 각 플랫폼이 알맞은 미리보기 형식을 표시합니다.',
      },
      {
        question: 'og:image URL이 잘못되거나 이미지가 없으면 어떻게 되나요?',
        answer:
          '소셜 플랫폼에 이미지가 표시되지 않거나 깨진 미리보기가 나타납니다. 직접 연결되는 HTTPS 이미지 URL을 사용하고 게시 전에 미리보기를 확인하세요.',
      },
      {
        question: '메타 태그 생성기는 다국어 페이지를 지원하나요?',
        answer:
          '한 번에 한 페이지의 태그를 만듭니다. 페이지 언어에 맞게 og:locale을 설정하고 번역된 버전마다 별도의 태그 세트를 생성하세요.',
      },
      {
        question: '생성된 메타 태그를 파일로 다운로드할 수 있나요?',
        answer:
          '네, 다운로드 버튼을 누르면 이스케이프 처리된 완전한 스니펫이 들어 있는 독립 실행형 meta-tags.html 파일이 저장됩니다.',
      },
      {
        question: '메타 태그 생성기만으로 구글 순위가 오르나요?',
        answer:
          '어떤 도구도 순위를 보장하지 않습니다. 다만 정확한 제목, 설명, 소셜 태그는 클릭률과 페이지 표시 방식을 개선합니다.',
      },
    ],
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
    instructions: [
      {
        title: '제목, 설명, URL 입력하기',
        description:
          '후보 SEO 제목, 메타 설명, 페이지 URL, 선택적으로 사이트 이름이나 게시 날짜를 입력하세요.',
      },
      {
        title: '픽셀 너비 측정하기',
        description:
          'SEO 제목 옆의 실시간 픽셀 수치를 확인하세요. W나 M 같은 넓은 글자는 l이나 i보다 가로 공간을 훨씬 많이 차지합니다.',
      },
      {
        title: '데스크톱 미리보기 확인하기',
        description:
          '데스크톱 검색 카드에서 전체 제목, breadcrumb URL, 설명이 데스크톱 사용자에게 보이는 그대로 표시되는지 확인하세요.',
      },
      {
        title: '모바일 미리보기로 전환하기',
        description:
          '모바일 보기로 전환해 더 짧은 잘림 지점을 확인하고 핵심 메시지가 작은 화면에서도 보이는지 점검하세요.',
      },
      {
        title: '굵은 키워드 일치 테스트하기',
        description:
          '굵은 키워드 입력란에 목표 검색어를 입력하면 구글이 스니펫 안에서 강조할 단어가 어떻게 표시되는지 볼 수 있습니다.',
      },
      {
        title: '완성된 태그 복사하기',
        description:
          '미리보기가 마음에 들면 바로 붙여넣을 수 있는 <title>과 <meta name="description"> 태그를 복사해 페이지에 넣으세요.',
      },
    ],
    examples: [
      {
        title: '넓은 글자로 인한 제목 잘림 잡아내기',
        input: '대문자 W와 M으로 가득 찬 60자 제목',
        output: '60자 이내라도 580픽셀을 넘으면 넘침을 표시해 말줄임표로 잘리기 전에 줄이도록 돕습니다.',
        explanation: '캔버스 텍스트 측정값은 실제 검색 결과의 글꼴 렌더링 너비를 근사합니다.',
      },
      {
        title: '모바일에서 잘리는 설명 앞당기기',
        input: '160자 메타 설명 · 핵심 키워드가 설명 뒷부분에 있음',
        output: '모바일 미리보기에서 핵심 키워드가 잘리는 것을 확인하고 문장 앞부분으로 옮깁니다.',
        explanation: '모바일은 약 120자에서 접히므로 가장 중요한 단어와 키워드를 맨 앞에 두어야 합니다.',
      },
    ],
    benefits: [
      '글자 수뿐 아니라 Canvas measureText() 픽셀 너비도 함께 사용합니다',
      '도메인과 경로를 자동으로 깔끔한 breadcrumb 형태로 표시합니다',
      '메타 설명 안의 굵은 검색어 표시를 시뮬레이션해 클릭률을 검토할 수 있습니다',
      '바로 붙여넣을 수 있는 <title>과 <meta name="description"> 태그를 한 번의 클릭으로 복사합니다',
    ],
    useCases: [
      '단어 중간에 "..."으로 잘리는 것을 피하도록 블로그 제목과 제품 페이지 제목 다듬기',
      '모바일 약 120자 접힘 안에서 클릭률이 높은 메타 설명 작성하기',
      '게시 날짜가 보이는 설명 길이에 미치는 영향 확인하기',
      '편집 검수 과정에서 랜딩 페이지 스니펫 검토하기',
    ],
    faqs: [
      {
        question: '글자 수보다 픽셀 너비가 더 중요한 이유는 무엇인가요?',
        answer:
          '검색엔진은 고정된 글자 수가 아니라 컨테이너 픽셀 너비(데스크톱 기준 약 580~600픽셀)로 제목을 자릅니다. 대문자와 W, M 같은 넓은 글자는 i나 l의 거의 두 배 너비를 차지합니다.',
      },
      {
        question: '구글이 실제 검색 결과에서 제 제목이나 메타 설명을 바꿀 수 있나요?',
        answer:
          '네, 구글은 특정 검색어에 맞추거나 H1 제목을 가져와 스니펫을 동적으로 바꾸기도 합니다. 다만 간결하고 정확한 제목은 원치 않는 변경을 줄여줍니다.',
      },
      {
        question: '실시간 구글 순위를 가져오나요?',
        answer:
          '아니요. 브라우저 안에서만 동작하는 오프라인 시각적 SERP 스니펫 시뮬레이터입니다.',
      },
      {
        question: 'SERP 스니펫 미리보기는 무료인가요?',
        answer:
          '네, 완전 무료이며 브라우저 안에서만 동작하므로 입력한 내용이 어디에도 업로드되지 않습니다.',
      },
      {
        question: '구글 검색 결과에 적합한 제목 길이는 어느 정도인가요?',
        answer:
          '데스크톱 기준 약 580픽셀 이내를 목표로 하세요. 글자 너비에 따라 보통 50~60자 정도입니다.',
      },
      {
        question: 'SERP 스니펫 미리보기는 픽셀 너비를 어떻게 측정하나요?',
        answer:
          '브라우저 캔버스의 measureText() API를 사용해 검색 결과가 사용하는 것과 같은 글꼴 스타일로 제목의 실제 렌더링 너비를 계산합니다.',
      },
      {
        question: '60자 이내인데도 제목이 잘리는 이유는 무엇인가요?',
        answer:
          '검색엔진은 글자 수가 아니라 픽셀 너비로 자릅니다. W나 M 같은 넓은 글자는 i나 l 같은 좁은 글자보다 훨씬 많은 공간을 차지합니다.',
      },
      {
        question: '데스크톱과 모바일의 적정 메타 설명 길이는 어느 정도인가요?',
        answer:
          '데스크톱은 약 155~160자, 모바일은 약 120자에서 접히므로 가장 중요한 단어와 키워드를 맨 앞에 두세요.',
      },
      {
        question: '데스크톱과 모바일 검색 결과를 모두 미리 볼 수 있나요?',
        answer:
          '네, 데스크톱 보기와 모바일 보기를 전환하면서 같은 제목과 설명이 각 화면에서 어떻게 렌더링되는지 확인할 수 있습니다.',
      },
      {
        question: 'SERP 스니펫 미리보기의 굵은 키워드 기능은 무엇인가요?',
        answer:
          '목표 검색어를 입력하면 실제 결과에서 구글이 검색어를 강조하듯 제목과 설명 안의 일치하는 단어가 굵게 표시됩니다.',
      },
      {
        question: 'SERP 스니펫 미리보기에서 실제 구글 순위를 볼 수 있나요?',
        answer:
          '아니요. 스니펫이 어떻게 보일지 보여주는 오프라인 시각적 시뮬레이터이며 구글의 실시간 순위 데이터는 표시하지 않습니다.',
      },
      {
        question: 'SERP 스니펫 미리보기가 제목이나 URL을 업로드하나요?',
        answer:
          '아니요. 모든 미리보기와 측정은 브라우저 안에서 로컬로 이루어집니다.',
      },
      {
        question: '미리본 뒤 제목과 메타 설명을 어떻게 복사하나요?',
        answer:
          '한 번의 클릭으로 복사 버튼을 이용해 바로 붙여넣을 수 있는 <title>과 <meta name="description"> 태그를 가져오세요.',
      },
      {
        question: '구글이 실제 결과에서 제 제목을 바꾸는 이유는 무엇인가요?',
        answer:
          '구글은 검색어와 더 잘 맞는다고 판단하면 H1이나 페이지의 다른 텍스트로 제목을 교체하기도 합니다. 간결하고 정확한 제목은 이런 교체를 줄여줍니다.',
      },
      {
        question: '제목에 브랜드나 사이트 이름을 넣어야 하나요?',
        answer:
          '대체로 그렇습니다. 구분자 뒤 제목 끝에 넣어 핵심 키워드를 앞에 두고 브랜드도 결과에 표시되게 하세요.',
      },
      {
        question: '타이틀 태그와 H1 제목의 차이는 무엇인가요?',
        answer:
          '타이틀 태그는 검색 결과와 브라우저 탭에 표시되고, H1은 페이지 자체에 보이는 헤드라인입니다.',
      },
      {
        question: 'SERP 스니펫 미리보기에서 여러 제목을 빠르게 테스트할 수 있나요?',
        answer:
          '네, 제목 입력란을 수정하면 미리보기, 픽셀 너비, 잘림 경고가 입력하는 즉시 업데이트됩니다.',
      },
      {
        question: 'SERP 스니펫 미리보기가 게시 날짜를 반영하나요?',
        answer:
          '네, 날짜를 추가하면 보이는 설명이 얼마나 짧아지는지 표시되므로 뉴스와 블로그 글에 중요합니다.',
      },
      {
        question: '모바일에서 설명이 잘리면 어떻게 해야 하나요?',
        answer:
          '핵심 메시지와 목표 키워드를 설명의 맨 앞으로 옮기면 접힌 모바일 보기에서도 내용이 통합니다.',
      },
      {
        question: 'SERP 스니펫 미리보기의 픽셀 너비 검사는 모든 언어에서 정확한가요?',
        answer:
          '브라우저 글꼴을 바탕으로 실제 검색 렌더링을 근사하므로 라틴 문자에서 가장 정확하고 다른 문자 체계에서는 차이가 날 수 있습니다.',
      },
    ],
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
    instructions: [
      {
        title: '캐노니컬 URL 붙여넣기',
        description:
          '편집기에 한 줄에 하나의 전체 https://(또는 http://) URL을 입력하세요. 형식이 잘못된 줄은 명확히 표시됩니다.',
      },
      {
        title: '잘못된 줄로 표시된 항목 확인하기',
        description:
          '오타나 https:// 누락이 있는지 강조 표시된 줄을 확인하고 생성 전에 수정하세요. 잘못된 URL은 XML에서 제외됩니다.',
      },
      {
        title: '선택 태그 설정하기',
        description:
          '선택적으로 <lastmod> 날짜, <changefreq> 힌트, <priority>를 설정하거나(더 깔끔한 파일을 원하면 선택 태그를 생략) 지정하세요.',
      },
      {
        title: '중복 제거 확인하기',
        description:
          '도구에 표시되는 중복 개수를 확인해 완성된 사이트맵에 각 캐노니컬 URL이 정확히 한 번씩만 나열되는지 확인하세요.',
      },
      {
        title: '생성된 XML 미리보기',
        description:
          'XML 출력을 살펴보며 urlset, <loc> 항목, 선택 <lastmod> 값이 올바른지 확인하세요.',
      },
      {
        title: 'sitemap.xml 복사 또는 다운로드하기',
        description:
          'XML 복사를 클릭하거나 .xml을 다운로드해 사이트 루트 /public/ 폴더에 바로 넣으세요.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages 정적 사이트용 사이트맵 만들기',
        input: '캐노니컬 URL 5개 · lastmod: 2026-11-12 · 중복 제거: 켬',
        output: '유효한 <?xml version="1.0"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: '모든 <loc> 요소 안에서 XML 엔티티(&, <, >, 따옴표)를 깔끔하게 이스케이프합니다.',
      },
      {
        title: '중복과 오타가 섞인 목록 정리하기',
        input: 'URL 12개 중 중복 3개, https://가 빠진 줄 1개',
        output: '중복 3개 제거, 잘못된 줄 1개 제외, 유효한 URL 8개로 이루어진 sitemap.xml',
        explanation: '잘못된 줄 하나 때문에 전체 파일이 깨지지 않도록 제외하고 나머지 URL만 포함합니다.',
      },
    ],
    benefits: [
      'XML을 만들기 전에 모든 줄을 브라우저 네이티브 URL 파싱으로 검증합니다',
      '<loc> URL 안의 &와 특수 쿼리 문자를 자동으로 이스케이프합니다',
      '동일한 URL을 자동으로 중복 제거해 사이트맵이 부풀지 않게 합니다',
      '구글이 무시하는 <priority>와 <changefreq>를 원하면 깔끔하게 생략할 수 있습니다',
    ],
    useCases: [
      '정적 랜딩 페이지나 문서 마이크로사이트의 초기 사이트맵 만들기',
      '사이트 이전 후 제출할 깔끔한 URL 파일 준비하기',
      '소규모 비즈니스 사이트용 이미지·뉴스 없는 보조 사이트맵 만들기',
      'robots.txt와 함께 배포할 형식에 맞는 XML 내보내기',
    ],
    faqs: [
      {
        question: '캐노니컬이 아니거나 리디렉션되거나 noindex인 URL을 사이트맵에 넣어야 하나요?',
        answer:
          '아니요. 사이트맵에는 HTTP 200을 반환하고 검색엔진에 인덱싱되길 원하는 캐노니컬 URL만 나열해야 합니다.',
      },
      {
        question: '구글이 <priority>와 <changefreq>를 아직도 사용하나요?',
        answer:
          '구글 검색은 <priority>와 <changefreq> 태그를 무시하고 주로 <loc>와 의미 있게 업데이트된 정확한 <lastmod> 날짜에 집중합니다.',
      },
      {
        question: '이 생성기가 제 라이브 웹사이트를 자동으로 크롤링하나요?',
        answer:
          '아니요. 클라이언트 페이지는 브라우저 CORS 보안 때문에 다른 출처의 웹사이트를 임의로 크롤링할 수 없습니다. 내보낸 경로 목록을 여기에 붙여넣으면 유효한 XML을 즉시 만들 수 있습니다.',
      },
      {
        question: 'XML 사이트맵 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 브라우저 안에서만 동작하므로 URL 목록이 서버로 전송되지 않습니다.',
      },
      {
        question: '하나의 사이트맵에 URL을 몇 개까지 넣을 수 있나요?',
        answer:
          'Sitemaps 프로토콜은 파일당 최대 50,000개 URL 또는 압축되지 않은 크기 50MB까지 허용합니다. 더 큰 사이트는 여러 사이트맵으로 나누거나 사이트맵 인덱스를 사용해야 합니다.',
      },
      {
        question: '사이트맵과 robots.txt의 차이는 무엇인가요?',
        answer:
          '사이트맵은 검색엔진이 발견하길 원하는 URL을 나열하고, robots.txt는 크롤러가 방문해도 되는 경로와 안 되는 경로에 대한 규칙을 알려줍니다.',
      },
      {
        question: 'sitemap.xml 파일은 어디에 업로드하나요?',
        answer:
          'https://example.com/sitemap.xml처럼 사이트 루트에 두면 크롤러가 표준 위치에서 찾을 수 있습니다.',
      },
      {
        question: '사이트맵을 구글에 제출해야 하나요?',
        answer:
          '권장합니다. Google Search Console에 제출하고 robots.txt에 Sitemap: 줄을 추가하면 다른 크롤러도 찾을 수 있습니다.',
      },
      {
        question: 'XML 사이트맵 생성기가 허용하는 URL 형식은 무엇인가요?',
        answer:
          '도메인을 포함한 전체 https:// 또는 http:// URL을 한 줄에 하나씩 입력하세요. 유효하지 않은 URL 줄은 표시됩니다.',
      },
      {
        question: '사이트맵의 중복 URL은 어떻게 되나요?',
        answer:
          '중복은 자동으로 제거되어 완성된 사이트맵에 각 캐노니컬 URL이 정확히 한 번만 포함됩니다.',
      },
      {
        question: 'XML 사이트맵 생성기에서 잘못되거나 형식이 어긋난 URL은 어떻게 되나요?',
        answer:
          '잘못된 줄은 명확히 표시되고 XML에서 제외되므로 한 줄의 오타가 전체 파일을 깨뜨리지 않습니다.',
      },
      {
        question: 'XML 사이트맵 생성기는 URL의 특수 문자를 어떻게 처리하나요?',
        answer:
          '<loc> 요소 안에서 &와 다른 특수 문자를 XML 이스케이프하므로 쿼리 문자열과 인코딩된 경로가 유효하게 유지됩니다.',
      },
      {
        question: '일반 사이트맵에 이미지나 동영상 URL을 넣어야 하나요?',
        answer:
          '표준 사이트맵에는 페이지 URL만 나열합니다. 이미지와 동영상 URL은 따로 인덱싱되길 원하면 전용 사이트맵 확장이 필요합니다.',
      },
      {
        question: '페이지가 있는 URL이나 필터 URL을 사이트맵에 넣어야 하나요?',
        answer:
          '아니요. 캐노니컬이고 인덱싱 가능한 페이지만 나열하고 페이지네이션, 정렬 파라미터, 내부 검색 결과 페이지는 제외하세요.',
      },
      {
        question: '<lastmod>란 무엇이고 사이트맵에 설정해야 하나요?',
        answer:
          '페이지가 마지막으로 변경된 날짜를 기록합니다. 날짜가 정확할 때만 설정하세요. 구글은 이를 페이지의 신선도를 판단하는 데 사용합니다.',
      },
      {
        question: 'XML 사이트맵 생성기는 오프라인에서도 동작하나요?',
        answer:
          '네, 브라우저 안에서만 동작하고 업로드가 없으므로 페이지가 로드된 뒤에는 인터넷 연결 없이도 사이트맵을 만들 수 있습니다.',
      },
      {
        question: '새 페이지를 추가한 뒤 사이트맵을 다시 만들 수 있나요?',
        answer:
          '네, 업데이트된 URL 목록을 붙여넣고 새 sitemap.xml을 다운로드한 뒤 사이트 루트에 다시 업로드하세요.',
      },
      {
        question: '사이트맵 인덱스 파일이란 무엇인가요?',
        answer:
          '여러 사이트맵 파일을 나열하는 파일로, 대규모 사이트가 수천 개의 URL을 섹션이나 언어별로 정리할 때 사용합니다.',
      },
      {
        question: '사이트맵이 있으면 구글이 제 페이지를 반드시 인덱싱하나요?',
        answer:
          '아니요. 사이트맵은 검색엔진이 URL을 발견하도록 돕지만 인덱싱은 페이지 품질, 링크, 크롤 예산에 따라 달라집니다.',
      },
      {
        question: '워드프레스나 쇼피파이 사이트에도 XML 사이트맵 생성기를 쓸 수 있나요?',
        answer:
          '네, 어떤 플랫폼에서든 캐노니컬 URL 목록을 내보내거나 복사해 여기에 붙여넣으면 표준 sitemap.xml이 만들어집니다.',
      },
    ],
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
    instructions: [
      {
        title: '스타터 프리셋을 고르거나 규칙 편집하기',
        description:
          '모두 허용, 표준 웹 앱/SaaS, 워드프레스 클린, 스테이징(모두 차단)을 클릭해 자주 쓰는 규칙을 채우세요.',
      },
      {
        title: 'User-agent와 경로 사용자 지정하기',
        description:
          '* 또는 Googlebot, Bingbot, GPTBot 같은 특정 크롤러에 Allow 또는 Disallow 경로를 추가하세요.',
      },
      {
        title: '필요한 곳에 Crawl-delay 설정하기',
        description:
          'Bingbot처럼 이를 존중하는 크롤러에는 Crawl-delay 값을 추가해 작은 서버나 공유 서버의 요청 속도를 늦추세요.',
      },
      {
        title: '사이트맵 URL 연결하기',
        description:
          '전체 XML 사이트맵 URL을 입력하면 크롤러가 robots.txt에서 사이트맵을 찾을 수 있습니다. 여러 사이트맵을 쓰면 한 줄에 하나씩 추가하세요.',
      },
      {
        title: '그룹화된 출력 검토하기',
        description:
          '각 User-agent 블록이 올바르게 그룹화되었는지, Disallow 규칙이 실수로 CSS, 자바스크립트, 공개 페이지를 차단하지 않는지 확인하세요.',
      },
      {
        title: '복사, 다운로드, 테스트하기',
        description:
          'robots.txt를 복사하거나 다운로드해 도메인 루트에 두고 Google Search Console의 robots.txt 테스터로 검증하세요.',
      },
    ],
    examples: [
      {
        title: '/api/와 /admin/을 차단하는 SaaS 웹 앱',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Sitemap: https://example.com/sitemap.xml로 끝나는 그룹화된 robots.txt 파일',
        explanation: '일치하는 User-agent를 하나의 블록 아래에 깔끔하게 그룹화합니다.',
      },
      {
        title: '스테이징 사이트 전체 차단하기',
        input: '프리셋: 스테이징(모두 차단) · Sitemap: 없음',
        output: 'User-agent: *\nDisallow: /',
        explanation: 'DNS 런칭 전에 크롤러가 스테이징 환경에 접근하지 못하게 합니다.',
      },
    ],
    benefits: [
      'RFC 9309 모범 사례에 따라 일치하는 User-agent 블록별로 규칙을 자동 그룹화합니다',
      'CSS/JS 애셋을 실수로 차단하지 않도록 검증된 스타터 템플릿을 포함합니다',
      '사이트맵 인덱스나 지역화된 파일용으로 여러 Sitemap: 선언을 지원합니다',
      '한 번의 클릭으로 다운로드하면 바로 배포할 수 있는 robots.txt 파일이 됩니다',
    ],
    useCases: [
      '크롤러가 /api/, /admin/, 내부 검색 쿼리 URL에 예산을 낭비하지 않게 하기',
      '도메인 루트에 XML 사이트맵 위치를 알리기',
      'AdsBot이나 AI 스크레이퍼 같은 특수 봇용 규칙 추가하기',
      'DNS 런칭 전에 스테이징 환경 설정하기',
    ],
    faqs: [
      {
        question: 'robots.txt의 Disallow: /admin/이 페이지를 구글 검색에서 제외하거나 비밀을 보호하나요?',
        answer:
          '중요한 차이점이 있습니다. robots.txt는 크롤링을 막을 뿐, 다른 사이트가 해당 URL에 직접 링크하면 인덱싱될 수 있으며 robots.txt는 누구나 읽을 수 있습니다. 민감한 경로는 인증으로 보호하고 인덱싱 방지는 <meta name="robots" content="noindex">를 사용하세요.',
      },
      {
        question: 'robots.txt는 어디에 호스팅해야 하나요?',
        answer:
          '호스트의 정확한 루트 경로(https://yourdomain.com/robots.txt)에 두어야 하며 HTTP 200을 반환해야 합니다.',
      },
      {
        question: '구글이 Crawl-delay를 존중하나요?',
        answer:
          'Googlebot은 Crawl-delay를 무시합니다(필요하면 Search Console 설정 사용). 반면 Bing과 다른 크롤러는 숫자 Crawl-delay 간격을 여전히 존중합니다.',
      },
      {
        question: 'robots.txt 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 브라우저 안에서만 동작하므로 사이트 규칙이 어디에도 업로드되지 않습니다.',
      },
      {
        question: 'robots.txt와 메타 robots noindex 태그의 차이는 무엇인가요?',
        answer:
          'robots.txt는 크롤러에게 경로를 방문하지 말라고 알리고, noindex 태그는 크롤링된 페이지를 검색 결과에 표시하지 말라고 알립니다. 해결하는 문제가 다릅니다.',
      },
      {
        question: 'robots.txt로 GPTBot 같은 AI 크롤러를 차단할 수 있나요?',
        answer:
          '네, User-agent: GPTBot 그룹에 Disallow: /를 추가하면 해당 크롤러가 들어오지 못합니다. 차단하려는 다른 AI 봇에도 같은 방식을 반복하세요.',
      },
      {
        question: 'robots.txt에서 "User-agent: *"는 무슨 뜻인가요?',
        answer:
          '해당 그룹의 규칙이 사이트를 방문하는 모든 크롤러에 적용된다는 뜻입니다. 더 구체적인 User-agent 그룹이 있으면 그 규칙이 우선합니다.',
      },
      {
        question: 'robots.txt에서 Allow와 Disallow의 차이는 무엇인가요?',
        answer:
          'Allow는 경로 크롤링을 허용하고 Disallow는 차단합니다. 규칙이 겹치면 가장 구체적으로 일치하는 규칙이 우선합니다.',
      },
      {
        question: 'robots.txt 생성기로 단일 페이지나 폴더를 차단할 수 있나요?',
        answer:
          '네, Disallow: /page/로 한 페이지를, Disallow: /folder/로 폴더 전체와 그 안의 모든 것을 차단할 수 있습니다.',
      },
      {
        question: 'robots.txt에서 CSS와 자바스크립트 파일을 차단해야 하나요?',
        answer:
          '아니요. 검색엔진은 페이지를 제대로 렌더링하려면 CSS와 자바스크립트가 필요하며, 차단하면 순위에 악영향을 줄 수 있습니다.',
      },
      {
        question: 'robots.txt 생성기에는 어떤 스타터 프리셋이 있나요?',
        answer:
          '모두 허용, 표준 웹 앱/SaaS, 워드프레스 클린, 스테이징(모두 차단)이 있어 빈 파일이 아니라 검증된 템플릿에서 시작할 수 있습니다.',
      },
      {
        question: 'robots.txt에 사이트맵을 어떻게 추가하나요?',
        answer:
          '파일 끝에 Sitemap: https://example.com/sitemap.xml 같은 줄을 추가하면 크롤러가 루트에서 사이트맵을 찾을 수 있습니다.',
      },
      {
        question: '하나의 robots.txt 파일에 Sitemap 줄을 여러 개 넣을 수 있나요?',
        answer:
          '네, 여러 사이트맵 URL을 나열할 수 있어 사이트맵 인덱스나 언어·섹션별 사이트맵을 쓸 때 유용합니다.',
      },
      {
        question: 'robots.txt 생성기가 규칙을 업로드하나요?',
        answer:
          '아니요. 모든 작업은 브라우저 안에서 로컬로 이루어지고 파일은 기기에서 생성됩니다.',
      },
      {
        question: '게시한 robots.txt를 어떻게 테스트하나요?',
        answer:
          '도메인 루트에 업로드한 뒤 Google Search Console의 robots.txt 테스터로 확인하거나 Googlebot으로 가져와 보세요.',
      },
      {
        question: '실수로 사이트 전체를 robots.txt에서 차단하면 어떻게 되나요?',
        answer:
          '검색엔진이 페이지 크롤링을 멈춥니다. Disallow: / 줄을 제거하고 파일을 다시 업로드한 뒤 Search Console에서 다시 크롤링을 요청하세요.',
      },
      {
        question: 'robots.txt가 관리자 페이지를 해커로부터 숨기나요?',
        answer:
          '아니요. robots.txt는 누구나 읽을 수 있어 차단한 경로가 그대로 보입니다. 민감한 페이지는 비밀번호나 인증으로 보호하세요.',
      },
      {
        question: 'Crawl-delay란 무엇이고 robots.txt에 사용해야 하나요?',
        answer:
          'Crawl-delay는 크롤러에게 요청 사이에 몇 초를 기다리라고 요청합니다. Googlebot은 무시하지만 Bing과 일부 크롤러는 존중합니다.',
      },
      {
        question: 'Googlebot과 Bingbot에 서로 다른 robots.txt 규칙을 쓸 수 있나요?',
        answer:
          '네, 각 크롤러마다 별도의 User-agent 그룹을 만들고 각각 Allow와 Disallow 줄을 지정하세요.',
      },
      {
        question: 'Cloudflare Pages나 정적 사이트에 robots.txt를 어디에 업로드하나요?',
        answer:
          'public/ 폴더나 빌드 출력물의 루트에 파일을 두면 https://yourdomain.com/robots.txt로 제공됩니다.',
      },
    ],
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
    instructions: [
      {
        title: 'Schema.org 유형 선택하기',
        description:
          '상단 전환기에서 Article, FAQPage, Product, Organization, BreadcrumbList 중 하나를 선택하세요.',
      },
      {
        title: '엔티티 속성 입력하기',
        description:
          '제목, Q&A 쌍, 가격 혜택, 조직 정보, breadcrumb 경로를 입력하세요.',
      },
      {
        title: '목록용 행 추가하기',
        description:
          'FAQPage에는 Q&A 쌍을, BreadcrumbList에는 경로 항목을 추가로 넣고 필요 없는 행은 제거하세요.',
      },
      {
        title: '생성된 JSON-LD 검토하기',
        description:
          '실시간 JSON 출력에서 필드 이름과 값이 올바른지 확인하고 비어 있는 선택 속성이 자동으로 생략되는지 확인하세요.',
      },
      {
        title: '<script> 태그 복사 또는 .jsonld 내보내기',
        description:
          '완전한 <script type="application/ld+json"> 블록을 복사해 페이지 <head>에 붙여넣거나 .jsonld 파일을 다운로드하세요.',
      },
      {
        title: '게시 전에 검증하기',
        description:
          '리치 결과 테스트나 스키마 검사기에 출력을 붙여넣어 구문 오류를 잡으세요. 잘못된 JSON-LD는 검색엔진이 무시합니다.',
      },
    ],
    examples: [
      {
        title: '동적 FAQPage 구조화 데이터 만들기',
        input: 'FAQPage 스키마 아래 질문/답변 쌍 2개',
        output: '유효한 @context https://schema.org FAQPage JSON-LD 스크립트 블록',
        explanation: '안전한 JSON 직렬화를 사용하고 \\u003c로 이스케이프해 </script>가 조기에 종료되는 것을 막습니다.',
      },
      {
        title: '제품 가격과 재고 정보 추가하기',
        input: '제품명, 가격 29,000원, 통화 KRW, 재고 있음',
        output: 'price, priceCurrency, availability가 포함된 Product JSON-LD 블록',
        explanation: '쇼핑 결과에 쓰이는 핵심 필드만 포함해 마크업을 깔끔하게 유지합니다.',
      },
    ],
    benefits: [
      '영향력이 가장 큰 Schema.org 구조화 데이터 유형 5가지를 지원합니다',
      'JSON-LD 안의 "<" 문자를 깔끔하게 이스케이프해 HTML 스크립트 삽입 오류를 막습니다',
      '비어 있는 선택 속성을 자동으로 생략해 구문을 깔끔하게 유지합니다',
      '사용자 지정 확장용 JSON 포맷터·검사기와 자연스럽게 함께 씁니다',
    ],
    useCases: [
      '편집 블로그 템플릿에 Article 작성자와 게시 메타데이터 추가하기',
      '상점 피드용 제품 가격, 통화, 재고 여부를 구조화하기',
      '사이트 전체 Organization 브랜드 정체성과 로고 URL 선언하기',
      '카테고리와 도구 페이지에 BreadcrumbList 계층 경로 삽입하기',
    ],
    faqs: [
      {
        question: 'JSON-LD 구조화 데이터는 웹 페이지의 어디에 두어야 하나요?',
        answer:
          '<script type="application/ld+json">은 <head> 안이나 <body> 안에 둘 수 있으며, <head>에 깔끔하게 두는 것이 표준 관행입니다.',
      },
      {
        question: '생성기가 JSON 출력에서 "<"를 "\\u003c"로 이스케이프하는 이유는 무엇인가요?',
        answer:
          '사용자의 FAQ 답변에 "</script>"가 들어 있으면 브라우저가 HTML 스크립트 블록을 조기에 종료합니다. "<"를 "\\u003c"로 이스케이프하면 100% 유효한 JSON으로 유지됩니다.',
      },
      {
        question: '스키마 마크업을 추가하면 구글 리치 스니펫이 보장되나요?',
        answer:
          '아니요. 유효한 구조화 데이터는 향상된 검색 기능의 대상이 될 뿐이며, 검색엔진은 전체 페이지 품질과 가이드라인을 바탕으로 표시 여부를 결정합니다.',
      },
      {
        question: '스키마 마크업 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 브라우저 안에서만 동작하므로 콘텐츠가 서버로 전송되지 않습니다.',
      },
      {
        question: '스키마 마크업 생성기는 어떤 Schema.org 유형을 지원하나요?',
        answer:
          'Article, FAQPage, Product, Organization, BreadcrumbList를 지원하며 가장 흔한 리치 결과 사용 사례를 다룹니다.',
      },
      {
        question: 'JSON-LD와 마이크로데이터의 차이는 무엇인가요?',
        answer:
          'JSON-LD는 페이지에 붙여넣는 별도의 <script> 블록이고, 마이크로데이터는 보이는 HTML 요소에 직접 속성을 추가하는 방식입니다.',
      },
      {
        question: '생성된 JSON-LD를 웹사이트에 어떻게 추가하나요?',
        answer:
          '완전한 <script type="application/ld+json"> 블록을 복사해 해당 페이지의 <head>에 붙여넣으세요.',
      },
      {
        question: '생성한 뒤 스키마 마크업을 어떻게 테스트하나요?',
        answer:
          '페이지 URL이나 코드를 리치 결과 테스트나 Schema.org 검사기에 붙여넣어 오류와 적용 가능한 향상 기능을 확인하세요.',
      },
      {
        question: '한 페이지에 여러 스키마 유형을 함께 쓸 수 있나요?',
        answer:
          '네, 하나의 페이지에 Article, BreadcrumbList, FAQPage 마크업을 별도의 JSON-LD 블록으로 함께 넣을 수 있습니다.',
      },
      {
        question: 'FAQPage 스키마란 무엇이고 언제 사용해야 하나요?',
        answer:
          '질문과 답변이 보이는 목록을 표시하는 페이지, 예를 들어 도움말 페이지에 사용하세요. 검색엔진이 이를 펼칠 수 있는 결과로 표시할 수 있습니다.',
      },
      {
        question: '생성기가 지원하는 Product 스키마 필드는 무엇인가요?',
        answer:
          '제품명, 가격, 통화, 재고 여부를 다루며, 이는 검색엔진이 쇼핑 결과에 사용하는 핵심 필드입니다.',
      },
      {
        question: 'BreadcrumbList 스키마는 무엇에 사용되나요?',
        answer:
          '홈 > 가이드 > 주제 같은 페이지의 탐색 계층을 설명해 검색엔진이 결과에 breadcrumb 경로를 표시할 수 있게 합니다.',
      },
      {
        question: 'Organization 스키마는 무엇에 사용되나요?',
        answer:
          '이름, 로고, 공식 웹사이트를 포함한 브랜드 정체성을 선언해 검색엔진이 일관된 지식 패널을 표시할 수 있게 합니다.',
      },
      {
        question: '스키마 마크업 생성기가 콘텐츠를 업로드하나요?',
        answer:
          '아니요. 모든 마크업은 브라우저 안에서 로컬로 생성되며 입력한 내용이 기기를 떠나지 않습니다.',
      },
      {
        question: '스키마를 .jsonld 파일로 내보낼 수 있나요?',
        answer:
          '네, 내보내기 버튼을 누르면 저장하거나 버전 관리하거나 개발자에게 넘길 수 있는 독립 실행형 .jsonld 파일이 다운로드됩니다.',
      },
      {
        question: 'JSON-LD에 구문 오류가 있으면 어떻게 되나요?',
        answer:
          '전체 블록이 검색엔진에 의해 무시될 수 있으므로 게시 전에 리치 결과 테스트로 출력을 항상 검증하세요.',
      },
      {
        question: '레시피나 이벤트 페이지에 스키마 마크업 생성기를 쓸 수 있나요?',
        answer:
          '생성기는 다섯 가지 유형만 다루므로 Recipe와 Event 페이지는 JSON-LD를 직접 작성해야 하며, 같은 도구로 검증할 수 있습니다.',
      },
      {
        question: '스키마의 FAQ 답변이 페이지에 보이는 텍스트와 일치해야 하나요?',
        answer:
          '네, 구글은 구조화 데이터가 사용자가 페이지에서 실제로 볼 수 있는 콘텐츠와 일치할 것을 요구하며, 그렇지 않으면 마크업이 무시될 수 있습니다.',
      },
      {
        question: '생성된 JSON-LD를 직접 편집할 수 있나요?',
        answer:
          '네, 표준 JSON이므로 어떤 편집기에서든 필드를 추가하거나 변경하고 게시 전에 결과를 다시 검증할 수 있습니다.',
      },
      {
        question: '스키마 마크업 생성기는 오프라인에서도 동작하나요?',
        answer:
          '네, 브라우저 안에서만 동작하고 업로드가 없으므로 페이지가 로드된 뒤에는 인터넷 연결 없이도 스키마 마크업을 만들 수 있습니다.',
      },
    ],
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
    instructions: [
      {
        title: '제목이나 페이지 이름 입력하기',
        description:
          '페이지 제목 텍스트 영역에 제목을 한 줄에 하나씩, 하나 또는 여러 개 붙여넣으세요.',
      },
      {
        title: '슬러그 형식 규칙 설정하기',
        description:
          '기본 도메인을 입력하고 하이픈(-)이나 언더스코어(_)를 선택한 뒤 최대 슬러그 길이, 불용어 제거, 끝에 붙는 슬래시 옵션을 설정하세요.',
      },
      {
        title: '생성된 슬러그 미리보기',
        description:
          '결과 표를 살펴보며 악센트 변환, 불용어 제거, 긴 슬러그가 단어 경계에서 잘린 위치를 확인하세요.',
      },
      {
        title: '길이나 불용어 설정 조정하기',
        description:
          '슬러그가 의미를 잃거나 어색하게 잘리면 최대 슬러그 길이를 늘리거나 불용어 제거를 끄고 다시 생성하세요.',
      },
      {
        title: '개별 슬러그나 전체 목록 복사하기',
        description:
          '표에서 개별 슬러그를 복사하거나 모든 슬러그 또는 전체 URL을 한 번의 클릭으로 내보내세요.',
      },
      {
        title: '라이브 슬러그는 리디렉션 없이 바꾸지 않기',
        description:
          '이미 인덱싱된 페이지의 슬러그를 바꾸면 이전 URL에서 새 URL로 301 리디렉션을 추가해 백링크와 순위를 이어가세요.',
      },
    ],
    examples: [
      {
        title: '제목에서 불용어와 발음 구별 부호 제거하기',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'é → e로 변환하고 &를 and로 확장하며 "in"을 제거하고 소문자 토큰을 하이픈으로 연결합니다.',
      },
      {
        title: '긴 제목을 단어 경계에서 자르기',
        input: 'The Complete Beginner Friendly Guide to On Page SEO for Small Business Owners in 2026',
        output: 'complete-beginner-friendly-guide-on-page-seo-small-business',
        explanation: '최대 길이에 도달하면 단어 중간이 아니라 가장 가까운 하이픈에서 잘라 단어가 쪼개지지 않게 합니다.',
      },
    ],
    benefits: [
      '수십 개의 편집 캘린더 제목을 한 번에 일괄 처리합니다',
      '너무 긴 슬러그를 단어 중간이 아니라 하이픈·단어 경계에서 자릅니다',
      '불용어 제거를 켜도 짧은 슬러그는 그대로 유지해 핵심 의미를 보존합니다',
      '구글 URL 구조 권장사항(언더스코어보다 UTF-8 ASCII 하이픈)을 따릅니다',
    ],
    useCases: [
      '블로그 카테고리나 CMS 컬렉션을 시작하기 전에 깔끔한 URL 구조 계획하기',
      '악센트가 있는 국제 제품 제목을 ASCII 안전 슬러그로 정리하기',
      '과도하게 긴 CMS 퍼머링크를 간결한 4~6단어 경로로 다듬기',
      'XML 사이트맵 생성기에 넣을 캐노니컬 대상 목록 준비하기',
    ],
    faqs: [
      {
        question: 'SEO URL 슬러그에는 하이픈(-)과 언더스코어(_) 중 무엇을 써야 하나요?',
        answer:
          '구글은 URL에서 하이픈(-)을 단어 구분자로 권장합니다. 검색 파서가 하이픈을 공백으로 취급하는 반면 언더스코어는 인접한 단어를 하나로 합치기 때문입니다.',
      },
      {
        question: '불용어를 제거하면 가독성이 떨어지나요?',
        answer:
          '"a", "the", "of" 같은 짧은 불용어를 제거하면 아주 긴 블로그 슬러그가 간결해집니다. 제거하면 핵심 의미가 바뀌는 경우("how to" 등)에는 불용어를 유지하세요.',
      },
      {
        question: '이미 인덱싱된 라이브 URL의 슬러그를 바꿔야 하나요?',
        answer:
          '백링크와 순위를 깔끔하게 이전하려면 이전 슬러그에서 새 슬러그로 영구 301 리디렉션을 배포할 때만 바꾸세요(캐노니컬·301 리디렉션 생성기 사용).',
      },
      {
        question: 'URL 슬러그 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 가입 없이 한 세션에 변환하는 제목 수에 제한이 없습니다.',
      },
      {
        question: '많은 제목의 슬러그를 한 번에 만들 수 있나요?',
        answer:
          '네, 한 줄에 하나의 제목을 붙여넣으면 도구에서 전체 일괄 작업을 하나의 표로 변환하므로 편집 캘린더 전체의 슬러그를 한 번에 만들 수 있습니다.',
      },
      {
        question: '악센트 문자는 슬러그에서 어떻게 처리되나요?',
        answer:
          '발음 구별 부호는 일반 ASCII로 변환됩니다. é는 e, ü는 u, ñ은 n이 되어 URL이 읽기 쉽고 브라우저와 서버에서 안전하게 유지됩니다.',
      },
      {
        question: '슬러그에서 &나 @ 같은 기호는 어떻게 되나요?',
        answer:
          '앰퍼샌드(&)는 "and"로 확장되고 대부분의 다른 문장 부호는 제거됩니다. URL 안의 기호는 링크를 깨뜨리거나 공유할 때 지저분해 보일 수 있기 때문입니다.',
      },
      {
        question: '불용어란 무엇이고 왜 제거하나요?',
        answer:
          '불용어는 "a", "the", "of", "in" 같은 짧은 채움 단어입니다. 제거하면 핵심 의미를 바꾸지 않고 긴 블로그 슬러그를 짧게 만들 수 있습니다.',
      },
      {
        question: '슬러그에 불용어를 유지할 수 있나요?',
        answer:
          '네, 불용어 제거 토글을 끄면 생성기가 제목의 모든 단어를 짧은 불용어까지 그대로 유지합니다.',
      },
      {
        question: 'SEO 슬러그의 적정 길이는 어느 정도인가요?',
        answer:
          '의미 있는 단어 3~6개를 목표로 하세요. 최대 슬러그 길이 설정을 사용하면 슬러그를 짧게 유지할 수 있고, 도구는 단어 경계에서 자르므로 단어가 중간에 쪼개지지 않습니다.',
      },
      {
        question: 'URL 슬러그는 소문자여야 하나요?',
        answer:
          '네, 소문자 슬러그는 중복 콘텐츠 문제를 피합니다. 일부 서버는 /Blog-Post와 /blog-post를 서로 다른 페이지로 취급하기 때문입니다.',
      },
      {
        question: '슬러그에 하이픈 대신 언더스코어를 쓸 수 있나요?',
        answer:
          '설정에서 언더스코어를 선택할 수 있지만 하이픈이 권장됩니다. 검색엔진은 하이픈을 단어 구분자로, 언더스코어를 연결자로 취급하기 때문입니다.',
      },
      {
        question: '제목이 어딘가에 업로드되나요?',
        answer:
          '아니요. URL 슬러그 생성기는 브라우저 안에서만 동작하므로 제목이 기기를 떠나지 않습니다.',
      },
      {
        question: '도메인이 포함된 전체 URL을 어떻게 미리 보나요?',
        answer:
          '기본 도메인 입력란에 도메인을 입력하면 결과 표에 각 슬러그가 복사할 수 있는 완전한 URL로 표시됩니다.',
      },
      {
        question: '슬러그 끝에 슬래시를 붙여야 하나요?',
        answer:
          '선택 사항이지만 일관성이 중요합니다. 끝에 붙는 슬래시 토글을 이용해 사이트가 이미 사용하는 URL 스타일에 맞추면 중복 버전을 만들지 않습니다.',
      },
      {
        question: '제품 페이지와 카테고리 페이지에도 이 도구를 쓸 수 있나요?',
        answer:
          '네, 어떤 페이지 이름에도 쓸 수 있습니다. 제품 제목, 카테고리 이름, 랜딩 페이지, 문서 제목 모두 같은 방식으로 변환됩니다.',
      },
      {
        question: '설정한 최대 길이보다 슬러그가 더 짧게 잘린 이유는 무엇인가요?',
        answer:
          '도구는 제한 직전의 가장 가까운 하이픈에서 자르므로 단어 중간에서 자르지 않습니다. 그래서 슬러그가 최대값보다 몇 자 짧아질 수 있습니다.',
      },
      {
        question: '라틴 문자가 아닌 문자로 쓴 제목은 어떻게 되나요?',
        answer:
          '라틴 발음 구별 부호만 변환됩니다. 다른 문자의 글자는 제거되므로 다른 문자로만 쓴 제목은 아주 짧은 슬러그가 될 수 있습니다. 최상의 결과를 위해 핵심 단어의 라틴 버전을 추가하세요.',
      },
      {
        question: '모든 슬러그를 한 번에 내보낼 수 있나요?',
        answer:
          '네, 대량 복사 버튼으로 모든 슬러그나 모든 전체 URL을 한 번의 클릭으로 복사할 수 있습니다.',
      },
      {
        question: '슬러그와 퍼머링크의 차이는 무엇인가요?',
        answer:
          '슬러그는 "best-cafe-tools"처럼 URL의 읽기 쉬운 마지막 부분이고, 퍼머링크는 도메인과 폴더를 포함한 전체 URL입니다.',
      },
    ],
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
    instructions: [
      {
        title: '글 초안이나 HTML 붙여넣기',
        description:
          '일반 텍스트나 원시 HTML을 삽입하세요(HTML 태그 제거를 켜 두면 마크업 태그와 script/style 블록을 무시합니다).',
      },
      {
        title: '목표 구와 n-gram 크기 입력하기',
        description:
          '선택적으로 목표 키워드/구를 지정하고 1단어, 2단어, 3단어 구 분석 사이를 전환하세요.',
      },
      {
        title: '빈도 표 검토하기',
        description:
          '상위 용어와 비율(%)을 살펴보며 주제 집중도를 확인하고 부자연스러운 구 반복을 줄이세요.',
      },
      {
        title: '단어 수, 읽기 시간, 어휘 확인하기',
        description:
          '전체 단어 수, 고유 단어 비율, 읽기 시간을 이용해 초안이 너무 얇거나 너무 길거나 너무 반복적인지 판단하세요.',
      },
      {
        title: '과도하게 사용된 구를 자연스럽게 고쳐 쓰기',
        description:
          '같은 2단어·3단어 구가 표를 지배하면 주제 키워드를 통째로 지우기보다 동의어와 대명사로 다양하게 바꾸세요.',
      },
      {
        title: '결과를 믿기 전에 이상한 개수 수정하기',
        description:
          '숫자가 이상해 보이면 HTML 태그 제거가 켜져 있는지, 탐색 메뉴나 코드 블록, 바닥글이 복사본과 함께 붙여넣어지지 않았는지 확인하세요.',
      },
    ],
    examples: [
      {
        title: '500단어 초안에서 의도치 않은 구 반복 찾기',
        input: '초안 글 + 목표: "technical seo" + 2단어 구',
        output: '상위 바이그램("technical seo", "meta descriptions", "canonical tags")을 비율(%)과 함께 순위 표시',
        explanation: '주요 주제 일치도와 자연스럽게 다양화할 수 있는 반복 구를 함께 보여줍니다.',
      },
      {
        title: '짧은 초안의 밀도 수치가 불안정한 이유 확인하기',
        input: '80단어 초안 + 목표 키워드 2회 등장',
        output: '밀도 2.5% 표시와 함께 "300단어 이상에서 안정적인 결과를 얻으세요" 안내',
        explanation: '짧은 텍스트는 백분율이 크게 흔들리므로 원시 개수를 함께 보는 것이 좋습니다.',
      },
    ],
    benefits: [
      '단일 단어가 아니라 다단어 구(바이그램과 트라이그램)를 분석합니다',
      '단어를 세기 전에 <script>, <style>, HTML 태그를 안전하게 제거합니다',
      '기계적인 키워드 스터핑을 지양하라는 정직한 안내를 포함합니다',
      '미발표 초안과 고객 브리프를 브라우저 메모리 안에만 엄격히 유지합니다',
    ],
    useCases: [
      '긴 형식 가이드를 편집해 주요 주제가 어색한 스터핑 없이 명확히 드러나게 하기',
      '경쟁사 없는 초안의 주제 어휘 균형 감사하기',
      '내보낸 HTML에서 깔끔하게 제거된 랜딩 페이지 복사본 검토하기',
      '단어 카운터와 가독성 검사기와 함께 평균 읽기 시간 확인하기',
    ],
    faqs: [
      {
        question: '구글에 이상적인 키워드 밀도 비율이 있나요?',
        answer:
          '아니요. 구글은 고정된 키워드 밀도 기준이 없다고 명시합니다. 독자를 위해 자연스럽게 쓰고 밀도 감사는 주제 범위 확인과 부자연스러운 반복 방지를 위해서만 사용하세요.',
      },
      {
        question: 'HTML 태그 제거는 <script>와 <style> 요소를 어떻게 처리하나요?',
        answer:
          '나머지 HTML 태그를 제거하기 전에 <script>와 <style> 블록 전체를 제거하므로 자바스크립트나 CSS 토큰이 단어 통계를 오염시키지 않습니다.',
      },
      {
        question: '도메인을 입력해 라이브 경쟁사 URL을 분석할 수 있나요?',
        answer:
          '아니요. 텍스트나 HTML 소스를 직접 붙여넣으세요. 브라우저 앱은 서버 프록시 없이 다른 출처의 웹사이트를 스크랩할 수 없습니다.',
      },
      {
        question: '키워드 밀도 검사기는 무료인가요?',
        answer:
          '네, 완전 무료이며 가입 없이 원하는 만큼 초안을 분석할 수 있습니다.',
      },
      {
        question: '키워드 밀도란 정확히 무엇인가요?',
        answer:
          '단어 또는 구가 전체 단어 수에서 차지하는 비율입니다. 500단어 텍스트에서 구가 5번 등장하면 밀도는 1%입니다.',
      },
      {
        question: '키워드 스터핑이란 무엇인가요?',
        answer:
          '순위를 높이려고 구를 부자연스럽게 자주 반복하는 것입니다. 방문자에게 읽기 나쁘고 순위에 악영향을 줄 수 있으므로, 이 도구는 목표 수치를 맞추기보다 반복을 찾는 데 사용하세요.',
      },
      {
        question: 'n-gram이란 무엇이고 2단어·3단어 구를 왜 확인하나요?',
        answer:
          'n-gram은 n개의 단어 수열입니다. 바이그램은 2단어 구, 트라이그램은 3단어 구입니다. 이를 확인하면 단일 단어 개수로는 놓치는 반복 구를 찾을 수 있습니다.',
      },
      {
        question: '의미 있는 밀도 검사를 위해 몇 단어가 필요한가요?',
        answer:
          '짧은 텍스트는 백분율이 불안정하므로 안정적인 결과를 위해 최소 300단어를 목표로 하세요. 아주 짧은 조각도 원시 개수는 볼 수 있지만 백분율은 주의해서 해석하세요.',
      },
      {
        question: '제목과 목록 안의 단어도 세나요?',
        answer:
          '네, 붙여넣은 모든 보이는 텍스트가 제목, 글머리 기호 목록, 캡션을 포함해 세어집니다. 검색엔진도 그 콘텐츠를 보기 때문입니다.',
      },
      {
        question: '목표 구가 0%로 표시되는 이유는 무엇인가요?',
        answer:
          '정확한 철자와 표현을 확인하세요. 복수형, 하이픈, 단어 순서가 일치해야 합니다. HTML을 붙여넣었다면 HTML 태그 제거가 켜져 있는지도 확인하세요.',
      },
      {
        question: '여러 키워드의 밀도를 한 번에 확인할 수 있나요?',
        answer:
          '한 번의 실행에서는 하나의 목표 구만 추적합니다. 다른 키워드를 확인하려면 목표 구를 바꾸고 같은 텍스트로 분석을 다시 실행하세요.',
      },
      {
        question: '검사기가 "the", "and" 같은 불용어도 세나요?',
        answer:
          '네, 1단어 빈도 표에 나타나지만 주제 단어와 구에 집중하세요. 불용어는 모든 텍스트에서 자연스럽게 자주 등장해 SEO에 대해 알려주는 바가 거의 없습니다.',
      },
      {
        question: '제 초안이 어딘가에 업로드되나요?',
        answer:
          '아니요. 키워드 밀도 검사기는 브라우저 안에서만 동작하므로 미발표 초안과 고객 복사본이 기기를 떠나지 않습니다.',
      },
      {
        question: '블로그 글의 적정 읽기 시간은 어느 정도인가요?',
        answer:
          '주제에 따라 다르지만 도구가 읽기 시간을 표시하므로 글이 독자 기대에 맞는지 판단할 수 있습니다. 빠른 가이드는 3분, 심층 튜토리얼은 10분 이상일 수 있습니다.',
      },
      {
        question: 'CMS에서 복사한 HTML을 붙여넣을 수 있나요?',
        answer:
          '네, 원시 HTML을 붙여넣고 HTML 태그 제거를 켜 두면 태그, 스크립트, 스타일이 제거된 뒤 단어가 세어집니다.',
      },
      {
        question: '검사기가 영어 외의 텍스트에서도 동작하나요?',
        answer:
          '네, 단어를 공백으로 구분하는 모든 언어에서 단어 세기가 동작하며 n-gram 표에는 해당 언어에서 가장 자주 등장하는 구가 나열됩니다.',
      },
      {
        question: '주제를 제거하지 않고 밀도를 낮추려면 어떻게 하나요?',
        answer:
          '정확한 키워드를 반복하기보다 동의어, 대명사, 다양한 표현을 사용하세요. 주제는 명확하게 유지되면서 텍스트가 자연스럽게 읽힙니다.',
      },
      {
        question: '어휘 다양성이란 무엇인가요?',
        answer:
          '전체 단어 수 대비 고유 단어의 비율입니다. 비율이 높을수록 보통 더 풍부하고 다양한 글쓰기이며, 아주 낮으면 반복적인 복사본일 수 있습니다.',
      },
      {
        question: 'PDF나 Word 문서를 분석할 수 있나요?',
        answer:
          '이 도구는 붙여넣은 텍스트를 받습니다. PDF나 Word 파일에서 텍스트를 복사해 붙여넣으세요. 밀도 검사에는 서식이 필요하지 않습니다.',
      },
      {
        question: 'n-gram 크기를 바꾸면 백분율이 바뀌는 이유는 무엇인가요?',
        answer:
          '각 n-gram 크기마다 전체 개수가 다릅니다. 500단어 텍스트에는 단일 단어가 500개 있지만 2단어 구는 499개뿐이므로 같은 구 개수도 약간 다른 백분율이 됩니다.',
      },
    ],
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
    instructions: [
      {
        title: 'hreflang 또는 301 리디렉션 선택하기',
        description:
          '국제 SEO용 캐노니컬·hreflang 태그나 URL 이전용 301 리디렉션 규칙 생성기 중 하나를 선택하세요.',
      },
      {
        title: '로케일 또는 URL 이전 쌍 입력하기',
        description:
          'ISO 언어-지역 코드(en-US, en-GB, x-default)와 URL을 추가하거나 이전 경로와 새 경로 쌍을 붙여넣으세요.',
      },
      {
        title: '생성된 태그나 규칙 검토하기',
        description:
          '복사하기 전에 모든 로케일 코드, URL, 리디렉션 쌍의 오타를 살펴보세요. 코드 하나가 잘못되면 전체 hreflang 세트가 깨질 수 있습니다.',
      },
      {
        title: 'x-default와 자기 참조 캐노니컬 추가하기',
        description:
          'x-default 대체 로케일을 포함하고 모든 페이지가 자기 자신을 캐노니컬로 나열하는지 확인하세요.',
      },
      {
        title: '플랫폼용 설정 복사하기',
        description:
          'HTML <link> 태그, <xhtml:link> XML 줄, _redirects/.htaccess/nginx 규칙을 그대로 복사하세요.',
      },
      {
        title: '배포 후 검증하기',
        description:
          '라이브가 되면 페이지 소스를 보거나 hreflang 검사기를 이용해 태그가 존재하고 상호적이며 올바른 URL을 가리키는지 확인하세요.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages 301 이전 규칙',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: '명시적인 301 영구 상태와 함께 정확한 Cloudflare Pages _redirects 구문을 출력합니다.',
      },
      {
        title: '영어·한국어 페이지용 hreflang 세트',
        input: 'en: https://example.com/guide/ · ko: https://example.com/ko/gaideu/ · x-default: https://example.com/guide/',
        output: '각 페이지에 자기 참조 캐노니컬과 상대방을 가리키는 alternate 링크가 포함된 HTML <link> 태그 세트',
        explanation: '상호 hreflang이 없으면 검색엔진이 주석을 무시하므로 양쪽 모두에 상대방 링크가 들어갑니다.',
      },
    ],
    benefits: [
      'HTML <link rel="alternate">와 XML <xhtml:link> 형식을 일관되게 모두 출력합니다',
      'Cloudflare Pages _redirects, Apache .htaccess, Nginx 서버 구문을 지원합니다',
      '자기 참조 캐노니컬과 x-default 대체 로케일을 권장합니다',
      '소스 리디렉션 경로의 앞 슬래시를 자동으로 정규화합니다',
    ],
    useCases: [
      '중복 페널티 없이 영어/한국어/프랑스어 지역 페이지를 깔끔하게 런칭하기',
      '리디자인 중 슬러그를 바꿀 때 백링크 가치를 보존하기',
      'Cloudflare Pages /public/_redirects 배포 파일을 몇 초 만에 만들기',
      '국제 사이트맵 제출 전에 상호 hreflang 세트 검증하기',
    ],
    faqs: [
      {
        question: 'hreflang 태그는 양방향/상호적이어야 하나요?',
        answer:
          '네, 페이지 A가 hreflang="es"로 페이지 B에 링크하면 페이지 B도 hreflang="en"(과 자기 자신)으로 페이지 A에 다시 링크해야 합니다. 그렇지 않으면 검색엔진이 주석을 무시합니다.',
      },
      {
        question: 'hreflang에서 x-default는 언제 사용해야 하나요?',
        answer:
          '브라우저 언어/지역이 특정 대체 버전과 일치하지 않는 방문자를 위한 대체 국제 페이지로 지정할 때 hreflang="x-default"를 사용하세요.',
      },
      {
        question: '캐노니컬 URL이 언어를 가로질러 가리켜야 하나요(예: es → en)?',
        answer:
          '아니요. 각 번역 언어 버전은 자기 자신을 가리키는 자기 참조 캐노니컬을 선언해야 하며, hreflang이 지역화된 동일 페이지를 연결합니다.',
      },
      {
        question: 'hreflang 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 가입 없이 필요한 만큼 hreflang 세트와 리디렉션 규칙을 만들 수 있습니다.',
      },
      {
        question: 'hreflang이란 무엇이고 왜 중요한가요?',
        answer:
          'hreflang은 검색엔진에게 각 방문자에게 어떤 언어와 지역 버전의 페이지를 보여줄지 알려주는 HTML 또는 XML 주석입니다. 영어 사용자는 영어 페이지를, 한국어 사용자는 한국어 페이지를 봅니다.',
      },
      {
        question: '언어-지역 코드는 어떤 형식을 써야 하나요?',
        answer:
          'ISO 언어 코드에 선택적인 ISO 지역을 붙이세요. en, es, fr-CA, en-GB처럼 언어가 먼저 오고 하이픈 뒤에 대문자 지역이 옵니다.',
      },
      {
        question: '사이트가 한 언어만 있으면 hreflang이 필요한가요?',
        answer:
          '아니요. hreflang은 같은 콘텐츠가 두 개 이상의 언어 또는 지역 버전으로 존재할 때만 유용합니다.',
      },
      {
        question: 'hreflang을 HTML 대신 XML 사이트맵에 넣을 수 있나요?',
        answer:
          '네, 이 도구는 두 형식을 모두 출력합니다. 페이지 head용 HTML 링크 태그와 XML 사이트맵용 xhtml:link 블록 중 한 곳을 선택하고 일관되게 유지하세요.',
      },
      {
        question: '자기 참조 캐노니컬이란 무엇인가요?',
        answer:
          '페이지 자신을 가리키는 캐노니컬 태그입니다. 번역된 각 버전을 포함해 모든 페이지 버전이 하나씩 포함해야 합니다.',
      },
      {
        question: '캐노니컬 태그 대신 301 리디렉션을 언제 사용해야 하나요?',
        answer:
          '페이지가 새 URL로 영구 이동했으면 301 리디렉션을 사용하세요. 두 개의 비슷한 페이지가 모두 라이브로 남아 있어야 하고 검색엔진이 그중 하나를 선호하길 원하면 캐노니컬 태그를 사용하세요.',
      },
      {
        question: '301 리디렉션과 302 리디렉션의 차이는 무엇인가요?',
        answer:
          '301은 영구적이며 대부분의 순위 신호를 새 URL로 전달합니다. 302는 임시적이며 이전 URL이 돌아올 수 있다고 검색엔진에 알리므로 영구 이동에는 잘못된 선택입니다.',
      },
      {
        question: 'Cloudflare Pages _redirects는 어떻게 동작하나요?',
        answer:
          '사이트 public 폴더에 한 줄에 하나의 규칙(이전 경로, 새 경로, 상태 코드)을 적은 _redirects 파일을 두면 사이트가 배포될 때 Cloudflare가 리디렉션을 적용합니다.',
      },
      {
        question: '하나의 규칙으로 폴더 전체를 리디렉션할 수 있나요?',
        answer:
          '이 도구는 URL 쌍마다 하나의 규칙을 출력합니다. 폴더 전체 이동에는 Cloudflare Pages나 Apache의 와일드카드·스플랫 규칙을 사용하거나 여기서 전체 쌍 목록을 생성하세요.',
      },
      {
        question: '301 리디렉션이 새 페이지로 순위 신호를 전달하나요?',
        answer:
          '네, 301 리디렉션은 이전 페이지의 순위 신호와 링크 가치 대부분을 새 URL로 전달하므로 영구 이동의 표준 선택입니다.',
      },
      {
        question: '301 리디렉션 뒤에 이전 URL을 사이트맵에 남겨야 하나요?',
        answer:
          '아니요. 리디렉션된 URL을 사이트맵에서 제거하고 새 대상 URL만 나열하면 검색엔진이 현재 페이지를 크롤링합니다.',
      },
      {
        question: '301 리디렉션을 얼마나 오래 유지해야 하나요?',
        answer:
          '최소 1년, 이상적으로는 영구적으로 유지하세요. 너무 일찍 제거하면 이전 URL을 가리키는 오래된 백링크와 북마크가 깨질 수 있습니다.',
      },
      {
        question: 'hreflang으로 중복 콘텐츠 문제를 해결할 수 있나요?',
        answer:
          '그 자체만으로는 아닙니다. hreflang은 검색엔진에게 각 대상에게 어떤 버전을 보여줄지 알리지만, 같은 언어의 진짜 중복 페이지는 여전히 캐노니컬 태그나 통합이 필요합니다.',
      },
      {
        question: '로케일 코드를 잘못 사용하면 어떻게 되나요?',
        answer:
          '검색엔진은 잘못된 코드를 무시하므로 en-UK 대신 en-GB처럼 오타가 나면 해당 언어 버전이 조용히 깨집니다. 배포 전에 모든 코드를 다시 확인하세요.',
      },
      {
        question: 'URL 목록이 어딘가에 업로드되나요?',
        answer:
          '아니요. 캐노니컬·hreflang·301 리디렉션 빌더는 브라우저 안에서만 동작하므로 URL과 이전 계획이 기기를 떠나지 않습니다.',
      },
      {
        question: '두 개 이상의 언어에 대한 hreflang 태그를 만들 수 있나요?',
        answer:
          '네, 사이트가 지원하는 만큼 로케일 행을 추가하세요. 도구는 입력한 모든 언어 버전을 아우르는 완전한 상호 세트를 만듭니다.',
      },
    ],
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
    instructions: [
      {
        title: '페이지에서 HTML 소스 복사하기',
        description:
          '페이지 소스 보기(또는 빌드된 dist/index.html)를 열고 HTML을 소스 텍스트 영역에 붙여넣으세요.',
      },
      {
        title: 'DOM 감사 점수와 체크리스트 검토하기',
        description:
          '제목, 메타 설명, 단일 H1, 캐노니컬 링크, alt 텍스트, 구조화 데이터의 통과/경고 표시를 살펴보세요.',
      },
      {
        title: '제목 개요와 링크 확인하기',
        description:
          '추출된 H1~H4 트리와 내부/외부 링크 집계를 살펴보며 건너뛴 수준이나 누락된 태그를 수정하세요.',
      },
      {
        title: '경고를 우선순위대로 수정하기',
        description:
          '누락되거나 너무 긴 제목과 메타 설명부터 시작하고, 그다음 중복 H1 태그, 그다음 누락된 이미지 alt 텍스트 순으로 수정하세요.',
      },
      {
        title: '수정 뒤 다시 붙여넣고 다시 감사하기',
        description:
          '업데이트된 HTML을 붙여넣고 감사를 다시 실행해 점수가 올랐고 새 경고가 나타나지 않았는지 확인하세요.',
      },
      {
        title: '자바스크립트로 렌더링되는 페이지는 올바른 방법으로 감사하기',
        description:
          'React나 SPA 페이지에서 원시 페이지 소스 보기에 메타 태그가 없으면 브라우저 개발자 도구 Elements 패널에서 라이브 outerHTML을 복사하세요.',
      },
    ],
    examples: [
      {
        title: '렌더링된 정적 HTML 내보내기 감사하기',
        input: '<title>, <meta description>, H1/H2, JSON-LD가 포함된 완전한 <html> 문서',
        output: '6/6 검사 통과 · H1~H4 개요 + 내부/외부 링크 분석',
        explanation: '신뢰할 수 없는 스크립트를 실행하지 않고 네이티브 브라우저 DOMParser를 깔끔하게 사용합니다.',
      },
      {
        title: '중복 H1이 있는 CMS 템플릿 잡아내기',
        input: 'H1이 3개인 블로그 템플릿 HTML',
        output: '경고: H1 태그 3개 발견 — 페이지는 H1을 하나만 사용해야 합니다',
        explanation: '제목 개요 추출이 중복된 최상위 제목을 즉시 보여줍니다.',
      },
    ],
    benefits: [
      '네이티브 DOMParser를 사용합니다(붙여넣은 <script> 태그나 외부 페이로드를 절대 실행하지 않음)',
      '브라우저 CORS 경계에 대해 정직합니다. 차단된 원격 URL을 스크랩하는 척하지 않습니다',
      '완전한 H1~H4 문서 개요를 깔끔하게 추출합니다',
      '클래식 SEO 태그와 함께 오픈 그래프와 JSON-LD 존재 여부도 검증합니다',
    ],
    useCases: [
      '스테이징 빌드와 정적 HTML 내보내기의 배포 전 QA',
      'CMS 블로그 템플릿의 우연한 중복 <h1> 태그나 빈 alt 속성 확인하기',
      '서버 렌더링 페이지가 캐노니컬과 메타 태그를 깔끔하게 내보내는지 검증하기',
      '클라우드 크롤러가 접근할 수 없는 이메일 게이트·localhost HTML 페이지 검사하기',
    ],
    faqs: [
      {
        question: '이 도구가 웹사이트 URL을 입력받는 대신 HTML 소스를 붙여넣으라고 하는 이유는 무엇인가요?',
        answer:
          '브라우저는 CORS(Cross-Origin Resource Sharing) 정책 때문에 클라이언트 자바스크립트가 임의의 외부 웹사이트를 읽는 것을 차단하고, localhost나 비공개 스테이징 URL은 공개 서버에서 도달할 수 없습니다. 페이지 소스 보기를 붙여넣으면 로컬 감사가 100% 안정적이고 비공개로 이루어집니다.',
      },
      {
        question: '자바스크립트로 렌더링되는 SPA도 원시 페이지 소스 보기로 올바르게 감사할 수 있나요?',
        answer:
          'React가 런타임에 메타 태그를 주입하는 클라이언트 렌더링 SPA에서는 원시 페이지 소스 보기 대신 Chrome/Firefox 개발자 도구 Elements 패널에서 라이브 outerHTML을 복사하세요.',
      },
      {
        question: 'DOMParser가 붙여넣은 HTML 안의 스크립트를 실행하나요?',
        answer:
          '아니요. DOMParser.parseFromString(..., "text/html")은 자바스크립트를 실행하거나 외부 이미지를 로드하지 않고 검사용으로만 inert DOM 트리를 만듭니다.',
      },
      {
        question: '온페이지 SEO 검사기는 무료인가요?',
        answer:
          '네, 완전 무료이며 가입 없이 원하는 만큼 페이지를 감사할 수 있습니다.',
      },
      {
        question: '이상적인 타이틀 태그 길이는 어느 정도인가요?',
        answer:
          '50~60자를 목표로 하세요. 더 긴 제목은 검색 결과에서 잘리고, 너무 짧은 제목은 페이지를 명확히 설명할 기회를 낭비합니다.',
      },
      {
        question: '이상적인 메타 설명 길이는 어느 정도인가요?',
        answer:
          '150~160자를 목표로 하세요. 그 길이는 보통 검색 결과에 잘리지 않고 온전히 표시됩니다.',
      },
      {
        question: '페이지에 H1 태그가 몇 개 있어야 하나요?',
        answer:
          '하나입니다. 하나의 H1이 페이지의 주요 주제를 나타내고, 하위 주제는 그 아래 H2와 H3 제목에 들어갑니다.',
      },
      {
        question: '제목 수준을 건너뛰어도 되나요? 예를 들어 H1 뒤에 H3을 써도 되나요?',
        answer:
          '피하세요. H1, H2, H3 순서대로 계층을 유지하면 검색엔진과 스크린 리더가 페이지 구조를 따라갈 수 있습니다.',
      },
      {
        question: '페이지에 캐노니컬 태그가 없으면 어떻게 되나요?',
        answer:
          '검색엔진이 캐노니컬 URL을 스스로 선택하는데, 원하는 버전이 아닐 수 있습니다. 명시적으로 추가하면 추측을 없앨 수 있습니다.',
      },
      {
        question: '이미지 alt 텍스트가 SEO에 중요한 이유는 무엇인가요?',
        answer:
          'alt 텍스트는 이미지를 검색엔진과 스크린 리더에 설명하고, 이미지 검색에서 이미지 순위를 도우며, 이미지가 로드되지 않을 때 페이지를 계속 사용할 수 있게 합니다.',
      },
      {
        question: 'JSON-LD란 무엇이고 왜 확인해야 하나요?',
        answer:
          'JSON-LD는 페이지 콘텐츠를 검색엔진에 설명하는 구조화 데이터 블록으로, 평점, FAQ, breadcrumb 같은 리치 결과를 만듭니다. 검사기는 JSON-LD가 있는지 확인합니다.',
      },
      {
        question: '검사기가 오픈 그래프 태그도 감사하나요?',
        answer:
          '네, og:title이나 og:image 같은 오픈 그래프 태그가 있는지 보고하므로 소셜 미디어에 공유했을 때 페이지가 올바르게 미리 보입니다.',
      },
      {
        question: '로그인이 필요한 페이지도 감사할 수 있나요?',
        answer:
          '네, HTML을 직접 붙여넣으므로 공개 크롤러가 도달할 수 없는 비공개, 스테이징, localhost 페이지도 감사할 수 있습니다.',
      },
      {
        question: '제 HTML이 어딘가에 업로드되나요?',
        answer:
          '아니요. 온페이지 SEO 검사기는 브라우저 안에서만 동작하므로 페이지 소스가 기기를 떠나지 않습니다.',
      },
      {
        question: '감사 점수가 낮은데 무엇을 먼저 고쳐야 하나요?',
        answer:
          '다음 순서로 고치세요. 누락되거나 너무 긴 제목, 누락된 메타 설명, 중복 H1 태그, 그다음 누락된 이미지 alt 텍스트입니다.',
      },
      {
        question: '검사기가 내부 링크와 외부 링크를 세나요?',
        answer:
          '네, 내부 링크와 외부 링크를 따로 집계하므로 페이지가 외부로 충분히 링크하는지, 내부 탐색이 있는지 볼 수 있습니다.',
      },
      {
        question: '홈페이지와 블로그 글을 같은 도구로 감사할 수 있나요?',
        answer:
          '네, 각 페이지의 HTML 소스를 따로 붙여넣어 한 번에 하나씩 감사하세요. 모든 페이지가 자체 점수와 체크리스트를 받습니다.',
      },
      {
        question: '일부 검사가 실패가 아니라 경고로 표시되는 이유는 무엇인가요?',
        answer:
          '경고는 고칠 가치가 있지만 치명적인 오류는 아닌 모범 사례 문제를 표시합니다. 예를 들어 제목이 약간 길거나 제목 수준을 건너뛴 경우입니다.',
      },
      {
        question: '워드프레스 페이지에서도 동작하나요?',
        answer:
          '네, 어떤 워드프레스 페이지에서든 페이지 소스 보기를 열어 HTML을 복사해 붙여넣으세요. 검사기는 어떤 CMS 출력물에서도 동작합니다.',
      },
      {
        question: '온페이지 SEO 감사는 얼마나 자주 실행해야 하나요?',
        answer:
          '템플릿을 바꾸거나, 새 페이지 유형을 게시하거나, 리디자인한 뒤에 실행하고, 수정 뒤에는 다시 감사해 점수가 올랐는지 확인하세요.',
      },
    ],
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
    instructions: [
      {
        title: '인덱싱·링크 지시문 선택하기',
        description:
          'index/noindex, follow/nofollow를 설정하고 noarchive, nosnippet, noimageindex 같은 선택 제한을 추가하세요.',
      },
      {
        title: '스니펫·미리보기 상한 조정하기',
        description:
          'max-snippet(무제한은 -1), max-image-preview(Google Discover용은 large), max-video-preview를 설정하세요.',
      },
      {
        title: 'HTML 태그 또는 HTTP 헤더 복사하기',
        description:
          '<head> 안에 넣을 HTML 메타 태그를 사용하거나 PDF와 HTML이 아닌 다운로드용 X-Robots-Tag 헤더 블록을 배포하세요.',
      },
      {
        title: '올바른 출력 형식 고르기',
        description:
          '일반 페이지에는 HTML 메타 태그, PDF와 HTML이 아닌 파일에는 X-Robots-Tag, Cloudflare 경로 규칙에는 _headers 블록을 사용하세요.',
      },
      {
        title: '출력을 올바른 위치에 두기',
        description:
          '메타 태그는 페이지 <head> 안에 넣고, 헤더 규칙은 서버 설정이나 Cloudflare _headers 파일에 추가한 뒤 배포하세요.',
      },
      {
        title: '페이지가 검색에 계속 표시되나요?',
        description:
          'noindex는 검색엔진이 페이지를 다시 크롤링한 뒤에야 적용되며 며칠이 걸릴 수 있습니다. robots.txt가 크롤링을 차단하지 않는지 확인한 뒤 Search Console에서 확인하세요.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages _headers로 비공개 PDF 다운로드 제외하기',
        input: 'noindex, nofollow · 경로: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'HTTP X-Robots-Tag는 <head> 요소가 없는 PDF, 이미지, HTML이 아닌 파일에 동작합니다.',
      },
      {
        title: '감사 페이지용 noindex 메타 태그',
        input: 'noindex, follow · max-snippet: 0',
        output: '<meta name="robots" content="noindex, follow, max-snippet:0">',
        explanation: '페이지는 검색 결과에서 제외되지만 그 안의 링크는 크롤러가 계속 따라갈 수 있습니다.',
      },
    ],
    benefits: [
      'HTML <meta>, 일반 HTTP X-Robots-Tag, Cloudflare Pages _headers를 동시에 출력합니다',
      'Google Discover 권장 max-image-preview:large 기본값을 포함합니다',
      '충돌하는 조합을 자동으로 막습니다(nosnippet/noimageindex가 켜지면 스니펫·이미지 슬라이더를 비활성화)',
      'HTTP 헤더로 HTML이 아닌 PDF/애셋의 인덱싱 해제를 쉽게 만듭니다',
    ],
    useCases: [
      '감사 페이지, 내부 검색 결과, 회원 포털이 구글 인덱스에 들어가지 않게 하기',
      'X-Robots-Tag 헤더로 호스팅된 PDF 브로슈어나 백서 애셋 인덱싱 해제하기',
      'Google Discover를 노리는 편집 글에 max-image-preview:large 활성화하기',
      '유료 또는 민감한 문서에 엄격한 noarchive나 스니펫 길이 상한 추가하기',
    ],
    faqs: [
      {
        question: '<meta name="robots"> 대신 X-Robots-Tag는 언제 사용해야 하나요?',
        answer:
          'PDF, 스프레드시트, 이미지 같은 HTML이 아닌 파일이나 CDN 규칙으로 폴더 경로 전체에 인덱싱 규칙을 적용할 때 X-Robots-Tag HTTP 헤더를 사용하세요.',
      },
      {
        question: 'robots.txt Disallow와 <meta name="robots" content="noindex">를 함께 써야 하나요?',
        answer:
          '아니요! URL이 robots.txt에서 차단되면 검색 봇이 페이지를 크롤링해 그 안의 HTML <meta name="robots" content="noindex"> 태그를 읽을 수 없습니다. 메타 noindex에 의존한다면 크롤링을 허용하세요.',
      },
      {
        question: 'max-snippet:-1은 무슨 뜻인가요?',
        answer:
          '-1은 검색엔진이 도움이 된다고 판단하는 어떤 스니펫 길이를 선택해도 된다는 뜻이고, 0은 텍스트 스니펫을 막으며 양의 정수(예: 160)는 스니펫 문자 길이를 제한합니다.',
      },
      {
        question: 'robots 메타 태그 생성기는 무료인가요?',
        answer:
          '네, 완전 무료이며 가입 없이 필요한 만큼 태그와 헤더 규칙을 만들 수 있습니다.',
      },
      {
        question: 'noindex는 무엇을 하나요?',
        answer:
          'noindex는 검색엔진에게 페이지를 검색 결과에 포함하지 말라고 알립니다. 페이지는 계속 라이브로 방문할 수 있지만 구글과 빙에는 나타나지 않습니다.',
      },
      {
        question: 'nofollow는 무엇을 하나요?',
        answer:
          'nofollow는 검색엔진에게 페이지의 링크를 따라가지 말고 순위 신호를 전달하지 말라고 알립니다. 신뢰할 수 없거나 유료 링크가 있는 페이지에 유용합니다.',
      },
      {
        question: 'robots.txt와 robots 메타 태그의 차이는 무엇인가요?',
        answer:
          'robots.txt는 URL 크롤링을 차단하고, robots 메타 태그는 크롤링된 페이지의 인덱싱을 제어합니다. 해결하는 문제가 다르며 부주의하게 함께 써서는 안 됩니다.',
      },
      {
        question: 'noindex가 적용되는 데 얼마나 걸리나요?',
        answer:
          '검색엔진이 페이지를 다시 크롤링한 뒤에야 적용되며, 페이지 방문 빈도에 따라 며칠이나 몇 주가 걸릴 수 있습니다.',
      },
      {
        question: 'max-image-preview:large란 무엇인가요?',
        answer:
          '검색엔진이 페이지에 큰 이미지 미리보기를 표시할 수 있게 하며, 구글이 Google Discover를 노리는 페이지에 권장하는 설정입니다.',
      },
      {
        question: 'nosnippet은 무엇을 하나요?',
        answer:
          'nosnippet은 검색엔진이 검색 결과에 페이지의 텍스트 스니펫을 표시하지 못하게 하므로 제목과 URL만 나타납니다.',
      },
      {
        question: 'noarchive는 무엇을 하나요?',
        answer:
          'noarchive는 검색엔진이 페이지의 캐시 복사본을 제공하지 못하게 하며, 시간에 민감하거나 자주 바뀌는 콘텐츠에 유용합니다.',
      },
      {
        question: 'noimageindex는 무엇을 하나요?',
        answer:
          'noimageindex는 검색엔진에게 페이지의 이미지를 인덱싱하지 말라고 알리며, 페이지 자체는 일반 검색 결과에 계속 나타날 수 있습니다.',
      },
      {
        question: 'PDF 파일을 noindex 할 수 있나요?',
        answer:
          '네, PDF에는 HTML head가 없으므로 X-Robots-Tag HTTP 헤더를 사용하세요. 이 도구가 정확한 헤더 블록을 생성해 줍니다.',
      },
      {
        question: '감사 페이지와 결제 페이지를 noindex 해야 하나요?',
        answer:
          '네, 감사 페이지, 결제 단계, 내부 검색 결과, 회원 전용 영역은 보통 검색 가치가 없어 noindex로 설정하는 경우가 많습니다.',
      },
      {
        question: 'noindex와 nofollow를 같은 페이지에 함께 쓸 수 있나요?',
        answer:
          '네, 인덱싱과 링크 따라가기는 서로 다른 것을 제어하므로 비공개 페이지나 유틸리티 페이지에 함께 사용하는 경우가 많습니다.',
      },
      {
        question: 'Cloudflare _headers 파일이란 무엇인가요?',
        answer:
          '사이트 public 폴더에 있는 파일로 URL 경로를 HTTP 응답 헤더에 매핑합니다. 이 도구는 선택한 모든 경로에 바로 붙여넣을 수 있는 블록을 출력합니다.',
      },
      {
        question: 'robots 메타 태그가 빙과 다른 검색엔진에서도 동작하나요?',
        answer:
          '네, 대부분의 주요 검색엔진이 표준 robots 지시문을 존중합니다. 일부는 일부만 지원하므로 가장 넓은 적용 범위를 위해 일반적인 지시문을 사용하세요.',
      },
      {
        question: '설정이 어딘가에 업로드되나요?',
        answer:
          '아니요. robots 메타 태그 생성기는 브라우저 안에서만 동작하므로 설정이 기기를 떠나지 않습니다.',
      },
      {
        question: '충돌하는 지시문을 선택하면 어떻게 되나요?',
        answer:
          '도구가 충돌하는 조합을 자동으로 막습니다. 예를 들어 nosnippet이나 noimageindex가 켜지면 스니펫과 이미지 미리보기 슬라이더를 비활성화합니다.',
      },
      {
        question: 'noindex를 쓸지 페이지를 삭제할지 어떻게 결정하나요?',
        answer:
          '페이지가 완전히 사라져야 한다면 삭제하고 404나 410 상태를 반환하게 하세요. 페이지는 라이브로 남아 있어야 하지만 검색 결과에 나타나면 안 될 때 noindex를 사용하세요.',
      },
    ],
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
    instructions: [
      {
        title: '원본 이미지 선택하기',
        description:
          '기기에서 PNG, JPG, WebP, GIF 이미지를 선택해 크기와 원본 바이트 크기를 확인하세요.',
      },
      {
        title: '대상 형식, 너비 상한, 품질 고르기',
        description:
          '대폭적인 바이트 절감을 위해 WebP나 JPG를 선택하고 선택적으로 최대 너비 상한(예: 1920픽셀 또는 1280픽셀)을 적용한 뒤 품질 슬라이더를 10%에서 100% 사이로 조정하세요.',
      },
      {
        title: '압축 실행하기',
        description:
          '압축을 클릭하면 브라우저 안에서 로컬로 이미지가 다시 인코딩되고 새 바이트 크기가 즉시 표시됩니다.',
      },
      {
        title: '전후 비교하기',
        description:
          '나란히 보기 미리보기와 정확한 바이트·백분율 절감량을 확인해 품질이 여전히 괜찮은지 살펴보세요.',
      },
      {
        title: '압축된 파일 다운로드하기',
        description:
          '다운로드를 클릭해 최적화된 이미지를 기기에 저장한 뒤 필요할 때마다 다른 파일에도 반복하세요.',
      },
      {
        title: '팁: 출력이 입력보다 커졌나요?',
        description:
          '작은 PNG가 압축 후 커지면 출력 형식을 WebP나 JPG로 바꾸거나 품질 슬라이더를 조금 낮춘 뒤 다시 압축하세요.',
      },
    ],
    examples: [
      {
        title: '블로그 글용 2.4MB 히어로 사진 최적화하기',
        input: '3840×2160 JPG · 출력: WebP · 최대 너비: 1280픽셀 · 품질: 80%',
        output: '1280×720 WebP 보통 약 85~140KB(페이로드 94% 감소)',
        explanation: '크기 상한과 최신 WebP 압축을 함께 쓰면 Largest Contentful Paint가 크게 빨라집니다.',
      },
      {
        title: '이메일 첨부용 스크린샷 줄이기',
        input: '1920×1080 PNG 스크린샷 1.8MB · 출력: JPG · 품질: 75%',
        output: '동일한 해상도의 JPG 약 180~250KB',
        explanation: '사진 같은 스크린샷은 JPG로 바꾸는 것만으로 품질 손실이 거의 없이 크기가 크게 줄어듭니다.',
      },
    ],
    benefits: [
      '서버 업로드가 없어 미공개 제품 그래픽과 개인 사진이 완전히 로컬에 머뭅니다',
      'WebP, JPEG(자동 흰색 알파 매트 채우기), PNG 다시 인코딩을 지원합니다',
      '실제 전후 바이트 크기와 백분율 절감량을 즉시 보여줍니다',
      '선택적인 최대 너비 상한으로 큰 카메라 사진을 한 번에 줄입니다',
    ],
    useCases: [
      '히어로 배너와 스크린샷을 줄여 Core Web Vitals와 LCP 개선하기',
      '이메일, 포털, CMS 업로드용으로 더 가벼운 첨부 준비하기',
      '무거운 원본 스크린샷을 가벼운 WebP 웹 애셋으로 변환하기',
      '최적 품질 대 시각적 충실도 균형을 빠르게 확인하기',
    ],
    faqs: [
      {
        question: '작은 PNG를 PNG로 압축하면 크기가 커지는 이유는 무엇인가요?',
        answer:
          '브라우저 캔버스는 pngquant 같은 특수 팔레트 양자화 도구 없이 표준 손실 없는 DEFLATE 스트림으로 PNG를 다시 인코딩합니다. 출력 형식을 WebP나 JPG로 바꾸면 보통 파일 크기가 크게 줄어듭니다.',
      },
      {
        question: '사진이 외부 압축 서버에 업로드되나요?',
        answer:
          '아니요. 모든 디코딩, 크기 조정, 캔버스 다시 인코딩은 브라우저 메모리 안에서만 엄격히 이루어집니다.',
      },
      {
        question: 'JPG를 선택하면 투명 배경은 어떻게 되나요?',
        answer:
          'JPEG는 알파 투명도를 지원하지 않으므로 투명 영역은 인코딩 전에 단색 흰색(#ffffff)으로 깔끔하게 채워집니다.',
      },
      {
        question: '이미지 압축기는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료이며 워터마크가 없고 압축하는 이미지 수에 제한이 없습니다.',
      },
      {
        question: '어떤 이미지 형식을 압축할 수 있나요?',
        answer:
          'PNG, JPG, WebP, GIF 이미지를 압축하고 결과를 WebP, JPG, PNG로 다운로드할 수 있습니다.',
      },
      {
        question: '이미지 압축기가 사진을 얼마나 줄일 수 있나요?',
        answer:
          '절감량은 원본 형식과 품질 설정에 따라 다르지만, 80% 품질의 WebP로 변환한 사진은 보통 50~90% 줄어듭니다.',
      },
      {
        question: '이미지를 압축하면 품질이 떨어지나요?',
        answer:
          'WebP와 JPG 같은 손실 형식은 약간의 디테일을 포기하는 대신 파일을 훨씬 작게 만듭니다. 품질 슬라이더와 미리보기로 원하는 균형을 찾거나 손실 없는 결과를 위해 PNG를 유지하세요.',
      },
      {
        question: '이미지 압축기가 이미지 크기를 바꾸나요?',
        answer:
          '최대 너비 상한을 설정할 때만 바뀝니다. 그렇지 않으면 픽셀 크기는 그대로 유지되고 파일 크기만 바뀝니다.',
      },
      {
        question: '이메일 첨부용으로 이미지를 압축할 수 있나요?',
        answer:
          '네, 먼저 압축하면 큰 사진이 이메일 첨부 제한에 들어갈 만큼 작아져 여러 메시지로 나눌 필요가 없습니다.',
      },
      {
        question: '웹사이트 이미지에는 어떤 품질 설정을 골라야 하나요?',
        answer:
          'WebP 75~85% 품질은 보통 원본과 거의 똑같이 보이면서 파일을 빠르게 로드할 만큼 작게 유지합니다.',
      },
      {
        question: '압축할 때 JPG를 WebP로 변환해야 하는 이유는 무엇인가요?',
        answer:
          'WebP는 JPG보다 효율적인 압축을 사용하므로 같은 사진도 같은 시각적 품질에서 보통 훨씬 작습니다.',
      },
      {
        question: '여러 이미지를 한 번에 압축할 수 있나요?',
        answer:
          '압축기는 한 번에 하나의 이미지를 처리하므로 다운로드하기 전에 각 사진의 품질, 너비, 형식을 세밀하게 조정할 수 있습니다.',
      },
      {
        question: '압축이 오프라인에서도 동작하나요?',
        answer:
          '네, 페이지가 로드된 뒤에는 모든 압축이 브라우저 안에서 로컬로 실행되므로 인터넷 연결 없이 동작합니다.',
      },
      {
        question: '압축된 이미지에 워터마크가 있나요?',
        answer:
          '아니요, 다운로드한 이미지에는 워터마크나 브랜딩이 절대 포함되지 않습니다.',
      },
      {
        question: '스크린샷 압축에 가장 좋은 형식은 무엇인가요?',
        answer:
          'WebP는 보통 스크린샷에서 가장 작은 파일을 만듭니다. 픽셀 단위로 완벽한 손실 없는 품질이 필요할 때만 PNG를 사용하세요.',
      },
      {
        question: '크기를 바꾸지 않고 이미지를 압축할 수 있나요?',
        answer:
          '네, 최대 너비 상한을 설정하지 않으면 도구가 원래 너비와 높이를 유지하면서 파일 크기만 줄입니다.',
      },
      {
        question: '이미지 압축기가 이미지 메타데이터를 유지하나요?',
        answer:
          '브라우저 캔버스 다시 인코딩은 보통 카메라 설정과 위치 같은 EXIF 메타데이터를 제거하며, 이 또한 파일 크기를 줄이는 데 도움이 됩니다.',
      },
      {
        question: '휴대폰에서도 이미지 압축기를 쓸 수 있나요?',
        answer:
          '네, 모든 최신 모바일 브라우저에서 동작합니다. 사진 보관함에서 이미지를 선택하고 압축된 결과를 같은 방식으로 다운로드하세요.',
      },
      {
        question: '압축할 수 있는 최대 이미지 크기는 어느 정도인가요?',
        answer:
          '업로드가 없으므로 고정된 서버 제한이 없습니다. 아주 큰 이미지는 기기 메모리와 브라우저 캔버스 크기에만 제한됩니다.',
      },
      {
        question: '이미지를 100KB 이하로 압축하려면 어떻게 하나요?',
        answer:
          'WebP 출력을 선택하고 최대 너비를 1280픽셀처럼 설정한 뒤 표시되는 파일 크기가 100KB 아래로 떨어질 때까지 품질 슬라이더를 단계적으로 낮추세요.',
      },
    ],
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
    instructions: [
      {
        title: '이미지 불러오기',
        description:
          'PNG, JPG, WebP, GIF 이미지를 업로드해 원본 픽셀 너비와 높이를 읽으세요.',
      },
      {
        title: '너비, 높이, 맞춤 모드 설정하기',
        description:
          '사용자 지정 픽셀을 입력하거나(선택적으로 종횡비 잠금) 소셜 프리셋을 선택한 뒤 중앙 커버 크롭 또는 정확한 늘이기/배율을 고르세요.',
      },
      {
        title: '출력 형식 선택하기',
        description:
          '투명도에는 PNG, 사진에는 JPG, 가장 작은 파일에는 WebP를 렌더링 전에 고르세요.',
      },
      {
        title: '크기 변경된 이미지 렌더링하기',
        description:
          '크기 변경된 이미지 렌더링을 클릭해 정확한 픽셀 크기의 새 버전을 만드세요.',
      },
      {
        title: '결과 검토하고 다운로드하기',
        description:
          '선명도와 자르기를 미리보기로 확인하고 파일 크기를 확인한 뒤 다운로드를 클릭해 저장하세요.',
      },
      {
        title: '팁: 이미지가 늘어나거나 흐릿해 보이나요?',
        description:
          '종횡비 잠금을 켜거나 중앙 커버 크롭으로 전환해 왜곡을 피하고, 원본 크기보다 훨씬 크게 확대하지 마세요.',
      },
    ],
    examples: [
      {
        title: '세로 스크린샷을 1200×630 오픈 그래프 카드로 자르기',
        input: '1440×1600 스크린샷 · 프리셋: OG 공유(1200×630) · 맞춤: 중앙 커버 크롭',
        output: '찌그러짐이나 왜곡 없이 수직 중앙에 맞춘 선명한 1200×630 카드',
        explanation: '커버 크롭은 대상 프레임이 채워질 때까지 비례적으로 확대하고 넘치는 가장자리를 균등하게 자릅니다.',
      },
      {
        title: '프로필 사진용 512×512 정사각형 만들기',
        input: '3000×2000 가로 사진 · 프리셋: 아바타(512×512) · 맞춤: 중앙 커버 크롭',
        output: '좌우가 균등하게 잘린 선명한 512×512 정사각형 아바타',
        explanation: '중앙 크롭은 피사체를 가운데에 유지하면서 정사각형 프레임을 채웁니다.',
      },
    ],
    benefits: [
      '오픈 그래프, 유튜브 HD, 정사각형, 아바타 픽셀 프리셋을 한 번의 클릭으로 제공합니다',
      '중앙 커버 크롭이 종횡비를 바꿀 때 어색한 늘어남을 막습니다',
      '고품질 캔버스 imageSmoothingQuality가 선명한 타이포그래피와 선을 유지합니다',
      'PNG, JPG, WebP로 바로 내보내며 실제 파일 크기를 표시합니다',
    ],
    useCases: [
      '블로그 글과 랜딩 페이지용 1200×630 og:image 카드 만들기',
      '1080×1080 제품 사진과 512×512 프로필 아바타 준비하기',
      '문서에 넣기 전에 고DPI 스크린샷 축소하기',
      'CMS 템플릿 요구사항에 맞는 정확한 히어로 크기 만들기',
    ],
    faqs: [
      {
        question: '중앙 커버 크롭과 늘이기/정확 배율의 차이는 무엇인가요?',
        answer:
          '중앙 커버 크롭은 자연스러운 비율을 유지하고 새 종횡비가 다를 때 넘치는 가장자리를 대칭으로 자릅니다. 정확한 배율은 원본 사진 전체를 대상 너비와 높이에 강제로 맞춥니다.',
      },
      {
        question: '작은 사진을 4K로 깨끗하게 확대할 수 있나요?',
        answer:
          '캔버스 보간으로 더 큰 픽셀 그리드를 내보낼 수 있지만, 원래 해상도를 넘어 확대한다고 해서 부족한 세밀한 디테일이 새로 생기지는 않습니다.',
      },
      {
        question: '지원되는 최대 출력 크기는 어느 정도인가요?',
        answer:
          '브라우저 캔버스 메모리 제한 안에 안전하게 머무르도록 축당 최대 8000픽셀까지 입력이 제한됩니다.',
      },
      {
        question: '이미지 크기 조절기는 무료인가요?',
        answer:
          '네, 가입 없이 무료이며 워터마크가 없고 크기를 바꾸는 이미지 수에 제한이 없습니다.',
      },
      {
        question: '이미지 크기 변경과 자르기의 차이는 무엇인가요?',
        answer:
          '크기 변경은 전체 이미지의 픽셀 크기를 바꾸고, 자르기는 사진의 일부를 잘라냅니다. 이 도구는 중앙 커버 크롭을 포함해 둘 다 할 수 있습니다.',
      },
      {
        question: '이미지 크기 조절기로 소셜 공유용 1200x630을 만들 수 있나요?',
        answer:
          '네, 오픈 그래프 프리셋(1200×630)을 선택하면 소셜 플랫폼의 링크 미리보기에 맞는 크기로 이미지가 정확히 조정됩니다.',
      },
      {
        question: '이미지를 늘어나지 않게 크기를 바꾸려면 어떻게 하나요?',
        answer:
          '종횡비 잠금을 켜 두거나 중앙 커버 크롭을 사용하면 도구가 사진을 찌그러뜨리지 않고 비례적으로 배율 조정합니다.',
      },
      {
        question: '이미지를 1080x1080 정사각형으로 바꿀 수 있나요?',
        answer:
          '네, 정사각형 프리셋을 고르거나 너비와 높이에 1080을 입력하고 중앙 커버 크롭을 켜세요.',
      },
      {
        question: '이미지 크기를 바꾸면 파일 크기가 줄어드나요?',
        answer:
          '보통 그렇습니다. 픽셀이 적으면 데이터가 적어지며, WebP나 JPG로 내보내면 더욱 줄어듭니다.',
      },
      {
        question: '어떤 이미지 형식을 크기를 바꿀 수 있나요?',
        answer:
          'PNG, JPG, WebP, GIF 이미지의 크기를 바꾸고 PNG, JPG, WebP로 내보낼 수 있습니다.',
      },
      {
        question: '크기를 바꾸면 이미지가 흐릿해지나요?',
        answer:
          '축소는 고품질 캔버스 스무딩 덕분에 보통 선명하게 유지됩니다. 원본 크기보다 크게 확대하면 세밀한 디테일이 부드러워질 수 있습니다.',
      },
      {
        question: '프로필 사진용으로 이미지 크기를 바꿀 수 있나요?',
        answer:
          '네, 아바타 프리셋(512×512)과 중앙 커버 크롭을 사용하면 완벽한 정사각형 프로필 사진을 얻을 수 있습니다.',
      },
      {
        question: '이미지 크기 조절기의 중앙 커버 크롭이란 무엇인가요?',
        answer:
          '대상 프레임이 채워질 때까지 이미지를 확대한 뒤 넘치는 가장자리를 중앙에서 균등하게 잘라 늘어난 것처럼 보이지 않게 합니다.',
      },
      {
        question: '이미지 크기 조절기가 사진을 업로드하나요?',
        answer:
          '아니요, 모든 크기 변경은 브라우저 안에서 로컬로 이루어지며 이미지가 기기를 떠나지 않습니다.',
      },
      {
        question: '휴대폰에서도 이미지 크기를 바꿀 수 있나요?',
        answer:
          '네, 모바일 브라우저에서 동작합니다. 사진을 업로드하고 새 크기를 입력한 뒤 결과를 다운로드하세요.',
      },
      {
        question: 'PNG 크기를 바꿀 때 투명도는 어떻게 되나요?',
        answer:
          'PNG나 WebP로 내보내는 한 투명도가 유지됩니다. JPG로 내보내면 투명 영역이 흰색으로 채워집니다.',
      },
      {
        question: '여러 이미지를 같은 크기로 바꿀 수 있나요?',
        answer:
          '이 도구는 한 번에 하나의 이미지를 바꿉니다. 같은 프리셋이나 크기를 각 이미지에 반복 적용하면 일관되게 유지할 수 있습니다.',
      },
      {
        question: '이미지 크기 조절기가 처리할 수 있는 가장 큰 이미지는 어느 정도인가요?',
        answer:
          '브라우저 캔버스 메모리 제한 안에 머무르도록 한 변당 최대 8000픽셀까지 입력이 제한됩니다.',
      },
      {
        question: '유튜브 썸네일용으로 이미지 크기를 바꾸려면 어떻게 하나요?',
        answer:
          '유튜브 HD 프리셋(1280×720)을 선택하면 썸네일이 권장 16:9 크기에 맞습니다.',
      },
      {
        question: '크기를 바꾼 이미지 파일이 여전히 큰 이유는 무엇인가요?',
        answer:
          '픽셀 크기는 일부일 뿐입니다. PNG 대신 WebP나 JPG로 내보내거나, 이후에 이미지 압축기를 사용해 파일을 더 줄이세요.',
      },
    ],
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
    instructions: [
      {
        title: '대상 형식과 옵션 선택하기',
        description:
          'PNG, JPG, WebP 출력을 선택하고 적용 가능한 경우 손실 품질을 설정한 뒤 투명 이미지를 JPG로 변환할 때 배경 매트 색상을 고르세요.',
      },
      {
        title: '이미지 하나 또는 여러 개 선택하기',
        description:
          '단일 파일이나 다중 파일 일괄 작업을 로드해 모든 이미지를 전체 기본 해상도로 깔끔하게 렌더링하세요.',
      },
      {
        title: '각 파일 미리보기 확인하기',
        description:
          '다운로드하기 전에 변환된 모든 이미지의 크기와 예상 크기를 검토하세요.',
      },
      {
        title: '일괄 변환하기',
        description:
          '도구가 선택한 형식으로 각 이미지를 브라우저 안에서 전체 기본 해상도로 렌더링합니다.',
      },
      {
        title: '변환된 애셋 다운로드하기',
        description:
          '각 파일의 크기와 새 바이트 크기를 비교한 뒤 변환된 이미지를 개별적으로 다운로드하세요.',
      },
      {
        title: '팁: 투명 영역이 검게 되었나요?',
        description:
          'JPG로 변환한 PNG에서 투명했던 부분이 검게 보이면 흰색이나 브랜드 색상 같은 매트 채우기 색상을 지정해 다시 변환하세요.',
      },
    ],
    examples: [
      {
        title: '투명 SVG/PNG 로고를 JPG용 브랜드 네이비 위에 평탄화하기',
        input: '투명 logo.png · 대상: JPG(90%) · 채우기: #FFFFFF',
        output: '깨끗한 흰색 배경의 logo.jpg, 검은 투명도 아티팩트 없음',
        explanation: '그리기 전에 캔버스 매트를 명시적으로 채우면 알파 PNG를 JPEG로 변환할 때 검은 후광을 막을 수 있습니다.',
      },
      {
        title: '다운로드한 WebP 스크린샷을 PNG로 되돌리기',
        input: 'screenshot.webp 1.2MB · 대상: PNG',
        output: '동일한 해상도의 screenshot.png, 모든 픽셀 손실 없이 보존',
        explanation: 'WebP를 PNG로 변환하면 레거시 소프트웨어에서도 열리는 범용 형식을 얻을 수 있습니다.',
      },
    ],
    benefits: [
      '여러 이미지를 서버 대기 없이 전체 해상도로 일괄 처리합니다',
      '설정 가능한 JPEG 배경 채우기 색상으로 보기 흉한 검은 투명 채우기를 피합니다',
      'WebP 다운로드를 범용 PNG나 JPG 파일로 다시 변환합니다',
      '벡터 SVG 파일을 선명한 래스터 PNG나 WebP 이미지로 직접 렌더링합니다',
    ],
    useCases: [
      '다운로드한 .webp 파일을 레거시 소프트웨어용 .png나 .jpg로 변환하기',
      '정적 웹사이트와 CDN용 최신 .webp 애셋 일괄 만들기',
      'SVG 브랜드 아이콘에서 슬라이드나 소셜 게시물용 선명한 PNG 내보내기',
      'PNG, JPG, WebP의 형식별 크기 차이를 나란히 비교하기',
    ],
    faqs: [
      {
        question: '애플 HEIC 사진을 변환할 수 있나요?',
        answer:
          'HEIC 디코딩은 기본 브라우저 지원에 따라 다릅니다. Safari는 HEIC를 네이티브로 지원하는 반면 Chrome/Firefox는 보통 PNG, JPG, WebP, SVG, GIF 입력이 필요합니다.',
      },
      {
        question: 'JPG를 PNG로 변환하면 잃어버린 사진 디테일이 좋아지나요?',
        answer:
          '아니요. 이미 압축된 JPG를 PNG로 변환하면 앞으로 손실 없이 보존되지만, 이전 JPEG 압축 아티팩트를 복원할 수는 없습니다.',
      },
      {
        question: '파일 제한이 적용되나요?',
        answer:
          '기기 RAM만 적용됩니다. 모든 인코딩은 서버 파일 크기 상한 없이 로컬로 이루어집니다.',
      },
      {
        question: '이미지 형식 변환기는 무료인가요?',
        answer:
          '네, 계정 없이 무료로 사용할 수 있으며 워터마크가 없고 변환 횟수에 제한이 없습니다.',
      },
      {
        question: '어떤 형식에서 어떤 형식으로 변환할 수 있나요?',
        answer:
          'PNG, JPG, WebP, GIF, SVG 파일을 PNG, JPG, WebP 출력으로 변환할 수 있습니다.',
      },
      {
        question: 'PNG를 WebP로 변환해야 하는 이유는 무엇인가요?',
        answer:
          'WebP 파일은 비슷한 시각적 품질에서 보통 PNG보다 훨씬 작아 웹 페이지가 더 빠르게 로드됩니다.',
      },
      {
        question: 'WebP를 JPG나 PNG로 다시 변환해야 하는 이유는 무엇인가요?',
        answer:
          '일부 오래된 앱, 프린터, 업로드 양식은 WebP를 받지 않으므로 JPG나 PNG로 다시 변환하면 범용 호환성이 복원됩니다.',
      },
      {
        question: '여러 이미지를 한 번에 변환할 수 있나요?',
        answer:
          '네, 이미지 일괄 작업을 로드해 모두 같은 대상 형식으로 한 번에 변환할 수 있습니다.',
      },
      {
        question: 'JPG로 변환하면 투명도가 사라지나요?',
        answer:
          '네, JPG에는 알파 채널이 없어 투명 영역이 선택한 매트 색상(예: 흰색)으로 채워집니다.',
      },
      {
        question: '투명 PNG를 JPG로 변환할 때 어떤 매트 색상을 써야 하나요?',
        answer:
          '흰색이 가장 안전한 기본값입니다. 웹사이트나 슬라이드 배경색에 맞추면 매끄럽게 보입니다.',
      },
      {
        question: '사진을 WebP로 변환하고 품질을 유지할 수 있나요?',
        answer:
          '네, 85~90% 품질의 WebP는 보통 원본 JPG와 똑같이 보이면서 파일이 눈에 띄게 작아집니다.',
      },
      {
        question: 'SVG 로고를 PNG로 변환할 수 있나요?',
        answer:
          '네, 도구가 SVG 파일을 기본 크기 그대로 선명한 PNG나 WebP 이미지로 래스터화합니다.',
      },
      {
        question: '이미지 형식 변환기가 이미지를 업로드하나요?',
        answer:
          '아니요, 모든 변환은 브라우저 안에서 로컬로 실행되며 파일이 기기를 떠나지 않습니다.',
      },
      {
        question: 'JPG로 변환할 때 어떤 품질을 써야 하나요?',
        answer:
          '85~90% 품질은 사진을 PNG보다 훨씬 작게 유지하면서 깔끔하게 보이게 합니다. 파일을 더 작게 하려면 낮추세요.',
      },
      {
        question: '애니메이션 GIF를 이 도구로 변환할 수 있나요?',
        answer:
          'GIF 파일을 로드할 수 있지만 변환 시 애니메이션을 보존하지 않고 하나의 정지 프레임만 렌더링합니다.',
      },
      {
        question: '변환된 PNG가 원본 JPG보다 큰 이유는 무엇인가요?',
        answer:
          'PNG는 손실이 없으므로 압축된 JPG에서 변환한 사진은 모든 픽셀을 압축 없이 저장해 보통 크기가 커집니다.',
      },
      {
        question: '변환기가 원본 이미지 크기를 유지하나요?',
        answer:
          '네, 변환된 이미지는 이미지 크기 조절기로 따로 크기를 바꾸지 않는 한 전체 기본 해상도를 유지합니다.',
      },
      {
        question: '휴대폰에서도 이미지 형식 변환기를 쓸 수 있나요?',
        answer:
          '네, 모바일 브라우저에서 동작합니다. 기기에서 이미지를 선택하고 변환된 파일을 다운로드하세요.',
      },
      {
        question: '웹사이트 이미지에 가장 좋은 형식은 무엇인가요?',
        answer:
          '웹에서는 사진과 그래픽에 WebP가 보통 가장 좋고, 투명도나 손실 없는 품질이 필요할 때는 PNG가 더 좋습니다.',
      },
      {
        question: '변환된 이미지에 워터마크가 포함되나요?',
        answer:
          '아니요, 변환된 파일은 워터마크나 브랜딩이 추가되지 않은 깨끗한 복사본입니다.',
      },
    ],
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
    instructions: [
      {
        title: '이미지 업로드하기',
        description:
          'PNG, JPG, WebP, GIF 이미지를 선택해 대화형 캔버스 미리보기에 로드하세요.',
      },
      {
        title: '회전, 뒤집기, 필터 적용하기',
        description:
          '왼쪽/오른쪽 회전 버튼, 가로/세로 뒤집기 토글, 그레이스케일 스위치, 밝기/대비 슬라이더를 사용하세요.',
      },
      {
        title: '결과를 실시간으로 미리보기',
        description:
          '각 변경 뒤에 캔버스 미리보기를 확인해 방향과 필터 강도가 올바른지 확인하세요.',
      },
      {
        title: '필요하면 초기화하기',
        description:
          '초기화 버튼을 사용하면 모든 회전, 뒤집기, 필터 변경을 되돌리고 원본에서 다시 시작할 수 있습니다.',
      },
      {
        title: '출력 형식 선택하기',
        description:
          '투명도를 유지하려면 PNG, 사진에는 JPG, 작은 파일에는 WebP를 내보내기 전에 고르세요.',
      },
      {
        title: '편집된 이미지 내보내기',
        description:
          '다운로드를 클릭해 회전, 뒤집기, 필터가 적용된 이미지를 기기에 저장하세요.',
      },
    ],
    examples: [
      {
        title: '옆으로 누운 스마트폰 사진을 바로잡고 밝기 높이기',
        input: '3024×4032 사진 시계 방향 90° 회전 · 밝기: 110% · 대비: 105%',
        output: '4032×3024 똑바른 이미지, EXIF 방향이 픽셀에 반영되어 깔끔하게 내보내기',
        explanation: '캔버스는 90°와 270° 회전 시 너비와 높이를 자동으로 바꿉니다.',
      },
      {
        title: '미러링된 셀카 뒤집어 바로잡기',
        input: '전면 카메라 셀카 · 가로 뒤집기 켬',
        output: '텍스트가 올바르게 읽히는 똑바른 셀카',
        explanation: '가로 뒤집기는 이미지를 거울처럼 좌우로 미러링합니다.',
      },
    ],
    benefits: [
      '실시간 픽셀 미리보기가 업로드 지연 없이 즉시 업데이트됩니다',
      '방향을 깨지기 쉬운 EXIF 플래그가 아니라 실제 픽셀 좌표에 깔끔하게 반영합니다',
      '회전, 미러링, 색상·톤 조정을 하나의 깔끔한 작업 공간에 결합합니다',
      '파괴적이지 않은 초기화 버튼으로 언제든 기본값으로 복원합니다',
    ],
    useCases: [
      '옆으로 찍힌 스캔 문서나 영수증 바로잡기',
      '거꾸로 된 웹캠 캡처나 뒤집힌 스크린샷 되돌리기',
      '인쇄나 문서용 고대비 그레이스케일 그래픽 만들기',
      '목록에 올리기 전에 어둡게 찍힌 제품 사진을 빠르게 밝게 하기',
    ],
    faqs: [
      {
        question: '이미지를 회전하면 픽셀이 다시 인코딩되나요?',
        answer:
          '네, HTML5 캔버스에 그리면 새로운 방향과 필터 조정이 모든 픽셀에 영구히 반영되어 모든 앱에 똑바로 표시됩니다.',
      },
      {
        question: '회전하거나 뒤집을 때 투명 배경을 유지할 수 있나요?',
        answer:
          '네, 출력 형식을 PNG나 WebP로 유지하면 회전·뒤집힌 그래픽 주변의 전체 알파 투명도가 유지됩니다.',
      },
      {
        question: '편집 내용이 서버에 저장되나요?',
        answer:
          '아니요. 모든 작업은 브라우저 탭 안에서 이루어지며 페이지를 닫으면 사라집니다.',
      },
      {
        question: '이미지 회전 도구는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료이며 워터마크가 없고 제한이 없습니다.',
      },
      {
        question: '이미지를 90도 회전하려면 어떻게 하나요?',
        answer:
          '이미지를 업로드하고 오른쪽 회전이나 왼쪽 회전을 클릭하세요. 클릭할 때마다 사진이 90도씩 회전합니다.',
      },
      {
        question: '이미지를 180도 회전할 수 있나요?',
        answer:
          '네, 같은 방향으로 회전을 두 번 클릭하면 이미지가 거꾸로 뒤집힙니다.',
      },
      {
        question: '이미지를 가로로 뒤집으려면 어떻게 하나요?',
        answer:
          '가로 뒤집기 토글을 사용하면 이미지가 좌우로 미러링되며, 미러링된 셀카를 바로잡는 데 유용합니다.',
      },
      {
        question: '이미지 뒤집기와 회전의 차이는 무엇인가요?',
        answer:
          '회전은 이미지를 중심을 기준으로 돌리고, 뒤집기는 거울에 비친 것처럼 미러링합니다.',
      },
      {
        question: '사진을 품질 손실 없이 회전할 수 있나요?',
        answer:
          '도구는 캔버스를 통해 이미지를 다시 인코딩하므로 PNG로 내보내면 손실 없이 유지됩니다. JPG 내보내기는 가벼운 압축이 적용됩니다.',
      },
      {
        question: '이미지를 회전하면 크기가 바뀌나요?',
        answer:
          '90도나 270도 회전은 너비와 높이를 바꿉니다. 180도 회전은 같은 크기를 유지합니다.',
      },
      {
        question: '사진을 흑백으로 만들 수 있나요?',
        answer:
          '네, 그레이스케일 스위치를 켜면 사진이 즉시 흑백으로 변환됩니다.',
      },
      {
        question: '어두운 사진을 밝게 하려면 어떻게 하나요?',
        answer:
          '밝기 슬라이더를 100% 위로 올리고 대비를 약간 더하면 이미지가 뿌옇게 보이지 않게 유지할 수 있습니다.',
      },
      {
        question: 'PNG를 회전하고 투명도를 유지할 수 있나요?',
        answer:
          '네, 회전이나 뒤집기 뒤 투명 영역을 보존하려면 PNG나 WebP로 내보내세요.',
      },
      {
        question: '편집한 사진이 서버에 업로드되나요?',
        answer:
          '아니요, 모든 회전, 뒤집기, 필터링은 브라우저 안에서 로컬로 실행되며 아무것도 업로드되지 않습니다.',
      },
      {
        question: '휴대폰에서도 이미지를 회전할 수 있나요?',
        answer:
          '네, 모바일 브라우저에서 동작합니다. 옆으로 누운 사진을 업로드하고 똑바로 회전한 뒤 수정된 버전을 다운로드하세요.',
      },
      {
        question: '업로드한 뒤 사진이 옆으로 보이는 이유는 무엇인가요?',
        answer:
          '일부 휴대폰은 방향을 모든 앱이 읽지 못하는 EXIF 플래그로 저장합니다. 이 도구는 올바른 방향을 픽셀에 반영하므로 어디서든 똑바로 표시됩니다.',
      },
      {
        question: '회전이나 필터를 되돌릴 수 있나요?',
        answer:
          '네, 초기화 버튼을 누르면 언제든 원본 이미지와 기본 필터 설정으로 복원됩니다.',
      },
      {
        question: '이 도구가 기울어지거나 비뚤어진 사진을 고치나요?',
        answer:
          '90도 단위로 회전하므로 옆으로 눕거나 거꾸로 된 사진을 고칩니다. 작은 기울기 보정은 지원하지 않습니다.',
      },
      {
        question: '어떤 이미지 형식을 회전하고 뒤집을 수 있나요?',
        answer:
          'PNG, JPG, WebP, GIF 이미지를 편집하고 PNG, JPG, WebP로 내보낼 수 있습니다.',
      },
      {
        question: '이미지를 한 번에 회전하고 뒤집을 수 있나요?',
        answer:
          '네, 하나의 완성된 이미지를 내보내기 전에 회전, 가로·세로 뒤집기, 필터를 함께 적용할 수 있습니다.',
      },
    ],
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
    instructions: [
      {
        title: '인코딩 또는 디코딩 모드 선택하기',
        description:
          '파일을 인코딩하려면 이미지 → Base64 데이터 URI를, 붙여넣은 Base64 페이로드를 렌더링하려면 Base64 → 이미지 미리보기를 사용하세요.',
      },
      {
        title: '이미지 로드 또는 Base64 텍스트 붙여넣기',
        description:
          'PNG, JPG, WebP, SVG, GIF, ICO 애셋을 선택하거나 전체 data:image/... 문자열 또는 순수 Base64 텍스트를 붙여넣으세요.',
      },
      {
        title: '크기 비교 확인하기',
        description:
          '원본 파일 크기와 Base64 문자열 크기를 비교해 삽입 전에 약 33%의 오버헤드를 확인하세요.',
      },
      {
        title: '필요한 출력 형식 고르기',
        description:
          '전체 데이터 URI, 순수 Base64 문자열, HTML <img> 태그, CSS background-image 스니펫 중 하나를 선택하세요.',
      },
      {
        title: '스니펫 복사 또는 미리보기 다운로드하기',
        description:
          '데이터 URI, 순수 Base64, HTML <img> 태그, CSS 배경 스니펫을 복사하거나 디코딩된 미리보기 이미지를 다운로드하세요.',
      },
      {
        title: '팁: 붙여넣은 Base64가 동작하지 않나요?',
        description:
          '줄 바꿈 없이 전체 문자열을 붙여넣었는지 확인하고, 디코더가 형식에 맞는 올바른 data:image/... 접두사를 추가했는지 확인하세요.',
      },
    ],
    examples: [
      {
        title: '2KB SVG 체크 표시를 CSS 안에 인라인하기',
        input: 'check.svg (2,048바이트)',
        output: 'data:image/svg+xml;base64,... (약 2.7KB) + 바로 붙여넣을 수 있는 CSS background-image 규칙',
        explanation: '작은 UI 아이콘과 오프라인 단일 파일 HTML 이메일에서 추가 HTTP 왕복을 절약합니다.',
      },
      {
        title: 'API 응답의 Base64 이미지 디코딩하기',
        input: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA... (순수 Base64)',
        output: '렌더링된 이미지 미리보기와 다운로드 가능한 PNG 파일',
        explanation: '디코더는 접두사가 없어도 표준 PNG 데이터 URI 헤더를 자동으로 추가합니다.',
      },
    ],
    benefits: [
      '바이너리 파일 크기와 약 33%의 Base64 문자열 오버헤드를 즉시 비교합니다',
      '데이터 URI, 순수 Base64, HTML <img>, CSS 배경 스니펫을 동시에 생성합니다',
      '헤더 없이 순수 Base64를 붙여넣으면 PNG 데이터 URI 접두사를 자동으로 추가합니다',
      '독점 애셋과 API 응답 블롭을 브라우저 안에서 오프라인으로 유지합니다',
    ],
    useCases: [
      'CSS 번들이나 독립 HTML 보고서 안에 작은 아이콘 삽입하기',
      'JSON API나 웹훅이 반환한 이미지 데이터 URI 디버깅하기',
      '트랜잭션 HTML 이메일 템플릿에 작은 브랜드 배지 인라인하기',
      '브라우저 개발자 도구에서 복사한 인코딩된 이미지 페이로드 검사하기',
    ],
    faqs: [
      {
        question: '일반 이미지 URL 대신 Base64 이미지를 언제 사용해야 하나요?',
        answer:
          'Base64 데이터 URI는 아주 작은 아이콘(보통 5~10KB 이하)이나 단일 파일 HTML 내보내기에만 드물게 사용하세요. Base64는 데이터 크기를 약 33% 늘리고 일반 URL처럼 페이지 간에 따로 캐시할 수 없습니다.',
      },
      {
        question: '디코더가 "data:image/png;base64," 접두사 없이 순수 Base64 문자열을 미리 볼 수 있나요?',
        answer:
          '네! Base64 → 이미지 미리보기로 전환하면 공백을 자동으로 제거하고 헤더가 없으면 표준 PNG 데이터 URI 헤더를 앞에 추가합니다.',
      },
      {
        question: '벡터 SVG에서도 동작하나요?',
        answer:
          '네, .svg 파일을 업로드하면 HTML과 CSS 스니펫과 함께 유효한 data:image/svg+xml;base64,... URI가 만들어집니다.',
      },
      {
        question: '이미지 Base64 변환기는 무료인가요?',
        answer:
          '네, 가입 없이 무료이며 워터마크가 없고 인코딩·디코딩하는 이미지 수에 제한이 없습니다.',
      },
      {
        question: 'Base64 데이터 URI란 무엇인가요?',
        answer:
          '데이터 URI는 이미지를 data:image/...;base64, 로 시작하는 텍스트로 웹 페이지, 스타일시트, 이메일 안에 직접 삽입합니다. 그 뒤에 인코딩된 데이터가 이어집니다.',
      },
      {
        question: 'Base64 문자열이 이미지보다 큰 이유는 무엇인가요?',
        answer:
          'Base64 인코딩은 바이너리 데이터를 텍스트 문자로 표현하므로 원본 파일 크기보다 약 33%의 오버헤드가 추가됩니다.',
      },
      {
        question: 'Base64 인코딩에 가장 좋은 이미지 크기는 어느 정도인가요?',
        answer:
          '아이콘과 로고처럼 보통 5~10KB 이하로 작게 유지하세요. 큰 이미지는 HTML이나 CSS를 부풀리고 따로 캐시할 수 없습니다.',
      },
      {
        question: 'JPG를 Base64로 변환할 수 있나요?',
        answer:
          '네, JPG, PNG, WebP, SVG, GIF, ICO 파일을 모두 Base64 데이터 URI로 인코딩할 수 있습니다.',
      },
      {
        question: 'HTML에서 Base64 이미지를 어떻게 사용하나요?',
        answer:
          '생성된 HTML <img> 태그를 복사해 페이지에 붙여넣으세요. src 속성 안에 이미 전체 데이터 URI가 들어 있습니다.',
      },
      {
        question: 'CSS에서 Base64 이미지를 어떻게 사용하나요?',
        answer:
          'CSS background-image 스니펫을 복사해 스타일시트에 붙여넣으면 별도 파일 요청 없이 이미지가 표시됩니다.',
      },
      {
        question: 'Base64 문자열을 다시 이미지로 디코딩할 수 있나요?',
        answer:
          '네, Base64 → 이미지 미리보기로 전환해 문자열을 붙여넣으면 도구가 이미지를 렌더링해 미리 보거나 다운로드할 수 있게 합니다.',
      },
      {
        question: '디코딩할 때 data:image/png;base64, 접두사가 필요한가요?',
        answer:
          '아니요, 헤더 없이 순수 Base64를 붙여넣으면 도구가 표준 PNG 데이터 URI 접두사를 자동으로 추가합니다.',
      },
      {
        question: '이미지 Base64 도구가 파일을 업로드하나요?',
        answer:
          '아니요, 인코딩과 디코딩은 브라우저 안에서만 이루어지며 이미지가 기기를 떠나지 않습니다.',
      },
      {
        question: 'SVG를 Base64로 인코딩할 수 있나요?',
        answer:
          '네, SVG 파일은 일치하는 HTML과 CSS 스니펫과 함께 유효한 data:image/svg+xml;base64,... URI를 만듭니다.',
      },
      {
        question: '순수 Base64와 데이터 URI의 차이는 무엇인가요?',
        answer:
          '순수 Base64는 인코딩된 텍스트만 있고, 데이터 URI는 브라우저가 이미지 유형을 알 수 있도록 data:image/...;base64, 헤더를 앞에 추가합니다.',
      },
      {
        question: '이메일에서 Base64 이미지를 쓸 수 있나요?',
        answer:
          '네, 작은 Base64 이미지는 독립 HTML 이메일에서 잘 동작합니다. 다만 일부 이메일 클라이언트는 데이터 URI 지원을 제한하므로 보내기 전에 테스트하세요.',
      },
      {
        question: '인코딩에 파일 크기 제한이 있나요?',
        answer:
          '업로드가 없으므로 서버 제한이 없습니다. 아주 큰 이미지는 브라우저 메모리에만 제한되며, 거대한 Base64 문자열은 붙여넣기가 비실용적입니다.',
      },
      {
        question: 'Base64 이미지를 다운로드 가능한 파일로 변환할 수 있나요?',
        answer:
          '네, Base64 → 이미지 미리보기 모드에서 문자열을 디코딩하고 다운로드 옵션을 이용해 일반 이미지 파일로 저장하세요.',
      },
      {
        question: 'Base64 인코딩이 이미지 품질을 바꾸나요?',
        answer:
          '아니요, Base64는 정확히 같은 바이트를 손실 없이 텍스트로 표현하므로 디코딩된 이미지는 원본과 동일합니다.',
      },
      {
        question: '휴대폰에서도 이미지 Base64 변환기를 쓸 수 있나요?',
        answer:
          '네, 모바일 브라우저에서 동작합니다. 사진 보관함에서 이미지를 인코딩하거나 Base64 문자열을 붙여넣어 미리 보세요.',
      },
    ],
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
    instructions: [
      {
        title: '전경색과 배경색 고르기',
        description:
          '색상 선택기, HEX 입력, 개별 R/G/B 입력을 사용하거나 접근 가능한 프리셋에서 시작해 한 번의 클릭으로 색상을 바꾸세요.',
      },
      {
        title: '비율이 통과할 때까지 색조 조정하기',
        description:
          '명도나 개별 RGB 채널을 조금씩 바꾸며 필요한 AA나 AAA 기준에 도달할 때까지 비율이 실시간으로 업데이트되는 것을 보세요.',
      },
      {
        title: 'WCAG 2.1 점수표 검토하기',
        description:
          '정확한 대비 비율(예: 12.63 : 1)과 AA 일반, AA 큰 텍스트/UI, AAA 일반, AAA 큰 텍스트 기준의 즉시 통과/실패 상태를 확인하세요.',
      },
      {
        title: '실제 UI 텍스트로 조합 미리보기',
        description:
          '실시간 타이포그래피와 테두리가 있는 UI 컨트롤 카드 미리보기를 읽어 색상이 본문, 제목, 버튼으로 실제로 어떻게 보이는지 확인하세요.',
      },
      {
        title: '이미지에서 스와치 추출하기(선택)',
        description:
          '하단에 스크린샷이나 브랜드 로고를 업로드해 최대 8개의 서로 다른 주요 색상을 추출하고 전경이나 배경에 바로 적용하세요.',
      },
      {
        title: '색상 복사하고 실패한 조합 고치기',
        description:
          '동기화된 HEX, RGB, HSL 값을 CSS에 복사하세요. 조합이 실패하면 텍스트를 어둡게 하거나 배경을 밝게 해 점수표가 녹색이 될 때까지 조정하세요.',
      },
    ],
    examples: [
      {
        title: '기본 CTA 버튼 가독성 감사하기',
        input: '전경: #FFFFFF · 배경: #4F46E5',
        output: '대비 비율 6.29 : 1 — WCAG AA 일반, AA 큰 텍스트, AAA 큰 텍스트 통과',
        explanation: '공식 sRGB 감마 선형화 상대 휘도(0.2126R + 0.7152G + 0.0722B)를 사용합니다.',
      },
      {
        title: '본문 텍스트용 회색이 AA를 통과하지 못하는 경우',
        input: '전경: #9CA3AF · 배경: #FFFFFF',
        output: '대비 비율 2.54 : 1 — AA 일반 실패, AA 큰 텍스트 실패',
        explanation: '연한 회색 본문은 보기에는 괜찮아 보여도 휘도 차이가 작아 실패합니다. #6B7280처럼 더 어두운 회색으로 바꾸면 4.82 : 1로 AA를 통과합니다.',
      },
    ],
    benefits: [
      '정확한 WCAG 2.1 sRGB 상대 휘도 공식 사용 — 근사 없음',
      '실시간 타이포그래피와 테두리가 있는 UI 컨트롤 카드가 활성 조합을 미리 보여줍니다',
      '내장 캔버스 이미지 색상 양자화기가 추가 도구 없이 브랜드 스와치를 가져옵니다',
      'CSS에 바로 붙여넣을 수 있는 동기화된 HEX, RGB, HSL 문자열을 표시합니다',
    ],
    useCases: [
      '디자인 시스템, SaaS 대시보드, 다크 모드 테마의 WCAG AA/AAA 준수 감사하기',
      '고객 로고에서 주요 브랜드 색상을 가져와 접근 가능한 UI 팔레트에 바로 넣기',
      '출시 전에 대비가 낮은 배지, 플레이스홀더, 버튼 라벨 조합 고치기',
      '실시간 큰 텍스트 대 일반 텍스트 미리보기로 접근 가능한 시각적 계층 가르치기',
    ],
    faqs: [
      {
        question: 'WCAG 레벨 AA와 레벨 AAA에 필요한 대비 비율은 어느 정도인가요?',
        answer:
          'WCAG 2.1 레벨 AA는 일반 본문 텍스트에 최소 4.5:1, 큰 텍스트(18pt 이상 또는 굵은 14pt 이상)와 UI 컴포넌트에 3.0:1을 요구합니다. 레벨 AAA는 일반 텍스트 7.0:1, 큰 텍스트 4.5:1로 기준이 높아집니다.',
      },
      {
        question: '이미지 팔레트 추출기는 어떻게 동작하나요?',
        answer:
          '업로드한 이미지를 화면 밖 HTML5 캔버스에 그리고 투명 픽셀을 무시한 뒤 가까운 RGB 버킷을 묶어 면적 기준으로 최대 8개의 시각적으로 서로 다른 주요 스와치를 보여줍니다.',
      },
      {
        question: '색상 대비 검사기가 HEX, RGB, HSL 사이 변환도 하나요?',
        answer:
          '네, 색상 선택기, HEX 입력, R/G/B 필드 중 어느 것을 업데이트해도 HEX, rgb(), hsl() 표현이 자동으로 다시 계산됩니다.',
      },
      {
        question: 'WCAG 대비 규칙에서 큰 텍스트란 무엇인가요?',
        answer:
          '큰 텍스트는 18pt(24픽셀) 이상, 또는 굵은 14pt(18.66픽셀) 이상입니다. 큰 텍스트는 AA 3.0:1, AAA 4.5:1만 필요하고 일반 텍스트는 AA 4.5:1, AAA 7.0:1이 필요합니다.',
      },
      {
        question: '색상 대비 검사기는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료입니다. 모든 검사가 브라우저 안에서 로컬로 실행되므로 원하는 만큼 색상 쌍을 테스트할 수 있습니다.',
      },
      {
        question: '업로드한 이미지가 기기를 떠나나요?',
        answer:
          '아니요. 팔레트 추출은 화면 밖 캔버스를 이용해 브라우저 안에서만 이루어지며 이미지가 어떤 서버에도 업로드되지 않습니다.',
      },
      {
        question: '대비 비율은 어떻게 계산되나요?',
        answer:
          '공식 WCAG 2.1 공식을 사용합니다. 각 색상의 상대 휘도를 감마 선형화된 sRGB 값에서 계산하고 비율은 (L1 + 0.05) / (L2 + 0.05)이며, L1은 더 밝은 색상입니다.',
      },
      {
        question: '다크 모드 디자인의 대비를 확인할 수 있나요?',
        answer:
          '네, 어두운 배경과 밝은 텍스트 색상을 같은 방식으로 입력하면 점수표에 일반 텍스트와 큰 텍스트 모두 AA와 AAA 통과 여부가 표시됩니다.',
      },
      {
        question: '제 색상 쌍이 보기에는 읽기 쉬운데 AA에서 실패하는 이유는 무엇인가요?',
        answer:
          '느껴지는 가독성과 측정된 휘도 대비는 다릅니다. 눈에 구분되어 보이는 색상도 휘도가 가까울 수 있으며, 특히 중간 톤 색상에서 그렇기 때문에 비율을 믿고 명도를 조정해 통과할 때까지 바꾸세요.',
      },
      {
        question: '브랜드 색상이 대비 테스트에서 실패하면 어떻게 해야 하나요?',
        answer:
          '브랜드 색상은 큰 제목이나 장식 요소에 유지하고 본문 텍스트에는 그 색상의 더 어두운 색조를 사용하세요. 배경을 밝게 하거나 텍스트 뒤에 반투명 오버레이를 추가할 수도 있습니다.',
      },
      {
        question: '검사기가 버튼과 아이콘 같은 UI 컴포넌트에도 동작하나요?',
        answer:
          '네, WCAG 2.1은 버튼 테두리, 입력 윤곽선, 의미 있는 아이콘 같은 텍스트가 아닌 UI 컴포넌트에 3.0:1 비율을 요구하며 점수표의 AA 큰 텍스트/UI 열이 정확히 이를 다룹니다.',
      },
      {
        question: '이 도구로 플레이스홀더 텍스트와 비활성 상태를 테스트할 수 있나요?',
        answer:
          '네, 플레이스홀더나 비활성 상태 색상을 전경으로 입력하세요. 비활성 컨트롤은 WCAG 대비 요구사항에서 제외되지만, 정보를 전달하는 플레이스홀더 텍스트는 제외되지 않습니다.',
      },
      {
        question: '팔레트 추출기가 이미지에서 색상을 몇 개까지 가져오나요?',
        answer:
          '최대 8개의 서로 다른 주요 색상입니다. 비슷한 색조는 함께 묶이므로 스와치는 이미지에 있는 모든 색조가 아니라 시각적으로 가장 두드러지는 색상을 나타냅니다.',
      },
      {
        question: '추출한 스와치를 전경이나 배경으로 바로 적용할 수 있나요?',
        answer:
          '네, 추출된 각 스와치에는 전경이나 배경 슬롯으로 바로 보내는 버튼이 있어 다른 색상과 즉시 테스트할 수 있습니다.',
      },
      {
        question: '팔레트 추출기에 어떤 이미지 형식이 동작하나요?',
        answer:
          'PNG, JPG, WebP, SVG 스크린샷이나 로고 등 브라우저가 표시할 수 있는 모든 이미지입니다. 색상을 묶을 때 투명 픽셀은 무시됩니다.',
      },
      {
        question: '색상 대비 검사기가 색맹을 테스트하나요?',
        answer:
          '아니요, 휘도 대비만 측정합니다. 대비는 접근성의 일부일 뿐입니다. 색맹 안전성을 위해서는 색상만으로 의미를 전달하지 말고 색맹 시뮬레이터로 팔레트를 확인하세요.',
      },
      {
        question: 'HEX, RGB, HSL 값을 CSS에서 쓸 수 있나요?',
        answer:
          '네, 세 가지 형식은 편집하면서 동기화 상태를 유지하며 어느 것이든 스타일시트, 디자인 토큰, Tailwind 설정에 바로 복사할 수 있습니다.',
      },
      {
        question: '실제로 AA와 AAA의 차이는 무엇인가요?',
        answer:
          'AA는 대부분의 사이트가 목표로 하는 법적·실용적 표준이고, AAA는 더 엄격해 브랜드 색상의 본문 텍스트에서는 맞추기 어려운 경우가 많습니다. 가능한 곳에서는 AAA를 목표로 하되 텍스트에서 AA 아래로는 절대 배포하지 마세요.',
      },
      {
        question: '도구가 색상 선택이나 이미지를 저장하나요?',
        answer:
          '아니요. 모든 작업은 브라우저 탭 안에서 로컬로 실행되고 아무것도 업로드되지 않으며, 색상과 이미지는 페이지를 닫거나 새로고침하면 사라집니다.',
      },
      {
        question: '한 번에 두 개 이상의 색상 쌍을 확인할 수 있나요?',
        answer:
          '검사기는 한 번에 하나의 전경/배경 쌍을 테스트하지만, 한 번의 클릭으로 색상을 바꾸고 몇 초 안에 원하는 만큼 쌍을 다시 테스트할 수 있습니다.',
      },
    ],
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
    instructions: [
      {
        title: 'QR 이미지 업로드 또는 카메라 스캔 활성화하기',
        description:
          'PNG, JPG, WebP, SVG QR 스크린샷을 드롭하거나 선택하세요. 인쇄된 QR 코드를 실시간으로 읽으려면 카메라 스캐너 시작을 클릭하세요.',
      },
      {
        title: '스캐너가 코드를 디코딩하게 두기',
        description:
          '도구가 브라우저 안에서 로컬로 다중 스케일, 반전 인식 디코딩을 실행하므로 다크 모드나 반전된 QR 코드도 업로드 없이 읽힙니다.',
      },
      {
        title: '디코딩된 텍스트 검사하고 복사하기',
        description:
          '디코딩된 페이로드, 감지된 페이로드 범주, 안전한 링크 미리보기(http/https URL만 클릭 가능한 링크가 됨)를 검토한 뒤 한 번의 클릭으로 복사하세요.',
      },
      {
        title: '행동하기 전에 페이로드 유형 확인하기',
        description:
          'QR에 URL, 와이파이 자격 증명, vCard 연락처, 일반 텍스트 중 무엇이 들어 있는지 보고 방문하거나 연결하기 전에 목적지가 올바른지 확인하세요.',
      },
      {
        title: 'vCard 연락처 QR 빌더로 전환하기(선택)',
        description:
          '이름, 조직, 전화번호, 이메일, 웹사이트가 포함된 스캔 가능한 VCF 3.0 명함 QR 코드를 만들고 PNG나 SVG로 다운로드하세요.',
      },
      {
        title: '다운로드, 인쇄, 스캔 실패 문제 해결하기',
        description:
          'vCard QR을 다운로드하거나 디코딩이 실패하면 더 선명하고 밝은 스크린샷을 다시 업로드하세요. 잘리거나 흐릿하거나 너무 작은 QR 코드가 가장 흔한 원인입니다.',
      },
    ],
    examples: [
      {
        title: '인쇄 주문 전에 마케팅 전단지 스크린샷 검증하기',
        input: '전단지 QR 이미지 업로드(flyer-qr.png, 600×600 PNG)',
        output: '디코딩된 페이로드 · 웹사이트 URL: https://example.com/?utm_source=print',
        explanation: '다중 스케일 반전 인식 디코딩을 로컬에서 실행하므로 반전된 다크 모드 QR 코드도 안정적으로 디코딩됩니다.',
      },
      {
        title: 'vCard QR 코드로 연락처 공유하기',
        input: '이름: 김민준 · 조직: UtilityFlow · 전화: 010-1234-5678 · 이메일: minjun@example.com',
        output: '스캔하면 연락처 저장을 제안하는 VCF 3.0 vCard QR 코드(PNG 및 SVG)',
        explanation: '표준 VCF 3.0 형식은 아이폰과 안드로이드 모두에서 인식됩니다.',
      },
    ],
    benefits: [
      '모바일 앱 없이 일반 QR 스크린샷과 색상 반전 QR 스크린샷을 깔끔하게 디코딩합니다',
      '선택적인 카메라 스트림은 디코딩되거나 탭을 나가면 즉시 중단됩니다',
      '디코딩된 페이로드를 깔끔하게 분류하고 자동으로 다른 곳으로 이동하지 않습니다',
      '디지털 명함용 전체 vCard 3.0 PNG·SVG QR 생성을 포함합니다',
    ],
    useCases: [
      '포스터를 인쇄하기 전에 QR 애셋 안의 UTM 목적지 URL 다시 확인하기',
      '데스크톱 스크린샷에서 와이파이 문자열이나 텍스트 토큰 추출하기',
      '노트북 내장 웹캠으로 실제 QR 코드 스캔하기',
      '이력서, 배지, 프레젠테이션용 스캔 가능한 vCard 연락처 QR 코드 만들기',
    ],
    faqs: [
      {
        question: '기기에 카메라가 없거나 카메라 권한을 거부하면 어떻게 되나요?',
        answer:
          '이 도구를 쓰려면 카메라가 전혀 필요 없습니다. 스크린샷이나 사진을 찍어 QR 코드 이미지 업로드로 올리면 카메라 권한 없이 동일하게 동작합니다.',
      },
      {
        question: 'QR 코드를 스캔하면 악성 웹사이트가 자동으로 열리나요?',
        answer:
          '아니요. 디코딩된 텍스트는 먼저 읽기 전용 텍스트 영역 안에 안전하게 표시되므로 방문 여부를 선택하기 전에 URL을 검사할 수 있습니다.',
      },
      {
        question: 'vCard 대신 URL, 와이파이, 사용자 지정 색상 QR 생성기가 필요한가요?',
        answer:
          '소셜 미디어 도구 카테고리의 전용 QR 코드 생성기 도구를 사용해 보세요. 사용자 지정 전경/배경 색상, 오류 수정 수준, URL/텍스트 QR 코드를 제공합니다.',
      },
      {
        question: 'QR 코드 스캐너는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료이며 스캔과 vCard QR 생성 모두 브라우저 안에서 로컬로 실행됩니다.',
      },
      {
        question: '업로드한 QR 이미지가 서버로 전송되나요?',
        answer:
          '아니요. 디코딩은 jsQR을 이용해 브라우저 안에서만 이루어지므로 스크린샷과 사진이 기기를 떠나지 않습니다.',
      },
      {
        question: 'QR 코드 스캐너가 읽을 수 있는 이미지 형식은 무엇인가요?',
        answer:
          'PNG, JPG, WebP, SVG 이미지가 모두 동작합니다. 휴대폰이나 컴퓨터로 찍은 스크린샷이 QR 코드를 제공하는 가장 흔한 방법입니다.',
      },
      {
        question: 'QR 코드 스캔이 실패한 이유는 무엇인가요?',
        answer:
          '흔한 원인은 흐릿하거나 해상도가 낮은 이미지, 너무 빡빡하게 잘린 QR 코드, 인쇄된 코드의 눈부심, 프레임 안에서 코드가 너무 작은 경우입니다. 더 선명하고 크고 밝은 캡처를 다시 업로드하세요.',
      },
      {
        question: '스캐너가 반전되거나 다크 모드 QR 코드를 읽을 수 있나요?',
        answer:
          '네, 디코더는 반전을 인식하므로 어두운 배경에 밝은 모듈이 있는 QR 코드도 표준 검은색 바탕 흰색 코드만큼 안정적으로 디코딩됩니다.',
      },
      {
        question: '어떤 종류의 QR 페이로드를 감지할 수 있나요?',
        answer:
          '디코딩된 콘텐츠를 웹사이트 URL, 와이파이 네트워크 자격 증명, vCard 연락처, 일반 텍스트로 자동 분류하므로 코드에 대해 행동하기 전에 그 기능을 알 수 있습니다.',
      },
      {
        question: '공공장소에서 찾은 QR 코드를 스캔해도 안전한가요?',
        answer:
          '여기서는 스캔이 안전합니다. 아무것도 자동으로 열리지 않고 디코딩된 텍스트를 먼저 보기 때문입니다. URL을 주의 깊게 읽고 무작위 QR 코드가 안내하는 페이지에 비밀번호나 결제 정보를 입력하지 마세요.',
      },
      {
        question: '노트북 웹캠으로 QR 코드를 스캔할 수 있나요?',
        answer:
          '네, 카메라 스캐너 시작을 클릭하고 브라우저가 요청할 때 카메라 접근을 허용한 뒤 인쇄된 코드를 카메라 앞에 드세요. 코드가 디코딩되거나 탭을 나가면 스트림이 자동으로 중단됩니다.',
      },
      {
        question: '스캔한 뒤에도 카메라가 계속 녹화되나요?',
        answer:
          '아니요. 카메라 스트림은 디코딩에 성공하면 즉시 중단되며, 탭을 전환하거나 스캐너를 닫아도 중단됩니다.',
      },
      {
        question: 'vCard QR 코드란 무엇인가요?',
        answer:
          'vCard QR 코드는 이름, 조직, 전화번호, 이메일, 웹사이트 같은 연락처 정보를 표준 VCF 3.0 형식으로 저장하므로 휴대폰으로 스캔하면 연락처 저장을 제안합니다.',
      },
      {
        question: 'vCard QR 코드를 PNG와 SVG로 다운로드할 수 있나요?',
        answer:
          '네, vCard 빌더는 두 형식을 모두 내보냅니다. 문서와 프레젠테이션용 PNG, 어떤 크기로 인쇄해도 선명한 SVG입니다.',
      },
      {
        question: 'vCard QR 코드가 아이폰과 안드로이드 모두에서 동작하나요?',
        answer:
          '네, 두 플랫폼 모두 표준 VCF 3.0 vCard QR 코드를 인식하고 내장 카메라로 스캔하면 연락처 추가를 제안합니다.',
      },
      {
        question: '동영상이나 화면 녹화에서 QR 코드를 스캔할 수 있나요?',
        answer:
          '직접은 안 되지만 동영상을 일시 정지하고 QR 코드가 보이는 프레임의 스크린샷을 찍어 스캐너에 업로드하면 됩니다.',
      },
      {
        question: 'QR 코드 스캐너가 오프라인에서도 동작하나요?',
        answer:
          '페이지가 로드된 뒤에는 디코딩이 브라우저 안에서 완전히 이루어지며 네트워크 요청이 없으므로 인터넷 연결 없이도 업로드한 이미지를 스캔할 수 있습니다.',
      },
      {
        question: '하나의 이미지에서 여러 QR 코드를 스캔할 수 있나요?',
        answer:
          '스캐너는 한 번에 하나의 QR 코드만 디코딩합니다. 이미지에 코드가 여러 개 있으면 이미지를 잘라 각 코드를 따로 업로드하세요.',
      },
      {
        question: '전단지에 QR 코드를 인쇄하기 전에 무엇을 확인해야 하나요?',
        answer:
          '완성된 디자인의 스크린샷을 업로드해 여기서 스캔하고 인쇄를 주문하기 전에 목적지 URL, UTM 파라미터, 페이로드가 정확히 맞는지 확인하세요.',
      },
      {
        question: '도구가 스캔한 QR 코드나 카메라 이미지를 저장하나요?',
        answer:
          '아니요. 아무것도 업로드, 기록, 저장되지 않습니다. 디코딩된 결과는 현재 브라우저 탭에만 존재하며 탭을 닫으면 사라집니다.',
      },
    ],
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
    instructions: [
      {
        title: '무작위 비밀번호 또는 Diceware 패스프레이즈 선택하기',
        description:
          '최대 문자 집합 밀도를 원하면 무작위 비밀번호를, 사람이 입력하기 쉬우면서도 강력한 다단어 엔트로피를 원하면 Diceware 패스프레이즈를 사용하세요.',
      },
      {
        title: '길이, 문자 집합, 일괄 개수 사용자 지정하기',
        description:
          '길이(8~64자)를 조정하고 대문자/소문자/숫자/기호를 켜거나 끄며, 선택적으로 혼동하기 쉬운 문자(0/O/1/l/I)를 제외하거나 3~8개의 Diceware 단어를 선택하세요.',
      },
      {
        title: '비밀번호 또는 패스프레이즈 생성하기',
        description:
          '생성을 클릭하면 브라우저의 하드웨어 기반 CSPRNG가 거부 샘플링과 함께 새로운 출력을 만들어 모든 문자에 정확히 동일한 확률을 부여합니다.',
      },
      {
        title: '엔트로피 점수 확인하기',
        description:
          '정확한 Shannon 엔트로피 비트(약 72~118비트 이상 권장)를 살펴보며 사용하기 전에 결과가 어느 정도의 추측 작업을 나타내는지 확인하세요.',
      },
      {
        title: '다시 생성하고 안전하게 복사하기',
        description:
          '결과가 마음에 들지 않으면 다시 생성해 새로운 결과를 얻은 뒤 단일 비밀번호나 전체 일괄 작업을 한 번의 클릭으로 복사하세요.',
      },
      {
        title: '비밀번호 관리자에 저장하고 새로고침해 지우기',
        description:
          '결과를 즉시 비밀번호 관리자에 붙여넣으세요. 페이지를 새로고침하면 생성된 비밀번호가 메모리에서 지워지므로 탭에 기억을 의존하지 마세요.',
      },
    ],
    examples: [
      {
        title: '전체 문자 풀을 사용한 18자 혼합 비밀번호',
        input: '길이: 18 · 대문자 + 소문자 + 숫자 + 기호(풀: 88자)',
        output: '약 116.3비트의 암호학적 엔트로피 · 활성화된 각 문자 클래스에서 최소 1자 보장',
        explanation: '거부 샘플링(uint32 샘플 중 floor(2^32 / 풀) * 풀 이상은 버림)으로 엄격한 균일성을 유지합니다.',
      },
      {
        title: '기억하기 쉬운 5단어 Diceware 패스프레이즈',
        input: '단어 5개 · 단어 목록: 7,776개 · 구분자: 하이픈',
        output: '약 64.6비트의 엔트로피(단어당 약 12.9비트 × 5단어)',
        explanation: '5단어 패스프레이즈는 7,776^5가지 조합을 제공해 입력하기 쉬우면서도 강력합니다.',
      },
    ],
    benefits: [
      '안전하지 않은 Math.random()을 엄격히 피하고 하드웨어 시드 기반 window.crypto.getRandomValues를 사용합니다',
      '진정한 거부 샘플링과 편향 없는 Fisher-Yates 셔플로 모듈로 편향을 제거합니다',
      '고정된 슬롯 없이 선택한 모든 문자 클래스에서 최소 한 문자씩 포함하도록 보장합니다',
      '아무것도 기록, 저장, 네트워크 전송되지 않습니다',
    ],
    useCases: [
      '클라우드 계정, SSH 키, 데이터베이스 자격 증명, 비밀번호 관리자 마스터 볼트 보호하기',
      '디스크 암호화나 와이파이 게스트 키용으로 사람이 입력하기 쉬운 Diceware 패스프레이즈 만들기',
      '임시 온보딩 자격 증명을 대량으로(한 번의 클릭으로 최대 10개) 프로비저닝하기',
      '12자 대 18자 대 24자의 비트 엔트로피 영향 비교하기',
    ],
    faqs: [
      {
        question: 'crypto.getRandomValues와 함께 거부 샘플링을 쓰는 것이 왜 중요한가요?',
        answer:
          'randomUint32 % 풀 크기처럼 계산하면 2^32가 풀 크기로 나누어떨어지지 않을 때 낮은 인덱스 문자가 약간 유리해집니다(모듈로 편향). 거부 샘플링은 범위를 벗어난 추출을 버리므로 풀의 모든 문자에 정확히 수학적으로 동일한 확률을 부여합니다.',
      },
      {
        question: '무작위 비밀번호와 패스프레이즈 중 무엇을 써야 하나요?',
        answer:
          '둘 다 충분히 길면 훌륭합니다. 16자 이상의 혼합 문자는 비밀번호 관리자에서 어디서든 잘 동작하고, 5~6단어 패스프레이즈는 TV, 휴대폰, 디스크 복호화 프롬프트에서 직접 입력하기 훨씬 쉽습니다.',
      },
      {
        question: '생성된 비밀번호가 어딘가에 저장되나요?',
        answer:
          '절대 저장되지 않습니다. 비밀번호는 탭의 임시 React 메모리에만 존재하며 새로고침하면 사라집니다.',
      },
      {
        question: '비밀번호 생성기는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료입니다. 브라우저 안에서 원하는 만큼 비밀번호와 패스프레이즈를 만들 수 있습니다.',
      },
      {
        question: '비밀번호는 어떻게 생성되나요?',
        answer:
          '브라우저의 하드웨어 기반 암호학적으로 안전한 난수 생성기인 window.crypto.getRandomValues를 이용해 로컬로 만들어지며, 거부 샘플링으로 모듈로 편향을 제거합니다.',
      },
      {
        question: '생성된 비밀번호가 서버로 전송되나요?',
        answer:
          '아니요. 생성은 기기 안에서만 이루어지며 아무것도 저장, 기록, 네트워크 전송되지 않습니다.',
      },
      {
        question: '비밀번호는 얼마나 길어야 하나요?',
        answer:
          '중요한 계정은 혼합 문자 클래스를 사용해 최소 16자로 만드세요. 대략 100비트 이상의 엔트로피가 됩니다. 짧은 비밀번호는 가치가 낮은 계정에만 괜찮으며, 복잡성보다 길이가 더 중요합니다.',
      },
      {
        question: '비밀번호 엔트로피란 무엇이고 몇 비트가 필요한가요?',
        answer:
          '엔트로피는 비밀번호가 나타내는 추측 작업량을 측정합니다. 대부분의 계정에는 약 70~80비트가 강력하고, 마스터 비밀번호, 암호화 키, 고가치 계정에는 100비트 이상이 권장됩니다.',
      },
      {
        question: 'Diceware 패스프레이즈란 무엇인가요?',
        answer:
          'Diceware 패스프레이즈는 고정된 단어 목록에서 고른 여러 무작위 단어로, "correct horse battery staple" 같은 형태입니다. 5~6개의 무작위 단어는 무작위 문자보다 입력하고 기억하기 훨씬 쉬우면서도 강력한 엔트로피를 제공합니다.',
      },
      {
        question: '0, O, 1, l, I 같은 모호한 문자를 제외해야 하나요?',
        answer:
          '네, 비밀번호를 직접 입력하거나 소리 내어 읽을 때 제외하세요. 혼동되는 문자를 제외하면 로그인 오타를 막을 수 있고, 비밀번호가 충분히 길면 작은 엔트로피 손실은 무시할 만합니다.',
      },
      {
        question: '여러 비밀번호를 한 번에 만들 수 있나요?',
        answer:
          '네, 한 번의 클릭으로 최대 10개의 비밀번호를 일괄 생성할 수 있어 계정을 프로비저닝하거나 새 팀원을 온보딩할 때 편리합니다.',
      },
      {
        question: '생성기가 선택한 각 문자 클래스에서 최소 한 문자를 보장하나요?',
        answer:
          '네, 생성된 모든 비밀번호는 활성화한 각 문자 클래스에서 최소 한 문자씩 포함하며, 그 문자들을 고정되고 예측 가능한 위치에 두지 않습니다.',
      },
      {
        question: '비밀번호 관리자 마스터 비밀번호로 이 비밀번호를 쓸 수 있나요?',
        answer:
          '긴 패스프레이즈는 기억에서 입력해야 하므로 마스터 비밀번호로 잘 동작합니다. 6단어 Diceware 패스프레이즈를 만들고 외운 뒤 다른 비밀번호는 관리자에 저장하세요.',
      },
      {
        question: '비밀번호에 Math.random()을 쓰면 안 되는 이유는 무엇인가요?',
        answer:
          'Math.random()은 암호학적으로 안전하지 않습니다. 공격자가 내부 상태를 알면 출력을 예측할 수 있습니다. 이 도구는 보안 민감 난수용으로 설계된 window.crypto.getRandomValues만 사용합니다.',
      },
      {
        question: '생성된 비밀번호가 모든 웹사이트에서 동작하나요?',
        answer:
          '거의 항상 그렇습니다. 사이트가 기호를 거부하거나 길이를 제한하면 길이를 줄이거나 기호 클래스를 끄고 사이트가 허용할 때까지 다시 생성하세요.',
      },
      {
        question: '생성된 비밀번호를 여러 사이트에서 재사용할 수 있나요?',
        answer:
          '재사용해서는 안 됩니다. 비밀번호를 재사용하면 한 번의 유출로 그 비밀번호를 공유하는 모든 계정이 노출되므로, 각 사이트마다 고유한 비밀번호를 만들고 비밀번호 관리자에 저장하세요.',
      },
      {
        question: '페이지를 새로고침하면 비밀번호가 어떻게 되나요?',
        answer:
          '사라집니다. 생성된 비밀번호는 탭의 임시 메모리에만 존재하므로 새로고침하거나 페이지를 닫기 전에 비밀번호 관리자에 복사하거나 저장하세요.',
      },
      {
        question: '비밀번호 생성기가 오프라인에서도 동작하나요?',
        answer:
          '네, 페이지가 로드된 뒤에는 생성이 브라우저 안에서 완전히 이루어지며 네트워크 요청이 없으므로 오프라인에서도 동작합니다.',
      },
      {
        question: '와이파이에는 비밀번호와 패스프레이즈 중 무엇을 골라야 하나요?',
        answer:
          '여러 기기에 입력하는 와이파이 키에는 단어가 입력하기 쉬우므로 패스프레이즈를, 비밀번호 관리자가 대신 입력해 주는 경우에는 무작위 문자 비밀번호를 사용하세요.',
      },
      {
        question: '생성된 비밀번호가 해킹이 불가능하다고 보장되나요?',
        answer:
          '어떤 비밀번호도 해킹이 불가능하다고 보장할 수는 없습니다. 사이트가 유출되거나 피싱에 속을 수 있습니다. 다만 비밀번호 관리자에 저장된 길고 고유하며 무작위로 생성된 비밀번호는 사용할 수 있는 가장 강력한 실질적 방어 중 하나입니다.',
      },
    ],
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
    instructions: [
      {
        title: '기기에서 파일 선택하기',
        description:
          '아카이브, 설치 프로그램, PDF, 바이너리 애셋을 선택하세요. 파일은 로컬 브라우저 메모리로만 읽히며(500MB 이하 권장) 절대 업로드되지 않습니다.',
      },
      {
        title: '다이제스트가 계산될 때까지 기다리기',
        description:
          '브라우저가 하드웨어 가속 Web Crypto를 이용해 SHA-256, SHA-512, SHA-384, SHA-1을 병렬로 계산합니다. 큰 파일은 몇 초가 걸립니다.',
      },
      {
        title: '계산된 암호학적 다이제스트 검사하기',
        description:
          'SHA-256, SHA-512, SHA-384, 레거시 SHA-1 16진수 해시를 파일 메타데이터와 함께 검토하고 필요하면 표준 .sha256 텍스트 파일을 다운로드하세요.',
      },
      {
        title: '게시된 체크섬과 비교해 검증하기',
        description:
          '예상 SHA-256/512/384/1 문자열이나 .sha256sum 파일의 "<해시>  파일명" 전체 줄을 붙여넣어 정확히 일치하는지, 손상·변조가 있는지 확인하세요.',
      },
      {
        title: '해시 복사 또는 내보내기',
        description:
          '한 번의 클릭으로 다이제스트를 복사하거나 표준 .sha256 텍스트 파일을 다운로드해 릴리스와 함께 배포하거나 검증 기록으로 보관하세요.',
      },
      {
        title: '불일치나 큰 파일에 대응하기',
        description:
          '해시가 일치하지 않으면 파일을 삭제하고 공식 출처에서 다시 다운로드하세요. 약 500MB를 넘는 파일은 브라우저가 파일 전체를 메모리에 로드하므로 shasum -a 256이나 certutil을 대신 사용하세요.',
      },
    ],
    examples: [
      {
        title: '벤더 .sha256sum과 다운로드한 릴리스 바이너리 검증하기',
        input: '파일: app-v2.tar.gz · 예상: "e3b0c442...  app-v2.tar.gz"',
        output: '체크섬 검증 완료! 계산된 SHA-256 다이제스트와 깔끔하게 일치합니다.',
        explanation: '앞부분 해시 토큰을 자동으로 추출하고 대소문자를 무시하며 계산된 4가지 알고리즘 모두와 비교합니다.',
      },
      {
        title: '손상된 다운로드 잡아내기',
        input: '파일: setup.exe 48MB · 게시된 SHA-256과 계산된 SHA-256이 다름',
        output: '불일치 경고 — 파일을 삭제하고 공식 출처에서 다시 다운로드하세요',
        explanation: '단 한 바이트만 달라져도 해시가 완전히 바뀌므로 불일치는 손상이나 변조를 의미합니다.',
      },
    ],
    benefits: [
      '네이티브 C++/하드웨어 가속 브라우저 Web Crypto SubtleCrypto를 사용합니다',
      '.sha256sum 릴리스 매니페스트의 "<해시>  파일명" 전체 줄 붙여넣기를 지원합니다',
      '표준 filename.sha256 검증 파일을 한 번의 클릭으로 내보냅니다',
      '파일 업로드가 없어 기밀 빌드와 계약서가 비공개로 유지됩니다',
    ],
    useCases: [
      '터미널을 열지 않고 리눅스 ISO, CLI 바이너리, 오픈소스 tarball 검증하기',
      '법률·금융 아카이브가 바이트 단위로 정확히 전달되었는지 확인하기',
      '작은 고객 납품용 .sha256 릴리스 매니페스트 만들기',
      '압축을 풀기 전에 잘리거나 손상된 다운로드 감지하기',
    ],
    faqs: [
      {
        question: '최대 파일 크기 제한이 있나요?',
        answer:
          '브라우저 File.arrayBuffer()가 파일 전체를 클라이언트 RAM에 한 번에 로드하므로 약 300~500MB까지의 파일이 원활히 동작하고, 수 기가바이트 ISO는 브라우저 메모리 할당량을 초과할 수 있습니다. 수 GB 파일에는 네이티브 CLI 도구(shasum -a 256 또는 certutil)가 권장됩니다.',
      },
      {
        question: 'SHA-1이 레거시 호환용으로만 표시되는 이유는 무엇인가요?',
        answer:
          'SHA-1에는 알려진 실질적 충돌 약점이 있어 적대적 보안 보장에 신뢰해서는 안 됩니다. 가능하면 항상 SHA-256이나 SHA-512를 우선 사용하세요.',
      },
      {
        question: '바이너리 파일이 아니라 순수 텍스트 문자열을 해시하고 싶어요?',
        answer:
          '개발자 도구 카테고리의 해시 생성기 도구를 확인하세요. UTF-8 텍스트 해시를 즉시 제공합니다.',
      },
      {
        question: '파일 해시 검사기는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료이며 원하는 만큼 파일을 검증할 수 있습니다.',
      },
      {
        question: '파일을 검증할 때 파일이 어딘가에 업로드되나요?',
        answer:
          '아니요. 해시는 Web Crypto API를 이용해 브라우저 안에서만 이루어지므로 파일이 기기를 떠나지 않습니다. 기밀 빌드와 계약서에도 안전한 이유가 바로 이것입니다.',
      },
      {
        question: '파일 해시란 무엇이고 왜 확인해야 하나요?',
        answer:
          '해시는 파일의 정확한 바이트에서 계산된 고정 길이 지문입니다. 단 한 바이트만 바뀌어도 해시가 완전히 달라지므로, 해시를 비교하면 다운로드가 온전하고 변경 없이 도착했음을 증명합니다.',
      },
      {
        question: '어떤 해시 알고리즘을 써야 하나요? SHA-256, SHA-512, SHA-1 중 무엇인가요?',
        answer:
          '일반 검증에는 SHA-256을 사용하세요. 게시자가 제공하는 표준입니다. SHA-512도 동등하게 강력하고 64비트 시스템에서 더 빠르며, SHA-1은 레거시 전용으로 보안에 신뢰해서는 안 됩니다.',
      },
      {
        question: '비교할 공식 체크섬은 어디에서 찾나요?',
        answer:
          '게시자는 보통 다운로드 페이지나 다운로드 옆의 .sha256/.sha256sum 파일에 이를 나열합니다. 미러나 포럼 글이 아니라 벤더 자체 사이트에서 복사하세요.',
      },
      {
        question: '해시가 일치하지 않으면 어떻게 해야 하나요?',
        answer:
          '파일을 실행하거나 압축을 풀지 마세요. 삭제하고 공식 출처에서 다시 다운로드하세요. 불일치는 다운로드가 손상되거나 잘렸거나 변조되었을 수 있다는 뜻입니다.',
      },
      {
        question: '.sha256sum 전체 줄을 해시만 대신 붙여넣을 수 있나요?',
        answer:
          '네, 검증기는 릴리스 매니페스트의 "<해시>  파일명" 전체 줄을 받습니다. 앞부분 해시 토큰을 자동으로 추출하고 대소문자를 무시하며 계산된 네 가지 알고리즘 모두와 비교합니다.',
      },
      {
        question: '해시가 파일 이름에 따라 달라지나요?',
        answer:
          '아니요. 다이제스트는 파일 내용만으로 계산되므로 파일 이름을 바꿔도 해시는 절대 바뀌지 않습니다. 바이트가 같은 두 파일은 항상 같은 해시를 만듭니다.',
      },
      {
        question: '이 도구로 리눅스 ISO나 큰 설치 프로그램을 검증할 수 있나요?',
        answer:
          '네, 대략 300~500MB까지 가능합니다. 수 기가바이트 ISO는 macOS/Linux의 shasum -a 256이나 Windows의 certutil -hashfile 같은 네이티브 도구를 사용하세요. 브라우저가 파일 전체를 메모리에 로드하기 때문입니다.',
      },
      {
        question: 'SHA-256과 SHA-512의 차이는 무엇인가요?',
        answer:
          '둘 다 SHA-2 계열의 안전한 알고리즘입니다. SHA-256은 64자 16진수 다이제스트를, SHA-512는 128자 다이제스트를 만듭니다. SHA-512는 약간 더 강력하고 64비트 하드웨어에서 더 빠르지만 SHA-256이 더 널리 게시되는 체크섬입니다.',
      },
      {
        question: '이 도구가 파일의 바이러스나 악성코드를 감지할 수 있나요?',
        answer:
          '아니요. 일치하는 해시는 파일이 게시자가 릴리스한 파일과 동일하다는 것만 증명합니다. 게시자 자체 파일이 악성이어도 해시는 일치하므로 신뢰하는 출처에서 다운로드한 파일만 검증하세요.',
      },
      {
        question: '제 릴리스용 .sha256 파일은 어떻게 다운로드하나요?',
        answer:
          '여기서 릴리스 파일을 해시한 뒤 도구가 만드는 표준 filename.sha256 텍스트 파일을 다운로드해 다운로드와 함께 게시하면 사용자가 검증할 수 있습니다.',
      },
      {
        question: '큰 파일은 해시하는 데 몇 초가 걸리는 이유는 무엇인가요?',
        answer:
          '브라우저가 파일의 모든 바이트를 읽고 처리해야 합니다. 파일이 클수록 시간이 더 걸리며, 시간은 선택한 알고리즘이 아니라 파일 크기에 따라 늘어납니다.',
      },
      {
        question: '파일 해시 검사기가 오프라인에서도 동작하나요?',
        answer:
          '네, 페이지가 로드된 뒤에는 모든 해시가 브라우저 안에서 로컬로 실행되며 네트워크 요청이 없으므로 인터넷 연결 없이 파일을 검증할 수 있습니다.',
      },
      {
        question: '여러 파일을 한 번에 검증할 수 있나요?',
        answer:
          '이 도구는 한 번에 하나의 파일을 검증합니다. 각 파일을 따로 해시하고 각자의 게시된 체크섬과 비교하세요.',
      },
      {
        question: '일치하는 해시가 파일이 진짜라는 증거인가요?',
        answer:
          '게시자가 해시한 파일과 바이트 단위로 동일하다는 것을 증명합니다. 게시자가 주장하는 그 사람인지 증명하지는 않으므로, 예상 해시는 게시자의 공식 채널에서 가져오세요.',
      },
      {
        question: '도구가 제 파일이나 해시를 저장하나요?',
        answer:
          '아니요. 아무것도 업로드되거나 저장되지 않으며, 계산된 해시는 페이지를 닫거나 새로고침할 때까지 현재 브라우저 탭에만 존재합니다.',
      },
    ],
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
    instructions: [
      {
        title: '모노그램 배지 또는 로고 업로드 선택하기',
        description:
          '1~3자의 브랜드 이니셜과 사용자 지정 배경/텍스트 색상을 입력하거나, 로고 이미지 업로드로 전환해 기존 PNG/SVG/JPG 마크를 중앙에 잘라 넣으세요.',
      },
      {
        title: '아이콘 스타일 지정하기',
        description:
          '모노그램 문자와 색상을 고르거나 업로드한 로고 자르기를 조정해 마크가 모든 면에 균등한 여백을 두고 중앙에 오게 하세요.',
      },
      {
        title: '모서리 모양 선택하기',
        description:
          '둥근 정사각형(iOS/macOS 스타일), 원, 날카로운 정사각형 프레임 중 하나를 선택하세요.',
      },
      {
        title: '모든 크기 미리보기',
        description:
          '16×16과 32×32 미리보기를 주의 깊게 확인하세요. 크게 보기 좋은 마크도 탭 크기에서는 흐릿해질 수 있으므로 필요하면 문자나 디테일을 단순화하세요.',
      },
      {
        title: 'favicon.ico, PNG, HTML 스니펫 다운로드하기',
        description:
          '다중 프레임 favicon.ico 번들과 개별 PNG 크기를 다운로드하고 <head> 링크 태그를 프로젝트에 복사하세요.',
      },
      {
        title: '아이콘 설치하고 캐시 지우기',
        description:
          '파일을 /public/ 폴더에 넣고 링크 태그를 index.html에 붙여넣은 뒤 하드 새로고침을 하거나 브라우저 캐시를 지우세요. 브라우저는 파비콘을 공격적으로 캐시하므로 오래된 아이콘은 보통 캐시된 것입니다.',
      },
    ],
    examples: [
      {
        title: '새 React·Cloudflare Pages 앱용 아이콘 만들기',
        input: '모노그램 "UH" · 배경 #4F46E5 · 모양: 둥근 정사각형',
        output: '바이너리 favicon.ico(16+32+48픽셀 PNG 프레임) + PNG 6개 크기 + HTML <link> 스니펫',
        explanation: 'Uint8Array 버퍼 안에서 직접 유효한 ICONDIR와 ICONDIRENTRY 바이너리 헤더를 구성합니다.',
      },
      {
        title: '정사각형 로고에서 애플 터치 아이콘 만들기',
        input: '512×512 투명 배경 PNG 로고 · 모양: 둥근 정사각형',
        output: '180×180 애플 터치 아이콘과 192×192/512×512 PWA 아이콘',
        explanation: '정사각형 소스 이미지는 깔끔하게 잘리며, 넓거나 긴 로고는 중앙에서 잘려 가장자리가 잘릴 수 있습니다.',
      },
    ],
    benefits: [
      '이름만 바꾼 PNG가 아니라 진짜 다중 프레임 바이너리 .ico 파일(16×16, 32×32, 48×48)을 만듭니다',
      '데스크톱 탭, 애플 터치(180×180), 웹 매니페스트 아이콘(192/512픽셀)을 다룹니다',
      '즉석 모노그램 모드는 사이드 프로젝트와 MVP에 디자인 소프트웨어가 전혀 필요 없습니다',
      'index.html에 바로 붙여넣을 수 있는 깔끔한 HTML5 <link rel="icon"> 상용구를 생성합니다',
    ],
    useCases: [
      'SaaS나 마이크로사이트 런칭 전에 누락된 파비콘과 애플 터치 아이콘 제공하기',
      '스테이징 대 운영 대시보드용 고대비 탭 아이콘 만들기',
      '정사각형 브랜드 SVG/PNG 마크를 완전한 PWA 아이콘 세트로 바꾸기',
      '선명한 16×16과 32×32 미리보기를 만들어 작은 크기 가독성 검증하기',
    ],
    faqs: [
      {
        question: '다운로드한 favicon.ico가 진짜 ICO 바이너리 파일인가요?',
        answer:
          '네, 표준 Windows ICO ICONDIR 헤더와 디렉터리 항목을 작성해 세 개의 선명한 PNG 인코딩 프레임(16×16, 32×32, 48×48)을 포함하며 모든 최신 브라우저와 운영체제에서 지원됩니다.',
      },
      {
        question: '최신 웹사이트에 실제로 필요한 아이콘 크기는 무엇인가요?',
        answer:
          'favicon.ico와 32×32 PNG, 180×180 애플 터치 아이콘, 192×192/512×512 웹 매니페스트 PNG면 사실상 모든 데스크톱, 모바일 iOS, 안드로이드 브라우저를 다룹니다.',
      },
      {
        question: 'React + Vite 프로젝트에서 이 파일들을 어디에 두어야 하나요?',
        answer:
          'favicon.ico와 PNG 아이콘을 프로젝트의 /public/ 폴더 안에 두고 HTML <link> 태그를 index.html <head> 안에 붙여넣으세요.',
      },
      {
        question: '파비콘 생성기는 무료인가요?',
        answer:
          '네, 가입 없이 완전 무료이며 모든 아이콘이 브라우저 안에서 로컬로 생성됩니다.',
      },
      {
        question: '업로드한 로고가 서버로 전송되나요?',
        answer:
          '아니요. 로고는 브라우저 안에서만 처리되며 절대 업로드되지 않으므로 브랜드 애셋이 비공개로 유지됩니다.',
      },
      {
        question: 'favicon.ico와 PNG 파비콘의 차이는 무엇인가요?',
        answer:
          'favicon.ico는 여러 아이콘 크기를 하나의 바이너리 파일에 담은 컨테이너로, 브라우저가 수십 년 동안 지원해 왔습니다. PNG 파비콘은 단일 크기 이미지입니다. 최신 브라우저는 둘 다 받지만 .ico가 여전히 가장 안전한 기본값입니다.',
      },
      {
        question: '애플 터치 아이콘이란 무엇인가요?',
        answer:
          '누군가 사이트를 홈 화면에 추가할 때 iOS가 사용하는 180×180 PNG 아이콘입니다. 없으면 iOS가 페이지 스크린샷을 대신 가져오는데, 보통 보기 좋지 않습니다.',
      },
      {
        question: '192×192와 512×512 PWA 아이콘은 무엇에 쓰이나요?',
        answer:
          '설치 가능한 프로그레시브 웹 앱의 웹 앱 매니페스트에 나열되는 아이콘입니다. 안드로이드와 크롬이 홈 화면 아이콘, 스플래시 화면, 앱 런처에 사용합니다.',
      },
      {
        question: '로고 없이 텍스트로 파비콘을 만들 수 있나요?',
        answer:
          '네, 모노그램 모드는 브랜드 이니셜 같은 1~3자 문자를 배경색, 텍스트 색상, 모서리 모양 선택과 함께 깔끔한 배지로 바꿉니다. 디자인 소프트웨어가 필요 없습니다.',
      },
      {
        question: '최상의 결과를 위해 어떤 로고 파일을 업로드해야 하나요?',
        answer:
          '512×512 이상의 투명 배경 정사각형 PNG나 SVG를 업로드하세요. 정사각형 소스 이미지는 깔끔하게 잘리고, 넓거나 긴 로고는 중앙에서 잘려 가장자리가 잘릴 수 있습니다.',
      },
      {
        question: '배포한 뒤 새 파비콘이 표시되지 않는 이유는 무엇인가요?',
        answer:
          '브라우저가 파비콘을 매우 공격적으로 캐시합니다. Ctrl+Shift+R(Mac은 Cmd+Shift+R)로 하드 새로고침을 하거나 사이트 캐시를 지우거나 비공개 창에서 테스트하면 새 아이콘을 볼 수 있습니다.',
      },
      {
        question: '파비콘이 로고와 정확히 일치해야 하나요?',
        answer:
          '큰 크기에서는 그렇지만 16×16에서는 세밀한 디테일이 사라집니다. 가장 작은 크기에서는 굵은 이니셜이나 하나의 굵은 도형이 상세한 로고보다 훨씬 잘 읽힙니다.',
      },
      {
        question: '어떤 모서리 모양을 선택해야 하나요?',
        answer:
          '둥근 정사각형은 iOS와 macOS 앱 아이콘 스타일과 맞고, 원은 아바타와 소셜 스타일 마크에 어울리며, 날카로운 정사각형은 기하학적·기술적 브랜드 마크에 가장 좋습니다.',
      },
      {
        question: '아이콘용 HTML 링크 태그를 추가해야 하나요?',
        answer:
          '안정적인 결과를 위해 필요합니다. 브라우저는 기본적으로 /favicon.ico를 찾지만, 애플 터치와 PWA 아이콘은 페이지 <head>에 <link> 태그로 선언해야만 로드되며, 이 도구가 이를 생성해 줍니다.',
      },
      {
        question: '생성된 아이콘을 모바일 앱에도 쓸 수 있나요?',
        answer:
          '192×192와 512×512 PNG는 PWA 설치에 동작하지만, 네이티브 iOS와 안드로이드 앱은 특정 크기와 형식을 가진 자체 아이콘 세트가 필요하며 이 웹 중심 도구는 이를 생성하지 않습니다.',
      },
      {
        question: '파비콘 생성기가 오프라인에서도 동작하나요?',
        answer:
          '네, 페이지가 로드된 뒤에는 아이콘 생성이 브라우저 안에서 완전히 이루어지며 네트워크 요청이 없습니다.',
      },
      {
        question: '모노그램 파비콘에 가장 좋은 배경색은 무엇인가요?',
        answer:
          '흰색이나 거의 흰색 문자와 함께 단색의 고대비 브랜드 색상이 가장 좋습니다. 16×16에서도 가독성이 유지되기 때문입니다. 밝은 배경에 밝은 문자와 복잡한 그라디언트는 피하세요.',
      },
      {
        question: '브랜드 색상을 바꾼 뒤 아이콘을 다시 만들 수 있나요?',
        answer:
          '네, 색상을 업데이트하거나 새 로고를 업로드하고 새로운 세트를 다운로드하세요. 도구는 이전 세션의 내용을 유지하지 않으므로 매번 깨끗하게 시작합니다.',
      },
      {
        question: '파비콘이 다크 모드 브라우저 탭에서도 동작하나요?',
        answer:
          '단색 배경의 파비콘은 밝은 탭과 어두운 탭에서 동일하게 표시됩니다. 마크가 투명 배경에 어두운 색이면 밝은 배경이나 윤곽선을 추가해 어두운 브라우저 크롬에서도 보이게 하세요.',
      },
      {
        question: '도구가 로고나 생성된 아이콘을 저장하나요?',
        answer:
          '아니요. 모든 작업은 브라우저 탭 안에서 로컬로 실행되고 아무것도 업로드되거나 저장되지 않으며, 파일은 페이지를 닫거나 새로고침하면 사라집니다.',
      },
    ],
  },
};
