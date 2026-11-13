import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const PDF_TOOLS_PART_2: ToolDefinition[] = [
  {
    id: 'reorder-delete-pdf-pages',
    slug: 'reorder-delete-pdf-pages',
    name: 'Reorder & Delete PDF Pages',
    shortDescription:
      'Visually inspect PDF thumbnails, move pages up or down, duplicate sheets, or remove unwanted pages locally.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'reorder pdf pages',
      'delete pdf pages',
      'rearrange pdf',
      'remove pages from pdf',
    ],
    seo: {
      title: 'Reorder & Delete PDF Pages – Visual Page Organizer | UtilityFlow',
      description:
        'Rearrange page order, duplicate template sheets, or delete blank and unwanted pages from PDF documents visually inside your browser using PDF.js & pdf-lib.',
      primaryKeyword: 'reorder pdf pages',
      secondaryKeywords: [
        'delete pages from pdf',
        'rearrange pdf online',
        'remove blank pdf pages',
      ],
      longTailKeywords: [
        'visually reorder and remove pdf pages without server upload',
        'duplicate a page inside existing pdf in browser',
        'reorganize pdf page sequence free client side',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Review rendered page cards for your PDF, move misplaced pages forward or backward, duplicate cover or template sheets, delete blank pages, and export a clean re-sequenced PDF locally.',
    instructions: [
      {
        title: 'Load your PDF document',
        description:
          'Select an unencrypted PDF; thumbnail previews render locally for up to 30 pages (with page cards and dimensions for all pages).',
      },
      {
        title: 'Rearrange, duplicate, or delete',
        description:
          'Use the arrow buttons to change sequence, the copy icon to duplicate a sheet, or the trash icon to remove unwanted pages.',
      },
      {
        title: 'Save organized PDF',
        description:
          'Click Save Reordered PDF to compile and download your clean document.',
      },
    ],
    examples: [
      {
        title: 'Removing a blank trailing page and moving appendix forward',
        input: '5-page PDF · Delete page 5 · Move page 4 to position #2',
        output: 'Updated 4-page PDF with vector content intact',
        explanation: 'Rebuilds the document page tree cleanly in your selected order.',
      },
    ],
    benefits: [
      'Combines PDF.js visual thumbnails with lossless pdf-lib page copying',
      'Guards against saving an empty 0-page PDF accidentally',
      'Displays both current output position and original page index',
      'Zero file uploads for confidential HR, legal, or medical records',
    ],
    useCases: [
      'Deleting accidental blank pages produced by duplex document scanners',
      'Moving misplaced appendices or exhibits into the proper sequence',
      'Duplicating printable form pages or sign-off sheets inside a packet',
      'Cleaning up combined PDFs prior to sending to clients',
    ],
    faqs: [
      {
        question: 'Why do thumbnails only render for the first 30 pages?',
        answer:
          'To keep browser RAM fast on huge documents, live thumbnails render for the first 30 pages while every page remains fully reorderable and deletable via its card.',
      },
      {
        question: 'Does reordering pages flatten text into images?',
        answer:
          'No. Thumbnails are only for visual preview inside the UI; the saved output uses pdf-lib copyPages() to preserve original vector text and links.',
      },
      {
        question: 'Can I undo deleting all pages?',
        answer:
          'The editor requires at least 1 page to remain, and re-uploading the untouched source file restores the full original anytime.',
      },
    ],
    relatedToolSlugs: [
      'split-pdf',
      'merge-pdf',
      'pdf-page-rotator',
      'add-pdf-page-numbers',
    ],
    component: lazy(() => import('../../../tools/pdf/ReorderDeletePdfPagesTool')),
  },
  {
    id: 'pdf-watermark',
    slug: 'pdf-watermark',
    name: 'PDF Watermark Tool',
    shortDescription:
      'Stamp customizable diagonal text watermarks like CONFIDENTIAL or DRAFT onto PDF pages with custom size and opacity.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'pdf watermark',
      'add watermark to pdf',
      'confidential pdf stamp',
      'draft pdf watermark',
    ],
    seo: {
      title: 'PDF Watermark Tool – Add Text Stamps Locally | UtilityFlow',
      description:
        'Add crisp diagonal or centered vector text watermarks (such as CONFIDENTIAL or DRAFT) to PDF documents with customizable font size, opacity, angle, and color.',
      primaryKeyword: 'pdf watermark',
      secondaryKeywords: [
        'add confidential stamp to pdf',
        'watermark pdf in browser',
        'draft pdf overlay tool',
      ],
      longTailKeywords: [
        'add semi transparent diagonal watermark to pdf without upload',
        'watermark only first page of pdf contract',
        'vector text stamp on pdf pages free',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Stamp centered or diagonal vector text watermarks—such as `CONFIDENTIAL`, `DRAFT`, or `DO NOT DISTRIBUTE`—across all pages or the cover page of any PDF with live controls for font size, opacity, rotation angle, and brand color.',
    instructions: [
      {
        title: 'Choose your PDF file',
        description:
          'Upload any unencrypted PDF document locally into memory.',
      },
      {
        title: 'Customize watermark stamp',
        description:
          'Enter watermark text, pick Neutral Gray, Brand Indigo, or Stamp Red, and tune size, opacity, and angle sliders.',
      },
      {
        title: 'Apply and download',
        description:
          'Optionally check First page only, then click Apply Watermark & Download.',
      },
    ],
    examples: [
      {
        title: 'Stamping a pre-release proposal draft',
        input: 'Text: DRAFT · Font: 54 pt · Opacity: 22% · Angle: 40°',
        output: 'Centered diagonal semi-transparent vector DRAFT overlay across every page',
        explanation: 'Uses alpha opacity so underlying body text remains fully legible.',
      },
    ],
    benefits: [
      'Uses crisp standard HelveticaBold vector typography rather than blurry bitmaps',
      'Supports semi-transparent alpha opacity from 8% to 65% so content stays readable',
      'Offers First Page Only mode for cover-sheet classification stamps',
      'Keeps unpublished drafts strictly off external cloud servers',
    ],
    useCases: [
      'Marking draft contracts, SOWs, or pitch decks prior to external review',
      'Adding CONFIDENTIAL or INTERNAL USE ONLY notices to HR/board packets',
      'Labeling sample portfolios or preview proofs',
      'Applying consistent review status stamps before archiving',
    ],
    faqs: [
      {
        question: 'Can recipients edit or remove the watermark in full PDF editors?',
        answer:
          'Text watermarks drawn with pdf-lib are standard vector content objects on the page. If you need non-selectable flattened pages where watermarks cannot be selected as text, convert the watermarked PDF through our PDF to Images and Images to PDF tools.',
      },
      {
        question: 'Does the watermark work on both portrait and landscape pages?',
        answer:
          'Yes. Coordinates calculate dynamically from each individual page’s width and height.',
      },
      {
        question: 'Which characters are supported in the watermark string?',
        answer:
          'Standard WinAnsi (Latin ASCII and common Western European symbols) characters supported by PDF HelveticaBold.',
      },
    ],
    relatedToolSlugs: [
      'add-pdf-page-numbers',
      'pdf-metadata-editor',
      'merge-pdf',
      'pdf-to-images',
    ],
    component: lazy(() => import('../../../tools/pdf/PdfWatermarkTool')),
  },
  {
    id: 'add-pdf-page-numbers',
    slug: 'add-pdf-page-numbers',
    name: 'Add PDF Page Numbers',
    shortDescription:
      'Insert clean vector page numbers ("Page 1 of N", "1 / N", or "1") onto PDF documents with cover-page skip.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'add page numbers to pdf',
      'pdf page numbering',
      'number pdf pages online',
      'bates style page numbers',
    ],
    seo: {
      title: 'Add PDF Page Numbers – Footer & Header Numbering | UtilityFlow',
      description:
        'Stamp clean vector page numbers ("Page 1 of N", "1 / N", or numeric) onto merged or unnumbered PDF documents with cover-page skip and custom starting number.',
      primaryKeyword: 'add page numbers to pdf',
      secondaryKeywords: [
        'pdf page number tool',
        'number pdf pages in browser',
        'skip cover page pdf numbering',
      ],
      longTailKeywords: [
        'add page 1 of n footer numbers to merged pdf',
        'start pdf numbering on page 2 skip title page',
        'client side vector pdf pagination tool',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Number merged packets, legal exhibits, or academic submissions cleanly using crisp vector typography—choosing `Page 1 of N`, `1 / N`, or bare digits, bottom/top alignment, custom start numbers, and optional cover-page skipping.',
    instructions: [
      {
        title: 'Load your PDF document',
        description:
          'Choose the unnumbered or merged PDF file you want to paginate.',
      },
      {
        title: 'Configure position and format',
        description:
          'Select Bottom Center, Bottom Right, Bottom Left, or Top Right, pick label style, font size, and optional Skip cover page.',
      },
      {
        title: 'Apply and download',
        description:
          'Click Add Page Numbers & Download to export the paginated PDF locally.',
      },
    ],
    examples: [
      {
        title: 'Numbering a merged packet starting after a cover page',
        input: '5-page PDF · Format: Page 1 of N · Skip cover page: Checked',
        output: 'Page 1 untouched; pages 2–5 stamped "Page 1 of 4" through "Page 4 of 4"',
        explanation: 'Ideal after combining cover sheets and appendices with Merge PDF.',
      },
    ],
    benefits: [
      'Fixes broken pagination right after merging separate PDF reports',
      'Supports skipping page 1 so title covers stay clean',
      'Customizable start number supports multi-volume document sets',
      'Measures exact text width per page size for crisp centering and right alignment',
    ],
    useCases: [
      'Paginating combined client proposals and RFPs after Merge PDF',
      'Numbering court filings, appendices, or thesis chapters',
      'Continuing sequential numbering from page 15 onward in a Part 2 volume',
      'Adding subtle bottom-right numbers to printed study guides',
    ],
    faqs: [
      {
        question: 'Will this erase existing text near the bottom margin?',
        answer:
          'The tool draws crisp numbers at a 28 pt margin offset without covering existing backgrounds, so inspect pages that already have tight footers.',
      },
      {
        question: 'How does "Skip cover page" affect the total count in "Page X of N"?',
        answer:
          'When enabled, page 1 receives no label and the remaining pages count cleanly from 1 up to (Total Pages − 1) so totals stay consistent.',
      },
      {
        question: 'Can I start numbering at page 10 instead of 1?',
        answer:
          'Yes. Change Start Number to 10 to number sequential volumes from 10 upward.',
      },
    ],
    relatedToolSlugs: [
      'merge-pdf',
      'pdf-watermark',
      'reorder-delete-pdf-pages',
      'pdf-metadata-editor',
    ],
    component: lazy(() => import('../../../tools/pdf/AddPdfPageNumbersTool')),
  },
  {
    id: 'pdf-metadata-editor',
    slug: 'pdf-metadata-editor',
    name: 'PDF Metadata Inspector & Editor',
    shortDescription:
      'View, update, or strip PDF Title, Author, Subject, Keywords, Creator, and Producer tags privately in browser memory.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'pdf metadata editor',
      'pdf metadata viewer',
      'remove author from pdf',
      'strip pdf metadata',
    ],
    seo: {
      title: 'PDF Metadata Inspector & Editor – Edit or Strip PDF Tags | UtilityFlow',
      description:
        'Inspect hidden PDF properties (Title, Author, Subject, Keywords, Creator, Producer), set clean browser tab titles, or strip identifying metadata before sharing.',
      primaryKeyword: 'pdf metadata editor',
      secondaryKeywords: [
        'pdf metadata viewer',
        'remove pdf author metadata',
        'change pdf document title',
      ],
      longTailKeywords: [
        'inspect and strip hidden author metadata from pdf online',
        'change pdf title shown in browser tab free',
        'private client side pdf properties editor',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Reveal hidden properties stored inside PDF headers—including Document Title, Author, Subject, Keywords, Creator software, and Producer—so you can set clean browser-tab titles or strip identifying personal metadata before publishing publicly.',
    instructions: [
      {
        title: 'Load a PDF file',
        description:
          'Select any unencrypted PDF; existing metadata fields and page dimensions populate automatically.',
      },
      {
        title: 'Edit or sanitize fields',
        description:
          'Update Title, Author, Subject, and Keywords for clarity, or click Strip All Metadata Fields for privacy.',
      },
      {
        title: 'Save and download',
        description:
          'Click Save Metadata & Download PDF to export a freshly tagged copy.',
      },
    ],
    examples: [
      {
        title: 'Anonymizing a PDF exported from Word or Illustrator',
        input: 'Author: "John Doe" · Creator: "Microsoft® Word 2021"',
        output: 'Click Strip All Metadata Fields → Save clean PDF with blank Author/Creator',
        explanation: 'Removes employee names and software versions before public web hosting.',
      },
    ],
    benefits: [
      'Exposes hidden author names and software strings browsers show in tabs and properties',
      'One-click Strip All Metadata Fields clears all 6 standard Info dictionary tags',
      'Updates SEO-relevant Title, Subject, and comma-separated Keywords cleanly',
      'Displays exact PDF point dimensions (`width × height pt`) alongside page count',
    ],
    useCases: [
      'Scrubbing employee names and local tool versions before posting public PDFs',
      'Fixing awkward filenames like "Untitled-2" shown in Chrome/Safari PDF tabs via Title',
      'Adding searchable Subject and Keyword tags to downloadable whitepapers',
      'Auditing vendor or candidate PDF submissions locally',
    ],
    faqs: [
      {
        question: 'Why does my browser tab show the wrong title when opening a PDF?',
        answer:
          'Browsers display the internal PDF Document Title property rather than the .pdf filename if a Title tag is embedded. Editing Title here fixes how browsers label the tab.',
      },
      {
        question: 'Does clearing metadata fields affect visible page content?',
        answer:
          'No. Stripping or updating Title, Author, Subject, Keywords, Creator, and Producer updates only the PDF Info dictionary without altering visible pages.',
      },
      {
        question: 'Are edits encrypted or logged anywhere?',
        answer:
          'Never. Both reading and writing metadata execute purely inside client memory via pdf-lib.',
      },
    ],
    relatedToolSlugs: [
      'pdf-text-extractor',
      'pdf-watermark',
      'merge-pdf',
      'add-pdf-page-numbers',
    ],
    component: lazy(() => import('../../../tools/pdf/PdfMetadataEditorTool')),
  },
  {
    id: 'pdf-text-extractor',
    slug: 'pdf-text-extractor',
    name: 'PDF Text Extractor',
    shortDescription:
      'Extract selectable text page-by-page from PDF documents into copyable plain text or .txt downloads via PDF.js.',
    categoryId: 'pdf',
    batch: 5,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'pdf text extractor',
      'extract text from pdf',
      'pdf to txt converter',
      'copy text from pdf',
    ],
    seo: {
      title: 'PDF Text Extractor – Copy Plain Text & Export .TXT | UtilityFlow',
      description:
        'Extract embedded text layers from PDF documents page-by-page inside your browser via PDF.js, inspect word counts, copy text, or download a .txt transcript.',
      primaryKeyword: 'pdf text extractor',
      secondaryKeywords: [
        'pdf to txt online free',
        'extract pdf text client side',
        'copy text from pdf document',
      ],
      longTailKeywords: [
        'extract text from confidential pdf locally without upload',
        'convert text based pdf into plain txt file with page markers',
        'detect scanned image only pdf missing text layer',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Read and extract embedded Unicode text directly from text-based PDFs page-by-page using PDF.js, with optional `--- Page N ---` headers, word/byte stats, one-click copy, and `.txt` export—plus transparent detection when a PDF is scanned/image-only.',
    instructions: [
      {
        title: 'Select a PDF document',
        description:
          'Choose any unencrypted PDF file; PDF.js scans the embedded text stream of every page locally.',
      },
      {
        title: 'Toggle page markers',
        description:
          'Keep page headers enabled for structured citations or uncheck for continuous prose.',
      },
      {
        title: 'Copy or export .txt',
        description:
          'Copy the extracted text into your editor or download a clean UTF-8 .txt transcript.',
      },
    ],
    examples: [
      {
        title: 'Extracting readable copy from a multi-page whitepaper',
        input: 'whitepaper.pdf (8 pages, embedded text layer)',
        output: 'Structured plain text with --- Page 1 --- dividers, word count, and .txt download',
        explanation: 'Pulls underlying PDF text items cleanly without manual highlight-and-copy glitches.',
      },
    ],
    benefits: [
      'Transparently warns if a PDF is scanned/image-only (0 text layer, OCR not run offline)',
      'Preserves clean page breaks via toggleable --- Page N --- markers',
      'Reports extracted page count, word count, and UTF-8 byte size',
      'Ideal first step before sending copy to Word Counter or Find & Replace',
    ],
    useCases: [
      'Pulling clean plain text out of PDF whitepapers, syllabi, or documentation',
      'Checking word counts on formatted PDF essays using our Word Counter',
      'Verifying whether an archived PDF contains a searchable text layer vs flat scans',
      'Exporting PDF meeting agendas into plain-text Markdown notes',
    ],
    faqs: [
      {
        question: 'Why did a scanned PDF extract 0 characters?',
        answer:
          'Scanner PDFs often save pages purely as flat bitmap images without an embedded OCR text layer. This browser tool reads existing PDF text streams directly and discloses honestly that offline OCR is not included.',
      },
      {
        question: 'Why do complex multi-column tables sometimes wrap across lines?',
        answer:
          'PDF files store text positioned by X/Y coordinates rather than semantic HTML tables, so PDF.js emits text items in stream order with line-ending hints.',
      },
      {
        question: 'Is my PDF uploaded to extract text?',
        answer:
          'No. PDF.js parses and extracts text streams strictly inside your browser tab.',
      },
    ],
    relatedToolSlugs: [
      'pdf-to-images',
      'pdf-metadata-editor',
      'word-counter',
      'whitespace-remover',
    ],
    component: lazy(() => import('../../../tools/pdf/PdfTextExtractorTool')),
  },
];
