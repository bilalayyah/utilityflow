// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
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
      {
        title: 'Merging a three-part client proposal into one file',
        input: 'proposal-part1.pdf (6 pages) + proposal-part2.pdf (4 pages) + pricing.pdf (2 pages)',
        output: 'merged-document.pdf (12 pages, in queue order)',
        explanation: 'Each part is copied in queue order, so the cover, body, and pricing appendix read as one continuous document ready to send.',
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
    howItWorks: [
      'When you merge PDF files here, the tool creates a brand-new empty document in your browser and copies every page from each source file into it, in exactly the order shown in your queue. Pages are copied as vector data with pdf-lib, so text, fonts, and embedded images keep their original quality.',
      'The queue order is the merge order: the first file in the list contributes the opening pages, and each following file appends its pages after them. Use the up and down arrows to rearrange files before merging, because the finished document follows that sequence page by page.',
      'Each file is checked before it joins the queue: the tool looks for a %PDF header in the first 1,024 bytes and rejects files that are empty, truncated, or password-protected with a clear message. At least two files are required, since merging a single file would only copy it unchanged.',
      'The merged file downloads as one PDF, named with your chosen filename or merged-document.pdf by default. Page sizes and orientations are kept exactly as they were, so a mix of portrait and landscape pages stays mixed, and text-based pages remain selectable and searchable.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Unencrypted PDF files',
      'Text-based PDF pages',
      'Scanned image PDF pages',
      'Mixed portrait and landscape pages',
      'Multi-file queues (2 or more PDFs)',
    ],
    limitations: [
      'Only unencrypted PDF files can be merged; a password-protected file is rejected until you unlock it elsewhere first.',
      'Document outlines, bookmarks, and interactive form fields are generally not carried into the new file, because the tool builds a fresh document from copied pages.',
      'There is no fixed file-size limit, but every file is held in browser memory, so very large documents can slow down or fail on low-memory devices.',
      'Merging does not compress or shrink anything: the output is roughly the sum of its inputs, so combining many image-heavy scans produces a large file.',
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
  },
  'split-pdf': {
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
      {
        title: 'Splitting a duplex scan into odd and even halves',
        input: '40-page duplex scan · Mode: Odd Pages Only',
        output: 'contract-extracted.pdf (20 odd pages)',
        explanation: 'Odd pages land in one file and even pages in another, so each half can be re-scanned or filed separately without touching the original.',
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
    howItWorks: [
      'To split a PDF, the tool loads your document with pdf-lib and copies only the pages you select into a freshly created file. Copying moves the original vector content, fonts, and images unchanged, so extracted pages stay sharp and their text stays selectable.',
      'In Extract Page Ranges mode, the range parser reads entries like 1-3, 5, 9-12, removes duplicates, and sorts the result into ascending order. Anything outside the document or written backwards, such as 8-3, is flagged with a clear error before anything is saved.',
      'Odd Pages Only keeps pages 1, 3, 5, and so on, while Even Pages Only keeps pages 2, 4, 6, and so on — handy for reassembling duplex scans. Burst mode instead creates one separate single-page PDF per page, named from your file plus the page number.',
      'Your original file is never changed: the tool reads it in memory and downloads a new file, called filename-extracted.pdf for ranges or filename-page-N.pdf for each burst page. Run the result through the Reorder & Delete PDF Pages tool if the extracted order needs adjusting.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Page ranges (1-3, 5)',
      'Odd pages',
      'Even pages',
      'Burst to single pages',
      'Multi-page PDFs',
    ],
    limitations: [
      'Burst mode is capped at 25 pages, because browsers often block or interrupt more than about 25 rapid downloads in a row; use page ranges for larger extractions.',
      'Extracted pages always come out in ascending order, even if you type them out of order; custom sequences need the Reorder & Delete PDF Pages tool afterwards.',
      'Encrypted or password-protected PDFs cannot be split until they are unlocked, and the file is rejected with a friendly error instead of silently failing.',
      'Bookmarks and document outlines generally do not survive extraction, so check the saved file before sharing it if navigation links matter to your readers.',
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
  },
  'images-to-pdf': {
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
      {
        title: 'Turning phone photos of a whiteboard into one PDF',
        input: '4 whiteboard JPGs · Exact Image Dimensions · 24 pt margin',
        output: 'images-bundle.pdf (4 full-size pages)',
        explanation: 'Each photo keeps its own proportions on its own page, so the handwriting stays legible and nothing is cropped at the edges.',
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
    howItWorks: [
      'To convert images to PDF, the tool creates a fresh document and adds one page per image, in the order shown in your list. JPG files are embedded natively with pdf-lib, PNG files are embedded natively too, and WebP files are first decoded through an HTML canvas into lossless PNG frames.',
      'On A4 Portrait (595.28 by 841.89 points) or US Letter (612 by 792 points), each image is scaled by the smaller of the width and height ratios, so it fits inside your margin without stretching or cropping, then centered on the page.',
      'Exact Image Dimensions mode skips the standard sheet entirely and sizes each page to its image plus twice the margin, so a tall receipt or wide screenshot keeps its natural shape. The default margin is 24 points, and the default filename is images-bundle.pdf.',
      'Image previews are temporary local object URLs created in your browser tab, and they disappear when the tab closes. The finished PDF downloads straight to your device; no image is ever uploaded to a server.',
    ],
    supportedFormats: [
      'JPG / JPEG',
      'PNG',
      'WebP',
      'A4 Portrait pages',
      'US Letter pages',
      'Exact image dimensions',
    ],
    limitations: [
      'HEIC photos from iPhones are not supported directly; convert them to JPG or PNG first, then add them to the converter.',
      'Very large images are embedded at full resolution, so a PDF built from many phone photos can grow large; compress the images first if file size matters.',
      'The PDF has no text layer: pages are pictures, so the result is not searchable and its words cannot be selected or copied.',
      'PNG transparency shows through on Exact Image Dimensions pages, but on A4 or Letter pages the image sits on a plain white page background.',
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
  },
  'pdf-to-images': {
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
      {
        title: 'Saving a signed certificate page as a phone photo',
        input: 'Pages: 2 · Format: JPG · Scale: 2.0x',
        output: 'One sharp 144 DPI JPG of page 2',
        explanation: 'The certificate renders at double resolution, so the signature and seal stay crisp when the image is shared in a chat message.',
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
    howItWorks: [
      'To turn PDF pages into images, the tool loads your file with PDF.js, running entirely in your browser through a locally bundled web worker — no external script is fetched. Each page you select is drawn onto a canvas at your chosen scale, then saved as a PNG or JPG file.',
      'The page field accepts all, or a range such as 1-3, 5, using the same parser as the Split & Extract PDF Pages tool; out-of-bounds pages are rejected before rendering starts. For documents longer than ten pages the field is prefilled with 1-10, and each batch renders at most 20 pages.',
      'Scale 1.0x renders at screen resolution, 1.5x is the default, and 2.0x renders at about 144 DPI for the sharpest text and diagrams. JPG exports are encoded at 0.92 quality, and because JPG has no transparency, transparent areas are first filled with white.',
      'Every rendered page appears as a preview card with its pixel dimensions, and each card has its own download button, so you save only the pages you need. The original PDF is never modified, and nothing is uploaded anywhere.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'PNG output',
      'JPG output',
      'Page ranges (1-3, 5)',
      'Scales 1.0x, 1.5x, 2.0x',
      'Up to 20 pages per batch',
    ],
    limitations: [
      'Each batch renders at most 20 pages, because high-resolution canvases use significant memory; repeat the process with a new range for longer documents.',
      'Rendered images are pictures, not documents: the text inside them cannot be selected, searched, or copied — use the PDF Text Extractor tool when you need the words.',
      'Encrypted or password-protected PDFs must be unlocked first, since PDF.js cannot read pages from a file that is still locked.',
      'Very small or low-resolution source pages will not gain detail at 2.0x scale; upscaling only enlarges the pixels that are already there.',
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
  },
  'pdf-page-rotator': {
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
      {
        title: 'Fixing upside-down back pages from a duplex scan',
        input: 'Scope: Even Pages Only · Angle: 180° Upside Down',
        output: 'Even pages flipped upright; odd pages untouched',
        explanation: 'Duplex scanners often flip every second sheet, so rotating just the even pages corrects the whole document in one pass.',
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
    howItWorks: [
      'The PDF Page Rotator fixes orientation by changing each page rotation value in the PDF page dictionary — it never redraws or re-encodes the page. Text, fonts, and embedded images stay exactly as they were, so rotation is completely lossless and the file barely changes size.',
      'You pick 90 degrees clockwise, 90 degrees counter-clockwise (stored as 270 degrees), or 180 degrees upside down. The tool reads the current angle of each page first and adds your choice to it, wrapping at 360 degrees, so a page already turned 90 degrees turns predictably further.',
      'Rotation can target all pages, odd pages, even pages, or an exact range such as 2, 5-7, using the shared range parser. That matters for duplex scan batches, where only the back sides come out upside down, and for reports with a few wide landscape tables.',
      'The corrected file downloads with -rotated added to its name and opens the right way up in any viewer or printer, because the new angle is saved in the file itself. If a page is still sideways, run it again with another 90 degrees in the same direction.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      '90° clockwise',
      '90° counter-clockwise (270°)',
      '180° upside down',
      'All, odd, even, or range scope',
      'Scanned and text PDFs',
    ],
    limitations: [
      'Only quarter turns are possible: 90, 180, and 270 degrees. A page tilted by a small angle, such as a crooked scan at 5 degrees, cannot be straightened by this tool.',
      'Different pages cannot be rotated by different amounts in one run; rotate one range, download the result, then rotate the next range in that file.',
      'The tool rotates whole pages only; it cannot straighten a single crooked image or text block sitting inside an otherwise upright page.',
      'Encrypted or password-protected PDFs must be unlocked first, since the tool cannot rewrite pages in a file that is still locked.',
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
  },
  'reorder-delete-pdf-pages': {
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
    howItWorks: [
      'The Reorder & Delete PDF Pages tool loads your file twice over: pdf-lib reads the real pages, while PDF.js renders small thumbnails at 0.35 scale so you can see what you are moving. Each page gets a card showing its current output position, its original page number, and its size in points.',
      'Moving a page swaps its place in the working list, duplicating inserts an identical copy directly after the original, and deleting removes the card from the list. Nothing is written to disk until you save; the source file on your device is never touched.',
      'When you save, the tool builds a brand-new PDF and copies the pages in your card order with pdf-lib, so vector text, fonts, and images keep their original quality. The download is named with -reordered added to your original filename.',
      'Thumbnails render for the first 30 pages only, to keep browser memory in check on very long documents. Pages beyond 30 still get a card with their position, original number, and dimensions, and they can still be moved, duplicated, or deleted.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Text-based PDFs',
      'Scanned PDFs',
      'Multi-page PDFs',
      'Portrait and landscape pages',
      'Single-page PDFs',
    ],
    limitations: [
      'There is no undo button: if you delete the wrong page, re-upload your untouched original file and redo the changes, since the tool never modifies the source.',
      'At least one page must remain; the tool refuses to save an empty document, so the delete button is blocked once a single page is left.',
      'Pages move one step at a time with the arrow buttons, so walking a page from the end of a long document to the front takes many clicks.',
      'Bookmarks, outlines, and internal links generally do not survive the rebuild, and rotation cannot be done here — use the PDF Page Rotator tool first, then reorder.',
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
  },
  'pdf-watermark': {
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
    howItWorks: [
      'The PDF Watermark Tool stamps text onto your pages with pdf-lib, drawing each stamp as real vector text in Helvetica Bold. Because the stamp is vector, not a bitmap image, it stays perfectly sharp at any size and prints cleanly on paper.',
      'Each stamp is centered on its page using the width and height of that page, then shifted along its angle with simple trigonometry, so it lands in the same relative spot on portrait and landscape pages alike. The default stamp reads CONFIDENTIAL at 54 points, 22 percent opacity, and a 40-degree angle.',
      'You control the size from 20 to 96 points, the opacity from 8 to 65 percent in 2-percent steps, the angle from minus 60 to plus 60 degrees, and the colour: Neutral Gray, Brand Indigo, or Stamp Red. Lower opacity keeps the text underneath fully readable.',
      'By default every page is stamped; ticking First page only limits the stamp to the cover sheet. The finished file downloads with -watermarked added to its name, and the stamp is drawn over the existing content without editing or replacing it.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Text watermarks',
      'All pages',
      'First page only',
      'Latin (WinAnsi) characters',
      'Portrait and landscape pages',
    ],
    limitations: [
      'Only standard Latin characters work: the Helvetica Bold font covers WinAnsi text, so Cyrillic, Arabic, Chinese, or emoji characters cannot be stamped.',
      'Image or logo watermarks are not supported; this tool stamps text only, so a company logo needs a full PDF editor instead.',
      'The stamp is a normal content object on the page, so anyone with a full PDF editor can select or delete it; it deters casual sharing but does not make a document tamper-proof.',
      'You cannot stamp a custom middle range of pages: the choice is every page or the first page only, and the angle slider stops at 60 degrees either way.',
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
          'Yes. Set the angle slider to 0 degrees for a straight horizontal stamp, or pick any angle from -60 to +60 degrees.',
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
  },
  'add-pdf-page-numbers': {
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
    howItWorks: [
      'The Add PDF Page Numbers tool draws page numbers as vector text in regular Helvetica, using pdf-lib. The numbers sit at a 28-point margin from the page edge, measured from the width and height of each page, so they stay centered or aligned on portrait and landscape pages alike.',
      'Three formats are offered: Page 1 of N for formal packets, the compact 1 / N style, and bare digits with no label. The default font size is 11 points in a dark slate-grey, and numbers are clamped at least 12 points from the edge so they never run off the page.',
      'You can place numbers at Bottom Center, Bottom Right, Bottom Left, or Top Right — Top Right is the header option. A custom start number lets a second volume continue from where the first ended, for example starting at 15, and the total in Page X of N follows the start number.',
      'With Skip cover page enabled, page 1 stays blank and numbering starts on page 2, while the total counts only the numbered pages — a five-page file with a skipped cover is numbered Page 1 of 4 through Page 4 of 4. The result downloads with -numbered added to its name.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Page 1 of N',
      '1 / N',
      'Bare digits',
      'Bottom or top placement',
      'Custom start number',
      'Skip cover page',
    ],
    limitations: [
      'Numbers are stamped alongside any existing ones, so a PDF that already has printed page numbers will show two sets unless you remove the old ones first.',
      'Only standard Arabic numerals are used; Roman numerals, section labels, and custom prefixes such as Section 2 – Page 3 are not available.',
      'You cannot number a custom middle range: numbering covers every page except an optionally skipped cover, and the start number must be a whole number of 1 or more.',
      'A number can sit close to existing footer text on pages with tight margins; check the output and re-run with a smaller font size if a number crowds a line.',
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
  },
  'pdf-metadata-editor': {
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
          'Update Title, Author, Subject, and Keywords for clarity, or click Clear Editable Fields for privacy.',
      },
      {
        title: 'Clear editable fields for privacy',
        description:
          'Use Clear Editable Fields before sharing a file publicly to clear author names and software versions in one click.',
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
        output: 'Click Clear Editable Fields → Save clean PDF with blank Author/Creator',
        explanation: 'Removes employee names and software versions before public web hosting.',
      },
    ],
    benefits: [
      'Exposes hidden author names and software strings browsers show in tabs and properties',
      'One-click Clear Editable Fields clears all 6 standard Info dictionary tags',
      'Updates SEO-relevant Title, Subject, and comma-separated Keywords cleanly',
      'Displays exact PDF point dimensions (`width × height pt`) alongside page count',
    ],
    useCases: [
      'Scrubbing employee names and local tool versions before posting public PDFs',
      'Fixing awkward filenames like "Untitled-2" shown in Chrome/Safari PDF tabs via Title',
      'Adding searchable Subject and Keyword tags to downloadable whitepapers',
      'Auditing vendor or candidate PDF submissions locally',
    ],
    howItWorks: [
      'The PDF Metadata Inspector & Editor reads the Info dictionary stored in the header of your PDF — the block of properties every PDF carries — and shows Title, Author, Subject, Keywords, Creator, and Producer, plus the page count and the exact dimensions of the first page in points.',
      'Editing works by loading the whole document with pdf-lib, setting the six fields, and saving a fresh copy. Clearing a field writes an empty value, so Clear Editable Fields blanks all six tags at once — useful before publishing a file that still names its author or the software that made it.',
      'Keywords are stored as a comma-separated list: the tool splits what you type on commas and trims each entry before saving. The Title you set is what browsers show in the PDF tab, which is why fixing an Untitled-2 title here changes the tab label.',
      'Nothing changes until you click Save Metadata & Download PDF: viewing alone is read-only, and the download is a new file with -metadata added to its name while your original stays untouched.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Title',
      'Author',
      'Subject',
      'Keywords',
      'Creator',
      'Producer',
      'Page dimensions (pt)',
    ],
    limitations: [
      'Only the six standard Info dictionary tags are edited; extended XMP metadata packets, if present, are left untouched by this tool.',
      'Stripping metadata removes hidden tags only; a name or company printed visibly in the body text of a page stays exactly where it is.',
      'Setting the Title changes the browser tab label, but it does not guarantee any particular search ranking or snippet for the file.',
      'Encrypted or password-protected PDFs must be unlocked first, and the page dimensions shown come from the first page only, not from every page.',
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
        question: 'What does "Clear Editable Fields" do?',
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
  },
  'pdf-text-extractor': {
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
    howItWorks: [
      'The PDF Text Extractor opens your file with PDF.js and walks through it page by page, calling getTextContent on each page. That returns the embedded text items with their positions, which the tool joins into lines using the end-of-line flag on each item, then cleans up double spaces and trailing whitespace.',
      'With page markers on, every page begins with a line reading --- Page N ---, so you can cite or find sections accurately; switching markers off joins the pages into continuous prose. The output also reports the page count, a word count, and the UTF-8 byte size of the extracted text.',
      'Extraction is read-only: your PDF is never modified, and the result can be copied with one click or downloaded as a clean UTF-8 .txt file named after your document. From there it pastes straight into Word, Google Docs, or the Word Counter tool for a deeper check.',
      'If the tool reports zero characters, the PDF is almost certainly a scanned image-only file with no text layer to read — the tool says so plainly instead of guessing. Text stored as an image, or drawn with a font that lacks a Unicode map, simply has no readable stream for PDF.js to extract.',
    ],
    supportedFormats: [
      'PDF (.pdf)',
      'Plain text output',
      'UTF-8 .txt download',
      'Page markers (--- Page N ---)',
      'Embedded Unicode text',
      'Multi-page PDFs',
    ],
    limitations: [
      'Scanned image-only PDFs extract zero characters, because no OCR runs in the browser; a scan needs an OCR step elsewhere before its words can be copied.',
      'Formatting is lost: bold, italics, headings, font sizes, and colours are dropped, since the output is plain text only.',
      'Multi-column layouts and tables can come out in reading order rather than visual order, because PDF stores positioned text items, not a semantic table structure — lines may wrap where the columns break.',
      'Filled form values, annotation notes, and hyperlink destinations may not appear, since only the main text layer of each page is read; visible link text is extracted, but the URLs themselves are not.',
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
  },
};
