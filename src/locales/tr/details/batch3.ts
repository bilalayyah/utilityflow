// Detail content for TR tools — Turkish locale for UtilityFlow.
// Loaded on demand, one batch at a time, only on the tool's own page.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'age-calculator': {
    instructions: [
      {
        title: 'Doğum tarihinizi girin',
        description:
          'Doğum Tarihi alanına doğduğunuz ayı, günü ve yılı seçin.',
      },
      {
        title: 'Karşılaştırma tarihini seçin',
        description:
          'Karşılaştırma tarihini bugünde bırakın ya da o günkü yaşınızı görmek için geçmişte veya gelecekte herhangi bir tarihi seçin.',
      },
      {
        title: 'Yaş hesabını çalıştırın',
        description:
          'Sonuç tarayıcınızda anında güncellenir, düğmeye basmanız gerekmez ve hiçbir veri yüklenmez.',
      },
      {
        title: 'Ayrıntılı dökümü inceleyin',
        description:
          'Tam yıl, ay ve gün sayınızı, toplam hafta sayısını, yaşadığınız toplam gün sayısını ve sonraki doğum gününüze kalan süreyi okuyun.',
      },
      {
        title: 'Sonucu kopyalayın veya paylaşın',
        description:
          'Yaş dökümünü kopyalayıp formlara, mesajlara veya belgelere yapıştırın.',
      },
      {
        title: 'İpucu: gelecekteki bir dönüm noktasını kontrol edin',
        description:
          'Karşılaştırma tarihini bir doğum günü, sınav veya emeklilik tarihine ayarlayarak o gün tam olarak kaç yaşında olacağınızı görün.',
      },
    ],
    examples: [
      {
        title: 'Standart dönüm noktası yaş kontrolü',
        input: 'Doğum Tarihi: 1995-06-15 · Karşılaştırma Tarihi: 2025-11-12',
        output: '30 yıl, 4 ay, 28 gün (11.108 gün)',
        explanation: '1995 ile 2025 arasında gerçek takvim ayı uzunluklarını ve artık yılları kullanır.',
      },
      {
        title: 'Sonraki doğum gününe kalan gün',
        input: 'Doğum Tarihi: 2000-03-10 · Karşılaştırma Tarihi: 2025-11-12',
        output: '25 yıl, 8 ay, 2 gün · Sonraki doğum günü: 118 gün sonra',
        explanation: 'Bugünü sonraki doğum günü tarihiyle karşılaştırıp kalan günü sayar.',
      },
    ],
    benefits: [
      '30 günlük yaklaşık aylar yerine 28, 29, 30 ve 31 günlük gerçek takvim aylarını kullanır',
      'Artık gün (29 Şubat) doğum günlerini geri sayım hesaplarında doğru işler',
      'Toplam ay, hafta, gün ve yaklaşık saat bilgisini aynı anda gösterir',
      'Doğum tarihinin hedef tarihten sonra olduğu geçersiz aralıkları denetler',
    ],
    useCases: [
      'Okul kaydı, emeklilik veya resmî formlar için tam yaş uygunluğunu doğrulamak',
      'Dönüm noktası yıldönümlerini toplam gün veya hafta olarak hesaplamak',
      'Belirli bir tarihte kaç yaşında olunacağını kontrol etmek',
      'Sonraki doğum gününe kaç gün kaldığını öğrenmek',
    ],
    faqs: [
      {
        question: 'Yaş Hesaplayıcı artık yıl doğum günlerini (29 Şubat) nasıl işler?',
        answer:
          'Artık olmayan yıllarda sonraki doğum günü geri sayımı hedef takvim yılının 28 Şubatına hizalanır, böylece gün sayımı doğru kalır.',
      },
      {
        question: 'Toplam gün sayısı bazen yıl çarpı 365 ile neden farklı çıkar?',
        answer:
          'Her artık yıl 366. günü (29 Şubat) ekler ve takvim ayları 28 ile 31 gün arasında değişir. Bu araç gerçek UTC takvim günü farkını sayar.',
      },
      {
        question: 'Yaş Hesaplayıcı ile gelecekteki bir tarihteki yaşımı hesaplayabilir miyim?',
        answer:
          'Evet. Karşılaştırma tarihi alanını gelecekteki herhangi bir tarihe değiştirin ve o günkü tam yaşınızı görün.',
      },
      {
        question: 'Yaş Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir, kayıt gerekmez ve tamamen tarayıcınızda çalışır, bu yüzden doğum tarihiniz asla yüklenmez.',
      },
      {
        question: 'Yaş Hesaplayıcı yıl dışında neler gösterir?',
        answer:
          'Yıl, ay ve günün yanı sıra toplam ay, toplam hafta, yaşanmış toplam gün ve sonraki doğum gününe kalan gün sayısını gösterir.',
      },
      {
        question: 'Yaş Hesaplayıcı ne kadar doğrudur?',
        answer:
          'Gerçek takvim ayı uzunluklarını ve artık yılları kullanır, bu yüzden sonuç 30 günlük ay yaklaşımı yerine gerçek takvimle uyuşur.',
      },
      {
        question: 'Yaş Hesaplayıcı yaşımı yalnızca gün olarak gösterebilir mi?',
        answer:
          'Evet. Dökümde yaşanmış toplam gün sayısı yer alır, bu da dönüm noktası sayımları ve günle ölçülen yıldönümleri için işe yarar.',
      },
      {
        question: 'Yaş Hesaplayıcı ile yaşımı hafta veya ay olarak öğrenebilir miyim?',
        answer:
          'Evet, sonuçlarda yıl, ay ve gün dökümünün yanında toplam hafta ve toplam ay da yer alır.',
      },
      {
        question: 'Yaş Hesaplayıcı doğum tarihimi saklar mı?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve girdiğiniz hiçbir şey kaydedilmez ya da sunucuya gönderilmez.',
      },
      {
        question: 'Karşılaştırma tarihinden sonraki bir doğum tarihi girersem ne olur?',
        answer:
          'Araç bir doğrulama mesajı gösterir, çünkü doğum tarihi karşılaştırdığınız tarihten sonra olduğunda yaş hesaplanamaz.',
      },
      {
        question: 'Yaş Hesaplayıcı emeklilikte kaç yaşında olacağımı söyleyebilir mi?',
        answer:
          'Evet. Karşılaştırma tarihini planladığınız emeklilik tarihine ayarlayın, araç o günkü tam yaşınızı gösterir.',
      },
      {
        question: 'Yaş Hesaplayıcı yaşadığım saatleri sayar mı?',
        answer:
          'Yaşanmış toplam güne dayanan yaklaşık bir saat değeri gösterir, yanında tam yıl, ay ve gün sonucu da yer alır.',
      },
      {
        question: 'Yaş Hesaplayıcı ile başkasının yaşını kontrol edebilir miyim?',
        answer:
          'Evet, herhangi bir doğum tarihi girerek o kişinin yaşını hesaplayabilirsiniz, örneğin okul veya emeklilik uygunluğunu kontrol etmek için.',
      },
      {
        question: 'Yaş Hesaplayıcı neden karşılaştırma tarihi ister?',
        answer:
          'Karşılaştırma tarihi, yaşınızı ölçmek istediğiniz gündür. Varsayılan olarak bugün, planlama ve kayıtlar için geçmişte veya gelecekte herhangi bir tarih olabilir.',
      },
      {
        question: 'Yaş Hesaplayıcı çok eski doğum tarihleri için çalışır mı?',
        answer:
          'Evet, onlarca yıl öncesine ait doğum tarihlerini işler ve tüm süre boyunca artık yılları doğru sayar.',
      },
      {
        question: 'Yaş Hesaplayıcıyı resmî formlar için kullanabilir miyim?',
        answer:
          'Evet, tam yıl, ay ve gün sonucu yaş uygunluğunu kontrol etmek için uygundur, ancak resmî belgeler her zaman nihai kanıt olarak kalır.',
      },
      {
        question: 'Yaş Hesaplayıcı sonraki doğum günümü nasıl sayar?',
        answer:
          'Bugünkü tarihi sonraki doğum günü tarihinizle karşılaştırır ve o güne kadar kalan gün sayısını tam olarak gösterir.',
      },
      {
        question: 'Yaş Hesaplayıcı internet bağlantısı gerektirir mi?',
        answer:
          'Sayfanın yüklenmesi için gerekir, ancak hesaplama tarayıcınızda yerel olarak çalışır ve yükleme yapılmaz.',
      },
      {
        question: 'Yaş Hesaplayıcı geçmiş bir tarihteki yaşımı gösterebilir mi?',
        answer:
          'Evet. Karşılaştırma tarihi olarak geçmişte herhangi bir tarihi seçin ve o gün tam olarak kaç yaşında olduğunuzu görün.',
      },
      {
        question: 'Yaş Hesaplayıcıyı kullanırken doğum tarihim gizli kalır mı?',
        answer:
          'Evet. Araç tarayıcınızda yerel olarak çalışır, bu yüzden doğum tarihiniz cihazınızdan asla dışarı çıkmaz.',
      },
    ],
  },
  'percentage-calculator': {
    instructions: [
      {
        title: 'Yüzde hesaplama kartını seçin',
        description:
          'Her kart, diğer sayılarınızı silmeden kendi yüzde formülünü ayrı ayrı çözer.',
      },
      {
        title: 'Sayısal değerlerinizi girin',
        description:
          'Vurgulanan alanlara tam sayı veya ondalık sayı yazın, sonuçlar her tuş vuruşunda yeniden hesaplanır.',
      },
      {
        title: 'Hesabı anında çalıştırın',
        description:
          'Gönder düğmesi yoktur, yüzde sonucu yazarken anında görünür, doğrudan tarayıcınızda.',
      },
      {
        title: 'Formül çıktılarını inceleyin',
        description:
          'Artış veya azalış kontrolü için işaretli yüzde değişimini ve mutlak sayısal farkı birlikte görün.',
      },
      {
        title: 'Yüzde sonucunuzu kopyalayın',
        description:
          'Cevabı kopyalayıp rapora, faturaya, elektronik tabloya veya mesaja yapıştırın.',
      },
      {
        title: 'İpucu: sıfır veya negatif başlangıç değerini kontrol edin',
        description:
          'Sonuçta bir doğrulama mesajı görürseniz sıfır bölen veya negatif başlangıç değeri olup olmadığını kontrol edin, araç bunlara karşı koruma sağlar.',
      },
    ],
    examples: [
      {
        title: 'Gelir artış yüzdesini ölçmek',
        input: '120 değerinden 150 değerine',
        output: '+%25 (+30 mutlak değişim)',
        explanation: '((150 - 120) / |120|) × 100 = +%25 olarak hesaplanır.',
      },
      {
        title: 'Bir sayının yüzde X değerini bulmak',
        input: '250 sayısının %20 değeri',
        output: '50',
        explanation: '250 × 20 ÷ 100 = 50.',
      },
    ],
    benefits: [
      'Üç yüzde formülünü de tek ekranda yan yana gösterir',
      'Ondalık sayıları, negatif başlangıç değerlerini ve sıfır bölen korumalarını düzgün işler',
      'Yüzde değişiminin yanında mutlak farkı da gösterir',
      'Sayfa yenileme veya gönder tıklaması gerektirmez',
    ],
    useCases: [
      'Aylık trafik, satış veya dönüşüm oranı artışını kontrol etmek',
      'Sınav puanlarını ve not yüzdelerini hesaplamak',
      'Faturalara hızlı yüzde ek ücreti veya kesinti uygulamak',
      'Önceki ve sonraki fiyatları ya da bütçe dağılımlarını karşılaştırmak',
    ],
    faqs: [
      {
        question: 'Yüzde Hesaplayıcıda değerler düştüğünde yüzde değişimi nasıl hesaplanır?',
        answer:
          'Yüzde değişimi ((Yeni Değer − Eski Değer) / |Eski Değer|) × 100 formülünü kullanır. Yeni değer eski değerden küçükse araç açıkça negatif yüzde düşüşü bildirir.',
      },
      {
        question: 'Yüzde Hesaplayıcıda bölen veya başlangıç değeri 0 olursa ne olur?',
        answer:
          'Sıfıra bölme matematiksel olarak tanımsızdır, bu yüzden hesaplayıcı Sonsuz veya Tanımsız yerine açık bir doğrulama mesajı gösterir.',
      },
      {
        question: 'Yüzde Hesaplayıcıya %7,25 gibi ondalık yüzdeler girebilir miyim?',
        answer:
          'Evet. Tüm alanlar ondalık değerleri kabul eder ve görüntülemede yuvarlamadan önce tam kayan nokta hassasiyetini korur.',
      },
      {
        question: 'Yüzde Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir, kayıt gerekmez ve tamamen tarayıcınızda çalışır, bu yüzden sayılarınız asla yüklenmez.',
      },
      {
        question: 'Bir sayının başka bir sayının yüzde kaçı olduğunu nasıl öğrenirim?',
        answer:
          '"Yüzde kaç" kartını kullanın: parçayı ve bütünü girin, araç parçayı bütüne bölüp 100 ile çarpar.',
      },
      {
        question: 'Yüzde Hesaplayıcı ile bir sayının yüzde X değerini nasıl bulurum?',
        answer:
          '"Yüzde X kadarı" kartına yüzdeyi ve sayıyı girin, araç sayıyı yüzde bölü 100 ile çarpar.',
      },
      {
        question: 'Yüzde değişimi ile yüzde puanı arasındaki fark nedir?',
        answer:
          'Yüzde değişimi başlangıç değerine göredir, yüzde puanı ise iki yüzde arasındaki basit aritmetik farktır.',
      },
      {
        question: 'Yüzde Hesaplayıcı negatif sayıları işleyebilir mi?',
        answer:
          'Evet, negatif başlangıç değerlerini işler ve işaretli sonuç değişimin artış mı yoksa azalış mı olduğunu gösterir.',
      },
      {
        question: 'İki sayı arasındaki yüzde artışı nasıl hesaplarım?',
        answer:
          'Değişim kartına eski değeri ve yeni değeri girin, araç artışı yüzde olarak gösterir, yanında mutlak fark da yer alır.',
      },
      {
        question: 'Yüzde azalışı nasıl hesaplarım?',
        answer:
          'Daha yüksek başlangıç değerini ve daha düşük yeni değeri girin, araç azalışı negatif yüzde olarak bildirir.',
      },
      {
        question: 'Yüzde Hesaplayıcıyı sınav puanları için kullanabilir miyim?',
        answer:
          'Evet. Alınan puanı toplam puana bölün, araç puanı yüzde olarak gösterir.',
      },
      {
        question: 'Yüzde Hesaplayıcı mutlak farkı da gösterir mi?',
        answer:
          'Evet, yüzde değişiminin yanında iki değer arasındaki mutlak sayısal farkı da gösterir.',
      },
      {
        question: 'Bu araçla indirim yüzdesi hesaplayabilir miyim?',
        answer:
          'Evet. Değişim kartına orijinal fiyatı ve satış fiyatını girin, indirimi yüzde azalış olarak görün.',
      },
      {
        question: 'Yüzde Hesaplayıcı sayılarımı saklar mı?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve girdiğiniz hiçbir şey kaydedilmez ya da sunucuya gönderilmez.',
      },
      {
        question: 'Yüzde Hesaplayıcı sonuçları ne kadar doğrudur?',
        answer:
          'Sonuçlar görüntülemede yuvarlamadan önce tam kayan nokta hassasiyetini kullanır, bu yüzden küçük ondalık farklar doğru işlenir.',
      },
      {
        question: 'Yüzde Hesaplayıcıyı satış artışı için kullanabilir miyim?',
        answer:
          'Evet, aylık satış, trafik veya dönüşüm oranı artışı için idealdir, yüzde ve mutlak değişimi birlikte gösterir.',
      },
      {
        question: 'Negatif yüzde değişimi ne anlama gelir?',
        answer:
          'Negatif sonuç, yeni değerin eski değerden düşük olduğu anlamına gelir, yani artış yerine azalış olmuştur.',
      },
      {
        question: 'Çok büyük sayılarla yüzde hesaplayabilir miyim?',
        answer:
          'Evet, araç büyük tam sayıları ve ondalık sayıları kabul eder ve yazarken anında yeniden hesaplar.',
      },
      {
        question: 'Yüzde hesaplamak için düğmeye basmam gerekir mi?',
        answer:
          'Hayır. Sonuçlar her tuş vuruşunda otomatik güncellenir, sayfa yenileme veya gönder tıklaması gerekmez.',
      },
      {
        question: 'Yüzde Hesaplayıcı yüzdeden orijinal değeri bulabilir mi?',
        answer:
          'Üç kart, bir sayının yüzde X kadarı, X sayısının Y sayısının yüzde kaçı olduğu ve yüzde değişimi hesaplarını kapsar. Ters hesap için bilinen tutarı ondalık olarak yüzdeye bölün.',
      },
    ],
  },
  'loan-emi-calculator': {
    instructions: [
      {
        title: 'Kredi bilgilerinizi girin',
        description:
          'Kredi Anaparasını, Yıllık Faiz Oranını (yüzde) ve Kredi Vadesini ay veya yıl olarak belirtin.',
      },
      {
        title: 'Vade birimini seçin',
        description:
          'Vade birimini yıl ve ay arasında değiştirin, böylece bankanızın vade belirtme biçimiyle uyuşur.',
      },
      {
        title: 'Taksit hesabını çalıştırın',
        description:
          'Aylık taksit, toplam faiz ve toplam geri ödeme tarayıcınızda anında güncellenir, hiçbir veri yüklenmez.',
      },
      {
        title: 'Taksit özetini inceleyin',
        description:
          'Aylık Taksit, Toplam Ödenecek Faiz, Toplam Geri Ödeme ve Faiz Payı yüzdesini görün.',
      },
      {
        title: 'Geri ödeme planını inceleyin',
        description:
          'Yıllık Özet ile Aylık Plan arasında geçiş yaparak zaman içinde anapara ödemesinin nasıl hızlandığını görün.',
      },
      {
        title: 'İpucu: daha kısa vadeyi karşılaştırın',
        description:
          'Daha kısa bir vade deneyerek toplam faizde ne kadar tasarruf edebileceğinizi görün, ardından rakamları kopyalayıp kredi tekliflerini yan yana karşılaştırın.',
      },
    ],
    examples: [
      {
        title: '5 yıllık taşıt veya ihtiyaç kredisi',
        input: 'Anapara: 750.000 TL · Oran: %7,5 · Vade: 60 ay',
        output: 'Aylık Taksit: 15.028,50 TL · Toplam Faiz: 151.710 TL · Toplam Ödeme: 901.710 TL',
        explanation: 'Standart azalan bakiye taksit formülü P·r·(1+r)^n / ((1+r)^n - 1) kullanılır.',
      },
      {
        title: '%0 faizli taksit planı',
        input: 'Anapara: 120.000 TL · Oran: %0 · Vade: 12 ay',
        output: 'Aylık Taksit: 10.000 TL · Toplam Faiz: 0 TL',
        explanation: '%0 faizde taksit, anaparanın ay sayısına bölünmesine eşittir.',
      },
    ],
    benefits: [
      'Tam azalan bakiye bileşik faiz taksit matematiğini kullanır',
      '%0 kampanyalı faizli kredileri bölme hatası olmadan doğru işler',
      'Yıllık ve aylık geri ödeme planı görünümleri arasında geçiş sunar',
      'Vade birimini yıl ve ay arasında kolayca değiştirmeyi destekler',
    ],
    useCases: [
      'Birden fazla bankadan taşıt, öğrenci veya ihtiyaç kredisi tekliflerini karşılaştırmak',
      'Vade kısaltmanın ömür boyu faizi ne kadar düşürdüğünü değerlendirmek',
      '12, 24 veya 36 ödeme sonrası kalan kredi bakiyesini tahmin etmek',
      '%0 taksit planı ile düşük faizli finansmanı karşılaştırmak',
    ],
    faqs: [
      {
        question: 'Kredi Taksit Hesaplayıcı hangi formülü kullanır?',
        answer:
          'Standart azalan bakiye geri ödeme formülünü uygular: Taksit = P × r × (1 + r)^n / ((1 + r)^n − 1). Burada r yıllık oran bölü 12 bölü 100, n ise toplam aylık taksit sayısıdır.',
      },
      {
        question: 'Kredi taksitinde ilk ayların faizi sonraki aylardan neden daha yüksektir?',
        answer:
          'Her ayın faizi kalan anapara bakiyesi üzerinden hesaplanır. Her taksit ödemesiyle anapara azaldıkça sabit taksitin daha büyük kısmı anaparaya gider.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı banka masraflarını veya sigortayı dahil eder mi?',
        answer:
          'Hayır. Çıktı yalnızca anapara ve faiz geri ödemesini gösterir. Finanse edilen masrafların geri ödeme maliyetini modellemek için bunları Anapara alanına ekleyin.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir, kayıt gerekmez ve tamamen tarayıcınızda çalışır, bu yüzden kredi bilgileriniz asla yüklenmez.',
      },
      {
        question: 'Kredide taksit nedir?',
        answer:
          'Taksit, her ay ödenen sabit tutardır. Faiz ile anaparanın bir kısmını birlikte kapsar ve kredi bitene kadar ödenir.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı %0 faizli krediyi nasıl işler?',
        answer:
          '%0 kampanyalı faizli kredileri bölme hatası olmadan doğru işler ve taksiti anaparanın ay sayısına bölünmesi olarak gösterir.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı ile iki kredi teklifini karşılaştırabilir miyim?',
        answer:
          'Evet. Her teklifi hesaplayıcıdan geçirin ve aylık taksit ile toplam ödenecek faizi karşılaştırarak hangisinin toplamda daha ucuz olduğunu görün.',
      },
      {
        question: 'Daha kısa vade toplam faizi düşürür mü?',
        answer:
          'Genellikle evet. Daha kısa vade daha yüksek aylık taksit demektir, ancak faiz daha az ay boyunca işlediği için toplam faiz çok daha düşük olur.',
      },
      {
        question: 'Geri ödeme planı nedir?',
        answer:
          'Her ay veya yıl için taksitinizin ne kadarının faize, ne kadarının anaparaya gittiğini ve ne kadar bakiye kaldığını gösteren bir tablodur.',
      },
      {
        question: 'Bir yıl sonraki kalan kredi bakiyemi görebilir miyim?',
        answer:
          'Evet. Geri ödeme planı 12, 24 veya 36 ödeme sonrası ya da vadenin herhangi bir noktasında kalan anaparayı gösterir.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı taşıt kredisi için çalışır mı?',
        answer:
          'Evet, taşıt, ihtiyaç, öğrenci ve işletme kredileri için çalışır. Azalan bakiye üzerinden sabit aylık taksitlerle ödenen her kredi için geçerlidir.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcıyı konut kredisi için kullanabilir miyim?',
        answer:
          'Evet, anapara ve faiz kısmı için. Vergi, sigorta ve benzeri giderleri de içeren tam konut maliyeti için Konut Kredisi Hesaplayıcıyı kullanın.',
      },
      {
        question: 'Kredime ek ödeme yaparsam ne olur?',
        answer:
          'Ek ödemeler doğrudan anaparayı düşürür ve gelecekteki faizi azaltır. Bu hesaplayıcı düzenli taksitleri modeller, ek tutarı planınıza ayrıca ekleyin.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı kredi bilgilerimi saklar mı?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve girdiğiniz hiçbir şey kaydedilmez ya da sunucuya gönderilmez.',
      },
      {
        question: 'Faiz payı değişirken taksitim neden aynı kalır?',
        answer:
          'Taksit sabittir, ancak her ay faiz azalan bakiye üzerinden işler, bu yüzden faiz payı düşer ve anapara payı yükselir.',
      },
      {
        question: 'Kredi vadesini yıl ve ay arasında değiştirebilir miyim?',
        answer:
          'Evet, hesaplayıcı vade birimini yıl ve ay arasında kolayca değiştirmeyi destekler.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı finansal tavsiye midir?',
        answer:
          'Hayır. Girdiğiniz değerlere göre rakamların ne olacağını gösteren bir hesaplama aracıdır, finansal tavsiye değildir. Şartlar için bankanıza danışın.',
      },
      {
        question: '%0 taksit planı için Kredi Taksit Hesaplayıcıyı nasıl kullanırım?',
        answer:
          'Yıllık oran olarak %0 girin ve vadeyi ay olarak girin, araç sıfır faizle sabit aylık ödemeyi gösterir.',
      },
      {
        question: 'Kredi anaparası olarak ne girmeliyim?',
        answer:
          'Gerçekte ödünç aldığınız tutarı girin. Masraflar krediye finanse edildiyse geri ödeme maliyetini modellemek için bunları anaparaya ekleyin.',
      },
      {
        question: 'Kredi Taksit Hesaplayıcı yıllık ve aylık plan gösterebilir mi?',
        answer:
          'Evet, Yıllık Özet ile Aylık Plan görünümleri arasında geçiş yaparak geri ödemeyi istediğiniz ayrıntı düzeyinde görebilirsiniz.',
      },
    ],
  },
  'mortgage-calculator': {
    instructions: [
      {
        title: 'Ev fiyatını ve peşinatı belirleyin',
        description:
          'Konut Fiyatını ve Peşinatınızı girin, kredi değer oranı ve kredi anaparası otomatik olarak görünür.',
      },
      {
        title: 'Faiz oranını ve vadeyi seçin',
        description:
          'Yıllık konut kredisi oranını yüzde olarak girin ve 10, 15, 20 veya 30 yıllık sabit vade seçin.',
      },
      {
        title: 'Vergi, sigorta ve aidatı ekleyin',
        description:
          'Yıllık Emlak Vergisi, yıllık Konut Sigortası, aylık aidat ve peşinat %20 altında olduğunda uygulanan sigorta oranını ayarlayın.',
      },
      {
        title: 'Konut kredisi hesabını çalıştırın',
        description:
          'Aylık toplam ödeme tarayıcınızda anında güncellenir, hiçbir veri yüklenmez.',
      },
      {
        title: 'Ödeme dökümünü inceleyin',
        description:
          'Anapara ve faiz, vergi, sigorta, aidat ve sigorta payları arasındaki dağılımı ve vade boyunca toplam faizi görün.',
      },
      {
        title: 'İpucu: %20 peşinat veya daha kısa vade deneyin',
        description:
          'Sigorta maliyetini kaldırmak için peşinatı %20 seviyesine çıkarmayı ya da faiz tasarrufunu görmek için 15 yıllık vadeyi deneyin, ardından rakamları kopyalayıp seçenekleri karşılaştırın.',
      },
    ],
    examples: [
      {
        title: '%20 peşinatla 30 yıllık sabit konut alımı',
        input: 'Ev: 4.500.000 TL · Peşinat: 900.000 TL (%20) · Oran: %6,5 · Vergi: 54.000 TL/yıl · Sigorta: 18.000 TL/yıl',
        output: 'Aylık Toplam: 28.754 TL (Anapara ve Faiz 22.754 TL + Vergi 4.500 TL + Sigorta 1.500 TL)',
        explanation: '%20 peşinatta kredi değer oranı %80 olur, sigorta maliyeti 0 TL olur ve anapara ile faiz 360 ayda ödenir.',
      },
      {
        title: '15 yıl ile 30 yıl vade karşılaştırması',
        input: 'Ev: 4.500.000 TL · Peşinat: 900.000 TL · Oran: %6,5 · Vade: 15 yıl ile 30 yıl',
        output: '15 yıl: aylık ödeme yüksek, toplam faiz çok düşük · 30 yıl: aylık ödeme düşük, toplam faiz yüksek',
        explanation: 'Daha kısa vade aylık ödemeyi artırır, ancak ömür boyu faizi ciddi ölçüde düşürür.',
      },
    ],
    benefits: [
      'Aylık konut maliyetini anapara ve faiz, emlak vergisi, sigorta, aidat ve sigorta paylarına böler',
      'Kredi değer oranını ve vade boyunca toplam faizi hesaplar',
      'Yıllık bakiye azalış planı tablosu içerir',
      '10, 15, 20 ve 30 yıllık vade karşılaştırmalarını anında destekler',
    ],
    useCases: [
      'Ev almadan önce gerçekçi aylık toplam ödeme bütçesi yapmak',
      '15 yıl ile 30 yıl konut kredisi faiz tasarrufunu karşılaştırmak',
      '%20 peşinatla aylık sigorta ücretini kaldırma planını test etmek',
      '5 veya 10 yıl sonraki kalan anapara bakiyesini tahmin etmek',
    ],
    faqs: [
      {
        question: 'Konut kredisi ödemesinde toplam aylık ödeme neleri kapsar?',
        answer:
          'Anapara, faiz, emlak vergisi ve konut sigortasını kapsar. Peşinat %20 altındaysa kredi sigortası da eklenir. Bankalar aylık ödeme gücünü bu dört kalemle değerlendirir.',
      },
      {
        question: 'Konut kredisinde sigorta ne zaman uygulanır?',
        answer:
          'Genellikle peşinat %20 altında olduğunda, yani kredi değer oranı %80 üzerinde olduğunda kredi sigortası uygulanır.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı tapu ve kapanış masraflarını dahil eder mi?',
        answer:
          'Hayır. Kapanış masrafları bölgeye ve bankaya göre değişir, genelde kredi tutarının %2 ile %5 arasında olur ve peşin ödenir.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir, kayıt gerekmez ve tamamen tarayıcınızda çalışır, bu yüzden ev fiyatı ve kredi bilgileriniz asla yüklenmez.',
      },
      {
        question: 'Daha büyük peşinat konut kredisi ödememi nasıl değiştirir?',
        answer:
          'Daha büyük peşinat kredi anaparasını düşürür, bu da anapara ve faizi azaltır. %20 peşinatta sigorta maliyeti tamamen kalkabilir.',
      },
      {
        question: '15 yıl ile 30 yıl konut kredisi arasındaki fark nedir?',
        answer:
          '15 yıllık kredide aylık ödemeler daha yüksek, toplam faiz çok daha düşüktür. 30 yıllık kredide aylık ödemeler daha düşük, toplam faiz daha yüksektir.',
      },
      {
        question: 'Kredi değer oranı nasıl hesaplanır?',
        answer:
          'Kredi tutarının ev fiyatına bölünmesiyle yüzde olarak hesaplanır. 4.500.000 TL evde 3.600.000 TL kredi, %80 kredi değer oranı demektir.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı emlak vergisini dahil eder mi?',
        answer:
          'Evet. Yıllık emlak vergisini girin, araç bunun on ikide birini aylık ödemenize ekler.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı konut sigortasını dahil eder mi?',
        answer:
          'Evet. Yıllık konut sigortası primini girin, araç bunun on ikide birini aylık toplama ekler.',
      },
      {
        question: 'Konut kredisi hesabında aidat nedir?',
        answer:
          'Aidat, site veya apartman yönetimine ödenen aylık ücrettir. Ayrı girin, toplam aylık konut maliyetine eklenir.',
      },
      {
        question: '5 veya 10 yıl sonraki kalan konut kredisi bakiyemi görebilir miyim?',
        answer:
          'Evet, yıllık bakiye azalış planı vadenin her yılında kalan anaparayı gösterir.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı ev fiyatımı veya kredi bilgilerimi saklar mı?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve girdiğiniz hiçbir şey kaydedilmez ya da sunucuya gönderilmez.',
      },
      {
        question: 'Bu hesaplayıcıyla konut kredisi vadelerini karşılaştırabilir miyim?',
        answer:
          'Evet. 10, 15, 20 ve 30 yıllık vadeler arasında geçiş yaparak aylık ödemeleri ve toplam faizi anında karşılaştırın.',
      },
      {
        question: 'Vade boyunca toplam ne kadar faiz öderim?',
        answer:
          'Araç vade boyunca toplam faizi gösterir, böylece aylık ödemenin ötesindeki gerçek ömür boyu maliyeti görürsünüz.',
      },
      {
        question: 'Kredi bakiyem %80 kredi değer oranının altına düşünce sigorta ne olur?',
        answer:
          'Birçok kredide öz sermaye %20 seviyesine ulaşınca sigorta kaldırılabilir, ancak kurallar bankanıza ve kredi türüne bağlıdır, doğrudan bankanızla doğrulayın.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı finansal tavsiye midir?',
        answer:
          'Hayır. Girdiğiniz değerlere göre rakamların ne olacağını gösteren bir hesaplama aracıdır, finansal tavsiye değildir. Şartlar için bankanıza danışın.',
      },
      {
        question: 'Peşinatı tutar veya yüzde olarak girebilir miyim?',
        answer:
          'Evet, peşinatı her iki şekilde de girebilirsiniz, araç kredi değer oranını ve kredi anaparasını otomatik yansıtır.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı sabit faizli krediler için çalışır mı?',
        answer:
          'Evet, 10, 15, 20 ve 30 yıllık vadelerde sabit yıllık oranla sabit faizli konut kredilerini modeller.',
      },
      {
        question: 'Konut kredisi faiz oranı olarak ne girmeliyim?',
        answer:
          'Bankanızın verdiği yıllık oranı yüzde olarak girin. Küçük oran değişiklikleri aylık ödemeyi belirgin ölçüde etkileyebilir, bu yüzden birkaç oranı karşılaştırın.',
      },
      {
        question: 'Konut Kredisi Hesaplayıcı ev aramadan önce bütçe yapmama yardımcı olur mu?',
        answer:
          'Evet. Gerçekçi bir ev fiyatı, peşinat, oran, vergi ve sigorta girerek aramaya başlamadan önce gerçek aylık toplam maliyeti görün.',
      },
    ],
  },
  'compound-interest-calculator': {
    instructions: [
      {
        title: 'Anapara ve düzenli yatırımları girin',
        description:
          'Başlangıç Tutarınızı ve Aylık Katkı tutarınızı belirtin.',
      },
      {
        title: 'Yıllık getiri ve süreyi belirleyin',
        description:
          'Beklenen Yıllık Faiz veya Getiri Oranını yüzde olarak ve Yatırım Süresini yıl olarak girin.',
      },
      {
        title: 'Bileşik faiz sıklığını seçin',
        description:
          'Yıllık, Üç Aylık, Aylık veya Günlük bileşik faiz arasında geçiş yapın ve yıllık dökümü inceleyin.',
      },
      {
        title: 'Büyüme tahminini çalıştırın',
        description:
          'Son bakiye tarayıcınızda anında güncellenir, hiçbir veri yüklenmez.',
      },
      {
        title: 'Yıllık defteri inceleyin',
        description:
          'Her yılın katkılarını, kazanılan faizi ve güncel bakiyeyi kontrol ederek büyümenin zaman içinde nasıl hızlandığını görün.',
      },
      {
        title: 'İpucu: daha yüksek aylık katkıyı test edin',
        description:
          'Aylık 1.000 TL ekleyerek son bakiyenin ne kadar büyüdüğünü görün, ardından rakamları kopyalayıp tasarruf planlarını karşılaştırın.',
      },
    ],
    examples: [
      {
        title: '20 yıllık düzenli yatırım tahmini',
        input: 'Başlangıç: 100.000 TL · Aylık: 5.000 TL · Getiri: %7 · Süre: 20 yıl · Aylık Bileşik',
        output: 'Son Bakiye: 3.008.505 TL · Katkılar: 1.300.000 TL · Kazanılan Faiz: 1.708.505 TL',
        explanation: 'Bileşik getiri, son portföy değerinin %56 dan fazlasını oluşturur.',
      },
      {
        title: 'Katkısız tek seferlik yatırım',
        input: 'Başlangıç: 50.000 TL · Aylık: 0 TL · Getiri: %5 · Süre: 10 yıl · Yıllık Bileşik',
        output: 'Son Bakiye: 81.444 TL · Kazanılan Faiz: 31.444 TL',
        explanation: 'Katkı olmadan bile bileşik faiz bakiyeyi on yılda %63 büyütür.',
      },
    ],
    benefits: [
      'Cebinizden çıkan toplam katkıyı kazanılan bileşik faizden ayırır',
      'Yıllık, üç aylık, aylık ve günlük bileşik faiz aralıklarını destekler',
      'Ay sonu veya ay başı katkı zamanlaması seçeneği sunar',
      'Planlama için tam yıllık büyüme defteri oluşturur',
    ],
    useCases: [
      'Uzun vadeli emeklilik veya fon birikimi hedeflerini planlamak',
      'Aylık ile günlük bileşik faizli yüksek getirili tasarruf hesaplarını karşılaştırmak',
      'Aylık katkıyı 1.000 TL artırmanın etkisini görmek',
      'Üstel bileşik büyümeyi doğrusal basit faizle karşılaştırarak anlatmak',
    ],
    faqs: [
      {
        question: 'Bileşik Faiz Hesaplayıcıda bileşik faiz sıklığı ne kadar fark yaratır?',
        answer:
          'Orta faiz oranlarında aylık bileşik faiz, yıllık bileşik faizden biraz daha fazla büyüme sağlar, çünkü faiz daha erken faiz kazanmaya başlar. Günlük ile aylık arasındaki fark genelde yüzde birin küçük bir kesridir.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcı vergi veya enflasyonu hesaba katar mı?',
        answer:
          'Hesaplayıcı vergi öncesi nominal büyümeyi gösterir. Enflasyona göre düzeltilmiş gerçek alım gücünü yaklaşık olarak görmek için beklenen yıllık enflasyonu, örneğin %2,5 ile %3 aralığını, nominal getiri oranından çıkarın.',
      },
      {
        question: 'Katkılar her ayın başında mı yoksa sonunda mı kabul edilir?',
        answer:
          'Varsayılan olarak katkılar her ayın sonunda uygulanır. Hesaplayıcı seçeneklerinden ay başı zamanlamasına geçiş yapabilirsiniz.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir, kayıt gerekmez ve tamamen tarayıcınızda çalışır, bu yüzden birikim rakamlarınız asla yüklenmez.',
      },
      {
        question: 'Bileşik faiz nedir?',
        answer:
          'Bileşik faiz, hem orijinal anaparanız hem de önceden kazanılmış faiz üzerinden kazanılan faizdir, bu yüzden büyüme zamanla hızlanır.',
      },
      {
        question: 'Bileşik faiz basit faizden nasıl farklıdır?',
        answer:
          'Basit faiz yalnızca anapara üzerinden ödenir, bileşik faiz ise anapara artı birikmiş faiz üzerinden ödenir, bu da bakiyeyi daha hızlı büyütür.',
      },
      {
        question: 'Aylık katkılarla büyümeyi tahmin edebilir miyim?',
        answer:
          'Evet. Aylık katkınızı girin, araç her ay ekler ve büyüyen bakiyeyi tüm süre boyunca bileşik olarak hesaplar.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcıya hangi getiri oranını girmeliyim?',
        answer:
          'Beklediğiniz yıllık getiriyi yüzde olarak girin. Bu bir tahmin girdisidir, öngörü değildir. Bir dizi sonuç görmek için birkaç oran deneyin.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcı ne kadar yatırdığımı ve ne kadar kazandığımı gösterir mi?',
        answer:
          'Evet, cebinizden çıkan toplam katkıyı kazanılan bileşik faizden ayırır ve her ikisini de yıllık defterde gösterir.',
      },
      {
        question: 'Aylık ile günlük bileşik faizi karşılaştırabilir miyim?',
        answer:
          'Evet. Bileşik faiz sıklığını yıllık, üç aylık, aylık ve günlük arasında değiştirerek her biri için son bakiyeyi karşılaştırın.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcı emeklilik birikimi planlamama yardımcı olur mu?',
        answer:
          'Evet, uzun vadeli emeklilik veya fon tahminleri için idealdir. Başlangıç bakiyenizi, aylık yatırımlarınızı, oranı ve yılı girerek tahmini bakiyeyi görün.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcı birikim rakamlarımı saklar mı?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve girdiğiniz hiçbir şey kaydedilmez ya da sunucuya gönderilmez.',
      },
      {
        question: 'Aylık katkımı 1.000 TL artırırsam ne olur?',
        answer:
          'Son bakiye, ek yatırımların toplamından çok daha fazla büyür, çünkü eklenen her lira kalan yıllar boyunca bileşik faiz de kazanır.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcıyı aylık katkı olmadan kullanabilir miyim?',
        answer:
          'Evet. Aylık katkıyı sıfır yapın, araç yalnızca başlangıç tutarınız üzerinden büyümeyi tahmin eder.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcıyı başlangıç tutarı olmadan kullanabilir miyim?',
        answer:
          'Evet. Başlangıç tutarını sıfır yapın ve aylık katkı girerek yalnızca düzenli yatırımlardan büyümeyi tahmin edin.',
      },
      {
        question: 'Bileşik Faiz Hesaplayıcı finansal tavsiye midir?',
        answer:
          'Hayır. Girdiğiniz getiri oranı ve değerlere göre rakamların ne olacağını gösteren bir tahmin aracıdır, finansal tavsiye değildir.',
      },
      {
        question: 'Yıllık defter nasıl çalışır?',
        answer:
          'Defter her yıl için başlangıç bakiyesini, katkıları, kazanılan faizi ve kapanış bakiyesini listeler, böylece büyümeyi yıl yıl görebilirsiniz.',
      },
      {
        question: 'Büyüme sonraki yıllarda neden hızlanır?',
        answer:
          'Faiz sürekli büyüyen bir bakiye üzerinden kazanıldığı için her yıl kazanılan faiz, bakiye bileşik olarak büyüdükçe artar.',
      },
      {
        question: 'Yüksek getirili tasarruf hesabı için bileşik faiz hesaplayabilir miyim?',
        answer:
          'Evet. Hesabın yıllık oranını ve yatırım düzeninizi girerek birikimlerinizde aylık ile günlük bileşik faizi karşılaştırın.',
      },
      {
        question: 'Son bakiye neleri içerir?',
        answer:
          'Son bakiye başlangıç tutarınızı, tüm aylık katkılarınızı ve yatırım süresi boyunca kazanılan tüm bileşik faizi içerir.',
      },
    ],
  },
  'discount-margin-calculator': {
    instructions: [
      {
        title: 'İndirim veya Kâr Marjı modunu seçin',
        description:
          'Satış fiyatı için Perakende İndirimi, ürün birim ekonomisi için Kâr Marjı ve Kâr Oranı modunu seçin.',
      },
      {
        title: 'Fiyat rakamlarını girin',
        description:
          'Orijinal Fiyat, Birincil İndirim yüzdesi, isteğe bağlı Ek Kupon yüzdesi ve Vergi yüzdesini girin. Marj modunda Maliyet ve Satış Fiyatı girin.',
      },
      {
        title: 'Katmanlı indirimleri ve vergiyi ekleyin',
        description:
          'İndirim modunda ikinci bir kupon yüzdesi ve isteğe bağlı vergi yüzdesi girin. İndirimler toplanmaz, arka arkaya uygulanır.',
      },
      {
        title: 'Sonuçları anında görün',
        description:
          'Rakamlar yazarken yeniden hesaplanır, düğmeye basmak ve kayıt olmak gerekmez.',
      },
      {
        title: 'Net ölçütleri inceleyin',
        description:
          'Son Fiyat, Toplam Tasarruf, Etkili İndirim yüzdesi, Brüt Kâr, Marj yüzdesi ve Kâr Oranı yüzdesini kontrol edin.',
      },
      {
        title: 'Sonuçları kopyalayın ve fiyatları test edin',
        description:
          'Son fiyat, tasarruf, marj ve kâr oranı rakamlarını fiyat listenize, teklifinize veya elektronik tablonuza kopyalayın, ardından farklı fiyat noktalarını test etmek için girdileri değiştirin.',
      },
    ],
    examples: [
      {
        title: 'Katmanlı perakende indirimi hesabı',
        input: 'Orijinal: 1.200 TL · İndirim 1: %25 · Ek Kupon: %10 · Vergi: %0',
        output: 'Son Fiyat: 810 TL · Tasarruf: 390 TL · Etkili İndirim: %32,5',
        explanation: 'Ardışık indirimler çarpılır (0,75 × 0,90 = 0,675), toplam %32,5 indirim olur, %35 değil.',
      },
      {
        title: 'Maliyetten satış fiyatı belirlemek',
        input: 'Maliyet: 500 TL · Satış Fiyatı: 1.000 TL',
        output: 'Brüt Kâr: 500 TL · Marj: %50 · Kâr Oranı: %100',
        explanation: 'Marj kârı satış fiyatına böler, kâr oranı ise maliyete böler.',
      },
    ],
    benefits: [
      'Katmanlı indirimleri toplama hatasını önler',
      'Brüt Marj yüzdesi ile Maliyet Kâr Oranı yüzdesini yan yana ayırır',
      'Birim kârı ve başa baş maliyet eşiklerini anında hesaplar',
      'İndirim sonrası isteğe bağlı satış vergisi hesabı içerir',
    ],
    useCases: [
      'Ödeme öncesi katmanlı promosyon kodlarını kontrol etmek',
      'Birim maliyetten toptan veya e-ticaret perakende fiyatı belirlemek',
      'Promosyon kampanyasının marj kaybını denetlemek',
      'Hedef marj yüzdesini gereken kâr oranına çevirmek',
    ],
    faqs: [
      {
        question: 'Kâr Marjı ile Kâr Oranı arasındaki fark nedir?',
        answer:
          'Brüt Marj, kârı Satış Fiyatına böler ((Fiyat − Maliyet) / Fiyat), Kâr Oranı ise kârı Maliyete böler ((Fiyat − Maliyet) / Maliyet). Maliyeti 500 TL, satışı 1.000 TL olan bir üründe marj %50, kâr oranı %100 olur.',
      },
      {
        question: '%20 ve %10 indirim neden %30 değil %28 indirim eder?',
        answer:
          'İkinci %10 indirim, zaten %80 seviyesine düşmüş fiyata uygulanır ve orijinal fiyatın %8 kadarını daha düşürür (%20 + %8 = %28).',
      },
      {
        question: 'Satış vergisi indirimden önce mi sonra mı uygulanır?',
        answer:
          'Standart perakende vergisi, satıcı kuponları sonrası indirimli ara toplama uygulanır, bu hesaplayıcı da böyle hesaplar.',
      },
      {
        question: 'Perakende ürün için iyi bir kâr marjı nedir?',
        answer:
          'Tek bir iyi marj yoktur, sektöre, ürün türüne ve maliyetlere göre değişir. Hesaplayıcıyla marj yüzdenizi kendi hedefinizle karşılaştırın ve sonucun bir matematik çıktısı olduğunu, iş tavsiyesi olmadığını unutmayın.',
      },
      {
        question: 'Tek indirim sonrası satış fiyatını nasıl hesaplarım?',
        answer:
          'Orijinal fiyatı (1 − indirim yüzdesi) ile çarpın. %25 indirimli 800 TL ürün 800 × 0,75 = 600 TL olur.',
      },
      {
        question: 'Yüzde indirim ile sabit tutarlı kuponu birlikte kullanabilir miyim?',
        answer:
          'Bu hesaplayıcı yüzde indirimleri arka arkaya uygular. Sabit tutarlı kupon için yüzde indirim uygulandıktan sonra tutarı fiyattan çıkarın.',
      },
      {
        question: 'İndirim ve Marj Hesaplayıcı toptan fiyatlandırma için çalışır mı?',
        answer:
          'Evet. Marj moduna birim maliyetinizi ve hedef satış fiyatınızı girerek birim başına brüt kârı, marj yüzdesini ve kâr oranı yüzdesini görün.',
      },
      {
        question: 'Brüt kâr ile net kâr arasındaki fark nedir?',
        answer:
          'Brüt kâr, satış fiyatı eksi ürün maliyetidir. Net kâr ayrıca kargo, komisyon ve kira gibi genel giderleri de düşer, bu hesaplayıcı bunları dahil etmez.',
      },
      {
        question: 'Hedef marj yüzdesinden fiyat nasıl belirlenir?',
        answer:
          'Marj modunda marj yüzdesi hedefinize uyana kadar farklı satış fiyatları deneyin. Gösterilen kâr oranı yüzdesi maliyetin üzerine ne kadar eklemeniz gerektiğini söyler.',
      },
      {
        question: 'İndirim ve Marj Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir ve tamamen tarayıcınızda çalışır, hesap, yükleme veya ödeme gerekmez.',
      },
      {
        question: 'Marj yüzdem neden kâr oranı yüzdemden düşük?',
        answer:
          'Marj kârı satış fiyatına bölerken kâr oranı maliyete böler, bu yüzden aynı kâr için kâr oranı yüzdesi her zaman daha yüksek olur.',
      },
      {
        question: 'Marj %100 üzerinde olabilir mi?',
        answer:
          'Hayır. Marj, kârın satış fiyatına bölünmesidir, bu yüzden %100 seviyesini aşamaz. Kâr oranı ise %100 seviyesinin çok üzerine çıkabilir.',
      },
      {
        question: 'Satış vergisi son fiyatı nasıl etkiler?',
        answer:
          'Vergi indirimli ara toplama uygulanır, bu yüzden daha büyük indirim ödediğiniz vergiyi de düşürür. Hesaplayıcı vergi dahil son fiyatı gösterir.',
      },
      {
        question: 'Başa baş fiyat nedir?',
        answer:
          'Brüt kârın sıfır olduğu fiyattır, birim maliyetinize eşittir. Maliyetin üzerindeki her satış fiyatı pozitif marj üretir.',
      },
      {
        question: 'Bu hesaplayıcıyı indirim günleri veya sezon sonu fiyatlandırma için kullanabilir miyim?',
        answer:
          'Evet. Orijinal fiyatı ve her katmanlı indirimi girerek son fiyatı ve promosyonun bıraktığı marjı kontrol edin.',
      },
      {
        question: 'Hesaplayıcı fiyatlarımı kaydeder veya yükler mi?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve hiçbir şey yüklenmez ya da saklanmaz.',
      },
      {
        question: 'Kâr oranı yüzdesini marj yüzdesine nasıl çeviririm?',
        answer:
          'Marj yüzdesi = Kâr Oranı yüzdesi ÷ (100 + Kâr Oranı yüzdesi) × 100. Örneğin %100 kâr oranı %50 marja eşittir ve hesaplayıcı bu dönüşümü sizin için yapar.',
      },
      {
        question: 'Marj çok ince görünürse ne yapmalıyım?',
        answer:
          'Maliyet girdilerinizi yeniden kontrol edin, ardından marjın nasıl toparlandığını görmek için hesaplayıcıda daha yüksek bir satış fiyatı veya daha küçük bir indirim deneyin.',
      },
      {
        question: 'Vergi dahil fiyatta indirim hesaplayabilir miyim?',
        answer:
          'Vergi dahil tutarı orijinal fiyat olarak girin ve Vergi yüzdesini 0 yapın, böylece indirim yazdığınız tutara uygulanır.',
      },
      {
        question: '"Etkili indirim yüzdesi" ne demektir?',
        answer:
          'Tüm katmanlı indirimlerinizle aynı son fiyatı veren tek indirim yüzdesidir. Örneğin önce %20 sonra %10 indirim, etkili %28 indirime eşittir.',
      },
    ],
  },
  'vat-tax-calculator': {
    instructions: [
      {
        title: 'Vergi yönünü seçin',
        description:
          'Vergi Ekle (Netten Brüte) veya Vergi Çıkar (Brütten Nete) seçeneklerinden birini seçin.',
      },
      {
        title: 'Tutarı ve vergi oranını girin',
        description:
          'Fatura tutarını yazın ve hazır oranlardan birini (%5, %10, %15, %20) seçin ya da istediğiniz vergi yüzdesini girin.',
      },
      {
        title: 'Hazır oran veya özel oran kullanın',
        description:
          '%5, %10, %15 veya %20 hazır oranlarına dokunun ya da yerel satış verginize uyan %8,875 gibi herhangi bir ondalık oran yazın.',
      },
      {
        title: 'Hesabı anında kontrol edin',
        description:
          'Sonuçlar yazarken güncellenir, gönder düğmesi ve kayıt gerekmez.',
      },
      {
        title: 'Fatura kalemlerini okuyun',
        description:
          'Muhasebe veya teklif için Net Ara Toplam, Vergi Tutarı ve Brüt Toplam rakamlarını tam olarak kopyalayın.',
      },
      {
        title: 'Dökümü kopyalayın ve oranları karşılaştırın',
        description:
          'Net, vergi ve brüt rakamları faturanıza, teklifinize veya muhasebe tablonuza kopyalayın, ardından senaryoları karşılaştırmak için farklı bir oranla yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: 'Brüt fişten %20 KDV çıkarmak',
        input: 'Mod: Vergi Çıkar · Brüt Toplam: 1.200 TL · Oran: %20',
        output: 'Net Ara Toplam: 1.000 TL · KDV Tutarı: 200 TL',
        explanation: 'Brütü %20 ile çarpmak yerine (1 + 0,20) değerine böler ve 40 TL muhasebe hatasını önler.',
      },
      {
        title: 'Net fiyata %18 KDV eklemek',
        input: 'Mod: Vergi Ekle · Net Tutar: 1.000 TL · Oran: %18',
        output: 'Brüt Toplam: 1.180 TL · KDV Tutarı: 180 TL',
        explanation: 'Net tutarı 1,18 ile çarparak vergiyi ve brüt toplamı gösterir.',
      },
    ],
    benefits: [
      'Yaygın ters KDV hatasını önler, oran yüzdesi çıkarmak yerine (1 + oran) değerine böler',
      'Avrupa KDV, Avustralya ve Kanada GST ve ABD eyalet satış vergisi için aynı şekilde çalışır',
      'Anında hazır oran düğmeleri ve isteğe bağlı ondalık vergi yüzdeleri içerir',
      'Temiz 3 sütunlu Net, Vergi ve Brüt dökümü gösterir',
    ],
    useCases: [
      'Vergi öncesi ve vergi kalemleri açık B2B veya B2C faturalar hazırlamak',
      'KDV dahil gider fişlerini muhasebe için uzlaştırmak',
      'Uluslararası yazılım veya serbest çalışma ücretlerini KDV hariç veya dahil teklif etmek',
      'Eyalet ve belediye vergi oranlarıyla yerel perakende kasa toplamlarını kontrol etmek',
    ],
    faqs: [
      {
        question: '1.200 TL içinden %20 KDV çıkarmak neden 240 TL değil 200 TL eder?',
        answer:
          'Çünkü %20, 1.000 TL net tutara eklenmişti (1.000 TL × 1,20 = 1.200 TL). Ters çevirmek için 1.200 TL değerini 1,20 değerine bölersiniz ve 1.000 TL net tutar ile 200 TL vergi elde edersiniz.',
      },
      {
        question: '%8,875 gibi kesirli yerel satış vergisi oranlarını girebilir miyim?',
        answer:
          'Evet. Vergi Oranı alanı %7,25, %8,875 veya %21 gibi her pozitif ondalık oranı destekler.',
      },
      {
        question: 'Bu araç hem GST hem de KDV için çalışır mı?',
        answer:
          'Evet. Matematiksel olarak Katma Değer Vergisi (KDV), Mal ve Hizmet Vergisi (GST) ve yüzde satış vergisi tam olarak aynı net ve brüt formülleri kullanır.',
      },
      {
        question: 'KDV, GST ve satış vergisi arasındaki fark nedir?',
        answer:
          'Hepsi mal ve hizmetler üzerinden alınan yüzde vergilerdir. KDV ve GST genelde gösterilen fiyata dahildir, ABD satış vergisi genelde kasada eklenir. Matematik aynıdır.',
      },
      {
        question: 'Net fiyata %20 KDV nasıl eklerim?',
        answer:
          'Net fiyatı 1,20 ile çarpın. 1.000 TL net fiyat, 200 TL KDV ile 1.200 TL brüt olur.',
      },
      {
        question: 'KDV dahil fiyattan KDV nasıl çıkarılır?',
        answer:
          'Brüt fiyatı (1 + oran) değerine bölün. %20 KDV ile 1.200 TL ÷ 1,20 = 1.000 TL net ve 200 TL vergi olur, 240 TL değil.',
      },
      {
        question: 'KDV ve Vergi Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir ve tamamen tarayıcınızda çalışır, hesap veya yükleme gerekmez.',
      },
      {
        question: 'Bu hesaplayıcıyı Türkiye KDV oranları için kullanabilir miyim?',
        answer:
          'Evet. Vergi Ekle veya Vergi Çıkar modunu seçin, tutarınızı girin ve %1, %10 veya %20 gibi Türkiye KDV oranını özel oran olarak yazın.',
      },
      {
        question: 'Ülkem için hangi KDV oranını kullanmalıyım?',
        answer:
          'Oranlar ülkeye ve ürün türüne göre değişir, bu yüzden yerel vergi dairenizin güncel oranını kontrol edip özel oran olarak girin. Hesaplayıcı vergi tavsiyesi vermez.',
      },
      {
        question: 'Hesaplayıcı sıfır oranlı veya vergiden muaf kalemleri işler mi?',
        answer:
          'Evet. %0 oranı girin, net ve brüt tutarlar aynı olur.',
      },
      {
        question: 'Vergi dahil fiyat nedir?',
        answer:
          'Vergiyi zaten içeren fiyattır, çoğu Avrupa fişinde böyle gösterilir. Vergi Çıkar modu bunu net ve vergi olarak ayırır.',
      },
      {
        question: 'Vergi hariç fiyat nedir?',
        answer:
          'Vergi eklenmeden önceki fiyattır, ABD mağazalarında yaygındır. Vergi Ekle modu müşterinizin ödediği brüt toplamı gösterir.',
      },
      {
        question: 'Kısmi iade için KDV hesaplayabilir miyim?',
        answer:
          'Evet. İade tutarını brüt veya net tutar olarak girin ve orijinal satışta kullanılan aynı oranla vergi çıkarın veya ekleyin.',
      },
      {
        question: 'Faturada KDV nasıl gösterilir?',
        answer:
          'Hesaplayıcının üç rakamını ayrı satırlar olarak kullanın: Net Ara Toplam, Vergi Tutarı ve Brüt Toplam, böylece müşteri dökümü açıkça görür.',
      },
      {
        question: 'Bu hesaplayıcı fatura tutarlarımı saklar mı?',
        answer:
          'Hayır. Her şey tarayıcınızda yerel olarak hesaplanır ve hiçbir şey yüklenmez ya da kaydedilmez.',
      },
      {
        question: '%7,25 veya %8,875 gibi ondalık oranları kullanabilir miyim?',
        answer:
          'Evet. Oran alanı her pozitif ondalık yüzdeyi kabul eder, bu yüzden %7,25 veya %8,875 gibi oranlar vergiyi ve toplamı tam olarak hesaplar.',
      },
      {
        question: 'Fişim yalnızca brüt toplamı gösteriyorsa ne yapmalıyım?',
        answer:
          'Brüt toplam ve yerel oranınızla Vergi Çıkar modunu kullanarak net tutarı ve vergi tutarını geri çıkarın.',
      },
      {
        question: 'Kargo veya teslimat ücretine KDV uygulanır mı?',
        answer:
          'Bu yerel vergi kurallarına bağlıdır. Sizin durumunuzda uygulanıyorsa kargo tutarını vergi eklemeden önce net tutara dahil edin.',
      },
      {
        question: 'Tedarikçinin KDV hesabını nasıl kontrol ederim?',
        answer:
          'Tedarikçinin brüt toplamını belirtilen oranla Vergi Çıkar moduna girin ve net tutarı tedarikçinin faturasıyla karşılaştırın.',
      },
      {
        question: 'Avustralya veya Kanada için GST hesaplayabilir miyim?',
        answer:
          'Evet. GST, KDV ile aynı net ve brüt formülleri kullanır, bu yüzden tutarınızı ve yerel GST oranını girin. Örneğin Avustralya için %10 veya Kanada federal GST için %5.',
      },
    ],
  },
  'salary-calculator': {
    instructions: [
      {
        title: 'Temel ücreti ve ödeme dönemini girin',
        description:
          'Ücret tutarınızı yazın ve bu tutarın Saatlik, Günlük, Haftalık, İki Haftalık, Aylık veya Yıllık olduğunu seçin.',
      },
      {
        title: 'Çalışma düzeni varsayımlarını ayarlayın',
        description:
          'Haftalık Saat (varsayılan 40), Haftalık Gün (varsayılan 5) ve Yıllık Ücretli Hafta (varsayılan 52 veya ücretsiz izin için daha az) değerlerini belirleyin.',
      },
      {
        title: 'Yarı zamanlı çalışma için saat veya haftayı değiştirin',
        description:
          'Yarı zamanlı düzenleri, 4 günlük haftayı veya ücretsiz izni modellemek için Haftalık Saat veya Yıllık Ücretli Hafta değerini düşürün.',
      },
      {
        title: 'Sonuçların anında güncellendiğini görün',
        description:
          'Her ödeme dönemi yazarken yeniden hesaplanır, düğmeye basmak ve kayıt olmak gerekmez.',
      },
      {
        title: 'Tüm ödeme dönemlerini karşılaştırın',
        description:
          'Toplam yıllık çalışma saati dahil her brüt karşılık satırını aynı anda inceleyin.',
      },
      {
        title: 'Rakamları kopyalayın ve teklifleri karşılaştırın',
        description:
          'Saatlik, aylık veya yıllık brüt tutarı iş teklifi karşılaştırmasına, bütçeye veya pazarlık notuna kopyalayın, ardından teklifleri yan yana karşılaştırmak için girdileri değiştirin.',
      },
    ],
    examples: [
      {
        title: 'Standart tam zamanlı saatlikten yıllığa dönüşüm',
        input: 'Ücret: 450 TL Saatlik · 40 saat/hafta · 52 hafta/yıl (2.080 saat)',
        output: 'Yıllık: 936.000 TL · Aylık: 78.000 TL · İki Haftalık: 36.000 TL · Haftalık: 18.000 TL',
        explanation: 'Standart 2.080 yıllık tam zamanlı çalışma saati kullanılır.',
      },
      {
        title: 'Yarı zamanlı 4 günlük hafta hesabı',
        input: 'Ücret: 600.000 TL Yıllık · 32 saat/hafta · 4 gün/hafta · 48 ücretli hafta',
        output: 'Saatlik: 390,63 TL · Aylık: 50.000 TL · Haftalık: 12.500 TL',
        explanation: 'Ücretsiz izin için ücretli hafta 52 yerine 48 alınır.',
      },
    ],
    benefits: [
      'Yalnızca saatlik veya yıllık değil, her ödeme sıklığından çift yönlü dönüşüm yapar',
      'Özel ücretli hafta ayarıyla ücretsiz tatil veya serbest çalışan boş zamanını hesaba katar',
      'Ayda iki kez (yılda 24 kez) ile iki haftada bir (yılda 26 kez) ödeme farkını açıkça gösterir',
      'Bölgeye özel vergi tahmini yapmadan brüt ücreti bildirir',
    ],
    useCases: [
      'Saatlik sözleşme teklifini tam zamanlı yıllık maaşla karşılaştırmak',
      'Yıllık maaş tekliflerini aylık ve iki haftalık ev bütçesine çevirmek',
      'Ücretsiz izinleri serbest çalışan yıllık gelir tahminine katmak',
      'Yarı zamanlı 24 saatlik veya 32 saatlik çalışma haftasının yıllık ücretini hesaplamak',
    ],
    faqs: [
      {
        question: 'İki haftalık ve ayda iki kez ödemeler neden farklı tutarlardır?',
        answer:
          'İki haftalık ödeme yılda 26 maaş çeki verir (2 haftada bir), ayda iki kez ödeme ise yılda 24 maaş çeki verir (ayda iki kez). Aynı yıllık maaş için ayda iki kez çekler dönem başına biraz daha büyüktür.',
      },
      {
        question: 'Bu araç gelir vergisi sonrası net ücreti hesaplar mı?',
        answer:
          'Hayır. Gelir vergisi, maaş kesintileri ve sosyal katkılar ülkeye, eyalete, beyan durumuna ve kesintilere göre çok değişir, bu yüzden hesaplayıcı kesin brüt ücreti bildirir.',
      },
      {
        question: 'Serbest çalışanlar ücretsiz tatil ve izinleri nasıl hesaba katmalı?',
        answer:
          'Ücretsiz izni hesaba katan gerçekçi yıllık brüt gelirinizi görmek için "Yıllık Ücretli Hafta" değerini 52 seviyesinden 48 veya 49 seviyesine düşürün.',
      },
      {
        question: 'Saatte 250 TL ücreti yıllık maaşa nasıl çeviririm?',
        answer:
          'Haftada 40 saat ve yılda 52 hafta (2.080 saat) ile saatte 250 TL, yılda 520.000 TL brüt eder. Tam tutarınız için kendi saatlerinizi girin.',
      },
      {
        question: 'Maaş Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir ve tamamen tarayıcınızda çalışır, hesap veya yükleme gerekmez.',
      },
      {
        question: 'Maaş Hesaplayıcı vergi sonrası net ücreti gösterir mi?',
        answer:
          'Hayır. Yalnızca brüt ücret gösterir, çünkü gelir vergisi ve kesintiler ülkeye, eyalete ve kişisel duruma göre değişir.',
      },
      {
        question: 'Brüt ücret ile net ücret arasındaki fark nedir?',
        answer:
          'Brüt ücret, vergi ve kesintiler öncesi kazancınızdır. Net ücret, bunlardan sonra kalan tutardır. Bu hesaplayıcı brüt ücreti bildirir.',
      },
      {
        question: 'Standart tam zamanlı çalışma yılında kaç saat vardır?',
        answer:
          '2.080 saat: haftada 40 saat çarpı 52 hafta. Hesaplayıcı bunu varsaymak yerine kendi haftalık saat ayarınızı kullanır.',
      },
      {
        question: 'Saatlik sözleşme oranını maaşlı teklifle karşılaştırabilir miyim?',
        answer:
          'Evet. Saatlik ücreti girin ve yıllık brüt tutarını maaş teklifiyle karşılaştırın. Yan hakların ve ücretli iznin farklı olduğunu unutmayın.',
      },
      {
        question: 'Serbest çalışan olarak ücretsiz tatili nasıl hesaba katarım?',
        answer:
          '"Yıllık Ücretli Hafta" değerini 52 seviyesinden ücret aldığınız hafta sayısına, örneğin 48 veya 49 seviyesine düşürün.',
      },
      {
        question: 'Ayda iki kez ödeme nedir?',
        answer:
          'Ayda iki kez, yılda 24 kez verilen ücrettir, genelde ayın 1 ve 15 gibi sabit tarihlerde. Yılda 26 kez verilen iki haftalık ödemeden farklıdır.',
      },
      {
        question: 'İki haftalık maaş çekim ayda iki kez çekten neden daha küçük?',
        answer:
          'Aynı yıllık maaş 24 yerine 26 iki haftalık çeke bölündüğü için her iki haftalık çek biraz daha küçüktür.',
      },
      {
        question: '4 günlük çalışma haftası için ücret hesaplayabilir miyim?',
        answer:
          'Evet. Haftalık Gün değerini 4 ve Haftalık Saat değerini 32 (veya gerçek saatinizi) yapın, hesaplayıcı oranı tüm dönemlere çevirir.',
      },
      {
        question: 'Fazla mesai ücreti dahil edilir mi?',
        answer:
          'Hayır. Hesaplayıcı tek bir temel ücreti çevirir. Farklı oranlı fazla mesai ayrı bir hesaplama gerektirir.',
      },
      {
        question: 'Aylık maaşı saatlik ücrete nasıl çeviririm?',
        answer:
          'Aylık tutarı girin, ödeme dönemi olarak Aylık seçin ve saatlik tutarı okuyun. Haftalık saatinize ve yıllık ücretli haftanıza böler.',
      },
      {
        question: 'Hesaplayıcı maaş bilgilerimi kaydeder mi?',
        answer:
          'Hayır. Tüm rakamlar tarayıcınızda kalır ve hiçbir şey yüklenmez ya da saklanmaz.',
      },
      {
        question: 'Yıl içinde ücretim değişirse ne girmeliyim?',
        answer:
          'Her oranı ayrı ayrı hesaplayın ya da kabaca yıllık tahmin için iki oranın ağırlıklı ortalamasını kullanın.',
      },
      {
        question: 'Bu hesaplayıcıyı yarı zamanlı veya geçici iş için kullanabilir miyim?',
        answer:
          'Evet. Haftalık saat ve haftalık gün değerlerini yarı zamanlı düzeninize uyacak şekilde ayarlayın.',
      },
      {
        question: 'Farklı ödeme dönemli iki iş teklifini nasıl karşılaştırırım?',
        answer:
          'Her teklifin oranını ve ödeme dönemini girin, ardından aynı saat ve hafta ayarlarıyla yıllık brüt tutarları yan yana karşılaştırın.',
      },
      {
        question: 'Hesaplayıcı prim veya komisyonu dahil eder mi?',
        answer:
          'Hayır. Yalnızca temel ücreti çevirir. Daha tam bir tablo için prim veya komisyonu yıllık tutara ayrıca ekleyin.',
      },
    ],
  },
  'tip-calculator': {
    instructions: [
      {
        title: 'Hesap ara toplamını ve kişi sayısını girin',
        description:
          'Hesap Tutarını, dahilse isteğe bağlı Satış Vergisi Tutarını ve hesabı paylaşan Kişi Sayısını girin.',
      },
      {
        title: 'Bahşiş yüzdesini seçin',
        description:
          'Hazır oranlardan birine (%10, %15, %18, %20, %25) dokunun ya da istediğiniz özel bahşiş yüzdesini girin.',
      },
      {
        title: 'Vergiyi bahşiş tabanından çıkarın',
        description:
          'Hesabınız satış vergisi içeriyorsa vergi tutarını girin, böylece bahşiş vergi öncesi ara toplam üzerinden hesaplanır.',
      },
      {
        title: 'Toplamları anında kontrol edin',
        description:
          'Bahşiş, toplam hesap ve kişi başı tutarlar yazarken güncellenir, düğmeye basmak gerekmez.',
      },
      {
        title: 'İsteğe bağlı yuvarlama ve bölüşme',
        description:
          'Kişi başı en yakın liraya yuvarlamayı etkinleştirin ve her misafirin payını inceleyin.',
      },
      {
        title: 'Paylaşımı kopyalayın veya paylaşın',
        description:
          'Her kişinin payını kopyalayıp gruba gönderin ya da kişi başı toplamın nasıl değiştiğini görmek için bahşiş yüzdesini değiştirin.',
      },
    ],
    examples: [
      {
        title: '4 kişilik grup akşam yemeği bölüşmesi',
        input: 'Hesap: 1.600 TL · Bahşiş: %20 · Kişi: 4',
        output: 'Bahşiş: 320 TL · Toplam: 1.920 TL · Kişi Başı: 480 TL',
        explanation: '%20 bahşiş (320 TL) eklenir ve 1.920 TL 4 misafire eşit bölünür.',
      },
      {
        title: 'Vergi hariç %15 bahşiş',
        input: 'Hesap: 1.000 TL · Vergi: 180 TL · Bahşiş: %15 · Kişi: 2',
        output: 'Bahşiş: 150 TL · Toplam: 1.330 TL · Kişi Başı: 665 TL',
        explanation: 'Bahşiş vergi öncesi 1.000 TL üzerinden hesaplanır, vergi dahil toplam üzerinden değil.',
      },
    ],
    benefits: [
      'Satış vergisi belirtildiğinde vergi öncesi ara toplam üzerinden bahşişi destekler',
      'Kişi Başı Bahşiş ve Kişi Başı Toplam tutarlarını açıkça gösterir',
      'Tek dokunuşla mobil restoran kullanımı için hızlı hazır düğmeler içerir',
      'İsteğe bağlı yuvarlama, etkili bahşişi şeffaf biçimde ayarlar',
    ],
    useCases: [
      'Zor zihinsel matematik olmadan grup restoran yemeklerini bölüşmek',
      'Teslimat, araç çağırma veya kuaför hizmeti bahşişlerini hesaplamak',
      'Kalem kalem fişlerde vergi öncesi tam %18 veya %20 bahşişi kontrol etmek',
      'Paylaşılan grup seyahat veya etkinlik hesaplarını eşit bölmek',
    ],
    faqs: [
      {
        question: 'Bahşiş vergi öncesi mi yoksa vergi sonrası hesap üzerinden mi verilmelidir?',
        answer:
          'Görgü kuralları geleneksel olarak bahşişi vergi öncesi ara toplam üzerinden hesaplar. Hesaplayıcının vergiyi bahşiş tabanından çıkarmasını istiyorsanız hesap vergi tutarını Vergi alanına girin.',
      },
      {
        question: 'Hesabı 1 kişiyle bölüşürsem ne olur?',
        answer:
          'Kişi sayısı 1 olduğunda Kişi Başı tutar, Bahşiş ve Toplam Hesap ile doğrudan aynı olur.',
      },
      {
        question: 'Kişi başı yuvarlama nasıl çalışır?',
        answer:
          'Etkinleştirildiğinde her kişinin toplam payı bir sonraki tam liraya yuvarlanır ve hesaplayıcı ortaya çıkan etkili bahşiş yüzdesini gösterir.',
      },
      {
        question: 'Restoranda ne kadar bahşiş vermeliyim?',
        answer:
          'Yaygın bahşiş aralıkları ABD masa servisi için %15 ile %20 arasındadır, ancak gelenekler ülkeye ve hizmet kalitesine göre değişir. Hesaplayıcı yalnızca matematiği yapar.',
      },
      {
        question: '%20 bahşişi hızlıca nasıl hesaplarım?',
        answer:
          'Hesabın %10 değerini bulmak için virgülü bir basamak sola kaydırın, sonra ikiyle çarpın. 600 TL hesapta %10 değer 60 TL olur, yani %20 değer 120 TL olur.',
      },
      {
        question: 'Bahşiş Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir ve tamamen tarayıcınızda çalışır, hesap veya yükleme gerekmez.',
      },
      {
        question: 'Vergi dahil toplam üzerinden bahşiş vermeli miyim?',
        answer:
          'Geleneksel olarak bahşiş vergi öncesi ara toplam üzerinden hesaplanır. Vergiyi bahşiş tabanından çıkarmak için vergi tutarını Vergi alanına girin.',
      },
      {
        question: 'Yemek teslimatı için iyi bir bahşiş nedir?',
        answer:
          'Teslimat bahşiş gelenekleri bölgeye ve sipariş büyüklüğüne göre değişir. Karar verdiğiniz tutara uymak için hesaplayıcıya istediğiniz özel yüzdeyi girin.',
      },
      {
        question: 'Herkes farklı tutar sipariş ettiğinde hesabı nasıl bölerim?',
        answer:
          'Bu hesaplayıcı eşit böler. Eşit olmayan paylar için her kişinin bahşişini kendi ara toplamı üzerinden ayrı hesaplayın.',
      },
      {
        question: '%17 gibi özel bir bahşiş yüzdesi verebilir miyim?',
        answer:
          'Evet. Hazır oranları kullanmak yerine özel bahşiş alanına istediğiniz yüzdeyi yazın.',
      },
      {
        question: 'Kişi başı tutar neleri içerir?',
        answer:
          'Her kişinin hesap payı artı bahşiş payı. Yuvarlama açıkken bir sonraki tam liraya yuvarlanır.',
      },
      {
        question: 'Yuvarlama etkili bahşişi nasıl değiştirir?',
        answer:
          'Her kişinin payını yukarı yuvarlamak bahşişin üzerine küçük bir tutar ekler, bu yüzden hesaplayıcı ortaya çıkan etkili bahşiş yüzdesini gösterir.',
      },
      {
        question: 'Bahşiş Hesaplayıcıyı kuaför veya taksi bahşişi için kullanabilir miyim?',
        answer:
          'Evet. Hizmet toplamını ve seçtiğiniz bahşiş yüzdesini girin, aynı matematik her bahşişli hizmet için geçerlidir.',
      },
      {
        question: 'Hesaplayıcı hesap tutarlarımı kaydeder mi?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak yapılır ve hiçbir şey yüklenmez ya da saklanmaz.',
      },
      {
        question: 'Hesap zaten servis ücreti içeriyorsa ne olur?',
        answer:
          'Servis ücretinin bahşiş olup olmadığını kontrol edin. Öyleyse ek bahşişe gerek olmayabilir ve bahşişsiz bölüşmeyi görmek için %0 girebilirsiniz.',
      },
      {
        question: 'Tek sayılı toplamı 3 kişi arasında nasıl bölerim?',
        answer:
          'Hesabı, bahşiş yüzdesini ve 3 kişiyi girin. Hesaplayıcı toplamı eşit böler ve her kişinin tam payını gösterir.',
      },
      {
        question: 'Yalnızca toplamı biliyorsam vergiden önce bahşiş hesaplayabilir miyim?',
        answer:
          'Vergiden önce bahşiş için vergi tutarına veya vergi öncesi ara toplama ihtiyacınız vardır. Fiş yalnızca toplamı gösteriyorsa tam toplamı bahşiş tabanı olarak kullanın.',
      },
      {
        question: 'Hazır oranlar hangi bahşiş yüzdelerini kapsar?',
        answer:
          'Hızlı hazır oranlar %10, %15, %18, %20 ve %25 seviyeleridir ve başka bir yüzdeyi özel değer olarak girebilirsiniz.',
      },
      {
        question: 'Hesabı eşit bölmek kaba mıdır?',
        answer:
          'Bu gruba ve herkesin ne sipariş ettiğine bağlıdır. Hesaplayıcı yalnızca eşit bölüşme matematiğini anında yapar.',
      },
      {
        question: 'Büyük bir grup hesabında bahşişi nasıl hesaplarım?',
        answer:
          'Tam hesap toplamını ve misafir sayısını girin. Hesaplayıcı bahşişi, toplamı ve her kişinin borcunu gösterir.',
      },
    ],
  },
  'bmi-calculator': {
    instructions: [
      {
        title: 'Birim sistemini seçin',
        description:
          'Metrik (cm ve kg) ile İngiliz (fit, inç ve libre) arasında geçiş yapın.',
      },
      {
        title: 'Boy ve kilonuzu girin',
        description:
          'Güncel boyunuzu ve vücut ağırlığınızı doğrulanan alanlara yazın.',
      },
      {
        title: 'Birimlerinizi iki kez kontrol edin',
        description:
          'Santimetrenin kilogramla, fit ve inç ölçüsünün libreyle uyuştuğundan emin olun, yoksa sonuç yanlış olur.',
      },
      {
        title: 'VKİ değerinizi anında görün',
        description:
          'Puan, Dünya Sağlık Örgütü kategorisi ve sağlıklı kilo aralığı yazarken güncellenir, düğmeye basmak gerekmez.',
      },
      {
        title: 'VKİ ve bağlamı inceleyin',
        description:
          'VKİ puanınızı, Dünya Sağlık Örgütü kategorinizi ve boyunuza karşılık gelen sağlıklı kilo aralığını inceleyin.',
      },
      {
        title: 'Sonucunuzu not edin veya paylaşın',
        description:
          'VKİ değerinizi ve sağlıklı kilo aralığınızı kopyalayıp zaman içinde takip edin ya da bir hekimle görüşün. Kilonuz değiştiğinde yeni ölçümleri yeniden girin.',
      },
    ],
    examples: [
      {
        title: 'Metrik yetişkin VKİ kontrolü',
        input: 'Boy: 175 cm · Kilo: 70 kg',
        output: 'VKİ: 22,9 kg/m² · Dünya Sağlık Örgütü Kategorisi: Normal kilo (56,7 – 76,3 kg)',
        explanation: '70 / (1,75 × 1,75) = 22,86 kg/m² olarak hesaplanır.',
      },
      {
        title: 'İngiliz birimli VKİ kontrolü',
        input: 'Boy: 5 fit 9 inç · Kilo: 154 libre',
        output: 'VKİ: 22,7 kg/m² · Dünya Sağlık Örgütü Kategorisi: Normal kilo',
        explanation: 'İngiliz formülü (libre × 703) / inç² değerini kullanır.',
      },
    ],
    benefits: [
      'Metrik ile ABD İngiliz ölçüleri arasında anında geçişi destekler',
      'Boyunuz için tam 18,5 ile 24,9 kg/m² sağlıklı kilo aralığını hesaplar',
      'Kas kütlesi ve vücut kompozisyonuyla ilgili açık klinik sınırlama notları içerir',
      'Sıfır sağlık verisi depolamasıyla tarayıcı belleğinde gizli çalışır',
    ],
    useCases: [
      'Hızlı yetişkin kilo boy tarama kontrolleri',
      'Belirli bir boy için hedef sağlıklı kilo aralığını bulmak',
      'Günlük kalori ve toplam enerji harcaması planlamasıyla birlikte kullanmak',
      'İngiliz boy ve kilo ölçümlerini standart kg/m² VKİ değerine çevirmek',
    ],
    faqs: [
      {
        question: 'Vücut Kitle İndeksi formülü nedir?',
        answer:
          'VKİ, kilogram olarak ağırlığın metre olarak boyun karesine bölünmesine eşittir: ağırlık (kg) / boy (m)². İngiliz birimlerde bu, (ağırlık (libre) × 703) / boy (inç)² değerine eşittir.',
      },
      {
        question: 'VKİ sporcular veya yaşlı yetişkinler için doğru sonuç verir mi?',
        answer:
          'VKİ, nüfus düzeyinde bir tarama oranıdır ve yağsız kas kütlesi ile yağ dokusunu ayırt etmez. Çok kaslı sporcular düşük vücut yağına rağmen fazla kilolu bandında çıkabilir, çocuklar ve gençler ise yaş ve cinsiyet yüzdeliklerine ihtiyaç duyar.',
      },
      {
        question: 'Sağlık bilgilerim bir yere kaydedilir mi?',
        answer:
          'Hayır. Tüm ölçümler yalnızca aktif tarayıcı sekmenizde kalır ve sekme kapatıldığında kaybolur.',
      },
      {
        question: 'Sağlıklı VKİ aralığı nedir?',
        answer:
          'Dünya Sağlık Örgütü yetişkinler için 18,5 ile 24,9 kg/m² aralığını normal kilo olarak tanımlar. 18,5 altı zayıf, 25 ile 29,9 arası fazla kiloludur.',
      },
      {
        question: 'VKİ Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir ve tamamen tarayıcınızda çalışır, hesap veya yükleme gerekmez.',
      },
      {
        question: 'Dünya Sağlık Örgütü VKİ kategorileri nelerdir?',
        answer:
          'Zayıf 18,5 altı, normal kilo 18,5 ile 24,9 arası, fazla kilo 25 ile 29,9 arası, obezite 30 ve üzeridir.',
      },
      {
        question: 'Libre ve inç ile VKİ nasıl hesaplarım?',
        answer:
          '(Libre olarak ağırlık × 703) ÷ (inç olarak boy)² formülünü kullanın. Hesaplayıcı bunu İngiliz modunda otomatik yapar.',
      },
      {
        question: 'Kilogram ve santimetre ile VKİ nasıl hesaplarım?',
        answer:
          'Kilogram olarak ağırlığı metre olarak boyun karesine bölün. Hesaplayıcı santimetrenizi sizin için metreye çevirir.',
      },
      {
        question: 'VKİ herkes için doğru mudur?',
        answer:
          'Hayır. VKİ kas ile yağı ayırt etmeyen bir tarama oranıdır, bu yüzden çok kaslı kişiler, yaşlı yetişkinler ve çocuklar farklı değerlendirmelere ihtiyaç duyar.',
      },
      {
        question: 'Çocuklar bu VKİ Hesaplayıcıyı kullanabilir mi?',
        answer:
          'Hayır. Çocuk VKİ değeri yaş ve cinsiyet yüzdelik tablolarıyla yorumlanır, yetişkin Dünya Sağlık Örgütü bantlarıyla değil, bu yüzden bu araç yalnızca yetişkinler içindir.',
      },
      {
        question: 'Sağlıklı kilo aralığım nedir?',
        answer:
          'Hesaplayıcı boyunuz için 18,5 ile 24,9 VKİ veren kilo aralığını gösterir. Örneğin 175 cm boyda yaklaşık 56,7 ile 76,3 kg arasıdır.',
      },
      {
        question: 'VKİ değerimi ne sıklıkla kontrol etmeliyim?',
        answer:
          'Ara sıra yeterlidir, örneğin kilo değişikliklerini takip ederken aylık. VKİ bir tarama sayısıdır, günlük sağlık kararı değildir.',
      },
      {
        question: 'VKİ vücut yağ yüzdesini ölçer mi?',
        answer:
          'Hayır. VKİ yalnızca ağırlığı boyla ilişkilendirir ve ağırlığınızın ne kadarının yağ, ne kadarının kas veya kemik olduğunu söyleyemez.',
      },
      {
        question: 'VKİ değerim fazla kilo aralığındaysa ne yapmalıyım?',
        answer:
          'Bunu beslenme, hareket ve genel sağlığınıza bir hekimle bakmak için bir uyarı sayın. Tek bir VKİ sayısı tanı değildir.',
      },
      {
        question: 'Hamileyken VKİ kullanabilir miyim?',
        answer:
          'Hayır. Hamilelik ağırlığı VKİ değerinin hesaba katmadığı biçimde değiştirir, bu yüzden standart kategoriler uygulanmaz.',
      },
      {
        question: 'Boy ve kilo verilerim bir yere kaydedilir mi?',
        answer:
          'Hayır. Ölçümleriniz tarayıcı sekmenizde kalır ve sekmeyi kapattığınızda kaybolur.',
      },
      {
        question: 'Hesaplayıcı neden boyu fit ve inç olarak ister?',
        answer:
          'İngiliz modu fit ve inç kabul eder, çünkü ABD de boy genelde böyle ölçülür. Metrik mod bunun yerine santimetre kullanır.',
      },
      {
        question: 'VKİ ile BMR arasındaki fark nedir?',
        answer:
          'VKİ ağırlığı boyla ilişkilendirir, BMR (bazal metabolizma hızı) ise vücudunuzun dinlenirken yaktığı kaloriyi tahmin eder. Farklı şeyler ölçerler.',
      },
      {
        question: 'Sporcular yüksek VKİ değerine sahip olup sağlıklı olabilir mi?',
        answer:
          'Evet. Kas yoğundur, bu yüzden çok kaslı bir sporcu düşük vücut yağına rağmen VKİ değerinde fazla kilolu çıkabilir. Araç bu sınırlamayı belirtir.',
      },
      {
        question: 'VKİ sonucu ne kadar doğrudur?',
        answer:
          'Matematik girdiğiniz sayılar için kesindir, ancak sonuç boy ve kilo ölçümleriniz kadar doğrudur.',
      },
    ],
  },
  'calorie-calculator': {
    instructions: [
      {
        title: 'Birimleri ve profili seçin',
        description:
          'Metrik veya İngiliz birimleri, erkek veya kadın biyolojik referans sabitlerini seçin, yaş, boy ve kilonuzu girin.',
      },
      {
        title: 'Haftalık aktivite düzeyinizi seçin',
        description:
          'Gerçek rutininizi yansıtan aktivite çarpanını Hareketsiz (1,2 kat) ile Çok Aktif (1,9 kat) arasında seçin.',
      },
      {
        title: 'Kilo hedefinizi belirleyin',
        description:
          'Hedefinize uyan günlük kalori hedefini görmek için kilo koruma, hafif açık, standart yağ kaybı veya yağsız kilo alımı seçeneklerinden birini seçin.',
      },
      {
        title: 'Günlük kalori hedeflerini inceleyin',
        description:
          'Koruma toplam enerji harcaması, hafif ve standart kilo kaybı açıkları, yağsız kilo alımı fazlası ve referans makro gramlarını karşılaştırın.',
      },
      {
        title: 'Makro gram hedeflerinizi kontrol edin',
        description:
          'Seçtiğiniz kalori hedefi için protein, karbonhidrat ve yağ gram referanslarını okuyun ve beslenmenize göre ayarlayın.',
      },
      {
        title: 'Sayılarınızı kaydedin ve yeniden kontrol edin',
        description:
          'Hedeflerinizi not edin, kilonuz veya aktiviteniz değişirse hesabı yeniden çalıştırın ve alımınızı ayarlamadan önce 2 ile 3 hafta gerçek kilo eğilimlerini takip edin.',
      },
    ],
    examples: [
      {
        title: 'Orta düzeyde aktif yetişkin koruma kontrolü',
        input: 'Erkek · 30 yaş · 175 cm · 72 kg · Orta Düzeyde Aktif (1,55 kat)',
        output: 'BMR: 1.669 kcal · Koruma Toplam Enerji: 2.587 kcal/gün · Haftada -0,5 kg Kayıp: 2.087 kcal/gün',
        explanation: 'Mifflin-St Jeor BMR değeri 1,55 aktivite katsayısıyla çarpılır ve haftada yaklaşık 0,5 kg kayıp için 500 kcal çıkarılır.',
      },
      {
        title: 'Hafif açıkla kilo kaybı hedefi',
        input: 'Kadın · 28 yaş · 165 cm · 65 kg · Hafif Aktif (1,375 kat)',
        output: 'BMR: 1.380 kcal · Koruma Toplam Enerji: 1.898 kcal/gün · Hafif Kayıp: 1.648 kcal/gün',
        explanation: 'Günde 250 kcal açık, haftada yaklaşık 0,25 kg kaybı hedefler.',
      },
    ],
    benefits: [
      'Yaygın kabul gören Mifflin-St Jeor BMR tahmin formülünü kullanır',
      'Güvenlik farkındalığı için açık tahminlerinde 1.200 kcal alt sınır uyarısı verir',
      'Dengeli protein, karbonhidrat ve yağ gram referansları verir',
      'Hem metrik (cm ve kg) hem de ABD İngiliz (fit, inç ve libre) birimlerini destekler',
    ],
    useCases: [
      'Beslenme takibi için gerçekçi başlangıç günlük kalori bütçeleri belirlemek',
      'Aktivite düzeyleri arasında enerji harcaması değişikliklerini tahmin etmek',
      'Koruma kalorisini günlük protein, karbonhidrat ve yağ gramlarına çevirmek',
      'Sürdürülemez şok diyetler yerine kademeli 250 ile 500 kcal açıklar planlamak',
    ],
    faqs: [
      {
        question: 'Bu hesaplayıcı neden Mifflin-St Jeor denklemini kullanır?',
        answer:
          'Beslenme araştırmaları, Mifflin-St Jeor denklemini yaş, cinsiyet, boy ve kilodan dinlenme enerji harcamasını tahmin eden en doğru genel nüfus formüllerinden biri olarak sıralar.',
      },
      {
        question: 'Aktivite çarpanları ne kadar doğrudur?',
        answer:
          'Aktivite çarpanları kanıta dayalı bir başlangıç tahmini sunar. Vücut ağırlığı eğilimlerini 2 ile 3 hafta takip edin ve gerçek ilerlemeye göre günlük alımı 100 ile 200 kcal ayarlayın.',
      },
      {
        question: 'Bu tıbbi veya klinik beslenme tavsiyesi midir?',
        answer:
          'Hayır. Tahminler bilgilendirme amaçlı yaklaşık değerlerdir. Kişisel tıbbi beslenme rehberliği için bir hekime veya kayıtlı diyetisyene danışın.',
      },
      {
        question: 'BMR nedir ve toplam enerji harcamasından nasıl farklıdır?',
        answer:
          'BMR, vücudunuzun tam dinlenmede temel işlevleri sürdürmek için kullandığı enerjidir. Toplam enerji harcaması, günlük hareket ve egzersizle yaktığınız kalorileri BMR değerinize ekler.',
      },
      {
        question: 'Kalori Hesaplayıcı yaşımı, boyumu ve kilomu ne yapar?',
        answer:
          'Bunları Mifflin-St Jeor denklemine sokarak BMR değerinizi tahmin eder, ardından aktivite düzeyinizle çarparak toplam enerji harcamanızı ve günlük kalori hedeflerinizi tahmin eder.',
      },
      {
        question: 'Kalori Hesaplayıcıda doğru aktivite düzeyini nasıl seçerim?',
        answer:
          'En yoğun gününüze değil, tipik bir haftanıza uyan düzeyi seçin. Masa başı çalışıp haftada birkaç kez egzersiz yapan çoğu kişi Hafif veya Orta Düzeyde Aktif grubuna girer.',
      },
      {
        question: 'Kilo kaybı için güvenli kalori açığı nedir?',
        answer:
          'Yaygın bir başlangıç noktası günde 250 ile 500 kcal açıktır, bu haftada yaklaşık 0,25 ile 0,5 kg kademeli kaybı hedefler. Daha büyük açıklar bir sağlık uzmanıyla görüşülmelidir.',
      },
      {
        question: 'Yağsız kilo almak için kaç kalori yemeliyim?',
        answer:
          'Araç, koruma toplam enerji harcamanızın üzerinde bir yağsız kilo alımı fazlasını başlangıç hedefi olarak gösterir. Kilonuzu birkaç hafta takip edin ve gerçek değişime göre fazlayı artırın veya azaltın.',
      },
      {
        question: 'Kalori Hesaplayıcı neden 1.200 kcal alt sınır uyarısı gösterir?',
        answer:
          'Çok düşük kalori hedefleri güvensiz olabilir ve sürdürülmesi zor olabilir, bu yüzden araç 1.200 kcal altına düşen açıkları güvenlik farkındalığı için işaretler.',
      },
      {
        question: 'Kalori Hesaplayıcının gösterdiği makro hedefler nelerdir?',
        answer:
          'Seçtiğiniz günlük kalori hedefine ulaşan protein, karbonhidrat ve yağ referans gram miktarlarıdır. Reçete edilen bir diyet değil, başlangıç dağılımıdır.',
      },
      {
        question: 'Kalori Hesaplayıcı metrik ve İngiliz birimleriyle çalışır mı?',
        answer:
          'Evet. Boy ve kiloyu santimetre ve kilogram ya da fit, inç ve libre olarak girebilirsiniz, sonuçlar aynı olur.',
      },
      {
        question: 'Çok aktif biriysem veya sporcuysam Kalori Hesaplayıcıyı kullanabilir miyim?',
        answer:
          'Evet, Çok Aktif düzey ağır fiziksel işi veya yoğun günlük antrenmanı kapsar, ancak alışılmadık vücut yapısına sahip sporcular tahmini daha az doğru bulabilir.',
      },
      {
        question: 'Aktivite düzeyimi değiştirince toplam enerji harcamam neden değişti?',
        answer:
          'Toplam enerji harcaması, BMR değerinizin aktivite katsayısıyla çarpılmasıdır, bu yüzden daha yüksek aktivite düzeyi çarpanı ve dolayısıyla tahmini günlük kalori ihtiyacını yükseltir.',
      },
      {
        question: 'Kalorilerimi ne sıklıkla yeniden hesaplamalıyım?',
        answer:
          'Kilonuz, aktivite düzeyiniz veya hedefiniz değiştiğinde ya da aktif olarak kilo verirken veya alırken kabaca her 4 ile 8 haftada bir yeniden hesaplayın.',
      },
      {
        question: 'Kalori Hesaplayıcı kişisel verilerimi saklar veya yükler mi?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak çalışır ve yaş, boy, kilo ve aktivite seçimleriniz asla yüklenmez ya da sunucuya kaydedilmez.',
      },
      {
        question: 'Kalori Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda tamamen ücretsizdir, hesap yok, kayıt yok ve yeniden hesaplama sınırı yok.',
      },
      {
        question: 'Kalori Hesaplayıcı 500 kcal açık planlamama yardımcı olur mu?',
        answer:
          'Evet. Standart Kilo Kaybı hedefi koruma toplam enerji harcamanızdan günde yaklaşık 500 kcal çıkarır, bu haftada yaklaşık 0,5 kg kaybı hedefler.',
      },
      {
        question: 'Hedefi uyguladıktan sonra kilom değişmezse ne yapmalıyım?',
        answer:
          'Önce aktivite düzeyinizin ve besin takibinizin 2 ile 3 hafta dürüst ve tutarlı olduğundan emin olun. Kilo hâlâ değişmiyorsa alımı 100 ile 200 kcal ayarlayın ve takibe devam edin.',
      },
      {
        question: 'Kalori Hesaplayıcı vücut yağ yüzdesini hesaba katar mı?',
        answer:
          'Hayır. Mifflin-St Jeor denklemi yalnızca yaş, cinsiyet, boy ve toplam vücut ağırlığını kullanır, bu yüzden kas ile vücut yağını ayırt edemez.',
      },
      {
        question: 'Gençler veya yaşlı yetişkinler Kalori Hesaplayıcıyı kullanabilir mi?',
        answer:
          'Formül yetişkinler için tasarlanmıştır, bu yüzden gençler veya çok yaşlı yetişkinler için sonuçlar yalnızca kabaca tahmindir. Gençler beslenme rehberliğini bir ebeveyn ve sağlık uzmanından almalıdır.',
      },
    ],
  },
  'date-difference-calculator': {
    instructions: [
      {
        title: 'Fark veya Ekle ve Çıkar seçin',
        description:
          'İki tarihi karşılaştırmak için Tarihler Arası Farkı, gelecek veya geçmiş bir tarihi bulmak için Süre Ekle ve Çıkar seçeneğini seçin.',
      },
      {
        title: 'Tarihleri ve seçenekleri girin',
        description:
          'Başlangıç ve Bitiş tarihlerini girin, istediğiniz zaman değiştir düğmesini kullanın ve isteğe bağlı olarak bitiş tarihini dahil etme seçeneğini işaretleyin.',
      },
      {
        title: 'Gerekirse tarihleri değiştirin',
        description:
          'Tarihleri yanlış sırayla girdiyseniz değiştir düğmesiyle başlangıç ve bitiş tarihlerini anında tersine çevirin.',
      },
      {
        title: 'Takvim dökümünü inceleyin',
        description:
          'Yıl, ay ve gün, toplam takvim günü, hafta, hafta içi (Pazartesi ile Cuma), hafta sonu günleri ve saatleri inceleyin.',
      },
      {
        title: 'Hafta içi ve hafta sonu günlerini kontrol edin',
        description:
          'İş günü, faturalandırma günü veya seyahat süresi planlamak için hafta içi ve hafta sonu sayılarını ayrı ayrı okuyun.',
      },
      {
        title: 'Sonucu kopyalayın veya yeniden kullanın',
        description:
          'Dökümü sözleşmeler, çizelgeler veya mesajlar için kopyalayın. Sayımınız bir gün eksik görünüyorsa kapsayıcı bitiş tarihi seçeneğiyle hesabı yeniden çalıştırın.',
      },
    ],
    examples: [
      {
        title: 'Proje süresini ve iş günlerini saymak',
        input: 'Başlangıç: 2025-01-15 · Bitiş: 2025-11-12 · Dahil: Kapalı',
        output: '0 yıl, 9 ay, 28 gün · 301 toplam gün · 215 hafta içi günü · 86 hafta sonu günü',
        explanation: 'Yaz saati uygulamasının 23 saatlik ve 25 saatlik gün kaymalarına karşı bağışık UTC takvim aritmetiği kullanır.',
      },
      {
        title: 'Sözleşme tarihine 90 gün eklemek',
        input: 'Mod: Ekle · Tarih: 2025-01-10 · Ekle: 90 gün',
        output: 'Sonuç Tarihi: 2025-04-10',
        explanation: 'Ay ve yıl geçişlerini hesaba katarak tam tarihi gösterir.',
      },
    ],
    benefits: [
      'Saf UTC takvim aritmetiği, yaz saati uygulamasından kaynaklanan bir günlük hataları önler',
      'Hafta içi (Pazartesi ile Cuma) ve hafta sonu günlerini anında sayar',
      'Otel gecesi ile sprint günü sayımı için kapsayıcı bitiş tarihi sayımını destekler',
      'Akıllı ay sonu yuvarlamayla tarih toplama ve çıkarma içerir',
    ],
    useCases: [
      'Proje sprint günlerini, sözleşme sürelerini veya vize kalış sınırlarını saymak',
      'Tam faturalandırma günlerini veya ihbar süresi bitiş tarihlerini bulmak',
      'Sözleşme başlangıç tarihine 90 gün veya 6 ay eklemek',
      'Bir çeyrek veya mali dönemde toplam hafta içi günlerini kontrol etmek',
    ],
    faqs: [
      {
        question: 'Hafta içi sayacı resmî tatilleri hariç tutar mı?',
        answer:
          'Resmî tatiller ülkeye, eyalete ve işveren takvimine göre değiştiği için Pazartesi ile Cuma arası takvim hafta içi günlerini sayar.',
      },
      {
        question: '"Bitiş tarihini dahil et (+1 takvim günü)" seçeneğini ne zaman işaretlemeliyim?',
        answer:
          'Kapsayıcı katılım veya tatil günlerini sayarken işaretleyin, örneğin Pazartesi ile Cuma arası 5 gün eder. Geçen gece veya aralık sayarken işaretsiz bırakın.',
      },
      {
        question: '31 Ocağa 1 ay eklersem ne olur?',
        answer:
          'Takvim yuvarlama, 31 Ocak artı 1 ayı Şubat ayının son geçerli gününe (artık yıllarda 29 Şubat, diğer yıllarda 28 Şubat) sabitler, Mart ayına taşmaz.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı iki tarih arasındaki günü nasıl sayar?',
        answer:
          'UTC tarih aritmetiğiyle iki tarih arasındaki tam takvim aralığını ölçer, ardından aralığı yıl, ay ve kalan günlere artı toplam gün ve haftaya böler.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı başlangıç tarihini toplama dahil eder mi?',
        answer:
          'Varsayılan olarak etmez, bu yüzden Pazartesi ile Cuma arası 4 geçen gün sayılır. Başlangıç ve bitiş tarihleri birlikte sayılsın istiyorsanız kapsayıcı bitiş tarihi seçeneğini açın.',
      },
      {
        question: 'Bu araçta takvim günü ile hafta içi günü arasındaki fark nedir?',
        answer:
          'Takvim günleri aralıktaki her günü sayarken hafta içi günleri yalnızca Pazartesi ile Cuma arasını sayar. Hafta sonu günleri ayrı gösterilir, böylece iki toplamı da aynı anda görürsünüz.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı hafta sonu günlerini ayrı sayabilir mi?',
        answer:
          'Evet. Dökümde hafta içi günlerin yanında toplam hafta sonu günleri (Cumartesi ve Pazar) listelenir, böylece hafta sonlarını kapsayan seyahat, vardiya veya son tarihleri planlayabilirsiniz.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı artık yılları nasıl işler?',
        answer:
          'Gerçek takvim aritmetiği kullanır, bu yüzden artık yıllarda 29 Şubat sayılır ve Şubat ayını kapsayan aralıklar fazladan günü otomatik içerir.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcıyı bir tarihe kaç gün kaldığını bulmak için kullanabilir miyim?',
        answer:
          'Evet. Başlangıç tarihini bugüne ve bitiş tarihini hedef tarihe ayarlayın, toplam gün sonucu tam olarak kaç gün kaldığını söyler.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı farklı yıllar arasında çalışır mı?',
        answer:
          'Evet. Yıllar arayla tarihleri karşılaştırabilirsiniz, sonuç aralığı tam yıllara, kalan aylara ve kalan günlere böler.',
      },
      {
        question: 'Bitiş tarihi başlangıç tarihinden önceyse ne olur?',
        answer:
          'İki tarihi tersine çevirmek için değiştir düğmesini kullanın. Araç, başlangıç tarihi ile daha sonraki bir bitiş tarihini karşılaştırmak için tasarlanmıştır, bu yüzden değiştirme doğru pozitif aralığı verir.',
      },
      {
        question: 'Bir tarihe yıl, ay ve günü aynı anda ekleyebilir miyim?',
        answer:
          'Evet. Ekle ve Çıkar modunda yıl, ay ve gün kombinasyonu girebilirsiniz, araç tüm aralığı referans tarihinize tek adımda uygular.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı yaz saati uygulamasına uyum sağlar mı?',
        answer:
          'Etkili olarak evet. UTC takvim aritmetiği kullanır, bu yüzden yaz saati değişimleri çevresindeki 23 saatlik ve 25 saatlik günler sonucu bir gün kaydıramaz.',
      },
      {
        question: 'Proje son tarihi için iş günlerini nasıl sayarım?',
        answer:
          'Proje başlangıç ve bitiş tarihlerini girin ve Pazartesi ile Cuma arası olan hafta içi sayısını okuyun. Resmî tatiller çıkarılmadığını unutmayın, bu yüzden aralıkta tatil varsa sayıyı ayarlayın.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda tamamen ücretsizdir, hesap yok, kayıt yok ve hesaplayabileceğiniz tarih aralığı sınırı yok.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı tarihlerimi kaydeder veya yükler mi?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak çalışır ve girdiğiniz tarihler asla yüklenmez ya da sunucuda saklanmaz.',
      },
      {
        question: 'Farklı saat dilimlerindeki tarihler arasındaki farkı hesaplayabilir miyim?',
        answer:
          'Araç günün saatlerini değil, takvim tarihlerini karşılaştırır, bu yüzden saat dilimleri sonucu değiştirmez. Tarihleri her yerel takvimde göründüğü gibi seçin.',
      },
      {
        question: 'Kapsayıcı bitiş tarihi seçeneği sonucu ne değiştirir?',
        answer:
          'Toplama tam olarak bir takvim günü ekler, bu yüzden kapsayıcı Pazartesi ile Cuma sayımı 4 yerine 5 gün olur. Yıl, ay ve gün dökümü de buna göre güncellenir.',
      },
      {
        question: 'Tarih Farkı Hesaplayıcı sözleşme tarihine 90 gün ekleyebilir mi?',
        answer:
          'Evet. Ekle ve Çıkar seçeneğini belirleyin, sözleşme tarihini girin, 90 gün ekleyin, araç ay ve yıl geçişi dahil tam sonuç tarihini gösterir.',
      },
      {
        question: 'Şubat bazen ay ekleme sonucumu neden değiştirir?',
        answer:
          'Ay ekleme, hedef ayın son geçerli gününe yuvarlanır, bu yüzden 31 Ocak artı bir ay, 2 veya 3 Mart yerine 28 veya 29 Şubat olur.',
      },
    ],
  },
  'time-duration-calculator': {
    instructions: [
      {
        title: 'Geçen Süre veya Süreleri Topla modunu seçin',
        description:
          'Vardiya başlangıç ve bitiş kontrolü için İki Saat Arası Geçen Süre, birden fazla bloğu toplamak için Süreleri Topla seçeneğini kullanın.',
      },
      {
        title: 'Saatleri ve isteğe bağlı molayı girin',
        description:
          'Başlangıç Saati, Bitiş Saati ve dakika olarak Ücretsiz Mola girin. Vardiya gece yarısını geçiyorsa gece geçişini etkinleştirin.',
      },
      {
        title: 'Gece vardiyaları için gece geçişini etkinleştirin',
        description:
          'Bitiş saati başlangıç saatinden erkense gece geçiş seçeneğini açın, böylece gece yarısını geçen vardiya doğru sayılır.',
      },
      {
        title: 'Net süre dökümünü inceleyin',
        description:
          'Sonucu kullanmadan önce SS:DD:SS, toplam dakika, toplam saniye ve ondalık saat değerlerini birlikte kontrol edin.',
      },
      {
        title: 'SS:DD:SS veya ondalık saati kopyalayın',
        description:
          'Kayıtlar için SS:DD:SS biçimini ya da faturalandırma ve bordro tabloları için Ondalık Saat (örneğin 7,50 saat) değerini kullanın.',
      },
      {
        title: 'Yanlış görünen bir sonucu düzeltin',
        description:
          'Toplam çok kısa görünüyorsa önce mola uzunluğunu ve gece geçiş düğmesini kontrol edin, ardından başlangıç ve bitiş saatlerinin yer değiştirmediğini doğrulayın.',
      },
    ],
    examples: [
      {
        title: '30 dakikalık molalı standart iş günü vardiyası',
        input: 'Başlangıç: 09:00:00 · Bitiş: 17:30:00 · Mola: 30 dk',
        output: 'Net Süre: 08:00:00 · Ondalık: 8,00 saat · 480 dk',
        explanation: '8,5 geçen saat eksi 0,5 ücretsiz mola, 8,00 faturalandırılabilir saate eşittir.',
      },
      {
        title: 'Gece yarısını geçen gece vardiyası',
        input: 'Başlangıç: 22:00:00 · Bitiş: 06:30:00 · Gece Geçişi: Açık · Mola: 0 dk',
        output: 'Net Süre: 08:30:00 · Ondalık: 8,50 saat · 510 dk',
        explanation: 'Bitiş saati ertesi gün sayılır, böylece tam gece vardiyası hesaplanır.',
      },
    ],
    benefits: [
      'Tek düğmeyle 00:00 sınırını geçen gece vardiyalarını temiz biçimde işler',
      'SS:DD:SS, ondalık saat, toplam dakika ve toplam saniyeyi birlikte verir',
      'Dinamik çok satırlı toplayıcı, sınırsız iş bölümünü veya video ve ses sürelerini toplar',
      'Toplam geçen vardiya uzunluğundan büyük mola kesintisini engeller',
    ],
    useCases: [
      'Serbest çalışan faturalandırılabilir saatleri kaydetmek ve ücretsiz molaları düşmek',
      'Hastane, lojistik veya konaklama gece vardiyası saatlerini hesaplamak',
      'Podcast bölüm zaman damgalarını, ders uzunluklarını veya çalma listesi sürelerini toplamak',
      'Faturalandırma için 7 saat 45 dakikalık puantaj girişlerini 7,75 ondalık saate çevirmek',
    ],
    faqs: [
      {
        question: 'Ondalık saatler nasıl hesaplanır?',
        answer:
          'Toplam net saniye 3.600 değerine bölünür. Örneğin 7 saat 45 dakika (27.900 saniye) 7,75 ondalık saate eşittir.',
      },
      {
        question: 'Bu araç gece yarısından sonra biten gece vardiyalarını destekler mi?',
        answer:
          'Evet. "Bitiş saati başlangıç saatinden erkense ertesi gün say" seçeneğini işaretli tutun, böylece 22:00 ile 06:30 arası vardiya 8 saat 30 dakika olarak doğru hesaplanır.',
      },
      {
        question: '24 saatten büyük süreleri toplayabilir miyim?',
        answer:
          'Evet. Süreleri Topla modu saatleri 24 değerinde sarmalamadan biriktirir ve eşdeğer 24 saatlik gün sayısını da gösterir.',
      },
      {
        question: 'Süre Hesaplayıcı neyi ölçer?',
        answer:
          'İki saat arasındaki geçen süreyi veya birkaç süre satırının toplamını ölçer ve sonucu SS:DD:SS, ondalık saat, dakika ve saniye olarak gösterir.',
      },
      {
        question: 'Süre Hesaplayıcıya saatleri nasıl girerim?',
        answer:
          'Bir başlangıç saati ve bir bitiş saati girin, saat, dakika ve saniye olarak. Süreleri Topla modunda her bloğu ayrı bir satır olarak girin.',
      },
      {
        question: 'Süre Hesaplayıcı ücretsiz molayı nasıl düşer?',
        answer:
          'Girdiğiniz mola dakikalarını geçen vardiya süresinden çıkarır, bu yüzden 30 dakikalık molalı 8,5 saatlik vardiya 8,00 net saat verir.',
      },
      {
        question: 'Molam vardiyamdan uzunsa ne olur?',
        answer:
          'Araç, toplam geçen vardiya uzunluğundan büyük bir mola kesintisini engeller, bu yüzden net süre sıfırın altına inemez.',
      },
      {
        question: 'Süre Hesaplayıcı gece yarısından önce başlayıp sonra biten vardiyaları işleyebilir mi?',
        answer:
          'Evet. Gece geçişini etkinleştirin, böylece başlangıç saatinden erken olan bitiş saati ertesi gün sayılır ve tam gece vardiyası sayılır.',
      },
      {
        question: 'Geçen süre ile net süre arasındaki fark nedir?',
        answer:
          'Geçen süre, başlangıçtan bitişe kadar tam aralıktır. Net süre, geçen süreden ücretsiz molanın çıkarılmasıdır, genelde faturalandırılan veya ödenen tutar budur.',
      },
      {
        question: 'Birkaç ayrı iş bloğunu nasıl toplarım?',
        answer:
          'Süreleri Topla moduna geçin, her iş bloğu için saat, dakika ve saniyesiyle bir satır ekleyin, araç tüm satırları tek seferde toplar.',
      },
      {
        question: 'Süre Hesaplayıcıyı video veya ses süreleri için kullanabilir miyim?',
        answer:
          'Evet. Bir çalma listesi veya kurs için birleşik çalışma süresini almak üzere her bölüm, ders veya parça uzunluğunu Süreleri Topla modunda bir satır olarak ekleyin.',
      },
      {
        question: 'Süre Hesaplayıcı dakika veya saniyeleri yuvarlar mı?',
        answer:
          'Hayır, tam saniyelerden hesaplar ve tam SS:DD:SS sonucunu ondalık saat karşılığıyla birlikte gösterir, bu yüzden hiçbir şey sessizce yuvarlanıp kaybolmaz.',
      },
      {
        question: '7,75 ondalık saat saat ve dakika olarak ne demektir?',
        answer:
          '7 saat 45 dakika demektir. Ondalık noktadan sonraki kısım saatin kesridir, bu yüzden 0,75 saat 45 dakikaya eşittir.',
      },
      {
        question: 'Süre Hesaplayıcı ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda tamamen ücretsizdir, hesap yok, kayıt yok ve hesaplayabileceğiniz süre sınırı yok.',
      },
      {
        question: 'Süre Hesaplayıcı saatlerimi saklar veya yükler mi?',
        answer:
          'Hayır. Tüm hesaplamalar tarayıcınızda yerel olarak çalışır ve girdiğiniz saatler ve süreler asla yüklenmez ya da sunucuda saklanmaz.',
      },
      {
        question: 'Birden fazla günü kapsayan süreyi hesaplayabilir miyim?',
        answer:
          'Evet. Süreleri Topla modu saatleri 24 değerinde sarmalamadan toplar ve toplamın kaç 24 saatlik güne eşit olduğunu da gösterir.',
      },
      {
        question: 'Vardiyam neden negatif veya sıfır süre gösteriyor?',
        answer:
          'Bu genelde gece geçişi etkin olmadan bitiş saatinin başlangıç saatinden erken olması ya da molanın vardiya kadar uzun olması anlamına gelir. Önce gece geçiş düğmesini ve mola uzunluğunu kontrol edin.',
      },
      {
        question: 'Dakikaları bu araçla ondalık saate nasıl çeviririm?',
        answer:
          'Süreyi bir süre satırı olarak girin veya geçen süre sonucunu kullanın ve ondalık saat değerini okuyun. Örneğin 90 dakika 1,50 ondalık saat olarak görünür.',
      },
      {
        question: 'Süre Hesaplayıcı SS:DD:SS biçiminde saatleri toplayabilir mi?',
        answer:
          'Evet. Her süre satırı saat, dakika ve saniye kabul eder ve toplam SS:DD:SS olarak ve ondalık saat olarak gösterilir.',
      },
      {
        question: 'Puantaj toplamım saatlerimle uyuşmuyorsa neyi kontrol etmeliyim?',
        answer:
          'Her satırın doğru modda girildiğini, hiçbir molanın iki kez sayılmadığını ve gece vardiyalarında geçiş seçeneğinin etkin olduğunu kontrol edin.',
      },
    ],
  },
  'unit-converter': {
    instructions: [
      {
        title: 'Ölçüm kategorisini seçin',
        description:
          'Üst çubuktan Uzunluk, Ağırlık ve Kütle, Sıcaklık, Alan, Hacim, Hız veya Dijital Depolama seçeneklerinden birini seçin.',
      },
      {
        title: 'Değeri girin ve birimleri seçin',
        description:
          'Herhangi bir sayısal değer yazın ve Kaynak ile Hedef birimlerinizi seçin. Ters çevirmek için istediğiniz zaman Değiştir düğmesine tıklayın.',
      },
      {
        title: 'Dönüşüm yönünü değiştirin',
        description:
          'Değeri yeniden yazmadan Kaynak ve Hedef birimleri anında tersine çevirmek için Değiştir düğmesine tıklayın.',
      },
      {
        title: 'Tam dönüştürülmüş sonucu okuyun',
        description:
          'Ondalıklar dahil biçimlendirilmiş hedef değeri, belgenize veya hesabınıza kopyalamadan önce kontrol edin.',
      },
      {
        title: 'Sonucu kopyalayın veya tüm birimleri tarayın',
        description:
          'Biçimlendirilmiş hedef çıktıyı kopyalayın ya da kategorideki her birim için eşdeğer değerler tablosunu okuyun.',
      },
      {
        title: 'Depolama veya sıcaklık ayrıntılarını kontrol edin',
        description:
          'Depolama için ondalık GB mi yoksa ikili GiB mi gerektiğini doğrulayın. Sıcaklık için mutlak sıfırın altındaki değerlerin engellendiğini unutmayın.',
      },
    ],
    examples: [
      {
        title: 'Ondalık Gigabayt ile İkili Gibibayt depolama',
        input: 'Kategori: Dijital Depolama · 1.000 GB → GiB',
        output: '931,32257 GiB',
        explanation: '1 TB (1.000 GB) sürücünün masaüstü işletim sistemlerinde neden yaklaşık 931 GiB gösterdiğini açıklar.',
      },
      {
        title: 'Santigrat dereceden Fahrenhayta sıcaklık dönüşümü',
        input: 'Kategori: Sıcaklık · 25 °C → °F',
        output: '77 °F',
        explanation: 'Standart sıcaklık formülü (°C × 9/5) + 32 kullanılır.',
      },
    ],
    benefits: [
      'Tam uluslararası NIST ve SI dönüşüm sabitlerini kullanır, örneğin 1 inç tam 0,0254 m eder',
      'SI ondalık depolamayı (KB, MB, GB) IEC ikili depolamadan (KiB, MiB, GiB) ayırır',
      'Fiziksel sıcaklık sınırlarını doğrular, Mutlak Sıfır 0 K veya -273,15 °C altına asla inmez',
      'Aktif kategorideki her birim için tam karşılaştırma tablosu gösterir',
    ],
    useCases: [
      'Mühendislik çizimlerini milimetre, inç ve fit arasında çevirmek',
      'Yemek tarifi sıvı hacimlerini mililitre, su bardağı ve galon arasında kontrol etmek',
      'Santigrat hava veya laboratuvar sıcaklıklarını Fahrenhayt ve Kelvin değerine çevirmek',
      'Bulut disk boyutlarını ondalık GB ile ikili GiB arasında denetlemek',
    ],
    faqs: [
      {
        question: 'Dijital Depolama neden GB ile GiB değerini ayırır?',
        answer:
          'Depolama üreticileri 10 tabanlı SI ön ekleri kullanır (1 GB = 1.000³ bayt), birçok işletim sistemi aracı ise 2 tabanlı ikili boyutlar kullanır (1 GiB = 1.024³ bayt). İkisini açık tutmak karışıklığı giderir.',
      },
      {
        question: 'Su bardağı, pint ve galon için ABD ölçü birimleri mi kullanılır?',
        answer:
          'Evet. Sıvı ons, su bardağı, pint, kuart ve galon ABD ölçü sıvı tanımlarını kullanır (1 ABD galonu tam 3,785411784 L eder).',
      },
      {
        question: 'Sıcaklık dönüştürücü -273,15 °C altındaki değerleri neden engeller?',
        answer:
          'Mutlak sıfır (0 K, -273,15 °C veya -459,67 °F) termodinamik sıcaklığın fiziksel alt sınırıdır.',
      },
      {
        question: 'Birim Dönüştürücü hangi birimleri çevirebilir?',
        answer:
          'Yedi grubu kapsar: Uzunluk, Ağırlık ve Kütle, Sıcaklık, Alan, Hacim, Hız ve Dijital Depolama. Her grubun içinde birçok birim vardır.',
      },
      {
        question: 'Birim Dönüştürücü sonuçları ne kadar doğrudur?',
        answer:
          'Sonuçlar tam uluslararası NIST ve SI dönüşüm sabitlerini kullanır, örneğin 1 inç tam 0,0254 metreye eşittir, bu yüzden matematik girdiğiniz değer kadar kesindir.',
      },
      {
        question: 'Birim Dönüştürücü ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda tamamen ücretsizdir, hesap yok, kayıt yok ve çalıştırabileceğiniz dönüşüm sınırı yok.',
      },
      {
        question: 'Birim Dönüştürücü ile kilometreyi mile nasıl çeviririm?',
        answer:
          'Uzunluk kategorisini seçin, kilometrenizi girin, Kaynak birim olarak kilometre ve Hedef birim olarak mil seçin, dönüştürülmüş değer anında görünür.',
      },
      {
        question: 'Kilogramı libreye nasıl çeviririm?',
        answer:
          'Ağırlık ve Kütle kategorisini seçin, kilogramı girin, Kaynak birim olarak kilogram ve Hedef birim olarak libre seçin, sonucu veya tam karşılaştırma tablosunu okuyun.',
      },
      {
        question: 'Litre ile ABD galonu arasındaki fark nedir?',
        answer:
          'Litre metrik bir hacim birimidir, ABD galonu ise tam 3,785411784 litreye eşit bir ABD ölçü sıvı birimidir. Dönüştürücü tam bu katsayıyı kullanır.',
      },
      {
        question: 'Birim Dönüştürücü Santigrat dereceyi Fahrenhayt ve Kelvin değerine çevirebilir mi?',
        answer:
          'Evet. Sıcaklık kategorisini seçin ve Santigrat, Fahrenhayt ve Kelvin arasından herhangi bir çifti seçin, araç standart formüllerle aralarında dönüşüm yapar.',
      },
      {
        question: '1 TB neden Birim Dönüştürücüde yaklaşık 931 GiB görünür?',
        answer:
          '1 TB sürücü ondalık olarak 1.000 GB tutar, ancak işletim sistemleri genelde ikili Gibibayt bildirir ve her GiB 1.024³ bayt olduğu için 1.000 GB yaklaşık 931 GiB eder.',
      },
      {
        question: 'Birim Dönüştürücü tarayıcımda çevrimdışı çalışır mı?',
        answer:
          'Evet. Tüm dönüşümler yerleşik sabitlerle tarayıcınızda yerel olarak çalışır, bu yüzden sayfa yüklendikten sonra internet bağlantısı veya yükleme gerekmez.',
      },
      {
        question: 'Birim Dönüştürücü sayılarımı kaydeder veya yükler mi?',
        answer:
          'Hayır. Her dönüşüm tarayıcınızda yerel olarak çalışır ve girdiğiniz değerler asla yüklenmez ya da sunucuda saklanmaz.',
      },
      {
        question: 'Hızı km/sa ile mil/sa arasında çevirebilir miyim?',
        answer:
          'Evet. Hız kategorisini seçin, değeri km/sa olarak girin, Hedef birim olarak mil/sa seçin, araç anında çevirir.',
      },
      {
        question: 'Metrekareyi fitkareye nasıl çeviririm?',
        answer:
          'Alan kategorisini seçin, metrekareyi girin, Kaynak birim olarak metrekare ve Hedef birim olarak fitkare seçin, dönüştürülmüş alan hemen görünür.',
      },
      {
        question: 'Ondalık KB ile ikili KiB arasındaki fark nedir?',
        answer:
          'Ondalık kilobayt (KB) 1.000 bayttır, ikili kibibayt (KiB) ise 1.024 bayttır. Dönüştürücü iki sistemi ayrı tutar, böylece depolama boyutları asla karışmaz.',
      },
      {
        question: 'Birim Dönüştürücü çok büyük veya çok küçük sayıları işleyebilir mi?',
        answer:
          'Evet. Binlerce kilometre gibi büyük değerler veya milimetrenin kesirleri gibi çok küçük değerler girebilirsiniz, sonuç tam ondalık hassasiyetle gösterilir.',
      },
      {
        question: 'Yemek veya hava durumu için hangi sıcaklık ölçeğini kullanmalıyım?',
        answer:
          'ABD dışındaki çoğu tarif ve hava durumu raporu Santigrat kullanır, ABD tarif ve hava durumu Fahrenhayt kullanır. Kelvin genelde bilim ve laboratuvar çalışmalarında kullanılır.',
      },
      {
        question: 'Tarif için mililitreyi su bardağına nasıl çeviririm?',
        answer:
          'Hacim kategorisini seçin, mililitreyi girin, Kaynak birim olarak mililitre ve Hedef birim olarak ABD su bardağı seçin, araç tarifiniz için bardak karşılığını verir.',
      },
      {
        question: 'Dönüştürülmüş değerlerim neden çok ondalık basamak gösteriyor?',
        answer:
          'Araç mühendislik ve bilim çalışmalarının doğru kalması için tam hassasiyet gösterir. Günlük kullanım için sonucu ihtiyacınız olan ondalık basamağa yuvarlamanız yeterlidir.',
      },
    ],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'roman-numeral-converter': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
  // Minimal record (EN-first launch): empty guide arrays satisfy the
  // prerender's hard detail requirement; translated guide content lands
  // in a later phase. Guide sections stay hidden until then.
  'online-hourly-calculator': {
    instructions: [],
    examples: [],
    benefits: [],
    useCases: [],
    faqs: [],
  },
};
