import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — Batch 3: Calculator tools (15 tools).
 * Filled by Phase 2 translation. Source: src/registry/batches/batch3/
 * (calcToolsPart1/2/3) and src/locales/es/tools/batch3.ts (Spanish twin —
 * same tool ids and structure, content translated from English).
 * Slugs are unique, lowercase, hyphenated, with no collision against
 * English slugs or reserved paths.
 */
export const PT_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'calculadora-de-idade',
    name: 'Calculadora de Idade',
    shortDescription:
      'Calcule a idade cronológica exata em anos, meses e dias, além do total de semanas, dias e a contagem regressiva para o próximo aniversário.',
    keywords: [
      'calculadora de idade',
      'idade cronológica',
      'calculadora de data de nascimento',
      'contagem regressiva de aniversário',
      'idade exata em dias',
      'idade em anos meses e dias',
      'quantos anos eu tenho calculadora',
      'calculadora de idade por data de nascimento',
      'verificador de idade de aniversário',
    ],
    seo: {
      title: 'Calculadora de Idade – Anos, Meses e Dias | UtilityFlow',
      description:
        'Calcule sua idade exata a partir da data de nascimento em anos, meses, dias, semanas e dias totais, com contagem regressiva para o próximo aniversário, grátis.',
      primaryKeyword: 'calculadora de idade',
      secondaryKeywords: [
        'calculadora de idade cronológica',
        'quantos anos tenho pela data de nascimento',
        'idade em dias semanas e meses',
        'calcular minha idade exata hoje',
      ],
      longTailKeywords: [
        'calcular idade exata em anos meses e dias online',
        'quantos dias faltam para meu próximo aniversário',
        'consultar idade em uma data futura ou passada',
        'quantos anos eu tenho hoje calculadora',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcule a idade cronológica exata entre uma data de nascimento e hoje — ou qualquer data passada ou futura — levando em conta com precisão os meses de durações diferentes e os anos bissextos.',
  },
  'percentage-calculator': {
    slug: 'calculadora-de-porcentagem',
    name: 'Calculadora de Porcentagem',
    shortDescription:
      'Resolva porcentagem de um número, quanto por cento X é de Y e aumento ou redução percentual na hora.',
    keywords: [
      'calculadora de porcentagem',
      'calculadora de variação percentual',
      'aumento e redução percentual',
      'quanto por cento de',
      'calculadora de porcentagem de um número',
      'calculadora de diferença percentual',
      'calcular aumento percentual',
      'calculadora de redução percentual',
      'calculadora de fórmula de porcentagem',
    ],
    seo: {
      title: 'Calculadora de Porcentagem – Valor e Variação | UtilityFlow',
      description:
        'Calcule X% de Y, descubra quanto por cento um número é de outro e meça o aumento ou a redução percentual em um só lugar, grátis no seu navegador, sem cadastro.',
      primaryKeyword: 'calculadora de porcentagem',
      secondaryKeywords: [
        'calculadora de variação percentual',
        'calculadora de aumento percentual',
        'razão para porcentagem',
        'calculadora de porcentagem de um número',
      ],
      longTailKeywords: [
        'calcular aumento ou redução percentual entre dois números',
        'como descobrir quanto por cento x é de y',
        'solucionador de porcentagem instantâneo no navegador',
        'quanto é x por cento de y calculadora online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Resolva as três perguntas de porcentagem mais comuns — encontrar X% de um valor, determinar que porcentagem X representa de Y e medir o crescimento ou a queda percentual — em paralelo.',
  },
  'loan-emi-calculator': {
    slug: 'calculadora-de-parcela-de-emprestimo',
    name: 'Calculadora de Empréstimo e Parcela (EMI)',
    shortDescription:
      'Calcule as parcelas mensais (EMI), o total de juros a pagar e um cronograma de amortização anual ou mensal.',
    keywords: [
      'calculadora de empréstimo',
      'calculadora de emi',
      'cronograma de amortização',
      'parcela mensal de empréstimo',
      'calculadora de parcela de empréstimo',
      'calculadora de emi de empréstimo pessoal',
      'calculadora de emi de empréstimo de carro',
      'calculadora de emi de financiamento imobiliário',
      'calculadora de quitação de empréstimo',
    ],
    seo: {
      title: 'Calculadora de Empréstimo – Parcela EMI | UtilityFlow',
      description:
        'Calcule a parcela mensal (EMI), o custo total de juros e o cronograma completo de amortização para empréstimos pessoais, de carro ou empresariais, grátis.',
      primaryKeyword: 'calculadora de emi',
      secondaryKeywords: [
        'calculadora de parcela mensal de empréstimo',
        'cronograma de amortização de empréstimo',
        'calculadora de empréstimo de carro',
        'calculadora de emi de empréstimo pessoal',
      ],
      longTailKeywords: [
        'calcular parcela mensal e juros totais de empréstimo online',
        'tabela de principal e juros de empréstimo',
        'calculadora de quitação de empréstimo pessoal e de carro',
        'como calcular emi de financiamento imobiliário online',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calcule sua Parcela Mensal (EMI) exata, o total de juros pagos ao longo do prazo do empréstimo, a proporção entre principal e juros e uma tabela de amortização transparente ano a ano ou mês a mês.',
  },
  'mortgage-calculator': {
    slug: 'calculadora-de-financiamento-imobiliario',
    name: 'Calculadora de Financiamento Imobiliário',
    shortDescription:
      'Estime as parcelas mensais do financiamento incluindo entrada, taxa de juros, imposto sobre a propriedade, seguro e PMI.',
    keywords: [
      'calculadora de financiamento imobiliário',
      'parcela de financiamento imobiliário',
      'calculadora piti',
      'entrada de financiamento imobiliário',
      'calculadora de parcela mensal de financiamento',
      'estimador de parcela de financiamento',
      'calculadora de pmi',
      'calculadora de financiamento de 15 vs 30 anos',
      'calculadora de juros de financiamento',
    ],
    seo: {
      title: 'Calculadora de Financiamento – Parcela e PMI | UtilityFlow',
      description:
        'Estime as parcelas mensais do financiamento imobiliário com entrada, impostos sobre a propriedade, seguro, taxas de condomínio e PMI — grátis, no navegador.',
      primaryKeyword: 'calculadora de financiamento imobiliário',
      secondaryKeywords: [
        'calculadora de parcela piti',
        'calculadora de juros de financiamento imobiliário',
        'estimador de pmi',
        'calculadora de parcela mensal de financiamento',
      ],
      longTailKeywords: [
        'calcular parcela mensal de financiamento com imposto e seguro',
        'comparar financiamento de 15 anos vs 30 anos',
        'estimar saldo de financiamento ao longo do tempo',
        'quanto de financiamento consigo pagar por mês',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Modele sua verdadeira obrigação mensal de moradia (Principal e Juros mais Impostos sobre a Propriedade, Seguro Residencial, taxas de condomínio e Seguro Hipotecário Privado — PMI) junto com os juros totais ao longo da vida do empréstimo e a redução anual do saldo.',
  },
  'compound-interest-calculator': {
    slug: 'calculadora-de-juros-compostos',
    name: 'Calculadora de Juros Compostos',
    shortDescription:
      'Projete o crescimento de investimentos com depósito inicial, aportes mensais recorrentes, frequência de capitalização e ajuste de inflação.',
    keywords: [
      'calculadora de juros compostos',
      'calculadora de crescimento de investimento',
      'capitalização de poupança',
      'calculadora de valor futuro',
      'calculadora de poupança composta',
      'calculadora de capitalização mensal',
      'calculadora de retorno de investimento',
      'calculadora de poupança para aposentadoria',
      'juros compostos com aportes',
    ],
    seo: {
      title: 'Calculadora de Juros Compostos – Crescimento | UtilityFlow',
      description:
        'Projete o saldo futuro do investimento com principal inicial, aportes mensais e capitalização diária, mensal, trimestral ou anual, com cronograma ano a ano.',
      primaryKeyword: 'calculadora de juros compostos',
      secondaryKeywords: [
        'calculadora de poupança composta',
        'calculadora de valor futuro de investimento',
        'crescimento de aporte mensal',
        'calculadora de crescimento de investimento',
      ],
      longTailKeywords: [
        'calcular juros compostos com aportes mensais online',
        'comparar crescimento com capitalização mensal vs diária',
        'cronograma de juros compostos ano a ano',
        'quanto minha poupança vai crescer em 20 anos',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Preveja como um valor inicial em parcela única mais depósitos mensais constantes crescem ao longo dos anos por meio dos juros compostos, com frequência de capitalização selecionável e uma tabela ano a ano de principal e juros.',
  },
  'discount-margin-calculator': {
    slug: 'calculadora-de-desconto-e-margem',
    name: 'Calculadora de Desconto e Margem',
    shortDescription:
      'Calcule preços de venda com descontos acumulados ou compute a margem de lucro no varejo, o markup % e o lucro bruto a partir do custo.',
    keywords: [
      'calculadora de desconto',
      'calculadora de margem de lucro',
      'markup vs margem',
      'calculadora de preço de venda',
      'calculadora de margem bruta',
      'calculadora de porcentagem de markup',
      'calculadora de desconto acumulado',
      'calculadora de markup de varejo',
      'preço de venda após desconto',
    ],
    seo: {
      title: 'Calculadora de Desconto e Margem – Preços | UtilityFlow',
      description:
        'Calcule o preço final com descontos acumulados e imposto, ou compare a margem bruta com o markup a partir do custo e do preço de venda, grátis online.',
      primaryKeyword: 'calculadora de desconto e margem',
      secondaryKeywords: [
        'calculadora de preço de venda com desconto',
        'calculadora de margem bruta vs markup',
        'calculadora de lucro de varejo',
        'calculadora de preço com desconto',
      ],
      longTailKeywords: [
        'calcular preço final após desconto duplo e imposto sobre vendas',
        'diferença entre margem de lucro e porcentagem de markup',
        'calculadora de margem e lucro de sku de ecommerce',
        'calcular porcentagem de margem a partir do custo e do preço de venda',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Alterne sem complicação entre o modo Desconto de Varejo (descontos de cupom acumulados mais imposto opcional sobre vendas) e o modo Margem de Lucro e Markup para precificar produtos com precisão, sem confundir margem com markup.',
  },
  'vat-tax-calculator': {
    slug: 'calculadora-de-iva-e-impostos',
    name: 'Calculadora de IVA e Impostos sobre Vendas',
    shortDescription:
      'Some IVA/ICMS/imposto sobre vendas a preços líquidos ou extraia o imposto de faturas brutas com imposto incluído.',
    keywords: [
      'calculadora de iva',
      'calculadora de imposto sobre vendas',
      'calculadora de iva reverso',
      'calculadora de icms',
      'somar iva ao preço',
      'extrair imposto do valor bruto',
      'calculadora de iva incluído',
      'imposto sobre vendas no total',
      'calculadora de preço líquido',
    ],
    seo: {
      title: 'Calculadora de IVA – Preço Líquido e Bruto | UtilityFlow',
      description:
        'Some IVA ou imposto sobre vendas a um subtotal líquido, ou extraia o imposto e o preço líquido de um total bruto com imposto incluído, grátis no navegador.',
      primaryKeyword: 'calculadora de iva',
      secondaryKeywords: [
        'calculadora de iva reverso',
        'excluir imposto sobre vendas do total',
        'calculadora de icms com e sem imposto',
        'calculadora de soma de imposto sobre vendas',
      ],
      longTailKeywords: [
        'como remover iva do preço bruto online',
        'somar 20 por cento de iva ou taxa de imposto personalizada',
        'calculadora de detalhamento líquido imposto e bruto de fatura',
        'calcular iva reverso a partir do preço total com imposto',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Calcule Preço Líquido, Valor do Imposto e Total Bruto em qualquer direção — some IVA/ICMS/imposto sobre vendas a um subtotal antes do imposto, ou extraia o valor exato antes do imposto de um recibo que já inclui o imposto.',
  },
  'salary-calculator': {
    slug: 'calculadora-de-salario',
    name: 'Calculadora de Salário',
    shortDescription:
      'Converta remuneração por hora, dia, semana, quinzena, mês e ano usando horas e semanas personalizadas por ano.',
    keywords: [
      'calculadora de salário',
      'salário por hora para anual',
      'conversor de salário',
      'calculadora de remuneração',
      'salário anual para valor por hora',
      'calculadora de salário mensal',
      'calculadora de pagamento quinzenal',
      'conversor de salário bruto',
      'salário para valor por hora',
    ],
    seo: {
      title: 'Calculadora de Salário – Hora para Anual | UtilityFlow',
      description:
        'Converta salário bruto por hora, dia, semana, quinzena, mês e ano usando horas personalizadas por semana e semanas pagas por ano, grátis e na hora no navegador.',
      primaryKeyword: 'calculadora de salário',
      secondaryKeywords: [
        'calculadora de salário por hora para anual',
        'salário anual para valor por hora',
        'calculadora de pagamento quinzenal',
        'conversor de salário bruto',
      ],
      longTailKeywords: [
        'converter 50 dólares por hora em salário anual',
        'detalhamento de salário bruto com semanas de férias não pagas',
        'conversor de remuneração com horas personalizadas por semana',
        'converter salário anual em pagamento mensal e quinzenal',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Traduza qualquer taxa de remuneração — por hora, por dia, por semana, quinzenal, duas vezes por mês, mensal ou anual — para todas as frequências de pagamento, com horas de trabalho configuráveis por semana e semanas pagas por ano.',
  },
  'tip-calculator': {
    slug: 'calculadora-de-gorjeta',
    name: 'Calculadora de Gorjeta e Divisão de Conta',
    shortDescription:
      'Calcule valores de gorjeta, exclusão opcional do imposto antes da gorjeta, divisão da conta por pessoa e arredondamento limpo.',
    keywords: [
      'calculadora de gorjeta',
      'calculadora de divisão de conta',
      'calculadora de gorjeta de restaurante',
      'dividir conta igualmente',
      'calculadora de porcentagem de gorjeta',
      'calculadora para dividir conta',
      'gorjeta sobre conta sem imposto',
      'divisor de conta de restaurante',
      'quanto dar de gorjeta calculadora',
    ],
    seo: {
      title: 'Calculadora de Gorjeta – Dividir Contas | UtilityFlow',
      description:
        'Calcule gorjetas com atalhos de porcentagem, dê gorjeta sobre o subtotal sem imposto, divida a conta igualmente e arredonde a parte de cada pessoa, em segundos.',
      primaryKeyword: 'calculadora de gorjeta',
      secondaryKeywords: [
        'calculadora de divisão de conta',
        'calculadora de caixinha',
        'divisão de gorjeta de restaurante',
        'calculadora de gorjeta por pessoa',
      ],
      longTailKeywords: [
        'calcular gorjeta de 18 ou 20 por cento antes do imposto online',
        'dividir conta de jantar e gorjeta entre amigos igualmente',
        'arredondar total por pessoa calculadora de gorjeta',
        'dividir conta de restaurante com gorjeta e imposto por pessoa',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Calcule rapidamente uma gorjeta justa e divida contas de restaurante, entrega ou passeios em grupo igualmente entre qualquer número de pessoas — com exclusão opcional do imposto e arredondamento da conta.',
  },
  'bmi-calculator': {
    slug: 'calculadora-de-imc',
    name: 'Calculadora de IMC',
    shortDescription:
      'Calcule o Índice de Massa Corporal (IMC) em unidades métricas ou imperiais, com as categorias de peso da OMS e a faixa de peso saudável.',
    keywords: [
      'calculadora de imc',
      'índice de massa corporal',
      'faixa de peso saudável',
      'imc métrico imperial',
      'calcular imc',
      'calculadora de tabela de imc',
      'imc para adultos',
      'calculadora de peso saudável',
      'calculadora de imc kg m2',
    ],
    seo: {
      title: 'Calculadora de IMC – Índice de Massa Corporal | UtilityFlow',
      description:
        'Calcule seu Índice de Massa Corporal em unidades métricas ou imperiais, veja sua categoria de peso da OMS e a faixa de peso saudável para sua altura, grátis.',
      primaryKeyword: 'calculadora de imc',
      secondaryKeywords: [
        'calculadora de índice de massa corporal',
        'faixa de peso saudável de imc',
        'calculadora de imc imperial',
        'calculadora de categoria de peso de imc',
      ],
      longTailKeywords: [
        'calcular imc em pés polegadas e libras',
        'categorias de imc para adultos da organização mundial da saúde',
        'encontrar faixa de peso saudável para altura',
        'qual é a faixa de imc saudável para minha altura',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Calcule o Índice de Massa Corporal (IMC) de adultos usando medidas Métricas (cm/kg) ou Imperiais (pés, polegadas/libras), confira as faixas de classificação da Organização Mundial da Saúde e veja a faixa de peso saudável de 18,5–24,9 para sua altura.',
  },
  'calorie-calculator': {
    slug: 'calculadora-de-calorias',
    name: 'Calculadora de Calorias e TDEE',
    shortDescription:
      'Estime a Taxa Metabólica Basal (TMB) e o Gasto Energético Total Diário (TDEE) com metas de peso.',
    keywords: [
      'calculadora de calorias',
      'calculadora de tdee',
      'calculadora de tmb',
      'ingestão diária de calorias',
      'calculadora de calorias de manutenção',
      'calculadora de déficit calórico',
      'calculadora de calorias para perda de peso',
      'calculadora de macros proteína carboidrato gordura',
      'quantas calorias por dia',
    ],
    seo: {
      title: 'Calculadora de Calorias e TDEE – TMB e Macros | UtilityFlow',
      description:
        'Estime TMB e TDEE com a fórmula de Mifflin-St Jeor, defina metas de perda ou ganho de peso e planeje gramas diárias de proteína, carboidrato e gordura.',
      primaryKeyword: 'calculadora de calorias',
      secondaryKeywords: [
        'calculadora de tdee',
        'calculadora de tmb de mifflin st jeor',
        'calculadora de necessidades calóricas diárias',
        'déficit calórico para perda de peso',
      ],
      longTailKeywords: [
        'calcular calorias de manutenção e déficit de perda de peso online',
        'estimador de gasto calórico diário de mifflin st jeor',
        'calculadora de divisão de macros de tdee métrica e imperial',
        'quantas calorias devo comer por dia para emagrecer',
      ],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Estime sua Taxa Metabólica Basal (TMB) e seu Gasto Energético Total Diário (TDEE) usando a equação de Mifflin-St Jeor, validada clinicamente, com metas de déficit leve, perda de gordura padrão, ganho magro e manutenção de macros.',
  },
  'date-difference-calculator': {
    slug: 'calculadora-de-diferenca-de-datas',
    name: 'Calculadora de Diferença de Datas',
    shortDescription:
      'Encontre anos, meses, dias, dias úteis e fins de semana exatos entre datas, ou some e subtraia intervalos de calendário.',
    keywords: [
      'calculadora de diferença de datas',
      'dias entre datas',
      'contador de dias úteis',
      'somar dias a uma data',
      'calculadora de dias entre duas datas',
      'calculadora de dias úteis',
      'contar dias úteis entre datas',
      'quantos dias até a data',
      'somador e subtrator de datas',
    ],
    seo: {
      title: 'Calculadora de Diferença de Datas – Dias | UtilityFlow',
      description:
        'Conte anos, meses, dias, dias úteis e fins de semana exatos entre duas datas, ou some e subtraia intervalos de calendário de qualquer data, no seu navegador.',
      primaryKeyword: 'calculadora de diferença de datas',
      secondaryKeywords: [
        'dias entre duas datas',
        'contador de dias úteis',
        'calculadora de soma de meses a uma data',
        'contar fins de semana entre datas',
      ],
      longTailKeywords: [
        'contar dias úteis e fins de semana entre duas datas',
        'calcular meses e dias exatos de calendário entre datas',
        'somar ou subtrair anos meses dias de uma data',
        'quantos dias úteis há entre duas datas online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Meça intervalos exatos de calendário entre quaisquer duas datas — incluindo contagens de dias úteis e de fins de semana e a contagem opcional da data final — ou some e subtraia anos, meses e dias de uma data de referência.',
  },
  'time-duration-calculator': {
    slug: 'calculadora-de-duracao-de-tempo',
    name: 'Calculadora de Duração de Tempo',
    shortDescription:
      'Calcule o tempo decorrido HH:MM:SS entre horários (com pausas e turnos noturnos) ou some folhas de ponto de várias linhas.',
    keywords: [
      'calculadora de duração de tempo',
      'calculadora de horas',
      'calculadora de folha de ponto',
      'calculadora de tempo decorrido',
      'calculadora de horas de trabalho',
      'tempo decorrido entre dois horários',
      'calculadora de soma de horas e minutos',
      'calculadora de horas decimais',
      'calculadora de horas de turno',
    ],
    seo: {
      title: 'Calculadora de Duração – Horas e Folhas | UtilityFlow',
      description:
        'Calcule o tempo decorrido em horas, minutos e segundos, desconte pausas não remuneradas, lide com turnos noturnos ou some folhas de ponto.',
      primaryKeyword: 'calculadora de duração de tempo',
      secondaryKeywords: [
        'calculadora de horas de trabalho',
        'somador de duração de folha de ponto',
        'conversor de horas decimais',
        'calculadora de horas de turno noturno',
      ],
      longTailKeywords: [
        'calcular tempo decorrido com pausa de almoço não remunerada e virada de noite',
        'converter duração de tempo hh mm ss em horas decimais',
        'somar várias linhas de horas minutos segundos juntas',
        'como calcular horas de trabalho com pausa de almoço online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Determine as horas, os minutos e os segundos decorridos exatos entre dois horários — lidando com deduções de pausas não remuneradas e turnos noturnos que cruzam a meia-noite — ou some linhas ilimitadas de duração em horas decimais de folha de pagamento.',
  },
  'unit-converter': {
    slug: 'conversor-de-unidades',
    name: 'Conversor de Unidades',
    shortDescription:
      'Converta unidades de Comprimento, Peso, Temperatura, Área, Volume, Velocidade e Armazenamento Digital com uma tabela de referência completa.',
    keywords: [
      'conversor de unidades',
      'conversor métrico imperial',
      'conversor de comprimento peso temperatura',
      'conversor de armazenamento digital',
      'conversor de metros para pés',
      'conversor de kg para libras',
      'conversor de celsius para fahrenheit',
      'conversor de litros para galões',
      'conversor de km para milhas',
    ],
    seo: {
      title: 'Conversor de Unidades – Comprimento e Peso | UtilityFlow',
      description:
        'Converta comprimento, peso, temperatura, área, volume, velocidade e armazenamento digital entre unidades Métricas e Imperiais, com tabela de comparação.',
      primaryKeyword: 'conversor de unidades',
      secondaryKeywords: [
        'conversor de métrico para imperial',
        'temperatura celsius fahrenheit kelvin',
        'conversor de dados gb para gib',
        'conversor de quilômetros para milhas',
      ],
      longTailKeywords: [
        'converter quilômetros para milhas e quilogramas para libras online',
        'conversor de armazenamento gigabyte decimal vs gibibyte binário',
        'tabela de conversor de unidades de ciência e engenharia',
        'como converter celsius para fahrenheit e kelvin online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Converta na hora em sete famílias de medidas — Comprimento, Peso e Massa, Temperatura, Área, Volume, Velocidade e Armazenamento Digital — com uma tabela automática lado a lado mostrando cada unidade da categoria.',
  },
  'roman-numeral-converter': {
    slug: 'conversor-de-numerais-romanos',
    name: 'Conversor de Numerais Romanos',
    shortDescription:
      'Converta números em numerais romanos e numerais romanos em números na hora, incluindo datas em numerais romanos.',
    keywords: [
      'conversor de numerais romanos',
      'numerais romanos para números',
      'converter números em romanos',
      'conversor de datas romanas',
      'calculadora de numerais romanos',
      'que número é MMXXVI',
      'numerais romanos de 1 a 3999',
      'converter ano em numerais romanos',
      'tabela de numerais romanos',
    ],
    seo: {
      title: 'Conversor de Numerais Romanos – 1 a 3999 | UtilityFlow',
      description:
        'Converta números em numerais romanos e numerais romanos em números na hora. Use o conversor gratuito de anos, aniversários e datas em numerais romanos.',
      primaryKeyword: 'conversor de numerais romanos',
      secondaryKeywords: [
        'numerais romanos para números',
        'converter números em romanos',
        'conversor de datas romanas',
        'calculadora de numerais romanos',
      ],
      longTailKeywords: [
        'como converter números em numerais romanos',
        'quanto é 2026 em numerais romanos',
        'converter meu aniversário em numerais romanos',
        'converter um ano em numerais romanos online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Converta qualquer número inteiro de 1 a 3999 em numerais romanos, ou leia numerais romanos como números comuns, e transforme também uma data completa em numerais romanos, na hora no seu navegador.',
  },
};
