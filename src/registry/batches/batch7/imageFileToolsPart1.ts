import { lazy } from 'react';
import type { ToolDefinition } from '../../../types/tool';

export const IMAGE_FILE_TOOLS_PART_1: ToolDefinition[] = [
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    name: 'Image Compressor',
    shortDescription:
      'Compress PNG, JPG, and WebP images locally via HTML5 Canvas with custom quality sliders, max-width caps, and instant byte-savings metrics.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'image compressor',
      'compress image online',
      'reduce image file size',
      'webp image optimizer',
      'compress png to smaller size',
      'reduce jpg file size online',
      'image size reducer free',
      'optimize images for web',
      'shrink photo file size',
      'compress webp image',
    ],
    seo: {
      title: 'Image Compressor – Shrink PNG, JPG & WebP Free | UtilityFlow',
      description:
        'Compress images in your browser with the Image Compressor. Tune quality, cap max width, compare before-and-after sizes, and download — no uploads needed.',
      primaryKeyword: 'image compressor',
      secondaryKeywords: [
        'compress png jpg webp online',
        'reduce photo file size free',
        'client side image optimizer',
        'shrink image size for website',
        'lower jpg quality to save space',
      ],
      longTailKeywords: [
        'compress large images for web core vitals without server upload',
        'convert and shrink jpg photo to lightweight webp format',
        'resize max width and optimize image quality offline',
        'reduce image file size before email attachment',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Shrink heavy PNG, JPG, and WebP assets for faster page loads and tighter email attachments directly inside your browser—adjust lossy compression quality, apply optional width caps, and compare exact byte savings with zero remote file uploads.',
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
    relatedToolSlugs: [
      'image-resizer',
      'image-format-converter',
      'image-rotate-flip',
      'images-to-pdf',
    ],
    component: lazy(() => import('../../../tools/image-file/ImageCompressorTool')),
  },
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    name: 'Image Resizer & Cropper',
    shortDescription:
      'Resize images to exact pixel dimensions or social/OG presets with aspect-ratio locking, smart center cover-crop, and PNG/JPG/WebP export.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    popular: true,
    featured: true,
    keywords: [
      'image resizer',
      'resize image pixels',
      'image cropper online',
      'og image resizer 1200x630',
      'resize image online free',
      'change image dimensions',
      'resize photo for instagram',
      'crop image to size',
      'resize image to 1200x630',
      'shrink image dimensions',
    ],
    seo: {
      title: 'Image Resizer – Resize Photos to Exact Pixels | UtilityFlow',
      description:
        'Resize photos to exact pixels with the Image Resizer. Use presets, lock aspect ratio, cover-crop, and export PNG, JPG, or WebP privately in your browser.',
      primaryKeyword: 'image resizer',
      secondaryKeywords: [
        'resize photo to exact pixels',
        'aspect ratio cover crop tool',
        'social image size preset resizer',
        'resize image for social media',
        'change photo pixel size online',
      ],
      longTailKeywords: [
        'resize image to 1200x630 open graph dimensions without stretching',
        'center cover crop photo to square 1080x1080 locally',
        'change image pixel width and height in browser free',
        'resize portrait photo to 1080x1080 square for instagram',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Scale graphics and photography to exact pixel dimensions—or click built-in Open Graph (1200×630), YouTube HD (1280×720), Square (1080×1080), and Avatar (512×512) presets—using high-quality Canvas resampling and optional Center Cover-Crop to avoid distortion.',
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
    relatedToolSlugs: [
      'image-compressor',
      'social-thumbnail-previewer',
      'meta-tag-generator',
      'favicon-generator',
    ],
    component: lazy(() => import('../../../tools/image-file/ImageResizerTool')),
  },
  {
    id: 'image-format-converter',
    slug: 'image-format-converter',
    name: 'Image Format Converter (PNG / JPG / WebP)',
    shortDescription:
      'Batch convert PNG, JPG, WebP, GIF, and SVG images to PNG, JPG, or WebP locally with quality control and custom JPEG background matte fill.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'image format converter',
      'png to webp converter',
      'webp to png converter',
      'svg to png browser converter',
      'convert jpg to png',
      'convert png to jpg',
      'batch image converter',
      'webp to jpg converter',
      'image converter online free',
      'convert gif to png',
    ],
    seo: {
      title: 'Image Format Converter – PNG, JPG & WebP | UtilityFlow',
      description:
        'Convert images between PNG, JPG, and WebP with the Image Format Converter. Batch-convert, set JPG quality, and fill transparent backgrounds before exporting.',
      primaryKeyword: 'image format converter',
      secondaryKeywords: [
        'convert webp to jpg or png',
        'batch png to webp converter',
        'transparent png to jpg background fill',
        'convert jpg to png free',
        'batch convert images to webp',
      ],
      longTailKeywords: [
        'batch convert multiple png and jpg images to webp offline',
        'convert webp screenshot to standard png without uploading',
        'fill transparent png background color when converting to jpg',
        'change image format from png to jpg in browser',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Batch-convert PNG, JPG, WebP, GIF, and SVG files into web-ready WebP, universal JPG, or lossless transparent PNG completely in your browser—complete with custom background matte fill when flattening transparency to JPEG.',
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
    relatedToolSlugs: [
      'image-compressor',
      'image-resizer',
      'image-to-base64',
      'images-to-pdf',
    ],
    component: lazy(() => import('../../../tools/image-file/ImageFormatConverterTool')),
  },
  {
    id: 'image-rotate-flip',
    slug: 'image-rotate-flip',
    name: 'Image Rotate, Flip & Filter',
    shortDescription:
      'Rotate images 90°/180°/270°, flip horizontally or vertically, and apply grayscale, brightness, and contrast filters live in your browser.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'rotate image online',
      'flip image horizontally',
      'grayscale image filter',
      'adjust image brightness contrast',
      'rotate photo 90 degrees',
      'flip photo online',
      'mirror image online',
      'straighten image online',
      'photo filter editor online',
      'rotate jpg image',
    ],
    seo: {
      title: 'Rotate Image Online – Flip & Filter Photos | UtilityFlow',
      description:
        'Rotate image online by 90, 180, or 270 degrees, flip photos horizontally or vertically, and adjust brightness, contrast, and grayscale — free in your browser.',
      primaryKeyword: 'rotate image online',
      secondaryKeywords: [
        'flip image horizontally vertically',
        'convert photo to grayscale online',
        'adjust brightness and contrast browser',
        'rotate photo 90 degrees online',
        'mirror image horizontally free',
      ],
      longTailKeywords: [
        'fix sideways photo rotation 90 degrees offline in browser',
        'mirror selfie image horizontally without photoshop',
        'apply black and white grayscale filter and export png',
        'rotate scanned document image to correct orientation',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Fix sideways orientation, mirror selfies horizontally or vertically, switch photos to black-and-white grayscale, and fine-tune brightness and contrast in real time using local HTML5 Canvas 2D transforms.',
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
    relatedToolSlugs: [
      'image-resizer',
      'image-compressor',
      'image-format-converter',
      'pdf-page-rotator',
    ],
    component: lazy(() => import('../../../tools/image-file/ImageRotateFlipTool')),
  },
  {
    id: 'image-to-base64',
    slug: 'image-to-base64',
    name: 'Image to Base64 & Data URI Converter',
    shortDescription:
      'Encode PNG, JPG, WebP, SVG, and ICO images into Base64 Data URIs, HTML <img> tags, and CSS rules—or decode Base64 strings back to previews.',
    categoryId: 'image-file',
    batch: 7,
    processingMode: 'browser',
    requiresExternalApi: false,
    keywords: [
      'image to base64',
      'base64 image decoder',
      'data uri generator',
      'css background base64 image',
      'convert image to data uri',
      'base64 encoder image',
      'image to base64 online free',
      'encode png to base64',
      'base64 to image converter',
      'embed image in html',
    ],
    seo: {
      title: 'Image to Base64 Converter & Data URI Decoder | UtilityFlow',
      description:
        'Use this image to base64 converter to create Data URIs, raw Base64, HTML img tags, and CSS background snippets — or decode Base64 back to an image preview.',
      primaryKeyword: 'image to base64',
      secondaryKeywords: [
        'data uri image encoder',
        'base64 to image preview',
        'inline svg or png in css',
        'online base64 image encoder free',
        'encode image as data uri',
      ],
      longTailKeywords: [
        'convert png icon to css background-image data uri offline',
        'decode raw base64 string into downloadable image preview',
        'compare image binary byte size vs base64 string size',
        'encode small logo picture as base64 for html email',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Turn small icons, logos, and email graphics into self-contained `data:image/...;base64,...` URIs, copy-ready HTML `<img>` tags, and CSS `background-image` declarations—or switch modes to inspect and download raw Base64 image payloads.',
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
    relatedToolSlugs: [
      'base64-encoder-decoder',
      'image-format-converter',
      'image-compressor',
      'favicon-generator',
    ],
    component: lazy(() => import('../../../tools/image-file/ImageToBase64Tool')),
  },
];
