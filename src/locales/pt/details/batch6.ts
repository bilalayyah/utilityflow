// Detail content for PT tools — split out of
// src/locales/pt/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
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
          'Não. Toda a pré-visualização e medição acontece localmente no seu navegador, por isso seu título, sua descrição e sua URL nunca saem do seu dispositivo.',
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
          'Copie o bloco completo <script type="application/ld+json"> e cole-o no <head> da página correspondente, salvando o arquivo antes de testar o resultado no validador do Google.',
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
          'O slug é a parte final legível de uma URL, como "best-cafe-tools", enquanto o permalink é a URL completa, incluindo o domínio e as pastas. Para uma conversão rápida de texto para programadores com separadores de underline, veja Conversor de Texto para Slug.',
      },
    ],
  },
  'keyword-density-checker': {
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
          'A densidade de palavras-chave é a frequência com que uma palavra ou frase aparece como porcentagem do total de palavras de um texto. Uma frase usada 5 vezes em 500 palavras tem densidade de 1%. Para tabelas completas de frequência com exportação CSV, veja Contador de Frequência de Palavras.',
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
};
