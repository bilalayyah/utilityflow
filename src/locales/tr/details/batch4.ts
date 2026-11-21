// Detail content for TR tools — Turkish locale for UtilityFlow.
// Loaded on demand, one batch at a time, only on the tool's own page
// (src/locales/details.ts).
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'qr-code-generator': {
    instructions: [
      {
        title: 'İçerik türünü seçin',
        description:
          'Web sitesi URL adresi, düz metin, Wi-Fi ağı, e-posta bağlantısı veya telefon numarası arasından birini seçin.',
      },
      {
        title: 'İçeriğinizi girin',
        description:
          'URL adresinizi, metninizi veya iletişim bilgilerinizi yazın ya da yapıştırın. Wi-Fi için ağ adı (SSID), güvenlik türü ve şifreyi ekleyin.',
      },
      {
        title: 'Görünümü ve hata düzeltmeyi ayarlayın',
        description:
          'Piksel boyutunu, sessiz bölge kenar boşluğunu, ön plan ve arka plan renklerini ve hata düzeltme seviyesini (L–H) değiştirin.',
      },
      {
        title: 'Önizlemeyi inceleyip test edin',
        description:
          'Canlı önizlemeye bakın ve indirmeden önce telefonunuzun kamerasıyla tarayarak doğru yere açıldığını doğrulayın.',
      },
      {
        title: 'PNG veya vektör SVG indirin',
        description:
          'Sosyal medya görselleri için net bir PNG indirin ya da baskı için ölçeklenebilir SVG dosyası alın.',
      },
      {
        title: 'Taranmayan kodu düzeltin',
        description:
          'Ön plan kontrastını artırın, kodu büyütün, hata düzeltme seviyesini yükseltin veya sessiz bölgeyi genişletin, sonra tekrar test edin.',
      },
    ],
    examples: [
      {
        title: 'Misafir Wi-Fi için QR etiket',
        input: 'SSID: MisafirWiFi · Güvenlik: WPA',
        output: 'WIFI:T:WPA;S:MisafirWiFi;P:...;H:false;;',
        explanation:
          'iOS ve Android kameraları standart WIFI QR yükünü otomatik tanır, misafirler şifre yazmadan ağa bağlanır.',
      },
      {
        title: 'Kartvizit için web sitesi QR kodu',
        input: 'URL: https://utilityflow.online · Boyut: 512 px · Hata düzeltme: M',
        output: 'Baskıya hazır SVG QR kodu',
        explanation:
          'SVG her boyutta net kalır, aynı kod küçük kartta da büyük posterde de temiz taranır.',
      },
    ],
    benefits: [
      'Statik QR kodları asla sona ermez ve üçüncü taraf takip yönlendirmelerinden geçmez',
      'Yüksek çözünürlüklü PNG yanında kayıpsız vektör SVG de üretir',
      'WPA, WEP ve açık Wi-Fi QR biçimlerini temiz şekilde oluşturur',
      'URL adresiniz ve Wi-Fi şifreniz yalnızca tarayıcınızda kalır, hiçbir yere yüklenmez',
    ],
    useCases: [
      'Basılı broşür, poster veya kartviziti UTM etiketli açılış sayfasına bağlamak',
      'Ofis, stüdyo veya etkinlik için misafir Wi-Fi QR tabelası hazırlamak',
      'Sunum ve ambalaja portföy veya iletişim bağlantısı eklemek',
      'Baskı tasarımı için net SVG QR kodu dışa aktarmak',
    ],
    faqs: [
      {
        question: 'Burada oluşturulan QR kodları bir süre sonra sona erer mi?',
        answer:
          'Hayır. Bunlar statik QR kodlarıdır; veri doğrudan siyah beyaz desenin içine kodlanır, bu yüzden sunucuya veya tarama sınırına bağlı olmadan her zaman çalışırlar.',
      },
      {
        question: 'Hangi hata düzeltme seviyesini seçmeliyim?',
        answer:
          'Temiz ekran veya broşür için M seviyesi (%15) yeterlidir. Dış mekân etiketi veya pürüzlü baskı yüzeyi için Q (%25) veya H (%30) seçin.',
      },
      {
        question: 'Ön plan kontrastı neden yüksek tutulmalı?',
        answer:
          'Telefon kameraları koyu modüller ile açık arka plan arasındaki güçlü kontrastla çalışır. Açık zemin üzerine koyu renk kullanın ve en az 4 modül sessiz kenar boşluğu bırakın.',
      },
      {
        question: 'QR Kod Oluşturucu ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez, filigran yoktur ve oluşturup indirebileceğiniz kod sayısında sınır yoktur.',
      },
      {
        question: 'QR kodu oluşturmak için hesap açmam gerekir mi?',
        answer:
          'Hayır. Her şey tarayıcınızda yerel olarak çalışır, bu yüzden hemen QR kodu oluşturup indirebilirsiniz.',
      },
      {
        question: 'QR koduna ne tür içerik koyabilirim?',
        answer:
          'Web sitesi URL adresi, düz metin, Wi-Fi ağı bilgileri, e-posta bağlantısı ve tarandığında çeviriciyi açan telefon numarası koyabilirsiniz.',
      },
      {
        question: 'Wi-Fi şifrem için QR kodu oluşturabilir miyim?',
        answer:
          'Evet. Wi-Fi Ağı biçimini seçin, ağ adını (SSID), WPA gibi güvenlik türünü ve şifreyi girin; misafirler yazmak yerine tarayarak bağlanır.',
      },
      {
        question: 'PNG ve SVG indirme arasındaki fark nedir?',
        answer:
          'PNG sabit çözünürlüklü bir resimdir, ekran ve sosyal medya için uygundur. SVG ise her boyutta net kalan vektör dosyasıdır, baskı için daha iyidir.',
      },
      {
        question: 'Küçük bastığım QR kodu yine de çalışır mı?',
        answer:
          'Ne kadar veri taşıdığına ve baskı kalitesine bağlıdır. Kısa URL adresleri küçük boyutta bile güvenle taranır, yoğun kodların ise büyük ve net basılması gerekir.',
      },
      {
        question: 'Hata düzeltme seviyesi ne işe yarar?',
        answer:
          'Koda yedek bilgi ekler, böylece bir kısmı çizilse, kirlense veya kapansa bile kod taranmaya devam eder. Yüksek seviye daha çok hasara dayanır ama deseni yoğunlaştırır.',
      },
      {
        question: 'QR kodumun renklerini değiştirebilir miyim?',
        answer:
          'Evet, ön plan ve arka plan renklerini HEX koduyla ayarlayabilirsiniz. Telefon kamerasının deseni okuyabilmesi için açık zemin üzerine koyu modüller kullanın.',
      },
      {
        question: 'Sessiz bölge nedir ve neden önemlidir?',
        answer:
          'Sessiz bölge, kodun çevresindeki boş kenar boşluğudur; tarayıcının kodun kenarlarını bulmasına yardımcı olur. En az 4 modül genişliğinde bırakın ve içine yazı veya logo koymayın.',
      },
      {
        question: 'Burada yapılan QR kodları taramaları takip eder mi?',
        answer:
          'Hayır. Bunlar statik kodlardır, arkalarında yönlendirme sunucusu yoktur, bu yüzden kimse kodun ne zaman ve nerede tarandığını göremez.',
      },
      {
        question: 'Bu QR kodlarını kartvizit ve broşürde kullanabilir miyim?',
        answer:
          'Evet. Kart, poster ve ambalaj için SVG sürümünü indirin; web sitesi, sunum ve sosyal medya görselleri için PNG kullanın.',
      },
      {
        question: 'Telefonum QR kodunu neden taramıyor?',
        answer:
          'Düşük kontrast, çok küçük baskı, parlama veya hasar en sık rastlanan nedenlerdir. Daha koyu ön plan, daha büyük boyut, daha yüksek hata düzeltme seviyesi ve daha geniş sessiz bölge deneyin.',
      },
      {
        question: 'İndirdiğim QR kodu çevrimdışıyken de çalışır mı?',
        answer:
          'Evet. Veri doğrudan desenin içinde kodlanır, bu yüzden indirilen kod bu web sitesine bağlı olmadan da taranıp çalışır.',
      },
      {
        question: 'Telefon numarasını tarayınca çevirici açılacak şekilde ekleyebilir miyim?',
        answer:
          'Evet. Telefon Numarası biçimini seçin; kod bir tel: bağlantısı oluşturur ve tarandığında telefonda çevirici numara hazır şekilde açılır.',
      },
      {
        question: 'E-posta adresini tarayınca yeni ileti açılacak şekilde ekleyebilir miyim?',
        answer:
          'Evet. E-posta Bağlantısı biçimi bir mailto: bağlantısı oluşturur; tarandığında e-posta uygulaması adresiniz önceden dolu şekilde açılır.',
      },
      {
        question: 'QR kodu oluştururken Wi-Fi şifrem güvende mi?',
        answer:
          'Evet. Kod tamamen tarayıcınızda oluşturulur ve yazdığınız hiçbir şey sunucuya yüklenmez veya saklanmaz.',
      },
      {
        question: 'Baskı için PNG dosyasını hangi boyutta indirmeliyim?',
        answer:
          'Baskı işleri için mevcut en büyük piksel boyutunu seçin; broşürden büyük her şey için SVG daha iyidir, çünkü vektör çıktı her boyutta net kalır.',
      },
    ],
  },
  'utm-link-builder': {
    instructions: [
      {
        title: 'Hedef URL adresinizi girin',
        description:
          'Hedef açılış sayfasının URL adresini yapıştırın veya standart etiketleri önceden doldurmak için bir kanal hazır ayarı seçin.',
      },
      {
        title: 'Kanal hazır ayarı seçin (isteğe bağlı)',
        description:
          'Kaynak ve ortam değerlerinin otomatik dolması için Instagram, e-posta, YouTube veya başka bir hazır ayar seçin.',
      },
      {
        title: 'UTM parametrelerini doldurun',
        description:
          'utm_source, utm_medium ve utm_campaign girin; gerekirse utm_content veya utm_term de ekleyin.',
      },
      {
        title: 'utm_term ve utm_content ekleyin (isteğe bağlı)',
        description:
          'Ücretli arama anahtar kelimeleri için utm_term kullanın; aynı kampanyadaki iki bağlantıyı ayırmak için utm_content kullanın, örneğin biyografi düğmesi ile hikâye bağlantısı.',
      },
      {
        title: 'Kopyalayın ve dökümü kontrol edin',
        description:
          'Kopyalamadan önce aşağıdaki parametre tablosuna bakın, yazım hatası veya büyük küçük harf karışıklığı kalmasın.',
      },
      {
        title: 'Yayınlamadan önce bağlantıyı test edin',
        description:
          'Kopyaladığınız URL adresini tarayıcıda açarak doğru sayfaya gittiğini doğrulayın; küçük harfe çevirmenin hedefteki büyük küçük harfe duyarlı bölümü değiştirmediğini kontrol edin.',
      },
    ],
    examples: [
      {
        title: 'Instagram biyografisi için kampanya bağlantısı',
        input: 'URL: https://utilityflow.online/tools/ · Kaynak: instagram · Ortam: social · Kampanya: spring_launch',
        output: 'https://utilityflow.online/tools/?utm_source=instagram&utm_medium=social&utm_campaign=spring_launch&utm_content=bio_button',
        explanation:
          'Tarayıcının URL çözümlemesi kullanılır, bu yüzden mevcut parametreler ve #çapa olduğu gibi korunur.',
      },
      {
        title: 'Bültendeki iki düğmeyi ayrı ayrı izlemek',
        input: 'URL: https://utilityflow.online/tools/ · Kaynak: newsletter · Ortam: email · Kampanya: weekly_tips · İçerik: header_button',
        output: 'https://utilityflow.online/tools/?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_tips&utm_content=header_button',
        explanation:
          'utm_content sayesinde aynı e-postanın içinde hangi düğmenin daha çok tıklandığı görülür.',
      },
    ],
    benefits: [
      'Tek tıklamalı kanal hazır ayarları IG ile instagram gibi tutarsız adlandırmaları önler',
      'İsteğe bağlı küçük harf ve alt çizgi normalleştirmesi GA4 raporlarının bölünmesini engeller',
      'Mevcut sorgu parametrelerini ve #çapa işaretlerini doğru şekilde korur',
      'Yayınlamadan önce çözümlenmiş parametre inceleme tablosu gösterir',
    ],
    useCases: [
      'Instagram, LinkedIn, X ve TikTok biyografilerinden gelen tıklamaları izlemek',
      'Haftalık e-posta bültenindeki farklı CTA düğmelerini ölçmek',
      'YouTube video açıklamalarındaki sponsor bağlantılarını etiketlemek',
      'QR Kod Oluşturucu için temiz UTM bağlantıları hazırlamak',
    ],
    faqs: [
      {
        question: 'UTM parametrelerinde küçük harf normalleştirmesi neden önemli?',
        answer:
          'Google Analytics 4 gibi araçlar utm_source=Instagram ile utm_source=instagram değerlerini ayrı satır sayar, bu da kampanya raporunu böler.',
      },
      {
        question: 'Sitemin içindeki gezinme bağlantılarına UTM etiketi eklemeli miyim?',
        answer:
          'Hayır. UTM parametreleri yalnızca dışarıdan gelen kampanyalar içindir; iç bağlantılarda kullanmak oturum ortasında gerçek yönlendirme bilgisini değiştirir.',
      },
      {
        question: 'Oluşturduğum UTM bağlantısını QR koda çevirebilir miyim?',
        answer:
          'Evet. Hazır UTM URL adresini kopyalayıp QR Kod Oluşturucu aracına yapıştırın; basılı kampanyanın her taraması kampanya etiketiyle gelir.',
      },
      {
        question: 'UTM Bağlantı Oluşturucu ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve her bağlantı tarayıcınızda yerel olarak oluşturulur, URL adresiniz hiçbir yere yüklenmez.',
      },
      {
        question: 'UTM parametresi nedir?',
        answer:
          'URL adresinin sonuna eklenen, utm_source=instagram gibi kısa bir etikettir; analiz araçlarına ziyaretçinin nereden geldiğini söyler.',
      },
      {
        question: 'utm_source ne anlama gelir?',
        answer:
          'Trafiğin kaynağını belirtir; instagram, google veya bülten gibi. Böylece her ziyaretçinin hangi yerden geldiğini görürsünüz.',
      },
      {
        question: 'utm_medium ne anlama gelir?',
        answer:
          'Pazarlama kanalını belirtir; social, email, cpc veya referral gibi. Aynı kampanya içinde kanalları karşılaştırmanızı sağlar.',
      },
      {
        question: 'utm_campaign ne anlama gelir?',
        answer:
          'Belirli bir kampanyanın adıdır; spring_launch veya black_friday gibi. Bir tanıtımın tüm bağlantıları raporda birlikte gruplanır.',
      },
      {
        question: 'utm_content ne işe yarar?',
        answer:
          'Aynı kampanyadaki iki bağlantıyı ayırır; örneğin biyografi düğmesi ile hikâye bağlantısı. Hangi yerleşimin daha iyi performans gösterdiğini görürsünüz.',
      },
      {
        question: 'utm_term ne işe yarar?',
        answer:
          'Reklam tıklamasını tetikleyen ücretli arama anahtar kelimesini belirtir; özellikle Google Ads ve diğer arama kampanyalarında kullanılır.',
      },
      {
        question: 'Beş UTM parametresini de doldurmak zorunda mıyım?',
        answer:
          'Hayır. Kaynak, ortam ve kampanya en azından doldurulmalıdır; utm_term ve utm_content isteğe bağlıdır, yalnızca daha ince ayrıntı istediğinizde gerekir.',
      },
      {
        question: 'Instagram biyografimde UTM bağlantısı kullanabilir miyim?',
        answer:
          'Evet. Biyografi trafiğini ölçmenin en yaygın yoludur; biyografi bağlantı sayfalarında, hikâye bağlantılarında ve gönderi açıklamalarında aynı şekilde çalışır.',
      },
      {
        question: 'UTM parametreleri mevcut sorgu dizemi veya #çapamı bozar mı?',
        answer:
          'Hayır. Oluşturucu URL adresinizdeki mevcut parametreleri korur ve #çapayı sonda tutar, böylece bağlantı doğru bölüme gider.',
      },
      {
        question: 'UTM değerlerinde boşluk kullanmalı mıyım?',
        answer:
          'Hayır. spring_launch örneğindeki gibi alt çizgi veya tire kullanın, çünkü boşluk yüzde kodlamasına dönüşür ve raporları okumayı zorlaştırır.',
      },
      {
        question: 'QR kod taramalarını UTM bağlantılarıyla izleyebilir miyim?',
        answer:
          'Evet. Önce UTM URL adresini oluşturun, sonra QR Kod Oluşturucu ile QR koda çevirin; sitenize ulaşan her tarama kampanya etiketlerini taşır.',
      },
      {
        question: 'UTM bağlantıları SEO çalışmasını etkiler mi?',
        answer:
          'Hayır, arama motorları sıralama için UTM parametrelerini genellikle yok sayar; yine de açılış sayfasında canonical etiketi bulundurmak iyi bir alışkanlıktır, dizine eklenen URL adresleri temiz kalır.',
      },
      {
        question: 'UTM sonuçlarını Google Analytics üzerinde nasıl görürüm?',
        answer:
          'Google Analytics 4 raporunda Trafik edinimi bölümünü açın ve oturum kaynağı, ortam ve kampanya alanlarına bakın; bunlar UTM değerlerinizle dolar.',
      },
      {
        question: 'utm_source ile utm_medium arasındaki fark nedir?',
        answer:
          'Kaynak tıklamanın nereden geldiğini söyler, örneğin instagram; ortam ise nasıl geldiğini söyler, örneğin social veya email. Tam bir etiket için ikisi de gerekir.',
      },
      {
        question: 'UTM bağlantı şablonunu kaydedip tekrar kullanabilir miyim?',
        answer:
          'Evet. Kanal hazır ayarları standart kaynak ve ortam değerlerini önceden doldurur; hazır bağlantıyı kopyalayıp aynı adlandırma düzenini sonraki kampanyalarda tekrar kullanabilirsiniz.',
      },
      {
        question: 'UTM raporumda aynı kampanya neden iki kez görünüyor?',
        answer:
          'Büyük küçük harf farkı veya tutarsız yazım, Instagram ile instagram gibi, ayrı satırlar oluşturur. Her bağlantıda tek bir küçük harf adlandırma kuralı kullanın.',
      },
    ],
  },
  'social-character-limit-checker': {
    instructions: [
      {
        title: 'Sosyal medya taslağınızı yazın veya yapıştırın',
        description:
          'Açıklama, biyografi veya video açıklamasını düzenleyici kutusuna yazın.',
      },
      {
        title: 'Platform ölçer kartlarına bakın',
        description:
          'X, Instagram, LinkedIn, TikTok, Threads, Bluesky ve YouTube için yeşil, sarı ve kırmızı kullanım çubuklarını inceleyin.',
      },
      {
        title: '"Devamını Gör" katlanma önizlemesini kontrol edin',
        description:
          'Aşağıdaki açılır menüden hedef platformu seçerek akışta açılış cümlenizin nerede kesildiğini görün.',
      },
      {
        title: 'Kancanızı katlanmanın üstünde tutun',
        description:
          'En önemli sözleri ilk 125 karaktere (Instagram) veya 210 karaktere (LinkedIn) sığdırın, okur "...daha fazla" düğmesinden önce görsün.',
      },
      {
        title: 'Etiket, bahsetme ve bağlantıları düzeltin',
        description:
          'Sınırı aştığınız platformlarda etiketleri, @bahsetmeleri ve URL adreslerini kaldırın veya kısaltın; X platformunun her bağlantıyı 23 karakter saydığını unutmayın.',
      },
      {
        title: 'Tekrar kontrol edip son metni kopyalayın',
        description:
          'Her düzenlemeden sonra tüm ölçer kartlarının yeşil olduğunu doğrulayın, sonra metni kopyalayın. Bir platform hâlâ kırmızı görünüyorsa gereksiz sözleri silin veya fazla ayrıntıyı yanıta ya da yoruma taşıyın.',
      },
    ],
    examples: [
      {
        title: 'Bağlantılı gönderiyi X ile LinkedIn üzerinde test etmek',
        input: '140 karakterlik kanca + https://example.com/very-long-campaign-url',
        output: 'X bu URL adresini 23 karakter sayar; Instagram ve LinkedIn tam URL uzunluğunu sayar.',
        explanation:
          'Bu, X platformunun t.co bağlantı sarma davranışını doğru yansıtır.',
      },
      {
        title: 'Instagram biyografisinin 150 karakter sınırını kontrol etmek',
        input: 'Toplam 148 karakterlik üç satırlık biyografi',
        output: 'Instagram ölçeri yeşil — biyografi sınır içinde; X ölçeri de yeşil',
        explanation:
          'Her platformun ölçeri aynı anda güncellenir, tek taslakla birçok yeri kontrol edebilirsiniz.',
      },
    ],
    benefits: [
      'Array.from karakter sayımıyla çok kod noktalı emojileri doğru sayar',
      'X platformunun 23 karakterlik URL uzunluğu normalleştirmesini otomatik uygular',
      'Hem katı azami sınırları hem akışta kesilme ("Devamını gör") eşiklerini gösterir',
      'Etiketleri, @bahsetmeleri ve URL adreslerini gerçek zamanlı sayar',
    ],
    useCases: [
      'İlk 125–210 karakterin akış katlanmasından önce okuru yakalamasını sağlamak',
      'İçerik üreticisi duyurularını X platformunun 280 ve Bluesky platformunun 300 karakter sınırına sığdırmak',
      'LinkedIn ve Instagram biyografilerini 150–160 karakterlik katı sınıra uydurmak',
      'Yayınlamadan önce YouTube platformunun 70 karakterlik mobil başlık görünürlüğünü kontrol etmek',
    ],
    faqs: [
      {
        question: 'X (Twitter) uzun URL adreslerini neden 23 karakter sayar?',
        answer:
          'X giden bağlantıları t.co kısaltıcısıyla sarar, bu yüzden her http/https URL adresi asıl uzunluğu ne olursa olsun 280 karakterlik gönderi bütçesinde 23 karakter yer kaplar.',
      },
      {
        question: 'Instagram ve LinkedIn kartlarındaki "Katlanma" uzunluğu nedir?',
        answer:
          'Akışta uzun açıklamalar Instagram akışında yaklaşık 125, LinkedIn akışında yaklaşık 210 karakterden sonra "...daha fazla" düğmesinin arkasına saklanır. Ana kancanızı katlanmadan önce koymak okunmayı artırır.',
      },
      {
        question: 'Bu araç emojiyi 1 karakter mi sayar, 2 mi?',
        answer:
          'Unicode kod noktası sayımıyla standart tek emojiler 1 karakter sayılır, UTF-16 vekil çifti yüzünden şişirilmez.',
      },
      {
        question: 'Sosyal Medya Karakter Sınırı Denetleyicisi ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve taslak metniniz tarayıcınızda yerel olarak sayılır, hiçbir yere yüklenmez.',
      },
      {
        question: 'X (Twitter) gönderi karakter sınırı nedir?',
        answer:
          'X platformunda standart gönderiler 280 karaktere kadar olabilir ve t.co bağlantı sarma yüzünden her URL adresi 23 karakter sayılır.',
      },
      {
        question: 'Instagram açıklama karakter sınırı nedir?',
        answer:
          'Instagram açıklamaları 2.200 karaktere kadar olabilir, ancak akışta "...daha fazla" katlanmasından önce yalnızca ilk yaklaşık 125 karakter görünür.',
      },
      {
        question: 'Instagram biyografi karakter sınırı nedir?',
        answer:
          'Instagram biyografileri yalnızca 150 karakterdir, bu yüzden her harf, boşluk, emoji ve satır sonu bu dar bütçeden sayılır.',
      },
      {
        question: 'LinkedIn gönderi karakter sınırı nedir?',
        answer:
          'LinkedIn gönderileri 3.000 karaktere kadar olabilir; akışta "daha fazla gör" düğmesinden önce yaklaşık ilk 210 karakter görünür.',
      },
      {
        question: 'TikTok açıklama karakter sınırı nedir?',
        answer:
          'TikTok video açıklamaları 4.000 karaktere kadar olabilir, ancak izleyiciler hızlı taradığı için kısa ve öz açıklamalar genelde daha iyi performans gösterir.',
      },
      {
        question: 'Threads gönderi karakter sınırı nedir?',
        answer:
          'Threads gönderileri 500 karaktere kadar olabilir; standart X gönderisinden uzun ama yine de özlü yazmayı ödüllendirecek kadar kısadır.',
      },
      {
        question: 'Bluesky gönderi karakter sınırı nedir?',
        answer:
          'Bluesky gönderileri 300 karaktere kadar olabilir, standart X gönderisinin 280 karakterlik sınırından biraz fazladır.',
      },
      {
        question: 'YouTube başlık karakter sınırı nedir?',
        answer:
          'YouTube başlıkları 100 karaktere kadar olabilir, ancak mobil arama sonuçlarında genelde yalnızca ilk yaklaşık 70 karakter görünür, bu yüzden anahtar sözleri başa koyun.',
      },
      {
        question: 'YouTube açıklama karakter sınırı nedir?',
        answer:
          'YouTube video açıklamaları 5.000 karaktere kadar olabilir; izleyiciler "daha fazlasını göster" seçeneğine dokunmadan önce ilk bir iki satırı görür.',
      },
      {
        question: 'Instagram akışında katlanma nasıl çalışır?',
        answer:
          'Instagram akışta açıklamaları yaklaşık 125 karakterden sonra daraltır, geri kalanını görmek için "...daha fazla" seçeneğine dokunmak gerekir. Kancanızı ve ana mesajınızı başa koyun.',
      },
      {
        question: 'LinkedIn platformunun "daha fazla gör" katlanması nasıl çalışır?',
        answer:
          'LinkedIn akışta gönderinin yaklaşık ilk 210 karakterini gösterir, geri kalanını "daha fazla gör" seçeneğinin arkasına saklar; bu yüzden tıklamayı hak eden bir açılış cümlesi yazın.',
      },
      {
        question: 'Etiketler karakter sınırına dahil mi?',
        answer:
          'Evet. # işareti dahil etiketin her karakteri, her platformda gönderi sınırına dahil edilir.',
      },
      {
        question: 'Satır sonları karakter sayılır mı?',
        answer:
          'Evet. Taslağınızdaki her yeni satır bir karakter sayılır, bu yüzden 150 karakterlik Instagram biyografisi gibi dar sınırlarda fazladan boş satırlar bütçeyi tüketir.',
      },
      {
        question: 'Emojiler her platformda bir karakter sayılır mı?',
        answer:
          'Bu denetleyici kod noktası sayımıyla standart tek emojileri bir karakter sayar, ancak birleştirilmiş simgelerden oluşan karmaşık emojiler bazı platformlarda daha fazla sayılabilir.',
      },
      {
        question: 'URL adresleri her platformda aynı mı sayılır?',
        answer:
          'Hayır. X platformu her URL adresini t.co sarma yoluyla 23 karakter sayarken Instagram, LinkedIn ve çoğu platform bağlantının tam uzunluğunu sayar.',
      },
      {
        question: 'Birden çok platformu aynı anda kontrol edebilir miyim?',
        answer:
          'Evet. Taslağınızı bir kez yazın veya yapıştırın; her platformun ölçer kartı aynı anda güncellenir, böylece tek gönderiyi X, Instagram, LinkedIn ve diğerlerine göre uyarlayabilirsiniz.',
      },
    ],
  },
  'unicode-fancy-text-formatter': {
    instructions: [
      {
        title: 'Kısa başlık veya biyografi etiketi girin',
        description:
          'Şekillendirilecek Metin alanına kısa bir ifade, bölüm başlığı veya kullanıcı adı sloganı yazın.',
      },
      {
        title: '10 Unicode stiline göz atın',
        description:
          'Sans-Serif Kalın, İtalik, Tek Aralıklı, El Yazısı, Çift Çizgili, Küçük Büyük Harf ve Tam Genişlik gibi önizlemeleri karşılaştırın.',
      },
      {
        title: 'Önizlemeleri yan yana karşılaştırın',
        description:
          'On stil kartının tamamına bakın ve küçük boyutta en net okunanı seçin; çünkü bazı el yazısı ve çift çizgili stiller okunması zordur.',
      },
      {
        title: 'Tercih ettiğiniz stili kopyalayın',
        description:
          'Tercih ettiğiniz stil kartında Kopyala seçeneğine basarak şekillendirilmiş Unicode metni panoya alın.',
      },
      {
        title: 'Yapıştırıp görünümü kontrol edin',
        description:
          'Metni biyografinize, açıklamanıza veya gönderinize yapıştırın, sonra başka bir cihazda bakarak hiçbir karakterin boş kutu görünmediğini doğrulayın.',
      },
      {
        title: 'Sorumlu şekilde kopyalayın',
        description:
          'Tercih ettiğiniz stilde Kopyala seçeneğine basın ve ekran okuyucu erişilebilirliği için önemli gövde metnini düz metin olarak bırakın.',
      },
    ],
    examples: [
      {
        title: 'LinkedIn veya X biyografisi için ayırıcı biçimlendirmek',
        input: 'New Toolkit 2025',
        output: '𝗡𝗲𝘄 𝗧𝗼𝗼𝗹𝗸𝗶𝘁 𝟮𝟬𝟮𝟱 (Sans-Serif Kalın)',
        explanation:
          'Resmi Unicode U+1D5D4–U+1D7EC matematiksel kalın kod noktalarını kullanır.',
      },
      {
        title: 'Instagram biyografisinde Küçük Büyük Harf başlığı',
        input: 'Daily Tips',
        output: 'ᴅᴀɪʟʏ ᴛɪᴘꜱ (Küçük Büyük Harf)',
        explanation:
          'Küçük Büyük Harf stili küçük harfleri büyük harflerin küçük biçimlerine çevirir, başlık temiz ve hafif görünür.',
      },
    ],
    benefits: [
      'Görsel veya platforma özel HTML yerine gerçek Unicode glifleri gösterir',
      'Ekran okuyucu ve arama davranışı hakkında net erişilebilirlik bildirimi verir',
      'ℂ, ℕ, ℝ gibi özel tahta simgeleri dahil rakamları ve noktalama işaretlerini doğru işler',
      'Her stil kartı için tek tıklamalı kopyalama',
    ],
    useCases: [
      'Instagram veya TikTok profil biyografilerinde bölüm başlıklarını öne çıkarmak',
      'Teknik kullanıcı adlarını veya tarihleri Tek Aralıklı Unicode ile biçimlendirmek',
      'Düz metinli bülten veya notlara hafif Küçük Büyük Harf etiketleri eklemek',
      'Yerel Markdown kalın yazının desteklenmediği yerlerde kısa duyuruları şekillendirmek',
    ],
    faqs: [
      {
        question: 'Bu araç neden erişilebilirlik uyarısı içeriyor?',
        answer:
          'Unicode matematik simgeleri düz yazı için değil denklemler için tasarlanmıştır; bu yüzden yardımcı ekran okuyucular onları sık sık "matematiksel sans-serif kalın büyük A" diye okur ve sosyal arama çubukları onları dizine eklemeyebilir.',
      },
      {
        question: 'Bunlar gerçek yazı tipi dosyaları mı?',
        answer:
          'Hayır. Farklı simge bloklarına dağılmış standart Unicode karakterleridir; bu yüzden düz metinli sosyal alanlara yapıştırıldığında da kalırlar.',
      },
      {
        question: 'Aksanlı ASCII dışı harfler neden değişmeden kalıyor?',
        answer:
          'Unicode Matematiksel Alfanümerik blokları yalnızca aksansız Latin A–Z harflerini ve 0–9 rakamlarını tanımlar, bu yüzden aksanlı karakterler okunabilirliği korumak için dokunulmadan bırakılır.',
      },
      {
        question: 'Unicode Şık Yazı Biçimlendirici ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve metniniz tarayıcınızda yerel olarak dönüştürülür, hiçbir yere yüklenmez.',
      },
      {
        question: 'Bu biçimlendiriciyle hangi Unicode stilleri oluşturabilirim?',
        answer:
          'Sans-Serif Kalın, İtalik, Tek Aralıklı, El Yazısı, Çift Çizgili, Fraktur, Küçük Büyük Harf ve Tam Genişlik stilleri oluşturabilirsiniz; bir bakışta karşılaştırmak için on stil kartı vardır.',
      },
      {
        question: 'Şık yazı Instagram platformunda çalışır mı?',
        answer:
          'Evet. Şekillendirilmiş Unicode metni doğrudan Instagram biyografilerine, açıklamalarına ve yorumlarına yapışır, çünkü gerçek karakterlerden oluşur, görsel veya yazı tipinden değil.',
      },
      {
        question: 'Şık yazı LinkedIn ve X platformunda çalışır mı?',
        answer:
          'Evet. LinkedIn ve X biyografi ve gönderilerde Unicode karakterleri kabul eder, bu yüzden kalın veya küçük büyük harfli başlıklar sıradan metin gibi yapışır.',
      },
      {
        question: 'TikTok biyografimde şık yazı kullanabilir miyim?',
        answer:
          'Evet. TikTok biyografileri Unicode karakterleri kabul eder, bu yüzden kısa bir adı veya sloganı şekillendirebilirsiniz; yine de biyografinin geri kalanını düz metin bırakmalısınız.',
      },
      {
        question: 'Bazı karakterler bazı cihazlarda neden kutu gibi görünüyor?',
        answer:
          'Eski telefon veya bilgisayarlarda her Unicode simge bloğunu kapsayan yazı tipi olmayabilir, bu yüzden eksik glif boş kutu olarak görünür. Şekillendirilmiş metninizi yayınlamadan önce başka bir cihazda test edin.',
      },
      {
        question: 'Biyografimin tamamını şık yazıyla yazabilir miyim?',
        answer:
          'Önerilmez. Ekran okuyucular şekillendirilmiş metni zor okur ve arama onunla eşleşmeyebilir; bu yüzden şık yazıyı yalnızca kısa başlıklar için kullanın, geri kalanını düz bırakın.',
      },
      {
        question: 'Şık yazı sosyal platformlarda aramayı etkiler mi?',
        answer:
          'Evet, etkileyebilir. Düz bir sözcük için yapılan arama, aynı sözcüğün matematiksel kalın yazılmış biçimiyle eşleşmeyebilir; bu yüzden insanların aradığı anahtar sözcükleri şekillendirmeyin.',
      },
      {
        question: 'Ekran okuyucular Unicode şık yazıyı okuyabilir mi?',
        answer:
          'Çoğu zaman iyi okuyamaz. Ekran okuyucular her şekillendirilmiş harfi tam Unicode adıyla okuyabilir, bu da uzun şekillendirilmiş pasajları görme engelli kullanıcılar için kafa karıştırıcı yapar.',
      },
      {
        question: 'Bu biçimlendiriciyle WhatsApp uygulamasında kalın yazı yapabilir miyim?',
        answer:
          'Evet, Unicode kalın yazı WhatsApp uygulamasına yapışır, ancak uygulamanın kendi biçimlendirmesi de vardır; bu yüzden metni *kalın* gibi yıldız işaretleriyle sarmak genelde daha kolaydır.',
      },
      {
        question: 'Rakamlar ve noktalama işaretleri de değişir mi?',
        answer:
          'Rakamlar kalın ve tek aralıklı gibi çoğu stilde dönüşür, ancak çoğu noktalama işareti değişmeden kalır, çünkü Unicode simge blokları onların şekillendirilmiş sürümlerini tanımlamaz.',
      },
      {
        question: 'Şekillendirilmiş metni normale geri çevirebilir miyim?',
        answer:
          'Araç düz metni şekillendirilmiş metne çevirir; bu yüzden düz metni geri almak için asıl ifadeyi yeniden yazın veya ilk kopyaladığınız yerden yapıştırın.',
      },
      {
        question: 'Unicode şık yazı yazı tipiyle aynı şey mi?',
        answer:
          'Hayır. Yazı tipi, sıradan harflerin tek bir cihazda nasıl göründüğünü değiştirir; Unicode şık yazı ise tamamen farklı karakterler kullanır, bu yüzden şekillendirme kopyalayıp yapıştırdıktan sonra da kalır.',
      },
      {
        question: 'Şık yazı e-posta konu satırlarında çalışır mı?',
        answer:
          'Genelde modern e-posta istemcilerinde görünür, ancak şekillendirilmiş karakterler spam filtrelerini tetikleyebilir ve ekran okuyucuları şaşırtabilir; bu yüzden e-posta için düz metin daha güvenli bir seçimdir.',
      },
      {
        question: 'YouTube başlıklarında şık yazı kullanabilir miyim?',
        answer:
          'Evet, YouTube başlıklarda Unicode kabul eder, ancak şekillendirilmiş sözcükler düz arama sorgularıyla eşleşmeyebilir; bu yüzden az kullanın ve aranabilir anahtar sözcükleri düz metin bırakın.',
      },
      {
        question: 'Bu biçimlendirici metnimi bir yere yüklüyor mu?',
        answer:
          'Hayır. Tüm dönüştürme tarayıcınızda yerel olarak yapılır, bu yüzden yazdığınız hiçbir şey sunucuya gönderilmez veya saklanmaz.',
      },
      {
        question: 'Tam Genişlik metni nedir?',
        answer:
          'Tam Genişlik metni, Ｆｕｌｌｗｉｄｔｈ gibi geniş Unicode karakterleri kullanır; her harf normalin iki katı genişlik kaplar ve başlıklara ferah, aralıklı bir görünüm verir.',
      },
    ],
  },
  'bio-line-break-formatter': {
    instructions: [
      {
        title: 'Açıklamanızı yazın veya yapıştırın',
        description:
          'Birden çok paragraflı metni veya biyografi satırlarını, görsel boşluk istediğiniz her yere boş satır bırakarak hazırlayın.',
      },
      {
        title: 'Ayırıcı stratejisi seçin',
        description:
          'Görünmez Ayırıcı (U+2800), Nokta Ayırıcı (.) veya Yalnızca Sondaki Boşlukları Temizle seçeneklerinden birini seçin.',
      },
      {
        title: 'Biçimlendirilmiş önizlemeyi inceleyin',
        description:
          'Önizlemede her boş satırın korunduğunu ve satır sonlarında sondaki boşluk kalmadığını doğrulayın.',
      },
      {
        title: 'Karakter sayısını kontrol edin',
        description:
          'Canlı sayaca bakarak biyografinizin Instagram platformunun 150 karakter sınırına uyduğundan emin olun; her ayırıcı bir karakter sayılır.',
      },
      {
        title: 'Biçimlendirilmiş metni kopyalayın',
        description:
          'Biçimlendirilmiş Açıklamayı Kopyala seçeneğine basın ve biyografinizin Instagram platformunun 150 karakter sınırına uyup uymadığını doğrulayın.',
      },
      {
        title: 'Platforma yapıştırıp doğrulayın',
        description:
          'Instagram, Threads veya TikTok platformuna yapıştırıp gönderiyi önizleyin. Satır sonları hâlâ çöküyorsa Görünmez Ayırıcı moduna geçip tekrar kopyalayın.',
      },
    ],
    examples: [
      {
        title: 'Instagram platformuna yapıştırmadan önce sondaki boşlukları temizlemek',
        input: 'Satır 1   \n\nSatır 2',
        output: 'Satır 1\n⠀\nSatır 2',
        explanation:
          '"Satır 1" sonrasındaki sondaki boşlukları kaldırır ve boşluğun kalması için görünmez bir U+2800 ayırıcı ekler.',
      },
      {
        title: 'TikTok biyografisinde üç satırı ayırmak',
        input: 'Fitness Koçu\nÇevrimiçi Planlar\nAyrıntı için DM',
        output: 'Fitness Koçu\n⠀\nÇevrimiçi Planlar\n⠀\nAyrıntı için DM',
        explanation:
          'Her boş satıra ayırıcı koymak biyografi satırlarının birbirine yapışmasını engeller ve biyografi temiz görünür.',
      },
    ],
    benefits: [
      'Sosyal platformlarda satır çökme hatasını tetikleyen görünmez sondaki boşlukları giderir',
      'Hem görünmez Unicode ayırıcıları hem temiz nokta ayırıcıları destekler',
      'Cümle içindeki kazara çift boşlukları otomatik daraltır',
      'Toplam uzunluğu Instagram platformunun 150 karakterlik biyografi sınırına göre canlı kontrol eder',
    ],
    useCases: [
      'Okunabilir, birden çok paragraflı Instagram ve Facebook açıklamaları biçimlendirmek',
      'Üst üste dizilmiş maddeli Instagram veya TikTok profil biyografilerini düzenlemek',
      'Notion, Google Docs veya Notlar uygulamasından kopyalanan metni yayınlamadan önce temizlemek',
      'Ana açıklama hikâyesini alttaki eylem çağrısından ayırmak',
    ],
    faqs: [
      {
        question: 'Instagram platformuna doğrudan yapıştırınca boş satırlar neden kaybolur?',
        answer:
          'Mobil klavyeler ve metin düzenleyiciler cümle sonlarında sık sık sondaki boşluk bırakır; sosyal ayrıştırıcılar bunu biçimlendirme hatası sayıp tek satır sonuna daraltır.',
      },
      {
        question: 'Görünmez Ayırıcı modunda hangi karakter kullanılır?',
        answer:
          'Yalnızca boş satırlara U+2800 (Braille Desen Boşluğu) eklenir, böylece görsel aralık garip nokta veya tire göstermeden korunur.',
      },
      {
        question: 'Bu araç cümlelerimin içindeki metni değiştirir mi?',
        answer:
          'Yalnızca satır sonlarındaki sondaki boşluklar kırpılır; satır içindeki tekrarlanan boşluklar ise yalnızca bu seçenek açıldığında daraltılır.',
      },
      {
        question: 'Biyografi Satır Sonu Biçimlendirici ücretsiz mi?',
        answer:
          'Evet, tamamen ücretsizdir; kayıt gerekmez ve açıklamanız tarayıcınızda yerel olarak biçimlendirilir, hiçbir yere yüklenmez.',
      },
      {
        question: 'Instagram açıklamalarındaki satır sonları neden kaybolur?',
        answer:
          'Klavye ve düzenleyicilerin bıraktığı sondaki boşluklar, sosyal uygulamaların boş satırı hata sayıp daraltmasına yol açar. Bu boşlukları silip ayırıcı eklemek boşluğu korur.',
      },
      {
        question: 'Bu biçimlendiriciyi TikTok açıklamaları için de kullanabilir miyim?',
        answer:
          'Evet. TikTok açıklamaları aynı satır sonlarını ve görünmez ayırıcıları kabul eder, bu yüzden biçimlendirilmiş metin paragraf aralığıyla yapışır.',
      },
      {
        question: 'Bu biçimlendiriciyi Threads gönderileri için kullanabilir miyim?',
        answer:
          'Evet. Threads biçimlendirilmiş metindeki boş satırları korur, bu yüzden uzun gönderileri net paragraf aralıklarıyla yazabilirsiniz.',
      },
      {
        question: 'Instagram biyografim için kullanabilir miyim?',
        answer:
          'Evet. Üst üste dizilmiş, çok satırlı biyografilerde çalışır; ancak canlı sayaca dikkat edin, çünkü Instagram biyografileri yalnızca 150 karaktere izin verir ve her ayırıcı sayılır.',
      },
      {
        question: 'Görünmez Ayırıcı ile Nokta Ayırıcı arasındaki fark nedir?',
        answer:
          'Görünmez Ayırıcı boş satırlara boş Braille karakteri koyar, boşluk boş görünür; Nokta Ayırıcı ise oraya görünür bir nokta koyar, bazıları bunu güvenilirlik için tercih eder.',
      },
      {
        question: '"Yalnızca Sondaki Boşlukları Temizle" seçeneğini ne zaman seçmeliyim?',
        answer:
          'Platform satır sonlarınızı zaten koruyor ve yalnızca çökmeye yol açabilecek gizli sondaki boşlukları silmek istiyorsanız seçin.',
      },
      {
        question: 'Görünmez ayırıcı Instagram biyografi karakter sınırına dahil mi?',
        answer:
          'Evet. Her U+2800 ayırıcı bir karakterdir, bu yüzden birkaç boş satırlı bir biyografi 150 karakterlik bütçenin bir kısmını kullanır.',
      },
      {
        question: 'Görünmez karakter garip bir simge olarak görünür mü?',
        answer:
          'Çoğu modern telefonda boş alan gibi görünür, ancak çok eski yazı tipleri onu boş kutu gösterebilir; bu yüzden yapıştırdıktan sonra biyografinizi başka bir cihazda test edin.',
      },
      {
        question: 'Google Docs veya Notion uygulamasından kopyalanan metni biçimlendirebilir miyim?',
        answer:
          'Evet. Docs, Notion veya Notlar uygulamalarından kopyalanan metin sık sık gizli sondaki boşluk taşır ve bu araç sosyal uygulamaya yapıştırmadan önce onları temizler.',
      },
      {
        question: 'Araç cümlelerimin içindeki boşlukları siler mi?',
        answer:
          'Hayır. Yalnızca satır sonlarındaki sondaki boşlukları kırpar; satır içindeki tekrarlanan boşlukları ise yalnızca bu seçeneği açarsanız daraltır.',
      },
      {
        question: 'Paragraflar arasında kaç boş satır bırakmalıyım?',
        answer:
          'Genelde bir boş satır okunabilir açıklamalar için yeterlidir. İki veya daha fazlası akışta aralıklı görünebilir ve biyografide karakter tüketir.',
      },
      {
        question: 'Bu biçimlendiriciyi Facebook gönderileri için kullanabilir miyim?',
        answer:
          'Evet. Facebook genelde satır sonlarını kendi korur, ancak diğer uygulamalardan kopyalanan metnin sondaki boşluklarını temizlemek için araç yine de işe yarar.',
      },
      {
        question: 'Bu araç açıklamamı bir yere yüklüyor mu?',
        answer:
          'Hayır. Tüm biçimlendirme tarayıcınızda yerel olarak yapılır, bu yüzden açıklama metniniz asla sunucuya gönderilmez veya saklanmaz.',
      },
      {
        question: 'Yapıştırdıktan sonra açıklamam neden hâlâ çökmüş görünüyor?',
        answer:
          'Bazı uygulamalar yapıştırırken biçimlendirmeyi siler. Görünmez Ayırıcı modunda tekrar kopyalayın, başka bir uygulamadan geçirerek değil doğrudan açıklama alanına yapıştırın ve önizlemeyi kontrol edin.',
      },
      {
        question: 'X (Twitter) gönderilerinde satır sonu kullanabilir miyim?',
        answer:
          'Evet. X gönderilerde satır sonlarını destekler ve bu biçimlendirici orada da çalışır; ancak her yeni satırın 280 karakterlik sınıra dahil olduğunu unutmayın.',
      },
      {
        question: 'Bu biçimlendiriciyi YouTube açıklamaları için kullanabilir miyim?',
        answer:
          'Evet. YouTube açıklamalarında boş satırlar korunur, bu yüzden biçimlendirilmiş metin izleyiciler açıklamayı açtığında paragraf aralığını korur.',
      },
    ],
  },
  'youtube-timestamp-generator': {
    instructions: [
      {
        title: 'YouTube URL adresinizi yapıştırın (isteğe bağlı)',
        description:
          'Bölüm başına tıklanabilir derin bağlantıların otomatik oluşması için herhangi bir youtube.com/watch, youtu.be veya Shorts bağlantısı girin.',
      },
      {
        title: 'Bölüm ekleyip etiketleyin',
        description:
          'MM:SS veya HH:MM:SS biçiminde zaman damgaları ve bölüm başlıkları girin; satırlar karışırsa Kronolojik Sırala seçeneğine tıklayın.',
      },
      {
        title: 'Sıralayın ve bölüm kurallarını kontrol edin',
        description:
          'Listeyi kronolojik sıralayın ve kural denetimini inceleyin: 00:00 başlangıcı, en az 3 bölüm ve en az 10 saniye aralık.',
      },
      {
        title: 'Kopyalamadan önce uyarıları düzeltin',
        description:
          'Bir uyarı görünürse hatalı zaman damgasını veya başlığı düzeltin, böylece dışa aktarmadan önce her bölüm YouTube kurallarını geçer.',
      },
      {
        title: 'Açıklama bloğunu ve bağlantıları kopyalayın',
        description:
          'Video açıklamanız için biçimlendirilmiş bölüm bloğunu kopyalayın; yorumlar, program notları veya bültenler için tek tek ?t= bağlantılarını da kopyalayın.',
      },
      {
        title: 'İpucu: yayınlamadan önce bir bağlantıyı test edin',
        description:
          'Oluşturulan bir ?t= bağlantısını yeni sekmede açarak doğru ana gittiğini doğrulayın; özellikle zaman damgalarını son dakikada düzenlediyseniz.',
      },
    ],
    examples: [
      {
        title: '4 bölümlü eğitim açıklamasını biçimlendirmek',
        input: '00:00 Giriş · 01:15 Kurulum · 04:40 Demo · 08:20 Özet',
        output: '00:00 Giriş\n01:15 Kurulum\n04:40 Demo\n08:20 Özet (+ https://youtu.be/...?t=75)',
        explanation:
          '01:15 değerini doğrudan ?t=75s biçimine çevirir, tek tıkla paylaşılır.',
      },
      {
        title: 'Podcast bölümü için program notları hazırlamak',
        input: '00:00 Başlangıç · 07:30 İlk soru · 18:45 Ana konu',
        output: 'Her satırında ?t= derin bağlantısı olan üç satırlık bölüm bloğu',
        explanation:
          'Dinleyiciler program notlarından doğrudan dinlemek istedikleri bölüme gidebilir.',
      },
    ],
    benefits: [
      'YouTube platformunun 00:00 başlangıç, en az 3 bölüm ve 10 saniye kuralını otomatik doğrular',
      '60 dakikayı aşan videolarda HH:MM:SS biçimine sorunsuz geçer',
      'Standart, kısaltılmış, canlı, gömülü ve Shorts URL adreslerinden video kimliğini çıkarır',
      'Program notları ve sabitlenmiş yorumlar için paylaşıma hazır ?t= derin bağlantıları üretir',
    ],
    useCases: [
      'YouTube eğitim ve podcastlerine aranabilir bölüm kaydırma çubukları eklemek',
      'Tıklanabilir podcast bölümü program notu zaman damgaları oluşturmak',
      'Dokümantasyon, Slack veya Discord üzerinde eğitim adımlarını tam anıyla paylaşmak',
      'Uzun canlı yayın bölüm listelerindeki biçim hatalarını denetlemek',
    ],
    faqs: [
      {
        question: 'YouTube video bölümlerim ilerleme çubuğunda neden görünmüyor?',
        answer:
          'YouTube ilk zaman damgasının tam 00:00 olmasını, en az 3 zaman damgasının artan kronolojik sırada listelenmesini ve her bölümün en az 10 saniye sürmesini ister.',
      },
      {
        question: '60 dakikayı aşan zaman damgaları MM:SS mi yoksa HH:MM:SS mi olmalı?',
        answer:
          'Herhangi bir bölüm 60 dakikaya ulaşınca veya geçince araç tüm zaman damgalarını tutarlı şekilde HH:MM:SS biçiminde yazar.',
      },
      {
        question: 'Bu araç YouTube Data API sistemine bağlanır mı?',
        answer:
          'Hayır. Her şey Google hesabı OAuth izni veya API anahtarı gerektirmeden tarayıcınızda yerel olarak ayrıştırılır ve biçimlendirilir.',
      },
      {
        question: 'YouTube Zaman Damgası Oluşturucu ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda ücretsizdir; kayıt gerekmez ve hiçbir şey sunucuya yüklenmez.',
      },
      {
        question: 'YouTube en az kaç bölüm ister?',
        answer:
          'YouTube ilerleme çubuğunda bölüm işaretleri göstermeden önce açıklamada en az 3 bölüm ister.',
      },
      {
        question: 'İlk YouTube bölümü neden 00:00 değerinden başlamalı?',
        answer:
          'YouTube ilk zaman damgasını bölüm sisteminin çapası olarak kullanır, bu yüzden daha geç başlayan bir açıklama hiç bölüm oluşturmaz.',
      },
      {
        question: 'İki bölüm arası 10 saniyeden az olursa ne olur?',
        answer:
          'YouTube 10 saniyeden kısa bölümleri yok sayar, bu yüzden araç bu aralığı işaretler ve sonraki zaman damgasını ileri almalısınız.',
      },
      {
        question: 'YouTube Zaman Damgası Oluşturucu aracını Shorts için kullanabilir miyim?',
        answer:
          'Evet, Shorts bağlantısı yapıştırabilirsiniz; araç yine de ?t= atlama bağlantıları oluşturur, ancak bölümler daha çok uzun videolarda işe yarar.',
      },
      {
        question: '?t= atlama bağlantıları nasıl çalışır?',
        answer:
          'Her bağlantı video URL adresinin sonuna bölüm başlangıç süresini saniye cinsinden ekler, bu yüzden tıklayınca video tam o anda açılır.',
      },
      {
        question: 'Zaman damgası oluşturucu hangi YouTube URL biçimlerini kabul eder?',
        answer:
          'Standart youtube.com/watch bağlantılarını, kısaltılmış youtu.be bağlantılarını, canlı bağlantıları, gömülü bağlantıları ve Shorts bağlantılarını kabul eder.',
      },
      {
        question: 'Bölümler kronolojik sırada olmak zorunda mı?',
        answer:
          'Evet, YouTube artan sıra ister; satırlar karışırsa araç tek tıkla kronolojik sıralama yapar.',
      },
      {
        question: 'Yüklemediğim bir videoya bölüm ekleyebilir miyim?',
        answer:
          'Herhangi bir herkese açık video için tam anları paylaşmak üzere zaman damgası bağlantıları oluşturabilirsiniz, ancak bölümler yalnızca video sahibi açıklamaya eklediğinde görünür.',
      },
      {
        question: 'Bu araçla kaç bölüm ekleyebilirim?',
        answer:
          'Araçta sabit bir sınır yoktur, ancak çok uzun bölüm listeleri okunması zor olur; bu yüzden videonun gerçek bölümleriyle sınırlı tutun.',
      },
      {
        question: 'Bölüm başlığı eklemem gerekir mi, yoksa saat yeterli mi?',
        answer:
          'YouTube her zaman damgasının ardından bir başlık ister, bu yüzden listelediğiniz her bölüm için kısa ve açıklayıcı bir etiket ekleyin.',
      },
      {
        question: 'Bu zaman damgalarını podcast bölümü açıklamasında kullanabilir miyim?',
        answer:
          'Evet, aynı 00:00 biçimi podcast program notlarında ve bölüm açıklamalarında çalışır; ?t= bağlantıları dinleyiciler için kullanışlıdır.',
      },
      {
        question: 'Araç uzun videolarda tüm zaman damgalarını neden HH:MM:SS biçimine çevirir?',
        answer:
          'Karışık MM:SS ve HH:MM:SS biçimleri izleyicileri ve ayrıştırıcıları şaşırtır, bu yüzden araç her zaman damgasını tek bir tutarlı biçimde tutar.',
      },
      {
        question: 'Video URL adresim veya bölüm listem bir yere yükleniyor mu?',
        answer:
          'Hayır, tüm ayrıştırma ve biçimlendirme tarayıcınızda yerel olarak yapılır; URL adresleriniz ve bölüm başlıklarınız cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Bölüm ekledikten sonra düzenleyebilir miyim?',
        answer:
          'Evet, herhangi bir zaman damgasını veya başlığı değiştirebilir, listeyi yeniden sıralayabilir ve güncellenmiş bloğu kopyalamadan önce kural uyarılarını tekrar kontrol edebilirsiniz.',
      },
      {
        question: 'Oluşturulan bağlantı yanlış zamanda açılırsa ne yapmalıyım?',
        answer:
          'Zaman damgasının dakika ve saniye olarak doğru sırada girildiğini kontrol edin, sonra düzeltip bağlantıyı yeniden kopyalayın.',
      },
      {
        question: 'YouTube bölümleri izleyicilerin içeriği daha hızlı bulmasına yardımcı olur mu?',
        answer:
          'Evet, bölümler izleyicilerin doğrudan ihtiyaç duydukları bölüme atlamasını sağlar; bu da uzun eğitimleri, incelemeleri ve podcastleri gezinmesi kolay hale getirir.',
      },
    ],
  },
  'social-thumbnail-previewer': {
    instructions: [
      {
        title: 'Yerel küçük resim yükleyin',
        description:
          'Diskten PNG, JPG veya WebP dosyası seçin; dosya Object URL aracılığıyla yalnızca tarayıcınızın belleğinde kalır.',
      },
      {
        title: 'Başlık, kanal ve süreyi girin',
        description:
          'İki satırlı akış kesilmesini ve köşe rozeti kapsamını kontrol etmek için aday başlığınızı ve video uzunluğunuzu yazın.',
      },
      {
        title: 'Koyu Mod ve Güvenli Bölgeyi açıp kapatın',
        description:
          'Açık ve koyu akış arasında geçiş yapın; dışa aktarmadan önce kehribar renkli zaman damgası köşe bölgesi katmanını açın.',
      },
      {
        title: 'Akış ve kenar çubuğu boyutlarını karşılaştırın',
        description:
          'Küçük boyutta okunamayan yazıyı yakalamak için büyük masaüstü akış kartı ile küçük kenar çubuğu küçük resmini yan yana inceleyin.',
      },
      {
        title: 'Kural uyarılarını kontrol edin',
        description:
          '1280×720 boyut, 16:9 en boy oranı ve 2 MB dosya boyutu denetimlerini inceleyin; işaretlenen sorunu görsel düzenleyicinizde düzeltin.',
      },
      {
        title: 'İpucu: rozetin sakladığı yazıyı düzeltin',
        description:
          'Süre rozeti önemli bir yazıyı veya yüzü kapatıyorsa o öğeyi sağ alt köşeden uzağa taşıyın ve görseli yeniden yükleyin.',
      },
    ],
    examples: [
      {
        title: 'Sağ alt köşedeki yazı yerleşimini kontrol etmek',
        input: '1280×720 PNG · Süre: 12:48 · Güvenli Bölge: Açık',
        output: '12:48 süre rozetinin görseli kapattığı sağ alt köşeyi vurgular.',
        explanation:
          'Önemli küçük resim yüzlerinin veya sayılarının oynatıcı süre katmanının arkasında kalmasını engeller.',
      },
      {
        title: 'Koyu Modda küçük resim okunabilirliğini kontrol etmek',
        input: 'Açık renkli küçük resim · Koyu Mod akış önizlemesi',
        output: 'Koyu arka planda yazı kontrastı düşük görünüyor — koyu kenarlık ekleme önerisi',
        explanation:
          'Birçok izleyici YouTube platformunu Koyu Modda izler, bu yüzden iki modda da kontrol etmek gerekir.',
      },
    ],
    benefits: [
      'Gerçek piksel boyutlarını, en boy oranını ve KB/MB dosya boyutunu anında okur',
      'Hem büyük masaüstü akış kartlarını hem küçük önerilen kenar çubuğu küçük resimlerini önizler',
      'Yüksek kontrastlı okunabilirliği test etmek için Açık/Koyu akış geçişi sunar',
      'Sunucuya yükleme yok — yayınlanmamış sponsor veya ürün lansman görselleri için ideal',
    ],
    useCases: [
      'Yayınlamadan önce küçük kenar çubuğu küçük resimlerinde okunamayan yazıyı yakalamak',
      'Önemli görsellerin sağ alt süre katmanından uzak kalmasını sağlamak',
      'Küçük resimlerin YouTube platformunun 1280×720, 16:9 ve 2 MB altı gereksinimlerini karşıladığını doğrulamak',
      'Önemli anahtar sözcüklerin satır kesilmesinden önce görünmesi için başlık ifadelerini karşılaştırmak',
    ],
    faqs: [
      {
        question: 'Yüklediğim küçük resimler uzak bir sunucuya gönderiliyor mu?',
        answer:
          'Asla. Görseller yalnızca tarayıcı sekmenizde URL.createObjectURL() ile yüklenir ve değiştirilince veya sekme kapatılınca otomatik silinir.',
      },
      {
        question: 'YouTube küçük resimler için hangi boyut ve dosya boyutu önerir?',
        answer:
          'YouTube 1280×720 piksel (en az 640 piksel genişlik), 16:9 en boy oranı, JPG, PNG veya WebP biçiminde 2 MB altı dosya önerir.',
      },
      {
        question: 'Kenar çubuğu önizlemesi neden bu kadar önemli?',
        answer:
          'İzleme sayfasındaki önerilen küçük resimler çok daha küçük görünür (yaklaşık 168 piksel genişlik), bu yüzden küçük ölçekte okunabilirliği doğrulamak kalabalık tasarımları önler.',
      },
      {
        question: 'YouTube Küçük Resim Önizleyici ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda ücretsizdir; hesap gerekmez ve küçük resimleriniz hiçbir yere yüklenmez.',
      },
      {
        question: 'Küçük resim önizleyiciyle hangi görsel biçimlerini önizleyebilirim?',
        answer:
          'PNG, JPG ve WebP dosyaları yükleyebilirsiniz; bunlar YouTube platformunun özel küçük resimler için kabul ettiği biçimlerdir.',
      },
      {
        question: 'Önizleyici 16:9 en boy oranını nasıl denetler?',
        answer:
          'Görselinizin gerçek piksel boyutlarını okur ve genişlik-yükseklik oranı 16:9 ile eşleşmezse işaretler.',
      },
      {
        question: 'Bu önizleyicideki küçük resim güvenli bölgesi nedir?',
        answer:
          'Güvenli bölge katmanı, YouTube platformunun video süre rozetini koyduğu sağ alt köşeyi vurgular; böylece yüzleri ve anahtar yazıları o köşeden uzak tutabilirsiniz.',
      },
      {
        question: 'Küçük resmimi neden Koyu Modda önizlemeliyim?',
        answer:
          'Birçok izleyici YouTube platformunu Koyu Modda gezer ve parlak veya düşük kontrastlı tasarımlar koyu akış arka planında çok farklı görünebilir.',
      },
      {
        question: 'Önizleyici başlık kesilmesini nasıl gösterir?',
        answer:
          'Başlığınızı aynı iki satır sınırıyla gerçekçi bir akış kartında gösterir, böylece YouTube platformunun onu nerede kestiğini tam olarak görürsünüz.',
      },
      {
        question: 'Küçük resmim 2 MB boyutundan büyükse ne olur?',
        answer:
          'Araç dosya boyutunu işaretler; 2 MB altına inene kadar görseli daha yüksek sıkıştırmayla veya daha küçük çözünürlükte yeniden dışa aktarmalısınız.',
      },
      {
        question: 'Videom yayınlanmadan önce küçük resmini önizleyebilir miyim?',
        answer:
          'Evet, asıl kullanım budur: yayınlanmamış küçük resimleri yerel olarak test edin, sponsor görselleri ve lansman çalışmaları yayın gününe kadar gizli kalır.',
      },
      {
        question: 'Küçük resmim kenar çubuğu önizlemesinde neden bulanık görünüyor?',
        answer:
          'Küçük kenar çubuğu küçük resimleri görseli çok küçültür, bu yüzden ince yazı ve ince ayrıntı bulanıklaşır; büyük kalın yazı ve sade şekiller kullanın.',
      },
      {
        question: 'Önizleyici küçük resmimi değiştirir veya sıkıştırır mı?',
        answer:
          'Hayır, yalnızca dosyanızı olduğu gibi gösterir ve boyutlarını ve büyüklüğünü bildirir; görseli asla düzenlemez, yeniden boyutlandırmaz veya yeniden kodlamaz.',
      },
      {
        question: 'YouTube küçük resim için en az kaç piksel genişlik kabul eder?',
        answer:
          'YouTube en az 640 piksel genişlik ister, ancak net HD sonuç için 1280 piksel genişlik önerilir.',
      },
      {
        question: 'Aynı küçük resimle farklı başlıklar test edebilir miyim?',
        answer:
          'Evet, başlık alanını düzenleyin; akış önizlemesi anında güncellenir, böylece görseli yeniden yüklemeden ifade karşılaştırabilirsiniz.',
      },
      {
        question: 'Akış önizlemesinde küçük resim yazım neden kesiliyor?',
        answer:
          'Akış kartları başlıkları iki satırla sınırlar; bu yüzden en önemli sözleri başlığın başında, görünür kaldığı yerde tutun.',
      },
      {
        question: 'Önizleyici diğer platformların küçük resimleri için de çalışır mı?',
        answer:
          'YouTube akış düzenine göre yapılmıştır, ancak boyut, kontrast ve küçük ölçekte okunabilirlik denetimleri her video platformunda işe yarar.',
      },
      {
        question: 'Yüklenen küçük resmi nasıl kaldırırım?',
        answer:
          'Başka bir görsel yükleyerek değiştirin veya sekmeyi kapatın; bellekteki Object URL silinir ve hiçbir şey saklanmaz.',
      },
      {
        question: 'Önizleme gerçek YouTube platformundan farklı görünürse ne yapmalıyım?',
        answer:
          'YouTube zaman zaman düzenini değiştirir; bu yüzden önizlemeyi yakın bir tahmin sayın ve gizli veya liste dışı yüklemede son kontrolü yapın.',
      },
      {
        question: 'Küçük resim önizleyici canlı bir YouTube videosunun küçük resmini denetleyebilir mi?',
        answer:
          'Hayır, yalnızca yerel görsel dosyalarını önizler; yayınlanmış bir videoyu denetlemek için önce küçük resmini indirip burada yükleyin.',
      },
    ],
  },
  'hashtag-formatter': {
    instructions: [
      {
        title: 'Anahtar sözcükleri veya kaba etiketleri yapıştırın',
        description:
          'Etiketleri virgül, boşluk, noktalı virgül veya yeni satırla ayırarak girin; # işaretiyle veya işaretsiz, ikisi de olur.',
      },
      {
        title: 'Büyük küçük harf ve çıktı düzeni seçin',
        description:
          'Erişilebilirlik için PascalCase (#DeveDurumu), küçük harf veya Orijinal Durumu Koru seçeneklerinden birini seçin; satır içi veya satır satır çıktıyı da seçin.',
      },
      {
        title: 'Açıklama ayırıcı stilini seçin',
        description:
          'Etiketlerin açıklama metninin altına düzgün oturması için tek satırlı blok, dikey liste veya noktalı ayrılmış alt bilgi seçin.',
      },
      {
        title: 'Biçimlendiriciyi çalıştırın',
        description:
          'Araç geçersiz noktalama işaretlerini siler, büyük küçük harfe bakmadan yinelenenleri kaldırır ve her etiketi seçtiğiniz durumda yeniden oluşturur.',
      },
      {
        title: 'Sayıyı kontrol edip kopyalayın',
        description:
          'Kaç yinelenen silindiğini ve toplam etiket sayısını kontrol edin, Instagram platformunun 30 etiket sınırıyla karşılaştırın, sonra Etiketleri Kopyala seçeneğine basın.',
      },
      {
        title: 'İpucu: platform sınırını aşan etiketleri kısaltın',
        description:
          'Sayı 30 değerini geçerse önce en az ilgili etiketleri çıkarın, çünkü sınırı aşan etiketler Instagram tarafından yok sayılır.',
      },
    ],
    examples: [
      {
        title: 'Düz ifadeleri erişilebilir DeveDurumu etiketlerine çevirmek',
        input: 'içerik pazarlaması, verimlilik ipuçları, İçerik Pazarlaması',
        output: '#İçerikPazarlaması #Verimlilikİpuçları (1 yinelenen kaldırıldı)',
        explanation:
          'Her sözcüğün başını büyük harf yapmak ekran okuyucuların çok sözcüklü etiketleri doğru telaffuz etmesine yardımcı olur.',
      },
      {
        title: 'Instagram gönderisi için noktalı ayrılmış alt bilgi oluşturmak',
        input: 'seyahat, yemek, fotoğrafçılık, seyahat',
        output: '#Seyahat · #Yemek · #Fotoğrafçılık (1 yinelenen kaldırıldı)',
        explanation:
          'Nokta ayırıcılar etiketleri açıklama katlanmasının altına iter, görünür açıklama temiz kalır ve etiketler yine de çalışır.',
      },
    ],
    benefits: [
      'Dijital erişilebilirlik kılavuzlarının önerdiği #PascalCase biçimini destekler',
      'Aynı etiketleri büyük küçük harfe bakmadan otomatik yinelenenlerden arındırır',
      'Tıklanabilir etiketleri bozan tire, nokta, virgül gibi desteklenmeyen noktalama işaretlerini siler',
      'Platform sınırlarına göre tam etiket sayısını gösterir',
    ],
    useCases: [
      'Pazarlama tablolarında paylaşılan kampanya etiket bankalarını temizlemek',
      'Çok sözcüklü SEO anahtar sözcüklerini tıklanabilir sosyal etiketlere çevirmek',
      'Eski küçük harfli etiket listelerini erişilebilir DeveDurumu biçimine güncellemek',
      'Instagram gönderileri için düzgün noktalı ayrılmış etiket alt bilgileri oluşturmak',
    ],
    faqs: [
      {
        question: 'Etiketler için DeveDurumu / PascalCase neden önerilir?',
        answer:
          'Ekran okuyucular büyük harfli sözcük sınırlarını ayrı ayrı okur; örneğin #SosyalMedyaAraçları "Sosyal Medya Araçları" diye okunur, uzun küçük harfli diziyi tek bozuk sözcük diye okumak yerine.',
      },
      {
        question: 'Etiket içindeki tire ve noktalar neden silinir?',
        answer:
          'Çoğu sosyal platform tıklanabilir etiketi ilk boşluk, tire veya noktalama işaretinde bitirir; bu yüzden tireyi silmek etiketin tamamını korur.',
      },
      {
        question: 'Bu araç yapay zekâ kullanıyor mu veya yasaklı etiketleri tahmin ediyor mu?',
        answer:
          'Hayır. Yalnızca verdiğiniz etiketleri belirli kurallarla temizler, biçimlendirir ve yinelenenleri kaldırır.',
      },
      {
        question: 'Etiket Biçimlendirici ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda ücretsizdir; kayıt gerekmez ve etiketleriniz yüklenmeden yerel olarak işlenir.',
      },
      {
        question: 'Instagram etiket sınırı nedir?',
        answer:
          'Instagram gönderi başına 30 etikete izin verir ve bu araç etiketlerinizi sayar, böylece sınır içinde kalırsınız.',
      },
      {
        question: 'Etiket Biçimlendirici yinelenenleri nasıl kaldırır?',
        answer:
          'Etiketleri büyük küçük harfe bakmadan karşılaştırır; bu yüzden #İçerikPazarlaması ile #içerikpazarlaması aynı etiket sayılır ve yalnızca biri tutulur.',
      },
      {
        question: 'Etiketleri # işaretiyle veya işaretsiz yapıştırabilir miyim?',
        answer:
          'Evet, ikisi de olur: araç düz anahtar sözcüklere # ekler ve # ile yazdıklarınızı olduğu gibi bırakır.',
      },
      {
        question: 'Etiketler arasında hangi ayırıcıları kullanabilirim?',
        answer:
          'Etiketleri virgül, boşluk, noktalı virgül veya yeni satırla ayırabilirsiniz; araç tek yapıştırmada karışık ayırıcıları da işler.',
      },
      {
        question: 'DeveDurumu ile küçük harfli etiketler arasındaki fark nedir?',
        answer:
          'DeveDurumu her sözcüğü büyük harfle başlatır (#SosyalMedya), bu ekran okuyucular için kolaylık sağlar; küçük harf (#sosyalmedya) ise tek sözcük gibi okunan bir stil tercihidir.',
      },
      {
        question: 'Etiket Biçimlendirici bir etiketin yasaklı olup olmadığını denetler mi?',
        answer:
          'Hayır, yasak listesini veya canlı platform verisini denetlemez; yalnızca verdiğiniz etiketleri temizleyip biçimlendirir.',
      },
      {
        question: 'Biçimlendirilmiş etiketleri TikTok ve X platformunda da kullanabilir miyim?',
        answer:
          'Evet, temizlenmiş etiketler her platformda çalışır; ancak her platformun kendi sınırları vardır, örneğin Instagram platformunda 30 etiket sınırı.',
      },
      {
        question: 'Biçimlendirmeden sonra bazı etiketlerim neden kayboluyor?',
        answer:
          'Yalnızca noktalama işareti veya desteklenmeyen karakterlerden oluşan etiketler silinir, çünkü tıklanabilir etiket olarak zaten çalışmazlar.',
      },
      {
        question: 'Noktalı ayrılmış etiket alt bilgileri ne işe yarar?',
        answer:
          'Nokta ayırıcılar etiketleri Instagram platformunda açıklama katlanmasının altına iter; görünür açıklama temiz kalırken etiketler yine de çalışır.',
      },
      {
        question: 'Etiketleri dikey listede biçimlendirebilir miyim?',
        answer:
          'Evet, satır satır düzeni seçin; her satıra bir etiket gelir, bu yorumlar ve açıklama alt bilgileri için kullanışlıdır.',
      },
      {
        question: 'Etiket Biçimlendirici İngilizce olmayan sözcüklerle çalışır mı?',
        answer:
          'Evet, platform etiketlerde desteklediği sürece diğer alfabelerin harflerini etikette korur.',
      },
      {
        question: 'Gönderi başına kaç etiket kullanmalıyım?',
        answer:
          'Tek bir doğru sayı yoktur; gönderiyle gerçekten ilgili etiketleri kullanın ve sayaçla platform sınırının içinde kalın.',
      },
      {
        question: 'Etiket grubunu yeniden kullanmak için kaydedebilir miyim?',
        answer:
          'Araç grupları saklamaz; bu yüzden biçimlendirilmiş bloğu kendi notlarınıza veya tablonuza kopyalayıp saklayın, sonra tekrar kullanın.',
      },
      {
        question: 'Orijinal Durumu Koru seçeneği asıl büyük harf kullanımımı neden korur?',
        answer:
          'Orijinal Durumu Koru, marka etiketleri veya tam yazdığınız gibi kalmasını istediğiniz kısaltmalar içindir; diğer modlar her etiketi aynı hale getirir.',
      },
      {
        question: 'Etiketlerim sunucuya yükleniyor mu?',
        answer:
          'Hayır, tüm biçimlendirme tarayıcınızda yerel olarak yapılır; bu yüzden anahtar sözcük listeleriniz ve kampanya etiketleriniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Biçimlendirilmiş etiket bir platformda hâlâ çalışmazsa ne yapmalıyım?',
        answer:
          'O etiket için platformun kendi kurallarını kontrol edin; çünkü bazı platformlar biçim temiz olsa bile bazı sözcükleri engeller veya etiket uzunluğunu sınırlar.',
      },
    ],
  },
  'caption-template-builder': {
    instructions: [
      {
        title: 'Gönderi yapısını seçin',
        description:
          'Amacınıza uygun olarak üstteki çubuktan beş hazır şablondan birini seçin.',
      },
      {
        title: 'Kanca, nokta ve eylem çağrınızı doldurun',
        description:
          'Gerçek açılış kancanızı, sorun bağlamını, madde madde çıkarımları (satır başına bir), eylem çağrısını ve etiketleri girin.',
      },
      {
        title: 'Canlı önizlemeyi inceleyin',
        description:
          'Biçimlendirilmiş gönderiyi görüneceği gibi okuyun; paragraf aralığını ve kanca, çıkarım ve eylem çağrısı sırasını kontrol edin.',
      },
      {
        title: 'Karakter ve sözcük uyumunu kontrol edin',
        description:
          'X platformunun 280 karakter sınırı ile Instagram veya LinkedIn sınırlarına göre canlı sayaca bakın; sınırı aşan satırları kısaltın.',
      },
      {
        title: 'Kopyalayın ve uzunluğu doğrulayın',
        description:
          'Canlı biçimlendirilmiş gönderiyi inceleyin, X veya Instagram/LinkedIn için karakter ve sözcük uyumunu doğrulayın, sonra Açıklamayı Kopyala seçeneğine basın.',
      },
      {
        title: 'İpucu: aynı notları başka bir şablonda deneyin',
        description:
          'Yeniden yazmadan şablon değiştirin; kanca ve noktalarınızın PAS, eğitim veya kontrol listesi olarak nasıl okunduğunu yayınlamadan önce görün.',
      },
    ],
    examples: [
      {
        title: '3 adımlı uygulanabilir LinkedIn gönderisi oluşturmak',
        input: 'Kanca + Bağlam + 3 madde + Eylem çağrısı',
        output: 'Numaralandırılmış temiz gönderi, paragraf aralığı özlü ve altta etiketler.',
        explanation:
          'Tam sözlerinizi belirli bir yapıya sokar; sesinizi değiştirmez, iddia uydurmaz.',
      },
      {
        title: 'Ürün lansmanı için PAS gönderisi oluşturmak',
        input: 'Sorun: yavaş görsel · Acı: sayfa yüklenmesinde gecikme · Çözüm: sıkıştırıcı araç',
        output: 'Sorun–Kışkırtma–Çözüm yapısında hazır açıklama, sonda eylem çağrısı',
        explanation:
          'PAS önce sorunu söyler, sonra acısını büyütür, sonunda çözüm ve eylem çağrısı verir.',
      },
    ],
    benefits: [
      '%100 şeffaf belirli derleme — genel yapay zekâ sözleri yok, uydurulmuş gerçek yok',
      'Kanca, çıkarım ve eylem çağrısı arasında temiz görsel hiyerarşi kurar',
      'Canlı karakter ve sözcük sayacı X platformunun 280 ve IG/LinkedIn sınırlarında uyarı verir',
      'Aynı notlarda beş klasik çerçeveyi tek tıkla denemenizi sağlar',
    ],
    useCases: [
      'Sosyal kanallar için tutarlı ürün lansmanı duyuruları hazırlamak',
      'Mühendislik veya pazarlama taslak madde notlarını okunabilir gönderilere çevirmek',
      'Eğitici karusel veya haftalık ipucu kontrol listesi biçimlendirmek',
      'Zamanlamadan önce açılış kancasını değer listesinden net ayırmak',
    ],
    faqs: [
      {
        question: 'Bu araç sözlerimi yeniden yazmak için yapay zekâ dil modeli kullanıyor mu?',
        answer:
          'Hayır. Tamamen belirli yapılı bir şablon oluşturucudur ve tarayıcınızda çalışır; önizlemedeki her cümle yalnızca kendi girdilerinizden gelir.',
      },
      {
        question: 'Daha fazla adım veya kontrol listesi öğesi nasıl eklerim?',
        answer:
          'Önemli Çıkarımlar kutusunda Enter tuşuna basarak yeni satır ekleyin; boş olmayan her satır otomatik olarak numaralı öğe, madde veya onay kutusuna biçimlendirilir.',
      },
      {
        question: 'Instagram platformuna yapıştırdıktan sonra boş satırları nasıl korurum?',
        answer:
          'Evet. Uygulama mobilde aralığı yine de daraltırsa kopyalanan açıklamayı Instagram ve Biyografi Satır Sonu Biçimlendirici aracına bırakın, görünmez ayırıcılar eklensin.',
      },
      {
        question: 'Açıklama Şablon Oluşturucu ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda ücretsizdir; kayıt gerekmez ve taslaklarınız yüklenmeden yerel olarak işlenir.',
      },
      {
        question: 'Açıklama Şablon Oluşturucu aracında PAS şablonu nedir?',
        answer:
          'PAS, Sorun–Kışkırtma–Çözüm anlamına gelir: okurun sorununu söyleyin, neden can yaktığını vurgulayın, sonra çözümünüzü ve eylem çağrınızı sunun.',
      },
      {
        question: 'Bu oluşturucu hangi açıklama şablonlarını içerir?',
        answer:
          'Beş şablon içerir: Sorun–Kışkırtma–Çözüm, Uygulanabilir Dağılım, Önce–Sonra–Köprü, Denetim Kontrol Listesi ve Efsane ile Gerçek.',
      },
      {
        question: 'Açıklama Şablon Oluşturucu aracını LinkedIn gönderileri için kullanabilir miyim?',
        answer:
          'Evet, kanca, çıkarım ve eylem çağrısı yapısı LinkedIn platformunda iyi çalışır ve canlı sayaç sınırlar içinde kalmanıza yardımcı olur.',
      },
      {
        question: 'Açıklama Şablon Oluşturucu aracını Instagram açıklamaları için kullanabilir miyim?',
        answer:
          'Evet, şablonlar Instagram açıklamaları için temiz biçimlendirilir ve oluşturulan açıklamanın sonuna etiket ekleyebilirsiniz.',
      },
      {
        question: 'Önce–Sonra–Köprü açıklama şablonu nedir?',
        answer:
          'Okurun mevcut durumunu gösterir, sonra iyileşmiş sonraki durumu anlatır ve ardından ürününüz, yönteminiz veya önerinizle ikisi arasında köprü kurar.',
      },
      {
        question: 'Açıklama oluşturucudaki karakter sayacı nasıl çalışır?',
        answer:
          'Yazarken karakterleri ve sözcükleri canlı sayar ve taslağınız X platformunun 280 karakteri gibi sınırları aştığında uyarı verir.',
      },
      {
        question: 'Metnimi kaybetmeden şablon değiştirebilir miyim?',
        answer:
          'Evet, şablon değiştirmek kanca, nokta ve eylem çağrınızı olduğu gibi bırakır; bu yüzden yeniden yazmadan yapıları karşılaştırabilirsiniz.',
      },
      {
        question: 'Oluşturucu etiketleri otomatik ekler mi?',
        answer:
          'Hayır, yalnızca kendiniz girdiğiniz etiketleri yerleştirir; bu yüzden her açıklamada hangi etiketlerin yer alacağına siz karar verirsiniz.',
      },
      {
        question: 'Sosyal medya açıklaması için iyi bir kanca nasıldır?',
        answer:
          'İyi bir kanca, tek kısa satırda net bir fayda, şaşırtıcı bir gerçek veya tanıdık bir sorun söyler; okuru kaydırmayı bırakmaya iter.',
      },
      {
        question: 'Açıklama oluşturucuyu X (Twitter) gönderileri için kullanabilir miyim?',
        answer:
          'Evet, sayaç 280 karakterde uyarı verir; bu yüzden kanca ve çıkarımlarınızı kısaltarak gönderiyi tek tweete sığdırabilirsiniz.',
      },
      {
        question: 'Efsane ile Gerçek açıklama şablonu ne işe yarar?',
        answer:
          'Yaygın bir yanlış anlamayı doğru gerçekle eşleştirir; bu eğitici gönderilerde ve alanınızdaki yanlış önerileri düzeltmede işe yarar.',
      },
      {
        question: 'Kopyaladıktan sonra açıklamayı düzenleyebilir miyim?',
        answer:
          'Evet, kopyalanan metin düz metindir; bu yüzden yayınlamadan önce zamanlama uygulamanızda sözleri, emojileri veya satır sonlarını değiştirebilirsiniz.',
      },
      {
        question: 'Oluşturucu açıklamalarımı kaydeder mi?',
        answer:
          'Hayır, taslaklar yalnızca tarayıcı sekmenizde kalır; bu yüzden bitmiş açıklamaları sayfayı kapatmadan önce kendi notlarınıza veya zamanlayıcınıza kopyalayın.',
      },
      {
        question: 'Eylem çağrısı alanına ne yazmalıyım?',
        answer:
          'Net bir sonraki adım yazın; örneğin yorum yapmak, gönderiyi kaydetmek, bağlantınıza tıklamak veya hesabı takip etmek.',
      },
      {
        question: 'Açıklama oluşturucuyu ürün lansmanı duyuruları için kullanabilir miyim?',
        answer:
          'Evet, PAS veya Önce–Sonra–Köprü şablonları lansman için uygundur: sorunu söyleyin, sonucu gösterin ve sonunda nereden alınacağını belirtin.',
      },
      {
        question: 'Oluşturucu sözlerimi neden yeniden yazmıyor veya düzeltmiyor?',
        answer:
          'Bilerek belirli kurallarla çalışır; böylece sesiniz ve gerçekleriniz tam yazdığınız gibi kalır, genel üretilmiş kopyayla değişmez.',
      },
    ],
  },
  'social-handle-formatter': {
    instructions: [
      {
        title: 'Marka veya içerik üreticisi adı girin',
        description:
          'Temiz ve tutarlı kullanıcı adı adaylarının oluşması için marka veya görünen adınızı yazın (örneğin Utility Hub).',
      },
      {
        title: 'Varyasyonları test edin veya doğrudan düzenleyin',
        description:
          'Herhangi bir varyasyon hapına tıklayın veya Aktif Kullanıcı Adı alanını kendiniz değiştirerek get, use, hq veya studio gibi ön ek ve son ekleri test edin.',
      },
      {
        title: 'Her platformun kurallarını kontrol edin',
        description:
          'X, Instagram, TikTok, YouTube, Threads ve GitHub üzerinde her aday için Geçerli biçim durumuna bakın.',
      },
      {
        title: 'Geçersiz karakterleri düzeltin',
        description:
          'Bir platform kullanıcı adını işaretlerse o karakteri kaldırın; örneğin X ve Instagram için tireleri silin veya GitHub için alt çizgileri silin.',
      },
      {
        title: 'Kuralları inceleyip URL adreslerini açın',
        description:
          'X, Instagram, TikTok, YouTube, Threads ve GitHub üzerinde Geçerli biçim durumuna bakın, sonra URL Adresini Kontrol Et seçeneğine basarak canlı alınma durumunu inceleyin.',
      },
      {
        title: 'İpucu: almadan önce kısa listenizi kopyalayın',
        description:
          'Kullandığınız her platformda geçen kullanıcı adlarını kopyalayın, sonra kitlenizin en büyük olduğu yerden başlayarak tek tek alın.',
      },
    ],
    examples: [
      {
        title: 'Platformlara göre tireli ve alt çizgili kullanıcı adlarını karşılaştırmak',
        input: 'Kullanıcı adı: utility-hub',
        output: 'GitHub ve YouTube @kullanıcıadı için geçerli · X ve Instagram platformunda geçersiz (tire kullanılmaz)',
        explanation:
          'Marka kullanıcı adının büyük sosyal ağlarda aynı şekilde çalışamayacağını önceden gösterir.',
      },
      {
        title: 'X platformunun 15 karakter sınırını kontrol etmek',
        input: 'Kullanıcı adı: utilityflowtools (17 karakter)',
        output: 'X platformunda geçersiz — 15 karakterden uzun · Instagram ve TikTok platformunda geçerli',
        explanation:
          'X kullanıcı adları en fazla 15 karakterdir, bu yüzden uzun kullanıcı adı orada çalışmaz.',
      },
    ],
    benefits: [
      'Platform uyumsuzluğunu önceden yakalar (örneğin tireler X/Instagram platformunda geçmez ama GitHub/YouTube platformunda geçer)',
      'X platformunun katı 15 karakterlik azami sınırını uygular',
      'Çevrimdışı canlı uygunluk rozeti asla uydurmaz — doğrudan tıklanabilir profil bağlantıları verir',
      'Tek tıkla @kullanıcıadı pano kopyalama sunar',
    ],
    useCases: [
      'Yeni girişim, podcast, bülten veya açık kaynak projesini her yerde aynı adla adlandırmak',
      'Tek sözcüklü kullanıcı adı alındığında yedek ön ek veya son ek bulmak',
      '18 karakterlik bir kullanıcı adının X platformunun 15 karakter sınırını aşıp aşmadığını kontrol etmek',
      'Lansman kontrol listesi için tüm resmi sosyal profil URL adreslerini hazırlamak',
    ],
    faqs: [
      {
        question: 'Bu araç canlı yeşil "Müsait" rozetini neden otomatik göstermiyor?',
        answer:
          'Büyük sosyal ağlar oturumsuz tarayıcı CORS denetimlerini engeller ve otomatik uygunluk taramasını hız sınırına takar. Güvenilmez veya uydurma tahminler göstermek yerine araç platformun resmi sözdizimi kurallarını yerel olarak doğrular ve her platformu doğru kontrol etmek için doğrudan URL bağlantıları verir.',
      },
      {
        question: 'Hangi kullanıcı adı karakterleri neredeyse her büyük ağda çalışır?',
        answer:
          '4–15 karakter içinde küçük harfler (a–z), rakamlar (0–9) ve alt çizgi (_) X, Instagram, TikTok, YouTube ve Threads platformunda aynı anda çalışır.',
      },
      {
        question: 'GitHub alt çizgili kullanıcı adlarını neden kabul etmiyor?',
        answer:
          'GitHub kullanıcı adlarında yalnızca harf rakam ve ortada tek tireye izin verilir; X ve Instagram platformunda ise tire kullanılmaz.',
      },
      {
        question: 'Sosyal Kullanıcı Adı Biçimlendirici ücretsiz mi?',
        answer:
          'Evet, tarayıcınızda ücretsizdir; kayıt gerekmez ve marka adlarınız ile kullanıcı adı fikirleriniz yüklenmeden yerel olarak işlenir.',
      },
      {
        question: 'X platformunda kullanıcı adı azami uzunluğu nedir?',
        answer:
          'X kullanıcı adları en fazla 15 karakter olabilir; bu yüzden daha uzun adaylar X için işaretlenir.',
      },
      {
        question: 'Bir sosyal kullanıcı adının gerçekten müsait olup olmadığını nasıl kontrol ederim?',
        answer:
          'Her platform için URL Adresini Kontrol Et bağlantısına basarak canlı profil sayfasını açın; sayfada gerçek bir profil görünüyorsa kullanıcı adı alınmıştır.',
      },
      {
        question: 'Tireler GitHub platformunda neden çalışır ama X veya Instagram platformunda çalışmaz?',
        answer:
          'Her platform izin verilen karakterleri kendisi belirler: GitHub tireye izin verirken X ve Instagram yalnızca harf, rakam ve alt çizgiye izin verir.',
      },
      {
        question: 'Tam adım alınmışsa hangi kullanıcı adı ön eklerini denemeliyim?',
        answer:
          'get, use, the, hq, studio, official ve app yaygın ön ek ve son eklerdir; araç test etmeniz için bu varyasyonları kendisi oluşturur.',
      },
      {
        question: 'Sosyal Kullanıcı Adı Biçimlendirici YouTube kullanıcı adlarını denetleyebilir mi?',
        answer:
          'Evet, adayları YouTube platformunun @kullanıcıadı karakter kurallarına göre doğrular ve kullanıcı adının canlı durumunu görmek için doğrudan bağlantı verir.',
      },
      {
        question: 'Çoğu platformda kullanıcı adı asgari uzunluğu nedir?',
        answer:
          'Çoğu platform en az birkaç karakter ister ve X, Instagram, TikTok, YouTube ile Threads platformunda çalışan kullanıcı adları genelde 4–15 karakterdir.',
      },
      {
        question: 'Kullanıcı adım her sosyal platformda aynı olmalı mı?',
        answer:
          'Aynı kullanıcı adları markanızı bulmayı kolaylaştırır ve taklit etmeyi zorlaştırır; bu yüzden kullandığınız her platformun kurallarını geçen tek bir kullanıcı adı seçin.',
      },
      {
        question: 'Sosyal kullanıcı adımda rakam kullanabilir miyim?',
        answer:
          'Evet, rakamlara aracın denetlediği altı platformun tamamında izin verilir; ancak rakamla başlayan bir kullanıcı adı daha az temiz görünebilir.',
      },
      {
        question: 'Araç kullanıcı adımı geçerli gösteriyor ama platform neden reddediyor?',
        answer:
          'Sözdizimi geçerliliği yalnızca bir denetimdir; platform kullanıcı adını ayrıca zaten alındığı, ayrıldığı veya ilke gereği engellendiği için de reddedebilir.',
      },
      {
        question: 'Sosyal Kullanıcı Adı Biçimlendirici Threads kullanıcı adlarını denetler mi?',
        answer:
          'Evet, adayları X, Instagram, TikTok, YouTube ve GitHub ile birlikte Threads kullanıcı adı kurallarına göre de doğrular.',
      },
      {
        question: 'Sosyal kullanıcı adında nokta kullanabilir miyim?',
        answer:
          'Instagram kullanıcı adlarında noktaya izin verir, ancak X, TikTok ve GitHub vermez; bu yüzden noktalı bir kullanıcı adı her yerde aynı çalışmaz.',
      },
      {
        question: 'Yeni girişim veya podcast için kullanıcı adı nasıl seçerim?',
        answer:
          'Marka adınızı girin, her platformda geçen varyasyonlardan kısa liste yapın, sonra duyurmadan önce aynı kullanıcı adını her yerde alın.',
      },
      {
        question: 'GitHub platformunda alt çizgili kullanıcı adı test edebilir miyim?',
        answer:
          'Test edebilirsiniz, ancak GitHub alt çizgiyi reddeder; bu yüzden araç X ve Instagram platformunda geçse bile onu GitHub için geçersiz işaretler.',
      },
      {
        question: 'Marka adı fikirlerim sunucuya yükleniyor mu?',
        answer:
          'Hayır, kullanıcı adı oluşturma ve doğrulama tamamen tarayıcınızda yerel olarak yapılır; bu yüzden adlandırma fikirleriniz cihazınızdan asla çıkmaz.',
      },
      {
        question: 'Sevdiğim kullanıcı adı bir platformda alınmışsa ne yapmalıyım?',
        answer:
          'Bir ağda farklı ad kullanmak yerine her platformda aynı ön ek veya son eki deneyin; böylece markanızı bulmak kolay kalır.',
      },
      {
        question: 'Araçtan kullanıcı adını doğrudan kopyalayabilir miyim?',
        answer:
          'Evet, araçta aktif kullanıcı adı için tek tıkla kopyalama vardır; böylece kayıt formuna yeniden yazmadan yapıştırabilirsiniz.',
      },
    ],
  },
};
