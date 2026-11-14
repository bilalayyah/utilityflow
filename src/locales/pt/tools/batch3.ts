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
    instructions: [
      {
        title: 'Digite sua data de nascimento',
        description:
          'Selecione o mês, o dia e o ano do seu nascimento no campo Data de nascimento.',
      },
      {
        title: 'Escolha a data de comparação',
        description:
          'Deixe a data de referência em hoje ou escolha qualquer data passada ou futura para calcular a idade naquele dia.',
      },
      {
        title: 'Execute o cálculo da idade',
        description:
          'O resultado é atualizado na hora no seu navegador, sem apertar nenhum botão e sem enviar dados para lugar nenhum.',
      },
      {
        title: 'Confira o detalhamento completo',
        description:
          'Veja seus anos, meses e dias exatos, o total de semanas, os dias totais vividos e a contagem regressiva para o próximo aniversário.',
      },
      {
        title: 'Copie ou compartilhe o resultado',
        description:
          'Copie o detalhamento da idade para colar em um formulário, uma mensagem ou um documento onde você precisar.',
      },
      {
        title: 'Dica: consulte um marco futuro',
        description:
          'Defina a data de comparação em um aniversário, uma prova ou uma data de aposentadoria para ver exatamente quantos anos você terá naquele dia.',
      },
    ],
    examples: [
      {
        title: 'Consulta de idade para um marco comum',
        input: 'Data de nascimento: 1995-06-15 · Data de referência: 2025-11-12',
        output: '30 anos, 4 meses, 28 dias (11.108 dias)',
        explanation:
          'Usa a duração exata dos meses do calendário e os anos bissextos entre 1995 e 2025.',
      },
      {
        title: 'Idade exata em um aniversário fechado',
        input: 'Data de nascimento: 2000-01-01 · Data de referência: 2025-01-01',
        output: '25 anos exatos (9.132 dias)',
        explanation:
          'Vinte e cinco anos incluem 7 dias bissextos (2000, 2004, 2008, 2012, 2016, 2020 e 2024): 25 × 365 + 7 = 9.132 dias.',
      },
    ],
    benefits: [
      'Lida com meses de 28, 29, 30 e 31 dias sem aproximações de 30 dias',
      'Leva em conta com precisão os aniversários de 29 de fevereiro nos cálculos de contagem regressiva',
      'Mostra ao mesmo tempo o total de meses, semanas, dias e horas aproximadas',
      'Valida intervalos inválidos quando a data de nascimento é posterior à data de referência',
    ],
    useCases: [
      'Verificar a idade exata para matrícula escolar, aposentadoria ou formulários oficiais',
      'Calcular aniversários de marcos em dias ou semanas totais',
      'Verificar quantos anos alguém terá em uma data próxima de um evento',
      'Saber quantos dias faltam para o próximo aniversário',
    ],
    faqs: [
      {
        question: 'Como a Calculadora de Idade lida com aniversários em ano bissexto (29 de fevereiro)?',
        answer:
          'Em anos não bissextos, a contagem regressiva para o próximo aniversário se alinha com 28 de fevereiro do ano de referência, para que a contagem de dias continue exata.',
      },
      {
        question: 'Por que os dias totais às vezes diferem de anos × 365 na Calculadora de Idade?',
        answer:
          'Cada ano bissexto adiciona um 366º dia (29 de fevereiro) e os meses do calendário variam de 28 a 31 dias. Esta ferramenta conta a diferença exata de dias do calendário em UTC.',
      },
      {
        question: 'Posso calcular minha idade em uma data futura com a Calculadora de Idade?',
        answer:
          'Sim. Mude a data de referência para qualquer data futura e veja sua idade projetada exata naquele dia.',
      },
      {
        question: 'A Calculadora de Idade é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador, então sua data de nascimento nunca é enviada para nenhum servidor.',
      },
      {
        question: 'O que a Calculadora de Idade mostra além dos anos?',
        answer:
          'Ela mostra anos, meses e dias, além do total de meses, do total de semanas, dos dias totais vividos e dos dias que faltam para o seu próximo aniversário.',
      },
      {
        question: 'Qual é a precisão da Calculadora de Idade?',
        answer:
          'Ela usa a duração exata dos meses do calendário e os anos bissextos, então o resultado corresponde ao calendário real e não a uma aproximação de meses de 30 dias.',
      },
      {
        question: 'A Calculadora de Idade pode calcular minha idade só em dias?',
        answer:
          'Sim. O detalhamento inclui os dias totais vividos, útil para contagens de marcos e aniversários medidos em dias.',
      },
      {
        question: 'Posso usar a Calculadora de Idade para saber minha idade em semanas ou meses?',
        answer:
          'Sim, os resultados incluem o total de semanas e o total de meses junto com o detalhamento em anos, meses e dias.',
      },
      {
        question: 'A Calculadora de Idade guarda minha data de nascimento?',
        answer:
          'Não. Todos os cálculos são feitos localmente no seu navegador e nada do que você digita é salvo ou enviado para um servidor.',
      },
      {
        question: 'O que acontece se eu digitar uma data de nascimento posterior à data de comparação?',
        answer:
          'A ferramenta mostra uma mensagem de validação, porque não é possível calcular uma idade quando a data de nascimento é posterior à data com a qual ela é comparada.',
      },
      {
        question: 'A Calculadora de Idade pode me dizer quantos anos terei ao me aposentar?',
        answer:
          'Sim. Defina a data de comparação na sua data prevista de aposentadoria e a ferramenta mostrará sua idade exata naquele dia.',
      },
      {
        question: 'A Calculadora de Idade conta as horas que eu vivi?',
        answer:
          'Ela mostra um número aproximado de horas com base nos dias totais vividos, junto com o resultado exato em anos, meses e dias.',
      },
      {
        question: 'Posso consultar a idade de outra pessoa com a Calculadora de Idade?',
        answer:
          'Sim, você pode digitar qualquer data de nascimento para calcular a idade dessa pessoa, por exemplo para verificar elegibilidade escolar ou de aposentadoria.',
      },
      {
        question: 'Por que a Calculadora de Idade pede uma data de comparação?',
        answer:
          'A data de comparação é o dia em que você quer medir sua idade: hoje por padrão, ou qualquer data passada ou futura para planejamento e registros.',
      },
      {
        question: 'A Calculadora de Idade funciona com datas de nascimento muito antigas?',
        answer:
          'Sim, ela lida com datas de nascimento de muitas décadas atrás e conta corretamente os anos bissextos durante todo o período.',
      },
      {
        question: 'Posso usar a Calculadora de Idade para formulários oficiais?',
        answer:
          'Sim, o resultado exato em anos, meses e dias serve para verificar a elegibilidade por idade, embora os documentos oficiais continuem sendo a prova final.',
      },
      {
        question: 'Como a Calculadora de Idade conta meu próximo aniversário?',
        answer:
          'Ela compara a data de hoje com a data do seu próximo aniversário e mostra a quantidade exata de dias que faltam até lá.',
      },
      {
        question: 'A Calculadora de Idade precisa de conexão com a internet?',
        answer:
          'Ela precisa que a página esteja carregada, mas o cálculo em si é executado localmente no seu navegador, sem enviar nada.',
      },
      {
        question: 'A Calculadora de Idade pode mostrar minha idade em uma data passada?',
        answer:
          'Sim. Escolha qualquer data passada como data de comparação para ver exatamente quantos anos você tinha naquele dia.',
      },
      {
        question: 'Minha data de nascimento é privada quando uso a Calculadora de Idade?',
        answer:
          'Sim. A ferramenta funciona localmente no seu navegador, então sua data de nascimento nunca sai do seu dispositivo.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha o bloco de cálculo de porcentagem',
        description:
          'Cada cartão resolve uma fórmula de porcentagem diferente de forma independente, sem apagar seus outros números.',
      },
      {
        title: 'Digite seus valores numéricos',
        description:
          'Digite números inteiros ou decimais nos campos destacados; os resultados são recalculados a cada tecla digitada.',
      },
      {
        title: 'Execute o cálculo na hora',
        description:
          'Não há botão de enviar — o resultado da porcentagem aparece imediatamente enquanto você digita, direto no seu navegador.',
      },
      {
        title: 'Confira as saídas da fórmula',
        description:
          'Veja tanto a variação percentual com sinal quanto a diferença numérica absoluta para verificações de crescimento ou queda.',
      },
      {
        title: 'Copie o resultado da porcentagem',
        description:
          'Copie a resposta para colar em um relatório, uma fatura, uma planilha ou uma mensagem.',
      },
      {
        title: 'Dica: confira um valor inicial zero ou negativo',
        description:
          'Se o resultado mostrar uma mensagem de validação, confira se há um denominador zero ou um valor inicial negativo, contra os quais a ferramenta se protege.',
      },
    ],
    examples: [
      {
        title: 'Medindo a porcentagem de crescimento da receita',
        input: 'De 120 para 150',
        output: '+25% (+30 de variação absoluta)',
        explanation: 'Calculado como ((150 - 120) / |120|) × 100 = +25%.',
      },
      {
        title: 'Encontrando X% de um número',
        input: '20% de 250',
        output: '50',
        explanation: 'Calculado como 250 × 20 ÷ 100 = 50.',
      },
    ],
    benefits: [
      'Exibe as três fórmulas de porcentagem lado a lado em uma só tela',
      'Lida com decimais, valores iniciais negativos e proteção contra denominador zero de forma limpa',
      'Mostra a diferença absoluta junto com a variação percentual',
      'Não exige nenhum recarregamento de página nem clique em enviar',
    ],
    useCases: [
      'Verificar o crescimento de tráfego, vendas ou taxa de conversão mês a mês',
      'Calcular notas de prova e porcentagens de aproveitamento',
      'Aplicar acréscimos ou deduções percentuais rápidos em faturas',
      'Comparar preços ou alocações de orçamento antes e depois',
    ],
    faqs: [
      {
        question: 'Como a variação percentual é calculada quando os valores caem na Calculadora de Porcentagem?',
        answer:
          'A variação percentual usa ((Valor Novo − Valor Antigo) / |Valor Antigo|) × 100. Quando o Valor Novo é menor que o Valor Antigo, a ferramenta informa claramente uma redução percentual negativa.',
      },
      {
        question: 'O que acontece se o denominador ou o valor inicial for 0 na Calculadora de Porcentagem?',
        answer:
          'A divisão por zero é indefinida matematicamente, então a calculadora exibe uma mensagem de validação clara em vez de Infinito ou NaN.',
      },
      {
        question: 'Posso digitar porcentagens decimais como 7,25% na Calculadora de Porcentagem?',
        answer:
          'Sim. Todas as entradas aceitam valores decimais e preservam toda a precisão de ponto flutuante antes do arredondamento de exibição.',
      },
      {
        question: 'A Calculadora de Porcentagem é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador, então seus números nunca são enviados.',
      },
      {
        question: 'Como descubro quanto por cento um número é de outro?',
        answer:
          'Use o cartão "quanto por cento": digite a parte e o todo, e a ferramenta divide a parte pelo todo e multiplica por 100.',
      },
      {
        question: 'Como calculo X% de um número com a Calculadora de Porcentagem?',
        answer:
          'Digite a porcentagem e o número no cartão "X% de Y", e a ferramenta multiplica o número pela porcentagem dividida por 100.',
      },
      {
        question: 'Qual é a diferença entre variação percentual e pontos percentuais?',
        answer:
          'A variação percentual é relativa ao valor inicial, enquanto os pontos percentuais são a diferença aritmética simples entre duas porcentagens.',
      },
      {
        question: 'A Calculadora de Porcentagem lida com números negativos?',
        answer:
          'Sim, ela lida com valores iniciais negativos, e o resultado com sinal mostra se a mudança é um aumento ou uma redução.',
      },
      {
        question: 'Como calculo um aumento percentual entre dois números?',
        answer:
          'Digite o valor antigo e o valor novo no cartão de variação; a ferramenta mostra o aumento como porcentagem, além da diferença absoluta.',
      },
      {
        question: 'Como calculo uma redução percentual?',
        answer:
          'Digite o valor inicial maior e o valor novo menor, e a ferramenta informa a redução como uma porcentagem negativa.',
      },
      {
        question: 'Posso usar a Calculadora de Porcentagem para notas de prova?',
        answer:
          'Sim. Divida os pontos obtidos pelo total de pontos e a ferramenta mostra a nota como porcentagem.',
      },
      {
        question: 'A Calculadora de Porcentagem também mostra a diferença absoluta?',
        answer:
          'Sim, junto com a variação percentual ela mostra a diferença numérica absoluta entre os dois valores.',
      },
      {
        question: 'Posso calcular uma porcentagem de desconto com esta ferramenta?',
        answer:
          'Sim. Digite o preço original e o preço promocional no cartão de variação para ver o desconto como uma redução percentual.',
      },
      {
        question: 'A Calculadora de Porcentagem guarda meus números?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador e nada do que você digita é salvo ou enviado para um servidor.',
      },
      {
        question: 'Qual é a precisão dos resultados da Calculadora de Porcentagem?',
        answer:
          'Os resultados usam toda a precisão de ponto flutuante antes do arredondamento de exibição, então pequenas diferenças decimais são tratadas corretamente.',
      },
      {
        question: 'Posso usar a Calculadora de Porcentagem para o crescimento de vendas?',
        answer:
          'Sim, ela é ideal para o crescimento de vendas, tráfego ou taxa de conversão mês a mês, mostrando tanto a porcentagem quanto a variação absoluta.',
      },
      {
        question: 'O que significa uma variação percentual negativa?',
        answer:
          'Um resultado negativo significa que o valor novo é menor que o valor antigo — uma redução, e não um aumento.',
      },
      {
        question: 'Posso calcular porcentagens com números muito grandes?',
        answer:
          'Sim, a ferramenta aceita números inteiros e decimais grandes e recalcula na hora enquanto você digita.',
      },
      {
        question: 'Preciso apertar um botão para calcular uma porcentagem?',
        answer:
          'Não. Os resultados são atualizados automaticamente a cada tecla digitada, sem recarregar a página nem clicar em enviar.',
      },
      {
        question: 'A Calculadora de Porcentagem consegue encontrar o valor original a partir de uma porcentagem?',
        answer:
          'Os três cartões cobrem X% de Y, quanto por cento X é de Y e a variação percentual; para um cálculo inverso, divida o valor conhecido pela porcentagem em forma decimal.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite os dados do seu empréstimo',
        description:
          'Informe o Valor do Empréstimo (principal), a Taxa de Juros Anual (% ao ano) e o Prazo do empréstimo em meses ou anos.',
      },
      {
        title: 'Escolha a unidade do prazo',
        description:
          'Alterne o prazo entre anos e meses para combinar com a forma como o credor informa o prazo do empréstimo.',
      },
      {
        title: 'Execute o cálculo da EMI',
        description:
          'A parcela, os juros totais e o valor total a pagar são atualizados na hora no seu navegador — nenhum dado é enviado.',
      },
      {
        title: 'Confira o resumo da EMI',
        description:
          'Veja a Parcela Mensal, os Juros Totais a Pagar, o Valor Total a Pagar e a porcentagem de participação dos juros.',
      },
      {
        title: 'Confira o cronograma de amortização',
        description:
          'Alterne entre Resumo Anual e Cronograma Mensal para ver como o pagamento do principal acelera com o tempo.',
      },
      {
        title: 'Dica: compare um prazo mais curto',
        description:
          'Teste um prazo menor para ver quanto de juros totais você poderia economizar e copie os números para comparar ofertas de empréstimo lado a lado.',
      },
    ],
    examples: [
      {
        title: 'Empréstimo de carro ou pessoal de 5 anos',
        input: 'Principal: US$ 25.000 · Taxa: 7,5% · Prazo: 60 meses',
        output: 'Parcela mensal: US$ 500,95 · Juros totais: US$ 5.056,92 · Total pago: US$ 30.056,92',
        explanation: 'Usa a fórmula padrão de EMI com saldo devedor decrescente P·r·(1+r)^n / ((1+r)^n - 1).',
      },
      {
        title: 'Parcelamento promocional com 0% de juros',
        input: 'Principal: US$ 12.000 · Taxa: 0% · Prazo: 12 meses',
        output: 'Parcela mensal: US$ 1.000 · Juros totais: US$ 0 · Total pago: US$ 12.000',
        explanation: 'Com taxa de 0%, a parcela é simplesmente o principal dividido pelo número de meses.',
      },
    ],
    benefits: [
      'Usa a matemática exata de EMI com juros compostos sobre o saldo devedor',
      'Lida com empréstimos promocionais de 0% ao ano com precisão, sem erros de divisão',
      'Inclui visualizações alternáveis de cronograma de amortização anual e mensal',
      'Permite alternar a unidade do prazo entre anos e meses sem complicação',
    ],
    useCases: [
      'Comparar ofertas de empréstimo de carro, estudantil ou pessoal de vários credores',
      'Avaliar como encurtar o prazo do empréstimo reduz os juros ao longo da vida',
      'Prever o saldo restante do empréstimo após 12, 24 ou 36 parcelas',
      'Comparar parcelamentos de 0% com financiamentos de baixa taxa de juros',
    ],
    faqs: [
      {
        question: 'Qual fórmula a Calculadora de Empréstimo e Parcela (EMI) usa?',
        answer:
          'Ela aplica a fórmula padrão de amortização com saldo devedor decrescente: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), onde r é a taxa anual ÷ 12 ÷ 100 e n é o número total de parcelas mensais.',
      },
      {
        question: 'Por que os juros dos primeiros meses são maiores que os dos últimos meses em uma EMI?',
        answer:
          'Os juros de cada mês são calculados sobre o saldo devedor restante. À medida que o principal diminui com cada parcela paga, uma parte maior de cada parcela fixa vai para o principal.',
      },
      {
        question: 'A Calculadora de Empréstimo e Parcela (EMI) inclui taxas de abertura ou seguro do credor?',
        answer:
          'Não. O resultado reflete apenas o pagamento de principal e juros. Some as taxas financiadas ao campo Valor do Empréstimo para modelar o custo de pagamento delas.',
      },
      {
        question: 'A Calculadora de Empréstimo e Parcela (EMI) é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador, então os dados do seu empréstimo nunca são enviados.',
      },
      {
        question: 'O que é EMI em um empréstimo?',
        answer:
          'EMI significa Parcela Mensal Fixa (Equated Monthly Installment) — o valor fixo que você paga todo mês, cobrindo juros e uma parte do principal, até quitar o empréstimo.',
      },
      {
        question: 'Como a Calculadora de Empréstimo e Parcela (EMI) lida com um empréstimo de 0% de juros?',
        answer:
          'Ela lida com empréstimos promocionais de 0% ao ano com precisão, sem erros de divisão, mostrando uma parcela igual ao principal dividido pelo número de meses.',
      },
      {
        question: 'Posso comparar duas ofertas de empréstimo com a Calculadora de Empréstimo e Parcela (EMI)?',
        answer:
          'Sim. Passe cada oferta pela calculadora e compare a parcela mensal e os juros totais a pagar para ver qual custa menos no total.',
      },
      {
        question: 'Um prazo de empréstimo mais curto reduz os juros totais?',
        answer:
          'Em geral, sim. Um prazo mais curto significa uma parcela mensal maior, mas juros totais bem menores, porque os juros incidem por menos meses.',
      },
      {
        question: 'O que é um cronograma de amortização?',
        answer:
          'É uma tabela que mostra, para cada mês ou ano, quanto da sua parcela vai para os juros, quanto vai para o principal e qual saldo resta.',
      },
      {
        question: 'Posso ver meu saldo restante do empréstimo após um ano?',
        answer:
          'Sim. O cronograma de amortização mostra o principal restante após 12, 24 ou 36 parcelas, ou em qualquer outro ponto do prazo.',
      },
      {
        question: 'A Calculadora de Empréstimo e Parcela (EMI) funciona para empréstimos de carro?',
        answer:
          'Sim, ela funciona para empréstimos de carro, pessoais, estudantis e empresariais — qualquer empréstimo pago em parcelas mensais fixas sobre saldo devedor.',
      },
      {
        question: 'Posso usar a Calculadora de Empréstimo e Parcela (EMI) para financiamento imobiliário?',
        answer:
          'Sim, para a parte de principal e juros. Para o custo total da moradia incluindo imposto, seguro e PMI, use a Calculadora de Financiamento Imobiliário.',
      },
      {
        question: 'O que acontece se eu fizer um pagamento extra no meu empréstimo?',
        answer:
          'Pagamentos extras reduzem o principal diretamente, o que corta os juros futuros. Esta calculadora modela as parcelas regulares; planeje o valor extra separadamente.',
      },
      {
        question: 'A Calculadora de Empréstimo e Parcela (EMI) guarda os dados do meu empréstimo?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador e nada do que você digita é salvo ou enviado para um servidor.',
      },
      {
        question: 'Por que minha parcela fica igual enquanto a parte dos juros muda?',
        answer:
          'A parcela é fixa, mas a cada mês os juros incidem sobre um saldo menor, então a participação dos juros cai e a do principal aumenta.',
      },
      {
        question: 'Posso alternar o prazo do empréstimo entre anos e meses?',
        answer:
          'Sim, a calculadora permite alternar a unidade do prazo entre anos e meses sem complicação.',
      },
      {
        question: 'A Calculadora de Empréstimo e Parcela (EMI) é aconselhamento financeiro?',
        answer:
          'Não. É uma ferramenta de cálculo que mostra quais seriam os números com os dados que você digitou; não é aconselhamento financeiro, e você deve confirmar as condições com seu credor.',
      },
      {
        question: 'Como uso a Calculadora de Empréstimo e Parcela (EMI) para um parcelamento de 0%?',
        answer:
          'Digite 0% como taxa anual e o prazo em meses, e a ferramenta mostrará a parcela mensal fixa sem juros.',
      },
      {
        question: 'O que devo digitar como valor do empréstimo?',
        answer:
          'Digite o valor que você realmente toma emprestado. Se as taxas forem financiadas junto com o empréstimo, some-as ao principal para modelar o custo de pagamento delas.',
      },
      {
        question: 'A Calculadora de Empréstimo e Parcela (EMI) mostra cronogramas anual e mensal?',
        answer:
          'Sim, você pode alternar entre as visualizações Resumo Anual e Cronograma Mensal para ver o pagamento em qualquer nível de detalhe.',
      },
    ],
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
    instructions: [
      {
        title: 'Defina o preço do imóvel e a entrada',
        description:
          'Digite o Preço do Imóvel e sua Entrada (refletindo automaticamente a relação empréstimo-valor e o principal do empréstimo).',
      },
      {
        title: 'Escolha a taxa de juros e o prazo',
        description:
          'Digite a taxa anual do financiamento (%) e selecione um prazo fixo de 10, 15, 20 ou 30 anos.',
      },
      {
        title: 'Inclua impostos, seguro e condomínio',
        description:
          'Ajuste o Imposto sobre a Propriedade anual, o Seguro Residencial anual, as taxas mensais de condomínio e a taxa de PMI (quando a entrada é menor que 20%).',
      },
      {
        title: 'Execute o cálculo do financiamento',
        description:
          'A parcela mensal PITI é atualizada na hora no seu navegador — nenhum dado é enviado.',
      },
      {
        title: 'Confira o detalhamento da parcela',
        description:
          'Veja a divisão entre principal e juros, imposto, seguro, condomínio e PMI, além dos juros totais ao longo de todo o prazo.',
      },
      {
        title: 'Dica: teste 20% de entrada ou um prazo menor',
        description:
          'Tente aumentar a entrada para 20% para eliminar o PMI, ou um prazo de 15 anos para ver a economia de juros, e copie os números para comparar as opções.',
      },
    ],
    examples: [
      {
        title: 'Compra de imóvel em 30 anos com 20% de entrada',
        input: 'Imóvel: US$ 450.000 · Entrada: US$ 90.000 (20%) · Taxa: 6,5% · Imposto: US$ 5.400/ano · Seguro: US$ 1.800/ano',
        output: 'Total mensal: US$ 2.875,44 (P&I US$ 2.275,44 + Imposto US$ 450 + Seguro US$ 150)',
        explanation: 'Com 20% de entrada (LTV de 80%), o PMI é US$ 0 e o P&I é amortizado ao longo de 360 meses.',
      },
      {
        title: 'Financiamento de 15 anos com 20% de entrada',
        input: 'Imóvel: US$ 300.000 · Entrada: US$ 60.000 (20%) · Taxa: 5,5% · Imposto: US$ 3.600/ano · Seguro: US$ 1.200/ano',
        output: 'Total mensal: US$ 2.360,87 (P&I US$ 1.960,87 + Imposto US$ 300 + Seguro US$ 100)',
        explanation: 'O prazo de 15 anos com 20% de entrada não tem PMI e gera juros totais bem menores que o prazo de 30 anos.',
      },
    ],
    benefits: [
      'Divide o custo mensal de moradia em P&I, Imposto sobre a Propriedade, Seguro, Condomínio e PMI',
      'Calcula a relação empréstimo-valor (LTV) e os juros totais ao longo de todo o prazo',
      'Inclui uma tabela de redução anual do saldo do empréstimo',
      'Permite comparar amortizações de 10, 15, 20 e 30 anos na hora',
    ],
    useCases: [
      'Planejar os custos mensais realistas do PITI antes de procurar imóveis',
      'Comparar a economia de juros entre financiamento de 15 e de 30 anos',
      'Testar como dar 20% de entrada elimina as cobranças mensais de PMI',
      'Estimar o saldo restante do principal após 5 ou 10 anos',
    ],
    faqs: [
      {
        question: 'O que significa PITI na parcela de um financiamento?',
        answer:
          'PITI significa Principal, Juros, Impostos (imposto sobre a propriedade) e Seguro (seguro residencial e PMI, quando aplicável) — os quatro componentes que os credores usam para avaliar a capacidade mensal de pagamento.',
      },
      {
        question: 'Quando o PMI se aplica a um financiamento?',
        answer:
          'Em financiamentos convencionais, o Seguro Hipotecário Privado (PMI) costuma ser cobrado quando sua entrada é menor que 20% (relação empréstimo-valor acima de 80%).',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário inclui custos de fechamento?',
        answer:
          'Não. Os custos de fechamento variam por região e credor (geralmente de 2% a 5% do valor do empréstimo) e são pagos antecipadamente, a menos que sejam incluídos no principal do empréstimo.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador, então o preço do imóvel e os dados do empréstimo nunca são enviados.',
      },
      {
        question: 'Como uma entrada maior muda minha parcela do financiamento?',
        answer:
          'Uma entrada maior reduz o principal do empréstimo, o que diminui principal e juros — e com 20% de entrada ela pode eliminar o PMI por completo.',
      },
      {
        question: 'Qual é a diferença entre um financiamento de 15 e de 30 anos?',
        answer:
          'Um financiamento de 15 anos tem parcelas mensais maiores, mas juros totais bem menores, enquanto um de 30 anos tem parcelas mensais menores e mais juros totais.',
      },
      {
        question: 'Como é calculada a relação empréstimo-valor (LTV)?',
        answer:
          'O LTV é o valor do empréstimo dividido pelo preço do imóvel, expresso em porcentagem. Um empréstimo de US$ 360.000 em um imóvel de US$ 450.000 é um LTV de 80%.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário inclui imposto sobre a propriedade?',
        answer:
          'Sim. Digite o imposto anual sobre a propriedade e a ferramenta soma um doze avos dele à sua parcela mensal.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário inclui seguro residencial?',
        answer:
          'Sim. Digite o prêmio anual do seguro residencial e a ferramenta soma um doze avos dele ao total mensal.',
      },
      {
        question: 'O que são as taxas de condomínio no cálculo de um financiamento?',
        answer:
          'As taxas de condomínio são valores mensais cobrados por uma associação de moradores. Digite-as separadamente e elas são somadas ao seu custo mensal total de moradia.',
      },
      {
        question: 'Posso ver meu saldo restante do financiamento após 5 ou 10 anos?',
        answer:
          'Sim, o cronograma anual de redução do saldo mostra o principal restante em cada ano do prazo do empréstimo.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário guarda o preço do imóvel ou os dados do empréstimo?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador e nada do que você digita é salvo ou enviado para um servidor.',
      },
      {
        question: 'Posso comparar prazos de financiamento com esta calculadora?',
        answer:
          'Sim. Alterne entre prazos de 10, 15, 20 e 30 anos para comparar as parcelas mensais e os juros totais na hora.',
      },
      {
        question: 'Quantos juros totais vou pagar ao longo do prazo do financiamento?',
        answer:
          'A ferramenta mostra os juros totais ao longo de todo o prazo, para que você veja o verdadeiro custo ao longo da vida, além da parcela mensal.',
      },
      {
        question: 'O que acontece com o PMI quando o saldo do meu empréstimo cai abaixo de 80% de LTV?',
        answer:
          'Em muitos empréstimos convencionais, o PMI pode ser removido quando o patrimônio atinge 20%, mas as regras dependem do seu credor e do tipo de empréstimo, então confirme diretamente com eles.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário é aconselhamento financeiro?',
        answer:
          'Não. É uma ferramenta de cálculo que mostra quais seriam os números com os dados que você digitou; não é aconselhamento financeiro, e você deve confirmar as condições com seu credor.',
      },
      {
        question: 'Posso digitar a entrada como valor em dólares ou como porcentagem?',
        answer:
          'Sim, você pode digitar a entrada de qualquer uma das formas, e a ferramenta reflete a relação empréstimo-valor e o principal do empréstimo automaticamente.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário funciona para financiamentos de taxa fixa?',
        answer:
          'Sim, ela modela financiamentos de taxa fixa com prazos de 10, 15, 20 e 30 anos e uma taxa anual constante.',
      },
      {
        question: 'O que devo digitar como taxa de juros do financiamento?',
        answer:
          'Digite a taxa anual informada pelo seu credor, em porcentagem. Pequenas mudanças na taxa podem alterar a parcela mensal de forma perceptível, então compare algumas taxas.',
      },
      {
        question: 'A Calculadora de Financiamento Imobiliário pode me ajudar a planejar antes de procurar um imóvel?',
        answer:
          'Sim. Digite um preço de imóvel, uma entrada, uma taxa, um imposto e um seguro realistas para ver o verdadeiro custo mensal do PITI antes de começar a procurar.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite o principal e os depósitos recorrentes',
        description:
          'Informe seu Depósito Inicial e o valor do Aporte Mensal.',
      },
      {
        title: 'Defina o retorno anual e o horizonte',
        description:
          'Digite a Taxa de Juros / Retorno Anual esperada (%) e a Duração do Investimento em anos.',
      },
      {
        title: 'Escolha a frequência de capitalização',
        description:
          'Alterne entre capitalização Anual, Trimestral, Mensal ou Diária e confira o detalhamento anual.',
      },
      {
        title: 'Execute a projeção de crescimento',
        description:
          'O saldo final é atualizado na hora no seu navegador — nenhum dado é enviado.',
      },
      {
        title: 'Confira o livro-razão ano a ano',
        description:
          'Veja os aportes, os juros ganhos e o saldo acumulado de cada ano para entender como o crescimento acelera com o tempo.',
      },
      {
        title: 'Dica: teste um aporte mensal maior',
        description:
          'Tente somar US$ 100 por mês para ver quanto o saldo final cresce e copie os números para comparar planos de poupança.',
      },
    ],
    examples: [
      {
        title: 'Projeção de 20 anos de investimento constante em índice',
        input: 'Inicial: US$ 10.000 · Mensal: US$ 500 · Retorno: 7% · Anos: 20 · Capitalização mensal',
        output: 'Saldo final: US$ 300.850,56 · Aportes: US$ 130.000 · Juros ganhos: US$ 170.850,56',
        explanation: 'Os retornos compostos respondem por mais de 56% do valor final da carteira.',
      },
      {
        title: 'Crescimento só com depósito inicial, sem aportes',
        input: 'Inicial: US$ 1.000 · Mensal: US$ 0 · Retorno: 5% · Anos: 10 · Capitalização anual',
        output: 'Saldo final: US$ 1.628,89 · Aportes: US$ 1.000 · Juros ganhos: US$ 628,89',
        explanation: 'Sem aportes mensais, o crescimento vem só dos juros compostos sobre o depósito inicial: 1.000 × 1,05^10 = 1.628,89.',
      },
    ],
    benefits: [
      'Separa os aportes totais do seu bolso dos juros compostos ganhos',
      'Permite capitalização Anual, Trimestral, Mensal e Diária',
      'Opção de aporte no fim do mês ou no início do mês',
      'Gera um livro-razão completo de crescimento ano a ano para planejamento',
    ],
    useCases: [
      'Planejar marcos de poupança para aposentadoria ou fundos de índice de longo prazo',
      'Comparar contas de poupança de alto rendimento com capitalização mensal vs diária',
      'Visualizar o impacto de aumentar os aportes mensais em US$ 100',
      'Ensinar a capitalização exponencial em comparação com os juros simples lineares',
    ],
    faqs: [
      {
        question: 'Quanta diferença a frequência de capitalização faz na Calculadora de Juros Compostos?',
        answer:
          'Com taxas de juros moderadas, a capitalização mensal produz um crescimento um pouco maior que a anual, porque os juros começam a render juros mais cedo; a diferença entre diária e mensal costuma ser uma pequena fração de um por cento.',
      },
      {
        question: 'A Calculadora de Juros Compostos leva em conta impostos ou inflação?',
        answer:
          'A calculadora mostra o crescimento nominal antes dos impostos. Para aproximar o poder de compra real ajustado pela inflação, subtraia a inflação anual esperada (por exemplo, 2,5% a 3%) da sua taxa de retorno nominal.',
      },
      {
        question: 'Os aportes são considerados no início ou no fim de cada mês na Calculadora de Juros Compostos?',
        answer:
          'Por padrão, os aportes são aplicados no fim de cada mês; você pode alternar para o momento do início do mês nas opções da calculadora.',
      },
      {
        question: 'A Calculadora de Juros Compostos é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador, então seus valores de poupança nunca são enviados.',
      },
      {
        question: 'O que são juros compostos?',
        answer:
          'Juros compostos são juros ganhos tanto sobre o seu principal original quanto sobre os juros já ganhos, então o crescimento acelera com o tempo.',
      },
      {
        question: 'Como os juros compostos diferem dos juros simples?',
        answer:
          'Os juros simples são pagos só sobre o principal, enquanto os juros compostos são pagos sobre o principal mais os juros acumulados, o que faz o saldo crescer mais rápido.',
      },
      {
        question: 'Posso projetar o crescimento com aportes mensais?',
        answer:
          'Sim. Digite seu aporte mensal e a ferramenta o soma a cada mês, capitalizando o saldo crescente ao longo de toda a duração.',
      },
      {
        question: 'Qual taxa de retorno devo digitar na Calculadora de Juros Compostos?',
        answer:
          'Digite o retorno anual que você espera, em porcentagem. É um dado de projeção, não uma previsão — teste algumas taxas para ver uma faixa de resultados.',
      },
      {
        question: 'A Calculadora de Juros Compostos mostra quanto eu aportei e quanto eu ganhei?',
        answer:
          'Sim, ela separa os aportes totais do seu bolso dos juros compostos ganhos e mostra os dois no livro-razão ano a ano.',
      },
      {
        question: 'Posso comparar capitalização mensal vs diária?',
        answer:
          'Sim. Alterne a frequência de capitalização entre anual, trimestral, mensal e diária para comparar o saldo final de cada uma.',
      },
      {
        question: 'A Calculadora de Juros Compostos pode ajudar a planejar a poupança para a aposentadoria?',
        answer:
          'Sim, ela é ideal para projeções de aposentadoria ou fundos de índice de longo prazo — digite seu saldo inicial, os depósitos mensais, a taxa e os anos para ver o saldo projetado.',
      },
      {
        question: 'A Calculadora de Juros Compostos guarda meus valores de poupança?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador e nada do que você digita é salvo ou enviado para um servidor.',
      },
      {
        question: 'O que acontece se eu aumentar meu aporte mensal em US$ 100?',
        answer:
          'O saldo final cresce bem mais que os depósitos extras sozinhos, porque cada dólar adicionado também rende juros compostos ao longo dos anos restantes.',
      },
      {
        question: 'Posso usar a Calculadora de Juros Compostos sem aportes mensais?',
        answer:
          'Sim. Defina o aporte mensal como zero e a ferramenta projetará o crescimento apenas do seu depósito inicial.',
      },
      {
        question: 'Posso usar a Calculadora de Juros Compostos sem depósito inicial?',
        answer:
          'Sim. Defina o depósito inicial como zero e digite um aporte mensal para projetar o crescimento só a partir de depósitos regulares.',
      },
      {
        question: 'A Calculadora de Juros Compostos é aconselhamento financeiro?',
        answer:
          'Não. É uma ferramenta de projeção que mostra quais seriam os números com a taxa de retorno e os dados que você digitou; não é aconselhamento financeiro.',
      },
      {
        question: 'Como funciona o cronograma ano a ano?',
        answer:
          'O livro-razão lista o saldo inicial, os aportes, os juros ganhos e o saldo final de cada ano, para que você acompanhe o crescimento ano a ano.',
      },
      {
        question: 'Por que o crescimento acelera nos últimos anos?',
        answer:
          'Porque os juros são ganhos sobre um saldo cada vez maior, os juros ganhos a cada ano crescem à medida que o saldo se capitaliza.',
      },
      {
        question: 'Posso calcular juros compostos para uma conta de poupança de alto rendimento?',
        answer:
          'Sim. Digite a taxa anual da conta e seu padrão de depósitos para comparar a capitalização mensal e a diária na sua poupança.',
      },
      {
        question: 'O que o saldo final inclui?',
        answer:
          'O saldo final inclui seu depósito inicial, todos os aportes mensais e todos os juros compostos ganhos ao longo da duração do investimento.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha o modo Desconto ou Margem',
        description:
          'Selecione Desconto de Varejo para precificação de venda ou Margem de Lucro e Markup para a economia por unidade de SKU.',
      },
      {
        title: 'Digite os valores de precificação',
        description:
          'Informe o Preço Original, o Desconto Principal %, o Cupom Extra % opcional e o Imposto % — ou o Custo e o Preço de Venda no modo Margem.',
      },
      {
        title: 'Some descontos acumulados e imposto',
        description:
          'No modo Desconto, digite um segundo cupom % e um imposto % opcional; os descontos são aplicados um após o outro, não somados.',
      },
      {
        title: 'Veja os resultados na hora',
        description:
          'Os números são recalculados enquanto você digita, sem botão para apertar e sem cadastro.',
      },
      {
        title: 'Confira as métricas líquidas',
        description:
          'Veja o Preço Final, a Economia Total, o Desconto Efetivo %, o Lucro Bruto, a Margem % e o Markup %.',
      },
      {
        title: 'Copie seus resultados e teste preços',
        description:
          'Copie o preço final, a economia, a margem e o markup para sua lista de preços, orçamento ou planilha e ajuste os dados para testar preços diferentes.',
      },
    ],
    examples: [
      {
        title: 'Cálculo de desconto acumulado no varejo',
        input: 'Original: US$ 120 · Desconto 1: 25% · Cupom extra: 10% · Imposto: 0%',
        output: 'Preço final: US$ 81,00 · Economia: US$ 39,00 · Desconto efetivo: 32,5%',
        explanation: 'Os descontos sequenciais se multiplicam (0,75 × 0,90 = 0,675), resultando em 32,5% de desconto total, e não 35%.',
      },
      {
        title: 'Margem e markup a partir do custo',
        input: 'Custo: US$ 50 · Preço de venda: US$ 100',
        output: 'Lucro bruto: US$ 50 · Margem: 50% · Markup: 100%',
        explanation: 'Margem = (100 − 50) / 100 = 50%; markup = (100 − 50) / 50 = 100%.',
      },
    ],
    benefits: [
      'Evita o erro clássico de somar descontos acumulados',
      'Distingue a Margem Bruta % do Markup sobre o Custo % lado a lado',
      'Calcula o lucro por unidade e os limites de custo de equilíbrio na hora',
      'Inclui o cálculo opcional do imposto sobre vendas após o desconto',
    ],
    useCases: [
      'Conferir códigos promocionais acumulados antes de finalizar a compra',
      'Definir preços de varejo de atacado ou ecommerce a partir do custo unitário',
      'Auditar a erosão de margem de campanhas promocionais',
      'Converter uma porcentagem de margem desejada no markup necessário',
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre Margem de Lucro e Markup?',
        answer:
          'A Margem Bruta divide o lucro pelo Preço de Venda ((Preço − Custo) / Preço), enquanto o Markup divide o lucro pelo Custo ((Preço − Custo) / Custo). Um produto que custa US$ 50 e é vendido por US$ 100 tem margem de 50%, mas markup de 100%.',
      },
      {
        question: 'Por que dois descontos de 20% e 10% equivalem a 28% de desconto, e não 30%?',
        answer:
          'O segundo desconto de 10% incide sobre o preço já reduzido de 80%, tirando mais 8% do preço original (20% + 8% = 28%).',
      },
      {
        question: 'O imposto sobre vendas é aplicado antes ou depois dos descontos?',
        answer:
          'O imposto de varejo padrão incide sobre o subtotal com desconto após os cupons do lojista, que é como esta calculadora o calcula.',
      },
      {
        question: 'Qual é uma boa margem de lucro para um produto de varejo?',
        answer:
          'Não existe uma única margem boa; ela varia por setor, tipo de produto e custos. Use a calculadora para comparar sua margem % com sua própria meta e lembre-se de que o resultado é uma saída matemática, não um conselho de negócios.',
      },
      {
        question: 'Como calculo o preço de venda após um único desconto?',
        answer:
          'Multiplique o preço original por (1 − desconto %). Um item de US$ 80 com 25% de desconto custa US$ 80 × 0,75 = US$ 60.',
      },
      {
        question: 'Posso acumular um desconto percentual e um cupom de valor fixo?',
        answer:
          'Esta calculadora acumula descontos percentuais um após o outro. Para um cupom de valor fixo, subtraia-o do preço depois que o desconto percentual for aplicado.',
      },
      {
        question: 'A Calculadora de Desconto e Margem funciona para precificação de atacado?',
        answer:
          'Sim. Digite o custo unitário e o preço de venda desejado no modo Margem para ver o lucro bruto, a margem % e o markup % por unidade.',
      },
      {
        question: 'Qual é a diferença entre lucro bruto e lucro líquido?',
        answer:
          'O lucro bruto é o preço de venda menos o custo do produto. O lucro líquido também subtrai despesas gerais como frete, taxas e aluguel, que esta calculadora não inclui.',
      },
      {
        question: 'Como defino um preço a partir de uma porcentagem de margem desejada?',
        answer:
          'No modo Margem, teste preços de venda diferentes até que a margem % corresponda à sua meta. O markup % mostrado diz quanto somar sobre o custo.',
      },
      {
        question: 'A Calculadora de Desconto e Margem é gratuita?',
        answer:
          'Sim, é totalmente gratuita e funciona por completo no seu navegador — não precisa de conta, envio nem pagamento.',
      },
      {
        question: 'Por que minha margem % é menor que meu markup %?',
        answer:
          'A margem divide o lucro pelo preço de venda, enquanto o markup o divide pelo custo, então, para o mesmo lucro, o markup % é sempre maior.',
      },
      {
        question: 'A margem pode passar de 100%?',
        answer:
          'Não. A margem é o lucro dividido pelo preço de venda, então nunca pode passar de 100%. O markup, porém, pode passar bastante de 100%.',
      },
      {
        question: 'Como o imposto sobre vendas afeta o preço final?',
        answer:
          'O imposto incide sobre o subtotal com desconto, então um desconto maior também reduz o imposto que você paga. A calculadora mostra o preço final com imposto.',
      },
      {
        question: 'O que é um preço de equilíbrio?',
        answer:
          'É o preço em que o lucro bruto é zero — igual ao seu custo unitário. Qualquer preço de venda acima do custo produz uma margem positiva.',
      },
      {
        question: 'Posso usar esta calculadora para preços de Black Friday ou liquidação?',
        answer:
          'Sim. Digite o preço original e cada desconto acumulado para conferir o preço final e quanta margem a promoção deixa.',
      },
      {
        question: 'A calculadora salva ou envia meus preços?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador e nada é enviado nem guardado.',
      },
      {
        question: 'Como converto um markup % em margem %?',
        answer:
          'Margem % = Markup % ÷ (100 + Markup %) × 100. Por exemplo, um markup de 100% equivale a uma margem de 50%, e a calculadora faz essa conversão para você.',
      },
      {
        question: 'O que devo fazer se a margem parecer muito apertada?',
        answer:
          'Confira novamente os dados de custo e teste um preço de venda maior ou um desconto menor na calculadora para ver como a margem se recupera.',
      },
      {
        question: 'Posso calcular um desconto sobre um preço que já inclui imposto?',
        answer:
          'Digite o valor com imposto como preço original e defina o Imposto % como 0, para que o desconto incida sobre o valor digitado.',
      },
      {
        question: 'O que significa "desconto efetivo %"?',
        answer:
          'É o desconto % único que dá o mesmo preço final que todos os seus descontos acumulados juntos — por exemplo, 20% e depois 10% equivalem a 28% de desconto efetivo.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha a direção do imposto',
        description:
          'Escolha Somar Imposto (Líquido → Bruto) ou Extrair Imposto (Bruto → Líquido).',
      },
      {
        title: 'Digite o valor e a taxa de imposto',
        description:
          'Digite o valor da fatura e escolha uma taxa rápida predefinida (5%, 10%, 15%, 20%) ou qualquer porcentagem de imposto personalizada.',
      },
      {
        title: 'Use uma taxa rápida ou personalizada',
        description:
          'Toque em 5%, 10%, 15% ou 20%, ou digite qualquer taxa decimal como 8,875% para corresponder a um imposto local sobre vendas.',
      },
      {
        title: 'Confira o cálculo na hora',
        description:
          'Os resultados são atualizados enquanto você digita, sem botão de enviar e sem cadastro.',
      },
      {
        title: 'Leia os itens da fatura',
        description:
          'Copie o Subtotal Líquido, o Componente de Imposto e o Total Bruto exatos para contabilidade ou orçamento.',
      },
      {
        title: 'Copie o detalhamento e compare taxas',
        description:
          'Copie os valores líquido, de imposto e bruto para sua fatura, orçamento ou planilha de contabilidade e execute novamente com uma taxa diferente para comparar cenários.',
      },
    ],
    examples: [
      {
        title: 'Extraindo 20% de IVA de um recibo bruto',
        input: 'Modo: Extrair Imposto · Total bruto: US$ 120,00 · Taxa: 20%',
        output: 'Subtotal líquido: US$ 100,00 · Componente de IVA: US$ 20,00',
        explanation: 'Divide o valor bruto por (1 + 0,20) em vez de multiplicar o bruto por 20%, evitando um erro contábil de US$ 4.',
      },
      {
        title: 'Somando 20% de IVA a um preço líquido',
        input: 'Modo: Somar Imposto · Subtotal líquido: US$ 100,00 · Taxa: 20%',
        output: 'Total bruto: US$ 120,00 · Componente de IVA: US$ 20,00',
        explanation: 'Multiplica o valor líquido por 1,20: US$ 100 × 1,20 = US$ 120.',
      },
    ],
    benefits: [
      'Evita erros comuns de IVA reverso (dividir por 1 + taxa em vez de subtrair a taxa %)',
      'Funciona da mesma forma para o IVA europeu, o GST australiano/canadense e o imposto estadual sobre vendas dos EUA',
      'Inclui botões instantâneos de taxa rápida mais porcentagens decimais arbitrárias de imposto',
      'Mostra um detalhamento limpo em 3 colunas: Líquido / Imposto / Bruto',
    ],
    useCases: [
      'Preparar faturas B2B ou B2C com linhas claras de valor antes do imposto e de imposto',
      'Reconciliar recibos de despesas com IVA incluído para a contabilidade',
      'Orçar taxas internacionais de SaaS ou freelancer com e sem IVA',
      'Conferir totais de checkout do varejo local com taxas de imposto estaduais e municipais',
    ],
    faqs: [
      {
        question: 'Por que extrair 20% de IVA de US$ 120 dá US$ 20, e não US$ 24?',
        answer:
          'Porque os 20% foram somados originalmente ao valor líquido de US$ 100 (US$ 100 × 1,20 = US$ 120). Para reverter, você divide US$ 120 por 1,20 e recupera o valor líquido de US$ 100 e US$ 20 de imposto.',
      },
      {
        question: 'Posso digitar taxas locais fracionárias de imposto sobre vendas dos EUA, como 8,875%?',
        answer:
          'Sim. O campo Taxa de Imposto aceita qualquer taxa decimal positiva, como 7,25%, 8,875% ou 21%.',
      },
      {
        question: 'Isto funciona tanto para GST quanto para IVA?',
        answer:
          'Sim. Matematicamente, o Imposto sobre Valor Agregado (IVA), o Imposto sobre Bens e Serviços (GST) e o imposto percentual sobre vendas usam exatamente as mesmas fórmulas de líquido/bruto.',
      },
      {
        question: 'Qual é a diferença entre IVA, GST e imposto sobre vendas?',
        answer:
          'Todos são impostos percentuais sobre bens e serviços. O IVA e o GST costumam já estar incluídos no preço exibido, enquanto o imposto sobre vendas dos EUA costuma ser somado no checkout. A matemática é idêntica.',
      },
      {
        question: 'Como somo 20% de IVA a um preço líquido?',
        answer:
          'Multiplique o preço líquido por 1,20. Um preço líquido de US$ 100 vira US$ 120 bruto, com US$ 20 de IVA.',
      },
      {
        question: 'Como removo o IVA de um preço que já o inclui?',
        answer:
          'Divida o preço bruto por (1 + taxa). Com 20% de IVA, US$ 120 ÷ 1,20 = US$ 100 líquidos e US$ 20 de imposto — não US$ 24.',
      },
      {
        question: 'A Calculadora de IVA e Impostos é gratuita?',
        answer:
          'Sim, é totalmente gratuita e funciona por completo no seu navegador, sem conta nem envio.',
      },
      {
        question: 'Posso usar esta calculadora para o IVA do Reino Unido de 20%?',
        answer:
          'Sim. Selecione Extrair ou Somar Imposto, digite seu valor e use a taxa predefinida de 20% ou digite 20 como taxa personalizada.',
      },
      {
        question: 'Qual taxa de IVA devo usar para o meu país?',
        answer:
          'As taxas variam por país e tipo de produto, então confira a taxa atual na autoridade fiscal local e digite-a como taxa personalizada. A calculadora não dá aconselhamento fiscal.',
      },
      {
        question: 'A calculadora lida com itens com taxa zero ou isentos de imposto?',
        answer:
          'Sim. Digite uma taxa de 0% e os valores líquido e bruto serão idênticos.',
      },
      {
        question: 'O que é um preço com imposto incluído?',
        answer:
          'É um preço que já contém o imposto, como mostrado na maioria dos recibos europeus. O modo Extrair Imposto o divide de volta em líquido e imposto.',
      },
      {
        question: 'O que é um preço sem imposto?',
        answer:
          'É um preço antes da soma do imposto, comum em lojas dos EUA. O modo Somar Imposto mostra o total bruto que seu cliente paga.',
      },
      {
        question: 'Posso calcular o IVA de um reembolso parcial?',
        answer:
          'Sim. Digite o valor do reembolso como valor bruto ou líquido e extraia ou some o imposto com a mesma taxa usada na venda original.',
      },
      {
        question: 'Como mostro o IVA em uma fatura?',
        answer:
          'Use os três valores da calculadora como linhas separadas: Subtotal Líquido, Valor do Imposto e Total Bruto, para que o cliente veja o detalhamento com clareza.',
      },
      {
        question: 'Esta calculadora guarda os valores das minhas faturas?',
        answer:
          'Não. Tudo é calculado localmente no seu navegador e nada é enviado nem salvo.',
      },
      {
        question: 'Posso usar taxas decimais como 7,25% ou 8,875%?',
        answer:
          'Sim. O campo de taxa aceita qualquer porcentagem decimal positiva, por isso taxas como 7,25% ou 8,875% calculam o imposto e o total com exatidão.',
      },
      {
        question: 'E se meu recibo mostrar só o total bruto?',
        answer:
          'Use o modo Extrair Imposto com o total bruto e sua taxa local para recuperar o valor líquido e o componente de imposto.',
      },
      {
        question: 'O IVA incide sobre taxas de frete ou entrega?',
        answer:
          'Isso depende das regras fiscais locais. Se for o caso, inclua o valor do frete no valor líquido antes de somar o imposto.',
      },
      {
        question: 'Como confiro o cálculo de IVA de um fornecedor?',
        answer:
          'Digite o total bruto dele no modo Extrair Imposto com a taxa informada e compare o valor líquido com a fatura do fornecedor.',
      },
      {
        question: 'Posso calcular o GST da Austrália ou do Canadá?',
        answer:
          'Sim. O GST usa as mesmas fórmulas de líquido/bruto que o IVA, então digite seu valor e a taxa local de GST — por exemplo, 10% na Austrália ou 5% de GST federal no Canadá.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite a remuneração base e o período de pagamento',
        description:
          'Digite o valor do salário e selecione se esse valor é por Hora, por Dia, por Semana, Quinzenal, Mensal ou Anual.',
      },
      {
        title: 'Ajuste as premissas da jornada de trabalho',
        description:
          'Defina as Horas por Semana (padrão 40), os Dias por Semana (padrão 5) e as Semanas Pagas por Ano (padrão 52, ou menos em caso de licença não remunerada).',
      },
      {
        title: 'Mude as horas ou as semanas para meio período',
        description:
          'Reduza as Horas por Semana ou as Semanas Pagas por Ano para modelar jornadas de meio período, uma semana de 4 dias ou licença não remunerada.',
      },
      {
        title: 'Veja os resultados na hora',
        description:
          'Cada frequência de pagamento é recalculada enquanto você digita, sem botão para apertar e sem cadastro.',
      },
      {
        title: 'Compare todas as frequências de pagamento',
        description:
          'Confira todas as linhas de equivalência bruta ao mesmo tempo, incluindo o total de horas anuais de trabalho.',
      },
      {
        title: 'Copie seus números e compare ofertas',
        description:
          'Copie o valor bruto por hora, mensal ou anual para uma comparação de ofertas de emprego, um orçamento ou uma nota de negociação e ajuste os dados para comparar ofertas lado a lado.',
      },
    ],
    examples: [
      {
        title: 'Conversão padrão de valor por hora para anual em tempo integral',
        input: 'Pagamento: US$ 45,00 por hora · 40 h/semana · 52 semanas/ano (2.080 h)',
        output: 'Anual: US$ 93.600 · Mensal: US$ 7.800 · Quinzenal: US$ 3.600 · Semanal: US$ 1.800',
        explanation: 'Usa as 2.080 horas anuais padrão de trabalho em tempo integral.',
      },
      {
        title: 'Salário mensal para valor por hora',
        input: 'Salário: US$ 6.000 Mensal · 40 h/semana · 52 semanas/ano',
        output: 'Por hora: US$ 34,62 · Anual: US$ 72.000 · Quinzenal: US$ 2.769,23',
        explanation: 'Anual = 6.000 × 12 = 72.000; por hora = 72.000 ÷ 2.080 = 34,62.',
      },
    ],
    benefits: [
      'Converte nos dois sentidos a partir de qualquer frequência de pagamento, não só por hora ou anual',
      'Leva em conta férias não remuneradas ou tempo parado de freelancer por meio de semanas pagas/ano personalizadas',
      'Mostra com clareza as diferenças entre quinzenal duas vezes por mês (24×/ano) e quinzenal a cada duas semanas (26×/ano)',
      'Informa o salário bruto sem palpites enganosos de imposto específicos de cada lugar',
    ],
    useCases: [
      'Comparar uma oferta de contrato por hora com um salário anual em tempo integral',
      'Traduzir ofertas de salário anual em orçamentos domésticos mensais e quinzenais',
      'Incluir o tempo livre não remunerado nas estimativas de renda anual de freelancer',
      'Calcular o pagamento anualizado de meio período de 24 ou 32 horas semanais',
    ],
    faqs: [
      {
        question: 'Por que os pagamentos quinzenais e os semimensais têm valores diferentes?',
        answer:
          'O pagamento quinzenal emite 26 contracheques por ano (a cada 2 semanas), enquanto o pagamento semimensal emite 24 contracheques por ano (duas vezes por mês). Os cheques semimensais são um pouco maiores por período para o mesmo salário anual.',
      },
      {
        question: 'Isto calcula o salário líquido após o imposto de renda?',
        answer:
          'Não. O imposto de renda, os descontos na folha e as contribuições sociais variam muito por país, estado, situação fiscal e deduções, então esta calculadora informa o salário bruto determinístico.',
      },
      {
        question: 'Como os freelancers devem lidar com feriados e férias não remunerados?',
        answer:
          'Reduza as "Semanas Pagas por Ano" de 52 para 48 ou 49 para ver sua renda bruta anual realista levando em conta a licença não remunerada.',
      },
      {
        question: 'Como converto US$ 25 por hora em salário anual?',
        answer:
          'Com 40 horas por semana durante 52 semanas (2.080 horas), US$ 25 por hora equivalem a US$ 52.000 por ano brutos. Digite suas próprias horas para obter seu valor exato.',
      },
      {
        question: 'A Calculadora de Salário é gratuita?',
        answer:
          'Sim, é totalmente gratuita e funciona por completo no seu navegador — não precisa de conta nem de envio.',
      },
      {
        question: 'A Calculadora de Salário mostra o salário líquido após os impostos?',
        answer:
          'Não. Ela mostra apenas o salário bruto, porque o imposto de renda e os descontos variam por país, estado e circunstâncias pessoais.',
      },
      {
        question: 'Qual é a diferença entre salário bruto e salário líquido?',
        answer:
          'O salário bruto é o que você ganha antes de impostos e descontos. O salário líquido é o que resta depois deles. Esta calculadora informa o salário bruto.',
      },
      {
        question: 'Quantas horas há em um ano padrão de trabalho em tempo integral?',
        answer:
          '2.080 horas: 40 horas por semana × 52 semanas. A calculadora usa sua própria configuração de horas por semana em vez de presumir isso.',
      },
      {
        question: 'Posso comparar uma taxa de contrato por hora com uma oferta assalariada?',
        answer:
          'Sim. Digite a taxa por hora e compare seu valor bruto anual com a oferta de salário, lembrando que benefícios e licença remunerada são diferentes.',
      },
      {
        question: 'Como levo em conta férias não remuneradas como freelancer?',
        answer:
          'Reduza as "Semanas Pagas por Ano" de 52 para o número de semanas pelas quais você realmente é pago, como 48 ou 49.',
      },
      {
        question: 'O que é pagamento semimensal?',
        answer:
          'É o pagamento emitido duas vezes por mês, 24 vezes por ano, geralmente em datas fixas como dia 1º e dia 15 — diferente do pagamento quinzenal, que é 26 vezes por ano.',
      },
      {
        question: 'Por que meu contracheque quinzenal é menor que meu contracheque semimensal?',
        answer:
          'Porque o mesmo salário anual é dividido em 26 cheques quinzenais em vez de 24 cheques semimensais, então cada cheque quinzenal é um pouco menor.',
      },
      {
        question: 'Posso calcular o pagamento de uma semana de trabalho de 4 dias?',
        answer:
          'Sim. Defina os Dias por Semana como 4 e as Horas por Semana como 32 (ou suas horas reais) e a calculadora converte a taxa em todas as frequências.',
      },
      {
        question: 'O pagamento de horas extras é incluído?',
        answer:
          'Não. A calculadora converte uma única taxa base. Horas extras com uma taxa diferente precisariam de um cálculo separado.',
      },
      {
        question: 'Como converto um salário mensal em valor por hora?',
        answer:
          'Digite o valor mensal, escolha Mensal como período de pagamento e leia o valor por hora — ele divide pelas suas horas por semana e semanas pagas por ano.',
      },
      {
        question: 'A calculadora guarda minhas informações de salário?',
        answer:
          'Não. Todos os valores ficam no seu navegador e nada é enviado nem guardado.',
      },
      {
        question: 'O que devo digitar se meu pagamento mudar durante o ano?',
        answer:
          'Calcule cada taxa separadamente, ou use uma média ponderada das duas taxas para uma estimativa anual aproximada.',
      },
      {
        question: 'Posso usar esta calculadora para trabalho de meio período ou eventual?',
        answer:
          'Sim. Defina suas horas reais por semana e dias por semana para corresponder à sua jornada de meio período.',
      },
      {
        question: 'Como comparo duas ofertas de emprego com períodos de pagamento diferentes?',
        answer:
          'Digite a taxa e o período de pagamento de cada oferta e compare os valores brutos anuais lado a lado usando as mesmas configurações de horas e semanas.',
      },
      {
        question: 'A calculadora inclui bônus ou comissão?',
        answer:
          'Não. Ela converte apenas o salário base. Some bônus ou comissão separadamente ao valor anual para ter um panorama mais completo.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite o subtotal da conta e os convidados',
        description:
          'Informe o Valor da Conta, o Valor do Imposto sobre Vendas opcional se incluído, e o Número de Pessoas que dividem a conta.',
      },
      {
        title: 'Escolha a porcentagem da gorjeta',
        description:
          'Toque em um valor predefinido (10%, 15%, 18%, 20%, 25%) ou digite qualquer porcentagem personalizada de gorjeta.',
      },
      {
        title: 'Exclua o imposto da base da gorjeta',
        description:
          'Se sua conta inclui imposto sobre vendas, digite o valor do imposto para que a gorjeta seja calculada sobre o subtotal sem imposto.',
      },
      {
        title: 'Confira os totais na hora',
        description:
          'A gorjeta, o total da conta e os valores por pessoa são atualizados enquanto você digita, sem botão para apertar.',
      },
      {
        title: 'Arredondamento e divisão opcionais',
        description:
          'Ative o arredondamento para o dólar mais próximo por pessoa e confira a parte de cada convidado.',
      },
      {
        title: 'Copie ou compartilhe a divisão',
        description:
          'Copie a parte de cada pessoa para enviar ao grupo, ou ajuste a % da gorjeta para ver como o total por pessoa muda.',
      },
    ],
    examples: [
      {
        title: 'Jantar em grupo dividido em 4 partes',
        input: 'Conta: US$ 160,00 · Gorjeta: 20% · Pessoas: 4',
        output: 'Gorjeta: US$ 32,00 · Total: US$ 192,00 · Por pessoa: US$ 48,00',
        explanation: 'Soma 20% de gorjeta (US$ 32) e divide US$ 192 igualmente entre 4 convidados.',
      },
      {
        title: 'Gorjeta de 18% sobre o valor sem imposto',
        input: 'Conta: US$ 110,00 (inclui US$ 10,00 de imposto) · Gorjeta: 18% sem imposto · Pessoas: 2',
        output: 'Gorjeta: US$ 18,00 · Total: US$ 128,00 · Por pessoa: US$ 64,00',
        explanation: 'A gorjeta de 18% incide sobre o subtotal de US$ 100 sem imposto: 100 × 0,18 = US$ 18.',
      },
    ],
    benefits: [
      'Permite dar gorjeta sobre o subtotal sem imposto quando o imposto sobre vendas é informado',
      'Exibe com clareza tanto a Gorjeta por Pessoa quanto o Total por Pessoa',
      'Inclui botões predefinidos rápidos para uso com um toque no celular no restaurante',
      'O arredondamento opcional ajusta a gorjeta efetiva de forma transparente',
    ],
    useCases: [
      'Dividir jantares de restaurante em grupo sem contas mentais constrangedoras',
      'Calcular gorjetas de entrega, transporte por aplicativo ou serviços de salão',
      'Conferir a gorjeta exata de 18% ou 20% antes do imposto em recibos detalhados',
      'Dividir contas compartilhadas de viagens ou eventos em grupo igualmente',
    ],
    faqs: [
      {
        question: 'Você deve dar gorjeta sobre a conta sem imposto ou com imposto?',
        answer:
          'A etiqueta tradicionalmente calcula a gorjeta sobre o subtotal sem imposto. Digite o valor do imposto da conta no campo Imposto se quiser que a calculadora exclua o imposto da base da gorjeta.',
      },
      {
        question: 'O que acontece se eu dividir entre 1 pessoa?',
        answer:
          'Com Pessoas definido como 1, o valor Por Pessoa corresponde diretamente à Gorjeta completa e ao Total da Conta.',
      },
      {
        question: 'Como funciona o arredondamento por pessoa?',
        answer:
          'Quando ativado, a parte total de cada pessoa é arredondada para o próximo dólar inteiro, e a calculadora exibe a porcentagem efetiva de gorjeta resultante.',
      },
      {
        question: 'Quanto devo dar de gorjeta em um restaurante?',
        answer:
          'As faixas comuns de gorjeta são de 15–20% para serviço de mesa nos EUA, mas os costumes variam por país e qualidade do serviço. A calculadora só faz as contas.',
      },
      {
        question: 'Como calculo uma gorjeta de 20% rapidamente?',
        answer:
          'Mova a vírgula uma casa para a esquerda para obter 10% da conta e depois dobre. Em uma conta de US$ 60, 10% são US$ 6, então 20% são US$ 12.',
      },
      {
        question: 'A Calculadora de Gorjeta é gratuita?',
        answer:
          'Sim, é totalmente gratuita e funciona por completo no seu navegador — não precisa de conta nem de envio.',
      },
      {
        question: 'Devo dar gorjeta sobre o total incluindo o imposto?',
        answer:
          'Tradicionalmente, a gorjeta é calculada sobre o subtotal sem imposto. Digite o valor do imposto no campo Imposto para excluí-lo da base da gorjeta.',
      },
      {
        question: 'Qual é uma boa gorjeta para entrega de comida?',
        answer:
          'Os costumes de gorjeta para entrega variam por região e tamanho do pedido. Digite qualquer porcentagem personalizada na calculadora para corresponder ao que você decidir.',
      },
      {
        question: 'Como divido uma conta quando as pessoas pediram valores diferentes?',
        answer:
          'Esta calculadora divide igualmente. Para partes desiguais, calcule a gorjeta de cada pessoa sobre o próprio subtotal dela separadamente.',
      },
      {
        question: 'Posso dar uma gorjeta com porcentagem personalizada, como 17%?',
        answer:
          'Sim. Digite qualquer porcentagem no campo de gorjeta personalizada em vez de usar os valores predefinidos.',
      },
      {
        question: 'O que o valor por pessoa inclui?',
        answer:
          'A parte de cada pessoa na conta mais a parte dela na gorjeta. Com o arredondamento ativado, ele é arredondado para o próximo dólar inteiro.',
      },
      {
        question: 'Como o arredondamento muda a gorjeta efetiva?',
        answer:
          'Arredondar a parte de cada pessoa para cima soma um pequeno valor além da gorjeta, então a calculadora mostra a porcentagem efetiva de gorjeta resultante.',
      },
      {
        question: 'Posso usar a Calculadora de Gorjeta para gorjetas de salão ou táxi?',
        answer:
          'Sim. Digite o total do serviço e a porcentagem de gorjeta escolhida; a mesma conta vale para qualquer serviço com gorjeta.',
      },
      {
        question: 'A calculadora guarda os valores das minhas contas?',
        answer:
          'Não. Todos os cálculos acontecem localmente no seu navegador e nada é enviado nem guardado.',
      },
      {
        question: 'E se a conta já incluir uma taxa de serviço?',
        answer:
          'Confira se a taxa de serviço é a gorjeta. Se for, talvez você não precise de gorjeta extra, e pode digitar 0% para ver a divisão sem ela.',
      },
      {
        question: 'Como divido uma conta entre 3 pessoas com um total ímpar?',
        answer:
          'Digite a conta, a % de gorjeta e 3 pessoas. A calculadora divide o total igualmente e mostra a parte exata de cada pessoa.',
      },
      {
        question: 'Posso calcular a gorjeta antes do imposto se eu só souber o total?',
        answer:
          'Você precisa do valor do imposto ou do subtotal sem imposto para dar gorjeta antes do imposto. Se o recibo mostrar só o total, use o total completo como base da gorjeta.',
      },
      {
        question: 'Quais porcentagens de gorjeta os atalhos cobrem?',
        answer:
          'Os atalhos rápidos são 10%, 15%, 18%, 20% e 25%, e você pode digitar qualquer outra porcentagem como valor personalizado.',
      },
      {
        question: 'É falta de educação dividir uma conta igualmente?',
        answer:
          'Isso depende do grupo e do que cada um pediu. A calculadora simplesmente torna a conta da divisão igualitária instantânea.',
      },
      {
        question: 'Como calculo a gorjeta de uma conta grande de grupo?',
        answer:
          'Digite o total completo da conta e o número de convidados. A calculadora mostra a gorjeta, o total e quanto cada pessoa deve.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha o sistema de unidades',
        description:
          'Alterne entre Métrico (cm / kg) e Imperial (pés, pol / lb).',
      },
      {
        title: 'Digite a altura e o peso',
        description:
          'Informe sua altura atual e seu peso corporal nos campos validados.',
      },
      {
        title: 'Confira suas unidades',
        description:
          'Certifique-se de que centímetros vão com quilogramas e pés/polegadas vão com libras, ou o resultado sairá errado.',
      },
      {
        title: 'Veja seu IMC na hora',
        description:
          'A pontuação, a categoria da OMS e a faixa de peso saudável são atualizadas enquanto você digita, sem botão para apertar.',
      },
      {
        title: 'Confira o IMC e o contexto',
        description:
          'Veja sua pontuação de IMC, a categoria da OMS e a faixa de peso saudável correspondente à sua altura.',
      },
      {
        title: 'Anote ou compartilhe seu resultado',
        description:
          'Copie seu IMC e a faixa de peso saudável para acompanhar ao longo do tempo ou discutir com um profissional de saúde, e digite novas medidas sempre que seu peso mudar.',
      },
    ],
    examples: [
      {
        title: 'Verificação de IMC de adulto no sistema métrico',
        input: 'Altura: 175 cm · Peso: 70 kg',
        output: 'IMC: 22,9 kg/m² · Categoria OMS: Peso normal (56,7 – 76,3 kg)',
        explanation: 'Calculado como 70 / (1,75 × 1,75) = 22,86 kg/m².',
      },
      {
        title: 'Verificação de IMC de adulto no sistema imperial',
        input: 'Altura: 5 pés 9 pol · Peso: 160 lb',
        output: 'IMC: 23,6 kg/m² · Categoria OMS: Peso normal (56,8 – 76,5 kg)',
        explanation: 'Calculado como (160 × 703) / 69² = 23,63 kg/m².',
      },
    ],
    benefits: [
      'Permite alternar na hora entre medidas Métricas e Imperiais dos EUA',
      'Calcula a faixa exata de peso saudável de 18,5–24,9 kg/m² para sua altura',
      'Inclui notas claras de limitação clínica sobre massa muscular e composição corporal',
      'Funciona de forma privada na memória do navegador, sem guardar nenhum dado de saúde',
    ],
    useCases: [
      'Verificações rápidas de triagem de peso em relação à altura em adultos',
      'Encontrar faixas de peso saudável desejadas para uma altura específica',
      'Combinar com o planejamento diário de calorias e TDEE',
      'Converter medidas imperiais de altura/peso no IMC padrão em kg/m²',
    ],
    faqs: [
      {
        question: 'Qual é a fórmula do Índice de Massa Corporal?',
        answer:
          'O IMC é igual ao peso em quilogramas dividido pela altura em metros ao quadrado: peso(kg) / altura(m)². Em unidades imperiais, isso equivale a (peso(lb) × 703) / altura(pol)².',
      },
      {
        question: 'O IMC se aplica com precisão a atletas ou idosos?',
        answer:
          'O IMC é uma proporção de triagem em nível populacional e não distingue massa muscular magra de gordura corporal. Atletas muito musculosos podem ficar na faixa de sobrepeso apesar da baixa gordura corporal, e crianças/adolescentes precisam de percentis por idade e sexo.',
      },
      {
        question: 'Minhas informações de saúde são salvas em algum lugar?',
        answer:
          'Não. Todas as medidas ficam estritamente dentro da aba ativa do seu navegador e desaparecem quando ela é fechada.',
      },
      {
        question: 'Qual é uma faixa de IMC saudável?',
        answer:
          'A OMS define 18,5–24,9 kg/m² como a faixa de peso normal para adultos. Abaixo de 18,5 é abaixo do peso e 25–29,9 é sobrepeso.',
      },
      {
        question: 'A Calculadora de IMC é gratuita?',
        answer:
          'Sim, é totalmente gratuita e funciona por completo no seu navegador — não precisa de conta nem de envio.',
      },
      {
        question: 'Quais são as categorias de IMC da OMS?',
        answer:
          'Abaixo do peso é menos de 18,5, peso normal é 18,5–24,9, sobrepeso é 25–29,9 e obesidade é 30 ou mais.',
      },
      {
        question: 'Como calculo o IMC em libras e polegadas?',
        answer:
          'Use (peso em lb × 703) ÷ (altura em polegadas)². A calculadora faz isso automaticamente no modo Imperial.',
      },
      {
        question: 'Como calculo o IMC em quilogramas e centímetros?',
        answer:
          'Divida o peso em kg pela altura em metros ao quadrado. A calculadora converte seus centímetros em metros para você.',
      },
      {
        question: 'O IMC é preciso para todas as pessoas?',
        answer:
          'Não. O IMC é uma proporção de triagem que não distingue músculo de gordura, então pessoas muito musculosas, idosos e crianças precisam de avaliações diferentes.',
      },
      {
        question: 'Crianças podem usar esta Calculadora de IMC?',
        answer:
          'Não. O IMC de crianças é interpretado com tabelas de percentis por idade e sexo, e não com as faixas de adultos da OMS, então esta ferramenta é só para adultos.',
      },
      {
        question: 'Qual é minha faixa de peso saudável?',
        answer:
          'A calculadora mostra a faixa de peso que dá um IMC de 18,5–24,9 para sua altura — por exemplo, cerca de 56,7–76,3 kg com 175 cm.',
      },
      {
        question: 'Com que frequência devo verificar meu IMC?',
        answer:
          'De vez em quando já basta, como uma vez por mês ao acompanhar mudanças de peso. O IMC é um número de triagem, não um veredito diário de saúde.',
      },
      {
        question: 'O IMC mede a porcentagem de gordura corporal?',
        answer:
          'Não. O IMC só relaciona peso e altura e não consegue dizer quanto do seu peso é gordura versus músculo ou osso.',
      },
      {
        question: 'O que devo fazer se meu IMC estiver na faixa de sobrepeso?',
        answer:
          'Considere isso um incentivo para olhar a alimentação, a atividade física e a saúde geral com um profissional. Um único número de IMC não é um diagnóstico.',
      },
      {
        question: 'Posso usar o IMC se estiver grávida?',
        answer:
          'Não. A gravidez muda o peso de formas que o IMC não leva em conta, então as categorias padrão não se aplicam.',
      },
      {
        question: 'Meus dados de altura e peso são salvos em algum lugar?',
        answer:
          'Não. Suas medidas ficam na aba do seu navegador e desaparecem quando você a fecha.',
      },
      {
        question: 'Por que a calculadora pede a altura em pés e polegadas?',
        answer:
          'O modo Imperial aceita pés e polegadas porque é assim que a altura costuma ser medida nos EUA. O modo Métrico usa centímetros.',
      },
      {
        question: 'Qual é a diferença entre IMC e TMB?',
        answer:
          'O IMC relaciona peso e altura, enquanto a TMB (taxa metabólica basal) estima as calorias que seu corpo queima em repouso — eles medem coisas diferentes.',
      },
      {
        question: 'Atletas podem ter IMC alto e ainda ser saudáveis?',
        answer:
          'Sim. O músculo é denso, então um atleta muito musculoso pode ficar como sobrepeso no IMC apesar da baixa gordura corporal. A ferramenta sinaliza essa limitação.',
      },
      {
        question: 'Qual é a precisão do resultado do IMC?',
        answer:
          'A conta é exata para os números que você digita, mas o resultado só é tão preciso quanto suas medidas de altura e peso.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha as unidades e o perfil',
        description:
          'Selecione unidades Métricas ou Imperiais, as constantes de referência biológica Masculino ou Feminino, e digite idade, altura e peso.',
      },
      {
        title: 'Escolha seu nível de atividade semanal',
        description:
          'Selecione o multiplicador de atividade de Sedentário (1,2×) até Muito Ativo (1,9×) que reflita sua rotina real.',
      },
      {
        title: 'Defina sua meta de peso',
        description:
          'Escolha manutenção, déficit leve, perda de gordura padrão ou ganho magro para ver a meta diária de calorias que corresponde ao seu objetivo.',
      },
      {
        title: 'Confira as metas diárias de calorias',
        description:
          'Compare o TDEE de Manutenção, os déficits de Perda de Peso Leve/Padrão, o superávit de Ganho Magro e as gramas de macros de referência.',
      },
      {
        title: 'Confira suas metas de gramas de macros',
        description:
          'Leia as referências de gramas de proteína, carboidrato e gordura para a meta de calorias escolhida e ajuste-as à sua dieta.',
      },
      {
        title: 'Salve e confira seus números novamente',
        description:
          'Anote suas metas, execute o cálculo novamente se seu peso ou sua atividade mudar e acompanhe as tendências reais de peso por 2 a 3 semanas antes de ajustar a ingestão.',
      },
    ],
    examples: [
      {
        title: 'Verificação de manutenção de adulto moderadamente ativo',
        input: 'Masculino · 30 anos · 175 cm · 72 kg · Moderadamente Ativo (1,55×)',
        output: 'TMB: 1.669 kcal · TDEE de manutenção: 2.587 kcal/dia · Perda de -0,5 kg/sem: 2.087 kcal/dia',
        explanation: 'Aplica a TMB de Mifflin-St Jeor × fator de atividade 1,55 e subtrai 500 kcal para cerca de 0,5 kg/semana de perda.',
      },
      {
        title: 'Verificação de manutenção de adulta levemente ativa',
        input: 'Feminino · 28 anos · 165 cm · 60 kg · Levemente Ativa (1,375×)',
        output: 'TMB: 1.330 kcal · TDEE de manutenção: 1.829 kcal/dia · Perda de -0,5 kg/sem: 1.329 kcal/dia',
        explanation: 'Aplica a TMB de Mifflin-St Jeor × fator de atividade 1,375 e subtrai 500 kcal para cerca de 0,5 kg/semana de perda.',
      },
    ],
    benefits: [
      'Usa a fórmula de previsão de TMB de Mifflin-St Jeor, amplamente aceita',
      'Aplica um aviso de piso de 1.200 kcal nas projeções de déficit para conscientização sobre segurança',
      'Fornece referências equilibradas de gramas de Proteína, Carboidrato e Gordura Alimentar',
      'Suporta unidades Métricas (cm/kg) e Imperiais dos EUA (pés, pol/lb)',
    ],
    useCases: [
      'Definir orçamentos diários realistas de calorias para acompanhamento nutricional',
      'Estimar mudanças no gasto energético entre níveis de atividade',
      'Traduzir as calorias de manutenção em gramas diárias de proteína, carboidrato e gordura',
      'Planejar déficits graduais de 250–500 kcal em vez de dietas radicais insustentáveis',
    ],
    faqs: [
      {
        question: 'Por que esta calculadora usa a equação de Mifflin-St Jeor?',
        answer:
          'A pesquisa em nutrição classifica consistentemente a Mifflin-St Jeor entre as fórmulas mais precisas para a população geral para estimar o gasto energético em repouso a partir de idade, sexo, altura e peso.',
      },
      {
        question: 'Qual é a precisão dos multiplicadores de atividade?',
        answer:
          'Os multiplicadores de atividade fornecem uma estimativa inicial baseada em evidências. Acompanhe as tendências de peso corporal por 2–3 semanas e ajuste a ingestão diária em 100–200 kcal com base no progresso real.',
      },
      {
        question: 'Isto é aconselhamento médico ou de nutrição clínica?',
        answer:
          'Não. As previsões são estimativas informativas; consulte um médico ou nutricionista registrado para orientação personalizada de nutrição médica.',
      },
      {
        question: 'O que é TMB e como ela difere do TDEE?',
        answer:
          'A TMB é a energia que seu corpo usa em repouso completo para manter as funções básicas. O TDEE soma à sua TMB as calorias queimadas com o movimento diário e o exercício.',
      },
      {
        question: 'O que a Calculadora de Calorias faz com minha idade, altura e peso?',
        answer:
          'Ela os insere na equação de Mifflin-St Jeor para estimar sua TMB e depois multiplica pela sua atividade para estimar seu TDEE e as metas diárias de calorias.',
      },
      {
        question: 'Como escolho o nível de atividade certo na Calculadora de Calorias?',
        answer:
          'Escolha o nível que corresponde a uma semana típica, não ao seu dia mais movimentado. A maioria dos trabalhadores de escritório que se exercitam algumas vezes por semana se enquadra em Levemente ou Moderadamente Ativo.',
      },
      {
        question: 'Qual é um déficit calórico seguro para perda de peso?',
        answer:
          'Um ponto de partida comum é um déficit diário de 250 a 500 kcal, que visa uma perda gradual de cerca de 0,25 a 0,5 kg por semana. Déficits maiores devem ser discutidos com um profissional de saúde.',
      },
      {
        question: 'Quantas calorias devo comer para ganhar peso de forma magra?',
        answer:
          'A ferramenta mostra um superávit de Ganho Magro acima do seu TDEE de manutenção como meta inicial. Acompanhe seu peso por algumas semanas e ajuste o superávit para cima ou para baixo com base na mudança real.',
      },
      {
        question: 'Por que a Calculadora de Calorias mostra um aviso de piso de 1.200 kcal?',
        answer:
          'Metas calóricas muito baixas podem ser inseguras e difíceis de manter, então a ferramenta sinaliza déficits abaixo de 1.200 kcal para aumentar a conscientização sobre segurança.',
      },
      {
        question: 'Quais são as metas de macros mostradas pela Calculadora de Calorias?',
        answer:
          'São quantidades de referência em gramas de proteína, carboidratos e gordura alimentar que somam sua meta diária de calorias escolhida. São uma divisão inicial, não uma dieta prescrita.',
      },
      {
        question: 'A Calculadora de Calorias funciona com unidades Métricas e Imperiais?',
        answer:
          'Sim. Você pode digitar altura e peso em centímetros e quilogramas, ou em pés, polegadas e libras, e os resultados são os mesmos.',
      },
      {
        question: 'Posso usar a Calculadora de Calorias se eu for muito ativo ou atleta?',
        answer:
          'Sim, o nível Muito Ativo cobre trabalho físico pesado ou treino diário intenso, mas atletas com composição corporal incomum podem achar a estimativa menos precisa.',
      },
      {
        question: 'Por que meu TDEE mudou quando mudei meu nível de atividade?',
        answer:
          'O TDEE é sua TMB multiplicada por um fator de atividade, então um nível de atividade maior aumenta o multiplicador e, portanto, aumenta suas necessidades diárias estimadas de calorias.',
      },
      {
        question: 'Com que frequência devo recalcular minhas calorias?',
        answer:
          'Recalcule sempre que seu peso, nível de atividade ou objetivo mudar, ou aproximadamente a cada 4 a 8 semanas enquanto você estiver perdendo ou ganhando peso ativamente.',
      },
      {
        question: 'A Calculadora de Calorias guarda ou envia meus dados pessoais?',
        answer:
          'Não. Todos os cálculos são executados localmente no seu navegador, e sua idade, altura, peso e escolhas de atividade nunca são enviados nem salvos em um servidor.',
      },
      {
        question: 'A Calculadora de Calorias é gratuita?',
        answer:
          'Sim, é totalmente gratuita para usar no seu navegador, sem conta, sem cadastro e sem limite de quantas vezes você recalcula.',
      },
      {
        question: 'A Calculadora de Calorias pode me ajudar a planejar um déficit de 500 kcal?',
        answer:
          'Sim. A meta de Perda de Peso Padrão subtrai cerca de 500 kcal por dia do seu TDEE de manutenção, visando aproximadamente 0,5 kg de perda por semana.',
      },
      {
        question: 'O que devo fazer se meu peso não mudar depois de seguir a meta?',
        answer:
          'Primeiro, confira se seu nível de atividade e seu registro alimentar são honestos e consistentes por 2 a 3 semanas. Se o peso ainda não se mover, ajuste a ingestão em 100 a 200 kcal e continue acompanhando.',
      },
      {
        question: 'A Calculadora de Calorias leva em conta a porcentagem de gordura corporal?',
        answer:
          'Não. A equação de Mifflin-St Jeor usa apenas idade, sexo, altura e peso corporal total, então não consegue distinguir músculo de gordura corporal.',
      },
      {
        question: 'Adolescentes ou idosos podem usar a Calculadora de Calorias?',
        answer:
          'A fórmula foi criada para adultos, então os resultados para adolescentes ou idosos são apenas estimativas aproximadas. Os jovens devem buscar orientação nutricional com um responsável e um profissional de saúde.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Diferença ou Somar/Subtrair',
        description:
          'Escolha Diferença Entre Datas para comparar duas datas, ou Somar / Subtrair Tempo para projetar uma data futura ou passada.',
      },
      {
        title: 'Escolha as datas e as opções',
        description:
          'Digite as datas de Início e Fim (use o botão de troca quando quiser) e, se quiser, marque Incluir data final (+1 dia).',
      },
      {
        title: 'Troque as datas se necessário',
        description:
          'Use o botão de troca para inverter as datas de início e fim na hora, caso você as tenha digitado na ordem errada.',
      },
      {
        title: 'Confira o detalhamento do calendário',
        description:
          'Veja Anos/Meses/Dias, o total de dias corridos, semanas, dias úteis (seg–sex), fins de semana e horas.',
      },
      {
        title: 'Confira os dias úteis e os fins de semana',
        description:
          'Leia as contagens de dias úteis e fins de semana separadamente para planejar dias de trabalho, dias de cobrança ou durações de viagem.',
      },
      {
        title: 'Copie ou reutilize o resultado',
        description:
          'Copie o detalhamento para contratos, cronogramas ou mensagens e execute o cálculo novamente com a opção de data final inclusiva se sua contagem parecer um dia mais curta.',
      },
    ],
    examples: [
      {
        title: 'Contando a duração e os dias úteis de um projeto',
        input: 'Início: 2025-01-15 · Fim: 2025-11-12 · Inclusiva: Desativada',
        output: '0 anos, 9 meses, 28 dias · 301 dias totais · 215 dias úteis · 86 dias de fim de semana',
        explanation: 'Usa aritmética de calendário em UTC, imune aos erros de 23/25 horas do horário de verão.',
      },
      {
        title: 'Somando 1 mês a 31 de janeiro',
        input: 'Modo: Somar/Subtrair · Data: 2025-01-31 · Somar: 1 mês',
        output: 'Resultado: 2025-02-28',
        explanation: 'A soma de meses é limitada ao último dia válido de fevereiro, em vez de avançar para março.',
      },
    ],
    benefits: [
      'A aritmética pura de calendário em UTC evita erros de um dia do horário de verão',
      'Conta dias úteis (segunda a sexta) e fins de semana na hora, em tempo O(1)',
      'Suporta contagem inclusiva da data final para noites de hotel vs dias de sprint',
      'Inclui soma/subtração de datas com limitação inteligente de fim de mês',
    ],
    useCases: [
      'Contar dias de sprint de projeto, prazos de contrato ou limites de permanência de visto',
      'Encontrar dias exatos de cobrança ou datas de vencimento de aviso prévio',
      'Somar 90 dias ou 6 meses à data de vigência de um contrato',
      'Verificar o total de dias úteis disponíveis em um trimestre ou período fiscal',
    ],
    faqs: [
      {
        question: 'O contador de dias úteis exclui feriados?',
        answer:
          'Ele conta os dias úteis de segunda a sexta do calendário porque os feriados variam por país, estado e calendário do empregador.',
      },
      {
        question: 'Quando devo marcar "Incluir data final (+1 dia corrido)"?',
        answer:
          'Marque quando contar dias de presença ou férias inclusivos (por exemplo, segunda a sexta = 5 dias). Deixe desmarcado ao contar noites decorridas ou intervalos.',
      },
      {
        question: 'O que acontece se eu somar 1 mês a 31 de janeiro?',
        answer:
          'O limite de calendário ajusta 31 de janeiro + 1 mês para o último dia válido de fevereiro (28 de fev, ou 29 de fev em anos bissextos), em vez de avançar para março.',
      },
      {
        question: 'Como a Calculadora de Diferença de Datas conta os dias entre duas datas?',
        answer:
          'Ela mede o intervalo exato de calendário entre as duas datas usando aritmética de datas em UTC e depois divide o intervalo em anos, meses e dias restantes, além de dias totais e semanas.',
      },
      {
        question: 'A Calculadora de Diferença de Datas inclui a data de início no total?',
        answer:
          'Por padrão, não, então de segunda a sexta conta como 4 dias decorridos. Ative a opção de data final inclusiva quando quiser que a data de início e a data final sejam contadas.',
      },
      {
        question: 'Qual é a diferença entre dias corridos e dias úteis nesta ferramenta?',
        answer:
          'Os dias corridos contam todos os dias do intervalo, enquanto os dias úteis contam só de segunda a sexta. Os fins de semana são mostrados separadamente, para que você veja os dois totais de uma vez.',
      },
      {
        question: 'A Calculadora de Diferença de Datas pode contar os fins de semana separadamente?',
        answer:
          'Sim. O detalhamento lista o total de dias de fim de semana (sábados e domingos) junto com os dias úteis, para que você planeje viagens, turnos ou prazos que abrangem fins de semana.',
      },
      {
        question: 'Como a Calculadora de Diferença de Datas lida com anos bissextos?',
        answer:
          'Ela usa aritmética real de calendário, então 29 de fevereiro é contado em anos bissextos e intervalos que cruzam fevereiro em um ano bissexto incluem o dia extra automaticamente.',
      },
      {
        question: 'Posso usar a Calculadora de Diferença de Datas para saber quantos dias faltam até uma data?',
        answer:
          'Sim. Defina a data de início como hoje e a data final como sua data-alvo, e o resultado de dias totais dirá exatamente quantos dias faltam.',
      },
      {
        question: 'A Calculadora de Diferença de Datas funciona em anos diferentes?',
        answer:
          'Sim. Você pode comparar datas com anos de diferença, e o resultado divide o intervalo em anos completos, meses restantes e dias restantes.',
      },
      {
        question: 'O que acontece se a data final for anterior à data de início?',
        answer:
          'Use o botão de troca para inverter as duas datas. A ferramenta foi criada para comparar uma data de início com uma data final posterior, então a troca dá o intervalo positivo correto.',
      },
      {
        question: 'Posso somar anos, meses e dias a uma data ao mesmo tempo?',
        answer:
          'Sim. No modo Somar / Subtrair, você pode digitar uma combinação de anos, meses e dias, e a ferramenta aplica todo o intervalo à sua data de referência em uma só etapa.',
      },
      {
        question: 'A Calculadora de Diferença de Datas se ajusta ao horário de verão?',
        answer:
          'Sim, na prática. Ela usa aritmética de calendário em UTC, então os dias de 23 e 25 horas em torno das mudanças de horário de verão não podem deslocar o resultado em um dia.',
      },
      {
        question: 'Como conto dias úteis para o prazo de um projeto?',
        answer:
          'Digite as datas de início e fim do projeto e leia a contagem de dias úteis, que é de segunda a sexta. Lembre-se de que os feriados não são subtraídos, então ajuste a contagem se houver feriados dentro do intervalo.',
      },
      {
        question: 'A Calculadora de Diferença de Datas é gratuita?',
        answer:
          'Sim, é totalmente gratuita para usar no seu navegador, sem conta, sem cadastro e sem limite de quantos intervalos de datas você calcula.',
      },
      {
        question: 'A Calculadora de Diferença de Datas salva ou envia minhas datas?',
        answer:
          'Não. Todos os cálculos são executados localmente no seu navegador, e as datas que você digita nunca são enviadas nem guardadas em um servidor.',
      },
      {
        question: 'Posso calcular a diferença entre datas em fusos horários diferentes?',
        answer:
          'A ferramenta compara datas de calendário, não horas do dia, então os fusos horários não mudam o resultado. Escolha as datas como elas aparecem em cada calendário local.',
      },
      {
        question: 'O que a opção de data final inclusiva muda no resultado?',
        answer:
          'Ela soma exatamente um dia corrido ao total, então uma contagem inclusiva de segunda a sexta vira 5 dias em vez de 4. O detalhamento de anos, meses e dias é atualizado para corresponder.',
      },
      {
        question: 'A Calculadora de Diferença de Datas pode somar 90 dias a uma data de contrato?',
        answer:
          'Sim. Escolha Somar / Subtrair, digite a data do contrato, some 90 dias, e a ferramenta mostra a data resultante exata, incluindo a virada de mês e ano.',
      },
      {
        question: 'Por que fevereiro às vezes muda o resultado da minha soma de meses?',
        answer:
          'Somar meses é limitado ao último dia válido do mês de destino, então 31 de janeiro mais um mês cai em 28 ou 29 de fevereiro, em vez de 2 ou 3 de março.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha o modo Decorrido ou Somar Durações',
        description:
          'Use Tempo Decorrido Entre Horários para verificações de início/fim de turno, ou Somar Durações de Folha de Ponto para somar vários blocos.',
      },
      {
        title: 'Digite os horários e a pausa opcional',
        description:
          'Defina a Hora de Início, a Hora de Fim e qualquer Pausa Não Remunerada em minutos; ative a virada noturna se um turno cruzar a meia-noite.',
      },
      {
        title: 'Ative a virada noturna para turnos da noite',
        description:
          'Ative a opção noturna quando a hora de fim for anterior à hora de início, para que um turno que cruza a meia-noite seja contado corretamente.',
      },
      {
        title: 'Confira o detalhamento da duração líquida',
        description:
          'Veja HH:MM:SS, o total de minutos, o total de segundos e as horas decimais juntos antes de usar o resultado.',
      },
      {
        title: 'Copie HH:MM:SS ou horas decimais',
        description:
          'Use HH:MM:SS para registros ou Horas Decimais (por exemplo, 7,50 h) para faturas e folhas de pagamento.',
      },
      {
        title: 'Corrija um resultado que pareça errado',
        description:
          'Se o total parecer curto demais, confira primeiro a duração da pausa e a opção noturna e depois confirme se as horas de início e fim não estão trocadas.',
      },
    ],
    examples: [
      {
        title: 'Turno padrão de trabalho com pausa de 30 minutos',
        input: 'Início: 09:00:00 · Fim: 17:30:00 · Pausa: 30 min',
        output: 'Duração líquida: 08:00:00 · Decimal: 8,00 h · 480 min',
        explanation: '8,5 horas decorridas menos 0,5 de pausa não remunerada equivalem a 8,00 horas faturáveis.',
      },
      {
        title: 'Turno noturno que cruza a meia-noite',
        input: 'Início: 22:00:00 · Fim: 06:30:00 · Pausa: 0 min · Virada noturna: ativada',
        output: 'Duração líquida: 08:30:00 · Decimal: 8,50 h · 510 min',
        explanation: 'O fim mais cedo que o início é tratado como o dia seguinte: 8,5 horas de turno noturno.',
      },
    ],
    benefits: [
      'Lida com turnos noturnos que cruzam as 00:00 de forma limpa, com um só botão',
      'Fornece HH:MM:SS, horas decimais, total de minutos e total de segundos juntos',
      'O somador dinâmico de várias linhas totaliza segmentos de trabalho ilimitados ou durações de vídeo/áudio',
      'Evita deduções de pausa maiores que a duração total decorrida do turno',
    ],
    useCases: [
      'Registrar horas faturáveis de freelancer e descontar pausas não remuneradas',
      'Calcular horas de turnos noturnos de hospital, logística ou hotelaria',
      'Somar marcações de tempo de episódios de podcast, durações de aulas ou playlists',
      'Converter registros de folha de ponto de 7h 45m em 7,75 horas decimais para cobrança',
    ],
    faqs: [
      {
        question: 'Como as horas decimais são calculadas?',
        answer:
          'Os segundos líquidos totais são divididos por 3.600. Por exemplo, 7 horas e 45 minutos (27.900 segundos) equivalem a 7,75 horas decimais.',
      },
      {
        question: 'Isto funciona para turnos noturnos que terminam depois da meia-noite?',
        answer:
          'Sim. Mantenha marcada a opção "Tratar a hora de fim anterior à hora de início como o dia seguinte", para que um turno das 22:00 às 06:30 calcule com precisão 8 horas e 30 minutos.',
      },
      {
        question: 'Posso somar durações maiores que 24 horas?',
        answer:
          'Sim. O modo Somar Durações de Folha de Ponto acumula horas sem zerar em 24 e também mostra a contagem equivalente de dias de 24 horas.',
      },
      {
        question: 'O que a Calculadora de Duração de Tempo mede?',
        answer:
          'Ela mede o tempo decorrido entre dois horários, ou o total de várias linhas de duração, e mostra o resultado em HH:MM:SS, horas decimais, minutos e segundos.',
      },
      {
        question: 'Como digito os horários na Calculadora de Duração de Tempo?',
        answer:
          'Digite uma hora de início e uma hora de fim em horas, minutos e segundos. No modo Somar Durações, digite cada bloco como sua própria linha.',
      },
      {
        question: 'Como a Calculadora de Duração de Tempo desconta uma pausa não remunerada?',
        answer:
          'Ela subtrai os minutos de pausa que você digita do tempo decorrido do turno, então um turno de 8,5 horas com uma pausa de 30 minutos dá 8,00 horas líquidas.',
      },
      {
        question: 'O que acontece se minha pausa for maior que meu turno?',
        answer:
          'A ferramenta impede uma dedução de pausa maior que a duração total decorrida do turno, então a duração líquida não pode ficar abaixo de zero.',
      },
      {
        question: 'A Calculadora de Duração de Tempo lida com turnos que começam antes da meia-noite e terminam depois?',
        answer:
          'Sim. Ative a virada noturna para que uma hora de fim anterior à hora de início seja tratada como o dia seguinte, e todo o turno noturno seja contado.',
      },
      {
        question: 'Qual é a diferença entre tempo decorrido e duração líquida?',
        answer:
          'O tempo decorrido é o intervalo completo do início ao fim. A duração líquida é o tempo decorrido menos qualquer pausa não remunerada, que é o valor geralmente cobrado ou pago.',
      },
      {
        question: 'Como somo vários blocos de trabalho separados?',
        answer:
          'Mude para o modo Somar Durações de Folha de Ponto, adicione uma linha por bloco de trabalho com suas horas, minutos e segundos, e a ferramenta totaliza todas as linhas de uma vez.',
      },
      {
        question: 'Posso usar a Calculadora de Duração de Tempo para durações de vídeo ou áudio?',
        answer:
          'Sim. Some a duração de cada episódio, aula ou faixa como uma linha no modo Somar Durações para obter a duração combinada de uma playlist ou curso.',
      },
      {
        question: 'A Calculadora de Duração de Tempo arredonda minutos ou segundos?',
        answer:
          'Não, ela calcula a partir de segundos exatos e mostra o resultado preciso em HH:MM:SS junto com o equivalente em horas decimais, então nada é arredondado silenciosamente.',
      },
      {
        question: 'O que significam 7,75 horas decimais em horas e minutos?',
        answer:
          'Significam 7 horas e 45 minutos. A parte depois da vírgula é uma fração de hora, então 0,75 de uma hora equivale a 45 minutos.',
      },
      {
        question: 'A Calculadora de Duração de Tempo é gratuita?',
        answer:
          'Sim, é totalmente gratuita para usar no seu navegador, sem conta, sem cadastro e sem limite de quantas durações você calcula.',
      },
      {
        question: 'A Calculadora de Duração de Tempo guarda ou envia meus horários?',
        answer:
          'Não. Todos os cálculos são executados localmente no seu navegador, e os horários e as durações que você digita nunca são enviados nem guardados em um servidor.',
      },
      {
        question: 'Posso calcular uma duração de mais de um dia?',
        answer:
          'Sim. O modo Somar Durações totaliza as horas sem zerar em 24, e também mostra a quantos dias de 24 horas o total equivale.',
      },
      {
        question: 'Por que meu turno mostra uma duração negativa ou zero?',
        answer:
          'Isso geralmente significa que a hora de fim é anterior à hora de início sem a virada noturna ativada, ou que a pausa é tão longa quanto o turno. Confira primeiro a opção noturna e a duração da pausa.',
      },
      {
        question: 'Como converto minutos em horas decimais com esta ferramenta?',
        answer:
          'Digite o tempo como uma linha de duração ou use o resultado decorrido e leia o valor de horas decimais. Por exemplo, 90 minutos aparecem como 1,50 horas decimais.',
      },
      {
        question: 'A Calculadora de Duração de Tempo pode somar tempos no formato HH:MM:SS?',
        answer:
          'Sim. Cada linha de duração aceita horas, minutos e segundos, e o total é mostrado de volta em HH:MM:SS, além de horas decimais.',
      },
      {
        question: 'O que devo verificar se o total da minha folha de ponto não bate com minhas horas?',
        answer:
          'Confira se cada linha foi digitada no modo certo, se nenhuma pausa foi contada duas vezes e se os turnos noturnos têm a opção de virada ativada.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha uma categoria de medida',
        description:
          'Selecione Comprimento, Peso e Massa, Temperatura, Área, Volume, Velocidade ou Armazenamento Digital na barra superior.',
      },
      {
        title: 'Digite o valor e escolha as unidades',
        description:
          'Digite qualquer valor numérico e escolha suas unidades De e Para (clique em Trocar quando quiser para inverter).',
      },
      {
        title: 'Inverta a direção da conversão',
        description:
          'Clique em Trocar para inverter as unidades De e Para na hora, sem redigitar o valor.',
      },
      {
        title: 'Leia o resultado convertido exato',
        description:
          'Confira o valor de destino formatado, incluindo decimais, antes de copiá-lo para seu documento ou cálculo.',
      },
      {
        title: 'Copie o resultado ou confira todas as unidades',
        description:
          'Copie o resultado formatado ou leia a tabela de valores equivalentes em todas as unidades da família.',
      },
      {
        title: 'Confira peculiaridades de armazenamento ou temperatura',
        description:
          'Para armazenamento, confirme se você precisa de GB decimal ou GiB binário, e para temperatura, observe que valores abaixo do zero absoluto são bloqueados.',
      },
    ],
    examples: [
      {
        title: 'Gigabyte decimal vs Gibibyte binário de armazenamento',
        input: 'Categoria: Armazenamento Digital · 1.000 GB → GiB',
        output: '931,32257 GiB',
        explanation: 'Explica por que um drive de 1 TB (1.000 GB) aparece como cerca de 931 GiB nos sistemas operacionais de desktop.',
      },
      {
        title: 'Conversão de temperatura Celsius para Fahrenheit',
        input: 'Categoria: Temperatura · 100 °C → °F',
        output: '212 °F',
        explanation: 'Fahrenheit = Celsius × 9/5 + 32: 100 × 1,8 + 32 = 212.',
      },
    ],
    benefits: [
      'Usa constantes exatas de conversão internacionais NIST/SI (por exemplo, 1 pol = 0,0254 m exato)',
      'Separa o armazenamento decimal SI (KB/MB/GB) do armazenamento binário IEC (KiB/MiB/GiB)',
      'Valida limites físicos de temperatura (nunca abaixo do Zero Absoluto 0 K / -273,15 °C)',
      'Mostra uma tabela comparativa completa para cada unidade da categoria ativa',
    ],
    useCases: [
      'Converter desenhos de engenharia entre milímetros, polegadas e pés',
      'Conferir volumes líquidos de culinária entre mililitros, xícaras e galões',
      'Traduzir temperaturas de clima ou laboratório de Celsius para Fahrenheit e Kelvin',
      'Auditar tamanhos de disco em nuvem entre GB decimal e GiB binário',
    ],
    faqs: [
      {
        question: 'Por que o Armazenamento Digital separa GB de GiB?',
        answer:
          'Os fabricantes de armazenamento usam prefixos SI de base 10 (1 GB = 1.000³ bytes), enquanto muitos utilitários de sistema operacional usam tamanhos binários de base 2 (1 GiB = 1.024³ bytes). Manter os dois explícitos elimina a confusão.',
      },
      {
        question: 'As unidades de volume dos EUA são usadas para xícaras, pints e galões?',
        answer:
          'Sim. Onças fluidas, xícaras, pints, quarts e galões usam as definições líquidas do sistema costumeiro dos EUA (1 galão americano = 3,785411784 L exato).',
      },
      {
        question: 'Por que o conversor de temperatura bloqueia valores abaixo de -273,15 °C?',
        answer:
          'O zero absoluto (0 K / -273,15 °C / -459,67 °F) é o limite inferior físico da temperatura termodinâmica.',
      },
      {
        question: 'Quais unidades o Conversor de Unidades pode converter?',
        answer:
          'Ele cobre sete famílias: Comprimento, Peso e Massa, Temperatura, Área, Volume, Velocidade e Armazenamento Digital, com muitas unidades dentro de cada família.',
      },
      {
        question: 'Qual é a precisão dos resultados do Conversor de Unidades?',
        answer:
          'Os resultados usam constantes exatas de conversão internacionais NIST e SI, como 1 polegada igual a 0,0254 metros exatos, então a conta é tão precisa quanto o valor que você digita.',
      },
      {
        question: 'O Conversor de Unidades é gratuito?',
        answer:
          'Sim, é totalmente gratuito para usar no seu navegador, sem conta, sem cadastro e sem limite de quantas conversões você executa.',
      },
      {
        question: 'Como converto quilômetros em milhas com o Conversor de Unidades?',
        answer:
          'Escolha a categoria Comprimento, digite seus quilômetros, escolha quilômetros como unidade De e milhas como unidade Para, e o valor convertido aparece na hora.',
      },
      {
        question: 'Como converto quilogramas em libras?',
        answer:
          'Escolha a categoria Peso e Massa, digite os quilogramas, escolha quilogramas como unidade De e libras como unidade Para, e leia o resultado ou a tabela comparativa completa.',
      },
      {
        question: 'Qual é a diferença entre um litro e um galão americano?',
        answer:
          'Um litro é uma unidade métrica de volume, enquanto um galão americano é uma unidade líquida do sistema costumeiro dos EUA, igual a 3,785411784 litros exatos. O conversor usa esse fator exato.',
      },
      {
        question: 'O Conversor de Unidades pode converter Celsius em Fahrenheit e Kelvin?',
        answer:
          'Sim. Escolha a categoria Temperatura e escolha qualquer par entre Celsius, Fahrenheit e Kelvin, e a ferramenta converte entre eles usando as fórmulas padrão.',
      },
      {
        question: 'Por que 1 TB aparece como cerca de 931 GiB no Conversor de Unidades?',
        answer:
          'Um drive de 1 TB tem 1.000 GB em termos decimais, mas os sistemas operacionais costumam informar Gibibytes binários, e 1.000 GB equivalem a cerca de 931 GiB porque cada GiB é 1.024³ bytes.',
      },
      {
        question: 'O Conversor de Unidades funciona offline no meu navegador?',
        answer:
          'Sim. Todas as conversões são executadas localmente no seu navegador com constantes embutidas, então nenhuma conexão com a internet nem envio é necessário depois que a página carrega.',
      },
      {
        question: 'O Conversor de Unidades salva ou envia meus números?',
        answer:
          'Não. Cada conversão é executada localmente no seu navegador, e os valores que você digita nunca são enviados nem guardados em um servidor.',
      },
      {
        question: 'Posso converter velocidade entre km/h e mph?',
        answer:
          'Sim. Escolha a categoria Velocidade, digite o valor em km/h, escolha mph como unidade Para, e a ferramenta converte na hora.',
      },
      {
        question: 'Como converto metros quadrados em pés quadrados?',
        answer:
          'Escolha a categoria Área, digite os metros quadrados, escolha metros quadrados como unidade De e pés quadrados como unidade Para, e a área convertida aparece na hora.',
      },
      {
        question: 'Qual é a diferença entre KB decimal e KiB binário?',
        answer:
          'Um kilobyte decimal (KB) é 1.000 bytes, enquanto um kibibyte binário (KiB) é 1.024 bytes. O conversor mantém os dois sistemas separados para que os tamanhos de armazenamento nunca se misturem.',
      },
      {
        question: 'O Conversor de Unidades lida com números muito grandes ou muito pequenos?',
        answer:
          'Sim. Você pode digitar valores grandes, como milhares de quilômetros, ou valores minúsculos, como frações de milímetro, e o resultado é mostrado com precisão decimal completa.',
      },
      {
        question: 'Qual escala de temperatura devo usar para culinária ou clima?',
        answer:
          'A maioria das receitas e previsões do tempo fora dos EUA usa Celsius, enquanto receitas e clima dos EUA usam Fahrenheit. Kelvin é usado principalmente na ciência e no trabalho de laboratório.',
      },
      {
        question: 'Como converto mililitros em xícaras para uma receita?',
        answer:
          'Escolha a categoria Volume, digite os mililitros, escolha mililitros como unidade De e xícaras americanas como unidade Para, e a ferramenta dá o equivalente em xícaras para sua receita.',
      },
      {
        question: 'Por que meus valores convertidos mostram muitas casas decimais?',
        answer:
          'A ferramenta mostra a precisão completa para que o trabalho de engenharia e ciência continue preciso. Para o uso diário, basta arredondar o resultado para as casas decimais de que você precisa.',
      },
    ],
  },
  'currency-calculator': {
    slug: 'conversor-de-moedas',
    name: 'Calculadora de Moedas',
    shortDescription:
      'Converta moedas usando sua taxa de câmbio manual exata ou taxas de referência opcionais do BCE com cálculo de taxa de câmbio.',
    keywords: [
      'calculadora de moedas',
      'calculadora de taxa de câmbio',
      'calculadora de taxa de fx',
      'conversor de moedas manual',
      'conversor de usd para eur',
      'conversor de moedas com taxa',
      'calculadora de markup de taxa de câmbio',
      'calculadora de taxa de transação estrangeira',
      'calculadora de taxa de câmbio inversa',
    ],
    seo: {
      title: 'Calculadora de Moedas – Taxas, Tarifas e BCE | UtilityFlow',
      description:
        'Converta entre as moedas com sua taxa informada, some taxas de FX de banco ou cartão para ver o valor líquido, ou busque uma taxa de referência do BCE.',
      primaryKeyword: 'calculadora de moedas',
      secondaryKeywords: [
        'calculadora de taxa de câmbio com tarifa',
        'conversor de moedas manual',
        'calculadora de spread de fx',
        'conversor de taxa de referência do bce',
      ],
      longTailKeywords: [
        'converter moeda com taxa de câmbio personalizada de banco e tarifa',
        'calculadora de moedas sem taxas falsas fixas',
        'calcular valor líquido em moeda estrangeira após markup de cartão',
        'quanto vou receber após a taxa de conversão de moeda',
      ],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Converta entre as principais moedas globais com transparência usando a taxa de câmbio exata informada pelo seu banco, corretora ou fatura — com dedução opcional de taxa de FX, cálculo de taxa inversa e uma consulta sob demanda da taxa de referência do BCE.',
    instructions: [
      {
        title: 'Digite o valor e o par de moedas',
        description:
          'Digite o valor inicial e escolha suas moedas De e Para (use Trocar para inverter o par e a taxa).',
      },
      {
        title: 'Informe ou busque a taxa de câmbio',
        description:
          'Digite sua taxa de câmbio informada manualmente (nunca inventada offline), ou clique em Buscar Taxa de Referência do BCE para consultar a API externa Frankfurter.',
      },
      {
        title: 'Inclua a taxa de banco/cartão, se aplicável',
        description:
          'Digite qualquer spread percentual de FX ou taxa de transação estrangeira do cartão (por exemplo, 2,5%) para ver os proventos líquidos reais e uma tabela de referência.',
      },
      {
        title: 'Confira os valores bruto, de taxa e líquido',
        description:
          'Compare o total bruto convertido, a taxa deduzida e o valor líquido que você realmente recebe antes de enviar dinheiro.',
      },
      {
        title: 'Confira a taxa inversa e a tabela de referência',
        description:
          'Leia a taxa inversa e a tabela rápida de referência para conferir a conversão em vários valores.',
      },
      {
        title: 'Busque as taxas novamente antes de agir',
        description:
          'As taxas de câmbio mudam o tempo todo, então busque uma taxa de referência nova do BCE ou confirme a cotação do seu banco perto do momento da conversão.',
      },
    ],
    examples: [
      {
        title: 'Convertendo uma fatura com taxa de transferência de 1,5%',
        input: 'Valor: 1.000 USD · Taxa: 0,9200 EUR/USD · Taxa de FX: 1,5%',
        output: 'Bruto: 920,00 EUR · Taxa: 13,80 EUR · Líquido recebido: 906,20 EUR',
        explanation: 'Modela tanto a conversão de câmbio quanto a taxa percentual do provedor com transparência.',
      },
      {
        title: 'Convertendo sem nenhuma taxa de FX',
        input: 'Valor: 500 USD · Taxa: 0,9200 EUR/USD · Taxa de FX: 0%',
        output: 'Bruto: 460,00 EUR · Taxa: 0,00 EUR · Líquido recebido: 460,00 EUR',
        explanation: 'Sem taxa, o valor líquido é igual ao valor bruto convertido.',
      },
    ],
    benefits: [
      'Nunca inventa taxas de câmbio falsas ou desatualizadas fixas offline',
      'Modela porcentagens reais de taxa de transação estrangeira de banco ou cartão de crédito',
      'Calcula a taxa de conversão inversa (1 destino = ? base) automaticamente',
      'Suporta consultas opcionais ao vivo de referência do BCE via API Frankfurter, com retorno gracioso offline',
    ],
    useCases: [
      'Verificar quanto custa uma transferência internacional após a taxa de FX do banco',
      'Calcular totais de faturas com uma taxa de câmbio contratual travada',
      'Comparar taxas de transação estrangeira de 3% do cartão de crédito com cartões sem taxa',
      'Avaliar tabelas rápidas de referência de conversão para vários valores',
    ],
    faqs: [
      {
        question: 'Por que a Taxa de Câmbio começa em 1,0000 em vez de taxas ao vivo pré-preenchidas?',
        answer:
          'As taxas de câmbio flutuam continuamente e as cotações ao vivo de mercado exigem uma fonte de dados externa. Em vez de inventar ou armazenar taxas imprecisas, esta ferramenta começa limpa no Modo Manual e permite clicar em "Buscar Taxa de Referência do BCE" sempre que você quiser uma consulta externa da taxa do BCE.',
      },
      {
        question: 'De onde vêm as taxas de referência buscadas?',
        answer:
          'Quando você clica em "Buscar Taxa de Referência do BCE", seu navegador solicita a taxa de referência mais recente do Banco Central Europeu publicada por api.frankfurter.app. As taxas de referência são referências de mercado médio e diferem um pouco das cotações de varejo dos bancos.',
      },
      {
        question: 'Isto funciona se eu estiver offline ou se a API externa estiver bloqueada?',
        answer:
          'Sim. Você sempre pode digitar qualquer taxa de câmbio manualmente no campo Taxa de Câmbio, e todos os cálculos de taxa, inverso e tabela são executados 100% localmente no seu navegador.',
      },
      {
        question: 'Como a Calculadora de Moedas converte meu dinheiro?',
        answer:
          'Ela multiplica seu valor pela taxa de câmbio que você digita ou busca, depois subtrai qualquer porcentagem de taxa de FX que você somar, e mostra o total bruto, a taxa e o valor líquido recebido.',
      },
      {
        question: 'Qual taxa de câmbio devo digitar na Calculadora de Moedas?',
        answer:
          'Digite a taxa exata informada pelo seu banco, corretora, provedor de cartão ou fatura. Se você não tiver uma cotação, busque a taxa de referência do BCE como referência e espere que a taxa do seu provedor seja um pouco diferente.',
      },
      {
        question: 'Qual é a diferença entre uma taxa de referência do BCE e a taxa do meu banco?',
        answer:
          'Uma taxa de referência do BCE é uma referência de mercado médio publicada pelo Banco Central Europeu. Uma taxa de banco soma um spread ou markup sobre essa referência, então a taxa do banco costuma ser menos favorável.',
      },
      {
        question: 'Como a Calculadora de Moedas calcula as taxas de FX?',
        answer:
          'Ela aplica a porcentagem de taxa que você digita ao valor bruto convertido e a subtrai para mostrar os proventos líquidos. Por exemplo, uma taxa de 1,5% sobre 920 EUR remove 13,80 EUR.',
      },
      {
        question: 'O que é uma taxa de câmbio inversa?',
        answer:
          'É a taxa na direção oposta, mostrando quanto da moeda base uma unidade da moeda de destino compra. A ferramenta a calcula automaticamente a partir da taxa que você digita.',
      },
      {
        question: 'A Calculadora de Moedas dá aconselhamento financeiro?',
        answer:
          'Não. Ela só executa a conta de conversão e taxa a partir da taxa e da taxa que você fornece. Ela não recomenda quando converter, qual provedor usar ou se uma taxa é boa.',
      },
      {
        question: 'A Calculadora de Moedas pode mostrar quanto vou receber após as taxas?',
        answer:
          'Sim. O valor líquido recebido é o valor bruto convertido menos a taxa de FX que você digitou, que é o valor que você deve esperar antes de qualquer cobrança fixa separada de transferência.',
      },
      {
        question: 'Por que a taxa do meu banco é pior que a taxa que vejo online?',
        answer:
          'As taxas mostradas online costumam ser referências de mercado médio sem markup. Bancos e provedores de cartão somam um spread para cobrir custos e lucro, então a taxa informada deles é menos favorável que a referência.',
      },
      {
        question: 'A Calculadora de Moedas guarda ou envia meus valores?',
        answer:
          'Não. Seus valores, taxas e configurações de taxa são usados só para o cálculo no seu navegador, exceto pela busca opcional da taxa do BCE, que só solicita uma taxa de referência pública.',
      },
      {
        question: 'A Calculadora de Moedas é gratuita?',
        answer:
          'Sim, é totalmente gratuita para usar no seu navegador, sem conta, sem cadastro e sem limite de quantas conversões você executa.',
      },
      {
        question: 'Com que frequência as taxas de referência do BCE mudam?',
        answer:
          'As taxas de referência do BCE são publicadas uma vez por dia útil, então a taxa buscada é uma referência diária, e não um preço de mercado ao vivo que muda a cada instante.',
      },
      {
        question: 'Posso converter entre quaisquer duas moedas?',
        answer:
          'Você pode converter entre as principais moedas globais listadas pela ferramenta digitando qualquer taxa manual. A busca do BCE cobre os pares de moedas publicados nos dados de referência do BCE.',
      },
      {
        question: 'O que acontece se a busca da taxa do BCE falhar?',
        answer:
          'A ferramenta volta graciosamente ao modo manual. Basta digitar sua própria taxa de câmbio no campo de taxa, e toda a conta de conversão, taxa e tabela continua funcionando localmente.',
      },
      {
        question: 'Devo usar a taxa do BCE ou a taxa do meu cartão para uma compra no exterior?',
        answer:
          'Use a taxa do seu cartão para o custo real, porque é isso que você realmente será cobrado. Use a taxa do BCE só como referência para ver quanto de markup seu cartão soma.',
      },
      {
        question: 'Como comparo duas taxas de FX diferentes?',
        answer:
          'Execute o mesmo valor e a mesma taxa duas vezes com cada porcentagem de taxa e compare os valores líquidos recebidos. A opção com o maior valor líquido custa menos.',
      },
      {
        question: 'A Calculadora de Moedas inclui cobranças ocultas de transferência?',
        answer:
          'Não. Ela cobre a conversão de câmbio e a taxa percentual de FX que você digita. Taxas fixas de transferência ou cobranças fixas de envio são separadas, então some-as você mesmo ao comparar provedores.',
      },
      {
        question: 'Posso usar a Calculadora de Moedas para uma fatura em outra moeda?',
        answer:
          'Sim. Digite o valor da fatura, a taxa de câmbio contratual ou travada e qualquer taxa, e a ferramenta mostra os totais bruto, de taxa e líquido na sua própria moeda.',
      },
    ],
    apiNotice:
      'Precisa de uma API externa para taxas de câmbio ao vivo e nunca usa taxas offline inventadas. Usa sua taxa de câmbio digitada manualmente por padrão (1,0000), ou clique em "Buscar Taxa de Referência do BCE" para solicitar taxas de api.frankfurter.app.',
  },
};
