// Detail content for PT tools — split out of
// src/locales/pt/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
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
};
