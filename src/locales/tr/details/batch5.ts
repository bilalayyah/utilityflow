// Türkçe araç detay içerikleri — UtilityFlow tr yerel ayarı.
// src/locales/hi/details/batch5.ts ile aynı yapıda, doğrudan yazılmıştır.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'merge-pdf': {
    instructions: [
      {
        title: 'Birden fazla PDF dosyası ekleyin',
        description:
          'Cihazınızdan şifresiz iki veya daha fazla .pdf dosyası seçin; her dosya sıraya girmeden önce %PDF başlığı açısından denetlenir.',
      },
      {
        title: 'Sayfa sayılarını ve boyutları kontrol edin',
        description:
          'Sıradaki her belgenin sayfa sayısına ve bayt boyutuna bakarak doğru dosyaları eklediğinizden emin olun.',
      },
      {
        title: 'Birleştirme sırasını belirleyin',
        description:
          'Bölümleri, ekleri veya faturaları birleştirmeden önce yukarı ve aşağı oklarla sıralayın.',
      },
      {
        title: 'Çıktı dosyasına bir ad verin',
        description:
          'İsterseniz özel bir dosya adı yazın; birleştirilmiş belgeyi sonra bulmak çok daha kolay olur.',
      },
      {
        title: 'Birleştirin ve indirin',
        description:
          'Merge PDFs & Download düğmesine basın; dosyalar tarayıcınızda birleştirilir ve sonuç kaydedilir.',
      },
      {
        title: 'Birleştirilmiş belgeyi doğrulayın',
        description:
          'İndirdiğiniz PDF dosyasını açıp sayfa sırasını ve toplam sayfa sayısını kontrol edin; bir şey yanlışsa sırayı düzeltip yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: 'Fatura kapak sayfası ile makbuz paketini birleştirme',
        input: 'kapak-sayfasi.pdf (1 sayfa) + makbuzlar.pdf (4 sayfa)',
        output: 'birlestirilmis-belge.pdf (5 sayfa)',
        explanation: 'Tüm vektörel sayfalar, yazı tipleri ve gömülü görseller tek bir PDF kabına kopyalanır.',
      },
      {
        title: 'Çalışma kılavuzunun üç bölümünü tek pakette toplama',
        input: 'bolum1.pdf (6 sayfa) + bolum2.pdf (8 sayfa) + bolum3.pdf (4 sayfa)',
        output: 'calisma-kilavuzu.pdf (18 sayfa)',
        explanation: 'Üç bölüm de belirlediğiniz sırayla birleşir ve metin aranabilir olarak kalır.',
      },
    ],
    benefits: [
      'Hiçbir dosya yüklenmez; sözleşmeler, vergi beyannameleri ve gizlilik anlaşmaları tamamen sizin bilgisayarınızda kalır',
      'Sıradaki her dosyanın tam sayfa sayısını ve bayt boyutunu gösterir',
      'Bozuk veya şifreli PDF dosyalarını yüklenir yüklenmez hemen yakalar',
      'Filigran yok, sayfa sınırı yok, günlük kullanım sınırı yok',
    ],
    useCases: [
      'Müşteri tekliflerini, imzalı formları ve fiyat eklerini tek dosyada toplama',
      'Beyanname vermeden önce taranmış çok parçalı vergi belgelerini birleştirme',
      'Ders slaytlarını veya çalışma notlarını yazdırılabilir tek pakete dönüştürme',
      'Aylık gider faturalarını tek bir muhasebe PDF dosyasında toplama',
    ],
    faqs: [
      {
        question: 'Bu araç şifreli PDF dosyalarını birleştirebilir mi?',
        answer:
          'Tarayıcı tarafındaki pdf-lib, önce kilidi açılmamışsa şifresiz PDF ister. Şifreli bir dosya yüklenirse doğrulayıcı sessizce başarısız olmak yerine açık bir uyarı gösterir.',
      },
      {
        question: 'Vektörel yazı tipleri ve tıklanabilir bağlantılar korunur mu?',
        answer:
          'Evet. Standart PDF sayfa akışları, gömülü yazı tipleri ve vektörel yollar PDFDocument.copyPages() ile doğrudan kopyalanır; sayfalar bulanık görsellere dönüştürülmez.',
      },
      {
        question: 'Sunucuya yükleme sınırı var mı?',
        answer:
          'Hiçbir dosya yüklenmez; işlem tamamen tarayıcı sekmenizin belleğinde çalışır.',
      },
      {
        question: 'PDF Birleştirme aracı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; filigran, sayfa sınırı veya günlük limit yoktur ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Bir seferde kaç PDF dosyası birleştirebilirim?',
        answer:
          'Tarayıcınızın belleği rahatça kaldırabildiği kadar. Her dosyanın sayfa sayısı ve boyutu gösterilir, böylece birleştirmeden önce durumu değerlendirebilirsiniz.',
      },
      {
        question: 'PDF dosyalarını ekledikten sonra sıralarını değiştirebilir miyim?',
        answer:
          'Evet, birleştirmeden önce her dosyanın yanındaki yukarı ve aşağı oklarla tam birleştirme sırasını belirleyin.',
      },
      {
        question: 'Birleştirmek PDF dosyalarımın kalitesini değiştirir mi?',
        answer:
          'Hayır, sayfalar vektörel veri olarak kopyalanır; metin, yazı tipi ve görseller orijinal kalitesini korur.',
      },
      {
        question: 'Birleştirilmiş PDF dosyasında yer imleri korunur mu?',
        answer:
          'Sayfa içeriği tamamen korunur, ancak belgenin içindekiler listesi ve yer imleri birleştirilmiş dosyaya aktarılamayabilir.',
      },
      {
        question: 'Taranmış PDF dosyalarını birleştirebilir miyim?',
        answer:
          'Evet, taranmış sayfalar diğer sayfalar gibi görsel olarak birleştirilmiş dosyaya kopyalanır.',
      },
      {
        question: 'Bu araçla hangi dosya türleri birleştirilebilir?',
        answer:
          'Yalnızca PDF dosyaları (.pdf). Görseller önce Görselleri PDF’ye Çevirme aracıyla dönüştürülmelidir.',
      },
      {
        question: 'Birleştirilmiş PDF için çıktı dosya adı seçebilir miyim?',
        answer:
          'Evet, birleştirmeden önce özel bir dosya adı yazın; yazmazsanız varsayılan ad kullanılır.',
      },
      {
        question: 'PDF Birleştirme aracı mobilde çalışır mı?',
        answer:
          'Evet, modern mobil tarayıcılarda çalışır; ancak çok büyük dosyalar masaüstünde daha hızlı birleşir.',
      },
      {
        question: 'PDF birleştirirken dosyalarım gizli kalır mı?',
        answer:
          'Evet, her şey tarayıcı sekmenizde yerel olarak gerçekleşir ve hiçbir dosya sunucuya yüklenmez.',
      },
      {
        question: 'PDF dosyalarımdan biri bozuksa ne olur?',
        answer:
          'Doğrulayıcı her dosyanın %PDF başlığını kontrol eder ve birleştirme başlamadan önce bozuk veya şifreli dosyaları size bildirir.',
      },
      {
        question: 'Farklı sayfa boyutlarındaki PDF dosyalarını birleştirebilir miyim?',
        answer:
          'Evet, her sayfa birleştirilmiş belgede orijinal boyutunu ve yönünü korur.',
      },
      {
        question: 'Birleştirilmiş PDF aranabilir kalır mı?',
        answer:
          'Evet, metin tabanlı PDF dosyalarında seçilebilir ve aranabilir metin korunur; çünkü sayfalar kopyalanır, görsele dönüştürülmez.',
      },
      {
        question: 'Aynı PDF dosyasını kendisiyle birleştirebilir miyim?',
        answer:
          'Evet, sonuçta bir sayfayı veya belgeyi tekrarlamanız gerekiyorsa aynı dosyayı birden fazla kez ekleyebilirsiniz.',
      },
      {
        question: 'PDF birleştirmek için dosya boyutu sınırı var mı?',
        answer:
          'Belirlenmiş bir sınır yoktur; asıl sınır cihazınızdaki tarayıcı belleğidir.',
      },
      {
        question: 'Birleştirilmiş indirme başlamazsa ne yapmalıyım?',
        answer:
          'Tarayıcınızın indirme ayarlarını ve açılır pencere engelleyiciyi kontrol edin, sonra Merge düğmesine tekrar basın; dosya her seferinde yerel olarak oluşturulur.',
      },
      {
        question: 'PDF dosyalarını birleştirip sonucu bölebilir miyim?',
        answer:
          'Evet, birleştirilmiş PDF dosyasını indirin ve PDF Bölme aracında açarak istediğiniz sayfaları çıkarın.',
      },
    ],
  },
  'split-pdf': {
    instructions: [
      {
        title: 'PDF dosyanızı yükleyin',
        description:
          'Şifresiz herhangi bir PDF dosyası seçin; araç başlığı doğrular ve toplam sayfa sayısını gösterir.',
      },
      {
        title: 'Bölme modunu seçin',
        description:
          'Sayfa Aralığı Çıkar, Yalnızca Tek Sayfalar, Yalnızca Çift Sayfalar veya Tüm Sayfaları Tek Tek Ayır seçeneklerinden birini seçin.',
      },
      {
        title: 'Sayfa veya aralık girin',
        description:
          'Aralık modu için “1-3, 5, 9-12” gibi sayfalar yazın; ayrıştırıcı kaydetmeden önce sınır dışı veya ters aralıkları işaretler.',
      },
      {
        title: 'Seçiminizi gözden geçirin',
        description:
          'Modun ve sayfa listesinin ihtiyacınıza uyduğunu doğrulayın; özellikle tek/çift ve toplu ayırma işlemlerinde dikkatli olun.',
      },
      {
        title: 'Bölün ve indirin',
        description:
          'Split & Download PDF düğmesine basarak ayıklanmış belgenizi yerel olarak oluşturun.',
      },
      {
        title: 'Sonucu kontrol edin, gerekirse tekrarlayın',
        description:
          'İndirilen dosyayı açıp doğru sayfaların çıkarıldığını doğrulayın; toplu ayırma modunda tarayıcı isterse birden fazla indirmeye izin verin.',
      },
    ],
    examples: [
      {
        title: '12 sayfalık sözleşmeden imza sayfalarını çıkarma',
        input: 'Çıkarılacak sayfalar: 1, 10-12',
        output: 'sozlesme-cikarilmis.pdf (4 sayfa)',
        explanation: '1, 10, 11 ve 12. sayfalar artan sırayla dışa aktarılır; orijinal dosyanız hiç değişmez.',
      },
      {
        title: 'Büyük bir rapordan yalnızca tek sayfaları alma',
        input: 'Mod: Yalnızca Tek Sayfalar · Dosya: rapor.pdf (20 sayfa)',
        output: 'rapor-tek.pdf (10 sayfa — yalnızca tek sayfalar)',
        explanation: 'Çift taraflı tarayıcı iş akışlarında tek taraftan taranan sayfaları ayırmak için kullanışlıdır.',
      },
    ],
    benefits: [
      'Esnek aralık ayrıştırıcı, kaydetmeden önce sınır dışı veya ters aralıkları yakalar',
      'Orijinal vektörel netliği ve metnin seçilebilirliğini korur',
      'Çift taraflı tarayıcı iş akışları için Tek/Çift sayfa çıkarma sunar',
      'Özel finans ve hukuk belgelerini üçüncü taraf yükleme sunucularından korur',
    ],
    useCases: [
      'Paylaşmadan önce büyük bir rapordan yalnızca ilgili bölümleri çıkarma',
      'Ana fatura PDF dosyasına bağlı ayrı faturaları ayırma',
      'Çok sayfalı sözleşmelerden imza veya ek sayfalarını çıkarma',
      'Tek taraflı belge besleyiciden gelen tek/çift tarama gruplarını ayırma',
    ],
    faqs: [
      {
        question: 'Tüm Sayfaları Tek Tek Ayır modu neden 25 sayfayla sınırlı?',
        answer:
          'Tarayıcılar, bir siteden aynı anda yaklaşık 25’ten fazla hızlı indirme tetiklendiğinde bunları engeller veya izin ister. Daha büyük çok parçalı çıkarmalar için Sayfa Aralığı Çıkar modunu kullanın.',
      },
      {
        question: 'Bölmek orijinal PDF dosyamı değiştirir mi?',
        answer:
          'Hayır. Tarayıcı bellekteki yerel kopyayı okur ve indirilecek yeni bir PDF oluşturur.',
      },
      {
        question: 'Çıkarılacak Sayfalar alanına hangi söz dizimini yazabilirim?',
        answer:
          'Virgülle ayrılmış tek sayıları ve tireli aralıkları birlikte yazabilirsiniz, örneğin “1-3, 5, 9-12”.',
      },
      {
        question: 'PDF Bölme aracı ücretsiz mi?',
        answer:
          'Evet, ücretsizdir; filigran ve sayfa sınırı yoktur, yalnızca toplu ayırmada 25 sayfa sınırı vardır.',
      },
      {
        question: 'PDF dosyasından yalnızca tek sayfaları çıkarabilir miyim?',
        answer:
          'Evet, Yalnızca Tek Sayfalar seçeneğini seçin; bu, çift taraflı tarama iş akışlarında işe yarar.',
      },
      {
        question: 'PDF dosyasından yalnızca çift sayfaları çıkarabilir miyim?',
        answer:
          'Evet, Yalnızca Çift Sayfalar seçeneğini seçerek yalnızca çift numaralı sayfaları alın.',
      },
      {
        question: 'Olmayan bir sayfa numarası yazarsam ne olur?',
        answer:
          'Aralık ayrıştırıcı girdinizi denetler ve kaydetmeden önce sınır dışı veya ters aralıklar konusunda sizi uyarır.',
      },
      {
        question: 'Sayfaları özel bir sırayla çıkarabilir miyim, örneğin önce 10-12 sonra 1?',
        answer:
          'Çıkarılan sayfalar artan sırayla kaydedilir. Sonradan sırayı değiştirmek için PDF Sayfalarını Sıralama aracını kullanın.',
      },
      {
        question: 'Bölmek PDF dosyasının metnini aranabilir bırakır mı?',
        answer:
          'Evet, sayfalar vektörel veri olarak kopyalanır; bu nedenle çıkarılan dosyada metin seçilebilir ve aranabilir kalır.',
      },
      {
        question: 'Şifreli bir PDF dosyasını bölebilir miyim?',
        answer:
          'Hayır, şifreli PDF dosyalarının önce kilidi açılmalıdır; araç yalnızca şifresiz dosyaları kabul eder.',
      },
      {
        question: 'Taranmış bir PDF dosyasını bölebilir miyim?',
        answer:
          'Evet, taranmış sayfalar metin sayfaları gibi çıkar; çünkü bölme, içeriği okumadan veya değiştirmeden bütün sayfaları kopyalar.',
      },
      {
        question: 'Çıkarılan PDF dosyasının kalitesi aynı kalır mı?',
        answer:
          'Evet, çıkarma sırasında yeniden sıkıştırma veya pikselleştirme olmaz; bu nedenle çıkarılan her sayfa orijinal PDF ile aynı kaliteyi korur.',
      },
      {
        question: 'PDF dosyasını tek sayfalık dosyalara nasıl ayırırım?',
        answer:
          'Tüm Sayfaları Tek Tek Ayır seçeneğini seçin; her sayfa ayrı bir PDF olarak indirilir, bir çalıştırmada en fazla 25 sayfa.',
      },
      {
        question: 'PDF dosyasının yalnızca ilk sayfasını indirebilir miyim?',
        answer:
          'Evet, Sayfa Aralığı Çıkar seçeneğini seçin ve Çıkarılacak Sayfalar alanına “1” yazın.',
      },
      {
        question: 'PDF Bölme aracı dosyamı bir yere yükler mi?',
        answer:
          'Hayır, bölme tamamen tarayıcınızda çalışır; dosyanız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'PDF Bölme aracını telefonumda kullanabilir miyim?',
        answer:
          'Evet, modern mobil tarayıcılarda çalışır; ancak çok büyük dosyalar masaüstünde daha rahat bölünür.',
      },
      {
        question: 'Sayfa Aralığı Çıkar ile Toplu Ayır arasındaki fark nedir?',
        answer:
          'Aralık, seçilen sayfaları tek yeni PDF dosyasında birleştirir; Toplu Ayır ise her sayfa için ayrı bir PDF oluşturur.',
      },
      {
        question: '1-3 ve 5. sayfaları tek seferde çıkarabilir miyim?',
        answer:
          'Evet, “1-3, 5” yazın; tek sayılar ve tireli aralıklar virgülle birleştirilebilir.',
      },
      {
        question: 'Bölmek yer imlerini korur mu?',
        answer:
          'Sayfa içeriği korunur, ancak belgenin içindekiler listesi ve yer imleri genellikle çıkarılan dosyalara aktarılmaz.',
      },
      {
        question: 'Böldükten sonra indirme başlamadı, ne yapmalıyım?',
        answer:
          'Tarayıcınızda bu site için birden fazla indirmeye izin verin, sonra Split düğmesine tekrar basın; dosya her seferinde yerel olarak oluşturulur.',
      },
    ],
  },
  'images-to-pdf': {
    instructions: [
      {
        title: 'Bir veya daha fazla görsel seçin',
        description:
          'JPG, PNG veya WebP görseller seçin; küçük resimler ve piksel boyutları hemen görünür.',
      },
      {
        title: 'Görsel sırasını belirleyin',
        description:
          'PDF için sayfa sırasını ayarlamak üzere yukarı ve aşağı okları kullanın.',
      },
      {
        title: 'Sayfa boyutunu ve kenar boşluklarını ayarlayın',
        description:
          'A4 Dikey, US Letter veya Tam Görsel Boyutu seçeneklerinden birini seçin; standart sayfa boyutları için kenar boşluğu belirleyin.',
      },
      {
        title: 'Çıktı dosyasına bir ad verin',
        description:
          'Özel bir dosya adı yazın; hazırlanan PDF dosyasını tanımak kolaylaşsın.',
      },
      {
        title: 'PDF oluşturun',
        description:
          'Convert Images to PDF düğmesine basın; belge yerel olarak oluşturulur ve hemen indirilir.',
      },
      {
        title: 'Kontrol edin ve düzeltin',
        description:
          'PDF dosyasını açıp düzeni ve kenar boşluklarını kontrol edin; bir sayfa yanlış görünüyorsa görsel sırasını değiştirin veya sayfa ayarını değiştirip yeniden dönüştürün.',
      },
    ],
    examples: [
      {
        title: 'Gider makbuzlarını standart A4 sayfalarında toplama',
        input: '3 makbuz JPG · A4 Dikey · 24 pt kenar boşluğu',
        output: 'gorseller-paket.pdf (3 ortalanmış, oranı korunmuş A4 sayfası)',
        explanation: 'Her görsel, yazdırılabilir A4 kenar boşluklarına sığacak şekilde orantılı olarak ölçeklenir; esneme olmaz.',
      },
      {
        title: 'Telefonda çekilen tarama fotoğraflarını tek PDF dosyasında toplama',
        input: '5 tarama JPG · Tam Görsel Boyutu · kenar boşluğu 0',
        output: 'taramalar.pdf (5 sayfa, her görsel kendi gerçek boyutunda)',
        explanation: 'Tam Görsel Boyutu modunda her görsel kendi doğal boyutunda bir sayfa olur; kırpma veya esneme olmaz.',
      },
    ],
    benefits: [
      'Doğal JPG ve PNG akışlarını doğrudan gömer; WebP dosyalarını Canvas ile temiz bir şekilde dönüştürür',
      'Görselin en boy oranını tamamen korur; esneme veya kırpma olmaz',
      'Yazdırılabilir A4 / US Letter sayfalarının yanı sıra sıfır kenar boşluklu tam görsel boyutlu sayfalar da sunar',
      'Kimlik fotoğrafları, makbuzlar ve özel belgeler tarayıcı belleğinde çevrimdışı kalır',
    ],
    useCases: [
      'Telefondaki makbuz fotoğraflarını düzenli bir aylık gider PDF dosyasına dönüştürme',
      'Tasarım maketlerini veya arayüz ekran görüntülerini A4 inceleme destesinde toplama',
      'Taranmış belge sayfalarını yüklenebilir tek bir PDF dosyasına dönüştürme',
      'Portföy çalışmalarını bulut sıkıştırması olmadan paketleme',
    ],
    faqs: [
      {
        question: 'Araç WebP görsellerini nasıl işler?',
        answer:
          'PDF standardı JPEG ve PNG dosyalarını doğal olarak gömer, WebP dosyalarını gömmez; bu nedenle araç WebP görsellerini HTML5 Canvas ile kayıpsız PNG karelerine çözüp gömer.',
      },
      {
        question: 'Dikey ve yatay fotoğraflar A4 boyutuna sığmak için esner mi?',
        answer:
          'Hayır. Görseller Math.min(maxWidth/imgWidth, maxHeight/imgHeight) formülüyle orantılı olarak ölçeklenir ve sayfada ortalanır.',
      },
      {
        question: 'Görsel küçük resimleri bir yere yüklenir mi?',
        answer:
          'Hayır. Önizlemeler tarayıcı sekmenizde geçici yerel Object URL bağlantıları kullanır; sekme kapatıldığında bu bağlantılar kaybolur.',
      },
      {
        question: 'Görselleri PDF’ye Çevirme aracı ücretsiz mi?',
        answer:
          'Evet, ücretsizdir; filigran yoktur ve dönüştürebileceğiniz görsel sayısında sınır yoktur.',
      },
      {
        question: 'Hangi görsel biçimlerini PDF’ye dönüştürebilirim?',
        answer:
          'JPG, PNG ve WebP desteklenir; fotoğrafları, ekran görüntülerini ve web görsellerini tek bir PDF dosyasında birleştirebilirsiniz.',
      },
      {
        question: 'Tek bir görseli PDF’ye dönüştürebilir miyim?',
        answer:
          'Evet, tek görselden tek sayfalık bir PDF oluşur; tek bir fotoğrafı veya taranmış belgeyi dosya olarak paylaşmak için idealdir.',
      },
      {
        question: 'PDF oluşturmadan önce görsellerin sırasını değiştirebilir miyim?',
        answer:
          'Evet, PDF oluşturmadan önce yukarı ve aşağı oklarla sayfa sırasını düzenleyin.',
      },
      {
        question: 'Görselleri PDF’ye dönüştürürken hangi sayfa boyutları var?',
        answer:
          'A4 Dikey, US Letter ve Tam Görsel Boyutu; sonuncusunda her görsel kendi doğal boyutunda bir sayfa olur.',
      },
      {
        question: 'Görsellerim PDF’ye dönüşürken kırpılır mı?',
        answer:
          'Hayır, görseller orantılı olarak ölçeklenir ve ortalanır; hiçbir şey kırpılmaz veya esnemez.',
      },
      {
        question: 'PDF dosyasında görsellerin çevresine kenar boşluğu ekleyebilir miyim?',
        answer:
          'Evet, A4 veya US Letter sayfa boyutu kullanırken kenar boşluğu ayarlayın, örneğin 24 pt.',
      },
      {
        question: 'Görselleri PDF’ye dönüştürmek kalitelerini düşürür mü?',
        answer:
          'JPG ve PNG akışları doğal olarak gömülür; WebP, Canvas ile kayıpsız PNG’ye dönüştürülür, bu yüzden kalite korunur.',
      },
      {
        question: 'iPhone’daki HEIC fotoğraflarımı PDF’ye dönüştürebilir miyim?',
        answer:
          'Doğrudan olmaz; önce HEIC dosyalarını JPG veya PNG’ye dönüştürün, sonra bu aracı kullanın.',
      },
      {
        question: 'Fotoğraflarım PDF’ye dönüşürken sunucuya yüklenir mi?',
        answer:
          'Hayır, dönüştürme tarayıcınızda yerel olarak çalışır ve önizlemeler geçici yerel Object URL bağlantıları kullanır.',
      },
      {
        question: 'Görselleri PDF’ye Çevirme aracını mobilde kullanabilir miyim?',
        answer:
          'Evet, mobil tarayıcılarda çalışır; fotoğraf arşivinizden doğrudan görsel seçin.',
      },
      {
        question: 'Çok büyük görsellere ne olur?',
        answer:
          'Büyük görseller tam çözünürlükle gömülür; bu yüzden oluşan PDF büyük olabilir. Dosya boyutu önemliyse önce görselleri sıkıştırın.',
      },
      {
        question: 'Tek bir PDF dosyasında JPG, PNG ve WebP karıştırabilir miyim?',
        answer:
          'Evet, üç biçimi de tek belgede birleştirebilirsiniz; sayfalar belirlediğiniz sırada kalır.',
      },
      {
        question: 'PDF sayfaları görsellerimle aynı sırada mı olur?',
        answer:
          'Evet, sayfalar görsel listesindeki sırayla oluşur; farklı bir sıra istiyorsanız önce görsellerinizi yeniden sıralayın.',
      },
      {
        question: 'PDF için özel bir dosya adı belirleyebilir miyim?',
        answer:
          'Evet, dönüştürmeden önce istediğiniz dosya adını yazın; indirilen PDF varsayılan ad yerine bu adı kullanır.',
      },
      {
        question: 'Araç görsellerin saydamlığını korur mu?',
        answer:
          'Tam Görsel Boyutu sayfalarında PNG saydamlığı korunur; A4 veya Letter sayfalarında görsel beyaz sayfa arka planı üzerinde durur.',
      },
      {
        question: 'PDF dosyam indirilmedi, ne yapmalıyım?',
        answer:
          'Tarayıcınızın indirme izinlerini kontrol edip yeniden deneyin; dosya sekmenizde yerel olarak oluşturulur.',
      },
    ],
  },
  'pdf-to-images': {
    instructions: [
      {
        title: 'Bir PDF dosyası seçin',
        description:
          'Şifresiz herhangi bir PDF belgesi seçin; PDF.js toplam sayfa sayısını hemen okur.',
      },
      {
        title: 'Oluşturulacak sayfaları seçin',
        description:
          '“all” yazın veya bir sayfa aralığı girin (bir grupta en fazla 20 sayfa), örneğin “1-3, 5”.',
      },
      {
        title: 'Biçimi ve ölçeği seçin',
        description:
          'Keskin metin için PNG veya daha küçük fotoğraf ağırlıklı dosyalar için JPG seçin; 1.0×, 1.5× veya 2.0× çözünürlükten birini alın.',
      },
      {
        title: 'Sayfaları oluşturun',
        description:
          'Oluşturmayı başlatın ve sayfa önizlemelerinin gelmesini bekleyin; büyük gruplar biraz daha uzun sürer.',
      },
      {
        title: 'Önizlemeleri inceleyin',
        description:
          'İndirmeden önce oluşturulan her küçük resmin netliğini ve içeriğinin doğruluğunu kontrol edin.',
      },
      {
        title: 'Görsellerinizi indirin',
        description:
          'Herhangi bir sayfa kartındaki .PNG veya .JPG düğmesine basarak o görseli kaydedin; kalan sayfalar için grubu tekrarlayın.',
      },
    ],
    examples: [
      {
        title: 'Sunum slaytlarını sosyal medya paylaşımı için dışa aktarma',
        input: 'Sayfalar: 1-3 · Biçim: PNG · Ölçek: 2.0× (144 DPI)',
        output: 'LinkedIn veya blog gömme için hazır 3 net 2× PNG slayt görseli',
        explanation: 'Yüksek ölçekli Canvas oluşturma, diyagramları ve yazı tipografisini net tutar.',
      },
      {
        title: 'Sertifikanın tek sayfasını fotoğraf olarak kaydetme',
        input: 'Sayfa: 1 · Biçim: JPG · Ölçek: 1.5×',
        output: 'Telefonda paylaşmaya uygun tek bir net JPG görseli',
        explanation: 'Fotoğraf ağırlıklı dosyalar için JPG daha küçük ve paylaşması daha kolaydır.',
      },
    ],
    benefits: [
      'Vite ile paketlenmiş PDF.js Web Worker kullanır; harici CDN betiği istemez',
      'Saydam PDF dosyalarını JPG’ye aktarırken beyaz Canvas arka planını otomatik olarak doldurur',
      '100 sayfalık dosyanın tamamını oluşturmak yerine tam sayfa aralığını hedeflemenizi sağlar',
      'Tarayıcıda yapılan özel Canvas oluşturma, hassas belgeleri korur',
    ],
    useCases: [
      'PDF sunum slaytlarını blog yazısı veya sosyal medya görsellerine dönüştürme',
      'İmzalı bir sertifika veya bilet sayfasını telefon fotoğrafı olarak kaydetme',
      'Yazdırılabilir PDF el ilanlarının net arayüz önizlemelerini oluşturma',
      'Özel bir PDF uygulaması olmadan yazı tipi ve düzen oluşturmayı gözle kontrol etme',
    ],
    faqs: [
      {
        question: 'PDF sayfaları için PNG mi yoksa JPG mi seçmeliyim?',
        answer:
          'Keskin kenarların önemli olduğu slaytlar, metin belgeleri, makbuzlar ve grafikler için PNG seçin. Daha küçük dosya boyutu için fotoğraf ağırlıklı broşürlerde JPG seçin.',
      },
      {
        question: 'PDF’yi Görsele Çevirme neden bir grupta en fazla 20 sayfa oluşturur?',
        answer:
          'Yüksek çözünürlüklü 2× Canvas, sayfa başına çok fazla GPU ve RAM tüketir; 20 sayfaya kadar gruplar, telefon ve dizüstü bilgisayarlarda tarayıcı sekmelerini duyarlı tutar.',
      },
      {
        question: 'Şifreli PDF dosyalarında çalışır mı?',
        answer:
          'Şifreli PDF dosyalarının önce kilidi açılmalıdır; çünkü araç kilitli bir dosyanın sayfalarını yerel olarak okuyamaz.',
      },
      {
        question: 'PDF’yi Görsele Çevirme aracı ücretsiz mi?',
        answer:
          'Evet, ücretsizdir; filigran yoktur ve oluşturma tarayıcınızda yerel olarak yapılır.',
      },
      {
        question: 'Sosyal medya için hangi çözünürlüğü seçmeliyim?',
        answer:
          'Gönderiler ve blog gömmeleri için 2.0× en net sonucu verir; hızlı önizlemeler için 1.0× yeterlidir.',
      },
      {
        question: 'Yalnızca tek bir sayfayı görsel olarak dışa aktarabilir miyim?',
        answer:
          'Evet, sayfa aralığı alanına o sayfanın numarasını yazın; yalnızca o sayfa oluşturulup görsel olarak indirilir.',
      },
      {
        question: 'PDF dosyasının tüm sayfalarını tek seferde dışa aktarabilir miyim?',
        answer:
          'Bir grupta en fazla 20 sayfa oluşturabilirsiniz; daha uzun belgeler için işlemi tekrarlayın.',
      },
      {
        question: 'JPG dışa aktarmamda neden beyaz arka plan görünüyor?',
        answer:
          'JPG saydamlığı desteklemez; bu nedenle saydam PDF alanları otomatik olarak beyazla doldurulur.',
      },
      {
        question: 'PDF’yi Görsele Çevirme metni net tutar mı?',
        answer:
          'Evet, sayfalar PDF.js ile 2× ölçeğe kadar oluşturulur; bu da metin ve diyagramları net tutar.',
      },
      {
        question: 'Hangi sayfaların görsel olarak oluşturulacağını seçebilir miyim?',
        answer:
          'Evet, sayfa alanına “all” veya “1-3, 5” gibi bir aralık yazın.',
      },
      {
        question: 'PDF dosyalarım bir yere yüklenir mi?',
        answer:
          'Hayır, oluşturma tarayıcınızda yerel PDF.js worker ile yapılır; hiçbir şey cihazınızdan çıkmaz.',
      },
      {
        question: 'PDF’yi Görsele Çevirme aracını telefonumda kullanabilir miyim?',
        answer:
          'Evet, ancak yüksek çözünürlüklü oluşturmalar daha fazla bellek kullanır; bu yüzden telefonda küçük gruplar daha iyi çalışır.',
      },
      {
        question: '1.0×, 1.5× ve 2.0× ölçek arasındaki fark nedir?',
        answer:
          'Daha yüksek ölçekler sayfa başına daha fazla piksel oluşturur; bu da daha büyük ve daha net görseller üretir. 2.0× yaklaşık 144 DPI demektir.',
      },
      {
        question: 'Oluşturulan tüm sayfaları tek tıklamayla indirebilir miyim?',
        answer:
          'Her sayfa kartının kendi .PNG veya .JPG indirme düğmesi vardır; ihtiyacınız olan sayfaları tek tek indirin.',
      },
      {
        question: 'Vektörel grafikler ve çizelgeler net kalır mı?',
        answer:
          'Evet, PDF.js vektörel içeriği seçtiğiniz ölçekte pikselleştirir; bu yüzden çizelgeler ve diyagramlar net kalır.',
      },
      {
        question: 'Büyük PDF dosyalarını oluşturmak neden zaman alıyor?',
        answer:
          'Her sayfa yüksek çözünürlükte bir Canvas üzerine çizilir; bir seferde birkaç sayfa oluşturmak sekmeyi duyarlı tutar.',
      },
      {
        question: 'Taranmış bir PDF dosyasını görsele dönüştürebilir miyim?',
        answer:
          'Evet, taranmış sayfalar PDF dosyasında göründükleri gibi görsel olarak oluşturulur.',
      },
      {
        question: 'PDF’yi Görsele Çevirme aracı çevrimdışı çalışır mı?',
        answer:
          'Sayfa yüklendikten sonra oluşturma, başka ağ isteği olmadan tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: 'Oluşturulan görselim bulanık görünüyor, ne yapmalıyım?',
        answer:
          '2.0× ölçekte yeniden oluşturun ve metin ağırlıklı sayfalar için PNG seçin; çünkü yüksek çözünürlük küçük metni bulanık yerine net tutar.',
      },
      {
        question: 'Dışa aktarılan görselleri ticari olarak kullanabilir miyim?',
        answer:
          'Görseller, orijinal PDF dosyasında olduğu gibi size aittir; kaynak belgenin telif hakkına saygı gösterin.',
      },
    ],
  },
  'pdf-page-rotator': {
    instructions: [
      {
        title: 'PDF dosyanızı yükleyin',
        description:
          'Yan duran veya ters dönmüş sayfalar içeren PDF dosyasını seçin.',
      },
      {
        title: 'Döndürme açısını seçin',
        description:
          'Sayfaların ne kadar yamuk durduğuna göre 90° Saat Yönünde, 90° Saat Yönünün Tersinde veya 180° seçeneğini seçin.',
      },
      {
        title: 'Sayfa kapsamını seçin',
        description:
          'Tüm Sayfalar, Belirli Aralıklar, Tek veya Çift seçeneklerinden birini seçin; aralıklar için “2, 5-7” gibi sayfalar yazın.',
      },
      {
        title: 'Mevcut yönün önizlemesine bakın',
        description:
          'Hangi sayfaların gerçekten yan durduğunu kontrol edin; yalnızca döndürülmesi gerekenleri döndürün.',
      },
      {
        title: 'Uygulayın ve indirin',
        description:
          'Apply Rotation & Download PDF düğmesine basarak düzeltilmiş dosyayı kalıcı olarak kaydedin.',
      },
      {
        title: 'Doğrulayın ve kalanları düzeltin',
        description:
          'İndirilen PDF dosyasını açın; bir sayfa hâlâ yan duruyorsa aynı yönde bir 90° daha döndürerek yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: '3. sayfadaki tek bir yan dönmüş finans grafiğini düzeltme',
        input: 'Döndürme: 90° Saat Yönünde · Kapsam: Belirli Sayfa Aralıkları (3)',
        output: 'Yalnızca 3. sayfa saat yönünde döner; diğer sayfalar mevcut yönlerini korur.',
        explanation: 'Metni pikselleştirmeden mevcut sayfa döndürme üst verisine 90° ekler (360’a göre mod alınır).',
      },
      {
        title: 'Tarayıcıdan ters gelmiş bütün belgeyi düzeltme',
        input: 'Döndürme: 180° · Kapsam: Tüm Sayfalar',
        output: 'Tüm sayfalar düz olarak indirilir',
        explanation: '180° döndürme, ters sayfaları tek seferde doğru yöne getirir.',
      },
    ],
    benefits: [
      'Kayıpsız döndürme; metni veya görselleri yeniden sıkıştırmadan PDF sayfa yön bayraklarını günceller',
      'Mevcut sayfa açılarını temiz korur (göreli döndürmeyi 360’a göre mod alarak hesaplar)',
      'Düz sayfaları döndürmeden “2, 5-7” gibi seçili aralıkları hedefler',
      'Sunucuya yükleme olmadan anında tarayıcı indirmesi',
    ],
    useCases: [
      'Mobil veya ofis fotokopi makinesinden ters gelen tarayıcı gruplarını düzeltme',
      'Çoğu dikey rapordaki geniş yatay elektronik tabloları döndürme',
      'Belge birleştirme sonrası karışık yönlü ekleri düzeltme',
      'Portallar için uyumluluk başvurularını düzgün yönlü hazırlama',
    ],
    faqs: [
      {
        question: 'Sayfaları döndürmek metin veya görsel netliğini azaltır mı?',
        answer:
          'Hayır. PDF sayfa döndürme özelliğini ayarlamak tamamen kayıpsızdır; yazı tiplerini veya gömülü görselleri yeniden kodlamaz.',
      },
      {
        question: 'PDF dosyamdaki bir sayfa zaten 90° döndürülmüşse ne olur?',
        answer:
          'Döndürücü her sayfanın mevcut döndürme açısını okur ve seçtiğiniz farkı 360’a göre mod alarak ekler; bu nedenle yön, sayfanın o anki görünümüne göre öngörülebilir şekilde değişir.',
      },
      {
        question: '20 sayfalık bir PDF dosyasında yalnızca tek bir sayfayı döndürebilir miyim?',
        answer:
          'Evet. “Belirli Sayfa Aralıkları” seçeneğini seçip tam sayfa numarasını yazın, örneğin “7”.',
      },
      {
        question: 'PDF Sayfa Döndürme aracı ücretsiz mi?',
        answer:
          'Evet, ücretsizdir; filigran veya sınır yoktur ve hesap oluşturmadan istediğiniz kadar PDF döndürebilirsiniz.',
      },
      {
        question: 'PDF dosyasının tüm sayfalarını aynı anda döndürebilir miyim?',
        answer:
          'Evet, Tüm Sayfalar seçeneğini seçip 90° saat yönünde, 90° saat yönünün tersinde veya 180° seçeneklerinden birini seçin.',
      },
      {
        question: 'Yalnızca tek veya çift sayfaları döndürebilir miyim?',
        answer:
          'Evet, Tek veya Çift kapsamı seçin; bu, çift taraflı tarama gruplarını düzeltmek için kullanışlıdır.',
      },
      {
        question: 'PDF sayfalarını hangi açılarla döndürebilirim?',
        answer:
          '90° saat yönünde, 90° saat yönünün tersinde ve 180° döndürebilirsiniz; böylece yan veya ters duran her sayfa tek tıklamayla düzelir.',
      },
      {
        question: 'PDF sayfasını 45° gibi özel bir açıyla döndürebilir miyim?',
        answer:
          'Hayır, yalnızca 90°, 180° ve 270° (tekrarlanan 90° döndürmelerle) desteklenir; çünkü PDF döndürme çeyrek turlarla tanımlanır.',
      },
      {
        question: 'Döndürme kalıcı mıdır?',
        answer:
          'Evet, döndürme PDF sayfa sözlüğüne yazılır ve indirilen dosyada kaydedilir.',
      },
      {
        question: 'Döndürme PDF dosya boyutunu değiştirir mi?',
        answer:
          'Neredeyse hiç; yalnızca yön üst verisi değişir, bu yüzden dosya neredeyse aynı boyutta kalır.',
      },
      {
        question: 'Şifreli bir PDF dosyasını döndürebilir miyim?',
        answer:
          'Hayır, şifreli PDF dosyalarının önce kilidi açılmalıdır; çünkü araç kilitli bir dosyadaki sayfaları değiştiremez.',
      },
      {
        question: 'PDF Sayfa Döndürme aracı dosyamı yükler mi?',
        answer:
          'Hayır, döndürme tamamen tarayıcınızda çalışır; dosyanız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Taranmış bir PDF dosyasının sayfalarını döndürebilir miyim?',
        answer:
          'Evet, taranmış sayfalar metin sayfaları gibi döner; çünkü döndürme, içeriği okumadan bütün sayfa görselini çevirir.',
      },
      {
        question: 'Döndürme, her görüntüleyicide yan açılan bir PDF dosyasını düzeltir mi?',
        answer:
          'Evet, kaydedilen dosya her PDF görüntüleyicide düzeltilmiş yönde açılır.',
      },
      {
        question: 'Farklı sayfaları farklı miktarlarda döndürebilir miyim?',
        answer:
          'Açı başına aracı bir kez çalıştırın: bir aralığı döndürüp indirin, sonra sonuçta başka bir aralığı döndürün.',
      },
      {
        question: 'Döndürdükten sonra sayfa hâlâ yan duruyorsa ne yapmalıyım?',
        answer:
          'Önce sayfanın şu an nasıl göründüğünü kontrol edin, sonra aynı yönde bir 90° daha ekleyin; çünkü döndürme mevcut açıya göre yapılır.',
      },
      {
        question: 'Döndürme, tıklanabilir bağlantıları veya form alanlarını etkiler mi?',
        answer:
          'Bağlantılar ve açıklamalar sayfayla birlikte döner; bu yüzden içerikle hizalı kalırlar.',
      },
      {
        question: 'PDF Sayfa Döndürme aracını telefonumda kullanabilir miyim?',
        answer:
          'Evet, modern mobil tarayıcılarda çalışır; telefonunuzda bir PDF açıp sayfalarını orada döndürebilirsiniz.',
      },
      {
        question: 'Döndürülen PDF doğru şekilde yazdırılır mı?',
        answer:
          'Evet, yazıcılar kaydedilen sayfa yönünü izler; bu yüzden döndürülen sayfalar doğru yönde yazdırılır.',
      },
      {
        question: 'İndirmem başlamadı, ne yapmalıyım?',
        answer:
          'Tarayıcı ayarlarınızda bu site için indirmelere izin verin ve Apply Rotation düğmesine tekrar basın; dosya yerel olarak oluşturulur.',
      },
    ],
  },
  'reorder-delete-pdf-pages': {
    instructions: [
      {
        title: 'PDF belgenizi yükleyin',
        description:
          'Şifresiz bir PDF seçin; ilk 30 sayfaya kadar küçük resim önizlemeleri yerel olarak oluşturulur (tüm sayfalar için sayfa kartları ve boyutlar gösterilir).',
      },
      {
        title: 'Sayfa kartlarını inceleyin',
        description:
          'Her kart, mevcut çıktı konumunu ve orijinal sayfa numarasını gösterir; böylece bir şey değiştirmeden önce boş, yinelenen veya yanlış yerdeki sayfaları fark edersiniz.',
      },
      {
        title: 'Yeniden sıralayın, kopyalayın veya silin',
        description:
          'Sırayı değiştirmek için ok düğmelerini, sayfayı kopyalamak için kopya simgesini veya istenmeyen sayfaları kaldırmak için çöp simgesini kullanın.',
      },
      {
        title: 'Yeni sayfa sırasını kontrol edin',
        description:
          'Eklerin, sergilerin ve kapak sayfalarının tam olması gereken yerde olduğundan emin olmak için her karttaki güncellenmiş konumlara bakın.',
      },
      {
        title: 'Düzenlenmiş PDF dosyasını kaydedin',
        description:
          'Save Reordered PDF düğmesine basarak temiz belgenizi derleyip indirin.',
      },
      {
        title: 'İpucu: orijinal dosyayı saklayın',
        description:
          'Araç kaynak dosyanızı asla değiştirmez; bu yüzden onu yedek olarak saklayın. Bir PDF yüklenemezse şifreli veya kilitli olmadığını kontrol edin.',
      },
    ],
    examples: [
      {
        title: 'Sondaki boş sayfayı silip eki öne taşıma',
        input: '5 sayfalık PDF · 5. sayfayı sil · 4. sayfayı 2. konuma taşı',
        output: 'Vektörel içeriği bozulmamış güncellenmiş 4 sayfalık PDF',
        explanation: 'Belge sayfa ağacını seçtiğiniz sırayla temiz bir şekilde yeniden kurar.',
      },
      {
        title: 'Yazdırılabilir imza sayfasını kopyalama',
        input: '8 sayfalık PDF · 8. sayfayı iki kez kopyala',
        output: 'İmza sayfasının üç kez yer aldığı 10 sayfalık PDF',
        explanation: 'Kopya simgesiyle aynı sayfayı paket içinde istediğiniz kadar tekrarlayabilirsiniz.',
      },
    ],
    benefits: [
      'PDF.js görsel küçük resimlerini kayıpsız pdf-lib sayfa kopyalamayla birleştirir',
      'Yanlışlıkla 0 sayfalık boş bir PDF kaydetmenizi engeller',
      'Mevcut çıktı konumunu ve orijinal sayfa numarasını birlikte gösterir',
      'Gizli İK, hukuk veya sağlık kayıtları için dosya yüklemesi yoktur',
    ],
    useCases: [
      'Çift taraflı belge tarayıcılarının ürettiği kazara boş sayfaları silme',
      'Yanlış yere düşen ekleri veya sergileri doğru sıraya taşıma',
      'Paket içinde yazdırılabilir form sayfalarını veya imza sayfalarını kopyalama',
      'Müşterilere göndermeden önce birleştirilmiş PDF dosyalarını temizleme',
    ],
    faqs: [
      {
        question: 'Küçük resimler neden yalnızca ilk 30 sayfa için oluşturulur?',
        answer:
          'Büyük belgelerde tarayıcı belleğini hızlı tutmak için canlı küçük resimler ilk 30 sayfa için oluşturulur; her sayfa kartı üzerinden tamamen yeniden sıralanabilir ve silinebilir.',
      },
      {
        question: 'Sayfaları yeniden sıralamak metni görsele dönüştürür mü?',
        answer:
          'Hayır. Küçük resimler yalnızca arayüzdeki görsel önizleme içindir; kaydedilen çıktı, orijinal vektörel metni ve bağlantıları korumak için pdf-lib copyPages() kullanır.',
      },
      {
        question: 'Tüm sayfaları silmek geri alınabilir mi?',
        answer:
          'Düzenleyici en az 1 sayfanın kalmasını ister; dokunulmamış kaynak dosyayı yeniden yüklemek orijinalin tamamını her zaman geri getirir.',
      },
      {
        question: 'PDF Sayfalarını Sıralama ve Silme aracı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Sayfaları sıralarken PDF dosyam sunucuya yüklenir mi?',
        answer:
          'Hayır. PDF dosyanız tarayıcınızda yerel olarak işlenir ve asla yüklenmez; bu yüzden gizli belgeler cihazınızda kalır.',
      },
      {
        question: 'Birkaç sayfayı aynı anda silebilir miyim?',
        answer:
          'Her sayfa kartının kendi çöp simgesi vardır; sayfaları tek tek kaldırın. Her silmeden sonra sayfa sayısı ve konumlar hemen güncellenir.',
      },
      {
        question: 'Bir sayfayı doğrudan en başa veya en sona taşıyabilir miyim?',
        answer:
          'Sayfayı ilk veya son konuma taşımak için ok düğmelerine tekrar tekrar basın; karttaki güncellenmiş çıktı konumunu takip edin.',
      },
      {
        question: 'Yanlışlıkla yanlış sayfayı silersem ne olur?',
        answer:
          'Geri alma düğmesi yoktur; dokunulmamış orijinal dosyanızı yeniden yükleyip değişiklikleri tekrar yapın. Araç kaynak dosyanızı asla değiştirmez.',
      },
      {
        question: 'Sayfaları yeniden sıralamak üzerlerindeki metni veya görselleri değiştirir mi?',
        answer:
          'Hayır. Sayfalar pdf-lib ile olduğu gibi kopyalanır; vektörel metin, görseller ve yazı tipleri orijinal kalitesini korur.',
      },
      {
        question: 'Aynı sayfayı birden fazla kez kopyalayabilir miyim?',
        answer:
          'Evet. Bir sayfadaki kopya simgesine istediğiniz kadar basın; örneğin yazdırılabilir bir formu veya imza sayfasını paket içinde tekrarlamak için.',
      },
      {
        question: 'Bu araçla hangi PDF dosyaları çalışır?',
        answer:
          'Şifresiz her PDF çalışır. Şifre korumalı veya şifreli PDF dosyaları bu tarayıcı aracıyla açılamaz.',
      },
      {
        question: 'PDF dosyam kaç sayfa olabilir?',
        answer:
          'Sabit bir sayfa sınırı yoktur; canlı küçük resimler ilk 30 sayfa için oluşturulur, ancak her sayfanın konumu ve orijinal numarası olan bir kartı olur.',
      },
      {
        question: 'Sayfaları yeniden sıraladıktan sonra dosya boyutum değişir mi?',
        answer:
          'Sayfa silmek dosyayı küçültür; yalnızca sıralamak boyutu neredeyse aynı bırakır, çünkü belge aynı sayfalardan yeniden kurulur.',
      },
      {
        question: 'Taranmış bir PDF dosyasının sayfalarını yeniden sıralayabilir miyim?',
        answer:
          'Evet. Sayfalar metin mi yoksa taranmış görsel mi içerdiklerine bakılmaksızın bütün olarak kopyalanır; bu yüzden taranmış belgeler diğer PDF dosyaları gibi sıralanır.',
      },
      {
        question: 'PDF Sayfalarını Sıralama ve Silme aracı mobilde çalışır mı?',
        answer:
          'Evet, her modern mobil tarayıcıda çalışır; ancak sayfa kartları ve küçük resimler daha büyük bir masaüstü ekranında daha kolay yönetilir.',
      },
      {
        question: 'Yeniden sıralarken sayfaları döndürebilir miyim?',
        answer:
          'Hayır. Döndürme ayrı bir iştir; önce PDF Sayfa Döndürme aracını kullanın, sonra döndürülen sayfaları burada sıralayın.',
      },
      {
        question: 'Düzenleyicide sayfaları birbirinden nasıl ayırt ederim?',
        answer:
          'Her kartta mümkünse küçük resim önizlemesi, mevcut çıktı konumu ve kaynak dosyadaki orijinal sayfa numarası gösterilir.',
      },
      {
        question: 'Bu araçla iki PDF dosyasını birleştirebilir miyim?',
        answer:
          'Hayır. Bu araç yalnızca tek bir PDF içindeki sayfaları düzenler; ayrı belgeleri birleştirmek için önce PDF Birleştirme aracını kullanın.',
      },
      {
        question: 'Sayfa silmek yer imlerini veya iç bağlantıları kaldırır mı?',
        answer:
          'Sayfa içeriği korunur, ancak belge düzeyindeki yer imleri yeniden kurulumdan sağ çıkmayabilir; bu yüzden kaydedilen dosyayı paylaşmadan önce kontrol edin.',
      },
      {
        question: 'Yeniden sıralanmış PDF dosyasını kaydettikten sonra hangi dosyayı alırım?',
        answer:
          'Seçtiğiniz sayfa sırasında yepyeni bir PDF cihazınıza indirilir; orijinal dosyanız bilgisayarınızda dokunulmadan kalır.',
      },
    ],
  },
  'pdf-watermark': {
    instructions: [
      {
        title: 'PDF dosyanızı seçin',
        description:
          'Şifresiz herhangi bir PDF belgesini yerel olarak belleğe yükleyin.',
      },
      {
        title: 'Filigran metninizi yazın',
        description:
          'İhtiyacınız olan damgayı girin; örneğin GİZLİ, TASLAK veya DAĞITILMAZ. Standart Latin karakterleri kullanın.',
      },
      {
        title: 'Filigran damgasını özelleştirin',
        description:
          'Nötr Gri, Marka Lacivert veya Damga Kırmızısı seçin; boyut, saydamlık ve açı kaydırıcılarını damga doğru görünene kadar ayarlayın.',
      },
      {
        title: 'Hangi sayfaların damgalanacağını seçin',
        description:
          'Her sayfayı damgalamak için varsayılanı bırakın; yalnızca kapak sayfasında sınıflandırma damgası gerekiyorsa Yalnızca ilk sayfa seçeneğini işaretleyin.',
      },
      {
        title: 'Uygulayın ve indirin',
        description:
          'İsterseniz Yalnızca ilk sayfa seçeneğini işaretleyin, sonra Apply Watermark & Download düğmesine basın.',
      },
      {
        title: 'İpucu: paylaşmadan önce okunabilirliği kontrol edin',
        description:
          'İndirilen dosyayı açıp gövde metninin hâlâ kolay okunduğunu doğrulayın; damga çok güçlüyse %15-22 gibi daha düşük bir saydamlıkla yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: 'Yayın öncesi teklif taslağını damgalama',
        input: 'Metin: DRAFT · Yazı tipi: 54 pt · Saydamlık: %22 · Açı: 40°',
        output: 'Her sayfada ortalanmış çapraz yarı saydam vektörel DRAFT katmanı',
        explanation: 'Alfa saydamlığı kullanılır; bu sayede alttaki gövde metni tamamen okunabilir kalır.',
      },
      {
        title: 'Yalnızca kapak sayfasına GİZLİ damgası vurma',
        input: 'Metin: CONFIDENTIAL · Renk: Damga Kırmızısı · Yalnızca ilk sayfa: açık',
        output: 'Yalnızca ilk sayfada kırmızı çapraz GİZLİ damgası, diğer sayfalar temiz',
        explanation: 'Yalnızca ilk sayfa modu, iç sayfalara dokunmadan kapak sayfasına sınıflandırma eklemek için idealdir.',
      },
    ],
    benefits: [
      'Bulanık bit eşlem yerine net standart HelveticaBold vektörel tipografi kullanır',
      'İçeriğin okunabilir kalması için %8 ile %65 arasında yarı saydam alfa saydamlığı sunar',
      'Kapak sayfası sınıflandırma damgaları için Yalnızca İlk Sayfa modu sunar',
      'Yayınlanmamış taslakları harici bulut sunucularından kesinlikle uzak tutar',
    ],
    useCases: [
      'Dış incelemeden önce taslak sözleşmeleri, iş tanımlarını veya sunum destelerini işaretleme',
      'İK veya yönetim kurulu paketlerine GİZLİ veya YALNIZCA İÇ KULLANIM İÇİN uyarıları ekleme',
      'Örnek portföyleri veya önizleme kanıtlarını etiketleme',
      'Arşivlemeden önce tutarlı inceleme durumu damgaları uygulama',
    ],
    faqs: [
      {
        question: 'Alıcılar filigranı tam PDF düzenleyicilerde düzenleyebilir veya kaldırabilir mi?',
        answer:
          'pdf-lib ile çizilen metin filigranları, sayfadaki standart vektörel içerik nesneleridir. Filigranın metin olarak seçilemediği düzleştirilmiş sayfalar gerekiyorsa filigranlı PDF dosyasını PDF’yi Görsele Çevirme ve Görselleri PDF’ye Çevirme araçlarımızdan geçirin.',
      },
      {
        question: 'Filigran hem dikey hem yatay sayfalarda çalışır mı?',
        answer:
          'Evet. Koordinatlar her sayfanın kendi genişlik ve yüksekliğinden dinamik olarak hesaplanır; bu yüzden filigran her sayfada aynı göreli noktaya düşer.',
      },
      {
        question: 'Filigran metninde hangi karakterler desteklenir?',
        answer:
          'PDF HelveticaBold yazı tipinin desteklediği standart WinAnsi (Latin ASCII ve yaygın Batı Avrupa sembolleri) karakterleri desteklenir.',
      },
      {
        question: 'PDF Filigranı aracı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Filigran eklerken PDF dosyam sunucuya yüklenir mi?',
        answer:
          'Hayır. Dosya tarayıcınızda yerel olarak işlenir ve asla yüklenmez; bu yüzden yayınlanmamış taslaklar gizli kalır.',
      },
      {
        question: 'PDF dosyasının yalnızca bazı sayfalarına filigran ekleyebilir miyim?',
        answer:
          'Her sayfaya filigran ekleyebilir veya Yalnızca ilk sayfa seçeneğiyle yalnızca ilk sayfaya ekleyebilirsiniz; ortadaki özel bir aralığı damgalamak desteklenmez.',
      },
      {
        question: 'PDF filigranı olarak hangi metni kullanabilirim?',
        answer:
          'Standart Latin karakterleriyle herhangi bir kısa etiket; örneğin GİZLİ, TASLAK, YALNIZCA İÇ KULLANIM İÇİN veya şirket adınız.',
      },
      {
        question: 'Şirket adımı filigran olarak kullanabilir miyim?',
        answer:
          'Evet. Şirket veya marka adınızı filigran metni olarak yazın; seçtiğiniz sayfalara damgalanır.',
      },
      {
        question: 'PDF filigranının rengini değiştirebilir miyim?',
        answer:
          'Evet. Hafif bir işaret için Nötr Gri, markayla uyum için Marka Lacivert veya cesur bir sınıflandırma uyarısı için Damga Kırmızısı seçin.',
      },
      {
        question: 'Filigran ne kadar saydam olabilir?',
        answer:
          'Saydamlık %8 ile %65 arasında ayarlanabilir; böylece damga görünür kalırken alttaki metin tamamen okunabilir olur.',
      },
      {
        question: 'Filigranı çapraz yerine yatay yapabilir miyim?',
        answer:
          'Evet. Düz yatay bir damga için açı kaydırıcısını 0 dereceye ayarlayın veya tam çapraza kadar herhangi bir açıyı seçin.',
      },
      {
        question: 'PDF dosyasına görsel veya logo filigranı ekleyebilir miyim?',
        answer:
          'Hayır. Bu araç yalnızca metin filigranı damgalar; görsel ve logo katmanları desteklenmez.',
      },
      {
        question: 'PDF yazdırıldığında filigran da yazdırılır mı?',
        answer:
          'Evet. Filigran her sayfaya çizilmiş gerçek vektörel içeriktir; bu yüzden çıktılarda ekrandaki gibi görünür.',
      },
      {
        question: 'Filigran eklemek PDF dosyamın orijinal metnini değiştirir mi?',
        answer:
          'Hayır. Filigran sayfaların üzerine katman olarak çizilir; mevcut içeriği düzenlemez veya değiştirmez.',
      },
      {
        question: 'Şifreli bir PDF dosyasına filigran ekleyebilir miyim?',
        answer:
          'Hayır. Yalnızca şifresiz PDF dosyaları bu tarayıcı aracıyla açılabilir; önce şifreyi kaldırın.',
      },
      {
        question: 'Bu araç PDF dosyasından filigran kaldırabilir mi?',
        answer:
          'Hayır. Yalnızca filigran ekler; mevcut bir filigranı kaldırmak tam bir PDF düzenleyici gerektirir.',
      },
      {
        question: 'PDF filigranı hangi yazı tipini kullanır?',
        answer:
          'Filigranlar net standart HelveticaBold vektörel tipografi kullanır; bit eşlem gibi bulanıklaşmak yerine her boyutta net kalır.',
      },
      {
        question: 'Filigran koyu veya kalabalık sayfalarda okunabilir kalır mı?',
        answer:
          'Bu, sayfa arka planına bağlıdır; bu yüzden zıt bir renk ve orta bir saydamlık seçin, sonra indirilen dosyayı açıp sonucu kontrol edin.',
      },
      {
        question: 'Taranmış bir PDF dosyasına filigran ekleyebilir miyim?',
        answer:
          'Evet. Filigran, sayfada metin mi yoksa taranmış görsel mi olduğuna bakılmaksızın her sayfaya çizilir.',
      },
      {
        question: 'Filigran eklemek PDF dosyamı çok büyütür mü?',
        answer:
          'Yalnızca biraz. Vektörel metin çok az veri ekler; bu yüzden görsel tabanlı damgalara kıyasla dosya boyutu az artar.',
      },
    ],
  },
  'add-pdf-page-numbers': {
    instructions: [
      {
        title: 'PDF belgenizi yükleyin',
        description:
          'Sayfa numarası eklemek istediğiniz numarasız veya birleştirilmiş PDF dosyasını seçin.',
      },
      {
        title: 'Numara biçimini seçin',
        description:
          'Resmî paketler için “Sayfa 1 / N”, sade bir görünüm için “1 / N” veya minimal alt bilgi için yalnızca rakamları seçin.',
      },
      {
        title: 'Konumu ve boyutu ayarlayın',
        description:
          'Alt Orta, Alt Sağ, Alt Sol veya Üst Sağ seçeneklerinden birini seçin; yazı tipi boyutunu, numaralar kenar boşluğuna düzgün oturacak şekilde ayarlayın.',
      },
      {
        title: 'Başlangıç numarasını ve kapak atlamayı ayarlayın',
        description:
          'Çok ciltli bir seti sürdürmek için Başlangıç Numarasını değiştirin; başlık sayfasının temiz kalması için Kapak sayfasını atla seçeneğini açın.',
      },
      {
        title: 'Uygulayın ve indirin',
        description:
          'Add Page Numbers & Download düğmesine basarak numaralandırılmış PDF dosyasını yerel olarak dışa aktarın.',
      },
      {
        title: 'İpucu: alt bilgisi sıkışık sayfaları kontrol edin',
        description:
          'İndirilen dosyayı açıp alt bilgisinde zaten metin bulunan sayfalara bakın; bir numara çok yakın duruyorsa daha küçük bir yazı tipiyle yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: 'Kapak sayfasından sonra birleştirilmiş paketi numaralandırma',
        input: '5 sayfalık PDF · Biçim: Sayfa 1 / N · Kapak sayfasını atla: işaretli',
        output: '1. sayfa dokunulmamış; 2-5. sayfalara “Sayfa 1 / 4” ile “Sayfa 4 / 4” arası damga',
        explanation: 'Kapak sayfalarını ve ekleri PDF Birleştirme ile birleştirdikten sonra idealdir.',
      },
      {
        title: '2. ciltte numaralandırmayı 15. sayfadan sürdürme',
        input: 'Dosya: bolum2.pdf · Başlangıç Numarası: 15 · Biçim: 1 / N',
        output: 'Sayfalarda “15 / 24” ile başlayan numaralar',
        explanation: 'Özel başlangıç numarasıyla çok ciltli belge setlerinin numaralandırması sürdürülebilir.',
      },
    ],
    benefits: [
      'Ayrı PDF raporlarını birleştirdikten hemen sonra bozulan sayfa numaralandırmayı düzeltir',
      'Başlık kapaklarının temiz kalması için 1. sayfayı atlamayı destekler',
      'Özelleştirilebilir başlangıç numarası çok ciltli belge setlerini destekler',
      'Net ortalama ve sağa hizalama için her sayfa boyutuna göre tam metin genişliğini ölçer',
    ],
    useCases: [
      'PDF Birleştirme sonrası birleştirilen müşteri tekliflerini ve ihale dosyalarını sayfalandırma',
      'Mahkeme başvurularına, eklere veya tez bölümlerine numara ekleme',
      '2. ciltte 15. sayfadan itibaren sıralı numaralandırmayı sürdürme',
      'Yazdırılmış çalışma kılavuzlarına sağ altta hafif numaralar ekleme',
    ],
    faqs: [
      {
        question: 'Bu araç alt kenar boşluğuna yakın mevcut metni siler mi?',
        answer:
          'Araç, mevcut arka planları kapatmadan 28 pt kenar boşluğu kaymasıyla net numaralar çizer; bu yüzden alt bilgisi sıkışık sayfaları inceleyin.',
      },
      {
        question: '“Kapak sayfasını atla”, “Sayfa X / N” içindeki toplam sayıyı nasıl etkiler?',
        answer:
          'Açıldığında 1. sayfaya etiket konmaz ve kalan sayfalar 1’den (Toplam Sayfa − 1) sayısına kadar temiz sayılır; böylece toplamlar tutarlı kalır.',
      },
      {
        question: 'Numaralandırmayı 1 yerine 10. sayfadan başlatabilir miyim?',
        answer:
          'Evet. Başlangıç Numarasını 10 olarak değiştirerek sıralı ciltleri 10’dan itibaren numaralandırın.',
      },
      {
        question: 'PDF Sayfa Numarası Ekleme aracı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Sayfa numarası eklerken PDF dosyam sunucuya yüklenir mi?',
        answer:
          'Hayır. Dosya tarayıcınızda yerel olarak işlenir ve asla yüklenmez; bu yüzden belgeleriniz gizli kalır.',
      },
      {
        question: 'Hangi sayfa numarası biçimlerini seçebilirim?',
        answer:
          '“Sayfa 1 / N”, sade “1 / N” stilini veya etiketsiz yalnızca rakamları seçebilirsiniz.',
      },
      {
        question: 'Numaralar sayfada nerede görünebilir?',
        answer:
          'Kenar boşluklarınızda boş alanın nerede olduğuna göre Alt Orta, Alt Sağ, Alt Sol veya Üst Sağ seçeneklerinden birini seçin.',
      },
      {
        question: 'Kapak sayfasının numaralandırmasını atlayabilir miyim?',
        answer:
          'Evet. Kapak sayfasını atla seçeneğini açın; 1. sayfa temiz kalırken numaralandırma 2. sayfadan başlar.',
      },
      {
        question: 'Araç, zaten numaralı bir PDF dosyasını yeniden numaralandırır mı?',
        answer:
          'Hayır. Yeni numaraları eskilerin yanına damgalar; bu yüzden tek bir set istiyorsanız önce eski numaraları kaldırın.',
      },
      {
        question: 'Sayfa numaralarının yazı tipi boyutunu değiştirebilir miyim?',
        answer:
          'Evet. Yazı tipi boyutu ayarını değiştirin; numaralar alt bilginizi veya üst bilginizi sıkıştırmadan okunabilir olur.',
      },
      {
        question: 'Sayfa numaralandırma yatay sayfalarda çalışır mı?',
        answer:
          'Evet. Araç her sayfa boyutuna göre tam metin genişliğini ölçer; bu yüzden numaralar dikey ve yatay sayfalarda ortalanmış veya hizalanmış kalır.',
      },
      {
        question: 'PDF dosyasının yalnızca seçili sayfalarını numaralandırabilir miyim?',
        answer:
          'Hayır. Numaralandırma, isteğe bağlı atlanan kapak sayfası dışında her sayfaya uygulanır; özel bir aralığı numaralandırmak desteklenmez.',
      },
      {
        question: 'PDF dosyamda zaten sayfa numaraları varsa ne olur?',
        answer:
          'Yeni numaralar eskilerin üzerine eklenir; bu çift görünmesine yol açabilir. Bu yüzden çıktıyı kontrol edin ve gerekirse önce orijinali temizleyin.',
      },
      {
        question: 'Sayfa numaraları için Roma rakamları kullanabilir miyim?',
        answer:
          'Hayır. Araç sayfaları yalnızca standart Arap rakamlarıyla numaralandırır; bu yüzden Roma rakamları gibi bir numaralandırma stili sunulmaz.',
      },
      {
        question: 'Taranmış bir PDF dosyasına sayfa numarası ekleyebilir miyim?',
        answer:
          'Evet. Numaralar, sayfada metin mi yoksa taranmış görsel mi olduğuna bakılmaksızın her sayfaya vektörel metin olarak çizilir.',
      },
      {
        question: 'Sayfa numaralarını alt bilgi yerine üst bilgiye koyabilir miyim?',
        answer:
          'Evet, üst bilgi numaralandırması için Üst Sağ konumunu seçin; üst orta yerleşim sunulmaz.',
      },
      {
        question: 'Damgalanan sayfa numaraları seçilebilir metin olur mu?',
        answer:
          'Evet. Numaralar net vektörel metin olarak çizilir; bu yüzden okuyucular onları sıradan PDF metni gibi seçip kopyalayabilir.',
      },
      {
        question: 'Şifreli bir PDF dosyasını numaralandırabilir miyim?',
        answer:
          'Hayır. Yalnızca şifresiz PDF dosyaları bu tarayıcı aracıyla açılabilir; önce şifreyi kaldırın.',
      },
      {
        question: '“Bölüm 2 – Sayfa 3” gibi bir ön ek ekleyebilir miyim?',
        answer:
          'Hayır. Araç yalnızca üç numara biçimi sunar; bu yüzden özel ön ekler veya bölüm etiketleri eklenemez.',
      },
      {
        question: 'Sayfa numarası eklemek PDF içeriğimi değiştirir mi?',
        answer:
          'Hayır. Yalnızca numara etiketleri eklenir; mevcut metin, görseller ve düzen tam olarak aynı kalır.',
      },
    ],
  },
  'pdf-metadata-editor': {
    instructions: [
      {
        title: 'Bir PDF dosyası yükleyin',
        description:
          'Şifresiz herhangi bir PDF seçin; mevcut üst veri alanları ve sayfa boyutları otomatik olarak dolar.',
      },
      {
        title: 'Mevcut üst verileri inceleyin',
        description:
          'Başlık, Yazar, Konu, Anahtar Kelimeler, Oluşturan ve Üreten alanlarını; ayrıca sayfa sayısını ve tam sayfa boyutlarını okuyarak neyin saklandığını görün.',
      },
      {
        title: 'Alanları düzenleyin veya temizleyin',
        description:
          'Netlik için Başlık, Yazar, Konu ve Anahtar Kelimeler alanlarını güncelleyin veya gizlilik için Alanları Temizle düğmesine basın.',
      },
      {
        title: 'Gizlilik için düzenlenebilir alanları temizleyin',
        description:
          'Bir dosyayı herkese açık paylaşmadan önce Alanları Temizle seçeneğini kullanın; yazar adları ve yazılım sürümleri tek tıklamayla temizlenir.',
      },
      {
        title: 'Kaydedin ve indirin',
        description:
          'Save Metadata & Download PDF düğmesine basarak taze etiketli bir kopyayı dışa aktarın.',
      },
      {
        title: 'İpucu: kaydedilen dosyayı doğrulayın',
        description:
          'İndirilen PDF dosyasını bu araçta yeniden açarak yeni Başlığı ve temizlenen Yazar alanını doğrulayın; çünkü değişiklikler yalnızca kaydedilen kopyaya uygulanır.',
      },
    ],
    examples: [
      {
        title: 'Word veya Illustrator programından dışa aktarılan PDF dosyasını anonimleştirme',
        input: 'Yazar: “John Doe” · Oluşturan: “Microsoft® Word 2021”',
        output: 'Alanları Temizle düğmesine basın → Yazar/Oluşturan alanları boş, temiz PDF kaydedin',
        explanation: 'Herkese açık web barındırmadan önce çalışan adlarını ve yazılım sürümlerini kaldırır.',
      },
      {
        title: 'Tarayıcı sekmesinde yanlış başlığı düzeltme',
        input: 'Başlık: “Untitled-2” · Dosya: rapor.pdf',
        output: 'Başlığı “Q3 Satış Raporu” olan PDF; tarayıcı sekmesinde artık doğru ad görünür',
        explanation: 'Tarayıcılar .pdf dosya adı yerine belgenin içindeki PDF Başlık etiketini gösterir; bu yüzden Başlığı düzenlemek sekme etiketini düzeltir.',
      },
    ],
    benefits: [
      'Tarayıcıların sekme ve özelliklerde gösterdiği gizli yazar adlarını ve yazılım dizelerini ortaya çıkarır',
      'Tek tıklamalı Alanları Temizle, 6 standart Bilgi sözlüğü etiketini birden temizler',
      'SEO açısından önemli Başlık, Konu ve virgülle ayrılmış Anahtar Kelimeleri temiz günceller',
      'Sayfa sayısının yanı sıra tam PDF nokta boyutlarını (genişlik × yükseklik pt) gösterir',
    ],
    useCases: [
      'Herkese açık PDF paylaşmadan önce çalışan adlarını ve yerel araç sürümlerini temizleme',
      'Chrome/Safari PDF sekmelerinde görünen “Untitled-2” gibi garip dosya adlarını Başlık ile düzeltme',
      'İndirilebilir teknik dokümanlara aranabilir Konu ve Anahtar Kelime etiketleri ekleme',
      'Satıcı veya aday PDF gönderimlerini yerel olarak denetleme',
    ],
    faqs: [
      {
        question: 'PDF açtığımda tarayıcı sekmesinde neden yanlış başlık görünüyor?',
        answer:
          'Başlık etiketi gömülüyse tarayıcılar .pdf dosya adı yerine belgenin içindeki PDF Başlık özelliğini gösterir. Başlığı burada düzenlemek sekmedeki etiketi düzeltir.',
      },
      {
        question: 'Üst veri alanlarını temizlemek görünen sayfa içeriğini etkiler mi?',
        answer:
          'Hayır. Başlık, Yazar, Konu, Anahtar Kelimeler, Oluşturan ve Üreten alanlarını silmek veya güncellemek yalnızca PDF Bilgi sözlüğünü değiştirir; görünen sayfaları değiştirmez.',
      },
      {
        question: 'Düzenlemeler şifrelenir veya bir yere kaydedilir mi?',
        answer:
          'Asla. Üst verileri okuma ve yazma işlemleri pdf-lib ile tamamen istemci belleğinde gerçekleşir.',
      },
      {
        question: 'PDF Meta Veri Düzenleyici ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Üst verilerini düzenlerken PDF dosyam sunucuya yüklenir mi?',
        answer:
          'Hayır. Üst verileri okuma ve yazma tamamen tarayıcınızda olur; bu yüzden dosyalarınız asla yüklenmez veya kaydedilmez.',
      },
      {
        question: 'PDF dosyasında hangi üst veri alanlarını düzenleyebilirim?',
        answer:
          'Başlık, Yazar, Konu, Anahtar Kelimeler, Oluşturan ve Üreten alanlarını görüntüleyip düzenleyebilirsiniz; bunlar PDF Bilgi sözlüğünün altı standart etiketidir.',
      },
      {
        question: 'PDF dosyasından yalnızca yazar adını kaldırabilir miyim?',
        answer:
          'Evet. Yalnızca Yazar alanını temizleyip kaydedin; Başlık, Konu ve diğer etiketler olduğu gibi kalır.',
      },
      {
        question: '“Alanları Temizle” ne yapar?',
        answer:
          'Altı standart Bilgi sözlüğü etiketini birden temizler; dosyayı paylaşmadan önce yazar adlarını, yazılım dizelerini ve başlıkları kaldırır.',
      },
      {
        question: 'Başlığı düzenlemek PDF dosyasının arama sonuçlarındaki görünümünü değiştirir mi?',
        answer:
          'Başlığı düzenlemek tarayıcının PDF sekmesinde gösterdiği etiketi değiştirir; ancak belirli bir arama sıralaması veya özet garantisi vermez.',
      },
      {
        question: 'Üst verileri silmek yer imlerini veya bağlantıları siler mi?',
        answer:
          'Hayır. Silme yalnızca Bilgi sözlüğünü günceller; bu yüzden yer imleri, bağlantılar ve görünen sayfa içeriği değişmeden kalır.',
      },
      {
        question: 'Hiçbir şeyi değiştirmeden PDF üst verilerini görüntüleyebilir miyim?',
        answer:
          'Evet. Dosyayı yükler yüklemez alanlar dolar ve Save Metadata & Download PDF düğmesine basmadıkça hiçbir şey değişmez.',
      },
      {
        question: 'PDF dosyasında Oluşturan ve Üreten alanları nedir?',
        answer:
          'Oluşturan, belgeyi yapan uygulamayı (örneğin Microsoft Word) belirtir; Üreten ise onu PDF dosyasına dönüştüren yazılımı belirtir.',
      },
      {
        question: 'Daha iyi bulunabilirlik için PDF dosyasına anahtar kelime ekleyebilir miyim?',
        answer:
          'Evet. Üst veri düzenleyicide virgülle ayrılmış Anahtar Kelimeler girin; bunlar, onları okuyan arama araçları için PDF dosyasında saklanır.',
      },
      {
        question: 'PDF üst verilerini düzenledikten sonra dosya boyutu değişir mi?',
        answer:
          'Yalnızca çok az. Üst veri küçük bir metin bloğudur; bu yüzden düzenlemek veya silmek toplam dosya boyutunu neredeyse hiç etkilemez.',
      },
      {
        question: 'Taranmış bir PDF dosyasının üst verilerini düzenleyebilir miyim?',
        answer:
          'Evet. Üst veri belge başlığında yer alır ve sayfa içeriğinden bağımsızdır; bu yüzden taranmış PDF dosyaları metin tabanlı olanlarla aynı şekilde çalışır.',
      },
      {
        question: 'Bu araçla XMP üst verilerini düzenleyebilir miyim?',
        answer:
          'Hayır. Bu araç yalnızca altı standart Bilgi sözlüğü etiketini düzenler; genişletilmiş XMP üst veri paketleri değiştirilmez.',
      },
      {
        question: 'Şifreli bir PDF dosyasının üst verilerini düzenleyebilir miyim?',
        answer:
          'Hayır. Yalnızca şifresiz PDF dosyaları bu tarayıcı aracıyla açılabilir; önce şifreyi kaldırın.',
      },
      {
        question: 'PDF Meta Veri Düzenleyici sayfa boyutunu gösterir mi?',
        answer:
          'Evet. Yüklenen her dosya için sayfa sayısının yanı sıra nokta cinsinden tam sayfa boyutlarını (genişlik × yükseklik) gösterir.',
      },
      {
        question: 'Üst verileri silmek PDF dosyasındaki tüm kişisel bilgileri kaldırır mı?',
        answer:
          'Altı Bilgi etiketini kaldırır; ancak sayfalarda görünür şekilde yazılmış kişisel bilgiler, örneğin gövde metnindeki bir ad, kalır.',
      },
      {
        question: 'Üst veri değişikliklerini uygulamak için dosyayı indirmem gerekir mi?',
        answer:
          'Evet. Save Metadata & Download PDF düğmesine basmak değişikliklerinizi içeren yeni bir dosya oluşturur; orijinal dosyanız dokunulmadan kalır.',
      },
    ],
  },
  'pdf-text-extractor': {
    instructions: [
      {
        title: 'Bir PDF belgesi seçin',
        description:
          'Şifresiz herhangi bir PDF dosyası seçin; PDF.js her sayfanın gömülü metin akışını yerel olarak tarar.',
      },
      {
        title: 'Çıkarılan metni inceleyin',
        description:
          'Çıktıyı okuyup bildirilen sayfa sayısını, kelime sayısını ve UTF-8 bayt boyutunu kontrol ederek çıkarmanın tam göründüğünü doğrulayın.',
      },
      {
        title: 'Sayfa işaretlerini açıp kapatın',
        description:
          'Yapılandırılmış alıntılar için sayfa başlıklarını açık tutun veya kesintisiz düzyazı için kapatın.',
      },
      {
        title: 'Taranmış sayfaları kontrol edin',
        description:
          'Araç 0 karakter bildiriyorsa PDF büyük olasılıkla çıkarılacak metin katmanı olmayan, yalnızca görselden oluşan taranmış bir dosyadır.',
      },
      {
        title: 'Kopyalayın veya .txt olarak dışa aktarın',
        description:
          'Çıkarılan metni düzenleyicinize kopyalayın veya temiz bir UTF-8 .txt transkripti indirin.',
      },
      {
        title: 'İpucu: bozuk veya eksik metni düzeltin',
        description:
          'Karakterler yanlış görünüyorsa kaynak PDF, uygun Unicode eşlemesi olmayan özel bir yazı tipi kullanıyor olabilir; orijinal belgeyi veya yeni dışa aktarılmış bir kopyayı deneyin.',
      },
    ],
    examples: [
      {
        title: 'Çok sayfalı bir teknik dokümandan okunabilir metin çıkarma',
        input: 'teknik-dokuman.pdf (8 sayfa, gömülü metin katmanı)',
        output: '--- Sayfa 1 --- ayraçlı yapılandırılmış düz metin, kelime sayısı ve .txt indirme',
        explanation: 'Manuel vurgulama ve kopyalama hataları olmadan PDF metin öğelerini temiz çıkarır.',
      },
      {
        title: 'PDF makalenin kelime sayısını kontrol etme',
        input: 'makale.pdf (3 sayfa, metin katmanlı)',
        output: 'Çıkarılan metin + kelime sayısı: 1.240 kelime',
        explanation: 'Kelime sayısı raporu, makalenin gereken uzunluğu karşılayıp karşılamadığını gösterir.',
      },
    ],
    benefits: [
      'PDF taranmış veya yalnızca görselden oluşuyorsa bunu şeffaf şekilde bildirir (0 metin katmanı, çevrimdışı OCR çalıştırılmaz)',
      'Açılıp kapatılabilen --- Sayfa N --- işaretleriyle temiz sayfa sonlarını korur',
      'Çıkarılan sayfa sayısını, kelime sayısını ve UTF-8 bayt boyutunu bildirir',
      'Metni Kelime Sayacı veya Bul ve Değiştir araçlarına göndermeden önce ideal ilk adımdır',
    ],
    useCases: [
      'PDF teknik dokümanlarından, müfredatlardan veya belgelerden temiz düz metin çıkarma',
      'Biçimlendirilmiş PDF makalelerin kelime sayısını Kelime Sayacı ile kontrol etme',
      'Arşivlenmiş bir PDF dosyasının aranabilir metin katmanı mı yoksa düz tarama mı içerdiğini doğrulama',
      'PDF toplantı gündemlerini düz metin Markdown notlarına aktarma',
    ],
    faqs: [
      {
        question: 'Taranmış bir PDF dosyasından neden 0 karakter çıkarıldı?',
        answer:
          'Tarayıcı PDF dosyaları sayfaları genellikle gömülü OCR metin katmanı olmadan düz bit eşlem görseller olarak kaydeder. Bu tarayıcı aracı mevcut PDF metin akışlarını doğrudan okur ve çevrimdışı OCR içermediğini dürüstçe belirtir.',
      },
      {
        question: 'Karmaşık çok sütunlu tablolar bazen neden satırlar arasında bölünür?',
        answer:
          'PDF dosyaları metni anlamsal HTML tabloları yerine X/Y koordinatlarıyla konumlandırarak saklar; bu yüzden PDF.js metin öğelerini satır sonu ipuçlarıyla akış sırasına göre çıkarır.',
      },
      {
        question: 'Metin çıkarmak için PDF dosyam yüklenir mi?',
        answer:
          'Hayır. PDF.js metin akışlarını tarayıcı sekmenizde ayrıştırır ve çıkarır.',
      },
      {
        question: 'PDF Metin Çıkarıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Çıkarılan metni hangi dosya biçimlerine aktarabilirim?',
        answer:
          'Düz metni panoya kopyalayabilir veya temiz bir UTF-8 .txt transkripti olarak indirebilirsiniz.',
      },
      {
        question: 'PDF dosyasının yalnızca bir sayfasından metin çıkarabilir miyim?',
        answer:
          'Çıkarma bütün belgeyi kapsar; ancak isteğe bağlı --- Sayfa N --- işaretleri, ihtiyacınız olan bölümü bulup kopyalamanızı kolaylaştırır.',
      },
      {
        question: 'Çıkarılan çıktıda bazı metinler neden eksik?',
        answer:
          'Görsel olarak saklanan metin veya Unicode eşlemesi olmayan özel yazı tipiyle çizilen metin, PDF.js için okunabilir bir metin akışı oluşturmaz.',
      },
      {
        question: 'PDF Metin Çıkarıcı taranmış sayfalar için OCR içerir mi?',
        answer:
          'Hayır. Yalnızca mevcut gömülü metin katmanını okur ve OCR çalıştırmaz; bu yüzden yalnızca görselden oluşan taranmış sayfalar metin döndürmez.',
      },
      {
        question: 'Başka bir dildeki PDF dosyasından metin çıkarabilir miyim?',
        answer:
          'Evet. Gömülü Unicode metin olduğu gibi çıkarılır; bu yüzden İngilizce olmayan belgeler, PDF doğru bir metin katmanı sakladığı sürece çalışır.',
      },
      {
        question: 'Çıkarma kalın metni veya başlıkları korur mu?',
        answer:
          'Hayır. Çıktı yalnızca düz metindir; bu yüzden kalın, italik, başlık ve diğer biçimlendirmeler aktarılmaz.',
      },
      {
        question: 'Ne kadar büyük bir PDF dosyasından metin çıkarabilirim?',
        answer:
          'Belirtilen bir boyut sınırı yoktur ve çıkarma yerel olarak çalışır; çok büyük belgelerin taranması biraz daha uzun sürebilir.',
      },
      {
        question: 'Dosya indirmeden çıkarılan metni kopyalayabilir miyim?',
        answer:
          'Evet. Tek tıklamalı kopya düğmesiyle metni doğrudan düzenleyicinize, not uygulamanıza veya belgenize yapıştırın.',
      },
      {
        question: 'Çıktıdaki “--- Sayfa N ---” işaretleri nedir?',
        answer:
          'Bunlar her sayfanın nerede başladığını gösteren isteğe bağlı başlıklardır; böylece sayfaları doğru şekilde alıntılayabilirsiniz. Kesintisiz düzyazı için kapatın.',
      },
      {
        question: 'PDF Metin Çıkarıcı kelime sayısı gösterir mi?',
        answer:
          'Evet. Metnin yanında çıkarılan sayfa sayısını, kelime sayısını ve UTF-8 bayt boyutunu bildirir.',
      },
      {
        question: 'Şifreli bir PDF dosyasından metin çıkarabilir miyim?',
        answer:
          'Hayır. Yalnızca şifresiz PDF dosyaları bu tarayıcı aracıyla açılabilir; önce şifreyi kaldırın.',
      },
      {
        question: 'PDF dosyasından köprüler çıkarılır mı?',
        answer:
          'Görünür bağlantı metni, metin olarak mevcutsa çıkarılır; ancak bağlantıların kendileri tıklanabilir URL olarak dışa aktarılmaz.',
      },
      {
        question: 'Çıkarılan metni Word veya Google Docs uygulamasında kullanabilir miyim?',
        answer:
          'Evet. Kopyalanan metni doğrudan yapıştırın veya indirilen .txt dosyasını açıp içeriğini herhangi bir kelime işlemciye kopyalayın.',
      },
      {
        question: 'Çıkarılan metinde bazı karakterler neden bozuk görünüyor?',
        answer:
          'Bazı PDF dosyaları uygun Unicode eşlemesi olmayan özel yazı tipleri gömer; bu yüzden PDF.js glifleri doğru karakterlerle eşleştiremez.',
      },
      {
        question: 'Metin çıkarmak orijinal PDF dosyamı değiştirir mi?',
        answer:
          'Hayır. Çıkarma yalnızca okur; orijinal PDF dosyanız asla değiştirilmez. Bu yüzden açtığınız her kopyadan güvenle metin çıkarabilirsiniz.',
      },
      {
        question: 'PDF Metin Çıkarıcı formlardan ve açıklamalardan metin çekebilir mi?',
        answer:
          'Her sayfanın ana gömülü metin katmanını çıkarır; doldurulmuş form değerleri ve açıklama notları ayrı saklanıyorsa görünmeyebilir.',
      },
    ],
  },
};
