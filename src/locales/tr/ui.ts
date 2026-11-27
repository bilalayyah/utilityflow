import type { UiStrings } from '../ui';

/**
 * Turkish chrome dictionary — every UI string translated into Turkish,
 * written fresh for Turkish readers, not translated word-for-word
 * from the English text. Brand name, email addresses and URLs stay
 * identical across locales. {placeholder} tokens are preserved.
 */
export const trStrings: UiStrings = {
  nav: {
    tools: 'Araçlar',
    categories: 'Kategoriler',
    about: 'Hakkımızda',
    contact: 'İletişim',
    blog: 'Blog',
    allTools: 'Tüm Araçlar',
    searchPlaceholder: '85 araç ara...',
    searchTools: 'Araç ara',
    closeSearch: 'Aramayı kapat',
    openMenu: 'Gezinme menüsünü aç',
    closeMenu: 'Gezinme menüsünü kapat',
    skipToContent: 'İçeriğe atla',
    language: 'Dil',
    chooseLanguage: 'Dil seçin',
  },
  footer: {
    tagline:
      'Yazarlar, mühendisler, pazarlamacılar ve analistler için hızlı, tarayıcı öncelikli gündelik araçlar koleksiyonu. Yerel çalışacak, düşük yükle çalışacak şekilde tasarlandı.',
    categories: 'Kategoriler',
    explore: 'Keşfet',
    trustLegal: 'Güven ve Yasal',
    home: 'Ana Sayfa',
    allToolsDirectory: 'Tüm Araçlar Dizini',
    blog: 'Blog',
    aboutUs: 'Hakkımızda',
    contact: 'İletişim',
    privacyPolicy: 'Gizlilik Politikası',
    termsOfService: 'Kullanım Şartları',
    xmlSitemap: 'XML Site Haritası',
    rightsReserved: 'Tüm hakları saklıdır.',
    deployedNote: 'Crafted with ❤️ by Bilal inspired by Shaheen',
  },
  consent: {
    message:
      'Sitenin nasıl kullanıldığını anlamak ve siteyi iyileştirmek için çerezler ve analiz araçları kullanıyoruz. Kabul edebilir veya reddedebilirsiniz.',
    accept: 'Kabul Et',
    decline: 'Reddet',
    cookieSettings: 'Çerez ayarları',
  },
  common: {
    copy: 'Kopyala',
    copied: 'Kopyalandı',
    download: 'İndir',
    clear: 'Temizle',
    loadSample: 'Örnek yükle',
    reset: 'Sıfırla',
    search: 'Ara',
    close: 'Kapat',
    cancel: 'İptal',
    save: 'Kaydet',
    submit: 'Gönder',
    loading: 'Yükleniyor...',
    processing: 'İşleniyor...',
    upload: 'Yükle',
    chooseFile: 'Dosya seç',
    dragDrop: 'Dosyanızı buraya sürükleyip bırakın',
    tryAgain: 'Tekrar deneyin',
    openTool: 'Aracı aç',
    browserSide: 'Tarayıcı tarafında',
    externalApi: 'Harici API',
  },
  home: {
    seoTitle: 'UtilityFlow – Hızlı Tarayıcı Tabanlı Çevrimiçi Araçlar',
    seoDescription:
      'Metin analizi, geliştirici biçimlendirme, hesap makineleri, PDF, SEO denetimleri ve görüntü iş akışları için ücretsiz, hızlı ve gizlilik öncelikli çevrimiçi araçlar.',
    seoKeywords: [
      'çevrimiçi araçlar',
      'tarayıcı araçları',
      'metin araçları',
      'geliştirici araçları',
      'çevrimiçi hesap makineleri',
      'pdf araçları',
      'seo araçları',
    ],
    eyebrow: '{count} Ücretsiz Çevrimiçi Araç · Kayıt Yok · %100 Gizli',
    h1Lead: 'Ücretsiz Çevrimiçi Araçlar',
    h1Rest: ' Hız ve Gizlilik İçin Tasarlandı.',
    heroDescription:
      'Metin, geliştirici, hesap makinesi, sosyal medya, PDF, SEO ve görüntü iş akışları için {count} tarayıcı öncelikli araç — kayıt yok, kurulum yok, her şey tarayıcınızda gizli çalışır.',
    exploreCategories: 'Kategorileri Keşfet',
    openDirectory: 'Tüm Dizini Aç',
    metrics: {
      toolCategories: 'Araç Kategorisi',
      browserUtilities: 'Tarayıcı Aracı',
      liveTools: 'Canlı Araç',
      accountRequired: 'Hesap Gerekli',
      none: 'Yok',
    },
    popular: {
      title: 'Popüler Araçlar',
      description:
        'Yazma, geliştirme ve hesaplama alanlarında en çok kullanılan gündelik araçlar.',
      viewDirectory: 'Araç dizinini görüntüle',
    },
    categories: {
      title: 'Araç Kategorileri',
      description:
        'Yazma, kodlama, matematik, yayıncılık, belgeler, arama optimizasyonu ve medya iş akışlarını kapsayan yedi özel araç grubu.',
      includes: 'İçerir: {names}',
    },
    directory: {
      title: 'Tüm Araçlar Dizini',
      description:
        'Herhangi bir canlı araca veya kategori sayfasına doğrudan gitmek için kategoriye ya da anahtar kelimeye göre filtreleyin.',
      filterPlaceholder: 'Kategori veya araç filtrele...',
      allCategories: 'Tüm Kategoriler',
      noMatch: '"{query}" ile eşleşen kategori veya araç bulunamadı.',
      resetFilters: 'Filtreleri sıfırla',
      upcomingUtilities: 'Yakında eklenecek araçlar: {names}',
      toolsActive: '{count} araç etkin',
      openCategory: 'Kategori sayfasını aç',
    },
    why: {
      title: 'Neden UtilityFlow',
      description:
        'Reklam ağırlıklı araç sitelerine temiz ve güvenilir bir alternatif olarak tasarlandı.',
      items: [
        {
          title: 'Tarayıcı öncelikli gizlilik',
          description:
            'Temel hesaplamalar, metin dönüştürmeleri ve biçimlendirme doğrudan istemci belleğinde çalışır; hassas taslaklarınız ve JSON verileriniz cihazınızda kalır.',
        },
        {
          title: 'Hızlı ve hafif teslim',
          description:
            'Bölünmüş kod modülleri ve az sayıda çalışma zamanı bağımlılığı, ilk sayfa yüklemelerini hafif tutar ve Core Web Vitals değerlerini her bağlantıda hızlı tutar.',
        },
        {
          title: 'Kalıcı temiz URL’ler',
          description:
            'Her araç; yapılandırılmış meta verileri, kullanım örnekleri ve tarayıcı yenilemelerinde bile doğrudan derin bağlantı güvenilirliği sunan kendi özel adresinde yaşar.',
        },
        {
          title: 'Öngörülebilir ve doğrulanabilir sonuçlar',
          description:
            'Araçlar; dağınık açılır pencereler ya da yanıltıcı göstergeler olmadan, belirli çıktılara, şeffaf talimatlara ve erişilebilir denetimlere odaklanır.',
        },
      ],
    },
    howItWorks: {
      title: 'Nasıl Çalışır',
      description: 'Üç basit adım — hesap yok, kurulum yok, bekleme yok.',
      steps: [
        {
          title: 'Aracınızı bulun',
          description: 'İhtiyacınız olan aracı bulmak için dizinde arayın veya göz atın.',
        },
        {
          title: 'Doğrudan tarayıcınızda kullanın',
          description: 'Aracı açın ve anında çalışmaya başlayın — kurulacak hiçbir şey yok.',
        },
        {
          title: 'Sonucu kopyalayın veya indirin',
          description: 'Çıktınızı kopyalayın ya da dosya olarak indirin, kullanıma hazır.',
        },
      ],
    },
    faq: {
      title: 'Sıkça Sorulan Sorular',
      description:
        'UtilityFlow’un nasıl çalıştığı ve yeni araçlar geldikçe neler bekleyeceğiniz hakkında önemli ayrıntılar.',
    },
    faqs: [
      {
        question: 'UtilityFlow araçlarını hesap oluşturmadan ücretsiz kullanabilir miyim?',
        answer:
          'Evet. UtilityFlow’daki 85 tarayıcı aracının tamamı kayıt, giriş duvarı, kredi veya abonelik gerekmeden ücretsiz kullanılabilir.',
      },
      {
        question: 'UtilityFlow metinlerimi, kodlarımı veya dosyalarımı bir sunucuya yüklüyor mu?',
        answer:
          '85 temel tarayıcı aracının tamamı, girdilerinizi yüklemeden doğrudan web tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: '85 araç platformda nasıl düzenlenmiş?',
        answer:
          'UtilityFlow; toplam 85 tarayıcı aracıyla yedi temel kategoriyi kapsar (Metin ve Yazı, Geliştirici, Hesap Makineleri, Sosyal Medya, PDF, SEO ve Görüntü ve Dosya araçları).',
      },
      {
        question: 'Belirli bir araca doğrudan bağlantıyı yer işaretlerine ekleyebilir veya paylaşabilir miyim?',
        answer:
          'Evet. Her araç ve kategori, doğrudan yüklenen ve tarayıcı yenilemelerinde çalışan kendi kalıcı, temiz URL’sini alır (/word-counter/ veya /category/developer-tools/ gibi).',
      },
      {
        question: 'UtilityFlow cep telefonlarında ve tabletlerde sorunsuz çalışıyor mu?',
        answer:
          'Evet. Açık Mod ve Koyu Mod dahil tüm düzenler, gezinme denetimleri ve etkileşimli çalışma alanları; erişilebilir dokunma hedefleri ve duyarlı ızgaralarla mobil öncelikli tasarlandı.',
      },
    ],
    trustLine: 'Tüm araçlar ücretsiz • Kayıt gerekmez • Tarayıcınızda çalışır',
  },
  directory: {
    seoTitle: 'Tüm 85 Ücretsiz Çevrimiçi Araç | UtilityFlow',
    seoDescription:
      'UtilityFlow’daki tüm tarayıcı tabanlı araçlara ve kategorilere göz atın; yazma, geliştirme, hesap makineleri, PDF, SEO ve görüntüler için düzenlenmiştir.',
    seoKeywords: ['araç dizini', 'tüm çevrimiçi araçlar', 'ücretsiz tarayıcı araçları'],
    title: 'Tüm Araçlar Dizini',
    description:
      'UtilityFlow’da kayıtlı {count} canlı aracın tamamına göz atın veya yedi kategori sayfasını keşfedin.',
    searchPlaceholder: 'Araç adı, anahtar kelime veya kategoriye göre arayın...',
    showing: '{categories} kategoride {tools} canlı araç gösteriliyor',
    all: 'Tümü',
    availableTools: 'Kullanılabilir Araçlar',
    categorySuites: 'Kategori Grupları',
    visitHub: '{name} sayfasını ziyaret edin',
    plannedToolsInclude: 'Bu kategorideki araçlar: {names}',
    noMatch: 'Filtrenizle eşleşen kategori veya araç bulunamadı.',
    clearFilters: 'Filtreleri temizle',
  },
  category: {
    plannedCount: '{count} araç',
    toolsCount: '{count} araç',
    toolsLive: '{count} araç canlı',
    ofToolsLive: '{total} araçtan {count} tanesi canlı',
    availableTools: 'Kullanılabilir {name}',
    exploreOther: 'Diğer Kategorileri Keşfet',
    scheduledTitle: 'Yakında daha fazla araç geliyor',
    scheduledDescription:
      'Bu kategori sayfası {name} mimarisinde etkin ve dizine eklenmiş durumda. Tarayıcı tarafında çalışan özel araç sayfaları yakında buraya eklenecek.',
    plannedToolsTitle: 'Bu kategorideki araçlar:',
  },
  toolPage: {
    howToUse: '{name} Nasıl Kullanılır',
    practicalExamples: 'Pratik Örnekler',
    faqs: 'Sıkça Sorulan Sorular',
    keyBenefits: 'Temel Faydalar',
    commonUseCases: 'Yaygın Kullanım Alanları',
    runsLocally: 'Tarayıcınızda yerel olarak çalışır',
    externalApi: 'Harici API entegrasyonu',
    loadingWorkspace: '{name} çalışma alanı yükleniyor...',
    input: 'Girdi',
    output: 'Çıktı',
    relatedTitle: 'İlgili Araçlar',
    relatedDescription: 'İş akışınıza tamamlayıcı araçlarla devam edin.',
    browseAll: 'Tüm {name} araçlarına göz atın',
    moreToolsIn: 'Kategorideki diğer araçlar:',
    willAppear: 'yakında burada görünecek.',
    bylineAuthor: 'Bilal tarafından',
    lastUpdated: 'Son güncelleme: Kasım 2026',
  },
  blog: {
    seoTitle: 'Rehberler, Eğitimler ve Kaynaklar | UtilityFlow Blog',
    seoDescription:
      'Her UtilityFlow aracı için pratik rehberler, adım adım eğitimler ve kaynaklar — metin, geliştirici, hesap makinesi, PDF, SEO, sosyal medya ve görüntü araçları.',
    title: 'Rehberler, Eğitimler ve Kaynaklar',
    description:
      'Her UtilityFlow aracı için pratik rehberler ve adım adım eğitimler. Her aracın ne yaptığını, nasıl iyi kullanılacağını ve en iyi sonucu nasıl alacağınızı öğrenin.',
    searchPlaceholder: 'Makalelerde arayın...',
    searchArticles: 'Makalelerde ara',
    noResults: 'Makale bulunamadı.',
    featured: 'Öne çıkan makaleler',
    latest: 'En yeni makaleler',
    browseByCategory: 'Kategoriye göre göz atın',
    relatedArticles: 'İlgili makaleler',
    relatedTools: 'İlgili araçlar',
    readingTime: '{minutes} dakikalık okuma',
    publishedOn: '{date} tarihinde yayınlandı',
    updatedOn: '{date} tarihinde güncellendi',
    byEditorial: 'UtilityFlow editör ekibi tarafından',
    tableOfContents: 'İçindekiler',
    prevArticle: 'Önceki makale',
    nextArticle: 'Sonraki makale',
    share: 'Paylaş',
    tryTool: 'Aracı deneyin',
    guidesInCategory: 'Bu kategorideki rehberler',
    categoryGuidesWord: 'Rehberler',
    noArticlesYet: 'Henüz makale yok',
    noArticlesYetDescription: 'Bu bölümün rehberleri yolda. Yakında tekrar kontrol edin.',
    backToBlog: 'Bloga dön',
    allArticles: 'Tüm makaleler',
    notAvailableInLanguage: 'Bu makale henüz bu dilde mevcut değil.',
    minRead: 'dk okuma',
  },
  search: {
    placeholder:
      'Araç veya kategori arayın (ör. kelime sayacı, JSON, PDF, hesap makineleri)...',
    search: 'Ara',
    tools: 'Araçlar',
    categories: 'Kategoriler',
    noResults: '"{query}" için eşleşen araç veya kategori bulunamadı.',
    viewDirectory: 'Tüm dizini görüntüle',
    clearSearch: 'Aramayı temizle',
    ariaLabel: 'Araç veya kategori arayın',
  },
  notFound: {
    seoTitle: 'Sayfa Bulunamadı (404) | UtilityFlow',
    seoDescription:
      'İstenen araç veya sayfa UtilityFlow’da bulunamadı. Araç dizinimizde arayın veya kategorilere göz atın.',
    eyebrow: '404 · Bulunamadı',
    title: 'Bu sayfayı bulamadık.',
    description:
      'URL taşınmış olabilir ya da bu araç henüz yayınlanmamış olabilir. Aşağıda arayın veya ihtiyacınız olanı bulmak için kategorilerimize göz atın.',
    returnHome: 'Ana Sayfaya Dön',
    browseDirectory: 'Dizine Göz At',
    browseCategories: 'Kategorilere Göz At',
  },
  about: {
    seoTitle: 'UtilityFlow Hakkında – Tarayıcı Öncelikli Çevrimiçi Araç Platformu',
    seoDescription:
      'UtilityFlow’un hesap, karmaşa veya gereksiz veri yükleme olmadan yedi kategoride hızlı ve gizlilik öncelikli tarayıcı araçları nasıl oluşturduğunu öğrenin.',
    title: 'UtilityFlow Hakkında',
    intro:
      'UtilityFlow; gündelik dijital işler için 85 odaklı ve güvenilir araç geliştiren bağımsız bir web platformudur.',
    whyTitle: 'UtilityFlow’u Neden Kurduk',
    whyP1:
      'Kelime saymak, JSON doğrulamak, karakter sınırını denetlemek, kredi ödemesi hesaplamak veya görüntü sıkıştırmak gibi rutin çevrimiçi işler; insanları çoğu zaman müdahaleci katmanlarla, kafa karıştırıcı indirmelerle veya zorunlu kayıtlarla dolu yavaş sitelere itiyor.',
    whyP2:
      'Hedefimiz basit: her araca hızlı yüklenen, nasıl çalıştığını açıkça anlatan ve web standartları izin verdiğinde doğrudan tarayıcınızda çalışan temiz ve özel bir sayfa vermek.',
    orgTitle: 'UtilityFlow’u Kim Yönetiyor',
    orgP1:
      'UtilityFlow; boş zamanlarında ücretsiz web araçları geliştiren Bilal adlı bir üreticinin oluşturduğu ve sürdürdüğü bağımsız bir projedir. Sitenin arkasında bir şirket, yatırımcı fonu veya çalışan ekibi yok — her araç, rehber ve yardım sayfası tek bir kişi tarafından tasarlanıyor, geliştiriliyor ve test ediliyor. 85 aracın tamamı hesap veya abonelik olmadan ücretsiz kullanılabilir. Altbilgideki isim Shaheen’dir; onun teşviki projeye ilham verdi ve adı, fikrin nereden başladığını hatırlatmak için her sayfada yer alıyor.',
    orgP2:
      'Proje küçük ve bağımsız olduğu için kararlar basit kalıyor: bir araç yavaşsa, kafa karıştırıcıysa veya yanlışsa düzeltiliyor. İletişim sayfasından gönderilen geri bildirimler doğrudan kodu değiştirebilecek kişiye ulaşıyor ve ziyaretçilerin önerileri site genelinde yeni araçları ve iyileştirmeleri çoktan şekillendirdi.',
    howTitle: 'Araçlarımız Nasıl Geliştiriliyor ve Test Ediliyor',
    howP1:
      'Her araç tek ve net bir işle başlıyor — kelime saymak, PDF birleştirmek, JSON biçimlendirmek — ve o işi iyi yapan odaklı bir sayfa olarak geliştiriliyor. Web standartları izin verdiğinde iş tamamen tarayıcınızda gerçekleşiyor; metinleriniz ve dosyalarınız cihazınızdan hiç ayrılmıyor. Her araç sayfası; adımlarını kısa bir rehberle açıklıyor, çalışılmış örnekler gösteriyor ve insanların en sık sorduğu soruları yanıtlıyor; böylece sonuca kara kutuya güvenmek yerine kendiniz karar verebiliyorsunuz.',
    howP2:
      'Bir araç yayınlanmadan önce; boş girdi, çok büyük metin ve alışılmadık dosya türleri gibi uç durumlar dahil olmak üzere, masaüstü ve mobil tarayıcılarda gerçek girdilerle test ediliyor. Bir şey bozulur veya bir hesaplama yanlış görünürse düzeltme site güncellemesi olarak yayınlanıyor ve sayfa yeniden denetleniyor. Her araç tamamen tarayıcınızda çalışıyor — girdiğiniz hiçbir şey asla bir sunucuya gönderilmiyor.',
    whoTitle: 'UtilityFlow Kimin İçin',
    whoP1:
      'UtilityFlow; yazılım kurmadan veya hesap oluşturmadan bir araçtan hızlıca yanıt almak isteyen herkes için hazırlandı: deneme yazısının kelime sayısını denetleyen öğrenciler, taslak biçimlendiren yazarlar, JSON doğrulayan veya URL kodlayan geliştiriciler, karakter sınırlarını denetleyen pazarlamacılar ve kredi ya da indirim hesaplayan küçük işletme sahipleri. Bir iş bir dakikadan kısa sürüyorsa, onun aracı da bir dakikadan kısa sürmeli — bu, sitedeki her sayfanın bağlı olduğu standarttır.',
    principlesTitle: 'Temel Mühendislik İlkeleri',
    principles: [
      {
        title: 'İstemci Tarafında Çalışma',
        description:
          'Metin, kod, matematik ve yerel dosya araçları girdileri tarayıcı belleğinde işler; böylece çalışma verileriniz uzak sunuculara gönderilmez.',
      },
      {
        title: 'Şeffaf API Bildirimleri',
        description:
          'Özel bir araç harici bir sorgu veya sunucu çağrısı gerektiriyorsa, bunu çalıştırmadan önce o aracın sayfasında açıkça belirtiyoruz.',
      },
      {
        title: 'Erişilebilir Arayüzler',
        description:
          'Klavye gezinmesi, okunabilir kontrast, net hata geri bildirimi ve duyarlı mobil denetimler her şablona yerleşik olarak gelir.',
      },
      {
        title: 'Modüler Yayınlama',
        description:
          'Araçlar kategorilere göre yayınlanır ve doğrulanır; böylece her araç kapsamlı işlevsel test ve belge alır.',
      },
    ],
    categoriesTitle: 'Yedi Araç Kategorisi',
    feedbackTitle: 'Geri Bildiriminiz veya İsteğiniz mi Var?',
    feedbackBefore:
      'Bir hesaplama uç durumu, erişilebilirlik sorunu fark ederseniz ya da yeni bir araç önermek isterseniz, bize şu sayfadan ulaşın:',
    feedbackLink: 'İletişim sayfası',
    feedbackAfter: '.',
  },
  contact: {
    seoTitle: 'UtilityFlow İletişim – Destek, Hata Bildirimi ve Öneriler',
    seoDescription:
      'Bir sorunu bildirmek, yeni bir araç önermek ya da gizlilik ve şartlar hakkında soru sormak için UtilityFlow ekibiyle iletişime geçin.',
    title: 'Bize Ulaşın',
    intro:
      'Hata bildirimleri, araç önerileri veya genel sorular gönderin. Her gönderimi okuyor ve araç doğruluğunu ve erişilebilirliği artıran düzeltmelere öncelik veriyoruz.',
    aboutTitle: 'Neler Hakkında Yazabilirsiniz',
    aboutP1:
      'Bu formu siteyle ilgili her şey için kullanın. Bir hatayı bildirin ve hangi aracı kullandığınızı, ne girdiğinizi ve ne olmasını beklediğinizi söyleyin — ne kadar çok ayrıntı verirseniz, sorun o kadar hızlı yeniden üretilebilir ve düzeltilebilir. Yeni bir araç önerin ve yapması gereken işi anlatın; çok sayıda ziyaretçinin istediği fikirler listenin başına geçer. Yanlış bir hesaplama, kafa karıştırıcı bir talimat veya herhangi bir sayfadaki çeviri hatasına da dikkat çekebilirsiniz.',
    aboutP2:
      'Gizlilik ve yasal sorular da memnuniyetle karşılanır. Yayınladığınız bir yorumun kaldırılması gerekiyorsa, araç sayfasını ve kullandığınız adı ekleyin; yorum kaldırılacaktır. Diğer her şey için — ortaklık fikri, basın sorusu veya site hakkında genel bir yorum — aynı form işe yarar ya da bu sayfadaki doğrudan e-posta adresini kullanabilirsiniz.',
    responseTitle: 'Mesajı Gönderdikten Sonra Ne Olur',
    responseP1:
      'Her mesaj, UtilityFlow’u geliştiren ve sürdüren kişi tarafından okunuyor — destek masası ve otomatik yanıt kuyruğu yok. Hata bildirimleri ve yanlış sonuçlar önce denetleniyor; çünkü bozuk bir araç onu kullanan herkesi etkiliyor. Araç önerileri toplanıyor ve kaç kişinin kullanacağı ile sitenin tarayıcı öncelikli yaklaşımına ne kadar uyduğu tartılarak değerlendiriliyor.',
    responseP2:
      'Bize ulaşmak için hesap gerekmez ve e-posta adresinizi yalnızca mesajınıza yanıt vermek için kullanacağız. Formu kullanmak istemezseniz, bu sayfadaki doğrudan e-posta adresi aynı gelen kutusuna ulaşır.',
    name: 'Ad',
    email: 'E-posta adresi',
    topic: 'Konu',
    message: 'Mesaj',
    submit: 'Mesajı Gönder',
    namePlaceholder: 'Ayşe Yılmaz',
    emailPlaceholder: 'siz@ornek.com',
    messagePlaceholder: 'Aracı, hatayı veya soruyu ayrıntılı olarak anlatın...',
    topics: [
      'Araç önerisi',
      'Hata bildirimi',
      'SEO veya içerik düzeltmesi',
      'Gizlilik veya yasal soru',
      'Genel soru',
    ],
    errors: {
      name: 'Lütfen adınızı girin.',
      emailEmpty: 'Lütfen e-posta adresinizi girin.',
      emailInvalid: 'Lütfen geçerli bir e-posta adresi girin.',
      subject: 'Lütfen bir konu seçin veya girin.',
      message: 'Lütfen mesajınıza en az 10 karakter ekleyin.',
    },
    successTitle: 'Mesaj gönderildi',
    successThanks:
      '{name}, teşekkürler. Mesajınız gönderildi; size yakında dönüş yapacağız.',
    successNote:
      'Eklemek istediğiniz bir şey olursa, bize doğrudan şu adresten de ulaşabilirsiniz:',
    sending: 'Gönderiliyor…',
    sendError: 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.',
    sendAnother: 'Başka bir mesaj gönderin',
    directEmail: 'Doğrudan E-posta',
    directEmailText: 'Doğrudan yazmayı mı tercih edersiniz? Ekibimize şu adresten e-posta gönderin:',
  },
  privacy: {
    seoTitle: 'Gizlilik Politikası – Verilerinizi Nasıl Koruyoruz | UtilityFlow',
    seoDescription:
      'Tarayıcı tarafında araç çalıştırma, çerezler, sunucu kayıtları ve analizleri kapsayan UtilityFlow Gizlilik Politikasını okuyun.',
    title: 'Gizlilik Politikası',
    lastUpdated: 'Son güncelleme: Kasım 2026',
    sections: [
      {
        title: '1. Genel Bakış',
        paragraphs: [
          'UtilityFlow, istemci tarafında tarayıcı işlemeye odaklanarak tasarlanmıştır. Bu Gizlilik Politikası; sitemizi ziyaret ettiğinizde hangi bilgilerin işlendiğini, araçlarımızın girdileri nasıl ele aldığını ve sitede çerezlerin ve analizlerin nasıl çalıştığını açıklar.',
        ],
      },
      {
        title: '2. Araç Girdileri ve Tarayıcıda İşleme',
        paragraphs: [
          '85 tarayıcı tabanlı aracımıza girilen metinler, sayılar, kod parçacıkları ve dosyalar; cihazınızdan ayrılmadan tarayıcı oturumunuzda yerel olarak işlenir.',
          'Araçlarımızın altında yayınlanan yorumlar yalnızca bir ad ve yorum metni ister. Gönderdiğiniz ad ve metin, tarihle birlikte barındırma platformumuzda saklanır ve o aracın sayfasında herkese açık gösterilir. Yorum yapmak için e-posta adresi veya hesap istemiyoruz ve yorum verilerini reklam için kullanmıyoruz. Bir yorumun kaldırılmasını isterseniz, sayfayı ve kullanılan adı belirterek bize yazın; yorumu sileriz.',
        ],
      },
      {
        title: '3. Barındırma Kayıtları ve Teknik Telemetri',
        paragraphs: [
          'UtilityFlow, Cloudflare Pages üzerinde barındırılmaktadır. Standart web barındırma sağlayıcıları gibi, uç ağımız sayfaları güvenilir biçimde sunmak, kötüye kullanımı azaltmak ve güvenliği sağlamak için standart HTTP istek meta verilerini (IP adresi, tarayıcı kullanıcı aracısı, istenen URL ve zaman damgası gibi) otomatik olarak işleyebilir.',
          'Barındırma kayıtlarını sizi tek tek tanımlamak için başka hiçbir veriyle birleştirmiyor ve kayıt verilerini reklamcılarla satmıyor ya da paylaşmıyoruz. Kayıtlar yalnızca hizmetin çalışmasını ve güvenliğini sağlamak için vardır.',
        ],
      },
      {
        title: '4. Çerezler ve Analizler',
        paragraphs: [
          'UtilityFlow şu anda üçüncü taraf reklam göstermiyor.',
          'Ayrıca sitenin genel olarak nasıl kullanıldığını anlamak için Google Analytics 4 kullanıyoruz; bu araç yalnızca çerez bannerında çerezleri kabul ettikten sonra çalışır.',
        ],
      },
      {
        title: '5. Harici Bağlantılar',
        paragraphs: [
          'Belgelerimiz veya araç sayfalarımız harici web sitelerine bağlantı verebilir. Üçüncü taraf web sitelerinin gizlilik uygulamalarından veya içeriklerinden sorumlu değiliz.',
          'Harici bağlantılar mümkün olduğunda yeni sekmede açılır. Bağlantı verilen bir sitede kişisel bilgi girmeden önce lütfen o sitenin kendi gizlilik politikasını inceleyin.',
        ],
      },
      {
        title: '6. Veri Saklama',
        paragraphs: [
          'Tarayıcınızda işlenen bilgiler bize asla gönderilmez; bu nedenle saklanacak bir şey yoktur. Yorumlar, tarafımızca ya da isteğiniz üzerine silinene kadar saklanır. Barındırma kayıtları ve güvenlik kayıtları yalnızca barındırma sağlayıcımızın hizmeti işletmesi ve koruması için gereken sınırlı süre boyunca tutulur.',
        ],
      },
      {
        title: '7. Haklarınız ve Seçenekleriniz',
        paragraphs: [
          'Çerezleri tarayıcı ayarlarınızdan istediğiniz zaman engelleyebilir veya silebilirsiniz. Bir yorum yayınladıysanız, bize yazarak kaldırılmasını isteyebilirsiniz. Araçlarımız tarayıcınızda çalıştığı ve hesap ya da profil tutmadığımız için indirilecek veya düzeltilecek kişisel veri dosyası yoktur — ancak verilerinizle ilgili her soru, bize yazarsanız yanıtlanır.',
        ],
      },
      {
        title: '8. Çocukların Gizliliği',
        paragraphs: [
          'UtilityFlow genel amaçlı bir sitedir ve 13 yaşın altındaki çocuklara yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamıyoruz. Bir ebeveyn veya vasiyseniz ve bir çocuğun sitede yorum yayınladığına inanıyorsanız, bize ulaşın; yorumu kaldırırız.',
        ],
      },
      {
        title: '9. Bu Politikadaki Değişiklikler',
        paragraphs: [
          'Araç eklediğimizde, sağlayıcı değiştirdiğimizde veya sitenin çalışma biçimini ayarladığımızda bu Gizlilik Politikasını güncelleyebiliriz. Bu sayfanın üstündeki “Son güncelleme” tarihi, politikanın en son ne zaman gözden geçirildiğini gösterir. Bir değişiklikten sonra siteyi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
        ],
      },
    ],
    contactTitle: '10. İletişim',
    contactBefore:
      'Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen bize şu sayfadan ulaşın:',
    contactLink: 'İletişim sayfası',
    contactMiddle: 'veya şu adrese e-posta gönderin',
  },
  terms: {
    seoTitle: 'Kullanım Şartları – UtilityFlow Araçlarını Kullanma | UtilityFlow',
    seoDescription:
      'UtilityFlow tarayıcı araçlarının kullanımını, fikri mülkiyeti, doğruluk beyanlarını ve sorumluluk sınırlarını düzenleyen Kullanım Şartlarını inceleyin.',
    title: 'Kullanım Şartları',
    lastUpdated: 'Son güncelleme: Kasım 2026',
    sections: [
      {
        title: '2. İzin Verilen Kullanım',
        paragraphs: [
          'UtilityFlow’u kişisel, eğitsel ve ticari verimlilik işleri için kullanabilirsiniz. Kötüye kullanılan trafiği otomatikleştirmemeyi, site sunumunu bozmaya çalışmamayı, güvenlik korumalarını tersine mühendislikle aşmamayı ve hiçbir aracı yasa dışı faaliyetler için kullanmamayı kabul edersiniz.',
          'Araçlarımıza bağlantı verebilir ve sonuçlarını paylaşabilirsiniz. Araçlarımızı kendi ürününüzmüş gibi sunamaz, sitenin tasarımını veya içeriğini kopyalayıp rakip bir hizmet olarak yeniden yayınlayamaz ya da bir sonucun nereden geldiği konusunda başkalarını yanıltacak biçimde siteyi kullanamazsınız.',
        ],
      },
      {
        title: '3. Doğruluk ve Bilgilendirme Beyanı',
        paragraphs: [
          'Her aracı dikkatle test etsek de tüm araçlar, hesaplamalar, dönüştürmeler ve SEO denetimleri “olduğu gibi” ve “mevcut olduğu haliyle” sunulur. Çıktılar; finansal, yasal, tıbbi veya üretim mühendisliği kararları vermeden önce bağımsız olarak doğrulanmalıdır.',
          'Kredi ödemeleri, vergi tahminleri ve para birimi dönüştürmeleri gibi hesaplamalar planlama yardımcılarıdır, profesyonel tavsiye değildir. Rakamlar oranlara, kurallara ve yuvarlamaya göre değişebilir; bu nedenle önemli sayılar için harekete geçmeden önce nitelikli bir uzmana veya resmi bir kaynağa danışın.',
        ],
      },
      {
        title: '4. Fikri Mülkiyet',
        paragraphs: [
          'UtilityFlow arayüzü, marka varlıkları, belgeler ve kaynak kod, ilgili fikri mülkiyet yasalarıyla korunmaktadır. İstemci tarafı araçlarımızı kullanarak işlediğiniz metin, kod, belge veya görüntülerin tam sahipliği sizde kalır.',
          'UtilityFlow bağımsız bir projedir ve bu sitede adı geçen YouTube, Instagram, Google veya başka herhangi bir üçüncü taraf markayla bağlantılı değildir, onlar tarafından onaylanmaz ya da desteklenmez.',
        ],
      },
      {
        title: '5. Sorumluluğun Sınırlandırılması',
        paragraphs: [
          'Yasaların izin verdiği en geniş ölçüde, UtilityFlow ve katkıda bulunanları; platformun kullanımından veya kullanılamamasından doğan dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu değildir.',
        ],
      },
      {
        title: '6. Kullanıcı İçeriği ve Yorumlar',
        paragraphs: [
          'Araçlarımıza yazdığınız veya yorum olarak yayınladığınız her şeyin tam sahipliği sizde kalır. Bir yorum yayınlayarak, yorumu ilgili araç sayfasında herkese açık göstermemiz için bize izin vermiş olursunuz. Yasa dışı, yanıltıcı veya başkalarına zararlı hiçbir şey yayınlamayın ve başkasının kişisel bilgilerini yayınlamayın. Bu kuralları ihlal eden veya bize bildirilen yorumları haber vermeden kaldırabiliriz.',
        ],
      },
      {
        title: '7. Üçüncü Taraf Hizmetler',
        paragraphs: [
          'Bazı özellikler bağımsız üçüncü taraf hizmetlere dayanır: iletişim formu FormSubmit ile iletilir ve site Cloudflare üzerinde barındırılır. Bu hizmetlerin her birinin kendi şartları ve gizlilik politikası vardır; bunları kullanımınız o belgelerle düzenlenir. UtilityFlow, üçüncü taraf hizmetlerin kullanılabilirliğinden veya uygulamalarından sorumlu değildir.',
        ],
      },
      {
        title: '8. Hizmetin Kullanılabilirliği',
        paragraphs: [
          'UtilityFlow ücretsiz bir hizmettir ve her aracın her zaman kullanılabilir olacağını garanti etmiyoruz. Araçlar değiştirilebilir, iyileştirilebilir veya kaldırılabilir; site bakım için geçici olarak kullanılamayabilir. Hizmetin sorunsuz çalışmasını sağlamayı hedefliyoruz, ancak kesintilerden veya kapalı kalma süresinden doğan kayıplardan sorumlu değiliz.',
        ],
      },
    ],
    acceptanceTitle: '1. Şartların Kabulü',
    acceptanceBefore:
      'UtilityFlow’a erişerek veya onu kullanarak, bu Kullanım Şartlarına ve',
    acceptanceLink: 'Gizlilik Politikası',
    acceptanceAfter:
      '’na bağlı kalmayı kabul edersiniz. Bu şartların herhangi bir bölümünü kabul etmiyorsanız, lütfen web sitesini kullanmayı bırakın.',
    changesTitle: '9. Değişiklikler ve İletişim',
    changesBefore:
      'Yeni araçlar yayınlandıkça bu Kullanım Şartlarını güncelleyebiliriz. Sorularınızı şu sayfadan iletebilirsiniz:',
    changesLink: 'İletişim sayfası',
    changesAfter: '.',
  },
};
