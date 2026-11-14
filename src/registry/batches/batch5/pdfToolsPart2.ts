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
      'reorder pdf pages online',
      'delete blank pages from pdf',
      'duplicate pdf page',
      'organize pdf pages',
      'move pdf pages',
    ],
    seo: {
      title: 'Reorder PDF Pages Online – Move & Delete | UtilityFlow',
      description:
        'Reorder PDF pages visually in your browser: move, duplicate or delete pages from any PDF with live thumbnails and download a clean, re-sequenced file.',
      primaryKeyword: 'reorder pdf pages',
      secondaryKeywords: [
        'delete pages from pdf',
        'rearrange pdf online',
        'remove blank pdf pages',
        'rearrange pdf pages online',
      ],
      longTailKeywords: [
        'visually reorder and remove pdf pages without server upload',
        'duplicate a page inside existing pdf in browser',
        'reorganize pdf page sequence free client side',
        'rearrange pdf pages online free in browser',
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
        title: 'Review the page cards',
        description:
          'Each card shows its current output position and original page index, so you can spot blank, duplicated, or misplaced pages before changing anything.',
      },
      {
        title: 'Rearrange, duplicate, or delete',
        description:
          'Use the arrow buttons to change sequence, the copy icon to duplicate a sheet, or the trash icon to remove unwanted pages.',
      },
      {
        title: 'Check the new page order',
        description:
          'Scan the updated positions on every card to confirm appendices, exhibits, and cover pages sit exactly where they belong.',
      },
      {
        title: 'Save organized PDF',
        description:
          'Click Save Reordered PDF to compile and download your clean document.',
      },
      {
        title: 'Tip: keep the original file',
        description:
          'The tool never edits your source file, so keep it as a backup. If a PDF fails to load, check that it is not password-protected or encrypted.',
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
      {
        question: 'Is the Reorder & Delete PDF Pages tool free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Is my PDF uploaded to a server when I reorder its pages?',
        answer:
          'No. Your PDF is processed locally in your browser and never uploaded, so confidential documents stay on your device.',
      },
      {
        question: 'Can I delete several pages at once?',
        answer:
          'Each page card has its own trash icon, so remove pages one at a time; the page count and positions update immediately after every deletion.',
      },
      {
        question: 'Can I move a page straight to the front or back of the PDF?',
        answer:
          'Use the arrow buttons repeatedly to walk a page to the first or last position, checking its updated output position on the card as you go.',
      },
      {
        question: 'What happens if I delete the wrong page by mistake?',
        answer:
          'There is no undo button, so simply re-upload your untouched original file and redo the changes; the tool never modifies your source file.',
      },
      {
        question: 'Does reordering pages change the text or images on them?',
        answer:
          'No. Pages are copied as-is with pdf-lib, so vector text, images, and fonts keep their original quality.',
      },
      {
        question: 'Can I duplicate the same page more than once?',
        answer:
          'Yes. Click the copy icon on a page as many times as you need, for example to repeat a printable form or sign-off sheet inside a packet.',
      },
      {
        question: 'Which PDFs work with the Reorder & Delete PDF Pages tool?',
        answer:
          'Any unencrypted PDF works. Password-protected or encrypted PDFs cannot be opened by this browser tool.',
      },
      {
        question: 'How many pages can my PDF have?',
        answer:
          'There is no fixed page cap; live thumbnails render for the first 30 pages, while every page still gets a card with its position and original index.',
      },
      {
        question: 'Will my file size change after reordering pages?',
        answer:
          'Removing pages makes the file smaller, while reordering alone keeps the size roughly the same because the document is rebuilt from the same pages.',
      },
      {
        question: 'Can I reorder pages in a scanned PDF?',
        answer:
          'Yes. Pages are copied whole regardless of whether they contain text or scanned images, so scanned documents reorder just like any other PDF.',
      },
      {
        question: 'Does the Reorder & Delete PDF Pages tool work on mobile?',
        answer:
          'Yes, it runs in any modern mobile browser, although the page cards and thumbnails are easier to manage on a larger desktop screen.',
      },
      {
        question: 'Can I rotate pages while reordering them?',
        answer:
          'No. Rotation is a separate job, so use the PDF Page Rotator tool first and then reorder the rotated pages here.',
      },
      {
        question: 'How do I tell the pages apart in the editor?',
        answer:
          'Each card shows a thumbnail preview where available, plus its current output position and its original page number in the source file.',
      },
      {
        question: 'Can I merge two PDFs together with this tool?',
        answer:
          'No. This tool only reorganizes pages inside one PDF; use the Merge PDF tool to combine separate documents first.',
      },
      {
        question: 'Does deleting pages remove bookmarks or internal links?',
        answer:
          'Page content is preserved, but document-level bookmarks may not survive the rebuild, so check the saved file before sharing it.',
      },
      {
        question: 'What file do I get after saving the reordered PDF?',
        answer:
          'A brand-new PDF downloads to your device in your chosen page order, while your original file stays untouched on your computer.',
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
      'watermark pdf online free',
      'add draft stamp to pdf',
      'confidential watermark pdf',
      'pdf watermark maker',
      'stamp pdf pages',
    ],
    seo: {
      title: 'PDF Watermark Tool – Add Stamps Free Online | UtilityFlow',
      description:
        'Add a PDF watermark to any document in your browser: custom diagonal or centered text, size, opacity, angle and color, with no upload needed — free and private.',
      primaryKeyword: 'pdf watermark',
      secondaryKeywords: [
        'add confidential stamp to pdf',
        'watermark pdf in browser',
        'draft pdf overlay tool',
        'watermark pdf online free',
      ],
      longTailKeywords: [
        'add semi transparent diagonal watermark to pdf without upload',
        'watermark only first page of pdf contract',
        'vector text stamp on pdf pages free',
        'add confidential watermark to pdf free in browser',
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
        title: 'Type your watermark text',
        description:
          'Enter the stamp you need, such as CONFIDENTIAL, DRAFT, or DO NOT DISTRIBUTE, using standard Latin characters.',
      },
      {
        title: 'Customize watermark stamp',
        description:
          'Pick Neutral Gray, Brand Indigo, or Stamp Red, and tune the size, opacity, and angle sliders until the stamp looks right.',
      },
      {
        title: 'Choose which pages to stamp',
        description:
          'Leave the default to watermark every page, or check First page only when only the cover sheet needs a classification stamp.',
      },
      {
        title: 'Apply and download',
        description:
          'Optionally check First page only, then click Apply Watermark & Download.',
      },
      {
        title: 'Tip: check legibility before sharing',
        description:
          'Open the downloaded file and confirm the body text is still easy to read; if the stamp is too strong, re-run it with a lower opacity such as 15–22%.',
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
          'Yes. Coordinates calculate dynamically from each individual page’s width and height, so the watermark lands in the same relative spot on every page.',
      },
      {
        question: 'Which characters are supported in the watermark string?',
        answer:
          'Standard WinAnsi (Latin ASCII and common Western European symbols) characters supported by PDF HelveticaBold.',
      },
      {
        question: 'Is the PDF Watermark tool free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Is my PDF uploaded to a server when I add a watermark?',
        answer:
          'No. The file is processed locally in your browser and never uploaded, so unpublished drafts stay private.',
      },
      {
        question: 'Can I watermark only some pages of a PDF?',
        answer:
          'You can watermark every page or only the first page using the First page only option; stamping a custom middle range is not supported.',
      },
      {
        question: 'What text can I use as a PDF watermark?',
        answer:
          'Any short label in standard Latin characters, such as CONFIDENTIAL, DRAFT, INTERNAL USE ONLY, or your company name.',
      },
      {
        question: 'Can I use my company name as the watermark?',
        answer:
          'Yes. Type your company or brand name as the watermark text and it will be stamped across the pages you choose.',
      },
      {
        question: 'Can I change the color of the PDF watermark?',
        answer:
          'Yes. Choose Neutral Gray for a subtle mark, Brand Indigo to match a brand, or Stamp Red for a bold classification notice.',
      },
      {
        question: 'How transparent can the watermark be?',
        answer:
          'Opacity is adjustable from 8% to 65%, so you can keep the stamp visible while the text underneath stays fully readable.',
      },
      {
        question: 'Can I make the watermark horizontal instead of diagonal?',
        answer:
          'Yes. Set the angle slider to 0 degrees for a straight horizontal stamp, or pick any angle up to a full diagonal.',
      },
      {
        question: 'Can I add an image or logo watermark to a PDF?',
        answer:
          'No. This tool stamps text watermarks only; image and logo overlays are not supported.',
      },
      {
        question: 'Will the watermark print when the PDF is printed?',
        answer:
          'Yes. The watermark is real vector content drawn on each page, so it appears in printouts just as it appears on screen.',
      },
      {
        question: 'Does watermarking change the original text of my PDF?',
        answer:
          'No. The watermark is drawn as an overlay on top of the pages and does not edit or replace any existing content.',
      },
      {
        question: 'Can I watermark a password-protected PDF?',
        answer:
          'No. Only unencrypted PDFs can be opened by this browser tool, so remove the password first.',
      },
      {
        question: 'Can this tool remove a watermark from a PDF?',
        answer:
          'No. It only adds watermarks; removing an existing watermark requires a full PDF editor.',
      },
      {
        question: 'What font does the PDF watermark use?',
        answer:
          'Watermarks use crisp standard HelveticaBold vector typography, which stays sharp at any size instead of turning blurry like a bitmap.',
      },
      {
        question: 'Will the watermark stay readable on dark or busy pages?',
        answer:
          'It depends on the page background, so pick a contrasting color and a moderate opacity, then open the downloaded file to check the result.',
      },
      {
        question: 'Can I watermark a scanned PDF?',
        answer:
          'Yes. The watermark is drawn on each page regardless of whether the page holds text or a scanned image.',
      },
      {
        question: 'Does adding a watermark make my PDF file much larger?',
        answer:
          'Only slightly. Vector text adds very little data, so the file size grows by a small amount compared with image-based stamps.',
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
      'number pdf pages',
      'add page numbers pdf free',
      'pdf footer page numbers',
      'page x of n pdf',
      'paginate pdf online',
    ],
    seo: {
      title: 'Add Page Numbers to PDF – Free Numbering | UtilityFlow',
      description:
        'Add page numbers to PDF files in your browser with clean vector labels, cover-page skip and a custom start number — no upload, no sign-up — free and private.',
      primaryKeyword: 'add page numbers to pdf',
      secondaryKeywords: [
        'pdf page number tool',
        'number pdf pages in browser',
        'skip cover page pdf numbering',
        'paginate pdf online',
      ],
      longTailKeywords: [
        'add page 1 of n footer numbers to merged pdf',
        'start pdf numbering on page 2 skip title page',
        'client side vector pdf pagination tool',
        'add page numbers to pdf free without upload',
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
        title: 'Pick the number format',
        description:
          'Choose "Page 1 of N" for formal packets, "1 / N" for a compact look, or bare digits for a minimal footer.',
      },
      {
        title: 'Set position and size',
        description:
          'Select Bottom Center, Bottom Right, Bottom Left, or Top Right, and adjust the font size so the numbers sit neatly in the margin.',
      },
      {
        title: 'Set start number and cover skip',
        description:
          'Change Start Number to continue a multi-volume set, and enable Skip cover page when the title page should stay clean.',
      },
      {
        title: 'Apply and download',
        description:
          'Click Add Page Numbers & Download to export the paginated PDF locally.',
      },
      {
        title: 'Tip: check pages with tight footers',
        description:
          'Open the downloaded file and look at pages that already have footer text; if a number sits too close, re-run it with a smaller font size.',
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
      {
        question: 'Is the Add PDF Page Numbers tool free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Is my PDF uploaded to a server when I add page numbers?',
        answer:
          'No. The file is processed locally in your browser and never uploaded, so your documents stay private.',
      },
      {
        question: 'What page number formats can I choose?',
        answer:
          'You can pick "Page 1 of N", the compact "1 / N" style, or bare digits with no label at all.',
      },
      {
        question: 'Where on the page can the numbers appear?',
        answer:
          'Choose Bottom Center, Bottom Right, Bottom Left, or Top Right, depending on where your margins have free space.',
      },
      {
        question: 'Can I skip numbering the cover page?',
        answer:
          'Yes. Enable Skip cover page and page 1 stays clean while numbering starts on page 2.',
      },
      {
        question: 'Does the tool renumber a PDF that already has page numbers?',
        answer:
          'No. It stamps new numbers alongside any existing ones, so remove old numbers first if you want only one set.',
      },
      {
        question: 'Can I change the font size of the page numbers?',
        answer:
          'Yes. Adjust the font size setting so the numbers are readable without crowding your footer or header.',
      },
      {
        question: 'Does page numbering work on landscape pages?',
        answer:
          'Yes. The tool measures the exact text width per page size, so numbers stay centered or aligned on portrait and landscape pages alike.',
      },
      {
        question: 'Can I number only selected pages of a PDF?',
        answer:
          'No. Numbering applies to every page except an optionally skipped cover page; numbering a custom range is not supported.',
      },
      {
        question: 'What happens if my PDF already has page numbers?',
        answer:
          'The new numbers are stamped in addition to the old ones, which can look doubled, so check the output and clean the original first if needed.',
      },
      {
        question: 'Can I use Roman numerals for page numbers?',
        answer:
          'No. The tool numbers pages with standard Arabic numerals only, so formats like Roman numerals are not available as a numbering style.',
      },
      {
        question: 'Can I add page numbers to a scanned PDF?',
        answer:
          'Yes. Numbers are drawn on each page as vector text regardless of whether the page holds text or a scanned image.',
      },
      {
        question: 'Can I put page numbers in the header instead of the footer?',
        answer:
          'Yes, choose the Top Right position for header numbering; top-center placement is not offered.',
      },
      {
        question: 'Will the stamped page numbers be selectable text?',
        answer:
          'Yes. Numbers are drawn as crisp vector text, so readers can select and copy them like ordinary PDF text.',
      },
      {
        question: 'Can I number a password-protected PDF?',
        answer:
          'No. Only unencrypted PDFs can be opened by this browser tool, so remove the password first.',
      },
      {
        question: 'Can I add a prefix like "Section 2 – Page 3"?',
        answer:
          'No. The tool offers only the three number formats, so custom prefixes or section labels cannot be added.',
      },
      {
        question: 'Does adding page numbers change my PDF content?',
        answer:
          'No. Only the number labels are added; your existing text, images, and layout stay exactly as they were.',
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
      'edit pdf metadata',
      'change pdf title',
      'pdf properties editor',
      'pdf author remover',
      'view pdf metadata',
    ],
    seo: {
      title: 'PDF Metadata Editor – View, Edit & Strip Tags | UtilityFlow',
      description:
        'Use this PDF metadata editor to view, update or strip Title, Author, Subject, Keywords, Creator and Producer tags privately in your browser — free and private.',
      primaryKeyword: 'pdf metadata editor',
      secondaryKeywords: [
        'pdf metadata viewer',
        'remove pdf author metadata',
        'change pdf document title',
        'edit pdf metadata online',
      ],
      longTailKeywords: [
        'inspect and strip hidden author metadata from pdf online',
        'change pdf title shown in browser tab free',
        'private client side pdf properties editor',
        'remove author metadata from pdf before sharing',
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
        title: 'Review the current metadata',
        description:
          'Read the Title, Author, Subject, Keywords, Creator, and Producer fields, plus the page count and exact page dimensions, to see what is stored.',
      },
      {
        title: 'Edit or sanitize fields',
        description:
          'Update Title, Author, Subject, and Keywords for clarity, or click Strip All Metadata Fields for privacy.',
      },
      {
        title: 'Strip all metadata for privacy',
        description:
          'Use Strip All Metadata Fields before sharing a file publicly to clear author names and software versions in one click.',
      },
      {
        title: 'Save and download',
        description:
          'Click Save Metadata & Download PDF to export a freshly tagged copy.',
      },
      {
        title: 'Tip: verify the saved file',
        description:
          'Re-open the downloaded PDF in this tool to confirm the new Title and cleared Author fields, since changes only apply to the saved copy.',
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
      {
        question: 'Is the PDF Metadata Editor free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'Is my PDF uploaded to a server when I edit its metadata?',
        answer:
          'No. Reading and writing metadata happen purely inside your browser, so your files are never uploaded or logged.',
      },
      {
        question: 'What metadata fields can I edit in a PDF?',
        answer:
          'You can view and edit Title, Author, Subject, Keywords, Creator, and Producer — the six standard tags in the PDF Info dictionary.',
      },
      {
        question: 'Can I remove only the author name from a PDF?',
        answer:
          'Yes. Clear just the Author field and save, leaving the Title, Subject, and other tags untouched.',
      },
      {
        question: 'What does "Strip All Metadata Fields" do?',
        answer:
          'It clears all six standard Info dictionary tags at once, removing author names, software strings, and titles before you share the file.',
      },
      {
        question: 'Can editing the Title change how the PDF appears in search results?',
        answer:
          'Editing the Title changes the label browsers show in the PDF tab, but it does not guarantee any particular search ranking or snippet.',
      },
      {
        question: 'Does stripping metadata delete bookmarks or links?',
        answer:
          'No. Stripping updates only the Info dictionary, so bookmarks, links, and visible page content are left unchanged.',
      },
      {
        question: 'Can I view PDF metadata without changing anything?',
        answer:
          'Yes. The fields populate as soon as you load a file, and nothing is altered unless you click Save Metadata & Download PDF.',
      },
      {
        question: 'What are the Creator and Producer fields in a PDF?',
        answer:
          'Creator names the application that made the document, such as Microsoft Word, while Producer names the software that converted it into a PDF.',
      },
      {
        question: 'Can I add keywords to a PDF for better searchability?',
        answer:
          'Yes. Enter comma-separated Keywords in the metadata editor, and they are stored in the PDF for search tools that read them.',
      },
      {
        question: 'Will the file size change after editing PDF metadata?',
        answer:
          'Only by a tiny amount. Metadata is a small block of text, so editing or stripping it barely affects the overall file size.',
      },
      {
        question: 'Can I edit metadata on a scanned PDF?',
        answer:
          'Yes. Metadata lives in the document header and is independent of page content, so scanned PDFs work the same as text-based ones.',
      },
      {
        question: 'Can I edit XMP metadata with this tool?',
        answer:
          'No. This tool edits the six standard Info dictionary tags only; extended XMP metadata packets are not modified.',
      },
      {
        question: 'Can I edit metadata on an encrypted PDF?',
        answer:
          'No. Only unencrypted PDFs can be opened by this browser tool, so remove the password first.',
      },
      {
        question: 'Does the PDF Metadata Editor show the page size?',
        answer:
          'Yes. It displays the exact page dimensions in points (width × height) alongside the page count for every loaded file.',
      },
      {
        question: 'Will stripping metadata remove all personal information from a PDF?',
        answer:
          'It removes the six Info tags, but personal details typed visibly on the pages themselves, such as a name in the body text, remain.',
      },
      {
        question: 'Do I need to download the file to apply metadata changes?',
        answer:
          'Yes. Clicking Save Metadata & Download PDF creates a new file with your changes, while your original file stays untouched.',
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
      'extract text from pdf online',
      'pdf to text free',
      'pdf to txt',
      'get text from pdf',
      'pdf text copy tool',
    ],
    seo: {
      title: 'PDF Text Extractor – Copy Text to .TXT Free | UtilityFlow',
      description:
        'Use this PDF text extractor to pull embedded text page by page in your browser, with page markers, word counts, copy and .txt download — free, fast and private.',
      primaryKeyword: 'pdf text extractor',
      secondaryKeywords: [
        'pdf to txt online free',
        'extract pdf text client side',
        'copy text from pdf document',
        'pdf to text free',
      ],
      longTailKeywords: [
        'extract text from confidential pdf locally without upload',
        'convert text based pdf into plain txt file with page markers',
        'detect scanned image only pdf missing text layer',
        'extract text from pdf to txt free in browser',
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
        title: 'Review the extracted text',
        description:
          'Read through the output and check the reported page count, word count, and UTF-8 byte size to confirm the extraction looks complete.',
      },
      {
        title: 'Toggle page markers',
        description:
          'Keep page headers enabled for structured citations or uncheck for continuous prose.',
      },
      {
        title: 'Check for scanned pages',
        description:
          'If the tool reports 0 characters, the PDF is likely a scanned image-only file with no text layer to extract.',
      },
      {
        title: 'Copy or export .txt',
        description:
          'Copy the extracted text into your editor or download a clean UTF-8 .txt transcript.',
      },
      {
        title: 'Tip: fix garbled or missing text',
        description:
          'If characters look wrong, the source PDF may use a custom font without proper Unicode mapping; try the original document or a freshly exported copy.',
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
      {
        question: 'Is the PDF Text Extractor free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and it runs entirely in your browser.',
      },
      {
        question: 'What file formats can I export extracted text to?',
        answer:
          'You can copy the plain text to your clipboard or download it as a clean UTF-8 .txt transcript.',
      },
      {
        question: 'Can I extract text from only one page of a PDF?',
        answer:
          'Extraction covers the whole document, but the optional --- Page N --- markers make it easy to find and copy just the section you need.',
      },
      {
        question: 'Why is some text missing from the extracted output?',
        answer:
          'Text stored as an image, or drawn with a custom font that lacks a Unicode map, has no readable text stream for PDF.js to extract.',
      },
      {
        question: 'Does the PDF Text Extractor include OCR for scanned pages?',
        answer:
          'No. It reads the existing embedded text layer only and does not run OCR, so scanned image-only pages return no text.',
      },
      {
        question: 'Can I extract text from a PDF in another language?',
        answer:
          'Yes. Embedded Unicode text is extracted as-is, so non-English documents work as long as the PDF stores a proper text layer.',
      },
      {
        question: 'Does extraction preserve bold text or headings?',
        answer:
          'No. The output is plain text only, so bold, italics, headings, and other formatting are not carried over.',
      },
      {
        question: 'How large a PDF can I extract text from?',
        answer:
          'There is no stated size cap, and extraction runs locally; very large documents may simply take a little longer to scan.',
      },
      {
        question: 'Can I copy the extracted text without downloading a file?',
        answer:
          'Yes. Use the one-click copy button to paste the text straight into your editor, notes app, or document.',
      },
      {
        question: 'What are the "--- Page N ---" markers in the output?',
        answer:
          'They are optional headers that mark where each page begins, so you can cite pages accurately; turn them off for continuous prose.',
      },
      {
        question: 'Does the PDF Text Extractor show a word count?',
        answer:
          'Yes. It reports the extracted page count, word count, and UTF-8 byte size alongside the text.',
      },
      {
        question: 'Can I extract text from a password-protected PDF?',
        answer:
          'No. Only unencrypted PDFs can be opened by this browser tool, so remove the password first.',
      },
      {
        question: 'Will hyperlinks be extracted from the PDF?',
        answer:
          'Visible link text is extracted when it exists as text, but the links themselves are not exported as clickable URLs.',
      },
      {
        question: 'Can I use the extracted text in Word or Google Docs?',
        answer:
          'Yes. Paste the copied text directly, or open the downloaded .txt file and copy its contents into any word processor.',
      },
      {
        question: 'Why do some characters look garbled in the extracted text?',
        answer:
          'Some PDFs embed custom fonts without a proper Unicode mapping, so PDF.js cannot match the glyphs to the right characters.',
      },
      {
        question: 'Does extracting text change my original PDF?',
        answer:
          'No. Extraction is read-only; your original PDF file is never modified, so you can safely extract text from any copy you open.',
      },
      {
        question: 'Can the PDF Text Extractor pull text from forms and annotations?',
        answer:
          'It extracts the main embedded text layer of each page; filled form values and annotation notes may not appear if they are stored separately.',
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
