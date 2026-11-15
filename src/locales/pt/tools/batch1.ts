import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — Batch 1: Text & Writing tools (15 tools).
 * Translated from the English definitions in src/registry/batches/batch1/
 * (textToolsPart1/2/3.ts). Brazilian Portuguese, neutral, "você" forms.
 */
export const PT_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'contador-de-palavras',
    name: 'Contador de Palavras',
    shortDescription:
      'Conte palavras, caracteres, frases, parágrafos, tempo de leitura e as palavras-chave mais repetidas na hora.',
    keywords: [
      'contador de palavras',
      'contar palavras online',
      'contar palavras de um texto',
      'calculadora de tempo de leitura',
      'contador de frases',
      'contador de parágrafos',
      'contador de palavras grátis',
      'calculadora de tempo de fala',
      'contar caracteres e palavras',
    ],
    seo: {
      title: 'Contador de Palavras: Conte Palavras Online | UtilityFlow',
      description:
        'Conte palavras, caracteres, frases e parágrafos na hora e veja estimativas de tempo de leitura e de fala, tudo calculado no seu navegador, sem enviar nada.',
      primaryKeyword: 'contador de palavras',
      secondaryKeywords: ['contador de palavras online', 'ferramenta de contagem de palavras', 'estimador de tempo de leitura', 'contador de parágrafos'],
      longTailKeywords: ['contar palavras e caracteres online grátis', 'estimar tempo de leitura e de fala de um texto', 'contador de palavras no navegador sem enviar arquivos', 'verificar quantidade de palavras de uma redação online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Meça a contagem exata de palavras, o total de caracteres, a densidade de frases e as durações estimadas de leitura e de fala em tempo real, sem enviar seu rascunho para nenhum servidor.',
  },
  'character-counter': {
    slug: 'contador-de-caracteres',
    name: 'Contador de Caracteres',
    shortDescription:
      'Meça o tamanho exato em caracteres com e sem espaços, bytes UTF-8 e limites de caracteres de redes sociais e SEO.',
    keywords: [
      'contador de caracteres',
      'contador de letras',
      'verificador de tamanho de meta descrição',
      'contador de bytes utf-8',
      'ferramenta de limite de caracteres',
      'contar caracteres online',
      'verificador de tamanho de texto',
      'verificador de tamanho de título seo',
      'contador de caracteres de sms',
    ],
    seo: {
      title: 'Contador de Caracteres: Limites e Bytes UTF-8 | UtilityFlow',
      description:
        'Conte caracteres com e sem espaços, letras, dígitos e bytes UTF-8 e acompanhe o progresso em relação aos limites de SEO e redes sociais, tudo no seu navegador.',
      primaryKeyword: 'contador de caracteres',
      secondaryKeywords: ['contagem de caracteres online', 'calculadora de tamanho de string', 'tamanho de título de meta', 'verificador de tamanho de texto'],
      longTailKeywords: ['contar caracteres sem espaços online', 'verificar limite de caracteres da meta descrição de seo', 'calcular tamanho em bytes utf-8 de um texto', 'verificar limite de caracteres do twitter online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Acompanhe contagens exatas de caracteres, letras, dígitos numéricos, espaços em branco e tamanhos em bytes UTF-8 enquanto monitora barras de progresso ao vivo para trechos de SEO, segmentos de SMS e feeds sociais.',
  },
  'case-converter': {
    slug: 'conversor-de-caixa',
    name: 'Conversor de Caixa',
    shortDescription:
      'Converta textos entre MAIÚSCULAS, minúsculas, Título, Frase, camelCase, snake_case e kebab-case.',
    keywords: [
      'conversor de caixa',
      'conversor de título',
      'maiúsculas para minúsculas',
      'conversor camelcase',
      'gerador de snake case',
      'conversor para maiúsculas',
      'conversor para minúsculas',
      'conversor de caixa de frase',
      'conversor pascalcase',
    ],
    seo: {
      title: 'Conversor de Caixa: Título, Frase e camelCase | UtilityFlow',
      description:
        'Transforme textos entre maiúsculas, minúsculas, Título, Frase, camelCase, PascalCase, snake_case e kebab-case com um clique, direto no seu navegador, grátis.',
      primaryKeyword: 'conversor de caixa',
      secondaryKeywords: ['conversor de título', 'ferramenta de caixa de frase', 'mudar caixa do texto', 'maiúsculas para minúsculas'],
      longTailKeywords: ['converter texto em maiúsculas para caixa de frase', 'converter string para camelcase e snake_case', 'ferramenta online de capitalização de título', 'mudar maiúsculas para minúsculas online grátis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrija textos digitados sem querer com Caps Lock, padronize títulos de artigos em Título ou formate identificadores de variáveis em camelCase, PascalCase, snake_case ou kebab-case com um só clique.',
  },
  'remove-duplicate-lines': {
    slug: 'remover-linhas-duplicadas',
    name: 'Remover Linhas Duplicadas',
    shortDescription:
      'Elimine linhas duplicadas de listas e registros, com opções de sensibilidade a maiúsculas, remoção de espaços e ordenação alfabética.',
    keywords: [
      'remover linhas duplicadas',
      'eliminar duplicatas de lista online',
      'filtro de linhas únicas',
      'remover linhas repetidas',
      'remover duplicatas de uma lista',
      'eliminar e-mails duplicados de lista',
      'linhas únicas online',
      'remover linhas repetidas',
      'limpar entradas duplicadas',
    ],
    seo: {
      title: 'Remover Linhas Duplicadas: Limpe Listas Online | UtilityFlow',
      description:
        'Remova linhas repetidas de listas, e-mails, URLs ou registros na hora, com remoção de espaços, sensibilidade a maiúsculas e ordenação, no seu navegador.',
      primaryKeyword: 'remover linhas duplicadas',
      secondaryKeywords: ['removedor de linhas duplicadas', 'eliminar lista de texto', 'ferramenta de linhas únicas', 'remover entradas duplicadas'],
      longTailKeywords: ['remover linhas duplicadas mantendo a ordem original', 'eliminar e-mails duplicados sem diferenciar maiúsculas', 'limpar linhas repetidas de texto online', 'remover duplicatas de lista de e-mail online grátis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Limpe listas bagunçadas, palavras-chave exportadas, endereços de e-mail ou registros de servidor removendo entradas duplicadas e controlando a remoção de espaços, a sensibilidade a maiúsculas e a ordem da saída.',
  },
  'text-diff-checker': {
    slug: 'comparador-de-texto',
    name: 'Comparador de Texto',
    shortDescription:
      'Compare dois blocos de texto linha por linha para identificar adições, exclusões e linhas sem alteração.',
    keywords: [
      'comparador de texto',
      'comparar dois textos',
      'ferramenta de diff online',
      'comparação de texto',
      'comparar dois arquivos de texto',
      'ferramenta diff online',
      'encontrar diferenças entre textos',
      'ferramenta de comparação de texto',
      'diff linha por linha',
    ],
    seo: {
      title: 'Comparador de Texto: Compare Textos Online | UtilityFlow',
      description:
        'Compare duas versões de texto, código ou configuração lado a lado, com indicadores de linhas adicionadas e removidas no seu navegador, sem enviar nada.',
      primaryKeyword: 'comparador de texto',
      secondaryKeywords: ['comparar texto online', 'verificador de diff', 'ferramenta de diferença de texto', 'ferramenta de diff online'],
      longTailKeywords: ['comparar dois arquivos de texto linha por linha online', 'verificador de diff ignorando espaços e maiúsculas', 'ferramenta de comparação de texto no navegador', 'comparar duas versões de um documento online grátis'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Identifique cada inserção, exclusão e edição entre duas versões de um artigo, uma cláusula de contrato ou um trecho de configuração usando um mecanismo de diff por linha de maior subsequência comum.',
  },
  'whitespace-remover': {
    slug: 'removedor-de-espacos-em-branco',
    name: 'Removedor de Espaços em Branco',
    shortDescription:
      'Remova espaços extras, tabulações, linhas em branco e quebras de linha indesejadas de textos copiados de PDF ou da web.',
    keywords: [
      'removedor de espaços em branco',
      'remover espaços extras',
      'removedor de quebras de linha',
      'remover linhas em branco',
      'limpar texto copiado de pdf',
      'remover espaços no fim',
      'corrigir quebras de linha de pdf',
      'juntar vários espaços',
      'limpar texto online',
    ],
    seo: {
      title: 'Removedor de Espaços: Limpe Textos Colados | UtilityFlow',
      description:
        'Remova espaços extras, tabulações e linhas em branco de textos copiados de PDF no seu navegador — rápido, grátis e totalmente privado, sem cadastro online.',
      primaryKeyword: 'removedor de espaços em branco',
      secondaryKeywords: ['remover espaços extras', 'remover quebras de linha', 'limpar espaços em branco de texto', 'remover linhas em branco'],
      longTailKeywords: ['remover espaços extras e linhas em branco online', 'corrigir quebras de linha ao copiar de pdf', 'converter tabulações e vários espaços em um só espaço', 'remover espaços no fim de texto copiado'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Limpe cópias bagunçadas coladas de PDFs, e-mails, planilhas ou páginas da web juntando espaços repetidos, convertendo tabulações, aparando as bordas das linhas e normalizando quebras de linha.',
  },
  'sort-lines': {
    slug: 'ordenar-linhas',
    name: 'Ordenar Linhas Alfabeticamente',
    shortDescription:
      'Ordene listas de A a Z, de Z a A, naturalmente (1, 2, 10), por tamanho de caracteres, ao contrário ou embaralhadas.',
    keywords: [
      'ordenar linhas alfabeticamente',
      'alfabetizar lista online',
      'ferramenta de ordenação natural',
      'ordenar texto por tamanho',
      'ordenar lista de a a z',
      'ferramenta de ordem alfabética',
      'embaralhar linhas online',
      'ordenar linhas de z a a',
      'inverter ordem das linhas',
    ],
    seo: {
      title: 'Ordenar Linhas: Ordem Alfabética A-Z e Natural | UtilityFlow',
      description:
        'Ordene linhas de A a Z, de Z a A, em ordem numérica natural, por tamanho, ao contrário ou embaralhadas, com remoção de duplicatas e de linhas em branco.',
      primaryKeyword: 'ordenar linhas em ordem alfabética',
      secondaryKeywords: ['alfabetizar lista', 'ordenador de linhas de texto', 'ordenação natural online', 'ordenar linhas de a a z'],
      longTailKeywords: ['ordenar lista alfabeticamente com números em ordem natural', 'ordenar linhas por tamanho do menor para o maior', 'alfabetizar e remover linhas duplicadas', 'inverter ordem das linhas online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organize listas, bibliografias, SKUs de estoque ou imports de código em ordem alfabética, numérica com ordenação natural, por tamanho de caracteres ou em ordem inversa.',
  },
  'find-and-replace': {
    slug: 'localizar-e-substituir',
    name: 'Localizar e Substituir Texto',
    shortDescription:
      'Busque e substitua strings em textos com sensibilidade a maiúsculas, correspondência de palavra inteira e suporte a RegExp.',
    keywords: [
      'localizar e substituir texto',
      'substituição de texto em massa',
      'localizar e substituir com regex',
      'buscar e substituir online',
      'substituir texto online',
      'localizar e substituir palavras',
      'substituir com regex online',
      'substituir todas as ocorrências',
      'ferramenta de substituição de texto',
    ],
    seo: {
      title: 'Localizar e Substituir Texto: Em Massa e Regex | UtilityFlow',
      description:
        'Localize e substitua textos no navegador com contagem ao vivo, sensibilidade a maiúsculas, palavras inteiras e grupos de captura RegExp — sem cadastro.',
      primaryKeyword: 'localizar e substituir texto',
      secondaryKeywords: ['localizar e substituir online', 'ferramenta de substituição regex', 'substituir texto em massa', 'substituir texto online'],
      longTailKeywords: ['localizar e substituir só palavras inteiras online', 'localizar e substituir com regex e grupos de captura', 'substituir strings de texto em massa no navegador', 'substituir todas as ocorrências em texto online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Faça edições rápidas de busca e substituição em massa em prosa, trechos de CSV ou blocos de código usando correspondência exata de texto, limites de palavra inteira ou grupos de captura de expressões regulares.',
  },
  'text-reverser': {
    slug: 'inversor-de-texto',
    name: 'Inversor de Texto',
    shortDescription:
      'Inverta strings de texto inteiras, inverta a ordem das palavras, vire as letras de cada palavra ou inverta a sequência de linhas.',
    keywords: [
      'inversor de texto',
      'inverter string online',
      'inverter palavras',
      'inverter linhas',
      'inverter caracteres de texto',
      'virar texto online',
      'gerador de texto espelhado',
      'inverter ordem de frases',
      'gerador de texto ao contrário',
    ],
    seo: {
      title: 'Inversor de Texto: Inverta Palavras e Linhas | UtilityFlow',
      description:
        'Inverta caracteres, troque a ordem das palavras, espelhe cada palavra ou inverta linhas na hora — seguro para Unicode, grátis e privado, sem cadastro.',
      primaryKeyword: 'inversor de texto',
      secondaryKeywords: ['inverter texto online', 'inverter ordem das palavras', 'inverter linhas', 'virar texto online'],
      longTailKeywords: ['inverter cada palavra de uma frase online', 'inverter ordem das linhas de um arquivo de texto', 'inversor de string seguro para unicode', 'inverter caracteres de texto online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Vire sequências de caracteres, inverta a ordem das palavras por linha, espelhe as letras dentro de cada palavra ou inverta listas com várias linhas de baixo para cima, com tratamento que respeita Unicode.',
  },
  'lorem-ipsum-generator': {
    slug: 'gerador-de-lorem-ipsum',
    name: 'Gerador de Lorem Ipsum',
    shortDescription:
      'Gere parágrafos, frases ou contagens exatas de palavras de texto de preenchimento, com tags HTML <p> opcionais.',
    keywords: [
      'gerador de lorem ipsum',
      'gerador de texto de preenchimento',
      'texto fictício',
      'lorem ipsum html',
      'texto lorem ipsum',
      'gerador de texto fictício',
      'parágrafos de preenchimento',
      'palavras lorem ipsum',
      'gerador de texto de exemplo',
    ],
    seo: {
      title: 'Gerador de Lorem Ipsum: Texto de Exemplo | UtilityFlow',
      description:
        'Gere texto Lorem Ipsum por parágrafos, frases ou contagem exata de palavras, com tags HTML opcionais para mockups e layouts — sem cadastro, grátis e online.',
      primaryKeyword: 'gerador de lorem ipsum',
      secondaryKeywords: ['texto de preenchimento', 'gerador de texto fictício', 'parágrafos lorem ipsum', 'gerador de texto de exemplo'],
      longTailKeywords: ['gerar lorem ipsum por contagem de palavras', 'gerador de lorem ipsum com tags p html', 'texto de preenchimento limpo para mockups de interface', 'gerador de lorem ipsum para mockup de site'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Crie texto de preenchimento limpo ajustado a contagens exatas de parágrafos, frases ou palavras para wireframes, testes de tipografia e protótipos de layout — com tags de parágrafo HTML opcionais.',
  },
  'readability-checker': {
    slug: 'verificador-de-legibilidade',
    name: 'Verificador de Legibilidade',
    shortDescription:
      'Calcule as notas Flesch Reading Ease, Flesch-Kincaid, Gunning Fog e SMOG de legibilidade.',
    keywords: [
      'verificador de legibilidade',
      'flesch reading ease',
      'nível flesch-kincaid',
      'calculadora gunning fog',
      'índice de legibilidade smog',
      'verificador de nível de leitura',
      'verificador de nota de legibilidade',
      'legibilidade por nível escolar',
      'verificar legibilidade de texto online',
    ],
    seo: {
      title: 'Verificador de Legibilidade: Flesch-Kincaid | UtilityFlow',
      description:
        'Confira as notas Flesch Reading Ease, Flesch-Kincaid, Gunning Fog e SMOG com o verificador de legibilidade — grátis, privado e sem cadastro, no seu navegador.',
      primaryKeyword: 'verificador de legibilidade',
      secondaryKeywords: ['calculadora de flesch reading ease', 'verificador de nível escolar', 'ferramenta de nível de leitura', 'calculadora de índice gunning fog'],
      longTailKeywords: ['verificar nível flesch-kincaid online', 'calcular índice gunning fog e smog de legibilidade', 'melhorar nota de legibilidade de artigo no navegador', 'qual é uma boa nota flesch reading ease'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Avalie como é fácil entender sua escrita usando quatro fórmulas consagradas de legibilidade — Flesch Reading Ease, Flesch-Kincaid, Gunning Fog e SMOG — junto com a detecção de palavras complexas.',
  },
  'word-frequency-counter': {
    slug: 'contador-de-frequencia-de-palavras',
    name: 'Contador de Frequência de Palavras',
    shortDescription:
      'Conte frequências de frases de 1, 2 e 3 palavras com filtro de stop words e exportação CSV em um clique para planilhas.',
    keywords: [
      'contador de frequência de palavras',
      'contador de frequência de frases',
      'contador de n-gramas',
      'analisador de repetição de palavras',
      'analisador de frequência de frases',
      'ferramenta de frequência de palavras',
      'contar palavras repetidas online',
      'contador de ocorrência de palavras',
      'análise de frequência de texto',
    ],
    seo: {
      title: 'Contador de Frequência de Palavras e CSV | UtilityFlow',
      description:
        'Conte a frequência de frases de 1, 2 e 3 palavras em qualquer texto, com filtro de stop words e exportação CSV em um clique para planilhas.',
      primaryKeyword: 'contador de frequência de palavras',
      secondaryKeywords: ['analisador de frequência de palavras', 'analisador de frequência de frases', 'ferramenta de ocorrência de palavras', 'contador de frequência de n-gramas'],
      longTailKeywords: ['contar frequência de palavras e porcentagem de densidade online', 'analisar frases de 2 e 3 palavras em texto', 'exportar tabela de frequência de palavras para csv', 'analisar frases repetidas em rascunhos longos'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audite rascunhos de conteúdo quanto ao equilíbrio de palavras-chave, frases usadas em excesso e padrões de n-gramas com várias palavras, com tabelas de frequência instantâneas, filtro de stop words e relatórios CSV para baixar.',
  },
  'text-to-slug': {
    slug: 'conversor-de-texto-para-slug',
    name: 'Conversor de Texto para Slug',
    shortDescription:
      'Converta qualquer texto em slugs de URL limpos para código, nomes de arquivo e chaves de banco de dados, com transliteração de acentos e modo em lote.',
    keywords: [
      'texto para slug',
      'slugificar texto online',
      'slugify online',
      'formatador de url seo',
      'conversor de slug',
      'criar slug de url',
      'conversor de título para slug',
      'criador de slug de url limpo',
      'gerador de slug em lote',
    ],
    seo: {
      title: 'Conversor de Texto para Slug: Programador | UtilityFlow',
      description:
        'Converta qualquer texto em slugs de URL limpos para código, nomes de arquivo e chaves de banco de dados, com transliteração de acentos e modo em lote.',
      primaryKeyword: 'conversor de texto para slug',
      secondaryKeywords: ['slugify texto', 'slugify string', 'gerador de url limpa', 'ferramenta de título para slug'],
      longTailKeywords: ['converter título de artigo em slug de url amigável para seo', 'converter vários cabeçalhos em slugs em lote', 'transliterar caracteres acentuados para ascii online', 'separador de slug com hífen ou underline'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme títulos de blog, nomes de produtos e calendários de conteúdo com várias linhas em slugs ASCII limpos e seguros para URL, com transliteração automática de acentos, controles de delimitador e remoção opcional de stop words.',
  },
  'markdown-previewer': {
    slug: 'visualizador-de-markdown',
    name: 'Visualizador de Markdown e Exportador de HTML',
    shortDescription:
      'Escreva Markdown em um editor dividido ao vivo, confira a formatação renderizada com segurança e copie ou exporte HTML limpo.',
    keywords: [
      'visualizador de markdown',
      'markdown para html',
      'editor de markdown online',
      'visualizador de markdown ao vivo',
      'editor markdown online',
      'renderizar markdown online',
      'conversor de markdown para html',
      'pré-visualizar markdown de readme',
      'exportador de html markdown',
    ],
    seo: {
      title: 'Markdown: Visualizador e Exportador de HTML | UtilityFlow',
      description:
        'Escreva Markdown e veja a renderização ao vivo, inspecione o HTML compilado e copie ou baixe um documento HTML limpo — grátis, no seu navegador e sem cadastro.',
      primaryKeyword: 'visualizador de markdown',
      secondaryKeywords: ['conversor de markdown para html', 'editor de markdown online', 'pré-visualização de markdown online', 'editor de markdown ao vivo'],
      longTailKeywords: ['visualizador de markdown ao vivo com exportação de html', 'converter readme markdown em html online', 'editor de markdown no navegador sem enviar arquivos', 'pré-visualizar readme do github antes de commitar'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Escreva arquivos README, documentação e notas formatadas em um editor Markdown responsivo com prévia renderizada ao vivo, escape seguro de HTML, inspeção de HTML bruto e exportação de HTML com um clique.',
  },
  'line-prefix-suffix': {
    slug: 'adicionar-prefixo-e-sufixo',
    name: 'Adicionar Números de Linha e Prefixo/Sufixo',
    shortDescription:
      'Adicione números de linha, prefixos e sufixos personalizados a cada linha para listas, cláusulas SQL e código.',
    keywords: [
      'adicionar prefixo e sufixo às linhas',
      'adicionar números de linha ao texto',
      'envolver linhas em aspas',
      'formatador de linhas em massa',
      'adicionar texto no início de cada linha',
      'adicionar texto no fim das linhas',
      'gerador de números de linha',
      'formatador de cláusula in sql',
      'adicionar vírgula a cada linha',
    ],
    seo: {
      title: 'Adicionar Prefixo e Sufixo às Linhas: Números | UtilityFlow',
      description:
        'Adicione números de linha, prefixos e sufixos a cada linha de texto para listas, consultas SQL e código — grátis, instantâneo e totalmente privado no navegador.',
      primaryKeyword: 'adicionar prefixo e sufixo às linhas',
      secondaryKeywords: ['adicionar números de linha online', 'ferramenta de prefixo e sufixo de linha', 'envolver linhas em aspas', 'formatador de linhas em massa'],
      longTailKeywords: ['envolver cada linha em aspas simples e vírgula para sql', 'adicionar prefixo de lista numerada às linhas de texto', 'adicionar texto no início e no fim de cada linha em massa', 'adicionar números de linha começando do zero'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Adicione números de linha sequenciais, caracteres de marcador ou aspas de abertura no início e vírgulas, pontos e vírgulas ou tags de fechamento no fim de cada linha de uma lista em segundos.',
  },
};
