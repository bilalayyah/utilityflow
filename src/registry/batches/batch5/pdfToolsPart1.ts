import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const PDF_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'merge-pdf',
    slug: 'merge-pdf',
    name: 'Merge PDF',
    shortDescription:
      'Combine multiple PDF documents in custom order inside your browser without uploading files to external servers.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'merge pdf',
      'combine pdf files',
      'join pdf online free',
      'client side pdf merger',
    ],
    seo: {
      title: 'Merge PDF – Combine PDF Documents Locally in Browser | UtilityFlow',
      description:
        'Combine multiple PDF files into one document in your chosen sequence locally in your browser using pdf-lib with zero server uploads or file size queues.',
      primaryKeyword: 'merge pdf',
      secondaryKeywords: [
        'combine pdf files online',
        'join pdf pages locally',
        'private pdf merger',
      ],
      longTailKeywords: [
        'merge confidential pdf contracts without uploading to server',
        'combine multiple pdfs and reorder sequence in browser',
        'free client side pdf document combiner',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combine two or more PDF files into a single clean document directly in browser memory. Inspect each file’s page count, reorder documents with up/down controls, choose an output filename, and download immediately.',
    instructions: [
      {
        title: 'Add multiple PDF files',
        description:
          'Select two or more unencrypted .pdf files from your device; each file is validated for a %PDF header before queueing.',
      },
      {
        title: 'Arrange merge order',
        description:
          'Use the up/down arrows to order chapters, appendices, or invoices before combining.',
      },
      {
        title: 'Merge & download',
        description:
          'Enter a custom filename if desired and click Merge PDFs & Download to export locally.',
      },
    ],
    examples: [
      {
        title: 'Combining an invoice cover sheet and receipt packet',
        input: 'cover-sheet.pdf (1 page) + receipts.pdf (4 pages)',
        output: 'merged-document.pdf (5 pages)',
        explanation: 'Copies all vector pages, fonts, and embedded images into a single PDF container.',
      },
    ],
    benefits: [
      'Zero file uploads keep contracts, tax returns, and NDAs strictly on your machine',
      'Shows exact page count and byte size per queued document',
      'Validates malformed or password-encrypted PDFs immediately on upload',
      'No watermarks, page caps, or daily rate limits',
    ],
    useCases: [
      'Bundling client proposals, signed forms, and pricing appendices',
      'Combining scanned multi-part tax documents before filing',
      'Merging lecture slides or study guides into one printable packet',
      'Assembling monthly expense invoices into a single accounting PDF',
    ],
    faqs: [
      {
        question: 'Can this tool merge password-protected PDF files?',
        answer:
          'Browser-side pdf-lib requires unencrypted PDFs unless unlocked first. If an encrypted file is uploaded, the validator alerts you clearly instead of failing silently.',
      },
      {
        question: 'Are vector fonts and clickable hyperlinks preserved?',
        answer:
          'Yes. Standard PDF page streams, embedded fonts, and vector paths are copied directly via PDFDocument.copyPages() without rasterizing pages into blurry images.',
      },
      {
        question: 'Is there a server upload limit?',
        answer:
          'No files are ever uploaded—processing runs purely inside your browser tab memory.',
      },
    ],
    relatedToolSlugs: [
      'split-pdf',
      'reorder-delete-pdf-pages',
      'images-to-pdf',
      'add-pdf-page-numbers',
    ],
    component: lazy(() => import('../../../tools/pdf/MergePdfTool')),
  },
  {
    id: 'split-pdf',
    slug: 'split-pdf',
    name: 'Split & Extract PDF Pages',
    shortDescription:
      'Extract custom page ranges, odd/even pages, or burst individual single-page PDFs locally via pdf-lib.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'split pdf',
      'extract pdf pages',
      'separate pdf pages',
      'pdf page extractor',
    ],
    seo: {
      title: 'Split PDF – Extract Page Ranges & Individual Pages | UtilityFlow',
      description:
        'Extract specific PDF page ranges (like 1-3, 5), separate odd or even pages, or burst individual PDF pages directly in your browser without uploading files.',
      primaryKeyword: 'split pdf',
      secondaryKeywords: [
        'extract pages from pdf',
        'pdf page range extractor',
        'separate pdf into single pages',
      ],
      longTailKeywords: [
        'extract pages 1-3 and 5 from pdf without server upload',
        'split odd and even pdf pages in browser',
        'separate multi page pdf locally free',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Pull out exact page ranges (`1-3, 5, 8-10`), isolate odd or even pages for double-sided reassembly, or burst shorter PDFs into individual single-page files entirely inside client memory.',
    instructions: [
      {
        title: 'Load your PDF document',
        description:
          'Choose any unencrypted PDF file; the tool validates the header and displays total page count.',
      },
      {
        title: 'Pick split mode',
        description:
          'Select Extract Page Ranges, Odd Pages Only, Even Pages Only, or Burst All Individual Pages.',
      },
      {
        title: 'Download extracted PDF(s)',
        description:
          'Click Split & Download PDF to save your trimmed document immediately.',
      },
    ],
    examples: [
      {
        title: 'Extracting signature pages from a 12-page agreement',
        input: 'Pages to Extract: 1, 10-12',
        output: 'contract-extracted.pdf (4 pages)',
        explanation: 'Exports pages 1, 10, 11, and 12 in ascending sequence while leaving your original file untouched.',
      },
    ],
    benefits: [
      'Flexible range parser catches out-of-bounds or reversed ranges before saving',
      'Preserves original vector sharpness and text selectability',
      'Supports Odd/Even extraction for duplex scanner workflows',
      'Protects private financial and legal documents from third-party upload servers',
    ],
    useCases: [
      'Pulling only the relevant chapters from a large report before sharing',
      'Separating individual invoices bundled inside a master billing PDF',
      'Extracting signature or appendix pages from multi-page contracts',
      'Recovering odd/even batch scans from single-sided document feeders',
    ],
    faqs: [
      {
        question: 'Why is Burst All Individual Pages capped at 25 pages?',
        answer:
          'Browsers often block or prompt when a site triggers more than ~25 rapid simultaneous file downloads. Use Extract Page Ranges for larger multi-part extractions.',
      },
      {
        question: 'Does splitting alter my original PDF file?',
        answer:
          'No. The browser reads a local copy in memory and generates a new downloaded PDF.',
      },
      {
        question: 'What syntax can I type into Pages to Extract?',
        answer:
          'Combine single numbers and hyphenated ranges separated by commas, such as "1-3, 5, 9-12".',
      },
    ],
    relatedToolSlugs: [
      'merge-pdf',
      'reorder-delete-pdf-pages',
      'pdf-page-rotator',
      'pdf-to-images',
    ],
    component: lazy(() => import('../../../tools/pdf/SplitPdfTool')),
  },
  {
    id: 'images-to-pdf',
    slug: 'images-to-pdf',
    name: 'Images to PDF Converter',
    shortDescription:
      'Convert PNG, JPG, and WebP images into a single A4, US Letter, or fit-to-image PDF locally in your browser.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'images to pdf',
      'jpg to pdf',
      'png to pdf converter',
      'webp to pdf',
    ],
    seo: {
      title: 'Images to PDF Converter – JPG, PNG & WebP to PDF | UtilityFlow',
      description:
        'Convert and combine JPG, PNG, and WebP photos or screenshots into a single A4, US Letter, or exact-fit PDF document locally in your browser.',
      primaryKeyword: 'images to pdf',
      secondaryKeywords: [
        'jpg to pdf browser converter',
        'png to pdf online free',
        'combine photos into pdf',
      ],
      longTailKeywords: [
        'convert jpg png webp images to a4 pdf without upload',
        'bundle screenshots into multi page pdf locally',
        'fit image dimensions to pdf page without cropping',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Combine JPG, PNG, and WebP scans, receipts, or screenshots into a clean multi-page PDF. Order images visually, pick A4 Portrait, US Letter, or Exact Image Dimensions, set margins, and generate locally via `pdf-lib`.',
    instructions: [
      {
        title: 'Select one or more images',
        description:
          'Choose JPG, PNG, or WebP images; thumbnails and pixel dimensions appear immediately.',
      },
      {
        title: 'Configure page size and order',
        description:
          'Arrange image sequence with up/down arrows and pick A4, US Letter, or Exact Image Dimensions.',
      },
      {
        title: 'Generate PDF',
        description:
          'Set your output filename and click Convert Images to PDF to download instantly.',
      },
    ],
    examples: [
      {
        title: 'Compiling expense receipts onto standard A4 pages',
        input: '3 receipt JPGs · A4 Portrait · 24 pt Margin',
        output: 'images-bundle.pdf (3 centered, aspect-preserved A4 pages)',
        explanation: 'Scales each image proportionally to fit inside printable A4 margins without distortion.',
      },
    ],
    benefits: [
      'Embeds native JPG and PNG streams directly and converts WebP cleanly via Canvas',
      'Preserves full image aspect ratio without stretching or cropping',
      'Supports printable A4 / US Letter sheets as well as exact zero-margin image pages',
      'Keeps ID photos, receipts, and private documents strictly offline in browser RAM',
    ],
    useCases: [
      'Turning phone receipt photos into a clean monthly expense PDF',
      'Compiling design mockups or UI screenshots into an A4 review deck',
      'Converting scanned document pages into a single uploadable PDF',
      'Packaging portfolio artwork plates without cloud compression',
    ],
    faqs: [
      {
        question: 'How does the tool handle WebP images?',
        answer:
          'Because the PDF specification natively embeds JPEG and PNG rather than WebP, the tool decodes WebP images smoothly via HTML5 Canvas into lossless PNG frames before embedding.',
      },
      {
        question: 'Will portrait and landscape photos be stretched to fit A4?',
        answer:
          'No. Images are proportionally scaled using Math.min(maxWidth/imgWidth, maxHeight/imgHeight) and centered on the page.',
      },
      {
        question: 'Are image thumbnails uploaded anywhere?',
        answer:
          'No. Previews use temporary local Object URLs inside your browser tab.',
      },
    ],
    relatedToolSlugs: [
      'pdf-to-images',
      'merge-pdf',
      'add-pdf-page-numbers',
      'social-thumbnail-previewer',
    ],
    component: lazy(() => import('../../../tools/pdf/ImagesToPdfTool')),
  },
  {
    id: 'pdf-to-images',
    slug: 'pdf-to-images',
    name: 'PDF to Images (PNG / JPG)',
    shortDescription:
      'Render PDF pages into downloadable PNG or JPG images at 1.0× to 2.0× resolution locally via PDF.js.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'pdf to images',
      'pdf to png',
      'pdf to jpg converter',
      'render pdf pages as images',
    ],
    seo: {
      title: 'PDF to Images – Export PDF Pages to PNG & JPG | UtilityFlow',
      description:
        'Convert PDF document pages into sharp PNG or JPG images at selectable render resolution directly inside your browser using PDF.js with zero uploads.',
      primaryKeyword: 'pdf to images',
      secondaryKeywords: [
        'pdf to png converter',
        'pdf to jpg online free',
        'extract pdf page as image',
      ],
      longTailKeywords: [
        'convert pdf pages to high resolution png in browser',
        'save single pdf page as jpg without uploading document',
        'client side pdfjs page renderer to png',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Rasterize PDF pages into crisp lossless PNG or compact JPG images right inside your browser using Mozilla’s PDF.js rendering engine—complete with page range filtering, scale selection (`1.0×`–`2.0×`), and visual previews.',
    instructions: [
      {
        title: 'Choose a PDF file',
        description:
          'Select any unencrypted PDF document; PDF.js reads total page count immediately.',
      },
      {
        title: 'Pick pages, format, and scale',
        description:
          'Enter "all" or a page range (up to 20 pages per batch), choose PNG or JPG, and pick 1.0×, 1.5×, or 2.0× resolution.',
      },
      {
        title: 'Render and download pages',
        description:
          'Inspect rendered thumbnails and click .PNG or .JPG on any page card to save.',
      },
    ],
    examples: [
      {
        title: 'Exporting presentation slides for social sharing',
        input: 'Pages: 1-3 · Format: PNG · Scale: 2.0× (144 DPI)',
        output: '3 crisp 2× PNG slide images ready for LinkedIn or blog embeds',
        explanation: 'High-scale canvas rendering keeps diagrams and typography sharp.',
      },
    ],
    benefits: [
      'Uses Vite-bundled PDF.js Web Worker—zero external CDN script requests',
      'Automatically fills white canvas background when exporting transparent PDFs to JPG',
      'Lets you target exact page ranges instead of rendering an entire 100-page file',
      'Private browser-side canvas rendering protects sensitive documents',
    ],
    useCases: [
      'Turning PDF pitch-deck slides into blog post or social graphics',
      'Saving a single signed certificate or ticket page as a mobile photo',
      'Generating crisp UI previews of printable PDF handouts',
      'Inspecting font/layout rendering visually outside dedicated PDF apps',
    ],
    faqs: [
      {
        question: 'Should I pick PNG or JPG for PDF pages?',
        answer:
          'Choose PNG for slides, text documents, receipts, and charts where sharp edges matter. Choose JPG when exporting photo-heavy brochures for smaller file sizes.',
      },
      {
        question: 'Why does PDF to Images render up to 20 pages per batch?',
        answer:
          'High-resolution 2× canvases consume significant GPU/RAM per page; batching up to 20 pages keeps browser tabs responsive on phones and laptops.',
      },
      {
        question: 'Does it work on password-protected PDFs?',
        answer:
          'Encrypted PDFs must be unlocked before rendering locally.',
      },
    ],
    relatedToolSlugs: [
      'images-to-pdf',
      'split-pdf',
      'pdf-text-extractor',
      'social-thumbnail-previewer',
    ],
    component: lazy(() => import('../../../tools/pdf/PdfToImagesTool')),
  },
  {
    id: 'pdf-page-rotator',
    slug: 'pdf-page-rotator',
    name: 'PDF Page Rotator',
    shortDescription:
      'Rotate all pages, odd/even pages, or specific page ranges by 90°, 180°, or 270° permanently without quality loss.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'rotate pdf',
      'pdf page rotator',
      'fix sideways pdf pages',
      'save rotated pdf',
    ],
    seo: {
      title: 'PDF Page Rotator – Permanently Rotate PDF Pages | UtilityFlow',
      description:
        'Permanently rotate sideways or upside-down PDF pages by 90°, 180°, or 270° across all pages, odd/even pages, or custom page ranges inside your browser.',
      primaryKeyword: 'pdf page rotator',
      secondaryKeywords: [
        'rotate pdf permanently',
        'fix upside down pdf scan',
        'rotate specific pdf pages',
      ],
      longTailKeywords: [
        'rotate only page 2 and 4 of a pdf document online',
        'permanently rotate scanned pdf 90 degrees without re-encoding',
        'client side pdf page orientation tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Fix sideways landscape tables or upside-down document scans permanently in the PDF page dictionary. Apply `90°` clockwise, `90°` counter-clockwise, or `180°` rotations to every page, odd/even sheets, or exact page ranges.',
    instructions: [
      {
        title: 'Load your PDF',
        description:
          'Select the PDF file containing sideways or inverted pages.',
      },
      {
        title: 'Choose angle and page scope',
        description:
          'Pick 90° Clockwise, 90° Counter-Clockwise, or 180°, then choose All Pages, Specific Ranges, Odd, or Even.',
      },
      {
        title: 'Apply and download',
        description:
          'Click Apply Rotation & Download PDF to save the corrected file permanently.',
      },
    ],
    examples: [
      {
        title: 'Fixing a single rotated financial chart on page 3',
        input: 'Rotation: 90° Clockwise · Scope: Specific Page Ranges (3)',
        output: 'Only page 3 rotates clockwise; all other pages preserve existing orientation.',
        explanation: 'Adds 90° modulo 360 to the existing page rotation metadata without rasterizing text.',
      },
    ],
    benefits: [
      'Lossless rotation—updates PDF page orientation flags without recompressing text or images',
      'Preserves existing page angles cleanly (computes relative rotation mod 360°)',
      'Targets selective ranges such as "2, 5-7" without rotating upright pages',
      'Instant browser download with zero server upload',
    ],
    useCases: [
      'Fixing upside-down scanner batches on mobile or office copiers',
      'Rotating wide landscape spreadsheets inside mostly portrait reports',
      'Correcting mixed-orientation attachments after merging documents',
      'Preparing cleanly oriented compliance filings for portals',
    ],
    faqs: [
      {
        question: 'Does rotating pages reduce text or image sharpness?',
        answer:
          'No. Setting the PDF page rotation property is completely lossless and does not re-encode fonts or embedded images.',
      },
      {
        question: 'What if a page in my PDF was already rotated 90°?',
        answer:
          'The rotator reads each page’s current rotation angle and adds your chosen delta modulo 360°, so orientation changes predictably relative to how the page currently looks.',
      },
      {
        question: 'Can I rotate only a single page in a 20-page PDF?',
        answer:
          'Yes. Choose "Specific Page Ranges" and type that exact page number (for example "7").',
      },
    ],
    relatedToolSlugs: [
      'reorder-delete-pdf-pages',
      'split-pdf',
      'merge-pdf',
      'add-pdf-page-numbers',
    ],
    component: lazy(() => import('../../../tools/pdf/PdfPageRotatorTool')),
  },
];
