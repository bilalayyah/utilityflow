import type { UiStrings } from '../ui';

/**
 * Brazilian Portuguese (pt-BR) chrome dictionary — neutral, widely
 * understood Brazilian Portuguese ("você" forms; no European-Portuguese
 * markers such as ficheiro, ecrã, telemóvel, fixe, autocarro, comboio,
 * frigorífico). Same keys and structure as the English source
 * (locales/en/ui.ts). Brand name, email addresses, URLs and
 * {placeholder} tokens stay unchanged.
 */
export const ptStrings: UiStrings = {
  nav: {
    tools: 'Ferramentas',
    categories: 'Categorias',
    aiTools: 'Ferramentas de IA',
    about: 'Sobre',
    contact: 'Contato',
    allTools: 'Todas as ferramentas',
    freeAiTools: 'Ferramentas de IA gratuitas',
    viewAiSection: 'Ver a seção de IA na página inicial →',
    searchPlaceholder: 'Pesquisar 88 ferramentas...',
    searchTools: 'Pesquisar ferramentas',
    closeSearch: 'Fechar pesquisa',
    openMenu: 'Abrir menu de navegação',
    closeMenu: 'Fechar menu de navegação',
    skipToContent: 'Pular para o conteúdo',
    language: 'Idioma',
    chooseLanguage: 'Escolher idioma',
    aiWriting: {
      label: 'Assistente de escrita com IA',
      desc: 'Gramática, reescrita, tom e redação de e-mails',
    },
    aiSummarizer: {
      label: 'Resumidor de texto com IA',
      desc: 'Resumos curtos, médios e em tópicos',
    },
    aiFinder: {
      label: 'Buscador inteligente de ferramentas com IA',
      desc: 'Encontre a ferramenta certa em linguagem comum',
    },
  },
  footer: {
    tagline:
      'Uma coleção rápida de utilitários do dia a dia, que rodam no navegador, para escritores, engenheiros, profissionais de marketing e analistas. Feita para rodar localmente, com o mínimo de sobrecarga.',
    categories: 'Categorias',
    platformAi: 'Plataforma e IA',
    trustLegal: 'Confiança e Jurídico',
    home: 'Início',
    allToolsDirectory: 'Diretório de todas as ferramentas',
    aboutUs: 'Sobre nós',
    contact: 'Contato',
    privacyPolicy: 'Política de privacidade',
    termsOfService: 'Termos de serviço',
    xmlSitemap: 'Mapa do site XML',
    rightsReserved: 'Todos os direitos reservados.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  common: {
    copy: 'Copiar',
    copied: 'Copiado',
    download: 'Baixar',
    clear: 'Limpar',
    loadSample: 'Carregar exemplo',
    reset: 'Redefinir',
    search: 'Pesquisar',
    close: 'Fechar',
    cancel: 'Cancelar',
    save: 'Salvar',
    submit: 'Enviar',
    loading: 'Carregando...',
    processing: 'Processando...',
    upload: 'Enviar arquivo',
    chooseFile: 'Escolher arquivo',
    dragDrop: 'Arraste e solte seu arquivo aqui',
    tryAgain: 'Tentar novamente',
    openTool: 'Abrir ferramenta',
    browserSide: 'No navegador',
    freeAiTool: 'Ferramenta de IA gratuita',
    externalApi: 'API externa',
  },
  home: {
    seoTitle: 'UtilityFlow – Ferramentas online rápidas no navegador',
    seoDescription:
      'Ferramentas online gratuitas, rápidas e privadas para análise de texto, formatação para desenvolvedores, calculadoras, PDFs, SEO e fluxos de imagem online.',
    seoKeywords: [
      'ferramentas online',
      'ferramentas de navegador',
      'ferramentas de texto',
      'ferramentas para desenvolvedores',
      'calculadoras online',
      'ferramentas de PDF',
      'ferramentas de SEO',
    ],
    eyebrow: 'Plataforma UtilityFlow · 7 categorias principais · {count} utilitários ativos',
    h1: 'Utilitários online práticos, feitos para velocidade e privacidade.',
    heroDescription:
      'O UtilityFlow organiza 85 utilitários que rodam no navegador, além de escrita com IA gratuita, resumo e descoberta inteligente de ferramentas, em fluxos de texto, desenvolvimento, calculadoras, redes sociais, PDF, SEO e imagem.',
    exploreCategories: 'Explorar categorias',
    openDirectory: 'Abrir diretório completo',
    aiWriting: 'Escrita com IA',
    aiSummarizer: 'Resumo com IA',
    aiFinder: 'Buscador de ferramentas com IA',
    metrics: {
      toolCategories: 'Categorias de ferramentas',
      browserUtilities: 'Utilitários de navegador',
      liveTools: 'Ferramentas ativas',
      accountRequired: 'Conta necessária',
      none: 'Nenhuma',
    },
    aiSpotlight: {
      badge: 'Suíte de IA gratuita · Sem login',
      title: 'Ferramentas de IA gratuitas',
      description:
        'Melhore rascunhos, resuma documentos longos ou encontre a ferramenta certa em segundos, sem cadastro.',
    },
    popular: {
      title: 'Ferramentas populares',
      description: 'Os utilitários mais usados do dia a dia em escrita, desenvolvimento e cálculos.',
      viewDirectory: 'Ver diretório de ferramentas',
    },
    categories: {
      title: 'Categorias de ferramentas',
      description:
        'Sete conjuntos especializados criados para cobrir escrita, programação, matemática, publicação, documentos, otimização para buscas e fluxos de mídia.',
      includes: 'Inclui: {names}',
    },
    directory: {
      title: 'Diretório de todas as ferramentas',
      description:
        'Filtre por categoria ou palavra-chave para ir direto a qualquer utilitário ativo ou centro de categoria.',
      filterPlaceholder: 'Filtrar categorias ou ferramentas...',
      allCategories: 'Todas as categorias',
      noMatch: 'Nenhuma categoria ou ferramenta correspondeu a "{query}".',
      resetFilters: 'Redefinir filtros',
      upcomingUtilities: 'Próximos utilitários: {names}',
      toolsActive: '{count} ferramentas ativas',
      openCategory: 'Abrir página da categoria',
    },
    why: {
      title: 'Por que escolher o UtilityFlow',
      description: 'Criado como uma alternativa limpa e confiável aos sites de utilitários cheios de anúncios.',
      items: [
        {
          title: 'Privacidade em primeiro lugar no navegador',
          description:
            'Cálculos, transformações de texto e formatação rodam diretamente na memória do cliente, então rascunhos sensíveis e dados JSON ficam no seu dispositivo.',
        },
        {
          title: 'Entrega rápida e leve',
          description:
            'Módulos de ferramentas divididos por código e poucas dependências de execução mantêm o carregamento inicial enxuto e as Core Web Vitals responsivas em qualquer conexão.',
        },
        {
          title: 'URLs permanentes e limpas',
          description:
            'Cada utilitário tem seu próprio caminho dedicado, com metadados estruturados, exemplos de uso e links diretos confiáveis entre atualizações do navegador.',
        },
        {
          title: 'Resultados previsíveis e verificáveis',
          description:
            'As ferramentas focam em resultados determinísticos, instruções transparentes e controles acessíveis, sem pop-ups desordenados ou indicadores enganosos.',
        },
      ],
    },
    faq: {
      title: 'Perguntas frequentes',
      description:
        'Detalhes importantes sobre como o UtilityFlow funciona e o que esperar das novas ferramentas.',
    },
    faqs: [
      {
        question: 'As ferramentas do UtilityFlow são gratuitas e podem ser usadas sem criar uma conta?',
        answer:
          'Sim. Todos os 85 utilitários de navegador e as 3 ferramentas de IA do UtilityFlow são gratuitos, sem cadastro, sem tela de login, sem créditos e sem assinatura.',
      },
      {
        question: 'O UtilityFlow envia meu texto, código ou arquivos para um servidor?',
        answer:
          'Todos os 85 utilitários principais de navegador rodam localmente no seu navegador, sem enviar os dados inseridos. Nossas 3 ferramentas de IA gratuitas opcionais (Assistente de escrita com IA, Resumidor de texto com IA e Buscador inteligente de ferramentas com IA) processam os comandos com segurança por meio de inferência Groq no servidor, sem armazenar seu texto.',
      },
      {
        question: 'Como as 88 ferramentas são organizadas na plataforma?',
        answer:
          'O UtilityFlow cobre sete categorias principais (Texto e escrita, Desenvolvedores, Calculadoras, Redes sociais, PDFs, SEO e Ferramentas de imagem e arquivos), totalizando 85 ferramentas de navegador, além de 3 ferramentas de IA gratuitas integradas à plataforma.',
      },
      {
        question: 'Posso salvar ou compartilhar um link direto para uma ferramenta específica?',
        answer:
          'Sim. Cada ferramenta e categoria tem sua própria URL permanente e limpa (como /word-counter/, /ai-writing-assistant/ ou /category/developer-tools/), que carrega diretamente e funciona entre atualizações do navegador.',
      },
      {
        question: 'O UtilityFlow funciona bem em celulares e tablets?',
        answer:
          'Sim. Todos os layouts, controles de navegação e espaços de trabalho interativos — incluindo modo claro e modo escuro — foram projetados com foco em dispositivos móveis, com alvos de toque acessíveis e grades responsivas.',
      },
    ],
    trustLine: 'Todas as ferramentas são gratuitas • Não é preciso criar conta • Funciona no seu navegador',
  },
  directory: {
    seoTitle: 'Diretório completo de ferramentas online | UtilityFlow',
    seoDescription:
      'Navegue e pesquise todos os utilitários de navegador e categorias do UtilityFlow, organizados para escrita, desenvolvimento, calculadoras, PDFs, SEO e imagens.',
    seoKeywords: ['diretório de ferramentas online', 'todas as ferramentas online', 'ferramentas gratuitas de navegador'],
    title: 'Diretório de todas as ferramentas',
    description:
      'Navegue por todos os {count} utilitários ativos registrados no UtilityFlow ou explore os sete centros de categoria em fluxos de navegador e de IA gratuita.',
    searchPlaceholder: 'Pesquisar por nome da ferramenta, palavra-chave ou categoria...',
    showing: 'Mostrando {tools} ferramentas ativas em {categories} categorias',
    all: 'Todas',
    availableTools: 'Ferramentas disponíveis',
    categorySuites: 'Conjuntos de categorias',
    visitHub: 'Visitar o centro {name}',
    plannedToolsInclude: 'As ferramentas desta categoria incluem: {names}',
    noMatch: 'Nenhuma categoria ou ferramenta correspondeu ao seu filtro.',
    clearFilters: 'Limpar filtros',
  },
  category: {
    plannedCount: '{count} ferramentas',
    toolsCount: '{count} ferramentas',
    toolsLive: '{count} ferramentas ativas',
    ofToolsLive: '{count} de {total} ferramentas ativas',
    availableTools: '{name} disponíveis',
    exploreOther: 'Explorar outras categorias',
    scheduledTitle: 'Mais ferramentas em breve',
    scheduledDescription:
      'Este centro de categoria está ativo e indexado na arquitetura {name}. Páginas individuais de ferramentas com funcionalidade no navegador serão adicionadas aqui em breve.',
    plannedToolsTitle: 'Ferramentas nesta categoria:',
  },
  toolPage: {
    howToUse: 'Como usar {name}',
    practicalExamples: 'Exemplos práticos',
    faqs: 'Perguntas frequentes',
    keyBenefits: 'Principais benefícios',
    commonUseCases: 'Casos de uso comuns',
    runsLocally: 'Roda localmente no seu navegador',
    externalApi: 'Integração com API externa',
    freeAiTool: 'Ferramenta de IA gratuita · Sem login',
    loadingWorkspace: 'Carregando o espaço de trabalho {name}...',
    input: 'Entrada',
    output: 'Saída',
    relatedTitle: 'Ferramentas relacionadas',
    relatedDescription: 'Continue seu fluxo de trabalho com utilitários complementares.',
    browseAll: 'Navegar por todas as {name}',
    moreToolsIn: 'Mais ferramentas em',
    willAppear: 'aparecerão aqui em breve.',
  },
  comments: {
    title: 'Comentários',
    note: 'Compartilhe sua opinião: não é preciso criar conta. Basta escrever seu nome e publicar.',
    namePlaceholder: 'Seu nome',
    commentPlaceholder: 'Escreva um comentário…',
    postButton: 'Publicar comentário',
    posting: 'Publicando…',
    empty: 'Ainda não há comentários. Seja a primeira pessoa a compartilhar sua opinião.',
    loadError: 'Não foi possível carregar os comentários agora, mas você ainda pode publicar um abaixo.',
    postError: 'Não foi possível publicar seu comentário. Tente novamente em instantes.',
  },
  search: {
    placeholder:
      'Pesquisar ferramentas ou categorias (ex.: contador de palavras, JSON, PDF, calculadoras)...',
    search: 'Pesquisar',
    tools: 'Ferramentas',
    categories: 'Categorias',
    noResults: 'Nenhuma ferramenta ou categoria correspondente a "{query}".',
    viewDirectory: 'Ver diretório completo',
    clearSearch: 'Limpar pesquisa',
    ariaLabel: 'Pesquisar ferramentas ou categorias',
  },
  notFound: {
    seoTitle: 'Página não encontrada (404) | Ferramentas UtilityFlow',
    seoDescription:
      'A ferramenta ou página solicitada não foi encontrada no UtilityFlow. Pesquise em nosso diretório de utilitários ou navegue pelas categorias e encontre a sua.',
    eyebrow: '404 · Não encontrada',
    title: 'Não conseguimos encontrar essa página.',
    description:
      'A URL pode ter mudado, ou este utilitário ainda não foi lançado. Pesquise abaixo ou navegue pelas nossas categorias para encontrar o que você precisa.',
    returnHome: 'Voltar para a página inicial',
    browseDirectory: 'Navegar pelo diretório',
    browseCategories: 'Navegar pelas categorias',
  },
  about: {
    seoTitle: 'Sobre o UtilityFlow – Plataforma de ferramentas online',
    seoDescription:
      'Saiba como o UtilityFlow cria utilitários de navegador rápidos, seguros e privados em sete categorias, sem contas, desordem ou envios desnecessários de dados.',
    title: 'Sobre o UtilityFlow',
    intro:
      'O UtilityFlow é uma plataforma web independente que cria 85 utilitários de navegador focados e confiáveis para o trabalho digital do dia a dia.',
    whyTitle: 'Por que criamos o UtilityFlow',
    whyP1:
      'Tarefas online de rotina — contar palavras, validar JSON, verificar limites de caracteres, calcular parcelas de empréstimo ou comprimir uma imagem — muitas vezes obrigam as pessoas a usar sites lentos, cheios de sobreposições intrusivas, downloads confusos ou cadastros obrigatórios.',
    whyP2:
      'Nosso objetivo é simples: dar a cada utilitário uma página limpa e dedicada, que carrega rápido, explica claramente como a ferramenta funciona e executa diretamente no seu navegador sempre que os padrões web permitirem.',
    orgTitle: 'Quem mantém o UtilityFlow',
    orgP1:
      'O UtilityFlow é um projeto independente, criado e mantido por Bilal, um criador que desenvolve ferramentas web gratuitas nas horas vagas. Não há nenhuma empresa por trás do site, nenhum investimento externo e nenhuma equipe de funcionários — cada ferramenta, guia e página de ajuda é projetada, construída e testada por uma só pessoa. O projeto é mantido pela publicidade exibida no site, e é isso que mantém as 88 ferramentas gratuitas, sem contas e sem assinaturas. O crédito no rodapé menciona Shaheen, cujo incentivo inspirou o projeto e cujo nome aparece em todas as páginas como um lembrete de onde a ideia começou.',
    orgP2:
      'Como o projeto é pequeno e independente, as decisões continuam simples: se uma ferramenta está lenta, confusa ou errada, ela é corrigida. O feedback enviado pela página de contato vai direto para a pessoa que pode mudar o código, e sugestões de visitantes já deram origem a novas ferramentas e melhorias em todo o site.',
    howTitle: 'Como nossas ferramentas são criadas e testadas',
    howP1:
      'Cada utilitário começa com uma tarefa única e clara — contar palavras, unir PDFs, formatar JSON — e é construído como uma página focada, que faz bem esse trabalho. Sempre que os padrões web permitem, o trabalho acontece inteiramente dentro do seu navegador, então seus textos e arquivos nunca precisam sair do seu dispositivo. Cada página de ferramenta explica os passos com um guia curto, mostra exemplos práticos e responde às perguntas mais frequentes, para que você possa avaliar o resultado em vez de confiar em uma caixa-preta.',
    howP2:
      'Antes de uma ferramenta entrar no ar, ela é testada com entradas reais em um navegador de computador e em um navegador de celular, incluindo casos extremos como entrada vazia, textos muito longos e tipos de arquivo incomuns. Quando algo quebra ou um cálculo parece errado, a correção é publicada como uma atualização do site e a página é verificada novamente. As três ferramentas de IA opcionais são as únicas que enviam texto para um servidor, e suas páginas deixam isso claro antes de você usá-las.',
    whoTitle: 'Para quem é o UtilityFlow',
    whoP1:
      'O UtilityFlow foi feito para qualquer pessoa que precisa de uma resposta rápida de uma ferramenta, sem instalar programas nem criar uma conta: estudantes conferindo a contagem de palavras de uma redação, escritores formatando um rascunho, desenvolvedores validando JSON ou codificando uma URL, profissionais de marketing conferindo limites de caracteres e pequenos empresários calculando um empréstimo ou um desconto. Se uma tarefa leva menos de um minuto, a ferramenta para ela também deve levar menos de um minuto — esse é o padrão exigido de todas as páginas deste site.',
    principlesTitle: 'Princípios fundamentais de engenharia',
    principles: [
      {
        title: 'Execução no lado do cliente',
        description:
          'Utilitários de texto, código, matemática e arquivos locais processam as entradas na memória do navegador, para que seus dados de trabalho não sejam enviados a servidores remotos.',
      },
      {
        title: 'Avisos transparentes sobre APIs',
        description:
          'Se um utilitário especializado precisar de uma consulta externa ou de uma chamada ao servidor, informamos isso explicitamente na página da ferramenta antes de você executar qualquer coisa.',
      },
      {
        title: 'Interfaces acessíveis',
        description:
          'Navegação por teclado, contraste legível, feedback claro de erros e controles móveis responsivos já vêm integrados em cada modelo.',
      },
      {
        title: 'Lançamento modular',
        description:
          'As ferramentas são entregues e verificadas por categoria, para que cada utilitário receba testes funcionais e documentação completos.',
      },
    ],
    categoriesTitle: 'Sete categorias de ferramentas',
    feedbackTitle: 'Tem feedback ou uma sugestão?',
    feedbackBefore:
      'Se você notar um caso extremo de cálculo, um problema de acessibilidade ou quiser sugerir um novo utilitário, fale conosco pela nossa',
    feedbackLink: 'página de contato',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'Fale com o UtilityFlow – Suporte, bugs e sugestões',
    seoDescription:
      'Entre em contato com a equipe do UtilityFlow para relatar um problema, sugerir uma nova ferramenta, ou tirar dúvidas sobre privacidade, termos e suporte.',
    title: 'Fale conosco',
    intro:
      'Envie relatórios de bugs, sugestões de ferramentas ou dúvidas gerais. Lemos todas as mensagens e priorizamos correções que melhorem a precisão das ferramentas e a acessibilidade.',
    aboutTitle: 'Sobre o que você pode escrever',
    aboutP1:
      'Use este formulário para qualquer assunto relacionado ao site. Para relatar um bug, diga qual ferramenta você estava usando, o que você digitou e o que esperava que acontecesse — quanto mais detalhes você incluir, mais rápido o problema poderá ser reproduzido e corrigido. Para sugerir uma nova ferramenta, descreva a tarefa que ela deve resolver; ideias pedidas por muitos visitantes vão para o topo da lista. Você também pode apontar um cálculo errado, uma instrução confusa ou um erro de tradução em qualquer página.',
    aboutP2:
      'Dúvidas sobre privacidade e questões legais também são bem-vindas. Se um comentário que você publicou precisa ser removido, informe a página da ferramenta e o nome usado, e ele será retirado. Para qualquer outro assunto — uma ideia de parceria, uma pergunta da imprensa ou um comentário geral sobre o site — o mesmo formulário serve, ou você pode enviar um e-mail direto usando o endereço desta página.',
    responseTitle: 'O que acontece depois que você envia uma mensagem',
    responseP1:
      'Toda mensagem é lida pela pessoa que cria e mantém o UtilityFlow — não há equipe de suporte nem fila automática de respostas. Relatos de bugs e resultados errados são verificados primeiro, porque uma ferramenta quebrada afeta todas as pessoas que a usam. Sugestões de ferramentas são reunidas e avaliadas pelo número de pessoas que as usariam e por quão bem se encaixam na proposta do site de priorizar o navegador.',
    responseP2:
      'Você não precisa de uma conta para entrar em contato, e só usaremos seu endereço de e-mail para responder à sua mensagem. Se preferir não usar o formulário, o endereço de e-mail direto nesta página chega à mesma caixa de entrada.',
    name: 'Nome',
    email: 'Endereço de e-mail',
    topic: 'Assunto',
    message: 'Mensagem',
    submit: 'Enviar mensagem',
    namePlaceholder: 'Alex Rivera',
    emailPlaceholder: 'you@example.com',
    messagePlaceholder: 'Descreva a ferramenta, o bug ou a dúvida em detalhes...',
    topics: [
      'Sugestão de ferramenta',
      'Relatório de bug',
      'Correção de SEO ou conteúdo',
      'Dúvida sobre privacidade ou questões legais',
      'Pergunta geral',
    ],
    errors: {
      name: 'Digite seu nome.',
      emailEmpty: 'Digite seu endereço de e-mail.',
      emailInvalid: 'Digite um endereço de e-mail válido.',
      subject: 'Escolha ou digite um assunto.',
      message: 'Inclua pelo menos 10 caracteres na sua mensagem.',
    },
    successTitle: 'Mensagem enviada',
    successThanks:
      'Obrigado, {name}. Sua mensagem foi enviada e responderemos em breve.',
    successNote:
      'Se precisar acrescentar algo, você também pode falar conosco diretamente em',
    sending: 'Enviando…',
    sendError: 'Não foi possível enviar sua mensagem. Tente novamente.',
    sendAnother: 'Enviar outra mensagem',
    directEmail: 'E-mail direto',
    directEmailText: 'Prefere escrever diretamente? Envie um e-mail para nossa equipe em:',
  },
  privacy: {
    seoTitle: 'Política de privacidade | UtilityFlow — Ferramentas',
    seoDescription:
      'Leia a Política de Privacidade do UtilityFlow sobre execução de ferramentas no navegador, cookies, registros e divulgação de publicidade de terceiros.',
    title: 'Política de privacidade',
    lastUpdated: 'Última atualização: novembro de 2026',
    sections: [
      {
        title: '1. Visão geral',
        paragraphs: [
          'O UtilityFlow foi projetado em torno do processamento no navegador, no lado do cliente. Esta Política de Privacidade explica quais informações são processadas quando você visita nosso site, como nossos utilitários tratam os dados inseridos e como cookies ou tecnologias de publicidade podem funcionar.',
        ],
      },
      {
        title: '2. Entradas das ferramentas, processamento no navegador e ferramentas de IA gratuitas',
        paragraphs: [
          'Texto, números, trechos de código e arquivos inseridos em nossas 85 ferramentas de navegador são processados localmente na sessão do seu navegador, sem sair do seu dispositivo.',
          'Nossas três ferramentas de IA gratuitas opcionais (Assistente de escrita com IA, Resumidor de texto com IA e Buscador inteligente de ferramentas com IA) enviam o texto submetido por meio do nosso backend protegido para a Groq, para inferência em tempo real. Não armazenamos nem registramos seus comandos, e os limites diários gratuitos usam apenas um hash SHA-256 datado em UTC, para que os endereços IP brutos dos visitantes nunca sejam armazenados.',
          'Os comentários publicados nas nossas ferramentas pedem apenas um nome e o texto do comentário. O nome e o texto enviados são armazenados na nossa plataforma de hospedagem e exibidos publicamente na página daquela ferramenta, junto com a data. Não pedimos endereço de e-mail nem conta para comentar, e não usamos os dados dos comentários para publicidade. Se quiser que um comentário seja removido, entre em contato informando a página e o nome usado, e nós o excluiremos.',
        ],
      },
      {
        title: '3. Registros de hospedagem e telemetria técnica',
        paragraphs: [
          'O UtilityFlow é hospedado no Cloudflare Pages. Como os provedores de hospedagem web padrão, nossa rede de borda pode processar automaticamente metadados padrão de requisições HTTP (como endereço IP, user-agent do navegador, URL solicitada e carimbo de data/hora) para entregar as páginas com confiabilidade, mitigar abusos e manter a segurança.',
          'Não combinamos os registros de hospedagem com nenhum outro dado para identificar visitantes individualmente, e não vendemos nem compartilhamos dados de registro com anunciantes. Os registros existem apenas para manter o serviço funcionando e seguro.',
        ],
      },
      {
        title: '4. Cookies e publicidade de terceiros',
        paragraphs: [
          'Podemos exibir anúncios de redes de publicidade de terceiros (como o Google AdSense) para manter o acesso gratuito às nossas ferramentas. Fornecedores terceiros, incluindo o Google, podem usar cookies ou web beacons para exibir anúncios com base em visitas anteriores do usuário a este site ou a outros sites.',
          'Você pode desativar a publicidade personalizada visitando as Configurações de anúncios do Google ou gerenciando as preferências de cookies diretamente nas configurações do seu navegador.',
        ],
      },
      {
        title: '5. Links externos',
        paragraphs: [
          'Nossa documentação ou as páginas das ferramentas podem conter links para sites externos. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo de sites de terceiros.',
          'Os links externos abrem em uma nova aba sempre que possível. Antes de informar dados pessoais em qualquer site vinculado, revise a política de privacidade daquele site.',
        ],
      },
      {
        title: '6. Retenção de dados',
        paragraphs: [
          'As informações processadas no seu navegador nunca são enviadas para nós, então não há nada a reter. O texto enviado às ferramentas de IA opcionais é processado para atender à solicitação e não é armazenado. Os comentários são mantidos até serem excluídos, por nós ou a seu pedido. Os registros de hospedagem e de segurança são mantidos apenas pelo período limitado de que nosso provedor de hospedagem precisa para operar e proteger o serviço.',
        ],
      },
      {
        title: '7. Seus direitos e escolhas',
        paragraphs: [
          'Você pode desativar a publicidade personalizada nas Configurações de anúncios do Google ou na página de exclusão do AboutAds.info, mencionada na seção 4, e pode bloquear ou excluir cookies nas configurações do seu navegador a qualquer momento. Se você publicou um comentário, pode pedir a remoção dele entrando em contato conosco. Como nossas ferramentas rodam no seu navegador e não mantemos contas nem perfis, não há um arquivo de dados pessoais para baixar ou corrigir — mas qualquer dúvida sobre seus dados será respondida se você nos escrever.',
        ],
      },
      {
        title: '8. Privacidade de crianças',
        paragraphs: [
          'O UtilityFlow é um site de uso geral e não é dirigido a crianças menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças. Se você é pai, mãe ou responsável e acredita que uma criança publicou um comentário no site, entre em contato conosco e nós o removeremos.',
        ],
      },
      {
        title: '9. Alterações nesta política',
        paragraphs: [
          'Podemos atualizar esta Política de Privacidade quando adicionarmos ferramentas, trocarmos de provedor ou ajustarmos o funcionamento do site. A data de "Última atualização" no topo desta página mostra quando ela foi revisada pela última vez. O uso continuado do site após uma alteração significa que você aceita a política atualizada.',
        ],
      },
    ],
    contactTitle: '10. Contato',
    contactBefore:
      'Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pela nossa',
    contactLink: 'página de contato',
    contactMiddle: 'ou pelo e-mail',
    optOutGoogleAds: 'Configurações de anúncios do Google',
    optOutAboutAds: 'Exclusão de publicidade no AboutAds.info',
  },
  terms: {
    seoTitle: 'Termos de serviço do UtilityFlow | Ferramentas online',
    seoDescription:
      'Revise os Termos de Serviço que regem o uso dos utilitários do UtilityFlow, propriedade intelectual, avisos de precisão e limites de responsabilidade.',
    title: 'Termos de serviço',
    lastUpdated: 'Última atualização: novembro de 2026',
    sections: [
      {
        title: '2. Uso permitido',
        paragraphs: [
          'Você pode usar o UtilityFlow para tarefas de produtividade pessoais, educacionais e comerciais. Você concorda em não automatizar tráfego abusivo, tentar interromper a entrega do site, fazer engenharia reversa de proteções de segurança ou usar qualquer utilitário para atividades ilegais.',
          'Você pode criar links para nossas ferramentas e compartilhar os resultados delas. Você não pode apresentar nossas ferramentas como se fossem suas, copiar o design ou o conteúdo do site e republicá-los como um serviço concorrente, nem usar o site de forma a enganar outras pessoas sobre a origem de um resultado.',
        ],
      },
      {
        title: '3. Precisão e aviso de isenção de responsabilidade informativa',
        paragraphs: [
          'Embora testemos cada utilitário com cuidado, todas as ferramentas, cálculos, conversões e verificações de SEO são fornecidas "no estado em que se encontram" e "conforme disponíveis". Os resultados devem ser verificados de forma independente antes de tomar decisões financeiras, jurídicas, médicas ou de engenharia de produção.',
          'Cálculos como parcelas de empréstimo, estimativas de impostos e conversões de moeda são auxílios de planejamento, não aconselhamento profissional. Os valores podem mudar conforme taxas, regras e arredondamentos, então confirme números importantes com um profissional qualificado ou uma fonte oficial antes de agir com base neles.',
        ],
      },
      {
        title: '4. Propriedade intelectual',
        paragraphs: [
          'A interface do UtilityFlow, os recursos da marca, a documentação e o código-fonte são protegidos pelas leis de propriedade intelectual aplicáveis. Você mantém a propriedade total de qualquer texto, código, documento ou imagem que processar usando nossos utilitários no lado do cliente.',
        ],
      },
      {
        title: '5. Limitação de responsabilidade',
        paragraphs: [
          'Na máxima medida permitida por lei, o UtilityFlow e seus colaboradores não serão responsáveis por quaisquer danos indiretos, incidentais, especiais ou consequentes decorrentes do uso, ou da incapacidade de uso, desta plataforma.',
          'O UtilityFlow é um projeto independente e não é afiliado ao YouTube, Instagram, Google ou a qualquer outra marca de terceiros mencionada neste site, nem é endossado por elas ou está conectado a elas.',
        ],
      },
      {
        title: '6. Conteúdo do usuário e comentários',
        paragraphs: [
          'Você mantém a propriedade total de tudo o que digita em nossas ferramentas ou publica como comentário. Ao publicar um comentário, você nos dá permissão para exibi-lo publicamente na página da ferramenta correspondente. Não publique nada ilegal, enganoso ou prejudicial a outras pessoas, nem informações pessoais de terceiros. Podemos remover comentários que violem essas regras ou que sejam denunciados, sem aviso prévio.',
        ],
      },
      {
        title: '7. Serviços de terceiros',
        paragraphs: [
          'Alguns recursos dependem de serviços independentes de terceiros: as três ferramentas de IA enviam texto para a Groq para processamento, o formulário de contato é entregue pelo FormSubmit, o site é hospedado na Cloudflare e a publicidade é veiculada pelo Google AdSense. Cada um desses serviços tem seus próprios termos e política de privacidade, e o seu uso deles é regido por esses documentos. O UtilityFlow não é responsável pela disponibilidade nem pelas práticas de serviços de terceiros.',
        ],
      },
      {
        title: '8. Disponibilidade do serviço',
        paragraphs: [
          'O UtilityFlow é um serviço gratuito e não garantimos que todas as ferramentas estarão sempre disponíveis. As ferramentas podem ser alteradas, aprimoradas ou removidas, e o site pode ficar temporariamente indisponível para manutenção. Nosso objetivo é manter o serviço funcionando bem, mas não somos responsáveis por interrupções nem por perdas causadas por indisponibilidade.',
        ],
      },
    ],
    acceptanceTitle: '1. Aceitação dos termos',
    acceptanceBefore:
      'Ao acessar ou usar o UtilityFlow, você concorda em ficar vinculado a estes Termos de Serviço e à nossa',
    acceptanceLink: 'Política de privacidade',
    acceptanceAfter:
      '. Se você não concordar com qualquer parte destes termos, interrompa o uso do site.',
    changesTitle: '9. Alterações e contato',
    changesBefore:
      'Podemos atualizar estes Termos de Serviço conforme novas ferramentas forem lançadas. Dúvidas podem ser enviadas para nossa',
    changesLink: 'página de contato',
    changesAfter: '.',
  },
};
