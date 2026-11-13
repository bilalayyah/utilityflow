import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — AI tools (3 tools: ai-writing-assistant,
 * ai-text-summarizer, ai-tool-finder). Same shape as the batch files;
 * include apiNotice where the English tool carries one.
 * Source: src/registry/aiTools.ts and src/locales/es/tools/ai.ts.
 * Note: the AI workbench components send text to Groq; do not claim the AI
 * tools run locally in the browser.
 */
export const PT_AI_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'ai-writing-assistant': {
    slug: 'assistente-de-escrita-ia',
    name: 'Assistente de Escrita com IA',
    shortDescription:
      'Corrija gramática, reescreva frases, ajuste o tom, parafraseie, amplie ideias e redija e-mails claros grátis, sem cadastro.',
    keywords: [
      'assistente de escrita com ia',
      'corretor de gramática grátis',
      'reescritor de frases',
      'parafraseador de texto',
      'conversor de tom',
      'assistente de redação de e-mails',
      'correção de ortografia',
      'simplificador de frases',
      'corretor de texto com ia',
    ],
    seo: {
      title: 'Assistente de Escrita com IA: Gramática | UtilityFlow',
      description:
        'Corrija gramática, reescreva frases, ajuste o tom, simplifique ou amplie parágrafos, parafraseie texto e escreva e-mails claros grátis, sem cadastro ou conta.',
      primaryKeyword: 'assistente de escrita com ia',
      secondaryKeywords: [
        'corretor de gramática grátis com ia',
        'reescritor de frases com ia',
        'parafraseador de texto com ia',
        'assistente de escrita de e-mails com ia',
      ],
      longTailKeywords: [
        'assistente de escrita com ia grátis sem cadastro',
        'deixar texto mais profissional com ferramenta de ia',
        'reescrever parágrafo preservando o sentido grátis',
        'corrigir gramática e ortografia online grátis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% grátis, sem login, assinatura ou créditos. Limite gratuito: até 5 solicitações de escrita por dia por visitante (máximo de 12.000 caracteres), com inferência gratuita da Groq, sem armazenar seu texto.',
    intro:
      'Refine rascunhos de forma limpa em segundos, sem criar uma conta. Escolha entre 10 tarefas de escrita — incluindo correção de gramática, paráfrase, mudança de tom, simplificação de frases e redação de e-mails — preservando estritamente seu sentido e seus fatos originais.',
    instructions: [
      {
        title: 'Cole ou escreva seu texto',
        description:
          'Digite até 12.000 caracteres no editor. Use os contadores ao vivo de palavras e caracteres para verificar o tamanho do rascunho antes de gerar.',
      },
      {
        title: 'Escolha uma tarefa de escrita, tom e idioma',
        description:
          'Selecione uma das 10 tarefas de escrita (como Corrigir Gramática, Deixar Profissional, Parafrasear ou Escrever um E-mail), combine um tom de Profissional a Simples e escolha o idioma de saída alvo.',
      },
      {
        title: 'Clique em Gerar para processar sua solicitação',
        description:
          'Pressione Gerar e aguarde alguns segundos enquanto a solicitação é enviada à Groq para inferência. Um indicador de progresso aparece enquanto seu texto melhorado é produzido.',
      },
      {
        title: 'Revise e compare o texto original com o melhorado',
        description:
          'Confira a visualização lado a lado ou os destaques de mudanças por palavra para ver exatamente o que mudou e confirme se nomes, números e datas ficaram intactos.',
      },
      {
        title: 'Copie ou baixe o resultado',
        description:
          'Use o botão Copiar para mover o texto melhorado para sua área de transferência, ou baixe-o como arquivo TXT para usar no seu documento ou cliente de e-mail.',
      },
      {
        title: 'Experimente outra tarefa ou tom se precisar',
        description:
          'Se o resultado não estiver certo, mude a tarefa ou o tom e gere novamente — por exemplo, experimente Deixar Simples depois de Deixar Profissional — lembrando do limite diário gratuito.',
      },
    ],
    examples: [
      {
        title: 'Limpeza de gramática e ortografia',
        input:
          'Hi team, i wanted to folow up on yesterday meeting and share the update timeline for Q4 launch.',
        output:
          'Hi team, I wanted to follow up on yesterday’s meeting and share the updated timeline for the Q4 launch.',
        explanation:
          'Tarefa: Corrigir Gramática · Tom: Profissional. Corrige maiúsculas, concordância verbal e ortografia mantendo sua voz exata.',
      },
      {
        title: 'Anotações soltas virando e-mail pronto',
        input:
          'ask client sarah if thursday 2pm works for design review call, mention mockup v2 ready and link attached',
        output:
          'Subject: Design Review Call & Mockup v2\n\nHi Sarah,\n\nI wanted to let you know that Mockup v2 is ready and attached for your review. Would Thursday at 2:00 PM work for a quick design review call?\n\nBest regards,',
        explanation:
          'Tarefa: Escrever um E-mail · Tom: Amigável. Estrutura anotações em tópicos em um e-mail educado e factual, sem inventar detalhes.',
      },
    ],
    benefits: [
      'Acesso 100% grátis, sem cadastro, login ou assinatura',
      '10 modos de escrita especializados, 7 tons predefinidos e saída em vários idiomas',
      'Preserva nomes, números, datas e sentido sem fabricar fatos',
      'Comparação lado a lado com destaque de mudanças por palavra, além de cópia com um clique e exportação em TXT',
    ],
    useCases: [
      'Aprimorar e-mails, propostas e atualizações de status para clientes antes de enviar',
      'Corrigir erros de gramática, pontuação e ortografia em ensaios ou relatórios',
      'Simplificar parágrafos técnicos densos para públicos mais amplos',
      'Converter rascunhos de conversa casual em comunicação formal de trabalho',
    ],
    faqs: [
      {
        question: 'O Assistente de Escrita com IA é totalmente gratuito, sem cadastro?',
        answer:
          'Sim. Você não precisa criar uma conta, informar um e-mail ou adicionar um cartão de pagamento. Os visitantes recebem até 5 solicitações de escrita gratuitas por dia UTC.',
      },
      {
        question: 'A IA inventa fatos novos ao reescrever ou ampliar textos?',
        answer:
          'Não. Nosso prompt de sistema instrui o modelo a preservar estritamente todos os fatos, nomes, datas e números originais e evitar fabricar estatísticas ou afirmações.',
      },
      {
        question: 'Minha escrita é armazenada ou registrada pelo UtilityFlow?',
        answer:
          'O UtilityFlow não armazena, registra nem vende seu texto. As solicitações são enviadas com segurança pelo nosso back-end à Groq para inferência, e o controle de cota de visitantes usa apenas um hash SHA-256 diário com salt.',
      },
      {
        question: 'O que acontece se eu atingir o limite diário gratuito?',
        answer:
          'Os limites diários são zerados automaticamente à meia-noite UTC. Enquanto isso, todas as 85+ ferramentas locais de navegador — incluindo Contador de Palavras, Verificador de Legibilidade e Comparador de Texto — funcionam sem limites.',
      },
      {
        question: 'Quais tarefas de escrita o Assistente de Escrita com IA consegue fazer?',
        answer:
          'Ele oferece 10 tarefas, incluindo Corrigir Gramática, Deixar Profissional, Parafrasear, Simplificar, Ampliar, Resumir, Escrever um E-mail, Melhorar Clareza, Mudar Tom e Corrigir Ortografia.',
      },
      {
        question: 'Qual pode ser o tamanho do meu texto no Assistente de Escrita com IA?',
        answer:
          'Cada solicitação aceita até 12.000 caracteres. Para documentos mais longos, divida o texto em seções e processe uma por vez.',
      },
      {
        question: 'Quais tons posso escolher para meu texto reescrito?',
        answer:
          'Você pode escolher entre 7 tons predefinidos, incluindo Profissional, Amigável, Formal, Casual, Simples, Confiante e Conciso, dependendo do seu público.',
      },
      {
        question: 'O Assistente de Escrita com IA envia meu texto para um serviço externo?',
        answer:
          'Sim. Seu texto é enviado com segurança à Groq para inferência de IA pelo nosso worker de back-end, porque as tarefas de escrita precisam de um modelo de linguagem. Ele não é armazenado nem registrado pelo UtilityFlow.',
      },
      {
        question: 'O Assistente de Escrita com IA consegue escrever um e-mail completo a partir de anotações soltas?',
        answer:
          'Sim. Escolha a tarefa Escrever um E-mail, cole seus tópicos ou anotações soltas, e ele vai estruturá-los em um e-mail educado com linha de assunto e saudação.',
      },
      {
        question: 'O Assistente de Escrita com IA vai mudar o sentido do meu texto?',
        answer:
          'Ele é instruído a preservar seu sentido original, fatos, nomes, datas e números. Sempre revise a comparação lado a lado antes de usar o resultado.',
      },
      {
        question: 'Posso usar o Assistente de Escrita com IA para ensaios acadêmicos?',
        answer:
          'Sim, ele pode corrigir gramática e melhorar a clareza em ensaios e relatórios. Confira primeiro as regras da sua instituição, pois algumas escolas restringem a escrita assistida por IA.',
      },
      {
        question: 'O Assistente de Escrita com IA funciona em idiomas além do inglês?',
        answer:
          'Sim. Você pode escolher um idioma de saída alvo, e a ferramenta vai produzir o texto melhorado nesse idioma mantendo seus fatos inalterados.',
      },
      {
        question: 'Como vejo exatamente o que a IA mudou no meu texto?',
        answer:
          'A visualização do resultado destaca mudanças por palavra e mostra seu texto original e o melhorado lado a lado, para que você possa aceitar ou rejeitar cada edição mentalmente antes de copiar.',
      },
      {
        question: 'O Assistente de Escrita com IA pode parafrasear texto para evitar repetição?',
        answer:
          'Sim. A tarefa Parafrasear reescreve frases com palavras diferentes mantendo o mesmo sentido, o que é útil para rascunhos variados e resumos.',
      },
      {
        question: 'O que devo fazer se o texto gerado tiver um erro?',
        answer:
          'Edite o resultado diretamente, ou execute o texto novamente com outra tarefa ou tom. A saída de IA pode conter erros, então revise textos importantes antes de enviá-los.',
      },
      {
        question: 'Há um limite de palavras por solicitação no Assistente de Escrita com IA?',
        answer:
          'O limite é de 12.000 caracteres por solicitação, o que cobre cerca de 1.800 a 2.000 palavras em inglês. Textos mais curtos geralmente geram resultados mais rápidos e precisos.',
      },
      {
        question: 'Qual é a diferença entre o Assistente de Escrita com IA e o Contador de Palavras?',
        answer:
          'O Contador de Palavras só mede palavras, caracteres e tempo de leitura localmente, enquanto o Assistente de Escrita com IA reescreve e melhora seu texto usando o modelo de linguagem da Groq.',
      },
      {
        question: 'O Assistente de Escrita com IA pode deixar meu texto mais curto ou mais longo?',
        answer:
          'Sim. Use a tarefa Simplificar para encurtar parágrafos densos, ou Ampliar para adicionar detalhes e explicações mantendo seus fatos originais intactos.',
      },
      {
        question: 'Posso baixar meu texto melhorado como arquivo?',
        answer:
          'Sim. Depois de gerar, clique na opção de download para salvar o texto melhorado como arquivo TXT no seu dispositivo.',
      },
      {
        question: 'O que acontece se minha solicitação falhar ou expirar?',
        answer:
          'Confira sua conexão com a internet e tente novamente. Se o limite diário gratuito foi atingido, a ferramenta vai informar, e o limite é zerado à meia-noite UTC.',
      },
    ],
  },
  'ai-text-summarizer': {
    slug: 'resumidor-de-texto-ia',
    name: 'Resumidor de Texto com IA',
    shortDescription:
      'Condense artigos, relatórios e anotações em resumos curtos, médios ou longos, com tópicos e pontos principais, grátis.',
    keywords: [
      'resumidor de texto com ia',
      'resumidor de artigo grátis',
      'resumo em tópicos',
      'extrator de pontos principais',
      'resumidor de parágrafo',
      'resumo em linguagem simples',
      'calculadora de tempo de leitura',
      'resumir texto longo online',
      'gerador de resumo com ia grátis',
    ],
    seo: {
      title: 'Resumidor de Texto com IA – Resumos Curtos | UtilityFlow',
      description:
        'Resuma artigos longos, notas de pesquisa e relatórios em parágrafos curtos, tópicos ou pontos principais — grátis, rápido e sem necessidade de cadastro.',
      primaryKeyword: 'resumidor de texto com ia',
      secondaryKeywords: [
        'resumidor de artigo grátis',
        'resumidor de texto em tópicos',
        'extrair pontos principais com ia',
        'gerador de resumo de parágrafo',
      ],
      longTailKeywords: [
        'resumidor de texto com ia grátis sem cadastro',
        'resumir artigo longo preservando números e fatos',
        'resumidor de texto curto médio longo online',
        'resumir artigo de pesquisa em tópicos',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% grátis, sem login, assinatura ou créditos. Limite gratuito: até 5 resumos por dia por visitante (até 25.000 caracteres por solicitação), com inferência gratuita da Groq, sem armazenar seu texto.',
    intro:
      'Destile artigos longos, relatórios, ensaios e transcrições de reuniões em resumos nítidos, sem criar uma conta. Escolha tamanhos Curto (10–20%), Médio (30–40%) ou Longo (50–60%) nos formatos de parágrafo, tópicos, pontos principais e linguagem simples, preservando nomes, números e datas.',
    instructions: [
      {
        title: 'Cole ou digite seu texto de origem',
        description:
          'Digite pelo menos 25 palavras (mais de 120 caracteres) até 25.000 caracteres. Confira a contagem de palavras ao vivo e o tempo estimado de leitura abaixo do editor.',
      },
      {
        title: 'Escolha tamanho, formato e idioma do resumo',
        description:
          'Selecione a compressão Curta, Média ou Longa (Detalhada), escolha a formatação Parágrafo, Tópicos, Pontos Principais ou Linguagem Simples e escolha um idioma de saída.',
      },
      {
        title: 'Clique em Resumir para gerar o resumo',
        description:
          'Pressione Resumir Texto e aguarde alguns segundos enquanto seu texto é enviado à Groq para inferência de IA. Um indicador de progresso aparece enquanto o resumo é produzido.',
      },
      {
        title: 'Compare o tempo de leitura e confira o resultado',
        description:
          'Revise o tempo de leitura economizado, compare o resumo com o texto original e verifique se os nomes, números e datas principais continuam corretos.',
      },
      {
        title: 'Copie ou baixe o resumo',
        description:
          'Use o botão Copiar para mover o resumo para sua área de transferência, ou baixe-o como arquivo TXT para suas anotações, relatório ou material de estudo.',
      },
      {
        title: 'Experimente outro tamanho ou formato se precisar',
        description:
          'Se o resumo estiver curto ou detalhado demais, mude o tamanho ou o formato e resuma novamente — por exemplo, experimente Tópicos depois de um resumo em Parágrafo.',
      },
    ],
    examples: [
      {
        title: 'Resumo executivo em tópicos',
        input:
          'Um estudo de engenharia de 160 palavras comparando atualizações escritas duas vezes por semana com reuniões diárias entre 140 engenheiros.',
        output:
          '- Estudo com 140 engenheiros em Londres, Berlim e Toronto ao longo de seis meses.\n- Substituir três sincronizações semanais por resumos duas vezes por semana reduziu a fragmentação da agenda em 28% e aumentou a entrega de sprints em 14%.\n- O sucesso dependeu de bloqueios antecipados, links de PR e datas exatas.',
        explanation:
          'Tamanho: Curto · Formato: Resumo em Tópicos. Preserva tamanho da amostra, locais e porcentagens exatas.',
      },
      {
        title: 'Resumo longo de artigo de pesquisa',
        input:
          'Artigo de pesquisa de 3.000 palavras com metodologia, resultados e conclusões.',
        output:
          'Resumo longo com metodologia, principais achados e conclusões preservados, em cerca de 50% do tamanho original.',
        explanation:
          'Tamanho: Longo · Formato: Parágrafo. Mantém detalhes de metodologia e achados para revisão de estudo.',
      },
    ],
    benefits: [
      'Acesso gratuito e anônimo, sem contas, assinaturas ou créditos',
      'Controles de resumo Curto (10–20%), Médio (30–40%) e Longo (50–60%)',
      'Modos Parágrafo, Tópicos, Extração de Pontos Principais e Linguagem Simples',
      'Preserva nomes, estatísticas, datas e fatos sem inventar detalhes, com comparação de tempo de leitura e download em TXT',
    ],
    useCases: [
      'Transformar artigos longos ou resumos de pesquisa em anotações rápidas em tópicos',
      'Resumir transcrições de reuniões e extrair pontos de ação numerados',
      'Traduzir e condensar documentos de vários parágrafos em conclusões claras',
      'Estimar a economia de tempo de leitura antes de compartilhar resumos executivos',
    ],
    faqs: [
      {
        question: 'Por que o Resumidor de Texto com IA exige pelo menos 25 palavras?',
        answer:
          'Textos com menos de 25 palavras ou 120 caracteres são curtos demais para comprimir de forma relevante sem perder contexto essencial, então a ferramenta pede que você adicione mais texto de origem primeiro.',
      },
      {
        question: 'O resumidor muda nomes, números ou datas?',
        answer:
          'Não. Nossas instruções de resumo exigem estritamente manter números, datas, nomes e relações factuais originais intactos, sem adicionar afirmações externas.',
      },
      {
        question: 'Como o tempo estimado de leitura é calculado?',
        answer:
          'O tempo estimado de leitura usa uma velocidade média de leitura silenciosa de 200 palavras por minuto tanto para seu texto original quanto para o resumo gerado, para que você veja o tempo economizado de relance.',
      },
      {
        question: 'Há algum limite ou cobrança para usar o Resumidor de Texto com IA?',
        answer:
          'A ferramenta é totalmente gratuita, sem cobrança ou cadastro. Os visitantes recebem até 5 resumos gratuitos por dia UTC, e todas as 85 ferramentas locais de navegador continuam ilimitadas.',
      },
      {
        question: 'Quais tamanhos de resumo o Resumidor de Texto com IA oferece?',
        answer:
          'Você pode escolher resumos Curto (10–20% do original), Médio (30–40%) ou Longo (50–60%), dependendo de quanto detalhe você quer manter.',
      },
      {
        question: 'Quais formatos de resumo posso escolher?',
        answer:
          'A ferramenta oferece os formatos Parágrafo, Tópicos, Extração de Pontos Principais e Linguagem Simples, para que você combine o resumo com anotações, relatórios ou material de estudo.',
      },
      {
        question: 'Qual pode ser o tamanho do texto que eu resumo?',
        answer:
          'Cada solicitação aceita entre 25 palavras e 25.000 caracteres. Para documentos mais longos, divida-os em seções e resuma cada parte separadamente.',
      },
      {
        question: 'O Resumidor de Texto com IA envia meu texto para um serviço externo?',
        answer:
          'Sim. Seu texto é enviado com segurança à Groq para inferência de IA pelo nosso worker de back-end, porque o resumo precisa de um modelo de linguagem. Ele não é armazenado nem registrado pelo UtilityFlow.',
      },
      {
        question: 'O Resumidor de Texto com IA consegue resumir transcrições de reuniões?',
        answer:
          'Sim. Cole a transcrição e escolha o formato Pontos Principais ou Tópicos para extrair decisões, itens de ação e pontos principais da discussão rapidamente.',
      },
      {
        question: 'O resumo vai manter os fatos e números originais?',
        answer:
          'O resumidor é instruído a preservar nomes, estatísticas, datas e relações factuais. Ainda assim, revise o resumo em relação ao original para documentos importantes.',
      },
      {
        question: 'Posso resumir artigos de pesquisa com o Resumidor de Texto com IA?',
        answer:
          'Sim. Cole o resumo ou o texto completo e use o formato Longo para manter detalhes de metodologia e achados, ou o formato Curto para uma visão rápida.',
      },
      {
        question: 'O Resumidor de Texto com IA funciona em idiomas além do inglês?',
        answer:
          'Sim. Você pode selecionar um idioma de saída, e o resumo será produzido nesse idioma mantendo os fatos originais inalterados.',
      },
      {
        question: 'Como o tempo de leitura economizado é calculado no Resumidor de Texto com IA?',
        answer:
          'A ferramenta compara o tempo estimado de leitura do seu texto original com o do resumo, usando uma velocidade média de leitura silenciosa de 200 palavras por minuto.',
      },
      {
        question: 'O Resumidor de Texto com IA consegue criar uma versão em linguagem simples de um texto?',
        answer:
          'Sim. Escolha o formato Linguagem Simples para obter uma versão simples e fácil de ler de textos complexos ou técnicos, útil para estudantes e não especialistas.',
      },
      {
        question: 'O que devo fazer se o resumo perder um ponto importante?',
        answer:
          'Experimente o formato Longo ou Pontos Principais, que mantêm mais detalhes. Você também pode dividir o texto e resumir a seção perdida separadamente.',
      },
      {
        question: 'O Resumidor de Texto com IA é bom para estudar e revisar para provas?',
        answer:
          'Sim. Resuma capítulos ou anotações de aula em tópicos e pontos principais e revise a versão curta antes das provas para relembrar as ideias principais.',
      },
      {
        question: 'Qual é a diferença entre o Resumidor de Texto com IA e o Assistente de Escrita com IA?',
        answer:
          'O Resumidor condensa textos longos em versões mais curtas, enquanto o Assistente de Escrita corrige gramática, reescreve frases e muda o tom sem encurtar o texto.',
      },
      {
        question: 'O que acontece quando eu atingo o limite diário de resumos?',
        answer:
          'O limite é zerado automaticamente à meia-noite UTC. Até lá, você pode usar as ferramentas locais de navegador, como Contador de Palavras e Verificador de Densidade de Palavras-chave, sem limites.',
      },
      {
        question: 'O Resumidor de Texto com IA consegue lidar com PDFs ou páginas da web diretamente?',
        answer:
          'Não. Cole o próprio texto no editor. Para PDFs, use primeiro o Extrator de Texto de PDF para copiar o texto e depois cole-o no resumidor.',
      },
      {
        question: 'O Resumidor de Texto com IA adiciona informações novas ao meu resumo?',
        answer:
          'Não. Ele é instruído a resumir apenas o que está no seu texto e a não adicionar afirmações externas, mas você ainda deve conferir o resultado quanto à precisão.',
      },
    ],
  },
  'ai-tool-finder': {
    slug: 'buscador-de-ferramentas-ia',
    name: 'Buscador Inteligente de Ferramentas com IA',
    shortDescription:
      'Descreva sua tarefa em português simples — com erros de digitação ou fraseado natural — para encontrar a melhor ferramenta do UtilityFlow na hora.',
    keywords: [
      'buscador de ferramentas com ia',
      'busca inteligente de ferramentas',
      'encontrar ferramenta utilitária',
      'recomendar ferramenta online',
      'busca de ferramenta em linguagem natural',
      'encontrar ferramenta grátis online',
      'recomendador de ferramentas utilitárias',
      'buscar ferramentas por tarefa',
      'buscador de ferramentas por tarefa',
    ],
    seo: {
      title: 'Buscador Inteligente de Ferramentas com IA | UtilityFlow',
      description:
        'Descreva o que você precisa em linguagem simples para descobrir a ferramenta certa entre as 88 do UtilityFlow — rápido, grátis e sem links inventados.',
      primaryKeyword: 'buscador inteligente de ferramentas com ia',
      secondaryKeywords: [
        'buscador de ferramentas online',
        'encontrar a ferramenta utilitária certa',
        'recomendador de ferramentas com ia',
        'busca de ferramentas utilityflow',
      ],
      longTailKeywords: [
        'encontrar ferramenta online grátis para minha tarefa',
        'buscar ferramentas utilitárias por problema em linguagem simples',
        'descoberta de ferramentas com ia sem cadastro',
        'qual ferramenta online preciso para pdf',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    apiNotice:
      '100% grátis, sem login, assinatura ou créditos. Pesquisa nosso inventário verificado de 85 ferramentas de navegador + 2 ferramentas de IA (até 10 buscas com IA por dia + correspondência instantânea por palavras-chave ilimitada).',
    intro:
      'Não sabe qual ferramenta resolve sua tarefa? Descreva seu objetivo em linguagem simples — mesmo com erros de ortografia ou fraseado informal — e nosso comparador híbrido de palavras-chave + IA da Groq recomenda ferramentas verificadas do catálogo ativo do UtilityFlow com justificativas claras.',
    instructions: [
      {
        title: 'Descreva sua tarefa ou selecione um prompt rápido',
        description:
          'Digite uma solicitação em linguagem simples como "Quero reduzir o tamanho da minha imagem para 100KB" ou "converter PDF em PNG", ou clique em qualquer modelo de tarefa rápida.',
      },
      {
        title: 'Filtre por categoria se precisar',
        description:
          'Restrinja as recomendações a ferramentas de Texto e Escrita, Desenvolvedor, Calculadoras, Redes Sociais, PDF, SEO ou Imagem e Arquivo — ou pesquise nas 87 ferramentas de uma só vez.',
      },
      {
        title: 'Execute a busca e revise os resultados',
        description:
          'Envie sua solicitação para obter correspondências instantâneas por palavras-chave, ou use uma busca assistida por IA para correspondência semântica. Os resultados são classificados por relevância para sua tarefa.',
      },
      {
        title: 'Confira justificativas e alternativas',
        description:
          'Leia a justificativa de uma frase de cada recomendação e confira a lista de alternativas para comparar ferramentas parecidas antes de escolher uma.',
      },
      {
        title: 'Abra a ferramenta verificada',
        description:
          'Clique em Abrir Ferramenta para iniciar a ferramenta recomendada imediatamente. Cada link é verificado no registro ativo, então sempre abre uma ferramenta real.',
      },
      {
        title: 'Experimente outro fraseado se não houver resultado',
        description:
          'Se o buscador informar que não há correspondência exata, reformule sua tarefa com palavras mais simples ou outro filtro de categoria, e confira a nota honesta de sem correspondência para a opção mais próxima.',
      },
    ],
    examples: [
      {
        title: 'Comprimindo uma imagem para 100KB',
        input: 'Quero reduzir o tamanho da minha imagem para 100KB.',
        output: 'Recomendado: Compressor de Imagens (/compressor-de-imagens/)',
        explanation:
          'Corresponde ao Compressor de Imagens do navegador e sugere o Redimensionador e Cortador de Imagens ou o Conversor de Formato de Imagem como alternativas.',
      },
      {
        title: 'Tratamento honesto de sem correspondência',
        input: 'Preciso converter um PDF para Word.',
        output: 'Nenhum conversor exato de PDF para DOCX disponível; indica o Extrator de Texto de PDF para texto puro.',
        explanation:
          'Nunca inventa ferramentas que faltam nem finge que uma ferramenta aceita formatos que ela não aceita.',
      },
    ],
    benefits: [
      'Busca gratuita em linguagem natural em todas as 85 ferramentas de navegador e 2 ferramentas de IA',
      'Correspondência instantânea local por palavras-chave tolerante a erros de digitação, além de classificação semântica com IA da Groq',
      'A verificação rigorosa do inventário garante zero ferramentas inventadas ou links quebrados',
      'Mostra justificativa clara de uma frase e até 3 alternativas',
    ],
    useCases: [
      'Encontrar a ferramenta certa de PDF, imagem ou texto sem navegar por todas as categorias',
      'Combinar objetivos em português simples com ferramentas exatas de navegador e formatos aceitos',
      'Verificar honestamente se o UtilityFlow atualmente aceita um formato de arquivo especializado',
      'Descobrir rapidamente qual ferramenta resolve uma tarefa de SEO, PDF ou imagem a partir de uma frase simples',
    ],
    faqs: [
      {
        question: 'O Buscador Inteligente de Ferramentas com IA recomenda ferramentas que não existem?',
        answer:
          'Não. Toda recomendação retornada pela IA é verificada rigorosamente no nosso registro ativo de ferramentas antes de ser exibida. Se não houver ferramenta correspondente, o buscador informa honestamente.',
      },
      {
        question: 'O que acontece se eu cometer erros de ortografia na minha busca?',
        answer:
          'Nosso classificador local de palavras-chave inclui tolerância a erros de digitação por distância de edição e sinônimos de tarefas, e o classificador de IA da Groq interpreta fraseado natural e erros de ortografia automaticamente.',
      },
      {
        question: 'Quantas buscas posso fazer de graça?',
        answer:
          'A correspondência instantânea local por palavras-chave é ilimitada, e os visitantes recebem até 10 buscas gratuitas assistidas por IA por dia UTC, sem cadastro ou pagamento.',
      },
      {
        question: 'Como o Buscador Inteligente de Ferramentas com IA entende minha solicitação?',
        answer:
          'Ele combina correspondência instantânea local por palavras-chave com classificação semântica de IA da Groq, então entende objetivos em linguagem simples, sinônimos e fraseado natural — não só nomes exatos de ferramentas.',
      },
      {
        question: 'Quais ferramentas o Buscador Inteligente de Ferramentas com IA pode recomendar?',
        answer:
          'Ele pesquisa o catálogo completo do UtilityFlow de 88 ferramentas: 85 ferramentas de navegador nas categorias de texto, desenvolvedor, calculadora, social, PDF, SEO e imagem, além do Assistente de Escrita com IA e do Resumidor de Texto com IA.',
      },
      {
        question: 'O Buscador Inteligente de Ferramentas com IA envia minha busca para um serviço externo?',
        answer:
          'Buscas assistidas por IA enviam o texto da sua solicitação à Groq para correspondência semântica pelo nosso worker de back-end. A correspondência instantânea por palavras-chave acontece localmente no seu navegador e não envia nada.',
      },
      {
        question: 'Posso buscar uma ferramenta por formato de arquivo, como PDF ou PNG?',
        answer:
          'Sim. Mencione o formato na sua solicitação, por exemplo "converter PDF em PNG", e o buscador vai recomendar ferramentas que aceitam esse formato, como PDF para Imagens.',
      },
      {
        question: 'O que o Buscador Inteligente de Ferramentas com IA faz se nenhuma ferramenta corresponder à minha tarefa?',
        answer:
          'Ele informa honestamente que não existe correspondência exata e sugere a ferramenta disponível mais próxima, em vez de inventar uma ferramenta ou um link quebrado.',
      },
      {
        question: 'Posso filtrar as recomendações de ferramentas por categoria?',
        answer:
          'Sim. Use o filtro de categoria para limitar os resultados a ferramentas de Texto e Escrita, Desenvolvedor, Calculadoras, Redes Sociais, PDF, SEO ou Imagem e Arquivo antes de buscar.',
      },
      {
        question: 'Como funcionam os modelos de tarefas rápidas no Buscador Inteligente de Ferramentas com IA?',
        answer:
          'Os modelos rápidos são solicitações de exemplo com um clique, como reduzir uma imagem para 100KB, que mostram como formular uma tarefa e retornam na hora a ferramenta correspondente.',
      },
      {
        question: 'Por que cada recomendação inclui uma justificativa?',
        answer:
          'Cada resultado mostra uma explicação de uma frase sobre por que a ferramenta corresponde ao seu objetivo, incluindo formatos aceitos, para que você possa avaliar o ajuste antes de abrir.',
      },
      {
        question: 'O Buscador Inteligente de Ferramentas com IA pode recomendar ferramentas de IA também?',
        answer:
          'Sim. Ele pode recomendar o Assistente de Escrita com IA para gramática e reescrita, e o Resumidor de Texto com IA para condensar textos longos, quando sua tarefa se encaixar nessas ferramentas.',
      },
      {
        question: 'O Buscador Inteligente de Ferramentas com IA é gratuito?',
        answer:
          'Sim. A correspondência por palavras-chave é ilimitada e gratuita, e as buscas assistidas por IA são gratuitas até 10 por dia por visitante, sem conta, login ou pagamento.',
      },
      {
        question: 'O que devo fazer se a recomendação principal não estiver certa?',
        answer:
          'Confira a lista de alternativas abaixo do resultado principal, ou reformule sua solicitação com mais detalhes — por exemplo, informe o formato do arquivo ou a saída exata que você precisa.',
      },
      {
        question: 'Posso usar o Buscador Inteligente de Ferramentas com IA para encontrar uma calculadora?',
        answer:
          'Sim. Descreva o cálculo em palavras simples, como "calcular minha parcela mensal de empréstimo", e ele vai recomendar a Calculadora de Parcela de Empréstimo ou uma calculadora relacionada.',
      },
      {
        question: 'Qual é a diferença entre o Buscador Inteligente de Ferramentas com IA e a página de diretório de Ferramentas?',
        answer:
          'O diretório de Ferramentas lista todas as 88 ferramentas por categoria para navegação, enquanto o Buscador de Ferramentas combina sua tarefa em linguagem simples com a melhor ferramenta e explica por que ela se encaixa.',
      },
      {
        question: 'O Buscador Inteligente de Ferramentas com IA pode ajudar com tarefas de SEO?',
        answer:
          'Sim. Peça coisas como "verificar o tamanho da minha meta descrição" ou "gerar um sitemap", e ele vai indicar o Gerador de Meta Tags, o Gerador de Sitemap XML ou o Verificador de SEO On-Page.',
      },
      {
        question: 'O que acontece quando eu atingo o limite diário de buscas com IA?',
        answer:
          'O limite de buscas com IA é zerado à meia-noite UTC. Até lá, a correspondência instantânea por palavras-chave continua funcionando sem limites, então você ainda pode encontrar ferramentas por palavras-chave.',
      },
      {
        question: 'O Buscador Inteligente de Ferramentas com IA pode recomendar ferramentas para edição de imagem?',
        answer:
          'Sim. Descreva sua tarefa de imagem, como "comprimir esta foto" ou "redimensionar uma imagem", e ele vai recomendar o Compressor de Imagens, o Redimensionador de Imagens ou o Conversor de Formato de Imagem.',
      },
      {
        question: 'Os links do Buscador Inteligente de Ferramentas com IA sempre funcionam?',
        answer:
          'Sim. Toda recomendação é verificada no registro ativo de ferramentas antes de ser exibida, então os links sempre abrem uma página real e funcional de ferramenta do UtilityFlow.',
      },
    ],
  },
};
