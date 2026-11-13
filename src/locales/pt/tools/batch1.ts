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
    instructions: [
      {
        title: 'Cole ou digite seu rascunho',
        description:
          'Digite o texto direto no editor ou clique em Carregar exemplo para ver como as contagens se atualizam.',
      },
      {
        title: 'Revise os totais estruturais ao vivo',
        description:
          'Confira palavras, caracteres com e sem espaços, frases, parágrafos e o tempo estimado de leitura na barra de resumo.',
      },
      {
        title: 'Confira o tempo de leitura e de fala',
        description:
          'Veja o tempo estimado de leitura a 225 palavras por minuto e o tempo de fala a 130 palavras por minuto para ajustar o ritmo de redações, palestras e roteiros de vídeo antes de publicar.',
      },
      {
        title: 'Inspecione os termos repetidos',
        description:
          'Olhe o painel de palavras mais frequentes para identificar repetições sem querer e afinar sua redação antes de finalizar o rascunho.',
      },
      {
        title: 'Copie ou baixe seu texto',
        description:
          'Use o botão de copiar ou baixe um backup em .txt do seu rascunho quando estiver satisfeito com as contagens.',
      },
      {
        title: 'Corrija contagens inesperadas',
        description:
          'Se uma contagem parecer errada, verifique se há caracteres ocultos colados ou linhas em branco extras; remover quebras de linha a mais geralmente corrige os totais de parágrafos e frases.',
      },
    ],
    examples: [
      {
        title: 'Verificação do tamanho da introdução de um blog',
        input: 'Sites estáticos rápidos reduzem a latência do servidor. Leitores ficam engajados quando o texto é conciso.',
        output: '16 palavras · 106 caracteres · 2 frases · 4 s de leitura',
        explanation:
          'Ideal para verificar o ritmo do título e do parágrafo inicial antes de publicar.',
      },
      {
        title: 'Verificação do limite de palavras de uma redação',
        input: 'Parágrafo 1 (240 palavras)\n\nParágrafo 2 (255 palavras)',
        output: '495 palavras · 2 parágrafos · 2 min 12 s de leitura',
        explanation: 'Confirma uma meta de 500 palavras para bolsa de estudos ou trabalho com folga.',
      },
    ],
    benefits: [
      'Atualiza na hora, a cada tecla digitada, na memória do navegador',
      'Calcula o tempo de leitura (225 ppm) e o tempo de fala (130 ppm)',
      'Mostra suas seis palavras mais frequentes para identificar repetições',
      'Exporta backups em texto simples direto como arquivo .txt',
    ],
    useCases: [
      'Cumprir metas rígidas de palavras em redações acadêmicas e editais',
      'Cronometrar palestras, roteiros de vídeo e introduções de podcast',
      'Revisar rascunhos de artigos e páginas para uma estrutura concisa',
      'Verificar o tamanho do texto de newsletters antes de agendar campanhas',
    ],
    faqs: [
      {
        question: 'Como o Contador de Palavras calcula o tempo de leitura e de fala?',
        answer:
          'O tempo de leitura usa um ritmo médio de leitura silenciosa de um adulto, de 225 palavras por minuto, enquanto o tempo de fala usa um ritmo de apresentação conversacional de 130 palavras por minuto.',
      },
      {
        question: 'Palavras com hífen contam como uma palavra ou duas?',
        answer:
          'Tokens separados por espaço em branco contam como uma única palavra, igual ao comportamento da maioria dos processadores de texto.',
      },
      {
        question: 'Meu texto é salvo ou enviado para algum lugar?',
        answer:
          'Não. Toda a contagem acontece localmente na aba do seu navegador, e seu texto desaparece assim que você limpa ou fecha a página.',
      },
      {
        question: 'Qual é a diferença entre o Contador de Palavras e o Contador de Caracteres?',
        answer:
          'O Contador de Palavras foca nos totais de palavras, parágrafos, duração da fala e palavras mais repetidas, enquanto o Contador de Caracteres detalha o tamanho em bytes UTF-8 e os limites de caracteres de redes sociais e SEO.',
      },
      {
        question: 'O Contador de Palavras é gratuito?',
        answer:
          'Sim. O Contador de Palavras é totalmente gratuito, sem cadastro, sem limite de palavras e sem precisar de conta.',
      },
      {
        question: 'O Contador de Palavras funciona sem internet?',
        answer:
          'Sim. Depois que a página carrega, toda a contagem roda localmente no seu navegador, então continua funcionando sem conexão com a internet.',
      },
      {
        question: 'Como as frases são contadas?',
        answer:
          'As frases são contadas a partir da pontuação final, como ponto, exclamação e interrogação, por isso abreviações como "Dr." podem somar uma frase a mais.',
      },
      {
        question: 'O que conta como palavra no Contador de Palavras?',
        answer:
          'Qualquer sequência de caracteres separada por espaço conta como uma palavra, incluindo números, termos com hífen e palavras com apóstrofo.',
      },
      {
        question: 'Posso contar palavras de um PDF ou documento do Word?',
        answer:
          'Não diretamente. Copie o texto do documento e cole no Contador de Palavras para ver as contagens na hora.',
      },
      {
        question: 'O Contador de Palavras conta caracteres com espaços?',
        answer:
          'Sim. Ele mostra os caracteres com e sem espaços, para você conferir limites que contam de qualquer um dos jeitos.',
      },
      {
        question: 'Qual é a precisão da estimativa de tempo de leitura?',
        answer:
          'É uma estimativa baseada em um ritmo médio de leitura silenciosa de 225 palavras por minuto; cada leitor pode ser mais rápido ou mais lento.',
      },
      {
        question: 'Em que se baseia a estimativa de tempo de fala?',
        answer:
          'O tempo de fala usa um ritmo de apresentação conversacional de 130 palavras por minuto, ideal para palestras, roteiros de vídeo e introduções de podcast.',
      },
      {
        question: 'O Contador de Palavras funciona com outros idiomas?',
        answer:
          'Sim. Ele conta palavras separadas por espaço em qualquer idioma, embora as estimativas de tempo de leitura sejam calibradas para textos em inglês.',
      },
      {
        question: 'Posso conferir o limite de palavras de uma redação ou trabalho?',
        answer:
          'Sim. Cole sua redação e compare o total ao vivo com a meta; a barra de resumo mostra a contagem exata enquanto você edita.',
      },
      {
        question: 'O Contador de Palavras conta números como palavras?',
        answer:
          'Sim. Números sozinhos, separados por espaços, contam como palavras, assim como na maioria dos processadores de texto.',
      },
      {
        question: 'Por que minha contagem difere da do Microsoft Word ou do Google Docs?',
        answer:
          'Ferramentas diferentes dividem palavras com hífen, travessões e números de formas ligeiramente diferentes, então pequenas diferenças de algumas palavras são normais.',
      },
      {
        question: 'Para que servem as palavras mais frequentes mostradas?',
        answer:
          'O painel lista as seis palavras mais repetidas para você identificar termos usados em excesso e variar o vocabulário antes de publicar.',
      },
      {
        question: 'Posso contar palavras de apenas um parágrafo?',
        answer:
          'Sim. Cole só aquele parágrafo no editor e os totais ao vivo vão refletir apenas o texto digitado.',
      },
      {
        question: 'Posso usar o Contador de Palavras para legendas de redes sociais?',
        answer:
          'Sim. Cole a legenda para conferir o total de palavras e o tempo de leitura, e use o Contador de Caracteres se também precisar verificar limites de caracteres.',
      },
      {
        question: 'Posso usar o Contador de Palavras no celular?',
        answer:
          'Sim. Funciona em qualquer navegador moderno de celular, com as mesmas contagens ao vivo, tempo de leitura e opções de cópia.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite ou cole seu texto',
        description:
          'Digite um título de meta, legenda de rede social, alerta de SMS ou string de campo de formulário na caixa de texto.',
      },
      {
        title: 'Confira as métricas de caracteres e bytes',
        description:
          'Compare o total de caracteres com espaços, caracteres sem espaços, letras, dígitos e o peso em bytes UTF-8.',
      },
      {
        title: 'Verifique os limites das plataformas',
        description:
          'Revise os medidores de progresso ao vivo para confirmar se seu texto cabe nos limites de SEO, SMS, X, Instagram ou LinkedIn.',
      },
      {
        title: 'Use o tamanho em bytes para limites técnicos',
        description:
          'Confira o total de bytes UTF-8 ao validar colunas de banco de dados, payloads de API ou campos de arquivo que limitam por bytes, e não por caracteres.',
      },
      {
        title: 'Compare com e sem espaços',
        description:
          'Alterne entre os totais com espaços e sem espaços quando um formulário ou plataforma conta só os caracteres que não são espaço em branco.',
      },
      {
        title: 'Corrija uma contagem que parece errada',
        description:
          'Se uma contagem parecer errada, verifique se há caracteres invisíveis, como espaços no fim ou quebras de linha coladas, que contam no total com espaços.',
      },
    ],
    examples: [
      {
        title: 'Verificação de título de meta',
        input: 'Contador de Palavras – Conte Palavras e Tempo de Leitura',
        output: '56 / 60 caracteres (4 restantes)',
        explanation: 'Cabe com folga na janela típica de exibição de títulos de buscadores, de 60 caracteres.',
      },
      {
        title: 'Verificação de bytes de emoji multibyte',
        input: 'Dia de lançamento 🚀',
        output: '20 unidades de código UTF-16 · 23 bytes UTF-8',
        explanation: 'Mostra a diferença exata de tamanho em bytes quando há caracteres não ASCII.',
      },
    ],
    benefits: [
      'Acompanha caracteres com espaços e a contagem de caracteres sem espaço',
      'Mede o tamanho exato em bytes UTF-8 para limites de colunas de banco de dados e payloads de API',
      'Inclui indicadores visuais de limite para tags de SEO, SMS, X, Instagram e LinkedIn',
      'Nenhum envio ao servidor nem registro de caracteres',
    ],
    useCases: [
      'Escrever tags de título e meta descrições de buscadores sem cortes',
      'Redigir notificações por SMS dentro do limite de 160 caracteres por segmento',
      'Validar o tamanho de campos VARCHAR de banco de dados em bytes UTF-8',
      'Criar legendas de redes sociais concisas antes da dobra',
    ],
    faqs: [
      {
        question: 'Por que os bytes UTF-8 às vezes são mais que a contagem de caracteres?',
        answer:
          'Caracteres ASCII comuns do inglês ocupam 1 byte cada em UTF-8, enquanto caracteres acentuados, escritas não latinas e emojis precisam de 2 a 4 bytes por caractere.',
      },
      {
        question: 'O contador de caracteres inclui quebras de linha?',
        answer:
          'Sim. Caracteres de nova linha contam na métrica "Com espaços" e ficam fora da métrica "Sem espaços".',
      },
      {
        question: 'O que acontece se eu ultrapassar a barra de limite de uma plataforma?',
        answer:
          'O indicador de progresso fica vermelho e mostra o número exato de caracteres acima do limite, para você saber quanto cortar.',
      },
      {
        question: 'O Contador de Caracteres é gratuito?',
        answer:
          'Sim. O Contador de Caracteres é totalmente gratuito, sem cadastro, sem limite de caracteres e sem precisar de conta.',
      },
      {
        question: 'Qual é a diferença entre caracteres com e sem espaços?',
        answer:
          'Caracteres com espaços incluem todos os espaços entre as palavras, enquanto caracteres sem espaços os excluem, o que importa quando uma plataforma conta só os caracteres visíveis.',
      },
      {
        question: 'O Contador de Caracteres conta emojis?',
        answer:
          'Sim. Cada emoji conta como caracteres e, como a maioria dos emojis usa vários bytes UTF-8, o total de bytes fica maior que a contagem de caracteres.',
      },
      {
        question: 'Quantos caracteres posso colar no Contador de Caracteres?',
        answer:
          'Não há um limite definido. A contagem roda toda no seu navegador, então até documentos bem longos são medidos na hora.',
      },
      {
        question: 'Qual é o limite de caracteres do título de SEO?',
        answer:
          'Os buscadores costumam exibir cerca de 50 a 60 caracteres da tag de título, então manter os títulos nessa faixa evita cortes nos resultados.',
      },
      {
        question: 'Qual é o limite de caracteres da meta descrição?',
        answer:
          'Os buscadores costumam exibir cerca de 150 a 160 caracteres de uma meta descrição, por isso a ferramenta acompanha seu progresso nessa faixa.',
      },
      {
        question: 'Quantos caracteres cabem em um único SMS?',
        answer:
          'Um segmento de SMS comum comporta 160 caracteres usando o alfabeto GSM básico; mensagens mais longas são divididas em vários segmentos.',
      },
      {
        question: 'O Contador de Caracteres conta tabulações e quebras de linha?',
        answer:
          'Sim. Tabulações e quebras de linha contam no total com espaços, então um texto colado com linhas em branco extras vai mostrar uma contagem maior.',
      },
      {
        question: 'O Contador de Caracteres inclui pontuação na contagem?',
        answer:
          'Sim. Sinais de pontuação contam como caracteres e entram tanto no total com espaços quanto no total sem espaços.',
      },
      {
        question: 'Qual limite de caracteres o X (Twitter) usa?',
        answer:
          'As postagens no X têm limite de 280 caracteres para a maioria das contas, e as barras de limite desta ferramenta mostram seu progresso até esse valor.',
      },
      {
        question: 'Posso verificar o tamanho de uma legenda do Instagram?',
        answer:
          'Sim. Cole a legenda e observe o medidor de limite do Instagram; as legendas têm limite de 2.200 caracteres.',
      },
      {
        question: 'O Contador de Caracteres funciona com textos em outros idiomas?',
        answer:
          'Sim. Ele conta caracteres em qualquer escrita, e o total de bytes UTF-8 mostra o tamanho real de armazenamento de letras acentuadas e caracteres não latinos.',
      },
      {
        question: 'Posso usar o Contador de Caracteres para uma postagem no LinkedIn?',
        answer:
          'Sim. Cole a postagem e confira o medidor de limite do LinkedIn, que acompanha o limite de 3.000 caracteres por postagem.',
      },
      {
        question: 'O Contador de Caracteres salva ou envia meu texto?',
        answer:
          'Não. Toda a contagem acontece localmente no seu navegador, e seu texto nunca é enviado, armazenado ou compartilhado.',
      },
      {
        question: 'Por que minha contagem difere da do Microsoft Word?',
        answer:
          'Ferramentas diferentes tratam quebras de linha, tabulações e caracteres de formatação ocultos de formas distintas, então pequenas diferenças entre contadores são normais.',
      },
      {
        question: 'O que conta como letra e o que conta como dígito?',
        answer:
          'Letras são caracteres alfabéticos em qualquer escrita, enquanto dígitos são os caracteres numéricos de 0 a 9; ambos aparecem como totais separados.',
      },
      {
        question: 'Posso verificar a contagem de caracteres de um campo de senha ou nome de usuário?',
        answer:
          'Sim. Cole o valor na ferramenta para confirmar se ele atende ao tamanho mínimo ou máximo exigido antes de enviar o formulário.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole ou digite seu texto',
        description:
          'Insira títulos, parágrafos ou strings de identificadores no editor.',
      },
      {
        title: 'Escolha um estilo de caixa',
        description:
          'Clique em qualquer botão de transformação — como Título, caixa de Frase, camelCase ou snake_case — para atualizar o texto na hora.',
      },
      {
        title: 'Copie o resultado formatado',
        description:
          'Use o botão Copiar resultado para transferir o texto convertido para sua área de transferência.',
      },
      {
        title: 'Corrija texto em MAIÚSCULAS com um clique',
        description:
          'Cole o texto digitado com o Caps Lock ligado e escolha a caixa de Frase para restaurar a capitalização normal em todas as frases.',
      },
      {
        title: 'Converta identificadores para código',
        description:
          'Cole um rótulo simples, como "status da conta do usuário", e escolha camelCase, PascalCase, snake_case ou kebab-case para obter um nome de variável pronto para usar.',
      },
      {
        title: 'Corrija capitalização estranha',
        description:
          'Se o Título deixar uma palavra em minúsculas, provavelmente é uma palavra menor, como "e" ou "de"; digite-a de novo ou aplique maiúsculas só nela.',
      },
    ],
    examples: [
      {
        title: 'Corrigindo prosa em maiúsculas sem querer',
        input: 'ESTE RELATÓRIO RESUME OS RESULTADOS DO 4º TRIMESTRE. TODAS AS MÉTRICAS SÃO FINAIS.',
        output: 'Este relatório resume os resultados do 4º trimestre. Todas as métricas são finais.',
        explanation: 'A caixa de Frase deixa tudo em minúsculas e capitaliza o início de cada frase.',
      },
      {
        title: 'Formatando identificadores de código',
        input: 'status de faturamento da conta do usuário',
        output: 'statusDeFaturamentoDaContaDoUsuario (camelCase) / status_de_faturamento_da_conta_do_usuario (snake_case)',
        explanation: 'Converte rótulos comuns em inglês direto para as convenções padrão de programação.',
      },
    ],
    benefits: [
      'Suporta 10 formatos de caixa de texto e de desenvolvedor em um só lugar',
      'O Título inteligente mantém preposições e conjunções menores em minúsculas',
      'Lida com parágrafos com várias frases e quebras de linha sem problema',
      'Roda localmente no seu navegador, com cópia instantânea em um clique',
    ],
    useCases: [
      'Converter e-mails digitados sem querer em MAIÚSCULAS de volta para caixa de Frase',
      'Formatar títulos de blog e de vídeos do YouTube de forma consistente',
      'Renomear colunas de banco de dados, classes CSS ou variáveis JavaScript',
      'Normalizar cabeçalhos de planilhas antes de importar arquivos CSV',
    ],
    faqs: [
      {
        question: 'Como o Título lida com palavras curtas como "e" ou "de"?',
        answer:
          'O formatador de Título capitaliza a primeira e a última palavra do título e mantém minúsculas as palavras menores padrão, como artigos, conjunções e preposições curtas (a, o, e, de, em, para).',
      },
      {
        question: 'Posso converter um identificador snake_case ou camelCase para outro formato?',
        answer:
          'Sim. Os limites das palavras em underlines, hifens e transições de camelCase são separados automaticamente antes de aplicar a nova regra de caixa.',
      },
      {
        question: 'A caixa de Frase preserva vários parágrafos?',
        answer:
          'Sim. A capitalização recomeça no início do texto, depois de pontuação que encerra frases e no início de novas linhas.',
      },
      {
        question: 'O Conversor de Caixa é gratuito?',
        answer:
          'Sim. O Conversor de Caixa é totalmente gratuito, sem cadastro, sem limite de tamanho de texto e sem precisar de conta.',
      },
      {
        question: 'Qual é a diferença entre Título e caixa de Frase?',
        answer:
          'O Título capitaliza a maioria das palavras de um cabeçalho, enquanto a caixa de Frase capitaliza só a primeira palavra de cada frase e nomes próprios, como uma frase normal.',
      },
      {
        question: 'Para que serve o camelCase?',
        answer:
          'O camelCase é o estilo padrão de nomes de variáveis e funções em JavaScript e em muitas outras linguagens de programação, por exemplo statusDaContaDoUsuario.',
      },
      {
        question: 'Para que serve o snake_case?',
        answer:
          'O snake_case separa as palavras com underlines e é muito usado para variáveis em Python, colunas de banco de dados e nomes de arquivos, por exemplo status_da_conta_do_usuario.',
      },
      {
        question: 'Para que serve o kebab-case?',
        answer:
          'O kebab-case separa as palavras com hifens e é muito usado para URLs, nomes de classes CSS e atributos HTML, por exemplo status-da-conta-do-usuario.',
      },
      {
        question: 'Para que serve o PascalCase?',
        answer:
          'O PascalCase capitaliza todas as palavras sem separadores e é muito usado para nomes de classes e componentes, por exemplo StatusDaContaDoUsuario.',
      },
      {
        question: 'O Conversor de Caixa corrige texto digitado todo em MAIÚSCULAS?',
        answer:
          'Sim. Cole o texto em maiúsculas e escolha a caixa de Frase ou minúsculas para restaurar a capitalização normal com um clique.',
      },
      {
        question: 'O Conversor de Caixa funciona com números e símbolos?',
        answer:
          'Sim. Números, pontuação e símbolos passam sem alteração; só as letras são convertidas.',
      },
      {
        question: 'Posso converter um parágrafo inteiro de uma vez?',
        answer:
          'Sim. Cole o parágrafo inteiro e o conversor aplica a caixa escolhida em todas as frases e quebras de linha.',
      },
      {
        question: 'O Título capitaliza palavras depois de dois-pontos?',
        answer:
          'Palavras depois de dois-pontos são tratadas como as demais palavras do título, então palavras principais são capitalizadas e palavras menores ficam minúsculas.',
      },
      {
        question: 'O Conversor de Caixa funciona com outros idiomas?',
        answer:
          'Sim. Ele converte letras em qualquer idioma que use maiúsculas e minúsculas, embora as regras de palavras menores do Título sejam baseadas no inglês.',
      },
      {
        question: 'Posso converter snake_case de volta para palavras normais?',
        answer:
          'Sim. Cole o identificador e escolha a caixa de Frase ou Título; os underlines são tratados como separadores de palavras e trocados por espaços.',
      },
      {
        question: 'O que acontece com as quebras de linha ao converter a caixa?',
        answer:
          'As quebras de linha são preservadas exatamente, então textos com várias linhas mantêm a estrutura depois da conversão.',
      },
      {
        question: 'O Conversor de Caixa salva ou envia meu texto?',
        answer:
          'Não. A conversão roda localmente no seu navegador, e seu texto nunca é enviado, armazenado ou compartilhado.',
      },
      {
        question: 'Posso converter texto que já tem caixas misturadas?',
        answer:
          'Sim. O conversor primeiro divide as palavras em underlines, hifens e transições de caixa, então entradas com caixa mista convertem sem problema.',
      },
      {
        question: 'Posso usar o Conversor de Caixa para títulos de YouTube?',
        answer:
          'Sim. Cole o título do vídeo e aplique o Título para um estilo de cabeçalho consistente e profissional.',
      },
      {
        question: 'O Conversor de Caixa funciona no meu celular?',
        answer:
          'Sim. Funciona em qualquer navegador moderno de celular, com as mesmas conversões de um clique e o botão de copiar.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole sua lista separada por linhas',
        description:
          'Adicione qualquer lista com um item por linha na caixa Linhas Originais.',
      },
      {
        title: 'Configure as regras de comparação',
        description:
          'Ative Diferenciar maiúsculas, Remover espaços, Remover linhas vazias ou Ordenar alfabeticamente, conforme o rigor da comparação.',
      },
      {
        title: 'Copie as linhas únicas',
        description:
          'Veja quantas duplicatas foram removidas no cabeçalho do resumo e clique em Copiar para pegar a lista limpa.',
      },
      {
        title: 'Ordene a lista limpa alfabeticamente',
        description:
          'Ative Ordenar alfabeticamente se quiser as linhas únicas ordenadas de A a Z em vez de manter a ordem da primeira ocorrência.',
      },
      {
        title: 'Confira as contagens do resumo',
        description:
          'Revise a contagem de linhas originais, a contagem de linhas únicas e as duplicatas removidas no cabeçalho do resumo para confirmar se a limpeza funcionou como esperado.',
      },
      {
        title: 'Corrija linhas que não foram eliminadas',
        description:
          'Se duas linhas que parecem iguais continuarem, verifique se há espaços ocultos no fim ou capitalização diferente, ative Remover espaços ou desative Diferenciar maiúsculas e rode de novo.',
      },
    ],
    examples: [
      {
        title: 'Limpeza de lista de e-mails',
        input: 'alex@example.com\nsam@example.com\nAlex@example.com\n  sam@example.com  ',
        output: 'alex@example.com\nsam@example.com',
        explanation:
          'Com a remoção de espaços ativada e a sensibilidade a maiúsculas desligada, espaços no fim e variações de capitalização somem sem problema.',
      },
      {
        title: 'Limpeza de lista de palavras-chave',
        input: 'compressor de imagens\ncompressor de imagens\nredimensionar imagem',
        output: 'compressor de imagens\nredimensionar imagem',
        explanation: 'Remove palavras-chave repetidas de exportações mantendo a ordem da primeira ocorrência.',
      },
    ],
    benefits: [
      'Preserva a ordem da primeira ocorrência por padrão ou ordena alfabeticamente quando você quiser',
      'Mostra a contagem exata de linhas originais, linhas únicas e duplicatas removidas',
      'Lida com listas grandes de milhares de linhas sem esforço na memória do navegador',
      'Mantém listas privadas e exportações de clientes fora de servidores de terceiros',
    ],
    useCases: [
      'Eliminar duplicatas de exportações de pesquisa de palavras-chave e listas de URLs',
      'Limpar listas de e-mails de assinantes antes de importar para um CRM',
      'Remover entradas repetidas de rastreamento de pilha ou IP de arquivos de registro',
      'Preparar listas únicas de tags ou SKUs para planilhas',
    ],
    faqs: [
      {
        question: 'O Remover Linhas Duplicadas preserva minha ordem original?',
        answer:
          'Sim. Por padrão, ele mantém a primeira ocorrência de cada linha única na ordem original. Você pode ativar "Ordenar alfabeticamente" quando também quiser a ordem de A a Z.',
      },
      {
        question: 'Como a remoção de espaços afeta a detecção de duplicatas?',
        answer:
          'Quando Remover espaços está marcado, os espaços no início e no fim são retirados antes de verificar a unicidade, evitando que itens como "maçã " e "maçã" sejam tratados como diferentes.',
      },
      {
        question: 'E se eu quiser manter variações de caixa como "EUA" e "eua"?',
        answer:
          'Ative a caixa "Diferenciar maiúsculas" para que linhas com capitalização diferente continuem como entradas separadas.',
      },
      {
        question: 'A ferramenta Remover Linhas Duplicadas é gratuita?',
        answer:
          'Sim. A ferramenta é totalmente gratuita, sem cadastro, sem limite de linhas e sem precisar de conta.',
      },
      {
        question: 'O que conta como linha duplicada?',
        answer:
          'Duas linhas são duplicadas quando o texto delas é igual nas suas configurações atuais, incluindo as opções de sensibilidade a maiúsculas e de remoção de espaços que você escolheu.',
      },
      {
        question: 'Ela funciona com listas separadas por vírgula?',
        answer:
          'Não diretamente. A ferramenta compara linhas inteiras, então divida uma lista separada por vírgulas em um item por linha primeiro e depois cole.',
      },
      {
        question: 'Posso remover linhas duplicadas de um arquivo CSV?',
        answer:
          'Sim. Copie a coluna ou as linhas do seu CSV, cole como linhas, elimine as duplicatas e cole a lista limpa de volta na planilha.',
      },
      {
        question: 'O que acontece com as linhas vazias?',
        answer:
          'Linhas vazias são tratadas como qualquer outra linha, então ativar "Remover linhas vazias" as tira da saída junto com as duplicatas.',
      },
      {
        question: 'Posso remover duplicatas de uma lista de URLs?',
        answer:
          'Sim. Cole uma URL por linha e a ferramenta remove as URLs repetidas, útil para limpar exportações de palavras-chave e listas de sitemap.',
      },
      {
        question: 'Quantas linhas posso eliminar de uma vez?',
        answer:
          'Não há um limite definido. A eliminação de duplicatas roda toda no seu navegador, então listas de milhares de linhas são tratadas sem esforço na memória do navegador.',
      },
      {
        question: 'A ferramenta mantém a primeira ou a última ocorrência de uma duplicata?',
        answer:
          'Ela mantém a primeira ocorrência de cada linha única e remove as repetições posteriores, o que preserva sua ordem original.',
      },
      {
        question: 'Posso remover endereços de e-mail duplicados de uma lista?',
        answer:
          'Sim. Cole um endereço por linha com a sensibilidade a maiúsculas desligada e a remoção de espaços ligada, e os endereços duplicados viram uma única entrada.',
      },
      {
        question: 'A ordenação muda quais linhas são mantidas?',
        answer:
          'Não. A ordenação só reorganiza as linhas únicas em ordem alfabética depois da eliminação; ela não muda quais linhas são consideradas duplicatas.',
      },
      {
        question: 'A ferramenta remove palavras duplicadas dentro de uma mesma linha?',
        answer:
          'Não. Ela compara linhas inteiras, então duplicatas dentro de uma linha não são tocadas; use a ferramenta Localizar e Substituir para limpeza no nível de palavras.',
      },
      {
        question: 'A ferramenta funciona com números ou endereços IP?',
        answer:
          'Sim. Qualquer conteúdo de linha funciona, incluindo números, endereços IP, SKUs e códigos, desde que cada item esteja na sua própria linha.',
      },
      {
        question: 'Posso remover linhas duplicadas de registros de servidor?',
        answer:
          'Sim. Cole as linhas do registro e elimine as duplicatas para isolar erros únicos ou entradas de IP repetidas e resolver problemas mais rápido.',
      },
      {
        question: 'O Remover Linhas Duplicadas salva ou envia minha lista?',
        answer:
          'Não. A eliminação de duplicatas roda localmente no seu navegador, e sua lista nunca é enviada, armazenada ou compartilhada.',
      },
      {
        question: 'E se minha lista usa ponto e vírgula em vez de quebras de linha?',
        answer:
          'A ferramenta trata cada linha como um item, então troque os pontos e vírgulas por quebras de linha primeiro e depois cole a lista para eliminar as duplicatas.',
      },
      {
        question: 'Posso remover duplicatas mantendo as linhas em branco?',
        answer:
          'Sim. Deixe "Remover linhas vazias" desmarcado e as linhas em branco serão mantidas na saída junto com os itens sem duplicatas.',
      },
      {
        question: 'A ferramenta funciona no meu celular?',
        answer:
          'Sim. Funciona em qualquer navegador moderno de celular, com as mesmas opções de eliminação de duplicatas e o botão de copiar.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole as duas versões',
        description:
          'Coloque a cópia original em Texto Original e a versão revisada em Texto Modificado.',
      },
      {
        title: 'Ajuste as opções de comparação',
        description:
          'Ative Ignorar espaços ou Ignorar maiúsculas se quiser pular mudanças só de formatação.',
      },
      {
        title: 'Revise as mudanças destacadas',
        description:
          'Olhe o painel Comparação de Linhas com os indicadores + adicionado, - removido e os números das linhas.',
      },
      {
        title: 'Confira o resumo de mudanças',
        description:
          'Leia as contagens de linhas adicionadas, removidas e sem alteração para ter uma ideia rápida de quanto mudou entre as duas versões.',
      },
      {
        title: 'Compare só uma seção específica',
        description:
          'Cole só a seção que interessa nas duas caixas para comparar um único parágrafo ou bloco de configuração sem o resto do documento.',
      },
      {
        title: 'Corrija um diff que parece errado',
        description:
          'Se quase todas as linhas aparecem como alteradas, os dois textos podem usar quebras de linha ou indentação diferentes; ative Ignorar espaços e confira se as duas colagens começam na mesma linha.',
      },
    ],
    examples: [
      {
        title: 'Verificação de revisão de configuração',
        input: 'Original: TTL do cache: 600\nModificado: TTL do cache: 1800',
        output: '- TTL do cache: 600\n+ TTL do cache: 1800',
        explanation:
          'Isola com clareza a linha alterada, junto com os números das linhas antiga e nova.',
      },
      {
        title: 'Revisão de rascunho de artigo',
        input: 'Original: O site é rápido.\nModificado: O site é rápido e seguro.',
        output: '- O site é rápido.\n+ O site é rápido e seguro.',
        explanation: 'Mostra exatamente qual linha mudou entre o rascunho e a versão revisada.',
      },
    ],
    benefits: [
      'Usa alinhamento por Maior Subsequência Comum (LCS) em vez de comparação ingênua por índice',
      'Combina destaque em cores com os símbolos + / - para acessibilidade de quem tem daltonismo',
      'Acompanha os números das linhas original e modificada lado a lado',
      'Mantém rascunhos confidenciais e arquivos de configuração só na memória local do navegador',
    ],
    useCases: [
      'Revisar edições entre duas revisões de um artigo ou contrato',
      'Inspecionar mudanças em trechos de configuração .env, JSON ou YAML',
      'Verificar atualizações de tradução ou revisões de políticas legais',
      'Conferir revisões de rascunhos de alunos ou de equipe rapidamente',
    ],
    faqs: [
      {
        question: 'Como o algoritmo de diff lida com linhas inseridas no meio de um arquivo?',
        answer:
          'Como ele usa um algoritmo de comparação por linha de Maior Subsequência Comum (LCS), inserir linhas desloca os números das linhas seguintes sem marcar o resto do arquivo como alterado.',
      },
      {
        question: 'O que "Ignorar espaços" faz?',
        answer:
          'Ele remove os espaços no início e no fim e junta vários espaços seguidos antes de comparar as linhas, o que ajuda a focar nas edições de conteúdo em vez de ajustes de indentação.',
      },
      {
        question: 'Há um limite de caracteres para comparar textos?',
        answer:
          'A comparação roda direto no seu navegador, sem limites de servidor; documentos típicos de até alguns milhares de linhas comparam quase na hora.',
      },
      {
        question: 'O Comparador de Texto é gratuito?',
        answer:
          'Sim. O Comparador de Texto é totalmente gratuito, sem cadastro, sem limite de comparações e sem precisar de conta.',
      },
      {
        question: 'Qual é a diferença entre linhas adicionadas e removidas?',
        answer:
          'Linhas adicionadas aparecem só no texto modificado e são marcadas com o símbolo +, enquanto linhas removidas aparecem só no texto original e são marcadas com o símbolo -.',
      },
      {
        question: 'Posso comparar dois arquivos em vez de texto colado?',
        answer:
          'Não diretamente. Copie o conteúdo de cada arquivo e cole nas caixas Texto Original e Texto Modificado para compará-los.',
      },
      {
        question: 'O Comparador de Texto funciona com código?',
        answer:
          'Sim. Ele compara qualquer texto baseado em linhas, incluindo código-fonte, então você pode identificar as linhas alteradas entre duas versões de um script ou folha de estilos.',
      },
      {
        question: 'Posso comparar arquivos de configuração JSON ou YAML?',
        answer:
          'Sim. Cole cada versão nas duas caixas e o diff vai destacar as chaves, os valores e as linhas alteradas da sua configuração.',
      },
      {
        question: 'O que "Ignorar maiúsculas" faz?',
        answer:
          'Ele trata letras maiúsculas e minúsculas como iguais durante a comparação, então uma linha que só mudou a capitalização não será marcada como diferente.',
      },
      {
        question: 'Posso comparar textos em idiomas diferentes?',
        answer:
          'Sim. A comparação funciona com qualquer texto, embora linhas em idiomas diferentes apareçam naturalmente como alteradas porque o conteúdo é diferente.',
      },
      {
        question: 'O Comparador de Texto mostra mudanças no nível de caracteres?',
        answer:
          'Não. A comparação funciona linha por linha, então uma palavra alterada marca a linha inteira como alterada; para mais detalhes, compare as duas linhas separadamente.',
      },
      {
        question: 'Posso comparar um documento com sua versão mais antiga?',
        answer:
          'Sim. Cole a versão mais antiga como Texto Original e a versão mais nova como Texto Modificado para ver todas as adições e exclusões.',
      },
      {
        question: 'Como os números das linhas aparecem na comparação?',
        answer:
          'Cada linha mantém seu próprio número do texto original, para você rastrear uma linha alterada até sua posição exata em qualquer uma das versões.',
      },
      {
        question: 'O Comparador de Texto salva ou envia meu texto?',
        answer:
          'Não. A comparação roda localmente no seu navegador, e seus textos nunca são enviados, armazenados ou compartilhados.',
      },
      {
        question: 'Posso comparar contratos legais com o Comparador de Texto?',
        answer:
          'Sim. Cole as duas versões do contrato para identificar cláusulas alteradas, mas sempre peça a um advogado para revisar mudanças legais importantes.',
      },
      {
        question: 'O que acontece se eu colar o mesmo texto nas duas caixas?',
        answer:
          'A comparação vai mostrar zero linhas adicionadas e zero linhas removidas, confirmando que os dois textos são idênticos.',
      },
      {
        question: 'Posso comparar textos com quebras de linha diferentes?',
        answer:
          'Sim. Se as quebras de linha forem diferentes, o diff pode marcar linhas como alteradas; ativar Ignorar espaços geralmente limpa essas diferenças só de formatação.',
      },
      {
        question: 'O Comparador de Texto funciona com documentos grandes?',
        answer:
          'Sim. Documentos de até alguns milhares de linhas comparam quase na hora no navegador, sem nenhum envio ao servidor.',
      },
      {
        question: 'Posso usar o Comparador de Texto para revisão de tradução?',
        answer:
          'Sim. Cole a tradução original e a tradução revisada para revisar cada linha editada lado a lado.',
      },
      {
        question: 'O Comparador de Texto funciona no meu celular?',
        answer:
          'Sim. Funciona em qualquer navegador moderno de celular, com a mesma comparação lado a lado e destaque.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole o texto sem formatação',
        description:
          'Solte na caixa Texto de Entrada um texto com espaços duplos, tabulações soltas ou quebras de linha quebradas.',
      },
      {
        title: 'Escolha como espaços e tabulações são tratados',
        description:
          'Junte sequências de vários espaços em um só, converta tabulações em espaços simples e apare os espaços no início e no fim de cada linha.',
      },
      {
        title: 'Escolha uma opção de quebra de linha',
        description:
          'Mantenha as quebras de parágrafo, remova só as linhas em branco, troque quebras de linha por espaços para rejuntar frases quebradas ou remova todas as quebras para formar uma linha contínua.',
      },
      {
        title: 'Revise a saída limpa',
        description:
          'Confira o resultado no painel de saída e a contagem de caracteres mostrando exatamente quantos caracteres foram removidos na limpeza.',
      },
      {
        title: 'Copie o texto limpo',
        description:
          'Use o botão de copiar para copiar o resultado normalizado e cole no seu documento, formulário ou campo de CMS.',
      },
      {
        title: 'Corrija frases que se juntaram',
        description:
          'Se palavras de linhas separadas se juntarem sem espaço, mude para "Substituir por espaços". Se os parágrafos se fundiram em um bloco só, volte para "Remover linhas em branco".',
      },
    ],
    examples: [
      {
        title: 'Limpando cópia de PDF',
        input: '   Primeira   linha com   espaços extras.\n\n\nSegunda   linha   aqui.   ',
        output: 'Primeira linha com espaços extras.\nSegunda linha aqui.',
        explanation:
          'Junta espaços duplos, apara as margens e remove linhas vazias de espaçamento.',
      },
      {
        title: 'Juntando um endereço em uma linha só',
        input: 'Rua das Flores, 123\nBairro Centro\nSão Paulo - SP',
        output: 'Rua das Flores, 123 Bairro Centro São Paulo - SP',
        explanation: 'Troca quebras de linha por espaços para colar o endereço em um campo de formulário.',
      },
    ],
    benefits: [
      'Corrige quebras de linha quebradas de documentos PDF com um clique',
      'Conta os caracteres exatos removidos durante a limpeza',
      'Mantém os parágrafos e remove só o espaçamento em excesso',
      'Processa tudo localmente no navegador',
    ],
    useCases: [
      'Reparar textos quebrados copiados de PDFs com várias colunas',
      'Remover espaços no fim antes de colar em campos de CMS',
      'Achatar endereços ou trechos com várias linhas em uma só linha',
      'Normalizar anotações indentadas com tabulação em texto limpo com espaçamento simples',
    ],
    faqs: [
      {
        question: 'Qual opção de quebra de linha devo escolher para texto copiado de um PDF?',
        answer:
          'Escolha "Substituir por espaços" quando quebras de linha forçadas quebraram frases no meio, ou "Remover linhas em branco" se cada linha já for um parágrafo ou item de lista distinto.',
      },
      {
        question: 'Juntar espaços afeta os espaços simples entre palavras?',
        answer:
          'Não. Só sequências de dois ou mais espaços seguidos são juntadas em um único espaço.',
      },
      {
        question: 'Isso também remove tabulações?',
        answer:
          'Sim, quando "Converter tabulações em espaços" está ativado, caracteres de tabulação viram espaços simples e se fundem com o espaço em branco ao lado.',
      },
      {
        question: 'O Removedor de Espaços em Branco é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, sem conta e sem limites de quantas vezes você limpa textos.',
      },
      {
        question: 'Meu texto sai do navegador ao usar o Removedor de Espaços em Branco?',
        answer:
          'Não. Toda a limpeza acontece localmente no seu navegador, então seu texto nunca é enviado para um servidor.',
      },
      {
        question: 'O que a opção "Remover linhas em branco" faz?',
        answer:
          'Ela apaga as linhas vazias do seu texto mantendo todas as linhas com conteúdo, para que parágrafos e itens de lista fiquem em ordem.',
      },
      {
        question: 'Posso manter as quebras de parágrafo e remover os espaços extras?',
        answer:
          'Sim. Escolha a opção que mantém as quebras de linha e só junta os espaços extras, para que seus parágrafos continuem separados enquanto o espaçamento dentro deles é corrigido.',
      },
      {
        question: 'Qual é a diferença entre "Substituir por espaços" e remover todas as quebras de linha?',
        answer:
          '"Substituir por espaços" junta as linhas com um único espaço para que frases quebradas leiam corretamente, enquanto remover todas as quebras junta as linhas direto, sem espaço entre elas.',
      },
      {
        question: 'O Removedor de Espaços em Branco apaga os espaços no fim das linhas?',
        answer:
          'Sim. Espaços e tabulações no fim de cada linha são aparados, o que é útil antes de colar texto em formulários ou campos de código.',
      },
      {
        question: 'Ele remove os espaços no início das linhas e a indentação?',
        answer:
          'Sim. O espaço em branco no início de cada linha é aparado, então textos colados indentados ou desalinhados ficam alinhados.',
      },
      {
        question: 'Posso limpar texto copiado de uma planilha com o Removedor de Espaços em Branco?',
        answer:
          'Sim. Tabulações entre células da planilha são convertidas em espaços simples, e linhas em branco extras de intervalos copiados são removidas.',
      },
      {
        question: 'Como transformo um texto com várias linhas em uma só linha?',
        answer:
          'Cole seu texto, escolha a opção que troca quebras de linha por espaços ou remove todas as quebras e copie a saída resultante em uma linha só.',
      },
      {
        question: 'O Removedor de Espaços em Branco muda pontuação, letras ou números?',
        answer:
          'Não. Ele só muda caracteres de espaço em branco, como espaços, tabulações e quebras de linha; suas palavras, pontuação e números ficam exatamente como estavam.',
      },
      {
        question: 'Posso usar o Removedor de Espaços em Branco para limpar texto antes de colar em um formulário?',
        answer:
          'Sim. Ele é ideal para remover espaços no fim e quebras de linha soltas de endereços, nomes ou descrições antes de irem para um formulário web ou campo de CMS.',
      },
      {
        question: 'O que significa a contagem de caracteres mostrada depois da limpeza?',
        answer:
          'Ela mostra quantos caracteres foram removidos durante a limpeza, para você ver exatamente quanto espaço em branco extra a ferramenta tirou do seu texto.',
      },
      {
        question: 'O Removedor de Espaços em Branco funciona com documentos muito longos?',
        answer:
          'Sim. Como ele roda localmente no seu navegador, você pode colar documentos longos, embora blocos de texto extremamente grandes possam levar um momento para processar.',
      },
      {
        question: 'Posso desfazer uma limpeza se eu escolher a opção errada?',
        answer:
          'Seu texto original continua no campo de entrada, então basta escolher outra opção e a saída se atualiza sem você perder o texto colado.',
      },
      {
        question: 'O Removedor de Espaços em Branco remove espaços dentro das palavras?',
        answer:
          'Não. Espaços dentro das palavras são espaços simples, então ficam intocados; só sequências de dois ou mais espaços são juntadas.',
      },
      {
        question: 'Que tipos de espaço em branco a ferramenta limpa?',
        answer:
          'Ela limpa espaços comuns, caracteres de tabulação, espaços no início e no fim das linhas, linhas em branco e quebras de linha indesejadas.',
      },
      {
        question: 'Posso usar o Removedor de Espaços em Branco em código?',
        answer:
          'Ele funciona para prosa, mas tome cuidado com código sensível à indentação, como Python, porque aparar os espaços no início pode mudar o comportamento do código.',
      },
    ],
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
      primaryKeyword: 'ordenar linhas alfabeticamente',
      secondaryKeywords: ['alfabetizar lista', 'ordenador de linhas de texto', 'ordenação natural online', 'ordenar linhas de a a z'],
      longTailKeywords: ['ordenar lista alfabeticamente com números em ordem natural', 'ordenar linhas por tamanho do menor para o maior', 'alfabetizar e remover linhas duplicadas', 'inverter ordem das linhas online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Organize listas, bibliografias, SKUs de estoque ou imports de código em ordem alfabética, numérica com ordenação natural, por tamanho de caracteres ou em ordem inversa.',
    instructions: [
      {
        title: 'Digite um item por linha',
        description:
          'Cole sua lista no campo Linhas de Entrada, com cada item na sua própria linha.',
      },
      {
        title: 'Escolha uma ordem',
        description:
          'Escolha A → Z, Z → A, Natural (1, 2, 10), Menor/Maior Primeiro, Ordem Inversa ou Embaralhar.',
      },
      {
        title: 'Defina a sensibilidade a maiúsculas',
        description:
          'Ative a comparação sensível a maiúsculas se letras maiúsculas e minúsculas devem ordenar separadamente; senão, "maçã" e "Maçã" são tratadas como iguais.',
      },
      {
        title: 'Ative as opções de limpeza',
        description:
          'Se quiser, remova linhas em branco ou elimine duplicatas na mesma passada para que sua lista ordenada saia limpa.',
      },
      {
        title: 'Revise e copie a lista ordenada',
        description:
          'Confira a saída ordenada e copie com um clique para colar no seu documento, planilha ou arquivo de código.',
      },
      {
        title: 'Corrija itens numerados fora de ordem',
        description:
          'Se "Item 10" aparecer antes de "Item 2", mude de A → Z para a ordenação Natural, que compara os números dentro de cada linha numericamente.',
      },
    ],
    examples: [
      {
        title: 'Ordenação numérica natural vs. ordenação de texto comum',
        input: 'Item 10\nItem 2\nItem 1',
        output: 'Item 1\nItem 2\nItem 10',
        explanation:
          'O modo natural compara os números embutidos numericamente, então Item 2 vem antes de Item 10.',
      },
      {
        title: 'Ordenação de A a Z com duplicatas removidas',
        input: 'Banana\nMaçã\nBanana\nUva',
        output: 'Banana\nMaçã\nUva',
        explanation: 'Ordena a lista em ordem alfabética e remove as entradas repetidas na mesma passada.',
      },
    ],
    benefits: [
      'Inclui comparador com reconhecimento de localidade e ordenação numérica natural',
      'Combina ordenação com remoção de linhas em branco e eliminação de duplicatas',
      'Suporta ordenação por tamanho para tabelas de interface e conferência de texto',
      'Cópia instantânea do resultado ordenado com um clique',
    ],
    useCases: [
      'Alfabetizar bibliografias, glossários e listas de referência',
      'Ordenar arquivos numerados ou casos de teste naturalmente (Item 1, 2, 10)',
      'Ordenar propriedades CSS, imports ou chaves de ambiente',
      'Sortear entradas de sorteios ou perguntas de quiz com Embaralhar',
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre A → Z e ordenação Natural?',
        answer:
          'A ordenação alfabética comum coloca "Item 10" antes de "Item 2" porque "1" vem antes de "2". A ordenação natural lê os números dentro das strings, então "Item 2" vem antes de "Item 10".',
      },
      {
        question: 'Posso remover entradas duplicadas enquanto ordeno?',
        answer:
          'Sim. Marque a opção "Remover duplicatas" para eliminar duplicatas e ordenar sua lista ao mesmo tempo.',
      },
      {
        question: 'Qual é a diferença entre Ordem Inversa e Z → A?',
        answer:
          'Z → A ordena em ordem alfabética decrescente, enquanto Ordem Inversa vira sua sequência de linhas de baixo para cima sem alfabetizar.',
      },
      {
        question: 'A ferramenta Ordenar Linhas é gratuita?',
        answer:
          'Sim. É totalmente gratuita, sem cadastro, sem conta e sem limite de quantas listas você ordena.',
      },
      {
        question: 'Minha lista sai do navegador quando eu ordeno?',
        answer:
          'Não. A ordenação acontece localmente no seu navegador, então sua lista nunca é enviada para um servidor.',
      },
      {
        question: 'O que é ordenação natural e quando devo usá-la?',
        answer:
          'A ordenação natural compara os números dentro do texto numericamente, então use-a para itens numerados como "Capítulo 2" e "Capítulo 10" para mantê-los na ordem numérica real.',
      },
      {
        question: 'Posso ordenar uma lista de Z a A?',
        answer:
          'Sim. Escolha a opção Z → A para ordenar suas linhas em ordem alfabética inversa.',
      },
      {
        question: 'Posso ordenar linhas por tamanho em vez de alfabeticamente?',
        answer:
          'Sim. Escolha Menor Primeiro ou Maior Primeiro para ordenar as linhas por tamanho de caracteres, útil para conferir tabelas de interface ou alinhar textos.',
      },
      {
        question: 'O que a opção Embaralhar faz na ferramenta Ordenar Linhas?',
        answer:
          'Embaralhar randomiza a ordem das suas linhas, o que é útil para entradas de sorteios, perguntas de quiz ou qualquer lista que você queira em ordem aleatória.',
      },
      {
        question: 'A ferramenta Ordenar Linhas remove linhas em branco?',
        answer:
          'Sim, se você ativar a opção de linhas em branco. Caso contrário, as linhas vazias são mantidas na saída.',
      },
      {
        question: 'Posso ordenar com sensibilidade a maiúsculas na ferramenta Ordenar Linhas?',
        answer:
          'Sim. Ative a comparação sensível a maiúsculas para ordenar letras maiúsculas e minúsculas separadamente; com ela desligada, "maçã" e "Maçã" são tratadas como iguais.',
      },
      {
        question: 'A ferramenta Ordenar Linhas funciona com números e datas?',
        answer:
          'Sim. A ordenação natural ordena os números embutidos corretamente, e datas ordenam certo quando escritas no formato AAAA-MM-DD; outros formatos de data ordenam como texto comum.',
      },
      {
        question: 'Posso ordenar colunas dentro de uma linha, como valores de CSV?',
        answer:
          'Não. A ferramenta ordena linhas inteiras, então cada linha se move como uma unidade; ela não reordena valores separados por vírgula dentro de uma mesma linha.',
      },
      {
        question: 'O que acontece com as linhas duplicadas ao ordenar?',
        answer:
          'As duplicatas ficam na lista, a menos que você ative "Remover duplicatas", que mantém só a primeira ocorrência de cada linha antes de ordenar.',
      },
      {
        question: 'Posso inverter uma lista sem ordená-la alfabeticamente?',
        answer:
          'Sim. Use Ordem Inversa para virar sua lista de baixo para cima mantendo o texto dentro de cada linha sem alteração.',
      },
      {
        question: 'A ferramenta Ordenar Linhas lida com letras acentuadas e outros idiomas?',
        answer:
          'Sim. Ela usa um comparador com reconhecimento de localidade, então caracteres acentuados e letras de outros idiomas ordenam em uma ordem sensata, e não por códigos de caracteres brutos.',
      },
      {
        question: 'Posso ordenar uma lista numerada como "1. Maçã, 2. Banana, 10. Cereja"?',
        answer:
          'Sim. A ordenação natural lê os números no início de cada linha, então "2. Banana" vem corretamente antes de "10. Cereja".',
      },
      {
        question: 'Qual o tamanho de lista que a ferramenta Ordenar Linhas suporta?',
        answer:
          'Ela roda localmente no seu navegador e lida com listas longas com facilidade, embora colagens extremamente grandes, com dezenas de milhares de linhas, possam levar um momento.',
      },
      {
        question: 'A ordenação muda o texto dentro de cada linha?',
        answer:
          'Não. A ordenação só muda a ordem das linhas; as palavras, os números e a pontuação dentro de cada linha ficam exatamente iguais.',
      },
      {
        question: 'Posso desfazer uma ordenação se eu escolher a ordem errada?',
        answer:
          'Sua lista original continua no campo de entrada, então você pode escolher outra ordem e a saída se atualiza sem perder a lista colada.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite os termos de Localizar e Substituir',
        description:
          'Digite o texto ou padrão que você quer encontrar em Localizar e a string de destino em Substituir por.',
      },
      {
        title: 'Defina as opções de correspondência',
        description:
          'Ative Diferenciar maiúsculas, Só palavra inteira ou Usar Expressão Regular (RegExp) para correspondência por padrão.',
      },
      {
        title: 'Cole o texto a editar',
        description:
          'Cole o documento inteiro, trecho de CSV ou bloco de código no campo de texto de origem para cobrir todas as ocorrências em uma passada.',
      },
      {
        title: 'Confira a contagem ao vivo de ocorrências',
        description:
          'Veja a contagem ao vivo de ocorrências substituídas para confirmar se a correspondência atinge exatamente os pontos esperados antes de copiar.',
      },
      {
        title: 'Revise a saída e copie',
        description:
          'Revise o texto atualizado em busca de mudanças não intencionais e copie com um clique para colar de volta no seu documento ou editor.',
      },
      {
        title: 'Corrija uma correspondência que não substitui nada',
        description:
          'Se a contagem for zero, verifique a sensibilidade a maiúsculas, desative Só palavra inteira ou escape caracteres especiais como . e ( no modo RegExp; padrões inválidos mostram uma mensagem de erro de sintaxe.',
      },
    ],
    examples: [
      {
        title: 'Reformatação com grupo de captura regex',
        input: 'Localizar: Pedido #(\\d+)  |  Substituir por: Ref-$1\nOrigem: Pedido #1042 enviado.',
        output: 'Ref-1042 enviado.',
        explanation:
          'Usa um grupo de captura RegExp ($1) para preservar o ID numérico do pedido ao mudar o prefixo.',
      },
      {
        title: 'Troca de nome de marca em massa',
        input: 'Localizar: Acme  |  Substituir por: NovaCorp\nOrigem: A Acme lança a Acme Cloud.',
        output: 'A NovaCorp lança a NovaCorp Cloud.',
        explanation: 'Substitui todas as ocorrências do nome antigo em uma só passada.',
      },
    ],
    benefits: [
      'Mostra a contagem ao vivo de ocorrências e feedback claro de erro de sintaxe para padrões RegExp inválidos',
      'A opção de palavra inteira evita correspondências parciais acidentais dentro de palavras maiores',
      'Suporta grupos de captura RegExp ($1, $2) para reescritas estruturadas de texto',
      'Roda localmente, então trechos privados e credenciais ficam no seu dispositivo',
    ],
    useCases: [
      'Trocar nomes de marcas, URLs ou datas em documentos longos',
      'Reformatar IDs ou datas com grupos de captura de expressões regulares',
      'Atualizar delimitadores ou variáveis de espaço reservado em modelos',
      'Limpar erros de digitação repetidos antes de publicar',
    ],
    faqs: [
      {
        question: 'Posso usar grupos de captura como $1 no modo RegExp?',
        answer:
          'Sim. Quando "Usar Expressão Regular (RegExp)" está marcado, grupos entre parênteses em Localizar podem ser referenciados como $1, $2 e assim por diante no campo Substituir por.',
      },
      {
        question: 'Por que "Só palavra inteira" fica desativado no modo RegExp?',
        answer:
          'No modo RegExp, você tem controle direto sobre os limites de palavra usando \\b dentro do seu padrão.',
      },
      {
        question: 'Deixar "Substituir por" vazio apaga o texto encontrado?',
        answer:
          'Sim. Deixar o campo Substituir em branco remove todas as ocorrências encontradas sem problema.',
      },
      {
        question: 'A ferramenta Localizar e Substituir é gratuita?',
        answer:
          'Sim. É totalmente gratuita, sem cadastro, sem conta e sem limite de quantas substituições você faz.',
      },
      {
        question: 'Meu texto sai do navegador ao usar Localizar e Substituir?',
        answer:
          'Não. Tudo roda localmente no seu navegador, então trechos privados, documentos e código ficam no seu dispositivo.',
      },
      {
        question: 'O que a contagem ao vivo de ocorrências mostra?',
        answer:
          'Ela mostra quantas ocorrências do seu termo de Localizar foram substituídas, para você confirmar se a substituição atingiu exatamente os pontos esperados.',
      },
      {
        question: 'Posso substituir só palavras inteiras, e não partes de palavras maiores?',
        answer:
          'Sim. Ative "Só palavra inteira" para que "gato" seja substituído, mas "gato" dentro de "gatos" não — no modo RegExp, use os limites de palavra \\b.',
      },
      {
        question: 'Localizar e Substituir diferencia maiúsculas de minúsculas?',
        answer:
          'Só se você ativar a opção Diferenciar maiúsculas. Com ela desligada, "Maçã" e "maçã" são tratadas como a mesma correspondência.',
      },
      {
        question: 'Posso substituir texto em várias linhas de uma vez?',
        answer:
          'Sim. A ferramenta processa todo o seu texto colado em uma passada, então as correspondências em todas as linhas são substituídas juntas.',
      },
      {
        question: 'O que acontece se minha expressão regular for inválida?',
        answer:
          'A ferramenta mostra uma mensagem clara de erro de sintaxe em vez de produzir uma saída ruim, para você corrigir o padrão antes de copiar qualquer coisa.',
      },
      {
        question: 'Posso encontrar caracteres especiais como quebras de linha ou tabulações em Localizar e Substituir?',
        answer:
          'Sim, no modo RegExp você pode usar escapes como \\n para quebra de linha e \\t para tabulação dentro do seu padrão.',
      },
      {
        question: 'Posso trocar duas palavras de lugar usando grupos de captura?',
        answer:
          'Sim. Por exemplo, localize (\\w+) (\\w+) e substitua por $2 $1 para virar "João Silva" em "Silva João".',
      },
      {
        question: 'Posso inserir todo o texto encontrado na substituição?',
        answer:
          'Sim. No modo RegExp, $& no campo Substituir por insere todo o texto encontrado, útil para envolver ocorrências em aspas ou tags.',
      },
      {
        question: 'Posso substituir URLs ou datas em um documento inteiro?',
        answer:
          'Sim. Cole o documento inteiro e use uma passada de Localizar e Substituir para trocar todas as URLs, nomes de marca ou datas antigas de uma vez.',
      },
      {
        question: 'Localizar e Substituir muda só a primeira ocorrência ou todas?',
        answer:
          'Ele substitui todas as ocorrências no texto colado de uma vez; para mudar só uma ocorrência, edite aquele ponto manualmente depois de copiar o resultado.',
      },
      {
        question: 'Localizar e Substituir funciona com código?',
        answer:
          'Sim. Funciona com blocos de código, modelos e trechos de configuração, então você pode renomear variáveis, atualizar espaços reservados ou mudar delimitadores em massa.',
      },
      {
        question: 'Posso corrigir um erro de digitação repetido com Localizar e Substituir?',
        answer:
          'Sim. Digite a palavra com erro em Localizar e a grafia correta em Substituir por, depois confira a contagem de ocorrências para ver quantos erros foram corrigidos.',
      },
      {
        question: 'Qual sabor de expressão regular a ferramenta usa?',
        answer:
          'Ela usa RegExp de JavaScript, a mesma sintaxe de padrões usada nos navegadores, com grupos de captura, classes de caracteres e quantificadores.',
      },
      {
        question: 'Posso desfazer uma substituição se eu errar?',
        answer:
          'Seu texto original continua no campo de entrada, então você pode mudar os termos de Localizar ou Substituir por e a saída se atualiza sem perder o texto de origem.',
      },
      {
        question: 'Há um limite de quanto texto posso processar com Localizar e Substituir?',
        answer:
          'Não há um limite definido. Ele roda localmente no seu navegador e lida com documentos longos, embora colagens extremamente grandes possam levar um momento para processar.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha um modo de inversão',
        description:
          'Selecione Inverter Caracteres, Inverter Ordem das Palavras, Inverter Cada Palavra ou Inverter Ordem das Linhas.',
      },
      {
        title: 'Digite seu texto',
        description:
          'Digite ou cole o texto em Texto Original para ver a saída invertida na hora.',
      },
      {
        title: 'Confira a prévia ao vivo',
        description:
          'A saída se atualiza enquanto você digita, então você vê na hora como o modo escolhido transforma seu texto.',
      },
      {
        title: 'Compare os modos lado a lado',
        description:
          'Alterne entre os modos com a mesma entrada para comparar inversão de caracteres, inversão de ordem de palavras e inversão de linhas antes de decidir.',
      },
      {
        title: 'Copie a saída',
        description:
          'Use o botão Copiar para copiar o texto transformado e cole no seu documento, quebra-cabeça ou mensagem.',
      },
      {
        title: 'Corrija linhas que inverteram do jeito errado',
        description:
          'Se as palavras dentro de cada linha viraram quando você só queria virar a lista, mude para Inverter Ordem das Linhas, que move as linhas sem tocar no texto dentro delas.',
      },
    ],
    examples: [
      {
        title: 'Comparando os modos de inversão',
        input: 'Olá Mundo',
        output: 'Caracteres: odnuM álO · Ordem das Palavras: Mundo Olá · Cada Palavra: álO odnuM',
        explanation:
          'Mostra como cada modo altera a posição de caracteres e de palavras.',
      },
      {
        title: 'Invertendo uma lista de nomes',
        input: 'Ana Souza\nBruno Lima',
        output: 'Bruno Lima\nAna Souza',
        explanation: 'O modo Inverter Ordem das Linhas vira a lista sem mudar o texto de cada linha.',
      },
    ],
    benefits: [
      'Divisão de caracteres segura para Unicode preserva emojis e pares substitutos',
      'Quatro modos distintos cobrem inversão de strings e de listas',
      'Prévia ao vivo sem cliques enquanto você digita',
      'Execução leve no navegador',
    ],
    useCases: [
      'Inverter registros ou listas cronológicas do mais antigo para o mais novo',
      'Testar strings palíndromas e casos extremos de caracteres da direita para a esquerda',
      'Inverter listas de nomes "Nome Sobrenome" ou sequências de palavras',
      'Criar quebra-cabeças, cifras e jogos de palavras',
    ],
    faqs: [
      {
        question: 'Inverter Caracteres quebra emojis ou caracteres Unicode acentuados?',
        answer:
          'A ferramenta usa iteração por ponto de código com Array.from() em vez de indexação UTF-16 ingênua, então caracteres multibyte e emojis comuns ficam intactos.',
      },
      {
        question: 'Como viro uma lista de linhas de cabeça para baixo sem inverter as palavras?',
        answer:
          'Selecione "Inverter Ordem das Linhas" para mover a linha de baixo para o topo mantendo o texto dentro de cada linha sem alteração.',
      },
      {
        question: 'Qual é a diferença entre "Inverter Ordem das Palavras" e "Inverter Cada Palavra"?',
        answer:
          '"Inverter Ordem das Palavras" transforma "um dois três" em "três dois um", enquanto "Inverter Cada Palavra" mantém as posições das palavras e vira as letras para "mu siod sêrt".',
      },
      {
        question: 'O Inversor de Texto é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, sem conta e sem limite de quanto texto você inverte.',
      },
      {
        question: 'Meu texto sai do navegador ao usar o Inversor de Texto?',
        answer:
          'Não. A inversão acontece localmente no seu navegador, então seu texto nunca é enviado nem armazenado em lugar nenhum.',
      },
      {
        question: 'Quais são os quatro modos de inversão do Inversor de Texto?',
        answer:
          'Inverter Caracteres vira cada caractere, Inverter Ordem das Palavras vira a ordem das palavras, Inverter Cada Palavra espelha as letras dentro de cada palavra e Inverter Ordem das Linhas inverte a sequência de linhas.',
      },
      {
        question: 'Posso inverter um parágrafo inteiro com o Inversor de Texto?',
        answer:
          'Sim. Cole o parágrafo e escolha Inverter Caracteres para virar o bloco inteiro, ou Inverter Ordem das Linhas para virar textos com várias linhas linha por linha.',
      },
      {
        question: 'Posso usar o Inversor de Texto para criar um efeito de espelho?',
        answer:
          'Sim. Inverter Caracteres produz um texto espelhado que se lê ao contrário, ótimo para quebra-cabeças, cifras e mensagens divertidas.',
      },
      {
        question: 'O Inversor de Texto funciona com letras acentuadas?',
        answer:
          'Sim. Ele lida com caracteres Unicode por ponto de código, então letras acentuadas como é e ü são invertidas corretamente sem se desmanchar.',
      },
      {
        question: 'O Inversor de Texto funciona com textos em outros idiomas?',
        answer:
          'Sim. Funciona com qualquer texto Unicode, incluindo escritas não latinas, porque a inversão é feita caractere por caractere, e não por regras de idioma.',
      },
      {
        question: 'O que é um palíndromo e o Inversor de Texto ajuda a conferir um?',
        answer:
          'Um palíndromo se lê igual de frente para trás e de trás para frente, como "arara". Inverta seu texto e compare com o original para conferir.',
      },
      {
        question: 'Posso usar o Inversor de Texto para quebra-cabeças e jogos de palavras?',
        answer:
          'Sim. Palavras e frases invertidas são um formato clássico de quebra-cabeça, e a prévia ao vivo facilita criar pistas e respostas rápido.',
      },
      {
        question: 'Inverter texto adiciona ou remove espaços?',
        answer:
          'Inverter Caracteres inverte tudo, incluindo espaços, enquanto os modos baseados em palavras mantêm espaços simples entre as palavras para a saída continuar legível.',
      },
      {
        question: 'Posso inverter um bloco de texto muito longo?',
        answer:
          'Sim. Ele roda localmente no seu navegador e lida com colagens longas, embora blocos extremamente grandes possam levar um momento para atualizar na prévia ao vivo.',
      },
      {
        question: 'O Inversor de Texto salva ou armazena meu texto?',
        answer:
          'Não. Nada é salvo nem enviado para um servidor; seu texto existe só na aba do seu navegador enquanto você usa a ferramenta.',
      },
      {
        question: 'Como inverto nomes "Nome Sobrenome" para "Sobrenome Nome"?',
        answer:
          'Use Inverter Ordem das Palavras, que transforma "João Silva" em "Silva João" mantendo cada nome escrito corretamente.',
      },
      {
        question: 'O Inversor de Texto pode inverter números?',
        answer:
          'Sim. No modo Inverter Caracteres, "12345" vira "54321", útil para testar strings numéricas e códigos.',
      },
      {
        question: 'O que acontece com as quebras de linha ao inverter caracteres?',
        answer:
          'As quebras de linha são invertidas junto com o resto do texto, então as linhas também acabam em ordem oposta; use Inverter Ordem das Linhas se quiser as linhas viradas, mas o texto dentro delas intocado.',
      },
      {
        question: 'Posso desfazer uma inversão?',
        answer:
          'Sim. Seu texto original continua no campo de entrada, e inverter a saída uma segunda vez com o mesmo modo restaura o texto original.',
      },
      {
        question: 'Texto invertido é legível?',
        answer:
          'Não, texto invertido se lê ao contrário por definição. Cole-o de volta na ferramenta e inverta de novo para restaurar o texto original.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha a unidade e a quantidade',
        description:
          'Escolha Parágrafos, Frases ou Palavras e digite a quantidade desejada.',
      },
      {
        title: 'Personalize a formatação',
        description:
          'Escolha se começa com a frase clássica "Lorem ipsum dolor sit amet..." e se envolve os parágrafos em tags HTML <p>.',
      },
      {
        title: 'Gere o texto de preenchimento',
        description:
          'O texto é gerado na hora no seu navegador, sem espera e sem chamadas de rede.',
      },
      {
        title: 'Confira a contagem de palavras e caracteres',
        description:
          'Use o contador ao vivo de palavras e caracteres para confirmar se o texto gerado cabe no seu layout antes de colar no design.',
      },
      {
        title: 'Gere de novo ou copie',
        description:
          'Clique em Gerar de novo para uma variação nova de frases ou Copiar texto de preenchimento para colar no seu design.',
      },
      {
        title: 'Ajuste o tamanho do texto ao layout',
        description:
          'Se um cartão estourar ou parecer vazio, mude para a unidade Palavras e gere uma contagem exata de palavras que caiba no espaço, depois gere de novo até o ajuste ficar bom.',
      },
    ],
    examples: [
      {
        title: 'Trecho de mockup HTML',
        input: 'Unidade: Parágrafos · Quantidade: 1 · Envolver em tags <p>: Marcado',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation:
          'Pronto para colar direto em modelos HTML ou visualizações de código de CMS.',
      },
      {
        title: 'Gerar exatamente 100 palavras',
        input: 'Unidade: Palavras · Quantidade: 100',
        output: '100 palavras de texto de preenchimento geradas',
        explanation: 'Gera uma contagem exata de palavras para caber em um cartão ou layout.',
      },
    ],
    benefits: [
      'Gera contagens exatas de palavras, frases ou parágrafos quando você quiser',
      'O envolvimento opcional em tags <p> economiza tempo em protótipos de front-end',
      'O contador ao vivo de palavras e caracteres verifica o ajuste do layout antes de colar',
      'Regeneração instantânea sem chamadas de rede externas',
    ],
    useCases: [
      'Testar alturas de cartões e quebra de linha em layouts responsivos',
      'Visualizar combinações de fontes, alturas de linha e larguras de medida',
      'Preencher modelos de wireframe e mocks de páginas editoriais',
      'Testar comportamento de truncamento e estouro em componentes CSS',
    ],
    faqs: [
      {
        question: 'Posso gerar um número exato de palavras em vez de parágrafos?',
        answer:
          'Sim. Mude o seletor de unidade para "Palavras" e digite qualquer número até 500 palavras.',
      },
      {
        question: 'Por que usar Lorem Ipsum em vez de repetir uma frase?',
        answer:
          'O texto de preenchimento em latim clássico se aproxima da distribuição natural de tamanho de palavras e do ritmo de letras do inglês sem distrair as partes interessadas com texto legível.',
      },
      {
        question: 'A opção de tag <p> funciona com os modos Frases e Palavras?',
        answer:
          'Sim. No modo Parágrafos, cada parágrafo recebe seu próprio envoltório <p>...</p>, enquanto Frases e Palavras envolvem o bloco gerado em um único elemento <p>.',
      },
      {
        question: 'O Gerador de Lorem Ipsum é gratuito?',
        answer:
          'Sim. É totalmente gratuito, sem cadastro, sem conta e sem limite de quanto texto de preenchimento você gera.',
      },
      {
        question: 'Preciso de conta ou conexão com a internet para gerar Lorem Ipsum?',
        answer:
          'Não. O gerador roda todo no seu navegador, sem cadastro e sem chamadas de rede, então funciona na hora sempre que a página carrega.',
      },
      {
        question: 'O que é Lorem Ipsum?',
        answer:
          'Lorem Ipsum é um texto de preenchimento embaralhado, parecido com latim, que designers usam desde os tempos da tipografia impressa para preencher layouts antes do texto real ficar pronto.',
      },
      {
        question: 'Posso gerar uma única frase de Lorem Ipsum?',
        answer:
          'Sim. Escolha a unidade Frases, digite 1, e o gerador produz uma frase de preenchimento.',
      },
      {
        question: 'Posso começar meu texto com a frase clássica "Lorem ipsum dolor sit amet..."?',
        answer:
          'Sim. Ative a opção de abertura clássica e seu texto gerado começa com a conhecida frase "Lorem ipsum dolor sit amet...".',
      },
      {
        question: 'Posso colar o texto gerado direto em HTML?',
        answer:
          'Sim. Ative a opção de tag <p> e a saída sai envolvida em tags de parágrafo HTML, pronta para colar em modelos ou na visualização de código de um CMS.',
      },
      {
        question: 'Posso gerar exatamente 100 palavras de Lorem Ipsum?',
        answer:
          'Sim. Selecione a unidade Palavras, digite 100, e o gerador produz exatamente 100 palavras de texto de preenchimento.',
      },
      {
        question: 'O texto Lorem Ipsum gerado é sempre o mesmo?',
        answer:
          'Não. Clique em Gerar de novo para produzir uma variação nova com estruturas de frase diferentes, para que blocos repetidos não pareçam idênticos.',
      },
      {
        question: 'Lorem Ipsum é latim de verdade?',
        answer:
          'Não. É um pseudo-latim embaralhado feito de palavras parecidas com latim; parece uma língua de verdade, mas não tem significado real.',
      },
      {
        question: 'Posso usar Lorem Ipsum em um site publicado?',
        answer:
          'Ele é um texto de preenchimento temporário, então troque por conteúdo real antes de publicar, senão os visitantes vão ver texto fictício.',
      },
      {
        question: 'Para que serve o Lorem Ipsum?',
        answer:
          'Ele preenche wireframes, mockups e protótipos para que designers testem tipografia, espaçamento e layout sem esperar o texto final.',
      },
      {
        question: 'Posso controlar o tamanho de frases individuais?',
        answer:
          'Não. Você controla a contagem total em parágrafos, frases ou palavras, enquanto o gerador varia o tamanho das frases naturalmente; gere de novo se o ritmo não combinar com seu layout.',
      },
      {
        question: 'O Gerador de Lorem Ipsum também serve para design impresso?',
        answer:
          'Sim. Copie o texto gerado para ferramentas de impressão, apresentações ou softwares de diagramação para ver como o texto real vai fluir no design.',
      },
      {
        question: 'Como testo truncamento de texto com Lorem Ipsum?',
        answer:
          'Gere uma contagem exata de palavras que caiba no seu espaço, cole no componente e observe se o texto trunca ou estoura em diferentes tamanhos de tela.',
      },
      {
        question: 'Posso gerar Lorem Ipsum em outro idioma?',
        answer:
          'Não. A ferramenta gera só o texto de preenchimento clássico parecido com latim; para texto legível em outro idioma, escreva ou traduza texto real.',
      },
      {
        question: 'O Gerador de Lorem Ipsum salva meu texto gerado?',
        answer:
          'Não. Tudo roda localmente no seu navegador e nada é armazenado nem enviado para um servidor.',
      },
      {
        question: 'Por que o texto de preenchimento ajuda os clientes a focar no design?',
        answer:
          'Texto de rascunho legível puxa a atenção para as palavras em si, enquanto o Lorem Ipsum neutro mantém os revisores focados em layout, tipografia e espaçamento.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole seu artigo ou trecho',
        description:
          'Digite pelo menos uma frase completa no editor ou clique em Carregar exemplo para testar com um texto de exemplo.',
      },
      {
        title: 'Confira os quatro cartões de nota',
        description:
          'Revise a Facilidade de Leitura Flesch (0–100, quanto maior, mais fácil) e as estimativas de nível escolar Flesch-Kincaid, Gunning Fog e SMOG lado a lado.',
      },
      {
        title: 'Leia o detalhamento de frases e sílabas',
        description:
          'Confira a média de palavras por frase, sílabas por palavra e a contagem de palavras longas ou complexas por trás de cada nota.',
      },
      {
        title: 'Encontre as palavras complexas',
        description:
          'Olhe a lista de palavras com 3 ou mais sílabas que a ferramenta marca e anote quais você pode trocar por termos simples do dia a dia.',
      },
      {
        title: 'Encurte frases longas e confira de novo',
        description:
          'Divida frases densas com várias orações, cole o texto revisado de volta e veja as notas se atualizarem na hora.',
      },
      {
        title: 'Corrija resultados estranhos',
        description:
          'Se uma nota parecer errada, confira se faltam pontos finais, abreviações ou fragmentos de lista, já que as fórmulas contam frases e sílabas a partir da pontuação.',
      },
    ],
    examples: [
      {
        title: 'Guia em linguagem simples',
        input: 'Frases curtas deixam as instruções claras. Use palavras simples ao explicar os passos.',
        output: 'Facilidade Flesch ~78 (Razoavelmente Fácil) · Série ~5,2',
        explanation:
          'Frases com menos palavras em média e menos palavras polissilábicas geram maior facilidade de leitura.',
      },
      {
        title: 'Artigo denso e técnico',
        input: 'A implementação de metodologias interdisciplinares requer considerações epistemológicas substanciais e articulações conceituais complexas.',
        output: 'Facilidade Flesch ~30 (Difícil) · Série ~14',
        explanation: 'Frases longas e muitas palavras com várias sílabas derrubam a facilidade de leitura.',
      },
    ],
    benefits: [
      'Calcula quatro índices de legibilidade muito usados ao mesmo tempo',
      'Lista exemplos de palavras com 3 ou mais sílabas encontradas no seu trecho',
      'Mostra a média exata de palavras por frase e sílabas por palavra',
      'Roda totalmente offline na memória do navegador para rascunhos não publicados',
    ],
    useCases: [
      'Editar documentação, textos de interface e artigos de central de ajuda para mais clareza',
      'Conferir materiais educativos em relação ao nível escolar dos alunos',
      'Simplificar comunicações jurídicas, de saúde ou financeiras para clientes',
      'Melhorar a leitura rápida de posts de blog e páginas de destino',
    ],
    faqs: [
      {
        question: 'Qual é uma boa nota Flesch Reading Ease para artigos da web?',
        answer:
          'A maioria dos conteúdos da web para o público geral busca uma nota Flesch Reading Ease entre 60 e 75, o que corresponde mais ou menos a um nível de leitura de 7ª a 9ª série.',
      },
      {
        question: 'Como posso melhorar uma nota baixa de legibilidade?',
        answer:
          'Divida frases longas com várias orações em afirmações mais curtas e troque jargões desnecessários com 3 ou mais sílabas por palavras concretas do dia a dia.',
      },
      {
        question: 'Por que a ferramenta menciona a contagem de frases para o SMOG?',
        answer:
          'A fórmula padrão do SMOG depende de amostras com várias frases, então trechos curtos de 1 a 2 frases usam uma estimativa ajustada até que 3 ou mais frases sejam fornecidas.',
      },
      {
        question: 'Para que serve o Verificador de Legibilidade?',
        answer:
          'Ele mede como é fácil entender um trecho calculando quatro fórmulas padrão de legibilidade e mostrando estatísticas de frases e sílabas.',
      },
      {
        question: 'O Verificador de Legibilidade é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e roda no seu navegador, então seu texto nunca sai do seu dispositivo.',
      },
      {
        question: 'O que é o nível Flesch-Kincaid?',
        answer:
          'Ele estima a série escolar dos EUA necessária para entender um texto; por exemplo, uma nota de 8,0 significa que um aluno da 8ª série deve conseguir lê-lo com conforto.',
      },
      {
        question: 'O que o índice Gunning Fog mede?',
        answer:
          'Ele estima os anos de educação formal necessários para entender um trecho na primeira leitura, com base no tamanho das frases e na proporção de palavras complexas.',
      },
      {
        question: 'O que é o índice SMOG?',
        answer:
          'O índice SMOG estima os anos de educação necessários para compreender totalmente um texto, contando palavras polissilábicas em uma amostra de frases.',
      },
      {
        question: 'Que nota Flesch Reading Ease devo buscar?',
        answer:
          'O público geral geralmente busca 60–70, enquanto conteúdos públicos em linguagem simples costumam buscar 70 ou mais; textos técnicos para especialistas podem ter notas menores.',
      },
      {
        question: 'De quantas palavras preciso para notas de legibilidade precisas?',
        answer:
          'Amostras mais longas, de pelo menos 100 palavras, dão resultados mais confiáveis, embora a ferramenta funcione com trechos mais curtos com uma estimativa SMOG ajustada.',
      },
      {
        question: 'O Verificador de Legibilidade armazena ou envia meu texto?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador, então rascunhos, artigos não publicados e documentos privados ficam no seu dispositivo.',
      },
      {
        question: 'Por que as quatro notas discordam entre si?',
        answer:
          'Cada fórmula pesa o tamanho das frases e a contagem de sílabas de forma diferente, então trate-as como estimativas complementares, e não como uma única série exata.',
      },
      {
        question: 'Como as sílabas são contadas no Verificador de Legibilidade?',
        answer:
          'A ferramenta estima as sílabas a partir das letras de cada palavra, o que é preciso para a maioria das palavras comuns em inglês, mas pode errar em nomes incomuns, abreviações ou termos técnicos.',
      },
      {
        question: 'Posso verificar a legibilidade de textos em outros idiomas?',
        answer:
          'As quatro fórmulas foram criadas para o inglês, então as notas para outros idiomas podem enganar, mesmo que a ferramenta ainda as calcule.',
      },
      {
        question: 'O que conta como palavra complexa?',
        answer:
          'Uma palavra complexa geralmente tem três ou mais sílabas, sem contar sufixos comuns e nomes próprios, e a ferramenta lista exemplos que encontra no seu trecho.',
      },
      {
        question: 'A pontuação afeta minha nota de legibilidade?',
        answer:
          'Sim. Os limites das frases vêm de pontos finais, pontos de interrogação e exclamação, então a falta de pontuação pode juntar frases e distorcer os resultados.',
      },
      {
        question: 'O Verificador de Legibilidade pode ajudar com SEO?',
        answer:
          'Conteúdos mais claros e fáceis de ler mantêm os visitantes engajados por mais tempo, o que apoia o SEO indiretamente, embora a legibilidade seja só um entre muitos fatores de ranqueamento.',
      },
      {
        question: 'Uma nota Flesch Reading Ease maior é sempre melhor?',
        answer:
          'Nem sempre. Ajuste a nota ao seu público: instruções simples devem ter nota alta, enquanto leitores acadêmicos ou jurídicos especializados podem esperar uma linguagem mais densa.',
      },
      {
        question: 'Por que minha nota muda quando adiciono um título?',
        answer:
          'As notas são calculadas a partir de todo o texto que você cola, então incluir títulos, rótulos de navegação ou fragmentos de código pode mudar as médias; confira só o corpo do texto para o resultado mais consistente.',
      },
      {
        question: 'Posso usar o Verificador de Legibilidade para redações de alunos?',
        answer:
          'Sim. Professores e alunos podem usá-lo para verificar se uma redação corresponde ao nível escolar pretendido antes de entregá-la.',
      },
    ],
  },
  'word-frequency-counter': {
    slug: 'contador-de-frequencia-de-palavras',
    name: 'Contador de Frequência de Palavras e Densidade de Palavras-Chave',
    shortDescription:
      'Analise frequências de frases de 1, 2 e 3 palavras e porcentagens de densidade, com exportação CSV.',
    keywords: [
      'contador de frequência de palavras',
      'verificador de densidade de palavras-chave',
      'contador de n-gramas',
      'analisador de repetição de palavras',
      'analisador de frequência de frases',
      'calculadora de densidade de palavras-chave',
      'contar palavras repetidas online',
      'contador de ocorrência de palavras',
      'análise de frequência de texto',
    ],
    seo: {
      title: 'Contador de Frequência de Palavras e Densidade | UtilityFlow',
      description:
        'Analise a frequência de palavras e a densidade de palavras-chave de frases de 1, 2 e 3 palavras, com porcentagens, filtro de stop words e CSV — grátis.',
      primaryKeyword: 'contador de frequência de palavras',
      secondaryKeywords: ['verificador de densidade de palavras-chave', 'analisador de frequência de frases', 'ferramenta de ocorrência de palavras', 'contador de frequência de n-gramas'],
      longTailKeywords: ['contar frequência de palavras e porcentagem de densidade online', 'analisar frases de 2 e 3 palavras em texto', 'exportar tabela de frequência de palavras para csv', 'verificar excesso de palavras-chave em rascunho de artigo'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Audite rascunhos de conteúdo quanto ao equilíbrio de palavras-chave, frases usadas em excesso e padrões de n-gramas com várias palavras, com tabelas de frequência instantâneas, filtro de stop words e relatórios CSV para baixar.',
    instructions: [
      {
        title: 'Cole seu conteúdo',
        description:
          'Insira um rascunho de artigo, transcrição, texto de produto ou respostas de pesquisa na caixa de texto.',
      },
      {
        title: 'Escolha frases de 1, 2 ou 3 palavras',
        description:
          'Alterne entre palavras únicas e n-gramas com várias palavras para ver termos individuais ou frases recorrentes.',
      },
      {
        title: 'Filtre stop words e defina um tamanho mínimo',
        description:
          'Ative a exclusão de stop words para esconder palavras de preenchimento como "o" e "e", e aumente o tamanho mínimo da palavra para focar em termos relevantes.',
      },
      {
        title: 'Revise contagens e porcentagens de densidade',
        description:
          'Ordene a tabela para ver quais palavras e frases aparecem mais e qual parte do texto cada uma ocupa.',
      },
      {
        title: 'Identifique uso excessivo ou excesso de palavras-chave',
        description:
          'Compare seus principais termos com suas palavras-chave alvo e reescreva trechos onde um termo domina o texto.',
      },
      {
        title: 'Copie ou exporte os resultados como CSV',
        description:
          'Clique em Exportar CSV para baixar a tabela para uma planilha, ou Copiar CSV para colar direto em um relatório.',
      },
    ],
    examples: [
      {
        title: 'Verificação de densidade de frases',
        input: 'O café da manhã é bom e o café da tarde também é bom.',
        output: 'café: 2 · o café: 2 · café da: 2',
        explanation:
          'Mostra a frequência de termos individuais e de frases tópicas com várias palavras.',
      },
      {
        title: 'Encontrando tiques verbais em uma transcrição',
        input: 'Sabe, eu acho que sabe, o projeto vai bem, sabe?',
        output: 'sabe: 3 · eu acho: 1 · o projeto: 1',
        explanation: 'Revela palavras de preenchimento que o palestrante repete sem perceber.',
      },
    ],
    benefits: [
      'Suporta análise de n-gramas de 1, 2 e 3 palavras',
      'O filtro opcional de stop words remove palavras de preenchimento como "o" e "e"',
      'Limite ajustável de tamanho mínimo de palavra',
      'Exporta tabelas CSV limpas, prontas para planilhas',
    ],
    useCases: [
      'Conferir rascunhos de artigos para evitar excesso de palavras-chave sem querer',
      'Identificar tiques verbais repetitivos em discursos ou transcrições',
      'Identificar temas recorrentes em feedback de clientes ou respostas de pesquisa',
      'Comparar o equilíbrio de frases com várias palavras em textos de páginas de destino',
    ],
    faqs: [
      {
        question: 'Como a porcentagem de densidade de palavras-chave é calculada?',
        answer:
          'A densidade é igual a (ocorrências do termo × palavras da frase ÷ total de palavras do texto) × 100, dando a parte exata do documento.',
      },
      {
        question: 'O que são stop words?',
        answer:
          'Stop words são palavras gramaticais muito frequentes, como "o", "e", "de", "em" e "para", que geralmente têm pouco significado tópico em auditorias de frequência.',
      },
      {
        question: 'Posso exportar os resultados de frequência para Excel ou Planilhas Google?',
        answer:
          'Sim. Clique em "Exportar CSV" para baixar um arquivo padrão separado por vírgulas ou em "Copiar CSV" para colar direto.',
      },
      {
        question: 'Para que serve um Contador de Frequência de Palavras?',
        answer:
          'Ele conta quantas vezes cada palavra ou frase aparece em um texto para você identificar repetições, conferir o equilíbrio de palavras-chave e encontrar temas recorrentes.',
      },
      {
        question: 'O Contador de Frequência de Palavras é gratuito?',
        answer:
          'Sim, é gratuito, sem cadastro, e roda todo no seu navegador, então seu texto nunca é enviado.',
      },
      {
        question: 'O que é densidade de palavras-chave e por que ela importa?',
        answer:
          'A densidade de palavras-chave é a porcentagem de um texto formada por um termo; uma densidade natural ajuda os buscadores a entender o tema, enquanto uma densidade alta demais parece manipulação.',
      },
      {
        question: 'Qual é uma boa porcentagem de densidade de palavras-chave?',
        answer:
          'Não há uma meta oficial, mas a maioria dos editores busca uma densidade natural de 1–2% para uma palavra-chave principal e foca em escrita legível e útil, em vez de perseguir um número.',
      },
      {
        question: 'O que são n-gramas no Contador de Frequência de Palavras?',
        answer:
          'N-gramas são sequências de uma, duas ou três palavras consecutivas, como "velocidade da página" ou "engajamento do usuário", contadas como frases únicas.',
      },
      {
        question: 'Por que devo analisar frases de 2 e 3 palavras?',
        answer:
          'Palavras únicas podem enganar, enquanto frases com várias palavras revelam os temas reais e as expressões repetidas do seu conteúdo.',
      },
      {
        question: 'Como funciona o filtro de stop words?',
        answer:
          'Quando ativado, ele remove palavras gramaticais comuns, como "o", "e" e "de", para que a tabela destaque palavras tópicas em vez de preenchimento.',
      },
      {
        question: 'Posso mudar quais palavras contam como stop words?',
        answer:
          'A ferramenta usa uma lista embutida de stop words comuns em inglês, e você pode ligar ou desligar o filtro quando quiser ver a tabela completa.',
      },
      {
        question: 'O que a configuração de tamanho mínimo de palavra faz?',
        answer:
          'Ela exclui palavras menores que o tamanho escolhido, o que ajuda a esconder abreviações e letras únicas da tabela de frequência.',
      },
      {
        question: 'O Contador de Frequência de Palavras envia meu texto?',
        answer:
          'Não. Toda a contagem acontece localmente no seu navegador, então rascunhos privados e transcrições ficam no seu dispositivo.',
      },
      {
        question: 'Posso contar a frequência de palavras em um documento longo?',
        answer:
          'Sim. Cole artigos ou transcrições longas e a ferramenta conta todas as ocorrências, embora textos muito grandes possam levar um momento para processar.',
      },
      {
        question: 'Como a porcentagem de densidade é calculada para frases?',
        answer:
          'A densidade é igual às ocorrências da frase multiplicadas pelas palavras da frase, divididas pelo total de palavras do texto e multiplicadas por 100.',
      },
      {
        question: 'O Contador de Frequência de Palavras pode encontrar frases repetidas em uma transcrição?',
        answer:
          'Sim. Mude para o modo de 2 ou 3 palavras para revelar tiques verbais e frases que um palestrante repete sem perceber.',
      },
      {
        question: 'A pontuação afeta a contagem de palavras?',
        answer:
          'A ferramenta remove a pontuação antes de contar, então "velocidade," e "velocidade" contam como a mesma palavra.',
      },
      {
        question: 'Palavras em maiúsculas e minúsculas contam juntas?',
        answer:
          'Sim. As palavras são convertidas para minúsculas antes da contagem, então "Página" e "página" contam como um único termo.',
      },
      {
        question: 'Posso exportar a tabela de frequência para o Excel?',
        answer:
          'Sim. Use Exportar CSV para baixar um arquivo que abre direto no Excel ou no Planilhas Google, ou Copiar CSV para colar a tabela em qualquer lugar.',
      },
      {
        question: 'Como posso usar a frequência de palavras para melhorar minha escrita?',
        answer:
          'Procure palavras que você repete sem querer, troque-as por sinônimos variados e confira se suas principais palavras-chave do tema aparecem de forma consistente, mas natural.',
      },
    ],
  },
  'text-to-slug': {
    slug: 'conversor-de-texto-para-slug',
    name: 'Conversor de Texto para Slug',
    shortDescription:
      'Converta títulos e cabeçalhos em slugs de URL limpos e amigáveis para SEO, com transliteração de acentos e modo em lote.',
    keywords: [
      'texto para slug',
      'gerador de slug de url',
      'slugify online',
      'formatador de url seo',
      'conversor de slug',
      'criar slug de url',
      'conversor de título para slug',
      'criador de slug de url limpo',
      'gerador de slug em lote',
    ],
    seo: {
      title: 'Conversor de Texto para Slug: URLs de SEO | UtilityFlow',
      description:
        'Transforme títulos em slugs de URL limpos e amigáveis para SEO, com transliteração de acentos, hífen ou underline e modo em lote — grátis e privado online.',
      primaryKeyword: 'conversor de texto para slug',
      secondaryKeywords: ['gerador de slug de url', 'slugify string', 'gerador de url limpa', 'ferramenta de título para slug'],
      longTailKeywords: ['converter título de artigo em slug de url amigável para seo', 'converter vários cabeçalhos em slugs em lote', 'transliterar caracteres acentuados para ascii online', 'separador de slug com hífen ou underline'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme títulos de blog, nomes de produtos e calendários de conteúdo com várias linhas em slugs ASCII limpos e seguros para URL, com transliteração automática de acentos, controles de delimitador e remoção opcional de stop words.',
    instructions: [
      {
        title: 'Digite um ou mais títulos',
        description:
          'Digite um único título ou cole várias linhas para gerar um slug para cada uma no modo em lote.',
      },
      {
        title: 'Escolha um separador',
        description:
          'Escolha hifens (-) para URLs amigáveis para SEO ou underlines (_) para nomes de arquivos e chaves de banco de dados.',
      },
      {
        title: 'Ajuste minúsculas e stop words',
        description:
          'Mantenha as minúsculas forçadas para URLs limpas e, se quiser, remova stop words comuns como "o" e "e" para slugs mais curtos.',
      },
      {
        title: 'Revise os slugs gerados',
        description:
          'Confira se cada slug se lê com clareza, mantém suas palavras-chave e não tem pontuação solta nem separadores duplos.',
      },
      {
        title: 'Copie os slugs para seu CMS ou código',
        description:
          'Copie slugs individuais ou o lote inteiro para seu sistema de conteúdo, tabela de rotas ou nomes de arquivos.',
      },
      {
        title: 'Corrija um slug que parece errado',
        description:
          'Se um caractere sobreviveu de forma estranha, verifique se há símbolos incomuns ou escrita não latina no título original e simplifique antes de converter de novo.',
      },
    ],
    examples: [
      {
        title: 'Normalização de título acentuado',
        input: 'Café & Creme: Guia para 2026!',
        output: 'cafe-and-creme-guia-para-2026',
        explanation:
          'Translitera letras latinas acentuadas, expande "&" para "and" e remove a pontuação.',
      },
      {
        title: 'Convertendo títulos em lote',
        input: 'Guia de SEO\nComo Comprimir Imagens',
        output: 'guia-de-seo\ncomo-comprimir-imagens',
        explanation: 'Converte cada linha em seu próprio slug correspondente em uma só passada.',
      },
    ],
    benefits: [
      'Normaliza caracteres acentuados (é, ñ, ü) em equivalentes ASCII limpos',
      'Suporta conversão em lote com várias linhas em uma passada',
      'Oferece remoção opcional de stop words para URLs mais curtas',
      'Troca "&" por "and" sem perder o sentido, em vez de descartá-lo',
    ],
    useCases: [
      'Gerar URLs legíveis de posts de blog e documentação',
      'Criar nomes de arquivos consistentes para recursos e imagens para baixar',
      'Preparar slugs de rotas em lote para sites estáticos e catálogos de e-commerce',
      'Padronizar identificadores de categorias ou tags em bancos de dados',
    ],
    faqs: [
      {
        question: 'Devo usar hifens ou underlines em slugs de URL?',
        answer:
          'Os buscadores geralmente recomendam hifens (-) como separadores de palavras em URLs, enquanto underlines (_) são comuns para nomes de arquivos ou chaves de banco de dados.',
      },
      {
        question: 'Como a ferramenta lida com caracteres acentuados como "café"?',
        answer:
          'Ela aplica a normalização Unicode NFD para separar os sinais diacríticos e removê-los sem problema, transformando "café" em "cafe" em vez de apagar a letra.',
      },
      {
        question: 'Posso converter 50 títulos de uma vez?',
        answer:
          'Sim. Cole um título por linha e cada linha vai virar seu próprio slug correspondente ao lado.',
      },
      {
        question: 'O que é um Conversor de Texto para Slug?',
        answer:
          'Ele transforma um título ou frase em um slug limpo e seguro para URL, deixando tudo em minúsculas, removendo a pontuação e trocando espaços por hifens ou underlines.',
      },
      {
        question: 'O Conversor de Texto para Slug é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e roda no seu navegador, então seus títulos nunca saem do seu dispositivo.',
      },
      {
        question: 'O que torna um slug amigável para SEO?',
        answer:
          'Um bom slug é curto, legível, em minúsculas e feito de palavras reais que descrevem a página, com hifens separando as palavras.',
      },
      {
        question: 'Qual deve ser o tamanho de um slug de URL?',
        answer:
          'Busque três a cinco palavras com significado; slugs mais longos são cortados nos resultados de busca e são mais difíceis de lembrar.',
      },
      {
        question: 'Por que os slugs são em minúsculas?',
        answer:
          'URLs em minúsculas evitam problemas de conteúdo duplicado, já que alguns servidores tratam "/Guia" e "/guia" como páginas diferentes.',
      },
      {
        question: 'O que acontece com os números em um slug?',
        answer:
          'Os números são mantidos como estão, então um título como "Guia para 2026" vira "guia-para-2026".',
      },
      {
        question: 'Como os caracteres especiais são tratados em slugs?',
        answer:
          'Pontuação e símbolos são removidos, "&" vira "and" e letras acentuadas como é são transliteradas para equivalentes ASCII simples.',
      },
      {
        question: 'O Conversor de Texto para Slug lida com títulos em outros idiomas?',
        answer:
          'Caracteres latinos acentuados são transliterados sem problema, mas escritas não latinas podem ser removidas, então confira a saída antes de publicar.',
      },
      {
        question: 'O que são stop words em um slug?',
        answer:
          'Stop words são palavras comuns, como "o", "a" e "de", que adicionam tamanho sem significado; removê-las deixa URLs mais curtas e limpas.',
      },
      {
        question: 'Devo remover stop words de todos os slugs?',
        answer:
          'Nem sempre. Mantenha-as quando forem necessárias para a clareza, como em guias "como fazer", e remova-as só quando o slug continuar legível sem elas.',
      },
      {
        question: 'Posso converter muitos títulos de uma vez?',
        answer:
          'Sim. Cole um título por linha e a ferramenta gera um slug correspondente para cada linha em uma única passada.',
      },
      {
        question: 'O Conversor de Texto para Slug envia meus títulos?',
        answer:
          'Não. Toda a conversão acontece localmente no seu navegador, então títulos não publicados e nomes de produtos ficam privados.',
      },
      {
        question: 'Por que meus slugs têm hifens duplos?',
        answer:
          'Hifens duplos geralmente vêm de pontuação ou espaços seguidos no título original; limpe o título ou remova a pontuação extra e converta de novo.',
      },
      {
        question: 'Posso usar slugs para nomes de arquivos também?',
        answer:
          'Sim. Slugs formam nomes de arquivos seguros e legíveis, e a opção de separador com underline combina com sistemas de arquivos e chaves de banco de dados.',
      },
      {
        question: 'Qual é a diferença entre um slug e uma URL?',
        answer:
          'Um slug é a parte final legível de uma URL, como "guia-compressor-de-imagens" em exemplo.com/guia-compressor-de-imagens.',
      },
      {
        question: 'Slugs afetam o ranqueamento nas buscas?',
        answer:
          'Um slug claro ajuda buscadores e leitores a entender uma página de relance, embora seja só uma pequena parte do SEO.',
      },
      {
        question: 'Posso mudar um slug depois de publicar uma página?',
        answer:
          'Sim, mas configure um redirecionamento da URL antiga para a nova para que links existentes e listagens de busca não quebrem.',
      },
    ],
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
      secondaryKeywords: ['conversor de markdown para html', 'editor de markdown online', 'visualizador de markdown', 'editor de markdown ao vivo'],
      longTailKeywords: ['visualizador de markdown ao vivo com exportação de html', 'converter readme markdown em html online', 'editor de markdown no navegador sem enviar arquivos', 'pré-visualizar readme do github antes de commitar'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Escreva arquivos README, documentação e notas formatadas em um editor Markdown responsivo com prévia renderizada ao vivo, escape seguro de HTML, inspeção de HTML bruto e exportação de HTML com um clique.',
    instructions: [
      {
        title: 'Escreva ou cole Markdown',
        description:
          'Use a sintaxe padrão (# títulos, **negrito**, *itálico*, listas, citações, links e blocos de código cercados) no painel esquerdo.',
      },
      {
        title: 'Veja a prévia ao vivo',
        description:
          'O painel direito renderiza sua formatação na hora enquanto você digita, para você conferir títulos, listas e links sem atualizar.',
      },
      {
        title: 'Mude para a aba HTML Bruto',
        description:
          'Alterne acima do painel direito para inspecionar a marcação HTML compilada da qual a prévia é feita.',
      },
      {
        title: 'Confira blocos de código e links',
        description:
          'Role pela prévia para confirmar se os blocos de código cercados renderizam certo e se os links apontam para onde você espera.',
      },
      {
        title: 'Copie o HTML ou exporte um arquivo',
        description:
          'Clique em Copiar HTML para um trecho colar em um CMS ou e-mail, ou em Exportar HTML para baixar um documento HTML5 independente.',
      },
      {
        title: 'Corrija formatação que parece errada',
        description:
          'Se uma lista ou bloco de código não renderizar, verifique se falta uma linha em branco antes dele ou se há uma cerca de crase sem fechar, depois confira a prévia de novo.',
      },
    ],
    examples: [
      {
        title: 'Conversão de título e lista',
        input: '## Lista de verificação\n- **Verificar** links\n- Publicar rascunho',
        output: '<h2>Lista de verificação</h2><ul><li><strong>Verificar</strong> links</li><li>Publicar rascunho</li></ul>',
        explanation:
          'Converte sintaxe Markdown limpa direto em elementos HTML semânticos.',
      },
      {
        title: 'Convertendo notas em HTML',
        input: '# Minhas Notas\n\nTexto **importante** aqui.',
        output: '<h1>Minhas Notas</h1><p>Texto <strong>importante</strong> aqui.</p>',
        explanation: 'Títulos e ênfase viram tags HTML correspondentes na prévia ao vivo.',
      },
    ],
    benefits: [
      'Escapa HTML bruto e limpa esquemas de links para evitar marcação insegura na prévia',
      'Suporta títulos, negrito/itálico, tachado, citações, listas, links e blocos de código',
      'Alterna sem esforço entre a prévia visual e o código HTML bruto',
      'Baixa um arquivo .html completo e independente com um clique',
    ],
    useCases: [
      'Pré-visualizar arquivos README.md do GitHub antes de commitar',
      'Converter notas em Markdown em HTML limpo para e-mail ou blocos de CMS',
      'Escrever tutoriais técnicos e notas de lançamento offline',
      'Conferir formatação de links e cercas de código rapidamente',
    ],
    faqs: [
      {
        question: 'O Visualizador de Markdown executa JavaScript embutido?',
        answer:
          'Não. Tags HTML brutas na entrada são escapadas e os protocolos de link são limitados a esquemas seguros de web, relativos, de âncora e mailto.',
      },
      {
        question: 'Posso copiar só o fragmento HTML compilado, sem o boilerplate <html>?',
        answer:
          'Sim. O botão "Copiar HTML" copia a marcação HTML do corpo compilado, enquanto "Exportar HTML" a envolve em um documento HTML5 independente.',
      },
      {
        question: 'Blocos de código cercados são suportados?',
        answer:
          'Sim. Envolva trechos de código com várias linhas em crases triplas (```) para renderizar blocos formatados <pre><code>.',
      },
      {
        question: 'O que é um Visualizador de Markdown?',
        answer:
          'Ele renderiza texto Markdown em HTML formatado em tempo real para você ver exatamente como títulos, listas, links e código vão ficar antes de publicar.',
      },
      {
        question: 'O Visualizador de Markdown é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e roda no seu navegador, então seus rascunhos nunca são enviados.',
      },
      {
        question: 'Que sintaxe Markdown o visualizador suporta?',
        answer:
          'Ele suporta títulos, negrito, itálico, tachado, citações, listas ordenadas e não ordenadas, links, imagens e blocos de código cercados.',
      },
      {
        question: 'Posso pré-visualizar um README do GitHub com esta ferramenta?',
        answer:
          'Sim. Cole o conteúdo do seu README.md no editor para conferir como ele vai renderizar no GitHub antes de commitar.',
      },
      {
        question: 'O Visualizador de Markdown suporta tabelas?',
        answer:
          'O suporte a tabelas depende do sabor de Markdown; confira a prévia para ver se suas tabelas com pipes renderizam e simplifique-as se não renderizarem.',
      },
      {
        question: 'Qual é a diferença entre Copiar HTML e Exportar HTML?',
        answer:
          'Copiar HTML copia só a marcação do corpo compilado para colar em outro lugar, enquanto Exportar HTML baixa um documento HTML5 completo e independente.',
      },
      {
        question: 'O HTML exportado é uma página web completa?',
        answer:
          'Sim. A exportação envolve seu conteúdo em um documento HTML5 completo com tags head e body, pronto para abrir em qualquer navegador.',
      },
      {
        question: 'O Visualizador de Markdown executa JavaScript da minha entrada?',
        answer:
          'Não. Tags HTML brutas são escapadas e os protocolos de link são limitados a esquemas seguros de web, relativos, de âncora e mailto.',
      },
      {
        question: 'Posso usar o Visualizador de Markdown offline?',
        answer:
          'O editor e a prévia rodam todo no seu navegador, sem envios, então seus rascunhos ficam no seu dispositivo enquanto você trabalha.',
      },
      {
        question: 'O Visualizador de Markdown salva meu trabalho?',
        answer:
          'A ferramenta não armazena seu texto em nenhum servidor, então copie ou exporte qualquer coisa importante antes de fechar a aba.',
      },
      {
        question: 'Como adiciono uma imagem em Markdown?',
        answer:
          'Use a sintaxe ![texto alternativo](url-da-imagem) e a imagem vai renderizar na prévia quando a URL estiver acessível.',
      },
      {
        question: 'Por que meu bloco de código não está renderizando?',
        answer:
          'Confira se as cercas de abertura e fechamento usam três crases em linhas próprias, com uma linha em branco antes da cerca de abertura.',
      },
      {
        question: 'Posso converter Markdown em HTML para um e-mail?',
        answer:
          'Sim. Copie o fragmento HTML compilado e cole em um editor de e-mail que aceite HTML, ou exporte o documento completo primeiro.',
      },
      {
        question: 'Posso escrever blocos de código com uma tag de linguagem?',
        answer:
          'Sim. Adicione o nome da linguagem depois das crases de abertura, por exemplo ```js, e o bloco renderiza como código formatado.',
      },
      {
        question: 'Posso colar Markdown copiado de outro editor?',
        answer:
          'Sim. Cole Markdown de qualquer editor ou app de notas e a prévia se atualiza na hora.',
      },
      {
        question: 'O que acontece com os links na prévia?',
        answer:
          'Os links renderizam como âncoras clicáveis na prévia, e só protocolos seguros como https, caminhos relativos, âncoras e mailto são permitidos.',
      },
      {
        question: 'Posso imprimir a prévia renderizada?',
        answer:
          'Sim. Exporte o arquivo HTML e abra no seu navegador, depois use a função de impressão do navegador para imprimir ou salvar como PDF.',
      },
    ],
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
    instructions: [
      {
        title: 'Defina seu prefixo e sufixo',
        description:
          'Digite qualquer texto para adicionar antes ou depois de cada linha, como uma aspa de abertura, um marcador ou uma tag de fechamento.',
      },
      {
        title: 'Ative os números de linha se precisar',
        description:
          'Ative Adicionar números de linha e defina o número inicial e o separador, por exemplo "1. " ou "01: ".',
      },
      {
        title: 'Cole suas linhas',
        description:
          'Digite um item por linha em Linhas de Entrada ou clique em Carregar exemplo para ver a citação no estilo SQL em ação.',
      },
      {
        title: 'Escolha como as linhas em branco são tratadas',
        description:
          'Mantenha Pular linhas vazias marcado para que as linhas em branco de espaçamento sejam preservadas sem numeração nem caracteres extras.',
      },
      {
        title: 'Revise a saída formatada',
        description:
          'Confira se as aspas, vírgulas e números estão alinhados em cada linha antes de usar o resultado.',
      },
      {
        title: 'Copie as linhas formatadas',
        description:
          'Copie o bloco inteiro para sua área de transferência e cole na sua consulta SQL, arquivo de código ou documento.',
      },
    ],
    examples: [
      {
        title: 'Formatando valores para uma cláusula SQL IN',
        input: "Prefixo: '  |  Sufixo: ',  |  Linhas: tóquio / londres",
        output: "'tóquio',\n'londres',",
        explanation:
          'Envolve itens de texto simples em aspas simples e vírgulas no fim na hora.',
      },
      {
        title: 'Passos numerados com zeros',
        input: 'Números de linha: Ligado · Completar com zeros: Ligado · Separador: ": "',
        output: '01: Passo um\n02: Passo dois',
        explanation: 'Cria listas numeradas alinhadas para esquemas ou documentação.',
      },
    ],
    benefits: [
      'Combina prefixo, sufixo e numeração sequencial de linhas em uma ferramenta',
      'O preenchimento opcional com zeros mantém listas com vários dígitos alinhadas visualmente',
      'Pula linhas em branco automaticamente quando ativado, para os contadores ficarem precisos',
      'Nenhum envio ao servidor para IDs sensíveis ou valores de consulta',
    ],
    useCases: [
      'Envolver IDs de planilhas em aspas e vírgulas para consultas SQL IN (...)',
      'Converter itens de texto simples em marcadores Markdown ou tags HTML <li>',
      'Adicionar números de passos sequenciais a listas de verificação e esquemas',
      'Criar matrizes de strings para JavaScript, Python ou JSON',
    ],
    faqs: [
      {
        question: 'Posso adicionar só números de linha, sem prefixo nem sufixo?',
        answer:
          'Sim. Limpe os campos Prefixo da Linha e Sufixo da Linha, ative "Adicionar números de linha" e defina o número inicial e o separador de sua preferência.',
      },
      {
        question: 'Como pulo a numeração de linhas em branco de espaçamento?',
        answer:
          'Mantenha "Pular linhas vazias" marcado para que as linhas em branco sejam preservadas sem incrementar o contador de linhas nem receber prefixos ou sufixos.',
      },
      {
        question: 'Posso começar a numeração do 0 ou de qualquer número personalizado?',
        answer:
          'Sim. Digite qualquer número inteiro no campo Número Inicial para começar a contar do 0, do 1, do 100 ou de outro deslocamento.',
      },
      {
        question: 'O que é a ferramenta Adicionar Números de Linha e Prefixo/Sufixo?',
        answer:
          'Ela adiciona um prefixo personalizado, um sufixo ou um número de linha sequencial a cada linha de uma lista, para você formatar texto em massa em vez de editar cada linha à mão.',
      },
      {
        question: 'A ferramenta de prefixo e sufixo de linha é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e roda no seu navegador, então seu texto nunca sai do seu dispositivo.',
      },
      {
        question: 'Posso adicionar um prefixo sem sufixo?',
        answer:
          'Sim. Preencha só o campo Prefixo da Linha e deixe o sufixo vazio, ou vice-versa, e só a parte digitada será aplicada.',
      },
      {
        question: 'Como envolvo linhas em aspas para uma cláusula SQL IN?',
        answer:
          'Digite uma aspa simples como prefixo e "\'," como sufixo, e cada linha vira um valor entre aspas seguido de vírgula.',
      },
      {
        question: 'Posso adicionar uma vírgula no fim de cada linha?',
        answer:
          'Sim. Coloque uma vírgula no campo Sufixo da Linha e cada linha não vazia vai terminar com uma.',
      },
      {
        question: 'Como funciona o preenchimento com zeros para números de linha?',
        answer:
          'Quando completar com zeros está ativado, os números são preenchidos com a mesma largura, então uma lista de 100 linhas mostra 001, 002 e assim por diante, em vez de 1, 2 e 100.',
      },
      {
        question: 'Qual separador devo usar para linhas numeradas?',
        answer:
          'Escolhas comuns são ". " para listas numeradas simples, ": " para passos rotulados e ") " para numeração no estilo de esquema.',
      },
      {
        question: 'Posso numerar linhas começando de um número diferente de 1?',
        answer:
          'Sim. Digite qualquer número inteiro no campo Número Inicial para começar do 0, do 100 ou de qualquer outro deslocamento que você precise.',
      },
      {
        question: 'O que acontece com as linhas em branco da minha lista?',
        answer:
          'Com Pular linhas vazias ativado, as linhas em branco são mantidas como estão, sem números ou afixos; com ele desligado, elas são tratadas como qualquer outra linha.',
      },
      {
        question: 'Posso usar a ferramenta para fazer uma lista com marcadores Markdown?',
        answer:
          'Sim. Digite "- " como prefixo e cada linha vira um ponto de marcador Markdown.',
      },
      {
        question: 'Posso transformar linhas em itens de lista HTML?',
        answer:
          'Sim. Use "<li>" como prefixo e "</li>" como sufixo para envolver cada linha em tags de item de lista.',
      },
      {
        question: 'A ferramenta envia meu texto para um servidor?',
        answer:
          'Não. Toda a formatação acontece localmente no seu navegador, o que mantém IDs sensíveis, valores de consulta e código privados.',
      },
      {
        question: 'Posso formatar linhas para uma matriz JavaScript ou Python?',
        answer:
          'Sim. Envolva as linhas em aspas com uma vírgula no fim e cole o resultado direto em um literal de matriz.',
      },
      {
        question: 'Há um limite de quantas linhas posso formatar?',
        answer:
          'A ferramenta lida com listas longas com conforto, embora colagens extremamente grandes possam levar um momento para processar no navegador.',
      },
      {
        question: 'Por que algumas linhas não estão sendo numeradas?',
        answer:
          'Verifique se Pular linhas vazias está ativado, já que linhas em branco são puladas por design e não vão receber número.',
      },
      {
        question: 'Posso adicionar prefixos diferentes a linhas diferentes?',
        answer:
          'Não. A ferramenta aplica o mesmo prefixo e sufixo a todas as linhas; para formatação mista, passe cada grupo pela ferramenta separadamente.',
      },
      {
        question: 'Como removo um prefixo que adicionei por engano?',
        answer:
          'Cole o texto formatado na ferramenta Localizar e Substituir ou passe a lista original de novo com as configurações certas, já que esta ferramenta só adiciona texto e não o remove.',
      },
    ],
  },
};
