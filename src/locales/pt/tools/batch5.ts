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
    instructions: [
      {
        title: 'Digite o título e a meta descrição da página',
        description:
          'Preencha o Título da página (busque 30 a 60 caracteres) e a Meta descrição (120 a 160 caracteres) acompanhando os indicadores de tamanho ao vivo.',
      },
      {
        title: 'Defina a URL canônica e as diretivas de indexação',
        description:
          'Digite a URL canônica completa da página e escolha se os robôs de busca devem indexá-la e seguir os links dela.',
      },
      {
        title: 'Adicione as tags Open Graph',
        description:
          'Preencha o título, a descrição, o tipo e a URL da imagem do Open Graph (recomendado 1200×630 pixels) para que os links fiquem certos ao compartilhar.',
      },
      {
        title: 'Configure o Twitter/X Card',
        description:
          'Escolha summary ou summary_large_image e confirme o título, a descrição e a imagem do cartão que o X vai exibir.',
      },
      {
        title: 'Confira a pré-visualização ao vivo do cartão social',
        description:
          'Veja no painel de pré-visualização exatamente como o link vai aparecer no feed social e corrija qualquer corte ou imagem faltando antes de publicar.',
      },
      {
        title: 'Copie ou baixe o trecho HTML',
        description:
          'Copie o HTML com escape para o <head> da sua página ou baixe o arquivo meta-tags.html e reutilize o bloco nos seus modelos.',
      },
    ],
    examples: [
      {
        title: 'Bloco padrão de Open Graph e canônica para um site',
        input: 'Título: UtilityFlow · Tipo: website · Cartão: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* e twitter:*',
        explanation: 'Faz o escape correto de aspas duplas e & dentro dos valores dos atributos.',
      },
      {
        title: 'Tags de artigo de blog com og:type article',
        input: 'Título: Guia 2026 · Tipo: article · Imagem: 1200×630',
        output: '<meta property="og:type" content="article">, <meta property="article:published_time" ...>',
        explanation: 'O tipo article mostra o formato correto de pré-visualização nas redes sociais para posts de blog.',
      },
    ],
    benefits: [
      'Faz automaticamente o escape HTML de &, ", < e > nos atributos das tags',
      'Combina tags head de SEO, tags Open Graph e Twitter/X Cards em um único trecho consistente',
      'Mostra como os links compartilhados vão aparecer nos feeds sociais antes de publicar',
      'Permite baixar um trecho independente em meta-tags.html',
    ],
    useCases: [
      'Lançar páginas de captura, microssites de marketing e hubs de produto SaaS',
      'Padronizar dimensões de imagem Open Graph e tipos de cartão em todos os artigos',
      'Verificar URLs canônicas e diretivas index/noindex antes de ir para a produção',
      'Entregar modelos <head> limpos do time de marketing para os desenvolvedores front-end',
    ],
    faqs: [
      {
        question: 'Preciso de tags separadas para Open Graph e Twitter/X?',
        answer:
          'O X usa o Open Graph para título e descrição quando precisa, mas declarar explicitamente twitter:card (summary_large_image) junto com og:* garante pré-visualizações amplas e previsíveis em todos os lugares.',
      },
      {
        question: 'Qual deve ser o tamanho da minha og:image?',
        answer:
          'Use uma imagem de 1200×630 pixels (proporção 1,91:1) hospedada em uma URL HTTPS sem bloqueio no robots.txt.',
      },
      {
        question: 'Adicionar <meta name="keywords"> ainda ajuda no ranking do Google?',
        answer:
          'Os principais buscadores ignoram meta keywords por causa do spam histórico, por isso este gerador mantém o seu <head> limpo com título, descrição, canônica e tags sociais que realmente importam.',
      },
      {
        question: 'O Gerador de Meta Tags é gratuito?',
        answer:
          'Sim. É totalmente gratuito e funciona inteiramente no seu navegador, então seus títulos, descrições e URLs nunca são enviados para um servidor.',
      },
      {
        question: 'Preciso instalar alguma coisa para usar o Gerador de Meta Tags?',
        answer:
          'Não. Ele funciona em qualquer navegador moderno sem instalar nada, e você pode gerar tags no computador ou no celular.',
      },
      {
        question: 'Qual é o tamanho ideal para um meta título?',
        answer:
          'Busque de 30 a 60 caracteres para que o título completo caiba nos resultados de busca e nos cartões sociais sem ser cortado com reticências.',
      },
      {
        question: 'Qual é o tamanho ideal para uma meta descrição?',
        answer:
          'Mantenha entre 120 e 160 caracteres para que o resumo inteiro fique visível nos resultados de busca no computador e no celular.',
      },
      {
        question: 'Como o Gerador de Meta Tags trata caracteres especiais nos títulos?',
        answer:
          'Ele faz automaticamente o escape HTML de &, ", < e > dentro dos valores dos atributos, para que aspas e & nunca quebrem o código da sua página.',
      },
      {
        question: 'O que é uma URL canônica e por que o gerador inclui uma?',
        answer:
          'Uma URL canônica diz aos buscadores qual versão de uma página é a original quando existem páginas parecidas, evitando confusão por conteúdo duplicado.',
      },
      {
        question: 'Qual é a diferença entre as tags Open Graph e Twitter Card?',
        answer:
          'As tags Open Graph controlam as pré-visualizações de links no Facebook, LinkedIn e aplicativos de mensagem, enquanto as tags Twitter Card controlam como o mesmo link aparece no X.',
      },
      {
        question: 'Qual tipo de cartão do Twitter devo escolher no Gerador de Meta Tags?',
        answer:
          'Use summary_large_image para páginas com imagem em destaque, como artigos e páginas de produto, e summary para páginas de texto simples, em que uma miniatura pequena basta.',
      },
      {
        question: 'Posso ver uma pré-visualização de como meu link vai ficar ao compartilhar?',
        answer:
          'Sim. A pré-visualização ao vivo do cartão social mostra o título, a descrição e a imagem exatamente como vão aparecer no feed social antes de você publicar.',
      },
      {
        question: 'O Gerador de Meta Tags envia o conteúdo da minha página para algum lugar?',
        answer:
          'Não. Tudo funciona localmente no seu navegador e nada do que você digita sai do seu dispositivo.',
      },
      {
        question: 'Como adiciono as meta tags geradas ao meu site?',
        answer:
          'Copie o trecho e cole dentro da seção <head> do modelo da sua página, ou baixe o arquivo meta-tags.html e reutilize o bloco em várias páginas.',
      },
      {
        question: 'Quando devo usar uma diretiva robots noindex com o Gerador de Meta Tags?',
        answer:
          'Use noindex só para páginas que você nunca quer nos resultados de busca, como páginas de agradecimento, resultados de busca interna ou cópias de teste de uma página ativa.',
      },
      {
        question: 'Posso usar o Gerador de Meta Tags em um post de blog ou página de produto?',
        answer:
          'Sim. Defina og:type como article para posts de blog ou product para páginas de loja, para que cada plataforma mostre o formato correto de pré-visualização.',
      },
      {
        question: 'O que acontece se a URL da minha og:image estiver errada ou a imagem estiver faltando?',
        answer:
          'As plataformas sociais não vão mostrar imagem ou vão mostrar uma pré-visualização quebrada, por isso use sempre uma URL de imagem HTTPS direta e confira a pré-visualização antes de publicar.',
      },
      {
        question: 'O Gerador de Meta Tags funciona para páginas em vários idiomas?',
        answer:
          'Ele gera tags para uma página por vez, então defina og:locale conforme o idioma da página e gere um conjunto de tags separado para cada versão traduzida.',
      },
      {
        question: 'Posso baixar as meta tags geradas como arquivo?',
        answer:
          'Sim. O botão de download salva um arquivo meta-tags.html independente com o trecho completo já com escape.',
      },
      {
        question: 'O Gerador de Meta Tags vai melhorar meu ranking no Google sozinho?',
        answer:
          'Nenhuma ferramenta garante ranking, mas títulos, descrições e tags sociais precisos melhoram a taxa de cliques e a forma como suas páginas são apresentadas.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite título, descrição e URL',
        description:
          'Escreva o Título de SEO candidato, a Meta descrição, a URL da página e, se quiser, o nome do site ou a data de publicação.',
      },
      {
        title: 'Meça a largura em pixels',
        description:
          'Confira a leitura ao vivo em px ao lado do Título de SEO — letras largas como W e M ocupam mais pixels na horizontal do que l e i.',
      },
      {
        title: 'Confira a pré-visualização para computador',
        description:
          'Veja o cartão de busca para computador com o título completo, a URL em breadcrumb e a descrição exatamente como os usuários de computador veriam.',
      },
      {
        title: 'Mude para a pré-visualização de celular',
        description:
          'Alterne para a visualização de celular para conferir o ponto de corte mais curto e garantir que a mensagem principal ainda apareça em telas pequenas.',
      },
      {
        title: 'Teste o destaque de palavras-chave em negrito',
        description:
          'Digite a consulta de busca alvo no campo de Palavra-chave em negrito para ver quais palavras o Google destacaria dentro do seu snippet.',
      },
      {
        title: 'Copie as tags prontas',
        description:
          'Quando a pré-visualização estiver certa, copie as tags <title> e <meta name="description"> prontas para colar na sua página.',
      },
    ],
    examples: [
      {
        title: 'Detectando o corte de um título com letras largas',
        input: 'Título de 60 caracteres cheio de letras maiúsculas W e M',
        output: 'Alerta de estouro acima de 580 px mesmo com menos de 60 caracteres, para você encurtar antes do corte com reticências.',
        explanation: 'As métricas de texto do Canvas aproximam as larguras reais de renderização dos resultados de busca.',
      },
      {
        title: 'Descrição que cabe no celular sem perder a mensagem',
        input: 'Descrição de 160 caracteres com a palavra-chave no final',
        output: 'A pré-visualização de celular mostra o corte em cerca de 120 caracteres, então a palavra-chave vai para o início.',
        explanation: 'Mover a mensagem principal para o começo garante que o resumo faça sentido mesmo dobrado no celular.',
      },
    ],
    benefits: [
      'Usa larguras em pixels do Canvas measureText() além da contagem de caracteres',
      'Formata domínio e trechos do caminho em trilhas de breadcrumb limpas automaticamente',
      'Simula termos de busca em negrito dentro das meta descrições para avaliar o clique',
      'Copia as tags <title> e <meta name="description"> prontas para colar com um clique',
    ],
    useCases: [
      'Ajustar títulos de blog e de páginas de produto para evitar o corte "..." no meio da palavra',
      'Escrever meta descrições com mais cliques dentro do limite de cerca de 120 caracteres do celular',
      'Verificar como as datas de publicação afetam o tamanho visível da descrição',
      'Revisar snippets de landing pages durante a revisão editorial',
    ],
    faqs: [
      {
        question: 'Por que a largura em pixels importa mais do que a contagem exata de caracteres?',
        answer:
          'Os buscadores cortam os títulos pela largura em pixels do espaço (~580 a 600 px no computador), e não por um tamanho fixo em caracteres. Letras maiúsculas e caracteres largos como W ou M ocupam quase o dobro da largura de i ou l.',
      },
      {
        question: 'O Google pode reescrever meu título ou minha meta descrição nos resultados reais?',
        answer:
          'Sim. O Google às vezes reescreve os snippets dinamicamente para combinar com consultas específicas ou com o H1 da página, embora títulos curtos e precisos reduzam reescritas indesejadas.',
      },
      {
        question: 'Esta ferramenta busca rankings reais do Google?',
        answer:
          'Não. É um simulador visual de snippet SERP offline que funciona totalmente no seu navegador.',
      },
      {
        question: 'A Pré-visualização de Snippet SERP é gratuita?',
        answer:
          'Sim. É totalmente gratuita e funciona inteiramente no seu navegador, então nada do que você digita é enviado para lugar nenhum.',
      },
      {
        question: 'Qual é o tamanho ideal do título para os resultados de busca do Google?',
        answer:
          'Busque ficar abaixo de cerca de 580 pixels no computador, o que geralmente significa de 50 a 60 caracteres, dependendo da largura das letras.',
      },
      {
        question: 'Como a Pré-visualização de Snippet SERP mede a largura em pixels?',
        answer:
          'Ela usa a API Canvas measureText() do navegador para calcular a largura real renderizada do seu título no mesmo estilo de fonte que os resultados de busca usam.',
      },
      {
        question: 'Por que meu título é cortado mesmo com menos de 60 caracteres?',
        answer:
          'Os buscadores cortam pela largura em pixels, e não pela contagem de caracteres, então letras largas como W e M ocupam muito mais espaço do que letras estreitas como i e l.',
      },
      {
        question: 'Qual é o tamanho ideal da meta descrição para computador e celular?',
        answer:
          'No computador aparecem cerca de 155 a 160 caracteres, enquanto no celular o corte fica em torno de 120, por isso coloque as palavras mais importantes e as palavras-chave no início.',
      },
      {
        question: 'Posso ver a pré-visualização dos resultados de busca no computador e no celular?',
        answer:
          'Sim. Alterne entre as visualizações de Computador e Celular para ver como o mesmo título e a mesma descrição aparecem em cada tamanho de tela.',
      },
      {
        question: 'O que o recurso de palavra-chave em negrito da Pré-visualização de Snippet SERP faz?',
        answer:
          'Digite uma consulta de busca alvo e a pré-visualização deixa em negrito as palavras correspondentes dentro do título e da descrição, assim como o Google destaca os termos da consulta nos resultados reais.',
      },
      {
        question: 'A Pré-visualização de Snippet SERP mostra meu ranking real no Google?',
        answer:
          'Não. É um simulador visual offline que mostra como um snippet poderia ficar, e não dados reais de ranking do Google.',
      },
      {
        question: 'A Pré-visualização de Snippet SERP envia meu título ou minha URL para algum lugar?',
        answer:
          'Não. Toda a pré-visualização e medição acontece localmente no seu navegador.',
      },
      {
        question: 'Como copio o título e a meta descrição depois de ver a pré-visualização?',
        answer:
          'Use o botão de copiar com um clique para pegar as tags <title> e <meta name="description"> prontas para colar na sua página.',
      },
      {
        question: 'Por que o Google às vezes reescreve meu título nos resultados reais?',
        answer:
          'O Google pode trocar pelo seu H1 ou outro texto da página quando acha que combina melhor com uma consulta de busca, embora títulos curtos e precisos reduzam as reescritas.',
      },
      {
        question: 'Devo incluir minha marca ou o nome do site no título?',
        answer:
          'Na maioria das vezes, sim. Coloque no final, depois de um separador, para que a palavra-chave principal fique em primeiro lugar e a marca ainda apareça nos resultados.',
      },
      {
        question: 'Qual é a diferença entre a tag de título e o título H1?',
        answer:
          'A tag de título aparece nos resultados de busca e nas abas do navegador, enquanto o H1 é o título visível na própria página.',
      },
      {
        question: 'Posso testar vários títulos rapidamente na Pré-visualização de Snippet SERP?',
        answer:
          'Sim. Edite o campo do título e a pré-visualização, a largura em pixels e o alerta de corte são atualizados ao vivo enquanto você digita.',
      },
      {
        question: 'A Pré-visualização de Snippet SERP leva em conta as datas de publicação?',
        answer:
          'Sim. Adicionar uma data mostra como ela encurta a descrição visível, o que importa para notícias e posts de blog.',
      },
      {
        question: 'O que devo fazer se minha descrição for cortada no celular?',
        answer:
          'Mova a mensagem principal e a palavra-chave alvo para o começo da descrição, para que a visualização dobrada do celular ainda faça sentido.',
      },
      {
        question: 'A verificação de largura em pixels da Pré-visualização de Snippet SERP é precisa para todos os idiomas?',
        answer:
          'Ela aproxima a renderização real da busca a partir das fontes do seu navegador, por isso os resultados são mais precisos para alfabetos latinos e podem variar em outros sistemas de escrita.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole as URLs canônicas',
        description:
          'Digite uma URL completa https:// (ou http://) por linha no editor; linhas malformadas são sinalizadas claramente.',
      },
      {
        title: 'Revise as linhas sinalizadas como inválidas',
        description:
          'Confira as linhas destacadas para erros de digitação ou falta do prefixo https:// e corrija antes de gerar, pois URLs inválidas são excluídas do XML.',
      },
      {
        title: 'Configure as tags opcionais',
        description:
          'Defina uma data <lastmod> opcional, uma dica de <changefreq> e uma <priority> (ou omita as tags opcionais para arquivos mais limpos).',
      },
      {
        title: 'Confira a remoção de duplicadas',
        description:
          'Confirme a contagem de duplicadas mostrada pela ferramenta para que o sitemap final liste cada URL canônica exatamente uma vez.',
      },
      {
        title: 'Veja a pré-visualização do XML gerado',
        description:
          'Confira o XML gerado para confirmar se o urlset, as entradas <loc> e os valores opcionais de <lastmod> estão corretos.',
      },
      {
        title: 'Copie ou baixe o sitemap.xml',
        description:
          'Clique em Copiar XML ou Baixar .xml para colocar o arquivo direto na raiz do site, na pasta /public/.',
      },
    ],
    examples: [
      {
        title: 'Gerando o sitemap de um site estático no Cloudflare Pages',
        input: '5 URLs canônicas · lastmod: 2026-11-12 · Remover duplicadas: ativado',
        output: '<?xml version="1.0"?> válido <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Faz o escape das entidades XML (&, <, >, aspas) de forma limpa dentro de cada elemento <loc>.',
      },
      {
        title: 'Limpando uma lista com URLs repetidas e quebradas',
        input: '12 linhas com 3 duplicadas e 1 URL sem https://',
        output: 'Sitemap com 8 URLs únicas válidas e as linhas problemáticas sinalizadas para correção.',
        explanation: 'Duplicadas são removidas e linhas inválidas são excluídas sem quebrar o arquivo inteiro.',
      },
    ],
    benefits: [
      'Valida cada linha com a análise nativa de URL do navegador antes de gerar o XML',
      'Faz automaticamente o escape de & e de caracteres especiais de consulta dentro das URLs <loc>',
      'Remove URLs idênticas duplicadas para evitar sitemaps inchados',
      'Permite omitir <priority> e <changefreq> de forma limpa quando quiser (o Google ignora as duas)',
    ],
    useCases: [
      'Criar sitemaps iniciais para landing pages estáticas ou microssites de documentação',
      'Preparar arquivos limpos de envio de URLs após migrações de site',
      'Gerar sitemaps complementares sem imagem ou notícia para sites de pequenas empresas',
      'Exportar XML formatado direto para publicar junto com o robots.txt',
    ],
    faqs: [
      {
        question: 'Devo incluir URLs não canônicas, redirecionadas ou noindex no sitemap?',
        answer:
          'Não. Os sitemaps devem listar apenas URLs canônicas que retornam HTTP 200 e que você quer que os buscadores indexem.',
      },
      {
        question: 'O Google ainda usa <priority> e <changefreq>?',
        answer:
          'O Google ignora as tags <priority> e <changefreq> e foca principalmente em <loc> e em datas <lastmod> precisas quando são atualizadas de forma relevante.',
      },
      {
        question: 'Este gerador rastreia meu site ativo automaticamente?',
        answer:
          'Não. Páginas no navegador não conseguem rastrear sites de outras origens por causa da segurança CORS; cole sua lista de rotas exportada aqui para compilar um XML válido na hora.',
      },
      {
        question: 'O Gerador de Sitemap XML é gratuito?',
        answer:
          'Sim. É totalmente gratuito e funciona inteiramente no seu navegador, então sua lista de URLs nunca é enviada para um servidor.',
      },
      {
        question: 'Quantas URLs posso incluir em um sitemap?',
        answer:
          'O protocolo Sitemaps permite até 50.000 URLs ou 50 MB sem compressão por arquivo, por isso sites maiores devem dividir em vários sitemaps ou usar um índice de sitemap.',
      },
      {
        question: 'Qual é a diferença entre um sitemap e o robots.txt?',
        answer:
          'Um sitemap lista as URLs que você quer que os buscadores descubram, enquanto o robots.txt dá aos robôs regras sobre quais caminhos eles podem ou não visitar.',
      },
      {
        question: 'Onde envio o arquivo sitemap.xml?',
        answer:
          'Coloque-o na raiz do site, por exemplo https://exemplo.com/sitemap.xml, para que os robôs o encontrem no local padrão.',
      },
      {
        question: 'Preciso enviar meu sitemap ao Google?',
        answer:
          'É recomendado. Envie-o no Google Search Console e também faça referência a ele com uma linha Sitemap: no robots.txt para outros robôs.',
      },
      {
        question: 'Quais formatos de URL o Gerador de Sitemap XML aceita?',
        answer:
          'Digite uma URL completa https:// ou http:// por linha, incluindo o domínio, e a ferramenta sinaliza qualquer linha que não seja uma URL válida.',
      },
      {
        question: 'O que acontece com as URLs duplicadas no meu sitemap?',
        answer:
          'As duplicadas são removidas automaticamente, para que o sitemap final contenha cada URL canônica exatamente uma vez.',
      },
      {
        question: 'O que acontece com URLs inválidas ou malformadas no Gerador de Sitemap XML?',
        answer:
          'As linhas inválidas são sinalizadas claramente e excluídas do XML, para que um erro de digitação em uma linha nunca quebre o arquivo inteiro.',
      },
      {
        question: 'Como o Gerador de Sitemap XML trata caracteres especiais nas URLs?',
        answer:
          'Ele faz o escape XML de & e de outros caracteres especiais dentro dos elementos <loc>, para que strings de consulta e caminhos codificados continuem válidos.',
      },
      {
        question: 'Devo incluir URLs de imagem ou vídeo em um sitemap comum?',
        answer:
          'Um sitemap padrão lista apenas URLs de páginas. URLs de imagem e vídeo precisam de extensões próprias de sitemap se você quiser indexá-las separadamente.',
      },
      {
        question: 'Devo listar URLs paginadas ou filtradas no meu sitemap?',
        answer:
          'Não. Liste apenas páginas canônicas e indexáveis e deixe de fora paginação, parâmetros de ordenação e páginas de resultados de busca interna.',
      },
      {
        question: 'O que é <lastmod> e devo defini-lo no meu sitemap?',
        answer:
          'Ele registra a data da última alteração de uma página. Defina-o só quando a data for precisa, porque o Google usa isso para avaliar o frescor da página.',
      },
      {
        question: 'O Gerador de Sitemap XML funciona offline?',
        answer:
          'Sim. Ele funciona inteiramente no seu navegador, sem envio, então você pode criar sitemaps sem conexão com a internet depois que a página carregar.',
      },
      {
        question: 'Posso gerar meu sitemap novamente depois de adicionar páginas novas?',
        answer:
          'Sim. Cole a lista de URLs atualizada, baixe um sitemap.xml novo e envie-o novamente para a raiz do site.',
      },
      {
        question: 'O que é um arquivo de índice de sitemap?',
        answer:
          'É um arquivo que lista vários arquivos de sitemap, usado por sites grandes para organizar milhares de URLs por seção ou idioma.',
      },
      {
        question: 'Ter um sitemap garante que o Google vai indexar minhas páginas?',
        answer:
          'Não. Um sitemap ajuda os buscadores a descobrir URLs, mas a indexação ainda depende da qualidade da página, dos links e do orçamento de rastreamento.',
      },
      {
        question: 'Posso usar o Gerador de Sitemap XML em um site WordPress ou Shopify?',
        answer:
          'Sim. Exporte ou copie sua lista de URLs canônicas de qualquer plataforma, cole aqui e a ferramenta cria um sitemap.xml padrão.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha um modelo pronto ou edite as regras',
        description:
          'Clique em Permitir Tudo, App Web / SaaS Padrão, WordPress Limpo ou Teste (Bloquear Tudo) para preencher as regras comuns.',
      },
      {
        title: 'Personalize User-agents e caminhos',
        description:
          'Adicione caminhos Allow ou Disallow para * ou para robôs específicos, como Googlebot, Bingbot ou GPTBot.',
      },
      {
        title: 'Defina Crawl-delay quando necessário',
        description:
          'Adicione um valor de Crawl-delay para robôs que respeitam esse valor, como o Bingbot, para reduzir as requisições em um servidor pequeno ou compartilhado.',
      },
      {
        title: 'Anexe as URLs do sitemap',
        description:
          'Digite a URL completa do seu sitemap XML para que os robôs o descubram pelo robots.txt, adicionando mais de uma linha se você usa vários sitemaps.',
      },
      {
        title: 'Revise a saída agrupada',
        description:
          'Confira se cada bloco de User-agent está agrupado corretamente e se nenhuma regra Disallow bloqueia sem querer CSS, JavaScript ou páginas públicas.',
      },
      {
        title: 'Copie, baixe e teste',
        description:
          'Copie ou baixe o robots.txt, coloque-o na raiz do seu domínio e verifique com o testador de robots.txt do Google Search Console.',
      },
    ],
    examples: [
      {
        title: 'App web SaaS bloqueando /api/ e /admin/',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Arquivo robots.txt agrupado terminando com Sitemap: https://exemplo.com/sitemap.xml',
        explanation: 'Agrupa os User-agents correspondentes de forma limpa em blocos únicos.',
      },
      {
        title: 'Bloqueando o ambiente de teste antes do lançamento',
        input: 'Modelo Teste (Bloquear Tudo) · User-agent: * · Disallow: /',
        output: 'robots.txt que impede todos os robôs de rastrear o ambiente de teste.',
        explanation: 'Evita que páginas de teste apareçam nos resultados de busca antes do lançamento.',
      },
    ],
    benefits: [
      'Agrupa as regras automaticamente por blocos de User-agent correspondentes, conforme as boas práticas da RFC 9309',
      'Inclui modelos prontos verificados para evitar bloquear sem querer arquivos CSS e JS',
      'Aceita várias declarações Sitemap: para índices de sitemap ou arquivos por idioma',
      'O download com um clique gera um arquivo robots.txt pronto para publicar',
    ],
    useCases: [
      'Evitar que robôs gastem orçamento de rastreamento em /api/, /admin/ ou URLs de busca interna',
      'Divulgar os locais dos sitemaps XML na raiz do domínio',
      'Adicionar regras específicas para bots especializados, como AdsBot ou coletores de IA',
      'Configurar ambientes de teste antes do lançamento do DNS',
    ],
    faqs: [
      {
        question: 'O Disallow: /admin/ no robots.txt tira uma página da Busca do Google ou protege segredos?',
        answer:
          'Diferença importante: o robots.txt impede o rastreamento, mas não necessariamente a indexação se outros sites linkarem direto para a URL, e o robots.txt é público. Use autenticação para rotas sensíveis e <meta name="robots" content="noindex"> para impedir a indexação.',
      },
      {
        question: 'Onde o robots.txt deve ser hospedado?',
        answer:
          'Ele deve ser servido no caminho exato da raiz do seu host (https://seudominio.com/robots.txt), retornando HTTP 200.',
      },
      {
        question: 'O Google respeita o Crawl-delay?',
        answer:
          'O Googlebot ignora o Crawl-delay (use as configurações do Search Console se precisar), enquanto o Bing e outros robôs ainda respeitam intervalos numéricos de Crawl-delay.',
      },
      {
        question: 'O Gerador de Robots.txt é gratuito?',
        answer:
          'Sim. É totalmente gratuito e funciona inteiramente no seu navegador, então as regras do seu site nunca são enviadas para lugar nenhum.',
      },
      {
        question: 'Qual é a diferença entre robots.txt e uma meta tag robots noindex?',
        answer:
          'O robots.txt diz aos robôs para não visitarem um caminho, enquanto a tag noindex diz aos buscadores para não mostrarem uma página rastreada nos resultados. São problemas diferentes.',
      },
      {
        question: 'O robots.txt pode bloquear robôs de IA como o GPTBot?',
        answer:
          'Sim. Adicione um grupo User-agent: GPTBot com Disallow: / para manter esse robô fora, e repita o padrão para outros bots de IA que você quiser bloquear.',
      },
      {
        question: 'O que significa "User-agent: *" no robots.txt?',
        answer:
          'Significa que as regras desse grupo valem para todos os robôs que visitam seu site, a menos que um grupo de User-agent mais específico as substitua.',
      },
      {
        question: 'Qual é a diferença entre Allow e Disallow no robots.txt?',
        answer:
          'Allow permite o rastreamento de um caminho e Disallow o bloqueia. Quando as regras se sobrepõem, vence a regra correspondente mais específica.',
      },
      {
        question: 'Posso bloquear uma única página ou pasta com o Gerador de Robots.txt?',
        answer:
          'Sim. Adicione Disallow: /pagina/ para uma página ou Disallow: /pasta/ para bloquear um diretório inteiro e tudo dentro dele.',
      },
      {
        question: 'Devo bloquear meus arquivos CSS e JavaScript no robots.txt?',
        answer:
          'Não. Os buscadores precisam do seu CSS e JavaScript para renderizar as páginas corretamente, e bloqueá-los pode prejudicar o ranking.',
      },
      {
        question: 'Quais modelos prontos o Gerador de Robots.txt inclui?',
        answer:
          'Ele inclui Permitir Tudo, App Web / SaaS Padrão, WordPress Limpo e Teste (Bloquear Tudo), para você começar com um modelo testado em vez de um arquivo em branco.',
      },
      {
        question: 'Como adiciono meu sitemap ao robots.txt?',
        answer:
          'Adicione uma linha como Sitemap: https://exemplo.com/sitemap.xml no final do arquivo, para que os robôs encontrem seu sitemap a partir da raiz.',
      },
      {
        question: 'Posso ter várias linhas Sitemap em um arquivo robots.txt?',
        answer:
          'Sim. Você pode listar várias URLs de sitemap, o que é útil para índices de sitemap ou sitemaps separados por idioma ou seção.',
      },
      {
        question: 'O Gerador de Robots.txt envia minhas regras para algum lugar?',
        answer:
          'Não. Tudo funciona localmente no seu navegador e o arquivo é gerado no seu dispositivo.',
      },
      {
        question: 'Como testo meu robots.txt depois de publicar?',
        answer:
          'Envie-o para a raiz do domínio e confira com o testador de robots.txt do Google Search Console ou buscando o arquivo como Googlebot.',
      },
      {
        question: 'O que acontece se eu bloquear meu site inteiro sem querer no robots.txt?',
        answer:
          'Os buscadores vão parar de rastrear suas páginas. Remova a linha Disallow: /, envie o arquivo novamente e solicite um novo rastreamento no Search Console.',
      },
      {
        question: 'O robots.txt esconde minhas páginas de administração de invasores?',
        answer:
          'Não. O robots.txt é público, então qualquer pessoa pode ver quais caminhos você bloqueou. Proteja páginas sensíveis com senha ou autenticação.',
      },
      {
        question: 'O que é Crawl-delay e devo usá-lo no robots.txt?',
        answer:
          'O Crawl-delay pede aos robôs que esperem um número de segundos entre as requisições. O Googlebot ignora, mas o Bing e alguns outros robôs respeitam.',
      },
      {
        question: 'Posso criar regras diferentes de robots.txt para Googlebot e Bingbot?',
        answer:
          'Sim. Crie um grupo de User-agent separado para cada robô, com suas próprias linhas de Allow e Disallow.',
      },
      {
        question: 'Onde envio o robots.txt no Cloudflare Pages ou em um site estático?',
        answer:
          'Coloque o arquivo na pasta public/ ou na raiz da saída do build, para que ele seja servido em https://seudominio.com/robots.txt.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha um tipo do Schema.org',
        description:
          'Selecione Artigo, FAQPage, Produto, Organização ou BreadcrumbList no seletor do topo.',
      },
      {
        title: 'Preencha as propriedades da entidade',
        description:
          'Digite títulos, pares de perguntas e respostas, ofertas de preço, detalhes da organização ou trilhas de breadcrumb.',
      },
      {
        title: 'Adicione linhas extras para listas',
        description:
          'Adicione pares extras de perguntas e respostas para FAQPage ou itens extras de trilha para BreadcrumbList, e remova as linhas que não precisar.',
      },
      {
        title: 'Revise o JSON-LD gerado',
        description:
          'Confira o JSON ao vivo para ver se os nomes e valores dos campos estão corretos e confirme que as propriedades opcionais vazias são omitidas automaticamente.',
      },
      {
        title: 'Copie a tag <script> ou exporte em .jsonld',
        description:
          'Copie o bloco completo <script type="application/ld+json"> para o <head> da sua página ou baixe o arquivo .jsonld.',
      },
      {
        title: 'Valide antes de publicar',
        description:
          'Cole a saída no Teste de Resultados Ricos ou no validador de Schema para detectar erros de sintaxe, pois JSON-LD inválido é ignorado pelos buscadores.',
      },
    ],
    examples: [
      {
        title: 'Criando dados estruturados dinâmicos de FAQPage',
        input: '2 pares de Pergunta/Resposta no schema FAQPage',
        output: 'Bloco de script JSON-LD FAQPage válido com @context https://schema.org',
        explanation: 'Usa serialização JSON segura com escape \\u003c para evitar o fechamento prematuro de </script>.',
      },
      {
        title: 'Schema de Produto com preço e disponibilidade',
        input: 'Nome, preço em BRL, moeda e disponibilidade em estoque',
        output: 'Bloco JSON-LD de Produto com oferta, preço e availability válidos.',
        explanation: 'Os campos principais de preço e disponibilidade são os que os buscadores usam nos resultados de compras.',
      },
    ],
    benefits: [
      'Aceita 5 dos tipos de dados estruturados do Schema.org de maior impacto',
      'Faz o escape dos caracteres "<" de forma limpa dentro do JSON-LD para evitar quebras por injeção de script HTML',
      'Omite automaticamente as propriedades opcionais vazias para uma sintaxe limpa',
      'Combina naturalmente com o Formatador e Validador de JSON para extensões personalizadas',
    ],
    useCases: [
      'Adicionar metadados de autor e publicação de Artigo aos modelos de blog editorial',
      'Estruturar preço, moeda e disponibilidade em estoque de produtos para feeds de lojas',
      'Declarar a identidade da marca Organização e as URLs do logotipo em todo o site',
      'Incorporar trilhas de hierarquia BreadcrumbList em páginas de categoria e de ferramentas',
    ],
    faqs: [
      {
        question: 'Onde devo colocar os dados estruturados JSON-LD em uma página?',
        answer:
          'Você pode colocar o <script type="application/ld+json"> dentro do <head> ou dentro do <body>; colocá-lo de forma limpa no <head> é a prática padrão.',
      },
      {
        question: 'Por que o gerador faz o escape de "<" como "\\u003c" na saída JSON?',
        answer:
          'Se a resposta de uma FAQ contiver "</script>", os navegadores fecham o bloco de script HTML antes da hora, a menos que "<" seja escapado como "\\u003c", o que continua sendo JSON 100% válido.',
      },
      {
        question: 'Adicionar Schema markup garante rich snippets no Google?',
        answer:
          'Não. Dados estruturados válidos tornam as páginas elegíveis para recursos aprimorados de busca, enquanto os buscadores decidem a exibição com base na qualidade geral da página e nas diretrizes.',
      },
      {
        question: 'O Gerador de Schema Markup é gratuito?',
        answer:
          'Sim. É totalmente gratuito e funciona inteiramente no seu navegador, então seu conteúdo nunca é enviado para um servidor.',
      },
      {
        question: 'Quais tipos do Schema.org o Gerador de Schema Markup aceita?',
        answer:
          'Ele aceita Artigo, FAQPage, Produto, Organização e BreadcrumbList, que cobrem os casos mais comuns de resultados ricos.',
      },
      {
        question: 'Qual é a diferença entre JSON-LD e Microdata?',
        answer:
          'O JSON-LD é um bloco <script> separado que você cola na sua página, enquanto o Microdata adiciona atributos diretamente aos seus elementos HTML visíveis.',
      },
      {
        question: 'Como adiciono o JSON-LD gerado ao meu site?',
        answer:
          'Copie o bloco completo <script type="application/ld+json"> e cole-o no <head> da página correspondente.',
      },
      {
        question: 'Como testo minha marcação de schema depois de gerá-la?',
        answer:
          'Cole a URL da página ou o código no Teste de Resultados Ricos ou no validador do Schema.org para conferir erros e melhorias elegíveis.',
      },
      {
        question: 'Posso combinar vários tipos de schema em uma página?',
        answer:
          'Sim. Uma mesma página pode ter marcação de Artigo, BreadcrumbList e FAQPage juntas, como blocos JSON-LD separados.',
      },
      {
        question: 'O que é o schema FAQPage e quando devo usá-lo?',
        answer:
          'Use-o em páginas que mostram uma lista visível de perguntas e respostas, como páginas de ajuda, para que os buscadores possam exibi-las como resultados expansíveis.',
      },
      {
        question: 'Quais campos de schema de Produto o gerador aceita?',
        answer:
          'Ele cobre nome do produto, preço, moeda e disponibilidade, que são os campos principais que os buscadores usam nos resultados de compras.',
      },
      {
        question: 'Para que serve o schema BreadcrumbList?',
        answer:
          'Ele descreve a hierarquia de navegação de uma página, como Início > Guias > Tópico, para que os buscadores possam mostrar trilhas de breadcrumb nos resultados.',
      },
      {
        question: 'Para que serve o schema de Organização?',
        answer:
          'Ele declara a identidade da sua marca, incluindo nome, logotipo e site oficial, para que os buscadores mostrem um painel de conhecimento consistente.',
      },
      {
        question: 'O Gerador de Schema Markup envia meu conteúdo para algum lugar?',
        answer:
          'Não. Toda a marcação é gerada localmente no seu navegador e nada do que você digita sai do seu dispositivo.',
      },
      {
        question: 'Posso exportar o schema como arquivo .jsonld?',
        answer:
          'Sim. O botão de exportação baixa um arquivo .jsonld independente que você pode guardar, versionar ou entregar a um desenvolvedor.',
      },
      {
        question: 'O que acontece se meu JSON-LD tiver um erro de sintaxe?',
        answer:
          'O bloco inteiro pode ser ignorado pelos buscadores, por isso sempre valide a saída com o Teste de Resultados Ricos antes de publicar.',
      },
      {
        question: 'Posso usar o Gerador de Schema Markup em uma página de receita ou evento?',
        answer:
          'O gerador cobre apenas cinco tipos, então páginas de Receita e Evento precisam de JSON-LD escrito à mão, que você pode validar com as mesmas ferramentas.',
      },
      {
        question: 'As respostas de FAQ no schema devem ser iguais ao texto visível da página?',
        answer:
          'Sim. O Google exige que os dados estruturados correspondam ao conteúdo que os usuários realmente veem na página, ou a marcação pode ser ignorada.',
      },
      {
        question: 'Posso editar o JSON-LD gerado manualmente?',
        answer:
          'Sim. É JSON padrão, então você pode adicionar ou mudar campos em qualquer editor e validar o resultado novamente antes de publicar.',
      },
      {
        question: 'O Gerador de Schema Markup funciona offline?',
        answer:
          'Sim. Ele funciona inteiramente no seu navegador, sem envio, então você pode criar marcação de schema sem conexão com a internet depois que a página carregar.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite os títulos ou nomes de página',
        description:
          'Cole um ou vários títulos (um por linha) na área de texto Títulos de Página.',
      },
      {
        title: 'Configure as regras de formatação do slug',
        description:
          'Digite seu Domínio Base, escolha hífen (-) ou sublinhado (_), defina o Tamanho Máximo do Slug e ative ou desative as opções de stop words e barra final.',
      },
      {
        title: 'Veja a pré-visualização dos slugs gerados',
        description:
          'Confira a tabela de resultados para ver a transliteração de acentos, a remoção de stop words e onde os slugs longos foram cortados no limite da palavra.',
      },
      {
        title: 'Ajuste o tamanho ou as configurações de stop words',
        description:
          'Se um slug perder o sentido ou cortar de forma estranha, aumente o tamanho máximo do slug ou desative a remoção de stop words e gere novamente.',
      },
      {
        title: 'Copie slugs individuais ou listas em massa',
        description:
          'Copie slugs individuais da tabela ou exporte todos os slugs ou todas as URLs completas com um clique.',
      },
      {
        title: 'Nunca renomeie um slug ativo sem redirecionamento',
        description:
          'Se você mudar o slug de uma página já indexada, adicione um redirecionamento 301 da URL antiga para que backlinks e rankings passem para a nova.',
      },
    ],
    examples: [
      {
        title: 'Removendo stop words e acentos de um título',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'Translitera é → e, expande & → and, remove "in" e junta os termos em minúsculas com hífens.',
      },
      {
        title: 'Encurtando um permalink longo de CMS no limite da palavra',
        input: 'Guia Completo de Como Melhorar o SEO do Seu Site em 2026 · Máx. 50 caracteres',
        output: 'guia-completo-como-melhorar-seo-site-2026',
        explanation: 'Corta no hífen mais próximo antes do limite, sem dividir palavras no meio.',
      },
    ],
    benefits: [
      'Processa dezenas de títulos de calendário editorial em lote ao mesmo tempo',
      'Corta slugs longos demais no limite do hífen/palavra em vez de cortar no meio da palavra',
      'Preserva o sentido principal mantendo slugs curtos intactos mesmo com a remoção de stop words ativada',
      'Segue as recomendações de estrutura de URL do Google (hífens ASCII UTF-8 em vez de sublinhados)',
    ],
    useCases: [
      'Planejar estruturas de URL limpas antes de lançar categorias de blog ou coleções de CMS',
      'Limpar títulos internacionais de produtos com acentos em slugs ASCII seguros',
      'Auditar permalinks de CMS longos demais até caminhos curtos de 4 a 6 palavras',
      'Preparar listas de destinos canônicos para alimentar o Gerador de Sitemap XML',
    ],
    faqs: [
      {
        question: 'Os slugs de URL de SEO devem usar hífen (-) ou sublinhado (_)?',
        answer:
          'O Google recomenda hífens (-) como separadores de palavras nas URLs, porque os analisadores de busca tratam hífens como espaços, enquanto sublinhados juntam as palavras vizinhas.',
      },
      {
        question: 'Remover stop words prejudica a legibilidade?',
        answer:
          'Remover palavras curtas de preenchimento como "a", "o" ou "de" deixa slugs de blog muito longos mais diretos. Mantenha as stop words se removê-las mudar o sentido principal (por exemplo, "como fazer").',
      },
      {
        question: 'Devo mudar os slugs de URLs ativas já indexadas?',
        answer:
          'Só se você implantar redirecionamentos 301 permanentes do slug antigo para o novo (usando nosso Gerador de Canônica e Redirecionamento 301), para que backlinks e rankings sejam transferidos de forma limpa.',
      },
      {
        question: 'O Gerador de Slug de URL é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro e sem limite de quantos títulos você converte em uma sessão.',
      },
      {
        question: 'Posso gerar slugs para muitos títulos de uma vez?',
        answer:
          'Sim. Cole um título por linha e a ferramenta converte o lote inteiro em uma única tabela, para você criar slugs de um calendário editorial inteiro de uma vez.',
      },
      {
        question: 'Como os caracteres acentuados são tratados nos slugs?',
        answer:
          'Os acentos são transliterados para ASCII simples — é vira e, ü vira u, ñ vira n — para que as URLs continuem legíveis e seguras em navegadores e servidores.',
      },
      {
        question: 'O que acontece com símbolos como & e @ em um slug?',
        answer:
          'O & é expandido para "and" e a maioria das outras pontuações é removida, porque símbolos em URLs podem quebrar links ou parecer confusos ao compartilhar.',
      },
      {
        question: 'O que são stop words e por que eu as removeria?',
        answer:
          'Stop words são palavras curtas de preenchimento como "a", "o", "de" e "em". Removê-las encurta slugs longos de blog sem mudar o sentido principal.',
      },
      {
        question: 'Posso manter as stop words nos meus slugs?',
        answer:
          'Sim. Desative a remoção de stop words e o gerador mantém todas as palavras do seu título, incluindo as palavras curtas de preenchimento.',
      },
      {
        question: 'Qual é o tamanho ideal para um slug de SEO?',
        answer:
          'Busque de 3 a 6 palavras com sentido. Use a configuração de Tamanho Máximo do Slug para manter os slugs curtos, e a ferramenta corta no limite da palavra para que as palavras nunca sejam divididas no meio.',
      },
      {
        question: 'Os slugs de URL devem ser em minúsculas?',
        answer:
          'Sim. Slugs em minúsculas evitam problemas de conteúdo duplicado, porque alguns servidores tratam /Blog-Post e /blog-post como páginas diferentes.',
      },
      {
        question: 'Posso usar sublinhados em vez de hífens nos slugs?',
        answer:
          'Você pode escolher sublinhados nas configurações, mas os hífens são recomendados porque os buscadores tratam hífens como separadores de palavras e sublinhados como junção.',
      },
      {
        question: 'Meus títulos são enviados para algum lugar?',
        answer:
          'Não. O Gerador de Slug de URL funciona inteiramente no seu navegador, então seus títulos nunca saem do seu dispositivo.',
      },
      {
        question: 'Como vejo a pré-visualização da URL completa com meu domínio?',
        answer:
          'Digite seu domínio no campo Domínio Base e a tabela de resultados mostra cada slug como uma URL completa que você pode copiar.',
      },
      {
        question: 'Meus slugs devem terminar com barra final?',
        answer:
          'É opcional, mas seja consistente: use a opção de barra final para combinar com o estilo de URL que seu site já usa, para não criar versões duplicadas.',
      },
      {
        question: 'Posso usar esta ferramenta para páginas de produto e categoria?',
        answer:
          'Sim. Ela funciona para qualquer nome de página — títulos de produtos, nomes de categorias, landing pages e títulos de documentação são convertidos da mesma forma.',
      },
      {
        question: 'Por que meu slug foi cortado mais curto do que o tamanho máximo que defini?',
        answer:
          'A ferramenta corta no hífen mais próximo antes do limite em vez de cortar no meio da palavra, por isso um slug pode terminar alguns caracteres abaixo do máximo.',
      },
      {
        question: 'O que acontece com títulos escritos em alfabetos não latinos?',
        answer:
          'Só os acentos latinos são transliterados; caracteres de outros alfabetos são removidos, então um título escrito totalmente em outro alfabeto pode gerar um slug muito curto. Adicione uma versão latina das palavras principais para o melhor resultado.',
      },
      {
        question: 'Posso exportar todos os meus slugs de uma vez?',
        answer:
          'Sim. Use os botões de cópia em massa para copiar todos os slugs, ou todas as URLs completas, com um clique, em vez de copiar um por um.',
      },
      {
        question: 'Qual é a diferença entre um slug e um permalink?',
        answer:
          'O slug é a parte final legível de uma URL, como "best-cafe-tools", enquanto o permalink é a URL completa, incluindo o domínio e as pastas.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole o rascunho do artigo ou o HTML',
        description:
          'Insira texto simples ou HTML bruto (mantenha Remover tags HTML ativado para ignorar tags de marcação e blocos de script/style).',
      },
      {
        title: 'Digite a frase alvo e o tamanho do n-grama',
        description:
          'Defina uma Palavra-chave/Frase Alvo opcional e alterne entre a análise de frases de 1 Palavra, 2 Palavras e 3 Palavras.',
      },
      {
        title: 'Revise a tabela de frequência',
        description:
          'Confira os principais termos e suas porcentagens (%) para confirmar o foco do tema e reduzir repetições de frases pouco naturais.',
      },
      {
        title: 'Confira contagem de palavras, tempo de leitura e vocabulário',
        description:
          'Use o total de palavras, a porcentagem de palavras únicas e o tempo de leitura para julgar se o rascunho está muito raso, muito longo ou muito repetitivo.',
      },
      {
        title: 'Reescreva frases usadas em excesso de forma natural',
        description:
          'Quando a mesma frase de 2 ou 3 palavras dominar a tabela, varie com sinônimos e pronomes em vez de apagar totalmente sua palavra-chave do tema.',
      },
      {
        title: 'Corrija contagens estranhas antes de confiar nos resultados',
        description:
          'Se os números parecerem errados, confira se Remover tags HTML está ativado e se menus de navegação, blocos de código ou rodapés não foram colados junto com o texto.',
      },
    ],
    examples: [
      {
        title: 'Detectando repetição de frase sem querer em um rascunho de 500 palavras',
        input: 'Rascunho de artigo + Alvo: "seo técnico" + Frases de 2 Palavras',
        output: 'Classifica os principais bigramas ("seo técnico", "meta descrições", "tags canônicas") com a porcentagem.',
        explanation: 'Destaca tanto o alinhamento com o tema principal quanto as frases repetitivas que você pode variar naturalmente.',
      },
      {
        title: 'Comparando a densidade da frase alvo com o total de palavras',
        input: 'Texto de 1.000 palavras + Alvo: "compressor de imagens"',
        output: 'A frase aparece 8 vezes, com densidade de 0,8% e tempo de leitura de 5 minutos.',
        explanation: 'Mostra como uma contagem pequena se traduz em porcentagem e em tempo de leitura para o rascunho.',
      },
    ],
    benefits: [
      'Analisa frases de várias palavras (bigramas e trigramas), e não só palavras isoladas',
      'Remove com segurança tags <script>, <style> e HTML antes de contar o texto',
      'Inclui orientação honesta contra o preenchimento mecânico de palavras-chave',
      'Mantém rascunhos não publicados e briefings de clientes estritamente na memória do navegador',
    ],
    useCases: [
      'Editar guias longos para garantir que os temas principais apareçam com clareza, sem preenchimento estranho',
      'Auditar rascunhos quanto ao equilíbrio do vocabulário do tema',
      'Revisar textos de landing pages limpos a partir de HTML exportado',
      'Conferir o tempo médio de leitura junto com o Contador de Palavras e o Verificador de Legibilidade',
    ],
    faqs: [
      {
        question: 'Existe uma porcentagem ideal de densidade de palavras-chave para o Google?',
        answer:
          'Não. O Google afirma explicitamente que não há um limite fixo de densidade de palavras-chave. Escreva naturalmente para os leitores e use as auditorias de densidade apenas para verificar a cobertura do tema e evitar repetições pouco naturais.',
      },
      {
        question: 'Como a opção Remover tags HTML trata os elementos <script> e <style>?',
        answer:
          'Ela remove blocos inteiros de <script> e <style> antes de remover as demais tags HTML, para que tokens de JavaScript ou CSS nunca poluam as estatísticas de palavras.',
      },
      {
        question: 'Posso analisar uma URL ativa de um concorrente digitando um domínio aqui?',
        answer:
          'Não. Cole o texto ou o código-fonte HTML diretamente — aplicativos de navegador não conseguem raspar sites de terceiros de outras origens sem proxies de servidor.',
      },
      {
        question: 'O Verificador de Densidade de Palavras-chave é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, e você pode analisar quantos rascunhos quiser.',
      },
      {
        question: 'O que é exatamente a densidade de palavras-chave?',
        answer:
          'A densidade de palavras-chave é a frequência com que uma palavra ou frase aparece como porcentagem do total de palavras de um texto. Uma frase usada 5 vezes em 500 palavras tem densidade de 1%.',
      },
      {
        question: 'O que conta como preenchimento de palavras-chave?',
        answer:
          'Preenchimento de palavras-chave é repetir uma frase de forma pouco natural só para subir no ranking. Fica ruim para os visitantes e pode prejudicar o ranking, por isso use esta ferramenta para detectar repetição, e não para atingir um número alvo.',
      },
      {
        question: 'O que são n-gramas e por que verificar frases de 2 e 3 palavras?',
        answer:
          'N-gramas são sequências de n palavras — bigramas são frases de 2 palavras e trigramas são frases de 3 palavras. Verificá-los revela frases repetidas que as contagens de palavras isoladas não mostram.',
      },
      {
        question: 'De quantas palavras preciso para uma verificação de densidade relevante?',
        answer:
          'Textos curtos geram porcentagens instáveis, então busque pelo menos 300 palavras para resultados estáveis. Trechos muito curtos ainda podem mostrar contagens brutas, mas trate as porcentagens com cautela.',
      },
      {
        question: 'A ferramenta conta palavras dentro de títulos e listas?',
        answer:
          'Sim. Todo o texto visível que você colar é contado, incluindo títulos, listas com marcadores e legendas, porque os buscadores também veem esse conteúdo.',
      },
      {
        question: 'Por que minha frase alvo mostra 0%?',
        answer:
          'Confira a ortografia e a formulação exatas — plurais, hífens e ordem das palavras precisam ser iguais. Também confira se Remover tags HTML está ativado, caso tenha colado HTML.',
      },
      {
        question: 'Posso verificar a densidade de várias palavras-chave de uma vez?',
        answer:
          'Cada execução acompanha uma frase alvo. Para verificar outra palavra-chave, mude a frase alvo e execute a análise novamente no mesmo texto.',
      },
      {
        question: 'O verificador conta stop words como "o" e "e"?',
        answer:
          'Sim, elas aparecem na tabela de frequência de 1 palavra, mas foque nas palavras e frases do tema — as stop words são naturalmente frequentes em todo texto e dizem pouco sobre SEO.',
      },
      {
        question: 'Meu rascunho é enviado para algum lugar?',
        answer:
          'Não. O Verificador de Densidade de Palavras-chave funciona inteiramente no seu navegador, então rascunhos não publicados e textos de clientes nunca saem do seu dispositivo.',
      },
      {
        question: 'Qual é um bom tempo de leitura para um post de blog?',
        answer:
          'Depende do tema, mas a ferramenta mostra o tempo de leitura para você julgar se um post corresponde à expectativa do leitor — um guia rápido pode ter 3 minutos, um tutorial aprofundado 10 ou mais.',
      },
      {
        question: 'Posso colar HTML copiado do meu CMS?',
        answer:
          'Sim. Cole o HTML bruto e mantenha Remover tags HTML ativado para que tags, scripts e estilos sejam removidos antes da contagem das palavras.',
      },
      {
        question: 'O verificador funciona com texto em outros idiomas?',
        answer:
          'Sim. A contagem de palavras funciona para qualquer idioma que separe palavras com espaços, e as tabelas de n-gramas vão listar as frases mais frequentes nesse idioma.',
      },
      {
        question: 'Como reduzo a densidade sem remover meu tema?',
        answer:
          'Use sinônimos, pronomes e formulações variadas em vez de repetir a palavra-chave exata. O tema continua claro enquanto o texto fica natural.',
      },
      {
        question: 'O que significa diversidade de vocabulário?',
        answer:
          'É a proporção de palavras únicas em relação ao total de palavras. Uma proporção maior geralmente significa uma escrita mais rica e variada; uma proporção muito baixa pode indicar texto repetitivo.',
      },
      {
        question: 'Posso analisar um PDF ou documento do Word?',
        answer:
          'A ferramenta aceita texto colado, então copie o texto do seu PDF ou arquivo do Word e cole aqui — a formatação não é necessária para uma verificação de densidade.',
      },
      {
        question: 'Por que as porcentagens mudam quando eu mudo o tamanho do n-grama?',
        answer:
          'Cada tamanho de n-grama tem seu próprio total: um texto de 500 palavras tem 500 palavras isoladas, mas só 499 frases de duas palavras, então a mesma contagem de frase gera uma porcentagem levemente diferente.',
      },
    ],
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
        'Gere tags hreflang e canônicas para páginas multilíngues e regras 301 para Cloudflare Pages, Apache e Nginx — prontas para copiar e publicar no navegador.',
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
    instructions: [
      {
        title: 'Escolha Hreflang ou Redirecionamentos 301',
        description:
          'Selecione Tags Canônicas e Hreflang para SEO internacional ou Gerador de Regras de Redirecionamento 301 para migrações de URL.',
      },
      {
        title: 'Digite os idiomas ou pares de migração de URL',
        description:
          'Adicione códigos ISO de idioma-região (`en-US`, `en-GB`, `x-default`) e URLs, ou cole pares de caminhos antigos para novos.',
      },
      {
        title: 'Revise as tags ou regras geradas',
        description:
          'Confira cada código de idioma, URL e par de redirecionamento em busca de erros de digitação antes de copiar — um código errado pode quebrar todo o conjunto de hreflang.',
      },
      {
        title: 'Adicione x-default e canônicas autorreferentes',
        description:
          'Inclua um idioma de fallback x-default e garanta que cada página liste a si mesma como sua própria canônica.',
      },
      {
        title: 'Copie a configuração pronta para a plataforma',
        description:
          'Copie diretamente as tags HTML `<link>`, as linhas XML `<xhtml:link>` ou as regras de `_redirects` / `.htaccess` / `nginx`.',
      },
      {
        title: 'Valide depois de publicar',
        description:
          'Depois de publicar, veja o código-fonte da página ou use um validador de hreflang para confirmar que as tags estão presentes, são recíprocas e apontam para as URLs corretas.',
      },
    ],
    examples: [
      {
        title: 'Regra de migração 301 do Cloudflare Pages',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Gera a sintaxe exata do _redirects do Cloudflare Pages com o status 301 permanente explícito.',
      },
      {
        title: 'Conjunto de hreflang para páginas em inglês e espanhol',
        input: 'en-US: /en/guide · es: /es/guia · x-default: /guide',
        output: '<link rel="alternate" hreflang="en-US" href="...">, hreflang="es" e hreflang="x-default"',
        explanation: 'Cada versão aponta para si mesma como canônica e para as demais como alternativas recíprocas.',
      },
    ],
    benefits: [
      'Gera os formatos HTML <link rel="alternate"> e XML <xhtml:link> de forma consistente',
      'Aceita a sintaxe de _redirects do Cloudflare Pages, .htaccess do Apache e de servidor Nginx',
      'Incentiva canônicas autorreferentes e idiomas de fallback x-default',
      'Normaliza automaticamente as barras iniciais nos caminhos de origem dos redirecionamentos',
    ],
    useCases: [
      'Lançar páginas regionais em inglês/espanhol/francês de forma limpa, sem penalidade por duplicidade',
      'Preservar o valor dos backlinks ao renomear slugs durante um redesign',
      'Gerar arquivos de publicação /public/_redirects do Cloudflare Pages em segundos',
      'Verificar conjuntos recíprocos de hreflang antes de enviar sitemaps internacionais',
    ],
    faqs: [
      {
        question: 'As tags hreflang precisam ser bidirecionais / recíprocas?',
        answer:
          'Sim. Se a Página A aponta para a Página B com hreflang="es", a Página B precisa apontar de volta para a Página A com hreflang="en" (e para si mesma), senão os buscadores ignoram a anotação.',
      },
      {
        question: 'Quando devo usar x-default no hreflang?',
        answer:
          'Use hreflang="x-default" para designar sua página internacional de fallback para visitantes cujo idioma/região do navegador não corresponde a nenhuma alternativa específica.',
      },
      {
        question: 'As URLs canônicas devem apontar entre idiomas (por exemplo, es → en)?',
        answer:
          'Não. Cada versão traduzida deve declarar uma canônica autorreferente apontando para si mesma, enquanto o hreflang conecta os equivalentes localizados.',
      },
      {
        question: 'O Gerador de Hreflang é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, e você pode gerar quantos conjuntos de hreflang e regras de redirecionamento precisar.',
      },
      {
        question: 'O que é hreflang e por que ele importa?',
        answer:
          'Hreflang é uma anotação HTML ou XML que diz aos buscadores qual versão de idioma e região de uma página mostrar a cada visitante, para que usuários de inglês vejam a página em inglês e usuários de espanhol vejam a página em espanhol.',
      },
      {
        question: 'Qual formato os códigos de idioma-região devem usar?',
        answer:
          'Use códigos de idioma ISO com uma região ISO opcional, como en, es, fr-CA ou en-GB. O idioma vem primeiro, depois um hífen e a região em maiúsculas.',
      },
      {
        question: 'Preciso de hreflang se meu site tem só um idioma?',
        answer:
          'Não. O hreflang só é útil quando o mesmo conteúdo existe em mais de um idioma ou versão regional.',
      },
      {
        question: 'Posso colocar o hreflang no meu sitemap XML em vez do HTML?',
        answer:
          'Sim. A ferramenta gera os dois formatos: tags de link HTML para o head da página e blocos xhtml:link para o sitemap XML. Escolha um lugar e mantenha a consistência.',
      },
      {
        question: 'O que é uma canônica autorreferente?',
        answer:
          'É uma tag canônica em uma página que aponta para a própria página. Toda versão de uma página deve incluir uma, incluindo cada versão traduzida.',
      },
      {
        question: 'Quando devo usar um redirecionamento 301 em vez de uma tag canônica?',
        answer:
          'Use um redirecionamento 301 quando uma página mudou permanentemente para uma nova URL. Use uma tag canônica quando duas páginas parecidas precisam continuar ativas e você quer que os buscadores prefiram uma delas.',
      },
      {
        question: 'Qual é a diferença entre um redirecionamento 301 e um 302?',
        answer:
          'Um 301 é permanente e passa a maioria dos sinais de ranking para a nova URL; um 302 é temporário e diz aos buscadores que a URL antiga pode voltar, então é a escolha errada para uma mudança permanente.',
      },
      {
        question: 'Como funcionam os _redirects do Cloudflare Pages?',
        answer:
          'Você coloca um arquivo _redirects na pasta public do site, com uma regra por linha — caminho antigo, caminho novo e código de status — e o Cloudflare aplica os redirecionamentos quando o site é publicado.',
      },
      {
        question: 'Posso redirecionar uma pasta inteira com uma regra?',
        answer:
          'A ferramenta gera uma regra por par de URLs. Para uma mudança de pasta inteira, use uma regra curinga ou splat no Cloudflare Pages ou no Apache, ou gere a lista completa de pares aqui.',
      },
      {
        question: 'Os redirecionamentos 301 passam sinais de ranking para a página nova?',
        answer:
          'Sim. Um redirecionamento 301 passa a maioria dos sinais de ranking e do valor de links da página antiga para a nova URL, por isso é a escolha padrão para mudanças permanentes.',
      },
      {
        question: 'A URL antiga deve ficar no meu sitemap depois de um redirecionamento 301?',
        answer:
          'Não. Remova as URLs redirecionadas do seu sitemap e liste apenas as novas URLs de destino, para que os buscadores rastreiem as páginas atuais.',
      },
      {
        question: 'Por quanto tempo devo manter um redirecionamento 301 ativo?',
        answer:
          'Mantenha por pelo menos um ano, e de preferência para sempre. Removê-lo cedo demais pode quebrar backlinks e favoritos antigos que ainda apontam para a URL antiga.',
      },
      {
        question: 'O hreflang resolve problemas de conteúdo duplicado?',
        answer:
          'Não sozinho. O hreflang diz aos buscadores qual versão mostrar a cada público, mas páginas realmente duplicadas no mesmo idioma ainda precisam de tags canônicas ou consolidação.',
      },
      {
        question: 'O que acontece se eu usar um código de idioma errado?',
        answer:
          'Os buscadores ignoram códigos inválidos, então um erro como en-UK em vez de en-GB quebra silenciosamente aquela versão de idioma. Confira cada código antes de publicar.',
      },
      {
        question: 'Minha lista de URLs é enviada para algum lugar?',
        answer:
          'Não. O Construtor de Canônica, Hreflang e Redirecionamento 301 funciona inteiramente no seu navegador, então suas URLs e planos de migração nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso gerar tags hreflang para mais de dois idiomas?',
        answer:
          'Sim. Adicione quantas linhas de idioma seu site aceitar — a ferramenta cria um conjunto recíproco completo cobrindo todas as versões de idioma que você inserir.',
      },
    ],
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
    instructions: [
      {
        title: 'Copie o código-fonte HTML da sua página',
        description:
          'Abra Ver Código-Fonte da Página (ou confira o dist/index.html gerado) e cole o HTML na área de texto do código-fonte.',
      },
      {
        title: 'Revise a Pontuação da Auditoria DOM e as listas',
        description:
          'Confira os indicadores de aprovado/alerta para título, meta descrição, H1 único, link canônico, texto alternativo e dados estruturados.',
      },
      {
        title: 'Verifique a estrutura de títulos e os links',
        description:
          'Percorra a árvore extraída de H1–H4 e a contagem de links internos/externos para corrigir níveis pulados ou tags faltando.',
      },
      {
        title: 'Corrija os alertas em ordem de prioridade',
        description:
          'Comece com um título faltando ou longo demais e uma meta descrição, depois tags H1 duplicadas e texto alternativo de imagem faltando.',
      },
      {
        title: 'Cole novamente e audite de novo após as correções',
        description:
          'Cole o HTML atualizado e execute a auditoria novamente para confirmar que a pontuação melhorou e que nenhum alerta novo apareceu.',
      },
      {
        title: 'Audite páginas renderizadas por JavaScript do jeito certo',
        description:
          'Se as meta tags estiverem faltando no Ver Código-Fonte bruto em uma página React ou SPA, copie o outerHTML ativo do painel Elements do DevTools do navegador.',
      },
    ],
    examples: [
      {
        title: 'Auditando uma exportação de HTML estático renderizado',
        input: 'Documento <html> completo com <title>, <meta description>, H1/H2 e JSON-LD',
        output: '6/6 verificações aprovadas · Estrutura H1–H4 + divisão de links internos/externos',
        explanation: 'Usa o DOMParser nativo do navegador de forma limpa, sem executar scripts não confiáveis.',
      },
      {
        title: 'Encontrando H1 duplicado e alt faltando em um modelo de blog',
        input: 'HTML de post de blog com dois H1 e três imagens sem alt',
        output: 'Alertas: H1 duplicado e 3 imagens sem texto alternativo, com a pontuação reduzida.',
        explanation: 'A lista de verificação mostra exatamente o que corrigir primeiro no modelo.',
      },
    ],
    benefits: [
      'Usa o DOMParser nativo (nunca executa tags <script> coladas ou cargas externas)',
      'É honesto sobre os limites de CORS do navegador — nunca finge raspar URLs remotas bloqueadas',
      'Extrai a estrutura completa do documento H1–H4 de forma limpa',
      'Verifica a presença de Open Graph e JSON-LD junto com as tags clássicas de SEO',
    ],
    useCases: [
      'QA pré-publicação em builds de teste e exportações de HTML estático',
      'Verificar modelos de blog de CMS quanto a tags <h1> duplicadas acidentais ou atributos alt vazios',
      'Verificar se páginas renderizadas no servidor emitem tags canônicas e meta de forma limpa',
      'Inspecionar páginas HTML de localhost ou com login que rastreadores na nuvem não conseguem alcançar',
    ],
    faqs: [
      {
        question: 'Por que esta ferramenta pede para eu colar o código-fonte HTML em vez de digitar uma URL?',
        answer:
          'Os navegadores aplicam políticas de Compartilhamento de Recursos entre Origens (CORS) que impedem o JavaScript do navegador de ler sites externos arbitrários, e URLs de localhost ou de teste privado não são acessíveis por servidores públicos. Colar o Ver Código-Fonte da Página torna a auditoria local 100% confiável e privada.',
      },
      {
        question: 'SPAs renderizadas por JavaScript podem ser auditadas corretamente com o Ver Código-Fonte bruto?',
        answer:
          'Para SPAs renderizadas no cliente, em que o React injeta as meta tags em tempo de execução, copie o outerHTML ativo do painel Elements do DevTools do Chrome/Firefox em vez do Ver Código-Fonte bruto.',
      },
      {
        question: 'O DOMParser executa scripts dentro do HTML colado?',
        answer:
          'Não. O DOMParser.parseFromString(..., "text/html") cria uma árvore DOM inerte apenas para inspeção, sem executar JavaScript ou carregar imagens externas.',
      },
      {
        question: 'O Verificador de SEO On-Page é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, e você pode auditar quantas páginas quiser.',
      },
      {
        question: 'Qual é o tamanho ideal da tag de título?',
        answer:
          'Busque de 50 a 60 caracteres. Títulos mais longos são cortados nos resultados de busca, enquanto títulos muito curtos desperdiçam a chance de descrever a página com clareza.',
      },
      {
        question: 'Qual é o tamanho ideal da meta descrição?',
        answer:
          'Busque de 150 a 160 caracteres. Esse tamanho geralmente é exibido por completo nos resultados de busca sem ser cortado.',
      },
      {
        question: 'Quantas tags H1 uma página deve ter?',
        answer:
          'Uma. Um único H1 indica o tema principal da página; os subtópicos ficam nos títulos H2 e H3 abaixo dele.',
      },
      {
        question: 'Posso pular níveis de título, por exemplo H1 e depois H3?',
        answer:
          'Evite. Mantenha a hierarquia em ordem — H1, depois H2, depois H3 — para que buscadores e leitores de tela consigam acompanhar a estrutura da página.',
      },
      {
        question: 'O que acontece se minha página não tiver tag canônica?',
        answer:
          'Os buscadores vão escolher uma URL canônica por conta própria, que pode não ser a versão que você prefere. Adicionar uma explicitamente elimina a dúvida.',
      },
      {
        question: 'Por que o texto alternativo de imagem importa para o SEO?',
        answer:
          'O texto alternativo descreve as imagens para buscadores e leitores de tela, ajuda as imagens a ranquear na busca de imagens e mantém a página utilizável quando uma imagem não carrega.',
      },
      {
        question: 'O que é JSON-LD e por que devo verificá-lo?',
        answer:
          'JSON-LD é um bloco de dados estruturados que descreve o conteúdo da sua página para os buscadores, alimentando resultados ricos como avaliações, FAQs e breadcrumbs. O verificador confirma se ele está presente.',
      },
      {
        question: 'O verificador audita tags Open Graph?',
        answer:
          'Sim. Ele informa se tags Open Graph como og:title e og:image estão presentes, para que sua página seja pré-visualizada corretamente ao compartilhar nas redes sociais.',
      },
      {
        question: 'Posso auditar uma página que precisa de login?',
        answer:
          'Sim. Como você cola o HTML, é possível auditar páginas privadas, de teste e de localhost que rastreadores públicos não conseguem alcançar.',
      },
      {
        question: 'Meu HTML é enviado para algum lugar?',
        answer:
          'Não. O Verificador de SEO On-Page funciona inteiramente no seu navegador, então o código-fonte da sua página nunca sai do seu dispositivo.',
      },
      {
        question: 'Minha pontuação de auditoria está baixa — o que devo corrigir primeiro?',
        answer:
          'Corrija os problemas nesta ordem: um título faltando ou longo demais, uma meta descrição faltando, tags H1 duplicadas e depois texto alternativo de imagem faltando.',
      },
      {
        question: 'O verificador conta links internos e externos?',
        answer:
          'Sim. Ele conta links internos e externos separadamente, para que você veja se uma página tem links externos suficientes e se a navegação interna está presente.',
      },
      {
        question: 'Posso auditar minha página inicial e meus posts de blog com a mesma ferramenta?',
        answer:
          'Sim. Cole o código-fonte HTML de cada página separadamente e audite uma por vez — cada página recebe sua própria pontuação e lista de verificação.',
      },
      {
        question: 'Por que algumas verificações mostram alertas em vez de falhas?',
        answer:
          'Os alertas sinalizam problemas de boas práticas que valem a pena corrigir, mas não são erros críticos, como um título um pouco longo ou um nível de título pulado.',
      },
      {
        question: 'Funciona para páginas do WordPress?',
        answer:
          'Sim. Abra Ver Código-Fonte da Página em qualquer página do WordPress, copie o HTML e cole aqui — o verificador funciona com a saída de qualquer CMS.',
      },
      {
        question: 'Com que frequência devo executar uma auditoria de SEO on-page?',
        answer:
          'Execute uma sempre que mudar um modelo, publicar um novo tipo de página ou após um redesign — e audite novamente após as correções para confirmar que a pontuação melhorou.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha as diretivas de indexação e de links',
        description:
          'Defina index/noindex, follow/nofollow e restrições opcionais como noarchive, nosnippet ou noimageindex.',
      },
      {
        title: 'Ajuste os limites de snippet e de pré-visualização',
        description:
          'Configure max-snippet (-1 para ilimitado), max-image-preview (large para o Google Discover) e max-video-preview.',
      },
      {
        title: 'Copie a tag HTML ou o cabeçalho HTTP',
        description:
          'Use a meta tag HTML dentro do <head> ou implante o bloco de cabeçalho X-Robots-Tag para PDFs e downloads que não são HTML.',
      },
      {
        title: 'Escolha o formato de saída certo',
        description:
          'Use a meta tag HTML para páginas normais, o X-Robots-Tag para PDFs e outros arquivos que não são HTML, e o bloco _headers para regras de caminho do Cloudflare.',
      },
      {
        title: 'Coloque a saída no lugar certo',
        description:
          'Coloque a meta tag dentro do <head> da sua página ou adicione as regras de cabeçalho à configuração do seu servidor ou ao arquivo _headers do Cloudflare e depois publique.',
      },
      {
        title: 'A página ainda aparece na busca?',
        description:
          'O noindex só funciona depois que os buscadores rastrearem a página novamente, o que pode levar dias. Confira se o robots.txt não está bloqueando o rastreamento e confirme no Search Console.',
      },
    ],
    examples: [
      {
        title: 'Excluindo downloads privados de PDF via _headers do Cloudflare Pages',
        input: 'noindex, nofollow · Caminho: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'O X-Robots-Tag HTTP funciona para PDFs, imagens e arquivos que não são HTML e não têm elemento <head>.',
      },
      {
        title: 'Página de agradecimento com noindex e max-snippet zero',
        input: 'noindex, nofollow · max-snippet: 0',
        output: '<meta name="robots" content="noindex, nofollow, max-snippet:0">',
        explanation: 'Páginas de agradecimento ficam fora do índice e sem trecho de texto nos resultados.',
      },
    ],
    benefits: [
      'Gera ao mesmo tempo <meta> HTML, X-Robots-Tag HTTP genérico e _headers do Cloudflare Pages',
      'Inclui os padrões max-image-preview:large recomendados pelo Google Discover',
      'Evita combinações conflitantes automaticamente (desativa os controles de snippet/imagem quando nosnippet/noimageindex estão ativos)',
      'Torna simples a desindexação de PDFs e arquivos que não são HTML via cabeçalhos HTTP',
    ],
    useCases: [
      'Evitar que páginas de agradecimento, resultados de busca interna ou portais de membros entrem no índice do Google',
      'Desindexar brochuras em PDF ou whitepapers hospedados via cabeçalhos X-Robots-Tag',
      'Ativar max-image-preview:large para artigos editoriais voltados ao Google Discover',
      'Adicionar limites rígidos de noarchive ou de tamanho de snippet em documentação paga ou sensível',
    ],
    faqs: [
      {
        question: 'Quando devo usar X-Robots-Tag em vez de <meta name="robots">?',
        answer:
          'Use cabeçalhos HTTP X-Robots-Tag para arquivos que não são HTML (como PDFs, planilhas ou imagens) ou ao aplicar regras de indexação em uma pasta inteira via regras de CDN.',
      },
      {
        question: 'Devo combinar Disallow do robots.txt com <meta name="robots" content="noindex">?',
        answer:
          'Não! Se uma URL estiver bloqueada no robots.txt, os robôs de busca não conseguem rastrear a página para ler a tag HTML <meta name="robots" content="noindex"> dentro dela. Permita o rastreamento se você depende do noindex por meta tag.',
      },
      {
        question: 'O que significa max-snippet:-1?',
        answer:
          'O valor -1 permite que os buscadores escolham qualquer tamanho de snippet que considerem útil, enquanto 0 impede trechos de texto e números positivos (como 160) limitam o tamanho do snippet em caracteres.',
      },
      {
        question: 'O Gerador de Meta Tags Robots é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, e você pode gerar quantas tags e regras de cabeçalho precisar.',
      },
      {
        question: 'O que o noindex faz?',
        answer:
          'O noindex diz aos buscadores para não incluírem uma página nos resultados de busca. A página continua ativa e visitável, mas não vai aparecer no Google ou no Bing.',
      },
      {
        question: 'O que o nofollow faz?',
        answer:
          'O nofollow diz aos buscadores para não seguirem os links de uma página nem passarem sinais de ranking por eles. É útil para páginas com links não confiáveis ou pagos.',
      },
      {
        question: 'Qual é a diferença entre robots.txt e uma meta tag robots?',
        answer:
          'O robots.txt bloqueia o rastreamento de uma URL, enquanto uma meta tag robots controla se uma página rastreada é indexada. São problemas diferentes e não devem ser combinados sem cuidado.',
      },
      {
        question: 'Quanto tempo o noindex leva para funcionar?',
        answer:
          'Ele só passa a valer depois que os buscadores rastrearem a página novamente, o que pode levar dias ou semanas, dependendo da frequência com que a página é visitada.',
      },
      {
        question: 'O que é max-image-preview:large?',
        answer:
          'Ele permite que os buscadores mostrem pré-visualizações grandes de imagens da sua página, algo que o Google recomenda para páginas voltadas ao Google Discover.',
      },
      {
        question: 'O que o nosnippet faz?',
        answer:
          'O nosnippet impede que os buscadores mostrem qualquer trecho de texto da página nos resultados de busca, então só o título e a URL aparecem.',
      },
      {
        question: 'O que o noarchive faz?',
        answer:
          'O noarchive impede que os buscadores ofereçam uma cópia em cache da sua página, o que é útil para conteúdo sensível ao tempo ou que muda com frequência.',
      },
      {
        question: 'O que o noimageindex faz?',
        answer:
          'O noimageindex diz aos buscadores para não indexarem as imagens de uma página, enquanto a página em si ainda pode aparecer nos resultados normais de busca.',
      },
      {
        question: 'Posso aplicar noindex em um arquivo PDF?',
        answer:
          'Sim. PDFs não têm head HTML, então use o cabeçalho HTTP X-Robots-Tag — a ferramenta gera o bloco exato de cabeçalho para você.',
      },
      {
        question: 'Devo aplicar noindex em páginas de agradecimento e checkout?',
        answer:
          'Sim. Páginas de agradecimento, etapas de checkout, resultados de busca interna e áreas de membros geralmente não agregam valor de busca e costumam ser definidas como noindex.',
      },
      {
        question: 'Posso combinar noindex e nofollow na mesma página?',
        answer:
          'Sim. Eles controlam coisas diferentes — indexação e seguimento de links — e costumam ser usados juntos em páginas privadas ou utilitárias.',
      },
      {
        question: 'O que é um arquivo _headers do Cloudflare?',
        answer:
          'É um arquivo na pasta public do seu site que mapeia caminhos de URL para cabeçalhos de resposta HTTP. A ferramenta gera um bloco pronto para colar para qualquer caminho que você escolher.',
      },
      {
        question: 'As meta tags robots funcionam no Bing e em outros buscadores?',
        answer:
          'Sim. A maioria dos grandes buscadores respeita as diretivas padrão de robots, embora alguns aceitem só um subconjunto — fique com as diretivas comuns para a cobertura mais ampla.',
      },
      {
        question: 'Minha configuração é enviada para algum lugar?',
        answer:
          'Não. O Gerador de Meta Tags Robots funciona inteiramente no seu navegador, então suas configurações nunca saem do seu dispositivo.',
      },
      {
        question: 'O que acontece se eu escolher diretivas conflitantes?',
        answer:
          'A ferramenta evita combinações conflitantes automaticamente — por exemplo, desativa os controles de snippet e de pré-visualização de imagem quando nosnippet ou noimageindex está ativo.',
      },
      {
        question: 'Devo usar noindex ou simplesmente excluir a página?',
        answer:
          'Se uma página deve sumir de vez, exclua-a e deixe-a retornar status 404 ou 410. Use noindex quando a página precisa continuar ativa, mas não deve aparecer nos resultados de busca.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha uma imagem de origem',
        description:
          'Selecione qualquer imagem PNG, JPG, WebP ou GIF do seu dispositivo para decodificar as dimensões e o tamanho original em bytes.',
      },
      {
        title: 'Escolha o formato alvo, o limite de largura e a qualidade',
        description:
          'Selecione WebP ou JPG para uma economia grande em bytes, aplique opcionalmente um limite de largura máxima (como 1920 px ou 1280 px) e ajuste o controle de qualidade de 10% a 100%.',
      },
      {
        title: 'Execute a compressão',
        description:
          'Clique em Comprimir para recodificar a imagem localmente no seu navegador e ver o novo tamanho em bytes na hora.',
      },
      {
        title: 'Compare antes e depois',
        description:
          'Confira a pré-visualização lado a lado e a economia exata em bytes e em porcentagem para garantir que a qualidade continua boa.',
      },
      {
        title: 'Baixe o arquivo comprimido',
        description:
          'Clique em Baixar para salvar a imagem otimizada no seu dispositivo e repita o processo para outro arquivo quando precisar.',
      },
      {
        title: 'Dica: a saída ficou maior que a entrada?',
        description:
          'Se um PNG pequeno crescer após a compressão, mude o formato de saída para WebP ou JPG, ou reduza um pouco o controle de qualidade, e comprima novamente.',
      },
    ],
    examples: [
      {
        title: 'Otimizando uma foto de capa de 2,4 MB para um artigo de blog',
        input: 'JPG 3840×2160 · Saída: WebP · Largura máx.: 1280 px · Qualidade: 80%',
        output: 'WebP 1280×720 geralmente ~85–140 KB (-94% de redução de carga)',
        explanation: 'Combinar o limite de dimensões com a compressão moderna WebP acelera muito o Largest Contentful Paint.',
      },
      {
        title: 'Reduzindo uma captura de tela para anexo de e-mail',
        input: 'PNG 1920×1080 de 1,8 MB · Saída: JPG · Qualidade: 75%',
        output: 'JPG de cerca de 180 KB, pequeno o bastante para anexos de e-mail.',
        explanation: 'O JPG com perda reduz capturas de tela pesadas a uma fração do tamanho original.',
      },
    ],
    benefits: [
      'Zero envio ao servidor mantém gráficos de produtos não lançados e fotos privadas totalmente locais',
      'Aceita recodificação em WebP, JPEG (com preenchimento branco automático da transparência) e PNG',
      'Mostra os tamanhos reais em bytes antes e depois e a economia em porcentagem na hora',
      'Limites opcionais de largura máxima redimensionam fotos de câmera grandes em uma só passada',
    ],
    useCases: [
      'Diminuir banners de capa e capturas de tela para melhorar Core Web Vitals e LCP',
      'Preparar anexos mais leves para e-mails, portais e envios de CMS',
      'Converter capturas de tela pesadas em arquivos WebP leves para a web',
      'Verificar rapidamente o equilíbrio ideal entre qualidade e fidelidade visual',
    ],
    faqs: [
      {
        question: 'Por que comprimir um PNG pequeno em PNG às vezes aumenta o tamanho?',
        answer:
          'O Canvas do navegador recodifica PNGs usando fluxos DEFLATE sem perda padrão, sem ferramentas especializadas de quantização de paleta como o pngquant. Mudar o Formato de Saída para WebP ou JPG geralmente reduz muito o tamanho do arquivo.',
      },
      {
        question: 'Minhas fotos são enviadas para um servidor externo de compressão?',
        answer:
          'Não. Toda a decodificação, o redimensionamento e a recodificação via Canvas acontecem estritamente dentro da memória do seu navegador.',
      },
      {
        question: 'O que acontece com fundos transparentes se eu escolher JPG?',
        answer:
          'Como o JPEG não aceita transparência alfa, as regiões transparentes são preenchidas de forma limpa com branco sólido (#ffffff) antes da codificação.',
      },
      {
        question: 'O Compressor de Imagens é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, sem marcas d’água e sem limite de quantas imagens você comprime.',
      },
      {
        question: 'Quais formatos de imagem posso comprimir?',
        answer:
          'Você pode comprimir imagens PNG, JPG, WebP e GIF, e baixar o resultado como WebP, JPG ou PNG.',
      },
      {
        question: 'Quanto o Compressor de Imagens pode diminuir minha foto?',
        answer:
          'A economia depende do formato original e da configuração de qualidade, mas fotos convertidas para WebP com 80% de qualidade costumam diminuir de 50 a 90%.',
      },
      {
        question: 'Comprimir minha imagem vai reduzir a qualidade?',
        answer:
          'Formatos com perda, como WebP e JPG, trocam um pouco de detalhe por arquivos bem menores. Use o controle de qualidade e a pré-visualização para encontrar o equilíbrio que você gosta, ou mantenha PNG para resultados sem perda.',
      },
      {
        question: 'O Compressor de Imagens redimensiona as dimensões da minha imagem?',
        answer:
          'Só se você definir um limite de largura máxima. Caso contrário, as dimensões em pixels ficam iguais e só o tamanho do arquivo muda.',
      },
      {
        question: 'Posso comprimir imagens para anexos de e-mail?',
        answer:
          'Sim, comprimir primeiro deixa fotos grandes pequenas o bastante para caber nos limites de anexo de e-mail sem dividi-las em várias mensagens.',
      },
      {
        question: 'Qual configuração de qualidade devo escolher para imagens de site?',
        answer:
          'Uma qualidade de 75 a 85% em WebP geralmente parece quase idêntica à original, mantendo os arquivos pequenos o bastante para carregamentos rápidos.',
      },
      {
        question: 'Por que devo converter JPG para WebP ao comprimir?',
        answer:
          'O WebP usa compressão mais eficiente que o JPG, então a mesma foto com a mesma qualidade visual geralmente fica bem menor.',
      },
      {
        question: 'Posso comprimir várias imagens de uma vez?',
        answer:
          'O compressor processa uma imagem por vez, para que você possa ajustar qualidade, largura e formato de cada foto antes de baixá-la.',
      },
      {
        question: 'A compressão funciona offline?',
        answer:
          'Sim, depois que a página carrega, toda a compressão acontece localmente no seu navegador, então funciona sem conexão com a internet.',
      },
      {
        question: 'Minha imagem comprimida vai ter marca d’água?',
        answer:
          'Não, as imagens baixadas nunca incluem marcas d’água ou logotipos.',
      },
      {
        question: 'Qual é o melhor formato para comprimir capturas de tela?',
        answer:
          'O WebP geralmente gera os menores arquivos para capturas de tela. Use PNG só quando precisar de qualidade sem perda e pixel a pixel.',
      },
      {
        question: 'Posso comprimir uma imagem sem mudar suas dimensões?',
        answer:
          'Sim, deixe o limite de largura máxima vazio e a ferramenta mantém a largura e a altura originais, reduzindo só o tamanho do arquivo.',
      },
      {
        question: 'O Compressor de Imagens mantém os metadados da imagem?',
        answer:
          'A recodificação via Canvas do navegador geralmente remove metadados EXIF, como configurações da câmera e localização, o que também ajuda a diminuir o arquivo.',
      },
      {
        question: 'Posso usar o Compressor de Imagens no celular?',
        answer:
          'Sim, ele funciona em qualquer navegador moderno de celular. Escolha uma imagem da sua galeria de fotos e baixe o resultado comprimido da mesma forma.',
      },
      {
        question: 'Qual é o tamanho máximo de imagem que posso comprimir?',
        answer:
          'Não há um limite fixo de servidor, porque nada é enviado. Imagens muito grandes são limitadas apenas pela memória do seu dispositivo e pelo tamanho do Canvas do navegador.',
      },
      {
        question: 'Como comprimo uma imagem para menos de 100 KB?',
        answer:
          'Escolha a saída WebP, defina uma largura máxima como 1280 px e reduza o controle de qualidade passo a passo até o tamanho do arquivo exibido ficar abaixo de 100 KB.',
      },
    ],
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
    instructions: [
      {
        title: 'Carregue sua imagem',
        description:
          'Envie qualquer imagem PNG, JPG, WebP ou GIF para ler a largura e a altura originais em pixels.',
      },
      {
        title: 'Defina largura, altura e modo de ajuste',
        description:
          'Digite pixels personalizados (com Travar Proporção opcional) ou selecione um modelo social e escolha Corte Central Cover ou Esticar/Escala Exata.',
      },
      {
        title: 'Escolha um formato de saída',
        description:
          'Escolha PNG para transparência, JPG para fotos ou WebP para o menor arquivo antes de renderizar.',
      },
      {
        title: 'Renderize a imagem redimensionada',
        description:
          'Clique em Renderizar Imagem Redimensionada para gerar a nova versão com suas dimensões exatas em pixels.',
      },
      {
        title: 'Revise o resultado e baixe',
        description:
          'Confira a pré-visualização quanto à nitidez e ao corte, veja o tamanho do arquivo e clique em Baixar para salvar.',
      },
      {
        title: 'Dica: a imagem ficou esticada ou borrada?',
        description:
          'Ative Travar Proporção ou mude para Corte Central Cover para evitar distorção, e evite ampliar muito além do tamanho original.',
      },
    ],
    examples: [
      {
        title: 'Cortando uma captura de tela alta em um cartão Open Graph 1200×630',
        input: 'Captura de tela 1440×1600 · Modelo: OG Share (1200×630) · Ajuste: Corte Central Cover',
        output: 'Cartão 1200×630 nítido, centralizado na vertical, sem achatamento ou distorção.',
        explanation: 'O cover-crop escala proporcionalmente até preencher o quadro alvo, cortando as bordas excedentes de forma uniforme.',
      },
      {
        title: 'Foto de perfil quadrada 512×512 a partir de uma foto de retrato',
        input: 'Foto 1080×1350 · Modelo: Avatar (512×512) · Ajuste: Corte Central Cover',
        output: 'Avatar quadrado 512×512 com o rosto centralizado e sem distorção.',
        explanation: 'O corte central mantém o assunto no meio enquanto ajusta a proporção para o quadrado.',
      },
    ],
    benefits: [
      'Modelos de pixels com um clique: Open Graph, YouTube HD, Quadrado e Avatar',
      'O Corte Central Cover evita esticamento estranho ao mudar as proporções',
      'A qualidade imageSmoothingQuality de alta qualidade do Canvas preserva tipografia e linhas nítidas',
      'Exporta direto para PNG, JPG ou WebP com leitura real do tamanho do arquivo',
    ],
    useCases: [
      'Criar cartões og:image 1200×630 para posts de blog e landing pages',
      'Preparar fotos de produto 1080×1080 e avatares de perfil 512×512',
      'Reduzir capturas de tela de alta densidade antes de adicioná-las à documentação',
      'Gerar dimensões exatas de capa que correspondem aos requisitos de modelos de CMS',
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre Corte Central Cover e Esticar / Escala Exata?',
        answer:
          'O Corte Central Cover preserva as proporções naturais e corta as bordas excedentes de forma simétrica quando a nova proporção é diferente. A Escala Exata força a imagem original completa na largura e altura alvo.',
      },
      {
        question: 'Posso ampliar uma foto pequena para 4K com qualidade?',
        answer:
          'A interpolação do Canvas pode exportar grades de pixels maiores, mas ampliar além da resolução nativa não consegue inventar detalhes finos que faltam.',
      },
      {
        question: 'Qual é a dimensão máxima de saída suportada?',
        answer:
          'As entradas são limitadas a até 8000 px por eixo para ficar com segurança dentro dos limites de memória do Canvas do navegador.',
      },
      {
        question: 'O Redimensionador de Imagens é gratuito?',
        answer:
          'Sim, é gratuito, sem cadastro, sem marcas d’água e sem limite de quantas imagens você redimensiona.',
      },
      {
        question: 'Qual é a diferença entre redimensionar e cortar uma imagem?',
        answer:
          'Redimensionar muda as dimensões em pixels da imagem inteira, enquanto cortar remove parte da imagem. Esta ferramenta pode fazer os dois, incluindo o corte central cover.',
      },
      {
        question: 'O Redimensionador de Imagens pode deixar uma imagem em 1200x630 para compartilhar nas redes sociais?',
        answer:
          'Sim, escolha o modelo Open Graph (1200×630) e a ferramenta dimensiona sua imagem exatamente para as pré-visualizações de links nas plataformas sociais.',
      },
      {
        question: 'Como redimensiono uma imagem sem esticá-la?',
        answer:
          'Mantenha Travar Proporção ativado ou use o Corte Central Cover, para que a ferramenta escale proporcionalmente em vez de achatar a imagem.',
      },
      {
        question: 'Posso redimensionar uma imagem para um quadrado 1080x1080?',
        answer:
          'Sim, escolha o modelo Quadrado ou digite 1080 para largura e altura com o Corte Central Cover ativado.',
      },
      {
        question: 'Redimensionar uma imagem reduz o tamanho do arquivo?',
        answer:
          'Geralmente sim, porque menos pixels significam menos dados, especialmente quando você também exporta como WebP ou JPG.',
      },
      {
        question: 'Quais formatos de imagem posso redimensionar?',
        answer:
          'Você pode redimensionar imagens PNG, JPG, WebP e GIF e exportá-las como PNG, JPG ou WebP.',
      },
      {
        question: 'Redimensionar vai deixar minha imagem borrada?',
        answer:
          'Reduzir geralmente fica nítido graças à suavização de alta qualidade do Canvas. Ampliar além do tamanho original pode suavizar detalhes finos.',
      },
      {
        question: 'Posso redimensionar uma imagem para foto de perfil?',
        answer:
          'Sim, use o modelo Avatar (512×512) com Corte Central Cover para obter uma foto de perfil perfeitamente quadrada.',
      },
      {
        question: 'O que é Corte Central Cover no Redimensionador de Imagens?',
        answer:
          'Ele escala a imagem até preencher o quadro alvo e depois corta as bordas excedentes de forma uniforme a partir do centro, para que nada pareça esticado.',
      },
      {
        question: 'O Redimensionador de Imagens envia minhas fotos para algum lugar?',
        answer:
          'Não, todo o redimensionamento acontece localmente no seu navegador e suas imagens nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso redimensionar uma imagem no celular?',
        answer:
          'Sim, funciona em navegadores de celular. Envie uma foto, digite as novas dimensões e baixe o resultado.',
      },
      {
        question: 'O que acontece com a transparência quando redimensiono um PNG?',
        answer:
          'A transparência é preservada desde que você exporte como PNG ou WebP. Exportar como JPG preenche as áreas transparentes com branco.',
      },
      {
        question: 'Posso redimensionar várias imagens para o mesmo tamanho?',
        answer:
          'A ferramenta redimensiona uma imagem por vez. Repita o mesmo modelo ou as mesmas dimensões para cada imagem para mantê-las consistentes.',
      },
      {
        question: 'Qual é a maior imagem que o Redimensionador de Imagens aceita?',
        answer:
          'As entradas são limitadas a 8000 px por lado para ficar dentro dos limites de memória do Canvas do navegador.',
      },
      {
        question: 'Como redimensiono uma imagem para miniatura do YouTube?',
        answer:
          'Escolha o modelo YouTube HD (1280×720) para que sua miniatura corresponda ao tamanho recomendado de 16:9.',
      },
      {
        question: 'Por que o arquivo da minha imagem redimensionada continua grande?',
        answer:
          'O tamanho em pixels é só parte da história. Exporte como WebP ou JPG em vez de PNG, ou use o Compressor de Imagens depois para diminuir ainda mais o arquivo.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha o formato alvo e as opções',
        description:
          'Selecione a saída PNG, JPG ou WebP, defina a qualidade com perda se aplicável e escolha uma cor de fundo matte ao converter imagens transparentes para JPG.',
      },
      {
        title: 'Selecione uma ou várias imagens',
        description:
          'Carregue um único arquivo ou um lote com vários arquivos para renderizar cada imagem de forma limpa em sua resolução nativa completa.',
      },
      {
        title: 'Confira a pré-visualização de cada arquivo',
        description:
          'Revise as dimensões e o tamanho estimado de cada imagem convertida antes de baixar qualquer coisa.',
      },
      {
        title: 'Converta o lote',
        description:
          'A ferramenta renderiza cada imagem em sua resolução nativa completa no formato selecionado, direto no seu navegador.',
      },
      {
        title: 'Baixe os arquivos convertidos',
        description:
          'Compare as dimensões e o novo tamanho em bytes de cada arquivo e baixe suas imagens convertidas individualmente.',
      },
      {
        title: 'Dica: as áreas transparentes ficaram pretas?',
        description:
          'Se um PNG convertido para JPG mostrar preto onde era transparente, converta novamente com uma cor de preenchimento matte, como branco ou a cor da sua marca.',
      },
    ],
    examples: [
      {
        title: 'Achatando um logotipo transparente SVG/PNG sobre azul-marinho da marca para JPG',
        input: 'logo.png transparente · Alvo: JPG (90%) · Preenchimento: #FFFFFF',
        output: 'logo.jpg com fundo branco limpo e zero artefatos pretos de transparência',
        explanation: 'Preencher explicitamente o fundo matte do Canvas antes de desenhar evita halos pretos ao converter PNGs com alfa para JPEG.',
      },
      {
        title: 'Convertendo downloads WebP em lote para PNG universal',
        input: '8 arquivos .webp baixados · Alvo: PNG',
        output: '8 arquivos .png em resolução total, prontos para softwares antigos.',
        explanation: 'O lote mantém a resolução nativa de cada imagem durante a conversão.',
      },
    ],
    benefits: [
      'Processa lotes com várias imagens em resolução total sem filas de servidor',
      'A cor configurável de preenchimento de fundo JPEG evita preenchimentos pretos feios de transparência',
      'Converte downloads WebP de volta em arquivos PNG ou JPG universalmente aceitos',
      'Renderiza arquivos vetoriais SVG diretamente em imagens raster PNG ou WebP nítidas',
    ],
    useCases: [
      'Converter arquivos .webp baixados em .png ou .jpg para softwares antigos',
      'Produzir em lote arquivos .webp modernos para sites estáticos e CDNs',
      'Exportar PNGs nítidos a partir de ícones de marca SVG para slides ou posts sociais',
      'Comparar diferenças de tamanho de formato entre PNG, JPG e WebP lado a lado',
    ],
    faqs: [
      {
        question: 'Esta ferramenta converte fotos HEIC da Apple?',
        answer:
          'A decodificação de HEIC depende do suporte do navegador (o Safari aceita HEIC nativamente, enquanto Chrome/Firefox geralmente exigem entradas PNG, JPG, WebP, SVG ou GIF).',
      },
      {
        question: 'Converter JPG para PNG melhora detalhes de foto perdidos?',
        answer:
          'Não. Converter um JPG já comprimido em PNG o preserva sem perda daqui para frente, mas não consegue restaurar artefatos anteriores de compressão JPEG.',
      },
      {
        question: 'Há limites de arquivo aplicados?',
        answer:
          'Só a memória RAM do seu dispositivo se aplica; toda a codificação acontece localmente, sem limites de tamanho de arquivo de servidor.',
      },
      {
        question: 'O Conversor de Formato de Imagem é gratuito?',
        answer:
          'Sim, é gratuito, sem conta, sem marcas d’água e sem limite de quantas conversões você faz.',
      },
      {
        question: 'Quais formatos posso converter de e para quais?',
        answer:
          'Você pode converter arquivos PNG, JPG, WebP, GIF e SVG para saída PNG, JPG ou WebP.',
      },
      {
        question: 'Por que converter PNG para WebP?',
        answer:
          'Arquivos WebP geralmente são bem menores que PNG com qualidade visual parecida, o que faz as páginas da web carregarem mais rápido.',
      },
      {
        question: 'Por que converter WebP para JPG ou PNG?',
        answer:
          'Alguns aplicativos antigos, impressoras e formulários de envio não aceitam WebP, então converter de volta para JPG ou PNG restaura a compatibilidade universal.',
      },
      {
        question: 'Posso converter várias imagens de uma vez?',
        answer:
          'Sim, você pode carregar um lote de imagens e convertê-las todas para o mesmo formato alvo de uma só vez.',
      },
      {
        question: 'Converter para JPG remove a transparência?',
        answer:
          'Sim, o JPG não tem canal alfa, então as áreas transparentes são preenchidas com a cor matte que você escolher, como branco.',
      },
      {
        question: 'Qual cor matte devo usar ao converter um PNG transparente para JPG?',
        answer:
          'O branco é o padrão mais seguro. Combine com a cor de fundo do seu site ou slide para um visual perfeito.',
      },
      {
        question: 'Posso converter uma foto para WebP e manter sua qualidade?',
        answer:
          'Sim, o WebP com 85 a 90% de qualidade geralmente parece idêntico ao JPG original, gerando um arquivo visivelmente menor.',
      },
      {
        question: 'Posso converter um logotipo SVG para PNG?',
        answer:
          'Sim, a ferramenta rasteriza arquivos SVG em imagens PNG ou WebP nítidas nas dimensões nativas.',
      },
      {
        question: 'O Conversor de Formato de Imagem envia minhas imagens?',
        answer:
          'Não, toda conversão acontece localmente no seu navegador e seus arquivos nunca saem do seu dispositivo.',
      },
      {
        question: 'Qual qualidade devo usar ao converter para JPG?',
        answer:
          'Uma qualidade de 85 a 90% mantém as fotos limpas e bem menores que PNG. Reduza para arquivos menores.',
      },
      {
        question: 'Posso converter GIFs animados com esta ferramenta?',
        answer:
          'Arquivos GIF podem ser carregados, mas a conversão renderiza um único quadro estático em vez de preservar a animação.',
      },
      {
        question: 'Por que meu PNG convertido ficou maior que o JPG original?',
        answer:
          'O PNG é sem perda, então uma foto convertida de JPG comprimido para PNG armazena cada pixel sem compressão e geralmente cresce de tamanho.',
      },
      {
        question: 'O conversor mantém as dimensões originais da imagem?',
        answer:
          'Sim, as imagens convertidas mantêm sua resolução nativa completa, a menos que você as redimensione separadamente com o Redimensionador de Imagens.',
      },
      {
        question: 'Posso usar o Conversor de Formato de Imagem no celular?',
        answer:
          'Sim, ele funciona em navegadores de celular. Selecione imagens do seu dispositivo e baixe os arquivos convertidos.',
      },
      {
        question: 'Qual é o melhor formato para imagens de site?',
        answer:
          'O WebP geralmente é o melhor para fotos e gráficos na web, enquanto o PNG é melhor quando você precisa de transparência ou qualidade sem perda.',
      },
      {
        question: 'As imagens convertidas incluem marcas d’água?',
        answer:
          'Não, os arquivos convertidos são cópias limpas, sem marcas d’água ou logotipos adicionados.',
      },
    ],
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
    instructions: [
      {
        title: 'Envie uma imagem',
        description:
          'Escolha qualquer imagem PNG, JPG, WebP ou GIF para carregá-la na pré-visualização interativa do Canvas.',
      },
      {
        title: 'Gire, espelhe ou aplique filtros',
        description:
          'Use os botões Girar à Esquerda/Direita, as opções de Espelhar na Horizontal/Vertical, o interruptor Tons de Cinza e os controles de Brilho/Contraste.',
      },
      {
        title: 'Veja o resultado ao vivo',
        description:
          'Confira a pré-visualização do Canvas após cada mudança para confirmar se a orientação e a intensidade do filtro estão certas.',
      },
      {
        title: 'Redefina se precisar',
        description:
          'Use o botão Redefinir para desfazer todas as rotações, espelhamentos e mudanças de filtro e começar novamente do original.',
      },
      {
        title: 'Escolha um formato de saída',
        description:
          'Escolha PNG para manter a transparência, JPG para fotos ou WebP para arquivos menores antes de exportar.',
      },
      {
        title: 'Exporte a imagem editada',
        description:
          'Clique em Baixar para salvar sua imagem girada, espelhada ou filtrada no seu dispositivo.',
      },
    ],
    examples: [
      {
        title: 'Corrigindo uma foto de celular de lado e aumentando o brilho',
        input: 'Foto 3024×4032 girada 90° no sentido horário · Brilho: 110% · Contraste: 105%',
        output: 'Imagem 4032×3024 na vertical exportada de forma limpa, com a orientação EXIF embutida nos pixels.',
        explanation: 'O Canvas troca largura e altura automaticamente em giros de 90° e 270°.',
      },
      {
        title: 'Desespelhando uma selfie de webcam',
        input: 'Selfie espelhada 1280×720 · Espelhar na Horizontal: ativado',
        output: 'Selfie 1280×720 com o texto legível novamente e a orientação correta.',
        explanation: 'O espelhamento horizontal desfaz a inversão típica de câmeras frontais.',
      },
    ],
    benefits: [
      'A pré-visualização ao vivo em pixels é atualizada na hora, sem latência de envio',
      'Embute a orientação de forma limpa nas coordenadas reais dos pixels, em vez de sinalizadores EXIF frágeis',
      'Combina rotação, espelhamento e ajustes de cor e tom em um só espaço de trabalho limpo',
      'O botão Redefinir não destrutivo restaura os padrões a qualquer momento',
    ],
    useCases: [
      'Endireitar documentos ou recibos digitalizados capturados de lado',
      'Desespelhar capturas de webcam invertidas ou capturas de tela espelhadas',
      'Criar gráficos em tons de cinza de alto contraste para impressão ou documentação',
      'Clarear rapidamente fotos de produtos subexpostas antes de anunciar',
    ],
    faqs: [
      {
        question: 'Girar uma imagem recodifica os pixels?',
        answer:
          'Sim. Desenhar no Canvas HTML5 embute a nova orientação e os ajustes de filtro permanentemente em cada pixel, para que todos os aplicativos a exibam na vertical correta.',
      },
      {
        question: 'Posso preservar fundos transparentes ao girar ou espelhar?',
        answer:
          'Sim — mantenha o Formato de Saída em PNG ou WebP para reter a transparência alfa completa em gráficos girados/espelhados.',
      },
      {
        question: 'As edições são salvas nos seus servidores?',
        answer:
          'Não. Tudo acontece dentro da sua própria aba do navegador e é descartado quando você fecha a página.',
      },
      {
        question: 'A ferramenta de girar imagem é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, sem marcas d’água e sem limites.',
      },
      {
        question: 'Como giro uma imagem em 90 graus?',
        answer:
          'Envie sua imagem e clique em Girar à Direita ou Girar à Esquerda. Cada clique gira a imagem em 90 graus.',
      },
      {
        question: 'Posso girar uma imagem em 180 graus?',
        answer:
          'Sim, clique em Girar duas vezes na mesma direção para virar a imagem de cabeça para baixo.',
      },
      {
        question: 'Como espelho uma imagem na horizontal?',
        answer:
          'Use a opção Espelhar na Horizontal para espelhar a imagem da esquerda para a direita, o que é útil para corrigir selfies espelhadas.',
      },
      {
        question: 'Qual é a diferença entre espelhar e girar uma imagem?',
        answer:
          'Girar vira a imagem ao redor do centro, enquanto espelhar a reflete como um reflexo no espelho.',
      },
      {
        question: 'Posso girar uma foto sem perder qualidade?',
        answer:
          'A ferramenta recodifica a imagem via Canvas, então exportar como PNG a mantém sem perda. A exportação em JPG aplica compressão leve.',
      },
      {
        question: 'Girar uma imagem muda suas dimensões?',
        answer:
          'Uma rotação de 90 ou 270 graus troca largura e altura. Uma rotação de 180 graus mantém as mesmas dimensões.',
      },
      {
        question: 'Posso deixar uma foto em preto e branco?',
        answer:
          'Sim, ative o interruptor Tons de Cinza para converter sua foto para preto e branco na hora.',
      },
      {
        question: 'Como clareio uma foto escura?',
        answer:
          'Mova o controle de Brilho acima de 100% e adicione um pouco de Contraste para que a imagem não fique desbotada.',
      },
      {
        question: 'Posso girar um PNG e manter sua transparência?',
        answer:
          'Sim, exporte como PNG ou WebP para preservar as áreas transparentes depois de girar ou espelhar.',
      },
      {
        question: 'Minhas fotos editadas são enviadas para um servidor?',
        answer:
          'Não, toda a rotação, espelhamento e filtragem acontece localmente no seu navegador e nada é enviado.',
      },
      {
        question: 'Posso girar uma imagem no celular?',
        answer:
          'Sim, funciona em navegadores de celular. Envie uma foto de lado, gire-a para a vertical e baixe a versão corrigida.',
      },
      {
        question: 'Por que minha foto fica de lado depois de enviá-la?',
        answer:
          'Alguns celulares armazenam a orientação como um sinalizador EXIF que nem todos os aplicativos leem. Esta ferramenta embute a orientação correta nos pixels, para que ela seja exibida na vertical em todos os lugares.',
      },
      {
        question: 'Posso desfazer uma rotação ou filtro?',
        answer:
          'Sim, o botão Redefinir restaura a imagem original e as configurações padrão de filtro a qualquer momento.',
      },
      {
        question: 'A ferramenta corrige fotos tortas ou inclinadas?',
        answer:
          'Ela gira em passos de 90 graus, então corrige fotos de lado ou de cabeça para baixo. Pequenas correções de inclinação não são suportadas.',
      },
      {
        question: 'Quais formatos de imagem posso girar e espelhar?',
        answer:
          'Você pode editar imagens PNG, JPG, WebP e GIF e exportá-las como PNG, JPG ou WebP.',
      },
      {
        question: 'Posso girar e espelhar uma imagem de uma só vez?',
        answer:
          'Sim, você pode combinar rotações, espelhamentos horizontais ou verticais e filtros antes de exportar uma única imagem finalizada.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha o modo Codificar ou Decodificar',
        description:
          'Use Imagem → Data URI Base64 para codificar um arquivo, ou Base64 → Pré-visualização de Imagem para renderizar cargas Base64 coladas.',
      },
      {
        title: 'Carregue uma imagem ou cole texto Base64',
        description:
          'Selecione qualquer arquivo PNG, JPG, WebP, SVG, GIF ou ICO (ou cole uma string completa data:image/... ou texto Base64 puro).',
      },
      {
        title: 'Confira a comparação de tamanho',
        description:
          'Compare o tamanho original do arquivo com o tamanho da string Base64 para ver o acréscimo de cerca de 33% antes de incorporá-la.',
      },
      {
        title: 'Escolha o formato de saída que você precisa',
        description:
          'Escolha a Data URI completa, a string Base64 pura, a tag HTML <img> ou o trecho CSS de background-image.',
      },
      {
        title: 'Copie o trecho ou baixe a pré-visualização',
        description:
          'Copie a Data URI, o Base64 puro, a tag HTML <img> ou o trecho CSS de fundo — ou baixe uma imagem de pré-visualização decodificada.',
      },
      {
        title: 'Dica: o Base64 colado não está funcionando?',
        description:
          'Confira se você colou a string completa sem quebras de linha e se o decodificador adicionou o prefixo data:image/... correto para o seu formato.',
      },
    ],
    examples: [
      {
        title: 'Incorporando um checkmark SVG de 2 KB dentro do CSS',
        input: 'check.svg (2.048 bytes)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + regra CSS background-image pronta para colar',
        explanation: 'Economiza uma ida e volta HTTP extra para ícones minúsculos de interface e e-mails HTML de arquivo único offline.',
      },
      {
        title: 'Decodificando uma string Base64 de uma API',
        input: 'String Base64 pura copiada da resposta JSON de uma API',
        output: 'Pré-visualização da imagem renderizada com opção de baixar como PNG.',
        explanation: 'O decodificador adiciona automaticamente o prefixo de Data URI PNG quando ele está faltando.',
      },
    ],
    benefits: [
      'Comparação instantânea do tamanho do arquivo binário com o acréscimo de ~33% da string Base64',
      'Gera ao mesmo tempo Data URI, Base64 puro, <img> HTML e trechos CSS de fundo',
      'Adiciona automaticamente o prefixo de Data URI PNG se você colar Base64 puro sem cabeçalho',
      'Mantém arquivos proprietários e blobs de resposta de API offline dentro do seu navegador',
    ],
    useCases: [
      'Incorporar ícones minúsculos em pacotes CSS ou relatórios HTML autocontidos',
      'Depurar Data URIs de imagem retornadas por APIs JSON ou webhooks',
      'Incorporar pequenos selos de marca em modelos de e-mail HTML transacionais',
      'Inspecionar cargas de imagem codificadas copiadas do DevTools do navegador',
    ],
    faqs: [
      {
        question: 'Quando devo usar imagens Base64 em vez de URLs normais de imagem?',
        answer:
          'Use Data URIs Base64 com moderação para ícones muito pequenos (geralmente menos de 5 a 10 KB) ou exportações HTML de arquivo único. O Base64 aumenta o tamanho dos dados em ~33% e não pode ser armazenado em cache de forma independente entre páginas como as URLs normais.',
      },
      {
        question: 'O decodificador consegue pré-visualizar strings Base64 puras sem o prefixo "data:image/png;base64,"?',
        answer:
          'Sim! Mudar para Base64 → Pré-visualização de Imagem remove automaticamente os espaços em branco e adiciona um cabeçalho padrão de Data URI PNG se ele estiver faltando.',
      },
      {
        question: 'Funciona com SVGs vetoriais?',
        answer:
          'Sim. Enviar um arquivo .svg cria uma URI data:image/svg+xml;base64,... válida junto com trechos HTML e CSS.',
      },
      {
        question: 'O conversor de imagem para Base64 é gratuito?',
        answer:
          'Sim, é gratuito, sem cadastro, sem marcas d’água e sem limite de quantas imagens você codifica ou decodifica.',
      },
      {
        question: 'O que é uma Data URI Base64?',
        answer:
          'Uma Data URI incorpora uma imagem diretamente dentro de uma página, folha de estilo ou e-mail como texto, começando com data:image/...;base64, seguido dos dados codificados.',
      },
      {
        question: 'Por que a string Base64 é maior que minha imagem?',
        answer:
          'A codificação Base64 representa dados binários com caracteres de texto, o que adiciona cerca de 33% de acréscimo ao tamanho original do arquivo.',
      },
      {
        question: 'Qual tamanho de imagem é melhor para codificação Base64?',
        answer:
          'Mantenha as imagens Base64 pequenas, geralmente menos de 5 a 10 KB, como ícones e logotipos. Imagens maiores incham seu HTML ou CSS e não podem ser armazenadas em cache separadamente.',
      },
      {
        question: 'Posso converter um JPG para Base64?',
        answer:
          'Sim, arquivos JPG, PNG, WebP, SVG, GIF e ICO podem ser codificados em Data URIs Base64.',
      },
      {
        question: 'Como uso uma imagem Base64 em HTML?',
        answer:
          'Copie a tag HTML <img> gerada e cole-a na sua página. O atributo src já contém a Data URI completa.',
      },
      {
        question: 'Como uso uma imagem Base64 em CSS?',
        answer:
          'Copie o trecho CSS de background-image e cole-o na sua folha de estilo para exibir a imagem sem uma requisição de arquivo separada.',
      },
      {
        question: 'Posso decodificar uma string Base64 de volta para uma imagem?',
        answer:
          'Sim, mude para Base64 → Pré-visualização de Imagem, cole a string e a ferramenta renderiza a imagem para você pré-visualizar ou baixar.',
      },
      {
        question: 'Preciso do prefixo data:image/png;base64, ao decodificar?',
        answer:
          'Não, se você colar Base64 puro sem cabeçalho, a ferramenta adiciona automaticamente um prefixo padrão de Data URI PNG.',
      },
      {
        question: 'A ferramenta de imagem para Base64 envia meus arquivos?',
        answer:
          'Não, a codificação e a decodificação acontecem inteiramente no seu navegador e suas imagens nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso codificar um SVG em Base64?',
        answer:
          'Sim, arquivos SVG geram uma URI data:image/svg+xml;base64,... válida junto com trechos HTML e CSS correspondentes.',
      },
      {
        question: 'Qual é a diferença entre Base64 puro e uma Data URI?',
        answer:
          'O Base64 puro é só o texto codificado, enquanto uma Data URI adiciona o cabeçalho data:image/...;base64, para que os navegadores saibam o tipo da imagem.',
      },
      {
        question: 'Posso usar imagens Base64 em e-mails?',
        answer:
          'Sim, imagens Base64 pequenas funcionam bem em e-mails HTML autocontidos, embora alguns clientes de e-mail limitem o suporte a Data URI, então teste antes de enviar.',
      },
      {
        question: 'Há limite de tamanho de arquivo para codificação?',
        answer:
          'Não há limite de servidor, porque nada é enviado. Imagens muito grandes são limitadas apenas pela memória do seu navegador, e strings Base64 enormes são impraticáveis de colar.',
      },
      {
        question: 'Posso converter uma imagem Base64 em um arquivo baixável?',
        answer:
          'Sim, decodifique a string no modo Base64 → Pré-visualização de Imagem e use a opção de download para salvá-la como um arquivo de imagem comum.',
      },
      {
        question: 'A codificação Base64 muda a qualidade da imagem?',
        answer:
          'Não, o Base64 é uma representação em texto sem perda dos mesmos bytes exatos, então a imagem decodificada é idêntica à original.',
      },
      {
        question: 'Posso usar o conversor de imagem para Base64 no celular?',
        answer:
          'Sim, funciona em navegadores de celular. Codifique uma imagem da sua galeria de fotos ou cole uma string Base64 para pré-visualizá-la.',
      },
    ],
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
        'Verifique proporções de contraste WCAG 2.1 AA e AAA para pares de texto e fundo, converta HEX, RGB e HSL e extraia paletas de imagens — grátis, no navegador.',
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
    instructions: [
      {
        title: 'Escolha as cores de Primeiro Plano e Fundo',
        description:
          'Use os seletores de cor, as entradas HEX ou as entradas individuais de R/G/B — ou comece com modelos acessíveis e troque as cores com um clique.',
      },
      {
        title: 'Ajuste os tons até a proporção passar',
        description:
          'Ajuste a luminosidade ou os canais RGB individuais e veja a proporção atualizar ao vivo até sua combinação atingir o limite AA ou AAA de que você precisa.',
      },
      {
        title: 'Revise o painel de pontuação WCAG 2.1',
        description:
          'Confira a proporção exata de contraste (por exemplo, 12,63 : 1) e o status instantâneo de APROVADO/REPROVADO nos critérios AA Normal, AA Grande/UI, AAA Normal e AAA Grande.',
      },
      {
        title: 'Veja a combinação em texto real de interface',
        description:
          'Leia as pré-visualizações ao vivo de tipografia e de cartão de controle de interface com borda para ver como suas cores realmente ficam como texto de corpo, títulos e botões.',
      },
      {
        title: 'Extraia amostras de uma imagem (opcional)',
        description:
          'Envie qualquer captura de tela ou logotipo de marca no final para extrair até 8 cores dominantes distintas e aplicá-las direto ao Primeiro Plano ou Fundo.',
      },
      {
        title: 'Copie as cores e corrija pares reprovados',
        description:
          'Copie os valores HEX, RGB ou HSL sincronizados para o seu CSS. Se um par reprovar, escureça o texto ou clareie o fundo até o painel ficar verde.',
      },
    ],
    examples: [
      {
        title: 'Auditando a legibilidade do botão principal de ação',
        input: 'Primeiro plano: #FFFFFF · Fundo: #4F46E5',
        output: 'Proporção de contraste 6,29 : 1 — Aprovado em WCAG AA Normal, AA Grande e AAA Grande',
        explanation: 'Usa a luminância relativa oficial sRGB com linearização gama (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Extraindo a paleta da marca de um logotipo',
        input: 'Logotipo enviado com fundo azul e texto branco',
        output: 'Até 8 amostras HEX dominantes, com a azul e a branca prontas para testar como par.',
        explanation: 'O quantizador de cores do Canvas agrupa tons próximos e mostra as cores mais proeminentes da imagem.',
      },
    ],
    benefits: [
      'Fórmula exata de luminância relativa sRGB do WCAG 2.1 — zero aproximações',
      'Pré-visualizações ao vivo de tipografia e de cartão de controle de interface com borda mostram a combinação ativa',
      'O quantizador de cores de imagem embutido no Canvas extrai amostras da marca sem ferramentas extras',
      'Exibe strings HEX, RGB e HSL sincronizadas, prontas para colar no CSS',
    ],
    useCases: [
      'Auditar sistemas de design, painéis SaaS e temas de modo escuro quanto à conformidade WCAG AA/AAA',
      'Extrair cores dominantes da marca de logotipos de clientes direto para paletas de interface acessíveis',
      'Corrigir combinações de baixo contraste em selos, placeholders ou rótulos de botões antes do lançamento',
      'Ensinar hierarquia visual acessível com pré-visualizações ao vivo de texto grande e normal',
    ],
    faqs: [
      {
        question: 'Qual proporção de contraste é exigida para o WCAG Nível AA e Nível AAA?',
        answer:
          'O WCAG 2.1 Nível AA exige pelo menos 4,5:1 para texto normal de corpo e 3,0:1 para texto grande (18 pt ou mais, ou 14 pt em negrito ou mais) e componentes de interface. O Nível AAA aumenta esses limites para 7,0:1 para texto normal e 4,5:1 para texto grande.',
      },
      {
        question: 'Como funciona o extrator de paleta de imagem?',
        answer:
          'Ele desenha sua imagem enviada em um Canvas HTML5 fora da tela, ignora pixels transparentes, agrupa faixas RGB próximas e mostra até 8 amostras dominantes visualmente distintas por cobertura de área.',
      },
      {
        question: 'O Verificador de Contraste de Cores também converte entre HEX, RGB e HSL?',
        answer:
          'Sim. Atualizar qualquer seletor de cor, entrada HEX ou campo R/G/B recalcula automaticamente as representações HEX, rgb() e hsl().',
      },
      {
        question: 'O que conta como texto grande nas regras de contraste do WCAG?',
        answer:
          'Texto grande é 18 pt (24 px) ou maior, ou 14 pt (18,66 px) em negrito ou maior. O texto grande precisa só de 3,0:1 para AA e 4,5:1 para AAA, enquanto o texto normal precisa de 4,5:1 para AA e 7,0:1 para AAA.',
      },
      {
        question: 'O Verificador de Contraste de Cores é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro. Todas as verificações acontecem localmente no seu navegador, então você pode testar quantos pares de cores quiser.',
      },
      {
        question: 'Minhas imagens enviadas saem do meu dispositivo?',
        answer:
          'Não. A extração de paleta acontece inteiramente no seu navegador usando um canvas fora da tela, e suas imagens nunca são enviadas para nenhum servidor.',
      },
      {
        question: 'Como a proporção de contraste é calculada?',
        answer:
          'Ela usa a fórmula oficial do WCAG 2.1: a luminância relativa de cada cor é calculada a partir de valores sRGB linearizados em gama, e a proporção é (L1 + 0,05) / (L2 + 0,05), em que L1 é a cor mais clara.',
      },
      {
        question: 'Posso verificar o contraste de designs em modo escuro?',
        answer:
          'Sim. Digite seu fundo escuro e suas cores claras de texto da mesma forma, e o painel mostra se a combinação passa em AA e AAA para texto normal e grande.',
      },
      {
        question: 'Por que meu par de cores reprova em AA mesmo parecendo legível para mim?',
        answer:
          'Legibilidade percebida e contraste de luminância medido são coisas diferentes. Cores que parecem distintas para você ainda podem estar próximas em luminância, especialmente tons médios, então confie na proporção e ajuste a luminosidade até passar.',
      },
      {
        question: 'O que devo fazer se a cor da minha marca reprovar no teste de contraste?',
        answer:
          'Mantenha a cor da marca para títulos grandes ou elementos decorativos e use um tom mais escuro dela para o texto de corpo. Você também pode clarear o fundo ou adicionar uma sobreposição semitransparente atrás do texto.',
      },
      {
        question: 'O verificador funciona para componentes de interface como botões e ícones?',
        answer:
          'Sim. O WCAG 2.1 exige uma proporção de 3,0:1 para componentes de interface sem texto, como bordas de botões, contornos de campos e ícones significativos, e a coluna AA Grande/UI do painel cobre exatamente isso.',
      },
      {
        question: 'Posso testar texto de placeholder e estados desativados com esta ferramenta?',
        answer:
          'Sim, digite a cor do placeholder ou do estado desativado como primeiro plano. Note que controles desativados estão isentos dos requisitos de contraste do WCAG, mas texto de placeholder que transmite informação não está.',
      },
      {
        question: 'Quantas cores o extrator de paleta consegue extrair de uma imagem?',
        answer:
          'Até 8 cores dominantes distintas. Tons parecidos são agrupados, então as amostras representam as cores visualmente mais proeminentes da imagem, e não todos os tons presentes.',
      },
      {
        question: 'Posso aplicar uma amostra extraída direto como meu primeiro plano ou fundo?',
        answer:
          'Sim. Cada amostra extraída tem um botão para enviá-la direto para o Primeiro Plano ou Fundo, para que você possa testá-la contra sua outra cor na hora.',
      },
      {
        question: 'Quais formatos de imagem funcionam com o extrator de paleta?',
        answer:
          'Qualquer imagem que seu navegador consiga exibir, incluindo capturas de tela ou logotipos em PNG, JPG, WebP e SVG. Pixels transparentes são ignorados ao agrupar as cores.',
      },
      {
        question: 'O Verificador de Contraste de Cores testa daltonismo?',
        answer:
          'Não, ele mede apenas o contraste de luminância. O contraste é uma parte da acessibilidade; para segurança contra daltonismo, também evite depender só da cor para transmitir significado e confira sua paleta com um simulador de daltonismo.',
      },
      {
        question: 'Posso usar os valores HEX, RGB e HSL no meu CSS?',
        answer:
          'Sim. Os três formatos ficam sincronizados enquanto você edita, e você pode copiar qualquer um deles direto para sua folha de estilo, tokens de design ou configuração do Tailwind.',
      },
      {
        question: 'Qual é a diferença entre AA e AAA na prática?',
        answer:
          'O AA é o padrão legal e prático que a maioria dos sites busca, enquanto o AAA é mais rigoroso e costuma ser difícil de atingir para texto de corpo com a cor da marca. Busque AAA quando puder, mas nunca publique abaixo de AA para texto.',
      },
      {
        question: 'A ferramenta armazena minhas escolhas de cores ou imagens?',
        answer:
          'Não. Tudo acontece localmente na aba do seu navegador, nada é enviado, e suas cores e imagens desaparecem quando você fecha ou atualiza a página.',
      },
      {
        question: 'Posso verificar mais de um par de cores por vez?',
        answer:
          'O verificador testa um par primeiro plano/fundo por vez, mas você pode trocar as cores com um único clique e testar novamente quantos pares precisar em segundos.',
      },
    ],
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
    instructions: [
      {
        title: 'Envie uma imagem de QR ou ative a leitura por câmera',
        description:
          'Arraste ou selecione qualquer captura de tela de QR em PNG, JPG, WebP ou SVG — ou clique em Iniciar Leitura por Câmera quando quiser ler um QR code impresso ao vivo.',
      },
      {
        title: 'Deixe o leitor decodificar o código',
        description:
          'A ferramenta executa decodificação local multi-escala e sensível à inversão no seu navegador, então até QR codes de modo escuro ou invertidos são lidos sem enviar nada.',
      },
      {
        title: 'Confira e copie o texto decodificado',
        description:
          'Revise o conteúdo decodificado, a categoria de conteúdo detectada e a pré-visualização segura do link (só URLs http/https viram links clicáveis) e copie com um clique.',
      },
      {
        title: 'Confira o tipo de conteúdo antes de agir',
        description:
          'Veja se o QR contém uma URL, credenciais de Wi-Fi, contato vCard ou texto simples, e confirme se o destino parece certo antes de visitar ou conectar.',
      },
      {
        title: 'Mude para o Construtor de QR de Contato vCard (opcional)',
        description:
          'Crie um QR code de cartão de visita VCF 3.0 escaneável com nome, organização, telefone, e-mail e site, e baixe como PNG ou SVG.',
      },
      {
        title: 'Baixe, imprima ou resolva uma leitura que falhou',
        description:
          'Baixe seu QR vCard ou envie novamente uma captura de tela mais nítida e bem iluminada se a decodificação falhar — QR codes cortados, borrados ou muito pequenos são a causa mais comum.',
      },
    ],
    examples: [
      {
        title: 'Verificando a captura de tela de um folheto de marketing impresso antes de pedir as impressões',
        input: 'Enviar flyer-qr.png (PNG 600×600)',
        output: 'Conteúdo decodificado · URL do site: https://exemplo.com/?utm_source=print',
        explanation: 'Executa decodificação local multi-escala sensível à inversão, para que QR codes invertidos de modo escuro também sejam decodificados com confiança.',
      },
      {
        title: 'Criando um QR vCard para um cartão de visita digital',
        input: 'Nome, organização, telefone, e-mail e site',
        output: 'QR code vCard 3.0 baixável em PNG e SVG, pronto para imprimir no cartão.',
        explanation: 'O formato VCF 3.0 é reconhecido por iPhone e Android, que oferecem salvar o contato ao escanear.',
      },
    ],
    benefits: [
      'Decodifica capturas de tela de QR normais e com cores invertidas de forma limpa, sem aplicativos de celular',
      'O fluxo de câmera opcional para imediatamente após a decodificação ou ao sair da aba',
      'Classifica os conteúdos decodificados de forma limpa, sem redirecionar automaticamente',
      'Inclui geração completa de QR vCard 3.0 em PNG e SVG para cartões de visita digitais',
    ],
    useCases: [
      'Conferir URLs de destino com UTM dentro de materiais de QR antes de imprimir pôsteres',
      'Extrair strings de Wi-Fi ou tokens de texto de capturas de tela de computador',
      'Escanear QR codes físicos em um notebook usando a webcam embutida',
      'Criar QR codes de contato vCard escaneáveis para currículos, crachás e apresentações',
    ],
    faqs: [
      {
        question: 'E se meu dispositivo não tiver câmera ou negar a permissão de câmera?',
        answer:
          'Você nunca precisa de câmera para usar esta ferramenta — basta tirar uma captura de tela ou foto e enviá-la via Enviar Imagem de QR Code, que funciona da mesma forma sem permissões de câmera.',
      },
      {
        question: 'Escanear um QR code abre automaticamente sites maliciosos?',
        answer:
          'Não. O texto decodificado é exibido com segurança dentro de uma área de texto somente leitura primeiro, para que você possa conferir qualquer URL antes de decidir se vai visitá-la.',
      },
      {
        question: 'Precisa de um gerador de QR para URL, Wi-Fi ou cor personalizada em vez de vCard?',
        answer:
          'Experimente nossa ferramenta dedicada Gerador de QR Code em Ferramentas de Redes Sociais, com cores personalizadas de primeiro plano/fundo, níveis de correção de erro e QR codes de URL/texto.',
      },
      {
        question: 'O Leitor de QR Code é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e tanto a leitura quanto a geração de QR vCard acontecem localmente no seu navegador.',
      },
      {
        question: 'Minhas imagens de QR enviadas vão para um servidor?',
        answer:
          'Não. A decodificação acontece inteiramente no seu navegador usando jsQR, então suas capturas de tela e fotos nunca saem do seu dispositivo.',
      },
      {
        question: 'Quais formatos de imagem o Leitor de QR Code consegue ler?',
        answer:
          'Imagens PNG, JPG, WebP e SVG funcionam. Capturas de tela feitas no celular ou no computador são a forma mais comum de fornecer um QR code.',
      },
      {
        question: 'Por que meu QR code não foi lido?',
        answer:
          'As causas usuais são uma imagem borrada ou de baixa resolução, um QR code cortado muito rente, reflexo em um código impresso ou um código simplesmente muito pequeno no quadro. Envie novamente uma captura mais nítida, maior e bem iluminada.',
      },
      {
        question: 'O leitor consegue ler QR codes invertidos ou de modo escuro?',
        answer:
          'Sim. O decodificador é sensível à inversão, então QR codes com módulos claros sobre fundo escuro são decodificados com a mesma confiança que os códigos padrão pretos sobre branco.',
      },
      {
        question: 'Quais tipos de conteúdo de QR ele consegue detectar?',
        answer:
          'Ele classifica o conteúdo decodificado automaticamente, incluindo URLs de sites, credenciais de rede Wi-Fi, contatos vCard e texto simples, para que você saiba o que um código faz antes de agir.',
      },
      {
        question: 'É seguro escanear um QR code que encontrei em público?',
        answer:
          'Escanear é seguro aqui porque nada abre automaticamente — você vê o texto decodificado primeiro. Sempre leia a URL com cuidado e evite digitar senhas ou dados de pagamento em páginas para as quais um QR code aleatório leva você.',
      },
      {
        question: 'Posso escanear um QR code com a webcam do meu notebook?',
        answer:
          'Sim. Clique em Iniciar Leitura por Câmera, permita o acesso à câmera quando o navegador pedir e segure o código impresso na frente da câmera. O fluxo para automaticamente quando o código é decodificado ou quando você sai da aba.',
      },
      {
        question: 'A câmera continua gravando depois de uma leitura?',
        answer:
          'Não. O fluxo de câmera para imediatamente após uma decodificação bem-sucedida, e também para se você trocar de aba ou fechar o leitor.',
      },
      {
        question: 'O que é um QR code vCard?',
        answer:
          'Um QR code vCard armazena dados de contato — nome, organização, telefone, e-mail e site — no formato padrão VCF 3.0, então escaneá-lo com um celular oferece salvar o contato diretamente.',
      },
      {
        question: 'Posso baixar meu QR code vCard como PNG e SVG?',
        answer:
          'Sim. O construtor de vCard exporta os dois formatos: PNG para documentos e apresentações, e SVG para impressão nítida em qualquer tamanho.',
      },
      {
        question: 'O QR code vCard funciona no iPhone e no Android?',
        answer:
          'Sim. As duas plataformas reconhecem QR codes vCard VCF 3.0 padrão e oferecem adicionar o contato ao escanear com a câmera embutida.',
      },
      {
        question: 'Posso escanear um QR code de um vídeo ou gravação de tela?',
        answer:
          'Não diretamente, mas você pode pausar o vídeo, tirar uma captura de tela do quadro que mostra o QR code e enviar essa captura para o leitor.',
      },
      {
        question: 'O Leitor de QR Code funciona offline?',
        answer:
          'Depois que a página carrega, a decodificação acontece totalmente no seu navegador, sem requisições de rede, então você pode escanear imagens enviadas mesmo sem conexão com a internet.',
      },
      {
        question: 'Posso escanear vários QR codes em uma imagem?',
        answer:
          'O leitor decodifica um QR code por vez. Se uma imagem tiver vários códigos, corte a imagem para que cada código seja enviado separadamente.',
      },
      {
        question: 'O que devo verificar antes de imprimir um QR code em um folheto?',
        answer:
          'Envie uma captura de tela do design finalizado e escaneie aqui para confirmar se a URL de destino, os parâmetros UTM e o conteúdo estão exatamente certos antes de pedir as impressões.',
      },
      {
        question: 'A ferramenta armazena meus QR codes escaneados ou imagens da câmera?',
        answer:
          'Não. Nada é enviado, registrado ou armazenado. Os resultados decodificados existem apenas na sua aba atual do navegador e desaparecem quando você a fecha.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Senha Aleatória ou Frase-senha Diceware',
        description:
          'Use Senha Aleatória para densidade máxima de conjunto de caracteres ou Frase-senha Diceware para digitação humana mais fácil, com entropia forte de várias palavras.',
      },
      {
        title: 'Personalize tamanho, conjuntos de caracteres e quantidade do lote',
        description:
          'Ajuste o tamanho (8 a 64 caracteres), ative Maiúsculas/Minúsculas/Dígitos/Símbolos, exclua opcionalmente caracteres parecidos (0/O/1/l/I) ou selecione de 3 a 8 palavras Diceware.',
      },
      {
        title: 'Gere sua senha ou frase-senha',
        description:
          'Clique em gerar para criar um resultado novo usando o CSPRNG do seu navegador com suporte de hardware e amostragem por rejeição, para que cada caractere tenha exatamente a mesma probabilidade.',
      },
      {
        title: 'Confira a pontuação de entropia',
        description:
          'Confira os bits exatos de entropia de Shannon (~72 a 118+ bits recomendados) para ver quanto trabalho de adivinhação o resultado representa antes de usá-lo.',
      },
      {
        title: 'Gere novamente e copie com segurança',
        description:
          'Não gostou do resultado? Gere novamente para obter um novo e copie uma única senha ou o lote completo com um clique.',
      },
      {
        title: 'Salve em um gerenciador de senhas e atualize para limpar',
        description:
          'Cole o resultado no seu gerenciador de senhas na hora. Atualizar a página apaga as senhas geradas da memória, então nunca dependa da aba para lembrá-las.',
      },
    ],
    examples: [
      {
        title: 'Senha mista de 18 caracteres com conjunto completo de caracteres',
        input: 'Tamanho: 18 · Maiúsculas + Minúsculas + Dígitos + Símbolos (Conjunto: 88 caracteres)',
        output: '~116,3 bits de entropia criptográfica · Garante >= 1 caractere de cada classe ativada',
        explanation: 'Usa amostragem por rejeição (descartando amostras uint32 >= floor(2^32 / conjunto) * conjunto) para uniformidade estrita.',
      },
      {
        title: 'Frase-senha Diceware de 6 palavras para senha mestra',
        input: '6 palavras Diceware aleatórias da lista de palavras',
        output: 'Frase-senha memorável com cerca de 77 bits de entropia, fácil de digitar de memória.',
        explanation: 'Palavras aleatórias são bem mais fáceis de digitar e lembrar do que caracteres aleatórios, com entropia forte.',
      },
    ],
    benefits: [
      'Evita estritamente o inseguro Math.random() — usa window.crypto.getRandomValues com semente de hardware',
      'Elimina o viés de módulo com amostragem por rejeição verdadeira e embaralhamento Fisher-Yates sem viés',
      'Garante pelo menos um caractere de cada classe de caracteres selecionada, sem posições fixas',
      'Nada é registrado, armazenado ou transmitido pela rede',
    ],
    useCases: [
      'Proteger contas na nuvem, chaves SSH, credenciais de banco de dados e cofres mestres de gerenciadores de senhas',
      'Gerar frases-senha Diceware digitáveis por humanos para criptografia de disco ou chaves de Wi-Fi de visitantes',
      'Fornecer credenciais temporárias de integração em massa (até 10 por clique)',
      'Comparar o impacto de entropia em bits de 12 vs. 18 vs. 24 caracteres',
    ],
    faqs: [
      {
        question: 'Por que a amostragem por rejeição com crypto.getRandomValues importa?',
        answer:
          'Simplesmente calcular randomUint32 % tamanhoDoConjunto favorece levemente os caracteres de índice menor quando 2^32 não é divisível de forma exata pelo tamanho do conjunto (viés de módulo). A amostragem por rejeição descarta sorteios fora do intervalo, para que cada caractere do conjunto tenha exatamente a mesma probabilidade matemática.',
      },
      {
        question: 'Devo usar uma senha aleatória ou uma frase-senha?',
        answer:
          'As duas são excelentes quando longas o bastante: 16+ caracteres mistos funcionam em todos os gerenciadores de senhas, enquanto uma frase-senha de 5 a 6 palavras é bem mais fácil de digitar manualmente em TVs, celulares ou telas de descriptografia de disco.',
      },
      {
        question: 'As senhas geradas são armazenadas em algum lugar?',
        answer:
          'Nunca. As senhas vivem apenas na memória efêmera do React na sua aba e desaparecem ao atualizar.',
      },
      {
        question: 'O Gerador de Senhas é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro. Você pode gerar quantas senhas e frases-senha precisar, direto no seu navegador.',
      },
      {
        question: 'Como as senhas são geradas aqui?',
        answer:
          'Elas são criadas localmente no seu navegador usando window.crypto.getRandomValues, o gerador de números aleatórios criptograficamente seguro do seu navegador com suporte de hardware, com amostragem por rejeição para remover o viés de módulo.',
      },
      {
        question: 'Minhas senhas geradas são enviadas para um servidor?',
        answer:
          'Não. A geração acontece inteiramente no seu dispositivo, e nada é armazenado, registrado ou transmitido pela rede.',
      },
      {
        question: 'Qual deve ser o tamanho da minha senha?',
        answer:
          'Para contas importantes, use pelo menos 16 caracteres com classes de caracteres misturadas, o que dá cerca de 100+ bits de entropia. Senhas mais curtas só servem para contas de baixo valor, e o tamanho importa mais que a complexidade.',
      },
      {
        question: 'O que é entropia de senha e de quantos bits eu preciso?',
        answer:
          'A entropia mede quanto trabalho de adivinhação uma senha representa. Cerca de 70 a 80 bits é forte para a maioria das contas, enquanto 100+ bits é recomendado para senhas mestras, chaves de criptografia e contas de alto valor.',
      },
      {
        question: 'O que é uma frase-senha Diceware?',
        answer:
          'Uma frase-senha Diceware é formada por várias palavras aleatórias escolhidas de uma lista fixa, como "correct horse battery staple". Cinco ou seis palavras aleatórias dão entropia forte e continuam bem mais fáceis de digitar e lembrar do que caracteres aleatórios.',
      },
      {
        question: 'Devo excluir caracteres ambíguos como 0, O, 1, l e I?',
        answer:
          'Sim, quando você vai digitar a senha à mão ou lê-la em voz alta. Excluir caracteres parecidos evita erros de digitação no login, e com uma senha longa o bastante a pequena perda de entropia é desprezível.',
      },
      {
        question: 'Posso gerar várias senhas de uma vez?',
        answer:
          'Sim. Você pode gerar um lote de até 10 senhas com um clique, o que é útil ao criar contas ou integrar novos membros da equipe.',
      },
      {
        question: 'O gerador garante pelo menos um caractere de cada classe selecionada?',
        answer:
          'Sim. Toda senha gerada inclui pelo menos um caractere de cada classe de caracteres que você ativou, sem colocar esses caracteres em posições fixas e previsíveis.',
      },
      {
        question: 'Posso usar essas senhas como senha mestra do meu gerenciador de senhas?',
        answer:
          'Uma frase-senha longa funciona bem como senha mestra, porque você precisa digitá-la de memória. Gere uma frase-senha Diceware de 6 palavras, memorize-a e guarde suas outras senhas no gerenciador.',
      },
      {
        question: 'Por que não usar Math.random() para senhas?',
        answer:
          'O Math.random() não é criptograficamente seguro: sua saída pode ser prevista se um invasor conhecer seu estado interno. Esta ferramenta usa apenas window.crypto.getRandomValues, que foi criado para aleatoriedade sensível à segurança.',
      },
      {
        question: 'Uma senha gerada funciona em todos os sites?',
        answer:
          'Quase sempre. Se um site rejeitar símbolos ou limitar o tamanho, reduza o tamanho ou desative a classe de símbolos e gere novamente até o site aceitar.',
      },
      {
        question: 'Posso reutilizar uma senha gerada em vários sites?',
        answer:
          'Você não deve. Reutilizar uma senha significa que um vazamento expõe todas as contas que a compartilham, então gere uma senha única para cada site e guarde-as em um gerenciador de senhas.',
      },
      {
        question: 'O que acontece com minhas senhas se eu atualizar a página?',
        answer:
          'Elas somem. As senhas geradas existem apenas na memória temporária da aba, então copie ou salve-as em um gerenciador de senhas antes de atualizar ou fechar a página.',
      },
      {
        question: 'O Gerador de Senhas funciona offline?',
        answer:
          'Sim. Depois que a página carrega, a geração acontece totalmente no seu navegador, sem requisições de rede, então funciona offline.',
      },
      {
        question: 'Como escolho entre senha e frase-senha para Wi-Fi?',
        answer:
          'Use uma frase-senha para chaves de Wi-Fi que você digita em muitos dispositivos, pois palavras são mais fáceis de digitar corretamente, e uma senha de caracteres aleatórios quando um gerenciador de senhas vai preenchê-la para você.',
      },
      {
        question: 'Uma senha gerada é garantida como impossível de hackear?',
        answer:
          'Nenhuma senha pode ser garantida como impossível de hackear — um site ainda pode ser invadido ou enganado por phishing. Uma senha longa, única e gerada aleatoriamente, guardada em um gerenciador de senhas, é, no entanto, uma das defesas práticas mais fortes que você pode usar.',
      },
    ],
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
    instructions: [
      {
        title: 'Selecione um arquivo do seu dispositivo',
        description:
          'Escolha um arquivo compactado, instalador, PDF ou arquivo binário. O arquivo é lido estritamente na memória local do navegador (recomendado abaixo de 500 MB) e nunca é enviado.',
      },
      {
        title: 'Aguarde os resumos serem calculados',
        description:
          'O navegador calcula SHA-256, SHA-512, SHA-384 e SHA-1 em paralelo usando Web Crypto com aceleração de hardware. Arquivos maiores levam alguns segundos.',
      },
      {
        title: 'Confira os resumos criptográficos calculados',
        description:
          'Revise os hashes hexadecimais SHA-256, SHA-512, SHA-384 e o legado SHA-1 junto com os metadados do arquivo, e baixe um arquivo de texto .sha256 padrão se precisar.',
      },
      {
        title: 'Verifique contra um checksum publicado',
        description:
          'Cole a string esperada de SHA-256/512/384/1 — ou uma linha inteira "<hash>  nome-do-arquivo" de um arquivo .sha256sum — para confirmar uma correspondência exata ou detectar corrupção/adulteração.',
      },
      {
        title: 'Copie ou exporte o hash',
        description:
          'Copie qualquer resumo com um clique ou baixe o arquivo de texto .sha256 padrão para enviar junto com uma versão ou guardar como registro de verificação.',
      },
      {
        title: 'Aja em caso de divergência ou arquivo grande',
        description:
          'Se os hashes não corresponderem, exclua o arquivo e baixe-o novamente da fonte oficial. Para arquivos acima de ~500 MB, use shasum -a 256 ou certutil, pois o navegador carrega o arquivo inteiro na memória.',
      },
    ],
    examples: [
      {
        title: 'Verificando um binário de versão baixado contra um .sha256sum do fornecedor',
        input: 'Arquivo: app-v2.tar.gz · Esperado: "e3b0c442...  app-v2.tar.gz"',
        output: 'Checksum verificado! Corresponde ao resumo SHA-256 calculado de forma limpa.',
        explanation: 'Extrai automaticamente o token de hash inicial, ignora maiúsculas/minúsculas e compara com os 4 algoritmos calculados.',
      },
      {
        title: 'Gerando um arquivo .sha256 para sua própria versão',
        input: 'Arquivo de versão: release-v1.0.zip',
        output: 'Arquivo release-v1.0.zip.sha256 pronto para publicar junto com o download.',
        explanation: 'O arquivo de texto padrão permite que os usuários verifiquem o download com ferramentas comuns.',
      },
    ],
    benefits: [
      'Usa Web Crypto SubtleCrypto nativo do navegador com aceleração de hardware',
      'Aceita colar linhas completas "<hash>  nome-do-arquivo" de manifestos .sha256sum de versões',
      'Exporta arquivos de verificação filename.sha256 padrão com um clique',
      'Zero envio de arquivos mantém builds confidenciais e contratos privados',
    ],
    useCases: [
      'Verificar ISOs Linux, binários de CLI ou tarballs de código aberto sem abrir um terminal',
      'Confirmar a entrega exata byte a byte de arquivos jurídicos ou financeiros',
      'Gerar manifestos .sha256 de versão para pequenos entregáveis de clientes',
      'Detectar downloads truncados ou corrompidos antes da extração',
    ],
    faqs: [
      {
        question: 'Há um limite máximo de tamanho de arquivo?',
        answer:
          'Como o File.arrayBuffer() do navegador carrega o arquivo inteiro na RAM do cliente de uma vez, arquivos de até ~300–500 MB funcionam bem, enquanto ISOs de vários gigabytes podem exceder as cotas de memória do navegador — para arquivos de vários GB, ferramentas CLI nativas (shasum -a 256 ou certutil) são recomendadas.',
      },
      {
        question: 'Por que o SHA-1 é rotulado apenas como compatibilidade legada?',
        answer:
          'O SHA-1 tem fraquezas práticas conhecidas de colisão e não deve ser confiável para garantias de segurança contra adversários; prefira SHA-256 ou SHA-512 sempre que possível.',
      },
      {
        question: 'Quer gerar hash de strings de texto puro em vez de arquivos binários?',
        answer:
          'Confira nossa ferramenta Gerador de Hash em Ferramentas de Desenvolvedor para hash instantâneo de texto UTF-8.',
      },
      {
        question: 'O Verificador de Hash de Arquivo é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e você pode verificar quantos arquivos quiser.',
      },
      {
        question: 'Meus arquivos são enviados para algum lugar quando eu os verifico?',
        answer:
          'Não. O hash é calculado inteiramente no seu navegador usando a API Web Crypto, então seus arquivos nunca saem do seu dispositivo — e é exatamente por isso que é seguro para builds confidenciais e contratos.',
      },
      {
        question: 'O que é um hash de arquivo e por que devo verificá-lo?',
        answer:
          'Um hash é uma impressão digital de tamanho fixo calculada a partir dos bytes exatos de um arquivo. Se até um byte mudar, o hash muda completamente, então comparar hashes prova que um download chegou intacto e sem modificação.',
      },
      {
        question: 'Qual algoritmo de hash devo usar: SHA-256, SHA-512 ou SHA-1?',
        answer:
          'Use SHA-256 para verificação geral — é o padrão que os publicadores fornecem. O SHA-512 é igualmente forte e mais rápido em sistemas de 64 bits, enquanto o SHA-1 é apenas legado e não deve ser confiável para segurança.',
      },
      {
        question: 'Onde encontro o checksum oficial para comparar?',
        answer:
          'Os publicadores geralmente o listam na página de download ou em um arquivo .sha256 / .sha256sum junto ao download. Sempre copie-o do próprio site do fornecedor, nunca de um espelho ou post de fórum.',
      },
      {
        question: 'O que devo fazer se os hashes não corresponderem?',
        answer:
          'Não execute nem extraia o arquivo. Exclua-o e baixe novamente da fonte oficial; uma divergência significa que o download foi corrompido, truncado ou possivelmente adulterado.',
      },
      {
        question: 'Posso colar uma linha inteira de .sha256sum em vez de só o hash?',
        answer:
          'Sim. O verificador aceita uma linha completa "<hash>  nome-do-arquivo" de um manifesto de versão — ele extrai o token de hash inicial automaticamente, ignora maiúsculas/minúsculas e o compara com os quatro algoritmos calculados.',
      },
      {
        question: 'O hash depende do nome do arquivo?',
        answer:
          'Não. O resumo é calculado apenas a partir do conteúdo do arquivo, então renomear um arquivo nunca muda seu hash. Dois arquivos com os mesmos bytes sempre geram o mesmo hash.',
      },
      {
        question: 'Posso verificar uma ISO Linux ou um instalador grande com esta ferramenta?',
        answer:
          'Sim, até cerca de 300–500 MB. Para ISOs de vários gigabytes, use uma ferramenta nativa como shasum -a 256 no macOS/Linux ou certutil -hashfile no Windows, pois os navegadores carregam o arquivo inteiro na memória.',
      },
      {
        question: 'Qual é a diferença entre SHA-256 e SHA-512?',
        answer:
          'Os dois são membros seguros da família SHA-2; o SHA-256 gera um resumo hexadecimal de 64 caracteres e o SHA-512 um de 128 caracteres. O SHA-512 é um pouco mais forte e mais rápido em hardware de 64 bits, mas o SHA-256 é o checksum publicado com mais frequência.',
      },
      {
        question: 'Esta ferramenta consegue detectar vírus ou malware em um arquivo?',
        answer:
          'Não. Um hash correspondente só prova que o arquivo é idêntico ao que o publicador lançou. Se o próprio arquivo do publicador fosse malicioso, o hash ainda corresponderia, então só verifique downloads de fontes em que você confia.',
      },
      {
        question: 'Como baixo um arquivo .sha256 para minha própria versão?',
        answer:
          'Gere o hash do seu arquivo de versão aqui, baixe o arquivo de texto filename.sha256 padrão que a ferramenta gera e publique-o junto com seu download para que os usuários possam verificá-lo.',
      },
      {
        question: 'Por que o hash leva alguns segundos para arquivos grandes?',
        answer:
          'O navegador precisa ler e processar cada byte do arquivo. Arquivos maiores simplesmente levam mais tempo, e o tempo cresce com o tamanho do arquivo, e não com o algoritmo escolhido.',
      },
      {
        question: 'O Verificador de Hash de Arquivo funciona offline?',
        answer:
          'Sim. Depois que a página carrega, todo o hash acontece localmente no seu navegador, sem requisições de rede, então você pode verificar arquivos sem conexão com a internet.',
      },
      {
        question: 'Posso verificar vários arquivos de uma vez?',
        answer:
          'A ferramenta verifica um arquivo por vez. Gere o hash de cada arquivo separadamente e compare-o com seu próprio checksum publicado.',
      },
      {
        question: 'Um hash correspondente é prova de que o arquivo é autêntico?',
        answer:
          'Ele prova que o arquivo é byte a byte idêntico ao que o publicador gerou o hash. Não prova que o publicador é quem diz ser, então obtenha o hash esperado no canal oficial do publicador.',
      },
      {
        question: 'A ferramenta armazena meus arquivos ou seus hashes?',
        answer:
          'Não. Nada é enviado ou armazenado, e os hashes calculados existem apenas na sua aba atual do navegador até você fechá-la ou atualizá-la.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Selo de Monograma ou Enviar Logotipo',
        description:
          'Digite de 1 a 3 iniciais da marca com cores personalizadas de fundo/texto, ou mude para Enviar Imagem de Logotipo para cortar ao centro um selo PNG/SVG/JPG existente.',
      },
      {
        title: 'Estilize seu ícone',
        description:
          'Escolha as letras e cores do monograma, ou ajuste o corte do logotipo enviado para que o selo fique centralizado com preenchimento uniforme em todos os lados.',
      },
      {
        title: 'Selecione o formato dos cantos',
        description:
          'Escolha Quadrado Arredondado (estilo iOS/macOS), Círculo ou Quadrado com cantos retos.',
      },
      {
        title: 'Veja a pré-visualização em todos os tamanhos',
        description:
          'Confira com cuidado as pré-visualizações de 16×16 e 32×32 — um selo que fica ótimo grande pode virar um borrão no tamanho da aba, então simplifique letras ou detalhes se precisar.',
      },
      {
        title: 'Baixe favicon.ico, PNGs e o trecho HTML',
        description:
          'Baixe o pacote favicon.ico com vários quadros junto com os tamanhos individuais em PNG e copie as tags de link do <head> para o seu projeto.',
      },
      {
        title: 'Instale os ícones e limpe o cache',
        description:
          'Coloque os arquivos na sua pasta /public/, cole as tags de link no index.html e atualize com força ou limpe o cache do navegador — os navegadores armazenam favicons em cache de forma agressiva, então um ícone desatualizado geralmente significa um ícone em cache.',
      },
    ],
    examples: [
      {
        title: 'Criando ícones para um novo app React ou Cloudflare Pages',
        input: 'Monograma "UH" · Fundo #4F46E5 · Formato: Quadrado Arredondado',
        output: 'favicon.ico binário (quadros PNG 16+32+48 px) + 6 tamanhos PNG + trecho HTML <link>',
        explanation: 'Constrói cabeçalhos binários válidos de ICONDIR e ICONDIRENTRY diretamente dentro de buffers Uint8Array.',
      },
      {
        title: 'Gerando ícones Apple Touch e PWA a partir de um logotipo quadrado',
        input: 'Logotipo PNG 512×512 com fundo transparente · Formato: Círculo',
        output: 'Ícone Apple Touch 180×180 + ícones PWA 192×192 e 512×512, todos nítidos.',
        explanation: 'O corte central mantém o selo da marca centralizado em todos os tamanhos de ícone.',
      },
    ],
    benefits: [
      'Cria um arquivo .ico binário genuíno com vários quadros (16×16, 32×32 e 48×48), e não um PNG renomeado',
      'Cobre abas de computador, Apple Touch (180×180) e ícones de Manifesto Web (192/512 px)',
      'O modo Monograma instantâneo não exige nenhum software de design para projetos paralelos e MVPs',
      'Gera modelo HTML5 <link rel="icon"> limpo, pronto para colar no index.html',
    ],
    useCases: [
      'Enviar favicons e ícones Apple Touch faltando antes de lançamentos de SaaS ou microssites',
      'Criar ícones de aba de alto contraste para painéis de teste vs. produção',
      'Transformar selos quadrados de marca SVG/PNG em conjuntos completos de ícones PWA',
      'Gerar pré-visualizações nítidas de 16×16 e 32×32 para verificar a legibilidade em tamanho pequeno',
    ],
    faqs: [
      {
        question: 'O favicon.ico baixado é um arquivo binário ICO real?',
        answer:
          'Sim. Ele grava cabeçalhos ICONDIR padrão do Windows ICO e entradas de diretório contendo três quadros nítidos codificados em PNG (16×16, 32×32 e 48×48), aceitos por todos os navegadores e sistemas operacionais modernos.',
      },
      {
        question: 'De quais tamanhos de ícone os sites modernos realmente precisam?',
        answer:
          'Um favicon.ico mais um PNG 32×32, um ícone Apple Touch 180×180 e PNGs de Manifesto Web 192×192 / 512×512 cobrem praticamente todos os navegadores de computador, iOS móvel e Android.',
      },
      {
        question: 'Onde devo colocar esses arquivos em um projeto React + Vite?',
        answer:
          'Coloque o favicon.ico e os ícones PNG dentro da pasta /public/ do seu projeto e cole as tags HTML <link> dentro do <head> do index.html.',
      },
      {
        question: 'O Gerador de Favicon é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e todos os ícones são gerados localmente no seu navegador.',
      },
      {
        question: 'Meus logotipos enviados vão para um servidor?',
        answer:
          'Não. Seu logotipo é processado inteiramente no seu navegador e nunca é enviado, então seus arquivos de marca ficam privados.',
      },
      {
        question: 'Qual é a diferença entre um favicon.ico e um favicon PNG?',
        answer:
          'Um favicon.ico é um contêiner com vários tamanhos de ícone em um único arquivo binário, que os navegadores aceitam há décadas. Um favicon PNG é uma imagem de tamanho único; navegadores modernos aceitam os dois, mas o .ico continua sendo o padrão mais seguro.',
      },
      {
        question: 'O que é um ícone Apple Touch?',
        answer:
          'É o ícone PNG 180×180 que o iOS usa quando alguém adiciona seu site à tela inicial. Sem ele, o iOS tira uma captura de tela da sua página, o que geralmente fica ruim.',
      },
      {
        question: 'Para que servem os ícones PWA 192×192 e 512×512?',
        answer:
          'São os ícones listados no manifesto do seu app web para Progressive Web Apps instaláveis. O Android e o Chrome os usam para o ícone da tela inicial, a tela de abertura e o lançador de apps.',
      },
      {
        question: 'Posso criar um favicon a partir de texto sem logotipo?',
        answer:
          'Sim. O modo Monograma transforma de 1 a 3 letras, como as iniciais da sua marca, em um selo limpo com sua escolha de cor de fundo, cor de texto e formato de cantos — sem software de design.',
      },
      {
        question: 'Qual arquivo de logotipo devo enviar para o melhor resultado?',
        answer:
          'Envie um PNG ou SVG quadrado com fundo transparente em 512×512 ou maior. Imagens de origem quadradas cortam de forma limpa; logotipos largos ou altos são cortados ao centro, o que pode cortar as bordas.',
      },
      {
        question: 'Por que meu favicon novo não aparece depois de publicar?',
        answer:
          'Os navegadores armazenam favicons em cache de forma muito agressiva. Atualize com força com Ctrl+Shift+R (ou Cmd+Shift+R no Mac), limpe o cache do site ou teste em uma janela privada para ver o ícone novo.',
      },
      {
        question: 'O favicon deve ser igual ao meu logotipo exatamente?',
        answer:
          'Em tamanhos grandes sim, mas em 16×16 os detalhes finos desaparecem. Simplifique o selo para os menores tamanhos — iniciais em negrito ou uma única forma em negrito ficam bem melhores que um logotipo detalhado.',
      },
      {
        question: 'Qual formato de cantos devo escolher?',
        answer:
          'O Quadrado Arredondado combina com o estilo de ícones de apps iOS e macOS, o Círculo serve para avatares e selos estilo social, e o Quadrado com cantos retos é melhor para selos de marca geométricos ou técnicos.',
      },
      {
        question: 'Preciso adicionar tags de link HTML para os ícones?',
        answer:
          'Sim, para resultados confiáveis. Os navegadores procuram /favicon.ico por padrão, mas os ícones Apple Touch e PWA só carregam quando você os declara com tags <link> no <head> da sua página, que esta ferramenta gera para você.',
      },
      {
        question: 'Posso usar os ícones gerados para um app de celular também?',
        answer:
          'Os PNGs 192×192 e 512×512 funcionam para instalações PWA, mas apps nativos de iOS e Android precisam de seus próprios conjuntos de ícones com tamanhos e formatos específicos, que esta ferramenta voltada para a web não gera.',
      },
      {
        question: 'O Gerador de Favicon funciona offline?',
        answer:
          'Sim. Depois que a página carrega, a geração de ícones acontece totalmente no seu navegador, sem requisições de rede.',
      },
      {
        question: 'Qual cor de fundo funciona melhor para um favicon de monograma?',
        answer:
          'Uma cor sólida de marca de alto contraste com letras brancas ou quase brancas funciona melhor, pois continua legível em 16×16. Evite texto claro sobre fundos claros e gradientes cheios.',
      },
      {
        question: 'Posso gerar os ícones novamente depois de mudar as cores da minha marca?',
        answer:
          'Sim. Basta atualizar as cores ou enviar o logotipo novo e baixar um conjunto novo — a ferramenta não guarda nada da sua sessão anterior, então cada execução começa do zero.',
      },
      {
        question: 'O favicon funciona em abas de navegador em modo escuro?',
        answer:
          'Um favicon com cor de fundo sólida aparece igual em abas claras e escuras. Se seu selo for escuro sobre transparente, adicione um fundo claro ou contorno para que ele continue visível no chrome escuro do navegador.',
      },
      {
        question: 'A ferramenta armazena meus logotipos ou ícones gerados?',
        answer:
          'Não. Tudo acontece localmente na aba do seu navegador, nada é enviado ou armazenado, e seus arquivos desaparecem quando você fecha ou atualiza a página.',
      },
    ],
  },
};
