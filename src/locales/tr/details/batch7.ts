// Detail content for TR tools — Turkish translation of
// src/locales/hi/details/batch7.ts (same shape, same tool ids and order).
// Written directly in Turkish for the tr locale.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'image-compressor': {
    instructions: [
      {
        title: 'Kaynak görseli seçin',
        description:
          'Cihazınızdan PNG, JPG, WebP veya GIF formatında bir görsel seçin; böylece boyutları ve gerçek dosya boyutu okunabilir.',
      },
      {
        title: 'Hedef formatı, genişlik sınırını ve kaliteyi seçin',
        description:
          'Büyük boyut tasarrufu için WebP veya JPG seçin, isterseniz maksimum genişlik sınırı ekleyin (örneğin 1920 px veya 1280 px) ve kalite kaydırıcısını %10 ile %100 arasında ayarlayın.',
      },
      {
        title: 'Sıkıştırmayı çalıştırın',
        description:
          'Sıkıştır düğmesine basın; görsel tarayıcınızda yerel olarak yeniden kodlanır ve yeni dosya boyutu anında görünür.',
      },
      {
        title: 'Öncesi ve sonrasını karşılaştırın',
        description:
          'Yan yana önizlemeye ve tam bayt ile yüzde tasarrufuna bakarak kalitenin hâlâ iyi göründüğünden emin olun.',
      },
      {
        title: 'Sıkıştırılmış dosyayı indirin',
        description:
          'İndir düğmesine basarak optimize edilmiş görseli cihazınıza kaydedin, ardından başka bir dosya için aynı işlemi tekrarlayın.',
      },
      {
        title: 'İpucu: Çıktı girdiden büyük mü oldu?',
        description:
          'Küçük bir PNG sıkıştırdıktan sonra büyüdüyse çıktı formatını WebP veya JPG olarak değiştirin ya da kalite kaydırıcısını biraz düşürüp yeniden sıkıştırın.',
      },
    ],
    examples: [
      {
        title: 'Blog yazısı için 2,4 MB boyutundaki kapak fotoğrafını optimize etme',
        input: '3840×2160 JPG · Çıktı: WebP · Maks. Genişlik: 1280 px · Kalite: %80',
        output: '1280×720 WebP genellikle yaklaşık 85–140 KB olur (%94 daha küçük dosya)',
        explanation: 'Boyut sınırı ile modern WebP sıkıştırması birlikte Largest Contentful Paint süresini belirgin ölçüde kısaltır.',
      },
      {
        title: 'E-posta eki için ekran görüntüsünü küçültme',
        input: '1920×1080 PNG ekran görüntüsü · Çıktı: JPG · Kalite: %75',
        output: 'Yaklaşık 200 KB boyutunda JPG, e-posta ek sınırına rahatça sığar',
        explanation: 'JPG çıktısı, PNG ekran görüntülerini belirgin ölçüde küçültürken metnin okunabilir kalmasını sağlar.',
      },
    ],
    benefits: [
      'Sunucuya yükleme yok — yayınlanmamış ürün grafikleri ve özel fotoğraflar tamamen cihazınızda kalır',
      'WebP, JPEG (otomatik beyaz alfa dolgusu ile) ve PNG yeniden kodlamayı destekler',
      'Gerçek öncesi ve sonrası bayt boyutlarını ve yüzde tasarrufunu anında gösterir',
      'İsteğe bağlı maksimum genişlik sınırı, büyük kamera fotoğraflarını tek seferde küçültür',
    ],
    useCases: [
      'Core Web Vitals ve LCP değerlerini iyileştirmek için kapak bannerlarını ve ekran görüntülerini küçültme',
      'E-posta, portal ve CMS yüklemeleri için daha hafif ekler hazırlama',
      'Ağır ham ekran görüntülerini hafif WebP web dosyalarına dönüştürme',
      'Kalite ile görsel sadakat arasındaki doğru dengeyi hızlıca kontrol etme',
    ],
    faqs: [
      {
        question: 'Küçük bir PNG dosyasını PNG olarak sıkıştırmak bazen boyutu neden artırır?',
        answer:
          'Tarayıcı Canvas, PNG dosyalarını pngquant gibi özel palet niceleme araçları olmadan standart kayıpsız DEFLATE akışıyla yeniden kodlar. Çıktı formatını WebP veya JPG olarak değiştirmek dosya boyutunu genellikle belirgin ölçüde azaltır.',
      },
      {
        question: 'Fotoğraflarım harici bir sıkıştırma sunucusuna yükleniyor mu?',
        answer:
          'Hayır. Kod çözme, yeniden boyutlandırma ve Canvas ile yeniden kodlama işlemlerinin tamamı tarayıcınızın belleği içinde çalışır.',
      },
      {
        question: 'JPG seçersem saydam arka plana ne olur?',
        answer:
          'JPEG alfa saydamlığını desteklemediği için saydam bölgeler kodlanmadan önce düz beyaz (#ffffff) renkle doldurulur.',
      },
      {
        question: 'Görsel Sıkıştırıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez, filigran yoktur ve sıkıştırabileceğiniz görsel sayısında sınır yoktur.',
      },
      {
        question: 'Hangi görsel formatlarını sıkıştırabilirim?',
        answer:
          'PNG, JPG, WebP ve GIF görsellerini sıkıştırabilir, sonucu WebP, JPG veya PNG olarak indirebilirsiniz.',
      },
      {
        question: 'Görsel Sıkıştırıcı fotoğrafımı ne kadar küçültebilir?',
        answer:
          'Tasarruf, orijinal formata ve kalite ayarına bağlıdır; ancak %80 kalitede WebP formatına çevrilen fotoğraflar genellikle %50–90 oranında küçülür.',
      },
      {
        question: 'Görsel sıkıştırmak kalitesini düşürür mü?',
        answer:
          'WebP ve JPG gibi kayıplı formatlar, biraz detay karşılığında dosyayı çok küçültür. Kalite kaydırıcısı ve önizleme ile size uygun dengeyi bulun ya da kayıpsız sonuç için PNG kullanın.',
      },
      {
        question: 'Görsel Sıkıştırıcı görselimin boyutlarını değiştirir mi?',
        answer:
          'Yalnızca maksimum genişlik sınırı belirlerseniz. Aksi hâlde piksel boyutları aynı kalır, yalnızca dosya boyutu değişir.',
      },
      {
        question: 'E-posta ekleri için görsel sıkıştırabilir miyim?',
        answer:
          'Evet, önce sıkıştırmak büyük fotoğrafları e-posta ek sınırlarına sığacak kadar küçültür; böylece birden fazla mesaja bölmeniz gerekmez.',
      },
      {
        question: 'Web sitesi görselleri için hangi kalite ayarını seçmeliyim?',
        answer:
          'WebP formatında %75–85 kalite genellikle orijinaline neredeyse aynı görünür ve dosyalar hızlı sayfa yüklemesi için yeterince küçük kalır.',
      },
      {
        question: 'Sıkıştırırken JPG dosyasını neden WebP formatına çevirmeliyim?',
        answer:
          'WebP, JPG formatından daha verimli sıkıştırma kullanır; bu nedenle aynı fotoğraf, aynı görsel kalitede genellikle çok daha küçük olur.',
      },
      {
        question: 'Birden fazla görseli aynı anda sıkıştırabilir miyim?',
        answer:
          'Sıkıştırıcı bir seferde bir görsel işler; böylece indirmeden önce her fotoğrafın kalitesini, genişliğini ve formatını ayrı ayrı ayarlayabilirsiniz.',
      },
      {
        question: 'Sıkıştırma çevrimdışı çalışır mı?',
        answer:
          'Evet, sayfa yüklendikten sonra tüm sıkıştırma işlemleri tarayıcınızda yerel olarak çalışır; bu nedenle internet bağlantısı olmadan da kullanılabilir.',
      },
      {
        question: 'Sıkıştırılmış görselimde filigran olur mu?',
        answer:
          'Hayır, indirilen görsellerde asla filigran veya marka bulunmaz; sıkıştırılmış dosya, orijinal görselin yalnızca daha küçük hâli gibi görünür.',
      },
      {
        question: 'Ekran görüntülerini sıkıştırmak için en iyi format hangisidir?',
        answer:
          'Ekran görüntüleri için WebP genellikle en küçük dosyayı verir. Piksel düzeyinde kayıpsız kalite gerekiyorsa PNG kullanın.',
      },
      {
        question: 'Boyutlarını değiştirmeden görsel sıkıştırabilir miyim?',
        answer:
          'Evet, maksimum genişlik sınırı belirlemeyin; araç orijinal genişliği ve yüksekliği korur, yalnızca dosya boyutunu küçültür.',
      },
      {
        question: 'Görsel Sıkıştırıcı görsel meta verilerini korur mu?',
        answer:
          'Tarayıcı Canvas ile yeniden kodlama genellikle kamera ayarları ve konum gibi EXIF meta verilerini kaldırır; bu da dosyanın daha da küçülmesine yardımcı olur.',
      },
      {
        question: 'Görsel Sıkıştırıcıyı telefonumda kullanabilir miyim?',
        answer:
          'Evet, her modern mobil tarayıcıda çalışır. Fotoğraf kitaplığınızdan bir görsel seçin ve sıkıştırılmış sonucu aynı şekilde indirin.',
      },
      {
        question: 'Sıkıştırabileceğim en büyük görsel boyutu nedir?',
        answer:
          'PNG, JPG ve WebP dosyaları için dosya başına sınır 20 MB değerindedir. Hiçbir şey sunucuya yüklenmediğinden, bu sınır içinde çok büyük görseller yalnızca cihazınızın belleği ve tarayıcı Canvas boyutuyla sınırlıdır.',
      },
      {
        question: 'Bir görseli 100 KB altına nasıl sıkıştırırım?',
        answer:
          'WebP çıktısı seçin, maksimum genişliği 1280 px gibi bir değere ayarlayın ve görüntülenen dosya boyutu 100 KB altına düşene kadar kalite kaydırıcısını adım adım azaltın.',
      },
    ],
  },
  'image-resizer': {
    instructions: [
      {
        title: 'Görselinizi yükleyin',
        description:
          'Orijinal piksel genişliğini ve yüksekliğini okumak için PNG, JPG, WebP veya GIF formatında bir görsel yükleyin.',
      },
      {
        title: 'Genişliği, yüksekliği ve uyum modunu ayarlayın',
        description:
          'Özel piksel değerleri girin (isteğe bağlı En Boy Oranını Kilitle seçeneğiyle) ya da sosyal medya hazır ayarlarından birini seçin, ardından Merkezden Kırparak Doldur veya Tam Esnet/Ölçekle seçeneklerinden birini belirleyin.',
      },
      {
        title: 'Çıktı formatı seçin',
        description:
          'Oluşturmadan önce saydamlık için PNG, fotoğraflar için JPG veya en küçük dosya için WebP seçin.',
      },
      {
        title: 'Yeniden boyutlandırılmış görseli oluşturun',
        description:
          'Yeniden Boyutlandırılmış Görseli Oluştur düğmesine basarak belirttiğiniz tam piksel boyutlarında yeni sürümü oluşturun.',
      },
      {
        title: 'Sonucu inceleyin ve indirin',
        description:
          'Keskinlik ve kırpma için önizlemeyi kontrol edin, dosya boyutuna bakın ve ardından İndir düğmesine basarak kaydedin.',
      },
      {
        title: 'İpucu: Görsel esnemiş veya bulanık mı görünüyor?',
        description:
          'Bozulmayı önlemek için En Boy Oranını Kilitle seçeneğini açın veya Merkezden Kırparak Doldur moduna geçin; ayrıca orijinal boyutun çok üzerinde büyütmekten kaçının.',
      },
    ],
    examples: [
      {
        title: 'Uzun ekran görüntüsünü 1200×630 Open Graph kartına kırpma',
        input: '1440×1600 ekran görüntüsü · Hazır ayar: OG Paylaşım (1200×630) · Uyum: Merkezden Kırparak Doldur',
        output: 'Esneme veya bozulma olmadan dikey olarak ortalanmış keskin 1200×630 kart',
        explanation: 'Kırparak doldurma, hedef çerçeve dolana kadar orantılı ölçekler ve fazla kenarları eşit şekilde keser.',
      },
      {
        title: 'Profil fotoğrafı için 512×512 avatar oluşturma',
        input: '1200×900 fotoğraf · Hazır ayar: Avatar (512×512) · Uyum: Merkezden Kırparak Doldur',
        output: 'Yüzü ortada olan kusursuz kare 512×512 avatar',
        explanation: 'Merkezden kırpma, yüzü çerçevenin ortasında tutar ve kenarlardaki gereksiz kısmı kaldırır.',
      },
    ],
    benefits: [
      'Tek tıkla Open Graph, YouTube HD, Kare ve Avatar piksel hazır ayarları',
      'Merkezden Kırparak Doldur, en boy oranı değişirken tuhaf esnemeyi önler',
      'Yüksek kaliteli Canvas imageSmoothingQuality, keskin tipografi ve çizgileri korur',
      'Gerçek dosya boyutu bilgisiyle doğrudan PNG, JPG veya WebP olarak dışa aktarır',
    ],
    useCases: [
      'Blog yazıları ve açılış sayfaları için 1200×630 og:image kartları oluşturma',
      '1080×1080 ürün fotoğrafları ve 512×512 profil avatarları hazırlama',
      'Yüksek DPI ekran görüntülerini dokümantasyona eklemeden önce küçültme',
      'CMS şablonunun gerektirdiği tam kapak boyutlarını oluşturma',
    ],
    faqs: [
      {
        question: 'Merkezden Kırparak Doldur ile Esnet / Tam Ölçekle arasındaki fark nedir?',
        answer:
          'Merkezden Kırparak Doldur, doğal oranları korur ve yeni en boy oranı farklı olduğunda fazla kenarları iki yandan eşit şekilde keser. Tam Ölçekle ise orijinal görüntünün tamamını hedef genişlik ve yüksekliğe zorla sığdırır.',
      },
      {
        question: 'Küçük bir fotoğrafı 4K boyutuna temiz şekilde büyütebilir miyim?',
        answer:
          'Canvas enterpolasyonu daha büyük piksel ızgaraları dışa aktarabilir; ancak yerel çözünürlüğün ötesinde büyütmek, kaybolan ince detayları geri getiremez.',
      },
      {
        question: 'Desteklenen en büyük çıktı boyutu nedir?',
        answer:
          'Tarayıcı Canvas bellek sınırları içinde güvenli kalmak için girişler her eksende 8000 px ile sınırlıdır.',
      },
      {
        question: 'Görsel Boyutlandırıcı ücretsiz mi?',
        answer:
          'Evet, ücretsizdir — kayıt gerekmez, filigran yoktur ve yeniden boyutlandırabileceğiniz görsel sayısında sınır yoktur.',
      },
      {
        question: 'Görsel yeniden boyutlandırmak ile kırpmak arasındaki fark nedir?',
        answer:
          'Yeniden boyutlandırma, görselin tamamının piksel boyutlarını değiştirir; kırpma ise görüntünün bir kısmını keser. Bu araç, merkezden kırparak doldurma dahil her ikisini de yapabilir.',
      },
      {
        question: 'Görsel Boyutlandırıcı, sosyal paylaşım için 1200×630 boyutunda görsel yapabilir mi?',
        answer:
          'Evet, Open Graph hazır ayarını (1200×630) seçin; araç görselinizi sosyal platformlardaki bağlantı önizlemeleri için tam bu boyuta getirir.',
      },
      {
        question: 'Görseli esnetmeden nasıl yeniden boyutlandırırım?',
        answer:
          'En Boy Oranını Kilitle seçeneğini açık tutun veya Merkezden Kırparak Doldur kullanın; böylece araç görüntüyü ezmek yerine orantılı ölçekler.',
      },
      {
        question: 'Bir görseli kare 1080×1080 boyutuna getirebilir miyim?',
        answer:
          'Evet, Kare hazır ayarını seçin veya Merkezden Kırparak Doldur açıkken genişlik ve yükseklik için 1080 değerini girin.',
      },
      {
        question: 'Görseli yeniden boyutlandırmak dosya boyutunu azaltır mı?',
        answer:
          'Genellikle evet, çünkü daha az piksel daha az veri demektir — özellikle WebP veya JPG olarak dışa aktardığınızda.',
      },
      {
        question: 'Hangi görsel formatlarını yeniden boyutlandırabilirim?',
        answer:
          'PNG, JPG, WebP ve GIF görsellerini yeniden boyutlandırabilir ve PNG, JPG veya WebP olarak dışa aktarabilirsiniz.',
      },
      {
        question: 'Yeniden boyutlandırmak görselimi bulanıklaştırır mı?',
        answer:
          'Küçültme, yüksek kaliteli Canvas yumuşatma sayesinde genellikle keskin kalır. Orijinal boyutun ötesinde büyütmek ince detayları yumuşatabilir.',
      },
      {
        question: 'Profil fotoğrafı için görsel yeniden boyutlandırabilir miyim?',
        answer:
          'Evet, kusursuz kare bir profil fotoğrafı elde etmek için Merkezden Kırparak Doldur ile birlikte Avatar hazır ayarını (512×512) kullanın.',
      },
      {
        question: 'Görsel Boyutlandırıcıda Merkezden Kırparak Doldur nedir?',
        answer:
          'Görseli hedef çerçeve dolana kadar ölçekler, ardından fazla kenarları merkezden eşit şekilde keser; böylece hiçbir şey esnemiş görünmez.',
      },
      {
        question: 'Görsel Boyutlandırıcı fotoğraflarımı bir yere yüklüyor mu?',
        answer:
          'Hayır, tüm yeniden boyutlandırma işlemleri tarayıcınızda yerel olarak yapılır ve görselleriniz cihazınızdan asla ayrılmaz.',
      },
      {
        question: 'Telefonumda görsel yeniden boyutlandırabilir miyim?',
        answer:
          'Evet, mobil tarayıcılarda çalışır. Bir fotoğraf yükleyin, yeni boyutları girin ve sonucu indirin.',
      },
      {
        question: 'PNG yeniden boyutlandırırken saydamlığa ne olur?',
        answer:
          'PNG veya WebP olarak dışa aktardığınız sürece saydamlık korunur. JPG olarak dışa aktarmak saydam alanları beyazla doldurur.',
      },
      {
        question: 'Birden fazla görseli aynı boyuta getirebilir miyim?',
        answer:
          'Araç bir seferde bir görsel yeniden boyutlandırır. Tutarlı kalmaları için her görselde aynı hazır ayarı veya boyutları tekrarlayın.',
      },
      {
        question: 'Görsel Boyutlandırıcının işleyebileceği en büyük görsel nedir?',
        answer:
          'Tarayıcı Canvas bellek sınırları içinde kalmak için girişler her yönde 8000 px ile sınırlıdır.',
      },
      {
        question: 'YouTube küçük resmi için görsel nasıl yeniden boyutlandırılır?',
        answer:
          'Küçük resminizin önerilen 16:9 boyutuna uyması için YouTube HD hazır ayarını (1280×720) seçin.',
      },
      {
        question: 'Yeniden boyutlandırılmış görselimin dosyası neden hâlâ büyük?',
        answer:
          'Piksel boyutu hikâyenin yalnızca bir kısmıdır. PNG yerine WebP veya JPG olarak dışa aktarın ya da ardından Görsel Sıkıştırıcı ile dosyayı daha da küçültün.',
      },
    ],
  },
  'image-format-converter': {
    instructions: [
      {
        title: 'Hedef formatı ve seçenekleri seçin',
        description:
          'PNG, JPG veya WebP çıktısı seçin, gerekiyorsa kayıplı kaliteyi ayarlayın ve saydam görselleri JPG formatına çevirirken arka plan dolgu rengi belirleyin.',
      },
      {
        title: 'Bir veya birden fazla görsel seçin',
        description:
          'Her görselin tam yerel çözünürlükte temiz şekilde işlenmesi için tek dosya veya çok dosyalı bir toplu iş yükleyin.',
      },
      {
        title: 'Her dosyanın önizlemesini kontrol edin',
        description:
          'Herhangi bir şey indirmeden önce dönüştürülen her görselin boyutlarını ve tahmini dosya boyutunu inceleyin.',
      },
      {
        title: 'Toplu işi dönüştürün',
        description:
          'Araç, her görseli seçtiğiniz formatta tam yerel çözünürlükte doğrudan tarayıcınızda işler.',
      },
      {
        title: 'Dönüştürülen dosyaları indirin',
        description:
          'Her dosyanın boyutlarını ve yeni bayt boyutunu karşılaştırın, ardından dönüştürülen görselleri tek tek indirin.',
      },
      {
        title: 'İpucu: Saydam alanlar siyah mı oldu?',
        description:
          'PNG dosyasını JPG formatına çevirdiğinizde saydam yerler siyah görünüyorsa beyaz ya da marka renginiz gibi bir dolgu rengiyle yeniden dönüştürün.',
      },
    ],
    examples: [
      {
        title: 'Saydam SVG/PNG logoyu JPG için marka lacivertine düzleştirme',
        input: 'Saydam logo.png · Hedef: JPG (%90) · Dolgu: #FFFFFF',
        output: 'Siyah saydamlık izi olmadan temiz beyaz arka planlı logo.jpg',
        explanation: 'Çizimden önce Canvas dolgusunu açıkça doldurmak, alfa PNG dosyalarını JPEG formatına çevirirken siyah hâle oluşmasını engeller.',
      },
      {
        title: 'İndirilen WebP dosyalarını PNG formatına çevirme',
        input: '3 WebP görseli · Hedef: PNG',
        output: 'Eski yazılımlarda da açılan 3 PNG dosyası',
        explanation: 'Bazı eski uygulamalar ve yükleme formları WebP kabul etmez; bu nedenle PNG formatına çevirmek evrensel uyumluluğu geri getirir.',
      },
    ],
    benefits: [
      'Sunucu kuyruğu olmadan birden fazla görseli tam çözünürlükte toplu işler',
      'Ayarlanabilir JPEG arka plan dolgu rengi, çirkin siyah saydam dolgulardan korur',
      'İndirilen WebP dosyalarını evrensel olarak kabul edilen PNG veya JPG dosyalarına geri çevirir',
      'Vektör SVG dosyalarını doğrudan keskin raster PNG veya WebP görsellere işler',
    ],
    useCases: [
      'İndirilen .webp dosyalarını eski yazılımlar için .png veya .jpg formatına çevirme',
      'Statik web siteleri ve CDN için modern .webp dosyalarını toplu üretme',
      'Slayt veya sosyal medya gönderileri için SVG marka simgelerinden keskin PNG dışa aktarma',
      'PNG, JPG ve WebP arasındaki format boyutu farkını yan yana kontrol etme',
    ],
    faqs: [
      {
        question: 'Bu araç Apple HEIC fotoğraflarını dönüştürebilir mi?',
        answer:
          'HEIC kod çözme, tarayıcı desteğine bağlıdır (Safari HEIC formatını yerel olarak desteklerken Chrome ve Firefox genellikle PNG, JPG, WebP, SVG veya GIF girdisi ister).',
      },
      {
        question: 'JPG dosyasını PNG formatına çevirmek kaybolan fotoğraf detayını geri getirir mi?',
        answer:
          'Hayır. Önceden sıkıştırılmış bir JPG dosyasını PNG formatına çevirmek, ileriye dönük olarak kayıpsız kalmasını sağlar; ancak önceki JPEG sıkıştırma izlerini geri getiremez.',
      },
      {
        question: 'Dosya sınırı uygulanıyor mu?',
        answer:
          'Evet, her dosya 25 MB veya daha küçük olmalıdır. Tüm kodlama yine tarayıcınızda yerel olarak yapılır; bu nedenle dosya başına bu sınır içinde yalnızca cihazınızın RAM değeri geçerlidir.',
      },
      {
        question: 'Görsel Format Dönüştürücü ücretsiz mi?',
        answer:
          'Evet, ücretsizdir — hesap gerekmez, filigran yoktur ve dönüştürme sayısında sınır yoktur.',
      },
      {
        question: 'Hangi formatlardan hangi formatlara dönüştürebilirim?',
        answer:
          'PNG, JPG, WebP, GIF ve SVG dosyalarını PNG, JPG veya WebP çıktısına dönüştürebilirsiniz.',
      },
      {
        question: 'PNG dosyasını neden WebP formatına çevirmeliyim?',
        answer:
          'WebP dosyaları, benzer görsel kalitede PNG dosyalarından genellikle çok daha küçüktür; bu da web sayfalarının daha hızlı yüklenmesini sağlar.',
      },
      {
        question: 'WebP dosyasını neden JPG veya PNG formatına çevirmeliyim?',
        answer:
          'Bazı eski uygulamalar, yazıcılar ve yükleme formları WebP kabul etmez; bu nedenle JPG veya PNG formatına geri çevirmek evrensel uyumluluk sağlar.',
      },
      {
        question: 'Birden fazla görseli aynı anda dönüştürebilir miyim?',
        answer:
          'Evet, bir grup görseli yükleyip hepsini tek seferde aynı hedef formata dönüştürebilirsiniz.',
      },
      {
        question: 'JPG formatına çevirmek saydamlığı kaldırır mı?',
        answer:
          'Evet, JPG alfa kanalı içermez; bu nedenle saydam alanlar beyaz gibi seçtiğiniz dolgu rengiyle doldurulur.',
      },
      {
        question: 'Saydam PNG dosyasını JPG formatına çevirirken hangi dolgu rengini kullanmalıyım?',
        answer:
          'Beyaz en güvenli varsayılan değerdir. Kusursuz bir görünüm için web sitenizin veya slaydınızın arka plan rengiyle eşleştirin.',
      },
      {
        question: 'Bir fotoğrafı WebP formatına çevirip kalitesini koruyabilir miyim?',
        answer:
          'Evet, %85–90 kalitede WebP genellikle orijinal JPG ile aynı görünürken belirgin ölçüde daha küçük bir dosya üretir.',
      },
      {
        question: 'SVG logoyu PNG formatına dönüştürebilir miyim?',
        answer:
          'Evet, araç SVG dosyalarını yerel boyutlarında keskin PNG veya WebP görsellere rasterleştirir.',
      },
      {
        question: 'Görsel Format Dönüştürücü görsellerimi yüklüyor mu?',
        answer:
          'Hayır, her dönüştürme tarayıcınızda yerel olarak çalışır ve dosyalarınız cihazınızdan asla ayrılmaz.',
      },
      {
        question: 'JPG formatına çevirirken hangi kaliteyi kullanmalıyım?',
        answer:
          '%85–90 kalite, fotoğrafların temiz görünmesini sağlarken PNG dosyalarından çok daha küçük kalır. Daha küçük dosyalar için değeri düşürün.',
      },
      {
        question: 'Bu araçla animasyonlu GIF dönüştürebilir miyim?',
        answer:
          'GIF dosyaları yüklenebilir; ancak dönüştürme, animasyonu korumak yerine tek bir durağan kare işler.',
      },
      {
        question: 'Dönüştürülen PNG dosyam orijinal JPG dosyasından neden daha büyük?',
        answer:
          'PNG kayıpsızdır; bu nedenle sıkıştırılmış JPG dosyasından dönüştürülen fotoğraf, her pikseli sıkıştırmadan depolar ve genellikle büyür.',
      },
      {
        question: 'Dönüştürücü orijinal görsel boyutlarını korur mu?',
        answer:
          'Evet, dönüştürülen görseller, Görsel Boyutlandırıcı ile ayrıca yeniden boyutlandırmadığınız sürece tam yerel çözünürlüklerini korur.',
      },
      {
        question: 'Görsel Format Dönüştürücüyü telefonumda kullanabilir miyim?',
        answer:
          'Evet, mobil tarayıcılarda çalışır. Cihazınızdan görseller seçin ve dönüştürülen dosyaları indirin.',
      },
      {
        question: 'Web sitesi görselleri için en iyi format hangisidir?',
        answer:
          'Web üzerinde fotoğraf ve grafikler için WebP genellikle en iyisidir; saydamlık veya kayıpsız kalite gerekiyorsa PNG daha iyidir.',
      },
      {
        question: 'Dönüştürülen görsellerde filigran var mı?',
        answer:
          'Hayır, dönüştürülen dosyalar filigran veya marka eklenmemiş temiz kopyalardır.',
      },
    ],
  },
  'image-rotate-flip': {
    instructions: [
      {
        title: 'Görsel yükleyin',
        description:
          'Etkileşimli Canvas önizlemesine yüklemek için PNG, JPG, WebP veya GIF formatında bir görsel seçin.',
      },
      {
        title: 'Döndürün, çevirin veya filtre uygulayın',
        description:
          'Sola Döndür / Sağa Döndür düğmelerini, Yatay / Dikey Çevirme düğmelerini, Gri Tonlama anahtarını ve Parlaklık / Kontrast kaydırıcılarını kullanın.',
      },
      {
        title: 'Sonucu canlı önizleyin',
        description:
          'Yönün ve filtre gücünün doğru göründüğünü onaylamak için her değişiklikten sonra Canvas önizlemesini kontrol edin.',
      },
      {
        title: 'Gerekirse sıfırlayın',
        description:
          'Tüm döndürme, çevirme ve filtre değişikliklerini geri almak ve orijinalden yeniden başlamak için Sıfırla düğmesini kullanın.',
      },
      {
        title: 'Çıktı formatı seçin',
        description:
          'Dışa aktarmadan önce saydamlık için PNG, fotoğraflar için JPG veya daha küçük dosyalar için WebP seçin.',
      },
      {
        title: 'Düzenlenen görseli dışa aktarın',
        description:
          'Döndürülmüş, çevrilmiş veya filtre uygulanmış görseli cihazınıza kaydetmek için İndir düğmesine basın.',
      },
    ],
    examples: [
      {
        title: 'Yan çekilmiş akıllı telefon fotoğrafını düzeltme ve parlaklığı artırma',
        input: '3024×4032 fotoğraf 90° saat yönünde döndürüldü · Parlaklık: %110 · Kontrast: %105',
        output: 'EXIF yönü piksellere işlenmiş, temiz şekilde dışa aktarılmış 4032×3024 dik görsel',
        explanation: 'Canvas, 90° ve 270° dönüşlerde genişlik ile yüksekliği otomatik olarak değiştirir.',
      },
      {
        title: 'Aynalanmış özçekimi düzeltme',
        input: 'Aynalanmış özçekim · Yatay Çevirme: Açık',
        output: 'Metin ve yüz doğru yönde görünen görsel',
        explanation: 'Yatay Çevirme, görseli soldan sağa aynalar; böylece ters özçekim düzelir.',
      },
    ],
    benefits: [
      'Canlı piksel önizlemesi, yükleme gecikmesi olmadan anında güncellenir',
      'Yönü kırılgan EXIF işaretleri yerine gerçek piksel koordinatlarına temiz şekilde işler',
      'Döndürme, aynalama ve renk/ton ayarlarını tek temiz çalışma alanında birleştirir',
      'Yıkıcı olmayan Sıfırla düğmesi, varsayılanları istediğiniz zaman geri getirir',
    ],
    useCases: [
      'Yan çekilmiş taranmış belge veya fişleri düzeltme',
      'Ters web kamerası görüntülerini veya çevrilmiş ekran görüntülerini aynadan çıkarma',
      'Baskı veya dokümantasyon için yüksek kontrastlı gri tonlamalı grafikler oluşturma',
      'Listelemeden önce az ışıklı ürün fotoğraflarını hızlıca aydınlatma',
    ],
    faqs: [
      {
        question: 'Görseli döndürmek pikselleri yeniden kodlar mı?',
        answer:
          'Evet. HTML5 Canvas üzerine çizmek, yeni yönü ve filtre ayarlarını her piksele kalıcı olarak işler; böylece tüm uygulamalar görseli dik gösterir.',
      },
      {
        question: 'Döndürürken veya çevirirken saydam arka planı koruyabilir miyim?',
        answer:
          'Evet — döndürülmüş veya çevrilmiş grafiklerin çevresinde tam alfa saydamlığını korumak için Çıktı Formatını PNG veya WebP olarak bırakın.',
      },
      {
        question: 'Düzenlemeler sunucularınızda saklanıyor mu?',
        answer:
          'Hayır. Her şey kendi tarayıcı sekmenizde çalışır ve sayfayı kapattığınızda silinir.',
      },
      {
        question: 'Görsel döndürme aracı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez, filigran yoktur ve sınır yoktur.',
      },
      {
        question: 'Bir görseli 90 derece nasıl döndürürüm?',
        answer:
          'Görselinizi yükleyin ve Sağa Döndür veya Sola Döndür düğmesine basın. Her tıklama resmi 90 derece döndürür.',
      },
      {
        question: 'Bir görseli 180 derece döndürebilir miyim?',
        answer:
          'Evet, görseli ters çevirmek için aynı yönde iki kez Döndür düğmesine basın.',
      },
      {
        question: 'Bir görseli yatay olarak nasıl çeviririm?',
        answer:
          'Görseli soldan sağa aynalamak için Yatay Çevirme düğmesini kullanın; bu, aynalanmış özçekimleri düzeltmekte işe yarar.',
      },
      {
        question: 'Görsel çevirmek ile döndürmek arasındaki fark nedir?',
        answer:
          'Döndürmek görseli merkezi etrafında çevirir; çevirmek ise onu aynadaki yansıma gibi aynalar.',
      },
      {
        question: 'Kalite kaybetmeden fotoğraf döndürebilir miyim?',
        answer:
          'Araç görseli Canvas ile yeniden kodlar; bu nedenle PNG olarak dışa aktarmak kayıpsız kalmasını sağlar. JPG dışa aktarma hafif sıkıştırma uygular.',
      },
      {
        question: 'Görsel döndürmek boyutlarını değiştirir mi?',
        answer:
          '90 veya 270 derecelik döndürme genişlik ile yüksekliği değiştirir. 180 derecelik döndürme boyutları aynı bırakır.',
      },
      {
        question: 'Fotoğrafı siyah beyaz yapabilir miyim?',
        answer:
          'Evet, fotoğrafınızı anında siyah beyaza çevirmek için Gri Tonlama anahtarını açın.',
      },
      {
        question: 'Karanlık bir fotoğrafı nasıl aydınlatırım?',
        answer:
          'Parlaklık kaydırıcısını %100 üzerine taşıyın ve görselin soluk görünmemesi için biraz Kontrast ekleyin.',
      },
      {
        question: 'PNG dosyasını döndürüp saydamlığını koruyabilir miyim?',
        answer:
          'Evet, döndürdükten veya çevirdikten sonra saydam alanları korumak için PNG veya WebP olarak dışa aktarın.',
      },
      {
        question: 'Düzenlenen fotoğraflarım bir sunucuya yükleniyor mu?',
        answer:
          'Hayır, tüm döndürme, çevirme ve filtreleme işlemleri tarayıcınızda yerel olarak çalışır ve hiçbir şey yüklenmez.',
      },
      {
        question: 'Telefonumda görsel döndürebilir miyim?',
        answer:
          'Evet, mobil tarayıcılarda çalışır. Yan bir fotoğraf yükleyin, dik olacak şekilde döndürün ve düzeltilmiş sürümü indirin.',
      },
      {
        question: 'Yükledikten sonra fotoğrafım neden yan görünüyor?',
        answer:
          'Bazı telefonlar yönü, her uygulamanın okumadığı bir EXIF işareti olarak saklar. Bu araç doğru yönü piksellere işler; böylece her yerde dik görünür.',
      },
      {
        question: 'Döndürmeyi veya filtreyi geri alabilir miyim?',
        answer:
          'Evet, Sıfırla düğmesi orijinal görseli ve varsayılan filtre ayarlarını istediğiniz zaman geri getirir.',
      },
      {
        question: 'Araç eğri veya yamuk fotoğrafları düzeltir mi?',
        answer:
          '90 derecelik adımlarla döndürür; bu nedenle yan veya ters fotoğraflar düzelir. Küçük eğim düzeltmeleri desteklenmez.',
      },
      {
        question: 'Hangi görsel formatlarını döndürüp çevirebilirim?',
        answer:
          'PNG, JPG, WebP ve GIF görsellerini düzenleyebilir ve PNG, JPG veya WebP olarak dışa aktarabilirsiniz.',
      },
      {
        question: 'Bir görseli tek seferde hem döndürüp hem çevirebilir miyim?',
        answer:
          'Evet, tek bir bitmiş görseli dışa aktarmadan önce döndürmeleri, yatay veya dikey çevirmeleri ve filtreleri birleştirebilirsiniz.',
      },
    ],
  },
  'image-to-base64': {
    instructions: [
      {
        title: 'Kodlama veya Kod Çözme modunu seçin',
        description:
          'Dosya kodlamak için Görsel → Base64 Data URI seçeneğini, yapıştırılan Base64 verilerini görüntülemek için Base64 → Görsel Önizleme seçeneğini kullanın.',
      },
      {
        title: 'Görsel yükleyin veya Base64 metni yapıştırın',
        description:
          'PNG, JPG, WebP, SVG, GIF veya ICO formatında bir dosya seçin (ya da tam bir data:image/... dizesi veya ham Base64 metni yapıştırın).',
      },
      {
        title: 'Boyut karşılaştırmasını kontrol edin',
        description:
          'Gömmeden önce orijinal dosya boyutunu Base64 dize boyutuyla karşılaştırarak yaklaşık %33 oranındaki ek yükü görün.',
      },
      {
        title: 'İhtiyacınız olan çıktı formatını seçin',
        description:
          'Tam Data URI, ham Base64 dizesi, HTML img etiketi veya CSS background-image parçacığı arasından birini seçin.',
      },
      {
        title: 'Parçacığı kopyalayın veya önizlemeyi indirin',
        description:
          'Data URI, ham Base64, HTML img etiketi veya CSS background parçacığını kopyalayın — ya da kodu çözülmüş önizleme görselini indirin.',
      },
      {
        title: 'İpucu: Yapıştırılan Base64 çalışmıyor mu?',
        description:
          'Dizeyi satır sonları olmadan tam olarak yapıştırdığınızdan emin olun ve kod çözücünün formatınız için doğru data:image/... öneki eklediğini kontrol edin.',
      },
    ],
    examples: [
      {
        title: '2 KB boyutundaki SVG onay işaretini CSS içine gömme',
        input: 'check.svg (2.048 bayt)',
        output: 'data:image/svg+xml;base64,... (yaklaşık 2,7 KB) + yapıştırmaya hazır CSS background-image kuralı',
        explanation: 'Küçük arayüz simgeleri ve çevrimdışı tek dosyalık HTML e-postalar için fazladan bir HTTP isteğini ortadan kaldırır.',
      },
      {
        title: 'API yanıtından gelen Base64 verisini çözüp görme',
        input: 'Ham Base64 dizesi (data: öneki olmadan)',
        output: 'PNG görselinin önizlemesi + indirme düğmesi',
        explanation: 'Kod çözücü, ham Base64 verisinin başına otomatik olarak PNG Data URI başlığı ekler; böylece önizleme oluşur.',
      },
    ],
    benefits: [
      'İkili dosya boyutunu yaklaşık %33 oranındaki Base64 dize ek yüküyle anında karşılaştırır',
      'Data URI, ham Base64, HTML img ve CSS background parçacıklarını aynı anda oluşturur',
      'Başlıksız ham Base64 yapıştırırsanız otomatik olarak PNG data URI öneki ekler',
      'Özel dosyaları ve API yanıt bloblarını tarayıcınızda çevrimdışı tutar',
    ],
    useCases: [
      'Küçük simgeleri CSS paketlerine veya kendi kendine yeten HTML raporlarına gömme',
      'JSON API veya webhook yanıtlarından gelen görsel Data URI adreslerini hata ayıklama',
      'İşlemsel HTML e-posta şablonlarına küçük marka rozetleri satır içi ekleme',
      'Tarayıcı Geliştirici Araçlarından kopyalanan kodlanmış görsel verilerini inceleme',
    ],
    faqs: [
      {
        question: 'Normal görsel URL adresleri yerine Base64 görselleri ne zaman kullanmalıyım?',
        answer:
          'Base64 Data URI adreslerini seyrek kullanın — çok küçük simgeler (genellikle 5–10 KB altı) veya tek dosyalık HTML dışa aktarmalar için. Base64, veri boyutunu yaklaşık %33 artırır ve normal URL adresleri gibi sayfalar arasında ayrı ayrı önbelleğe alınamaz.',
      },
      {
        question: 'Kod çözücü, data:image/png;base64, öneki olmayan ham Base64 dizesinin önizlemesini verebilir mi?',
        answer:
          'Evet! Base64 → Görsel Önizleme moduna geçmek, boşlukları otomatik olarak kaldırır ve başlık eksikse standart PNG Data URI başlığını otomatik olarak ekler.',
      },
      {
        question: 'Vektör SVG dosyalarıyla çalışıyor mu?',
        answer:
          'Evet. .svg dosyası yüklemek, HTML ve CSS parçacıklarıyla birlikte geçerli bir data:image/svg+xml;base64,... URI adresi oluşturur.',
      },
      {
        question: 'Görselden Base64 dönüştürücü ücretsiz mi?',
        answer:
          'Evet, ücretsizdir — kayıt gerekmez, filigran yoktur ve kodlayıp çözebileceğiniz görsel sayısında sınır yoktur.',
      },
      {
        question: 'Base64 Data URI nedir?',
        answer:
          'Data URI, bir görseli web sayfası, stil sayfası veya e-posta içine doğrudan metin olarak gömer — data:image/...;base64, ile başlar ve kodlanmış veri devam eder.',
      },
      {
        question: 'Base64 dizesi görselimden neden daha büyük?',
        answer:
          'Base64 kodlama, ikili veriyi metin karakterleriyle gösterir; bu da orijinal dosya boyutuna yaklaşık %33 ek yük ekler.',
      },
      {
        question: 'Base64 kodlama için en uygun görsel boyutu nedir?',
        answer:
          'Base64 görselleri küçük tutun — genellikle simge ve logolar gibi 5–10 KB altı. Daha büyük görseller HTML veya CSS dosyanızı şişirir ve ayrı ayrı önbelleğe alınamaz.',
      },
      {
        question: 'JPG dosyasını Base64 formatına dönüştürebilir miyim?',
        answer:
          'Evet, JPG, PNG, WebP, SVG, GIF ve ICO dosyalarının tamamı Base64 Data URI adreslerine kodlanabilir.',
      },
      {
        question: 'HTML içinde Base64 görseli nasıl kullanırım?',
        answer:
          'Oluşturulan HTML img etiketini kopyalayıp sayfanıza yapıştırın. src özniteliği tam Data URI adresini zaten içerir.',
      },
      {
        question: 'CSS içinde Base64 görseli nasıl kullanırım?',
        answer:
          'CSS background-image parçacığını kopyalayıp stil sayfanıza yapıştırın; böylece ayrı bir dosya isteği olmadan görsel görüntülenir.',
      },
      {
        question: 'Base64 dizesini tekrar görsele çözebilir miyim?',
        answer:
          'Evet, Base64 → Görsel Önizleme moduna geçin, dizeyi yapıştırın; araç görseli oluşturur, böylece önizleyebilir veya indirebilirsiniz.',
      },
      {
        question: 'Kod çözerken data:image/png;base64, önekine ihtiyacım var mı?',
        answer:
          'Hayır, başlıksız ham Base64 yapıştırırsanız araç otomatik olarak standart PNG Data URI öneki ekler.',
      },
      {
        question: 'Görselden Base64 aracı dosyalarımı yüklüyor mu?',
        answer:
          'Hayır, kodlama ve kod çözme tamamen tarayıcınızda çalışır ve görselleriniz cihazınızdan asla ayrılmaz.',
      },
      {
        question: 'SVG dosyasını Base64 formatına kodlayabilir miyim?',
        answer:
          'Evet, SVG dosyaları, eşleşen HTML ve CSS parçacıklarıyla birlikte geçerli bir data:image/svg+xml;base64,... URI adresi üretir.',
      },
      {
        question: 'Ham Base64 ile Data URI arasındaki fark nedir?',
        answer:
          'Ham Base64 yalnızca kodlanmış metindir; Data URI ise önüne data:image/...;base64, başlığı ekler; böylece tarayıcı görsel türünü bilir.',
      },
      {
        question: 'E-postalarda Base64 görsel kullanabilir miyim?',
        answer:
          'Evet, küçük Base64 görselleri kendi kendine yeten HTML e-postalarda iyi çalışır; ancak bazı e-posta istemcileri Data URI desteğini sınırlar; bu nedenle göndermeden önce test edin.',
      },
      {
        question: 'Kodlama için dosya boyutu sınırı var mı?',
        answer:
          'Hiçbir şey yüklenmediği için sunucu sınırı yoktur. Çok büyük görseller yalnızca tarayıcı belleğinizle sınırlıdır ve çok büyük Base64 dizelerini yapıştırmak pratik değildir.',
      },
      {
        question: 'Base64 görseli indirilebilir bir dosyaya dönüştürebilir miyim?',
        answer:
          'Evet, dizeyi Base64 → Görsel Önizleme modunda çözün ve indirme seçeneğiyle normal bir görsel dosyası olarak kaydedin.',
      },
      {
        question: 'Base64 kodlama görsel kalitesini değiştirir mi?',
        answer:
          'Hayır, Base64 aynı baytların kayıpsız metin temsilidir; bu nedenle kodu çözülen görsel orijinaliyle aynıdır.',
      },
      {
        question: 'Görselden Base64 dönüştürücüyü telefonumda kullanabilir miyim?',
        answer:
          'Evet, mobil tarayıcılarda çalışır. Fotoğraf kitaplığınızdan bir görsel kodlayın veya Base64 dizesi yapıştırıp önizleyin.',
      },
    ],
  },
  'color-contrast-checker': {
    instructions: [
      {
        title: 'Ön Plan ve Arka Plan renklerini seçin',
        description:
          'Renk seçicileri, HEX girişlerini veya ayrı R/G/B girişlerini kullanın — ya da erişilebilir hazır ayarlardan başlayıp tek tıkla renkleri değiştirin.',
      },
      {
        title: 'Oran geçene kadar tonları ayarlayın',
        description:
          'Açıklığı veya ayrı RGB kanallarını azar azar değiştirin ve oran değerini canlı izleyin; eşleşmeniz ihtiyaç duyduğunuz AA veya AAA eşiğine ulaşana kadar devam edin.',
      },
      {
        title: 'WCAG 2.1 puan kartını inceleyin',
        description:
          'Tam kontrast oranını (örneğin 12,63 : 1) ve AA Normal, AA Büyük / Arayüz, AAA Normal ile AAA Büyük ölçütlerinde anlık GEÇTİ / KALDI durumunu kontrol edin.',
      },
      {
        title: 'Eşleşmeyi gerçek arayüz metninde önizleyin',
        description:
          'Canlı tipografi ve kenarlıklı arayüz denetim kartı önizlemelerini okuyarak renklerinizin gövde metni, başlık ve düğme olarak gerçekte nasıl göründüğünü görün.',
      },
      {
        title: 'Görselden renk örnekleri çıkarın (isteğe bağlı)',
        description:
          'Altta herhangi bir ekran görüntüsü veya marka logosu yükleyerek 8 adede kadar farklı baskın renk çıkarın ve bunları doğrudan Ön Plan veya Arka Plan alanına uygulayın.',
      },
      {
        title: 'Renkleri kopyalayın ve kalan eşleşmeleri düzeltin',
        description:
          'Senkronize HEX, RGB veya HSL değerlerini CSS dosyanıza kopyalayın. Bir eşleşme kalırsa metni koyulaştırın veya arka planı açın; puan kartı yeşile dönene kadar devam edin.',
      },
    ],
    examples: [
      {
        title: 'Birincil harekete geçirici düğmenin okunabilirliğini denetleme',
        input: 'Ön Plan: #FFFFFF · Arka Plan: #4F46E5',
        output: 'Kontrast Oranı 6,29 : 1 — WCAG AA Normal, AA Büyük ve AAA Büyük ölçütlerinden geçti',
        explanation: 'Resmî sRGB gama doğrusallaştırılmış göreli parlaklık formülünü kullanır (0,2126R + 0,7152G + 0,0722B).',
      },
      {
        title: 'Beyaz arka plan üzerindeki açık gri metni kontrol etme',
        input: 'Ön Plan: #9CA3AF · Arka Plan: #FFFFFF',
        output: 'Kontrast Oranı 2,22 : 1 — AA Normal kaldı, AA Büyük de kaldı',
        explanation: 'Açık gri, gövde metni için çok düşük kontrast verir — metnin koyulaştırılması gerekir.',
      },
    ],
    benefits: [
      'Tam WCAG 2.1 sRGB göreli parlaklık formülü — tahmin yok',
      'Etkin eşleşmenin canlı tipografi ve kenarlıklı arayüz denetim kartı önizlemesini gösterir',
      'Yerleşik Canvas görsel renk niceleyici, ek araç olmadan marka renk örnekleri çıkarır',
      'CSS dosyasına yapıştırmaya hazır senkronize HEX, RGB ve HSL dizelerini gösterir',
    ],
    useCases: [
      'Tasarım sistemlerini, SaaS panolarını ve koyu mod temalarını WCAG AA/AAA uyumluluğu için denetleme',
      'Müşteri logolarından baskın marka renklerini çekip doğrudan erişilebilir arayüz paletlerine aktarma',
      'Lansman öncesi düşük kontrastlı rozet, yer tutucu veya düğme etiketi eşleşmelerini düzeltme',
      'Canlı büyük ve normal metin önizlemeleriyle erişilebilir görsel hiyerarşiyi öğretme',
    ],
    faqs: [
      {
        question: 'WCAG AA düzeyi ile AAA düzeyi için hangi kontrast oranı gerekir?',
        answer:
          'WCAG 2.1 AA düzeyi, normal gövde metni için en az 4,5:1, büyük metin (18 pt ve üzeri veya kalın 14 pt ve üzeri) ile arayüz bileşenleri için 3,0:1 ister. AAA düzeyi bu eşikleri normal metin için 7,0:1 ve büyük metin için 4,5:1 seviyesine çıkarır.',
      },
      {
        question: 'Görsel palet çıkarıcı nasıl çalışır?',
        answer:
          'Yüklediğiniz görseli ekran dışı bir HTML5 Canvas üzerine çizer, saydam pikselleri yok sayar, yakın RGB gruplarını kümeler ve kapsanan alana göre 8 adede kadar görsel olarak farklı baskın renk örneği gösterir.',
      },
      {
        question: 'Renk Kontrast Denetleyicisi HEX, RGB ve HSL arasında da dönüşüm yapar mı?',
        answer:
          'Evet. Herhangi bir renk seçici, HEX girişi veya R/G/B alanı güncellendiğinde HEX, rgb() ve hsl() gösterimleri otomatik olarak yeniden hesaplanır.',
      },
      {
        question: 'WCAG kontrast kurallarına göre büyük metin nedir?',
        answer:
          'Büyük metin, 18 pt (24 px) veya daha büyük ya da 14 pt (18,66 px) kalın veya daha büyük metindir. Büyük metin için AA düzeyinde yalnızca 3,0:1, AAA düzeyinde 4,5:1 gerekirken normal metin için AA düzeyinde 4,5:1 ve AAA düzeyinde 7,0:1 gerekir.',
      },
      {
        question: 'Renk Kontrast Denetleyicisi ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez. Tüm kontroller tarayıcınızda yerel olarak çalışır; bu nedenle istediğiniz kadar renk eşleşmesi test edebilirsiniz.',
      },
      {
        question: 'Yüklediğim görseller cihazımdan ayrılıyor mu?',
        answer:
          'Hayır. Palet çıkarma tamamen tarayıcınızda ekran dışı Canvas ile yapılır ve görselleriniz hiçbir sunucuya yüklenmez.',
      },
      {
        question: 'Kontrast oranı nasıl hesaplanır?',
        answer:
          'Resmî WCAG 2.1 formülünü kullanır: her rengin göreli parlaklığı gama doğrusallaştırılmış sRGB değerlerinden hesaplanır ve oran (L1 + 0,05) / (L2 + 0,05) olur; burada L1 daha açık renktir.',
      },
      {
        question: 'Koyu mod tasarımların kontrastını kontrol edebilir miyim?',
        answer:
          'Evet. Koyu arka plan ve açık metin renklerinizi aynı şekilde girin; puan kartı eşleşmenin normal ve büyük metin için AA ile AAA ölçütlerinden geçip geçmediğini gösterir.',
      },
      {
        question: 'Renk eşleşmem bana okunabilir görünmesine rağmen neden AA düzeyinde kalıyor?',
        answer:
          'Algılanan okunabilirlik ile ölçülen parlaklık kontrastı farklı şeylerdir. Size farklı görünen renkler, parlaklık açısından yine de yakın olabilir — özellikle orta tonlu renklerde — bu nedenle orana güvenin ve geçene kadar açıklığı ayarlayın.',
      },
      {
        question: 'Marka rengim kontrast testinde kalırsa ne yapmalıyım?',
        answer:
          'Marka rengini büyük başlıklar veya süs öğeleri için saklayın ve gövde metni için daha koyu bir tonunu kullanın. Arka planı da açabilir veya metnin arkasına yarı saydam bir katman ekleyebilirsiniz.',
      },
      {
        question: 'Denetleyici, düğme ve simge gibi arayüz bileşenleri için çalışır mı?',
        answer:
          'Evet. WCAG 2.1, düğme kenarları, giriş çerçeveleri ve anlam taşıyan simgeler gibi metin dışı arayüz bileşenleri için 3,0:1 oran ister ve puan kartındaki AA Büyük / Arayüz sütunu tam olarak bunu kapsar.',
      },
      {
        question: 'Bu araçla yer tutucu metni ve devre dışı durumları test edebilir miyim?',
        answer:
          'Evet, yer tutucu veya devre dışı durum rengini ön plan olarak girin. Devre dışı denetimlerin WCAG kontrast gerekliliklerinden muaf olduğunu, ancak bilgi veren yer tutucu metnin muaf olmadığını unutmayın.',
      },
      {
        question: 'Palet çıkarıcı bir görselden kaç renk çıkarabilir?',
        answer:
          '8 adede kadar farklı baskın renk. Benzer tonlar birlikte kümelenir; bu nedenle renk örnekleri, görseldeki her ton yerine en belirgin renkleri temsil eder.',
      },
      {
        question: 'Çıkarılan renk örneğini doğrudan ön plan veya arka plan olarak uygulayabilir miyim?',
        answer:
          'Evet. Çıkarılan her renk örneğinin, onu doğrudan Ön Plan veya Arka Plan alanına gönderen bir düğmesi vardır; böylece diğer renkle hemen test edebilirsiniz.',
      },
      {
        question: 'Palet çıkarıcıyla hangi görsel formatları çalışır?',
        answer:
          'Tarayıcınızın gösterebildiği her görsel — PNG, JPG, WebP ve SVG ekran görüntüleri veya logolar dahil. Renkleri kümelerken saydam pikseller yok sayılır.',
      },
      {
        question: 'Renk Kontrast Denetleyicisi renk körlüğünü test eder mi?',
        answer:
          'Hayır, yalnızca parlaklık kontrastını ölçer. Kontrast, erişilebilirliğin bir parçasıdır; renk körlüğü güvenliği için anlamı yalnızca renge dayandırmayın ve paletinizi renk körlüğü simülatörüyle de kontrol edin.',
      },
      {
        question: 'HEX, RGB ve HSL değerlerini CSS dosyamda kullanabilir miyim?',
        answer:
          'Evet. Üç format da düzenledikçe senkron kalır ve herhangi birini doğrudan stil sayfanıza, tasarım belirteçlerinize veya Tailwind yapılandırmanıza kopyalayabilirsiniz.',
      },
      {
        question: 'AA ile AAA arasındaki pratik fark nedir?',
        answer:
          'AA, çoğu sitenin hedeflediği yasal ve pratik standarttır; AAA daha katıdır ve marka renkli gövde metni için çoğu zaman karşılanması zordur. Mümkünse AAA hedefleyin, ancak metin için asla AA altına düşmeyin.',
      },
      {
        question: 'Araç renk seçimlerimi veya görsellerimi saklıyor mu?',
        answer:
          'Hayır. Her şey tarayıcı sekmenizde yerel olarak çalışır, hiçbir şey yüklenmez ve sayfayı kapattığınızda veya yenilediğinizde renkleriniz ile görselleriniz kaybolur.',
      },
      {
        question: 'Bir seferde birden fazla renk eşleşmesi kontrol edebilir miyim?',
        answer:
          'Denetleyici bir seferde bir ön plan / arka plan eşleşmesi test eder; ancak tek tıkla renk değiştirip istediğiniz kadar eşleşmeyi saniyeler içinde yeniden test edebilirsiniz.',
      },
    ],
  },
  'qr-code-scanner': {
    instructions: [
      {
        title: 'QR görseli yükleyin veya kamera taramasını açın',
        description:
          'PNG, JPG, WebP veya SVG formatında bir QR ekran görüntüsü bırakın ya da seçin — ya da basılı bir QR kodu canlı okumak için Kamera Taramasını Başlat düğmesine basın.',
      },
      {
        title: 'Tarayıcının kodu çözmesine izin verin',
        description:
          'Araç, çok ölçekli ve ters çevirmeye duyarlı kod çözmeyi tarayıcınızda yerel olarak çalıştırır; bu nedenle koyu mod veya ters çevrilmiş QR kodları da yükleme olmadan okunur.',
      },
      {
        title: 'Çözülen metni inceleyin ve kopyalayın',
        description:
          'Çözülen veriyi, kategorisini ve güvenli bağlantı önizlemesini inceleyin (yalnızca http/https URL adresleri tıklanabilir bağlantı olur), ardından tek tıkla kopyalayın.',
      },
      {
        title: 'İşlem yapmadan önce veri türünü kontrol edin',
        description:
          'QR kodunun URL, Wi-Fi bilgisi, vCard kişisi veya düz metin içerip içermediğini görün ve ziyaret etmeden ya da bağlanmadan önce hedefin doğru göründüğünü doğrulayın.',
      },
      {
        title: 'vCard Kişi QR Oluşturucuya geçin (isteğe bağlı)',
        description:
          'Ad, kuruluş, telefon, e-posta ve web sitesi bilgilerini içeren taranabilir bir VCF 3.0 kartvizit QR kodu oluşturun ve PNG veya SVG olarak indirin.',
      },
      {
        title: 'İndirin, yazdırın veya başarısız taramayı düzeltin',
        description:
          'vCard QR kodunuzu indirin ya da kod çözme başarısız olursa daha keskin ve iyi ışıklı bir ekran görüntüsünü yeniden yükleyin — kırpılmış, bulanık veya çok küçük QR kodları en yaygın nedendir.',
      },
    ],
    examples: [
      {
        title: 'Baskı siparişi vermeden önce pazarlama broşürünün ekran görüntüsünü doğrulama',
        input: 'flyer-qr.png yükleyin (600×600 PNG)',
        output: 'Çözülen Veri · Web sitesi URL adresi: https://example.com/?utm_source=print',
        explanation: 'Çok ölçekli ve ters çevirmeye duyarlı kod çözme yerel olarak çalışır; bu nedenle ters koyu mod QR kodları da güvenilir şekilde çözülür.',
      },
      {
        title: 'Özgeçmiş için vCard QR kodu oluşturma',
        input: 'Ad: Bilal Asghar · Telefon: +971 50 123 4567 · E-posta: bilal@example.com',
        output: 'PNG ve SVG olarak indirilebilen VCF 3.0 vCard QR kodu',
        explanation: 'iPhone ve Android, standart VCF 3.0 vCard QR kodlarını tanır ve tarandığında kişiyi kaydetme seçeneği sunar.',
      },
    ],
    benefits: [
      'Mobil uygulama olmadan normal ve renkleri ters çevrilmiş QR ekran görüntülerini temiz şekilde çözer',
      'İsteğe bağlı kamera akışı, kod çözüldüğünde veya sekmeden ayrıldığınızda hemen durur',
      'Çözülen verileri otomatik olarak yönlendirmeden temiz şekilde sınıflandırır',
      'Dijital kartvizitler için tam vCard 3.0 PNG ve SVG QR oluşturma sunar',
    ],
    useCases: [
      'Poster basmadan önce QR dosyalarındaki UTM hedef URL adreslerini yeniden kontrol etme',
      'Masaüstü ekran görüntülerinden Wi-Fi dizelerini veya metin belirteçlerini çıkarma',
      'Dizüstü bilgisayarın yerleşik web kamerasıyla fiziksel QR kodları tarama',
      'Özgeçmiş, rozet ve sunumlar için taranabilir vCard kişi QR kodları oluşturma',
    ],
    faqs: [
      {
        question: 'Cihazımda kamera yoksa veya kamera izni verilmezse ne olur?',
        answer:
          'Bu araç için kameraya asla ihtiyacınız yoktur — ekran görüntüsü veya fotoğraf çekip QR Kod Görseli Yükle seçeneğiyle yüklemeniz yeterlidir; bu, kamera izni olmadan aynı şekilde çalışır.',
      },
      {
        question: 'QR kodu taramak tehlikeli web sitelerini otomatik olarak açar mı?',
        answer:
          'Hayır. Çözülen metin önce yalnızca okunabilir bir metin alanında gösterilir; böylece ziyaret edip etmeyeceğinize karar vermeden önce herhangi bir URL adresini inceleyebilirsiniz.',
      },
      {
        question: 'vCard yerine URL, Wi-Fi veya özel renkli bir QR oluşturucu mu istiyorsunuz?',
        answer:
          'Sosyal Medya Araçları bölümündeki özel QR Kod Oluşturucu aracımızı deneyin — özel ön plan/arka plan renkleri, hata düzeltme düzeyleri ve URL/metin QR kodları için.',
      },
      {
        question: 'QR Kod Tarayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez ve tarama ile vCard QR oluşturma işlemlerinin ikisi de tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: 'Yüklediğim QR görselleri bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Kod çözme tamamen tarayıcınızda jsQR ile yapılır; bu nedenle ekran görüntüleriniz ve fotoğraflarınız cihazınızdan asla ayrılmaz.',
      },
      {
        question: 'QR Kod Tarayıcı hangi görsel formatlarını okuyabilir?',
        answer:
          'PNG, JPG, WebP ve SVG görsellerinin tamamı çalışır. Telefon veya bilgisayarda çekilen ekran görüntüleri, QR kodu sağlamanın en yaygın yoludur.',
      },
      {
        question: 'QR kodum neden taranamadı?',
        answer:
          'Yaygın nedenler: bulanık veya düşük çözünürlüklü görsel, çok sıkı kırpılmış QR kodu, basılı kod üzerindeki parlama veya çerçevede çok küçük kalan kod. Daha keskin, daha büyük ve iyi ışıklı bir görüntüyü yeniden yükleyin.',
      },
      {
        question: 'Tarayıcı ters çevrilmiş veya koyu mod QR kodlarını okuyabilir mi?',
        answer:
          'Evet. Kod çözücü ters çevirmeye duyarlıdır; bu nedenle koyu arka plan üzerinde açık modüller içeren QR kodları, standart siyah beyaz kodlar kadar güvenilir çözülür.',
      },
      {
        question: 'Hangi QR veri türlerini algılayabilir?',
        answer:
          'Çözülen içeriği web sitesi URL adresleri, Wi-Fi ağ kimlik bilgileri, vCard kişileri ve düz metin dahil olmak üzere otomatik olarak sınıflandırır; böylece kod üzerinde işlem yapmadan önce ne yaptığını bilirsiniz.',
      },
      {
        question: 'Herkese açık bir yerde bulduğum QR kodunu taramak güvenli mi?',
        answer:
          'Burada taramak güvenlidir, çünkü hiçbir şey otomatik olarak açılmaz — önce çözülen metni görürsünüz. URL adresini her zaman dikkatle okuyun ve rastgele bir QR kodunun yönlendirdiği sayfalara şifre veya ödeme bilgisi girmeyin.',
      },
      {
        question: 'Dizüstü bilgisayar web kameramla QR kodu tarayabilir miyim?',
        answer:
          'Evet. Kamera Taramasını Başlat düğmesine basın, tarayıcınız sorduğunda kamera erişimine izin verin ve basılı kodu kameranın önünde tutun. Kod çözüldüğünde veya sekmeden ayrıldığınızda akış otomatik olarak durur.',
      },
      {
        question: 'Taramadan sonra kamera kayda devam ediyor mu?',
        answer:
          'Hayır. Başarılı kod çözme gerçekleştiğinde kamera akışı hemen durur; sekme değiştirdiğinizde veya tarayıcıyı kapattığınızda da durur.',
      },
      {
        question: 'vCard QR kodu nedir?',
        answer:
          'vCard QR kodu, kişi bilgilerini — ad, kuruluş, telefon, e-posta ve web sitesi — standart VCF 3.0 formatında saklar; bu nedenle telefonla tarandığında kişiyi doğrudan kaydetme seçeneği sunar.',
      },
      {
        question: 'vCard QR kodumu PNG ve SVG olarak indirebilir miyim?',
        answer:
          'Evet. vCard oluşturucu her iki formatı da dışa aktarır: belgeler ve sunumlar için PNG, her boyutta keskin baskı için SVG.',
      },
      {
        question: 'vCard QR kodu hem iPhone hem Android üzerinde çalışır mı?',
        answer:
          'Evet. Her iki platform da standart VCF 3.0 vCard QR kodlarını tanır ve yerleşik kamerayla tarandığında kişiyi ekleme seçeneği sunar.',
      },
      {
        question: 'Video veya ekran kaydından QR kodu tarayabilir miyim?',
        answer:
          'Doğrudan değil, ancak videoyu duraklatıp QR kodunu gösteren karenin ekran görüntüsünü alabilir ve bu ekran görüntüsünü tarayıcıya yükleyebilirsiniz.',
      },
      {
        question: 'QR Kod Tarayıcı çevrimdışı çalışır mı?',
        answer:
          'Sayfa yüklendikten sonra kod çözme tamamen tarayıcınızda çalışır, ağ isteği olmadan; bu nedenle internet olmadan da yüklenen görselleri tarayabilirsiniz.',
      },
      {
        question: 'Bir görseldeki birden fazla QR kodunu tarayabilir miyim?',
        answer:
          'Tarayıcı bir seferde bir QR kodu çözer. Görselde birden fazla kod varsa görseli kırpıp her kodu ayrı ayrı yükleyin.',
      },
      {
        question: 'Broşüre QR kodu basmadan önce neyi kontrol etmeliyim?',
        answer:
          'Bitmiş tasarımın ekran görüntüsünü yükleyip burada tarayın; böylece baskı siparişi vermeden önce hedef URL adresinin, UTM parametrelerinin ve verinin tam olarak doğru olduğunu doğrulayabilirsiniz.',
      },
      {
        question: 'Araç taradığım QR kodlarını veya kamera görsellerini saklıyor mu?',
        answer:
          'Hayır. Hiçbir şey yüklenmez, kaydedilmez veya saklanmaz. Çözülen sonuçlar yalnızca mevcut tarayıcı sekmenizde bulunur ve sekmeyi kapattığınızda kaybolur.',
      },
    ],
  },
  'password-generator': {
    instructions: [
      {
        title: 'Rastgele Şifre veya Diceware Parola Cümlesi seçin',
        description:
          'En yüksek karakter seti yoğunluğu için Rastgele Şifre kullanın ya da elle yazması daha kolay, güçlü çok kelimeli entropi için Diceware Parola Cümlesi seçin.',
      },
      {
        title: 'Uzunluğu, karakter setlerini ve toplu adet sayısını ayarlayın',
        description:
          'Uzunluğu (8–64 karakter) değiştirin, Büyük Harf / Küçük Harf / Rakam / Simge seçeneklerini açıp kapatın, isterseniz benzer karakterleri (0/O/1/l/I) dışarıda bırakın ya da 3–8 Diceware kelimesi seçin.',
      },
      {
        title: 'Şifrenizi veya parola cümlenizi oluşturun',
        description:
          'Oluştur düğmesine basın; tarayıcınızın donanım destekli CSPRNG sistemi, reddetme örneklemesiyle yeni çıktı üretir — her karakterin olasılığı tam olarak eşittir.',
      },
      {
        title: 'Entropi puanını kontrol edin',
        description:
          'Kullanmadan önce tam Shannon entropi bit değerine bakın (yaklaşık 72–118+ bit önerilir); böylece sonucun tahmin edilmesinin ne kadar zor olduğunu görürsünüz.',
      },
      {
        title: 'Yeniden oluşturun ve güvenli şekilde kopyalayın',
        description:
          'Sonuçtan memnun değil misiniz? Yeni bir şifre için yeniden oluşturun, ardından tek şifreyi veya tüm toplu işi tek tıkla kopyalayın.',
      },
      {
        title: 'Şifre yöneticinize kaydedin ve yenileyerek temizleyin',
        description:
          'Sonucu hemen şifre yöneticinize yapıştırın. Sayfayı yenilemek, oluşturulan şifreleri bellekten siler; bu nedenle onları hatırlamak için sekmeye asla güvenmeyin.',
      },
    ],
    examples: [
      {
        title: 'Tam karakter havuzuyla 18 karakterli karışık şifre',
        input: 'Uzunluk: 18 · Büyük + Küçük + Rakam + Simge (Havuz: 88 karakter)',
        output: 'Yaklaşık 116,3 bit kriptografik entropi · Etkin her sınıftan en az 1 karakter garantisi',
        explanation: 'Katı tekdüzelik için reddetme örneklemesi kullanır (uint32 örneklerini, floor(2^32 / havuz) * havuz değerinden büyükse atar).',
      },
      {
        title: 'Wi-Fi için 5 kelimelik Diceware parola cümlesi',
        input: 'Mod: Diceware · Kelime: 5',
        output: 'correct horse battery staple benzeri bir cümle — yazması kolay, tahmin etmesi zor',
        explanation: 'Beş veya altı rastgele kelime güçlü entropi verir ve rastgele karakterlerden çok daha kolay yazılır.',
      },
    ],
    benefits: [
      'Güvensiz Math.random() yönteminden kesinlikle kaçınır — donanım tohumlu window.crypto.getRandomValues kullanır',
      'Gerçek reddetme örneklemesi ve tarafsız Fisher-Yates karıştırma ile modulo yanlılığını ortadan kaldırır',
      'Sabit yuvalar olmadan seçilen her karakter sınıfından en az bir karakter garantisi verir',
      'Hiçbir şey kaydedilmez, saklanmaz veya ağ üzerinden iletilmez',
    ],
    useCases: [
      'Bulut hesaplarını, SSH anahtarlarını, veritabanı kimlik bilgilerini ve şifre yöneticisi ana kasalarını güvenceye alma',
      'Disk şifreleme veya Wi-Fi misafir anahtarı için elle yazılabilir Diceware parola cümleleri oluşturma',
      'Kayıt işlemleri için geçici kimlik bilgilerini toplu oluşturma (tek tıkla 10 adede kadar)',
      '12, 18 ve 24 karakterin bit entropisi üzerindeki etkisini karşılaştırma',
    ],
    faqs: [
      {
        question: 'crypto.getRandomValues ile reddetme örneklemesi neden önemlidir?',
        answer:
          'Yalnızca randomUint32 % havuzBoyutu hesaplamak, 2^32 havuz boyutuna eşit bölünmediğinde düşük dizinli karakterlere hafif avantaj sağlar (modulo yanlılığı). Reddetme örneklemesi aralık dışı çekimleri atar; böylece havuzdaki her karakterin matematiksel olasılığı tam olarak eşit olur.',
      },
      {
        question: 'Rastgele şifre mi yoksa parola cümlesi mi kullanmalıyım?',
        answer:
          'İkisi de yeterince uzun olduğunda mükemmeldir: şifre yöneticilerinde 16 ve üzeri karışık karakter her yerde işe yarar; 5–6 kelimelik bir parola cümlesi ise TV, telefon veya disk şifre çözme ekranında elle yazmak için çok daha kolaydır.',
      },
      {
        question: 'Oluşturulan şifreler bir yerde saklanıyor mu?',
        answer:
          'Asla. Şifreler yalnızca sekmenizdeki geçici React belleğinde bulunur ve yenilediğinizde kaybolur.',
      },
      {
        question: 'Şifre Oluşturucu ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez. Tarayıcınızda istediğiniz kadar şifre ve parola cümlesi oluşturabilirsiniz.',
      },
      {
        question: 'Şifreler burada nasıl oluşturuluyor?',
        answer:
          'Tarayıcınızda yerel olarak window.crypto.getRandomValues ile oluşturulur — tarayıcınızın donanım destekli, kriptografik olarak güvenli rastgele sayı üretecidir — ve modulo yanlılığını kaldırmak için reddetme örneklemesi kullanılır.',
      },
      {
        question: 'Oluşturulan şifrelerim bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Oluşturma tamamen cihazınızda gerçekleşir ve hiçbir şey saklanmaz, kaydedilmez veya ağ üzerinden iletilmez.',
      },
      {
        question: 'Şifrem ne kadar uzun olmalı?',
        answer:
          'Önemli hesaplar için karışık karakter sınıflarıyla en az 16 karakter kullanın; bu yaklaşık 100+ bit entropi sağlar. Daha kısa şifreler yalnızca düşük değerli hesaplar için uygundur ve uzunluk, karmaşıklıktan daha önemlidir.',
      },
      {
        question: 'Şifre entropisi nedir ve kaç bit gerekir?',
        answer:
          'Entropi, bir şifreyi tahmin etmenin ne kadar çaba gerektirdiğini gösterir. Çoğu hesap için yaklaşık 70–80 bit güçlüdür; ana şifreler, şifreleme anahtarları ve yüksek değerli hesaplar için 100+ bit önerilir.',
      },
      {
        question: 'Diceware parola cümlesi nedir?',
        answer:
          'Diceware parola cümlesi, sabit bir kelime listesinden seçilen birkaç rastgele kelimedir; örneğin "correct horse battery staple". Beş veya altı rastgele kelime güçlü entropi verirken rastgele karakterlerden yazması ve hatırlaması çok daha kolaydır.',
      },
      {
        question: '0, O, 1, l ve I gibi benzer karakterleri dışarıda bırakmalı mıyım?',
        answer:
          'Evet, şifreyi elle yazacaksanız veya yüksek sesle okuyacaksanız. Benzer karakterleri çıkarmak yanlış yazılan girişleri önler ve yeterince uzun bir şifredeki küçük entropi kaybı önemsizdir.',
      },
      {
        question: 'Bir seferde birden fazla şifre oluşturabilir miyim?',
        answer:
          'Evet. Tek tıkla 10 adede kadar şifreden oluşan bir toplu iş oluşturabilirsiniz; bu, hesap oluştururken veya yeni ekip üyelerini kaydederken işe yarar.',
      },
      {
        question: 'Oluşturucu, seçilen her sınıftan en az bir karakter garantisi veriyor mu?',
        answer:
          'Evet. Oluşturulan her şifre, etkinleştirdiğiniz her karakter sınıfından en az bir karakter içerir ve bu karakterleri sabit, tahmin edilebilir konumlara yerleştirmez.',
      },
      {
        question: 'Bu şifreleri şifre yöneticimin ana şifresi için kullanabilir miyim?',
        answer:
          'Uzun bir parola cümlesi, akıldan yazmanız gerektiği için ana şifre olarak iyi çalışır. 6 kelimelik bir Diceware parola cümlesi oluşturun, ezberleyin ve diğer şifrelerinizi yöneticide saklayın.',
      },
      {
        question: 'Şifreler için Math.random() neden kullanılmamalı?',
        answer:
          'Math.random() kriptografik olarak güvenli değildir: saldırgan iç durumunu öğrenirse çıktısı tahmin edilebilir. Bu araç yalnızca güvenlik açısından kritik rastgelelik için tasarlanmış window.crypto.getRandomValues kullanır.',
      },
      {
        question: 'Oluşturulan şifre her web sitesinde çalışır mı?',
        answer:
          'Neredeyse her zaman. Bir site simgeleri reddeder veya uzunluğu sınırlarsa uzunluğu azaltın ya da simge sınıfını kapatıp site kabul edene kadar yeniden oluşturun.',
      },
      {
        question: 'Oluşturulan şifreyi birden fazla sitede yeniden kullanabilir miyim?',
        answer:
          'Kullanmamalısınız. Şifreyi yeniden kullanmak, bir ihlalin o şifreyi paylaşan her hesabı açması anlamına gelir; bu nedenle her site için benzersiz bir şifre oluşturun ve şifre yöneticisinde saklayın.',
      },
      {
        question: 'Sayfayı yenilersem şifrelerime ne olur?',
        answer:
          'Kaybolurlar. Oluşturulan şifreler yalnızca sekmenin geçici belleğinde bulunur; bu nedenle yenilemeden veya sayfayı kapatmadan önce onları kopyalayın ya da şifre yöneticinize kaydedin.',
      },
      {
        question: 'Şifre Oluşturucu çevrimdışı çalışır mı?',
        answer:
          'Evet. Sayfa yüklendikten sonra oluşturma tamamen tarayıcınızda çalışır, ağ isteği olmadan; bu nedenle çevrimdışı çalışır.',
      },
      {
        question: 'Wi-Fi için şifre mi yoksa parola cümlesi mi seçmeliyim?',
        answer:
          'Birçok cihazda yazdığınız Wi-Fi anahtarları için parola cümlesi kullanın, çünkü kelimeleri doğru yazmak daha kolaydır; şifre yöneticisi sizin için dolduracaksa rastgele karakterli şifre kullanın.',
      },
      {
        question: 'Oluşturulan şifrenin hacklenemeyeceği garanti edilir mi?',
        answer:
          'Hiçbir şifrenin hacklenemeyeceği garanti edilemez — bir site ihlal edilebilir veya kimlik avıyla kandırılabilirsiniz. Ancak şifre yöneticisinde saklanan uzun, benzersiz ve rastgele bir şifre, kullanabileceğiniz en güçlü pratik savunmalardan biridir.',
      },
    ],
  },
  'file-hash-verifier': {
    instructions: [
      {
        title: 'Cihazınızdan bir dosya seçin',
        description:
          'Bir arşiv, yükleyici, PDF veya ikili dosya seçin. Dosya yalnızca yerel tarayıcı belleğinde okunur (500 MB altı önerilir) ve asla yüklenmez.',
      },
      {
        title: 'Özetlerin hesaplanmasını bekleyin',
        description:
          'Tarayıcı, donanım hızlandırmalı Web Crypto ile SHA-256, SHA-512, SHA-384 ve SHA-1 değerlerini aynı anda hesaplar. Büyük dosyalar birkaç saniye sürer.',
      },
      {
        title: 'Hesaplanan kriptografik özetleri inceleyin',
        description:
          'SHA-256, SHA-512, SHA-384 ve eski SHA-1 onaltılık hash değerlerini dosya meta verileriyle birlikte inceleyin ve gerekiyorsa standart .sha256 metin dosyası indirin.',
      },
      {
        title: 'Yayınlanan sağlama toplamıyla doğrulayın',
        description:
          'Tam eşleşmeyi doğrulamak ya da bozulma veya kurcalamayı yakalamak için beklenen SHA-256/512/384/1 dizesini — veya .sha256sum dosyasındaki tam "<hash>  dosyaadı" satırını — yapıştırın.',
      },
      {
        title: 'Hash değerini kopyalayın veya dışa aktarın',
        description:
          'Herhangi bir özeti tek tıkla kopyalayın ya da bir sürümle birlikte göndermek veya doğrulama kaydı olarak saklamak için standart .sha256 metin dosyasını indirin.',
      },
      {
        title: 'Eşleşmezlik veya büyük dosya durumunda ne yapmalı',
        description:
          'Hash değerleri eşleşmezse dosyayı silip resmî kaynaktan yeniden indirin. Yaklaşık 500 MB üzerindeki dosyalar için shasum -a 256 veya certutil kullanın, çünkü tarayıcı dosyanın tamamını belleğe yükler.',
      },
    ],
    examples: [
      {
        title: 'İndirilen sürüm ikili dosyasını satıcının .sha256sum dosyasıyla doğrulama',
        input: 'Dosya: app-v2.tar.gz · Beklenen: "e3b0c442...  app-v2.tar.gz"',
        output: 'Sağlama Toplamı Doğrulandı! Hesaplanan SHA-256 özeti temiz şekilde eşleşiyor.',
        explanation: 'İlk hash belirtecini otomatik olarak çıkarır, büyük/küçük harfi yok sayar ve dört hesaplanan algoritmayla karşılaştırır.',
      },
      {
        title: 'Kendi sürümünüz için .sha256 dosyası oluşturma',
        input: 'Dosya: my-app.zip · Hesaplanan SHA-256: 9f2c...a1',
        output: 'İndirilmeye hazır my-app.zip.sha256 metin dosyası',
        explanation: 'Hash ve dosya adını standart formatta dışa aktarır; böylece kullanıcılar sürümünüzü doğrulayabilir.',
      },
    ],
    benefits: [
      'Yerel C++/donanım hızlandırmalı tarayıcı Web Crypto SubtleCrypto kullanır',
      '.sha256sum sürüm bildirimlerindeki tam "<hash>  dosyaadı" satırını yapıştırmayı destekler',
      'Tek tıkla standart dosyaadı.sha256 doğrulama dosyası dışa aktarır',
      'Dosya yükleme yok — gizli derlemeler ve sözleşmeler özel kalır',
    ],
    useCases: [
      'Terminal açmadan Linux ISO, CLI ikili dosyası veya açık kaynak tarball doğrulama',
      'Yasal veya finansal arşivlerin bayt bayt tam teslimini onaylama',
      'Küçük müşteri teslimatları için .sha256 sürüm bildirimleri oluşturma',
      'Çıkarmadan önce kesilmiş veya bozuk indirmeleri yakalama',
    ],
    faqs: [
      {
        question: 'En yüksek dosya boyutu sınırı var mı?',
        answer:
          'Tarayıcı File.arrayBuffer() ile dosyanın tamamını istemci RAM belleğine bir kerede yüklediği için yaklaşık 300–500 MB boyutuna kadar dosyalar sorunsuz çalışır; çok gigabaytlık ISO dosyaları tarayıcı bellek kotasını aşabilir — çok GB boyutlu dosyalar için yerel CLI araçları (shasum -a 256 veya certutil) önerilir.',
      },
      {
        question: 'SHA-1 neden yalnızca eski uyumluluk için etiketlenmiştir?',
        answer:
          'SHA-1, bilinen pratik çarpışma zayıflıklarına sahiptir ve düşmanca güvenlik garantileri için güvenilmemelidir; mümkün olduğunda SHA-256 veya SHA-512 tercih edin.',
      },
      {
        question: 'İkili dosya yerine ham metin dizesi hashlemek mi istiyorsunuz?',
        answer:
          'Anında UTF-8 metin hashleme için Geliştirici Araçları bölümündeki Hash Oluşturucu aracımıza bakın.',
      },
      {
        question: 'Dosya Hash Doğrulayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez ve istediğiniz kadar dosya doğrulayabilirsiniz.',
      },
      {
        question: 'Doğrularken dosyalarım bir yere yükleniyor mu?',
        answer:
          'Hayır. Hashleme tamamen tarayıcınızda Web Crypto API ile yapılır; bu nedenle dosyalarınız cihazınızdan asla ayrılmaz — gizli derlemeler ve sözleşmeler için güvenli olmasının nedeni tam olarak budur.',
      },
      {
        question: 'Dosya hash değeri nedir ve neden kontrol etmeliyim?',
        answer:
          'Hash, bir dosyanın tam baytlarından hesaplanan sabit uzunluklu bir parmak izidir. Tek bir bayt bile değişirse hash tamamen değişir; bu nedenle hash karşılaştırmak, indirilen dosyanın eksiksiz ve değiştirilmemiş geldiğini kanıtlar.',
      },
      {
        question: 'Hangi hash algoritmasını kullanmalıyım: SHA-256, SHA-512 veya SHA-1?',
        answer:
          'Genel doğrulama için SHA-256 kullanın — yayıncıların sağladığı standart budur. SHA-512 aynı derecede güçlüdür ve 64 bit sistemlerde daha hızlıdır; SHA-1 ise yalnızca eskidir ve güvenlik için güvenilmemelidir.',
      },
      {
        question: 'Karşılaştırma için resmî sağlama toplamını nerede bulabilirim?',
        answer:
          'Yayıncılar genellikle indirme sayfasında veya indirme dosyasının yanındaki .sha256 / .sha256sum dosyasında verir. Her zaman satıcının kendi sitesinden kopyalayın, asla ayna site veya forum gönderisinden almayın.',
      },
      {
        question: 'Hash değerleri eşleşmezse ne yapmalıyım?',
        answer:
          'Dosyayı çalıştırmayın veya çıkarmayın. Silip resmî kaynaktan yeniden indirin; eşleşmezlik, indirmenin bozuk, kesilmiş veya muhtemelen kurcalanmış olduğu anlamına gelir.',
      },
      {
        question: 'Yalnızca hash yerine tam .sha256sum satırını yapıştırabilir miyim?',
        answer:
          'Evet. Doğrulayıcı, sürüm bildirimindeki tam "<hash>  dosyaadı" satırını kabul eder — ilk hash belirtecini otomatik olarak çıkarır, büyük/küçük harfi yok sayar ve dört hesaplanan algoritmayla karşılaştırır.',
      },
      {
        question: 'Hash, dosya adına bağlı mıdır?',
        answer:
          'Hayır. Özet yalnızca dosyanın içeriğinden hesaplanır; bu nedenle dosyanın adını değiştirmek hash değerini asla değiştirmez. Aynı baytlara sahip iki dosya her zaman aynı hash değerini üretir.',
      },
      {
        question: 'Bu araçla Linux ISO veya büyük bir yükleyici doğrulayabilir miyim?',
        answer:
          'Evet, yaklaşık 300–500 MB boyutuna kadar. Çok gigabaytlık ISO dosyaları için macOS/Linux üzerinde shasum -a 256 veya Windows üzerinde certutil -hashfile gibi yerel bir araç kullanın, çünkü tarayıcı dosyanın tamamını belleğe yükler.',
      },
      {
        question: 'SHA-256 ile SHA-512 arasındaki fark nedir?',
        answer:
          'İkisi de SHA-2 ailesinin güvenli üyeleridir; SHA-256 64 karakterlik onaltılık özet, SHA-512 ise 128 karakterlik özet üretir. SHA-512 biraz daha güçlüdür ve 64 bit donanımda daha hızlıdır; ancak SHA-256 daha yaygın yayınlanan sağlama toplamıdır.',
      },
      {
        question: 'Bu araç dosyadaki virüs veya kötü amaçlı yazılımı yakalayabilir mi?',
        answer:
          'Hayır. Eşleşen bir hash yalnızca dosyanın yayıncının yayınladığı dosyayla aynı olduğunu kanıtlar. Yayıncının kendi dosyası kötü amaçlı olsaydı hash yine eşleşirdi; bu nedenle yalnızca güvendiğiniz kaynaklardan indirilen dosyaları doğrulayın.',
      },
      {
        question: 'Kendi sürümüm için .sha256 dosyası nasıl indiririm?',
        answer:
          'Sürüm dosyanızı burada hashleyin, ardından aracın oluşturduğu standart dosyaadı.sha256 metin dosyasını indirip indirme dosyanızın yanında yayınlayın; böylece kullanıcılar doğrulayabilir.',
      },
      {
        question: 'Büyük dosyaların hashlenmesi neden birkaç saniye sürüyor?',
        answer:
          'Tarayıcının dosyanın her baytını okuması ve işlemesi gerekir. Daha büyük dosyalar daha uzun sürer ve süre, seçtiğiniz algoritmadan çok dosya boyutuyla artar.',
      },
      {
        question: 'Dosya Hash Doğrulayıcı çevrimdışı çalışır mı?',
        answer:
          'Evet. Sayfa yüklendikten sonra tüm hashleme tarayıcınızda yerel olarak çalışır, ağ isteği olmadan; bu nedenle internet olmadan da dosya doğrulayabilirsiniz.',
      },
      {
        question: 'Birden fazla dosyayı aynı anda doğrulayabilir miyim?',
        answer:
          'Araç bir seferde bir dosya doğrular. Her dosyayı ayrı ayrı hashleyin ve kendi yayınlanan sağlama toplamıyla karşılaştırın.',
      },
      {
        question: 'Eşleşen hash, dosyanın gerçek olduğunun kanıtı mıdır?',
        answer:
          'Dosyanın, yayıncının hashlediği dosyayla bayt bayt aynı olduğunu kanıtlar. Yayıncının iddia ettiği kişi olduğunu kanıtlamaz; bu nedenle beklenen hash değerini yayıncının resmî kanalından alın.',
      },
      {
        question: 'Araç dosyalarımı veya hash değerlerini saklıyor mu?',
        answer:
          'Hayır. Hiçbir şey yüklenmez veya saklanmaz ve hesaplanan hash değerleri, sekmeyi kapatana veya yenileyene kadar yalnızca mevcut tarayıcı sekmenizde bulunur.',
      },
    ],
  },
  'favicon-generator': {
    instructions: [
      {
        title: 'Monogram Rozeti seçin veya Logo yükleyin',
        description:
          'Özel arka plan/metin renkleriyle 1–3 marka baş harfi girin ya da mevcut PNG/SVG/JPG işaretini merkezden kırpmak için Logo Görseli Yükle seçeneğine geçin.',
      },
      {
        title: 'Simgenizi biçimlendirin',
        description:
          'Monogram harflerinizi ve renklerinizi seçin ya da yüklenen logonun kırpmasını ayarlayın; böylece işaret her tarafta eşit dolguyla ortada oturur.',
      },
      {
        title: 'Köşe şekli seçin',
        description:
          'Yuvarlatılmış Kare (iOS/macOS stili), Daire veya Keskin Kare çerçeveleme arasından birini seçin.',
      },
      {
        title: 'Her boyutu önizleyin',
        description:
          '16×16 ve 32×32 önizlemelerini dikkatle kontrol edin — büyükken iyi görünen bir işaret, sekme boyutunda bulanıklaşabilir; bu nedenle gerekiyorsa harfleri veya detayları sadeleştirin.',
      },
      {
        title: 'favicon.ico, PNG dosyalarını ve HTML parçacığını indirin',
        description:
          'Ayrı PNG boyutlarının yanı sıra çok çerçeveli favicon.ico paketini indirin ve head bağlantı etiketlerini projenize kopyalayın.',
      },
      {
        title: 'Simgeleri yükleyin ve önbelleği temizleyin',
        description:
          'Dosyaları /public/ klasörünüze yerleştirin, bağlantı etiketlerini index.html dosyasına yapıştırın, ardından sert yenileme yapın veya tarayıcı önbelleğini temizleyin — tarayıcılar favicon dosyalarını çok agresif şekilde önbelleğe alır; bu nedenle eski simge görmek genellikle önbellekteki simge anlamına gelir.',
      },
    ],
    examples: [
      {
        title: 'Yeni React veya Cloudflare Pages uygulaması için simge oluşturma',
        input: 'Monogram "UH" · Arka Plan #4F46E5 · Şekil: Yuvarlatılmış Kare',
        output: 'İkili favicon.ico (16+32+48 px PNG çerçeveleri) + 6 PNG boyutu + HTML link parçacığı',
        explanation: 'Uint8Array arabellekleri içinde doğrudan geçerli ICONDIR ve ICONDIRENTRY ikili başlıkları oluşturur.',
      },
      {
        title: 'Kare marka logosundan PWA simge seti oluşturma',
        input: '512×512 saydam PNG logo yükleyin · Şekil: Yuvarlatılmış Kare',
        output: 'favicon.ico + 180×180 Apple Touch + 192/512 px bildirim PNG dosyaları',
        explanation: 'Kare kaynak görsel temiz şekilde kırpılır; bu nedenle logo her boyutta ortada kalır.',
      },
    ],
    benefits: [
      'Gerçek çok çerçeveli ikili .ico dosyası oluşturur (16×16, 32×32 ve 48×48), adı değiştirilmiş PNG değil',
      'Masaüstü sekmelerini, Apple Touch (180×180) ve Web Bildirim simgelerini (192/512 px) kapsar',
      'Anında Monogram modu, yan projeler ve MVP için tasarım yazılımı gerektirmez',
      'index.html dosyasına yapıştırmaya hazır temiz HTML5 link rel="icon" kalıbı oluşturur',
    ],
    useCases: [
      'SaaS veya mikro site lansmanı öncesi eksik favicon ve Apple Touch simgelerini yayınlama',
      'Hazırlık ve üretim panoları için yüksek kontrastlı sekme simgeleri oluşturma',
      'Kare marka SVG/PNG işaretini tam bir PWA simge setine dönüştürme',
      'Küçük boyutta okunabilirliği doğrulamak için keskin 16×16 ve 32×32 önizlemeler oluşturma',
    ],
    faqs: [
      {
        question: 'İndirilen favicon.ico gerçek bir ICO ikili dosyası mı?',
        answer:
          'Evet. Üç keskin PNG kodlu çerçeve (16×16, 32×32 ve 48×48) içeren standart Windows ICO ICONDIR başlığı ve dizin girişleri yazar; bunlar tüm modern tarayıcılar ve işletim sistemleri tarafından desteklenir.',
      },
      {
        question: 'Modern web sitelerinin gerçekte hangi simge boyutlarına ihtiyacı vardır?',
        answer:
          'Bir favicon.ico ile birlikte 32×32 PNG, 180×180 Apple Touch simgesi ve 192×192 / 512×512 Web Bildirim PNG dosyaları, neredeyse her masaüstü, mobil iOS ve Android tarayıcısını kapsar.',
      },
      {
        question: 'React + Vite projesinde bu dosyalar nereye konulmalı?',
        answer:
          'favicon.ico ve PNG simgelerini projenizin /public/ klasörüne yerleştirin ve HTML link etiketlerini index.html dosyasındaki head bölümüne yapıştırın.',
      },
      {
        question: 'Favicon Oluşturucu ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir — kayıt gerekmez ve tüm simgeler tarayıcınızda yerel olarak oluşturulur.',
      },
      {
        question: 'Yüklediğim logolar bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Logonuz tamamen tarayıcınızda işlenir ve asla yüklenmez; bu nedenle marka dosyalarınız özel kalır.',
      },
      {
        question: 'favicon.ico ile PNG favicon arasındaki fark nedir?',
        answer:
          'favicon.ico, tek bir ikili dosyada birkaç simge boyutu barındıran bir kapsayıcıdır ve tarayıcılar bunu on yıllardır destekler. PNG favicon tek boyutlu bir görseldir; modern tarayıcılar ikisini de kabul eder, ancak .ico en güvenli varsayılan olmaya devam eder.',
      },
      {
        question: 'Apple Touch simgesi nedir?',
        answer:
          'Birisi sitenizi ana ekranına eklediğinde iOS tarafından kullanılan 180×180 PNG simgesidir. Olmadığında iOS sayfanızın ekran görüntüsünü alır; bu genellikle kötü görünür.',
      },
      {
        question: '192×192 ve 512×512 PWA simgeleri ne içindir?',
        answer:
          'Bunlar, yüklenebilir Progressive Web Uygulamaları için web uygulaması bildiriminizde listelenen simgelerdir. Android ve Chrome, bunları ana ekran simgesi, açılış ekranı ve uygulama başlatıcı için kullanır.',
      },
      {
        question: 'Logo olmadan metinden favicon yapabilir miyim?',
        answer:
          'Evet. Monogram modu, marka baş harfleri gibi 1–3 harfi, seçtiğiniz arka plan rengi, metin rengi ve köşe şekliyle temiz bir rozete dönüştürür — tasarım yazılımı gerekmez.',
      },
      {
        question: 'En iyi sonuç için hangi logo dosyasını yüklemeliyim?',
        answer:
          '512×512 veya daha büyük, saydam arka planlı kare bir PNG veya SVG yükleyin. Kare kaynak görseller temiz kırpılır; geniş veya uzun logolar merkezden kırpılır ve kenarları kesilebilir.',
      },
      {
        question: 'Dağıttıktan sonra yeni favicon neden görünmüyor?',
        answer:
          'Tarayıcılar favicon dosyalarını çok agresif şekilde önbelleğe alır. Ctrl+Shift+R (veya Mac üzerinde Cmd+Shift+R) ile sert yenileme yapın, site önbelleğini temizleyin veya yeni simgeyi görmek için gizli pencerede test edin.',
      },
      {
        question: 'Favicon logomla tam olarak eşleşmeli mi?',
        answer:
          'Büyük boyutlarda evet, ancak 16×16 boyutunda ince detaylar kaybolur. En küçük boyutlar için işareti sadeleştirin — detaylı bir logodan çok kalın baş harfler veya tek kalın bir şekil çok daha iyi okunur.',
      },
      {
        question: 'Hangi köşe şeklini seçmeliyim?',
        answer:
          'Yuvarlatılmış Kare, iOS ve macOS uygulama simgesi stiliyle eşleşir; Daire, avatar ve sosyal tarz işaretler için uygundur; Keskin Kare ise geometrik veya teknik marka işaretleri için en iyisidir.',
      },
      {
        question: 'Simgeler için HTML bağlantı etiketleri eklemem gerekiyor mu?',
        answer:
          'Güvenilir sonuçlar için evet. Tarayıcılar varsayılan olarak /favicon.ico dosyasını arar, ancak Apple Touch ve PWA simgeleri yalnızca sayfanızın head bölümünde link etiketleriyle belirttiğinizde yüklenir; bu araç bunları sizin için oluşturur.',
      },
      {
        question: 'Oluşturulan simgeleri mobil uygulama için de kullanabilir miyim?',
        answer:
          '192×192 ve 512×512 PNG dosyaları PWA kurulumları için çalışır; ancak yerel iOS ve Android uygulamalarının özel boyut ve formatlara sahip kendi simge setlerine ihtiyacı vardır ve bu web odaklı araç bunları oluşturmaz.',
      },
      {
        question: 'Favicon Oluşturucu çevrimdışı çalışır mı?',
        answer:
          'Evet. Sayfa yüklendikten sonra simge oluşturma tamamen tarayıcınızda çalışır, ağ isteği olmadan.',
      },
      {
        question: 'Monogram favicon için en iyi arka plan rengi hangisidir?',
        answer:
          'Beyaz veya beyaza yakın harflerle düz, yüksek kontrastlı bir marka rengi en iyisidir, çünkü 16×16 boyutunda bile okunabilir kalır. Açık arka plan üzerinde açık metin ve yoğun degradelerden kaçının.',
      },
      {
        question: 'Marka renklerimi değiştirdikten sonra simgeleri yeniden oluşturabilir miyim?',
        answer:
          'Evet. Renkleri güncelleyip veya yeni logoyu yükleyip yeni bir set indirmeniz yeterlidir — araç önceki oturumdan hiçbir şey saklamaz; bu nedenle her çalıştırma temiz başlar.',
      },
      {
        question: 'Favicon, koyu mod tarayıcı sekmelerinde çalışır mı?',
        answer:
          'Düz arka plan rengine sahip bir favicon, açık ve koyu sekmelerde aynı görünür. İşaretiniz koyu-saydam ise koyu tarayıcı çerçevesinde görünür kalması için açık bir arka plan veya çerçeve ekleyin.',
      },
      {
        question: 'Araç logolarımı veya oluşturulan simgeleri saklıyor mu?',
        answer:
          'Hayır. Her şey tarayıcı sekmenizde yerel olarak çalışır, hiçbir şey yüklenmez veya saklanmaz ve sayfayı kapattığınızda veya yenilediğinizde dosyalarınız kaybolur.',
      },
    ],
  },
};
