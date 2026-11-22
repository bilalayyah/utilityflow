import type { CategoryLocaleOverride } from '../types';

/**
 * Turkish overrides for the 7 categories, keyed by category id.
 * Original Turkish copy, SEO-optimized for Turkish search intent —
 * written fresh for Turkish readers, not translated word-for-word
 * from the English text. Every category: slug, name, shortName,
 * description, longDescription, intro, faqs, seo, sampleToolNames.
 * Slugs copied exactly from CATEGORY_LOCALE_SLUGS.tr in config.ts.
 * sampleToolNames use the real Turkish tool names from the TR tools
 * batches (filled by the coordinator once the tools landed).
 */
export const TR_CATEGORY_OVERRIDES: Record<string, CategoryLocaleOverride> = {
  'text-writing': {
    slug: 'metin-yazma-araclari',
    name: 'Metin ve Yazı Araçları',
    shortName: 'Metin ve Yazı',
    description:
      'Kelime sayın, metni biçimlendirin, gereksiz boşlukları temizleyin, büyük-küçük harfi dönüştürün ve okunabilirliği denetleyin — hepsi doğrudan tarayıcınızda.',
    longDescription:
      'Yazarlar, editörler, içerik ekipleri ve öğrenciler için hassas yazma ve metin araçları. Her işlem anında cihazınızda gerçekleşir — taslağınız hiçbir sunucuya yüklenmez; bu nedenle denemeler, makaleler ve ödevler tamamen gizli kalır.',
    intro:
      'Aşağıdan bir araç seçin, metninizi yapıştırın veya yazın ve sonucu anında görün. Kurulacak veya yüklenecek hiçbir şey yok — metniniz cihazınızda kalır, çünkü her araç tamamen tarayıcınızda çalışır.',
    faqs: [
      {
        question: 'Metin ve yazı araçları ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'Metnim tarayıcımın dışına çıkıyor mu?',
        answer:
          'Hayır. Her araç %100 tarayıcınızda çalışır; bu nedenle yapıştırdığınız veya yazdığınız metin asla bir sunucuya gitmez ve hiçbir yerde saklanmaz.',
      },
      {
        question: 'Kullanmak için hesap oluşturmak gerekiyor mu?',
        answer:
          'Hayır. Herhangi bir aracı açın ve hemen kullanmaya başlayın — hesap yok, e-posta yok, kurulum yok.',
      },
      {
        question: 'Yazımda kelimeleri nasıl sayarım?',
        answer:
          'Kelime sayacını kullanın. Metninizi yapıştırdığınız anda kelime ve karakter sayısı anında görünür.',
      },
    ],
    seo: {
      title: 'Metin ve Yazı Araçları – Kelime Sayacı Online Ücretsiz',
      description:
        'Tarayıcıda çalışan metin ve yazı araçları: kelime sayacı, karakter sayacı, büyük-küçük harf dönüştürücü ve metin temizleyici — anında sonuç, yükleme yok.',
      keywords: [
        'metin araçları',
        'yazı araçları',
        'kelime sayacı',
        'karakter sayacı',
        'büyük küçük harf dönüştürücü',
      ],
    },
    sampleToolNames: [
      'Kelime Sayacı',
      'Karakter Sayacı',
      'Büyük Küçük Harf Çevirici',
      'Tekrarlanan Satırları Sil',
      'Metin Karşılaştırma Aracı',
    ],
  },
  developer: {
    slug: 'gelistirici-araclari',
    name: 'Geliştirici Araçları',
    shortName: 'Geliştirici',
    description:
      'JSON biçimlendirin, Base64 kodlayın, Regex test edin, JWT çözün ve karma oluşturun — sunucuya gitmeden.',
    longDescription:
      'Günlük hata ayıklama ve veri dönüştürme işleri için hızlı geliştirici araçları. Veriyi yapıştırın, yapılandırılmış biçimi denetleyin ve sözdizimini doğrulayın — hepsi yerel olarak çalışır; böylece jetonlarınız ve yapılandırma parçacıklarınız makinenizden asla ayrılmaz.',
    intro:
      'İhtiyacınız olan aracı seçin, kodunuzu veya verinizi yapıştırın ve sonucu anında görün. Her şey cihazınızda işlenir; bu nedenle jetonlar, veriler ve yapılandırma parçacıkları makinenizden asla dışarı çıkmaz.',
    faqs: [
      {
        question: 'Geliştirici araçları ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'Bu araçlara jeton veya API anahtarı yapıştırmak güvenli mi?',
        answer:
          'Evet. JWT çözümleyici ve Base64 kodlayıcı gibi araçlar tamamen tarayıcınızda çalışır; bu nedenle yapıştırdığınız metin asla bir sunucuya gönderilmez.',
      },
      {
        question: 'Kullanmak için hesap oluşturmak gerekiyor mu?',
        answer:
          'Hayır. Herhangi bir aracı açın ve hemen kullanmaya başlayın — hesap yok, e-posta yok, kurulum yok.',
      },
      {
        question: 'JSON’umun doğru olup olmadığını nasıl denetlerim?',
        answer:
          'JSON biçimlendiriciyi kullanın. JSON’unuzu yapıştırdığınız anda biçimlendirilir ve hata varsa gösterilir.',
      },
    ],
    seo: {
      title: 'Geliştirici Araçları – JSON, Base64, Regex ve JWT Online',
      description:
        'Tarayıcıda çalışan ücretsiz geliştirici araçları: JSON biçimlendirici, Regex test aracı, Base64 ve URL kodlayıcı, JWT çözümleyici — güvenli ve hızlı. Deneyin.',
      keywords: [
        'geliştirici araçları',
        'base64 kodlayıcı',
        'regex test aracı',
        'jwt çözümleyici',
        'json biçimlendirici',
      ],
    },
    sampleToolNames: [
      'Base64 Kodlayıcı / Çözücü',
      'URL Kodlayıcı / Çözücü',
      'UUID Oluşturucu (v4 ve v7)',
      'Regex Test Aracı',
      'JWT Çözücü',
    ],
  },
  calculators: {
    slug: 'hesap-makineleri',
    name: 'Hesap Makineleri',
    shortName: 'Hesap Makineleri',
    description:
      'Yaş, yüzde, kredi EMI, BMI, birim dönüştürme ve işletme marjı hesaplayın — net ve anlaşılır sonuçlarla.',
    longDescription:
      'Finans, tarih, sağlık ve matematik için net hesaplamalar sunan hassas hesap makineleri. Adım adım dökümler, anlaşılır tablolar ve girdiyi değiştirdiğiniz anda güncellenen sonuçlar.',
    intro:
      'Bir hesap makinesi seçin, sayılarınızı girin ve girdiyi değiştirdiğiniz anda sonucun hemen güncellendiğini görün. Kayıt gerekmez ve girdikleriniz hiçbir yere gönderilmez — her hesaplama tarayıcınızda yapılır.',
    faqs: [
      {
        question: 'Hesap makineleri ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'Girdiğim sayılar tarayıcımın dışına çıkıyor mu?',
        answer:
          'Hayır. Her hesaplama %100 tarayıcınızda yapılır; bu nedenle girdiğiniz sayılar asla bir sunucuya yüklenmez ve hiçbir yerde saklanmaz.',
      },
      {
        question: 'Hesap makineleri mobil cihazlarda çalışıyor mu?',
        answer:
          'Evet. Modern bir tarayıcıda çalışırlar; bu nedenle telefonda, tablette veya bilgisayarda kullanabilirsiniz.',
      },
      {
        question: 'Kredinin aylık EMI tutarını nasıl hesaplarım?',
        answer:
          'Kredi ve EMI hesaplayıcısını kullanın. Kredi tutarını, faiz oranını ve vadeyi girdiğiniz anda aylık taksit ve tam ödeme planı görünür.',
      },
    ],
    seo: {
      title: 'Çevrimiçi Hesap Makineleri – EMI, Yaş, Yüzde ve BMI',
      description:
        'Şeffaf çevrimiçi hesap makineleri: yaş, yüzde, kredi EMI, indirim-marj ve birim dönüştürücü — anında sonuç, kayıt gerekmez, hemen kullanın. Ücretsizdir.',
      keywords: [
        'çevrimiçi hesap makinesi',
        'yaş hesaplayıcı',
        'yüzde hesaplayıcı',
        'kredi emi hesaplayıcı',
        'birim dönüştürücü',
      ],
    },
    sampleToolNames: [
      'Yaş Hesaplayıcı',
      'Yüzde Hesaplayıcı',
      'Kredi Taksit Hesaplayıcı',
      'Konut Kredisi Hesaplayıcı',
      'Bileşik Faiz Hesaplayıcı',
    ],
  },
  'social-media': {
    slug: 'sosyal-medya-araclari',
    name: 'Sosyal Medya Araçları',
    shortName: 'Sosyal Medya',
    description:
      'UTM izleme bağlantıları oluşturun, gönderi uzunluğunu denetleyin, QR kodu üretin ve altyazı biçimlendirin — günümüz sosyal platformları için.',
    longDescription:
      'İçerik üreticileri, büyüme ekipleri ve topluluk yöneticileri için pazarlama ve yayıncılık araçları. Kampanya izleme parametrelerini tutarlı tutun, platform karakter sınırlarını denetleyin ve istediğiniz zaman taranabilir QR kodları oluşturun.',
    intro:
      'Aşağıdan bir araç açın, bağlantınızı veya metninizi girin ve sonucu doğrudan gönderinize ya da kampanyanıza kopyalayın. Her şey tarayıcınızda çalışır; bu nedenle bağlantılarınız ve altyazılarınız asla bir sunucuya yüklenmez.',
    faqs: [
      {
        question: 'Sosyal medya araçları ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'Girdiklerim bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Her araç %100 tarayıcınızda çalışır; bu nedenle bağlantılarınız, altyazılarınız ve metinleriniz cihazınızdan asla dışarı çıkmaz.',
      },
      {
        question: 'Kullanmak için hesap oluşturmak gerekiyor mu?',
        answer:
          'Hayır. Herhangi bir aracı açın ve hemen kullanmaya başlayın — hesap yok, e-posta yok, kurulum yok.',
      },
      {
        question: 'Bağlantım için QR kodu nasıl oluştururum?',
        answer:
          'QR kodu oluşturucuyu kullanın. Bağlantınızı girdiğiniz anda taranabilir bir QR kodu oluşur; indirip paylaşabilirsiniz.',
      },
    ],
    seo: {
      title: 'Sosyal Medya Araçları – QR Kod, UTM ve Hashtag Aracı',
      description:
        'UTM bağlantısı oluşturun, QR kodu üretin, sosyal medya karakter sınırını denetleyin, hashtag ve biyografi biçimlendirin — tarayıcıda çalışan ücretsiz araçlar.',
      keywords: [
        'sosyal medya araçları',
        'qr kod oluşturucu',
        'utm bağlantı oluşturucu',
        'hashtag oluşturucu',
        'altyazı sayacı',
      ],
    },
    sampleToolNames: [
      'QR Kod Oluşturucu',
      'UTM Bağlantı Oluşturucu',
      'Sosyal Medya Karakter Sınırı Denetleyici',
      'Havalı Yazı Oluşturucu',
      'Instagram Biyografi Satır Boşluğu Aracı',
    ],
  },
  pdf: {
    slug: 'pdf-araclari',
    name: 'PDF Araçları',
    shortName: 'PDF Araçları',
    description:
      'PDF birleştirin, bölün, sayfaları döndürün, filigran ekleyin ve dönüştürün — gizli dosyaları yüklemeden, tarayıcınızda.',
    longDescription:
      'Tam gizlilik için tasarlanmış belge araçları. Sözleşmeler, faturalar ve çalışma materyalleri doğrudan tarayıcı belleğinizde işlenir — uzak dosya sunucularında değil; bu nedenle dosyalarınız cihazınızdan asla dışarı çıkmaz.',
    intro:
      'Bir araç seçin, PDF dosyanızı seçin ve sonuç birkaç dakika içinde tarayıcınızda hazır. Belgeleriniz cihazınızdan asla dışarı çıkmaz — yerel olarak işlenir, hiçbir sunucuya yüklenmez.',
    faqs: [
      {
        question: 'PDF araçları ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'PDF dosyalarım bir yere yükleniyor mu?',
        answer:
          'Hayır. Dosyalarınız doğrudan tarayıcınızda işlenir; bu nedenle cihazınızdan asla dışarı çıkmaz ve hiçbir sunucuda saklanmaz.',
      },
      {
        question: 'PDF araçları mobil cihazlarda çalışıyor mu?',
        answer:
          'Evet. Modern bir tarayıcıda çalışırlar; bu nedenle telefonda, tablette veya bilgisayarda kullanabilirsiniz.',
      },
      {
        question: 'Birden fazla PDF dosyasını tek dosyada nasıl birleştiririm?',
        answer:
          'PDF birleştirme aracını kullanın. Birleştirmek istediğiniz dosyaları seçin; araç onları tek bir PDF belgesinde birleştirir.',
      },
    ],
    seo: {
      title: 'PDF Araçları – PDF Birleştir, Böl ve Dönüştür Online',
      description:
        'Tarayıcınızda PDF birleştirin, bölün, döndürün ve dönüştürün — hassas belgelerinizi üçüncü taraf sunuculara yüklemeden. Ücretsiz ve güvenli. Hemen deneyin.',
      keywords: [
        'pdf araçları',
        'pdf birleştir',
        'pdf böl',
        'görüntüden pdf',
        'pdf düzenleyici çevrimiçi',
      ],
    },
    sampleToolNames: [
      'PDF Birleştir',
      'PDF Böl – Sayfaları Ayır',
      'Resimden PDF Oluştur',
      'PDF Dosyasından Resim Oluştur (PNG / JPG)',
      'PDF Sayfa Sırala ve Sil',
    ],
  },
  seo: {
    slug: 'seo-araclari',
    name: 'SEO Araçları',
    shortName: 'SEO Araçları',
    description:
      'SERP snippet önizlemesi görün, OpenGraph etiketleri oluşturun, robots.txt ve XML site haritası hazırlayın ve anahtar kelime yoğunluğunu denetleyin.',
    longDescription:
      'Yayıncılar, bağımsız kurucular ve SEO uzmanları için teknik ve sayfa içi SEO araçları. Başlık uzunluğunu doğrulayın, yapılandırılmış meta veriler oluşturun ve birkaç saniye içinde temiz URL slugları hazırlayın.',
    intro:
      'Bir araç seçin, sayfanızın başlığını, URL’sini veya içeriğini girin ve sonucu anında denetleyin. Tüm denetimler tarayıcınızda yapılır; bu nedenle yayınlanmamış sayfalarınız ve taslaklarınız gizli kalır.',
    faqs: [
      {
        question: 'SEO araçları ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'İçeriğim tarayıcımın dışına çıkıyor mu?',
        answer:
          'Hayır. Her araç %100 tarayıcınızda çalışır; bu nedenle girdiğiniz başlık, URL ve içerik asla bir sunucuya yüklenmez ve hiçbir yerde saklanmaz.',
      },
      {
        question: 'Kullanmak için hesap oluşturmak gerekiyor mu?',
        answer:
          'Hayır. Herhangi bir aracı açın ve hemen kullanmaya başlayın — hesap yok, e-posta yok, kurulum yok.',
      },
      {
        question: 'Sayfamın arama sonucunda nasıl görüneceğini nasıl görürüm?',
        answer:
          'Google SERP snippet önizlemesini kullanın. Başlığınızı ve açıklamanızı girdiğiniz anda sayfanızın Google aramasında nasıl görünebileceğini görürsünüz.',
      },
    ],
    seo: {
      title: 'SEO Araçları – SERP Önizleme, Meta Etiket ve Slug Aracı',
      description:
        'SEO araçlarıyla sayfalarınızı iyileştirin: SERP snippet önizleme, meta etiket oluşturucu, robots.txt hazırlayıcı ve anahtar kelime yoğunluk denetleyici.',
      keywords: [
        'seo araçları',
        'meta etiket oluşturucu',
        'serp önizleme',
        'robots.txt oluşturucu',
        'slug oluşturucu',
      ],
    },
    sampleToolNames: [
      'Meta Etiket Oluşturucu',
      'Google SERP Önizleme',
      'XML Site Haritası Oluşturucu',
      'Robots.txt Oluşturucu',
      'URL Slug Oluşturucu',
    ],
  },
  'image-file': {
    slug: 'goruntu-dosya-araclari',
    name: 'Görüntü ve Dosya Araçları',
    shortName: 'Görüntü ve Dosya',
    description:
      'Görüntüleri sıkıştırın, yeniden boyutlandırın, PNG/JPG/WebP arasında dönüştürün, WCAG kontrastını denetleyin, QR kodu tarayın ve favicon oluşturun — yerel olarak.',
    longDescription:
      'HTML5 Canvas, Web Crypto API ve tarayıcının File API’si üzerinde çalışan hızlı medya, şifreleme ve dosya araçları. Web varlıklarını Core Web Vitals için iyileştirin, dosyanın SHA-256 sağlama toplamını doğrulayın, görüntüden renk paleti çıkarın ve favicon oluşturun — hiçbir şey yüklemeden.',
    intro:
      'Aşağıdan bir araç seçin, dosyanızı seçin ve sonucu anında alın. Görüntüleriniz ve dosyalarınız cihazınızdan asla dışarı çıkmaz — her şey tarayıcınızda yerel olarak işlenir.',
    faqs: [
      {
        question: 'Görüntü ve dosya araçları ücretsiz mi?',
        answer: 'Evet, tamamı ücretsizdir — kayıt gerekmez, hesap oluşturmanız gerekmez.',
      },
      {
        question: 'Görüntüm bir sunucuya yükleniyor mu?',
        answer:
          'Hayır. Dosyalarınız doğrudan tarayıcınızda işlenir; bu nedenle cihazınızdan asla dışarı çıkmaz ve hiçbir sunucuda saklanmaz.',
      },
      {
        question: 'Bu araçlar mobil cihazlarda çalışıyor mu?',
        answer:
          'Evet. Modern bir tarayıcıda çalışırlar; bu nedenle telefonda, tablette veya bilgisayarda kullanabilirsiniz.',
      },
      {
        question: 'Görüntünün dosya boyutunu nasıl küçültürüm?',
        answer:
          'Görüntü sıkıştırıcıyı kullanın. Görüntünüzü seçin; araç, görüntü web için hazır kalırken dosya boyutunu küçültür.',
      },
    ],
    seo: {
      title: 'Görüntü ve Dosya Araçları – Sıkıştır, Yeniden Boyutlandır',
      description:
        'Görüntüleri yerelde sıkıştırın, yeniden boyutlandırın, döndürün ve PNG, JPG, WebP arasında dönüştürün; dosya sağlama toplamını doğrulayın, QR kodu tarayın.',
      keywords: [
        'görüntü araçları',
        'görüntü sıkıştırıcı',
        'görüntü yeniden boyutlandırıcı',
        'webp dönüştürücü',
        'renk kontrast denetleyici',
      ],
    },
    sampleToolNames: [
      'Resim Sıkıştırıcı',
      'Resim Boyutlandırıcı',
      'Resim Formatı Dönüştürücü (PNG / JPG / WebP)',
      'Fotoğraf Döndür ve Çevir',
      'Renk Kontrast Denetleyici',
    ],
  },
};
