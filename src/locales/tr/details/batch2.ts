// Detail content for TR tools — Turkish locale for UtilityFlow.
// Loaded on demand, one batch at a time, only on the tool's own page.
import type { ToolDetail } from '../../../types/tool';

export const TOOL_DETAILS: Record<string, ToolDetail> = {
  'base64-encoder-decoder': {
    instructions: [
      {
        title: 'Kodla veya Çöz seçin',
        description:
          'Çalışma alanının üst kısmından Base64 ile Kodla ya da Base64 Çöz seçeneğini seçin.',
      },
      {
        title: 'Metninizi veya Base64 dizginizi yapıştırın',
        description:
          'Kodlamak istediğiniz UTF-8 metni ya da çözmek istediğiniz Base64 dizgisini giriş kutusuna yazın.',
      },
      {
        title: 'Base64 seçeneklerini ayarlayın',
        description:
          'Kodlama modunda isterseniz URL uyumlu (- ve _) çıktıyı açın ya da sondaki = dolgu karakterlerini kaldırın.',
      },
      {
        title: 'Çıktıyı ve doğrulamayı kontrol edin',
        description:
          'Dönüştürülen sonucu anında görün. Çözme başarısız olursa eksik dolguyu ya da Base64 alfabesi dışındaki karakterleri kontrol edin.',
      },
      {
        title: 'Kopyalayın veya takas edin',
        description:
          'Sonucu panoya kopyalayın ya da Takas düğmesiyle yönü tersine çevirip mevcut çıktıyı giriş olarak kullanın.',
      },
      {
        title: 'İpucu: URL uyumlu jetonları işleme',
        description:
          'Bir URL adresinden jeton yapıştırırken URL uyumlu modu kullanın; böylece - ve _ doğru işlenir. Unutmayın: Base64 bir kodlamadır, şifreleme değildir; asla güvenli depolama saymayın.',
      },
    ],
    examples: [
      {
        title: 'UTF-8 dizgisi kodlama',
        input: 'UtilityFlow: UTF-8 ✓',
        output: 'VXRpbGl0eUZsb3c6IFVURi04IOKckw==',
        explanation: 'Base64 dönüşümünden önce TextEncoder ile UTF-8 bayt serileştirmesi kullanır.',
      },
      {
        title: 'Basic Auth başlığı oluşturma',
        input: 'kullanici:sifre123',
        output: 'a3VsbGFuaWNpOnNpZnJlMTIz',
        explanation: 'kullanici:sifre biçimini kodlayarak Authorization: Basic başlığı için hazırlar.',
      },
    ],
    benefits: [
      'UTF-8 uyumlu kodlama ve çözme, eski btoa/atob araçlarının Unicode çökmelerini önler',
      'RFC 4648 URL uyumlu alfabeyi (- ve _) ve dolgusuz çözmeyi destekler',
      'Tek tıkla Takas, çıktıyı girişe taşıyıp modu tersine çevirir',
      'API anahtarları ve Basic Auth başlıkları için güvenli yerel çalışma',
    ],
    useCases: [
      'HTTP Basic Authentication kimlik bilgilerini yerel olarak kodlama',
      'Base64 ile kodlanmış JSON yüklerini veya data URI adreslerini inceleme',
      'Sorgu parametreleri için URL uyumlu Base64 jetonları hazırlama',
      'Base64 e-posta veya webhook gövde parçalarını çözme',
    ],
    faqs: [
      {
        question: 'Standart btoa() neden Unicode karakterlerde başarısız olur?',
        answer:
          'Yerel btoa() yalnızca tek baytlık Latin-1 kod noktalarını kabul eder. Bu araç metni önce TextEncoder ile UTF-8 baytlara çevirdiği için tüm uluslararası alfabeler ve emojiler sorunsuz kodlanır.',
      },
      {
        question: 'Çözücü, "=" dolgusu olmayan URL uyumlu Base64 dizgisini işleyebilir mi?',
        answer:
          'Evet. Çözücü, çözmeden önce "-" ve "_" karakterlerini otomatik olarak "+" ve "/" karakterlerine çevirir ve eksik "=" dolgusunu geri ekler.',
      },
      {
        question: 'Base64 bir şifreleme midir?',
        answer:
          'Hayır. Base64, ikili veya metin veriyi ASCII olarak göstermenin bir kodlama biçimidir; kriptografik şifreleme değildir.',
      },
      {
        question: 'Base64 Kodlayıcı ücretsiz mi?',
        answer:
          'Evet, Base64 Kodlayıcı tamamen ücretsizdir; kayıt gerekmez ve dönüştürebileceğiniz dizgi sayısında sınır yoktur.',
      },
      {
        question: 'Bir Base64 dizgisinde hangi karakterler bulunabilir?',
        answer:
          'Standart Base64, A–Z, a–z ve 0–9 karakterlerinin yanında + ve / kullanır; dolgu için = kullanılır. URL uyumlu sürüm + ve / karakterlerini - ve _ ile değiştirir.',
      },
      {
        question: 'Base64 çıktım neden girdimden daha uzun?',
        answer:
          'Base64, her 3 baytlık girdiyi 4 ASCII karakterle gösterir; bu yüzden kodlanmış çıktı, özgün metinden yaklaşık üçte bir daha uzun olur.',
      },
      {
        question: 'Emoji ve İngilizce olmayan metinleri Base64 ile kodlayabilir miyim?',
        answer:
          'Evet. Araç metni önce UTF-8 bayt olarak kodladığı için emojiler, aksanlı harfler ve Latin olmayan alfabeler doğru şekilde kodlanır ve çözülür.',
      },
      {
        question: 'URL uyumlu Base64 nedir ve ne zaman kullanmalıyım?',
        answer:
          'URL uyumlu Base64, + ve / karakterlerini - ve _ ile değiştirir; böylece kodlanmış dizgi yüzde kodlaması olmadan URL adresinde veya dosya adında durabilir. Sorgu parametrelerinde gönderilen jetonlar için bunu kullanın.',
      },
      {
        question: 'Dolgu olmadan yazılmış bir Base64 dizgisini nasıl çözerim?',
        answer:
          'Doğrudan yapıştırın. Çözücü eksik = dolgusunu tespit edip çözmeden önce otomatik olarak geri ekler.',
      },
      {
        question: 'Base64 Kodlayıcı ikili dosyaları işleyebilir mi?',
        answer:
          'Hayır, bu araç yalnızca metin kodlar. Bir dosyayı kodlamak için önce baytlarını okumak gerekir; bu metin tabanlı araç bunu yapmaz.',
      },
      {
        question: 'Base64 ile Base64URL arasındaki fark nedir?',
        answer:
          'Base64URL, Base64 formatının URL uyumlu sürümüdür: + yerine - ve / yerine _ kullanır ve genellikle = dolgusunu kaldırır; böylece sonuç URL adreslerinde ve dosya adlarında güvenli olur.',
      },
      {
        question: 'Çözülen Base64 metnim neden garip karakterler gösteriyor?',
        answer:
          'Özgün metin büyük olasılıkla UTF-8 dışında bir bayt kodlamasıyla kodlanmıştı ya da Base64 dizgisi bozulmuştur. Kaynağı UTF-8 olarak yeniden kodlayıp karşılaştırın.',
      },
      {
        question: 'Şifre veya gizli bilgiyi Base64 ile kodlayabilir miyim?',
        answer:
          'Kodlayabilirsiniz ama güvenlik için buna güvenmemelisiniz. Base64 kolayca tersine çevrilir; kodlanmış dizgiyi gören herkes anında çözebilir.',
      },
      {
        question: 'Basic Auth başlığı için metni nasıl kodlarım?',
        answer:
          'Kullanıcı adı ve şifreyi kullanici:sifre biçiminde birleştirin, bu dizgiyi Base64 ile kodlayın ve isteğinizde Authorization: Basic <kodlanmış değer> olarak kullanın.',
      },
      {
        question: 'Base64 Kodlayıcı çevrimdışı çalışır mı?',
        answer:
          'Evet. Sayfa yüklendikten sonra kodlama ve çözme tamamen tarayıcınızda, ağ isteği olmadan çalışır.',
      },
      {
        question: 'Çözücüye geçersiz bir Base64 dizgisi yapıştırırsam ne olur?',
        answer:
          'Çözücü tahminde bulunmak yerine hata bildirir. Base64 alfabesi dışındaki karakterleri, eksik dolguyu ya da gereksiz boşluk ve satır sonlarını kontrol edin.',
      },
      {
        question: 'Bu araçla Base64 data URI çözebilir miyim?',
        answer:
          'Evet, virgülden sonraki yalnızca Base64 kısmını yapıştırırsanız. Önce data:...;base64, önekini kaldırın; çünkü o, kodlanmış verinin parçası değildir.',
      },
      {
        question: 'Bazı Base64 dizgileri neden "=" işaretleriyle biter?',
        answer:
          '= işaretleri, girdi uzunluğu üç baytın katı olmadığında eklenen dolgulardır. Çözücüye son grubun kaç bayt gösterdiğini söylerler.',
      },
      {
        question: 'Kodlama yaparken metnim bir sunucuya yüklenir mi?',
        answer:
          'Hayır. Kodlama ve çözme tarayıcınızda yerel olarak çalışır; bu yüzden API anahtarları gibi hassas dizgiler asla cihazınızdan çıkmaz.',
      },
      {
        question: 'Base64 formatını özgün metne nasıl geri çeviririm?',
        answer:
          'Çöz moduna geçin, Base64 dizgisini yapıştırın; araç özgün UTF-8 metni geri verir ve siz de kopyalayabilirsiniz.',
      },
    ],
  },
  'url-encoder-decoder': {
    instructions: [
      {
        title: 'Kodla veya Çöz seçin',
        description:
          'Kodla ve Çöz arasında geçiş yapın, ardından tek parametre değeri için encodeURIComponent ya da ://?& ayraçlarını korumak için encodeURI seçin.',
      },
      {
        title: 'URL veya parametre dizgisi yapıştırın',
        description:
          'Giriş Stringi veya URL alanına herhangi bir URL adresi ya da yüzde kodlanmış parça girin.',
      },
      {
        title: 'Kodlanmış veya çözülmüş sonucu inceleyin',
        description:
          'Boşluk, & ve = gibi özel karakterlerin beklediğiniz gibi kodlanıp kodlanmadığını çıktı kutusundan kontrol edin.',
      },
      {
        title: 'Ayrıştırılmış parametreleri inceleyin',
        description:
          'Geçerli bir tam URL algılandığında aşağıdaki Ayrıştırılmış URL Dökümü tablosunda çözülmüş sorgu anahtar-değer çiftlerini görün.',
      },
      {
        title: 'Sonucu kopyalayın',
        description:
          'Kopyala düğmesine tıklayarak kodlanmış URL adresini yeniden yazmadan kodunuzda, bağlantınızda veya API isteğinizde kullanın.',
      },
      {
        title: 'Sorun giderme: bozuk % dizileri',
        description:
          'Bozuk bir % dizisi hakkında hata görürseniz ardından iki onaltılık rakam gelmeyen yalnız bir % arayın; örneğin %2, ve yeniden çözmeden önce düzeltin.',
      },
    ],
    examples: [
      {
        title: 'Sorgu değeri kodlama',
        input: 'merhaba dünya & arkadaşlar',
        output: 'merhaba%20d%C3%BCnya%20%26%20arkada%C5%9Flar',
        explanation: 'encodeURIComponent kullanmak "&" karakterini kaçışa alır; böylece sorgu dizginizi bölmez.',
      },
      {
        title: 'Tam bir URL adresini çözme',
        input: 'https://ornek.com/ara?q=merhaba%20d%C3%BCnya&sayfa=2',
        output: 'q = merhaba dünya · sayfa = 2',
        explanation: 'Ayrıştırılmış döküm tablosu her sorgu parametresini ayrı ayrı çözülmüş olarak gösterir.',
      },
    ],
    benefits: [
      'encodeURIComponent ile encodeURI davranışını yan yana netleştirir',
      'Geçerli URL adreslerini protokol, ana bilgisayar, yol, karma ve sorgu satırlarına otomatik ayrıştırır',
      'Form sorgu dizgilerini çözerken "+" boşluk kodlamasını temiz işler',
      'Bozuk % dizilerini anlaşılır şekilde bildirir',
    ],
    useCases: [
      'OAuth yönlendirme URI adresleri ve geri arama parametrelerinde hata ayıklama',
      'Sorgu parametrelerinde gönderilen arama sorgularını veya JSON dizgilerini kaçışa alma',
      'Birden çok izleme parametresi içeren UTM kampanya bağlantılarını denetleme',
      'İnsan incelemesi için sunucu erişim günlüğü URL adreslerini çözme',
    ],
    faqs: [
      {
        question: 'encodeURI yerine encodeURIComponent ne zaman kullanmalıyım?',
        answer:
          'Tek bir sorgu parametresi değerini kodlarken encodeURIComponent kullanın; böylece & ve = gibi karakterler kaçışa alınır. Tam bir URL adresini kodlarken ve https://, /, ? ve & karakterlerini korumak isterken encodeURI kullanın.',
      },
      {
        question: 'Çözülen URL neden "+" işaretini boşluğa çeviriyor?',
        answer:
          'application/x-www-form-urlencoded sorgu dizgilerinde "+" boşluğu gösterir. Bileşen çözme, "+" işaretini otomatik olarak boşluğa çevirir.',
      },
      {
        question: 'URL ayrıştırıcı, alan adının erişilebilir olup olmadığını denetler mi?',
        answer:
          'Hayır. Ayrıştırma, hedef ana bilgisayara ağ isteği göndermeden tarayıcının URL API arayüzüyle yerel olarak yapılır.',
      },
      {
        question: 'URL Kodlayıcı ücretsiz mi?',
        answer:
          'Evet, URL Kodlayıcı tamamen ücretsizdir; kayıt gerekmez ve kodlayıp çözebileceğiniz URL sayısında sınır yoktur.',
      },
      {
        question: 'URL kodlama hangi karakterleri değiştirir?',
        answer:
          'URL kodlama, boşluk, &, =, ?, # ve ASCII olmayan harfler gibi ayrılmış ve güvensiz karakterleri % ve ardından gelen iki onaltılık rakama çevirir.',
      },
      {
        question: 'URL adresinde boşluk için %20 ile + arasındaki fark nedir?',
        answer:
          'Sorgu dizgisinde ikisi de boşluğu gösterebilir; ancak %20 standart yüzde kodlamadır, + ise yalnızca form kodlu sorgu dizgilerinde boşluk anlamına gelir, yollarda değil.',
      },
      {
        question: 'URL Kodlayıcı, https:// içeren tam bir URL adresini kodlayabilir mi?',
        answer:
          'Evet. encodeURI modunu seçin; şema, eğik çizgiler ve ayraçlar dokunulmadan kalırken yalnızca güvensiz karakterler kodlanır.',
      },
      {
        question: 'Sorgu değerindeki ve işaretini nasıl kodlarım?',
        answer:
          'Yalnızca değer üzerinde encodeURIComponent modunu kullanın. & işaretini %26 biçimine çevirir; böylece ve işareti veri sayılır ve sorgu dizginizi bölmez.',
      },
      {
        question: 'Çözülen URL adresim neden hâlâ % işaretleri gösteriyor?',
        answer:
          'İki onaltılık rakamlı bir % bir kez çözülür; bu yüzden %2520 gibi çift kodlanmış bir değer bir çözmeden sonra %20 olur. Tamamen çözülmüş biçimi istiyorsanız çözmeyi yeniden çalıştırın.',
      },
      {
        question: 'Birden çok sorgu parametresi olan bir URL adresini çözebilir miyim?',
        answer:
          'Evet. Çözücü tüm sorgu dizgisini işler ve ayrıştırılmış döküm tablosu her anahtar-değer çiftini kolay inceleme için ayrı ayrı listeler.',
      },
      {
        question: 'URL Kodlayıcı Unicode karakterleri işler mi?',
        answer:
          'Evet. ASCII olmayan karakterler önce UTF-8 baytlara çevrilir, ardından yüzde kodlanır; bu yüzden aksanlı harfler ve diğer alfabeler doğru kodlanır.',
      },
      {
        question: 'URL adresinde yüzde kodlama nedir?',
        answer:
          'Yüzde kodlama, bir karakteri % işareti ve ardından gelen iki haneli onaltılık bayt değeriyle değiştirir; bu sayede boşluk veya özel simge içeren URL adresleri geçerli kalır.',
      },
      {
        question: 'E-posta veya belgede kullanmak için URL adresini nasıl kodlarım?',
        answer:
          'URL adresini yapıştırın, encodeURI modunu seçin ve sonucu kopyalayın. Kodlanmış bağlantı tıklanabilir kalır ve düz metinde satır kayması olduğunda bozulmaz.',
      },
      {
        question: 'URL Çözücü, URL adresini doğrular mı?',
        answer:
          'Girdinin iyi biçimlendirilmiş bir URL olduğunu ve her % dizisinin geçerli olduğunu denetler; ancak alan adının var olup olmadığını ya da sayfanın yüklenip yüklenmediğini denetlemez.',
      },
      {
        question: 'Boşlukları + yerine %20 olarak kodlayabilir miyim?',
        answer:
          'Evet. Kodlayıcı boşluklar için her zaman %20 kullanır. + biçimi yalnızca form kodlu girdiyi çözerken görünür; orada + zaten boşluk anlamına gelir.',
      },
      {
        question: 'Önceden kodlanmış bir URL adresini kodlarsam ne olur?',
        answer:
          '% işaretlerinin kendisi %25 olarak kodlanır ve %2520 gibi çift kodlama oluşur. Tek kodlanmış biçime dönmek için bir kez çözün.',
      },
      {
        question: 'Kodlama yaparken URL adresim bir sunucuya yüklenir mi?',
        answer:
          'Hayır. Kodlama, çözme ve ayrıştırma tamamen tarayıcınızda yerel olarak çalışır; bu yüzden özel bağlantılar ve jetonlar asla cihazınızdan çıkmaz.',
      },
      {
        question: 'URL parçası veya karma nasıl kodlanır?',
        answer:
          'Yalnızca parça değerini encodeURIComponent ile kodlayın, ardından # işaretinden sonra kendiniz ekleyin; böylece karma ayracı kodlanmaz.',
      },
      {
        question: 'Bazı kodlanmış URL adresleri neden çok daha uzun görünüyor?',
        answer:
          'Her özel veya ASCII olmayan karakter üç karaktere dönüşür (% artı iki onaltılık rakam); bu yüzden çok boşluk veya Unicode karakter içeren URL adresleri belirgin şekilde uzar.',
      },
      {
        question: 'URL Kodlayıcı çok uzun URL adreslerini işleyebilir mi?',
        answer:
          'Evet. İşlem, sunucuya yükleme sınırı olmadan yerel olarak çalışır; bu yüzden uzun URL adresleri tarayıcınızda kodlanır ve çözülür, tarayıcınız metni tutabildiği sürece.',
      },
    ],
  },
  'uuid-generator': {
    instructions: [
      {
        title: 'UUID v4 veya v7 seçin',
        description:
          'Standart rastgele tanımlayıcılar için v4 ya da sıralanabilir zaman damgalı önekli veritabanı birincil anahtarları için v7 seçin.',
      },
      {
        title: 'Adet ve biçimlendirmeyi ayarlayın',
        description:
          '1 ile 100 arasında kimlik sayısı girin ve Büyük Harf, Tireleri Dahil Et ya da {süslü parantez} içine al seçeneklerini açıp kapatın.',
      },
      {
        title: 'Yeni bir grup oluşturun',
        description:
          'UUID Oluştur düğmesine tıklayarak yeni bir grup oluşturun. Her tıklama tamamen yeni bir rastgele tanımlayıcı grubu üretir.',
      },
      {
        title: 'Oluşturulan kimlikleri inceleyin',
        description:
          'Sürüm, harf durumu ve tire biçiminin veritabanınızın ya da kodunuzun beklentisiyle eşleştiğini doğrulamak için listeyi tarayın.',
      },
      {
        title: 'Listeyi kopyalayın veya indirin',
        description:
          'Her kimliği panoya almak için Tümünü Kopyala düğmesine tıklayın ya da kayıtları beslemek veya test verisi oluşturmak için grubu .txt dosyası olarak indirin.',
      },
      {
        title: 'İpucu: veritabanları için v7 seçin',
        description:
          'Kimlikleri birincil anahtar olarak saklıyorsanız v7 tercih edin; böylece yeni satırlar kronolojik sıralanır ve dizininiz verimli kalır. Sıra önemli değilse v4 kullanın.',
      },
    ],
    examples: [
      {
        title: 'Standart küçük harfli UUID v4',
        input: 'Sürüm: v4 · Tireler: Açık · Büyük Harf: Kapalı',
        output: '550e8400-e29b-41d4-a716-446655440000',
        explanation: 'Dağıtık birincil anahtarlar için uygun 128 bitlik RFC 4122 tanımlayıcısı.',
      },
      {
        title: 'Tiresiz kompakt UUID',
        input: 'Sürüm: v4 · Tireler: Kapalı · Adet: 3',
        output: '550e8400e29b41d4a716446655440000 (ve 2 tane daha)',
        explanation: 'Tireleri kaldırmak, dosya adları ve kompakt anahtarlar için işe yarayan 32 karakterli kompakt onaltılık dizgi verir.',
      },
    ],
    benefits: [
      'Tarayıcı crypto.randomUUID / crypto.getRandomValues (CSPRNG) kullanır',
      '48 bit milisaniye zaman damgası önekli modern RFC 9562 UUID v7 desteği sunar',
      'Tek seferde 100 adede kadar benzersiz kimlik toplu üretir',
      'Büyük harf, tiresiz kompakt onaltılık ya da süslü parantezli GUID dizgisi biçimlendirir',
    ],
    useCases: [
      'Veritabanı test verisi ve geçiş test kayıtlarını besleme',
      'İlişkilendirme kimlikleri, API anahtarları ve webhook test kimlikleri oluşturma',
      'B-ağacı dizin dostu UUID v7 ile rastgele UUID v4 karşılaştırma',
      'Windows/C# süslü parantezli GUID sabitleri oluşturma',
    ],
    faqs: [
      {
        question: 'UUID v4 yerine UUID v7 kullanmanın avantajı nedir?',
        answer:
          'UUID v7, en önemli bitlerinde Unix milisaniye zaman damgasını kodlar; bu sayede kimlikler kronolojik sıralanır ve SQL veritabanlarında B-ağacı dizin parçalanması azalır.',
      },
      {
        question: 'Bu UUID kimlikleri Math.random() ile mi oluşturuluyor?',
        answer:
          'Hayır. Her UUID, Web Crypto API arayüzünden kriptografik olarak güçlü rastgelelik kullanır.',
      },
      {
        question: 'Tire içermeyen 32 karakterli onaltılık kimliği nasıl alırım?',
        answer:
          '"Tireleri dahil et" seçeneğinin işaretini kaldırın; böylece oluşturulan grubun tamamından tireler anında silinir.',
      },
      {
        question: 'UUID Oluşturucu ücretsiz mi?',
        answer:
          'Evet, UUID Oluşturucu tamamen ücretsizdir; kayıt gerekmez ve istediğiniz kadar grup oluşturabilirsiniz.',
      },
      {
        question: 'UUID nedir ve ne için kullanılır?',
        answer:
          'UUID, genellikle beş grupta 32 onaltılık rakam olarak yazılan 128 bitlik benzersiz bir tanımlayıcıdır. Veritabanı birincil anahtarları, ilişkilendirme kimlikleri, oturum jetonları ve dosya adları için kullanılır.',
      },
      {
        question: 'İki oluşturulan UUID hiç aynı olabilir mi?',
        answer:
          'Pratikte hayır. UUID v4 içinde 122 rastgele bit bulunur; bu yüzden çakışma o kadar olası değildir ki oluşturulan kimlikleri benzersiz sayabilirsiniz.',
      },
      {
        question: 'UUID v4 ile UUID v7 arasındaki fark nedir?',
        answer:
          'UUID v4 tamamen rastgeledir; UUID v7 ise milisaniye zaman damgasıyla başlar, bu yüzden yeni kimlikler eskilerden sonra sıralanır. İkisi de 128 bitlik tanımlayıcıdır.',
      },
      {
        question: 'Tek seferde kaç UUID oluşturabilirim?',
        answer:
          'Tek bir grupta 1 ile 100 arasında UUID oluşturabilirsiniz. Aynı boyutta bir başka yeni grup için Oluştur düğmesine yeniden tıklayın.',
      },
      {
        question: 'UUID v7 için "zamana göre sıralı" ne anlama gelir?',
        answer:
          'Zamana göre sıralı, UUID kimliğinin ilk bölümünün Unix milisaniye zaman damgası olduğu anlamına gelir; bu yüzden kimlikleri alfabetik sıralamak onları oluşturulma zamanına göre de sıralar.',
      },
      {
        question: 'Tiresiz UUID oluşturabilir miyim?',
        answer:
          'Evet. Tireleri dahil et seçeneğini kapatın; gruptaki her UUID kompakt 32 karakterli onaltılık dizgi olarak gösterilir.',
      },
      {
        question: 'Süslü parantezli GUID nedir ve ne zaman gerekir?',
        answer:
          'Süslü parantezli GUID, UUID kimliğini süslü parantez içine alır; örneğin {550e8400-...}. Bazı Microsoft araçları ve C# kodları GUID sabitleri için bu biçimi bekler.',
      },
      {
        question: 'Burada oluşturulan UUID kimlikleri üretim kullanımı için güvenli mi?',
        answer:
          'Evet. Tarayıcı Web Crypto API arayüzünü kullanırlar; bu da üretim tanımlayıcıları için uygun, kriptografik olarak güçlü rastgelelik sağlar.',
      },
      {
        question: 'Büyük harfli UUID oluşturabilir miyim?',
        answer:
          'Evet. Büyük Harf düğmesini açın; grubun tamamı A–F onaltılık harfleri büyük olarak gösterilir.',
      },
      {
        question: 'UUID oluşturmak için internet bağlantısı gerekir mi?',
        answer:
          'Yalnızca sayfayı yüklemek için. Yüklendikten sonra oluşturma tamamen tarayıcınızda, ağ isteği olmadan çalışır.',
      },
      {
        question: 'Oluşturulan UUID listem bir yerde saklanır veya yüklenir mi?',
        answer:
          'Hayır. Oluşturma tarayıcınızda yerel olarak gerçekleşir; bu yüzden kimlikleriniz asla bir sunucuya gönderilmez ve hiçbir yerde saklanmaz.',
      },
      {
        question: 'UUID kimliğini API anahtarı olarak kullanabilir miyim?',
        answer:
          'Opak bir jeton olarak kullanabilirsiniz; ancak UUID bir tanımlayıcıdır, kimlik doğrulama için tasarlanmış bir gizli bilgi değildir. Gerçek API anahtarları için döndürmeli, doğru bir gizli bilgi sistemi kullanın.',
      },
      {
        question: 'UUID ile GUID arasındaki fark nedir?',
        answer:
          'İkisi aynı 128 bitlik biçimdir. GUID, Microsoft şirketinin kullandığı addır; UUID ise başka her yerde kullanılan açık standart addır.',
      },
      {
        question: 'Veritabanı birincil anahtarı için neden UUID v7 seçmeliyim?',
        answer:
          'Çünkü v7 kimlikleri oluşturulma zamanına göre sıralanır; yeni satırlar B-ağacı dizininde birbirine yakın düşer, bu da eklemeleri hızlı tutar ve rastgele v4 kimliklerine kıyasla dizin parçalanmasını azaltır.',
      },
      {
        question: 'Aynı UUID kimliğini iki kez yeniden oluşturabilir miyim?',
        answer:
          'Hayır. Her oluşturma yeni kriptografik rastgelelik kullanır; bu yüzden aynı UUID kimliğini bir daha asla alamazsınız. Yeniden ihtiyaç duyacağınız kimliği kaydedin.',
      },
      {
        question: 'Oluşturulan tüm UUID kimliklerini tek seferde nasıl kopyalarım?',
        answer:
          'Tümünü Kopyala düğmesine tıklayın; böylece grubun tamamı, satır başına bir UUID olacak şekilde panoya gelir ve kodunuza, e-tablonuza veya SQL betiğinize yapıştırmaya hazır olur.',
      },
    ],
  },
  'regex-tester': {
    instructions: [
      {
        title: 'Deseninizi ve bayrakları girin',
        description:
          'Eğik çizgiler arasına bir RegExp deseni yazın ve g, i, m veya s bayraklarını açıp kapatın.',
      },
      {
        title: 'Örnek metin verin',
        description:
          'Test Dizgisi alanına test dizgilerini yapıştırın; böylece eşleşen alt dizgiler sağ tarafta vurgulanır.',
      },
      {
        title: 'Vurgulanan eşleşmeleri inceleyin',
        description:
          'Vurgulanan alt dizgileri ve eşleşme sayısını kontrol ederek deseninizin tam beklediğinizi bulduğunu doğrulayın; ne fazlasını ne azını.',
      },
      {
        title: 'Grupları ve değiştirmeleri inceleyin',
        description:
          'Her eşleşmenin tam karakter dizinini ve $1/$2 yakalama gruplarını inceleyin ya da aşağıda bir değiştirme şablonu deneyin.',
      },
      {
        title: 'Desen hatalarını düzeltin',
        description:
          'Bir sözdizimi hatası görünürse mesajı okuyun, kapanmamış köşeli parantez veya parantez var mı kontrol edin ve eşleşmeler görünene kadar deseni düzeltin.',
      },
      {
        title: 'İpucu: yayımlamadan önce uç durumları test edin',
        description:
          'Bir deseni üretimde kullanmadan önce boş dizgiler, alışılmadık karakterler ve çok satırlı girdi deneyin; büyük küçük harf duyarlılığını kontrol etmek için i bayrağını değiştirin.',
      },
    ],
    examples: [
      {
        title: 'E-posta yerel kısmı ve alan adını çıkarma',
        input: 'Desen: ([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) · Metin: destek@utilityflow.online',
        output: 'Eşleşme #1 · $1="destek" · $2="utilityflow.online"',
        explanation: 'Parantezli gruplar, yakalanan alt dizgileri ayrı ayrı gösterir.',
      },
      {
        title: 'Günlük satırından sayıları çıkarma',
        input: 'Desen: \\d+ · Metin: Sipariş 1042 gönderildi, 3 ürün',
        output: 'Eşleşme #1: 1042 · Eşleşme #2: 3',
        explanation: 'g bayrağıyla araç, metindeki tüm sayıları eşleştirip gösterir.',
      },
    ],
    benefits: [
      'Sıfır uzunluklu eşleşmelerde sonsuz döngüye karşı otomatik koruma sağlar',
      'Her eşleşme için tam karakter dizinini ve yakalanan grup değerlerini gösterir',
      '$1, $2 ve $& kullanarak canlı değiştirme şablonu önizlemesi verir',
      'RegExp sözdizimi hatalarını çökmeden anlaşılır şekilde bildirir',
    ],
    useCases: [
      'Yayımlamadan önce e-posta, bilgiç (slug) veya form girdi desenlerini doğrulama',
      'Günlük satırlarından veya HTML parçalarından yapılandırılmış jetonlar çıkarma',
      'Ara ve değiştir yakalama şablonlarını test etme',
      'Çok satırlı (^ / $) ve büyük küçük harf duyarsız bayrak davranışını doğrulama',
    ],
    faqs: [
      {
        question: 'Bu test aracı hangi regex motorunu kullanıyor?',
        answer:
          'Tarayıcınızın yerel ECMAScript (JavaScript) RegExp motorunu kullanır; bu yüzden davranışı istemci tarafı JS ve Node.js koduyla birebir aynıdır.',
      },
      {
        question: 'Genel mod ("g") neden önemlidir?',
        answer:
          '"g" bayrağı olmadan RegExp ilk eşleşmeden sonra durur. "g" bayrağını açmak, test dizgisindeki her eşleşmeyi bulup vurgular.',
      },
      {
        question: '"." ile satır sonu karakterlerinin ötesini nasıl eşleştiririm?',
        answer:
          '"s" (dotAll) bayrağını açın; böylece nokta meta karakteri "." satır sonu karakterlerini de eşleştirir.',
      },
      {
        question: 'Regex Test Aracı ücretsiz mi?',
        answer:
          'Evet, Regex Test Aracı tamamen ücretsizdir; kayıt gerekmez ve deneyebileceğiniz desen ya da test dizgisi sayısında sınır yoktur.',
      },
      {
        question: 'Regex Test Aracı hangi regex türünü kullanıyor?',
        answer:
          'JavaScript (ECMAScript) regex türünü kullanır; bu, tarayıcılarda ve Node.js içinde çalışan motorun aynısıdır, bu yüzden desenler kodunuzda aynı davranır.',
      },
      {
        question: 'E-posta doğrulama için regex nasıl test ederim?',
        answer:
          '([a-z0-9._%+-]+)@([a-z0-9.-]+\\.[a-z]{2,}) gibi bir desen yapıştırın ve test dizgisinde geçerli ve geçersiz adresleri deneyerek hangilerinin eşleştiğini görün.',
      },
      {
        question: 'Regex Test Aracında g, i, m ve s bayrakları ne yapar?',
        answer:
          'g bayrağı tüm eşleşmeleri bulur, i eşleştirmeyi büyük küçük harf duyarsız yapar, m ^ ve $ işaretlerinin satır sınırlarında çalışmasını sağlar, s ise . işaretinin satır sonu karakterlerini eşleştirmesini sağlar.',
      },
      {
        question: 'Regex Test Aracında yakalama grupları nasıl çalışır?',
        answer:
          'Parantez içindeki metin numaralı bir yakalama grubu oluşturur. Eşleşmeden sonra her grup, yakaladığı tam alt dizgiyle birlikte $1, $2 gibi listelenir.',
      },
      {
        question: 'Regex içinde .* ile .*? arasındaki fark nedir?',
        answer:
          '.* niceleyicisi açgözlüdür ve olabildiğince çok eşleştirir; .*? ise tembeldir ve olabildiğince az eşleştirir. En kısa eşleşmeyi istiyorsanız tembel biçimi kullanın.',
      },
      {
        question: 'Regex içinde gerçek bir nokta veya parantezi nasıl eşleştiririm?',
        answer:
          'Ters eğik çizgiyle kaçışa alın; örneğin nokta için \\. ya da parantez için \\( kullanın; böylece karakter meta karakter yerine gerçek metin sayılır.',
      },
      {
        question: 'Regex ifadem neden çok fazla metin eşleştiriyor?',
        answer:
          'Büyük olasılıkla .* gibi açgözlü bir niceleyici kullanıyorsunuz; bu, son olası eşleşmeye kadar her şeyi yutar. .*? gibi tembel bir niceleyiciye geçin ya da karakter sınıfını daraltın.',
      },
      {
        question: 'Değiştirmede $1 ve $2 nasıl kullanılır?',
        answer:
          '$2@$1 gibi bir değiştirme şablonu yazın; test aracı her $n değerini o numaralı grubun yakaladığı metinle her eşleşmede değiştirir.',
      },
      {
        question: 'Regex Test Aracı birden çok satırda eşleşme yapabilir mi?',
        answer:
          'Evet. ^ ve $ işaretlerinin satır başına çalışması için m bayrağını açın; . işaretinin satır sonlarını aşması gerekiyorsa s bayrağını da açın.',
      },
      {
        question: 'Regex içinde lookahead nedir?',
        answer:
          '(?=...) gibi bir lookahead, mevcut konumdan sonra bir desenin gelip gelmediğini, onu tüketmeden denetler; böylece ileride rakam olması gibi bir koşulu eşleşmeye katmadan isteyebilirsiniz.',
      },
      {
        question: 'Desenim neden hiç eşleşme göstermiyor?',
        answer:
          'Sözdizimi hatası, kaçışa alınmamış özel karakter ya da girdinizi dışlayan bir karakter sınıfı olabilir. Deseni sadeleştirip parça parça ekleyerek deneyin.',
      },
      {
        question: 'Birçok satıra karşı regex nasıl test ederim?',
        answer:
          'Çok satırlı örneğin tamamını test dizgisine yapıştırın ve g bayrağını açın. Eşleşen her satır diziniyle birlikte vurgulanır ve listelenir.',
      },
      {
        question: 'Regex Test Aracı Unicode karakterleri destekliyor mu?',
        answer:
          'Evet. JavaScript regex, Unicode metni işler; tam Unicode uyumlu eşleştirme için \\u{1F600} gibi kaçışlar ya da u bayrağı kullanabilirsiniz.',
      },
      {
        question: 'Regex ifadem veya test metnim bir yere yükleniyor mu?',
        answer:
          'Hayır. Test tamamen tarayıcınızda çalışır; bu yüzden desenleriniz ve örnek verileriniz asla cihazınızdan çıkmaz.',
      },
      {
        question: 'Felaket geri izleme (catastrophic backtracking) nedir ve nasıl önlenir?',
        answer:
          '(a+)+ gibi iç içe niceleyiciler motoru çok sayıda kombinasyon denemeye zorladığında ortaya çıkar. Örtüşen niceleyicilerden kaçının ve atomik tarzı desenler ya da daha basit karakter sınıfları kullanın.',
      },
      {
        question: 'Regex desenimi kaydedebilir veya paylaşabilir miyim?',
        answer:
          'Yerleşik bir kaydetme özelliği yok; bu yüzden deseninizi ve test dizginizi bir parçacık dosyasına ya da kod yorumuna kopyalayın. Deseni doğrudan kaynak kodunuza da yapıştırabilirsiniz.',
      },
    ],
  },
  'jwt-decoder': {
    instructions: [
      {
        title: 'JWT dizginizi yapıştırın',
        description:
          'Standart üç parçalı jetonu (başlık.yük.imza) giriş kutusuna yapıştırın ya da örnek bir jeton denemek için Örnek JWT Yükle düğmesine tıklayın.',
      },
      {
        title: 'Başlık ve Yük JSON verisini inceleyin',
        description:
          'Biçimlendirilmiş JSON panellerinde algoritma üst verisini (`alg`, `typ`) ve çözülmüş bildirim (claim) alanlarını inceleyin.',
      },
      {
        title: 'Zaman Damgası Bildirimlerini kontrol edin',
        description:
          '`iat`, `nbf` ve `exp` için UTC tarih dönüşümlerini ve etkin/süresi dolmuş durumunu doğrulayın.',
      },
      {
        title: 'sub, roller ve kapsamlar gibi bildirimleri inceleyin',
        description:
          'Jetonun API arayüzünüzün beklediği bilgileri taşıyıp taşımadığını doğrulamak için sub, iss, aud, roller ve kapsam gibi kimlik ve izin bildirimlerine bakın.',
      },
      {
        title: 'Çözülmüş JSON verisini veya tek bir bildirimi kopyalayın',
        description:
          'Biçimlendirilmiş başlık veya yük JSON verisinin tamamını kopyalayın ya da tek bir bildirim değerini kopyalayıp kodunuza, testlerinize veya destek talebinize yapıştırın.',
      },
      {
        title: 'Çözülmeyen bir jetonu düzeltin',
        description:
          'Jetonun çevresindeki fazla boşlukları, satır sonlarını veya tırnakları kaldırın. Beş parçalı bir jeton şifreli bir JWE jetonudur, JWT değildir ve çözme anahtarı olmadan çözülemez.',
      },
    ],
    examples: [
      {
        title: 'Jeton süresini inceleme',
        input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMSIsImV4cCI6MTgwMDAwMDAwMH0.sig',
        output: 'Başlık: { "alg": "HS256", "typ": "JWT" } · exp: 2027-01-15 UTC',
        explanation: 'Base64Url parçalarını çözer ve sayısal epoch bildirimlerini UTC tarihlerine çevirir.',
      },
      {
        title: 'Roller bildirimini inceleme',
        input: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c3JfMiIsInJvbGVzIjpbImFkbWluIl19.sig',
        output: 'Yük: { "sub": "usr_2", "roles": ["admin"] }',
        explanation: 'Jetonun yönetici rolünü taşıdığını gösterir; API arayüzünüz bunu izin denetimi için kullanabilir.',
      },
    ],
    benefits: [
      'Sıfır ağ aktarımı — jetonlar asla tarayıcı sekmenizden çıkmaz',
      'Sayısal iat, nbf ve exp bildirimlerini okunabilir UTC tarihlerine çevirir',
      'Jetonun süre sonu zaman damgasının geçip geçmediğini vurgular',
      'Kriptografik imza doğrulamanın imzalama anahtarınızı gerektirdiğini açıkça belirtir',
    ],
    useCases: [
      'API entegrasyonu sırasında OAuth2 / OIDC erişim ve kimlik jetonlarında hata ayıklama',
      'Kimlik doğrulama sağlayıcılarının verdiği rol, kapsam ve kiracı bildirimlerini doğrulama',
      'Bir API arayüzünün süresi dolmuş taşıyıcı jetonu neden reddettiğini kontrol etme',
      'Entegrasyon testlerinde JWT yapısını doğrulama',
    ],
    faqs: [
      {
        question: 'Bu JWT Çözücü, bir jeton imzasının gerçek olup olmadığını doğrular mı?',
        answer:
          'Hayır. Bir JWT çözmek yalnızca Base64Url başlık ve yük parçalarını ayrıştırır. İmza doğrulamak için sunucu gizli bilginiz veya herkese açık JWKS anahtarınız gerekir ve bu her zaman arka ucunuzda yapılmalıdır.',
      },
      {
        question: 'Kimlik doğrulama jetonlarını buraya yapıştırmak güvenli mi?',
        answer:
          'Tüm çözme işlemleri istemci tarafı JavaScript ile yerel olarak, jetonları kaydetmeden veya iletmeden çalışır. Yine de paylaşılan güvenilmez bilgisayarlarda üretim kimlik bilgilerini yapıştırmaktan kaçının.',
      },
      {
        question: 'Jetonum 3 yerine 5 parçalıysa neden başarısız olur?',
        answer:
          '5 parçalı bir jeton, imzalı bir JWS/JWT değil, şifreli bir JWE (JSON Web Şifreleme) jetonudur; bu yüzden yükü çözme anahtarı olmadan çözülemez.',
      },
      {
        question: 'JWT nedir ve bu çözücü ne gösterir?',
        answer:
          'JSON Web Token, üç Base64Url parçasından oluşan kompakt bir dizgidir: başlık, yük ve imza. Bu çözücü başlık JSON verisini, yük bildirimlerini ve zaman damgası bildirimlerinin insanlarca okunabilir tarihlerini gösterir.',
      },
      {
        question: 'JWT Çözücü ücretsiz mi?',
        answer:
          'Evet. JWT Çözücü tamamen ücretsizdir; kayıt yok, kullanım sınırı yok ve hesap gerekmez. Tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'İmzalama gizli bilgisi olmadan JWT çözebilir miyim?',
        answer:
          'Evet. Çözme yalnızca şifrelenmemiş olan Base64Url başlık ve yükü okur. İmzalama gizli bilgisi yalnızca imzanın gerçek olduğunu doğrulamak için gerekir.',
      },
      {
        question: 'Bir JWT içinde alg ve typ başlık alanları ne anlama gelir?',
        answer:
          'alg alanı HS256 veya RS256 gibi imzalama algoritmasının adını söyler; typ genellikle jeton türünü belirtmek için JWT yazar. Her iki alan da başlık parçasında yer alır.',
      },
      {
        question: 'Bir JWT yükünde genellikle hangi bildirimler bulunur?',
        answer:
          'Yaygın yük bildirimleri arasında konu veya kullanıcı kimliği için sub, veren için iss, hedef kitle için aud, verilme zamanı için iat, geçerlilik başlangıcı için nbf ve süre sonu için exp bulunur; ayrıca roller veya kapsamlar gibi özel bildirimler de olabilir.',
      },
      {
        question: 'JWT jetonumun süresinin dolduğunu nasıl anlarım?',
        answer:
          'exp bildirimi ile geçerli zamanı karşılaştırın. Bu çözücü exp değerini düz bir UTC tarihine çevirir ve jetonun hâlâ etkin mi yoksa süresinin dolmuş mu olduğunu işaretler.',
      },
      {
        question: 'Bir JWT içinde iat, nbf ve exp arasındaki fark nedir?',
        answer:
          'iat bildirimi jetonun ne zaman verildiğini, nbf jetonun en erken ne zaman geçerli olduğunu, exp ise ne zaman geçerliliğini yitirdiğini kaydeder. Üçü de saniye cinsinden Unix zaman damgasıdır.',
      },
      {
        question: 'Çözülen JWT yüküm özgün JSON verisinden neden farklı görünüyor?',
        answer:
          'Çözme yalnızca Base64Url kodlamasını geri alır; bu yüzden yük özgün bildirimlerle eşleşmelidir. Bozuk görünüyorsa jeton kesilmiş, satırlara bölünmüş ya da fazla karakterlerle kopyalanmış olabilir.',
      },
      {
        question: 'İmzasız bir JWT çözebilir miyim?',
        answer:
          'Evet. İmzasız bir jeton alg none kullanır ve üçüncü parçası boştur; yine de başlık ve yükü normal şekilde çözülür. İmzasız jetonlara üretimde asla güvenilmemelidir.',
      },
      {
        question: 'Jetonumda yalnızca iki parça varsa bu ne anlama gelir?',
        answer:
          'İki parçalı bir jeton bozuk ya da eksiktir; genellikle kopyalama sırasında bir kısmı kesildiği için olur. Geçerli imzalı bir JWT her zaman noktalarla ayrılmış üç parçaya sahiptir.',
      },
      {
        question: 'JWT Çözücü jetonumu bir yerde saklar veya gönderir mi?',
        answer:
          'Hayır. Çözme tamamen tarayıcı sekmenizde gerçekleşir ve hiçbir şey bir sunucuya yüklenmez, kaydedilmez veya saklanmaz. Sekmeyi kapatmak jetonu bellekten siler.',
      },
      {
        question: 'JWT jetonum neden hiç çözülmüyor?',
        answer:
          'Jetonun çevresindeki fazla boşlukları, satır sonlarını veya tırnak işaretlerini kontrol edin ve noktalarla ayrılmış tam üç parçaya sahip olduğunu doğrulayın. Günlük çıktısından kopyalanan jetonlarda genellikle çözmeyi bozan sondaki noktalama işaretleri bulunur.',
      },
      {
        question: 'Bu JWT Çözücüyü OAuth2 erişim jetonları için kullanabilir miyim?',
        answer:
          'Evet, erişim jetonu bir JWT olduğu sürece. Birçok OAuth2 ve OpenID Connect sağlayıcısı JWT erişim ve kimlik jetonları verir ve bu araç onların bildirimlerini aynı şekilde çözer.',
      },
      {
        question: 'JWE nedir ve neden burada çözemiyorum?',
        answer:
          'JWE, beş parçalı şifreli bir JSON Web Şifreleme jetonudur. Yükü şifrelidir; bu yüzden yalnızca hedef alıcının elindeki çözme anahtarıyla okunabilir.',
      },
      {
        question: 'Roller ve kapsamlar gibi JWT bildirimlerini nasıl kontrol ederim?',
        answer:
          'Jetonu yapıştırın ve çözülmüş yük panelini okuyun. Roller, kapsamlar, izinler ve kiracı bildirimleri orada normal JSON alanları olarak görünür; inceleyebilir veya kopyalayabilirsiniz.',
      },
      {
        question: 'Bir JWT çözmek jetonun geçerli olduğunu kanıtlar mı?',
        answer:
          'Hayır. Çözme yalnızca jetonun ne içerdiğini gösterir. Herkes istediği bildirimlerle bir jeton oluşturabilir; bu yüzden geçerlilik, sunucunuzda imza ve exp bildirimi denetlenerek doğrulanmalıdır.',
      },
      {
        question: 'Paylaşılan veya herkese açık bir bilgisayarda JWT çözebilir miyim?',
        answer:
          'Çözebilirsiniz; çünkü çözme yereldir ve hiçbir şey yüklenmez. Yine de kontrol etmediğiniz bir bilgisayarda canlı üretim jetonlarını yapıştırmaktan kaçınmak en iyisidir.',
      },
    ],
  },
  'hash-generator': {
    instructions: [
      {
        title: 'Metin Girdisi veya Yerel Dosya Sağlama Toplamı seçin',
        description:
          'Dizgileri özetlemek için Metin Girdisi seçeneğini ya da indirilen ikili dosyaları yüklemeden doğrulamak için Yerel Dosya Sağlama Toplamı seçeneğini seçin.',
      },
      {
        title: 'Metin girin veya yerel bir dosya seçin',
        description:
          'Metni giriş kutusuna yazın ya da yapıştırın veya cihazınızdan bir dosya seçin. Dosya yalnızca tarayıcınızın içinde okunur ve asla yüklenmez.',
      },
      {
        title: 'Çıktı kodlamasını seçin',
        description:
          'Onaltılık (küçük veya büyük harf) ile Base64 özet biçimi arasında geçiş yapın.',
      },
      {
        title: 'Dört özeti aynı anda inceleyin',
        description:
          'SHA-1, SHA-256, SHA-384 ve SHA-512 aynı anda hesaplanır; bu yüzden aracı yeniden çalıştırmadan algoritmaları yan yana karşılaştırın.',
      },
      {
        title: 'İstediğiniz özeti kopyalayın',
        description:
          'Hesaplanan özeti kopyalamak için SHA-1, SHA-256, SHA-384 veya SHA-512 yanındaki Kopyala düğmesine tıklayın.',
      },
      {
        title: 'Eşleşmeyen bir sağlama toplamını düzeltin',
        description:
          'Bir dosya sağlama toplamı yayımlanan değerle eşleşmiyorsa dosyayı yeniden indirin ve metin girdisindeki sondaki yeni satırları veya boşlukları kontrol edin; çünkü tek bir fazla karakter bile özeti tamamen değiştirir.',
      },
    ],
    examples: [
      {
        title: '"UtilityFlow" için SHA-256',
        input: 'UtilityFlow',
        output: '64 onaltılık karakterde belirlendi (256 bit)',
        explanation: 'Tek bir karakter değişikliği bile tamamen farklı bir özet üretir.',
      },
      {
        title: 'İndirilen bir dosyanın sağlama toplamını doğrulama',
        input: 'Yerel Dosya Sağlama Toplamı · kurulum.exe · SHA-256',
        output: 'Hesaplanan SHA-256, satıcının yayımladığı değerle eşleşiyor',
        explanation: 'Eşleşen bir değer, dosyanın bozulmadan eksiksiz indirildiği anlamına gelir.',
      },
    ],
    benefits: [
      'Yerel donanım hızlandırmalı Web Crypto SubtleCrypto kullanır',
      'Dosyaları yüklemeden yerel dosya SHA-256 sağlama toplamlarını doğrular',
      'Onaltılık (büyük/küçük) ve Base64 biçiminde çıktı verir',
      'Dört SHA algoritmasını aynı anda hesaplar',
    ],
    useCases: [
      'İndirilen yazılım yükleyicilerinin veya arşivlerin SHA-256 sağlama toplamlarını doğrulama',
      'Betik ve stiller için Alt Kaynak Bütünlüğü (SRI) Base64 özetleri oluşturma',
      'Webhook HMAC veya yük özet beklentilerini test etme',
      'Belirleyici içerik parmak izleri oluşturma',
    ],
    faqs: [
      {
        question: 'Bir SHA-256 özetini özgün metne geri çevirebilir miyim?',
        answer:
          'Hayır. Kriptografik özet işlevleri tek yönlü matematiksel özetlerdir; özgün girdinin özete bakılarak çıkarılamaması için tasarlanmışlardır.',
      },
      {
        question: 'SHA-256 ve SHA-512, SHA-1 yerine neden tercih edilir?',
        answer:
          'SHA-1 içinde bilinen çakışma zayıflıkları vardır ve güvenlik imzaları için kullanımdan kaldırılmıştır; SHA-256 ve SHA-512 daha güçlü SHA-2 ailesine aittir.',
      },
      {
        question: 'Seçilen dosyalar bir sunucuya iletilir mi?',
        answer:
          'Hayır. Seçilen dosyalar tarayıcı sekmeniz içinde bir ArrayBuffer olarak okunur ve yerel olarak özetlenir.',
      },
      {
        question: 'Özet oluşturucu ne için kullanılır?',
        answer:
          'Özet oluşturucu, metni veya dosyayı özet denen sabit uzunluklu bir parmak izine çevirir. Geliştiriciler özetleri indirmeleri doğrulamak, veri bütünlüğünü denetlemek ve Alt Kaynak Bütünlüğü değerleri oluşturmak için kullanır.',
      },
      {
        question: 'Özet Oluşturucu ücretsiz mi?',
        answer:
          'Evet. Özet Oluşturucu tamamen ücretsizdir; kayıt yok ve kullanım sınırı yok. Tüm özetleme tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: 'SHA-1, SHA-256, SHA-384 ve SHA-512 arasındaki fark nedir?',
        answer:
          'Bunlar farklı özet uzunluklarına sahip SHA ailesinin üyeleridir: SHA-1 160 bit, SHA-256 256 bit, SHA-384 384 bit ve SHA-512 512 bit üretir. Daha uzun özetler genellikle daha güçlüdür.',
      },
      {
        question: 'Bu araçla indirilen bir dosyanın sağlama toplamını nasıl doğrularım?',
        answer:
          'Yerel Dosya Sağlama Toplamı moduna geçin, indirilen dosyayı seçin ve hesaplanan SHA-256 değerini yazılım satıcısının yayımladığı sağlama toplamıyla karşılaştırın. Eşleşen değerler dosyanın sağlam olduğu anlamına gelir.',
      },
      {
        question: 'Dosya sağlama toplamım eşleşmezse ne yapmalıyım?',
        answer:
          'Dosyayı kurmayın veya çalıştırmayın. Resmi kaynaktan yeniden indirin ve yeniden özetleyin; çünkü uyumsuzluk bozuk ya da kurcalanmış bir indirme anlamına gelebilir.',
      },
      {
        question: 'Onaltılık ve Base64 özet çıktısı arasındaki fark nedir?',
        answer:
          'Onaltılık çıktı özeti onaltılık karakterlerle gösterir; Base64 çıktısı ise aynı özeti daha kısa bir Base64 dizgisiyle gösterir. İkisi de tam olarak aynı özet baytlarını temsil eder.',
      },
      {
        question: 'Tek bir karakteri değiştirmek özeti gerçekten tamamen değiştirir mi?',
        answer:
          'Evet. Özet işlevlerinde çığ etkisi vardır; bu yüzden tek bir harf, boşluk veya yeni satır değiştirmek bile görünür bir desen olmadan tamamen farklı bir özet üretir.',
      },
      {
        question: 'İki farklı dosya aynı SHA-256 özetini üretebilir mi?',
        answer:
          'Kuramsal olarak çakışma mümkündür; ancak SHA-256 ile bu pratikte o kadar olası değildir ki eşleşen özetler dosyaların aynı olduğunun kanıtı sayılır.',
      },
      {
        question: 'Dosyayı yüklemeden özetleyebilir miyim?',
        answer:
          'Evet. Bu araç dosyayı tarayıcı belleğinize okur ve Web Crypto API arayüzüyle özetler. Dosya asla cihazınızdan çıkmaz.',
      },
      {
        question: 'Alt Kaynak Bütünlüğü özeti nedir ve nasıl oluşturulur?',
        answer:
          'Alt Kaynak Bütünlüğü (SRI) özeti, betik veya bağlantı etiketine eklenen bir Base64 SHA özetidir; böylece tarayıcılar kurcalanmış dosyaları reddeder. Burada Base64 çıktısını seçin ve SHA-256 veya SHA-384 özetini bütünlük özniteliğinize kopyalayın.',
      },
      {
        question: 'Aynı metin neden her zaman aynı özeti üretir?',
        answer:
          'Özet işlevleri belirleyicidir: aynı girdi her zaman aynı özeti üretir. Özetleri dosyaları doğrulamak ve değişiklikleri yakalamak için kullanışlı yapan da budur.',
      },
      {
        question: 'SHA-1 hâlâ kullanmak için güvenli mi?',
        answer:
          'SHA-1, hassas olmayan verilerin basit sağlama toplamları için uygundur; ancak güvenlik imzaları veya sertifikalar için kullanılmamalıdır, çünkü ona karşı pratik çakışma saldırıları vardır.',
      },
      {
        question: 'Onaltılık karakterle SHA-256 özeti ne kadar uzundur?',
        answer:
          'Bir SHA-256 özeti 256 bittir ve 64 onaltılık karakter olarak görünür. SHA-1 40 onaltılık karakter, SHA-384 96 ve SHA-512 128 karakter gösterir.',
      },
      {
        question: 'Özet Oluşturucu çevrimdışı çalışır mı?',
        answer:
          'Evet, sayfa yüklendikten sonra. Özetleme tarayıcınızdaki yerleşik Web Crypto API arayüzünü kullanır; bu yüzden metin veya dosya özetlerken ağ bağlantısı gerekmez.',
      },
      {
        question: 'Özel karakterli veya emojili metni özetleyebilir miyim?',
        answer:
          'Evet. Metin özetlenmeden önce UTF-8 olarak kodlanır; bu yüzden aksanlı harfler, simgeler ve emojiler tutarlı şekilde işlenir.',
      },
      {
        question: 'Özet ile şifreleme arasındaki fark nedir?',
        answer:
          'Şifreleme bir anahtarla tersine çevrilebilir; özetleme ise tersine çevrilemeyen tek yönlü bir özettir. Özetler bütünlüğü doğrular; şifreleme gizliliği korur.',
      },
      {
        question: 'Şifreyi denetlemek için Özet Oluşturucuyu kullanabilir miyim?',
        answer:
          'Bir şifreyi özetleyip saklanan özetle karşılaştırabilirsiniz; ancak gerçek uygulamalarda şifreler düz SHA-256 ile değil, bcrypt veya Argon2 gibi yavaş şifre algoritmalarıyla özetlenmelidir.',
      },
    ],
  },
  'html-entity-encoder': {
    instructions: [
      {
        title: 'Kodla veya Çöz seçin',
        description:
          'HTML işaretlemesini kaçışa almak için Varlıkları Kodla seçeneğini ya da mevcut varlıkları geri almak için Varlıkları Çöz seçeneğini seçin.',
      },
      {
        title: 'HTML veya metninizi yapıştırın',
        description:
          'Parçayı, öznitelik değerini veya kaçışa alınmış dizgiyi giriş kutusuna yapıştırın. Büyük kod blokları olduğu gibi yapıştırılır.',
      },
      {
        title: 'ASCII olmayan kodlamayı açıp kapatın',
        description:
          'Kodlama modunda ASCII 127 üzerindeki karakterlerin de sayısal &#...; varlıklarına çevrilip çevrilmeyeceğine karar verin.',
      },
      {
        title: 'Dönüştürülen çıktıyı inceleyin',
        description:
          'Etiketlerin, tırnakların ve simgelerin beklendiği gibi dönüştüğünü kontrol edin ve parçanızda hiçbir şeyin değiştirilmediğini ya da düşürülmediğini doğrulayın.',
      },
      {
        title: 'Kopyalayın veya takas edin',
        description:
          'Dönüştürülen metni kopyalayın ya da iş akışınızı tersine çevirmek için Takas düğmesine tıklayın.',
      },
      {
        title: 'Çift kodlanmış varlıkları düzeltin',
        description:
          'Çıktınızda &amp;lt; görüyorsanız metin iki kez kodlanmıştır. Normal varlıklara dönmek için bir kez çözün, ardından tek sefer kodlayın.',
      },
    ],
    examples: [
      {
        title: 'Belgelendirme için HTML parçası kaçışa alma',
        input: '<div class="notice">5 < 10 & "café"</div>',
        output: '&lt;div class=&quot;notice&quot;&gt;5 &lt; 10 &amp; &quot;caf&#233;&quot;&lt;/div&gt;',
        explanation: 'Tarayıcının örnek etiketleri canlı DOM öğeleri olarak yorumlamasını engeller.',
      },
      {
        title: 'RSS akışından metin çözme',
        input: 'Tom &amp; Jerry &mdash; Sezon 2',
        output: 'Tom & Jerry — Sezon 2',
        explanation: 'Adlandırılmış varlıkları gerçek karakterlere geri çevirerek okunabilir metin verir.',
      },
    ],
    benefits: [
      'Beş XML/HTML ayrılmış karakterin (&, <, >, ", \') tamamını kaçışa alır',
      'Uluslararası simgeler ve noktalama için isteğe bağlı sayısal varlık kodlaması sunar',
      'Adlandırılmış (&mdash;, &copy;) ve sayısal (&#8212;, &#x2014;) varlıkların ikisini de çözer',
      'Çözerken güvenli DOMParser metin çıkarımı kullanır',
    ],
    useCases: [
      'Blog yazıları ve belgelendirme için HTML kod örnekleri hazırlama',
      'RSS akışlarından veya XML API arayüzlerinden çekilen HTML kodlu metni temizleme',
      'Statik HTML şablonlarında öznitelik değerlerini kaçışa alma',
      'Özel simgelerin UTF-8 veya ASCII sayfalarda güvenli işlenip işlenmediğini denetleme',
    ],
    faqs: [
      {
        question: 'HTML metninde ve özniteliklerde her zaman kaçışa alınması gereken beş karakter hangileridir?',
        answer:
          'Ve işareti (&), küçüktür (<), büyüktür (>), çift tırnak (") ve tek tırnak (\') kaçışa alınmalıdır; böylece işaretleme belirsizliği veya XSS sorunları önlenir.',
      },
      {
        question: 'ASCII olmayan kodlamayı ne zaman kapatmalıyım?',
        answer:
          'Web sayfanız <meta charset="UTF-8"> kullanıyorsa standart uluslararası karakterler ve simgeler sayısal &#...; varlıklarına gerek olmadan doğrudan işlenir.',
      },
      {
        question: 'Çözücü &#x27; gibi onaltılık varlıkları işler mi?',
        answer:
          'Evet. Ondalık (&#39;) ve onaltılık (&#x27;) varlıkların yanı sıra standart adlandırılmış varlıklar (&amp;, &nbsp;, &copy;) da doğru çözülür.',
      },
      {
        question: 'HTML varlığı nedir?',
        answer:
          'HTML varlığı, özel bir karakteri temsil eden bir metin kodudur; örneğin < için &lt; ya da & için &amp; gibi. Varlıklar, ayrılmış karakterleri tarayıcı onları işaretleme saymadan göstermeyi sağlar.',
      },
      {
        question: 'HTML Varlık Kodlayıcı ücretsiz mi?',
        answer:
          'Evet. HTML Varlık Kodlayıcı tamamen ücretsizdir; kayıt yok ve kullanım sınırı yok. Tüm kodlama ve çözme tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: 'HTML karakterlerini kaçışa almak neden gerekli?',
        answer:
          'Tarayıcılar <, > ve & karakterlerini işaretleme olarak yorumlar. Onları kaçışa almak, karakterleri işaretleme yerine görünür metin olarak gösterir; bu, kod örnekleri, kullanıcı içeriği ve güvenli şablonlar için gereklidir.',
      },
      {
        question: 'Adlandırılmış ve sayısal HTML varlıkları arasındaki fark nedir?',
        answer:
          'Adlandırılmış varlıklar telif hakkı simgesi için &copy; gibi okunabilir bir ad kullanır; sayısal varlıklar ise &#169; veya &#xA9; gibi bir kod noktası kullanır. İkisi de aynı karakteri işler.',
      },
      {
        question: 'ASCII olmayan karakterleri ne zaman varlık olarak kodlamalıyım?',
        answer:
          'Bir sayfa veya e-posta sistemi UTF-8 formatını güvenilir şekilde desteklemediğinde ya da saf ASCII çıktısına ihtiyaç duyduğunuzda kodlayın. Modern UTF-8 sayfalarında aksanlı harfler ve simgeler düz karakter olarak kalabilir.',
      },
      {
        question: 'Çift kodlanmış HTML nasıl görünür?',
        answer:
          'Çift kodlama &lt; işaretini &amp;lt; biçimine çevirir; bu yüzden tarayıcı < yerine &lt; gerçek metnini gösterir. Düzeltmek için bir kez çözün, ardından yalnızca bir kez kodlayın.',
      },
      {
        question: 'Çekilen web sayfalarından HTML varlıklarını çözebilir miyim?',
        answer:
          'Evet. Bir RSS akışından, XML API arayüzünden veya çekilen sayfadan kaçışa alınmış metni yapıştırın ve gerçek karakterli okunabilir düz metni geri almak için çözün.',
      },
      {
        question: 'HTML varlıklarını kodlamak XSS saldırılarını engeller mi?',
        answer:
          'Kullanıcı girdisini kaçışa almak XSS savunmasının önemli bir katmanıdır; ancak tek başına tam bir çözüm değildir. Her zaman doğru çıktı kodlama, doğrulama ve içerik güvenlik ilkesiyle birleştirin.',
      },
      {
        question: 'Bölünmez boşluğun HTML varlığı nedir?',
        answer:
          'Bölünmez boşluk &nbsp; veya &#160; biçimindedir. İki sözcüğü aynı satırda tutar ve HTML düzenlerinde aralığı korumak için yaygın olarak kullanılır.',
      },
      {
        question: 'HTML özniteliği içindeki tırnakları nasıl kaçışa alırım?',
        answer:
          'Çift tırnak için &quot;, tek tırnak için &#39; veya &apos; kullanın. Tırnakları kaçışa almak, öznitelik değerinin erken bitip işaretlemenizi bozmasını engeller.',
      },
      {
        question: 'Bu araç emoji ve diğer Unicode simgeleri kodlayabilir mi?',
        answer:
          'Evet. ASCII olmayan kodlama açıkken emoji ve uluslararası simgeler &#128512; gibi sayısal varlıklara dönüşür. Kapalıyken düz Unicode karakter olarak kalırlar.',
      },
      {
        question: 'HTML kaçışı ile URL kodlaması arasındaki fark nedir?',
        answer:
          'HTML kaçışı, sayfada göstermek için ayrılmış işaretleme karakterlerini varlıklara çevirir; URL kodlaması ise bağlantı ve sorgu dizgilerinde kullanmak için karakterleri %20 gibi yüzde kodlarına çevirir.',
      },
      {
        question: 'Kodlayıcı normal harfleri ve sayıları değiştirir mi?',
        answer:
          'Hayır. Düz harfler, rakamlar ve çoğu noktalama işareti olduğu gibi kalır. Yalnızca ayrılmış karakterler ve isteğe bağlı olarak ASCII olmayan simgeler değiştirilir.',
      },
      {
        question: 'Çözülen metnim neden garip karakterler gösteriyor?',
        answer:
          'Kaynak büyük olasılıkla farklı bir karakter kümesiyle kodlanmıştı ya da bir varlık yanlış oluşturulmuştu. Özgün kaçışa alınmış metinden yeniden çözmeyi deneyin ve sayfanın UTF-8 bildirdiğini kontrol edin.',
      },
      {
        question: 'Bu araçla tam bir HTML belgesini kodlayabilir miyim?',
        answer:
          'Evet. Tam bir belgeyi yapıştırıp kodlayabilirsiniz; ancak sonuç, kod örneği olarak göstermek içindir, çalışan bir web sayfası olarak kaydetmek için değil.',
      },
      {
        question: 'Yapıştırdığım HTML bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Kodlama ve çözme tamamen tarayıcınızda gerçekleşir; bu yüzden kodunuz ve metniniz asla cihazınızdan çıkmaz.',
      },
      {
        question: 'Ve işaretinin HTML varlığı nedir?',
        answer:
          'Ve işareti kendisi &amp; veya &#38; biçimindedir. Gerçek & işaretini her zaman önce kodlayın; çünkü kodlanmamış ve işareti tarayıcının ardından gelen varlığı yanlış okumasına yol açabilir.',
      },
    ],
  },
  'json-csv-converter': {
    instructions: [
      {
        title: 'Dönüşüm yönünü seçin',
        description:
          'JSON → CSV veya CSV → JSON seçin ve ayraç olarak Virgül (,), Noktalı Virgül (;) ya da Sekme (TSV) seçin.',
      },
      {
        title: 'JSON veya CSV verinizi yapıştırın',
        description:
          'Veriyi soldaki düzenleyiciye girin ya da tırnaklı alanları test etmek için Örnek Yükle düğmesine tıklayın.',
      },
      {
        title: 'Sütun başlıklarını inceleyin',
        description:
          'Dönüştürmeden önce oluşturulan başlıkları görün. İç içe nesneler address.city gibi noktalı sütunlar oluşturur; eksik anahtarlar boş hücre bırakır.',
      },
      {
        title: 'Verinizi dönüştürün',
        description:
          'Dönüşümü çalıştırın ve önizlemeyi görün. Tırnaklı virgüller, gömülü tırnaklar ve hücre içi yeni satırlar RFC 4180 uyarınca tam olarak korunur.',
      },
      {
        title: 'Sonucu kopyalayın veya indirin',
        description:
          'Dönüştürülen çıktıyı kopyalayın ya da doğrudan .csv veya .json dosyası olarak indirin.',
      },
      {
        title: 'Dönüşüm hatalarını düzeltin',
        description:
          'Dönüşüm başarısız olursa önce JSON sözdiziminizi denetleyin: sondaki virgüllere, eksik tırnaklara ve eşleşmeyen köşeli parantezlere bakın. CSV için dosyanızın gerçekten kullandığı ayracı seçtiğinizi doğrulayın.',
      },
    ],
    examples: [
      {
        title: 'CSV değeri içindeki virgülü işleme',
        input: '[{"id": 102, "name": "Marcus, Jr.", "role": "Tasarımcı"}]',
        output: 'id,name,role\n102,"Marcus, Jr.",Tasarımcı',
        explanation: 'RFC 4180 uyarınca ayraç veya çift tırnak içeren alanları otomatik olarak tırnak içine alır.',
      },
      {
        title: 'CSV verisini JSON biçimine çevirme',
        input: 'name,age\nAisha,28\nBilal,31',
        output: '[{"name":"Aisha","age":28},{"name":"Bilal","age":31}]',
        explanation: 'İlk satır nesne anahtarları olur ve sonraki her satır bir JSON nesnesi olur.',
      },
    ],
    benefits: [
      'Aynı çalışma alanında iki yönlü JSON ↔ CSV dönüşümü',
      'İç içe JSON nesnelerini nokta gösterimli sütun başlıklarıyla düzleştirir',
      'Doğru RFC 4180 ayrıştırıcı, tırnaklı virgülleri ve gömülü yeni satırları korur',
      'Virgül, noktalı virgül (Avrupa Excel) ve sekme ayraçlarını destekler',
    ],
    useCases: [
      'REST API JSON listelerini Excel veya Google E-Tablolar için dışa aktarma',
      'E-tablo veri dışa aktarımlarını web uygulaması için JSON başlangıç dosyasına çevirme',
      'Veri bilimi veya SQL içe aktarma için TSV veri kümeleri hazırlama',
      'Noktalı virgülle ayrılmış CSV dışa aktarımlarını temiz şekilde görme',
    ],
    faqs: [
      {
        question: 'JSON biçiminden CSV biçimine iç içe özellikli nesneler nasıl işlenir?',
        answer:
          'İç içe nesneler noktalı sütun adlarına düzleştirilir (örneğin address.city) ve diziler kompakt JSON dizgileri olarak serileştirilir.',
      },
      {
        question: 'Farklı JSON nesnelerinin anahtarları biraz farklıysa ne olur?',
        answer:
          'Dönüştürücü, sütun başlıklarının birleşimini oluşturmak için tüm nesneleri tarar ve bir anahtarın olmadığı yerlerde boş hücre bırakır.',
      },
      {
        question: 'Bir hücrenin içinde tırnaklı virgül varsa CSV ayrıştırıcı bozulur mu?',
        answer:
          'Hayır. Durum makinesi ayrıştırıcı, çift tırnaklı hücreleri ve kaçışa alınmış "" tırnakları tam olarak izler.',
      },
      {
        question: 'JSON - CSV Dönüştürücü ne işe yarar?',
        answer:
          'API ve uygulamalardan gelen JSON verisini Excel veya Google E-Tablolar içinde açılabilen CSV e-tablosuna çevirir; CSV dosyalarını da kod ve veritabanları için işe yarayan JSON biçimine geri çevirir.',
      },
      {
        question: 'JSON - CSV Dönüştürücü ücretsiz mi?',
        answer:
          'Evet. JSON - CSV Dönüştürücü tamamen ücretsizdir; kayıt yok ve kullanım sınırı yok. Tüm dönüşüm tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: 'Dizi yerine tek bir JSON nesnesi dönüştürebilir miyim?',
        answer:
          'Evet. Tek bir nesne bir satır sayılır; anahtarları sütun başlığı olur, bu yüzden bir veri satırlı geçerli bir CSV dosyası alırsınız.',
      },
      {
        question: 'Nesnelerin içindeki JSON dizileri CSV biçimine nasıl dönüşür?',
        answer:
          'Dizi değerleri tek bir hücre içinde kompakt JSON dizgisi olarak serileştirilir; bu yüzden veri korunur ve daha sonra dizi olarak yeniden ayrıştırılabilir.',
      },
      {
        question: 'CSV dosyam için hangi ayracı seçmeliyim?',
        answer:
          'Standart CSV için virgül, virgülün ondalık ayraç olduğu Avrupa Excel dışa aktarımları için noktalı virgül ve veri araçlarında kullanılan TSV dosyaları için sekme kullanın.',
      },
      {
        question: 'Dönüştürücü sayıları ve boolean değerleri doğru korur mu?',
        answer:
          'Evet. Sayılar ve boolean değerler CSV içinde düz değerler olarak yazılır. JSON biçimine geri dönerken sayı veya boolean gibi görünen değerler eşleşen JSON türüne ayrıştırılır.',
      },
      {
        question: 'JSON biçiminden CSV biçimine boş veya null değerlere ne olur?',
        answer:
          'Boş dizgiler, null değerler ve eksik anahtarlar CSV içinde boş hücre olur; bu sayede satırlar sütun başlıklarıyla hizalı kalır.',
      },
      {
        question: 'Bu araçla CSV verisini JSON biçimine geri çevirebilir miyim?',
        answer:
          'Evet. CSV - JSON moduna geçin, CSV veya TSV verinizi yapıştırın ve ayracı seçin. İlk satır nesne anahtarları olur ve sonraki her satır bir JSON nesnesi olur.',
      },
      {
        question: 'CSV dosyam Excel içinde neden tüm veriyi tek sütunda açıyor?',
        answer:
          'Excel büyük olasılıkla dosyanızın ayracından farklı bir ayraç bekliyor. Virgül ayracıyla yeniden dışa aktarın ya da Avrupa yerel ayarı için noktalı virgül seçeneğini kullanın.',
      },
      {
        question: 'JSON - CSV Dönüştürücü büyük dosyaları işler mi?',
        answer:
          'Evet, tarayıcı belleğinin sınırları içinde. Dönüşüm yerel olarak çalışır; bu yüzden çok büyük veri kümeleri birkaç saniye sürebilir ama veriniz asla bir sunucuya yüklenmez.',
      },
      {
        question: 'JSON veya CSV verim bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Dönüşüm tamamen tarayıcı sekmenizde gerçekleşir; bu yüzden veriniz cihazınızda kalır ve sekme kapatıldığında silinir.',
      },
      {
        question: 'RFC 4180 nedir ve CSV için neden önemlidir?',
        answer:
          'RFC 4180, CSV dosyalarının standart biçimidir. Virgül, tırnak veya yeni satır içeren alanların çift tırnak içine nasıl alınacağını belirler; böylece e-tablo uygulamaları dosyanızı doğru okur.',
      },
      {
        question: 'TSV dosyalarını JSON biçimine çevirebilir miyim?',
        answer:
          'Evet. CSV - JSON modunda Sekme (TSV) ayracını seçin ve sekmeyle ayrılmış verinizi yapıştırın. Sekmeler veri dışa aktarımlarında yaygındır ve virgül gibi çalışır.',
      },
      {
        question: 'JSON - CSV dönüşümüm neden başarısız oldu?',
        answer:
          'En yaygın neden yanlış JSON olur; örneğin sondaki virgül, eksik tırnak ya da nesne dizisi olmaması. Sözdizimini düzeltin ve yeniden deneyin.',
      },
      {
        question: 'API JSON verisini Excel biçimine nasıl aktarırım?',
        answer:
          'API yanıtınızdan JSON dizisini kopyalayın, buraya yapıştırın, CSV biçimine çevirin ve dosyayı indirin. İndirilen CSV doğrudan Excel içinde açılır ya da Google E-Tablolar içine içe aktarılır.',
      },
      {
        question: 'Dönüştürücü, JSON anahtarlarımın özgün sırasını korur mu?',
        answer:
          'Sütun sırası, anahtarların nesnelerinizde ilk göründüğü sırayı izler. İlk nesne başlangıç sırasını belirler ve sonraki nesnelerin yeni anahtarları sona eklenir.',
      },
      {
        question: 'Dönüştürülen dosyayı kopyalamak yerine indirebilir miyim?',
        answer:
          'Evet. Sonucu e-tabloda açmak ya da uygulamaya içe aktarmak için hazır .csv veya .json dosyası olarak cihazınıza kaydetmek için indirme düğmesini kullanın.',
      },
    ],
  },
  'unix-timestamp-converter': {
    instructions: [
      {
        title: 'Mevcut Unix zamanını görün veya kopyalayın',
        description:
          'Yukarıdaki canlı ilerleyen sayaçtan saniye cinsinden mevcut Unix epoch değerini alın.',
      },
      {
        title: 'Unix Zaman Damgası → İnsan Tarihi dönüştürün',
        description:
          'Herhangi bir sayısal epoch girin; Otomatik mod saniye ile milisaniye arasındaki farkı kendiliğinden anlar ya da birimi siz zorlayabilirsiniz.',
      },
      {
        title: 'ISO, UTC ve yerel biçimleri görün',
        description:
          'ISO 8601, UTC, RFC 2822 ve yerel saat çıktılarını yan yana görün; ayrıca ihtiyacınız olan biçimi seçmek için "2 saat önce" gibi göreli zamanı da görün.',
      },
      {
        title: 'Yerel Tarih ve Saat → Unix Zaman Damgası dönüştürün',
        description:
          'Aşağıdaki panelde tarih ve saat seçerek tam saniye, milisaniye ve ISO 8601 çıktılarını alın.',
      },
      {
        title: 'İhtiyacınız olan zaman damgasını kopyalayın',
        description:
          'API ve veritabanları için saniye değerini, JavaScript Date nesneleri için milisaniye değerini ya da günlükler ve JSON için ISO dizgisini kopyalayın.',
      },
      {
        title: 'Yanlış görünen bir tarihi düzeltin',
        description:
          'Tarih 1970 yılında ya da 5000 yılında çıkarsa büyük olasılıkla saniye ile milisaniyeyi karıştırmışsınızdır. Birim seçiciyi Otomatik seçeneğinden doğru birime çevirin ve yeniden dönüştürün.',
      },
    ],
    examples: [
      {
        title: 'Saniye ile milisaniyeyi ayırt etme',
        input: '1794544800',
        output: '2026-11-13T04:40:00.000Z (saniye)',
        explanation: '10 basamaklı sayılar saniye sayılır; 13 basamaklı sayılar milisaniye sayılır.',
      },
      {
        title: 'Tarihten Unix zaman damgası',
        input: 'Tarih: 2026-01-01 00:00:00 (UTC)',
        output: '1767225600 saniye · 1767225600000 milisaniye',
        explanation: 'Tarih seçici, seçilen tarih için tam epoch saniye ve milisaniye değerlerini verir.',
      },
    ],
    benefits: [
      'Sistem saatinizle eşitlenmiş canlı ilerleyen Unix saati',
      'El ile geçersiz kılma seçeneğiyle saniye ile milisaniyeyi otomatik ayırt etme',
      'ISO 8601, yerel saat, RFC 2822 GMT ve göreli zamanı aynı anda çıktı verir',
      'İki yönlü tarih seçicili Unix saniye/ms dönüştürücü içerir',
    ],
    useCases: [
      'JWT `iat` / `exp` bildirimleri ve API created_at zaman damgalarını denetleme',
      'PostgreSQL veya SQLite içinde veritabanı tamsayı zaman damgalarında hata ayıklama',
      'Önbellek TTL veya test için gelecekteki epoch zaman damgaları oluşturma',
      'Günlük dosyası epoch işaretlerini yerel okunabilir zamana çevirme',
    ],
    faqs: [
      {
        question: 'Otomatik mod saniye ile milisaniye arasındaki farkı nasıl anlar?',
        answer:
          '100.000.000.000 (1e11; milisaniyede yaklaşık 1973 ya da saniyede 5138 yılı) veya daha büyük değerler milisaniye sayılır; daha küçük değerler saniye sayılır.',
      },
      {
        question: 'Unix zamanı saat diliminden etkilenir mi?',
        answer:
          'Hayır. Unix epoch zamanı her zaman 1970-01-01T00:00:00Z (UTC) tarihinden bu yana geçen saniyeleri sayar; yerel saat diliminiz ne olursa olsun.',
      },
      {
        question: '1970 öncesindeki zaman damgalarını dönüştürebilir miyim?',
        answer:
          'Evet. 1970 öncesi tarihleri görmek için negatif Unix zaman damgaları girin (örneğin 31 Aralık 1969 için -86400).',
      },
      {
        question: 'Unix zaman damgası nedir?',
        answer:
          'Unix zaman damgası, epoch zamanı olarak da bilinir; 1 Ocak 1970 00:00:00 UTC tarihinden bu yana geçen saniye sayısıdır. Bilgisayarların tarihi tek bir sayı olarak saklamasının basit bir yoludur.',
      },
      {
        question: 'Unix Zaman Damgası Dönüştürücü ücretsiz mi?',
        answer:
          'Evet. Unix Zaman Damgası Dönüştürücü tamamen ücretsizdir; kayıt yok ve kullanım sınırı yok. Tüm dönüşüm tarayıcınızda yerel olarak çalışır.',
      },
      {
        question: 'Unix saniye ile milisaniye arasındaki fark nedir?',
        answer:
          'Unix saniyeleri 1970 yılından bu yana geçen tam saniyeleri sayar ve genellikle 10 basamak uzunluğundadır; milisaniyeler saniyenin binde birini sayar ve genellikle 13 basamak uzunluğundadır. JavaScript Date nesneleri milisaniye kullanır.',
      },
      {
        question: 'Şu anki Unix zaman damgası nedir?',
        answer:
          'Bu aracın üst kısmındaki canlı sayaç her saniye ilerler ve saniye cinsinden mevcut Unix zamanını gösterir. Test veya günlük kaydı için istediğinizde tam değeri kopyalayın.',
      },
      {
        question: 'Unix zaman damgasını okunabilir bir tarihe nasıl çeviririm?',
        answer:
          'Epoch sayısını dönüştürücüye yapıştırın; eşleşen tarihi ISO 8601, UTC, RFC 2822 ve yerel saat diliminizde gösterir; ayrıca "3 gün önce" gibi göreli zamanı da verir.',
      },
      {
        question: 'Bir tarihi Unix zaman damgasına nasıl çeviririm?',
        answer:
          'Aşağıdaki paneldeki tarih ve saat seçiciyi kullanın, ardından yerel saat diliminizde seçilen tarih için tam Unix saniye ve milisaniye değerlerini okuyun.',
      },
      {
        question: 'Zaman damgam neden 1970 tarihini gösteriyor?',
        answer:
          'Büyük olasılıkla araç saniye beklerken milisaniye değeri girdiniz ya da çok küçük bir sayı girdiniz. Küçük değerler, 1970 epoch başlangıcından birkaç saniye sonrası anlamına gelir.',
      },
      {
        question: 'Zaman damgam neden 5000 yılını gösteriyor?',
        answer:
          'Büyük olasılıkla araç milisaniye sayarken saniye değeri girdiniz ya da milisaniyeyi saniye alanına girdiniz. Birim seçiciyi doğru birime çevirip yeniden dönüştürün.',
      },
      {
        question: 'Unix zaman damgası için ISO 8601 biçimi nedir?',
        answer:
          'ISO 8601, tarihi YYYY-MM-DDTHH:MM:SS biçiminde yazar; örneğin 2026-11-13T04:40:00.000Z. Sonundaki Z, zamanın UTC olduğunu gösterir.',
      },
      {
        question: 'Unix zaman damgaları artık saniyeleri içerir mi?',
        answer:
          'Hayır. Unix zamanı her günü tam 86.400 saniye sayar ve artık saniyeleri yok sayar; bu yüzden uzun vadede gerçek astronomik zamandan biraz sapar.',
      },
      {
        question: 'Gelecekteki tarihler için Unix zaman damgası kullanabilir miyim?',
        answer:
          'Evet. Tarih seçiciye gelecekteki bir tarih girerek onun Unix zaman damgasını alın; bu, önbellek süre sonu zamanlarını, zamanlanmış işleri ve test verilerini ayarlamada işe yarar.',
      },
      {
        question: 'En büyük Unix zaman damgası nedir?',
        answer:
          '32 bit sistemlerde klasik sınır 2.147.483.647 saniyedir; bu 19 Ocak 2038 tarihine denk gelir. Modern 64 bit sistemler çok daha büyük değerleri işler ve bu araç onları kabul eder.',
      },
      {
        question: 'Bu dönüştürücüyle JWT süre sonu zaman damgasını nasıl denetlerim?',
        answer:
          'Çözülen JWT jetonundan exp bildirimini kopyalayıp buraya yapıştırın. Dönüştürücü, jetonun süresinin dolacağı tam UTC tarih ve saati gösterir.',
      },
      {
        question: 'Unix Zaman Damgası Dönüştürücü çevrimdışı çalışır mı?',
        answer:
          'Evet, sayfa yüklendikten sonra. Dönüşüm tarayıcınızda basit aritmetiktir ve canlı saat sistem saatinizi okur; bu yüzden ağ bağlantısı gerekmez.',
      },
      {
        question: 'Sonuçlarda UTC ile yerel saat arasındaki fark nedir?',
        answer:
          'UTC, sapmasız evrensel referans zamandır; yerel saat ise saat dilimi sapmanızı uygular. İkisi aynı anı gösterir; yalnızca farklı dilimlerde gösterilir.',
      },
      {
        question: 'Veritabanı veya günlük dosyasından Unix zaman damgası dönüştürebilir miyim?',
        answer:
          'Evet. Veritabanı satırınızdan veya günlük satırınızdan tamsayı zaman damgasını kopyalayıp buraya yapıştırın; böylece insan tarafından okunabilir tarihi görüp hata ayıklamayı hızlandırırsınız.',
      },
      {
        question: 'Zaman damgası verim bir sunucuya gönderiliyor mu?',
        answer:
          'Hayır. Dönüşüm tamamen tarayıcınızda gerçekleşir; bu yüzden girdiğiniz zaman damgaları ve tarihler asla cihazınızdan çıkmaz.',
      },
    ],
  },
  'sql-formatter': {
    instructions: [
      {
        title: 'SQL sorgunuzu yapıştırın',
        description:
          'Ham SQL Sorgusu alanına çok satırlı veya tek satırlı ifadeler dahil herhangi bir SELECT, INSERT, UPDATE, DELETE veya DDL sorgusu girin.',
      },
      {
        title: 'Güzelleştir veya Küçült modunu seçin',
        description:
          'Sorguyu okunabilir girintili bölümlere yaymak için Güzelleştir seçeneğini ya da günlükler ve kod için tek satıra indirmek için Küçült seçeneğini seçin.',
      },
      {
        title: 'Anahtar sözcük durumunu ve girintiyi ayarlayın',
        description:
          'Ekip stil kılavuzunuzla eşleşmesi için BÜYÜK HARF veya küçük harf SQL anahtar sözcüklerini seçin ve 2 boşluklu ya da 4 boşluklu girinti seçin.',
      },
      {
        title: 'Biçimlendirilmiş çıktıyı inceleyin',
        description:
          'Bölüm kesmelerinin, JOIN ifadelerinin ve alt sorguların beklendiği gibi hizalandığını ve dizgiler ile yorumların dokunulmadan kaldığını kontrol edin.',
      },
      {
        title: 'Biçimlendirilmiş SQL kodunu kopyalayın veya yeniden kullanın',
        description:
          'SQL Kopyala düğmesini kullanarak standartlaştırılmış sorguyu düzenleyicinize, geçiş dosyanıza veya çekme isteğinize geri götürün.',
      },
      {
        title: 'Biçimlendirme sorununu düzeltin',
        description:
          'Çıktı yanlış görünüyorsa girdinizdeki dengelenmemiş tırnakları veya eksik noktalı virgülü kontrol edin, ardından yeniden yapıştırıp biçimlendirin.',
      },
    ],
    examples: [
      {
        title: 'Çok katılımlı sorguyu biçimlendirme',
        input: 'select u.id, count(o.id) from users u left join orders o on o.user_id = u.id where u.active = 1;',
        output: 'SELECT u.id,\n  count(o.id)\nFROM users u\nLEFT JOIN orders o\nON o.user_id = u.id\nWHERE u.active = 1;',
        explanation: 'Büyük SQL bölümlerini ayrı satırlara böler ve anahtar sözcük durumunu standartlaştırır.',
      },
      {
        title: 'Sorguyu tek satıra indirme',
        input: 'SELECT id\nFROM users\nWHERE active = 1;',
        output: 'SELECT id FROM users WHERE active = 1;',
        explanation: 'Küçült modu, sorguyu günlük veya kod içinde kullanmak için tek satıra çevirir.',
      },
    ],
    benefits: [
      'Tek tırnaklı dizgi sabitlerini ve SQL yorumlarını dokunmadan korur',
      'LEFT OUTER JOIN, GROUP BY ve ORDER BY gibi çok sözcüklü bölümleri destekler',
      'Güzelleştir ve Küçült modları arasında kolayca geçiş yapar',
      'Yerel çalışır; bu yüzden özel tablo ve şema adları gizli kalır',
    ],
    useCases: [
      'Performans hata ayıklaması için ORM ile oluşturulan SQL günlüklerini temizleme',
      'Çekme isteği incelemesinden önce SQL betiklerini standartlaştırma',
      'CLI betikleri için çok satırlı sorguyu tek satırlık dizgiye indirme',
      'Ekip SQL stil kılavuzunda anahtar sözcük durumunu hizalama',
    ],
    faqs: [
      {
        question: 'SQL Biçimlendirici tablo adlarını veya tırnak içindeki metni değiştirir mi?',
        answer:
          'Hayır. Belirteçleyici, dizgi sabitlerini ve yorumları ayrı tutar; bu yüzden büyük/küçük harf anahtar sözcük biçimlendirmesi yalnızca tanınan SQL anahtar sözcüklerine uygulanır.',
      },
      {
        question: 'Hangi SQL lehçeleri destekleniyor?',
        answer:
          'SELECT, JOIN, WHERE, GROUP BY, HAVING, ORDER BY, LIMIT, INSERT, UPDATE ve DELETE içeren standart ANSI SQL bölümleri (PostgreSQL, MySQL, SQLite, SQL Server) desteklenir.',
      },
      {
        question: 'Biçimlendirilmiş sorguyu tek satıra geri küçültebilir miyim?',
        answer:
          'Evet. Yorumları kaldırıp fazla boşlukları daraltmak için mod düğmesini Küçült seçeneğine çevirin.',
      },
      {
        question: 'SQL Biçimlendirici ücretsiz mi?',
        answer:
          'Evet. SQL Biçimlendirici tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'SQL Biçimlendirici sorgumu bir sunucuya gönderir mi?',
        answer:
          'Hayır. Tüm biçimlendirme tarayıcınızda yerel olarak gerçekleşir; bu yüzden sorgunuzdaki tablo adları, şema bilgileri ve veri değerleri asla cihazınızdan çıkmaz.',
      },
      {
        question: 'Alt sorgu ve CTE içeren SQL biçimlendirebilir miyim?',
        answer:
          'Evet. İç içe SELECT ifadeleri ve ortak tablo ifadeleri (WITH ... AS), yapının okunabilir kalması için kendi girinti düzeyleriyle biçimlendirilir.',
      },
      {
        question: 'SQL Biçimlendirici INSERT, UPDATE ve DELETE ifadelerini işler mi?',
        answer:
          'Evet. INSERT, UPDATE ve DELETE ifadeleri SELECT sorgularıyla birlikte biçimlendirilir; bölümleri ayrı satırlara bölünür.',
      },
      {
        question: 'CREATE TABLE gibi DDL ifadelerini biçimlendirebilir miyim?',
        answer:
          'Evet. CREATE TABLE, ALTER TABLE ve DROP TABLE gibi DDL ifadelerini yapıştırıp aynı anahtar sözcük durumu ve girinti kurallarıyla biçimlendirebilirsiniz.',
      },
      {
        question: 'SQL Biçimlendirici hangi girinti seçeneklerini sunar?',
        answer:
          'Güzelleştirilmiş sorgular için 2 boşluklu veya 4 boşluklu girinti seçebilirsiniz; böylece çıktı düzenleyicinizle veya ekip stil kılavuzunuzla eşleşir.',
      },
      {
        question: 'Biçimlendirme SQL sorgumun işleyişini değiştirir mi?',
        answer:
          'Hayır. Biçimlendirme yalnızca boşlukları ve anahtar sözcük durumunu değiştirir; sorgu mantığının hiçbir parçasını eklemez, kaldırmaz veya yeniden sıralamaz.',
      },
      {
        question: 'Birden çok SQL sorgusunu aynı anda biçimlendirebilir miyim?',
        answer:
          'Evet. Noktalı virgülle ayrılmış birden çok ifadeyi yapıştırıp tek geçişte biçimlendirebilirsiniz.',
      },
      {
        question: 'SQL Biçimlendirici MySQL, PostgreSQL ve SQL Server sözdizimiyle çalışır mı?',
        answer:
          'Evet. MySQL, PostgreSQL, SQLite ve SQL Server içinde kullanılan standart ANSI SQL formatını, yaygın bölüm anahtar sözcükleriyle birlikte işler.',
      },
      {
        question: 'Biçimlendirirken SQL içindeki yorumlar korunur mu?',
        answer:
          'Evet. Tek satırlı ve blok yorumlar belirteçleyiciden korunarak geçer; ancak Küçült modu en küçük çıktıyı oluşturmak için yorumları kaldırır.',
      },
      {
        question: 'SQL ifademde sözdizimi hatası varsa ne olur?',
        answer:
          'Biçimlendirici yine de metni olabildiğince işler; çünkü sorguyu çalıştırmak yerine belirteçler üzerinde çalışır. Yine de SQL kodunu veritabanında çalıştırmadan önce hatayı düzeltin.',
      },
      {
        question: 'Uygulama kodu veya günlükler için SQL küçültebilir miyim?',
        answer:
          'Evet. Küçült modu sorguyu tek satıra indirirken dizgi sabitleri korunur; bu, SQL kodunu koda gömmek veya kompakt olarak günlüğe kaydetmek için idealdir.',
      },
      {
        question: 'SQL Biçimlendirici pencere işlevlerini destekliyor mu?',
        answer:
          'Evet. ROW_NUMBER() OVER (PARTITION BY ...) gibi pencere işlevleri SELECT listesinin parçası olarak biçimlendirilir ve OVER bölümleri doğru kalır.',
      },
      {
        question: 'Ne kadar büyük SQL biçimlendirebilirim, boyut sınırı var mı?',
        answer:
          'Araçta sabit bir karakter sınırı yoktur; çünkü tarayıcınızda çalışır. Yine de çok uzun sorgular yavaş cihazlarda bir an sürebilir.',
      },
      {
        question: 'SQL Biçimlendiriciyi telefonda kullanabilir miyim?',
        answer:
          'Evet. Herhangi bir modern mobil tarayıcıda çalışır; bu yüzden hiçbir şey kurmadan telefonda veya tablette SQL yapıştırıp biçimlendirebilirsiniz.',
      },
      {
        question: 'SQL Biçimlendirici dizgi sabitlerinin içindeki satır sonlarını korur mu?',
        answer:
          'Evet. Tek tırnaklı dizgi sabitlerinin içindeki metne dokunulmaz; bu yüzden çok satırlı dizgiler özgün satır sonlarını korur.',
      },
      {
        question: 'Ekip içinde anahtar sözcük durumunu SQL Biçimlendirici ile nasıl standartlaştırırım?',
        answer:
          'BÜYÜK HARF anahtar sözcükler gibi bir durum stili üzerinde anlaşın ve her sorguyu depoya işlemeden önce aynı ayarla biçimlendiriciden geçirin.',
      },
    ],
  },
  'css-minifier': {
    instructions: [
      {
        title: 'Küçült veya Güzelleştir seçin',
        description:
          'Üretim için dosya ağırlığını azaltmak için CSS Küçült seçeneğini ya da sıkıştırılmış bir stil sayfasına girintiyi geri kazandırmak için CSS Güzelleştir seçeneğini seçin.',
      },
      {
        title: 'Stil sayfanızı yapıştırın',
        description:
          'Girdi CSS alanına tam bir stil sayfası ya da bir parça dahil olmak üzere CSS kuralları, özel özellikler veya `@media` blokları girin.',
      },
      {
        title: 'Aracı çalıştırın ve istatistikleri görün',
        description:
          'Çıktı yazarken güncellenir; Küçült modunda tam girdi baytını, çıktı baytını ve tasarruf yüzdesini görün.',
      },
      {
        title: 'Çıktıyı dikkatle inceleyin',
        description:
          '@media bloklarının, tırnaklı dizgilerin ve url(...) değerlerinin doğru korunduğunu ve Güzelleştir modunda iç içe kuralların doğru girintilendiğini doğrulayın.',
      },
      {
        title: 'CSS kodunu kopyalayın veya indirin',
        description:
          'Sonucu stil sayfanıza, satır içi <style> bloğunuza veya dağıtım derleme adımınıza yapıştırmak için CSS Kopyala düğmesine tıklayın.',
      },
      {
        title: 'Düz veya bozuk bir çıktıyı düzeltin',
        description:
          'Güzelleştir çıktısı düz görünüyorsa veya kurallar birbirine karışıyorsa girdinizde eksik bir kapanış süslü parantezi kontrol edin ve yeniden denemeden önce ekleyin.',
      },
    ],
    examples: [
      {
        title: 'Kart kuralını sıkıştırma',
        input: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        output: '.card{padding:16px;border:1px solid #e2e8f0}',
        explanation: 'Yeni satırları, noktalama çevresindeki boşlukları ve blok içindeki son noktalı virgülü kaldırır.',
      },
      {
        title: 'Küçültülmüş CSS kodunu okunabilir yapma',
        input: '.card{padding:16px;border:1px solid #e2e8f0}',
        output: '.card {\n  padding: 16px;\n  border: 1px solid #e2e8f0;\n}',
        explanation: 'Güzelleştir modu, sıkıştırılmış kuralı girintili, okunabilir biçime yayar.',
      },
    ],
    benefits: [
      'Belirteçleyici, tırnaklı dizgileri (örneğin content: "..." veya url(...)) korur',
      '/* ... */ yorumları ve gereksiz boşlukları güvenli şekilde kaldırır',
      'Tam girdi baytını, çıktı baytını ve tasarruf yüzdesini gösterir',
      'Üçüncü taraf küçültülmüş CSS kodunu incelemek için Güzelleştir modu içerir',
    ],
    useCases: [
      'HTML e-postalar ve açılış sayfaları için satır içi <style> parçalarını sıkıştırma',
      'Görsel hata ayıklama sırasında üretim CSS paketini küçültmeden çıkarma',
      'Dağıtımdan önce stil sayfası ağırlık tasarrufunu denetleme',
      'Eski stil sayfalarındaki aralık tutarsızlıklarını temizleme',
    ],
    faqs: [
      {
        question: 'CSS küçültme, content: "..." dizgisinin içindeki boşluğu bozar mı?',
        answer:
          'Hayır. Tek ve çift tırnaklı dizgi sabitleri belirteçleyiciden olduğu gibi korunarak geçer.',
      },
      {
        question: 'Küçültme, "}" işaretinden önceki son noktalı virgülü neden kaldırır?',
        answer:
          'CSS sözdiziminde kapanış süslü parantezinden önceki son bildirim için sondaki noktalı virgül gerekli değildir; bu da her kural bloğunda 1 bayt tasarruf sağlar.',
      },
      {
        question: 'Güzelleştir modunda iç içe @media bloklarını destekliyor mu?',
        answer:
          'Evet. @media ve @supports bloklarında süslü parantez derinliği izlenir; böylece iç kurallar doğru girintilenir.',
      },
      {
        question: 'CSS Küçültücü ücretsiz mi?',
        answer:
          'Evet. CSS Küçültücü tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'CSS Küçültücü stil sayfamı bir yere yüklüyor mu?',
        answer:
          'Hayır. Tüm küçültme ve güzelleştirme tarayıcınızda yerel olarak gerçekleşir; bu yüzden CSS kodunuz asla cihazınızdan çıkmaz.',
      },
      {
        question: 'Küçülttükten sonra CSS kodum ne kadar küçülecek?',
        answer:
          'Stil sayfanızda ne kadar yorum ve fazla boşluk olduğuna bağlıdır; araç girdiniz için tam bayt sayısını ve tasarruf yüzdesini gösterir.',
      },
      {
        question: 'CSS küçültme @media sorgularını kaldırır mı?',
        answer:
          'Hayır. @media sorguları ve koşulları tam olarak korunur; çünkü onları kaldırmak sayfanın ekran boyutuna göre davranışını değiştirir.',
      },
      {
        question: 'Özel özellikli (değişkenli) CSS kodunu küçültebilir miyim?',
        answer:
          'Evet. --brand-color gibi özel özellikler ve var() başvuruları normal bildirim sayılır ve doğru kalır.',
      },
      {
        question: 'CSS Küçültücü url(...) ve content dizgilerini korur mu?',
        answer:
          'Evet. url(...) ve content özelliği içindeki tırnaklı dizgiler olduğu gibi korunur; bu yüzden görüntü yolları ve oluşturulan metin doğru kalır.',
      },
      {
        question: 'Küçültülmüş CSS tüm tarayıcılarda çalışır mı?',
        answer:
          'Evet. Küçültme yalnızca tarayıcıların zaten yok saydığı yorumları ve gereksiz boşlukları kaldırır; bu yüzden işlenen sonuç aynı olur.',
      },
      {
        question: 'Üretim paketinden CSS kodunu güzelleştirebilir miyim?',
        answer:
          'Evet. Herhangi bir küçültülmüş stil sayfasını Güzelleştir moduna yapıştırarak hata ayıklama için girintili, okunabilir kurallara yayın.',
      },
      {
        question: 'CSS Küçültücü @keyframes ve @font-face yapılarını işler mi?',
        answer:
          'Evet. @keyframes, @font-face ve @import gibi at-kuralları korunur ve Güzelleştir modunda iç blokları doğru girintilenir.',
      },
      {
        question: 'CSS Küçültücüde küçültme ile güzelleştirme arasındaki fark nedir?',
        answer:
          'Küçültme, üretim için yorumları ve boşlukları kaldırarak CSS kodunu küçültür; Güzelleştirme ise sıkıştırılmış CSS kodunu düzenleme ve hata ayıklama için okunabilir girintili kurallara yayar.',
      },
      {
        question: 'Birden çok stil sayfasını aynı anda küçültebilir miyim?',
        answer:
          'Evet. Birden çok stil sayfasını tek girdiye birlikte yapıştırabilirsiniz; ancak ilgili dosyaları ayrı tutmak çıktıyı yönetmeyi kolaylaştırır.',
      },
      {
        question: 'CSS Küçültücü kullanılmayan CSS kurallarını kaldırır mı?',
        answer:
          'Hayır. Yalnızca yorumları ve boşlukları kaldırır; HTML kodunuzun hangi seçicileri kullandığını çözümlemez, bu yüzden kullanılmayan kurallar çıktıda kalır.',
      },
      {
        question: 'CSS Küçültücünün gösterdiği bayt tasarruf yüzdesi doğru mu?',
        answer:
          'Evet. Girdi ve çıktınızın gerçek bayt sayısından hesaplanır; bu yüzden yüzde gerçek tasarrufunuzu gösterir.',
      },
      {
        question: 'Satır içi <style> parçaları için CSS Küçültücü kullanabilir miyim?',
        answer:
          'Evet. Küçük parçalar tam stil sayfaları gibi küçültülür; bu, satır içi stilli HTML e-postalar ve açılış sayfaları için işe yarar.',
      },
      {
        question: 'CSS Küçültücü grid ve iç içe kurallar gibi modern CSS destekliyor mu?',
        answer:
          'Evet. grid ve flexbox gibi modern özelliklere dokunulmaz ve iç içe kurallar Güzelleştir modunda süslü parantez derinliğine göre girintilenir.',
      },
      {
        question: 'CSS kodumda sözdizimi hatası varsa ne olur?',
        answer:
          'Araç yine de metni işler; ancak eksik bir süslü parantez veya kapanmamış bir dizgi çıktıyı karıştırabilir, bu yüzden üretim için küçültmeden önce sözdizimi hatalarını düzeltin.',
      },
      {
        question: 'CSS kodunu telefonda küçültebilir miyim?',
        answer:
          'Evet. CSS Küçültücü herhangi bir modern mobil tarayıcıda çalışır; bu yüzden hiçbir şey kurmadan stil sayfası yapıştırıp küçültebilirsiniz.',
      },
    ],
  },
  'js-formatter': {
    instructions: [
      {
        title: 'JS Küçült veya JS Güzelleştir seçin',
        description:
          'Kompakt çıktı için yorumları ve boşlukları kaldırmak üzere JS Küçült seçeneğini ya da okunabilir girintiyi geri kazandırmak için 2 veya 4 boşluklu JS Güzelleştir seçeneğini seçin.',
      },
      {
        title: 'Kod parçanızı yapıştırın',
        description:
          'Soldaki düzenleyiciye bir işlevden tam bir betik bloğuna kadar JavaScript veya TypeScript kodu girin.',
      },
      {
        title: 'Güzelleştir modu için girintiyi ayarlayın',
        description:
          'Güzelleştirilmiş kodun düzenleyicinizle veya proje stilinizle eşleşmesi için 2 boşluklu ya da 4 boşluklu girinti seçin.',
      },
      {
        title: 'Bayt tasarrufunu ve çıktıyı görün',
        description:
          'Küçült modunda bayt azalmasını doğrulayın ve dizgilerin, şablon sabitlerinin ve regex desenlerinin doğru olduğunu görmek için çıktıyı tarayın.',
      },
      {
        title: 'İşlenmiş kodu kopyalayın',
        description:
          'Küçültülmüş veya güzelleştirilmiş kodu düzenleyicinize, yer imi uygulamanıza (bookmarklet) veya satır içi betiğinize taşımak için Kopyala düğmesini kullanın.',
      },
      {
        title: 'Küçültme sorununu düzeltin',
        description:
          'Küçültülmüş kod garip davranırsa önce girdinizdeki eksik noktalı virgülleri ekleyin; çünkü boşluk kaldırıldıktan sonra otomatik noktalı virgül ekleme belirsiz olabilir.',
      },
    ],
    examples: [
      {
        title: 'Yorumları ve boşlukları kaldırma',
        input: '// Yardımcı\nfunction add(a, b) {\n  return a + b;\n}',
        output: 'function add(a,b){return a + b}',
        explanation: 'Mantığa dokunmadan yorumları ve süslü parantez çevresindeki boşlukları kaldırır.',
      },
      {
        title: 'Küçültülmüş kodu okunabilir yapma',
        input: 'function add(a,b){return a + b}',
        output: 'function add(a, b) {\n  return a + b;\n}',
        explanation: 'Güzelleştir modu, kompakt tek satırlık kodu girintili satırlara yayar.',
      },
    ],
    benefits: [
      'Sözlüksel belirteçleyici tek, çift ve ters tırnaklı şablon dizgilerini korur',
      'Küçült modunda // tek satırlı ve /* */ blok yorumların ikisini de kaldırır',
      'Canlı bayt azalma yüzdesi bildirir',
      'Hiçbir kodu dışarı göndermeden hızlı, yalnızca tarayıcıda çalışma',
    ],
    useCases: [
      'Kompakt satır içi betik veya yer imi uygulaması hazırlama',
      'Okunabilir yapmak için sıkıştırılmış tek satırlık parçaları açma',
      'Kod örneklerini paylaşmadan önce geliştirici yorumlarını kaldırma',
      'Yapıştırılan JS işlevini hızlıca yeniden girintileme',
    ],
    faqs: [
      {
        question: 'Bu araç Terser veya esbuild gibi değişken adlarını değiştirir mi?',
        answer:
          'Hayır. Tanımlayıcı adlarını değiştirmeden veya AST anlambilimini bozmadan yalnızca güvenli boşluk ve yorum küçültmesi yapar; bu da çıktıyı incelemeyi kolaylaştırır.',
      },
      {
        question: '"//" içeren dizgi sabitleri (örneğin URL adresleri) güvenli mi?',
        answer:
          'Evet. Yorumları tanımadan önce tırnaklı dizgiler ve şablon sabitleri belirteçlenir; bu yüzden tırnak içindeki URL adresleri asla yorum sayılmaz.',
      },
      {
        question: 'Çok ifadeli JS küçültürken noktalı virgül kullanmalı mıyım?',
        answer:
          'Herhangi bir JavaScript parçasını küçültmeden önce standart noktalı virgülleri eklemeniz önerilir; böylece ASI (Otomatik Noktalı Virgül Ekleme) belirsizliğinden kaçınılır.',
      },
      {
        question: 'JavaScript Küçültücü ücretsiz mi?',
        answer:
          'Evet. JavaScript Küçültücü tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'JavaScript Küçültücü kodumu bir sunucuya yüklüyor mu?',
        answer:
          'Hayır. Tüm küçültme ve biçimlendirme tarayıcınızda yerel olarak gerçekleşir; bu yüzden kodunuz asla cihazınızdan çıkmaz.',
      },
      {
        question: 'JavaScript Küçültücü TypeScript koduyla çalışır mı?',
        answer:
          'Evet. TypeScript parçaları aynı şekilde yapıştırılıp küçültülebilir veya güzelleştirilebilir; çünkü belirteçleyici standart JS ve TS sözdizimini işler.',
      },
      {
        question: 'Küçültme JavaScript kodumu bozar mı?',
        answer:
          'Kodunuz standart noktalı virgül kullandığı sürece hayır. Yalnızca yorumlar ve fazla boşluklar kaldırılır; bu yüzden mantık aynı kalır.',
      },
      {
        question: 'JavaScript Küçültücü console.log ifadelerini kaldırır mı?',
        answer:
          'Hayır. Yalnızca yorumları ve boşlukları kaldırır; bu yüzden console.log çağrıları ve diğer ifadeler çıktıda kalır.',
      },
      {
        question: 'Üretim paketinden küçültülmüş kodu güzelleştirebilir miyim?',
        answer:
          'Evet. Kompakt tek satırlık kodu Güzelleştir moduna yapıştırarak hata ayıklama için okunabilir satırlara yeniden girintileyin.',
      },
      {
        question: 'JavaScript Küçültücü ${} ifadeli şablon sabitlerini işler mi?',
        answer:
          'Evet. ${} enterpolasyonu içeren ters tırnaklı şablon sabitleri dizgi olarak belirteçlenip tam olarak korunur.',
      },
      {
        question: 'JavaScript Küçültücüde küçültme ile güzelleştirme arasındaki fark nedir?',
        answer:
          'Küçültme, satır içi kullanım için yorumları ve boşlukları kaldırarak kodu kısaltır; Güzelleştirme ise kompakt kodu düzenleme için okunabilir satırlara yeniden girintiler.',
      },
      {
        question: 'Ok işlevleri ve sınıflar içeren ES6 kodunu küçültebilir miyim?',
        answer:
          'Evet. Ok işlevleri, sınıflar, yapı bozma (destructuring) ve diğer modern ES6 sözdizimi, kodu değiştirmeden belirteçleyiciyle işlenir.',
      },
      {
        question: 'JavaScript Küçültücü JSX veya React kodunu destekliyor mu?',
        answer:
          'JSX özellikle desteklenmez; çünkü JSX içindeki açı parantezleri belirteçleyici tarafından yanlış okunabilir. Düz JavaScript veya TypeScript için kullanın; JSX için özel bir biçimlendirici kullanın.',
      },
      {
        question: 'Küçülttükten sonra JavaScript kodum ne kadar küçülecek?',
        answer:
          'Kodunuzda ne kadar yorum ve satır sonu olduğuna bağlıdır; araç parçanız için tam bayt sayısını ve tasarruf yüzdesini gösterir.',
      },
      {
        question: 'Birden çok JavaScript dosyasını aynı anda küçültebilir miyim?',
        answer:
          'Araç tek seferde bir parça işler; bu yüzden her dosyayı ayrı yapıştırın. Tüm proje için esbuild veya Terser gibi bir paketleyici kullanın.',
      },
      {
        question: 'JavaScript Küçültücü düzenli ifadeleri korur mu?',
        answer:
          'Evet. Düzenli ifade sabitleri belirteçleyici tarafından tanınır ve desen içindeki // karakterleri dahil doğru kalır.',
      },
      {
        question: 'JavaScript kodumda sözdizimi hatası varsa ne olur?',
        answer:
          'Araç yine de metni işler; ancak dengesiz süslü parantezler veya kapanmamış bir dizgi garip çıktı oluşturabilir, bu yüzden küçültmeden önce sözdizimi hatalarını düzeltin.',
      },
      {
        question: 'JavaScript Küçültücüyü yer imi uygulaması için kullanabilir miyim?',
        answer:
          'Evet. Küçült modu yer imi uygulamaları için idealdir; çünkü parçayı, yer imi URL adresine yapıştırılabilen kompakt tek satıra çevirir.',
      },
      {
        question: 'Küçültülmüş çıktıyı HTML script etiketine yapıştırmak güvenli mi?',
        answer:
          'Genellikle evet; ancak dizginizin içindeki gerçek "</script>" dizisinden kaçının; çünkü tarayıcı bunu betik bloğunun sonu sayar.',
      },
      {
        question: 'JavaScript kodunu telefonda biçimlendirebilir miyim?',
        answer:
          'Evet. JavaScript Küçültücü herhangi bir modern mobil tarayıcıda çalışır; bu yüzden hiçbir şey kurmadan kod yapıştırıp biçimlendirebilirsiniz.',
      },
    ],
  },
  'cron-expression-parser': {
    instructions: [
      {
        title: '5 alanlı cron ifadesi girin veya hazır ayar seçin',
        description:
          '`0 9 * * 1-5` gibi herhangi bir cron ifadesi yazın ya da bilinen bir desenle başlamak için yaygın zamanlama hazır ayar düğmesine tıklayın.',
      },
      {
        title: 'Düz özeti ve alan dökümünü görün',
        description:
          'Zamanlamaya güvenmeden önce dakika, saat, ayın günü, ay ve haftanın günü alanlarının niyetinizle eşleştiğini doğrulayın.',
      },
      {
        title: 'Sonraki 8 çalıştırma zamanını doğrulayın',
        description:
          'Hesaplanan yaklaşan yerel yürütme zaman damgalarını görün; böylece işin beklediğiniz zamanda çalıştığını doğrulayın.',
      },
      {
        title: 'Adım, aralık ve listelerle alanları ayarlayın',
        description:
          '*/15 gibi adım değerleri, 1-5 gibi aralıklar veya 1,15 gibi listelerle zamanlamayı ince ayarlayın, ardından özeti ve çalıştırma zamanlarını yeniden denetleyin.',
      },
      {
        title: 'İfadeyi zamanlayıcınız için kopyalayın',
        description:
          'Doğrulanmış ifadeyi crontab dosyanıza, GitHub Actions iş akışınıza veya Cloudflare Worker cron tetikleyicinize kopyalayın.',
      },
      {
        title: 'Ayın günü ile haftanın günü konusuna dikkat edin',
        description:
          'İki gün alanı da sınırlıysa standart cron, biri eşleştiğinde çalışır. Yalnızca bir koşulu uygulamak istiyorsanız birinde * kullanın.',
      },
    ],
    examples: [
      {
        title: 'İş saatleri sabah işi',
        input: '0 9 * * 1-5',
        output: '09:00, haftanın günleri 1-5 (Pazartesi–Cuma).',
        explanation: 'Her Pazartesi ile Cuma arasında sabah 09:00 saatinde çalışır.',
      },
      {
        title: 'Her 15 dakikada bir çalışan iş',
        input: '*/15 * * * *',
        output: 'Her 15 dakikada: :00, :15, :30, :45.',
        explanation: 'Dakika alanındaki adım sözdizimi işi her 15 dakikada bir çalıştırır.',
      },
    ],
    benefits: [
      'Joker karakter (*), adım (*/5), aralık (1-5), liste (1,15) ve adları (PZT-CUM) destekler',
      'Yerel saat diliminizde sonraki 8 somut yürütme zaman damgasını hesaplar',
      'Sınır dışı değerleri veya eksik alanları anında işaretler',
      'Yaygın aralıklar için tek tıklamalı hazır ayarlar içerir',
    ],
    useCases: [
      'GitHub Actions `schedule.cron` ve Cloudflare Workers Cron Tetikleyicisi doğrulama',
      'Linux crontab yedekleme veya temizlik zamanlamalarında hata ayıklama',
      'Haftanın günü (0–6) ile ayın günü (1–31) mantığını yeniden denetleme',
      'İşlem çalıştırma kitapları için yinelenen iş zamanlamalarını belgeleme',
    ],
    faqs: [
      {
        question: 'Bu ayrıştırıcı saniyeli 6 alanlı cron ifadelerini destekliyor mu?',
        answer:
          'Bu araç, Linux cron, GitHub Actions ve Cloudflare Workers içinde kullanılan standart 5 alanlı Unix crontab ifadelerini (dakika, saat, ayın günü, ay, haftanın günü) ayrıştırır.',
      },
      {
        question: 'Ayın Günü ve Haftanın Günü alanlarının ikisi de joker değilse ne olur?',
        answer:
          'Standart Vixie/Unix cron davranışına göre iki gün alanı da sınırlıysa çalıştırma, Ayın Günü veya Haftanın Günü alanlarından biri eşleştiğinde tetiklenir.',
      },
      {
        question: 'PZT–CUM ve OCA–ARA adları destekleniyor mu?',
        answer:
          'Evet. Standart 3 harfli İngilizce ay ve haftanın günü kısaltmalarının yanı sıra Pazar için sayısal 0 veya 7 de desteklenir.',
      },
      {
        question: 'Cron İfadesi Ayrıştırıcı ücretsiz mi?',
        answer:
          'Evet. Cron İfadesi Ayrıştırıcı tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Cron ifadesi nedir?',
        answer:
          'Cron ifadesi, sisteme bir işi otomatik olarak ne zaman çalıştıracağını söyleyen kompakt 5 alanlı bir zamanlama dizgisidir; örneğin her saat veya haftanın her günü sabah 9 gibi.',
      },
      {
        question: 'Cron ifadesinin 5 alanı ne anlama gelir?',
        answer:
          'Soldan sağa sırasıyla dakika (0-59), saat (0-23), ayın günü (1-31), ay (1-12) ve haftanın günü (0-7; 0 ve 7 ikisi de Pazar anlamına gelir) alanlarıdır.',
      },
      {
        question: 'Cron işini her 5 dakikada bir nasıl çalıştırırım?',
        answer:
          'Dakika alanında adım sözdizimi kullanın: */5 * * * * işi her 5 dakikada bir, :00, :05, :10 gibi zamanlarda çalıştırır.',
      },
      {
        question: 'Hafta içi sabah 9 için cron işini nasıl zamanlarım?',
        answer:
          '0 9 * * 1-5 kullanın; bu, dakika 0, saat 9, ayın herhangi bir günü, herhangi bir ay ve haftanın günleri Pazartesi ile Cuma arası anlamına gelir.',
      },
      {
        question: 'Cron ifadesinde */15 ne anlama gelir?',
        answer:
          '*/15 adım sözdizimi, o alanın her 15 birimi anlamına gelir; bu yüzden dakika alanındaki */15 işi her 15 dakikada bir çalıştırır.',
      },
      {
        question: 'Cron içinde Pazar için 0 ile 7 arasındaki fark nedir?',
        answer:
          'Fark yoktur; haftanın günü alanında 0 ve 7 ikisi de Pazar gününü gösterir, bu yüzden hangisini isterseniz onu kullanın.',
      },
      {
        question: 'Bu Cron İfadesi Ayrıştırıcıyı GitHub Actions zamanlaması için kullanabilir miyim?',
        answer:
          'Evet. GitHub Actions aynı 5 alanlı cron sözdizimini kullanır; bu yüzden zamanlamayı iş akışı dosyasına yapıştırmadan önce burada doğrulayabilirsiniz.',
      },
      {
        question: 'Cron İfadesi Ayrıştırıcı saat dilimimi hesaba katıyor mu?',
        answer:
          'Sonraki 8 çalıştırma zamanı yerel tarayıcı saat diliminizde gösterilir; ancak cronun kendisinin sunucu saat diliminde çalıştığını unutmayın, bu yüzden sunucu ayarınızı da denetleyin.',
      },
      {
        question: 'Yanlış bir cron ifadesi girersem ne olur?',
        answer:
          'Ayrıştırıcı, sınır dışı değerleri veya eksik alanları anında işaretler; böylece ifadeyi dağıtmadan önce düzeltebilirsiniz.',
      },
      {
        question: 'Ayın son günü için cron işi zamanlayabilir miyim?',
        answer:
          'Standart 5 alanlı cron içinde son gün sözdizimi yoktur. Yaygın geçici çözüm, 28-31 günlerine zamanlamak ve işin kendisinin son gün olup olmadığını denetlemesine izin vermektir.',
      },
      {
        question: 'Cron ifadesinde L ve W ne anlama gelir?',
        answer:
          'L (son) ve W (hafta içi) Quartz tarzı uzantılardır, standart Unix cron parçası değildir; bu yüzden bu ayrıştırıcı onları desteklemez.',
      },
      {
        question: 'Günde iki kez cron işi nasıl çalıştırırım?',
        answer:
          'Saat alanında iki saati de listeleyin; örneğin 0 6,18 * * * işi her gün sabah 6 ve akşam 6 saatinde çalıştırır.',
      },
      {
        question: 'Cron İfadesi Ayrıştırıcı saniye veya 6 alanlı ifadeleri destekliyor mu?',
        answer:
          'Hayır. Yalnızca standart 5 alanlı Unix ifadelerini destekler; saniye gerektiren zamanlayıcılar ayrı bir 6 alanlı biçim kullanır.',
      },
      {
        question: 'Belirli bir tarih aralığı için cron çalıştırmalarını önizleyebilir miyim?',
        answer:
          'Araç, bugünden itibaren sonraki 8 yaklaşan çalıştırma zamanının önizlemesini verir. Özel tarih aralığı görünümü yoktur; ancak sonraki 8 çalıştırma genellikle zamanlama hatalarını ortaya çıkarır.',
      },
      {
        question: 'Cron işim neden beklenmedik günlerde çalışıyor?',
        answer:
          'En yaygın neden, iki gün alanını da — ayın günü ve haftanın günü — sınırlamaktır; bu, biri eşleştiğinde çalıştırma tetikler. Düzeltmek için birini * olarak ayarlayın.',
      },
      {
        question: 'Yaygın zamanlamalar için cron hazır ayarlarını kullanabilir miyim?',
        answer:
          'Evet. Araçta her saat, günlük, haftalık ve aylık gibi yaygın aralıklar için tek tıklamalı hazır ayarlar bulunur; bunları daha sonra özelleştirebilirsiniz.',
      },
    ],
  },
  'color-converter': {
    instructions: [
      {
        title: 'Renk seçin veya yazın',
        description:
          'Renk seçiciyi kullanın, 3 veya 6 basamaklı HEX kodu girin ya da ön plan rengini ayarlamak için ayrı R/G/B veya H/S/L kanallarını ayarlayın.',
      },
      {
        title: 'HEX, RGB ve HSL değerlerini görün',
        description:
          'Üç gösterimde eşitlenmiş değerleri görün ve canlı renk örneğinin istediğiniz renkle eşleştiğini doğrulayın.',
      },
      {
        title: 'CSS renk değerini kopyalayın',
        description:
          'Stil sayfanız veya tasarım belirteçleriniz için hazır CSS dizgisini almak üzere HEX Kopyala, RGB Kopyala veya HSL Kopyala düğmesine tıklayın.',
      },
      {
        title: 'Arka plan rengi seçin',
        description:
          'Kontrast denetimi için ön plan renginizle karşılaştırmak üzere aşağıdan bir arka plan rengi seçin.',
      },
      {
        title: 'WCAG kontrast sonuçlarını görün',
        description:
          'Göndermeden önce AA Normal, AAA Normal ve AA Büyük Metin için tam kontrast oranını ve Geçti/Kaldı durumunu okuyun.',
      },
      {
        title: 'Kalan kontrast çiftini düzeltin',
        description:
          'Çift kalırsa metni koyultmak için HSL içinde Parlaklığı azaltın (veya arka planı açın); oran normal metin için en az 4.5:1 olana kadar devam edin.',
      },
    ],
    examples: [
      {
        title: 'Beyaz üzerinde erişilebilir kobalt mavisi',
        input: 'Ön Plan: #2563EB · Arka Plan: #FFFFFF',
        output: 'RGB: rgb(37, 99, 235) · HSL: hsl(221, 83%, 53%) · Kontrast: 5.17:1 (AA Geçti)',
        explanation: 'Standart gövde metni için 4.5:1 WCAG AA koşulunu sağlar.',
      },
      {
        title: 'Kalan açık marka rengi',
        input: 'Ön Plan: #93C5FD · Arka Plan: #FFFFFF',
        output: 'Kontrast: 2.02:1 (AA Kaldı)',
        explanation: 'Açık mavi, beyaz üzerinde AA sınırının altında kalır; metin için daha koyu bir ton kullanın ya da yalnızca büyük metin ve süs öğeleriyle sınırlayın.',
      },
    ],
    benefits: [
      'HEX, RGB ve HSL kanallarını gerçek zamanlı olarak iki yönde eşitler',
      'Yerleşik WCAG 2.1 göreli parlaklık kontrast hesaplayıcı içerir',
      'AA Normal (4.5:1), AAA Normal (7.0:1) ve AA Büyük (3.0:1) eşiklerini test eder',
      'Geçerli CSS renk dizgisi için tek tıklamalı kopyalama',
    ],
    useCases: [
      'Arayüzü uygularken düğme ve bağlantı metni kontrastını doğrulama',
      'Tailwind veya CSS değişkenleri için marka HEX paletini HSL biçimine çevirme',
      'Tarayıcıdan çıkmadan parlaklık ve doygunluğu ince ayarlama',
      'Tasarım tesliminden önce erişilebilirlik uygunluğunu denetleme',
    ],
    faqs: [
      {
        question: 'WCAG 2.1 AA, gövde metni için ne kadar kontrast oranı ister?',
        answer:
          'WCAG 2.1 AA, normal metinde en az 4.5:1 ve büyük metinde 3.0:1 ister (18pt / 24px normal veya 14pt / 18.66px kalın).',
      },
      {
        question: '#09f gibi 3 basamaklı kısaltılmış HEX kodu girebilir miyim?',
        answer:
          'Evet. Üç harfli HEX kodları otomatik olarak 6 harfli karşılığına genişler; bu yüzden #09f #0099ff olur ve tam kod gibi dönüştürülür.',
      },
      {
        question: 'HSL ile tema ayarlamak RGB ile ayarlamaktan neden daha kolay?',
        answer:
          'HSL, Ton, Doygunluk ve Parlaklığı ayırır; bu yüzden yalnızca Parlaklık yüzdesini değiştirerek marka rengini koyultabilir veya açabilirsiniz.',
      },
      {
        question: 'Renk Dönüştürücü ücretsiz mi?',
        answer:
          'Evet. Renk Dönüştürücü tamamen ücretsizdir; kayıt gerekmez ve tamamen tarayıcınızda çalışır.',
      },
      {
        question: 'Renk Dönüştürücü renklerimi saklar mı?',
        answer:
          'Hayır. Dönüşüm ve kontrast denetimi tarayıcınızda yerel olarak gerçekleşir; bu yüzden palet tercihleriniz asla yüklenmez veya saklanmaz.',
      },
      {
        question: 'Renk Dönüştürücü ile HEX kodunu RGB biçimine nasıl çeviririm?',
        answer:
          '#2563EB gibi bir HEX kodu girin; RGB değeri anında görünür ve CSS rgb() dizgisi olarak kopyalamaya hazır olur.',
      },
      {
        question: 'RGB değerini HSL biçimine nasıl çeviririm?',
        answer:
          'RGB değerini girin ya da R, G ve B kanallarını ayarlayın; eşleşen HSL değeri aynı panelde canlı olarak güncellenir.',
      },
      {
        question: 'HEX, RGB ve HSL arasındaki fark nedir?',
        answer:
          'HEX rengin kompakt kodudur, RGB onu kırmızı, yeşil ve mavi miktarıyla anlatır, HSL ise onu ton, doygunluk ve parlaklıkla anlatır. Aynı rengi farklı gösterimlerle anlatırlar.',
      },
      {
        question: 'WCAG AAA için ne kadar kontrast oranı gerekir?',
        answer:
          'WCAG AAA, normal metinde en az 7.0:1 ve büyük metinde 4.5:1 ister; bu, AA düzeyinden daha katıdır.',
      },
      {
        question: 'WCAG kontrastı için büyük metin ne sayılır?',
        answer:
          'Büyük metin, normal ağırlıkta 18pt (24px) veya daha büyük ya da kalın ağırlıkta 14pt (18.66px) veya daha büyüktür. Büyük metin AA için yalnızca 3.0:1 oran ister.',
      },
      {
        question: 'Renk Dönüştürücüde saydamlık (alfa) içeren renk dönüştürebilir miyim?',
        answer:
          'Bu dönüştürücü alfa kanalı olmayan düz renkleri işler. Saydamlık için dönüştürülen RGB değerlerini alıp rgba() işlevi içinde kullanın.',
      },
      {
        question: 'Renk Dönüştürücü alfa içeren 8 basamaklı HEX kodu destekliyor mu?',
        answer:
          'Hayır. Dönüştürücü standart 3 ve 6 basamaklı HEX kodlarını kabul eder; saydamlık için rgba() içinde alfa değeriyle RGB çıktısını kullanın.',
      },
      {
        question: 'Renk Dönüştürücü ile görüntüden renk seçebilir miyim?',
        answer:
          'Hayır. Araç görüntü örneklemez; ihtiyacınız olan rengin HEX değerini girin ya da yerleşik renk seçiciyle seçin.',
      },
      {
        question: 'WCAG kontrast oranı nasıl hesaplanır?',
        answer:
          'WCAG 2.1 belirtiminde verilen formülle ön plan ve arka plan renklerinin göreli parlaklığından hesaplanır.',
      },
      {
        question: 'Marka rengim beyaz üzerinde neden AA kalıyor?',
        answer:
          'Açık veya orta tonlu marka renkleri beyaz karşısında genellikle 4.5:1 eşiğinin altında kalır. Rengi koyultun ya da yalnızca büyük metin ve süs öğeleri için kullanın.',
      },
      {
        question: 'Renk Dönüştürücü ile rengi CSS değişkeni olarak kopyalayabilir miyim?',
        answer:
          'Evet. HEX, RGB veya HSL değerini kopyalayıp --brand: #2563EB gibi bir CSS özel özelliğine yapıştırın, ardından var(--brand) ile başvurun.',
      },
      {
        question: 'HSL ile HSV arasındaki fark nedir?',
        answer:
          'HSL rengi ton, doygunluk ve parlaklıkla anlatır; HSV ise ton, doygunluk ve değer (parlaklık) kullanır. Erişilebilir açık ve koyu tema varyantları oluşturmak için HSL genellikle daha kolaydır.',
      },
      {
        question: 'Renk Dönüştürücüde "red" gibi adlandırılmış CSS renkleri dönüştürebilir miyim?',
        answer:
          'Adlandırılmış renk yerine onun HEX değerini girin; örneğin red için #FF0000. Araç HEX, RGB ve HSL girdilerini kabul eder.',
      },
      {
        question: 'Marka rengimin daha koyu tonunu nasıl bulurum?',
        answer:
          'Rengi HSL biçimine çevirin, ton ve doygunluğu aynı tutun ve istediğiniz tonu bulana kadar Parlaklık yüzdesini azaltın.',
      },
      {
        question: 'Renk Dönüştürücüyü telefonda kullanabilir miyim?',
        answer:
          'Evet. Renk Dönüştürücü herhangi bir modern mobil tarayıcıda çalışır; bu yüzden hiçbir şey kurmadan renk dönüştürüp kontrast denetleyebilirsiniz.',
      },
    ],
  },
};
