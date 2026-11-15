// Detail content for PT tools — split out of
// src/locales/pt/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Escolha uma imagem de origem',
        description:
          'Selecione qualquer imagem PNG, JPG, WebP ou GIF do seu dispositivo para decodificar as dimensões e o tamanho original em bytes.',
      },
      {
        title: 'Escolha o formato alvo, o limite de largura e a qualidade',
        description:
          'Selecione WebP ou JPG para uma economia grande em bytes, aplique opcionalmente um limite de largura máxima (como 1920 px ou 1280 px) e ajuste o controle de qualidade de 10% a 100%.',
      },
      {
        title: 'Execute a compressão',
        description:
          'Clique em Comprimir para recodificar a imagem localmente no seu navegador e ver o novo tamanho em bytes na hora.',
      },
      {
        title: 'Compare antes e depois',
        description:
          'Confira a pré-visualização lado a lado e a economia exata em bytes e em porcentagem para garantir que a qualidade continua boa.',
      },
      {
        title: 'Baixe o arquivo comprimido',
        description:
          'Clique em Baixar para salvar a imagem otimizada no seu dispositivo e repita o processo para outro arquivo quando precisar.',
      },
      {
        title: 'Dica: a saída ficou maior que a entrada?',
        description:
          'Se um PNG pequeno crescer após a compressão, mude o formato de saída para WebP ou JPG, ou reduza um pouco o controle de qualidade, e comprima novamente.',
      },
    ],
    examples: [
      {
        title: 'Otimizando uma foto de capa de 2,4 MB para um artigo de blog',
        input: 'JPG 3840×2160 · Saída: WebP · Largura máx.: 1280 px · Qualidade: 80%',
        output: 'WebP 1280×720 geralmente ~85–140 KB (-94% de redução de carga)',
        explanation: 'Combinar o limite de dimensões com a compressão moderna WebP acelera muito o Largest Contentful Paint.',
      },
      {
        title: 'Reduzindo uma captura de tela para anexo de e-mail',
        input: 'PNG 1920×1080 de 1,8 MB · Saída: JPG · Qualidade: 75%',
        output: 'JPG de cerca de 180 KB, pequeno o bastante para anexos de e-mail.',
        explanation: 'O JPG com perda reduz capturas de tela pesadas a uma fração do tamanho original.',
      },
    ],
    benefits: [
      'Zero envio ao servidor mantém gráficos de produtos não lançados e fotos privadas totalmente locais',
      'Aceita recodificação em WebP, JPEG (com preenchimento branco automático da transparência) e PNG',
      'Mostra os tamanhos reais em bytes antes e depois e a economia em porcentagem na hora',
      'Limites opcionais de largura máxima redimensionam fotos de câmera grandes em uma só passada',
    ],
    useCases: [
      'Diminuir banners de capa e capturas de tela para melhorar Core Web Vitals e LCP',
      'Preparar anexos mais leves para e-mails, portais e envios de CMS',
      'Converter capturas de tela pesadas em arquivos WebP leves para a web',
      'Verificar rapidamente o equilíbrio ideal entre qualidade e fidelidade visual',
    ],
    faqs: [
      {
        question: 'Por que comprimir um PNG pequeno em PNG às vezes aumenta o tamanho?',
        answer:
          'O Canvas do navegador recodifica PNGs usando fluxos DEFLATE sem perda padrão, sem ferramentas especializadas de quantização de paleta como o pngquant. Mudar o Formato de Saída para WebP ou JPG geralmente reduz muito o tamanho do arquivo.',
      },
      {
        question: 'Minhas fotos são enviadas para um servidor externo de compressão?',
        answer:
          'Não. Toda a decodificação, o redimensionamento e a recodificação via Canvas acontecem estritamente dentro da memória do seu navegador.',
      },
      {
        question: 'O que acontece com fundos transparentes se eu escolher JPG?',
        answer:
          'Como o JPEG não aceita transparência alfa, as regiões transparentes são preenchidas de forma limpa com branco sólido (#ffffff) antes da codificação.',
      },
      {
        question: 'O Compressor de Imagens é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, sem marcas d’água e sem limite de quantas imagens você comprime.',
      },
      {
        question: 'Quais formatos de imagem posso comprimir?',
        answer:
          'Você pode comprimir imagens PNG, JPG, WebP e GIF, e baixar o resultado como WebP, JPG ou PNG.',
      },
      {
        question: 'Quanto o Compressor de Imagens pode diminuir minha foto?',
        answer:
          'A economia depende do formato original e da configuração de qualidade, mas fotos convertidas para WebP com 80% de qualidade costumam diminuir de 50 a 90%.',
      },
      {
        question: 'Comprimir minha imagem vai reduzir a qualidade?',
        answer:
          'Formatos com perda, como WebP e JPG, trocam um pouco de detalhe por arquivos bem menores. Use o controle de qualidade e a pré-visualização para encontrar o equilíbrio que você gosta, ou mantenha PNG para resultados sem perda.',
      },
      {
        question: 'O Compressor de Imagens redimensiona as dimensões da minha imagem?',
        answer:
          'Só se você definir um limite de largura máxima. Caso contrário, as dimensões em pixels ficam iguais e só o tamanho do arquivo muda.',
      },
      {
        question: 'Posso comprimir imagens para anexos de e-mail?',
        answer:
          'Sim, comprimir primeiro deixa fotos grandes pequenas o bastante para caber nos limites de anexo de e-mail sem dividi-las em várias mensagens.',
      },
      {
        question: 'Qual configuração de qualidade devo escolher para imagens de site?',
        answer:
          'Uma qualidade de 75 a 85% em WebP geralmente parece quase idêntica à original, mantendo os arquivos pequenos o bastante para carregamentos rápidos.',
      },
      {
        question: 'Por que devo converter JPG para WebP ao comprimir?',
        answer:
          'O WebP usa compressão mais eficiente que o JPG, então a mesma foto com a mesma qualidade visual geralmente fica bem menor.',
      },
      {
        question: 'Posso comprimir várias imagens de uma vez?',
        answer:
          'O compressor processa uma imagem por vez, para que você possa ajustar qualidade, largura e formato de cada foto antes de baixá-la.',
      },
      {
        question: 'A compressão funciona offline?',
        answer:
          'Sim, depois que a página carrega, toda a compressão acontece localmente no seu navegador, então funciona sem conexão com a internet.',
      },
      {
        question: 'Minha imagem comprimida vai ter marca d’água?',
        answer:
          'Não, as imagens baixadas nunca incluem marcas d’água ou logotipos, por isso o arquivo comprimido fica exatamente igual à sua imagem original, apenas menor.',
      },
      {
        question: 'Qual é o melhor formato para comprimir capturas de tela?',
        answer:
          'O WebP geralmente gera os menores arquivos para capturas de tela. Use PNG só quando precisar de qualidade sem perda e pixel a pixel.',
      },
      {
        question: 'Posso comprimir uma imagem sem mudar suas dimensões?',
        answer:
          'Sim, deixe o limite de largura máxima vazio e a ferramenta mantém a largura e a altura originais, reduzindo só o tamanho do arquivo.',
      },
      {
        question: 'O Compressor de Imagens mantém os metadados da imagem?',
        answer:
          'A recodificação via Canvas do navegador geralmente remove metadados EXIF, como configurações da câmera e localização, o que também ajuda a diminuir o arquivo.',
      },
      {
        question: 'Posso usar o Compressor de Imagens no celular?',
        answer:
          'Sim, ele funciona em qualquer navegador moderno de celular. Escolha uma imagem da sua galeria de fotos e baixe o resultado comprimido da mesma forma.',
      },
      {
        question: 'Qual é o tamanho máximo de imagem que posso comprimir?',
        answer:
          'Não há um limite fixo de servidor, porque nada é enviado. Imagens muito grandes são limitadas apenas pela memória do seu dispositivo e pelo tamanho do Canvas do navegador.',
      },
      {
        question: 'Como comprimo uma imagem para menos de 100 KB?',
        answer:
          'Escolha a saída WebP, defina uma largura máxima como 1280 px e reduza o controle de qualidade passo a passo até o tamanho do arquivo exibido ficar abaixo de 100 KB.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Carregue sua imagem',
        description:
          'Envie qualquer imagem PNG, JPG, WebP ou GIF para ler a largura e a altura originais em pixels.',
      },
      {
        title: 'Defina largura, altura e modo de ajuste',
        description:
          'Digite pixels personalizados (com Travar Proporção opcional) ou selecione um modelo social e escolha Corte Central Cover ou Esticar/Escala Exata.',
      },
      {
        title: 'Escolha um formato de saída',
        description:
          'Escolha PNG para transparência, JPG para fotos ou WebP para o menor arquivo antes de renderizar.',
      },
      {
        title: 'Renderize a imagem redimensionada',
        description:
          'Clique em Renderizar Imagem Redimensionada para gerar a nova versão com suas dimensões exatas em pixels.',
      },
      {
        title: 'Revise o resultado e baixe',
        description:
          'Confira a pré-visualização quanto à nitidez e ao corte, veja o tamanho do arquivo e clique em Baixar para salvar.',
      },
      {
        title: 'Dica: a imagem ficou esticada ou borrada?',
        description:
          'Ative Travar Proporção ou mude para Corte Central Cover para evitar distorção, e evite ampliar muito além do tamanho original.',
      },
    ],
    examples: [
      {
        title: 'Cortando uma captura de tela alta em um cartão Open Graph 1200×630',
        input: 'Captura de tela 1440×1600 · Modelo: OG Share (1200×630) · Ajuste: Corte Central Cover',
        output: 'Cartão 1200×630 nítido, centralizado na vertical, sem achatamento ou distorção.',
        explanation: 'O cover-crop escala proporcionalmente até preencher o quadro alvo, cortando as bordas excedentes de forma uniforme.',
      },
      {
        title: 'Foto de perfil quadrada 512×512 a partir de uma foto de retrato',
        input: 'Foto 1080×1350 · Modelo: Avatar (512×512) · Ajuste: Corte Central Cover',
        output: 'Avatar quadrado 512×512 com o rosto centralizado e sem distorção.',
        explanation: 'O corte central mantém o assunto no meio enquanto ajusta a proporção para o quadrado.',
      },
    ],
    benefits: [
      'Modelos de pixels com um clique: Open Graph, YouTube HD, Quadrado e Avatar',
      'O Corte Central Cover evita esticamento estranho ao mudar as proporções',
      'A qualidade imageSmoothingQuality de alta qualidade do Canvas preserva tipografia e linhas nítidas',
      'Exporta direto para PNG, JPG ou WebP com leitura real do tamanho do arquivo',
    ],
    useCases: [
      'Criar cartões og:image 1200×630 para posts de blog e landing pages',
      'Preparar fotos de produto 1080×1080 e avatares de perfil 512×512',
      'Reduzir capturas de tela de alta densidade antes de adicioná-las à documentação',
      'Gerar dimensões exatas de capa que correspondem aos requisitos de modelos de CMS',
    ],
    faqs: [
      {
        question: 'Qual é a diferença entre Corte Central Cover e Esticar / Escala Exata?',
        answer:
          'O Corte Central Cover preserva as proporções naturais e corta as bordas excedentes de forma simétrica quando a nova proporção é diferente. A Escala Exata força a imagem original completa na largura e altura alvo.',
      },
      {
        question: 'Posso ampliar uma foto pequena para 4K com qualidade?',
        answer:
          'A interpolação do Canvas pode exportar grades de pixels maiores, mas ampliar além da resolução nativa não consegue inventar detalhes finos que faltam.',
      },
      {
        question: 'Qual é a dimensão máxima de saída suportada?',
        answer:
          'As entradas são limitadas a até 8000 px por eixo para ficar com segurança dentro dos limites de memória do Canvas do navegador.',
      },
      {
        question: 'O Redimensionador de Imagens é gratuito?',
        answer:
          'Sim, é gratuito, sem cadastro, sem marcas d’água e sem limite de quantas imagens você redimensiona.',
      },
      {
        question: 'Qual é a diferença entre redimensionar e cortar uma imagem?',
        answer:
          'Redimensionar muda as dimensões em pixels da imagem inteira, enquanto cortar remove parte da imagem. Esta ferramenta pode fazer os dois, incluindo o corte central cover.',
      },
      {
        question: 'O Redimensionador de Imagens pode deixar uma imagem em 1200x630 para compartilhar nas redes sociais?',
        answer:
          'Sim, escolha o modelo Open Graph (1200×630) e a ferramenta dimensiona sua imagem exatamente para as pré-visualizações de links nas plataformas sociais.',
      },
      {
        question: 'Como redimensiono uma imagem sem esticá-la?',
        answer:
          'Mantenha Travar Proporção ativado ou use o Corte Central Cover, para que a ferramenta escale proporcionalmente em vez de achatar a imagem.',
      },
      {
        question: 'Posso redimensionar uma imagem para um quadrado 1080x1080?',
        answer:
          'Sim, escolha o modelo Quadrado ou digite 1080 para largura e altura com o Corte Central Cover ativado.',
      },
      {
        question: 'Redimensionar uma imagem reduz o tamanho do arquivo?',
        answer:
          'Geralmente sim, porque menos pixels significam menos dados, especialmente quando você também exporta como WebP ou JPG.',
      },
      {
        question: 'Quais formatos de imagem posso redimensionar?',
        answer:
          'Você pode redimensionar imagens PNG, JPG, WebP e GIF e exportá-las como PNG, JPG ou WebP.',
      },
      {
        question: 'Redimensionar vai deixar minha imagem borrada?',
        answer:
          'Reduzir geralmente fica nítido graças à suavização de alta qualidade do Canvas. Ampliar além do tamanho original pode suavizar detalhes finos.',
      },
      {
        question: 'Posso redimensionar uma imagem para foto de perfil?',
        answer:
          'Sim, use o modelo Avatar (512×512) com Corte Central Cover para obter uma foto de perfil perfeitamente quadrada.',
      },
      {
        question: 'O que é Corte Central Cover no Redimensionador de Imagens?',
        answer:
          'Ele escala a imagem até preencher o quadro alvo e depois corta as bordas excedentes de forma uniforme a partir do centro, para que nada pareça esticado.',
      },
      {
        question: 'O Redimensionador de Imagens envia minhas fotos para algum lugar?',
        answer:
          'Não, todo o redimensionamento acontece localmente no seu navegador e suas imagens nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso redimensionar uma imagem no celular?',
        answer:
          'Sim, funciona em navegadores de celular. Envie uma foto, digite as novas dimensões e baixe o resultado.',
      },
      {
        question: 'O que acontece com a transparência quando redimensiono um PNG?',
        answer:
          'A transparência é preservada desde que você exporte como PNG ou WebP. Exportar como JPG preenche as áreas transparentes com branco.',
      },
      {
        question: 'Posso redimensionar várias imagens para o mesmo tamanho?',
        answer:
          'A ferramenta redimensiona uma imagem por vez. Repita o mesmo modelo ou as mesmas dimensões para cada imagem para mantê-las consistentes.',
      },
      {
        question: 'Qual é a maior imagem que o Redimensionador de Imagens aceita?',
        answer:
          'As entradas são limitadas a 8000 px por lado para ficar dentro dos limites de memória do Canvas do navegador.',
      },
      {
        question: 'Como redimensiono uma imagem para miniatura do YouTube?',
        answer:
          'Escolha o modelo YouTube HD (1280×720) para que sua miniatura corresponda ao tamanho recomendado de 16:9.',
      },
      {
        question: 'Por que o arquivo da minha imagem redimensionada continua grande?',
        answer:
          'O tamanho em pixels é só parte da história. Exporte como WebP ou JPG em vez de PNG, ou use o Compressor de Imagens depois para diminuir ainda mais o arquivo.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Escolha o formato alvo e as opções',
        description:
          'Selecione a saída PNG, JPG ou WebP, defina a qualidade com perda se aplicável e escolha uma cor de fundo matte ao converter imagens transparentes para JPG.',
      },
      {
        title: 'Selecione uma ou várias imagens',
        description:
          'Carregue um único arquivo ou um lote com vários arquivos para renderizar cada imagem de forma limpa em sua resolução nativa completa.',
      },
      {
        title: 'Confira a pré-visualização de cada arquivo',
        description:
          'Revise as dimensões e o tamanho estimado de cada imagem convertida antes de baixar qualquer coisa.',
      },
      {
        title: 'Converta o lote',
        description:
          'A ferramenta renderiza cada imagem em sua resolução nativa completa no formato selecionado, direto no seu navegador.',
      },
      {
        title: 'Baixe os arquivos convertidos',
        description:
          'Compare as dimensões e o novo tamanho em bytes de cada arquivo e baixe suas imagens convertidas individualmente.',
      },
      {
        title: 'Dica: as áreas transparentes ficaram pretas?',
        description:
          'Se um PNG convertido para JPG mostrar preto onde era transparente, converta novamente com uma cor de preenchimento matte, como branco ou a cor da sua marca.',
      },
    ],
    examples: [
      {
        title: 'Achatando um logotipo transparente SVG/PNG sobre azul-marinho da marca para JPG',
        input: 'logo.png transparente · Alvo: JPG (90%) · Preenchimento: #FFFFFF',
        output: 'logo.jpg com fundo branco limpo e zero artefatos pretos de transparência',
        explanation: 'Preencher explicitamente o fundo matte do Canvas antes de desenhar evita halos pretos ao converter PNGs com alfa para JPEG.',
      },
      {
        title: 'Convertendo downloads WebP em lote para PNG universal',
        input: '8 arquivos .webp baixados · Alvo: PNG',
        output: '8 arquivos .png em resolução total, prontos para softwares antigos.',
        explanation: 'O lote mantém a resolução nativa de cada imagem durante a conversão.',
      },
    ],
    benefits: [
      'Processa lotes com várias imagens em resolução total sem filas de servidor',
      'A cor configurável de preenchimento de fundo JPEG evita preenchimentos pretos feios de transparência',
      'Converte downloads WebP de volta em arquivos PNG ou JPG universalmente aceitos',
      'Renderiza arquivos vetoriais SVG diretamente em imagens raster PNG ou WebP nítidas',
    ],
    useCases: [
      'Converter arquivos .webp baixados em .png ou .jpg para softwares antigos',
      'Produzir em lote arquivos .webp modernos para sites estáticos e CDNs',
      'Exportar PNGs nítidos a partir de ícones de marca SVG para slides ou posts sociais',
      'Comparar diferenças de tamanho de formato entre PNG, JPG e WebP lado a lado',
    ],
    faqs: [
      {
        question: 'Esta ferramenta converte fotos HEIC da Apple?',
        answer:
          'A decodificação de HEIC depende do suporte do navegador (o Safari aceita HEIC nativamente, enquanto Chrome/Firefox geralmente exigem entradas PNG, JPG, WebP, SVG ou GIF).',
      },
      {
        question: 'Converter JPG para PNG melhora detalhes de foto perdidos?',
        answer:
          'Não. Converter um JPG já comprimido em PNG o preserva sem perda daqui para frente, mas não consegue restaurar artefatos anteriores de compressão JPEG.',
      },
      {
        question: 'Há limites de arquivo aplicados?',
        answer:
          'Só a memória RAM do seu dispositivo se aplica; toda a codificação acontece localmente, sem limites de tamanho de arquivo de servidor.',
      },
      {
        question: 'O Conversor de Formato de Imagem é gratuito?',
        answer:
          'Sim, é gratuito, sem conta, sem marcas d’água e sem limite de quantas conversões você faz.',
      },
      {
        question: 'Quais formatos posso converter de e para quais?',
        answer:
          'Você pode converter arquivos PNG, JPG, WebP, GIF e SVG para saída PNG, JPG ou WebP.',
      },
      {
        question: 'Por que converter PNG para WebP?',
        answer:
          'Arquivos WebP geralmente são bem menores que PNG com qualidade visual parecida, o que faz as páginas da web carregarem mais rápido.',
      },
      {
        question: 'Por que converter WebP para JPG ou PNG?',
        answer:
          'Alguns aplicativos antigos, impressoras e formulários de envio não aceitam WebP, então converter de volta para JPG ou PNG restaura a compatibilidade universal.',
      },
      {
        question: 'Posso converter várias imagens de uma vez?',
        answer:
          'Sim, você pode carregar um lote de imagens e convertê-las todas para o mesmo formato alvo de uma só vez.',
      },
      {
        question: 'Converter para JPG remove a transparência?',
        answer:
          'Sim, o JPG não tem canal alfa, então as áreas transparentes são preenchidas com a cor matte que você escolher, como branco.',
      },
      {
        question: 'Qual cor matte devo usar ao converter um PNG transparente para JPG?',
        answer:
          'O branco é o padrão mais seguro. Combine com a cor de fundo do seu site ou slide para um visual perfeito.',
      },
      {
        question: 'Posso converter uma foto para WebP e manter sua qualidade?',
        answer:
          'Sim, o WebP com 85 a 90% de qualidade geralmente parece idêntico ao JPG original, gerando um arquivo visivelmente menor.',
      },
      {
        question: 'Posso converter um logotipo SVG para PNG?',
        answer:
          'Sim, a ferramenta rasteriza arquivos SVG em imagens PNG ou WebP nítidas nas dimensões nativas.',
      },
      {
        question: 'O Conversor de Formato de Imagem envia minhas imagens?',
        answer:
          'Não, toda conversão acontece localmente no seu navegador e seus arquivos nunca saem do seu dispositivo.',
      },
      {
        question: 'Qual qualidade devo usar ao converter para JPG?',
        answer:
          'Uma qualidade de 85 a 90% mantém as fotos limpas e bem menores que PNG. Reduza para arquivos menores.',
      },
      {
        question: 'Posso converter GIFs animados com esta ferramenta?',
        answer:
          'Arquivos GIF podem ser carregados, mas a conversão renderiza um único quadro estático em vez de preservar a animação.',
      },
      {
        question: 'Por que meu PNG convertido ficou maior que o JPG original?',
        answer:
          'O PNG é sem perda, então uma foto convertida de JPG comprimido para PNG armazena cada pixel sem compressão e geralmente cresce de tamanho.',
      },
      {
        question: 'O conversor mantém as dimensões originais da imagem?',
        answer:
          'Sim, as imagens convertidas mantêm sua resolução nativa completa, a menos que você as redimensione separadamente com o Redimensionador de Imagens.',
      },
      {
        question: 'Posso usar o Conversor de Formato de Imagem no celular?',
        answer:
          'Sim, ele funciona em navegadores de celular. Selecione imagens do seu dispositivo e baixe os arquivos convertidos.',
      },
      {
        question: 'Qual é o melhor formato para imagens de site?',
        answer:
          'O WebP geralmente é o melhor para fotos e gráficos na web, enquanto o PNG é melhor quando você precisa de transparência ou qualidade sem perda.',
      },
      {
        question: 'As imagens convertidas incluem marcas d’água?',
        answer:
          'Não, os arquivos convertidos são cópias limpas, sem marcas d’água ou logotipos adicionados.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Envie uma imagem',
        description:
          'Escolha qualquer imagem PNG, JPG, WebP ou GIF para carregá-la na pré-visualização interativa do Canvas.',
      },
      {
        title: 'Gire, espelhe ou aplique filtros',
        description:
          'Use os botões Girar à Esquerda/Direita, as opções de Espelhar na Horizontal/Vertical, o interruptor Tons de Cinza e os controles de Brilho/Contraste.',
      },
      {
        title: 'Veja o resultado ao vivo',
        description:
          'Confira a pré-visualização do Canvas após cada mudança para confirmar se a orientação e a intensidade do filtro estão certas.',
      },
      {
        title: 'Redefina se precisar',
        description:
          'Use o botão Redefinir para desfazer todas as rotações, espelhamentos e mudanças de filtro e começar novamente do original.',
      },
      {
        title: 'Escolha um formato de saída',
        description:
          'Escolha PNG para manter a transparência, JPG para fotos ou WebP para arquivos menores antes de exportar.',
      },
      {
        title: 'Exporte a imagem editada',
        description:
          'Clique em Baixar para salvar sua imagem girada, espelhada ou filtrada no seu dispositivo.',
      },
    ],
    examples: [
      {
        title: 'Corrigindo uma foto de celular de lado e aumentando o brilho',
        input: 'Foto 3024×4032 girada 90° no sentido horário · Brilho: 110% · Contraste: 105%',
        output: 'Imagem 4032×3024 na vertical exportada de forma limpa, com a orientação EXIF embutida nos pixels.',
        explanation: 'O Canvas troca largura e altura automaticamente em giros de 90° e 270°.',
      },
      {
        title: 'Desespelhando uma selfie de webcam',
        input: 'Selfie espelhada 1280×720 · Espelhar na Horizontal: ativado',
        output: 'Selfie 1280×720 com o texto legível novamente e a orientação correta.',
        explanation: 'O espelhamento horizontal desfaz a inversão típica de câmeras frontais.',
      },
    ],
    benefits: [
      'A pré-visualização ao vivo em pixels é atualizada na hora, sem latência de envio',
      'Embute a orientação de forma limpa nas coordenadas reais dos pixels, em vez de sinalizadores EXIF frágeis',
      'Combina rotação, espelhamento e ajustes de cor e tom em um só espaço de trabalho limpo',
      'O botão Redefinir não destrutivo restaura os padrões a qualquer momento',
    ],
    useCases: [
      'Endireitar documentos ou recibos digitalizados capturados de lado',
      'Desespelhar capturas de webcam invertidas ou capturas de tela espelhadas',
      'Criar gráficos em tons de cinza de alto contraste para impressão ou documentação',
      'Clarear rapidamente fotos de produtos subexpostas antes de anunciar',
    ],
    faqs: [
      {
        question: 'Girar uma imagem recodifica os pixels?',
        answer:
          'Sim. Desenhar no Canvas HTML5 embute a nova orientação e os ajustes de filtro permanentemente em cada pixel, para que todos os aplicativos a exibam na vertical correta.',
      },
      {
        question: 'Posso preservar fundos transparentes ao girar ou espelhar?',
        answer:
          'Sim — mantenha o Formato de Saída em PNG ou WebP para reter a transparência alfa completa em gráficos girados/espelhados.',
      },
      {
        question: 'As edições são salvas nos seus servidores?',
        answer:
          'Não. Tudo acontece dentro da sua própria aba do navegador e é descartado quando você fecha a página.',
      },
      {
        question: 'A ferramenta de girar imagem é gratuita?',
        answer:
          'Sim, é totalmente gratuita, sem cadastro, sem marcas d’água e sem limites.',
      },
      {
        question: 'Como giro uma imagem em 90 graus?',
        answer:
          'Envie sua imagem e clique em Girar à Direita ou Girar à Esquerda. Cada clique gira a imagem em 90 graus.',
      },
      {
        question: 'Posso girar uma imagem em 180 graus?',
        answer:
          'Sim, clique em Girar duas vezes na mesma direção para virar a imagem de cabeça para baixo.',
      },
      {
        question: 'Como espelho uma imagem na horizontal?',
        answer:
          'Use a opção Espelhar na Horizontal para espelhar a imagem da esquerda para a direita, o que é útil para corrigir selfies espelhadas.',
      },
      {
        question: 'Qual é a diferença entre espelhar e girar uma imagem?',
        answer:
          'Girar vira a imagem ao redor do centro, enquanto espelhar a reflete como um reflexo no espelho.',
      },
      {
        question: 'Posso girar uma foto sem perder qualidade?',
        answer:
          'A ferramenta recodifica a imagem via Canvas, então exportar como PNG a mantém sem perda. A exportação em JPG aplica compressão leve.',
      },
      {
        question: 'Girar uma imagem muda suas dimensões?',
        answer:
          'Uma rotação de 90 ou 270 graus troca largura e altura. Uma rotação de 180 graus mantém as mesmas dimensões.',
      },
      {
        question: 'Posso deixar uma foto em preto e branco?',
        answer:
          'Sim, ative o interruptor Tons de Cinza para converter sua foto para preto e branco na hora.',
      },
      {
        question: 'Como clareio uma foto escura?',
        answer:
          'Mova o controle de Brilho acima de 100% e adicione um pouco de Contraste para que a imagem não fique desbotada.',
      },
      {
        question: 'Posso girar um PNG e manter sua transparência?',
        answer:
          'Sim, exporte como PNG ou WebP para preservar as áreas transparentes depois de girar ou espelhar.',
      },
      {
        question: 'Minhas fotos editadas são enviadas para um servidor?',
        answer:
          'Não, toda a rotação, espelhamento e filtragem acontece localmente no seu navegador e nada é enviado.',
      },
      {
        question: 'Posso girar uma imagem no celular?',
        answer:
          'Sim, funciona em navegadores de celular. Envie uma foto de lado, gire-a para a vertical e baixe a versão corrigida.',
      },
      {
        question: 'Por que minha foto fica de lado depois de enviá-la?',
        answer:
          'Alguns celulares armazenam a orientação como um sinalizador EXIF que nem todos os aplicativos leem. Esta ferramenta embute a orientação correta nos pixels, para que ela seja exibida na vertical em todos os lugares.',
      },
      {
        question: 'Posso desfazer uma rotação ou filtro?',
        answer:
          'Sim, o botão Redefinir restaura a imagem original e as configurações padrão de filtro a qualquer momento.',
      },
      {
        question: 'A ferramenta corrige fotos tortas ou inclinadas?',
        answer:
          'Ela gira em passos de 90 graus, então corrige fotos de lado ou de cabeça para baixo. Pequenas correções de inclinação não são suportadas.',
      },
      {
        question: 'Quais formatos de imagem posso girar e espelhar?',
        answer:
          'Você pode editar imagens PNG, JPG, WebP e GIF e exportá-las como PNG, JPG ou WebP.',
      },
      {
        question: 'Posso girar e espelhar uma imagem de uma só vez?',
        answer:
          'Sim, você pode combinar rotações, espelhamentos horizontais ou verticais e filtros antes de exportar uma única imagem finalizada.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Escolha o modo Codificar ou Decodificar',
        description:
          'Use Imagem → Data URI Base64 para codificar um arquivo, ou Base64 → Pré-visualização de Imagem para renderizar cargas Base64 coladas.',
      },
      {
        title: 'Carregue uma imagem ou cole texto Base64',
        description:
          'Selecione qualquer arquivo PNG, JPG, WebP, SVG, GIF ou ICO (ou cole uma string completa data:image/... ou texto Base64 puro).',
      },
      {
        title: 'Confira a comparação de tamanho',
        description:
          'Compare o tamanho original do arquivo com o tamanho da string Base64 para ver o acréscimo de cerca de 33% antes de incorporá-la.',
      },
      {
        title: 'Escolha o formato de saída que você precisa',
        description:
          'Escolha a Data URI completa, a string Base64 pura, a tag HTML <img> ou o trecho CSS de background-image.',
      },
      {
        title: 'Copie o trecho ou baixe a pré-visualização',
        description:
          'Copie a Data URI, o Base64 puro, a tag HTML <img> ou o trecho CSS de fundo — ou baixe uma imagem de pré-visualização decodificada.',
      },
      {
        title: 'Dica: o Base64 colado não está funcionando?',
        description:
          'Confira se você colou a string completa sem quebras de linha e se o decodificador adicionou o prefixo data:image/... correto para o seu formato.',
      },
    ],
    examples: [
      {
        title: 'Incorporando um checkmark SVG de 2 KB dentro do CSS',
        input: 'check.svg (2.048 bytes)',
        output: 'data:image/svg+xml;base64,... (~2,7 KB) + regra CSS background-image pronta para colar',
        explanation: 'Economiza uma ida e volta HTTP extra para ícones minúsculos de interface e e-mails HTML de arquivo único offline.',
      },
      {
        title: 'Decodificando uma string Base64 de uma API',
        input: 'String Base64 pura copiada da resposta JSON de uma API',
        output: 'Pré-visualização da imagem renderizada com opção de baixar como PNG.',
        explanation: 'O decodificador adiciona automaticamente o prefixo de Data URI PNG quando ele está faltando.',
      },
    ],
    benefits: [
      'Comparação instantânea do tamanho do arquivo binário com o acréscimo de ~33% da string Base64',
      'Gera ao mesmo tempo Data URI, Base64 puro, <img> HTML e trechos CSS de fundo',
      'Adiciona automaticamente o prefixo de Data URI PNG se você colar Base64 puro sem cabeçalho',
      'Mantém arquivos proprietários e blobs de resposta de API offline dentro do seu navegador',
    ],
    useCases: [
      'Incorporar ícones minúsculos em pacotes CSS ou relatórios HTML autocontidos',
      'Depurar Data URIs de imagem retornadas por APIs JSON ou webhooks',
      'Incorporar pequenos selos de marca em modelos de e-mail HTML transacionais',
      'Inspecionar cargas de imagem codificadas copiadas do DevTools do navegador',
    ],
    faqs: [
      {
        question: 'Quando devo usar imagens Base64 em vez de URLs normais de imagem?',
        answer:
          'Use Data URIs Base64 com moderação para ícones muito pequenos (geralmente menos de 5 a 10 KB) ou exportações HTML de arquivo único. O Base64 aumenta o tamanho dos dados em ~33% e não pode ser armazenado em cache de forma independente entre páginas como as URLs normais.',
      },
      {
        question: 'O decodificador consegue pré-visualizar strings Base64 puras sem o prefixo "data:image/png;base64,"?',
        answer:
          'Sim! Mudar para Base64 → Pré-visualização de Imagem remove automaticamente os espaços em branco e adiciona um cabeçalho padrão de Data URI PNG se ele estiver faltando.',
      },
      {
        question: 'Funciona com SVGs vetoriais?',
        answer:
          'Sim. Enviar um arquivo .svg cria uma URI data:image/svg+xml;base64,... válida junto com trechos HTML e CSS.',
      },
      {
        question: 'O conversor de imagem para Base64 é gratuito?',
        answer:
          'Sim, é gratuito, sem cadastro, sem marcas d’água e sem limite de quantas imagens você codifica ou decodifica.',
      },
      {
        question: 'O que é uma Data URI Base64?',
        answer:
          'Uma Data URI incorpora uma imagem diretamente dentro de uma página, folha de estilo ou e-mail como texto, começando com data:image/...;base64, seguido dos dados codificados.',
      },
      {
        question: 'Por que a string Base64 é maior que minha imagem?',
        answer:
          'A codificação Base64 representa dados binários com caracteres de texto, o que adiciona cerca de 33% de acréscimo ao tamanho original do arquivo.',
      },
      {
        question: 'Qual tamanho de imagem é melhor para codificação Base64?',
        answer:
          'Mantenha as imagens Base64 pequenas, geralmente menos de 5 a 10 KB, como ícones e logotipos. Imagens maiores incham seu HTML ou CSS e não podem ser armazenadas em cache separadamente.',
      },
      {
        question: 'Posso converter um JPG para Base64?',
        answer:
          'Sim, arquivos JPG, PNG, WebP, SVG, GIF e ICO podem ser codificados em Data URIs Base64.',
      },
      {
        question: 'Como uso uma imagem Base64 em HTML?',
        answer:
          'Copie a tag HTML <img> gerada e cole-a na sua página. O atributo src já contém a Data URI completa.',
      },
      {
        question: 'Como uso uma imagem Base64 em CSS?',
        answer:
          'Copie o trecho CSS de background-image e cole-o na sua folha de estilo para exibir a imagem sem uma requisição de arquivo separada.',
      },
      {
        question: 'Posso decodificar uma string Base64 de volta para uma imagem?',
        answer:
          'Sim, mude para Base64 → Pré-visualização de Imagem, cole a string e a ferramenta renderiza a imagem para você pré-visualizar ou baixar.',
      },
      {
        question: 'Preciso do prefixo data:image/png;base64, ao decodificar?',
        answer:
          'Não, se você colar Base64 puro sem cabeçalho, a ferramenta adiciona automaticamente um prefixo padrão de Data URI PNG.',
      },
      {
        question: 'A ferramenta de imagem para Base64 envia meus arquivos?',
        answer:
          'Não, a codificação e a decodificação acontecem inteiramente no seu navegador e suas imagens nunca saem do seu dispositivo.',
      },
      {
        question: 'Posso codificar um SVG em Base64?',
        answer:
          'Sim, arquivos SVG geram uma URI data:image/svg+xml;base64,... válida junto com trechos HTML e CSS correspondentes.',
      },
      {
        question: 'Qual é a diferença entre Base64 puro e uma Data URI?',
        answer:
          'O Base64 puro é só o texto codificado, enquanto uma Data URI adiciona o cabeçalho data:image/...;base64, para que os navegadores saibam o tipo da imagem.',
      },
      {
        question: 'Posso usar imagens Base64 em e-mails?',
        answer:
          'Sim, imagens Base64 pequenas funcionam bem em e-mails HTML autocontidos, embora alguns clientes de e-mail limitem o suporte a Data URI, então teste antes de enviar.',
      },
      {
        question: 'Há limite de tamanho de arquivo para codificação?',
        answer:
          'Não há limite de servidor, porque nada é enviado. Imagens muito grandes são limitadas apenas pela memória do seu navegador, e strings Base64 enormes são impraticáveis de colar.',
      },
      {
        question: 'Posso converter uma imagem Base64 em um arquivo baixável?',
        answer:
          'Sim, decodifique a string no modo Base64 → Pré-visualização de Imagem e use a opção de download para salvá-la como um arquivo de imagem comum.',
      },
      {
        question: 'A codificação Base64 muda a qualidade da imagem?',
        answer:
          'Não, o Base64 é uma representação em texto sem perda dos mesmos bytes exatos, então a imagem decodificada é idêntica à original.',
      },
      {
        question: 'Posso usar o conversor de imagem para Base64 no celular?',
        answer:
          'Sim, funciona em navegadores de celular. Codifique uma imagem da sua galeria de fotos ou cole uma string Base64 para pré-visualizá-la.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Escolha as cores de Primeiro Plano e Fundo',
        description:
          'Use os seletores de cor, as entradas HEX ou as entradas individuais de R/G/B — ou comece com modelos acessíveis e troque as cores com um clique.',
      },
      {
        title: 'Ajuste os tons até a proporção passar',
        description:
          'Ajuste a luminosidade ou os canais RGB individuais e veja a proporção atualizar ao vivo até sua combinação atingir o limite AA ou AAA de que você precisa.',
      },
      {
        title: 'Revise o painel de pontuação WCAG 2.1',
        description:
          'Confira a proporção exata de contraste (por exemplo, 12,63 : 1) e o status instantâneo de APROVADO/REPROVADO nos critérios AA Normal, AA Grande/UI, AAA Normal e AAA Grande.',
      },
      {
        title: 'Veja a combinação em texto real de interface',
        description:
          'Leia as pré-visualizações ao vivo de tipografia e de cartão de controle de interface com borda para ver como suas cores realmente ficam como texto de corpo, títulos e botões.',
      },
      {
        title: 'Extraia amostras de uma imagem (opcional)',
        description:
          'Envie qualquer captura de tela ou logotipo de marca no final para extrair até 8 cores dominantes distintas e aplicá-las direto ao Primeiro Plano ou Fundo.',
      },
      {
        title: 'Copie as cores e corrija pares reprovados',
        description:
          'Copie os valores HEX, RGB ou HSL sincronizados para o seu CSS. Se um par reprovar, escureça o texto ou clareie o fundo até o painel ficar verde.',
      },
    ],
    examples: [
      {
        title: 'Auditando a legibilidade do botão principal de ação',
        input: 'Primeiro plano: #FFFFFF · Fundo: #4F46E5',
        output: 'Proporção de contraste 6,29 : 1 — Aprovado em WCAG AA Normal, AA Grande e AAA Grande',
        explanation: 'Usa a luminância relativa oficial sRGB com linearização gama (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Extraindo a paleta da marca de um logotipo',
        input: 'Logotipo enviado com fundo azul e texto branco',
        output: 'Até 8 amostras HEX dominantes, com a azul e a branca prontas para testar como par.',
        explanation: 'O quantizador de cores do Canvas agrupa tons próximos e mostra as cores mais proeminentes da imagem.',
      },
    ],
    benefits: [
      'Fórmula exata de luminância relativa sRGB do WCAG 2.1 — zero aproximações',
      'Pré-visualizações ao vivo de tipografia e de cartão de controle de interface com borda mostram a combinação ativa',
      'O quantizador de cores de imagem embutido no Canvas extrai amostras da marca sem ferramentas extras',
      'Exibe strings HEX, RGB e HSL sincronizadas, prontas para colar no CSS',
    ],
    useCases: [
      'Auditar sistemas de design, painéis SaaS e temas de modo escuro quanto à conformidade WCAG AA/AAA',
      'Extrair cores dominantes da marca de logotipos de clientes direto para paletas de interface acessíveis',
      'Corrigir combinações de baixo contraste em selos, placeholders ou rótulos de botões antes do lançamento',
      'Ensinar hierarquia visual acessível com pré-visualizações ao vivo de texto grande e normal',
    ],
    faqs: [
      {
        question: 'Qual proporção de contraste é exigida para o WCAG Nível AA e Nível AAA?',
        answer:
          'O WCAG 2.1 Nível AA exige pelo menos 4,5:1 para texto normal de corpo e 3,0:1 para texto grande (18 pt ou mais, ou 14 pt em negrito ou mais) e componentes de interface. O Nível AAA aumenta esses limites para 7,0:1 para texto normal e 4,5:1 para texto grande.',
      },
      {
        question: 'Como funciona o extrator de paleta de imagem?',
        answer:
          'Ele desenha sua imagem enviada em um Canvas HTML5 fora da tela, ignora pixels transparentes, agrupa faixas RGB próximas e mostra até 8 amostras dominantes visualmente distintas por cobertura de área.',
      },
      {
        question: 'O Verificador de Contraste de Cores também converte entre HEX, RGB e HSL?',
        answer:
          'Sim. Atualizar qualquer seletor de cor, entrada HEX ou campo R/G/B recalcula automaticamente as representações HEX, rgb() e hsl().',
      },
      {
        question: 'O que conta como texto grande nas regras de contraste do WCAG?',
        answer:
          'Texto grande é 18 pt (24 px) ou maior, ou 14 pt (18,66 px) em negrito ou maior. O texto grande precisa só de 3,0:1 para AA e 4,5:1 para AAA, enquanto o texto normal precisa de 4,5:1 para AA e 7,0:1 para AAA.',
      },
      {
        question: 'O Verificador de Contraste de Cores é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro. Todas as verificações acontecem localmente no seu navegador, então você pode testar quantos pares de cores quiser.',
      },
      {
        question: 'Minhas imagens enviadas saem do meu dispositivo?',
        answer:
          'Não. A extração de paleta acontece inteiramente no seu navegador usando um canvas fora da tela, e suas imagens nunca são enviadas para nenhum servidor.',
      },
      {
        question: 'Como a proporção de contraste é calculada?',
        answer:
          'Ela usa a fórmula oficial do WCAG 2.1: a luminância relativa de cada cor é calculada a partir de valores sRGB linearizados em gama, e a proporção é (L1 + 0,05) / (L2 + 0,05), em que L1 é a cor mais clara.',
      },
      {
        question: 'Posso verificar o contraste de designs em modo escuro?',
        answer:
          'Sim. Digite seu fundo escuro e suas cores claras de texto da mesma forma, e o painel mostra se a combinação passa em AA e AAA para texto normal e grande.',
      },
      {
        question: 'Por que meu par de cores reprova em AA mesmo parecendo legível para mim?',
        answer:
          'Legibilidade percebida e contraste de luminância medido são coisas diferentes. Cores que parecem distintas para você ainda podem estar próximas em luminância, especialmente tons médios, então confie na proporção e ajuste a luminosidade até passar.',
      },
      {
        question: 'O que devo fazer se a cor da minha marca reprovar no teste de contraste?',
        answer:
          'Mantenha a cor da marca para títulos grandes ou elementos decorativos e use um tom mais escuro dela para o texto de corpo. Você também pode clarear o fundo ou adicionar uma sobreposição semitransparente atrás do texto.',
      },
      {
        question: 'O verificador funciona para componentes de interface como botões e ícones?',
        answer:
          'Sim. O WCAG 2.1 exige uma proporção de 3,0:1 para componentes de interface sem texto, como bordas de botões, contornos de campos e ícones significativos, e a coluna AA Grande/UI do painel cobre exatamente isso.',
      },
      {
        question: 'Posso testar texto de placeholder e estados desativados com esta ferramenta?',
        answer:
          'Sim, digite a cor do placeholder ou do estado desativado como primeiro plano. Note que controles desativados estão isentos dos requisitos de contraste do WCAG, mas texto de placeholder que transmite informação não está.',
      },
      {
        question: 'Quantas cores o extrator de paleta consegue extrair de uma imagem?',
        answer:
          'Até 8 cores dominantes distintas. Tons parecidos são agrupados, então as amostras representam as cores visualmente mais proeminentes da imagem, e não todos os tons presentes.',
      },
      {
        question: 'Posso aplicar uma amostra extraída direto como meu primeiro plano ou fundo?',
        answer:
          'Sim. Cada amostra extraída tem um botão para enviá-la direto para o Primeiro Plano ou Fundo, para que você possa testá-la contra sua outra cor na hora.',
      },
      {
        question: 'Quais formatos de imagem funcionam com o extrator de paleta?',
        answer:
          'Qualquer imagem que seu navegador consiga exibir, incluindo capturas de tela ou logotipos em PNG, JPG, WebP e SVG. Pixels transparentes são ignorados ao agrupar as cores.',
      },
      {
        question: 'O Verificador de Contraste de Cores testa daltonismo?',
        answer:
          'Não, ele mede apenas o contraste de luminância. O contraste é uma parte da acessibilidade; para segurança contra daltonismo, também evite depender só da cor para transmitir significado e confira sua paleta com um simulador de daltonismo.',
      },
      {
        question: 'Posso usar os valores HEX, RGB e HSL no meu CSS?',
        answer:
          'Sim. Os três formatos ficam sincronizados enquanto você edita, e você pode copiar qualquer um deles direto para sua folha de estilo, tokens de design ou configuração do Tailwind.',
      },
      {
        question: 'Qual é a diferença entre AA e AAA na prática?',
        answer:
          'O AA é o padrão legal e prático que a maioria dos sites busca, enquanto o AAA é mais rigoroso e costuma ser difícil de atingir para texto de corpo com a cor da marca. Busque AAA quando puder, mas nunca publique abaixo de AA para texto.',
      },
      {
        question: 'A ferramenta armazena minhas escolhas de cores ou imagens?',
        answer:
          'Não. Tudo acontece localmente na aba do seu navegador, nada é enviado, e suas cores e imagens desaparecem quando você fecha ou atualiza a página.',
      },
      {
        question: 'Posso verificar mais de um par de cores por vez?',
        answer:
          'O verificador testa um par primeiro plano/fundo por vez, mas você pode trocar as cores com um único clique e testar novamente quantos pares precisar em segundos.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'Envie uma imagem de QR ou ative a leitura por câmera',
        description:
          'Arraste ou selecione qualquer captura de tela de QR em PNG, JPG, WebP ou SVG — ou clique em Iniciar Leitura por Câmera quando quiser ler um QR code impresso ao vivo.',
      },
      {
        title: 'Deixe o leitor decodificar o código',
        description:
          'A ferramenta executa decodificação local multi-escala e sensível à inversão no seu navegador, então até QR codes de modo escuro ou invertidos são lidos sem enviar nada.',
      },
      {
        title: 'Confira e copie o texto decodificado',
        description:
          'Revise o conteúdo decodificado, a categoria de conteúdo detectada e a pré-visualização segura do link (só URLs http/https viram links clicáveis) e copie com um clique.',
      },
      {
        title: 'Confira o tipo de conteúdo antes de agir',
        description:
          'Veja se o QR contém uma URL, credenciais de Wi-Fi, contato vCard ou texto simples, e confirme se o destino parece certo antes de visitar ou conectar.',
      },
      {
        title: 'Mude para o Construtor de QR de Contato vCard (opcional)',
        description:
          'Crie um QR code de cartão de visita VCF 3.0 escaneável com nome, organização, telefone, e-mail e site, e baixe como PNG ou SVG.',
      },
      {
        title: 'Baixe, imprima ou resolva uma leitura que falhou',
        description:
          'Baixe seu QR vCard ou envie novamente uma captura de tela mais nítida e bem iluminada se a decodificação falhar — QR codes cortados, borrados ou muito pequenos são a causa mais comum.',
      },
    ],
    examples: [
      {
        title: 'Verificando a captura de tela de um folheto de marketing impresso antes de pedir as impressões',
        input: 'Enviar flyer-qr.png (PNG 600×600)',
        output: 'Conteúdo decodificado · URL do site: https://exemplo.com/?utm_source=print',
        explanation: 'Executa decodificação local multi-escala sensível à inversão, para que QR codes invertidos de modo escuro também sejam decodificados com confiança.',
      },
      {
        title: 'Criando um QR vCard para um cartão de visita digital',
        input: 'Nome, organização, telefone, e-mail e site',
        output: 'QR code vCard 3.0 baixável em PNG e SVG, pronto para imprimir no cartão.',
        explanation: 'O formato VCF 3.0 é reconhecido por iPhone e Android, que oferecem salvar o contato ao escanear.',
      },
    ],
    benefits: [
      'Decodifica capturas de tela de QR normais e com cores invertidas de forma limpa, sem aplicativos de celular',
      'O fluxo de câmera opcional para imediatamente após a decodificação ou ao sair da aba',
      'Classifica os conteúdos decodificados de forma limpa, sem redirecionar automaticamente',
      'Inclui geração completa de QR vCard 3.0 em PNG e SVG para cartões de visita digitais',
    ],
    useCases: [
      'Conferir URLs de destino com UTM dentro de materiais de QR antes de imprimir pôsteres',
      'Extrair strings de Wi-Fi ou tokens de texto de capturas de tela de computador',
      'Escanear QR codes físicos em um notebook usando a webcam embutida',
      'Criar QR codes de contato vCard escaneáveis para currículos, crachás e apresentações',
    ],
    faqs: [
      {
        question: 'E se meu dispositivo não tiver câmera ou negar a permissão de câmera?',
        answer:
          'Você nunca precisa de câmera para usar esta ferramenta — basta tirar uma captura de tela ou foto e enviá-la via Enviar Imagem de QR Code, que funciona da mesma forma sem permissões de câmera.',
      },
      {
        question: 'Escanear um QR code abre automaticamente sites maliciosos?',
        answer:
          'Não. O texto decodificado é exibido com segurança dentro de uma área de texto somente leitura primeiro, para que você possa conferir qualquer URL antes de decidir se vai visitá-la.',
      },
      {
        question: 'Precisa de um gerador de QR para URL, Wi-Fi ou cor personalizada em vez de vCard?',
        answer:
          'Experimente nossa ferramenta dedicada Gerador de QR Code em Ferramentas de Redes Sociais, com cores personalizadas de primeiro plano/fundo, níveis de correção de erro e QR codes de URL/texto.',
      },
      {
        question: 'O Leitor de QR Code é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e tanto a leitura quanto a geração de QR vCard acontecem localmente no seu navegador.',
      },
      {
        question: 'Minhas imagens de QR enviadas vão para um servidor?',
        answer:
          'Não. A decodificação acontece inteiramente no seu navegador usando jsQR, então suas capturas de tela e fotos nunca saem do seu dispositivo.',
      },
      {
        question: 'Quais formatos de imagem o Leitor de QR Code consegue ler?',
        answer:
          'Imagens PNG, JPG, WebP e SVG funcionam. Capturas de tela feitas no celular ou no computador são a forma mais comum de fornecer um QR code.',
      },
      {
        question: 'Por que meu QR code não foi lido?',
        answer:
          'As causas usuais são uma imagem borrada ou de baixa resolução, um QR code cortado muito rente, reflexo em um código impresso ou um código simplesmente muito pequeno no quadro. Envie novamente uma captura mais nítida, maior e bem iluminada.',
      },
      {
        question: 'O leitor consegue ler QR codes invertidos ou de modo escuro?',
        answer:
          'Sim. O decodificador é sensível à inversão, então QR codes com módulos claros sobre fundo escuro são decodificados com a mesma confiança que os códigos padrão pretos sobre branco.',
      },
      {
        question: 'Quais tipos de conteúdo de QR ele consegue detectar?',
        answer:
          'Ele classifica o conteúdo decodificado automaticamente, incluindo URLs de sites, credenciais de rede Wi-Fi, contatos vCard e texto simples, para que você saiba o que um código faz antes de agir.',
      },
      {
        question: 'É seguro escanear um QR code que encontrei em público?',
        answer:
          'Escanear é seguro aqui porque nada abre automaticamente — você vê o texto decodificado primeiro. Sempre leia a URL com cuidado e evite digitar senhas ou dados de pagamento em páginas para as quais um QR code aleatório leva você.',
      },
      {
        question: 'Posso escanear um QR code com a webcam do meu notebook?',
        answer:
          'Sim. Clique em Iniciar Leitura por Câmera, permita o acesso à câmera quando o navegador pedir e segure o código impresso na frente da câmera. O fluxo para automaticamente quando o código é decodificado ou quando você sai da aba.',
      },
      {
        question: 'A câmera continua gravando depois de uma leitura?',
        answer:
          'Não. O fluxo de câmera para imediatamente após uma decodificação bem-sucedida, e também para se você trocar de aba ou fechar o leitor.',
      },
      {
        question: 'O que é um QR code vCard?',
        answer:
          'Um QR code vCard armazena dados de contato — nome, organização, telefone, e-mail e site — no formato padrão VCF 3.0, então escaneá-lo com um celular oferece salvar o contato diretamente.',
      },
      {
        question: 'Posso baixar meu QR code vCard como PNG e SVG?',
        answer:
          'Sim. O construtor de vCard exporta os dois formatos: PNG para documentos e apresentações, e SVG para impressão nítida em qualquer tamanho.',
      },
      {
        question: 'O QR code vCard funciona no iPhone e no Android?',
        answer:
          'Sim. As duas plataformas reconhecem QR codes vCard VCF 3.0 padrão e oferecem adicionar o contato ao escanear com a câmera embutida.',
      },
      {
        question: 'Posso escanear um QR code de um vídeo ou gravação de tela?',
        answer:
          'Não diretamente, mas você pode pausar o vídeo, tirar uma captura de tela do quadro que mostra o QR code e enviar essa captura para o leitor.',
      },
      {
        question: 'O Leitor de QR Code funciona offline?',
        answer:
          'Depois que a página carrega, a decodificação acontece totalmente no seu navegador, sem requisições de rede, então você pode escanear imagens enviadas mesmo sem conexão com a internet.',
      },
      {
        question: 'Posso escanear vários QR codes em uma imagem?',
        answer:
          'O leitor decodifica um QR code por vez. Se uma imagem tiver vários códigos, corte a imagem para que cada código seja enviado separadamente.',
      },
      {
        question: 'O que devo verificar antes de imprimir um QR code em um folheto?',
        answer:
          'Envie uma captura de tela do design finalizado e escaneie aqui para confirmar se a URL de destino, os parâmetros UTM e o conteúdo estão exatamente certos antes de pedir as impressões.',
      },
      {
        question: 'A ferramenta armazena meus QR codes escaneados ou imagens da câmera?',
        answer:
          'Não. Nada é enviado, registrado ou armazenado. Os resultados decodificados existem apenas na sua aba atual do navegador e desaparecem quando você a fecha.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Escolha Senha Aleatória ou Frase-senha Diceware',
        description:
          'Use Senha Aleatória para densidade máxima de conjunto de caracteres ou Frase-senha Diceware para digitação humana mais fácil, com entropia forte de várias palavras.',
      },
      {
        title: 'Personalize tamanho, conjuntos de caracteres e quantidade do lote',
        description:
          'Ajuste o tamanho (8 a 64 caracteres), ative Maiúsculas/Minúsculas/Dígitos/Símbolos, exclua opcionalmente caracteres parecidos (0/O/1/l/I) ou selecione de 3 a 8 palavras Diceware.',
      },
      {
        title: 'Gere sua senha ou frase-senha',
        description:
          'Clique em gerar para criar um resultado novo usando o CSPRNG do seu navegador com suporte de hardware e amostragem por rejeição, para que cada caractere tenha exatamente a mesma probabilidade.',
      },
      {
        title: 'Confira a pontuação de entropia',
        description:
          'Confira os bits exatos de entropia de Shannon (~72 a 118+ bits recomendados) para ver quanto trabalho de adivinhação o resultado representa antes de usá-lo.',
      },
      {
        title: 'Gere novamente e copie com segurança',
        description:
          'Não gostou do resultado? Gere novamente para obter um novo e copie uma única senha ou o lote completo com um clique.',
      },
      {
        title: 'Salve em um gerenciador de senhas e atualize para limpar',
        description:
          'Cole o resultado no seu gerenciador de senhas na hora. Atualizar a página apaga as senhas geradas da memória, então nunca dependa da aba para lembrá-las.',
      },
    ],
    examples: [
      {
        title: 'Senha mista de 18 caracteres com conjunto completo de caracteres',
        input: 'Tamanho: 18 · Maiúsculas + Minúsculas + Dígitos + Símbolos (Conjunto: 88 caracteres)',
        output: '~116,3 bits de entropia criptográfica · Garante >= 1 caractere de cada classe ativada',
        explanation: 'Usa amostragem por rejeição (descartando amostras uint32 >= floor(2^32 / conjunto) * conjunto) para uniformidade estrita.',
      },
      {
        title: 'Frase-senha Diceware de 6 palavras para senha mestra',
        input: '6 palavras Diceware aleatórias da lista de palavras',
        output: 'Frase-senha memorável com cerca de 77 bits de entropia, fácil de digitar de memória.',
        explanation: 'Palavras aleatórias são bem mais fáceis de digitar e lembrar do que caracteres aleatórios, com entropia forte.',
      },
    ],
    benefits: [
      'Evita estritamente o inseguro Math.random() — usa window.crypto.getRandomValues com semente de hardware',
      'Elimina o viés de módulo com amostragem por rejeição verdadeira e embaralhamento Fisher-Yates sem viés',
      'Garante pelo menos um caractere de cada classe de caracteres selecionada, sem posições fixas',
      'Nada é registrado, armazenado ou transmitido pela rede',
    ],
    useCases: [
      'Proteger contas na nuvem, chaves SSH, credenciais de banco de dados e cofres mestres de gerenciadores de senhas',
      'Gerar frases-senha Diceware digitáveis por humanos para criptografia de disco ou chaves de Wi-Fi de visitantes',
      'Fornecer credenciais temporárias de integração em massa (até 10 por clique)',
      'Comparar o impacto de entropia em bits de 12 vs. 18 vs. 24 caracteres',
    ],
    faqs: [
      {
        question: 'Por que a amostragem por rejeição com crypto.getRandomValues importa?',
        answer:
          'Simplesmente calcular randomUint32 % tamanhoDoConjunto favorece levemente os caracteres de índice menor quando 2^32 não é divisível de forma exata pelo tamanho do conjunto (viés de módulo). A amostragem por rejeição descarta sorteios fora do intervalo, para que cada caractere do conjunto tenha exatamente a mesma probabilidade matemática.',
      },
      {
        question: 'Devo usar uma senha aleatória ou uma frase-senha?',
        answer:
          'As duas são excelentes quando longas o bastante: 16+ caracteres mistos funcionam em todos os gerenciadores de senhas, enquanto uma frase-senha de 5 a 6 palavras é bem mais fácil de digitar manualmente em TVs, celulares ou telas de descriptografia de disco.',
      },
      {
        question: 'As senhas geradas são armazenadas em algum lugar?',
        answer:
          'Nunca. As senhas vivem apenas na memória efêmera do React na sua aba e desaparecem ao atualizar.',
      },
      {
        question: 'O Gerador de Senhas é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro. Você pode gerar quantas senhas e frases-senha precisar, direto no seu navegador.',
      },
      {
        question: 'Como as senhas são geradas aqui?',
        answer:
          'Elas são criadas localmente no seu navegador usando window.crypto.getRandomValues, o gerador de números aleatórios criptograficamente seguro do seu navegador com suporte de hardware, com amostragem por rejeição para remover o viés de módulo.',
      },
      {
        question: 'Minhas senhas geradas são enviadas para um servidor?',
        answer:
          'Não. A geração acontece inteiramente no seu dispositivo, e nada é armazenado, registrado ou transmitido pela rede.',
      },
      {
        question: 'Qual deve ser o tamanho da minha senha?',
        answer:
          'Para contas importantes, use pelo menos 16 caracteres com classes de caracteres misturadas, o que dá cerca de 100+ bits de entropia. Senhas mais curtas só servem para contas de baixo valor, e o tamanho importa mais que a complexidade.',
      },
      {
        question: 'O que é entropia de senha e de quantos bits eu preciso?',
        answer:
          'A entropia mede quanto trabalho de adivinhação uma senha representa. Cerca de 70 a 80 bits é forte para a maioria das contas, enquanto 100+ bits é recomendado para senhas mestras, chaves de criptografia e contas de alto valor.',
      },
      {
        question: 'O que é uma frase-senha Diceware?',
        answer:
          'Uma frase-senha Diceware é formada por várias palavras aleatórias escolhidas de uma lista fixa, como "correct horse battery staple". Cinco ou seis palavras aleatórias dão entropia forte e continuam bem mais fáceis de digitar e lembrar do que caracteres aleatórios.',
      },
      {
        question: 'Devo excluir caracteres ambíguos como 0, O, 1, l e I?',
        answer:
          'Sim, quando você vai digitar a senha à mão ou lê-la em voz alta. Excluir caracteres parecidos evita erros de digitação no login, e com uma senha longa o bastante a pequena perda de entropia é desprezível.',
      },
      {
        question: 'Posso gerar várias senhas de uma vez?',
        answer:
          'Sim. Você pode gerar um lote de até 10 senhas com um clique, o que é útil ao criar contas ou integrar novos membros da equipe.',
      },
      {
        question: 'O gerador garante pelo menos um caractere de cada classe selecionada?',
        answer:
          'Sim. Toda senha gerada inclui pelo menos um caractere de cada classe de caracteres que você ativou, sem colocar esses caracteres em posições fixas e previsíveis.',
      },
      {
        question: 'Posso usar essas senhas como senha mestra do meu gerenciador de senhas?',
        answer:
          'Uma frase-senha longa funciona bem como senha mestra, porque você precisa digitá-la de memória. Gere uma frase-senha Diceware de 6 palavras, memorize-a e guarde suas outras senhas no gerenciador.',
      },
      {
        question: 'Por que não usar Math.random() para senhas?',
        answer:
          'O Math.random() não é criptograficamente seguro: sua saída pode ser prevista se um invasor conhecer seu estado interno. Esta ferramenta usa apenas window.crypto.getRandomValues, que foi criado para aleatoriedade sensível à segurança.',
      },
      {
        question: 'Uma senha gerada funciona em todos os sites?',
        answer:
          'Quase sempre. Se um site rejeitar símbolos ou limitar o tamanho, reduza o tamanho ou desative a classe de símbolos e gere novamente até o site aceitar.',
      },
      {
        question: 'Posso reutilizar uma senha gerada em vários sites?',
        answer:
          'Você não deve. Reutilizar uma senha significa que um vazamento expõe todas as contas que a compartilham, então gere uma senha única para cada site e guarde-as em um gerenciador de senhas.',
      },
      {
        question: 'O que acontece com minhas senhas se eu atualizar a página?',
        answer:
          'Elas somem. As senhas geradas existem apenas na memória temporária da aba, então copie ou salve-as em um gerenciador de senhas antes de atualizar ou fechar a página.',
      },
      {
        question: 'O Gerador de Senhas funciona offline?',
        answer:
          'Sim. Depois que a página carrega, a geração acontece totalmente no seu navegador, sem requisições de rede, então funciona offline.',
      },
      {
        question: 'Como escolho entre senha e frase-senha para Wi-Fi?',
        answer:
          'Use uma frase-senha para chaves de Wi-Fi que você digita em muitos dispositivos, pois palavras são mais fáceis de digitar corretamente, e uma senha de caracteres aleatórios quando um gerenciador de senhas vai preenchê-la para você.',
      },
      {
        question: 'Uma senha gerada é garantida como impossível de hackear?',
        answer:
          'Nenhuma senha pode ser garantida como impossível de hackear — um site ainda pode ser invadido ou enganado por phishing. Uma senha longa, única e gerada aleatoriamente, guardada em um gerenciador de senhas, é, no entanto, uma das defesas práticas mais fortes que você pode usar.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Selecione um arquivo do seu dispositivo',
        description:
          'Escolha um arquivo compactado, instalador, PDF ou arquivo binário. O arquivo é lido estritamente na memória local do navegador (recomendado abaixo de 500 MB) e nunca é enviado.',
      },
      {
        title: 'Aguarde os resumos serem calculados',
        description:
          'O navegador calcula SHA-256, SHA-512, SHA-384 e SHA-1 em paralelo usando Web Crypto com aceleração de hardware. Arquivos maiores levam alguns segundos.',
      },
      {
        title: 'Confira os resumos criptográficos calculados',
        description:
          'Revise os hashes hexadecimais SHA-256, SHA-512, SHA-384 e o legado SHA-1 junto com os metadados do arquivo, e baixe um arquivo de texto .sha256 padrão se precisar.',
      },
      {
        title: 'Verifique contra um checksum publicado',
        description:
          'Cole a string esperada de SHA-256/512/384/1 — ou uma linha inteira "<hash>  nome-do-arquivo" de um arquivo .sha256sum — para confirmar uma correspondência exata ou detectar corrupção/adulteração.',
      },
      {
        title: 'Copie ou exporte o hash',
        description:
          'Copie qualquer resumo com um clique ou baixe o arquivo de texto .sha256 padrão para enviar junto com uma versão ou guardar como registro de verificação.',
      },
      {
        title: 'Aja em caso de divergência ou arquivo grande',
        description:
          'Se os hashes não corresponderem, exclua o arquivo e baixe-o novamente da fonte oficial. Para arquivos acima de ~500 MB, use shasum -a 256 ou certutil, pois o navegador carrega o arquivo inteiro na memória.',
      },
    ],
    examples: [
      {
        title: 'Verificando um binário de versão baixado contra um .sha256sum do fornecedor',
        input: 'Arquivo: app-v2.tar.gz · Esperado: "e3b0c442...  app-v2.tar.gz"',
        output: 'Checksum verificado! Corresponde ao resumo SHA-256 calculado de forma limpa.',
        explanation: 'Extrai automaticamente o token de hash inicial, ignora maiúsculas/minúsculas e compara com os 4 algoritmos calculados.',
      },
      {
        title: 'Gerando um arquivo .sha256 para sua própria versão',
        input: 'Arquivo de versão: release-v1.0.zip',
        output: 'Arquivo release-v1.0.zip.sha256 pronto para publicar junto com o download.',
        explanation: 'O arquivo de texto padrão permite que os usuários verifiquem o download com ferramentas comuns.',
      },
    ],
    benefits: [
      'Usa Web Crypto SubtleCrypto nativo do navegador com aceleração de hardware',
      'Aceita colar linhas completas "<hash>  nome-do-arquivo" de manifestos .sha256sum de versões',
      'Exporta arquivos de verificação filename.sha256 padrão com um clique',
      'Zero envio de arquivos mantém builds confidenciais e contratos privados',
    ],
    useCases: [
      'Verificar ISOs Linux, binários de CLI ou tarballs de código aberto sem abrir um terminal',
      'Confirmar a entrega exata byte a byte de arquivos jurídicos ou financeiros',
      'Gerar manifestos .sha256 de versão para pequenos entregáveis de clientes',
      'Detectar downloads truncados ou corrompidos antes da extração',
    ],
    faqs: [
      {
        question: 'Há um limite máximo de tamanho de arquivo?',
        answer:
          'Como o File.arrayBuffer() do navegador carrega o arquivo inteiro na RAM do cliente de uma vez, arquivos de até ~300–500 MB funcionam bem, enquanto ISOs de vários gigabytes podem exceder as cotas de memória do navegador — para arquivos de vários GB, ferramentas CLI nativas (shasum -a 256 ou certutil) são recomendadas.',
      },
      {
        question: 'Por que o SHA-1 é rotulado apenas como compatibilidade legada?',
        answer:
          'O SHA-1 tem fraquezas práticas conhecidas de colisão e não deve ser confiável para garantias de segurança contra adversários; prefira SHA-256 ou SHA-512 sempre que possível.',
      },
      {
        question: 'Quer gerar hash de strings de texto puro em vez de arquivos binários?',
        answer:
          'Confira nossa ferramenta Gerador de Hash em Ferramentas de Desenvolvedor para hash instantâneo de texto UTF-8.',
      },
      {
        question: 'O Verificador de Hash de Arquivo é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e você pode verificar quantos arquivos quiser.',
      },
      {
        question: 'Meus arquivos são enviados para algum lugar quando eu os verifico?',
        answer:
          'Não. O hash é calculado inteiramente no seu navegador usando a API Web Crypto, então seus arquivos nunca saem do seu dispositivo — e é exatamente por isso que é seguro para builds confidenciais e contratos.',
      },
      {
        question: 'O que é um hash de arquivo e por que devo verificá-lo?',
        answer:
          'Um hash é uma impressão digital de tamanho fixo calculada a partir dos bytes exatos de um arquivo. Se até um byte mudar, o hash muda completamente, então comparar hashes prova que um download chegou intacto e sem modificação.',
      },
      {
        question: 'Qual algoritmo de hash devo usar: SHA-256, SHA-512 ou SHA-1?',
        answer:
          'Use SHA-256 para verificação geral — é o padrão que os publicadores fornecem. O SHA-512 é igualmente forte e mais rápido em sistemas de 64 bits, enquanto o SHA-1 é apenas legado e não deve ser confiável para segurança.',
      },
      {
        question: 'Onde encontro o checksum oficial para comparar?',
        answer:
          'Os publicadores geralmente o listam na página de download ou em um arquivo .sha256 / .sha256sum junto ao download. Sempre copie-o do próprio site do fornecedor, nunca de um espelho ou post de fórum.',
      },
      {
        question: 'O que devo fazer se os hashes não corresponderem?',
        answer:
          'Não execute nem extraia o arquivo. Exclua-o e baixe novamente da fonte oficial; uma divergência significa que o download foi corrompido, truncado ou possivelmente adulterado.',
      },
      {
        question: 'Posso colar uma linha inteira de .sha256sum em vez de só o hash?',
        answer:
          'Sim. O verificador aceita uma linha completa "<hash>  nome-do-arquivo" de um manifesto de versão — ele extrai o token de hash inicial automaticamente, ignora maiúsculas/minúsculas e o compara com os quatro algoritmos calculados.',
      },
      {
        question: 'O hash depende do nome do arquivo?',
        answer:
          'Não. O resumo é calculado apenas a partir do conteúdo do arquivo, então renomear um arquivo nunca muda seu hash. Dois arquivos com os mesmos bytes sempre geram o mesmo hash.',
      },
      {
        question: 'Posso verificar uma ISO Linux ou um instalador grande com esta ferramenta?',
        answer:
          'Sim, até cerca de 300–500 MB. Para ISOs de vários gigabytes, use uma ferramenta nativa como shasum -a 256 no macOS/Linux ou certutil -hashfile no Windows, pois os navegadores carregam o arquivo inteiro na memória.',
      },
      {
        question: 'Qual é a diferença entre SHA-256 e SHA-512?',
        answer:
          'Os dois são membros seguros da família SHA-2; o SHA-256 gera um resumo hexadecimal de 64 caracteres e o SHA-512 um de 128 caracteres. O SHA-512 é um pouco mais forte e mais rápido em hardware de 64 bits, mas o SHA-256 é o checksum publicado com mais frequência.',
      },
      {
        question: 'Esta ferramenta consegue detectar vírus ou malware em um arquivo?',
        answer:
          'Não. Um hash correspondente só prova que o arquivo é idêntico ao que o publicador lançou. Se o próprio arquivo do publicador fosse malicioso, o hash ainda corresponderia, então só verifique downloads de fontes em que você confia.',
      },
      {
        question: 'Como baixo um arquivo .sha256 para minha própria versão?',
        answer:
          'Gere o hash do seu arquivo de versão aqui, baixe o arquivo de texto filename.sha256 padrão que a ferramenta gera e publique-o junto com seu download para que os usuários possam verificá-lo.',
      },
      {
        question: 'Por que o hash leva alguns segundos para arquivos grandes?',
        answer:
          'O navegador precisa ler e processar cada byte do arquivo. Arquivos maiores simplesmente levam mais tempo, e o tempo cresce com o tamanho do arquivo, e não com o algoritmo escolhido.',
      },
      {
        question: 'O Verificador de Hash de Arquivo funciona offline?',
        answer:
          'Sim. Depois que a página carrega, todo o hash acontece localmente no seu navegador, sem requisições de rede, então você pode verificar arquivos sem conexão com a internet.',
      },
      {
        question: 'Posso verificar vários arquivos de uma vez?',
        answer:
          'A ferramenta verifica um arquivo por vez. Gere o hash de cada arquivo separadamente e compare-o com seu próprio checksum publicado.',
      },
      {
        question: 'Um hash correspondente é prova de que o arquivo é autêntico?',
        answer:
          'Ele prova que o arquivo é byte a byte idêntico ao que o publicador gerou o hash. Não prova que o publicador é quem diz ser, então obtenha o hash esperado no canal oficial do publicador.',
      },
      {
        question: 'A ferramenta armazena meus arquivos ou seus hashes?',
        answer:
          'Não. Nada é enviado ou armazenado, e os hashes calculados existem apenas na sua aba atual do navegador até você fechá-la ou atualizá-la.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Escolha Selo de Monograma ou Enviar Logotipo',
        description:
          'Digite de 1 a 3 iniciais da marca com cores personalizadas de fundo/texto, ou mude para Enviar Imagem de Logotipo para cortar ao centro um selo PNG/SVG/JPG existente.',
      },
      {
        title: 'Estilize seu ícone',
        description:
          'Escolha as letras e cores do monograma, ou ajuste o corte do logotipo enviado para que o selo fique centralizado com preenchimento uniforme em todos os lados.',
      },
      {
        title: 'Selecione o formato dos cantos',
        description:
          'Escolha Quadrado Arredondado (estilo iOS/macOS), Círculo ou Quadrado com cantos retos.',
      },
      {
        title: 'Veja a pré-visualização em todos os tamanhos',
        description:
          'Confira com cuidado as pré-visualizações de 16×16 e 32×32 — um selo que fica ótimo grande pode virar um borrão no tamanho da aba, então simplifique letras ou detalhes se precisar.',
      },
      {
        title: 'Baixe favicon.ico, PNGs e o trecho HTML',
        description:
          'Baixe o pacote favicon.ico com vários quadros junto com os tamanhos individuais em PNG e copie as tags de link do <head> para o seu projeto.',
      },
      {
        title: 'Instale os ícones e limpe o cache',
        description:
          'Coloque os arquivos na sua pasta /public/, cole as tags de link no index.html e atualize com força ou limpe o cache do navegador — os navegadores armazenam favicons em cache de forma agressiva, então um ícone desatualizado geralmente significa um ícone em cache.',
      },
    ],
    examples: [
      {
        title: 'Criando ícones para um novo app React ou Cloudflare Pages',
        input: 'Monograma "UH" · Fundo #4F46E5 · Formato: Quadrado Arredondado',
        output: 'favicon.ico binário (quadros PNG 16+32+48 px) + 6 tamanhos PNG + trecho HTML <link>',
        explanation: 'Constrói cabeçalhos binários válidos de ICONDIR e ICONDIRENTRY diretamente dentro de buffers Uint8Array.',
      },
      {
        title: 'Gerando ícones Apple Touch e PWA a partir de um logotipo quadrado',
        input: 'Logotipo PNG 512×512 com fundo transparente · Formato: Círculo',
        output: 'Ícone Apple Touch 180×180 + ícones PWA 192×192 e 512×512, todos nítidos.',
        explanation: 'O corte central mantém o selo da marca centralizado em todos os tamanhos de ícone.',
      },
    ],
    benefits: [
      'Cria um arquivo .ico binário genuíno com vários quadros (16×16, 32×32 e 48×48), e não um PNG renomeado',
      'Cobre abas de computador, Apple Touch (180×180) e ícones de Manifesto Web (192/512 px)',
      'O modo Monograma instantâneo não exige nenhum software de design para projetos paralelos e MVPs',
      'Gera modelo HTML5 <link rel="icon"> limpo, pronto para colar no index.html',
    ],
    useCases: [
      'Enviar favicons e ícones Apple Touch faltando antes de lançamentos de SaaS ou microssites',
      'Criar ícones de aba de alto contraste para painéis de teste vs. produção',
      'Transformar selos quadrados de marca SVG/PNG em conjuntos completos de ícones PWA',
      'Gerar pré-visualizações nítidas de 16×16 e 32×32 para verificar a legibilidade em tamanho pequeno',
    ],
    faqs: [
      {
        question: 'O favicon.ico baixado é um arquivo binário ICO real?',
        answer:
          'Sim. Ele grava cabeçalhos ICONDIR padrão do Windows ICO e entradas de diretório contendo três quadros nítidos codificados em PNG (16×16, 32×32 e 48×48), aceitos por todos os navegadores e sistemas operacionais modernos.',
      },
      {
        question: 'De quais tamanhos de ícone os sites modernos realmente precisam?',
        answer:
          'Um favicon.ico mais um PNG 32×32, um ícone Apple Touch 180×180 e PNGs de Manifesto Web 192×192 / 512×512 cobrem praticamente todos os navegadores de computador, iOS móvel e Android.',
      },
      {
        question: 'Onde devo colocar esses arquivos em um projeto React + Vite?',
        answer:
          'Coloque o favicon.ico e os ícones PNG dentro da pasta /public/ do seu projeto e cole as tags HTML <link> dentro do <head> do index.html.',
      },
      {
        question: 'O Gerador de Favicon é gratuito?',
        answer:
          'Sim, é totalmente gratuito, sem cadastro, e todos os ícones são gerados localmente no seu navegador.',
      },
      {
        question: 'Meus logotipos enviados vão para um servidor?',
        answer:
          'Não. Seu logotipo é processado inteiramente no seu navegador e nunca é enviado, então seus arquivos de marca ficam privados.',
      },
      {
        question: 'Qual é a diferença entre um favicon.ico e um favicon PNG?',
        answer:
          'Um favicon.ico é um contêiner com vários tamanhos de ícone em um único arquivo binário, que os navegadores aceitam há décadas. Um favicon PNG é uma imagem de tamanho único; navegadores modernos aceitam os dois, mas o .ico continua sendo o padrão mais seguro.',
      },
      {
        question: 'O que é um ícone Apple Touch?',
        answer:
          'É o ícone PNG 180×180 que o iOS usa quando alguém adiciona seu site à tela inicial. Sem ele, o iOS tira uma captura de tela da sua página, o que geralmente fica ruim.',
      },
      {
        question: 'Para que servem os ícones PWA 192×192 e 512×512?',
        answer:
          'São os ícones listados no manifesto do seu app web para Progressive Web Apps instaláveis. O Android e o Chrome os usam para o ícone da tela inicial, a tela de abertura e o lançador de apps.',
      },
      {
        question: 'Posso criar um favicon a partir de texto sem logotipo?',
        answer:
          'Sim. O modo Monograma transforma de 1 a 3 letras, como as iniciais da sua marca, em um selo limpo com sua escolha de cor de fundo, cor de texto e formato de cantos — sem software de design.',
      },
      {
        question: 'Qual arquivo de logotipo devo enviar para o melhor resultado?',
        answer:
          'Envie um PNG ou SVG quadrado com fundo transparente em 512×512 ou maior. Imagens de origem quadradas cortam de forma limpa; logotipos largos ou altos são cortados ao centro, o que pode cortar as bordas.',
      },
      {
        question: 'Por que meu favicon novo não aparece depois de publicar?',
        answer:
          'Os navegadores armazenam favicons em cache de forma muito agressiva. Atualize com força com Ctrl+Shift+R (ou Cmd+Shift+R no Mac), limpe o cache do site ou teste em uma janela privada para ver o ícone novo.',
      },
      {
        question: 'O favicon deve ser igual ao meu logotipo exatamente?',
        answer:
          'Em tamanhos grandes sim, mas em 16×16 os detalhes finos desaparecem. Simplifique o selo para os menores tamanhos — iniciais em negrito ou uma única forma em negrito ficam bem melhores que um logotipo detalhado.',
      },
      {
        question: 'Qual formato de cantos devo escolher?',
        answer:
          'O Quadrado Arredondado combina com o estilo de ícones de apps iOS e macOS, o Círculo serve para avatares e selos estilo social, e o Quadrado com cantos retos é melhor para selos de marca geométricos ou técnicos.',
      },
      {
        question: 'Preciso adicionar tags de link HTML para os ícones?',
        answer:
          'Sim, para resultados confiáveis. Os navegadores procuram /favicon.ico por padrão, mas os ícones Apple Touch e PWA só carregam quando você os declara com tags <link> no <head> da sua página, que esta ferramenta gera para você.',
      },
      {
        question: 'Posso usar os ícones gerados para um app de celular também?',
        answer:
          'Os PNGs 192×192 e 512×512 funcionam para instalações PWA, mas apps nativos de iOS e Android precisam de seus próprios conjuntos de ícones com tamanhos e formatos específicos, que esta ferramenta voltada para a web não gera.',
      },
      {
        question: 'O Gerador de Favicon funciona offline?',
        answer:
          'Sim. Depois que a página carrega, a geração de ícones acontece totalmente no seu navegador, sem requisições de rede.',
      },
      {
        question: 'Qual cor de fundo funciona melhor para um favicon de monograma?',
        answer:
          'Uma cor sólida de marca de alto contraste com letras brancas ou quase brancas funciona melhor, pois continua legível em 16×16. Evite texto claro sobre fundos claros e gradientes cheios.',
      },
      {
        question: 'Posso gerar os ícones novamente depois de mudar as cores da minha marca?',
        answer:
          'Sim. Basta atualizar as cores ou enviar o logotipo novo e baixar um conjunto novo — a ferramenta não guarda nada da sua sessão anterior, então cada execução começa do zero.',
      },
      {
        question: 'O favicon funciona em abas de navegador em modo escuro?',
        answer:
          'Um favicon com cor de fundo sólida aparece igual em abas claras e escuras. Se seu selo for escuro sobre transparente, adicione um fundo claro ou contorno para que ele continue visível no chrome escuro do navegador.',
      },
      {
        question: 'A ferramenta armazena meus logotipos ou ícones gerados?',
        answer:
          'Não. Tudo acontece localmente na aba do seu navegador, nada é enviado ou armazenado, e seus arquivos desaparecem quando você fecha ou atualiza a página.',
      },
    ],
  },
};
