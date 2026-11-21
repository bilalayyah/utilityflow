import type { ToolLocaleOverride } from '../../types';

/**
 * Turkish overrides — Batch 2: Developer tools (14 tools).
 * Source: src/registry/batches/batch2/devToolsPart1.ts, Part2, Part3.
 * Original Turkish copy, SEO-optimized for Turkish search intent.
 * Slugs are Turkish words, unique, lowercase, hyphenated, and must not
 * collide with English slugs or reserved paths.
 */
export const TR_BATCH_2_OVERRIDES: Record<string, ToolLocaleOverride> = {
  'base64-encoder-decoder': {
    slug: 'base64-kodlayici-cozucu',
    name: 'Base64 Kodlayıcı / Çözücü',
    shortDescription:
      'Metni standart veya URL güvenli Base64 formatına kodlayın ve UTF-8 Base64 kodunu tarayıcınızda güvenle çözün.',
    keywords: [
      'base64 kodlayıcı çevrimiçi',
      'base64 çözücü ücretsiz',
      'base64 kodlama nasıl yapılır',
      'base64 çözme aracı',
      'metni base64 yapma',
      'base64 url güvenli nedir',
      'base64 türkçe araç',
      'utf8 base64 kodlayıcı',
      'base64 çevirici online',
    ],
    seo: {
      title: 'Base64 Kodlayıcı ve Çözücü Ücretsiz Online | UtilityFlow',
      description:
        'Metni Base64 formatına kodlayın veya Base64 kodunu okunabilir metne çevirin; URL güvenli seçenek ve UTF-8 desteğiyle tamamen tarayıcınızda ücretsiz çalışır.',
      primaryKeyword: 'base64 kodlayıcı çevrimiçi',
      secondaryKeywords: ['base64 çözücü ücretsiz', 'base64 kodlama nasıl yapılır', 'metni base64 yapma', 'base64 url güvenli nedir'],
      longTailKeywords: ['emoji içeren utf8 metni base64 formatına nasıl kodlanır', 'url güvenli base64 kodunu tarayıcıda çözme', 'ücretsiz base64 çevirici online araç', 'base64 kodunu okunabilir metne çevirme yöntemi'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Aksan işaretleri ve emoji içeren UTF-8 metinleri RFC 4648 standardına göre standart veya URL güvenli Base64 formatına dönüştürün ya da Base64 kodunu doğrulamayla birlikte anında sade metne çevirin.',
  },
  'url-encoder-decoder': {
    slug: 'url-kodlayici-cozucu',
    name: 'URL Kodlayıcı / Çözücü',
    shortDescription:
      'Sorgu değerini veya tam URL adresini yüzde kodlamayla kodlayın; ana bilgisayar, yol ve sorgu parametrelerini ayrıntılı görün.',
    keywords: [
      'url kodlayıcı çevrimiçi',
      'url çözücü ücretsiz',
      'url kodlama nasıl yapılır',
      'yüzde kodlama nedir',
      'url ayrıştırıcı online',
      'encodeuricomponent aracı',
      'url çözme aracı türkçe',
      'sorgu dizesi kodlama',
      'url özel karakter kodlama',
    ],
    seo: {
      title: 'URL Kodlayıcı ve Çözücü: Adresi Dönüştürün | UtilityFlow',
      description:
        'encodeURIComponent ve encodeURI modlarıyla URL kodlayın veya çözün; protokol, ana bilgisayar, yol ve sorgu parametrelerinin tam dökümünü anında görün, ücretsiz.',
      primaryKeyword: 'url kodlayıcı çevrimiçi',
      secondaryKeywords: ['url çözücü ücretsiz', 'url kodlama nasıl yapılır', 'yüzde kodlama nedir', 'url ayrıştırıcı online'],
      longTailKeywords: ['encodeuri ile encodeuricomponent arasındaki fark nedir', 'url sorgu parametresini çözme nasıl yapılır', 'url için özel karakter yüzde kodlama aracı', 've işaretini bozmadan sorgu değeri kodlama'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Sorgu parametresinin değerini veya tam URL adresini güvenle kodlayın, yüzde kodlamalı dizeleri (%20, %3A, +) çözün ve her sorgu parametresinin canlı dökümünü tabloda görün.',
  },
  'uuid-generator': {
    slug: 'uuid-olusturucu',
    name: 'UUID Oluşturucu (v4 ve v7)',
    shortDescription:
      'RFC 9562 standardına göre kriptografik olarak rastgele UUID v4 ve zamana sıralı UUID v7 kodlarını toplu olarak oluşturun.',
    keywords: [
      'uuid oluşturucu çevrimiçi',
      'uuid nasıl oluşturulur',
      'guid oluşturucu ücretsiz',
      'uuid v4 oluşturucu',
      'uuid v7 nedir',
      'rastgele uuid oluşturma',
      'toplu uuid oluşturucu',
      'online uuid oluşturma aracı',
      'uuid oluşturucu türkçe',
    ],
    seo: {
      title: 'UUID Oluşturucu v4 ve v7: Ücretsiz Online | UtilityFlow',
      description:
        'RFC 9562 standardına göre 100 adede kadar kriptografik UUID v4 veya zamana sıralı UUID v7 oluşturun; büyük harf, tire ve küme parantezi seçenekleriyle ücretsiz.',
      primaryKeyword: 'uuid oluşturucu çevrimiçi',
      secondaryKeywords: ['uuid nasıl oluşturulur', 'guid oluşturucu ücretsiz', 'uuid v4 oluşturucu', 'uuid v7 nedir'],
      longTailKeywords: ['aynı anda birden fazla uuid v4 ve v7 oluşturma', 'zamana sıralı uuid v7 rfc 9562 nedir', 'tiresiz büyük harfli uuid oluşturucu', 'aynı anda 100 uuid oluşturan ücretsiz araç'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tek tek veya toplu olarak UUID oluşturun — kriptografik olarak rastgele UUID v4 ve zaman damgası sıralı UUID v7, doğrudan Web Crypto API ile ve biçim seçenekleriyle.',
  },
  'regex-tester': {
    slug: 'regex-test-araci',
    name: 'Regex Test Aracı',
    shortDescription:
      'Canlı eşleşme vurgusu, yakalama grupları, bayraklar ve değiştirme çıktısıyla JavaScript düzenli ifadelerini test edin.',
    keywords: [
      'regex test aracı çevrimiçi',
      'regex nasıl test edilir',
      'düzenli ifade test aracı',
      'javascript regex test',
      'regex eşleşme denetleyici',
      'regex hata ayıklama',
      'regex test aracı türkçe',
      'regex deseni test etme',
      'regex yakalama grubu nedir',
    ],
    seo: {
      title: 'Regex Test Aracı: JavaScript Regex Denetleyin | UtilityFlow',
      description:
        'g, i, m ve s bayraklarıyla düzenli ifadeleri test edin; eşleşme vurgusu, yakalama grubu denetimi ve değiştirme önizlemesiyle ücretsiz kullanın, sonuç alın.',
      primaryKeyword: 'regex test aracı çevrimiçi',
      secondaryKeywords: ['regex nasıl test edilir', 'düzenli ifade test aracı', 'javascript regex test', 'regex eşleşme denetleyici'],
      longTailKeywords: ['javascript regex yakalama grubunu çevrimiçi test etme', 'canlı regex eşleşme vurgusu yapan araç', 'yakalama gruplu regex değiştirme önizlemesi', 'regex ifadelerini canlı vurguyla hata ayıklama'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JavaScript düzenli ifadelerini etkileşimli olarak hata ayıklayın — canlı eşleşme vurgusu, eşleşme dizin konumları, numaralı yakalama grupları, bayrak anahtarları ve değiştirme önizlemesiyle.',
  },
  'jwt-decoder': {
    slug: 'jwt-cozucu',
    name: 'JWT Çözücü',
    shortDescription:
      'JSON Web Token kodunun başlığını, yük taleplerini ve bitiş zaman damgasını tarayıcınızda güvenle çözün.',
    keywords: [
      'jwt çözücü çevrimiçi',
      'jwt çözme nasıl yapılır',
      'json web token çözme',
      'jwt token kontrol etme',
      'jwt bitiş tarihi kontrolü',
      'jwt yük görüntüleyici',
      'jwt token nasıl görülür',
      'jwt talepleri nedir',
      'jwt token süresi kontrolü',
    ],
    seo: {
      title: 'JWT Çözücü: Token ve Bitiş Tarihini Denetleyin | UtilityFlow',
      description:
        'JWT kodunun başlık ve yük taleplerini tarayıcınızda çözün; iat, nbf ve exp değerlerini okunabilir UTC tarihi olarak görün, ücretsiz ve gizlilik dostudur.',
      primaryKeyword: 'jwt çözücü çevrimiçi',
      secondaryKeywords: ['jwt çözme nasıl yapılır', 'json web token çözme', 'jwt token kontrol etme', 'jwt bitiş tarihi kontrolü'],
      longTailKeywords: ['jwt tokeni sunucuya göndermeden yerel olarak çözme', 'jwt exp bitiş tarihini çevrimiçi kontrol etme', 'jwt başlık ve taleplerini base64url ile görme', 'tarayıcıda jwt yük taleplerini okuma'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'JSON Web Token (JWT) kodunu tarayıcınızın yerel belleğinde güvenle inceleyin — biçimlendirilmiş Header ve Payload JSON nesnelerini görün ve `iat`, `nbf` ile `exp` değerlerinin okunabilir bitiş durumunu öğrenin.',
  },
  'hash-generator': {
    slug: 'hash-olusturucu-sha256',
    name: 'Hash Oluşturucu (SHA-1 / SHA-256 / SHA-512)',
    shortDescription:
      'Web Crypto ile metin veya yerel dosya için SHA-1, SHA-256, SHA-384 ve SHA-512 kriptografik hash kodları oluşturun.',
    keywords: [
      'hash oluşturucu çevrimiçi',
      'sha256 oluşturucu ücretsiz',
      'sha512 hash nasıl oluşturulur',
      'dosya sağlama toplamı alma',
      'sha1 hash oluşturucu',
      'sha384 hash çevrimiçi',
      'sağlama toplamı hesaplayıcı',
      'dosya sağlama toplamı doğrulama',
      'güvenli hash oluşturucu',
    ],
    seo: {
      title: 'Hash Oluşturucu SHA-256 ve SHA-512 Online | UtilityFlow',
      description:
        'Metin ve yerel dosya için SHA-1, SHA-256, SHA-384 ve SHA-512 hash kodlarını onaltılık veya Base64 olarak oluşturun; doğrudan tarayıcıda, ücretsiz ve güvenlidir.',
      primaryKeyword: 'hash oluşturucu çevrimiçi',
      secondaryKeywords: ['sha256 oluşturucu ücretsiz', 'dosya sağlama toplamı alma', 'sha512 hash nasıl oluşturulur', 'sağlama toplamı hesaplayıcı'],
      longTailKeywords: ['yerel dosyanın sha256 sağlama toplamını tarayıcıda alma', 'sha256 hash onaltılık ve base64 olarak oluşturma', 'web crypto api ile hash oluşturucu çevrimiçi', 'indirilen dosyanın sağlama toplamını doğrulama'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tarayıcının yerleşik Web Crypto API’si (`crypto.subtle.digest`) ile SHA-1, SHA-256, SHA-384 ve SHA-512 hash kodlarını tek seferde çıkarın — UTF-8 metin ve yerel dosya sağlama toplamları için.',
  },
  'html-entity-encoder': {
    slug: 'html-entity-kodlayici',
    name: 'HTML Entity Kodlayıcı ve Çözücü',
    shortDescription:
      'Ayrılmış HTML karakterlerini (<, >, &, tırnak işaretleri) ve ASCII dışı sembolleri kaçış karakterine çevirin veya HTML entity kodlarını çözün.',
    keywords: [
      'html entity kodlayıcı çevrimiçi',
      'html kaçış karakteri nasıl yapılır',
      'html entity çözücü türkçe',
      'html özel karakter kodlama',
      'html kaçış aracı online',
      'html entity dönüştürücü',
      'html çözme nasıl yapılır',
      'html tırnak kaçış karakteri',
      'html entity kodlayıcı çözücü',
    ],
    seo: {
      title: 'HTML Entity Kodlayıcı Online: Kaçış Yapın | UtilityFlow',
      description:
        'Ayrılmış HTML karakterlerini ve ASCII dışı sembolleri entity koduna çevirin ya da adlı ve numaralı entity kodlarını sade metne çözün; ücretsizdir, deneyin.',
      primaryKeyword: 'html entity kodlayıcı çevrimiçi',
      secondaryKeywords: ['html kaçış karakteri nasıl yapılır', 'html entity çözücü türkçe', 'html özel karakter kodlama', 'html kaçış aracı online'],
      longTailKeywords: ['kod parçacığı için html etiketlerini kaçış yapma', 'adlı ve numaralı html entity kodlarını çözme', 'özel karakteri html entity koduna çevirme', 'html tırnak ve ve işaretini kaçış yapma'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Web sayfasına kod parçacığı eklerken `<`, `>`, `&`, tırnak işaretleri ve uluslararası Unicode sembollerini HTML entity koduna güvenle çevirin ya da kaçış yapılmış HTML dizesini okunabilir metne geri çözün.',
  },
  'json-csv-converter': {
    slug: 'json-csv-donusturucu',
    name: 'JSON - CSV Dönüştürücü',
    shortDescription:
      'JSON dizisini RFC 4180 CSV elektronik tablosuna dönüştürün ve tırnaklı CSV dosyasını temiz JSON biçimine geri ayrıştırın.',
    keywords: [
      'json csv dönüştürücü çevrimiçi',
      'csv json dönüştürücü türkçe',
      'json csv dönüştürücü ücretsiz',
      'json csv nasıl dönüştürülür',
      'csv json nasıl dönüştürülür',
      'json csv online ücretsiz',
      'json dizisi csv yapma',
      'csv json dönüştürme nasıl yapılır',
      'json tsv dönüştürücü online',
    ],
    seo: {
      title: 'JSON - CSV Dönüştürücü: Ücretsiz Online Araç | UtilityFlow',
      description:
        'JSON dizisini nesneleri düzleştirerek CSV tablosuna dönüştürün ya da CSV ve TSV dosyalarını yapılandırılmış JSON biçiminde ayrıştırın; ücretsiz ve yereldir.',
      primaryKeyword: 'json csv dönüştürücü çevrimiçi',
      secondaryKeywords: ['csv json dönüştürücü türkçe', 'json csv nasıl dönüştürülür', 'csv json nasıl dönüştürülür', 'json csv online ücretsiz'],
      longTailKeywords: ['iç içe json nesnesini csv sütunlarına çevirme', 'virgüllü tırnaklı csv dosyasını json dizisine çevirme', 'tarayıcıda json csv indirme aracı ücretsiz', 'json dizisini csv tablosuna ücretsiz dönüştürme'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'API’den gelen JSON dizisini temiz bir CSV elektronik tablosuna dönüştürün — iç içe nesnelerin anahtarları otomatik olarak düzleşir — ya da tırnaklı virgüllü CSV ve TSV dosyalarını biçimlendirilmiş JSON biçimine geri ayrıştırın.',
  },
  'unix-timestamp-converter': {
    slug: 'unix-zaman-damgasi-donusturucu',
    name: 'Unix Zaman Damgası Dönüştürücü',
    shortDescription:
      'Unix epoch saniye veya milisaniyeyi ISO 8601, UTC ve yerel tarihe dönüştürün — ve tersini de yapın.',
    keywords: [
      'unix zaman damgası dönüştürücü',
      'epoch tarih dönüştürücü türkçe',
      'unix zamanı nedir',
      'epoch zamanı nasıl alınır',
      'zaman damgası tarih çevrimiçi',
      'tarih unix zaman damgası yapma',
      'güncel unix zamanı nedir',
      'epoch milisaniye dönüştürücü',
      'unix zaman damgası türkçe',
    ],
    seo: {
      title: 'Unix Zaman Damgası Dönüştürücü Online | UtilityFlow',
      description:
        'Unix zaman damgasını saniye veya milisaniye olarak ISO 8601, UTC, RFC 2822 ve yerel saate dönüştürün ya da herhangi bir tarihten Unix zamanı alın; ücretsizdir.',
      primaryKeyword: 'unix zaman damgası dönüştürücü',
      secondaryKeywords: ['epoch tarih dönüştürücü türkçe', 'unix zamanı nedir', 'zaman damgası tarih çevrimiçi', 'tarih unix zaman damgası yapma'],
      longTailKeywords: ['epoch milisaniyeyi iso 8601 tarihine çevirme', 'güncel unix zamanını canlı saniye olarak görme', 'yerel tarih saati epoch unix zamanına çevirme', 'unix zaman damgasını utc tarihine ücretsiz çevirme'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Unix epoch tam sayısını (saniye veya milisaniye) ISO 8601, UTC ve yerel saat dilimi dizelerine dönüştürün — göreli fark bilgisiyle — ya da herhangi bir takvim tarihini tekrar epoch zaman damgasına çevirin.',
  },
  'sql-formatter': {
    slug: 'sql-duzenleyici',
    name: 'SQL Düzenleyici',
    shortDescription:
      'SQL sorgusunu biçimlendirin, girintileyin ve standartlaştırın — anahtar sözcükleri büyük/küçük harfe çevirin veya sorguyu tek satıra sıkıştırın.',
    keywords: [
      'sql düzenleyici çevrimiçi',
      'sql sorgu biçimlendirme nasıl yapılır',
      'sql güzelleştirici türkçe',
      'sql sıkıştırıcı online',
      'sql biçimlendirme aracı',
      'sql sorgusunu güzelleştirme',
      'sql girinti nasıl yapılır',
      'sql düzenleyici türkçe',
      'online sql düzenleyici ücretsiz',
    ],
    seo: {
      title: 'SQL Düzenleyici: Sorguyu Güzelleştirin Online | UtilityFlow',
      description:
        'SQL sorgusunu satır sonları, büyük/küçük harfli anahtar sözcükler ve 2 veya 4 boşluklu girintiyle biçimlendirin ya da tek satıra sıkıştırın; ücretsizdir.',
      primaryKeyword: 'sql düzenleyici çevrimiçi',
      secondaryKeywords: ['sql sorgu biçimlendirme nasıl yapılır', 'sql güzelleştirici türkçe', 'sql sıkıştırıcı online', 'sql biçimlendirme aracı'],
      longTailKeywords: ['select join group by içeren sql sorgusunu çevrimiçi düzenleme', 'sql anahtar sözcüğünü hatasız büyük harfe çevirme', 'dize değişmezlerini koruyarak sql sorgusu sıkıştırma', '2 veya 4 boşluklu girintiyle sql sorgusu düzenleme'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Tek satıra sıkışmış SQL sorgusunu okunabilir, yapılandırılmış bir ifadeye dönüştürün — `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY` ve `ORDER BY` bölümlerinin temiz hizalanmasıyla, tırnaklı dizeleri ve yorumları koruyarak.',
  },
  'css-minifier': {
    slug: 'css-kucultucu',
    name: 'CSS Küçültücü ve Güzelleştirici',
    shortDescription:
      'Paket boyutunu azaltmak için CSS stil sayfasını küçültün veya sıkıştırılmış CSS kurallarını temiz girintili biçime açın.',
    keywords: [
      'css küçültücü çevrimiçi',
      'css güzelleştirici türkçe',
      'css sıkıştırma nasıl yapılır',
      'css biçimlendirme aracı',
      'css küçültme nasıl yapılır',
      'css dosyasını küçültme',
      'css küçültücü online ücretsiz',
      'css açma nasıl yapılır',
      'css dosya boyutu azaltma',
    ],
    seo: {
      title: 'CSS Küçültücü ve Güzelleştirici Ücretsiz | UtilityFlow',
      description:
        'Yorum ve gereksiz boşlukları kaldırarak CSS kodunu küçültün; bayt tasarrufu istatistikleriyle ya da sıkıştırılmış sayfayı temiz kurallara açın, ücretsizdir.',
      primaryKeyword: 'css küçültücü çevrimiçi',
      secondaryKeywords: ['css güzelleştirici türkçe', 'css sıkıştırma nasıl yapılır', 'css biçimlendirme aracı', 'css küçültme nasıl yapılır'],
      longTailKeywords: ['tırnaklı dize ve medya sorgusunu koruyarak css küçültme', 'sıkıştırılmış css sayfasını çevrimiçi açma', 'tarayıcıda css sıkıştırma yüzdesi hesaplama', 'yayına almadan önce css dosya boyutunu azaltma'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Yorumları, gereksiz boşlukları ve kapanış küme parantezinden önceki son noktalı virgülü kaldırarak CSS stil sayfasını sıkıştırın ya da tek satırlık küçültülmüş CSS kodunu yeniden girintili, okunabilir bloklara açın.',
  },
  'js-formatter': {
    slug: 'javascript-duzenleyici',
    name: 'JavaScript / TypeScript Küçültücü ve Düzenleyici',
    shortDescription:
      'Yorum ve gereksiz boşlukları kaldırarak JavaScript parçacığını küçültün veya sıkıştırılmış kod bloklarını güzelleştirin.',
    keywords: [
      'javascript küçültücü çevrimiçi',
      'js düzenleyici türkçe',
      'js güzelleştirici online',
      'javascript sıkıştırma nasıl yapılır',
      'js biçimlendirme aracı',
      'javascript küçültme nasıl yapılır',
      'js kod güzelleştirme',
      'typescript küçültücü çevrimiçi',
      'js kod düzenleyici ücretsiz',
    ],
    seo: {
      title: 'JavaScript Küçültücü ve Düzenleyici Online | UtilityFlow',
      description:
        'Yorum ve gereksiz boşlukları kaldırarak JavaScript ve TypeScript kodunu küçültün ya da sıkıştırılmış kodu 2 veya 4 boşluklu girintiyle açın; ücretsizdir.',
      primaryKeyword: 'javascript küçültücü çevrimiçi',
      secondaryKeywords: ['js düzenleyici türkçe', 'js güzelleştirici online', 'javascript sıkıştırma nasıl yapılır', 'js biçimlendirme aracı'],
      longTailKeywords: ['dize ve şablon değişmezlerini koruyarak js küçültme', 'sıkıştırılmış javascript kodunu girintiyle açma', 'tarayıcıda js düzenleyici ve küçültücü aracı', '2 veya 4 boşluklu girintiyle javascript kodu güzelleştirme'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Yer imi uygulamaları ve satır içi betikler için JavaScript parçacıklarını sıkıştırın — yorumları ve gereksiz boşlukları kaldırarak, dize değişmezlerini koruyarak — ya da sıkıştırılmış kodu yeniden girintileyin.',
  },
  'cron-expression-parser': {
    slug: 'cron-ifadesi-cozucu',
    name: 'Cron İfadesi Çözücü ve Zamanlama Önizlemesi',
    shortDescription:
      '5 alanlı cron ifadesini sade dille anlayın, hazır şablonları görün ve sonraki 8 çalıştırma zamanının önizlemesini alın.',
    keywords: [
      'cron ifadesi çözücü çevrimiçi',
      'crontab oluşturucu türkçe',
      'cron zamanlama test aracı',
      'cron ifadesi nasıl anlaşılır',
      'cron işi nedir türkçe',
      'cron ifadesi test aracı',
      'crontab guru alternatifi',
      'cron zamanlama önizleme aracı',
      'cron ifadesi türkçe',
    ],
    seo: {
      title: 'Cron İfadesi Çözücü: Zamanlamayı Anlayın | UtilityFlow',
      description:
        '5 alanlı cron ifadesini sade dille anlayın, her alanı denetleyin, hazır şablonları deneyin ve sonraki 8 çalıştırma zamanını görün; ücretsiz ve hemen çalışır.',
      primaryKeyword: 'cron ifadesi çözücü çevrimiçi',
      secondaryKeywords: ['crontab oluşturucu türkçe', 'cron zamanlama test aracı', 'cron ifadesi nasıl anlaşılır', 'cron işi nedir türkçe'],
      longTailKeywords: ['5 alanlı cron ifadesini sade dille anlama', 'cron ifadesinin sonraki 8 çalıştırma zamanını bulma', 'hafta günü ve adımlı cron ifadesini çevrimiçi test etme', 'her hafta içi sabah 9 cron ifadesi örneği'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Unix crontab sisteminin 5 alanlı ifadesini (`dakika saat ayın-günü ay haftanın-günü`) temiz, okunabilir bir özet olarak çözün, alan aralıklarını denetleyin ve sonraki 8 zamanlanmış çalıştırma zamanını görün.',
  },
  'color-converter': {
    slug: 'renk-donusturucu-hex-rgb',
    name: 'Renk Dönüştürücü (HEX / RGB / HSL ve WCAG Kontrast)',
    shortDescription:
      'Canlı renk seçici ve WCAG 2.1 AA/AAA kontrast denetimiyle renkleri HEX, RGB ve HSL arasında dönüştürün.',
    keywords: [
      'renk dönüştürücü çevrimiçi',
      'hex rgb dönüştürücü türkçe',
      'rgb hex nasıl yapılır',
      'wcag kontrast denetleyici',
      'hex hsl dönüştürücü',
      'rgb hsl nasıl dönüştürülür',
      'renk seçici çevrimiçi',
      'hex renk dönüştürücü araç',
      'hsl rgb dönüştürücü',
    ],
    seo: {
      title: 'Renk Dönüştürücü HEX, RGB, HSL Ücretsiz | UtilityFlow',
      description:
        'Renkleri HEX, RGB ve HSL arasında anında dönüştürün; metin ve arka plan kontrastını WCAG 2.1 AA ve AAA ölçütlerine göre denetleyin, ücretsiz ve tarayıcıdadır.',
      primaryKeyword: 'renk dönüştürücü çevrimiçi',
      secondaryKeywords: ['hex rgb dönüştürücü türkçe', 'rgb hex nasıl yapılır', 'wcag kontrast denetleyici', 'hex hsl dönüştürücü'],
      longTailKeywords: ['hex rengi css rgb ve hsl değerine çevirme', 'metin kontrastını wcag 2.1 aa ve aaa ile denetleme', 'geliştiriciler için hex rgb hsl renk aracı', 'hex kodunu css değişkeni için hsl biçimine çevirme'],
      schemaApplicationCategory: 'DeveloperApplication',
    },
    intro:
      'Canlı renk örneği ve WCAG 2.1 kontrast oranı denetleyicisiyle CSS HEX, RGB ve HSL gösterimleri arasında renkleri kolayca dönüştürün — erişilebilir arayüz tasarımı için.',
  },
};
