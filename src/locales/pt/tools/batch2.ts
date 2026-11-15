import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — Batch 2: Developer tools (15 tools).
 * Translated from the English definitions in src/registry/batches/batch2/
 * (devToolsPart1/2/3.ts). Brazilian Portuguese, neutral, "você" forms.
 */
export const PT_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'json-formatter': {
    slug: 'formatador-json',
    name: 'Formatador e Validador de JSON',
    shortDescription:
      'Formate, minifique, ordene chaves e valide a sintaxe JSON com indicação precisa de erros de linha e coluna.',
    keywords: [
      'formatador json',
      'validador json',
      'embelezador json',
      'minificador json',
      'imprimir json bonito',
      'formatar json online',
      'verificador de sintaxe json',
      'lint json',
      'analisador json',
    ],
    seo: {
      title: 'Formatador JSON: Valide e Imprima JSON Bonito | UtilityFlow',
      description:
        'Formate, valide, minifique e ordene chaves de payloads JSON na hora no navegador, com detalhes de erros de sintaxe de linha e coluna para depurar rápido.',
      primaryKeyword: 'formatador json',
      secondaryKeywords: ['validador json', 'embelezador json', 'minificador json', 'imprimir json bonito'],
      longTailKeywords: ['validar e imprimir json bonito online grátis', 'ordenar chaves json alfabeticamente no navegador', 'minificar payload json sem enviar ao servidor', 'formatar json aninhado com indentação online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Valide payloads JSON malformados com feedback de linha e coluna, formate estruturas aninhadas com indentação de 2 espaços, 4 espaços ou tabulação, ordene chaves alfabeticamente ou minifique para transporte em produção.',
  },
  'base64-encoder-decoder': {
    slug: 'codificador-decodificador-base64',
    name: 'Codificador / Decodificador Base64',
    shortDescription:
      'Codifique texto em Base64 padrão ou seguro para URL e decodifique strings Base64 UTF-8 com segurança na memória do navegador.',
    keywords: [
      'codificador base64',
      'decodificador base64',
      'base64 utf8',
      'base64 seguro para url',
      'codificar base64 online',
      'decodificar base64 online',
      'codificar texto em base64',
      'decodificar base64 para texto',
      'conversor base64',
    ],
    seo: {
      title: 'Codificador e Decodificador Base64: UTF-8 | UtilityFlow',
      description:
        'Codifique texto UTF-8 em Base64 ou decodifique Base64 de volta para texto legível, com opções seguras para URL e sem preenchimento, tudo local no navegador.',
      primaryKeyword: 'codificador decodificador base64',
      secondaryKeywords: ['decodificar base64 online', 'codificar base64 utf8', 'base64 seguro para url', 'base64 para texto'],
      longTailKeywords: ['codificar emojis utf-8 em base64 online', 'decodificar base64 seguro para url sem preenchimento', 'conversor base64 no navegador', 'decodificar string base64 com emojis online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Converta strings UTF-8 — incluindo caracteres acentuados e emojis — em Base64 padrão ou Base64 seguro para URL da RFC 4648, ou decodifique strings Base64 de volta para texto simples com validação instantânea.',
  },
  'url-encoder-decoder': {
    slug: 'codificador-decodificador-de-url',
    name: 'Codificador / Decodificador de URL',
    shortDescription:
      'Codifique por porcentagem valores de consulta ou URLs completas e inspecione host, caminho e parâmetros de consulta.',
    keywords: [
      'codificador de url',
      'decodificador de url',
      'codificação por porcentagem',
      'analisador de url',
      'codificar url online',
      'decodificar url online',
      'ferramenta de codificação de url',
      'encodeuricomponent',
      'codificador de string de consulta',
    ],
    seo: {
      title: 'Codificador URL e Decodificador: Porcentagem | UtilityFlow',
      description:
        'Codifique ou decodifique URLs com os modos encodeURIComponent e encodeURI enquanto inspeciona protocolo, host, caminho e parâmetros localmente no navegador.',
      primaryKeyword: 'codificador decodificador de url',
      secondaryKeywords: ['codificação por porcentagem online', 'ferramenta de decodificação de url', 'analisador de string de consulta', 'encodeuricomponent online'],
      longTailKeywords: ['diferença entre encodeuri e encodeuricomponent', 'decodificar parâmetros de consulta de url em tabela online', 'codificar caracteres especiais por porcentagem para urls', 'codificar valor de consulta de url sem quebrar e comercial'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Codifique com segurança valores de parâmetros de consulta ou URLs completas, decodifique strings codificadas por porcentagem (%20, %3A, +) e inspecione um detalhamento ao vivo de cada parâmetro de consulta em uma tabela.',
  },
  'uuid-generator': {
    slug: 'gerador-de-uuid',
    name: 'Gerador de UUID (v4 e v7)',
    shortDescription:
      'Gere identificadores UUID v4 aleatórios e UUID v7 ordenados por tempo da RFC 9562 em lotes.',
    keywords: [
      'gerador de uuid',
      'gerador de guid',
      'uuid v4',
      'gerador de uuid v7',
      'gerador de uuid v4 online',
      'gerar uuid online',
      'gerador de uuid aleatório',
      'gerador de uuid em massa',
      'gerador de uuid grátis',
    ],
    seo: {
      title: 'Gerador de UUID: v4 e v7 em Lote Grátis | UtilityFlow',
      description:
        'Gere até 100 identificadores UUID v4 aleatórios ou UUID v7 ordenados por tempo da RFC 9562, com opções de maiúsculas, hífen e chaves, no seu navegador.',
      primaryKeyword: 'gerador de uuid',
      secondaryKeywords: ['gerador de guid online', 'gerador de uuid v4', 'criador de uuid v7', 'gerar uuid em massa grátis'],
      longTailKeywords: ['gerar uuid v4 e v7 em massa online', 'uuid v7 ordenado por tempo rfc 9562', 'uuid sem hífen em maiúsculas', 'gerar 100 uuids de uma vez online grátis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crie lotes únicos ou em massa de identificadores UUID v4 aleatórios e UUID v7 ordenados por timestamp da RFC 9562 direto via APIs Web Crypto, com opções de formatação.',
  },
  'regex-tester': {
    slug: 'testador-de-regex',
    name: 'Testador de Regex',
    shortDescription:
      'Teste expressões regulares JavaScript com destaque de matches ao vivo, grupos de captura, flags e saída de substituição.',
    keywords: [
      'testador de regex',
      'testador de expressão regular',
      'regex javascript',
      'destaque de match regex',
      'testador de regex online',
      'testar regex online',
      'depurador de regex',
      'testador de match regex',
      'testador de regex javascript',
    ],
    seo: {
      title: 'Testador de Regex: Matches JavaScript ao Vivo | UtilityFlow',
      description:
        'Teste expressões regulares ao vivo com flags g/i/m/s, destaque de matches, inspeção de grupos de captura numerados e prévia de substituição no seu navegador.',
      primaryKeyword: 'testador de regex',
      secondaryKeywords: ['testador de expressão regular', 'depurador de regex js', 'grupos de captura regex', 'testador de substituição regex'],
      longTailKeywords: ['testar grupos de captura de regex javascript online', 'destaque de match de expressão regular ao vivo', 'prévia de substituição regex com grupo de captura $1', 'depurar regex javascript com destaque ao vivo online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Depure expressões regulares JavaScript de forma interativa com matches destacados ao vivo, posições de índice, inspeção de grupos de captura numerados, alternância de flags e prévias de substituição.',
  },
  'jwt-decoder': {
    slug: 'decodificador-jwt',
    name: 'Decodificador JWT',
    shortDescription:
      'Decodifique cabeçalhos, claims de payload e timestamps de expiração de JSON Web Tokens com segurança no navegador.',
    keywords: [
      'decodificador jwt',
      'decodificar json web token',
      'inspetor jwt',
      'timestamp exp jwt',
      'decodificador de token jwt',
      'decodificar payload jwt',
      'verificador de expiração jwt',
      'visualizador de claims jwt',
      'verificar expiração jwt',
    ],
    seo: {
      title: 'Decodificador JWT: Tokens e Validade ao Vivo | UtilityFlow',
      description:
        'Decodifique cabeçalhos e claims de payload de JWT no seu navegador e confira os timestamps iat, nbf e exp em datas UTC simples. Grátis, privado, sem envio.',
      primaryKeyword: 'decodificador jwt',
      secondaryKeywords: ['decodificar jwt online', 'visualizador de payload jwt', 'inspetor de json web token', 'verificador de expiração jwt'],
      longTailKeywords: ['decodificar token jwt localmente sem enviar ao servidor', 'verificar timestamp de expiração exp de jwt online', 'inspecionar cabeçalho e claims jwt em base64url', 'ler claims de payload jwt no navegador'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Inspecione JSON Web Tokens (JWT) com segurança na memória local do navegador — veja os objetos JSON formatados de Cabeçalho e Payload e confira o status legível de expiração de `iat`, `nbf` e `exp`.',
  },
  'hash-generator': {
    slug: 'gerador-de-hash',
    name: 'Gerador de Hash (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Calcule hashes criptográficos SHA-1, SHA-256, SHA-384 e SHA-512 para texto ou arquivos locais via Web Crypto.',
    keywords: [
      'gerador de hash',
      'gerador sha256',
      'hash sha512',
      'checksum de arquivo sha256',
      'gerador de hash sha1',
      'hash sha384 online',
      'calculadora de checksum',
      'verificar checksum de arquivo',
      'gerador de hash seguro online',
    ],
    seo: {
      title: 'Gerador de Hash: SHA-1, SHA-256 e SHA-512 | UtilityFlow',
      description:
        'Gere digests SHA-1, SHA-256, SHA-384 e SHA-512 em hex ou Base64 para texto e arquivos locais, direto no seu navegador. Grátis, privado, sem envio e online.',
      primaryKeyword: 'gerador de hash',
      secondaryKeywords: ['hash sha256 online', 'verificador de checksum de arquivo', 'gerador sha512', 'calculadora de checksum'],
      longTailKeywords: ['calcular checksum sha256 de arquivo local no navegador', 'gerar hash sha256 em hex e base64', 'gerador de hash com api web crypto online', 'verificar checksum sha256 de arquivo baixado'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Calcule digests SHA-1, SHA-256, SHA-384 e SHA-512 ao mesmo tempo usando a API Web Crypto nativa do navegador (`crypto.subtle.digest`), tanto para texto UTF-8 quanto para checksums de arquivos locais.',
  },
  'html-entity-encoder': {
    slug: 'codificador-de-entidades-html',
    name: 'Codificador e Decodificador de Entidades HTML',
    shortDescription:
      'Escape caracteres HTML reservados (<, >, &, aspas) e símbolos não ASCII ou decodifique entidades HTML sem problema.',
    keywords: [
      'codificador de entidades html',
      'decodificador html',
      'escape html online',
      'desfazer escape de entidades html',
      'codificar caracteres html',
      'ferramenta de escape html',
      'converter para entidades html',
      'decodificar entidades html online',
      'escape caracteres especiais html',
    ],
    seo: {
      title: 'Entidades HTML: Codifique e Decodifique Online | UtilityFlow',
      description:
        'Este codificador transforma caracteres HTML e símbolos não ASCII em entidades, ou decodifica entidades para texto simples. Grátis, local e instantâneo.',
      primaryKeyword: 'codificador de entidades html',
      secondaryKeywords: ['ferramenta de escape html', 'decodificador de entidades html', 'desfazer escape html', 'codificar caracteres html'],
      longTailKeywords: ['escape tags html para trechos de código online', 'decodificar entidades html nomeadas e numéricas', 'converter caracteres especiais em entidades html', 'escape aspas e e comerciais html online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Escape com segurança `<`, `>`, `&`, aspas e símbolos Unicode internacionais em entidades HTML para embutir trechos de código em páginas web, ou decodifique strings com escape HTML de volta para texto legível.',
  },
  'json-csv-converter': {
    slug: 'conversor-de-json-para-csv',
    name: 'Conversor de JSON para CSV / CSV para JSON',
    shortDescription:
      'Converta matrizes JSON em planilhas CSV RFC-4180 e analise arquivos CSV com aspas de volta para JSON limpo.',
    keywords: [
      'json para csv',
      'csv para json',
      'conversor json csv',
      'converter matriz json em csv',
      'exportar json para csv',
      'json para csv online grátis',
      'conversor de csv para json',
      'json para tsv',
      'converter csv em matriz json',
    ],
    seo: {
      title: 'Conversor JSON para CSV: JSON e CSV Fáceis | UtilityFlow',
      description:
        'Converta matrizes JSON em planilhas CSV limpas com achatamento de objetos aninhados, ou analise CSV e TSV de volta para JSON estruturado. Grátis e local.',
      primaryKeyword: 'conversor de json para csv',
      secondaryKeywords: ['conversor de csv para json', 'exportar json como csv', 'tsv para json', 'json para csv online grátis'],
      longTailKeywords: ['converter objetos json aninhados em colunas csv online', 'analisar csv com aspas e vírgulas para matriz json', 'baixador de json para csv no navegador', 'converter matriz json em planilha csv grátis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transforme matrizes JSON de API em planilhas CSV limpas — achatando automaticamente as chaves de objetos aninhados — ou analise arquivos CSV/TSV delimitados com vírgulas entre aspas de volta para JSON formatado.',
  },
  'unix-timestamp-converter': {
    slug: 'conversor-de-timestamp-unix',
    name: 'Conversor de Timestamp Unix',
    shortDescription:
      'Converta segundos ou milissegundos de época Unix em datas ISO 8601, UTC e locais — e vice-versa.',
    keywords: [
      'conversor de timestamp unix',
      'conversor de época',
      'época para data',
      'timestamp para iso 8601',
      'conversor de tempo unix',
      'converter época para data',
      'data para timestamp unix',
      'tempo unix atual',
      'conversor de milissegundos de época',
    ],
    seo: {
      title: 'Conversor de Timestamp Unix: Epoch para Data | UtilityFlow',
      description:
        'Converta timestamps de época Unix em segundos ou milissegundos para ISO 8601, UTC, RFC 2822 e hora local, ou transforme datas de volta em tempo Unix. Grátis.',
      primaryKeyword: 'conversor de timestamp unix',
      secondaryKeywords: ['conversor de época', 'tempo unix para data', 'data para timestamp unix', 'conversor de milissegundos de época'],
      longTailKeywords: ['converter milissegundos de época unix para data iso 8601', 'timestamp unix atual ao vivo em segundos', 'converter data e hora locais para época unix', 'timestamp unix para data utc online grátis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Converta inteiros de época Unix (segundos ou milissegundos) em strings ISO 8601, UTC e de fuso horário local com deslocamentos relativos, ou transforme qualquer data e hora do calendário de volta em um timestamp de época.',
  },
  'sql-formatter': {
    slug: 'formatador-sql',
    name: 'Formatador SQL',
    shortDescription:
      'Formate, indente e padronize consultas SQL com palavras-chave em maiúsculas/minúsculas ou minifique consultas em uma linha.',
    keywords: [
      'formatador sql',
      'embelezador sql',
      'formatar consulta sql',
      'minificador sql',
      'formatar sql online',
      'embelezador de consulta sql',
      'imprimir sql bonito',
      'formatador sql online',
      'indentar consulta sql',
    ],
    seo: {
      title: 'Formatador SQL: Embeleze e Minifique Consultas | UtilityFlow',
      description:
        'Formate consultas SQL com quebras limpas de cláusula, caixa de palavras-chave e indentação de 2/4 espaços, ou minifique para uma linha — grátis, no navegador.',
      primaryKeyword: 'formatador sql',
      secondaryKeywords: ['embelezador sql online', 'imprimir sql bonito', 'minificador sql', 'formatar consulta sql online'],
      longTailKeywords: ['formatar consulta sql select join group by online', 'converter palavras-chave sql para maiúsculas', 'minificar consulta sql preservando literais de string', 'indentar consulta sql com 2 ou 4 espaços online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Transforme consultas SQL densas em uma linha em instruções legíveis e estruturadas, com alinhamento claro de `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` e `ORDER BY`, preservando strings entre aspas e comentários.',
  },
  'css-minifier': {
    slug: 'minificador-css',
    name: 'Minificador e Embelezador de CSS',
    shortDescription:
      'Minifique folhas de estilo CSS para reduzir o tamanho do pacote ou embeleze regras CSS compactadas com indentação limpa.',
    keywords: [
      'minificador css',
      'embelezador css',
      'comprimir css online',
      'formatar css',
      'compressor css',
      'minificar css online',
      'desminificar css',
      'formatador css',
      'reduzir tamanho de arquivo css',
    ],
    seo: {
      title: 'Minificador CSS e Embelezador: Comprima CSS | UtilityFlow',
      description:
        'Minifique CSS removendo comentários e espaços extras, com estatísticas de economia, ou embeleze folhas minificadas em regras limpas — grátis, no navegador.',
      primaryKeyword: 'minificador css',
      secondaryKeywords: ['embelezador css', 'comprimir css', 'formatador css online', 'minificar css online'],
      longTailKeywords: ['minificar css preservando strings entre aspas e media queries', 'desminificar folha de estilo css compactada online', 'calcular porcentagem de compressão css no navegador', 'reduzir tamanho de arquivo css antes da implantação'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Comprima folhas de estilo CSS removendo comentários, espaços em branco redundantes e pontos e vírgulas no fim antes de chaves de fechamento — ou expanda CSS minificado em uma linha de volta para blocos indentados legíveis.',
  },
  'js-formatter': {
    slug: 'formatador-js',
    name: 'Minificador e Formatador de JavaScript / TypeScript',
    shortDescription:
      'Minifique trechos JavaScript removendo comentários e espaços em excesso ou embeleze blocos de código compactos.',
    keywords: [
      'minificador javascript',
      'formatador js',
      'embelezador js',
      'comprimir javascript online',
      'formatador javascript',
      'minificador js online',
      'embelezar javascript',
      'minificador typescript',
      'formatador de código js',
    ],
    seo: {
      title: 'Minificador JavaScript: Formate e Comprima JS | UtilityFlow',
      description:
        'Minifique JavaScript e TypeScript removendo comentários e espaços extras, ou embeleze código compacto com indents de 2/4 espaços — grátis, no navegador.',
      primaryKeyword: 'minificador javascript',
      secondaryKeywords: ['embelezador js', 'formatar javascript online', 'compressor js', 'formatador javascript'],
      longTailKeywords: ['minificar trecho javascript preservando strings e template literals', 'desminificar código javascript compacto com indentação', 'formatador e minificador js no navegador', 'embelezar código javascript com indent de 2 ou 4 espaços'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Compacte trechos JavaScript para bookmarklets e scripts embutidos removendo comentários e espaçamento em excesso — mantendo literais de string intactos — ou reindente código compactado sem problema.',
  },
  'cron-expression-parser': {
    slug: 'analisador-de-expressao-cron',
    name: 'Analisador de Expressão Cron e Prévia de Agendamento',
    shortDescription:
      'Traduza expressões cron de 5 campos para português simples, explore presets e pré-visualize as próximas 8 execuções.',
    keywords: [
      'analisador de expressão cron',
      'gerador de crontab',
      'testador de agendamento cron',
      'próximas execuções cron',
      'analisador de crontab',
      'testador de expressão cron',
      'prévia de agendamento cron',
      'cron para português simples',
      'agendador de tarefas cron',
    ],
    seo: {
      title: 'Analisador Cron: Traduza Expressões e Agende | UtilityFlow',
      description:
        'Analise uma expressão cron de 5 campos em português simples, inspecione cada campo, teste presets comuns e pré-visualize as próximas 8 execuções — grátis.',
      primaryKeyword: 'analisador de expressão cron',
      secondaryKeywords: ['alternativa ao crontab guru', 'prévia de agendamento cron', 'construtor de cron', 'testador de expressão cron'],
      longTailKeywords: ['traduzir expressão cron de 5 campos para português simples', 'calcular próximos 8 timestamps de execução cron', 'testar expressões cron de dia da semana e passo online', 'expressão cron todos os dias úteis às 9h exemplo'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decodifique expressões crontab Unix de 5 campos (`minuto hora dia-do-mês mês dia-da-semana`) em resumos claros e legíveis, verifique intervalos de campos e inspecione os próximos 8 timestamps de execução agendada.',
  },
  'color-converter': {
    slug: 'conversor-de-cores',
    name: 'Conversor de Cores (HEX / RGB / HSL e Contraste WCAG)',
    shortDescription:
      'Converta cores entre HEX, RGB e HSL com seletor de cores ao vivo e verificação de contraste WCAG 2.1 AA/AAA.',
    keywords: [
      'conversor de cores',
      'hex para rgb',
      'rgb para hsl',
      'verificador de contraste wcag',
      'hex para hsl',
      'rgb para hex',
      'seletor de cores online',
      'conversor de cor hex',
      'hsl para rgb',
    ],
    seo: {
      title: 'Conversor de Cores: HEX, RGB, HSL e WCAG | UtilityFlow',
      description:
        'Converta cores entre HEX, RGB e HSL na hora e teste o contraste de primeiro e segundo plano para conformidade WCAG 2.1 AA e AAA — grátis, no navegador.',
      primaryKeyword: 'conversor de cores',
      secondaryKeywords: ['conversor de hex para rgb', 'seletor de cores hsl', 'verificador de contraste wcag', 'conversor de rgb para hex'],
      longTailKeywords: ['converter cor hex em valores css rgb e hsl', 'verificar proporção de contraste de texto wcag 2.1 aa e aaa', 'ferramenta interativa de cores hex rgb hsl para desenvolvedores', 'converter hex em hsl para variáveis css'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Traduza cores sem esforço entre as notações CSS HEX, RGB e HSL com uma amostra ao vivo e um verificador de proporção de contraste WCAG 2.1 embutido para design de interface acessível.',
  },
};
