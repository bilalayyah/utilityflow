import type { ToolLocaleOverride } from '../../types';

/**
 * Portuguese (pt-BR) overrides — Batch 4: Social (10) + PDF (10) tools (20 tools).
 * Filled by Phase 2 translation. Sources: src/registry/batches/batch4/
 * (socialToolsPart1/2) and batch5/ (pdfToolsPart1/2); Spanish twin
 * src/locales/es/tools/batch4.ts (same tool ids and structure, content
 * translated from English). Slugs are unique, lowercase, hyphenated, with
 * no collision against English slugs or reserved paths.
 */
export const PT_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'gerador-de-codigo-qr',
    name: 'Gerador de Código QR',
    shortDescription:
      'Gere códigos QR personalizados e escaneáveis para URLs, texto, logins de Wi-Fi, e-mails ou números de telefone, com exportação em PNG e SVG.',
    keywords: [
      'gerador de código qr',
      'criador de qr code grátis',
      'qr code de wifi',
      'gerador de qr code svg',
      'criar código qr online',
      'código qr para senha de wifi',
      'download de qr code png',
      'gerador de código qr grátis sem cadastro',
      'criador de código qr para cartão de visita',
    ],
    seo: {
      title: 'Gerador de Código QR – QR Grátis PNG e SVG | UtilityFlow',
      description:
        'Crie códigos QR estáticos grátis para URLs, Wi-Fi, texto, e-mails e telefones no seu navegador — sem cadastro, sem validade — e baixe PNG ou SVG nítidos.',
      primaryKeyword: 'gerador de código qr',
      secondaryKeywords: [
        'gerador de qr code de wifi',
        'criador de qr code svg',
        'código qr personalizado com cores',
        'criador de qr code para impressão',
      ],
      longTailKeywords: [
        'gerar código qr estático sem validade nem rastreamento',
        'criar código qr de wifi escaneável no navegador',
        'baixar código qr svg vetorial grátis',
        'criar código qr para cartão de visita grátis online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Codifique URLs de sites, credenciais de Wi-Fi, texto, links de e-mail ou números de telefone em códigos QR nítidos padrão ISO direto no seu navegador — sem limite de validade, sem rastreamento de redirecionamento e com downloads instantâneos em PNG ou SVG vetorial.',
    instructions: [
      {
        title: 'Escolha o formato do conteúdo',
        description:
          'Selecione URL de Site, Texto Simples, Rede Wi-Fi, Link de E-mail ou Número de Telefone no topo.',
      },
      {
        title: 'Digite seu conteúdo',
        description:
          'Digite ou cole sua URL, texto ou dados de contato. Para Wi-Fi, some o nome da rede (SSID), o tipo de segurança e a senha.',
      },
      {
        title: 'Personalize a aparência e a correção de erros',
        description:
          'Ajuste o tamanho em pixels, a margem de zona silenciosa, as cores de primeiro plano/fundo em hexadecimal e o nível de correção de erros (L–H).',
      },
      {
        title: 'Confira a prévia e teste o código',
        description:
          'Veja a prévia ao vivo e escaneie com a câmera do seu celular antes de baixar para confirmar que ele abre o destino certo.',
      },
      {
        title: 'Baixe em PNG ou SVG vetorial',
        description:
          'Exporte um PNG nítido para gráficos sociais ou copie/baixe o arquivo SVG escalável para materiais impressos.',
      },
      {
        title: 'Corrija um código que não escaneia',
        description:
          'Aumente o contraste do primeiro plano, amplie o código, aumente o nível de correção de erros ou alargue a margem de zona silenciosa e teste novamente.',
      },
    ],
    examples: [
      {
        title: 'Conteúdo de QR de Wi-Fi para convidados',
        input: 'SSID: GuestWiFi · Segurança: WPA',
        output: 'WIFI:T:WPA;S:GuestWiFi;P:...;H:false;;',
        explanation: 'As câmeras de iOS e Android reconhecem automaticamente conteúdos padrão de QR de WIFI para entrar sem digitar.',
      },
      {
        title: 'Código QR de URL de site',
        input: 'URL: https://utilityflow.online/',
        output: 'https://utilityflow.online/ (código QR estático)',
        explanation: 'O link é codificado direto no padrão, sem encurtador nem redirecionamento.',
      },
    ],
    benefits: [
      'Códigos QR estáticos nunca expiram e nunca direcionam usuários por redirecionamentos de rastreamento de terceiros',
      'Gera SVG vetorial sem perdas junto com imagens PNG de alta resolução',
      'Suporta formatação de QR de Wi-Fi WPA/WEP/aberta de forma limpa, com escape de caracteres especiais',
      'Mantém URLs privadas e senhas de Wi-Fi estritamente na memória do navegador',
    ],
    useCases: [
      'Vincular folhetos impressos, pôsteres ou cartões de visita a páginas de destino com tags UTM',
      'Criar placas escaneáveis de QR de Wi-Fi para convidados em escritórios, estúdios ou eventos',
      'Adicionar links instantâneos de contato ou portfólio a apresentações e embalagens',
      'Exportar códigos QR em SVG nítidos para ferramentas de design de impressão de alta DPI',
    ],
    faqs: [
      {
        question: 'Os códigos QR criados aqui expiram após um período de teste?',
        answer:
          'Não. São códigos QR estáticos cujos dados são codificados direto dentro do padrão em preto e branco, então funcionam para sempre, sem dependência de servidor nem limite de escaneamentos.',
      },
      {
        question: 'Qual nível de correção de erros devo escolher?',
        answer:
          'O nível M (15%) equilibra densidade compacta com confiabilidade para telas digitais limpas ou folhetos. Escolha Q (25%) ou H (30%) para adesivos externos ou superfícies impressas mais ásperas.',
      },
      {
        question: 'Por que o contraste do primeiro plano deve ficar alto?',
        answer:
          'As câmeras de celular dependem de um forte contraste de luminosidade entre os módulos escuros e o fundo claro; mantenha cores escuras de primeiro plano sobre fundos claros com pelo menos uma margem silenciosa de 2 módulos.',
      },
      {
        question: 'O Gerador de Código QR é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, sem marca d’água e sem limite de quantos códigos QR você cria ou baixa.',
      },
      {
        question: 'Preciso de uma conta para criar um código QR?',
        answer:
          'Não precisa de conta. Tudo funciona localmente no seu navegador, então você pode gerar e baixar um código QR imediatamente.',
      },
      {
        question: 'Que tipos de conteúdo posso codificar em um código QR?',
        answer:
          'Você pode codificar URLs de sites, texto simples, credenciais de rede Wi-Fi, links de e-mail e números de telefone que abrem o discador ao serem escaneados.',
      },
      {
        question: 'Posso criar um código QR para minha senha de Wi-Fi?',
        answer:
          'Sim. Escolha o formato Rede Wi-Fi, digite o nome da rede (SSID), o tipo de segurança como WPA e a senha, e os convidados podem entrar escaneando em vez de digitar.',
      },
      {
        question: 'Qual é a diferença entre os downloads em PNG e SVG?',
        answer:
          'O PNG é uma imagem raster de resolução fixa, melhor para telas e posts sociais, enquanto o SVG é um arquivo vetorial que escala para qualquer tamanho sem perder nitidez, ideal para impressão.',
      },
      {
        question: 'Meu código QR ainda vai funcionar se eu imprimi-lo pequeno?',
        answer:
          'Depende de quantos dados ele contém e da qualidade de impressão. URLs curtas escaneiam com confiabilidade em tamanhos pequenos, enquanto códigos densos precisam ser impressos maiores, com uma zona silenciosa clara.',
      },
      {
        question: 'O que o nível de correção de erros faz?',
        answer:
          'A correção de erros adiciona redundância para que o código ainda escaneie se parte dele for riscada, suja ou coberta. Níveis mais altos sobrevivem a mais danos, mas deixam o padrão mais denso.',
      },
      {
        question: 'Posso mudar as cores do meu código QR?',
        answer:
          'Sim, você pode definir cores personalizadas de primeiro plano e fundo em hexadecimal. Mantenha módulos escuros sobre fundo claro para que as câmeras de celular ainda leiam o padrão com confiabilidade.',
      },
      {
        question: 'O que é a zona silenciosa e por que ela importa?',
        answer:
          'A zona silenciosa é a margem em branco ao redor do código que ajuda os scanners a encontrar suas bordas. Mantenha uma margem de pelo menos 4 módulos de largura e nunca coloque texto ou logotipos dentro dela.',
      },
      {
        question: 'Os códigos QR feitos aqui rastreiam escaneamentos?',
        answer:
          'Não. São códigos estáticos sem servidor de redirecionamento por trás, então ninguém consegue ver quando ou onde eles são escaneados.',
      },
      {
        question: 'Posso usar estes códigos QR em cartões de visita e folhetos?',
        answer:
          'Sim. Baixe a versão SVG para impressão nítida em cartões, pôsteres e embalagens, e use o PNG para sites, slides e gráficos sociais.',
      },
      {
        question: 'Por que meu celular não escaneia o código QR?',
        answer:
          'Baixo contraste, um código impresso pequeno demais, reflexo ou dano são as causas habituais. Tente um primeiro plano mais escuro, um tamanho maior, um nível de correção de erros mais alto e uma zona silenciosa mais larga.',
      },
      {
        question: 'O código QR funciona offline depois que eu o baixo?',
        answer:
          'Sim. Os dados são codificados direto no próprio padrão, então um código baixado escaneia e funciona sem nenhuma conexão com este site.',
      },
      {
        question: 'Posso codificar um número de telefone para abrir o discador?',
        answer:
          'Sim. Escolha o formato Número de Telefone e o código cria um link tel:, então escaneá-lo no celular abre o discador com o número pronto para ligar.',
      },
      {
        question: 'Posso codificar um endereço de e-mail para abrir uma nova mensagem?',
        answer:
          'Sim. O formato Link de E-mail cria um link mailto:, então escaneá-lo abre o aplicativo de e-mail com seu endereço pré-preenchido como destinatário.',
      },
      {
        question: 'Minha senha de Wi-Fi está segura quando gero um código QR aqui?',
        answer:
          'Sim. O código é gerado por completo no seu navegador e nada do que você digita é enviado ou guardado em nenhum servidor.',
      },
      {
        question: 'Em que tamanho devo baixar o PNG para impressão?',
        answer:
          'Escolha o maior tamanho em pixels disponível para trabalho de impressão e prefira o SVG para qualquer coisa maior que um folheto, já que a saída vetorial fica nítida em qualquer tamanho.',
      },
    ],
  },
  'utm-link-builder': {
    slug: 'criador-de-links-utm',
    name: 'Criador de Links UTM',
    shortDescription:
      'Crie URLs limpas de rastreamento de campanha com os parâmetros utm_source, utm_medium, utm_campaign, utm_term e utm_content.',
    keywords: [
      'criador de links utm',
      'criador de url de campanha',
      'gerador de utm',
      'utm do google analytics',
      'criador de utm grátis',
      'gerador de parâmetros utm',
      'criador de link de rastreamento de campanha',
      'gerador de link utm para instagram',
      'gerador de link utm para e-mail',
    ],
    seo: {
      title: 'Criador de Links UTM – Rastreio de Campanha | UtilityFlow',
      description:
        'Crie URLs de campanha UTM consistentes para redes sociais, e-mail e anúncios com predefinições e normalização em minúsculas — grátis, no seu navegador.',
      primaryKeyword: 'criador de links utm',
      secondaryKeywords: [
        'criador de url de campanha',
        'gerador de tags utm',
        'url de rastreamento de redes sociais',
        'criador de url utm para bio do instagram',
      ],
      longTailKeywords: [
        'criar links de rastreamento utm em minúsculas consistentes online',
        'gerador de utm que preserva query strings e hashes existentes',
        'modelos de link utm para bio do instagram e newsletter',
        'como criar links utm para campanhas de redes sociais',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Gere URLs limpas e padronizadas de rastreamento de campanha para bios de redes sociais, patrocínios de criadores, anúncios pagos e newsletters, preservando query strings existentes e fragmentos de URL (#seção).',
    instructions: [
      {
        title: 'Digite sua URL de destino',
        description:
          'Cole a URL da página de destino ou selecione uma predefinição rápida de canal para preencher tags padrão.',
      },
      {
        title: 'Escolha uma predefinição de canal (opcional)',
        description:
          'Escolha Instagram, e-mail, YouTube ou outra predefinição para preencher valores padrão de origem e meio, em vez de digitá-los do zero.',
      },
      {
        title: 'Preencha os parâmetros UTM',
        description:
          'Informe os valores de utm_source, utm_medium, utm_campaign e os opcionais utm_content ou utm_term.',
      },
      {
        title: 'Some utm_term e utm_content opcionais',
        description:
          'Use utm_term para palavras-chave de busca paga e utm_content para distinguir dois links na mesma campanha, como um botão de bio e um link de story.',
      },
      {
        title: 'Copie e confira o detalhamento',
        description:
          'Veja a tabela de parâmetros ao vivo abaixo para evitar erros de digitação ou maiúsculas/minúsculas misturadas antes de copiar o link final.',
      },
      {
        title: 'Teste o link antes de publicar',
        description:
          'Abra a URL copiada no navegador para confirmar que ela leva à página certa e confira se a normalização em minúsculas não mudou nenhuma parte da URL de destino que diferencia maiúsculas de minúsculas.',
      },
    ],
    examples: [
      {
        title: 'Link de campanha de link na bio do Instagram',
        input: 'URL: https://utilityflow.online/tools/ · Origem: instagram · Meio: social · Campanha: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation: 'Usa a análise de URL do navegador para que parâmetros existentes ou âncoras # fiquem intactos.',
      },
      {
        title: 'Link de campanha de newsletter por e-mail',
        input: 'URL: https://utilityflow.online/ · Origem: newsletter · Meio: email · Campanha: lancamento_primavera',
        output: 'https://utilityflow.online/?utm_source=newsletter&utm_medium=email&utm_campaign=lancamento_primavera',
        explanation: 'Origem, meio e campanha ficam em minúsculas consistentes para não dividir os relatórios do GA4.',
      },
    ],
    benefits: [
      'Predefinições de canal com um clique evitam nomes inconsistentes como IG vs instagram',
      'A normalização opcional em minúsculas e sublinhados evita relatórios divididos no GA4',
      'Preserva corretamente parâmetros de consulta pré-existentes e âncoras #hash',
      'Exibe uma tabela decodificada de revisão de parâmetros antes de você publicar',
    ],
    useCases: [
      'Rastrear cliques de bios de perfil do Instagram, LinkedIn, X e TikTok',
      'Medir botões individuais de CTA dentro de newsletters semanais por e-mail',
      'Marcar links de patrocinadores dentro de descrições de vídeos do YouTube',
      'Gerar links UTM limpos para alimentar direto o Gerador de Código QR',
    ],
    faqs: [
      {
        question: 'Por que a normalização em minúsculas importa para os parâmetros UTM?',
        answer:
          'Plataformas de análise como o Google Analytics 4 tratam utm_source=Instagram e utm_source=instagram como linhas separadas, dividindo a atribuição de campanha.',
      },
      {
        question: 'Devo usar tags UTM em links de navegação interna do site?',
        answer:
          'Não. Os parâmetros UTM são feitos exclusivamente para campanhas externas de entrada; usá-los em links internos sobrescreve a atribuição de referência original no meio da sessão.',
      },
      {
        question: 'Posso transformar um link UTM gerado em um código QR?',
        answer:
          'Sim. Copie sua URL UTM finalizada e cole-a direto no nosso Gerador de Código QR para campanhas mensuráveis de impresso para online.',
      },
      {
        question: 'O Criador de Links UTM é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e cada link é criado localmente no seu navegador, sem enviar suas URLs para lugar nenhum.',
      },
      {
        question: 'O que é um parâmetro UTM?',
        answer:
          'Um parâmetro UTM é uma tag curta adicionada ao fim de uma URL, como utm_source=instagram, que diz às ferramentas de análise de onde um visitante veio.',
      },
      {
        question: 'O que significa utm_source?',
        answer:
          'Ele identifica a origem do tráfego, como instagram, google ou newsletter, para que você veja qual lugar enviou cada visitante.',
      },
      {
        question: 'O que significa utm_medium?',
        answer:
          'Ele descreve o canal de marketing, como social, email, cpc ou referral, para que você compare canais dentro de uma campanha.',
      },
      {
        question: 'O que significa utm_campaign?',
        answer:
          'Ele nomeia a campanha específica, como spring_launch ou black_friday, para que todos os links de uma promoção sejam agrupados nos relatórios.',
      },
      {
        question: 'Para que serve o utm_content?',
        answer:
          'Ele distingue dois links na mesma campanha, por exemplo um botão de bio e um link de story, para que você veja qual posição teve melhor desempenho.',
      },
      {
        question: 'Para que serve o utm_term?',
        answer:
          'Ele identifica a palavra-chave de busca paga que acionou um clique de anúncio e é útil principalmente para Google Ads ou outras campanhas de busca.',
      },
      {
        question: 'Preciso preencher todos os cinco parâmetros UTM?',
        answer:
          'Não. Origem, meio e campanha são o mínimo recomendado, enquanto utm_term e utm_content são opcionais e só necessários quando você quer mais detalhe.',
      },
      {
        question: 'Posso usar links UTM na minha bio do Instagram?',
        answer:
          'Sim. Links UTM são uma das formas mais comuns de medir o tráfego da bio e funcionam da mesma forma em páginas de link na bio, links de story e legendas de posts.',
      },
      {
        question: 'Os parâmetros UTM vão quebrar minha query string existente ou minha #âncora?',
        answer:
          'Não. O criador preserva qualquer parâmetro já presente na sua URL e mantém o fragmento #âncora no fim, para que o link ainda leve à seção certa.',
      },
      {
        question: 'Devo usar espaços em valores UTM?',
        answer:
          'Não. Use sublinhados ou hífens, como spring_launch, porque os espaços são codificados em porcentagem e deixam os relatórios mais difíceis de ler.',
      },
      {
        question: 'Posso rastrear escaneamentos de código QR com links UTM?',
        answer:
          'Sim. Crie a URL UTM primeiro e depois transforme-a em um código QR com nosso Gerador de Código QR, e cada escaneamento que chegar ao seu site levará as tags de campanha.',
      },
      {
        question: 'Os links UTM afetam o SEO?',
        answer:
          'Não, os mecanismos de busca geralmente ignoram os parâmetros UTM para classificação, mas é uma boa prática manter uma tag canônica na página de destino para que as URLs indexadas fiquem limpas.',
      },
      {
        question: 'Como vejo os resultados de UTM no Google Analytics?',
        answer:
          'No Google Analytics 4, abra o relatório Aquisição de tráfego e veja a origem da sessão, o meio e a campanha, que são preenchidos a partir dos seus valores UTM.',
      },
      {
        question: 'Qual é a diferença entre utm_source e utm_medium?',
        answer:
          'A origem responde de onde o clique veio, como instagram, enquanto o meio responde como ele chegou, como social ou email. Uma tag completa precisa dos dois.',
      },
      {
        question: 'Posso salvar ou reutilizar um modelo de link UTM?',
        answer:
          'Sim. As predefinições de canal preenchem valores padrão de origem e meio, e você pode copiar um link finalizado e reutilizar o mesmo padrão de nomenclatura em campanhas futuras.',
      },
      {
        question: 'Por que meus relatórios UTM mostram a mesma campanha duas vezes?',
        answer:
          'Maiúsculas/minúsculas misturadas ou grafia inconsistente, como Instagram versus instagram, criam linhas separadas. Mantenha uma única convenção de nomenclatura em minúsculas para cada link.',
      },
    ],
  },
  'social-character-limit-checker': {
    slug: 'contador-de-caracteres-para-redes-sociais',
    name: 'Verificador de Limite de Caracteres para Redes Sociais',
    shortDescription:
      'Meça o tamanho do texto no X, Instagram, LinkedIn, TikTok, Threads, Bluesky e YouTube com prévias de corte do feed.',
    keywords: [
      'verificador de limite de caracteres para redes sociais',
      'contador de caracteres do twitter',
      'limite de legenda do instagram',
      'verificador de tamanho de post do linkedin',
      'contador de caracteres do x',
      'contador de caracteres de legenda do instagram',
      'verificador de limite de legenda do tiktok',
      'limite de caracteres do threads',
      'contador de caracteres do bluesky',
    ],
    seo: {
      title: 'Verificador de Limite de Caracteres – Redes | UtilityFlow',
      description:
        'Confira limites de caracteres e o corte do feed em redes sociais como X, Instagram, LinkedIn, TikTok, Threads e YouTube, com contagem de emojis e links, grátis.',
      primaryKeyword: 'verificador de limite de caracteres para redes sociais',
      secondaryKeywords: [
        'contador de posts do x twitter',
        'verificador de tamanho de legenda do instagram',
        'prévia de corte ver mais do linkedin',
        'contador de caracteres de legenda do tiktok',
      ],
      longTailKeywords: [
        'verificar limite de caracteres e corte em redes sociais',
        'contador de 280 caracteres do twitter com peso de url de 23 caracteres',
        'contador de bio de 150 caracteres e legenda do instagram',
        'quantos caracteres tem uma bio do instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Escreva uma vez e confira na hora os limites rígidos de caracteres, o peso de 23 caracteres de links t.co do X, as contagens de hashtags e as prévias de truncamento acima da dobra em 10 grandes superfícies sociais.',
    instructions: [
      {
        title: 'Escreva ou cole seu rascunho social',
        description:
          'Digite legendas, bios ou descrições de vídeo na caixa do editor.',
      },
      {
        title: 'Confira os cartões de medidor da plataforma',
        description:
          'Veja barras de uso verde/âmbar/vermelho para X, Instagram, LinkedIn, TikTok, Threads, Bluesky e YouTube.',
      },
      {
        title: 'Confira a prévia de dobra "Ver mais"',
        description:
          'Escolha uma plataforma-alvo no menu abaixo para ver onde o truncamento do feed corta seu gancho inicial.',
      },
      {
        title: 'Ajuste seu gancho acima da dobra',
        description:
          'Coloque suas palavras mais importantes nos primeiros 125 caracteres para o Instagram ou 210 para o LinkedIn, para que os leitores as vejam antes do botão "...mais".',
      },
      {
        title: 'Ajuste hashtags, menções e links',
        description:
          'Remova ou encurte hashtags, @menções e URLs nas plataformas em que você passou do limite e lembre-se de que o X conta cada link como 23 caracteres.',
      },
      {
        title: 'Confira novamente e copie o texto final',
        description:
          'Após cada edição, confirme se todos os cartões de medidor estão verdes e copie o texto. Se uma plataforma ainda mostrar vermelho, corte palavras de preenchimento ou mova o detalhe extra para uma resposta ou comentário.',
      },
    ],
    examples: [
      {
        title: 'Testando um post com link no X vs LinkedIn',
        input: 'Gancho de 140 caracteres + https://example.com/very-long-campaign-url',
        output: 'O X conta a URL como 23 caracteres; Instagram e LinkedIn contam o tamanho completo da URL.',
        explanation: 'Reflete com precisão o comportamento automático de encurtamento de links t.co do X.',
      },
      {
        title: 'Conferindo uma bio do Instagram com emojis',
        input: 'Bio do Instagram: 150 caracteres com 2 emojis e 1 link',
        output: 'Bio: 148/150 caracteres — dentro do limite; emojis contam como 1 caractere cada.',
        explanation: 'Usa contagem por pontos de código Unicode, então emojis simples contam como 1 caractere.',
      },
    ],
    benefits: [
      'Leva em conta emojis de vários pontos de código com precisão, usando contagem de caracteres por Array.from',
      'Modela automaticamente a normalização de 23 caracteres de comprimento de URL do X',
      'Mostra tanto os limites máximos rígidos quanto os limites de truncamento do feed ("Ver mais")',
      'Conta hashtags, @menções e URLs embutidas em tempo real',
    ],
    useCases: [
      'Garantir que seus primeiros 125–210 caracteres prendam os leitores antes da dobra do feed',
      'Encaixar anúncios de criadores nos limites de 280 caracteres do X e 300 do Bluesky',
      'Editar bios do LinkedIn e do Instagram rigorosamente dentro dos limites de 150–160 caracteres',
      'Verificar a visibilidade de títulos de 70 caracteres do YouTube no celular antes de publicar',
    ],
    faqs: [
      {
        question: 'Por que o X (Twitter) conta URLs longas como 23 caracteres?',
        answer:
          'O X envolve links externos por meio de seu encurtador t.co, então cada URL http/https ocupa 23 caracteres do orçamento de 280 caracteres do post, independentemente do tamanho original da URL.',
      },
      {
        question: 'Qual é o comprimento de "Dobra" mostrado nos cartões do Instagram e do LinkedIn?',
        answer:
          'Os layouts do feed recolhem legendas longas após cerca de 125 caracteres no Instagram e 210 caracteres no LinkedIn, atrás de um botão "...mais". Colocar seu gancho principal antes da dobra aumenta a leitura.',
      },
      {
        question: 'Isto conta emojis como 1 caractere ou 2?',
        answer:
          'Usando iteração por pontos de código Unicode, emojis simples padrão contam como 1 caractere, em vez de pares substitutos UTF-16 inflados.',
      },
      {
        question: 'O Verificador de Limite de Caracteres para Redes Sociais é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e seu rascunho é contado localmente no seu navegador, sem ser enviado para lugar nenhum.',
      },
      {
        question: 'Qual é o limite de caracteres de um post no X (Twitter)?',
        answer:
          'Os posts padrão no X permitem até 280 caracteres, com cada URL contando como 23 caracteres por causa do encurtamento de links t.co.',
      },
      {
        question: 'Qual é o limite de caracteres da legenda do Instagram?',
        answer:
          'As legendas do Instagram permitem até 2.200 caracteres, mas só cerca dos primeiros 125 caracteres aparecem no feed antes da dobra "...mais".',
      },
      {
        question: 'Qual é o limite de caracteres da bio do Instagram?',
        answer:
          'As bios do Instagram permitem até 150 caracteres, então cada letra, espaço, emoji e quebra de linha conta nesse orçamento apertado.',
      },
      {
        question: 'Qual é o limite de caracteres de um post do LinkedIn?',
        answer:
          'Os posts do LinkedIn permitem até 3.000 caracteres, enquanto o feed mostra cerca dos primeiros 210 caracteres antes do botão "ver mais".',
      },
      {
        question: 'Qual é o limite de caracteres da legenda do TikTok?',
        answer:
          'As legendas de vídeos do TikTok permitem até 4.000 caracteres, embora legendas curtas e diretas costumem ter melhor desempenho porque os espectadores leem rápido.',
      },
      {
        question: 'Qual é o limite de caracteres do Threads?',
        answer:
          'Os posts do Threads permitem até 500 caracteres, mais que um post padrão do X, mas ainda curtos o bastante para recompensar uma escrita enxuta.',
      },
      {
        question: 'Qual é o limite de caracteres do Bluesky?',
        answer:
          'Os posts do Bluesky permitem até 300 caracteres, um pouco mais que o limite de 280 caracteres de um post padrão do X.',
      },
      {
        question: 'Qual é o limite de caracteres do título do YouTube?',
        answer:
          'Os títulos do YouTube permitem até 100 caracteres, mas os resultados de busca no celular normalmente mostram só cerca dos primeiros 70, então coloque suas palavras-chave no início.',
      },
      {
        question: 'Qual é o limite de caracteres da descrição do YouTube?',
        answer:
          'As descrições de vídeos do YouTube permitem até 5.000 caracteres, com as primeiras uma ou duas linhas visíveis antes de os espectadores tocarem em "mostrar mais".',
      },
      {
        question: 'Como funciona a dobra do feed no Instagram?',
        answer:
          'O Instagram recolhe as legendas após cerca de 125 caracteres no feed, então os leitores precisam tocar em "...mais" para ver o resto. Coloque seu gancho e sua mensagem principal primeiro.',
      },
      {
        question: 'Como funciona a dobra "ver mais" do LinkedIn?',
        answer:
          'O LinkedIn mostra cerca dos primeiros 210 caracteres de um post no feed e depois esconde o resto atrás de "ver mais", então abra com uma linha que mereça o clique.',
      },
      {
        question: 'As hashtags contam para o limite de caracteres?',
        answer:
          'Sim. Cada caractere de uma hashtag, incluindo o próprio símbolo #, conta para o limite do post em todas as plataformas.',
      },
      {
        question: 'As quebras de linha contam como caracteres?',
        answer:
          'Sim. Cada nova linha do seu rascunho conta como um caractere, então linhas em branco extras consomem limites apertados como o da bio de 150 caracteres do Instagram.',
      },
      {
        question: 'Os emojis contam como um caractere em todas as plataformas?',
        answer:
          'Este verificador conta emojis simples padrão como um caractere usando contagem por pontos de código, mas emojis complexos formados por símbolos unidos podem contar como mais em algumas plataformas.',
      },
      {
        question: 'As URLs contam da mesma forma em todas as plataformas?',
        answer:
          'Não. O X conta cada URL como 23 caracteres por meio do encurtamento t.co, enquanto Instagram, LinkedIn e a maioria das outras plataformas conta o tamanho completo do link.',
      },
      {
        question: 'Posso verificar várias plataformas ao mesmo tempo?',
        answer:
          'Sim. Digite ou cole seu rascunho uma vez e todos os cartões de medidor das plataformas são atualizados ao mesmo tempo, para que você adapte um post para X, Instagram, LinkedIn e mais.',
      },
    ],
  },
  'unicode-fancy-text-formatter': {
    slug: 'formatador-de-texto-unicode',
    name: 'Formatador de Texto Unicode Estilizado',
    shortDescription:
      'Converta texto ASCII simples em estilos Unicode de Negrito, Itálico, Monoespaçado, Script, Versalete e Largura Total para bios.',
    keywords: [
      'gerador de texto estilizado',
      'texto unicode em negrito',
      'formatador de fonte de bio do instagram',
      'gerador de versalete',
      'gerador de texto em negrito para instagram',
      'gerador de texto itálico unicode',
      'gerador de texto monoespaçado',
      'gerador de texto script',
      'gerador de texto de largura total',
    ],
    seo: {
      title: 'Formatador de Texto Unicode – Estilos Grátis | UtilityFlow',
      description:
        'Transforme texto simples em negrito, itálico, monoespaçado, script, versalete e largura total Unicode para bios e posts — copie e cole, grátis, sem cadastro.',
      primaryKeyword: 'formatador de texto unicode',
      secondaryKeywords: [
        'gerador de texto unicode em negrito',
        'conversor de texto em versalete',
        'fontes de bio de redes sociais',
        'texto em negrito e itálico para bios sociais',
      ],
      longTailKeywords: [
        'copiar e colar texto unicode em negrito para linkedin e instagram',
        'converter texto simples em versalete e monoespaçado unicode',
        'orientação de acessibilidade para texto social estilizado unicode',
        'como deixar o texto em negrito na bio do instagram sem aplicativo',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme letras e números simples em Símbolos Alfanuméricos Matemáticos Unicode padrão, Versalete e glifos de Largura Total que preservam o estilo negrito ou monoespaçado dentro de bios sociais em texto simples.',
    instructions: [
      {
        title: 'Digite um título curto ou rótulo de bio',
        description:
          'Digite uma frase curta, um título de seção ou um slogan de perfil no campo Texto para Estilizar.',
      },
      {
        title: 'Navegue pelos 10 estilos Unicode',
        description:
          'Compare as prévias de Negrito Sans-Serif, Itálico, Monoespaçado, Script, Duplo Traço, Versalete e Largura Total.',
      },
      {
        title: 'Compare as prévias lado a lado',
        description:
          'Veja todos os dez cartões de estilo para encontrar o que lê melhor em tamanhos pequenos, já que alguns estilos de script e duplo traço são mais difíceis de ler.',
      },
      {
        title: 'Copie seu estilo preferido',
        description:
          'Clique em Copiar no cartão de estilo preferido para colocar o texto Unicode estilizado na sua área de transferência.',
      },
      {
        title: 'Cole e confira a renderização',
        description:
          'Cole o texto na sua bio, legenda ou post e veja-o em outro dispositivo para garantir que nenhum caractere apareça como caixa vazia.',
      },
      {
        title: 'Copie com responsabilidade',
        description:
          'Clique em Copiar no seu estilo preferido e mantenha o texto principal essencial em texto simples padrão para acessibilidade de leitores de tela.',
      },
    ],
    examples: [
      {
        title: 'Formatando um divisor de bio do LinkedIn ou X',
        input: 'New Toolkit 2025',
        output: '𝗡𝗲𝘄 𝗧𝗼𝗼𝗹𝗸𝗶𝘁 𝟮𝟬𝟮𝟱 (Negrito Sans-Serif)',
        explanation: 'Usa os pontos de código oficiais Unicode U+1D5D4–U+1D7EC de negrito matemático.',
      },
      {
        title: 'Estilizando uma frase com acentos em Script',
        input: 'Café da Manhã',
        output: '𝒞𝒶𝒻é 𝒹𝒶 ℳ𝒶𝓃𝒽ã (Script)',
        explanation: 'As letras acentuadas ficam inalteradas porque os blocos matemáticos Unicode só definem A–Z sem acento.',
      },
    ],
    benefits: [
      'Renderiza glifos Unicode reais, em vez de imagens ou HTML específico da plataforma',
      'Inclui um aviso claro de acessibilidade sobre o comportamento de leitores de tela e busca',
      'Lida corretamente com dígitos, pontuação e símbolos especiais de quadro-negro como ℂ, ℕ, ℝ',
      'Cópia com um clique para cada cartão de estilo',
    ],
    useCases: [
      'Destacar títulos de seção dentro de bios de perfil do Instagram ou TikTok',
      'Formatar perfis técnicos ou datas em Unicode Monoespaçado',
      'Adicionar rótulos sutis em Versalete em newsletters ou notas em texto simples',
      'Estilizar anúncios curtos onde o negrito nativo de Markdown não é suportado',
    ],
    faqs: [
      {
        question: 'Por que a ferramenta inclui um aviso de acessibilidade?',
        answer:
          'Os símbolos matemáticos Unicode são feitos para equações, e não para prosa, então leitores de tela assistivos costumam lê-los em voz alta como "A maiúsculo em negrito sans-serif matemático", e as barras de busca sociais podem não indexá-los.',
      },
      {
        question: 'Estes são arquivos de fonte de verdade?',
        answer:
          'Não. São caracteres Unicode padronizados mapeados em blocos de símbolos distintos, e é por isso que eles sobrevivem ao colar em campos sociais de texto simples.',
      },
      {
        question: 'Por que as letras acentuadas não ASCII ficam inalteradas?',
        answer:
          'Os blocos Alfanuméricos Matemáticos Unicode só definem A–Z sem acento e dígitos 0–9, então os caracteres acentuados permanecem intactos para preservar a legibilidade.',
      },
      {
        question: 'O Formatador de Texto Unicode Estilizado é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e seu texto é convertido localmente no seu navegador, sem ser enviado para lugar nenhum.',
      },
      {
        question: 'Quais estilos Unicode posso criar com este formatador?',
        answer:
          'Você pode criar estilos de Negrito Sans-Serif, Itálico, Monoespaçado, Script, Duplo Traço, Fraktur, Versalete e Largura Total, com dez cartões de estilo para comparar de relance.',
      },
      {
        question: 'O texto estilizado funciona no Instagram?',
        answer:
          'Sim. O texto Unicode estilizado é colado direto em bios, legendas e comentários do Instagram porque é feito de caracteres reais, não de imagens nem de fontes.',
      },
      {
        question: 'O texto estilizado funciona no LinkedIn e no X?',
        answer:
          'Sim. O LinkedIn e o X aceitam caracteres Unicode em bios e posts, então títulos em negrito ou versalete são colados como texto comum.',
      },
      {
        question: 'Posso usar texto estilizado na minha bio do TikTok?',
        answer:
          'Sim. As bios do TikTok aceitam caracteres Unicode, então você pode estilizar um nome curto ou slogan, embora deva manter o resto da bio em texto simples.',
      },
      {
        question: 'Por que alguns caracteres parecem caixas em alguns dispositivos?',
        answer:
          'Celulares ou computadores mais antigos podem não ter fontes que cobrem todos os blocos de símbolos Unicode, então um glifo ausente aparece como uma caixa vazia. Teste seu texto estilizado em outro dispositivo antes de publicar.',
      },
      {
        question: 'Posso usar texto estilizado em toda a minha bio?',
        answer:
          'Não é recomendado. Leitores de tela têm dificuldade com texto estilizado e a busca pode não encontrá-lo, então use texto estilizado só para títulos curtos e mantenha o resto simples.',
      },
      {
        question: 'O texto estilizado afeta a busca nas plataformas sociais?',
        answer:
          'Sim, pode afetar. Uma busca por uma palavra simples pode não encontrar a mesma palavra escrita em caracteres matemáticos em negrito, então evite estilizar palavras-chave que as pessoas buscam.',
      },
      {
        question: 'Os leitores de tela conseguem ler texto Unicode estilizado?',
        answer:
          'Muitas vezes, mal. Os leitores de tela podem ler cada letra estilizada em voz alta com seu nome Unicode completo, o que deixa passagens longas estilizadas confusas para usuários cegos.',
      },
      {
        question: 'Posso deixar o texto em negrito no WhatsApp com este formatador?',
        answer:
          'Sim, o negrito Unicode é colado no WhatsApp, mas o aplicativo também tem formatação nativa, então envolver o texto em asteriscos, como *negrito*, costuma ser a escolha mais simples.',
      },
      {
        question: 'Os números e a pontuação também mudam?',
        answer:
          'Os dígitos são convertidos na maioria dos estilos, como negrito e monoespaçado, enquanto a maior parte da pontuação fica inalterada porque os blocos de símbolos Unicode não definem versões estilizadas dela.',
      },
      {
        question: 'Posso converter o texto estilizado de volta para texto normal?',
        answer:
          'A ferramenta converte texto simples em texto estilizado, então, para voltar ao texto simples, redigite a frase original ou cole-a de onde você a copiou pela primeira vez.',
      },
      {
        question: 'O texto estilizado Unicode é igual a uma fonte?',
        answer:
          'Não. Uma fonte muda a aparência de letras comuns em um dispositivo, enquanto o texto estilizado Unicode usa caracteres totalmente diferentes, e é por isso que a estilização sobrevive ao copiar e colar.',
      },
      {
        question: 'O texto estilizado funciona em linhas de assunto de e-mail?',
        answer:
          'Ele costuma ser renderizado em clientes de e-mail modernos, mas caracteres estilizados podem acionar filtros de spam e confundir leitores de tela, então o texto simples é a escolha mais segura para e-mail.',
      },
      {
        question: 'Posso usar texto estilizado em títulos do YouTube?',
        answer:
          'Sim, o YouTube aceita Unicode em títulos, mas palavras estilizadas podem não corresponder a consultas de busca simples, então use com moderação e mantenha as palavras-chave pesquisáveis em texto simples.',
      },
      {
        question: 'Este formatador envia meu texto para algum lugar?',
        answer:
          'Não. Toda a conversão acontece localmente no seu navegador, então nada do que você digita é enviado para um servidor nem guardado.',
      },
      {
        question: 'O que é texto de Largura Total?',
        answer:
          'O texto de Largura Total usa caracteres Unicode largos, como Ｆｕｌｌｗｉｄｔｈ, em que cada letra ocupa o dobro da largura normal, dando aos títulos uma aparência arejada e espaçada.',
      },
    ],
  },
  'bio-line-break-formatter': {
    slug: 'formatador-de-quebras-de-linha-para-bio',
    name: 'Formatador de Quebras de Linha para Instagram e Bio',
    shortDescription:
      'Preserve parágrafos limpos em branco em legendas e bios do Instagram removendo espaços finais e adicionando espaçadores invisíveis.',
    keywords: [
      'gerador de quebra de linha do instagram',
      'formatador de quebra de linha de bio',
      'ferramenta de espaçador de legenda',
      'quebra de linha invisível para redes sociais',
      'espaçador de legenda do instagram',
      'quebras de linha para bio do instagram',
      'ferramenta de quebra de linha de legenda',
      'caractere invisível para instagram',
      'quebras de linha de bio do tiktok',
    ],
    seo: {
      title: 'Formatador de Quebras de Linha – Legendas | UtilityFlow',
      description:
        'Mantenha o espaçamento de parágrafos na sua bio e em legendas do Instagram e TikTok — remova espaços finais, some espaçadores invisíveis e copie com um clique.',
      primaryKeyword: 'formatador de quebras de linha para bio',
      secondaryKeywords: [
        'quebras de linha de legenda do instagram',
        'espaçador invisível para bio do instagram',
        'preservar linhas em branco nas redes sociais',
        'ferramenta de espaçamento de bio do instagram',
      ],
      longTailKeywords: [
        'manter espaçamento de parágrafos em legendas do instagram sem pontos',
        'corrigir espaços finais que quebram quebras de linha da bio do instagram',
        'copiar legenda social formatada limpa para a área de transferência',
        'como adicionar quebras de linha na bio do instagram',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Evite que aplicativos sociais colapsem linhas vazias dentro de suas legendas e bios removendo espaços finais ocultos e inserindo opcionalmente espaçadores invisíveis de Braille em branco (`⠀`) nas lacunas entre parágrafos.',
    instructions: [
      {
        title: 'Escreva ou cole sua legenda',
        description:
          'Escreva um texto de vários parágrafos ou linhas de bio com linhas vazias onde quiser respiro visual.',
      },
      {
        title: 'Selecione a estratégia de espaçador',
        description:
          'Escolha Espaçador Invisível (U+2800), Espaçador de Ponto Mínimo (.) ou Somente Limpar Espaços Finais.',
      },
      {
        title: 'Confira a prévia formatada',
        description:
          'Veja a prévia para confirmar se cada linha em branco sobreviveu e se não há espaços finais no fim das suas linhas.',
      },
      {
        title: 'Confira a contagem de caracteres',
        description:
          'Acompanhe o contador ao vivo para garantir que sua bio ainda caiba no limite de 150 caracteres do Instagram, já que cada espaçador conta como um caractere.',
      },
      {
        title: 'Copie o texto formatado',
        description:
          'Clique em Copiar Legenda Formatada e confira se sua bio cabe no limite de 150 caracteres do Instagram.',
      },
      {
        title: 'Cole e confira na plataforma',
        description:
          'Cole no Instagram, Threads ou TikTok e confira a prévia do post. Se as quebras ainda colapsarem, mude para o modo Espaçador Invisível e copie novamente.',
      },
    ],
    examples: [
      {
        title: 'Limpando espaços finais antes de colar no Instagram',
        input: 'Linha 1   \\n\\nLinha 2',
        output: 'Linha 1\\n⠀\\nLinha 2',
        explanation: 'Remove os espaços finais após "Linha 1" e insere um espaçador invisível U+2800 para que a lacuna em branco persista.',
      },
      {
        title: 'Usando um espaçador de ponto visível',
        input: 'Linha 1\\n\\nLinha 2 (Espaçador de Ponto)',
        output: 'Linha 1\\n.\\nLinha 2',
        explanation: 'O ponto visível mantém a lacuna entre parágrafos em aplicativos que removem caracteres invisíveis.',
      },
    ],
    benefits: [
      'Elimina espaços finais invisíveis que acionam bugs de colapso de linha das plataformas sociais',
      'Suporta tanto espaçadores Unicode invisíveis quanto separadores de ponto limpos',
      'Colapsa automaticamente espaços duplos acidentais dentro de frases',
      'Verifica o tamanho total em relação ao limite de 150 caracteres da bio do Instagram ao vivo',
    ],
    useCases: [
      'Formatar legendas legíveis de vários parágrafos do Instagram e do Facebook',
      'Estruturar bios empilhadas com marcadores do Instagram ou TikTok',
      'Limpar textos colados do Notion, Google Docs ou aplicativos de Notas antes de publicar',
      'Separar a narrativa principal da legenda das chamadas para ação do rodapé',
    ],
    faqs: [
      {
        question: 'Por que as linhas em branco somem quando colo texto direto no Instagram?',
        answer:
          'Teclados de celular e editores de texto costumam deixar espaços finais no fim das frases, que os analisadores sociais tratam como artefatos de formatação e colapsam em uma única quebra de linha.',
      },
      {
        question: 'Qual caractere é usado no modo Espaçador Invisível?',
        answer:
          'Ele insere U+2800 (Padrão Braille em Branco) somente em linhas que, de outra forma, estariam vazias, para que o espaçamento visual se mantenha sem exibir pontos ou traços estranhos.',
      },
      {
        question: 'Isto modifica o texto dentro das minhas frases?',
        answer:
          'Só os espaços em branco finais no fim das linhas são aparados, além de espaços repetidos opcionais dentro das linhas quando ativado.',
      },
      {
        question: 'O Formatador de Quebras de Linha para Bio é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e sua legenda é formatada localmente no seu navegador, sem ser enviada para lugar nenhum.',
      },
      {
        question: 'Por que as legendas do Instagram perdem suas quebras de linha?',
        answer:
          'Espaços finais deixados por teclados e editores fazem os aplicativos sociais tratarem uma linha em branco como um artefato e colapsá-la. Remover esses espaços e somar um espaçador mantém a lacuna.',
      },
      {
        question: 'Posso usar este formatador para legendas do TikTok também?',
        answer:
          'Sim. As legendas do TikTok aceitam as mesmas quebras de linha e espaçadores invisíveis, então o texto formatado é colado com o espaçamento de parágrafos intacto.',
      },
      {
        question: 'Posso usar este formatador para posts do Threads?',
        answer:
          'Sim. O Threads preserva linhas em branco em texto formatado, então você pode estruturar posts mais longos com quebras de parágrafo claras.',
      },
      {
        question: 'Posso usá-lo para minha bio do Instagram?',
        answer:
          'Sim. Ele funciona para bios empilhadas de várias linhas, mas fique de olho no contador ao vivo porque as bios do Instagram permitem só 150 caracteres e cada espaçador conta.',
      },
      {
        question: 'Qual é a diferença entre Espaçador Invisível e Espaçador de Ponto?',
        answer:
          'O Espaçador Invisível coloca um caractere Braille em branco em linhas vazias para que a lacuna pareça vazia, enquanto o Espaçador de Ponto coloca um ponto visível lá, que algumas pessoas preferem por confiabilidade.',
      },
      {
        question: 'Quando devo escolher "Somente Limpar Espaços Finais"?',
        answer:
          'Escolha quando a plataforma já preserva suas quebras de linha e você só quer remover espaços finais ocultos que ainda poderiam acionar o colapso.',
      },
      {
        question: 'O espaçador invisível conta para o limite de caracteres da bio do Instagram?',
        answer:
          'Sim. Cada espaçador U+2800 é um caractere, então uma bio com várias linhas em branco usa parte do orçamento de 150 caracteres.',
      },
      {
        question: 'O caractere invisível vai aparecer como um símbolo estranho?',
        answer:
          'Na maioria dos celulares modernos, ele é renderizado como espaço em branco, mas fontes muito antigas podem exibi-lo como uma caixa vazia, então teste sua bio em outro dispositivo depois de colar.',
      },
      {
        question: 'Posso formatar texto colado do Google Docs ou Notion?',
        answer:
          'Sim. Textos copiados do Docs, Notion ou aplicativos de Notas costumam trazer espaços finais ocultos, e esta ferramenta os limpa antes de você colar em um aplicativo social.',
      },
      {
        question: 'A ferramenta remove espaços dentro das minhas frases?',
        answer:
          'Não. Ela só apara os espaços em branco finais no fim das linhas e colapsa espaços repetidos dentro de uma linha somente quando você ativa essa opção.',
      },
      {
        question: 'Quantas linhas em branco devo deixar entre parágrafos?',
        answer:
          'Uma linha em branco costuma bastar para legendas legíveis. Duas ou mais podem parecer espaçadas demais no feed e desperdiçar caracteres em uma bio.',
      },
      {
        question: 'Posso usar este formatador para posts do Facebook?',
        answer:
          'Sim. O Facebook geralmente preserva quebras de linha por conta própria, mas a ferramenta ainda é útil para limpar espaços finais de textos colados de outros aplicativos.',
      },
      {
        question: 'Esta ferramenta envia minha legenda para algum lugar?',
        answer:
          'Não. Toda a formatação acontece localmente no seu navegador, então o texto da sua legenda nunca é enviado para um servidor nem guardado.',
      },
      {
        question: 'Por que minha legenda ainda parece colapsada depois de colar?',
        answer:
          'Alguns aplicativos removem a formatação ao colar. Tente copiar novamente no modo Espaçador Invisível, cole direto no campo de legenda em vez de passar por outro aplicativo e confira a prévia.',
      },
      {
        question: 'Posso usar quebras de linha em posts do X (Twitter)?',
        answer:
          'Sim. O X suporta quebras de linha em posts, e este formatador também funciona lá, mas lembre-se de que cada nova linha conta para o limite de 280 caracteres.',
      },
      {
        question: 'Posso usar este formatador para descrições do YouTube?',
        answer:
          'Sim. As descrições do YouTube preservam linhas em branco, então o texto formatado mantém seu espaçamento de parágrafos quando os espectadores expandem a descrição.',
      },
    ],
  },
  'youtube-timestamp-generator': {
    slug: 'gerador-de-marcas-de-tempo-do-youtube',
    name: 'Gerador de Marcas de Tempo e Capítulos do YouTube',
    shortDescription:
      'Crie descrições de capítulos de vídeo do YouTube ordenadas e validadas conforme as especificações do YouTube e gere links clicáveis ?t= de salto.',
    keywords: [
      'gerador de marcas de tempo do youtube',
      'criador de capítulos do youtube',
      'gerador de link de tempo do youtube',
      'formatador de capítulos de vídeo',
      'criador de marcas de tempo de capítulos do youtube',
      'ferramenta de capítulos de descrição do youtube',
      'links clicáveis de marcas de tempo do youtube',
      'validador de capítulos do youtube',
      'gerador de timecode de capítulos de vídeo',
    ],
    seo: {
      title: 'Marcas de Tempo do YouTube – Capítulos | UtilityFlow',
      description:
        'Este gerador cria capítulos ordenados do YouTube validados para início em 00:00, 3+ capítulos e 10 segundos de intervalo, com links ?t= clicáveis.',
      primaryKeyword: 'gerador de marcas de tempo do youtube',
      secondaryKeywords: [
        'formatador de capítulos do youtube',
        'criador de url de marcas de tempo do youtube',
        'lista de verificação de capítulos de vídeo',
        'ferramenta de timecode de capítulos do youtube',
      ],
      longTailKeywords: [
        'gerar bloco de descrição de capítulos de vídeo do youtube online',
        'criar links clicáveis de salto de marcas de tempo do youtube para capítulos',
        'validar regra mínima de 10 segundos de capítulos do youtube',
        'formatar capítulos do youtube começando em 00:00 com três capítulos',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Monte blocos limpos e ordenados cronologicamente de capítulos do YouTube para as descrições dos seus vídeos — verificados automaticamente conforme as regras oficiais de capítulos do YouTube — e gere links clicáveis `?t=` de salto para comentários, newsletters ou notas de episódio.',
    instructions: [
      {
        title: 'Cole sua URL do YouTube (opcional)',
        description:
          'Digite qualquer link youtube.com/watch, youtu.be ou Shorts para gerar automaticamente links profundos clicáveis por capítulo.',
      },
      {
        title: 'Adicione e rotule capítulos',
        description:
          'Digite marcas de tempo MM:SS ou HH:MM:SS e títulos de capítulo; clique em Ordenar Cronologicamente quando quiser se as linhas saírem de ordem.',
      },
      {
        title: 'Ordene e confira as regras de capítulos',
        description:
          'Ordene a lista cronologicamente e confira a verificação de especificação de início em 00:00, pelo menos 3 capítulos e espaçamento mínimo de 10 segundos.',
      },
      {
        title: 'Corrija avisos antes de copiar',
        description:
          'Se um aviso aparecer, ajuste a marca de tempo ou o título problemático para que cada capítulo passe nas regras do YouTube antes de exportar.',
      },
      {
        title: 'Copie o bloco de descrição e os links',
        description:
          'Copie o bloco formatado de capítulos para a descrição do seu vídeo e copie links individuais ?t= para comentários, notas de episódio ou newsletters.',
      },
      {
        title: 'Dica: teste um link antes de publicar',
        description:
          'Abra um link ?t= gerado em uma nova aba para confirmar se ele salta para o momento certo, principalmente depois de editar marcas de tempo no fim.',
      },
    ],
    examples: [
      {
        title: 'Formatando uma descrição de tutorial com 4 capítulos',
        input: '00:00 Intro · 01:15 Configuração · 04:40 Demonstração · 08:20 Resumo',
        output: '00:00 Intro\n01:15 Configuração\n04:40 Demonstração\n08:20 Resumo (+ https://youtu.be/...?t=75)',
        explanation: 'Converte 01:15 direto em ?t=75s para compartilhamento com um clique.',
      },
      {
        title: 'Capítulos longos com formato HH:MM:SS',
        input: '01:05:00 Introdução longa · 01:20:30 Seção principal',
        output: '01:05:00 Introdução longa\n01:20:30 Seção principal (+ https://youtu.be/...?t=4830)',
        explanation: 'Quando qualquer capítulo passa de 60 minutos, todos os tempos usam o formato HH:MM:SS.',
      },
    ],
    benefits: [
      'Valida automaticamente as regras do YouTube de início em 00:00, mínimo de 3 capítulos e duração de 10 segundos',
      'Muda sem complicação para o preenchimento HH:MM:SS quando os vídeos passam de 60 minutos',
      'Extrai IDs de vídeo de URLs padrão, encurtadas, ao vivo, incorporadas e Shorts',
      'Gera links profundos ?t= prontos para compartilhar em notas de episódio e comentários fixados',
    ],
    useCases: [
      'Adicionar barras de rolagem de capítulos pesquisáveis a tutoriais e podcasts do YouTube',
      'Criar marcas de tempo clicáveis de notas de episódio de podcast',
      'Compartilhar passos exatos de tutoriais em documentação, Slack ou Discord',
      'Auditar listas de capítulos de transmissões ao vivo longas em busca de erros de formatação',
    ],
    faqs: [
      {
        question: 'Por que os capítulos do meu vídeo do YouTube não aparecem na barra de progresso?',
        answer:
          'O YouTube exige que a primeira marca de tempo seja exatamente 00:00, pelo menos 3 marcas listadas em ordem cronológica crescente e cada capítulo com pelo menos 10 segundos de duração.',
      },
      {
        question: 'As marcas de tempo acima de 60 minutos devem ser MM:SS ou HH:MM:SS?',
        answer:
          'Quando qualquer capítulo chega a 60 minutos ou mais, esta ferramenta formata automaticamente todas as marcas de tempo de forma consistente na notação HH:MM:SS.',
      },
      {
        question: 'Isto se conecta à API de Dados do YouTube?',
        answer:
          'Não. Tudo é analisado e formatado localmente no seu navegador, sem exigir OAuth de conta do Google nem chaves de API.',
      },
      {
        question: 'O Gerador de Marcas de Tempo do YouTube é gratuito?',
        answer:
          'Sim, é gratuito para usar no seu navegador, sem cadastro, e nada é enviado para um servidor.',
      },
      {
        question: 'Qual é o número mínimo de capítulos que o YouTube exige?',
        answer:
          'O YouTube precisa de pelo menos 3 capítulos na descrição antes de mostrar marcadores de capítulo na barra de progresso.',
      },
      {
        question: 'Por que o primeiro capítulo do YouTube deve começar em 00:00?',
        answer:
          'O YouTube usa a primeira marca de tempo para ancorar o sistema de capítulos, então uma descrição que começa depois não gera capítulos.',
      },
      {
        question: 'O que acontece se dois capítulos estiverem a menos de 10 segundos de distância?',
        answer:
          'O YouTube ignora capítulos com menos de 10 segundos, então esta ferramenta sinaliza a lacuna e você deve mover a marca de tempo posterior para frente.',
      },
      {
        question: 'Posso usar o Gerador de Marcas de Tempo do YouTube para Shorts?',
        answer:
          'Sim, você pode colar um link de Shorts e a ferramenta ainda gerará links de salto ?t=, embora os capítulos sejam mais úteis para vídeos mais longos.',
      },
      {
        question: 'Como funcionam os links de salto ?t=?',
        answer:
          'Cada link acrescenta o tempo de início do capítulo em segundos à URL do vídeo, então clicar nele abre o vídeo naquele momento exato.',
      },
      {
        question: 'Quais formatos de URL do YouTube o gerador de marcas de tempo aceita?',
        answer:
          'Ele aceita links padrão youtube.com/watch, links encurtados youtu.be, links ao vivo, links incorporados e links de Shorts.',
      },
      {
        question: 'Os capítulos precisam estar em ordem cronológica?',
        answer:
          'Sim, o YouTube exige ordem crescente, e esta ferramenta pode ordenar suas linhas cronologicamente com um clique se elas se misturarem.',
      },
      {
        question: 'Posso adicionar capítulos a um vídeo que não enviei?',
        answer:
          'Você pode gerar links de marca de tempo para qualquer vídeo público para compartilhar momentos exatos, mas os capítulos só aparecem quando o dono do vídeo os adiciona à descrição.',
      },
      {
        question: 'Quantos capítulos posso adicionar com esta ferramenta?',
        answer:
          'Não há limite fixo na ferramenta, mas listas de capítulos muito longas ficam difíceis de ler, então mantenha-as focadas nas seções reais do vídeo.',
      },
      {
        question: 'Preciso incluir títulos de capítulo ou só os tempos bastam?',
        answer:
          'O YouTube precisa de um título após cada marca de tempo, então some um rótulo descritivo curto para cada capítulo listado.',
      },
      {
        question: 'Posso usar estas marcas de tempo na descrição de um episódio de podcast?',
        answer:
          'Sim, o mesmo formato 00:00 funciona em notas de episódio e descrições de podcast, e os links ?t= são úteis para os ouvintes.',
      },
      {
        question: 'Por que a ferramenta muda todas as marcas de tempo para HH:MM:SS em vídeos longos?',
        answer:
          'Formatos mistos de MM:SS e HH:MM:SS confundem espectadores e analisadores, então a ferramenta mantém todas as marcas de tempo em um único formato consistente.',
      },
      {
        question: 'Minha URL de vídeo ou lista de capítulos é enviada para algum lugar?',
        answer:
          'Não, toda a análise e formatação acontecem localmente no seu navegador, e suas URLs e títulos de capítulo nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso editar um capítulo depois de adicioná-lo?',
        answer:
          'Sim, você pode mudar qualquer marca de tempo ou título, reordenar a lista e conferir novamente os avisos de especificação antes de copiar o bloco atualizado.',
      },
      {
        question: 'O que devo fazer se um link gerado abrir no momento errado?',
        answer:
          'Confira se a marca de tempo foi digitada como minutos e segundos na ordem certa e copie o link novamente depois de corrigi-la.',
      },
      {
        question: 'Os capítulos do YouTube ajudam os espectadores a encontrar conteúdo mais rápido?',
        answer:
          'Sim, os capítulos permitem que os espectadores saltem direto para a seção de que precisam, o que torna tutoriais, avaliações e podcasts longos mais fáceis de navegar.',
      },
    ],
  },
  'social-thumbnail-previewer': {
    slug: 'pre-visualizacao-de-miniaturas-do-youtube',
    name: 'Pré-visualizador de Miniaturas do YouTube e Redes Sociais',
    shortDescription:
      'Confira imagens de miniatura locais junto com títulos em layouts de feed e barra lateral de desktop, com verificações de especificação 16:9 e 2 MB.',
    keywords: [
      'pré-visualizador de miniatura do youtube',
      'testador de miniatura',
      'prévia de truncamento de título de vídeo',
      'verificador de miniatura 16:9',
      'verificador de tamanho de miniatura do youtube',
      'prévia de miniatura em modo escuro',
      'prévia de miniatura de feed do youtube',
      'verificador de zona segura de miniatura',
      'ferramenta de mockup de miniatura de vídeo',
    ],
    seo: {
      title: 'Pré-visualizador de Miniaturas – Feed | UtilityFlow',
      description:
        'Confira sua miniatura e seu título nos feeds claro e escuro do YouTube antes de publicar, com verificações de 16:9, 1280×720 e 2 MB — tudo local, sem envio.',
      primaryKeyword: 'pré-visualizador de miniatura do youtube',
      secondaryKeywords: [
        'prévia de feed de miniatura',
        'verificador de tamanho de título do youtube',
        'ferramenta de zona segura de miniatura',
        'verificador de tamanho de miniatura do youtube',
      ],
      longTailKeywords: [
        'pré-visualizar miniatura do youtube no feed em modo escuro antes de publicar',
        'verificar sobreposição de selo de tempo no canto inferior direito da miniatura',
        'verificador privado de miniatura 1280x720 no navegador',
        'testar legibilidade de miniatura do youtube em tamanho de barra lateral',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Teste suas miniaturas e títulos de vídeo não lançados em layouts realistas de feed inicial e barra lateral compacta em modo Claro e Escuro — verificando dimensões HD de 1280×720, proporção 16:9, limites de 2 MB de tamanho de arquivo e sobreposição de tempo no canto inferior direito localmente.',
    instructions: [
      {
        title: 'Carregue uma imagem de miniatura local',
        description:
          'Escolha um arquivo PNG, JPG ou WebP do disco; ele fica estritamente na memória local do navegador por meio de URLs de Objeto.',
      },
      {
        title: 'Digite título, canal e duração',
        description:
          'Digite seu título candidato e a duração do vídeo para conferir o truncamento de duas linhas do feed e a cobertura do selo de canto.',
      },
      {
        title: 'Alterne Modo Escuro e Zona Segura',
        description:
          'Alterne entre feeds Claro e Escuro e ative a sobreposição da zona de canto âmbar de marca de tempo antes de exportar.',
      },
      {
        title: 'Compare os tamanhos de feed e barra lateral',
        description:
          'Confira o cartão grande do feed de desktop e a miniatura compacta da barra lateral lado a lado para detectar texto ilegível em tamanhos pequenos.',
      },
      {
        title: 'Confira os avisos de especificação',
        description:
          'Veja as verificações de dimensão 1280×720, proporção 16:9 e tamanho de arquivo de 2 MB e corrija qualquer problema sinalizado no seu editor de imagens.',
      },
      {
        title: 'Dica: corrija texto escondido pelo selo',
        description:
          'Se o selo de duração cobrir texto importante ou um rosto, mova esse elemento para longe do canto inferior direito e envie a imagem novamente.',
      },
    ],
    examples: [
      {
        title: 'Verificando a posição do texto no canto inferior direito',
        input: 'PNG 1280×720 · Duração: 12:48 · Zona Segura: Ativada',
        output: 'Destaca o canto inferior direito onde o selo de duração 12:48 cobre a arte.',
        explanation: 'Evita que rostos ou números importantes da miniatura fiquem atrás de sobreposições de tempo do player.',
      },
      {
        title: 'Verificando o truncamento do título no feed',
        input: 'Título: Como Criar Miniaturas Incríveis para YouTube em 2025: Guia Completo Passo a Passo',
        output: 'O título é cortado após 2 linhas no cartão do feed; mova as palavras-chave para o início.',
        explanation: 'Os cartões do feed limitam os títulos a duas linhas, então as palavras no fim ficam escondidas.',
      },
    ],
    benefits: [
      'Lê as dimensões reais em pixels, a proporção e o tamanho do arquivo em KB/MB na hora',
      'Mostra tanto cartões grandes de feed de desktop quanto miniaturas pequenas de barra lateral recomendadas',
      'Inclui alternância de feed Claro/Escuro para testar legibilidade de alto contraste',
      'Zero envio ao servidor — ideal para gráficos de patrocinadores ou lançamentos de produtos não lançados',
    ],
    useCases: [
      'Detectar texto pequeno ilegível em miniaturas compactas de barra lateral antes de publicar',
      'Garantir que gráficos importantes fiquem longe da sobreposição de duração no canto inferior direito',
      'Verificar se as miniaturas atendem aos requisitos do YouTube de 1280×720, 16:9 e menos de 2 MB',
      'Comparar frases de título para que palavras-chave essenciais apareçam antes do truncamento de corte de linha',
    ],
    faqs: [
      {
        question: 'Minhas imagens de miniatura enviadas são mandadas para um servidor remoto?',
        answer:
          'Nunca. As imagens são carregadas exclusivamente dentro da aba do seu navegador via URL.createObjectURL() e são revogadas automaticamente quando substituídas ou fechadas.',
      },
      {
        question: 'Quais dimensões e tamanho de arquivo o YouTube recomenda para miniaturas?',
        answer:
          'O YouTube recomenda 1280×720 pixels (largura mínima de 640 px) em proporção 16:9, salvos como JPG, PNG ou WebP com menos de 2 MB.',
      },
      {
        question: 'Por que a prévia da barra lateral importa tanto?',
        answer:
          'As miniaturas sugeridas da página de exibição aparecem bem menores (cerca de 168 px de largura), então verificar a legibilidade em escala compacta evita designs poluídos.',
      },
      {
        question: 'O Pré-visualizador de Miniaturas do YouTube é gratuito?',
        answer:
          'Sim, é gratuito para usar no seu navegador, sem conta, e suas imagens de miniatura nunca são enviadas para lugar nenhum.',
      },
      {
        question: 'Quais formatos de imagem posso conferir com o pré-visualizador de miniaturas?',
        answer:
          'Você pode carregar arquivos PNG, JPG e WebP, que são os mesmos formatos que o YouTube aceita para miniaturas personalizadas.',
      },
      {
        question: 'Como o pré-visualizador de miniaturas verifica a proporção 16:9?',
        answer:
          'Ele lê as dimensões reais em pixels da sua imagem e sinaliza se a proporção largura-altura não corresponder a 16:9.',
      },
      {
        question: 'O que é a zona segura de miniatura neste pré-visualizador?',
        answer:
          'A sobreposição de zona segura destaca o canto inferior direito onde o YouTube coloca o selo de duração do vídeo, para que você mantenha rostos e textos importantes longe dele.',
      },
      {
        question: 'Por que devo conferir minha miniatura no Modo Escuro?',
        answer:
          'Muitos espectadores navegam no YouTube no Modo Escuro, e designs claros ou de baixo contraste podem parecer bem diferentes contra um fundo escuro do feed.',
      },
      {
        question: 'Como o pré-visualizador mostra o truncamento do título?',
        answer:
          'Ele renderiza seu título em um cartão de feed realista com o mesmo limite de duas linhas, para que você veja exatamente onde o YouTube o corta.',
      },
      {
        question: 'O que acontece se minha miniatura for maior que 2 MB?',
        answer:
          'A ferramenta sinaliza o tamanho do arquivo, e você deve exportá-la novamente com maior compressão ou menor resolução até ficar abaixo de 2 MB.',
      },
      {
        question: 'Posso conferir uma miniatura antes de meu vídeo ser publicado?',
        answer:
          'Sim, esse é o uso principal: testar miniaturas não lançadas localmente para que gráficos de patrocinadores e arte de lançamento fiquem privados até o dia do lançamento.',
      },
      {
        question: 'Por que minha miniatura parece borrada na prévia da barra lateral?',
        answer:
          'As miniaturas pequenas da barra lateral encolhem muito sua imagem, então textos finos e detalhes finos ficam borrados; use texto grande em negrito e formas simples.',
      },
      {
        question: 'O pré-visualizador muda ou comprime minha imagem de miniatura?',
        answer:
          'Não, ele só exibe seu arquivo como está e informa suas dimensões e tamanho; nunca edita, redimensiona ou recodifica a imagem.',
      },
      {
        question: 'Qual é a largura mínima de miniatura que o YouTube aceita?',
        answer:
          'O YouTube exige uma largura mínima de 640 pixels, embora 1280 pixels de largura sejam recomendados para um resultado HD nítido.',
      },
      {
        question: 'Posso testar títulos diferentes com a mesma miniatura?',
        answer:
          'Sim, basta editar o campo de título e a prévia do feed é atualizada na hora, para que você compare frases sem enviar a imagem novamente.',
      },
      {
        question: 'Por que o texto da minha miniatura é cortado na prévia do feed?',
        answer:
          'Os cartões do feed limitam os títulos a duas linhas, então mova suas palavras mais importantes para o início do título, onde elas ficam visíveis.',
      },
      {
        question: 'O pré-visualizador funciona para miniaturas de outras plataformas?',
        answer:
          'Ele foi criado em torno dos layouts de feed do YouTube, mas as verificações de tamanho, contraste e legibilidade em escala pequena são úteis para qualquer plataforma de vídeo.',
      },
      {
        question: 'Como removo uma imagem de miniatura carregada?',
        answer:
          'Carregue uma imagem diferente para substituí-la, ou feche a aba; a URL de objeto em memória é revogada e nada é guardado.',
      },
      {
        question: 'O que devo fazer se a prévia parecer diferente do YouTube real?',
        answer:
          'O YouTube ajusta seu layout com o tempo, então trate a prévia como uma aproximação próxima e faça uma verificação final em um envio privado ou não listado.',
      },
      {
        question: 'O pré-visualizador de miniaturas pode verificar a miniatura de um vídeo ao vivo do YouTube?',
        answer:
          'Não, ele mostra só arquivos de imagem locais; para verificar um vídeo publicado, baixe primeiro a imagem da miniatura dele e carregue esse arquivo aqui.',
      },
    ],
  },
  'hashtag-formatter': {
    slug: 'formatador-de-hashtags',
    name: 'Formatador e Gerenciador de Hashtags',
    shortDescription:
      'Limpe palavras-chave bagunçadas, remova hashtags duplicadas, formate tags #CamelCase acessíveis e confira os limites da plataforma.',
    keywords: [
      'formatador de hashtags',
      'limpador de hashtags',
      'conversor de hashtag camelcase',
      'remover hashtags duplicadas',
      'gerador de hashtags a partir de palavras-chave',
      'verificador de limite de hashtags do instagram',
      'conversor de maiúsculas de hashtag',
      'ferramenta de limpeza de lista de hashtags',
      'formatador de grupo de hashtags',
    ],
    seo: {
      title: 'Formatador de Hashtags – CamelCase e Contador | UtilityFlow',
      description:
        'Normalize palavras-chave em hashtags #CamelCase limpas ou minúsculas, remova duplicatas e pontuação inválida e confira o limite de 30 tags do Instagram.',
      primaryKeyword: 'formatador de hashtags',
      secondaryKeywords: [
        'gerador de hashtag camelcase',
        'removedor de hashtag duplicada',
        'contador de hashtags do instagram',
        'conversor de maiúsculas de hashtag',
      ],
      longTailKeywords: [
        'converter lista de palavras-chave em hashtags camelcase acessíveis',
        'remover hashtags duplicadas e pontuação inválida online',
        'formatar grupos de hashtags com separadores de pontos na dobra da legenda',
        'verificar limite de 30 hashtags do instagram antes de postar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme palavras-chave separadas por vírgula ou listas bagunçadas de tags em hashtags sem duplicatas e sem pontuação, formatadas em `#CamelCase` amigável para leitores de tela ou em minúsculas, prontas para blocos de legenda de uma linha, verticais ou separados por pontos.',
    instructions: [
      {
        title: 'Cole palavras-chave ou hashtags aproximadas',
        description:
          'Digite tags separadas por vírgulas, espaços, ponto e vírgula ou novas linhas — com ou sem o símbolo # no início.',
      },
      {
        title: 'Escolha a caixa e o layout de saída',
        description:
          'Escolha PascalCase (#CamelCase) para acessibilidade, minúsculas ou Preservar Caixa, além de saída em linha ou separada por linhas.',
      },
      {
        title: 'Escolha um estilo de separador de legenda',
        description:
          'Escolha um bloco de uma linha, uma lista vertical ou um rodapé separado por pontos para que as tags fiquem organizadas abaixo do texto da legenda.',
      },
      {
        title: 'Execute o formatador',
        description:
          'A ferramenta remove pontuação inválida, exclui duplicatas sem diferenciar maiúsculas de minúsculas e reconstrói cada tag na caixa escolhida.',
      },
      {
        title: 'Confira a contagem e copie',
        description:
          'Confira as duplicatas removidas e a contagem total de tags em relação ao limite de 30 tags do Instagram e clique em Copiar Hashtags.',
      },
      {
        title: 'Dica: corte tags acima do limite da plataforma',
        description:
          'Se a contagem passar de 30, remova primeiro as tags menos relevantes, já que tags extras além do limite são ignoradas pelo Instagram.',
      },
    ],
    examples: [
      {
        title: 'Convertendo frases simples em hashtags CamelCase acessíveis',
        input: 'marketing de conteúdo, dicas de produtividade, Marketing de Conteúdo',
        output: '#MarketingDeConteudo #DicasDeProdutividade (1 duplicata removida)',
        explanation: 'Capitalizar cada limite de palavra ajuda os leitores de tela a pronunciar tags de várias palavras corretamente.',
      },
      {
        title: 'Convertendo palavras-chave em hashtags minúsculas',
        input: 'marketing de conteúdo, dicas de produtividade',
        output: '#marketingdeconteudo #dicasdeprodutividade (minúsculas)',
        explanation: 'O modo minúsculas remove os espaços e mantém tudo em letras minúsculas para um visual uniforme.',
      },
    ],
    benefits: [
      'Suporta formatação #PascalCase acessível recomendada por guias de acessibilidade digital',
      'Remove duplicatas de tags idênticas sem diferenciar maiúsculas de minúsculas automaticamente',
      'Remove pontuação não suportada (hífens, pontos, vírgulas) que quebra tags clicáveis',
      'Acompanha a contagem exata de tags em relação aos limites da plataforma',
    ],
    useCases: [
      'Limpar bancos de hashtags de campanha compartilhados em planilhas de marketing',
      'Converter palavras-chave de SEO de várias palavras em hashtags sociais clicáveis',
      'Atualizar listas antigas de tags em minúsculas para formatação CamelCase acessível',
      'Gerar rodapés de hashtags organizados e separados por pontos para posts do Instagram',
    ],
    faqs: [
      {
        question: 'Por que CamelCase / PascalCase é recomendado para hashtags?',
        answer:
          'Os leitores de tela dividem os limites de palavras capitalizadas (por exemplo, #SocialMediaTools como "Social Media Tools") em vez de tentar pronunciar uma longa sequência em minúsculas como uma palavra embaralhada.',
      },
      {
        question: 'Por que hífens e pontos são removidos dentro das tags?',
        answer:
          'A maioria das plataformas sociais encerra uma hashtag clicável no primeiro espaço, hífen ou sinal de pontuação, então remover hífens mantém a tag inteira intacta.',
      },
      {
        question: 'Isto usa IA ou adivinha hashtags banidas?',
        answer:
          'Não. Ele limpa, formata e remove duplicatas de forma determinística das tags exatas que você fornece.',
      },
      {
        question: 'O Formatador de Hashtags é gratuito?',
        answer:
          'Sim, é gratuito para usar no seu navegador, sem cadastro, e suas tags são processadas localmente sem serem enviadas.',
      },
      {
        question: 'Qual é o limite de hashtags do Instagram?',
        answer:
          'O Instagram permite até 30 hashtags por post, e esta ferramenta conta suas tags para que você fique dentro desse limite.',
      },
      {
        question: 'Como o Formatador de Hashtags remove duplicatas?',
        answer:
          'Ele compara as tags sem diferenciar maiúsculas de minúsculas, então #MarketingDeConteudo e #marketingdeconteudo contam como a mesma tag e só uma é mantida.',
      },
      {
        question: 'Posso colar hashtags com ou sem o símbolo #?',
        answer:
          'Sim, os dois funcionam: a ferramenta adiciona um # a palavras-chave simples e mantém os que você já digitou com #.',
      },
      {
        question: 'Quais separadores posso usar entre hashtags?',
        answer:
          'Você pode separar tags com vírgulas, espaços, ponto e vírgula ou novas linhas, e a ferramenta lida com separadores mistos em uma só colagem.',
      },
      {
        question: 'Qual é a diferença entre hashtags CamelCase e em minúsculas?',
        answer:
          'O CamelCase capitaliza cada palavra (#RedesSociais) para acessibilidade de leitores de tela, enquanto minúsculas (#redessociais) é uma escolha estilística que se lê como uma palavra só.',
      },
      {
        question: 'O Formatador de Hashtags verifica se uma hashtag está banida?',
        answer:
          'Não, ele não verifica listas de banimento nem dados ao vivo da plataforma; só limpa e formata as tags que você fornece.',
      },
      {
        question: 'Posso usar as hashtags formatadas no TikTok e no X também?',
        answer:
          'Sim, as tags limpas funcionam em qualquer plataforma, embora cada plataforma tenha seus próprios limites, como o limite de 30 tags no Instagram.',
      },
      {
        question: 'Por que algumas das minhas hashtags somem após a formatação?',
        answer:
          'Tags feitas só de pontuação ou caracteres não suportados são removidas, já que não funcionariam como hashtags clicáveis de qualquer forma.',
      },
      {
        question: 'Para que servem os rodapés de hashtags separados por pontos?',
        answer:
          'Os separadores de pontos empurram as hashtags para abaixo da dobra da legenda no Instagram, mantendo a legenda visível limpa enquanto as tags continuam funcionando.',
      },
      {
        question: 'Posso formatar hashtags em uma lista vertical?',
        answer:
          'Sim, escolha o layout separado por linhas para colocar uma hashtag por linha, o que é útil para comentários e rodapés de legendas.',
      },
      {
        question: 'O Formatador de Hashtags funciona com palavras em outros idiomas?',
        answer:
          'Sim, ele mantém letras de outros alfabetos na tag, desde que a plataforma as suporte em hashtags.',
      },
      {
        question: 'Quantas hashtags devo usar por post?',
        answer:
          'Não há um único número certo; use tags genuinamente relevantes para o post e deixe o contador mantê-lo abaixo do limite da plataforma.',
      },
      {
        question: 'Posso salvar um grupo de hashtags para reutilizar?',
        answer:
          'A ferramenta não guarda grupos, então copie o bloco formatado para suas próprias notas ou planilha para reutilizá-lo depois.',
      },
      {
        question: 'Por que Preservar Caixa mantém minha capitalização original?',
        answer:
          'Preservar Caixa é para tags de marca ou siglas que você quer exatamente como digitadas, enquanto os outros modos padronizam cada tag da mesma forma.',
      },
      {
        question: 'Minhas hashtags são enviadas para um servidor?',
        answer:
          'Não, toda a formatação acontece localmente no seu navegador, então suas listas de palavras-chave e tags de campanha nunca saem do seu dispositivo.',
      },
      {
        question: 'O que devo fazer se uma hashtag formatada ainda não funcionar em uma plataforma?',
        answer:
          'Confira as próprias regras da plataforma para essa tag, já que algumas plataformas bloqueiam certas palavras ou limitam o tamanho da tag mesmo quando o formato está limpo.',
      },
    ],
  },
  'caption-template-builder': {
    slug: 'criador-de-modelos-de-legendas',
    name: 'Criador de Modelos de Legendas e Ganchos',
    shortDescription:
      'Monte legendas sociais estruturadas usando modelos determinísticos de PAS, Tutorial, Antes-Depois-Ponte e Lista de Verificação.',
    keywords: [
      'criador de modelos de legendas',
      'modelos de posts de redes sociais',
      'criador de estrutura de gancho',
      'formatador de post do linkedin',
      'modelos de legenda do instagram',
      'modelo de copywriting pas',
      'gerador de gancho de redes sociais',
      'modelos de estrutura de post',
      'ferramenta de estrutura de escrita de legendas',
    ],
    seo: {
      title: 'Criador de Modelos de Legendas – Ganchos | UtilityFlow',
      description:
        'Monte legendas de redes sociais com modelos de PAS, Tutorial, Antes-Depois-Ponte e Lista de Verificação — suas palavras, estruturadas, com contagem ao vivo.',
      primaryKeyword: 'criador de modelos de legendas',
      secondaryKeywords: [
        'estruturas de legenda de redes sociais',
        'criador de estrutura de post do linkedin',
        'modelo de copywriting pas',
        'modelos de legenda do instagram',
      ],
      longTailKeywords: [
        'criar legendas estruturadas de linkedin e instagram sem ia',
        'criador de modelo de post social de problema agitação solução',
        'verificar encaixe de caracteres de x e instagram ao escrever legendas',
        'modelo de legenda antes depois ponte para posts sociais',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Componha posts sociais consistentes e escaneáveis mais rápido usando modelos determinísticos de copywriting — Problema–Agitação–Solução (PAS), Detalhamento Acionável, Antes–Depois–Ponte, Lista de Verificação de Auditoria e Mito vs. Realidade — estritamente a partir de suas próprias entradas, sem texto inventado por IA.',
    instructions: [
      {
        title: 'Escolha uma estrutura de post',
        description:
          'Escolha entre os cinco modelos determinísticos na barra superior para combinar com seu objetivo.',
      },
      {
        title: 'Preencha seu próprio gancho, pontos e CTA',
        description:
          'Digite seu gancho de abertura autêntico, o contexto do problema, os aprendizados em marcadores (um por linha), a chamada para ação e as hashtags.',
      },
      {
        title: 'Confira a prévia ao vivo',
        description:
          'Leia o post formatado como ele vai aparecer, verificando o espaçamento dos parágrafos e a ordem do gancho, dos aprendizados e da chamada para ação.',
      },
      {
        title: 'Confira o encaixe de caracteres e palavras',
        description:
          'Acompanhe o contador ao vivo em relação ao limite de 280 caracteres do X e aos limites do Instagram ou LinkedIn e corte linhas que ultrapassem.',
      },
      {
        title: 'Copie e confira o tamanho',
        description:
          'Confira a prévia do post formatado ao vivo, confirme o encaixe de caracteres/palavras para X ou Instagram/LinkedIn e clique em Copiar Legenda.',
      },
      {
        title: 'Dica: teste as mesmas notas em outro modelo',
        description:
          'Troque de modelo sem redigitar para comparar como seu gancho e seus pontos ficam como PAS, tutorial ou lista de verificação antes de postar.',
      },
    ],
    examples: [
      {
        title: 'Montando um post acionável de 3 passos no LinkedIn',
        input: 'Gancho + Contexto + 3 marcadores + CTA',
        output: 'Post numerado limpo com espaçamento nítido de parágrafos e hashtags no rodapé.',
        explanation: 'Estrutura suas palavras exatas de forma determinística, sem alterar a voz nem inventar afirmações.',
      },
      {
        title: 'Montando um post PAS de lançamento',
        input: 'Problema: legendas sem estrutura · Agitação: baixo alcance · Solução: modelo PAS',
        output: 'Post PAS limpo com gancho, problema, solução e CTA final.',
        explanation: 'O modelo PAS organiza suas palavras exatas em problema, agitação e solução, sem mudar sua voz.',
      },
    ],
    benefits: [
      'Montagem 100% transparente e determinística — sem jargões genéricos de IA nem fatos inventados',
      'Impõe uma hierarquia visual limpa entre gancho, aprendizados e chamada para ação',
      'O contador ao vivo de caracteres e palavras sinaliza os limites de 280 caracteres do X e do IG/LinkedIn',
      'Permite que criadores testem cinco estruturas clássicas nas mesmas notas com um clique',
    ],
    useCases: [
      'Escrever anúncios consistentes de lançamento de produto para canais sociais',
      'Transformar notas brutas em marcadores de engenharia ou marketing em posts legíveis',
      'Formatar carrosséis educativos ou listas de verificação de dicas semanais',
      'Separar ganchos de abertura de listas de valor de forma limpa antes de agendar',
    ],
    faqs: [
      {
        question: 'Esta ferramenta usa um modelo de linguagem de IA para reescrever minhas palavras?',
        answer:
          'Não. É um criador de modelos estruturados puramente determinístico que funciona no seu navegador — cada frase da prévia vem estritamente de suas próprias entradas.',
      },
      {
        question: 'Como adiciono mais passos ou itens de lista de verificação?',
        answer:
          'Basta apertar Enter para adicionar novas linhas dentro da caixa de texto Aprendizados Principais; cada linha não vazia é formatada automaticamente em um item numerado, marcador ou caixa de seleção.',
      },
      {
        question: 'Posso preservar linhas em branco ao colar no Instagram depois?',
        answer:
          'Sim. Se um aplicativo ainda colapsar o espaçamento no celular, coloque a legenda copiada no nosso Formatador de Quebras de Linha para Instagram e Bio para espaçadores invisíveis.',
      },
      {
        question: 'O Criador de Modelos de Legendas é gratuito?',
        answer:
          'Sim, é gratuito para usar no seu navegador, sem cadastro, e seus rascunhos são processados localmente sem serem enviados.',
      },
      {
        question: 'O que é o modelo PAS no Criador de Modelos de Legendas?',
        answer:
          'PAS significa Problema–Agitação–Solução: nomeie o problema do leitor, aguce por que ele dói e depois apresente sua solução e chamada para ação.',
      },
      {
        question: 'Quais modelos de legenda este criador inclui?',
        answer:
          'Ele inclui cinco modelos: Problema–Agitação–Solução, Detalhamento Acionável, Antes–Depois–Ponte, Lista de Verificação de Auditoria e Mito vs. Realidade.',
      },
      {
        question: 'Posso usar o Criador de Modelos de Legendas para posts do LinkedIn?',
        answer:
          'Sim, o layout estruturado de gancho, aprendizados e chamada para ação funciona bem para o LinkedIn, e o contador ao vivo ajuda você a ficar dentro dos limites dele.',
      },
      {
        question: 'Posso usar o Criador de Modelos de Legendas para legendas do Instagram?',
        answer:
          'Sim, os modelos são formatados de forma limpa para legendas do Instagram, e você pode adicionar hashtags no fim da legenda criada.',
      },
      {
        question: 'O que é o modelo de legenda Antes–Depois–Ponte?',
        answer:
          'Ele mostra a situação atual do leitor, pinta o estado posterior melhorado e depois preenche a lacuna com seu produto, método ou conselho.',
      },
      {
        question: 'Como funciona o contador de caracteres no criador de legendas?',
        answer:
          'Ele conta caracteres e palavras ao vivo enquanto você digita e sinaliza quando seu rascunho passa de limites como os 280 caracteres do X.',
      },
      {
        question: 'Posso trocar de modelo sem perder meu texto?',
        answer:
          'Sim, trocar de modelo reutiliza seu gancho, pontos e chamada para ação existentes, para que você compare estruturas sem redigitar.',
      },
      {
        question: 'O criador adiciona hashtags automaticamente?',
        answer:
          'Não, ele só coloca as hashtags que você digita, então você controla exatamente quais tags aparecem em cada legenda.',
      },
      {
        question: 'O que faz um bom gancho para uma legenda de redes sociais?',
        answer:
          'Um bom gancho apresenta um benefício claro, um fato surpreendente ou um problema identificável em uma linha curta que faz o leitor parar de rolar.',
      },
      {
        question: 'Posso usar o criador de legendas para posts do X (Twitter)?',
        answer:
          'Sim, o contador avisa aos 280 caracteres, para que você corte seu gancho e seus aprendizados até que o post caiba em um único tweet.',
      },
      {
        question: 'Para que serve o modelo de legenda Mito vs. Realidade?',
        answer:
          'Ele combina um equívoco comum com o fato correto, o que funciona bem para posts educativos e para desmentir conselhos ruins no seu nicho.',
      },
      {
        question: 'Posso editar a legenda depois de copiá-la?',
        answer:
          'Sim, o texto copiado é texto simples, então você pode ajustar palavras, emojis ou quebras de linha no seu aplicativo de agendamento antes de publicar.',
      },
      {
        question: 'O criador salva minhas legendas?',
        answer:
          'Não, os rascunhos ficam só na aba do seu navegador, então copie as legendas finalizadas para suas próprias notas ou agendador antes de fechar a página.',
      },
      {
        question: 'O que devo colocar no campo de chamada para ação?',
        answer:
          'Escreva um próximo passo claro, como comentar, salvar o post, clicar no seu link ou seguir sua conta.',
      },
      {
        question: 'Posso usar o criador de legendas para anúncios de lançamento de produto?',
        answer:
          'Sim, os modelos PAS ou Antes–Depois–Ponte são uma boa opção para lançamentos: apresente o problema, mostre o resultado e termine com onde conseguir.',
      },
      {
        question: 'Por que o criador não reescreve nem melhora minhas palavras?',
        answer:
          'Ele é deliberadamente determinístico, então sua voz e seus fatos ficam exatamente como você os escreveu, em vez de serem substituídos por texto genérico gerado.',
      },
    ],
  },
  'social-handle-formatter': {
    slug: 'formatador-de-nomes-de-usuario',
    name: 'Formatador de Nomes de Usuário para Redes Sociais',
    shortDescription:
      'Gere variações consistentes de nome de usuário de marca, valide regras de caracteres/sintaxe da plataforma e abra URLs diretas de verificação de perfil.',
    keywords: [
      'formatador de nome de usuário social',
      'validador de sintaxe de nome de usuário',
      'gerador de nome de usuário de marca',
      'regras de nome de usuário social',
      'verificador de disponibilidade de nome de usuário',
      'verificador de nome de usuário multiplataforma',
      'regras de nome de usuário do instagram',
      'limite de caracteres de nome de usuário do x',
      'conversor de nome de marca para nome de usuário',
    ],
    seo: {
      title: 'Formatador de Nomes de Usuário – Regras | UtilityFlow',
      description:
        'Gere variações de nome de usuário a partir de um nome de marca, valide as regras de X, Instagram, TikTok, YouTube, Threads e GitHub e abra URLs de verificação.',
      primaryKeyword: 'formatador de nomes de usuário',
      secondaryKeywords: [
        'regras de nome de usuário de redes sociais',
        'gerador de variações de nome de usuário de marca',
        'regras de caracteres de nome de usuário do youtube',
        'verificador de disponibilidade de nome de usuário',
      ],
      longTailKeywords: [
        'verificar tamanho de caracteres e símbolos permitidos de nome de usuário de redes sociais',
        'sugestões consistentes de nome de usuário de marca para x instagram tiktok',
        'validar formato de nome de usuário para github youtube e threads',
        'encontrar variações de nome de usuário de marca quando o nome exato está ocupado',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Transforme qualquer nome de marca, projeto ou criador em candidatos limpos de nome de usuário multiplataforma, valide cada candidato conforme os limites oficiais de caracteres e regras de pontuação de seis redes e vá direto para URLs de perfil ao vivo para verificar a disponibilidade.',
    instructions: [
      {
        title: 'Digite o nome da marca ou do criador',
        description:
          'Digite o nome da sua marca ou de exibição (por exemplo, Utility Hub) para preencher candidatos limpos e consistentes de nome de usuário.',
      },
      {
        title: 'Teste variações ou edite diretamente',
        description:
          'Clique em qualquer variação ou personalize o Nome de Usuário Ativo para testar prefixos/sufixos como get, use, hq ou studio.',
      },
      {
        title: 'Confira a conformidade de sintaxe por plataforma',
        description:
          'Confira o status de Formato válido de cada candidato no X, Instagram, TikTok, YouTube, Threads e GitHub.',
      },
      {
        title: 'Corrija caracteres inválidos',
        description:
          'Se uma plataforma sinalizar um nome de usuário, remova o caractere não permitido — por exemplo, retire hífens para X e Instagram, ou sublinhados para GitHub.',
      },
      {
        title: 'Confira a conformidade de sintaxe e abra URLs',
        description:
          'Confira o status de Formato válido no X, Instagram, TikTok, YouTube, Threads e GitHub e clique em Verificar URL para ver o status de reivindicação ao vivo.',
      },
      {
        title: 'Dica: copie sua lista curta antes de reivindicar',
        description:
          'Copie os nomes de usuário que passam em todas as plataformas importantes para você e reivindique-os um por um, começando pela rede onde sua audiência é maior.',
      },
    ],
    examples: [
      {
        title: 'Comparando nomes com hífen vs sublinhado entre plataformas',
        input: 'Nome de usuário: utility-hub',
        output: 'Válido no GitHub e YouTube @handle · Inválido no X e Instagram (hífens não permitidos)',
        explanation: 'Evita escolher um nome de usuário de marca que não pode ser igual em grandes redes sociais.',
      },
      {
        title: 'Testando um prefixo quando o nome exato está ocupado',
        input: 'Marca: Café Aroma · Variação: getcafearoma',
        output: 'Válido no X, Instagram, TikTok, YouTube, Threads e GitHub (13 caracteres, só letras).',
        explanation: 'O prefixo "get" mantém o nome curto e dentro do limite de 15 caracteres do X.',
      },
    ],
    benefits: [
      'Detecta incompatibilidades de plataforma cedo (como hífens que falham no X/Instagram vs permitidos no GitHub/YouTube)',
      'Impõe limites exatos de caracteres, como o máximo rigoroso de 15 caracteres do X',
      'Nunca inventa selos de disponibilidade ao vivo offline — fornece links diretos clicáveis de perfil',
      'Inclui cópia com um clique do @nome de usuário para a área de transferência',
    ],
    useCases: [
      'Nomear uma nova startup, podcast, newsletter ou projeto de código aberto de forma consistente',
      'Encontrar prefixos/sufixos de reserva quando um nome exato de uma palavra está ocupado',
      'Verificar se um nome de usuário proposto de 18 caracteres passa do limite de 15 caracteres do X',
      'Preparar uma lista de verificação de lançamento de todas as URLs oficiais de perfis sociais',
    ],
    faqs: [
      {
        question: 'Por que esta ferramenta não mostra selos verdes "Disponível" ao vivo automaticamente?',
        answer:
          'As grandes redes sociais bloqueiam verificações de CORS de navegador não autenticadas e limitam a raspagem automatizada de disponibilidade. Em vez de exibir palpites não confiáveis ou inventados, esta ferramenta valida as regras oficiais de sintaxe da plataforma localmente e fornece links diretos de URL para verificar cada plataforma com precisão.',
      },
      {
        question: 'Quais caracteres de nome de usuário funcionam em quase todas as grandes redes?',
        answer:
          'Caracteres alfanuméricos minúsculos (a–z, 0–9) e sublinhados (_) com 4–15 caracteres funcionam ao mesmo tempo no X, Instagram, TikTok, YouTube e Threads.',
      },
      {
        question: 'Por que o GitHub rejeita sublinhados em nomes de usuário?',
        answer:
          'Os nomes de usuário do GitHub só permitem caracteres alfanuméricos e hífens únicos que não estão no início nem no fim, enquanto X e Instagram não permitem hífens.',
      },
      {
        question: 'O Formatador de Nomes de Usuário para Redes Sociais é gratuito?',
        answer:
          'Sim, é gratuito para usar no seu navegador, sem cadastro, e os nomes de marca e ideias de nome de usuário são processados localmente sem serem enviados.',
      },
      {
        question: 'Qual é o tamanho máximo de nome de usuário no X?',
        answer:
          'Os nomes de usuário do X podem ter no máximo 15 caracteres, então esta ferramenta sinaliza qualquer candidato maior que isso para o X.',
      },
      {
        question: 'Como verifico se um nome de usuário social está realmente disponível?',
        answer:
          'Clique no link Verificar URL de cada plataforma para abrir a página de perfil ao vivo; se a página mostrar um perfil real, o nome de usuário está ocupado.',
      },
      {
        question: 'Por que hífens funcionam no GitHub, mas não no X ou Instagram?',
        answer:
          'Cada plataforma define seus próprios caracteres permitidos: o GitHub permite hífens, enquanto X e Instagram só permitem letras, números e sublinhados.',
      },
      {
        question: 'Quais prefixos de nome de usuário devo tentar se meu nome exato estiver ocupado?',
        answer:
          'Prefixos e sufixos comuns incluem get, use, the, hq, studio, official e app — a ferramenta gera essas variações para você testar.',
      },
      {
        question: 'O Formatador de Nomes de Usuário pode verificar nomes de usuário do YouTube?',
        answer:
          'Sim, ele valida candidatos conforme as regras de caracteres de @handle do YouTube e fornece um link direto para verificar o status ao vivo do nome de usuário.',
      },
      {
        question: 'Qual é o tamanho mínimo de nome de usuário na maioria das plataformas?',
        answer:
          'A maioria das plataformas exige pelo menos alguns caracteres, e nomes de usuário que funcionam no X, Instagram, TikTok, YouTube e Threads costumam ter 4–15 caracteres.',
      },
      {
        question: 'Meu nome de usuário deve ser igual em todas as plataformas sociais?',
        answer:
          'Nomes de usuário iguais tornam sua marca mais fácil de encontrar e mais difícil de personificar, então busque um nome que passe nas regras de todas as plataformas que você usa.',
      },
      {
        question: 'Posso usar números no meu nome de usuário social?',
        answer:
          'Sim, números são permitidos nas seis plataformas que esta ferramenta verifica, embora começar um nome de usuário com um número possa parecer menos limpo.',
      },
      {
        question: 'Por que a ferramenta diz que meu nome de usuário é válido, mas a plataforma o rejeita?',
        answer:
          'A validade de sintaxe é só uma verificação; a plataforma também pode rejeitar um nome de usuário porque ele já está ocupado, reservado ou bloqueado por motivos de política.',
      },
      {
        question: 'O Formatador de Nomes de Usuário verifica nomes de usuário do Threads?',
        answer:
          'Sim, ele valida candidatos conforme as regras de nome de usuário do Threads junto com X, Instagram, TikTok, YouTube e GitHub.',
      },
      {
        question: 'Posso usar pontos ou períodos em um nome de usuário social?',
        answer:
          'O Instagram permite pontos em nomes de usuário, mas X, TikTok e GitHub não, então um nome de usuário com pontos não será igual em todos os lugares.',
      },
      {
        question: 'Como escolho um nome de usuário para uma nova startup ou podcast?',
        answer:
          'Digite o nome da sua marca, faça uma lista curta das variações que passam em todas as plataformas e reivindique o mesmo em todos os lugares antes de anunciar.',
      },
      {
        question: 'Posso testar um nome de usuário com sublinhados no GitHub?',
        answer:
          'Você pode testar, mas o GitHub vai rejeitar sublinhados, então a ferramenta o sinaliza como inválido para o GitHub mesmo que ele passe no X e no Instagram.',
      },
      {
        question: 'Minhas ideias de nome de marca são enviadas para um servidor?',
        answer:
          'Não, toda a geração e validação de nomes de usuário acontece localmente no seu navegador, então suas ideias de nomes nunca saem do seu dispositivo.',
      },
      {
        question: 'O que devo fazer se meu nome de usuário ideal estiver ocupado em uma plataforma?',
        answer:
          'Tente um prefixo ou sufixo consistente em todas as plataformas em vez de um nome diferente em uma rede, para que sua marca continue fácil de encontrar.',
      },
      {
        question: 'Posso copiar um nome de usuário direto da ferramenta?',
        answer:
          'Sim, a ferramenta inclui cópia com um clique do nome de usuário ativo, para que você possa colá-lo em formulários de cadastro sem redigitar.',
      },
    ],
  },
  'merge-pdf': {
    slug: 'mesclar-pdf',
    name: 'Mesclar PDF',
    shortDescription:
      'Combine vários documentos PDF em ordem personalizada dentro do seu navegador, sem enviar arquivos para servidores externos.',
    keywords: [
      'mesclar pdf',
      'combinar arquivos pdf',
      'juntar pdf online grátis',
      'mesclador de pdf no navegador',
      'mesclar arquivos pdf grátis',
      'combinar vários pdfs em um',
      'mesclador de pdf sem envio',
      'juntar documentos pdf online',
      'mesclar páginas de pdf em ordem',
    ],
    seo: {
      title: 'Mesclar PDF Grátis – Combine PDFs no Navegador | UtilityFlow',
      description:
        'Combine vários arquivos PDF em um só documento na sequência escolhida, localmente no seu navegador com pdf-lib, sem nenhum envio ao servidor nem limites.',
      primaryKeyword: 'mesclar pdf',
      secondaryKeywords: [
        'combinar arquivos pdf online',
        'juntar páginas de pdf localmente',
        'mesclador de pdf privado',
        'mesclar arquivos pdf grátis',
      ],
      longTailKeywords: [
        'mesclar contratos pdf confidenciais sem enviar ao servidor',
        'combinar vários pdfs e reordenar a sequência no navegador',
        'combinador de documentos pdf grátis no navegador',
        'mesclar arquivos pdf em ordem sem enviar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combine dois ou mais arquivos PDF em um único documento limpo direto na memória do navegador. Veja a contagem de páginas de cada arquivo, reordene documentos com controles para cima/baixo, escolha um nome de arquivo de saída e baixe na hora.',
    instructions: [
      {
        title: 'Adicione vários arquivos PDF',
        description:
          'Selecione dois ou mais arquivos .pdf não criptografados do seu dispositivo; cada arquivo é validado com o cabeçalho %PDF antes de entrar na fila.',
      },
      {
        title: 'Confira contagens de páginas e tamanhos',
        description:
          'Veja a contagem de páginas e o tamanho em bytes mostrados de cada documento na fila para confirmar se você adicionou os arquivos certos.',
      },
      {
        title: 'Organize a ordem da mesclagem',
        description:
          'Use as setas para cima/baixo para ordenar capítulos, apêndices ou faturas antes de combinar.',
      },
      {
        title: 'Dê um nome ao arquivo de saída',
        description:
          'Digite um nome de arquivo personalizado, se quiser, para que o documento mesclado seja fácil de encontrar depois.',
      },
      {
        title: 'Mesclar e baixar',
        description:
          'Clique em Mesclar PDFs e Baixar para combinar os arquivos localmente e salvar o resultado.',
      },
      {
        title: 'Confira o documento mesclado',
        description:
          'Abra o PDF baixado e confira a ordem das páginas e a contagem total de páginas; execute novamente com uma ordem corrigida se algo estiver fora do lugar.',
      },
    ],
    examples: [
      {
        title: 'Combinando uma folha de rosto de fatura e um pacote de recibos',
        input: 'folha-de-rosto.pdf (1 página) + recibos.pdf (4 páginas)',
        output: 'documento-mesclado.pdf (5 páginas)',
        explanation: 'Copia todas as páginas vetoriais, fontes e imagens embutidas em um único contêiner PDF.',
      },
      {
        title: 'Combinando um contrato e um anexo',
        input: 'contrato.pdf (12 páginas) + anexo.pdf (3 páginas)',
        output: 'documento-mesclado.pdf (15 páginas)',
        explanation: 'As páginas são copiadas em ordem, mantendo texto, fontes e imagens embutidas.',
      },
    ],
    benefits: [
      'Zero envio de arquivos mantém contratos, declarações de imposto e NDAs estritamente na sua máquina',
      'Mostra a contagem exata de páginas e o tamanho em bytes por documento na fila',
      'Valida PDFs malformados ou protegidos por senha na hora do envio',
      'Sem marcas d’água, limites de páginas nem limites diários',
    ],
    useCases: [
      'Agrupar propostas de clientes, formulários assinados e apêndices de preços',
      'Combinar documentos fiscais digitalizados de várias partes antes de declarar',
      'Mesclar slides de aula ou guias de estudo em um pacote imprimível',
      'Montar faturas mensais de despesas em um único PDF contábil',
    ],
    faqs: [
      {
        question: 'Esta ferramenta pode mesclar arquivos PDF protegidos por senha?',
        answer:
          'O pdf-lib no navegador exige PDFs não criptografados, a menos que sejam desbloqueados primeiro. Se um arquivo criptografado for enviado, o validador avisa você com clareza em vez de falhar silenciosamente.',
      },
      {
        question: 'Fontes vetoriais e hiperlinks clicáveis são preservados?',
        answer:
          'Sim. Os fluxos de página padrão do PDF, as fontes embutidas e os caminhos vetoriais são copiados diretamente via PDFDocument.copyPages(), sem rasterizar as páginas em imagens borradas.',
      },
      {
        question: 'Há um limite de envio ao servidor?',
        answer:
          'Nenhum arquivo é enviado — o processamento acontece puramente dentro da memória da aba do seu navegador.',
      },
      {
        question: 'A ferramenta Mesclar PDF é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem marcas d’água, limites de páginas ou limites diários, e funciona por completo no seu navegador.',
      },
      {
        question: 'Quantos arquivos PDF posso mesclar de uma vez?',
        answer:
          'Você pode enfileirar quantos a memória do seu navegador suportar com conforto. A contagem de páginas e o tamanho de cada arquivo são mostrados para que você avalie antes de mesclar.',
      },
      {
        question: 'Posso reordenar os PDFs depois de adicioná-los?',
        answer:
          'Sim, use as setas para cima e para baixo ao lado de cada arquivo para definir a ordem exata de mesclagem antes de combinar.',
      },
      {
        question: 'A mesclagem muda a qualidade dos meus PDFs?',
        answer:
          'Não, as páginas são copiadas como dados vetoriais, então texto, fontes e imagens mantêm a qualidade original.',
      },
      {
        question: 'O PDF mesclado mantém favoritos ou sumários?',
        answer:
          'O conteúdo das páginas é totalmente preservado, mas os sumários e favoritos do documento podem não ser transferidos para o arquivo mesclado.',
      },
      {
        question: 'Posso mesclar PDFs digitalizados?',
        answer:
          'Sim, as páginas digitalizadas são copiadas como imagens para o arquivo mesclado, como qualquer outra página.',
      },
      {
        question: 'Quais tipos de arquivo posso mesclar com esta ferramenta?',
        answer:
          'Só arquivos PDF (.pdf). As imagens devem primeiro ser convertidas com a ferramenta Imagens para PDF antes de poderem ser mescladas.',
      },
      {
        question: 'Posso escolher o nome do arquivo de saída do PDF mesclado?',
        answer:
          'Sim, digite um nome de arquivo personalizado antes de clicar em Mesclar; caso contrário, um nome padrão é usado.',
      },
      {
        question: 'A ferramenta Mesclar PDF funciona no celular?',
        answer:
          'Sim, ela funciona em navegadores modernos de celular, embora arquivos muito grandes mesclem mais rápido em um desktop.',
      },
      {
        question: 'Meus arquivos são privados quando mesclo PDFs aqui?',
        answer:
          'Sim, tudo acontece localmente na aba do seu navegador e nenhum arquivo é enviado para nenhum servidor.',
      },
      {
        question: 'O que acontece se um dos meus PDFs estiver corrompido?',
        answer:
          'O validador verifica o cabeçalho %PDF de cada arquivo e avisa sobre arquivos malformados ou criptografados antes de a mesclagem começar.',
      },
      {
        question: 'Posso mesclar PDFs de tamanhos de página diferentes?',
        answer:
          'Sim, cada página mantém seu tamanho e orientação originais no documento mesclado.',
      },
      {
        question: 'O PDF mesclado continua pesquisável?',
        answer:
          'Sim, PDFs baseados em texto mantêm texto selecionável e pesquisável porque as páginas são copiadas, não rasterizadas em imagens.',
      },
      {
        question: 'Posso mesclar um PDF com ele mesmo?',
        answer:
          'Sim, você pode adicionar o mesmo arquivo mais de uma vez se precisar que uma página ou documento se repita no resultado.',
      },
      {
        question: 'Há um tamanho máximo de arquivo para mesclar PDFs?',
        answer:
          'Não há um limite definido; o limite prático é a memória do navegador disponível no seu dispositivo.',
      },
      {
        question: 'O que devo fazer se o download mesclado não iniciar?',
        answer:
          'Confira as configurações de download do seu navegador e o bloqueador de pop-ups e clique em Mesclar novamente; o arquivo é gerado localmente a cada vez.',
      },
      {
        question: 'Posso mesclar PDFs e depois dividir o resultado?',
        answer:
          'Sim, baixe o PDF mesclado e abra-o na ferramenta Dividir PDF para extrair as páginas de que precisar.',
      },
    ],
  },
  'split-pdf': {
    slug: 'dividir-pdf',
    name: 'Dividir e Extrair Páginas de PDF',
    shortDescription:
      'Extraia intervalos de páginas personalizados, páginas ímpares/pares ou divida em PDFs individuais de uma página localmente via pdf-lib.',
    keywords: [
      'dividir pdf',
      'extrair páginas de pdf',
      'separar páginas de pdf',
      'extrator de páginas de pdf',
      'dividir páginas de pdf grátis',
      'divisor de pdf online',
      'extrair páginas de pdf grátis',
      'dividir pdf em páginas individuais',
      'dividir pdf por intervalo de páginas',
    ],
    seo: {
      title: 'Dividir PDF Grátis – Extrair Páginas Online | UtilityFlow',
      description:
        'Extraia intervalos de páginas de PDF (como 1-3, 5), separe páginas ímpares ou pares, ou divida em páginas individuais direto no navegador, sem enviar arquivos.',
      primaryKeyword: 'dividir pdf',
      secondaryKeywords: [
        'extrair páginas de pdf',
        'extrator de intervalo de páginas de pdf',
        'separar pdf em páginas individuais',
        'dividir pdf por intervalo de páginas',
      ],
      longTailKeywords: [
        'extrair páginas 1-3 e 5 de pdf sem envio ao servidor',
        'dividir páginas ímpares e pares de pdf no navegador',
        'separar pdf de várias páginas localmente grátis',
        'dividir pdf e baixar só as páginas selecionadas',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Extraia intervalos exatos de páginas (`1-3, 5, 8-10`), isole páginas ímpares ou pares para remontagem frente e verso, ou divida PDFs mais curtos em arquivos individuais de uma página, tudo dentro da memória do cliente.',
    instructions: [
      {
        title: 'Carregue seu documento PDF',
        description:
          'Escolha qualquer arquivo PDF não criptografado; a ferramenta valida o cabeçalho e exibe a contagem total de páginas.',
      },
      {
        title: 'Escolha o modo de divisão',
        description:
          'Selecione Extrair Intervalos de Páginas, Somente Páginas Ímpares, Somente Páginas Pares ou Dividir Todas as Páginas Individuais.',
      },
      {
        title: 'Digite as páginas ou intervalos',
        description:
          'Para o modo de intervalo, digite páginas como "1-3, 5, 9-12"; o analisador sinaliza intervalos fora dos limites ou invertidos antes de salvar.',
      },
      {
        title: 'Confira sua seleção',
        description:
          'Confirme se o modo e a lista de páginas correspondem ao que você precisa, principalmente para extrações de ímpares/pares e individuais.',
      },
      {
        title: 'Dividir e baixar',
        description:
          'Clique em Dividir e Baixar PDF para gerar seu documento reduzido localmente.',
      },
      {
        title: 'Confira o resultado e repita se necessário',
        description:
          'Abra o arquivo baixado para confirmar se as páginas certas foram extraídas; no modo individual, permita vários downloads no seu navegador se solicitado.',
      },
    ],
    examples: [
      {
        title: 'Extraindo páginas de assinatura de um contrato de 12 páginas',
        input: 'Páginas a Extrair: 1, 10-12',
        output: 'contrato-extraido.pdf (4 páginas)',
        explanation: 'Exporta as páginas 1, 10, 11 e 12 em sequência crescente, deixando seu arquivo original intacto.',
      },
      {
        title: 'Extraindo só as páginas ímpares',
        input: 'Modo: Somente Páginas Ímpares · Documento: 12 páginas',
        output: 'documento-impares.pdf (6 páginas: 1, 3, 5, 7, 9, 11)',
        explanation: 'Extrai só as páginas ímpares, útil para fluxos de digitalização duplex.',
      },
    ],
    benefits: [
      'O analisador flexível de intervalos detecta intervalos fora dos limites ou invertidos antes de salvar',
      'Preserva a nitidez vetorial original e a seleção de texto',
      'Suporta extração de Ímpares/Pares para fluxos de trabalho de scanner duplex',
      'Protege documentos financeiros e jurídicos privados de servidores de envio de terceiros',
    ],
    useCases: [
      'Extrair só os capítulos relevantes de um relatório grande antes de compartilhar',
      'Separar faturas individuais agrupadas dentro de um PDF mestre de cobrança',
      'Extrair páginas de assinatura ou apêndice de contratos de várias páginas',
      'Recuperar digitalizações de ímpares/pares de alimentadores de documentos de um lado',
    ],
    faqs: [
      {
        question: 'Por que Dividir Todas as Páginas Individuais tem limite de 25 páginas?',
        answer:
          'Os navegadores costumam bloquear ou solicitar confirmação quando um site aciona mais de ~25 downloads rápidos simultâneos de arquivos. Use Extrair Intervalos de Páginas para extrações maiores em várias partes.',
      },
      {
        question: 'A divisão altera meu arquivo PDF original?',
        answer:
          'Não. O navegador lê uma cópia local na memória e gera um novo PDF baixado.',
      },
      {
        question: 'Qual sintaxe posso digitar em Páginas a Extrair?',
        answer:
          'Combine números únicos e intervalos com hífen separados por vírgulas, como "1-3, 5, 9-12".',
      },
      {
        question: 'A ferramenta Dividir PDF é gratuita?',
        answer:
          'Sim, é gratuita, sem marcas d’água nem limites de páginas além do limite de 25 páginas do modo individual.',
      },
      {
        question: 'Posso extrair só as páginas ímpares de um PDF?',
        answer:
          'Sim, escolha Somente Páginas Ímpares; isto é útil para fluxos de trabalho de digitalização duplex.',
      },
      {
        question: 'Posso extrair só as páginas pares de um PDF?',
        answer:
          'Sim, escolha Somente Páginas Pares para extrair só as páginas de número par.',
      },
      {
        question: 'O que acontece se eu digitar um número de página que não existe?',
        answer:
          'O analisador de intervalos valida sua entrada e avisa sobre intervalos fora dos limites ou invertidos antes de salvar qualquer coisa.',
      },
      {
        question: 'Posso extrair páginas de PDF em uma ordem personalizada, como 10-12 e depois 1?',
        answer:
          'As páginas extraídas são salvas em ordem crescente. Para reordená-las depois, use a ferramenta Reordenar Páginas de PDF.',
      },
      {
        question: 'A divisão de um PDF mantém o texto pesquisável?',
        answer:
          'Sim, as páginas são copiadas como dados vetoriais, então o texto continua selecionável e pesquisável no arquivo extraído.',
      },
      {
        question: 'Posso dividir um PDF protegido por senha?',
        answer:
          'Não, PDFs criptografados devem ser desbloqueados primeiro; a ferramenta só aceita arquivos não criptografados.',
      },
      {
        question: 'Posso dividir um PDF digitalizado?',
        answer:
          'Sim, as páginas digitalizadas são extraídas exatamente como as páginas de texto.',
      },
      {
        question: 'O PDF extraído manterá sua qualidade original?',
        answer:
          'Sim, nenhuma recompressão ou rasterização acontece durante a extração, por isso cada página extraída mantém a qualidade exata do PDF original.',
      },
      {
        question: 'Como divido um PDF em arquivos de uma página?',
        answer:
          'Escolha Dividir Todas as Páginas Individuais; cada página é baixada como seu próprio PDF, até 25 páginas por execução.',
      },
      {
        question: 'Posso baixar só a primeira página de um PDF?',
        answer:
          'Sim, escolha Extrair Intervalos de Páginas e digite "1" no campo Páginas a Extrair.',
      },
      {
        question: 'A ferramenta Dividir PDF envia meu arquivo para algum lugar?',
        answer:
          'Não, a divisão é executada por completo no seu navegador; seu arquivo nunca sai do seu dispositivo.',
      },
      {
        question: 'Posso usar a ferramenta Dividir PDF no meu celular?',
        answer:
          'Sim, ela funciona em navegadores modernos de celular, embora arquivos muito grandes sejam divididos com mais conforto em um desktop.',
      },
      {
        question: 'Qual é a diferença entre Extrair Intervalos de Páginas e Dividir Individualmente?',
        answer:
          'Os intervalos combinam as páginas selecionadas em um novo PDF, enquanto o modo individual cria um PDF separado por página.',
      },
      {
        question: 'Posso extrair as páginas 1-3 e a página 5 de uma vez?',
        answer:
          'Sim, digite "1-3, 5" — números únicos e intervalos com hífen podem ser combinados com vírgulas.',
      },
      {
        question: 'Os favoritos sobrevivem quando divido um PDF?',
        answer:
          'O conteúdo das páginas é preservado, mas os sumários e favoritos do documento geralmente não são transferidos para os arquivos extraídos.',
      },
      {
        question: 'Meu download não iniciou após a divisão — o que devo fazer?',
        answer:
          'Permita vários downloads para este site no seu navegador e clique em Dividir novamente; o arquivo é gerado localmente a cada vez.',
      },
    ],
  },
  'images-to-pdf': {
    slug: 'imagens-para-pdf',
    name: 'Conversor de Imagens para PDF',
    shortDescription:
      'Converta imagens PNG, JPG e WebP em um único PDF A4, Carta EUA ou ajustado à imagem, localmente no seu navegador.',
    keywords: [
      'imagens para pdf',
      'jpg para pdf',
      'conversor de png para pdf',
      'webp para pdf',
      'converter imagens para pdf grátis',
      'jpg png para pdf',
      'conversor de foto para pdf',
      'combinar imagens em um pdf',
      'captura de tela para pdf',
    ],
    seo: {
      title: 'Imagens para PDF – Converter JPG, PNG e WebP | UtilityFlow',
      description:
        'Transforme fotos ou capturas em JPG, PNG e WebP em um PDF limpo de várias páginas com A4, Carta EUA ou tamanho exato, tudo no navegador. Sem envios, grátis.',
      primaryKeyword: 'imagens para pdf',
      secondaryKeywords: [
        'conversor de jpg para pdf no navegador',
        'png para pdf online grátis',
        'combinar fotos em pdf',
        'converter imagens para pdf grátis',
      ],
      longTailKeywords: [
        'converter imagens jpg png webp para pdf a4 sem envio',
        'juntar capturas de tela em pdf de várias páginas localmente',
        'ajustar dimensões de imagem à página de pdf sem cortar',
        'transformar fotos de celular em documento pdf grátis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combine digitalizações, recibos ou capturas de tela em JPG, PNG e WebP em um PDF limpo de várias páginas. Ordene as imagens visualmente, escolha A4 Retrato, Carta EUA ou Dimensões Exatas da Imagem, defina margens e gere localmente via `pdf-lib`.',
    instructions: [
      {
        title: 'Selecione uma ou mais imagens',
        description:
          'Escolha imagens JPG, PNG ou WebP; miniaturas e dimensões em pixels aparecem na hora.',
      },
      {
        title: 'Organize a ordem das imagens',
        description:
          'Use as setas para cima/baixo para definir a sequência de páginas do seu PDF.',
      },
      {
        title: 'Configure o tamanho da página e as margens',
        description:
          'Escolha A4 Retrato, Carta EUA ou Dimensões Exatas da Imagem e defina uma margem para tamanhos de página padrão.',
      },
      {
        title: 'Dê um nome ao arquivo de saída',
        description:
          'Digite um nome de arquivo personalizado para que o PDF finalizado seja fácil de identificar.',
      },
      {
        title: 'Gerar PDF',
        description:
          'Clique em Converter Imagens para PDF para criar o documento localmente e baixá-lo na hora.',
      },
      {
        title: 'Confira e ajuste',
        description:
          'Abra o PDF para conferir o layout e as margens; reordene as imagens ou mude a configuração de página e converta novamente se uma página parecer errada.',
      },
    ],
    examples: [
      {
        title: 'Compilando recibos de despesas em páginas A4 padrão',
        input: '3 JPGs de recibo · A4 Retrato · Margem de 24 pt',
        output: 'pacote-de-imagens.pdf (3 páginas A4 centralizadas, com proporção preservada)',
        explanation: 'Dimensiona cada imagem proporcionalmente para caber dentro das margens imprimíveis de A4 sem distorção.',
      },
      {
        title: 'Convertendo uma única foto em PDF',
        input: '1 foto JPG · Dimensões Exatas da Imagem',
        output: 'foto.pdf (1 página no tamanho nativo da imagem)',
        explanation: 'Uma imagem produz um PDF de uma página sem margens nem redimensionamento.',
      },
    ],
    benefits: [
      'Embute fluxos nativos de JPG e PNG diretamente e converte WebP de forma limpa via Canvas',
      'Preserva a proporção total da imagem sem esticar nem cortar',
      'Suporta folhas imprimíveis A4 / Carta EUA, além de páginas exatas de imagem sem margem',
      'Mantém fotos de documento, recibos e documentos privados estritamente offline na RAM do navegador',
    ],
    useCases: [
      'Transformar fotos de recibos do celular em um PDF limpo de despesas mensais',
      'Compilar mockups de design ou capturas de tela de UI em um deck de revisão A4',
      'Converter páginas de documentos digitalizados em um único PDF enviável',
      'Empacotar pranchas de arte de portfólio sem compressão em nuvem',
    ],
    faqs: [
      {
        question: 'Como a ferramenta lida com imagens WebP?',
        answer:
          'Como a especificação PDF embute nativamente JPEG e PNG, e não WebP, a ferramenta decodifica imagens WebP sem problemas via HTML5 Canvas em quadros PNG sem perdas antes de embutir.',
      },
      {
        question: 'As fotos em retrato e paisagem serão esticadas para caber em A4?',
        answer:
          'Não. As imagens são dimensionadas proporcionalmente usando Math.min(maxWidth/imgWidth, maxHeight/imgHeight) e centralizadas na página.',
      },
      {
        question: 'As miniaturas de imagem são enviadas para algum lugar?',
        answer:
          'Não. As prévias usam URLs de Objeto locais temporárias dentro da aba do seu navegador.',
      },
      {
        question: 'A ferramenta Imagens para PDF é gratuita?',
        answer:
          'Sim, é gratuita, sem marcas d’água e sem limite de quantas imagens você converte.',
      },
      {
        question: 'Quais formatos de imagem posso converter para PDF?',
        answer:
          'JPG, PNG e WebP são suportados, por isso você pode converter fotos, capturas de tela e imagens da web em um único PDF.',
      },
      {
        question: 'Posso converter uma única imagem para PDF?',
        answer:
          'Sim, uma imagem produz um PDF de uma página, o que funciona bem para compartilhar uma única foto ou um documento digitalizado como arquivo.',
      },
      {
        question: 'Posso reordenar imagens antes de convertê-las para PDF?',
        answer:
          'Sim, use as setas para cima e para baixo para organizar a ordem das páginas antes de gerar o PDF.',
      },
      {
        question: 'Quais tamanhos de página estão disponíveis ao converter imagens para PDF?',
        answer:
          'A4 Retrato, Carta EUA e Dimensões Exatas da Imagem, que cria uma página por imagem em seu tamanho nativo.',
      },
      {
        question: 'Minhas imagens serão cortadas quando convertidas para PDF?',
        answer:
          'Não, as imagens são dimensionadas proporcionalmente e centralizadas; nada é cortado nem esticado.',
      },
      {
        question: 'Posso adicionar margens ao redor das minhas imagens no PDF?',
        answer:
          'Sim, defina uma margem (por exemplo, 24 pt) ao usar tamanhos de página A4 ou Carta EUA.',
      },
      {
        question: 'Converter imagens para PDF reduz a qualidade delas?',
        answer:
          'Os fluxos de JPG e PNG são embutidos nativamente, e o WebP é convertido via Canvas para PNG sem perdas, então a qualidade é preservada.',
      },
      {
        question: 'Posso converter fotos HEIC do meu iPhone para PDF?',
        answer:
          'Não diretamente; converta HEIC para JPG ou PNG primeiro e depois use esta ferramenta.',
      },
      {
        question: 'Minhas fotos são enviadas para um servidor ao converter para PDF?',
        answer:
          'Não, a conversão é executada localmente no seu navegador e as prévias usam URLs de Objeto locais temporárias.',
      },
      {
        question: 'Posso usar a ferramenta Imagens para PDF no celular?',
        answer:
          'Sim, ela funciona em navegadores de celular; escolha imagens direto da sua biblioteca de fotos.',
      },
      {
        question: 'O que acontece com imagens muito grandes?',
        answer:
          'Imagens grandes são embutidas em resolução total, então o PDF resultante pode ser grande; comprima-as primeiro se o tamanho do arquivo importar.',
      },
      {
        question: 'Posso misturar JPG, PNG e WebP em um PDF?',
        answer:
          'Sim, você pode combinar os três formatos em um único documento, e as páginas permanecem na ordem em que você as organizou.',
      },
      {
        question: 'As páginas do PDF estarão na mesma ordem que minhas imagens?',
        answer:
          'Sim, as páginas seguem a ordem mostrada na lista de imagens, por isso reorganize suas imagens antes se quiser uma sequência de páginas diferente.',
      },
      {
        question: 'Posso definir um nome de arquivo personalizado para o PDF?',
        answer:
          'Sim, digite seu nome de arquivo preferido antes de converter, e o PDF baixado usará esse nome em vez do nome padrão.',
      },
      {
        question: 'A ferramenta mantém a transparência da imagem?',
        answer:
          'A transparência de PNG é preservada em páginas de Dimensões Exatas da Imagem; em páginas A4 ou Carta, a imagem fica sobre um fundo branco de página.',
      },
      {
        question: 'Meu PDF não baixou — o que devo fazer?',
        answer:
          'Confira as permissões de download do seu navegador e tente novamente; o arquivo é gerado localmente na sua aba.',
      },
    ],
  },
  'pdf-to-images': {
    slug: 'pdf-para-imagens',
    name: 'PDF para Imagens (PNG / JPG)',
    shortDescription:
      'Renderize páginas de PDF em imagens PNG ou JPG baixáveis com resolução de 1,0× a 2,0× localmente via PDF.js.',
    keywords: [
      'pdf para imagens',
      'pdf para png',
      'conversor de pdf para jpg',
      'renderizar páginas de pdf como imagens',
      'converter pdf para png grátis',
      'converter pdf para jpg',
      'página de pdf para imagem',
      'exportar páginas de pdf como png',
      'salvar pdf como imagem online',
    ],
    seo: {
      title: 'PDF para Imagens – Páginas para PNG e JPG | UtilityFlow',
      description:
        'Renderize páginas de PDF em PNG ou JPG com até 2× de resolução no navegador. Escolha páginas exatas, confira cada renderização e baixe só o que precisar.',
      primaryKeyword: 'pdf para imagens',
      secondaryKeywords: [
        'conversor de pdf para png',
        'pdf para jpg online grátis',
        'extrair página de pdf como imagem',
        'converter pdf para png grátis',
      ],
      longTailKeywords: [
        'converter páginas de pdf para png de alta resolução no navegador',
        'salvar página única de pdf como jpg sem enviar o documento',
        'renderizador de páginas pdfjs para png no navegador',
        'renderizar slides de pdf para imagens png para compartilhar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Rasterize páginas de PDF em imagens PNG sem perdas nítidas ou JPG compacto direto no seu navegador usando o mecanismo de renderização PDF.js da Mozilla — com filtragem de intervalo de páginas, seleção de escala (`1,0×`–`2,0×`) e prévias visuais.',
    instructions: [
      {
        title: 'Escolha um arquivo PDF',
        description:
          'Selecione qualquer documento PDF não criptografado; o PDF.js lê a contagem total de páginas na hora.',
      },
      {
        title: 'Escolha as páginas para renderizar',
        description:
          'Digite "todas" ou um intervalo de páginas (até 20 páginas por lote), como "1-3, 5".',
      },
      {
        title: 'Escolha o formato e a escala',
        description:
          'Escolha PNG para texto nítido ou JPG para arquivos menores com muitas fotos, e selecione resolução de 1,0×, 1,5× ou 2,0×.',
      },
      {
        title: 'Renderize as páginas',
        description:
          'Inicie a renderização e aguarde as prévias das páginas aparecerem; lotes maiores demoram um pouco mais.',
      },
      {
        title: 'Confira as prévias',
        description:
          'Veja cada miniatura renderizada para conferir nitidez e conteúdo correto antes de baixar.',
      },
      {
        title: 'Baixe suas imagens',
        description:
          'Clique em .PNG ou .JPG em qualquer cartão de página para salvar essa imagem; repita o lote para as páginas restantes, se necessário.',
      },
    ],
    examples: [
      {
        title: 'Exportando slides de apresentação para compartilhar nas redes sociais',
        input: 'Páginas: 1-3 · Formato: PNG · Escala: 2,0× (144 DPI)',
        output: '3 imagens PNG nítidas em 2× de slides, prontas para LinkedIn ou incorporações de blog',
        explanation: 'A renderização de canvas em alta escala mantém diagramas e tipografia nítidos.',
      },
      {
        title: 'Exportando uma única página como JPG',
        input: 'Páginas: 1 · Formato: JPG · Escala: 1,0×',
        output: '1 imagem JPG da página 1, pronta para compartilhar por mensagem',
        explanation: 'O JPG compacto é ideal para compartilhar uma única página por mensagem ou e-mail.',
      },
    ],
    benefits: [
      'Usa o Web Worker do PDF.js empacotado com Vite — zero solicitações de script de CDN externo',
      'Preenche automaticamente o fundo branco do canvas ao exportar PDFs transparentes para JPG',
      'Permite direcionar intervalos exatos de páginas em vez de renderizar um arquivo inteiro de 100 páginas',
      'A renderização privada de canvas no navegador protege documentos sensíveis',
    ],
    useCases: [
      'Transformar slides de pitch deck em PDF em gráficos de post de blog ou sociais',
      'Salvar uma única página de certificado ou ingresso assinado como foto de celular',
      'Gerar prévias nítidas de UI de apostilas imprimíveis em PDF',
      'Inspecionar a renderização de fontes/layout visualmente fora de aplicativos dedicados de PDF',
    ],
    faqs: [
      {
        question: 'Devo escolher PNG ou JPG para páginas de PDF?',
        answer:
          'Escolha PNG para slides, documentos de texto, recibos e gráficos em que bordas nítidas importam. Escolha JPG ao exportar folhetos com muitas fotos para tamanhos de arquivo menores.',
      },
      {
        question: 'Por que PDF para Imagens renderiza até 20 páginas por lote?',
        answer:
          'Canvases de alta resolução 2× consomem GPU/RAM significativa por página; lotes de até 20 páginas mantêm as abas do navegador responsivas em celulares e laptops.',
      },
      {
        question: 'Isto funciona em PDFs protegidos por senha?',
        answer:
          'PDFs criptografados devem ser desbloqueados antes de renderizar localmente, porque a ferramenta não consegue ler as páginas de um arquivo que ainda está bloqueado.',
      },
      {
        question: 'A ferramenta PDF para Imagens é gratuita?',
        answer:
          'Sim, é gratuita, sem marcas d’água; a renderização acontece localmente no seu navegador.',
      },
      {
        question: 'Qual resolução devo escolher para redes sociais?',
        answer:
          '2,0× dá os resultados mais nítidos para posts e incorporações de blog, enquanto 1,0× basta para prévias rápidas.',
      },
      {
        question: 'Posso exportar só uma página como imagem?',
        answer:
          'Sim, digite esse número de página no campo de intervalo de páginas.',
      },
      {
        question: 'Posso exportar todas as páginas de um PDF de uma vez?',
        answer:
          'Você pode renderizar até 20 páginas por lote; repita o processo para documentos mais longos.',
      },
      {
        question: 'Por que minha exportação JPG está mostrando um fundo branco?',
        answer:
          'O JPG não tem transparência, então áreas transparentes do PDF são preenchidas automaticamente de branco.',
      },
      {
        question: 'O PDF para Imagens mantém o texto nítido?',
        answer:
          'Sim, as páginas são renderizadas em escala de até 2× com PDF.js, mantendo texto e diagramas nítidos.',
      },
      {
        question: 'Posso escolher quais páginas renderizar como imagens?',
        answer:
          'Sim, digite "todas" ou um intervalo como "1-3, 5" no campo de páginas.',
      },
      {
        question: 'Meus arquivos PDF são enviados para algum lugar?',
        answer:
          'Não, a renderização acontece no seu navegador via um worker local de PDF.js; nada sai do seu dispositivo.',
      },
      {
        question: 'Posso usar PDF para Imagens no meu celular?',
        answer:
          'Sim, embora renderizações de alta resolução usem mais memória, então lotes menores funcionam melhor em celulares.',
      },
      {
        question: 'Qual é a diferença entre as escalas de 1,0×, 1,5× e 2,0×?',
        answer:
          'Escalas maiores renderizam mais pixels por página, produzindo imagens maiores e mais nítidas; 2,0× é cerca de 144 DPI.',
      },
      {
        question: 'Posso baixar todas as páginas renderizadas com um clique?',
        answer:
          'Cada cartão de página tem seu próprio botão de download .PNG ou .JPG; baixe as páginas de que precisar individualmente.',
      },
      {
        question: 'Os gráficos vetoriais e tabelas ficam nítidos?',
        answer:
          'Sim, o PDF.js rasteriza o conteúdo vetorial na escala escolhida, então tabelas e diagramas ficam nítidos.',
      },
      {
        question: 'Por que a renderização demora em PDFs grandes?',
        answer:
          'Cada página é desenhada em um canvas em alta resolução; renderizar algumas páginas por vez mantém a aba responsiva.',
      },
      {
        question: 'Posso converter um PDF digitalizado em imagens?',
        answer:
          'Sim, as páginas digitalizadas são renderizadas como imagens exatamente como aparecem no PDF.',
      },
      {
        question: 'A ferramenta PDF para Imagens funciona offline?',
        answer:
          'Depois que a página carrega, a renderização é executada localmente no seu navegador sem mais solicitações de rede.',
      },
      {
        question: 'Minha imagem renderizada parece borrada — o que devo fazer?',
        answer:
          'Renderize novamente em escala 2,0× e escolha PNG para páginas com muito texto.',
      },
      {
        question: 'Posso usar as imagens exportadas comercialmente?',
        answer:
          'As imagens são suas para usar como você usaria o PDF original; respeite os direitos autorais do documento de origem.',
      },
    ],
  },
  'pdf-page-rotator': {
    slug: 'rotacionador-de-paginas-de-pdf',
    name: 'Rotacionador de Páginas de PDF',
    shortDescription:
      'Gire todas as páginas, páginas ímpares/pares ou intervalos específicos de páginas em 90°, 180° ou 270° permanentemente, sem perda de qualidade.',
    keywords: [
      'girar pdf',
      'rotacionador de páginas de pdf',
      'corrigir páginas de pdf de lado',
      'salvar pdf girado',
      'girar páginas de pdf online grátis',
      'girar pdf 90 graus',
      'corrigir pdf girado',
      'girar páginas de pdf permanentemente',
      'corretor de orientação de pdf',
    ],
    seo: {
      title: 'Rotacionador de Páginas de PDF – Corrigir PDF | UtilityFlow',
      description:
        'Gire páginas de PDF de lado ou de cabeça para baixo em 90°, 180° ou 270° em todas as páginas, ímpares/pares ou intervalos, permanentemente, no seu navegador.',
      primaryKeyword: 'rotacionador de páginas de pdf',
      secondaryKeywords: [
        'girar pdf permanentemente',
        'corrigir digitalização de pdf de cabeça para baixo',
        'girar páginas específicas de pdf',
        'girar pdf 90 graus online',
      ],
      longTailKeywords: [
        'girar só as páginas 2 e 4 de um documento pdf online',
        'girar pdf digitalizado 90 graus permanentemente sem recodificar',
        'ferramenta de orientação de páginas de pdf no navegador',
        'girar páginas de pdf de cabeça para baixo permanentemente grátis',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Corrija tabelas de lado em paisagem ou digitalizações de documentos de cabeça para baixo permanentemente no dicionário de páginas do PDF. Aplique rotações de `90°` no sentido horário, `90°` no sentido anti-horário ou `180°` a todas as páginas, folhas ímpares/pares ou intervalos exatos de páginas.',
    instructions: [
      {
        title: 'Carregue seu PDF',
        description:
          'Selecione o arquivo PDF que contém páginas de lado ou invertidas.',
      },
      {
        title: 'Escolha o ângulo de rotação',
        description:
          'Escolha 90° no Sentido Horário, 90° no Sentido Anti-horário ou 180°, dependendo de como as páginas estão desalinhadas.',
      },
      {
        title: 'Escolha o escopo de páginas',
        description:
          'Selecione Todas as Páginas, Intervalos Específicos, Ímpares ou Pares; para intervalos, digite páginas como "2, 5-7".',
      },
      {
        title: 'Confira a orientação atual',
        description:
          'Verifique quais páginas estão realmente de lado para girar só as que precisam.',
      },
      {
        title: 'Aplicar e baixar',
        description:
          'Clique em Aplicar Rotação e Baixar PDF para salvar o arquivo corrigido permanentemente.',
      },
      {
        title: 'Confira e corrija o que restou',
        description:
          'Abra o PDF baixado; se uma página ainda estiver de lado, execute novamente com mais 90° na mesma direção.',
      },
    ],
    examples: [
      {
        title: 'Corrigindo um único gráfico financeiro girado na página 3',
        input: 'Rotação: 90° no Sentido Horário · Escopo: Intervalos Específicos de Páginas (3)',
        output: 'Só a página 3 gira no sentido horário; todas as outras páginas preservam a orientação existente.',
        explanation: 'Soma 90° módulo 360 aos metadados de rotação de página existentes sem rasterizar o texto.',
      },
      {
        title: 'Corrigindo um documento inteiro de cabeça para baixo',
        input: 'Rotação: 180° · Escopo: Todas as Páginas',
        output: 'Todas as páginas giram 180°; o documento de cabeça para baixo fica legível.',
        explanation: 'A rotação de 180° vira cada página de cabeça para baixo para a orientação correta sem recodificar nada.',
      },
    ],
    benefits: [
      'Rotação sem perdas — atualiza os sinalizadores de orientação de página do PDF sem recomprimir texto ou imagens',
      'Preserva os ângulos de página existentes de forma limpa (calcula a rotação relativa mod 360°)',
      'Direciona intervalos seletivos como "2, 5-7" sem girar páginas direitas',
      'Download instantâneo no navegador com zero envio ao servidor',
    ],
    useCases: [
      'Corrigir lotes de scanner de cabeça para baixo em celulares ou copiadoras de escritório',
      'Girar planilhas largas em paisagem dentro de relatórios majoritariamente em retrato',
      'Corrigir anexos de orientação mista após mesclar documentos',
      'Preparar arquivos de conformidade orientados de forma limpa para portais',
    ],
    faqs: [
      {
        question: 'Girar páginas reduz a nitidez de texto ou imagem?',
        answer:
          'Não. Definir a propriedade de rotação de página do PDF é totalmente sem perdas e não recodifica fontes nem imagens embutidas.',
      },
      {
        question: 'E se uma página do meu PDF já estava girada 90°?',
        answer:
          'O rotacionador lê o ângulo de rotação atual de cada página e soma o delta escolhido módulo 360°, então as mudanças de orientação são previsíveis em relação a como a página está agora.',
      },
      {
        question: 'Posso girar só uma única página em um PDF de 20 páginas?',
        answer:
          'Sim. Escolha "Intervalos Específicos de Páginas" e digite esse número exato de página (por exemplo, "7").',
      },
      {
        question: 'O Rotacionador de Páginas de PDF é gratuito?',
        answer:
          'Sim, é gratuito, sem marcas d’água nem limites, e você pode girar quantos PDFs precisar sem criar uma conta.',
      },
      {
        question: 'Posso girar todas as páginas de um PDF de uma vez?',
        answer:
          'Sim, escolha Todas as Páginas e selecione 90° no sentido horário, 90° no sentido anti-horário ou 180°.',
      },
      {
        question: 'Posso girar só páginas ímpares ou pares?',
        answer:
          'Sim, escolha o escopo Ímpares ou Pares; isto é útil para corrigir lotes de digitalização duplex.',
      },
      {
        question: 'Em quais ângulos posso girar páginas de PDF?',
        answer:
          'Você pode girar 90° no sentido horário, 90° no sentido anti-horário e 180°, por isso qualquer página de lado ou de cabeça para baixo pode ser corrigida com um clique.',
      },
      {
        question: 'Posso girar uma página de PDF em um ângulo personalizado como 45°?',
        answer:
          'Não, só 90°, 180° e 270° (por meio de rotações repetidas de 90°) são suportados, já que a rotação de PDF é definida em quartos de volta.',
      },
      {
        question: 'A rotação é permanente?',
        answer:
          'Sim, a rotação é gravada no dicionário de páginas do PDF e salva no arquivo baixado.',
      },
      {
        question: 'A rotação muda o tamanho do arquivo PDF?',
        answer:
          'Quase nada; só os metadados de orientação mudam, então o arquivo fica quase do mesmo tamanho.',
      },
      {
        question: 'Posso girar um PDF protegido por senha?',
        answer:
          'Não, PDFs criptografados devem ser desbloqueados primeiro, porque a ferramenta não consegue alterar as páginas de um arquivo que ainda está bloqueado.',
      },
      {
        question: 'O Rotacionador de Páginas de PDF envia meu arquivo?',
        answer:
          'Não, a rotação é executada por completo no seu navegador; seu arquivo nunca sai do seu dispositivo.',
      },
      {
        question: 'Posso girar páginas em um PDF digitalizado?',
        answer:
          'Sim, as páginas digitalizadas giram como as páginas de texto, porque a rotação gira toda a imagem da página sem ler o seu conteúdo.',
      },
      {
        question: 'A rotação corrige um PDF que abre de lado em todos os visualizadores?',
        answer:
          'Sim, o arquivo salvo abre na orientação corrigida em qualquer visualizador de PDF.',
      },
      {
        question: 'Posso girar páginas diferentes em quantidades diferentes?',
        answer:
          'Execute a ferramenta uma vez por ângulo: gire um intervalo, baixe e depois gire outro intervalo no resultado.',
      },
      {
        question: 'O que devo fazer se uma página ainda estiver de lado após girar?',
        answer:
          'Confira primeiro como a página está agora e some mais 90° na mesma direção, já que a rotação é relativa ao ângulo atual.',
      },
      {
        question: 'A rotação afeta links clicáveis ou campos de formulário?',
        answer:
          'Os links e anotações giram com a página, então continuam alinhados com o conteúdo.',
      },
      {
        question: 'Posso usar o Rotacionador de Páginas de PDF no meu celular?',
        answer:
          'Sim, ele funciona em navegadores modernos de celular, por isso você pode abrir um PDF no celular e girar as páginas por lá.',
      },
      {
        question: 'O PDF girado vai imprimir corretamente?',
        answer:
          'Sim, as impressoras seguem a orientação de página salva, então as páginas giradas imprimem do jeito certo.',
      },
      {
        question: 'Meu download não iniciou — o que devo fazer?',
        answer:
          'Permita downloads para este site nas configurações do seu navegador e clique em Aplicar Rotação novamente; o arquivo é gerado localmente.',
      },
    ],
  },
  'reorder-delete-pdf-pages': {
    slug: 'reordenar-e-excluir-paginas-de-pdf',
    name: 'Reordenar e Excluir Páginas de PDF',
    shortDescription:
      'Inspecione visualmente miniaturas de PDF, mova páginas para cima ou para baixo, duplique folhas ou remova páginas indesejadas localmente.',
    keywords: [
      'reordenar páginas de pdf',
      'excluir páginas de pdf',
      'reorganizar pdf',
      'remover páginas de pdf',
      'reordenar páginas de pdf online',
      'excluir páginas em branco de pdf',
      'duplicar página de pdf',
      'organizar páginas de pdf',
      'mover páginas de pdf',
    ],
    seo: {
      title: 'Reordenar Páginas de PDF – Mover e Excluir | UtilityFlow',
      description:
        'Reordene páginas de PDF visualmente no seu navegador: mova, duplique ou exclua páginas de qualquer PDF com miniaturas ao vivo e baixe um arquivo limpo.',
      primaryKeyword: 'reordenar páginas de pdf',
      secondaryKeywords: [
        'excluir páginas de pdf',
        'reorganizar pdf online',
        'remover páginas em branco de pdf',
        'reordenar páginas de pdf online',
      ],
      longTailKeywords: [
        'reordenar e remover páginas de pdf visualmente sem envio ao servidor',
        'duplicar uma página dentro de pdf existente no navegador',
        'reorganizar sequência de páginas de pdf grátis no navegador',
        'reordenar páginas de pdf online grátis no navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Confira cartões de páginas renderizadas do seu PDF, mova páginas fora do lugar para frente ou para trás, duplique folhas de capa ou modelo, exclua páginas em branco e exporte um PDF limpo e reordenado localmente.',
    instructions: [
      {
        title: 'Carregue seu documento PDF',
        description:
          'Selecione um PDF não criptografado; as prévias de miniaturas são renderizadas localmente para até 30 páginas (com cartões e dimensões de páginas para todas as páginas).',
      },
      {
        title: 'Confira os cartões de páginas',
        description:
          'Cada cartão mostra sua posição atual de saída e o índice original da página, para que você detecte páginas em branco, duplicadas ou fora do lugar antes de mudar qualquer coisa.',
      },
      {
        title: 'Reorganize, duplique ou exclua',
        description:
          'Use os botões de seta para mudar a sequência, o ícone de cópia para duplicar uma folha ou o ícone de lixeira para remover páginas indesejadas.',
      },
      {
        title: 'Confira a nova ordem das páginas',
        description:
          'Veja as posições atualizadas em cada cartão para confirmar se apêndices, anexos e capas estão exatamente onde pertencem.',
      },
      {
        title: 'Salvar PDF organizado',
        description:
          'Clique em Salvar PDF Reordenado para compilar e baixar seu documento limpo.',
      },
      {
        title: 'Dica: guarde o arquivo original',
        description:
          'A ferramenta nunca edita seu arquivo de origem, então guarde-o como backup. Se um PDF não carregar, confira se ele não está protegido por senha ou criptografado.',
      },
    ],
    examples: [
      {
        title: 'Removendo uma página em branco final e movendo o apêndice para frente',
        input: 'PDF de 5 páginas · Excluir página 5 · Mover página 4 para a posição nº 2',
        output: 'PDF atualizado de 4 páginas com conteúdo vetorial intacto',
        explanation: 'Reconstrói a árvore de páginas do documento de forma limpa na ordem selecionada.',
      },
      {
        title: 'Duplicando uma folha de rosto',
        input: 'PDF de 3 páginas · Duplicar página 1 (folha de rosto)',
        output: 'PDF atualizado de 4 páginas com a folha de rosto repetida',
        explanation: 'A cópia da página é inserida na sequência escolhida sem tocar no arquivo original.',
      },
    ],
    benefits: [
      'Combina miniaturas visuais do PDF.js com cópia de páginas sem perdas do pdf-lib',
      'Protege contra salvar acidentalmente um PDF vazio de 0 páginas',
      'Exibe tanto a posição atual de saída quanto o índice original da página',
      'Zero envio de arquivos para registros confidenciais de RH, jurídicos ou médicos',
    ],
    useCases: [
      'Excluir páginas em branco acidentais produzidas por scanners duplex de documentos',
      'Mover apêndices ou anexos fora do lugar para a sequência correta',
      'Duplicar páginas de formulários imprimíveis ou folhas de assinatura dentro de um pacote',
      'Limpar PDFs combinados antes de enviar a clientes',
    ],
    faqs: [
      {
        question: 'Por que as miniaturas são renderizadas só para as primeiras 30 páginas?',
        answer:
          'Para manter a RAM do navegador rápida em documentos enormes, as miniaturas ao vivo são renderizadas para as primeiras 30 páginas, enquanto cada página continua totalmente reordenável e excluível pelo seu cartão.',
      },
      {
        question: 'Reordenar páginas achata o texto em imagens?',
        answer:
          'Não. As miniaturas servem só para prévia visual dentro da interface; a saída salva usa copyPages() do pdf-lib para preservar o texto vetorial original e os links.',
      },
      {
        question: 'Posso desfazer a exclusão de todas as páginas?',
        answer:
          'O editor exige que pelo menos 1 página permaneça, e enviar novamente o arquivo original intacto restaura o original completo a qualquer momento.',
      },
      {
        question: 'A ferramenta Reordenar e Excluir Páginas de PDF é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador.',
      },
      {
        question: 'Meu PDF é enviado para um servidor quando reordeno suas páginas?',
        answer:
          'Não. Seu PDF é processado localmente no seu navegador e nunca é enviado, então documentos confidenciais ficam no seu dispositivo.',
      },
      {
        question: 'Posso excluir várias páginas de uma vez?',
        answer:
          'Cada cartão de página tem seu próprio ícone de lixeira, então remova as páginas uma de cada vez; a contagem de páginas e as posições são atualizadas na hora após cada exclusão.',
      },
      {
        question: 'Posso mover uma página direto para o início ou o fim do PDF?',
        answer:
          'Use os botões de seta repetidamente para levar uma página à primeira ou última posição, conferindo sua posição atualizada de saída no cartão enquanto avança.',
      },
      {
        question: 'O que acontece se eu excluir a página errada por engano?',
        answer:
          'Não há botão de desfazer, então basta enviar novamente seu arquivo original intacto e refazer as mudanças; a ferramenta nunca modifica seu arquivo de origem.',
      },
      {
        question: 'Reordenar páginas muda o texto ou as imagens nelas?',
        answer:
          'Não. As páginas são copiadas como estão com o pdf-lib, então texto vetorial, imagens e fontes mantêm a qualidade original.',
      },
      {
        question: 'Posso duplicar a mesma página mais de uma vez?',
        answer:
          'Sim. Clique no ícone de cópia de uma página quantas vezes precisar, por exemplo para repetir um formulário imprimível ou folha de assinatura dentro de um pacote.',
      },
      {
        question: 'Quais PDFs funcionam com a ferramenta Reordenar e Excluir Páginas de PDF?',
        answer:
          'Qualquer PDF não criptografado funciona. PDFs protegidos por senha ou criptografados não podem ser abertos por esta ferramenta de navegador.',
      },
      {
        question: 'Quantas páginas meu PDF pode ter?',
        answer:
          'Não há limite fixo de páginas; as miniaturas ao vivo são renderizadas para as primeiras 30 páginas, enquanto cada página ainda recebe um cartão com sua posição e índice original.',
      },
      {
        question: 'O tamanho do meu arquivo muda após reordenar as páginas?',
        answer:
          'Remover páginas deixa o arquivo menor, enquanto reordenar sozinho mantém o tamanho mais ou menos igual, porque o documento é reconstruído a partir das mesmas páginas.',
      },
      {
        question: 'Posso reordenar páginas em um PDF digitalizado?',
        answer:
          'Sim. As páginas são copiadas inteiras, independentemente de conterem texto ou imagens digitalizadas, então documentos digitalizados são reordenados como qualquer outro PDF.',
      },
      {
        question: 'A ferramenta Reordenar e Excluir Páginas de PDF funciona no celular?',
        answer:
          'Sim, ela funciona em qualquer navegador moderno de celular, embora os cartões e miniaturas de páginas sejam mais fáceis de gerenciar em uma tela maior de desktop.',
      },
      {
        question: 'Posso girar páginas enquanto as reordeno?',
        answer:
          'Não. A rotação é um trabalho separado, então use primeiro a ferramenta Rotacionador de Páginas de PDF e depois reordene as páginas giradas aqui.',
      },
      {
        question: 'Como distingo as páginas no editor?',
        answer:
          'Cada cartão mostra uma prévia em miniatura quando disponível, além de sua posição atual de saída e seu número de página original no arquivo de origem.',
      },
      {
        question: 'Posso mesclar dois PDFs com esta ferramenta?',
        answer:
          'Não. Esta ferramenta só reorganiza páginas dentro de um PDF; use a ferramenta Mesclar PDF para combinar documentos separados primeiro.',
      },
      {
        question: 'Excluir páginas remove favoritos ou links internos?',
        answer:
          'O conteúdo das páginas é preservado, mas os favoritos em nível de documento podem não sobreviver à reconstrução, então confira o arquivo salvo antes de compartilhá-lo.',
      },
      {
        question: 'Que arquivo recebo após salvar o PDF reordenado?',
        answer:
          'Um PDF novinho em folha é baixado para seu dispositivo na ordem de páginas escolhida, enquanto seu arquivo original fica intacto no seu computador.',
      },
    ],
  },
  'pdf-watermark': {
    slug: 'marca-dagua-em-pdf',
    name: 'Ferramenta de Marca d’Água em PDF',
    shortDescription:
      'Carimbe marcas d’água de texto diagonais personalizáveis como CONFIDENCIAL ou RASCUNHO em páginas de PDF com tamanho e opacidade personalizados.',
    keywords: [
      'marca d’água em pdf',
      'adicionar marca d’água ao pdf',
      'carimbo de pdf confidencial',
      'marca d’água de rascunho em pdf',
      'marca d’água em pdf online grátis',
      'adicionar carimbo de rascunho ao pdf',
      'marca d’água confidencial em pdf',
      'criador de marca d’água em pdf',
      'carimbar páginas de pdf',
    ],
    seo: {
      title: 'Marca d’Água em PDF – Carimbos Grátis Online | UtilityFlow',
      description:
        'Adicione uma marca d’água a qualquer PDF no navegador: texto diagonal ou centralizado, tamanho, opacidade, ângulo e cor, sem envio — grátis e privado.',
      primaryKeyword: 'marca d’água em pdf',
      secondaryKeywords: [
        'adicionar carimbo confidencial ao pdf',
        'marca d’água em pdf no navegador',
        'ferramenta de sobreposição de rascunho em pdf',
        'marca d’água em pdf online grátis',
      ],
      longTailKeywords: [
        'adicionar marca d’água diagonal semitransparente ao pdf sem envio',
        'marca d’água só na primeira página de contrato em pdf',
        'carimbo de texto vetorial em páginas de pdf grátis',
        'adicionar marca d’água confidencial ao pdf grátis no navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Carimbe marcas d’água de texto vetorial centralizadas ou diagonais — como `CONFIDENCIAL`, `RASCUNHO` ou `NÃO DISTRIBUIR` — em todas as páginas ou na capa de qualquer PDF, com controles ao vivo de tamanho de fonte, opacidade, ângulo de rotação e cor da marca.',
    instructions: [
      {
        title: 'Escolha seu arquivo PDF',
        description:
          'Envie qualquer documento PDF não criptografado localmente para a memória.',
      },
      {
        title: 'Digite o texto da marca d’água',
        description:
          'Digite o carimbo de que precisa, como CONFIDENCIAL, RASCUNHO ou NÃO DISTRIBUIR, usando caracteres latinos padrão.',
      },
      {
        title: 'Personalize o carimbo da marca d’água',
        description:
          'Escolha Cinza Neutro, Índigo de Marca ou Vermelho de Carimbo e ajuste os controles de tamanho, opacidade e ângulo até o carimbo ficar certo.',
      },
      {
        title: 'Escolha quais páginas carimbar',
        description:
          'Mantenha o padrão para marcar todas as páginas com marca d’água, ou marque Somente primeira página quando só a folha de rosto precisar de um carimbo de classificação.',
      },
      {
        title: 'Aplicar e baixar',
        description:
          'Se quiser, marque Somente primeira página e clique em Aplicar Marca d’Água e Baixar.',
      },
      {
        title: 'Dica: confira a legibilidade antes de compartilhar',
        description:
          'Abra o arquivo baixado e confirme se o texto do corpo continua fácil de ler; se o carimbo estiver forte demais, execute novamente com uma opacidade menor, como 15–22%.',
      },
    ],
    examples: [
      {
        title: 'Carimbando um rascunho de proposta pré-lançamento',
        input: 'Texto: RASCUNHO · Fonte: 54 pt · Opacidade: 22% · Ângulo: 40°',
        output: 'Sobreposição vetorial diagonal semitransparente de RASCUNHO centralizada em cada página',
        explanation: 'Usa opacidade alfa para que o texto do corpo subjacente continue totalmente legível.',
      },
      {
        title: 'Carimbando só a capa como CONFIDENCIAL',
        input: 'Texto: CONFIDENCIAL · Opacidade: 18% · Somente primeira página: ativado',
        output: 'Carimbo diagonal semitransparente só na capa; as demais páginas ficam limpas.',
        explanation: 'O modo Somente Primeira Página aplica o carimbo de classificação só à folha de rosto.',
      },
    ],
    benefits: [
      'Usa tipografia vetorial HelveticaBold padrão nítida, em vez de bitmaps borrados',
      'Suporta opacidade alfa semitransparente de 8% a 65% para que o conteúdo continue legível',
      'Oferece o modo Somente Primeira Página para carimbos de classificação de folha de rosto',
      'Mantém rascunhos não publicados estritamente fora de servidores de nuvem externos',
    ],
    useCases: [
      'Marcar contratos de rascunho, SOWs ou pitch decks antes de revisão externa',
      'Adicionar avisos de CONFIDENCIAL ou SOMENTE USO INTERNO a pacotes de RH/diretoria',
      'Rotular portfólios de amostra ou provas de prévia',
      'Aplicar carimbos consistentes de status de revisão antes de arquivar',
    ],
    faqs: [
      {
        question: 'Os destinatários podem editar ou remover a marca d’água em editores de PDF completos?',
        answer:
          'As marcas d’água de texto desenhadas com pdf-lib são objetos de conteúdo vetorial padrão na página. Se você precisar de páginas achatadas não selecionáveis, em que as marcas d’água não possam ser selecionadas como texto, converta o PDF com marca d’água por meio de nossas ferramentas PDF para Imagens e Imagens para PDF.',
      },
      {
        question: 'A marca d’água funciona em páginas de retrato e paisagem?',
        answer:
          'Sim. As coordenadas são calculadas dinamicamente a partir da largura e altura de cada página individual.',
      },
      {
        question: 'Quais caracteres são suportados na sequência da marca d’água?',
        answer:
          'Caracteres padrão WinAnsi (ASCII latino e símbolos comuns da Europa Ocidental) suportados pelo PDF HelveticaBold.',
      },
      {
        question: 'A ferramenta de Marca d’Água em PDF é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador.',
      },
      {
        question: 'Meu PDF é enviado para um servidor quando adiciono uma marca d’água?',
        answer:
          'Não. O arquivo é processado localmente no seu navegador e nunca é enviado, então rascunhos não publicados ficam privados.',
      },
      {
        question: 'Posso marcar com marca d’água só algumas páginas de um PDF?',
        answer:
          'Você pode marcar todas as páginas com marca d’água ou só a primeira página usando a opção Somente primeira página; carimbar um intervalo intermediário personalizado não é suportado.',
      },
      {
        question: 'Qual texto posso usar como marca d’água em PDF?',
        answer:
          'Qualquer rótulo curto em caracteres latinos padrão, como CONFIDENCIAL, RASCUNHO, SOMENTE USO INTERNO ou o nome da sua empresa.',
      },
      {
        question: 'Posso usar o nome da minha empresa como marca d’água?',
        answer:
          'Sim. Digite o nome da sua empresa ou marca como texto da marca d’água e ele será carimbado nas páginas escolhidas.',
      },
      {
        question: 'Posso mudar a cor da marca d’água em PDF?',
        answer:
          'Sim. Escolha Cinza Neutro para uma marca sutil, Índigo de Marca para combinar com uma marca, ou Vermelho de Carimbo para um aviso de classificação forte.',
      },
      {
        question: 'Quão transparente a marca d’água pode ser?',
        answer:
          'A opacidade é ajustável de 8% a 65%, para que você mantenha o carimbo visível enquanto o texto embaixo continua totalmente legível.',
      },
      {
        question: 'Posso deixar a marca d’água horizontal em vez de diagonal?',
        answer:
          'Sim. Defina o controle de ângulo em 0 graus para um carimbo reto horizontal, ou escolha qualquer ângulo até uma diagonal completa.',
      },
      {
        question: 'Posso adicionar uma marca d’água de imagem ou logotipo a um PDF?',
        answer:
          'Não. Esta ferramenta carimba só marcas d’água de texto; sobreposições de imagem e logotipo não são suportadas.',
      },
      {
        question: 'A marca d’água vai imprimir quando o PDF for impresso?',
        answer:
          'Sim. A marca d’água é conteúdo vetorial real desenhado em cada página, então aparece nas impressões como aparece na tela.',
      },
      {
        question: 'A marca d’água muda o texto original do meu PDF?',
        answer:
          'Não. A marca d’água é desenhada como uma sobreposição sobre as páginas e não edita nem substitui nenhum conteúdo existente.',
      },
      {
        question: 'Posso marcar com marca d’água um PDF protegido por senha?',
        answer:
          'Não. Só PDFs não criptografados podem ser abertos por esta ferramenta de navegador, então remova a senha primeiro.',
      },
      {
        question: 'Esta ferramenta pode remover uma marca d’água de um PDF?',
        answer:
          'Não. Ela só adiciona marcas d’água; remover uma marca d’água existente exige um editor de PDF completo.',
      },
      {
        question: 'Qual fonte a marca d’água em PDF usa?',
        answer:
          'As marcas d’água usam tipografia vetorial HelveticaBold padrão nítida, que fica nítida em qualquer tamanho em vez de ficar borrada como um bitmap.',
      },
      {
        question: 'A marca d’água ficará legível em páginas escuras ou ocupadas?',
        answer:
          'Depende do fundo da página, então escolha uma cor contrastante e uma opacidade moderada e abra o arquivo baixado para conferir o resultado.',
      },
      {
        question: 'Posso marcar com marca d’água um PDF digitalizado?',
        answer:
          'Sim. A marca d’água é desenhada em cada página, independentemente de a página conter texto ou uma imagem digitalizada.',
      },
      {
        question: 'Adicionar uma marca d’água deixa meu arquivo PDF muito maior?',
        answer:
          'Só um pouco. O texto vetorial adiciona pouquíssimos dados, então o tamanho do arquivo cresce pouco em comparação com carimbos baseados em imagem.',
      },
    ],
  },
  'add-pdf-page-numbers': {
    slug: 'adicionar-numeros-de-pagina-ao-pdf',
    name: 'Adicionar Números de Página ao PDF',
    shortDescription:
      'Insira números de página vetoriais limpos ("Página 1 de N", "1 / N" ou "1") em documentos PDF, com pulo da capa.',
    keywords: [
      'adicionar números de página ao pdf',
      'numeração de páginas de pdf',
      'numerar páginas de pdf online',
      'números de página estilo bates',
      'numerar páginas de pdf',
      'adicionar números de página ao pdf grátis',
      'números de página de rodapé de pdf',
      'página x de n em pdf',
      'paginar pdf online',
    ],
    seo: {
      title: 'Adicionar Números de Página ao PDF – Grátis | UtilityFlow',
      description:
        'Adicione números de página a arquivos PDF no navegador com rótulos vetoriais limpos, pulo da capa e número inicial personalizado — sem envio, grátis e privado.',
      primaryKeyword: 'adicionar números de página ao pdf',
      secondaryKeywords: [
        'ferramenta de número de página de pdf',
        'numerar páginas de pdf no navegador',
        'pular capa na numeração de pdf',
        'paginar pdf online',
      ],
      longTailKeywords: [
        'adicionar números de rodapé página 1 de n ao pdf mesclado',
        'iniciar numeração de pdf na página 2 pulando a capa',
        'ferramenta de paginação vetorial de pdf no navegador',
        'adicionar números de página ao pdf grátis sem envio',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Numere pacotes mesclados, peças jurídicas ou trabalhos acadêmicos de forma limpa usando tipografia vetorial nítida — escolhendo `Página 1 de N`, `1 / N` ou dígitos simples, alinhamento inferior/superior, números iniciais personalizados e pulo opcional da capa.',
    instructions: [
      {
        title: 'Carregue seu documento PDF',
        description:
          'Escolha o arquivo PDF sem numeração ou mesclado que você quer paginar.',
      },
      {
        title: 'Escolha o formato do número',
        description:
          'Escolha "Página 1 de N" para pacotes formais, "1 / N" para um visual compacto, ou dígitos simples para um rodapé mínimo.',
      },
      {
        title: 'Defina a posição e o tamanho',
        description:
          'Selecione Inferior Centralizado, Inferior Direito, Inferior Esquerdo ou Superior Direito e ajuste o tamanho da fonte para que os números fiquem bem na margem.',
      },
      {
        title: 'Defina o número inicial e o pulo da capa',
        description:
          'Mude o Número Inicial para continuar um conjunto de vários volumes e ative Pular capa quando a página de título deve ficar limpa.',
      },
      {
        title: 'Aplicar e baixar',
        description:
          'Clique em Adicionar Números de Página e Baixar para exportar o PDF paginado localmente.',
      },
      {
        title: 'Dica: confira páginas com rodapés apertados',
        description:
          'Abra o arquivo baixado e veja as páginas que já têm texto de rodapé; se um número ficar perto demais, execute novamente com um tamanho de fonte menor.',
      },
    ],
    examples: [
      {
        title: 'Numerando um pacote mesclado começando após uma capa',
        input: 'PDF de 5 páginas · Formato: Página 1 de N · Pular capa: Marcado',
        output: 'Página 1 intacta; páginas 2–5 carimbadas "Página 1 de 4" até "Página 4 de 4"',
        explanation: 'Ideal depois de combinar folhas de rosto e apêndices com Mesclar PDF.',
      },
      {
        title: 'Continuando a numeração a partir da página 15',
        input: 'PDF de 3 páginas · Formato: 1 / N · Número inicial: 15',
        output: 'Páginas carimbadas "15 / 17", "16 / 17", "17 / 17"',
        explanation: 'O número inicial personalizado continua a numeração sequencial de um volume anterior.',
      },
    ],
    benefits: [
      'Corrige a paginação quebrada logo após mesclar relatórios PDF separados',
      'Suporta pular a página 1 para que as capas de título fiquem limpas',
      'O número inicial personalizável suporta conjuntos de documentos de vários volumes',
      'Mede a largura exata do texto por tamanho de página para centralização e alinhamento à direita nítidos',
    ],
    useCases: [
      'Paginar propostas de clientes e RFPs combinadas após Mesclar PDF',
      'Numerar petições judiciais, apêndices ou capítulos de tese',
      'Continuar a numeração sequencial a partir da página 15 em um volume Parte 2',
      'Adicionar números discretos no canto inferior direito a guias de estudo impressos',
    ],
    faqs: [
      {
        question: 'Isto apaga o texto existente perto da margem inferior?',
        answer:
          'A ferramenta desenha números nítidos com um deslocamento de margem de 28 pt sem cobrir fundos existentes, então inspecione páginas que já têm rodapés apertados.',
      },
      {
        question: 'Como "Pular capa" afeta a contagem total em "Página X de N"?',
        answer:
          'Quando ativado, a página 1 não recebe rótulo e as páginas restantes contam de forma limpa de 1 até (Total de Páginas − 1), para que os totais fiquem consistentes.',
      },
      {
        question: 'Posso começar a numeração na página 10 em vez de 1?',
        answer:
          'Sim. Mude o Número Inicial para 10 para numerar volumes sequenciais a partir de 10.',
      },
      {
        question: 'A ferramenta Adicionar Números de Página ao PDF é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, e funciona por completo no seu navegador.',
      },
      {
        question: 'Meu PDF é enviado para um servidor quando adiciono números de página?',
        answer:
          'Não. O arquivo é processado localmente no seu navegador e nunca é enviado, então seus documentos ficam privados.',
      },
      {
        question: 'Quais formatos de número de página posso escolher?',
        answer:
          'Você pode escolher "Página 1 de N", o estilo compacto "1 / N" ou dígitos simples sem rótulo.',
      },
      {
        question: 'Onde na página os números podem aparecer?',
        answer:
          'Escolha Inferior Centralizado, Inferior Direito, Inferior Esquerdo ou Superior Direito, dependendo de onde suas margens têm espaço livre.',
      },
      {
        question: 'Posso pular a numeração da capa?',
        answer:
          'Sim. Ative Pular capa e a página 1 fica limpa enquanto a numeração começa na página 2.',
      },
      {
        question: 'A ferramenta renumera um PDF que já tem números de página?',
        answer:
          'Não. Ela carimba números novos junto com os existentes, então remova os números antigos primeiro se quiser só um conjunto.',
      },
      {
        question: 'Posso mudar o tamanho da fonte dos números de página?',
        answer:
          'Sim. Ajuste a configuração de tamanho da fonte para que os números sejam legíveis sem lotar seu rodapé ou cabeçalho.',
      },
      {
        question: 'A numeração de páginas funciona em páginas de paisagem?',
        answer:
          'Sim. A ferramenta mede a largura exata do texto por tamanho de página, então os números ficam centralizados ou alinhados em páginas de retrato e paisagem.',
      },
      {
        question: 'Posso numerar só páginas selecionadas de um PDF?',
        answer:
          'Não. A numeração se aplica a todas as páginas, exceto uma capa opcionalmente pulada; numerar um intervalo personalizado não é suportado.',
      },
      {
        question: 'O que acontece se meu PDF já tiver números de página?',
        answer:
          'Os números novos são carimbados além dos antigos, o que pode parecer duplicado, então confira a saída e limpe o original primeiro, se necessário.',
      },
      {
        question: 'Posso usar algarismos romanos para números de página?',
        answer:
          'Não. A ferramenta numera as páginas só com algarismos arábicos padrão, por isso formatos como os algarismos romanos não estão disponíveis como estilo de numeração.',
      },
      {
        question: 'Posso adicionar números de página a um PDF digitalizado?',
        answer:
          'Sim. Os números são desenhados em cada página como texto vetorial, independentemente de a página conter texto ou uma imagem digitalizada.',
      },
      {
        question: 'Posso colocar números de página no cabeçalho em vez do rodapé?',
        answer:
          'Sim, escolha a posição Superior Direito para numeração de cabeçalho; a posição superior centralizada não é oferecida.',
      },
      {
        question: 'Os números de página carimbados serão texto selecionável?',
        answer:
          'Sim. Os números são desenhados como texto vetorial nítido, então os leitores podem selecioná-los e copiá-los como texto comum de PDF.',
      },
      {
        question: 'Posso numerar um PDF protegido por senha?',
        answer:
          'Não. Só PDFs não criptografados podem ser abertos por esta ferramenta de navegador, então remova a senha primeiro.',
      },
      {
        question: 'Posso adicionar um prefixo como "Seção 2 – Página 3"?',
        answer:
          'Não. A ferramenta oferece só os três formatos de número, então prefixos personalizados ou rótulos de seção não podem ser adicionados.',
      },
      {
        question: 'Adicionar números de página muda o conteúdo do meu PDF?',
        answer:
          'Não. Só os rótulos de número são adicionados; seu texto, imagens e layout existentes ficam exatamente como estavam.',
      },
    ],
  },
  'pdf-metadata-editor': {
    slug: 'editor-de-metadados-de-pdf',
    name: 'Editor e Inspetor de Metadados de PDF',
    shortDescription:
      'Veja, atualize ou remova tags de Título, Autor, Assunto, Palavras-chave, Criador e Produtor de PDF em privado na memória do navegador.',
    keywords: [
      'editor de metadados de pdf',
      'visualizador de metadados de pdf',
      'remover autor de pdf',
      'remover metadados de pdf',
      'editar metadados de pdf',
      'mudar título de pdf',
      'editor de propriedades de pdf',
      'removedor de autor de pdf',
      'ver metadados de pdf',
    ],
    seo: {
      title: 'Editor de Metadados de PDF – Ver e Remover | UtilityFlow',
      description:
        'Use este editor de metadados de PDF para ver, atualizar ou remover Título, Autor, Assunto, Palavras-chave, Criador e Produtor em privado no navegador, grátis.',
      primaryKeyword: 'editor de metadados de pdf',
      secondaryKeywords: [
        'visualizador de metadados de pdf',
        'remover metadados de autor de pdf',
        'mudar título de documento pdf',
        'editar metadados de pdf online',
      ],
      longTailKeywords: [
        'inspecionar e remover metadados ocultos de autor de pdf online',
        'mudar título de pdf mostrado na aba do navegador grátis',
        'editor privado de propriedades de pdf no navegador',
        'remover metadados de autor de pdf antes de compartilhar',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Revele propriedades ocultas guardadas dentro de cabeçalhos de PDF — incluindo Título do Documento, Autor, Assunto, Palavras-chave, software Criador e Produtor — para definir títulos limpos de aba do navegador ou remover metadados pessoais de identificação antes de publicar publicamente.',
    instructions: [
      {
        title: 'Carregue um arquivo PDF',
        description:
          'Selecione qualquer PDF não criptografado; os campos de metadados existentes e as dimensões das páginas são preenchidos automaticamente.',
      },
      {
        title: 'Confira os metadados atuais',
        description:
          'Leia os campos Título, Autor, Assunto, Palavras-chave, Criador e Produtor, além da contagem de páginas e das dimensões exatas das páginas, para ver o que está guardado.',
      },
      {
        title: 'Edite ou higienize campos',
        description:
          'Atualize Título, Autor, Assunto e Palavras-chave para clareza, ou clique em Remover Todos os Campos de Metadados para privacidade.',
      },
      {
        title: 'Remova todos os metadados para privacidade',
        description:
          'Use Remover Todos os Campos de Metadados antes de compartilhar um arquivo publicamente para limpar nomes de autores e versões de software com um clique.',
      },
      {
        title: 'Salvar e baixar',
        description:
          'Clique em Salvar Metadados e Baixar PDF para exportar uma cópia recém-rotulada.',
      },
      {
        title: 'Dica: confira o arquivo salvo',
        description:
          'Abra novamente o PDF baixado nesta ferramenta para confirmar o novo Título e os campos de Autor limpos, já que as mudanças só se aplicam à cópia salva.',
      },
    ],
    examples: [
      {
        title: 'Anonimizando um PDF exportado do Word ou Illustrator',
        input: 'Autor: "João Silva" · Criador: "Microsoft® Word 2021"',
        output: 'Clique em Remover Todos os Campos de Metadados → Salve um PDF limpo com Autor/Criador em branco',
        explanation: 'Remove nomes de funcionários e versões de software antes da hospedagem pública na web.',
      },
      {
        title: 'Corrigindo um título errado na aba do navegador',
        input: 'Título: "Sem-título-2" · Autor: "João Silva"',
        output: 'Defina o Título como "Guia de Produto 2026" e salve → a aba do navegador mostra o título correto',
        explanation: 'Os navegadores mostram a propriedade Título interno do PDF em vez do nome do arquivo .pdf.',
      },
    ],
    benefits: [
      'Expõe nomes de autores ocultos e sequências de software que os navegadores mostram em abas e propriedades',
      'Remover Todos os Campos de Metadados com um clique limpa as 6 tags padrão do dicionário Info',
      'Atualiza Título, Assunto e Palavras-chave separadas por vírgula relevantes para SEO de forma limpa',
      'Exibe as dimensões exatas de pontos do PDF (`largura × altura pt`) junto com a contagem de páginas',
    ],
    useCases: [
      'Limpar nomes de funcionários e versões de ferramentas locais antes de postar PDFs públicos',
      'Corrigir nomes de arquivo estranhos como "Sem-título-2" mostrados em abas de PDF do Chrome/Safari via Título',
      'Adicionar tags pesquisáveis de Assunto e Palavras-chave a whitepapers baixáveis',
      'Auditar envios de PDF de fornecedores ou candidatos localmente',
    ],
    faqs: [
      {
        question: 'Por que a aba do meu navegador mostra o título errado ao abrir um PDF?',
        answer:
          'Os navegadores exibem a propriedade Título do Documento interno do PDF em vez do nome do arquivo .pdf, se uma tag de Título estiver embutida. Editar o Título aqui corrige como os navegadores rotulam a aba.',
      },
      {
        question: 'Limpar os campos de metadados afeta o conteúdo visível da página?',
        answer:
          'Não. Remover ou atualizar Título, Autor, Assunto, Palavras-chave, Criador e Produtor atualiza só o dicionário Info do PDF, sem alterar as páginas visíveis.',
      },
      {
        question: 'As edições são criptografadas ou registradas em algum lugar?',
        answer:
          'Nunca. Tanto a leitura quanto a escrita de metadados são executadas puramente dentro da memória do cliente via pdf-lib.',
      },
      {
        question: 'O Editor de Metadados de PDF é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e funciona por completo no seu navegador.',
      },
      {
        question: 'Meu PDF é enviado para um servidor quando edito seus metadados?',
        answer:
          'Não. A leitura e a escrita de metadados acontecem puramente dentro do seu navegador, então seus arquivos nunca são enviados nem registrados.',
      },
      {
        question: 'Quais campos de metadados posso editar em um PDF?',
        answer:
          'Você pode ver e editar Título, Autor, Assunto, Palavras-chave, Criador e Produtor — as seis tags padrão do dicionário Info do PDF.',
      },
      {
        question: 'Posso remover só o nome do autor de um PDF?',
        answer:
          'Sim. Limpe só o campo Autor e salve, deixando Título, Assunto e as outras tags intactas.',
      },
      {
        question: 'O que "Remover Todos os Campos de Metadados" faz?',
        answer:
          'Ele limpa as seis tags padrão do dicionário Info de uma vez, removendo nomes de autores, sequências de software e títulos antes de você compartilhar o arquivo.',
      },
      {
        question: 'Editar o Título pode mudar como o PDF aparece nos resultados de busca?',
        answer:
          'Editar o Título muda o rótulo que os navegadores mostram na aba do PDF, mas não garante nenhuma classificação de busca ou trecho específico.',
      },
      {
        question: 'Remover metadados apaga favoritos ou links?',
        answer:
          'Não. A remoção atualiza só o dicionário Info, então favoritos, links e conteúdo visível das páginas ficam inalterados.',
      },
      {
        question: 'Posso ver os metadados de um PDF sem mudar nada?',
        answer:
          'Sim. Os campos são preenchidos assim que você carrega um arquivo, e nada é alterado a menos que você clique em Salvar Metadados e Baixar PDF.',
      },
      {
        question: 'O que são os campos Criador e Produtor em um PDF?',
        answer:
          'O Criador nomeia o aplicativo que fez o documento, como o Microsoft Word, enquanto o Produtor nomeia o software que o converteu em PDF.',
      },
      {
        question: 'Posso adicionar palavras-chave a um PDF para melhor pesquisa?',
        answer:
          'Sim. Digite Palavras-chave separadas por vírgulas no editor de metadados, e elas são guardadas no PDF para ferramentas de busca que as leem.',
      },
      {
        question: 'O tamanho do arquivo muda após editar os metadados do PDF?',
        answer:
          'Só um pouquinho. Os metadados são um pequeno bloco de texto, então editá-los ou removê-los quase não afeta o tamanho total do arquivo.',
      },
      {
        question: 'Posso editar metadados em um PDF digitalizado?',
        answer:
          'Sim. Os metadados ficam no cabeçalho do documento e são independentes do conteúdo da página, então PDFs digitalizados funcionam da mesma forma que os baseados em texto.',
      },
      {
        question: 'Posso editar metadados XMP com esta ferramenta?',
        answer:
          'Não. Esta ferramenta edita só as seis tags padrão do dicionário Info; pacotes estendidos de metadados XMP não são modificados.',
      },
      {
        question: 'Posso editar metadados em um PDF criptografado?',
        answer:
          'Não. Só PDFs não criptografados podem ser abertos por esta ferramenta de navegador, então remova a senha primeiro.',
      },
      {
        question: 'O Editor de Metadados de PDF mostra o tamanho da página?',
        answer:
          'Sim. Ele exibe as dimensões exatas das páginas em pontos (largura × altura) junto com a contagem de páginas de cada arquivo carregado.',
      },
      {
        question: 'Remover metadados remove todas as informações pessoais de um PDF?',
        answer:
          'Ele remove as seis tags Info, mas detalhes pessoais digitados visivelmente nas próprias páginas, como um nome no texto do corpo, permanecem.',
      },
      {
        question: 'Preciso baixar o arquivo para aplicar as mudanças de metadados?',
        answer:
          'Sim. Clicar em Salvar Metadados e Baixar PDF cria um novo arquivo com suas mudanças, enquanto seu arquivo original fica intacto.',
      },
    ],
  },
  'pdf-text-extractor': {
    slug: 'extrator-de-texto-de-pdf',
    name: 'Extrator de Texto de PDF',
    shortDescription:
      'Extraia texto selecionável página por página de documentos PDF em texto simples copiável ou downloads .txt via PDF.js.',
    keywords: [
      'extrator de texto de pdf',
      'extrair texto de pdf',
      'conversor de pdf para txt',
      'copiar texto de pdf',
      'extrair texto de pdf online',
      'pdf para texto grátis',
      'pdf para txt',
      'obter texto de pdf',
      'ferramenta de cópia de texto de pdf',
    ],
    seo: {
      title: 'Extrator de Texto de PDF – Copiar para .TXT | UtilityFlow',
      description:
        'Extraia texto embutido de PDF página por página no navegador, com marcadores de página, contagem de palavras, cópia e download .txt — grátis e privado.',
      primaryKeyword: 'extrator de texto de pdf',
      secondaryKeywords: [
        'pdf para txt online grátis',
        'extrair texto de pdf no navegador',
        'copiar texto de documento pdf',
        'pdf para texto grátis',
      ],
      longTailKeywords: [
        'extrair texto de pdf confidencial localmente sem envio',
        'converter pdf baseado em texto em arquivo txt simples com marcadores de página',
        'detectar pdf digitalizado só com imagem sem camada de texto',
        'extrair texto de pdf para txt grátis no navegador',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Leia e extraia texto Unicode embutido direto de PDFs baseados em texto página por página usando PDF.js, com cabeçalhos opcionais `--- Página N ---`, estatísticas de palavras/bytes, cópia com um clique e exportação `.txt` — além de detecção transparente quando um PDF é digitalizado/só imagem.',
    instructions: [
      {
        title: 'Selecione um documento PDF',
        description:
          'Escolha qualquer arquivo PDF não criptografado; o PDF.js verifica o fluxo de texto embutido de cada página localmente.',
      },
      {
        title: 'Confira o texto extraído',
        description:
          'Leia a saída e confira a contagem de páginas, a contagem de palavras e o tamanho em bytes UTF-8 informados para confirmar se a extração parece completa.',
      },
      {
        title: 'Ative os marcadores de página',
        description:
          'Mantenha os cabeçalhos de página ativados para citações estruturadas ou desmarque para prosa contínua.',
      },
      {
        title: 'Confira páginas digitalizadas',
        description:
          'Se a ferramenta informar 0 caracteres, o PDF provavelmente é um arquivo digitalizado só com imagens, sem camada de texto para extrair.',
      },
      {
        title: 'Copiar ou exportar .txt',
        description:
          'Copie o texto extraído para seu editor ou baixe uma transcrição .txt limpa em UTF-8.',
      },
      {
        title: 'Dica: corrija texto embaralhado ou ausente',
        description:
          'Se os caracteres parecerem errados, o PDF de origem pode usar uma fonte personalizada sem mapeamento Unicode adequado; tente o documento original ou uma cópia recém-exportada.',
      },
    ],
    examples: [
      {
        title: 'Extraindo texto legível de um whitepaper de várias páginas',
        input: 'whitepaper.pdf (8 páginas, camada de texto embutida)',
        output: 'Texto simples estruturado com divisores --- Página 1 ---, contagem de palavras e download .txt',
        explanation: 'Puxa os itens de texto subjacentes do PDF de forma limpa, sem falhas manuais de destacar e copiar.',
      },
      {
        title: 'Detectando um PDF digitalizado sem camada de texto',
        input: 'documento-digitalizado.pdf (10 páginas, só imagens)',
        output: 'Aviso: 0 caracteres extraídos — PDF digitalizado sem camada de texto; OCR não incluído',
        explanation: 'O extrator lê só a camada de texto existente e avisa honestamente quando ela não existe.',
      },
    ],
    benefits: [
      'Avisa com transparência se um PDF é digitalizado/só imagem (camada de texto 0, OCR não executado offline)',
      'Preserva quebras de página limpas por meio de marcadores --- Página N --- alternáveis',
      'Informa a contagem de páginas extraídas, a contagem de palavras e o tamanho em bytes UTF-8',
      'Primeiro passo ideal antes de enviar texto para o Contador de Palavras ou Localizar e Substituir',
    ],
    useCases: [
      'Extrair texto simples limpo de whitepapers, ementas ou documentação em PDF',
      'Verificar contagens de palavras em redações formatadas em PDF usando nosso Contador de Palavras',
      'Verificar se um PDF arquivado contém uma camada de texto pesquisável vs digitalizações planas',
      'Exportar pautas de reunião em PDF para notas em Markdown de texto simples',
    ],
    faqs: [
      {
        question: 'Por que um PDF digitalizado extraiu 0 caracteres?',
        answer:
          'PDFs de scanner costumam salvar páginas puramente como imagens bitmap planas sem uma camada de texto OCR embutida. Esta ferramenta de navegador lê fluxos de texto de PDF existentes diretamente e informa honestamente que o OCR offline não está incluído.',
      },
      {
        question: 'Por que tabelas complexas de várias colunas às vezes quebram nas linhas?',
        answer:
          'Os arquivos PDF guardam texto posicionado por coordenadas X/Y, e não como tabelas HTML semânticas, então o PDF.js emite itens de texto em ordem de fluxo com dicas de fim de linha.',
      },
      {
        question: 'Meu PDF é enviado para extrair texto?',
        answer:
          'Não. O PDF.js analisa e extrai fluxos de texto estritamente dentro da aba do seu navegador.',
      },
      {
        question: 'O Extrator de Texto de PDF é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e funciona por completo no seu navegador.',
      },
      {
        question: 'Para quais formatos de arquivo posso exportar o texto extraído?',
        answer:
          'Você pode copiar o texto simples para sua área de transferência ou baixá-lo como uma transcrição .txt limpa em UTF-8.',
      },
      {
        question: 'Posso extrair texto de só uma página de um PDF?',
        answer:
          'A extração cobre o documento inteiro, mas os marcadores opcionais --- Página N --- facilitam encontrar e copiar só a seção de que você precisa.',
      },
      {
        question: 'Por que falta algum texto na saída extraída?',
        answer:
          'Texto guardado como imagem, ou desenhado com uma fonte personalizada que não tem mapa Unicode, não tem fluxo de texto legível para o PDF.js extrair.',
      },
      {
        question: 'O Extrator de Texto de PDF inclui OCR para páginas digitalizadas?',
        answer:
          'Não. Ele lê só a camada de texto embutida existente e não executa OCR, então páginas digitalizadas só com imagens não retornam texto.',
      },
      {
        question: 'Posso extrair texto de um PDF em outro idioma?',
        answer:
          'Sim. O texto Unicode embutido é extraído como está, então documentos em outros idiomas funcionam desde que o PDF guarde uma camada de texto adequada.',
      },
      {
        question: 'A extração preserva texto em negrito ou títulos?',
        answer:
          'Não. A saída é só texto simples, então negrito, itálico, títulos e outra formatação não são transferidos.',
      },
      {
        question: 'Qual o tamanho de PDF que posso extrair texto?',
        answer:
          'Não há limite de tamanho declarado, e a extração é executada localmente; documentos muito grandes podem simplesmente demorar um pouco mais para verificar.',
      },
      {
        question: 'Posso copiar o texto extraído sem baixar um arquivo?',
        answer:
          'Sim. Use o botão de cópia com um clique para colar o texto direto no seu editor, aplicativo de notas ou documento.',
      },
      {
        question: 'O que são os marcadores "--- Página N ---" na saída?',
        answer:
          'São cabeçalhos opcionais que marcam onde cada página começa, para que você cite as páginas com precisão; desative-os para prosa contínua.',
      },
      {
        question: 'O Extrator de Texto de PDF mostra uma contagem de palavras?',
        answer:
          'Sim. Ele informa a contagem de páginas extraídas, a contagem de palavras e o tamanho em bytes UTF-8 junto com o texto.',
      },
      {
        question: 'Posso extrair texto de um PDF protegido por senha?',
        answer:
          'Não. Só PDFs não criptografados podem ser abertos por esta ferramenta de navegador, então remova a senha primeiro.',
      },
      {
        question: 'Os hiperlinks serão extraídos do PDF?',
        answer:
          'O texto visível de links é extraído quando existe como texto, mas os links em si não são exportados como URLs clicáveis.',
      },
      {
        question: 'Posso usar o texto extraído no Word ou Google Docs?',
        answer:
          'Sim. Cole o texto copiado diretamente, ou abra o arquivo .txt baixado e copie seu conteúdo para qualquer processador de texto.',
      },
      {
        question: 'Por que alguns caracteres parecem embaralhados no texto extraído?',
        answer:
          'Alguns PDFs embutem fontes personalizadas sem um mapeamento Unicode adequado, então o PDF.js não consegue associar os glifos aos caracteres certos.',
      },
      {
        question: 'Extrair texto muda meu PDF original?',
        answer:
          'Não. A extração é somente leitura; seu arquivo PDF original nunca é modificado.',
      },
      {
        question: 'O Extrator de Texto de PDF pode puxar texto de formulários e anotações?',
        answer:
          'Ele extrai a camada principal de texto embutido de cada página; valores de formulários preenchidos e notas de anotação podem não aparecer se forem guardados separadamente.',
      },
    ],
  },
};
