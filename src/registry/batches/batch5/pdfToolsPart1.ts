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
      'merge pdf files free',
      'combine multiple pdfs into one',
      'pdf merger no upload',
      'join pdf documents online',
      'merge pdf pages in order',
      'free pdf combiner',
    ],
    seo: {
      title: 'Merge PDF Free – Combine PDFs in Your Browser | UtilityFlow',
      description:
        'Combine multiple PDF files into one document in your chosen sequence locally in your browser using pdf-lib with zero server uploads or file size queues.',
      primaryKeyword: 'merge pdf',
      secondaryKeywords: [
        'combine pdf files online',
        'join pdf pages locally',
        'private pdf merger',
        'merge pdf files free',
        'join pdf documents online',
        'pdf combiner no watermark',
      ],
      longTailKeywords: [
        'merge confidential pdf contracts without uploading to server',
        'combine multiple pdfs and reorder sequence in browser',
        'free client side pdf document combiner',
        'merge pdf files in order without uploading',
        'combine scanned pdf documents into one file',
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
        title: 'Check page counts and sizes',
        description:
          'Review the page count and byte size shown for each queued document to confirm you added the right files.',
      },
      {
        title: 'Arrange merge order',
        description:
          'Use the up/down arrows to order chapters, appendices, or invoices before combining.',
      },
      {
        title: 'Name your output file',
        description:
          'Enter a custom filename if desired so the merged document is easy to find later.',
      },
      {
        title: 'Merge & download',
        description:
          'Click Merge PDFs & Download to combine the files locally and save the result.',
      },
      {
        title: 'Verify the merged document',
        description:
          'Open the downloaded PDF and check the page order and total page count; re-run with a corrected order if anything is out of place.',
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
      {
        question: 'Is the Merge PDF tool free to use?',
        answer:
          'Yes, it is completely free with no watermarks, page caps, or daily limits, and it runs entirely in your browser.',
      },
      {
        question: 'How many PDF files can I merge at once?',
        answer:
          'You can queue as many as your browser memory comfortably handles. The page count and size of each file are shown so you can judge before merging.',
      },
      {
        question: 'Can I reorder the PDFs after adding them?',
        answer:
          'Yes, use the up and down arrows next to each file to set the exact merge order before combining.',
      },
      {
        question: 'Will merging change the quality of my PDFs?',
        answer:
          'No, pages are copied as vector data, so text, fonts, and images keep their original quality.',
      },
      {
        question: 'Does the merged PDF keep bookmarks or outlines?',
        answer:
          'Page content is fully preserved, but document outlines and bookmarks may not carry over into the merged file.',
      },
      {
        question: 'Can I merge scanned PDFs?',
        answer:
          'Yes, scanned pages are copied as images into the merged file just like any other page.',
      },
      {
        question: 'What file types can I merge with this tool?',
        answer:
          'Only PDF files (.pdf). Images must first be converted with the Images to PDF tool before they can be merged.',
      },
      {
        question: 'Can I choose the output filename for the merged PDF?',
        answer:
          'Yes, enter a custom filename before clicking Merge; otherwise a default name is used.',
      },
      {
        question: 'Does the Merge PDF tool work on mobile?',
        answer:
          'Yes, it works in modern mobile browsers, though very large files merge faster on a desktop.',
      },
      {
        question: 'Are my files private when I merge PDFs here?',
        answer:
          'Yes, everything happens locally in your browser tab and no file is uploaded to any server.',
      },
      {
        question: 'What happens if one of my PDFs is corrupted?',
        answer:
          'The validator checks the %PDF header of each file and alerts you about malformed or encrypted files before merging starts.',
      },
      {
        question: 'Can I merge PDFs of different page sizes?',
        answer:
          'Yes, each page keeps its original size and orientation in the merged document.',
      },
      {
        question: 'Will the merged PDF stay searchable?',
        answer:
          'Yes, text-based PDFs keep selectable, searchable text because pages are copied, not rasterized into images.',
      },
      {
        question: 'Can I merge a PDF with itself?',
        answer:
          'Yes, you can add the same file more than once if you need a page or document repeated in the result.',
      },
      {
        question: 'Is there a maximum file size for merging PDFs?',
        answer:
          'There is no set limit; the practical limit is the browser memory available on your device.',
      },
      {
        question: 'What should I do if the merged download does not start?',
        answer:
          'Check your browser download settings and pop-up blocker, then click Merge again; the file is generated locally each time.',
      },
      {
        question: 'Can I merge PDFs and then split the result?',
        answer:
          'Yes, download the merged PDF and open it in the Split PDF tool to extract any pages you need.',
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
      'split pdf pages free',
      'pdf splitter online',
      'extract pages from pdf free',
      'burst pdf into single pages',
      'split pdf by page range',
      'separate pdf pages online',
    ],
    seo: {
      title: 'Split PDF Free – Extract Pages & Ranges Online | UtilityFlow',
      description:
        'Extract specific PDF page ranges (like 1-3, 5), separate odd or even pages, or burst individual PDF pages directly in your browser without uploading files.',
      primaryKeyword: 'split pdf',
      secondaryKeywords: [
        'extract pages from pdf',
        'pdf page range extractor',
        'separate pdf into single pages',
        'split pdf by page range',
        'burst pdf pages online free',
      ],
      longTailKeywords: [
        'extract pages 1-3 and 5 from pdf without server upload',
        'split odd and even pdf pages in browser',
        'separate multi page pdf locally free',
        'split pdf and download only selected pages',
        'extract signature pages from pdf contract',
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
        title: 'Enter pages or ranges',
        description:
          'For range mode, type pages like "1-3, 5, 9-12"; the parser flags out-of-bounds or reversed ranges before saving.',
      },
      {
        title: 'Review your selection',
        description:
          'Confirm the mode and page list match what you need, especially for odd/even and burst extractions.',
      },
      {
        title: 'Split & download',
        description:
          'Click Split & Download PDF to generate your trimmed document locally.',
      },
      {
        title: 'Check the result and repeat if needed',
        description:
          'Open the downloaded file to confirm the right pages were extracted; for burst mode, allow multiple downloads in your browser if prompted.',
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
      {
        question: 'Is the Split PDF tool free to use?',
        answer:
          'Yes, it is free with no watermarks or page limits beyond the 25-page burst cap.',
      },
      {
        question: 'Can I extract only odd pages from a PDF?',
        answer:
          'Yes, choose Odd Pages Only; this is useful for duplex scanning workflows.',
      },
      {
        question: 'Can I extract only even pages from a PDF?',
        answer:
          'Yes, choose Even Pages Only to pull out just the even-numbered pages.',
      },
      {
        question: 'What happens if I type a page number that does not exist?',
        answer:
          'The range parser validates your input and warns you about out-of-bounds or reversed ranges before saving anything.',
      },
      {
        question: 'Can I extract PDF pages in a custom order, like 10-12 then 1?',
        answer:
          'Extracted pages are saved in ascending order. To reorder them afterward, use the Reorder PDF Pages tool.',
      },
      {
        question: 'Does splitting a PDF keep the text searchable?',
        answer:
          'Yes, pages are copied as vector data, so text stays selectable and searchable in the extracted file.',
      },
      {
        question: 'Can I split a password-protected PDF?',
        answer:
          'No, encrypted PDFs must be unlocked first; the tool only accepts unencrypted files.',
      },
      {
        question: 'Can I split a scanned PDF?',
        answer:
          'Yes, scanned pages extract exactly like text pages, because splitting copies whole pages without reading or changing their content.',
      },
      {
        question: 'Will the extracted PDF keep its original quality?',
        answer:
          'Yes, no re-compression or rasterizing happens during extraction, so each extracted page keeps the exact quality of the original PDF.',
      },
      {
        question: 'How do I burst a PDF into single-page files?',
        answer:
          'Choose Burst All Individual Pages; each page downloads as its own PDF, up to 25 pages per run.',
      },
      {
        question: 'Can I download only the first page of a PDF?',
        answer:
          'Yes, choose Extract Page Ranges and type "1" in the Pages to Extract field.',
      },
      {
        question: 'Does the Split PDF tool upload my file anywhere?',
        answer:
          'No, splitting runs entirely in your browser; your file never leaves your device.',
      },
      {
        question: 'Can I use the Split PDF tool on my phone?',
        answer:
          'Yes, it works in modern mobile browsers, though very large files split more comfortably on a desktop.',
      },
      {
        question: 'What is the difference between Extract Page Ranges and Burst?',
        answer:
          'Ranges combine selected pages into one new PDF, while Burst creates one separate PDF per page.',
      },
      {
        question: 'Can I extract pages 1-3 and page 5 in one go?',
        answer:
          'Yes, type "1-3, 5" — single numbers and hyphenated ranges can be combined with commas.',
      },
      {
        question: 'Will bookmarks survive when I split a PDF?',
        answer:
          'Page content is preserved, but document outlines and bookmarks are generally not carried into extracted files.',
      },
      {
        question: 'My download did not start after splitting — what should I do?',
        answer:
          'Allow multiple downloads for this site in your browser, then click Split again; the file is generated locally each time.',
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
      'convert images to pdf free',
      'jpg png to pdf',
      'photo to pdf converter',
      'combine images into one pdf',
      'screenshot to pdf',
      'make pdf from pictures',
    ],
    seo: {
      title: 'Images to PDF – Convert JPG, PNG & WebP Free | UtilityFlow',
      description:
        'Turn JPG, PNG, and WebP photos or screenshots into one clean multi-page PDF with A4, US Letter, or exact-fit pages, entirely in your browser. No uploads needed.',
      primaryKeyword: 'images to pdf',
      secondaryKeywords: [
        'jpg to pdf browser converter',
        'png to pdf online free',
        'combine photos into pdf',
        'convert images to pdf free',
        'photo to pdf converter online',
      ],
      longTailKeywords: [
        'convert jpg png webp images to a4 pdf without upload',
        'bundle screenshots into multi page pdf locally',
        'fit image dimensions to pdf page without cropping',
        'turn phone photos into pdf document free',
        'convert screenshots to a4 pdf in browser',
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
        title: 'Arrange image order',
        description:
          'Use the up/down arrows to set the page sequence for your PDF.',
      },
      {
        title: 'Configure page size and margins',
        description:
          'Pick A4 Portrait, US Letter, or Exact Image Dimensions, and set a margin for standard page sizes.',
      },
      {
        title: 'Name your output file',
        description:
          'Enter a custom filename so the finished PDF is easy to identify.',
      },
      {
        title: 'Generate PDF',
        description:
          'Click Convert Images to PDF to build the document locally and download it instantly.',
      },
      {
        title: 'Review and adjust',
        description:
          'Open the PDF to check layout and margins; reorder images or change the page setting and re-convert if a page looks off.',
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
          'No. Previews use temporary local Object URLs inside your browser tab, and those preview links disappear when you close the tab.',
      },
      {
        question: 'Is the Images to PDF tool free to use?',
        answer:
          'Yes, it is free with no watermarks and no limit on the number of images you convert.',
      },
      {
        question: 'Which image formats can I convert to PDF?',
        answer:
          'JPG, PNG, and WebP are supported, so you can convert photos, screenshots, and web images into a single PDF.',
      },
      {
        question: 'Can I convert a single image to PDF?',
        answer:
          'Yes, one image produces a one-page PDF, which works well for sharing a single photo or scanned document as a file.',
      },
      {
        question: 'Can I reorder images before converting them to PDF?',
        answer:
          'Yes, use the up and down arrows to arrange the page order before generating the PDF.',
      },
      {
        question: 'What page sizes are available when converting images to PDF?',
        answer:
          'A4 Portrait, US Letter, and Exact Image Dimensions, which creates one page per image at its native size.',
      },
      {
        question: 'Will my images be cropped when converted to PDF?',
        answer:
          'No, images are scaled proportionally and centered; nothing is cropped or stretched.',
      },
      {
        question: 'Can I add margins around my images in the PDF?',
        answer:
          'Yes, set a margin (for example 24 pt) when using A4 or US Letter page sizes.',
      },
      {
        question: 'Does converting images to PDF reduce their quality?',
        answer:
          'JPG and PNG streams are embedded natively, and WebP is converted via Canvas to lossless PNG, so quality is preserved.',
      },
      {
        question: 'Can I convert HEIC photos from my iPhone to PDF?',
        answer:
          'Not directly; convert HEIC to JPG or PNG first, then use this tool.',
      },
      {
        question: 'Are my photos uploaded to a server when converting to PDF?',
        answer:
          'No, conversion runs locally in your browser and previews use temporary local Object URLs.',
      },
      {
        question: 'Can I use the Images to PDF tool on mobile?',
        answer:
          'Yes, it works in mobile browsers; pick images straight from your photo library.',
      },
      {
        question: 'What happens with very large images?',
        answer:
          'Large images are embedded at full resolution, so the resulting PDF may be large; compress them first if file size matters.',
      },
      {
        question: 'Can I mix JPG, PNG, and WebP in one PDF?',
        answer:
          'Yes, you can combine all three formats in a single document, and the pages stay in the order you arranged them.',
      },
      {
        question: 'Will the PDF pages be in the same order as my images?',
        answer:
          'Yes, pages follow the order shown in the image list, so rearrange your images first if you want a different page sequence.',
      },
      {
        question: 'Can I set a custom filename for the PDF?',
        answer:
          'Yes, enter your preferred filename before converting, and the downloaded PDF will use that name instead of the default one.',
      },
      {
        question: 'Does the tool keep image transparency?',
        answer:
          'PNG transparency is preserved on Exact Image Dimensions pages; on A4 or Letter pages the image sits on a white page background.',
      },
      {
        question: 'My PDF did not download — what should I do?',
        answer:
          'Check your browser download permissions and try again; the file is generated locally in your tab.',
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
      'convert pdf to png free',
      'convert pdf to jpg',
      'pdf page to image',
      'export pdf pages as png',
      'save pdf as image online',
      'pdf to picture converter',
    ],
    seo: {
      title: 'PDF to Images – Export PDF Pages to PNG & JPG | UtilityFlow',
      description:
        'Render any PDF page into a PNG or compact JPG at up to 2× resolution in your browser. Pick exact pages, preview each render, and download only what you need.',
      primaryKeyword: 'pdf to images',
      secondaryKeywords: [
        'pdf to png converter',
        'pdf to jpg online free',
        'extract pdf page as image',
        'convert pdf to png free',
        'export pdf pages as jpg',
      ],
      longTailKeywords: [
        'convert pdf pages to high resolution png in browser',
        'save single pdf page as jpg without uploading document',
        'client side pdfjs page renderer to png',
        'render pdf slides to png images for sharing',
        'download pdf page as high resolution image',
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
        title: 'Pick pages to render',
        description:
          'Enter "all" or a page range (up to 20 pages per batch), such as "1-3, 5".',
      },
      {
        title: 'Choose format and scale',
        description:
          'Pick PNG for sharp text or JPG for smaller photo-heavy files, and select 1.0×, 1.5×, or 2.0× resolution.',
      },
      {
        title: 'Render the pages',
        description:
          'Start rendering and wait for the page previews to appear; larger batches take a little longer.',
      },
      {
        title: 'Review the previews',
        description:
          'Inspect each rendered thumbnail for sharpness and correct content before downloading.',
      },
      {
        title: 'Download your images',
        description:
          'Click .PNG or .JPG on any page card to save that image; repeat the batch for remaining pages if needed.',
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
          'Encrypted PDFs must be unlocked before rendering locally, because the tool cannot read pages from a file that is still locked.',
      },
      {
        question: 'Is the PDF to Images tool free to use?',
        answer:
          'Yes, it is free with no watermarks; rendering happens locally in your browser.',
      },
      {
        question: 'What resolution should I choose for social media?',
        answer:
          '2.0× gives the sharpest results for posts and blog embeds, while 1.0× is fine for quick previews.',
      },
      {
        question: 'Can I export only one page as an image?',
        answer:
          'Yes, enter that page number in the page range field, and only that page will be rendered and downloaded as an image.',
      },
      {
        question: 'Can I export all pages of a PDF at once?',
        answer:
          'You can render up to 20 pages per batch; repeat the process for longer documents.',
      },
      {
        question: 'Why is my JPG export showing a white background?',
        answer:
          'JPG has no transparency, so transparent PDF areas are automatically filled white.',
      },
      {
        question: 'Does PDF to Images keep text sharp?',
        answer:
          'Yes, pages are rendered at up to 2× scale with PDF.js, keeping text and diagrams crisp.',
      },
      {
        question: 'Can I choose which pages to render as images?',
        answer:
          'Yes, type "all" or a range like "1-3, 5" in the page field.',
      },
      {
        question: 'Are my PDF files uploaded anywhere?',
        answer:
          'No, rendering happens in your browser via a local PDF.js worker; nothing leaves your device.',
      },
      {
        question: 'Can I use PDF to Images on my phone?',
        answer:
          'Yes, though high-resolution renders use more memory, so smaller batches work best on phones.',
      },
      {
        question: 'What is the difference between 1.0×, 1.5×, and 2.0× scale?',
        answer:
          'Higher scales render more pixels per page, producing larger, sharper images; 2.0× is roughly 144 DPI.',
      },
      {
        question: 'Can I download all rendered pages in one click?',
        answer:
          'Each page card has its own .PNG or .JPG download button; download the pages you need individually.',
      },
      {
        question: 'Will vector graphics and charts stay sharp?',
        answer:
          'Yes, PDF.js rasterizes vector content at your chosen scale, so charts and diagrams stay crisp.',
      },
      {
        question: 'Why does rendering take a while on large PDFs?',
        answer:
          'Each page is drawn on a canvas at high resolution; rendering a few pages at a time keeps the tab responsive.',
      },
      {
        question: 'Can I convert a scanned PDF to images?',
        answer:
          'Yes, scanned pages render as images exactly as they appear in the PDF.',
      },
      {
        question: 'Does the PDF to Images tool work offline?',
        answer:
          'Once the page has loaded, rendering runs locally in your browser without further network requests.',
      },
      {
        question: 'My rendered image looks blurry — what should I do?',
        answer:
          'Re-render at 2.0× scale and choose PNG for text-heavy pages, since higher resolution keeps small text sharp instead of blurry.',
      },
      {
        question: 'Can I use the exported images commercially?',
        answer:
          'The images are yours to use as you would the original PDF; respect the copyright of the source document.',
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
      'rotate pdf pages online free',
      'rotate pdf 90 degrees',
      'fix rotated pdf',
      'rotate pdf pages permanently',
      'pdf orientation fixer',
      'rotate scanned pdf pages',
    ],
    seo: {
      title: 'PDF Page Rotator – Fix Sideways PDF Pages Free | UtilityFlow',
      description:
        'Permanently rotate sideways or upside-down PDF pages by 90°, 180°, or 270° across all pages, odd/even pages, or custom page ranges inside your browser.',
      primaryKeyword: 'pdf page rotator',
      secondaryKeywords: [
        'rotate pdf permanently',
        'fix upside down pdf scan',
        'rotate specific pdf pages',
        'rotate pdf 90 degrees online',
        'fix sideways scanned pdf',
      ],
      longTailKeywords: [
        'rotate only page 2 and 4 of a pdf document online',
        'permanently rotate scanned pdf 90 degrees without re-encoding',
        'client side pdf page orientation tool',
        'rotate upside down pdf pages permanently free',
        'fix mixed orientation pdf pages in browser',
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
        title: 'Choose rotation angle',
        description:
          'Pick 90° Clockwise, 90° Counter-Clockwise, or 180° depending on how the pages are misaligned.',
      },
      {
        title: 'Choose page scope',
        description:
          'Select All Pages, Specific Ranges, Odd, or Even; for ranges type pages like "2, 5-7".',
      },
      {
        title: 'Preview the current orientation',
        description:
          'Check which pages are actually sideways so you rotate only the ones that need it.',
      },
      {
        title: 'Apply and download',
        description:
          'Click Apply Rotation & Download PDF to save the corrected file permanently.',
      },
      {
        title: 'Verify and fix leftovers',
        description:
          'Open the downloaded PDF; if a page is still sideways, run it again with another 90° in the same direction.',
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
      {
        question: 'Is the PDF Page Rotator free to use?',
        answer:
          'Yes, it is free with no watermarks or limits, and you can rotate as many PDFs as you need without creating an account.',
      },
      {
        question: 'Can I rotate all pages of a PDF at once?',
        answer:
          'Yes, choose All Pages and pick 90° clockwise, 90° counter-clockwise, or 180°.',
      },
      {
        question: 'Can I rotate only odd or even pages?',
        answer:
          'Yes, choose Odd or Even scope; this is useful for fixing duplex scan batches.',
      },
      {
        question: 'What angles can I rotate PDF pages by?',
        answer:
          'You can rotate 90° clockwise, 90° counter-clockwise, and 180°, so any sideways or upside-down page can be fixed in one click.',
      },
      {
        question: 'Can I rotate a PDF page by a custom angle like 45°?',
        answer:
          'No, only 90°, 180°, and 270° (via repeated 90° rotations) are supported, since PDF rotation is defined in quarter turns.',
      },
      {
        question: 'Is the rotation permanent?',
        answer:
          'Yes, the rotation is written into the PDF page dictionary and saved in the downloaded file.',
      },
      {
        question: 'Does rotation change the PDF file size?',
        answer:
          'Barely; only orientation metadata changes, so the file stays nearly the same size.',
      },
      {
        question: 'Can I rotate a password-protected PDF?',
        answer:
          'No, encrypted PDFs must be unlocked first, because the tool cannot change pages in a file that is still locked.',
      },
      {
        question: 'Does the PDF Page Rotator upload my file?',
        answer:
          'No, rotation runs entirely in your browser; your file never leaves your device.',
      },
      {
        question: 'Can I rotate pages in a scanned PDF?',
        answer:
          'Yes, scanned pages rotate just like text pages, because rotation turns the whole page image without reading its content.',
      },
      {
        question: 'Will rotating fix a PDF that opens sideways in every viewer?',
        answer:
          'Yes, the saved file opens in the corrected orientation in any PDF viewer.',
      },
      {
        question: 'Can I rotate different pages by different amounts?',
        answer:
          'Run the tool once per angle: rotate one range, download, then rotate another range in the result.',
      },
      {
        question: 'What should I do if a page is still sideways after rotating?',
        answer:
          'Check how the page currently looks first, then add another 90° in the same direction, since rotation is relative to the current angle.',
      },
      {
        question: 'Does rotating affect clickable links or form fields?',
        answer:
          'Links and annotations rotate with the page, so they stay aligned with the content.',
      },
      {
        question: 'Can I use the PDF Page Rotator on my phone?',
        answer:
          'Yes, it works in modern mobile browsers, so you can open a PDF on your phone and rotate its pages there.',
      },
      {
        question: 'Will the rotated PDF print correctly?',
        answer:
          'Yes, printers follow the saved page orientation, so rotated pages print the right way up.',
      },
      {
        question: 'My download did not start — what should I do?',
        answer:
          'Allow downloads for this site in your browser settings and click Apply Rotation again; the file is generated locally.',
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
