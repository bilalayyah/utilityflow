// Detail content for TR tools — Turkish (tr) locale.
// Written directly in Turkish; mirrors src/locales/hi/details/batch1.ts.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'word-counter': {
    instructions: [
      {
        title: 'Taslağınızı yapıştırın veya yazın',
        description:
          'Metni doğrudan düzenleyiciye yazın ya da sayımların nasıl değiştiğini görmek için Örnek yükle düğmesine tıklayın.',
      },
      {
        title: 'Canlı yapı toplamlarını inceleyin',
        description:
          'Özet şeridinde kelime, boşluklu ve boşluksuz karakter, cümle, paragraf ve tahmini okuma süresini görün.',
      },
      {
        title: 'Okuma ve konuşma süresini kontrol edin',
        description:
          'Dakikada 225 kelimelik okuma hızı ve dakikada 130 kelimelik konuşma hızına göre tahmini süreleri görün; makale, konuşma ve video senaryolarınızı yayımlamadan önce zamanlamayı ayarlayın.',
      },
      {
        title: 'Tekrar eden kelimeleri inceleyin',
        description:
          'En sık geçen kelimeler paneline bakarak istemeden tekrarladığınız kelimeleri yakalayın ve taslağı son hâle getirmeden önce dilinizi sadeleştirin.',
      },
      {
        title: 'Metninizi kopyalayın veya indirin',
        description:
          'Sayılardan memnun kalınca kopyala düğmesiyle metni alın ya da .txt dosyası olarak yedeğini indirin.',
      },
      {
        title: 'Yanlış görünen sayımı düzeltin',
        description:
          'Bir sayı hatalı görünüyorsa yapıştırılmış gizli karakterleri veya fazla boş satırları kontrol edin; fazladan satır sonlarını silmek genellikle paragraf ve cümle sayılarını düzeltir.',
      },
    ],
    examples: [
      {
        title: 'Blog girişinin uzunluğunu kontrol etme',
        input: 'Fast static websites reduce server latency. Readers stay engaged when copy is concise.',
        output: '13 kelime · 87 karakter · 2 cümle · 4 sn okuma süresi',
        explanation:
          'Yayımlamadan önce başlık ve giriş paragrafının temposunu kontrol etmek için idealdir.',
      },
      {
        title: 'Makale kelime sınırını doğrulama',
        input: 'Paragraf 1 (240 kelime)\n\nParagraf 2 (255 kelime)',
        output: '495 kelime · 2 paragraf · 2 dk 12 sn okuma süresi',
        explanation: '500 kelimelik hedef için sınırın içinde olduğunuzu doğrular.',
      },
    ],
    benefits: [
      'Her tuş vuruşunda tarayıcı belleğinde anında güncellenir',
      'Okuma süresi (225 k/dk) ve konuşma süresi (130 k/dk) hesaplar',
      'En sık tekrarlanan altı kelimeyi göstererek tekrarları yakalamanıza yardımcı olur',
      'Düz metin yedeklerini doğrudan .txt dosyası olarak dışa aktarır',
    ],
    useCases: [
      'Akademik makaleler ve burs başvuruları için katı kelime sınırlarını tutturma',
      'Konferans konuşmaları, video senaryoları ve podcast girişlerinin süresini ayarlama',
      'Makale taslakları ve açılış sayfalarının kısa yapısını denetleme',
      'Bülten metinlerinin uzunluğunu zamanlamadan önce kontrol etme',
    ],
    faqs: [
      {
        question: 'Kelime Sayacı okuma ve konuşma süresini nasıl hesaplıyor?',
        answer:
          'Okuma süresi, ortalama bir yetişkinin dakikada 225 kelimelik sessiz okuma hızına; konuşma süresi ise dakikada 130 kelimelik sunum hızına göre hesaplanır.',
      },
      {
        question: 'Tireli kelimeler bir kelime mi yoksa iki kelime mi sayılıyor?',
        answer:
          'Boşlukla ayrılan kelime birimleri tek kelime sayılır; bu, çoğu masaüstü kelime işlemcinin davranışıyla aynıdır.',
      },
      {
        question: 'Yazdıklarım kaydediliyor veya bir yere gönderiliyor mu?',
        answer:
          'Hayır. Tüm sayımlar tarayıcı sekmenizin içinde yerel olarak yapılır ve metniniz sayfayı kapatınca kaybolur.',
      },
      {
        question: 'Kelime Sayacı ile Karakter Sayacı arasındaki fark nedir?',
        answer:
          'Kelime Sayacı kelime toplamına, paragraflara, konuşma süresine ve en sık tekrarlanan kelimelere odaklanır; Karakter Sayacı ise UTF-8 bayt boyutunu ve sosyal medya ile SEO karakter sınırlarını gösterir.',
      },
      {
        question: 'Kelime Sayacı ücretsiz mi?',
        answer:
          'Evet. Kelime Sayacı tamamen ücretsizdir; kayıt gerekmez, kelime sınırı yoktur ve hesap açmanız gerekmez.',
      },
      {
        question: 'Kelime Sayacı çevrimdışı çalışır mı?',
        answer:
          'Evet. Sayfa yüklendikten sonra tüm sayımlar tarayıcınızda yerel olarak çalışır, bu yüzden internet olmadan da kullanabilirsiniz.',
      },
      {
        question: 'Cümleler nasıl sayılıyor?',
        answer:
          'Cümleler nokta, ünlem ve soru işareti gibi cümle sonu işaretlerinde sayılır; bu yüzden Dr. gibi kısaltmalar bir cümle fazla sayılmasına yol açabilir.',
      },
      {
        question: 'Kelime Sayacında kelime olarak ne sayılıyor?',
        answer:
          'Boşlukla ayrılan her karakter dizisi bir kelime sayılır; sayılar, tireli kelimeler ve kesme işaretli kelimeler de buna dahildir.',
      },
      {
        question: 'PDF veya Word belgesindeki kelimeleri sayabilir miyim?',
        answer:
          'Doğrudan değil. Belgenizdeki metni kopyalayıp Kelime Sayacına yapıştırın; sayımlar anında görünür.',
      },
      {
        question: 'Kelime Sayacı boşluklu karakterleri de sayıyor mu?',
        answer:
          'Evet. Karakterleri hem boşluklu hem boşluksuz olarak gösterir, böylece iki türlü sınırı da kontrol edebilirsiniz.',
      },
      {
        question: 'Okuma süresi tahmini ne kadar doğru?',
        answer:
          'Bu tahmin, dakikada 225 kelimelik ortalama hıza dayanır; her okuyucu daha hızlı veya daha yavaş olabilir.',
      },
      {
        question: 'Konuşma süresi tahmini neye dayanıyor?',
        answer:
          'Konuşma süresi, dakikada 130 kelimelik sohbet tarzı sunum hızına dayanır; konuşmalar, video senaryoları ve podcast girişleri için uygundur.',
      },
      {
        question: 'Kelime Sayacı başka dillerde de çalışır mı?',
        answer:
          'Evet. Boşlukla ayrılan kelimeleri her dilde sayar; ancak okuma süresi tahmini İngilizce metne göre ayarlanmıştır.',
      },
      {
        question: 'Makale veya ödevimin kelime sınırını kontrol edebilir miyim?',
        answer:
          'Evet. Makalenizi yapıştırıp canlı kelime toplamını hedefinizle karşılaştırın; özet şeridi düzenlerken tam sayıyı göstermeye devam eder.',
      },
      {
        question: 'Kelime Sayacı sayıları da kelime sayıyor mu?',
        answer:
          'Evet. Boşlukla ayrılan tek başına sayılar da kelime sayılır; çoğu masaüstü kelime işlemci de böyle yapar.',
      },
      {
        question: 'Sayımım Microsoft Word veya Google Dokümanlar ile neden farklı?',
        answer:
          'Farklı araçlar tireli kelimeleri, uzun tireleri ve sayıları biraz farklı böler; bu yüzden birkaç kelimelik küçük farklar normaldir.',
      },
      {
        question: 'En sık geçen kelimeler ne işe yarıyor?',
        answer:
          'Panel, en çok tekrarladığınız altı kelimeyi listeler; böylece yayımlamadan önce fazla kullanılan kelimeleri fark edip kelime dağarcığınızı çeşitlendirebilirsiniz.',
      },
      {
        question: 'Sadece bir paragrafın kelimelerini sayabilir miyim?',
        answer:
          'Evet. Yalnızca o paragrafı düzenleyiciye yapıştırın; canlı toplamlar sadece girdiğiniz metni yansıtır.',
      },
      {
        question: 'Kelime Sayacını sosyal medya açıklamaları için kullanabilir miyim?',
        answer:
          'Evet. Açıklamanızı yapıştırıp kelime toplamını ve okuma süresini kontrol edin; karakter sınırını da denetlemek istiyorsanız Karakter Sayacını kullanın.',
      },
      {
        question: 'Kelime Sayacını telefonumda kullanabilir miyim?',
        answer:
          'Evet. Aynı canlı sayım, okuma süresi ve kopyalama seçenekleriyle her modern mobil tarayıcıda çalışır.',
      },
    ],
  },
  'character-counter': {
    instructions: [
      {
        title: 'Metninizi yazın veya yapıştırın',
        description:
          'Meta başlığı, sosyal medya açıklaması, SMS uyarısı veya form alanı metnini kutuya girin.',
      },
      {
        title: 'Karakter ve bayt ölçümlerini inceleyin',
        description:
          'Boşluklu toplam karakter, boşluksuz karakter, harf, rakam ve UTF-8 bayt ağırlığını karşılaştırın.',
      },
      {
        title: 'Platform sınırlarını doğrulayın',
        description:
          'Canlı ilerleme göstergelerine bakarak metninizin SEO, SMS, X, Instagram veya LinkedIn sınırlarına uyduğunu onaylayın.',
      },
      {
        title: 'Teknik sınırlar için bayt boyutunu kullanın',
        description:
          'Veritabanı sütunları, API yükleri veya dosya alanları gibi karakterle değil baytla sınırlanan yerleri denetlerken UTF-8 bayt toplamına bakın.',
      },
      {
        title: 'Boşluklu ve boşluksuz sayımları karşılaştırın',
        description:
          'Bir form veya platform yalnızca boşluksuz karakterleri sayıyorsa iki toplam arasında geçiş yaparak kontrol edin.',
      },
      {
        title: 'Yanlış görünen sayımı düzeltin',
        description:
          'Sayı hatalı görünüyorsa sondaki boşluklar veya yapıştırılmış satır sonları gibi görünmez karakterleri kontrol edin; bunlar boşluklu toplama dahildir.',
      },
    ],
    examples: [
      {
        title: 'Meta başlığı kontrolü',
        input: 'Word Counter – Count Words, Sentences & Reading Time',
        output: '51 / 60 karakter (9 kaldı)',
        explanation:
          'Arama motorlarının başlıkları gösterdiği 60 karakterlik pencereye rahatça sığar.',
      },
      {
        title: 'Çok baytlı emoji bayt kontrolü',
        input: 'Launch day 🚀',
        output: '13 UTF-16 kod birimi · 15 UTF-8 bayt',
        explanation: 'ASCII dışı karakterler varken bayt boyutundaki farkı tam olarak gösterir.',
      },
    ],
    benefits: [
      'Boşluklu ve boşluksuz karakterleri birlikte sayar',
      'Veritabanı sütunu ve API yükü sınırları için tam UTF-8 bayt uzunluğu verir',
      'SEO etiketleri, SMS, X, Instagram ve LinkedIn için görsel sınır göstergeleri sunar',
      'Sunucuya yükleme veya karakter kaydı yoktur',
    ],
    useCases: [
      'Kesilme olmadan arama motoru başlık etiketleri ve meta açıklamaları yazma',
      '160 karakterlik tek segment sınırına uyan SMS bildirimleri hazırlama',
      'Veritabanı VARCHAR alan uzunluğunu UTF-8 bayt cinsinden doğrulama',
      'Sosyal medya açıklamalarını katlanma noktasından önce kısa tutma',
    ],
    faqs: [
      {
        question: 'UTF-8 bayt sayısı bazen karakter sayısından neden yüksek olur?',
        answer:
          'UTF-8 kodlamasında sıradan İngilizce ASCII karakterleri 1 bayt tutarken aksanlı harfler, Latin dışı alfabeler ve emojiler karakter başına 2 ila 4 bayt gerektirir.',
      },
      {
        question: 'Karakter Sayacı satır sonlarını da sayıyor mu?',
        answer:
          'Evet. Satır sonu karakterleri "Boşluklu" ölçümüne dahildir ve "Boşluksuz" ölçümünden çıkarılır.',
      },
      {
        question: 'Platform sınırını aşarsam ne olur?',
        answer:
          'İlerleme göstergesi kırmızıya döner ve sınırı kaç karakter aştığınızı tam olarak gösterir; böylece ne kadar kısaltmanız gerektiğini bilirsiniz.',
      },
      {
        question: 'Karakter Sayacı ücretsiz mi?',
        answer:
          'Evet. Karakter Sayacı tamamen ücretsizdir; kayıt gerekmez, karakter sınırı yoktur ve hesap açmanız gerekmez.',
      },
      {
        question: 'Boşluklu ve boşluksuz karakter arasındaki fark nedir?',
        answer:
          'Boşluklu sayım kelimeler arasındaki her boşluğu içerir, boşluksuz sayım bunları dışarıda bırakır; bu, bir platform yalnızca görünen karakterleri saydığında önem kazanır.',
      },
      {
        question: 'Karakter Sayacı emojileri sayıyor mu?',
        answer:
          'Evet. Her emoji karakter olarak sayılır ve çoğu emoji birden fazla UTF-8 baytı kullandığı için bayt toplamı karakter sayısından yüksek olur.',
      },
      {
        question: 'Karakter Sayacına kaç karakter yapıştırabilirim?',
        answer:
          'Belirli bir sınır yoktur. Sayım tamamen tarayıcınızda çalışır, bu yüzden çok uzun belgeler bile anında ölçülür.',
      },
      {
        question: 'SEO meta başlığının karakter sınırı nedir?',
        answer:
          'Arama motorları genellikle başlık etiketinin yaklaşık 50 ila 60 karakterini gösterir; başlığı bu aralıkta tutmak sonuçlarda kesilmeyi önler.',
      },
      {
        question: 'Meta açıklamasının karakter sınırı nedir?',
        answer:
          'Arama motorları genellikle meta açıklamasının yaklaşık 150 ila 160 karakterini gösterir; araç ilerlemenizi bu aralığa göre izler.',
      },
      {
        question: 'Tek bir SMS kaç karakter alır?',
        answer:
          'Temel GSM alfabesini kullanan standart bir SMS segmenti 160 karakter alır; daha uzun mesajlar birden fazla segmente bölünür.',
      },
      {
        question: 'Karakter Sayacı sekme ve satır sonlarını sayıyor mu?',
        answer:
          'Evet. Sekmeler ve satır sonları boşluklu toplama dahildir; bu yüzden fazla boş satırlı yapıştırılmış metin daha yüksek sayı gösterir.',
      },
      {
        question: 'Karakter Sayacı noktalama işaretlerini sayıyor mu?',
        answer:
          'Evet. Noktalama işaretleri karakter olarak sayılır ve hem boşluklu hem boşluksuz toplamlara dahildir.',
      },
      {
        question: 'X (Twitter) hangi karakter sınırını kullanıyor?',
        answer:
          'Çoğu hesapta X gönderileri 280 karakterle sınırlıdır ve bu araçtaki sınır çubukları ilerlemenizi bu eşiğe göre gösterir.',
      },
      {
        question: 'Instagram açıklaması uzunluğunu kontrol edebilir miyim?',
        answer:
          'Evet. Açıklamanızı yapıştırıp Instagram sınır göstergesine bakın; açıklamalar 2.200 karakterle sınırlıdır.',
      },
      {
        question: 'Karakter Sayacı İngilizce dışı metinlerle çalışır mı?',
        answer:
          'Evet. Her alfabedeki karakterleri sayar ve UTF-8 bayt toplamı aksanlı harfler ile Latin dışı karakterlerin gerçek depolama boyutunu gösterir.',
      },
      {
        question: 'Karakter Sayacını LinkedIn gönderisi için kullanabilir miyim?',
        answer:
          'Evet. Gönderinizi yapıştırıp 3.000 karakterlik gönderi sınırını izleyen LinkedIn sınır göstergesine bakın.',
      },
      {
        question: 'Karakter Sayacı metnimi kaydediyor veya yüklüyor mu?',
        answer:
          'Hayır. Tüm sayımlar tarayıcınızda yerel olarak yapılır ve metniniz asla yüklenmez, saklanmaz veya paylaşılmaz.',
      },
      {
        question: 'Sayımım Microsoft Word ile neden farklı?',
        answer:
          'Farklı araçlar satır sonlarını, sekmeleri ve gizli biçimlendirme karakterlerini farklı ele alır; bu yüzden sayaçlar arasında küçük farklar normaldir.',
      },
      {
        question: 'Harf ile rakam arasındaki fark nedir?',
        answer:
          'Harfler her alfabedeki alfabe karakterleridir, rakamlar ise 0 ile 9 arasındaki sayı karakterleridir; ikisi ayrı toplamlar olarak gösterilir.',
      },
      {
        question: 'Şifre veya kullanıcı adı alanının karakter sayısını kontrol edebilir miyim?',
        answer:
          'Evet. Değeri araca yapıştırarak formu göndermeden önce minimum veya maksimum uzunluk koşulunu sağlayıp sağlamadığını doğrulayın.',
      },
    ],
  },
  'case-converter': {
    instructions: [
      {
        title: 'Metninizi yapıştırın veya yazın',
        description:
          'Başlıkları, paragrafları veya tanımlayıcı dizelerini düzenleyiciye girin.',
      },
      {
        title: 'Yazım stilini seçin',
        description:
          'Başlık Biçimi, Cümle biçimi, camelCase veya snake_case gibi dönüşüm düğmelerinden birine tıklayın; metin anında güncellenir.',
      },
      {
        title: 'Biçimlendirilmiş çıktıyı kopyalayın',
        description:
          'Dönüştürülen metni panoya almak için Sonucu kopyala düğmesini kullanın.',
      },
      {
        title: 'BÜYÜK HARFLE yazılmış metni tek tıkla düzeltin',
        description:
          'Caps Lock açıkken yazılmış metni yapıştırıp Cümle biçimi seçin; her cümlenin normal büyük harf kullanımı geri gelir.',
      },
      {
        title: 'Kod için tanımlayıcıları dönüştürün',
        description:
          '"kullanıcı hesap durumu" gibi düz bir etiket yapıştırıp camelCase, PascalCase, snake_case veya kebab-case seçerek kullanıma hazır değişken adı alın.',
      },
      {
        title: 'Tuhaf büyük harf kullanımını düzeltin',
        description:
          'Başlık Biçimi bir kelimeyi küçük bırakırsa bu büyük olasılıkla "ve" veya "ile" gibi kısa bir kelimedir; kelimeyi yeniden yazın ya da o kelimeye tek başına Büyük Harf uygulayın.',
      },
    ],
    examples: [
      {
        title: 'Yanlışlıkla büyük harfle yazılmış metni düzeltme',
        input: 'THIS REPORT SUMMARIZES Q4 RESULTS. ALL METRICS ARE FINAL.',
        output: 'This report summarizes q4 results. All metrics are final.',
        explanation: 'Cümle biçimi tüm harfleri küçültür ve her cümlenin başını büyük yapar.',
      },
      {
        title: 'Kod tanımlayıcılarını biçimlendirme',
        input: 'user account billing status',
        output: 'userAccountBillingStatus (camelCase) / user_account_billing_status (snake_case)',
        explanation: 'Düz İngilizce etiketleri doğrudan standart programlama kurallarına dönüştürür.',
      },
    ],
    benefits: [
      'Tek çalışma alanında 10 yazı ve geliştirici yazım biçimi',
      'Akıllı Başlık Biçimi kısa edat ve bağlaçları küçük tutar',
      'Çok cümleli paragrafları ve satır sonlarını temiz biçimde işler',
      'Tamamen tarayıcınızda yerel çalışır, tek tıkla kopyalama',
    ],
    useCases: [
      'Yanlışlıkla BÜYÜK HARFLE yazılmış e-postaları Cümle biçimine geri çevirme',
      'Blog başlıklarını ve YouTube başlıklarını tutarlı biçimlendirme',
      'Veritabanı sütunları, CSS sınıfları veya JavaScript değişkenlerini yeniden adlandırma',
      'CSV dosyası içe aktarmadan önce elektronik tablo başlıklarını normalleştirme',
    ],
    faqs: [
      {
        question: 'Başlık Biçimi "ve" veya "ile" gibi kısa kelimeleri nasıl ele alıyor?',
        answer:
          'Başlık Biçimi, başlığın ilk ve son kelimesini büyük yazar; ve, ile, de, da gibi standart kısa bağlaç ve edatları küçük tutar.',
      },
      {
        question: 'Mevcut bir snake_case veya camelCase tanımlayıcıyı başka biçime çevirebilir miyim?',
        answer:
          'Evet. Alt çizgi, tire ve camelCase geçişlerindeki kelime sınırları otomatik olarak ayrılır, ardından yeni yazım kuralı uygulanır.',
      },
      {
        question: 'Cümle biçimi birden fazla paragrafı koruyor mu?',
        answer:
          'Evet. Büyük harf kullanımı metnin başında, cümle sonu işaretlerinden sonra ve yeni satırların başında sıfırlanır.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücü ücretsiz mi?',
        answer:
          'Evet. Büyük/Küçük Harf Dönüştürücü tamamen ücretsizdir; kayıt gerekmez, metin uzunluğu sınırı yoktur ve hesap açmanız gerekmez.',
      },
      {
        question: 'Başlık Biçimi ile Cümle biçimi arasındaki fark nedir?',
        answer:
          'Başlık Biçimi başlıktaki çoğu kelimeyi büyük yazar; Cümle biçimi ise yalnızca her cümlenin ilk kelimesini ve özel isimleri büyük yazar, tıpkı normal bir cümlede olduğu gibi.',
      },
      {
        question: 'camelCase ne için kullanılır?',
        answer:
          'camelCase, JavaScript ve birçok programlama dilinde değişken ve işlev adları için standart stildir; örneğin userAccountStatus.',
      },
      {
        question: 'snake_case ne için kullanılır?',
        answer:
          'snake_case kelimeleri alt çizgiyle ayırır ve Python değişkenleri, veritabanı sütunları ve dosya adları için yaygın olarak kullanılır; örneğin user_account_status.',
      },
      {
        question: 'kebab-case ne için kullanılır?',
        answer:
          'kebab-case kelimeleri tireyle ayırır ve URL, CSS sınıf adı ve HTML öznitelikleri için yaygın olarak kullanılır; örneğin user-account-status.',
      },
      {
        question: 'PascalCase ne için kullanılır?',
        answer:
          'PascalCase ayraçsız her kelimeyi büyük yazar ve sınıf adları ile bileşen adları için yaygın olarak kullanılır; örneğin UserAccountStatus.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücü BÜYÜK HARFLE yazılmış metni düzeltebilir mi?',
        answer:
          'Evet. Büyük harfli metni yapıştırıp Cümle biçimi veya küçük harf seçin; normal büyük harf kullanımı tek tıkla geri gelir.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücü sayı ve sembollerle çalışır mı?',
        answer:
          'Evet. Sayılar, noktalama işaretleri ve semboller olduğu gibi kalır; yalnızca harfler dönüştürülür.',
      },
      {
        question: 'Bütün bir paragrafı tek seferde dönüştürebilir miyim?',
        answer:
          'Evet. Paragrafın tamamını yapıştırın; dönüştürücü seçilen yazım biçimini tüm cümlelerine ve satır sonlarına uygular.',
      },
      {
        question: 'Başlık Biçimi iki nokta üst üsteden sonraki kelimeleri büyük yazar mı?',
        answer:
          'İki nokta üst üsteden sonraki kelimeler başlıktaki diğer kelimeler gibi ele alınır; önemli kelimeler büyük yazılır, kısa kelimeler küçük kalır.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücü başka dillerde de çalışır mı?',
        answer:
          'Evet. Büyük ve küçük harf biçimleri olan her dilin harflerini dönüştürür; ancak Başlık Biçimi kısa kelime kuralları İngilizceye dayanır.',
      },
      {
        question: 'snake_case biçimini tekrar normal kelimelere çevirebilir miyim?',
        answer:
          'Evet. Tanımlayıcıyı yapıştırıp Cümle biçimi veya Başlık Biçimi seçin; alt çizgiler kelime ayırıcı sayılır ve boşlukla değiştirilir.',
      },
      {
        question: 'Yazım biçimi dönüştürülürken satır sonlarına ne olur?',
        answer:
          'Satır sonları aynen korunur; bu yüzden çok satırlı metin dönüştürüldükten sonra da yapısını korur.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücü metnimi kaydediyor veya yüklüyor mu?',
        answer:
          'Hayır. Dönüştürme tarayıcınızda yerel olarak çalışır ve metniniz asla yüklenmez, saklanmaz veya paylaşılmaz.',
      },
      {
        question: 'Önceden karışık yazım biçimli metni dönüştürebilir miyim?',
        answer:
          'Evet. Dönüştürücü önce alt çizgi, tire ve yazım geçişlerinde kelimeleri ayırır; bu yüzden karışık yazımlı girdi de temiz biçimde dönüşür.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücüyü YouTube başlıkları için kullanabilir miyim?',
        answer:
          'Evet. Video başlığınızı yapıştırıp tutarlı, profesyonel bir başlık stili için Başlık Biçimi uygulayın.',
      },
      {
        question: 'Büyük/Küçük Harf Dönüştürücü telefonda çalışır mı?',
        answer:
          'Evet. Aynı tek tıklamalı dönüştürme ve kopyalama düğmeleriyle her modern mobil tarayıcıda çalışır.',
      },
    ],
  },
  'remove-duplicate-lines': {
    instructions: [
      {
        title: 'Satır satır listenizi yapıştırın',
        description:
          'Her öğesi kendi satırında olan herhangi bir listeyi Orijinal Satırlar kutusuna girin.',
      },
      {
        title: 'Eşleştirme kurallarını ayarlayın',
        description:
          'Eşleştirmenin ne kadar katı olacağına göre Büyük/küçük harfe duyarlı, Boşlukları kırp, Boş satırları kaldır veya Alfabetik sırala seçeneklerini açın ya da kapatın.',
      },
      {
        title: 'Benzersiz satırları kopyalayın',
        description:
          'Özet başlığında kaç yinelenen satırın kaldırıldığını görün, ardından temiz listeyi almak için Kopyala düğmesine tıklayın.',
      },
      {
        title: 'Temiz listeyi alfabetik sıralayın',
        description:
          'Benzersiz satırları ilk görülme sırası yerine A ile Z arasında sıralı istiyorsanız Alfabetik sırala seçeneğini açın.',
      },
      {
        title: 'Özet sayılarını kontrol edin',
        description:
          'Temizlemenin beklendiği gibi çalışıp çalışmadığını doğrulamak için özet başlığındaki orijinal satır sayısı, benzersiz sayı ve kaldırılan yineleme sayısına bakın.',
      },
      {
        title: 'Tekilleşmeyen satırları düzeltin',
        description:
          'Birbirine benzeyen iki satır kalırsa gizli sondaki boşlukları veya farklı büyük harf kullanımını kontrol edin; ardından Boşlukları kırp seçeneğini açın ya da Büyük/küçük harfe duyarlı seçeneğini kapatıp yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: 'E-posta listesi temizliği',
        input: 'alex@example.com\nsam@example.com\nAlex@example.com\n  sam@example.com  ',
        output: 'alex@example.com\nsam@example.com',
        explanation:
          'Boşluk kırpma açık ve büyük/küçük harf duyarlılığı kapalıyken sondaki boşluklar ve büyük harf farkları temiz biçimde birleşir.',
      },
      {
        title: 'Anahtar kelime listesinden yinelemeleri kaldırma',
        input: 'görsel sıkıştırıcı\nfotoğraf düzenleyici\ngörsel sıkıştırıcı\npdf dönüştürücü',
        output: 'görsel sıkıştırıcı\nfotoğraf düzenleyici\npdf dönüştürücü',
        explanation:
          'İlk görülme sırasını koruyarak tekrarlanan anahtar kelimeler kaldırılır; listenin asıl düzeni bozulmaz.',
      },
    ],
    benefits: [
      'Varsayılan olarak ilk görülme sırasını korur veya istek üzerine alfabetik sıralar',
      'Orijinal satır sayısı, benzersiz sayı ve kaldırılan yineleme sayısını tam olarak gösterir',
      'Binlerce satırlık büyük listeleri bile tarayıcı belleğinde rahatça işler',
      'Özel listeleri ve müşteri dışa aktarımlarını üçüncü taraf sunuculardan uzak tutar',
    ],
    useCases: [
      'Anahtar kelime araştırması dışa aktarımlarından ve URL listelerinden yinelemeleri kaldırma',
      'Abone e-posta listelerini CRM sistemine aktarmadan önce temizleme',
      'Günlük dosyalarından tekrarlanan hata izi veya IP girişlerini kaldırma',
      'Elektronik tablolar için benzersiz etiket veya SKU listeleri hazırlama',
    ],
    faqs: [
      {
        question: 'Yinelenen Satırları Kaldırma aracı asıl sıramı koruyor mu?',
        answer:
          'Evet. Varsayılan olarak her benzersiz satırın ilk görüldüğü yeri asıl sırasında tutar. A ile Z sıralaması da isterseniz "Alfabetik sırala" seçeneğini açın.',
      },
      {
        question: 'Boşlukları kırpma, yineleme tespitini nasıl etkiler?',
        answer:
          '"Boşlukları kırp" işaretliyken benzersizlik kontrolünden önce satırın başındaki ve sonundaki boşluklar silinir; bu yüzden "elma " ile "elma" farklı sayılmaz.',
      },
      {
        question: '"USA" ve "usa" gibi büyük harf farklarını korumak istersem ne yapmalıyım?',
        answer:
          '"Büyük/küçük harfe duyarlı" onay kutusunu açın; böylece farklı büyük harfli satırlar ayrı giriş olarak kalır.',
      },
      {
        question: 'Yinelenen Satırları Kaldırma aracı ücretsiz mi?',
        answer:
          'Evet. Bu araç tamamen ücretsizdir; kayıt gerekmez, satır sınırı yoktur ve hesap açmanız gerekmez.',
      },
      {
        question: 'Yinelenen satır ne sayılır?',
        answer:
          'İki satır, seçtiğiniz ayarlara (büyük/küçük harf duyarlılığı ve boşluk kırpma) göre metinleri tam olarak eşleştiğinde yinelenen sayılır.',
      },
      {
        question: 'Virgülle ayrılmış listelerle çalışır mı?',
        answer:
          'Doğrudan değil. Araç bütün satırları karşılaştırır; bu yüzden virgülle ayrılmış listeyi önce her öğe kendi satırında olacak şekilde bölün, sonra yapıştırın.',
      },
      {
        question: 'CSV dosyasındaki yinelenen satırları kaldırabilir miyim?',
        answer:
          'Evet. CSV dosyanızdan sütunu veya satırları kopyalayıp satır olarak yapıştırın, tekilleştirin ve temiz listeyi elektronik tablonuza geri yapıştırın.',
      },
      {
        question: 'Boş satırlara ne olur?',
        answer:
          'Boş satırlar diğer satırlar gibi ele alınır; bu yüzden "Boş satırları kaldır" seçeneğini açmak onları yinelemelerle birlikte çıktıdan temizler.',
      },
      {
        question: 'URL listesinden yinelemeleri kaldırabilir miyim?',
        answer:
          'Evet. Her satıra bir URL yapıştırın; araç tekrarlanan URL adreslerini kaldırır; bu, anahtar kelime dışa aktarımlarını ve site haritası listelerini temizlemek için kullanışlıdır.',
      },
      {
        question: 'Tek seferde kaç satırı tekilleştirebilirim?',
        answer:
          'Belirli bir sınır yoktur. Tekilleştirme tamamen tarayıcınızda çalışır; bu yüzden binlerce satırlık listeler istemci belleğinde sorunsuz işlenir.',
      },
      {
        question: 'Araç yinelenen satırın ilk mi son mu görüldüğünü korur?',
        answer:
          'Her benzersiz satırın ilk görüldüğü yeri korur ve sonraki tekrarları kaldırır; bu, asıl sıralamanızı korur.',
      },
      {
        question: 'E-posta adresi listesindeki yinelemeleri kaldırabilir miyim?',
        answer:
          'Evet. Her satıra bir adres yapıştırın, büyük/küçük harf duyarlılığını kapatın ve boşluk kırpmayı açın; yinelenen adresler tek girişe düşer.',
      },
      {
        question: 'Sıralama hangi satırların korunduğunu değiştirir mi?',
        answer:
          'Hayır. Sıralama yalnızca tekilleştirmeden sonra benzersiz satırları alfabetik olarak yeniden dizer; hangi satırların yinelenen sayıldığını değiştirmez.',
      },
      {
        question: 'Araç tek satır içindeki yinelenen kelimeleri kaldırır mı?',
        answer:
          'Hayır. Bütün satırları karşılaştırır; bu yüzden tek satır içindeki yinelemeler değişmeden kalır; kelime düzeyinde temizlik için Bul ve Değiştir aracını kullanın.',
      },
      {
        question: 'Araç sayı veya IP adresleriyle çalışır mı?',
        answer:
          'Evet. Sayılar, IP adresleri, SKU kodları ve kodlar dahil her satır içeriği çalışır; her öğenin kendi satırında olması yeterlidir.',
      },
      {
        question: 'Sunucu günlüklerindeki yinelenen satırları kaldırabilir miyim?',
        answer:
          'Evet. Günlük satırlarını yapıştırıp tekilleştirerek benzersiz hataları veya tekrarlanan IP girişlerini daha hızlı sorun gidermek için ayırabilirsiniz.',
      },
      {
        question: 'Yinelenen Satırları Kaldırma listemi kaydediyor veya yüklüyor mu?',
        answer:
          'Hayır. Tekilleştirme tarayıcınızda yerel olarak çalışır ve listeniz asla yüklenmez, saklanmaz veya paylaşılmaz.',
      },
      {
        question: 'Listem satır sonu yerine noktalı virgül kullanıyorsa ne olur?',
        answer:
          'Araç her satırı bir öğe sayar; bu yüzden önce noktalı virgülleri satır sonlarıyla değiştirin, sonra listeyi yapıştırıp tekilleştirin.',
      },
      {
        question: 'Boş satırları koruyarak yinelemeleri kaldırabilir miyim?',
        answer:
          'Evet. "Boş satırları kaldır" seçeneğini işaretlemeden bırakın; boş satırlar tekilleştirilmiş öğelerle birlikte çıktıda kalır.',
      },
      {
        question: 'Araç telefonumda çalışır mı?',
        answer:
          'Evet. Aynı tekilleştirme seçenekleri ve kopyalama düğmesiyle her modern mobil tarayıcıda çalışır.',
      },
    ],
  },
  'text-diff-checker': {
    instructions: [
      {
        title: 'İki sürümü de yapıştırın',
        description:
          'Temel kopyayı Orijinal Metin kutusuna, gözden geçirilmiş sürümü Değiştirilmiş Metin kutusuna koyun.',
      },
      {
        title: 'Karşılaştırma seçeneklerini ayarlayın',
        description:
          'Yalnızca biçimlendirme değişikliklerini atlamak istiyorsanız Boşluğu yoksay veya Büyük/küçük harfi yoksay seçeneklerini açın.',
      },
      {
        title: 'Vurgulanan değişiklikleri inceleyin',
        description:
          '+ eklenen, - kaldırılan ve satır numarası göstergeleriyle Satır Karşılaştırma bölmesini tarayın.',
      },
      {
        title: 'Değişiklik özetini kontrol edin',
        description:
          'İki sürüm arasında ne kadar değişiklik olduğunu hızlıca anlamak için eklenen, kaldırılan ve değişmeyen satır sayılarını okuyun.',
      },
      {
        title: 'Yalnızca belirli bir bölümü karşılaştırın',
        description:
          'Belgenin tamamı yerine yalnızca ilgilendiğiniz bölümü iki kutuya yapıştırarak tek bir paragrafı veya yapılandırma bloğunu karşılaştırın.',
      },
      {
        title: 'Yanlış görünen farkı düzeltin',
        description:
          'Neredeyse her satır değişmiş görünüyorsa iki metin farklı satır sonları veya girintiler kullanıyor olabilir; Boşluğu yoksay seçeneğini açın ve iki yapıştırmanın da aynı satırdan başladığını kontrol edin.',
      },
    ],
    examples: [
      {
        title: 'Yapılandırma değişikliği kontrolü',
        input: 'Orijinal: Önbellek TTL: 600\nDeğiştirilmiş: Önbellek TTL: 1800',
        output: '- Önbellek TTL: 600\n+ Önbellek TTL: 1800',
        explanation: 'Değişen satırı eski ve yeni satır numaralarıyla birlikte net biçimde ayırır.',
      },
      {
        title: 'Makale düzeltmelerini gözden geçirme',
        input: 'Orijinal: Hızlı siteler ziyaretçileri tutar.\nDeğiştirilmiş: Hızlı siteler ziyaretçileri tutar ve dönüşümü artırır.',
        output: '- Hızlı siteler ziyaretçileri tutar.\n+ Hızlı siteler ziyaretçileri tutar ve dönüşümü artırır.',
        explanation: 'Bir cümleye eklenen kelimeleri tek satırda gösterir; geri kalan metin değişmemiş görünür.',
      },
    ],
    benefits: [
      'Basit sıra eşleştirme yerine En Uzun Ortak Altdizi (LCS) hizalaması kullanır',
      'Renk vurgulamasını renk körü erişilebilirliği için + / - sembolleriyle eşleştirir',
      'Orijinal ve değiştirilmiş satır numaralarını yan yana izler',
      'Gizli taslakları ve yapılandırma dosyalarını kesinlikle yerel tarayıcı belleğinde tutar',
    ],
    useCases: [
      'Makale veya sözleşmenin iki düzeltmesi arasındaki düzenlemeleri gözden geçirme',
      '.env, JSON veya YAML yapılandırma parçalarındaki değişiklikleri inceleme',
      'Çeviri güncellemelerini veya yasal politika düzeltmelerini doğrulama',
      'Öğrenci veya ekip taslak düzeltmelerini hızlıca kontrol etme',
    ],
    faqs: [
      {
        question: 'Fark algoritması dosyanın ortasına eklenen satırları nasıl ele alıyor?',
        answer:
          'En Uzun Ortak Altdizi (LCS) satır karşılaştırma algoritması kullandığı için satır eklemek sonraki satır numaralarını kaydırır ama dosyanın geri kalanını değişmiş olarak işaretlemez.',
      },
      {
        question: '"Boşluğu yoksay" ne yapar?',
        answer:
          'Satırları karşılaştırmadan önce baştaki ve sondaki boşlukları kırpar ve ardışık birden fazla boşluğu tek boşluğa indirir; bu, girinti düzeltmeleri yerine içerik düzenlemelerine odaklanmanıza yardımcı olur.',
      },
      {
        question: 'Metinleri karşılaştırmak için karakter sınırı var mı?',
        answer:
          'Karşılaştırma doğrudan tarayıcınızda, sunucu sınırı olmadan çalışır; birkaç bin satırlık tipik belgeler neredeyse anında karşılaştırılır.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı ücretsiz mi?',
        answer:
          'Evet. Metin Farkı Karşılaştırıcı tamamen ücretsizdir; kayıt gerekmez, karşılaştırma sınırı yoktur ve hesap açmanız gerekmez.',
      },
      {
        question: 'Eklenen ve kaldırılan satırlar arasındaki fark nedir?',
        answer:
          'Eklenen satırlar yalnızca değiştirilmiş metinde görünür ve + sembolüyle işaretlenir; kaldırılan satırlar yalnızca orijinal metinde görünür ve - sembolüyle işaretlenir.',
      },
      {
        question: 'Yapıştırılmış metin yerine iki dosyayı karşılaştırabilir miyim?',
        answer:
          'Doğrudan değil. Her dosyanın içeriğini kopyalayıp Orijinal Metin ve Değiştirilmiş Metin kutularına yapıştırarak karşılaştırın.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı kodla çalışır mı?',
        answer:
          'Evet. Satır tabanlı her metni karşılaştırır; bu yüzden bir betik veya stil dosyasının iki sürümü arasındaki değişen satırları görebilirsiniz.',
      },
      {
        question: 'JSON veya YAML yapılandırma dosyalarını karşılaştırabilir miyim?',
        answer:
          'Evet. Her sürümü iki kutuya yapıştırın; fark, yapılandırmanızdaki değişen anahtarları, değerleri ve satırları vurgular.',
      },
      {
        question: '"Büyük/küçük harfi yoksay" ne yapar?',
        answer:
          'Karşılaştırma sırasında büyük ve küçük harfleri eşit sayar; bu yüzden yalnızca büyük harf kullanımı değişen bir satır farklı olarak işaretlenmez.',
      },
      {
        question: 'Farklı dillerdeki metinleri karşılaştırabilir miyim?',
        answer:
          'Evet. Karşılaştırma her metinde çalışır; ancak farklı dillerdeki satırlar içerikleri farklı olduğu için doğal olarak değişmiş görünür.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı karakter düzeyinde değişiklik gösterir mi?',
        answer:
          'Hayır. Karşılaştırma satır satır çalışır; bu yüzden değişen bir kelime bütün satırı değişmiş olarak işaretler; daha ince ayrıntı için iki satırı ayrı ayrı karşılaştırın.',
      },
      {
        question: 'Bir belgeyi eski sürümüyle karşılaştırabilir miyim?',
        answer:
          'Evet. Eski sürümü Orijinal Metin, yeni sürümü Değiştirilmiş Metin olarak yapıştırarak her ekleme ve silmeyi görün.',
      },
      {
        question: 'Karşılaştırmada satır numaraları nasıl gösteriliyor?',
        answer:
          'Her satır kendi metnindeki numarasını korur; böylece değişen bir satırı her iki sürümdeki tam konumuna kadar izleyebilirsiniz.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı metnimi kaydediyor veya yüklüyor mu?',
        answer:
          'Hayır. Karşılaştırma tarayıcınızda yerel olarak çalışır ve metinleriniz asla yüklenmez, saklanmaz veya paylaşılmaz.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı ile yasal sözleşmeleri karşılaştırabilir miyim?',
        answer:
          'Evet. İki sözleşme sürümünü yapıştırarak değişen maddeleri tespit edin; ancak önemli yasal değişiklikler için her zaman bir avukata danışmalısınız.',
      },
      {
        question: 'İki kutuya da aynı metni yapıştırırsam ne olur?',
        answer:
          'Karşılaştırma sıfır eklenen ve sıfır kaldırılan satır gösterir; bu, iki metnin aynı olduğunu doğrular.',
      },
      {
        question: 'Farklı satır sonlarına sahip metinleri karşılaştırabilir miyim?',
        answer:
          'Evet. Satır sonları farklıysa fark, satırları değişmiş olarak işaretleyebilir; Boşluğu yoksay seçeneğini açmak genellikle yalnızca biçimlendirmeden kaynaklanan bu farkları temizler.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı büyük belgelerle çalışır mı?',
        answer:
          'Evet. Birkaç bin satıra kadar belgeler tarayıcıda neredeyse anında karşılaştırılır ve sunucuya yükleme yapılmaz.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcıyı çeviri incelemeleri için kullanabilir miyim?',
        answer:
          'Evet. Orijinal çeviriyi ve gözden geçirilmiş çeviriyi yapıştırarak düzenlenen her satırı yan yana inceleyin.',
      },
      {
        question: 'Metin Farkı Karşılaştırıcı telefonumda çalışır mı?',
        answer:
          'Evet. Aynı yan yana karşılaştırma ve vurgulama özellikleriyle her modern mobil tarayıcıda çalışır.',
      },
    ],
  },
  'whitespace-remover': {
    instructions: [
      {
        title: 'Biçimlendirilmemiş metni yapıştırın',
        description:
          'Çift boşluk, başıboş sekme veya bozuk satır kaydırma içeren metni Giriş Metni alanına bırakın.',
      },
      {
        title: 'Boşluk ve sekmelerin nasıl işleneceğini seçin',
        description:
          'Birden fazla boşluğu tek boşluğa indirin, sekmeleri tek boşluğa dönüştürün ve her satırın başındaki ve sonundaki boşlukları kırpın.',
      },
      {
        title: 'Satır sonu seçeneğini belirleyin',
        description:
          'Paragraf sonlarını koruyun, yalnızca boş satırları kaldırın, satır sonlarını boşlukla değiştirerek bölünmüş cümleleri birleştirin ya da tüm sonları kaldırıp tek sürekli satır oluşturun.',
      },
      {
        title: 'Temizlenmiş çıktıyı inceleyin',
        description:
          'Sonucu çıktı panelinde kontrol edin ve temizlik sırasında tam olarak kaç karakterin kaldırıldığını gösteren karakter sayısına bakın.',
      },
      {
        title: 'Temizlenmiş metni kopyalayın',
        description:
          'Normalleştirilmiş sonucu kopyalamak için kopyala düğmesini kullanın, ardından belgenize, formunuza veya CMS alanınıza yapıştırın.',
      },
      {
        title: 'Birbirine yapışan cümleleri düzeltin',
        description:
          'Ayrı satırlardaki kelimeler boşluksuz birleşirse "Boşlukla değiştir" seçeneğine geçin. Paragraflar tek bloğa birleşirse bunun yerine "Boş satırları kaldır" seçeneğine geri dönün.',
      },
    ],
    examples: [
      {
        title: 'PDF kopyala-yapıştır temizliği',
        input: '   İlk   satırda   fazla boşluk var.\n\n\nİkinci   satır   burada.   ',
        output: 'İlk satırda fazla boşluk var.\nİkinci satır burada.',
        explanation: 'Çift boşlukları tek boşluğa indirir, kenar boşluklarını kırpar ve boş ara satırları kaldırır.',
      },
      {
        title: 'Tek satırlık adres oluşturma',
        input: 'Atatürk Caddesi No: 12\nKat: 3\n34000 İstanbul',
        output: 'Atatürk Caddesi No: 12 Kat: 3 34000 İstanbul',
        explanation: 'Satır sonlarını boşlukla değiştirerek çok satırlı adresi tek satıra indirir.',
      },
    ],
    benefits: [
      'PDF belgelerinden bozulan satır kaydırmayı tek tıkla düzeltir',
      'Temizlik sırasında kaldırılan karakter sayısını tam olarak sayar',
      'Yalnızca fazla boşlukları atarken paragrafları korumayı destekler',
      'Her şeyi tarayıcıda yerel olarak işler',
    ],
    useCases: [
      'Çok sütunlu PDF dosyalarından kopyalanan bozuk metni onarma',
      'CMS alanlarına yapıştırmadan önce sondaki boşlukları atma',
      'Çok satırlı adresleri veya parçaları tek satıra indirme',
      'Sekmeyle girintilenmiş notları temiz, tek boşluklu metne dönüştürme',
    ],
    faqs: [
      {
        question: 'PDF dosyasından kopyalanan metin için hangi satır sonu seçeneğini seçmeliyim?',
        answer:
          'Sert satır sonları cümleleri ortadan böldüyse "Boşlukla değiştir" seçeneğini, her satır zaten ayrı bir paragraf veya liste öğesiyse "Boş satırları kaldır" seçeneğini seçin.',
      },
      {
        question: 'Boşlukları daraltmak kelimeler arasındaki tek boşlukları etkiler mi?',
        answer:
          'Hayır. Yalnızca ardışık iki veya daha fazla boşluk tek boşluğa indirilir.',
      },
      {
        question: 'Sekmeleri de kaldırıyor mu?',
        answer:
          'Evet, "Sekmeleri boşluğa dönüştür" açıkken sekme karakterleri tek boşluğa dönüşür ve yanındaki boşluklarla birleşir.',
      },
      {
        question: 'Boşluk Temizleyici ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez, hesap gerekmez ve metni kaç kez temizleyeceğinize dair sınır yoktur.',
      },
      {
        question: 'Metnim Boşluk Temizleyici kullanırken tarayıcımdan çıkıyor mu?',
        answer:
          'Hayır. Tüm temizlik tarayıcınızda yerel olarak yapılır; bu yüzden metniniz asla bir sunucuya yüklenmez.',
      },
      {
        question: '"Boş satırları kaldır" seçeneği ne yapar?',
        answer:
          'Metninizdeki boş satırları silerken içerik içeren her satırı korur; böylece paragraflar ve liste öğeleri sırasını korur.',
      },
      {
        question: 'Fazla boşlukları kaldırırken paragraf sonlarını koruyabilir miyim?',
        answer:
          'Evet. Satır sonlarını koruyan ve yalnızca fazla boşlukları daraltan seçeneği seçin; paragraflarınız ayrık kalırken içlerindeki boşluklar düzelir.',
      },
      {
        question: '"Boşlukla değiştir" ile tüm satır sonlarını kaldırma arasındaki fark nedir?',
        answer:
          '"Boşlukla değiştir" satırları tek boşlukla birleştirir, böylece kaydırılmış cümleler doğru okunur; tüm sonları kaldırmak ise satırları aralarında boşluk olmadan doğrudan birleştirir.',
      },
      {
        question: 'Boşluk Temizleyici satır sonlarındaki sondaki boşlukları siliyor mu?',
        answer:
          'Evet. Her satırın sonundaki boşluklar ve sekmeler kırpılır; bu, metni formlara veya kod alanlarına yapıştırmadan önce kullanışlıdır.',
      },
      {
        question: 'Satır başlarındaki baştaki boşlukları ve girintileri kaldırıyor mu?',
        answer:
          'Evet. Her satırın başındaki baştaki boşluklar kırpılır; bu yüzden girintili veya hizası bozuk yapıştırılmış metin temiz biçimde hizalanır.',
      },
      {
        question: 'Boşluk Temizleyici ile elektronik tablodan kopyalanan metni temizleyebilir miyim?',
        answer:
          'Evet. Elektronik tablo hücreleri arasındaki sekmeler tek boşluğa dönüşür ve kopyalanan aralıklardaki fazla boş satırlar kaldırılır.',
      },
      {
        question: 'Çok satırlı metni tek satıra nasıl dönüştürürüm?',
        answer:
          'Metninizi yapıştırın, ardından satır sonlarını boşlukla değiştiren veya tüm sonları kaldıran seçeneği seçin ve ortaya çıkan tek satırlık çıktıyı kopyalayın.',
      },
      {
        question: 'Boşluk Temizleyici noktalama işaretlerini, harfleri veya sayıları değiştirir mi?',
        answer:
          'Hayır. Yalnızca boşluk, sekme ve satır sonu gibi boşluk karakterlerini değiştirir; kelimeleriniz, noktalama işaretleriniz ve sayılarınız tam olarak olduğu gibi kalır.',
      },
      {
        question: 'Boşluk Temizleyiciyi bir forma yapıştırmadan önce metin temizlemek için kullanabilir miyim?',
        answer:
          'Evet. Adres, ad veya açıklamalardaki sondaki boşlukları ve başıboş satır sonlarını web formuna veya CMS alanına girmeden önce atmak için idealdir.',
      },
      {
        question: 'Temizlikten sonra gösterilen karakter sayısı ne anlama geliyor?',
        answer:
          'Temizlik sırasında kaç karakterin kaldırıldığını gösterir; böylece aracın metninizden tam olarak ne kadar fazla boşluk attığını görürsünüz.',
      },
      {
        question: 'Boşluk Temizleyici çok uzun belgelerde çalışır mı?',
        answer:
          'Evet. Tarayıcınızda yerel olarak çalıştığı için uzun belgeleri yapıştırabilirsiniz; ancak çok büyük metin bloklarının işlenmesi biraz zaman alabilir.',
      },
      {
        question: 'Yanlış seçenek seçersem temizliği geri alabilir miyim?',
        answer:
          'Orijinal metniniz giriş alanında kalır; bu yüzden farklı bir seçenek seçmeniz yeterlidir, yapıştırdığınız metni kaybetmeden çıktı güncellenir.',
      },
      {
        question: 'Boşluk Temizleyici kelimelerin içindeki boşlukları kaldırır mı?',
        answer:
          'Hayır. Kelimelerin içindeki boşluklar tek boşluktur, bu yüzden onlara dokunulmaz; yalnızca ardışık iki veya daha fazla boşluk daraltılır.',
      },
      {
        question: 'Araç hangi boşluk türlerini temizler?',
        answer:
          'Normal boşlukları, sekme karakterlerini, satırlardaki sondaki ve baştaki boşlukları, boş satırları ve istenmeyen satır sonlarını temizler.',
      },
      {
        question: 'Boşluk Temizleyiciyi kod üzerinde kullanabilir miyim?',
        answer:
          'Düz yazı için çalışır; ancak Python gibi girintiye duyarlı kodlarda dikkatli olun, çünkü baştaki boşlukları kırpmak kodun davranışını değiştirebilir.',
      },
    ],
  },
  'sort-lines': {
    instructions: [
      {
        title: 'Her satıra bir öğe girin',
        description:
          'Listeyi Giriş Satırları alanına yapıştırın; her öğe kendi satırında olsun.',
      },
      {
        title: 'Sıralama düzenini seçin',
        description:
          'A ile Z, Z ile A, Doğal (1, 2, 10), Önce En Kısa/En Uzun, Ters Sıra veya Karıştır seçeneklerinden birini belirleyin.',
      },
      {
        title: 'Büyük/küçük harf duyarlılığını ayarlayın',
        description:
          'Büyük ve küçük harflerin ayrı sıralanmasını istiyorsanız büyük/küçük harfe duyarlı karşılaştırmayı açın; aksi hâlde "elma" ile "Elma" aynı sayılır.',
      },
      {
        title: 'Temizlik seçeneklerini açın veya kapatın',
        description:
          'İsteğe bağlı olarak boş satırları bırakın veya aynı geçişte yinelemeleri kaldırın; böylece sıralanmış listeniz temiz çıkar.',
      },
      {
        title: 'Sıralanmış listeyi inceleyip kopyalayın',
        description:
          'Sıralanmış çıktıyı sırayla kontrol edin, ardından tek tıkla kopyalayarak belgenize, elektronik tablonuza veya kod dosyanıza yapıştırın.',
      },
      {
        title: 'Numaralı öğelerin yanlış sıralanmasını düzeltin',
        description:
          '"Öğe 10", "Öğe 2"den önce görünüyorsa A ile Z yerine Doğal sıralamaya geçin; bu, her satırdaki sayıları sayısal olarak karşılaştırır.',
      },
    ],
    examples: [
      {
        title: 'Doğal sayısal sıralama ile standart metin sıralaması',
        input: 'Öğe 10\nÖğe 2\nÖğe 1',
        output: 'Öğe 1\nÖğe 2\nÖğe 10',
        explanation: 'Doğal mod, gömülü sayıları sayısal olarak karşılaştırır; bu yüzden Öğe 2, Öğe 10dan önce gelir.',
      },
      {
        title: 'Alfabetik sıralama',
        input: 'muz\nelma\nkiraz',
        output: 'elma\nkiraz\nmuz',
        explanation: 'A ile Z sıralaması listeyi alfabetik düzene koyar; Karıştır ise aynı öğeleri rastgele sıraya dizer.',
      },
    ],
    benefits: [
      'Yerel ayara duyarlı sıralayıcı ve doğal sayısal sıralama içerir',
      'Sıralamayı boş satır kaldırma ve tekilleştirmeyle birleştirir',
      'Arayüz tabloları ve metin kontrolleri için uzunluğa dayalı sıralamayı destekler',
      'Sıralanmış sonucun tek tıkla anında kopyalanması',
    ],
    useCases: [
      'Kaynakça, sözlük ve referans listelerini alfabetik sıralama',
      'Numaralı dosyaları veya test senaryolarını doğal sırada dizme (Öğe 1, 2, 10)',
      'CSS özelliklerini, içe aktarmaları veya ortam anahtarlarını sıralama',
      'Çekiliş katılımlarını veya sınav sorularını Karıştır ile rastgele dizme',
    ],
    faqs: [
      {
        question: 'A ile Z ile Doğal sıralama arasındaki fark nedir?',
        answer:
          'Standart alfabetik sıralama "Öğe 10"u "Öğe 2"den önce koyar, çünkü "1", "2"den önce gelir. Doğal sıralama dizelerdeki sayıları ayrıştırır; bu yüzden "Öğe 2", "Öğe 10"dan önce gelir.',
      },
      {
        question: 'Sıralarken yinelenen girişleri kaldırabilir miyim?',
        answer:
          'Evet. Listenizi aynı anda tekilleştirmek ve sıralamak için "Yinelemeleri kaldır" seçeneğini işaretleyin.',
      },
      {
        question: 'Ters Sıra, Z ile A sıralamasından nasıl farklıdır?',
        answer:
          'Z ile A alfabetik olarak azalan sırada dizerken Ters Sıra, mevcut satır dizinizi alfabetikleştirmeden alttan üste çevirir.',
      },
      {
        question: 'Satır Sıralayıcı ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez, hesap gerekmez ve kaç liste sıralayacağınıza dair sınır yoktur.',
      },
      {
        question: 'Listem sıralanırken tarayıcımdan çıkıyor mu?',
        answer:
          'Hayır. Sıralama tarayıcınızda yerel olarak yapılır; bu yüzden listeniz asla bir sunucuya yüklenmez.',
      },
      {
        question: 'Doğal sıralama nedir ve ne zaman kullanmalıyım?',
        answer:
          'Doğal sıralama metin içindeki sayıları sayısal olarak karşılaştırır; "Bölüm 2" ve "Bölüm 10" gibi numaralı öğeleri gerçek sayısal düzende tutmak için kullanın.',
      },
      {
        question: 'Listeyi Z ile A arasında sıralayabilir miyim?',
        answer:
          'Evet. Satırlarınızı ters alfabetik sırada dizmek için Z ile A seçeneğini belirleyin.',
      },
      {
        question: 'Satırları alfabetik yerine uzunluğa göre sıralayabilir miyim?',
        answer:
          'Evet. Satırları karakter uzunluğuna göre sıralamak için Önce En Kısa veya Önce En Uzun seçeneğini belirleyin; bu, arayüz tablolarını kontrol etmek veya metni hizalamak için kullanışlıdır.',
      },
      {
        question: 'Satır Sıralayıcıdaki Karıştır seçeneği ne yapar?',
        answer:
          'Karıştır, satırlarınızın sırasını rastgele dizer; bu, çekiliş katılımları, sınav soruları veya rastgele sırada istediğiniz her liste için kullanışlıdır.',
      },
      {
        question: 'Satır Sıralayıcı boş satırları kaldırıyor mu?',
        answer:
          'Evet, boş satır seçeneğini açarsanız. Aksi hâlde boş satırlar çıktıda kalır.',
      },
      {
        question: 'Satır Sıralayıcı ile büyük/küçük harfe duyarlı sıralama yapabilir miyim?',
        answer:
          'Evet. Büyük ve küçük harfleri ayrı sıralamak için büyük/küçük harfe duyarlı karşılaştırmayı açın; kapalıyken "elma" ile "Elma" aynı sayılır.',
      },
      {
        question: 'Satır Sıralayıcı sayı ve tarihlerle çalışır mı?',
        answer:
          'Evet. Doğal sıralama gömülü sayıları doğru dizer ve YYYY-AA-GG biçimindeki tarihler doğru sıralanır; diğer tarih biçimleri düz metin olarak sıralanır.',
      },
      {
        question: 'CSV değerleri gibi satır içindeki sütunları sıralayabilir miyim?',
        answer:
          'Hayır. Araç bütün satırları sıralar; bu yüzden her satır tek birim olarak hareket eder; tek satır içinde virgülle ayrılmış değerleri yeniden dizmez.',
      },
      {
        question: 'Sıralarken yinelenen satırlara ne olur?',
        answer:
          'Yinelemeler, "Yinelemeleri kaldır" seçeneğini açmadığınız sürece listede kalır; bu seçenek sıralamadan önce her satırın yalnızca ilk görüldüğünü korur.',
      },
      {
        question: 'Listeyi alfabetik sıralamadan ters çevirebilir miyim?',
        answer:
          'Evet. Her satırın içindeki metni değiştirmeden listenizi alttan üste çevirmek için Ters Sıra seçeneğini kullanın.',
      },
      {
        question: 'Satır Sıralayıcı aksanlı harfleri ve başka dilleri işliyor mu?',
        answer:
          'Evet. Yerel ayara duyarlı bir sıralayıcı kullanır; bu yüzden aksanlı karakterler ve İngilizce dışı harfler ham karakter kodlarına göre değil, mantıklı bir sırada dizilir.',
      },
      {
        question: '"1. Elma, 2. Muz, 10. Kiraz" gibi numaralı bir listeyi sıralayabilir miyim?',
        answer:
          'Evet. Doğal sıralama her satırın başındaki sayıları okur; bu yüzden "2. Muz", "10. Kiraz"dan önce doğru biçimde gelir.',
      },
      {
        question: 'Satır Sıralayıcı ne kadar büyük bir listeyi işleyebilir?',
        answer:
          'Tarayıcınızda yerel olarak çalışır ve uzun listeleri kolayca işler; ancak on binlerce satırlık çok büyük yapıştırmaların işlenmesi biraz zaman alabilir.',
      },
      {
        question: 'Sıralama her satırın içindeki metni değiştirir mi?',
        answer:
          'Hayır. Sıralama yalnızca satırların sırasını değiştirir; satırlar içindeki kelimeler, sayılar ve noktalama işaretleri tam olarak aynı kalır.',
      },
      {
        question: 'Yanlış sıra seçersem sıralamayı geri alabilir miyim?',
        answer:
          'Orijinal listeniz giriş alanında kalır; bu yüzden farklı bir sıralama düzeni seçebilirsiniz ve yapıştırdığınız listeyi kaybetmeden çıktı güncellenir.',
      },
    ],
  },
  'find-and-replace': {
    instructions: [
      {
        title: 'Bul ve Değiştir terimlerini girin',
        description:
          'Eşleştirmek istediğiniz metni veya deseni Bul alanına, hedef dizeyi Değiştir alanına yazın.',
      },
      {
        title: 'Eşleştirme bayraklarını ayarlayın',
        description:
          'Desen eşleştirme için Büyük/küçük harfe duyarlı, Yalnızca tam kelime veya Düzenli İfade Kullan (RegExp) seçeneklerini açın veya kapatın.',
      },
      {
        title: 'Düzenlenecek metni yapıştırın',
        description:
          'Belgenin tamamını, CSV parçasını veya kod bloğunu kaynak metin alanına yapıştırın; böylece her oluşum tek geçişte kapsanır.',
      },
      {
        title: 'Canlı eşleşme sayısını kontrol edin',
        description:
          'Kopyalamadan önce eşleştirmenin tam olarak beklediğiniz yerlere isabet ettiğini doğrulamak için değiştirilen oluşumların canlı sayısına bakın.',
      },
      {
        title: 'Çıktıyı inceleyip kopyalayın',
        description:
          'Güncellenen metni istenmeyen değişiklikler için tarayın, ardından tek tıkla kopyalayarak belgenize veya düzenleyicinize geri yapıştırın.',
      },
      {
        title: 'Hiçbir şeyi değiştirmeyen eşleşmeyi düzeltin',
        description:
          'Sayı sıfırsa büyük/küçük harf duyarlılığını kontrol edin, Yalnızca tam kelime seçeneğini kapatın veya RegExp modunda . ve ( gibi özel karakterleri kaçış karakteriyle yazın; geçersiz desenler sözdizimi hatası mesajı gösterir.',
      },
    ],
    examples: [
      {
        title: 'Düzenli ifade yakalama grubuyla yeniden biçimlendirme',
        input: 'Bul: Sipariş #(\\d+)  |  Değiştir: Ref-$1\nKaynak: Sipariş #1042 gönderildi.',
        output: 'Ref-1042 gönderildi.',
        explanation: 'Sayısal sipariş kimliğini korurken öneki değiştirmek için RegExp yakalama grubunu ($1) kullanır.',
      },
      {
        title: 'Marka adını belgede toplu değiştirme',
        input: 'Bul: EskiMarka  |  Değiştir: YeniMarka\nKaynak: EskiMarka 2026 raporunu yayımladı.',
        output: 'YeniMarka 2026 raporunu yayımladı.',
        explanation: 'Uzun bir belgedeki her marka adı oluşumunu tek geçişte değiştirir.',
      },
    ],
    benefits: [
      'Geçersiz RegExp desenleri için canlı eşleşme sayısı ve net sözdizimi hatası geri bildirimi gösterir',
      'Tam kelime seçeneği daha uzun kelimelerin içindeki kazara kısmi eşleşmeleri önler',
      'Yapılandırılmış metin yeniden yazımları için RegExp yakalama gruplarını ($1, $2) destekler',
      'Yerel çalışır; bu yüzden özel parçalar ve kimlik bilgileri cihazınızda kalır',
    ],
    useCases: [
      'Uzun belgelerde marka adlarını, URL adreslerini veya tarihleri değiştirme',
      'Düzenli ifade yakalama gruplarıyla kimlikleri veya tarihleri yeniden biçimlendirme',
      'Şablonlardaki ayırıcıları veya yer tutucu değişkenleri güncelleme',
      'Yayımlamadan önce tekrarlanan yazım hatalarını temizleme',
    ],
    faqs: [
      {
        question: 'RegExp modunda $1 gibi yakalama gruplarını kullanabilir miyim?',
        answer:
          'Evet. "Düzenli İfade Kullan (RegExp)" işaretliyken Bul alanındaki parantezli gruplara Değiştir alanında $1, $2 gibi başvurabilirsiniz.',
      },
      {
        question: 'RegExp modunda "Yalnızca tam kelime" neden devre dışı?',
        answer:
          'RegExp modunda kelime sınırlarını deseninizin içindeki \\b ile doğrudan kontrol edersiniz.',
      },
      {
        question: '"Değiştir" alanını boş bırakmak eşleşen metni siler mi?',
        answer:
          'Evet. Değiştir alanını boş bırakmak eşleşen her oluşumu temiz biçimde kaldırır; bu yüzden hâlâ ihtiyaç duyduğunuz metni silmemek için önce önizlemeyi kontrol edin.',
      },
      {
        question: 'Bul ve Değiştir aracı ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez, hesap gerekmez ve kaç değiştirme yapacağınıza dair sınır yoktur.',
      },
      {
        question: 'Bul ve Değiştir kullanırken metnim tarayıcımdan çıkıyor mu?',
        answer:
          'Hayır. Her şey tarayıcınızda yerel olarak çalışır; bu yüzden özel parçalar, belgeler ve kod cihazınızda kalır.',
      },
      {
        question: 'Canlı eşleşme sayısı neyi gösterir?',
        answer:
          'Bul teriminizin kaç oluşumunun değiştirildiğini gösterir; böylece değiştirmenin tam olarak beklediğiniz yerlere isabet ettiğini onaylayabilirsiniz.',
      },
      {
        question: 'Daha uzun kelimelerin parçalarını değil, yalnızca tam kelimeleri değiştirebilir miyim?',
        answer:
          'Evet. "Yalnızca tam kelime" seçeneğini açın; böylece "kedi" değiştirilir ama "kediler" olduğu gibi kalır; RegExp modunda bunun yerine \\b kelime sınırlarını kullanın.',
      },
      {
        question: 'Bul ve Değiştir büyük/küçük harfe duyarlı mı?',
        answer:
          'Yalnızca Büyük/küçük harfe duyarlı seçeneğini açarsanız. Kapalıyken "Elma" ve "elma" aynı eşleşme sayılır.',
      },
      {
        question: 'Birden fazla satırdaki metni tek seferde değiştirebilir miyim?',
        answer:
          'Evet. Araç yapıştırdığınız metnin tamamını tek geçişte işler; bu yüzden her satırdaki eşleşmeler birlikte değiştirilir.',
      },
      {
        question: 'Düzenli ifadem geçersizse ne olur?',
        answer:
          'Araç, hatalı çıktı üretmek yerine net bir sözdizimi hatası mesajı gösterir; bu yüzden bir şey kopyalamadan önce deseni düzeltebilirsiniz.',
      },
      {
        question: 'Bul ve Değiştir içinde satır sonu veya sekme gibi özel karakterleri eşleştirebilir miyim?',
        answer:
          'Evet, RegExp modunda deseninizin içinde satır sonu için \\n ve sekme için \\t gibi kaçışları kullanabilirsiniz.',
      },
      {
        question: 'Yakalama gruplarıyla iki kelimenin yerini değiştirebilir miyim?',
        answer:
          'Evet. Örneğin (\\w+) (\\w+) bulun ve $2 $1 ile değiştirerek "Ali Veli" ifadesini "Veli Ali" biçimine çevirin.',
      },
      {
        question: 'Eşleşen metnin tamamını değiştirmeye ekleyebilir miyim?',
        answer:
          'Evet. RegExp modunda Değiştir alanındaki $&, eşleşen metnin tamamını ekler; bu, eşleşmeleri tırnak veya etiket içine almak için kullanışlıdır.',
      },
      {
        question: 'Bütün bir belgedeki URL adreslerini veya tarihleri değiştirebilir miyim?',
        answer:
          'Evet. Belgenin tamamını yapıştırın ve tek bir Bul ve Değiştir geçişiyle her eski URL adresini, marka adını veya tarihi bir kerede değiştirin.',
      },
      {
        question: 'Bul ve Değiştir yalnızca ilk oluşumu mu yoksa hepsini mi değiştirir?',
        answer:
          'Yapıştırılan metindeki tüm eşleşmeleri bir kerede değiştirir; yalnızca bir oluşumu değiştirmek için sonucu kopyaladıktan sonra o yeri elle düzenleyin.',
      },
      {
        question: 'Bul ve Değiştir kod üzerinde çalışır mı?',
        answer:
          'Evet. Kod blokları, şablonlar ve yapılandırma parçaları üzerinde çalışır; bu yüzden değişkenleri toplu olarak yeniden adlandırabilir, yer tutucuları güncelleyebilir veya ayırıcıları değiştirebilirsiniz.',
      },
      {
        question: 'Tekrarlanan bir yazım hatasını Bul ve Değiştir ile düzeltebilir miyim?',
        answer:
          'Evet. Yanlış yazılan kelimeyi Bul alanına, doğru yazımı Değiştir alanına girin, ardından kaç yazım hatasının düzeltildiğini görmek için eşleşme sayısını kontrol edin.',
      },
      {
        question: 'Araç hangi düzenli ifade türünü kullanıyor?',
        answer:
          'Tarayıcılarda kullanılan aynı desen sözdizimiyle, yakalama grupları, karakter sınıfları ve niceleyicilerle JavaScript RegExp kullanır.',
      },
      {
        question: 'Hata yaparsam değiştirmeyi geri alabilir miyim?',
        answer:
          'Orijinal metniniz giriş alanında kalır; bu yüzden Bul veya Değiştir terimlerini değiştirebilirsiniz ve kaynak metninizi kaybetmeden çıktı güncellenir.',
      },
      {
        question: 'Bul ve Değiştir ile ne kadar metin işleyebilirim?',
        answer:
          'Belirli bir sınır yoktur. Tarayıcınızda yerel olarak çalışır ve uzun belgeleri işler; ancak çok büyük yapıştırmaların işlenmesi biraz zaman alabilir.',
      },
    ],
  },
  'text-reverser': {
    instructions: [
      {
        title: 'Ters çevirme modunu seçin',
        description:
          'Karakterleri Ters Çevir, Kelime Sırasını Ters Çevir, Her Kelimeyi Ters Çevir veya Satır Sırasını Ters Çevir seçeneklerinden birini belirleyin.',
      },
      {
        title: 'Metninizi girin',
        description:
          'Ters çevrilmiş çıktıyı hemen görmek için Orijinal Metin alanına metin yazın veya yapıştırın.',
      },
      {
        title: 'Canlı önizlemeyi kontrol edin',
        description:
          'Çıktı yazdıkça güncellenir; bu yüzden seçilen modun metninizi nasıl dönüştürdüğünü anında görebilirsiniz.',
      },
      {
        title: 'Modları yan yana karşılaştırın',
        description:
          'Aynı girdi üzerinde modlar arasında geçiş yaparak karakter ters çevirme, kelime sırası ters çevirme ve satır tersine çevirmeyi karşılaştırın.',
      },
      {
        title: 'Çıktıyı kopyalayın',
        description:
          'Dönüştürülen metni kopyalamak için Kopyala düğmesini kullanın, ardından belgenize, bulmacanıza veya mesajınıza yapıştırın.',
      },
      {
        title: 'Yanlış yönde dönen satırları düzeltin',
        description:
          'Yalnızca listenin çevrilmesini isterken her satırdaki kelimeler de döndüyse Satır Sırasını Ters Çevir seçeneğine geçin; bu, satırları içlerindeki metne dokunmadan taşır.',
      },
    ],
    examples: [
      {
        title: 'Ters çevirme modlarını karşılaştırma',
        input: 'Hello World',
        output: 'Karakterler: dlroW olleH · Kelime Sırası: World Hello · Her Kelime: olleH dlroW',
        explanation: 'Her modun karakter ve kelime yerleşimini nasıl değiştirdiğini gösterir.',
      },
      {
        title: 'Satır sırasını ters çevirme',
        input: 'Birinci satır\nİkinci satır\nÜçüncü satır',
        output: 'Üçüncü satır\nİkinci satır\nBirinci satır',
        explanation: 'Satır Sırasını Ters Çevir, listenin sırasını çevirirken satır içindeki kelimelere dokunmaz.',
      },
    ],
    benefits: [
      'Unicode güvenli karakter bölme, emojileri ve vekil çiftleri korur',
      'Dört farklı mod, hem dize çevirmeyi hem liste tersine çevirmeyi kapsar',
      'Yazdıkça canlı, sıfır tıklamalı önizleme',
      'Hafif, tarayıcıda çalışan yürütme',
    ],
    useCases: [
      'Kronolojik günlükleri veya listeleri eskiden yeniye yerine yeniden eskiye çevirme',
      'Palindrom dizeleri ve sağdan sola karakter uç durumlarını test etme',
      '"Ad Soyad" adı listelerini veya kelime dizilerini ters çevirme',
      'Bulmaca, şifre ve kelime oyunları oluşturma',
    ],
    faqs: [
      {
        question: 'Karakterleri Ters Çevir, emojileri veya aksanlı Unicode karakterleri bozar mı?',
        answer:
          'Araç, basit UTF-16 dizinleme yerine Array.from() kod noktası yinelemesi kullanır; bu yüzden çok baytlı karakterler ve standart emojiler bozulmadan kalır.',
      },
      {
        question: 'Kelimeleri ters çevirmeden bir satır listesini nasıl altüst ederim?',
        answer:
          'Alt satırı üste taşırken her satırın içindeki metni değiştirmeden bırakmak için "Satır Sırasını Ters Çevir" seçeneğini belirleyin.',
      },
      {
        question: '"Kelime Sırasını Ters Çevir" ile "Her Kelimeyi Ters Çevir" arasındaki fark nedir?',
        answer:
          '"Kelime Sırasını Ters Çevir", "bir iki üç" ifadesini "üç iki bir" yaparken "Her Kelimeyi Ters Çevir" kelime konumlarını korur ve harfleri çevirerek "rib iki çü" yapar.',
      },
      {
        question: 'Metin Ters Çevirici ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez, hesap gerekmez ve ne kadar metin ters çevireceğinize dair sınır yoktur.',
      },
      {
        question: 'Metin Ters Çevirici kullanırken metnim tarayıcımdan çıkıyor mu?',
        answer:
          'Hayır. Ters çevirme tarayıcınızda yerel olarak yapılır; bu yüzden metniniz asla yüklenmez veya saklanmaz.',
      },
      {
        question: 'Metin Ters Çeviricideki dört ters çevirme modu nedir?',
        answer:
          'Karakterleri Ters Çevir her karakteri çevirir, Kelime Sırasını Ters Çevir kelimelerin sırasını çevirir, Her Kelimeyi Ters Çevir her kelimenin içindeki harfleri yansıtır ve Satır Sırasını Ters Çevir satır dizisini tersine çevirir.',
      },
      {
        question: 'Metin Ters Çevirici ile bütün bir paragrafı ters çevirebilir miyim?',
        answer:
          'Evet. Paragrafı yapıştırıp bütün bloğu çevirmek için Karakterleri Ters Çevir seçeneğini, çok satırlı metni satır satır çevirmek için Satır Sırasını Ters Çevir seçeneğini belirleyin.',
      },
      {
        question: 'Metin Ters Çeviriciyi ayna etkisi oluşturmak için kullanabilir miyim?',
        answer:
          'Evet. Karakterleri Ters Çevir, geriye doğru okunan ayna görünümlü metin üretir; bu, bulmaca, şifre ve eğlenceli mesajlar için işe yarar.',
      },
      {
        question: 'Metin Ters Çevirici aksanlı harflerle çalışır mı?',
        answer:
          'Evet. Unicode karakterleri kod noktasına göre işler; bu yüzden é ve ü gibi aksanlı harfler parçalanmadan doğru biçimde ters çevrilir.',
      },
      {
        question: 'Metin Ters Çevirici başka dillerdeki metinlerle çalışır mı?',
        answer:
          'Evet. Dil kurallarıyla değil, karakter karakter ters çevirme yaptığı için Latin dışı alfabeler dahil her Unicode metinde çalışır.',
      },
      {
        question: 'Palindrom nedir ve Metin Ters Çevirici bunu kontrol etmeye yardımcı olur mu?',
        answer:
          'Palindrom, "racecar" gibi ileri ve geri aynı okunan kelimedir. Metninizi ters çevirip orijinaliyle karşılaştırarak kontrol edin.',
      },
      {
        question: 'Metin Ters Çeviriciyi bulmaca ve kelime oyunları için kullanabilir miyim?',
        answer:
          'Evet. Ters çevrilmiş kelimeler ve cümleler klasik bir bulmaca biçimidir ve canlı önizleme ipuçları ile yanıtları hızlıca oluşturmayı kolaylaştırır.',
      },
      {
        question: 'Metni ters çevirmek boşluk ekler veya kaldırır mı?',
        answer:
          'Karakterleri Ters Çevir, boşluklar dahil her şeyi ters çevirirken kelime tabanlı modlar kelimeler arasındaki tek boşlukları korur; böylece çıktı okunaklı kalır.',
      },
      {
        question: 'Çok uzun bir metin bloğunu ters çevirebilir miyim?',
        answer:
          'Evet. Tarayıcınızda yerel olarak çalışır ve uzun yapıştırmaları işler; ancak çok büyük blokların canlı önizlemede güncellenmesi biraz zaman alabilir.',
      },
      {
        question: 'Metin Ters Çevirici metnimi kaydediyor veya saklıyor mu?',
        answer:
          'Hayır. Hiçbir şey kaydedilmez veya sunucuya gönderilmez; metniniz yalnızca aracı kullanırken tarayıcı sekmenizde bulunur.',
      },
      {
        question: '"Ad Soyad" adlarını "Soyad Ad" biçimine nasıl çeviririm?',
        answer:
          'Kelime Sırasını Ters Çevir seçeneğini kullanın; bu, "Ali Veli" ifadesini her adı doğru yazımıyla "Veli Ali" yapar.',
      },
      {
        question: 'Metin Ters Çevirici sayıları ters çevirebilir mi?',
        answer:
          'Evet. Karakterleri Ters Çevir modunda "12345", "54321" olur; bu, sayısal dizeleri ve kodları test etmek için kullanışlıdır.',
      },
      {
        question: 'Karakterleri ters çevirirken satır sonlarına ne olur?',
        answer:
          'Satır sonları metnin geri kalanıyla birlikte ters çevrilir; bu yüzden satırlar da ters sıraya düşer; satırların çevrilmesini ama içlerindeki metnin değişmemesini istiyorsanız Satır Sırasını Ters Çevir seçeneğini kullanın.',
      },
      {
        question: 'Ters çevirmeyi geri alabilir miyim?',
        answer:
          'Evet. Orijinal metniniz giriş alanında kalır ve çıktıyı aynı modla ikinci kez ters çevirmek orijinal metni geri getirir.',
      },
      {
        question: 'Ters çevrilmiş metin okunabilir mi?',
        answer:
          'Hayır, ters çevrilmiş metin tasarım gereği geriye doğru okunur. Orijinal ifadeyi geri getirmek için metni araca geri yapıştırıp yeniden ters çevirin.',
      },
    ],
  },
  'lorem-ipsum-generator': {
    instructions: [
      {
        title: 'Birim ve miktarı seçin',
        description:
          'Paragraf, Cümle veya Kelime birimini belirleyip istediğiniz sayıyı girin.',
      },
      {
        title: 'Biçimlendirmeyi özelleştirin',
        description:
          'Klasik "Lorem ipsum dolor sit amet..." cümlesiyle başlayıp başlamayacağınızı ve paragrafları HTML <p> etiketleriyle sarıp sarmayacağınızı seçin.',
      },
      {
        title: 'Yer tutucu metni oluşturun',
        description:
          'Metin tarayıcınızda beklemeden ve ağ çağrısı olmadan anında oluşturulur.',
      },
      {
        title: 'Kelime ve karakter sayısını kontrol edin',
        description:
          'Oluşturulan metnin tasarımınıza uymadan önce düzeninize uyduğunu doğrulamak için canlı kelime ve karakter sayacını kullanın.',
      },
      {
        title: 'Yeniden oluşturun veya kopyalayın',
        description:
          'Yeni bir cümle varyasyonu için Yeniden Oluştur düğmesine tıklayın veya yer tutucu metni tasarımınıza yapıştırmak için Kopyala düğmesini kullanın.',
      },
      {
        title: 'Metin uzunluğunu düzeninize uydurun',
        description:
          'Bir kart taşar veya boş görünürse Kelime birimine geçip alana tam olarak uyan bir kelime sayısı oluşturun, ardından uyum doğru görünene kadar yeniden oluşturun.',
      },
    ],
    examples: [
      {
        title: 'HTML maket parçası',
        input: 'Birim: Paragraf · Miktar: 1 · <p> etiketleriyle sar: İşaretli',
        output: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>',
        explanation: 'Doğrudan HTML şablonlarına veya CMS kod görünümlerine yapıştırmaya hazırdır.',
      },
      {
        title: 'Tam kelime sayısıyla yer tutucu',
        input: 'Birim: Kelime · Miktar: 50 · Klasik açılış: Açık',
        output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... (50 kelime)',
        explanation: 'Kart yüksekliğini ve satır kaydırmayı tam kelime sayısıyla test etmek için idealdir.',
      },
    ],
    benefits: [
      'İstek üzerine tam kelime, cümle veya paragraf sayısı üretir',
      'İsteğe bağlı <p> etiketi sarma, ön yüz prototipleri için zaman kazandırır',
      'Canlı kelime ve karakter sayacı, yapıştırmadan önce düzen uyumunu doğrular',
      'Harici ağ çağrısı olmadan anında yeniden oluşturma',
    ],
    useCases: [
      'Duyarlı arayüz düzenlerinde kart yüksekliklerini ve satır kaydırmayı stres testinden geçirme',
      'Yazı tipi eşleşmelerini, satır yüksekliklerini ve ölçü genişliklerini önizleme',
      'Tel kafes şablonlarını ve editoryal sayfa maketlerini doldurma',
      'CSS bileşenlerinde kesilme ve taşma davranışını test etme',
    ],
    faqs: [
      {
        question: 'Paragraf yerine tam sayıda kelime oluşturabilir miyim?',
        answer:
          'Evet. Birim seçiciyi "Kelime" olarak değiştirip 500 kelimeye kadar herhangi bir sayı girin.',
      },
      {
        question: 'Tek bir cümleyi tekrarlamak yerine neden Lorem Ipsum kullanılır?',
        answer:
          'Klasik Latince yer tutucu metin, paydaşların dikkatini okunabilir metne çekmeden doğal İngilizce kelime uzunluğu dağılımına ve harf ritmine yaklaşır.',
      },
      {
        question: '<p> etiketi seçeneği Cümle ve Kelime modlarıyla çalışır mı?',
        answer:
          'Evet. Paragraf modunda her paragraf kendi <p>...</p> sarmalayıcısını alırken Cümle ve Kelime modlarında oluşturulan blok tek bir <p> öğesiyle sarılır.',
      },
      {
        question: 'Lorem Ipsum Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez, hesap gerekmez ve ne kadar yer tutucu metin oluşturacağınıza dair sınır yoktur.',
      },
      {
        question: 'Lorem Ipsum oluşturmak için hesap veya internet bağlantısı gerekir mi?',
        answer:
          'Hayır. Oluşturucu tamamen tarayıcınızda çalışır; kayıt ve ağ çağrısı yoktur, bu yüzden sayfa yüklendiğinde anında çalışır.',
      },
      {
        question: 'Lorem Ipsum nedir?',
        answer:
          'Lorem Ipsum, tasarımcıların gerçek metin hazır olmadan önce düzenleri doldurmak için basım dizgisi günlerinden beri kullandığı, karıştırılmış Latince benzeri yer tutucu metindir.',
      },
      {
        question: 'Tek bir Lorem Ipsum cümlesi oluşturabilir miyim?',
        answer:
          'Evet. Cümle birimini seçip 1 girin; oluşturucu tek bir yer tutucu cümle üretir.',
      },
      {
        question: 'Metnime klasik "Lorem ipsum dolor sit amet..." cümlesiyle başlayabilir miyim?',
        answer:
          'Evet. Klasik açılış seçeneğini açın; oluşturulan metniniz tanıdık "Lorem ipsum dolor sit amet..." cümlesiyle başlar.',
      },
      {
        question: 'Oluşturulan metni doğrudan HTML içine yapıştırabilir miyim?',
        answer:
          'Evet. <p> etiketi seçeneğini açın; çıktı HTML paragraf etiketleriyle sarılır ve şablonlara veya CMS kod görünümüne yapıştırmaya hazır olur.',
      },
      {
        question: 'Tam olarak 100 kelimelik Lorem Ipsum oluşturabilir miyim?',
        answer:
          'Evet. Kelime birimini seçip 100 girin; oluşturucu tam olarak 100 kelimelik yer tutucu metin üretir.',
      },
      {
        question: 'Oluşturulan Lorem Ipsum metni her zaman aynı mı?',
        answer:
          'Hayır. Yeni bir varyasyon üretmek için Yeniden Oluştur düğmesine tıklayın; farklı cümle yapılarıyla tekrarlanan bloklar aynı görünmez.',
      },
      {
        question: 'Lorem Ipsum gerçek Latince mi?',
        answer:
          'Hayır. Latince benzeri kelimelerden oluşan karıştırılmış sözde Latince metindir; gerçek bir dile benzese de gerçek bir anlam taşımaz.',
      },
      {
        question: 'Lorem Ipsum metnini yayımlanmış bir web sitesinde kullanabilir miyim?',
        answer:
          'Geçici yer tutucu metin olarak tasarlanmıştır; bu yüzden yayımlamadan önce gerçek içerikle değiştirin, aksi hâlde ziyaretçiler sahte metin görür.',
      },
      {
        question: 'Lorem Ipsum ne için kullanılır?',
        answer:
          'Tel kafesleri, maketleri ve prototipleri doldurur; böylece tasarımcılar son metni beklemeden tipografi, boşluk ve düzeni test edebilir.',
      },
      {
        question: 'Tek tek cümlelerin uzunluğunu kontrol edebilir miyim?',
        answer:
          'Hayır. Paragraf, cümle veya kelime olarak toplam sayıyı kontrol edersiniz; oluşturucu cümle uzunluklarını doğal olarak çeşitlendirir; ritim düzeninize uymazsa yeniden oluşturun.',
      },
      {
        question: 'Lorem Ipsum Oluşturucu baskı tasarımı için de çalışır mı?',
        answer:
          'Evet. Oluşturulan metni baskı araçlarına, slayt destelerine veya sayfa düzeni yazılımlarına kopyalayarak gerçek metnin tasarımda nasıl akacağını önizleyin.',
      },
      {
        question: 'Lorem Ipsum ile metin kesilmesini nasıl test ederim?',
        answer:
          'Alanınıza uyan tam kelime sayısını oluşturup bileşene yapıştırın ve metnin farklı ekran boyutlarında kesilip kesilmediğini veya taşırıp taşımadığını izleyin.',
      },
      {
        question: 'Başka bir dilde Lorem Ipsum oluşturabilir miyim?',
        answer:
          'Hayır. Araç yalnızca klasik Latince benzeri yer tutucu metni üretir; başka bir dilde okunabilir metin için gerçek metni yazın veya çevirin.',
      },
      {
        question: 'Lorem Ipsum Oluşturucu oluşturduğum metni kaydediyor mu?',
        answer:
          'Hayır. Her şey tarayıcınızda yerel olarak çalışır ve hiçbir şey saklanmaz veya sunucuya gönderilmez.',
      },
      {
        question: 'Yer tutucu metin müşterilerin tasarıma odaklanmasına neden yardımcı olur?',
        answer:
          'Okunabilir taslak metin dikkati kelimelerin kendisine çekerken tarafsız Lorem Ipsum, incelemecilerin düzene, tipografiye ve boşluklara odaklanmasını sağlar.',
      },
    ],
  },
  'readability-checker': {
    instructions: [
      {
        title: 'Makalenizi veya pasajınızı yapıştırın',
        description:
          'Düzenleyiciye en az bir tam cümle girin veya örnek metinle denemek için Örnek yükle düğmesine tıklayın.',
      },
      {
        title: 'Dört puan kartını kontrol edin',
        description:
          'Flesch Okuma Kolaylığı (0–100, yüksek olan daha kolay) ile Flesch-Kincaid, Gunning Fog ve SMOG sınıf düzeyi tahminlerini yan yana inceleyin.',
      },
      {
        title: 'Cümle ve hece dökümünü okuyun',
        description:
          'Her puanın arkasındaki cümle başına ortalama kelime, kelime başına hece ve uzun ya da karmaşık kelime sayısını inceleyin.',
      },
      {
        title: 'Karmaşık kelimeleri bulun',
        description:
          'Aracın işaretlediği 3 ve daha fazla heceli kelimelerin listesini tarayın ve hangilerini daha basit günlük kelimelerle değiştirebileceğinize dikkat edin.',
      },
      {
        title: 'Uzun cümleleri kısaltıp yeniden kontrol edin',
        description:
          'Yoğun, çok yan cümleli cümleleri bölün, gözden geçirilmiş metni geri yapıştırın ve puanların anında güncellendiğini izleyin.',
      },
      {
        title: 'Tuhaf sonuçları giderin',
        description:
          'Bir puan yanlış görünüyorsa eksik noktaları, kısaltmaları veya madde parçalarını kontrol edin; çünkü formüller cümle ve heceleri noktalama işaretlerinden sayar.',
      },
    ],
    examples: [
      {
        title: 'Sade dil kılavuzu',
        input: 'Kısa cümleler talimatları net tutar. Adımları açıklarken basit kelimeler kullanın.',
        output: 'Flesch Kolaylık ~78 (Oldukça Kolay) · Sınıf ~5.2',
        explanation: 'Daha kısa ortalama cümle uzunluğu ve daha az çok heceli kelime, daha yüksek okuma kolaylığı sağlar.',
      },
      {
        title: 'Yoğun akademik paragraf',
        input: 'Metodolojik çerçevenin uygulanması, değişkenler arasındaki karşılıklı bağımlılıkların kapsamlı bir şekilde değerlendirilmesini gerektirmektedir.',
        output: 'Flesch Kolaylık ~25 (Çok Zor) · Sınıf ~16',
        explanation: 'Uzun cümleler ve çok heceli kelimeler okuma kolaylığını düşürür ve sınıf düzeyini yükseltir.',
      },
    ],
    benefits: [
      'Dört yaygın okunabilirlik endeksini aynı anda hesaplar',
      'Pasajınızda bulunan 3 ve daha fazla heceli kelime örneklerini listeler',
      'Cümle başına tam ortalama kelime ve kelime başına hece sayısını gösterir',
      'Yayımlanmamış taslaklar için tarayıcı belleğinde tamamen çevrimdışı çalışır',
    ],
    useCases: [
      'Belgeleri, arayüz metinlerini ve yardım merkezi makalelerini netlik için düzenleme',
      'Eğitim materyallerini hedef öğrenci sınıf düzeyine göre kontrol etme',
      'Yasal, sağlık veya finansal müşteri iletişimlerini sadeleştirme',
      'Blog yazılarının ve açılış sayfalarının taranabilirliğini iyileştirme',
    ],
    faqs: [
      {
        question: 'Web makaleleri için iyi bir Flesch Okuma Kolaylığı puanı nedir?',
        answer:
          'Çoğu genel kitleye yönelik web içeriği, kabaca 7. ile 9. sınıf okuma düzeyine karşılık gelen 60 ile 75 arasında bir Flesch Okuma Kolaylığı puanı hedefler.',
      },
      {
        question: 'Düşük bir okunabilirlik puanını nasıl yükseltebilirim?',
        answer:
          'Uzun, çok yan cümleli cümleleri daha kısa ifadelere bölün ve gereksiz 3 ve daha fazla heceli jargonu somut, günlük kelimelerle değiştirin.',
      },
      {
        question: 'Araç SMOG için neden cümle sayısından söz ediyor?',
        answer:
          'Standart SMOG formülü çok cümleli örneklere dayanır; bu yüzden 1–2 cümlelik kısa parçalar, 3 veya daha fazla cümle sağlanana kadar ölçeklenmiş bir tahmin kullanır.',
      },
      {
        question: 'Okunabilirlik Denetleyici ne için kullanılır?',
        answer:
          'Dört standart okunabilirlik formülünü hesaplayarak ve cümle ile hece istatistiklerini göstererek bir pasajın ne kadar kolay anlaşıldığını ölçer.',
      },
      {
        question: 'Okunabilirlik Denetleyici ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tarayıcınızda çalışır, bu yüzden metniniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Flesch-Kincaid Sınıf Düzeyi nedir?',
        answer:
          'Bir metni anlamak için gereken ABD okul sınıfını tahmin eder; örneğin 8.0 puanı, sekizinci sınıf öğrencisinin metni rahatça okuyabilmesi gerektiği anlamına gelir.',
      },
      {
        question: 'Gunning Fog Endeksi neyi ölçer?',
        answer:
          'Bir pasajı ilk okuyuşta anlamak için gereken resmî eğitim yılını, cümle uzunluğuna ve karmaşık kelimelerin payına dayanarak tahmin eder.',
      },
      {
        question: 'SMOG endeksi nedir?',
        answer:
          'SMOG endeksi, bir metni tam olarak anlamak için gereken eğitim yılını, cümle örneğindeki çok heceli kelimeleri sayarak tahmin eder.',
      },
      {
        question: 'Hangi Flesch Okuma Kolaylığı puanını hedeflemeliyim?',
        answer:
          'Genel kitleler genellikle 60–70 hedefler; sade dilde kamu içeriği genellikle 70 veya daha yüksek hedefler; uzmanlara yönelik teknik yazılar daha düşük puan alabilir.',
      },
      {
        question: 'Doğru okunabilirlik puanları için kaç kelime gerekir?',
        answer:
          'En az 100 kelimelik daha uzun örnekler daha güvenilir sonuçlar verir; ancak araç, ölçeklenmiş bir SMOG tahminiyle daha kısa pasajlarda da çalışır.',
      },
      {
        question: 'Okunabilirlik Denetleyici metnimi saklıyor veya yüklüyor mu?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır; bu yüzden taslaklar, yayımlanmamış makaleler ve özel belgeler cihazınızda kalır.',
      },
      {
        question: 'Dört puan neden birbirinden farklı?',
        answer:
          'Her formül cümle uzunluğunu ve hece sayılarını farklı ağırlıklandırır; bu yüzden onları tek bir kesin sınıf yerine birbirini tamamlayan tahminler olarak değerlendirin.',
      },
      {
        question: 'Okunabilirlik Denetleyicide heceler nasıl sayılıyor?',
        answer:
          'Araç heceleri her kelimedeki harflerden tahmin eder; bu, çoğu yaygın İngilizce kelime için doğrudur ama alışılmadık adları, kısaltmaları veya teknik terimleri yanlış sayabilir.',
      },
      {
        question: 'İngilizce dışı metinlerin okunabilirliğini kontrol edebilir miyim?',
        answer:
          'Dört formül İngilizce için tasarlanmıştır; bu yüzden diğer dillerdeki puanlar yanıltıcı olabilir, araç bunları yine de hesaplar.',
      },
      {
        question: 'Karmaşık kelime ne sayılır?',
        answer:
          'Karmaşık kelime genellikle üç veya daha fazla heceli kelimedir; yaygın ekler ve özel adlar hariç tutulur ve araç pasajınızda bulduğu örnekleri listeler.',
      },
      {
        question: 'Noktalama işaretleri okunabilirlik puanımı etkiler mi?',
        answer:
          'Evet. Cümle sınırları nokta, soru işareti ve ünlem işaretlerinden gelir; bu yüzden eksik noktalama cümleleri birleştirip sonuçları bozabilir.',
      },
      {
        question: 'Okunabilirlik Denetleyici SEO için yardımcı olur mu?',
        answer:
          'Daha net ve okunması kolay içerik ziyaretçileri daha uzun süre meşgul eder; bu da SEO yu dolaylı olarak destekler, ancak okunabilirlik birçok sıralama faktöründen yalnızca biridir.',
      },
      {
        question: 'Daha yüksek bir Flesch Okuma Kolaylığı puanı her zaman daha mı iyidir?',
        answer:
          'Her zaman değil. Puanı hedef kitlenize uydurun: basit talimatlar yüksek puan almalı, uzman akademik veya yasal okuyucular ise daha yoğun bir dil bekleyebilir.',
      },
      {
        question: 'Başlık ekleyince puanım neden değişiyor?',
        answer:
          'Puanlar yapıştırdığınız metnin tamamından hesaplanır; bu yüzden başlıkları, gezinme etiketlerini veya kod parçalarını dahil etmek ortalamaları kaydırabilir; en tutarlı sonuç için yalnızca gövde metnini kontrol edin.',
      },
      {
        question: 'Okunabilirlik Denetleyiciyi öğrenci makaleleri için kullanabilir miyim?',
        answer:
          'Evet. Öğretmenler ve öğrenciler, bir makalenin göndermeden önce hedeflenen sınıf düzeyine uyup uymadığını kontrol etmek için kullanabilir.',
      },
    ],
  },
  'word-frequency-counter': {
    instructions: [
      {
        title: 'İçeriğinizi yapıştırın',
        description:
          'Makale taslağı, transkript, ürün metni veya anket yanıtlarını metin kutusuna girin.',
      },
      {
        title: '1 kelimelik, 2 kelimelik veya 3 kelimelik öbekleri seçin',
        description:
          'Tekil terimleri veya tekrarlanan öbekleri görmek için tek kelimeler ile çok kelimeli n-gramlar arasında geçiş yapın.',
      },
      {
        title: 'Durak kelimeleri filtreleyin ve minimum uzunluğu ayarlayın',
        description:
          '"ve" ile "bir" gibi dolgu kelimelerini gizlemek için durak kelime dışlamayı açın ve anlamlı terimlere odaklanmak için minimum kelime uzunluğunu yükseltin.',
      },
      {
        title: 'Sayıları ve yoğunluk yüzdelerini inceleyin',
        description:
          'Hangi kelime ve öbeklerin en sık geçtiğini ve her birinin metnin ne kadarını oluşturduğunu görmek için tabloyu sıralayın.',
      },
      {
        title: 'Aşırı kullanımı veya anahtar kelime doldurmayı tespit edin',
        description:
          'En sık geçen terimlerinizi hedef anahtar kelimelerinizle karşılaştırın ve bir terimin metne hâkim olduğu pasajları yeniden yazın.',
      },
      {
        title: 'Sonuçları CSV olarak kopyalayın veya dışa aktarın',
        description:
          'Tabloyu elektronik tablo için indirmek üzere CSV Olarak Dışa Aktar düğmesine tıklayın veya doğrudan rapora yapıştırmak için CSV Kopyala seçeneğini kullanın.',
      },
    ],
    examples: [
      {
        title: 'Öbek yoğunluğu kontrolü',
        input: 'Hızlı sayfalar kullanıcı etkileşimini ve sayfa hızını artırır.',
        output: 'sayfa: 2 · sayfa hızı: 1 · kullanıcı etkileşimi: 1',
        explanation: 'Tekil terim sıklığını ve çok kelimeli konu öbeklerini birlikte ortaya çıkarır.',
      },
      {
        title: 'Konuşma transkriptinde tekrarlanan ifadeler',
        input: 'Aslında bu proje aslında çok önemli. Aslında hepimiz bunu biliyoruz.',
        output: 'aslında: 3 · bu proje: 1',
        explanation: 'Konuşmacının fark etmeden tekrarladığı sözlü tikleri ve öbekleri gösterir.',
      },
    ],
    benefits: [
      '1 kelimelik, 2 kelimelik ve 3 kelimelik n-gram analizini destekler',
      'İsteğe bağlı durak kelime filtresi "ve" ile "bir" gibi dolgu kelimelerini kaldırır',
      'Ayarlanabilir minimum kelime uzunluğu eşiği',
      'Elektronik tablolar için hazır temiz CSV tabloları dışa aktarır',
    ],
    useCases: [
      'İstemeden anahtar kelime doldurmayı önlemek için makale taslaklarını kontrol etme',
      'Konuşmalarda veya transkriptlerde tekrarlanan sözlü tikleri tespit etme',
      'Müşteri geri bildirimlerinde veya anket yanıtlarında yinelenen temaları belirleme',
      'Açılış sayfası metinlerinde çok kelimeli öbek dengesini karşılaştırma',
    ],
    faqs: [
      {
        question: 'Anahtar kelime yoğunluğu yüzdesi nasıl hesaplanıyor?',
        answer:
          'Yoğunluk, (terim oluşumu × öbekteki kelime sayısı ÷ metindeki toplam kelime) × 100 formülüyle bulunur; bu, belgenin doğru payını verir.',
      },
      {
        question: 'Durak kelime nedir?',
        answer:
          'Durak kelimeler, genellikle sıklık analizlerinde çok az konu anlamı taşıyan "ve", "bir", "de", "da" gibi yüksek sıklıklı dilbilgisi kelimeleridir.',
      },
      {
        question: 'Sıklık sonuçlarını Excel veya Google E-Tablolar uygulamasına aktarabilir miyim?',
        answer:
          'Evet. Standart virgülle ayrılmış bir dosya indirmek için "CSV Olarak Dışa Aktar" düğmesine tıklayın veya doğrudan yapıştırmak için "CSV Kopyala" seçeneğini kullanın.',
      },
      {
        question: 'Kelime Sıklığı Sayacı ne için kullanılır?',
        answer:
          'Bir metinde her kelime veya öbeğin ne sıklıkla geçtiğini sayar; böylece tekrarları tespit edebilir, anahtar kelime dengesini kontrol edebilir ve yinelenen temaları bulabilirsiniz.',
      },
      {
        question: 'Kelime Sıklığı Sayacı ücretsiz mi?',
        answer:
          'Evet, ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır, bu yüzden metniniz asla yüklenmez.',
      },
      {
        question: 'Anahtar kelime yoğunluğu nedir ve neden önemlidir?',
        answer:
          'Anahtar kelime yoğunluğu, bir metnin belirli bir terimden oluşan yüzdesidir; doğal bir yoğunluk arama motorlarının konuyu anlamasına yardımcı olurken doğal olmayan yüksek bir yoğunluk doldurma gibi görünür.',
      },
      {
        question: 'İyi bir anahtar kelime yoğunluğu yüzdesi nedir?',
        answer:
          'Resmî bir hedef yoktur, ancak çoğu editör ana anahtar kelime için doğal %1–2 hedefler ve bir sayıyı tutturmak yerine okunabilir, faydalı yazmaya odaklanır.',
      },
      {
        question: 'Kelime Sıklığı Sayacında n-gram nedir?',
        answer:
          'N-gramlar, "sayfa hızı" veya "kullanıcı etkileşimi" gibi tek öbek olarak sayılan bir, iki veya üç ardışık kelime dizileridir.',
      },
      {
        question: '2 kelimelik ve 3 kelimelik öbekleri neden analiz etmeliyim?',
        answer:
          'Tek kelimeler yanıltıcı olabilirken çok kelimeli öbekler içeriğinizdeki gerçek konuları ve tekrarlanan ifadeleri ortaya çıkarır.',
      },
      {
        question: 'Durak kelime filtresi nasıl çalışır?',
        answer:
          'Açıldığında "ve", "bir" ve "de" gibi yaygın dilbilgisi kelimelerini kaldırır; böylece tablo dolgu yerine konu kelimelerini vurgular.',
      },
      {
        question: 'Hangi kelimelerin durak kelime sayıldığını değiştirebilir miyim?',
        answer:
          'Araç, yaygın İngilizce durak kelimelerin yerleşik bir listesini kullanır ve tam tabloyu görmek istediğinizde filtreyi açıp kapatabilirsiniz.',
      },
      {
        question: 'Minimum kelime uzunluğu ayarı ne yapar?',
        answer:
          'Seçtiğiniz uzunluktan kısa kelimeleri dışarıda bırakır; bu, kısaltmaları ve tek harfleri sıklık tablosundan gizlemeye yardımcı olur.',
      },
      {
        question: 'Kelime Sıklığı Sayacı metnimi yüklüyor mu?',
        answer:
          'Hayır. Tüm sayımlar tarayıcınızda yerel olarak yapılır; bu yüzden özel taslaklar ve transkriptler cihazınızda kalır.',
      },
      {
        question: 'Uzun bir belgede kelime sıklığını sayabilir miyim?',
        answer:
          'Evet. Uzun makaleleri veya transkriptleri yapıştırın; araç her oluşumu sayar, ancak çok büyük metinlerin işlenmesi biraz zaman alabilir.',
      },
      {
        question: 'Öbekler için yoğunluk yüzdesi nasıl hesaplanıyor?',
        answer:
          'Yoğunluk, öbek oluşumlarının öbekteki kelime sayısıyla çarpılıp metindeki toplam kelimeye bölünmesi ve ardından 100 ile çarpılmasıyla bulunur.',
      },
      {
        question: 'Kelime Sıklığı Sayacı transkriptteki tekrarlanan öbekleri bulabilir mi?',
        answer:
          'Evet. Konuşmacının fark etmeden tekrarladığı sözlü tikleri ve öbekleri ortaya çıkarmak için 2 kelimelik veya 3 kelimelik moda geçin.',
      },
      {
        question: 'Noktalama işaretleri kelime sayılarını etkiler mi?',
        answer:
          'Araç, saymadan önce noktalama işaretlerini atar; bu yüzden "hız," ile "hız" aynı kelime olarak sayılır.',
      },
      {
        question: 'Büyük ve küçük harfli kelimeler birlikte mi sayılıyor?',
        answer:
          'Evet. Kelimeler sayılmadan önce küçük harfe çevrilir; bu yüzden "Sayfa" ile "sayfa" tek terim olarak sayılır.',
      },
      {
        question: 'Sıklık tablosunu Excel uygulamasına aktarabilir miyim?',
        answer:
          'Evet. Excel veya Google E-Tablolar uygulamasında doğrudan açılan bir dosya indirmek için CSV Olarak Dışa Aktar seçeneğini kullanın veya tabloyu her yere yapıştırmak için CSV Kopyala seçeneğini kullanın.',
      },
      {
        question: 'Kelime sıklığını yazımı iyileştirmek için nasıl kullanabilirim?',
        answer:
          'İstemeden tekrarladığınız kelimeleri arayın, onları çeşitli eş anlamlılarla değiştirin ve ana konu anahtar kelimelerinizin tutarlı ama doğal biçimde geçtiğini kontrol edin.',
      },
    ],
  },
  'text-to-slug': {
    instructions: [
      {
        title: 'Bir veya daha fazla başlık girin',
        description:
          'Tek bir başlık yazın veya toplu modda her biri için slug oluşturmak üzere birden fazla satır yapıştırın.',
      },
      {
        title: 'Ayırıcı seçin',
        description:
          'SEO dostu URL adresleri için tire (-) veya dosya adları ile veritabanı anahtarları için alt çizgi (_) belirleyin.',
      },
      {
        title: 'Küçük harf ve durak kelimeleri ayarlayın',
        description:
          'Temiz URL adresleri için küçük harf zorunluluğunu koruyun ve daha kısa sluglar için isteğe bağlı olarak "ve" ile "bir" gibi yaygın durak kelimeleri çıkarın.',
      },
      {
        title: 'Oluşturulan slugları inceleyin',
        description:
          'Her slugın net okunduğunu, anahtar kelimelerini koruduğunu ve başıboş noktalama işareti veya çift ayırıcı içermediğini kontrol edin.',
      },
      {
        title: 'Slugları CMS sisteminize veya kodunuza kopyalayın',
        description:
          'Tek tek slugları veya bütün toplu listeyi içerik sisteminize, yönlendirme tablonuza veya dosya adlarınıza kopyalayın.',
      },
      {
        title: 'Yanlış görünen slugı düzeltin',
        description:
          'Bir karakter tuhaf biçimde kaldıysa orijinal başlıktaki alışılmadık sembolleri veya Latin dışı alfabeyi kontrol edin ve yeniden dönüştürmeden önce başlığı sadeleştirin.',
      },
    ],
    examples: [
      {
        title: 'Aksanlı başlık normalleştirme',
        input: 'Café & Crème: 2026 Rehberi!',
        output: 'cafe-and-creme-2026-rehberi',
        explanation: 'Aksanlı Latin harflerini çevirir, "&" işaretini "and" olarak genişletir ve noktalama işaretlerini atar.',
      },
      {
        title: 'Toplu başlık dönüştürme',
        input: 'Görsel Sıkıştırma Rehberi\nPDF Dönüştürücü\nÜcretsiz Araçlar',
        output: 'gorsel-sikistirma-rehberi\npdf-donusturucu\nucretsiz-araclar',
        explanation: 'Her satırı tek geçişte kendi slugına dönüştürür; Türkçe karakterler ASCII karşılıklarına çevrilir.',
      },
    ],
    benefits: [
      'Aksanlı karakterleri (é, ñ, ü) temiz ASCII karşılıklarına normalleştirir',
      'Tek geçişte toplu çok satırlı dönüştürmeyi destekler',
      'Daha kısa URL adresleri için isteğe bağlı durak kelime çıkarma sunar',
      '"&" işaretini anlamı düşürmeden "and" ile temiz biçimde değiştirir',
    ],
    useCases: [
      'Okunabilir blog yazısı ve belge URL adresleri oluşturma',
      'İndirilebilir öğeler ve görseller için tutarlı dosya adları oluşturma',
      'Statik siteler ve e-ticaret katalogları için rota sluglarını toplu hazırlama',
      'Veritabanlarındaki kategori veya etiket tanımlayıcılarını standartlaştırma',
    ],
    faqs: [
      {
        question: 'URL sluglarında tire mi yoksa alt çizgi mi kullanmalıyım?',
        answer:
          'Arama motorları genellikle URL adreslerinde kelime ayırıcı olarak tire (-) önerirken alt çizgi (_) dosya adları veya veritabanı anahtarları için yaygındır.',
      },
      {
        question: 'Araç "café" gibi aksanlı karakterleri nasıl ele alıyor?',
        answer:
          'Aksan işaretlerini ayırmak ve temiz biçimde atmak için Unicode NFD normalleştirmesi uygular; bu, "café" ifadesini harfi silmek yerine "cafe" yapar.',
      },
      {
        question: '50 başlığı tek seferde dönüştürebilir miyim?',
        answer:
          'Evet. Her satıra bir başlık yapıştırın; her satır sağ tarafta kendi slugına dönüşür.',
      },
      {
        question: 'Metin → Slug Dönüştürücü nedir?',
        answer:
          'Bir başlığı veya ifadeyi küçük harfe çevirerek, noktalama işaretlerini kaldırarak ve boşlukları tire veya alt çizgiyle değiştirerek temiz, URL uyumlu bir sluga dönüştürür.',
      },
      {
        question: 'Metin → Slug Dönüştürücü ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tarayıcınızda çalışır, bu yüzden başlıklarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Bir slugı SEO dostu yapan nedir?',
        answer:
          'İyi bir slug kısa, okunabilir, küçük harfli ve sayfayı tanımlayan gerçek kelimelerden oluşur; kelimeler tireyle ayrılır.',
      },
      {
        question: 'URL slugı ne kadar uzun olmalı?',
        answer:
          'Üç ila beş anlamlı kelime hedefleyin; daha uzun sluglar arama sonuçlarında kesilir ve okuyucuların hatırlaması zorlaşır.',
      },
      {
        question: 'Sluglar neden küçük harflidir?',
        answer:
          'Küçük harfli URL adresleri yinelenen içerik sorunlarını önler; çünkü bazı sunucular "/Rehber" ile "/rehber" adreslerini farklı sayfalar olarak ele alır.',
      },
      {
        question: 'Sluglardaki sayılara ne olur?',
        answer:
          'Sayılar olduğu gibi korunur; bu yüzden "2026 Rehberi" gibi bir başlık "2026-rehberi" olur.',
      },
      {
        question: 'Sluglardaki özel karakterler nasıl işlenir?',
        answer:
          'Noktalama işaretleri ve semboller kaldırılır, "&" işareti "and" olur ve é gibi aksanlı harfler düz ASCII karşılıklarına çevrilir.',
      },
      {
        question: 'Metin → Slug Dönüştürücü İngilizce dışı başlıkları işleyebilir mi?',
        answer:
          'Latin tabanlı aksanlı karakterler temiz biçimde çevrilir, ancak Latin dışı alfabeler atılabilir; bu yüzden yayımlamadan önce çıktıyı kontrol edin.',
      },
      {
        question: 'Slugdaki durak kelime nedir?',
        answer:
          'Durak kelimeler, anlam katmadan uzunluk ekleyen "bir", "ve" ve "ile" gibi yaygın kelimelerdir; bunları kaldırmak daha kısa, temiz URL adresleri sağlar.',
      },
      {
        question: 'Her slugdan durak kelimeleri kaldırmalı mıyım?',
        answer:
          'Her zaman değil. "Nasıl yapılır" kılavuzlarında olduğu gibi netlik için gerekli olduklarında koruyun ve yalnızca slug onlar olmadan da okunabilir kaldığında kaldırın.',
      },
      {
        question: 'Birçok başlığı tek seferde dönüştürebilir miyim?',
        answer:
          'Evet. Her satıra bir başlık yapıştırın; araç tek geçişte her satır için eşleşen bir slug oluşturur.',
      },
      {
        question: 'Metin → Slug Dönüştürücü başlıklarımı yüklüyor mu?',
        answer:
          'Hayır. Tüm dönüştürme tarayıcınızda yerel olarak yapılır; bu yüzden yayımlanmamış başlıklar ve ürün adları gizli kalır.',
      },
      {
        question: 'Sluglarımda neden çift tire var?',
        answer:
          'Çift tireler genellikle orijinal başlıktaki ardışık noktalama işaretlerinden veya boşluklardan gelir; başlığı temizleyin veya fazla noktalama işaretini kaldırıp yeniden dönüştürün.',
      },
      {
        question: 'Slugları dosya adları için de kullanabilir miyim?',
        answer:
          'Evet. Sluglar güvenli, okunabilir dosya adları oluşturur ve alt çizgi ayırıcı seçeneği dosya sistemleri ile veritabanı anahtarlarına uygundur.',
      },
      {
        question: 'Slug ile URL arasındaki fark nedir?',
        answer:
          'Slug, "gorsel-sikistirma-rehberi" gibi bir URL adresinin okunabilir son bölümüdür; örneğin ornek.com/gorsel-sikistirma-rehberi adresinde olduğu gibi.',
      },
      {
        question: 'Sluglar arama sıralamalarını etkiler mi?',
        answer:
          'Net bir slug, arama motorlarının ve okuyucuların bir sayfayı bir bakışta anlamasına yardımcı olur; ancak SEO nun yalnızca küçük bir parçasıdır.',
      },
      {
        question: 'Bir sayfayı yayımladıktan sonra slugı değiştirebilir miyim?',
        answer:
          'Evet, ancak mevcut bağlantılar ve arama listeleri bozulmasın diye eski URL adresinden yeni URL adresine bir yönlendirme ayarlayın.',
      },
    ],
  },
  'markdown-previewer': {
    instructions: [
      {
        title: 'Markdown yazın veya yapıştırın',
        description:
          'Sol bölmede standart sözdizimini (# başlıklar, **kalın**, *italik*, listeler, alıntılar, bağlantılar ve çitli kod blokları) kullanın.',
      },
      {
        title: 'Canlı önizlemeyi izleyin',
        description:
          'Sağ bölme, yazdıkça biçiminizi anında işler; bu yüzden başlıkları, listeleri ve bağlantıları yenilemeden kontrol edebilirsiniz.',
      },
      {
        title: 'Ham HTML sekmesine geçin',
        description:
          'Önizlemenin üzerine kurulu olduğu derlenmiş HTML işaretlemesini incelemek için sağ bölmenin üzerindeki düğmeyi değiştirin.',
      },
      {
        title: 'Kod bloklarını ve bağlantıları kontrol edin',
        description:
          'Çitli kod bloklarının doğru işlendiğini ve bağlantıların beklediğiniz yere gittiğini doğrulamak için önizlemede gezinin.',
      },
      {
        title: 'HTML kopyalayın veya dosya olarak dışa aktarın',
        description:
          'CMS sistemine veya e-postaya yapıştırmak için bir parça almak üzere HTML Kopyala düğmesine tıklayın veya bağımsız bir HTML5 belgesi indirmek için HTML Olarak Dışa Aktar seçeneğini kullanın.',
      },
      {
        title: 'Yanlış görünen biçimi düzeltin',
        description:
          'Bir liste veya kod bloğu işlenmiyorsa öncesinde eksik boş satır veya kapatılmamış ters tik çiti olup olmadığını kontrol edin, ardından önizlemeyi yeniden denetleyin.',
      },
    ],
    examples: [
      {
        title: 'Başlık ve liste dönüştürme',
        input: '## Kontrol Listesi\n- **Bağlantıları** doğrula\n- Taslağı yayımla',
        output: '<h2>Kontrol Listesi</h2><ul><li><strong>Bağlantıları</strong> doğrula</li><li>Taslağı yayımla</li></ul>',
        explanation: 'Temiz Markdown sözdizimini doğrudan anlamlı HTML öğelerine dönüştürür.',
      },
      {
        title: 'Kod bloğu ve bağlantı önizlemesi',
        input: 'Kurulum için [belgelere](https://ornek.com) bakın.\n\n```js\nconst toplam = 1 + 2;\n```',
        output: '<p>Kurulum için <a href="https://ornek.com">belgelere</a> bakın.</p><pre><code class="language-js">const toplam = 1 + 2;</code></pre>',
        explanation: 'Bağlantıları tıklanabilir yapar ve dil etiketli kod bloklarını biçimlendirilmiş kod olarak işler.',
      },
    ],
    benefits: [
      'Ham HTML etiketlerini kaçış karakteriyle işler ve güvenli olmayan önizleme işaretlemesini önlemek için bağlantı şemalarını temizler',
      'Başlıkları, kalın/italik, üstü çizili, alıntıları, listeleri, bağlantıları ve kod bloklarını destekler',
      'Görsel önizleme ile ham HTML kaynağı arasında zahmetsizce geçiş yapar',
      'Tek tıkla eksiksiz bağımsız .html dosyası indirir',
    ],
    useCases: [
      'İşlemeden önce GitHub README.md dosyalarını önizleme',
      'Markdown notlarını e-posta veya CMS blokları için temiz HTML biçimine dönüştürme',
      'Teknik eğitimleri ve sürüm notlarını çevrimdışı taslak olarak hazırlama',
      'Bağlantı ve kod çiti biçimlendirmesini hızlıca kontrol etme',
    ],
    faqs: [
      {
        question: 'Markdown Önizleyici gömülü JavaScript çalıştırır mı?',
        answer:
          'Hayır. Girdideki ham HTML etiketleri kaçış karakteriyle işlenir ve bağlantı protokolleri güvenli web, göreli, çapa ve mailto şemalarıyla sınırlandırılır.',
      },
      {
        question: 'HTML kalıp metni olmadan yalnızca derlenmiş HTML parçasını kopyalayabilir miyim?',
        answer:
          'Evet. "HTML Kopyala" düğmesi derlenmiş HTML gövde işaretlemesini kopyalarken "HTML Olarak Dışa Aktar" bunu bağımsız bir HTML5 belgesine sarar.',
      },
      {
        question: 'Çitli kod blokları destekleniyor mu?',
        answer:
          'Evet. Çok satırlı kod parçalarını üçlü ters tik (```) içine alarak biçimlendirilmiş <pre><code> blokları olarak işleyin.',
      },
      {
        question: 'Markdown Önizleyici nedir?',
        answer:
          'Markdown metnini gerçek zamanlı olarak biçimlendirilmiş HTML biçimine işler; böylece başlıkların, listelerin, bağlantıların ve kodun yayımlamadan önce nasıl görüneceğini tam olarak görebilirsiniz.',
      },
      {
        question: 'Markdown Önizleyici ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tarayıcınızda çalışır, bu yüzden taslaklarınız asla yüklenmez.',
      },
      {
        question: 'Önizleyici hangi Markdown sözdizimini destekliyor?',
        answer:
          'Başlıkları, kalın, italik, üstü çizili, alıntıları, sıralı ve sırasız listeleri, bağlantıları, görselleri ve çitli kod bloklarını destekler.',
      },
      {
        question: 'Bu araçla bir GitHub README dosyasını önizleyebilir miyim?',
        answer:
          'Evet. İşlemeden önce GitHub üzerinde nasıl işleneceğini kontrol etmek için README.md içeriğinizi düzenleyiciye yapıştırın.',
      },
      {
        question: 'Markdown Önizleyici tabloları destekliyor mu?',
        answer:
          'Tablo desteği Markdown türüne bağlıdır; boru tablolarınızın işlenip işlenmediğini önizlemede kontrol edin ve işlenmiyorsa sadeleştirin.',
      },
      {
        question: 'HTML Kopyala ile HTML Olarak Dışa Aktar arasındaki fark nedir?',
        answer:
          'HTML Kopyala, başka yere yapıştırmak için yalnızca derlenmiş gövde işaretlemesini kopyalar; HTML Olarak Dışa Aktar ise eksiksiz bağımsız bir HTML5 belgesi indirir.',
      },
      {
        question: 'Dışa aktarılan HTML eksiksiz bir web sayfası mı?',
        answer:
          'Evet. Dışa aktarma, içeriğinizi head ve body etiketleriyle tam bir HTML5 belgesine sarar; her tarayıcıda açılmaya hazırdır.',
      },
      {
        question: 'Markdown Önizleyici girdimdeki JavaScript kodunu çalıştırır mı?',
        answer:
          'Hayır. Ham HTML etiketleri kaçış karakteriyle işlenir ve bağlantı protokolleri güvenli web, göreli, çapa ve mailto şemalarıyla sınırlandırılır.',
      },
      {
        question: 'Markdown Önizleyiciyi çevrimdışı kullanabilir miyim?',
        answer:
          'Düzenleyici ve önizleme yükleme olmadan tamamen tarayıcınızda çalışır; bu yüzden çalışırken taslaklarınız cihazınızda kalır.',
      },
      {
        question: 'Markdown Önizleyici çalışmamı kaydediyor mu?',
        answer:
          'Araç metninizi hiçbir sunucuda saklamaz; bu yüzden önemli bir şeyi sekme kapatmadan önce kopyalayın veya dışa aktarın.',
      },
      {
        question: 'Markdown içinde görsel nasıl eklerim?',
        answer:
          '![alternatif metin](görsel-url) sözdizimini kullanın; URL erişilebilir olduğunda görsel önizlemede işlenir.',
      },
      {
        question: 'Kod bloğum neden işlenmiyor?',
        answer:
          'Açılış ve kapanış çitlerinin kendi satırlarında üç ters tik kullandığından ve açılış çitinden önce boş bir satır olduğundan emin olun.',
      },
      {
        question: 'Markdown metnini e-posta için HTML biçimine dönüştürebilir miyim?',
        answer:
          'Evet. Derlenmiş HTML parçasını kopyalayıp HTML kabul eden bir e-posta düzenleyicisine yapıştırın veya önce tam belgeyi dışa aktarın.',
      },
      {
        question: 'Dil etiketli kod blokları yazabilir miyim?',
        answer:
          'Evet. Açılış ters tiklerinden sonra dil adını ekleyin; örneğin ```js, blok biçimlendirilmiş kod olarak işlenir.',
      },
      {
        question: 'Başka bir düzenleyiciden kopyalanan Markdown metnini yapıştırabilir miyim?',
        answer:
          'Evet. Herhangi bir düzenleyiciden veya not uygulamasından Markdown metni yapıştırın; önizleme hemen güncellenir.',
      },
      {
        question: 'Önizlemedeki bağlantılara ne olur?',
        answer:
          'Bağlantılar önizlemede tıklanabilir çapa olarak işlenir ve yalnızca https, göreli yollar, çapalar ve mailto gibi güvenli protokollere izin verilir.',
      },
      {
        question: 'İşlenmiş önizlemeyi yazdırabilir miyim?',
        answer:
          'Evet. HTML dosyasını dışa aktarıp tarayıcınızda açın, ardından yazdırmak veya PDF olarak kaydetmek için tarayıcı yazdırma işlevini kullanın.',
      },
    ],
  },
  'line-prefix-suffix': {
    instructions: [
      {
        title: 'Önekinizi ve sonekinizi belirleyin',
        description:
          'Açılış tırnağı, madde işareti veya kapanış etiketi gibi her satırın öncesine veya sonrasına eklenecek herhangi bir metni girin.',
      },
      {
        title: 'Gerekirse satır numaralarını açın',
        description:
          'Satır numaraları ekle seçeneğini açın ve başlangıç numarasını ile ayırıcıyı ayarlayın; örneğin "1. " veya "01: ".',
      },
      {
        title: 'Satırlarınızı yapıştırın',
        description:
          'Giriş Satırları alanına her satıra bir öğe girin veya SQL tarzı tırnaklamayı çalışırken görmek için Örnek yükle düğmesine tıklayın.',
      },
      {
        title: 'Boş satırların nasıl işleneceğini seçin',
        description:
          'Boş satırları atla seçeneğini işaretli tutun; böylece boş ara satırlar numaralandırma veya ek karakter almadan korunur.',
      },
      {
        title: 'Biçimlendirilmiş çıktıyı inceleyin',
        description:
          'Sonucu kullanmadan önce tırnak işaretlerinin, virgüllerin ve sayıların her satırda hizalandığını kontrol edin.',
      },
      {
        title: 'Biçimlendirilmiş satırları kopyalayın',
        description:
          'Bütün bloğu panonuza kopyalayın ve SQL sorgunuza, kod dosyanıza veya belgenize yapıştırın.',
      },
    ],
    examples: [
      {
        title: 'SQL IN yan tümcesi için değerleri biçimlendirme',
        input: 'Önek: \'  |  Sonek: \',  |  Satırlar: tokyo / london',
        output: "'tokyo',\n'london',",
        explanation: 'Düz metin öğelerini tek tırnak ve sondaki virgüllerle anında sarar.',
      },
      {
        title: 'Sıfır dolgulu numaralı adımlar',
        input: 'Satır numaraları: Açık · Sıfır doldur: Açık · Ayırıcı: ": "',
        output: '01: Birinci adım\n02: İkinci adım',
        explanation: 'Ana hatlar veya belgeler için hizalanmış numaralı listeler oluşturur.',
      },
    ],
    benefits: [
      'Önek, sonek ve sıralı satır numaralandırmayı tek araçta birleştirir',
      'İsteğe bağlı sıfır doldurma, çok basamaklı listeleri görsel olarak hizalı tutar',
      'Açıldığında boş satırları otomatik olarak atlar; böylece sayaçlar doğru kalır',
      'Hassas kimlikler veya sorgu değerleri için sıfır sunucu yüklemesi',
    ],
    useCases: [
      'Elektronik tablo kimliklerini SQL IN (...) sorguları için tırnak ve virgül içine alma',
      'Düz metin öğelerini Markdown madde işaretlerine veya HTML <li> etiketlerine dönüştürme',
      'Kontrol listelerine ve ana hatlara sıralı adım numaraları ekleme',
      'JavaScript, Python veya JSON için dize dizileri oluşturma',
    ],
    faqs: [
      {
        question: 'Önek veya sonek olmadan yalnızca satır numarası ekleyebilir miyim?',
        answer:
          'Evet. Satır Öneki ve Satır Soneki girişlerini temizleyin, "Satır numaraları ekle" seçeneğini açın ve tercih ettiğiniz başlangıç numarasını ile ayırıcıyı ayarlayın.',
      },
      {
        question: 'Boş ara satırların numaralandırılmasını nasıl atlarım?',
        answer:
          '"Boş satırları atla" seçeneğini işaretli tutun; böylece boş satırlar satır sayacını artırmadan veya önek/sonek almadan korunur.',
      },
      {
        question: 'Numaralandırmaya 0 veya başka bir sayıdan başlayabilir miyim?',
        answer:
          'Evet. 0, 1, 100 veya başka bir başlangıç değerinden saymaya başlamak için Başlangıç Numarası alanına herhangi bir tam sayı girin.',
      },
      {
        question: 'Satır Numaraları ve Önek/Sonek Ekleme aracı nedir?',
        answer:
          'Bir listenin her satırına özel bir önek, sonek veya sıralı satır numarası ekler; böylece metni her satırı elle düzenlemek yerine toplu olarak biçimlendirebilirsiniz.',
      },
      {
        question: 'Satır öneki ve soneki aracı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tarayıcınızda çalışır, bu yüzden metniniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Sonek olmadan yalnızca önek ekleyebilir miyim?',
        answer:
          'Evet. Yalnızca Satır Öneki alanını doldurup soneki boş bırakın veya tersini yapın; yalnızca girdiğiniz bölüm uygulanır.',
      },
      {
        question: 'Satırları SQL IN yan tümcesi için tırnak içine nasıl alırım?',
        answer:
          'Önek alanına tek tırnak işareti, sonek alanına ise tırnak ve virgül girin; her satır virgül izleyen tırnaklı bir değer olur.',
      },
      {
        question: 'Her satırın sonuna virgül ekleyebilir miyim?',
        answer:
          'Evet. Satır Soneki alanına virgül koyun; boş olmayan her satır virgülle biter.',
      },
      {
        question: 'Sıfır doldurma satır numaralarında nasıl çalışır?',
        answer:
          'Sıfır doldurma açıkken sayılar aynı genişliğe doldurulur; bu yüzden 100 satırlık bir liste 1, 2 ve 100 yerine 001, 002 gibi görünür.',
      },
      {
        question: 'Numaralı satırlar için hangi ayırıcıyı kullanmalıyım?',
        answer:
          'Yaygın seçimler düz numaralı listeler için ". ", etiketli adımlar için ": " ve ana hat tarzı numaralandırma için ") " biçimindedir.',
      },
      {
        question: 'Satırları 1 dışında bir sayıdan başlayarak numaralandırabilir miyim?',
        answer:
          'Evet. 0, 100 veya ihtiyaç duyduğunuz başka bir başlangıç değerinden başlamak için Başlangıç Numarası alanına herhangi bir tam sayı girin.',
      },
      {
        question: 'Listemdeki boş satırlara ne olur?',
        answer:
          'Boş satırları atla seçeneği açıkken boş satırlar sayı veya ek almadan olduğu gibi kalır; kapalıyken diğer satırlar gibi ele alınır.',
      },
      {
        question: 'Bu araçla Markdown madde listesi yapabilir miyim?',
        answer:
          'Evet. Önek olarak "- " girin; her satır bir Markdown madde işareti olur.',
      },
      {
        question: 'Satırları HTML liste öğelerine dönüştürebilir miyim?',
        answer:
          'Evet. Her satırı liste öğesi etiketleriyle sarmak için önek olarak "<li>" ve sonek olarak "</li>" kullanın.',
      },
      {
        question: 'Araç metnimi bir sunucuya yüklüyor mu?',
        answer:
          'Hayır. Tüm biçimlendirme tarayıcınızda yerel olarak yapılır; bu, hassas kimlikleri, sorgu değerlerini ve kodu gizli tutar.',
      },
      {
        question: 'JavaScript veya Python dizisi için satırları biçimlendirebilir miyim?',
        answer:
          'Evet. Satırları tırnak içine alıp sondaki virgülle sarın ve sonucu doğrudan dizi değişmezine yapıştırın.',
      },
      {
        question: 'Kaç satırı biçimlendirebileceğime dair sınır var mı?',
        answer:
          'Araç uzun listeleri rahatça işler; ancak çok büyük yapıştırmaların tarayıcıda işlenmesi biraz zaman alabilir.',
      },
      {
        question: 'Bazı satırlar neden numaralandırılmıyor?',
        answer:
          'Boş satırları atla seçeneğinin açık olup olmadığını kontrol edin; çünkü boş satırlar tasarım gereği atlanır ve numara almaz.',
      },
      {
        question: 'Farklı satırlara farklı önekler ekleyebilir miyim?',
        answer:
          'Hayır. Araç aynı öneki ve soneki her satıra uygular; karışık biçimlendirme için her grubu ayrı ayrı araçtan geçirin.',
      },
      {
        question: 'Yanlışlıkla eklediğim bir öneki nasıl kaldırırım?',
        answer:
          'Biçimlendirilmiş metni Bul ve Değiştir aracına yapıştırın veya doğru ayarlarla orijinal listeyi yeniden çalıştırın; çünkü bu araç yalnızca metin ekler, metin çıkarmaz.',
      },
    ],
  },
};
