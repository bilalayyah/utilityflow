import type { ToolLocaleOverride } from '../../types';

/**
 * Turkish overrides — Batch 3: Calculators (14 tools).
 * Source: src/registry/batches/batch3/calcToolsPart1.ts, Part2, Part3.
 * Original Turkish copy, SEO-optimized for Turkish search intent.
 * Slugs are Turkish, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const TR_BATCH_3_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'age-calculator': {
    slug: 'yas-hesaplayici',
    name: 'Yaş Hesaplayıcı',
    shortDescription:
      'Doğum tarihinden yıl, ay ve gün olarak tam yaşınızı hesaplayın; toplam hafta, gün ve bir sonraki doğum gününe kalan süreyi görün.',
    keywords: [
      'yaş hesaplayıcı',
      'yaş hesaplama',
      'doğum tarihinden yaş hesaplama',
      'kaç yaşındayım',
      'yaş hesaplama online',
      'doğum günü sayacı',
      'yıl ay gün yaş hesapla',
      'yaşımı öğren',
      'tam yaş hesaplayıcı',
    ],
    seo: {
      title: 'Yaş Hesaplayıcı: Yıl, Ay ve Gün Hesapla | UtilityFlow',
      description:
        'Doğum tarihinizden yaşınızı yıl, ay, gün, hafta ve toplam gün olarak tam olarak hesaplayın; bir sonraki doğum gününüze kalan süreyi de görün, tamamen ücretsiz.',
      primaryKeyword: 'yaş hesaplayıcı',
      secondaryKeywords: ['yaş hesaplama', 'doğum tarihinden yaş hesaplama', 'kaç yaşındayım', 'yaş hesaplama online'],
      longTailKeywords: ['doğum tarihinden yaş yıl ay gün olarak nasıl hesaplanır', 'bir sonraki doğum günüme kaç gün kaldı', 'bugün kaç yaşındayım hesaplayıcı', 'herhangi bir tarihte yaşımı nasıl öğrenirim'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Doğum tarihinden bugüne — ya da geçmiş veya gelecek herhangi bir tarihe — kadar tam yaşınızı hesaplayın; farklı uzunluktaki aylar ve artık yıllar dikkate alınır.',
  },
  'percentage-calculator': {
    slug: 'yuzde-hesaplayici',
    name: 'Yüzde Hesaplayıcı',
    shortDescription:
      'Bir sayının yüzdesini, X’in Y’nin yüzde kaçı olduğunu ve yüzde artış ya da azalışı anında hesaplayın.',
    keywords: [
      'yüzde hesaplayıcı',
      'yüzde hesaplama',
      'yüzde nasıl hesaplanır',
      'yüzde artış hesaplama',
      'yüzde azalış hesaplama',
      'x yüzde y hesaplama',
      "x'in y'nin yüzde kaçı",
      'yüzde bulma aracı',
      'yüzde formülü',
    ],
    seo: {
      title: 'Yüzde Hesaplayıcı: % Hesaplama Aracı | UtilityFlow',
      description:
        'Bir sayının yüzdesini bulun, X’in Y’nin yüzde kaçı olduğunu öğrenin ve yüzde artış ya da azalışı anında hesaplayın; ücretsiz ve kayıtsız çevrimiçi kullanın.',
      primaryKeyword: 'yüzde hesaplayıcı',
      secondaryKeywords: ['yüzde hesaplama', 'yüzde nasıl hesaplanır', 'yüzde artış hesaplama', 'yüzde azalış hesaplama'],
      longTailKeywords: ['iki sayı arasındaki yüzde artış veya azalış nasıl hesaplanır', "x y'nin yüzde kaçıdır nasıl bulunur", 'tarayıcıda anında yüzde hesaplama aracı', "y'nin x yüzdesi kaç eder hesaplayıcı"],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Yüzdeyle ilgili en yaygın üç soruyu tek yerde çözün: bir değerin X yüzdesini bulma, X’in Y’nin yüzde kaçı olduğunu öğrenme ve yüzde artış ya da azalışı ölçme.',
  },
  'loan-emi-calculator': {
    slug: 'kredi-taksit-hesaplayici',
    name: 'Kredi Taksit Hesaplayıcı',
    shortDescription:
      'Aylık kredi taksidini, toplam faizi ve yıllık ya da aylık ödeme planını hesaplayın.',
    keywords: [
      'kredi hesaplama',
      'emi hesaplama',
      'kredi taksit hesaplama',
      'aylık taksit hesaplama',
      'ihtiyaç kredisi hesaplama',
      'taşıt kredisi hesaplama',
      'konut kredisi taksit hesaplama',
      'kredi faiz hesaplama',
      'taksit hesaplama aracı',
    ],
    seo: {
      title: 'Kredi Taksit Hesaplayıcı: Aylık EMI Hesapla | UtilityFlow',
      description:
        'Aylık kredi taksidinizi, toplam faiz maliyetini ve anapara-faiz dağılımını gösteren ödeme planını çevrimiçi hesaplayın; ücretsiz, anında sonuç, kayıt gerekmez.',
      primaryKeyword: 'kredi hesaplama',
      secondaryKeywords: ['emi hesaplama', 'kredi taksit hesaplama', 'aylık taksit hesaplama', 'ihtiyaç kredisi hesaplama'],
      longTailKeywords: ['kredinin aylık taksiti ve toplam faizi nasıl hesaplanır', 'kredi ödeme planı anapara faiz dağılımı nasıl görülür', 'ihtiyaç ve taşıt kredisi taksit hesaplama', 'konut kredisi aylık taksit hesaplama online'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Tam aylık taksidinizi, kredi süresi boyunca ödeyeceğiniz toplam faizi, anapara-faiz oranını ve yıl yıl ya da ay ay şeffaf ödeme planını hesaplayın.',
  },
  'mortgage-calculator': {
    slug: 'konut-kredisi-hesaplayici',
    name: 'Konut Kredisi Hesaplayıcı',
    shortDescription:
      'Peşinat, faiz oranı, emlak vergisi, sigorta ve aidat dahil aylık konut kredisi ödemenizi tahmin edin.',
    keywords: [
      'konut kredisi hesaplama',
      'mortgage hesaplama',
      'konut kredisi hesaplama aracı',
      'ev kredisi hesaplama',
      'konut kredisi aylık ödeme hesaplama',
      'konut kredisi faiz hesaplama',
      'peşinat hesaplama',
      '15 yıl 30 yıl konut kredisi',
      'konut kredisi ödeme planı',
    ],
    seo: {
      title: 'Konut Kredisi Hesaplayıcı: Aylık Ödeme | UtilityFlow',
      description:
        'Peşinat, faiz oranı, emlak vergisi, konut sigortası ve aidat ile aylık konut kredisi ödemenizi tahmin edin; ücretsiz, çevrimiçi ve anında sonuç hemen alın.',
      primaryKeyword: 'konut kredisi hesaplama',
      secondaryKeywords: ['mortgage hesaplama', 'ev kredisi hesaplama', 'konut kredisi aylık ödeme hesaplama', 'konut kredisi faiz hesaplama'],
      longTailKeywords: ['vergi ve sigorta dahil aylık konut kredisi ödemesi nasıl hesaplanır', '15 yıl ve 30 yıl konut kredisi ödemesi karşılaştırma', 'konut kredisi borcu zamanla nasıl azalır', 'ayda ne kadar konut kredisi ödeyebilirim nasıl öğrenirim'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Gerçek aylık konut giderinizi modelleyin: anapara ve faize ek olarak emlak vergisi, konut sigortası, aidat ve özel ipotek sigortası; toplam faiz ve yıllık borç azalışıyla birlikte.',
  },
  'compound-interest-calculator': {
    slug: 'bilesik-faiz-hesaplayici',
    name: 'Bileşik Faiz Hesaplayıcı',
    shortDescription:
      'İlk yatırım, aylık katkı, bileşik dönem ve enflasyon düzeltmesiyle yatırımınızın büyümesini tahmin edin.',
    keywords: [
      'bileşik faiz hesaplama',
      'bileşik faiz hesaplayıcı',
      'yatırım büyüme hesaplama',
      'bileşik faiz formülü',
      'aylık katkı bileşik faiz',
      'gelecek değer hesaplama',
      'birikim faiz hesaplama',
      'yatırım getirisi hesaplama',
      'faiz hesaplama aracı',
    ],
    seo: {
      title: 'Bileşik Faiz Hesaplayıcı: Birikim Büyüt | UtilityFlow',
      description:
        'İlk yatırımınızın ve aylık katkılarınızın bileşik faizle yıllar içinde nasıl büyüdüğünü görün; yıllık tablo, bileşik dönemleri ve ücretsiz kullanım sunar.',
      primaryKeyword: 'bileşik faiz hesaplama',
      secondaryKeywords: ['bileşik faiz hesaplama', 'yatırım büyüme hesaplama', 'bileşik faiz formülü', 'gelecek değer hesaplama'],
      longTailKeywords: ['aylık katkıyla bileşik faiz nasıl hesaplanır', 'aylık ve günlük bileşik büyüme karşılaştırması', 'yıl yıl bileşik faiz tablosu nasıl görülür', '20 yılda birikimim ne kadar büyür nasıl öğrenirim'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'İlk yatırımınızın ve her ay düzenli katkınızın bileşik faizle yıllar içinde nasıl büyüdüğünü görün; bileşik dönem seçimi ve anapara ile faiz ayrımını gösteren yıl yıl tabloyla.',
  },
  'discount-margin-calculator': {
    slug: 'indirim-kar-marji-hesaplayici',
    name: 'İndirim ve Kâr Marjı Hesaplayıcı',
    shortDescription:
      'Birikimli indirimlerle satış fiyatını bulun ya da maliyetten kâr marjı, kâr yüzdesi ve brüt kârı hesaplayın.',
    keywords: [
      'indirim hesaplama',
      'indirim hesaplayıcı',
      'kâr marjı hesaplama',
      'satış fiyatı hesaplama',
      'kâr marjı nasıl hesaplanır',
      'indirim yüzde hesaplama',
      'brüt kâr hesaplama',
      'kâr oranı hesaplama',
      'fiyat hesaplama aracı',
    ],
    seo: {
      title: 'İndirim Hesaplayıcı: Kâr Marjı ve Fiyat | UtilityFlow',
      description:
        'Birikimli indirimler ve vergiyle nihai satış fiyatını bulun ya da maliyet ve satış fiyatından brüt kâr marjı ile kâr oranını karşılaştırın; ücretsiz, anında.',
      primaryKeyword: 'indirim hesaplama',
      secondaryKeywords: ['indirim hesaplama', 'kâr marjı hesaplama', 'satış fiyatı hesaplama', 'kâr marjı nasıl hesaplanır'],
      longTailKeywords: ['birikimli indirim ve vergiyle nihai fiyat nasıl hesaplanır', 'kâr marjı ile kâr oranı arasındaki fark nedir', 'e-ticaret için kâr marjı ve kâr hesaplama', 'maliyet ve satış fiyatından kâr marjı nasıl hesaplanır'],
      schemaApplicationCategory: 'BusinessApplication',
    },
    intro:
      'İki mod arasında kolayca geçiş yapın: perakende indirim modu (birikimli kupon indirimleri ve isteğe bağlı satış vergisi) ve kâr marjı modu; böylece marjı kâr oranıyla karıştırmadan ürününüze doğru fiyatı verin.',
  },
  'vat-tax-calculator': {
    slug: 'kdv-vergi-hesaplayici',
    name: 'KDV ve Vergi Hesaplayıcı',
    shortDescription:
      'Net fiyata KDV, GST veya satış vergisi ekleyin ya da vergili brüt faturadan vergiyi ayırıp çıkarın.',
    keywords: [
      'kdv hesaplama',
      'kdv hesaplayıcı',
      'vergi hesaplama',
      'kdv nasıl hesaplanır',
      'kdv dahil fiyat hesaplama',
      'kdv hariç fiyat hesaplama',
      'satış vergisi hesaplama',
      'brüt fiyattan kdv hesaplama',
      'net fiyata kdv ekleme',
    ],
    seo: {
      title: 'KDV Hesaplayıcı: Vergi Ekle ve Çıkar | UtilityFlow',
      description:
        'Net tutara KDV, GST veya satış vergisi ekleyin ya da vergili brüt tutardan vergiyi ayırıp net fiyatı bulun; ücretsiz, kayıtsız ve anında sonuç hemen verir.',
      primaryKeyword: 'kdv hesaplama',
      secondaryKeywords: ['kdv hesaplama', 'vergi hesaplama', 'kdv nasıl hesaplanır', 'kdv dahil fiyat hesaplama'],
      longTailKeywords: ['brüt fiyattan kdv nasıl hesaplanır', 'fiyata yüzde 18 kdv veya özel oran nasıl eklenir', 'faturanın net vergi ve brüt dökümü nasıl görülür', 'toplam fiyattan ters kdv nasıl hesaplanır'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Net fiyat, vergi tutarı ve brüt toplamı iki yönde de hesaplayın: vergisiz ara toplama KDV, GST veya satış vergisi ekleyin ya da vergili fişten tam vergisiz tutarı ayırın.',
  },
  'salary-calculator': {
    slug: 'maas-hesaplayici',
    name: 'Maaş Hesaplayıcı',
    shortDescription:
      'Saatlik, günlük, haftalık, iki haftalık, aylık ve yıllık maaşınızı özel saat ve hafta ayarlarıyla çevirin.',
    keywords: [
      'maaş hesaplama',
      'maaş hesaplayıcı',
      'saatlikten yıllığa maaş',
      'aylık maaş hesaplama',
      'saatlik ücret hesaplama',
      'yıllık maaştan aylık maaş',
      'ücret dönüştürücü',
      'brüt maaş hesaplama',
      'maaş karşılaştırma aracı',
    ],
    seo: {
      title: 'Maaş Hesaplayıcı: Saatlikten Yıllığa Çevir | UtilityFlow',
      description:
        'Saatlik, günlük, haftalık, iki haftalık, aylık ve yıllık brüt maaşınızı birbirine çevirin; haftalık çalışma saatini ve yıllık ücretli hafta sayısını ayarlayın.',
      primaryKeyword: 'maaş hesaplama',
      secondaryKeywords: ['maaş hesaplama', 'saatlikten yıllığa maaş', 'aylık maaş hesaplama', 'saatlik ücret hesaplama'],
      longTailKeywords: ['saatlik 50 lira yıllık maaşa nasıl çevrilir', 'ücretsiz haftalar olmadan brüt maaş dökümü', 'haftalık saatle maaş dönüştürücü', 'yıllık maaşı aylık ve iki haftalığa nasıl çeviririm'],
      schemaApplicationCategory: 'FinanceApplication',
    },
    intro:
      'Herhangi bir maaş oranını — saatlik, günlük, haftalık, iki haftalık, aylık veya yıllık — tüm ödeme dönemlerine çevirin; haftalık çalışma saati ve yıllık ücretli hafta sayısı ayarlanabilir.',
  },
  'tip-calculator': {
    slug: 'bahsis-hesaplayici',
    name: 'Bahşiş ve Hesap Bölme Hesaplayıcı',
    shortDescription:
      'Bahşiş tutarını, vergiden önce bahşiş seçeneğini, kişi başı hesap bölmeyi ve net yuvarlamayı hesaplayın.',
    keywords: [
      'bahşiş hesaplama',
      'bahşiş hesaplayıcı',
      'hesap bölme hesaplama',
      'restoran hesabı bölme',
      'bahşiş yüzdesi hesaplama',
      'hesap bölme aracı',
      'ne kadar bahşiş vermeli',
      'kişi başı hesap hesaplama',
      'restoran bahşiş hesaplama',
    ],
    seo: {
      title: 'Bahşiş Hesaplayıcı: Hesabı Böl ve Öde | UtilityFlow',
      description:
        'Restoran bahşişini yüzdeyle hesaplayın, vergisiz tutar üzerinden bahşiş ekleyin, hesabı eşit bölün ve toplamı yuvarlayın; ücretsiz, hızlı ve kolay kullanın.',
      primaryKeyword: 'bahşiş hesaplama',
      secondaryKeywords: ['bahşiş hesaplama', 'hesap bölme hesaplama', 'restoran hesabı bölme', 'bahşiş yüzdesi hesaplama'],
      longTailKeywords: ['vergiden önce yüzde 18 veya 20 bahşiş nasıl hesaplanır', 'arkadaşlarla akşam yemeği hesabı ve bahşiş nasıl bölünür', 'kişi başı toplamı yuvarlayan bahşiş hesaplayıcı', 'bahşiş ve vergiyle restoran hesabı nasıl bölünür'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Restoran, teslimat veya grup gezisi için doğru bahşişi anında hesaplayın ve hesabı istediğiniz kişi sayısına eşit bölün; vergi çıkarma seçeneği ve hesap yuvarlamayla.',
  },
  'bmi-calculator': {
    slug: 'vki-hesaplayici',
    name: 'VKİ Hesaplayıcı',
    shortDescription:
      'Metrik veya İngiliz ölçü birimleriyle vücut kitle indeksinizi (VKİ) hesaplayın; DSÖ ağırlık kategorisi ve sağlıklı aralıkla.',
    keywords: [
      'vki hesaplama',
      'bmi hesaplama',
      'vücut kitle indeksi hesaplama',
      'vki hesaplayıcı',
      'sağlıklı kilo aralığı hesaplama',
      'bmi tablosu',
      'vki normal aralık nedir',
      'boy kilo vki hesaplama',
      'ideal kilo hesaplama',
    ],
    seo: {
      title: 'VKİ Hesaplayıcı: Vücut Kitle İndeksi | UtilityFlow',
      description:
        'Boy ve kilonuzdan vücut kitle indeksinizi (VKİ) metrik ya da İngiliz ölçü birimleriyle hesaplayın; DSÖ ağırlık kategorinizi ve kilo aralığınızı öğrenin.',
      primaryKeyword: 'vki hesaplama',
      secondaryKeywords: ['bmi hesaplama', 'vücut kitle indeksi hesaplama', 'sağlıklı kilo aralığı hesaplama', 'vki normal aralık nedir'],
      longTailKeywords: ['fit inç ve pound ile vki nasıl hesaplanır', 'yetişkinler için dsö vki kategorisi nedir', 'boyuma göre sağlıklı kilo aralığı nasıl öğrenilir', 'boyum için doğru vki aralığı nedir'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Yetişkin vücut kitle indeksinizi (VKİ) metrik (cm/kg) veya İngiliz (fit, inç/pound) ölçülerle hesaplayın; Dünya Sağlık Örgütü sınıflandırma kategorilerini ve boyunuz için 18,5 ile 24,9 arasındaki sağlıklı kilo aralığını görün.',
  },
  'calorie-calculator': {
    slug: 'kalori-hesaplayici',
    name: 'Kalori ve TDEE Hesaplayıcı',
    shortDescription:
      'Kilo hedefinizle birlikte bazal metabolizma hızınızı (BMR) ve toplam günlük enerji harcamanızı (TDEE) tahmin edin.',
    keywords: [
      'kalori hesaplama',
      'kalori hesaplayıcı',
      'tdee hesaplama',
      'bmr hesaplama',
      'günlük kalori ihtiyacı hesaplama',
      'kilo verme kalori hesaplama',
      'kalori açığı hesaplama',
      'günde kaç kalori almalıyım',
      'makro hesaplama',
    ],
    seo: {
      title: 'Kalori Hesaplayıcı: TDEE ve BMR Hesapla | UtilityFlow',
      description:
        'Mifflin-St Jeor formülüyle bazal metabolizma hızınızı (BMR) ve toplam günlük enerji harcamanızı (TDEE) bulun; kilo hedeflerinize uygun makro planı oluşturun.',
      primaryKeyword: 'kalori hesaplama',
      secondaryKeywords: ['tdee hesaplama', 'bmr hesaplama', 'günlük kalori ihtiyacı hesaplama', 'kalori hesaplayıcı'],
      longTailKeywords: ['kilo koruma kalorisi ve kilo verme açığı nasıl hesaplanır', 'mifflin st jeor ile günlük kalori harcaması nasıl hesaplanır', 'metrik ve İngiliz tdee makro hesaplayıcı', 'kilo vermek için günde kaç kalori almalıyım'],
      schemaApplicationCategory: 'HealthApplication',
    },
    intro:
      'Klinik olarak geçerli Mifflin-St Jeor denklemiyle bazal metabolizma hızınızı (BMR) ve toplam günlük enerji harcamanızı (TDEE) öğrenin; hafif açık, standart yağ kaybı, yağsız kas kazanımı ve kilo koruma hedefleri ve makrolarla.',
  },
  'date-difference-calculator': {
    slug: 'tarih-farki-hesaplayici',
    name: 'Tarih Farkı Hesaplayıcı',
    shortDescription:
      'İki tarih arasındaki tam yıl, ay, gün, iş günü ve hafta sonu gününü hesaplayın ya da takvim farkı ekleyip çıkarın.',
    keywords: [
      'tarih farkı hesaplama',
      'iki tarih arası gün hesaplama',
      'tarih farkı hesaplayıcı',
      'iki tarih arası kaç gün',
      'iş günü hesaplama',
      'tarihe gün ekleme aracı',
      'kaç gün kaldı hesaplama',
      'tarihten gün hesaplama',
      'gün sayacı',
    ],
    seo: {
      title: 'Tarih Farkı Hesaplayıcı: Günleri Sayın | UtilityFlow',
      description:
        'İki tarih arasındaki yıl, ay, gün, iş günü ve hafta sonu farkını tam olarak hesaplayın ya da bir tarihe takvim farkı ekleyip çıkarın; ücretsiz çevrimiçi araç.',
      primaryKeyword: 'tarih farkı hesaplama',
      secondaryKeywords: ['iki tarih arası gün hesaplama', 'tarih farkı hesaplayıcı', 'iki tarih arası kaç gün', 'iş günü hesaplama'],
      longTailKeywords: ['iki tarih arası iş günü ve hafta sonu günü nasıl hesaplanır', 'iki tarih arası tam ay ve gün nasıl hesaplanır', 'bir tarihe yıl ay gün nasıl eklenir veya çıkarılır', 'iki tarih arasında kaç iş günü var online'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Herhangi iki tarih arasındaki tam takvim farkını ölçün; iş günü ile hafta sonu günü sayımı ve bitiş tarihini sayma seçeneği dahil; ya da bir referans tarihe yıl, ay ve gün ekleyip çıkarın.',
  },
  'time-duration-calculator': {
    slug: 'sure-hesaplayici',
    name: 'Süre Hesaplayıcı',
    shortDescription:
      'Saatler arasındaki geçen süreyi SS:DD:SS olarak bulun (mola ve gece vardiyası dahil) ya da çok satırlı zaman çizelgesini toplayın.',
    keywords: [
      'süre hesaplama',
      'süre hesaplayıcı',
      'saat hesaplama',
      'iki saat arası fark hesaplama',
      'zaman çizelgesi hesaplama',
      'çalışma saati hesaplama',
      'saat dakika toplama aracı',
      'vardiya saati hesaplama',
      'geçen süre hesaplama',
    ],
    seo: {
      title: 'Süre Hesaplayıcı: Saat ve Vardiya Hesapla | UtilityFlow',
      description:
        'İki saat arasındaki geçen süreyi saat, dakika ve saniye olarak bulun; ücretsiz molayı çıkarın, gece vardiyasını ekleyin ve zaman çizelgesi satırlarını toplayın.',
      primaryKeyword: 'süre hesaplama',
      secondaryKeywords: ['süre hesaplama', 'saat hesaplama', 'zaman çizelgesi hesaplama', 'vardiya saati hesaplama'],
      longTailKeywords: ['ücretsiz mola ve gece vardiyasıyla geçen süre nasıl hesaplanır', 'ss dd ss süreyi ondalık saate nasıl çeviririm', 'birden fazla saat dakika saniye satırı nasıl toplanır', 'molayla çalışma saati online nasıl hesaplanır'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'İki saat arasındaki geçen tam saat, dakika ve saniyeyi öğrenin; ücretsiz mola kesintisi ve gece yarısını aşan gece vardiyasıyla; ya da sınırsız süre satırı toplayıp bordro için ondalık saat elde edin.',
  },
  'unit-converter': {
    slug: 'birim-cevirici',
    name: 'Birim Çevirici',
    shortDescription:
      'Tam başvuru tablosuyla uzunluk, ağırlık, sıcaklık, alan, hacim, hız ve dijital depolama birimlerini çevirin.',
    keywords: [
      'birim çevirici',
      'birim dönüştürücü',
      'metrik İngiliz dönüştürücü',
      'metre fit çevirici',
      'kg pound çevirici',
      'santigrat fahrenhayt çevirme',
      'litre galon çevirici',
      'km mil çevirici',
      'birim çevirme aracı',
    ],
    seo: {
      title: 'Birim Çevirici: Uzunluk, Ağırlık, Sıcaklık | UtilityFlow',
      description:
        'Uzunluk, ağırlık, sıcaklık, alan, hacim, hız ve dijital depolama birimlerini metrik ve İngiliz sistemleri arasında çevirin; tam başvuru tablosuyla, ücretsiz.',
      primaryKeyword: 'birim çevirici',
      secondaryKeywords: ['birim dönüştürücü', 'metrik İngiliz dönüştürücü', 'metre fit çevirici', 'kg pound çevirici'],
      longTailKeywords: ['kilometreyi mile ve kilogramı pounda online nasıl çeviririm', 'gigabayt ondalık ve gibibayt depolama dönüştürücü', 'bilim ve mühendislik birim dönüştürücü tablolu', 'santigratı fahrenhayt ve kelvine online nasıl çeviririm'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Yedi ölçüm ailesi arasında anında çevirin: uzunluk, ağırlık ve kütle, sıcaklık, alan, hacim, hız ve dijital depolama; kategorideki her birimi gösteren otomatik yan yana tabloyla.',
  },
  'roman-numeral-converter': {
    slug: 'roma-rakamlari-cevirici',
    name: 'Roma Rakamları Çevirici',
    shortDescription:
      'Sayıları Roma rakamlarına ve Roma rakamlarını sayılara anında çevirin; tarihleri de Roma rakamlarıyla yazın.',
    keywords: [
      'roma rakamları çevirici',
      'roma rakamlarını sayıya çevirme',
      'sayıyı roma rakamına çevirme',
      'roma rakamları tarih çevirici',
      'roma rakamları hesaplayıcı',
      'MMXXVI kaçtır',
      'roma rakamları 1 ile 3999 arası',
      'yılı roma rakamına çevirme',
      'roma rakamları tablosu',
    ],
    seo: {
      title: 'Roma Rakamları Çevirici: Sayı ve Tarih | UtilityFlow',
      description:
        'Sayıları Roma rakamlarına ve Roma rakamlarını sayılara anında çevirin. Yıllar, doğum günleri ve tarihler için ücretsiz Roma rakamları çeviriciyi deneyin.',
      primaryKeyword: 'roma rakamları çevirici',
      secondaryKeywords: [
        'roma rakamlarını sayıya çevirme',
        'sayıyı roma rakamına çevirme',
        'roma rakamları tarih çevirici',
        'roma rakamları hesaplayıcı',
      ],
      longTailKeywords: [
        'sayı roma rakamına nasıl çevrilir',
        '2026 roma rakamıyla nasıl yazılır',
        'doğum günümü roma rakamına çevirme',
        'yılı roma rakamına çeviren ücretsiz araç',
      ],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      '1 ile 3999 arasındaki herhangi bir tam sayıyı Roma rakamlarına çevirin ya da Roma rakamlarını normal sayılar gibi okuyun — tam bir tarihi de Roma rakamlarına çevirin, hepsi tarayıcınızda anında.',
  },
};
