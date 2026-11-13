import type { ComponentLocaleData } from '../types';

/**
 * Workbench-component strings for the pt locale.
 * GENERATED — assembled from .restructure-work fragments (group1/group2 JSON
 * + group2-ts TypeScript for function-valued entries). Do not hand-edit;
 * the source of truth is the per-component STRINGS_EN tables plus these
 * per-language fragments. Loaded only when the pt locale is selected.
 */
export const ptComponentStrings: Record<string, ComponentLocaleData> = {
"case-converter": {
    "strings": {
      "textToConvert": "Texto para converter maiúsculas e minúsculas",
      "placeholder": "Digite ou cole texto e clique em qualquer botão de conversão abaixo...",
      "copyResult": "Copiar resultado"
    }
  },
  "character-counter": {
    "strings": {
      "sampleText": "Escreva textos claros e concisos que caibam nos limites de caracteres das plataformas, sem cortes estranhos nos resultados de pesquisa ou nas redes sociais.",
      "withSpaces": "Com espaços",
      "withoutSpaces": "Sem espaços",
      "words": "Palavras",
      "letters": "Letras",
      "digits": "Dígitos",
      "utf8Bytes": "Bytes UTF-8",
      "copyText": "Copiar texto",
      "textToMeasure": "Texto para medir o comprimento em caracteres",
      "placeholder": "Digite ou cole texto para ver contagens exatas de caracteres, tamanho em bytes e limites de plataformas...",
      "whitespaceChars": "Caracteres de espaço em branco",
      "lines": "Linhas",
      "platformLimitsTitle": "Limites de caracteres de plataformas e SEO",
      "over": "acima",
      "left": "restantes",
      "platformLimits": [
        {
          "name": "Meta título SEO",
          "note": "Comprimento recomendado do título no Google"
        },
        {
          "name": "Meta descrição SEO",
          "note": "Limite padrão do snippet em desktop"
        },
        {
          "name": "Segmento SMS",
          "note": "Uma única mensagem SMS GSM-7"
        },
        {
          "name": "Post no X / Twitter",
          "note": "Comprimento padrão de post"
        },
        {
          "name": "Prévia da legenda do Instagram",
          "note": "Visível antes do corte em \"Mais\""
        },
        {
          "name": "Post no LinkedIn",
          "note": "Atualização padrão máxima do feed"
        }
      ]
    }
  },
  "find-and-replace": {
    "strings": {
      "find": "Buscar",
      "replaceWith": "Substituir por",
      "findPlaceholder": "Texto a ser buscado...",
      "replacePlaceholder": "Texto de substituição...",
      "caseSensitive": "Diferenciar maiúsculas de minúsculas",
      "wholeWordOnly": "Somente palavras inteiras",
      "useRegex": "Usar expressão regular (RegExp)",
      "regexError": "Erro de regex:",
      "invalidRegex": "Expressão regular inválida.",
      "sourceText": "Texto original",
      "updatedOutput": "Saída atualizada",
      "match": "correspondência",
      "matches": "correspondências",
      "replaced": "substituídas",
      "sourcePlaceholder": "Cole o texto para buscar e substituir...",
      "outputPlaceholder": "A prévia do texto substituído aparece aqui...",
      "copyResult": "Copiar resultado"
    }
  },
  "line-prefix-suffix": {
    "strings": {
      "linePrefix": "Prefixo de linha",
      "lineSuffix": "Sufixo de linha",
      "startNumber": "Número inicial",
      "numberSeparator": "Separador de número",
      "addLineNumbers": "Adicionar números de linha",
      "zeroPad": "Números com zeros à esquerda (01, 02)",
      "skipEmptyLines": "Pular linhas vazias",
      "inputLines": "Linhas de entrada",
      "formattedLines": "Linhas formatadas",
      "copyResult": "Copiar resultado",
      "inputPlaceholder": "Cole um valor ou uma linha por linha...",
      "outputPlaceholder": "As linhas numeradas ou envolvidas aparecem aqui..."
    }
  },
  "lorem-ipsum-generator": {
    "strings": {
      "amount": "Quantidade",
      "unit": "Unidade",
      "unitLabels": {
        "paragraphs": "parágrafos",
        "sentences": "frases",
        "words": "palavras"
      },
      "startClassic": "Começar com “Lorem ipsum”",
      "wrapHtml": "Envolver em tags <p>",
      "words": "palavras",
      "characters": "caracteres",
      "regenerate": "Regenerar",
      "copyPlaceholder": "Copiar texto de exemplo",
      "generatedText": "Texto de exemplo gerado"
    }
  },
  "markdown-previewer": {
    "strings": {
      "sampleMarkdown": "# Notas de lançamento do UtilityFlow\n\nBem-vindo ao **Markdown Previewer**, um editor rápido no navegador com exportação *HTML* em tempo real.\n\n## Principais recursos\n\n- Formatação instantânea para títulos, listas e links\n- Escape seguro de HTML sem nenhum upload remoto\n- Cópia e download de HTML bruto com um clique\n\n> Mantenha a documentação perto do trabalho e revise a estrutura antes de publicar.\n\n```json\n{\n  \"tool\": \"markdown-previewer\",\n  \"mode\": \"browser-side\"\n}\n```\n\nSaiba mais em [UtilityFlow](/tools/).",
      "renderedPreview": "Prévia renderizada",
      "rawHtml": "HTML bruto",
      "exportHtml": "Exportar HTML",
      "copyHtml": "Copiar HTML",
      "markdownSource": "Fonte Markdown",
      "livePreview": "Prévia ao vivo",
      "compiledHtml": "HTML compilado",
      "compiledHtmlAria": "Código-fonte HTML compilado",
      "inputPlaceholder": "Escreva Markdown (# Título, **negrito**, - lista, [link](https://...))...",
      "emptyPreview": "A prévia aparecerá conforme você digita Markdown..."
    }
  },
  "readability-checker": {
    "strings": {
      "sampleText": "A escrita técnica clara respeita o tempo do leitor. Use substantivos concretos e verbos ativos sempre que possível para que instruções complexas continuem fáceis de seguir.\n\nFrases longas cheias de orações aninhadas obrigam os leitores a reler parágrafos. Dividir explicações densas em passos mais curtos torna a documentação mais rápida de ler e mais simples de aplicar.",
      "level": "Nível:",
      "textToCheck": "Texto para verificar a legibilidade",
      "placeholder": "Cole seu artigo, ensaio ou texto de landing page para calcular a facilidade de leitura Flesch e as pontuações de nível escolar...",
      "fleschEase": "Facilidade de leitura Flesch",
      "fleschKincaid": "Nível Flesch-Kincaid",
      "usGrade": "Nível escolar dos EUA",
      "gunningFog": "Índice Gunning Fog",
      "yearsEducation": "Anos de escolaridade",
      "smog": "Índice SMOG",
      "polysyllable": "Complexidade polissilábica",
      "structuralBreakdown": "Detalhamento estrutural",
      "wordsSentences": "Palavras / Frases",
      "avgSentenceLength": "Comprimento médio da frase",
      "words": "palavras",
      "avgSyllablesPerWord": "Média de sílabas por palavra",
      "complexWords": "Palavras complexas (3+ sílabas)",
      "longWordsDetected": "Palavras longas detectadas (3+ sílabas)",
      "noLongWords": "Nenhuma palavra com 3+ sílabas encontrada nesta passagem.",
      "emptyState": "Digite pelo menos uma frase acima para ver as fórmulas de legibilidade e as proporções estruturais.",
      "levels": [
        {
          "level": "Muito fácil",
          "audience": "5.º ano (10–11 anos)"
        },
        {
          "level": "Fácil",
          "audience": "6.º ano (11–12 anos)"
        },
        {
          "level": "Bastante fácil",
          "audience": "7.º ano (12–13 anos)"
        },
        {
          "level": "Padrão",
          "audience": "8.º–9.º ano (13–15 anos)"
        },
        {
          "level": "Bastante difícil",
          "audience": "10.º–12.º ano"
        },
        {
          "level": "Difícil",
          "audience": "Nível universitário"
        },
        {
          "level": "Muito difícil",
          "audience": "Pós-graduação / especialista"
        }
      ]
    }
  },
  "remove-duplicate-lines": {
    "strings": {
      "caseSensitive": "Diferenciar maiúsculas de minúsculas",
      "trimWhitespace": "Remover espaços em branco",
      "removeEmptyLines": "Remover linhas vazias",
      "sortAlphabetically": "Ordenar alfabeticamente",
      "originalLines": "Linhas originais",
      "lines": "linhas",
      "uniqueLines": "Linhas únicas",
      "unique": "únicas",
      "removed": "removidas",
      "inputPlaceholder": "Cole uma lista com um item por linha...",
      "outputPlaceholder": "O resultado sem duplicatas aparecerá aqui..."
    }
  },
  "sort-lines": {
    "strings": {
      "caseSensitive": "Diferenciar maiúsculas de minúsculas",
      "ignoreBlankLines": "Ignorar linhas em branco",
      "removeDuplicates": "Remover duplicatas",
      "inputLines": "Linhas de entrada",
      "sortedLines": "Linhas ordenadas",
      "copySorted": "Copiar ordenadas",
      "inputPlaceholder": "Digite um item por linha...",
      "outputPlaceholder": "O resultado ordenado aparece aqui...",
      "sortOptions": [
        {
          "id": "alpha-asc",
          "label": "A → Z"
        },
        {
          "id": "alpha-desc",
          "label": "Z → A"
        },
        {
          "id": "natural",
          "label": "Natural (1, 2, 10)"
        },
        {
          "id": "length-asc",
          "label": "Mais curtas primeiro"
        },
        {
          "id": "length-desc",
          "label": "Mais longas primeiro"
        },
        {
          "id": "reverse-order",
          "label": "Ordem inversa"
        },
        {
          "id": "shuffle",
          "label": "Embaralhar"
        }
      ]
    }
  },
  "text-diff-checker": {
    "strings": {
      "ignoreWhitespace": "Ignorar espaços em branco",
      "ignoreCase": "Ignorar maiúsculas e minúsculas",
      "originalText": "Texto original",
      "modifiedText": "Texto modificado",
      "originalPlaceholder": "Cole o texto original...",
      "modifiedPlaceholder": "Cole o texto atualizado...",
      "lineComparison": "Comparação de linhas",
      "added": "adicionadas",
      "removed": "removidas",
      "unchanged": "sem alterações",
      "emptyState": "Digite texto nas duas caixas acima para comparar as linhas adicionadas e removidas."
    }
  },
  "text-reverser": {
    "strings": {
      "sampleText": "Primeira linha de texto\nSegunda linha de texto\nTerceira linha de texto",
      "originalText": "Texto original",
      "reversedOutput": "Saída invertida",
      "inputPlaceholder": "Digite texto ou linhas para inverter...",
      "outputPlaceholder": "O texto invertido aparece aqui...",
      "modes": [
        {
          "id": "characters",
          "label": "Inverter caracteres"
        },
        {
          "id": "words",
          "label": "Inverter ordem das palavras"
        },
        {
          "id": "each-word",
          "label": "Inverter cada palavra"
        },
        {
          "id": "lines",
          "label": "Inverter ordem das linhas"
        }
      ]
    }
  },
  "text-to-slug": {
    "strings": {
      "sampleTitles": "10 melhores formas de formatar JSON online!\nCafé e creme: guia para 2026\nComo criar um site estático rápido no Cloudflare Pages",
      "hyphen": "Hífen (-)",
      "underscore": "Sublinhado (_)",
      "forceLowercase": "Forçar minúsculas",
      "stripStopWords": "Remover palavras vazias comuns",
      "titlesLabel": "Títulos ou frases (um por linha para o modo em lote)",
      "inputPlaceholder": "Digite um título de blog, nome de produto ou lista de títulos...",
      "generatedSlugs": "Slugs de URL gerados",
      "copySlugs": "Copiar slugs",
      "outputPlaceholder": "slugs-de-url-limpos-aparecem-aqui"
    }
  },
  "whitespace-remover": {
    "strings": {
      "sampleText": "   Primeira   linha com   espaços   extras.   \n\n   Segunda linha   com   tabs\te   lacunas.\n\n\nTerceira   linha aqui.   ",
      "collapseSpaces": "Colapsar espaços múltiplos",
      "trimEdges": "Recortar bordas de linha",
      "tabsToSpaces": "Converter tabs em espaços",
      "lineBreaks": "Quebras de linha:",
      "keepBreaks": "Manter quebras de linha",
      "removeBlankLines": "Remover linhas em branco",
      "replaceWithSpaces": "Substituir por espaços",
      "removeAllBreaks": "Remover todas as quebras",
      "inputText": "Texto de entrada",
      "chars": "caracteres",
      "cleanedText": "Texto limpo",
      "removed": "removidos",
      "inputPlaceholder": "Cole texto desorganizado com espaços extras, tabs ou linhas em branco...",
      "outputPlaceholder": "O resultado limpo aparece automaticamente..."
    }
  },
  "word-counter": {
    "strings": {
      "sampleText": "O UtilityFlow processa cada cálculo de texto diretamente no seu navegador. Seja para redigir um artigo de blog, ajustar um anúncio de produto ou revisar um ensaio acadêmico com um limite rígido de palavras, as contagens instantâneas ajudam você a organizar sua mensagem com clareza.\n\nFrases curtas melhoram a leitura. Variar o tamanho das frases mantém guias longos interessantes para leitores em telas de desktop e dispositivos móveis.",
      "words": "Palavras",
      "characters": "Caracteres",
      "noSpaces": "Sem espaços",
      "sentences": "Frases",
      "paragraphs": "Parágrafos",
      "readingTime": "Tempo de leitura",
      "downloadTxt": "Baixar .txt",
      "copyText": "Copiar texto",
      "textToCount": "Texto para contar",
      "placeholder": "Cole ou digite seu texto aqui para contar palavras, caracteres, frases e tempo de leitura...",
      "deliveryTimingLines": "Tempo de entrega e linhas",
      "speakingTime": "Tempo de fala (130 ppm)",
      "totalLines": "Total de linhas",
      "avgWordLength": "Comprimento médio da palavra",
      "chars": "caracteres",
      "mostFrequentWords": "Palavras mais frequentes",
      "emptyKeywords": "Digite texto acima para ver as palavras mais repetidas."
    }
  },
  "word-frequency-counter": {
    "strings": {
      "sampleText": "Auditorias técnicas de SEO verificam rastreabilidade, links internos e velocidade da página. Páginas rápidas melhoram o engajamento do usuário e os sinais de velocidade de página na pesquisa móvel. Links internos conectam guias relacionados e fortalecem a estrutura técnica de SEO.",
      "ngramLabels": {
        "1": "1 palavra",
        "2": "Frases de 2 palavras",
        "3": "Frases de 3 palavras"
      },
      "excludeStopWords": "Excluir palavras vazias comuns",
      "minLength": "Compr. mín.:",
      "textForAnalysis": "Texto para análise de frequência",
      "placeholder": "Cole textos de artigos, descrições de produtos ou notas para contar termos repetidos e densidade de palavras-chave...",
      "totalWords": "Total de palavras:",
      "uniqueTerms": "Termos únicos:",
      "exportCsv": "Exportar CSV",
      "copyCsv": "Copiar CSV",
      "rank": "#",
      "termPhrase": "Termo / Frase",
      "count": "Contagem",
      "density": "Densidade",
      "emptyState": "Digite texto acima para ver contagens de palavras e percentuais de densidade de palavras-chave."
    }
  },
  "age-calculator": {
    "strings": {
      "errorInvalidDates": "Insira datas válidas do calendário.",
      "errorDobAfterTarget": "A data de nascimento não pode ser posterior à data de destino.",
      "dobLabel": "Data de nascimento",
      "targetLabel": "Idade na data",
      "exactAge": "Idade cronológica exata",
      "yearsWord": "anos",
      "monthsWord": "meses",
      "daysWord": "dias",
      "nextBirthday": "Próximo aniversário",
      "turning": "fazendo",
      "inWord": "em",
      "totalMonths": "Total de meses",
      "totalWeeks": "Total de semanas",
      "totalDays": "Total de dias",
      "totalHours": "Total de horas (aprox.)",
      "monthsAbbr": "mês",
      "weeksAbbr": "sem",
      "daysAbbr": "d",
      "hoursAbbr": "h"
    }
  },
  "bmi-calculator": {
    "strings": {
      "underweight": "Abaixo do peso",
      "normalWeight": "Peso normal",
      "overweight": "Sobrepeso",
      "obesity": "Obesidade",
      "errorHeightMetric": "Insira uma altura entre 50 cm e 280 cm.",
      "errorWeightMetric": "Insira um peso entre 15 kg e 500 kg.",
      "errorHeightImperial": "Insira uma altura válida entre 2 ft e 9 ft.",
      "errorWeightImperial": "Insira um peso entre 30 lbs e 1100 lbs.",
      "metricTab": "Métrico (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "heightCmLabel": "Altura (cm)",
      "weightKgLabel": "Peso (kg)",
      "heightFtLabel": "Altura (ft)",
      "heightInLabel": "Altura (in)",
      "weightLbsLabel": "Peso (lbs)",
      "bmiLabel": "Índice de Massa Corporal (IMC)",
      "whoCategory": "Categoria da OMS",
      "healthyRange": "Faixa de peso saudável pelo IMC (18.5–24.9)",
      "disclaimer": "O IMC é um índice geral de triagem e não distingue massa muscular de gordura corporal."
    }
  },
  "calorie-calculator": {
    "strings": {
      "errorAge": "Insira uma idade entre 15 e 100 anos.",
      "errorHeightMetric": "Insira uma altura entre 100 cm e 250 cm.",
      "errorWeightMetric": "Insira um peso entre 30 kg e 350 kg.",
      "errorHeightImperial": "Insira uma altura entre 3 ft 4 in e 8 ft 2 in.",
      "errorWeightImperial": "Insira um peso entre 66 lbs e 770 lbs.",
      "metricTab": "Métrico (cm / kg)",
      "imperialTab": "Imperial (ft, in / lbs)",
      "maleTab": "Masculino",
      "femaleTab": "Feminino",
      "ageLabel": "Idade (anos)",
      "heightCmLabel": "Altura (cm)",
      "weightKgLabel": "Peso (kg)",
      "heightFtLabel": "Altura (ft)",
      "heightInLabel": "Altura (in)",
      "weightLbsLabel": "Peso (lbs)",
      "activityLabel": "Nível de atividade",
      "activitySedentary": "Sedentário (1.2×)",
      "activitySedentaryDetail": "Trabalho de escritório, pouco ou nenhum exercício",
      "activityLight": "Levemente ativo (1.375×)",
      "activityLightDetail": "Exercício leve 1–3 dias/semana",
      "activityModerate": "Moderadamente ativo (1.55×)",
      "activityModerateDetail": "Exercício moderado 3–5 dias/semana",
      "activityVery": "Muito ativo (1.725×)",
      "activityVeryDetail": "Exercício intenso 6–7 dias/semana",
      "activityExtra": "Extremamente ativo (1.9×)",
      "activityExtraDetail": "Trabalho físico ou treino duas vezes ao dia",
      "maintenance": "Calorias de manutenção (TDEE)",
      "mildLoss": "Perda de peso leve (-0.25 kg/sem)",
      "mildLossNote": "Déficit diário de ~250 kcal",
      "weightLoss": "Perda de peso (-0.5 kg/sem)",
      "weightLossNote": "Déficit diário de ~500 kcal",
      "leanGain": "Ganho de peso magro",
      "leanGainNote": "Superávit diário de +250 kcal",
      "macroHeading": "Distribuição de macronutrientes de referência para manutenção (30% proteína · 40% carboidratos · 30% gordura)",
      "protein": "Proteína",
      "carbs": "Carboidratos",
      "fat": "Gordura alimentar",
      "gramsPerDay": "g/dia",
      "disclaimer": "Calculado pela equação de Mifflin-St Jeor para a TMB. As necessidades energéticas individuais variam conforme a composição corporal e o contexto médico; consulte um profissional de saúde qualificado antes de iniciar dietas restritivas."
    }
  },
  "compound-interest-calculator": {
    "strings": {
      "errorInitial": "O depósito inicial não pode ser negativo.",
      "errorMonthly": "A contribuição mensal não pode ser negativa.",
      "errorRate": "A taxa de rendimento anual deve estar entre 0% e 100%.",
      "errorYears": "O horizonte de tempo deve ser de 1 a 100 anos.",
      "initialLabel": "Capital inicial ($)",
      "monthlyLabel": "Aporte mensal ($)",
      "rateLabel": "Rendimento anual (%)",
      "yearsLabel": "Anos",
      "compoundingLabel": "Capitalização",
      "dailyOption": "Diária (365/ano)",
      "monthlyOption": "Mensal (12/ano)",
      "quarterlyOption": "Trimestral (4/ano)",
      "annualOption": "Anual (1/ano)",
      "futureBalance": "Saldo futuro",
      "totalContributed": "Capital total + aportes",
      "totalInterest": "Juros compostos totais",
      "yearHeader": "Ano",
      "totalContributedHeader": "Total aportado",
      "cumulativeInterestHeader": "Juros acumulados",
      "endingBalanceHeader": "Saldo final",
      "yearPrefix": "Ano"
    }
  },
  "currency-calculator": {
    "strings": {
      "errorAmount": "Insira um valor de 0 ou mais.",
      "errorRate": "Insira uma taxa de câmbio positiva maior que 0.",
      "errorFee": "Insira uma taxa de conversão entre 0% e 50%.",
      "fetchErrorWithMessage": "Não foi possível obter a taxa externa ({message}). Continue inserindo sua taxa de câmbio manualmente acima.",
      "fetchErrorGeneric": "Não foi possível acessar a API de taxas externa. Insira sua taxa de câmbio manualmente acima.",
      "fetchErrorNoPair": "A API de referência não retornou o par de moedas selecionado.",
      "currencyNames": {
        "USD": "Dólar americano",
        "EUR": "Euro",
        "GBP": "Libra esterlina",
        "JPY": "Iene japonês",
        "CAD": "Dólar canadense",
        "AUD": "Dólar australiano",
        "CHF": "Franco suíço",
        "INR": "Rupia indiana",
        "SGD": "Dólar de Singapura",
        "NZD": "Dólar neozelandês",
        "MXN": "Peso mexicano",
        "CNY": "Yuan chinês"
      },
      "rateSourceManualDefault": "Taxa manual inserida pelo usuário (padrão offline)",
      "rateSourceManual": "Taxa manual inserida pelo usuário",
      "rateSourceIdentity": "Taxa de identidade (1.0000) para moedas iguais",
      "rateSourceEcb": "Taxa de referência externa do BCE via API Frankfurter (data: {date})",
      "rateSourceInverted": "Invertida da taxa anterior",
      "disclosureTitle": "Aviso sobre a fonte da taxa:",
      "disclosureBody": "As taxas de câmbio do mercado ao vivo nunca são inventadas offline. Insira sua taxa de câmbio cotada exata manualmente ou clique em",
      "disclosureBodyAfter": "para solicitar uma taxa de referência da API externa do Frankfurter.",
      "activeRateSource": "Fonte da taxa ativa:",
      "amountLabel": "Valor",
      "fromLabel": "Moeda de origem",
      "toLabel": "Moeda de destino",
      "swapAria": "Trocar moedas",
      "swapTitle": "Trocar moedas e inverter a taxa",
      "rateLabel": "Taxa de câmbio",
      "feeLabel": "Taxa do banco / cartão (%)",
      "fetchButton": "Obter taxa de referência do BCE",
      "fetchingButton": "Obtendo taxa do BCE...",
      "netConverted": "Valor líquido convertido",
      "grossBeforeFee": "Bruto antes da taxa",
      "feeLabelShort": "Taxa",
      "inverseRate": "Taxa de câmbio inversa",
      "perOne": "por 1",
      "amountHeaderSuffix": "Valor",
      "netHeaderPrefix": "Líquido",
      "netHeaderSuffix": "(na taxa e taxa inseridas)"
    }
  },
  "date-difference-calculator": {
    "strings": {
      "errorInvalidDates": "Selecione datas válidas de início e fim no calendário.",
      "errorInvalidBase": "Insira uma data inicial válida do calendário.",
      "errorNonNegative": "Insira números inteiros não negativos para anos, meses e dias.",
      "differenceTab": "Diferença entre datas",
      "addSubtractTab": "Somar / subtrair tempo",
      "startLabel": "Data de início",
      "endLabel": "Data de fim",
      "swapTitle": "Trocar datas",
      "swapAria": "Trocar data de início e data de fim",
      "includeEnd": "Incluir a data de fim na contagem (+1 dia corrido)",
      "calendarDuration": "Duração no calendário",
      "reversedRange": "(Intervalo invertido)",
      "totalSpan": "Duração total:",
      "calendarDays": "dias corridos",
      "weeksDays": "Semanas e dias",
      "weekdays": "Dias úteis (seg–sex)",
      "weekendDays": "Dias de fim de semana (sáb–dom)",
      "totalHours": "Total de horas",
      "yearsWord": "anos",
      "monthsWord": "meses",
      "daysWord": "dias",
      "weeksAbbr": "sem",
      "daysAbbr": "d",
      "hoursAbbr": "h",
      "referenceLabel": "Data de referência",
      "operationLabel": "Operação",
      "addOption": "Somar (+)",
      "subtractOption": "Subtrair (-)",
      "yearsLabel": "Anos",
      "monthsLabel": "Meses",
      "daysLabel": "Dias",
      "resultingDate": "Data resultante no calendário",
      "isoPrefix": "ISO 8601:"
    }
  },
  "discount-margin-calculator": {
    "strings": {
      "errorPrice": "O preço original não pode ser negativo.",
      "errorDiscount": "O desconto deve estar entre 0% e 100%.",
      "errorTax": "O imposto sobre vendas deve estar entre 0% e 100%.",
      "errorCost": "O custo não pode ser negativo.",
      "errorSelling": "O preço de venda deve ser maior que 0.",
      "discountTab": "Desconto de venda",
      "marginTab": "Margem de lucro e markup",
      "originalPriceLabel": "Preço original ($)",
      "discountLabel": "Desconto (%)",
      "salesTaxLabel": "Imposto sobre vendas (%)",
      "costLabel": "Custo unitário ($)",
      "sellingLabel": "Preço de venda ($)",
      "finalPrice": "Preço final",
      "beforeTax": "Antes dos impostos:",
      "youSave": "Você economiza",
      "taxAdded": "Imposto adicionado",
      "grossProfit": "Lucro bruto",
      "profitMargin": "Margem de lucro",
      "profitDivSelling": "(Lucro ÷ Preço de venda)",
      "markup": "Markup",
      "profitDivCost": "(Lucro ÷ Custo)"
    }
  },
  "loan-emi-calculator": {
    "strings": {
      "errorPrincipal": "Insira um valor principal do empréstimo maior que 0.",
      "errorRate": "Insira uma taxa de juros anual entre 0% e 100%.",
      "errorDuration": "A duração do empréstimo deve ser de 1 a 600 meses.",
      "principalLabel": "Valor principal do empréstimo ($)",
      "rateLabel": "Taxa de juros anual (% a.a.)",
      "termLabel": "Prazo do empréstimo",
      "termUnitAria": "Unidade do prazo do empréstimo",
      "yearsOption": "Anos",
      "monthsOption": "Meses",
      "monthlyPayment": "Pagamento mensal (EMI)",
      "forPrefix": "por",
      "monthlyPayments": "pagamentos mensais",
      "totalInterest": "Juros totais",
      "ofTotalCost": "do custo total",
      "totalRepayment": "Reembolso total",
      "principalWord": "de principal",
      "principalLabelShort": "Principal",
      "interestLabelShort": "Juros",
      "showSchedule": "Mostrar tabela de amortização",
      "hideSchedule": "Ocultar tabela de amortização",
      "monthHeader": "Mês",
      "paymentHeader": "Pagamento",
      "principalHeader": "Principal",
      "interestHeader": "Juros",
      "balanceHeader": "Saldo"
    }
  },
  "mortgage-calculator": {
    "strings": {
      "errorPrice": "O preço do imóvel deve ser maior que 0.",
      "errorDownPayment": "O percentual de entrada deve estar entre 0% e 99.9%.",
      "errorRate": "A taxa de juros deve estar entre 0% e 50%.",
      "errorTerm": "O prazo do empréstimo deve ser de 1 a 50 anos.",
      "homePriceLabel": "Preço do imóvel ($)",
      "downPaymentLabel": "Entrada (%)",
      "rateLabel": "Taxa de juros (% a.a.)",
      "termLabel": "Prazo do empréstimo (anos)",
      "yearsWord": "anos",
      "taxLabel": "Imposto predial ($ / ano)",
      "insuranceLabel": "Seguro residencial ($ / ano)",
      "hoaLabel": "Taxa de condomínio ($ / mês)",
      "estimatedMonthly": "Pagamento mensal estimado",
      "loanAmount": "Valor do empréstimo",
      "downPayment": "Entrada",
      "lifetimeInterest": "Juros totais do financiamento",
      "breakdownHeading": "Detalhamento do pagamento mensal",
      "principalInterest": "Principal e juros (P&I)",
      "propertyTaxes": "Impostos prediais",
      "homeownersInsurance": "Seguro residencial",
      "hoaDues": "Taxa de condomínio",
      "pmiLabel": "PMI est. (0.5%/ano quando a entrada é < 20%)"
    }
  },
  "percentage-calculator": {
    "strings": {
      "errorEnterNumbers": "Insira números válidos.",
      "errorTotalZero": "O total (Y) não pode ser 0.",
      "errorStartZero": "O valor inicial não pode ser 0.",
      "heading1": "1. Porcentagem de um número",
      "heading2": "2. Parte como porcentagem do todo",
      "heading3": "3. Aumento ou diminuição percentual",
      "whatIs": "Quanto é",
      "percentOf": "% de",
      "isWhatPercentOf": "é quantos % de",
      "fromWord": "De",
      "toWord": "para",
      "result": "Resultado:",
      "change": "Variação:",
      "formula": "Fórmula",
      "difference": "Diferença",
      "ariaPctX": "Porcentagem X",
      "ariaBaseY": "Número base Y",
      "ariaPartX": "Valor parcial X",
      "ariaWholeY": "Valor total Y",
      "ariaInitialA": "Valor inicial A",
      "ariaFinalB": "Valor final B"
    }
  },
  "salary-calculator": {
    "strings": {
      "errorAmount": "O valor da remuneração não pode ser negativo.",
      "errorHours": "As horas por semana devem estar entre 1 e 168.",
      "errorWeeks": "As semanas por ano devem estar entre 1 e 52.",
      "errorTax": "A alíquota efetiva de imposto deve estar entre 0% e 99%.",
      "amountLabel": "Valor do pagamento ($)",
      "frequencyLabel": "Frequência",
      "hourlyOption": "Por hora",
      "dailyOption": "Por dia",
      "weeklyOption": "Semanal",
      "biweeklyOption": "Quinzenal",
      "monthlyOption": "Mensal",
      "annualOption": "Anual",
      "hoursLabel": "Horas / semana",
      "weeksLabel": "Semanas / ano",
      "taxLabel": "Alíquota est. de imposto (%)",
      "rowHourly": "Por hora",
      "rowDaily": "Por dia (semana de 5 dias)",
      "rowWeekly": "Semanal",
      "rowBiweekly": "Quinzenal",
      "rowMonthly": "Mensal",
      "rowAnnual": "Anual",
      "payPeriodHeader": "Período de pagamento",
      "grossPayHeader": "Pagamento bruto",
      "estNetPay": "Pagamento líquido est.",
      "taxWord": "de imposto"
    }
  },
  "time-duration-calculator": {
    "strings": {
      "errorInvalidTimes": "Insira horários válidos de início e fim.",
      "errorBreakRange": "Insira um desconto de intervalo entre 0 e 1.440 minutos.",
      "errorEndEarlier": "O horário de fim é anterior ao horário de início. Ative a virada noturna se o turno cruzar a meia-noite.",
      "errorBreakExceeds": "O desconto de intervalo excede o tempo total decorrido.",
      "errorSumFields": "Todos os campos de duração devem ser números não negativos.",
      "betweenTab": "Tempo decorrido entre horários",
      "sumTab": "Somar durações de planilha",
      "startLabel": "Hora de início",
      "endLabel": "Hora de fim",
      "breakLabel": "Intervalo não remunerado (min)",
      "overnightLabel": "Tratar o horário de fim anterior ao de início como o dia seguinte (turno noturno)",
      "netDuration": "Duração líquida",
      "overnightTag": "(Noturno)",
      "decimalHours": "Horas decimais",
      "totalMinutes": "Minutos totais",
      "totalSeconds": "Segundos totais",
      "hoursAbbr": "h",
      "minutesAbbr": "min",
      "secondsAbbr": "s",
      "labelHeader": "Rótulo",
      "hoursHeader": "Horas",
      "minutesHeader": "Minutos",
      "secondsHeader": "Segundos",
      "removeButton": "Remover",
      "removeAria": "Remover",
      "addRowButton": "Adicionar linha de duração",
      "morningSession": "Sessão da manhã",
      "afternoonSession": "Sessão da tarde",
      "segmentPrefix": "Segmento",
      "combinedTime": "Tempo combinado (HH:MM:SS)",
      "dayEquivalent": "Dias de 24 horas",
      "daysAbbr": "d"
    }
  },
  "tip-calculator": {
    "strings": {
      "errorBill": "O valor da conta não pode ser negativo.",
      "errorTip": "A porcentagem de gorjeta deve estar entre 0% e 200%.",
      "errorPeople": "O número de pessoas deve estar entre 1 e 100.",
      "billLabel": "Subtotal da conta ($)",
      "tipLabel": "Porcentagem de gorjeta (%)",
      "peopleLabel": "Dividir entre (pessoas)",
      "presetsLabel": "Gorjetas sugeridas:",
      "roundingLabel": "Arredondamento:",
      "exactOption": "Centavos exatos",
      "totalUpOption": "Arredondar o total para cima ($)",
      "perPersonUpOption": "Arredondar por pessoa para cima ($)",
      "perPersonTotal": "Total por pessoa",
      "includes": "Inclui",
      "tipEach": "de gorjeta por pessoa",
      "totalTip": "Gorjeta total",
      "effectiveRate": "Taxa efetiva:",
      "totalBill": "Conta total"
    }
  },
  "unit-converter": {
    "strings": {
      "errorInvalidValue": "Insira um valor numérico válido para converter.",
      "errorAbsoluteZero": "A temperatura não pode estar abaixo do zero absoluto (-273.15 °C / 0 K).",
      "categoryNames": {
        "length": "Comprimento",
        "weight": "Peso e massa",
        "temperature": "Temperatura",
        "area": "Área",
        "volume": "Volume",
        "speed": "Velocidade",
        "storage": "Armazenamento digital"
      },
      "unitLabels": {
        "mm": "Milímetro",
        "cm": "Centímetro",
        "m": "Metro",
        "km": "Quilômetro",
        "in": "Polegada",
        "ft": "Pé",
        "yd": "Jarda",
        "mi": "Milha",
        "mg": "Miligrama",
        "g": "Grama",
        "kg": "Quilograma",
        "t": "Tonelada métrica",
        "oz": "Onça",
        "lb": "Libra",
        "st": "Stone",
        "C": "Celsius",
        "F": "Fahrenheit",
        "K": "Kelvin",
        "cm2": "Centímetro quadrado",
        "m2": "Metro quadrado",
        "ha": "Hectare",
        "km2": "Quilômetro quadrado",
        "ft2": "Pé quadrado",
        "yd2": "Jarda quadrada",
        "acre": "Acre",
        "mi2": "Milha quadrada",
        "mL": "Mililitro",
        "L": "Litro",
        "m3": "Metro cúbico",
        "floz": "Onça líquida (EUA)",
        "cup": "Xícara (EUA)",
        "pt": "Pinta (EUA)",
        "qt": "Quarto (EUA)",
        "gal": "Galão (EUA)",
        "ms": "Metros / segundo",
        "kmh": "Quilômetros / hora",
        "mph": "Milhas / hora",
        "knot": "Nó",
        "fts": "Pés / segundo",
        "B": "Byte",
        "KB": "Kilobyte (10³)",
        "MB": "Megabyte (10⁶)",
        "GB": "Gigabyte (10⁹)",
        "TB": "Terabyte (10¹²)",
        "KiB": "Kibibyte (2¹⁰)",
        "MiB": "Mebibyte (2²⁰)",
        "GiB": "Gibibyte (2³⁰)"
      },
      "valueLabel": "Valor",
      "fromLabel": "Unidade de origem",
      "toLabel": "Unidade de destino",
      "swapAria": "Trocar unidades",
      "swapTitle": "Trocar unidades",
      "toWord": "para",
      "copyResult": "Copiar resultado",
      "unitHeader": "Unidade",
      "symbolHeader": "Símbolo",
      "equivalentHeader": "Valor equivalente"
    }
  },
  "vat-tax-calculator": {
    "strings": {
      "errorAmount": "O valor não pode ser negativo.",
      "errorRate": "A alíquota de imposto deve estar entre 0% e 100%.",
      "addTab": "Adicionar imposto (líquido → bruto)",
      "removeTab": "Extrair imposto (bruto → líquido)",
      "commonRates": "Alíquotas comuns:",
      "netAmountLabel": "Valor líquido (sem imposto) ($)",
      "grossAmountLabel": "Valor bruto (com imposto) ($)",
      "rateLabel": "Alíquota de IVA / imposto sobre vendas (%)",
      "netPrice": "Preço líquido (sem imposto)",
      "taxAmount": "Valor do imposto",
      "grossPrice": "Preço bruto (com imposto)"
    }
  },
  "base64-encoder-decoder": {
    "strings": {
      "encodeTab": "Codificar para Base64",
      "decodeTab": "Decodificar Base64",
      "urlSafe": "Seguro para URL (- e _)",
      "omitPadding": "Omitir o preenchimento = final",
      "swap": "Trocar",
      "decodeError": "Erro de decodificação:",
      "inputLabelEncode": "Texto simples (UTF-8)",
      "inputLabelDecode": "String Base64",
      "inputPlaceholderEncode": "Digite texto ou JSON para codificar...",
      "inputPlaceholderDecode": "Cole uma string Base64 padrão ou segura para URL...",
      "outputLabelEncode": "Saída Base64",
      "outputLabelDecode": "Texto decodificado",
      "outputPlaceholder": "A saída convertida aparece aqui...",
      "copyOutput": "Copiar saída",
      "invalidLength": "Comprimento de string Base64 inválido.",
      "invalidInput": "Entrada Base64 inválida ou sequência de bytes UTF-8 malformada."
    },
    "tables": {
      "samplePlain": "UtilityFlow: codificação Base64 segura com UTF-8 ✓"
    }
  },
  "color-converter": {
    "strings": {
      "pickColor": "Escolher cor",
      "colorPickerAria": "Seletor de cor",
      "copyHex": "Copiar HEX",
      "copyRgb": "Copiar RGB",
      "copyHsl": "Copiar HSL",
      "contrastTitle": "Verificação da taxa de contraste WCAG 2.1",
      "contrastDesc": "Prévia do primeiro plano ({color}) sobre qualquer cor de fundo.",
      "backgroundLabel": "Fundo:",
      "bgAria": "Cor de fundo para o contraste",
      "sampleTitle": "Exemplo de texto do corpo e da interface",
      "sampleSentence": "A rápida raposa marrom salta sobre o cão preguiçoso.",
      "aaNormal": "Texto normal AA (≥ 4.5:1)",
      "aaaNormal": "Texto normal AAA (≥ 7.0:1)",
      "aaLarge": "Texto grande AA (≥ 3.0:1)",
      "pass": "Aprovado",
      "fail": "Reprovado"
    }
  },
  "cron-expression-parser": {
    "strings": {
      "inputLabel": "Expressão cron de 5 campos",
      "copyCron": "Copiar cron",
      "humanTitle": "Agenda em linguagem simples",
      "breakdownTitle": "Detalhamento por campo",
      "fieldMinute": "Minuto (0–59)",
      "fieldHour": "Hora (0–23)",
      "fieldDom": "Dia do mês (1–31)",
      "fieldMonth": "Mês (1–12)",
      "fieldDow": "Dia da semana (0–6)",
      "nextRuns": "Próximas {count} execuções agendadas (hora local)",
      "noRuns": "Nenhuma execução correspondente encontrada nos próximos 366 dias.",
      "fieldsError": "O cron padrão espera 5 campos (minuto hora dia-do-mês mês dia-da-semana). Encontrados {count}.",
      "emptySegment": "Segmento vazio em \"{token}\"",
      "invalidStep": "Passo inválido \"{step}\" em \"{token}\"",
      "outOfRange": "Valor fora do intervalo ({min}–{max}) em \"{token}\"",
      "invalidCron": "Expressão cron inválida.",
      "everyMinutes": "A cada {n} minutos",
      "minuteZeroHour": "No minuto 0 de cada hora",
      "atTime": "Às {time}",
      "atFields": "Em {a}, {b}",
      "dayEveryDay": "todos os dias",
      "dayWeekdays": "em dias úteis (segunda a sexta)",
      "dayOfMonth": "no dia {day} do mês",
      "dayDow": "em {dow}",
      "dayBoth": "no dia {day} ou {dow}",
      "monthIn": " em {months}"
    },
    "tables": {
      "presets": [
        {
          "label": "A cada 5 minutos",
          "expr": "*/5 * * * *"
        },
        {
          "label": "A cada hora",
          "expr": "0 * * * *"
        },
        {
          "label": "Diariamente à meia-noite",
          "expr": "0 0 * * *"
        },
        {
          "label": "Dias úteis às 9:00",
          "expr": "0 9 * * 1-5"
        },
        {
          "label": "Dia 1 do mês às 08:30",
          "expr": "30 8 1 * *"
        }
      ],
      "dowLabels": [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
      ],
      "monthLabels": [
        "",
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
      ],
      "unitWords": {
        "minute": "minuto",
        "hour": "hora",
        "day": "dia",
        "month": "mês",
        "weekday": "dia da semana"
      },
      "unitPlurals": {
        "minute": "minutos",
        "hour": "horas",
        "day": "dias",
        "month": "meses",
        "weekday": "dias da semana"
      }
    }
  },
  "css-minifier": {
    "strings": {
      "minifyTab": "Minificar CSS",
      "beautifyTab": "Formatar CSS",
      "inputLabel": "CSS de entrada",
      "bytesLabel": "bytes",
      "inputPlaceholder": "Cole regras CSS ou folhas de estilo aqui...",
      "outputLabelMinify": "CSS minificado",
      "outputLabelBeautify": "CSS formatado",
      "outputPlaceholder": "O CSS processado aparece aqui...",
      "copyCss": "Copiar CSS"
    }
  },
  "hash-generator": {
    "strings": {
      "textInputTab": "Entrada de texto",
      "fileTab": "Checksum de arquivo local",
      "uppercaseHex": "Hex em maiúsculas",
      "inputLabel": "String de entrada (UTF-8)",
      "inputPlaceholder": "Digite texto para calcular os hashes SHA-1, SHA-256, SHA-384 e SHA-512...",
      "chooseFileLabel": "Escolher arquivo local para gerar o hash",
      "fileNoteDefault": "O arquivo é lido localmente na memória do navegador e nunca é enviado.",
      "bytesLabel": "bytes",
      "cryptoUnavailable": "O hash via Web Crypto não está disponível.",
      "sampleText": "Olá, UtilityFlow!"
    }
  },
  "html-entity-encoder": {
    "strings": {
      "encodeTab": "Codificar entidades",
      "decodeTab": "Decodificar entidades",
      "encodeNonAscii": "Codificar símbolos não ASCII (&#...;)",
      "swap": "Trocar",
      "inputLabelEncode": "HTML / texto bruto",
      "inputLabelDecode": "String codificada em HTML",
      "inputPlaceholderEncode": "<p>Digite tags HTML ou caracteres especiais...</p>",
      "inputPlaceholderDecode": "&lt;p&gt;Cole entidades codificadas...&lt;/p&gt;",
      "outputLabelEncode": "Entidades codificadas",
      "outputLabelDecode": "Texto decodificado",
      "outputPlaceholder": "As entidades convertidas aparecem aqui..."
    }
  },
  "js-formatter": {
    "strings": {
      "minifyTab": "Minificar JS",
      "beautifyTab": "Formatar JS",
      "indentLabel": "Recuo:",
      "indent2": "2 espaços",
      "indent4": "4 espaços",
      "inputLabel": "Entrada de JavaScript / TypeScript",
      "bytesLabel": "bytes",
      "inputPlaceholder": "Cole um trecho de JavaScript ou TypeScript...",
      "outputLabelMinify": "Saída minificada",
      "outputLabelBeautify": "Saída formatada",
      "outputPlaceholder": "O JavaScript formatado aparece aqui...",
      "copyCode": "Copiar código"
    }
  },
  "json-csv-converter": {
    "strings": {
      "delimiterLabel": "Delimitador:",
      "commaOpt": "Vírgula (,)",
      "semicolonOpt": "Ponto e vírgula (;)",
      "tabOpt": "Tabulação (TSV)",
      "conversionError": "Erro de conversão:",
      "inputLabelJson": "Entrada JSON",
      "inputLabelCsv": "Entrada CSV",
      "inputPlaceholderJson": "[{\"id\": 1, \"name\": \"Example\"}]",
      "inputPlaceholderCsv": "id,name\n1,Example",
      "outputLabelCsv": "Saída CSV",
      "outputLabelJson": "Saída JSON",
      "outputPlaceholder": "Os dados convertidos aparecem aqui...",
      "parseFallback": "Não foi possível analisar o formato de entrada."
    }
  },
  "json-formatter": {
    "strings": {
      "indent2": "2 espaços",
      "indent4": "4 espaços",
      "indentTab": "Tabulação",
      "indentMinify": "Minificar",
      "sortKeys": "Ordenar chaves A–Z",
      "validJson": "JSON válido",
      "keysLabel": "chaves",
      "depthLabel": "profundidade",
      "bytesLabel": "bytes",
      "invalidJson": "JSON inválido:",
      "invalidJsonSyntax": "Sintaxe JSON inválida",
      "lineCol": "Linha {line}, Coluna {col}",
      "inputLabel": "Entrada JSON bruta",
      "inputPlaceholder": "{\"hello\": \"world\", \"items\": [1, 2, 3]}",
      "outputLabel": "Saída formatada",
      "outputPlaceholder": "O JSON formatado e validado aparece aqui...",
      "copyJson": "Copiar JSON"
    }
  },
  "jwt-decoder": {
    "strings": {
      "infoNote": "Decodifica o cabeçalho e o payload Base64Url localmente na memória do navegador. Não verifica assinaturas criptográficas.",
      "loadSampleJwt": "Carregar JWT de exemplo",
      "inputLabel": "Token JWT codificado",
      "inputPlaceholder": "Cole um token JWT (eyJhbGciOi...) para inspecionar seu cabeçalho e suas claims...",
      "invalidJwt": "JWT inválido:",
      "headerLabel": "Cabeçalho (algoritmo e tipo)",
      "payloadLabel": "Payload (claims)",
      "copyHeader": "Copiar cabeçalho",
      "copyPayload": "Copiar payload",
      "timestampTitle": "Claims de timestamp",
      "iatLabel": "Emitido em (iat)",
      "nbfLabel": "Válido a partir de (nbf)",
      "expLabel": "Expira em (exp)",
      "expired": "Expirado",
      "active": "Ativo (ainda não expirado)",
      "signatureLabel": "Segmento de assinatura (Base64Url)",
      "invalidB64Url": "Comprimento de segmento Base64Url inválido.",
      "segmentCount": "Esperados 3 segmentos JWT separados por pontos (header.payload.signature); encontrados {count}.",
      "parseFallback": "Não foi possível analisar os segmentos JSON Base64Url do JWT."
    }
  },
  "regex-tester": {
    "strings": {
      "patternLabel": "Padrão de expressão regular",
      "patternPlaceholder": "Digite o padrão regex...",
      "flagsLabel": "Flags:",
      "syntaxError": "Erro de sintaxe:",
      "testStringLabel": "String de teste",
      "testPlaceholder": "Cole um texto de exemplo para testar seu padrão...",
      "highlightedMatches": "Correspondências destacadas",
      "matchSingular": "correspondência",
      "matchPlural": "correspondências",
      "highlightEmpty": "As correspondências são destacadas aqui em tempo real...",
      "capturedTitle": "Correspondências capturadas",
      "matchLabel": "Correspondência",
      "indexLabel": "índice",
      "groupsLabel": "Grupos:",
      "noMatches": "Nenhuma correspondência encontrada.",
      "replaceLabel": "Prévia do modelo de substituição",
      "replacePlaceholder": "ex.: $1 [at] $2",
      "invalidRegex": "Expressão regular inválida."
    },
    "tables": {
      "sampleText": "Contato principal: support@utilityflow.online\nEquipe de faturamento: billing@example.org\nE-mail inválido: not-an-email@",
      "flagDefs": [
        {
          "flag": "g",
          "label": "g (global)"
        },
        {
          "flag": "i",
          "label": "i (ignorar maiúsculas/minúsculas)"
        },
        {
          "flag": "m",
          "label": "m (multilinha)"
        },
        {
          "flag": "s",
          "label": "s (dotAll)"
        }
      ]
    }
  },
  "sql-formatter": {
    "strings": {
      "beautify": "Formatar",
      "minify": "Minificar",
      "uppercaseKw": "Palavras-chave em MAIÚSCULAS",
      "lowercaseKw": "minúsculas",
      "indentLabel": "Recuo:",
      "indent2": "2 espaços",
      "indent4": "4 espaços",
      "inputLabel": "Consulta SQL bruta",
      "inputPlaceholder": "Cole uma consulta SQL (SELECT, INSERT, UPDATE, JOIN...)...",
      "outputLabel": "SQL formatado",
      "outputPlaceholder": "O SQL formatado aparece aqui...",
      "copySql": "Copiar SQL"
    }
  },
  "unix-timestamp-converter": {
    "strings": {
      "currentLabel": "Timestamp Unix atual (segundos)",
      "useCurrent": "Usar hora atual",
      "copyEpoch": "Copiar epoch",
      "converter1Label": "Timestamp Unix → data legível",
      "epochPlaceholder": "ex.: 1794544800",
      "unitAuto": "auto",
      "unitSeconds": "segundos",
      "unitMilliseconds": "milissegundos",
      "errorNotNumeric": "Digite um timestamp Unix numérico válido.",
      "errorOutOfRange": "O timestamp está fora do intervalo válido de Date do JavaScript.",
      "isoLabel": "ISO 8601 (UTC)",
      "localLabel": "Fuso horário local",
      "rfcLabel": "RFC 2822 / GMT",
      "relativeLabel": "Relativo",
      "converter2Label": "Data e hora local → timestamp Unix",
      "secondsLabel": "Segundos",
      "millisecondsLabel": "Milissegundos",
      "isoLabel2": "ISO 8601"
    }
  },
  "url-encoder-decoder": {
    "strings": {
      "encode": "Codificar",
      "decode": "Decodificar",
      "encodeUriPreserve": "encodeURI (preservar ://?&)",
      "swap": "Trocar",
      "urlError": "Erro de URL:",
      "inputLabel": "String ou URL de entrada",
      "inputPlaceholder": "Cole uma URL, string de consulta ou valor de parâmetro...",
      "outputLabelEncode": "Saída codificada",
      "outputLabelDecode": "Saída decodificada",
      "outputPlaceholder": "A URL codificada ou decodificada aparece aqui...",
      "parsedTitle": "Detalhamento da URL analisada",
      "protocol": "Protocolo",
      "host": "Host",
      "pathname": "Caminho",
      "hash": "Fragmento",
      "noneValue": "(nenhum)",
      "queryParam": "Parâmetro de consulta",
      "decodedValue": "Valor decodificado",
      "malformed": "Sequência de codificação percentual malformada."
    }
  },
  "uuid-generator": {
    "strings": {
      "versionLabel": "Versão do UUID",
      "v4": "v4 (Aleatória)",
      "v7": "v7 (Ordenada por tempo)",
      "quantity": "Quantidade (1–100)",
      "generate": "Gerar UUIDs",
      "uppercase": "Maiúsculas",
      "includeHyphens": "Incluir hifens",
      "wrapBraces": "Envolver em {chaves}",
      "generatedLabel": "UUIDs gerados",
      "copyAll": "Copiar tudo"
    }
  },
  "color-contrast-checker": {
    "strings": {
      "presetIndigo": "Índigo sobre branco",
      "presetSlate": "Tinta ardósia",
      "presetEmerald": "Emblema esmeralda",
      "presetDark": "Modo escuro",
      "swapColors": "Trocar cores",
      "fgTitle": "Cor de primeiro plano / texto",
      "bgTitle": "Cor de fundo",
      "copyHex": "Copiar HEX",
      "pickerSuffix": "seletor",
      "hexInputSuffix": "entrada HEX",
      "contrastRatioLabel": "Taxa de contraste WCAG 2.1",
      "checkAaNormal": "WCAG AA: texto normal",
      "checkAaLarge": "WCAG AA: texto grande / interface",
      "checkAaaNormal": "WCAG AAA: texto normal",
      "checkAaaLarge": "WCAG AAA: texto grande",
      "pass": "APROVADO",
      "fail": "REPROVADO",
      "livePreviewLabel": "Pré-visualização de acessibilidade ao vivo",
      "previewHeading": "Uma tipografia clara continua fácil de ler em qualquer tamanho de tela.",
      "previewBody": "O texto normal do corpo (14–16 px) exige uma taxa de contraste de pelo menos 4.5:1 para o nível AA da WCAG e 7.0:1 para o nível AAA. Títulos grandes (18 pt ou mais, ou 14 pt em negrito) exigem pelo menos 3.0:1.",
      "outlinedControl": "Controle de interface com contorno",
      "hexOnHex": "{fg} sobre {bg}",
      "extractTitle": "Extrair paleta de cores de uma imagem",
      "extractBody": "Envie uma captura de tela, um logotipo ou uma foto para extrair as amostras HEX dominantes diretamente na sua verificação de contraste.",
      "appliesToLabel": "A amostra clicada se aplica a:",
      "foregroundBtn": "Primeiro plano",
      "backgroundBtn": "Fundo",
      "selectImage": "Selecione uma imagem para extrair amostras",
      "loadedReplace": "Carregado: {name} (enviar outra)",
      "selectImageError": "Selecione uma imagem PNG, JPG, WebP ou GIF.",
      "unableToRead": "Não foi possível ler \"{name}\".",
      "canvasUnavailable": "Contexto 2D do Canvas indisponível.",
      "transparentImage": "A imagem parece completamente transparente.",
      "unableToExtract": "Não foi possível extrair a paleta.",
      "areaPercent": "~{n}% da área"
    }
  },
  "favicon-generator": {
    "strings": {
      "sizeLabels": {
        "browserTab": "16×16 Aba do navegador",
        "taskbar": "32×32 Barra de tarefas / HiDPI",
        "desktopShortcut": "48×48 Atalho da área de trabalho",
        "appleTouch": "180×180 Apple Touch",
        "androidChrome": "192×192 Android Chrome",
        "pwaSplash": "512×512 Tela inicial de PWA"
      },
      "monogramMode": "Criador de emblema com monograma",
      "imageMode": "Enviar imagem do logotipo",
      "lettersLabel": "Texto / iniciais (1–3 caracteres)",
      "cornerShapeLabel": "Formato dos cantos",
      "roundedSquare": "Quadrado arredondado",
      "circle": "Círculo",
      "sharpSquare": "Quadrado de cantos retos",
      "square": "Quadrado",
      "bgColorLabel": "Cor de fundo",
      "textColorLabel": "Cor do texto",
      "chooseLogo": "Escolha um logotipo PNG, JPG, WebP ou SVG",
      "loadedReplace": "Carregado: {name} (clique para substituir)",
      "cropMaskLabel": "Máscara de corte",
      "unableToRead": "Não foi possível ler \"{name}\".",
      "canvasUnavailable": "Contexto 2D do Canvas indisponível.",
      "failedEncode": "Falha ao codificar o PNG do favicon.",
      "unableToGenerate": "Não foi possível gerar os favicons.",
      "icoBundleTitle": "Pacote favicon.ico de vários tamanhos (16 px + 32 px + 48 px)",
      "icoBundleBody": "Arquivo .ico binário em conformidade com os padrões, pronto para a pasta /public/ na raiz do seu site",
      "downloadIco": "Baixar favicon.ico",
      "faviconPreviewAlt": "Pré-visualização do favicon 32x32",
      "iconAlt": "Ícone de {size}x{size}",
      "htmlTagsLabel": "Tags de link HTML <head>",
      "copyHtml": "Copiar HTML"
    }
  },
  "file-hash-verifier": {
    "strings": {
      "chooseFile": "Escolha qualquer arquivo para calcular somas de verificação criptográficas",
      "fileWithSize": "{name} ({size})",
      "hashedLocally": "Calculado localmente via Web Crypto API · Nenhum upload de arquivo (recomendado abaixo de 500 MB)",
      "cryptoUnavailable": "A API Web Crypto SubtleCrypto não está disponível neste contexto do navegador.",
      "hashFailed": "Falha ao calcular o hash do arquivo na memória do navegador (arquivos com várias centenas de MB podem exceder os limites de RAM).",
      "computing": "Calculando somas de verificação SHA-1, SHA-256, SHA-384 e SHA-512 localmente...",
      "fileLabel": "Arquivo:",
      "sizeLabel": "Tamanho:",
      "mimeLabel": "MIME:",
      "modifiedLabel": "Modificado:",
      "bytesSuffix": "{n} bytes",
      "downloadSha256": "Baixar .sha256",
      "sha256Label": "SHA-256 (recomendado)",
      "sha512Label": "SHA-512",
      "sha384Label": "SHA-384",
      "sha1Label": "SHA-1 (somente compatibilidade legada)",
      "verifyLabel": "Verificar com a soma de verificação esperada",
      "expectedPlaceholder": "Cole a soma de verificação SHA-256, SHA-512, SHA-384 ou SHA-1 publicada (ou uma linha .sha256sum)...",
      "verified": "Soma de verificação confirmada! O arquivo corresponde exatamente ao resumo {algorithm} esperado.",
      "mismatch": "Soma de verificação divergente! Nenhum dos resumos calculados corresponde ao valor esperado."
    }
  },
  "image-compressor": {
    "strings": {
      "chooseImage": "Escolha uma imagem para comprimir (PNG / JPG / WebP)",
      "fileWithDims": "{name} ({w}×{h} · {size})",
      "processedLocally": "Processado localmente via HTML5 Canvas · Nunca enviado para servidores remotos",
      "uploadImageError": "Envie um arquivo de imagem PNG, JPG, WebP ou GIF.",
      "unableToDecode": "Não foi possível decodificar \"{name}\".",
      "canvasUnavailable": "Contexto 2D do Canvas indisponível.",
      "compressionFailed": "A compressão falhou no canvas do navegador.",
      "unableToCompress": "Não foi possível comprimir a imagem.",
      "unableToRead": "Não foi possível ler \"{name}\".",
      "invalidImage": "Arquivo de imagem inválido.",
      "outputFormatLabel": "Formato de saída",
      "webpOption": "WebP (menor tamanho web moderno)",
      "jpgOption": "JPG (maior compatibilidade)",
      "pngOption": "PNG (transparência sem perda)",
      "maxWidthLabel": "Limite máximo de largura",
      "keepOriginalWidth": "Manter a largura original",
      "max1920": "Máx. 1920 px (Full HD)",
      "max1280": "Máx. 1280 px (blog / hero)",
      "max800": "Máx. 800 px (miniaturas)",
      "qualityLabel": "Qualidade: ",
      "losslessPng": "PNG sem perda",
      "originalLabel": "Original",
      "compressedLabel": "Comprimida",
      "changeLabel": "Alteração",
      "outputSummary": "Saída: {w} × {h} px · {ext}",
      "compressing": "Comprimindo...",
      "downloadExt": "Baixar .{ext}",
      "previewAlt": "Pré-visualização da imagem comprimida"
    }
  },
  "image-format-converter": {
    "strings": {
      "selectImages": "Selecione uma ou várias imagens para converter",
      "imagesLoaded": "{n} imagem(ns) carregada(s) — clique para adicionar ou substituir",
      "batchNote": "Converta PNG, JPG, WebP, SVG ou GIF em PNG, JPG ou WebP em lote, localmente",
      "convertToLabel": "Converter para o formato",
      "pngOption": "PNG (.png — preserva a transparência)",
      "qualityLabel": "Qualidade com perda: ",
      "lossless": "Sem perda",
      "alphaFillLabel": "Preenchimento alfa",
      "converting": "Convertendo...",
      "reconvert": "Converter novamente",
      "selectFilesError": "Selecione um ou mais arquivos de imagem (PNG, JPG, WebP, SVG, GIF).",
      "couldNotDecode": "Não foi possível decodificar \"{name}\".",
      "canvasUnavailable": "Canvas 2D indisponível.",
      "conversionFailed": "Falha na conversão de \"{name}\".",
      "batchFailed": "Falha na conversão em lote das imagens.",
      "downloadExt": "Baixar .{ext}"
    }
  },
  "image-resizer": {
    "strings": {
      "chooseImage": "Escolha uma imagem para redimensionar ou cortar em dimensões predefinidas",
      "fileWithDims": "{name} (original: {w} × {h} px)",
      "supportsNote": "Suporta redimensionamento em pixels, bloqueio de proporção e predefinições sociais com corte central",
      "selectImageError": "Selecione uma imagem PNG, JPG, WebP ou GIF.",
      "unableToDecode": "Não foi possível decodificar \"{name}\".",
      "unableToRead": "Não foi possível ler a imagem.",
      "failedLoading": "Falha ao carregar a imagem para redimensionar.",
      "canvasUnavailable": "Canvas 2D indisponível.",
      "failedGenerating": "Falha ao gerar a imagem redimensionada.",
      "resizeFailed": "Falha no redimensionamento.",
      "quickPresets": "Predefinições rápidas:",
      "presetOg": "OG para compartilhar (1200×630)",
      "presetYoutube": "YouTube HD (1280×720)",
      "presetSquare": "Quadrado (1080×1080)",
      "presetAvatar": "Avatar (512×512)",
      "widthLabel": "Largura (px)",
      "heightLabel": "Altura (px)",
      "fitModeLabel": "Modo de ajuste de proporção",
      "coverCropOption": "Corte de cobertura central (sem distorção)",
      "exactOption": "Escalar para dimensões exatas",
      "outputFormatLabel": "Formato de saída",
      "lockAspect": "Bloquear a proporção original ao digitar as dimensões",
      "resizeButton": "Redimensionar para {w} × {h} px",
      "readySummary": "Pronto: {w} × {h} px ({ext})",
      "downloadResized": "Baixar redimensionada .{ext}",
      "previewAlt": "Saída da imagem redimensionada"
    }
  },
  "image-rotate-flip": {
    "strings": {
      "chooseImage": "Escolha uma imagem para girar, inverter ou aplicar filtros",
      "loadedReplace": "{name} (clique para substituir)",
      "previewNote": "Pré-visualização em tempo real com HTML5 Canvas e exportação de pixels",
      "selectImageError": "Selecione uma imagem PNG, JPG, WebP ou GIF.",
      "failedLoading": "Não foi possível carregar \"{name}\".",
      "rotateLeft": "Girar 90° para a esquerda",
      "rotateRight": "Girar 90° para a direita",
      "flipHorizontal": "Inverter horizontalmente",
      "flipVertical": "Inverter verticalmente",
      "brightnessLabel": "Brilho: ",
      "contrastLabel": "Contraste: ",
      "grayscaleLabel": "Preto e branco (tons de cinza)",
      "resetAll": "Redefinir tudo",
      "exportFormatLabel": "Formato de exportação",
      "livePreview": "Pré-visualização ao vivo do Canvas"
    }
  },
  "image-to-base64": {
    "strings": {
      "encodeMode": "Imagem → URI de dados Base64",
      "decodeMode": "Base64 → pré-visualização de imagem",
      "selectImageError": "Selecione um arquivo de imagem (PNG, JPG, WebP, SVG, GIF, ICO).",
      "unableToRead": "Não foi possível ler \"{name}\".",
      "chooseImage": "Escolha um arquivo de imagem para codificar",
      "fileWithSize": "{name} ({size})",
      "generatesNote": "Gera URI de dados, Base64 puro, trechos HTML <img> e de plano de fundo CSS",
      "binarySizeLabel": "Tamanho do arquivo binário",
      "base64SizeLabel": "Tamanho do URI Base64 (~33% maior)",
      "fullDataUriLabel": "URI de dados completo",
      "copyDataUri": "Copiar URI de dados",
      "copyRawBase64": "Copiar Base64 puro",
      "copyImg": "Copiar <img>",
      "copyCss": "Copiar CSS",
      "encodedAria": "URI de dados Base64 codificado",
      "encodedAlt": "Pré-visualização codificada",
      "pasteLabel": "Cole uma string de imagem Base64 ou URI de dados",
      "pastePlaceholder": "data:image/png;base64,iVBORw0KGgo... ou string base64 pura",
      "invalidPayload": "O texto Base64 colado não é uma carga de imagem codificada válida.",
      "decodedAlt": "Pré-visualização Base64 decodificada",
      "downloadExt": "Baixar .{ext}"
    }
  },
  "password-generator": {
    "strings": {
      "strength": {
        "veryStrong": "Muito forte",
        "strong": "Forte",
        "moderate": "Moderada",
        "weak": "Fraca"
      },
      "randomPasswordMode": "Senha aleatória",
      "passphraseMode": "Frase-senha Diceware",
      "regenerate": "Gerar novamente",
      "passwordLengthLabel": "Comprimento da senha: ",
      "charsSuffix": " caracteres",
      "batchCountLabel": "Quantidade por lote: ",
      "uppercaseLabel": "Maiúsculas (A–Z)",
      "lowercaseLabel": "Minúsculas (a–z)",
      "numbersLabel": "Números (0–9)",
      "symbolsLabel": "Símbolos (!@#$%...)",
      "excludeAmbiguousLabel": "Excluir ambíguos (0, O, 1, l, I)",
      "wordCountLabel": "Quantidade de palavras: ",
      "wordSeparatorLabel": "Separador de palavras",
      "hyphenOption": "Hífen (-)",
      "underscoreOption": "Sublinhado (_)",
      "periodOption": "Ponto (.)",
      "spaceOption": "Espaço ( )",
      "capitalizeWordsLabel": "Palavras com inicial maiúscula",
      "appendDigitLabel": "Adicionar número de 2 dígitos",
      "selectGroupWarning": "Selecione pelo menos um grupo de caracteres para gerar senhas.",
      "entropyBits": "~{n} bits de entropia",
      "poolSizeSuffix": " · tamanho do conjunto: {n}",
      "wordListSuffix": " · lista de {n} palavras",
      "copyAll": "Copiar tudo"
    }
  },
  "qr-code-scanner": {
    "strings": {
      "payloadKinds": {
        "websiteUrl": "URL de site",
        "text": "Texto",
        "wifi": "Configuração de Wi-Fi",
        "vcard": "Contato vCard",
        "email": "Endereço de e-mail",
        "phone": "Número de telefone",
        "plainText": "Texto simples"
      },
      "liveCameraCapture": "Captura ao vivo com a câmera",
      "scanMode": "Escanear / decodificar imagem QR",
      "vcardMode": "Criador de QR de contato vCard",
      "uploadQr": "Enviar imagem de código QR",
      "uploadQrNote": "Captura PNG, JPG, WebP ou SVG · 100% no navegador",
      "liveCameraTitle": "Escaneamento ao vivo com a câmera do dispositivo",
      "liveCameraNote": "Usa o feed da câmera local somente quando a permissão é concedida",
      "startCamera": "Iniciar scanner de câmera",
      "stopCamera": "Parar câmera",
      "cameraHint": "Aponte a câmera para um código QR — a captura para automaticamente assim que for decodificado.",
      "uploadImageError": "Envie uma imagem PNG, JPG, WebP ou SVG contendo um código QR.",
      "unableToLoad": "Não foi possível carregar \"{name}\".",
      "noQrDetected": "Nenhum código QR pôde ser detectado nesta imagem. Verifique o foco, as margens de zona de silêncio e o alto contraste.",
      "unableToScan": "Não foi possível escanear a imagem.",
      "cameraUnsupported": "O escaneamento com câmera não é compatível com este ambiente de navegador.",
      "cameraDenied": "A permissão da câmera foi negada ou nenhum dispositivo de câmera está disponível. Envie uma imagem de código QR.",
      "decodedPayload": "Conteúdo decodificado · {kind}",
      "sourceLabel": "Fonte: ",
      "copyPayload": "Copiar conteúdo",
      "decodedAria": "Texto QR decodificado",
      "detectedLink": "Link da web detectado: ",
      "uploadedPreviewAlt": "Pré-visualização do código QR enviado",
      "firstNameLabel": "Nome",
      "lastNameLabel": "Sobrenome",
      "orgLabel": "Organização",
      "jobTitleLabel": "Cargo",
      "defaultJobTitle": "Designer de produto",
      "phoneLabel": "Número de telefone",
      "emailLabel": "Endereço de e-mail",
      "websiteLabel": "URL do site",
      "rawVcardLabel": "Conteúdo vCard 3.0 bruto",
      "copyVcard": "Copiar vCard",
      "vcardQrAlt": "Código QR vCard gerado",
      "downloadPng": "Baixar PNG",
      "downloadSvg": "Baixar SVG"
    }
  },
  "ai-text-summarizer": {
    "strings": {
      "lengthOptions": {
        "short": {
          "label": "Curto",
          "ratio": "~10–20% do tamanho"
        },
        "medium": {
          "label": "Médio",
          "ratio": "~30–40% do tamanho"
        },
        "detailed": {
          "label": "Longo (detalhado)",
          "ratio": "~50–60% do tamanho"
        }
      },
      "loadingLengthLabels": {
        "short": "curto",
        "medium": "médio",
        "detailed": "longo"
      },
      "formatOptions": {
        "paragraph": {
          "label": "Resumo em parágrafo",
          "hint": "Prosa fluida e coesa"
        },
        "bullets": {
          "label": "Resumo com marcadores",
          "hint": "Marcadores claros e fáceis de ler"
        },
        "key-points": {
          "label": "Extração de pontos-chave",
          "hint": "Conclusões numeradas"
        },
        "simple": {
          "label": "Linguagem simples",
          "hint": "Palavras simples e cotidianas"
        }
      },
      "loadingFormatLabels": {
        "paragraph": "de parágrafo",
        "bullets": "com marcadores",
        "key-points": "de pontos-chave",
        "simple": "em linguagem simples"
      },
      "languageLabels": {
        "Same as original language": "Igual ao idioma original",
        "English (US)": "Inglês (EUA)",
        "English (UK)": "Inglês (Reino Unido)",
        "Spanish": "Espanhol",
        "French": "Francês",
        "German": "Alemão",
        "Portuguese": "Português",
        "Italian": "Italiano",
        "Dutch": "Holandês",
        "Arabic": "Árabe",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Turco",
        "Japanese": "Japonês",
        "Korean": "Coreano",
        "Chinese (Simplified)": "Chinês (simplificado)"
      },
      "sampleArticle": "Em 2026, as equipes distribuídas de engenharia de produto dependem cada vez mais de atualizações escritas assíncronas, em vez de reuniões diárias de status, para proteger o tempo de desenvolvimento com foco profundo. Em um estudo interno de seis meses com 140 engenheiros em Londres, Berlim e Toronto, as equipes que substituíram três chamadas semanais de sincronização por resumos escritos estruturados às terças e quintas-feiras relataram uma redução de 28% na fragmentação da agenda e entregaram os marcos das sprints 14% mais rápido. O mais importante é que o estudo concluiu que as atualizações escritas só funcionavam quando os engenheiros seguiam três regras consistentes: declarar os bloqueios concretos no início, vincular diretamente aos pull requests ou IDs de issues e registrar datas-alvo exatas em vez de frases vagas como \"em breve\". Os gerentes ainda mantiveram uma única sessão semanal ao vivo de 25 minutos dedicada exclusivamente a discussões abertas sobre trade-offs de arquitetura e check-ins da equipe, preservando o relacionamento interpessoal sem interromper os blocos de programação.",
      "secUnit": "s",
      "minUnit": "min",
      "title": "Resumidor de texto com IA gratuito",
      "noAccount": "Sem conta, créditos ou login",
      "allowanceBefore": "Cota diária gratuita:",
      "allowanceAfter": "restantes hoje",
      "allowanceFallback": "Até 5 resumos grátis por dia",
      "backendTitle": "A chave do backend de IA ainda não está ativa neste ambiente.",
      "backendEnsureBefore": "Verifique se",
      "backendEnsureAfter": "está configurado para executar resumos com IA ao vivo.",
      "stepLength": "1. Tamanho do resumo",
      "stepFormat": "2. Formato do resumo",
      "stepLanguage": "3. Idioma de saída",
      "stepText": "4. Texto-fonte para resumir",
      "lengthAria": "Tamanho do resumo",
      "paste": "Colar",
      "clipboardUnavailable": "A leitura da área de transferência não está disponível aqui — use Ctrl/Cmd + V dentro do editor.",
      "clipboardEmpty": "Sua área de transferência não contém nenhum texto no momento.",
      "clipboardBlocked": "A permissão da área de transferência foi bloqueada — cole diretamente com Ctrl/Cmd + V.",
      "placeholder": "Cole um artigo, notas de pesquisa, transcrição de reunião ou redação aqui (mínimo de 25 palavras / 120 caracteres, até 25.000 caracteres)...",
      "word": "palavra",
      "words": "palavras",
      "chars": "caracteres",
      "estRead": "Leitura est.: ",
      "stop": "Parar",
      "summarizing": "Resumindo...",
      "summarizeButton": "Resumir texto",
      "addMoreBefore": "Adicione pelo menos ",
      "addMoreMiddle": " palavras a mais (mínimo de ",
      "addMoreAnd": " palavras e ",
      "addMoreAfter": " caracteres) para que a IA possa extrair um resumo útil.",
      "generatingSummary": "Gerando um resumo {length} (formato {format})...",
      "errorDailyLimit": "Limite diário gratuito de resumos atingido",
      "errorRateLimited": "Diminua um pouco o ritmo",
      "errorGlobal": "Capacidade diária da plataforma atingida",
      "errorGeneric": "Não foi possível resumir agora",
      "retry": "Tentar novamente",
      "emptyError": "Cole ou digite um artigo, relatório ou notas antes de resumir.",
      "tooShortErrorBefore": "Seu texto é muito curto para resumir de forma útil (",
      "tooShortErrorMiddle": " palavras). Digite pelo menos ",
      "tooShortErrorAnd": " palavras e ",
      "tooShortErrorAfter": " caracteres.",
      "overLimitBefore": "A entrada excede o limite de ",
      "overLimitMiddle": " caracteres. Encurte seu texto em ",
      "overLimitAfter": " caracteres e tente novamente.",
      "connectionError": "Problema temporário de conexão ao resumir. Tente novamente.",
      "resultTitle": "Resultado do resumo",
      "shorterSuffix": "% mais curto",
      "copySummary": "Copiar resumo",
      "downloadTxt": "Baixar TXT",
      "originalRead": "Leitura original",
      "summaryRead": "Leitura do resumo",
      "compressionSaved": "Compressão e tempo economizado",
      "savesPrefix": "economiza ~",
      "tabCompare": "Original vs. resumo",
      "tabSummary": "Somente resumo",
      "resultAria": "Resumo gerado e comparação",
      "originalText": "Texto original",
      "summaryOutput": "Resumo",
      "summarizedWith": "Resumido com o modelo Groq de nível gratuito",
      "fallbackNote": " (alternativa automática de modelo)",
      "preservedNote": ". Nomes, datas e números importantes são preservados exatamente como no seu texto."
    }
  },
  "ai-tool-finder": {
    "strings": {
      "quickTasks": [
        {
          "label": "Reduzir imagem para menos de 100 KB",
          "query": "Quero reduzir o tamanho da minha imagem para 100 KB.",
          "categoryId": "image-file"
        },
        {
          "label": "Converter PDF em imagens",
          "query": "Preciso converter um PDF em imagens.",
          "categoryId": "pdf"
        },
        {
          "label": "Contar palavras de uma redação",
          "query": "Quero contar as palavras da minha redação.",
          "categoryId": "text-writing"
        },
        {
          "label": "Gerar um código QR",
          "query": "Preciso gerar um código QR.",
          "categoryId": "social-media"
        },
        {
          "label": "Alterar as dimensões de uma imagem",
          "query": "Quero alterar as dimensões de uma imagem.",
          "categoryId": "image-file"
        },
        {
          "label": "Corrigir gramática e reescrever e-mail",
          "query": "Quero que a IA corrija erros de gramática e reescreva um e-mail de forma profissional.",
          "categoryId": "text-writing"
        },
        {
          "label": "Resumir um artigo longo",
          "query": "Preciso resumir um artigo longo em tópicos principais.",
          "categoryId": "text-writing"
        },
        {
          "label": "Verificar PDF para Word",
          "query": "Preciso converter um PDF para Word.",
          "categoryId": "all"
        }
      ],
      "title": "Localizador inteligente de ferramentas com IA",
      "searchesLine": "Pesquisa em {count} ferramentas reais do UtilityFlow (85 de navegador + 2 de IA)",
      "aiSearchesToday": "Pesquisas com IA hoje:",
      "leftUnlimited": "restantes · Pesquisa local instantânea ilimitada",
      "quotaFallback": "Até 10 pesquisas com IA grátis por dia · Pesquisa local ilimitada",
      "backendBefore": "A classificação semântica com IA requer ",
      "backendAfter": " no servidor, enquanto a pesquisa local instantânea por palavras-chave nas {count} ferramentas funciona imediatamente.",
      "queryLabel": "Descreva o que você quer fazer (em linguagem simples ou com palavras-chave)",
      "queryPlaceholder": "ex.: \"Quero reduzir o tamanho da minha imagem para 100 KB\" ou \"converter PDF em PNG\"",
      "categoryLabel": "Categoria da tarefa (opcional)",
      "allCategories": "Todas as categorias ({count} ferramentas)",
      "characters": "caracteres",
      "findButton": "Encontrar ferramenta correspondente",
      "findingButton": "Procurando a melhor ferramenta...",
      "tryTask": "Experimente uma tarefa real ou selecione uma pergunta comum",
      "loadingLine": "Comparando sua solicitação com as {count} ferramentas verificadas do UtilityFlow...",
      "errorTitle": "Classificação semântica com IA indisponível",
      "retryAi": "Tentar IA novamente",
      "describeError": "Descreva a tarefa ou o problema que você quer resolver (pelo menos 2 caracteres).",
      "queryTooLongBefore": "A consulta excede ",
      "queryTooLongAfter": " caracteres. Mantenha sua descrição concisa.",
      "unexpectedFormat": "A IA retornou um formato inesperado. Abaixo estão as correspondências rápidas por palavra-chave do nosso inventário real.",
      "contactError": "Problema temporário ao contatar a classificação da IA. Os resultados da pesquisa por palavra-chave continuam ativos abaixo.",
      "bestTool": "Melhor ferramenta recomendada",
      "noExact": "Nenhuma ferramenta exata correspondente disponível no momento",
      "noMatchFallback": "O UtilityFlow atualmente não inclui uma ferramenta dedicada que execute diretamente \"{query}\". Nunca inventamos ferramentas ou links falsos.",
      "relevantAlt": "Alternativas relevantes",
      "relatedTools": "Ferramentas existentes relacionadas (somente fluxos de trabalho parciais)",
      "supportedPrefix": "Suportado: ",
      "openName": "Abrir {name}",
      "matchedWith": "Encontrado no inventário verificado do UtilityFlow usando o modelo Groq de nível gratuito",
      "fallbackNote": " (alternativa automática)",
      "instantMatches": "Correspondências instantâneas por palavra-chave ({count})",
      "matchedLocally": "Encontradas localmente entre {count} ferramentas",
      "matchedPrefix": "Correspondências: ",
      "suggestionsTitle": "Sugestões inteligentes",
      "suggestionsAll": "entre tarefas populares",
      "suggestionsCategory": "na categoria selecionada",
      "clickOpen": "Clique em qualquer ferramenta para abri-la diretamente",
      "openToolArrow": "Abrir ferramenta →",
      "recommendationsAria": "Recomendações de ferramentas com IA",
      "instantAria": "Correspondências instantâneas por palavra-chave",
      "suggestionsAria": "Ferramentas sugeridas ao carregar a página"
    }
  },
  "ai-writing-assistant": {
    "strings": {
      "tasks": {
        "fix-grammar": {
          "label": "Corrigir gramática",
          "hint": "Corrige gramática e pontuação"
        },
        "rewrite-text": {
          "label": "Reescrever texto",
          "hint": "Fluxo suave e fraseado natural"
        },
        "improve-writing": {
          "label": "Melhorar a escrita",
          "hint": "Aprimora clareza e escolha de palavras"
        },
        "make-professional": {
          "label": "Tornar profissional",
          "hint": "Clareza para o trabalho e executivos"
        },
        "make-casual": {
          "label": "Tornar informal",
          "hint": "Tom relaxado e cotidiano"
        },
        "simplify-text": {
          "label": "Simplificar texto",
          "hint": "Frases claras e fáceis de ler"
        },
        "expand-text": {
          "label": "Expandir texto",
          "hint": "Adiciona detalhes úteis com base no texto"
        },
        "paraphrase": {
          "label": "Parafrasear",
          "hint": "Nova redação, mesmo significado"
        },
        "fix-spelling": {
          "label": "Corrigir ortografia",
          "hint": "Corrige apenas erros de digitação e maiúsculas"
        },
        "write-email": {
          "label": "Escrever um e-mail",
          "hint": "E-mail estruturado com linha de assunto"
        }
      },
      "tones": {
        "professional": "Profissional",
        "friendly": "Amigável",
        "formal": "Formal",
        "casual": "Informal",
        "academic": "Acadêmico",
        "persuasive": "Persuasivo",
        "simple": "Simples"
      },
      "languageLabels": {
        "English (US)": "Inglês (EUA)",
        "English (UK)": "Inglês (Reino Unido)",
        "Spanish": "Espanhol",
        "French": "Francês",
        "German": "Alemão",
        "Portuguese": "Português",
        "Italian": "Italiano",
        "Dutch": "Holandês",
        "Arabic": "Árabe",
        "Hindi": "Hindi",
        "Urdu": "Urdu",
        "Turkish": "Turco",
        "Japanese": "Japonês",
        "Korean": "Coreano",
        "Chinese (Simplified)": "Chinês (simplificado)",
        "Same as original language": "Igual ao idioma original"
      },
      "samples": {
        "default": "Oi, pessoal, queria acompanhar a reunião de ontem e compartilhar o cronograma atualizado do lançamento do nosso produto do Q4. Ainda tem dois itens que prescisamos revisar antes de sexta-feira, então me avisa se surgir algum bloquio.",
        "write-email": "preciso avisar o cliente Daniel sobre o lançamento do aplicativo. os testes terminaram hoje, faltam 2 pequenos bugs de interface para corrigir amanhã de manhã, pronto para envio à App Store na sexta à tarde. pergunte se segunda às 10h funciona para a ligação de entrega.",
        "fix-spelling": "Estamos muito contentes em anuciar que a janela de manutenção trimestral correu bem, com zero tempo de inatividade não planejado em todos os servdores.",
        "expand-text": "As standups assíncronas remotas economizam tempo de engenharia e permitem que colegas do mundo todo se concentrem profundamente sem interrupções constantes do calendário."
      },
      "title": "Assistente de escrita com IA gratuito",
      "noLogin": "Sem login ou cartão",
      "allowanceBefore": "Cota diária gratuita:",
      "allowanceAfter": "restantes hoje",
      "allowanceFallback": "Até 5 solicitações grátis por dia",
      "backendTitle": "A chave do backend de IA ainda não está ativa neste ambiente.",
      "backendSet": "Configure",
      "backendRest": "no servidor ou Worker para ativar a geração de texto com IA ao vivo.",
      "stepTask": "1. Escolha a tarefa de escrita (10 modos)",
      "stepTone": "2. Tom",
      "stepLanguage": "3. Idioma de saída",
      "stepText": "4. Seu texto original",
      "taskSelectorAria": "Seletor de tarefa de escrita",
      "placeholder": "Digite ou cole seu parágrafo, mensagem, notas ou rascunho de e-mail aqui (até 12.000 caracteres)...",
      "word": "palavra",
      "words": "palavras",
      "characters": "caracteres",
      "chars": "caracteres",
      "tip": "Dica: pressione Ctrl + Enter para gerar",
      "stop": "Parar",
      "generating": "Gerando...",
      "applying": "Aplicando",
      "tonePhrase": "tom {tone}",
      "applyingIn": "em",
      "errorDailyLimit": "Limite diário gratuito atingido",
      "errorRateLimited": "Diminua um pouco o ritmo",
      "errorGlobal": "Capacidade diária da plataforma atingida",
      "errorGeneric": "Não foi possível concluir a solicitação de escrita",
      "retry": "Tentar novamente",
      "emptyError": "Digite ou cole um texto antes de clicar em Gerar.",
      "overLimitBefore": "A entrada excede o limite de ",
      "overLimitMiddle": " caracteres. Encurte seu rascunho em ",
      "overLimitAfter": " caracteres e tente novamente.",
      "connectionError": "Problema temporário de conexão ao gerar. Tente novamente.",
      "resultTitle": "Resultado melhorado",
      "copyResult": "Copiar resultado",
      "downloadTxt": "Baixar TXT",
      "editOutput": "Editar o resultado",
      "tabCompare": "Original vs. melhorado",
      "tabDiff": "Destacar alterações",
      "tabResult": "Somente resultado",
      "resultAria": "Resultado de escrita melhorado e comparação",
      "originalText": "Texto original",
      "improvedText": "Texto melhorado",
      "removed": "Removido",
      "added": "Adicionado / atualizado",
      "processedWith": "Processado com o modelo Groq de nível gratuito",
      "fallbackNote": " (alternativa automática de modelo)",
      "reviewNote": ". Sempre revise o texto final antes de enviar."
    }
  },
  "canonical-hreflang-generator": {
    "strings": {
      "hreflangMode": "Tags canônicas e hreflang",
      "redirectsMode": "Gerador de regras de redirecionamento 301",
      "canonicalLabel": "URL canônica autorreferente",
      "alternatesLabel": "Versões alternativas por idioma e região",
      "addLocale": "Adicionar localidade",
      "langCodeAria": "Código de idioma",
      "alternateUrlAria": "URL alternativa",
      "removeLocaleAria": "Remover linha de localidade",
      "htmlTagsLabel": "Tags de link HTML <head>",
      "copyHtml": "Copiar HTML",
      "xmlSnippetLabel": "Trecho <xhtml:link> do sitemap XML",
      "copyXml": "Copiar XML",
      "cloudflareFormat": "Cloudflare Pages (_redirects)",
      "htaccessFormat": "Apache (.htaccess)",
      "nginxFormat": "Nginx (bloco server)",
      "copyRules": "Copiar {n} regras",
      "pairsLabel": "Pares origem → destino (separados por vírgula, tabulação ou “ -> ”)",
      "generatedConfigLabel": "Configuração de redirecionamento 301 gerada",
      "skippedInvalid": "Ignoradas {n} linha(s) sem destino."
    }
  },
  "keyword-density-checker": {
    "strings": {
      "sampleContent": "O SEO técnico começa com URLs limpas e rastreáveis, tags canônicas precisas e sitemaps XML estruturados. Quando os editores escrevem conteúdo útil focado na intenção do usuário em vez de encher o texto de palavras-chave, os mecanismos de busca entendem a profundidade do tema naturalmente. Audite seus títulos, meta descrições e links internos regularmente.",
      "defaultTargetKeyword": "seo técnico",
      "guidanceTitle": "Orientação editorial:",
      "guidanceBody": "Os mecanismos de busca modernos não recompensam atingir uma cota fixa de densidade de palavras-chave. Use esta auditoria de distribuição para identificar repetições acidentais ou confirmar que os conceitos principais aparecem claramente no seu texto.",
      "targetLabel": "Palavra-chave / frase-alvo (opcional)",
      "targetPlaceholder": "ex.: seo técnico",
      "phraseLengthLabel": "Comprimento da frase",
      "oneWord": "1 palavra",
      "twoWord": "Frases de 2 palavras",
      "threeWord": "Frases de 3 palavras",
      "stripHtml": "Remover tags HTML",
      "ignoreStopWords": "Ignorar stop words",
      "textLabel": "Rascunho de artigo ou texto HTML colado",
      "totalWords": "Total de palavras",
      "uniqueVocabulary": "Vocabulário único",
      "readingTime": "Tempo estimado de leitura",
      "targetPrefix": "Alvo: ",
      "hits": "{n} ocorrências ({d}%)",
      "rankHeader": "Posição",
      "termHeader": "Termo / N-grama",
      "occurrencesHeader": "Ocorrências",
      "shareHeader": "Participação (%)"
    }
  },
  "meta-tag-generator": {
    "strings": {
      "defaultTitle": "UtilityFlow – Ferramentas de utilidade rápidas no navegador",
      "defaultDescription": "Explore 85 ferramentas rápidas e focadas em privacidade no navegador para editar texto, codificar, calcular finanças, trabalhar com PDF e SEO.",
      "pageTitleLabel": "Título da página (<title> / og:title)",
      "titleChars": "{n} caracteres (ideal: 30–60)",
      "metaDescriptionLabel": "Meta descrição",
      "descChars": "{n} caracteres (ideal: 120–160)",
      "canonicalUrlLabel": "URL canônica",
      "ogImageLabel": "URL da imagem Open Graph (recomendado: 1200×630)",
      "siteNameLabel": "Nome do site (og:site_name)",
      "ogTypeLabel": "og:type",
      "twitterCardLabel": "Twitter Card",
      "robotsLabel": "Robots:",
      "robotsFollowAria": "Diretiva de follow dos robots",
      "includeViewportLabel": "Incluir tags charset e viewport",
      "generatedTagsLabel": "Tags HTML <head> geradas",
      "copyHtml": "Copiar HTML",
      "downloadHtml": "Baixar .html",
      "socialPreviewLabel": "Pré-visualização do cartão de compartilhamento",
      "socialPreviewFallback": "Pré-visualização de compartilhamento",
      "untitledPage": "Página sem título",
      "metaSnippetFallback": "O trecho da meta descrição aparece aqui."
    }
  },
  "on-page-seo-checker": {
    "strings": {
      "auditTitle": "Auditoria do código-fonte HTML no navegador:",
      "auditBody": "Os navegadores bloqueiam a raspagem entre origens (CORS) de sites de terceiros e não têm acesso a análises de busca privadas. Cole o código-fonte HTML da sua página abaixo (Ver código-fonte) para auditar as tags DOM localmente.",
      "pastedHtmlLabel": "Código-fonte HTML colado",
      "loadSampleHtml": "Carregar HTML de exemplo",
      "htmlPlaceholder": "Cole o código-fonte <html>...</html> aqui...",
      "scoreLabel": "Pontuação da auditoria DOM",
      "checksPassed": "{passed} / {total} verificações aprovadas",
      "linksSummary": "Links: {total} ({internal} int. / {external} ext.)",
      "robotsMetaLabel": "Meta robots: ",
      "robotsDefault": "Padrão (index, follow)",
      "headingOutline": "Estrutura de títulos (H1–H4)",
      "emptyState": "Cole o código-fonte HTML à esquerda para inspecionar título, descrição, títulos, canônicas e tags alt.",
      "checkTitle": "Tag de título (<title>)",
      "checkMetaDesc": "Meta descrição",
      "checkH1": "Exatamente um título <h1>",
      "checkCanonical": "URL canônica (<link rel=\"canonical\">)",
      "checkAlt": "Atributos alt de imagens",
      "checkOgJsonLd": "Open Graph e dados estruturados JSON-LD",
      "titleDetail": "{n} caracteres: \"{title}\"",
      "titleMissing": "Falta a tag <title> no <head>.",
      "descDetail": "{n} caracteres (meta: 120–160).",
      "descMissing": "Falta a tag <meta name=\"description\">.",
      "h1Detail": "{n} elemento(s) <h1> encontrado(s).",
      "canonicalMissing": "Nenhuma tag canônica declarada.",
      "noImages": "Nenhum elemento <img> no código.",
      "altDetail": "{with}/{total} imagens incluem texto alternativo descritivo.",
      "ogDetail": "og:title {presence} · {n} bloco(s) JSON-LD.",
      "present": "presente",
      "missing": "ausente"
    }
  },
  "robots-meta-tag-generator": {
    "strings": {
      "indexingLabel": "Diretiva de indexação",
      "indexOption": "index (permitir indexação)",
      "noindexOption": "noindex (excluir dos resultados de pesquisa)",
      "linkCrawlingLabel": "Rastreamento de links",
      "followOption": "follow (transmitir sinais de link)",
      "nofollowOption": "nofollow (não seguir links)",
      "largeOption": "large (elegível para o Discover)",
      "htmlTagLabel": "Meta tag HTML <head>",
      "copyHtmlTag": "Copiar tag HTML",
      "httpHeaderLabel": "Cabeçalho de resposta HTTP (PDF / não HTML)",
      "copyHeader": "Copiar cabeçalho",
      "cloudflareHeadersLabel": "Cloudflare Pages _headers",
      "cloudflarePathAria": "Padrão de caminho do _headers da Cloudflare",
      "copyBlock": "Copiar bloco"
    }
  },
  "robots-txt-generator": {
    "strings": {
      "starterTemplates": "Modelos iniciais:",
      "allowAll": "Permitir todos os rastreadores",
      "standardWebApp": "Aplicativo web / SaaS padrão",
      "wordpressClean": "WordPress limpo",
      "stagingBlockAll": "Staging (bloquear tudo)",
      "crawlerRules": "Regras de caminho para rastreadores",
      "addRule": "Adicionar regra",
      "directiveAria": "Diretiva",
      "pathAria": "Caminho",
      "deleteRuleAria": "Excluir regra",
      "crawlDelayLabel": "Crawl-delay (segundos, opcional)",
      "crawlDelayPlaceholder": "Nenhum",
      "sitemapUrlsLabel": "URLs de sitemap (uma por linha)",
      "generatedLabel": "robots.txt gerado"
    }
  },
  "schema-markup-generator": {
    "strings": {
      "defaultHeadline": "Como criar utilitários rápidos para o navegador",
      "defaultFaqQ1": "O UtilityFlow executa as ferramentas localmente no navegador?",
      "defaultFaqA1": "Sim. Quase todos os utilitários são executados diretamente na memória do navegador, sem enviar os dados para servidores externos.",
      "defaultFaqQ2": "O JSON-LD estruturado ajuda no SEO?",
      "defaultFaqA2": "Sim. O JSON-LD válido do Schema.org esclarece o contexto das entidades para os rastreadores e a elegibilidade para resultados avançados.",
      "defaultProductName": "Teclado mecânico ergonômico Pro",
      "defaultProductDesc": "Teclado sem fio de perfil baixo projetado para desenvolvedores de software.",
      "defaultCrumbHome": "Início",
      "defaultCrumbSeo": "Ferramentas de SEO",
      "defaultCrumbSchema": "Gerador de marcação Schema",
      "headlineLabel": "Título",
      "authorNameLabel": "Nome do autor",
      "publisherNameLabel": "Nome do editor",
      "datePublishedLabel": "Data de publicação",
      "articleUrlLabel": "URL do artigo",
      "featuredImageLabel": "URL da imagem em destaque",
      "questionLabel": "Pergunta nº {n}",
      "removeQuestionAria": "Remover pergunta {n}",
      "questionPlaceholder": "Pergunta",
      "acceptedAnswerPlaceholder": "Resposta aceita",
      "addFaqRow": "Adicionar linha de FAQ",
      "productNameLabel": "Nome do produto",
      "descriptionLabel": "Descrição",
      "priceLabel": "Preço",
      "currencyLabel": "Moeda",
      "availabilityLabel": "Disponibilidade",
      "orgNameLabel": "Nome da organização",
      "websiteUrlLabel": "URL do site",
      "logoUrlLabel": "URL do logotipo",
      "breadcrumbLabelAria": "Rótulo do breadcrumb {n}",
      "breadcrumbUrlAria": "URL do breadcrumb {n}",
      "labelPlaceholder": "Rótulo",
      "addLevel": "Adicionar nível",
      "jsonLdOutputLabel": "Saída JSON-LD <script>",
      "copyScriptTag": "Copiar tag de script"
    }
  },
  "serp-snippet-preview": {
    "strings": {
      "defaultTitle": "Formatador e validador de JSON – Formatar e minificar | UtilityFlow",
      "defaultDescription": "Formate, valide, minifique e ordene as chaves de cargas JSON instantaneamente no navegador, com detalhes de erros de sintaxe por linha e coluna.",
      "desktopSerp": "SERP de desktop (título de ~580 px)",
      "mobileSerp": "SERP de celular (desc. de ~120 caracteres)",
      "copyTitleMeta": "Copiar título e meta",
      "seoTitleLabel": "Título de SEO",
      "titleMetrics": "{chars} caracteres · ~{px} px / máx. 580 px",
      "metaDescriptionLabel": "Meta descrição",
      "descMetrics": "{chars} caracteres · ~{px} px",
      "pageUrlLabel": "URL da página (para pré-visualização do breadcrumb)",
      "siteNameLabel": "Nome do site",
      "boldKeywordLabel": "Palavra-chave em negrito",
      "optionalPlaceholder": "Opcional",
      "datePrefixLabel": "Prefixo de data",
      "datePlaceholder": "ex.: 12 de nov. de 2025",
      "desktopSimulation": "Simulação de snippet de pesquisa no desktop",
      "mobileSimulation": "Simulação de snippet de pesquisa no celular",
      "titleFallback": "Seu título de SEO aparece aqui",
      "descFallback": "A pré-visualização da sua meta descrição aparece aqui."
    }
  },
  "url-slug-generator": {
    "strings": {
      "sampleTitles": "Como criar um slug de URL limpo para SEO técnico!\n10 melhores ferramentas de café e produtividade em 2026\nChecklist completo de sitemap XML e robots.txt",
      "domainLabel": "Domínio base / subpasta (para pré-visualizar a URL completa)",
      "separatorLabel": "Separador de palavras",
      "hyphenOption": "Hífen (-) — recomendado pelo Google",
      "underscoreOption": "Sublinhado (_)",
      "maxLengthLabel": "Comprimento máximo do slug ({n} caracteres)",
      "stripStopWords": "Remover stop words opcionais em inglês (a, the, and, of, in, to)",
      "trailingSlash": "Incluir barra final (/)",
      "titlesLabel": "Títulos de página (um por linha para geração em lote)",
      "generatedLabel": "Slugs de SEO gerados ({n})",
      "copyAllSlugs": "Copiar todos os slugs",
      "copyAllUrls": "Copiar todas as URLs completas",
      "originalTitleHeader": "Título original",
      "slugUrlHeader": "Slug de SEO e URL completa",
      "copyHeader": "Copiar"
    }
  },
  "xml-sitemap-generator": {
    "strings": {
      "lastmodLabel": "Data de <lastmod> (opcional)",
      "changefreqLabel": "Sugestão de <changefreq>",
      "priorityLabel": "<priority> padrão",
      "omitTag": "Omitir tag",
      "deduplicateLabel": "Remover URLs duplicadas exatas",
      "urlsLabel": "URLs canônicas (uma URL https:// completa por linha)",
      "skippedInvalid": "Ignoradas {n} linha(s) de URL inválida(s): ",
      "generatedLabel": "sitemap.xml gerado ({n} URLs)",
      "copyXml": "Copiar XML",
      "downloadXml": "Baixar .xml",
      "generatedAria": "Sitemap XML gerado"
    }
  },
  "bio-line-break-formatter": {
    "strings": {
      "sampleText": "Criando ferramentas rápidas no navegador para criadores e equipes.   \n\nNovas dicas de fluxo de trabalho toda terça-feira.\n\nExperimente as utilidades gratuitas no link abaixo!",
      "modeBraille": "Espaçador invisível (⠀ U+2800)",
      "modeDot": "Espaçador de ponto mínimo (.)",
      "modeClean": "Apenas limpar espaços finais",
      "collapse": "Recolher espaços duplos acidentais",
      "labelRaw": "Rascunho de legenda ou bio",
      "phRaw": "Escreva sua legenda com linhas em branco onde quiser quebras de parágrafo...",
      "tip": "Dica: os apps de redes sociais costumam recolher parágrafos em branco quando há espaços finais no fim da linha acima.",
      "labelOut": "Resultado pronto para colar",
      "copyFormatted": "Copiar legenda formatada",
      "charsLabel": "Caracteres:",
      "linesLabel": "Linhas:",
      "blankLabel": "Quebras em branco preservadas:",
      "fitsBio": "Cabe na bio do Instagram de 150 caracteres",
      "captionLength": "Tamanho da legenda (acima do limite de 150 da bio)"
    }
  },
  "caption-template-builder": {
    "strings": {
      "frameworkNames": {
        "pas": "Problema → Agitação → Solução (PAS)",
        "tutorial": "Detalhamento prático em 3 passos",
        "bab": "Antes → Depois → Ponte",
        "checklist": "Checklist de lançamento / auditoria",
        "myth": "Mito comum vs. realidade prática"
      },
      "frameworkDescriptions": {
        "pas": "Destaca um problema concreto antes de apresentar a solução de fluxo de trabalho.",
        "tutorial": "Estrutura numerada de passo a passo, ideal para carrosséis e salvamentos no LinkedIn.",
        "bab": "Contrasta o atrito anterior com o resultado otimizado.",
        "checklist": "Lista de verificação clara que os criadores podem salvar.",
        "myth": "Questiona conselhos desatualizados com alternativas diretas e concisas."
      },
      "frameworkLabels": {
        "fixesHeading": "O que realmente resolve:",
        "beforeLabel": "Antes: ",
        "afterLabel": "Depois: ",
        "bridgeHeading": "A ponte:",
        "mythLabel": "Mito comum: ",
        "worksHeading": "O que funciona na prática:"
      },
      "sampleHook": "Pare de perder horas formatando links de campanha manualmente.",
      "sampleContext": "Parâmetros UTM inconsistentes e espaçamento quebrado na bio distorcem silenciosamente os relatórios de análise.",
      "samplePoints": "Padronize as tags utm_source e utm_medium em minúsculas\nValide as quebras de caracteres antes de publicar\nMantenha quebras de parágrafo limpas sem espaços finais",
      "sampleCta": "Salve este checklist para o seu próximo lançamento de produto.",
      "infoTitle": "Montagem determinística de modelos:",
      "infoBody": "Esta ferramenta usa estruturas de copywriting diretamente no seu navegador — nenhum modelo de IA ou API externa é usado ou sugerido.",
      "labelHook": "Gancho inicial (primeiras 1–2 linhas)",
      "labelContext": "Contexto / descrição do problema",
      "labelPoints": "Pontos principais (um ponto por linha)",
      "labelCta": "Chamada para ação (CTA)",
      "labelTags": "Hashtags",
      "previewTitle": "Pré-visualização da legenda formatada",
      "copyCaption": "Copiar legenda",
      "charsLabel": "Caracteres:",
      "wordsLabel": "Palavras:",
      "fits": "Cabe",
      "threadNeeded": "Precisa de thread",
      "tooLong": "Muito longo"
    }
  },
  "hashtag-formatter": {
    "strings": {
      "caseLabel": "Formatação e caixa para acessibilidade",
      "optCamel": "PascalCase (#CamelCase — compatível com leitores de tela)",
      "optLower": "tudo em minúsculas (#minusculas)",
      "optPreserve": "Preservar caixa original",
      "outLabel": "Layout de saída",
      "optInline": "Uma linha (separadas por espaço)",
      "optNewline": "Uma hashtag por linha",
      "optDots": "Separador de dobra de legenda (.\\n.\\n.)",
      "dedupe": "Remover hashtags duplicadas",
      "labelRaw": "Palavras-chave ou hashtags bagunçadas (separadas por vírgula, espaço ou linha)",
      "labelResult": "Grupo de hashtags limpo",
      "copyHashtags": "Copiar hashtags",
      "statClean": "Hashtags limpas",
      "statDupes": "Duplicatas removidas",
      "statIgMax": "Máximo do Instagram (30)",
      "statWithin": "Dentro do limite de 30 do IG",
      "statExceeds": "Excede o limite de 30 tags",
      "statChars": "Caracteres de saída"
    }
  },
  "social-handle-formatter": {
    "strings": {
      "ruleSummaries": {
        "x": "4–15 caracteres · letras, números, sublinhados",
        "instagram": "1–30 caracteres · letras, números, pontos, sublinhados",
        "tiktok": "2–24 caracteres · letras, números, sublinhados, pontos",
        "youtube": "3–30 caracteres · letras, números, _, -, .",
        "threads": "1–30 caracteres · namespace compartilhado do Instagram",
        "github": "1–39 caracteres · alfanuméricos e hifens simples"
      },
      "infoTitle": "Validador de regras e links de verificação direta:",
      "infoBodyBefore": "Valida a sintaxe do nome de usuário e os limites de caracteres offline, sem adivinhar a disponibilidade. Clique no link",
      "infoEm": "Abrir URL do perfil",
      "infoBodyAfter": "de qualquer plataforma para verificar ao vivo se o nome já está em uso.",
      "labelBrand": "Nome da marca, projeto ou criador",
      "phBrand": "ex.: Utility Hub",
      "labelActive": "Nome de usuário ativo para validar",
      "copyAt": "Copiar @",
      "variationsTitle": "Variações consistentes de nome de usuário:",
      "thPlatform": "Plataforma",
      "thRules": "Regras de formato",
      "thStatus": "Status de sintaxe",
      "thCheck": "Verificação manual",
      "valid": "Formato válido",
      "invalid": "Sintaxe ou tamanho inválidos",
      "checkUrl": "Verificar URL"
    }
  },
  "unicode-fancy-text-formatter": {
    "strings": {
      "styleNames": {
        "sans-bold": "Negrito (sans-serif)",
        "sans-italic": "Itálico (sans-serif)",
        "sans-bold-italic": "Negrito itálico (sans-serif)",
        "serif-bold": "Negrito (serif)",
        "monospace": "Monospace",
        "double-struck": "Duplo traço (quadro-negro)",
        "script-bold": "Script em negrito",
        "fraktur-bold": "Fraktur em negrito",
        "small-caps": "Versalete",
        "fullwidth": "Estética fullwidth"
      },
      "styleNotes": {
        "sans-bold": "Alta legibilidade para cabeçalhos de bio e ganchos de publicações",
        "sans-italic": "Ênfase sutil dentro de legendas",
        "sans-bold-italic": "Chamadas fortes e divisores de seção",
        "serif-bold": "Ênfase de estilo editorial",
        "monospace": "Handles de código, datas e tags técnicas",
        "double-struck": "Acentos de exibição",
        "script-bold": "Assinaturas decorativas de bio",
        "fraktur-bold": "Letras góticas de exibição",
        "small-caps": "Rótulos de perfil limpos com aparência de maiúsculas",
        "fullwidth": "Cabeçalhos sociais retrô com espaçamento amplo"
      },
      "sampleText": "Novo kit de ferramentas para criadores 2025",
      "accessibilityTitle": "Nota de acessibilidade:",
      "accessibilityBody": "Caracteres Unicode estilizados pertencem a blocos de símbolos matemáticos, então os leitores de tela podem lê-los letra por letra ou ignorá-los, e alguns índices de busca os ignoram. Use com moderação para destaques curtos, não para parágrafos inteiros.",
      "labelInput": "Texto para estilizar",
      "placeholder": "Digite um título curto, uma linha de bio ou um CTA...",
      "previewEmpty": "Pré-visualização"
    }
  },
  "utm-link-builder": {
    "strings": {
      "presets": {
        "instagramBio": "Bio do Instagram",
        "linkedinPost": "Publicação no LinkedIn",
        "newsletter": "Newsletter",
        "youtubeDescription": "Descrição do YouTube"
      },
      "presetsLabel": "Predefinições rápidas de canal:",
      "errorEmpty": "Insira a URL do site de destino.",
      "errorInvalid": "Insira uma URL de destino válida (por exemplo, https://example.com/landing).",
      "labelUrl": "URL de destino do site *",
      "labelSource": "Origem da campanha (utm_source) *",
      "phSource": "ex.: instagram, newsletter, google",
      "labelMedium": "Mídia da campanha (utm_medium) *",
      "phMedium": "ex.: social, cpc, email, video",
      "labelCampaign": "Nome da campanha (utm_campaign)",
      "phCampaign": "ex.: spring_launch",
      "labelContent": "Conteúdo da campanha (utm_content)",
      "phContent": "ex.: hero_banner, bio_button",
      "labelTerm": "Termo da campanha (utm_term)",
      "phTerm": "Palavra-chave paga ou tag de público opcional",
      "normalizeLabel": "Forçar minúsculas e converter espaços em sublinhados (`_`)",
      "generatedTitle": "URL de campanha gerada",
      "copyUtm": "Copiar URL UTM",
      "thParam": "Parâmetro de consulta",
      "thValue": "Valor normalizado"
    }
  },
'add-pdf-page-numbers': {
    strings: {
      errStart: 'O número da página inicial deve ser um número inteiro de 1 ou maior.',
      stampedSuccess: (n: number, size: string) => `Números de página estampados em ${n} página(s) (${size}).`,
      pageOfLabel: (cur: number, total: number) => `Página ${cur} de ${total}`,
      dropTitleEmpty: 'Escolha um arquivo PDF para adicionar números de página',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropSub: 'Insere rótulos de página vetoriais nítidos em relatórios, contratos e pacotes',
      labelPos: 'Posição',
      optBottomCenter: 'Inferior centralizada',
      optBottomRight: 'Inferior direita',
      optBottomLeft: 'Inferior esquerda',
      optTopRight: 'Superior direita',
      labelFmt: 'Formato do rótulo',
      optPageOf: 'Página 1 de N',
      optSlash: '1 / N',
      optNumberOnly: '1, 2, 3...',
      labelStart: 'Número inicial',
      labelSize: 'Tamanho da fonte (pt)',
      opt9: '9 pt (sutil)',
      opt11: '11 pt (padrão)',
      opt14: '14 pt (grande)',
      skipCover: 'Pular a capa (começar a numeração na página 2)',
      numbering: 'Numerando páginas...',
      addBtn: 'Adicionar números de página e baixar',
    },
  },
  'images-to-pdf': {
    strings: {
      errDecode: (name: string) => `Não foi possível decodificar a imagem "${name}".`,
      errCanvas: 'Contexto 2D do canvas indisponível.',
      errConvert: (name: string) => `Falha ao converter "${name}" para PNG.`,
      errNotImage: (name: string) => `"${name}" não é um arquivo de imagem compatível (PNG, JPG, WebP).`,
      errRead: (name: string) => `Não foi possível ler "${name}".`,
      errLoad: 'Não foi possível carregar a imagem.',
      errEmpty: 'Adicione pelo menos uma imagem primeiro.',
      errBuild: 'Falha ao converter imagens para PDF.',
      createdSuccess: (n: number, size: string) => `PDF de ${n} páginas criado (${size}) com sucesso.`,
      dropTitle: 'Selecione imagens PNG, JPG ou WebP',
      dropSub: 'Converta capturas, digitalizações ou fotos em um único PDF localmente',
      labelSize: 'Tamanho da página do PDF',
      optA4: 'A4 retrato (210 × 297 mm)',
      optLetter: 'Carta dos EUA (8.5 × 11 pol.)',
      optFit: 'Dimensões exatas da imagem',
      labelMargin: 'Margem da página',
      optMargin0: 'Sem margem (0 pt)',
      optMargin24: 'Margem padrão (24 pt)',
      optMargin48: 'Margem ampla (48 pt)',
      labelOut: 'Nome do arquivo de saída',
      moveUp: (name: string) => `Mover ${name} para cima`,
      moveDown: (name: string) => `Mover ${name} para baixo`,
      removeFile: (name: string) => `Remover ${name}`,
      building: 'Gerando PDF...',
      convertBtn: (n: number) => `Converter ${n} imagens para PDF`,
    },
  },
  'merge-pdf': {
    strings: {
      errRead: 'Não foi possível ler os arquivos PDF selecionados.',
      errMin2: 'Adicione pelo menos dois arquivos PDF para mesclar.',
      mergedSuccess: (n: number, pages: number, size: string) =>
        `${n} PDFs mesclados (${pages} páginas, ${size}) com sucesso.`,
      dropValidating: 'Validando arquivos PDF...',
      dropTitle: 'Selecione ou solte vários arquivos PDF',
      dropSub: 'Mesclagem 100% no navegador via pdf-lib · Somente PDFs sem criptografia · Nunca enviados',
      filesQueued: 'arquivos na fila',
      totalPagesLabel: 'páginas no total',
      combinedSize: 'tamanho de entrada combinado',
      clearQueue: 'Limpar fila',
      pageSingular: 'página',
      pagePlural: 'páginas',
      moveUp: (name: string) => `Mover ${name} para cima`,
      moveDown: (name: string) => `Mover ${name} para baixo`,
      removeFile: (name: string) => `Remover ${name}`,
      outName: 'Nome do arquivo de saída',
      merging: 'Mesclando PDFs...',
      mergeBtn: (n: number) => `Mesclar ${n} PDFs e baixar`,
    },
  },
  'pdf-metadata-editor': {
    strings: {
      clearedMsg: 'Campos de metadados editáveis limpos. Clique em Salvar e baixar PDF para aplicar.',
      savedSuccess: (size: string) => `Metadados atualizados do PDF salvos (${size}).`,
      dropTitleEmpty: 'Escolha um arquivo PDF para inspecionar ou editar metadados',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
      dropSub: 'Inspecione as propriedades do documento, limpe tags de autor/software ou defina títulos de SEO limpos',
      labelTitle: 'Título do documento',
      labelAuthor: 'Autor',
      labelSubject: 'Assunto / resumo',
      labelKeywords: 'Palavras-chave (separadas por vírgula)',
      labelCreator: 'Aplicativo criador',
      labelProducer: 'Produtor do PDF',
      saving: 'Salvando PDF...',
      saveBtn: 'Salvar metadados e baixar PDF',
      stripBtn: 'Remover todos os campos de metadados',
    },
  },
  'pdf-page-rotator': {
    strings: {
      errNoMatch: 'Nenhuma página correspondente encontrada para girar.',
      rotatedSuccess: (a: number, b: number, deg: number, size: string) =>
        `${a} de ${b} páginas giradas ${deg}° no sentido horário (${size}).`,
      dropTitleEmpty: 'Escolha um arquivo PDF para girar páginas',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropSub: 'Gire todas as páginas ou intervalos específicos localmente, sem envios ao servidor',
      labelAngle: 'Ângulo de rotação',
      opt90: '90° no sentido horário (direita)',
      opt270: '90° no sentido anti-horário (esquerda / 270°)',
      opt180: '180° de cabeça para baixo',
      labelScope: 'Aplicar a',
      optAll: (n: number) => `Todas as páginas (${n})`,
      optRange: 'Intervalos de páginas específicos',
      optOdd: 'Somente páginas ímpares',
      optEven: 'Somente páginas pares',
      labelRangeInput: (n: number) => `Números / intervalos de página (1–${n})`,
      phRange: 'ex.: 1, 3-5',
      rotating: 'Girando páginas...',
      rotateBtn: 'Aplicar rotação e baixar PDF',
    },
  },
  'pdf-text-extractor': {
    strings: {
      pageMarker: (n: number) => `--- Página ${n} ---`,
      dropExtracting: 'Extraindo a camada de texto do PDF...',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropTitleEmpty: 'Escolha um PDF baseado em texto para extrair o texto',
      dropSub: 'Extrai o texto Unicode incorporado localmente via PDF.js · Zero envio ao servidor',
      noTextTitle: 'Nenhuma camada de texto selecionável encontrada:',
      noTextBody:
        'Este PDF parece conter imagens digitalizadas ou caminhos vetoriais contornados em vez de uma camada de texto incorporada. O reconhecimento óptico de caracteres (OCR) no lado do cliente não é realizado offline.',
      markersLabelBefore: 'Incluir marcadores de cabeçalho de página (',
      markersCode: '--- Página N ---',
      markersLabelAfter: ')',
      copyText: 'Copiar texto',
      downloadTxt: 'Baixar .txt',
      outputAria: 'Saída de texto extraído do PDF',
      pagesScanned: 'Páginas digitalizadas:',
      wordsExtracted: 'Palavras extraídas:',
      textSize: 'Tamanho do texto:',
    },
  },
  'pdf-to-images': {
    strings: {
      errBatch: 'Renderize até 20 páginas por lote para manter a memória do canvas do navegador rápida e responsiva.',
      errCanvas: 'Contexto 2D do canvas indisponível.',
      dropTitleEmpty: 'Escolha um PDF para renderizar como imagens',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
      dropSub: 'Renderizado localmente via canvas do PDF.js · Saída PNG ou JPG',
      labelRange: 'Páginas ("all" ou intervalo como 1-4, 6)',
      labelFormat: 'Formato de imagem',
      optPng: 'PNG (sem perdas / texto nítido)',
      optJpg: 'JPG (compacto, ideal para fotos)',
      labelScale: 'Resolução de renderização',
      optScale1: '1.0× (72 DPI, pré-visualização rápida)',
      optScale15: '1.5× (108 DPI, padrão)',
      optScale2: '2.0× (144 DPI, nítido)',
      rendering: 'Renderizando páginas do PDF...',
      renderBtn: 'Renderizar páginas do PDF como imagens',
      pageAlt: (n: number) => `Pré-visualização da página ${n}`,
      pageLabel: (n: number, w: number, h: number) => `Página ${n} · ${w}×${h}`,
    },
  },
  'pdf-watermark': {
    strings: {
      colorLabels: {
        slate: 'Cinza neutro',
        indigo: 'Índigo da marca',
        red: 'Vermelho de carimbo',
      },
      defaultWatermark: 'CONFIDENCIAL',
      errEmpty: 'Insira o texto da marca d’água antes de gerar o PDF.',
      appliedSuccess: (text: string, n: number, size: string) =>
        `Marca d’água "${text}" aplicada a ${n} página(s) (${size}).`,
      dropTitleEmpty: 'Escolha um arquivo PDF para colocar marca d’água',
      dropTitleFile: (name: string, pages: number) => `${name} (${pages} páginas)`,
      dropSub: 'Incorpora carimbos de texto vetoriais nítidos localmente via pdf-lib',
      labelText: 'Texto da marca d’água',
      phText: 'CONFIDENCIAL / RASCUNHO / USO INTERNO',
      labelColor: 'Cor do carimbo',
      firstPageOnly: 'Somente a primeira página',
      labelSize: 'Tamanho da fonte:',
      ptSuffix: (n: number) => `${n} pt`,
      labelOpacity: 'Opacidade:',
      labelAngle: 'Rotação:',
      applying: 'Aplicando marca d’água ao PDF...',
      applyBtn: 'Aplicar marca d’água e baixar',
    },
  },
  'reorder-delete-pdf-pages': {
    strings: {
      errMin1: 'Um PDF deve manter pelo menos 1 página.',
      savedSuccess: (n: number, size: string) => `PDF atualizado salvo com ${n} páginas (${size}).`,
      loading: 'Carregando páginas e pré-visualizações do PDF...',
      dropTitleFile: (name: string, n: number) => `${name} (${n} páginas ativas)`,
      dropTitleEmpty: 'Escolha um arquivo PDF para reordenar ou excluir páginas',
      dropSub: 'Mova páginas, duplique folhas ou remova páginas indesejadas localmente',
      outCount: 'Contagem de páginas de saída:',
      saving: 'Salvando PDF...',
      saveBtn: 'Salvar PDF reordenado',
      thumbAlt: (n: number) => `Página original ${n}`,
      thumbFallback: (n: number) => `Pág. orig. ${n}`,
      posLabel: (n: number) => `Pos. n.º ${n}`,
      origLabel: (n: number) => `(Orig. ${n})`,
      moveEarlierTitle: 'Mover para antes',
      moveEarlierAria: (n: number) => `Mover a posição ${n} para antes`,
      moveLaterTitle: 'Mover para depois',
      moveLaterAria: (n: number) => `Mover a posição ${n} para depois`,
      dupTitle: 'Duplicar página',
      dupAria: (n: number) => `Duplicar a página na posição ${n}`,
      delTitle: 'Excluir página',
      delAria: (n: number) => `Excluir a página na posição ${n}`,
    },
  },
  'split-pdf': {
    strings: {
      errBurst: (n: number) =>
        `A divisão em massa baixa um arquivo por página. Para documentos com mais de 25 páginas (${n} páginas aqui), extraia intervalos para que seu navegador não bloqueie downloads em massa.`,
      exportedAll: (n: number) => `${n} arquivos PDF de uma página exportados.`,
      errNoMatch: 'Nenhuma página correspondeu a essa seleção (por exemplo, Páginas pares exige 2 ou mais páginas).',
      extractedSuccess: (a: number, b: number, size: string) =>
        `${a} de ${b} páginas extraídas (${size}).`,
      dropTitleEmpty: 'Escolha um arquivo PDF para dividir ou extrair',
      dropTitleFile: (name: string, pages: number, size: string) => `${name} (${pages} páginas · ${size})`,
      dropSub: 'Processado localmente na memória · Clique para substituir o documento',
      modeRange: 'Extrair intervalos de páginas',
      modeOdd: 'Somente páginas ímpares',
      modeEven: 'Somente páginas pares',
      modeBurst: 'Dividir todas as páginas individuais',
      labelRange: (n: number) => `Páginas para extrair (1–${n})`,
      phRange: 'ex.: 1-3, 5, 8-10',
      rangeHintBefore: 'Use vírgulas e hifens (por exemplo ',
      rangeHintAfter: ').',
      extracting: 'Extraindo PDF...',
      splitBtn: 'Dividir e baixar PDF',
    },
  },
  'qr-code-generator': {
    strings: {
      tabUrl: 'URL do site',
      tabText: 'Texto simples',
      tabWifi: 'Rede Wi-Fi',
      tabEmail: 'Link de e-mail',
      tabPhone: 'Número de telefone',
      labelUrl: 'URL de destino',
      labelText: 'Conteúdo de texto',
      labelSsid: 'Nome da rede (SSID)',
      labelSecurity: 'Tipo de segurança',
      optWpa: 'WPA / WPA2 / WPA3',
      optWep: 'WEP',
      optOpen: 'Aberta (sem senha)',
      labelWifiPass: 'Senha do Wi-Fi',
      hiddenSsid: 'Rede com SSID oculto',
      labelEmailTo: 'E-mail do destinatário',
      labelEmailSubject: 'Assunto (opcional)',
      labelPhone: 'Número de telefone (formato E.164 recomendado)',
      sizeLabel: (size: number) => `Tamanho (${size}px)`,
      labelEc: 'Correção de erros',
      labelFg: 'Primeiro plano',
      labelBg: 'Fundo',
      quietZone: 'Margem da zona de silêncio:',
      modulesLabel: (margin: number) => `${margin} módulos`,
      encodedPayload: 'String de dados codificada',
      copyPayload: 'Copiar dados',
      emptyError: 'Insira conteúdo acima para gerar um código QR escaneável.',
      encodeError: 'Não foi possível codificar o conteúdo do QR.',
      qrAlt: 'Código QR escaneável gerado',
      downloadPng: 'Baixar PNG',
      downloadSvg: 'Baixar SVG',
      copySvg: 'Copiar SVG',
      sampleText: 'Bem-vindo ao UtilityFlow!',
    },
  },
  'social-character-limit-checker': {
    strings: {
      surfaces: {
        standardPost: 'Publicação padrão',
        profileBio: 'Bio do perfil',
        caption: 'Legenda',
        feedPost: 'Publicação do feed',
        videoCaption: 'Legenda do vídeo',
        post: 'Publicação',
        videoTitle: 'Título do vídeo',
        description: 'Descrição',
      },
      sampleText:
        'Enviar mais rápido começa com pequenas melhorias diárias.\n\nExperimente nossas utilidades para criadores no navegador em https://utilityflow.online/tools/ — sem necessidade de cadastro.\n\n#CreatorTools #Workflow',
      labelInput: 'Rascunho de publicação ou bio',
      copyDraft: 'Copiar rascunho',
      placeholder: 'Escreva ou cole sua legenda, publicação, bio ou título do YouTube...',
      charsLabel: 'Caracteres:',
      wordsLabel: 'Palavras:',
      hashtagsLabel: 'Hashtags:',
      mentionsLabel: 'Menções:',
      urlsLabel: 'URLs detectadas:',
      urlsWeighted: '(ponderadas em 23 caracteres no X)',
      overLimit: (n: number, loc: string) => `${n.toLocaleString(loc)} acima do limite`,
      left: (n: number, loc: string) => `${n.toLocaleString(loc)} restantes`,
      foldLabel: (n: number) => `Dobra ~${n} car.`,
      foldTitle: 'Pré-visualização de truncamento / dobra "Ver mais"',
      foldDesc: (limit: number, platform: string, surface: string) =>
        `Pré-visualização do que os leitores veem antes de tocar em "Ver mais" (${limit} caracteres para ${platform} ${surface}).`,
      selectAria: 'Escolha a plataforma para a pré-visualização de truncamento',
      previewEmpty: 'A pré-visualização aparece aqui...',
    },
  },
  'social-thumbnail-previewer': {
    strings: {
      sampleTitle: 'Como criamos 85 utilidades rápidas no navegador sem rastreamento',
      sampleChannel: 'UtilityFlow Studio',
      sampleViews: '24 mil visualizações · há 2 dias',
      errNotImage: 'Selecione um arquivo de imagem PNG, JPG ou WebP.',
      errDecode: 'Não foi possível decodificar este arquivo de imagem no navegador.',
      previewEyebrow: 'PRÉ-VISUALIZAÇÃO 1280 × 720',
      emptyThumb: 'Envie a imagem da sua miniatura para verificar a legibilidade no feed',
      thumbAlt: 'Pré-visualização da miniatura enviada',
      safeZoneTitle: 'Zona de sobreposição do selo de duração',
      chooseThumb: 'Escolher miniatura local (PNG / JPG / WebP)',
      replaceThumb: (name: string) => `Substituir: ${name}`,
      recommended: 'Recomendado 1280×720 (16:9), menos de 2 MB · Nunca é enviado',
      diagTitle: 'Diagnóstico de especificações da imagem',
      dimLabel: 'Dimensões',
      dimHdOk: '(HD OK)',
      dimUnder: '(<1280 px)',
      aspectLabel: 'Proporção',
      aspectMatch: 'Corresponde a 16:9',
      aspectNo: 'Não é 16:9 (pode cortar ou exibir barras)',
      sizeLabel: 'Tamanho do arquivo',
      sizeOk: '(<2 MB OK)',
      sizeOver: '(acima do limite de 2 MB)',
      titleLabel: (len: number) => `Título do vídeo (${len}/100 caracteres · ~60 visíveis no celular)`,
      channelLabel: 'Nome do canal',
      durationLabel: 'Duração',
      darkMode: 'Pré-visualização do feed em modo escuro',
      safeZone: 'Destacar a zona do canto do selo de duração',
      desktopCard: 'Cartão do feed principal no desktop',
      sidebar: 'Barra lateral de exibição no desktop (compacta recomendada)',
      untitled: 'Vídeo sem título',
    },
  },
  'youtube-timestamp-generator': {
    strings: {
      sampleChapters: [
        { id: 1, time: '00:00', title: 'Introdução e visão geral' },
        { id: 2, time: '01:15', title: 'Configuração da arquitetura principal' },
        { id: 3, time: '04:40', title: 'Demonstração ao vivo e erros comuns' },
        { id: 4, time: '08:20', title: 'Resumo e próximos passos' },
      ],
      newChapter: (n: number) => `Capítulo ${n}`,
      defaultChapterTitle: 'Capítulo',
      warnInvalid: 'Um ou mais carimbos de data/hora usam formato inválido (use MM:SS ou HH:MM:SS).',
      warnMin3: 'O YouTube exige pelo menos 3 carimbos de data/hora em ordem crescente para ativar os capítulos de vídeo.',
      warnFirst: 'O primeiro capítulo deve começar em 00:00 para o YouTube reconhecer os capítulos.',
      warnOrder: 'Os capítulos estão fora de ordem cronológica (clique em Ordenar cronologicamente).',
      warnShort: (title: string) =>
        `O capítulo "${title}" tem menos de 10 segundos após o capítulo anterior (o mínimo do YouTube é 10 s).`,
      labelUrl: 'URL do vídeo do YouTube ou ID do vídeo (para links diretos com `?t=`)',
      heading: 'Capítulos do vídeo',
      sortBtn: 'Ordenar cronologicamente',
      addBtn: 'Adicionar capítulo',
      tsAria: (n: number) => `Carimbo de data/hora do capítulo ${n}`,
      titleAria: (n: number) => `Título do capítulo ${n}`,
      phTitle: 'Título do capítulo',
      removeAria: (n: number) => `Remover capítulo ${n}`,
      specTitle: 'Verificação de especificações de capítulos do YouTube:',
      descBlock: 'Bloco de capítulos da descrição',
      copyChapters: 'Copiar capítulos',
      emptyChapters: 'Adicione capítulos acima para gerar o bloco de descrição.',
      shareTitle: 'Links de compartilhamento com carimbo de data/hora',
      videoIdLabel: (id: string) => `(ID do vídeo: ${id})`,
      noVideoId: '(Insira uma URL válida do YouTube acima)',
      noVideoHint: 'Cole uma URL válida do youtube.com ou youtu.be para criar links de salto `?t=` clicáveis para cada capítulo.',
    },
  },
  'pdf-utils': {
    strings: {
      noFile: 'Nenhum arquivo foi selecionado.',
      notPdf: (name: string) => `"${name}" não parece ser um arquivo PDF.`,
      empty: (name: string) => `"${name}" está vazio ou truncado.`,
      noHeader: (name: string) =>
        `"${name}" não tem um cabeçalho %PDF válido e não pode ser processado.`,
      enterRanges: 'Insira números de página ou intervalos como "1-3, 5".',
      rangeOutside: (token: string, total: number) =>
        `O intervalo "${token}" está fora dos limites do documento (1–${total} páginas).`,
      rangeReversed: (token: string) =>
        `O intervalo "${token}" tem uma página inicial maior que a final.`,
      pageMissing: (page: number, total: number) =>
        `A página ${page} não existe (o documento tem ${total} páginas).`,
      invalidSyntax: (token: string) =>
        `Sintaxe de página inválida: "${token}". Use números e intervalos como "1-3, 5".`,
      encrypted:
        'Este PDF está criptografado ou protegido por senha. Desbloqueie-o antes de processá-lo localmente.',
      unable: 'Não foi possível processar o arquivo PDF.',
      allKeywords: ['all', 'todas', 'todos'],
    },
  },
};
