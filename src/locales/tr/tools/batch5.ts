import type { ToolLocaleOverride } from '../../types';

/**
 * Turkish overrides — Batch 5: SEO tools (10) + Image & File tools (10).
 * Source: src/registry/batches/batch6SeoTools.ts,
 *         src/registry/batches/batch7ImageFileTools.ts.
 * Original Turkish, SEO-optimized for Turkish search intent.
 */
export const TR_BATCH_5_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'meta-tag-generator': {
    slug: 'meta-etiket-olusturucu',
    name: 'Meta Etiket Oluşturucu',
    shortDescription:
      'Başlık, meta açıklama, kanonik, robots, Open Graph ve Twitter/X Card etiketleri oluşturun; canlı kart önizlemesiyle.',
    keywords: [
      'meta etiket oluşturucu',
      'meta tag oluşturma',
      'open graph oluşturucu',
      'twitter card oluşturucu',
      'seo meta etiketleri',
      'meta açıklama oluşturucu',
      'html meta etiket ekleme',
      'og etiket oluşturucu',
      'web sitesi meta etiketleri',
    ],
    seo: {
      title: 'Meta Etiket Oluşturucu – SEO ve Open Graph | UtilityFlow',
      description:
        'Başlık, açıklama ve kanonik URL ile Open Graph ve Twitter Card etiketleri oluşturun. Uzunluk kontrolü ve sosyal önizleme ile hemen ücretsiz, kayıt gerekmez.',
      primaryKeyword: 'meta etiket oluşturucu',
      secondaryKeywords: [
        'meta tag oluşturma',
        'open graph oluşturucu',
        'twitter card oluşturucu',
        'meta açıklama oluşturucu',
      ],
      longTailKeywords: [
        'web sitesi için meta etiket nasıl oluşturulur ücretsiz',
        'open graph ve twitter card etiketleri nasıl oluşturulur',
        'meta başlık açıklama uzunluğu nasıl kontrol edilir',
        'html head seo etiketleri kopyala yapıştır nasıl yapılır',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Standartlara uygun HTML <head> üst verisi oluşturun — <title>, <meta name="description">, kanonik URL, dizine ekleme kuralları, Open Graph (og:*) etiketleri ve Twitter/X Card işaretlemesi; öznitelik kaçışı ve canlı sosyal kart önizlemesiyle.',
  },
  'serp-snippet-preview': {
    slug: 'google-serp-onizleme',
    name: 'Google SERP Önizleme',
    shortDescription:
      'Google arama sonucunuzu masaüstü ve mobilde önizleyin; başlığın gerçek piksel genişliği denetimi ve anahtar kelime vurgusuyla.',
    keywords: [
      'serp önizleme',
      'google serp önizleme aracı',
      'google arama sonucu önizleme',
      'seo başlık uzunluğu kontrol',
      'meta açıklama önizleme',
      'google snippet önizleme',
      'serp denetleyici çevrimiçi',
      'google arama sonucu nasıl görünür',
      'seo snippet önizleme aracı',
    ],
    seo: {
      title: 'Google SERP Önizleme – Arama Sonucu Gör | UtilityFlow',
      description:
        'Yayınlamadan önce Google arama sonucunuzu masaüstü ve mobilde görün. Başlık piksel genişliği ve kesilme uyarısıyla ücretsiz kontrol edin, kayıt gerekmez.',
      primaryKeyword: 'serp önizleme',
      secondaryKeywords: [
        'google serp önizleme aracı',
        'google arama sonucu önizleme',
        'seo başlık uzunluğu kontrol',
        'meta açıklama önizleme',
      ],
      longTailKeywords: [
        'google aramada başlığım nasıl görünür kontrol et',
        'seo başlığı 580 piksel genişliğe sığar mı',
        'mobil ve masaüstü serp önizleme nasıl görülür',
        'meta açıklama google aramada kesilir mi kontrol et',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tahminle değil, HTML5 Canvas ile canlı yazı tipi ölçümüyle SEO başlığınızın Google’ın yaklaşık 580 piksel görüntü alanına sığıp sığmadığını denetleyin; masaüstü ve mobil arama kartı önizlemesini kalın anahtar kelime vurgusuyla görün.',
  },
  'xml-sitemap-generator': {
    slug: 'xml-site-haritasi-olusturucu',
    name: 'XML Site Haritası Oluşturucu',
    shortDescription:
      'URL listesinden Sitemaps.org standardına uygun sitemap.xml oluşturun; yinelenenleri temizleyin, lastmod ve changefreq ekleyin.',
    keywords: [
      'site haritası oluşturucu',
      'xml site haritası oluşturucu',
      'sitemap nasıl oluşturulur',
      'sitemap.xml nasıl oluşturulur',
      'web sitesi site haritası oluşturucu',
      'ücretsiz site haritası oluşturucu',
      'sitemap yapma çevrimiçi',
      'sitemap xml dosyası nasıl oluşturulur',
      'seo site haritası aracı',
    ],
    seo: {
      title: 'XML Site Haritası Oluşturucu – Ücretsiz | UtilityFlow',
      description:
        'URL listenizi saniyeler içinde geçerli bir sitemap.xml dosyasına dönüştürün. Yinelenenleri temizleyin, lastmod ve changefreq ekleyin; ücretsiz çalışır.',
      primaryKeyword: 'site haritası oluşturucu',
      secondaryKeywords: [
        'xml site haritası oluşturucu',
        'sitemap nasıl oluşturulur',
        'sitemap.xml nasıl oluşturulur',
        'web sitesi site haritası oluşturucu',
      ],
      longTailKeywords: [
        'web sitesi için sitemap xml nasıl oluşturulur ücretsiz',
        'url listesinden sitemap xml oluştur',
        'site haritasına lastmod ve changefreq nasıl eklenir',
        'küçük web sitesi için site haritası nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Herhangi bir kanonik https:// URL listesini Sitemaps 0.9 şemasına uygun bir sitemap.xml dosyasına dönüştürün — geçersiz URL’leri ayıklayın, yinelenenleri otomatik temizleyin, XML karakterlerini kaçışlayın ve .xml dosyası olarak indirin.',
  },
  'robots-txt-generator': {
    slug: 'robots-txt-olusturucu',
    name: 'Robots.txt Oluşturucu',
    shortDescription:
      'Kullanıcı aracısına göre gruplanmış doğru robots.txt kuralları oluşturun; Allow/Disallow yolları, crawl-delay ve site haritası yönergesiyle.',
    keywords: [
      'robots.txt oluşturucu',
      'robots txt nasıl oluşturulur',
      'robots.txt dosyası nasıl oluşturulur',
      'allow disallow robots txt',
      'ücretsiz robots txt oluşturucu',
      'robots.txt nedir',
      'site haritası robots txt',
      'robots txt yapma aracı',
      'web sitesi robots txt nasıl oluşturulur',
    ],
    seo: {
      title: 'Robots.txt Oluşturucu – Tarayıcı Kuralları | UtilityFlow',
      description:
        'Allow ve Disallow kurallarıyla doğru robots.txt oluşturun. Kullanıcı aracısı grupları, crawl-delay ve site haritası ekleyin; hazır şablonlarla ücretsizdir.',
      primaryKeyword: 'robots.txt oluşturucu',
      secondaryKeywords: [
        'robots txt nasıl oluşturulur',
        'robots.txt dosyası nasıl oluşturulur',
        'allow disallow robots txt',
        'ücretsiz robots txt oluşturucu',
      ],
      longTailKeywords: [
        'web sitesi için robots txt dosyası nasıl oluşturulur',
        'robots txt dosyasına site haritası nasıl eklenir',
        'robots txt ile tarayıcı nasıl engellenir',
        'wordpress için robots txt nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Açık web sitesi, SaaS uygulaması, WordPress veya test engelleme için hazır şablonlardan temiz robots.txt yönergeleri oluşturun — User-agent, Allow/Disallow, Crawl-delay ve Sitemap: satırlarıyla.',
  },
  'schema-markup-generator': {
    slug: 'json-ld-schema-olusturucu',
    name: 'JSON-LD Schema İşaretleme Oluşturucu',
    shortDescription:
      'Article, FAQPage, Product, Organization ve BreadcrumbList için Schema.org uyumlu JSON-LD komut dosyaları oluşturun.',
    keywords: [
      'schema işaretleme oluşturucu',
      'json ld oluşturucu',
      'yapısal veri oluşturucu',
      'faq schema oluşturucu',
      'schema.org json ld',
      'zengin snippet schema',
      'json ld nasıl oluşturulur',
      'yapısal veri nedir',
      'breadcrumb schema oluşturucu',
    ],
    seo: {
      title: 'JSON-LD Schema Oluşturucu – Yapısal Veri | UtilityFlow',
      description:
        'Article, FAQPage, Product, Organization ve BreadcrumbList için geçerli Schema.org JSON-LD oluşturun. Güvenli kaçış ve .jsonld indirme ile hemen ücretsizdir.',
      primaryKeyword: 'schema işaretleme oluşturucu',
      secondaryKeywords: [
        'json ld oluşturucu',
        'yapısal veri oluşturucu',
        'faq schema oluşturucu',
        'schema.org json ld',
      ],
      longTailKeywords: [
        'web sitesi için json ld schema nasıl oluşturulur ücretsiz',
        'faqpage yapısal verisi nasıl oluşturulur',
        'article ve product schema nasıl oluşturulur',
        'json ld komut dosyası html içine nasıl eklenir',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Article, FAQPage, Product, Organization ve BreadcrumbList için Schema.org uyumlu temiz JSON-LD blokları oluşturun — dinamik satır oluşturucu, komut dosyası etiketinde < karakterinin güvenli kaçışı ve .jsonld dışa aktarmayla.',
  },
  'url-slug-generator': {
    slug: 'url-slug-olusturucu',
    name: 'URL Slug Oluşturucu',
    shortDescription:
      'Makale başlığını temiz, SEO dostu URL slugına dönüştürün; aksan dönüştürme, toplu mod ve gereksiz kelime temizliğiyle.',
    keywords: [
      'slug oluşturucu',
      'url slug nasıl oluşturulur',
      'seo dostu url nasıl oluşturulur',
      'blog başlığı slug dönüştürme',
      'kalıcı bağlantı oluşturucu',
      'slug yapma çevrimiçi',
      'ücretsiz url slug oluşturucu',
      'seo url nasıl oluşturulur',
      'başlıktan slug nasıl oluşturulur',
    ],
    seo: {
      title: 'URL Slug Oluşturucu – SEO Dostu Bağlantı | UtilityFlow',
      description:
        'Başlıkları toplu hâlde temiz, SEO dostu URL sluglarına tek seferde dönüştürün. Aksanları sadeleştirin ve gereksiz kelimeleri çıkarın; ücretsiz çalışır.',
      primaryKeyword: 'slug oluşturucu',
      secondaryKeywords: [
        'url slug nasıl oluşturulur',
        'seo dostu url nasıl oluşturulur',
        'blog başlığı slug dönüştürme',
        'kalıcı bağlantı oluşturucu',
      ],
      longTailKeywords: [
        'blog başlığı seo dostu sluga nasıl dönüştürülür',
        'birden fazla slug toplu nasıl oluşturulur çevrimiçi',
        'türkçe başlık url slug nasıl oluşturulur',
        'slug içinden gereksiz kelimeler nasıl çıkarılır',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bir yazı veya tüm içerik takvimi için okunması kolay, kısa çizgili kalıcı bağlantıları standartlaştırın. Aksanları temiz ASCII’ye dönüştürün (Café → cafe), isterseniz gereksiz kelimeleri çıkarın, kelime ortasında kesmeden uzunluğu sınırlayın ve tam URL önizlemesini görün.',
  },
  'keyword-density-checker': {
    slug: 'anahtar-kelime-yogunlugu-kontrol',
    name: 'Anahtar Kelime Yoğunluğu Denetleyici',
    shortDescription:
      'Kelime sayısı, hedef anahtar kelime yoğunluğu, okuma süresi ve 1, 2 ve 3 kelimelik en sık ifadeler — hepsini yerelde denetleyin.',
    keywords: [
      'anahtar kelime yoğunluğu kontrol',
      'anahtar kelime yoğunluğu nasıl kontrol edilir',
      'anahtar kelime yoğunluğu nedir',
      'seo içerik analiz aracı',
      'ücretsiz anahtar kelime yoğunluğu aracı',
      'anahtar kelime sıklığı kontrol',
      'anahtar kelime yoğunluğu nasıl hesaplanır',
      'içerik seo kontrol nasıl yapılır',
      'anahtar kelime doldurma kontrol',
    ],
    seo: {
      title: 'Anahtar Kelime Yoğunluğu Denetimi – SEO | UtilityFlow',
      description:
        'Metni yapıştırın; kelime sayısı, okuma süresi ve anahtar kelime yoğunluğunu anında görün. En sık geçen ifadeleri gösterir; tarayıcıda çalışır, ücretsizdir.',
      primaryKeyword: 'anahtar kelime yoğunluğu kontrol',
      secondaryKeywords: [
        'anahtar kelime yoğunluğu nasıl kontrol edilir',
        'anahtar kelime yoğunluğu nedir',
        'seo içerik analiz aracı',
        'ücretsiz anahtar kelime yoğunluğu aracı',
      ],
      longTailKeywords: [
        'blog yazısının anahtar kelime yoğunluğu nasıl kontrol edilir',
        'anahtar kelime doldurma nasıl kontrol edilir ücretsiz',
        'html yapıştırarak anahtar kelime yoğunluğu nasıl hesaplanır',
        'seo için anahtar kelime yoğunluğu ne kadar olmalı',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'İçerik taslağını veya yapıştırılan HTML’i denetleyin — sözcük derinliği, okuma süresi, hedef ifadenin tam eşleşmeleri ve 1, 2 ve 3 kelimelik en sık n-gram sıklıklarını görün. Eski anahtar kelime kotalarının peşinden koşmak yerine, farkında olmadan tekrarlanan kelimeleri yakalamak için tasarlandı.',
  },
  'canonical-hreflang-generator': {
    slug: 'hreflang-olusturucu',
    name: 'Kanonik ve Hreflang Oluşturucu',
    shortDescription:
      'Çok dilli sayfalar için hreflang ve kanonik etiketler oluşturun; Cloudflare Pages, Apache ve Nginx için 301 yönlendirme hazırlayın.',
    keywords: [
      'hreflang oluşturucu',
      'kanonik etiket oluşturucu',
      '301 yönlendirme oluşturucu',
      'hreflang etiketleri nasıl oluşturulur',
      'kanonik url nasıl oluşturulur',
      'cloudflare yönlendirme kuralları',
      'çok dilli seo etiketleri',
      'hreflang nedir',
      '301 yönlendirme nasıl yapılır',
    ],
    seo: {
      title: 'Hreflang Oluşturucu – Kanonik ve Yönlendirme | UtilityFlow',
      description:
        'Çok dilli sayfalar için hreflang ve kanonik etiketler oluşturun. Cloudflare, Apache ve Nginx için 301 yönlendirmesi hazırlayın; ücretsizdir, kayıt gerekmez.',
      primaryKeyword: 'hreflang oluşturucu',
      secondaryKeywords: [
        'kanonik etiket oluşturucu',
        '301 yönlendirme oluşturucu',
        'hreflang etiketleri nasıl oluşturulur',
        'kanonik url nasıl oluşturulur',
      ],
      longTailKeywords: [
        'çok dilli web sitesi için hreflang etiketleri nasıl oluşturulur',
        'cloudflare pages için 301 yönlendirme nasıl yapılır',
        'kanonik etiket nedir ve nasıl eklenir',
        'hreflang x-default etiketi nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Teknik SEO’nun iki önemli işini tek yerde yapın — birden çok bölge için hreflang + kanonik açıklamaları (HTML <head> ve XML site haritası için) oluşturun veya eski URL listesini Cloudflare Pages, Apache ve Nginx için hazır 301 yönlendirme kurallarına dönüştürün.',
  },
  'on-page-seo-checker': {
    slug: 'sayfa-ici-seo-denetimi',
    name: 'Sayfa İçi SEO Denetleyici',
    shortDescription:
      'Yapıştırılan HTML kaynağını tarayıcıda denetleyin; başlık uzunluğu, meta açıklama, H1–H4 sırası, alt metin ve JSON-LD.',
    keywords: [
      'sayfa içi seo denetleyici',
      'sayfa içi seo nasıl kontrol edilir',
      'ücretsiz seo denetim aracı',
      'html seo denetleyici',
      'ücretsiz seo kontrol çevrimiçi',
      'web sitesi seo kontrol nasıl yapılır',
      'sayfa içi seo nedir',
      'meta başlık uzunluğu kontrol',
      'seo denetimi nasıl yapılır',
    ],
    seo: {
      title: 'Sayfa İçi SEO Denetimi – HTML Analizi | UtilityFlow',
      description:
        'Sayfa HTML kaynağını yapıştırın; başlık, meta açıklama ve başlık yapısını denetleyin. Alt metin ve JSON-LD kontrolü de yapar; ücretsiz, tarayıcıda çalışır.',
      primaryKeyword: 'sayfa içi seo denetleyici',
      secondaryKeywords: [
        'sayfa içi seo nasıl kontrol edilir',
        'ücretsiz seo denetim aracı',
        'html seo denetleyici',
        'ücretsiz seo kontrol çevrimiçi',
      ],
      longTailKeywords: [
        'web sitesinin sayfa içi seo nasıl kontrol edilir ücretsiz',
        'html yapıştırarak seo denetimi nasıl yapılır',
        'h1 h2 başlık yapısı nasıl kontrol edilir',
        'meta başlık ve açıklama uzunluğu nasıl kontrol edilir',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Herhangi bir sayfanın HTML kaynağını (Sayfa Kaynağını Görüntüle) doğrudan tarayıcınızda DOM düzeyinde denetleyin — <title>, meta açıklama, kanonik, H1–H4 başlık sırası, resimlerde eksik alt metin, iç/dış bağlantılar, Open Graph ve JSON-LD, hepsi bir arada.',
  },
  'robots-meta-tag-generator': {
    slug: 'robots-meta-etiketi-olusturucu',
    name: 'Robots Meta Etiketi Oluşturucu',
    shortDescription:
      'Noindex, nofollow, noarchive, max-snippet ve max-image-preview içeren robots etiketleri ve Cloudflare _headers kuralları oluşturun.',
    keywords: [
      'robots meta etiket oluşturucu',
      'noindex etiketi nasıl eklenir',
      'nofollow meta etiketi',
      'x-robots-tag oluşturucu',
      'max-image-preview large',
      'robots meta etiketi nedir',
      'noindex nofollow nasıl eklenir',
      'cloudflare headers robots',
      'meta robots etiket oluşturucu',
    ],
    seo: {
      title: 'Robots Meta Etiketi Oluşturucu – Noindex | UtilityFlow',
      description:
        'Noindex, nofollow, noarchive, max-snippet ve max-image-preview içeren robots etiketleri oluşturun. X-Robots-Tag ve Cloudflare _headers ile ücretsiz çalışır.',
      primaryKeyword: 'robots meta etiket oluşturucu',
      secondaryKeywords: [
        'noindex etiketi nasıl eklenir',
        'nofollow meta etiketi',
        'x-robots-tag oluşturucu',
        'max-image-preview large',
      ],
      longTailKeywords: [
        'pdf için x-robots-tag noindex nasıl oluşturulur',
        'noindex nofollow meta etiketi nasıl eklenir',
        'max-snippet ve max-image-preview large nasıl ayarlanır',
        'robots txt ile meta robots arasındaki fark nedir',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Sayfa düzeyinde tarayıcılar için doğru yönergeler oluşturun — index/noindex, follow/nofollow, noarchive, nosnippet, max-snippet ve max-image-preview:large — HTML <meta name="robots"> etiketi, HTTP X-Robots-Tag başlığı ve Cloudflare Pages _headers bloğu olarak bir arada.',
  },
  'image-compressor': {
    slug: 'resim-sikistir',
    name: 'Resim Sıkıştırıcı',
    shortDescription:
      'PNG, JPG ve WebP resimleri tarayıcıda küçültün; kalite denetimi, en fazla genişlik ve anında bayt tasarrufuyla.',
    keywords: [
      'resim sıkıştırma',
      'resim sıkıştırma nasıl yapılır',
      'fotoğraf sıkıştırma çevrimiçi',
      'jpg sıkıştırma nasıl yapılır',
      'resim boyutu küçültme nasıl yapılır',
      'fotoğraf boyutu küçültme nasıl yapılır',
      'png sıkıştırma çevrimiçi ücretsiz',
      'resim nasıl küçültülür',
      'webp sıkıştırıcı',
    ],
    seo: {
      title: 'Resim Sıkıştır – PNG, JPG ve WebP Ücretsiz | UtilityFlow',
      description:
        'Resimleri tarayıcıda sıkıştırın; kaliteyi ayarlayın, genişliği sınırlayın ve önce-sonra boyut farkını görün. Dosya yüklenmez, ücretsizdir, kayıt gerekmez.',
      primaryKeyword: 'resim sıkıştırma',
      secondaryKeywords: [
        'resim sıkıştırma nasıl yapılır',
        'fotoğraf sıkıştırma çevrimiçi',
        'jpg sıkıştırma nasıl yapılır',
        'resim boyutu küçültme nasıl yapılır',
      ],
      longTailKeywords: [
        'web sitesi için resim boyutu nasıl küçültülür yüklemeden',
        'jpg fotoğraf webp olarak nasıl sıkıştırılır',
        'büyük resim çevrimiçi ücretsiz nasıl küçültülür',
        'e-posta için fotoğraf boyutu nasıl küçültülür',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Ağır PNG, JPG ve WebP resimleri hızlı sayfa yüklemesi ve hafif e-posta ekleri için doğrudan tarayıcıda küçültün — kayıplı sıkıştırma kalitesini ayarlayın, genişlik sınırı koyun ve bayt cinsinden gerçek tasarrufu görün; hiçbir dosya sunucuya gönderilmez.',
  },
  'image-resizer': {
    slug: 'resim-boyutlandirici',
    name: 'Resim Boyutlandırıcı',
    shortDescription:
      'Resimleri tam piksel ölçüsüne getirin; sosyal ve OG hazır ölçüleri, en boy oranı kilidi, orta kırpma ve PNG/JPG/WebP dışa aktarmayla.',
    keywords: [
      'resim boyutlandırma',
      'resim boyutlandırma nasıl yapılır',
      'fotoğraf boyutlandırma çevrimiçi',
      'resim boyutu değiştirme nasıl yapılır',
      'fotoğraf 1200x630 nasıl yapılır',
      'resim kare nasıl yapılır',
      'instagram fotoğraf boyutlandırma',
      'ücretsiz resim boyutlandırıcı çevrimiçi',
      'fotoğraf boyutu nasıl değiştirilir',
    ],
    seo: {
      title: 'Resim Boyutlandır – Tam Piksel Ölçüsünde | UtilityFlow',
      description:
        'Fotoğrafları tam piksel ölçüsüne getirin; şablon seçin, oranı kilitleyin ve PNG, JPG veya WebP indirin. Ücretsiz ve gizlidir; dosyanız cihazınızdan çıkmaz.',
      primaryKeyword: 'resim boyutlandırma',
      secondaryKeywords: [
        'resim boyutlandırma nasıl yapılır',
        'fotoğraf boyutlandırma çevrimiçi',
        'resim boyutu değiştirme nasıl yapılır',
        'fotoğraf 1200x630 nasıl yapılır',
      ],
      longTailKeywords: [
        'resim 1200x630 open graph boyutuna nasıl getirilir',
        'fotoğraf instagram için 1080x1080 kare nasıl yapılır',
        'resim genişlik yükseklik piksel olarak nasıl değiştirilir',
        'fotoğraf esnetmeden nasıl boyutlandırılır',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Grafik ve fotoğrafları tam piksel ölçüsüne getirin — Open Graph (1200×630), YouTube HD (1280×720), kare (1080×1080) ve avatar (512×512) hazır ölçüleriyle; yüksek kaliteli Canvas yeniden örnekleme ve esnetmeden orta kaplama kırpmayla.',
  },
  'image-format-converter': {
    slug: 'resim-format-donusturucu',
    name: 'Resim Formatı Dönüştürücü (PNG / JPG / WebP)',
    shortDescription:
      'PNG, JPG, WebP, GIF ve SVG resimleri toplu olarak başka formata dönüştürün; kalite denetimi ve JPEG için arka plan rengiyle.',
    keywords: [
      'resim formatı dönüştürücü',
      'png jpg dönüştürme',
      'jpg png dönüştürme',
      'webp jpg dönüştürme',
      'png webp dönüştürücü',
      'resim formatı nasıl değiştirilir',
      'webp png dönüştürme',
      'jpg webp dönüştürücü',
      'ücretsiz resim dönüştürücü çevrimiçi',
    ],
    seo: {
      title: 'Resim Formatı Dönüştür – PNG, JPG, WebP | UtilityFlow',
      description:
        'Resimleri PNG, JPG ve WebP arasında anında dönüştürün. Toplu dönüştürme, JPG kalite ayarı ve şeffaf arka plan doldurma ile tarayıcıda ücretsiz çalışır.',
      primaryKeyword: 'resim formatı dönüştürücü',
      secondaryKeywords: [
        'png jpg dönüştürme',
        'jpg png dönüştürme',
        'webp jpg dönüştürme',
        'png webp dönüştürücü',
      ],
      longTailKeywords: [
        'birden fazla resmi toplu webp formatına nasıl dönüştürülür',
        'webp ekran görüntüsü png nasıl yapılır',
        'şeffaf png jpg formatına arka planla nasıl dönüştürülür',
        'png jpg formatı çevrimiçi nasıl değiştirilir',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'PNG, JPG, WebP, GIF ve SVG dosyalarını toplu olarak web için hazır WebP’ye, evrensel JPG’ye veya kayıpsız şeffaf PNG’ye dönüştürün — tamamen tarayıcıda; şeffaflığı JPEG’e çevirirken istediğiniz arka plan rengini doldurma seçeneğiyle.',
  },
  'image-rotate-flip': {
    slug: 'resim-dondur-cevir',
    name: 'Fotoğraf Döndür ve Çevir',
    shortDescription:
      'Resimleri 90°/180°/270° döndürün, yatay veya dikey çevirin; gri ton, parlaklık ve kontrast filtrelerini canlı uygulayın.',
    keywords: [
      'fotoğraf döndürme nasıl yapılır',
      'resim döndürme çevrimiçi',
      'fotoğraf çevirme nasıl yapılır',
      'resim ters çevirme nasıl yapılır',
      'fotoğraf aynalama nasıl yapılır',
      'resim gri ton nasıl yapılır',
      'fotoğraf parlaklığı nasıl artırılır',
      'resim 90 derece döndürme',
      'fotoğraf düzeltme nasıl yapılır',
    ],
    seo: {
      title: 'Resim Döndür ve Çevir – Fotoğraf Düzenle | UtilityFlow',
      description:
        'Resimleri çevrimiçi 90, 180 veya 270 derece döndürün; yatay veya dikey çevirin, parlaklık, kontrast ve gri ton ayarlayın. Ücretsiz, tarayıcıda çalışır.',
      primaryKeyword: 'fotoğraf döndürme nasıl yapılır',
      secondaryKeywords: [
        'resim döndürme çevrimiçi',
        'fotoğraf çevirme nasıl yapılır',
        'resim ters çevirme nasıl yapılır',
        'fotoğraf aynalama nasıl yapılır',
      ],
      longTailKeywords: [
        'eğri fotoğraf 90 derece çevrimiçi nasıl düzeltilir',
        'selfie aynalama çevrimiçi uygulamadan nasıl yapılır',
        'fotoğraf siyah beyaz gri ton nasıl yapılır',
        'taranmış resim nasıl düzeltilir',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Eğri fotoğrafın yönünü düzeltin, selfie’yi yatay veya dikey aynalayın, fotoğrafı siyah beyaz gri tona çevirin ve parlaklık ile kontrastı canlı ayarlayın — HTML5 Canvas 2D’nin yerel dönüştürmeleriyle.',
  },
  'image-to-base64': {
    slug: 'resim-base64-donusturucu',
    name: 'Resimden Base64 Dönüştürücü',
    shortDescription:
      'PNG, JPG, WebP, SVG ve ICO resimleri Base64 Data URI, HTML <img> etiketi ve CSS kurallarına dönüştürün veya Base64’ü geri resme çevirin.',
    keywords: [
      'resim base64 dönüştürme',
      'base64 resim dönüştürücü',
      'fotoğraf base64 nasıl yapılır',
      'base64 resim çevirme',
      'data uri oluşturucu',
      'base64 kodlayıcı çevrimiçi',
      'resim base64 css',
      'png base64 dönüştürme',
      'base64 resim çözme',
    ],
    seo: {
      title: 'Resimden Base64 Oluştur – Data URI Aracı | UtilityFlow',
      description:
        'Küçük simge ve logoları Base64 Data URI, HTML img etiketi veya CSS arka planına dönüştürün. Base64 dizelerini geri resim önizlemesinde görün; ücretsizdir.',
      primaryKeyword: 'resim base64 dönüştürme',
      secondaryKeywords: [
        'base64 resim dönüştürücü',
        'fotoğraf base64 nasıl yapılır',
        'base64 resim çevirme',
        'data uri oluşturucu',
      ],
      longTailKeywords: [
        'png simge css arka plan data uri nasıl oluşturulur',
        'base64 dizesi resim önizlemesinde nasıl görülür',
        'küçük logo base64 formatına html e-posta için nasıl dönüştürülür',
        'resim ikili veri ile base64 boyutu arasındaki fark nedir',
      ],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Küçük simge, logo ve e-posta grafiklerini kendi içinde tam data:image/...;base64,... URI’sine, kopyalanabilir HTML <img> etiketine ve CSS background-image kurallarına dönüştürün — veya diğer modu seçerek işlenmemiş Base64 resim dizesini görüp indirin.',
  },
  'color-contrast-checker': {
    slug: 'renk-kontrast-denetimi',
    name: 'Renk Kontrast Denetleyici',
    shortDescription:
      'WCAG 2.1 AA/AAA standardına göre renk kontrast oranını denetleyin; HEX/RGB/HSL dönüştürün ve yüklenen resimden renk paleti çıkarın.',
    keywords: [
      'renk kontrast denetleyici',
      'wcag kontrast denetleyici',
      'renk kontrast oranı kontrol',
      'erişilebilir renk kombinasyonları',
      'hex rgb dönüştürücü',
      'renk paleti çıkarıcı',
      'kontrast denetleyici çevrimiçi',
      'metin renk kontrastı nasıl kontrol edilir',
      'wcag aa kontrast oranı',
    ],
    seo: {
      title: 'Renk Kontrast Denetimi – WCAG AA ve AAA | UtilityFlow',
      description:
        'Metin ve arka plan için WCAG 2.1 AA ve AAA kontrast oranlarını denetleyin. HEX, RGB ve HSL dönüştürün, resimden renk paleti çıkarın; tarayıcıda ücretsizdir.',
      primaryKeyword: 'renk kontrast denetleyici',
      secondaryKeywords: [
        'wcag kontrast denetleyici',
        'renk kontrast oranı kontrol',
        'erişilebilir renk kombinasyonları',
        'hex rgb dönüştürücü',
      ],
      longTailKeywords: [
        'wcag 2.1 kontrast oranı çevrimiçi nasıl kontrol edilir',
        'metin ve arka plan kontrastı ne kadar olmalı',
        'resimden baskın renk paleti nasıl çıkarılır',
        'koyu mod arayüz renk kontrastı nasıl kontrol edilir',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'WCAG 2.1’in resmî kurallarına (AA 4.5:1, AA büyük 3.0:1, AAA 7.0:1) göre arayüz renk çiftlerini denetleyin, eşzamanlı HEX/RGB/HSL değerlerini dönüştürün ve ekran görüntüsü veya logo yükleyerek içindeki baskın HEX renkleri doğrudan ön plan veya arka planınıza alın.',
  },
  'qr-code-scanner': {
    slug: 'qr-kod-tarayici',
    name: 'QR Kod Tarayıcı',
    shortDescription:
      'Yüklenen resim veya cihaz kamerasından QR kodu okuyup çözün; tarayıcıda, gizli; ayrıca vCard QR oluşturucuyla.',
    keywords: [
      'qr kod tarayıcı',
      'qr kod tarama nasıl yapılır',
      'qr kod tarayıcı çevrimiçi',
      'qr kod nasıl taranır',
      'resimden qr kod tarama',
      'qr kod okuyucu çevrimiçi',
      'qr kod çözme nasıl yapılır',
      'bilgisayardan qr kod tarama',
      'vcard qr kod oluşturucu',
    ],
    seo: {
      title: 'QR Kod Tarayıcı – Çevrimiçi QR Okuyucu | UtilityFlow',
      description:
        'Ekran görüntüsü, fotoğraf veya web kamerasından QR kodlarını tarayıp çözün. Tarayıcıda gizli çalışır; vCard iletişim QR kodu oluşturun, PNG ve SVG indirin.',
      primaryKeyword: 'qr kod tarayıcı',
      secondaryKeywords: [
        'qr kod tarama nasıl yapılır',
        'qr kod tarayıcı çevrimiçi',
        'qr kod nasıl taranır',
        'resimden qr kod tarama',
      ],
      longTailKeywords: [
        'ekran görüntüsünden qr kod çevrimiçi nasıl taranır',
        'bilgisayar web kamerasıyla qr kod uygulamadan nasıl taranır',
        'png jpg resimden qr kod nasıl çözülür',
        'vcard iletişim qr kodu ücretsiz nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Ekran görüntüsü, fotoğraf veya canlı kamera görüntüsünden QR kod içeriğini doğrudan tarayıcınızda okuyun — yük otomatik tanınır (URL, Wi-Fi, vCard, metin) — ve vCard iletişim QR oluşturucusuyla temiz PNG ve SVG iletişim kartları da dışa aktarın.',
  },
  'password-generator': {
    slug: 'sifre-olusturucu',
    name: 'Güvenli Şifre Oluşturucu',
    shortDescription:
      'crypto.getRandomValues ile önyargısız rastgele şifreler ve Diceware tarzı akılda kalıcı parola cümleleri oluşturun; tam entropiyle.',
    keywords: [
      'şifre oluşturucu',
      'güçlü şifre nasıl oluşturulur',
      'güvenli şifre oluşturucu',
      'rastgele şifre oluşturucu',
      'şifre oluşturma yöntemi',
      'parola cümlesi oluşturucu',
      'güçlü şifre oluşturucu çevrimiçi',
      'güvenli şifre nasıl oluşturulur',
      'şifre entropi denetleyici',
    ],
    seo: {
      title: 'Şifre Oluşturucu – Güçlü ve Güvenli Ücretsiz | UtilityFlow',
      description:
        'Tarayıcıda rastgele şifreler ve akılda kalıcı Diceware parola cümleleri oluşturun. Web Crypto ve entropi puanıyla çalışır; hiçbir şey kaydedilmez, ücretsizdir.',
      primaryKeyword: 'şifre oluşturucu',
      secondaryKeywords: [
        'güçlü şifre nasıl oluşturulur',
        'güvenli şifre oluşturucu',
        'rastgele şifre oluşturucu',
        'şifre oluşturma yöntemi',
      ],
      longTailKeywords: [
        'crypto getrandomvalues ile güvenli şifre nasıl oluşturulur',
        '5 kelimelik diceware parola cümlesi nasıl oluşturulur',
        '18 karakterli şifrede entropi ne kadar olur',
        'belirsiz karakter olmadan şifre nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Tarayıcının donanım destekli CSPRNG’si (window.crypto.getRandomValues) ile %100 yerel, yüksek entropili şifreler ve çok kelimeli akılda kalıcı parola cümleleri oluşturun — modülo önyargısını gidermek için reddetme örneklemesi ve tahmin edilebilir karakter konumlarından kaçınmak için Fisher-Yates karıştırmayla.',
  },
  'file-hash-verifier': {
    slug: 'dosya-hash-dogrulayici',
    name: 'Dosya Hash Doğrulayıcı',
    shortDescription:
      'Web Crypto ile herhangi bir dosyanın SHA-256, SHA-512, SHA-384 ve SHA-1 özetini yerelde çıkarın ve indirmenin doğruluğunu denetleyin.',
    keywords: [
      'dosya hash denetleyici',
      'sha256 denetleyici çevrimiçi',
      'dosya hash nasıl kontrol edilir',
      'sha256 doğrulama nasıl yapılır',
      'hash doğrulayıcı çevrimiçi',
      'dosya bütünlüğü kontrol nasıl yapılır',
      'sha256sum kontrol',
      'indirilen dosya doğrulama nasıl yapılır',
      'sha512 hash oluşturucu',
    ],
    seo: {
      title: 'Dosya Hash Doğrulayıcı – SHA-256 Kontrol | UtilityFlow',
      description:
        'Herhangi bir yerel dosyanın SHA-256, SHA-512, SHA-384 ve SHA-1 özetini tarayıcıda çıkarın. Yayınlanan özetle anında karşılaştırın; yükleme yok, ücretsizdir.',
      primaryKeyword: 'dosya hash denetleyici',
      secondaryKeywords: [
        'sha256 denetleyici çevrimiçi',
        'dosya hash nasıl kontrol edilir',
        'sha256 doğrulama nasıl yapılır',
        'hash doğrulayıcı çevrimiçi',
      ],
      longTailKeywords: [
        'indirilen yükleyicinin sha256 özeti nasıl kontrol edilir',
        'terminal olmadan dosya sha256 nasıl çıkarılır',
        'iso dosyasının sha256 doğrulaması tarayıcıda nasıl yapılır',
        'dosya özeti beklenen sağlama toplamıyla nasıl karşılaştırılır',
      ],
      schemaApplicationCategory: 'SecurityApplication',
    },
    intro:
      'Yazılım yükleyicisi, dosya, veri kümesi ve belgenin bütünlüğünü ve gerçekliğini yerelde denetleyin — Web Crypto’nun donanım destekli subtle.digest yöntemiyle SHA-256, SHA-512, SHA-384 ve SHA-1 özetlerini çıkararak beklenen sağlama toplamıyla anında karşılaştırın.',
  },
  'favicon-generator': {
    slug: 'favicon-olusturucu',
    name: 'Favicon Oluşturucu',
    shortDescription:
      'Monogram rozeti veya yüklenen logodan çok boyutlu PNG simgeler (16×16’dan 512×512’ye) ve gerçek çok çerçeveli favicon.ico oluşturun.',
    keywords: [
      'favicon oluşturucu',
      'favicon nasıl oluşturulur',
      'favicon.ico nasıl oluşturulur',
      'web sitesi favicon oluşturucu',
      'ücretsiz favicon yapma çevrimiçi',
      'png favicon dönüştürme',
      'apple touch simge oluşturucu',
      'pwa simge oluşturucu',
      'favicon oluşturma yöntemi',
    ],
    seo: {
      title: 'Favicon Oluşturucu – .ico ve PNG Simgeler | UtilityFlow',
      description:
        'Logonuzdan veya monogramdan favicon.ico ile 16–512 piksel PNG, Apple Touch ve PWA simgeleri hemen oluşturun. Ücretsiz, tarayıcıda çalışır, kayıt gerekmez.',
      primaryKeyword: 'favicon oluşturucu',
      secondaryKeywords: [
        'favicon nasıl oluşturulur',
        'favicon.ico nasıl oluşturulur',
        'web sitesi favicon oluşturucu',
        'ücretsiz favicon yapma çevrimiçi',
      ],
      longTailKeywords: [
        'web sitesi için favicon ico ücretsiz nasıl oluşturulur',
        'logodan 16x16 32x32 48x48 favicon nasıl oluşturulur',
        'pwa için 192x192 ve 512x512 simge nasıl oluşturulur',
        'metin baş harflerinden favicon çevrimiçi nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'DesignApplication',
    },
    intro:
      'Saniyeler içinde temiz monogram simge tasarlayın veya marka logonuzu yükleyin — 16×16, 32×32, 48×48, Apple Touch 180×180 ve PWA 192×192 / 512×512 temiz PNG simgeleri ve standartlara uygun gerçek çok resimli favicon.ico; yapıştırılabilir HTML <link> işaretlemesiyle.',
  },
};
