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
    instructions: [
      {
        title: 'Cole o JSON bruto',
        description:
          'Insira qualquer objeto ou matriz JSON em Entrada de JSON Bruto ou clique em Carregar exemplo para inspecionar um payload de exemplo.',
      },
      {
        title: 'Selecione o modo de formatação',
        description:
          'Alterne entre 2 Espaços, 4 Espaços, Tabulação ou Minificar e, se quiser, ative Ordenar chaves de A a Z.',
      },
      {
        title: 'Corrija erros de sintaxe com dicas de linha e coluna',
        description:
          'Se o validador relatar um erro, leia a linha e a coluna exatas mostradas, corrija a vírgula, aspa ou colchete problemático na entrada, e o banner de status se atualiza na hora.',
      },
      {
        title: 'Revise a saída formatada e as estatísticas',
        description:
          'Confirme o banner de status JSON Válido mostrando o total de chaves, a profundidade de aninhamento e a contagem de bytes, depois role pela saída formatada para conferir se as estruturas aninhadas ficaram certas.',
      },
      {
        title: 'Copie ou baixe o resultado',
        description:
          'Clique em Copiar para colocar o JSON formatado na área de transferência ou em Baixar para salvar como arquivo .json para seu projeto.',
      },
      {
        title: 'Dica: compare tamanhos e limpe diffs',
        description:
          'Cole o mesmo payload de novo depois de minificar para comparar os tamanhos em bytes, ou ative Ordenar chaves de A a Z antes de um diff no git para que só mudanças reais apareçam.',
      },
    ],
    examples: [
      {
        title: 'Formatando uma resposta de API minificada',
        input: '{"service":"utilityflow","limits":{"rate":120}}',
        output: '{\n  "service": "utilityflow",\n  "limits": {\n    "rate": 120\n  }\n}',
        explanation:
          'Expande payloads de API compactos em uma linha para JSON indentado e legível.',
      },
      {
        title: 'Validando um payload com erro',
        input: '{\n  "nome": "Ana",\n  "idade": 30,\n}',
        output: 'Erro de sintaxe na linha 4, coluna 1: vírgula à direita não permitida',
        explanation: 'O validador aponta a linha e a coluna exatas do erro para você corrigir rápido.',
      },
    ],
    benefits: [
      'Relata posições de erros de sintaxe com contexto de linha e coluna',
      'Ordena recursivamente as chaves de objetos aninhados em ordem alfabética para diffs limpos',
      'Calcula o total de chaves, a profundidade máxima de aninhamento e o tamanho em bytes da saída',
      'Mantém respostas de API privadas e tokens estritamente na memória do navegador',
    ],
    useCases: [
      'Depurar payloads de APIs REST e GraphQL durante o desenvolvimento',
      'Normalizar arquivos package.json ou de configuração antes de um diff no git',
      'Minificar fixtures JSON e conjuntos de dados estáticos',
      'Validar corpos de webhook antes de escrever parsers',
    ],
    faqs: [
      {
        question: 'Ordenar chaves altera a ordem dos elementos da matriz?',
        answer:
          'Não. Ordenar chaves de A a Z só reordena as chaves dentro de objetos JSON, preservando a sequência exata dos elementos das matrizes.',
      },
      {
        question: 'Por que JSON com vírgula à direita mostra erro de sintaxe?',
        answer:
          'O JSON estrito da RFC 8259 não permite vírgulas à direita nem chaves com aspas simples. O validador marca a linha e a coluna exatas para você corrigir antes de implantar.',
      },
      {
        question: 'Meu payload JSON é registrado em algum lugar?',
        answer:
          'Nunca. A análise e a formatação rodam totalmente via JavaScript na aba do seu navegador.',
      },
      {
        question: 'O Formatador de JSON é gratuito?',
        answer:
          'Sim, o Formatador de JSON é totalmente gratuito, sem cadastro, sem limites de uso e sem marca d\'água na saída.',
      },
      {
        question: 'Qual é a diferença entre formatar e minificar JSON?',
        answer:
          'Formatar adiciona indentação e quebras de linha para o JSON ficar fácil de ler, enquanto minificar remove todo o espaço em branco desnecessário para o payload ficar o menor possível para transporte.',
      },
      {
        question: 'O Formatador de JSON lida com arquivos JSON grandes?',
        answer:
          'Sim. Como todo o processamento acontece localmente no seu navegador, não há limite de envio ao servidor, embora payloads muito grandes dependam da memória do seu navegador.',
      },
      {
        question: 'Quais opções de indentação o Formatador de JSON oferece?',
        answer:
          'Você pode formatar com 2 espaços, 4 espaços ou um caractere de tabulação, para a saída combinar com o estilo do seu código.',
      },
      {
        question: 'O Formatador de JSON suporta matrizes JSON no nível superior?',
        answer:
          'Sim. Uma matriz no nível superior é JSON válido, então você pode colar e formatar matrizes como objetos.',
      },
      {
        question: 'Como corrijo um erro "Unexpected token" no meu JSON?',
        answer:
          'Veja a linha e a coluna relatadas pelo validador. As causas mais comuns são uma vírgula faltando, um colchete sem fechar ou uma aspa simples onde uma aspa dupla é exigida.',
      },
      {
        question: 'Posso formatar JSON com comentários ou vírgulas à direita?',
        answer:
          'Não. Comentários e vírgulas à direita não fazem parte do JSON estrito, então remova-os primeiro e o formatador vai aceitar a entrada limpa.',
      },
      {
        question: 'O que significa a estatística de profundidade de aninhamento no Formatador de JSON?',
        answer:
          'A profundidade de aninhamento conta quantos níveis abaixo o valor mais profundamente aninhado fica dentro de objetos e matrizes, o que ajuda a julgar a complexidade de um payload.',
      },
      {
        question: 'O Formatador de JSON preserva a ordem das chaves do objeto?',
        answer:
          'Sim, a menos que você ative Ordenar chaves de A a Z. Por padrão, o formatador mantém a ordem original das suas chaves exatamente como colada.',
      },
      {
        question: 'Posso ordenar chaves em objetos JSON aninhados também?',
        answer:
          'Sim. A ordenação se aplica recursivamente, então as chaves dentro de cada objeto aninhado são reordenadas alfabeticamente enquanto a ordem das matrizes fica intocada.',
      },
      {
        question: 'Que formato de arquivo o download do Formatador de JSON produz?',
        answer:
          'O download salva seu resultado formatado ou minificado como um arquivo de texto .json padrão que você pode abrir em qualquer editor.',
      },
      {
        question: 'O Formatador de JSON funciona offline?',
        answer:
          'Sim. Depois que a página carrega, a formatação e a validação rodam todo no seu navegador, sem requisições de rede.',
      },
      {
        question: 'Por que meu objeto JavaScript válido é rejeitado como JSON?',
        answer:
          'O JSON é mais rigoroso que o JavaScript: as chaves precisam de aspas duplas, os valores não podem ser undefined nem funções, e vírgulas à direita não são permitidas.',
      },
      {
        question: 'O Formatador de JSON pode validar JSON de uma resposta de API?',
        answer:
          'Sim. Cole o corpo bruto da resposta na entrada e o validador vai confirmar se é JSON válido e apontar qualquer erro de sintaxe.',
      },
      {
        question: 'Qual é o tamanho máximo de JSON que posso colar no Formatador de JSON?',
        answer:
          'Não há um limite fixo de tamanho porque nada é enviado a um servidor. Os limites práticos vêm só da memória do seu navegador e do tamanho de caixa de texto que ele lida bem.',
      },
      {
        question: 'Minificar JSON muda seu significado?',
        answer:
          'Não. Minificar só remove espaços em branco, então os dados, as chaves e os valores ficam exatamente iguais enquanto o arquivo fica menor.',
      },
      {
        question: 'Como copio JSON formatado sem espaços em branco extras?',
        answer:
          'Mude para o modo Minificar primeiro e depois clique em Copiar. A área de transferência vai conter o JSON compacto em uma linha, sem espaços nem quebras de linha extras.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Codificar ou Decodificar',
        description:
          'Selecione Codificar para Base64 ou Decodificar Base64 no topo da área de trabalho.',
      },
      {
        title: 'Cole seu texto ou string Base64',
        description:
          'Digite o texto UTF-8 que você quer codificar ou a string Base64 que quer decodificar na caixa de entrada.',
      },
      {
        title: 'Configure as opções de Base64',
        description:
          'No modo Codificar, se quiser, ative a saída segura para URL (- e _) ou omita os caracteres = de preenchimento no fim.',
      },
      {
        title: 'Confira a saída e a validação',
        description:
          'Revise o resultado convertido na hora. Se uma decodificação falhar, verifique se falta preenchimento ou se há caracteres fora do alfabeto Base64.',
      },
      {
        title: 'Copie ou troque',
        description:
          'Copie o resultado para sua área de transferência ou clique em Trocar para inverter a direção usando sua saída atual.',
      },
      {
        title: 'Dica: lidando com tokens seguros para URL',
        description:
          'Ao colar tokens de uma URL, use o modo seguro para URL para que - e _ sejam tratados corretamente. Lembre-se de que Base64 é codificação, não criptografia, então nunca o trate como armazenamento seguro.',
      },
    ],
    examples: [
      {
        title: 'Codificação de string UTF-8',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation:
          'Usa a serialização de bytes UTF-8 do TextEncoder antes da conversão para Base64.',
      },
      {
        title: 'Codificando credenciais de Basic Auth',
        input: 'usuario:senha123',
        output: 'dXN1YXJpbzpzZW5oYTEyMw==',
        explanation: 'Combina usuário e senha no formato usuario:senha e codifica para o cabeçalho Authorization.',
      },
    ],
    benefits: [
      'Codificação e decodificação seguras para UTF-8 evitam falhas de Unicode do btoa/atob legado',
      'Suporta o alfabeto seguro para URL da RFC 4648 (- e _) e decodificação sem preenchimento',
      'A troca com um clique move a saída para a entrada e inverte o modo',
      'Execução local segura para chaves de API e cabeçalhos Basic Auth',
    ],
    useCases: [
      'Codificar credenciais de Autenticação Básica HTTP localmente',
      'Inspecionar payloads JSON codificados em Base64 ou URIs de dados',
      'Preparar tokens Base64 seguros para URL para parâmetros de consulta',
      'Decodificar trechos de corpo de e-mail ou webhook em Base64',
    ],
    faqs: [
      {
        question: 'Por que o btoa() padrão falha com caracteres Unicode?',
        answer:
          'O btoa() nativo só aceita pontos de código Latin-1 de um único byte. Esta ferramenta converte o texto em bytes UTF-8 via TextEncoder primeiro, para que todas as escritas internacionais e emojis codifiquem sem problema.',
      },
      {
        question: 'O decodificador lida com Base64 seguro para URL sem preenchimento "="?',
        answer:
          'Sim. O decodificador normaliza automaticamente "-" e "_" de volta para "+" e "/" e restaura o preenchimento "=" que falta antes de decodificar.',
      },
      {
        question: 'Base64 é criptografia?',
        answer:
          'Não. Base64 é um formato de codificação para representar dados binários ou de texto em ASCII, não criptografia.',
      },
      {
        question: 'O Codificador Base64 é gratuito?',
        answer:
          'Sim, o Codificador Base64 é totalmente gratuito, sem cadastro e sem limites de quantas strings você converte.',
      },
      {
        question: 'Quais caracteres são permitidos em uma string Base64?',
        answer:
          'O Base64 padrão usa A–Z, a–z, 0–9, mais + e /, com = usado para preenchimento. A variante segura para URL troca + e / por - e _.',
      },
      {
        question: 'Por que minha saída Base64 é maior que minha entrada?',
        answer:
          'O Base64 representa cada 3 bytes de entrada como 4 caracteres ASCII, então a saída codificada fica cerca de um terço maior que o texto original.',
      },
      {
        question: 'Posso codificar emojis e textos em outros idiomas para Base64?',
        answer:
          'Sim. A ferramenta codifica o texto como bytes UTF-8 primeiro, então emojis, letras acentuadas e escritas não latinas codificam e decodificam corretamente.',
      },
      {
        question: 'O que é Base64 seguro para URL e quando devo usá-lo?',
        answer:
          'O Base64 seguro para URL troca + e / por - e _ para que a string codificada possa ficar dentro de uma URL ou nome de arquivo sem ser codificada por porcentagem. Use-o para tokens passados em parâmetros de consulta.',
      },
      {
        question: 'Como decodifico uma string Base64 sem preenchimento?',
        answer:
          'Cole direto. O decodificador detecta o preenchimento = que falta e o restaura automaticamente antes de decodificar.',
      },
      {
        question: 'O Codificador Base64 lida com arquivos binários?',
        answer:
          'Não, esta ferramenta codifica só texto. Para codificar um arquivo, você precisaria ler os bytes dele primeiro, o que esta ferramenta baseada em texto não faz.',
      },
      {
        question: 'Qual é a diferença entre Base64 e Base64URL?',
        answer:
          'Base64URL é a variante segura para URL do Base64: ela troca + por - e / por _, e geralmente remove o preenchimento =, para o resultado ser seguro em URLs e nomes de arquivos.',
      },
      {
        question: 'Por que meu texto Base64 decodificado mostra caracteres estranhos?',
        answer:
          'O texto original provavelmente foi codificado a partir de uma codificação de bytes diferente de UTF-8, ou a string Base64 está corrompida. Tente codificar a origem como UTF-8 de novo e compare.',
      },
      {
        question: 'Posso codificar uma senha ou segredo com Base64?',
        answer:
          'Você pode, mas não deve confiar nisso para segurança. O Base64 é reversível com facilidade, então qualquer pessoa que veja a string codificada pode decodificá-la na hora.',
      },
      {
        question: 'Como codifico texto para um cabeçalho Basic Auth?',
        answer:
          'Combine o nome de usuário e a senha como usuario:senha, codifique essa string em Base64 e use-a como Authorization: Basic <valor codificado> na sua requisição.',
      },
      {
        question: 'O Codificador Base64 funciona offline?',
        answer:
          'Sim. Depois que a página carrega, a codificação e a decodificação rodam todo no seu navegador, sem requisições de rede.',
      },
      {
        question: 'O que acontece se eu colar uma string Base64 inválida no decodificador?',
        answer:
          'O decodificador relata um erro em vez de adivinhar. Verifique se há caracteres fora do alfabeto Base64, preenchimento faltando ou espaços em branco e quebras de linha soltos.',
      },
      {
        question: 'Posso decodificar uma URI de dados Base64 com esta ferramenta?',
        answer:
          'Sim, se você colar só a parte Base64 depois da vírgula. Remova o prefixo data:...;base64, primeiro, já que ele não faz parte dos dados codificados.',
      },
      {
        question: 'Por que algumas strings Base64 terminam com sinais "="?',
        answer:
          'Os sinais = são preenchimento adicionado quando o tamanho da entrada não é múltiplo de três bytes. Eles dizem ao decodificador exatamente quantos bytes o grupo final representa.',
      },
      {
        question: 'Meu texto é enviado a um servidor quando eu o codifico?',
        answer:
          'Não. A codificação e a decodificação rodam localmente no seu navegador, então strings sensíveis como chaves de API nunca saem do seu dispositivo.',
      },
      {
        question: 'Como converto Base64 de volta para o texto original?',
        answer:
          'Mude para o modo Decodificar, cole a string Base64, e a ferramenta devolve o texto UTF-8 original, que você pode copiar.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Codificar ou Decodificar',
        description:
          'Alterne entre Codificar e Decodificar, depois selecione encodeURIComponent (para valores de um único parâmetro) ou encodeURI (para preservar os delimitadores ://?&).',
      },
      {
        title: 'Cole uma URL ou string de parâmetro',
        description:
          'Digite qualquer URL ou trecho codificado por porcentagem em String de Entrada ou URL.',
      },
      {
        title: 'Revise o resultado codificado ou decodificado',
        description:
          'Confira a caixa de saída para confirmar se caracteres especiais como espaços, & e = foram codificados ou decodificados exatamente como esperado.',
      },
      {
        title: 'Inspecione os parâmetros analisados',
        description:
          'Quando uma URL completa válida é detectada, revise a tabela Detalhamento da URL Analisada abaixo para ver os pares chave-valor de consulta decodificados.',
      },
      {
        title: 'Copie o resultado',
        description:
          'Clique em Copiar para usar a URL codificada no seu código, link ou requisição de API sem redigitar.',
      },
      {
        title: 'Solução de problemas: sequências % malformadas',
        description:
          'Se você vir um erro sobre sequência % malformada, procure um % sozinho não seguido de dois dígitos hexadecimais, como %2, e corrija antes de decodificar de novo.',
      },
    ],
    examples: [
      {
        title: 'Codificando um valor de consulta',
        input: 'formatador json & validador',
        output: 'formatador%20json%20%26%20validador',
        explanation:
          'Usar encodeURIComponent escapa "&" para ele não dividir sua string de consulta.',
      },
      {
        title: 'Decodificando uma URL de busca',
        input: 'https://exemplo.com/busca?q=caf%C3%A9%20da%20manh%C3%A3',
        output: 'https://exemplo.com/busca?q=café da manhã',
        explanation: 'Decodifica sequências %XX de volta para caracteres legíveis, incluindo acentos.',
      },
    ],
    benefits: [
      'Esclarece o comportamento de encodeURIComponent vs encodeURI lado a lado',
      'Analisa automaticamente URLs válidas em linhas de protocolo, host, caminho, hash e consulta',
      'Lida com a codificação de espaço "+" sem problema ao decodificar strings de consulta de formulário',
      'Relata sequências % malformadas com clareza',
    ],
    useCases: [
      'Depurar URIs de redirecionamento OAuth e parâmetros de callback',
      'Escapar consultas de busca ou strings JSON passadas em parâmetros de consulta',
      'Auditar links de campanha UTM com vários parâmetros de rastreamento',
      'Decodificar URLs de registros de acesso de servidor para revisão humana',
    ],
    faqs: [
      {
        question: 'Quando devo usar encodeURIComponent em vez de encodeURI?',
        answer:
          'Use encodeURIComponent ao codificar um único valor de parâmetro de consulta (para que caracteres como & e = sejam escapados). Use encodeURI ao codificar uma URL inteira e quiser manter https://, /, ? e & intactos.',
      },
      {
        question: 'Por que uma URL decodificada transformou "+" em espaço?',
        answer:
          'Em strings de consulta application/x-www-form-urlencoded, "+" representa um espaço. A decodificação de componente normaliza "+" para espaços automaticamente.',
      },
      {
        question: 'O analisador de URL valida se um domínio está acessível?',
        answer:
          'Não. A análise usa a API de URL do navegador localmente, sem enviar nenhuma requisição de rede ao host de destino.',
      },
      {
        question: 'O Codificador de URL é gratuito?',
        answer:
          'Sim, o Codificador de URL é totalmente gratuito, sem cadastro e sem limites de quantas URLs você codifica ou decodifica.',
      },
      {
        question: 'Quais caracteres a codificação de URL muda?',
        answer:
          'A codificação de URL converte caracteres reservados e inseguros, como espaços, &, =, ?, # e letras não ASCII, em % seguido de dois dígitos hexadecimais.',
      },
      {
        question: 'Qual é a diferença entre %20 e + para espaços em uma URL?',
        answer:
          'Ambos podem representar um espaço em uma string de consulta, mas %20 é a codificação por porcentagem padrão, enquanto + só significa espaço em strings de consulta codificadas de formulário, não em caminhos.',
      },
      {
        question: 'O Codificador de URL pode codificar uma URL completa mantendo https:// intacto?',
        answer:
          'Sim. Escolha o modo encodeURI e o esquema, as barras e os delimitadores ficam intocados enquanto só os caracteres inseguros são codificados.',
      },
      {
        question: 'Como codifico um e comercial em um valor de consulta?',
        answer:
          'Use o modo encodeURIComponent só no valor. Ele transforma & em %26 para o e comercial ser tratado como dado em vez de dividir sua string de consulta.',
      },
      {
        question: 'Por que minha URL decodificada ainda contém sinais %?',
        answer:
          'Um % seguido de dois dígitos hexadecimais decodifica uma vez, então um valor duplamente codificado como %2520 vira %20 depois de uma decodificação. Decodifique de novo se precisar da forma totalmente decodificada.',
      },
      {
        question: 'Posso decodificar uma URL com vários parâmetros de consulta?',
        answer:
          'Sim. O decodificador lida com a string de consulta inteira, e a tabela de detalhamento analisada lista cada par chave-valor separadamente para inspeção fácil.',
      },
      {
        question: 'O Codificador de URL lida com caracteres Unicode?',
        answer:
          'Sim. Caracteres não ASCII são primeiro convertidos em bytes UTF-8 e depois codificados por porcentagem, então letras acentuadas e outras escritas codificam corretamente.',
      },
      {
        question: 'O que é codificação por porcentagem em uma URL?',
        answer:
          'A codificação por porcentagem troca um caractere por um sinal % seguido de seu valor hexadecimal de dois dígitos, o que mantém as URLs válidas quando contêm espaços ou símbolos especiais.',
      },
      {
        question: 'Como codifico uma URL para usar em um e-mail ou documento?',
        answer:
          'Cole a URL, escolha o modo encodeURI e copie o resultado. O link codificado continua clicável e não vai quebrar nas quebras de linha em texto simples.',
      },
      {
        question: 'O Decodificador de URL valida a URL?',
        answer:
          'Ele verifica se a entrada é uma URL bem formada e se cada sequência % é válida, mas não verifica se o domínio existe ou se a página carrega.',
      },
      {
        question: 'Posso codificar espaços como %20 em vez de +?',
        answer:
          'Sim. O codificador sempre usa %20 para espaços. A forma + só aparece ao decodificar entrada codificada de formulário, onde + já significa espaço.',
      },
      {
        question: 'O que acontece se eu codificar uma URL já codificada?',
        answer:
          'Os próprios sinais % são codificados para %25, produzindo codificação dupla como %2520. Decodifique uma vez para voltar à forma codificada uma vez.',
      },
      {
        question: 'Minha URL é enviada a um servidor quando eu a codifico?',
        answer:
          'Não. A codificação, a decodificação e a análise rodam localmente no seu navegador, então links e tokens privados nunca saem do seu dispositivo.',
      },
      {
        question: 'Como codifico um fragmento ou hash de URL?',
        answer:
          'Codifique só o valor do fragmento com encodeURIComponent e depois acrescente-o depois do # você mesmo, para o delimitador de hash não ser codificado.',
      },
      {
        question: 'Por que algumas URLs codificadas parecem muito mais longas?',
        answer:
          'Cada caractere especial ou não ASCII vira três caracteres (% mais dois dígitos hexadecimais), então URLs com muitos espaços ou caracteres Unicode crescem bastante.',
      },
      {
        question: 'O Codificador de URL lida com URLs muito longas?',
        answer:
          'Sim. O processamento roda localmente, sem limite de envio ao servidor, então URLs longas codificam e decodificam no seu navegador enquanto seu navegador conseguir segurar o texto.',
      },
    ],
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
      secondaryKeywords: ['gerador de guid online', 'gerador de uuid v4', 'gerador de uuid v7', 'gerador de uuid em massa'],
      longTailKeywords: ['gerar uuid v4 e v7 em massa online', 'gerador de uuid v7 ordenado por tempo rfc 9562', 'gerador de uuid sem hífen em maiúsculas', 'gerar 100 uuids de uma vez online grátis'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Crie lotes únicos ou em massa de identificadores UUID v4 aleatórios e UUID v7 ordenados por timestamp da RFC 9562 direto via APIs Web Crypto, com opções de formatação.',
    instructions: [
      {
        title: 'Escolha UUID v4 ou v7',
        description:
          'Escolha v4 para identificadores aleatórios padrão ou v7 para chaves primárias de banco de dados ordenáveis com prefixo de timestamp.',
      },
      {
        title: 'Defina a quantidade e a formatação',
        description:
          'Digite entre 1 e 100 IDs e ative Maiúsculas, Incluir hifens ou Envolver em {chaves}.',
      },
      {
        title: 'Gere um lote novo',
        description:
          'Clique em Gerar UUIDs para criar um lote novo. Cada clique produz um conjunto totalmente novo de identificadores aleatórios.',
      },
      {
        title: 'Revise os IDs gerados',
        description:
          'Olhe a lista para confirmar se a versão, a caixa e o formato de hífen correspondem ao que seu banco de dados ou código espera.',
      },
      {
        title: 'Copie ou baixe a lista',
        description:
          'Clique em Copiar tudo para colocar todos os IDs na área de transferência, ou baixe o lote como arquivo .txt para popular registros ou fixtures de teste.',
      },
      {
        title: 'Dica: escolhendo v7 para bancos de dados',
        description:
          'Se você armazena IDs como chaves primárias, prefira v7 para que as linhas novas ordenem cronologicamente e mantenham seu índice eficiente. Use v4 quando a ordem não importar.',
      },
    ],
    examples: [
      {
        title: 'UUID v4 padrão em minúsculas',
        input: 'Versão: v4 · Hifens: Ligado · Maiúsculas: Desligado',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation:
          'Identificador RFC 4122 de 128 bits, adequado para chaves primárias distribuídas.',
      },
      {
        title: 'UUID v7 ordenado por tempo',
        input: 'Versão: v7 · Hifens: Ligado · Maiúsculas: Desligado',
        output: '0198f3a1-2b3c-7d4e-8f9a-0b1c2d3e4f5a',
        explanation: 'O prefixo de timestamp em milissegundos mantém os IDs ordenáveis por criação.',
      },
    ],
    benefits: [
      'Usa crypto.randomUUID / crypto.getRandomValues do navegador (CSPRNG)',
      'Suporta o UUID v7 moderno da RFC 9562 com prefixo de timestamp de 48 bits em milissegundos',
      'Gera em lote até 100 IDs únicos de uma vez',
      'Formata maiúsculas, hex compacto sem hífen ou strings GUID entre chaves',
    ],
    useCases: [
      'Popular fixtures de banco de dados e registros de teste de migração',
      'Gerar IDs de correlação, chaves de API e IDs de teste de webhook',
      'Comparar UUID v7 amigável a índice B-tree com UUID v4 aleatório',
      'Criar constantes GUID entre chaves para Windows/C#',
    ],
    faqs: [
      {
        question: 'Qual é a vantagem do UUID v7 sobre o UUID v4?',
        answer:
          'O UUID v7 codifica um timestamp Unix em milissegundos em seus bits mais significativos, tornando os IDs ordenáveis cronologicamente e reduzindo a fragmentação de índice B-tree em bancos de dados SQL.',
      },
      {
        question: 'Esses UUIDs são gerados com Math.random()?',
        answer:
          'Não. Cada UUID usa aleatoriedade criptograficamente forte da API Web Crypto.',
      },
      {
        question: 'Como obtenho um ID hexadecimal de 32 caracteres sem traços?',
        answer:
          'Desmarque "Incluir hifens" para remover os traços na hora em todo o lote gerado.',
      },
      {
        question: 'O Gerador de UUID é gratuito?',
        answer:
          'Sim, o Gerador de UUID é totalmente gratuito, sem cadastro, e você pode gerar quantos lotes precisar.',
      },
      {
        question: 'O que é um UUID e para que ele serve?',
        answer:
          'Um UUID é um identificador único de 128 bits, geralmente escrito como 32 dígitos hexadecimais em cinco grupos. Ele é usado para chaves primárias de banco de dados, IDs de correlação, tokens de sessão e nomes de arquivos.',
      },
      {
        question: 'Dois UUIDs gerados podem ser iguais?',
        answer:
          'Na prática, não. Com 122 bits aleatórios em um UUID v4, uma colisão é tão improvável que você pode tratar os IDs gerados como únicos.',
      },
      {
        question: 'Qual é a diferença entre UUID v4 e UUID v7?',
        answer:
          'O UUID v4 é totalmente aleatório, enquanto o UUID v7 começa com um timestamp em milissegundos, então IDs mais novos ordenam depois dos mais antigos. Ambos são identificadores de 128 bits.',
      },
      {
        question: 'Quantos UUIDs posso gerar de uma vez?',
        answer:
          'Você pode gerar entre 1 e 100 UUIDs em um único lote. Clique em Gerar de novo para outro lote novo do mesmo tamanho.',
      },
      {
        question: 'O que "ordenado por tempo" significa para o UUID v7?',
        answer:
          'Ordenado por tempo significa que a primeira parte do UUID é um timestamp Unix em milissegundos, então ordenar os IDs alfabeticamente também os ordena por tempo de criação.',
      },
      {
        question: 'Posso gerar UUIDs sem hifens?',
        answer:
          'Sim. Desligue Incluir hifens e cada UUID do lote aparece como uma string hexadecimal compacta de 32 caracteres.',
      },
      {
        question: 'O que são GUIDs entre chaves e quando preciso deles?',
        answer:
          'GUIDs entre chaves envolvem o UUID em chaves, como {550e8400-...}. Algumas ferramentas Microsoft e códigos C# esperam esse formato para constantes GUID.',
      },
      {
        question: 'Os UUIDs gerados aqui são seguros para uso em produção?',
        answer:
          'Sim. Eles usam a API Web Crypto do navegador, que fornece aleatoriedade criptograficamente forte, adequada para identificadores de produção.',
      },
      {
        question: 'Posso gerar UUIDs em maiúsculas?',
        answer:
          'Sim. Ative a opção Maiúsculas e o lote inteiro aparece com as letras hexadecimais A–F em maiúsculas.',
      },
      {
        question: 'Preciso de conexão com a internet para gerar UUIDs?',
        answer:
          'Só para carregar a página. Depois de carregada, a geração roda todo no seu navegador, sem requisições de rede.',
      },
      {
        question: 'Minha lista de UUIDs gerados é armazenada ou enviada para algum lugar?',
        answer:
          'Não. A geração acontece localmente no seu navegador, então seus IDs nunca são enviados a um servidor nem armazenados em lugar nenhum.',
      },
      {
        question: 'Posso usar um UUID como chave de API?',
        answer:
          'Você pode usá-lo como um token opaco, mas um UUID é um identificador, não um segredo feito para autenticação. Para chaves de API reais, use um sistema adequado de segredos com rotação.',
      },
      {
        question: 'Qual é a diferença entre UUID e GUID?',
        answer:
          'Eles são o mesmo formato de 128 bits. GUID é o nome que a Microsoft usa, enquanto UUID é o nome do padrão aberto usado em todos os outros lugares.',
      },
      {
        question: 'Por que eu escolheria UUID v7 para uma chave primária de banco de dados?',
        answer:
          'Como os IDs v7 ordenam por tempo de criação, as linhas novas ficam perto umas das outras em um índice B-tree, o que mantém as inserções rápidas e reduz a fragmentação do índice em comparação com IDs v4 aleatórios.',
      },
      {
        question: 'Posso gerar o mesmo UUID duas vezes?',
        answer:
          'Não. Cada geração usa aleatoriedade criptográfica nova, então você nunca vai obter o mesmo UUID de novo. Salve qualquer ID que precise reutilizar.',
      },
      {
        question: 'Como copio todos os UUIDs gerados de uma vez?',
        answer:
          'Clique em Copiar tudo para colocar o lote inteiro na área de transferência, um UUID por linha, pronto para colar no seu código, planilha ou script SQL.',
      },
    ],
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
    instructions: [
      {
        title: 'Digite seu padrão e flags',
        description:
          'Digite um padrão RegExp entre as barras e ative as flags g, i, m ou s.',
      },
      {
        title: 'Forneça um texto de exemplo',
        description:
          'Cole strings de teste em String de Teste para ver as substrings correspondentes destacadas à direita.',
      },
      {
        title: 'Revise os matches destacados',
        description:
          'Confira as substrings destacadas e a contagem de matches para confirmar se seu padrão encontra exatamente o que você espera, e nada mais.',
      },
      {
        title: 'Inspecione grupos e substituições',
        description:
          'Revise os índices exatos de match e os grupos de captura $1/$2, ou teste um modelo de substituição abaixo.',
      },
      {
        title: 'Corrija erros de padrão',
        description:
          'Se um erro de sintaxe aparecer, leia a mensagem, verifique se há colchetes ou parênteses sem fechar e ajuste o padrão até os matches aparecerem.',
      },
      {
        title: 'Dica: teste casos extremos antes de lançar',
        description:
          'Teste strings vazias, caracteres incomuns e entrada com várias linhas antes de usar um padrão em produção, e alterne a flag i para verificar a sensibilidade a maiúsculas.',
      },
    ],
    examples: [
      {
        title: 'Extraindo parte local e domínio de e-mail',
        input: 'Padrão: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Texto: support@utilityflow.online',
        output: 'Match #1 · $1="support" · $2="utilityflow.online"',
        explanation:
          'Grupos entre parênteses expõem as substrings capturadas individualmente.',
      },
      {
        title: 'Testando substituição com grupo de captura',
        input: 'Padrão: (\\w+) (\\w+) · Substituir por: $2 $1 · Texto: João Silva',
        output: 'Silva João',
        explanation: 'O modelo de substituição usa $1 e $2 para trocar as palavras de lugar.',
      },
    ],
    benefits: [
      'Protege automaticamente contra loops infinitos em matches de tamanho zero',
      'Mostra o índice exato de caracteres e os valores de grupo capturados por match',
      'Inclui prévia ao vivo de modelo de substituição usando $1, $2 e $&',
      'Relata erros de sintaxe RegExp com clareza, sem travar',
    ],
    useCases: [
      'Validar padrões de e-mail, slug ou entrada de formulário antes de lançar',
      'Extrair tokens estruturados de linhas de registro ou trechos HTML',
      'Testar modelos de captura de busca e substituição',
      'Verificar o comportamento de flags multilinha (^ / $) e sem diferenciação de maiúsculas',
    ],
    faqs: [
      {
        question: 'Qual mecanismo de regex este testador usa?',
        answer:
          'Ele usa o mecanismo RegExp ECMAScript (JavaScript) nativo do seu navegador, então o comportamento corresponde ao JS do lado do cliente e ao código Node.js de forma idêntica.',
      },
      {
        question: 'Por que o modo global ("g") importa?',
        answer:
          'Sem a flag "g", o RegExp para depois do primeiro match. Ativar "g" encontra e destaca todos os matches na string de teste.',
      },
      {
        question: 'Como faço match em quebras de linha com "."?',
        answer:
          'Ative a flag "s" (dotAll) para que o metacaractere "." também corresponda a caracteres de quebra de linha.',
      },
      {
        question: 'O Testador de Regex é gratuito?',
        answer:
          'Sim, o Testador de Regex é totalmente gratuito, sem cadastro e sem limites de quantos padrões ou strings de teste você tenta.',
      },
      {
        question: 'Qual sabor de regex o Testador de Regex usa?',
        answer:
          'Ele usa o sabor de regex JavaScript (ECMAScript), o mesmo mecanismo que roda em navegadores e Node.js, então os padrões se comportam igual no seu código.',
      },
      {
        question: 'Como testo um regex para validação de e-mail?',
        answer:
          'Cole um padrão como ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) e teste endereços válidos e inválidos na string de teste para ver quais correspondem.',
      },
      {
        question: 'O que as flags g, i, m e s fazem no Testador de Regex?',
        answer:
          'A flag g encontra todos os matches, i torna a correspondência insensível a maiúsculas, m deixa ^ e $ corresponderem em limites de linha, e s deixa . corresponder a caracteres de quebra de linha.',
      },
      {
        question: 'Como funcionam os grupos de captura no Testador de Regex?',
        answer:
          'O texto dentro de parênteses forma um grupo de captura numerado. Depois de um match, cada grupo é listado como $1, $2 e assim por diante, com a substring exata que capturou.',
      },
      {
        question: 'Qual é a diferença entre .* e .*? em regex?',
        answer:
          'O quantificador .* é ganancioso e corresponde ao máximo possível, enquanto .*? é preguiçoso e corresponde ao mínimo possível. Use a forma preguiçosa quando quiser o match mais curto.',
      },
      {
        question: 'Como faço match de um ponto ou parêntese literal em regex?',
        answer:
          'Escape com uma barra invertida, como \\. para um ponto ou \\( para um parêntese, para o caractere ser tratado como texto literal em vez de metacaractere.',
      },
      {
        question: 'Por que meu regex está correspondendo a texto demais?',
        answer:
          'Você provavelmente está usando um quantificador ganancioso como .* que engole tudo até o último match possível. Mude para um quantificador preguiçoso como .*? ou estreite a classe de caracteres.',
      },
      {
        question: 'Como uso $1 e $2 em uma substituição?',
        answer:
          'Digite um modelo de substituição como $2@$1 e o testador substitui cada $n pelo texto capturado por aquele grupo numerado em cada match.',
      },
      {
        question: 'O Testador de Regex pode corresponder em várias linhas?',
        answer:
          'Sim. Ative a flag m para que ^ e $ funcionem por linha, e a flag s se precisar que . atravesse quebras de linha.',
      },
      {
        question: 'O que é um lookahead em regex?',
        answer:
          'Um lookahead como (?=...) verifica se um padrão segue a posição atual sem consumi-lo, para você exigir uma condição, como um dígito à frente, sem incluí-la no match.',
      },
      {
        question: 'Por que meu padrão não mostra matches?',
        answer:
          'Verifique se há erro de sintaxe, caractere especial sem escape ou classe de caracteres que exclui sua entrada. Tente simplificar o padrão e adicionar uma parte de cada vez.',
      },
      {
        question: 'Como testo um regex contra muitas linhas de uma vez?',
        answer:
          'Cole toda a amostra com várias linhas na string de teste e ative a flag g. Cada linha correspondente é destacada e listada com seu índice.',
      },
      {
        question: 'O Testador de Regex suporta caracteres Unicode?',
        answer:
          'Sim. O regex JavaScript lida com texto Unicode, e você pode usar escapes como \\u{1F600} ou a flag u para correspondência totalmente ciente de Unicode.',
      },
      {
        question: 'Meu regex ou texto de teste é enviado para algum lugar?',
        answer:
          'Não. Os testes rodam todo no seu navegador, então seus padrões e dados de exemplo nunca saem do seu dispositivo.',
      },
      {
        question: 'O que é backtracking catastrófico e como evitá-lo?',
        answer:
          'Ele acontece quando quantificadores aninhados como (a+)+ forçam o mecanismo a tentar um número enorme de combinações. Evite quantificadores sobrepostos e use padrões no estilo atômico ou classes de caracteres mais simples.',
      },
      {
        question: 'Posso salvar ou compartilhar meu padrão regex?',
        answer:
          'Não há recurso de salvamento embutido, então copie seu padrão e string de teste para um arquivo de trechos ou comentário de código. Você também pode colar o padrão direto no seu código-fonte.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole sua string JWT',
        description:
          'Cole um token padrão de três segmentos (cabeçalho.payload.assinatura) na caixa de entrada ou clique em Carregar JWT de exemplo para testar com um token de demonstração.',
      },
      {
        title: 'Revise o JSON de Cabeçalho e Payload',
        description:
          'Inspecione os metadados de algoritmo (`alg`, `typ`) e os campos de claim decodificados em painéis JSON formatados.',
      },
      {
        title: 'Confira os Claims de Timestamp',
        description:
          'Verifique as conversões de data UTC para `iat`, `nbf` e `exp`, além do status ativo/expirado.',
      },
      {
        title: 'Inspecione claims como sub, roles e scopes',
        description:
          'Procure claims de identidade e permissão, como sub, iss, aud, roles e scope, para confirmar se o token carrega o que sua API espera.',
      },
      {
        title: 'Copie o JSON decodificado ou um único claim',
        description:
          'Copie todo o JSON formatado de cabeçalho ou payload, ou copie um valor de claim individual para colar no seu código, testes ou ticket de suporte.',
      },
      {
        title: 'Solucione um token que não decodifica',
        description:
          'Remova espaços extras, quebras de linha ou aspas ao redor do token. Um token de cinco segmentos é um JWE criptografado, não um JWT, e não pode ser decodificado sem sua chave de descriptografia.',
      },
    ],
    examples: [
      {
        title: 'Inspecionando a expiração do token',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Cabeçalho: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation:
          'Decodifica segmentos Base64Url e traduz claims numéricos de época em datas UTC.',
      },
      {
        title: 'Verificando claims de função',
        input: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMiIsInJvbGVzIjpbImFkbWluIl19.sig',
        output: 'Payload: { "sub": "usr_2", "roles": ["admin"] }',
        explanation: 'Mostra os claims de identidade e permissão carregados pelo token.',
      },
    ],
    benefits: [
      'Zero transmissão de rede — os tokens nunca saem da aba do seu navegador',
      'Traduz claims numéricos iat, nbf e exp para datas UTC legíveis',
      'Destaca se o timestamp de expiração do token já passou',
      'Deixa claro que a verificação criptográfica da assinatura exige sua chave de assinatura',
    ],
    useCases: [
      'Depurar tokens de acesso e ID OAuth2 / OIDC durante integração de API',
      'Verificar claims de função, escopo e tenant emitidos por provedores de autenticação',
      'Conferir por que uma API rejeitou um bearer token expirado',
      'Validar a estrutura JWT em testes de integração',
    ],
    faqs: [
      {
        question: 'Este Decodificador JWT verifica se a assinatura de um token é autêntica?',
        answer:
          'Não. Decodificar um JWT só analisa seus segmentos Base64Url de cabeçalho e payload. Verificar uma assinatura exige o segredo do seu servidor ou a chave pública JWKS e deve sempre acontecer no seu backend.',
      },
      {
        question: 'É seguro colar tokens de autenticação aqui?',
        answer:
          'Toda a decodificação roda localmente em JavaScript do lado do cliente, sem registrar nem transmitir tokens. Mesmo assim, evite colar credenciais de produção em computadores compartilhados que você não confia.',
      },
      {
        question: 'Por que meu token falha se tiver 5 segmentos em vez de 3?',
        answer:
          'Um token de 5 segmentos é um JWE criptografado (JSON Web Encryption) em vez de um JWS/JWT assinado, então seu payload não pode ser decodificado sem a chave de descriptografia.',
      },
      {
        question: 'O que é um JWT e o que este decodificador mostra?',
        answer:
          'Um JSON Web Token é uma string compacta com três segmentos Base64Url: cabeçalho, payload e assinatura. Este decodificador mostra o JSON do cabeçalho, os claims do payload e datas legíveis para os claims de timestamp.',
      },
      {
        question: 'O Decodificador JWT é gratuito?',
        answer:
          'Sim. O Decodificador JWT é totalmente gratuito, sem cadastro, sem limites de uso e sem precisar de conta. Ele roda todo no seu navegador.',
      },
      {
        question: 'Posso decodificar um JWT sem o segredo de assinatura?',
        answer:
          'Sim. Decodificar só lê o cabeçalho e o payload Base64Url, que não são criptografados. O segredo de assinatura só é necessário para verificar se a assinatura é autêntica.',
      },
      {
        question: 'O que os campos de cabeçalho alg e typ significam em um JWT?',
        answer:
          'O campo alg nomeia o algoritmo de assinatura, como HS256 ou RS256, e typ geralmente diz JWT para identificar o tipo do token. Ambos os campos ficam no segmento de cabeçalho.',
      },
      {
        question: 'Quais claims geralmente há em um payload JWT?',
        answer:
          'Claims comuns de payload incluem sub para o sujeito ou id do usuário, iss para o emissor, aud para o público, iat para o tempo de emissão, nbf para o tempo de não antes e exp para o tempo de expiração, além de claims personalizados como roles ou scopes.',
      },
      {
        question: 'Como sei se meu JWT expirou?',
        answer:
          'Compare o claim exp com o tempo atual. Este decodificador converte exp em uma data UTC simples e sinaliza se o token ainda está ativo ou já expirou.',
      },
      {
        question: 'Qual é a diferença entre iat, nbf e exp em um JWT?',
        answer:
          'O claim iat registra quando o token foi emitido, nbf registra o tempo mais cedo em que o token se torna válido, e exp registra quando ele deixa de ser válido. Os três são timestamps Unix em segundos.',
      },
      {
        question: 'Por que meu payload JWT decodificado parece diferente do JSON original?',
        answer:
          'Decodificar só reverte a codificação Base64Url, então o payload deve corresponder aos claims originais. Se parecer embaralhado, o token pode estar truncado, quebrado em linhas ou copiado com caracteres extras.',
      },
      {
        question: 'Posso decodificar um JWT sem assinatura?',
        answer:
          'Sim. Um token sem assinatura usa alg none e tem um terceiro segmento vazio, e seu cabeçalho e payload ainda decodificam normalmente. Tokens sem assinatura nunca devem ser confiáveis em produção.',
      },
      {
        question: 'O que significa se meu token tiver só dois segmentos?',
        answer:
          'Um token de dois segmentos está malformado ou incompleto, geralmente porque parte dele foi cortada ao copiar. Um JWT assinado válido sempre tem três segmentos separados por pontos.',
      },
      {
        question: 'O Decodificador JWT armazena ou envia meu token para algum lugar?',
        answer:
          'Não. A decodificação acontece todo na aba do seu navegador e nada é enviado, registrado ou armazenado em um servidor. Fechar a aba remove o token da memória.',
      },
      {
        question: 'Por que meu JWT não decodifica de jeito nenhum?',
        answer:
          'Verifique se há espaços extras, quebras de linha ou aspas ao redor do token, e confirme se ele tem exatamente três segmentos separados por pontos. Tokens copiados de saídas de registro costumam incluir pontuação no fim que quebra a decodificação.',
      },
      {
        question: 'Posso usar este Decodificador JWT para tokens de acesso OAuth2?',
        answer:
          'Sim, desde que o token de acesso seja um JWT. Muitos provedores OAuth2 e OpenID Connect emitem tokens de acesso e ID em JWT, e esta ferramenta decodifica seus claims da mesma forma.',
      },
      {
        question: 'O que é um JWE e por que não consigo decodificá-lo aqui?',
        answer:
          'Um JWE é um token criptografado JSON Web Encryption com cinco segmentos. Seu payload é criptografado, então só pode ser lido com a chave de descriptografia do destinatário pretendido.',
      },
      {
        question: 'Como verifico claims JWT como roles e scopes?',
        answer:
          'Cole o token e leia o painel de payload decodificado. Funções, escopos, permissões e claims de tenant aparecem lá como campos JSON comuns que você pode inspecionar ou copiar.',
      },
      {
        question: 'Decodificar um JWT prova que o token é válido?',
        answer:
          'Não. Decodificar só mostra o que o token contém. Qualquer pessoa pode criar um token com qualquer claim, então a validade precisa ser confirmada verificando a assinatura e o claim exp no seu servidor.',
      },
      {
        question: 'Posso decodificar um JWT em um computador compartilhado ou público?',
        answer:
          'Você pode, porque a decodificação é local e nada é enviado, mas ainda é melhor evitar colar tokens de produção ativos em um computador que você não controla.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Entrada de Texto ou Checksum de Arquivo Local',
        description:
          'Selecione Entrada de Texto para gerar hash de strings ou Checksum de Arquivo Local para verificar binários baixados sem enviá-los.',
      },
      {
        title: 'Digite o texto ou escolha um arquivo local',
        description:
          'Digite ou cole seu texto na caixa de entrada, ou escolha um arquivo do seu dispositivo. O arquivo é lido só dentro do seu navegador e nunca é enviado.',
      },
      {
        title: 'Selecione a codificação de saída',
        description:
          'Alterne entre Hex (minúsculas ou maiúsculas) e formatação de digest Base64.',
      },
      {
        title: 'Revise os quatro digests de uma vez',
        description:
          'SHA-1, SHA-256, SHA-384 e SHA-512 são calculados ao mesmo tempo, então compare os algoritmos lado a lado sem rodar a ferramenta de novo.',
      },
      {
        title: 'Copie qualquer digest',
        description:
          'Clique em Copiar ao lado de SHA-1, SHA-256, SHA-384 ou SHA-512 para copiar o hash calculado.',
      },
      {
        title: 'Solucione um checksum que não corresponde',
        description:
          'Se o checksum de um arquivo diferir do valor publicado, baixe o arquivo de novo e verifique se há novas linhas ou espaços no fim na entrada de texto, já que até um caractere extra muda o hash por completo.',
      },
    ],
    examples: [
      {
        title: 'SHA-256 de "UtilityFlow"',
        input: 'UtilityFlow',
        output: 'Calculado deterministicamente em 64 caracteres hexadecimais (256 bits)',
        explanation:
          'Até uma mudança de um único caractere produz um digest totalmente diferente.',
      },
      {
        title: 'Verificando o checksum de um arquivo baixado',
        input: 'Arquivo: instalador.exe · SHA-256 publicado: a1b2c3d4…',
        output: 'SHA-256 calculado: a1b2c3d4… (corresponde)',
        explanation: 'Valores iguais confirmam que o arquivo baixado está intacto.',
      },
    ],
    benefits: [
      'Usa a Web Crypto SubtleCrypto nativa, acelerada por hardware',
      'Verifica checksums SHA-256 de arquivos locais sem enviar arquivos',
      'Gera formatos Hex (maiúsculas/minúsculas) e Base64',
      'Calcula os quatro algoritmos SHA ao mesmo tempo',
    ],
    useCases: [
      'Verificar checksums SHA-256 em instaladores de software ou arquivos baixados',
      'Gerar hashes Base64 de Integridade de Subrecurso (SRI) para scripts e estilos',
      'Testar expectativas de HMAC de webhook ou digest de payload',
      'Criar impressões digitais determinísticas de conteúdo',
    ],
    faqs: [
      {
        question: 'Posso reverter um hash SHA-256 de volta para o texto original?',
        answer:
          'Não. Funções de hash criptográfico são digests matemáticos de mão única, feitos para que a entrada original não possa ser derivada do hash.',
      },
      {
        question: 'Por que SHA-256 e SHA-512 são preferidos em relação ao SHA-1?',
        answer:
          'O SHA-1 tem fraquezas conhecidas de colisão e está obsoleto para assinaturas de segurança; SHA-256 e SHA-512 pertencem à família SHA-2, mais forte.',
      },
      {
        question: 'Os arquivos enviados são transmitidos a um servidor?',
        answer:
          'Não. Os arquivos selecionados são lidos em um ArrayBuffer dentro da aba do seu navegador e recebem hash localmente.',
      },
      {
        question: 'Para que serve um gerador de hash?',
        answer:
          'Um gerador de hash transforma texto ou um arquivo em uma impressão digital de tamanho fixo chamada digest. Desenvolvedores usam digests para verificar downloads, conferir integridade de dados e criar valores de Integridade de Subrecurso.',
      },
      {
        question: 'O Gerador de Hash é gratuito?',
        answer:
          'Sim. O Gerador de Hash é totalmente gratuito, sem cadastro e sem limites de uso. Todo o hash roda localmente no seu navegador.',
      },
      {
        question: 'Qual é a diferença entre SHA-1, SHA-256, SHA-384 e SHA-512?',
        answer:
          'Eles são membros da família SHA com tamanhos de digest diferentes: SHA-1 produz 160 bits, SHA-256 produz 256 bits, SHA-384 produz 384 bits e SHA-512 produz 512 bits. Digests mais longos geralmente são mais fortes.',
      },
      {
        question: 'Como verifico o checksum de um arquivo baixado com esta ferramenta?',
        answer:
          'Mude para o modo Checksum de Arquivo Local, selecione o arquivo baixado e compare o valor SHA-256 calculado com o checksum publicado pelo fornecedor do software. Valores iguais significam que o arquivo está intacto.',
      },
      {
        question: 'O que devo fazer se o checksum do meu arquivo não corresponder?',
        answer:
          'Não instale nem execute o arquivo. Baixe-o de novo da fonte oficial e gere o hash outra vez, já que uma divergência pode significar um download corrompido ou adulterado.',
      },
      {
        question: 'Qual é a diferença entre saída de hash em hex e Base64?',
        answer:
          'A saída hex mostra o digest como caracteres hexadecimais, enquanto a saída Base64 mostra o mesmo digest em uma string Base64 mais curta. Ambas representam exatamente os mesmos bytes de hash.',
      },
      {
        question: 'Mudar um caractere muda mesmo o hash inteiro?',
        answer:
          'Sim. Funções de hash têm efeito avalanche, então mudar uma única letra, espaço ou quebra de linha produz um digest totalmente diferente, sem padrão visível.',
      },
      {
        question: 'Dois arquivos diferentes podem produzir o mesmo hash SHA-256?',
        answer:
          'Em teoria, uma colisão é possível, mas com SHA-256 ela é tão improvável na prática que hashes iguais são tratados como prova de que os arquivos são idênticos.',
      },
      {
        question: 'Posso gerar hash de um arquivo sem enviá-lo?',
        answer:
          'Sim. Esta ferramenta lê o arquivo na memória do seu navegador e gera o hash com a API Web Crypto. O arquivo nunca sai do seu dispositivo.',
      },
      {
        question: 'O que é um hash de Integridade de Subrecurso e como faço um?',
        answer:
          'Um hash de Integridade de Subrecurso (SRI) é um digest SHA em Base64 adicionado a uma tag de script ou link para que navegadores recusem arquivos adulterados. Selecione a saída Base64 aqui e copie o digest SHA-256 ou SHA-384 para seu atributo integrity.',
      },
      {
        question: 'Por que o mesmo texto sempre produz o mesmo hash?',
        answer:
          'Funções de hash são determinísticas: entradas idênticas sempre produzem o digest idêntico. É isso que torna os hashes úteis para verificar arquivos e detectar mudanças.',
      },
      {
        question: 'O SHA-1 ainda é seguro para usar?',
        answer:
          'O SHA-1 serve para checksums simples de dados não sensíveis, mas não deve ser usado para assinaturas de segurança ou certificados porque existem ataques práticos de colisão contra ele.',
      },
      {
        question: 'Qual é o tamanho de um hash SHA-256 em caracteres hexadecimais?',
        answer:
          'Um digest SHA-256 tem 256 bits, o que aparece como 64 caracteres hexadecimais. O SHA-1 mostra 40 caracteres hex, o SHA-384 mostra 96 e o SHA-512 mostra 128.',
      },
      {
        question: 'O Gerador de Hash funciona offline?',
        answer:
          'Sim, depois que a página carrega. O hash usa a API Web Crypto embutida no seu navegador, então nenhuma conexão de rede é necessária enquanto você gera hash de texto ou arquivos.',
      },
      {
        question: 'Posso gerar hash de texto com caracteres especiais ou emoji?',
        answer:
          'Sim. O texto é codificado como UTF-8 antes do hash, então letras acentuadas, símbolos e emojis são todos tratados de forma consistente.',
      },
      {
        question: 'Qual é a diferença entre hash e criptografia?',
        answer:
          'A criptografia é reversível com uma chave, enquanto o hash é um digest de mão única que não pode ser revertido. Hashes verificam integridade; a criptografia protege a confidencialidade.',
      },
      {
        question: 'Posso usar o Gerador de Hash para verificar uma senha?',
        answer:
          'Você pode gerar o hash de uma senha para compará-lo com um digest armazenado, mas senhas devem receber hash com um algoritmo lento de senha, como bcrypt ou Argon2, e não SHA-256 puro, em aplicações reais.',
      },
    ],
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
        'Codifique caracteres HTML reservados e símbolos não ASCII em entidades, ou decodifique entidades de volta para texto simples. Grátis, local e instantâneo.',
      primaryKeyword: 'codificador de entidades html',
      secondaryKeywords: ['ferramenta de escape html', 'decodificador de entidades html', 'desfazer escape html', 'codificar caracteres html'],
      longTailKeywords: ['escape tags html para trechos de código online', 'decodificar entidades html nomeadas e numéricas', 'converter caracteres especiais em entidades html', 'escape aspas e e comerciais html online'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Escape com segurança `<`, `>`, `&`, aspas e símbolos Unicode internacionais em entidades HTML para embutir trechos de código em páginas web, ou decodifique strings com escape HTML de volta para texto legível.',
    instructions: [
      {
        title: 'Escolha Codificar ou Decodificar',
        description:
          'Escolha Codificar Entidades para escapar marcação HTML ou Decodificar Entidades para desfazer o escape de entidades existentes.',
      },
      {
        title: 'Cole seu HTML ou texto',
        description:
          'Cole o trecho, valor de atributo ou string com escape na caixa de entrada. Blocos grandes de código colam exatamente como estão.',
      },
      {
        title: 'Ative a codificação não ASCII',
        description:
          'No modo Codificar, decida se caracteres acima de ASCII 127 também devem virar entidades numéricas &#...;.',
      },
      {
        title: 'Revise a saída convertida',
        description:
          'Confira se tags, aspas e símbolos converteram como esperado, e confirme se nada no seu trecho foi alterado ou descartado.',
      },
      {
        title: 'Copie ou troque',
        description:
          'Copie o texto convertido ou clique em Trocar para inverter seu fluxo de trabalho.',
      },
      {
        title: 'Solucione entidades duplamente codificadas',
        description:
          'Se você vir &amp;lt; na saída, o texto foi codificado duas vezes. Decodifique uma vez para voltar às entidades normais e depois codifique uma única vez.',
      },
    ],
    examples: [
      {
        title: 'Escapando um trecho HTML para documentação',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation:
          'Impede que o navegador interprete tags de exemplo como elementos DOM ativos.',
      },
      {
        title: 'Decodificando entidades nomeadas',
        input: '&copy; 2026 UtilityFlow &mdash; Todos os direitos reservados',
        output: '© 2026 UtilityFlow — Todos os direitos reservados',
        explanation: 'Converte entidades nomeadas de volta para caracteres legíveis.',
      },
    ],
    benefits: [
      'Escapa os cinco caracteres reservados XML/HTML (&, <, >, ", \')',
      'Codificação opcional de entidades numéricas para símbolos internacionais e pontuação',
      'Decodifica entidades nomeadas (&mdash;, &copy;) e numéricas (&#8212;, &#x2014;)',
      'Usa extração segura de texto com DOMParser ao decodificar',
    ],
    useCases: [
      'Preparar exemplos de código HTML para artigos de blog e documentação',
      'Limpar texto codificado em HTML raspado de feeds RSS ou APIs XML',
      'Escapar valores de atributo em modelos HTML estáticos',
      'Verificar como símbolos especiais renderizam com segurança em páginas UTF-8 ou ASCII',
    ],
    faqs: [
      {
        question: 'Quais cinco caracteres sempre precisam de escape em texto e atributos HTML?',
        answer:
          'E comercial (&), menor que (<), maior que (>), aspas duplas (") e aspas simples (\') devem ter escape para evitar ambiguidade de marcação ou problemas de XSS.',
      },
      {
        question: 'Quando devo desligar a codificação não ASCII?',
        answer:
          'Se sua página web usa <meta charset="UTF-8">, caracteres internacionais e símbolos comuns renderizam direto sem precisar de entidades numéricas &#...;.',
      },
      {
        question: 'O decodificador lida com entidades hexadecimais como &#x27;?',
        answer:
          'Sim. Entidades decimais (&#39;) e hexadecimais (&#x27;), além de entidades nomeadas padrão (&amp;, &nbsp;, &copy;), decodificam corretamente.',
      },
      {
        question: 'O que é uma entidade HTML?',
        answer:
          'Uma entidade HTML é um código de texto que representa um caractere especial, como &lt; para < ou &amp; para &. Entidades permitem exibir caracteres reservados sem o navegador tratá-los como marcação.',
      },
      {
        question: 'O Codificador de Entidades HTML é gratuito?',
        answer:
          'Sim. O Codificador de Entidades HTML é totalmente gratuito, sem cadastro e sem limites de uso. Toda a codificação e decodificação roda localmente no seu navegador.',
      },
      {
        question: 'Por que preciso escapar caracteres HTML?',
        answer:
          'Navegadores interpretam <, > e & como marcação. Escapá-los mostra os caracteres como texto visível, o que é essencial para exemplos de código, conteúdo de usuários e modelos seguros.',
      },
      {
        question: 'Qual é a diferença entre entidades HTML nomeadas e numéricas?',
        answer:
          'Entidades nomeadas usam um nome legível, como &copy; para o símbolo de copyright, enquanto entidades numéricas usam um ponto de código, como &#169; ou &#xA9;. Ambas renderizam o mesmo caractere.',
      },
      {
        question: 'Quando devo codificar caracteres não ASCII como entidades?',
        answer:
          'Codifique-os quando uma página ou sistema de e-mail não suporta UTF-8 de forma confiável, ou quando você precisa de saída ASCII pura. Em páginas modernas UTF-8, letras acentuadas e símbolos podem ficar como caracteres simples.',
      },
      {
        question: 'Como fica HTML duplamente codificado?',
        answer:
          'A codificação dupla transforma &lt; em &amp;lt;, então o navegador exibe o texto literal &lt; em vez de <. Decodifique uma vez para corrigir e depois codifique só uma vez.',
      },
      {
        question: 'Posso decodificar entidades HTML de páginas raspadas?',
        answer:
          'Sim. Cole o texto com escape de um feed RSS, API XML ou página raspada e decodifique para recuperar texto simples legível com caracteres reais.',
      },
      {
        question: 'Codificar entidades HTML previne ataques XSS?',
        answer:
          'Escapar a entrada do usuário é uma camada importante de defesa contra XSS, mas não é uma solução completa sozinha. Combine sempre com codificação de saída adequada, validação e uma política de segurança de conteúdo.',
      },
      {
        question: 'Qual é a entidade HTML para um espaço sem quebra?',
        answer:
          'O espaço sem quebra é &nbsp; ou &#160;. Ele mantém duas palavras na mesma linha e é muito usado para preservar espaçamento em layouts HTML.',
      },
      {
        question: 'Como escapo aspas dentro de um atributo HTML?',
        answer:
          'Use &quot; para aspas duplas e &#39; ou &apos; para aspas simples. Escapar aspas impede que um valor de atributo termine cedo e quebre sua marcação.',
      },
      {
        question: 'Esta ferramenta pode codificar emojis e outros símbolos Unicode?',
        answer:
          'Sim. Com a codificação não ASCII ativada, emojis e símbolos internacionais viram entidades numéricas como &#128512;. Com ela desligada, eles ficam como caracteres Unicode simples.',
      },
      {
        question: 'Qual é a diferença entre escapar HTML e codificar URL?',
        answer:
          'O escape HTML converte caracteres de marcação reservados em entidades para exibição em páginas, enquanto a codificação de URL converte caracteres em códigos de porcentagem, como %20, para uso dentro de links e strings de consulta.',
      },
      {
        question: 'O codificador muda letras e números normais?',
        answer:
          'Não. Letras simples, dígitos e a maioria da pontuação passam sem alteração. Só caracteres reservados e, opcionalmente, símbolos não ASCII são convertidos.',
      },
      {
        question: 'Por que meu texto decodificado mostra caracteres estranhos?',
        answer:
          'A origem provavelmente foi codificada com um conjunto de caracteres diferente, ou uma entidade estava malformada. Tente decodificar de novo a partir do texto original com escape e confira se a página declara UTF-8.',
      },
      {
        question: 'Posso codificar um documento HTML inteiro com esta ferramenta?',
        answer:
          'Sim. Você pode colar um documento inteiro e codificá-lo, mas o resultado serve para exibição como exemplo de código, não para salvar como uma página web funcional.',
      },
      {
        question: 'Meu HTML colado é enviado a um servidor?',
        answer:
          'Não. A codificação e a decodificação acontecem todo no seu navegador, então seu código e texto nunca saem do seu dispositivo.',
      },
      {
        question: 'Qual é a entidade HTML para o caractere e comercial?',
        answer:
          'O próprio e comercial é &amp; ou &#38;. Codifique sempre um & literal primeiro, porque um e comercial sem codificação pode fazer o navegador ler errado as entidades seguintes.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha a direção da conversão',
        description:
          'Selecione JSON → CSV ou CSV → JSON e escolha Vírgula (,), Ponto e vírgula (;) ou Tabulação (TSV) como delimitador.',
      },
      {
        title: 'Cole seus dados JSON ou CSV',
        description:
          'Insira os dados no editor esquerdo ou clique em Carregar exemplo para testar campos entre aspas.',
      },
      {
        title: 'Confira os cabeçalhos das colunas',
        description:
          'Revise os cabeçalhos gerados antes de converter. Objetos aninhados viram colunas separadas por ponto, como endereco.cidade, e chaves ausentes deixam células vazias.',
      },
      {
        title: 'Converta seus dados',
        description:
          'Rode a conversão e inspecione a prévia. Vírgulas entre aspas, aspas embutidas e quebras de linha dentro das células são preservadas exatamente como a RFC 4180 exige.',
      },
      {
        title: 'Copie ou baixe o resultado',
        description:
          'Copie a saída convertida ou baixe direto como arquivo .csv ou .json.',
      },
      {
        title: 'Solucione um erro de conversão',
        description:
          'Se a conversão falhar, valide primeiro a sintaxe do seu JSON: verifique vírgulas à direita, aspas faltando e colchetes sem par. Para CSV, confirme se você escolheu o delimitador que seu arquivo realmente usa.',
      },
    ],
    examples: [
      {
        title: 'Lidando com vírgulas dentro de valores CSV',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Designer"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Designer',
        explanation:
          'Coloca entre aspas automaticamente campos com delimitadores ou aspas duplas, conforme a RFC 4180.',
      },
      {
        title: 'Convertendo CSV de volta para JSON',
        input: 'id,nome\n1,Ana\n2,Bruno',
        output: '[{"id": 1, "nome": "Ana"}, {"id": 2, "nome": "Bruno"}]',
        explanation: 'A primeira linha vira as chaves do objeto e cada linha seguinte vira um objeto JSON.',
      },
    ],
    benefits: [
      'Conversão bidirecional JSON ↔ CSV em uma área de trabalho',
      'Achata objetos JSON aninhados usando cabeçalhos de coluna com notação de ponto',
      'Parser RFC-4180 adequado preserva vírgulas entre aspas e quebras de linha embutidas',
      'Suporta delimitadores de vírgula, ponto e vírgula (Excel europeu) e tabulação',
    ],
    useCases: [
      'Exportar listas JSON de API REST para Excel ou Planilhas Google',
      'Converter exportações de dados de planilhas em arquivos seed JSON para apps web',
      'Preparar conjuntos de dados TSV para ciência de dados ou importações SQL',
      'Inspecionar exportações CSV delimitadas por ponto e vírgula sem problema',
    ],
    faqs: [
      {
        question: 'Como JSON para CSV lida com objetos com propriedades aninhadas?',
        answer:
          'Objetos aninhados são achatados em nomes de coluna separados por ponto (por exemplo, endereco.cidade), e matrizes são serializadas como strings JSON compactas.',
      },
      {
        question: 'E se objetos JSON diferentes tiverem chaves levemente diferentes?',
        answer:
          'O conversor examina todos os objetos da matriz para criar uma união de cabeçalhos de coluna e deixa células vazias onde uma chave está ausente.',
      },
      {
        question: 'O parser CSV quebra se uma célula tiver uma vírgula dentro de aspas?',
        answer:
          'Não. O parser de máquina de estados acompanha células entre aspas duplas e aspas escapadas "" com precisão.',
      },
      {
        question: 'Para que serve o Conversor de JSON para CSV?',
        answer:
          'Ele transforma dados JSON de APIs e apps em planilhas CSV que você pode abrir no Excel ou no Planilhas Google, e converte arquivos CSV de volta para JSON para código e bancos de dados.',
      },
      {
        question: 'O Conversor de JSON para CSV é gratuito?',
        answer:
          'Sim. O Conversor de JSON para CSV é totalmente gratuito, sem cadastro e sem limites de uso. Toda a conversão roda localmente no seu navegador.',
      },
      {
        question: 'Posso converter um único objeto JSON em vez de uma matriz?',
        answer:
          'Sim. Um único objeto é tratado como uma linha com suas chaves como cabeçalhos de coluna, então você ainda obtém um arquivo CSV válido com uma linha de dados.',
      },
      {
        question: 'Como matrizes JSON dentro de objetos são convertidas para CSV?',
        answer:
          'Valores de matriz são serializados como strings JSON compactas dentro de uma única célula, então os dados são preservados e podem ser analisados de volta para uma matriz depois.',
      },
      {
        question: 'Qual delimitador devo escolher para meu arquivo CSV?',
        answer:
          'Use vírgula para CSV padrão, ponto e vírgula para exportações do Excel europeu onde vírgulas são separadores decimais, e tabulação para arquivos TSV usados em ferramentas de dados.',
      },
      {
        question: 'O conversor preserva números e booleanos corretamente?',
        answer:
          'Sim. Números e booleanos são escritos como valores simples em CSV. Ao converter de volta para JSON, valores que parecem números ou booleanos são analisados em seus tipos JSON correspondentes.',
      },
      {
        question: 'O que acontece com valores vazios ou nulos em JSON para CSV?',
        answer:
          'Strings vazias, valores nulos e chaves ausentes viram células vazias no CSV, o que mantém as linhas alinhadas com os cabeçalhos das colunas.',
      },
      {
        question: 'Posso converter CSV de volta para JSON com esta ferramenta?',
        answer:
          'Sim. Mude para o modo CSV para JSON, cole seus dados CSV ou TSV e escolha o delimitador. A primeira linha vira as chaves do objeto e cada linha seguinte vira um objeto JSON.',
      },
      {
        question: 'Por que meu CSV abre com todos os dados em uma coluna do Excel?',
        answer:
          'O Excel pode esperar um delimitador diferente do que seu arquivo usa. Exporte de novo com delimitador de vírgula, ou use a opção de ponto e vírgula para configurações de localidade europeia.',
      },
      {
        question: 'O Conversor de JSON para CSV lida com arquivos grandes?',
        answer:
          'Sim, dentro dos limites de memória do navegador. A conversão roda localmente, então conjuntos de dados muito grandes podem levar alguns segundos, mas seus dados nunca são enviados a um servidor.',
      },
      {
        question: 'Meus dados JSON ou CSV são enviados a um servidor?',
        answer:
          'Não. A conversão acontece todo na aba do seu navegador, então seus dados ficam no seu dispositivo e são removidos quando você fecha a aba.',
      },
      {
        question: 'O que é RFC 4180 e por que ela importa para CSV?',
        answer:
          'A RFC 4180 é o formato padrão para arquivos CSV. Ela define como campos com vírgulas, aspas ou quebras de linha devem ser envolvidos em aspas duplas, o que mantém os apps de planilha lendo seu arquivo corretamente.',
      },
      {
        question: 'Posso converter arquivos TSV para JSON?',
        answer:
          'Sim. Escolha o delimitador Tabulação (TSV) no modo CSV para JSON e cole seus dados separados por tabulação. Tabulações são comuns em exportações de dados e funcionam igual às vírgulas.',
      },
      {
        question: 'Por que minha conversão de JSON para CSV falhou?',
        answer:
          'As causas mais comuns são JSON inválido, como vírgulas à direita ou aspas faltando, e colar um objeto JSON que não é uma matriz de objetos. Corrija a sintaxe e tente de novo.',
      },
      {
        question: 'Como exporto dados JSON de API para o Excel?',
        answer:
          'Copie a matriz JSON da sua resposta de API, cole aqui, converta para CSV e baixe o arquivo. Abra o CSV baixado direto no Excel ou importe-o no Planilhas Google.',
      },
      {
        question: 'O conversor mantém a ordem original das minhas chaves JSON?',
        answer:
          'A ordem das colunas segue a ordem em que as chaves aparecem primeiro nos seus objetos. O primeiro objeto define a ordem inicial e chaves novas de objetos posteriores são anexadas.',
      },
      {
        question: 'Posso baixar o arquivo convertido em vez de copiá-lo?',
        answer:
          'Sim. Use o botão de download para salvar o resultado como arquivo .csv ou .json no seu dispositivo, pronto para abrir em uma planilha ou importar no seu app.',
      },
    ],
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
    instructions: [
      {
        title: 'Veja ou copie o tempo Unix atual',
        description:
          'Use o contador ao vivo no topo para pegar o tempo Unix atual em segundos.',
      },
      {
        title: 'Converta Timestamp Unix → Data Legível',
        description:
          'Digite qualquer época numérica; o modo Automático detecta segundos vs. milissegundos sozinho, ou force uma unidade.',
      },
      {
        title: 'Revise os formatos ISO, UTC e local',
        description:
          'Compare as saídas ISO 8601, UTC, RFC 2822 e de hora local lado a lado, além do tempo relativo como há 2 horas, para escolher o formato que você precisa.',
      },
      {
        title: 'Converta Data e Hora Locais → Timestamp Unix',
        description:
          'Escolha uma data e hora no painel inferior para obter segundos exatos, milissegundos e saída ISO 8601.',
      },
      {
        title: 'Copie o timestamp que você precisa',
        description:
          'Copie o valor em segundos para APIs e bancos de dados, o valor em milissegundos para objetos Date de JavaScript, ou a string ISO para registros e JSON.',
      },
      {
        title: 'Solucione uma data com aparência errada',
        description:
          'Se a data cair em 1970 ou no ano 5000, você provavelmente misturou segundos e milissegundos. Mude o seletor de unidade de Automático para a unidade certa e converta de novo.',
      },
    ],
    examples: [
      {
        title: 'Detectando segundos vs. milissegundos',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (segundos)',
        explanation:
          'Números de 10 dígitos são interpretados como segundos; números de 13 dígitos, como milissegundos.',
      },
      {
        title: 'Convertendo uma data local em timestamp',
        input: '2026-11-13 04:40:00 (local, UTC)',
        output: '1794544800 segundos · 1794544800000 milissegundos',
        explanation: 'O seletor de data devolve segundos e milissegundos exatos para a data escolhida.',
      },
    ],
    benefits: [
      'Relógio Unix ao vivo sincronizado com o horário do seu sistema',
      'Detecção automática de segundos vs. milissegundos com substituição manual',
      'Gera ISO 8601, hora local, RFC 2822 GMT e tempo relativo juntos',
      'Inclui seletor de data bidirecional para conversor de segundos/ms Unix',
    ],
    useCases: [
      'Inspecionar claims `iat` / `exp` de JWT e timestamps created_at de API',
      'Depurar timestamps inteiros de banco de dados em PostgreSQL ou SQLite',
      'Gerar timestamps de época futuros para TTLs de cache ou testes',
      'Converter marcadores de época de arquivos de registro em horas locais legíveis',
    ],
    faqs: [
      {
        question: 'Como o modo Automático distingue segundos de milissegundos?',
        answer:
          'Valores com magnitude ≥ 100.000.000.000 (1e11, por volta de 1973 em milissegundos ou ano 5138 em segundos) são tratados como milissegundos; valores menores são tratados como segundos.',
      },
      {
        question: 'O tempo Unix é afetado por fusos horários?',
        answer:
          'Não. O tempo de época Unix sempre mede os segundos passados desde 1970-01-01T00:00:00Z (UTC), independentemente do seu fuso horário local.',
      },
      {
        question: 'Posso converter timestamps anteriores a 1970?',
        answer:
          'Sim. Digite um timestamp Unix negativo (como -86400 para 31 de dezembro de 1969) para inspecionar datas anteriores a 1970.',
      },
      {
        question: 'O que é um timestamp Unix?',
        answer:
          'Um timestamp Unix, também chamado de tempo de época, é o número de segundos passados desde 1º de janeiro de 1970 às 00:00:00 UTC. É uma forma simples de computadores armazenarem datas como um único número.',
      },
      {
        question: 'O Conversor de Timestamp Unix é gratuito?',
        answer:
          'Sim. O Conversor de Timestamp Unix é totalmente gratuito, sem cadastro e sem limites de uso. Toda a conversão roda localmente no seu navegador.',
      },
      {
        question: 'Qual é a diferença entre segundos e milissegundos Unix?',
        answer:
          'Segundos Unix contam segundos inteiros desde 1970 e geralmente têm 10 dígitos, enquanto milissegundos contam milésimos de segundo e geralmente têm 13 dígitos. Objetos Date de JavaScript usam milissegundos.',
      },
      {
        question: 'Qual é o timestamp Unix atual agora?',
        answer:
          'O contador ao vivo no topo desta ferramenta marca cada segundo e mostra o tempo Unix atual em segundos. Copie-o sempre que precisar do valor exato para testes ou registros.',
      },
      {
        question: 'Como converto um timestamp Unix em uma data legível?',
        answer:
          'Cole o número de época no conversor e ele mostra a data correspondente em ISO 8601, UTC, RFC 2822 e seu fuso horário local, além de um tempo relativo como há 3 dias.',
      },
      {
        question: 'Como converto uma data em um timestamp Unix?',
        answer:
          'Use o seletor de data e hora no painel inferior e leia os segundos e milissegundos Unix exatos para a data selecionada no seu fuso horário local.',
      },
      {
        question: 'Por que meu timestamp mostra uma data em 1970?',
        answer:
          'Você provavelmente digitou um valor em milissegundos enquanto a ferramenta esperava segundos, ou um número muito pequeno. Um valor pequeno significa só alguns segundos depois do início da época de 1970.',
      },
      {
        question: 'Por que meu timestamp mostra uma data no ano 5000?',
        answer:
          'Você provavelmente digitou um valor em segundos enquanto a ferramenta o tratou como milissegundos, ou digitou milissegundos em um campo de segundos. Mude o seletor de unidade para a unidade certa e converta de novo.',
      },
      {
        question: 'Qual é o formato ISO 8601 para um timestamp Unix?',
        answer:
          'A ISO 8601 escreve uma data como AAAA-MM-DDTHH:MM:SS, por exemplo 2026-11-13T04:40:00.000Z. O Z no fim significa que o horário está em UTC.',
      },
      {
        question: 'Timestamps Unix incluem segundos bissextos?',
        answer:
          'Não. O tempo Unix conta cada dia como exatamente 86.400 segundos e ignora segundos bissextos, então ele se desvia levemente do tempo astronômico real ao longo de períodos longos.',
      },
      {
        question: 'Posso usar timestamps Unix para datas futuras?',
        answer:
          'Sim. Digite uma data futura no seletor de data para obter seu timestamp Unix, útil para definir tempos de expiração de cache, trabalhos agendados e dados de teste.',
      },
      {
        question: 'Qual é o timestamp Unix máximo?',
        answer:
          'Em sistemas de 32 bits, o limite clássico é 2.147.483.647 segundos, que é 19 de janeiro de 2038. Sistemas modernos de 64 bits lidam com valores bem maiores, e esta ferramenta os aceita.',
      },
      {
        question: 'Como verifico um timestamp de expiração de JWT com este conversor?',
        answer:
          'Copie o claim exp do seu JWT decodificado e cole aqui. O conversor mostra a data e a hora UTC exatas em que o token expira.',
      },
      {
        question: 'O Conversor de Timestamp Unix funciona offline?',
        answer:
          'Sim, depois que a página carrega. A conversão é uma aritmética simples no seu navegador, e o relógio ao vivo lê o horário do seu sistema, então nenhuma conexão de rede é necessária.',
      },
      {
        question: 'Qual é a diferença entre UTC e hora local nos resultados?',
        answer:
          'UTC é o horário de referência universal sem deslocamento, enquanto a hora local aplica o deslocamento do seu fuso horário. Ambos descrevem o mesmo instante, só mostrados em zonas diferentes.',
      },
      {
        question: 'Posso converter um timestamp Unix de um banco de dados ou arquivo de registro?',
        answer:
          'Sim. Copie o timestamp inteiro da sua linha de banco de dados ou linha de registro e cole aqui para ver a data legível, o que deixa a depuração bem mais rápida.',
      },
      {
        question: 'Meus dados de timestamp são enviados a um servidor?',
        answer:
          'Não. A conversão acontece todo no seu navegador, então os timestamps e datas que você digita nunca saem do seu dispositivo.',
      },
    ],
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
    instructions: [
      {
        title: 'Cole sua consulta SQL',
        description:
          'Insira qualquer consulta SELECT, INSERT, UPDATE, DELETE ou DDL em Consulta SQL Bruta, incluindo instruções com várias linhas ou em uma linha.',
      },
      {
        title: 'Escolha o modo Embelezar ou Minificar',
        description:
          'Selecione Embelezar para expandir a consulta em cláusulas indentadas legíveis, ou Minificar para condensá-la em uma única linha para registros e código.',
      },
      {
        title: 'Defina a caixa das palavras-chave e a indentação',
        description:
          'Escolha palavras-chave SQL em MAIÚSCULAS ou minúsculas e indentação de 2 ou 4 espaços para combinar com o guia de estilo da sua equipe.',
      },
      {
        title: 'Revise a saída formatada',
        description:
          'Confira se as quebras de cláusula, JOINs e subconsultas estão alinhadas como esperado e se strings e comentários estão intocados.',
      },
      {
        title: 'Copie ou reutilize o SQL formatado',
        description:
          'Use Copiar SQL para transferir a consulta padronizada de volta para seu editor, arquivo de migração ou pull request.',
      },
      {
        title: 'Corrija problemas de formatação',
        description:
          'Se a saída parecer errada, verifique se há aspas sem balanceamento ou ponto e vírgula faltando na entrada, depois cole de novo e formate outra vez.',
      },
    ],
    examples: [
      {
        title: 'Formatando uma consulta com vários joins',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation:
          'Quebra as principais cláusulas SQL em linhas dedicadas e normaliza a caixa das palavras-chave.',
      },
      {
        title: 'Minificando uma consulta',
        input: 'SELECT id, nome\nFROM usuarios\nWHERE ativo = 1;',
        output: 'SELECT id, nome FROM usuarios WHERE ativo = 1;',
        explanation: 'Condensa uma consulta com várias linhas em uma única linha para código ou registros.',
      },
    ],
    benefits: [
      'Preserva literais de string entre aspas simples e comentários SQL intocados',
      'Suporta cláusulas com várias palavras como LEFT OUTER JOIN, GROUP BY e ORDER BY',
      'Alterna sem esforço entre os modos Embelezar e Minificar',
      'Roda localmente, então nomes proprietários de tabelas e esquemas ficam privados',
    ],
    useCases: [
      'Limpar registros SQL gerados por ORM para depuração de desempenho',
      'Padronizar scripts SQL antes de revisões de pull request',
      'Compactar consultas com várias linhas em strings de uma linha para scripts CLI',
      'Alinhar a caixa das palavras-chave nos guias de estilo SQL da equipe',
    ],
    faqs: [
      {
        question: 'O Formatador SQL vai alterar nomes de tabelas ou texto dentro de aspas?',
        answer:
          'Não. O tokenizador isola literais de string e comentários para que a formatação de caixa maiúscula/minúscula só se aplique a palavras-chave SQL reconhecidas.',
      },
      {
        question: 'Quais dialetos SQL são suportados?',
        answer:
          'Cláusulas SQL ANSI padrão (PostgreSQL, MySQL, SQLite, SQL Server), incluindo SELECT, JOINs, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE e DELETE, são suportadas.',
      },
      {
        question: 'Posso minificar uma consulta formatada de volta para uma linha?',
        answer:
          'Sim. Mude o botão de modo para Minificar para remover comentários e condensar espaços em branco extras com segurança.',
      },
      {
        question: 'O Formatador SQL é gratuito?',
        answer:
          'Sim. O Formatador SQL é totalmente gratuito, sem cadastro, e roda todo no seu navegador.',
      },
      {
        question: 'O Formatador SQL envia minhas consultas a um servidor?',
        answer:
          'Não. Toda a formatação acontece localmente no seu navegador, então nomes de tabelas, detalhes de esquema e valores de dados nas suas consultas nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso formatar SQL com subconsultas e CTEs?',
        answer:
          'Sim. Instruções SELECT aninhadas e expressões de tabela comuns (WITH ... AS) são formatadas com seus próprios níveis de indentação para a estrutura continuar legível.',
      },
      {
        question: 'O Formatador SQL lida com instruções INSERT, UPDATE e DELETE?',
        answer:
          'Sim. Instruções INSERT, UPDATE e DELETE são formatadas junto com consultas SELECT, com suas cláusulas quebradas em linhas separadas.',
      },
      {
        question: 'Posso formatar instruções DDL como CREATE TABLE?',
        answer:
          'Sim. Instruções DDL como CREATE TABLE, ALTER TABLE e DROP TABLE podem ser coladas e formatadas com as mesmas regras de caixa de palavras-chave e indentação.',
      },
      {
        question: 'Quais opções de indentação o Formatador SQL oferece?',
        answer:
          'Você pode escolher indentação de 2 ou 4 espaços para consultas embelezadas, para a saída combinar com seu editor ou guia de estilo da equipe.',
      },
      {
        question: 'A formatação muda o que minha consulta SQL faz?',
        answer:
          'Não. A formatação só muda espaços em branco e a caixa das palavras-chave; ela não adiciona, remove nem reordena nenhuma parte da lógica da consulta.',
      },
      {
        question: 'Posso formatar várias consultas SQL de uma vez?',
        answer:
          'Sim. Você pode colar várias instruções separadas por ponto e vírgula e formatá-las juntas em uma passada.',
      },
      {
        question: 'O Formatador SQL funciona com sintaxe MySQL, PostgreSQL e SQL Server?',
        answer:
          'Sim. Ele lida com o SQL ANSI padrão usado por MySQL, PostgreSQL, SQLite e SQL Server, incluindo suas palavras-chave comuns de cláusula.',
      },
      {
        question: 'Os comentários no meu SQL serão preservados ao formatar?',
        answer:
          'Sim. Comentários de linha única e de bloco são preservados pelo tokenizador, embora o modo Minificar remova comentários para produzir a menor saída.',
      },
      {
        question: 'O que acontece se meu SQL tiver um erro de sintaxe?',
        answer:
          'O formatador ainda processa o texto da melhor forma possível, já que trabalha com tokens em vez de executar a consulta, mas você deve corrigir o erro antes de rodar o SQL no seu banco de dados.',
      },
      {
        question: 'Posso minificar SQL para usar em código de aplicação ou registros?',
        answer:
          'Sim. O modo Minificar condensa uma consulta em uma linha preservando literais de string, o que é ideal para embutir SQL em código ou registrá-lo de forma compacta.',
      },
      {
        question: 'O Formatador SQL suporta funções de janela?',
        answer:
          'Sim. Funções de janela como ROW_NUMBER() OVER (PARTITION BY ...) são formatadas como parte da lista SELECT, com suas cláusulas OVER mantidas intactas.',
      },
      {
        question: 'Há um limite de tamanho no SQL que posso formatar?',
        answer:
          'Não há um limite fixo de caracteres na ferramenta, já que ela roda no seu navegador, embora consultas muito longas possam levar um momento em dispositivos mais lentos.',
      },
      {
        question: 'Posso usar o Formatador SQL no meu celular?',
        answer:
          'Sim. Funciona em qualquer navegador moderno de celular, então você pode colar e formatar SQL no seu celular ou tablet sem instalar nada.',
      },
      {
        question: 'O Formatador SQL preserva quebras de linha dentro de literais de string?',
        answer:
          'Sim. O texto dentro de literais de string entre aspas simples fica intocado, então strings com várias linhas mantêm suas quebras de linha originais.',
      },
      {
        question: 'Como padronizo a caixa das palavras-chave da minha equipe com o Formatador SQL?',
        answer:
          'Combine um estilo de caixa, como palavras-chave em MAIÚSCULAS, e passe cada consulta pelo formatador com essa configuração antes de enviá-la ao repositório.',
      },
    ],
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
    instructions: [
      {
        title: 'Selecione Minificar ou Embelezar',
        description:
          'Escolha Minificar CSS para reduzir o peso do arquivo para produção ou Embelezar CSS para restaurar a indentação de uma folha compactada.',
      },
      {
        title: 'Cole sua folha de estilo',
        description:
          'Digite regras CSS, propriedades personalizadas ou blocos `@media` em CSS de Entrada, incluindo folhas completas ou trechos únicos.',
      },
      {
        title: 'Rode a ferramenta e confira as estatísticas',
        description:
          'A saída se atualiza enquanto você digita; no modo Minificar, confira os bytes de entrada exatos, os bytes de saída e a porcentagem economizada.',
      },
      {
        title: 'Revise a saída com cuidado',
        description:
          'Confirme se blocos @media, strings entre aspas e valores url(...) sobreviveram intactos e se as regras aninhadas estão indentadas corretamente no modo Embelezar.',
      },
      {
        title: 'Copie ou baixe o CSS',
        description:
          'Clique em Copiar CSS para colar o resultado na sua folha de estilo, bloco <style> embutido ou etapa de build de implantação.',
      },
      {
        title: 'Corrija saída plana ou quebrada',
        description:
          'Se a saída do Embelezar parecer plana ou as regras se fundirem, verifique se falta uma chave de fechamento na entrada e adicione-a antes de tentar de novo.',
      },
    ],
    examples: [
      {
        title: 'Compactando uma regra de cartão',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation:
          'Remove quebras de linha, espaços ao redor da pontuação e o ponto e vírgula final dentro do bloco.',
      },
      {
        title: 'Embelezando CSS minificado',
        input: '.card{padding:16px;border:1px solid #e2e8f0}',
        output: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        explanation: 'Expande regras compactadas em blocos indentados e legíveis para depuração.',
      },
    ],
    benefits: [
      'O tokenizador preserva strings entre aspas (como content: "..." ou url(...))',
      'Remove comentários /* ... */ e espaços em branco desnecessários com segurança',
      'Mostra bytes de entrada exatos, bytes de saída e porcentagem economizada',
      'Inclui o modo Embelezar para inspecionar CSS minificado de terceiros',
    ],
    useCases: [
      'Compactar trechos <style> embutidos para e-mails HTML e páginas de destino',
      'Desminificar pacotes CSS de produção durante depuração visual',
      'Verificar a economia de peso da folha de estilo antes da implantação',
      'Limpar inconsistências de espaçamento em folhas de estilo legadas',
    ],
    faqs: [
      {
        question: 'A minificação de CSS quebra espaços dentro de strings content: "..."?',
        answer:
          'Não. Literais de string entre aspas simples e duplas são preservados literalmente pelo tokenizador.',
      },
      {
        question: 'Por que o Minificar remove o último ponto e vírgula antes de "}"?',
        answer:
          'Na sintaxe CSS, a declaração final antes de uma chave de fechamento não exige ponto e vírgula no fim, economizando 1 byte por bloco de regra.',
      },
      {
        question: 'Ele suporta blocos @media aninhados no modo Embelezar?',
        answer:
          'Sim. A profundidade das chaves é acompanhada nos blocos @media e @supports para que as regras internas indentem corretamente.',
      },
      {
        question: 'O Minificador de CSS é gratuito?',
        answer:
          'Sim. O Minificador de CSS é totalmente gratuito, sem cadastro, e roda todo no seu navegador.',
      },
      {
        question: 'O Minificador de CSS envia minha folha de estilo para algum lugar?',
        answer:
          'Não. Toda a minificação e embelezamento acontece localmente no seu navegador, então seu CSS nunca sai do seu dispositivo.',
      },
      {
        question: 'Quanto menor meu CSS vai ficar depois de minificar?',
        answer:
          'Depende de quantos comentários e espaços extras sua folha contém; a ferramenta mostra a contagem exata de bytes e a porcentagem economizada para sua entrada.',
      },
      {
        question: 'A minificação de CSS remove consultas @media?',
        answer:
          'Não. Consultas @media e suas condições são preservadas exatamente, já que removê-las mudaria como sua página responde a tamanhos de tela.',
      },
      {
        question: 'Posso minificar CSS que usa propriedades personalizadas (variáveis)?',
        answer:
          'Sim. Propriedades personalizadas como --brand-color e suas referências var() são tratadas como declarações normais e mantidas intactas.',
      },
      {
        question: 'O Minificador de CSS preserva url(...) e strings de content?',
        answer:
          'Sim. Strings entre aspas dentro de url(...) e propriedades content são preservadas literalmente, então caminhos de imagem e texto gerado ficam corretos.',
      },
      {
        question: 'O CSS minificado ainda funciona em todos os navegadores?',
        answer:
          'Sim. A minificação só remove comentários e espaços em branco desnecessários, que os navegadores ignoram de qualquer forma, então o resultado renderizado é idêntico.',
      },
      {
        question: 'Posso embelezar CSS de um pacote de produção?',
        answer:
          'Sim. Cole qualquer folha minificada no modo Embelezar para expandi-la em regras indentadas e legíveis para depuração.',
      },
      {
        question: 'O Minificador de CSS lida com @keyframes e @font-face?',
        answer:
          'Sim. At-rules como @keyframes, @font-face e @import são preservadas, com seus blocos internos indentados corretamente no modo Embelezar.',
      },
      {
        question: 'Qual é a diferença entre minificar e embelezar no Minificador de CSS?',
        answer:
          'Minificar reduz o CSS removendo comentários e espaços em branco para produção, enquanto Embelezar expande CSS compactado em regras indentadas legíveis para edição e depuração.',
      },
      {
        question: 'Posso minificar várias folhas de estilo de uma vez?',
        answer:
          'Sim. Você pode colar várias folhas juntas em uma entrada, embora manter arquivos relacionados separados deixe a saída mais fácil de gerenciar.',
      },
      {
        question: 'O Minificador de CSS remove regras CSS não usadas?',
        answer:
          'Não. Ele só remove comentários e espaços em branco; ele não analisa quais seletores seu HTML usa, então regras não usadas ficam na saída.',
      },
      {
        question: 'A porcentagem de economia em bytes mostrada pelo Minificador de CSS é exata?',
        answer:
          'Sim. Ela é calculada a partir das contagens reais de bytes da sua entrada e saída, então a porcentagem reflete sua economia real.',
      },
      {
        question: 'Posso usar o Minificador de CSS para trechos <style> embutidos?',
        answer:
          'Sim. Trechos pequenos minificam do mesmo jeito que folhas completas, o que é útil para e-mails HTML e páginas de destino com estilos embutidos.',
      },
      {
        question: 'O Minificador de CSS suporta CSS moderno como grid e aninhamento?',
        answer:
          'Sim. Propriedades modernas como grid e flexbox passam sem alteração, e regras aninhadas são indentadas por profundidade de chave no modo Embelezar.',
      },
      {
        question: 'O que acontece se meu CSS tiver um erro de sintaxe?',
        answer:
          'A ferramenta ainda processa o texto, mas uma chave faltando ou string sem fechar pode confundir a saída, então corrija erros de sintaxe antes de minificar para produção.',
      },
      {
        question: 'Posso minificar CSS no meu celular?',
        answer:
          'Sim. O Minificador de CSS funciona em qualquer navegador moderno de celular, então você pode colar e minificar folhas de estilo sem instalar nada.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha Minificar JS ou Embelezar JS',
        description:
          'Escolha Minificar JS para remover comentários e espaços em branco para uma saída compacta, ou Embelezar JS com 2 ou 4 espaços para restaurar indentação legível.',
      },
      {
        title: 'Cole seu trecho de código',
        description:
          'Insira código JavaScript ou TypeScript no editor esquerdo, de uma única função a um bloco de script completo.',
      },
      {
        title: 'Defina a indentação para o modo Embelezar',
        description:
          'Escolha indentação de 2 ou 4 espaços para que o código embelezado combine com seu editor ou estilo de projeto.',
      },
      {
        title: 'Revise a economia de bytes e a saída',
        description:
          'Verifique a redução de bytes no modo Minificar e examine a saída para confirmar se strings, template literals e padrões regex estão intactos.',
      },
      {
        title: 'Copie o código processado',
        description:
          'Use o botão de copiar para mover o código minificado ou embelezado para seu editor, bookmarklet ou script embutido.',
      },
      {
        title: 'Corrija problemas de minificação',
        description:
          'Se o código minificado se comportar de forma estranha, adicione primeiro os pontos e vírgulas que faltam na entrada, já que a inserção automática de ponto e vírgula pode ser ambígua depois que o espaço em branco é removido.',
      },
    ],
    examples: [
      {
        title: 'Removendo comentários e espaços em branco',
        input: '// Auxiliar\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation:
          'Remove comentários e espaços ao redor das chaves sem tocar na lógica.',
      },
      {
        title: 'Embelezando código minificado',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation: 'Restaura a indentação legível de um trecho compactado em uma linha.',
      },
    ],
    benefits: [
      'O tokenizador léxico protege strings simples, duplas e template literals com crase',
      'Remove comentários // de linha única e /* */ de bloco no modo Minificar',
      'Relata a porcentagem de redução de bytes ao vivo',
      'Execução rápida só no navegador, sem código enviado para fora',
    ],
    useCases: [
      'Preparar scripts embutidos compactos ou bookmarklets',
      'Descompactar trechos de uma linha para legibilidade',
      'Remover comentários de desenvolvedor antes de compartilhar exemplos de código',
      'Reindentar rapidamente funções JS coladas',
    ],
    faqs: [
      {
        question: 'Esta ferramenta renomeia variáveis (mangle) como Terser ou esbuild?',
        answer:
          'Não. Ela faz minificação segura de espaços em branco e comentários sem renomear identificadores nem alterar a semântica da AST, deixando a saída fácil de inspecionar.',
      },
      {
        question: 'Literais de string com "//" (como URLs) são seguros?',
        answer:
          'Sim. Strings entre aspas e template literals são tokenizados antes da detecção de comentários, então URLs dentro de aspas nunca são tratadas como comentários.',
      },
      {
        question: 'Devo usar ponto e vírgula ao minificar JS com várias instruções?',
        answer:
          'Incluir pontos e vírgulas padrão é recomendado antes de minificar qualquer trecho JavaScript para evitar ambiguidades de ASI (Inserção Automática de Ponto e Vírgula).',
      },
      {
        question: 'O Minificador de JavaScript é gratuito?',
        answer:
          'Sim. O Minificador de JavaScript é totalmente gratuito, sem cadastro, e roda todo no seu navegador.',
      },
      {
        question: 'O Minificador de JavaScript envia meu código a um servidor?',
        answer:
          'Não. Toda a minificação e formatação acontece localmente no seu navegador, então seu código nunca sai do seu dispositivo.',
      },
      {
        question: 'O Minificador de JavaScript funciona com código TypeScript?',
        answer:
          'Sim. Trechos TypeScript podem ser colados e minificados ou embelezados do mesmo jeito, já que o tokenizador lida com sintaxe padrão de JS e TS.',
      },
      {
        question: 'Minificar vai quebrar meu JavaScript?',
        answer:
          'Não, desde que seu código use pontos e vírgulas padrão. Só comentários e espaços em branco extras são removidos, então a lógica fica idêntica.',
      },
      {
        question: 'O Minificador de JavaScript remove instruções console.log?',
        answer:
          'Não. Ele só remove comentários e espaços em branco, então chamadas console.log e outras instruções continuam na saída.',
      },
      {
        question: 'Posso embelezar código minificado de um pacote de produção?',
        answer:
          'Sim. Cole código compacto de uma linha no modo Embelezar para reindentá-lo em linhas legíveis para depuração.',
      },
      {
        question: 'O Minificador de JavaScript lida com template literals com expressões ${}?',
        answer:
          'Sim. Template literals com crase, incluindo interpolações ${}, são tokenizados como strings e preservados exatamente.',
      },
      {
        question: 'Qual é a diferença entre minificar e embelezar no Minificador de JavaScript?',
        answer:
          'Minificar remove comentários e espaços em branco para reduzir o código para uso embutido, enquanto Embelezar reindenta código compacto em linhas legíveis para edição.',
      },
      {
        question: 'Posso minificar código ES6 com arrow functions e classes?',
        answer:
          'Sim. Arrow functions, classes, desestruturação e outras sintaxes ES6 modernas são tratadas pelo tokenizador sem mudar o código.',
      },
      {
        question: 'O Minificador de JavaScript suporta JSX ou código React?',
        answer:
          'JSX não é suportado especificamente, já que colchetes angulares em JSX podem ser lidos errado pelo tokenizador. Use-o para JavaScript ou TypeScript simples e um formatador dedicado para JSX.',
      },
      {
        question: 'Quanto menor meu JavaScript vai ficar depois de minificar?',
        answer:
          'Depende de quantos comentários e quebras de linha seu código tem; a ferramenta mostra a contagem exata de bytes e a porcentagem economizada para seu trecho.',
      },
      {
        question: 'Posso minificar vários arquivos JavaScript de uma vez?',
        answer:
          'A ferramenta processa um trecho por vez, então cole cada arquivo separadamente. Para projetos inteiros, use um bundler como esbuild ou Terser.',
      },
      {
        question: 'O Minificador de JavaScript preserva expressões regulares?',
        answer:
          'Sim. Literais de expressão regular são reconhecidos pelo tokenizador e mantidos intactos, incluindo quaisquer caracteres // dentro do padrão.',
      },
      {
        question: 'O que acontece se meu JavaScript tiver um erro de sintaxe?',
        answer:
          'A ferramenta ainda processa o texto, mas chaves sem balanceamento ou strings sem fechar podem produzir saída estranha, então corrija erros de sintaxe antes de minificar.',
      },
      {
        question: 'Posso usar o Minificador de JavaScript para bookmarklets?',
        answer:
          'Sim. O modo Minificar é ideal para bookmarklets, já que condensa um trecho em uma única linha compacta que você pode colar em uma URL de favorito.',
      },
      {
        question: 'A saída minificada é segura para colar em uma tag script HTML?',
        answer:
          'Geralmente sim, mas evite uma sequência literal "</script>" dentro das suas strings, já que o navegador a trataria como o fim do bloco de script.',
      },
      {
        question: 'Posso formatar JavaScript no meu celular?',
        answer:
          'Sim. O Minificador de JavaScript funciona em qualquer navegador moderno de celular, então você pode colar e formatar código sem instalar nada.',
      },
    ],
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
        'Analise expressões cron de 5 campos em português simples, inspecione cada campo, teste presets comuns e pré-visualize as próximas 8 execuções — grátis.',
      primaryKeyword: 'analisador de expressão cron',
      secondaryKeywords: ['alternativa ao crontab guru', 'prévia de agendamento cron', 'construtor de cron', 'testador de expressão cron'],
      longTailKeywords: ['traduzir expressão cron de 5 campos para português simples', 'calcular próximos 8 timestamps de execução cron', 'testar expressões cron de dia da semana e passo online', 'expressão cron todos os dias úteis às 9h exemplo'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Decodifique expressões crontab Unix de 5 campos (`minuto hora dia-do-mês mês dia-da-semana`) em resumos claros e legíveis, verifique intervalos de campos e inspecione os próximos 8 timestamps de execução agendada.',
    instructions: [
      {
        title: 'Digite uma expressão cron de 5 campos ou escolha um preset',
        description:
          'Digite qualquer expressão cron, como `0 9 * * 1-5`, ou clique em um botão de preset de agendamento comum para começar de um padrão conhecido.',
      },
      {
        title: 'Confira o resumo em português simples e o detalhamento dos campos',
        description:
          'Verifique se os campos de minuto, hora, dia do mês, mês e dia da semana correspondem à sua intenção antes de confiar no agendamento.',
      },
      {
        title: 'Verifique as próximas 8 execuções',
        description:
          'Revise os próximos timestamps de execução locais calculados para confirmar se a tarefa roda quando você espera.',
      },
      {
        title: 'Ajuste campos com passos, intervalos e listas',
        description:
          'Refine o agendamento usando valores de passo como */15, intervalos como 1-5 ou listas como 1,15, depois confira o resumo e os horários de execução de novo.',
      },
      {
        title: 'Copie a expressão para seu agendador',
        description:
          'Copie a expressão verificada para seu crontab, workflow do GitHub Actions ou gatilho de cron do Cloudflare Worker.',
      },
      {
        title: 'Cuidado com dia do mês vs. dia da semana',
        description:
          'Se os dois campos de dia forem restritos, o cron padrão roda quando qualquer um deles corresponder. Use * em um deles se quiser que só uma condição se aplique.',
      },
    ],
    examples: [
      {
        title: 'Tarefa matinal em horário comercial',
        input: '0 9 * * 1-5',
        output: 'Às 09:00, nos dias da semana 1-5 (segunda a sexta).',
        explanation:
          'Roda às 09:00 de segunda a sexta-feira.',
      },
      {
        title: 'A cada 15 minutos',
        input: '*/15 * * * *',
        output: 'A cada 15 minutos, todos os dias.',
        explanation: 'O passo */15 no campo de minuto agenda a tarefa quatro vezes por hora.',
      },
    ],
    benefits: [
      'Suporta curingas (*), passos (*/5), intervalos (1-5), listas (1,15) e nomes (SEG-SEX)',
      'Calcula os próximos 8 timestamps de execução concretos no seu fuso horário local',
      'Sinaliza valores fora do intervalo ou campos faltando na hora',
      'Inclui presets de um clique para intervalos comuns',
    ],
    useCases: [
      'Verificar `schedule.cron` do GitHub Actions e Gatilhos de Cron do Cloudflare Workers',
      'Depurar agendamentos crontab de backup ou limpeza no Linux',
      'Conferir a lógica de dia da semana (0–6) vs. dia do mês (1–31)',
      'Documentar agendamentos de tarefas recorrentes para runbooks de operações',
    ],
    faqs: [
      {
        question: 'Este analisador suporta expressões cron de 6 campos com segundos?',
        answer:
          'Esta ferramenta analisa expressões crontab Unix padrão de 5 campos (minuto, hora, dia do mês, mês, dia da semana), usadas pelo cron do Linux, GitHub Actions e Cloudflare Workers.',
      },
      {
        question: 'O que acontece se Dia do Mês e Dia da Semana forem ambos não curinga?',
        answer:
          'Seguindo o comportamento padrão do cron Vixie/Unix, quando os dois campos de dia são restritos, uma execução dispara se Dia do Mês OU Dia da Semana corresponder.',
      },
      {
        question: 'Nomes SEG–SEX e JAN–DEZ são suportados?',
        answer:
          'Sim. Abreviações padrão de 3 letras em inglês para meses e dias da semana, além dos números 0 ou 7 para domingo, são suportadas.',
      },
      {
        question: 'O Analisador de Expressão Cron é gratuito?',
        answer:
          'Sim. O Analisador de Expressão Cron é totalmente gratuito, sem cadastro, e roda todo no seu navegador.',
      },
      {
        question: 'O que é uma expressão cron?',
        answer:
          'Uma expressão cron é uma string compacta de agendamento de 5 campos que diz a um sistema quando rodar uma tarefa automaticamente, como a cada hora ou todos os dias úteis às 9h.',
      },
      {
        question: 'O que os 5 campos de uma expressão cron significam?',
        answer:
          'Da esquerda para a direita, eles são minuto (0-59), hora (0-23), dia do mês (1-31), mês (1-12) e dia da semana (0-7, onde 0 e 7 significam domingo).',
      },
      {
        question: 'Como rodo uma tarefa cron a cada 5 minutos?',
        answer:
          'Use a sintaxe de passo no campo de minuto: */5 * * * * roda a tarefa a cada 5 minutos, às :00, :05, :10 e assim por diante.',
      },
      {
        question: 'Como agendo uma tarefa cron às 9h em dias úteis?',
        answer:
          'Use 0 9 * * 1-5, que significa minuto 0, hora 9, qualquer dia do mês, qualquer mês e dias úteis de segunda a sexta-feira.',
      },
      {
        question: 'O que */15 significa em uma expressão cron?',
        answer:
          'A sintaxe de passo */15 significa a cada 15 unidades daquele campo, então */15 no campo de minuto roda uma tarefa a cada 15 minutos.',
      },
      {
        question: 'Qual é a diferença entre 0 e 7 para domingo no cron?',
        answer:
          'Não há diferença; 0 e 7 representam domingo no campo de dia da semana, então você pode usar o que preferir.',
      },
      {
        question: 'Posso usar este Analisador de Expressão Cron para agendamentos do GitHub Actions?',
        answer:
          'Sim. O GitHub Actions usa a mesma sintaxe cron de 5 campos, então você pode verificar um agendamento aqui antes de colá-lo no seu arquivo de workflow.',
      },
      {
        question: 'O Analisador de Expressão Cron leva meu fuso horário em conta?',
        answer:
          'As próximas 8 execuções são mostradas no fuso horário local do seu navegador, mas lembre-se de que o cron em si roda no fuso horário do servidor, então confira também as configurações do seu servidor.',
      },
      {
        question: 'O que acontece se eu digitar uma expressão cron inválida?',
        answer:
          'O analisador sinaliza valores fora do intervalo ou campos faltando na hora, para você corrigir a expressão antes de implantá-la.',
      },
      {
        question: 'Posso agendar uma tarefa cron para o último dia do mês?',
        answer:
          'O cron padrão de 5 campos não tem sintaxe de último dia. Uma solução comum é agendar nos dias 28-31 e deixar a própria tarefa verificar se é o último dia.',
      },
      {
        question: 'O que L e W significam em uma expressão cron?',
        answer:
          'L (last, último) e W (weekday, dia útil) são extensões no estilo Quartz, não fazem parte do cron Unix padrão, então não são suportadas por este analisador.',
      },
      {
        question: 'Como rodo uma tarefa cron duas vezes por dia?',
        answer:
          'Liste as duas horas no campo de hora, por exemplo 0 6,18 * * * roda a tarefa às 6h e às 18h todos os dias.',
      },
      {
        question: 'O Analisador de Expressão Cron suporta segundos ou expressões de 6 campos?',
        answer:
          'Não. Ele suporta só expressões Unix padrão de 5 campos; agendadores que precisam de segundos usam um formato diferente de 6 campos.',
      },
      {
        question: 'Posso pré-visualizar execuções cron para um intervalo de datas específico?',
        answer:
          'A ferramenta pré-visualiza as próximas 8 execuções a partir de agora. Ela não oferece uma visão personalizada de intervalo de datas, mas as próximas 8 execuções geralmente revelam erros de agendamento.',
      },
      {
        question: 'Por que minha tarefa cron roda em dias inesperados?',
        answer:
          'A causa mais comum é restringir dia do mês e dia da semana ao mesmo tempo, o que dispara uma execução quando qualquer um deles corresponder. Defina um deles como * para corrigir.',
      },
      {
        question: 'Posso usar presets de cron para agendamentos comuns?',
        answer:
          'Sim. A ferramenta inclui presets de um clique para intervalos comuns, como a cada hora, diário, semanal e mensal, que você pode personalizar depois.',
      },
    ],
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
    instructions: [
      {
        title: 'Escolha ou digite uma cor',
        description:
          'Use o seletor de cores, digite um código HEX de 3 ou 6 dígitos, ou ajuste canais individuais R/G/B ou H/S/L para definir sua cor de primeiro plano.',
      },
      {
        title: 'Revise os valores HEX, RGB e HSL',
        description:
          'Confira os valores sincronizados nas três notações e confirme se a amostra ao vivo corresponde à cor pretendida.',
      },
      {
        title: 'Copie os valores de cor CSS',
        description:
          'Clique em Copiar HEX, Copiar RGB ou Copiar HSL para pegar strings CSS prontas para sua folha de estilo ou tokens de design.',
      },
      {
        title: 'Selecione uma cor de fundo',
        description:
          'Escolha uma cor de fundo abaixo para compará-la com sua cor de primeiro plano na verificação de contraste.',
      },
      {
        title: 'Confira os resultados de contraste WCAG',
        description:
          'Leia a proporção exata de contraste e o status Aprovado/Reprovado para AA Normal, AAA Normal e AA Texto Grande antes de lançar o par.',
      },
      {
        title: 'Corrija um par de contraste reprovado',
        description:
          'Se o par reprovar, diminua a Luminosidade no HSL para escurecer o texto (ou clarear o fundo) até a proporção chegar a pelo menos 4,5:1 para texto normal.',
      },
    ],
    examples: [
      {
        title: 'Azul cobalto acessível sobre branco',
        input: 'Primeiro plano: #2563EB · Fundo: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Contraste: 5,17:1 (AA Aprovado)',
        explanation:
          'Atende ao requisito WCAG AA de 4,5:1 para texto de corpo padrão.',
      },
      {
        title: 'Texto escuro sobre fundo claro',
        input: 'Primeiro plano: #1F2937 · Fundo: #F9FAFB',
        output: 'Contraste: ~14,8:1 (AA e AAA Aprovado)',
        explanation: 'Um par de alto contraste passa nos níveis AA e AAA para texto normal.',
      },
    ],
    benefits: [
      'Sincroniza os canais HEX, RGB e HSL nos dois sentidos em tempo real',
      'Calculadora embutida de contraste de luminância relativa WCAG 2.1',
      'Testa os limites AA Normal (4,5:1), AAA Normal (7,0:1) e AA Texto Grande (3,0:1)',
      'Cópia com um clique de strings de cor CSS válidas',
    ],
    useCases: [
      'Verificar o contraste de texto de botões e links durante a implementação de interface',
      'Converter paletas HEX de marca em HSL para Tailwind ou variáveis CSS',
      'Ajustar luminosidade e saturação sem sair do navegador',
      'Auditar conformidade de acessibilidade antes da entrega do design',
    ],
    faqs: [
      {
        question: 'Qual proporção de contraste é exigida para texto de corpo WCAG 2.1 AA?',
        answer:
          'O WCAG 2.1 AA exige pelo menos 4,5:1 para texto normal e 3,0:1 para texto grande (18pt / 24px normal ou 14pt / 18,66px negrito).',
      },
      {
        question: 'Posso digitar códigos HEX abreviados de 3 dígitos como #09f?',
        answer:
          'Sim. Códigos HEX de três caracteres expandem automaticamente para seus equivalentes de 6 caracteres.',
      },
      {
        question: 'Por que o HSL facilita o ajuste de temas em relação ao RGB?',
        answer:
          'O HSL separa Matiz, Saturação e Luminosidade, permitindo escurecer ou clarear uma cor de marca mudando só a porcentagem de Luminosidade.',
      },
      {
        question: 'O Conversor de Cores é gratuito?',
        answer:
          'Sim. O Conversor de Cores é totalmente gratuito, sem cadastro, e roda todo no seu navegador.',
      },
      {
        question: 'O Conversor de Cores armazena minhas cores?',
        answer:
          'Não. Conversões e verificações de contraste acontecem localmente no seu navegador, então suas escolhas de paleta nunca são enviadas nem armazenadas.',
      },
      {
        question: 'Como converto HEX para RGB com o Conversor de Cores?',
        answer:
          'Digite um código HEX como #2563EB e o valor RGB aparece na hora, pronto para copiar como uma string CSS rgb().',
      },
      {
        question: 'Como converto RGB para HSL?',
        answer:
          'Digite os valores RGB ou ajuste os canais R, G e B, e o valor HSL correspondente se atualiza ao vivo no mesmo painel.',
      },
      {
        question: 'Qual é a diferença entre HEX, RGB e HSL?',
        answer:
          'HEX é um código compacto para uma cor, RGB a define por quantidades de vermelho, verde e azul, e HSL a define por matiz, saturação e luminosidade. Eles descrevem a mesma cor em notações diferentes.',
      },
      {
        question: 'Qual proporção de contraste preciso para WCAG AAA?',
        answer:
          'O WCAG AAA exige pelo menos 7,0:1 para texto normal e 4,5:1 para texto grande, o que é mais rigoroso que o nível AA.',
      },
      {
        question: 'O que conta como texto grande para contraste WCAG?',
        answer:
          'Texto grande é 18pt (24px) ou maior em peso normal, ou 14pt (18,66px) ou maior em peso negrito. Texto grande só precisa de uma proporção de 3,0:1 para AA.',
      },
      {
        question: 'Posso converter uma cor com transparência (alfa) no Conversor de Cores?',
        answer:
          'Este conversor lida com cores sólidas sem canal alfa. Para transparência, pegue os valores RGB convertidos e use-os dentro de uma função rgba().',
      },
      {
        question: 'O Conversor de Cores suporta códigos HEX de 8 dígitos com alfa?',
        answer:
          'Não. O conversor aceita códigos HEX padrão de 3 e 6 dígitos; para transparência, use a saída RGB com um valor alfa em rgba().',
      },
      {
        question: 'Posso escolher uma cor de uma imagem com o Conversor de Cores?',
        answer:
          'Não. A ferramenta não amostra imagens; digite o valor HEX da cor que você quer ou escolha-o com o seletor de cores embutido.',
      },
      {
        question: 'Como a proporção de contraste WCAG é calculada?',
        answer:
          'Ela é calculada a partir da luminância relativa das cores de primeiro e segundo plano usando a fórmula definida na especificação WCAG 2.1.',
      },
      {
        question: 'Por que minha cor de marca reprova o AA sobre branco?',
        answer:
          'Cores de marca claras ou de tom médio costumam ficar abaixo do limite de 4,5:1 contra branco. Escureça a cor ou use-a só para texto grande e elementos decorativos.',
      },
      {
        question: 'Posso copiar cores como variáveis CSS do Conversor de Cores?',
        answer:
          'Sim. Copie o valor HEX, RGB ou HSL e cole-o em uma propriedade personalizada CSS, por exemplo --brand: #2563EB, depois referencie-o com var(--brand).',
      },
      {
        question: 'Qual é a diferença entre HSL e HSV?',
        answer:
          'O HSL descreve uma cor por matiz, saturação e luminosidade, enquanto o HSV usa matiz, saturação e valor (brilho). O HSL geralmente é mais fácil para criar variantes de tema claro e escuro acessíveis.',
      },
      {
        question: 'Posso converter cores CSS nomeadas como "red" no Conversor de Cores?',
        answer:
          'Digite o valor HEX da cor nomeada, por exemplo red é #FF0000. A ferramenta aceita entrada HEX, RGB e HSL.',
      },
      {
        question: 'Como encontro um tom mais escuro da minha cor de marca?',
        answer:
          'Converta a cor para HSL, mantenha o matiz e a saturação iguais e diminua a porcentagem de Luminosidade até chegar ao tom que você quer.',
      },
      {
        question: 'Posso usar o Conversor de Cores no meu celular?',
        answer:
          'Sim. O Conversor de Cores funciona em qualquer navegador moderno de celular, então você pode converter cores e verificar contraste sem instalar nada.',
      },
    ],
  },
};
