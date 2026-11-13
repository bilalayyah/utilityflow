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
    ],
    seo: {
      title: 'Image Compressor – Reduce PNG, JPG & WebP Size Locally | UtilityFlow',
      description:
        'Compress images directly in your browser using HTML5 Canvas. Adjust lossy WebP or JPG quality, cap maximum width, compare before/after file sizes, and download privately.',
      primaryKeyword: 'image compressor',
      secondaryKeywords: [
        'compress png jpg webp online',
        'reduce photo file size free',
        'client side image optimizer',
      ],
      longTailKeywords: [
        'compress large images for web core vitals without server upload',
        'convert and shrink jpg photo to lightweight webp format',
        'resize max width and optimize image quality offline',
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
        title: 'Review savings and download',
        description:
          'Inspect the live compressed preview, verify percentage savings, and click Download to save the optimized asset.',
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
    ],
    seo: {
      title: 'Image Resizer & Cover Cropper – Exact Pixel Dimensions | UtilityFlow',
      description:
        'Resize and center-crop PNG, JPG, and WebP images to exact dimensions or OG/YouTube/Square presets in your browser with aspect-ratio lock and high-quality smoothing.',
      primaryKeyword: 'image resizer',
      secondaryKeywords: [
        'resize photo to exact pixels',
        'aspect ratio cover crop tool',
        'social image size preset resizer',
      ],
      longTailKeywords: [
        'resize image to 1200x630 open graph dimensions without stretching',
        'center cover crop photo to square 1080x1080 locally',
        'change image pixel width and height in browser free',
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
        title: 'Render and download',
        description:
          'Choose PNG, JPG, or WebP output, click Render Resized Image, inspect the result, and download.',
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
    ],
    seo: {
      title: 'Image Format Converter – Batch PNG, JPG & WebP Locally | UtilityFlow',
      description:
        'Convert single or multiple images between PNG, JPG, WebP, and SVG in your browser. Customize JPG quality, transparency matte background colors, and download immediately.',
      primaryKeyword: 'image format converter',
      secondaryKeywords: [
        'convert webp to jpg or png',
        'batch png to webp converter',
        'transparent png to jpg background fill',
      ],
      longTailKeywords: [
        'batch convert multiple png and jpg images to webp offline',
        'convert webp screenshot to standard png without uploading',
        'fill transparent png background color when converting to jpg',
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
        title: 'Download converted assets',
        description:
          'Compare each file’s dimensions and new byte size, then download your converted images individually.',
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
    ],
    seo: {
      title: 'Image Rotate, Flip & Filter – Straighten & Adjust Photos | UtilityFlow',
      description:
        'Rotate PNG, JPG, and WebP photos by 90-degree increments, mirror horizontally or vertically, apply grayscale or brightness/contrast adjustments, and export cleanly.',
      primaryKeyword: 'rotate image online',
      secondaryKeywords: [
        'flip image horizontally vertically',
        'convert photo to grayscale online',
        'adjust brightness and contrast browser',
      ],
      longTailKeywords: [
        'fix sideways photo rotation 90 degrees offline in browser',
        'mirror selfie image horizontally without photoshop',
        'apply black and white grayscale filter and export png',
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
        title: 'Export edited image',
        description:
          'Pick PNG, JPG, or WebP output format and click Download to save your transformed file.',
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
    ],
    seo: {
      title: 'Image to Base64 Converter & Data URI Decoder | UtilityFlow',
      description:
        'Convert local images to Base64 Data URIs, raw Base64 strings, HTML <img> tags, and CSS background-image snippets—plus preview and download decoded Base64 images.',
      primaryKeyword: 'image to base64',
      secondaryKeywords: [
        'data uri image encoder',
        'base64 to image preview',
        'inline svg or png in css',
      ],
      longTailKeywords: [
        'convert png icon to css background-image data uri offline',
        'decode raw base64 string into downloadable image preview',
        'compare image binary byte size vs base64 string size',
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
        title: 'Copy snippet or download preview',
        description:
          'Copy the Data URI, raw Base64, HTML <img> tag, or CSS background snippet—or download a decoded preview image.',
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
