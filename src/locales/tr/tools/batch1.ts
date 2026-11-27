import type { ToolLocaleOverride } from '../../types';

/**
 * Turkish overrides — Batch 1: Text & Writing tools (15 tools).
 * Source: src/registry/batches/batch1/textToolsPart1.ts, Part2, Part3.
 * Original Turkish copy, SEO-optimized for Turkish search intent.
 * Slugs are Turkish words, unique, lowercase Latin, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const TR_BATCH_1_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'word-counter': {
    slug: 'kelime-sayaci',
    name: 'Kelime Sayacı',
    shortDescription:
      'Kelime, karakter, cümle, paragraf, okuma süresi ve en sık kullanılan kelimeleri anında sayın.',
    keywords: [
      'kelime sayacı',
      'kelime sayacı online',
      'kelime sayısı hesaplama',
      'online kelime sayma',
      'kelime sayma aracı',
      'okuma süresi hesaplama',
      'cümle sayacı',
      'kelime sayısı nasıl öğrenilir',
      'kelime ve karakter sayma',
    ],
    seo: {
      title: 'Kelime Sayacı: Kelime ve Okuma Süresi Hesapla | UtilityFlow',
      description:
        'Kelime, karakter, cümle ve paragraf sayısını anında öğrenin; okuma ve konuşma süresini tahmin edin. Makale, ödev ve tez için ücretsiz, kayıtsız ve gizli.',
      primaryKeyword: 'kelime sayacı',
      secondaryKeywords: ['kelime sayacı online', 'kelime sayısı hesaplama', 'okuma süresi hesaplama', 'kelime sayma aracı'],
      longTailKeywords: ['online kelime ve karakter sayma aracı', 'makalede kaç kelime var nasıl öğrenilir', 'okuma süresi nasıl hesaplanır', 'yükleme yapmadan kelime sayma aracı'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Makalenizdeki kelime, karakter ve cümle sayısını; okuma ve konuşma süresini gerçek zamanlı görün — metniniz hiçbir sunucuya gitmez, her şey tarayıcınızda gerçekleşir.',
  },
  'character-counter': {
    slug: 'karakter-sayaci',
    name: 'Karakter Sayacı',
    shortDescription:
      'Boşluklu ve boşluksuz karakter sayısını, UTF-8 baytını ve sosyal medya ile SEO karakter sınırlarını görün.',
    keywords: [
      'karakter sayacı',
      'karakter sayacı online',
      'harf sayma aracı',
      'karakter sayısı hesaplama',
      'meta açıklama uzunluğu kontrol',
      'karakter sayısı nasıl öğrenilir',
      'sms karakter sayacı',
      'seo başlık uzunluğu kontrol',
      'boşluksuz karakter sayma',
    ],
    seo: {
      title: 'Karakter Sayacı: Harf ve Bayt Sayısı Ölç | UtilityFlow',
      description:
        'Boşluklu ve boşluksuz karakter, kelime, rakam ve UTF-8 bayt sayısını ölçün; SEO, SMS ve sosyal medya karakter sınırına göre ilerlemenizi canlı takip edin.',
      primaryKeyword: 'karakter sayacı',
      secondaryKeywords: ['karakter sayacı online', 'harf sayma aracı', 'meta açıklama uzunluğu kontrol', 'seo başlık uzunluğu kontrol'],
      longTailKeywords: ['boşluksuz karakter sayısı nasıl hesaplanır', 'seo meta açıklama uzunluğu nasıl kontrol edilir', 'utf-8 bayt sayısı nasıl öğrenilir', 'twitter karakter sınırı kontrol aracı'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Harf, rakam, boşluk ve UTF-8 bayt sayısını tam olarak görün; SEO özeti, SMS ve sosyal medya gönderilerindeki karakter sınırına göre ilerlemenizi canlı takip edin.',
  },
  'case-converter': {
    slug: 'buyuk-kucuk-harf-cevirici',
    name: 'Büyük Küçük Harf Çevirici',
    shortDescription:
      'Metni BÜYÜK HARF, küçük harf, Başlık Düzeni, Cümle düzeni, camelCase, snake_case ve kebab-case arasında çevirin.',
    keywords: [
      'büyük küçük harf çevirici',
      'harf çevirici online',
      'büyük harften küçük harfe çevirme',
      'metni büyük harfe çevirme',
      'başlık düzeni çevirici',
      'camelcase çevirici',
      'snake case oluşturucu',
      'küçük harfe çevirme aracı',
      'cümle düzeni çevirici',
    ],
    seo: {
      title: 'Büyük Küçük Harf Çevirici: Metni Dönüştür | UtilityFlow',
      description:
        'Metni BÜYÜK HARF, küçük harf, Başlık Düzeni, Cümle düzeni, camelCase, snake_case ve kebab-case arasında tek tıkla çevirin. Ücretsiz, hızlı, güvenli ve gizli.',
      primaryKeyword: 'büyük küçük harf çevirici',
      secondaryKeywords: ['harf çevirici online', 'büyük harften küçük harfe çevirme', 'başlık düzeni çevirici', 'camelcase çevirici'],
      longTailKeywords: ['metni büyük harften küçük harfe çevirme online', 'başlık düzenine metin nasıl çevrilir', 'camelcase ve snake case çevirici ücretsiz', 'caps lock ile yazılan metin nasıl düzeltilir'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Yanlışlıkla Caps Lock açık yazılmış metni düzeltin, makale başlıklarını Başlık Düzenine çevirin veya değişken adlarını camelCase, PascalCase, snake_case ve kebab-case olarak tek tıkla biçimlendirin.',
  },
  'remove-duplicate-lines': {
    slug: 'tekrarlanan-satirlari-sil',
    name: 'Tekrarlanan Satırları Sil',
    shortDescription:
      'Büyük küçük harf duyarlılığı, boşluk temizleme ve alfabetik sıralama seçenekleriyle liste ve günlüklerden tekrarlanan satırları silin.',
    keywords: [
      'tekrarlanan satırları silme',
      'tekrarlanan satır silme aracı',
      'listeden tekrarları silme',
      'duplicate satır silici',
      'tekrar eden satır temizleme',
      'benzersiz satır filtresi',
      'tekrarları silme yöntemi',
      'liste temizleme aracı',
      'tekrar eden kayıtları silme',
    ],
    seo: {
      title: 'Tekrarlanan Satırları Sil: Listeyi Temizle | UtilityFlow',
      description:
        'Liste, e-posta, URL veya günlük kayıtlarındaki tekrarlanan satırları anında silin. Boşluk temizleme, harf duyarlılığı ve sıralama seçenekleriyle ücretsizdir.',
      primaryKeyword: 'tekrarlanan satırları silme',
      secondaryKeywords: ['tekrarlanan satır silme aracı', 'listeden tekrarları silme', 'duplicate satır silici', 'benzersiz satır filtresi'],
      longTailKeywords: ['listeden tekrarlanan satırlar nasıl silinir', 'e-posta listesinden tekrarları silme aracı', 'sırayı bozmadan tekrarları silme', 'tekrarlanan satır silme ücretsiz araç'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Dağınık listeleri, anahtar kelime çıktılarını, e-posta adreslerini veya sunucu günlüklerini tekrarlanan kayıtlardan arındırın — boşluk temizleme, harf duyarlılığı ve çıktı sırası tamamen sizin kontrolünüzde.',
  },
  'text-diff-checker': {
    slug: 'metin-karsilastirma-araci',
    name: 'Metin Karşılaştırma Aracı',
    shortDescription:
      'İki metin bloğunu satır satır karşılaştırarak eklenen, silinen ve değişmeyen satırları belirleyin.',
    keywords: [
      'metin karşılaştırma',
      'iki metin karşılaştırma',
      'metin farkı bulma',
      'iki metin arasındaki fark',
      'metin fark kontrolü',
      'iki metni karşılaştır online',
      'metinlerdeki fark nasıl bulunur',
      'fark kontrol aracı',
      'iki dosya karşılaştırma',
    ],
    seo: {
      title: 'Metin Karşılaştırma: İki Metni Karşılaştır | UtilityFlow',
      description:
        'İki metin, kod veya yapılandırma dosyasını satır satır karşılaştırın; eklenen ve silinen satırları net görün. Hiçbir şey yüklenmez, ücretsiz ve gizlidir.',
      primaryKeyword: 'metin karşılaştırma',
      secondaryKeywords: ['iki metin karşılaştırma', 'metin farkı bulma', 'iki metin arasındaki fark', 'metin fark kontrolü'],
      longTailKeywords: ['iki metin dosyası arasındaki fark nasıl bulunur', 'iki sürüm arasındaki değişiklikler nasıl görülür', 'metin karşılaştırma ücretsiz araç', 'belgenin iki sürümünü karşılaştırma'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Makale, sözleşme veya yapılandırma dosyasının iki sürümü arasındaki eklenen, silinen ve değişen her satırı belirleyin — satır satır karşılaştırma motoruyla, anında ve gizli.',
  },
  'whitespace-remover': {
    slug: 'fazla-bosluk-silici',
    name: 'Fazla Boşluk Silici',
    shortDescription:
      'PDF veya webden kopyalanan metindeki fazla boşlukları, sekmeleri, boş satırları ve istenmeyen satır sonlarını silin.',
    keywords: [
      'fazla boşluk silme',
      'fazla boşluk silici online',
      'pdf metin temizleme',
      'boş satır silme aracı',
      'boşluk temizleme aracı',
      'satır sonu silme',
      'metin temizleme aracı',
      'fazla boşluk nasıl silinir',
      'pdf metni satır kırılması düzeltme',
    ],
    seo: {
      title: 'Fazla Boşluk Silici: Metni Temizle Online | UtilityFlow',
      description:
        'PDF veya webden kopyalanan metindeki fazla boşlukları, sekmeleri, boş satırları ve istenmeyen satır sonlarını silin. Hızlı, ücretsiz ve gizli; kayıt gerekmez.',
      primaryKeyword: 'fazla boşluk silme',
      secondaryKeywords: ['fazla boşluk silici online', 'pdf metin temizleme', 'boş satır silme aracı', 'boşluk temizleme aracı'],
      longTailKeywords: ['pdfden kopyalanan metindeki fazla boşluk nasıl silinir', 'boş satırlar ve fazla boşlukları birlikte silme', 'sekme ve çoklu boşluğu tek boşluğa çevirme', 'kopyalanan metni temizleme aracı'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'PDF, e-posta, elektronik tablo veya web sayfasından kopyalanan dağınık metni temizleyin — tekrarlanan boşlukları daraltın, sekmeleri değiştirin, satır kenarlarını kırpın ve satır sonlarını normale döndürün.',
  },
  'sort-lines': {
    slug: 'satir-sirala',
    name: 'Satır Sırala',
    shortDescription:
      'Listeyi A–Z, Z–A, doğal sıra (1, 2, 10), harf uzunluğu, ters veya rastgele karıştırma ile sıralayın.',
    keywords: [
      'satır sıralama aracı',
      'satırları alfabetik sıralama',
      'liste a dan z ye sıralama',
      'alfabetik sıralama aracı',
      'satır sıralama nasıl yapılır',
      'doğal sıralama online',
      'liste karıştırma aracı',
      'satırları ters sıralama',
      'a dan z ye sıralama aracı',
    ],
    seo: {
      title: 'Satır Sırala: Listeyi A–Z Diz Online | UtilityFlow',
      description:
        'Satırları A–Z, Z–A, sayı sırası (1, 2, 10), uzunluk, ters veya rastgele karıştırma ile sıralayın. Tekrarlanan ve boş satırları silerek listenizi düzenleyin.',
      primaryKeyword: 'satır sıralama aracı',
      secondaryKeywords: ['satırları alfabetik sıralama', 'liste a dan z ye sıralama', 'alfabetik sıralama aracı', 'doğal sıralama online'],
      longTailKeywords: ['liste alfabetik olarak nasıl sıralanır', 'sayılı liste doğal sırayla nasıl sıralanır', 'satırları uzunluğa göre sıralama', 'listeyi ters çevirme ve karıştırma aracı'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Listeleri, kaynakçaları, envanter kodlarını veya kod aktarımlarını alfabetik, doğal sayı sırası, harf uzunluğu veya ters sırayla düzenleyin — tek tıkla.',
  },
  'find-and-replace': {
    slug: 'bul-ve-degistir',
    name: 'Bul ve Değiştir',
    shortDescription:
      'Büyük küçük harf duyarlılığı, tam kelime eşleştirme ve RegExp desteğiyle metinde kelime bulup değiştirin.',
    keywords: [
      'bul ve değiştir',
      'metinde kelime değiştirme',
      'bul değiştir aracı',
      'toplu metin değiştirme',
      'regex bul değiştir',
      'kelime değiştirme aracı',
      'metin değiştirme aracı',
      'birden fazla kelime değiştirme',
      'regex ile bul değiştir',
    ],
    seo: {
      title: 'Bul ve Değiştir: Metinde Kelime Değiştir | UtilityFlow',
      description:
        'Eşleşme sayısı, büyük küçük harf duyarlılığı, tam kelime ve RegExp yakalama gruplarıyla metinde bul ve değiştir yapın. Tarayıcıda, kayıtsız ve ücretsiz.',
      primaryKeyword: 'bul ve değiştir',
      secondaryKeywords: ['metinde kelime değiştirme', 'bul değiştir aracı', 'toplu metin değiştirme', 'regex bul değiştir'],
      longTailKeywords: ['metinde birden fazla kelime nasıl değiştirilir', 'yalnızca tam kelimeyi değiştirme aracı', 'regex ile metin bul değiştir nasıl yapılır', 'büyük metinde kelime değiştirme ücretsiz araç'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Makale, CSV veya kod bloğunda toplu bul ve değiştir yapın — tam metin eşleştirme, tam kelime sınırı veya normal ifade yakalama gruplarıyla.',
  },
  'text-reverser': {
    slug: 'metin-tersine-cevir',
    name: 'Metni Tersine Çevir',
    shortDescription:
      'Tüm metni ters çevirin, kelime sırasını değiştirin, her kelimenin harflerini çevirin veya satır sırasını tersine çevirin.',
    keywords: [
      'metni tersine çevirme',
      'ters metin oluşturucu',
      'metin ters çevirme aracı',
      'kelime sırası ters çevirme',
      'ters yazı oluşturucu',
      'ayna metin oluşturucu',
      'satır ters çevirme aracı',
      'metin ters nasıl çevrilir',
      'ters yazma aracı',
    ],
    seo: {
      title: 'Metni Tersine Çevir: Kelime ve Satır Döndür | UtilityFlow',
      description:
        'Harfleri ters çevirin, kelime sırasını değiştirin, her kelimeyi ters yazın veya satır sırasını tersine çevirin. Unicode destekli, ücretsiz, hemen deneyin.',
      primaryKeyword: 'metni tersine çevirme',
      secondaryKeywords: ['ters metin oluşturucu', 'metin ters çevirme aracı', 'kelime sırası ters çevirme', 'ayna metin oluşturucu'],
      longTailKeywords: ['tüm metin ters nasıl çevrilir online', 'cümledeki kelime sırası ters nasıl çevrilir', 'her kelimenin harflerini ters çevirme aracı', 'satırları alttan üste ters çevirme'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Harf sırasını ters çevirin, her satırdaki kelimelerin sırasını değiştirin, her kelimenin harflerini çevirin veya çok satırlı listeyi alttan üste ters çevirin — Unicode ile tamamen güvenli.',
  },
  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-olusturucu',
    name: 'Lorem Ipsum Oluşturucu',
    shortDescription:
      'Tasarım için paragraf, cümle veya istediğiniz kelime sayısında örnek metin oluşturun; isteğe bağlı HTML <p> etiketleriyle.',
    keywords: [
      'lorem ipsum oluşturucu',
      'örnek metin oluşturucu',
      'lorem ipsum metni oluşturma',
      'sahte metin oluşturucu',
      'yer tutucu metin oluşturucu',
      'lorem ipsum türkçe',
      'dolgu metni oluşturucu',
      'lorem ipsum paragraf',
      'tasarım için örnek metin',
    ],
    seo: {
      title: 'Lorem Ipsum Oluşturucu: Örnek Metin Üret | UtilityFlow',
      description:
        'Paragraf, cümle veya istediğiniz kelime sayısında Lorem Ipsum örnek metni oluşturun. İsteğe bağlı HTML etiketleriyle tasarım örnekleri için tamamen ücretsizdir.',
      primaryKeyword: 'lorem ipsum oluşturucu',
      secondaryKeywords: ['örnek metin oluşturucu', 'lorem ipsum metni oluşturma', 'sahte metin oluşturucu', 'yer tutucu metin oluşturucu'],
      longTailKeywords: ['kelime sayısına göre lorem ipsum nasıl oluşturulur', 'html p etiketiyle lorem ipsum oluşturucu', 'tasarım örneği için sahte metin oluşturma', 'web tasarımı için dolgu metni oluşturucu'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Tel çerçeve, tipografi testi ve tasarım prototipi için tam paragraf, cümle veya kelime sayısında temiz örnek metin oluşturun — isteğe bağlı HTML paragraf etiketleriyle.',
  },
  'readability-checker': {
    slug: 'okunabilirlik-olcer',
    name: 'Okunabilirlik Ölçer',
    shortDescription:
      'Flesch Okuma Kolaylığı, Flesch-Kincaid Sınıf Düzeyi, Gunning Fog ve SMOG okunabilirlik puanlarını hesaplayın.',
    keywords: [
      'okunabilirlik ölçer',
      'okunabilirlik kontrolü online',
      'flesch okuma kolaylığı',
      'okunabilirlik puanı nasıl ölçülür',
      'flesch kincaid sınıf düzeyi',
      'gunning fog hesaplayıcı',
      'metin okunabilirlik kontrolü',
      'yazı ne kadar kolay anlaşılır',
      'okunabilirlik puanı hesaplayıcı',
    ],
    seo: {
      title: 'Okunabilirlik Ölçer: Flesch Skoru Hesapla | UtilityFlow',
      description:
        'Flesch Okuma Kolaylığı, Flesch-Kincaid, Gunning Fog ve SMOG puanlarıyla metninizin okunabilirliğini ölçün. Ücretsiz, gizli ve doğrudan tarayıcınızda çalışır.',
      primaryKeyword: 'okunabilirlik ölçer',
      secondaryKeywords: ['okunabilirlik kontrolü online', 'flesch okuma kolaylığı', 'flesch kincaid sınıf düzeyi', 'gunning fog hesaplayıcı'],
      longTailKeywords: ['flesch kincaid sınıf düzeyi nasıl hesaplanır online', 'gunning fog ve smog okunabilirlik puanı nasıl ölçülür', 'makalenin okunabilirliği nasıl iyileştirilir', 'iyi flesch okuma kolaylığı puanı kaç olmalı'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Makalenizin anlaşılmasının ne kadar kolay olduğunu dört bilinen formülle ölçün — Flesch Okuma Kolaylığı, Flesch-Kincaid Sınıf Düzeyi, Gunning Fog ve SMOG — zor kelimelerin tespitiyle birlikte.',
  },
  'word-frequency-counter': {
    slug: 'kelime-siklik-sayaci',
    name: 'Kelime Sıklık Sayacı',
    shortDescription:
      'Gereksiz kelime filtresi ve tek tıkla CSV dışa aktarma ile 1, 2 ve 3 kelimelik ifadelerin sıklığını sayın.',
    keywords: [
      'kelime sıklık sayacı',
      'kelime kaç kez geçti sayma',
      'kelime sıklığı ölçer',
      'anahtar kelime yoğunluğu kontrolü',
      'ifade sıklık sayacı',
      'kelime tekrar sayısı nasıl öğrenilir',
      'ngram sayacı',
      'metinde kelime sayma aracı',
      'anahtar kelime sıklığı kontrolü',
    ],
    seo: {
      title: 'Kelime Sıklık Sayacı: Kelime Yoğunluğu Ölç | UtilityFlow',
      description:
        'Herhangi bir metinde 1, 2 ve 3 kelimelik ifadelerin sıklığını sayın. Gereksiz kelime filtresi ve tek tıkla CSV indirme ile ücretsiz çalışır, hemen deneyin.',
      primaryKeyword: 'kelime sıklık sayacı',
      secondaryKeywords: ['kelime kaç kez geçti sayma', 'kelime sıklığı ölçer', 'anahtar kelime yoğunluğu kontrolü', 'ifade sıklık sayacı'],
      longTailKeywords: ['metinde anahtar kelime kaç kez geçti nasıl öğrenilir', '2 ve 3 kelimelik ifade sıklığı kontrolü', 'kelime sıklık tablosunu csv olarak indirme', 'içerikte anahtar kelime yoğunluğu nasıl kontrol edilir'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'İçerik taslağında anahtar kelime dengesini, çok kullanılan ifadeleri ve çok kelimeli n-gram kalıplarını kontrol edin — anında sıklık tablosu, gereksiz kelime filtresi ve indirilebilir CSV raporuyla.',
  },
  'text-to-slug': {
    slug: 'metinden-slug-olustur',
    name: 'Metinden Slug Oluştur',
    shortDescription:
      'Kod, dosya adı ve veritabanı anahtarı için her metni temiz URL slugına çevirin; aksan dönüştürme ve toplu mod ile.',
    keywords: [
      'metinden slug oluşturma',
      'slug nasıl oluşturulur',
      'url slug oluşturucu',
      'slugify metin online',
      'seo dostu url nasıl oluşturulur',
      'başlıktan slug oluşturma aracı',
      'slug oluşturma yöntemi',
      'temiz url slug oluşturucu',
      'slug oluşturucu online',
    ],
    seo: {
      title: 'Metinden Slug Oluştur: SEO Dostu URL Aracı | UtilityFlow',
      description:
        'Blog başlığını veya ürün adını temiz, SEO dostu URL slugına hemen çevirin. Aksan dönüştürme ve toplu mod ile tamamen ücretsiz; sonuçlar anında ve doğrudur.',
      primaryKeyword: 'metinden slug oluşturma',
      secondaryKeywords: ['slug nasıl oluşturulur', 'url slug oluşturucu', 'slugify metin online', 'seo dostu url nasıl oluşturulur'],
      longTailKeywords: ['blog başlığından seo dostu slug nasıl oluşturulur', 'birçok başlığı topluca sluga çevirme', 'aksanlı harfleri sluga nasıl dönüştürülür', 'tire veya alt çizgi slug ayırıcı nasıl seçilir'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Blog başlıklarını, ürün adlarını ve çok satırlı içerik listelerini temiz, ASCII, URL güvenli sluglara çevirin — aksanlar otomatik dönüşür; ayırıcı ve gereksiz kelime silme kontrolleriyle.',
  },
  'markdown-previewer': {
    slug: 'markdown-onizleme-araci',
    name: 'Markdown Önizleme Aracı',
    shortDescription:
      'Canlı bölünmüş düzenleyicide Markdown yazın, güvenli işlenmiş biçimi görün ve temiz HTML kopyalayın veya dışa aktarın.',
    keywords: [
      'markdown önizleme aracı',
      'markdown html çevirici',
      'markdown düzenleyici online',
      'markdown önizleme',
      'markdown canlı önizleme',
      'readme önizleme online',
      'markdown html nasıl oluşturulur',
      'markdown düzenleyici türkçe',
      'markdown html dışa aktarma',
    ],
    seo: {
      title: 'Markdown Önizleme: Canlı Önizleme ve HTML | UtilityFlow',
      description:
        'Markdown yazın ve canlı işlenmiş görünümü izleyin; derlenmiş HTML kodunu görün, temiz HTML belgesini kopyalayın veya indirin. Ücretsiz, hızlı ve gizlidir.',
      primaryKeyword: 'markdown önizleme aracı',
      secondaryKeywords: ['markdown html çevirici', 'markdown düzenleyici online', 'markdown önizleme', 'markdown canlı önizleme'],
      longTailKeywords: ['markdown canlı önizleme ile html dışa aktarma', 'readme markdown html nasıl çevrilir', 'yükleme yapmadan tarayıcıda markdown düzenleyici', 'github readme yayınlamadan önce önizleme'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'README, dokümantasyon ve biçimli notları duyarlı bir Markdown düzenleyicide yazın — canlı işlenmiş önizleme, güvenli HTML kaçışı, ham HTML denetimi ve tek tıkla HTML dışa aktarmayla.',
  },
  'line-prefix-suffix': {
    slug: 'satir-on-ek-son-ek-ekle',
    name: 'Satır Ön Ek ve Son Ek Ekle',
    shortDescription:
      'Liste, SQL koşulu ve kod için her satıra satır numarası, özel ön ek ve son ek ekleyin.',
    keywords: [
      'satır ön ek son ek ekleme',
      'satır numarası ekleme aracı',
      'her satıra ön ek ekleme',
      'satır numarası ekleme',
      'sql in koşulu biçimlendirici',
      'satırı tırnak içine alma',
      'her satırın başına sonuna metin ekleme',
      'satıra virgül ekleme aracı',
      'ön ek son ek oluşturucu',
    ],
    seo: {
      title: 'Satır Ön Ek ve Son Ek Ekle: Numara Ekle | UtilityFlow',
      description:
        'Her satıra satır numarası, özel ön ek ve son ek ekleyin. Liste, SQL sorgusu ve kod dizileri için anında ve ücretsiz; kayıt gerekmez, hemen şimdi deneyin.',
      primaryKeyword: 'satır ön ek son ek ekleme',
      secondaryKeywords: ['satır numarası ekleme aracı', 'her satıra ön ek ekleme', 'satır numarası ekleme', 'sql in koşulu biçimlendirici'],
      longTailKeywords: ['her satırı tek tırnak ve virgül içine nasıl alınır', 'sql için her satıra tırnak ekleme aracı', 'satır başına sonuna metin topluca nasıl eklenir', 'satır numarası sıfırdan başlayarak nasıl eklenir'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro:
      'Herhangi bir listenin her satırının başına sıralı satır numarası, madde işareti veya açış tırnağı ekleyin; sonuna virgül, noktalı virgül veya kapanış etiketi koyun — saniyeler içinde.',
  },
  'alphabets-to-word-generator': {
    slug: 'harflerden-kelime-olusturucu',
    name: 'Harflerden Kelime Oluşturucu',
    shortDescription: 'Harflerinizden anında kelimeler oluşturun: anagramlar, kısa ve uzun kelimeler ve olası kombinasyonlar — tarayıcıda ücretsiz.',
    keywords: [
      'harflerden kelime oluşturucu',
      'harflerden kelime yapma',
      'harften kelime',
      'anagram oluşturucu',
      'anagram çözücü',
      'harfleri çöz',
      'harflerle kelime bulma',
      'ingilizce kelime oluşturucu',
      'verilen harflerle kelime',
    ],
    seo: {
      title: 'Harflerden Kelime Oluşturucu – Kelime Oluştur | UtilityFlow',
      description: 'Ücretsiz harflerden kelime oluşturucumuzla harflerden anında kelimeler oluşturun. Kısa ve uzun kelimeler, anagramlar ve olası kombinasyonlar bulun.',
      primaryKeyword: 'harflerden kelime oluşturucu',
      secondaryKeywords: ['anagram oluşturucu', 'anagram çözücü', 'harfleri çöz', 'harflerle kelime bulma'],
      longTailKeywords: ['bu harflerle hangi kelimeleri yapabilirim', 'harflerden kelime online ücretsiz oluştur', 'harflerle en uzun kelimeyi bul', 'kelimeden anagram oluştur'],
      schemaApplicationCategory: 'UtilitiesApplication',
    },
    intro: 'Harflerinizi yazın ve onlarla oluşturabileceğiniz tüm kelimeleri keşfedin: tam anagramlar, kısa ve uzun kelimeler, uzunluk ve harf filtreleriyle — doğrudan tarayıcınızda.',
  },
};
