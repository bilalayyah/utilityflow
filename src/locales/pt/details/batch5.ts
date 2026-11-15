// Detail content for PT tools — split out of
// src/locales/pt/tools by scripts/h3-split-details.mjs (H-3 page
// weight). Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts). Do NOT edit by hand.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
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
