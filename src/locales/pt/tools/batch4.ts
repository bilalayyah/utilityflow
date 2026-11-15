import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — Batch 4: Social (10) + PDF (10) tools (20 tools).
 * Filled by Phase 2 translation. Sources: src/registry/batches/batch4/
 * (socialToolsPart1/2) and batch5/ (pdfToolsPart1/2); Spanish twin
 * src/locales/es/tools/batch4.ts (same tool ids and structure, content
 * translated from English). Slugs are unique, lowercase, hyphenated, with
 * no collision against English slugs or reserved paths.
 */
export const PT_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'gerador-de-codigo-qr',
    name: 'Gerador de Código QR',
    shortDescription:
      'Gere códigos QR personalizados e escaneáveis para URLs, texto, logins de Wi-Fi, e-mails ou números de telefone, com exportação em PNG e SVG.',
    keywords: [
      'gerador de código qr',
      'criador de qr code grátis',
      'qr code de wifi',
      'gerador de qr code svg',
      'criar código qr online',
      'código qr para senha de wifi',
      'download de qr code png',
      'gerador de código qr grátis sem cadastro',
      'criador de código qr para cartão de visita',
    ],
    seo: {
      title: 'Gerador de Código QR – QR Grátis PNG e SVG | UtilityFlow',
      description:
        'Crie códigos QR estáticos grátis para URLs, Wi-Fi, texto, e-mails e telefones no seu navegador — sem cadastro, sem validade — e baixe PNG ou SVG nítidos.',
      primaryKeyword: 'gerador de código qr',
      secondaryKeywords: [
        'gerador de qr code de wifi',
        'criador de qr code svg',
        'código qr personalizado com cores',
        'criador de qr code para impressão',
      ],
      longTailKeywords: [
        'gerar código qr estático sem validade nem rastreamento',
        'criar código qr de wifi escaneável no navegador',
        'baixar código qr svg vetorial grátis',
        'criar código qr para cartão de visita grátis online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Codifique URLs de sites, credenciais de Wi-Fi, texto, links de e-mail ou números de telefone em códigos QR nítidos padrão ISO direto no seu navegador — sem limite de validade, sem rastreamento de redirecionamento e com downloads instantâneos em PNG ou SVG vetorial.',
  },
  'utm-link-builder': {
    slug: 'criador-de-links-utm',
    name: 'Criador de Links UTM',
    shortDescription:
      'Crie URLs limpas de rastreamento de campanha com os parâmetros utm_source, utm_medium, utm_campaign, utm_term e utm_content.',
    keywords: [
      'criador de links utm',
      'criador de url de campanha',
      'gerador de utm',
      'utm do google analytics',
      'criador de utm grátis',
      'gerador de parâmetros utm',
      'criador de link de rastreamento de campanha',
      'gerador de link utm para instagram',
      'gerador de link utm para e-mail',
    ],
    seo: {
      title: 'Criador de Links UTM – Rastreio de Campanha | UtilityFlow',
      description:
        'Crie URLs de campanha UTM consistentes para redes sociais, e-mail e anúncios com predefinições e normalização em minúsculas — grátis, no seu navegador.',
      primaryKeyword: 'criador de links utm',
      secondaryKeywords: [
        'criador de url de campanha',
        'gerador de tags utm',
        'url de rastreamento de redes sociais',
        'criador de url utm para bio do instagram',
      ],
      longTailKeywords: [
        'criar links de rastreamento utm em minúsculas consistentes online',
        'gerador de utm que preserva query strings e hashes existentes',
        'modelos de link utm para bio do instagram e newsletter',
        'como criar links utm para campanhas de redes sociais',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Gere URLs limpas e padronizadas de rastreamento de campanha para bios de redes sociais, patrocínios de criadores, anúncios pagos e newsletters, preservando query strings existentes e fragmentos de URL (#seção).',
  },
  'social-character-limit-checker': {
    slug: 'contador-de-caracteres-para-redes-sociais',
    name: 'Verificador de Limite de Caracteres para Redes Sociais',
    shortDescription:
      'Meça o tamanho do texto no X, Instagram, LinkedIn, TikTok, Threads, Bluesky e YouTube com prévias de corte do feed.',
    keywords: [
      'verificador de limite de caracteres para redes sociais',
      'contador de caracteres do twitter',
      'limite de legenda do instagram',
      'verificador de tamanho de post do linkedin',
      'contador de caracteres do x',
      'contador de caracteres de legenda do instagram',
      'verificador de limite de legenda do tiktok',
      'limite de caracteres do threads',
      'contador de caracteres do bluesky',
    ],
    seo: {
      title: 'Verificador de Limite de Caracteres – Redes | UtilityFlow',
      description:
        'Confira limites de caracteres e o corte do feed em redes sociais como X, Instagram, LinkedIn, TikTok, Threads e YouTube, com contagem de emojis e links, grátis.',
      primaryKeyword: 'verificador de limite de caracteres para redes sociais',
      secondaryKeywords: [
        'contador de posts do x twitter',
        'verificador de tamanho de legenda do instagram',
        'prévia de corte ver mais do linkedin',
        'contador de caracteres de legenda do tiktok',
      ],
      longTailKeywords: [
        'verificar limite de caracteres e corte em redes sociais',
        'contador de 280 caracteres do twitter com peso de url de 23 caracteres',
        'contador de bio de 150 caracteres e legenda do instagram',
        'quantos caracteres tem uma bio do instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Escreva uma vez e confira na hora os limites rígidos de caracteres, o peso de 23 caracteres de links t.co do X, as contagens de hashtags e as prévias de truncamento acima da dobra em 10 grandes superfícies sociais.',
  },
  'unicode-fancy-text-formatter': {
    slug: 'formatador-de-texto-unicode',
    name: 'Formatador de Texto Unicode Estilizado',
    shortDescription:
      'Converta texto ASCII simples em estilos Unicode de Negrito, Itálico, Monoespaçado, Script, Versalete e Largura Total para bios.',
    keywords: [
      'gerador de texto estilizado',
      'texto unicode em negrito',
      'formatador de fonte de bio do instagram',
      'gerador de versalete',
      'gerador de texto em negrito para instagram',
      'gerador de texto itálico unicode',
      'gerador de texto monoespaçado',
      'gerador de texto script',
      'gerador de texto de largura total',
    ],
    seo: {
      title: 'Formatador de Texto Unicode – Estilos Grátis | UtilityFlow',
      description:
        'Transforme texto simples em negrito, itálico, monoespaçado, script, versalete e largura total Unicode para bios e posts — copie e cole, grátis, sem cadastro.',
      primaryKeyword: 'formatador de texto unicode',
      secondaryKeywords: [
        'gerador de texto unicode em negrito',
        'conversor de texto em versalete',
        'fontes de bio de redes sociais',
        'texto em negrito e itálico para bios sociais',
      ],
      longTailKeywords: [
        'copiar e colar texto unicode em negrito para linkedin e instagram',
        'converter texto simples em versalete e monoespaçado unicode',
        'orientação de acessibilidade para texto social estilizado unicode',
        'como deixar o texto em negrito na bio do instagram sem aplicativo',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme letras e números simples em Símbolos Alfanuméricos Matemáticos Unicode padrão, Versalete e glifos de Largura Total que preservam o estilo negrito ou monoespaçado dentro de bios sociais em texto simples.',
  },
  'bio-line-break-formatter': {
    slug: 'formatador-de-quebras-de-linha-para-bio',
    name: 'Formatador de Quebras de Linha para Instagram e Bio',
    shortDescription:
      'Preserve parágrafos limpos em branco em legendas e bios do Instagram removendo espaços finais e adicionando espaçadores invisíveis.',
    keywords: [
      'gerador de quebra de linha do instagram',
      'formatador de quebra de linha de bio',
      'ferramenta de espaçador de legenda',
      'quebra de linha invisível para redes sociais',
      'espaçador de legenda do instagram',
      'quebras de linha para bio do instagram',
      'ferramenta de quebra de linha de legenda',
      'caractere invisível para instagram',
      'quebras de linha de bio do tiktok',
    ],
    seo: {
      title: 'Formatador de Quebras de Linha – Legendas | UtilityFlow',
      description:
        'Mantenha o espaçamento de parágrafos na sua bio e em legendas do Instagram e TikTok — remova espaços finais, some espaçadores invisíveis e copie com um clique.',
      primaryKeyword: 'formatador de quebras de linha para bio',
      secondaryKeywords: [
        'quebras de linha de legenda do instagram',
        'espaçador invisível para bio do instagram',
        'preservar linhas em branco nas redes sociais',
        'ferramenta de espaçamento de bio do instagram',
      ],
      longTailKeywords: [
        'manter espaçamento de parágrafos em legendas do instagram sem pontos',
        'corrigir espaços finais que quebram quebras de linha da bio do instagram',
        'copiar legenda social formatada limpa para a área de transferência',
        'como adicionar quebras de linha na bio do instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evite que aplicativos sociais colapsem linhas vazias dentro de suas legendas e bios removendo espaços finais ocultos e inserindo opcionalmente espaçadores invisíveis de Braille em branco (`⠀`) nas lacunas entre parágrafos.',
  },
  'youtube-timestamp-generator': {
    slug: 'gerador-de-marcas-de-tempo-do-youtube',
    name: 'Gerador de Marcas de Tempo e Capítulos do YouTube',
    shortDescription:
      'Crie descrições de capítulos de vídeo do YouTube ordenadas e validadas conforme as especificações do YouTube e gere links clicáveis ?t= de salto.',
    keywords: [
      'gerador de marcas de tempo do youtube',
      'criador de capítulos do youtube',
      'gerador de link de tempo do youtube',
      'formatador de capítulos de vídeo',
      'criador de marcas de tempo de capítulos do youtube',
      'ferramenta de capítulos de descrição do youtube',
      'links clicáveis de marcas de tempo do youtube',
      'validador de capítulos do youtube',
      'gerador de timecode de capítulos de vídeo',
    ],
    seo: {
      title: 'Marcas de Tempo do YouTube – Capítulos | UtilityFlow',
      description:
        'Este gerador cria capítulos ordenados do YouTube validados para início em 00:00, 3+ capítulos e 10 segundos de intervalo, com links ?t= clicáveis.',
      primaryKeyword: 'gerador de marcas de tempo do youtube',
      secondaryKeywords: [
        'formatador de capítulos do youtube',
        'criador de url de marcas de tempo do youtube',
        'lista de verificação de capítulos de vídeo',
        'ferramenta de timecode de capítulos do youtube',
      ],
      longTailKeywords: [
        'gerar bloco de descrição de capítulos de vídeo do youtube online',
        'criar links clicáveis de salto de marcas de tempo do youtube para capítulos',
        'validar regra mínima de 10 segundos de capítulos do youtube',
        'formatar capítulos do youtube começando em 00:00 com três capítulos',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Monte blocos limpos e ordenados cronologicamente de capítulos do YouTube para as descrições dos seus vídeos — verificados automaticamente conforme as regras oficiais de capítulos do YouTube — e gere links clicáveis `?t=` de salto para comentários, newsletters ou notas de episódio.',
  },
  'social-thumbnail-previewer': {
    slug: 'pre-visualizacao-de-miniaturas-do-youtube',
    name: 'Pré-visualizador de Miniaturas do YouTube e Redes Sociais',
    shortDescription:
      'Confira imagens de miniatura locais junto com títulos em layouts de feed e barra lateral de desktop, com verificações de especificação 16:9 e 2 MB.',
    keywords: [
      'pré-visualizador de miniatura do youtube',
      'testador de miniatura',
      'prévia de truncamento de título de vídeo',
      'verificador de miniatura 16:9',
      'verificador de tamanho de miniatura do youtube',
      'prévia de miniatura em modo escuro',
      'prévia de miniatura de feed do youtube',
      'verificador de zona segura de miniatura',
      'ferramenta de mockup de miniatura de vídeo',
    ],
    seo: {
      title: 'Pré-visualizador de Miniaturas – Feed | UtilityFlow',
      description:
        'Confira sua miniatura e seu título nos feeds claro e escuro do YouTube antes de publicar, com verificações de 16:9, 1280×720 e 2 MB — tudo local, sem envio.',
      primaryKeyword: 'pré-visualizador de miniatura do youtube',
      secondaryKeywords: [
        'prévia de feed de miniatura',
        'verificador de tamanho de título do youtube',
        'ferramenta de zona segura de miniatura',
        'verificador de tamanho de miniatura do youtube',
      ],
      longTailKeywords: [
        'pré-visualizar miniatura do youtube no feed em modo escuro antes de publicar',
        'verificar sobreposição de selo de tempo no canto inferior direito da miniatura',
        'verificador privado de miniatura 1280x720 no navegador',
        'testar legibilidade de miniatura do youtube em tamanho de barra lateral',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Teste suas miniaturas e títulos de vídeo não lançados em layouts realistas de feed inicial e barra lateral compacta em modo Claro e Escuro — verificando dimensões HD de 1280×720, proporção 16:9, limites de 2 MB de tamanho de arquivo e sobreposição de tempo no canto inferior direito localmente.',
  },
  'hashtag-formatter': {
    slug: 'formatador-de-hashtags',
    name: 'Formatador e Gerenciador de Hashtags',
    shortDescription:
      'Limpe palavras-chave bagunçadas, remova hashtags duplicadas, formate tags #CamelCase acessíveis e confira os limites da plataforma.',
    keywords: [
      'formatador de hashtags',
      'limpador de hashtags',
      'conversor de hashtag camelcase',
      'remover hashtags duplicadas',
      'gerador de hashtags a partir de palavras-chave',
      'verificador de limite de hashtags do instagram',
      'conversor de maiúsculas de hashtag',
      'ferramenta de limpeza de lista de hashtags',
      'formatador de grupo de hashtags',
    ],
    seo: {
      title: 'Formatador de Hashtags – CamelCase e Contador | UtilityFlow',
      description:
        'Normalize palavras-chave em hashtags #CamelCase limpas ou minúsculas, remova duplicatas e pontuação inválida e confira o limite de 30 tags do Instagram.',
      primaryKeyword: 'formatador de hashtags',
      secondaryKeywords: [
        'gerador de hashtag camelcase',
        'removedor de hashtag duplicada',
        'contador de hashtags do instagram',
        'conversor de maiúsculas de hashtag',
      ],
      longTailKeywords: [
        'converter lista de palavras-chave em hashtags camelcase acessíveis',
        'remover hashtags duplicadas e pontuação inválida online',
        'formatar grupos de hashtags com separadores de pontos na dobra da legenda',
        'verificar limite de 30 hashtags do instagram antes de postar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme palavras-chave separadas por vírgula ou listas bagunçadas de tags em hashtags sem duplicatas e sem pontuação, formatadas em `#CamelCase` amigável para leitores de tela ou em minúsculas, prontas para blocos de legenda de uma linha, verticais ou separados por pontos.',
  },
  'caption-template-builder': {
    slug: 'criador-de-modelos-de-legendas',
    name: 'Criador de Modelos de Legendas e Ganchos',
    shortDescription:
      'Monte legendas sociais estruturadas usando modelos determinísticos de PAS, Tutorial, Antes-Depois-Ponte e Lista de Verificação.',
    keywords: [
      'criador de modelos de legendas',
      'modelos de posts de redes sociais',
      'criador de estrutura de gancho',
      'formatador de post do linkedin',
      'modelos de legenda do instagram',
      'modelo de copywriting pas',
      'gerador de gancho de redes sociais',
      'modelos de estrutura de post',
      'ferramenta de estrutura de escrita de legendas',
    ],
    seo: {
      title: 'Criador de Modelos de Legendas – Ganchos | UtilityFlow',
      description:
        'Monte legendas de redes sociais com modelos de PAS, Tutorial, Antes-Depois-Ponte e Lista de Verificação — suas palavras, estruturadas, com contagem ao vivo.',
      primaryKeyword: 'criador de modelos de legendas',
      secondaryKeywords: [
        'estruturas de legenda de redes sociais',
        'criador de estrutura de post do linkedin',
        'modelo de copywriting pas',
        'modelos de legenda do instagram',
      ],
      longTailKeywords: [
        'criar legendas estruturadas de linkedin e instagram sem ia',
        'criador de modelo de post social de problema agitação solução',
        'verificar encaixe de caracteres de x e instagram ao escrever legendas',
        'modelo de legenda antes depois ponte para posts sociais',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Componha posts sociais consistentes e escaneáveis mais rápido usando modelos determinísticos de copywriting — Problema–Agitação–Solução (PAS), Detalhamento Acionável, Antes–Depois–Ponte, Lista de Verificação de Auditoria e Mito vs. Realidade — estritamente a partir de suas próprias entradas, sem texto inventado por IA.',
  },
  'social-handle-formatter': {
    slug: 'formatador-de-nomes-de-usuario',
    name: 'Formatador de Nomes de Usuário para Redes Sociais',
    shortDescription:
      'Gere variações consistentes de nome de usuário de marca, valide regras de caracteres/sintaxe da plataforma e abra URLs diretas de verificação de perfil.',
    keywords: [
      'formatador de nome de usuário social',
      'validador de sintaxe de nome de usuário',
      'gerador de nome de usuário de marca',
      'regras de nome de usuário social',
      'verificador de disponibilidade de nome de usuário',
      'verificador de nome de usuário multiplataforma',
      'regras de nome de usuário do instagram',
      'limite de caracteres de nome de usuário do x',
      'conversor de nome de marca para nome de usuário',
    ],
    seo: {
      title: 'Formatador de Nomes de Usuário – Regras | UtilityFlow',
      description:
        'Gere variações de nome de usuário a partir de um nome de marca, valide as regras de X, Instagram, TikTok, YouTube, Threads e GitHub e abra URLs de verificação.',
      primaryKeyword: 'formatador de nomes de usuário',
      secondaryKeywords: [
        'regras de nome de usuário de redes sociais',
        'gerador de variações de nome de usuário de marca',
        'regras de caracteres de nome de usuário do youtube',
        'verificador de disponibilidade de nome de usuário',
      ],
      longTailKeywords: [
        'verificar tamanho de caracteres e símbolos permitidos de nome de usuário de redes sociais',
        'sugestões consistentes de nome de usuário de marca para x instagram tiktok',
        'validar formato de nome de usuário para github youtube e threads',
        'encontrar variações de nome de usuário de marca quando o nome exato está ocupado',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme qualquer nome de marca, projeto ou criador em candidatos limpos de nome de usuário multiplataforma, valide cada candidato conforme os limites oficiais de caracteres e regras de pontuação de seis redes e vá direto para URLs de perfil ao vivo para verificar a disponibilidade.',
  },
  'merge-pdf': {
    slug: 'mesclar-pdf',
    name: 'Mesclar PDF',
    shortDescription:
      'Combine vários documentos PDF em ordem personalizada dentro do seu navegador, sem enviar arquivos para servidores externos.',
    keywords: [
      'mesclar pdf',
      'combinar arquivos pdf',
      'juntar pdf online grátis',
      'mesclador de pdf no navegador',
      'mesclar arquivos pdf grátis',
      'combinar vários pdfs em um',
      'mesclador de pdf sem envio',
      'juntar documentos pdf online',
      'mesclar páginas de pdf em ordem',
    ],
    seo: {
      title: 'Mesclar PDF Grátis – Combine PDFs no Navegador | UtilityFlow',
      description:
        'Combine vários arquivos PDF em um só documento na sequência escolhida, localmente no seu navegador com pdf-lib, sem nenhum envio ao servidor nem limites.',
      primaryKeyword: 'mesclar pdf',
      secondaryKeywords: [
        'combinar arquivos pdf online',
        'juntar páginas de pdf localmente',
        'mesclador de pdf privado',
        'mesclar arquivos pdf grátis',
      ],
      longTailKeywords: [
        'mesclar contratos pdf confidenciais sem enviar ao servidor',
        'combinar vários pdfs e reordenar a sequência no navegador',
        'combinador de documentos pdf grátis no navegador',
        'mesclar arquivos pdf em ordem sem enviar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combine dois ou mais arquivos PDF em um único documento limpo direto na memória do navegador. Veja a contagem de páginas de cada arquivo, reordene documentos com controles para cima/baixo, escolha um nome de arquivo de saída e baixe na hora.',
  },
  'split-pdf': {
    slug: 'dividir-pdf',
    name: 'Dividir e Extrair Páginas de PDF',
    shortDescription:
      'Extraia intervalos de páginas personalizados, páginas ímpares/pares ou divida em PDFs individuais de uma página localmente via pdf-lib.',
    keywords: [
      'dividir pdf',
      'extrair páginas de pdf',
      'separar páginas de pdf',
      'extrator de páginas de pdf',
      'dividir páginas de pdf grátis',
      'divisor de pdf online',
      'extrair páginas de pdf grátis',
      'dividir pdf em páginas individuais',
      'dividir pdf por intervalo de páginas',
    ],
    seo: {
      title: 'Dividir PDF Grátis – Extrair Páginas Online | UtilityFlow',
      description:
        'Extraia intervalos de páginas de PDF (como 1-3, 5), separe páginas ímpares ou pares, ou divida em páginas individuais direto no navegador, sem enviar arquivos.',
      primaryKeyword: 'dividir pdf',
      secondaryKeywords: [
        'extrair páginas de pdf',
        'extrator de intervalo de páginas de pdf',
        'separar pdf em páginas individuais',
        'dividir pdf por intervalo de páginas',
      ],
      longTailKeywords: [
        'extrair páginas 1-3 e 5 de pdf sem envio ao servidor',
        'dividir páginas ímpares e pares de pdf no navegador',
        'separar pdf de várias páginas localmente grátis',
        'dividir pdf e baixar só as páginas selecionadas',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Extraia intervalos exatos de páginas (`1-3, 5, 8-10`), isole páginas ímpares ou pares para remontagem frente e verso, ou divida PDFs mais curtos em arquivos individuais de uma página, tudo dentro da memória do cliente.',
  },
  'images-to-pdf': {
    slug: 'imagens-para-pdf',
    name: 'Conversor de Imagens para PDF',
    shortDescription:
      'Converta imagens PNG, JPG e WebP em um único PDF A4, Carta EUA ou ajustado à imagem, localmente no seu navegador.',
    keywords: [
      'imagens para pdf',
      'jpg para pdf',
      'conversor de png para pdf',
      'webp para pdf',
      'converter imagens para pdf grátis',
      'jpg png para pdf',
      'conversor de foto para pdf',
      'combinar imagens em um pdf',
      'captura de tela para pdf',
    ],
    seo: {
      title: 'Imagens para PDF – Converter JPG, PNG e WebP | UtilityFlow',
      description:
        'Transforme fotos ou capturas em JPG, PNG e WebP em um PDF limpo de várias páginas com A4, Carta EUA ou tamanho exato, tudo no navegador. Sem envios, grátis.',
      primaryKeyword: 'imagens para pdf',
      secondaryKeywords: [
        'conversor de jpg para pdf no navegador',
        'png para pdf online grátis',
        'combinar fotos em pdf',
        'converter imagens para pdf grátis',
      ],
      longTailKeywords: [
        'converter imagens jpg png webp para pdf a4 sem envio',
        'juntar capturas de tela em pdf de várias páginas localmente',
        'ajustar dimensões de imagem à página de pdf sem cortar',
        'transformar fotos de celular em documento pdf grátis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combine digitalizações, recibos ou capturas de tela em JPG, PNG e WebP em um PDF limpo de várias páginas. Ordene as imagens visualmente, escolha A4 Retrato, Carta EUA ou Dimensões Exatas da Imagem, defina margens e gere localmente via `pdf-lib`.',
  },
  'pdf-to-images': {
    slug: 'pdf-para-imagens',
    name: 'PDF para Imagens (PNG / JPG)',
    shortDescription:
      'Renderize páginas de PDF em imagens PNG ou JPG baixáveis com resolução de 1,0× a 2,0× localmente via PDF.js.',
    keywords: [
      'pdf para imagens',
      'pdf para png',
      'conversor de pdf para jpg',
      'renderizar páginas de pdf como imagens',
      'converter pdf para png grátis',
      'converter pdf para jpg',
      'página de pdf para imagem',
      'exportar páginas de pdf como png',
      'salvar pdf como imagem online',
    ],
    seo: {
      title: 'PDF para Imagens – Páginas para PNG e JPG | UtilityFlow',
      description:
        'Renderize páginas de PDF em PNG ou JPG com até 2× de resolução no navegador. Escolha páginas exatas, confira cada renderização e baixe só o que precisar.',
      primaryKeyword: 'pdf para imagens',
      secondaryKeywords: [
        'conversor de pdf para png',
        'pdf para jpg online grátis',
        'extrair página de pdf como imagem',
        'converter pdf para png grátis',
      ],
      longTailKeywords: [
        'converter páginas de pdf para png de alta resolução no navegador',
        'salvar página única de pdf como jpg sem enviar o documento',
        'renderizador de páginas pdfjs para png no navegador',
        'renderizar slides de pdf para imagens png para compartilhar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Rasterize páginas de PDF em imagens PNG sem perdas nítidas ou JPG compacto direto no seu navegador usando o mecanismo de renderização PDF.js da Mozilla — com filtragem de intervalo de páginas, seleção de escala (`1,0×`–`2,0×`) e prévias visuais.',
  },
  'pdf-page-rotator': {
    slug: 'rotacionador-de-paginas-de-pdf',
    name: 'Rotacionador de Páginas de PDF',
    shortDescription:
      'Gire todas as páginas, páginas ímpares/pares ou intervalos específicos de páginas em 90°, 180° ou 270° permanentemente, sem perda de qualidade.',
    keywords: [
      'girar pdf',
      'rotacionador de páginas de pdf',
      'corrigir páginas de pdf de lado',
      'salvar pdf girado',
      'girar páginas de pdf online grátis',
      'girar pdf 90 graus',
      'corrigir pdf girado',
      'girar páginas de pdf permanentemente',
      'corretor de orientação de pdf',
    ],
    seo: {
      title: 'Rotacionador de Páginas de PDF – Corrigir PDF | UtilityFlow',
      description:
        'Gire páginas de PDF de lado ou de cabeça para baixo em 90°, 180° ou 270° em todas as páginas, ímpares/pares ou intervalos, permanentemente, no seu navegador.',
      primaryKeyword: 'rotacionador de páginas de pdf',
      secondaryKeywords: [
        'girar pdf permanentemente',
        'corrigir digitalização de pdf de cabeça para baixo',
        'girar páginas específicas de pdf',
        'girar pdf 90 graus online',
      ],
      longTailKeywords: [
        'girar só as páginas 2 e 4 de um documento pdf online',
        'girar pdf digitalizado 90 graus permanentemente sem recodificar',
        'ferramenta de orientação de páginas de pdf no navegador',
        'girar páginas de pdf de cabeça para baixo permanentemente grátis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrija tabelas de lado em paisagem ou digitalizações de documentos de cabeça para baixo permanentemente no dicionário de páginas do PDF. Aplique rotações de `90°` no sentido horário, `90°` no sentido anti-horário ou `180°` a todas as páginas, folhas ímpares/pares ou intervalos exatos de páginas.',
  },
  'reorder-delete-pdf-pages': {
    slug: 'reordenar-e-excluir-paginas-de-pdf',
    name: 'Reordenar e Excluir Páginas de PDF',
    shortDescription:
      'Inspecione visualmente miniaturas de PDF, mova páginas para cima ou para baixo, duplique folhas ou remova páginas indesejadas localmente.',
    keywords: [
      'reordenar páginas de pdf',
      'excluir páginas de pdf',
      'reorganizar pdf',
      'remover páginas de pdf',
      'reordenar páginas de pdf online',
      'excluir páginas em branco de pdf',
      'duplicar página de pdf',
      'organizar páginas de pdf',
      'mover páginas de pdf',
    ],
    seo: {
      title: 'Reordenar Páginas de PDF – Mover e Excluir | UtilityFlow',
      description:
        'Reordene páginas de PDF visualmente no seu navegador: mova, duplique ou exclua páginas de qualquer PDF com miniaturas ao vivo e baixe um arquivo limpo.',
      primaryKeyword: 'reordenar páginas de pdf',
      secondaryKeywords: [
        'excluir páginas de pdf',
        'reorganizar pdf online',
        'remover páginas em branco de pdf',
        'reordenar páginas de pdf online',
      ],
      longTailKeywords: [
        'reordenar e remover páginas de pdf visualmente sem envio ao servidor',
        'duplicar uma página dentro de pdf existente no navegador',
        'reorganizar sequência de páginas de pdf grátis no navegador',
        'reordenar páginas de pdf online grátis no navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Confira cartões de páginas renderizadas do seu PDF, mova páginas fora do lugar para frente ou para trás, duplique folhas de capa ou modelo, exclua páginas em branco e exporte um PDF limpo e reordenado localmente.',
  },
  'pdf-watermark': {
    slug: 'marca-dagua-em-pdf',
    name: 'Ferramenta de Marca d’Água em PDF',
    shortDescription:
      'Carimbe marcas d’água de texto diagonais personalizáveis como CONFIDENCIAL ou RASCUNHO em páginas de PDF com tamanho e opacidade personalizados.',
    keywords: [
      'marca d’água em pdf',
      'adicionar marca d’água ao pdf',
      'carimbo de pdf confidencial',
      'marca d’água de rascunho em pdf',
      'marca d’água em pdf online grátis',
      'adicionar carimbo de rascunho ao pdf',
      'marca d’água confidencial em pdf',
      'criador de marca d’água em pdf',
      'carimbar páginas de pdf',
    ],
    seo: {
      title: 'Marca d’Água em PDF – Carimbos Grátis Online | UtilityFlow',
      description:
        'Adicione uma marca d’água a qualquer PDF no navegador: texto diagonal ou centralizado, tamanho, opacidade, ângulo e cor, sem envio — grátis e privado.',
      primaryKeyword: 'marca d’água em pdf',
      secondaryKeywords: [
        'adicionar carimbo confidencial ao pdf',
        'marca d’água em pdf no navegador',
        'ferramenta de sobreposição de rascunho em pdf',
        'marca d’água em pdf online grátis',
      ],
      longTailKeywords: [
        'adicionar marca d’água diagonal semitransparente ao pdf sem envio',
        'marca d’água só na primeira página de contrato em pdf',
        'carimbo de texto vetorial em páginas de pdf grátis',
        'adicionar marca d’água confidencial ao pdf grátis no navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Carimbe marcas d’água de texto vetorial centralizadas ou diagonais — como `CONFIDENCIAL`, `RASCUNHO` ou `NÃO DISTRIBUIR` — em todas as páginas ou na capa de qualquer PDF, com controles ao vivo de tamanho de fonte, opacidade, ângulo de rotação e cor da marca.',
  },
  'add-pdf-page-numbers': {
    slug: 'adicionar-numeros-de-pagina-ao-pdf',
    name: 'Adicionar Números de Página ao PDF',
    shortDescription:
      'Insira números de página vetoriais limpos ("Página 1 de N", "1 / N" ou "1") em documentos PDF, com pulo da capa.',
    keywords: [
      'adicionar números de página ao pdf',
      'numeração de páginas de pdf',
      'numerar páginas de pdf online',
      'números de página estilo bates',
      'numerar páginas de pdf',
      'adicionar números de página ao pdf grátis',
      'números de página de rodapé de pdf',
      'página x de n em pdf',
      'paginar pdf online',
    ],
    seo: {
      title: 'Adicionar Números de Página ao PDF – Grátis | UtilityFlow',
      description:
        'Adicione números de página a arquivos PDF no navegador com rótulos vetoriais limpos, pulo da capa e número inicial personalizado — sem envio, grátis e privado.',
      primaryKeyword: 'adicionar números de página ao pdf',
      secondaryKeywords: [
        'ferramenta de número de página de pdf',
        'numerar páginas de pdf no navegador',
        'pular capa na numeração de pdf',
        'paginar pdf online',
      ],
      longTailKeywords: [
        'adicionar números de rodapé página 1 de n ao pdf mesclado',
        'iniciar numeração de pdf na página 2 pulando a capa',
        'ferramenta de paginação vetorial de pdf no navegador',
        'adicionar números de página ao pdf grátis sem envio',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Numere pacotes mesclados, peças jurídicas ou trabalhos acadêmicos de forma limpa usando tipografia vetorial nítida — escolhendo `Página 1 de N`, `1 / N` ou dígitos simples, alinhamento inferior/superior, números iniciais personalizados e pulo opcional da capa.',
  },
  'pdf-metadata-editor': {
    slug: 'editor-de-metadados-de-pdf',
    name: 'Editor e Inspetor de Metadados de PDF',
    shortDescription:
      'Veja, atualize ou remova tags de Título, Autor, Assunto, Palavras-chave, Criador e Produtor de PDF em privado na memória do navegador.',
    keywords: [
      'editor de metadados de pdf',
      'visualizador de metadados de pdf',
      'remover autor de pdf',
      'remover metadados de pdf',
      'editar metadados de pdf',
      'mudar título de pdf',
      'editor de propriedades de pdf',
      'removedor de autor de pdf',
      'ver metadados de pdf',
    ],
    seo: {
      title: 'Editor de Metadados de PDF – Ver e Remover | UtilityFlow',
      description:
        'Use este editor de metadados de PDF para ver, atualizar ou remover Título, Autor, Assunto, Palavras-chave, Criador e Produtor em privado no navegador, grátis.',
      primaryKeyword: 'editor de metadados de pdf',
      secondaryKeywords: [
        'visualizador de metadados de pdf',
        'remover metadados de autor de pdf',
        'mudar título de documento pdf',
        'editar metadados de pdf online',
      ],
      longTailKeywords: [
        'inspecionar e remover metadados ocultos de autor de pdf online',
        'mudar título de pdf mostrado na aba do navegador grátis',
        'editor privado de propriedades de pdf no navegador',
        'remover metadados de autor de pdf antes de compartilhar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Revele propriedades ocultas guardadas dentro de cabeçalhos de PDF — incluindo Título do Documento, Autor, Assunto, Palavras-chave, software Criador e Produtor — para definir títulos limpos de aba do navegador ou remover metadados pessoais de identificação antes de publicar publicamente.',
  },
  'pdf-text-extractor': {
    slug: 'extrator-de-texto-de-pdf',
    name: 'Extrator de Texto de PDF',
    shortDescription:
      'Extraia texto selecionável página por página de documentos PDF em texto simples copiável ou downloads .txt via PDF.js.',
    keywords: [
      'extrator de texto de pdf',
      'extrair texto de pdf',
      'conversor de pdf para txt',
      'copiar texto de pdf',
      'extrair texto de pdf online',
      'pdf para texto grátis',
      'pdf para txt',
      'obter texto de pdf',
      'ferramenta de cópia de texto de pdf',
    ],
    seo: {
      title: 'Extrator de Texto de PDF – Copiar para .TXT | UtilityFlow',
      description:
        'Extraia texto embutido de PDF página por página no navegador, com marcadores de página, contagem de palavras, cópia e download .txt — grátis e privado.',
      primaryKeyword: 'extrator de texto de pdf',
      secondaryKeywords: [
        'pdf para txt online grátis',
        'extrair texto de pdf no navegador',
        'copiar texto de documento pdf',
        'pdf para texto grátis',
      ],
      longTailKeywords: [
        'extrair texto de pdf confidencial localmente sem envio',
        'converter pdf baseado em texto em arquivo txt simples com marcadores de página',
        'detectar pdf digitalizado só com imagem sem camada de texto',
        'extrair texto de pdf para txt grátis no navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Leia e extraia texto Unicode embutido direto de PDFs baseados em texto página por página usando PDF.js, com cabeçalhos opcionais `--- Página N ---`, estatísticas de palavras/bytes, cópia com um clique e exportação `.txt` — além de detecção transparente quando um PDF é digitalizado/só imagem.',
  },
};
