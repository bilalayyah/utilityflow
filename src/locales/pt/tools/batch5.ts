import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — Batch 5: SEO (10) + Image & File (10) tools (20 tools).
 * Source: src/registry/batches/batch6/ + batch7/ and src/locales/es/tools/batch5.ts
 * (Spanish twin — same tool ids and structure, structural reference only).
 */
export const PT_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'gerador-de-meta-tags',
    name: 'Gerador de Meta Tags e Open Graph',
    shortDescription:
      'Gere títulos HTML, meta descrições, URLs canônicas, diretivas robots, tags Open Graph e Twitter/X Card com pré-visualização ao vivo do cartão.',
    keywords: [
      'gerador de meta tags',
      'gerador de opengraph',
      'gerador de twitter card',
      'tags meta html seo',
      'tags open graph',
      'gerador de meta descrição',
      'criador de meta tags html',
      'meta tags para redes sociais',
      'gerador de tags og',
    ],
    seo: {
      title: 'Gerador de Meta Tags e Open Graph Grátis | UtilityFlow',
      description:
        'Crie títulos, descrições, URLs canônicas e tags Open Graph e Twitter Card com verificação de tamanho e pré-visualização social — grátis, no navegador.',
      primaryKeyword: 'gerador de meta tags',
      secondaryKeywords: [
        'gerador de tags open graph',
        'gerador de meta tags sociais',
        'construtor de tags head seo',
        'gerador de meta tags twitter card',
      ],
      longTailKeywords: [
        'gerar tags meta html open graph e twitter card grátis',
        'verificar tamanho de título e descrição com pré-visualização social',
        'baixar tags meta head seo prontas para colar',
        'criar meta tags para site com pré-visualização open graph',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Monte metadados HTML `<head>` dentro dos padrões — `<title>`, `<meta name="description">`, URLs canônicas, diretivas de indexação, tags Open Graph (`og:*`) e marcação Twitter/X Card — com escape de atributos e pré-visualização ao vivo do cartão social.',
  },
  'serp-snippet-preview': {
    slug: 'visualizacao-de-snippet-serp',
    name: 'Pré-visualização de Snippet SERP',
    shortDescription:
      'Simule resultados de busca do Google no computador e no celular, com verificação real de largura do título em pixels e destaque de palavras-chave em negrito.',
    keywords: [
      'pré-visualização serp',
      'simulador de snippet google',
      'verificador de largura em pixels do título seo',
      'pré-visualização de meta descrição',
      'pré-visualização serp google',
      'ferramenta de pré-visualização de resultado de busca',
      'verificador de snippet seo',
      'verificador de título google',
      'verificador de tamanho de meta descrição',
    ],
    seo: {
      title: 'Pré-visualização de Snippet SERP no Google | UtilityFlow',
      description:
        'Veja como seu snippet aparece no Google no computador e no celular, com largura em pixels, destaque de palavras-chave e alertas de corte antes de publicar.',
      primaryKeyword: 'pré-visualização de snippet serp',
      secondaryKeywords: [
        'simulador serp google',
        'verificador de largura em pixels do título seo',
        'pré-visualização de resultado de busca no celular',
        'ferramenta de pré-visualização serp para computador',
      ],
      longTailKeywords: [
        'verificar largura em pixels 580px do título seo google online',
        'comparar corte de snippet de busca no computador e no celular',
        'testar destaque em negrito de palavra-chave na meta descrição',
        'ver pré-visualização de snippet de resultado do google antes de publicar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Meça se o seu título de SEO cabe no limite de exibição do Google, de cerca de 580 px, usando o cálculo ao vivo das métricas de fonte do Canvas HTML5 em vez de apenas adivinhar por caracteres, e veja os cartões de busca no computador e no celular com destaque de palavras-chave em negrito.',
  },
  'xml-sitemap-generator': {
    slug: 'gerador-de-sitemap-xml',
    name: 'Gerador de Sitemap XML',
    shortDescription:
      'Gere arquivos XML válidos no padrão Sitemaps.org a partir de listas de URLs, com remoção de duplicadas, <lastmod>, <changefreq> e download em .xml.',
    keywords: [
      'gerador de sitemap xml',
      'construtor de sitemap.xml',
      'criar sitemap xml online',
      'criador de sitemap seo',
      'gerador de sitemap grátis',
      'criador de sitemap xml online',
      'gerar sitemap.xml',
      'gerador de sitemap de site',
      'criar sitemap para site',
    ],
    seo: {
      title: 'Gerador de Sitemap XML Grátis para Sites | UtilityFlow',
      description:
        'Transforme uma lista de URLs canônicas em um sitemap.xml válido, com remoção de duplicadas, datas lastmod, changefreq e escape XML — grátis, no navegador.',
      primaryKeyword: 'gerador de sitemap xml',
      secondaryKeywords: [
        'construtor de sitemap xml',
        'criar sitemap.xml grátis',
        'ferramenta de sitemap de url canônica',
        'gerador de arquivo sitemap.xml',
      ],
      longTailKeywords: [
        'gerar sitemap xml válido a partir de lista de urls offline',
        'criar sitemap.xml com tags lastmod e changefreq',
        'fazer escape de caracteres especiais em urls de sitemap xml',
        'criar sitemap xml para site pequeno grátis online',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transforme qualquer lista de URLs canônicas `https://` em um `sitemap.xml` válido conforme o esquema Sitemaps 0.9 — com filtragem de URLs inválidas, remoção automática de duplicadas, escape de caracteres XML e exportação em `.xml`.',
  },
  'robots-txt-generator': {
    slug: 'gerador-de-robots-txt',
    name: 'Gerador de Robots.txt',
    shortDescription:
      'Crie regras válidas de robots.txt para robôs, agrupadas por User-agent, com caminhos Allow/Disallow, Crawl-delay e diretivas Sitemap.',
    keywords: [
      'gerador de robots.txt',
      'criar robots txt',
      'construtor de allow disallow para robôs',
      'gerador de diretiva sitemap',
      'criador de robots txt online',
      'gerador de arquivo robots.txt',
      'bloquear robôs de busca',
      'allow disallow robots txt',
      'criar arquivo robots.txt grátis',
    ],
    seo: {
      title: 'Gerador de Robots.txt Grátis com Regras | UtilityFlow',
      description:
        'Crie um robots.txt válido com grupos de User-agent, regras Allow e Disallow, crawl-delay e links de sitemap usando modelos prontos — grátis, no navegador.',
      primaryKeyword: 'gerador de robots.txt',
      secondaryKeywords: [
        'criador de robots txt',
        'bloquear caminhos de robôs',
        'robots.txt para wordpress e spa',
        'criador de arquivo robots.txt',
      ],
      longTailKeywords: [
        'gerar robots.txt limpo para react vite e cloudflare pages',
        'adicionar várias diretivas sitemap ao arquivo robots.txt',
        'bloquear ambiente de teste dos robôs de busca robots.txt',
        'criar robots.txt para bloquear robôs de ia do site',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crie diretivas `robots.txt` limpas e agrupadas usando modelos prontos para sites abertos, apps web SaaS, WordPress ou bloqueio de ambiente de teste — com linhas personalizadas de `User-agent`, `Allow`/`Disallow`, `Crawl-delay` e declarações `Sitemap:`.',
  },
  'schema-markup-generator': {
    slug: 'gerador-de-dados-estruturados',
    name: 'Gerador de Schema Markup (JSON-LD)',
    shortDescription:
      'Gere scripts JSON-LD válidos do Schema.org para marcação de Artigo, FAQPage, Produto, Organização e BreadcrumbList.',
    keywords: [
      'gerador de schema markup',
      'gerador de json ld',
      'gerador de schema faq',
      'construtor de dados estruturados',
      'gerador de dados estruturados',
      'ferramenta json-ld schema.org',
      'gerador de schema para rich snippet',
      'gerador de schema faqpage',
      'schema de produto',
    ],
    seo: {
      title: 'Gerador de Schema Markup JSON-LD para SEO | UtilityFlow',
      description:
        'Crie JSON-LD válido do Schema.org para Artigo, FAQPage, Produto, Organização e BreadcrumbList, com escape HTML seguro, cópia do script e exportação .jsonld.',
      primaryKeyword: 'gerador de schema markup',
      secondaryKeywords: [
        'gerador de json-ld online',
        'ferramenta de dados estruturados faqpage',
        'construtor de schema de produto',
        'ferramenta de marcação de dados estruturados',
      ],
      longTailKeywords: [
        'gerar script json-ld schema.org válido grátis',
        'criar dados estruturados dinâmicos de faqpage e breadcrumb',
        'fazer escape seguro de json-ld em tags script html',
        'criar schema markup json-ld para páginas de artigo e produto',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crie blocos limpos de dados estruturados JSON-LD do Schema.org para `Article`, `FAQPage`, `Product`, `Organization` e `BreadcrumbList` — com construtores dinâmicos de linhas, escape seguro de `<` em HTML dentro das tags de script e exportação em `.jsonld`.',
  },
  'url-slug-generator': {
    slug: 'gerador-de-slug-de-url',
    name: 'Gerador de Slug de URL e Otimizador de SEO',
    shortDescription:
      'Converta títulos de artigos em slugs de URL de SEO limpos, com transliteração de acentos, em lote e com filtragem de stop words.',
    keywords: [
      'gerador de slug de url',
      'criador de slug seo',
      'gerador de permalink limpo',
      'conversor de slug em lote',
      'gerador de url amigável para seo',
      'conversor de título de blog em slug',
      'criador de slug de permalink',
      'removedor de stop words para urls',
      'conversor de acento para ascii em slug',
    ],
    seo: {
      title: 'Gerador de Slug de URL e Permalink SEO | UtilityFlow',
      description:
        'Transforme títulos de artigos em slugs de SEO em lote — com transliteração de acentos, remoção de stop words e corte no limite da palavra, tudo no navegador.',
      primaryKeyword: 'gerador de slug de url',
      secondaryKeywords: [
        'gerador de url amigável para seo',
        'título para slug em lote',
        'limpador de slug com stop words',
        'criador de slug de permalink',
      ],
      longTailKeywords: [
        'converter títulos de blog em slugs de url seo limpos em lote',
        'transliterar caracteres acentuados em slugs de url ascii',
        'cortar slugs de url longos no limite limpo da palavra',
        'gerar permalinks limpos com stop words removidas online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Padronize permalinks legíveis com hífen em posts individuais ou em calendários de conteúdo em massa. Translitera acentos de forma limpa (`Café` → `cafe`), opcionalmente remove stop words de preenchimento, impõe um tamanho máximo limpo sem cortar no meio da palavra e mostra a pré-visualização das URLs completas.',
  },
  'keyword-density-checker': {
    slug: 'verificador-de-densidade-de-palavras-chave',
    name: 'Verificador de Densidade de Palavras-chave',
    shortDescription:
      'Audite contagens de palavras, densidade da palavra-chave alvo, tempo de leitura e frequência das principais frases de 1, 2 e 3 palavras localmente.',
    keywords: [
      'verificador de densidade de palavras-chave',
      'analisador de conteúdo seo',
      'analisador de frequência de n-gramas',
      'auditoria de repetição de frases',
      'verificar densidade de palavras-chave online',
      'ferramenta de frequência de palavras-chave de conteúdo',
      'analisador de texto seo grátis',
      'calculadora de densidade de palavra-chave alvo',
      'analisador de bigramas e trigramas',
    ],
    seo: {
      title: 'Verificador de Densidade de Palavras-chave | UtilityFlow',
      description:
        'Cole um rascunho ou HTML para verificar palavras, tempo de leitura, densidade da palavra-chave alvo e frases de 1, 2 e 3 palavras — em privado, no navegador.',
      primaryKeyword: 'verificador de densidade de palavras-chave',
      secondaryKeywords: [
        'analisador de frequência de texto seo',
        'contador de n-gramas de 2 e 3 palavras',
        'verificar repetição de palavra-chave online',
        'calculadora de densidade de palavra-chave alvo',
      ],
      longTailKeywords: [
        'analisar html colado para densidade de palavras-chave sem envio',
        'encontrar frases de 2 e 3 palavras usadas em excesso no rascunho',
        'verificar frequência de palavra-chave alvo no navegador',
        'como verificar a densidade de palavras-chave de um rascunho online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Inspecione rascunhos de conteúdo ou textos HTML colados quanto à profundidade do vocabulário, tempo de leitura, ocorrências exatas da frase alvo e frequências dos principais n-gramas de 1, 2 e 3 palavras — feito para detectar repetição acidental, e não para perseguir cotas de palavras-chave desatualizadas.',
  },
  'canonical-hreflang-generator': {
    slug: 'gerador-de-canonical-e-hreflang',
    name: 'Construtor de Canônica, Hreflang e Redirecionamento 301',
    shortDescription:
      'Gere tags hreflang e canônicas em HTML/XML ou compile redirecionamentos 301 para _redirects do Cloudflare Pages, Apache e Nginx.',
    keywords: [
      'gerador de hreflang',
      'construtor de tag canônica',
      'gerador de redirecionamento 301',
      'construtor de _redirects cloudflare',
      'gerador de url canônica',
      'gerador de tag hreflang',
      'tags seo multilíngues',
      'gerador de regras de redirecionamento 301',
      'construtor de redirecionamento htaccess apache',
    ],
    seo: {
      title: 'Canônica, Hreflang e Redirecionamento 301 | UtilityFlow',
      description:
        'Este gerador cria tags hreflang e canônicas para páginas multilíngues e regras 301 para Cloudflare Pages, Apache e Nginx — prontas para copiar.',
      primaryKeyword: 'gerador de hreflang',
      secondaryKeywords: [
        'gerador de tag de link canônico',
        'construtor de configuração de redirecionamento 301',
        'gerador de redirecionamentos cloudflare pages',
        'gerador de url canônica',
      ],
      longTailKeywords: [
        'gerar tags hreflang html e links xhtml de sitemap xml',
        'converter lista de urls antigas em regras 301 _redirects cloudflare',
        'criar redirecionamentos 301 htaccess apache e nginx online',
        'gerar tag hreflang x-default para páginas internacionais',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Resolva duas migrações essenciais de SEO técnico em um só lugar: gere anotações `hreflang` + `canonical` para várias regiões (para o `<head>` HTML e para sitemaps XML) ou converta listas de mapeamento de URLs em configurações de redirecionamento 301 prontas para publicar no Cloudflare Pages, Apache e Nginx.',
  },
  'on-page-seo-checker': {
    slug: 'verificador-de-seo-on-page',
    name: 'Verificador de SEO On-Page em HTML',
    shortDescription:
      'Audite o código-fonte HTML colado localmente com DOMParser quanto a tamanho de título, meta descrição, hierarquia H1–H4, texto alternativo e JSON-LD.',
    keywords: [
      'verificador de seo on page',
      'analisador de seo html',
      'verificador de hierarquia de títulos',
      'ferramenta de auditoria de alt de imagem',
      'ferramenta de auditoria seo grátis',
      'verificador de tamanho de meta descrição',
      'verificador de tamanho de tag de título',
      'verificador de tags seo html',
      'verificador de json-ld',
    ],
    seo: {
      title: 'Verificador de SEO On-Page – Auditoria HTML | UtilityFlow',
      description:
        'Cole o HTML de qualquer página para auditar título, meta descrição, títulos, canônica, alt de imagens, links e JSON-LD — na hora, grátis, no navegador.',
      primaryKeyword: 'verificador de seo on page',
      secondaryKeywords: [
        'auditoria seo de código html',
        'verificador de estrutura de títulos h1 h2',
        'verificar atributos alt de imagem faltando',
        'verificador de tamanho de meta descrição',
      ],
      longTailKeywords: [
        'auditar código html colado para tags seo on page offline',
        'verificar estrutura de títulos h1 a h4 e link canônico no html',
        'inspetor seo dom no navegador sem rastreamento externo',
        'colar código html para verificar título meta descrição títulos',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Faça uma inspeção instantânea de SEO técnico e on-page no nível do DOM em qualquer código-fonte HTML colado (`Ver Código-Fonte da Página`) direto no seu navegador — verificando `<title>`, meta descrição, canônicas, hierarquia de títulos `H1`–`H4`, texto `alt` de imagem faltando, links internos/externos, Open Graph e JSON-LD.',
  },
  'robots-meta-tag-generator': {
    slug: 'gerador-de-meta-tags-robots',
    name: 'Construtor de Meta Tag Robots e X-Robots-Tag',
    shortDescription:
      'Gere regras detalhadas de noindex, nofollow, noarchive, max-snippet, max-image-preview e regras _headers do Cloudflare.',
    keywords: [
      'gerador de meta tag robots',
      'construtor de x-robots-tag',
      'meta tag noindex nofollow',
      'tag max-image-preview large',
      'gerador de tag noindex',
      'criador de meta tag robots',
      'gerador de cabeçalho robots',
      'gerador de _headers cloudflare',
      'meta tag nosnippet',
    ],
    seo: {
      title: 'Gerador de Meta Tags Robots e X-Robots-Tag | UtilityFlow',
      description:
        'Crie meta tags robots em HTML e cabeçalhos X-Robots-Tag com noindex, nofollow, max-snippet e max-image-preview — e saída _headers do Cloudflare para caminhos.',
      primaryKeyword: 'gerador de meta tag robots',
      secondaryKeywords: [
        'gerador de cabeçalho x-robots-tag',
        'criador de meta tag noindex',
        'google max-image-preview large',
        'gerador de tag noindex',
      ],
      longTailKeywords: [
        'gerar cabeçalho x-robots-tag noindex para pdf no cloudflare pages',
        'criar meta tag robots com max-snippet e max-image-preview large',
        'diferença entre robots.txt e meta robots noindex',
        'criar meta tag robots com noindex nofollow e max-snippet',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Gere diretivas precisas de robôs no nível da página — incluindo `index`/`noindex`, `follow`/`nofollow`, `noarchive`, `nosnippet`, `max-snippet` e `max-image-preview:large` — ao mesmo tempo como tags HTML `<meta name="robots">`, cabeçalhos HTTP `X-Robots-Tag` e blocos `_headers` do Cloudflare Pages.',
  },
  'image-compressor': {
    slug: 'compressor-de-imagens',
    name: 'Compressor de Imagens',
    shortDescription:
      'Comprima imagens PNG, JPG e WebP localmente via Canvas HTML5, com controle de qualidade, limite de largura máxima e métricas instantâneas de economia em bytes.',
    keywords: [
      'compressor de imagens',
      'comprimir imagem online',
      'reduzir tamanho de arquivo de imagem',
      'otimizador de imagem webp',
      'comprimir png para tamanho menor',
      'reduzir tamanho de arquivo jpg online',
      'redutor de tamanho de imagem grátis',
      'otimizar imagens para web',
      'diminuir tamanho de arquivo de foto',
    ],
    seo: {
      title: 'Compressor de Imagens – Reduza PNG, JPG e WebP | UtilityFlow',
      description:
        'Comprima imagens no navegador com o Compressor de Imagens. Ajuste a qualidade, limite a largura máxima, compare tamanhos antes e depois e baixe — sem envios.',
      primaryKeyword: 'compressor de imagens',
      secondaryKeywords: [
        'comprimir png jpg webp online',
        'reduzir tamanho de arquivo de foto grátis',
        'otimizador de imagem no navegador',
        'diminuir tamanho de imagem para site',
      ],
      longTailKeywords: [
        'comprimir imagens grandes para web core vitals sem envio ao servidor',
        'converter e diminuir foto jpg para formato webp leve',
        'redimensionar largura máxima e otimizar qualidade de imagem offline',
        'reduzir tamanho de arquivo de imagem antes de anexo de e-mail',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Diminua imagens pesadas em PNG, JPG e WebP para carregamentos de página mais rápidos e anexos de e-mail menores direto no seu navegador — ajuste a qualidade da compressão com perda, aplique limites opcionais de largura e compare a economia exata em bytes, sem nenhum envio remoto de arquivos.',
  },
  'image-resizer': {
    slug: 'redimensionador-de-imagens',
    name: 'Redimensionador e Cortador de Imagens',
    shortDescription:
      'Redimensione imagens para dimensões exatas em pixels ou modelos sociais/OG, com trava de proporção, corte inteligente central cover-crop e exportação em PNG/JPG/WebP.',
    keywords: [
      'redimensionador de imagens',
      'redimensionar imagem em pixels',
      'cortador de imagem online',
      'redimensionador de imagem og 1200x630',
      'redimensionar imagem online grátis',
      'mudar dimensões de imagem',
      'redimensionar foto para instagram',
      'cortar imagem para tamanho',
      'redimensionar imagem para 1200x630',
    ],
    seo: {
      title: 'Redimensionador de Imagens – Tamanho Exato | UtilityFlow',
      description:
        'Redimensione fotos para pixels exatos no navegador. Use modelos, trave a proporção, corte com cover-crop e exporte PNG, JPG ou WebP com pré-visualização.',
      primaryKeyword: 'redimensionador de imagens',
      secondaryKeywords: [
        'redimensionar foto para pixels exatos',
        'ferramenta de corte cover com proporção',
        'redimensionador com modelos de tamanho para redes sociais',
        'redimensionar imagem para redes sociais',
      ],
      longTailKeywords: [
        'redimensionar imagem para 1200x630 open graph sem distorcer',
        'cortar foto central cover para quadrado 1080x1080 localmente',
        'mudar largura e altura em pixels de imagem no navegador grátis',
        'redimensionar foto de retrato para quadrado 1080x1080 para instagram',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Escalone gráficos e fotografias para dimensões exatas em pixels — ou clique nos modelos embutidos Open Graph (1200×630), YouTube HD (1280×720), Quadrado (1080×1080) e Avatar (512×512) — usando reamostragem de alta qualidade do Canvas e Corte Central Cover opcional para evitar distorção.',
  },
  'image-format-converter': {
    slug: 'conversor-de-formato-de-imagem',
    name: 'Conversor de Formato de Imagem (PNG / JPG / WebP)',
    shortDescription:
      'Converta em lote imagens PNG, JPG, WebP, GIF e SVG para PNG, JPG ou WebP localmente, com controle de qualidade e preenchimento personalizado de fundo JPEG.',
    keywords: [
      'conversor de formato de imagem',
      'conversor de png para webp',
      'conversor de webp para png',
      'conversor de svg para png no navegador',
      'converter jpg para png',
      'converter png para jpg',
      'conversor de imagem em lote',
      'conversor de webp para jpg',
      'conversor de imagem online grátis',
    ],
    seo: {
      title: 'Conversor de Formato de Imagem – PNG, JPG | UtilityFlow',
      description:
        'Converta imagens entre PNG, JPG e WebP em lote com o Conversor de Formato. Defina a qualidade JPG e preencha fundos transparentes antes de exportar, grátis.',
      primaryKeyword: 'conversor de formato de imagem',
      secondaryKeywords: [
        'converter webp para jpg ou png',
        'conversor de png para webp em lote',
        'preenchimento de fundo de png transparente para jpg',
        'converter jpg para png grátis',
      ],
      longTailKeywords: [
        'converter várias imagens png e jpg para webp em lote offline',
        'converter captura de tela webp para png padrão sem envio',
        'preencher cor de fundo de png transparente ao converter para jpg',
        'mudar formato de imagem de png para jpg no navegador',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Converta em lote arquivos PNG, JPG, WebP, GIF e SVG em WebP pronto para a web, JPG universal ou PNG transparente sem perda, totalmente no seu navegador — com preenchimento personalizado de fundo matte ao achatar a transparência para JPEG.',
  },
  'image-rotate-flip': {
    slug: 'girar-e-espelhar-imagem',
    name: 'Girar, Espelhar e Filtrar Imagem',
    shortDescription:
      'Gire imagens em 90°/180°/270°, espelhe na horizontal ou vertical e aplique filtros de tons de cinza, brilho e contraste ao vivo no seu navegador.',
    keywords: [
      'girar imagem online',
      'espelhar imagem na horizontal',
      'filtro de imagem em tons de cinza',
      'ajustar brilho e contraste de imagem',
      'girar foto 90 graus',
      'espelhar foto online',
      'espelhar imagem online',
      'endireitar imagem online',
      'editor de filtro de foto online',
    ],
    seo: {
      title: 'Girar Imagem Online – Espelhar e Filtrar Fotos | UtilityFlow',
      description:
        'Gire imagens online em 90, 180 ou 270 graus, espelhe fotos na horizontal ou vertical e ajuste brilho, contraste e tons de cinza — grátis, no navegador.',
      primaryKeyword: 'girar imagem online',
      secondaryKeywords: [
        'espelhar imagem na horizontal e vertical',
        'converter foto para tons de cinza online',
        'ajustar brilho e contraste no navegador',
        'girar foto 90 graus online',
      ],
      longTailKeywords: [
        'corrigir rotação de foto de lado 90 graus offline no navegador',
        'espelhar selfie na horizontal sem photoshop',
        'aplicar filtro preto e branco em tons de cinza e exportar png',
        'girar imagem de documento digitalizado para orientação correta',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Corrija a orientação de lado, espelhe selfies na horizontal ou vertical, passe fotos para preto e branco em tons de cinza e ajuste brilho e contraste em tempo real usando transformações locais do Canvas 2D em HTML5.',
  },
  'image-to-base64': {
    slug: 'imagem-para-base64',
    name: 'Conversor de Imagem para Base64 e Data URI',
    shortDescription:
      'Codifique imagens PNG, JPG, WebP, SVG e ICO em Data URIs Base64, tags HTML <img> e regras CSS — ou decodifique strings Base64 de volta para pré-visualizações.',
    keywords: [
      'imagem para base64',
      'decodificador de imagem base64',
      'gerador de data uri',
      'imagem base64 para fundo css',
      'converter imagem para data uri',
      'codificador base64 de imagem',
      'imagem para base64 online grátis',
      'codificar png em base64',
      'conversor de base64 para imagem',
    ],
    seo: {
      title: 'Conversor de Imagem para Base64 e Data URI | UtilityFlow',
      description:
        'Converta imagens em Data URIs Base64, Base64 puro, tags img HTML e trechos CSS — ou decodifique Base64 de volta para uma pré-visualização de imagem grátis.',
      primaryKeyword: 'imagem para base64',
      secondaryKeywords: [
        'codificador de imagem data uri',
        'pré-visualização de base64 para imagem',
        'incorporar svg ou png em css',
        'imagem para base64 online grátis',
      ],
      longTailKeywords: [
        'converter ícone png em data uri de background-image css offline',
        'decodificar string base64 pura em pré-visualização de imagem baixável',
        'comparar tamanho em bytes de imagem binária com tamanho de string base64',
        'codificar imagem pequena de logotipo em base64 para e-mail html',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transforme ícones pequenos, logotipos e gráficos de e-mail em URIs `data:image/...;base64,...` autocontidas, tags HTML `<img>` prontas para copiar e declarações CSS `background-image` — ou mude de modo para inspecionar e baixar cargas brutas de imagem em Base64.',
  },
  'color-contrast-checker': {
    slug: 'verificador-de-contraste-de-cores',
    name: 'Verificador de Contraste de Cores e Extrator de Paleta',
    shortDescription:
      'Teste proporções de contraste de cores WCAG 2.1 AA/AAA, converta valores HEX/RGB/HSL e extraia paletas de cores dominantes de imagens enviadas.',
    keywords: [
      'verificador de contraste de cores wcag',
      'proporção de contraste de acessibilidade',
      'extrator de paleta de cores de imagem',
      'seletor de cores hex rgb hsl',
      'calculadora de proporção de contraste wcag aa',
      'verificador de contraste aaa online',
      'combinações de cores acessíveis',
      'teste de contraste de texto e fundo',
      'verificador de acessibilidade de design',
    ],
    seo: {
      title: 'Verificador de Contraste – WCAG 2.1 AA/AAA | UtilityFlow',
      description:
        'Verifique proporções de contraste WCAG 2.1 AA e AAA para pares de cores de texto e fundo, converta HEX, RGB e HSL e extraia paletas — grátis, no navegador.',
      primaryKeyword: 'verificador de contraste de cores',
      secondaryKeywords: [
        'calculadora de proporção de contraste wcag aa aaa',
        'extrair paleta de cores de imagem',
        'verificador de cores acessíveis de texto e fundo',
        'proporção de contraste wcag para texto normal e grande',
      ],
      longTailKeywords: [
        'testar proporção de contraste wcag 2.1 de texto normal e grande online',
        'extrair amostras hex dominantes de captura de tela para o verificador',
        'verificar acessibilidade de cores de interface em modo escuro',
        'qual proporção de contraste passa no wcag aa para texto de corpo',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Valide combinações de cores de interface conforme os limites oficiais de luminância relativa e contraste do WCAG 2.1 (AA 4,5:1, AA Grande 3,0:1, AAA 7,0:1), edite valores HEX/RGB/HSL sincronizados e envie capturas de tela ou logotipos para extrair amostras HEX dominantes direto para o seu Primeiro Plano ou Fundo.',
  },
  'qr-code-scanner': {
    slug: 'leitor-de-qr-code',
    name: 'Leitor de QR Code e Estúdio de QR vCard',
    shortDescription:
      'Decodifique QR codes de imagens enviadas ou da câmera do seu dispositivo em privado no navegador, ou crie QR codes de contato vCard baixáveis em PNG/SVG.',
    keywords: [
      'leitor de qr code online',
      'decodificar qr code de imagem',
      'gerador de qr code vcard',
      'leitor de qr por câmera no navegador',
      'escanear qr code de captura de tela',
      'leitor de qr code sem aplicativo',
      'decodificar qr code png jpg',
      'leitor de qr code wifi',
      'leitor de conteúdo de qr code',
    ],
    seo: {
      title: 'Leitor de QR Code – Decodifique QR e vCards | UtilityFlow',
      description:
        'Escaneie e decodifique QR codes de capturas de tela, fotos ou webcam direto no navegador, ou crie um QR code de contato vCard baixável em PNG e SVG, grátis.',
      primaryKeyword: 'leitor de qr code',
      secondaryKeywords: [
        'leitor de imagem de qr code online',
        'escanear qr de captura de tela grátis',
        'gerar qr code de contato vcard',
        'leitor de qr code por webcam no navegador',
      ],
      longTailKeywords: [
        'decodificar qr code de captura de tela png ou jpg enviada offline',
        'escanear qr code com webcam de notebook sem instalar aplicativo',
        'criar qr code de contato vcard 3.0 baixável em svg e png',
        'ler qr code invertido de modo escuro de captura de tela',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Leia o conteúdo de QR codes de capturas de tela, fotos ou um fluxo de câmera ao vivo opcional direto no seu navegador — com classificação automática de conteúdo (URL, Wi-Fi, vCard, Texto) — além de um **Construtor de QR de Contato vCard** que exporta cartões de contato nítidos em PNG e SVG.',
  },
  'password-generator': {
    slug: 'gerador-de-senhas',
    name: 'Gerador de Senhas e Frases-senha Criptográficas',
    shortDescription:
      'Gere senhas aleatórias sem viés e frases-senha estilo Diceware usando amostragem por rejeição com crypto.getRandomValues e cálculos exatos de entropia.',
    keywords: [
      'gerador de senha criptográfica',
      'gerador de senha aleatória segura',
      'gerador de frase-senha diceware',
      'senha com crypto getrandomvalues',
      'criador de senha forte online',
      'gerador de frase-senha aleatória',
      'verificador de entropia de senha',
      'gerar senha segura grátis',
      'ferramenta de senha aleatória sem viés',
    ],
    seo: {
      title: 'Gerador de Senhas – Senhas Aleatórias Seguras | UtilityFlow',
      description:
        'Gere senhas aleatórias fortes e frases-senha Diceware memoráveis localmente no navegador com Web Crypto, entropia exata e sem armazenamento ou envios.',
      primaryKeyword: 'gerador de senhas',
      secondaryKeywords: [
        'gerador de senha criptograficamente seguro',
        'gerador de frase-senha memorável online',
        'calculadora de entropia de senha',
        'criador de senha aleatória com símbolos',
      ],
      longTailKeywords: [
        'gerar senha aleatória com crypto getrandomvalues sem viés de módulo',
        'criar frase-senha diceware de 5 palavras localmente offline',
        'excluir caracteres ambíguos 0 o 1 l i no gerador de senhas',
        'quantos bits de entropia tem uma senha de 18 caracteres',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Gere senhas de alta entropia e frases-senha memoráveis de várias palavras 100% localmente, usando o CSPRNG do seu navegador com suporte de hardware (`window.crypto.getRandomValues`), com amostragem por rejeição para eliminar o viés de módulo e embaralhamento Fisher-Yates para evitar posições previsíveis de caracteres.',
  },
  'file-hash-verifier': {
    slug: 'verificador-de-hash-de-arquivo',
    name: 'Verificador de Hash e Checksum de Arquivo',
    shortDescription:
      'Calcule checksums locais de arquivos binários em SHA-256, SHA-512, SHA-384 e SHA-1 via Web Crypto SubtleCrypto e verifique downloads contra hashes publicados.',
    keywords: [
      'verificador de hash de arquivo',
      'verificador de checksum sha256 de arquivo',
      'verificar hash de arquivo baixado online',
      'gerador de hash sha512 de arquivo',
      'calculadora de checksum sha256',
      'verificar integridade de arquivo online',
      'comparar checksum de arquivo',
      'verificador de hash sha384 sha1',
      'verificar checksum de iso no navegador',
    ],
    seo: {
      title: 'Verificador de Hash de Arquivo – SHA-256 | UtilityFlow',
      description:
        'Calcule resumos SHA-256, SHA-512, SHA-384 e SHA-1 de qualquer arquivo local no navegador e compare com checksums publicados — sem envios, grátis para usar.',
      primaryKeyword: 'verificador de hash de arquivo',
      secondaryKeywords: [
        'calculadora de checksum sha256 de arquivo',
        'verificar sha256sum de arquivo online',
        'resumo de arquivo subtlecrypto no navegador',
        'verificador de checksum sha512',
      ],
      longTailKeywords: [
        'verificar hash sha-256 de instalador baixado sem terminal',
        'comparar checksum binário de arquivo com string sha256sum esperada',
        'calcular sha256 e sha512 localmente sem envio de arquivo',
        'verificar checksum sha256 de iso linux no navegador',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Verifique a integridade e a autenticidade de instaladores de software, arquivos compactados, conjuntos de dados e documentos localmente — calculando resumos `SHA-256`, `SHA-512`, `SHA-384` e `SHA-1` via Web Crypto `subtle.digest` com aceleração de hardware e comparação instantânea com o checksum esperado.',
  },
  'favicon-generator': {
    slug: 'gerador-de-favicon',
    name: 'Gerador de Favicon e Ícones de App (.ico e PNG)',
    shortDescription:
      'Gere ícones PNG nítidos em vários tamanhos (16×16 a 512×512) e um favicon.ico binário real com vários quadros a partir de um selo de monograma personalizado ou logotipo enviado.',
    keywords: [
      'gerador de favicon',
      'criar favicon.ico online',
      'gerador de ícone apple touch',
      'texto para favicon monograma',
      'criador de favicon ico grátis',
      'gerador de ícone pwa 192 512',
      'criador de favicon de site',
      'conversor de png para favicon',
      'gerador de ícone de app online',
    ],
    seo: {
      title: 'Gerador de Favicon – Ícones .ico e PNG | UtilityFlow',
      description:
        'Gere um favicon.ico com vários quadros, além de PNGs de 16 a 512 px, ícones Apple Touch e PWA a partir do seu logotipo ou monograma — grátis, no navegador.',
      primaryKeyword: 'gerador de favicon',
      secondaryKeywords: [
        'conversor de png para ico de vários tamanhos',
        'construtor de favicon monograma',
        'gerador de ícone pwa e apple touch',
        'criador de favicon ico online grátis',
      ],
      longTailKeywords: [
        'criar favicon.ico binário real com quadros 16x16 32x32 48x48 grátis',
        'gerar favicon de site e tags link html a partir de iniciais de texto',
        'cortar logotipo quadrado para ícone apple touch 180x180 em círculo arredondado',
        'gerar ícones pwa 192x192 e 512x512 para manifesto web',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Crie um ícone de monograma limpo em segundos — ou envie o logotipo da sua marca — para renderizar arquivos PNG nítidos em `16×16`, `32×32`, `48×48`, `180×180` Apple Touch e `192×192` / `512×512` PWA, além de um **`favicon.ico`** binário com várias imagens conforme os padrões e marcação HTML `<link>` pronta para colar.',
  },
};
