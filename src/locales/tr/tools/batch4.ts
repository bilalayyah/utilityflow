import type { ToolLocaleOverride } from '../../types';

/**
 * Turkish overrides — Batch 4: Social Media tools (10) + PDF tools (10).
 * Source: src/registry/batches/batch4SocialTools.ts,
 *         src/registry/batches/batch5PdfTools.ts.
 * Original Turkish, SEO-optimized for Turkish search intent.
 */
export const TR_BATCH_4_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'qr-code-generator': {
    slug: 'qr-kod-olusturucu',
    name: 'QR Kod Oluşturucu',
    shortDescription:
      'Web sitesi bağlantısı, metin, Wi-Fi şifresi, e-posta veya telefon numarası için taranabilir QR kod oluşturun, PNG veya SVG olarak indirin.',
    keywords: [
      'qr kod oluşturma',
      'qr kod oluşturucu ücretsiz',
      'wifi qr kod oluşturma',
      'qr kod png indir',
      'qr kod yapma online',
      'ücretsiz qr kod oluştur',
      'qr kod svg indir',
      'web sitesi qr kodu oluşturma',
      'telefondan qr kod oluşturma',
    ],
    seo: {
      title: 'QR Kod Oluşturucu – Ücretsiz QR Kod Yap | UtilityFlow',
      description:
        'Kayıt olmadan web sitesi, Wi-Fi, metin, e-posta veya telefon numarası için QR kod oluşturun. Tarayıcıda hazırlanır, PNG ve SVG olarak ücretsiz indirin.',
      primaryKeyword: 'qr kod oluşturma',
      secondaryKeywords: [
        'qr kod oluşturucu ücretsiz',
        'wifi qr kod oluşturma',
        'qr kod png indir',
        'qr kod yapma online',
      ],
      longTailKeywords: [
        'telefondan ücretsiz qr kod oluşturma',
        'wifi şifresi için qr kod oluşturma',
        'qr kodu png ve svg olarak indirme',
        'web sitesi bağlantısı için qr kod yapma',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Web sitesi bağlantısı, Wi-Fi şifresi, metin, e-posta veya telefon numarası — her türlü bilgiyi net ve taranabilir bir QR koda dönüştürün. Her şey tarayıcınızda gerçekleşir; süre sınırı veya takip yönlendirmesi yoktur, hazır QR kodu PNG veya SVG olarak hemen indirebilirsiniz.',
  },
  'utm-link-builder': {
    slug: 'utm-baglantisi-olusturucu',
    name: 'UTM Bağlantı Oluşturucu',
    shortDescription:
      'Google Analytics için utm_source, utm_medium, utm_campaign, utm_term ve utm_content içeren temiz takip bağlantıları oluşturun.',
    keywords: [
      'utm bağlantısı oluşturma',
      'utm link oluşturucu',
      'ücretsiz utm oluşturucu',
      'utm parametreleri nedir',
      'google analytics utm bağlantısı',
      'instagram biyografi utm bağlantısı',
      'utm bağlantı yapma online',
      'kampanya url oluşturucu',
      'utm takip bağlantısı oluşturma',
    ],
    seo: {
      title: 'UTM Bağlantı Oluşturucu – Kampanya Takibi | UtilityFlow',
      description:
        'Sosyal medya, e-posta ve reklamlar için UTM parametreli kampanya bağlantıları oluşturun. Şablonlar, küçük harf düzeni ve parametre koruması tarayıcıda çalışır.',
      primaryKeyword: 'utm bağlantısı oluşturma',
      secondaryKeywords: [
        'utm link oluşturucu',
        'ücretsiz utm oluşturucu',
        'google analytics utm bağlantısı',
        'instagram biyografi utm bağlantısı',
      ],
      longTailKeywords: [
        'google analytics için utm bağlantısı oluşturma',
        'instagram biyografisi için utm bağlantısı yapma',
        'e-posta kampanyası için utm takip bağlantısı oluşturma',
        'utm parametreleriyle kampanya url oluşturma',
      ],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'Sosyal medya biyografisi, e-posta bülteni ve ücretli reklamlar için tutarlı, temiz ve standart UTM takip bağlantıları oluşturun. Eski sorgu parametreleri ve # ile başlayan bölümler korunur, şablonlar sayesinde her seferinde doğru biçim elde edilir.',
  },
  'social-character-limit-checker': {
    slug: 'sosyal-medya-karakter-siniri',
    name: 'Sosyal Medya Karakter Sınırı Denetleyici',
    shortDescription:
      'X, Instagram, LinkedIn, TikTok, Threads, Bluesky ve YouTube gönderilerinizin uzunluğunu denetleyin, akışta nerede kesileceğini önizleyin.',
    keywords: [
      'instagram karakter sınırı',
      'twitter karakter sınırı',
      'instagram biyografi karakter sınırı',
      'linkedin gönderi karakter sınırı',
      'tiktok açıklama sınırı',
      'x gönderi karakter sınırı',
      'sosyal medya karakter sayacı',
      'threads karakter sınırı',
      'youtube açıklama karakter sınırı',
    ],
    seo: {
      title: 'Sosyal Medya Karakter Sınırı – Ücretsiz Araç | UtilityFlow',
      description:
        'X, Instagram, LinkedIn, TikTok, Threads, Bluesky ve YouTube karakter sınırlarını denetleyin. Akışta nerede kesileceğini ve emoji sayımını görün — ücretsiz.',
      primaryKeyword: 'instagram karakter sınırı',
      secondaryKeywords: [
        'twitter karakter sınırı',
        'linkedin gönderi karakter sınırı',
        'sosyal medya karakter sayacı',
        'instagram biyografi karakter sınırı',
      ],
      longTailKeywords: [
        'instagram biyografisine kaç karakter yazılabilir',
        'x twitter gönderi karakter sınırı kaç',
        'linkedin gönderisi kaç karakter olur',
        'tiktok açıklama karakter sınırı nedir',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Bir kez yazın ve gönderinizin X, Instagram, LinkedIn, TikTok, Threads, Bluesky ve YouTube sınırlarına uyup uymadığını hemen görün — X bağlantılarının 23 karakter sayılması, emoji sayımı ve akışta "daha fazla göster" sonrası kesilen bölümün önizlemesiyle birlikte.',
  },
  'unicode-fancy-text-formatter': {
    slug: 'havali-yazi-olusturucu',
    name: 'Havalı Yazı Oluşturucu',
    shortDescription:
      'Sade metni kalın, italik, tek aralıklı, el yazısı, küçük büyük harf ve tam genişlikli Unicode stillerine dönüştürüp biyografiniz için kopyalayın.',
    keywords: [
      'havalı yazı oluşturucu',
      'şekilli yazı oluşturucu',
      'instagram havalı biyografi',
      'kalın yazı oluşturucu',
      'süslü yazı oluşturucu',
      'şekilli isim oluşturucu',
      'instagram biyografi yazı stili',
      'unicode kalın yazı',
      'havalı yazı kopyala yapıştır',
    ],
    seo: {
      title: 'Havalı Yazı Oluşturucu – Şekilli Yazı Tipleri | UtilityFlow',
      description:
        'Sade metni kalın, italik, tek aralıklı, el yazısı ve küçük büyük harf Unicode stillerine dönüştürün. Instagram biyografinize kopyalayıp yapıştırın — ücretsiz.',
      primaryKeyword: 'havalı yazı oluşturucu',
      secondaryKeywords: [
        'şekilli yazı oluşturucu',
        'instagram havalı biyografi',
        'kalın yazı oluşturucu',
        'süslü yazı oluşturucu',
      ],
      longTailKeywords: [
        'instagram biyografisi için havalı yazı oluşturma',
        'whatsapp biyografisi havalı yazı kopyala yapıştır',
        'kalın ve italik unicode yazı oluşturucu online',
        'şekilli isim yazı tipi oluşturucu ücretsiz',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sade harfleri Unicode kalın, italik, tek aralıklı, el yazısı, küçük büyük harf ve tam genişlikli stillere dönüştürün — bu stiller sade metinli biyografilerde de aynı görünür, kopyalayıp Instagram, WhatsApp veya LinkedIn üzerinde her yere yapıştırabilirsiniz.',
  },
  'bio-line-break-formatter': {
    slug: 'instagram-biyografi-satir-boslugu',
    name: 'Instagram Biyografi Satır Boşluğu Aracı',
    shortDescription:
      'Instagram biyografi ve açıklamalarındaki paragraflar arasındaki boş satırları koruyun — gizli boşlukları temizleyin ve görünmez ayırıcı ekleyin.',
    keywords: [
      'instagram biyografi satır boşluğu',
      'instagram biyografide satır atlama',
      'instagram açıklama satır boşluğu',
      'biyografi satır boşluğu oluşturucu',
      'instagram biyografi boşluk bırakma',
      'instagram biyografi görünmez karakter',
      'instagram biyografide boşluk bırakma',
      'biyografide satır atlama',
      'instagram açıklama boşluk aracı',
    ],
    seo: {
      title: 'Instagram Biyografi Satır Boşluğu Aracı | UtilityFlow',
      description:
        'Instagram biyografi ve açıklamalarındaki paragrafların boş satırlarını koruyun. Gizli boşlukları temizleyin, görünmez ayırıcı ekleyin — ücretsiz, tarayıcıda.',
      primaryKeyword: 'instagram biyografi satır boşluğu',
      secondaryKeywords: [
        'instagram biyografide satır atlama',
        'instagram açıklama satır boşluğu',
        'biyografi satır boşluğu oluşturucu',
        'instagram biyografi görünmez karakter',
      ],
      longTailKeywords: [
        'instagram biyografisine satır atlama nasıl yapılır',
        'instagram açıklamasına boşluk nasıl bırakılır',
        'biyografide boş satır nasıl oluşturulur',
        'instagram biyografi boşluk aracı online ücretsiz',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Sosyal uygulamalar biyografi ve açıklamalarınızdaki boş satırları sık sık yok eder. Bu araç gizli sondaki boşlukları temizleyip isterseniz görünmez Braille ayırıcı ekleyerek paragraflarınızın temiz biçimini korur.',
  },
  'youtube-timestamp-generator': {
    slug: 'youtube-zaman-damgasi-olusturucu',
    name: 'YouTube Bölüm ve Zaman Damgası Oluşturucu',
    shortDescription:
      'YouTube videoları için doğru biçimde bölümler ve tıklanabilir ?t= zaman damgası bağlantıları oluşturun, YouTube kurallarına göre doğrulayın.',
    keywords: [
      'youtube zaman damgası oluşturucu',
      'youtube bölüm nasıl oluşturulur',
      'youtube video bölümleri',
      'youtube zaman damgası bağlantısı oluşturma',
      'youtube açıklama zaman damgası',
      'youtube bölüm oluşturucu',
      'video zaman damgası yapma',
      'youtube zaman damgası ekleme',
      'youtube bölüm zaman damgası biçimi',
    ],
    seo: {
      title: 'YouTube Bölüm Oluşturucu – Zaman Damgası Yap | UtilityFlow',
      description:
        'YouTube video bölümlerini 00:00 ile başlayıp doğru biçimde oluşturun, 10 saniye kuralıyla doğrulayın ve paylaşılabilir ?t= bağlantıları alın — ücretsiz.',
      primaryKeyword: 'youtube zaman damgası oluşturucu',
      secondaryKeywords: [
        'youtube bölüm nasıl oluşturulur',
        'youtube video bölümleri',
        'youtube zaman damgası bağlantısı oluşturma',
        'youtube bölüm oluşturucu',
      ],
      longTailKeywords: [
        'youtube videosuna bölüm nasıl eklenir',
        'youtube açıklamasına zaman damgası nasıl eklenir',
        'youtube zaman damgası bağlantısı nasıl oluşturulur',
        'youtube bölümü 00:00 ile nasıl başlatılır',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'YouTube video açıklamanız için temiz ve sıralı bölümler oluşturun — YouTube kurallarına göre (00:00 ile başlangıç, en az 3 bölüm, 10 saniye aralık) otomatik doğrulanır, yorum, bülten veya program notları için tıklanabilir ?t= bağlantıları da alırsınız.',
  },
  'social-thumbnail-previewer': {
    slug: 'youtube-kucuk-resim-onizleme',
    name: 'YouTube Küçük Resim Önizleme Aracı',
    shortDescription:
      'Küçük resmi ve başlığı yayımlamadan önce masaüstü ve kenar çubuğu akış düzenlerinde görün, 16:9 ve 2 MB denetimiyle.',
    keywords: [
      'youtube küçük resim önizleme',
      'youtube küçük resim denetleyici',
      'youtube küçük resim boyut denetimi',
      'küçük resim önizleme aracı',
      'youtube küçük resim nasıl kontrol edilir',
      'youtube başlık önizleme',
      'küçük resim testi online',
      'youtube küçük resim 1280x720 denetimi',
      'video küçük resim önizleme',
    ],
    seo: {
      title: 'YouTube Küçük Resim Önizleme – Önce Denetleyin | UtilityFlow',
      description:
        'Yayımlamadan önce küçük resmi ve başlığı açık ve koyu YouTube akışında görün. 16:9, 1280×720 ve 2 MB denetimi yapın, her şey yerel — hiçbir şey yüklenmez.',
      primaryKeyword: 'youtube küçük resim önizleme',
      secondaryKeywords: [
        'youtube küçük resim denetleyici',
        'youtube küçük resim boyut denetimi',
        'küçük resim önizleme aracı',
        'youtube başlık önizleme',
      ],
      longTailKeywords: [
        'youtube küçük resmini yayımlamadan önce nasıl kontrol edilir',
        'koyu modda youtube küçük resim önizlemesi görün',
        'youtube küçük resim 1280x720 boyut denetimi online',
        'youtube başlığı ne kadar uzun görünür önizleyin',
      ],
      schemaApplicationCategory: 'MultimediaApplication',
    },
    intro:
      'Yayımlamadan videonuzun küçük resmini ve başlığını gerçekçi ana akış ve kenar çubuğu düzenlerinde deneyin — açık ve koyu modda, 1280×720 HD boyut, 16:9 oran, 2 MB sınır ve sağ alt köşede görünen süre rozeti denetimiyle, tamamen tarayıcınızda.',
  },
  'hashtag-formatter': {
    slug: 'hashtag-duzenleyici',
    name: 'Hashtag Oluşturucu ve Düzenleyici',
    shortDescription:
      'Dağınık anahtar kelimeleri temiz hashtaglere dönüştürün, yinelenenleri kaldırın, #CamelCase biçiminde düzenleyin ve platform sınırlarını denetleyin.',
    keywords: [
      'hashtag oluşturucu',
      'instagram hashtag oluşturucu',
      'hashtag nasıl oluşturulur',
      'instagram için en iyi hashtagler',
      'hashtag düzenleyici',
      'instagram hashtag kopyala yapıştır',
      'hashtag yapma online',
      'reels için hashtag',
      'yinelenen hashtag kaldırma',
    ],
    seo: {
      title: 'Hashtag Oluşturucu – Instagram Etiketleri | UtilityFlow',
      description:
        'Anahtar kelime listesini yinelenmeyen #CamelCase hashtaglere dönüştürün. Instagram 30 hashtag sınırını denetleyin, grubu nokta ayırıcıyla alın — ücretsiz.',
      primaryKeyword: 'hashtag oluşturucu',
      secondaryKeywords: [
        'instagram hashtag oluşturucu',
        'hashtag nasıl oluşturulur',
        'instagram için en iyi hashtagler',
        'hashtag düzenleyici',
      ],
      longTailKeywords: [
        'instagram reels için en iyi hashtag nasıl oluşturulur',
        'hashtag listesinden yinelenenler nasıl kaldırılır',
        'camelcase hashtag nasıl oluşturulur',
        'instagramda kaç hashtag kullanılabilir',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Virgülle ayrılmış anahtar kelimeleri veya dağınık etiket listesini yinelenmeyen ve hatalı noktalama işareti içermeyen temiz hashtaglere dönüştürün — ekran okuyucular için kolay #CamelCase veya küçük harfle, tek satır, dikey veya nokta ayırıcılı blok hâlinde hazır.',
  },
  'caption-template-builder': {
    slug: 'instagram-aciklama-sablonu',
    name: 'Instagram Açıklama ve Kanca Şablon Oluşturucu',
    shortDescription:
      'PAS, öğretici, önce-sonra-köprü ve denetim listesi gibi hazır çerçevelerle sosyal medya açıklamalarının temiz yapısını oluşturun — yapay zekâsız.',
    keywords: [
      'instagram açıklama oluşturucu',
      'instagram açıklaması nasıl yazılır',
      'en iyi instagram açıklamaları',
      'açıklama şablonu',
      'sosyal medya açıklama fikirleri',
      'linkedin gönderi şablonu',
      'instagram açıklaması örnekleri',
      'açıklama yazma yöntemi',
      'instagram reels kanca cümlesi',
    ],
    seo: {
      title: 'Instagram Açıklama Oluşturucu – Kanca Şablonu | UtilityFlow',
      description:
        'PAS, öğretici, önce-sonra-köprü ve denetim listesi çerçeveleriyle temiz sosyal medya açıklamaları oluşturun. Yalnızca kendi sözlerinizle yazın — ücretsiz.',
      primaryKeyword: 'instagram açıklama oluşturucu',
      secondaryKeywords: [
        'instagram açıklaması nasıl yazılır',
        'en iyi instagram açıklamaları',
        'açıklama şablonu',
        'sosyal medya açıklama fikirleri',
      ],
      longTailKeywords: [
        'instagram açıklaması nasıl yazılır örneklerle',
        'reels için kanca cümlesi nasıl yazılır',
        'linkedin gönderi yapı şablonu ücretsiz',
        'pas çerçevesiyle açıklama nasıl oluşturulur',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Kopya yazarlığının hazır çerçeveleri — Sorun–Kışkırtma–Çözüm (PAS), adım adım öğretici, önce–sonra–köprü, denetim listesi ve efsane ile gerçek — ile kendi sözlerinizden temiz ve okunması kolay sosyal gönderileri hızlıca yazın, yapay zekâ ile üretilmiş metin olmadan.',
  },
  'social-handle-formatter': {
    slug: 'kullanici-adi-olusturucu',
    name: 'Sosyal Medya Kullanıcı Adı Oluşturucu',
    shortDescription:
      'Marka adından her platform için doğru kullanıcı adı çeşitleri oluşturun, kuralları denetleyin ve profil bağlantılarıyla uygunluğu görün.',
    keywords: [
      'kullanıcı adı oluşturucu',
      'instagram kullanıcı adı fikirleri',
      'şekilli kullanıcı adı oluşturucu',
      'instagram için en iyi kullanıcı adı',
      'kullanıcı adı uygunluk denetimi',
      'benzersiz kullanıcı adı fikirleri',
      'sosyal medya kullanıcı adı oluşturucu',
      'instagram kullanıcı adı nasıl oluşturulur',
      'havalı kullanıcı adı oluşturucu',
    ],
    seo: {
      title: 'Kullanıcı Adı Oluşturucu – Instagram ve TikTok | UtilityFlow',
      description:
        'Marka adından X, Instagram, TikTok, YouTube, Threads ve GitHub için kullanıcı adı çeşitleri oluşturun. Kuralları denetleyin, uygunluğu profilden görün.',
      primaryKeyword: 'kullanıcı adı oluşturucu',
      secondaryKeywords: [
        'instagram kullanıcı adı fikirleri',
        'şekilli kullanıcı adı oluşturucu',
        'instagram için en iyi kullanıcı adı',
        'kullanıcı adı uygunluk denetimi',
      ],
      longTailKeywords: [
        'instagram için benzersiz kullanıcı adı nasıl oluşturulur',
        'marka adından kullanıcı adı fikri nasıl bulunur',
        'kullanıcı adı uygun mu nasıl kontrol edilir',
        'x instagram tiktok için aynı kullanıcı adı nasıl alınır',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Herhangi bir marka, proje veya içerik üreticisi adını altı büyük platform için temiz kullanıcı adı seçeneklerine dönüştürün — her seçeneğin uzunluk ve işaret kurallarını denetleyin, doğrudan profil bağlantısını açarak adın uygun olup olmadığını görün.',
  },
  'merge-pdf': {
    slug: 'pdf-birlestir',
    name: 'PDF Birleştir',
    shortDescription:
      'Birden fazla PDF dosyasını istediğiniz sırayla tek bir PDF dosyasında birleştirin — tarayıcıda, hiçbir sunucuya yüklemeden.',
    keywords: [
      'pdf birleştirme',
      'pdf birleştir online ücretsiz',
      'pdf dosyalarını birleştirme',
      'pdf birleştirme ücretsiz',
      'pdf dosyası birleştirme yöntemi',
      'pdf birleştirme aracı',
      'online pdf birleştir',
      'pdf dosyalarını tek dosyada birleştir',
      'pdf birleştirme nasıl yapılır',
    ],
    seo: {
      title: 'PDF Birleştir – Birden Fazla PDF Tek Dosyada | UtilityFlow',
      description:
        'Birden fazla PDF dosyasını istediğiniz sırayla tek bir belgede birleştirin. Her şey tarayıcınızda gerçekleşir, yükleme yok, sınır yok — ücretsiz ve gizli.',
      primaryKeyword: 'pdf birleştirme',
      secondaryKeywords: [
        'pdf birleştir online ücretsiz',
        'pdf dosyalarını birleştirme',
        'pdf birleştirme ücretsiz',
        'pdf birleştirme aracı',
      ],
      longTailKeywords: [
        'pdf dosyalarını yüklemeden birleştirme',
        'gizli pdf birleştirme nasıl yapılır ücretsiz',
        'pdf birleştirirken sıra nasıl değiştirilir',
        'telefondan pdf birleştirme online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'İki veya daha fazla PDF dosyasını doğrudan tarayıcı belleğinde tek bir temiz belgeye birleştirin. Her dosyanın sayfa sayısını görün, yukarı-aşağı ile sırayı değiştirin, çıktı dosyasının adını seçin ve hemen indirin — dosyalarınız hiçbir sunucuya gitmez.',
  },
  'split-pdf': {
    slug: 'pdf-bol',
    name: 'PDF Böl – Sayfaları Ayır',
    shortDescription:
      'PDF dosyasından belirli sayfa aralıklarını, tek veya çift sayfaları çıkarın ya da tüm PDF dosyasını tek tek sayfa dosyalarına bölün — hepsi yerel.',
    keywords: [
      'pdf bölme',
      'pdf sayfa ayırma',
      'pdf sayfalarını ayırma',
      'pdf bölücü online ücretsiz',
      'pdf sayfa çıkarıcı',
      'pdf sayfaları ayırma nasıl yapılır',
      'pdf sayfa çıkarma',
      'pdf bölme aracı ücretsiz',
      'pdf sayfa nasıl çıkarılır',
    ],
    seo: {
      title: 'PDF Böl – Sayfaları Çıkar ve Ayır Ücretsiz | UtilityFlow',
      description:
        'PDF dosyasından belirli sayfa aralıklarını (ör. 1-3, 5) çıkarın, tek-çift sayfaları ayırın veya dosyayı tek sayfalara bölün — tarayıcıda, yüklemeden, ücretsiz.',
      primaryKeyword: 'pdf bölme',
      secondaryKeywords: [
        'pdf sayfa ayırma',
        'pdf sayfalarını ayırma',
        'pdf bölücü online ücretsiz',
        'pdf sayfa çıkarıcı',
      ],
      longTailKeywords: [
        'pdf dosyasından yalnızca bazı sayfalar nasıl çıkarılır',
        'pdf tek çift sayfa ayırma nasıl yapılır',
        'pdf dosyasını tek tek sayfalara bölme',
        'pdf bölüp seçilen sayfaları indirme',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Doğru sayfa aralığını çıkarın (1-3, 5, 8-10), çift taraflı belgeler için tek veya çift sayfaları ayırın ya da kısa PDF dosyalarını tek tek sayfa dosyalarına bölün — hepsi tamamen tarayıcı belleğinizde gerçekleşir.',
  },
  'images-to-pdf': {
    slug: 'resimden-pdf-olustur',
    name: 'Resimden PDF Oluştur',
    shortDescription:
      'PNG, JPG ve WebP resimleri A4, US Letter veya resmin gerçek boyutunda tek bir PDF dosyasında birleştirin — tarayıcıda.',
    keywords: [
      'jpg pdf çevirme',
      'resimden pdf oluşturma',
      'fotoğrafı pdf yapma',
      'jpg pdf dönüştürücü',
      'png pdf çevirme',
      'resimden pdf yapma',
      'fotoğraf pdf dönüştürücü',
      'birden fazla resmi pdf yapma',
      'ekran görüntüsü pdf yapma',
    ],
    seo: {
      title: 'JPG PDF Çevir – Resmi PDF Dosyasına Dönüştür | UtilityFlow',
      description:
        'JPG, PNG ve WebP fotoğrafları tek bir temiz çok sayfalı PDF dosyasına dönüştürün. A4, US Letter veya gerçek boyut seçin, sırayı değiştirin — tarayıcıda.',
      primaryKeyword: 'jpg pdf çevirme',
      secondaryKeywords: [
        'resimden pdf oluşturma',
        'fotoğrafı pdf yapma',
        'jpg pdf dönüştürücü',
        'png pdf çevirme',
      ],
      longTailKeywords: [
        'telefon fotoğrafını pdf yapma ücretsiz',
        'birden fazla resmi tek pdf dosyası yapma',
        'ekran görüntüsünü pdf dosyasına çevirme',
        'jpg png webp resmi a4 pdf yapma',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Taramalar, makbuzlar veya ekran görüntüleri — JPG, PNG ve WebP resimleri tek bir temiz çok sayfalı PDF dosyasında birleştirin. Resimleri görerek sıralayın, A4 dikey, US Letter veya resmin gerçek boyutunu seçin, kenar boşluklarını ayarlayın ve PDF dosyasını tarayıcıda hazırlayın.',
  },
  'pdf-to-images': {
    slug: 'pdf-ten-resim-olustur',
    name: 'PDF Dosyasından Resim Oluştur (PNG / JPG)',
    shortDescription:
      'PDF sayfalarını indirilebilir PNG veya JPG resimlere dönüştürün, 1.0× ile 2.0× çözünürlükle — PDF.js ile, tamamen yerel.',
    keywords: [
      'pdf jpg çevirme',
      'pdf png çevirme',
      'pdf resim yapma',
      'pdf resim dönüştürücü',
      'pdf sayfasını jpg yapma',
      'pdf fotoğraf çıkarma',
      'pdf png dönüştürücü ücretsiz',
      'pdf sayfa resim çevirme',
      'pdf jpg dönüştürme',
    ],
    seo: {
      title: 'PDF JPG Çevir – Sayfayı Resme Dönüştür | UtilityFlow',
      description:
        'PDF dosyasının herhangi bir sayfasını net PNG veya hafif JPG resme dönüştürün, 2× çözünürlüğe kadar. Sayfa seçin, yalnızca gereken resmi indirin — ücretsiz.',
      primaryKeyword: 'pdf jpg çevirme',
      secondaryKeywords: [
        'pdf png çevirme',
        'pdf resim yapma',
        'pdf resim dönüştürücü',
        'pdf sayfasını jpg yapma',
      ],
      longTailKeywords: [
        'pdf sayfasını yüksek çözünürlüklü png yapma',
        'pdf slaytlarını resme çevirme',
        'pdf dosyasından yalnızca bir sayfayı jpg yapma',
        'pdf dosyasını yüklemeden resme çevirme',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Mozilla PDF.js motoruyla PDF sayfalarını net PNG veya hafif JPG resimlere dönüştürün, doğrudan tarayıcınızda. Sayfa aralığı seçin, ölçeği (1.0×–2.0×) ayarlayın ve önizlemeye bakarak yalnızca gereken resimleri indirin.',
  },
  'pdf-page-rotator': {
    slug: 'pdf-sayfa-dondur',
    name: 'PDF Sayfa Döndür',
    shortDescription:
      'Eğik veya ters PDF sayfalarını 90°, 180° veya 270° kalıcı olarak döndürün — tümü, tek-çift veya belirli sayfalar, kalite kaybı olmadan.',
    keywords: [
      'pdf döndürme',
      'pdf sayfa döndürme',
      'pdf düzeltme',
      'pdf döndürme online ücretsiz',
      'ters pdf düzeltme',
      'pdf sayfası ters nasıl düzeltilir',
      'pdf 90 derece döndürme',
      'pdf yön düzeltme',
      'pdf çevirme yöntemi',
    ],
    seo: {
      title: 'PDF Döndür – Eğik Sayfaları Düzelt Ücretsiz | UtilityFlow',
      description:
        'Eğik veya ters PDF sayfalarını 90°, 180° veya 270° kalıcı olarak döndürün. Tüm sayfalar, tek-çift veya aralık seçin — tarayıcıda, yüklemeden, tamamen ücretsiz.',
      primaryKeyword: 'pdf döndürme',
      secondaryKeywords: [
        'pdf sayfa döndürme',
        'pdf düzeltme',
        'pdf döndürme online ücretsiz',
        'ters pdf düzeltme',
      ],
      longTailKeywords: [
        'taranmış ters pdf nasıl düzeltilir',
        'pdf dosyasının yalnızca 2 ve 4. sayfasını döndürme',
        'pdf sayfasını 90 derece döndürüp kaydetme',
        'pdf yön düzeltme aracı online',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Eğik tablo veya ters taranmış PDF sayfalarını sayfa sözlüğünde kalıcı olarak düzeltin. 90° sağa, 90° sola veya 180° döndürün — tüm sayfalarda, tek veya çift sayfalarda ya da belirli sayfa aralığında, yeniden kodlamadan.',
  },
  'reorder-delete-pdf-pages': {
    slug: 'pdf-sayfa-duzenle',
    name: 'PDF Sayfa Sırala ve Sil',
    shortDescription:
      'PDF sayfalarını küçük resimlere bakarak yukarı-aşağı taşıyın, sayfa kopyalayın veya gereksiz sayfaları silin — hepsi tarayıcıda.',
    keywords: [
      'pdf sayfa sıralama',
      'pdf sayfa silme',
      'pdf sayfa kaldırma',
      'pdf sayfalarını düzenleme',
      'pdf boş sayfa silme',
      'pdf sayfa kopyalama',
      'pdf sayfalarını sıraya koyma',
      'pdf yeniden düzenleme online',
      'pdf sayfa taşıma',
    ],
    seo: {
      title: 'PDF Sayfa Sırala – Sil, Kopyala ve Değiştir | UtilityFlow',
      description:
        'PDF sayfalarını küçük resimlere bakarak tarayıcıda sıralayın — sayfayı kolayca taşıyın, kopyalayın veya boş sayfayı silin, temiz PDF dosyasını hemen indirin.',
      primaryKeyword: 'pdf sayfa sıralama',
      secondaryKeywords: [
        'pdf sayfa silme',
        'pdf sayfa kaldırma',
        'pdf sayfalarını düzenleme',
        'pdf boş sayfa silme',
      ],
      longTailKeywords: [
        'pdf sayfalarının sırası yüklemeden nasıl değiştirilir',
        'pdf dosyasından boş sayfa nasıl silinir online',
        'pdf dosyasında bir sayfa nasıl kopyalanır',
        'pdf sayfalarını görsel olarak sıralama',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF dosyanızın sayfalarını küçük resim kartları olarak görün, dağılmış sayfaları ileri-geri taşıyın, kapak veya şablon sayfayı kopyalayın, boş sayfaları silin ve temiz, doğru sıralı PDF dosyasını tarayıcıda dışa aktarın.',
  },
  'pdf-watermark': {
    slug: 'pdf-filigran-ekle',
    name: 'PDF Filigran Ekle',
    shortDescription:
      'PDF sayfalarına GİZLİ veya TASLAK gibi metin filigranlarını eğik veya ortada ekleyin, boyut ve saydamlık size kalmış.',
    keywords: [
      'pdf filigran ekleme',
      'pdf filigran ekleme yöntemi',
      'pdf filigran online ücretsiz',
      'gizli filigran pdf',
      'taslak filigran pdf',
      'pdf filigran ekle',
      'pdf damga ekleme',
      'filigran pdf ücretsiz araç',
      'pdf damga nasıl eklenir',
    ],
    seo: {
      title: 'PDF Filigran Ekle – Ücretsiz Online Araç | UtilityFlow',
      description:
        'Herhangi bir PDF dosyasına tarayıcıda hemen filigran ekleyin — eğik veya ortada metin, boyut, saydamlık, açı ve renk size kalmış, yüklemeden, tamamen ücretsiz.',
      primaryKeyword: 'pdf filigran ekleme',
      secondaryKeywords: [
        'pdf filigran ekleme yöntemi',
        'pdf filigran online ücretsiz',
        'gizli filigran pdf',
        'taslak filigran pdf',
      ],
      longTailKeywords: [
        'pdf dosyasına gizli filigran nasıl eklenir',
        'pdf dosyasının ilk sayfasına filigran nasıl eklenir',
        'yüklemeden pdf dosyasına filigran ekleme',
        'pdf dosyasına taslak damga nasıl eklenir ücretsiz',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'GİZLİ, TASLAK veya DAĞITMAYIN gibi metin filigranlarını herhangi bir PDF dosyasının tüm sayfalarına veya yalnızca ilk sayfasına ekleyin — yazı tipi boyutu, saydamlık, döndürme açısı ve renk için canlı denetimlerle, tamamen tarayıcınızda.',
  },
  'add-pdf-page-numbers': {
    slug: 'pdf-sayfa-numarasi-ekle',
    name: 'PDF Sayfa Numarası Ekle',
    shortDescription:
      'PDF belgelerine "Sayfa 1 / N", "1 / N" veya "1" gibi temiz sayfa numaraları ekleyin, kapak sayfasını atlama seçeneğiyle.',
    keywords: [
      'pdf sayfa numarası ekleme',
      'pdf sayfa numarası ekle',
      'pdf numaralandırma',
      'pdf sayfa numarası ekleme yöntemi',
      'pdf sayfa numarası ücretsiz',
      'pdf sayfa numarası aracı',
      'pdf sayfa numarası nasıl eklenir',
      'bates numaralandırma pdf',
      'pdf sayfalandırma',
    ],
    seo: {
      title: 'PDF Sayfa Numarası Ekle – Ücretsiz Araç | UtilityFlow',
      description:
        'PDF dosyalarına tarayıcıda sayfa numarası ekleyin — temiz vektör metin, kapak sayfasını atlama ve başlangıç numarası seçeneği, yüklemeden, tamamen ücretsiz.',
      primaryKeyword: 'pdf sayfa numarası ekleme',
      secondaryKeywords: [
        'pdf sayfa numarası ekle',
        'pdf numaralandırma',
        'pdf sayfa numarası ekleme yöntemi',
        'pdf sayfa numarası ücretsiz',
      ],
      longTailKeywords: [
        'pdf dosyasına sayfa 1 / n numarası nasıl eklenir',
        'pdf numaralandırma kapak sayfası atlayarak nasıl yapılır',
        'birleştirilmiş pdf dosyasına sayfa numarası ekleme',
        'pdf dosyasına yüklemeden sayfa numarası ekleme',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Birleştirilmiş paketleri, hukuki belgeleri veya ders notlarını temiz vektör tipografisiyle numaralandırın — "Sayfa 1 / N", "1 / N" veya yalnızca rakam seçin, alt veya üst konumu, başlangıç numarası ve kapak sayfasını atlama seçeneğiyle birlikte.',
  },
  'pdf-metadata-editor': {
    slug: 'pdf-ustveri-duzenleyici',
    name: 'PDF Üstveri Düzenleyici',
    shortDescription:
      'PDF dosyasının gizli başlık, yazar, konu, anahtar kelime, oluşturucu ve üretici etiketlerini görün, değiştirin veya kaldırın — tarayıcıda, tam gizlilikle.',
    keywords: [
      'pdf üstveri düzenleyici',
      'pdf üstveri değiştirme',
      'pdf yazar kaldırma',
      'pdf üstveri kaldırma',
      'pdf başlık değiştirme',
      'pdf özellik düzenleme',
      'pdf üstveri görüntüleyici',
      'pdf yazar adı kaldırma',
      'pdf üstveri denetimi',
    ],
    seo: {
      title: 'PDF Üstveri Düzenleyici – Gör ve Değiştir | UtilityFlow',
      description:
        'PDF dosyasının başlık, yazar, konu, anahtar kelime etiketlerini tarayıcıda görün, değiştirin veya kaldırın — paylaşmadan önce özel bilgileri temizleyin.',
      primaryKeyword: 'pdf üstveri düzenleyici',
      secondaryKeywords: [
        'pdf üstveri değiştirme',
        'pdf yazar kaldırma',
        'pdf üstveri kaldırma',
        'pdf başlık değiştirme',
      ],
      longTailKeywords: [
        'pdf dosyasından gizli yazar üstverisi nasıl kaldırılır',
        'pdf başlığı tarayıcı sekmesinde nasıl değiştirilir',
        'pdf paylaşmadan önce üstveri nasıl kaldırılır',
        'pdf özellikleri online düzenleme yüklemeden',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF başlığında saklı bilgileri görün — belgenin başlığı, yazarı, konusu, anahtar kelimeleri, oluşturucu ve üretici yazılımı — böylece tarayıcı sekmesinde temiz bir başlık görünür veya herkese açık paylaşmadan önce kimlik belirten özel bilgiler kaldırılabilir.',
  },
  'pdf-text-extractor': {
    slug: 'pdf-ten-metin-cikar',
    name: 'PDF Dosyasından Metin Çıkar',
    shortDescription:
      'PDF belgelerinden sayfa sayfa seçilebilir metni çıkarıp kopyalayın veya .txt dosyası indirin — PDF.js ile, tarayıcıda.',
    keywords: [
      'pdf metin çıkarma',
      'pdf metin çıkarıcı',
      'pdf txt dönüştürücü',
      'pdf metin kopyalama',
      'pdf metin çıkarma online',
      'pdf metni txt yapma',
      'pdf metin çıkarıcı online',
      'pdf metin kopyalanmıyor',
      'pdf metin ücretsiz',
    ],
    seo: {
      title: 'PDF Metin Çıkar – PDF Dosyasını TXT Yap | UtilityFlow',
      description:
        'PDF dosyasından sayfa sayfa metin çıkarın — sayfa işaretleri, kelime sayısı ve .txt indirme ile, tarayıcıda, tamamen ücretsiz. Taranmış PDF dosyasını da tanır.',
      primaryKeyword: 'pdf metin çıkarma',
      secondaryKeywords: [
        'pdf metin çıkarıcı',
        'pdf txt dönüştürücü',
        'pdf metin kopyalama',
        'pdf metin çıkarma online',
      ],
      longTailKeywords: [
        'gizli pdf dosyasından yüklemeden metin çıkarma',
        'pdf dosyasını sayfa işaretli txt dosyası yapma',
        'pdf dosyasından metin kopyalanmıyor ne yapmalı',
        'taranmış pdf dosyasında metin var mı nasıl anlaşılır',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Metin içeren PDF dosyasından sayfa sayfa Unicode metni doğrudan çıkarın — PDF.js ile, "--- Sayfa N ---" işaretleri, kelime ve bayt sayısı, tek tıkla kopyalama ve .txt dışa aktarma ile. PDF dosyası taranmış veya yalnızca resim içeriyorsa bunu da açıkça söyler.',
  },
};
