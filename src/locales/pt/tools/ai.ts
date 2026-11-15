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
  },
};
