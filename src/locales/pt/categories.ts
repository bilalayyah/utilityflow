import type { CategoryLocaleOverride } from '../types';

/**
 * Portuguese (pt-BR) overrides for the 7 categories, keyed by category id.
 * Filled by Phase 2 translation. Every category — slug (matches
 * CATEGORY_LOCALE_SLUGS.pt in src/locales/config.ts), name, shortName,
 * description, longDescription, seo, sampleToolNames (5).
 * Source: src/locales/es/categories.ts (Spanish twin — same structure,
 * same tool picks, names translated into Brazilian Portuguese).
 */
export const PT_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'ferramentas-de-texto-e-escrita',
    name: 'Ferramentas de texto e escrita',
    shortName: 'Texto e escrita',
    description:
      'Analise contagem de palavras, formate texto, limpe espaços em branco, converta maiúsculas e minúsculas e inspecione a legibilidade diretamente no seu navegador.',
    longDescription:
      'Utilitários precisos de escrita e manipulação de texto, criados para escritores, editores, equipes de conteúdo e estudantes. Cada operação de texto é executada na hora no seu dispositivo, sem enviar rascunhos para servidores remotos.',
    seo: {
      title: 'Ferramentas de texto e escrita online | UtilityFlow',
      description:
        'Ferramentas de texto e escrita no navegador: contadores de palavras e caracteres, conversores de maiúsculas e minúsculas e limpadores de texto gratuitos.',
      keywords: [
        'ferramentas de texto',
        'utilitários de escrita',
        'contador de palavras',
        'contador de caracteres',
        'conversor de maiúsculas',
      ],
    },
    sampleToolNames: [
      'Contador de palavras',
      'Contador de caracteres',
      'Conversor de maiúsculas e minúsculas',
      'Remover linhas duplicadas',
      'Comparador de textos',
    ],
  },
  developer: {
    slug: 'ferramentas-para-desenvolvedores',
    name: 'Ferramentas para desenvolvedores',
    shortName: 'Desenvolvedores',
    description:
      'Formate JSON, codifique Base64, teste expressões regulares, decodifique JWT e gere hashes sem idas e vindas ao servidor.',
    longDescription:
      'Utilitários de engenharia do dia a dia, criados para depuração rápida e transformação limpa de dados. Cole dados, inspecione formatos estruturados e valide a sintaxe localmente, para que tokens sensíveis e trechos de configuração nunca saiam do seu computador.',
    seo: {
      title: 'Ferramentas para desenvolvedores: JSON, regex e Base64',
      description:
        'Utilitários para desenvolvedores no navegador: formatação JSON, testes de regex, codificação Base64, inspeção de JWT e geração de UUID com total segurança.',
      keywords: [
        'ferramentas para desenvolvedores',
        'formatador JSON',
        'codificador Base64',
        'testador de regex',
        'decodificador JWT',
      ],
    },
    sampleToolNames: [
      'Formatador e validador JSON',
      'Codificador / Decodificador Base64',
      'Codificador / Decodificador de URL',
      'Gerador de UUID',
      'Testador de expressões regulares',
    ],
  },
  calculators: {
    slug: 'calculadoras',
    name: 'Calculadoras',
    shortName: 'Calculadoras',
    description:
      'Calcule idades, porcentagens, cronogramas de empréstimos, IMC, conversões de unidades e margens comerciais com precisão determinística.',
    longDescription:
      'Calculadoras precisas de finanças, datas, saúde e matemática, criadas para clareza. Confira detalhamentos passo a passo, saídas tabulares limpas e recálculos instantâneos ao ajustar as entradas.',
    seo: {
      title: 'Calculadoras online: idade, porcentagem e empréstimos',
      description:
        'Calculadoras online rápidas e transparentes de idade, porcentagens, parcelas de empréstimos, margens e conversões de unidades, com resultados instantâneos.',
      keywords: [
        'calculadoras online',
        'calculadora de idade',
        'calculadora de porcentagem',
        'calculadora de empréstimos',
        'conversor de unidades',
      ],
    },
    sampleToolNames: [
      'Calculadora de idade',
      'Calculadora de porcentagem',
      'Calculadora de empréstimos e EMI',
      'Calculadora de descontos e margens',
      'Calculadora de diferença entre datas',
    ],
  },
  'social-media': {
    slug: 'ferramentas-de-redes-sociais',
    name: 'Ferramentas de redes sociais',
    shortName: 'Redes sociais',
    description:
      'Crie links de rastreamento UTM, visualize a extensão das publicações, gere códigos QR e formate legendas para os canais sociais modernos.',
    longDescription:
      'Auxiliares práticos de marketing e publicação para criadores, equipes de crescimento e administradores de comunidade. Padronize os parâmetros de rastreamento de campanhas, revise os limites de caracteres das plataformas e gere códigos QR escaneáveis quando precisar.',
    seo: {
      title: 'Ferramentas de redes sociais: QR, UTM, hashtags e bio',
      description:
        'Crie links UTM, gere códigos QR, revise os limites de caracteres das redes sociais e formate hashtags e biografias com utilitários limpos de navegador.',
      keywords: [
        'ferramentas de redes sociais',
        'gerador de códigos QR',
        'criador de UTM',
        'formatador de hashtags',
        'contador de legendas',
      ],
    },
    sampleToolNames: [
      'Gerador de códigos QR',
      'Criador de links UTM',
      'Verificador de limite de caracteres sociais',
      'Formatador de texto Unicode estilizado',
      'Formatador de quebras de linha para biografias',
    ],
  },
  pdf: {
    slug: 'ferramentas-pdf',
    name: 'Ferramentas PDF',
    shortName: 'Ferramentas PDF',
    description:
      'Combine, divida, reordene, adicione marcas d’água e converta documentos PDF dentro do seu navegador, sem enviar arquivos privados.',
    longDescription:
      'Fluxos de trabalho com documentos criados para confidencialidade. Processe contratos, faturas e pacotes de estudo diretamente na memória do cliente com WebAssembly e as APIs de canvas do navegador, em vez de servidores de arquivos remotos.',
    seo: {
      title: 'Ferramentas PDF: combinar, dividir e converter PDF',
      description:
        'Combine, divida, gire e converta arquivos PDF localmente no seu navegador, sem enviar documentos sensíveis para servidores de terceiros nem expô-los online.',
      keywords: [
        'ferramentas PDF',
        'combinar PDF',
        'dividir PDF',
        'imagem para PDF',
        'editor de PDF no navegador',
      ],
    },
    sampleToolNames: [
      'Combinar PDF',
      'Dividir PDF',
      'Imagens para PDF',
      'Rotacionador de páginas PDF',
      'Inspetor de metadados PDF',
    ],
  },
  seo: {
    slug: 'ferramentas-seo',
    name: 'Ferramentas SEO',
    shortName: 'Ferramentas SEO',
    description:
      'Visualize trechos SERP, gere tags OpenGraph, crie robots.txt e mapas de site XML e inspecione a densidade de palavras-chave.',
    longDescription:
      'Utilitários técnicos e de otimização on-page para editores, fundadores independentes e especialistas em SEO. Valide o tamanho dos títulos, redija metadados estruturados e crie slugs de URL limpos em segundos.',
    seo: {
      title: 'Ferramentas SEO online: pré-visualização SERP e metatags',
      description:
        'Otimize suas páginas com utilitários SEO gratuitos: pré-visualizações SERP, geradores de metatags, criadores de robots.txt e verificadores de densidade.',
      keywords: [
        'ferramentas SEO',
        'gerador de metatags',
        'pré-visualização SERP',
        'gerador de robots.txt',
        'gerador de slugs',
      ],
    },
    sampleToolNames: [
      'Gerador de metatags e OpenGraph',
      'Pré-visualização de trechos SERP',
      'Gerador de slugs de URL',
      'Gerador de robots.txt',
      'Gerador de marcação Schema',
    ],
  },
  'image-file': {
    slug: 'ferramentas-de-imagem-e-arquivos',
    name: 'Ferramentas de imagem e arquivos',
    shortName: 'Imagem e arquivos',
    description:
      'Comprima imagens, redimensione, converta PNG/JPG/WebP, teste o contraste WCAG, escaneie códigos QR, calcule hashes de arquivos e crie favicons localmente.',
    longDescription:
      'Utilitários rápidos de mídia, criptografia e arquivos, com HTML5 Canvas, a API Web Crypto e as APIs de arquivos do lado do cliente. Otimize recursos web para Core Web Vitals, verifique somas de verificação SHA-256 de arquivos, extraia paletas de imagens e gere favicons sem enviar arquivos.',
    seo: {
      title: 'Ferramentas de imagem e arquivos: comprimir e converter',
      description:
        'Comprima, redimensione, gire e converta imagens entre PNG, JPG e WebP localmente, verifique somas de verificação, escaneie códigos QR e crie favicons.',
      keywords: [
        'ferramentas de imagem',
        'compressor de imagens',
        'redimensionador de imagens',
        'conversor WebP',
        'verificador de contraste de cor',
      ],
    },
    sampleToolNames: [
      'Compressor de imagens',
      'Redimensionador e cortador de imagens',
      'Conversor de formato de imagem',
      'Verificador de contraste de cor',
      'Gerador de senhas criptográficas',
    ],
  },
};
