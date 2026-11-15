// Detail content for EN tools — split out of the registry by
// scripts/h3-split-details.mjs (H-3 page weight). Loaded on demand, one
// batch at a time, only on the tool's own page (src/locales/details.ts).
// Do NOT edit by hand; re-run the splitter if the registry changes.
import type { ToolDetail } from '../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Choose a source image',
        description:
          'Select any PNG, JPG, WebP, or GIF image from your device to decode dimensions and original byte size.',
      },
      {
        title: 'Pick target format, width cap, and quality',
        description:
          'Select WebP or JPG for dramatic byte savings, optionally apply a max-width cap (such as 1920 px or 1280 px), and tune the quality slider from 10% to 100%.',
      },
      {
        title: 'Run the compression',
        description:
          'Click Compress to re-encode the image locally in your browser and see the new byte size instantly.',
      },
      {
        title: 'Compare before and after',
        description:
          'Check the side-by-side preview and the exact byte and percentage savings to make sure the quality still looks right.',
      },
      {
        title: 'Download the compressed file',
        description:
          'Click Download to save the optimized image to your device, then repeat the process for another file whenever you need.',
      },
      {
        title: 'Tip: output bigger than the input?',
        description:
          'If a small PNG grows after compression, switch the output format to WebP or JPG, or lower the quality slider slightly, then compress again.',
      },
    ],
    examples: [
      {
        title: 'Optimizing a 2.4 MB hero photo for a blog article',
        input: '3840×2160 JPG · Output: WebP · Max Width: 1280 px · Quality: 80%',
        output: '1280×720 WebP typically ~85–140 KB (-94% payload reduction)',
        explanation: 'Combining dimension capping with modern WebP compression dramatically accelerates Largest Contentful Paint.',
      },
    ],
    benefits: [
      'Zero server uploads keep unreleased product graphics and private photos completely local',
      'Supports WebP, JPEG (with automatic white alpha matte fill), and PNG re-encoding',
      'Shows real before-and-after byte sizes and percentage savings instantly',
      'Optional max-width caps resize oversized camera photos in one pass',
    ],
    useCases: [
      'Shrinking hero banners and screenshots to improve Core Web Vitals and LCP',
      'Preparing lighter attachments for emails, portals, and CMS uploads',
      'Converting heavy raw screenshots into lightweight WebP web assets',
      'Quickly checking optimal quality vs. visual fidelity tradeoffs',
    ],
    faqs: [
      {
        question: 'Why does compressing a small PNG into PNG sometimes increase its size?',
        answer:
          'Browser Canvas re-encodes PNGs using standard lossless DEFLATE streams without specialized palette quantization tools like pngquant. Switching Output Format to WebP or JPG usually cuts file size dramatically.',
      },
      {
        question: 'Are my photos uploaded to an external compression server?',
        answer:
          'No. All decoding, resizing, and Canvas re-encoding run strictly inside your browser memory.',
      },
      {
        question: 'What happens to transparent backgrounds if I choose JPG?',
        answer:
          'Because JPEG does not support alpha transparency, transparent regions are cleanly filled with solid white (#ffffff) before encoding.',
      },
      {
        question: 'Is the Image Compressor free to use?',
        answer:
          'Yes, it is completely free with no sign-up, no watermarks, and no limits on how many images you compress.',
      },
      {
        question: 'Which image formats can I compress?',
        answer:
          'You can compress PNG, JPG, WebP, and GIF images, and download the result as WebP, JPG, or PNG.',
      },
      {
        question: 'How much can the Image Compressor shrink my photo?',
        answer:
          'Savings depend on the original format and quality setting, but photos converted to WebP at 80% quality often shrink by 50–90%.',
      },
      {
        question: 'Will compressing my image reduce its quality?',
        answer:
          'Lossy formats like WebP and JPG trade a little detail for much smaller files. Use the quality slider and preview to find the balance you like, or keep PNG for lossless results.',
      },
      {
        question: 'Does the Image Compressor resize my image dimensions?',
        answer:
          'Only if you set a max-width cap. Otherwise the pixel dimensions stay the same and only the file size changes.',
      },
      {
        question: 'Can I compress images for email attachments?',
        answer:
          'Yes, compressing first makes large photos small enough to fit email attachment limits without splitting them across messages.',
      },
      {
        question: 'What quality setting should I choose for website images?',
        answer:
          'A quality of 75–85% in WebP usually looks nearly identical to the original while keeping files small enough for fast page loads.',
      },
      {
        question: 'Why should I convert JPG to WebP when compressing?',
        answer:
          'WebP uses more efficient compression than JPG, so the same photo at the same visual quality is usually much smaller.',
      },
      {
        question: 'Can I compress multiple images at once?',
        answer:
          'The compressor processes one image at a time so you can fine-tune quality, width, and format for each photo before downloading it.',
      },
      {
        question: 'Does compression work offline?',
        answer:
          'Yes, once the page has loaded, all compression runs locally in your browser, so it works without an internet connection.',
      },
      {
        question: 'Will my compressed image have a watermark?',
        answer:
          'No, downloaded images never include watermarks or branding, so the compressed file looks exactly like your original image, only smaller.',
      },
      {
        question: 'What is the best format for compressing screenshots?',
        answer:
          'WebP usually gives the smallest files for screenshots. Use PNG only when you need pixel-perfect lossless quality.',
      },
      {
        question: 'Can I compress an image without changing its dimensions?',
        answer:
          'Yes, leave the max-width cap unset and the tool keeps the original width and height while only reducing the file size.',
      },
      {
        question: 'Does the Image Compressor keep image metadata?',
        answer:
          'Browser Canvas re-encoding generally drops EXIF metadata such as camera settings and location, which also helps shrink the file.',
      },
      {
        question: 'Can I use the Image Compressor on my phone?',
        answer:
          'Yes, it works in any modern mobile browser. Pick an image from your photo library and download the compressed result the same way.',
      },
      {
        question: 'What is the maximum image size I can compress?',
        answer:
          'There is no fixed server limit because nothing is uploaded. Very large images are limited only by your device memory and browser Canvas size.',
      },
      {
        question: 'How do I compress an image to under 100 KB?',
        answer:
          'Choose WebP output, set a max width such as 1280 px, and lower the quality slider step by step until the displayed file size drops below 100 KB.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Load your image',
        description:
          'Upload any PNG, JPG, WebP, or GIF image to read its original pixel width and height.',
      },
      {
        title: 'Set width, height, and fit mode',
        description:
          'Enter custom pixels (with optional Lock Aspect Ratio) or select a social preset, then choose Center Cover-Crop or Exact Stretch/Scale.',
      },
      {
        title: 'Choose an output format',
        description:
          'Pick PNG for transparency, JPG for photos, or WebP for the smallest file before rendering.',
      },
      {
        title: 'Render the resized image',
        description:
          'Click Render Resized Image to generate the new version at your exact pixel dimensions.',
      },
      {
        title: 'Review the result and download',
        description:
          'Inspect the preview for sharpness and cropping, check the file size, then click Download to save it.',
      },
      {
        title: 'Tip: image looks stretched or blurry?',
        description:
          'Turn on Lock Aspect Ratio or switch to Center Cover-Crop to avoid distortion, and avoid upscaling far beyond the original size.',
      },
    ],
    examples: [
      {
        title: 'Cropping a tall screenshot into a 1200×630 Open Graph card',
        input: '1440×1600 Screenshot · Preset: OG Share (1200×630) · Fit: Center Cover-Crop',
        output: 'Crisp 1200×630 card centered vertically with zero squishing or distortion.',
        explanation: 'Cover-crop scales proportionally until the target frame is filled, trimming excess edges evenly.',
      },
    ],
    benefits: [
      'One-click Open Graph, YouTube HD, Square, and Avatar pixel presets',
      'Center Cover-Crop prevents awkward stretching when changing aspect ratios',
      'High-quality Canvas imageSmoothingQuality preserves crisp typography and lines',
      'Exports directly to PNG, JPG, or WebP with real file size readout',
    ],
    useCases: [
      'Creating 1200×630 og:image cards for blog posts and landing pages',
      'Preparing 1080×1080 product photos and 512×512 profile avatars',
      'Downscaling high-DPI screenshots before adding them to documentation',
      'Generating exact hero dimensions matching CMS template requirements',
    ],
    faqs: [
      {
        question: 'What is the difference between Center Cover-Crop and Stretch / Exact Scale?',
        answer:
          'Center Cover-Crop preserves natural proportions and trims overflowing edges symmetrically when the new aspect ratio differs. Exact Scale forces the full original picture into the target width and height.',
      },
      {
        question: 'Can I upscale a small photo to 4K cleanly?',
        answer:
          'Canvas interpolation can export larger pixel grids, though upscaling beyond native resolution cannot invent missing fine detail.',
      },
      {
        question: 'What is the maximum supported output dimension?',
        answer:
          'Inputs are capped up to 8000 px per axis to remain safely inside browser Canvas memory limits.',
      },
      {
        question: 'Is the Image Resizer free to use?',
        answer:
          'Yes, it is free with no sign-up, no watermarks, and no limit on how many images you resize.',
      },
      {
        question: 'What is the difference between resizing and cropping an image?',
        answer:
          'Resizing changes the whole image pixel dimensions, while cropping cuts away part of the picture. This tool can do both, including center cover-crop.',
      },
      {
        question: 'Can the Image Resizer make an image 1200x630 for social sharing?',
        answer:
          'Yes, choose the Open Graph preset (1200×630) and the tool sizes your image exactly for link previews on social platforms.',
      },
      {
        question: 'How do I resize an image without stretching it?',
        answer:
          'Keep Lock Aspect Ratio enabled or use Center Cover-Crop, so the tool scales proportionally instead of squashing the picture.',
      },
      {
        question: 'Can I resize an image to a square 1080x1080?',
        answer:
          'Yes, pick the Square preset or enter 1080 for both width and height with Center Cover-Crop enabled.',
      },
      {
        question: 'Does resizing an image reduce its file size?',
        answer:
          'Usually yes, because fewer pixels mean less data, especially when you also export as WebP or JPG.',
      },
      {
        question: 'What image formats can I resize?',
        answer:
          'You can resize PNG, JPG, WebP, and GIF images and export them as PNG, JPG, or WebP.',
      },
      {
        question: 'Will resizing make my image blurry?',
        answer:
          'Downscaling usually stays sharp thanks to high-quality Canvas smoothing. Upscaling beyond the original size can soften fine detail.',
      },
      {
        question: 'Can I resize an image for a profile picture?',
        answer:
          'Yes, use the Avatar preset (512×512) with Center Cover-Crop to get a perfectly square profile photo.',
      },
      {
        question: 'What is Center Cover-Crop in the Image Resizer?',
        answer:
          'It scales the image until it fills the target frame, then trims the overflowing edges evenly from the center so nothing looks stretched.',
      },
      {
        question: 'Does the Image Resizer upload my photos anywhere?',
        answer:
          'No, all resizing happens locally in your browser and your images never leave your device.',
      },
      {
        question: 'Can I resize an image on my phone?',
        answer:
          'Yes, it works in mobile browsers. Upload a photo, enter the new dimensions, and download the result.',
      },
      {
        question: 'What happens to transparency when I resize a PNG?',
        answer:
          'Transparency is preserved as long as you export as PNG or WebP. Exporting as JPG fills transparent areas with white.',
      },
      {
        question: 'Can I resize several images to the same size?',
        answer:
          'The tool resizes one image at a time. Repeat the same preset or dimensions for each image to keep them consistent.',
      },
      {
        question: 'What is the largest image the Image Resizer can handle?',
        answer:
          'Inputs are capped at 8000 px per side to stay within browser Canvas memory limits.',
      },
      {
        question: 'How do I resize an image for YouTube thumbnails?',
        answer:
          'Choose the YouTube HD preset (1280×720) so your thumbnail matches the recommended 16:9 size.',
      },
      {
        question: 'Why is my resized image file still large?',
        answer:
          'Pixel size is only part of the story. Export as WebP or JPG instead of PNG, or use the Image Compressor afterwards to shrink the file further.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Choose target format and options',
        description:
          'Select PNG, JPG, or WebP output, set lossy quality if applicable, and pick a background matte color when converting transparent images into JPG.',
      },
      {
        title: 'Select one or multiple images',
        description:
          'Load a single file or a multi-file batch to render every image cleanly at full native resolution.',
      },
      {
        title: 'Check each file preview',
        description:
          'Review the dimensions and estimated size of every converted image before downloading anything.',
      },
      {
        title: 'Convert the batch',
        description:
          'The tool renders each image at full native resolution in your selected format, right in your browser.',
      },
      {
        title: 'Download converted assets',
        description:
          'Compare each file’s dimensions and new byte size, then download your converted images individually.',
      },
      {
        title: 'Tip: transparent areas turned black?',
        description:
          'If a PNG converted to JPG shows black where it was transparent, re-convert with a matte fill color such as white or your brand color.',
      },
    ],
    examples: [
      {
        title: 'Flattening a transparent SVG/PNG logo onto brand navy for JPG',
        input: 'Transparent logo.png · Target: JPG (90%) · Fill: #FFFFFF',
        output: 'logo.jpg with clean white background and zero black transparency artifacts',
        explanation: 'Explicitly filling the Canvas matte before drawing prevents black halos when converting alpha PNGs to JPEG.',
      },
    ],
    benefits: [
      'Processes batches of multiple images at full resolution without server queues',
      'Configurable JPEG background fill color avoids ugly black transparent fills',
      'Converts WebP downloads back into universally accepted PNG or JPG files',
      'Renders vector SVG files directly into crisp raster PNG or WebP images',
    ],
    useCases: [
      'Converting downloaded .webp files into .png or .jpg for legacy software',
      'Batch-producing modern .webp assets for static websites and CDNs',
      'Exporting crisp PNGs from SVG brand icons for slides or social posts',
      'Checking format size differences across PNG, JPG, and WebP side by side',
    ],
    faqs: [
      {
        question: 'Can this convert Apple HEIC photos?',
        answer:
          'HEIC decoding depends on underlying browser support (Safari supports HEIC natively, whereas Chrome/Firefox typically require PNG, JPG, WebP, SVG, or GIF inputs).',
      },
      {
        question: 'Does converting JPG to PNG improve lost photo detail?',
        answer:
          'No. Converting an already-compressed JPG into PNG preserves it losslessly going forward, though it cannot restore prior JPEG compression artifacts.',
      },
      {
        question: 'Are file limits enforced?',
        answer:
          'Only your device RAM applies; all encoding occurs locally with zero server file size caps.',
      },
      {
        question: 'Is the Image Format Converter free?',
        answer:
          'Yes, it is free to use with no account, no watermarks, and no limits on the number of conversions.',
      },
      {
        question: 'Which formats can I convert from and to?',
        answer:
          'You can convert PNG, JPG, WebP, GIF, and SVG files into PNG, JPG, or WebP output.',
      },
      {
        question: 'Why convert PNG to WebP?',
        answer:
          'WebP files are usually much smaller than PNG at similar visual quality, which makes web pages load faster.',
      },
      {
        question: 'Why convert WebP to JPG or PNG?',
        answer:
          'Some older apps, printers, and upload forms do not accept WebP, so converting back to JPG or PNG restores universal compatibility.',
      },
      {
        question: 'Can I convert multiple images at once?',
        answer:
          'Yes, you can load a batch of images and convert them all to the same target format in one go.',
      },
      {
        question: 'Does converting to JPG remove transparency?',
        answer:
          'Yes, JPG has no alpha channel, so transparent areas are filled with the matte color you choose, such as white.',
      },
      {
        question: 'What matte color should I use when converting a transparent PNG to JPG?',
        answer:
          'White is the safest default. Match your website or slide background color for a seamless look.',
      },
      {
        question: 'Can I convert a photo to WebP and keep its quality?',
        answer:
          'Yes, WebP at 85–90% quality usually looks identical to the original JPG while producing a noticeably smaller file.',
      },
      {
        question: 'Can I convert an SVG logo to PNG?',
        answer:
          'Yes, the tool rasterizes SVG files into crisp PNG or WebP images at their native dimensions.',
      },
      {
        question: 'Does the Image Format Converter upload my images?',
        answer:
          'No, every conversion runs locally in your browser and your files never leave your device.',
      },
      {
        question: 'What quality should I use when converting to JPG?',
        answer:
          'A quality of 85–90% keeps photos looking clean while staying much smaller than PNG. Lower it for smaller files.',
      },
      {
        question: 'Can I convert animated GIFs with this tool?',
        answer:
          'GIF files can be loaded, but conversion renders a single still frame rather than preserving the animation.',
      },
      {
        question: 'Why is my converted PNG larger than the original JPG?',
        answer:
          'PNG is lossless, so a photo converted from compressed JPG to PNG stores every pixel without compression and usually grows in size.',
      },
      {
        question: 'Does the converter keep the original image dimensions?',
        answer:
          'Yes, converted images keep their full native resolution unless you resize them separately with the Image Resizer.',
      },
      {
        question: 'Can I use the Image Format Converter on my phone?',
        answer:
          'Yes, it works in mobile browsers. Select images from your device and download the converted files.',
      },
      {
        question: 'What is the best format for website images?',
        answer:
          'WebP is usually best for photos and graphics on the web, while PNG is better when you need transparency or lossless quality.',
      },
      {
        question: 'Do converted images include watermarks?',
        answer:
          'No, converted files are clean copies with no watermarks or branding added.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Upload an image',
        description:
          'Choose any PNG, JPG, WebP, or GIF image to load it into the interactive Canvas preview.',
      },
      {
        title: 'Rotate, flip, or apply filters',
        description:
          'Use Rotate Left/Right buttons, Horizontal/Vertical Flip toggles, Grayscale switch, and Brightness/Contrast sliders.',
      },
      {
        title: 'Preview the result live',
        description:
          'Check the Canvas preview after each change to confirm the orientation and filter strength look right.',
      },
      {
        title: 'Reset if needed',
        description:
          'Use the Reset button to undo all rotations, flips, and filter changes and start again from the original.',
      },
      {
        title: 'Choose an output format',
        description:
          'Pick PNG to keep transparency, JPG for photos, or WebP for smaller files before exporting.',
      },
      {
        title: 'Export edited image',
        description:
          'Click Download to save your rotated, flipped, or filtered image to your device.',
      },
    ],
    examples: [
      {
        title: 'Fixing a sideways smartphone photo and boosting brightness',
        input: '3024×4032 photo rotated 90° clockwise · Brightness: 110% · Contrast: 105%',
        output: '4032×3024 upright image exported cleanly with EXIF orientation baked into pixels.',
        explanation: 'Canvas swaps width and height automatically on 90° and 270° turns.',
      },
    ],
    benefits: [
      'Live pixel preview updates immediately with zero upload latency',
      'Bakes orientation cleanly into actual pixel coordinates rather than fragile EXIF flags',
      'Combines rotation, mirroring, and color/tone tweaks in one clean workspace',
      'Non-destructive Reset button restores defaults anytime',
    ],
    useCases: [
      'Straightening scanned documents or receipts captured sideways',
      'Un-mirroring backwards webcam captures or flipped screenshots',
      'Creating high-contrast grayscale graphics for print or documentation',
      'Quickly brightening underexposed product photos before listing',
    ],
    faqs: [
      {
        question: 'Does rotating an image re-encode the pixels?',
        answer:
          'Yes. Drawing onto HTML5 Canvas bakes the new orientation and filter adjustments permanently into every pixel so all apps display it right-side up.',
      },
      {
        question: 'Can I preserve transparent backgrounds when rotating or flipping?',
        answer:
          'Yes—keep Output Format set to PNG or WebP to retain full alpha transparency around rotated/flipped graphics.',
      },
      {
        question: 'Are edits saved on your servers?',
        answer:
          'No. Everything runs inside your own browser tab and is discarded when you close the page.',
      },
      {
        question: 'Is the rotate image tool free to use?',
        answer:
          'Yes, it is completely free with no sign-up, no watermarks, and no limits.',
      },
      {
        question: 'How do I rotate an image 90 degrees?',
        answer:
          'Upload your image and click Rotate Right or Rotate Left. Each click turns the picture by 90 degrees.',
      },
      {
        question: 'Can I rotate an image 180 degrees?',
        answer:
          'Yes, click Rotate twice in the same direction to flip the image upside down.',
      },
      {
        question: 'How do I flip an image horizontally?',
        answer:
          'Use the Horizontal Flip toggle to mirror the image left to right, which is useful for fixing mirrored selfies.',
      },
      {
        question: 'What is the difference between flipping and rotating an image?',
        answer:
          'Rotating turns the image around its center, while flipping mirrors it like a reflection in a mirror.',
      },
      {
        question: 'Can I rotate a photo without losing quality?',
        answer:
          'The tool re-encodes the image through Canvas, so exporting as PNG keeps it lossless. JPG export applies light compression.',
      },
      {
        question: 'Does rotating an image change its dimensions?',
        answer:
          'A 90- or 270-degree rotation swaps width and height. A 180-degree rotation keeps the same dimensions.',
      },
      {
        question: 'Can I make a photo black and white?',
        answer:
          'Yes, turn on the Grayscale switch to convert your photo to black and white instantly.',
      },
      {
        question: 'How do I brighten a dark photo?',
        answer:
          'Move the Brightness slider above 100% and add a little Contrast to keep the image from looking washed out.',
      },
      {
        question: 'Can I rotate a PNG and keep its transparency?',
        answer:
          'Yes, export as PNG or WebP to preserve transparent areas after rotating or flipping.',
      },
      {
        question: 'Are my edited photos uploaded to a server?',
        answer:
          'No, all rotation, flipping, and filtering runs locally in your browser and nothing is uploaded.',
      },
      {
        question: 'Can I rotate an image on my phone?',
        answer:
          'Yes, it works in mobile browsers. Upload a sideways photo, rotate it upright, and download the fixed version.',
      },
      {
        question: 'Why is my photo sideways after uploading it?',
        answer:
          'Some phones store orientation as an EXIF flag that not every app reads. This tool bakes the correct orientation into the pixels so it displays upright everywhere.',
      },
      {
        question: 'Can I undo a rotation or filter?',
        answer:
          'Yes, the Reset button restores the original image and default filter settings at any time.',
      },
      {
        question: 'Does the tool fix crooked or tilted photos?',
        answer:
          'It rotates in 90-degree steps, so it fixes sideways or upside-down photos. Small tilt corrections are not supported.',
      },
      {
        question: 'What image formats can I rotate and flip?',
        answer:
          'You can edit PNG, JPG, WebP, and GIF images and export them as PNG, JPG, or WebP.',
      },
      {
        question: 'Can I rotate and flip an image in one go?',
        answer:
          'Yes, you can combine rotations, horizontal or vertical flips, and filters before exporting a single finished image.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Choose Encode or Decode mode',
        description:
          'Use Image → Base64 Data URI to encode a file, or Base64 → Image Preview to render pasted Base64 payloads.',
      },
      {
        title: 'Load an image or paste Base64 text',
        description:
          'Select any PNG, JPG, WebP, SVG, GIF, or ICO asset (or paste either a full data:image/... string or raw Base64 text).',
      },
      {
        title: 'Check the size comparison',
        description:
          'Compare the original file size with the Base64 string size to see the roughly 33% overhead before embedding it.',
      },
      {
        title: 'Pick the output format you need',
        description:
          'Choose the full Data URI, raw Base64 string, HTML <img> tag, or CSS background-image snippet.',
      },
      {
        title: 'Copy snippet or download preview',
        description:
          'Copy the Data URI, raw Base64, HTML <img> tag, or CSS background snippet—or download a decoded preview image.',
      },
      {
        title: 'Tip: pasted Base64 not working?',
        description:
          'Make sure you pasted the complete string without line breaks, and check that the decoder added the correct data:image/... prefix for your format.',
      },
    ],
    examples: [
      {
        title: 'Inlining a 2 KB SVG checkmark inside CSS',
        input: 'check.svg (2,048 bytes)',
        output: 'data:image/svg+xml;base64,... (~2.7 KB) + ready-to-paste CSS background-image rule',
        explanation: 'Saves an extra HTTP round-trip for tiny UI icons and offline single-file HTML emails.',
      },
    ],
    benefits: [
      'Instant comparison of binary file size vs. ~33% Base64 string overhead',
      'Generates Data URI, raw Base64, HTML <img>, and CSS background snippets simultaneously',
      'Automatically prepends PNG data URI prefix if you paste raw Base64 without a header',
      'Keeps proprietary assets and API response blobs offline inside your browser',
    ],
    useCases: [
      'Embedding tiny icons inside CSS bundles or self-contained HTML reports',
      'Debugging image Data URIs returned by JSON APIs or webhooks',
      'Inlining small brand badges in transactional HTML email templates',
      'Inspecting encoded image payloads copied from browser DevTools',
    ],
    faqs: [
      {
        question: 'When should I use Base64 images instead of normal image URLs?',
        answer:
          'Use Base64 Data URIs sparingly for very small icons (typically under 5–10 KB) or single-file HTML exports. Base64 expands data size by ~33% and cannot be cached independently across pages like normal URLs.',
      },
      {
        question: 'Can the decoder preview raw Base64 strings without the "data:image/png;base64," prefix?',
        answer:
          'Yes! Switching to Base64 → Image Preview automatically strips whitespace and prepends a standard PNG Data URI header if one is missing.',
      },
      {
        question: 'Does it work with vector SVGs?',
        answer:
          'Yes. Uploading an .svg file creates a valid data:image/svg+xml;base64,... URI alongside HTML and CSS snippets.',
      },
      {
        question: 'Is the image to Base64 converter free?',
        answer:
          'Yes, it is free with no sign-up, no watermarks, and no limits on how many images you encode or decode.',
      },
      {
        question: 'What is a Base64 Data URI?',
        answer:
          'A Data URI embeds an image directly inside a web page, stylesheet, or email as text, starting with data:image/...;base64, followed by the encoded data.',
      },
      {
        question: 'Why is the Base64 string bigger than my image?',
        answer:
          'Base64 encoding represents binary data with text characters, which adds about 33% overhead to the original file size.',
      },
      {
        question: 'What size image is best for Base64 encoding?',
        answer:
          'Keep Base64 images small, typically under 5–10 KB, such as icons and logos. Larger images bloat your HTML or CSS and cannot be cached separately.',
      },
      {
        question: 'Can I convert a JPG to Base64?',
        answer:
          'Yes, JPG, PNG, WebP, SVG, GIF, and ICO files can all be encoded into Base64 Data URIs.',
      },
      {
        question: 'How do I use a Base64 image in HTML?',
        answer:
          'Copy the generated HTML <img> tag and paste it into your page. The src attribute already contains the full Data URI.',
      },
      {
        question: 'How do I use a Base64 image in CSS?',
        answer:
          'Copy the CSS background-image snippet and paste it into your stylesheet to display the image without a separate file request.',
      },
      {
        question: 'Can I decode a Base64 string back into an image?',
        answer:
          'Yes, switch to Base64 → Image Preview, paste the string, and the tool renders the image so you can preview or download it.',
      },
      {
        question: 'Do I need the data:image/png;base64, prefix when decoding?',
        answer:
          'No, if you paste raw Base64 without a header, the tool automatically adds a standard PNG Data URI prefix.',
      },
      {
        question: 'Does the image to Base64 tool upload my files?',
        answer:
          'No, encoding and decoding run entirely in your browser and your images never leave your device.',
      },
      {
        question: 'Can I encode an SVG to Base64?',
        answer:
          'Yes, SVG files produce a valid data:image/svg+xml;base64,... URI along with matching HTML and CSS snippets.',
      },
      {
        question: 'What is the difference between raw Base64 and a Data URI?',
        answer:
          'Raw Base64 is only the encoded text, while a Data URI adds the data:image/...;base64, header so browsers know the image type.',
      },
      {
        question: 'Can I use Base64 images in emails?',
        answer:
          'Yes, small Base64 images work well in self-contained HTML emails, though some email clients limit Data URI support, so test before sending.',
      },
      {
        question: 'Is there a file size limit for encoding?',
        answer:
          'There is no server limit because nothing is uploaded. Very large images are limited only by your browser memory, and huge Base64 strings are impractical to paste.',
      },
      {
        question: 'Can I convert a Base64 image to a downloadable file?',
        answer:
          'Yes, decode the string in Base64 → Image Preview mode and use the download option to save it as a regular image file.',
      },
      {
        question: 'Does Base64 encoding change the image quality?',
        answer:
          'No, Base64 is a lossless text representation of the exact same bytes, so the decoded image is identical to the original.',
      },
      {
        question: 'Can I use the image to Base64 converter on my phone?',
        answer:
          'Yes, it works in mobile browsers. Encode an image from your photo library or paste a Base64 string to preview it.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Pick Foreground and Background colors',
        description:
          'Use the color pickers, HEX inputs, or individual R/G/B inputs—or start from accessible presets and swap colors with one click.',
      },
      {
        title: 'Adjust shades until the ratio passes',
        description:
          'Nudge the lightness or individual RGB channels and watch the ratio update live until your pairing reaches the AA or AAA threshold you need.',
      },
      {
        title: 'Review the WCAG 2.1 scorecard',
        description:
          'Check exact contrast ratio (e.g., 12.63 : 1) and instant PASS/FAIL status across AA Normal, AA Large/UI, AAA Normal, and AAA Large benchmarks.',
      },
      {
        title: 'Preview the pairing in real UI text',
        description:
          'Read the live typography and bordered UI control card previews to see how your colors actually look as body text, headings, and buttons.',
      },
      {
        title: 'Extract swatches from an image (optional)',
        description:
          'Upload any screenshot or brand logo at the bottom to extract up to 8 distinct dominant colors and apply them directly to Foreground or Background.',
      },
      {
        title: 'Copy the colors and fix failing pairs',
        description:
          'Copy the synced HEX, RGB, or HSL values into your CSS. If a pair fails, darken the text or lighten the background until the scorecard turns green.',
      },
    ],
    examples: [
      {
        title: 'Auditing primary CTA button readability',
        input: 'Foreground: #FFFFFF · Background: #4F46E5',
        output: 'Contrast Ratio 6.29 : 1 — Passes WCAG AA Normal, AA Large, and AAA Large',
        explanation: 'Uses official sRGB gamma-linearized relative luminance (0.2126R + 0.7152G + 0.0722B).',
      },
    ],
    benefits: [
      'Exact WCAG 2.1 sRGB relative luminance formula—zero approximations',
      'Live typography and bordered UI control card previews the active pairing',
      'Built-in Canvas image color quantizer pulls brand swatches without extra tools',
      'Displays synchronized HEX, RGB, and HSL strings ready to paste into CSS',
    ],
    useCases: [
      'Auditing design systems, SaaS dashboards, and dark-mode themes for WCAG AA/AAA compliance',
      'Pulling dominant brand colors from client logos directly into accessible UI palettes',
      'Fixing low-contrast badge, placeholder, or button label pairings before launch',
      'Teaching accessible visual hierarchy with live large- vs. normal-text previews',
    ],
    faqs: [
      {
        question: 'What contrast ratio is required for WCAG Level AA vs. Level AAA?',
        answer:
          'WCAG 2.1 Level AA requires at least 4.5:1 for normal body text and 3.0:1 for large text (18 pt+ or bold 14 pt+) and UI components. Level AAA increases these thresholds to 7.0:1 for normal text and 4.5:1 for large text.',
      },
      {
        question: 'How does the image palette extractor work?',
        answer:
          'It draws your uploaded image onto an offscreen HTML5 Canvas, ignores transparent pixels, clusters nearby RGB buckets, and surfaces up to 8 visually distinct dominant swatches by area coverage.',
      },
      {
        question: 'Does the Color Contrast Checker also convert between HEX, RGB, and HSL?',
        answer:
          'Yes. Updating any color picker, HEX input, or R/G/B field recalculates HEX, rgb(), and hsl() representations automatically.',
      },
      {
        question: 'What counts as large text under WCAG contrast rules?',
        answer:
          'Large text is 18 pt (24 px) or larger, or 14 pt (18.66 px) bold or larger. Large text only needs a 3.0:1 ratio for AA and 4.5:1 for AAA, while normal text needs 4.5:1 for AA and 7.0:1 for AAA.',
      },
      {
        question: 'Is the Color Contrast Checker free to use?',
        answer:
          'Yes, it is completely free with no sign-up. All checks run locally in your browser, so you can test as many color pairs as you like.',
      },
      {
        question: 'Do my uploaded images leave my device?',
        answer:
          'No. Palette extraction happens entirely in your browser using an offscreen canvas, and your images are never uploaded to any server.',
      },
      {
        question: 'How is the contrast ratio calculated?',
        answer:
          'It uses the official WCAG 2.1 formula: the relative luminance of each color is computed from gamma-linearized sRGB values, and the ratio is (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color.',
      },
      {
        question: 'Can I check contrast for dark mode designs?',
        answer:
          'Yes. Enter your dark background and light text colors the same way, and the scorecard shows whether the pairing passes AA and AAA for both normal and large text.',
      },
      {
        question: 'Why does my color pair fail AA even though it looks readable to me?',
        answer:
          'Perceived readability and measured luminance contrast are different things. Colors that look distinct to you may still be close in luminance, especially mid-tone hues, so trust the ratio and adjust lightness until it passes.',
      },
      {
        question: 'What should I do if my brand color fails the contrast test?',
        answer:
          'Keep the brand color for large headings or decorative elements, and use a darker shade of it for body text. You can also lighten the background or add a semi-opaque overlay behind the text.',
      },
      {
        question: 'Does the checker work for UI components like buttons and icons?',
        answer:
          'Yes. WCAG 2.1 requires a 3.0:1 ratio for non-text UI components such as button borders, input outlines, and meaningful icons, and the AA Large/UI column on the scorecard covers exactly that.',
      },
      {
        question: 'Can I test placeholder text and disabled states with this tool?',
        answer:
          'Yes, enter the placeholder or disabled-state color as the foreground. Note that disabled controls are exempt from WCAG contrast requirements, but placeholder text that conveys information is not.',
      },
      {
        question: 'How many colors can the palette extractor pull from an image?',
        answer:
          'Up to 8 distinct dominant colors. Similar shades are clustered together, so the swatches represent the most visually prominent colors in the image rather than every shade present.',
      },
      {
        question: 'Can I apply an extracted swatch directly as my foreground or background?',
        answer:
          'Yes. Each extracted swatch has a button to send it straight into the Foreground or Background slot, so you can test it against your other color immediately.',
      },
      {
        question: 'What image formats work with the palette extractor?',
        answer:
          'Any image your browser can display, including PNG, JPG, WebP, and SVG screenshots or logos. Transparent pixels are ignored when clustering colors.',
      },
      {
        question: 'Does the Color Contrast Checker test color blindness?',
        answer:
          'No, it measures luminance contrast only. Contrast is one part of accessibility; for color-blind safety, also avoid relying on color alone to convey meaning and check your palette with a color-blindness simulator.',
      },
      {
        question: 'Can I use the HEX, RGB, and HSL values in my CSS?',
        answer:
          'Yes. All three formats stay in sync as you edit, and you can copy any of them directly into your stylesheet, design tokens, or Tailwind config.',
      },
      {
        question: 'What is the difference between AA and AAA in practice?',
        answer:
          'AA is the legal and practical standard most sites target, while AAA is stricter and often hard to meet for brand-colored body text. Aim for AAA where you can, but never ship below AA for text.',
      },
      {
        question: 'Does the tool store my color choices or images?',
        answer:
          'No. Everything runs locally in your browser tab, nothing is uploaded, and your colors and images disappear when you close or refresh the page.',
      },
      {
        question: 'Can I check more than one color pair at a time?',
        answer:
          'The checker tests one foreground/background pair at a time, but you can swap colors in a single click and re-test as many pairs as you need in seconds.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'Upload a QR image or enable camera scanning',
        description:
          'Drop or select any PNG, JPG, WebP, or SVG QR screenshot—or click Start Camera Scanner when you want to read a printed QR code live.',
      },
      {
        title: 'Let the scanner decode the code',
        description:
          'The tool runs multi-scale, inversion-aware decoding locally in your browser, so even dark-mode or inverted QR codes are read without uploading anything.',
      },
      {
        title: 'Inspect and copy decoded text',
        description:
          'Review the decoded payload, detected payload category, and safe link preview (only http/https URLs become clickable links), then copy with one click.',
      },
      {
        title: 'Check the payload type before acting',
        description:
          'See whether the QR holds a URL, Wi-Fi credentials, vCard contact, or plain text, and verify the destination looks right before visiting or connecting.',
      },
      {
        title: 'Switch to vCard Contact QR Builder (optional)',
        description:
          'Build a scannable VCF 3.0 business card QR code with name, organization, phone, email, and website, and download as PNG or SVG.',
      },
      {
        title: 'Download, print, or troubleshoot a failed scan',
        description:
          'Download your vCard QR or re-upload a sharper, well-lit screenshot if decoding fails — cropped, blurry, or tiny QR codes are the most common cause.',
      },
    ],
    examples: [
      {
        title: 'Verifying a printed marketing flyer screenshot before ordering prints',
        input: 'Upload flyer-qr.png (600×600 PNG)',
        output: 'Decoded Payload · Website URL: https://example.com/?utm_source=print',
        explanation: 'Runs multi-scale inversion-aware decoding locally so inverted dark-mode QR codes also decode reliably.',
      },
    ],
    benefits: [
      'Decodes normal and color-inverted QR screenshots cleanly without mobile apps',
      'Optional camera stream stops immediately upon decode or tab exit',
      'Classifies decoded payloads cleanly without automatically redirecting away',
      'Includes full vCard 3.0 PNG & SVG QR generation for digital business cards',
    ],
    useCases: [
      'Double-checking UTM destination URLs inside QR assets before printing posters',
      'Extracting Wi-Fi strings or text tokens from desktop screenshots',
      'Scanning physical QR codes on a laptop using your built-in webcam',
      'Creating scannable vCard contact QR codes for resumes, badges, and presentations',
    ],
    faqs: [
      {
        question: 'What if my device has no camera or denies camera permission?',
        answer:
          'You never need a camera to use this tool—simply take a screenshot or photo and upload it via Upload QR Code Image, which runs identically without camera permissions.',
      },
      {
        question: 'Does scanning a QR code automatically open malicious websites?',
        answer:
          'No. Decoded text is displayed safely inside a read-only textarea first so you can inspect any URL before choosing whether to visit it.',
      },
      {
        question: 'Need a URL, Wi-Fi, or custom color QR generator instead of a vCard?',
        answer:
          'Try our dedicated QR Code Generator tool in Social Media Tools for custom foreground/background colors, error correction levels, and URL/text QR codes.',
      },
      {
        question: 'Is the QR Code Scanner free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and both scanning and vCard QR generation run locally in your browser.',
      },
      {
        question: 'Are my uploaded QR images sent to a server?',
        answer:
          'No. Decoding happens entirely in your browser using jsQR, so your screenshots and photos never leave your device.',
      },
      {
        question: 'What image formats can the QR Code Scanner read?',
        answer:
          'PNG, JPG, WebP, and SVG images all work. Screenshots taken on a phone or computer are the most common way to supply a QR code.',
      },
      {
        question: 'Why did my QR code fail to scan?',
        answer:
          'The usual causes are a blurry or low-resolution image, a QR code cropped too tightly, glare on a printed code, or a code that is simply too small in the frame. Re-upload a sharper, larger, well-lit capture.',
      },
      {
        question: 'Can the scanner read inverted or dark-mode QR codes?',
        answer:
          'Yes. The decoder is inversion-aware, so QR codes with light modules on a dark background decode just as reliably as standard black-on-white codes.',
      },
      {
        question: 'What kinds of QR payloads can it detect?',
        answer:
          'It classifies decoded content automatically, including website URLs, Wi-Fi network credentials, vCard contacts, and plain text, so you know what a code does before you act on it.',
      },
      {
        question: 'Is it safe to scan a QR code I found in public?',
        answer:
          'Scanning is safe here because nothing opens automatically — you see the decoded text first. Always read the URL carefully and avoid entering passwords or payment details on pages a random QR code leads you to.',
      },
      {
        question: 'Can I scan a QR code with my laptop webcam?',
        answer:
          'Yes. Click Start Camera Scanner, allow camera access when your browser asks, and hold the printed code in front of the camera. The stream stops automatically once the code decodes or when you leave the tab.',
      },
      {
        question: 'Does the camera keep recording after a scan?',
        answer:
          'No. The camera stream stops immediately upon a successful decode, and it also stops if you switch tabs or close the scanner.',
      },
      {
        question: 'What is a vCard QR code?',
        answer:
          'A vCard QR code stores contact details — name, organization, phone, email, and website — in the standard VCF 3.0 format, so scanning it with a phone offers to save the contact directly.',
      },
      {
        question: 'Can I download my vCard QR code as PNG and SVG?',
        answer:
          'Yes. The vCard builder exports both formats: PNG for documents and presentations, and SVG for crisp printing at any size.',
      },
      {
        question: 'Will the vCard QR code work on both iPhone and Android?',
        answer:
          'Yes. Both platforms recognize standard VCF 3.0 vCard QR codes and offer to add the contact when scanned with the built-in camera.',
      },
      {
        question: 'Can I scan a QR code from a video or screen recording?',
        answer:
          'Not directly, but you can pause the video, take a screenshot of the frame showing the QR code, and upload that screenshot to the scanner.',
      },
      {
        question: 'Does the QR Code Scanner work offline?',
        answer:
          'Once the page has loaded, decoding runs fully in your browser with no network requests, so you can scan uploaded images even without an internet connection.',
      },
      {
        question: 'Can I scan multiple QR codes in one image?',
        answer:
          'The scanner decodes one QR code at a time. If an image contains several codes, crop the image so each code is uploaded separately.',
      },
      {
        question: 'What should I check before printing a QR code on a flyer?',
        answer:
          'Upload a screenshot of the finished design and scan it here to confirm the destination URL, UTM parameters, and payload are exactly right before you order prints.',
      },
      {
        question: 'Does the tool store my scanned QR codes or camera images?',
        answer:
          'No. Nothing is uploaded, logged, or stored. Decoded results exist only in your current browser tab and disappear when you close it.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Choose Random Password or Diceware Passphrase',
        description:
          'Use Random Password for maximum character-set density or Diceware Passphrase for easier human typing with strong multi-word entropy.',
      },
      {
        title: 'Customize length, character sets, and batch count',
        description:
          'Adjust length (8–64 chars), toggle Uppercase/Lowercase/Digits/Symbols, optionally exclude lookalike characters (0/O/1/l/I), or select 3–8 Diceware words.',
      },
      {
        title: 'Generate your password or passphrase',
        description:
          'Click generate to create fresh output using your browser’s hardware-backed CSPRNG with rejection sampling, so every character has exactly equal probability.',
      },
      {
        title: 'Check the entropy score',
        description:
          'Inspect exact Shannon entropy bits (~72–118+ bits recommended) to see how much guessing work the result represents before you use it.',
      },
      {
        title: 'Regenerate and copy securely',
        description:
          'Not happy with a result? Regenerate for a fresh one, then copy a single password or the full batch with one click.',
      },
      {
        title: 'Save it in a password manager and refresh to clear',
        description:
          'Paste the result into your password manager right away. Refreshing the page wipes the generated passwords from memory, so never rely on the tab to remember them.',
      },
    ],
    examples: [
      {
        title: '18-character mixed password with full character pool',
        input: 'Length: 18 · Upper + Lower + Digits + Symbols (Pool: 88 chars)',
        output: '~116.3 bits of cryptographic entropy · Guarantees >= 1 character from each enabled class',
        explanation: 'Uses rejection sampling (discarding uint32 samples >= floor(2^32 / pool) * pool) for strict uniformity.',
      },
    ],
    benefits: [
      'Strictly avoids insecure Math.random()—uses hardware-seeded window.crypto.getRandomValues',
      'Eliminates modulo bias via true rejection sampling and unbiased Fisher-Yates shuffle',
      'Guarantees at least one character from every selected character class without fixed slots',
      'Nothing is logged, stored, or transmitted over the network',
    ],
    useCases: [
      'Securing cloud accounts, SSH keys, database credentials, and password-manager master vaults',
      'Generating human-typable Diceware passphrases for disk encryption or Wi-Fi guest keys',
      'Provisioning temporary onboarding credentials in bulk (up to 10 per click)',
      'Comparing bit-entropy impact of 12 vs. 18 vs. 24 characters',
    ],
    faqs: [
      {
        question: 'Why does rejection sampling with crypto.getRandomValues matter?',
        answer:
          'Simply computing randomUint32 % poolSize slightly favors lower-index characters when 2^32 is not evenly divisible by poolSize (modulo bias). Rejection sampling discards out-of-range draws so every character in the pool has exact mathematical equal probability.',
      },
      {
        question: 'Should I use a random password or a passphrase?',
        answer:
          'Both are excellent when long enough: 16+ mixed characters works everywhere in password managers, while a 5- to 6-word passphrase is far easier to type manually on TVs, phones, or disk decryption prompts.',
      },
      {
        question: 'Are generated passwords stored anywhere?',
        answer:
          'Never. Passwords live solely in ephemeral React memory in your tab and disappear on refresh.',
      },
      {
        question: 'Is the Password Generator free to use?',
        answer:
          'Yes, it is completely free with no sign-up. You can generate as many passwords and passphrases as you need, right in your browser.',
      },
      {
        question: 'How are passwords generated here?',
        answer:
          'They are created locally in your browser using window.crypto.getRandomValues, your browser’s hardware-backed cryptographically secure random number generator, with rejection sampling to remove modulo bias.',
      },
      {
        question: 'Are my generated passwords sent to a server?',
        answer:
          'No. Generation happens entirely on your device, and nothing is stored, logged, or transmitted over the network.',
      },
      {
        question: 'How long should my password be?',
        answer:
          'For important accounts, use at least 16 characters with mixed character classes, which gives roughly 100+ bits of entropy. Shorter passwords are fine only for low-value accounts, and length matters more than complexity.',
      },
      {
        question: 'What is password entropy, and how many bits do I need?',
        answer:
          'Entropy measures how much guessing work a password represents. Around 70–80 bits is strong for most accounts, while 100+ bits is recommended for master passwords, encryption keys, and high-value accounts.',
      },
      {
        question: 'What is a Diceware passphrase?',
        answer:
          'A Diceware passphrase is several random words picked from a fixed wordlist, such as "correct horse battery staple". Five or six random words give strong entropy while remaining much easier to type and remember than random characters.',
      },
      {
        question: 'Should I exclude ambiguous characters like 0, O, 1, l, and I?',
        answer:
          'Yes, when you will type the password by hand or read it aloud. Excluding lookalikes prevents mistyped logins, and with a long enough password the small entropy loss is negligible.',
      },
      {
        question: 'Can I generate several passwords at once?',
        answer:
          'Yes. You can generate a batch of up to 10 passwords in one click, which is handy when provisioning accounts or onboarding new team members.',
      },
      {
        question: 'Does the generator guarantee at least one character from each selected class?',
        answer:
          'Yes. Every generated password includes at least one character from each character class you enabled, without placing those characters in fixed, predictable positions.',
      },
      {
        question: 'Can I use these passwords for my password manager master password?',
        answer:
          'A long passphrase works well as a master password because you must type it from memory. Generate a 6-word Diceware passphrase, memorize it, and store your other passwords in the manager.',
      },
      {
        question: 'Why not use Math.random() for passwords?',
        answer:
          'Math.random() is not cryptographically secure: its output can be predicted if an attacker learns its internal state. This tool uses only window.crypto.getRandomValues, which is designed for security-sensitive randomness.',
      },
      {
        question: 'Will a generated password work on every website?',
        answer:
          'Almost always. If a site rejects symbols or limits length, reduce the length or disable the symbol class and regenerate until the site accepts it.',
      },
      {
        question: 'Can I reuse a generated password on multiple sites?',
        answer:
          'You should not. Reusing a password means one breach exposes every account that shares it, so generate a unique password for each site and store them in a password manager.',
      },
      {
        question: 'What happens to my passwords if I refresh the page?',
        answer:
          'They are gone. Generated passwords exist only in the tab’s temporary memory, so copy or save them in a password manager before refreshing or closing the page.',
      },
      {
        question: 'Does the Password Generator work offline?',
        answer:
          'Yes. Once the page has loaded, generation runs fully in your browser with no network requests, so it works offline.',
      },
      {
        question: 'How do I pick between a password and a passphrase for Wi-Fi?',
        answer:
          'Use a passphrase for Wi-Fi keys you type on many devices, since words are easier to enter correctly, and a random character password when a password manager will fill it in for you.',
      },
      {
        question: 'Is a generated password guaranteed to be unhackable?',
        answer:
          'No password can be guaranteed unhackable — a site can still be breached or tricked by phishing. A long, unique, randomly generated password stored in a password manager is, however, one of the strongest practical defenses you can use.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Select a file from your device',
        description:
          'Choose an archive, installer, PDF, or binary asset. The file is read strictly into local browser memory (recommended under 500 MB) and never uploaded.',
      },
      {
        title: 'Wait for the digests to compute',
        description:
          'The browser calculates SHA-256, SHA-512, SHA-384, and SHA-1 in parallel using hardware-accelerated Web Crypto. Larger files take a few seconds.',
      },
      {
        title: 'Inspect computed cryptographic digests',
        description:
          'Review SHA-256, SHA-512, SHA-384, and legacy SHA-1 hexadecimal hashes along with file metadata and download a standard .sha256 text file if needed.',
      },
      {
        title: 'Verify against a published checksum',
        description:
          'Paste the expected SHA-256/512/384/1 string—or an entire "<hash>  filename" line from a .sha256sum file—to confirm an exact match or catch corruption/tampering.',
      },
      {
        title: 'Copy or export the hash',
        description:
          'Copy any digest with one click, or download the standard .sha256 text file to ship alongside a release or keep as a verification record.',
      },
      {
        title: 'Act on a mismatch or a large file',
        description:
          'If the hashes do not match, delete the file and re-download it from the official source. For files over ~500 MB, use shasum -a 256 or certutil instead, since the browser loads the whole file into memory.',
      },
    ],
    examples: [
      {
        title: 'Verifying a downloaded release binary against a vendor .sha256sum',
        input: 'File: app-v2.tar.gz · Expected: "e3b0c442...  app-v2.tar.gz"',
        output: 'Checksum Verified! Matches the computed SHA-256 digest cleanly.',
        explanation: 'Automatically extracts the leading hash token, ignores case, and compares against all 4 computed algorithms.',
      },
    ],
    benefits: [
      'Uses native C++/hardware-accelerated browser Web Crypto SubtleCrypto',
      'Supports pasting full "<hash>  filename" lines from .sha256sum release manifests',
      'Exports standard filename.sha256 verification files in one click',
      'Zero file uploads keep confidential builds and contracts private',
    ],
    useCases: [
      'Verifying Linux ISOs, CLI binaries, or open-source tarballs without opening a terminal',
      'Confirming exact byte-for-byte delivery of legal or financial archives',
      'Generating .sha256 release manifests for small client deliverables',
      'Detecting truncated or corrupted downloads before extraction',
    ],
    faqs: [
      {
        question: 'Is there a maximum file size limit?',
        answer:
          'Because browser File.arrayBuffer() loads the whole file into client RAM at once, files up to ~300–500 MB work smoothly, while multi-gigabyte ISOs may exceed browser memory quotas—for multi-GB files, native CLI tools (shasum -a 256 or certutil) are recommended.',
      },
      {
        question: 'Why is SHA-1 labeled legacy compatibility only?',
        answer:
          'SHA-1 has known practical collision weaknesses and should not be trusted for adversarial security guarantees; prefer SHA-256 or SHA-512 whenever possible.',
      },
      {
        question: 'Looking to hash raw text strings instead of binary files?',
        answer:
          'Check our Hash Generator tool in Developer Tools for instant UTF-8 text hashing.',
      },
      {
        question: 'Is the File Hash Verifier free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and you can verify as many files as you like.',
      },
      {
        question: 'Are my files uploaded anywhere when I verify them?',
        answer:
          'No. Hashing happens entirely in your browser using the Web Crypto API, so your files never leave your device — which is exactly why it is safe for confidential builds and contracts.',
      },
      {
        question: 'What is a file hash, and why should I check it?',
        answer:
          'A hash is a fixed-length fingerprint computed from a file’s exact bytes. If even one byte changes, the hash changes completely, so comparing hashes proves a download arrived intact and unmodified.',
      },
      {
        question: 'Which hash algorithm should I use: SHA-256, SHA-512, or SHA-1?',
        answer:
          'Use SHA-256 for general verification — it is the standard publishers provide. SHA-512 is equally strong and faster on 64-bit systems, while SHA-1 is legacy only and should not be trusted for security.',
      },
      {
        question: 'Where do I find the official checksum to compare against?',
        answer:
          'Publishers usually list it on the download page or in a .sha256 / .sha256sum file next to the download. Always copy it from the vendor’s own site, never from a mirror or forum post.',
      },
      {
        question: 'What should I do if the hashes do not match?',
        answer:
          'Do not run or extract the file. Delete it and re-download from the official source; a mismatch means the download was corrupted, truncated, or possibly tampered with.',
      },
      {
        question: 'Can I paste a whole .sha256sum line instead of just the hash?',
        answer:
          'Yes. The verifier accepts a full "<hash>  filename" line from a release manifest — it extracts the leading hash token automatically, ignores case, and compares it against all four computed algorithms.',
      },
      {
        question: 'Does the hash depend on the file name?',
        answer:
          'No. The digest is computed from the file’s contents only, so renaming a file never changes its hash. Two files with the same bytes always produce the same hash.',
      },
      {
        question: 'Can I verify a Linux ISO or a large installer with this tool?',
        answer:
          'Yes, up to roughly 300–500 MB. For multi-gigabyte ISOs, use a native tool such as shasum -a 256 on macOS/Linux or certutil -hashfile on Windows, since browsers load the whole file into memory.',
      },
      {
        question: 'What is the difference between SHA-256 and SHA-512?',
        answer:
          'Both are secure members of the SHA-2 family; SHA-256 produces a 64-character hex digest and SHA-512 a 128-character one. SHA-512 is slightly stronger and faster on 64-bit hardware, but SHA-256 is the more widely published checksum.',
      },
      {
        question: 'Can this tool detect a virus or malware in a file?',
        answer:
          'No. A matching hash only proves the file is identical to the one the publisher released. If the publisher’s own file were malicious, the hash would still match, so only verify downloads from sources you trust.',
      },
      {
        question: 'How do I download a .sha256 file for my own release?',
        answer:
          'Hash your release file here, then download the standard filename.sha256 text file the tool generates and publish it alongside your download so users can verify it.',
      },
      {
        question: 'Why does hashing take a few seconds for large files?',
        answer:
          'The browser must read and process every byte of the file. Larger files simply take longer, and the time grows with file size rather than with the algorithm you choose.',
      },
      {
        question: 'Does the File Hash Verifier work offline?',
        answer:
          'Yes. Once the page has loaded, all hashing runs locally in your browser with no network requests, so you can verify files without an internet connection.',
      },
      {
        question: 'Can I verify multiple files at once?',
        answer:
          'The tool verifies one file at a time. Hash each file separately and compare it against its own published checksum.',
      },
      {
        question: 'Is a matching hash proof the file is authentic?',
        answer:
          'It proves the file is byte-for-byte identical to the one the publisher hashed. It does not prove the publisher is who they claim to be, so get the expected hash from the publisher’s official channel.',
      },
      {
        question: 'Does the tool store my files or their hashes?',
        answer:
          'No. Nothing is uploaded or stored, and the computed hashes exist only in your current browser tab until you close or refresh it.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Choose Monogram Badge or Upload Logo',
        description:
          'Enter 1–3 brand initials with custom background/text colors, or switch to Upload Logo Image to center-crop an existing PNG/SVG/JPG mark.',
      },
      {
        title: 'Style your icon',
        description:
          'Pick your monogram letters and colors, or adjust the uploaded logo crop so the mark sits centered with even padding on every side.',
      },
      {
        title: 'Select corner shape',
        description:
          'Choose Rounded Square (iOS/macOS style), Circle, or Sharp Square framing.',
      },
      {
        title: 'Preview every size',
        description:
          'Check the 16×16 and 32×32 previews carefully — a mark that looks great large can turn into a blur at tab size, so simplify letters or details if needed.',
      },
      {
        title: 'Download favicon.ico, PNGs, and HTML snippet',
        description:
          'Download the multi-frame favicon.ico bundle alongside individual PNG sizes and copy the <head> link tags into your project.',
      },
      {
        title: 'Install the icons and clear the cache',
        description:
          'Place the files in your /public/ folder, paste the link tags into index.html, then hard-refresh or clear your browser cache — browsers cache favicons aggressively, so a stale icon usually means a cached one.',
      },
    ],
    examples: [
      {
        title: 'Bootstrapping icons for a new React or Cloudflare Pages app',
        input: 'Monogram "UH" · Background #4F46E5 · Shape: Rounded Square',
        output: 'Binary favicon.ico (16+32+48 px PNG frames) + 6 PNG sizes + HTML <link> snippet',
        explanation: 'Constructs valid ICONDIR and ICONDIRENTRY binary headers directly inside Uint8Array buffers.',
      },
    ],
    benefits: [
      'Builds a genuine multi-frame binary .ico file (16×16, 32×32, and 48×48), not a renamed PNG',
      'Covers desktop tabs, Apple Touch (180×180), and Web Manifest icons (192/512 px)',
      'Instant Monogram mode requires zero design software for side projects and MVPs',
      'Generates clean HTML5 <link rel="icon"> boilerplate ready to paste into index.html',
    ],
    useCases: [
      'Shipping missing favicons and Apple Touch icons before SaaS or microsite launches',
      'Creating high-contrast tab icons for staging vs. production dashboards',
      'Turning square brand SVG/PNG marks into complete PWA icon sets',
      'Generating crisp 16×16 and 32×32 previews to verify small-size legibility',
    ],
    faqs: [
      {
        question: 'Is the downloaded favicon.ico a real ICO binary file?',
        answer:
          'Yes. It writes standard Windows ICO ICONDIR headers and directory entries containing three crisp PNG-encoded frames (16×16, 32×32, and 48×48) supported by all modern browsers and operating systems.',
      },
      {
        question: 'Which icon sizes do modern websites actually need?',
        answer:
          'A favicon.ico plus a 32×32 PNG, 180×180 Apple Touch icon, and 192×192 / 512×512 Web Manifest PNGs cover virtually every desktop, mobile iOS, and Android browser.',
      },
      {
        question: 'Where should I put these files in a React + Vite project?',
        answer:
          'Place favicon.ico and the PNG icons inside your project’s /public/ folder and paste the HTML <link> tags inside index.html <head>.',
      },
      {
        question: 'Is the Favicon Generator free to use?',
        answer:
          'Yes, it is completely free with no sign-up, and all icons are generated locally in your browser.',
      },
      {
        question: 'Are my uploaded logos sent to a server?',
        answer:
          'No. Your logo is processed entirely in your browser and never uploaded, so your brand assets stay private.',
      },
      {
        question: 'What is the difference between a favicon.ico and a PNG favicon?',
        answer:
          'A favicon.ico is a container holding several icon sizes in one binary file, which browsers have supported for decades. A PNG favicon is a single-size image; modern browsers accept both, but .ico remains the safest default.',
      },
      {
        question: 'What is an Apple Touch icon?',
        answer:
          'It is the 180×180 PNG icon iOS uses when someone adds your site to their home screen. Without one, iOS takes a screenshot of your page instead, which usually looks poor.',
      },
      {
        question: 'What are 192×192 and 512×512 PWA icons for?',
        answer:
          'They are the icons listed in your web app manifest for installable Progressive Web Apps. Android and Chrome use them for the home-screen icon, splash screen, and app launcher.',
      },
      {
        question: 'Can I make a favicon from text without a logo?',
        answer:
          'Yes. Monogram mode turns 1–3 letters, such as your brand initials, into a clean badge with your choice of background color, text color, and corner shape — no design software needed.',
      },
      {
        question: 'What logo file should I upload for the best result?',
        answer:
          'Upload a square PNG or SVG with a transparent background at 512×512 or larger. Square source images crop cleanly; wide or tall logos get center-cropped, which can cut off edges.',
      },
      {
        question: 'Why does my new favicon not show up after I deploy?',
        answer:
          'Browsers cache favicons very aggressively. Hard-refresh with Ctrl+Shift+R (or Cmd+Shift+R on Mac), clear the site cache, or test in a private window to see the new icon.',
      },
      {
        question: 'Should the favicon match my logo exactly?',
        answer:
          'At large sizes yes, but at 16×16 fine details disappear. Simplify the mark for the smallest sizes — bold initials or a single bold shape read far better than a detailed logo.',
      },
      {
        question: 'What corner shape should I choose?',
        answer:
          'Rounded Square matches iOS and macOS app-icon styling, Circle suits avatars and social-style marks, and Sharp Square is best for geometric or technical brand marks.',
      },
      {
        question: 'Do I need to add HTML link tags for the icons?',
        answer:
          'Yes for reliable results. Browsers look for /favicon.ico by default, but Apple Touch and PWA icons only load when you declare them with <link> tags in your page <head>, which this tool generates for you.',
      },
      {
        question: 'Can I use the generated icons for a mobile app too?',
        answer:
          'The 192×192 and 512×512 PNGs work for PWA installs, but native iOS and Android apps need their own icon sets with specific sizes and formats, which this web-focused tool does not generate.',
      },
      {
        question: 'Does the Favicon Generator work offline?',
        answer:
          'Yes. Once the page has loaded, icon generation runs fully in your browser with no network requests.',
      },
      {
        question: 'What background color works best for a monogram favicon?',
        answer:
          'A solid, high-contrast brand color with white or near-white letters works best, since it stays legible at 16×16. Avoid light text on light backgrounds and busy gradients.',
      },
      {
        question: 'Can I regenerate icons after changing my brand colors?',
        answer:
          'Yes. Just update the colors or upload the new logo and download a fresh set — the tool keeps nothing from your previous session, so each run starts clean.',
      },
      {
        question: 'Will the favicon work in dark mode browser tabs?',
        answer:
          'A favicon with a solid background color shows the same in light and dark tabs. If your mark is dark-on-transparent, add a light background or outline so it stays visible on dark browser chrome.',
      },
      {
        question: 'Does the tool store my logos or generated icons?',
        answer:
          'No. Everything runs locally in your browser tab, nothing is uploaded or stored, and your files disappear when you close or refresh the page.',
      },
    ],
  },
};
