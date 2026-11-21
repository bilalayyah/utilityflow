// Detail content for TR tools — Turkish (tr) locale.
// Written directly in Turkish for UtilityFlow.
// Loaded on demand, one batch at a time, only on the tool's own
// page (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'meta-tag-generator': {
    instructions: [
      {
        title: 'Sayfa başlığı ve meta açıklama girin',
        description:
          'Başlık (30–60 karakter hedefleyin) ve meta açıklama (120–160 karakter) alanlarını doldurun, canlı uzunluk göstergelerini takip edin.',
      },
      {
        title: 'Canonical URL ve dizin yönergelerini ayarlayın',
        description:
          'Sayfanın tam canonical URL adresini girin ve tarayıcıların sayfayı dizine ekleyip bağlantıları takip edip etmeyeceğini seçin.',
      },
      {
        title: 'Open Graph etiketleri ekleyin',
        description:
          'Open Graph başlığı, açıklaması, türü ve görsel URL adresini (1200×630 piksel önerilir) doldurun, böylece paylaşılan bağlantılar doğru görünür.',
      },
      {
        title: 'Twitter/X kartını yapılandırın',
        description:
          "X üzerinde hangi kart başlığı, açıklaması ve görselinin görüneceğini doğrulamak için summary veya summary_large_image seçin.",
      },
      {
        title: 'Canlı sosyal kart önizlemesini inceleyin',
        description:
          'Önizleme panelinden bağlantının sosyal akışta nasıl görüneceğini görün, yayınlamadan önce kesilmeleri veya eksik görseli düzeltin.',
      },
      {
        title: 'HTML kod parçacığını kopyalayın veya indirin',
        description:
          'Kaçış karakterli HTML kodunu sayfanızın <head> bölümüne kopyalayın veya meta-tags.html dosyasını indirip şablonlarınızda yeniden kullanın.',
      },
    ],
    examples: [
      {
        title: 'Standart web sitesi Open Graph ve canonical bloğu',
        input: 'Başlık: UtilityFlow · Tür: website · Kart: summary_large_image',
        output: '<title>...</title>, <meta name="description" ...>, <link rel="canonical" ...>, og:* ve twitter:*',
        explanation: 'Öznitelik değerlerindeki çift tırnak ve ve işaretlerini doğru şekilde kaçış karakteriyle yazar.',
      },
      {
        title: 'Blog yazısı için Article türünde etiketler',
        input: 'Başlık: Görseller Nasıl Sıkıştırılır · Tür: article · Kart: summary_large_image',
        output: 'Canonical ve Twitter kartı içeren tam <head> bloğu, og:type=article ile',
        explanation: 'Article türü, sosyal platformlara bağlantının bir blog yazısı olduğunu, ana sayfa olmadığını söyler.',
      },
    ],
    benefits: [
      'Etiket özniteliklerindeki &, ", < ve > karakterlerini otomatik olarak HTML kaçış karakteriyle yazar',
      'SEO head etiketlerini, Open Graph etiketlerini ve Twitter/X kartlarını tek bir kod parçacığında birleştirir',
      'Paylaşılan bağlantıların sosyal akışta nasıl görüneceğini dağıtımdan önce önizler',
      'Bağımsız meta-tags.html kod parçacığını indirme imkânı sunar',
    ],
    useCases: [
      'Lansman açılış sayfaları, pazarlama mikrositeleri ve SaaS ürün merkezleri yayınlamak',
      'Makalelerde Open Graph görsel boyutlarını ve kart türlerini standartlaştırmak',
      'Üretim sürümünden önce index/noindex ve canonical URL adreslerini doğrulamak',
      'Pazarlama ekibinden ön yüz geliştiricisine temiz <head> şablonları teslim etmek',
    ],
    faqs: [
      {
        question: 'Open Graph ve Twitter/X için ayrı etiketlere ihtiyacım var mı?',
        answer:
          'X gerektiğinde başlık ve açıklama için Open Graph kaynağına başvurur, ancak og:* etiketlerinin yanında twitter:card (summary_large_image) belirtmek her yerde geniş görsel önizlemesi sağlar.',
      },
      {
        question: 'og:image görselim hangi boyutta olmalı?',
        answer:
          '1200×630 piksel (1,91:1 en boy oranı) boyutunda, HTTPS adresinde barındırılan ve robots.txt tarafından engellenmeyen bir görsel kullanın.',
      },
      {
        question: '<meta name="keywords"> eklemek Google sıralamasına hâlâ yardımcı olur mu?',
        answer:
          'Büyük arama motorları geçmişteki spam yüzünden meta anahtar kelimeleri yok sayar; bu araç <head> bölümünüzü başlık, açıklama, canonical ve sosyal etiketlerle temiz tutar.',
      },
      {
        question: 'Meta Etiket Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir ve tamamen tarayıcınızda çalışır; başlıklarınız, açıklamalarınız ve URL adresleriniz hiçbir sunucuya yüklenmez.',
      },
      {
        question: 'Meta Etiket Oluşturucuyu kullanmak için bir şey yüklemem gerekir mi?',
        answer:
          'Hayır. Kurulum gerektirmeden her modern tarayıcıda çalışır; masaüstü veya mobil cihazdan etiket oluşturabilirsiniz.',
      },
      {
        question: 'Meta başlık için ideal uzunluk nedir?',
        answer:
          '30–60 karakter hedefleyin; böylece başlığın tamamı arama sonuçlarına ve sosyal kartlara üç nokta ile kesilmeden sığar.',
      },
      {
        question: 'Meta açıklama için ideal uzunluk nedir?',
        answer:
          '120–160 karakter arasında tutun; özetin tamamı masaüstü ve mobil arama sonuçlarında görünür kalır.',
      },
      {
        question: 'Meta Etiket Oluşturucu başlıklardaki özel karakterleri nasıl işler?',
        answer:
          'Öznitelik değerlerindeki &, ", < ve > karakterlerini otomatik olarak HTML kaçış karakteriyle yazar; tırnak ve ve işaretleri sayfa işaretlemenizi bozmaz.',
      },
      {
        question: 'Canonical URL nedir ve araç bunu neden ekler?',
        answer:
          'Canonical URL, benzer sayfalar varken arama motorlarına hangi sürümün orijinal olduğunu söyler ve yinelenen içerik karışıklığını önler.',
      },
      {
        question: 'Open Graph ve Twitter Kart etiketleri arasındaki fark nedir?',
        answer:
          'Open Graph etiketleri Facebook, LinkedIn ve mesajlaşma uygulamalarındaki bağlantı önizlemelerini kontrol eder; Twitter Kart etiketleri ise aynı bağlantının X üzerinde nasıl görüneceğini kontrol eder.',
      },
      {
        question: 'Meta Etiket Oluşturucuda hangi Twitter kart türünü seçmeliyim?',
        answer:
          'Makale ve ürün sayfası gibi görsel ağırlıklı sayfalar için summary_large_image, küçük bir küçük resmin yeterli olduğu sade metin sayfaları için summary kullanın.',
      },
      {
        question: 'Bağlantım paylaşıldığında nasıl görüneceğini görebilir miyim?',
        answer:
          'Evet. Canlı sosyal kart önizlemesi, yayınlamadan önce başlığı, açıklamayı ve görseli sosyal akışta görüneceği gibi gösterir.',
      },
      {
        question: 'Meta Etiket Oluşturucu sayfa içeriğimi bir yere yükler mi?',
        answer:
          'Hayır. Her şey tarayıcınızda yerel olarak çalışır ve yazdığınız hiçbir şey cihazınızdan dışarı çıkmaz.',
      },
      {
        question: 'Oluşturulan meta etiketleri web siteme nasıl eklerim?',
        answer:
          'Kod parçacığını kopyalayıp sayfa şablonunuzun <head> bölümüne yapıştırın veya meta-tags.html dosyasını indirip bloğu sayfalar arasında yeniden kullanın.',
      },
      {
        question: 'Meta Etiket Oluşturucuda robots noindex yönergesini ne zaman kullanmalıyım?',
        answer:
          "Noindex yönergesini yalnızca arama sonuçlarında asla görmek istemediğiniz sayfalar için kullanın: teşekkür sayfaları, site içi arama sonuçları veya canlı sayfanın hazırlık kopyası gibi.",
      },
      {
        question: 'Meta Etiket Oluşturucuyu blog yazısı veya ürün sayfası için kullanabilir miyim?',
        answer:
          'Evet. Blog yazıları için og:type değerini article, mağaza sayfaları için product olarak ayarlayın; her platform doğru önizleme biçimini gösterir.',
      },
      {
        question: 'og:image URL adresim yanlışsa veya görsel eksikse ne olur?',
        answer:
          'Sosyal platformlar hiç görsel göstermez veya bozuk bir önizleme gösterir; her zaman doğrudan bir HTTPS görsel URL adresi kullanın ve yayınlamadan önce önizlemeyi kontrol edin.',
      },
      {
        question: 'Meta Etiket Oluşturucu çok dilli sayfaları destekler mi?',
        answer:
          'Araç bir seferde tek bir sayfanın etiketlerini oluşturur; sayfanın dili için og:locale ayarlayın ve çevrilen her sürüm için ayrı bir etiket seti oluşturun.',
      },
      {
        question: 'Oluşturulan meta etiketleri dosya olarak indirebilir miyim?',
        answer:
          'Evet. İndirme düğmesi, kaçış karakterli tam kod parçacığını içeren bağımsız bir meta-tags.html dosyası kaydeder.',
      },
      {
        question: 'Meta Etiket Oluşturucu tek başına Google sıralamamı iyileştirir mi?',
        answer:
          'Hiçbir araç sıralama garantisi vermez, ancak doğru başlıklar, açıklamalar ve sosyal etiketler tıklama oranını ve sayfalarınızın sunumunu iyileştirir.',
      },
    ],
  },
  'serp-snippet-preview': {
    instructions: [
      {
        title: 'Başlık, açıklama ve URL girin',
        description:
          'Aday SEO başlığınızı, meta açıklamanızı, sayfa URL adresinizi ve isteğe bağlı site adı veya yayın tarihini yazın.',
      },
      {
        title: 'Piksel genişliğini ölçün',
        description:
          'SEO başlığının yanındaki canlı piksel değerine bakın; W ve M gibi geniş harfler, l ve i harflerinden daha fazla yatay piksel kaplar.',
      },
      {
        title: 'Masaüstü önizlemesini inceleyin',
        description:
          'Masaüstü arama kartına bakarak tam başlığı, ekmek kırıntısı URL adresini ve açıklamayı masaüstü kullanıcılarının göreceği gibi görün.',
      },
      {
        title: 'Mobil önizlemeye geçin',
        description:
          'Mobil görünüme geçerek daha kısa kesilme noktasını kontrol edin ve ana mesajın küçük ekranlarda da göründüğünden emin olun.',
      },
      {
        title: 'Kalın anahtar kelime eşleşmesini test edin',
        description:
          'Hedef arama sorgunuzu Kalın Anahtar Kelime alanına girin; Google arama sonuçlarında hangi kelimeleri vurgulayacağını görün.',
      },
      {
        title: 'Hazır etiketleri kopyalayın',
        description:
          'Önizleme doğru göründüğünde, hazır <title> ve <meta name="description"> etiketlerini sayfanıza yapıştırmak için kopyalayın.',
      },
    ],
    examples: [
      {
        title: 'Geniş harfli başlıktaki kesilmeyi yakalamak',
        input: 'Büyük W/M harfleriyle dolu 60 karakterlik başlık',
        output: '60 karakterin altında olsa bile 580 pikselden fazla taşmayı işaretler; üç nokta kesilmesinden önce kısaltırsınız.',
        explanation: 'Canvas metin ölçümleri, gerçek arama sonuçlarındaki serif/sans yazı tipi genişliğini yaklaşık olarak hesaplar.',
      },
      {
        title: 'Mobil görünümde açıklama katlanmasını kontrol etmek',
        input: 'Başlık: 55 karakter · Açıklama: 170 karakter · Görünüm: Mobil',
        output: 'Mobil önizlemede açıklama yaklaşık 120 karakterde kesilmiş görünür',
        explanation: 'Ana mesajı ve hedef anahtar kelimeyi açıklamanın başına koymak, katlanmış mobil görünümün de anlaşılır olmasını sağlar.',
      },
    ],
    benefits: [
      'Karakter sayısına ek olarak Canvas measureText() piksel genişliği kullanır',
      'Alan adı ve yol bölümlerini otomatik olarak temiz bir ekmek kırıntısı izine dönüştürür',
      'Tıklama oranı incelemesi için meta açıklama içindeki kalın sorgu terimlerini gösterir',
      'Hazır <title> ve <meta name="description"> etiketlerini tek tıkla kopyalar',
    ],
    useCases: [
      'Blog başlıklarını ve ürün sayfası başlıklarını ortadan "..." kesilmesinden koruyarak iyileştirmek',
      'Mobil cihazlardaki yaklaşık 120 karakterlik katlanma içinde daha yüksek tıklama oranlı meta açıklamalar yazmak',
      'Yayın tarihinin görünen açıklama uzunluğunu nasıl etkilediğini kontrol etmek',
      'Editoryal kalite kontrolü sırasında açılış sayfası snippet önizlemelerini incelemek',
    ],
    faqs: [
      {
        question: 'Piksel genişliği katı karakter sayısından neden daha önemlidir?',
        answer:
          'Arama motorları başlıkları sabit karakter uzunluğuna göre değil, kapsayıcı piksel genişliğine göre keser (masaüstünde yaklaşık 580–600 piksel). Büyük harfler ile W veya M gibi geniş karakterler, i veya l harfinin neredeyse iki katı yer kaplar.',
      },
      {
        question: 'Google canlı sonuçlarda başlığımı veya meta açıklamamı yine de değiştirebilir mi?',
        answer:
          'Evet. Google bazen belirli bir arama sorgusuna veya H1 başlığına uyması için snippet önizlemesini dinamik olarak değiştirir; kısa ve doğru başlıklar istenmeyen değişiklikleri azaltır.',
      },
      {
        question: 'Bu araç Google üzerinden canlı sıralama çeker mi?',
        answer:
          'Hayır. Tamamen tarayıcınızda çalışan çevrimdışı bir görsel SERP snippet simülatörüdür.',
      },
      {
        question: 'SERP Önizleme ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir ve tamamen tarayıcınızda çalışır; yazdığınız hiçbir şey bir yere yüklenmez.',
      },
      {
        question: 'Google arama sonuçları için ideal başlık uzunluğu nedir?',
        answer:
          'Masaüstünde yaklaşık 580 pikselin altında kalmayı hedefleyin; harf genişliğine bağlı olarak bu genellikle 50–60 karakter demektir.',
      },
      {
        question: 'SERP Önizleme piksel genişliğini nasıl ölçer?',
        answer:
          'Tarayıcının Canvas measureText() API arayüzünü kullanarak başlığınızın, arama sonuçlarının kullandığı yazı tipi stilindeki gerçek işlenmiş genişliğini hesaplar.',
      },
      {
        question: 'Başlığım 60 karakterin altında olmasına rağmen neden kesiliyor?',
        answer:
          'Arama motorları karakter sayısına göre değil, piksel genişliğine göre keser; W ve M gibi geniş harfler, i ve l gibi dar harflerden çok daha fazla yer kaplar.',
      },
      {
        question: 'Masaüstü ve mobil için ideal meta açıklama uzunluğu nedir?',
        answer:
          'Masaüstünde yaklaşık 155–160 karakter görünürken mobil yaklaşık 120 karakterde katlanır; en önemli kelimeleri ve anahtar kelimeleri en başa koyun.',
      },
      {
        question: 'Hem masaüstü hem mobil arama sonuçlarının önizlemesini görebilir miyim?',
        answer:
          'Evet. Masaüstü ve Mobil görünümleri arasında geçiş yaparak aynı başlık ve açıklamanın her ekran boyutunda nasıl göründüğünü görün.',
      },
      {
        question: 'SERP Önizlemedeki kalın anahtar kelime özelliği ne yapar?',
        answer:
          'Hedef arama sorgunuzu girin; önizleme, başlığınız ve açıklamanız içindeki eşleşen kelimeleri, Google arama sonuçlarında sorgu terimlerini vurguladığı gibi kalın yapar.',
      },
      {
        question: 'SERP Önizleme gerçek Google sıralamamı gösterir mi?',
        answer:
          'Hayır. Snippet önizlemesinin nasıl görünebileceğini gösteren çevrimdışı bir görsel simülatördür; Google üzerinden canlı sıralama verisi değildir.',
      },
      {
        question: 'SERP Önizleme başlığımı veya URL adresimi bir yere yükler mi?',
        answer:
          'Hayır. Tüm önizleme ve ölçüm tarayıcınızda yerel olarak yapılır; başlığınız, açıklamanız ve URL adresiniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Önizlemeden sonra başlığı ve meta açıklamayı nasıl kopyalarım?',
        answer:
          'Tek tıklı kopyalama düğmesiyle sayfanıza yapıştırabileceğiniz hazır <title> ve <meta name="description"> etiketlerini alın.',
      },
      {
        question: 'Google canlı sonuçlarda başlığımı bazen neden değiştirir?',
        answer:
          'Google, H1 başlığınızın veya sayfadaki başka bir metnin bir arama sorgusuyla daha iyi eşleştiğini düşünürse onu değiştirir; kısa ve doğru başlıklar bu değişimi azaltır.',
      },
      {
        question: 'Başlığa marka veya site adımı eklemeli miyim?',
        answer:
          'Çoğu zaman evet. Ayırıcıdan sonra sona koyun; ana anahtar kelime önde kalır, marka da sonuçlarda görünür.',
      },
      {
        question: 'Başlık etiketi ile H1 başlığı arasındaki fark nedir?',
        answer:
          'Başlık etiketi arama sonuçlarında ve tarayıcı sekmelerinde görünür; H1 ise sayfanın kendisinde görünen başlıktır.',
      },
      {
        question: 'SERP Önizlemede birden fazla başlığı hızlıca test edebilir miyim?',
        answer:
          'Evet. Başlık alanını düzenleyin; önizleme, piksel genişliği ve kesilme uyarısı yazdıkça canlı olarak güncellenir.',
      },
      {
        question: 'SERP Önizleme yayın tarihini hesaba katar mı?',
        answer:
          'Evet. Tarih eklemek, görünen açıklamayı ne kadar kısalttığını gösterir; haber ve blog yazıları için önemlidir.',
      },
      {
        question: 'Açıklamam mobilde kesilirse ne yapmalıyım?',
        answer:
          'Ana mesajı ve hedef anahtar kelimeyi açıklamanın en başına taşıyın; katlanmış mobil görünüm de anlaşılır kalsın.',
      },
      {
        question: 'SERP Önizlemenin piksel genişliği denetimi her dil için doğru mu?',
        answer:
          'Tarayıcı yazı tiplerinizden gerçek arama görünümünü yaklaşık olarak hesaplar; sonuçlar Latin alfabesi için en doğrudur, diğer yazı sistemlerinde farklılık gösterebilir.',
      },
    ],
  },
  'xml-sitemap-generator': {
    instructions: [
      {
        title: 'Canonical URL adreslerini yapıştırın',
        description:
          'Düzenleyiciye satır başına bir tam https:// (veya http://) URL adresi girin; hatalı satırlar açıkça işaretlenir.',
      },
      {
        title: 'İşaretlenen geçersiz satırları inceleyin',
        description:
          'Vurgulanan satırlardaki yazım hatalarını veya eksik https:// önekini kontrol edip oluşturmadan önce düzeltin; geçersiz URL adresleri XML dışında bırakılır.',
      },
      {
        title: 'İsteğe bağlı etiketleri ayarlayın',
        description:
          'İsteğe bağlı <lastmod> tarihi, <changefreq> ipucu ve <priority> belirleyin (veya daha temiz dosyalar için isteğe bağlı etiketleri atlayın).',
      },
      {
        title: 'Yinelenenleri denetleyin',
        description:
          'Aracın gösterdiği yinelenen sayısıyla bitmiş site haritasında her canonical URL adresinin tam bir kez yer aldığından emin olun.',
      },
      {
        title: 'Oluşturulan XML çıktısını önizleyin',
        description:
          'XML çıktısını inceleyerek urlset, <loc> girdileri ve isteğe bağlı <lastmod> değerlerinin doğru göründüğünü doğrulayın.',
      },
      {
        title: 'sitemap.xml dosyasını kopyalayın veya indirin',
        description:
          'XML Kopyala düğmesine basın veya .xml dosyasını indirip doğrudan sitenizin kök dizinindeki /public/ klasörüne koyun.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages üzerindeki statik site için site haritası oluşturmak',
        input: '5 canonical URL · lastmod: 2026-11-12 · Yinelenenleri kaldır: Açık',
        output: 'Geçerli <?xml version="1.0"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">...</urlset>',
        explanation: 'Her <loc> öğesi içindeki XML varlıklarını (&, <, >, tırnak) temiz şekilde kaçış karakteriyle yazar.',
      },
      {
        title: 'Site taşıması sonrası temiz URL gönderim dosyası hazırlamak',
        input: '3 yinelenen ve 1 hatalı satır içeren 42 URL',
        output: '38 geçerli URL içeren site haritası; yinelenenler kaldırıldı, hatalı satır dışarıda bırakıldı',
        explanation: 'Yinelenenler otomatik olarak kaldırılır, hatalı satırlar işaretlenip XML dışında bırakılır.',
      },
    ],
    benefits: [
      'XML oluşturmadan önce her satırı tarayıcının yerleşik URL ayrıştırmasıyla doğrular',
      '<loc> URL adresleri içindeki & ve özel sorgu karakterlerini otomatik olarak kaçış karakteriyle yazar',
      'Aynı URL adreslerinin yinelenmesini engelleyerek site haritasının şişmesini önler',
      'İstendiğinde <priority> ve <changefreq> etiketlerini temizce atlamaya izin verir (Google ikisini de yok sayar)',
    ],
    useCases: [
      'Statik açılış sayfaları veya dokümantasyon mikrositeleri için ilk site haritasını oluşturmak',
      'Site taşıması sonrası temiz URL gönderim dosyası hazırlamak',
      'Küçük işletme siteleri için görsel ve haber içermeyen ek site haritası oluşturmak',
      'Biçimlendirilmiş XML çıktısını robots.txt ile birlikte dağıtmaya hazır hâle getirmek',
    ],
    faqs: [
      {
        question: 'Site haritasına canonical olmayan, yönlendirmeli veya noindex URL eklemeli miyim?',
        answer:
          'Hayır. Site haritalarında yalnızca HTTP 200 döndüren ve arama motorlarının dizine eklemesini istediğiniz canonical URL adresleri bulunmalıdır.',
      },
      {
        question: 'Google <priority> ve <changefreq> etiketlerini hâlâ kullanıyor mu?',
        answer:
          'Google Arama, <priority> ve <changefreq> etiketlerini yok sayar ve esas olarak <loc> ile anlamlı şekilde güncellenmiş doğru <lastmod> tarihlerine odaklanır.',
      },
      {
        question: 'Bu oluşturucu canlı web sitemi otomatik olarak tarar mı?',
        answer:
          'Hayır. Tarayıcı CORS güvenliği nedeniyle istemci tarafı sayfalar siteleri kaynaklar arası tarayamaz; dışa aktarılan yol listenizi buraya yapıştırın, geçerli XML anında oluşsun.',
      },
      {
        question: 'XML Site Haritası Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir ve tamamen tarayıcınızda çalışır; URL listeniz hiçbir sunucuya yüklenmez.',
      },
      {
        question: 'Bir site haritasına kaç URL ekleyebilirim?',
        answer:
          'Site Haritaları protokolü dosya başına 50.000 URL veya 50 MB sıkıştırılmamış boyuta izin verir; büyük siteler birkaç site haritasına bölünmeli veya site haritası dizini kullanmalıdır.',
      },
      {
        question: 'Site haritası ile robots.txt arasındaki fark nedir?',
        answer:
          'Site haritası, arama motorlarının keşfetmesini istediğiniz URL adreslerinin listesidir; robots.txt ise tarayıcılara hangi yolları ziyaret edip edemeyeceklerini söyleyen kuralları verir.',
      },
      {
        question: 'sitemap.xml dosyasını nereye yüklemeliyim?',
        answer:
          'Sitenizin kök dizinine koyun, örneğin https://example.com/sitemap.xml; tarayıcılar onu standart konumda bulur.',
      },
      {
        question: 'Site haritamı Google arama konsoluna göndermem gerekir mi?',
        answer:
          'Önerilir. Google Search Console üzerinde gönderin ve diğer tarayıcılar için robots.txt dosyasına bir Sitemap: satırı ekleyin.',
      },
      {
        question: 'XML Site Haritası Oluşturucu hangi URL biçimlerini kabul eder?',
        answer:
          'Satır başına alan adı dahil bir tam https:// veya http:// URL adresi girin; geçerli URL olmayan satır araç tarafından işaretlenir.',
      },
      {
        question: 'Site haritamdaki yinelenen URL adreslerine ne olur?',
        answer:
          'Yinelenenler otomatik olarak kaldırılır; bitmiş site haritasında her canonical URL adresi tam bir kez yer alır.',
      },
      {
        question: 'XML Site Haritası Oluşturucuda geçersiz veya bozuk URL adreslerine ne olur?',
        answer:
          'Geçersiz satırlar açıkça işaretlenip XML dışında bırakılır; bir satırdaki yazım hatası tüm dosyayı bozmaz.',
      },
      {
        question: 'XML Site Haritası Oluşturucu URL adreslerindeki özel karakterleri nasıl işler?',
        answer:
          'Sorgu dizeleri ve kodlanmış yollar geçerli kalsın diye <loc> öğeleri içindeki & ve diğer özel karakterleri XML kaçış karakteriyle yazar.',
      },
      {
        question: 'Normal site haritasına görsel veya video URL adresi eklemeli miyim?',
        answer:
          'Standart site haritasında yalnızca sayfa URL adresleri bulunur. Görsel ve video URL adreslerinin ayrıca dizine eklenmesini istiyorsanız kendi site haritası uzantılarına ihtiyaç duyarlar.',
      },
      {
        question: 'Sayfalanmış veya filtrelenmiş URL adreslerini site haritasına eklemeli miyim?',
        answer:
          'Hayır. Yalnızca canonical, dizine eklenebilir sayfaları listeleyin; sayfalama, sıralama parametreleri ve site içi arama sonucu sayfalarını dışarıda bırakın.',
      },
      {
        question: '<lastmod> nedir ve site haritamda ayarlamalı mıyım?',
        answer:
          'Sayfanın en son ne zaman değiştiğini kaydeder. Yalnızca tarih doğruysa ayarlayın; Google sayfanın güncelliğini bundan anlar.',
      },
      {
        question: 'XML Site Haritası Oluşturucu çevrimdışı çalışır mı?',
        answer:
          'Evet. Tamamen tarayıcınızda, yükleme olmadan çalışır; sayfa yüklendikten sonra internet olmadan da site haritası oluşturabilirsiniz.',
      },
      {
        question: 'Yeni sayfalar ekledikten sonra site haritamı yeniden oluşturabilir miyim?',
        answer:
          'Evet. Güncellenmiş URL listesini yapıştırıp yeni bir sitemap.xml indirin, ardından site kök dizininize yeniden yükleyin.',
      },
      {
        question: 'Site haritası dizin dosyası nedir?',
        answer:
          'Birden fazla site haritası dosyasını listeleyen dosyadır; büyük siteler binlerce URL adresini bölümlere veya dillere göre bununla düzenler.',
      },
      {
        question: 'Site haritası olması Google arama motorunun sayfalarımı dizine ekleyeceğini garanti eder mi?',
        answer:
          'Hayır. Site haritası arama motorlarının URL keşfetmesine yardımcı olur; dizine ekleme sayfa kalitesine, bağlantılara ve tarama bütçesine bağlıdır.',
      },
      {
        question: 'XML Site Haritası Oluşturucuyu WordPress veya Shopify sitesi için kullanabilir miyim?',
        answer:
          'Evet. Herhangi bir platformdan canonical URL listenizi dışa aktarın veya kopyalayın, buraya yapıştırın; araç standart bir sitemap.xml oluşturur.',
      },
    ],
  },
  'robots-txt-generator': {
    instructions: [
      {
        title: 'Hazır şablon seçin veya kuralları düzenleyin',
        description:
          'Yaygın kuralları doldurmak için Tümüne İzin Ver, Standart Web Uygulaması / SaaS, WordPress Temiz veya Hazırlık (Tümünü Engelle) düğmesine basın.',
      },
      {
        title: 'User-agent ve yolları özelleştirin',
        description:
          '* veya Googlebot, Bingbot ya da GPTBot gibi belirli tarayıcılar için Allow veya Disallow yolları ekleyin.',
      },
      {
        title: 'Gereken yerde Crawl-delay ayarlayın',
        description:
          'Bunu dikkate alan tarayıcılar (örneğin Bingbot) için Crawl-delay değeri ekleyin; küçük veya paylaşımlı sunucuda istekler yavaşlasın.',
      },
      {
        title: 'Site haritası URL adresleri ekleyin',
        description:
          'Tam XML site haritası URL adresinizi girin; tarayıcılar site haritanızı robots.txt dosyasından bulsun. Birden fazla site haritanız varsa birden çok satır ekleyin.',
      },
      {
        title: 'Gruplanmış çıktıyı inceleyin',
        description:
          'Her User-agent bloğunun doğru gruplandığını ve hiçbir Disallow kuralının yanlışlıkla CSS, JavaScript veya herkese açık sayfaları engellemediğini kontrol edin.',
      },
      {
        title: 'Kopyalayın, indirin ve test edin',
        description:
          'robots.txt dosyasını kopyalayıp indirerek alan adı kök dizinine yerleştirin ve Google Search Console üzerindeki robots.txt test aracıyla doğrulayın.',
      },
    ],
    examples: [
      {
        title: 'SaaS web uygulamasında /api/ ve /admin/ yollarını engellemek',
        input: 'User-agent: * · Allow: / · Disallow: /admin/ · Disallow: /api/',
        output: 'Sonunda Sitemap: https://example.com/sitemap.xml satırı bulunan gruplanmış robots.txt dosyası',
        explanation: 'Eşleşen User-agent kurallarını tek bir blok altında temiz şekilde gruplar.',
      },
      {
        title: 'Hazırlık sitesini tamamen engellemek',
        input: 'Şablon: Hazırlık (Tümünü Engelle)',
        output: 'User-agent: *\nDisallow: /',
        explanation: 'DNS yayını öncesinde hazırlık ortamını arama motorlarından gizlemenin hızlı yoludur.',
      },
    ],
    benefits: [
      'Kuralları RFC 9309 en iyi uygulamalarına göre eşleşen User-agent bloklarında otomatik olarak gruplar',
      'CSS ve JavaScript dosyalarının yanlışlıkla engellenmesini önlemek için doğrulanmış hazır şablonlar sunar',
      'Site haritası dizinleri veya yerelleştirilmiş dosyalar için birden fazla Sitemap: bildirimi destekler',
      'Tek tıkla indirme, dağıtıma hazır bir robots.txt dosyası üretir',
    ],
    useCases: [
      'Tarayıcıların bütçesini /api/, /admin/ veya site içi arama sorgu URL adreslerinde harcamasını engellemek',
      'Alan adı kök dizininde XML site haritası konumlarını duyurmak',
      'AdsBot veya yapay zekâ tarayıcıları gibi özel botlar için ayrı kurallar eklemek',
      'DNS yayını öncesinde hazırlık ortamlarını yapılandırmak',
    ],
    faqs: [
      {
        question: 'robots.txt dosyasındaki Disallow: /admin/ sayfayı Google Arama sonuçlarından çıkarır mı veya sırları korur mu?',
        answer:
          'Önemli ayrım: robots.txt taramayı durdurur, dizine eklemeyi her zaman engellemez; başka siteler URL adresine doğrudan bağlantı verirse sayfa dizine eklenebilir ve robots.txt herkes tarafından okunabilir. Hassas yollar için kimlik doğrulama kullanın, dizine eklemeyi önlemek için <meta name="robots" content="noindex"> ekleyin.',
      },
      {
        question: 'robots.txt nerede barındırılmalıdır?',
        answer:
          'Barındırma alanınızın tam kök yolunda sunulmalıdır (https://yourdomain.com/robots.txt) ve HTTP 200 döndürmelidir.',
      },
      {
        question: 'Google Crawl-delay yönergesini dikkate alır mı?',
        answer:
          'Googlebot Crawl-delay yönergesini yok sayar (gerekirse Search Console ayarlarını kullanın); Bing ve diğer tarayıcılar sayısal Crawl-delay aralıklarına hâlâ uyar.',
      },
      {
        question: 'Robots.txt Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir ve tamamen tarayıcınızda çalışır; site kurallarınız hiçbir yere yüklenmez.',
      },
      {
        question: 'robots.txt ile meta robots noindex etiketi arasındaki fark nedir?',
        answer:
          'robots.txt tarayıcılara bir yolu ziyaret etmemelerini söyler; noindex etiketi ise arama motorlarına taranan sayfayı sonuçlarda göstermemelerini söyler. Farklı sorunları çözerler.',
      },
      {
        question: 'robots.txt ile GPTBot gibi yapay zekâ tarayıcıları engellenebilir mi?',
        answer:
          'Evet. User-agent: GPTBot grubuna Disallow: / ekleyerek o tarayıcıyı dışarıda bırakın; engellemek istediğiniz diğer yapay zekâ botları için aynı kalıbı tekrarlayın.',
      },
      {
        question: 'robots.txt dosyasında "User-agent: *" ne anlama gelir?',
        answer:
          'Bu gruptaki kuralların, daha belirli bir User-agent grubu onları geçersiz kılmadığı sürece sitenizi ziyaret eden her tarayıcıya uygulandığı anlamına gelir.',
      },
      {
        question: 'robots.txt dosyasında Allow ve Disallow arasındaki fark nedir?',
        answer:
          'Allow bir yolun taranmasına izin verir, Disallow engeller. Kurallar çakıştığında en belirli eşleşen kural kazanır.',
      },
      {
        question: 'Robots.txt Oluşturucu ile tek bir sayfayı veya klasörü engelleyebilir miyim?',
        answer:
          'Evet. Tek sayfa için Disallow: /sayfa/ ekleyin; bir klasörü ve içindeki her şeyi engellemek için Disallow: /klasor/ ekleyin.',
      },
      {
        question: 'CSS ve JavaScript dosyalarımı robots.txt dosyasında engellemeli miyim?',
        answer:
          'Hayır. Arama motorları sayfaları düzgün işlemek için CSS ve JavaScript dosyalarınıza ihtiyaç duyar; onları engellemek sıralamaya zarar verebilir.',
      },
      {
        question: 'Robots.txt Oluşturucu hangi hazır şablonları içerir?',
        answer:
          'Tümüne İzin Ver, Standart Web Uygulaması / SaaS, WordPress Temiz ve Hazırlık (Tümünü Engelle) şablonlarını içerir; boş bir dosya yerine kanıtlanmış bir şablondan başlayabilirsiniz.',
      },
      {
        question: 'Site haritamı robots.txt dosyasına nasıl eklerim?',
        answer:
          'Dosyanın sonuna Sitemap: https://example.com/sitemap.xml gibi bir satır ekleyin; tarayıcılar site haritanızı kök dizinden bulsun.',
      },
      {
        question: 'Bir robots.txt dosyasında birden fazla Sitemap satırı olabilir mi?',
        answer:
          'Evet. Birkaç site haritası URL adresi listeleyebilirsiniz; site haritası dizinleri veya dil ya da bölüme göre ayrı site haritaları için yararlıdır.',
      },
      {
        question: 'Robots.txt Oluşturucu kurallarımı bir yere yükler mi?',
        answer:
          'Hayır. Her şey tarayıcınızda yerel olarak çalışır ve dosya cihazınızda oluşturulur.',
      },
      {
        question: 'Yayınladıktan sonra robots.txt dosyamı nasıl test ederim?',
        answer:
          'Alan adı kök dizininize yükleyin, ardından Google Search Console üzerindeki robots.txt test aracıyla kontrol edin veya Googlebot gibi getirerek deneyin.',
      },
      {
        question: 'robots.txt dosyasında yanlışlıkla tüm sitemi engellersem ne olur?',
        answer:
          'Arama motorları sayfalarınızı taramayı durdurur. Disallow: / satırını kaldırın, dosyayı yeniden yükleyin ve Search Console üzerinde yeniden tarama isteyin.',
      },
      {
        question: 'robots.txt yönetici sayfalarımı saldırganlardan gizler mi?',
        answer:
          'Hayır. robots.txt herkes tarafından okunabilir; engellediğiniz yolları herkes görebilir. Hassas sayfaları parola veya kimlik doğrulamayla koruyun.',
      },
      {
        question: 'Crawl-delay nedir ve robots.txt dosyasında kullanmalı mıyım?',
        answer:
          'Crawl-delay, tarayıcılardan istekler arasında belirli saniye beklemelerini ister. Googlebot bunu yok sayar, ancak Bing ve bazı tarayıcılar buna uyar.',
      },
      {
        question: 'Googlebot ve Bingbot için farklı robots.txt kuralları yazabilir miyim?',
        answer:
          'Evet. Her tarayıcı için kendi Allow ve Disallow satırlarıyla ayrı bir User-agent grubu oluşturun.',
      },
      {
        question: 'Cloudflare Pages veya statik sitede robots.txt dosyasını nereye yüklerim?',
        answer:
          'Dosyayı public/ klasörüne veya derleme çıktınızın kök dizinine koyun; https://yourdomain.com/robots.txt adresinde sunulsun.',
      },
    ],
  },
  'schema-markup-generator': {
    instructions: [
      {
        title: 'Bir Schema.org türü seçin',
        description:
          'Üstteki seçiciden Article, FAQPage, Product, Organization veya BreadcrumbList seçin.',
      },
      {
        title: 'Varlık özelliklerini doldurun',
        description:
          'Başlıklar, soru-cevap çiftleri, fiyat teklifleri, kuruluş bilgileri veya ekmek kırıntısı izleri girin.',
      },
      {
        title: 'Listeler için ek satırlar ekleyin',
        description:
          'FAQPage için ek soru-cevap çiftleri veya BreadcrumbList için ek iz öğeleri ekleyin; gerekmeyen satırları kaldırın.',
      },
      {
        title: 'Oluşturulan JSON-LD çıktısını inceleyin',
        description:
          'Canlı JSON çıktısında alan adlarının ve değerlerin doğru olduğunu kontrol edin; boş isteğe bağlı özelliklerin otomatik olarak atlandığını doğrulayın.',
      },
      {
        title: '<script> etiketini kopyalayın veya .jsonld olarak dışa aktarın',
        description:
          'Tam <script type="application/ld+json"> bloğunu sayfanızın <head> bölümüne kopyalayın veya .jsonld dosyasını indirin.',
      },
      {
        title: 'Yayınlamadan önce doğrulayın',
        description:
          'Çıktıyı Zengin Sonuçlar Testi veya Şema doğrulayıcısına yapıştırarak sözdizimi hatalarını yakalayın; geçersiz JSON-LD arama motorları tarafından yok sayılır.',
      },
    ],
    examples: [
      {
        title: 'Dinamik FAQPage yapılandırılmış verisi oluşturmak',
        input: 'FAQPage şeması altında 2 soru/cevap çifti',
        output: 'Geçerli @context https://schema.org FAQPage JSON-LD kod bloğu',
        explanation: 'Güvenli JSON serileştirmesinde küçük işaret kaçış karakteri kullanılır; </script> kapanmasının erken gerçekleşmesi engellenir.',
      },
      {
        title: 'Ürün sayfası için Product şeması oluşturmak',
        input: 'Ad: Kablosuz Fare · Fiyat: 29,99 USD · Stok: InStock',
        output: 'Fiyat, para birimi ve stok durumunu içeren Product JSON-LD bloğu',
        explanation: 'Fiyat ve stok durumu, arama motorlarının alışveriş sonuçlarında kullandığı temel alanlardır.',
      },
    ],
    benefits: [
      'En yüksek etkiye sahip 5 Schema.org yapılandırılmış veri türünü destekler',
      'HTML kod enjeksiyonu kırılmalarını önlemek için JSON-LD içindeki "<" karakterlerini temiz şekilde kaçış karakteriyle yazar',
      'Boş isteğe bağlı özellikleri otomatik olarak atlayarak sözdizimini temiz tutar',
      'Özel uzantılar için JSON biçimlendiriciyle doğal şekilde birlikte çalışır',
    ],
    useCases: [
      'Editoryal blog şablonlarına Article yazarı ve yayın meta verisi eklemek',
      'Satıcı beslemeleri için ürün fiyatı, para birimi ve stok durumunu yapılandırmak',
      'Site genelinde Organization marka kimliği ve logo URL adreslerini bildirmek',
      'Kategori ve araç sayfalarına BreadcrumbList hiyerarşi izleri eklemek',
    ],
    faqs: [
      {
        question: 'JSON-LD yapılandırılmış verisi web sayfasında nereye yerleştirilmelidir?',
        answer:
          'Kod bloğunu <head> içine veya <body> içine koyabilirsiniz; temiz şekilde <head> içine koymak standart uygulamadır.',
      },
      {
        question: 'Oluşturucu JSON çıktısında "<" karakterini neden kaçış karakteriyle yazar?',
        answer:
          'Kullanıcının SSS cevabında kod kapatma etiketi geçerse tarayıcılar HTML kod bloğunu erken kapatır; "<" karakteri Unicode kaçış biçimiyle yazıldığında bu engellenir ve JSON tamamen geçerli kalır.',
      },
      {
        question: 'Şema işaretlemesi eklemek Google arama sonuçlarında zengin snippet garantisi verir mi?',
        answer:
          'Hayır. Geçerli yapılandırılmış veri sayfaları gelişmiş arama özellikleri için uygun hâle getirir; arama motorları gösterim uygunluğunu sayfanın genel kalitesine ve kurallara göre belirler.',
      },
      {
        question: 'Şema İşaretleme Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir ve tamamen tarayıcınızda çalışır; içeriğiniz hiçbir sunucuya yüklenmez.',
      },
      {
        question: 'Şema İşaretleme Oluşturucu hangi Schema.org türlerini destekler?',
        answer:
          'Article, FAQPage, Product, Organization ve BreadcrumbList türlerini destekler; en yaygın zengin sonuç kullanım durumlarını kapsar.',
      },
      {
        question: 'JSON-LD ile Microdata arasındaki fark nedir?',
        answer:
          'JSON-LD, sayfanıza yapıştırdığınız ayrı bir kod bloğudur; Microdata ise görünen HTML öğelerinize doğrudan öznitelikler ekler.',
      },
      {
        question: 'Oluşturulan JSON-LD kodunu web siteme nasıl eklerim?',
        answer:
          'Tam <script type="application/ld+json"> bloğunu kopyalayıp eşleşen sayfanın <head> bölümüne yapıştırın.',
      },
      {
        question: 'Oluşturduktan sonra şema işaretlememi nasıl test ederim?',
        answer:
          'Sayfa URL adresini veya kodu Zengin Sonuçlar Testi ya da Schema.org doğrulayıcısına yapıştırarak hataları ve uygun geliştirmeleri kontrol edin.',
      },
      {
        question: 'Bir sayfada birden fazla şema türünü birleştirebilir miyim?',
        answer:
          'Evet. Tek bir sayfada Article, BreadcrumbList ve FAQPage işaretlemesi ayrı JSON-LD blokları olarak bir arada bulunabilir.',
      },
      {
        question: 'FAQPage şeması nedir ve ne zaman kullanmalıyım?',
        answer:
          'Soru ve cevapların görünür bir liste hâlinde sunulduğu sayfalarda kullanın (yardım sayfaları gibi); arama motorları bunları genişletilebilir sonuçlar olarak gösterebilir.',
      },
      {
        question: 'Oluşturucu Product şemasının hangi alanlarını destekler?',
        answer:
          'Ürün adı, fiyat, para birimi ve stok durumunu kapsar; arama motorlarının alışveriş sonuçlarında kullandığı temel alanlar bunlardır.',
      },
      {
        question: 'BreadcrumbList şeması ne için kullanılır?',
        answer:
          'Sayfanın gezinme hiyerarşisini açıklar (örneğin Ana Sayfa > Kılavuzlar > Konu); arama motorları sonuçlarda ekmek kırıntısı izleri gösterebilir.',
      },
      {
        question: 'Organization şeması ne için kullanılır?',
        answer:
          'Ad, logo ve resmî web sitesi dahil marka kimliğinizi bildirir; arama motorları tutarlı bir bilgi paneli gösterebilir.',
      },
      {
        question: 'Şema İşaretleme Oluşturucu içeriğimi bir yere yükler mi?',
        answer:
          'Hayır. Tüm işaretleme tarayıcınızda yerel olarak oluşturulur; girdiğiniz hiçbir şey cihazınızdan dışarı çıkmaz.',
      },
      {
        question: 'Şemayı .jsonld dosyası olarak dışa aktarabilir miyim?',
        answer:
          'Evet. Dışa aktarma düğmesi, saklayabileceğiniz, sürümleyebileceğiniz veya bir geliştiriciye verebileceğiniz bağımsız bir .jsonld dosyası indirir.',
      },
      {
        question: 'JSON-LD kodumda sözdizimi hatası olursa ne olur?',
        answer:
          'Tüm blok arama motorları tarafından yok sayılabilir; yayınlamadan önce çıktıyı her zaman Zengin Sonuçlar Testi ile doğrulayın.',
      },
      {
        question: 'Şema İşaretleme Oluşturucuyu tarif veya etkinlik sayfası için kullanabilir miyim?',
        answer:
          'Oluşturucu yalnızca beş türü kapsar; Tarif ve Etkinlik sayfaları el yazımı JSON-LD gerektirir; bunları aynı araçlarla doğrulayabilirsiniz.',
      },
      {
        question: 'Şemadaki SSS cevapları sayfadaki görünür metinle eşleşmeli mi?',
        answer:
          'Evet. Google, yapılandırılmış verinin kullanıcıların sayfada gerçekten görebildiği içerikle eşleşmesini ister; aksi hâlde işaretleme yok sayılabilir.',
      },
      {
        question: 'Oluşturulan JSON-LD kodunu elle düzenleyebilir miyim?',
        answer:
          'Evet. Standart JSON biçimindedir; herhangi bir düzenleyicide alan ekleyebilir veya değiştirebilir, yayınlamadan önce sonucu yeniden doğrulayabilirsiniz.',
      },
      {
        question: 'Şema İşaretleme Oluşturucu çevrimdışı çalışır mı?',
        answer:
          'Evet. Tamamen tarayıcınızda, yükleme olmadan çalışır; sayfa yüklendikten sonra internet bağlantısı olmadan şema işaretlemesi oluşturabilirsiniz.',
      },
    ],
  },
  'url-slug-generator': {
    instructions: [
      {
        title: 'Başlıkları veya sayfa adlarını girin',
        description:
          'Sayfa Başlıkları metin alanına satır başına bir tane olmak üzere bir veya birden fazla başlık yapıştırın.',
      },
      {
        title: 'Slug biçimlendirme kurallarını ayarlayın',
        description:
          'Temel Alan Adınızı girin, kısa çizgi (-) veya alt çizgi (_) seçin, Maksimum Slug Uzunluğunu belirleyin ve gereksiz kelime kaldırma veya sondaki eğik çizgi seçeneklerini açıp kapatın.',
      },
      {
        title: 'Oluşturulan slug adreslerini önizleyin',
        description:
          'Sonuç tablosunda aksan dönüştürmeyi, gereksiz kelime kaldırmayı ve uzun slug adreslerinin kelime sınırında kesilmesini inceleyin.',
      },
      {
        title: 'Uzunluk veya gereksiz kelime ayarlarını düzenleyin',
        description:
          'Slug anlamını kaybederse veya garip kesilirse maksimum slug uzunluğunu artırın veya gereksiz kelime kaldırmayı kapatıp yeniden oluşturun.',
      },
      {
        title: 'Tek tek slug adreslerini veya toplu listeleri kopyalayın',
        description:
          'Tablodan tek tek slug kopyalayın veya tüm slug adreslerini ya da tam URL adreslerini tek tıkla dışa aktarın.',
      },
      {
        title: 'Canlı bir slug adresini yönlendirme olmadan asla değiştirmeyin',
        description:
          'Dizine eklenmiş bir sayfanın slug adresini değiştirirseniz eski URL adresinden yeni URL adresine 301 yönlendirmesi ekleyin; geri bağlantılar ve sıralamalar yeni adrese taşınsın.',
      },
    ],
    examples: [
      {
        title: 'Başlıktaki gereksiz kelimeleri ve aksanları temizlemek',
        input: '10 Best Café & Productivity Tools in 2026',
        output: '10-best-cafe-and-productivity-tools-2026',
        explanation: 'é harfini e harfine dönüştürür, & işaretini and olarak genişletir, "in" kelimesini çıkarır ve küçük harfli parçaları kısa çizgiyle birleştirir.',
      },
      {
        title: 'Tüm editoryal takvimin slug adreslerini tek seferde oluşturmak',
        input: 'Satır başına bir tane olmak üzere 5 blog başlığı',
        output: 'Her biriyle birlikte tam URL adresi içeren 5 temiz slug içeren tablo',
        explanation: 'Toplu işlem onlarca başlığı aynı anda dönüştürür; tüm takvim listesi tek seferde hazır olur.',
      },
    ],
    benefits: [
      'Onlarca editoryal takvim başlığını aynı anda toplu olarak işler',
      'Uzun slug adreslerini kelimenin ortasından değil, kısa çizgi ve kelime sınırında keser',
      'Gereksiz kelime kaldırma açıkken bile kısa slug adreslerinin temel anlamını korur',
      'Google URL yapısı önerilerine uyar (alt çizgi yerine UTF-8 ASCII kısa çizgi)',
    ],
    useCases: [
      'Blog kategorileri veya CMS koleksiyonları yayına girmeden önce temiz URL yapısı planlamak',
      'Aksanlı uluslararası ürün başlıklarını ASCII güvenli slug adreslerine temizlemek',
      'Aşırı uzun CMS kalıcı bağlantılarını 4–6 kelimelik net yollara indirerek denetlemek',
      'XML Site Haritası Oluşturucuya verilecek canonical hedef listeleri hazırlamak',
    ],
    faqs: [
      {
        question: 'SEO URL slug adreslerinde kısa çizgi (-) mi yoksa alt çizgi (_) mi kullanılmalı?',
        answer:
          'Google, URL adreslerinde kelime ayırıcı olarak kısa çizgi (-) önerir; arama ayrıştırıcıları kısa çizgiyi boşluk sayarken alt çizgi bitişik kelimeleri birleştirir.',
      },
      {
        question: 'Gereksiz kelimeleri kaldırmak okunabilirliğe zarar verir mi?',
        answer:
          '"a", "the" veya "of" gibi kısa dolgu kelimelerini kaldırmak çok uzun blog slug adreslerini daha net yapar. Kaldırmak temel anlamı değiştiriyorsa (örneğin "how to") gereksiz kelimeleri koruyun.',
      },
      {
        question: 'Dizine eklenmiş canlı URL adreslerinin sluglarını değiştirmeli miyim?',
        answer:
          'Yalnızca eski slug adresinden yeni slug adresine kalıcı 301 yönlendirmesi uygularsanız (Canonical ve 301 Yönlendirme Oluşturucumuzla); geri bağlantılar ve sıralamalar temiz şekilde aktarılır.',
      },
      {
        question: 'URL Slug Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez ve bir oturumda dönüştürebileceğiniz başlık sayısında sınır yoktur.',
      },
      {
        question: 'Birçok başlık için slug adreslerini aynı anda oluşturabilir miyim?',
        answer:
          'Evet. Satır başına bir başlık yapıştırın; araç tüm toplu listeyi tek bir tabloda dönüştürür; tüm editoryal takvimi tek seferde slug adresine çevirebilirsiniz.',
      },
      {
        question: 'Aksanlı karakterler slug adreslerinde nasıl işlenir?',
        answer:
          'Aksan işaretleri düz ASCII karakterlere dönüştürülür: é harfi e, ü harfi u, ñ harfi n olur; URL adresleri tarayıcılarda ve sunucularda okunaklı ve güvenli kalır.',
      },
      {
        question: 'Slug adresindeki & ve @ gibi sembollere ne olur?',
        answer:
          'Ve işareti (&) "and" olarak genişletilir, diğer noktalama işaretlerinin çoğu kaldırılır; URL adresindeki semboller bağlantıları bozabilir veya paylaşımda dağınık görünebilir.',
      },
      {
        question: 'Gereksiz kelimeler nedir ve neden kaldırılır?',
        answer:
          'Gereksiz kelimeler "a", "the", "of" ve "in" gibi kısa dolgu kelimeleridir. Kaldırmak, temel anlamı değiştirmeden uzun blog slug adreslerini kısaltır.',
      },
      {
        question: 'Slug adreslerimde gereksiz kelimeleri koruyabilir miyim?',
        answer:
          'Evet. Gereksiz kelime kaldırma düğmesini kapatın; oluşturucu kısa dolgu kelimeler dahil başlıktaki her kelimeyi korur.',
      },
      {
        question: 'SEO slug adresi için ideal uzunluk nedir?',
        answer:
          '3 ila 6 anlamlı kelime hedefleyin. Maksimum Slug Uzunluğu ayarıyla slug adreslerini kısa tutun; araç kelime sınırında keser, kelimeler asla ortadan bölünmez.',
      },
      {
        question: 'URL slug adresleri küçük harf olmalı mı?',
        answer:
          'Evet. Küçük harfli slug adresleri yinelenen içerik sorunlarını önler; bazı sunucular /Blog-Post ile /blog-post adreslerini farklı sayfalar sayar.',
      },
      {
        question: 'Slug adreslerinde kısa çizgi yerine alt çizgi kullanabilir miyim?',
        answer:
          'Ayarlardan alt çizgi seçebilirsiniz, ancak kısa çizgi önerilir; arama motorları kısa çizgiyi kelime ayırıcı, alt çizgiyi birleştirici sayar.',
      },
      {
        question: 'Başlıklarım bir yere yükleniyor mu?',
        answer:
          'Hayır. URL Slug Oluşturucu tamamen tarayıcınızda çalışır; başlıklarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Alan adımla tam URL önizlemesini nasıl görürüm?',
        answer:
          'Temel Alan Adı alanına alan adınızı girin; sonuç tablosu her slug adresini kopyalayabileceğiniz tam URL adresi olarak gösterir.',
      },
      {
        question: 'Slug adreslerim sondaki eğik çizgiyle mi bitmeli?',
        answer:
          'İsteğe bağlıdır, ancak tutarlı olun: sitenizin kullandığı URL stiline uymak için sondaki eğik çizgi düğmesini kullanın; yinelenen sürümler oluşturmayın.',
      },
      {
        question: 'Bu aracı ürün ve kategori sayfaları için kullanabilir miyim?',
        answer:
          'Evet. Her sayfa adı için çalışır; ürün başlıkları, kategori adları, açılış sayfaları ve dokümantasyon başlıkları aynı şekilde dönüşür.',
      },
      {
        question: 'Slug adresim belirlediğim maksimum uzunluktan neden kısa kesildi?',
        answer:
          'Araç, kelimenin ortasından kesmek yerine sınırdan önceki en yakın kısa çizgide keser; slug adresi maksimum uzunluktan birkaç karakter kısa olabilir.',
      },
      {
        question: 'Latin olmayan alfabelerle yazılmış başlıklara ne olur?',
        answer:
          'Yalnızca Latin aksanları dönüştürülür; diğer alfabelerin karakterleri kaldırılır; tamamen başka bir alfabeyle yazılmış bir başlık çok kısa bir slug üretebilir. En iyi sonuç için anahtar kelimelerin Latin sürümünü ekleyin.',
      },
      {
        question: 'Tüm slug adreslerimi aynı anda dışa aktarabilir miyim?',
        answer:
          'Evet. Toplu kopyalama düğmeleriyle tek tıkla tüm slug adreslerini veya tüm tam URL adreslerini kopyalayın; tek tek kopyalamak zorunda kalmazsınız.',
      },
      {
        question: 'Slug ile kalıcı bağlantı arasındaki fark nedir?',
        answer:
          'Slug, "best-cafe-tools" gibi URL adresinin okunabilir son bölümüdür; kalıcı bağlantı ise alan adı ve klasörler dahil tam URL adresidir. Alt çizgi ayırıcılı hızlı geliştirici metin dönüştürme için Metinden Slug Oluşturucuya bakın.',
      },
    ],
  },
  'keyword-density-checker': {
    instructions: [
      {
        title: 'Makale taslağını veya HTML kodunu yapıştırın',
        description:
          'Düz metin veya ham HTML girin (işaretleme etiketlerini ve script/style bloklarını yok saymak için HTML Etiketlerini Kaldır seçeneğini açık tutun).',
      },
      {
        title: 'Hedef ifadeyi ve n-gram boyutunu girin',
        description:
          'İsteğe bağlı Hedef Anahtar Kelime/İfade belirtin ve 1 Kelimeli, 2 Kelimeli ve 3 Kelimeli ifade analizi arasında geçiş yapın.',
      },
      {
        title: 'Sıklık tablosunu inceleyin',
        description:
          'Konu odağını doğrulamak ve doğal olmayan ifade tekrarını azaltmak için en sık geçen terimleri ve paylarını (%) tarayın.',
      },
      {
        title: 'Kelime sayısı, okuma süresi ve kelime dağarcığını kontrol edin',
        description:
          'Toplam kelime, benzersiz kelime payı ve okuma süresiyle taslağın çok ince, çok uzun veya çok tekrarlı olup olmadığını değerlendirin.',
      },
      {
        title: 'Aşırı kullanılan ifadeleri doğal şekilde yeniden yazın',
        description:
          'Aynı 2 veya 3 kelimelik ifade tabloya hâkim olduğunda, konu anahtar kelimenizi tamamen silmek yerine eş anlamlılar ve zamirlerle çeşitlendirin.',
      },
      {
        title: 'Sonuçlara güvenmeden önce garip sayıları düzeltin',
        description:
          'Sayılar yanlış görünüyorsa HTML Etiketlerini Kaldır seçeneğinin açık olduğundan ve gezinme menüleri, kod blokları veya altbilgilerin metinle birlikte yapıştırılmadığından emin olun.',
      },
    ],
    examples: [
      {
        title: '500 kelimelik taslakta istemsiz ifade tekrarını yakalamak',
        input: 'Taslak makale + Hedef: "technical seo" + 2 Kelimeli İfadeler',
        output: 'Pay (%) ile birlikte en iyi bigramlar ("technical seo", "meta descriptions", "canonical tags") sıralanır.',
        explanation: 'Hem birincil konu uyumunu hem de doğal şekilde çeşitlendirebileceğiniz tekrarlı ifadeleri gösterir.',
      },
      {
        title: 'Açılış sayfası metninde konu kapsamını kontrol etmek',
        input: 'Açılış sayfası HTML kodu + HTML Etiketlerini Kaldır açık + Hedef: "image compressor"',
        output: '"image compressor" ifadesi %1,8 yoğunlukla ilk 3 ifade arasında',
        explanation: 'HTML etiketleri kaldırıldıktan sonra yalnızca görünen metin sayılır; yoğunluk temiz çıkar.',
      },
    ],
    benefits: [
      'Yalnızca tek kelimeleri değil, çok kelimeli ifadeleri (bigram ve trigram) analiz eder',
      'Metni saymadan önce <script>, <style> ve HTML etiketlerini güvenli şekilde kaldırır',
      'Mekanik anahtar kelime doldurmaya karşı dürüst rehberlik sunar',
      'Yayınlanmamış taslakları ve müşteri metinlerini kesinlikle tarayıcı belleğinde tutar',
    ],
    useCases: [
      'Birincil konuların garip doldurma olmadan net göründüğünden emin olmak için uzun kılavuzları düzenlemek',
      'Konu kelime dağarcığı dengesi için rakipsiz taslakları denetlemek',
      'Dışa aktarılan HTML kodundan temiz şekilde ayrılmış açılış sayfası metnini incelemek',
      'Kelime Sayacı ve Okunabilirlik Denetleyicisi ile birlikte ortalama okuma süresini kontrol etmek',
    ],
    faqs: [
      {
        question: 'Google için ideal bir anahtar kelime yoğunluğu yüzdesi var mı?',
        answer:
          'Hayır. Google, sabit bir anahtar kelime yoğunluğu eşiği olmadığını açıkça belirtir. Okuyucular için doğal yazın; yoğunluk denetimlerini yalnızca konu kapsamını kontrol etmek ve doğal olmayan tekrardan kaçınmak için kullanın.',
      },
      {
        question: 'HTML Etiketlerini Kaldır, <script> ve <style> öğelerini nasıl işler?',
        answer:
          'Kalan HTML etiketlerini kaldırmadan önce tüm <script> ve <style> bloklarını kaldırır; JavaScript veya CSS parçaları kelime istatistiklerine karışmaz.',
      },
      {
        question: 'Burada bir alan adı yazarak canlı rakip URL adresi analiz edebilir miyim?',
        answer:
          'Hayır. Metni veya HTML kaynağını doğrudan yapıştırın; tarayıcı uygulamaları sunucu aracısı olmadan kaynaklar arası üçüncü taraf web sitelerini kazıyamaz.',
      },
      {
        question: 'Anahtar Kelime Yoğunluğu Denetleyicisi ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez ve istediğiniz kadar taslak analiz edebilirsiniz.',
      },
      {
        question: 'Anahtar kelime yoğunluğu tam olarak nedir?',
        answer:
          'Anahtar kelime yoğunluğu, bir kelime veya ifadenin metindeki toplam kelimelerin yüzde kaçında geçtiğidir. 500 kelimede 5 kez kullanılan bir ifade %1 yoğunluğa sahiptir. Tam sıklık tabloları ve CSV dışa aktarma için Kelime Sıklığı Sayacına bakın.',
      },
      {
        question: 'Anahtar kelime doldurma nedir?',
        answer:
          'Anahtar kelime doldurma, sıralamada yükselmek için bir ifadeyi doğal olmayan sıklıkta tekrarlamaktır. Ziyaretçilere kötü görünür ve sıralamaya zarar verebilir; bu aracı tekrarı yakalamak için kullanın, hedef sayıya ulaşmak için değil.',
      },
      {
        question: 'N-gram nedir ve 2 ile 3 kelimelik ifadeleri neden kontrol etmeliyim?',
        answer:
          'N-gram, n kelimelik dizilerdir: bigram 2 kelimelik, trigram 3 kelimelik ifadelerdir. Bunları kontrol etmek, tek kelime sayımlarının tamamen kaçırdığı tekrarlı ifadeleri ortaya çıkarır.',
      },
      {
        question: 'Anlamlı bir yoğunluk denetimi için kaç kelime gerekir?',
        answer:
          'Kısa metinler gürültülü yüzdeler üretir; istikrarlı sonuçlar için en az 300 kelime hedefleyin. Çok kısa parçalar ham sayıları gösterebilir, ancak yüzdelere temkinli yaklaşın.',
      },
      {
        question: 'Araç başlıklar ve listeler içindeki kelimeleri sayar mı?',
        answer:
          'Evet. Yapıştırdığınız tüm görünür metin sayılır; başlıklar, madde listeleri ve açıklamalar dahil, çünkü arama motorları bu içeriği de görür.',
      },
      {
        question: 'Hedef ifadem neden %0 görünüyor?',
        answer:
          'Tam yazımı ve ifadeyi kontrol edin; çoğul, kısa çizgi ve kelime sırası eşleşmelidir. HTML yapıştırdıysanız HTML Etiketlerini Kaldır seçeneğinin açık olduğundan emin olun.',
      },
      {
        question: 'Birden fazla anahtar kelimenin yoğunluğunu aynı anda kontrol edebilir miyim?',
        answer:
          'Her çalıştırma bir hedef ifadeyi izler. Başka bir anahtar kelimeyi kontrol etmek için hedef ifadeyi değiştirip aynı metinde analizi yeniden çalıştırın.',
      },
      {
        question: 'Denetleyici "the" ve "and" gibi gereksiz kelimeleri sayar mı?',
        answer:
          'Evet, 1 kelimelik sıklık tablosunda görünürler; ancak konu kelimelerine ve ifadelere odaklanın: gereksiz kelimeler her metinde doğal olarak sıktır ve SEO hakkında pek bir şey söylemez.',
      },
      {
        question: 'Taslağım bir yere yükleniyor mu?',
        answer:
          'Hayır. Anahtar Kelime Yoğunluğu Denetleyicisi tamamen tarayıcınızda çalışır; yayınlanmamış taslaklar ve müşteri metinleri cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Blog yazısı için iyi bir okuma süresi nedir?',
        answer:
          'Konuya bağlıdır, ancak araç okuma süresini gösterir; yazının okuyucu beklentisine uyup uymadığını değerlendirebilirsiniz: hızlı bir kılavuz 3 dakika, derinlemesine bir eğitim 10 dakika veya daha fazla olabilir.',
      },
      {
        question: 'CMS sistemimden kopyaladığım HTML kodunu yapıştırabilir miyim?',
        answer:
          'Evet. Ham HTML kodunu yapıştırın ve kelimeler sayılmadan önce etiketlerin, komut dosyalarının ve stillerin kaldırılması için HTML Etiketlerini Kaldır seçeneğini açık tutun.',
      },
      {
        question: 'Denetleyici İngilizce olmayan metinlerle çalışır mı?',
        answer:
          'Evet. Kelime sayma, kelimeleri boşlukla ayıran her dilde çalışır; n-gram tabloları o dildeki en sık ifadeleri listeler.',
      },
      {
        question: 'Konuyu kaldırmadan yoğunluğu nasıl düşürürüm?',
        answer:
          'Tam anahtar kelimeyi tekrarlamak yerine eş anlamlılar, zamirler ve çeşitli ifadeler kullanın. Konu net kalır, metin doğal okunur.',
      },
      {
        question: 'Kelime dağarcığı çeşitliliği ne anlama gelir?',
        answer:
          'Toplam kelimelere kıyasla benzersiz kelimelerin payıdır. Daha yüksek pay genellikle daha zengin, daha çeşitli bir yazım demektir; çok düşük pay tekrarlı metin işareti olabilir.',
      },
      {
        question: 'PDF veya Word belgesini analiz edebilir miyim?',
        answer:
          'Araç yapıştırılan metni kabul eder; metni PDF veya Word dosyanızdan kopyalayıp yapıştırın: yoğunluk denetimi için biçimlendirme gerekmez.',
      },
      {
        question: 'N-gram boyutu değişince yüzdeler neden değişir?',
        answer:
          'Her n-gram boyutunun kendi toplamı vardır: 500 kelimelik bir metinde 500 tek kelime, ancak yalnızca 499 iki kelimelik ifade bulunur; aynı ifade sayısı biraz farklı bir yüzde üretir.',
      },
    ],
  },
  'canonical-hreflang-generator': {
    instructions: [
      {
        title: 'Hreflang veya 301 Yönlendirmeleri seçin',
        description:
          'Uluslararası SEO için Canonical ve Hreflang Etiketleri seçeneğini veya URL taşımaları için 301 Yönlendirme Kuralı Oluşturucu seçeneğini seçin.',
      },
      {
        title: 'Yerel ayarları veya URL taşıma çiftlerini girin',
        description:
          'ISO dil-bölge kodları (en-US, en-GB, x-default) ve URL adresleri ekleyin veya eski-yeni yol çiftlerini yapıştırın.',
      },
      {
        title: 'Oluşturulan etiketleri veya kuralları inceleyin',
        description:
          'Kopyalamadan önce her yerel ayar kodunu, URL adresini ve yönlendirme çiftini yazım hatası açısından tarayın; tek bir yanlış kod tüm hreflang setini bozabilir.',
      },
      {
        title: 'x-default ve kendine başvuran canonical ekleyin',
        description:
          'x-default yedek yerel ayarını ekleyin ve her sayfanın kendisini kendi canonical adresi olarak listelediğinden emin olun.',
      },
      {
        title: 'Platforma hazır yapılandırmayı kopyalayın',
        description:
          'HTML <link> etiketlerini, <xhtml:link> XML satırlarını veya _redirects / .htaccess / nginx kurallarını doğrudan kopyalayın.',
      },
      {
        title: 'Dağıtımdan sonra doğrulayın',
        description:
          'Yayına girdikten sonra sayfa kaynağına bakın veya bir hreflang doğrulayıcı kullanarak etiketlerin mevcut, karşılıklı ve doğru URL adreslerine işaret ettiğini doğrulayın.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages 301 taşıma kuralı',
        input: '/old-blog-post, /blog/new-post/',
        output: '/old-blog-post /blog/new-post/ 301',
        explanation: 'Açık 301 kalıcı durumuyla tam Cloudflare Pages _redirects sözdizimini çıkarır.',
      },
      {
        title: 'İngilizce ve İspanyolca sayfalar için hreflang seti',
        input: 'en: https://example.com/ · es: https://example.com/es/ · x-default: https://example.com/',
        output: 'x-default dahil, her iki sayfa için karşılıklı <link rel="alternate" hreflang="..."> etiketleri',
        explanation: 'Her sayfa kendisini ve diğer sürümü bağlar; arama motorları doğru dildeki sürümü gösterebilir.',
      },
    ],
    benefits: [
      'HTML <link rel="alternate"> ve XML <xhtml:link> biçimlerini tutarlı şekilde çıkarır',
      'Cloudflare Pages _redirects, Apache .htaccess ve Nginx sunucu sözdizimini destekler',
      'Kendine başvuran canonical ve x-default yedek yerel ayar kullanımını teşvik eder',
      'Kaynak yönlendirme yollarındaki baştaki eğik çizgileri otomatik olarak normalleştirir',
    ],
    useCases: [
      'Yinelenen içerik cezası olmadan yerelleştirilmiş İngilizce, İspanyolca ve Fransızca bölgesel sayfaları temiz şekilde yayına almak',
      'Yeniden tasarım sırasında slug adresi değiştirirken geri bağlantı değerini korumak',
      'Cloudflare Pages /public/_redirects dağıtım dosyalarını saniyeler içinde oluşturmak',
      'Uluslararası site haritaları göndermeden önce karşılıklı hreflang setlerini doğrulamak',
    ],
    faqs: [
      {
        question: 'Hreflang etiketleri çift yönlü ve karşılıklı olmalı mı?',
        answer:
          'Evet. A sayfası B sayfasını hreflang="es" ile bağlıyorsa B sayfası da A sayfasını hreflang="en" (ve kendisini) bağlamalıdır; aksi hâlde arama motorları açıklamayı yok sayar.',
      },
      {
        question: 'Hreflang içinde x-default ne zaman kullanılmalı?',
        answer:
          'Tarayıcı dili veya bölgesi belirli bir alternatifle eşleşmeyen ziyaretçiler için yedek uluslararası sayfanızı belirtmek üzere hreflang="x-default" kullanın.',
      },
      {
        question: 'Canonical URL adresleri diller arası işaret etmeli mi (örneğin es → en)?',
        answer:
          'Hayır. Çevrilen her dil sürümü kendine başvuran, kendisine işaret eden bir canonical bildirmelidir; hreflang ise yerelleştirilmiş eşdeğerleri birbirine bağlar.',
      },
      {
        question: 'Hreflang Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez ve ihtiyacınız kadar hreflang seti ve yönlendirme kuralı oluşturabilirsiniz.',
      },
      {
        question: 'Hreflang nedir ve neden önemlidir?',
        answer:
          'Hreflang, arama motorlarına her ziyaretçiye sayfanın hangi dil ve bölgesel sürümünün gösterileceğini söyleyen bir HTML veya XML açıklamasıdır; İngilizce kullanıcılar İngilizce sayfayı, İspanyolca kullanıcılar İspanyolca sayfayı görür.',
      },
      {
        question: 'Dil-bölge kodları hangi biçimde olmalı?',
        answer:
          'İsteğe bağlı ISO bölgesiyle birlikte ISO dil kodları kullanın: en, es, fr-CA veya en-GB gibi. Önce dil gelir, sonra kısa çizgi, sonra büyük harflerle bölge.',
      },
      {
        question: 'Sitem yalnızca tek dildeyse hreflang gerekir mi?',
        answer:
          'Hayır. Hreflang yalnızca aynı içerik birden fazla dilde veya bölgesel sürümde varsa yararlıdır.',
      },
      {
        question: 'Hreflang etiketini HTML yerine XML site haritama koyabilir miyim?',
        answer:
          'Evet. Araç her iki biçimi de çıkarır: sayfa başlığı için HTML bağlantı etiketleri ve XML site haritası için xhtml:link blokları. Bir yer seçin ve tutarlı kalın.',
      },
      {
        question: 'Kendine başvuran canonical nedir?',
        answer:
          'Sayfadaki, sayfanın kendisine işaret eden canonical etiketidir. Çevrilen sürümler dahil sayfanın her sürümünde bir tane bulunmalıdır.',
      },
      {
        question: 'Canonical etiket yerine 301 yönlendirmesi ne zaman kullanılmalı?',
        answer:
          'Sayfa kalıcı olarak yeni bir URL adresine taşındığında 301 yönlendirmesi kullanın. İki benzer sayfanın da canlı kalması ve arama motorlarının birini tercih etmesini istediğinizde canonical etiket kullanın.',
      },
      {
        question: '301 ve 302 yönlendirmesi arasındaki fark nedir?',
        answer:
          '301 kalıcıdır ve sıralama sinyallerinin çoğunu yeni URL adresine aktarır; 302 geçicidir ve arama motorlarına eski URL adresinin geri dönebileceğini söyler; kalıcı taşıma için yanlış seçimdir.',
      },
      {
        question: 'Cloudflare Pages _redirects nasıl çalışır?',
        answer:
          'Site public klasörünüze, satır başına bir kural içeren bir _redirects dosyası koyarsınız: eski yol, yeni yol ve durum kodu; site dağıtıldığında Cloudflare yönlendirmeleri uygular.',
      },
      {
        question: 'Bir kural ile tüm klasörü yönlendirebilir miyim?',
        answer:
          'Araç her URL çifti için bir kural çıkarır. Klasör genelinde taşıma için Cloudflare Pages veya Apache üzerinde joker karakter veya splat kuralı kullanın ya da tam çift listesini burada oluşturun.',
      },
      {
        question: '301 yönlendirmeleri sıralama sinyallerini yeni sayfaya aktarır mı?',
        answer:
          'Evet. 301 yönlendirmesi eski sayfanın sıralama sinyallerinin ve bağlantı değerinin çoğunu yeni URL adresine aktarır; kalıcı taşımalar için standart seçim olmasının nedeni budur.',
      },
      {
        question: '301 yönlendirmesinden sonra eski URL site haritasında kalmalı mı?',
        answer:
          'Hayır. Yönlendirilen URL adreslerini site haritanızdan çıkarın ve yalnızca yeni hedef URL adreslerini listeleyin; arama motorları güncel sayfaları tarasın.',
      },
      {
        question: '301 yönlendirmesini ne kadar süre canlı tutmalıyım?',
        answer:
          'En az bir yıl, ideal olarak kalıcı olarak tutun. Erken kaldırmak, eski URL adresine işaret eden eski geri bağlantıları ve yer imlerini bozabilir.',
      },
      {
        question: 'Hreflang yinelenen içerik sorunlarını düzeltir mi?',
        answer:
          'Tek başına düzeltmez. Hreflang arama motorlarına her kitleye hangi sürümün gösterileceğini söyler; aynı dildeki gerçekten yinelenen sayfalar için hâlâ canonical etiketler veya birleştirme gerekir.',
      },
      {
        question: 'Yanlış bir yerel ayar kodu kullanırsam ne olur?',
        answer:
          'Arama motorları geçersiz kodları yok sayar; en-UK gibi bir yazım hatası (en-GB yerine) o dil sürümünü sessizce bozar. Dağıtımdan önce her kodu iki kez kontrol edin.',
      },
      {
        question: 'URL listem bir yere yükleniyor mu?',
        answer:
          'Hayır. Canonical, Hreflang ve 301 Yönlendirme Oluşturucu tamamen tarayıcınızda çalışır; URL adresleriniz ve taşıma planlarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'İkiden fazla dil için hreflang etiketi oluşturabilir miyim?',
        answer:
          'Evet. Siteniz kaç dili destekliyorsa o kadar yerel ayar satırı ekleyin; araç girdiğiniz her dil sürümünü kapsayan eksiksiz bir karşılıklı set oluşturur.',
      },
    ],
  },
  'on-page-seo-checker': {
    instructions: [
      {
        title: 'Sayfanızın HTML kaynağını kopyalayın',
        description:
          'Sayfa Kaynağını Görüntüle seçeneğini açın (veya derlenmiş dist/index.html dosyasına bakın) ve HTML kodunu kaynak metin alanına yapıştırın.',
      },
      {
        title: 'DOM Denetim Puanını ve kontrol listelerini inceleyin',
        description:
          'Başlık, meta açıklama, tek H1, canonical bağlantısı, alt metin ve yapılandırılmış veri için geçti ve uyarı göstergelerine bakın.',
      },
      {
        title: 'Başlık ana hatlarını ve bağlantıları doğrulayın',
        description:
          'Çıkarılan H1–H4 ağacını ve site içi ile site dışı bağlantı sayısını inceleyerek atlanan düzeyleri veya eksik etiketleri düzeltin.',
      },
      {
        title: 'Uyarıları öncelik sırasına göre düzeltin',
        description:
          'Önce eksik veya çok uzun başlık ve meta açıklamayla başlayın, ardından yinelenen H1 etiketleri, sonra eksik görsel alt metni.',
      },
      {
        title: 'Düzeltmelerden sonra yeniden yapıştırıp yeniden denetleyin',
        description:
          'Güncellenmiş HTML kodunu yapıştırıp denetimi yeniden çalıştırarak puanın iyileştiğini ve yeni uyarı çıkmadığını doğrulayın.',
      },
      {
        title: 'JavaScript ile oluşturulan sayfaları doğru şekilde denetleyin',
        description:
          'React veya SPA sayfasında ham Sayfa Kaynağında meta etiketler eksikse tarayıcı DevTools Öğeler panelinden canlı outerHTML kodunu kopyalayın.',
      },
    ],
    examples: [
      {
        title: 'Oluşturulmuş statik HTML çıktısını denetlemek',
        input: '<title>, <meta description>, H1/H2 ve JSON-LD içeren tam <html> belgesi',
        output: '6/6 denetim geçti · H1–H4 ana hatları + site içi ve site dışı bağlantı dökümü',
        explanation: 'Güvenilmeyen komut dosyalarını çalıştırmadan tarayıcının yerleşik DOMParser aracını temiz şekilde kullanır.',
      },
      {
        title: 'Blog şablonunda yinelenen H1 yakalamak',
        input: 'İki H1 etiketi içeren WordPress yazı HTML kodu',
        output: 'Uyarı: Sayfada 2 H1 etiketi bulundu; yalnızca bir tane olmalı',
        explanation: 'Denetim başlık ana hatlarını çıkarır; yinelenen H1 ve atlanan düzeyler hemen görünür.',
      },
    ],
    benefits: [
      'Yerleşik DOMParser kullanır (yapıştırılan <script> etiketlerini veya harici yükleri asla çalıştırmaz)',
      'Tarayıcı CORS sınırları konusunda dürüsttür; engellenen uzak URL adreslerini kazıyormuş gibi davranmaz',
      'Tam H1–H4 belge ana hatlarını temiz şekilde çıkarır',
      'Klasik SEO etiketlerinin yanında Open Graph ve JSON-LD varlığını da doğrular',
    ],
    useCases: [
      'Hazırlık derlemeleri ve statik HTML çıktılarında dağıtımdan önce kalite kontrolü',
      'CMS blog şablonlarında yanlışlıkla yinelenen <h1> etiketlerini veya boş alt özniteliklerini kontrol etmek',
      'Sunucu tarafında oluşturulan sayfaların canonical ve meta etiketlerini temiz şekilde verdiğini doğrulamak',
      'E-posta korumalı veya localhost HTML sayfalarını incelemek; bulut tarayıcıları bunlara erişemez',
    ],
    faqs: [
      {
        question: 'Bu araç neden web sitesi URL adresi yazmak yerine HTML kaynağı yapıştırmamı istiyor?',
        answer:
          'Tarayıcılar, istemci tarafı JavaScript kodunun rastgele harici web sitelerini okumasını engelleyen Kaynaklar Arası Kaynak Paylaşımı (CORS) politikaları uygular; localhost ve özel hazırlık URL adreslerine herkese açık sunuculardan ulaşılamaz. Sayfa Kaynağını Görüntüle seçeneğini yapıştırmak yerel denetimi %100 güvenilir ve özel yapar.',
      },
      {
        question: 'JavaScript ile oluşturulan SPA sayfaları ham Sayfa Kaynağı ile doğru denetlenebilir mi?',
        answer:
          "React meta etiketleri çalışma zamanında eklediği için istemci tarafında oluşturulan SPA sayfalarında ham Sayfa Kaynağı yerine Chrome veya Firefox DevTools Öğeler panelinden canlı outerHTML kodunu kopyalayın.",
      },
      {
        question: 'DOMParser yapıştırılan HTML içindeki komut dosyalarını çalıştırır mı?',
        answer:
          'Hayır. DOMParser.parseFromString yöntemi JavaScript çalıştırmadan veya harici görsel yüklemeden, yalnızca inceleme için hareketsiz bir DOM ağacı oluşturur.',
      },
      {
        question: 'Sayfa İçi SEO Denetleyicisi ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez ve istediğiniz kadar sayfa denetleyebilirsiniz.',
      },
      {
        question: 'İdeal başlık etiketi uzunluğu nedir?',
        answer:
          '50 ila 60 karakter hedefleyin. Daha uzun başlıklar arama sonuçlarında kesilir; çok kısa başlıklar sayfayı net tanımlama fırsatını boşa harcar.',
      },
      {
        question: 'İdeal meta açıklama uzunluğu nedir?',
        answer:
          '150 ila 160 karakter hedefleyin. Bu uzunluk genellikle arama sonuçlarında kesilmeden tam olarak görüntülenir.',
      },
      {
        question: 'Bir sayfada kaç H1 etiketi olmalı?',
        answer:
          'Bir tane. Tek bir H1 sayfanın ana konusunu belirtir; alt konular altındaki H2 ve H3 başlıklarına aittir.',
      },
      {
        question: 'Başlık düzeylerini atlayabilir miyim, örneğin H1 başlığından sonra H3?',
        answer:
          'Bundan kaçının. Hiyerarşiyi sırayla koruyun: H1, sonra H2, sonra H3; arama motorları ve ekran okuyucular sayfa yapısını takip edebilsin.',
      },
      {
        question: 'Sayfamda canonical etiketi yoksa ne olur?',
        answer:
          'Arama motorları canonical URL adresini kendileri seçer; tercih ettiğiniz sürüm olmayabilir. Açıkça eklemek tahmin işini ortadan kaldırır.',
      },
      {
        question: 'Görsel alt metni SEO için neden önemlidir?',
        answer:
          'Alt metin görselleri arama motorlarına ve ekran okuyuculara açıklar, görsellerin görsel aramada sıralanmasına yardımcı olur ve görsel yüklenemediğinde sayfayı kullanılabilir tutar.',
      },
      {
        question: 'JSON-LD nedir ve neden kontrol etmeliyim?',
        answer:
          'JSON-LD, sayfa içeriğinizi arama motorlarına açıklayan yapılandırılmış veri bloğudur; derecelendirme, SSS ve ekmek kırıntısı gibi zengin sonuçlara güç verir. Denetleyici varlığını doğrular.',
      },
      {
        question: 'Denetleyici Open Graph etiketlerini denetler mi?',
        answer:
          'Evet. og:title ve og:image gibi Open Graph etiketlerinin mevcut olup olmadığını bildirir; sayfanız sosyal medyada paylaşıldığında doğru önizlenir.',
      },
      {
        question: 'Giriş gerektiren bir sayfayı denetleyebilir miyim?',
        answer:
          'Evet. HTML kodunu kendiniz yapıştırdığınız için herkese açık tarayıcıların ulaşamadığı özel, hazırlık ve localhost sayfalarını denetleyebilirsiniz.',
      },
      {
        question: 'HTML kodum bir yere yükleniyor mu?',
        answer:
          'Hayır. Sayfa İçi SEO Denetleyicisi tamamen tarayıcınızda çalışır; sayfa kaynağınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Denetim puanım düşük; önce neyi düzeltmeliyim?',
        answer:
          'Şu sırayla düzeltin: eksik veya çok uzun başlık, eksik meta açıklama, yinelenen H1 etiketleri, ardından eksik görsel alt metni.',
      },
      {
        question: 'Denetleyici site içi ve dışı bağlantıları sayar mı?',
        answer:
          'Evet. Site içi ve dışı bağlantıları ayrı ayrı sayar; sayfanın yeterince dışarı bağlantı verip vermediğini ve site içi gezinmenin mevcut olup olmadığını görebilirsiniz.',
      },
      {
        question: 'Ana sayfamı ve blog yazılarımı aynı araçla denetleyebilir miyim?',
        answer:
          'Evet. Her sayfanın HTML kaynağını ayrı ayrı yapıştırıp tek tek denetleyin; her sayfa kendi puanını ve kontrol listesini alır.',
      },
      {
        question: 'Bazı denetimler neden başarısızlık yerine uyarı gösteriyor?',
        answer:
          'Uyarılar, düzeltilmesi iyi olan ancak kritik hata olmayan en iyi uygulama sorunlarını işaretler: biraz uzun başlık veya atlanan başlık düzeyi gibi.',
      },
      {
        question: 'WordPress sayfaları için çalışır mı?',
        answer:
          'Evet. Herhangi bir WordPress sayfasında Sayfa Kaynağını Görüntüle seçeneğini açın, HTML kodunu kopyalayıp yapıştırın; denetleyici her CMS çıktısıyla çalışır.',
      },
      {
        question: 'Sayfa içi SEO denetimini ne sıklıkla çalıştırmalıyım?',
        answer:
          'Şablon değiştirdiğinizde, yeni bir sayfa türü yayınladığınızda veya yeniden tasarımdan sonra çalıştırın; düzeltmelerden sonra yeniden denetleyerek puanın iyileştiğini doğrulayın.',
      },
    ],
  },
  'robots-meta-tag-generator': {
    instructions: [
      {
        title: 'Dizin ve bağlantı yönergelerini seçin',
        description:
          'index/noindex, follow/nofollow ve noarchive, nosnippet veya noimageindex gibi isteğe bağlı kısıtlamaları ayarlayın.',
      },
      {
        title: 'Snippet ve önizleme sınırlarını ayarlayın',
        description:
          'max-snippet (-1 sınırsız için), max-image-preview (Google Discover için large) ve max-video-preview değerlerini yapılandırın.',
      },
      {
        title: 'HTML etiketini veya HTTP başlığını kopyalayın',
        description:
          '<head> içinde HTML meta etiketini kullanın veya PDF ve HTML dışı indirmeler için X-Robots-Tag başlık bloğunu dağıtın.',
      },
      {
        title: 'Doğru çıktı biçimini seçin',
        description:
          'Normal sayfalar için HTML meta etiketini, PDF ve diğer HTML dışı dosyalar için X-Robots-Tag etiketini, Cloudflare yol kuralları için _headers bloğunu kullanın.',
      },
      {
        title: 'Çıktıyı doğru yere yerleştirin',
        description:
          'Meta etiketini sayfanızın <head> bölümüne koyun veya başlık kurallarını sunucu yapılandırmanıza ya da Cloudflare _headers dosyanıza ekleyip dağıtın.',
      },
      {
        title: 'Sayfa aramada hâlâ görünüyor mu?',
        description:
          'Noindex yalnızca arama motorları sayfayı yeniden taradıktan sonra işe yarar; bu günler sürebilir. robots.txt dosyasının taramayı engellemediğini kontrol edin, ardından Search Console üzerinde doğrulayın.',
      },
    ],
    examples: [
      {
        title: 'Cloudflare Pages _headers ile özel PDF indirmelerini dışarıda bırakmak',
        input: 'noindex, nofollow · Yol: /private/*',
        output: '/private/*\n  X-Robots-Tag: noindex, nofollow, max-image-preview:large, max-video-preview:-1',
        explanation: 'HTTP X-Robots-Tag, <head> öğesi olmayan PDF, görsel ve HTML dışı dosyalar için çalışır.',
      },
      {
        title: 'Teşekkür sayfasına noindex, nofollow uygulamak',
        input: 'noindex, nofollow · Biçim: HTML meta etiketi',
        output: '<meta name="robots" content="noindex, nofollow">',
        explanation: 'Teşekkür sayfaları canlı kalır ancak arama sonuçlarında görünmez; dönüşüm sayfaları için doğru seçim budur.',
      },
    ],
    benefits: [
      'HTML <meta>, genel HTTP X-Robots-Tag ve Cloudflare Pages _headers çıktılarını aynı anda üretir',
      'Google Discover önerisine uygun max-image-preview:large varsayılanını içerir',
      'Çakışan kombinasyonları otomatik olarak engeller (nosnippet veya noimageindex etkinken snippet ve görsel kaydırıcıları devre dışı kalır)',
      'HTTP başlıklarıyla HTML dışı PDF ve varlık dizinden çıkarmayı kolaylaştırır',
    ],
    useCases: [
      'Teşekkür sayfaları, site içi arama sonuçları veya üye portallarının Google dizinine girmesini engellemek',
      'Barındırılan PDF broşür veya teknik doküman varlıklarını X-Robots-Tag başlıklarıyla dizinden çıkarmak',
      'Google Discover hedefleyen editoryal makaleler için max-image-preview:large etkinleştirmek',
      'Ücretli veya hassas dokümantasyona katı noarchive veya snippet uzunluğu sınırları eklemek',
    ],
    faqs: [
      {
        question: '<meta name="robots"> yerine X-Robots-Tag ne zaman kullanılmalı?',
        answer:
          'HTML dışı dosyalar (PDF, elektronik tablo veya görsel gibi) için veya CDN kurallarıyla tüm klasör yoluna dizin kuralları uygularken X-Robots-Tag HTTP başlıklarını kullanın.',
      },
      {
        question: 'robots.txt Disallow ile <meta name="robots" content="noindex"> birleştirilmeli mi?',
        answer:
          'Hayır! Bir URL adresi robots.txt dosyasında engelliyse arama botları sayfayı tarayıp içindeki HTML <meta name="robots" content="noindex"> etiketini okuyamaz. Meta noindex yönergesine güveniyorsanız taramaya izin verin.',
      },
      {
        question: 'max-snippet:-1 ne anlama gelir?',
        answer:
          '-1 değeri arama motorlarının yararlı bulduğu herhangi bir snippet uzunluğunu seçmesine izin verir; 0 metin snippet önizlemesini engeller, 160 gibi pozitif tam sayılar snippet karakter uzunluğunu sınırlar.',
      },
      {
        question: 'Robots Meta Etiket Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Tamamen ücretsizdir; kayıt gerekmez ve ihtiyacınız kadar etiket ve başlık kuralı oluşturabilirsiniz.',
      },
      {
        question: 'Noindex ne yapar?',
        answer:
          'Noindex, arama motorlarına sayfayı arama sonuçlarına dahil etmemelerini söyler. Sayfa canlı ve ziyaret edilebilir kalır, ancak Google veya Bing üzerinde görünmez.',
      },
      {
        question: 'Nofollow ne yapar?',
        answer:
          'Nofollow, arama motorlarına sayfadaki bağlantıları takip etmemelerini veya onlar aracılığıyla sıralama sinyali aktarmamalarını söyler. Güvenilmeyen veya ücretli bağlantıları olan sayfalar için yararlıdır.',
      },
      {
        question: 'robots.txt ile robots meta etiketi arasındaki fark nedir?',
        answer:
          'robots.txt bir URL adresinin taranmasını engeller; robots meta etiketi ise taranan sayfanın dizine eklenip eklenmeyeceğini kontrol eder. Farklı sorunları çözerler ve dikkatsizce birleştirilmemelidirler.',
      },
      {
        question: 'Noindex yönergesinin işe yaraması ne kadar sürer?',
        answer:
          'Yalnızca arama motorları sayfayı yeniden taradıktan sonra etkili olur; sayfanın ne sıklıkta ziyaret edildiğine bağlı olarak günler veya haftalar sürebilir.',
      },
      {
        question: 'max-image-preview:large nedir?',
        answer:
          'Arama motorlarının sayfanız için büyük görsel önizlemeleri göstermesine izin verir; Google bunu Google Discover hedefleyen sayfalar için önerir.',
      },
      {
        question: 'Nosnippet ne yapar?',
        answer:
          'Nosnippet, arama motorlarının sayfa için arama sonuçlarında herhangi bir metin snippet önizlemesi göstermesini engeller; yalnızca başlık ve URL adresi görünür.',
      },
      {
        question: 'Noarchive ne yapar?',
        answer:
          'Noarchive, arama motorlarının sayfanızın önbelleğe alınmış kopyasını sunmasını engeller; zamana duyarlı veya sık değişen içerik için yararlıdır.',
      },
      {
        question: 'Noimageindex ne yapar?',
        answer:
          'Noimageindex, arama motorlarına sayfadaki görselleri dizine eklememelerini söyler; sayfanın kendisi normal arama sonuçlarında görünmeye devam edebilir.',
      },
      {
        question: 'PDF dosyasını noindex yapabilir miyim?',
        answer:
          'Evet. PDF dosyalarının HTML başlığı yoktur; bunun yerine X-Robots-Tag HTTP başlığını kullanın: araç tam başlık bloğunu sizin için oluşturur.',
      },
      {
        question: 'Teşekkür ve ödeme sayfalarını noindex yapmalı mıyım?',
        answer:
          'Evet. Teşekkür sayfaları, ödeme adımları, site içi arama sonuçları ve üye alanları genellikle arama değeri katmaz ve yaygın olarak noindex olarak ayarlanır.',
      },
      {
        question: 'Aynı sayfada noindex ve nofollow birleştirebilir miyim?',
        answer:
          'Evet. Farklı şeyleri kontrol ederler: dizine ekleme ve bağlantı takibi; özel veya yardımcı sayfalarda sıkça birlikte kullanılırlar.',
      },
      {
        question: 'Cloudflare _headers dosyası nedir?',
        answer:
          'Site public klasörünüzdeki, URL yollarını HTTP yanıt başlıklarıyla eşleyen dosyadır. Araç, seçtiğiniz herhangi bir yol için hazır yapıştırılabilir blok çıkarır.',
      },
      {
        question: 'Robots meta etiketleri Bing ve diğer arama motorlarında çalışır mı?',
        answer:
          'Evet. Büyük arama motorlarının çoğu standart robots yönergelerine uyar; birkaçı yalnızca bir alt kümeyi destekler: en geniş kapsam için yaygın yönergelere bağlı kalın.',
      },
      {
        question: 'Yapılandırmam bir yere yükleniyor mu?',
        answer:
          'Hayır. Robots Meta Etiket Oluşturucu tamamen tarayıcınızda çalışır; ayarlarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Çakışan yönergeler seçersem ne olur?',
        answer:
          'Araç çakışan kombinasyonları otomatik olarak engeller; örneğin nosnippet veya noimageindex etkinken snippet ve görsel önizleme kaydırıcılarını devre dışı bırakır.',
      },
      {
        question: 'Noindex mi kullanmalıyım yoksa sayfayı silmeli miyim?',
        answer:
          'Sayfa tamamen kaldırılmalıysa silin ve 404 veya 410 durumu döndürmesine izin verin. Sayfa canlı kalmalı ancak arama sonuçlarında görünmemeliyse noindex kullanın.',
      },
    ],
  },
};
